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



      const track = document.getElementById("carouselTrack");
      const nextBtnDesktop = document.getElementById("nextBtn");
      const prevBtnDesktop = document.getElementById("prevBtn");
      const nextBtnMobile = document.getElementById("nextBtnMobile");
      const prevBtnMobile = document.getElementById("prevBtnMobile");

      let isAnimating = false;

      function getGapSize() {
        if (window.innerWidth >= 1024) return 32;
        if (window.innerWidth >= 768) return 24;
        if (window.innerWidth >= 640) return 20;
        return 16;
      }

      function updateCentering() {
        const isMobile = window.innerWidth < 768;
        const gap = getGapSize();
        const cardWidth = track.children[0].offsetWidth;
        const containerWidth = track.parentElement.offsetWidth;
        
        const activeIndex = isMobile ? 0 : 1;
        
        const centerOffset = (containerWidth / 2) - (cardWidth / 2);
        const leftWidth = activeIndex * (cardWidth + gap);
        const finalMargin = centerOffset - leftWidth;
        
        track.style.marginLeft = `${finalMargin}px`;
      }

      function applyCardStyles(card, scale, opacity, grayscale, borderColor, shadow) {
        card.style.transform = `scale(${scale})`;
        card.style.opacity = opacity;
        card.style.filter = grayscale ? 'grayscale(100%)' : 'none';
        
        card.classList.remove(
          'border-amber-300/70', 'border-neutral-800',
          'shadow-2xl', 'shadow-amber-900/10'
        );
        
        if (borderColor === 'amber') {
          card.classList.add('border-amber-300/70');
        } else {
          card.classList.add('border-neutral-800');
        }
        
        if (shadow) {
          card.classList.add('shadow-2xl', 'shadow-amber-900/10');
        }
      }

      function applyLayout() {
        const allCards = Array.from(track.children);
        const isMobile = window.innerWidth < 768;
        
        updateCentering();

        allCards.forEach((card, index) => {
          const activeIndex = isMobile ? 0 : 1;

          if (index === activeIndex) {
            applyCardStyles(card, 1, 1, false, 'amber', true);
            card.style.zIndex = '20';
          } else {
            const scale = isMobile ? 0.92 : 0.85;
            applyCardStyles(card, scale, 0.4, true, 'neutral', false);
            card.style.zIndex = '10';
          }
        });
      }

      function shift(direction) {
        if (isAnimating) return;
        isAnimating = true;

        const cardWidth = track.children[0].offsetWidth;
        const gap = getGapSize();
        const moveDistance = cardWidth + gap;
        const isMobile = window.innerWidth < 768;
        const allCards = Array.from(track.children);
        const activeIndex = isMobile ? 0 : 1;

        if (direction === "next") {
          const outgoingCard = allCards[activeIndex];
          const incomingCard = allCards[activeIndex + 1];
          
          const outgoingScale = isMobile ? 0.92 : 0.85;
          applyCardStyles(outgoingCard, outgoingScale, 0.4, true, 'neutral', false);
          applyCardStyles(incomingCard, 1, 1, false, 'amber', true);
          
          track.style.transform = `translateX(-${moveDistance}px)`;
          
          setTimeout(() => {
            track.appendChild(track.firstElementChild);
            track.style.transition = "none";
            track.style.transform = "translateX(0)";
            void track.offsetWidth;
            track.style.transition = "transform 500ms ease-out";
            applyLayout();
            isAnimating = false;
          }, 500);
        } else {
          // Left arrow - improved logic
          const outgoingCard = allCards[activeIndex];
          
          // Apply inactive styles to outgoing card immediately
          const outgoingScale = isMobile ? 0.92 : 0.85;
          applyCardStyles(outgoingCard, outgoingScale, 0.4, true, 'neutral', false);
          
          // Disable transition temporarily
          track.style.transition = "none";
          
          // Move last card to beginning
          track.insertBefore(track.lastElementChild, track.firstElementChild);
          
          // Position track at negative offset (as if we already moved left)
          track.style.transform = `translateX(-${moveDistance}px)`;
          
          // Force reflow
          void track.offsetWidth;
          
          // Get new card positions after DOM manipulation
          const newCards = Array.from(track.children);
          const incomingCard = newCards[activeIndex]; // This is now the card that will be active
          
          // Apply active styles to incoming card
          applyCardStyles(incomingCard, 1, 1, false, 'amber', true);
          
          // Re-enable transition
          track.style.transition = "transform 500ms ease-out";
          
          // Animate back to 0 (creates the visual left slide)
          track.style.transform = "translateX(0)";
          
          setTimeout(() => {
            applyLayout();
            isAnimating = false;
          }, 500);
        }
      }

      // Event Listeners
      if(nextBtnDesktop) nextBtnDesktop.addEventListener("click", () => shift("next"));
      if(prevBtnDesktop) prevBtnDesktop.addEventListener("click", () => shift("prev"));
      if(nextBtnMobile) nextBtnMobile.addEventListener("click", () => shift("next"));
      if(prevBtnMobile) prevBtnMobile.addEventListener("click", () => shift("prev"));

      // Initial setup & Resize
      applyLayout();
      window.addEventListener('resize', () => {
        track.style.transition = "none";
        track.style.transform = "translateX(0)";
        applyLayout();
      });

      // Auto scroll
      let auto = setInterval(() => shift("next"), 8000);
      const resetTimer = () => {
        clearInterval(auto);
        auto = setInterval(() => shift("next"), 8000);
      };

      track.addEventListener("mouseenter", () => clearInterval(auto));
      track.addEventListener("mouseleave", resetTimer);
      
      // Touch/Swipe support
      let touchStartX = 0;
      let touchEndX = 0;
      track.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(auto);
      }, {passive: true});
      
      track.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) shift("next");
        if (touchEndX - touchStartX > 50) shift("prev");
        resetTimer();
      }, {passive: true});
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
      
