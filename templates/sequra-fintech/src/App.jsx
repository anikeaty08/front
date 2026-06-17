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



tailwind.config = {
theme: { extend: {
fontFamily: { serif: ['"Cormorant Garamond"','serif'], sans: ['Inter','sans-serif'], mono: ['"JetBrains Mono"','monospace'] },
colors: { brand: { bg:'#050505', cream:'#eae4d8', gold:'#c5a67c', muted:'#7a7a7a', dark:'#111111' } }
}}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      (function(){var canvas=document.getElementById('sq-scene');if(!canvas)return;var ctx=canvas.getContext('2d');var W,H,DPR;function resize(){DPR=Math.min(window.devicePixelRatio||1,2);var r=canvas.getBoundingClientRect();W=r.width;H=r.height;canvas.width=W*DPR;canvas.height=H*DPR;ctx.setTransform(DPR,0,0,DPR,0,0);}window.addEventListener('resize',resize);resize();function iso(x,y,z,scale,ox,oy){return{x:ox+(x-y)*scale*0.866,y:oy+(x+y)*scale*0.5-z*scale};}function drawLattice(scale,ox,oy,t){ctx.strokeStyle='rgba(197,166,124,0.10)';ctx.lineWidth=1;var N=18;var offset=(t*2.5)%1;for(var i=-6;i<=N;i++){var idx=i+offset;var a=iso(idx,-6,0,scale,ox,oy),b=iso(idx,N,0,scale,ox,oy);ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();var c=iso(-6,idx,0,scale,ox,oy),d=iso(N,idx,0,scale,ox,oy);ctx.beginPath();ctx.moveTo(c.x,c.y);ctx.lineTo(d.x,d.y);ctx.stroke();}}function poly(pts){ctx.beginPath();ctx.moveTo(pts[0].x,pts[0].y);for(var i=1;i<pts.length;i++)ctx.lineTo(pts[i].x,pts[i].y);ctx.closePath();}function block(gx,gy,h,scale,ox,oy){var top=[iso(gx,gy,h,scale,ox,oy),iso(gx+1,gy,h,scale,ox,oy),iso(gx+1,gy+1,h,scale,ox,oy),iso(gx,gy+1,h,scale,ox,oy)];ctx.fillStyle='rgba(30,28,24,0.95)';poly(top);ctx.fill();ctx.strokeStyle='rgba(197,166,124,0.25)';poly(top);ctx.stroke();var left=[top[3],top[2],iso(gx+1,gy+1,0,scale,ox,oy),iso(gx,gy+1,0,scale,ox,oy)];ctx.fillStyle='rgba(20,18,16,0.95)';poly(left);ctx.fill();ctx.strokeStyle='rgba(197,166,124,0.12)';poly(left);ctx.stroke();var right=[top[1],top[2],iso(gx+1,gy+1,0,scale,ox,oy),iso(gx+1,gy,0,scale,ox,oy)];ctx.fillStyle='rgba(10,9,8,0.95)';poly(right);ctx.fill();ctx.strokeStyle='rgba(197,166,124,0.06)';poly(right);ctx.stroke();}function drawDiamond(cx,cy,size,t){ctx.strokeStyle='rgba(197,166,124,0.4)';ctx.lineWidth=1.5;ctx.setLineDash([4,5]);ctx.beginPath();ctx.moveTo(cx-size*2.2,cy+size*1.2);ctx.lineTo(cx-size*0.8,cy+size*0.4);ctx.stroke();ctx.setLineDash([]);var top={x:cx,y:cy-size*1.3};var bot={x:cx,y:cy+size*1.3};var l={x:cx-size*0.9,y:cy-size*0.05};var r={x:cx+size*0.9,y:cy-size*0.05};var f={x:cx,y:cy+size*0.25};ctx.fillStyle='#eae4d8';poly([top,l,f]);ctx.fill();ctx.fillStyle='#c5a67c';poly([top,r,f]);ctx.fill();ctx.fillStyle='#8a7355';poly([bot,l,f]);ctx.fill();ctx.fillStyle='#5a4d3a';poly([bot,r,f]);ctx.fill();ctx.strokeStyle='#eae4d8';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(top.x,top.y);ctx.lineTo(l.x,l.y);ctx.lineTo(bot.x,bot.y);ctx.lineTo(r.x,r.y);ctx.closePath();ctx.moveTo(top.x,top.y);ctx.lineTo(f.x,f.y);ctx.moveTo(bot.x,bot.y);ctx.lineTo(f.x,f.y);ctx.moveTo(l.x,l.y);ctx.lineTo(f.x,f.y);ctx.lineTo(r.x,r.y);ctx.stroke();}var bars=[{x:1,y:8,h:1.2},{x:2,y:8,h:0.6},{x:3,y:7,h:1.8},{x:4,y:7,h:1.1},{x:5,y:6,h:2.2},{x:6,y:6,h:1.4},{x:7,y:6,h:2.6},{x:8,y:5,h:1.9},{x:9,y:5,h:3.0},{x:10,y:4,h:2.4},{x:11,y:4,h:3.4}];function frame(ts){var t=ts*0.001;ctx.clearRect(0,0,W,H);var scale=Math.max(W,520)/24;var ox=W*0.5;var oy=H*0.18;var fl1=document.getElementById('sq-fl1');var fl2=document.getElementById('sq-fl2');if(fl1)fl1.style.transform='translate('+(Math.sin(t)*15)+'%,'+(Math.cos(t*0.8)*15)+'%) scale('+(1+Math.sin(t*1.5)*0.2)+')';if(fl2)fl2.style.transform='translate('+(Math.cos(t*1.2)*15)+'%,'+(Math.sin(t*0.9)*15)+'%)';drawLattice(scale,ox,oy,t);var sorted=bars.slice().sort(function(a,b){return(a.x+a.y)-(b.x+b.y);});sorted.forEach(function(b){var animH=b.h+Math.sin(t*2.5+b.x*0.5+b.y*0.5)*0.8;block(b.x,b.y,Math.max(0.1,animH),scale,ox,oy);});var diamonds=[{bx:W*0.18,by:H*0.50,s:20},{bx:W*0.37,by:H*0.60,s:40},{bx:W*0.55,by:H*0.33,s:35},{bx:W*0.80,by:H*0.58,s:60},{bx:W*0.81,by:H*0.23,s:16}];diamonds.forEach(function(dm,i){var fy=Math.sin(t*1.1+i*1.3)*dm.s*0.18;drawDiamond(dm.bx,dm.by+fy,dm.s,t);});requestAnimationFrame(frame);}requestAnimationFrame(frame);})();
    


      // Ambient particles
      const canvas = document.getElementById('ambient-canvas');
      const ctx = canvas.getContext('2d');
      let width, height, particles = [];
      function initCanvas(){
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        particles = [];
        for(let i=0;i<120;i++){particles.push({x:Math.random()*width,y:Math.random()*height,radius:Math.random()*1.5,vx:(Math.random()-0.5)*0.2,vy:(Math.random()-0.5)*0.2,alpha:Math.random()*0.5+0.1});}
      }
      function animateCanvas(){
        ctx.clearRect(0,0,width,height);
        ctx.fillStyle='#c5a67c';
        particles.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=width;if(p.x>width)p.x=0;if(p.y<0)p.y=height;if(p.y>height)p.y=0;ctx.globalAlpha=p.alpha;ctx.beginPath();ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);ctx.fill();});
        requestAnimationFrame(animateCanvas);
      }
      window.addEventListener('resize',initCanvas);
      initCanvas();animateCanvas();
    


      document.addEventListener('DOMContentLoaded', function () {
        gsap.registerPlugin(ScrollTrigger);
        gsap.ticker.lagSmoothing(0);

        // Native scroll progress bar
        const bar = document.getElementById('scroll-progress');
        function updateProgress() {
          const max = document.documentElement.scrollHeight - window.innerHeight || 1;
          const p = Math.min(1, Math.max(0, window.scrollY / max));
          bar.style.width = (p * 100) + '%';
        }
        window.addEventListener('scroll', updateProgress, { passive: true });
        window.addEventListener('resize', updateProgress);
        updateProgress();

        // Anchor links with header offset
        document.querySelectorAll('a[href^="#"]').forEach(a => {
          a.addEventListener('click', e => {
            const target = document.querySelector(a.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            const y = target.getBoundingClientRect().top + window.pageYOffset - 40;
            window.scrollTo({ top: y, behavior: 'smooth' });
          });
        });

        // ===== HERO intro timeline =====
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        gsap.set('.gsap-bg-img', { scale: 1.1, opacity: 0 });
        gsap.set('.gsap-curve', { scaleX: 1.2, transformOrigin: 'left center' });
        gsap.set('.gsap-text', { yPercent: 110, rotate: 3 });
        gsap.set('.gsap-element', { y: 26, opacity: 0, filter: 'blur(6px)' });
        tl.to('.gsap-bg-img', { duration: 2.4, scale: 1, opacity: 0.6, ease: 'power2.out' }, 0)
          .to('.gsap-curve', { duration: 1.9, scaleX: 1, ease: 'power4.inOut' }, 0.2)
          .to('.gsap-text', { duration: 1.25, yPercent: 0, rotate: 0, stagger: 0.14, ease: 'expo.out' }, 0.55)
          .to('.gsap-element', { duration: 1, y: 0, opacity: 1, filter: 'blur(0px)', stagger: 0.12 }, 1);

        // ===== Hero parallax =====
        gsap.to('.gsap-bg-img', { yPercent: 18, ease: 'none', scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: 1 } });
        gsap.to('#top h1', { yPercent: -30, autoAlpha: 0.2, ease: 'none', scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: 1 } });

        // ===== Animated counters =====
        document.querySelectorAll('[data-count]').forEach(el => {
          const end = parseFloat(el.getAttribute('data-count'));
          const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
          const prefix = el.getAttribute('data-prefix') || '';
          const obj = { v: 0 };
          ScrollTrigger.create({
            trigger: el, start: 'top 90%', once: true,
            onEnter: () => gsap.to(obj, {
              v: end, duration: 2, ease: 'power2.out',
              onUpdate: () => {
                const n = decimals ? obj.v.toFixed(decimals) : Math.round(obj.v).toLocaleString();
                el.textContent = prefix + n;
              }
            })
          });
        });

        // ===== Generic per-element reveals =====
        gsap.utils.toArray('.reveal').forEach(el => {
          gsap.fromTo(el,
            { y: 48, opacity: 0, filter: 'blur(8px)' },
            { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.05, ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' } });
        });

        // ===== Pinned features grid — disabled on small screens for reliable mobile scroll =====
        const featCards = gsap.utils.toArray('.feat-section .reveal.group');
        if (featCards.length) {
          gsap.set(featCards, { autoAlpha: 0, y: 70, scale: 0.95, filter: 'blur(6px)' });
          gsap.timeline({
            scrollTrigger: {
              trigger: '.feat-section',
              start: 'top top',
              end: '+=1500',
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true
            }
          }).to(featCards, { autoAlpha: 1, y: 0, scale: 1, filter: 'blur(0px)', stagger: 0.22, ease: 'power2.out' });
        }

        // ===== Sticky journey track — disabled on small screens for reliable mobile scroll =====
        const jSteps = gsap.utils.toArray('.journey-track > div');
        if (jSteps.length) {
          gsap.timeline({
            scrollTrigger: {
              trigger: '.journey-section',
              start: 'top top',
              end: '+=1600',
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true
            }
          }).from(jSteps, { xPercent: 45, autoAlpha: 0, filter: 'blur(8px)', stagger: 0.4, ease: 'none' });
        }

        // ===== Testimonials — depth reveal =====
        gsap.utils.toArray('.proof-section figure').forEach(fig => {
          gsap.fromTo(fig, { autoAlpha: 0, y: 80, rotateX: 8, filter: 'blur(6px)' },
            { autoAlpha: 1, y: 0, rotateX: 0, filter: 'blur(0px)', ease: 'power3.out',
              scrollTrigger: { trigger: fig, start: 'top 90%', end: 'top 60%', scrub: 0.8 } });
        });

        // ===== Magnetic micro-interactions =====
        document.querySelectorAll('.magnetic').forEach(el => {
          el.addEventListener('mousemove', e => {
            const r = el.getBoundingClientRect();
            const x = e.clientX - r.left - r.width / 2;
            const y = e.clientY - r.top - r.height / 2;
            gsap.to(el, { x: x * 0.3, y: y * 0.4, duration: 0.5, ease: 'power3.out' });
          });
          el.addEventListener('mouseleave', () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,0.4)' }));
        });

        window.addEventListener('load', () => ScrollTrigger.refresh());
        ScrollTrigger.refresh();
      });
    


      // ===== Journey section scroll fix + progress =====
      document.addEventListener('DOMContentLoaded', function () {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

        gsap.registerPlugin(ScrollTrigger);

        const section = document.querySelector('.journey-section');
        const steps = gsap.utils.toArray('.journey-track > div');
        const progress = document.querySelector('.journey-progress');
        if (!section || !steps.length) return;

        ScrollTrigger.getAll().forEach(function (st) {
          if (st.trigger === section && st.vars && st.vars.pin === true) st.kill(true);
        });

        const setProgress = function (value) {
          if (progress) progress.style.width = Math.round(value * 100) + '%';
        };

        gsap.matchMedia().add({
          isDesktop: '(min-width: 768px)',
          isMobile: '(max-width: 767px)'
        }, function (context) {
          const isDesktop = context.conditions.isDesktop;
          setProgress(0);

          if (isDesktop) {
            gsap.set(steps, { clearProps: 'all' });
            gsap.timeline({
              scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: '+=1400',
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate: function (self) { setProgress(self.progress); }
              }
            }).from(steps, {
              xPercent: 45,
              autoAlpha: 0,
              filter: 'blur(8px)',
              stagger: 0.35,
              ease: 'none'
            }, 0);
          } else {
            gsap.set(steps, { clearProps: 'transform,opacity,visibility,filter' });
            ScrollTrigger.create({
              trigger: section,
              start: 'top 85%',
              end: 'bottom 20%',
              scrub: true,
              invalidateOnRefresh: true,
              onUpdate: function (self) { setProgress(self.progress); }
            });
          }

          return function () { setProgress(0); };
        });

        ScrollTrigger.refresh();
      });
    


      // ===== Sticky cinematic story sequence =====
      document.addEventListener('DOMContentLoaded', function () {
        if (typeof gsap === 'undefined') return;
        gsap.registerPlugin(ScrollTrigger);
        const imgs = gsap.utils.toArray('.story-img');
        if (!imgs.length) return;
        const lines = [
          'Watch your capital move with clarity — in real time.',
          'Global payments that run themselves, fully compliant.',
          'Forecasts that tell you tomorrow, today.'
        ];
        const captionEl = document.querySelector('.story-line');
        gsap.set(imgs, { opacity: 0, scale: 1.08 });
        gsap.set(imgs[0], { opacity: 1, scale: 1 });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.story-section',
            start: 'top top',
            end: '+=2400',
            scrub: 1,
            pin: '.story-stage',
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate(self) {
              const idx = Math.min(imgs.length - 1, Math.floor(self.progress * imgs.length));
              if (captionEl && captionEl.dataset.idx != idx) {
                captionEl.dataset.idx = idx;
                captionEl.textContent = lines[idx];
                gsap.fromTo(captionEl, { autoAlpha: 0, y: 14, filter: 'blur(6px)' },
                  { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.6, ease: 'power2.out' });
              }
            }
          }
        });
        imgs.forEach((img, i) => {
          if (i === 0) return;
          tl.to(imgs[i - 1], { opacity: 0, scale: 1.12, ease: 'power2.inOut' }, i)
            .to(img, { opacity: 1, scale: 1, ease: 'power2.inOut' }, i);
        });
      });
    


      // ===== Word-by-word heading reveals =====
      document.addEventListener('DOMContentLoaded', function () {
        function splitWords(el) {
          if (el.dataset.auraSplit) return; el.dataset.auraSplit = '1';
          const tmp = document.createElement('div'); tmp.innerHTML = el.innerHTML;
          (function walk(node) {
            Array.prototype.slice.call(node.childNodes).forEach(function (n) {
              if (n.nodeType === 3) {
                const words = n.textContent.split(/(\s+)/);
                const frag = document.createDocumentFragment();
                words.forEach(function (w) {
                  if (/^\s+$/.test(w) || w === '') { frag.appendChild(document.createTextNode(w)); }
                  else { const s = document.createElement('span'); s.className = 'aura-word'; s.style.animationPlayState = 'paused'; s.textContent = w; frag.appendChild(s); }
                });
                node.replaceChild(frag, n);
              } else if (n.nodeType === 1) { walk(n); }
            });
          })(tmp);
          el.innerHTML = tmp.innerHTML;
        }
        const headings = document.querySelectorAll('h2.reveal');
        headings.forEach(splitWords);
        const io = new IntersectionObserver(function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) {
              const words = en.target.querySelectorAll('.aura-word');
              words.forEach(function (w, i) { w.style.animationDelay = (i * 0.06) + 's'; w.style.animationPlayState = 'running'; });
              io.unobserve(en.target);
            }
          });
        }, { threshold: 0.18 });
        headings.forEach(function (h) { io.observe(h); });
      });
    


      (function () {
        function playVideo(video) {
          var promise = video.play();
          if (promise && typeof promise.catch === "function") {
            promise.catch(function () {});
          }
        }

        function setupVideo(video) {
          if (video.__auraVideoReady === true) return;
          video.__auraVideoReady = true;
          video.removeAttribute("data-aura-video-ready");
          video.removeAttribute("data-aura-video-played");
          video.muted = true;
          video.playsInline = true;

          var preset = video.dataset.auraVideoPreset || "loop-in-view";
          if (preset === "hover") {
            video.addEventListener("mouseenter", function () {
              playVideo(video);
            });
            video.addEventListener("mouseleave", function () {
              video.pause();
              video.currentTime = 0;
            });
            return;
          }

          if (!("IntersectionObserver" in window)) {
            playVideo(video);
            return;
          }

          var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                if (preset === "play-once" && video.__auraVideoPlayed === true) {
                  return;
                }
                playVideo(video);
              } else {
                video.pause();
              }
            });
          }, { threshold: 0.35 });

          if (preset === "play-once") {
            video.addEventListener("ended", function () {
              video.__auraVideoPlayed = true;
            }, { once: true });
          }

          observer.observe(video);
        }

        function setupVideos() {
          document
            .querySelectorAll("video[data-aura-video-preset]")
            .forEach(setupVideo);
        }

        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", setupVideos);
        } else {
          setupVideos();
        }
      })();
    


      (function () {
        function initHeroLetterAnimation() {
          if (typeof gsap === 'undefined') return;

          var hero = document.querySelector('#top h1');
          if (!hero || hero.dataset.heroLetters === 'true') return;
          hero.dataset.heroLetters = 'true';

          var lines = hero.querySelectorAll('.gsap-text');
          if (!lines.length) return;

          gsap.killTweensOf(lines);
          gsap.set(lines, { yPercent: 0, rotate: 0 });

          lines.forEach(function (line) {
            var text = line.textContent;
            line.textContent = '';

            Array.prototype.forEach.call(text, function (ch) {
              if (ch === ' ') {
                line.appendChild(document.createTextNode(' '));
                return;
              }

              var span = document.createElement('span');
              span.className = 'hero-char char';
              span.textContent = ch;
              span.style.display = 'inline-block';
              span.style.willChange = 'transform, opacity, filter';
              line.appendChild(span);
            });
          });

          var chars = hero.querySelectorAll('.hero-char');
          gsap.set(chars, { yPercent: 110, opacity: 0, rotate: 4, filter: 'blur(8px)' });
          gsap.to(chars, {
            yPercent: 0,
            opacity: 1,
            rotate: 0,
            filter: 'blur(0px)',
            duration: 0.9,
            delay: 0.45,
            stagger: { each: 0.018, from: 'start' },
            ease: 'expo.out'
          });

          var animatingHover = false;
          function playHoverAnimation() {
            if (animatingHover) return;
            animatingHover = true;

            gsap.fromTo(chars,
              { yPercent: 34, opacity: 0.35, rotate: 2, filter: 'blur(5px)' },
              {
                yPercent: 0,
                opacity: 1,
                rotate: 0,
                filter: 'blur(0px)',
                duration: 0.72,
                stagger: { each: 0.012, from: 'random' },
                ease: 'expo.out',
                onComplete: function () { animatingHover = false; }
              }
            );
          }

          hero.addEventListener('mouseenter', playHoverAnimation);
          hero.addEventListener('focusin', playHoverAnimation);
        }

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initHeroLetterAnimation);
        } else {
          initHeroLetterAnimation();
        }
      })();
    
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
      
