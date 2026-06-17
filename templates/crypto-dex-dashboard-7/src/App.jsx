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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // State
      let activeIndex = 0;
      // Reverse cards so index 0 matches the front card (visual order)
      const cards = Array.from(document.querySelectorAll('.card')).reverse();
      const totalCards = cards.length;
      const timelineItems = document.querySelectorAll('[data-index]');
      const prevBtn = document.getElementById('prev-btn');

      function updateUI() {
          cards.forEach((card, index) => {
              const dist = index - activeIndex;

              card.style.zIndex = 50 - index;
              // Smooth transitions for all transform/opacity/filter changes
              card.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.6s ease, filter 0.6s ease';

              if (dist === 0) {
                  // Active card (Front)
                  card.style.transform = 'translate3d(0, 0, 0) scale(1)';
                  card.style.opacity = '1';
                  card.style.filter = 'brightness(1)';
                  card.style.pointerEvents = 'auto';
              }
              else if (dist > 0) {
                  // Stacked behind (Folded/Tab style)
                  // We increase the Y offset to make the "fold" (headers) more visible
                  const scale = 1 - (dist * 0.05);
                  const translateY = -(dist * 35) + 'px';
                  const translateZ = -(dist * 40) + 'px'; // Add depth

                  card.style.transform = `translate3d(0, ${translateY}, ${translateZ}) scale(${scale})`;
                  card.style.opacity = dist > 3 ? '0' : '1';
                  // Dim cards further back to enhance depth perception
                  card.style.filter = `brightness(${1 - (dist * 0.2)})`;
                  card.style.pointerEvents = 'none';
              }
              else {
                  // Scrolled past (move down/out)
                  card.style.transform = 'translate3d(0, 120%, 0) scale(1) rotate(-5deg)';
                  card.style.opacity = '0';
                  card.style.filter = 'brightness(1)';
                  card.style.pointerEvents = 'none';
              }
          });

          // Update Timeline
          timelineItems.forEach(item => {
              const itemIndex = parseInt(item.getAttribute('data-index'));
              const iconContainer = item.querySelector('div');
              const text = item.querySelector('span');

              item.classList.remove('opacity-100', 'opacity-30');
              text.classList.remove('font-bold', 'text-[#7CFF6B]', 'text-gray-500');
              text.classList.add('font-medium');

              if (itemIndex === activeIndex) {
                  item.classList.add('opacity-100');
                  text.classList.add('font-bold', 'text-[#7CFF6B]');
                  text.classList.remove('text-gray-500');

                  iconContainer.className = "w-3 h-3 rounded-full bg-[#7CFF6B] flex items-center justify-center shadow-[0_0_10px_rgba(124,255,107,0.4)] transition-all duration-300";
                  iconContainer.innerHTML = '<div class="w-1.5 h-1.5 bg-black rounded-full"></div>';
              } else {
                  item.classList.add('opacity-30');
                  text.classList.add('text-gray-500');

                  iconContainer.className = "w-2.5 h-2.5 rounded-full border-2 border-gray-700 bg-[#050607] group-hover:border-gray-500 transition-all duration-300";
                  iconContainer.innerHTML = '';
              }
          });
      }

      let isScrolling = false;
      window.addEventListener('wheel', (e) => {
          if (isScrolling) return;
          if (Math.abs(e.deltaY) > 20) {
              isScrolling = true;
              if (e.deltaY > 0) {
                  // Scroll Down -> Next Card
                  if (activeIndex < totalCards - 1) {
                      activeIndex++;
                      updateUI();
                  }
              } else {
                  // Scroll Up -> Prev Card
                  if (activeIndex > 0) {
                      activeIndex--;
                      updateUI();
                  }
              }
              setTimeout(() => { isScrolling = false; }, 600);
          }
      });

      let touchStartY = 0;
      window.addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY; });
      window.addEventListener('touchend', e => {
          const touchEndY = e.changedTouches[0].clientY;
          const diff = touchStartY - touchEndY;
          if (Math.abs(diff) > 50) {
              if (diff > 0) {
                   if (activeIndex < totalCards - 1) { activeIndex++; updateUI(); }
              } else {
                  if (activeIndex > 0) { activeIndex--; updateUI(); }
              }
          }
      });

      timelineItems.forEach(item => {
          item.addEventListener('click', () => {
              const idx = parseInt(item.getAttribute('data-index'));
              activeIndex = idx;
              updateUI();
          });
      });

      if(prevBtn) {
          prevBtn.addEventListener('click', () => {
              if (activeIndex > 0) {
                  activeIndex--;
                  updateUI();
              }
          });
      }

      updateUI();
    
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
      

