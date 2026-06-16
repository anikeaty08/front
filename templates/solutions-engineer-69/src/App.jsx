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



      // GSAP Animations
      gsap.registerPlugin(ScrollTrigger);

      function setupAnimations() {
          // Scroll Progress Bar
          gsap.to('#scroll-progress', {
              width: '100%',
              ease: 'none',
              scrollTrigger: {
                  trigger: document.body,
                  start: 'top top',
                  end: 'bottom bottom',
                  scrub: 0.3
              }
          });

          // Text Reveal Animation
          const textElements = document.querySelectorAll('.js-reveal-text');
          textElements.forEach(el => {
              const text = el.innerHTML;
              if(!text.includes('<p>')) {
                  const words = el.innerText.trim().split(' ').filter(Boolean);
                  el.innerHTML = '';
                  words.forEach((word, i) => {
                      const wordDiv = document.createElement('div');
                      wordDiv.style.cssText = 'display: inline-block; overflow: hidden; vertical-align: top;';
                      wordDiv.innerHTML = `<span style='display: inline-block; transform: translateY(100%); opacity: 0;'>${word}</span>`;
                      el.appendChild(wordDiv);
                      if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
                  });
              } else {
                  const paragraphs = el.querySelectorAll('p');
                  paragraphs.forEach(p => {
                      p.style.overflow = 'hidden';
                      p.innerHTML = `<span style='display: block; transform: translateY(100%); opacity: 0;'>${p.innerHTML}</span>`;
                  });
              }

              gsap.to(el.querySelectorAll('span'), {
                  y: '0%',
                  opacity: 1,
                  ease: 'power3.out',
                  duration: 0.8,
                  stagger: 0.05,
                  scrollTrigger: {
                      trigger: el,
                      start: 'top 85%',
                  }
              });
          });

          // Typewriter Effect
          const twEl = document.querySelector('.js-typewriter');
          if(twEl) {
              const text = twEl.innerText;
              twEl.innerText = '';
              const chars = text.split('');
              chars.forEach(char => {
                  const span = document.createElement('span');
                  span.innerText = char;
                  span.style.opacity = '0';
                  twEl.appendChild(span);
              });
              gsap.to(twEl.querySelectorAll('span'), {
                  opacity: 1,
                  duration: 0.02,
                  stagger: 0.03,
                  ease: 'none',
                  scrollTrigger: {
                      trigger: twEl,
                      start: 'top 85%'
                  }
              });
          }

          // Fade up for isolated items
          const itemElements = document.querySelectorAll('.js-reveal-item');
          itemElements.forEach(el => {
              gsap.fromTo(el,
                  { y: 20, opacity: 0 },
                  {
                      y: 0,
                      opacity: 1,
                      duration: 0.8,
                      ease: 'power3.out',
                      scrollTrigger: {
                          trigger: el,
                          start: 'top 90%',
                      }
                  }
              );
          });

          // Project Cards Stagger Fade with Upward Drift
          const projectCards = document.querySelectorAll('#projects .group');
          if (projectCards.length > 0) {
              gsap.fromTo(projectCards,
                  { y: 40, opacity: 0 },
                  {
                      y: 0,
                      opacity: 1,
                      duration: 0.8,
                      stagger: 0.15,
                      ease: 'power3.out',
                      clearProps: 'transform',
                      scrollTrigger: {
                          trigger: '#projects .grid',
                          start: 'top 85%'
                      }
                  }
              );
          }

          // Active Nav Highlight
          const sections = document.querySelectorAll('section[id]');
          const navLinks = document.querySelectorAll('nav a[href^="#"]');

          navLinks.forEach(link => {
              link.style.position = 'relative';
              const underline = document.createElement('span');
              underline.className = 'absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 transition-all duration-300 pointer-events-none nav-underline';
              link.appendChild(underline);
          });

          window.addEventListener('scroll', () => {
              let current = '';
              sections.forEach(section => {
                  const sectionTop = section.offsetTop;
                  if(scrollY >= (sectionTop - 200)) {
                      current = section.getAttribute('id');
                  }
              });

              navLinks.forEach(link => {
                  const underline = link.querySelector('.nav-underline');
                  if(link.getAttribute('href') === '#' + current) {
                      link.classList.add('text-zinc-900');
                      if(underline) underline.style.width = '100%';
                  } else {
                      link.classList.remove('text-zinc-900');
                      if(underline) underline.style.width = '0%';
                  }
              });
          });

          // Experience timeline numbers count up
          const numberSpans = document.querySelectorAll('#experience .group .opacity-0.text-zinc-600');
          numberSpans.forEach(span => {
              const targetNum = parseInt(span.innerText, 10);
              if(!isNaN(targetNum)) {
                  span.innerText = '00';
                  ScrollTrigger.create({
                      trigger: span,
                      start: 'top 85%',
                      onEnter: () => {
                          let obj = { val: 0 };
                          gsap.to(obj, {
                              val: targetNum,
                              duration: 1.5,
                              ease: 'power2.out',
                              onUpdate: () => {
                                  span.innerText = obj.val < 10 ? '0' + Math.floor(obj.val) : Math.floor(obj.val);
                              }
                          });
                      }
                  });
              }
          });

          // Magnetic Cursor Effect
          const magnets = document.querySelectorAll('nav a, button, a.bg-zinc-900');
          magnets.forEach(elem => {
              elem.addEventListener('mousemove', (e) => {
                  const rect = elem.getBoundingClientRect();
                  const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
                  const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
                  gsap.to(elem, { x: x, y: y, duration: 0.4, ease: 'power2.out' });
              });
              elem.addEventListener('mouseleave', () => {
                  gsap.to(elem, { x: 0, y: 0, duration: 0.4, ease: 'power2.out' });
              });
          });

          // Skill card tilt on hover
          const skillCards = document.querySelectorAll('#skills .grid > div');
          skillCards.forEach(card => {
              card.addEventListener('mousemove', (e) => {
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const tiltX = ((y - centerY) / centerY) * -4;
                  const tiltY = ((x - centerX) / centerX) * 4;

                  gsap.to(card, {
                      rotationX: tiltX,
                      rotationY: tiltY,
                      transformPerspective: 1000,
                      ease: 'power2.out',
                      duration: 0.3
                  });
              });
              card.addEventListener('mouseleave', () => {
                  gsap.to(card, {
                      rotationX: 0,
                      rotationY: 0,
                      ease: 'power2.out',
                      duration: 0.5
                  });
              });
          });

          // Custom Cursor Dot
          const cursor = document.getElementById('custom-cursor');
          if (cursor) {
              gsap.set(cursor, { xPercent: -50, yPercent: -50 });
              let mouseX = 0, mouseY = 0;
              let cursorX = 0, cursorY = 0;

              document.addEventListener('mousemove', (e) => {
                  mouseX = e.clientX;
                  mouseY = e.clientY;
              });

              gsap.ticker.add(() => {
                  cursorX += (mouseX - cursorX) * 0.2;
                  cursorY += (mouseY - cursorY) * 0.2;
                  gsap.set(cursor, { x: cursorX, y: cursorY });
              });
          }
      }

      // Minimalist Three.js Background
      function initWebGL() {
          const container = document.getElementById('canvas-container');
          if(!container) return;
          const scene = new THREE.Scene();

          const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
          camera.position.z = 50;

          const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          container.appendChild(renderer.domElement);

          const particlesGeometry = new THREE.BufferGeometry();
          const particlesCount = 700;
          const posArray = new Float32Array(particlesCount * 3);

          for(let i = 0; i < particlesCount * 3; i++) {
              posArray[i] = (Math.random() - 0.5) * 150;
          }

          particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

          const material = new THREE.PointsMaterial({
              size: 0.15,
              color: '#a1a1aa',
              transparent: true,
              opacity: 0.5
          });

          const particlesMesh = new THREE.Points(particlesGeometry, material);
          scene.add(particlesMesh);

          let mouseX = 0;
          let mouseY = 0;
          let targetX = 0;
          let targetY = 0;

          const windowHalfX = window.innerWidth / 2;
          const windowHalfY = window.innerHeight / 2;

          document.addEventListener('mousemove', (event) => {
              mouseX = (event.clientX - windowHalfX);
              mouseY = (event.clientY - windowHalfY);
          });

          const clock = new THREE.Clock();

          const tick = () => {
              const elapsedTime = clock.getElapsedTime();

              particlesMesh.rotation.y = elapsedTime * 0.03;
              particlesMesh.rotation.x = elapsedTime * 0.01;

              targetX = mouseX * 0.0005;
              targetY = mouseY * 0.0005;

              particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
              particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);

              renderer.render(scene, camera);
              window.requestAnimationFrame(tick);
          };

          tick();

          window.addEventListener('resize', () => {
              camera.aspect = window.innerWidth / window.innerHeight;
              camera.updateProjectionMatrix();
              renderer.setSize(window.innerWidth, window.innerHeight);
          });
      }

      document.addEventListener('DOMContentLoaded', () => {
          setupAnimations();
          if(window.innerWidth > 768) {
              initWebGL();
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed top-0 left-0 h-1 bg-zinc-900 z-[100] w-0 transition-none" id="scroll-progress"></div>
<div className="fixed top-0 left-0 w-2 h-2 bg-zinc-900 rounded-full pointer-events-none z-[100] hidden md:block" id="custom-cursor"></div>
<div className="fixed inset-0 z-[-1] bg-white pointer-events-none overflow-hidden">
<div className="absolute inset-0 opacity-30">
<div className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vh] bg-gradient-to-br from-[#fef08a] to-[#fbcfe8] rounded-full blur-[100px]"></div>
<div className="absolute top-[20%] -left-[20%] w-[60vw] h-[60vh] bg-[#f9a8d4] rounded-full blur-[120px]"></div>
<div className="absolute -bottom-[10%] -right-[10%] w-[80vw] h-[80vh] bg-gradient-to-tl from-[#67e8f9] to-[#93c5fd] rounded-full blur-[120px]"></div>
<div className="absolute top-[30%] left-[20%] w-[60vw] h-[60vh] bg-[#d8b4fe] rounded-full blur-[120px]"></div>
</div>
</div>

<div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none opacity-40 mix-blend-multiply" id="canvas-container"></div>
<div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12">

<nav className="fixed top-0 left-0 w-full z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-[1200px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
<a className="text-sm font-medium tracking-tight text-zinc-900 flex items-center gap-2" href="#">
<img alt="RFID Cloud Technology Logo" className="h-5 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d573f0dd-6084-49d2-92a6-1b26f224b04d_320w.png"/>
            Brandon See
          </a>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#about">
              About
            </a>
<a className="hover:text-zinc-900 transition-colors" href="#experience">
              Experience
            </a>
<a className="hover:text-zinc-900 transition-colors" href="#projects">
              Projects
            </a>
<a className="hover:text-zinc-900 transition-colors" href="#fit">
              Why Me
            </a>
</div>
<button className="md:hidden text-zinc-900">
<iconify-icon className="text-xl flex" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="min-h-screen flex flex-col justify-center pt-32 pb-24" id="about">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-white shadow-sm mb-8 js-reveal-item">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium text-zinc-600 tracking-wide">
              Available for opportunities
            </span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-balance text-zinc-900 mb-6 js-reveal-text">
            Solutions Engineer blending hardware, software, and operational
            strategy.
          </h1>
<h2 className="text-lg md:text-xl font-medium text-zinc-700 tracking-tight mb-8 js-typewriter">
            RFID, IoT &amp; Digitalization Enthusiast
          </h2>
<div className="space-y-6 text-base text-zinc-500 leading-relaxed max-w-2xl js-reveal-text mb-12">
<p>
              Mechatronics engineering student with hands-on experience in RFID
              systems, IoT deployment, and software implementation. Passionate
              about solving operational challenges through technology — from
              configuring RFID hardware and developing software tools to
              supporting end-to-end solution delivery.
            </p>
<p>
              Strong interest in bridging engineering, software, and real-world
              business operations to create impactful digital solutions.
            </p>
</div>
<div className="js-reveal-item">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-4">
              Core Focus
            </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-700 shadow-sm">
                RFID Solutions
              </span>
<span className="px-3 py-1.5 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-700 shadow-sm">
                IoT Systems
              </span>
<span className="px-3 py-1.5 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-700 shadow-sm">
                Software Implementation
              </span>
<span className="px-3 py-1.5 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-700 shadow-sm">
                Problem Solving
              </span>
<span className="px-3 py-1.5 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-700 shadow-sm">
                Digital Transformation
              </span>
</div>
</div>
</div>
</section>

<section className="py-24" id="experience">
<div className="bg-zinc-950 rounded-[2rem] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">

<div className="absolute top-0 right-0 w-96 h-96 bg-zinc-800/30 blur-[100px] rounded-full pointer-events-none"></div>
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 relative z-10">
<div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4">
                [ Career ]
              </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
                Job Experience
              </h2>
</div>
<p className="text-sm text-zinc-400 mt-4 md:mt-0 max-w-xs text-balance">
              Practical implementation across RFID, IoT, and data-driven
              systems.
            </p>
</div>
<div className="flex flex-col relative z-10">

<div className="group border-t border-zinc-800 py-8 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 transition-colors hover:bg-zinc-900/40 rounded-xl -mx-4 px-4">
<div className="text-sm font-medium text-zinc-500 flex flex-col justify-between">
<span>Nov 2025 – Feb 2026</span>
<span className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity text-zinc-600">
                  01
                </span>
</div>
<div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
<h3 className="text-xl font-medium tracking-tight text-white group-hover:text-blue-400 transition-colors">
                    RFID Backend Engineer Intern
                  </h3>
<span className="text-sm font-medium text-zinc-400 mt-1 sm:mt-0">
                    INCHZ IOT
                  </span>
</div>
<ul className="space-y-2 text-sm text-zinc-400 mt-4 flex flex-col gap-2">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-zinc-600 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
                    Developed a full-stack RFID calibration application using C#
                    and .NET
                  </li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-zinc-600 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
                    Enabled real-time RFID reader communication through MQTT
                  </li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-zinc-600 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
                    Improved RFID device calibration accuracy and overall system
                    reliability
                  </li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-zinc-600 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
                    Troubleshot RFID hardware and backend integration issues in
                    an Agile environment
                  </li>
</ul>
</div>
</div>

<div className="group border-t border-zinc-800 py-8 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 transition-colors hover:bg-zinc-900/40 rounded-xl -mx-4 px-4">
<div className="text-sm font-medium text-zinc-500 flex flex-col justify-between">
<span>Nov 2025 – Feb 2026</span>
<span className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity text-zinc-600">
                  02
                </span>
</div>
<div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
<h3 className="text-xl font-medium tracking-tight text-white group-hover:text-blue-400 transition-colors">
                    RFID Business Development Intern
                  </h3>
<span className="text-sm font-medium text-zinc-400 mt-1 sm:mt-0">
                    INCHZ IOT
                  </span>
</div>
<ul className="space-y-2 text-sm text-zinc-400 mt-4 flex flex-col gap-2">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-zinc-600 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
                    Gathered client requirements and analyzed operational
                    workflows via site visits
                  </li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-zinc-600 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
                    Demonstrated RFID products and solutions through client
                    presentations and live demos
                  </li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-zinc-600 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
                    Prepared technical proposals and customized RFID solution
                    recommendations
                  </li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-zinc-600 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
                    Bridged communication between clients and technical teams
                  </li>
</ul>
</div>
</div>

<div className="group border-t border-zinc-800 py-8 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 transition-colors hover:bg-zinc-900/40 rounded-xl -mx-4 px-4">
<div className="text-sm font-medium text-zinc-500 flex flex-col justify-between">
<span>Dec 2024 – Jan 2025</span>
<span className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity text-zinc-600">
                  03
                </span>
</div>
<div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
<h3 className="text-xl font-medium tracking-tight text-white group-hover:text-blue-400 transition-colors">
                    MLOps Engineer Intern
                  </h3>
<span className="text-sm font-medium text-zinc-400 mt-1 sm:mt-0">
                    Sudu AI
                  </span>
</div>
<ul className="space-y-2 text-sm text-zinc-400 mt-4 flex flex-col gap-2">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-zinc-600 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
                    Built and deployed machine learning pipelines on cloud
                    infrastructure
                  </li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-zinc-600 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
                    Developed predictive maintenance systems using real-time
                    sensor data
                  </li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-zinc-600 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
                    Worked with MLflow, Kubernetes, Seldon Core, Jenkins,
                    Prometheus, and Grafana
                  </li>
</ul>
</div>
</div>

<div className="group border-t border-zinc-800 py-8 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 transition-colors hover:bg-zinc-900/40 rounded-xl -mx-4 px-4">
<div className="text-sm font-medium text-zinc-500 flex flex-col justify-between">
<span>Jun 2021 – Dec 2023</span>
<span className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity text-zinc-600">
                  04
                </span>
</div>
<div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
<h3 className="text-xl font-medium tracking-tight text-white group-hover:text-blue-400 transition-colors">
                    Part-Time Marketing Executive
                  </h3>
<span className="text-sm font-medium text-zinc-400 mt-1 sm:mt-0">
                    32 Degrees Grill &amp; Bar
                  </span>
</div>
<ul className="space-y-2 text-sm text-zinc-400 mt-4 flex flex-col gap-2">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-zinc-600 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
                    Developed a digital reservation system to improve booking
                    efficiency and reduce manual workload
                  </li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-zinc-600 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
                    Managed high-budget digital marketing campaigns
                  </li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-zinc-600 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
                    Strengthened client communication and developed a
                    business-oriented problem-solving mindset
                  </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="projects">
<div className="text-lg font-semibold text-zinc-800 uppercase tracking-widest mb-12 text-center">
          [ Technical Projects ]
        </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl ring-1 ring-zinc-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group h-full hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 text-zinc-600 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl flex" icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-3">
              RFID Blockchain Warehouse Management System
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed flex-grow">
              Developed a blockchain-integrated RFID warehouse management system
              using Raspberry Pi and Ethereum to track textile roll data and
              visualize inventory information.
            </p>
</div>

<div className="bg-white p-8 rounded-2xl ring-1 ring-zinc-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group h-full hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 text-zinc-600 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl flex" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-3">
              Cyber-Physical Monitoring
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed flex-grow">
              Developed a multi-sensor monitoring system integrating real-time
              data acquisition, cloud storage, dashboard visualization, and
              actuator control using Raspberry Pi.
            </p>
</div>

<div className="bg-white p-8 rounded-2xl ring-1 ring-zinc-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group h-full hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 text-zinc-600 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl flex" icon="solar:cloud-water-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-3">
              IoT Air Quality Platform
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed flex-grow">
              Designed an IoT-based environmental monitoring platform
              integrating sensors for air pollutants, temperature, pressure, and
              humidity with real-time dashboard visualization.
            </p>
</div>

<div className="bg-white p-8 rounded-2xl ring-1 ring-zinc-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group h-full hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 text-zinc-600 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl flex" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-3">
              ML Deployment Pipelines
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed flex-grow">
              Built and deployed machine learning models for heart attack risk
              classification and house price prediction, including complete
              training and inference pipelines on cloud infrastructure.
            </p>
</div>

<div className="bg-white p-8 rounded-2xl ring-1 ring-zinc-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group h-full hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 text-zinc-600 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl flex" icon="solar:waterdrops-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-3">
              Automated Tank Monitoring
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed flex-grow">
              Developed a Python and Arduino-based system to monitor water
              levels and automatically control motor operations for efficient
              tank management.
            </p>
</div>

<div className="bg-white p-8 rounded-2xl ring-1 ring-zinc-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group h-full hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 text-zinc-600 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl flex" icon="solar:programming-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-3">
              Autonomous Robotics
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed flex-grow">
              Built an autonomous robot capable of detecting, picking up, and
              placing objects using Arduino programming and embedded control
              systems.
            </p>
</div>
</div>
</section>

<section className="py-12 md:py-24" id="skills">
<div className="bg-zinc-50/80 backdrop-blur-sm rounded-[2rem] p-8 md:p-12 lg:p-16 border border-zinc-200/50 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-white blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<div className="text-lg font-semibold text-zinc-800 uppercase tracking-widest mb-12 text-center js-reveal-item">
              [ Core Skills ]
            </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
<div className="flex flex-col gap-4 js-reveal-item">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 shadow-sm">
<iconify-icon className="text-xl" icon="solar:cpu-linear"></iconify-icon>
</div>
<div>
<h3 className="text-zinc-900 font-medium text-lg tracking-tight mb-2">
                    RFID &amp; IoT Systems
                  </h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                    Hardware integration • Reader configuration • Sensor
                    networks • 3D Modelling
                  </p>
</div>
</div>
<div className="flex flex-col gap-4 js-reveal-item">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 shadow-sm">
<iconify-icon className="text-xl" icon="solar:code-square-linear"></iconify-icon>
</div>
<div>
<h3 className="text-zinc-900 font-medium text-lg tracking-tight mb-2">
                    Software &amp; Backend
                  </h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                    C# .NET • Python • MQTT • APIs
                  </p>
</div>
</div>
<div className="flex flex-col gap-4 js-reveal-item">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 shadow-sm">
<iconify-icon className="text-xl" icon="solar:server-square-linear"></iconify-icon>
</div>
<div>
<h3 className="text-zinc-900 font-medium text-lg tracking-tight mb-2">
                    MLOps &amp; Cloud
                  </h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                    ML pipelines • Kubernetes • MLflow • Monitoring tools
                  </p>
</div>
</div>
<div className="flex flex-col gap-4 js-reveal-item">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 shadow-sm">
<iconify-icon className="text-xl" icon="solar:lightbulb-bolt-linear"></iconify-icon>
</div>
<div>
<h3 className="text-zinc-900 font-medium text-lg tracking-tight mb-2">
                    Engineering Mindset
                  </h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                    Problem solving • System debugging • End-to-end deployment
                  </p>
</div>
</div>
<div className="flex flex-col gap-4 js-reveal-item">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 shadow-sm">
<iconify-icon className="text-xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<div>
<h3 className="text-zinc-900 font-medium text-lg tracking-tight mb-2">
                    Soft Skills
                  </h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                    Client communication • Requirement gathering • Cross-team
                    collaboration
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 border-t border-zinc-200/60 mt-12 mb-24" id="fit">
<div className="max-w-4xl mx-auto flex flex-col md:items-center md:text-center">
<img alt="RFID Cloud Logo" className="h-16 w-auto object-contain mb-8 js-reveal-item" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf4ff0ac-eaac-4f34-91ac-9ccde3eb0625_800w.png"/>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-8 js-reveal-text">
            Why I’m a Strong Fit for RFID Cloud
          </h2>
<div className="space-y-6 text-base text-zinc-600 leading-relaxed max-w-3xl js-reveal-text">
<p>
              I bring a unique combination of engineering fundamentals, software
              development experience, RFID expertise, and client-facing
              communication skills.
            </p>
<p>
              My experience in RFID systems, IoT deployments, and technical
              solution design has prepared me to contribute effectively to
              real-world implementation projects. I enjoy understanding
              operational challenges, configuring technical solutions,
              troubleshooting technical issues, and collaborating with teams to
              ensure successful project delivery.
            </p>
<p className="">
              Most importantly, I am eager to learn, adaptable, and excited to
              grow with RFID Cloud while helping clients achieve successful
              digital transformation initiatives.
            </p>
</div>
<div className="mt-12 flex gap-4 js-reveal-item">
<a className="inline-flex items-center justify-center bg-zinc-900 text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-zinc-800 transition-colors shadow-sm gap-2" href="#">
              Let's Work Together Now
              <iconify-icon className="text-base flex" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="py-8 border-t border-zinc-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-zinc-500">
<div>© 2024 Brandon See. All rights reserved.</div>
<div className="flex items-center gap-6">
<a className="hover:text-zinc-900 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-zinc-900 transition-colors" href="#">GitHub</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Email</a>
</div>
</footer>
</div>


    </>
  );
}
