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



      // ---------------------------------------------
      // 1. HERO & SPOTLIGHT INTERACTION
      // ---------------------------------------------
      document.addEventListener('DOMContentLoaded', () => {
        const hero = document.getElementById('hero');
        const spotlight = document.getElementById('hero-spotlight');
        const spotlightCore = document.getElementById('hero-spotlight-core');
        const cards = document.querySelectorAll('.telemetry-card');
        const bgVideo = document.getElementById('hero-bg-video');

        if (window.matchMedia("(hover: hover)").matches) {
          hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            // INTENSIFIED SPOTLIGHT
            spotlight.style.opacity = '1';
            spotlight.style.background = `radial-gradient(1000px at ${mouseX}px ${mouseY}px, rgba(234, 88, 12, 0.25), transparent 60%)`;
            
            spotlightCore.style.opacity = '1';
            spotlightCore.style.background = `radial-gradient(400px at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.08), transparent 60%)`;

            // Parallax
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const percentX = (mouseX - centerX) / centerX;
            const percentY = (mouseY - centerY) / centerY;

            if(bgVideo) bgVideo.style.transform = `scale(1.05) translate(${percentX * -15}px, ${percentY * -15}px)`;

            cards.forEach(card => {
              const depth = parseFloat(card.dataset.depth || 0.1);
              const moveX = percentX * 60 * depth;
              const moveY = percentY * 60 * depth;
              card.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${percentY * -8}deg) rotateY(${percentX * 8}deg)`;
            });
          });

          hero.addEventListener('mouseleave', () => {
            spotlight.style.opacity = '0';
            spotlightCore.style.opacity = '0';
            cards.forEach(card => card.style.transform = 'translate3d(0,0,0)');
          });
        }
      });

      // ---------------------------------------------
      // 2. NEURAL GRID GENERATION & INTERACTION
      // ---------------------------------------------
      document.addEventListener('DOMContentLoaded', () => {
        const gridContainer = document.getElementById('neural-grid');
        const nodeCountEl = document.getElementById('node-count');
        
        // Generate grid cells (200 cells)
        for (let i = 0; i < 200; i++) {
            const cell = document.createElement('div');
            cell.className = 'neural-cell border-r border-b border-zinc-800/30';
            gridContainer.appendChild(cell);
        }

        const cells = document.querySelectorAll('.neural-cell');
        
        // Hover interaction
        gridContainer.addEventListener('mousemove', (e) => {
           // Get element under cursor
           // This simple approach relies on css :hover, but let's add neighbor effect
           const rect = gridContainer.getBoundingClientRect();
           // Just update random numbers for "tech" feel
           if(Math.random() > 0.8) nodeCountEl.innerText = Math.floor(Math.random() * 500) + 120;
        });

        // Add neighbor class logic via mouseover
        cells.forEach((cell, index) => {
            cell.addEventListener('mouseenter', () => {
                cell.classList.add('active');
                // Light up neighbors randomly for organic feel
                const neighbors = [index-1, index+1, index-20, index+20];
                neighbors.forEach(n => {
                    if(cells[n] && Math.random() > 0.5) {
                        cells[n].classList.add('active');
                        setTimeout(() => cells[n].classList.remove('active'), 200);
                    }
                });
                // Remove active class after delay to create trail
                setTimeout(() => {
                    cell.classList.remove('active');
                }, 500);
            });
        });
      });

      // ---------------------------------------------
      // 3. EXPLODED VIEW PARALLAX FUNCTION
      // ---------------------------------------------
      function updateExplodedView(event) {
          const container = document.getElementById('exploded-container');
          if (!container) return;
          
          const rect = container.getBoundingClientRect();
          // Calculate distance from center of container vertical
          const centerY = rect.top + rect.height / 2;
          const distY = event.clientY - centerY;
          
          // Normalized -1 to 1 based on viewport height mostly
          const factor = Math.max(-1, Math.min(1, distY / 300));
          
          const layers = container.querySelectorAll('.layer-item');
          const line = container.querySelector('.layer-line');
          
          // Show line if separated
          if(Math.abs(factor) > 0.2) line.style.opacity = '1';
          else line.style.opacity = '0';

          layers.forEach(layer => {
              const speed = parseFloat(layer.getAttribute('data-speed'));
              // Move layers apart vertically based on mouse position
              // Top layer moves up, bottom moves down
              const yOffset = factor * speed * 40; // 40px multiplier
              
              // Add slight rotation
              const rotateX = -factor * 20; 
              
              layer.style.transform = `translate(-50%, calc(-50% - ${yOffset}px)) rotateX(${rotateX}deg)`;
          });
      }

      // ---------------------------------------------
      // 4. SPECS GRID "FLASHLIGHT" BORDER EFFECT
      // ---------------------------------------------
      document.addEventListener('DOMContentLoaded', () => {
        const grid = document.getElementById('specs-grid');
        if (!grid) return;
        
        grid.addEventListener('mousemove', (e) => {
          const cards = grid.querySelectorAll('.spotlight-card');
          cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
          });
        });
      });

      // ---------------------------------------------
      // 5. 3D CARDS & HOLOGRAPHIC SHEEN
      // ---------------------------------------------
      document.addEventListener('DOMContentLoaded', () => {
        const cards = document.querySelectorAll('.select-card');
        cards.forEach(card => {
          const inner = card.querySelector('.card-inner');
          
          if (window.matchMedia("(hover: hover)").matches) {
            card.addEventListener('mousemove', (e) => {
              if (inner.classList.contains('is-flipped')) return;
              
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              
              // Enhanced Rotation
              const rotateX = ((y - centerY) / centerY) * -12; 
              const rotateY = ((x - centerX) / centerX) * 12;

              inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
              
              // Update Sheen Position
              card.style.setProperty('--mouse-x', `${x}px`);
              card.style.setProperty('--mouse-y', `${y}px`);
            });

            card.addEventListener('mouseleave', () => {
              if (!inner.classList.contains('is-flipped')) {
                 inner.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
              }
            });
          }

          // Flip logic
          const flipBtn = card.querySelector('.flip-btn');
          const unflipBtn = card.querySelector('.unflip-btn');
          if(flipBtn) {
            flipBtn.addEventListener('click', (e) => {
              e.stopPropagation();
              inner.classList.add('is-flipped');
              inner.style.transform = 'rotateY(180deg)';
            });
          }
          if(unflipBtn) {
            unflipBtn.addEventListener('click', (e) => {
              e.stopPropagation();
              inner.classList.remove('is-flipped');
              inner.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
          }
        });
      });

      // ---------------------------------------------
      // 6. GENERAL UI LOGIC
      // ---------------------------------------------
      // Decode Text Effect
      const glitchText = document.querySelector('.glitch-text');
        if(glitchText) {
          const originalText = glitchText.dataset.text;
          const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_//";
          let interval = null;
          const startGlitch = () => {
            let iteration = 0;
            clearInterval(interval);
            interval = setInterval(() => {
              glitchText.innerText = originalText.split("").map((letter, index) => {
                if(index < iteration) return originalText[index];
                return chars[Math.floor(Math.random() * chars.length)];
              }).join("");
              if(iteration >= originalText.length) clearInterval(interval);
              iteration += 1/3;
            }, 30);
          };
          setTimeout(startGlitch, 500);
          glitchText.addEventListener('mouseover', startGlitch);
        }

      // Tab Switcher
      window.switchTab = function(index) {
        document.querySelectorAll('.scenario-tab').forEach(tab => {
          const isSelected = tab.getAttribute('data-index') == index;
          if(isSelected) {
            tab.classList.add('border-orange-600', 'bg-zinc-900/30');
            tab.classList.remove('border-transparent');
            tab.querySelector('.text-base').classList.remove('text-zinc-400');
            tab.querySelector('.text-base').classList.add('text-white');
          } else {
            tab.classList.remove('border-orange-600', 'bg-zinc-900/30');
            tab.classList.add('border-transparent');
            tab.querySelector('.text-base').classList.add('text-zinc-400');
            tab.querySelector('.text-base').classList.remove('text-white');
          }
        });
        document.querySelectorAll('.scenario-panel').forEach(panel => {
          if(panel.getAttribute('data-index') == index) {
            panel.classList.remove('opacity-0', 'pointer-events-none', 'z-0', 'translate-x-4');
            panel.classList.add('opacity-100', 'z-10', 'translate-x-0');
          } else {
            panel.classList.add('opacity-0', 'pointer-events-none', 'z-0', 'translate-x-4');
            panel.classList.remove('opacity-100', 'z-10', 'translate-x-0');
          }
        });
      };

      // Intersection Observers
      document.addEventListener("DOMContentLoaded", () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("sys-active");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        document.querySelectorAll(".sys-reveal").forEach(el => observer.observe(el));
      });
      
      // Recommendation Logic
      document.addEventListener('DOMContentLoaded', () => {
        let currentRadius = 'small';
        let currentTerrain = 'flat';
        const updateRecommendation = () => {
          let target = 'vanguard';
          if (currentRadius === 'large') target = 'goliath';
          else if (currentRadius === 'medium' || currentTerrain === 'complex') target = 'sentinel';
          document.querySelectorAll('.recommend-badge').forEach(el => el.style.opacity = '0');
          const targetCard = document.querySelector(`.select-card[data-model="${target}"]`);
          if(targetCard) {
             const badge = targetCard.querySelector('.recommend-badge');
             if(badge) badge.style.opacity = '1';
          }
        };
        const rBtns = document.querySelectorAll('.filter-btn-radius');
        rBtns.forEach(btn => btn.addEventListener('click', (e) => {
            rBtns.forEach(b => { b.classList.remove('bg-zinc-800', 'text-white', 'shadow-sm'); b.classList.add('text-zinc-500'); });
            e.target.classList.add('bg-zinc-800', 'text-white', 'shadow-sm'); e.target.classList.remove('text-zinc-500');
            currentRadius = e.target.dataset.value; updateRecommendation();
        }));
        const tBtns = document.querySelectorAll('.filter-btn-terrain');
        tBtns.forEach(btn => btn.addEventListener('click', (e) => {
             tBtns.forEach(b => { b.classList.remove('bg-zinc-800', 'text-white', 'shadow-sm'); b.classList.add('text-zinc-500'); });
            e.target.classList.add('bg-zinc-800', 'text-white', 'shadow-sm'); e.target.classList.remove('text-zinc-500');
            currentTerrain = e.target.dataset.value; updateRecommendation();
        }));
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
      

<div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-grid"></div>

<header className="relative z-50 h-16 border-b border-zinc-800 bg-[#050505]/95 backdrop-blur-sm flex items-center justify-between sticky top-0">

<div className="flex items-center h-full pl-6 pr-8 border-r border-zinc-800 bg-[#050505]">
<a className="flex items-center group gap-3" href="#">
<iconify-icon className="text-white text-2xl group-hover:text-orange-600 transition-colors" icon="solar:drone-charge-linear"></iconify-icon>
<span className="text-sm font-medium text-white tracking-widest uppercase">AERO<span className="text-zinc-600">_SYS</span></span>
</a>
<button aria-label="Toggle Tablet Navigation" className="hidden md:flex lg:hidden ml-6 w-10 h-10 border border-zinc-800 bg-zinc-900/30 items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-1 focus:ring-orange-600" id="tablet-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
<div className="hidden lg:flex items-center ml-6 px-3 py-1 border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm rounded-sm gap-2">
<span className="text-[10px] font-mono text-zinc-600 leading-none">[</span>
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
</span>
<span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">AIRSPACE: CLEAR</span>
<span className="text-[10px] font-mono text-zinc-600 leading-none">]</span>
</div>
</div>

<nav className="hidden lg:flex flex-1 h-full items-center justify-center">
<div className="flex h-full items-center border-x border-zinc-800/50">
<a className="flex items-center px-6 h-full text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-colors border-r border-zinc-800/50 relative group" href="#specs">
            Specs
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
</a>
<a className="flex items-center px-6 h-full text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-colors border-r border-zinc-800/50 relative group" href="#selector">
            Configurator
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
</a>
<a className="flex items-center px-6 h-full text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-colors border-r border-zinc-800/50 relative group" href="#missions">
            Missions
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
</a>
<a className="flex items-center px-6 h-full text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-colors border-r border-zinc-800/50 relative group" href="#architecture">
            Telemetry
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
</a>
</div>
</nav>

<div className="hidden md:flex items-center h-full border-l border-zinc-800 bg-[#050505]">
<a className="flex items-center px-8 h-full text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors border-r border-zinc-800 hover:bg-zinc-900/30" href="#">
          Pilot Login
        </a>
<button className="h-full px-8 bg-orange-600 text-white text-[10px] font-mono uppercase tracking-widest hover:bg-orange-500 transition-all flex items-center gap-2 group shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] font-medium">
          Order Unit
          <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>

<button className="md:hidden p-0 w-16 h-full text-zinc-400 hover:text-white border-l border-zinc-800 bg-[#050505] flex items-center justify-center transition-colors hover:bg-zinc-900" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</header>

<div className="fixed inset-x-0 top-16 bottom-0 z-40 bg-[#050505] transform translate-x-full transition-transform duration-300 md:hidden flex flex-col border-t border-zinc-800 overflow-y-auto" id="mobile-menu">
<div className="flex flex-col p-6 space-y-4">
<button className="w-full py-4 bg-orange-600 text-white text-xs font-mono uppercase tracking-widest hover:bg-orange-500 flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-900/20 font-medium">
          Order Unit
          <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<div className="flex flex-col border border-zinc-800 bg-zinc-900/20">
<a className="flex items-center justify-between p-4 border-b border-zinc-800 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors group" href="#specs">
            Specs
            <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-600" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
<a className="flex items-center justify-between p-4 border-b border-zinc-800 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors group" href="#selector">
            Configuration
            <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-600" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>

<main className="relative z-10 flex-1 flex flex-col md:flex-row">

<aside className="hidden md:flex flex-col w-16 border-r border-zinc-800 bg-[#050505] shrink-0 relative z-40">
<div className="sticky top-16 h-[calc(100vh-4rem)] flex flex-col items-center py-12 w-full">
<div className="absolute top-0 bottom-0 left-1/2 w-px bg-zinc-900 -translate-x-1/2 z-0"></div>
<nav className="flex flex-col gap-8 relative z-10 w-full items-center">
<a className="nav-link group relative flex items-center justify-center w-6 h-6 bg-[#050505] border text-[9px] font-mono hover:text-white hover:border-orange-600 transition-all duration-300" href="#hero">01</a>
<a className="nav-link group relative flex items-center justify-center w-6 h-6 bg-[#050505] border text-[9px] font-mono hover:text-white hover:border-orange-600 transition-all duration-300" href="#specs">02</a>
<a className="nav-link group relative flex items-center justify-center w-6 h-6 bg-[#050505] border text-[9px] font-mono hover:text-white hover:border-orange-600 transition-all duration-300 text-zinc-600 border-zinc-800" href="#selector">03</a>
<a className="nav-link group relative flex items-center justify-center w-6 h-6 bg-[#050505] border text-[9px] font-mono hover:text-white hover:border-orange-600 transition-all duration-300 text-zinc-600 border-zinc-800" href="#vision">04</a>
<a className="nav-link group relative flex items-center justify-center w-6 h-6 bg-[#050505] border text-[9px] font-mono hover:text-white hover:border-orange-600 transition-all duration-300 text-zinc-600 border-zinc-800" href="#neural">05</a>
<a className="nav-link group relative flex items-center justify-center w-6 h-6 bg-[#050505] border text-[9px] font-mono hover:text-white hover:border-orange-600 transition-all duration-300 text-zinc-600 border-zinc-800" href="#missions">06</a>
</nav>
<div className="mt-auto mb-12 flex flex-col items-center gap-4">
<div className="w-px h-12 bg-gradient-to-b from-zinc-800 to-transparent"></div>
<div className="text-[8px] font-mono text-zinc-700 -rotate-90 whitespace-nowrap tracking-widest uppercase">Flight_Sys_v4</div>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0 z-0 relative gap-x-12 gap-y-12">

<div className="min-h-[750px] flex overflow-hidden bg-[#050505] w-full border-zinc-800 border-b relative gap-x-12 gap-y-12 items-center perspective-1000" id="hero">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0 gap-x-12 gap-y-12 overflow-hidden">
<video autoplay="" className="pointer-events-none opacity-100 mix-blend-screen w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 transform scale-105 transition-transform duration-75" id="hero-bg-video" loop="" muted="" playsinline="">
<source className="" src="https://www-cdn.djiits.com/reactor/assets/_next/static/videos/fdaa1941-2093-48eb-836a-913613397978.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-[#050505]/40 z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/20 to-[#050505] z-10 pointer-events-none"></div>

<div className="absolute inset-0 z-10 opacity-0 transition-opacity duration-300 mix-blend-screen pointer-events-none" id="hero-spotlight" style={{background: 'radial-gradient(1000px at 336px 633px, rgba(234, 88, 12, 0.25), transparent 60%)'}}></div>

<div className="absolute inset-0 z-10 opacity-0 transition-opacity duration-300 mix-blend-overlay pointer-events-none" id="hero-spotlight-core" style={{background: 'radial-gradient(400px at 336px 633px, rgba(255, 255, 255, 0.08), transparent 60%)'}}></div>
</div>
<div className="container lg:px-12 grid grid-cols-1 lg:grid-cols-2 md:pt-32 md:pb-44 z-20 h-full mr-auto ml-auto pt-24 pr-6 pb-32 pl-6 relative gap-x-12 gap-y-12 items-center">

<div className="flex flex-col justify-center max-w-2xl relative z-30">
<div className="flex items-center gap-3 mb-8 sys-reveal sys-rise sys-active">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[10px] uppercase text-zinc-400 tracking-widest font-mono group cursor-crosshair hover:text-orange-600 transition-colors">
<span id="hero-status-text">LINK: ESTABLISHED</span> <span className="text-zinc-600 mx-2">//</span> READY FOR TAKEOFF
                </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white uppercase tracking-tight leading-[0.9] mb-8 sys-reveal sys-rise sys-delay-100 sys-active cursor-default" id="hero-title">
<span className="block hover:text-zinc-200 transition-colors duration-300">Aerial</span>
<span className="text-zinc-600 block glitch-text" data-text="Autonomy">Autonomy</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 font-mono leading-relaxed mb-10 max-w-md border-l-2 border-orange-600 pl-4 sys-reveal sys-rise sys-delay-200 sys-active">
                Next-gen autonomous drone fleets for industrial surveillance, logistics, and mapping. Precision engineering meets swarm intelligence.
              </p>
<div className="flex flex-col sm:flex-row gap-4 mb-8 sys-reveal sys-rise sys-delay-400 sys-active">
<a className="group bg-orange-600 hover:bg-orange-500 text-white text-xs font-mono uppercase tracking-widest px-8 py-4 transition-all flex items-center justify-center gap-3 font-medium shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_40px_rgba(234,88,12,0.6)] relative overflow-hidden" href="#selector">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  Configure
                  <iconify-icon className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" icon="solar:plain-2-linear" width="16"></iconify-icon>
</a>
<button className="group bg-transparent border border-zinc-700 hover:border-white text-zinc-400 hover:text-white text-xs font-mono uppercase tracking-widest px-8 py-4 transition-all flex items-center justify-center gap-3 font-medium backdrop-blur-sm">
                  View Tech Specs
                  <iconify-icon icon="solar:file-check-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="hidden lg:flex flex-col items-end justify-center relative h-full select-none" id="telemetry-container">
<div className="relative w-full max-w-sm perspective-1000 mt-12 mr-8">

<div className="telemetry-card absolute -top-32 right-0 w-64 bg-[#050505]/90 backdrop-blur-sm border border-zinc-800 p-5 z-10 sys-reveal sys-slide-l sys-delay-300 border-l-2 border-l-orange-600 sys-active" data-depth="0.1">
<div className="flex justify-between items-center mb-3 border-b border-zinc-800 pb-2">
<span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Active_Unit_04</span>
<iconify-icon className="text-orange-600 animate-pulse" icon="solar:gps-linear"></iconify-icon>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px] font-mono text-zinc-400"><span>LAT: <span className="telemetry-lat text-zinc-300">34.0522 N</span></span><span className="text-green-500">LOCKED</span></div>
<div className="flex justify-between text-[10px] font-mono text-zinc-400"><span>LNG: <span className="telemetry-lng text-zinc-300">118.2437 W</span></span><span className="text-green-500">LOCKED</span></div>
</div>
</div>

<div className="telemetry-card relative w-80 bg-[#080808]/95 backdrop-blur-sm border border-zinc-800 p-6 z-20 shadow-2xl sys-reveal sys-scale sys-delay-200 group hover:border-orange-600/50 transition-colors pointer-events-auto sys-active hover:shadow-[0_0_30px_rgba(234,88,12,0.15)]" data-depth="0.2">
<div className="absolute -left-px top-6 bottom-6 w-0.5 bg-orange-600"></div>
<div className="flex justify-between items-start mb-6">
<div>
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Battery_Cell_A</div>
<div className="text-3xl font-medium text-white tracking-tight">94%</div>
</div>
<div className="h-8 w-8 rounded-sm bg-orange-600/10 border border-orange-600/20 flex items-center justify-center">
<iconify-icon className="text-orange-600 text-lg" icon="solar:battery-charge-minimalistic-linear"></iconify-icon>
</div>
</div>
<div className="space-y-3">
<div>
<div className="flex justify-between text-[9px] font-mono text-zinc-600 uppercase mb-1">Range Remaining</div>
<div className="w-full bg-zinc-900 h-1"><div className="bg-orange-600 h-full w-[94%] relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-2 bg-white animate-pulse"></div></div></div>
</div>
</div>
</div>

<div className="telemetry-card absolute -bottom-24 right-8 w-64 bg-[#050505]/90 backdrop-blur-sm border border-zinc-800 p-4 z-10 sys-reveal sys-slide-l sys-delay-400 sys-active" data-depth="0.15">
<div className="flex justify-between items-center mb-3">
<span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Signal_Strength</span>
<span className="text-[9px] font-mono text-orange-600">-42dBm</span>
</div>
<div className="flex items-center gap-1 h-4 telemetry-signal-bars">
<div className="w-1 h-1 bg-green-500"></div><div className="w-1 h-2 bg-green-500"></div><div className="w-1 h-3 bg-green-500"></div><div className="w-1 h-4 bg-green-500"></div><div className="w-1 h-4 bg-zinc-800 border border-zinc-700"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="flex flex-col bg-[#050505] border-b border-zinc-800 relative group/section" id="specs">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(234,88,12,0.05),transparent_70%)] pointer-events-none"></div>
<div className="flex flex-col md:px-12 md:flex-row md:items-end md:pt-36 md:pb-28 overflow-hidden border-zinc-800 border-b pt-36 pr-8 pb-28 pl-8 relative justify-between z-10">
<div className="bg-center opacity-40 mix-blend-screen bg-[url('https://www-cdn.djiits.com/dps/60cbc17ddfe6f8857365dc1b5d2677da.jpg')] bg-cover absolute top-0 right-0 bottom-0 left-0 animate-[pulse_8s_ease-in-out_infinite]"></div>
<div className="opacity-80 mix-blend-multiply bg-gradient-to-b from-[#050505] via-transparent to-[#050505] absolute top-0 right-0 bottom-0 left-0 pointer-events-none"></div>

<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-600/80 to-transparent -translate-x-full animate-[shimmer_4s_infinite]"></div>
<div className="z-10 max-w-2xl relative">
<div className="text-[10px] font-mono text-orange-600 uppercase tracking-widest flex items-center gap-2 mb-4">
<span className="w-1.5 h-1.5 bg-orange-600 shadow-[0_0_10px_rgba(234,88,12,0.8)] animate-pulse"></span>
                // Hardware_Config
              </div>
<h2 className="text-3xl md:text-4xl font-medium text-white uppercase tracking-tight leading-none mb-4 relative inline-block group cursor-default">
<span className="relative z-10 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400">Flight</span>
<span className="text-zinc-600 transition-colors duration-300 group-hover:text-orange-600/80">Dynamics</span>
<div className="absolute -inset-4 bg-orange-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none"></div>
</h2>
<p className="text-sm text-zinc-500 font-mono leading-relaxed max-w-lg">
                Engineered for endurance and stability in hostile environments.
              </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative spotlight-grid" id="specs-grid">

<div className="group relative border-zinc-800 border-r border-b lg:border-b-0 min-h-[320px] flex flex-col transition-colors z-10 bg-[#050505]/50 card-item spotlight-card" style={{'--mouse-x': '227px', '--mouse-y': '30.25px'}}>

<div className="pt-8 pr-8 pb-8 pl-8 h-full flex flex-col justify-between relative z-10">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-1 group-hover:border-orange-600/50 group-hover:text-orange-600 group-hover:shadow-[0_0_15px_rgba(234,88,12,0.4)] transition-all duration-300 bg-[#050505]">FIG. 01</span>
<div className="relative">
<div className="absolute inset-0 bg-white/40 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors relative z-10" icon="solar:wind-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-3 group-hover:text-orange-500 transition-colors">Aerodynamics</h3>
<p className="leading-relaxed text-xs text-zinc-500 font-mono group-hover:text-zinc-400 transition-colors">Carbon-fiber reinforced chassis tested in 50mph crosswinds.</p>
</div>
</div>
</div>

<div className="group relative border-r border-b lg:border-b-0 border-zinc-800 min-h-[320px] flex flex-col transition-colors z-10 bg-[#050505]/50 card-item spotlight-card" style={{'--mouse-x': '-273.25px', '--mouse-y': '30.25px'}}>
<div className="pt-8 pr-8 pb-8 pl-8 h-full flex flex-col justify-between relative z-10">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-1 group-hover:border-orange-600/50 group-hover:text-orange-600 group-hover:shadow-[0_0_15px_rgba(234,88,12,0.4)] transition-all duration-300 bg-[#050505]">FIG. 02</span>
<div className="relative">
<div className="absolute inset-0 bg-white/40 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors relative z-10" icon="solar:bolt-circle-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-3 group-hover:text-orange-500 transition-colors">Propulsion</h3>
<p className="leading-relaxed text-xs text-zinc-500 font-mono group-hover:text-zinc-400 transition-colors">High-torque brushless motors delivering sub-second thrust response.</p>
</div>
</div>
</div>

<div className="group relative border-r border-b md:border-b-0 border-zinc-800 min-h-[320px] flex flex-col transition-colors z-10 bg-[#050505]/50 card-item spotlight-card" style={{'--mouse-x': '-773.5px', '--mouse-y': '30.25px'}}>
<div className="pt-8 pr-8 pb-8 pl-8 h-full flex flex-col justify-between relative z-10">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div>
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-1 group-hover:border-orange-600/50 group-hover:text-orange-600 group-hover:shadow-[0_0_15px_rgba(234,88,12,0.4)] transition-all duration-300 bg-[#050505]">FIG. 03</span>
<div className="relative">
<div className="absolute inset-0 bg-white/40 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors relative z-10" icon="solar:radar-2-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-3 group-hover:text-orange-500 transition-colors">Lidar Mapping</h3>
<p className="leading-relaxed text-xs text-zinc-500 font-mono group-hover:text-zinc-400 transition-colors">360° obstacle avoidance and terrain mapping in real-time.</p>
</div>
</div>
</div>

<div className="group relative border-b md:border-b-0 border-zinc-800 min-h-[320px] flex flex-col transition-colors z-10 bg-[#050505]/50 card-item spotlight-card" style={{'--mouse-x': '-1273.75px', '--mouse-y': '30.25px'}}>
<div className="pt-8 pr-8 pb-8 pl-8 h-full flex flex-col justify-between relative z-10">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div>
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-1 group-hover:border-orange-600/50 group-hover:text-orange-600 group-hover:shadow-[0_0_15px_rgba(234,88,12,0.4)] transition-all duration-300 bg-[#050505]">FIG. 04</span>
<div className="relative">
<div className="absolute inset-0 bg-white/40 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors relative z-10" icon="solar:wifi-router-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-3 group-hover:text-orange-500 transition-colors">Encrypted Link</h3>
<p className="leading-relaxed text-xs text-zinc-500 font-mono group-hover:text-zinc-400 transition-colors">AES-256 encrypted command link with frequency hopping.</p>
</div>
</div>
</div>
</div>
<style>
            @keyframes shimmer {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
          </style>
</section>

<section className="flex flex-col bg-[#050505] border-b border-zinc-800 py-24 relative overflow-hidden" id="selector">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="container mx-auto px-6 relative z-10">

<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
<div className="max-w-xl">
<div className="text-[10px] font-mono text-orange-600 uppercase tracking-widest flex items-center gap-2 mb-4">
<span className="w-1.5 h-1.5 bg-orange-600 animate-pulse"></span>
                  // Configurator
                </div>
<h2 className="text-4xl font-medium text-white uppercase tracking-tight mb-4">Select Configuration</h2>
<p className="text-sm text-zinc-500 font-mono leading-relaxed">AI-driven recommendation engine based on your operational profile.</p>
</div>

<div className="flex flex-col sm:flex-row gap-6">

<div className="flex flex-col gap-2">
<span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Coverage Radius</span>
<div className="flex p-1 bg-zinc-900 border border-zinc-800 rounded-lg">
<button className="flex-1 px-4 py-2 text-[10px] font-mono uppercase tracking-wider rounded transition-all bg-zinc-800 text-white shadow-sm filter-btn-radius" data-value="small">2mi</button>
<button className="flex-1 px-4 py-2 text-[10px] font-mono uppercase tracking-wider rounded transition-all text-zinc-500 hover:text-zinc-300 filter-btn-radius" data-value="medium">5mi</button>
<button className="flex-1 px-4 py-2 text-[10px] font-mono uppercase tracking-wider rounded transition-all text-zinc-500 hover:text-zinc-300 filter-btn-radius" data-value="large">10mi+</button>
</div>
</div>

<div className="flex flex-col gap-2">
<span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Terrain Type</span>
<div className="flex p-1 bg-zinc-900 border border-zinc-800 rounded-lg">
<button className="flex-1 px-4 py-2 text-[10px] font-mono uppercase tracking-wider rounded transition-all bg-zinc-800 text-white shadow-sm filter-btn-terrain" data-value="flat">Flat</button>
<button className="flex-1 px-4 py-2 text-[10px] font-mono uppercase tracking-wider rounded transition-all text-zinc-500 hover:text-zinc-300 filter-btn-terrain" data-value="complex">Complex</button>
</div>
</div>
</div>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 lg:pb-4 no-scrollbar lg:grid lg:grid-cols-3 perspective-1000" id="card-container">

<div className="min-w-[85vw] md:min-w-[45vw] lg:min-w-0 snap-center group perspective-1000 relative h-[500px] select-card" data-model="vanguard" style={{'--mouse-x': '391.5px', '--mouse-y': '363.5px'}}>
<div className="relative w-full h-full duration-500 preserve-3d transition-transform card-inner cursor-pointer rounded-2xl">

<div className="absolute inset-0 backface-hidden bg-[#080808] border border-zinc-800 rounded-2xl p-8 flex flex-col shadow-2xl overflow-hidden group-hover:border-zinc-500 group-hover:shadow-[0_0_50px_rgba(234,88,12,0.15)] transition-all ease-out">

<div className="inner-sheen absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-4 right-4 bg-orange-600/10 border border-orange-600/20 text-orange-600 text-[9px] font-mono uppercase tracking-widest px-3 py-1 rounded-full opacity-0 transition-opacity duration-300 recommend-badge">Recommended</div>
<div className="h-40 flex items-center justify-center relative mb-6 z-10 transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
<div className="absolute inset-0 z-10 flex items-center justify-center p-2"><img alt="Vanguard S1" className="w-full h-full object-contain drop-shadow-2xl" src="https://www-cdn.djiits.com/cms/uploads/7a47e78d9544ac4d7f83a9f840c50b67.png"/></div>
<iconify-icon className="text-6xl text-zinc-300" icon="solar:drone-linear"></iconify-icon>
</div>
<div className="flex flex-col flex-1 z-10">
<div className="flex gap-2 mb-3">
<span className="px-2 py-0.5 border border-zinc-800 bg-zinc-900/50 rounded text-[9px] font-mono text-zinc-400 uppercase">Urban</span>
<span className="px-2 py-0.5 border border-zinc-800 bg-zinc-900/50 rounded text-[9px] font-mono text-zinc-400 uppercase">Indoor</span>
</div>
<h3 className="text-2xl font-medium text-white uppercase tracking-tight mb-1 group-hover:text-orange-500 transition-colors">Vanguard <span className="text-zinc-600 group-hover:text-orange-600/50">S1</span></h3>
<p className="text-xs font-mono text-zinc-500 mb-6">Rapid deployment unit for tight spaces.</p>
<div className="space-y-3 mb-6 flex-1">
<div className="flex items-center justify-between pb-2 border-b border-zinc-800/50">
<div className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:battery-charge-linear"></iconify-icon><span className="text-xs text-zinc-400 font-mono">Flight Time</span></div>
<span className="text-xs text-white font-mono spec-time">28 min</span>
</div>
<div className="flex items-center justify-between pb-2 border-b border-zinc-800/50">
<div className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:map-arrow-linear"></iconify-icon><span className="text-xs text-zinc-400 font-mono">Range</span></div>
<span className="text-xs text-white font-mono spec-range">3 mi</span>
</div>
</div>
<div className="flex items-end justify-between">
<div><div className="text-[9px] font-mono text-zinc-500 uppercase mb-1">Starting at</div><div className="text-xl text-white font-medium">$2,499</div></div>
<button className="flip-btn bg-zinc-100 hover:bg-white text-black text-[10px] font-mono uppercase tracking-widest px-4 py-2 rounded-sm transition-all font-medium flex items-center gap-2">Details <iconify-icon icon="solar:info-circle-linear"></iconify-icon></button>
</div>
</div>
</div>

<div className="absolute inset-0 backface-hidden rotate-y-180 bg-zinc-900 border border-zinc-700 rounded-2xl p-8 flex flex-col shadow-2xl">
<div className="flex justify-between items-start mb-6">
<h4 className="text-sm font-medium text-white uppercase tracking-wider">Why Vanguard?</h4>
<button className="unflip-btn text-zinc-500 hover:text-white transition-colors"><iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon></button>
</div>
<ul className="space-y-4 mb-6 flex-1">
<li className="flex gap-3"><iconify-icon className="text-orange-600 min-w-[16px] mt-0.5" icon="solar:check-circle-bold"></iconify-icon><span className="text-xs text-zinc-300 font-mono leading-relaxed">Best-in-class obstacle avoidance for complex indoor environments.</span></li>
<li className="flex gap-3"><iconify-icon className="text-orange-600 min-w-[16px] mt-0.5" icon="solar:check-circle-bold"></iconify-icon><span className="text-xs text-zinc-300 font-mono leading-relaxed">Silent propulsion system (&lt;45dB).</span></li>
</ul>
<button className="w-full bg-orange-600 hover:bg-orange-500 text-white py-3 rounded-sm text-[10px] font-mono uppercase tracking-widest shadow-lg shadow-orange-900/20 active:scale-95 transition-all">Configure Vanguard</button>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[45vw] lg:min-w-0 snap-center group perspective-1000 relative h-[500px] select-card" data-model="sentinel" style={{'--mouse-x': '103.5px', '--mouse-y': '316.5px'}}>
<div className="relative w-full h-full duration-500 preserve-3d transition-transform card-inner cursor-pointer rounded-2xl">

<div className="absolute inset-0 backface-hidden bg-[#080808] border border-zinc-800 rounded-2xl p-8 flex flex-col shadow-2xl overflow-hidden group-hover:border-zinc-500 group-hover:shadow-[0_0_50px_rgba(234,88,12,0.15)] transition-all ease-out">
<div className="inner-sheen absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-4 right-4 bg-orange-600/10 border border-orange-600/20 text-orange-600 text-[9px] font-mono uppercase tracking-widest px-3 py-1 rounded-full opacity-0 transition-opacity duration-300 recommend-badge">Recommended</div>
<div className="h-40 flex items-center justify-center relative mb-6 z-10 transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
<div className="absolute inset-0 z-10 flex items-center justify-center p-2"><img alt="Sentinel X2" className="w-full h-full object-contain drop-shadow-2xl" src="https://www-cdn.djiits.com/cms/uploads/7a47e78d9544ac4d7f83a9f840c50b67.png"/></div>
<iconify-icon className="text-6xl text-zinc-300" icon="solar:drone-charge-minimalistic-linear"></iconify-icon>
</div>
<div className="flex flex-col flex-1 z-10">
<div className="flex gap-2 mb-3">
<span className="px-2 py-0.5 border border-zinc-800 bg-zinc-900/50 rounded text-[9px] font-mono text-zinc-400 uppercase">Patrol</span>
<span className="px-2 py-0.5 border border-zinc-800 bg-zinc-900/50 rounded text-[9px] font-mono text-zinc-400 uppercase">Thermal</span>
</div>
<h3 className="text-2xl font-medium text-white uppercase tracking-tight mb-1 group-hover:text-orange-500 transition-colors">Sentinel <span className="text-zinc-600 group-hover:text-orange-600/50">X2</span></h3>
<p className="text-xs font-mono text-zinc-500 mb-6">Balanced performance for perimeter security.</p>
<div className="space-y-3 mb-6 flex-1">
<div className="flex items-center justify-between pb-2 border-b border-zinc-800/50">
<div className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:battery-charge-linear"></iconify-icon><span className="text-xs text-zinc-400 font-mono">Flight Time</span></div>
<span className="text-xs text-white font-mono spec-time">45 min</span>
</div>
<div className="flex items-center justify-between pb-2 border-b border-zinc-800/50">
<div className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:map-arrow-linear"></iconify-icon><span className="text-xs text-zinc-400 font-mono">Range</span></div>
<span className="text-xs text-white font-mono spec-range">8 mi</span>
</div>
</div>
<div className="flex items-end justify-between">
<div><div className="text-[9px] font-mono text-zinc-500 uppercase mb-1">Starting at</div><div className="text-xl text-white font-medium">$5,999</div></div>
<button className="flip-btn bg-zinc-100 hover:bg-white text-black text-[10px] font-mono uppercase tracking-widest px-4 py-2 rounded-sm transition-all font-medium flex items-center gap-2">Details <iconify-icon icon="solar:info-circle-linear"></iconify-icon></button>
</div>
</div>
</div>

<div className="absolute inset-0 backface-hidden rotate-y-180 bg-zinc-900 border border-zinc-700 rounded-2xl p-8 flex flex-col shadow-2xl">
<div className="flex justify-between items-start mb-6">
<h4 className="text-sm font-medium text-white uppercase tracking-wider">Why Sentinel?</h4>
<button className="unflip-btn text-zinc-500 hover:text-white transition-colors"><iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon></button>
</div>
<ul className="space-y-4 mb-6 flex-1">
<li className="flex gap-3"><iconify-icon className="text-orange-600 min-w-[16px] mt-0.5" icon="solar:check-circle-bold"></iconify-icon><span className="text-xs text-zinc-300 font-mono leading-relaxed">Integrated thermal imaging for night operations.</span></li>
<li className="flex gap-3"><iconify-icon className="text-orange-600 min-w-[16px] mt-0.5" icon="solar:check-circle-bold"></iconify-icon><span className="text-xs text-zinc-300 font-mono leading-relaxed">IP54 Weather Rated.</span></li>
</ul>
<button className="w-full bg-orange-600 hover:bg-orange-500 text-white py-3 rounded-sm text-[10px] font-mono uppercase tracking-widest shadow-lg shadow-orange-900/20 active:scale-95 transition-all">Configure Sentinel</button>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[45vw] lg:min-w-0 snap-center group perspective-1000 relative h-[500px] select-card" data-model="goliath" style={{'--mouse-x': '70.5px', '--mouse-y': '494.5px'}}>
<div className="relative w-full h-full duration-500 preserve-3d transition-transform card-inner cursor-pointer rounded-2xl">

<div className="absolute inset-0 backface-hidden bg-[#080808] border border-zinc-800 rounded-2xl p-8 flex flex-col shadow-2xl overflow-hidden group-hover:border-zinc-500 group-hover:shadow-[0_0_50px_rgba(234,88,12,0.15)] transition-all ease-out">
<div className="inner-sheen absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-4 right-4 bg-orange-600/10 border border-orange-600/20 text-orange-600 text-[9px] font-mono uppercase tracking-widest px-3 py-1 rounded-full opacity-0 transition-opacity duration-300 recommend-badge">Recommended</div>
<div className="h-40 flex items-center justify-center relative mb-6 z-10 transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
<div className="absolute inset-0 z-10 flex items-center justify-center p-2"><img alt="Goliath Pro" className="w-full h-full object-contain drop-shadow-2xl" src="https://www-cdn.djiits.com/cms/uploads/7a47e78d9544ac4d7f83a9f840c50b67.png"/></div>
<iconify-icon className="text-6xl text-zinc-300" icon="solar:ufo-3-linear"></iconify-icon>
</div>
<div className="flex flex-col flex-1 z-10">
<div className="flex gap-2 mb-3">
<span className="px-2 py-0.5 border border-zinc-800 bg-zinc-900/50 rounded text-[9px] font-mono text-zinc-400 uppercase">Long Range</span>
<span className="px-2 py-0.5 border border-zinc-800 bg-zinc-900/50 rounded text-[9px] font-mono text-zinc-400 uppercase">Heavy Lift</span>
</div>
<h3 className="text-2xl font-medium text-white uppercase tracking-tight mb-1 group-hover:text-orange-500 transition-colors">Goliath <span className="text-zinc-600 group-hover:text-orange-600/50">Pro</span></h3>
<p className="text-xs font-mono text-zinc-500 mb-6">Heavy-duty platform for extensive mapping.</p>
<div className="space-y-3 mb-6 flex-1">
<div className="flex items-center justify-between pb-2 border-b border-zinc-800/50">
<div className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:battery-charge-linear"></iconify-icon><span className="text-xs text-zinc-400 font-mono">Flight Time</span></div>
<span className="text-xs text-white font-mono spec-time">65 min</span>
</div>
<div className="flex items-center justify-between pb-2 border-b border-zinc-800/50">
<div className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:map-arrow-linear"></iconify-icon><span className="text-xs text-zinc-400 font-mono">Range</span></div>
<span className="text-xs text-white font-mono spec-range">15 mi</span>
</div>
</div>
<div className="flex items-end justify-between">
<div><div className="text-[9px] font-mono text-zinc-500 uppercase mb-1">Starting at</div><div className="text-xl text-white font-medium">$12,500</div></div>
<button className="flip-btn bg-zinc-100 hover:bg-white text-black text-[10px] font-mono uppercase tracking-widest px-4 py-2 rounded-sm transition-all font-medium flex items-center gap-2">Details <iconify-icon icon="solar:info-circle-linear"></iconify-icon></button>
</div>
</div>
</div>

<div className="absolute inset-0 backface-hidden rotate-y-180 bg-zinc-900 border border-zinc-700 rounded-2xl p-8 flex flex-col shadow-2xl">
<div className="flex justify-between items-start mb-6">
<h4 className="text-sm font-medium text-white uppercase tracking-wider">Why Goliath?</h4>
<button className="unflip-btn text-zinc-500 hover:text-white transition-colors"><iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon></button>
</div>
<ul className="space-y-4 mb-6 flex-1">
<li className="flex gap-3"><iconify-icon className="text-orange-600 min-w-[16px] mt-0.5" icon="solar:check-circle-bold"></iconify-icon><span className="text-xs text-zinc-300 font-mono leading-relaxed">Dual-battery redundancy system.</span></li>
<li className="flex gap-3"><iconify-icon className="text-orange-600 min-w-[16px] mt-0.5" icon="solar:check-circle-bold"></iconify-icon><span className="text-xs text-zinc-300 font-mono leading-relaxed">RTK Module included for cm-level accuracy.</span></li>
</ul>
<button className="w-full bg-orange-600 hover:bg-orange-500 text-white py-3 rounded-sm text-[10px] font-mono uppercase tracking-widest shadow-lg shadow-orange-900/20 active:scale-95 transition-all">Configure Goliath</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col bg-[#050505] border-b border-zinc-800" id="vision">
<div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] group/section border-b border-zinc-800 bg-[#050505]">
<style>
        @keyframes scan-vertical {
            0% { top: 0%; opacity: 0; }
            15% { opacity: 1; }
            85% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
        .animate-scan { animation: scan-vertical 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
    </style>

<div className="overflow-hidden group/visual bg-zinc-900 border-zinc-800 md:border-r border-b md:border-b-0 relative cursor-crosshair select-none">

<div className="bg-center transition-all duration-1000 ease-out group-hover/visual:scale-105 group-hover/visual:opacity-50 opacity-30 mix-blend-luminosity bg-[url('https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80')] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.8)_120%)] pointer-events-none"></div>

<div className="absolute top-0 left-0 w-full h-[1px] bg-orange-500 shadow-[0_0_20px_rgba(234,88,12,1)] opacity-0 group-hover/visual:opacity-100 animate-scan pointer-events-none z-20"></div>

<div className="absolute top-6 right-6 bottom-6 left-6 pointer-events-none z-10 flex flex-col justify-between">

<div className="flex justify-between items-start">

<div className="w-8 h-8 border-l border-t border-zinc-500/50 group-hover/visual:border-orange-500 transition-colors duration-300 relative">
<div className="absolute top-0 left-0 w-1 h-1 bg-white"></div>
</div>

<div className="flex flex-col items-end gap-1 opacity-60 group-hover/visual:opacity-100 transition-opacity duration-300 transform group-hover/visual:translate-x-0 translate-x-2 transition-transform">
<div className="flex items-center gap-2">
<span className="text-[9px] font-mono text-zinc-400">REC</span>
<div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
</div>
<span className="text-[9px] font-mono text-orange-500">ISO 1200</span>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 flex items-center justify-center transition-all duration-500 group-hover/visual:scale-90">
<div className="absolute inset-0 border border-zinc-500/30 rounded-full group-hover/visual:border-orange-500/40 transition-colors"></div>
<div className="absolute inset-2 border-l border-r border-white/20 rounded-full animate-[spin_4s_linear_infinite] group-hover/visual:border-orange-500/60 opacity-0 group-hover/visual:opacity-100 transition-opacity"></div>
<div className="w-1 h-1 bg-white/80 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>

<div className="absolute top-1/2 left-0 w-2 h-px bg-white/50 -translate-y-1/2"></div>
<div className="absolute top-1/2 right-0 w-2 h-px bg-white/50 -translate-y-1/2"></div>
<div className="absolute top-0 left-1/2 w-px h-2 bg-white/50 -translate-x-1/2"></div>
<div className="absolute bottom-0 left-1/2 w-px h-2 bg-white/50 -translate-x-1/2"></div>
</div>

<div className="flex justify-between items-end">

<div className="text-[10px] font-mono text-white bg-black/60 border border-zinc-800 px-3 py-1.5 backdrop-blur-md flex items-center gap-3 group-hover/visual:border-orange-600/50 transition-colors shadow-lg">
<span>CAM_01</span>
<span className="text-zinc-500">|</span>
<span className="text-orange-500 tracking-wider">THERMAL_ACTIVE</span>
</div>

<div className="w-8 h-8 border-r border-b border-zinc-500/50 group-hover/visual:border-orange-500 transition-colors duration-300 relative">
<div className="absolute bottom-0 right-0 w-1 h-1 bg-white"></div>
</div>
</div>
</div>
</div>

<div className="md:p-16 flex flex-col pt-12 pr-12 pb-12 pl-12 justify-center relative z-10">

<div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-orange-600/5 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover/section:opacity-100 transition-opacity duration-700"></div>
<div className="relative">
<div className="text-[10px] font-mono text-orange-600 uppercase tracking-widest mb-6 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-pulse"></span>
               // Optical_Systems
            </div>
<h2 className="text-4xl font-medium text-white uppercase tracking-tight mb-6">
                See the
                <span className="text-zinc-600 group-hover/section:text-zinc-200 transition-colors duration-500 delay-75">Unseen</span>
</h2>
<p className="text-sm text-zinc-500 font-mono leading-relaxed mb-8 max-w-md group-hover/section:text-zinc-400 transition-colors duration-500 delay-100">
                Equipped with dual-sensor payloads. Capture 4K visible light imagery simultaneously with radiometric thermal data.
            </p>
<ul className="space-y-3">

<li className="group/item relative p-4 rounded-lg bg-zinc-900/0 hover:bg-zinc-900/50 border border-transparent hover:border-zinc-800/80 transition-all duration-300 cursor-default overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-orange-600 scale-y-0 group-hover/item:scale-y-100 transition-transform duration-300 origin-center"></div>
<div className="flex items-center gap-4 relative z-10">
<div className="w-8 h-8 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover/item:text-orange-500 group-hover/item:border-orange-500/30 transition-all">
<iconify-icon className="text-zinc-400 group-hover/item:text-orange-500 transition-colors" icon="solar:camera-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-mono text-zinc-300 group-hover/item:text-white transition-colors">64MP Main Sensor</span>
<span className="text-[10px] text-zinc-600 group-hover/item:text-zinc-500">1-inch CMOS / f2.8</span>
</div>
</div>
</li>

<li className="group/item relative p-4 rounded-lg bg-zinc-900/0 hover:bg-zinc-900/50 border border-transparent hover:border-zinc-800/80 transition-all duration-300 cursor-default overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-orange-600 scale-y-0 group-hover/item:scale-y-100 transition-transform duration-300 origin-center"></div>
<div className="flex items-center gap-4 relative z-10">
<div className="w-8 h-8 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover/item:text-orange-500 group-hover/item:border-orange-500/30 transition-all">
<iconify-icon className="text-zinc-400 group-hover/item:text-orange-500 transition-colors" icon="solar:fire-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-mono text-zinc-300 group-hover/item:text-white transition-colors">Radiometric Thermal</span>
<span className="text-[10px] text-zinc-600 group-hover/item:text-zinc-500">640x512 @ 30Hz</span>
</div>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>


<section className="flex flex-col scroll-mt-16 group bg-[#050505] border-zinc-800 relative" id="missions">
<div className="flex flex-col md:px-12 md:flex-row md:items-end md:pt-36 md:pb-28 bg-zinc-900/5 border-zinc-800 border-b pt-24 pr-8 pb-20 pl-8 gap-x-6 gap-y-6 justify-between">
<div className="max-w-2xl">
<div className="text-[10px] uppercase flex gap-2 text-orange-600 tracking-widest font-mono mb-6 items-center">
<span className="w-1.5 h-1.5 bg-orange-600"></span>
                // Use_Cases
              </div>
<h2 className="text-3xl md:text-4xl font-medium text-white uppercase tracking-tight mb-4 leading-none">
                Mission
                <span className="text-zinc-600">Profiles</span>
</h2>
</div>
</div>
<div className="hidden lg:grid grid-cols-12 min-h-[550px] border-zinc-800 border-b">

<div className="col-span-4 flex flex-col bg-[#050505] border-zinc-800 border-r">

<button className="scenario-tab group hover:bg-zinc-900/20 transition-all text-left bg-zinc-900/30 w-full border-zinc-800 border-b border-l-2 pt-8 pr-8 pb-8 pl-8" data-index="0" onclick="window.switchTab(0)">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-mono text-zinc-500 group-hover:text-orange-600 transition-colors uppercase tracking-wider">SEC_OPS</span>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="solar:shield-warning-linear" width="20"></iconify-icon>
</div>
<div className="text-base font-medium text-white uppercase tracking-tight mb-3">Surveillance</div>
<div className="inline-flex items-center px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-sm text-[10px] font-mono text-green-500">AUTONOMOUS PATROL</div>
</button>

<button className="scenario-tab group hover:bg-zinc-900/20 transition-all text-left w-full border-zinc-800 border-b border-l-2 pt-8 pr-8 pb-8 pl-8" data-index="1" onclick="window.switchTab(1)">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-mono text-zinc-500 group-hover:text-orange-600 transition-colors uppercase tracking-wider">ENERGY</span>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<div className="group-hover:text-white uppercase transition-colors text-base font-medium text-zinc-400 tracking-tight mb-3">Infrastructure Inspect</div>
<div className="inline-flex items-center px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-sm text-[10px] font-mono text-zinc-500 group-hover:text-green-500 transition-colors">THERMAL ANALYSIS</div>
</button>

<button className="scenario-tab group hover:bg-zinc-900/20 transition-all text-left w-full border-zinc-800 border-b border-l-2 pt-8 pr-8 pb-8 pl-8" data-index="2" onclick="window.switchTab(2)">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-mono text-zinc-500 group-hover:text-orange-600 transition-colors uppercase tracking-wider">MAPPING</span>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div className="group-hover:text-white uppercase transition-colors text-base font-medium text-zinc-400 tracking-tight mb-3">Terrain Survey</div>
<div className="inline-flex items-center px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-sm text-[10px] font-mono text-zinc-500 group-hover:text-green-500 transition-colors">LIDAR SCAN</div>
</button>
</div>

<div className="col-span-8 bg-[#080808] relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-10"></div>

<div className="scenario-panel absolute inset-0 opacity-100 z-10 transition-all duration-300" data-index="0">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none" loop="" muted="" playsinline="">
<source src="https://www-cdn.djiits.com/reactor/assets/_next/static/videos/43bec569-e244-4c89-adaf-2c041536b189.webm" type="video/webm"/>
</video>
<div className="flex flex-col h-full z-20 pt-16 pr-16 pb-16 pl-16 relative justify-between">
<div className="">
<h3 className="text-3xl text-white font-medium uppercase tracking-tight mb-6">Automated Perimeter Security</h3>
<p className="text-sm text-zinc-500 font-mono leading-relaxed mb-10">Deploy drone-in-a-box solutions that launch automatically when sensors trigger, providing immediate aerial visuals.</p>
</div>
</div>
</div>

<div className="scenario-panel absolute inset-0 flex flex-col justify-between opacity-0 pointer-events-none z-0 transition-all duration-300 transform translate-x-4" data-index="1">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none" loop="" muted="" playsinline="">
<source src="https://www-cdn.djiits.com/reactor/assets/_next/static/videos/fdaa1941-2093-48eb-836a-913613397978.mp4" type="video/mp4"/>
</video>
<div className="flex flex-col h-full z-20 pt-16 pr-16 pb-16 pl-16 relative justify-between">
<div className="">
<h3 className="text-3xl text-white font-medium uppercase tracking-tight mb-6">Powerline &amp; Grid Inspection</h3>
<p className="text-sm text-zinc-500 font-mono leading-relaxed mb-10">Use high-res thermal imaging to detect hotspots in transformers and transmission lines.</p>
</div>
</div>
</div>

<div className="scenario-panel absolute inset-0 flex flex-col justify-between opacity-0 pointer-events-none z-0 transition-all duration-300 transform translate-x-4" data-index="2">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none" loop="" muted="" playsinline="">
<source src="https://www-cdn.djiits.com/reactor/assets/_next/static/videos/43bec569-e244-4c89-adaf-2c041536b189.webm" type="video/webm"/>
</video>
<div className="flex flex-col h-full z-20 pt-16 pr-16 pb-16 pl-16 relative justify-between">
<div className="">
<h3 className="text-3xl text-white font-medium uppercase tracking-tight mb-6">Topographic Mapping</h3>
<p className="text-sm text-zinc-500 font-mono leading-relaxed mb-10">Create survey-grade 3D maps and point clouds with integrated LIDAR sensors.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-800 bg-[#050505] text-zinc-500 font-mono relative z-20">
<div className="border-t border-zinc-800 bg-[#080808] px-8 py-4 flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-wider text-zinc-600 relative z-20">
<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-2 md:mb-0"><span className="cursor-default">© 2024 AERO_SYS Inc.</span></div>
<div className="flex items-center gap-6 font-mono"><div className="flex items-center gap-2 text-green-900"><iconify-icon icon="solar:shield-check-linear" width="12"></iconify-icon><span className="text-green-600">Encrypted_Connection</span></div></div>
</div>
</footer>
</div>
</main>


    </>
  );
}
