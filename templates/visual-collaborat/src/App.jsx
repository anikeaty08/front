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



            const testimonials = [
              {
                name: "Raymond Galario",
                title: "Creative Director, Studio North<br>Sydney, Australia",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=220&q=80",
                quote: "Canvas helps our team turn scattered ideas into clear plans. It’s simple, collaborative, and keeps everyone moving in the same direction."
              },
              {
                name: "Sarah Jenkins",
                title: "Product Manager, TechFlow<br>San Francisco, USA",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=220&q=80",
                quote: "This platform completely transformed how our product teams collaborate on a daily basis. The real-time features are unmatched and deeply intuitive."
              },
              {
                name: "Marcus Chen",
                title: "Lead Developer, Innovate Inc<br>London, UK",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=220&q=80",
                quote: "I was skeptical at first, but the intuitive interface and seamless integrations won me over in less than a week. It's now essential to our workflow."
              }
            ];
            let currentTestimonial = 0;

            function rotateTestimonial() {
              currentTestimonial++;
              if (currentTestimonial >= testimonials.length) currentTestimonial = 0;

              const t = testimonials[currentTestimonial];
              const container = document.getElementById('testimonial-content-container');

              if(container) {
                container.style.opacity = '0';
                setTimeout(() => {
                  const avatar = document.getElementById('test-avatar');
                  const name = document.getElementById('test-name');
                  const title = document.getElementById('test-title');
                  const quote = document.getElementById('test-quote');

                  if(avatar) avatar.src = t.image;
                  if(name) name.innerText = t.name;
                  if(title) title.innerHTML = t.title;
                  if(quote) quote.innerText = t.quote;

                  container.style.opacity = '1';
                }, 300);
              }
            }

            setInterval(rotateTestimonial, 4500);
          


      lucide.createIcons({
        attrs: {
          "stroke-width": 1.5
        }
      });
    


      document.addEventListener("DOMContentLoaded", () => {
        if (typeof gsap === "undefined") return;
        gsap.registerPlugin(ScrollTrigger);

        // Subtle Canvas Pan/Zoom
        gsap.fromTo('.cpv-window',
          { scale: 0.95, opacity: 0.5, y: 30 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: '.cpv-wrap',
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Canvas Background Pan
        gsap.utils.toArray('.canvas-hero, .cpv-product, .hiw-dark, .cpv-section').forEach(section => {
          gsap.to(section, {
            backgroundPosition: "0px 100px",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
        });

        // Sticky-note parallax
        gsap.utils.toArray('.canvas-floating-note, .cpv-note').forEach((note, i) => {
          const speed = 1 + (i % 3) * 0.4;
          gsap.to(note, {
            y: (i % 2 === 0 ? -40 : 40) * speed,
            rotation: (i % 2 === 0 ? 5 : -5),
            ease: "none",
            scrollTrigger: {
              trigger: note.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          });
        });

        // Staggered card reveals
        const cardSections = ['.canvas-feature-cards', '.cpv-template-grid', '.hiw-dark .grid', '.hiw-summary'];
        cardSections.forEach(selector => {
          const wrapper = document.querySelector(selector);
          if (wrapper) {
            const cards = Array.from(wrapper.children).filter(el => el.tagName !== 'STYLE' && el.tagName !== 'SCRIPT');
            if (cards.length > 0) {
              gsap.fromTo(cards,
                { y: 30, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.8,
                  stagger: 0.15,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: wrapper,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                  }
                }
              );
            }
          }
        });

        // Hand-drawn doodle stroke animations
        gsap.utils.toArray('.canvas-doodle path, .cpv-doodle path, .hiw-doodle path, section > div > svg.absolute path').forEach(path => {
          if (path.style.animation || (path.parentElement && path.parentElement.style.animation)) return;
          const length = path.getTotalLength ? path.getTotalLength() : 500;
          if (length > 0) {
            path.style.strokeDasharray = length;
            gsap.fromTo(path,
              { strokeDashoffset: length, opacity: 0 },
              {
                strokeDashoffset: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: path.ownerSVGElement || path,
                  start: "top 85%",
                  toggleActions: "play none none reverse"
                }
              }
            );
          }
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
      
<main className="overflow-hidden bg-white">
<section className="canvas-hero" style={{background: 'rgb(255, 255, 255)'}}>
<style className="">
          @import url('https://fonts.googleapis.com/css2?family=Chewy&family=Patrick+Hand&family=Inter:wght@500;600;700;800&display=swap');

          .canvas-hero {
            --blue: #13a8ff;
            --blue-dark: #068ee5;
            --ink: #070707;
            --line: rgba(15, 23, 42, 0.075);
            position: relative;
            min-height: 100vh;
            overflow: hidden;
            background:
              linear-gradient(to right, var(--line) 1px, transparent 1px),
              linear-gradient(to bottom, var(--line) 1px, transparent 1px),
              #ffffff;
            background-size: 48px 48px;
            color: var(--ink);
            font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          }

          .canvas-hero * {
            box-sizing: border-box;
          }

          .canvas-hero a {
            color: inherit;
            text-decoration: none;
          }

          .canvas-nav {
            position: relative;
            z-index: 30;
            height: 96px;
            display: flex;
            align-items: stretch;
            justify-content: space-between;
            border-bottom: 1px solid #e7e7e7;
            background: rgba(255, 255, 255, 0.92);
            backdrop-filter: blur(18px);
            box-shadow: 0 8px 30px rgba(15, 23, 42, 0.04);
          }

          .canvas-nav-left,
          .canvas-nav-right {
            display: flex;
            align-items: stretch;
          }

          .canvas-logo-wrap {
            width: 112px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-right: 1px solid #ededed;
          }

          .canvas-logo {
            width: 58px;
            height: 58px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            background: white;
            color: #000;
            font-family: "Chewy", "Inter", sans-serif;
            font-size: 42px;
            line-height: 1;
            box-shadow: 0 6px 18px rgba(15, 23, 42, 0.12), inset 0 0 0 1px rgba(15, 23, 42, 0.06);
          }

          .canvas-menu {
            display: flex;
            align-items: stretch;
          }

          .canvas-menu a {
            min-width: 142px;
            padding: 0 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            border-right: 1px solid #ededed;
            font-family: "Patrick Hand", "Inter", sans-serif;
            font-size: 20px;
            font-weight: 700;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            white-space: nowrap;
          }

          .canvas-menu a.is-active {
            background: var(--blue);
            color: #020202;
          }

          .canvas-menu svg,
          .canvas-nav-right svg {
            width: 24px;
            height: 24px;
            stroke-width: 2.4;
            flex: 0 0 auto;
          }

          .canvas-nav-right {
            align-items: center;
            gap: 28px;
            padding-right: 22px;
          }

          .canvas-login {
            font-family: "Patrick Hand", "Inter", sans-serif;
            font-size: 21px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.02em;
          }

          .canvas-top-cta {
            min-width: 202px;
            height: 58px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            background: var(--blue);
            color: white;
            font-family: "Patrick Hand", "Inter", sans-serif;
            font-size: 22px;
            font-weight: 700;
            text-transform: uppercase;
            box-shadow: 0 4px 0 rgba(0, 0, 0, 0.06);
          }

          .canvas-mobile-menu {
            display: none;
            width: 54px;
            height: 54px;
            align-items: center;
            justify-content: center;
            margin-right: 18px;
            border: 1px solid #dddddd;
            border-radius: 12px;
            background: white;
          }

          .canvas-stage {
            position: relative;
            z-index: 2;
            min-height: calc(100vh - 96px);
            max-width: 1640px;
            margin: 0 auto;
            padding: 86px 44px 36px;
          }

          .canvas-center {
            position: relative;
            z-index: 5;
            max-width: 980px;
            margin: 0 auto;
            text-align: center;
          }

          .canvas-eyebrow-wrap {
            display: inline-flex;
            align-items: center;
            gap: 18px;
            margin-bottom: 40px;
          }

          .canvas-sketch-lines {
            width: 42px;
            height: 42px;
            position: relative;
            display: inline-block;
          }

          .canvas-sketch-lines::before,
          .canvas-sketch-lines::after,
          .canvas-sketch-lines span {
            content: "";
            position: absolute;
            left: 18px;
            top: 10px;
            width: 3px;
            height: 24px;
            border-radius: 999px;
            background: #0a0a0a;
            transform-origin: bottom center;
          }

          .canvas-sketch-lines::before {
            transform: rotate(-42deg);
          }

          .canvas-sketch-lines::after {
            transform: rotate(0deg);
            top: 2px;
            height: 17px;
          }

          .canvas-sketch-lines span {
            transform: rotate(44deg);
            top: 10px;
            height: 19px;
          }

          .canvas-eyebrow {
            display: inline-block;
            font-family: "Patrick Hand", "Inter", sans-serif;
            font-size: clamp(24px, 2.1vw, 36px);
            font-weight: 700;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            line-height: 1;
            transform: rotate(-2deg);
          }

          .canvas-eyebrow::after {
            content: "";
            display: block;
            height: 4px;
            width: 105%;
            margin-top: 8px;
            margin-left: -2%;
            border-radius: 999px;
            background: var(--blue);
            transform: rotate(-2deg);
          }

          .canvas-select-box {
            position: relative;
            width: min(100%, 940px);
            margin: 0 auto 26px;
            padding: 18px 38px 23px;
            border: 3px solid var(--blue);
            background: rgba(255, 255, 255, 0.28);
          }

          .canvas-handle {
            position: absolute;
            width: 18px;
            height: 18px;
            border: 3px solid #050505;
            background: var(--blue);
            box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
          }

          .canvas-handle.tl {
            top: -11px;
            left: -11px;
          }

          .canvas-handle.tc {
            top: -11px;
            left: 50%;
            transform: translateX(-50%);
          }

          .canvas-handle.tr {
            top: -11px;
            right: -11px;
          }

          .canvas-handle.ml {
            top: 50%;
            left: -11px;
            transform: translateY(-50%);
          }

          .canvas-handle.mr {
            top: 50%;
            right: -11px;
            transform: translateY(-50%);
          }

          .canvas-handle.bl {
            bottom: -11px;
            left: -11px;
          }

          .canvas-handle.bc {
            bottom: -11px;
            left: 50%;
            transform: translateX(-50%);
          }

          .canvas-handle.br {
            bottom: -11px;
            right: -11px;
          }

          .canvas-title {
            margin: 0;
            font-family: "Chewy", "Cooper Black", "Arial Black", sans-serif;
            font-size: clamp(92px, 12.2vw, 205px);
            font-weight: 400;
            line-height: 0.82;
            letter-spacing: 0.005em;
            text-transform: uppercase;
            color: #080808;
            text-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);
          }

          .canvas-subtitle {
            margin: 0 auto;
            max-width: 650px;
            font-family: "Patrick Hand", "Inter", sans-serif;
            font-size: clamp(28px, 2.45vw, 38px);
            font-weight: 700;
            line-height: 1.12;
            letter-spacing: 0.02em;
          }

          .canvas-underline {
            position: relative;
            display: inline-block;
          }

          .canvas-underline::after {
            content: "";
            position: absolute;
            left: -4px;
            right: -4px;
            bottom: 1px;
            z-index: -1;
            height: 5px;
            border-radius: 999px;
            background: var(--blue);
            transform: rotate(-2deg);
          }

          .canvas-actions {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 34px;
            margin-top: 38px;
          }

          .canvas-primary-btn,
          .canvas-secondary-btn {
            height: 62px;
            min-width: 224px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 18px;
            border-radius: 4px;
            font-family: "Patrick Hand", "Inter", sans-serif;
            font-size: 22px;
            font-weight: 700;
            letter-spacing: 0.03em;
            text-transform: uppercase;
          }

          .canvas-primary-btn {
            background: var(--blue);
            color: white;
            box-shadow: 0 4px 0 rgba(0, 0, 0, 0.05);
          }

          .canvas-secondary-btn {
            border: 2px solid #070707;
            background: white;
            color: #070707;
          }

          .canvas-floating-note {
            position: absolute;
            z-index: 4;
            display: flex;
            align-items: center;
            gap: 16px;
            min-height: 90px;
            padding: 22px 28px;
            color: #050505;
            font-family: "Patrick Hand", "Inter", sans-serif;
            font-size: 24px;
            font-weight: 700;
            line-height: 1.05;
            box-shadow: 0 8px 18px rgba(15, 23, 42, 0.08);
          }

          .canvas-floating-note svg {
            width: 42px;
            height: 42px;
            stroke-width: 2.4;
            flex: 0 0 auto;
          }

          .canvas-tape {
            position: absolute;
            top: -14px;
            left: 42%;
            width: 76px;
            height: 23px;
            background: rgba(90, 95, 105, 0.28);
            transform: rotate(5deg);
          }

          .note-green {
            left: 132px;
            top: 118px;
            width: 246px;
            background: #a8efcf;
            transform: rotate(-10deg);
          }

          .note-yellow {
            left: 205px;
            top: 480px;
            width: 215px;
            height: 145px;
            background: #ffef9d;
            transform: rotate(7deg);
          }

          .note-orange {
            right: 130px;
            top: 82px;
            width: 238px;
            background: #ffc4a6;
            transform: rotate(5deg);
          }

          .note-cyan {
            right: 92px;
            top: 380px;
            width: 228px;
            background: #bcecff;
            transform: rotate(7deg);
          }

          .note-pink {
            right: 150px;
            top: 610px;
            min-height: 90px;
            width: 295px;
            border-radius: 999px;
            background: #f4a6cd;
            transform: rotate(7deg);
          }

          .cursor-blue,
          .cursor-purple {
            position: absolute;
            z-index: 6;
            width: 64px;
            height: 64px;
            filter: drop-shadow(0 4px 0 rgba(0, 0, 0, 0.16));
          }

          .cursor-blue {
            left: 360px;
            top: 218px;
            color: var(--blue);
            transform: rotate(-12deg);
          }

          .cursor-purple {
            right: 43px;
            top: 500px;
            color: #aa71ff;
            transform: rotate(-12deg);
          }

          .cursor-blue svg,
          .cursor-purple svg {
            width: 100%;
            height: 100%;
          }

          .canvas-toolbar {
            position: absolute;
            z-index: 7;
            left: 74px;
            top: 360px;
            width: 72px;
            padding: 14px 0;
            border: 1px solid #dcdcdc;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0 10px 24px rgba(15, 23, 42, 0.12);
            backdrop-filter: blur(12px);
          }

          .canvas-tool {
            width: 42px;
            height: 42px;
            margin: 0 auto 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #060606;
            font-family: "Patrick Hand", "Inter", sans-serif;
            font-size: 29px;
            font-weight: 700;
          }

          .canvas-tool:last-child {
            margin-bottom: 0;
          }

          .canvas-tool.active {
            border-radius: 5px;
            background: var(--blue);
            color: #fff;
          }

          .canvas-tool svg {
            width: 25px;
            height: 25px;
            stroke-width: 2.3;
          }

          .canvas-doodle {
            position: absolute;
            z-index: 3;
            pointer-events: none;
          }

          .doodle-arrow-left {
            left: 260px;
            top: 235px;
            width: 120px;
            height: 120px;
          }

          .doodle-arrow-right {
            right: 58px;
            top: 160px;
            width: 155px;
            height: 155px;
          }

          .doodle-loop {
            left: 388px;
            top: 615px;
            width: 112px;
            height: 112px;
          }

          .doodle-pop-blue {
            right: 508px;
            top: 405px;
            width: 58px;
            height: 58px;
          }

          .doodle-triangle {
            right: 220px;
            top: 590px;
            width: 62px;
            height: 62px;
          }

          .canvas-feature-bar {
            position: relative;
            z-index: 8;
            max-width: 1640px;
            margin: 60px auto 0;
            padding: 36px 38px;
            border: 1px solid #e0e0e0;
            border-radius: 22px;
            background: rgba(255, 255, 255, 0.92);
            box-shadow: 0 14px 38px rgba(15, 23, 42, 0.08);
            backdrop-filter: blur(14px);
          }

          .canvas-feature-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            align-items: center;
          }

          .canvas-feature {
            min-height: 74px;
            display: flex;
            gap: 18px;
            align-items: center;
            padding: 0 30px;
            border-right: 1px solid #d9d9d9;
          }

          .canvas-feature:first-child {
            padding-left: 0;
          }

          .canvas-feature:last-child {
            padding-right: 0;
            border-right: 0;
          }

          .canvas-feature svg {
            width: 50px;
            height: 50px;
            stroke-width: 2.1;
            flex: 0 0 auto;
          }

          .canvas-feature h3 {
            margin: 0 0 6px;
            font-size: 18px;
            line-height: 1;
            font-weight: 800;
          }

          .canvas-feature p {
            margin: 0;
            color: #334155;
            font-size: 15px;
            font-weight: 600;
            line-height: 1.4;
          }

          .stroke-blue {
            color: var(--blue);
          }

          .stroke-green {
            color: #14b981;
          }

          .stroke-yellow {
            color: #f6c800;
          }

          .stroke-purple {
            color: #8b5cf6;
          }

          @media (max-width: 1280px) {
            .canvas-menu a {
              min-width: auto;
              padding: 0 16px;
              font-size: 18px;
            }

            .canvas-stage {
              padding-left: 26px;
              padding-right: 26px;
            }

            .note-green {
              left: 70px;
            }

            .note-yellow {
              left: 120px;
            }

            .note-orange {
              right: 60px;
            }

            .note-cyan {
              right: 48px;
            }

            .note-pink {
              right: 78px;
            }

            .canvas-toolbar {
              left: 35px;
            }

            .cursor-blue {
              left: 285px;
            }
          }

          @media (max-width: 1024px) {
            .canvas-nav {
              height: 78px;
            }

            .canvas-menu,
            .canvas-nav-right {
              display: none;
            }

            .canvas-logo-wrap {
              width: 90px;
            }

            .canvas-mobile-menu {
              display: flex;
              align-self: center;
            }

            .canvas-stage {
              min-height: calc(100vh - 78px);
              padding-top: 70px;
            }

            .canvas-floating-note,
            .canvas-toolbar,
            .cursor-blue,
            .cursor-purple,
            .canvas-doodle {
              opacity: 0.55;
            }

            .note-green,
            .note-orange,
            .note-yellow,
            .note-cyan,
            .note-pink {
              transform: scale(0.78) rotate(var(--r, 0deg));
            }

            .note-green {
              --r: -10deg;
              left: 10px;
              top: 118px;
            }

            .note-orange {
              --r: 5deg;
              right: 0;
              top: 100px;
            }

            .note-yellow {
              display: none;
            }

            .note-cyan {
              display: none;
            }

            .note-pink {
              display: none;
            }

            .canvas-feature-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
            }

            .canvas-feature,
            .canvas-feature:first-child,
            .canvas-feature:last-child {
              padding: 0;
              border-right: 0;
            }
          }

          @media (max-width: 720px) {
            .canvas-stage {
              padding: 54px 18px 30px;
            }

            .canvas-eyebrow-wrap {
              margin-bottom: 24px;
            }

            .canvas-select-box {
              padding: 16px 16px 20px;
            }

            .canvas-actions {
              flex-direction: column;
              gap: 14px;
            }

            .canvas-primary-btn,
            .canvas-secondary-btn {
              width: 100%;
              min-width: 0;
            }

            .canvas-floating-note,
            .canvas-toolbar,
            .cursor-blue,
            .cursor-purple,
            .canvas-doodle {
              display: none;
            }

            .canvas-feature-bar {
              margin-top: 44px;
              padding: 28px 22px;
            }

            .canvas-feature-grid {
              grid-template-columns: 1fr;
            }

            .canvas-feature {
              padding-bottom: 22px;
              border-bottom: 1px solid #e8e8e8;
            }

            .canvas-feature:last-child {
              padding-bottom: 0;
              border-bottom: 0;
            }
          }

          /* =========================================================
             FULL SCREEN HERO FIX
             Keeps the hero exactly one screen tall so the next section
             does not appear on first load.
             ========================================================= */

          .canvas-hero {
            min-height: 100svh !important;
            height: 100svh !important;
            max-height: 100svh !important;
            overflow: hidden !important;
          }

          .canvas-nav {
            flex: 0 0 96px;
          }

          .canvas-stage {
            height: calc(100svh - 96px) !important;
            min-height: 0 !important;
            max-height: calc(100svh - 96px) !important;
            box-sizing: border-box;
            padding-top: clamp(42px, 6vh, 72px) !important;
            padding-bottom: clamp(28px, 4vh, 48px) !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .canvas-center {
            transform: translateY(-1.5vh);
          }

          /* Keep stickers inside the first screen */
          .note-green {
            top: clamp(86px, 14vh, 135px) !important;
          }

          .note-orange {
            top: clamp(78px, 13vh, 125px) !important;
          }

          .note-cyan {
            top: clamp(315px, 43vh, 385px) !important;
          }

          .note-yellow {
            top: clamp(455px, 62vh, 545px) !important;
          }

          .note-pink {
            top: clamp(520px, 70vh, 610px) !important;
            border-radius: 0 !important;
          }

          .canvas-toolbar {
            top: 50% !important;
            transform: translateY(-28%) !important;
          }

          /* Make sure the hero content does not push the next section into view */
          .canvas-actions {
            margin-bottom: 0 !important;
          }

          @media (max-width: 1024px) {
            .canvas-nav {
              flex-basis: 78px;
            }

            .canvas-stage {
              height: calc(100svh - 78px) !important;
              max-height: calc(100svh - 78px) !important;
              padding-top: clamp(42px, 6vh, 64px) !important;
              padding-bottom: 34px !important;
            }

            .canvas-center {
              transform: translateY(-1vh);
            }
          }

          @media (max-width: 720px) {
            .canvas-hero {
              height: auto !important;
              min-height: 100svh !important;
              max-height: none !important;
              overflow: hidden !important;
            }

            .canvas-stage {
              height: auto !important;
              min-height: calc(100svh - 76px) !important;
              max-height: none !important;
              padding-top: 52px !important;
              padding-bottom: 42px !important;
            }
          }

          /* =========================================================
             SIDE MENU TOOLTIP FIX
             Tooltips stay vertically centered on each icon even when
             the toolbar or viewport resizes.
             ========================================================= */

          .canvas-toolbar {
            top: 50% !important;
            transform: translateY(-50%) !important;
            overflow: visible !important;
          }

          .canvas-tool {
            position: relative !important;
            cursor: pointer;
          }

          .canvas-tool::after {
            content: attr(data-tooltip);
            position: absolute;
            left: calc(100% + 18px);
            top: 50%;
            transform: translate(10px, -50%);
            z-index: 80;
            padding: 8px 12px;
            border: 1px solid rgba(5, 5, 5, 0.12);
            border-radius: 10px;
            background: #050505;
            color: #ffffff;
            font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            font-size: 12px;
            font-weight: 700;
            line-height: 1;
            letter-spacing: 0.02em;
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            box-shadow: 0 12px 26px rgba(15, 23, 42, 0.18);
            transition:
              opacity 0.2s ease,
              visibility 0.2s ease,
              transform 0.2s ease;
          }

          .canvas-tool::before {
            content: "";
            position: absolute;
            left: calc(100% + 10px);
            top: 50%;
            transform: translateY(-50%) rotate(45deg);
            z-index: 81;
            width: 9px;
            height: 9px;
            background: #050505;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transition:
              opacity 0.2s ease,
              visibility 0.2s ease;
          }

          .canvas-tool:hover::after,
          .canvas-tool:focus-visible::after {
            opacity: 1;
            visibility: visible;
            transform: translate(0, -50%);
          }

          .canvas-tool:hover::before,
          .canvas-tool:focus-visible::before {
            opacity: 1;
            visibility: visible;
          }

          @media (max-width: 1100px) {
            .canvas-toolbar {
              top: 50% !important;
              transform: translateY(-50%) !important;
            }

            .canvas-tool::after {
              left: calc(100% + 14px);
            }

            .canvas-tool::before {
              left: calc(100% + 7px);
            }
          }

          @media (max-width: 720px) {

            .canvas-tool::after,
            .canvas-tool::before {
              display: none;
            }
          }



          /* =========================================================
             BIGGER HERO TITLE + FULL SECTION REBALANCE
             Keeps the title larger, stickers spaced out, and tooltips
             perfectly vertically centered during resize.
             ========================================================= */

          .canvas-center {
            max-width: 1120px !important;
            width: min(100%, 1120px) !important;
            transform: translateY(-1.8vh) !important;
          }

          .canvas-eyebrow-wrap {
            margin-bottom: clamp(18px, 2.4vh, 28px) !important;
          }

          .canvas-select-box {
            width: min(100%, 1080px) !important;
            max-width: 1080px !important;
            margin: 0 auto clamp(22px, 3vh, 30px) !important;
            padding: clamp(16px, 2vh, 22px) clamp(34px, 4vw, 52px) clamp(20px, 2.6vh, 28px) !important;
            overflow: visible !important;
          }

          .canvas-title {
            font-size: clamp(118px, 13.6vw, 238px) !important;
            line-height: 0.82 !important;
            letter-spacing: 0.004em !important;
          }

          .canvas-subtitle {
            max-width: 660px !important;
            font-size: clamp(28px, 2.45vw, 38px) !important;
            line-height: 1.1 !important;
          }

          .canvas-actions {
            margin-top: clamp(28px, 4vh, 38px) !important;
          }

          /* Fix animated border lines without needing Tailwind utility classes */
          .canvas-select-box>div:nth-of-type(1) {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            height: 3px !important;
            background: var(--blue) !important;
            z-index: 0 !important;
            pointer-events: none !important;
          }

          .canvas-select-box>div:nth-of-type(2) {
            position: absolute !important;
            top: 0 !important;
            right: 0 !important;
            width: 3px !important;
            background: var(--blue) !important;
            z-index: 0 !important;
            pointer-events: none !important;
          }

          .canvas-select-box>div:nth-of-type(3) {
            position: absolute !important;
            right: 0 !important;
            bottom: 0 !important;
            height: 3px !important;
            background: var(--blue) !important;
            z-index: 0 !important;
            pointer-events: none !important;
          }

          .canvas-select-box>div:nth-of-type(4) {
            position: absolute !important;
            bottom: 0 !important;
            left: 0 !important;
            width: 3px !important;
            background: var(--blue) !important;
            z-index: 0 !important;
            pointer-events: none !important;
          }

          /* More breathing room around the larger title */
          .canvas-floating-note {
            min-height: 86px !important;
            padding: 18px 24px !important;
            gap: 14px !important;
            font-size: 22px !important;
            line-height: 1.05 !important;
          }

          .canvas-floating-note svg {
            width: 38px !important;
            height: 38px !important;
          }

          .canvas-tape {
            width: 68px !important;
            height: 20px !important;
            top: -12px !important;
          }

          .note-green {
            left: clamp(46px, 5.5vw, 110px) !important;
            top: clamp(82px, 12vh, 128px) !important;
            width: 248px !important;
            transform: rotate(-5deg) !important;
          }

          .note-orange {
            right: clamp(46px, 5.5vw, 110px) !important;
            top: clamp(82px, 12vh, 128px) !important;
            width: 242px !important;
            transform: rotate(3deg) !important;
          }

          .note-cyan {
            right: clamp(26px, 3.8vw, 78px) !important;
            top: clamp(315px, 42vh, 390px) !important;
            width: 228px !important;
            transform: rotate(-3deg) !important;
          }

          .note-yellow {
            left: clamp(46px, 5.5vw, 112px) !important;
            top: clamp(470px, 63vh, 560px) !important;
            width: 224px !important;
            height: 122px !important;
            transform: rotate(5deg) !important;
          }

          .note-pink {
            right: clamp(55px, 6vw, 125px) !important;
            top: clamp(540px, 71vh, 628px) !important;
            width: 252px !important;
            min-height: 90px !important;
            border-radius: 0 !important;
            transform: rotate(4deg) !important;
          }

          .doodle-arrow-left {
            left: clamp(175px, 13vw, 245px) !important;
            top: clamp(215px, 30vh, 275px) !important;
            width: 104px !important;
            height: 104px !important;
          }

          .doodle-arrow-right {
            right: clamp(18px, 2.5vw, 48px) !important;
            top: clamp(205px, 28vh, 260px) !important;
            width: 124px !important;
            height: 124px !important;
          }

          /* Keep side menu and tooltip vertically centered at every size */
          .canvas-toolbar {
            top: 50% !important;
            transform: translateY(-50%) !important;
            overflow: visible !important;
          }

          .canvas-tool {
            position: relative !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .canvas-tool::after {
            top: 50% !important;
            left: calc(100% + 18px) !important;
            transform: translate(10px, -50%) !important;
            font-size: 15px !important;
            padding: 10px 13px !important;
            line-height: 1 !important;
          }

          .canvas-tool:hover::after,
          .canvas-tool:focus-visible::after {
            transform: translate(0, -50%) !important;
          }

          .canvas-tool::before {
            top: 50% !important;
            left: calc(100% + 10px) !important;
            transform: translateY(-50%) rotate(45deg) !important;
          }

          @media (max-width: 1320px) {
            .canvas-title {
              font-size: clamp(110px, 13vw, 200px) !important;
            }

            .canvas-select-box {
              width: min(100%, 940px) !important;
            }

            .note-green,
            .note-orange,
            .note-cyan,
            .note-yellow,
            .note-pink {
              opacity: 0.78 !important;
            }
          }

          @media (max-width: 1100px) {
            .canvas-title {
              font-size: clamp(96px, 17vw, 164px) !important;
            }

            .canvas-select-box {
              width: min(100%, 820px) !important;
            }

            .note-green {
              left: 18px !important;
              top: 116px !important;
            }

            .note-orange {
              right: 18px !important;
              top: 116px !important;
            }

            .note-yellow,
            .note-cyan,
            .note-pink {
              display: none !important;
            }
          }

          @media (max-width: 720px) {
            .canvas-title {
              font-size: clamp(84px, 25vw, 132px) !important;
            }

            .canvas-select-box {
              width: 100% !important;
              padding: 16px 16px 20px !important;
            }

            .canvas-center {
              transform: none !important;
            }
          }
        </style>
<header className="canvas-nav">
<div className="canvas-nav-left">
<a aria-label="Canvas Home" className="canvas-logo-wrap" href="#">
<span className="canvas-logo">C</span>
</a>
<nav aria-label="Main navigation" className="canvas-menu">
<a className="is-active" href="#">
<svg aria-hidden="true" className="" fill="currentColor" stroke="currentColor" viewbox="0 0 24 24">
<path className="" d="M12 3 3 10.8V21h6v-6h6v6h6V10.8L12 3Z"></path>
</svg>
                Home
              </a>
<a className="" href="#">
<svg aria-hidden="true" className="" fill="currentColor" stroke="currentColor" viewbox="0 0 24 24">
<circle cx="7" cy="7" r="3"></circle>
<circle cx="17" cy="7" r="3"></circle>
<circle cx="7" cy="17" r="3"></circle>
<circle cx="17" cy="17" r="3"></circle>
</svg>
                Features
              </a>
<a className="" href="#">
<svg aria-hidden="true" className="" fill="currentColor" stroke="currentColor" viewbox="0 0 24 24">
<rect className="" height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
</svg>
                Templates
              </a>
<a className="" href="#">
<svg aria-hidden="true" className="" fill="currentColor" stroke="currentColor" viewbox="0 0 24 24">
<circle className="" cx="9" cy="8" r="4"></circle>
<path className="" d="M2 21c0-4 3-7 7-7s7 3 7 7Z"></path>
<path d="M17 11a4 4 0 0 0 0-7"></path>
<path d="M17 14c3 1 5 3 5 7"></path>
</svg>
                Use cases
              </a>
<a className="" href="#">
<svg aria-hidden="true" className="" fill="currentColor" stroke="currentColor" viewbox="0 0 24 24">
<path className="" d="M20.5 13.5 13.5 20.5a2 2 0 0 1-2.8 0L3 12.8V3h9.8l7.7 7.7a2 2 0 0 1 0 2.8Z"></path>
<circle cx="7.5" cy="7.5" fill="#fff" r="1.2"></circle>
</svg>
                Pricing
              </a>
<a className="" href="#">
<svg aria-hidden="true" fill="currentColor" stroke="currentColor" viewbox="0 0 24 24">
<rect height="14" rx="2" width="18" x="3" y="5"></rect>
<path d="M4 7 12 13l8-6" fill="none" stroke="#fff" strokeWidth="2"></path>
</svg>
                Contact
              </a>
</nav>
</div>
<div className="canvas-nav-right">
<a className="canvas-login" href="#">Log in</a>
<a className="canvas-top-cta" href="#">Start for free</a>
</div>
<button aria-label="Open menu" className="canvas-mobile-menu">
<svg fill="none" height="26" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="26">
<path d="M4 6h16M4 12h16M4 18h16"></path>
</svg>
</button>
</header>
<main className="canvas-stage">
<style className="">
            @keyframes drawBorderTop {

              0%,
              10% {
                width: 0%;
                opacity: 0;
              }

              10.1% {
                opacity: 1;
                width: 0%;
              }

              17.5%,
              80% {
                width: 100%;
                opacity: 1;
              }

              85%,
              100% {
                opacity: 0;
                width: 100%;
              }
            }

            @keyframes drawBorderRight {

              0%,
              17.5% {
                height: 0%;
                opacity: 0;
              }

              17.6% {
                opacity: 1;
                height: 0%;
              }

              25%,
              80% {
                height: 100%;
                opacity: 1;
              }

              85%,
              100% {
                opacity: 0;
                height: 100%;
              }
            }

            @keyframes drawBorderBottom {

              0%,
              25% {
                width: 0%;
                opacity: 0;
              }

              25.1% {
                opacity: 1;
                width: 0%;
              }

              32.5%,
              80% {
                width: 100%;
                opacity: 1;
              }

              85%,
              100% {
                opacity: 0;
                width: 100%;
              }
            }

            @keyframes drawBorderLeft {

              0%,
              32.5% {
                height: 0%;
                opacity: 0;
              }

              32.6% {
                opacity: 1;
                height: 0%;
              }

              40%,
              80% {
                height: 100%;
                opacity: 1;
              }

              85%,
              100% {
                opacity: 0;
                height: 100%;
              }
            }

            @keyframes cursorFollow {

              0%,
              5% {
                opacity: 0;
                left: 0%;
                top: 0%;
                transform: translate(-4px, -4px) scale(1);
              }

              10% {
                opacity: 1;
                left: 0%;
                top: 0%;
                transform: translate(-4px, -4px) scale(1);
              }

              17.5% {
                left: 100%;
                top: 0%;
                transform: translate(-4px, -4px) scale(1);
              }

              25% {
                left: 100%;
                top: 100%;
                transform: translate(-4px, -4px) scale(1);
              }

              32.5% {
                left: 0%;
                top: 100%;
                transform: translate(-4px, -4px) scale(1);
              }

              40%,
              44% {
                left: 0%;
                top: 0%;
                transform: translate(-4px, -4px) scale(1);
              }

              50%,
              52% {
                left: 100%;
                top: 0%;
                transform: translate(-4px, -4px) scale(1);
              }

              54%,
              66% {
                left: 100%;
                top: 0%;
                transform: translate(-4px, -4px) scale(0.85);
              }

              74% {
                left: 100%;
                top: 0%;
                transform: translate(-4px, -4px) scale(0.85);
                opacity: 1;
              }

              76% {
                left: 100%;
                top: 0%;
                transform: translate(-4px, -4px) scale(1);
                opacity: 1;
              }

              80%,
              100% {
                left: 100%;
                top: 0%;
                transform: translate(-4px, -4px) scale(1);
                opacity: 0;
              }
            }

            @keyframes handlePop {

              0%,
              43% {
                opacity: 0;
                transform: scale(0);
              }

              46%,
              80% {
                opacity: 1;
                transform: scale(1);
              }

              85%,
              100% {
                opacity: 0;
                transform: scale(0);
              }
            }

            @keyframes boxResize {

              0%,
              56% {
                transform: scale(1);
                transform-origin: bottom left;
              }

              66%,
              80% {
                transform: scale(1.08);
                transform-origin: bottom left;
              }

              85%,
              100% {
                transform: scale(1);
                transform-origin: bottom left;
              }
            }
          </style>
<div className="canvas-floating-note note-green">
<span className="canvas-tape"></span>
<svg fill="none" stroke="currentColor" viewbox="0 0 24 24">
<circle cx="8" cy="8" r="3"></circle>
<path d="M2 21c0-4 2.7-7 6-7s6 3 6 7"></path>
<circle cx="17" cy="9" r="2.6"></circle>
<path d="M15 15c3.5.7 5.5 3 5.5 6"></path>
</svg>
<span className="font-medium">
              Real-time
              <br/>
              collaboration
            </span>
</div>
<div className="canvas-floating-note note-orange">
<span className="canvas-tape"></span>
<svg className="" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect className="" height="7" rx="1" width="7" x="3" y="14"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
</svg>
<span className="font-medium">Templates</span>
</div>
<div className="canvas-floating-note note-yellow">
<span className="canvas-tape"></span>
<svg className="" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path className="" d="M6 16c5 0 7-8 12-8a4 4 0 1 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8Z"></path>
</svg>
<span className="font-medium">
              Infinite
              <br/>
              boards
            </span>
</div>
<div className="canvas-floating-note note-cyan">
<span className="canvas-tape"></span>
<svg className="" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<circle cx="8" cy="8" r="3"></circle>
<path d="M2 21c0-4 2.7-7 6-7s6 3 6 7"></path>
<circle cx="17" cy="9" r="2.6"></circle>
<path d="M15 15c3.5.7 5.5 3 5.5 6"></path>
</svg>
<span className="font-medium">
              Built for
              <br/>
              teams
            </span>
</div>
<div className="canvas-floating-note note-pink rounded-none" style={{borderRadius: '0px !important'}}>
<span className="canvas-tape rounded-none" style={{borderRadius: '0px !important'}}></span>
<svg className="" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path className="" d="M3 4h18"></path>
<path className="" d="M20 4v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4"></path>
<path d="m8 21 4-4 4 4"></path>
<rect className="" height="4" width="4" x="8" y="8"></rect>
</svg>
<span className="font-medium">
              Present ideas
              <br/>
              visually
            </span>
</div>
<aside aria-label="Drawing tools" className="canvas-toolbar">
<div className="canvas-tool active" data-tooltip="Select" tabindex="0">
<svg className="" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4.1 4.3c-.3-.1-.6.2-.5.5l6.8 15.8c.2.4.8.4.9-.1l1.7-6.5c.1-.5.5-.8 1-1l6.5-1.6c.5-.1.6-.8.1-1L4.1 4.3Z"></path>
</svg>
</div>
<div className="canvas-tool" data-tooltip="Frame" tabindex="0">
<svg fill="none" stroke="currentColor" viewbox="0 0 24 24">
<rect height="14" rx="1" width="14" x="5" y="5"></rect>
</svg>
</div>
<div className="canvas-tool font-medium" data-tooltip="Text" tabindex="0">
              T
            </div>
<div className="canvas-tool" data-tooltip="Sticky note" tabindex="0">
<svg fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M20 9v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8"></path>
<path d="M14 3v6h6"></path>
</svg>
</div>
<div className="canvas-tool" data-tooltip="Arrow" tabindex="0">
<svg fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 17 17 7"></path>
<path d="M9 7h8v8"></path>
</svg>
</div>
<div className="canvas-tool" data-tooltip="More" tabindex="0">
<svg className="" fill="currentColor" viewbox="0 0 24 24">
<circle cx="5" cy="12" r="1.7"></circle>
<circle cx="12" cy="12" r="1.7"></circle>
<circle cx="19" cy="12" r="1.7"></circle>
</svg>
</div>
</aside>
<svg className="canvas-doodle doodle-arrow-left" fill="none" viewbox="0 0 120 120">
<path d="M27 17c-5 37 17 57 58 66" stroke="#060606" strokeLinecap="round" strokeWidth="3" style={{strokeDashoffset: '0px', strokeDasharray: '98.8758'}}></path>
<path d="M71 63 88 84 58 91" stroke="#060606" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" style={{strokeDashoffset: '0px', strokeDasharray: '57.8244'}}></path>
</svg>
<svg className="canvas-doodle doodle-arrow-right" fill="none" viewbox="0 0 155 155">
<path d="M34 22c58 16 73 65 18 94" stroke="#060606" stroke-dasharray="6 10" strokeLinecap="round" strokeWidth="3" style={{strokeDashoffset: '0px', strokeDasharray: '136.119px, 10px'}}></path>
<path d="M65 122 45 118 59 102" stroke="#060606" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" style={{strokeDashoffset: '0px', strokeDasharray: '41.6564'}}></path>
</svg>
<section className="canvas-center">
<div className="canvas-eyebrow-wrap">
<span className="canvas-eyebrow font-medium">
                Visual collaboration tool
              </span>
</div>
<div className="canvas-select-box relative group" style={{animation: '6s ease-in-out 0s infinite normal none running boxResize', borderColor: 'transparent !important', boxShadow: 'none !important'}}>

<div className="absolute top-0 left-0 h-[2px] bg-[#13a8ff] z-0" style={{animation: 'drawBorderTop 6s infinite ease-in-out'}}></div>
<div className="absolute top-0 right-0 w-[2px] bg-[#13a8ff] z-0" style={{animation: 'drawBorderRight 6s infinite ease-in-out'}}></div>
<div className="absolute bottom-0 right-0 h-[2px] bg-[#13a8ff] z-0" style={{animation: 'drawBorderBottom 6s infinite ease-in-out'}}></div>
<div className="absolute bottom-0 left-0 w-[2px] bg-[#13a8ff] z-0" style={{animation: 'drawBorderLeft 6s infinite ease-in-out'}}></div>
<span className="canvas-handle tl" style={{animation: 'handlePop 6s infinite ease-in-out'}}></span>
<span className="canvas-handle tc" style={{animation: 'handlePop 6s infinite ease-in-out'}}></span>
<span className="canvas-handle tr" style={{animation: 'handlePop 6s infinite ease-in-out'}}></span>
<span className="canvas-handle ml" style={{animation: 'handlePop 6s infinite ease-in-out'}}></span>
<span className="canvas-handle mr" style={{animation: 'handlePop 6s infinite ease-in-out'}}></span>
<span className="canvas-handle bl" style={{animation: 'handlePop 6s infinite ease-in-out'}}></span>
<span className="canvas-handle bc" style={{animation: 'handlePop 6s infinite ease-in-out'}}></span>
<span className="canvas-handle br" style={{animation: 'handlePop 6s infinite ease-in-out'}}></span>
<h1 className="canvas-title font-semibold tracking-tight">Canvas</h1>

<div className="cursor-blue absolute z-[60]" style={{animation: 'cursorFollow 6s infinite ease-in-out', pointerEvents: 'none', color: '#13a8ff'}}>
<svg className="w-6 h-6" fill="currentColor" stroke="#050505" strokeWidth="1.2" viewbox="0 0 24 24">
<path d="M4.1 4.3c-.3-.1-.6.2-.5.5l6.8 15.8c.2.4.8.4.9-.1l1.7-6.5c.1-.5.5-.8 1-1l6.5-1.6c.5-.1.6-.8.1-1L4.1 4.3Z"></path>
</svg>
</div>
</div>
<p className="canvas-subtitle font-medium">
              Brainstorm, design, and organize
              <br/>
              ideas in one
              <span className="canvas-underline">flexible</span>
              workspace.
            </p>
<div className="canvas-actions">
<a className="canvas-primary-btn font-medium" href="#">
                Start for free
                <svg fill="none" height="26" stroke="currentColor" strokeWidth="2.1" viewbox="0 0 24 24" width="26">
<path d="M5 12h14"></path>
<path d="m13 5 7 7-7 7"></path>
</svg>
</a>
<a className="canvas-secondary-btn font-medium" href="#">
                View templates
              </a>
</div>
</section>
</main>
</section>
<section className="canvas-dark-features sm:pt-32 sm:pb-32 bg-[#07111F] pt-32 pb-32 relative overflow-hidden">
<style>
          .canvas-dark-features {
            position: relative;
            isolation: isolate;
            background:
              radial-gradient(circle at 18% 8%, rgba(19, 168, 255, 0.22), transparent 30%),
              radial-gradient(circle at 82% 18%, rgba(244, 166, 205, 0.16), transparent 28%),
              radial-gradient(circle at 50% 110%, rgba(168, 239, 207, 0.12), transparent 32%),
              #07111F !important;
            color: #ffffff;
          }

          .canvas-dark-features::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 0;
            pointer-events: none;
            background-image:
              linear-gradient(to right, rgba(255, 255, 255, 0.055) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.055) 1px, transparent 1px);
            background-size: 48px 48px;
            mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.35));
          }

          .canvas-dark-features::after {
            content: "";
            position: absolute;
            inset: 20px;
            z-index: 0;
            pointer-events: none;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 34px;
          }

          .canvas-dark-features > .relative {
            position: relative;
            z-index: 1;
          }

          .canvas-dark-features .mx-auto.max-w-3xl {
            max-width: 860px;
          }

          .canvas-dark-features .text-sky-500 {
            color: #38bdf8 !important;
          }

          .canvas-dark-features .border-sky-500,
          .canvas-dark-features .bg-sky-500 {
            border-color: #38bdf8 !important;
            background-color: #38bdf8 !important;
          }

          .canvas-dark-features h2 {
            color: #ffffff !important;
            text-shadow: 0 12px 38px rgba(0, 0, 0, 0.32);
          }

          .canvas-dark-features .mx-auto.max-w-3xl > p:last-child {
            color: rgba(255, 255, 255, 0.78) !important;
          }

          .canvas-dark-features > .relative > svg path {
            stroke: rgba(125, 211, 252, 0.58) !important;
          }

          .canvas-dark-features .absolute.bg-pink-200 {
            background: #f4a6cd !important;
            box-shadow: 0 18px 36px rgba(0, 0, 0, 0.22);
            border: 2px solid rgba(5, 5, 5, 0.9);
          }

          .canvas-feature-cards {
            margin-top: 72px !important;
            gap: 24px !important;
          }

          .canvas-feature-cards > article {
            position: relative;
            overflow: hidden;
            border: 2px solid rgba(255, 255, 255, 0.16) !important;
            border-radius: 22px !important;
            background: rgba(255, 255, 255, 0.96) !important;
            box-shadow:
              0 26px 70px rgba(0, 0, 0, 0.30),
              0 0 0 1px rgba(255, 255, 255, 0.07) !important;
            transition:
              transform 0.25s ease,
              box-shadow 0.25s ease,
              border-color 0.25s ease;
          }

          .canvas-feature-cards > article::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 0;
            pointer-events: none;
            background:
              linear-gradient(135deg, rgba(19, 168, 255, 0.08), transparent 42%),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.85), transparent 30%);
          }

          .canvas-feature-cards > article > * {
            position: relative;
            z-index: 1;
          }

          .canvas-feature-cards > article:hover {
            transform: translateY(-6px);
            border-color: rgba(56, 189, 248, 0.42) !important;
            box-shadow:
              0 34px 90px rgba(0, 0, 0, 0.36),
              0 0 0 1px rgba(56, 189, 248, 0.20) !important;
          }

          .canvas-feature-cards h3 {
            color: #050505 !important;
            letter-spacing: -0.02em;
          }

          .canvas-feature-cards p {
            color: #475569 !important;
          }

          .canvas-feature-cards article > div:first-child > div:first-child {
            border-width: 2px !important;
            border-color: rgba(5, 5, 5, 0.12) !important;
            box-shadow: 0 8px 16px rgba(15, 23, 42, 0.08);
          }

          .canvas-feature-cards article [class*="shadow-"] {
            box-shadow: 0 12px 0 rgba(15, 23, 42, 0.045) !important;
          }

          .canvas-dark-features .rounded-lg.border.border-neutral-200.bg-white,
          .canvas-dark-features .relative.mt-5,
          .canvas-dark-features .mt-5.flex.rounded-lg {
            border-color: rgba(15, 23, 42, 0.10) !important;
            background-color: #ffffff !important;
          }

          @media (max-width: 1024px) {
            .canvas-feature-cards {
              margin-top: 56px !important;
            }
          }

          @media (max-width: 640px) {
            .canvas-dark-features {
              padding-top: 88px !important;
              padding-bottom: 88px !important;
            }

            .canvas-feature-cards {
              margin-top: 44px !important;
              gap: 18px !important;
            }

            .canvas-dark-features::after {
              inset: 12px;
              border-radius: 24px;
            }
          }
        </style>