<div id="scroll-progress"></div>
<canvas className="fixed inset-0 z-0 pointer-events-none opacity-40" id="ambient-canvas"></canvas>
<style>
      @keyframes heroBeamFlow{from{stroke-dashoffset:100}to{stroke-dashoffset:0}}@keyframes heroBeamFadeIn{from{opacity:0}to{opacity:1}}.hero-beam{opacity:0;animation:heroBeamFadeIn .8s ease 2s forwards,heroBeamFlow 3.2s linear 2s infinite;will-change:stroke-dashoffset}
    </style>

<header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-brand-bg/60 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#top">
<svg className="transition-transform duration-500 group-hover:rotate-90" fill="none" height="26" viewbox="0 0 32 32" width="26">
<path d="M16 2 L20 12 L30 16 L20 20 L16 30 L12 20 L2 16 L12 12 Z" fill="#c5a67c"></path>
</svg>
<span className="text-sm tracking-[0.35em] font-medium uppercase">
            SEQURA
          </span>
</a>
<nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.2em] uppercase text-brand-muted">
<a className="hover:text-brand-cream transition-colors" href="#features">
            Platform
          </a>
<a className="hover:text-brand-cream transition-colors" href="#journey">
            Journey
          </a>
<a className="hover:text-brand-cream transition-colors" href="#pricing">
            Pricing
          </a>
