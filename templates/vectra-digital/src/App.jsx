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



          (function() {
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('mobile-menu-icon');
            if(btn && menu && icon) {
              btn.addEventListener('click', function() {
                menu.classList.toggle('hidden');
                menu.classList.toggle('flex');
                const isExpanded = !menu.classList.contains('hidden');
                btn.setAttribute('aria-expanded', isExpanded);
                icon.setAttribute('icon', isExpanded ? 'solar:close-circle-linear' : 'solar:hamburger-menu-linear');
              });
              menu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                  menu.classList.add('hidden');
                  menu.classList.remove('flex');
                  btn.setAttribute('aria-expanded', 'false');
                  icon.setAttribute('icon', 'solar:hamburger-menu-linear');
                });
              });
            }
          })();
        


          (function () {
            const initLyric = () => {
              const container = document.getElementById('lyric-container');
              if (!container) return;

              const words = Array.from(container.querySelectorAll('.lyric-word'));
              let timers = [];
              let hasPlayed = false;

              const resetWords = () => {
                timers.forEach(clearTimeout);
                timers = [];
                hasPlayed = false;

                words.forEach((word) => {
                  word.classList.remove('is-active', 'is-done');
                });
              };

              const playKaraoke = () => {
                if (hasPlayed) return;
                hasPlayed = true;

                words.forEach((word, index) => {
                  const timer = setTimeout(() => {
                    if (words[index - 1]) {
                      words[index - 1].classList.remove('is-active');
                      words[index - 1].classList.add('is-done');
                    }

                    word.classList.add('is-active');

                    if (index === words.length - 1) {
                      setTimeout(() => {
                        word.classList.remove('is-active');
                        word.classList.add('is-done');
                      }, 500);
                    }
                  }, index * 220);

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
              }, { threshold: 0.35 });

              observer.observe(container);
            };

            setTimeout(initLyric, 150);
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
                const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x020617, transparent: true, opacity: 0.92 });
                globeGroup.add(new THREE.Mesh(sphereGeometry, sphereMaterial));

                const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0xfbbf24, wireframe: true, transparent: true, opacity: 0.14 });
                globeGroup.add(new THREE.Mesh(sphereGeometry, wireframeMaterial));

                const dotsGeometry = new THREE.BufferGeometry();
                const dotsCount = 1500;
                const dotsPos = new Float32Array(dotsCount * 3);
                const dotsColors = new Float32Array(dotsCount * 3);
                const colorPalette = [new THREE.Color(0xfbbf24), new THREE.Color(0xf43f5e), new THREE.Color(0xf97316)];

                for (let i = 0; i < dotsCount; i++) {
                  const phi = Math.acos(1 - 2 * (i + 0.5) / dotsCount);
                  const theta = Math.PI * (1 + Math.sqrt(5)) * i;
                  const r = 10.05 + Math.random() * 0.12;
                  dotsPos[i * 3] = r * Math.cos(theta) * Math.sin(phi);
                  dotsPos[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
                  dotsPos[i * 3 + 2] = r * Math.cos(phi);
                  const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
                  dotsColors[i * 3] = color.r; dotsColors[i * 3 + 1] = color.g; dotsColors[i * 3 + 2] = color.b;
                }
                dotsGeometry.setAttribute('position', new THREE.BufferAttribute(dotsPos, 3));
                dotsGeometry.setAttribute('color', new THREE.BufferAttribute(dotsColors, 3));
                const dotsMaterial = new THREE.PointsMaterial({ size: 0.095, vertexColors: true, transparent: true, opacity: 1, blending: THREE.AdditiveBlending });
                globeGroup.add(new THREE.Points(dotsGeometry, dotsMaterial));

                const curves = [];
                for (let i = 0; i < 44; i++) {
                  const i1 = Math.floor(Math.random() * dotsCount), i2 = Math.floor(Math.random() * dotsCount);
                  const p1 = new THREE.Vector3(dotsPos[i1*3], dotsPos[i1*3+1], dotsPos[i1*3+2]);
                  const p2 = new THREE.Vector3(dotsPos[i2*3], dotsPos[i2*3+1], dotsPos[i2*3+2]);
                  const distance = p1.distanceTo(p2);
                  if (distance > 5 && distance < 18) {
                    const mid = p1.clone().add(p2).multiplyScalar(0.5);
                    mid.normalize().multiplyScalar(10 + distance * 0.4);
                    const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
                    curves.push(curve);
                    const tubeGeom = new THREE.TubeGeometry(curve, 20, 0.025, 8, false);
                    const tubeMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending });
                    globeGroup.add(new THREE.Mesh(tubeGeom, tubeMat));
                  }
                }

                const traffics = [];
                const trafficGeom = new THREE.SphereGeometry(0.09, 8, 8);
                const trafficMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1, blending: THREE.AdditiveBlending });
                curves.forEach(curve => {
                  const traffic = new THREE.Mesh(trafficGeom, trafficMat);
                  globeGroup.add(traffic);
                  traffics.push({ mesh: traffic, curve: curve, progress: Math.random(), speed: 0.003 + Math.random() * 0.005 });
                });

                const rings = [];
                for (let i = 0; i < 3; i++) {
                  const ringGeom = new THREE.TorusGeometry(13 + i * 1.2, 0.018, 16, 100);
                  const ringMat = new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? 0xfbbf24 : 0xf43f5e, transparent: true, opacity: 0.28, blending: THREE.AdditiveBlending });
                  const ring = new THREE.Mesh(ringGeom, ringMat);
                  ring.rotation.x = Math.random() * Math.PI; ring.rotation.y = Math.random() * Math.PI;
                  globeGroup.add(ring);
                  rings.push({ mesh: ring, speedX: (Math.random() - 0.5) * 0.005, speedY: (Math.random() - 0.5) * 0.005 });
                }

                const bgGeom = new THREE.BufferGeometry();
                const bgPos = new Float32Array(900 * 3);
                for (let i = 0; i < 900; i++) {
                  bgPos[i*3] = (Math.random() - 0.5) * 60; bgPos[i*3+1] = (Math.random() - 0.5) * 60; bgPos[i*3+2] = (Math.random() - 0.5) * 60;
                }
                bgGeom.setAttribute('position', new THREE.BufferAttribute(bgPos, 3));
                const bgMat = new THREE.PointsMaterial({ size: 0.06, color: 0xf97316, transparent: true, opacity: 0.42, blending: THREE.AdditiveBlending });
                const bgParticles = new THREE.Points(bgGeom, bgMat);
                scene.add(bgParticles);

                let mouseX = 0, mouseY = 0;
                canvas.parentElement.addEventListener('mousemove', e => {
                  const rect = canvas.parentElement.getBoundingClientRect();
                  mouseX = ((e.clientX - rect.left) / canvas.parentElement.clientWidth) * 2 - 1;
                  mouseY = -((e.clientY - rect.top) / canvas.parentElement.clientHeight) * 2 + 1;
                });

                window.addEventListener('resize', () => {
                  if(!canvas.clientWidth) return;
                  camera.aspect = canvas.clientWidth / canvas.clientHeight;
                  camera.updateProjectionMatrix();
                  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
                });

                const clock = new THREE.Clock();
                function animate() {
                  requestAnimationFrame(animate);
                  const elapsed = clock.getElapsedTime();
                  globeGroup.rotation.y += 0.002;
                  globeGroup.rotation.x = Math.sin(elapsed * 0.2) * 0.05;
                  bgParticles.rotation.y = -elapsed * 0.02;
                  traffics.forEach(t => {
                    t.progress += t.speed; if (t.progress > 1) t.progress = 0;
                    t.mesh.position.copy(t.curve.getPoint(t.progress));
                  });
                  rings.forEach(r => { r.mesh.rotation.x += r.speedX; r.mesh.rotation.y += r.speedY; });
                  camera.position.x += (mouseX * 4 - camera.position.x) * 0.05;
                  camera.position.y += (mouseY * 4 - camera.position.y) * 0.05;
                  camera.lookAt(scene.position);
                  renderer.render(scene, camera);
                }
                animate();
              }
            


            (function() {
              const texts = ["Search interfaces...", "Find brand systems...", "Explore Web3...", "Discover SaaS UI..."];
              const el = document.getElementById('typewriter-text-aura-local');
              if (!el || el.dataset.initialized) return;
              el.dataset.initialized = 'true';
              let textIndex = 0;
              let charIndex = 0;
              let isDeleting = false;
              function type() {
                if (!document.getElementById('typewriter-text-aura-local')) return;
                const current = texts[textIndex];
                if (isDeleting) {
                  el.textContent = current.substring(0, charIndex - 1);
                  charIndex--;
                } else {
                  el.textContent = current.substring(0, charIndex + 1);
                  charIndex++;
                }
                let speed = isDeleting ? 30 : 70;
                if (!isDeleting && charIndex === current.length) {
                  isDeleting = true;
                  speed = 2000;
                } else if (isDeleting && charIndex === 0) {
                  isDeleting = false;
                  textIndex = (textIndex + 1) % texts.length;
                  speed = 400;
                }
                setTimeout(type, speed);
              }
              setTimeout(type, 800);
            })();
          


          (function() {
            const texts = ["Search interfaces...", "Find brand systems...", "Explore Web3...", "Discover SaaS UI..."];
            const textElement = document.getElementById('typewriter-text-aura');
            if (!textElement) return;
            if (textElement.dataset.initialized) return;
            textElement.dataset.initialized = 'true';

            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

            function type() {
              if (!document.getElementById('typewriter-text-aura')) return;
              const currentText = texts[textIndex];
              if (isDeleting) {
                textElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
              } else {
                textElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
              }

              let typeSpeed = isDeleting ? 30 : 70;

              if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typeSpeed = 2000;
              } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 400;
              }

              setTimeout(type, typeSpeed);
            }

            setTimeout(type, 800);
          })();
        


          (function () {
            const section = document.getElementById('testimonials');
            const slider = document.getElementById('scroll-container');
            if (section) {
              new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) section.classList.add('is-visible'); }); }, { threshold: 0.25 }).observe(section);
            }
            if (slider) {
              let isDown = false, startX = 0, scrollLeft = 0;
              const stop = () => { if(!isDown) return; isDown = false; slider.style.cursor = 'grab'; slider.classList.add('snap-x', 'snap-mandatory'); };
              slider.addEventListener('mousedown', e => { isDown = true; slider.style.cursor = 'grabbing'; slider.classList.remove('snap-x', 'snap-mandatory'); startX = e.pageX - slider.offsetLeft; scrollLeft = slider.scrollLeft; });
              slider.addEventListener('mouseleave', stop); slider.addEventListener('mouseup', stop);
              slider.addEventListener('mousemove', e => { if(!isDown) return; e.preventDefault(); slider.scrollLeft = scrollLeft - ((e.pageX - slider.offsetLeft) - startX) * 2; });
            }
          })();
        


          (function () {
            const stage = document.querySelector('#pricing .pricing-stage');
            if (!stage) return;
            const cards = [stage.querySelector('.pricing-card-1'), stage.querySelector('.pricing-card-2'), stage.querySelector('.pricing-card-3')];
            const setActive = e => {
              let closestIndex = 0, closestDist = Infinity;
              cards.forEach((card, i) => {
                if(!card) return;
                const rect = card.getBoundingClientRect(), dist = Math.abs(e.clientX - (rect.left + rect.width / 2));
                if (dist < closestDist) { closestDist = dist; closestIndex = i; }
              });
              stage.setAttribute('data-active', String(closestIndex + 1));
            };
            stage.addEventListener('mousemove', setActive);
            stage.addEventListener('mouseleave', () => stage.removeAttribute('data-active'));
            cards.forEach((card, i) => { if(!card) return; card.addEventListener('mouseenter', () => stage.setAttribute('data-active', String(i + 1))); });
          })();
        


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
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.74)_100%)]"></div>
<div className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-screen" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.7) 0.0625rem, transparent 0.0625rem), linear-gradient(90deg, rgba(255,255,255,0.7) 0.0625rem, transparent 0.0625rem)', backgroundSize: '4rem 4rem'}}></div>
<div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/[0.035] to-transparent"></div>
<header className="nav-animate relative z-30 mx-auto flex w-full max-w-[92rem] items-center justify-between px-5 py-6 sm:px-8 lg:px-10 xl:px-12">
<a aria-label="Vectra home" className="group flex items-center gap-3.5" href="/home">
<span className="flex shrink-0 items-center justify-center text-rose-400 w-10 h-10 border-rose-400/45 border rounded-full relative shadow-[0_0_1.5rem_rgba(244,63,94,0.28)] backdrop-blur-xl">
<iconify-icon className="text-2xl text-orange-500/80" height="24" icon="solar:globus-linear" style={{strokeWidth: '1.5', color: 'rgb(249, 115, 22)'}} width="24"></iconify-icon>
</span>
<span className="leading-none">
<span className="block text-sm font-medium uppercase tracking-[0.28em] text-white">
              VECTRA
            </span>
