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
      const initLyric = () => {
        const container = document.getElementById('lyric-container');
        if (!container || container.dataset.lyricInit === 'true') return;

        container.dataset.lyricInit = 'true';

        const words = Array.from(container.querySelectorAll('.lyric-word'));
        let timers = [];

        const resetWords = () => {
          timers.forEach(clearTimeout);
          timers = [];

          words.forEach((word) => {
            word.classList.remove('is-active', 'is-past');
          });
        };

        const playKaraoke = () => {
          resetWords();

          words.forEach((word, index) => {
            const timer = setTimeout(() => {
              if (words[index - 1]) {
                words[index - 1].classList.remove('is-active');
                words[index - 1].classList.add('is-past');
              }

              word.classList.add('is-active');

              if (index === words.length - 1) {
                setTimeout(() => {
                  word.classList.remove('is-active');
                  word.classList.add('is-past');
                }, 520);
              }
            }, index * 145);

            timers.push(timer);
          });
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              playKaraoke();
            } else {
              resetWords();
            }
          });
        }, { threshold: 0.45 });

        observer.observe(container);

        if (window.lucide) window.lucide.createIcons();
      };

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLyric);
      } else {
        setTimeout(initLyric, 100);
      }
    })();
  


        import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

        const canvas = document.getElementById('webgl-canvas-wow');

        if (canvas) {
          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
          camera.position.z = 28;

          const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
          renderer.setSize(canvas.clientWidth, canvas.clientHeight);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

          const globeGroup = new THREE.Group();
          scene.add(globeGroup);

          const sphereGeometry = new THREE.SphereGeometry(10, 64, 64);

          const sphereMaterial = new THREE.MeshBasicMaterial({
            color: 0x020617,
            transparent: true,
            opacity: 0.92
          });

          const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
          globeGroup.add(sphere);

          const wireframeMaterial = new THREE.MeshBasicMaterial({
            color: 0x60a5fa,
            wireframe: true,
            transparent: true,
            opacity: 0.14
          });

          const wireframe = new THREE.Mesh(sphereGeometry, wireframeMaterial);
          globeGroup.add(wireframe);

          const dotsGeometry = new THREE.BufferGeometry();
          const dotsCount = 1500;
          const dotsPos = new Float32Array(dotsCount * 3);
          const dotsColors = new Float32Array(dotsCount * 3);
          const colorPalette = [
            new THREE.Color(0x67e8f9),
            new THREE.Color(0xa78bfa),
            new THREE.Color(0x60a5fa),
            new THREE.Color(0xc4b5fd)
          ];

          for (let i = 0; i < dotsCount; i++) {
            const phi = Math.acos(1 - 2 * (i + 0.5) / dotsCount);
            const theta = Math.PI * (1 + Math.sqrt(5)) * i;
            const r = 10.05 + Math.random() * 0.12;

            const x = r * Math.cos(theta) * Math.sin(phi);
            const y = r * Math.sin(theta) * Math.sin(phi);
            const z = r * Math.cos(phi);

            dotsPos[i * 3] = x;
            dotsPos[i * 3 + 1] = y;
            dotsPos[i * 3 + 2] = z;

            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            dotsColors[i * 3] = color.r;
            dotsColors[i * 3 + 1] = color.g;
            dotsColors[i * 3 + 2] = color.b;
          }

          dotsGeometry.setAttribute('position', new THREE.BufferAttribute(dotsPos, 3));
          dotsGeometry.setAttribute('color', new THREE.BufferAttribute(dotsColors, 3));

          const dotsMaterial = new THREE.PointsMaterial({
            size: 0.095,
            vertexColors: true,
            transparent: true,
            opacity: 1,
            blending: THREE.AdditiveBlending
          });

          const dotsMesh = new THREE.Points(dotsGeometry, dotsMaterial);
          globeGroup.add(dotsMesh);

          const curves = [];
          const numArcs = 44;

          for (let i = 0; i < numArcs; i++) {
            const index1 = Math.floor(Math.random() * dotsCount);
            const index2 = Math.floor(Math.random() * dotsCount);

            const p1 = new THREE.Vector3(dotsPos[index1 * 3], dotsPos[index1 * 3 + 1], dotsPos[index1 * 3 + 2]);
            const p2 = new THREE.Vector3(dotsPos[index2 * 3], dotsPos[index2 * 3 + 1], dotsPos[index2 * 3 + 2]);

            const distance = p1.distanceTo(p2);

            if (distance > 5 && distance < 18) {
              const mid = p1.clone().add(p2).multiplyScalar(0.5);
              mid.normalize().multiplyScalar(10 + distance * 0.4);

              const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
              curves.push(curve);

              const tubeGeometry = new THREE.TubeGeometry(curve, 20, 0.025, 8, false);
              const tubeMaterial = new THREE.MeshBasicMaterial({
                color: 0x67e8f9,
                transparent: true,
                opacity: 0.22,
                blending: THREE.AdditiveBlending
              });

              const tubeMesh = new THREE.Mesh(tubeGeometry, tubeMaterial);
              globeGroup.add(tubeMesh);
            }
          }

          const traffics = [];
          const trafficGeom = new THREE.SphereGeometry(0.09, 8, 8);
          const trafficMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 1,
            blending: THREE.AdditiveBlending
          });

          curves.forEach((curve) => {
            const traffic = new THREE.Mesh(trafficGeom, trafficMat);
            globeGroup.add(traffic);

            traffics.push({
              mesh: traffic,
              curve: curve,
              progress: Math.random(),
              speed: 0.003 + Math.random() * 0.005
            });
          });

          const rings = [];

          for (let i = 0; i < 3; i++) {
            const ringGeom = new THREE.TorusGeometry(13 + i * 1.2, 0.018, 16, 100);
            const ringMat = new THREE.MeshBasicMaterial({
              color: i % 2 === 0 ? 0x67e8f9 : 0xa78bfa,
              transparent: true,
              opacity: 0.28,
              blending: THREE.AdditiveBlending
            });

            const ring = new THREE.Mesh(ringGeom, ringMat);
            ring.rotation.x = Math.random() * Math.PI;
            ring.rotation.y = Math.random() * Math.PI;
            globeGroup.add(ring);

            rings.push({
              mesh: ring,
              speedX: (Math.random() - 0.5) * 0.005,
              speedY: (Math.random() - 0.5) * 0.005
            });
          }

          const atmosphereGeom = new THREE.SphereGeometry(10.8, 64, 64);
          const atmosphereMat = new THREE.MeshBasicMaterial({
            color: 0x60a5fa,
            transparent: true,
            opacity: 0.13,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending
          });

          const atmosphere = new THREE.Mesh(atmosphereGeom, atmosphereMat);
          globeGroup.add(atmosphere);

          const outerGlowGeom = new THREE.SphereGeometry(11.8, 64, 64);
          const outerGlowMat = new THREE.MeshBasicMaterial({
            color: 0x8b5cf6,
            transparent: true,
            opacity: 0.045,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending
          });

          const outerGlow = new THREE.Mesh(outerGlowGeom, outerGlowMat);
          globeGroup.add(outerGlow);

          const bgGeom = new THREE.BufferGeometry();
          const bgCount = 900;
          const bgPos = new Float32Array(bgCount * 3);

          for (let i = 0; i < bgCount; i++) {
            bgPos[i * 3] = (Math.random() - 0.5) * 60;
            bgPos[i * 3 + 1] = (Math.random() - 0.5) * 60;
            bgPos[i * 3 + 2] = (Math.random() - 0.5) * 60;
          }

          bgGeom.setAttribute('position', new THREE.BufferAttribute(bgPos, 3));

          const bgMat = new THREE.PointsMaterial({
            size: 0.06,
            color: 0x60a5fa,
            transparent: true,
            opacity: 0.42,
            blending: THREE.AdditiveBlending
          });

          const bgParticles = new THREE.Points(bgGeom, bgMat);
          scene.add(bgParticles);

          window.addEventListener('resize', () => {
            if (!canvas.clientWidth) return;

            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvas.clientWidth, canvas.clientHeight);
          });

          let mouseX = 0;
          let mouseY = 0;
          const container = canvas.parentElement;

          container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();

            mouseX = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
            mouseY = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;
          });

          const clock = new THREE.Clock();

          function animate() {
            requestAnimationFrame(animate);

            const elapsedTime = clock.getElapsedTime();

            globeGroup.rotation.y += 0.002;
            globeGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.05;

            bgParticles.rotation.y = -elapsedTime * 0.02;

            traffics.forEach((t) => {
              t.progress += t.speed;

              if (t.progress > 1) {
                t.progress = 0;
              }

              const point = t.curve.getPoint(t.progress);
              t.mesh.position.copy(point);
            });

            rings.forEach((r) => {
              r.mesh.rotation.x += r.speedX;
              r.mesh.rotation.y += r.speedY;
            });

            camera.position.x += (mouseX * 4 - camera.position.x) * 0.05;
            camera.position.y += (mouseY * 4 - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
          }

          animate();
        }
      


    (function () {
      const section = document.getElementById('testimonials');
      const slider = document.getElementById('scroll-container');

      if (section) {
        const observer = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                section.classList.add('is-visible');
              }
            });
          },
          { threshold: 0.25 }
        );

        observer.observe(section);
      }

      if (slider) {
        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;

        const stopDragging = function () {
          if (!isDown) return;
          isDown = false;
          slider.style.cursor = 'grab';
          slider.classList.add('snap-x', 'snap-mandatory');
        };

        slider.addEventListener('mousedown', function (e) {
          isDown = true;
          slider.style.cursor = 'grabbing';
          slider.classList.remove('snap-x', 'snap-mandatory');
          startX = e.pageX - slider.offsetLeft;
          scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', stopDragging);
        slider.addEventListener('mouseup', stopDragging);

        slider.addEventListener('mousemove', function (e) {
          if (!isDown) return;
          e.preventDefault();

          const x = e.pageX - slider.offsetLeft;
          const walk = (x - startX) * 2;
          slider.scrollLeft = scrollLeft - walk;
        });

        slider.addEventListener('wheel', function (e) {
          if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
            slider.scrollLeft += e.deltaY;
          }
        }, { passive: false });
      }
    })();
  


        (function () {
      const stage = document.querySelector('#pricing .pricing-stage');
      if (!stage) return;

      const cards = [
        stage.querySelector('.pricing-card-1'),
        stage.querySelector('.pricing-card-2'),
        stage.querySelector('.pricing-card-3')
      ];

      const setActiveCard = function (event) {
        let closestIndex = 0;
        let closestDistance = Infinity;

        cards.forEach(function (card, index) {
          if (!card) return;
          const rect = card.getBoundingClientRect();
          const cardCenterX = rect.left + rect.width / 2;
          const distance = Math.abs(event.clientX - cardCenterX);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        stage.setAttribute('data-active', String(closestIndex + 1));
      };

      stage.addEventListener('mousemove', setActiveCard);

      stage.addEventListener('mouseleave', function () {
        stage.removeAttribute('data-active');
      });

      cards.forEach(function (card, index) {
        if (!card) return;

        card.addEventListener('mouseenter', function () {
          stage.setAttribute('data-active', String(index + 1));
        });

        card.addEventListener('focusin', function () {
          stage.setAttribute('data-active', String(index + 1));
        });
      });
    })();
      


    lucide.createIcons({
        attrs: {
          "stroke-width": 1.5
        }
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
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="relative min-h-screen overflow-hidden bg-black">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.74)_100%)]">
</div>
<div className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-screen" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.7) 0.0625rem, transparent 0.0625rem), linear-gradient(90deg, rgba(255,255,255,0.7) 0.0625rem, transparent 0.0625rem)', backgroundSize: '4rem 4rem'}}>
</div>
<div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/[0.035] to-transparent">
</div>
<header className="nav-animate relative z-30 mx-auto flex w-full max-w-[92rem] items-center justify-between px-5 py-6 sm:px-8 lg:px-10 xl:px-12">
<a aria-label="Hyperbolt Studio home" className="group flex items-center gap-3.5" href="#">
<span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/45 bg-white/[0.045] text-blue-400 shadow-[0_0_1.5rem_rgba(124,58,237,0.28)] backdrop-blur-xl">
<svg className="h-6 w-6 fill-blue-500/20" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</span>
<span className="leading-none">
<span className="block text-sm font-semibold uppercase tracking-[0.28em] text-white">
        HYPERBOLT
      </span>
<span className="mt-1 block text-[0.625rem] font-medium uppercase tracking-[0.42em] text-slate-400">
        STUDIO
      </span>
</span>
</a>
<nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl lg:flex">
<a className="group/nav relative overflow-hidden rounded-full px-5 py-2.5 transition-all duration-500 hover:text-white hover:shadow-[0_0_28px_rgba(139,92,246,0.22)]" href="#work">
<span className="absolute inset-0 rounded-full bg-violet-500/0 transition-all duration-500 group-hover/nav:bg-violet-500/10"></span>
<span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/0 blur-xl transition-all duration-500 group-hover/nav:bg-blue-400/25"></span>
<span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-300 to-transparent transition-all duration-500 group-hover/nav:w-3/4"></span>
<span className="relative z-10">Work</span>
</a>
<a className="group/nav relative overflow-hidden rounded-full px-5 py-2.5 transition-all duration-500 hover:text-white hover:shadow-[0_0_28px_rgba(139,92,246,0.22)]" href="#services">
<span className="absolute inset-0 rounded-full bg-violet-500/0 transition-all duration-500 group-hover/nav:bg-violet-500/10"></span>
<span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/0 blur-xl transition-all duration-500 group-hover/nav:bg-blue-400/25"></span>
<span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-300 to-transparent transition-all duration-500 group-hover/nav:w-3/4"></span>
<span className="relative z-10">Services</span>
</a>
<a className="group/nav relative overflow-hidden rounded-full px-5 py-2.5 transition-all duration-500 hover:text-white hover:shadow-[0_0_28px_rgba(139,92,246,0.22)]" href="#testimonials">
<span className="absolute inset-0 rounded-full bg-violet-500/0 transition-all duration-500 group-hover/nav:bg-violet-500/10"></span>
<span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/0 blur-xl transition-all duration-500 group-hover/nav:bg-blue-400/25"></span>
<span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-300 to-transparent transition-all duration-500 group-hover/nav:w-3/4"></span>
<span className="relative z-10">About</span>
</a>
<a className="group/nav relative overflow-hidden rounded-full px-5 py-2.5 transition-all duration-500 hover:text-white hover:shadow-[0_0_28px_rgba(139,92,246,0.22)]" href="#process">
<span className="absolute inset-0 rounded-full bg-violet-500/0 transition-all duration-500 group-hover/nav:bg-violet-500/10"></span>
<span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/0 blur-xl transition-all duration-500 group-hover/nav:bg-blue-400/25"></span>
<span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-300 to-transparent transition-all duration-500 group-hover/nav:w-3/4"></span>
<span className="relative z-10">Process</span>
</a>
<a className="group/nav relative overflow-hidden rounded-full px-5 py-2.5 transition-all duration-500 hover:text-white hover:shadow-[0_0_28px_rgba(139,92,246,0.22)]" href="#features">
<span className="absolute inset-0 rounded-full bg-violet-500/0 transition-all duration-500 group-hover/nav:bg-violet-500/10"></span>
<span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/0 blur-xl transition-all duration-500 group-hover/nav:bg-blue-400/25"></span>
<span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-300 to-transparent transition-all duration-500 group-hover/nav:w-3/4"></span>
<span className="relative z-10">Insights</span>
</a>
</nav>
<a className="group hidden items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.17em] text-white backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-violet-500/10 hover:shadow-[0_0_2rem_rgba(139,92,246,0.25)] sm:flex" href="#pricing">
    LET'S CREATE
    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
<button aria-label="Open menu" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white backdrop-blur-xl lg:hidden">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</button>
</header>
<section className="grid min-h-[calc(100vh-7rem)] grid-cols-1 sm:px-8 sm:pt-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-4 lg:px-10 lg:pb-6 lg:pt-10 xl:px-12 w-full max-w-[92rem] z-20 mr-auto ml-auto pt-12 pr-5 pb-10 pl-5 relative gap-x-12 gap-y-12 items-center">
<div className="pointer-events-none absolute inset-0 z-0" style={{backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.82) 34%, rgba(0,0,0,0.22) 62%, rgba(0,0,0,0.08) 100%), url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e04d3e4d-8705-4b52-973b-f886f528af69_1600w.png\')', backgroundSize: 'cover', backgroundPosition: 'center right', backgroundRepeat: 'no-repeat', overflow: 'hidden', isolation: 'isolate'}}>
<video data-aura-generated-video="true" data-aura-generated-video-bg="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e04d3e4d-8705-4b52-973b-f886f528af69_1600w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/8bd0314a-9525-4a13-996e-2c37cbd9e514/1779701761618-56a5e556-4fcb-4d80-8fcf-a03aa76ce68b.mp4" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', zIndex: '0'}}></video>
</div>
<div className="relative z-20 max-w-3xl">
<p className="eyebrow-animate mb-6 inline-flex items-center gap-4 text-xs font-medium uppercase tracking-[0.28em] text-violet-400">
<span className="h-px w-9 bg-violet-500"></span>
          Digital products. real impact.
        </p>
