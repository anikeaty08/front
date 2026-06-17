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
    


    // 3D cards logic (unchanged)
    const cardswap = document.getElementById('cardswap');
    const cards = Array.from(cardswap.children);
    const width = 500, height = 470;
    const cardDistance = 60, verticalDistance = 70;
    const skewAmount = 1;
    const delay = 5000;
    const total = cards.length;
    function placeNow(card, slot, skew) {
      gsap.set(card, {
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
    function makeSlot(i, distX, distY, total) {
      return {
        x: i * distX,
        y: -i * distY,
        z: -i * distX * 1.5,
        zIndex: total - i,
      }
    }
    function placeAll(order) {
      for (let i = 0; i < cards.length; i++) {
        let slot = makeSlot(i, cardDistance, verticalDistance, total);
        let card = cards[order[i]];
        placeNow(card, slot, skewAmount);
        card.setAttribute('tabindex', i === 0 ? "0" : "-1");
        card.setAttribute('aria-hidden', i === 0 ? "false" : "true");
        card.style.pointerEvents = (i === 0) ? "auto" : "none";
      }
    }
    let order = Array.from({ length: total }, (_, i) => i);
    placeAll(order);
    function swap() {
      if (order.length < 2) return;
      const [front, ...rest] = order;
      const elFront = cards[front];
      const tl = gsap.timeline();
      tl.to(elFront, { y: "+=500", duration: 0.8, ease: "power1.inOut" });
      tl.addLabel("promote", "-=0.36");
      rest.forEach((idx, i) => {
        const el = cards[idx];
        const slot = makeSlot(i, cardDistance, verticalDistance, total);
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(el, {
          x: slot.x, y: slot.y, z: slot.z, skewY: skewAmount,
          xPercent: -50, yPercent: -50, duration: 0.8, ease: "power1.inOut"
        }, `promote+=${i*0.15}`);
      });
      const backSlot = makeSlot(total - 1, cardDistance, verticalDistance, total);
      tl.addLabel("return", "promote+=0.16");
      tl.call(() => {
        gsap.set(elFront, { zIndex: backSlot.zIndex });
      }, undefined, "return");
      tl.set(elFront, { x: backSlot.x, z: backSlot.z, skewY: skewAmount, xPercent: -50, yPercent: -50 }, "return");
      tl.to(elFront, { y: backSlot.y, duration: 0.8, ease: "power1.inOut" }, "return");
      tl.call(() => {
        order = [...rest, front];
        for (let i = 0; i < cards.length; i++) {
          let card = cards[order[i]];
          card.setAttribute('tabindex', i === 0 ? "0" : "-1");
          card.setAttribute('aria-hidden', i === 0 ? "false" : "true");
          card.style.pointerEvents = (i === 0) ? "auto" : "none";
        }
      });
    }
    let interval = setInterval(swap, delay);
    cardswap.addEventListener('mouseenter', () => clearInterval(interval));
    cardswap.addEventListener('mouseleave', () => {
      clearInterval(interval);
      interval = setInterval(swap, delay);
    });
    document.addEventListener('keydown', e => {
      if(document.activeElement === cards[order[0]] && (e.key === " " || e.key === "ArrowRight")) {
        swap();
      }
    });
    cards.forEach((card, idx) => {
      card.addEventListener('mousedown', () => {
        if (order[0] === idx) gsap.to(card, { scale: 1.025, duration: 0.13, ease: "power2.out" });
      });
      card.addEventListener('mouseup', () => {
        if (order[0] === idx) gsap.to(card, { scale: 1, duration: 0.18, ease: "power2.out" });
      });
      card.addEventListener('mouseleave', () => {
        if (order[0] === idx) gsap.to(card, { scale: 1, duration: 0.18, ease: "power2.out" });
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
      
<div className="w-full min-h-screen flex main-flex items-center justify-center px-8 py-10 gap-16">

<div className="flex flex-col justify-center side-content max-w-md">
<h1 className="text-white text-4xl sm:text-5xl font-semibold tracking-tight mb-5 leading-tight" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui, sans-serif'}}>Showcase Your Results</h1>
<h2 className="text-indigo-200 text-2xl sm:text-3xl font-medium tracking-tight mb-4" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui, sans-serif'}}>Impress clients with live ranking proof</h2>
<p className="text-indigo-100 text-lg font-normal leading-relaxed mb-1" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui, sans-serif'}}>
        Instantly demonstrate your client's #1 position with a beautiful, interactive 3D browser stack — real search results, real websites, all in one seamless view.
      </p>
</div>

<div className="relative w-full max-w-5xl mx-auto h-[670px] flex items-end justify-end fade-in" style={{animationDelay: '0.12s'}}>
<div className="absolute bottom-0 right-0 cardswap-container perspective-900 overflow-visible" id="cardswap" style={{width: '500px', height: '470px', transform: 'translate(5%, 10%) scale(1)'}}>

<div aria-hidden="false" className="absolute top-1/2 left-1/2 border-gradient glass card-outline rounded-xl cursor-pointer shadow-lg flex flex-col transition-all duration-200" style={{width: '500px', height: '470px'}} tabindex="0">
<div className="browser-bar">
<span className="traffic-light traffic-red"></span>
<span className="traffic-light traffic-yellow"></span>
<span className="traffic-light traffic-green"></span>
<span className="browser-title">classonebuilders.com.au</span>
<span className="browser-url">classonebuilders.com.au</span>
</div>
<div className="browser-content">
<iframe className="browser-iframe" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" src="https://classonebuilders.com.au/" title="classonebuilders.com.au"></iframe>
</div>
</div>

<div aria-hidden="true" className="absolute top-1/2 left-1/2 border-gradient glass card-outline rounded-xl cursor-pointer shadow-lg flex flex-col transition-all duration-200" style={{width: '500px', height: '470px'}} tabindex="-1">
<div className="browser-bar">
<span className="traffic-light traffic-red"></span>
<span className="traffic-light traffic-yellow"></span>
<span className="traffic-light traffic-green"></span>
<span className="browser-title">maxisteel.com</span>
<span className="browser-url">maxisteel.com</span>
</div>
<div className="browser-content">
<iframe className="browser-iframe" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" src="https://maxisteel.com/" title="maxisteel.com"></iframe>
</div>
</div>

<div aria-hidden="true" className="absolute top-1/2 left-1/2 border-gradient glass card-outline rounded-xl cursor-pointer shadow-lg flex flex-col transition-all duration-200" style={{width: '500px', height: '470px', fontFamily: '\'Roboto\', \'Inter\', ui-sans-serif, sans-serif'}} tabindex="-1">
<div className="browser-bar">
<span className="traffic-light traffic-red"></span>
<span className="traffic-light traffic-yellow"></span>
<span className="traffic-light traffic-green"></span>
<span className="browser-title">google.com</span>
<span className="browser-url">google.com/search</span>
</div>
<div className="flex flex-col h-full w-full bg-white rounded-b-xl overflow-hidden">
<div className="flex items-center px-5 py-2 border-b border-gray-200 rounded-t-xl" style={{minHeight: '60px'}}>
<img alt="Google" className="h-6 mr-5" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" style={{objectFit: 'contain'}}/>
<form aria-label="Google search" className="flex flex-1 items-center bg-[#f1f3f4] rounded-full pl-4 pr-1 py-1 border border-[#dfe1e5] focus-within:ring-2 focus-within:ring-blue-200" role="search">
<input aria-label="Search" className="flex-1 bg-transparent text-[15px] text-gray-900 font-normal outline-none border-none placeholder-gray-500" style={{fontFamily: 'Roboto, Inter, sans-serif'}} value="best home builder sydney"/>
<button aria-label="Search" className="ml-2 flex items-center justify-center bg-transparent border-none p-1" type="submit">
<svg fill="none" height="21" stroke="#4285F4" strokeWidth="2.2" viewbox="0 0 24 24" width="21" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="7"></circle><path d="m21 21-4.3-4.3"></path></svg>
</button>
</form>
</div>
<div className="flex items-center px-6 pt-3 pb-1 text-[15px] gap-6 border-b border-gray-200">
<span className="text-[#1a73e8] font-medium border-b-2 border-[#1a73e8] pb-2 cursor-default select-none">All</span>
<span className="text-[#5f6368] hover:text-[#1a73e8] font-normal pb-2 cursor-pointer">Images</span>
<span className="text-[#5f6368] hover:text-[#1a73e8] font-normal pb-2 cursor-pointer">Maps</span>
<span className="text-[#5f6368] hover:text-[#1a73e8] font-normal pb-2 cursor-pointer">News</span>
<span className="text-[#5f6368] hover:text-[#1a73e8] font-normal pb-2 cursor-pointer">Videos</span>
</div>
<div className="px-6 py-2 text-xs text-[#5f6368]">About 11,900,000 results (0.34 seconds)</div>
<div className="flex-1 overflow-y-auto px-6 pb-4" style={{maxHeight: 'none'}}>
<div className="py-3 border-b border-[#ececec] group" tabindex="0">
<div className="flex items-center gap-2 mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">our client</span>
<span className="text-white bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-400 px-2 py-0.5 rounded-full text-xs font-medium shadow" style={{letterSpacing: '-0.02em'}}>#1</span>
<span className="text-[#5f6368] text-[12px] px-1 rounded bg-[#eef6ff] ml-1">Page 1</span>
</div>
<a className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2 hover:underline focus:underline outline-none focus:ring-2 focus:ring-[#a78bfa] transition-all" href="#" style={{fontFamily: 'Roboto, Inter, sans-serif'}}>Sydney’s Leading Home Builder | OurClient.com.au</a>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Award-winning home designs and builds in Sydney. Free consultations—start your dream home today with the trusted experts.</div>
</div>
<div aria-hidden="true" className="py-3 border-b border-[#ececec] relative group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">competitor1.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: 'Roboto, Inter, sans-serif'}}>Custom Home Builders Sydney | Competitor1</span>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Your trusted Sydney builders for custom homes and renovations.</div>
</div>
<div aria-hidden="true" className="py-3 border-b border-[#ececec] relative group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">anotherbuilder.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: 'Roboto, Inter, sans-serif'}}>Modern Home Builds | AnotherBuilder</span>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Modern home builds, renovations, and extensions.</div>
</div>
<div aria-hidden="true" className="py-3 group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">qualityhomes.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: 'Roboto, Inter, sans-serif'}}>Affordable, Quality New Builds | Quality Homes</span>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Affordable, quality new builds in Sydney.</div>
</div>
<div aria-hidden="true" className="py-3 border-b border-[#ececec] relative group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">greenhomes.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: 'Roboto, Inter, sans-serif'}}>Eco-Friendly Home Builders | Green Homes</span>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Sustainable home construction and design in Sydney.</div>
</div>
<div aria-hidden="true" className="py-3 border-b border-[#ececec] relative group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">citybuilders.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: 'Roboto, Inter, sans-serif'}}>City Builders Sydney | CityBuilders</span>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">High-quality city home builds and developments.</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>


    </>
  );
}