<a className="hover:text-brand-cream transition-colors" href="#proof">
            Customers
          </a>
<a className="hover:text-brand-cream transition-colors" href="#contact">
            Contact
          </a>
</nav>
<a className="group magnetic flex items-center gap-3 bg-brand-cream text-brand-bg px-5 py-3 hover:bg-white transition-colors" href="#contact">
<span className="text-xs tracking-[0.15em] font-medium uppercase">
            Get Access
          </span>
<iconify-icon className="text-base transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</header>

<section className="relative h-screen w-full overflow-hidden" id="top">
<div className="absolute inset-0 z-0 flex justify-end overflow-hidden">
<video className="gsap-bg-img w-[60%] h-full object-cover object-left opacity-60 mix-blend-luminosity" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/225dd491-fdd9-474d-8947-f3c72f370d67/1600w.jpg" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1780052529386-823cbeff-27d2-461d-bab1-ba3ae5b5c1c7.mp4" style={{filter: 'sepia(0.3) hue-rotate(-15deg) contrast(1.1)'}}></video>
<svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[20px_0_30px_rgba(0,0,0,0.9)]" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="beamGrad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#c5a67c" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#eae4d8" stop-opacity="1"></stop>
<stop offset="100%" stop-color="#c5a67c" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="gsap-curve" d="M0,0 L0,100 L55,100 Q75,50 55,0 Z" fill="#050505"></path>
<path className="hero-beam" d="M55,0 Q75,50 55,100" fill="none" pathlength="100" stroke="url(#beamGrad)" stroke-dasharray="22 78" strokeLinecap="round" strokeWidth="0.2" style={{filter: 'drop-shadow(0 0 2px rgba(197,166,124,0.9))', animationDelay: '2s'}}></path>
</svg>
</div>
<div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-center">
<div className="gsap-element flex items-center gap-3 mb-8">
<span className="text-xs tracking-[0.3em] text-brand-gold uppercase font-mono">
            CAPITAL
          </span>