<h1 className="max-w-4xl text-5xl font-medium uppercase tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.35rem] xl:leading-[0.95]">
<span className="line-animate-1 block">We build</span>
<span className="line-animate-2 block">digital products</span>
<span className="line-animate-3 block">
              that
              <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-fuchsia-500 bg-clip-text text-transparent gradient-shimmer">
                drive results.
              </span>
</span>
</h1>
<p className="paragraph-animate mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          We partner with ambitious brands to design and build intuitive,
          scalable, and high-performing digital experiences.
        </p>
<div className="cta-animate flex flex-col gap-4 sm:flex-row sm:items-center mt-9 gap-x-4 gap-y-4">
<a className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_2.5rem_rgba(139,92,246,0.25)]" href="#pricing">
<span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"></span>
<span className="relative flex items-center gap-2">
              Start a project
              <span className="relative flex h-4 w-4 overflow-hidden">
<i className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" data-lucide="arrow-up-right"></i>
<i className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" data-lucide="arrow-up-right"></i>
</span>
</span>
</a>
<a className="group inline-flex items-center justify-center uppercase transition-all duration-500 hover:border-white/10 hover:bg-white/[0.05] hover:text-white text-sm font-medium text-slate-300 tracking-[0.16em] border-white/5 border rounded-full pt-4 pr-6 pb-4 pl-6 backdrop-blur-xl" href="#work">
<span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full border border-white/5 bg-white/5 transition-all duration-500 group-hover:scale-110 group-hover:border-white/15 group-hover:bg-white/10">
<i className="h-3 w-3 fill-white/60" data-lucide="play"></i>
</span>
<span className="transition-transform duration-500 group-hover:translate-x-1">See our work</span>
</a>
</div>
<div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6 text-left">
<div>
<p className="text-2xl font-medium tracking-tight text-white">
              120+
            </p>
