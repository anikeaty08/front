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



    gsap.registerPlugin(InertiaPlugin);

    function initGlowingInteractiveDotsGrid() {
      document.querySelectorAll('[data-dots-container-init]').forEach(container => {
        const colors = { base: "#e5e7eb", active: "#6366f1" };
        const threshold = 150;
        const speedThreshold = 100;
        const shockRadius = 250;
        const shockPower = 5;
        const maxSpeed = 5000;
        let dots = [];
        let dotCenters = [];

        function buildGrid() {
          container.innerHTML = "";
          dots = [];
          dotCenters = [];
          const style = getComputedStyle(container);
          const dotPx = parseFloat(style.fontSize) * 0.75;
          const gapPx = dotPx * 2.5;
          const contW = container.clientWidth;
          const contH = container.clientHeight;
          const cols = Math.floor((contW + gapPx) / (dotPx + gapPx));
          const rows = Math.floor((contH + gapPx) / (dotPx + gapPx));
          const total = cols * rows;
          for (let i = 0; i < total; i++) {
            const d = document.createElement("div");
            d.classList.add("dot");
            gsap.set(d, { x: 0, y: 0, backgroundColor: colors.base });
            d._inertiaApplied = false;
            container.appendChild(d);
            dots.push(d);
          }
          requestAnimationFrame(() => {
            dotCenters = dots.map(d => {
              const r = d.getBoundingClientRect();
              return {
                el: d,
                x: r.left + window.scrollX + r.width / 2,
                y: r.top + window.scrollY + r.height / 2
              };
            });
          });
        }
        window.addEventListener("resize", buildGrid);
        buildGrid();

        let lastTime = 0, lastX = 0, lastY = 0;
        window.addEventListener("mousemove", e => {
          const now = performance.now();
          const dt = now - lastTime || 16;
          let dx = e.pageX - lastX;
          let dy = e.pageY - lastY;
          let vx = dx / dt * 1000;
          let vy = dy / dt * 1000;
          let speed = Math.hypot(vx, vy);
          if (speed > maxSpeed) {
            const scale = maxSpeed / speed;
            vx *= scale; vy *= scale; speed = maxSpeed;
          }
          lastTime = now;
          lastX = e.pageX;
          lastY = e.pageY;
          requestAnimationFrame(() => {
            dotCenters.forEach(({ el, x, y }) => {
              const dist = Math.hypot(x - e.pageX, y - e.pageY);
              const t = Math.max(0, 1 - dist / threshold);
              const col = gsap.utils.interpolate(colors.base, colors.active, t);
              gsap.set(el, { backgroundColor: col });
              if (speed > speedThreshold && dist < threshold && !el._inertiaApplied) {
                el._inertiaApplied = true;
                const pushX = (x - e.pageX) + vx * 0.005;
                const pushY = (y - e.pageY) + vy * 0.005;
                gsap.to(el, {
                  inertia: { x: pushX, y: pushY, resistance: 750 },
                  onComplete() {
                    gsap.to(el, {
                      x: 0,
                      y: 0,
                      duration: 1.5,
                      ease: "elastic.out(1,0.75)"
                    });
                    el._inertiaApplied = false;
                  }
                });
              }
            });
          });
        });

        window.addEventListener("click", e => {
          dotCenters.forEach(({ el, x, y }) => {
            const dist = Math.hypot(x - e.pageX, y - e.pageY);
            if (dist < shockRadius && !el._inertiaApplied) {
              el._inertiaApplied = true;
              const falloff = Math.max(0, 1 - dist / shockRadius);
              const pushX = (x - e.pageX) * shockPower * falloff;
              const pushY = (y - e.pageY) * shockPower * falloff;
              gsap.to(el, {
                inertia: { x: pushX, y: pushY, resistance: 750 },
                onComplete() {
                  gsap.to(el, {
                    x: 0,
                    y: 0,
                    duration: 1.5,
                    ease: "elastic.out(1,0.75)"
                  });
                  el._inertiaApplied = false;
                }
              });
            }
          });
        });
      });
    }
    document.addEventListener('DOMContentLoaded', initGlowingInteractiveDotsGrid);
  
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
      
<div className="max-w-md w-full bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative transition-all">
<div className="relative h-64 overflow-hidden">
<div className="absolute inset-0">
<div className="dots-container" data-dots-container-init="">
<div className="dot"></div>
</div>
</div>
<div className="absolute top-3 left-4 z-10">
<h2 className="text-2xl font-bold text-slate-900 drop-shadow-sm">UI Design Systems</h2>
<p className="text-slate-500 text-sm">Interactive inspiration</p>
</div>
<div className="absolute bottom-3 right-4 bg-white/70 backdrop-blur-md rounded-lg p-2 z-10 shadow border border-slate-100">
<div className="flex space-x-3 text-xs text-slate-800">
<div className="flex items-center">
<span className="w-3 h-3 rounded-full bg-violet-500 mr-1 border border-violet-200"></span>
<span>Core Component</span>
</div>
<div className="flex items-center">
<span className="w-3 h-3 rounded-full bg-amber-400 mr-1 border border-amber-200"></span>
<span>Pattern/Module</span>
</div>
</div>
</div>
</div>
<div className="p-5 bg-white/90 border-t border-slate-100">
<div className="flex justify-between text-slate-700 text-sm">
<div>
<p className="font-medium">Buttons</p>
<p className="text-xs text-slate-400">Atomic Elements</p>
</div>
<div>
<p className="font-medium">Dashboards</p>
<p className="text-xs text-slate-400">UI Patterns</p>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-100">
<p className="text-slate-500 text-sm">
          UI design systems streamline workflow and ensure consistency across products. Explore interactive visuals of components and modules—each dot represents a building block in your user interface toolkit.
        </p>
</div>
</div>
</div>


    </>
  );
}