<iconify-icon className="text-brand-muted text-xs" icon="solar:close-linear"></iconify-icon>
<span className="text-xs tracking-[0.3em] text-brand-gold uppercase font-mono">
            INTELLIGENCE
          </span>
</div>
<h1 className="font-serif tracking-tight text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.9] text-brand-cream mb-10 select-none">
<div className="overflow-hidden py-1">
<span className="gsap-text inline-block">FINANCIAL CLARITY</span>
</div>
<div className="overflow-hidden py-1">
<span className="gsap-text inline-block">IS OUR</span>
</div>
<div className="overflow-hidden py-1">
<span className="gsap-text inline-block italic font-light">MEDIUM</span>
</div>
</h1>
<div className="gsap-element flex items-center gap-4 mb-8 w-64 opacity-50">
<div className="h-px flex-1 bg-gradient-to-r from-brand-muted to-transparent"></div>
<iconify-icon className="text-brand-gold text-sm" icon="solar:shield-check-linear"></iconify-icon>
<div className="h-px flex-1 bg-gradient-to-l from-brand-muted to-transparent"></div>
</div>
<p className="gsap-element text-sm md:text-base text-brand-muted max-w-md leading-relaxed mb-12">
          Sequra unifies treasury, payments, and forecasting into one
          intelligent layer — so finance teams move capital with precision,
          compliance, and confidence.
        </p>
<div className="gsap-element flex flex-wrap items-center gap-8">
<a className="relative group magnetic overflow-hidden bg-brand-cream text-brand-bg px-6 py-4 flex items-center gap-4 transition-all duration-300 hover:bg-white" href="#pricing">
<span className="text-xs tracking-[0.15em] font-medium uppercase relative z-10">
              Start Free Trial
            </span>
<iconify-icon className="text-lg relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:arrow-right-up-linear"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
</a>
<a className="group flex items-center gap-3 text-brand-muted hover:text-brand-cream transition-colors duration-300" href="#features">
<span className="text-xs tracking-[0.15em] font-medium uppercase">
              Explore Platform
            </span>
<iconify-icon className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="gsap-element absolute bottom-10 left-0 right-0 z-10 max-w-7xl mx-auto px-6 md:px-10">
<div className="flex flex-wrap items-end gap-12 md:gap-16 border-t border-white/5 pt-8 max-w-2xl">
<div className="flex flex-col gap-2">
<span className="text-[0.65rem] tracking-[0.2em] text-brand-muted uppercase font-mono">
              PROCESSED
            </span>