<span className="mt-1 block text-xs font-normal uppercase tracking-[0.42em] text-slate-400">
              DIGITAL
            </span>
</span>
</a>
<nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs font-normal uppercase tracking-[0.18em] text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl lg:flex">
<a className="group/nav relative overflow-hidden rounded-full px-5 py-2.5 transition-all duration-500 hover:text-white hover:shadow-[0_0_28px_rgba(251,191,36,0.22)]" href="/work">
<span className="absolute inset-0 rounded-full bg-amber-500/0 transition-all duration-500 group-hover/nav:bg-amber-500/10"></span>
<span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-300 to-transparent transition-all duration-500 group-hover/nav:w-3/4"></span>
<span className="relative z-10">
              Work
            </span>
</a>
<a className="group/nav relative overflow-hidden rounded-full px-5 py-2.5 transition-all duration-500 hover:text-white hover:shadow-[0_0_28px_rgba(251,191,36,0.22)]" href="/services">
<span className="absolute inset-0 rounded-full bg-amber-500/0 transition-all duration-500 group-hover/nav:bg-amber-500/10"></span>
<span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-300 to-transparent transition-all duration-500 group-hover/nav:w-3/4"></span>
<span className="relative z-10">
              Services
            </span>
</a>
<a className="group/nav relative overflow-hidden rounded-full px-5 py-2.5 transition-all duration-500 hover:text-white hover:shadow-[0_0_28px_rgba(251,191,36,0.22)]" href="/about">
<span className="absolute inset-0 rounded-full bg-amber-500/0 transition-all duration-500 group-hover/nav:bg-amber-500/10"></span>
<span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-300 to-transparent transition-all duration-500 group-hover/nav:w-3/4"></span>
<span className="relative z-10">
              About
            </span>
</a>
<a className="group/nav relative overflow-hidden rounded-full px-5 py-2.5 transition-all duration-500 hover:text-white hover:shadow-[0_0_28px_rgba(251,191,36,0.22)]" href="/process">
<span className="absolute inset-0 rounded-full bg-amber-500/0 transition-all duration-500 group-hover/nav:bg-amber-500/10"></span>
<span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-300 to-transparent transition-all duration-500 group-hover/nav:w-3/4"></span>
<span className="relative z-10">
              Process
            </span>
</a>
</nav>
<a className="group hidden items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-xs font-medium uppercase tracking-[0.17em] text-white backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-amber-400/40 hover:bg-amber-500/10 hover:shadow-[0_0_2rem_rgba(251,191,36,0.25)] sm:flex" href="/initiate">
          INITIATE
          <iconify-icon className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<button aria-expanded="false" aria-label="Toggle menu" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white backdrop-blur-xl lg:hidden transition-colors hover:bg-white/10 z-50" id="mobile-menu-btn">
<iconify-icon className="text-xl transition-transform duration-300" icon="solar:hamburger-menu-linear" id="mobile-menu-icon" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="absolute top-[100%] left-5 right-5 sm:left-8 sm:right-8 hidden flex-col gap-4 lg:hidden bg-[#0a0a0c]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-[0_2rem_3rem_-1rem_rgba(0,0,0,0.5)] z-40" id="mobile-menu">
<nav className="flex flex-col gap-2 text-xs font-normal uppercase tracking-[0.18em] text-slate-300">
<a className="px-4 py-3.5 rounded-xl hover:bg-white/5 hover:text-white transition-colors" href="/work">
              Work
            </a>