<div className="flex min-h-screen items-center justify-center w-full py-12 sm:py-16 lg:py-20">
<div className="w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16 lg:gap-24">

<div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-x-10 gap-y-8 items-end md:items-start">
<div className="max-w-2xl">
<p className="text-xs sm:text-sm uppercase mb-3 sm:mb-4 font-medium tracking-tight text-neutral-400" style={{}}>
              Customer stories
            </p>
<h1 className="font-semibold tracking-tight space-y-1 text-amber-100" style={{}}>
<span className="block leading-[1.05] text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
                Built for the teams
              </span>
<span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-neutral-50" style={{}}>
                who move work forward.
              </span>
</h1>
</div>
<div className="flex flex-col justify-between gap-6 sm:gap-8 h-full">
<p className="leading-relaxed md:text-xl md:ml-auto sm:text-lg text-base font-light text-neutral-300 tracking-tighter max-w-xl ml-auto">
              Atlas was created to handle the real-world complexity of modern operations teams. Automate busywork, gain instant visibility, and keep stakeholders aligned.
            </p>

<div className="hidden md:flex justify-end gap-3 mt-auto">
<button className="group inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300/80 border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-neutral-50 hover:border-neutral-600 hover:bg-neutral-900" id="prevBtn" style={{}}>
<svg className="lucide h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="15 18 9 12 15 6"></polyline>
</svg>
</button>
<button className="group inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300/80 border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-neutral-50 hover:border-neutral-600 hover:bg-neutral-900" id="nextBtn" style={{}}>
<svg className="lucide h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</button>
</div>
</div>
</div>

<div className="w-full">
<div className="relative -mx-4 sm:-mx-6 lg:-mx-8">

