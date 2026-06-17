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
    


      // CardSwap pure JS port of your React/GSAP logic
      const cardswap = document.getElementById('cardswap');
      const cards = Array.from(cardswap.children);

      // config
      const width = 500, height = 400;
      const cardDistance = 60, verticalDistance = 70;
      const delay = 5000;
      const skewAmount = 6;
      const easing = "elastic";
      const config = (easing === "elastic")
        ? {
            ease: "elastic.out(0.6,0.9)",
            durDrop: 2,
            durMove: 2,
            durReturn: 2,
            promoteOverlap: 0.9,
            returnDelay: 0.05,
          }
        : {
            ease: "power1.inOut",
            durDrop: 0.8,
            durMove: 0.8,
            durReturn: 0.8,
            promoteOverlap: 0.45,
            returnDelay: 0.2,
          };

      function makeSlot(i, distX, distY, total) {
        return {
          x: i * distX,
          y: -i * distY,
          z: -i * distX * 1.5,
          zIndex: total - i,
        };
      }
      function placeNow(el, slot, skew) {
        gsap.set(el, {
          x: slot.x,
          y: slot.y,
          z: slot.z,
          xPercent: -50,
          yPercent: -50,
          skewY: skew,
          transformOrigin: "center center",
          zIndex: slot.zIndex,
          force3D: true,
        });
      }
      let order = cards.map((_, i) => i);
      let tl = null, interval = null;
      function swap() {
        if (order.length < 2) return;
        const [front, ...rest] = order;
        const elFront = cards[front];
        tl = gsap.timeline();

        tl.to(elFront, {
          y: "+=500",
          duration: config.durDrop,
          ease: config.ease,
        });

        tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
        rest.forEach((idx, i) => {
          const el = cards[idx];
          const slot = makeSlot(i, cardDistance, verticalDistance, cards.length);
          tl.set(el, { zIndex: slot.zIndex }, "promote");
          tl.to(
            el,
            {
              x: slot.x,
              y: slot.y,
              z: slot.z,
              duration: config.durMove,
              ease: config.ease,
            },
            `promote+=${i * 0.15}`
          );
        });

        const backSlot = makeSlot(
          cards.length - 1,
          cardDistance,
          verticalDistance,
          cards.length
        );
        tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
        tl.call(() => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        }, undefined, "return");
        tl.set(elFront, { x: backSlot.x, z: backSlot.z }, "return");
        tl.to(
          elFront,
          {
            y: backSlot.y,
            duration: config.durReturn,
            ease: config.ease,
          },
          "return"
        );
        tl.call(() => {
          order = [...rest, front];
        });
      }

      // Initial placement
      cards.forEach((el, i) =>
        placeNow(el, makeSlot(i, cardDistance, verticalDistance, cards.length), skewAmount)
      );
      swap();
      interval = setInterval(swap, delay);

      // Pause on hover
      cardswap.addEventListener('mouseenter', () => {
        tl && tl.pause();
        clearInterval(interval);
      });
      cardswap.addEventListener('mouseleave', () => {
        tl && tl.play();
        interval = setInterval(swap, delay);
      });

      // Click event: demo action (add your logic)
      cards.forEach((card, idx) => {
        card.addEventListener('click', () => {
          // For demo: highlight briefly
          card.style.outline = "3px solid #a78bfa";
          setTimeout(() => card.style.outline = "", 400);
        });
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
      
<div className="relative w-full max-w-5xl mx-auto h-[600px] flex items-end justify-end fade-in" style={{animationDelay: '0.12s'}}>

<div className="absolute bottom-0 right-0 cardswap-container perspective-900 overflow-visible" id="cardswap" style={{width: '500px', height: '400px', transform: 'translateX(5%) translateY(20%) scale(1)'}}>
<div className="absolute top-1/2 left-1/2 border-gradient glass card-outline rounded-xl cursor-pointer [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] shadow-lg flex flex-col items-center justify-center px-10 py-8 transition-all duration-200" style={{width: '500px', height: '400px'}}>
<img alt="face1" className="rounded-lg mb-6 object-cover w-28 h-28 border border-[#262A36] shadow-xl" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&amp;fit=facearea&amp;w=600&amp;q=80"/>
<h2 className="text-white text-[2rem] leading-tight tracking-tight font-semibold mb-1">Jane Doe</h2>
<p className="text-[#d4d8ee] text-lg font-medium mb-4 text-center max-w-[320px]">“This animated card stack is <span className="font-semibold">incredible</span> – the transitions are smooth and the 3D effect is magical.”</p>
<span className="text-sm font-normal text-[#8a92b2] tracking-normal">Product Designer</span>
</div>
<div className="absolute top-1/2 left-1/2 border-gradient glass card-outline rounded-xl cursor-pointer [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] shadow-lg flex flex-col items-center justify-center px-10 py-8 transition-all duration-200" style={{width: '500px', height: '400px'}}>
<img alt="face2" className="rounded-lg mb-6 object-cover w-28 h-28 border border-[#262A36] shadow-xl" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&amp;fit=facearea&amp;w=600&amp;q=80"/>
<h2 className="text-white text-[2rem] leading-tight tracking-tight font-semibold mb-1">Marcus Lee</h2>
<p className="text-[#d4d8ee] text-lg font-medium mb-4 text-center max-w-[320px]">“It’s so <span className="font-semibold">easy to use</span> and the glass effect is gorgeous. Perfect for modern UIs.”</p>
<span className="text-sm font-normal text-[#8a92b2] tracking-normal">Frontend Engineer</span>
</div>
<div className="absolute top-1/2 left-1/2 border-gradient glass card-outline rounded-xl cursor-pointer [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] shadow-lg flex flex-col items-center justify-center px-10 py-8 transition-all duration-200" style={{width: '500px', height: '400px'}}>
<img alt="face3" className="rounded-lg mb-6 object-cover w-28 h-28 border border-[#262A36] shadow-xl" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=facearea&amp;w=600&amp;q=80"/>
<h2 className="text-white text-[2rem] leading-tight tracking-tight font-semibold mb-1">Hannah Smith</h2>
<p className="text-[#d4d8ee] text-lg font-medium mb-4 text-center max-w-[320px]">“I love the <span className="font-semibold">subtle 3D depth</span> and the way each card floats in.”</p>
<span className="text-sm font-normal text-[#8a92b2] tracking-normal">UI Developer</span>
</div>
</div>

</div>


    </>
  );
}