<a className="px-4 py-3.5 rounded-xl hover:bg-white/5 hover:text-white transition-colors" href="/services">
              Services
            </a>
<a className="px-4 py-3.5 rounded-xl hover:bg-white/5 hover:text-white transition-colors" href="/about">
              About
            </a>
<a className="px-4 py-3.5 rounded-xl hover:bg-white/5 hover:text-white transition-colors" href="/process">
              Process
            </a>
<a className="px-4 py-3.5 mt-2 rounded-xl bg-amber-500/10 text-amber-300 border border-amber-500/20 hover:bg-amber-500/20 transition-colors sm:hidden text-center" href="/initiate">
              Initiate
            </a>
</nav>
</div>

</header>
<section className="grid min-h-[calc(100vh-7rem)] grid-cols-1 sm:px-8 sm:pt-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-4 lg:px-10 lg:pb-6 lg:pt-10 xl:px-12 w-full max-w-[92rem] z-20 mr-auto ml-auto pt-12 pr-5 pb-10 pl-5 relative gap-x-12 gap-y-12 items-center">
<div className="pointer-events-none absolute inset-0 z-0" style={{backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.82) 34%, rgba(0,0,0,0.22) 62%, rgba(0,0,0,0.08) 100%), url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e6daa81-4927-4034-b8d9-9714f41dd236_1600w.png\')', backgroundSize: 'cover', backgroundPosition: 'center right', backgroundRepeat: 'no-repeat', overflow: 'hidden', isolation: 'isolate'}}>
<video data-aura-generated-video="true" data-aura-generated-video-bg="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e6daa81-4927-4034-b8d9-9714f41dd236_1600w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/8bd0314a-9525-4a13-996e-2c37cbd9e514/1779983177549-0b0303f7-4287-440e-974d-afa7d80e25f5.mp4" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', zIndex: '0'}}></video>
</div>
<div className="relative z-20 max-w-3xl">
<p className="eyebrow-animate mb-6 inline-flex items-center gap-4 text-xs font-normal uppercase tracking-[0.28em] text-rose-400">
<span className="h-px w-9 bg-rose-500"></span>
            Engineering the future
          </p>
<h1 className="max-w-4xl text-5xl font-normal uppercase tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl xl:leading-[0.95]">
<span className="line-animate-1 block">We design</span>
<span className="line-animate-2 block">systems that</span>
<span className="line-animate-3 block">
<span className="bg-gradient-to-r from-amber-400 via-rose-400 to-orange-500 bg-clip-text text-transparent gradient-shimmer">
                accelerate.
              </span>
</span>
</h1>
<p className="paragraph-animate mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg font-light">
            Partnering with forward-thinking brands to craft minimalist,
            high-performing digital architectures that convert.
          </p>
<div className="cta-animate mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
<a className="group relative inline-flex min-w-[14rem] items-center justify-between overflow-hidden rounded-full border border-orange-300/45 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-300 px-8 py-4 text-sm font-medium tracking-tight text-black shadow-[0_0_2.5rem_rgba(251,146,60,0.35)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_3.5rem_rgba(251,146,60,0.5)]" href="/initiate">
<span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_35%)]"></span>
<span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"></span>
<span className="relative">Start Project</span>
<iconify-icon className="relative text-2xl text-black transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="group relative inline-flex min-w-[14rem] items-center justify-between overflow-hidden rounded-full border border-orange-300/25 bg-black/35 px-8 py-4 text-sm font-medium tracking-tight text-white shadow-[inset_0_0_1.5rem_rgba(251,146,60,0.08),0_0_2rem_rgba(251,146,60,0.12)] backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-orange-300/45 hover:bg-orange-950/20 hover:shadow-[inset_0_0_2rem_rgba(251,146,60,0.12),0_0_2.8rem_rgba(251,146,60,0.22)]" href="/work">
<span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/10 via-transparent to-orange-400/10"></span>
<span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/80 to-transparent"></span>
<span className="relative">Explore Work</span>
<span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-orange-300/50 bg-orange-400/10 shadow-[0_0_1.5rem_rgba(251,146,60,0.28)] transition-all duration-500 group-hover:scale-110 group-hover:bg-orange-400/20">
<iconify-icon className="text-sm text-white" icon="solar:play-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</a>
</div>
<div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6 text-left">
<div className="">
<p className="text-2xl font-normal tracking-tight text-white">85+</p>
<p className="mt-1 text-xs font-normal uppercase tracking-[0.18em] text-slate-500">
                Deployments
              </p>
</div>
<div className="">
<p className="text-2xl font-normal tracking-tight text-white">99%</p>
<p className="mt-1 text-xs font-normal uppercase tracking-[0.18em] text-slate-500">
                Uptime
              </p>
</div>
<div className="">
<p className="text-2xl font-normal tracking-tight text-white">2.4x</p>
<p className="mt-1 text-xs font-normal uppercase tracking-[0.18em] text-slate-500">
                Growth
              </p>
</div>
</div>
</div>
<div className="relative z-10 min-h-[28rem] lg:min-h-[44rem]">
<div className="absolute bottom-[10%] right-0 flex items-center gap-5 rounded-3xl border border-white/10 bg-white/[0.055] px-7 py-6 shadow-[0_1.5rem_4rem_rgba(0,0,0,0.45)] backdrop-blur-xl">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl text-amber-400">
<iconify-icon className="text-3xl" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<p className="text-3xl font-medium tracking-tight text-white">
                Global
              </p>
<p className="mt-1 max-w-[10rem] text-xs font-normal uppercase tracking-[0.18em] leading-4 text-slate-400">
                Reach &amp; impact worldwide
              </p>
</div>
</div>
</div>
</section>
<section className="relative z-30 mx-auto w-full max-w-[92rem] px-5 pb-8 sm:px-8 lg:px-10 xl:px-12">
<div className="border-t border-white/10 pt-7">
<div className="flex flex-col items-center gap-7 lg:flex-row lg:justify-between">
<p className="text-left text-xs font-light uppercase tracking-[0.22em] text-rose-400">
              Integrated by
              <br/>
              industry leaders
            </p>
<div className="group flex flex-1 min-w-0 overflow-hidden" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<div className="flex shrink-0 items-center gap-10 sm:gap-12 lg:gap-16 pr-10 sm:pr-12 lg:pr-16 group-hover:[animation-play-state:paused]" style={{animation: 'scrollMarquee 20s linear infinite'}}>
<span className="brand-1 text-xl font-light tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  Nexus
                </span>
<span className="brand-2 text-xl font-light tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  Orbit
                </span>
<span className="brand-3 text-xl font-light tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  Zenith
                </span>
<span className="brand-4 text-xl font-light tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  Quanta
                </span>
<span className="brand-5 text-xl font-light tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  Aether
                </span>
<span className="brand-6 text-xl font-light tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  Nova
                </span>
</div>
<div aria-hidden="true" className="flex shrink-0 items-center gap-10 sm:gap-12 lg:gap-16 pr-10 sm:pr-12 lg:pr-16 group-hover:[animation-play-state:paused]" style={{animation: 'scrollMarquee 20s linear infinite'}}>
<span className="brand-1 text-xl font-light tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  Nexus
                </span>
<span className="brand-2 text-xl font-light tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  Orbit
                </span>
<span className="brand-3 text-xl font-light tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  Zenith
                </span>
<span className="brand-4 text-xl font-light tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  Quanta
                </span>
<span className="brand-5 text-xl font-light tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  Aether
                </span>
<span className="brand-6 text-xl font-light tracking-tight text-slate-400/45 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  Nova
                </span>
</div>
</div>
<div className="hidden items-center gap-3 border-l border-white/10 pl-8 text-left text-xs uppercase tracking-[0.16em] text-rose-300 lg:flex">
<iconify-icon className="text-xl" icon="solar:cup-star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>
<span className="block text-rose-300 font-light">
                  Recognized Excellence
                </span>
