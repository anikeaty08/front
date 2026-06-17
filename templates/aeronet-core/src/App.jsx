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



      const canvas = document.getElementById('animationCanvas');
      const ctx = canvas.getContext('2d');
      const floaters = document.querySelectorAll('[data-float]');
      const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const lowPowerHero = window.innerWidth < 768 || reduceMotionQuery.matches;

      let width, height;
      let time = 0;
      let animationFrameId = null;
      let lastFrameTime = 0;
      let isHeroVisible = true;

      const targetFrameInterval = lowPowerHero ? 1000 / 20 : 1000 / 30;
      const numNodes = lowPowerHero ? 72 : 112;
      const nodes = [];
      const surfaceDots = [];
      const atmosphereParticles = [];
      const DEG = Math.PI / 180;

      function seededNoise(a, b) {
          return Math.abs(Math.sin(a * 12.9898 + b * 78.233) * 43758.5453) % 1;
      }

      function lonDistance(a, b) {
          let diff = Math.abs(a - b) % 360;
          return diff > 180 ? 360 - diff : diff;
      }

      function blobScore(lat, lon, cLat, cLon, latRadius, lonRadius) {
          const y = (lat - cLat) / latRadius;
          const x = lonDistance(lon, cLon) / lonRadius;
          return Math.max(0, 1 - (x * x + y * y));
      }

      function landScore(lat, lon) {
          const blobs = [
              blobScore(lat, lon, 46, -102, 30, 48),
              blobScore(lat, lon, 20, -96, 14, 22),
              blobScore(lat, lon, -18, -61, 34, 24),
              blobScore(lat, lon, 52, 13, 18, 30),
              blobScore(lat, lon, 6, 22, 39, 29),
              blobScore(lat, lon, 28, 48, 17, 24),
              blobScore(lat, lon, 36, 89, 30, 58),
              blobScore(lat, lon, 58, 112, 20, 44),
              blobScore(lat, lon, -25, 134, 16, 25),
              blobScore(lat, lon, 72, -42, 10, 18)
          ];
          return Math.max(...blobs);
      }

      for (let i = 0; i < numNodes; i++) {
          let phi = Math.acos(-1 + (2 * i) / numNodes);
          let theta = Math.sqrt(numNodes * Math.PI) * phi;
          nodes.push({
              x: Math.cos(theta) * Math.sin(phi),
              y: Math.sin(theta) * Math.sin(phi),
              z: Math.cos(phi),
              baseSize: Math.random() * 1.5 + 0.5,
              pulseSpeed: Math.random() * 0.03 + 0.01,
              pulseOffset: Math.random() * Math.PI * 2
          });
      }

      const surfaceStep = lowPowerHero ? 2.9 : 2.25;
      for (let lat = -58; lat <= 76; lat += surfaceStep) {
          for (let lon = -178; lon <= 180; lon += surfaceStep) {
              const score = landScore(lat, lon);
              const grain = seededNoise(lat, lon);
              const edgeBreakup = seededNoise(lat * 0.73, lon * 1.17);
              const isLand = score > 0.16 && (score + grain * 0.42 + edgeBreakup * 0.16) > 0.48;
              const isOceanSpark = !isLand && grain > 0.992;

              if (!isLand && !isOceanSpark) continue;

              const jitterLat = lat + (seededNoise(lat + 3.1, lon) - 0.5) * 0.75;
              const jitterLon = lon + (seededNoise(lat, lon + 5.7) - 0.5) * 0.75;
              const visualLon = (jitterLon + 70) * DEG;
              const visualLat = jitterLat * DEG;
              const x = Math.cos(visualLat) * Math.cos(visualLon);
              const y = Math.sin(visualLat);
              const z = Math.cos(visualLat) * Math.sin(visualLon);

              surfaceDots.push({
                  x,
                  y,
                  z,
                  kind: isLand ? 'land' : 'spark',
                  weight: isLand ? Math.min(1, 0.42 + score * 0.72 + grain * 0.14) : 0.28,
                  size: isLand ? 0.72 + grain * 0.35 : 0.45
              });
          }
      }

      const atmosphereCount = lowPowerHero ? 80 : 140;
      for (let i = 0; i < atmosphereCount; i++) {
          const noise = seededNoise(i, i * 2.7);
          atmosphereParticles.push({
              angle: noise * Math.PI * 2,
              radius: 1.05 + seededNoise(i * 3.2, i) * 0.34,
              yScale: (seededNoise(i * 4.1, i * 1.9) - 0.5) * 1.8,
              size: 0.45 + seededNoise(i * 1.4, i * 5.1) * 1.2,
              speed: 0.00005 + seededNoise(i * 2.1, i * 3.9) * 0.00014,
              alpha: 0.08 + seededNoise(i * 1.7, i * 2.3) * 0.22
          });
      }

      function resize() {
          const hero = canvas.closest('section');
          width = hero.offsetWidth;
          height = hero.offsetHeight;
          canvas.width = width;
          canvas.height = height;
      }

      window.addEventListener('resize', resize);
      resize();

      function queueNetworkFrame() {
          if (animationFrameId === null) {
              animationFrameId = requestAnimationFrame(drawNetwork);
          }
      }

      function drawNetwork(frameTime = 0) {
          animationFrameId = null;

          if (document.hidden || !isHeroVisible) {
              lastFrameTime = frameTime;
              return;
          }

          if (frameTime - lastFrameTime < targetFrameInterval) {
              queueNetworkFrame();
              return;
          }

          const delta = lastFrameTime ? Math.min(frameTime - lastFrameTime, 48) : 16;
          lastFrameTime = frameTime;
          ctx.clearRect(0, 0, width, height);

          const centerX = width > 768 ? width * 0.69 : width * 0.5;
          const centerY = width > 768 ? height * 0.57 : height * 0.67;
          const R = width > 768 ? Math.min(width * 0.23, height * 0.4) : Math.min(width, height) * 0.34;

          let angleY = time * 0.0004;
          let angleX = 0.22;

          const project = point => {
              let y1 = point.y * Math.cos(angleX) - point.z * Math.sin(angleX);
              let z1 = point.y * Math.sin(angleX) + point.z * Math.cos(angleX);
              let x2 = point.x * Math.cos(angleY) + z1 * Math.sin(angleY);
              let z2 = -point.x * Math.sin(angleY) + z1 * Math.cos(angleY);

              return {
                  x: centerX + x2 * R,
                  y: centerY + y1 * R,
                  zNorm: z2
              };
          };

          ctx.save();
          ctx.globalAlpha = 0.78;
          ctx.shadowColor = 'rgba(37, 99, 235, 0.95)';
          ctx.shadowBlur = 52;
          ctx.strokeStyle = 'rgba(37, 99, 235, 0.34)';
          ctx.lineWidth = 18;
          ctx.beginPath();
          ctx.arc(centerX, centerY, R * 1.01, 0, Math.PI * 2);
          ctx.stroke();
          ctx.shadowBlur = 28;
          ctx.strokeStyle = 'rgba(96, 165, 250, 0.5)';
          ctx.lineWidth = 5;
          ctx.beginPath();
          ctx.arc(centerX, centerY, R * 1.006, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();

          const bodyGlow = ctx.createRadialGradient(centerX - R * 0.18, centerY - R * 0.16, R * 0.08, centerX, centerY, R);
          bodyGlow.addColorStop(0, 'rgba(3, 7, 18, 0.9)');
          bodyGlow.addColorStop(0.58, 'rgba(2, 6, 23, 0.9)');
          bodyGlow.addColorStop(0.86, 'rgba(3, 18, 44, 0.8)');
          bodyGlow.addColorStop(0.98, 'rgba(14, 76, 170, 0.38)');
          bodyGlow.addColorStop(1, 'rgba(59, 130, 246, 0.18)');
          ctx.fillStyle = bodyGlow;
          ctx.beginPath();
          ctx.arc(centerX, centerY, R, 0, Math.PI * 2);
          ctx.fill();

          ctx.save();
          ctx.globalCompositeOperation = 'lighter';
          atmosphereParticles.forEach(p => {
              const angle = p.angle + time * p.speed;
              const x = centerX + Math.cos(angle) * R * p.radius;
              const y = centerY + Math.sin(angle) * R * p.radius * 0.72 + p.yScale * R * 0.18;
              const edgeDistance = Math.hypot((x - centerX) / R, (y - centerY) / R);
              if (edgeDistance < 1.01 || edgeDistance > 1.42) return;
              const twinkle = 0.55 + Math.sin(time * 0.002 + p.angle * 3) * 0.45;
              ctx.fillStyle = `rgba(37, 99, 235, ${p.alpha * twinkle})`;
              ctx.beginPath();
              ctx.arc(x, y, p.size, 0, Math.PI * 2);
              ctx.fill();
          });
          ctx.restore();

          function drawGreatCircle(axis, offset, alpha) {
              let previous = null;
              ctx.beginPath();
              const segments = lowPowerHero ? 54 : 80;
              for (let i = 0; i <= segments; i++) {
                  const t = (i / segments) * Math.PI * 2;
                  let point;
                  if (axis === 'lat') {
                      const radius = Math.cos(offset);
                      point = { x: Math.cos(t) * radius, y: Math.sin(offset), z: Math.sin(t) * radius };
                  } else {
                      point = { x: Math.cos(t) * Math.cos(offset), y: Math.sin(t), z: Math.cos(t) * Math.sin(offset) };
                  }
                  const projected = project(point);
                  if (projected.zNorm < -0.18) {
                      previous = null;
                      continue;
                  }
                  if (!previous) ctx.moveTo(projected.x, projected.y);
                  else ctx.lineTo(projected.x, projected.y);
                  previous = projected;
              }
              ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
              ctx.lineWidth = 0.65;
              ctx.stroke();
          }

          ctx.save();
          ctx.shadowColor = 'rgba(37, 99, 235, 0.48)';
          ctx.shadowBlur = 8;
          [-0.72, -0.38, 0, 0.38, 0.72].forEach(lat => drawGreatCircle('lat', lat, 0.15));
          [-1.05, -0.52, 0, 0.52, 1.05].forEach(lon => drawGreatCircle('lon', lon, 0.12));
          ctx.restore();

          const projectedDots = surfaceDots.map(dot => ({ ...project(dot), weight: dot.weight, kind: dot.kind, size: dot.size }));
          projectedDots.forEach(dot => {
              if (dot.zNorm < -0.12) return;
              const depth = Math.min(1, (dot.zNorm + 0.2) * 1.35);
              const alpha = dot.kind === 'land'
                  ? Math.min(0.9, depth * 0.82) * dot.weight
                  : Math.min(0.28, depth * 0.22) * dot.weight;
              ctx.fillStyle = dot.kind === 'land'
                  ? `rgba(56, 189, 248, ${alpha})`
                  : `rgba(147, 197, 253, ${alpha})`;
              ctx.beginPath();
              ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
              ctx.fill();
          });

          let projectedNodes = nodes.map(n => ({ ...project(n), orig: n }));

          ctx.lineWidth = 0.75;
          for (let i = 0; i < projectedNodes.length; i++) {
              let p1 = projectedNodes[i];

              if (p1.zNorm < -0.22) continue;

              for (let j = i + 1; j < projectedNodes.length; j++) {
                  let p2 = projectedNodes[j];
                  if (p2.zNorm < -0.22) continue;

                  let dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

                  const threshold = R * 0.34;
                  if (dist < threshold) {
                      let distAlpha = (1 - dist / threshold) * 0.42;
                      let depthAlpha = Math.min(1, (p1.zNorm + 0.25) * 1.6) * Math.min(1, (p2.zNorm + 0.25) * 1.6);

                      ctx.strokeStyle = `rgba(37, 99, 235, ${distAlpha * depthAlpha})`;
                      ctx.beginPath();
                      ctx.moveTo(p1.x, p1.y);
                      ctx.lineTo(p2.x, p2.y);
                      ctx.stroke();
                  }
              }
          }

          projectedNodes.forEach(p => {
              if (p.zNorm < -0.25) return;

              let alpha = Math.min(1, (p.zNorm + 0.35) * 1.8);
              let size = p.orig.baseSize + (p.zNorm > 0 ? p.zNorm * 1.05 : 0);
              let pulse = (Math.sin((time * p.orig.pulseSpeed) + p.orig.pulseOffset) + 1) / 2;

              const flare = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 7);
              flare.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.52})`);
              flare.addColorStop(0.24, `rgba(96, 165, 250, ${alpha * 0.24})`);
              flare.addColorStop(1, 'rgba(37, 99, 235, 0)');
              ctx.fillStyle = flare;
              ctx.beginPath();
              ctx.arc(p.x, p.y, size * 7, 0, Math.PI * 2);
              ctx.fill();

              ctx.fillStyle = `rgba(191, 219, 254, ${alpha * 0.94})`;
              ctx.shadowColor = 'rgba(59, 130, 246, 0.9)';
              ctx.shadowBlur = p.zNorm > 0 ? 11 : 2;
              ctx.beginPath();
              ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
              ctx.fill();
              ctx.shadowBlur = 0;

              if (p.zNorm > 0 && pulse > 0.3) {
                  ctx.fillStyle = `rgba(96, 165, 250, ${alpha * 0.2 * pulse})`;
                  ctx.beginPath();
                  ctx.arc(p.x, p.y, size * (1 + pulse * 3), 0, Math.PI * 2);
                  ctx.fill();
              }

              if (p.zNorm > 0.35 && (p.orig.baseSize > 1.55 || pulse > 0.88)) {
                  ctx.save();
                  ctx.globalCompositeOperation = 'lighter';
                  ctx.strokeStyle = `rgba(147, 197, 253, ${alpha * 0.56})`;
                  ctx.lineWidth = 0.7;
                  ctx.shadowColor = 'rgba(59, 130, 246, 0.95)';
                  ctx.shadowBlur = 10;
                  ctx.beginPath();
                  ctx.moveTo(p.x - size * 5.2, p.y);
                  ctx.lineTo(p.x + size * 5.2, p.y);
                  ctx.moveTo(p.x, p.y - size * 5.2);
                  ctx.lineTo(p.x, p.y + size * 5.2);
                  ctx.stroke();
                  ctx.restore();
              }
          });

          ctx.save();
          ctx.strokeStyle = 'rgba(125, 211, 252, 0.9)';
          ctx.lineWidth = 1.65;
          ctx.shadowColor = 'rgba(59, 130, 246, 1)';
          ctx.shadowBlur = 30;
          ctx.beginPath();
          ctx.arc(centerX, centerY, R, 0, Math.PI * 2);
          ctx.stroke();
          ctx.lineWidth = 0.75;
          ctx.strokeStyle = 'rgba(147, 197, 253, 0.58)';
          ctx.beginPath();
          ctx.arc(centerX, centerY, R * 1.018, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();

          const groundGlow = ctx.createRadialGradient(centerX, centerY + R * 1.02, 0, centerX, centerY + R * 1.02, R * 0.34);
          groundGlow.addColorStop(0, 'rgba(125, 211, 252, 0.78)');
          groundGlow.addColorStop(0.22, 'rgba(59, 130, 246, 0.42)');
          groundGlow.addColorStop(0.56, 'rgba(37, 99, 235, 0.16)');
          groundGlow.addColorStop(1, 'rgba(37, 99, 235, 0)');
          ctx.save();
          ctx.globalCompositeOperation = 'lighter';
          ctx.scale(1, 0.18);
          ctx.fillStyle = groundGlow;
          ctx.beginPath();
          ctx.arc(centerX, (centerY + R * 1.02) / 0.18, R * 0.72, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();

          floaters.forEach(el => {
              const offset = Number(el.getAttribute('data-float-offset'));
              const floatStrength = el.querySelector('.globe-float') ? 1 : 0.7;
              const y = Math.sin((time * 0.0019) + offset) * 34 * floatStrength;
              const x = Math.cos((time * 0.00145) + offset * 1.37) * 22 * floatStrength;
              const tilt = Math.sin((time * 0.00115) + offset * 1.8) * 4.5 * floatStrength;
              el.style.setProperty('--float-y', `${y}px`);
              el.style.setProperty('--drift-x', `${x}px`);
              el.style.setProperty('--tilt', `${tilt}deg`);
          });

          time += delta;
          queueNetworkFrame();
      }

      const heroVisibilityObserver = new IntersectionObserver(entries => {
          isHeroVisible = entries.some(entry => entry.isIntersecting);
          if (isHeroVisible && !document.hidden) queueNetworkFrame();
      }, { threshold: 0.01 });
      heroVisibilityObserver.observe(canvas.closest('section'));

      document.addEventListener('visibilitychange', () => {
          if (!document.hidden) {
              lastFrameTime = 0;
              queueNetworkFrame();
          }
      });

      function setupRevealAnimations() {
          const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          const sequenceSelectors = [
              '.floating-nav > *',
              '.hero-copy > *',
              '#top [data-float]',
              'section:not(#top) .section-header',
              '#features > div:first-of-type .grid > div',
              '#features > .max-w-7xl .grid > div',
              'section:not(#top) .grid > div',
              'section:not(#top) details',
              'footer > div'
          ];
          const heroSelectors = [
              '.floating-nav > *',
              '.hero-copy > *',
              '#top [data-float]'
          ];

          const elements = [];
          sequenceSelectors.forEach(selector => {
              document.querySelectorAll(selector).forEach(el => {
                  if (!elements.includes(el)) elements.push(el);
              });
          });

          elements.forEach(el => {
              el.classList.add('reveal-item');
              el.classList.remove('reveal-in');
              el.style.removeProperty('--reveal-delay');
          });

          if (reduceMotion) {
              elements.forEach(el => el.classList.add('reveal-in'));
              return;
          }

          const observer = new IntersectionObserver(entries => {
              const visibleEntries = entries
                  .filter(entry => entry.isIntersecting && !entry.target.classList.contains('reveal-in'))
                  .sort((a, b) => {
                      const position = a.target.compareDocumentPosition(b.target);
                      return position & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
                  });

              visibleEntries.forEach((entry, index) => {
                  entry.target.style.setProperty('--reveal-delay', `${Math.min(index * 95, 570)}ms`);
                  entry.target.classList.add('reveal-in');
                  observer.unobserve(entry.target);
              });
          }, {
              threshold: 0.18,
              rootMargin: '0px 0px -8% 0px'
          });

          elements.forEach(el => observer.observe(el));

          requestAnimationFrame(() => {
              const heroItems = [];
              heroSelectors.forEach(selector => {
                  document.querySelectorAll(selector).forEach(el => {
                      if (elements.includes(el) && !heroItems.includes(el)) heroItems.push(el);
                  });
              });
              heroItems.forEach((el, index) => {
                  el.style.setProperty('--reveal-delay', `${index * 95}ms`);
                  el.classList.add('reveal-in');
                  observer.unobserve(el);
              });
          });
      }

      setupRevealAnimations();
      queueNetworkFrame();
    
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
      
<section className="h-[760px] md:h-[820px] overflow-hidden bg-black w-full relative gap-x-4 gap-y-4" id="top" style={{background: 'black'}}>
<canvas className="z-0 pointer-events-none w-full h-full absolute top-0 right-0 bottom-0 left-0" height="820" id="animationCanvas" style={{background: 'transparent', filter: 'saturate(1.35)', mixBlendMode: 'screen'}} width="1790"></canvas>

<header className="floating-nav">
<a className="flex items-center gap-2 group reveal-item reveal-in" href="#top" style={{'--reveal-delay': '0ms'}}>
<iconify-icon className="text-2xl text-blue-500 group-hover:text-blue-400 transition-colors" icon="solar:globus-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base tracking-wide font-medium text-white group-hover:text-gray-200 transition-colors font-geist">
            AeroNet
          </span>
</a>
<nav className="hidden md:flex items-center gap-8 reveal-item reveal-in" style={{'--reveal-delay': '95ms'}}>
<a className="text-sm font-light text-gray-400 hover:text-blue-400 transition-colors font-geist" href="#features">
            Core
          </a>
<a className="text-sm font-light text-gray-400 hover:text-blue-400 transition-colors font-geist" href="#how">
            Framework
          </a>
<a className="text-sm font-light text-gray-400 hover:text-blue-400 transition-colors font-geist" href="#pricing">
            Plans
          </a>
<a className="text-sm font-light text-gray-400 hover:text-blue-400 transition-colors font-geist" href="#faq">
            Docs
          </a>
</nav>
<div className="flex items-center gap-5 reveal-item reveal-in" style={{'--reveal-delay': '190ms'}}>
<a className="text-sm font-light text-gray-300 hover:text-white transition-colors hidden sm:block font-geist" href="#">
            Log In
          </a>
<a className="bg-white text-black text-sm font-medium px-5 py-2 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] font-geist" href="#pricing">
            Deploy Core
          </a>
</div>
</header>

<main className="w-full h-full z-10 relative" style={{maskImage: 'linear-gradient(200deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(200deg, transparent, black 0%, black 100%, transparent)'}}>

<div className="hero-container" style={{maskImage: 'linear-gradient(200deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="hero-copy" style={{maskImage: 'linear-gradient(200deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(200deg, transparent, black 0%, black 100%, transparent)'}}>


<h1 className="text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-blue-500 leading-tight mb-6 reveal-item tracking-tighter font-geist font-light reveal-in" style={{'--reveal-delay': '285ms'}}>
              Map, secure, and rebalance global traffic.
            </h1>

<p className="text-base md:text-lg text-gray-400 font-light max-w-[440px] leading-relaxed reveal-item font-geist reveal-in" style={{'--reveal-delay': '380ms'}}>
              AeroNet Core gives infrastructure teams one relay control plane
              for route mapping, policy failover, and real-time network
              capacity.
            </p>

<div className="hidden flex-wrap gap-4 pointer-events-auto md:flex reveal-item mt-10 gap-x-4 gap-y-4 reveal-in" style={{'--reveal-delay': '475ms'}}>
<a className="bg-white text-black text-sm font-medium px-6 py-3.5 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-0.5 font-geist" href="#pricing">
                Deploy AeroNet Core
              </a>
<a className="border border-white/10 bg-white/5 text-gray-300 text-sm font-medium px-6 py-3.5 rounded-full backdrop-blur-md hover:bg-white/10 hover:text-white transition-all duration-300 hover:-translate-y-0.5 font-geist" href="#features">
                Explore relay fabric
              </a>
</div>

<div className="mt-8 flex flex-col sm:flex-row gap-3 pointer-events-auto md:hidden reveal-item reveal-in" style={{'--reveal-delay': '570ms'}}>
<a className="bg-white text-black text-sm font-medium px-5 py-3 rounded-full text-center hover:bg-blue-50 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)] font-geist" href="#features">
                Explore AeroNet Core
              </a>
<a className="border border-white/10 bg-black/40 text-gray-300 text-sm font-medium px-5 py-3 rounded-full text-center backdrop-blur-md hover:text-white transition-colors font-geist" href="#how">
                How it works
              </a>
</div>
</div>
</div>

<div className="absolute bottom-8 left-6 right-6 grid grid-cols-3 gap-3 z-20 md:hidden">
<div className="rounded-2xl border border-white/10 border-t-blue-500/30 bg-black/60 backdrop-blur-xl p-4 shadow-2xl">
<div className="text-base font-medium text-white font-geist">
              2.41 PB/s
            </div>
<div className="text-xs font-light text-blue-400 mt-1 font-geist">
              Peak route
            </div>
</div>
<div className="rounded-2xl border border-white/10 border-t-blue-500/30 bg-black/60 backdrop-blur-xl p-4 shadow-2xl">
<div className="text-base font-medium text-white font-geist">8,294</div>
<div className="text-xs font-light text-blue-400 mt-1 font-geist">
              Nodes
            </div>
</div>
<div className="rounded-2xl border border-white/10 border-t-blue-500/30 bg-black/60 backdrop-blur-xl p-4 shadow-2xl">
<div className="text-base font-medium text-white font-geist">
              99.99%
            </div>
<div className="text-xs font-light text-blue-400 mt-1 font-geist">
              Uptime
            </div>
</div>
</div>

<div className="absolute inset-0 pointer-events-none hidden md:block">
<div className="absolute top-[21%] left-[58%] reveal-item reveal-in" data-float="" data-float-offset="0" style={{'--float-y': '-33.86094577797606px', '--drift-x': '-20.384111849344485px', '--tilt': '1.518144175844078deg', '--reveal-delay': '665ms'}}>
<div className="globe-float is-wide" style={{'--breath-delay': '.1s'}}>
<div className="globe-float-row">
<iconify-icon icon="solar:route-linear"></iconify-icon>
<div>
<strong>2.41 PB/s</strong>
<span>Peak relay</span>
</div>
</div>
</div>
<div className="globe-anchor -bottom-3 left-8" style={{'--breath-delay': '.1s'}}></div>
</div>
<div className="absolute top-[30%] left-[78%] reveal-item reveal-in" data-float="" data-float-offset="2.2" style={{'--float-y': '17.4436130842668px', '--drift-x': '21.27147309370009px', '--tilt': '2.055183455654887deg', '--reveal-delay': '760ms'}}>
<div className="globe-float is-mini" style={{'--breath-delay': '.8s'}}>
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="globe-anchor -bottom-3 left-1/2 -translate-x-1/2" style={{'--breath-delay': '.8s'}}></div>
</div>
<div className="absolute top-[50%] left-[84%] reveal-item reveal-in" data-float="" data-float-offset="4.1" style={{'--float-y': '21.97771882943662px', '--drift-x': '-21.14002008765962px', '--tilt': '-3.076246380897216deg', '--reveal-delay': '855ms'}}>
<div className="globe-float is-wide" style={{'--breath-delay': '1.4s'}}>
<div className="globe-float-row">
<iconify-icon icon="solar:bolt-circle-linear"></iconify-icon>
<div>
<strong>Route secured</strong>
<span>Policy live</span>
</div>
</div>
</div>
<div className="globe-anchor -bottom-3 left-6" style={{'--breath-delay': '1.4s'}}></div>
</div>
<div className="absolute top-[66%] left-[68%] reveal-item reveal-in" data-float="" data-float-offset="5.4" style={{'--float-y': '-19.117473322830207px', '--drift-x': '-1.5458114947299322px', '--tilt': '-0.21993869191476795deg', '--reveal-delay': '950ms'}}>
<div className="globe-float" style={{'--breath-delay': '.4s'}}>
<div className="globe-float-row">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
<div>
<strong>+924</strong>
<span>Nodes online</span>
</div>
</div>
</div>
<div className="globe-anchor -top-3 right-8" style={{'--breath-delay': '.4s'}}></div>
</div>
<div className="absolute top-[75%] left-[80%] reveal-item reveal-in" data-float="" data-float-offset="7" style={{'--float-y': '-27.546017113886236px', '--drift-x': '18.745394929100122px', '--tilt': '1.3748524464053506deg', '--reveal-delay': '1045ms'}}>
<div className="globe-float is-mini" style={{'--breath-delay': '1.1s'}}>
<iconify-icon icon="solar:satellite-linear"></iconify-icon>
</div>
<div className="globe-anchor -top-3 left-1/2 -translate-x-1/2" style={{'--breath-delay': '1.1s'}}></div>
</div>
<div className="absolute top-[58%] left-[53%] reveal-item reveal-in" data-float="" data-float-offset="8.2" style={{'--float-y': '8.594307631304428px', '--drift-x': '-12.855814259024712px', '--tilt': '-4.326342349428582deg', '--reveal-delay': '1140ms'}}>
<div className="globe-float is-wide" style={{'--breath-delay': '1.8s'}}>
<div className="globe-float-row">
<iconify-icon icon="solar:radar-linear"></iconify-icon>
<div>
<strong>38 ms</strong>
<span>Edge latency</span>
</div>
</div>
</div>
<div className="globe-anchor -top-3 right-7" style={{'--breath-delay': '1.8s'}}></div>
</div>
<div className="absolute top-[73%] left-[56%] reveal-item reveal-in" data-float="" data-float-offset="9.6" style={{'--float-y': '33.877970330141544px', '--drift-x': '-12.413188783484348px', '--tilt': '4.238061892895745deg', '--reveal-delay': '1235ms'}}>
<div className="globe-float" style={{'--breath-delay': '2.3s'}}>
<div className="globe-float-row">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
<div>
<strong>Failover armed</strong>
<span>Zero drift</span>
</div>
</div>
</div>
<div className="globe-anchor -top-3 left-8" style={{'--breath-delay': '2.3s'}}></div>
</div>
</div>
</main>
</section>
<section className="md:px-8 border-t pt-24 pr-6 pb-24 pl-6 relative" id="features">
<div className="max-w-7xl mr-auto ml-auto relative" style={{fontFamily: '\'Inter\', sans-serif'}}>
<div className="absolute inset-0 pointer-events-none opacity-20" style={{backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle at center, black, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'}}></div>
<div className="section-header flex flex-col gap-6 md:flex-row md:items-end md:justify-between z-10 reveal-item relative">
<div className="max-w-2xl">
<div className="section-kicker rounded-full">
<iconify-icon className="text-base text-gray-300" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-light text-gray-400 font-geist">
                Relay architecture
              </span>
</div>
<h2 className="text-4xl md:text-5xl text-zinc-50 leading-tight tracking-tighter font-geist font-light">
              Relay fabric engineered for scale.
            </h2>
</div>
<p className="max-w-md text-sm md:text-base font-light leading-7 text-gray-400 font-geist">
            AeroNet Core connects verified relay nodes, policy routing, and
            real-time capacity controls into one resilient network layer.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 border-t border-l border-white/10 relative z-10 bg-[#050505]/50 backdrop-blur-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]">
<div className="border-r border-b border-white/10 p-8 h-64 relative group overflow-hidden reveal-item">
<div className="absolute -top-[2px] -left-[2px] w-[3px] h-[3px] bg-[#050505] border border-zinc-600 z-20 box-content"></div>
<h3 className="text-sm font-normal text-zinc-100 mb-2 font-geist">
              Planetary relay coverage
            </h3>
<p className="text-xs font-light text-zinc-500 leading-relaxed max-w-[85%] font-geist">
              Traffic is distributed across verified edge nodes and metros
              automatically. No single region carries the network.
            </p>
<div className="absolute bottom-4 right-4 opacity-10"></div>
</div>
<div className="lg:h-auto lg:row-span-2 flex flex-col overflow-hidden reveal-item h-96 border-white/10 border-r border-b pt-8 pr-8 pb-8 pl-8 relative items-center justify-center">
<div className="absolute -top-[2px] -left-[2px] w-[3px] h-[3px] bg-[#050505] border border-zinc-600 z-20 box-content"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
<svg height="300" viewbox="0 0 100 100" width="300">
<circle cx="50" cy="50" fill="none" r="20" stroke="white" stroke-dasharray="1 2" strokeWidth="0.2"></circle>
<circle cx="50" cy="50" fill="none" r="30" stroke="white" stroke-dasharray="1 3" strokeWidth="0.2"></circle>
<circle cx="50" cy="50" fill="none" r="40" stroke="white" stroke-dasharray="2 4" strokeWidth="0.2"></circle>
<circle cx="50" cy="50" fill="none" r="55" stroke="white" stroke-dasharray="1 5" strokeWidth="0.1"></circle>
</svg>
</div>
<div className="relative w-48 h-48 z-10 flex items-center justify-center">
<div className="absolute inset-0 bg-blue-500/20 blur-[50px] rounded-full scale-150 mix-blend-screen"></div>
<svg className="w-full h-full drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="topFaceAeroNet" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#60a5fa"></stop>
<stop offset="100%" stop-color="#2563eb"></stop>
</lineargradient>
<lineargradient id="leftFaceAeroNet" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#1e3a8a"></stop>
<stop offset="100%" stop-color="#0f172a"></stop>
</lineargradient>
<lineargradient id="rightFaceAeroNet" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#1d4ed8"></stop>
<stop offset="100%" stop-color="#020617"></stop>
</lineargradient>
</defs>
<polygon className="" fill="url(#topFaceAeroNet)" points="50,20 90,40 50,60 10,40" stroke="#93c5fd" strokeLinejoin="round" strokeWidth="0.5"></polygon>
<polygon fill="url(#leftFaceAeroNet)" points="10,40 50,60 50,90 10,70" stroke="#3b82f6" strokeLinejoin="round" strokeWidth="0.5"></polygon>
<polygon fill="url(#rightFaceAeroNet)" points="90,40 90,70 50,90 50,60" stroke="#2563eb" strokeLinejoin="round" strokeWidth="0.5"></polygon>
</svg>
</div>
</div>
<div className="border-r border-b border-white/10 p-8 h-64 relative reveal-item">
<div className="absolute -top-[2px] -left-[2px] w-[3px] h-[3px] bg-[#050505] border border-zinc-600 z-20 box-content"></div>
<h3 className="text-sm font-normal text-zinc-100 mb-2 font-geist">
              Encrypted transit keys
            </h3>
<p className="text-xs font-light text-zinc-500 leading-relaxed max-w-[85%] font-geist">
              Every relay exchange uses authenticated sessions and ephemeral
              keys to keep routes private end to end.
            </p>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 mt-4 w-max"></div>
</div>
<div className="border-r border-b border-white/10 p-8 h-72 relative overflow-hidden group reveal-item">
<div className="absolute -top-[2px] -left-[2px] w-[3px] h-[3px] bg-[#050505] border border-zinc-600 z-20 box-content"></div>
<h3 className="text-sm font-normal text-zinc-100 mb-2 font-geist">
              Self-healing failover
            </h3>
<p className="text-xs font-light text-zinc-500 leading-relaxed max-w-[85%] font-geist">
              Relay sessions shift around degraded nodes before customers feel
              packet loss.
            </p>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-24">
<svg className="absolute bottom-0 w-full opacity-30" viewbox="0 0 100 50">
<polygon fill="none" points="50,10 90,25 50,40 10,25" stroke="white" strokeWidth="1"></polygon>
</svg>
<svg className="absolute bottom-4 w-full opacity-60" viewbox="0 0 100 50">
<polygon fill="none" points="50,10 90,25 50,40 10,25" stroke="white" strokeWidth="1"></polygon>
</svg>
<svg className="absolute bottom-8 w-full drop-shadow-[0_10px_15px_rgba(59,130,246,0.4)]" viewbox="0 0 100 50">
<defs>
<lineargradient id="layerGradAeroNet" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#60a5fa"></stop>
<stop offset="100%" stop-color="#2563eb"></stop>
</lineargradient>
</defs>
<polygon fill="url(#layerGradAeroNet)" points="50,10 90,25 50,40 10,25" stroke="#93c5fd" strokeWidth="0.5"></polygon>
</svg>
</div>
</div>
<div className="reveal-item h-72 border-white/10 border-r border-b pt-8 pr-8 pb-8 pl-8 relative overflow-hidden bg-[#050505]">

<div className="absolute -top-[2px] -left-[2px] w-[3px] h-[3px] bg-[#050505] border border-zinc-600 z-20 box-content"></div>

<div className="absolute inset-0 opacity-[0.16] pointer-events-none" style="
      background-image:
        linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
      background-size: 28px 28px;
    "></div>

<div className="absolute top-6 right-6 h-32 w-32 rounded-full bg-blue-500/15 blur-3xl pointer-events-none"></div>

<div className="absolute inset-x-8 top-8 h-36 pointer-events-none">
<div className="relative h-full w-full rounded-2xl border border-white/[0.06] bg-white/[0.025] overflow-hidden">

<div className="absolute top-4 left-4 flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]"></span>
<span className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-geist">
                    Live route
                  </span>
</div>
<div className="absolute top-4 right-4 text-[10px] text-zinc-500 font-geist">
                  98.4% healthy
                </div>

<svg className="absolute inset-0" fill="none" height="100%" viewbox="0 0 420 160" width="100%" xmlns="http://www.w3.org/2000/svg">

<path d="M58 108 C116 64 158 62 212 96 C266 130 310 88 362 50" stroke="rgba(255,255,255,0.10)" strokeWidth="1"></path>
<path d="M58 108 C112 112 148 132 204 118 C266 102 294 54 362 50" stroke="rgba(255,255,255,0.07)" strokeWidth="1"></path>
<path d="M58 108 C118 72 154 38 210 48 C266 58 300 86 362 50" stroke="rgba(255,255,255,0.06)" strokeWidth="1"></path>

<path className="blur-sm" d="M58 108 C116 64 158 62 212 96 C266 130 310 88 362 50" stroke="rgba(59,130,246,0.22)" strokeLinecap="round" strokeWidth="7"></path>

<path className="drop-shadow-[0_0_8px_rgba(96,165,250,0.75)]" d="M58 108 C116 64 158 62 212 96 C266 130 310 88 362 50" stroke="#60a5fa" stroke-dasharray="6 6" strokeLinecap="round" strokeWidth="1.6"></path>

<circle cx="58" cy="108" fill="#050505" r="5" stroke="rgba(255,255,255,0.55)" strokeWidth="1"></circle>
<circle cx="144" cy="66" fill="#050505" r="4" stroke="rgba(255,255,255,0.35)" strokeWidth="1"></circle>
<circle cx="212" cy="96" fill="#050505" r="5" stroke="#60a5fa" strokeWidth="1.2"></circle>
<circle cx="286" cy="114" fill="#050505" r="4" stroke="rgba(255,255,255,0.28)" strokeWidth="1"></circle>
<circle cx="362" cy="50" fill="#2563eb" r="6" stroke="#93c5fd" strokeWidth="1"></circle>

<rect fill="rgba(255,255,255,0.08)" height="4" rx="2" width="48" x="284" y="32"></rect>
<rect fill="#60a5fa" height="4" rx="2" width="34" x="284" y="32"></rect>
<rect fill="rgba(255,255,255,0.08)" height="4" rx="2" width="62" x="284" y="42"></rect>
<rect fill="rgba(96,165,250,0.55)" height="4" rx="2" width="46" x="284" y="42"></rect>
<rect fill="rgba(255,255,255,0.08)" height="4" rx="2" width="40" x="284" y="52"></rect>
<rect fill="rgba(96,165,250,0.35)" height="4" rx="2" width="22" x="284" y="52"></rect>
</svg>

<div className="absolute left-5 bottom-4 rounded-xl border border-white/[0.07] bg-[#080f1c]/80 backdrop-blur-md px-3 py-2 shadow-2xl">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full border border-blue-300/30 bg-blue-500/10 flex items-center justify-center">
<div className="h-1.5 w-1.5 rounded-full bg-blue-300"></div>
</div>
<div>
<p className="text-[10px] text-zinc-300 leading-none font-geist">
                        Edge node
                      </p>
<p className="mt-1 text-[10px] text-zinc-600 leading-none font-geist">
                        12ms latency
                      </p>
</div>
</div>
</div>

<div className="absolute right-5 bottom-4 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[10px] text-blue-200 font-geist">
                  Optimized path
                </div>
</div>
</div>

<div className="absolute bottom-8 left-8 right-8">
<h3 className="text-sm font-normal text-zinc-100 mb-2 font-geist">
                Adaptive route mapping
              </h3>
<p className="text-xs font-light text-zinc-500 leading-relaxed font-geist">
                Traffic is routed through the lowest-friction vector across
                healthy computation and edge nodes.
              </p>
</div>
</div>
<div className="border-r border-b border-white/10 p-8 h-72 relative reveal-item">
<div className="absolute -top-[2px] -left-[2px] w-[3px] h-[3px] bg-[#050505] border border-zinc-600 z-20 box-content"></div>
<h3 className="text-sm font-normal text-zinc-100 mb-2 font-geist">
              Capacity telemetry
            </h3>
<p className="text-xs font-light text-zinc-500 leading-relaxed max-w-[85%] font-geist">
              Watch saturation, route health, and throughput as the relay fabric
              expands.
            </p>
<div className="absolute bottom-8 left-8 right-12 bg-[#0c0c0e] border border-white/5 rounded-xl p-5 shadow-2xl">
<div className="flex items-center gap-2 mb-4">
<svg className="h-3.5 w-3.5 text-zinc-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M18 17V9"></path>
<path d="M13 17V5"></path>
<path d="M8 17v-3"></path>
</svg>
<span className="text-[10px] text-zinc-400 font-normal font-geist">
                  Route Throughput
                </span>
</div>
<div className="text-2xl text-white mb-4 tracking-tighter font-geist font-light">
                2.41 PB/s
              </div>
<div className="flex gap-1 h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
<div className="w-3/4 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
<div className="w-1/4 bg-zinc-800 rounded-full"></div>
</div>
</div>
</div>
<div className="flex flex-col overflow-hidden group reveal-item h-72 border-white/10 border-r border-b pt-8 pr-8 pb-8 pl-8 relative justify-end bg-[#050505]">

<div className="absolute -top-[2px] -left-[2px] w-[3px] h-[3px] bg-[#050505] border border-zinc-600 z-20 box-content"></div>

<div className="absolute inset-0 opacity-[0.08] pointer-events-none" style="
      background-image:
        linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
      background-size: 26px 26px;
    "></div>

<div className="absolute top-12 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>

<div className="absolute inset-0 flex items-center justify-center mb-16 pointer-events-none">
<div className="relative w-[180px] h-[140px] flex items-center justify-center">

<div className="absolute w-28 h-28 rounded-full border border-white/[0.06]"></div>
<div className="absolute w-20 h-20 rounded-full border border-white/[0.05]"></div>

<svg className="absolute inset-0 w-full h-full opacity-80" fill="none" viewbox="0 0 180 140" xmlns="http://www.w3.org/2000/svg">
<path d="M90 70 L48 42" stroke="rgba(255,255,255,0.10)" strokeWidth="1"></path>
<path d="M90 70 L132 42" stroke="rgba(255,255,255,0.10)" strokeWidth="1"></path>
<path d="M90 70 L48 98" stroke="rgba(255,255,255,0.10)" strokeWidth="1"></path>
<path d="M90 70 L132 98" stroke="rgba(255,255,255,0.10)" strokeWidth="1"></path>
</svg>

<div className="absolute left-[34px] top-[32px] w-2.5 h-2.5 rounded-full bg-[#050505] border border-white/30"></div>
<div className="absolute right-[34px] top-[32px] w-2.5 h-2.5 rounded-full bg-[#050505] border border-cyan-300/60"></div>
<div className="absolute left-[34px] bottom-[30px] w-2.5 h-2.5 rounded-full bg-[#050505] border border-white/20"></div>
<div className="absolute right-[34px] bottom-[30px] w-2.5 h-2.5 rounded-full bg-blue-500 border border-cyan-200/60 shadow-[0_0_12px_rgba(59,130,246,0.75)]"></div>

<div className="absolute bottom-[24px] w-24 h-6 rounded-[999px] border border-white/10 bg-white/[0.03] backdrop-blur-md"></div>

<div className="relative w-16 h-16 flex items-center justify-center">
<div className="absolute inset-0 bg-blue-500/20 blur-[24px] rounded-full"></div>
<div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md"></div>
<svg className="relative w-10 h-10 drop-shadow-[0_0_18px_rgba(59,130,246,0.45)]" viewbox="0 0 100 100">
<defs>
<lineargradient id="logoGradAeroNetV2" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#60a5fa"></stop>
<stop offset="100%" stop-color="#22d3ee"></stop>
</lineargradient>
</defs>

<path d="M28 68 L28 34 L50 54 L72 34 L72 68" fill="none" stroke="url(#logoGradAeroNetV2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="9"></path>
</svg>
</div>

<div className="absolute -bottom-1 px-3 py-1 rounded-full border border-blue-400/20 bg-blue-500/10 backdrop-blur-md">
<span className="text-[10px] tracking-[0.14em] uppercase text-blue-200 font-geist">
                    Multi-node
                  </span>
</div>
</div>
</div>

<div className="relative z-10">
<h3 className="text-sm font-normal text-zinc-100 mb-2 font-geist">
                Node-agent ready
              </h3>
<p className="text-xs font-light text-zinc-500 leading-relaxed max-w-[85%] font-geist">
                Deploy lightweight agents on cloud, bare metal, or edge hardware
                with minimal configuration.
              </p>
</div>
</div>
<div className="border-r border-b border-white/10 p-8 h-72 relative flex flex-col items-center justify-center cursor-pointer group overflow-hidden reveal-item" style={{background: 'repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(255, 255, 255, 0.016) 8px, rgba(255, 255, 255, 0.016) 16px)'}}>
<div className="absolute -top-[2px] -left-[2px] w-[3px] h-[3px] bg-[#050505] border border-zinc-600 z-20 box-content"></div>
<div className="absolute -bottom-[2px] -right-[2px] w-[3px] h-[3px] bg-[#050505] border border-zinc-600 z-20 box-content"></div>
<div className="flex items-center gap-3 bg-[#050505] px-6 py-3 rounded-full border border-white/10">
<span className="text-sm font-normal text-zinc-100 font-geist">
                Deploy AeroNet Core
              </span>
<div className="flex gap-[2px]">
<div className="w-1 h-1 bg-blue-500 rounded-full"></div>
<div className="w-1 h-1 bg-blue-500/70 rounded-full"></div>
<div className="w-1 h-1 bg-blue-500/40 rounded-full"></div>
<div className="w-1 h-1 bg-blue-500/20 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mr-auto ml-auto relative">
<div className="section-header flex flex-col gap-6 md:flex-row md:items-end md:justify-between reveal-item">
<div className="max-w-2xl">
<div className="section-kicker rounded-full">
<iconify-icon className="text-base text-gray-300" icon="solar:radar-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-light text-gray-400 font-geist">
                Operations layer
              </span>
</div>
<h2 className="text-4xl md:text-5xl text-white leading-tight tracking-tighter font-geist font-light">
              Everything needed to operate a planetary relay layer.
            </h2>
</div>
<p className="max-w-md text-sm md:text-base font-light leading-7 text-gray-400 font-geist">
            AeroNet Core brings mapping, observability, policy routing, and node
            lifecycle tools into one glass interface built for high-density
            infrastructure teams.
          </p>
</div>
<div className="grid gap-3 md:grid-cols-3">
<div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md shadow-2xl transition-colors hover:bg-white/[0.05] reveal-item">
<div className="rounded-2xl border border-zinc-800 bg-black/50 p-5">
<div className="mb-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-zinc-900/80">
<iconify-icon className="text-2xl text-white" icon="solar:map-arrow-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-light text-white font-geist">
                Adaptive route mapping
              </h3>
<p className="mt-3 text-sm font-light leading-6 text-gray-400 font-geist">
                Continuously traces the lowest-friction path across edge
                regions, private nodes, and regional gateways.
              </p>
</div>
</div>
<div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md shadow-2xl transition-colors hover:bg-white/[0.05] reveal-item">
<div className="rounded-2xl border border-zinc-800 bg-black/50 p-5">
<div className="mb-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-zinc-900/80">
<iconify-icon className="text-2xl text-white" icon="solar:shield-network-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-light text-white font-geist">
                Encrypted relay fabric
              </h3>
<p className="mt-3 text-sm font-light leading-6 text-gray-400 font-geist">
                Mutual authentication and ephemeral keys protect every exchange
                while preserving fast session handoff.
              </p>
</div>
</div>
<div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md shadow-2xl transition-colors hover:bg-white/[0.05] reveal-item">
<div className="rounded-2xl border border-zinc-800 bg-black/50 p-5">
<div className="mb-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-zinc-900/80">
<iconify-icon className="text-2xl text-white" icon="solar:chart-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-light text-white font-geist">
                Live capacity telemetry
              </h3>
<p className="mt-3 text-sm font-light leading-6 text-gray-400 font-geist">
                Observe throughput, saturation, packet health, and availability
                signals with second-level clarity.
              </p>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md shadow-2xl md:col-span-2 reveal-item">
<div className="min-h-72 overflow-hidden bg-black/60 border-zinc-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5 relative">
<div className="relative z-10 flex items-center justify-between">
<div className="">
<h3 className="text-lg font-light text-white font-geist">
                    Regional orchestration
                  </h3>
<p className="mt-2 max-w-sm text-sm font-light leading-6 text-gray-400 font-geist">
                    Group nodes by compliance zone, latency profile, or customer
                    traffic class.
                  </p>
</div>
<div className="hidden rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 backdrop-blur-md sm:flex">
<span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(147,197,253,0.9)]"></span>
<span className="text-xs font-light text-blue-200 font-geist">
                    43 regions active
                  </span>
</div>
</div>
<div className="relative z-10 mt-10 grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-md reveal-item">
<div className="text-3xl text-white tracking-tighter font-geist font-light">
                    4.8ms
                  </div>
<div className="mt-2 text-xs font-light text-gray-500 font-geist">
                    Median hop delay
                  </div>
</div>
<div className="rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-md reveal-item">
<div className="text-3xl text-white tracking-tighter font-geist font-light">
                    12.7k
                  </div>
<div className="mt-2 text-xs font-light text-gray-500 font-geist">
                    Sessions shifted
                  </div>
</div>
<div className="rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-md reveal-item">
<div className="text-3xl text-white tracking-tighter font-geist font-light">
                    0.02%
                  </div>
<div className="mt-2 text-xs font-light text-gray-500 font-geist">
                    Packet variance
                  </div>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md shadow-2xl reveal-item">
<div className="rounded-2xl border border-zinc-800 bg-black/50 p-5">
<h3 className="text-lg font-light text-white font-geist">
                Policy automation
              </h3>
<p className="mt-3 text-sm font-light leading-6 text-gray-400 font-geist">
                Create rules that reroute around outages, enforce residency, and
                isolate sensitive traffic.
              </p>
<div className="mt-8 space-y-3">
<div className="flex items-center justify-between rounded-full border border-white/10 bg-zinc-950 px-3 py-2">
<span className="text-xs font-light text-gray-400 font-geist">
                    Latency guard
                  </span>
<span className="text-xs font-light text-white font-geist">
                    On
                  </span>
</div>
<div className="flex items-center justify-between rounded-full border border-white/10 bg-zinc-950 px-3 py-2">
<span className="text-xs font-light text-gray-400 font-geist">
                    Geo fence
                  </span>
<span className="text-xs font-light text-white font-geist">
                    EU
                  </span>
</div>
<div className="flex items-center justify-between rounded-full border border-white/10 bg-zinc-950 px-3 py-2">
<span className="text-xs font-light text-gray-400 font-geist">
                    Failover
                  </span>
<span className="text-xs font-light text-white font-geist">
                    Auto
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative border-t border-white/10 bg-black px-6 py-24 md:px-8" id="how">
<div className="mx-auto max-w-7xl">
<div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
<div className="lg:sticky lg:top-8 reveal-item">
<div className="section-kicker rounded-full">
<iconify-icon className="text-base text-gray-300" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-light text-gray-400 font-geist">
                How it works
              </span>
</div>
<h2 className="text-4xl md:text-5xl text-white leading-tight tracking-tighter font-geist font-light">
              From bare node to resilient global path in minutes.
            </h2>
<p className="mt-5 max-w-md text-sm md:text-base font-light leading-7 text-gray-400 font-geist">
              Connect capacity anywhere. AeroNet Core verifies, profiles, and
              places each node into the optimal relay mesh without manual
              topology design.
            </p>
</div>
<div className="space-y-3 reveal-item">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md shadow-2xl">
<div className="flex flex-col gap-6 rounded-2xl border border-zinc-800 bg-black/50 p-5 sm:flex-row sm:items-center">
<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-zinc-900/80 text-lg font-light text-white font-geist">
                  01
                </div>
<div>
<h3 className="text-xl text-white tracking-tighter font-geist font-light">
                    Install the lightweight agent
                  </h3>
<p className="mt-2 text-sm font-light leading-6 text-gray-400 font-geist">
                    Run the agent on cloud, bare metal, or edge hardware. It
                    fingerprints compute, network interfaces, and regional
                    constraints.
                  </p>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md shadow-2xl">
<div className="flex flex-col gap-6 rounded-2xl border border-zinc-800 bg-black/50 p-5 sm:flex-row sm:items-center">
<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-zinc-900/80 text-lg font-light text-white font-geist">
                  02
                </div>
<div>
<h3 className="text-xl text-white tracking-tighter font-geist font-light">
                    Verify trust and capacity
                  </h3>
<p className="mt-2 text-sm font-light leading-6 text-gray-400 font-geist">
                    AeroNet Core benchmarks throughput, validates identity, and
                    scores node stability before accepting production traffic.
                  </p>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md shadow-2xl">
<div className="flex flex-col gap-6 rounded-2xl border border-zinc-800 bg-black/50 p-5 sm:flex-row sm:items-center">
<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-zinc-900/80 text-lg font-light text-white font-geist">
                  03
                </div>
<div>
<h3 className="text-xl text-white tracking-tighter font-geist font-light">
                    Attach traffic policies
                  </h3>
<p className="mt-2 text-sm font-light leading-6 text-gray-400 font-geist">
                    Define residency, performance, budget, and isolation rules.
                    The mesh applies them in real time to every route decision.
                  </p>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md shadow-2xl">
<div className="flex flex-col gap-6 rounded-2xl border border-zinc-800 bg-black/50 p-5 sm:flex-row sm:items-center">
<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-zinc-900/80 text-lg font-light text-white font-geist">
                  04
                </div>
<div className="">
<h3 className="text-xl text-white tracking-tighter font-geist font-light">
                    Observe and rebalance
                  </h3>
<p className="mt-2 text-sm font-light leading-6 text-gray-400 font-geist">
                    Live telemetry reveals pressure before customers feel it,
                    while automated balancing keeps sessions healthy.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative border-t border-white/10 bg-black px-6 py-24 md:px-8">
<div className="mx-auto max-w-7xl">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md shadow-2xl">
<div className="grid gap-3 rounded-2xl border border-zinc-800 bg-black/60 p-3 md:grid-cols-4">
<div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5 reveal-item">
<div className="text-4xl md:text-5xl text-white tracking-tighter font-geist font-light">
                8,294
              </div>
<div className="mt-3 text-sm font-light text-gray-500 font-geist">
                Verified relay nodes
              </div>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5 reveal-item">
<div className="text-4xl md:text-5xl text-white tracking-tighter font-geist font-light">
                137
              </div>
<div className="mt-3 text-sm font-light text-gray-500 font-geist">
                Connected metros
              </div>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5 reveal-item">
<div className="text-4xl md:text-5xl text-white tracking-tighter font-geist font-light">
                2.41
              </div>
<div className="mt-3 text-sm font-light text-gray-500 font-geist">
                PB/s routed peak
              </div>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5 reveal-item">
<div className="text-4xl md:text-5xl text-white tracking-tighter font-geist font-light">
                99.99
              </div>
<div className="mt-3 text-sm font-light text-gray-500 font-geist">
                Availability target
              </div>
</div>
</div>
</div>
</div>
</section>
<section className="relative border-t border-white/10 bg-black px-6 py-24 md:px-8">
<div className="mx-auto max-w-7xl">
<div className="section-header max-w-2xl reveal-item">
<div className="section-kicker rounded-full">
<iconify-icon className="text-base text-gray-300" icon="solar:chat-round-like-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-light text-gray-400 font-geist">
              AeroNet Core signal
            </span>
</div>
<h2 className="text-4xl md:text-5xl text-white leading-tight tracking-tighter font-geist font-light">
            Built for teams who cannot afford dark routes.
          </h2>
</div>
<div className="grid gap-3 lg:grid-cols-3">
<div className="testimonial-window reveal-item">
<div className="testimonial-track testimonial-up">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md shadow-2xl">
<div className="flex min-h-[260px] flex-col justify-between rounded-2xl border border-zinc-800 bg-black/50 p-5">
<p className="text-base font-light leading-7 text-gray-300 font-geist">
                    “AeroNet Core gave our operations team a single living view
                    of routing pressure. Failovers that used to take twenty
                    minutes are now policy events.”
                  </p>
<div className="mt-8 flex items-center gap-3">
<img alt="Sofia avatar" className="h-10 w-10 rounded-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/120?img=32"/>
<div>
<div className="text-sm font-light text-white font-geist">
                        Sofia Ito
                      </div>
<div className="text-xs font-light text-gray-500 font-geist">
                        VP Infrastructure, Orbis Compute
                      </div>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md shadow-2xl">
<div className="flex min-h-[260px] flex-col justify-between rounded-2xl border border-zinc-800 bg-black/50 p-5">
<p className="text-base font-light leading-7 text-gray-300 font-geist">
                    “The route map finally made our edge capacity
                    understandable. We can spot pressure, isolate noisy regions,
                    and rebalance before customers open a ticket.”
                  </p>
<div className="mt-8 flex items-center gap-3">
<img alt="Mira avatar" className="h-10 w-10 rounded-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/120?img=45"/>
<div>
<div className="text-sm font-light text-white font-geist">
                        Mira Coleman
                      </div>
<div className="text-xs font-light text-gray-500 font-geist">
                        Network Director, HelioStack
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="testimonial-window lg:translate-y-8 reveal-item">
<div className="testimonial-track testimonial-down">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md shadow-2xl">
<div className="flex min-h-[260px] flex-col justify-between rounded-2xl border border-zinc-800 bg-black/50 p-5">
<p className="text-base font-light leading-7 text-gray-300 font-geist">
                    “The mesh respects compliance boundaries while still chasing
                    latency aggressively. It feels like a control plane designed
                    by people who operate networks.”
                  </p>
<div className="mt-8 flex items-center gap-3">
<img alt="Nadia avatar" className="h-10 w-10 rounded-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/120?img=12"/>
<div>
<div className="text-sm font-light text-white font-geist">
                        Nadia Alvarez
                      </div>
<div className="text-xs font-light text-gray-500 font-geist">
                        Security Architect, Northstar Labs
                      </div>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md shadow-2xl">
<div className="flex min-h-[260px] flex-col justify-between rounded-2xl border border-zinc-800 bg-black/50 p-5">
<p className="text-base font-light leading-7 text-gray-300 font-geist">
                    “AeroNet Core let us keep residency rules strict without
                    turning operations into manual routing work. The policy
                    layer absorbed the complexity.”
                  </p>
<div className="mt-8 flex items-center gap-3">
<img alt="Ilya avatar" className="h-10 w-10 rounded-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/120?img=21"/>
<div>
<div className="text-sm font-light text-white font-geist">
                        Ilya Morgan
                      </div>
<div className="text-xs font-light text-gray-500 font-geist">
                        Cloud Governance Lead, Axion Grid
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="testimonial-window reveal-item">
<div className="testimonial-track testimonial-up">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md shadow-2xl">
<div className="flex min-h-[260px] flex-col justify-between rounded-2xl border border-zinc-800 bg-black/50 p-5">
<p className="leading-7 text-base font-light text-gray-300 font-geist">
                    “We deployed private relays in three continents and watched
                    AeroNet Core absorb them into production without a migration
                    window.”
                  </p>
<div className="mt-8 flex items-center gap-3">
<img alt="Theo avatar" className="h-10 w-10 rounded-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/120?img=59"/>
<div>
<div className="text-sm font-light text-white font-geist">
                        Theo Bennett
                      </div>
<div className="text-xs font-light text-gray-500 font-geist">
                        Platform Lead, Meridian AI
                      </div>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md shadow-2xl">
<div className="flex min-h-[260px] flex-col justify-between rounded-2xl border border-zinc-800 bg-black/50 p-5">
<p className="text-base font-light leading-7 text-gray-300 font-geist">
                    “The availability view changed our incident calls. Instead
                    of guessing where traffic moved, we see every route decision
                    as it happens.”
                  </p>
<div className="mt-8 flex items-center gap-3">
<img alt="Kenji avatar" className="h-10 w-10 rounded-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/120?img=68"/>
<div>
<div className="text-sm font-light text-white font-geist">
                        Kenji Park
                      </div>
<div className="text-xs font-light text-gray-500 font-geist">
                        Reliability Manager, VantaMesh
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative border-t border-white/10 bg-black px-6 py-24 md:px-8" id="pricing">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(circle at 50% 20%, rgba(255,255,255,0.08), transparent 34%)'}}></div>
<div className="relative mx-auto max-w-7xl">
<div className="section-header mx-auto max-w-2xl text-center reveal-item">
<div className="section-kicker rounded-full">
<iconify-icon className="text-base text-gray-300" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-light text-gray-400 font-geist">
              AeroNet Core plans
            </span>
</div>
<h2 className="text-4xl md:text-5xl text-white leading-tight tracking-tighter font-geist font-light">
            Scale the relay fabric at your own pace.
          </h2>
<p className="mx-auto mt-5 max-w-lg text-sm md:text-base font-light leading-7 text-gray-400 font-geist">
            Start with observability, expand into policy automation, then move
            mission-critical traffic onto dedicated capacity.
          </p>
</div>
<div className="grid gap-3 lg:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md shadow-2xl reveal-item">
<div className="rounded-2xl border border-zinc-800 bg-black/50 p-5">
<h3 className="text-xl text-white tracking-tighter font-geist font-light">
                Mapper
              </h3>
<p className="mt-2 text-sm font-light leading-6 text-gray-400 font-geist">
                For teams visualizing network health and regional capacity.
              </p>
<div className="mt-8 flex items-end gap-1">
<span className="text-5xl text-white tracking-tighter font-geist font-light">
                  $49
                </span>
<span className="mb-2 text-sm font-light text-gray-500 font-geist">
                  / node
                </span>
</div>
<a className="mt-8 flex w-full items-center justify-center rounded-full border border-white/10 bg-white text-sm font-light text-black px-4 py-2 hover:bg-gray-200 transition-colors font-geist" href="#">
                Start mapping
              </a>
<div className="mt-8 space-y-3">
<div className="flex gap-3 text-sm font-light text-gray-300 font-geist">
<iconify-icon className="mt-0.5 text-base text-white" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                  Live topology view
                </div>
<div className="flex gap-3 text-sm font-light text-gray-300 font-geist">
<iconify-icon className="mt-0.5 text-base text-white" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                  Regional health metrics
                </div>
<div className="flex gap-3 text-sm font-light text-gray-300 font-geist">
<iconify-icon className="mt-0.5 text-base text-white" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                  Seven-day telemetry retention
                </div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/20 bg-white/[0.06] p-3 backdrop-blur-md shadow-2xl reveal-item">
<div className="relative overflow-hidden rounded-2xl border border-zinc-700 bg-black/70 p-5">
<div className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-light text-gray-200 font-geist">
                Most used
              </div>
<h3 className="text-xl text-white tracking-tighter font-geist font-light">
                Orchestrator
              </h3>
<p className="mt-2 max-w-xs text-sm font-light leading-6 text-gray-400 font-geist">
                For production traffic requiring automated balancing and policy
                routing.
              </p>
<div className="mt-8 flex items-end gap-1">
<span className="text-5xl text-white tracking-tighter font-geist font-light">
                  $129
                </span>
<span className="mb-2 text-sm font-light text-gray-500 font-geist">
                  / node
                </span>
</div>
<a className="mt-8 flex w-full items-center justify-center rounded-full border border-white/10 bg-white text-sm font-light text-black px-4 py-2 hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)] font-geist" href="#">
                Deploy AeroNet Core
              </a>
<div className="mt-8 space-y-3">
<div className="flex gap-3 text-sm font-light text-gray-300 font-geist">
<iconify-icon className="mt-0.5 text-base text-white" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                  Everything in Mapper
                </div>
<div className="flex gap-3 text-sm font-light text-gray-300 font-geist">
<iconify-icon className="mt-0.5 text-base text-white" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                  Automated failover policies
                </div>
<div className="flex gap-3 text-sm font-light text-gray-300 font-geist">
<iconify-icon className="mt-0.5 text-base text-white" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                  Thirty-day telemetry retention
                </div>
<div className="flex gap-3 text-sm font-light text-gray-300 font-geist">
<iconify-icon className="mt-0.5 text-base text-white" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                  Private Slack incident bridge
                </div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md shadow-2xl reveal-item">
<div className="rounded-2xl border border-zinc-800 bg-black/50 p-5">
<h3 className="text-xl text-white tracking-tighter font-geist font-light">
                Sovereign
              </h3>
<p className="mt-2 text-sm font-light leading-6 text-gray-400 font-geist">
                For dedicated regions, compliance controls, and private relay
                capacity.
              </p>
<div className="mt-8 flex items-end gap-1">
<span className="text-5xl text-white tracking-tighter font-geist font-light">
                  Custom
                </span>
</div>
<a className="mt-8 flex w-full items-center justify-center rounded-full border border-white/10 bg-zinc-950 text-sm font-light text-gray-200 px-4 py-2 hover:text-white transition-colors font-geist" href="#">
                Contact team
              </a>
<div className="mt-8 space-y-3">
<div className="flex gap-3 text-sm font-light text-gray-300 font-geist">
<iconify-icon className="mt-0.5 text-base text-white" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                  Dedicated relay pools
                </div>
<div className="flex gap-3 text-sm font-light text-gray-300 font-geist">
<iconify-icon className="mt-0.5 text-base text-white" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                  Custom residency framework
                </div>
<div className="flex gap-3 text-sm font-light text-gray-300 font-geist">
<iconify-icon className="mt-0.5 text-base text-white" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                  Executive uptime reviews
                </div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative border-t border-white/10 bg-black px-6 py-24 md:px-8" id="faq">
<div className="mx-auto max-w-4xl">
<div className="section-header text-center reveal-item">
<div className="section-kicker rounded-full">
<iconify-icon className="text-base text-gray-300" icon="solar:question-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-light text-gray-400 font-geist">FAQ</span>
</div>
<h2 className="text-4xl md:text-5xl text-white leading-tight tracking-tighter font-geist font-light">
            AeroNet Core questions.
          </h2>
</div>
<div className="space-y-3">
<details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md shadow-2xl reveal-item" open="">
<summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-light text-white font-geist">
              How quickly can we deploy a new region?
              <iconify-icon className="text-xl text-gray-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<p className="mt-4 text-sm font-light leading-6 text-gray-400 font-geist">
              Most teams connect their first region in under fifteen minutes.
              Full production rollout depends on compliance review, node count,
              and traffic policy complexity.
            </p>
</details>
<details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md shadow-2xl reveal-item">
<summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-light text-white font-geist">
              Can AeroNet Core run on private infrastructure?
              <iconify-icon className="text-xl text-gray-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<p className="mt-4 text-sm font-light leading-6 text-gray-400 font-geist">
              Yes. Nodes can run in your cloud accounts, private data centers,
              edge facilities, or hybrid environments with dedicated relay
              pools.
            </p>
</details>
<details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md shadow-2xl reveal-item">
<summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-light text-white font-geist">
              What happens when a relay degrades?
              <iconify-icon className="text-xl text-gray-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<p className="mt-4 text-sm font-light leading-6 text-gray-400 font-geist">
              AeroNet Core scores node health continuously. When latency, packet
              loss, or availability drifts outside policy, sessions are moved to
              healthier paths automatically.
            </p>
</details>
<details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md shadow-2xl reveal-item">
<summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-light text-white font-geist">
              Does the platform support compliance boundaries?
              <iconify-icon className="text-xl text-gray-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<p className="mt-4 text-sm font-light leading-6 text-gray-400 font-geist">
              Traffic can be restricted by region, provider, node label,
              customer segment, or custom policy. Sovereign plans include deeper
              residency workflows.
            </p>
</details>
</div>
</div>
</section>
<section className="relative border-t border-white/10 bg-black px-6 py-24 md:px-8">
<div className="mx-auto max-w-7xl">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md shadow-2xl">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.12), transparent 36%)'}}></div>
<div className="relative rounded-2xl border border-zinc-800 bg-black/70 px-6 py-16 text-center md:px-10">
<div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-zinc-900/80">
<iconify-icon className="text-2xl text-white" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="mx-auto max-w-3xl text-4xl md:text-6xl text-white leading-tight tracking-tighter font-geist font-light">
              Build with AeroNet Core.
            </h2>
<p className="mx-auto mt-5 max-w-xl text-sm md:text-base font-light leading-7 text-gray-400 font-geist">
              Deploy nodes, map routes, and automate recovery with AeroNet Core
              across the infrastructure your customers depend on.
            </p>
<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
<a className="w-full rounded-full bg-white px-5 py-3 text-center text-sm font-light text-black hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)] sm:w-auto font-geist" href="#">
                Deploy AeroNet Core
              </a>
<a className="w-full rounded-full border border-white/10 bg-black/40 px-5 py-3 text-center text-sm font-light text-gray-300 backdrop-blur-md hover:text-white transition-colors sm:w-auto font-geist" href="#features">
                View framework
              </a>
</div>
</div>
</div>
</div>
</section>
<footer className="border-t border-white/10 bg-black px-6 py-10 md:px-8">
<div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between reveal-item">
<div>
<a className="flex items-center gap-2" href="#top">
<iconify-icon className="text-2xl text-white" icon="solar:globus-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base tracking-tight font-light text-white font-geist">
              AeroNet
            </span>
</a>
<p className="mt-3 max-w-sm text-xs font-light leading-5 text-gray-500 font-geist">
            A planetary relay control plane for adaptive routing, resilient edge
            capacity, and real-time infrastructure visibility.
          </p>
</div>
<div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
<div className="space-y-3">
<div className="text-xs font-light text-white font-geist">Product</div>
<a className="block text-xs font-light text-gray-500 hover:text-white transition-colors font-geist" href="#features">
              Mapping
            </a>
<a className="block text-xs font-light text-gray-500 hover:text-white transition-colors font-geist" href="#how">
              Framework
            </a>
</div>
<div className="space-y-3">
<div className="text-xs font-light text-white font-geist">Company</div>
<a className="block text-xs font-light text-gray-500 hover:text-white transition-colors font-geist" href="#">
              About
            </a>
<a className="block text-xs font-light text-gray-500 hover:text-white transition-colors font-geist" href="#">
              Careers
            </a>
</div>
<div className="space-y-3">
<div className="text-xs font-light text-white font-geist">
              Resources
            </div>
<a className="block text-xs font-light text-gray-500 hover:text-white transition-colors font-geist" href="#">
              Docs
            </a>
<a className="block text-xs font-light text-gray-500 hover:text-white transition-colors font-geist" href="#faq">
              FAQ
            </a>
</div>
<div className="space-y-3">
<div className="text-xs font-light text-white font-geist">Legal</div>
<a className="block text-xs font-light text-gray-500 hover:text-white transition-colors font-geist" href="#">
              Privacy
            </a>
<a className="block text-xs font-light text-gray-500 hover:text-white transition-colors font-geist" href="#">
              Terms
            </a>
</div>
</div>
</div>
<div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between reveal-item">
<p className="text-xs font-light text-gray-600 font-geist">
          © 2026 AeroNet Systems. All rights reserved.
        </p>
<div className="flex items-center gap-4">
<a className="text-xs font-light text-gray-600 hover:text-white transition-colors font-geist" href="#">
            Status
          </a>
<a className="text-xs font-light text-gray-600 hover:text-white transition-colors font-geist" href="#">
            Security
          </a>
<a className="text-xs font-light text-gray-600 hover:text-white transition-colors font-geist" href="#">
            Contact
          </a>
</div>
</div>
</footer>


    </>
  );
}