<div className="flex items-baseline gap-1">
<span className="font-serif text-4xl text-brand-gold" data-count="48" data-prefix="$" data-suffix="">
                $48
              </span>
<span className="font-serif text-xl text-brand-gold">B+</span>
</div>
<div className="w-4 h-px bg-brand-muted mt-1"></div>
</div>
<div className="flex flex-col gap-2">
<span className="text-[0.65rem] tracking-[0.2em] text-brand-muted uppercase font-mono">
              TEAMS
            </span>
<div className="flex items-baseline gap-1">
<span className="font-serif text-4xl text-brand-gold" data-count="3200">
                3,200
              </span>
<span className="font-serif text-xl text-brand-gold">+</span>
</div>
<div className="w-4 h-px bg-brand-muted mt-1"></div>
</div>
<div className="flex flex-col gap-2">
<span className="text-[0.65rem] tracking-[0.2em] text-brand-muted uppercase font-mono">
              UPTIME
            </span>
<div className="flex items-baseline gap-1">
<span className="font-serif text-4xl text-brand-gold" data-count="99.99" data-decimals="2">
                99.99
              </span>
<span className="font-serif text-xl text-brand-gold">%</span>
</div>
<div className="w-4 h-px bg-brand-muted mt-1"></div>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36" id="features" style={{backgroundColor: 'rgb(234, 228, 216)', color: '#111111'}}>
<div className="reveal flex items-center gap-3 mb-6">
<span className="text-xs tracking-[0.3em] text-brand-gold uppercase font-mono">
          / 01
        </span>
<span className="text-xs tracking-[0.25em] text-[#7a6f5c] uppercase font-mono">
          The Platform
        </span>
</div>
<h2 className="reveal font-serif tracking-tight text-[clamp(2rem,4.5vw,4rem)] leading-[1] mb-16 max-w-3xl text-[#111111]">
        Capabilities engineered into
        <span className="italic text-brand-gold">measurable outcomes</span>
        .
      </h2>
<div className="grid md:grid-cols-3 gap-px bg-black/5">
<div className="reveal group bg-[#f3efe6] p-8 transition-colors duration-500 hover:bg-[#ebe5d8]">
<iconify-icon className="text-brand-gold text-3xl mb-6" icon="solar:wallet-money-linear"></iconify-icon>
<h3 className="text-base tracking-wide uppercase font-medium mb-3 text-[#111111]">
            Unified Treasury
          </h3>
<p className="text-sm text-[#5a5a5a] leading-relaxed">
            See every account, currency, and balance in one live view. Reconcile
            in minutes, not days.
          </p>
</div>
<div className="reveal group bg-[#f3efe6] p-8 transition-colors duration-500 hover:bg-[#ebe5d8]">
<iconify-icon className="text-brand-gold text-3xl mb-6" icon="solar:graph-up-linear"></iconify-icon>
<h3 className="text-base tracking-wide uppercase font-medium mb-3 text-[#111111]">
            AI Forecasting
          </h3>
<p className="text-sm text-[#5a5a5a] leading-relaxed">
            Predict cash flow with models trained on your transaction history —
            accurate to the day.
          </p>
</div>
<div className="reveal group bg-[#f3efe6] p-8 transition-colors duration-500 hover:bg-[#ebe5d8]">
<iconify-icon className="text-brand-gold text-3xl mb-6" icon="solar:transfer-horizontal-linear"></iconify-icon>
<h3 className="text-base tracking-wide uppercase font-medium mb-3 text-[#111111]">
            Instant Payments
          </h3>
<p className="text-sm text-[#5a5a5a] leading-relaxed">
            Move funds globally with automated approvals, FX optimization, and
            full audit trails.
          </p>
</div>
<div className="reveal group bg-[#f3efe6] p-8 transition-colors duration-500 hover:bg-[#ebe5d8]">
<iconify-icon className="text-brand-gold text-3xl mb-6" icon="solar:shield-keyhole-linear"></iconify-icon>
<h3 className="text-base tracking-wide uppercase font-medium mb-3 text-[#111111]">
            Compliance Layer
          </h3>
<p className="text-sm text-[#5a5a5a] leading-relaxed">
            SOC 2, PCI-DSS, and regional controls enforced automatically on
            every transaction.
          </p>
</div>
<div className="reveal group bg-[#f3efe6] p-8 transition-colors duration-500 hover:bg-[#ebe5d8]">
<iconify-icon className="text-brand-gold text-3xl mb-6" icon="solar:widget-add-linear"></iconify-icon>
<h3 className="text-base tracking-wide uppercase font-medium mb-3 text-[#111111]">
            Open API
          </h3>
<p className="text-sm text-[#5a5a5a] leading-relaxed">
            Embed Sequra anywhere with a clean REST and webhook layer your
            engineers will love.
          </p>
</div>
<div className="reveal group bg-[#f3efe6] p-8 transition-colors duration-500 hover:bg-[#ebe5d8]">
<iconify-icon className="text-brand-gold text-3xl mb-6" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="text-base tracking-wide uppercase font-medium mb-3 text-[#111111]">
            Role Controls
          </h3>
<p className="text-sm text-[#5a5a5a] leading-relaxed">
            Granular permissions and dual-approval workflows that scale from
            founder to enterprise.
          </p>
</div>
</div>
</section>

<section className="relative z-10 w-full overflow-hidden py-28 md:py-36 story-section" id="story">
<div className="max-w-7xl mx-auto px-6 md:px-10">
<div className="reveal flex items-center gap-3 mb-6">
<span className="text-xs tracking-[0.3em] text-brand-gold uppercase font-mono">
            / TV
          </span>
<span className="text-xs tracking-[0.25em] text-brand-muted uppercase font-mono">
            The Story
          </span>
</div>
<h2 className="reveal font-serif tracking-tight text-[clamp(2rem,4.5vw,4rem)] leading-[1] mb-16 max-w-3xl">
          A story of capital, told frame by
          <span className="italic text-brand-gold">frame</span>
          .
        </h2>