<span className="mt-1 block text-xs normal-case tracking-normal text-slate-500 font-light">
                  Global Design Awards
                </span>
</span>
</div>
</div>
</div>
</section>
<section className="relative z-30 mx-auto w-full max-w-[92rem] px-5 py-32 sm:px-8 lg:px-10 xl:px-12 flex flex-col items-center justify-center text-center min-h-[70vh] overflow-hidden" id="vision">
<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.08)_0%,transparent_46%)]"></div>
<div className="relative z-10 mb-10 flex items-center justify-center">
<div className="absolute inset-0 rounded-3xl bg-amber-500/20 blur-2xl animate-pulse"></div>
<div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-amber-400/30 bg-amber-500/10 text-amber-300 shadow-[0_0_70px_rgba(251,191,36,0.35)] backdrop-blur-xl">
<svg className="lucide lucide-zap text-amber-400/50" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
</div>
<div className="relative z-10 mb-7 flex items-center justify-center gap-4">
<span className="h-px w-12 bg-amber-400/40"></span>
<p className="text-xs font-light uppercase tracking-[0.45em] text-amber-300">
            Core Directive
          </p>
<span className="h-px w-12 bg-amber-400/40"></span>
</div>
<h2 className="relative z-10 mx-auto max-w-7xl text-center text-4xl sm:text-5xl lg:text-7xl font-semibold uppercase tracking-tight leading-[1] text-white" id="lyric-container">
<span className="lyric-word">Simplicity</span>
<span className="lyric-word">is</span>
<span className="lyric-word">the</span>
<span className="lyric-word">ultimate</span>
<span className="lyric-word">sophistication.</span>
<br className="hidden md:block"/>
<span className="lyric-word">We</span>
<span className="lyric-word">strip</span>
<span className="lyric-word">away</span>
<span className="lyric-word">the</span>
<span className="lyric-word">noise</span>
<span className="lyric-word">to</span>
<span className="lyric-word">reveal</span>
<br className="hidden md:block"/>
<span className="lyric-word">systems</span>
<span className="lyric-word">that</span>
<span className="lyric-word">function</span>
<span className="lyric-word">flawlessly</span>
<span className="lyric-word">and</span>
<span className="lyric-word">resonate</span>
<span className="lyric-word">deeply.</span>
</h2>
<style>
          #lyric-container .lyric-word {
            display: inline-block;
            opacity: 0.16;
            transform: translateY(12px);
            filter: blur(2px);
            color: rgba(255, 255, 255, 0.28);
            transition: all 0.45s ease;
          }

          #lyric-container .lyric-word.is-active {
            opacity: 1;
            transform: translateY(-4px) scale(1.08);
            filter: blur(0);
            color: rgb(251, 191, 36);
            text-shadow: 0 0 24px rgba(251, 191, 36, 0.85);
          }

          #lyric-container .lyric-word.is-done {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
            color: white;
            text-shadow: none;
          }
        </style>

</section>
<section className="relative z-30 mx-auto w-full max-w-[92rem] px-5 py-20 sm:px-8 lg:px-10 xl:px-12" id="features">
<div className="mx-auto max-w-3xl text-center">
<p className="text-xs font-normal uppercase tracking-[0.22em] text-rose-300/90">
            Capabilities
          </p>
<h2 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-5xl">
            The architecture of growth.
          </h2>
<p className="mt-5 text-base leading-8 text-slate-400 font-light">
            A unified approach merging aesthetics, performance, and data.
          </p>
</div>
<div className="mt-12 grid gap-5 md:grid-cols-3 items-start">
<article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl group transition-all duration-700 hover:-translate-y-2 hover:bg-white/[0.05] hover:border-white/20">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-200 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
<iconify-icon className="text-xl" icon="solar:stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="mt-6 text-xl font-medium tracking-tight text-white">
              Brand Architecture
            </h3>
<p className="mt-3 text-sm leading-7 text-slate-400 font-light">
              Distilling complex narratives into sharp, memorable identities.
            </p>
</article>
<article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl group transition-all duration-700 hover:-translate-y-2 hover:bg-white/[0.05] hover:border-white/20">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-400/10 text-rose-200 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
<iconify-icon className="text-xl" icon="solar:widget-5-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="mt-6 text-xl font-medium tracking-tight text-white">
              Interface Engineering
            </h3>
<p className="mt-3 text-sm leading-7 text-slate-400 font-light">
              Fluid, intuitive surfaces designed for maximum conversion.
            </p>
</article>
<article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl group transition-all duration-700 hover:-translate-y-2 hover:bg-white/[0.05] hover:border-white/20">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-400/10 text-orange-200 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
<iconify-icon className="text-xl" icon="solar:chart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="mt-6 text-xl font-medium tracking-tight text-white">
              Data Mechanics
            </h3>
<p className="mt-3 text-sm leading-7 text-slate-400 font-light">
              Telemetry and insights to continuously refine performance.
            </p>
</article>
</div>
</section>
<section className="relative z-30 mx-auto w-full max-w-[92rem] px-5 py-20 sm:px-8 lg:px-10 xl:px-12" id="interactive-visual">
<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute left-[18%] top-[45%] h-[28rem] w-[28rem] rounded-full bg-rose-500/10 blur-[130px]"></div>
<div className="absolute right-[12%] top-[42%] h-[34rem] w-[34rem] rounded-full bg-amber-500/10 blur-[150px]"></div>
</div>
<div className="mx-auto max-w-3xl text-center mb-16 relative z-10">
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
<span className="text-xs font-normal uppercase tracking-[0.22em] text-amber-200">
              WebGL Core
            </span>
</div>
<h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
            Infinite
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-amber-300 to-rose-500">
              horizons.
            </span>
</h2>
<p className="mt-6 text-base leading-8 text-slate-400 font-light">
            Interact with the data structure. We engineer spatial web
            experiences that define modern brands.
          </p>
</div>
<div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center relative z-10">
<div className="relative min-w-0 w-full lg:flex-1 h-[30rem] sm:h-[40rem] rounded-[3rem] border border-amber-400/15 bg-[#050505] overflow-hidden group cursor-move shadow-[0_0_90px_rgba(251,191,36,0.08),inset_0_1px_0_rgba(255,255,255,0.05)] shrink-0">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.08)_0%,transparent_32%,#050505_82%)] z-10 pointer-events-none"></div>
<canvas className="w-full h-full relative z-0" data-engine="three.js r160" height="1276" id="webgl-canvas-wow" style={{width: '868px', height: '638px'}} width="1736"></canvas>

</div>
<div className="w-full lg:w-[400px] xl:w-[450px] shrink-0 flex flex-col items-start text-left">
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-md">
<span className="text-xs font-light uppercase tracking-[0.22em] text-orange-200">
                Kinetic Flow
              </span>
</div>
<h3 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-[1.2] mb-5">
              Spatial
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-rose-600 font-light">
                computation.
              </span>
</h3>
<p className="text-base leading-8 text-slate-400 mb-10 font-light">
              Escaping the flatland. We leverage hardware acceleration to render
              complex brand narratives with uncompromised fluidity.
            </p>
<ul className="space-y-6 w-full">
<li className="flex items-center gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-400">
<iconify-icon className="text-xl" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-white font-light text-xl tracking-tight">
                    Zero Latency
                  </span>
<span className="text-slate-500 text-sm mt-1 font-light">
                    Engineered for absolute responsiveness.
                  </span>
</div>
</li>
</ul>
</div>
</div>
</section>
<section className="relative z-30 mx-auto w-full max-w-[92rem] px-5 py-20 sm:px-8 lg:px-10 xl:px-12" id="process">
<div className="relative w-full rounded-[3rem] bg-[#050505] border border-white/5 px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 overflow-hidden group/section shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 transition-opacity duration-1000 group-hover/section:opacity-80">
<div className="absolute -top-[30%] -left-[10%] w-[60%] h-[60%] bg-rose-600/10 rounded-full blur-[120px] mix-blend-screen transition-transform duration-1000 group-hover/section:translate-x-10 group-hover/section:translate-y-10"></div>
<div className="absolute bottom-[0%] -right-[10%] w-[50%] h-[50%] bg-amber-600/10 rounded-full blur-[120px] mix-blend-screen transition-transform duration-1000 group-hover/section:-translate-x-10 group-hover/section:-translate-y-10"></div>
</div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_30%_50%,#000_20%,transparent_100%)] z-0 pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row gap-20 lg:gap-12 items-center">
<div className="lg:w-[40%] w-full flex flex-col items-start text-left">
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
<span className="text-xs font-light uppercase tracking-[0.22em] text-rose-200">
                  Methodology
                </span>