<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<svg className="absolute left-[10%] top-16 hidden h-28 w-28 md:block" fill="none" viewbox="0 0 112 112">
<path d="M78 18C34 12 18 52 50 78" stroke="black" stroke-dasharray="5 8" strokeLinecap="round" strokeWidth="2.1" style={{strokeDashoffset: '0px', strokeDasharray: '97.4004px, 8px'}}></path>
<path d="M49 63L53 82L34 75" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.1" style={{strokeDashoffset: '0px', strokeDasharray: '39.6649'}}></path>
</svg>
<div className="absolute right-[10%] top-20 hidden rotate-8 bg-pink-200 px-8 py-7 shadow-sm md:block">
<div className="absolute -top-3 left-11 h-4 w-12 rotate-8 bg-neutral-400/40"></div>
<i className="h-12 w-12" data-lucide="star"></i>
</div>
<svg className="absolute right-[15%] top-48 hidden h-20 w-20 md:block" fill="none" viewbox="0 0 80 80">
<path d="M60 12C56 35 34 47 14 37" stroke="black" strokeLinecap="round" strokeWidth="2.1" style={{strokeDashoffset: '0px', strokeDasharray: '61.3606'}}></path>
<path d="M24 28L10 36L25 46" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.1" style={{strokeDashoffset: '0px', strokeDasharray: '34.1523'}}></path>
</svg>
<div className="mx-auto max-w-3xl text-center">
<div className="mb-6 flex items-center justify-center gap-3 text-sky-500">
<span className="h-5 w-6 rotate-[-25deg] border-t-2 border-sky-500"></span>
<p className="text-2xl font-semibold uppercase italic tracking-tight">
                Features
              </p>