</div>
<div className="story-stage relative max-w-6xl mx-auto px-6 md:px-10">
<div className="story-frame relative aspect-video w-full overflow-hidden border border-white/5 bg-brand-dark/40">
<video aria-label="Live financial dashboard" className="story-img absolute inset-0 w-full h-full object-cover opacity-0" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ac322abb-e17f-4b31-84c1-ee910bdd61f8_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1780052679196-74799af8-190a-4c26-81a4-3342cb4cdcf1.mp4" style={{filter: 'sepia(0.25) hue-rotate(-12deg) contrast(1.05)'}}></video>
<video aria-label="Global payment flows" className="story-img absolute inset-0 w-full h-full object-cover opacity-0" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ee0afe2-e108-42af-a584-d4ebcd1ec4a1_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1780052786506-94963d94-8bbd-4f46-9eb7-8d5b6aa6c85a.mp4" style={{filter: 'sepia(0.25) hue-rotate(-12deg) contrast(1.05)'}}></video>
<video aria-label="Intelligent forecasting" className="story-img absolute inset-0 w-full h-full object-cover opacity-0" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d66cb76-2aa6-48fb-9749-d712e7e50420_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1780052843634-1f1b6b0e-00c6-4102-9a7a-8ad2e082f096.mp4" style={{filter: 'sepia(0.25) hue-rotate(-12deg) contrast(1.05)'}}></video>
<div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/10 to-transparent pointer-events-none"></div>
<div className="absolute inset-0 ring-1 ring-inset ring-brand-gold/20 pointer-events-none"></div>
<div className="absolute top-5 left-5 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-[0.6rem] tracking-[0.25em] text-brand-cream uppercase font-mono">
              LIVE
            </span>
</div>
<div className="story-caption absolute bottom-6 left-6 right-6 md:left-10 md:right-10">
<p className="story-line font-serif text-2xl md:text-3xl leading-snug text-brand-cream max-w-xl">
              Watch your capital move with clarity — in real time.
            </p>
</div>
</div>
</div>
</section>
<section className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36 journey-section" id="journey">
<div className="reveal flex items-center gap-3 mb-6">
<span className="text-xs tracking-[0.3em] text-brand-gold uppercase font-mono">
          / 02
        </span>
<span className="text-xs tracking-[0.25em] text-brand-muted uppercase font-mono">
          The Journey
        </span>
</div>
<h2 className="reveal font-serif tracking-tight text-[clamp(2rem,4.5vw,4rem)] leading-[1] mb-16 max-w-3xl">
        From scattered spreadsheets to
        <span className="italic text-brand-gold">a single source of truth</span>
        .
      </h2>
<div aria-hidden="true" className="reveal journey-progress-wrap mb-12 h-10 relative">
<div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-white/10"></div>
<div className="journey-progress absolute left-0 top-1/2 h-px w-0 -translate-y-1/2 bg-gradient-to-r from-brand-gold to-brand-cream">
<span className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 translate-x-1/2 rounded-full border border-brand-gold/60 bg-brand-bg shadow-[0_0_24px_rgba(197,166,124,0.75)]">
<span className="absolute inset-1 rounded-full bg-brand-gold"></span>
<span className="absolute inset-0 rounded-full bg-brand-gold/30 animate-ping"></span>
</span>
</div>
<div className="absolute -top-1 left-0 text-[0.6rem] tracking-[0.25em] text-brand-gold uppercase font-mono">
          02
        </div>
<div className="absolute -top-1 right-0 text-[0.6rem] tracking-[0.25em] text-brand-muted uppercase font-mono">
          03
        </div>
</div>
<div className="grid md:grid-cols-4 gap-12 md:gap-8 journey-track">
<div className="reveal relative">
<span className="font-serif text-5xl text-brand-gold/30 block mb-4">
            01
          </span>
<h3 className="text-sm tracking-[0.15em] uppercase font-medium mb-3">
            Connect
          </h3>
<p className="text-sm text-brand-muted leading-relaxed">
            Link every bank, card, and ledger in under ten minutes with secure
            read-only access.
          </p>
</div>
<div className="reveal relative">
<span className="font-serif text-5xl text-brand-gold/30 block mb-4">
            02
          </span>
<h3 className="text-sm tracking-[0.15em] uppercase font-medium mb-3">
            Unify
          </h3>
<p className="text-sm text-brand-muted leading-relaxed">
            Sequra normalizes transactions and surfaces your real-time financial
            position.
          </p>
</div>
<div className="reveal relative">
<span className="font-serif text-5xl text-brand-gold/30 block mb-4">
            03
          </span>
<h3 className="text-sm tracking-[0.15em] uppercase font-medium mb-3">
            Forecast
          </h3>
<p className="text-sm text-brand-muted leading-relaxed">
            AI models project runway and scenarios so you decide before you
            spend.
          </p>
</div>
<div className="reveal relative">
<span className="font-serif text-5xl text-brand-gold/30 block mb-4">
            04
          </span>
<h3 className="text-sm tracking-[0.15em] uppercase font-medium mb-3">
            Operate
          </h3>
<p className="text-sm text-brand-muted leading-relaxed">
            Pay, approve, and report with confidence on infrastructure that
            never sleeps.
          </p>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36" id="showcase">
<div className="reveal flex items-center gap-3 mb-6">
<span className="text-xs tracking-[0.3em] text-brand-gold uppercase font-mono">
          / X
        </span>
<span className="text-xs tracking-[0.25em] text-brand-muted uppercase font-mono">
          In Motion
        </span>
</div>
<h2 className="reveal font-serif tracking-tight text-[clamp(2rem,4.5vw,4rem)] leading-[1] mb-16 max-w-3xl">
        Capital, rendered as
        <span className="italic text-brand-gold">living geometry</span>
        .
      </h2>
<div className="reveal w-full rounded-2xl overflow-hidden relative" style={{aspectRatio: '16/9', background: 'linear-gradient(180deg, #151515 0%, #050505 100%)', boxShadow: '0 1px 0 rgba(255, 255, 255, .08) inset, 0 30px 60px -20px rgba(0,0,0,.8)'}}>
<div className="pointer-events-none absolute inset-0 rounded-2xl z-20" style={{padding: '1px', background: 'linear-gradient(135deg, rgba(197, 166, 124, .25), rgba(0, 0, 0, .2))', WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}}></div>
<div className="absolute top-1/4 left-1/4 w-[50%] h-[50%] rounded-full pointer-events-none mix-blend-screen z-0" id="sq-fl1" style={{background: 'radial-gradient(circle, rgba(234, 228, 216, 0.08) 0%, transparent 60%)', filter: 'blur(40px)'}}></div>
<div className="absolute bottom-1/4 right-1/4 w-[60%] h-[60%] rounded-full pointer-events-none mix-blend-screen z-0" id="sq-fl2" style={{background: 'radial-gradient(circle, rgba(197, 166, 124, 0.10) 0%, transparent 60%)', filter: 'blur(50px)'}}></div>
<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0">
<div className="font-serif text-[clamp(3rem,9vw,9rem)] tracking-tight text-brand-cream/5">
            SEQURA
          </div>