</div>
<h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
                Precision
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white/90 to-white/30">
                  execution.
                </span>
</h2>
<p className="mt-6 text-base leading-8 text-slate-400 max-w-md font-thin">
                Eliminating friction from concept to deployment. We operate in
                focused, high-velocity iterations.
              </p>
</div>
<div className="lg:w-[60%] w-full flex flex-col md:flex-row gap-6 lg:gap-6 [perspective:1400px] [transform-style:preserve-3d]">
<div className="group flex-1 transition-all duration-700 ease-out hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_20px_40px_-20px_rgba(244,63,94,0.15)] md:[transform:rotateY(-15deg)_rotateX(5deg)_translateZ(0px)] hover:md:[transform:rotateY(0deg)_rotateX(0deg)_translateZ(40px)_scale(1.05)] z-10 hover:z-30 max-h-fit border-white/10 border rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-2xl">
<div className="group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 max-h-fit rounded-[2.5rem] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-8 transition-all duration-700 group-hover:bg-amber-500/20 group-hover:border-amber-500/30 group-hover:scale-110">
<span className="text-xs font-light text-amber-200">I</span>
</div>
<div className="flex flex-wrap items-center gap-2 mb-5">
<span className="px-2 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-300 uppercase tracking-widest font-light transition-colors group-hover:bg-amber-500/20">
                      Strategy
                    </span>
<span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-slate-300 uppercase tracking-widest font-light">
                      1-2 Weeks
                    </span>
</div>
<h3 className="text-xl font-light tracking-tight text-white mb-3">
                    Define
                  </h3>
<p className="text-sm leading-loose text-slate-400 font-thin group-hover:text-slate-300 transition-colors">
                    Architecting the logic, parameters, and ultimate objective.
                  </p>
</div>
</div>
<div className="group flex-1 transition-all duration-700 ease-out hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_20px_40px_-20px_rgba(244,63,94,0.15)] md:mt-12 lg:mt-20 md:[transform:rotateY(-15deg)_rotateX(5deg)_translateZ(0px)] hover:md:[transform:rotateY(0deg)_rotateX(0deg)_translateZ(40px)_scale(1.05)] z-10 hover:z-30 max-h-fit border-white/10 border rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-2xl">
<div className="group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-rose-500/5 to-transparent opacity-0 max-h-fit rounded-[2.5rem] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-8 transition-all duration-700 group-hover:bg-rose-500/20 group-hover:border-rose-500/30 group-hover:scale-110">
<span className="text-xs font-light text-rose-200">II</span>
</div>
<div className="flex flex-wrap items-center gap-2 mb-5">
<span className="px-2 py-1 rounded-md bg-rose-500/10 border border-rose-500/20 text-[10px] text-rose-300 uppercase tracking-widest font-light transition-colors group-hover:bg-rose-500/20">
                      Development
                    </span>
<span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-slate-300 uppercase tracking-widest font-light">
                      4-8 Weeks
                    </span>
</div>
<h3 className="text-xl font-light tracking-tight text-white mb-3">
                    Construct
                  </h3>
<p className="text-sm leading-loose text-slate-400 font-thin group-hover:text-slate-300 transition-colors">
                    Building the structural framework and aesthetic layer.
                  </p>
</div>
</div>
<div className="group flex-1 transition-all duration-700 ease-out hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_20px_40px_-20px_rgba(244,63,94,0.15)] md:mt-24 lg:mt-40 md:[transform:rotateY(-15deg)_rotateX(5deg)_translateZ(0px)] hover:md:[transform:rotateY(0deg)_rotateX(0deg)_translateZ(40px)_scale(1.05)] hover:z-30 max-h-fit z-10 border-white/10 border rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-2xl">
<div className="group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 max-h-fit rounded-[2.5rem] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-8 transition-all duration-700 group-hover:bg-orange-500/20 group-hover:border-orange-500/30 group-hover:scale-110">
<span className="text-xs font-light text-orange-200">III</span>
</div>
<div className="flex flex-wrap items-center gap-2 mb-5">
<span className="px-2 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-[10px] text-orange-300 uppercase tracking-widest font-light transition-colors group-hover:bg-orange-500/20">
                      Production
                    </span>
<span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-slate-300 uppercase tracking-widest font-light">
                      Ongoing
                    </span>
</div>
<h3 className="text-xl font-light tracking-tight text-white mb-3">
                    Deploy
                  </h3>
<p className="text-sm leading-loose text-slate-400 font-thin group-hover:text-slate-300 transition-colors">
                    Pushing to production with rigorous performance metrics.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-30 mx-auto w-full max-w-[92rem] px-5 py-20 sm:px-8 lg:px-10 xl:px-12" id="work">
<div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end gap-x-10 gap-y-10">
<div className="">
<p className="text-xs font-extralight uppercase tracking-[0.22em] text-amber-300/90">
              Output
            </p>
<h2 className="mt-4 text-4xl font-light tracking-tight text-white sm:text-5xl">
              Engineered for impact.
            </h2>
<p className="mt-5 text-base leading-8 text-slate-400 font-thin">
              A curated selection of interfaces and brand systems.
            </p>
</div>
<div className="group flex sm:max-w-sm sm:ml-auto transition-colors focus-within:border-white/20 focus-within:bg-white/[0.05] w-full border-white/10 border rounded-full pt-4 pr-6 pb-4 pl-6 relative backdrop-blur-xl gap-x-3 gap-y-3 items-center">
<svg className="text-slate-400 transition-colors group-focus-within:text-white shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
<div className="relative flex-1 h-5 flex items-center overflow-hidden">
<div className="absolute inset-0 flex items-center pointer-events-none transition-opacity duration-200 group-focus-within:opacity-0 whitespace-nowrap">
<span className="text-sm font-extralight text-slate-400" data-initialized="true" id="typewriter-text-aura-local">
                  S
                </span>
<span className="inline-block w-[1.5px] h-[14px] bg-amber-400 ml-[2px] animate-pulse"></span>
</div>
<input className="w-full h-full bg-transparent border-none outline-none text-sm font-extralight text-white z-10 placeholder-transparent focus:placeholder-slate-500 focus:ring-0" placeholder="Search..." type="text"/>
</div>
</div>

</div>
<div className="mt-12 grid auto-rows-[16rem] gap-5 lg:grid-cols-4 lg:auto-rows-[13.5rem]">
<article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl lg:col-span-2 lg:row-span-2">
<img alt="Dashboard" className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/b41ed9cc-930b-4625-9af2-4a478108704b/1600w.jpg" style={{filter: 'hue-rotate(180deg) saturate(0.5)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent"></div>
<div className="relative z-10 flex h-full flex-col justify-end">
<span className="mb-4 w-fit rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-light uppercase tracking-[0.16em] text-amber-100 backdrop-blur-xl">
                Data Platform
              </span>
<h3 className="max-w-xl text-3xl font-normal tracking-tight text-white sm:text-4xl">
                Nexus Command Core
              </h3>
<p className="mt-4 max-w-lg text-sm leading-7 text-slate-300 font-extralight">
                Streamlining complex telemetry into a singular, cohesive UI
                framework.
              </p>
</div>
</article>
<article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl lg:col-span-2">
<img alt="Brand" className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30ff8562-5a2d-46c8-8aa2-ab717e79153a_1600w.jpg" style={{filter: 'sepia(0.8) hue-rotate(-30deg)'}}/>
<div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent"></div>
<div className="relative z-10 max-w-sm">
<p className="text-xs font-light uppercase tracking-[0.18em] text-rose-200">
                Identity
              </p>
<h3 className="mt-3 text-2xl font-normal tracking-tight text-white">
                Orbit System
              </h3>