<span className="h-5 w-6 rotate-[25deg] border-t-2 border-sky-500"></span>
</div>
<h2 className="leading-none sm:text-6xl lg:text-7xl text-5xl font-semibold text-[#ffffff] tracking-tight" style={{fontFamily: '\'Chewy\', cursive'}}>
              Everything you need to
              <br className="hidden sm:block"/>
              turn ideas into action.
            </h2>
<p className="leading-relaxed text-xl font-semibold text-[#ffffff] tracking-tight max-w-3xl mt-7">
              Brainstorm freely, collaborate in real time, use powerful
              templates,
              <br className="hidden md:block"/>
              and present your work with
              <span className="relative inline-block">
                clarity and impact.
                <span className="absolute -bottom-1 left-0 h-1 w-full -rotate-2 rounded-full bg-sky-500"></span>
</span>
</p>
</div>
<div className="canvas-feature-cards grid lg:grid-cols-3 mt-24 gap-x-5 gap-y-5">
<article className="rounded-lg border-2 border-black bg-white/90 p-5 shadow-sm">
<div className="flex gap-5">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-sky-300 bg-sky-100 text-sky-500">
<i className="h-8 w-8" data-lucide="infinity"></i>
</div>
<div className="">
<h3 className="text-2xl font-semibold leading-tight tracking-tight text-black">
                    Infinite whiteboards
                  </h3>
<p className="mt-2 text-base font-semibold leading-snug text-slate-700">
                    Start with a blank canvas and take your ideas anywhere. No
                    limits, no boundaries.
                  </p>
</div>
</div>
<div className="mt-5 flex rounded-lg border border-neutral-200 bg-white p-4 shadow-[0_8px_0_rgba(15,23,42,0.04)]">
<style>
                  @keyframes note-pop-1 {

                    0%,
                    10% {
                      transform: scale(0);
                      opacity: 0;
                    }

                    12% {
                      transform: scale(1.1);
                      opacity: 1;
                    }

                    14%,
                    90% {
                      transform: scale(1);
                      opacity: 1;
                    }

                    95%,
                    100% {
                      transform: scale(0);
                      opacity: 0;
                    }
                  }

                  @keyframes type-text-1 {

                    0%,
                    12% {
                      clip-path: inset(0 100% 0 0);
                    }

                    15%,
                    90% {
                      clip-path: inset(0 0 0 0);
                    }

                    95%,
                    100% {
                      clip-path: inset(0 100% 0 0);
                    }
                  }

                  @keyframes note-pop-2 {

                    0%,
                    29% {
                      transform: scale(0);
                      opacity: 0;
                    }

                    31% {
                      transform: scale(1.1);
                      opacity: 1;
                    }

                    33%,
                    90% {
                      transform: scale(1);
                      opacity: 1;
                    }

                    95%,
                    100% {
                      transform: scale(0);
                      opacity: 0;
                    }
                  }

                  @keyframes type-text-2 {

                    0%,
                    31% {
                      clip-path: inset(0 100% 0 0);
                    }

                    34%,
                    90% {
                      clip-path: inset(0 0 0 0);
                    }

                    95%,
                    100% {
                      clip-path: inset(0 100% 0 0);
                    }
                  }

                  @keyframes note-pop-3 {

                    0%,
                    49% {
                      transform: scale(0);
                      opacity: 0;
                    }

                    51% {
                      transform: scale(1.1);
                      opacity: 1;
                    }

                    53%,
                    90% {
                      transform: scale(1);
                      opacity: 1;
                    }

                    95%,
                    100% {
                      transform: scale(0);
                      opacity: 0;
                    }
                  }

                  @keyframes type-text-3 {

                    0%,
                    51% {
                      clip-path: inset(0 100% 0 0);
                    }

                    54%,
                    90% {
                      clip-path: inset(0 0 0 0);
                    }

                    95%,
                    100% {
                      clip-path: inset(0 100% 0 0);
                    }
                  }

                  @keyframes note-float {

                    0%,
                    100% {
                      transform: translateY(0px);
                    }

                    50% {
                      transform: translateY(-4px);
                    }
                  }

                  @keyframes draw-arrow-1 {

                    0%,
                    16% {
                      stroke-dashoffset: 200;
                      opacity: 0;
                    }

                    17% {
                      opacity: 1;
                      stroke-dashoffset: 200;
                    }

                    21%,
                    90% {
                      stroke-dashoffset: 0;
                      opacity: 1;
                    }

                    95%,
                    100% {
                      stroke-dashoffset: 200;
                      opacity: 0;
                    }
                  }

                  @keyframes draw-arrow-1-head {

                    0%,
                    20% {
                      stroke-dashoffset: 50;
                      opacity: 0;
                    }

                    21% {
                      opacity: 1;
                      stroke-dashoffset: 50;
                    }

                    22%,
                    90% {
                      stroke-dashoffset: 0;
                      opacity: 1;
                    }

                    95%,
                    100% {
                      stroke-dashoffset: 50;
                      opacity: 0;
                    }
                  }

                  @keyframes draw-arrow-2 {

                    0%,
                    35% {
                      stroke-dashoffset: 200;
                      opacity: 0;
                    }

                    36% {
                      opacity: 1;
                      stroke-dashoffset: 200;
                    }

                    40%,
                    90% {
                      stroke-dashoffset: 0;
                      opacity: 1;
                    }

                    95%,
                    100% {
                      stroke-dashoffset: 200;
                      opacity: 0;
                    }
                  }

                  @keyframes draw-arrow-2-head {

                    0%,
                    39% {
                      stroke-dashoffset: 50;
                      opacity: 0;
                    }

                    40% {
                      opacity: 1;
                      stroke-dashoffset: 50;
                    }

                    41%,
                    90% {
                      stroke-dashoffset: 0;
                      opacity: 1;
                    }

                    95%,
                    100% {
                      stroke-dashoffset: 50;
                      opacity: 0;
                    }
                  }

                  @keyframes draw-arrow-3-1 {

                    0%,
                    56% {
                      stroke-dashoffset: 30;
                      opacity: 0;
                    }

                    57% {
                      opacity: 1;
                      stroke-dashoffset: 30;
                    }

                    59%,
                    90% {
                      stroke-dashoffset: 0;
                      opacity: 1;
                    }

                    95%,
                    100% {
                      stroke-dashoffset: 30;
                      opacity: 0;
                    }
                  }

                  @keyframes draw-arrow-3-2 {

                    0%,
                    58% {
                      stroke-dashoffset: 30;
                      opacity: 0;
                    }

                    59% {
                      opacity: 1;
                      stroke-dashoffset: 30;
                    }

                    61%,
                    90% {
                      stroke-dashoffset: 0;
                      opacity: 1;
                    }

                    95%,
                    100% {
                      stroke-dashoffset: 30;
                      opacity: 0;
                    }
                  }

                  @keyframes draw-arrow-3-3 {

                    0%,
                    60% {
                      stroke-dashoffset: 30;
                      opacity: 0;
                    }

                    61% {
                      opacity: 1;
                      stroke-dashoffset: 30;
                    }

                    63%,
                    90% {
                      stroke-dashoffset: 0;
                      opacity: 1;
                    }

                    95%,
                    100% {
                      stroke-dashoffset: 30;
                      opacity: 0;
                    }
                  }

                  @keyframes dot-pop {

                    0%,
                    65% {
                      transform: scale(0);
                      opacity: 0;
                    }

                    67%,
                    90% {
                      transform: scale(1);
                      opacity: 1;
                    }

                    95%,
                    100% {
                      transform: scale(0);
                      opacity: 0;
                    }
                  }

                  @keyframes cursor-move {
                    0% {
                      left: 110%;
                      top: 110%;
                      opacity: 0;
                      transform: scale(1);
                    }

                    5% {
                      left: 110%;
                      top: 110%;
                      opacity: 1;
                      transform: scale(1);
                    }

                    10% {
                      left: 12%;
                      top: 18%;
                      transform: scale(1);
                    }

                    11% {
                      left: 12%;
                      top: 18%;
                      transform: scale(0.8);
                    }

                    12% {
                      left: 12%;
                      top: 18%;
                      transform: scale(1);
                    }

                    16% {
                      left: 30%;
                      top: 25%;
                      transform: scale(1);
                    }

                    22% {
                      left: 55%;
                      top: 30%;
                      transform: scale(1);
                    }

                    28% {
                      left: 45%;
                      top: 40%;
                      transform: scale(1);
                    }

                    29% {
                      left: 45%;
                      top: 40%;
                      transform: scale(0.8);
                    }

                    30% {
                      left: 45%;
                      top: 40%;
                      transform: scale(1);
                    }

                    35% {
                      left: 35%;
                      top: 70%;
                      transform: scale(1);
                    }

                    41% {
                      left: 15%;
                      top: 60%;
                      transform: scale(1);
                    }

                    48% {
                      left: 80%;
                      top: 75%;
                      transform: scale(1);
                    }

                    49% {
                      left: 80%;
                      top: 75%;
                      transform: scale(0.8);
                    }

                    50% {
                      left: 80%;
                      top: 75%;
                      transform: scale(1);
                    }

                    56% {
                      left: 85%;
                      top: 25%;
                      transform: scale(1);
                    }

                    62% {
                      left: 85%;
                      top: 35%;
                      transform: scale(1);
                    }

                    70% {
                      left: 110%;
                      top: 110%;
                      opacity: 1;
                      transform: scale(1);
                    }

                    75%,
                    100% {
                      left: 110%;
                      top: 110%;
                      opacity: 0;
                      transform: scale(1);
                    }
                  }
                </style>
<div className="mr-4 flex flex-col items-center gap-3 rounded-md border border-neutral-200 bg-white p-2 shadow-sm">
<div className="flex h-7 w-7 items-center justify-center rounded bg-sky-500 text-white shadow-sm">
<i className="h-4 w-4" data-lucide="mouse-pointer-2"></i>
</div>
<div className="h-px w-6 bg-neutral-200"></div>
<i className="h-4 w-4" data-lucide="square"></i>
<span className="text-xl font-medium leading-none text-neutral-800">
                    T
                  </span>
<div className="h-4 w-4 bg-yellow-200 shadow-sm"></div>
<i className="h-4 w-4" data-lucide="pencil"></i>
<span className="text-xl font-medium leading-none text-neutral-800">
                    ···
                  </span>