</div>
<canvas className="absolute inset-0 w-full h-full block z-10" id="sq-scene"></canvas>
<div className="absolute top-5 left-5 sm:top-7 sm:left-7 z-30">
<div className="flex items-center gap-3 rounded-xl bg-brand-dark/80 backdrop-blur-md px-4 py-2.5 pr-5" style={{boxShadow: '0 1px 0 rgba(255, 255, 255, .08) inset, 0 8px 24px -10px rgba(0, 0, 0, .6)', border: '1px solid rgba(255,255,255,.08)'}}>
<span className="grid place-items-center w-6 h-6 text-brand-gold">
<iconify-icon height="18" icon="solar:widget-5-linear" width="18"></iconify-icon>
</span>
<span className="text-base sm:text-lg font-medium tracking-tight text-brand-cream">
              Sequra Engine
            </span>
<span className="text-xs text-brand-muted tracking-widest font-mono pl-2">
              / 003
            </span>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36 proof-section" id="proof" style={{backgroundColor: 'rgb(234, 228, 216)', color: '#111111'}}>
<div className="reveal flex items-center gap-3 mb-6">
<span className="text-xs tracking-[0.3em] text-brand-gold uppercase font-mono">
          / 03
        </span>
<span className="text-xs tracking-[0.25em] text-[#7a6f5c] uppercase font-mono">
          Trusted By
        </span>
</div>
<h2 className="reveal font-serif tracking-tight text-[clamp(2rem,4.5vw,4rem)] leading-[1] mb-16 max-w-3xl text-[#111111]">
        Finance leaders who
        <span className="italic text-brand-gold">stopped guessing</span>
        .
      </h2>
<div className="grid md:grid-cols-3 gap-px bg-black/5">
<figure className="reveal bg-[#f3efe6] p-8 flex flex-col justify-between">
<p className="font-serif text-xl leading-snug mb-8 text-[#111111]">
            "Sequra cut our monthly close from nine days to two. The forecasting
            is uncannily accurate."
          </p>
<figcaption className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/80?img=12"/>
<div>
<p className="text-sm text-[#111111]">Elena Marsh</p>
<p className="text-xs text-[#5a5a5a] font-mono">
                CFO, Northwind Labs
              </p>
</div>
</figcaption>
</figure>
<figure className="reveal bg-[#f3efe6] p-8 flex flex-col justify-between">
<p className="font-serif text-xl leading-snug mb-8 text-[#111111]">
            "Global payments that used to take a team now run themselves with
            full compliance baked in."
          </p>
<figcaption className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/80?img=33"/>
<div>
<p className="text-sm text-[#111111]">David Okoye</p>
<p className="text-xs text-[#5a5a5a] font-mono">
                VP Finance, Atlas Pay
              </p>
</div>
</figcaption>
</figure>
<figure className="reveal bg-[#f3efe6] p-8 flex flex-col justify-between">
<p className="font-serif text-xl leading-snug mb-8 text-[#111111]">
            "The clearest view of our capital we've ever had. It feels like
            operating with the lights on."
          </p>
<figcaption className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/80?img=47"/>
<div>
<p className="text-sm text-[#111111]">Mira Castellanos</p>
<p className="text-xs text-[#5a5a5a] font-mono">
                Founder, Vela Health
              </p>
</div>
</figcaption>
</figure>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36" id="pricing">
<div className="reveal flex items-center gap-3 mb-6">
<span className="text-xs tracking-[0.3em] text-brand-gold uppercase font-mono">
          / 04
        </span>
<span className="text-xs tracking-[0.25em] text-brand-muted uppercase font-mono">
          Pricing
        </span>
</div>
<h2 className="reveal font-serif tracking-tight text-[clamp(2rem,4.5vw,4rem)] leading-[1] mb-16 max-w-3xl">
        Plans that
        <span className="italic text-brand-gold">scale with your capital</span>
        .
      </h2>
<div className="reveal grid md:grid-cols-3 gap-4">
<div className="rounded p-px bg-gradient-to-b from-white/10 to-transparent">
<div className="rounded-[3px] bg-brand-dark/40 p-8 flex flex-col h-full">
<span className="text-[10px] tracking-[0.1em] uppercase font-sans text-brand-muted mb-6">
              Starter
            </span>
<div className="flex items-baseline gap-1 mb-2">
<span className="font-sans font-light text-5xl tracking-tight text-brand-cream">
                $0
              </span>
<span className="text-sm text-brand-muted">/mo</span>
</div>
<p className="text-[13px] leading-relaxed text-brand-muted mb-8">
              For founders validating their financial stack.
            </p>
<ul className="flex flex-col gap-3 text-[13px] text-brand-muted mb-10">
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-gold" icon="solar:check-circle-linear"></iconify-icon>
                3 connected accounts
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-gold" icon="solar:check-circle-linear"></iconify-icon>
                Real-time dashboard
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-gold" icon="solar:check-circle-linear"></iconify-icon>
                Community support
              </li>
</ul>
<a className="mt-auto group flex items-center justify-between rounded border border-white/10 px-5 py-3 hover:border-brand-gold/50 transition-all duration-300" href="#contact">
<span className="text-[13px] font-medium">Start Free</span>
<iconify-icon className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="rounded p-px bg-gradient-to-b from-brand-gold/40 via-brand-gold/10 to-transparent" style={{boxShadow: '0 0 20px 0 rgba(197,166,124,0.3)'}}>
<div className="rounded-[3px] bg-brand-dark/60 p-8 flex flex-col h-full relative">
<span className="absolute -top-3 left-8 rounded bg-brand-gold text-brand-bg text-[10px] tracking-[0.1em] uppercase font-sans px-3 py-1">
              Most Popular
            </span>
<span className="text-[10px] tracking-[0.1em] uppercase font-sans text-brand-gold mb-6">
              Growth
            </span>
<div className="flex items-baseline gap-1 mb-2">
<span className="font-sans font-light text-5xl tracking-tight text-brand-cream">
                $249
              </span>
<span className="text-sm text-brand-muted">/mo</span>
</div>
<p className="text-[13px] leading-relaxed text-brand-muted mb-8">
              For scaling teams that need forecasting and control.
            </p>
<ul className="flex flex-col gap-3 text-[13px] text-brand-muted mb-10">
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-gold" icon="solar:check-circle-linear"></iconify-icon>
                Unlimited accounts
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-gold" icon="solar:check-circle-linear"></iconify-icon>
                AI cash forecasting
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-gold" icon="solar:check-circle-linear"></iconify-icon>
                Approval workflows
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-gold" icon="solar:check-circle-linear"></iconify-icon>
                Priority support
              </li>