<p className="mt-3 text-sm leading-7 text-slate-300 font-extralight">
                Minimalist visual language for aerospace tech.
              </p>
</div>
</article>
<article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] hover:scale-[1.02]">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-400/10 text-orange-200">
<svg className="lucide lucide-mouse-pointer-click" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 9 5 12 1.8-5.2L21 14Z"></path>
<path d="M7.2 2.2 8 5.1"></path>
<path d="m5.1 8-2.9-.8"></path>
<path d="M14 4.1 12 6"></path>
<path d="m6 12-1.9 2"></path>
</svg>
</div>
<p className="mt-8 text-4xl font-normal tracking-tight text-white">
              68%
            </p>
<p className="mt-2 text-sm leading-7 text-slate-400 font-extralight">
              Lift in user activation metrics.
            </p>
</article>
<article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl">
<img alt="Web" className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cca1b731-0621-4994-a36c-b2f5d5fed43b_800w.webp" style={{filter: 'grayscale(1)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent"></div>
<div className="relative z-10 flex h-full items-end">
<div>
<p className="text-xs font-light uppercase tracking-[0.18em] text-white/70">
                  Interface
                </p>
<h3 className="mt-2 text-2xl font-normal tracking-tight text-white">
                  Zenith Web
                </h3>
</div>
</div>
</article>
</div>

</section>
<section className="relative z-30 mx-auto w-full max-w-[92rem] px-5 py-24 sm:px-8 lg:px-10 xl:px-12 flex flex-col lg:flex-row items-center justify-between min-h-[80vh] overflow-hidden" id="services">
<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute -left-[10%] top-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-rose-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute -right-[10%] top-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-amber-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
</div>
<div className="grid lg:grid-cols-2 gap-20 lg:gap-8 items-center w-full">
<div className="relative z-10 w-full flex flex-col justify-center">
<div className="flex items-center gap-4 text-amber-300 mb-8">
<div className="h-px w-10 bg-amber-500/50"></div>
<span className="text-xs font-light uppercase tracking-[0.25em]">
                Expertise
              </span>
<div className="h-px w-10 bg-amber-500/50"></div>
</div>
<h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white leading-[0.9] uppercase mb-10 drop-shadow-lg">
              Domains of
              <br/>
<span className="text-rose-400 drop-shadow-[0_0_25px_rgba(244,63,94,0.4)]">
                Mastery.
              </span>
</h2>
</div>
<div className="relative z-10 w-full flex justify-center py-10 [perspective:1500px]">
<div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[400px] lg:h-[400px] [transform-style:preserve-3d] hover:[animation-play-state:paused_!important]" style={{animation: 'rotateCubeY 24s infinite linear'}}>

<div className="absolute inset-0 w-full h-full backface-hidden rounded-[1.5rem] border border-amber-500/20 bg-gradient-to-br from-[#120a05] to-[#050505] shadow-[inset_0_0_80px_rgba(251,191,36,0.1),0_25px_50px_-12px_rgba(0,0,0,0.5)] p-8 sm:p-10 flex flex-col max-sm:[transform:rotateY(0deg)_translateZ(140px)] sm:max-lg:[transform:rotateY(0deg)_translateZ(180px)] lg:[transform:rotateY(0deg)_translateZ(200px)]">
<span className="text-amber-400 font-normal text-lg mb-6 tracking-widest">
                  01
                </span>
<h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white uppercase mb-4">
                  Aesthetics
                </h3>
<p className="text-slate-400 text-base leading-8 font-extralight">
                  Visual identity and brand mechanics designed to endure.
                </p>
</div>

<div className="absolute inset-0 w-full h-full backface-hidden rounded-[1.5rem] border border-rose-500/20 bg-gradient-to-br from-[#120509] to-[#050505] shadow-[inset_0_0_80px_rgba(244,63,94,0.1),0_25px_50px_-12px_rgba(0,0,0,0.5)] p-8 sm:p-10 flex flex-col max-sm:[transform:rotateY(90deg)_translateZ(140px)] sm:max-lg:[transform:rotateY(90deg)_translateZ(180px)] lg:[transform:rotateY(90deg)_translateZ(200px)]">
<span className="text-rose-400 font-normal text-lg mb-6 tracking-widest">
                  02
                </span>
<h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white uppercase mb-4">
                  Interactivity
                </h3>
<p className="text-slate-400 text-base leading-8 font-extralight">
                  Seamless UX/UI patterns that eliminate cognitive load.
                </p>
</div>

<div className="absolute inset-0 w-full h-full backface-hidden rounded-[1.5rem] border border-orange-500/20 bg-gradient-to-br from-[#120805] to-[#050505] shadow-[inset_0_0_80px_rgba(249,115,22,0.1),0_25px_50px_-12px_rgba(0,0,0,0.5)] p-8 sm:p-10 flex flex-col max-sm:[transform:rotateY(180deg)_translateZ(140px)] sm:max-lg:[transform:rotateY(180deg)_translateZ(180px)] lg:[transform:rotateY(180deg)_translateZ(200px)]">
<span className="text-orange-400 font-normal text-lg mb-6 tracking-widest">
                  03
                </span>
<h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white uppercase mb-4">
                  Architecture
                </h3>
<p className="text-slate-400 text-base leading-8 font-extralight">
                  Robust web engineering for unparalleled speed.
                </p>
</div>

<div className="absolute inset-0 w-full h-full backface-hidden rounded-[1.5rem] border border-fuchsia-500/20 bg-gradient-to-br from-[#100512] to-[#050505] shadow-[inset_0_0_80px_rgba(217,70,239,0.1),0_25px_50px_-12px_rgba(0,0,0,0.5)] p-8 sm:p-10 flex flex-col max-sm:[transform:rotateY(-90deg)_translateZ(140px)] sm:max-lg:[transform:rotateY(-90deg)_translateZ(180px)] lg:[transform:rotateY(-90deg)_translateZ(200px)]">
<span className="text-fuchsia-400 font-normal text-lg mb-6 tracking-widest">
                  04
                </span>
<h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white uppercase mb-4">
                  Expansion
                </h3>
<p className="text-slate-400 text-base leading-8 font-extralight">
                  Data-driven growth strategies and optimization loops.
                </p>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-30 mx-auto w-full max-w-[92rem] px-5 py-24 sm:px-8 lg:px-10 xl:px-12 is-visible" id="testimonials">
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-[12%] left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-amber-500/[0.05] blur-[140px]"></div>
</div>
<div className="mx-auto max-w-4xl flex flex-col items-center justify-center mb-16 md:mb-24 relative z-10 text-center">
<div className="flex items-center gap-4 mb-8 reveal-fade">
<div className="h-[1px] w-8 md:w-12 bg-amber-400/40"></div>
<span className="text-amber-200 text-xs font-light uppercase tracking-[0.22em]">
              Partnerships
            </span>
<div className="h-[1px] w-8 md:w-12 bg-amber-400/40"></div>
</div>
<h2 className="text-4xl font-extralight tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.05]">
<span className="overflow-hidden block pb-1">
<span className="block reveal-word">Voices from the</span>
</span>
<span className="overflow-hidden block pb-2">
<span className="block reveal-word reveal-word-delay text-slate-300">
                Vanguard.
              </span>
</span>
</h2>
</div>
<div className="relative group z-10 -mx-5 sm:-mx-8 lg:-mx-10 xl:-mx-12">
<div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>
<div className="flex gap-5 md:gap-6 overflow-x-auto [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-5 md:px-10 py-10 items-center snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing" id="scroll-container">

<div className="snap-center shrink-0 w-[20rem] md:w-[24rem] h-[26rem] rounded-[1.75rem] relative amber-card-border transition-transform duration-700 ease-out hover:-translate-y-2 group/card transform -rotate-1">
<div className="absolute inset-0 bg-[#0b0b0d] rounded-[1.75rem] z-0 overflow-hidden">
<div className="absolute -top-20 -left-20 w-56 h-56 bg-amber-500 rounded-full blur-[85px] opacity-[0.08] group-hover/card:opacity-[0.15] transition-opacity duration-700"></div>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<p className="text-slate-300 text-sm md:text-base leading-relaxed font-extralight">
                  "Vectra stripped away the unnecessary and delivered a core
                  product that resonates. True digital craftsmen."
                </p>