</div>
<div className="relative min-h-44 flex-1 overflow-hidden rounded border border-neutral-200 bg-white [background-image:linear-gradient(to_right,rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.055)_1px,transparent_1px)] [background-size:1.5rem_1.5rem]">
<svg className="absolute z-50 h-5 w-5 origin-top-left drop-shadow-md" fill="black" height="24" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{animation: 'cursor-move 8s ease-in-out infinite'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path>
</svg>
<div className="absolute left-7 top-7 z-10 -rotate-3">
<div className="origin-center" style={{animation: 'note-pop-1 8s infinite'}}>
<div className="bg-emerald-200 px-5 py-4 text-base font-medium text-emerald-950 shadow-[4px_5px_0_rgba(16,185,129,0.18)]" style={{animation: 'note-float 3s ease-in-out infinite'}}>
<div style={{animation: 'type-text-1 8s infinite'}}>
                          New
                          <br/>
                          ideas
                        </div>
</div>
</div>
</div>
<div className="absolute left-[45%] top-14 z-10 -translate-x-1/2 rotate-1">
<div className="origin-center" style={{animation: 'note-pop-2 8s infinite'}}>
<div className="bg-yellow-200 px-5 py-4 text-base font-medium text-yellow-950 shadow-[4px_5px_0_rgba(234,179,8,0.18)]" style={{animation: 'note-float 3.5s ease-in-out infinite 0.5s'}}>
<div style={{animation: 'type-text-2 8s infinite'}}>
                          User
                          <br/>
                          flow
                        </div>
</div>
</div>
</div>
<div className="absolute bottom-6 right-8 z-10 rotate-2">
<div className="origin-center" style={{animation: 'note-pop-3 8s infinite'}}>
<div className="bg-sky-200 px-5 py-4 text-base font-medium text-sky-950 shadow-[4px_5px_0_rgba(14,165,233,0.18)]" style={{animation: 'note-float 4s ease-in-out infinite 1s'}}>
<div style={{animation: 'type-text-3 8s infinite'}}>
                          Next
                          <br/>
                          steps
                        </div>
</div>
</div>
</div>
<div className="absolute bottom-5 left-5 h-2 w-2 rounded-full bg-sky-500" style={{animation: 'dot-pop 8s infinite 0.2s'}}></div>
<div className="absolute right-7 top-6 h-2 w-2 rounded-full bg-yellow-400" style={{animation: 'dot-pop 8s infinite 0.5s'}}></div>
<svg className="absolute left-24 top-4 h-20 w-28" fill="none" viewbox="0 0 112 80">
<path d="M12 28C44 4 84 12 96 44" stroke="black" strokeLinecap="round" strokeWidth="2.25" style={{strokeDasharray: '200', strokeDashoffset: '200', animation: 'draw-arrow-1 8s linear infinite'}}></path>
<path d="M83 36L97 47L101 29" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" style={{strokeDasharray: '50', strokeDashoffset: '50', animation: 'draw-arrow-1-head 8s linear infinite'}}></path>
</svg>
<svg className="absolute bottom-5 left-11 h-20 w-28" fill="none" viewbox="0 0 112 80">
<path d="M88 45C58 68 22 58 13 28" stroke="black" strokeLinecap="round" strokeWidth="2.25" style={{strokeDasharray: '200', strokeDashoffset: '200', animation: 'draw-arrow-2 8s linear infinite'}}></path>
<path d="M26 37L12 26L9 44" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" style={{strokeDasharray: '50', strokeDashoffset: '50', animation: 'draw-arrow-2-head 8s linear infinite'}}></path>
</svg>
<svg className="absolute right-2 top-8 h-16 w-16" fill="none" viewbox="0 0 64 64">
<path d="M42 10L36 24" stroke="black" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '30', strokeDashoffset: '30', animation: 'draw-arrow-3-1 8s linear infinite'}}></path>
<path d="M54 22L42 31" stroke="black" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '30', strokeDashoffset: '30', animation: 'draw-arrow-3-2 8s linear infinite'}}></path>
<path d="M54 42L39 39" stroke="black" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '30', strokeDashoffset: '30', animation: 'draw-arrow-3-3 8s linear infinite'}}></path>
</svg>
</div>
</div>
</article>
<article className="rounded-lg border-2 border-black bg-white/90 p-5 shadow-sm">
<div className="flex gap-5">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-emerald-300 bg-emerald-100 text-emerald-500">
<i className="h-8 w-8" data-lucide="users-round"></i>
</div>
<div className="">
<h3 className="text-2xl font-semibold leading-tight tracking-tight text-black">
                    Real-time collaboration
                  </h3>
<p className="mt-2 text-base font-semibold leading-snug text-slate-700">
                    Work together seamlessly with your team, wherever you are.
                  </p>
</div>
</div>
<div className="relative mt-5 min-h-56 overflow-hidden rounded-lg border border-neutral-200 bg-white [background-image:linear-gradient(to_right,rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.055)_1px,transparent_1px)] [background-size:1.5rem_1.5rem] shadow-[0_8px_0_rgba(15,23,42,0.04)]">
<style>
                  @keyframes floatNames {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-5px); }
                  }
                  @keyframes moveAlex {
                    0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
                    15%, 80% { transform: translate(90px, 50px) rotate(-10deg); }
                  }
                  @keyframes moveSam {
                    0%, 100% { transform: translate(0px, 0px) rotate(-12deg); }
                    15%, 80% { transform: translate(70px, -40px) rotate(5deg); }
                  }
                  @keyframes moveTaylor {
                    0%, 100% { transform: translate(0px, 0px) rotate(12deg); }
                    15%, 80% { transform: translate(-60px, -30px) rotate(-5deg); }
                  }
                  @keyframes drawPathLine {
                    0%, 10% { stroke-dasharray: 300; stroke-dashoffset: 300; opacity: 0; }
                    11% { opacity: 1; }
                    25%, 80% { stroke-dasharray: 300; stroke-dashoffset: 0; opacity: 1; }
                    85%, 100% { stroke-dasharray: 300; stroke-dashoffset: 300; opacity: 0; }
                  }
                  @keyframes circlePop {
                    0%, 18% { opacity: 0; -webkit-clip-path: inset(0 100% 0 0); clip-path: inset(0 100% 0 0); transform: translate(-50%, -50%) rotate(-4deg) scale(0.8); }
                    25%, 80% { opacity: 1; -webkit-clip-path: inset(0 0 0 0); clip-path: inset(0 0 0 0); transform: translate(-50%, -50%) rotate(-4deg) scale(1); }
                    85%, 100% { opacity: 0; -webkit-clip-path: inset(0 100% 0 0); clip-path: inset(0 100% 0 0); transform: translate(-50%, -50%) rotate(-4deg) scale(0.8); }
                  }
                  @keyframes textPopIn {
                    0%, 25% { opacity: 0; transform: scale(0.8); }
                    30%, 80% { opacity: 1; transform: scale(1); }
                    85%, 100% { opacity: 0; transform: scale(0.8); }
                  }
                  @keyframes slideInC1 {
                    0%, 30% { opacity: 0; transform: translateX(20px); }
                    35%, 80% { opacity: 1; transform: translateX(0); }
                    85%, 100% { opacity: 0; transform: translateX(20px); }
                  }
                  @keyframes slideInC2 {
                    0%, 35% { opacity: 0; transform: translateY(20px); }
                    40%, 80% { opacity: 1; transform: translateY(0); }
                    85%, 100% { opacity: 0; transform: translateY(20px); }
                  }
                </style>
<div className="absolute left-8 top-0 rounded-b-md bg-emerald-400 px-5 py-2 text-sm font-normal text-black shadow-sm" style={{animation: 'floatNames 3s ease-in-out infinite'}}>
                  Alex
                </div>
<div className="absolute bottom-8 left-8 rounded-md bg-violet-300 px-5 py-2 text-sm font-normal text-white shadow-sm" style={{animation: 'floatNames 4s ease-in-out infinite 1s'}}>
                  Sam
                </div>
<div className="absolute bottom-5 right-5 rounded-md bg-yellow-300 px-5 py-2 text-sm font-normal text-black shadow-sm" style={{animation: 'floatNames 3.5s ease-in-out infinite 0.5s'}}>
                  Taylor
                </div>