</ul>
<a className="mt-auto group flex items-center justify-between rounded bg-brand-cream text-brand-bg px-5 py-3 hover:bg-white transition-all duration-300" href="#contact">
<span className="text-[13px] font-medium">Start Trial</span>
<iconify-icon className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="rounded p-px bg-gradient-to-b from-white/10 to-transparent">
<div className="rounded-[3px] bg-brand-dark/40 p-8 flex flex-col h-full">
<span className="text-[10px] tracking-[0.1em] uppercase font-sans text-brand-muted mb-6">
              Enterprise
            </span>
<div className="flex items-baseline gap-1 mb-2">
<span className="font-sans font-light text-5xl tracking-tight text-brand-cream">
                Custom
              </span>
</div>
<p className="text-[13px] leading-relaxed text-brand-muted mb-8">
              For institutions with bespoke compliance needs.
            </p>
<ul className="flex flex-col gap-3 text-[13px] text-brand-muted mb-10">
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-gold" icon="solar:check-circle-linear"></iconify-icon>
                Dedicated infrastructure
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-gold" icon="solar:check-circle-linear"></iconify-icon>
                Custom integrations
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-gold" icon="solar:check-circle-linear"></iconify-icon>
                SLA &amp; dedicated lead
              </li>
</ul>
<a className="mt-auto group flex items-center justify-between rounded border border-white/10 px-5 py-3 hover:border-brand-gold/50 transition-all duration-300" href="#contact">
<span className="text-[13px] font-medium">Contact Sales</span>
<iconify-icon className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36" id="contact" style={{backgroundColor: 'rgb(234, 228, 216)', color: '#111111'}}>
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<div className="reveal flex items-center gap-3 mb-6">
<span className="text-xs tracking-[0.3em] text-brand-gold uppercase font-mono">
              / 05
            </span>
<span className="text-xs tracking-[0.25em] text-[#7a6f5c] uppercase font-mono">
              Contact
            </span>
</div>
<h2 className="reveal font-serif tracking-tight text-[clamp(2rem,4.5vw,4rem)] leading-[1] mb-8 text-[#111111]">
            Let's bring
            <span className="italic text-brand-gold">clarity</span>
            to your capital.
          </h2>
<p className="reveal text-sm text-[#5a5a5a] leading-relaxed max-w-md mb-8">
            Tell us about your stack and a finance specialist will reach out
            within one business day. No pressure, no jargon.
          </p>
<div className="reveal flex flex-col gap-3 text-sm text-[#5a5a5a]">
<div className="flex items-center gap-3">
<iconify-icon className="text-brand-gold" icon="solar:letter-linear"></iconify-icon>
              hello@sequra.io
            </div>
<div className="flex items-center gap-3">
<iconify-icon className="text-brand-gold" icon="solar:map-point-linear"></iconify-icon>
              New York · London · Singapore
            </div>
</div>
</div>
<form className="reveal flex flex-col gap-5" onsubmit="return false">
<input className="bg-transparent border border-black/15 px-5 py-4 text-sm text-[#111111] placeholder:text-[#7a7a7a] focus:border-brand-gold/60 focus:outline-none transition-colors" placeholder="Full name" type="text"/>
<input className="bg-transparent border border-black/15 px-5 py-4 text-sm text-[#111111] placeholder:text-[#7a7a7a] focus:border-brand-gold/60 focus:outline-none transition-colors" placeholder="Work email" type="email"/>
<input className="bg-transparent border border-black/15 px-5 py-4 text-sm text-[#111111] placeholder:text-[#7a7a7a] focus:border-brand-gold/60 focus:outline-none transition-colors" placeholder="Company" type="text"/>
<textarea className="bg-transparent border border-black/15 px-5 py-4 text-sm text-[#111111] placeholder:text-[#7a7a7a] focus:border-brand-gold/60 focus:outline-none transition-colors resize-none" placeholder="What are you trying to solve?" rows="4"></textarea>
<button className="group magnetic flex items-center justify-center gap-4 bg-brand-cream text-brand-bg px-6 py-4 hover:bg-white transition-colors">
<span className="text-xs tracking-[0.15em] font-medium uppercase">
              Request a Demo
            </span>
<iconify-icon className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="relative z-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-4 gap-12">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-5">
<svg fill="none" height="22" viewbox="0 0 32 32" width="22">
<path d="M16 2 L20 12 L30 16 L20 20 L16 30 L12 20 L2 16 L12 12 Z" fill="#c5a67c"></path>
</svg>
<span className="text-sm tracking-[0.35em] font-medium uppercase">
              SEQURA
            </span>
</div>
<p className="text-sm text-brand-muted leading-relaxed max-w-xs">
            Financial intelligence infrastructure for modern teams. Est. MMXX.
          </p>
</div>
<div>
<h4 className="text-[0.65rem] tracking-[0.2em] uppercase font-mono text-brand-muted mb-5">
            Product
          </h4>
<ul className="flex flex-col gap-3 text-sm text-brand-muted">
<li>
<a className="hover:text-brand-cream transition-colors" href="#features">
                Platform
              </a>
</li>
<li>
<a className="hover:text-brand-cream transition-colors" href="#pricing">
                Pricing
              </a>
</li>
<li>
<a className="hover:text-brand-cream transition-colors" href="#journey">
                How it works
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-[0.65rem] tracking-[0.2em] uppercase font-mono text-brand-muted mb-5">
            Company
          </h4>
<ul className="flex flex-col gap-3 text-sm text-brand-muted">
<li>
<a className="hover:text-brand-cream transition-colors" href="#proof">
                Customers
              </a>
</li>
<li>
<a className="hover:text-brand-cream transition-colors" href="#contact">
                Contact
              </a>
</li>
<li>
<a className="hover:text-brand-cream transition-colors" href="#">
                Careers
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-[0.65rem] tracking-[0.2em] uppercase font-mono text-brand-muted mb-5">
            Legal
          </h4>
<ul className="flex flex-col gap-3 text-sm text-brand-muted">
<li>
<a className="hover:text-brand-cream transition-colors" href="#">
                Privacy
              </a>
</li>
<li>
<a className="hover:text-brand-cream transition-colors" href="#">
                Terms
              </a>
</li>
<li>
<a className="hover:text-brand-cream transition-colors" href="#">
                Security
              </a>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-10 py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-[0.65rem] tracking-[0.2em] text-brand-muted uppercase font-mono">
          © 2024 Sequra Inc.
        </span>
<div className="flex items-center gap-5 text-brand-muted">
<a className="hover:text-brand-cream transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:link-circle-linear"></iconify-icon>
</a>
<a className="hover:text-brand-cream transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</a>
<a className="hover:text-brand-cream transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
</a>
</div>
</div>
</footer>








    </>
  );
}