<p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Launches
            </p>
</div>
<div className="">
<p className="text-2xl font-medium tracking-tight text-white">
              4.9/5
            </p>
<p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Client score
            </p>
</div>
<div className="">
<p className="text-2xl font-medium tracking-tight text-white">
              38%
            </p>
<p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Avg. lift
            </p>
</div>
</div>
</div>
<div className="relative z-10 min-h-[28rem] lg:min-h-[44rem]">
<div className="absolute bottom-[10%] right-0 flex items-center gap-5 rounded-3xl border border-white/10 bg-white/[0.055] px-7 py-6 shadow-[0_1.5rem_4rem_rgba(0,0,0,0.45)] backdrop-blur-xl">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl text-violet-400">
<i className="h-8 w-8" data-lucide="trending-up"></i>
</div>
<div>
<p className="text-3xl font-semibold tracking-tight text-white">
              200+
            </p>
<p className="mt-1 max-w-[10rem] text-[0.65rem] font-medium uppercase tracking-[0.18em] leading-4 text-slate-400">
              Products launched across the globe
            </p>
</div>
</div>
</div>
</section>
<section className="relative z-30 mx-auto w-full max-w-[92rem] px-5 pb-8 sm:px-8 lg:px-10 xl:px-12">
<div className="border-t border-white/10 pt-7">
<div className="flex flex-col items-center gap-7 lg:flex-row lg:justify-between">
<p className="text-left text-xs font-normal uppercase tracking-[0.22em] text-violet-400">
            Trusted by
            <br/>
              innovative brands
          </p>
<style>
            @keyframes scrollMarquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
          </style>
<div className="group flex flex-1 min-w-0 overflow-hidden" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<div className="flex shrink-0 items-center gap-10 sm:gap-12 lg:gap-16 pr-10 sm:pr-12 lg:pr-16 group-hover:[animation-play-state:paused]" style={{animation: 'scrollMarquee 20s linear infinite'}}>
<span className="brand-1 text-xl font-normal tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                cloudly
              </span>
<span className="brand-2 text-xl font-normal tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                echo
              </span>
<span className="brand-3 text-xl font-normal tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                Pulse
              </span>
<span className="brand-4 text-xl font-normal tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                vertex
              </span>
<span className="brand-5 text-xl font-normal tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                loop
              </span>
<span className="brand-6 text-xl font-normal tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                Spark
              </span>
</div>
<div aria-hidden="true" className="flex shrink-0 items-center gap-10 sm:gap-12 lg:gap-16 pr-10 sm:pr-12 lg:pr-16 group-hover:[animation-play-state:paused]" style={{animation: 'scrollMarquee 20s linear infinite'}}>
<span className="brand-1 text-xl font-normal tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                cloudly
              </span>
<span className="brand-2 text-xl font-normal tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                echo
              </span>
<span className="brand-3 text-xl font-normal tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                Pulse
              </span>
<span className="brand-4 text-xl font-normal tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                vertex
              </span>
<span className="brand-5 text-xl font-normal tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                loop
              </span>
<span className="brand-6 text-xl font-normal tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                Spark
              </span>
</div>
</div>
<div className="hidden items-center gap-3 border-l border-white/10 pl-8 text-left text-xs uppercase tracking-[0.16em] text-violet-300 lg:flex">
<i className="h-5 w-5" data-lucide="trophy"></i>
<span>
<span className="block text-violet-300">Award-winning studio</span>
<span className="mt-1 block text-[0.65rem] normal-case tracking-normal text-slate-500">
                  Awwwards · Clutch · CSS Design Awards
                </span>
</span>
</div>
</div>
</div>
</section>
<section className="relative z-30 mx-auto w-full max-w-[92rem] px-5 py-32 sm:px-8 lg:px-10 xl:px-12 flex flex-col items-center justify-center text-center min-h-[70vh] overflow-hidden" id="vision">
<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12)_0%,transparent_46%)]">
</div>
<div className="relative z-10 mb-10 flex items-center justify-center">
<div className="absolute inset-0 rounded-3xl bg-purple-500/30 blur-2xl animate-pulse"></div>
<div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-purple-400/40 bg-purple-500/20 text-purple-300 shadow-[0_0_70px_rgba(168,85,247,0.45)] backdrop-blur-xl">
<svg className="lucide lucide-zap fill-purple-400/30" fill="none" height="44" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="44" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
</path>
</svg>
</div>
</div>
<div className="relative z-10 mb-7 flex items-center justify-center gap-4">
<span className="h-px w-12 bg-purple-400/50"></span>
<p className="text-xs font-semibold uppercase tracking-[0.45em] text-purple-300">
      Our Vision
    </p>
<span className="h-px w-12 bg-purple-400/50"></span>
</div>
<h2 className="relative z-10 mx-auto max-w-7xl text-center text-[clamp(2rem,4vw,6rem)] font-black uppercase tracking-[-0.055em] leading-[0.95] text-white" id="lyric-container">
<span className="lyric-word">We</span>
<span className="lyric-word">believe</span>
<span className="lyric-word">great</span>
<span className="lyric-word">design</span>
<span className="lyric-word">isn't</span>
<span className="lyric-word">decoration</span>
<span className="lyric-word">—</span>
<span className="lyric-word">it's</span>
<span className="lyric-word">a</span>
<span className="lyric-word">force.</span>
<br className="hidden md:block"/>
<span className="lyric-word">Every</span>
<span className="lyric-word">product</span>
<span className="lyric-word">we</span>
<span className="lyric-word">craft</span>
<span className="lyric-word">is</span>
<span className="lyric-word">built</span>
<span className="lyric-word">to</span>
<span className="lyric-word">spark</span>
<span className="lyric-word">curiosity,</span>
<span className="lyric-word">move</span>
<br className="hidden md:block"/>
<span className="lyric-word">with</span>
<span className="lyric-word">intent,</span>
<span className="lyric-word">and</span>
<span className="lyric-word">strike</span>
<span className="lyric-word">with</span>
<span className="lyric-word">precision.</span>
</h2>
<style>
    #vision .lyric-word {
      display: inline-block;
      opacity: 0.16;
      color: rgba(255, 255, 255, 0.22);
      transform: translateY(18px) scale(0.98);
      filter: blur(2px);
      transition:
        opacity 0.55s ease,
        color 0.55s ease,
        transform 0.55s ease,
        filter 0.55s ease,
        text-shadow 0.55s ease;
    }

    #vision .lyric-word.is-active {
      opacity: 1;
      color: #c084fc;
      transform: translateY(0) scale(1);
      filter: blur(0);
      text-shadow:
        0 0 18px rgba(168, 85, 247, 0.75),
        0 0 42px rgba(168, 85, 247, 0.35);
    }

    #vision .lyric-word.is-past {
      opacity: 1;
      color: #ffffff;
      transform: translateY(0) scale(1);
      filter: blur(0);
      text-shadow: 0 0 18px rgba(255, 255, 255, 0.08);
    }
  </style>

</section>
<section className="relative z-30 mx-auto w-full max-w-[92rem] px-5 py-20 sm:px-8 lg:px-10 xl:px-12" id="features">
<div className="mx-auto max-w-3xl text-center">
<p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300/90">
          Features
        </p>
<h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Everything your digital launch needs.
        </h2>
<p className="mt-5 text-base leading-8 text-slate-400">
          Strategy, design, engineering, and optimization delivered as one
          focused growth system.
        </p>
</div>
<div className="mt-12 grid gap-5 md:grid-cols-3 items-start">
<article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl group transition-all duration-700 hover:-translate-y-2 hover:bg-white/[0.05] hover:border-white/20">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-200 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
<i className="h-5 w-5" data-lucide="sparkles"></i>
</div>
<h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
            Brand systems
          </h3>
<p className="mt-3 text-sm leading-7 text-slate-400">
            Positioning, visual identity, and messaging built to make your
            product instantly memorable.
          </p>
</article>
<article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl group transition-all duration-700 hover:-translate-y-2 hover:bg-white/[0.05] hover:border-white/20">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-200 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
<i className="h-5 w-5" data-lucide="layout-dashboard"></i>
</div>
<h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
            Conversion websites
          </h3>
<p className="mt-3 text-sm leading-7 text-slate-400">
            High-performance landing pages and websites designed for clarity,
            speed, and signups.
          </p>
</article>
<article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl group transition-all duration-700 hover:-translate-y-2 hover:bg-white/[0.05] hover:border-white/20">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
<i className="h-5 w-5" data-lucide="line-chart"></i>
</div>
<h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
            Growth loops
          </h3>
<p className="mt-3 text-sm leading-7 text-slate-400">
            Analytics, experiments, and campaign assets that keep improving
            after launch day.
          </p>
</article>
</div>
</section>
<section className="relative z-30 mx-auto w-full max-w-[92rem] px-5 py-20 sm:px-8 lg:px-10 xl:px-12" id="interactive-visual">
<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute left-[18%] top-[45%] h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-[130px]"></div>
<div className="absolute right-[12%] top-[42%] h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-[150px]"></div>
</div>
<div className="mx-auto max-w-3xl text-center mb-16 relative z-10">
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="text-[0.7rem] font-normal uppercase tracking-[0.22em] text-cyan-200">
        WebGL Interactive
      </span>
</div>
<h2 className="text-4xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
      Global
      <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-blue-500">
        scale.
      </span>