<div className="flex items-center justify-between w-full mt-8">
<div className="flex items-center gap-3">
<img alt="K. Reynolds" className="w-10 h-10 rounded-full object-cover border border-amber-400/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72adc0f8-ad1f-4732-a5bf-c000b45152a2_320w.webp"/>
<div className="flex flex-col">
<span className="text-white text-sm font-light tracking-tight">
                        K. Reynolds
                      </span>
<span className="text-slate-500 text-xs font-extralight">
                        Founder, Nexus
                      </span>
</div>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[20rem] md:w-[24rem] h-[26rem] rounded-[1.75rem] relative amber-card-border transition-transform duration-700 ease-out hover:-translate-y-2 group/card transform rotate-2">
<div className="absolute inset-0 bg-[#0b0b0d] rounded-[1.75rem] z-0 overflow-hidden">
<div className="absolute -top-20 -left-20 w-56 h-56 bg-rose-500 rounded-full blur-[85px] opacity-[0.08] group-hover/card:opacity-[0.15] transition-opacity duration-700"></div>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<p className="text-slate-300 text-sm md:text-base leading-relaxed font-extralight">
                  "The execution velocity was unmatched. They redefined our
                  architecture while keeping the aesthetic pristine."
                </p>
<div className="flex items-center justify-between w-full mt-8">
<div className="flex items-center gap-3">
<img alt="E. Vance" className="w-10 h-10 rounded-full object-cover border border-rose-400/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9fc26ef9-ae15-4f56-ac63-077c7659dafa_320w.png"/>
<div className="flex flex-col">
<span className="text-white text-sm font-light tracking-tight">
                        E. Vance
                      </span>
<span className="text-slate-500 text-xs font-extralight">
                        CTO, Orbit
                      </span>
</div>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[20rem] md:w-[24rem] h-[26rem] rounded-[1.75rem] relative amber-card-border transition-transform duration-700 ease-out hover:-translate-y-2 group/card transform -rotate-1">
<div className="absolute inset-0 bg-[#0b0b0d] rounded-[1.75rem] z-0 overflow-hidden">
<div className="absolute -top-20 -left-20 w-56 h-56 bg-orange-500 rounded-full blur-[85px] opacity-[0.08] group-hover/card:opacity-[0.15] transition-opacity duration-700"></div>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<p className="text-slate-300 text-sm md:text-base leading-relaxed font-extralight">
                  "An absolute paradigm shift for our web presence. The WebGL
                  integration sets us miles apart."
                </p>
<div className="flex items-center justify-between w-full mt-8">
<div className="flex items-center gap-3">
<img alt="J. Lin" className="w-10 h-10 rounded-full object-cover border border-orange-400/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ff19765f-d4f3-444a-989f-5936bbbd7f2e_320w.webp"/>
<div className="flex flex-col">
<span className="text-white text-sm font-light tracking-tight">
                        J. Lin
                      </span>
<span className="text-slate-500 text-xs font-extralight">
                        Director, Zenith
                      </span>
</div>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[20rem] md:w-[24rem] h-[26rem] rounded-[1.75rem] relative amber-card-border transition-transform duration-700 ease-out hover:-translate-y-2 group/card transform rotate-1">
<div className="absolute inset-0 bg-[#0b0b0d] rounded-[1.75rem] z-0 overflow-hidden">
<div className="absolute -top-20 -left-20 w-56 h-56 bg-fuchsia-500 rounded-full blur-[85px] opacity-[0.08] group-hover/card:opacity-[0.15] transition-opacity duration-700"></div>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<p className="text-slate-300 text-sm md:text-base leading-relaxed font-extralight">
                  "Their attention to detail and ability to scale our
                  infrastructure was remarkable. A game changer for our team."
                </p>
<div className="flex items-center justify-between w-full mt-8">
<div className="flex items-center gap-3">
<img alt="M. Chen" className="w-10 h-10 rounded-full object-cover border border-fuchsia-400/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce5a380c-785b-4ec0-9cd9-486d09b03a12_320w.webp"/>
<div className="flex flex-col">
<span className="text-white text-sm font-light tracking-tight">
                        M. Chen
                      </span>
<span className="text-slate-500 text-xs font-extralight">
                        VP Engineering, Horizon
                      </span>
</div>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[20rem] md:w-[24rem] h-[26rem] rounded-[1.75rem] relative amber-card-border transition-transform duration-700 ease-out hover:-translate-y-2 group/card transform -rotate-2">
<div className="absolute inset-0 bg-[#0b0b0d] rounded-[1.75rem] z-0 overflow-hidden">
<div className="absolute -top-20 -left-20 w-56 h-56 bg-cyan-500 rounded-full blur-[85px] opacity-[0.08] group-hover/card:opacity-[0.15] transition-opacity duration-700"></div>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<p className="text-slate-300 text-sm md:text-base leading-relaxed font-extralight">
                  "Flawless execution from day one. They didn't just build a
                  product, they crafted an entire digital ecosystem."
                </p>
<div className="flex items-center justify-between w-full mt-8">
<div className="flex items-center gap-3">
<img alt="S. Williams" className="w-10 h-10 rounded-full object-cover border border-cyan-400/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a4b4a91c-eb34-493f-93c5-9b21e5150b6f_320w.webp"/>
<div className="flex flex-col">
<span className="text-white text-sm font-light tracking-tight">
                        S. Williams
                      </span>
<span className="text-slate-500 text-xs font-extralight">
                        CEO, Apex
                      </span>
</div>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[20rem] md:w-[24rem] h-[26rem] rounded-[1.75rem] relative amber-card-border transition-transform duration-700 ease-out hover:-translate-y-2 group/card transform rotate-1">
<div className="absolute inset-0 bg-[#0b0b0d] rounded-[1.75rem] z-0 overflow-hidden">
<div className="absolute -top-20 -left-20 w-56 h-56 bg-emerald-500 rounded-full blur-[85px] opacity-[0.08] group-hover/card:opacity-[0.15] transition-opacity duration-700"></div>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<p className="text-slate-300 text-sm md:text-base leading-relaxed font-extralight">
                  "The synergy between design and engineering is palpable in
                  every interaction. An absolute masterpiece."
                </p>
<div className="flex items-center justify-between w-full mt-8">
<div className="flex items-center gap-3">
<img alt="A. Patel" className="w-10 h-10 rounded-full object-cover border border-emerald-400/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b202409f-816e-4451-8ac9-bd0b04439d1b_320w.webp"/>
<div className="flex flex-col">
<span className="text-white text-sm font-light tracking-tight">
                        A. Patel
                      </span>
<span className="text-slate-500 text-xs font-extralight">
                        Head of Product, Quantum
                      </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>
<section className="relative z-30 mx-auto w-full max-w-[92rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 xl:px-12 overflow-hidden" id="pricing">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] pointer-events-none z-0 flex justify-between opacity-20 mix-blend-screen">
<div className="w-80 h-80 bg-rose-600/30 rounded-full blur-[120px]"></div>
<div className="w-96 h-96 bg-amber-600/30 rounded-full blur-[120px]"></div>
<div className="w-80 h-80 bg-orange-400/20 rounded-full blur-[120px]"></div>
</div>
<div className="mx-auto max-w-3xl text-center relative z-20">
<p className="text-xs font-normal uppercase tracking-[0.22em] text-amber-300/90">
            Engagement
          </p>
<h2 className="mt-4 text-4xl font-medium tracking-tight text-white sm:text-5xl drop-shadow-sm">
            Architectural blueprints.
          </h2>
</div>
<div className="pricing-stage relative z-20 mt-20 lg:mt-32 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 w-full max-w-7xl mx-auto">
<article className="pricing-card pricing-card-1 group relative w-full lg:w-[340px] xl:w-[380px] shrink-0 rounded-[2.5rem] border border-white/10 bg-[#0a0a0c]/80 p-8 xl:p-10 backdrop-blur-2xl overflow-hidden flex flex-col">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="flex flex-col h-full relative z-10 flex-1">
<div className="mb-6 border-b border-white/5 pb-6">
<h3 className="text-2xl font-normal tracking-tight text-white">
                  Foundation
                </h3>