<div className="overflow-hidden sm:px-6 lg:px-8 pt-4 pr-4 pb-4 pl-4" style={{maskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)'}}>

<div className="flex transition-transform duration-500 ease-out gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-center justify-start" id="carouselTrack" style={{transform: 'translateX(0px)', transition: 'transform 500ms ease-out'}}>
<article className="testimonial-card flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[450px] lg:w-[500px] min-h-[360px] sm:min-h-[420px] transition-all duration-500 ease-out flex flex-col bg-gradient-to-b rounded-2xl sm:rounded-3xl pt-6 sm:pt-10 pr-6 sm:pr-10 pb-6 sm:pb-10 pl-6 sm:pl-10 justify-between from-neutral-950 via-neutral-950 to-neutral-900 border border-amber-300/70 shadow-2xl shadow-amber-900/10" style={{position: 'relative', '--border-gradient': 'linear-gradient(135deg, rgba(252, 211, 77, 0.15), rgba(252, 211, 77, 0))', '--border-radius-before': '1.5rem', transform: 'scale(1)', opacity: '1', filter: 'none', zIndex: '20'}}>
<p className="text-base sm:text-lg md:text-xl leading-relaxed font-[400] text-neutral-100 tracking-tight">
        "We rely on Atlas to orchestrate every handoff. The platform doesn't just automate tasks—it learns from our
        feedback, ships improvements weekly, and keeps our team in sync."
      </p>
<div className="mt-6 sm:mt-8 flex items-center gap-4 flex-shrink-0">
<div className="h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full border bg-neutral-800 border-neutral-800">
<img alt="Customer Avatar" className="h-full w-full object-cover opacity-90" src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=80"/>
</div>
<div>
<p className="text-sm sm:text-base font-[500] tracking-tight text-neutral-50">
            Riley Chen, COO
          </p>
<p className="text-xs sm:text-sm uppercase text-neutral-500 font-[400] tracking-tight mt-0.5">
            Summit Product Studio
          </p>
</div>
</div>
</article>
<article className="testimonial-card flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[450px] lg:w-[500px] min-h-[360px] sm:min-h-[420px] transition-all duration-500 ease-out flex flex-col bg-gradient-to-b rounded-2xl sm:rounded-3xl pt-6 sm:pt-10 pr-6 sm:pr-10 pb-6 sm:pb-10 pl-6 sm:pl-10 justify-between from-neutral-950 via-neutral-950 to-neutral-900 border border-neutral-800" style={{position: 'relative', '--border-gradient': 'linear-gradient(135deg, rgba(252, 211, 77, 0.15), rgba(252, 211, 77, 0))', '--border-radius-before': '1.5rem', transform: 'scale(0.92)', opacity: '0.4', filter: 'grayscale(100%)', zIndex: '10'}}>
<p className="text-base sm:text-lg md:text-xl leading-relaxed font-[400] text-neutral-100 tracking-tight">
        "Atlas has transformed how we manage inbound requests. We resolve tickets 3× faster with fewer manual steps, and
        stakeholders get real-time updates without chasing us."
      </p>
<div className="mt-6 sm:mt-8 flex items-center gap-4 flex-shrink-0">
<div className="h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full border bg-neutral-800 border-neutral-800">
<img alt="Customer Avatar" className="h-full w-full object-cover opacity-90" src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=80"/>
</div>
<div className="">
<p className="text-sm sm:text-base font-[500] tracking-tight text-neutral-50">
            Morgan Blake
          </p>
<p className="text-xs sm:text-sm uppercase text-neutral-500 font-[400] tracking-tight mt-0.5">
            Cascade Support Network
          </p>
</div>
</div>
</article>
<article className="testimonial-card flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[450px] lg:w-[500px] min-h-[360px] sm:min-h-[420px] transition-all duration-500 ease-out flex flex-col bg-gradient-to-b rounded-2xl sm:rounded-3xl pt-6 sm:pt-10 pr-6 sm:pr-10 pb-6 sm:pb-10 pl-6 sm:pl-10 justify-between from-neutral-950 via-neutral-950 to-neutral-900 border border-neutral-800" style={{position: 'relative', '--border-gradient': 'linear-gradient(135deg, rgba(252, 211, 77, 0.15), rgba(252, 211, 77, 0))', '--border-radius-before': '1.5rem', transform: 'scale(0.92)', opacity: '0.4', filter: 'grayscale(100%)', zIndex: '10'}}>
<p className="text-base sm:text-lg md:text-xl leading-relaxed font-[400] text-neutral-100 tracking-tight">
        "It surfaces risks early and gives leadership a single source of truth. We've scaled from 5 to 22 projects per
        quarter without adding headcount. It's the backbone of our ops stack."
      </p>
<div className="mt-6 sm:mt-8 flex items-center gap-4 flex-shrink-0">
<div className="h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full border bg-neutral-800 border-neutral-800">
<img alt="Customer Avatar" className="h-full w-full object-cover opacity-90" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=80"/>
</div>
<div>
<p className="text-sm sm:text-base font-[500] tracking-tight text-neutral-50">
            Taylor Reeves
          </p>
<p className="text-xs sm:text-sm uppercase text-neutral-500 font-[400] tracking-tight mt-0.5">
            Vertex Delivery Group
          </p>
</div>
</div>
</article>
<article className="testimonial-card flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[450px] lg:w-[500px] min-h-[360px] sm:min-h-[420px] transition-all duration-500 ease-out flex flex-col bg-gradient-to-b rounded-2xl sm:rounded-3xl pt-6 sm:pt-10 pr-6 sm:pr-10 pb-6 sm:pb-10 pl-6 sm:pl-10 justify-between from-neutral-950 via-neutral-950 to-neutral-900 border border-neutral-800" style={{position: 'relative', '--border-gradient': 'linear-gradient(135deg, rgba(252, 211, 77, 0.15), rgba(252, 211, 77, 0))', '--border-radius-before': '1.5rem', transform: 'scale(0.92)', opacity: '0.4', filter: 'grayscale(100%)', zIndex: '10'}}>
<p className="text-base sm:text-lg md:text-xl leading-relaxed font-[400] text-neutral-100 tracking-tight">
        "The level of clarity and control Atlas gives our operations team is unlike anything we've used before. We've
        cut status meetings by over 40% and improved response times."
      </p>
<div className="mt-6 sm:mt-8 flex items-center gap-4 flex-shrink-0">
<div className="h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full border bg-neutral-800 border-neutral-800">
<img alt="Customer Avatar" className="h-full w-full object-cover opacity-90" src="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=80"/>
</div>
<div>
<p className="text-sm sm:text-base font-[500] tracking-tight text-neutral-50">
            Jordan Avery
          </p>
<p className="text-xs sm:text-sm uppercase text-neutral-500 font-[400] tracking-tight mt-0.5">
            Horizon Operations Collective
          </p>
</div>
</div>
</article>
</div>
</div>

<div className="flex md:hidden justify-center gap-4 mt-8">
<button className="group inline-flex h-12 w-12 items-center justify-center rounded-full border transition-colors focus:outline-none active:bg-neutral-900 border-neutral-800 bg-neutral-950 text-neutral-400" id="prevBtnMobile" style={{}}>
<svg className="lucide h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="15 18 9 12 15 6"></polyline>
</svg>
</button>
<button className="group inline-flex h-12 w-12 items-center justify-center rounded-full border transition-colors focus:outline-none active:bg-neutral-900 border-neutral-800 bg-neutral-950 text-neutral-400" id="nextBtnMobile" style={{}}>
<svg className="lucide w-[20px] h-[20px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'rgb(163, 163, 163)', width: '20px', height: '20px'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