</h2>
<p className="mt-6 text-base leading-8 text-slate-400">
      Interact with the schema below. We build immersive 3D experiences
      that elevate your brand and captivate users worldwide.
    </p>
</div>
<div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center relative z-10">
<div className="relative min-w-0 w-full lg:flex-1 h-[30rem] sm:h-[40rem] rounded-[3rem] border border-cyan-400/15 bg-[#050505] overflow-hidden group cursor-move shadow-[0_0_90px_rgba(34,211,238,0.08),inset_0_1px_0_rgba(255,255,255,0.05)] shrink-0">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08)_0%,transparent_32%,#050505_82%)] z-10 pointer-events-none"></div>
<div className="absolute left-1/2 top-1/2 z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[90px] pointer-events-none"></div>
<div className="absolute left-1/2 top-1/2 z-10 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[80px] pointer-events-none"></div>
<canvas className="w-full h-full relative z-0" data-engine="three.js r160" height="1276" id="webgl-canvas-wow" style={{width: '868px', height: '638px'}} width="1736"></canvas>

</div>
<div className="w-full lg:w-[400px] xl:w-[450px] shrink-0 flex flex-col items-start text-left transition-all duration-1000 ease-out opacity-100 translate-x-0" id="sliding-text">
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-md">
<span className="text-[0.7rem] font-light uppercase tracking-[0.22em] text-blue-200">
          3D Integration
        </span>
</div>
<h3 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-[1.2] mb-5">
        Immersive
        <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 font-light">
          data stories.
        </span>
</h3>
<p className="text-base leading-8 text-slate-400 mb-10 font-light">
        Transcend traditional flat interfaces. Our WebGL experiences
        deliver fluid, high-performance interactions that communicate
        complex concepts with immediate visual clarity.
      </p>
<ul className="space-y-6 w-full">
<li className="flex items-center gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400">
            ⚡
          </div>
<div className="flex flex-col">
<span className="text-white font-light text-xl tracking-tight">60FPS Performance</span>
<span className="text-slate-500 text-sm mt-1 font-light">Optimized seamlessly for every device.</span>
</div>
</li>
<li className="flex items-center gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400">
            ⬡
          </div>
<div className="flex flex-col">
<span className="text-white font-light text-xl tracking-tight">Native Web Tech</span>
<span className="text-slate-500 text-sm mt-1 font-light">Built with modern web standards.</span>
</div>
</li>
</ul>
</div>
</div>
</section>
<section className="relative z-30 mx-auto w-full max-w-[92rem] px-5 py-20 sm:px-8 lg:px-10 xl:px-12" id="process">
<div className="relative w-full rounded-[3rem] bg-[#050505] border border-white/5 px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 overflow-hidden group/section shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 transition-opacity duration-1000 group-hover/section:opacity-80">
<div className="absolute -top-[30%] -left-[10%] w-[60%] h-[60%] bg-violet-600/10 rounded-full blur-[120px] mix-blend-screen transition-transform duration-1000 group-hover/section:translate-x-10 group-hover/section:translate-y-10">
</div>
<div className="absolute bottom-[0%] -right-[10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen transition-transform duration-1000 group-hover/section:-translate-x-10 group-hover/section:-translate-y-10">
</div>
</div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_30%_50%,#000_20%,transparent_100%)] z-0 pointer-events-none">
</div>
<div className="relative z-10 flex flex-col lg:flex-row gap-20 lg:gap-12 items-center">
<div className="lg:w-[40%] w-full flex flex-col items-start text-left">
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
<span className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-violet-200">
                  Process
                </span>
</div>
<h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
              A clear path from idea
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white/90 to-white/30">
                  to launch.
                </span>
</h2>
<p className="mt-6 text-base leading-8 text-slate-400 max-w-md">
              We keep momentum high with focused sprints, direct
              collaboration, and visible progress every week.
            </p>
<div className="hidden lg:flex items-center gap-4 mt-16 opacity-50 group-hover/section:opacity-100 transition-opacity duration-700">
<div className="w-16 h-[1px] bg-gradient-to-r from-violet-500 to-transparent"></div>
<span className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-white/50">
                  System Architecture
                </span>
</div>
</div>
<div className="lg:w-[60%] w-full flex flex-col md:flex-row gap-6 lg:gap-6 [perspective:1400px] [transform-style:preserve-3d]">
<div className="absolute top-1/2 left-[10%] w-[80%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block -rotate-12 z-0 pointer-events-none">
</div>
<div className="group relative flex-1 rounded-[2.5rem] bg-white/[0.02] border border-white/10 p-8 md:p-6 lg:p-8 transition-all duration-700 ease-out hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_20px_40px_-20px_rgba(139,92,246,0.15)] md:[transform:rotateY(-15deg)_rotateX(5deg)_translateZ(0px)] hover:md:[transform:rotateY(0deg)_rotateX(0deg)_translateZ(40px)_scale(1.05)] z-10 hover:z-30 overflow-hidden backdrop-blur-2xl">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
</div>
<span className="absolute -bottom-4 -right-4 text-[10rem] font-bold text-white/[0.02] transition-all duration-700 group-hover:text-white/[0.04] group-hover:-translate-y-4 group-hover:-translate-x-2 leading-none select-none pointer-events-none">
                  1
                </span>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-700 group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:border-blue-500/30">
<span className="text-xs font-medium text-blue-200">01</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
                  Discover
                </h3>
<p className="text-sm leading-loose text-slate-400 group-hover:text-slate-300 transition-colors">
                  Clarify the audience, offer, goals, and creative direction.
                </p>
</div>
</div>
<div className="group relative flex-1 rounded-[2.5rem] bg-white/[0.02] border border-white/10 p-8 md:p-6 lg:p-8 transition-all duration-700 ease-out hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_20px_40px_-20px_rgba(139,92,246,0.15)] md:mt-12 lg:mt-20 md:[transform:rotateY(-15deg)_rotateX(5deg)_translateZ(0px)] hover:md:[transform:rotateY(0deg)_rotateX(0deg)_translateZ(40px)_scale(1.05)] z-10 hover:z-30 overflow-hidden backdrop-blur-2xl">
<div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
</div>
<span className="absolute -bottom-4 -right-4 text-[10rem] font-bold text-white/[0.02] transition-all duration-700 group-hover:text-white/[0.04] group-hover:-translate-y-4 group-hover:-translate-x-2 leading-none select-none pointer-events-none">
                  2
                </span>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-700 group-hover:scale-110 group-hover:bg-violet-500/20 group-hover:border-violet-500/30">
<span className="text-xs font-medium text-violet-200">02</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
                  Design
                </h3>
<p className="text-sm leading-loose text-slate-400 group-hover:text-slate-300 transition-colors">
                  Shape the experience, content system, and conversion flow.
                </p>
</div>
</div>
<div className="group relative flex-1 rounded-[2.5rem] bg-white/[0.02] border border-white/10 p-8 md:p-6 lg:p-8 transition-all duration-700 ease-out hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_20px_40px_-20px_rgba(139,92,246,0.15)] md:mt-24 lg:mt-40 md:[transform:rotateY(-15deg)_rotateX(5deg)_translateZ(0px)] hover:md:[transform:rotateY(0deg)_rotateX(0deg)_translateZ(40px)_scale(1.05)] z-10 hover:z-30 overflow-hidden backdrop-blur-2xl">
<div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
</div>
<span className="absolute -bottom-4 -right-4 text-[10rem] font-bold text-white/[0.02] transition-all duration-700 group-hover:text-white/[0.04] group-hover:-translate-y-4 group-hover:-translate-x-2 leading-none select-none pointer-events-none">
                  3
                </span>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-700 group-hover:scale-110 group-hover:bg-fuchsia-500/20 group-hover:border-fuchsia-500/30">
<span className="text-xs font-medium text-fuchsia-200">03</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
                  Launch
                </h3>
<p className="text-sm leading-loose text-slate-400 group-hover:text-slate-300 transition-colors">
                  Build, test, publish, and optimize with performance data.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-30 mx-auto w-full max-w-[92rem] px-5 py-20 sm:px-8 lg:px-10 xl:px-12" id="work">
<div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
<div className="">
<p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300/90">
            Selected work
          </p>
<h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Bento-built launches with measurable lift.
          </h2>
<p className="mt-5 text-base leading-8 text-slate-400">
            A snapshot of brand systems, conversion sites, and product
            experiences shaped for teams moving from idea to traction.
          </p>
</div>
<div className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
<div>
<p className="text-sm font-semibold tracking-tight text-white">
              Recent outcomes
            </p>
<p className="mt-1 text-sm text-slate-500">
              Fintech, SaaS, AI tooling, and creator platforms.
            </p>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition duration-300 hover:border-blue-300/35 hover:bg-white/[0.065]" href="#pricing">
            Plan yours
            <i className="h-4 w-4" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
<div className="mt-12 grid auto-rows-[16rem] gap-5 lg:grid-cols-4 lg:auto-rows-[13.5rem]">
<article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl lg:col-span-2 lg:row-span-2">
<img alt="Analytics dashboard interface" className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/b41ed9cc-930b-4625-9af2-4a478108704b/1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent"></div>
<div className="relative z-10 flex h-full flex-col justify-end">
<span className="mb-4 w-fit rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-blue-100 backdrop-blur-xl">
                SaaS dashboard
              </span>
<h3 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Cloudly command center for faster trial activation.
            </h3>
<p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">
              Product strategy, UI system, and launch site aligned around
              onboarding clarity.
            </p>