<header className="pt-8 flex flex-col items-center gap-3 z-50">

<div className="flex flex-col items-center gap-4">
<div className="px-3 py-1 rounded border border-[#7CFF6B]/30 bg-[#7CFF6B]/5">
<span className="text-[#7CFF6B] text-[10px] font-bold tracking-[0.2em] font-mono">
            [ THE FUTURE OF DEXES ]
          </span>
</div>

<div className="text-center">
<h1 className="text-3xl md:text-4xl font-extrabold tracking-tight flex flex-col items-center gap-1 text-white uppercase">
            TXFLOW STACK
          </h1>
<p className="text-xs text-gray-500 mt-2 font-mono tracking-wide">
            // LIVE MONITORING
          </p>
</div>
</div>
</header>

<main className="relative flex-1 w-full flex items-center justify-center" id="stack-container">

<div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 flex flex-col items-start gap-6 z-40 hidden sm:flex">

<div className="absolute left-[5px] top-2 bottom-2 w-[1px] bg-gray-800 -z-10"></div>

<div className="group flex items-center gap-4 cursor-pointer transition-all duration-300 opacity-30" data-index="3">
<div className="w-2.5 h-2.5 rounded-full border-2 border-gray-700 bg-[#050607] group-hover:border-gray-500"></div>
<span className="text-xs font-medium text-gray-500 font-mono uppercase">
            Scalability
          </span>
</div>
<div className="group flex items-center gap-4 cursor-pointer transition-all duration-300 opacity-30" data-index="2">
<div className="w-2.5 h-2.5 rounded-full border-2 border-gray-700 bg-[#050607] group-hover:border-gray-500"></div>
<span className="text-xs font-medium text-gray-500 font-mono uppercase">
            Security
          </span>
</div>
<div className="group flex items-center gap-4 cursor-pointer transition-all duration-300 opacity-30" data-index="1">
<div className="w-2.5 h-2.5 rounded-full border-2 border-gray-700 bg-[#050607] group-hover:border-gray-500"></div>
<span className="text-xs font-medium text-gray-500 font-mono uppercase">
            Throughput
          </span>
</div>
<div className="group flex items-center gap-4 cursor-pointer transition-all duration-300 opacity-100" data-index="0">
<div className="w-3 h-3 rounded-full bg-[#7CFF6B] flex items-center justify-center shadow-[0_0_10px_rgba(124,255,107,0.4)]">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
<span className="text-xs font-bold text-[#7CFF6B] font-mono uppercase">
            Finality
          </span>
</div>
</div>

<div className="relative w-full max-w-[600px] h-[360px] md:h-[400px] perspective-1000">

<div className="card absolute inset-0 w-full h-full bg-[#0E1012] border border-[#7CFF6B]/20 card-shadow transition-all duration-700 ease-spring origin-bottom" id="card-3">
<div className="w-full h-full overflow-hidden relative flex flex-col p-8">
<div className="absolute inset-0 tech-grid opacity-50"></div>

