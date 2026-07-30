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
      
    tailwind.config = { theme: { extend: {} } }
  


    // Smoother CardSwap logic
    const cardswap = document.getElementById('cardswap');
    const cards = Array.from(cardswap.children);

    // config
    const width = 500, height = 470;
    const cardDistance = 60, verticalDistance = 40;
    const delay = 5000;
    const skewAmount = 2.5;
    const scaleBack = 0.93;
    const scaleMid = 0.98;
    const opacityBack = 0.30;
    const opacityMid = 0.70;
    const opacityFront = 1;

    function getSlot(i, total) {
      // 0: front, 1: mid, 2: back
      if(i === 0) return { x: 0, y: 0, z: 0, scale: 1, skew: 0, opacity: opacityFront, zIndex: 3 };
      if(i === 1) return { x: 50, y: -30, z: -70, scale: scaleMid, skew: skewAmount, opacity: opacityMid, zIndex: 2 };
      return { x: 100, y: -60, z: -140, scale: scaleBack, skew: skewAmount * 2, opacity: opacityBack, zIndex: 1 };
    }
    function placeNow(el, slot) {
      gsap.set(el, {
        x: slot.x,
        y: slot.y,
        z: slot.z,
        scale: slot.scale,
        skewY: slot.skew,
        opacity: slot.opacity,
        xPercent: -50,
        yPercent: -50,
        zIndex: slot.zIndex,
        boxShadow: (slot.zIndex === 3)
          ? "0 12px 44px 0 rgba(72,49,134,0.14), 0 2px 8px rgba(124,58,237,0.09)"
          : "0 6px 20px 0 rgba(16,16,20,0.10)",
        force3D: true,
        pointerEvents: (slot.zIndex === 3) ? "auto" : "none"
      });
    }
    let order = cards.map((_, i) => i);
    let tl = null, interval = null;
    function swap() {
      if (order.length < 2) return;
      const newOrder = [...order.slice(1), order[0]];
      tl = gsap.timeline();
      // Animate all cards into their new slots with spring/out easing
      newOrder.forEach((idx, slotIdx) => {
        const el = cards[idx];
        const slot = getSlot(slotIdx, cards.length);
        tl.to(el, {
          x: slot.x,
          y: slot.y,
          z: slot.z,
          scale: slot.scale,
          skewY: slot.skew,
          opacity: slot.opacity,
          xPercent: -50,
          yPercent: -50,
          zIndex: slot.zIndex,
          boxShadow: (slot.zIndex === 3)
            ? "0 12px 44px 0 rgba(72,49,134,0.14), 0 2px 8px rgba(124,58,237,0.09)"
            : "0 6px 20px 0 rgba(16,16,20,0.10)",
          pointerEvents: (slot.zIndex === 3) ? "auto" : "none",
          duration: 1.03,
          ease: slotIdx === 0 ? "back.out(1.4)" : "power4.out",
        }, slotIdx * 0.08);
      });
      order = newOrder;
    }
    // Initial placement
    cards.forEach((el, i) =>
      placeNow(el, getSlot(i, cards.length))
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

    // Tap/click micro-interaction
    cards.forEach((card, idx) => {
      card.addEventListener('mousedown', () => {
        gsap.to(card, { scale: 1.025, duration: 0.13, ease: "power2.out" });
      });
      card.addEventListener('mouseup', () => {
        gsap.to(card, { scale: getSlot(order.indexOf(idx), cards.length).scale, duration: 0.18, ease: "power2.out" });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: getSlot(order.indexOf(idx), cards.length).scale, duration: 0.18, ease: "power2.out" });
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
      
<div className="relative w-full max-w-5xl mx-auto h-[670px] flex items-end justify-end fade-in" style={{animationDelay: `0.12s`}}>
<div className="absolute bottom-0 right-0 cardswap-container perspective-900 overflow-visible" id="cardswap" style={{width: `500px`, height: `470px`, transform: `translate(5%, 10%) scale(1)`}}>

<div className="absolute top-1/2 left-1/2 border-gradient glass card-outline rounded-xl cursor-pointer [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] shadow-lg flex flex-col transition-all duration-200" style={{width: `500px`, height: `470px`}}>
<div className="browser-bar">
<span className="traffic-light traffic-red"></span>
<span className="traffic-light traffic-yellow"></span>
<span className="traffic-light traffic-green"></span>
<span className="browser-title">classonebuilders.com.au</span>
<span className="browser-url">classonebuilders.com.au</span>
</div>
<div className="browser-content" style={{flex: `1`}}>
<iframe className="browser-iframe" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" src="https://classonebuilders.com.au/" title="classonebuilders.com.au"></iframe>
</div>
</div>

<div className="absolute top-1/2 left-1/2 border-gradient glass card-outline rounded-xl cursor-pointer [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] shadow-lg flex flex-col transition-all duration-200" style={{width: `500px`, height: `470px`}}>
<div className="browser-bar">
<span className="traffic-light traffic-red"></span>
<span className="traffic-light traffic-yellow"></span>
<span className="traffic-light traffic-green"></span>
<span className="browser-title">maxisteel.com</span>
<span className="browser-url">maxisteel.com</span>
</div>
<div className="browser-content" style={{flex: `1`}}>
<iframe className="browser-iframe" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" src="https://maxisteel.com/" title="maxisteel.com"></iframe>
</div>
</div>

<div className="absolute top-1/2 left-1/2 border-gradient glass card-outline rounded-xl cursor-pointer [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] shadow-lg flex flex-col transition-all duration-200" style={{width: `500px`, height: `470px`, fontFamily: `'Roboto', 'Inter', ui-sans-serif, sans-serif`}}>

<div className="browser-bar">
<span className="traffic-light traffic-red"></span>
<span className="traffic-light traffic-yellow"></span>
<span className="traffic-light traffic-green"></span>
<span className="browser-title">google.com</span>
<span className="browser-url">google.com/search</span>
</div>

<div className="flex flex-col h-full w-full bg-white rounded-b-xl" style={{overflow: `hidden`}}>

<div className="flex items-center px-5 py-2 border-b border-gray-200 rounded-t-xl" style={{minHeight: `60px`}}>
<img alt="Google" className="h-6 mr-5" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" style={{objectFit: `contain`}} />
<form aria-label="Google search" className="flex flex-1 items-center bg-[#f1f3f4] rounded-full pl-4 pr-1 py-1 border border-[#dfe1e5] focus-within:ring-2 focus-within:ring-blue-200" role="search">
<input aria-label="Search" className="flex-1 bg-transparent text-[15px] text-gray-900 font-normal outline-none border-none placeholder-gray-500" style={{fontFamily: `Roboto,Inter,sans-serif`}} value="best home builder sydney" />
<button aria-label="Search" className="ml-2 flex items-center justify-center bg-transparent border-none p-1" type="submit">
<svg fill="none" height="21" stroke="#4285F4" strokeWidth="2.2" viewBox="0 0 24 24" width="21" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="7"></circle><path d="m21 21-4.3-4.3"></path></svg>
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

<div className="flex-1 overflow-y-auto px-6 pb-4" style={{maxHeight: `none`}}>

<div className="py-3 border-b border-[#ececec] group" tabindex="0">
<div className="flex items-center gap-2 mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">our client</span>
<span className="text-white bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-400 px-2 py-0.5 rounded-full text-xs font-medium shadow" style={{letterSpacing: `-0.02em`}}>#1</span>
<span className="text-[#5f6368] text-[12px] px-1 rounded bg-[#eef6ff] ml-1">Page 1</span>
</div>
<a className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2 hover:underline focus:underline outline-none focus:ring-2 focus:ring-[#a78bfa] transition-all" href="#" style={{fontFamily: `Roboto,Inter,sans-serif`}}>Sydney’s Leading Home Builder | OurClient.com.au</a>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Award-winning home designs and builds in Sydney. Free consultations—start your dream home today with the trusted experts.</div>
</div>

<div aria-hidden="true" className="py-3 border-b border-[#ececec] relative group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">competitor1.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: `Roboto,Inter,sans-serif`}}>Custom Home Builders Sydney | Competitor1</span>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Your trusted Sydney builders for custom homes and renovations.</div>
</div>
<div aria-hidden="true" className="py-3 border-b border-[#ececec] relative group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">anotherbuilder.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: `Roboto,Inter,sans-serif`}}>Modern Home Builds | AnotherBuilder</span>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Modern home builds, renovations, and extensions.</div>
</div>
<div aria-hidden="true" className="py-3 group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">qualityhomes.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: `Roboto,Inter,sans-serif`}}>Affordable, Quality New Builds | Quality Homes</span>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Affordable, quality new builds in Sydney.</div>
</div>

<div aria-hidden="true" className="py-3 border-b border-[#ececec] relative group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">greenhomes.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: `Roboto,Inter,sans-serif`}}>Eco-Friendly Home Builders | Green Homes</span>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Sustainable home construction and design in Sydney.</div>
</div>
<div aria-hidden="true" className="py-3 border-b border-[#ececec] relative group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">citybuilders.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: `Roboto,Inter,sans-serif`}}>City Builders Sydney | CityBuilders</span>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">High-quality city home builds and developments.</div>
</div>
</div>
</div>
</div>

</div>
</div>


    </>
  );
}