</div>
</article>
<article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl lg:col-span-2">
<img alt="Creative brand moodboard" className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30ff8562-5a2d-46c8-8aa2-ab717e79153a_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent"></div>
<div className="relative z-10 max-w-sm">
<p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-200">
              Brand refresh
            </p>
<h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              Pulse identity system
            </h3>
<p className="mt-3 text-sm leading-7 text-slate-300">
              A premium visual language for a fast-growing data team.
            </p>
</div>
</article>
<article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] hover:scale-[1.02]">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200">
<i className="h-5 w-5" data-lucide="mouse-pointer-click"></i>
</div>
<p className="mt-8 text-4xl font-semibold tracking-tight text-white">
            42%
          </p>
<p className="mt-2 text-sm leading-7 text-slate-400">
            Increase in qualified demo clicks after the new conversion flow.
          </p>
</article>
<article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl">
<img alt="Laptop with product website" className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cca1b731-0621-4994-a36c-b2f5d5fed43b_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent"></div>
<div className="relative z-10 flex h-full items-end">
<div>
<p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                Web launch
              </p>
<h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                Vertex growth site
              </h3>
</div>
</div>
</article>
</div>
</section>
<section className="relative z-30 mx-auto w-full max-w-[92rem] px-5 py-24 sm:px-8 lg:px-10 xl:px-12 flex flex-col lg:flex-row items-center justify-between min-h-[80vh] overflow-hidden" id="services">
<style>
        @keyframes rotateCubeY {
          0% {
            transform: rotateX(-8deg) rotateY(0deg);
          }

          100% {
            transform: rotateX(-8deg) rotateY(-360deg);
          }
        }
      </style>

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute -left-[10%] top-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-violet-600/10 rounded-full blur-[120px] mix-blend-screen">
</div>
<div className="absolute -right-[10%] top-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-fuchsia-600/10 rounded-full blur-[120px] mix-blend-screen">
</div>
</div>
<div className="grid lg:grid-cols-2 gap-20 lg:gap-8 items-center w-full">

<div className="relative z-10 w-full flex flex-col justify-center">
<div className="flex items-center gap-4 text-violet-300 mb-8">
<div className="h-px w-10 bg-violet-500/50"></div>
<span className="text-xs font-semibold uppercase tracking-[0.25em]">
                What we build
              </span>
<div className="h-px w-10 bg-violet-500/50"></div>
</div>
<h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[0.9] uppercase mb-10 drop-shadow-lg">
            Services that
            <br/>
<span className="text-violet-400 drop-shadow-[0_0_25px_rgba(167,139,250,0.4)]">
                Strike.
              </span>
</h2>
<div className="flex items-center gap-4 text-slate-500">
<div className="h-px w-10 bg-white/10"></div>
<span className="text-xs font-semibold uppercase tracking-[0.25em]">
                Hover to pause
              </span>
</div>
</div>

<div className="relative z-10 w-full flex justify-center py-10 [perspective:1500px]">
<div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[400px] lg:h-[400px] [transform-style:preserve-3d] hover:[animation-play-state:paused]" style={{animation: 'rotateCubeY 24s infinite linear'}}>

<div className="absolute inset-0 w-full h-full backface-hidden rounded-[1.5rem] border border-violet-500/20 bg-gradient-to-br from-[#120b1c] to-[#050505] shadow-[inset_0_0_80px_rgba(139,92,246,0.1),0_25px_50px_-12px_rgba(0,0,0,0.5)] p-8 sm:p-10 flex flex-col max-sm:[transform:rotateY(0deg)_translateZ(140px)] sm:max-lg:[transform:rotateY(0deg)_translateZ(180px)] lg:[transform:rotateY(0deg)_translateZ(200px)]">
<div className="flex justify-between items-start mb-6">
<span className="text-violet-400 font-semibold text-lg sm:text-xl tracking-widest">
                    01
                  </span>
<svg className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400 drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white uppercase mb-4 drop-shadow-sm">
                Brand
                <br/>
                  Design
              </h3>
<p className="text-slate-400 text-base leading-8 mb-auto pr-4">
                Identity systems, logos, and visual language that gives your
                product an unfair advantage in crowded markets.
              </p>
<div className="flex flex-wrap gap-2 mt-6">
<span className="px-3 py-1.5 rounded-full border border-white/10 text-xs font-medium text-slate-300 uppercase tracking-widest bg-white/[0.03]">
                    Identity
                  </span>
<span className="px-3 py-1.5 rounded-full border border-white/10 text-xs font-medium text-slate-300 uppercase tracking-widest bg-white/[0.03]">
                    Logos
                  </span>
<span className="px-3 py-1.5 rounded-full border border-white/10 text-xs font-medium text-slate-300 uppercase tracking-widest bg-white/[0.03]">
                    Strategy
                  </span>
</div>
</div>

<div className="absolute inset-0 w-full h-full backface-hidden rounded-[1.5rem] border border-fuchsia-500/20 bg-gradient-to-br from-[#120b1c] to-[#050505] shadow-[inset_0_0_80px_rgba(217,70,239,0.1),0_25px_50px_-12px_rgba(0,0,0,0.5)] p-8 sm:p-10 flex flex-col max-sm:[transform:rotateY(90deg)_translateZ(140px)] sm:max-lg:[transform:rotateY(90deg)_translateZ(180px)] lg:[transform:rotateY(90deg)_translateZ(200px)]">
<div className="flex justify-between items-start mb-6">
<span className="text-fuchsia-400 font-semibold text-lg sm:text-xl tracking-widest">
                    02
                  </span>
<svg className="w-5 h-5 sm:w-6 sm:h-6 text-fuchsia-400 drop-shadow-[0_0_8px_rgba(217,70,239,0.8)]" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white uppercase mb-4 drop-shadow-sm">
                Product
                <br/>
                  Design
              </h3>
<p className="text-slate-400 text-base leading-8 mb-auto pr-4">
                From discovery to dev handoff — UX research, wireframes,
                prototypes, and full design systems that ship at sprint speed.
              </p>
<div className="flex flex-wrap gap-2 mt-6">
<span className="px-3 py-1.5 rounded-full border border-white/10 text-xs font-medium text-slate-300 uppercase tracking-widest bg-white/[0.03]">
                    UX
                  </span>
<span className="px-3 py-1.5 rounded-full border border-white/10 text-xs font-medium text-slate-300 uppercase tracking-widest bg-white/[0.03]">
                    UI
                  </span>
<span className="px-3 py-1.5 rounded-full border border-white/10 text-xs font-medium text-slate-300 uppercase tracking-widest bg-white/[0.03]">
                    Prototyping
                  </span>
</div>
</div>

<div className="absolute inset-0 w-full h-full backface-hidden rounded-[1.5rem] border border-purple-500/20 bg-gradient-to-br from-[#120b1c] to-[#050505] shadow-[inset_0_0_80px_rgba(168,85,247,0.1),0_25px_50px_-12px_rgba(0,0,0,0.5)] p-8 sm:p-10 flex flex-col max-sm:[transform:rotateY(180deg)_translateZ(140px)] sm:max-lg:[transform:rotateY(180deg)_translateZ(180px)] lg:[transform:rotateY(180deg)_translateZ(200px)]">
<div className="flex justify-between items-start mb-6">
<span className="text-purple-400 font-semibold text-lg sm:text-xl tracking-widest">
                    03
                  </span>
<svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white uppercase mb-4 drop-shadow-sm">
                Web
                <br/>
                  Engineering
              </h3>
<p className="text-slate-400 text-base leading-8 mb-auto pr-4">
                Responsive builds, CMS setup, analytics, and performance
                tuning for lightning-fast digital experiences.
              </p>
<div className="flex flex-wrap gap-2 mt-6">
<span className="px-3 py-1.5 rounded-full border border-white/10 text-xs font-medium text-slate-300 uppercase tracking-widest bg-white/[0.03]">
                    React
                  </span>
<span className="px-3 py-1.5 rounded-full border border-white/10 text-xs font-medium text-slate-300 uppercase tracking-widest bg-white/[0.03]">
                    Next.js
                  </span>
<span className="px-3 py-1.5 rounded-full border border-white/10 text-xs font-medium text-slate-300 uppercase tracking-widest bg-white/[0.03]">
                    Headless
                  </span>
</div>
</div>

<div className="absolute inset-0 w-full h-full backface-hidden rounded-[1.5rem] border border-violet-400/20 bg-gradient-to-br from-[#120b1c] to-[#050505] shadow-[inset_0_0_80px_rgba(167,139,250,0.1),0_25px_50px_-12px_rgba(0,0,0,0.5)] p-8 sm:p-10 flex flex-col max-sm:[transform:rotateY(-90deg)_translateZ(140px)] sm:max-lg:[transform:rotateY(-90deg)_translateZ(180px)] lg:[transform:rotateY(-90deg)_translateZ(200px)]">
<div className="flex justify-between items-start mb-6">
<span className="text-violet-300 font-semibold text-lg sm:text-xl tracking-widest">
                    04
                  </span>
<svg className="w-5 h-5 sm:w-6 sm:h-6 text-violet-300 drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white uppercase mb-4 drop-shadow-sm">
                Growth
                <br/>
                  Strategy
              </h3>
<p className="text-slate-400 text-base leading-8 mb-auto pr-4">
                Experiment plans, campaign assets, reporting, and iteration
                sprints to maximize your conversion rates.
              </p>
<div className="flex flex-wrap gap-2 mt-6">
<span className="px-3 py-1.5 rounded-full border border-white/10 text-xs font-medium text-slate-300 uppercase tracking-widest bg-white/[0.03]">
                    A/B Testing
                  </span>