<div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-[#7CFF6B]/50"></div>
<div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-[#7CFF6B]/50"></div>
<div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-[#7CFF6B]/50"></div>
<div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-[#7CFF6B]/50"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded bg-[#7CFF6B]/10 flex items-center justify-center border border-[#7CFF6B]/20">
<i className="ri-server-line text-xl text-[#7CFF6B]"></i>
</div>
<span className="text-[10px] font-mono text-gray-600">
                  04 // NODE
                </span>
</div>
<div className="space-y-4">
<h2 className="text-2xl font-bold text-white font-mono uppercase tracking-tighter">
                  Infinite Scalability
                </h2>
<p className="text-sm text-gray-400 font-mono leading-relaxed border-l-2 border-[#7CFF6B]/30 pl-4">
                  Native support for horizontal sharding allows capacity to grow
                  with network demand.
                </p>
</div>
</div>
</div>
</div>

<div className="card absolute inset-0 w-full h-full bg-[#0E1012] border border-[#7CFF6B]/20 card-shadow transition-all duration-700 ease-spring origin-bottom" id="card-2">
<div className="w-full h-full overflow-hidden relative flex flex-col p-8">
<div className="absolute inset-0 tech-grid opacity-50"></div>

<div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-[#7CFF6B]/50"></div>
<div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-[#7CFF6B]/50"></div>
<div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-[#7CFF6B]/50"></div>
<div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-[#7CFF6B]/50"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded bg-[#7CFF6B]/10 flex items-center justify-center border border-[#7CFF6B]/20">
<i className="ri-shield-check-line text-xl text-[#7CFF6B]"></i>
</div>
<span className="text-[10px] font-mono text-gray-600">
                  03 // NODE
                </span>
</div>
<div className="space-y-4">
<h2 className="text-2xl font-bold text-white font-mono uppercase tracking-tighter">
                  Sovereign Security
                </h2>
<p className="text-sm text-gray-400 font-mono leading-relaxed border-l-2 border-[#7CFF6B]/30 pl-4">
                  Validator set is fully decoupled from execution, ensuring
                  censorship resistance.
                </p>
</div>
</div>
</div>
</div>

<div className="card absolute inset-0 w-full h-full bg-[#0E1012] border border-[#7CFF6B]/20 card-shadow transition-all duration-700 ease-spring origin-bottom" id="card-1">
<div className="w-full h-full overflow-hidden relative flex flex-col p-8">
<div className="absolute inset-0 tech-grid opacity-50"></div>

<div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-[#7CFF6B]/50"></div>
<div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-[#7CFF6B]/50"></div>
<div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-[#7CFF6B]/50"></div>
<div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-[#7CFF6B]/50"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded bg-[#7CFF6B]/10 flex items-center justify-center border border-[#7CFF6B]/20">
<i className="ri-speed-up-line text-xl text-[#7CFF6B]"></i>
</div>
<span className="text-[10px] font-mono text-gray-600">
                  02 // NODE
                </span>
</div>
<div className="space-y-4">
<h2 className="text-2xl font-bold text-white font-mono uppercase tracking-tighter">
                  Massive Throughput
                </h2>
<p className="text-sm text-gray-400 font-mono leading-relaxed border-l-2 border-[#7CFF6B]/30 pl-4">
                  Parallelized processing pipeline supporting 100,000+ TPS with
                  linear efficiency.
                </p>
</div>
</div>
</div>
</div>

<div className="card absolute inset-0 w-full h-full bg-[#0E1012] border border-[#7CFF6B] shadow-[0_0_30px_rgba(124,255,107,0.1)] transition-all duration-700 ease-spring origin-bottom overflow-hidden" id="card-0">
<div className="w-full h-full overflow-hidden relative flex flex-col p-8">
<div className="absolute inset-0 tech-grid"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#7CFF6B] opacity-5 blur-[100px] rounded-full"></div>

<div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-[#7CFF6B]"></div>
<div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-[#7CFF6B]"></div>
<div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-[#7CFF6B]"></div>
<div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-[#7CFF6B]"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded bg-[#7CFF6B] flex items-center justify-center shadow-lg shadow-[#7CFF6B]/20">
<i className="ri-pulse-line text-xl text-black"></i>
</div>
<span className="text-[10px] font-mono text-[#7CFF6B]">
                  01 // CORE
                </span>
</div>
<div className="space-y-4">
<h2 className="text-3xl font-bold text-white font-mono uppercase tracking-tighter">
                  Sub-second Finality
                </h2>
<p className="text-sm text-gray-300 font-mono leading-relaxed border-l-2 border-[#7CFF6B] pl-4">
                  Deterministic execution ensures trades settle instantly
                  (&lt;400ms) without rollback risk.
                </p>
</div>
</div>
</div>
</div>
</div>
</main>



    </>
  );
}