<div className="absolute left-1/2 top-1/2 flex h-28 w-48 -translate-x-1/2 -translate-y-1/2 rotate-[-4deg] items-center justify-center rounded-[50%] border-2 border-sky-500 bg-sky-50 text-center shadow-[0_8px_0_rgba(14,165,233,0.12)] opacity-0" style={{animation: 'circlePop 8s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}>
<p className="text-2xl font-normal leading-tight tracking-tight opacity-0" style={{animation: 'textPopIn 8s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'}}>
                    Let’s build
                    <br/>
                    this!
                  </p>
</div>
<div className="absolute right-8 top-8 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs font-normal shadow-sm opacity-0" style={{animation: 'slideInC1 8s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'}}>
                  Add intro flow?
                </div>
<div className="absolute left-28 bottom-6 rounded-lg border border-sky-200 bg-sky-50 px-3 py-2 text-xs font-normal shadow-sm opacity-0" style={{animation: 'slideInC2 8s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'}}>
                  @Alex approved
                </div>
<svg className="absolute left-24 top-12 h-8 w-8 origin-top-left" fill="#34d399" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{animation: 'moveAlex 8s ease-in-out infinite'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path>
</svg>
<svg className="absolute left-36 bottom-12 h-8 w-8 -rotate-12 origin-top-left" fill="#a78bfa" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{animation: 'moveSam 8s ease-in-out infinite'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path>
</svg>
<svg className="absolute right-24 bottom-14 h-8 w-8 rotate-12 origin-top-left" fill="#facc15" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{animation: 'moveTaylor 8s ease-in-out infinite'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path>
</svg>
<svg className="absolute left-24 top-12 h-14 w-14" fill="none" viewbox="0 0 56 56">
<path className="opacity-0" d="M10 42C8 22 24 10 46 13" stroke="#0ea5e9" strokeLinecap="round" strokeWidth="2" style={{animation: 'drawPathLine 8s ease-in-out infinite'}}></path>
</svg>
<svg className="absolute right-20 top-10 h-20 w-20" fill="none" viewbox="0 0 80 80">
<path className="opacity-0" d="M12 18C36 7 55 13 67 29" stroke="#0ea5e9" strokeLinecap="round" strokeWidth="2" style={{animation: 'drawPathLine 8s ease-in-out infinite 0.2s'}}></path>
</svg>
<svg className="absolute left-1/2 bottom-7 h-16 w-20 -translate-x-1/2" fill="none" viewbox="0 0 80 64">
<path className="opacity-0" d="M14 42C28 56 55 56 66 35" stroke="black" strokeLinecap="round" strokeWidth="2" style={{animation: 'drawPathLine 8s ease-in-out infinite 0.4s'}}></path>
<path className="opacity-0" d="M57 37L67 34L66 45" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{animation: 'drawPathLine 8s ease-in-out infinite 0.4s'}}></path>
</svg>
</div>
</article>
<article className="rounded-lg border-2 border-black bg-white/90 p-5 shadow-sm relative overflow-hidden">
<style>
                @keyframes pillFade1 {
                  0%, 2% { opacity: 0; transform: translateY(10px); }
                  5%, 90% { opacity: 1; transform: translateY(0); }
                  95%, 100% { opacity: 0; transform: translateY(-10px); }
                }
                @keyframes pillFade2 {
                  0%, 4% { opacity: 0; transform: translateY(10px); }
                  7%, 90% { opacity: 1; transform: translateY(0); }
                  95%, 100% { opacity: 0; transform: translateY(-10px); }
                }
                @keyframes pillFade3 {
                  0%, 6% { opacity: 0; transform: translateY(10px); }
                  9%, 90% { opacity: 1; transform: translateY(0); }
                  95%, 100% { opacity: 0; transform: translateY(-10px); }
                }
                @keyframes pillFade4 {
                  0%, 8% { opacity: 0; transform: translateY(10px); }
                  11%, 90% { opacity: 1; transform: translateY(0); }
                  95%, 100% { opacity: 0; transform: translateY(-10px); }
                }
                @keyframes pillFade5 {
                  0%, 10% { opacity: 0; transform: translateY(10px); }
                  13%, 90% { opacity: 1; transform: translateY(0); }
                  95%, 100% { opacity: 0; transform: translateY(-10px); }
                }

                @keyframes allActive {
                  0%, 15% { background-color: #ffffff; color: #171717; border-color: #d4d4d4; }
                  18%, 90% { background-color: #0ea5e9; color: #ffffff; border-color: #0ea5e9; }
                  95%, 100% { background-color: #ffffff; color: #171717; border-color: #d4d4d4; }
                }

                @keyframes cardAnim1 {
                  0%, 20% { opacity: 0; transform: translateY(20px); border-color: #e5e5e5; background-color: #ffffff; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); }
                  23% { opacity: 1; transform: translateY(-5px); border-color: #e5e5e5; background-color: #ffffff; }
                  26%, 33% { opacity: 1; transform: translateY(0); border-color: #e5e5e5; background-color: #ffffff; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); }
                  36%, 46% { opacity: 1; transform: translateY(-6px); border-color: #0ea5e9; background-color: #f0f9ff; box-shadow: 0 0 0 2px rgba(14,165,233,0.2), 0 10px 20px -3px rgba(14,165,233,0.4); }
                  49%, 90% { opacity: 1; transform: translateY(0); border-color: #e5e5e5; background-color: #ffffff; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); }
                  95%, 100% { opacity: 0; transform: translateY(-20px); border-color: #e5e5e5; background-color: #ffffff; }
                }

                @keyframes cardAnim2 {
                  0%, 22% { opacity: 0; transform: translateY(20px); border-color: #e5e5e5; background-color: #ffffff; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); }
                  25% { opacity: 1; transform: translateY(-5px); border-color: #e5e5e5; background-color: #ffffff; }
                  28%, 46% { opacity: 1; transform: translateY(0); border-color: #e5e5e5; background-color: #ffffff; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); }
                  49%, 59% { opacity: 1; transform: translateY(-6px); border-color: #a3a3a3; background-color: #fafafa; box-shadow: 0 10px 20px -3px rgba(0,0,0,0.15); }
                  62%, 90% { opacity: 1; transform: translateY(0); border-color: #e5e5e5; background-color: #ffffff; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); }
                  95%, 100% { opacity: 0; transform: translateY(-20px); border-color: #e5e5e5; background-color: #ffffff; }
                }

                @keyframes cardAnim3 {
                  0%, 24% { opacity: 0; transform: translateY(20px); border-color: #e5e5e5; background-color: #ffffff; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); }
                  27% { opacity: 1; transform: translateY(-5px); border-color: #e5e5e5; background-color: #ffffff; }
                  30%, 59% { opacity: 1; transform: translateY(0); border-color: #e5e5e5; background-color: #ffffff; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); }
                  62%, 72% { opacity: 1; transform: translateY(-6px); border-color: #a3a3a3; background-color: #fafafa; box-shadow: 0 10px 20px -3px rgba(0,0,0,0.15); }
                  75%, 90% { opacity: 1; transform: translateY(0); border-color: #e5e5e5; background-color: #ffffff; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); }
                  95%, 100% { opacity: 0; transform: translateY(-20px); border-color: #e5e5e5; background-color: #ffffff; }
                }

                @keyframes cardAnim4 {
                  0%, 26% { opacity: 0; transform: translateY(20px); border-color: #e5e5e5; background-color: #ffffff; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); }
                  29% { opacity: 1; transform: translateY(-5px); border-color: #e5e5e5; background-color: #ffffff; }
                  32%, 72% { opacity: 1; transform: translateY(0); border-color: #e5e5e5; background-color: #ffffff; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); }
                  75%, 85% { opacity: 1; transform: translateY(-6px); border-color: #a3a3a3; background-color: #fafafa; box-shadow: 0 10px 20px -3px rgba(0,0,0,0.15); }
                  88%, 90% { opacity: 1; transform: translateY(0); border-color: #e5e5e5; background-color: #ffffff; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); }
                  95%, 100% { opacity: 0; transform: translateY(-20px); border-color: #e5e5e5; background-color: #ffffff; }
                }
              </style>
<div className="flex gap-5">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-violet-300 bg-violet-100 text-violet-600">
<i className="h-8 w-8" data-lucide="layout-grid"></i>
</div>
<div className="">
<h3 className="text-2xl font-medium leading-tight tracking-tight text-neutral-900">
                    Ready-made templates
                  </h3>
<p className="mt-2 text-base font-medium leading-snug text-neutral-800">
                    Jumpstart your projects with professionally designed
                    templates for any use case.
                  </p>
</div>
</div>
<div className="mt-6 flex flex-wrap gap-2.5">
<span className="opacity-0 rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-medium text-neutral-900 shadow-sm" style={{animation: 'pillFade1 12s infinite ease-out, allActive 12s infinite ease-out'}}>
                  All
                </span>
<span className="opacity-0 rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-medium text-neutral-900 shadow-sm" style={{animation: 'pillFade2 12s infinite ease-out'}}>
                  Brainstorming
                </span>
<span className="opacity-0 rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-medium text-neutral-900 shadow-sm" style={{animation: 'pillFade3 12s infinite ease-out'}}>
                  Planning
                </span>
<span className="opacity-0 rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-medium text-neutral-900 shadow-sm" style={{animation: 'pillFade4 12s infinite ease-out'}}>
                  Research
                </span>
<span className="opacity-0 rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-medium text-neutral-900 shadow-sm" style={{animation: 'pillFade5 12s infinite ease-out'}}>
                  Design
                </span>
</div>
<div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">

<div className="opacity-0 rounded-lg border-2 border-neutral-200 bg-white p-2 text-center shadow-sm" style={{animation: 'cardAnim1 12s infinite ease-in-out'}}>
<div className="relative mx-auto h-14 overflow-hidden rounded-md border border-sky-200 bg-white [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:12px_12px]">
<div className="absolute left-3 top-3 h-3 w-4 border border-black bg-white"></div>
<div className="absolute right-3 top-3 h-3 w-4 border border-black bg-white"></div>
<div className="absolute bottom-3 left-1/2 h-3 w-4 -translate-x-1/2 border border-black bg-white"></div>
<svg className="absolute inset-0 h-full w-full" fill="none" viewbox="0 0 96 64">
<path d="M35 22H61" stroke="black" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M48 37V28" stroke="black" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<p className="mt-2 truncate text-xs font-medium leading-tight text-neutral-900">
                    Brainstorming
                  </p>
</div>

<div className="opacity-0 rounded-lg border-2 border-neutral-200 bg-white p-2 text-center shadow-sm" style={{animation: 'cardAnim2 12s infinite ease-in-out'}}>
<div className="relative mx-auto h-14 overflow-hidden rounded-md border border-neutral-200 bg-white p-2">
<div className="space-y-1.5">
<div className="flex items-center gap-1.5">
<span className="h-2.5 w-2.5 border border-black bg-white"></span>
<span className="h-px flex-1 bg-black"></span>
</div>
<div className="flex items-center gap-1.5">
<span className="h-2.5 w-2.5 border border-black bg-yellow-100"></span>
<span className="h-px flex-1 bg-black"></span>
</div>
<div className="flex items-center gap-1.5">
<span className="h-2.5 w-2.5 border border-black bg-emerald-100"></span>
<span className="h-px flex-1 bg-black"></span>
</div>
</div>
</div>
<p className="mt-2 text-xs font-medium leading-tight text-neutral-900">
                    Project
                    <br/>
                    planning
                  </p>
</div>

<div className="opacity-0 rounded-lg border-2 border-neutral-200 bg-white p-2 text-center shadow-sm" style={{animation: 'cardAnim3 12s infinite ease-in-out'}}>
<div className="relative mx-auto h-14 overflow-hidden rounded-md border border-neutral-200 bg-white">
<div className="absolute left-3 top-3 h-6 w-6 rounded-full border border-black bg-rose-100"></div>
<div className="absolute right-2.5 top-3 h-4 w-7 border border-black bg-white"></div>
<div className="absolute right-4 top-5 h-px w-3 bg-black"></div>
<div className="absolute bottom-4 left-3 h-px w-10 bg-black"></div>
<div className="absolute bottom-2.5 left-3 h-px w-14 bg-black"></div>
</div>
<p className="mt-2 text-xs font-medium leading-tight text-neutral-900">
                    User
                    <br/>
                    research
                  </p>
</div>

<div className="opacity-0 rounded-lg border-2 border-neutral-200 bg-white p-2 text-center shadow-sm" style={{animation: 'cardAnim4 12s infinite ease-in-out'}}>
<div className="relative mx-auto h-14 overflow-hidden rounded-md border border-neutral-200 bg-white">
<svg className="absolute inset-0 h-full w-full" fill="none" viewbox="0 0 96 64">
<path d="M14 42L30 28L45 37L61 20L78 31" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
<circle cx="30" cy="28" fill="#60a5fa" r="3" stroke="black"></circle>
<circle cx="61" cy="20" fill="#facc15" r="3" stroke="black"></circle>
</svg>
</div>
<p className="mt-2 text-xs font-medium leading-tight text-neutral-900">
                    Design
                    <br/>
                    sprint
                  </p>
</div>
</div>
</article>
<article className="rounded-lg border-2 border-black bg-white/90 p-5 shadow-sm">
<div className="flex gap-5">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-pink-300 bg-pink-100 text-rose-500">
<i className="h-8 w-8" data-lucide="presentation"></i>
</div>
<div className="">
<h3 className="text-xl font-semibold leading-tight tracking-tight text-black">
                    Present ideas beautifully
                  </h3>
<p className="mt-2 text-sm font-semibold leading-snug text-slate-700">
                    Turn your boards into stunning presentations with one click.
                    Clean, focused, and impactful.
                  </p>
</div>
</div>
<div className="relative mt-5 min-h-36 overflow-hidden rounded-lg border border-neutral-200 bg-white p-4 shadow-[0_6px_0_rgba(244,114,182,0.12)]">
<div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:1.5rem_1.5rem]"></div>
<div className="relative mx-auto h-28 max-w-72">
<div className="absolute left-8 top-4 h-20 w-40 rotate-3 border border-pink-200 bg-pink-100"></div>
<div className="absolute left-3 top-1 h-24 w-44 -rotate-2 border border-neutral-300 bg-white p-3 shadow-sm">
<div className="flex items-center justify-between">
<p className="text-sm font-semibold">Q1 Roadmap</p>
<span className="h-2 w-2 rounded-full bg-rose-300"></span>
</div>
<div className="mt-4 h-2 w-24 bg-pink-300"></div>
<div className="mt-2 h-2 w-32 bg-neutral-200"></div>
<div className="mt-2 h-2 w-20 bg-neutral-200"></div>
<div className="absolute bottom-3 right-3 h-5 w-5 border border-black bg-yellow-100"></div>
</div>
<div className="absolute right-5 top-8 h-20 w-32 rotate-2 border border-neutral-300 bg-white p-3 shadow-sm">
<div className="h-2 w-16 bg-neutral-900"></div>
<div className="mt-3 flex gap-2">
<div className="h-8 w-8 bg-pink-200"></div>
<div className="h-8 w-8 bg-yellow-200"></div>
<div className="h-8 w-8 bg-sky-200"></div>
</div>
</div>
<svg className="absolute right-0 top-1 h-8 w-8 text-orange-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3l1.5 5 5 1.5-5 1.5L12 16l-1.5-5-5-1.5 5-1.5L12 3z"></path>
<path d="M19 15v4"></path>
<path d="M21 17h-4"></path>
</svg>
</div>
</div>
</article>
<article className="rounded-lg border-2 border-black bg-white/90 p-5 shadow-sm">
<div className="flex gap-5">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-sky-300 bg-sky-100 text-sky-500">
<i className="h-8 w-8" data-lucide="message-square"></i>
</div>
<div className="">
<h3 className="text-xl font-semibold leading-tight tracking-tight text-black">
                    Comments and feedback
                  </h3>
<p className="mt-2 text-sm font-semibold leading-snug text-slate-700">
                    Leave comments, mention teammates, and keep feedback in
                    context.
                  </p>
</div>
</div>
<div className="relative mt-5 min-h-36 overflow-hidden rounded-lg border border-neutral-200 bg-white p-4 shadow-[0_6px_0_rgba(14,165,233,0.12)]">
<div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:1.5rem_1.5rem]"></div>
<div className="relative mx-auto h-28 max-w-72">
<div className="absolute left-2 top-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 shadow-sm">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-200 text-xs font-bold">
                        M
                      </div>
<div>
<p className="text-sm font-semibold leading-none">
                          Great point!
                        </p>
<p className="mt-1 text-[10px] font-semibold text-slate-400">
                          2 min ago
                        </p>
</div>
</div>
</div>
<div className="absolute right-2 top-12 rounded-lg border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-semibold leading-snug shadow-sm">
<span className="text-sky-600">@Alex</span>
                    let’s explore
                    <br/>
                    this further.

                    <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-sky-400 text-[10px] font-bold text-white">
                      A
                    </div>
</div>
<div className="absolute left-10 bottom-1 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold shadow-sm">
                    Approved
                  </div>
<svg className="absolute left-3 bottom-4 h-10 w-16" fill="none" viewbox="0 0 64 40">
<path d="M8 28C20 12 38 10 54 20" stroke="black" strokeLinecap="round" strokeWidth="1.8"></path>
<path d="M47 17L55 20L49 27" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
<svg className="absolute right-16 bottom-4 h-7 w-7 rotate-12" fill="#38bdf8" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path>
</svg>
</div>
</div>
</article>
<article className="rounded-lg border-2 border-black bg-white/90 p-5 shadow-sm">
<div className="flex gap-5">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-yellow-300 bg-yellow-100 text-yellow-600">
<i className="h-8 w-8" data-lucide="network"></i>
</div>
<div>
<h3 className="text-xl font-semibold leading-tight tracking-tight text-black">
                    Organize notes and sections
                  </h3>
<p className="mt-2 text-sm font-semibold leading-snug text-slate-700">
                    Keep everything structured with sections, frames, and
                    color-coded sticky notes.
                  </p>
</div>
</div>
<div className="relative mt-5 min-h-36 overflow-hidden rounded-lg border border-neutral-200 bg-white p-4 shadow-[0_6px_0_rgba(234,179,8,0.12)]">
<div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:1.5rem_1.5rem]"></div>
<div className="relative mx-auto h-28 max-w-72">
<div className="absolute left-4 top-2 h-24 w-48 rounded-lg border border-neutral-200 bg-white p-3 shadow-sm">
<div className="flex items-center justify-between">
<h4 className="text-sm font-semibold">Project plan</h4>
<span className="text-xs text-slate-300">×</span>
</div>
<div className="mt-3 space-y-2 text-xs font-semibold">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-sm bg-emerald-400"></span>
<span>Research</span>
</div>
<div className="ml-5 flex items-center gap-2 text-slate-500">
<span className="h-2 w-2 border border-slate-400"></span>
<span>Notes</span>
</div>
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-sm bg-yellow-400"></span>
<span>Ideation</span>
</div>
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-sm bg-sky-400"></span>
<span>Action items</span>
</div>
</div>
</div>
<div className="absolute right-4 top-8 h-16 w-20 rotate-3 bg-yellow-200 p-2 text-xs font-semibold shadow-sm">
                    Priority
                    <br/>
                    tasks
                  </div>
<div className="absolute right-12 bottom-3 h-10 w-16 -rotate-2 bg-emerald-200 p-2 text-[10px] font-semibold shadow-sm">
                    Research
                    <br/>
                    notes
                  </div>
<svg className="absolute right-0 bottom-2 h-12 w-16" fill="none" viewbox="0 0 64 48">
<path d="M12 36C20 20 38 12 52 22" stroke="black" strokeLinecap="round" strokeWidth="1.8"></path>
<path d="M45 19L53 22L47 30" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
<svg className="absolute left-0 bottom-3 h-10 w-14" fill="none" viewbox="0 0 56 40">
<path d="M8 26C18 10 34 9 48 18" stroke="#eab308" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</article>
</div>
</div>
</section>
<section className="cpv-section cpv-product overflow-hidden sm:pt-32 sm:pb-32 bg-white pt-32 pb-32 relative">
<style className="">
          .cpv-section{font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;color:#050505}.cpv-grid-bg{position:absolute;inset:0;opacity:.72;background-image:linear-gradient(to right,rgba(15,23,42,.06) 1px,transparent 1px),linear-gradient(to bottom,rgba(15,23,42,.06) 1px,transparent 1px);background-size:36px 36px}.cpv-wrap{position:relative;z-index:2;max-width:1160px;margin:0 auto;padding:0 24px}.cpv-kicker{display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:14px;color:#078fff;font-family:Patrick Hand,Inter,sans-serif;font-size:18px;font-weight:700;font-style:italic;text-transform:uppercase}.cpv-kicker span{display:block;width:18px;height:18px;border-top:2px solid #078fff;transform:rotate(28deg)}.cpv-kicker span:first-child{transform:rotate(-28deg)}.cpv-title{margin:0;text-align:center;font-family:Chewy,cursive;font-size:clamp(42px,5.8vw,76px);font-weight:400;line-height:.92;letter-spacing:-.02em}.cpv-title-mark{position:relative;display:inline-block}.cpv-title-mark:after{content:'';position:absolute;left:4%;right:3%;bottom:-8px;height:5px;border-radius:999px;background:#13a8ff;transform:rotate(-1.5deg)}.cpv-sub{max-width:640px;margin:24px auto 0;text-align:center;font-family:Patrick Hand,Inter,sans-serif;font-size:20px;font-weight:700;line-height:1.25;letter-spacing:.04em}.cpv-note{position:absolute;z-index:3;padding:18px 22px;box-shadow:0 10px 22px rgba(15,23,42,.1);font-family:Patrick Hand,Inter,sans-serif;font-weight:700}.cpv-tape{position:absolute;top:-10px;left:42%;width:42px;height:14px;background:rgba(107,114,128,.35);transform:rotate(-8deg)}.cpv-product-note-left{left:7%;top:66px;background:#b8f5d9;transform:rotate(-8deg)}.cpv-product-note-right{right:9%;top:74px;background:#ffc6d7;transform:rotate(8deg)}.cpv-template-note-left{left:10%;top:92px;background:#b8f5d9;transform:rotate(-7deg)}.cpv-template-note-right{right:11%;top:108px;background:#ffc6d7;transform:rotate(8deg)}.cpv-doodle{position:absolute;z-index:2;pointer-events:none}.cpv-window{margin:34px auto 0;max-width:1000px;overflow:hidden;border:2px solid #090909;border-radius:7px;background:#fff;box-shadow:0 20px 45px rgba(15,23,42,.12)}.cpv-window-top{height:54px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #d9dee8;padding:0 18px}.cpv-window-left,.cpv-window-right{display:flex;align-items:center;gap:13px}.cpv-logo{width:28px;height:28px;display:flex;align-items:center;justify-content:center;border-radius:999px;font-family:Chewy,cursive;font-size:24px}.cpv-project{font-size:13px;font-weight:800}.cpv-icon-dot{width:18px;height:18px;border:1px solid #d5dbe6;border-radius:5px}.cpv-avatar{width:24px;height:24px;border:2px solid #fff;border-radius:999px;margin-left:-8px}.cpv-share{border-radius:5px;background:#148dff;color:white;padding:8px 13px;font-size:12px;font-weight:800}.cpv-app{display:grid;grid-template-columns:112px 1fr 210px;min-height:515px}.cpv-sidebar{border-right:1px solid #e5e7eb;padding:18px 14px;font-size:12px;font-weight:800}.cpv-side-item{display:flex;align-items:center;gap:9px;margin-bottom:17px;color:#111827}.cpv-side-item.active{color:#078fff}.cpv-side-dot{width:16px;height:16px;border-radius:4px;border:1px solid currentColor}.cpv-board{position:relative;padding:46px 54px;background:#fff}.cpv-tools{position:absolute;left:16px;top:78px;width:34px;padding:7px 0;border:1px solid #e5e7eb;border-radius:8px;background:#fff;box-shadow:0 8px 18px rgba(15,23,42,.08)}.cpv-tool{height:32px;display:flex;align-items:center;justify-content:center;font-size:13px}.cpv-tool.active{margin:0 5px;border-radius:4px;background:#148dff;color:#fff}.cpv-board-grid{position:absolute;inset:0;background-image:linear-gradient(to right,rgba(15,23,42,.045) 1px,transparent 1px),linear-gradient(to bottom,rgba(15,23,42,.045) 1px,transparent 1px);background-size:28px 28px}.cpv-board-content{position:relative;z-index:1;min-height:420px}.cpv-board h4{font-family:Patrick Hand,Inter,sans-serif;font-size:18px;font-weight:700;font-style:italic;margin:0 0 16px}.cpv-board h4:after{content:'';display:block;width:66px;height:4px;margin-top:2px;border-radius:999px;background:#13a8ff;transform:rotate(-2deg)}.cpv-sticky{position:absolute;padding:16px 18px;font-size:12px;font-weight:800;line-height:1.1;text-align:center;box-shadow:0 8px 12px rgba(15,23,42,.07)}.cpv-flow{position:absolute;border:2px solid #13a8ff;border-radius:5px;background:#eef9ff;padding:12px 16px;font-size:12px;font-weight:800}.cpv-flow.purple{border-color:#8b5cf6;background:#f3edff}.cpv-flow.green{border-color:#22c55e;background:#effdf4}.cpv-check{position:absolute;border:1px solid #111827;background:#fff;padding:12px 16px;font-size:12px;font-weight:800;line-height:1.9}.cpv-bubble{position:absolute;width:150px;height:86px;display:flex;align-items:center;justify-content:center;border:2px solid #13a8ff;border-radius:50%;background:#eff9ff;text-align:center;font-family:Patrick Hand,Inter,sans-serif;font-size:20px;font-weight:700;line-height:1.05}.cpv-tag{position:absolute;border-radius:4px;padding:7px 10px;font-size:11px;font-weight:800}.cpv-right-panel{border-left:1px solid #e5e7eb;padding:16px;background:#fff}.cpv-tabs{display:flex;gap:16px;border-bottom:1px solid #e5e7eb;padding-bottom:10px;font-size:12px;font-weight:800}.cpv-tabs span:first-child{color:#078fff}.cpv-mini-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px}.cpv-mini{height:76px;border:1px solid #e5e7eb;border-radius:6px;padding:9px;text-align:center;font-size:10px;font-weight:800}.cpv-comment{display:flex;gap:8px;margin-top:14px;font-size:10px;line-height:1.25}.cpv-comment img{width:24px;height:24px;border-radius:999px;object-fit:cover}.cpv-filters{margin:30px auto 22px;display:flex;max-width:1020px;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap}.cpv-pill{height:38px;min-width:116px;border:1px solid #d9dee8;border-radius:999px;background:white;padding:0 18px;font-size:13px;font-weight:800}.cpv-pill.active{border-color:#e5eefc;background:#eaf3ff}.cpv-template-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;max-width:1020px;margin:0 auto}.cpv-card{overflow:hidden;border:1px solid #e5e7eb;border-radius:14px;background:white;padding:14px;box-shadow:0 12px 24px rgba(15,23,42,.08)}.cpv-card-preview{height:196px;border:1px solid #e5e7eb;border-radius:9px;background:#f8fffb;position:relative;overflow:hidden}.cpv-card-title{display:flex;align-items:center;justify-content:space-between;margin-top:14px;gap:12px}.cpv-card-title strong{font-size:15px}.cpv-card-title small{display:block;margin-top:4px;color:#64748b;font-size:11px;font-weight:800}.cpv-badge{border-radius:999px;padding:5px 9px;font-size:10px;font-weight:800}.cpv-popular{background:#fff0ed;color:#fb493d}.cpv-free{background:#eefcf3;color:#17a34a}.cpv-blue{background:#eef5ff;color:#2563eb}.cpv-drawn-line{position:absolute;border:2px dashed #111827;border-color:#111827 transparent transparent transparent;border-radius:50%}.cpv-roadmap-row{position:absolute;left:28px;right:28px;height:10px;border-radius:999px;background:#bfdbfe}.cpv-map-grid{position:absolute;inset:54px 18px 18px;display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(4,1fr);border-top:1px solid #ead9bf;border-left:1px solid #ead9bf}.cpv-map-grid span{border-right:1px solid #ead9bf;border-bottom:1px solid #ead9bf}@media(max-width:900px){.cpv-note,.cpv-doodle{display:none}.cpv-app{grid-template-columns:78px 1fr}.cpv-right-panel{display:none}.cpv-board{padding:34px 30px}.cpv-template-grid{grid-template-columns:1fr}.cpv-window{margin-top:28px}.cpv-product{padding-top:72px}.cpv-section{padding-top:72px;padding-bottom:72px}}
        </style>
<div className="cpv-note cpv-product-note-left">
<span className="cpv-tape"></span>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
<svg aria-hidden="true" className="lucide lucide-users-round" data-lucide="users-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '25px', height: '25px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 21a8 8 0 0 0-16 0"></path>
<circle cx="10" cy="8" r="5"></circle>
<path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
</svg>
<span>
              Everything
              <br/>
              together
            </span>
</div>
</div>
<div className="cpv-note cpv-product-note-right">
<span className="cpv-tape"></span>
<i className="h-4 w-4" data-lucide="sparkles"></i>
</div>
<svg className="cpv-doodle" fill="none" style={{right: '18%', top: '138px', width: '74px', height: '46px'}} viewbox="0 0 74 46">
<path d="M62 6C44 6 52 31 24 28" stroke="black" stroke-dasharray="4 6" strokeLinecap="round" strokeWidth="2" style={{strokeDashoffset: '0px', strokeDasharray: '47.2009px, 6px'}}></path>
<path d="M29 20L18 29L31 35" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeDashoffset: '0px', strokeDasharray: '28.5305'}}></path>
</svg>
<div className="cpv-wrap">
<style>
            @media (min-width: 768px) {
              .desktop-scale {
                transform: scale(1.15) !important;
                transform-origin: top center !important;
              }
            }
            @keyframes cpvStickyPop {
              0%, 10% { transform: scale(0); opacity: 0; }
              20%, 90% { transform: scale(1); opacity: 1; }
              100% { transform: scale(0); opacity: 0; }
            }
            @keyframes cpvDrawLine {
              0%, 20% { stroke-dashoffset: 250; opacity: 0; }
              40%, 90% { stroke-dashoffset: 0; opacity: 1; }
              100% { stroke-dashoffset: 250; opacity: 0; }
            }
            @keyframes cpvToolHighlight {
              0%, 100% { background: transparent; }
              10%, 30% { background: #f1f5f9; }
            }
            @keyframes cpvCursorMove1 {
              0% { transform: translate(100px, 300px); }
              20% { transform: translate(160px, 60px); }
              40% { transform: translate(340px, 80px); }
              60% { transform: translate(550px, 80px); }
              80% { transform: translate(400px, 270px); }
              100% { transform: translate(100px, 300px); }
            }
            @keyframes cpvCursorMove2 {
              0% { transform: translate(500px, 200px); }
              20% { transform: translate(450px, 70px); }
              40% { transform: translate(200px, 120px); }
              60% { transform: translate(90px, 270px); }
              80% { transform: translate(250px, 300px); }
              100% { transform: translate(500px, 200px); }
            }
            @keyframes cpvCommentSlide {
              0%, 40% { transform: translateX(120%); opacity: 0; }
              50%, 90% { transform: translateX(0); opacity: 1; }
              100% { transform: translateX(120%); opacity: 0; }
            }
            @keyframes cpvCommentSlide2 {
              0%, 60% { transform: translateX(120%); opacity: 0; }
              70%, 95% { transform: translateX(0); opacity: 1; }
              100% { transform: translateX(120%); opacity: 0; }
            }
            @keyframes cpvAvatarBounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-6px); }
            }
            @keyframes cpvFlowPop {
              0%, 30% { transform: translateY(15px); opacity: 0; }
              40%, 90% { transform: translateY(0); opacity: 1; }
              100% { transform: translateY(15px); opacity: 0; }
            }

            .cpv-anim-sticky { animation: cpvStickyPop 12s infinite cubic-bezier(0.34, 1.56, 0.64, 1); }
            .cpv-anim-sticky-1 { animation-delay: 0s; }
            .cpv-anim-sticky-2 { animation-delay: 0.5s; }
            .cpv-anim-sticky-3 { animation-delay: 1s; }

            .cpv-anim-line {
              stroke-dasharray: 250;
              stroke-dashoffset: 250;
              animation: cpvDrawLine 12s infinite ease-in-out;
            }
            .cpv-anim-line-1 { animation-delay: 1.5s; }
            .cpv-anim-line-2 { animation-delay: 2.5s; }
            .cpv-anim-line-3 { animation-delay: 3.5s; }

            .cpv-anim-tool-1 { animation: cpvToolHighlight 12s infinite; animation-delay: 1s; }
            .cpv-anim-tool-2 { animation: cpvToolHighlight 12s infinite; animation-delay: 4s; }
            .cpv-anim-tool-3 { animation: cpvToolHighlight 12s infinite; animation-delay: 7s; }

            .cpv-anim-comment-1 { animation: cpvCommentSlide 12s infinite cubic-bezier(0.16, 1, 0.3, 1); }
            .cpv-anim-comment-2 { animation: cpvCommentSlide2 12s infinite cubic-bezier(0.16, 1, 0.3, 1); }

            .cpv-anim-avatar-1 { animation: cpvAvatarBounce 4s infinite ease-in-out; animation-delay: 0s; }
            .cpv-anim-avatar-2 { animation: cpvAvatarBounce 4s infinite ease-in-out; animation-delay: 0.3s; }
            .cpv-anim-avatar-3 { animation: cpvAvatarBounce 4s infinite ease-in-out; animation-delay: 0.6s; }

            .cpv-anim-flow-1 { animation: cpvFlowPop 12s infinite; animation-delay: 2s; }
            .cpv-anim-flow-2 { animation: cpvFlowPop 12s infinite; animation-delay: 2.5s; }
            .cpv-anim-flow-3 { animation: cpvFlowPop 12s infinite; animation-delay: 3s; }

            .cpv-fake-cursor {
              position: absolute;
              width: 24px;
              height: 24px;
              z-index: 50;
              pointer-events: none;
              filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));
            }
            .cpv-cursor-1 { animation: cpvCursorMove1 12s infinite ease-in-out; }
            .cpv-cursor-2 { animation: cpvCursorMove2 12s infinite ease-in-out; animation-delay: -3s; }

            .cpv-right-panel {
              overflow-x: hidden;
            }
          </style>
<div className="cpv-kicker">
<span></span>
            Product preview
            <span></span>
</div>
<h2 className="cpv-title tracking-tight">
            See Canvas in
            <span className="cpv-title-mark">action.</span>
</h2>
<p className="text-center text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto mt-6 font-normal px-4">
            Unleash your team's creativity with an infinite workspace designed
            for brainstorming, planning, and bringing ideas to life seamlessly.
          </p>
<div className="cpv-window mt-24 mb-24 md:mb-40 py-0 desktop-scale w-full max-w-[1000px] mx-auto">
<div className="cpv-window-top">
<div className="cpv-window-left">
<div className="cpv-logo">C</div>
<i data-lucide="menu" style={{width: '17px', height: '17px'}}></i>
<div className="cpv-project">Project Launch</div>
<svg aria-hidden="true" className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
<div className="cpv-icon-dot"></div>
<div className="cpv-icon-dot"></div>
</div>
<div className="cpv-window-right">
<div style={{display: 'flex'}}>
<div className="cpv-avatar cpv-anim-avatar-1" style={{background: '#a8efcf'}}></div>
<div className="cpv-avatar cpv-anim-avatar-2" style={{background: '#ffc4a6'}}></div>
<div className="cpv-avatar cpv-anim-avatar-3" style={{background: '#bcecff'}}></div>
</div>
<span style={{fontSize: '12px', fontWeight: '600'}}>+3</span>
<span className="cpv-share">Share</span>
<i data-lucide="more-horizontal" style={{width: '18px', height: '18px'}}></i>
</div>
</div>
<div className="cpv-app">
<aside className="cpv-sidebar">
<div className="cpv-side-group">
<div className="cpv-side-item active cpv-anim-tool-1">
<span className="cpv-side-icon">⌗</span>
<span>Canvas</span>
</div>
<div className="cpv-side-item cpv-anim-tool-2">
<span className="cpv-side-icon">▦</span>
<span className="">Templates</span>
</div>
<div className="cpv-side-item cpv-anim-tool-3">
<span className="cpv-side-icon">◫</span>
<span>Projects</span>
</div>
<div className="cpv-side-item">
<span className="cpv-side-icon">💬</span>
<span className="">Comments</span>
</div>
<div className="cpv-side-item">
<span className="cpv-side-icon">✓</span>
<span>Tasks</span>
</div>
<div className="cpv-side-item">
<span className="cpv-side-icon">▶</span>
<span className="">Present</span>
</div>
</div>
<div className="cpv-side-item muted">
<span className="cpv-side-icon">⌫</span>
<span>Trash</span>
</div>
</aside>
<div className="cpv-board">
<div className="cpv-board-grid"></div>
<div className="cpv-tools">
<div className="cpv-tool active cpv-anim-tool-1">
<svg aria-hidden="true" className="lucide lucide-mouse-pointer-2" data-lucide="mouse-pointer-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path>
</svg>
</div>
<div className="cpv-tool cpv-anim-tool-2">□</div>
<div className="cpv-tool cpv-anim-tool-3">T</div>
<div className="cpv-tool">▱</div>
<div className="cpv-tool">⌁</div>
<div className="cpv-tool">···</div>
</div>
<div className="cpv-board-content">
<svg className="cpv-fake-cursor cpv-cursor-1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{fill: '#3b82f6', stroke: 'white'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path>
</svg>
<svg className="cpv-fake-cursor cpv-cursor-2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{fill: '#ec4899', stroke: 'white'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path>
</svg>
<div className="" style={{position: 'absolute', left: '86px', top: '0'}}>
<h4 className="tracking-tight">1. IDEAS</h4>
</div>
<div className="" style={{position: 'absolute', left: '330px', top: '0'}}>
<h4 className="tracking-tight">2. PLAN</h4>
</div>
<div style={{position: 'absolute', left: '90px', top: '218px'}}>
<h4 className="tracking-tight">3. NEXT STEPS</h4>
</div>
<div style={{position: 'absolute', left: '395px', top: '218px'}}>
<h4 className="tracking-tight">4. LAUNCH</h4>
</div>
<div className="cpv-sticky cpv-anim-sticky cpv-anim-sticky-1" style={{left: '66px', top: '58px', background: '#a8efcf'}}>
                    Improve
                    <br/>
                    onboarding
                  </div>
<div className="cpv-sticky cpv-anim-sticky cpv-anim-sticky-2" style={{left: '160px', top: '42px', background: '#ffef9d'}}>
                    AI-powered
                    <br/>
                    search
                  </div>
<div className="cpv-sticky cpv-anim-sticky cpv-anim-sticky-3" style={{left: '199px', top: '120px', background: '#bcecff'}}>
                    Team
                    <br/>
                    analytics
                  </div>
<svg fill="none" style={{position: 'absolute', left: '235px', top: '72px', width: '72px', height: '42px'}} viewbox="0 0 72 42">
<path className="cpv-anim-line cpv-anim-line-1" d="M8 28C26 7 49 6 64 20" stroke="black" strokeLinecap="round" strokeWidth="2"></path>
<path className="cpv-anim-line cpv-anim-line-1" d="M55 13L65 20L54 27" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="cpv-flow purple cpv-anim-flow-1" style={{left: '340px', top: '68px'}}>
                    Research
                  </div>
<div className="cpv-flow cpv-anim-flow-2" style={{left: '448px', top: '68px'}}>
                    Design
                  </div>
<div className="cpv-flow green cpv-anim-flow-3" style={{left: '548px', top: '68px'}}>
                    Build
                  </div>
<svg fill="none" style={{position: 'absolute', left: '424px', top: '82px', width: '126px', height: '18px'}} viewbox="0 0 126 18">
<path className="cpv-anim-line cpv-anim-line-2" d="M3 9H119" stroke="black" strokeWidth="1.5"></path>
<path className="cpv-anim-line cpv-anim-line-2" d="M113 3L120 9L113 15" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<div className="cpv-tag cpv-anim-sticky cpv-anim-sticky-1" style={{left: '637px', top: '94px', background: '#d8b4fe', color: 'white'}}>
                    Sam
                  </div>
<div className="cpv-check cpv-anim-flow-1" style={{left: '86px', top: '276px'}}>
<div>☑ User interviews</div>
<div>☑ Wireframes</div>
<div>☐ Prototype</div>
<div>☐ Test with users</div>
</div>
<div className="cpv-bubble cpv-anim-sticky cpv-anim-sticky-2" style={{left: '402px', top: '273px'}}>
                    Let's ship
                    <br/>
                    this! 🎉
                  </div>
<div className="cpv-tag cpv-anim-sticky cpv-anim-sticky-2" style={{left: '190px', top: '365px', background: '#ffcf4a'}}>
                    Taylor
                  </div>
<div className="cpv-tag cpv-anim-sticky cpv-anim-sticky-3" style={{left: '510px', top: '380px', background: '#4ade80'}}>
                    Alex
                  </div>
<svg fill="none" style={{position: 'absolute', left: '255px', top: '306px', width: '100px', height: '48px'}} viewbox="0 0 100 48">
<path className="cpv-anim-line cpv-anim-line-3" d="M10 35C38 9 62 10 87 24" stroke="black" strokeLinecap="round" strokeWidth="2"></path>
<path className="cpv-anim-line cpv-anim-line-3" d="M77 16L89 25L75 31" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="cpv-anim-flow-3" style={{position: 'absolute', right: '10px', top: '278px', display: 'flex', alignItems: 'center', gap: '9px', borderRadius: '7px', background: 'white', padding: '13px 14px', boxShadow: '0 8px 18px rgba(15,23,42,.12)', fontSize: '12px', fontWeight: '600'}}>
<div className="" style={{width: '24px', height: '24px', borderRadius: '999px', background: '#ffd1dc'}}></div>
                    Love this flow! 🚀
                    <br/>
<span style={{color: '#94a3b8', fontSize: '10px'}}>10:24 AM</span>
</div>
</div>
</div>
<aside className="cpv-right-panel">
<div className="cpv-tabs">
<span className="">Templates</span>
<span>Comments</span>
<span>Tasks</span>
</div>
<div className="" style={{display: 'flex', justifyContent: 'space-between', marginTop: '14px', fontSize: '11px', fontWeight: '600'}}>
<span className="">Start from a template</span>
<span style={{color: '#078fff'}}>See all</span>
</div>
<div className="cpv-mini-grid">
<div className="cpv-mini">
<i data-lucide="panels-top-left" style={{width: '24px', height: '24px'}}></i>
<br/>
                    Project plan
                  </div>
<div className="cpv-mini">
<i className="h-4 w-4" data-lucide="sticky-note"></i>
<br/>
                    Brainstorm
                  </div>
<div className="cpv-mini">
<i className="mx-auto h-6 w-6" data-lucide="list-checks"></i>
<br/>
                    Research plan
                  </div>
<div className="cpv-mini">
<i className="h-4 w-4" data-lucide="route"></i>
<br/>
                    Design sprint
                  </div>
</div>
<div style={{display: 'flex', justifyContent: 'space-between', marginTop: '18px', fontSize: '11px', fontWeight: '600'}}>
<span>Comments</span>
<span style={{color: '#078fff'}}>See all</span>
</div>
<div className="cpv-comment cpv-anim-comment-1">
<img alt="Alex" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=60&amp;q=80"/>
<div>
<br/>
                    Great point! Let’s explore this further.
                  </div>
</div>
<div className="cpv-comment cpv-anim-comment-2">
<img alt="Sam" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=60&amp;q=80"/>
<div>
<br/>
                    I’ll add some data here.
                  </div>
</div>
</aside>
</div>
</div>
</div>
</section>
<section className="hiw-dark overflow-hidden sm:pt-32 sm:pb-32 bg-[#07111F] pt-32 pb-32 relative" style={{fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', backgroundImage: 'radial-gradient(circle at 20% 0%, rgba(19,168,255,0.12), transparent 35%), radial-gradient(circle at 80% 10%, rgba(244,114,182,0.12), transparent 30%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))'}}>
<style>
          .hiw-dark .hiw-doodle path { stroke: rgba(255,255,255,0.34) !important; }
          .hiw-dark .hiw-arrow-icon { color: rgba(255,255,255,0.65); }
          .hiw-dark .hiw-summary { background: rgba(255,255,255,0.94); border-color: rgba(255,255,255,0.12); box-shadow: 0 18px 40px rgba(2,8,23,0.32); }
          .hiw-dark .hiw-card { box-shadow: 0 18px 42px rgba(2,8,23,0.34); }
        </style>
<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<svg className="hiw-doodle absolute left-16 top-10 hidden h-24 w-24 md:block" fill="none" viewbox="0 0 96 96">
<path d="M55 10C25 10 13 34 27 56" stroke="black" stroke-dasharray="5 8" strokeLinecap="round" strokeWidth="2" style={{strokeDashoffset: '0px', strokeDasharray: '68.5016px, 8px'}}></path>
<path d="M17 51L29 65L35 46" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeDashoffset: '0px', strokeDasharray: '38.3639'}}></path>
</svg>
<div className="absolute right-24 top-10 hidden rotate-3 bg-pink-200 px-8 py-7 shadow-sm md:block">
<div className="absolute -top-3 left-10 h-4 w-12 rotate-6 bg-neutral-400/40"></div>
<i className="h-12 w-12" data-lucide="star"></i>
</div>
<svg className="hiw-doodle absolute right-36 top-32 hidden h-20 w-20 md:block" fill="none" viewbox="0 0 80 80">
<path d="M58 16C48 40 27 49 13 37" stroke="black" strokeLinecap="round" strokeWidth="2" style={{strokeDashoffset: '0px', strokeDasharray: '58.2595'}}></path>
<path d="M24 30L11 37L25 46" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeDashoffset: '0px', strokeDasharray: '31.4081'}}></path>
</svg>
<div className="mx-auto max-w-4xl text-center">
<div className="mb-5 flex items-center justify-center gap-3 text-sky-500">
<span className="h-5 w-6 rotate-[-25deg] border-t-2 border-sky-500"></span>
<p className="text-base font-medium uppercase italic tracking-tight">
                How it works
              </p>
<span className="h-5 w-6 rotate-[25deg] border-t-2 border-sky-500"></span>
</div>
<h2 className="text-5xl font-medium leading-none tracking-tight text-white sm:text-6xl lg:text-7xl" style={{fontFamily: '"Chewy", cursive'}}>
              Go from messy ideas
              <br className="hidden sm:block"/>
              to clear action.
            </h2>
<p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-relaxed tracking-tight text-slate-300">
              Capture ideas, collaborate with your team, and turn every board
              into something actionable in
              <span className="relative inline-block">
                just a few steps.
                <span className="absolute -bottom-1 left-0 h-1 w-full -rotate-2 rounded-full bg-sky-500"></span>
</span>
</p>
</div>
<div className="grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] mt-24 gap-x-6 gap-y-6 items-stretch">
<article className="hiw-card rounded-xl border-2 border-black bg-white/95 p-5 shadow-sm">
<div className="flex gap-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-sky-300 bg-sky-100 text-2xl font-medium tracking-tight text-sky-500">
                  01
                </div>
<div className="">
<h3 className="text-xl font-medium leading-tight tracking-tight text-black">
                    Start with a canvas
                  </h3>
<p className="mt-2 text-sm font-medium leading-snug text-slate-700">
                    Open a blank board, drop sticky notes, sketch flows, and
                    collect ideas freely.
                  </p>
</div>
</div>
<div className="mt-6 flex rounded-lg border border-neutral-200 bg-white p-4">
<div className="mr-3 flex flex-col items-center gap-3 rounded-md border border-neutral-200 bg-white p-2 shadow-sm">
<div className="flex h-6 w-6 items-center justify-center rounded bg-sky-500 text-white">
<i className="h-4 w-4" data-lucide="mouse-pointer-2"></i>
</div>
<i className="h-4 w-4" data-lucide="square"></i>
<span className="text-lg font-medium leading-none">T</span>
<i className="h-4 w-4" data-lucide="sticky-note"></i>
<i className="h-4 w-4" data-lucide="pencil"></i>
<i className="h-4 w-4" data-lucide="ellipsis"></i>
</div>
<div className="relative min-h-40 flex-1 overflow-hidden rounded border border-neutral-200 [background-image:linear-gradient(to_right,rgba(15,23,42,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.07)_1px,transparent_1px)] [background-size:2rem_2rem]">
<div className="absolute left-5 top-9 -rotate-3 bg-emerald-200 px-5 py-4 text-sm font-medium animate-pulse" style={{animationDuration: '2.5s'}}>
                    New
                    <br/>
                    idea
                  </div>
<div className="absolute left-28 top-16 rotate-2 bg-yellow-200 px-5 py-4 text-sm font-medium animate-pulse" style={{animationDuration: '3.5s'}}>
                    User
                    <br/>
                    flow
                  </div>
<div className="absolute bottom-5 right-5 bg-sky-200 px-5 py-4 text-sm font-medium animate-pulse" style={{animationDuration: '3s'}}>
                    Next
                    <br/>
                    steps
                  </div>
<svg className="absolute left-16 top-7 h-16 w-24" fill="none" viewbox="0 0 96 64">
<path d="M15 28C36 10 58 14 72 31" stroke="black" strokeLinecap="round" strokeWidth="2"></path>
<path d="M60 24L73 32L66 45" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="absolute bottom-6 left-10 h-16 w-24" fill="none" viewbox="0 0 96 64">
<path d="M70 28C50 48 28 48 15 31" stroke="black" strokeLinecap="round" strokeWidth="2"></path>
<path d="M27 38L14 30L22 18" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</article>
<div className="hidden items-center justify-center lg:flex text-slate-300 hiw-arrow-icon">
<i className="h-9 w-9" data-lucide="arrow-right"></i>
</div>
<article className="hiw-card rounded-xl border-2 border-black bg-white/95 p-5 shadow-sm">
<div className="flex gap-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-violet-300 bg-violet-100 text-2xl font-medium tracking-tight text-violet-600">
                  02
                </div>
<div className="">
<h3 className="text-xl font-medium leading-tight tracking-tight text-black">
                    Collaborate in real time
                  </h3>
<p className="mt-2 text-sm font-medium leading-snug text-slate-700">
                    Invite teammates, leave comments, move ideas around, and
                    build together instantly.
                  </p>
</div>
</div>
<div className="relative mt-6 min-h-52 overflow-hidden rounded-lg border border-neutral-200 bg-white [background-image:linear-gradient(to_right,rgba(15,23,42,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.07)_1px,transparent_1px)] [background-size:2rem_2rem]">
<div className="absolute left-6 top-5 rounded bg-emerald-300 px-4 py-1.5 text-xs font-medium animate-pulse" style={{animationDuration: '2.8s'}}>
                  Alex
                </div>
<div className="absolute bottom-5 left-7 rounded bg-violet-300 px-4 py-1.5 text-xs font-medium text-white animate-pulse" style={{animationDuration: '3.2s'}}>
                  Sam
                </div>
<div className="absolute bottom-4 right-5 rounded bg-yellow-300 px-4 py-1.5 text-xs font-medium animate-pulse" style={{animationDuration: '2.5s'}}>
                  Taylor
                </div>
<div className="absolute right-8 top-10 rotate-3 rounded bg-white px-3 py-2 text-xs font-medium shadow border border-neutral-200 animate-pulse" style={{animationDuration: '3.6s'}}>
                  Great idea!
                </div>
<div className="absolute left-16 top-20 -rotate-2 rounded bg-white px-3 py-2 text-xs font-medium shadow border border-neutral-200 animate-pulse" style={{animationDuration: '4.1s'}}>
                  Let’s build
                  <br/>
                  this!
                </div>
<svg className="absolute left-12 top-6 h-4 w-4 text-emerald-500 animate-pulse" fill="currentColor" style={{animationDuration: '2.8s'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4l5.6 15.5c.2.5.9.5 1.1 0l2.6-6.2 6.2-2.6c.5-.2.5-.9 0-1.1L4 4z"></path>
</svg>
<svg className="absolute bottom-10 left-12 h-4 w-4 text-violet-500 animate-pulse" fill="currentColor" style={{animationDuration: '3.2s'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4l5.6 15.5c.2.5.9.5 1.1 0l2.6-6.2 6.2-2.6c.5-.2.5-.9 0-1.1L4 4z"></path>
</svg>
<svg className="absolute bottom-12 right-12 h-4 w-4 text-yellow-500 animate-pulse" fill="currentColor" style={{animationDuration: '2.5s'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4l5.6 15.5c.2.5.9.5 1.1 0l2.6-6.2 6.2-2.6c.5-.2.5-.9 0-1.1L4 4z"></path>
</svg>
</div>
</article>
<div className="hidden items-center justify-center lg:flex text-slate-300 hiw-arrow-icon">
<i className="h-9 w-9" data-lucide="arrow-right"></i>
</div>
<article className="hiw-card rounded-xl border-2 border-black bg-white/95 p-5 shadow-sm">
<div className="flex gap-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-sky-300 bg-sky-100 text-2xl font-medium tracking-tight text-sky-500">
                  03
                </div>
<div className="">
<h3 className="text-xl font-medium leading-tight tracking-tight text-black">
                    Turn ideas into action
                  </h3>
<p className="mt-2 text-sm font-medium leading-snug text-slate-700">
                    Use templates, organize sections, and turn your board into a
                    presentation or plan.
                  </p>
</div>
</div>
<div className="mt-6 grid min-h-52 grid-cols-[0.7fr_1.3fr] gap-4 rounded-lg border border-neutral-200 bg-white p-4">
<div className="space-y-3 text-xs font-medium">
<div className="flex items-center gap-2 text-violet-600">
<i className="h-4 w-4" data-lucide="layout-grid"></i>
                    Templates
                  </div>
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="play-square"></i>
                    Project plan
                  </div>
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="search"></i>
                    User research
                  </div>
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="route"></i>
                    Design sprint
                  </div>
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="sparkles"></i>
                    Brainstorm
                  </div>
</div>
<div className="">
<div className="grid grid-cols-3 gap-2 text-center text-xs font-medium">
<span className="rounded bg-emerald-100 py-2">Goals</span>
<span className="rounded bg-sky-100 py-2">Plan</span>
<span className="rounded bg-yellow-100 py-2">Actions</span>
</div>
<div className="mt-4 grid grid-cols-3 gap-2">
<div className="rounded border border-neutral-200 p-2 animate-pulse" style={{animationDuration: '2.2s'}}>
<i className="mx-auto h-6 w-6" data-lucide="target"></i>
<div className="mt-2 h-1 rounded bg-neutral-200"></div>
<div className="mt-1 h-1 rounded bg-neutral-200"></div>
</div>
<div className="rounded border border-neutral-200 p-2 animate-pulse" style={{animationDuration: '3.1s'}}>
<i className="mx-auto h-6 w-6" data-lucide="list-checks"></i>
<div className="mt-2 h-1 rounded bg-neutral-200"></div>
<div className="mt-1 h-1 rounded bg-neutral-200"></div>
</div>
<div className="rounded border border-neutral-200 p-2 animate-pulse" style={{animationDuration: '2.7s'}}>
<i className="mx-auto h-6 w-6" data-lucide="check-square"></i>
<div className="mt-2 h-1 rounded bg-neutral-200"></div>
<div className="mt-1 h-1 rounded bg-neutral-200"></div>
</div>
</div>
<div className="mx-auto mt-4 w-32 rounded border border-neutral-200 bg-white p-3 text-center text-xs font-medium shadow-sm animate-pulse" style={{animationDuration: '4s'}}>
                    Project Plan
                    <div className="mx-auto mt-2 h-8 w-8 rounded-full bg-[conic-gradient(#13a8ff_0_35%,#facc15_35%_70%,#86efac_70%)] animate-spin" style={{animationDuration: '3s'}}></div>
</div>
</div>
</div>
</article>
</div>
<div className="hiw-summary mx-auto mt-8 grid max-w-5xl overflow-hidden rounded-xl border border-neutral-200 bg-white/90 shadow-sm sm:grid-cols-3">
<div className="flex items-center gap-4 px-7 py-5">
<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
<i className="h-7 w-7" data-lucide="lightbulb"></i>
</div>
<div className="">
<h3 className="font-medium tracking-tight text-black">
                  Brainstorm
                </h3>
<p className="text-sm font-medium leading-snug text-slate-700">
                  Capture every idea and see the big picture come to life.
                </p>
</div>
</div>
<div className="flex items-center gap-4 border-t border-neutral-200 px-7 py-5 sm:border-l sm:border-t-0">
<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
<i className="h-7 w-7" data-lucide="users-round"></i>
</div>
<div>
<h3 className="font-medium tracking-tight text-black">Align</h3>
<p className="text-sm font-medium leading-snug text-slate-700">
                  Co-create with your team and stay on the same page.
                </p>
</div>
</div>
<div className="flex items-center gap-4 border-t border-neutral-200 px-7 py-5 sm:border-l sm:border-t-0">
<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600">
<i className="h-7 w-7" data-lucide="presentation"></i>
</div>
<div>
<h3 className="font-medium tracking-tight text-black">Present</h3>
<p className="text-sm font-medium leading-snug text-slate-700">
                  Turn your boards into polished plans and share with
                  confidence.
                </p>
</div>
</div>
</div>
</div>
</section>
<section className="cpv-section cpv-templates relative overflow-hidden bg-white py-20 sm:py-24">
<div className="cpv-note cpv-template-note-left">
<span className="cpv-tape"></span>
<i className="h-7 w-7" data-lucide="lightbulb"></i>
</div>
<div className="cpv-note cpv-template-note-right">
<span className="cpv-tape"></span>
<svg aria-hidden="true" className="lucide lucide-star" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '38px', height: '38px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
<svg className="cpv-doodle" fill="none" style={{left: '12%', top: '200px', width: '74px', height: '50px'}} viewbox="0 0 74 50">
<path d="M62 8C42 8 47 36 18 34" stroke="black" stroke-dasharray="4 6" strokeLinecap="round" strokeWidth="2" style={{strokeDashoffset: '54px', strokeDasharray: '54.1209px, 6px'}}></path>
<path d="M26 25L14 34L28 41" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeDashoffset: '31px', strokeDasharray: '30.6525'}}></path></svg><svg className="cpv-doodle" fill="none" style={{right: '8%', top: '168px', width: '36px', height: '36px'}} viewbox="0 0 36 36">
<path d="M18 4v8M18 24v8M4 18h8M24 18h8" stroke="#148dff" strokeLinecap="round" strokeWidth="3" style={{strokeDashoffset: '32px', strokeDasharray: '32'}}></path>
</svg>
<div className="cpv-wrap">
<div className="cpv-kicker">
<span></span>
            Templates
            <span></span>
</div>
<h2 className="cpv-title">
            Browse templates
            <br/>
            your team will
            <span className="cpv-title-mark">actually use.</span>
</h2>
<p className="cpv-sub">
            Explore ready-made boards for brainstorming, planning,
            <br className="hidden sm:block"/>
            research, workshops, and presentations.
          </p>
<div className="cpv-filters flex flex-nowrap items-center gap-2 md:gap-3 overflow-x-auto w-full py-2" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>
<style>
              [data-element-id="aura-empm5b6f112yu5v9q"]::-webkit-scrollbar { display: none; }
            </style>
<button className="cpv-pill inline-flex items-center justify-center h-10 px-4 md:px-5 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-medium whitespace-nowrap flex-shrink-0 hover:bg-gray-50 transition-colors">
              Popular
              <svg aria-hidden="true" className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '13px', height: '13px', verticalAlign: 'middle', marginLeft: '8px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<button className="cpv-pill inline-flex items-center justify-center h-10 px-4 md:px-5 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-medium whitespace-nowrap flex-shrink-0 hover:bg-gray-50 transition-colors">
              Brainstorming
            </button>
<button className="cpv-pill inline-flex items-center justify-center h-10 px-4 md:px-5 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-medium whitespace-nowrap flex-shrink-0 hover:bg-gray-50 transition-colors">
              Planning
            </button>
<button className="cpv-pill inline-flex items-center justify-center h-10 px-4 md:px-5 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-medium whitespace-nowrap flex-shrink-0 hover:bg-gray-50 transition-colors">
              Research
            </button>
<button className="cpv-pill inline-flex items-center justify-center h-10 px-4 md:px-5 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-medium whitespace-nowrap flex-shrink-0 hover:bg-gray-50 transition-colors">
              Design Sprint
            </button>
<button className="cpv-pill inline-flex items-center justify-center h-10 px-4 md:px-5 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-medium whitespace-nowrap flex-shrink-0 hover:bg-gray-50 transition-colors">
              Workshops
            </button>
<button className="cpv-pill inline-flex items-center justify-center h-10 px-4 md:px-5 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-medium whitespace-nowrap flex-shrink-0 hover:bg-gray-50 transition-colors">
<i data-lucide="sliders-horizontal" style={{width: '15px', height: '15px', verticalAlign: 'middle', marginRight: '7px'}}></i>
              Filters
            </button>
</div>
<div className="cpv-template-grid">
<article className="cpv-card">
<div className="cpv-card-preview">
<div className="cpv-drawn-line" style={{left: '64px', top: '28px', width: '180px', height: '116px'}}></div>
<div className="cpv-drawn-line" style={{left: '50px', top: '84px', width: '170px', height: '98px'}}></div>
<div style={{position: 'absolute', left: '116px', top: '26px', borderRadius: '999px', background: '#a8efcf', padding: '7px 22px', fontFamily: 'Patrick Hand, Inter, sans-serif', fontSize: '16px', fontWeight: '700'}}>
                  BIG IDEA
                </div>
<div style={{position: 'absolute', left: '24px', top: '62px', borderRadius: '4px', border: '1px solid #d1d5db', background: '#fff', padding: '6px 11px', fontSize: '10px', fontWeight: '700'}}>
                  What's the problem?
                </div>
<div style={{position: 'absolute', right: '20px', top: '62px', borderRadius: '4px', border: '1px solid #d1d5db', background: '#fff', padding: '6px 11px', fontSize: '10px', fontWeight: '700'}}>
                  What are the blockers?
                </div>
<div style={{position: 'absolute', left: '112px', bottom: '34px', borderRadius: '4px', border: '1px solid #d1d5db', background: '#fff', padding: '6px 11px', fontSize: '10px', fontWeight: '700'}}>
                  What's our next step?
                </div>
<div style={{position: 'absolute', left: '128px', top: '96px', width: '48px', height: '48px', border: '1.5px solid #111', borderRadius: '999px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<svg aria-hidden="true" className="lucide lucide-users-round" data-lucide="users-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '22px', height: '22px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 21a8 8 0 0 0-16 0"></path>
<circle cx="10" cy="8" r="5"></circle>
<path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
</svg>
</div>
<span style={{position: 'absolute', left: '30px', top: '102px', width: '30px', height: '30px', background: '#bbf7d0'}}></span>
<span style={{position: 'absolute', left: '80px', top: '100px', width: '30px', height: '30px', background: '#bfdbfe'}}></span>
<span style={{position: 'absolute', right: '96px', top: '100px', width: '30px', height: '30px', background: '#fde68a'}}></span>
<span style={{position: 'absolute', right: '42px', top: '100px', width: '30px', height: '30px', background: '#fecdd3'}}></span>
<span style={{position: 'absolute', left: '44px', top: '150px', width: '30px', height: '30px', background: '#ddd6fe'}}></span>
<span style={{position: 'absolute', left: '96px', top: '150px', width: '30px', height: '30px', background: '#fbcfe8'}}></span>
<span style={{position: 'absolute', right: '72px', top: '150px', width: '30px', height: '30px', background: '#bbf7d0'}}></span>
</div>
<div className="cpv-card-title">
<div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
<span style={{display: 'flex', width: '34px', height: '34px', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', background: '#dcfce7'}}>
<svg aria-hidden="true" className="lucide lucide-users-round" data-lucide="users-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 21a8 8 0 0 0-16 0"></path>
<circle cx="10" cy="8" r="5"></circle>
<path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
</svg>
</span>
<div></div>
</div>
<div>
<span className="cpv-badge cpv-popular">Popular</span>
<span className="cpv-badge cpv-free">Free</span>
</div>
</div>
</article>
<article className="cpv-card">
<div className="cpv-card-preview" style={{background: '#f8fbff'}}>
<div className="" style={{position: 'absolute', left: '92px', top: '18px', color: '#148dff', fontFamily: 'Patrick Hand, Inter, sans-serif', fontSize: '18px', fontWeight: '600', fontStyle: 'italic'}}>
                  PROJECT ROADMAP
                </div>
<div className="" style={{position: 'absolute', left: '44px', right: '30px', top: '52px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '8px', textAlign: 'center', fontSize: '10px', fontWeight: '700'}}>
<span style={{background: '#bbf7d0', borderRadius: '4px', padding: '5px'}}>
                    Q1
                  </span>
<span style={{background: '#fde68a', borderRadius: '4px', padding: '5px'}}>
                    Q2
                  </span>
<span style={{background: '#bfdbfe', borderRadius: '4px', padding: '5px'}}>
                    Q3
                  </span>
<span className="" style={{background: '#ddd6fe', borderRadius: '4px', padding: '5px'}}>
                    Q4
                  </span>
</div>
<span style={{position: 'absolute', left: '34px', top: '90px', fontSize: '10px', fontWeight: '700'}}>
                  Milestones
                </span>
<span style={{position: 'absolute', left: '34px', top: '120px', fontSize: '10px', fontWeight: '700'}}>
                  Product
                </span>
<span style={{position: 'absolute', left: '34px', top: '150px', fontSize: '10px', fontWeight: '700'}}>
                  Design
                </span>
<div className="cpv-roadmap-row" style={{top: '94px', background: '#bbf7d0', width: '52%', left: '116px'}}></div>
<div className="cpv-roadmap-row" style={{top: '124px', background: '#bfdbfe', width: '58%', left: '150px'}}></div>
<div className="cpv-roadmap-row" style={{top: '154px', background: '#fde68a', width: '42%', left: '132px'}}></div>
<div className="cpv-roadmap-row" style={{top: '174px', background: '#fbcfe8', width: '70%', left: '84px'}}></div>
<span style={{position: 'absolute', left: '112px', top: '88px', width: '10px', height: '10px', border: '1px solid #111', background: '#fff'}}></span>
<span style={{position: 'absolute', left: '190px', top: '88px', width: '10px', height: '10px', border: '1px solid #111', background: '#fff'}}></span>
<span style={{position: 'absolute', left: '258px', top: '88px', width: '10px', height: '10px', border: '1px solid #111', background: '#fff'}}></span>
</div>
<div className="cpv-card-title">
<div className="" style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
<span className="" style={{display: 'flex', width: '34px', height: '34px', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', background: '#dbeafe'}}>
<svg aria-hidden="true" className="lucide lucide-flag" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
</svg>
</span>
<div className=""></div>
</div>
<span className="cpv-badge cpv-blue">Used by 3.1k teams</span>
</div>
</article>
<article className="cpv-card">
<div className="cpv-card-preview" style={{background: '#fffaf4'}}>
<div style={{position: 'absolute', left: '76px', top: '18px', color: '#d97706', fontFamily: 'Patrick Hand, Inter, sans-serif', fontSize: '18px', fontWeight: '600', fontStyle: 'italic'}}>
                  USER JOURNEY MAP
                </div>
<div style={{position: 'absolute', left: '38px', right: '24px', top: '52px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '7px', textAlign: 'center', fontSize: '9px', fontWeight: '700'}}>
<span style={{background: '#bbf7d0', borderRadius: '4px', padding: '5px'}}>
                    Awareness
                  </span>
<span style={{background: '#fde68a', borderRadius: '4px', padding: '5px'}}>
                    Consideration
                  </span>
<span style={{background: '#bfdbfe', borderRadius: '4px', padding: '5px'}}>
                    Decision
                  </span>
<span style={{background: '#ddd6fe', borderRadius: '4px', padding: '5px'}}>
                    Retention
                  </span>
</div>
<div className="cpv-map-grid">
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span className=""></span>
<span className=""></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
</div>
<div className="" style={{position: 'absolute', left: '28px', top: '88px', fontSize: '10px', fontWeight: '700', lineHeight: '34px'}}>
                  Actions
                  <br/>
                  Touchpoints
                  <br/>
                  Feeling
                  <br/>
                  Opportunities
                </div>
<i className="h-4 w-4" data-lucide="search"></i>
<svg aria-hidden="true" className="lucide lucide-monitor" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{position: 'absolute', left: '178px', top: '107px', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
<svg aria-hidden="true" className="lucide lucide-shopping-cart" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{position: 'absolute', left: '240px', top: '107px', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="21" r="1"></circle>
<circle cx="19" cy="21" r="1"></circle>
<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
</svg>
<svg aria-hidden="true" className="lucide lucide-mail" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{position: 'absolute', right: '34px', top: '107px', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
<span style={{position: 'absolute', left: '110px', bottom: '26px', width: '30px', height: '30px', background: '#bbf7d0'}}></span>
<span style={{position: 'absolute', left: '174px', bottom: '26px', width: '30px', height: '30px', background: '#fde68a'}}></span>
<span style={{position: 'absolute', left: '238px', bottom: '26px', width: '30px', height: '30px', background: '#bfdbfe'}}></span>
<span style={{position: 'absolute', right: '34px', bottom: '26px', width: '30px', height: '30px', background: '#ddd6fe'}}></span>
</div>
<div className="cpv-card-title">
<div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
<span style={{display: 'flex', width: '34px', height: '34px', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', background: '#fef3c7'}}>
<svg aria-hidden="true" className="lucide lucide-user-round" data-lucide="user-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="8" r="5"></circle>
<path d="M20 21a8 8 0 0 0-16 0"></path>
</svg>
</span>
<div></div>
</div>
<div>
<span className="cpv-badge cpv-popular">Popular</span>
<span className="cpv-badge cpv-free">Free</span>
</div>
</div>
</article>
<article className="cpv-card">
<div className="cpv-card-preview">
<div className="cpv-drawn-line" style={{left: '64px', top: '28px', width: '180px', height: '116px'}}></div>
<div className="cpv-drawn-line" style={{left: '50px', top: '84px', width: '170px', height: '98px'}}></div>
<div className="" style={{position: 'absolute', left: '116px', top: '26px', borderRadius: '999px', background: '#a8efcf', padding: '7px 22px', fontFamily: 'Patrick Hand, Inter, sans-serif', fontSize: '16px', fontWeight: '700'}}>
                  RETROSPECTIVE
                </div>
<div style={{position: 'absolute', left: '24px', top: '62px', borderRadius: '4px', border: '1px solid #d1d5db', background: '#fff', padding: '6px 11px', fontSize: '10px', fontWeight: '700'}}>
                  What went well?
                </div>
<div style={{position: 'absolute', right: '20px', top: '62px', borderRadius: '4px', border: '1px solid #d1d5db', background: '#fff', padding: '6px 11px', fontSize: '10px', fontWeight: '700'}}>
                  What to improve?
                </div>
<div style={{position: 'absolute', left: '112px', bottom: '34px', borderRadius: '4px', border: '1px solid #d1d5db', background: '#fff', padding: '6px 11px', fontSize: '10px', fontWeight: '700'}}>
                  Action items
                </div>
<div style={{position: 'absolute', left: '128px', top: '96px', width: '48px', height: '48px', border: '1.5px solid #111', borderRadius: '999px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<svg aria-hidden="true" className="lucide lucide-users-round" data-lucide="users-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '22px', height: '22px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 21a8 8 0 0 0-16 0"></path>
<circle cx="10" cy="8" r="5"></circle>
<path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
</svg>
</div>
<span style={{position: 'absolute', left: '30px', top: '102px', width: '30px', height: '30px', background: '#bbf7d0'}}></span>
<span className="" style={{position: 'absolute', left: '80px', top: '100px', width: '30px', height: '30px', background: '#bfdbfe'}}></span>
<span style={{position: 'absolute', right: '96px', top: '100px', width: '30px', height: '30px', background: '#fde68a'}}></span>
<span style={{position: 'absolute', right: '42px', top: '100px', width: '30px', height: '30px', background: '#fecdd3'}}></span>
<span style={{position: 'absolute', left: '44px', top: '150px', width: '30px', height: '30px', background: '#ddd6fe'}}></span>
<span style={{position: 'absolute', left: '96px', top: '150px', width: '30px', height: '30px', background: '#fbcfe8'}}></span>
<span style={{position: 'absolute', right: '72px', top: '150px', width: '30px', height: '30px', background: '#bbf7d0'}}></span>
</div>
<div className="cpv-card-title">
<div className="" style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
<span style={{display: 'flex', width: '34px', height: '34px', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', background: '#dcfce7'}}>
<svg aria-hidden="true" className="lucide lucide-users-round" data-lucide="users-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 21a8 8 0 0 0-16 0"></path>
<circle cx="10" cy="8" r="5"></circle>
<path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
</svg>
</span>
<div></div>
</div>
<div>
<span className="cpv-badge cpv-popular">Popular</span>
<span className="cpv-badge cpv-free">Free</span>
</div>
</div>
</article>
<article className="cpv-card">
<div className="cpv-card-preview" style={{background: '#f0fdf4'}}>
<div className="" style={{position: 'absolute', left: '92px', top: '18px', color: '#16a34a', fontFamily: 'Patrick Hand, Inter, sans-serif', fontSize: '18px', fontWeight: '600', fontStyle: 'italic'}}>
                  MARKETING PLAN
                </div>
<div className="" style={{position: 'absolute', left: '44px', right: '30px', top: '52px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '8px', textAlign: 'center', fontSize: '10px', fontWeight: '700'}}>
<span style={{background: '#bbf7d0', borderRadius: '4px', padding: '5px'}}>
                    Web
                  </span>
<span style={{background: '#fde68a', borderRadius: '4px', padding: '5px'}}>
                    Email
                  </span>
<span style={{background: '#bfdbfe', borderRadius: '4px', padding: '5px'}}>
                    Social
                  </span>
<span className="" style={{background: '#ddd6fe', borderRadius: '4px', padding: '5px'}}>
                    Ads
                  </span>
</div>
<span style={{position: 'absolute', left: '34px', top: '90px', fontSize: '10px', fontWeight: '700'}}>
                  Q1 Goals
                </span>
<span style={{position: 'absolute', left: '34px', top: '120px', fontSize: '10px', fontWeight: '700'}}>
                  Q2 Goals
                </span>
<span style={{position: 'absolute', left: '34px', top: '150px', fontSize: '10px', fontWeight: '700'}}>
                  Q3 Goals
                </span>
<div className="cpv-roadmap-row" style={{top: '94px', background: '#bbf7d0', width: '52%', left: '116px'}}></div>
<div className="cpv-roadmap-row" style={{top: '124px', background: '#bfdbfe', width: '58%', left: '150px'}}></div>
<div className="cpv-roadmap-row" style={{top: '154px', background: '#fde68a', width: '42%', left: '132px'}}></div>
<div className="cpv-roadmap-row" style={{top: '174px', background: '#fbcfe8', width: '70%', left: '84px'}}></div>
<span style={{position: 'absolute', right: '42px', top: '100px', width: '30px', height: '30px', background: '#fecdd3'}}></span>
<span style={{position: 'absolute', left: '44px', top: '150px', width: '30px', height: '30px', background: '#ddd6fe'}}></span>
<span style={{position: 'absolute', left: '96px', top: '150px', width: '30px', height: '30px', background: '#fbcfe8'}}></span>
</div>
<div className="cpv-card-title">
<div className="" style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
<span className="" style={{display: 'flex', width: '34px', height: '34px', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', background: '#dcfce7'}}>
<svg aria-hidden="true" className="lucide lucide-flag" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
</svg>
</span>
<div className=""></div>
</div>
<span className="cpv-badge cpv-blue">Used by 3.1k teams</span>
</div>
</article>
<article className="cpv-card">
<div className="cpv-card-preview" style={{background: '#fef2f2'}}>
<div style={{position: 'absolute', left: '76px', top: '18px', color: '#dc2626', fontFamily: 'Patrick Hand, Inter, sans-serif', fontSize: '18px', fontWeight: '600', fontStyle: 'italic'}}>
                  EMPATHY MAP
                </div>
<div style={{position: 'absolute', left: '38px', right: '24px', top: '52px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '7px', textAlign: 'center', fontSize: '9px', fontWeight: '700'}}>
<span style={{background: '#bbf7d0', borderRadius: '4px', padding: '5px'}}>
                    Says
                  </span>
<span style={{background: '#fde68a', borderRadius: '4px', padding: '5px'}}>
                    Thinks
                  </span>
<span style={{background: '#bfdbfe', borderRadius: '4px', padding: '5px'}}>
                    Does
                  </span>
<span style={{background: '#ddd6fe', borderRadius: '4px', padding: '5px'}}>
                    Feels
                  </span>
</div>
<div className="cpv-map-grid">
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
</div>
<div style={{position: 'absolute', left: '28px', top: '88px', fontSize: '10px', fontWeight: '700', lineHeight: '34px'}}>
                  Quotes
                  <br/>
                  Internal
                  <br/>
                  Actions
                  <br/>
                  Emotions
                </div>
<i className="h-4 w-4" data-lucide="search"></i>
<svg aria-hidden="true" className="lucide lucide-monitor" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{position: 'absolute', left: '178px', top: '107px', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
<svg aria-hidden="true" className="lucide lucide-shopping-cart" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{position: 'absolute', left: '240px', top: '107px', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="21" r="1"></circle>
<circle cx="19" cy="21" r="1"></circle>
<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
</svg>
<svg aria-hidden="true" className="lucide lucide-mail" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{position: 'absolute', right: '34px', top: '107px', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
<span style={{position: 'absolute', left: '110px', bottom: '26px', width: '30px', height: '30px', background: '#bbf7d0'}}></span>
<span style={{position: 'absolute', left: '174px', bottom: '26px', width: '30px', height: '30px', background: '#fde68a'}}></span>
<span style={{position: 'absolute', left: '238px', bottom: '26px', width: '30px', height: '30px', background: '#bfdbfe'}}></span>
<span style={{position: 'absolute', right: '34px', bottom: '26px', width: '30px', height: '30px', background: '#ddd6fe'}}></span>
</div>
<div className="cpv-card-title">
<div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
<span style={{display: 'flex', width: '34px', height: '34px', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', background: '#fee2e2'}}>
<svg aria-hidden="true" className="lucide lucide-user-round" data-lucide="user-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="8" r="5"></circle>
<path d="M20 21a8 8 0 0 0-16 0"></path>
</svg>
</span>
<div></div>
</div>
<div>
<span className="cpv-badge cpv-popular">Popular</span>
<span className="cpv-badge cpv-free">Free</span>
</div>
</div>
</article>
<div className="col-span-full w-full flex justify-center mt-6" style={{gridColumn: '1 / -1'}}>
<button className="px-8 py-3 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-50 transition-colors shadow-sm cursor-pointer inline-flex items-center justify-center">
                View More
              </button>
</div>
</div>
</div>
</section>
<section className="relative overflow-hidden bg-[#07111F] py-20 sm:py-24" style={{fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', backgroundImage: 'radial-gradient(circle at 18% 10%, rgba(19,168,255,0.14), transparent 34%), radial-gradient(circle at 82% 18%, rgba(244,114,182,0.13), transparent 32%), linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: 'auto, auto, 48px 48px, 48px 48px'}}>
<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<style>
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-12px); }
              100% { transform: translateY(0px); }
            }

            .float-1 { animation: float 4s ease-in-out infinite; }
            .float-2 { animation: float 5s ease-in-out infinite 1s; }
            .float-3 { animation: float 4.5s ease-in-out infinite 2s; }
            .float-4 { animation: float 5.5s ease-in-out infinite 0.5s; }
            .float-5 { animation: float 4.8s ease-in-out infinite 1.5s; }
            .float-6 { animation: float 5.2s ease-in-out infinite 2.5s; }
            .float-7 { animation: float 4.2s ease-in-out infinite 0.8s; }
            .float-8 { animation: float 5.8s ease-in-out infinite 1.2s; }
            .test-transition { transition: opacity 0.3s ease-in-out; }

            .testimonial-dark-card {
              background: rgba(255, 255, 255, 0.94);
              border: 2px solid #050505;
              border-radius: 28px;
              box-shadow: 0 28px 70px rgba(2, 8, 23, 0.45), 0 8px 0 rgba(19, 168, 255, 0.18);
            }
          </style>
<span className="absolute left-[12%] top-28 h-2 w-2 rounded-full bg-red-400/80"></span>
<span className="absolute left-[30%] top-48 h-2 w-2 rounded-full bg-red-400/80"></span>
<span className="absolute right-[22%] top-28 h-2 w-2 rounded-full bg-sky-400"></span>
<span className="absolute right-[24%] top-80 h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="absolute bottom-16 left-[20%] h-2 w-2 rounded-full bg-amber-300"></span>
<span className="absolute bottom-16 right-[17%] h-2 w-2 rounded-full bg-violet-400"></span>

<img alt="team member avatar" className="float-1 absolute left-[12%] top-40 hidden h-16 w-16 rounded-full border-4 border-white object-cover shadow-2xl md:block" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=crop&amp;w=160&amp;q=80"/>
<img alt="team member avatar" className="float-2 absolute bottom-24 left-[13%] hidden h-12 w-12 rounded-full border-4 border-white object-cover shadow-2xl md:block" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=160&amp;q=80"/>
<img alt="team member avatar" className="float-3 absolute right-[12%] top-32 hidden h-16 w-16 rounded-full border-4 border-white object-cover shadow-2xl md:block" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=160&amp;q=80"/>
<img alt="team member avatar" className="float-4 absolute bottom-24 right-[11%] hidden h-12 w-12 rounded-full border-4 border-white object-cover shadow-2xl md:block" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=160&amp;q=80"/>

<img alt="team member avatar" className="float-5 absolute left-[22%] top-20 hidden h-10 w-10 rounded-full border-2 border-white object-cover shadow-xl lg:block" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=160&amp;q=80"/>
<img alt="team member avatar" className="float-6 absolute right-[26%] top-48 hidden h-14 w-14 rounded-full border-4 border-white object-cover shadow-2xl xl:block" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=160&amp;q=80"/>
<img alt="team member avatar" className="float-7 absolute left-[8%] top-72 hidden h-12 w-12 rounded-full border-4 border-white object-cover shadow-xl xl:block" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&amp;fit=crop&amp;w=160&amp;q=80"/>
<img alt="team member avatar" className="float-8 absolute right-[20%] bottom-32 hidden h-10 w-10 rounded-full border-2 border-white object-cover shadow-xl lg:block" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=160&amp;q=80"/>
<div className="mx-auto max-w-4xl text-center">
<div className="mb-5 flex items-center justify-center gap-3 text-sky-400">
<span className="h-5 w-6 rotate-[-25deg] border-t-2 border-sky-400"></span>
<p className="text-base font-normal uppercase italic tracking-tight">
                Testimonials
              </p>
<span className="h-5 w-6 rotate-[25deg] border-t-2 border-sky-400"></span>
</div>
<h2 className="text-5xl font-normal leading-none tracking-tight text-white sm:text-6xl lg:text-7xl" style={{fontFamily: '"Chewy", cursive'}}>
              Teams love how
              <br className="hidden sm:block"/>
              ideas come
              <span className="relative inline-block">
                together.
                <span className="absolute -bottom-1 left-0 h-1.5 w-full -rotate-2 rounded-full bg-sky-400"></span>
</span>
</h2>
<p className="mx-auto mt-6 max-w-xl text-sm font-normal leading-relaxed tracking-tight text-slate-300">
              From first brainstorm to final presentation, Canvas helps teams
              collaborate faster, stay aligned, and move work forward.
            </p>
</div>
<div className="relative mx-auto mt-12 max-w-3xl text-center">
<div className="testimonial-dark-card test-transition px-8 py-10 sm:px-16" id="testimonial-content-container">
<img alt="Raymond Galario" className="mx-auto h-24 w-24 sm:h-28 sm:w-28 rounded-full border-4 border-white object-cover shadow-xl" id="test-avatar" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=220&amp;q=80"/>
<h3 className="mt-5 text-lg font-normal tracking-tight text-black" id="test-name">
                Raymond Galario
              </h3>
<p className="text-sm font-normal leading-tight text-slate-600" id="test-title">
                Creative Director, Studio North
                <br/>
                Sydney, Australia
              </p>
<div className="mt-4 flex justify-center gap-1 text-amber-400">
<i className="h-5 w-5 fill-current" data-lucide="star"></i>
<i className="h-5 w-5 fill-current" data-lucide="star"></i>
<i className="h-5 w-5 fill-current" data-lucide="star"></i>
<i className="h-5 w-5 fill-current" data-lucide="star"></i>
<i className="h-5 w-5 fill-current" data-lucide="star"></i>
</div>
<div className="relative mx-auto mt-4 max-w-xl px-2 sm:px-8">
<span className="absolute -left-2 sm:-left-6 -top-8 text-7xl sm:text-9xl font-normal leading-none text-slate-200">
                  “
                </span>
<p className="relative z-10 text-base font-normal leading-relaxed tracking-tight text-black" id="test-quote">
                  Canvas helps our team turn scattered ideas into clear plans.
                  It’s simple, collaborative, and keeps everyone moving in the
                  same direction.
                </p>
<span className="absolute -bottom-10 sm:-bottom-14 right-0 text-7xl sm:text-9xl font-normal leading-none text-slate-200">
                  ”
                </span>
</div>
</div>
</div>

</div>
</section>
<footer className="canvas-footer-section">
<style>
          .canvas-footer-section{position:relative;overflow:hidden;background:#fff;color:#050505;font-family:'Courier New',monospace;padding:72px 24px 28px}.canvas-footer-section:before{content:'';position:absolute;inset:0;opacity:.62;background-image:linear-gradient(to right,rgba(15,23,42,.06) 1px,transparent 1px),linear-gradient(to bottom,rgba(15,23,42,.06) 1px,transparent 1px);background-size:36px 36px}.canvas-footer-inner{position:relative;z-index:2;max-width:1120px;margin:0 auto}.canvas-footer-cta{text-align:center;position:relative;min-height:250px}.canvas-footer-title{margin:0 auto;font-family:'Chewy',cursive;font-size:clamp(44px,6vw,64px);font-weight:400;line-height:.95;letter-spacing:-.02em;max-width:640px}.canvas-footer-sub{max-width:480px;margin:18px auto 0;font-size:16px;font-weight:700;line-height:1.35}.canvas-footer-actions{margin-top:30px;display:flex;align-items:center;justify-content:center;gap:42px}.canvas-footer-primary{display:inline-flex;min-width:184px;height:48px;align-items:center;justify-content:center;border:2px solid #050505;border-radius:9px;background:#0878ff;color:#fff;font-size:15px;font-weight:700;text-decoration:none;box-shadow:inset 0 0 0 2px rgba(255,255,255,.75),0 3px 0 rgba(0,0,0,.18)}.canvas-footer-link{position:relative;color:#050505;font-size:15px;font-weight:700;text-decoration:none}.canvas-footer-link:after{content:'';position:absolute;left:0;right:-3px;bottom:-7px;height:3px;border-radius:999px;background:#0878ff;transform:rotate(-2deg)}.canvas-footer-dot{position:absolute;width:8px;height:8px;border-radius:999px}.canvas-footer-dot.red{left:7%;top:48px;background:#ff5f64}.canvas-footer-dot.green{left:14%;top:178px;background:#4ade80}.canvas-footer-dot.blue{right:12%;top:48px;background:#1682ff}.canvas-footer-dot.yellow{right:16%;top:188px;background:#f59e0b}.canvas-footer-mark{position:absolute;pointer-events:none}.canvas-footer-mark.spark-left{left:30%;top:4px;width:34px;height:34px}.canvas-footer-mark.spark-mid{left:53%;top:148px;width:30px;height:30px}.canvas-footer-mark.swirl{right:21%;top:88px;width:78px;height:78px}.canvas-footer-links{display:grid;grid-template-columns:1.35fr repeat(4,1fr);gap:46px;margin-top:30px;padding-top:34px;align-items:start}.canvas-footer-brand{padding-right:48px;border-right:1px solid #e5e7eb}.canvas-footer-logo-row{display:flex;align-items:center;gap:16px;margin-bottom:20px}.canvas-footer-logo{position:relative;width:50px;height:50px;display:flex;align-items:center;justify-content:center;border:2px solid #050505;border-radius:999px;background:white;font-family:'Chewy',cursive;font-size:34px;line-height:1}.canvas-footer-logo:after{content:'';position:absolute;right:-13px;top:-10px;width:20px;height:20px;background:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 fill=%22none%22%3E%3Cpath d=%22M8 3l-4 4M13 2l-2 6M16 8l-6 2%22 stroke=%22%230878ff%22 strokeWidth=%222%22 strokeLinecap=%22round%22/%3E%3C/svg%3E') center/contain no-repeat}.canvas-footer-brand-name{font-family:'Chewy',cursive;font-size:34px;letter-spacing:-.02em}.canvas-footer-desc{max-width:220px;margin:0;font-size:14px;font-weight:700;line-height:1.55}.canvas-footer-col{min-height:150px;padding-left:32px;border-left:1px solid #e5e7eb}.canvas-footer-col h3{margin:0 0 18px;font-family:'Chewy',cursive;font-size:18px;font-weight:400}.canvas-footer-col a{display:block;margin-top:13px;color:#050505;font-size:13px;font-weight:700;text-decoration:none}.canvas-footer-bottom{display:flex;align-items:center;justify-content:space-between;gap:24px;margin-top:40px;padding-top:22px;border-top:1px solid #cfcfcf;font-size:13px;font-weight:700}.canvas-footer-bottom-right{display:flex;align-items:center;gap:20px}.canvas-footer-legal{display:flex;align-items:center;gap:18px}.canvas-footer-legal a{color:#050505;text-decoration:none}.canvas-footer-divider{width:1px;height:18px;background:#d7d7d7}.canvas-footer-socials{display:flex;gap:16px}.canvas-footer-social{width:28px;height:28px;display:flex;align-items:center;justify-content:center;border:2px solid #111;border-radius:5px;background:#fff;color:#111;font-family:Arial,sans-serif;font-size:14px;font-weight:800;text-decoration:none;box-shadow:0 1px 0 rgba(0,0,0,.14)}.canvas-footer-heart{position:absolute;right:0;bottom:36px;width:44px;height:44px}@media(max-width:900px){.canvas-footer-section{padding-top:58px}.canvas-footer-actions{gap:22px;flex-wrap:wrap}.canvas-footer-links{grid-template-columns:1fr 1fr;gap:30px}.canvas-footer-brand{grid-column:1/-1;border-right:0;border-bottom:1px solid #e5e7eb;padding-right:0;padding-bottom:26px}.canvas-footer-col{padding-left:0;border-left:0}.canvas-footer-bottom{flex-direction:column;align-items:flex-start}.canvas-footer-heart,.canvas-footer-mark,.canvas-footer-dot{display:none}}@media(max-width:560px){.canvas-footer-links{grid-template-columns:1fr}.canvas-footer-bottom-right{flex-direction:column;align-items:flex-start;gap:16px}}
        </style>
<div className="canvas-footer-inner">
<div className="canvas-footer-cta">
<span className="canvas-footer-dot red"></span>
<span className="canvas-footer-dot green"></span>
<span className="canvas-footer-dot blue"></span>
<span className="canvas-footer-dot yellow"></span>
<svg className="canvas-footer-mark spark-left" fill="none" viewbox="0 0 34 34">
<path d="M8 12 2 8M17 9l-2-7M24 15l7-1" stroke="#0878ff" strokeLinecap="round" strokeWidth="2.2"></path></svg><svg className="canvas-footer-mark spark-mid" fill="none" viewbox="0 0 30 30">
<path d="M8 13 3 10M15 8l2-5M20 15l6-2" stroke="#0878ff" strokeLinecap="round" strokeWidth="2"></path></svg><svg className="canvas-footer-mark swirl" fill="none" viewbox="0 0 78 78">
<path d="M18 52c18 12 40-5 29-21-8-11-25 0-19 12 7 15 31 3 30-20" stroke="#0878ff" strokeLinecap="round" strokeWidth="2.2"></path>
<path d="M52 24l7-1 1 8" stroke="#0878ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2"></path>
</svg>
<h2 className="canvas-footer-title">
              Ready to bring
              <br/>
              your ideas together?
            </h2>
<p className="canvas-footer-sub">
              Brainstorm, collaborate, and turn ideas into action—together, all
              in Canvas.
            </p>
<div className="canvas-footer-actions">
<a className="canvas-footer-primary" href="#">Start for free</a>
<a className="canvas-footer-link" href="#">Book demo</a>
</div>
</div>
<div className="canvas-footer-links">
<div className="canvas-footer-brand">
<div className="canvas-footer-logo-row">
<div className="canvas-footer-logo">C</div>
<div className="canvas-footer-brand-name">Canvas</div>
</div>
<p className="canvas-footer-desc">
                A visual collaboration workspace for teams to brainstorm, plan,
                and present together.
              </p>
</div>
<nav aria-label="Product links" className="canvas-footer-col">
<h3>Product</h3>
<a href="#">Features</a>
<a href="#">Templates</a>
<a href="#">Use Cases</a>
<a href="#">Pricing</a>
</nav>
<nav aria-label="Resources links" className="canvas-footer-col">
<h3>Resources</h3>
<a href="#">Help Center</a>
<a href="#">Blog</a>
<a href="#">Community</a>
<a href="#">Contact</a>
</nav>
<nav aria-label="Company links" className="canvas-footer-col">
<h3>Company</h3>
<a href="#">About</a>
<a href="#">Careers</a>
<a href="#">Privacy</a>
<a href="#">Terms</a>
</nav>
<nav aria-label="Compare and tools links" className="canvas-footer-col">
<h3>Compare / Tools</h3>
<a href="#">Whiteboards</a>
<a href="#">Moodboards</a>
<a href="#">Presentations</a>
<a href="#">Team comments</a>
</nav>
</div>
<div className="canvas-footer-bottom">
<p>© 2026 Canvas. All rights reserved.</p>
<div className="canvas-footer-bottom-right">
<div className="canvas-footer-legal">
<a href="#">Privacy</a>
<span className="canvas-footer-divider"></span>
<a href="#">Terms</a>
<span className="canvas-footer-divider"></span>
<a href="#">Status</a>
</div>
<div className="canvas-footer-socials">
<a aria-label="X" className="canvas-footer-social" href="#">𝕏</a>
<a aria-label="LinkedIn" className="canvas-footer-social" href="#">
                  in
                </a>
<a aria-label="Discord" className="canvas-footer-social" href="#">
                  ⌘
                </a>
</div>
</div>
</div>
<svg className="canvas-footer-heart" fill="none" viewbox="0 0 44 44">
<path d="M19 31C10 24 7 18 11 14c3-3 7-1 9 4 3-5 8-5 10-1 3 5-2 11-11 14Z" stroke="#0878ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2"></path>
<path d="M33 10l5-3M35 16h5M28 8l1-5" stroke="#0878ff" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</footer>
</main>



    </>
  );
}