<span className="px-3 py-1.5 rounded-full border border-white/10 text-xs font-medium text-slate-300 uppercase tracking-widest bg-white/[0.03]">
                    Analytics
                  </span>
<span className="px-3 py-1.5 rounded-full border border-white/10 text-xs font-medium text-slate-300 uppercase tracking-widest bg-white/[0.03]">
                    CRO
                  </span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-30 mx-auto w-full max-w-[92rem] px-5 py-24 sm:px-8 lg:px-10 xl:px-12 is-visible" id="testimonials">
<style>
    #testimonials .no-scrollbar::-webkit-scrollbar {
      display: none;
    }

    #testimonials .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    #testimonials .purple-card-border {
      background:
        linear-gradient(#0b0b0d, #0b0b0d) padding-box,
        linear-gradient(145deg, rgba(168, 85, 247, 0.35) 0%, rgba(255, 255, 255, 0.08) 42%, rgba(255, 255, 255, 0) 100%) border-box;
      border: 1px solid transparent;
    }

    #testimonials .reveal-fade {
      opacity: 0;
      transform: translateY(14px);
      transition: opacity 0.9s ease, transform 0.9s ease;
    }

    #testimonials .reveal-word {
      transform: translateY(110%);
      transition: transform 1.1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    #testimonials.is-visible .reveal-fade {
      opacity: 1;
      transform: translateY(0);
    }

    #testimonials.is-visible .reveal-word {
      transform: translateY(0);
    }

    #testimonials.is-visible .reveal-word-delay {
      transition-delay: 0.12s;
    }
  </style>
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-[12%] left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-violet-500/[0.08] blur-[140px]">
</div>
</div>
<div className="mx-auto max-w-4xl flex flex-col items-center justify-center mb-16 md:mb-24 relative z-10 text-center">
<div className="flex items-center gap-4 mb-8 reveal-fade">
<div className="h-[1px] w-8 md:w-12 bg-violet-400/40"></div>
<span className="text-violet-200 text-[0.7rem] font-normal uppercase tracking-[0.22em]">
        Testimonials
      </span>
<div className="h-[1px] w-8 md:w-12 bg-violet-400/40"></div>
</div>
<h2 className="text-4xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.05]">
<span className="overflow-hidden block pb-1">
<span className="block reveal-word">Reactions From</span>
</span>
<span className="overflow-hidden block pb-2">
<span className="block reveal-word reveal-word-delay text-slate-300">Innovative Brands.</span>
</span>
</h2>
</div>
<div className="relative group z-10 -mx-5 sm:-mx-8 lg:-mx-10 xl:-mx-12">
<div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none">
</div>
<div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none">
</div>
<div className="flex gap-5 md:gap-6 overflow-x-auto [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-5 md:px-10 py-10 items-center snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing" id="scroll-container" style={{cursor: 'grab'}}>

<div className="snap-center shrink-0 w-[20rem] md:w-[24rem] h-[26rem] rounded-[1.75rem] relative purple-card-border transition-transform duration-700 ease-out hover:-translate-y-2 group/card transform -rotate-1">
<div className="absolute inset-0 bg-[#0b0b0d] rounded-[1.75rem] z-0 overflow-hidden">
<div className="absolute -top-20 -left-20 w-56 h-56 bg-violet-500 rounded-full blur-[85px] opacity-[0.13] group-hover/card:opacity-[0.22] transition-opacity duration-700">
</div>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<div className="">
<svg className="h-6 w-6 text-violet-300 mb-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
<p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
              "Nexora translated a messy product story into a site customers understood immediately. Our demo
              requests
              doubled within weeks."
            </p>
</div>
<div className="flex items-center justify-between w-full mt-8">
<div className="flex items-center gap-3">
<img alt="Maya Chen" className="w-10 h-10 rounded-full object-cover border border-violet-400/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72adc0f8-ad1f-4732-a5bf-c000b45152a2_800w.webp"/>
<div className="flex flex-col">
<span className="text-white text-sm font-normal tracking-tight">Maya Chen</span>
<span className="text-slate-500 text-xs">Founder, Cloudly</span>
</div>
</div>
<div className="flex gap-0.5 text-violet-300 text-sm">★★★★★</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[20rem] md:w-[24rem] h-[26rem] rounded-[1.75rem] relative purple-card-border transition-transform duration-700 ease-out hover:-translate-y-2 group/card transform rotate-2">
<div className="absolute inset-0 bg-[#0b0b0d] rounded-[1.75rem] z-0 overflow-hidden">
<div className="absolute -top-20 -left-20 w-56 h-56 bg-violet-500 rounded-full blur-[85px] opacity-[0.13] group-hover/card:opacity-[0.22] transition-opacity duration-700">
</div>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<div>
<svg className="h-6 w-6 text-violet-300 mb-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
<p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
              "The process was crisp, collaborative, and fast. We launched a premium brand without slowing our
              product
              roadmap."
            </p>
</div>
<div className="flex items-center justify-between w-full mt-8">
<div className="flex items-center gap-3">
<img alt="Eli Morgan" className="w-10 h-10 rounded-full object-cover border border-violet-400/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9fc26ef9-ae15-4f56-ac63-077c7659dafa_320w.png"/>
<div className="flex flex-col">
<span className="text-white text-sm font-normal tracking-tight">Eli Morgan</span>
<span className="text-slate-500 text-xs">CMO, Pulse</span>
</div>
</div>
<div className="flex gap-0.5 text-violet-300 text-sm">★★★★★</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[20rem] md:w-[24rem] h-[26rem] rounded-[1.75rem] relative purple-card-border transition-transform duration-700 ease-out hover:-translate-y-2 group/card transform -rotate-1">
<div className="absolute inset-0 bg-[#0b0b0d] rounded-[1.75rem] z-0 overflow-hidden">
<div className="absolute -top-20 -left-20 w-56 h-56 bg-violet-500 rounded-full blur-[85px] opacity-[0.13] group-hover/card:opacity-[0.22] transition-opacity duration-700">
</div>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<div>
<svg className="h-6 w-6 text-violet-300 mb-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
<p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
              "Their growth system gave us the confidence to ship campaigns, measure impact, and keep improving
              every
              month."
            </p>
</div>
<div className="flex items-center justify-between w-full mt-8">
<div className="flex items-center gap-3">
<img alt="Noor Patel" className="w-10 h-10 rounded-full object-cover border border-violet-400/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec6a5cab-715c-44c6-9cd8-aff440c886f6_320w.webp"/>
<div className="flex flex-col">
<span className="text-white text-sm font-normal tracking-tight">Noor Patel</span>
<span className="text-slate-500 text-xs">Head of Growth, Vertex</span>
</div>
</div>
<div className="flex gap-0.5 text-violet-300 text-sm">★★★★★</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[20rem] md:w-[24rem] h-[26rem] rounded-[1.75rem] relative purple-card-border transition-transform duration-700 ease-out hover:-translate-y-2 group/card transform rotate-3">
<div className="absolute inset-0 bg-[#0b0b0d] rounded-[1.75rem] z-0 overflow-hidden">
<div className="absolute -top-20 -left-20 w-56 h-56 bg-violet-500 rounded-full blur-[85px] opacity-[0.13] group-hover/card:opacity-[0.22] transition-opacity duration-700">
</div>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<div>
<svg className="h-6 w-6 text-violet-300 mb-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
<p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
              "If you want something safe, go elsewhere. If you want something unforgettable, follow the brief and
              trust
              their instincts implicitly."
            </p>
</div>
<div className="flex items-center justify-between w-full mt-8">
<div className="flex items-center gap-3">
<img alt="Tariq Hassan" className="w-10 h-10 rounded-full object-cover border border-violet-400/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/b5d747ab-b9b0-4379-9347-fd0661e8f119/320w.png"/>
<div className="flex flex-col">
<span className="text-white text-sm font-normal tracking-tight">Tariq Hassan</span>
<span className="text-slate-500 text-xs">Founder, Volt Systems</span>
</div>
</div>
<div className="flex gap-0.5 text-violet-300 text-sm">★★★★★</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[20rem] md:w-[24rem] h-[26rem] rounded-[1.75rem] relative purple-card-border transition-transform duration-700 ease-out hover:-translate-y-2 group/card transform -rotate-2">
<div className="absolute inset-0 bg-[#0b0b0d] rounded-[1.75rem] z-0 overflow-hidden">
<div className="absolute -top-20 -left-20 w-56 h-56 bg-violet-500 rounded-full blur-[85px] opacity-[0.13] group-hover/card:opacity-[0.22] transition-opacity duration-700">
</div>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<div>
<svg className="h-6 w-6 text-violet-300 mb-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
<p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
              "The architecture was pristine. We scaled to 100k users without a single hiccup in performance or
              latency."
            </p>
</div>
<div className="flex items-center justify-between w-full mt-8">
<div className="flex items-center gap-3">
<img alt="Sarah Jenkins" className="w-10 h-10 rounded-full object-cover border border-violet-400/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a4b4a91c-eb34-493f-93c5-9b21e5150b6f_320w.webp"/>
<div className="flex flex-col">
<span className="text-white text-sm font-normal tracking-tight">Sarah Jenkins</span>
<span className="text-slate-500 text-xs">CTO, Nexus</span>
</div>
</div>
<div className="flex gap-0.5 text-violet-300 text-sm">★★★★★</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[20rem] md:w-[24rem] h-[26rem] rounded-[1.75rem] relative purple-card-border transition-transform duration-700 ease-out hover:-translate-y-2 group/card transform rotate-1">
<div className="absolute inset-0 bg-[#0b0b0d] rounded-[1.75rem] z-0 overflow-hidden">
<div className="absolute -top-20 -left-20 w-56 h-56 bg-violet-500 rounded-full blur-[85px] opacity-[0.13] group-hover/card:opacity-[0.22] transition-opacity duration-700">
</div>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<div>
<svg className="h-6 w-6 text-violet-300 mb-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
<p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
              "Their design system unified our entire product suite. Development speed increased by 40% in just two
              months."
            </p>
