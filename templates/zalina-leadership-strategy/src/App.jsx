import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



              (function () {
                const root = document.querySelector('[data-element-id="aura-emm9lrbnf6m0bewm"]');
                if (!root) return;

                const slider = root.querySelector('#testimonialContainer');
                const prevBtn = root.querySelector('#prevBtn');
                const nextBtn = root.querySelector('#nextBtn');
                if (!slider || !prevBtn || !nextBtn) return;

                // Prevent double-init
                if (slider.dataset.carouselInit === 'true') return;
                slider.dataset.carouselInit = 'true';

                // Ensure snap & smooth behavior; keep existing layout intact
                slider.style.scrollSnapType = 'x mandatory';
                slider.style.scrollBehavior = 'smooth';
                slider.style.webkitOverflowScrolling = 'touch';

                const getSlides = () => Array.from(slider.children).filter(el => el && el.nodeType === 1);

                const getGapPx = () => {
                  const cs = window.getComputedStyle(slider);
                  // Column gap is used for flex; gap resolves to column gap
                  const g = cs.columnGap || cs.gap || '0px';
                  const n = parseFloat(g);
                  return Number.isFinite(n) ? n : 0;
                };

                const getScrollStep = () => {
                  const slides = getSlides();
                  const first = slides[0];
                  if (!first) return 0;
                  return first.getBoundingClientRect().width + getGapPx();
                };

                const getClosestIndex = () => {
                  const slides = getSlides();
                  if (!slides.length) return 0;
                  const left = slider.scrollLeft;
                  const step = getScrollStep() || 1;
                  return Math.round(left / step);
                };

                const scrollToIndex = (idx, behavior = 'smooth') => {
                  const step = getScrollStep();
                  if (!step) return;
                  slider.scrollTo({ left: idx * step, behavior });
                };

                const goNext = () => {
                  const slides = getSlides();
                  if (!slides.length) return;
                  const step = getScrollStep();
                  const maxIdx = slides.length - 1;
                  const idx = getClosestIndex();
                  const nextIdx = idx + 1;

                  if (nextIdx > maxIdx) {
                    // Loop: jump to start after finishing smooth move
                    slider.scrollBy({ left: step, behavior: 'smooth' });
                    window.clearTimeout(slider._loopT);
                    slider._loopT = window.setTimeout(() => {
                      scrollToIndex(0, 'auto');
                    }, 360);
                    return;
                  }
                  scrollToIndex(nextIdx, 'smooth');
                };

                const goPrev = () => {
                  const slides = getSlides();
                  if (!slides.length) return;
                  const step = getScrollStep();
                  const maxIdx = slides.length - 1;
                  const idx = getClosestIndex();
                  const prevIdx = idx - 1;

                  if (prevIdx < 0) {
                    // Loop: jump to end, then animate back one step feels consistent
                    scrollToIndex(maxIdx, 'auto');
                    window.requestAnimationFrame(() => {
                      slider.scrollBy({ left: -step, behavior: 'smooth' });
                    });
                    return;
                  }
                  scrollToIndex(prevIdx, 'smooth');
                };

                nextBtn.addEventListener('click', goNext);
                prevBtn.addEventListener('click', goPrev);

                // Keyboard navigation when section focused
                root.addEventListener('keydown', (e) => {
                  if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    goNext();
                  } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    goPrev();
                  }
                });

                // Pointer drag (mouse) + snap-to-nearest on release; trackpad is native scroll
                let isPointerDown = false;
                let startX = 0;
                let startScrollLeft = 0;

                const onPointerDown = (e) => {
                  if (e.pointerType === 'mouse' && e.button !== 0) return;
                  isPointerDown = true;
                  slider.setPointerCapture && slider.setPointerCapture(e.pointerId);
                  slider.classList.add('cursor-grabbing');
                  startX = e.clientX;
                  startScrollLeft = slider.scrollLeft;
                  slider.style.scrollBehavior = 'auto';
                };

                const onPointerMove = (e) => {
                  if (!isPointerDown) return;
                  e.preventDefault();
                  const dx = e.clientX - startX;
                  slider.scrollLeft = startScrollLeft - dx;
                };

                const endPointer = (e) => {
                  if (!isPointerDown) return;
                  isPointerDown = false;
                  slider.classList.remove('cursor-grabbing');
                  slider.style.scrollBehavior = 'smooth';

                  // Snap to nearest card
                  const idx = getClosestIndex();
                  scrollToIndex(idx, 'smooth');
                };

                slider.addEventListener('pointerdown', onPointerDown, { passive: false });
                slider.addEventListener('pointermove', onPointerMove, { passive: false });
                slider.addEventListener('pointerup', endPointer);
                slider.addEventListener('pointercancel', endPointer);
                slider.addEventListener('pointerleave', endPointer);

                // Infinite loop support for swipe/trackpad: when user scrolls past ends, wrap
                let wrapLock = false;
                const wrapIfNeeded = () => {
                  if (wrapLock) return;
                  const slides = getSlides();
                  if (!slides.length) return;

                  const step = getScrollStep();
                  const maxLeft = step * (slides.length - 1);

                  // A small tolerance helps avoid jitter around boundaries
                  const tol = 2;

                  if (slider.scrollLeft <= tol) {
                    wrapLock = true;
                    scrollToIndex(slides.length - 1, 'auto');
                    window.requestAnimationFrame(() => {
                      slider.style.scrollBehavior = 'smooth';
                      wrapLock = false;
                    });
                  } else if (slider.scrollLeft >= (maxLeft - tol)) {
                    // If user reaches the last slide and continues, wrap to start
                    // Only wrap when it's clearly at the end.
                    // (Natural for trackpad; for buttons we already handle.)
                    // Keep in sync with snapping
                    // Defer slightly so snapping completes
                    window.clearTimeout(slider._wrapT);
                    slider._wrapT = window.setTimeout(() => {
                      if (slider.scrollLeft >= (maxLeft - tol)) {
                        wrapLock = true;
                        scrollToIndex(0, 'auto');
                        window.requestAnimationFrame(() => {
                          slider.style.scrollBehavior = 'smooth';
                          wrapLock = false;
                        });
                      }
                    }, 220);
                  }
                };

                slider.addEventListener('scroll', () => {
                  // Debounced snap after trackpad/momentum scroll
                  window.clearTimeout(slider._snapT);
                  slider._snapT = window.setTimeout(() => {
                    if (isPointerDown) return;
                    const idx = getClosestIndex();
                    scrollToIndex(idx, 'smooth');
                    wrapIfNeeded();
                  }, 140);
                });

                // Re-snap on resize for consistent steps across breakpoints
                window.addEventListener('resize', () => {
                  window.clearTimeout(slider._resizeT);
                  slider._resizeT = window.setTimeout(() => {
                    const idx = getClosestIndex();
                    scrollToIndex(idx, 'auto');
                  }, 120);
                });
              })();
            


    document.addEventListener('DOMContentLoaded', () => {
        const slider = document.getElementById('testimonialContainer');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let isDown = false;
        let startX;
        let scrollLeft;

        // Button Click Logic
        nextBtn.addEventListener('click', () => {
            const cardWidth = slider.querySelector('div').offsetWidth;
            const gap = 32; // gap-8 is 2rem = 32px
            slider.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            const cardWidth = slider.querySelector('div').offsetWidth;
            const gap = 32; 
            slider.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
        });

        // Mouse Drag Logic
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('cursor-grabbing');
            slider.classList.remove('cursor-grab', 'snap-x', 'scroll-smooth'); // Disable snap/smooth for drag feel
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('cursor-grabbing');
            slider.classList.add('cursor-grab', 'snap-x', 'scroll-smooth');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('cursor-grabbing');
            slider.classList.add('cursor-grab', 'snap-x', 'scroll-smooth');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed z-50 transition-all duration-300 bg-slate-50/95 w-full border-transparent border-b top-0 right-0 left-0 backdrop-blur-md">
<div className="md:px-12 flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center justify-between">

<a className="uppercase text-xs font-medium text-blue-950 tracking-[0.2em] z-20 relative" href="#top">Zalina Bugova</a>

<div className="hidden md:flex gap-10 -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 gap-x-10 gap-y-10 items-center">
<a className="text-[11px] hover:text-blue-950 transition-colors duration-200 font-medium text-blue-950/60 tracking-[0.15em]" href="#shift">
  THE SHIFT
</a><a className="text-[11px] hover:text-blue-950 transition-colors duration-200 font-medium text-blue-950/60 tracking-[0.15em]" href="#approach">THE APPROACH</a>
<a className="text-[11px] hover:text-blue-950 transition-colors duration-200 font-medium text-blue-950/60 tracking-[0.15em]" href="#about">
  ABOUT
</a>
</div>

<div className="flex items-center gap-4 z-20 relative">
<a className="hidden md:inline-flex items-center justify-center text-[11px] uppercase hover:bg-blue-900 transition-colors duration-200 font-medium text-white tracking-[0.05em] bg-blue-950 rounded-sm pt-3 pr-6 pb-3 pl-6 shadow-sm" href="https://calendly.com/zalina-bugova/30min?month=2026-02">
            Book Call
        </a>

</div>
</div>
</nav>

<section className="min-h-[85vh] grid scroll-mt-28 md:grid-cols-2 md:px-12 max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-2 pl-6 gap-x-12 gap-y-0 items-center">
<div className="w-full max-w-xl">
<h1 className="leading-tight md:leading-[1.05] md:text-7xl text-5xl text-slate-500 tracking-tight text-left mb-8">You’re strong. <br/><span className="text-blue-950">But strong isn't the same as obvious.</span></h1>
<p className="leading-normal md:text-lg text-base font-light text-blue-950 max-w-xl mb-8">I help accomplished Senior Managers and Directors become the clear next-level choice by shifting from doing everything right to shaping what matters the most.</p>
<div className="flex flex-col items-start">
<a className="inline-flex items-center justify-center transition-all hover:bg-blue-800 focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 text-sm text-white tracking-wide bg-blue-950 pt-4 pr-8 pb-4 pl-8" href="https://calendly.com/zalina-bugova/30min?month=2026-02">Book
      a Strategic Conversation</a>
</div>
</div>
<div className="md:h-[750px] overflow-hidden bg-slate-50 w-full h-[500px] rounded-sm relative">
<img alt="Executive Strategy Advisory" className="object-top grayscale-[10%] hover:scale-105 transition-transform duration-700 ease-out opacity-100 w-full h-full object-cover absolute top-20 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/834a3e97-1df1-4660-94a9-88cfc32b1e8c_1600w.png" style={{height: '80%', objectFit: 'cover', objectPosition: 'top'}}/>
</div>
</section>

<section className="border-y scroll-mt-28 md:pl-24 bg-white border-blue-200/60 pt-24 pr-6 pb-24 pl-6 gap-x-20 gap-y-x-20">
<div className="grid grid-cols-1 md:grid-cols-12 max-w-7xl mr-auto ml-auto gap-x-20 gap-y-12" style={{marginLeft: 'auto', marginRight: 'auto'}}>

<div className="md:col-span-4">
<span className="uppercase block text-xs font-medium text-slate-400 tracking-widest mb-4">The Hidden Ceiling</span>
<h2 className="md:text-5xl leading-snug text-4xl text-blue-950 tracking-tight">What built your success is now shaping your limits.</h2>
</div>

<div className="md:col-span-8 md:pl-122 pl-2">
<p className="text-base font-light text-blue-950 mb-6">You are trusted because you deliver. </p>
<ul className="text-blue-950 mb-8 space-y-4">
</ul>
<ul className="text-blue-950 mb-10 space-y-4">
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<iconify-icon className="text-slate-400 mt-1" height="18" icon="solar:alt-arrow-right-outline" style={{color: 'rgb(148, 163, 184)'}} width="18"></iconify-icon>
<span className="flex flex-col space-y-4 text-base font-light w-full">
<span className="">You take on more.</span>
<span className="flex items-start gap-3 -ml-[30px]">
<iconify-icon className="text-slate-400 mt-1 shrink-0" height="18" icon="solar:alt-arrow-right-outline" style={{color: 'rgb(148, 163, 184)'}} width="18"></iconify-icon>
<span className="">You hold more. </span>
</span>
<span className="flex items-start gap-3 -ml-[30px]">
<iconify-icon className="text-slate-400 mt-1 shrink-0" height="18" icon="solar:alt-arrow-right-outline" style={{color: 'rgb(148, 163, 184)'}} width="18"></iconify-icon>
<span className="">You make things work. </span>
</span>
</span>
</li>
</ul><p className="text-base font-light text-blue-950 mb-6">And your role forms around that.</p>
<div className="border-blue-900 border-l-2 pt-2 pb-2 pl-6">
<p className="text-base font-light text-blue-950 mb-1">Your performance built credibility.</p>
<p className="text-base font-light text-blue-950 mb-1">Now you need the authority to shape what comes next.</p>
</div>
</div>
</div>
</section>

<section className="scroll-mt-28 md:px-12 md:pb-2 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-1 pl-6" id="shift">
<div className="text-center mb-20">
<span className="uppercase block text-xs font-medium text-slate-400 tracking-widest mb-4">The Shift</span>
<h2 className="md:text-5xl serif text-4xl text-blue-950 tracking-tight">From Strong Performer to the Obvious Choice</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-2 max-w-5xl mr-auto mb-20 ml-auto gap-x-6 gap-y-5">

<div className="flex flex-col text-right border-b md:border-b-0 md:border-r border-blue-200 pb-3 md:pb-0 pr-3 md:pr-8">
<span className="uppercase text-[15px] text-slate-400 tracking-widest mb-3">From</span>
<span className="leading-snug text-base font-light text-blue-950">executing priorities</span>
</div>
<div className="flex flex-col md:border-b-0 md:pb-0 md:pl-2 border-blue-200 border-b pb-3 pl-3">
<span className="text-[15px] uppercase text-cyan-900/60 tracking-widest mb-3">To</span>
<span className="leading-snug text-base font-light text-blue-950">shaping direction</span>
</div>

<div className="flex flex-col text-right border-b md:border-b-0 md:border-r border-blue-200 pb-3 md:pb-0 pr-3 md:pr-8">
<span className="leading-snug text-base font-light text-blue-950">solving problems</span>
</div>
<div className="flex flex-col border-b md:border-b-0 border-blue-200 pb-3 md:pb-0 pl-3 md:pl-2">
<span className="leading-snug text-base font-light text-blue-950">changing the system</span>
</div>

<div className="flex flex-col text-right md:border-b-0 md:border-r md:pb-0 border-blue-200 border-b pb-3 pr-3 md:pr-8">
<span className="leading-snug text-base font-light text-blue-950">proving through results</span>
</div>
<div className="flex flex-col border-b md:border-b-0 border-blue-200 pb-3 md:pb-0 pl-3 md:pl-2">
<span className="leading-snug text-base font-light text-blue-950">influencing beyond your title</span>
</div>

<div className="flex flex-col md:border-b-0 md:border-r md:pb-0 md:pr-8 text-right border-blue-200 border-b pr-3 pb-3">
<span className="leading-snug text-base font-light text-blue-950">being relied on for output</span>
</div>
<div className="flex flex-col border-b md:border-b-0 border-blue-200 pb-3 md:pb-0 pl-3 md:pl-2">
<span className="leading-snug text-base font-light text-blue-950">being sought out for leadership</span>
</div>

<div className="flex flex-col md:border-b-0 md:border-r md:pb-0 md:pr-8 text-right border-blue-200 border-b pr-3 pb-3">
<span className="leading-snug text-base font-light text-blue-950">earning respect</span>
</div>
<div className="flex flex-col md:pb-0 md:pl-2 pb-3 pl-3 border-b md:border-b-0 border-blue-200">
<span className="leading-snug text-base font-light text-blue-950">being wanted for what comes next</span>
</div>

<div className="col-span-2 text-center pt-5">
<span className="text-base font-normal italic text-slate-400 tracking-wide">The next level is not earned by more effort.<br/>It is secured by becoming wanted for what comes next.</span>
</div>
</div>

</section>


<section className="md:px-12 scroll-mt-28 bg-white pt-24 pr-6 pb-24 pl-6" id="approach">
<div className="max-w-7xl mr-auto ml-auto">
<div className="mb-16">
<h2 className="md:text-5xl text-4xl text-blue-950 tracking-tight mb-6">The Shift in Four Phases</h2>
<p className="text-base font-light text-blue-950">A structured process that moves you from flawless execution to strategic authority.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="flex flex-col">
<span className="serif text-6xl text-blue-200 tracking-tight mb-6 grayscale-100">1.</span>
<h3 className="text-3xl text-blue-950 tracking-tight mb-3">Diagnose the Pattern</h3>
<p className="leading-relaxed text-base font-light text-blue-950">We identify how your current success is being read, where your authority is capped, and what keeps you at your current level.</p>
</div>

<div className="flex flex-col">
<span className="serif text-6xl text-blue-200 tracking-tight mb-6">2.</span>
<h3 className="text-3xl text-blue-950 tracking-tight mb-3">Reclaim Strategic Focus</h3>
<p className="leading-relaxed text-base font-light text-blue-950">We redesign where your attention, decisions and energy go, so you stop carrying everything and start shaping what matters next.</p>
</div>

<div className="flex flex-col">
<span className="serif text-6xl text-blue-200 tracking-tight mb-6">3.</span>
<h3 className="text-3xl text-blue-950 tracking-tight mb-3">Build Executive Pull</h3>
<p className="leading-relaxed text-base font-light text-blue-950">We define the business problems, platforms and conversations that make senior leaders want you closer to what comes next.</p>
</div>

<div className="flex flex-col">
<span className="text-6xl serif text-blue-200 mb-6 tracking-tight">4.</span>
<h3 className="text-3xl text-blue-950 tracking-tight mb-3">Next-Level Narrative</h3>
<p className="leading-relaxed text-base font-light text-blue-950">We sharpen the narrative around your judgment, scope and impact, so your name becomes associated with the next mandate before the role opens.</p>
</div>
</div>
<div className="border-blue-100 border-t mt-6 pt-8">
<p className="md:text-left text-base font-medium text-blue-950 text-center">
                        Outcome:
                        <span className="font-light text-blue-950">You stop being valued only for what you carry and become wanted for what you can lead next.</span>
</p>
</div>
</div>
</section>

<section className="md:px-12 md:pb-12 md:pt-2 bg-blue-950 pt-2 pr-6 pb-24 pl-6">
<div className="max-w-5xl mr-auto ml-auto">



<div className="mt-20 text-center space-y-3 md:mt-12">
<p className="serif leading-tight md:text-center md:text-6xl text-4xl text-white tracking-tight text-center">You’ve proven enough.</p>
<p className="serif leading-tight md:text-6xl text-4xl font-medium text-white tracking-tight">Now become the choice.</p>
</div>
<div className="md:mt-8 text-center mt-10">
<a bg-white="" className="inline-flex items-center justify-center transition-colors duration-200 hover:bg-blue-950 hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-950 focus:ring-white text-sm text-blue-950 tracking-wide bg-white border-blue-950 border rounded-sm pt-4 pr-8 pb-4 pl-8 shadow-none" focus:ring-2="" focus:ring-offset-2="" focus:ring-offset-blue-950="" focus:ring-white="" hover:bg-blue-50="" hover:text-blue-950="" href="https://calendly.com/zalina-bugova/30min?=" inline-flex="" items-center="" justify-center="" pb-4="" pl-8="" pr-8="" pt-4="" shadow-sm"="" style={{backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(23, 37, 84)', border: '1px solid rgb(23, 37, 84)', boxShadow: 'none'}} text-blue-="" text-sm="" tracking-wide="" transition-all="">Book a Strategic Conversation</a>
</div>
</div>
</section>

<section className="md:px-12 scroll-mt-28 bg-slate-100 pt-24 pr-6 pb-24 pl-6" id="about" style={{backgroundColor: '#FFFFFF'}}>
<div className="grid grid-cols-1 max-w-7xl mr-auto ml-auto gap-y-12 gap-x-12 md:grid-cols-12">
<div className="md:col-span-4">
<span className="uppercase block text-xs font-medium text-slate-400 tracking-widest mb-4">about</span>
<h2 className="serif md:text-5xl text-4xl text-blue-950 tracking-tight">I Know How Promotion Decisions Actually Get Made</h2><figure className="mt-8 w-full">
<div className="relative w-full overflow-hidden rounded-sm border border-blue-200/60 bg-slate-50 shadow-sm">
<img alt="Executive leadership advisory" className="md:h-[340px] w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/62faf212-c44c-40f6-ab66-baa8ab3b2c4d_800w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/10 via-transparent to-transparent"></div>
</div>
</figure>
<figure className="mt-4 w-full">
<div className="w-full">
<iconify-icon className="hidden" height="18" icon="solar:gallery-outline" width="18"></iconify-icon>
</div>
</figure>
<figure className="mt-4 w-full">
<div className="w-full">
<iconify-icon className="hidden" height="18" icon="solar:gallery-outline" width="18"></iconify-icon>
</div>
</figure>
</div>
<div className="leading-relaxed md:col-span-8 md:pl-12 md:text-base text-base font-light text-blue-950 space-y-6">
<p className="">For 16 years at Johnson &amp; Johnson, I built an accelerated career across three continents:<br/> Manager in Russia at 25.<br/> Sr. Manager in Brasil at 30.<br/>CFO of 33 LATAM countries at 33.<br/>Global Sr Director in the US at 37.</p>
<p className="">I worked inside billion-dollar environments where being good was the baseline — and getting ahead required something else entirely.
</p>
<p className="">I sat in the rooms where those decisions were made. I saw the same pattern repeatedly:<br className=""/>exceptional performers, deeply respected, still passed over.<br/>Others, sometimes with less visible effort, moving faster.</p><div className="">
<p className="font-medium text-blue-950 mb-4"></p>
<ul className="list-none border-blue-300 border-l pl-4 space-y-2">
<li className=""></li><li className=""></li><li className=""></li><li className="font-light">The difference was rarely talent. It was design.</li>
</ul>
</div><p className="">How they focused.
How they positioned their judgment.<br/>How they created enterprise-level impact.<br/>How clearly leadership understood what they could be trusted to lead next.</p>
<p className="font-light text-blue-950 border-blue-200/50 border-t pt-4">Today I work with accomplished Senior Managers and Directors ready to close that gap.<br/>One situation, one path, built around your organization, your stakeholders and your next move.</p>
</div>
</div>
</section>

<section className="scroll-mt-28 overflow-hidden md:px-12 md:pt-12 bg-slate-100 pt-12 pr-6 pb-12 pl-6">
<div aria-label="Testimonials carousel" aria-roledescription="carousel" className="group max-w-7xl mr-auto ml-auto relative" role="region" tabindex="0">
<span className="block serif leading-tight md:text-5xl text-4xl font-normal text-blue-950 tracking-tight text-center mb-16">What leaders say</span>

<button aria-label="Previous testimonial" className="flex -left-3 md:-left-5 -translate-y-1/2 z-20 transition-all duration-300 md:group-hover:opacity-100 hover:shadow-md disabled:opacity-0 cursor-pointer text-blue-950 bg-white/90 opacity-100 md:opacity-0 w-10 h-10 md:w-12 md:h-12 border-blue-100 border rounded-full mt-4 absolute top-1/2 shadow-sm backdrop-blur-sm items-center justify-center" id="prevBtn" onclick="(function(){var root=this.closest('[role=&quot;region&quot;][aria-roledescription=&quot;carousel&quot;]')||this.closest('.group')||document;var slider=root.querySelector('#testimonialContainer')||document.getElementById('testimonialContainer');if(!slider)return;var first=slider.querySelector('[data-slide]')||slider.querySelector('div');if(!first)return;var cs=window.getComputedStyle(slider);var gap=parseFloat(cs.columnGap||cs.gap||'0')||0;var step=first.getBoundingClientRect().width+gap;slider.style.scrollBehavior='smooth';try{slider.scrollBy({left:-step,behavior:'smooth'});}catch(e){slider.scrollLeft-=step;}}).call(this);" type="button">
<iconify-icon className="" height="20" icon="solar:arrow-left-linear" style={{color: 'rgb(23, 37, 84)'}} width="20"></iconify-icon>
</button>

<div className="flex overflow-x-auto -mb-8 snap-mandatory scrollbar-hide active:cursor-grabbing pb-8 gap-x-8 gap-y-8 items-stretch" id="testimonialContainer" style={{scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch'}}>
<div className="flex-none snap-start md:w-[calc((100%-4rem)/3)] select-none bg-white w-[85vw] border-blue-100 border pt-8 pr-8 pb-8 pl-8 shadow-sm" data-slide="1">
<p className="leading-relaxed text-lg italic text-blue-950 font-serif mb-6">"Instead of jumping into execution, I became much more intentional about strategic priorities and how I positioned myself inside the organization."</p>
<div className="flex items-center gap-3 text-xs tracking-wide mt-auto pt-4">
<img alt="Ayushi" className="shrink-0 w-10 h-10 object-cover bg-center rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9f32f46-efdb-4163-b79f-f0c7459b5689_320w.png"/>
<div className="flex flex-col">
<span className="block font-semibold text-blue-950">Ingrid J.</span>
<span className="block text-blue-950">Head of Sales Operations, Kenvue</span>
</div>
</div>
</div><div className="flex-none snap-start md:w-[calc((100%-4rem)/3)] select-none bg-white w-[85vw] border-blue-100 border pt-8 pr-8 pb-8 pl-8 shadow-sm" data-slide="6">
<p className="leading-relaxed text-lg italic text-blue-950 font-serif mb-6">"I strengthened my leadership presence and influence in a new environment and became perceived as a trusted advisor by both peers and leadership in a short timeframe."</p>
<div className="flex gap-3 text-xs tracking-wide mt-auto pt-4 gap-x-3 gap-y-3 items-center">
<img alt="Carmen Cecilia Galán" className="shrink-0 w-10 h-10 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/62d30c91-a876-4d0a-9bd5-6579427564d3_320w.jpg"/>
<div className="flex flex-col">
<span className="block font-semibold text-blue-950">Caio P.,</span>
<span className="block text-blue-950">Sr Finance Manager, Johnson &amp; Johnson</span>
</div>
</div>
</div><div className="flex-none snap-start md:w-[calc((100%-4rem)/3)] select-none bg-white w-[85vw] border-blue-100 border pt-8 pr-8 pb-8 pl-8 shadow-sm" data-slide="3">
<p className="leading-relaxed text-lg italic text-blue-950 font-serif mb-6">“I became much more intentional about where I create strategic impact, how I position my work, and how I show up in leadership conversations.”</p>
<div className="flex items-center gap-3 text-xs tracking-wide pt-4 mt-auto">
<img alt="Maria Paula C" className="shrink-0 bg-center w-10 h-10 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f92de4a-5e5e-43bc-a896-71d13c36603d_320w.jpg"/>
<div className="flex flex-col">
<span className="block font-semibold text-blue-950">Claudia F.,</span>
<span className="block text-blue-950">Legal Director, Johnson &amp; Johnson</span>
</div>
</div>
</div><div className="flex-none snap-start md:w-[calc((100%-4rem)/3)] select-none bg-white w-[85vw] border-blue-100 border pt-8 pr-8 pb-8 pl-8 shadow-sm" data-slide="1">
<p className="leading-relaxed text-lg italic text-blue-950 font-serif mb-6">"Zalina played a pivotal role in my transition to Director. She changed how I lead, think, and grow — I shifted from focusing on quantity to delivering meaningful impact."</p>
<div className="flex gap-3 text-xs tracking-wide mt-auto pt-4 gap-x-3 gap-y-3 items-center">
<img alt="Ayushi" className="shrink-0 w-10 h-10 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/51c9f8c4-cd0e-4bb6-bae8-a069319f70da_320w.jpg"/>
<div className="flex flex-col">
<span className="block font-semibold text-blue-950">Ayushi M.</span>
<span className="block text-blue-950">Global Finance Director, Johnson &amp; Johnson</span>
</div>
</div>
</div>
<div className="flex-none snap-start md:w-[calc((100%-4rem)/3)] select-none bg-white w-[85vw] border-blue-100 border pt-8 pr-8 pb-8 pl-8 shadow-sm" data-slide="3">
<p className="leading-relaxed text-lg italic text-blue-950 font-serif mb-6">
                        “Those powerful conversations helped me shape the professional I am today. You’ve been instrumental in my development and growth”
                    </p>
<div className="flex items-center gap-3 text-xs tracking-wide pt-4 mt-auto">
<img alt="Maria Paula C" className="shrink-0 w-10 h-10 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4493b8fa-4293-4505-974a-571a8d3e3f31_320w.jpg"/>
<div className="flex flex-col">
<span className="block font-semibold text-blue-950">Maria Paula C.</span>
<span className="block text-blue-950">Legal Director, Kenvue</span>
</div>
</div>
</div>
</div>

<button aria-label="Next testimonial" className="flex -right-3 md:-right-5 -translate-y-1/2 z-20 transition-all duration-300 md:group-hover:opacity-100 hover:shadow-md cursor-pointer text-blue-950 bg-white/90 opacity-100 md:opacity-0 w-10 h-10 md:w-12 md:h-12 border-blue-100 border rounded-full mt-4 absolute top-1/2 shadow-sm backdrop-blur-sm items-center justify-center" id="nextBtn" onclick="(function(){var root=this.closest('[role=&quot;region&quot;][aria-roledescription=&quot;carousel&quot;]')||this.closest('.group')||document;var slider=root.querySelector('#testimonialContainer')||document.getElementById('testimonialContainer');if(!slider)return;var first=slider.querySelector('[data-slide]')||slider.querySelector('div');if(!first)return;var cs=window.getComputedStyle(slider);var gap=parseFloat(cs.columnGap||cs.gap||'0')||0;var step=first.getBoundingClientRect().width+gap;slider.style.scrollBehavior='smooth';try{slider.scrollBy({left:step,behavior:'smooth'});}catch(e){slider.scrollLeft+=step;}}).call(this);" type="button">
<iconify-icon className="" height="20" icon="solar:arrow-right-linear" style={{color: 'rgb(23, 37, 84)'}} width="20"></iconify-icon>
</button>

</div>
</section>

<section className="scroll-mt-28 md:px-12 md:pt-24 md:pb-24 text-center bg-blue-950 pt-32 pr-6 pb-32 pl-6" id="contact">
<div className="max-w-2xl mr-auto ml-auto">
<h2 className="leading-tight serif md:text-5xl text-4xl text-white tracking-tight mb-4">Your next role won't be earned.<br/>It will be engineered.</h2>
<p className="md:text-2xl text-xl font-light text-blue-100 mb-12"></p>
<a className="inline-flex items-center justify-center transition-all hover:bg-blue-50 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-950 focus:ring-white text-sm text-blue-950 tracking-wide bg-white pt-5 pr-10 pb-5 pl-10 shadow-lg" href="https://calendly.com/zalina-bugova/30min?month=2026-02">Book a Strategic Conversation</a>
</div>
</section>

<footer className="md:px-12 md:text-left text-center border-blue-100 border-t pt-12 pr-6 pb-12 pl-6">
<div className="flex flex-col md:flex-row uppercase text-xs text-slate-400 tracking-widest max-w-7xl mr-auto ml-auto items-center justify-between" onclick="window.location.href='https://www.linkedin.com/in/zalina-bugova/'" role="button">
<a aria-label="LinkedIn Profile" className="md:mt-0 hover:opacity-70 transition-opacity duration-200 mt-4" href="https://www.linkedin.com/in/zalina-bugova/" rel="noopener noreferrer" target="_blank">
<svg className="w-[30px] h-[30px]" data-icon-replaced="true" data-icon-set="logos" data-logos="linkedin-icon" fill="none" height="30" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(148, 163, 184)', width: '30px', height: '30px'}} viewbox="0 0 256 256" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2"></path></svg>
</a><span className="md:mt-0 text-center mt-4">Enterprise Leadership Strategy</span><span className="">© Zalina Bugova</span>
</div>
</footer>


    </>
  );
}
