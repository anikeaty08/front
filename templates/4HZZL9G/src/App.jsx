import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      tailwind.config = { theme: { extend: {} } }
    


    // CardSwap logic
    const cardswap = document.getElementById('cardswap');
    const cards = Array.from(cardswap.children);

    // config
    const width = 500, height = 470;
    const cardDistance = 60, verticalDistance = 70;
    const delay = 5000;
    const skewAmount = 6;
    const easing = "elastic";
    const config = (easing === "elastic")
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2,
          durMove: 2,
          durReturn: 0.7,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.7,
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

      // Animate front card to back slot smoothly (all axes)
      const backSlot = makeSlot(
        cards.length - 1,
        cardDistance,
        verticalDistance,
        cards.length
      );

      tl.to(elFront, {
        x: backSlot.x,
        y: backSlot.y,
        z: backSlot.z,
        xPercent: -50,
        yPercent: -50,
        duration: config.durReturn,
        ease: "power2.inOut",
        onStart: () => gsap.set(elFront, { zIndex: backSlot.zIndex }),
      });

      tl.addLabel("promote", `-=${config.durReturn * config.promoteOverlap}`);

      // Move rest of the cards up one slot
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
            xPercent: -50,
            yPercent: -50,
            duration: config.durMove * 0.8,
            ease: config.ease,
          },
          `promote+=${i * 0.08}`
        );
      });

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

    // Click event: micro-interaction
    cards.forEach((card, idx) => {
      card.addEventListener('click', () => {
        card.style.outline = "3px solid #a78bfa";
        setTimeout(() => card.style.outline = "", 400);
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative w-full max-w-5xl mx-auto h-[670px] flex items-end justify-end fade-in" style={{animationDelay: '0.12s'}}>
<div className="absolute bottom-0 right-0 cardswap-container perspective-900 overflow-visible" id="cardswap" style={{width: '500px', height: '470px', transform: 'translate(5%, 10%) scale(1)'}}>

<div className="absolute top-1/2 left-1/2 border-gradient glass card-outline rounded-xl cursor-pointer [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] shadow-lg flex flex-col transition-all duration-200" style={{width: '500px', height: '470px', zIndex: '1', transformOrigin: '50% 50%', transform: 'translate(-50%, -50%) translate3d(120px, -140px, -180px) rotate(5.99976deg) skew(5.99976deg, 6deg) scale(1.00551, 0.99452)'}}>
<div className="browser-bar">
<span className="traffic-light traffic-red"></span>
<span className="traffic-light traffic-yellow"></span>
<span className="traffic-light traffic-green"></span>
<span className="browser-title">classonebuilders.com.au</span>
<span className="browser-url">classonebuilders.com.au</span>
</div>
<div className="browser-content" style={{flex: '1'}}>
<iframe className="browser-iframe" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" src="https://classonebuilders.com.au/" title="classonebuilders.com.au"></iframe>
</div>
</div>

<div className="absolute top-1/2 left-1/2 border-gradient glass card-outline rounded-xl cursor-pointer [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] shadow-lg flex flex-col transition-all duration-200" style={{width: '500px', height: '470px', zIndex: '3', transformOrigin: '50% 50%', transform: 'translate(-50%, -50%) translate3d(0px, 0px, 0px) rotate(5.99976deg) skew(5.99976deg, 6deg) scale(1.00551, 0.99452)'}}>
<div className="browser-bar">
<span className="traffic-light traffic-red"></span>
<span className="traffic-light traffic-yellow"></span>
<span className="traffic-light traffic-green"></span>
<span className="browser-title">maxisteel.com</span>
<span className="browser-url">maxisteel.com</span>
</div>
<div className="browser-content" style={{flex: '1'}}>
<iframe className="browser-iframe" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" src="https://maxisteel.com/" title="maxisteel.com"></iframe>
</div>
</div>

<div className="absolute top-1/2 left-1/2 border-gradient glass card-outline rounded-xl cursor-pointer [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] shadow-lg flex flex-col transition-all duration-200" style={{width: '500px', height: '470px', zIndex: '2', transformOrigin: '50% 50%', transform: 'translate(-50%, -50%) translate3d(60px, -70px, -90px) rotate(5.99976deg) skew(5.99976deg, 6deg) scale(1.00551, 0.99452)', fontFamily: '\'Roboto\', \'Inter\', ui-sans-serif, sans-serif'}}>

<div className="browser-bar">
<span className="traffic-light traffic-red"></span>
<span className="traffic-light traffic-yellow"></span>
<span className="traffic-light traffic-green"></span>
<span className="browser-title">google.com</span>
<span className="browser-url">google.com/search</span>
</div>

<div className="flex flex-col h-full w-full bg-white rounded-b-xl" style={{overflow: 'hidden'}}>

<div className="flex items-center px-5 py-2 border-b border-gray-200 rounded-t-xl" style={{minHeight: '60px'}}>
<img alt="Google" className="h-6 mr-5" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" style={{objectFit: 'contain'}}/>
<form aria-label="Google search" className="flex flex-1 items-center bg-[#f1f3f4] rounded-full pl-4 pr-1 py-1 border border-[#dfe1e5] focus-within:ring-2 focus-within:ring-blue-200" role="search">
<input aria-label="Search" className="flex-1 bg-transparent text-[15px] text-gray-900 font-normal outline-none border-none placeholder-gray-500" style={{fontFamily: 'Roboto,Inter,sans-serif'}} value="best home builder sydney"/>
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
<a className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2 hover:underline focus:underline outline-none focus:ring-2 focus:ring-[#a78bfa] transition-all" href="#" style={{fontFamily: 'Roboto,Inter,sans-serif'}}>Sydney’s Leading Home Builder | OurClient.com.au</a>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Award-winning home designs and builds in Sydney. Free consultations—start your dream home today with the trusted experts.</div>
</div>

<div aria-hidden="true" className="py-3 border-b border-[#ececec] relative group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">competitor1.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: 'Roboto,Inter,sans-serif'}}>Custom Home Builders Sydney | Competitor1</span>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Your trusted Sydney builders for custom homes and renovations.</div>
</div>
<div aria-hidden="true" className="py-3 border-b border-[#ececec] relative group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">anotherbuilder.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: 'Roboto,Inter,sans-serif'}}>Modern Home Builds | AnotherBuilder</span>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Modern home builds, renovations, and extensions.</div>
</div>
<div aria-hidden="true" className="py-3 group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">qualityhomes.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: 'Roboto,Inter,sans-serif'}}>Affordable, Quality New Builds | Quality Homes</span>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Affordable, quality new builds in Sydney.</div>
</div>

<div aria-hidden="true" className="py-3 border-b border-[#ececec] relative group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">greenhomes.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: 'Roboto,Inter,sans-serif'}}>Eco-Friendly Home Builders | Green Homes</span>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Sustainable home construction and design in Sydney.</div>
</div>
<div aria-hidden="true" className="py-3 border-b border-[#ececec] relative group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">citybuilders.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: 'Roboto,Inter,sans-serif'}}>City Builders Sydney | CityBuilders</span>
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