</div>
<div className="flex items-center justify-between w-full mt-8">
<div className="flex items-center gap-3">
<img alt="David Chen" className="w-10 h-10 rounded-full object-cover border border-violet-400/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5866f61c-e537-452b-9d35-053e985d625b_320w.webp"/>
<div className="flex flex-col">
<span className="text-white text-sm font-normal tracking-tight">David Chen</span>
<span className="text-slate-500 text-xs">VPE, Quantum</span>
</div>
</div>
<div className="flex gap-0.5 text-violet-300 text-sm">★★★★★</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[20rem] md:w-[24rem] h-[26rem] rounded-[1.75rem] relative purple-card-border transition-transform duration-700 ease-out hover:-translate-y-2 group/card transform rotate-2">
<div className="absolute inset-0 bg-[#0b0b0d] rounded-[1.75rem] z-0 overflow-hidden">
<div className="absolute -top-20 -left-20 w-56 h-56 bg-violet-500 rounded-full blur-[85px] opacity-[0.13] group-hover/card:opacity-[0.22] transition-opacity duration-700">
</div>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<div>
<svg className="h-6 w-6 text-violet-300 mb-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
<p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
              "Finally, an engineering partner that understands business metrics. Our conversion rate jumped
              significantly."
            </p>
</div>
<div className="flex items-center justify-between w-full mt-8">
<div className="flex items-center gap-3">
<img alt="Elena Rodriguez" className="w-10 h-10 rounded-full object-cover border border-violet-400/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7debb119-f845-4a33-8704-883ab284b52c_320w.webp"/>
<div className="flex flex-col">
<span className="text-white text-sm font-normal tracking-tight">Elena Rodriguez</span>
<span className="text-slate-500 text-xs">Director, Shift</span>
</div>
</div>
<div className="flex gap-0.5 text-violet-300 text-sm">★★★★★</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[20rem] md:w-[24rem] h-[26rem] rounded-[1.75rem] relative purple-card-border transition-transform duration-700 ease-out hover:-translate-y-2 group/card transform -rotate-1">
<div className="absolute inset-0 bg-[#0b0b0d] rounded-[1.75rem] z-0 overflow-hidden">
<div className="absolute -top-20 -left-20 w-56 h-56 bg-violet-500 rounded-full blur-[85px] opacity-[0.13] group-hover/card:opacity-[0.22] transition-opacity duration-700">
</div>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<div>
<svg className="h-6 w-6 text-violet-300 mb-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
<p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
              "From concept to deployment, the workflow was incredibly transparent. A masterclass in modern digital
              execution."
            </p>
</div>
<div className="flex items-center justify-between w-full mt-8">
<div className="flex items-center gap-3">
<img alt="Marcus Johnson" className="w-10 h-10 rounded-full object-cover border border-violet-400/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce5a380c-785b-4ec0-9cd9-486d09b03a12_320w.webp"/>
<div className="flex flex-col">
<span className="text-white text-sm font-normal tracking-tight">Marcus Johnson</span>
<span className="text-slate-500 text-xs">CEO, Apex</span>
</div>
</div>
<div className="flex gap-0.5 text-violet-300 text-sm">★★★★★</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full mt-12 px-6 relative z-10">
<div className="max-w-[90%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-violet-500/35 to-transparent">
</div>
</div>

</section>
<section className="relative z-30 mx-auto w-full max-w-[92rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 xl:px-12 overflow-hidden" id="pricing">
<style>
        @media (min-width: 1024px) {
          .pricing-stage {
            perspective: 2500px;
            transform-style: preserve-3d;
          }

          .pricing-card {
            transition:
              transform 0.65s cubic-bezier(0.2, 0.8, 0.2, 1),
              opacity 0.55s ease,
              filter 0.55s ease,
              box-shadow 0.55s ease,
              border-color 0.55s ease;
            transform-style: preserve-3d;
            will-change: transform, opacity, filter;
          }

          .pricing-card-1 {
            transform: rotateY(16deg) translateZ(-60px) translateX(65px);
            z-index: 15;
          }

          .pricing-card-2 {
            transform: rotateY(0deg) translateZ(60px) scale(1.05);
            z-index: 20;
            box-shadow: 0 40px 80px -30px rgba(59, 130, 246, 0.3);
          }

          .pricing-card-3 {
            transform: rotateY(-16deg) translateZ(-60px) translateX(-65px);
            z-index: 15;
          }

          /* When the cursor is inside the stage, blur only the inactive cards. */
          .pricing-stage[data-active] .pricing-card {
            opacity: 0.24;
            filter: blur(5px);
            z-index: 0;
          }

          .pricing-stage[data-active="1"] .pricing-card-1,
          .pricing-stage[data-active="2"] .pricing-card-2,
          .pricing-stage[data-active="3"] .pricing-card-3 {
            opacity: 1;
            filter: blur(0);
            z-index: 90;
          }

          .pricing-stage[data-active="1"] .pricing-card-1 {
            transform: rotateY(0deg) translateZ(170px) scale(1.17) translateX(150px);
            border-color: rgba(217, 70, 239, 0.6);
            box-shadow: 0 0 105px -20px rgba(217, 70, 239, 0.36);
          }

          .pricing-stage[data-active="2"] .pricing-card-2 {
            transform: rotateY(0deg) translateZ(160px) scale(1.12);
            border-color: rgba(96, 165, 250, 0.6);
            box-shadow: 0 0 115px -20px rgba(59, 130, 246, 0.45);
          }

          .pricing-stage[data-active="3"] .pricing-card-3 {
            transform: rotateY(0deg) translateZ(170px) scale(1.17) translateX(-150px);
            border-color: rgba(255, 255, 255, 0.45);
            box-shadow: 0 0 105px -20px rgba(255, 255, 255, 0.18);
          }
        }
      </style>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] pointer-events-none z-0 flex justify-between opacity-30 mix-blend-screen">
<div className="w-80 h-80 bg-fuchsia-600/30 rounded-full blur-[120px]"></div>
<div className="w-96 h-96 bg-blue-600/30 rounded-full blur-[120px]"></div>
<div className="w-80 h-80 bg-slate-400/20 rounded-full blur-[120px]"></div>
</div>
<div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[200%] h-[500px] [transform:rotateX(70deg)_translateZ(-200px)] pointer-events-none opacity-40 lg:opacity-60 z-0" style={{maskImage: 'radial-gradient(ellipse at top, black 10%, transparent 60%)', WebkitMaskImage: 'radial-gradient(ellipse at top, black 10%, transparent 60%)'}}>
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.15)_1px,transparent_1px)] bg-[size:50px_50px]">
</div>
<div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[150px] rounded-full">
</div>
</div>
<div className="mx-auto max-w-3xl text-center relative z-20">
<p className="text-xs font-medium uppercase tracking-[0.22em] text-violet-300/90">
          Pricing
        </p>
<h2 className="mt-4 text-4xl font-medium tracking-tight text-white sm:text-5xl drop-shadow-sm">
          Flexible packages for every stage.
        </h2>
<p className="mt-5 text-base leading-8 text-slate-400">
          Pick a focused sprint or an ongoing growth partnership.
        </p>
</div>
<div className="pricing-stage relative z-20 mt-20 lg:mt-32 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 w-full max-w-7xl mx-auto">
<article className="pricing-card pricing-card-1 group relative w-full lg:w-[340px] xl:w-[380px] shrink-0 rounded-[2.5rem] border border-white/10 bg-[#0a0a0c]/80 p-8 xl:p-10 backdrop-blur-2xl overflow-hidden">
<div className="absolute -top-[100px] -left-[100px] w-[250px] h-[250px] rounded-full bg-fuchsia-500/10 blur-[70px] group-hover:bg-fuchsia-500/20 transition-colors duration-700">
</div>
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem] pointer-events-none">
</div>
<div className="flex flex-col h-full relative z-10">
<div className="mb-6 border-b border-white/5 pb-6">
<h3 className="text-2xl font-medium tracking-tight text-white">Launch Sprint</h3>
<p className="mt-3 text-sm leading-6 text-slate-400 min-h-[48px]">
                For new ideas, landing pages, and campaign launches.
              </p>