<p className="mt-3 text-sm leading-6 text-slate-400 font-light">
                  Rapid deployment logic.
                </p>
</div>
<div className="mb-8 flex items-end gap-3">
<span className="text-5xl font-light tracking-tight text-white">
                  Sprint
                </span>
<span className="text-base text-slate-500 font-light mb-1.5">
                  from $5k
                </span>
</div>
<ul className="space-y-4 text-sm font-light text-slate-300 mb-10 flex-1">
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Core UI/UX Engineering</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Responsive Web Integration</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Headless CMS Setup</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>2-4 Weeks Delivery</span>
</li>
</ul>
<a className="mt-auto block w-full rounded-full border border-white/10 bg-white/5 py-3.5 text-center text-sm font-normal tracking-wide text-white transition-colors hover:bg-white/10 hover:border-amber-500/30" href="#">
                Initialize Sprint
              </a>
</div>
</article>
<article className="pricing-card pricing-card-2 group relative w-full lg:w-[380px] xl:w-[420px] shrink-0 rounded-[2.5rem] border border-amber-400/30 bg-[#120a05]/90 p-10 xl:p-12 backdrop-blur-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(251,191,36,0.15)] z-20 flex flex-col">
<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="absolute top-0 right-0 -mr-6 -mt-6 w-40 h-40 bg-amber-500/10 rounded-full blur-[50px] pointer-events-none z-0"></div>
<div className="flex flex-col h-full relative z-10 flex-1">
<div className="mb-6 border-b border-amber-500/20 pb-6 flex justify-between items-start">
<div>
<h3 className="text-3xl font-medium tracking-tight text-white drop-shadow-md">
                    Ecosystem
                  </h3>
<p className="mt-3 text-sm leading-6 text-slate-300 font-light">
                    Full stack interface engineering.
                  </p>
</div>
<span className="inline-flex rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-amber-400">
                  Optimal
                </span>
</div>
<div className="mb-10 flex items-end gap-3">
<span className="text-6xl font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-amber-200 drop-shadow-sm">
                  System
                </span>
<span className="text-lg text-amber-500/80 font-light mb-2">
                  from $15k
                </span>
</div>
<ul className="space-y-4 text-sm font-light text-slate-200 mb-12 flex-1">
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Advanced Architecture &amp; WebGL</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="">Custom E-commerce Infrastructure</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Complex Third-party Integrations</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Performance Optimization Loop</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>6-10 Weeks Delivery</span>
</li>
</ul>
<a className="mt-auto block w-full rounded-full border border-amber-500/40 bg-amber-500/10 py-4 text-center text-sm font-medium tracking-wide text-amber-200 transition-all hover:bg-amber-500/20 hover:shadow-[0_0_20px_rgba(251,191,36,0.15)] hover:border-amber-400/60" href="#">
                Deploy Architecture
              </a>
</div>
</article>
<article className="pricing-card pricing-card-3 group relative w-full lg:w-[340px] xl:w-[380px] shrink-0 rounded-[2.5rem] border border-white/10 bg-[#0a0a0c]/80 p-8 xl:p-10 backdrop-blur-2xl overflow-hidden flex flex-col">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="flex flex-col h-full relative z-10 flex-1">
<div className="mb-6 border-b border-white/5 pb-6">
<h3 className="text-2xl font-normal tracking-tight text-white">
                  Retainer
                </h3>
<p className="mt-3 text-sm leading-6 text-slate-400 font-light">
                  Continuous optimization.
                </p>
</div>
<div className="mb-8 flex items-end gap-3">
<span className="text-5xl font-light tracking-tight text-white">
                  Partner
                </span>
<span className="text-base text-slate-500 font-light mb-1.5">
                  from $3k/mo
                </span>
</div>
<ul className="space-y-4 text-sm font-light text-slate-300 mb-10 flex-1">
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Dedicated Growth Engineering</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Continuous A/B Testing</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Priority Technical Support</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="">Monthly Strategy Alignment</span>
</li>
</ul>
<a className="mt-auto block w-full rounded-full border border-white/10 bg-white/5 py-3.5 text-center text-sm font-normal tracking-wide text-white transition-colors hover:bg-white/10 hover:border-amber-500/30" href="#">
                Engage Partnership
              </a>
</div>
</article>
</div>

</section>
<section className="relative z-30 mx-auto w-full max-w-[92rem] px-5 py-24 sm:px-8 lg:px-10 xl:px-12" id="cta">
<div className="overflow-hidden sm:p-16 lg:p-20 transition-all duration-700 hover:border-amber-300/25 hover:shadow-[0_0_90px_rgba(251,191,36,0.12)] bg-center min-h-[32rem] text-center bg-gradient-to-b from-white/[0.045] via-white/[0.025] to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/78412a8a-ac77-4cdc-9b2a-5b29bd6620ba_1600w.webp)] max-h-full bg-cover border-white/10 border rounded-[3rem] pt-20 pr-20 pb-20 pl-20 relative backdrop-blur-2xl" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 75%, transparent)'}}>
<div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/10 blur-[110px]"></div>
<div className="relative z-10 mx-auto max-w-2xl">
<h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
              Initialize protocol.
            </h2>
<p className="leading-8 text-lg font-light text-slate-50 mt-6">
              Commence architectural planning for your next digital evolution.
            </p>
<div className="mt-10 flex justify-center">
<a className="group inline-flex items-center justify-center gap-2 rounded-full border border-amber-300/20 bg-white/[0.06] px-8 py-4 text-xs font-normal uppercase tracking-[0.16em] text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:border-amber-300/35 hover:shadow-[0_0_2.5rem_rgba(251,191,36,0.22)]" href="/initiate">
                Engage Systems
                <iconify-icon className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</section>
</main>
<footer className="relative overflow-hidden bg-black px-5 py-12 text-white sm:px-8 lg:px-10 xl:px-12">

<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/70 to-transparent"></div>

<div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[42rem] -translate-x-1/2 rounded-full bg-orange-500/15 blur-[90px]"></div>
<div className="relative mx-auto flex w-full max-w-[92rem] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
<div className="max-w-md">
<a className="group flex items-center gap-3.5" href="#">
<span className="flex shrink-0 items-center justify-center text-rose-400 w-10 h-10 border-rose-400/45 border rounded-full relative backdrop-blur-xl">
<iconify-icon className="text-2xl text-orange-500/80" height="24" icon="solar:globus-linear" style={{strokeWidth: '1.5', color: 'rgb(249, 115, 22)'}} width="24"></iconify-icon>
</span>
<span className="leading-none">
<span className="block text-sm font-normal uppercase tracking-[0.28em] text-white">
                VECTRA
              </span>
</span>
</a>
<p className="mt-6 text-sm leading-7 text-slate-400 font-light">
            Precision engineering for the digital frontier.
          </p>
</div>
<div className="grid gap-8 text-xs font-light sm:grid-cols-3 lg:gap-14">
<div className="">
<p className="font-normal uppercase tracking-[0.18em] text-white">
              Index
            </p>
<div className="mt-4 grid gap-3 text-slate-500">
<a className="transition hover:text-white" href="/work">Output</a>
<a className="transition hover:text-white" href="/services">
                Capabilities
              </a>
</div>
</div>
<div className="">
<p className="font-normal uppercase tracking-[0.18em] text-white">
              Network
            </p>
<div className="mt-4 grid gap-3 text-slate-500">
<a className="transition hover:text-white" href="/about">
                Partners
              </a>
<a className="transition hover:text-white" href="/initiate">
                Engagement
              </a>
</div>
</div>
<div className="">
<p className="font-normal uppercase tracking-[0.18em] text-white">
              Comms
            </p>
<div className="mt-4 grid gap-3 text-slate-500">
<a className="transition hover:text-white" href="#">
                transmit@vectra.io
              </a>
<span className="">Global Remote</span>
</div>
</div>
</div>
</div>
<div className="relative mx-auto mt-10 flex w-full max-w-[92rem] flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between font-light">
<p>© 2024 Vectra Digital.</p>
</div>
</footer>


    </>
  );
}