</div>
<div className="mb-8">
<span className="text-5xl font-medium tracking-tight text-white">$4.8k</span>
</div>
<div className="flex-1 mt-auto">
<p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-fuchsia-300/80 mb-6">Includes</p>
<ul className="space-y-5 relative before:absolute before:inset-y-3 before:left-[7px] before:w-[2px] before:bg-gradient-to-b before:from-fuchsia-500/40 before:to-transparent">
<li className="relative flex items-center gap-4 pl-8">
<div className="absolute left-[7px] top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-[#0a0a0c] border-2 border-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.4)] z-10">
<svg className="w-2.5 h-2.5 text-fuchsia-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm font-medium text-slate-300">Brand direction</span>
</li>
<li className="relative flex items-center gap-4 pl-8">
<div className="absolute left-[7px] top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-[#0a0a0c] border-2 border-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.4)] z-10">
<svg className="w-2.5 h-2.5 text-fuchsia-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm font-medium text-slate-300">Landing page design</span>
</li>
<li className="relative flex items-center gap-4 pl-8">
<div className="absolute left-[7px] top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-[#0a0a0c] border-2 border-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.4)] z-10">
<svg className="w-2.5 h-2.5 text-fuchsia-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm font-medium text-slate-300">Responsive build</span>
</li>
</ul>
</div>
</div>
</article>
<article className="pricing-card pricing-card-2 group relative w-full lg:w-[380px] xl:w-[420px] shrink-0 rounded-[2.5rem] border border-blue-400/30 bg-[#0c101a]/90 p-10 xl:p-12 backdrop-blur-2xl overflow-hidden">
<div className="absolute -top-[150px] -right-[150px] w-[350px] h-[350px] rounded-full bg-blue-500/15 blur-[90px] group-hover:bg-blue-500/25 transition-colors duration-700">
</div>
<div className="absolute bottom-0 left-0 w-[250px] h-[250px] rounded-full bg-cyan-500/10 blur-[80px] group-hover:bg-cyan-500/20 transition-colors duration-700">
</div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,165,250,0.1),transparent_60%)] pointer-events-none">
</div>
<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem] pointer-events-none">
</div>
<div className="flex flex-col h-full relative z-10">
<div className="mb-6 border-b border-blue-500/20 pb-6">
<div className="flex items-start sm:items-center justify-between gap-4 mb-4 flex-col sm:flex-row">
<h3 className="text-3xl font-medium tracking-tight text-white drop-shadow-md">Growth Studio</h3>
<span className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-blue-200 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.3)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
</span>
                Popular
                </span>
</div>
<p className="mt-3 text-sm leading-6 text-slate-300 min-h-[48px]">
                For teams ready to scale brand, website, and experiments.
              </p>
</div>
<div className="mb-10">
<span className="text-6xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200 drop-shadow-sm">$9.5k</span>
</div>
<div className="flex-1 mt-auto">
<p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-blue-300/90 mb-6">Core System</p>
<ul className="space-y-5 relative before:absolute before:inset-y-3 before:left-[7px] before:w-[2px] before:bg-gradient-to-b before:from-blue-500/50 before:to-transparent">
<li className="relative flex items-center gap-4 pl-8">
<div className="absolute left-[7px] top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-[#0c101a] border-2 border-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.6)] z-10">
<svg className="w-2.5 h-2.5 text-blue-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm font-medium text-slate-200">Full website system</span>
</li>
<li className="relative flex items-center gap-4 pl-8">
<div className="absolute left-[7px] top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-[#0c101a] border-2 border-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.6)] z-10">
<svg className="w-2.5 h-2.5 text-blue-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm font-medium text-slate-200">Conversion copy</span>
</li>
<li className="relative flex items-center gap-4 pl-8">
<div className="absolute left-[7px] top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-[#0c101a] border-2 border-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.6)] z-10">
<svg className="w-2.5 h-2.5 text-blue-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm font-medium text-slate-200">Analytics setup</span>
</li>
</ul>
</div>
</div>
</article>
<article className="pricing-card pricing-card-3 group relative w-full lg:w-[340px] xl:w-[380px] shrink-0 rounded-[2.5rem] border border-white/10 bg-[#0a0a0c]/80 p-8 xl:p-10 backdrop-blur-2xl overflow-hidden">
<div className="absolute -bottom-[100px] -right-[100px] w-[250px] h-[250px] rounded-full bg-slate-400/10 blur-[70px] group-hover:bg-slate-400/20 transition-colors duration-700">
</div>
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem] pointer-events-none">
</div>
<div className="flex flex-col h-full relative z-10">
<div className="mb-6 border-b border-white/5 pb-6">
<h3 className="text-2xl font-medium tracking-tight text-white">Partner Retainer</h3>
<p className="mt-3 text-sm leading-6 text-slate-400 min-h-[48px]">
                For continuous creative, optimization, and campaign support.
              </p>
</div>
<div className="mb-8">
<span className="text-5xl font-medium tracking-tight text-white">Custom</span>
</div>
<div className="flex-1 mt-auto">
<p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-slate-400/80 mb-6">Includes</p>
<ul className="space-y-5 relative before:absolute before:inset-y-3 before:left-[7px] before:w-[2px] before:bg-gradient-to-b before:from-slate-400/40 before:to-transparent">
<li className="relative flex items-center gap-4 pl-8">
<div className="absolute left-[7px] top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-[#0a0a0c] border-2 border-slate-300 shadow-[0_0_10px_rgba(203,213,225,0.3)] z-10">
<svg className="w-2.5 h-2.5 text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm font-medium text-slate-300">Monthly design sprints</span>
</li>
<li className="relative flex items-center gap-4 pl-8">
<div className="absolute left-[7px] top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-[#0a0a0c] border-2 border-slate-300 shadow-[0_0_10px_rgba(203,213,225,0.3)] z-10">
<svg className="w-2.5 h-2.5 text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm font-medium text-slate-300">Experiment roadmap</span>
</li>
<li className="relative flex items-center gap-4 pl-8">
<div className="absolute left-[7px] top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-[#0a0a0c] border-2 border-slate-300 shadow-[0_0_10px_rgba(203,213,225,0.3)] z-10">
<svg className="w-2.5 h-2.5 text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm font-medium text-slate-300">Priority support</span>
</li>
</ul>
</div>
</div>
</article>
</div>

</section>
<section className="relative z-30 mx-auto w-full max-w-[92rem] px-5 py-24 sm:px-8 lg:px-10 xl:px-12" id="cta">
<div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-b from-white/[0.045] via-white/[0.025] to-transparent p-10 text-center sm:p-16 lg:p-20 backdrop-blur-2xl transition-all duration-700 hover:border-violet-300/25 hover:shadow-[0_0_90px_rgba(139,92,246,0.12)]">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.13)_0%,rgba(139,92,246,0.08)_34%,transparent_68%)]">
</div>
<div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[110px]">
</div>
<div className="pointer-events-none absolute bottom-[-8rem] left-1/2 h-[18rem] w-[42rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[100px]">
</div>
<div className="pointer-events-none absolute inset-[1px] rounded-[3rem] border border-white/[0.04]"></div>
<div className="relative z-10 mx-auto max-w-2xl">
<h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Ready to build something extraordinary?
      </h2>
<p className="mt-6 text-lg leading-8 text-slate-400">
        Let's collaborate to bring your digital vision to life. Fast
        sprints, clear communication, and measurable results.
      </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="group inline-flex items-center justify-center gap-2 rounded-full border border-violet-300/20 bg-white/[0.06] px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:border-violet-300/35 hover:shadow-[0_0_2.5rem_rgba(139,92,246,0.22)]" href="#pricing">
          Start Your Project
          <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>
</div>
</div>
</section>
</main>
<footer className="relative overflow-hidden bg-black px-5 py-12 text-white sm:px-8 lg:px-10 xl:px-12">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[5rem]">
</div>
<div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.035] to-transparent">
</div>
<div className="relative mx-auto flex w-full max-w-[92rem] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
<div className="max-w-md">
<a aria-label="Hyperbolt Studio home" className="group flex items-center gap-3.5" href="#">
<span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/45 bg-white/[0.045] text-blue-400 shadow-[0_0_1.5rem_rgba(124,58,237,0.28)] backdrop-blur-xl">
<i className="h-6 w-6 fill-blue-500/20" data-lucide="zap"></i>
</span>
<span className="leading-none">
<span className="block text-sm font-medium uppercase tracking-[0.28em] text-white">
                HYPERBOLT
              </span>
<span className="mt-1 block text-[0.625rem] font-normal uppercase tracking-[0.42em] text-slate-400">
                STUDIO
              </span>
</span>
</a>
<p className="mt-6 text-sm leading-7 text-slate-400">
          We design and build digital products, launch systems, and growth
          experiences for ambitious teams.
        </p>
</div>
<div className="grid gap-8 text-sm sm:grid-cols-3 lg:gap-14">
<div>
<p className="font-medium uppercase tracking-[0.18em] text-white">
            Explore
          </p>
<div className="mt-4 grid gap-3 text-slate-500">
<a className="transition hover:text-white" href="#work">Work</a>
<a className="transition hover:text-white" href="#services">
              Services
            </a>
<a className="transition hover:text-white" href="#process">Process</a>
</div>
</div>
<div>
<p className="font-medium uppercase tracking-[0.18em] text-white">
            Company
          </p>
<div className="mt-4 grid gap-3 text-slate-500">
<a className="transition hover:text-white" href="#testimonials">
              Testimonials
            </a>
<a className="transition hover:text-white" href="#features">
              Features
            </a>
<a className="transition hover:text-white" href="#pricing">Pricing</a>
</div>
</div>
<div>
<p className="font-medium uppercase tracking-[0.18em] text-white">
            Contact
          </p>
<div className="mt-4 grid gap-3 text-slate-500">
<a className="transition hover:text-white" href="mailto:hello@hyperbolt.studio">
              hello@hyperbolt.studio
            </a>
<span>Remote worldwide</span>
<span>Mon–Fri, 9am–5pm</span>
</div>
</div>
</div>
</div>
<div className="relative mx-auto mt-10 flex w-full max-w-[92rem] flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
<p>© 2025 Hyperbolt Studio. All rights reserved.</p>
<div className="flex gap-5">
<a className="transition hover:text-slate-300" href="#">Privacy</a>
<a className="transition hover:text-slate-300" href="#">Terms</a>
</div>
</div>
</footer>



    </>
  );
}
