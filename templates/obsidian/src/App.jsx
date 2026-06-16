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
              if(typeof lucide !== 'undefined') {
                  lucide.createIcons();
              }

              function initShopByCategory() {
                  if(typeof gsap === 'undefined') return;

                  gsap.from("#shop-by-category .col-section", {
                      duration: 1.2,
                      y: 50,
                      opacity: 0,
                      stagger: 0.1,
                      ease: "power3.out",
                      clearProps: "all",
                      delay: 0.2
                  });

                  const animationDefaults = { duration: 0.5, ease: 'power3.out' };

                  const findClosestEdge = (mouseX, mouseY, width, height) => {
                      const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
                      const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
                      return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
                  };

                  const sections = document.querySelectorAll('#shop-by-category .col-section');

                  sections.forEach(section => {
                      const overlay = section.querySelector('.marquee-overlay');
                      const innerRef = section.querySelector('.marquee-inner');
                      if (!overlay || !innerRef) return;

                      const text = innerRef.dataset.text;
                      const img = innerRef.dataset.img;
                      let animationRef = null;

                      const renderMarquee = () => {
                          innerRef.innerHTML = '';

                          const part = document.createElement('div');
                          part.className = "marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]";
                          part.innerHTML = `
                              <span class="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">${text}</span>
                              <div class="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style="background-image: url('${img}')"></div>
                          `;

                          innerRef.appendChild(part);

                          const contentWidth = part.offsetWidth || 300;
                          const viewportWidth = window.innerWidth;
                          const needed = Math.ceil(viewportWidth / contentWidth) + 2;
                          const repetitions = Math.max(4, needed);

                          for (let i = 1; i < repetitions; i++) {
                              innerRef.appendChild(part.cloneNode(true));
                          }

                          if (animationRef) animationRef.kill();

                          setTimeout(() => {
                              const updatedPart = innerRef.querySelector('.marquee-part');
                              const cw = updatedPart ? updatedPart.offsetWidth : 300;
                              if(cw === 0) return;
                              animationRef = gsap.to(innerRef, {
                                  x: -cw,
                                  duration: 8,
                                  ease: 'none',
                                  repeat: -1
                              });
                          }, 50);
                      };

                      setTimeout(renderMarquee, 100);
                      window.addEventListener('resize', renderMarquee);

                      section.addEventListener('mouseenter', (ev) => {
                          const rect = section.getBoundingClientRect();
                          const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

                          gsap.timeline({ defaults: animationDefaults })
                              .set(overlay, { y: edge === 'top' ? '-101%' : '101%' }, 0)
                              .set(innerRef, { y: edge === 'top' ? '101%' : '-101%' }, 0)
                              .to([overlay, innerRef], { y: '0%' }, 0);
                      });

                      section.addEventListener('mouseleave', (ev) => {
                          const rect = section.getBoundingClientRect();
                          const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

                          gsap.timeline({ defaults: animationDefaults })
                              .to(overlay, { y: edge === 'top' ? '-101%' : '101%' }, 0)
                              .to(innerRef, { y: edge === 'top' ? '101%' : '-101%' }, 0);
                      });
                  });
              }

              setTimeout(initShopByCategory, 100);
          })();
        


      document.addEventListener("DOMContentLoaded", (event) => {
          gsap.registerPlugin(ScrollTrigger);

          const tl = gsap.timeline();
          tl.from(".gsap-hero-text h1", { y: 40, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2 })
            .from(".gsap-hero-widget", { x: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");

          gsap.utils.toArray('.gsap-fade-up').forEach((elem) => {
              gsap.from(elem, {
                  scrollTrigger: {
                      trigger: elem,
                      start: "top 85%",
                  },
                  y: 30,
                  opacity: 0,
                  duration: 0.8,
                  ease: "power2.out"
              });
          });

          const faqToggles = document.querySelectorAll('.faq-toggle');
          faqToggles.forEach(toggle => {
              toggle.addEventListener('click', () => {
                  const content = toggle.nextElementSibling;
                  const icon = toggle.querySelector('iconify-icon');
                  const isOpen = content.classList.contains('is-open');

                  document.querySelectorAll('.accordion-content').forEach(c => {
                      if(c !== content) {
                          c.classList.remove('is-open');
                          c.previousElementSibling.setAttribute('aria-expanded', 'false');
                          c.previousElementSibling.querySelector('iconify-icon').setAttribute('icon', 'solar:alt-arrow-down-linear');
                          c.previousElementSibling.querySelector('iconify-icon').classList.remove('rotate-180');
                      }
                  });

                  if (!isOpen) {
                      content.classList.add('is-open');
                      toggle.setAttribute('aria-expanded', 'true');
                      icon.setAttribute('icon', 'solar:alt-arrow-up-linear');
                      icon.classList.add('rotate-180');
                  } else {
                      content.classList.remove('is-open');
                      toggle.setAttribute('aria-expanded', 'false');
                      icon.setAttribute('icon', 'solar:alt-arrow-down-linear');
                      icon.classList.remove('rotate-180');
                  }
              });
          });

          const canvas = document.getElementById('hero-webgl');
          if(canvas) {
              const gl = canvas.getContext('webgl', { alpha: true });
              if (gl) {
                  const resize = () => {
                      canvas.width = canvas.clientWidth;
                      canvas.height = canvas.clientHeight;
                      gl.viewport(0, 0, canvas.width, canvas.height);
                  };
                  window.addEventListener('resize', resize);
                  resize();

                  const vsSource = `
                      attribute vec2 position;
                      varying vec2 vUv;
                      void main() {
                          vUv = position * 0.5 + 0.5;
                          gl_Position = vec4(position, 0.0, 1.0);
                      }
                  `;

                  const fsSource = `
                      precision mediump float;
                      varying vec2 vUv;
                      uniform float time;

                      vec3 colorA = vec3(0.97, 0.96, 0.94);
                      vec3 colorB = vec3(0.90, 0.88, 0.85);
                      vec3 colorC = vec3(0.89, 0.42, 0.30);

                      void main() {
                          vec2 p = vUv;
                          float noise = sin(p.x * 3.0 + time * 0.5) * cos(p.y * 2.0 + time * 0.3);
                          float mixVal = smoothstep(0.0, 1.0, (p.y + noise * 0.2));

                          vec3 color = mix(colorA, colorB, mixVal);

                          float splash = exp(-10.0 * length(p - vec2(0.8, 0.2) + vec2(sin(time)*0.1, cos(time)*0.1)));
                          color = mix(color, colorC, splash * 0.15);

                          gl_FragColor = vec4(color, 1.0);
                      }
                  `;

                  const compileShader = (type, source) => {
                      const shader = gl.createShader(type);
                      gl.shaderSource(shader, source);
                      gl.compileShader(shader);
                      return shader;
                  };

                  const program = gl.createProgram();
                  gl.attachShader(program, compileShader(gl.VERTEX_SHADER, vsSource));
                  gl.attachShader(program, compileShader(gl.FRAGMENT_SHADER, fsSource));
                  gl.linkProgram(program);
                  gl.useProgram(program);

                  const buffer = gl.createBuffer();
                  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
                  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                      -1, -1,  1, -1, -1,  1,
                      -1,  1,  1, -1,  1,  1
                  ]), gl.STATIC_DRAW);

                  const positionLocation = gl.getAttribLocation(program, "position");
                  gl.enableVertexAttribArray(positionLocation);
                  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

                  const timeLocation = gl.getUniformLocation(program, "time");

                  let startTime = Date.now();
                  const render = () => {
                      const time = (Date.now() - startTime) * 0.001;
                      gl.uniform1f(timeLocation, time);
                      gl.drawArrays(gl.TRIANGLES, 0, 6);
                      requestAnimationFrame(render);
                  };
                  render();
              }
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-[#3A2618] text-[#F8F7F4]/80 text-xs tracking-widest uppercase text-center py-2 relative z-50">
      * Complimentary Global Delivery on purchases exceeding $200 *
    </div>
<main className="max-w-[1440px] mx-auto bg-[#FDFCF9] border-x border-[#E5E4DE] relative min-h-screen shadow-2xl shadow-black/[0.02] flex flex-col">
<div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#1a1a1a]/20 z-50 pointer-events-none"></div>
<div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#1a1a1a]/20 z-50 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#1a1a1a]/20 z-50 pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#1a1a1a]/20 z-50 pointer-events-none"></div>
<header className="flex items-center justify-between px-6 py-5 border-b border-[#E5E4DE] relative z-40 bg-[#FDFCF9]/90 backdrop-blur-sm sticky top-0">
<div className="flex items-center">
<a className="text-xl font-normal tracking-tighter uppercase" href="#">
            Obsidian
          </a>
</div>
<nav className="hidden md:flex space-x-8 text-xs tracking-widest uppercase text-gray-500">
<a className="hover:text-black transition-colors" href="#">Furniture</a>
<a className="hover:text-black transition-colors" href="#">Mattresses</a>
<a className="hover:text-black transition-colors" href="#">Appliances</a>
<a className="hover:text-black transition-colors" href="#">Storage</a>
<a className="hover:text-black transition-colors" href="#">Decor</a>
</nav>
<div className="flex items-center space-x-6 text-xs tracking-widest uppercase text-gray-500">
<a className="hover:text-black transition-colors hidden sm:block" href="#">
            Account
          </a>
<a className="hover:text-black transition-colors flex items-center space-x-1 border-l border-[#E5E4DE] pl-6" href="#">
<span>Cart</span>
<span className="text-gray-400 font-light">(05)</span>
</a>
</div>
</header>
<section className="relative border-b border-[#E5E4DE] overflow-hidden min-h-[70vh] flex flex-col justify-center px-6 py-20 lg:py-32">
<video autoplay="" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 scale-100" data-container-bg="true" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/a6b7e3f7-784c-461c-b1e2-155c7fbee21d/0.mp4"></video>
<canvas className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-multiply" height="714" id="hero-webgl" width="1438"></canvas>
<div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full relative">
<div className="flex flex-col gsap-hero-text lg:col-span-8 text-right px-12 absolute top-0 right-0 bottom-0 justify-center">
<h1 className="leading-none uppercase sm:text-7xl lg:text-8xl text-5xl font-light text-[#1a1a1a] tracking-tight text-right max-w-3xl">
              Curate
              <br/>
              Furniture
              <br/>
              For Your Modern Space
            </h1>
</div>
</div>
</section>
<section className="bg-[#E5E4DE] border-b border-[#E5E4DE]">
<div className="grid grid-cols-1 md:grid-cols-3 gap-[1px]">
<div className="bg-[#F6F5F2] aspect-[4/5] sm:aspect-square md:aspect-[4/5] p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden cursor-pointer gsap-fade-up">
<div className="text-xs uppercase tracking-widest text-gray-500 bg-[#E5E4DE]/50 self-start px-3 py-1.5 rounded-sm">
              New Arrival
            </div>
<div className="flex-grow flex items-center justify-center py-8 relative z-10">
<img alt="Neon Wave Print" className="max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out shadow-2xl shadow-black/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/56e37501-2b32-4183-9b1b-80217f41ef03_3840w.png"/>
</div>
<div className="flex justify-between items-end relative z-10">
<p className="text-xs tracking-widest uppercase font-normal">
                Lounge Chair
              </p>
<iconify-icon className="text-gray-400 group-hover:text-black transition-colors" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
</div>
<div className="bg-[#F6F5F2] aspect-[4/5] sm:aspect-square md:aspect-[4/5] p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden cursor-pointer gsap-fade-up" style={{animationDelay: '100ms'}}>
<div className="text-xs uppercase tracking-widest text-gray-500 bg-[#E5E4DE]/50 self-start px-3 py-1.5 rounded-sm">
              Highlighted
            </div>
<div className="flex-grow flex items-center justify-center py-8 relative z-10">
<img alt="Pyramid Object" className="max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out shadow-2xl shadow-black/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53525a99-9cd1-484f-98ef-acfa4dfa3fc6_1600w.png"/>
</div>
<div className="flex justify-between items-end relative z-10">
<p className="text-xs tracking-widest uppercase font-normal">
                Coffee Table
              </p>
<iconify-icon className="text-gray-400 group-hover:text-black transition-colors" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
</div>
<div className="bg-[#F6F5F2] aspect-[4/5] sm:aspect-square md:aspect-[4/5] p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden cursor-pointer gsap-fade-up" style={{animationDelay: '200ms'}}>
<div className="text-xs uppercase tracking-widest text-gray-500 bg-[#E5E4DE]/50 self-start px-3 py-1.5 rounded-sm">
              Essential
            </div>
<div className="flex-grow flex items-center justify-center py-8 relative z-10">
<img alt="Iso House" className="max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out shadow-2xl shadow-black/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f14289b-bd56-48ed-bc55-54b6064a796a_3840w.png"/>
</div>
<div className="flex justify-between items-end relative z-10">
<p className="text-xs tracking-widest uppercase font-normal">
                Modular Sofa
              </p>
<iconify-icon className="text-gray-400 group-hover:text-black transition-colors" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
</div>
</div>
</section>
<section className="bg-[#FDFCF9] border-b border-[#E5E4DE]">
<div className="flex justify-between items-center p-6 border-b border-[#E5E4DE]">
<h2 className="text-2xl sm:text-3xl tracking-tight uppercase font-light">
            Popular Pieces
          </h2>
<div className="flex space-x-1">
<button className="w-8 h-8 flex items-center justify-center border border-[#E5E4DE] text-gray-400 hover:text-black hover:border-black transition-colors rounded-sm">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center border border-[#E5E4DE] text-gray-400 hover:text-black hover:border-black transition-colors rounded-sm">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="bg-[#E5E4DE] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]">
<div className="bg-white p-6 flex flex-col h-[400px] relative group gsap-fade-up">
<div className="text-xs uppercase tracking-widest text-gray-500 bg-gray-50 self-start px-2 py-1 rounded-sm mb-4">
              Rare Find
            </div>
<div className="flex-grow flex items-center justify-center relative w-full h-48 mb-4">
<img className="object-cover w-full h-full mix-blend-multiply rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d09d4dd2-f309-4432-b1db-1464cc548ca0_3840w.png"/>
</div>
<div className="mt-auto">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xs tracking-widest uppercase font-normal max-w-[60%] leading-relaxed">
                  Curved Sofa
                </h3>
<div className="flex space-x-1">
<div className="w-3 h-3 rounded-full border border-gray-200 bg-blue-900"></div>
<div className="w-3 h-3 rounded-full border border-gray-200 bg-gray-400"></div>
</div>
</div>
<div className="flex justify-between items-center text-xs tracking-wider text-gray-500 mt-4 border-t border-gray-100 pt-3 font-light">
<span className="flex items-center text-orange-400">
<iconify-icon className="mr-1" icon="solar:star-linear" width="12"></iconify-icon>
                  4.8
                  <span className="text-gray-400 ml-1">(34)</span>
</span>
<span className="text-black font-normal">$145.00</span>
</div>
</div>
</div>
<div className="bg-white p-6 flex flex-col h-[400px] relative group gsap-fade-up">
<div className="text-xs uppercase tracking-widest text-gray-500 bg-gray-50 self-start px-2 py-1 rounded-sm mb-4">
              In Demand
            </div>
<div className="flex-grow flex items-center justify-center relative w-full h-48 mb-4">
<img className="object-cover w-full h-full mix-blend-multiply rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d817aca-3f3f-4c9b-bfeb-61b933c55e6b_3840w.png"/>
</div>
<div className="mt-auto">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xs tracking-widest uppercase font-normal max-w-[60%] leading-relaxed">
                  Dining Chair
                </h3>
<div className="flex space-x-1">
<div className="w-3 h-3 rounded-full border border-gray-200 bg-orange-500"></div>
<div className="w-3 h-3 rounded-full border border-gray-200 bg-blue-500"></div>
<div className="w-3 h-3 rounded-full border border-gray-200 bg-white"></div>
</div>
</div>
<div className="flex justify-between items-center text-xs tracking-wider text-gray-500 mt-4 border-t border-gray-100 pt-3 font-light">
<span className="flex items-center text-orange-400">
<iconify-icon className="mr-1" icon="solar:star-linear" width="12"></iconify-icon>
                  4.9
                  <span className="text-gray-400 ml-1">(112)</span>
</span>
<span className="text-black font-normal">$85.00</span>
</div>
</div>
</div>
<div className="bg-white p-6 flex flex-col h-[400px] relative group gsap-fade-up">
<div className="text-xs uppercase tracking-widest text-gray-500 bg-gray-50 self-start px-2 py-1 rounded-sm mb-4">
              Back in Stock
            </div>
<div className="flex-grow flex items-center justify-center relative w-full h-48 mb-4">
<img className="object-cover w-full h-full mix-blend-multiply rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/85c32671-9458-4e9a-a238-7e52056c613e_3840w.png"/>
</div>
<div className="mt-auto">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xs tracking-widest uppercase font-normal max-w-[60%] leading-relaxed">
                  Walnut Desk
                </h3>
<div className="flex space-x-1">
<div className="w-3 h-3 rounded-full border border-gray-200 bg-black"></div>
<div className="w-3 h-3 rounded-full border border-gray-200 bg-purple-900"></div>
</div>
</div>
<div className="flex justify-between items-center text-xs tracking-wider text-gray-500 mt-4 border-t border-gray-100 pt-3 font-light">
<span className="flex items-center text-orange-400">
<iconify-icon className="mr-1" icon="solar:star-linear" width="12"></iconify-icon>
                  4.7
                  <span className="text-gray-400 ml-1">(28)</span>
</span>
<span className="text-black font-normal">$165.00</span>
</div>
</div>
</div>
<div className="bg-white p-6 flex flex-col h-[400px] relative group gsap-fade-up">
<div className="text-xs uppercase tracking-widest text-gray-500 bg-gray-50 self-start px-2 py-1 rounded-sm mb-4">
              Timeless
            </div>
<div className="flex-grow flex items-center justify-center relative w-full h-48 mb-4">
<img className="object-cover w-full h-full mix-blend-multiply rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5e88391-6eb2-44e0-bd32-2cb70529208d_3840w.png"/>
</div>
<div className="mt-auto">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xs tracking-widest uppercase font-normal max-w-[60%] leading-relaxed">
                  Side Table
                </h3>
<div className="flex space-x-1">
<div className="w-3 h-3 rounded-full border border-gray-200 bg-blue-400"></div>
</div>
</div>
<div className="flex justify-between items-center text-xs tracking-wider text-gray-500 mt-4 border-t border-gray-100 pt-3 font-light">
<span className="flex items-center text-orange-400">
<iconify-icon className="mr-1" icon="solar:star-linear" width="12"></iconify-icon>
                  4.9
                  <span className="text-gray-400 ml-1">(77)</span>
</span>
<span className="text-black font-normal">$55.00</span>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#FDFCF9] w-full flex flex-col relative overflow-hidden border-b border-[#E5E4DE]" id="shop-by-category">
<div className="flex items-end justify-between px-6 lg:px-8 pt-10 lg:pt-12 pb-8 md:pb-10 z-10 relative">
<h2 className="text-2xl sm:text-3xl tracking-tight uppercase font-thin text-black">
            Shop by Category
          </h2>
<a className="hidden sm:inline-block text-sm font-light tracking-wide underline underline-offset-4 hover:text-gray-600 transition-colors text-black" href="#">
            View All
          </a>
</div>
<div className="w-full flex flex-col lg:flex-row h-auto lg:h-[75vh] border-t border-[#E5E4DE]">

<a className="col-section group relative flex-1 h-[40vh] lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E5E4DE] cursor-pointer block bg-[#F6F5F2]" href="#">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34cf4d3a-9041-47bd-bcc4-fdc4efc32d00_1600w.png\')'}}></div>
<div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-[#F6F5F2] via-[#F6F5F2]/90 to-transparent"></div>
<div className="z-10 lg:p-6 flex flex-col lg:pt-10 h-full pt-8 pr-5 pb-5 pl-5 relative">
<div className="content-wrapper">
<h3 className="text-xl lg:text-2xl font-thin tracking-tight text-black mb-2">
                  Sofas
                </h3>
</div>
<div className="mt-auto pb-2 content-wrapper">
<div className="w-full border-t border-black/10 pt-4 flex items-center justify-between group/btn">
<span className="text-[10px] tracking-widest uppercase text-black font-light group-hover/btn:opacity-70 transition-opacity">
                    Explore
                  </span>
<i className="text-black w-4 h-4 opacity-0 -translate-x-4 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:translate-x-0" data-lucide="arrow-right"></i>
</div>
</div>
</div>
<div className="marquee-overlay absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none translate-y-[101%] z-50 bg-[#4a3424]">
<div className="marquee-inner h-full w-fit flex" data-img="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34cf4d3a-9041-47bd-bcc4-fdc4efc32d00_1600w.png" data-text="Sofas">
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Sofas
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34cf4d3a-9041-47bd-bcc4-fdc4efc32d00_1600w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Sofas
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34cf4d3a-9041-47bd-bcc4-fdc4efc32d00_1600w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Sofas
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34cf4d3a-9041-47bd-bcc4-fdc4efc32d00_1600w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Sofas
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34cf4d3a-9041-47bd-bcc4-fdc4efc32d00_1600w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Sofas
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34cf4d3a-9041-47bd-bcc4-fdc4efc32d00_1600w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Sofas
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34cf4d3a-9041-47bd-bcc4-fdc4efc32d00_1600w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Sofas
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34cf4d3a-9041-47bd-bcc4-fdc4efc32d00_1600w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Sofas
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34cf4d3a-9041-47bd-bcc4-fdc4efc32d00_1600w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Sofas
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34cf4d3a-9041-47bd-bcc4-fdc4efc32d00_1600w.png\')'}}></div>
</div>
</div>
</div>
</a>

<a className="col-section group relative flex-1 h-[40vh] lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E5E4DE] cursor-pointer block bg-[#F6F5F2]" href="#">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e47b92d-2b3a-4ebf-b063-62cf188bfe26_3840w.png\')'}}></div>
<div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-[#F6F5F2] via-[#F6F5F2]/90 to-transparent"></div>
<div className="relative z-10 p-5 lg:p-6 h-full flex flex-col pt-8 lg:pt-10">
<div className="content-wrapper">
<h3 className="text-xl lg:text-2xl font-thin tracking-tight text-black mb-2">
                  Sectionals
                </h3>
</div>
<div className="mt-auto pb-2 content-wrapper">
<div className="w-full border-t border-black/10 pt-4 flex items-center justify-between group/btn">
<span className="text-[10px] tracking-widest uppercase text-black font-light group-hover/btn:opacity-70 transition-opacity">
                    Explore
                  </span>
<i className="text-black w-4 h-4 opacity-0 -translate-x-4 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:translate-x-0" data-lucide="arrow-right"></i>
</div>
</div>
</div>
<div className="marquee-overlay absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none translate-y-[101%] z-50 bg-[#4a3424]">
<div className="marquee-inner h-full w-fit flex" data-img="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e47b92d-2b3a-4ebf-b063-62cf188bfe26_3840w.png" data-text="Sectionals">
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Sectionals
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e47b92d-2b3a-4ebf-b063-62cf188bfe26_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Sectionals
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e47b92d-2b3a-4ebf-b063-62cf188bfe26_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Sectionals
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e47b92d-2b3a-4ebf-b063-62cf188bfe26_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Sectionals
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e47b92d-2b3a-4ebf-b063-62cf188bfe26_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Sectionals
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e47b92d-2b3a-4ebf-b063-62cf188bfe26_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Sectionals
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e47b92d-2b3a-4ebf-b063-62cf188bfe26_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Sectionals
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e47b92d-2b3a-4ebf-b063-62cf188bfe26_3840w.png\')'}}></div>
</div>
</div>
</div>
</a>

<a className="col-section group relative flex-1 h-[40vh] lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E5E4DE] cursor-pointer block bg-[#F6F5F2]" href="#">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53525a99-9cd1-484f-98ef-acfa4dfa3fc6_1600w.png\')'}}></div>
<div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-[#F6F5F2] via-[#F6F5F2]/90 to-transparent"></div>
<div className="relative z-10 p-5 lg:p-6 h-full flex flex-col pt-8 lg:pt-10">
<div className="content-wrapper">
<h3 className="text-xl lg:text-2xl font-thin tracking-tight text-black mb-2">
                  Dining Tables
                </h3>
</div>
<div className="mt-auto pb-2 content-wrapper">
<div className="w-full border-t border-black/10 pt-4 flex items-center justify-between group/btn">
<span className="text-[10px] tracking-widest uppercase text-black font-light group-hover/btn:opacity-70 transition-opacity">
                    Explore
                  </span>
<i className="text-black w-4 h-4 opacity-0 -translate-x-4 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:translate-x-0" data-lucide="arrow-right"></i>
</div>
</div>
</div>
<div className="marquee-overlay absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none translate-y-[101%] z-50 bg-[#4a3424]">
<div className="marquee-inner h-full w-fit flex" data-img="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53525a99-9cd1-484f-98ef-acfa4dfa3fc6_1600w.png" data-text="Dining Tables">
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Dining Tables
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53525a99-9cd1-484f-98ef-acfa4dfa3fc6_1600w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Dining Tables
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53525a99-9cd1-484f-98ef-acfa4dfa3fc6_1600w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Dining Tables
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53525a99-9cd1-484f-98ef-acfa4dfa3fc6_1600w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Dining Tables
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53525a99-9cd1-484f-98ef-acfa4dfa3fc6_1600w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Dining Tables
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53525a99-9cd1-484f-98ef-acfa4dfa3fc6_1600w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Dining Tables
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53525a99-9cd1-484f-98ef-acfa4dfa3fc6_1600w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Dining Tables
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53525a99-9cd1-484f-98ef-acfa4dfa3fc6_1600w.png\')'}}></div>
</div>
</div>
</div>
</a>

<a className="col-section group relative flex-1 h-[40vh] lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E5E4DE] cursor-pointer block bg-[#F6F5F2]" href="#">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d817aca-3f3f-4c9b-bfeb-61b933c55e6b_3840w.png\')'}}></div>
<div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-[#F6F5F2] via-[#F6F5F2]/90 to-transparent"></div>
<div className="relative z-10 p-5 lg:p-6 h-full flex flex-col pt-8 lg:pt-10">
<div className="content-wrapper">
<h3 className="text-xl lg:text-2xl font-thin tracking-tight text-black mb-2">
                  Dining Chairs
                </h3>
</div>
<div className="mt-auto pb-2 content-wrapper">
<div className="w-full border-t border-black/10 pt-4 flex items-center justify-between group/btn">
<span className="text-[10px] tracking-widest uppercase text-black font-light group-hover/btn:opacity-70 transition-opacity">
                    Explore
                  </span>
<i className="text-black w-4 h-4 opacity-0 -translate-x-4 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:translate-x-0" data-lucide="arrow-right"></i>
</div>
</div>
</div>
<div className="marquee-overlay absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none translate-y-[101%] z-50 bg-[#4a3424]">
<div className="marquee-inner h-full w-fit flex" data-img="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d817aca-3f3f-4c9b-bfeb-61b933c55e6b_3840w.png" data-text="Dining Chairs">
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Dining Chairs
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d817aca-3f3f-4c9b-bfeb-61b933c55e6b_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Dining Chairs
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d817aca-3f3f-4c9b-bfeb-61b933c55e6b_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Dining Chairs
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d817aca-3f3f-4c9b-bfeb-61b933c55e6b_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Dining Chairs
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d817aca-3f3f-4c9b-bfeb-61b933c55e6b_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Dining Chairs
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d817aca-3f3f-4c9b-bfeb-61b933c55e6b_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Dining Chairs
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d817aca-3f3f-4c9b-bfeb-61b933c55e6b_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Dining Chairs
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d817aca-3f3f-4c9b-bfeb-61b933c55e6b_3840w.png\')'}}></div>
</div>
</div>
</div>
</a>

<a className="col-section group relative flex-1 h-[40vh] lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E5E4DE] cursor-pointer block bg-[#F6F5F2]" href="#">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d09d4dd2-f309-4432-b1db-1464cc548ca0_3840w.png\')'}}></div>
<div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-[#F6F5F2] via-[#F6F5F2]/90 to-transparent"></div>
<div className="relative z-10 p-5 lg:p-6 h-full flex flex-col pt-8 lg:pt-10">
<div className="content-wrapper">
<h3 className="text-xl lg:text-2xl font-thin tracking-tight text-black mb-2">
                  Mattresses
                </h3>
</div>
<div className="mt-auto pb-2 content-wrapper">
<div className="w-full border-t border-black/10 pt-4 flex items-center justify-between group/btn">
<span className="text-[10px] tracking-widest uppercase text-black font-light group-hover/btn:opacity-70 transition-opacity">
                    Explore
                  </span>
<i className="text-black w-4 h-4 opacity-0 -translate-x-4 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:translate-x-0" data-lucide="arrow-right"></i>
</div>
</div>
</div>
<div className="marquee-overlay absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none translate-y-[101%] z-50 bg-[#4a3424]">
<div className="marquee-inner h-full w-fit flex" data-img="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d09d4dd2-f309-4432-b1db-1464cc548ca0_3840w.png" data-text="Mattresses">
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Mattresses
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d09d4dd2-f309-4432-b1db-1464cc548ca0_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Mattresses
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d09d4dd2-f309-4432-b1db-1464cc548ca0_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Mattresses
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d09d4dd2-f309-4432-b1db-1464cc548ca0_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Mattresses
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d09d4dd2-f309-4432-b1db-1464cc548ca0_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Mattresses
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d09d4dd2-f309-4432-b1db-1464cc548ca0_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Mattresses
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d09d4dd2-f309-4432-b1db-1464cc548ca0_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Mattresses
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d09d4dd2-f309-4432-b1db-1464cc548ca0_3840w.png\')'}}></div>
</div>
</div>
</div>
</a>

<a className="col-section group relative flex-1 h-[40vh] lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E5E4DE] cursor-pointer block bg-[#F6F5F2]" href="#">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c36b570-fc34-4947-b864-86e07ab983c8_3840w.png\')'}}></div>
<div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-[#F6F5F2] via-[#F6F5F2]/90 to-transparent"></div>
<div className="relative z-10 p-5 lg:p-6 h-full flex flex-col pt-8 lg:pt-10">
<div className="content-wrapper">
<h3 className="text-xl lg:text-2xl font-thin tracking-tight text-black mb-2">
                  Beds
                </h3>
</div>
<div className="mt-auto pb-2 content-wrapper">
<div className="w-full border-t border-black/10 pt-4 flex items-center justify-between group/btn">
<span className="text-[10px] tracking-widest uppercase text-black font-light group-hover/btn:opacity-70 transition-opacity">
                    Explore
                  </span>
<i className="text-black w-4 h-4 opacity-0 -translate-x-4 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:translate-x-0" data-lucide="arrow-right"></i>
</div>
</div>
</div>
<div className="marquee-overlay absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none translate-y-[101%] z-50 bg-[#4a3424]">
<div className="marquee-inner h-full w-fit flex" data-img="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c36b570-fc34-4947-b864-86e07ab983c8_3840w.png" data-text="Beds">
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Beds
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c36b570-fc34-4947-b864-86e07ab983c8_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Beds
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c36b570-fc34-4947-b864-86e07ab983c8_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Beds
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c36b570-fc34-4947-b864-86e07ab983c8_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Beds
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c36b570-fc34-4947-b864-86e07ab983c8_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Beds
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c36b570-fc34-4947-b864-86e07ab983c8_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Beds
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c36b570-fc34-4947-b864-86e07ab983c8_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Beds
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c36b570-fc34-4947-b864-86e07ab983c8_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Beds
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c36b570-fc34-4947-b864-86e07ab983c8_3840w.png\')'}}></div>
</div>
<div className="marquee-part flex items-center flex-shrink-0 text-[#FDFCF9]">
<span className="whitespace-nowrap uppercase font-thin tracking-tight text-[3vh] lg:text-[4vh] leading-[1] px-[1vw]">
                    Beds
                  </span>
<div className="w-[80px] lg:w-[120px] h-[3vh] lg:h-[4vh] my-[2em] mx-[1vw] rounded-full bg-cover bg-center border border-white/10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c36b570-fc34-4947-b864-86e07ab983c8_3840w.png\')'}}></div>
</div>
</div>
</div>
</a>
</div>

</section>
<section className="bg-[#FDFCF9] border-b border-[#E5E4DE]">
<div className="lg:p-8 lg:pt-12 lg:pb-20 pt-10 pr-6 pb-16 pl-6">
<h2 className="uppercase sm:text-3xl text-2xl tracking-tight font-extralight mb-10">
            Explore by Room
          </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<a className="group cursor-pointer block" href="#">
<div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
<img alt="Kitchen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fbd789f2-668b-466b-b87c-910c49a8a28f_3840w.png"/>
</div>
<div className="flex items-center justify-between">
<h3 className="text-xs tracking-widest uppercase font-normal max-w-[60%] leading-relaxed">
                  Kitchen
                </h3>
<i className="w-5 h-5 text-black opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group cursor-pointer block" href="#">
<div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
<img alt="Bedroom" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60b0bce8-46ef-4f37-adaa-50b6e5f49974_3840w.png"/>
</div>
<div className="flex items-center justify-between">
<h3 className="text-xs tracking-widest uppercase font-normal max-w-[60%] leading-relaxed">
                  Bedroom
                </h3>
<i className="w-5 h-5 text-black opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group cursor-pointer block" href="#">
<div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
<img alt="Living Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e3983cc-dc61-4238-a30c-dd7edc9c3ca8_3840w.png"/>
</div>
<div className="flex items-center justify-between">
<h3 className="text-xs tracking-widest uppercase font-normal max-w-[60%] leading-relaxed">
                  Living Room
                </h3>
<i className="w-5 h-5 text-black opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group cursor-pointer block" href="#">
<div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
<img alt="Laundry Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b876aba-65fb-4488-b3d8-920142301116_3840w.png"/>
</div>
<div className="flex items-center justify-between">
<h3 className="text-xs tracking-widest uppercase font-normal max-w-[60%] leading-relaxed">
                  Laundry Room
                </h3>
<i className="w-5 h-5 text-black opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group cursor-pointer block" href="#">
<div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
<img alt="Dining Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67b50c2f-4439-46c1-91d3-dcf6f5fc5711_3840w.png"/>
</div>
<div className="flex items-center justify-between">
<h3 className="text-xs tracking-widest uppercase font-normal max-w-[60%] leading-relaxed">
                  Dining Room
                </h3>
<i className="w-5 h-5 text-black opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group cursor-pointer block" href="#">
<div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
<img alt="Outdoor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0caecdc-4824-4312-bc72-62c967fce3e3_3840w.png"/>
</div>
<div className="flex items-center justify-between">
<h3 className="text-xs tracking-widest uppercase font-normal max-w-[60%] leading-relaxed">
                  Outdoor
                </h3>
<i className="w-5 h-5 text-black opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" data-lucide="arrow-right"></i>
</div>
</a>
</div>
</div>
</section>
<section className="bg-[#E5E4DE] border-b border-[#E5E4DE] grid grid-cols-1 lg:grid-cols-2 gap-[1px]">
<div className="bg-[#F4F3EF] p-8 lg:p-16 flex flex-col justify-center h-full gsap-fade-up">
<div className="mb-12">
<div className="flex items-start space-x-4">
<div className="w-16 h-20 bg-gray-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3669e6c-89e5-42db-8642-63045cf63b6c_3840w.png"/>
</div>
<div className="text-xs tracking-widest uppercase text-gray-500 pt-1 font-light leading-loose">
<p className="text-black font-normal">Minimalist</p>
<p className="">Living Room</p>
<a className="inline-block mt-2 text-black hover:text-[#E46B4D]" href="#">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<h2 className="text-4xl sm:text-5xl tracking-tight uppercase font-light leading-tight mb-6">
            Furnish
            <br/>
            Seamlessly, Live
            <br/>
            Intentionally
          </h2>
<p className="text-xs text-gray-500 leading-loose max-w-sm mb-10 tracking-wide font-light">
            Optimize your space with our elegant furniture collections, crafted
            for intelligent utility and visual harmony. Maintain a serene
            environment free from distraction.
          </p>
<div className="">
<a className="inline-block bg-[#E46B4D] text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-[#d55f42] transition-colors rounded-sm shadow-sm font-normal" href="#">
              Acquire Now
            </a>
</div>
</div>
<div className="bg-white relative min-h-[500px] overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3a15f36-f4e4-46b5-9861-39e94b45d722_3840w.png"/>
<div className="absolute inset-0 border border-white/20 pointer-events-none mix-blend-overlay m-4"></div>
</div>
</section>
<section className="bg-[#E5E4DE] border-b border-[#E5E4DE] grid grid-cols-1 lg:grid-cols-2 gap-[1px]">
<div className="bg-white relative min-h-[400px] lg:min-h-full p-8 flex flex-col justify-between">
<div className="absolute inset-0">
<img className="w-full h-full object-cover object-top grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a3e517ba-d233-492c-9de4-50906e089f78_3840w.png"/>
<div className="absolute inset-0 bg-[#F4F3EF]/20 mix-blend-multiply"></div>
</div>
<div className="relative z-10 bg-white p-6 max-w-[240px] shadow-xl shadow-black/5 mt-auto ml-auto lg:ml-0 self-end lg:self-start gsap-fade-up border border-gray-100">
<div className="flex justify-between items-start mb-4">
<div className="text-xs uppercase tracking-widest text-gray-400 font-light">
                Signature Chair
              </div>
<span className="flex items-center text-orange-400 text-xs font-light">
<iconify-icon className="mr-1" icon="solar:star-linear"></iconify-icon>
                4.9
              </span>
</div>
<img className="w-full h-32 object-cover mb-4 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3ed7a77f-88f9-4ff7-ad6c-cb9eb5d29154_3840w.png"/>
<div className="flex justify-between items-center text-xs tracking-widest uppercase">
<span className="font-normal">Lounge Chair</span>
<span className="font-light text-gray-500">$280</span>
</div>
</div>
</div>
<div className="bg-[#FDFCF9] p-8 lg:p-16 flex flex-col justify-center gsap-fade-up">
<h2 className="text-3xl sm:text-4xl tracking-tight uppercase font-light mb-4">
            Inquiries?
            <br/>
            We Have Solutions.
          </h2>
<p className="text-xs text-gray-500 mb-10 tracking-wide max-w-md font-light leading-relaxed">
            Discover fast answers to frequent questions regarding our furniture,
            delivery, and beyond. Require further assistance? Contact our team.
          </p>
<div className="space-y-0 border-t border-[#E5E4DE]" id="faq-container">
<div className="border-b border-[#E5E4DE]">
<button className="w-full py-5 flex items-center justify-between text-left focus:outline-none faq-toggle">
<span className="text-xs tracking-wide flex items-center font-normal">
<span className="text-gray-400 mr-4 font-light text-xs">01.</span>
                  What materials are used in your furniture?
                </span>
<iconify-icon className="text-gray-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="text-xs text-gray-500 pb-5 leading-loose pr-8 font-light">
                    We use premium, eco-conscious woods, fabrics, and metals
                    sourced globally to guarantee both resilience and a minimal
                    ecological footprint. Specific details are provided on every
                    product page.
                  </p>
</div>
</div>
</div>
<div className="border-b border-[#E5E4DE]">
<button className="w-full py-5 flex items-center justify-between text-left focus:outline-none faq-toggle">
<span className="text-xs tracking-wide flex items-center font-normal">
<span className="text-gray-400 mr-4 font-light text-xs">02.</span>
                  Is custom upholstery available?
                </span>
<iconify-icon className="text-gray-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="text-xs text-gray-500 pb-5 leading-loose pr-8 font-light">
                    Yes, we offer custom fabric and leather upholstery options
                    for most seating. Reach out to our client services for
                    swatches and tailored requirements.
                  </p>
</div>
</div>
</div>
<div className="border-b border-[#E5E4DE]">
<button aria-expanded="true" className="w-full py-5 flex items-center justify-between text-left focus:outline-none faq-toggle">
<span className="text-xs tracking-wide flex items-center font-normal">
<span className="text-gray-400 mr-4 font-light text-xs">03.</span>
                  Which transactional methods are supported?
                </span>
<iconify-icon className="text-gray-400 transition-transform duration-300 transform rotate-180" icon="solar:alt-arrow-up-linear"></iconify-icon>
</button>
<div className="accordion-content is-open">
<div className="accordion-inner">
<p className="text-xs text-gray-500 pb-5 leading-loose pr-8 font-light">
                    We process a diverse array of transactional options to
                    ensure your checkout is seamless and protected. We accept
                    all major credit cards, alongside digital wallets.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="bg-[#3A2618] text-[#FDFCF9] mt-auto relative overflow-hidden font-light">
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#4a3424] relative z-10 border-b border-[#4a3424]">
<div className="py-12 px-6 flex flex-col items-center text-center group cursor-pointer hover:bg-[#432d1e] transition-colors">
<iconify-icon className="text-[#E46B4D] mb-4 group-hover:scale-110 transition-transform" icon="solar:star-fall-linear" width="32"></iconify-icon>
<h4 className="text-xs tracking-widest uppercase font-normal mb-2 leading-relaxed">
              Superior
              <br/>
              Component Choice
            </h4>
</div>
<div className="py-12 px-6 flex flex-col items-center text-center group cursor-pointer hover:bg-[#432d1e] transition-colors">
<iconify-icon className="text-[#E46B4D] mb-4 group-hover:scale-110 transition-transform" icon="solar:shield-check-linear" width="32"></iconify-icon>
<h4 className="text-xs tracking-widest uppercase font-normal mb-2 leading-relaxed">
              Strict
              <br/>
              Standard Assurance
            </h4>
</div>
<div className="py-12 px-6 flex flex-col items-center text-center group cursor-pointer hover:bg-[#432d1e] transition-colors">
<iconify-icon className="text-[#E46B4D] mb-4 group-hover:scale-110 transition-transform" icon="solar:leaf-linear" width="32"></iconify-icon>
<h4 className="text-xs tracking-widest uppercase font-normal mb-2 leading-relaxed">
              Conscious
              <br/>
              Methods &amp; Ethics
            </h4>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 z-10 pt-16 pr-6 pb-16 pl-6 relative gap-x-12 gap-y-12">
<div className="flex flex-col">
<a className="text-xl font-normal tracking-tighter uppercase mb-6 text-white" href="#">
              Obsidian
            </a>
<p className="text-xs text-white/50 leading-relaxed max-w-xs tracking-wide">
              Curating modern spaces with intentional, functional, and
              aesthetically timeless furniture designs.
            </p>
</div>
<div className="flex flex-col">
<h5 className="text-xs tracking-widest uppercase font-normal mb-6 text-white">
              Shop
            </h5>
<div className="flex flex-col space-y-4 text-xs text-white/50 tracking-wide">
<a className="hover:text-white transition-colors" href="#">
                Furniture
              </a>
<a className="hover:text-white transition-colors" href="#">
                Mattresses
              </a>
<a className="hover:text-white transition-colors" href="#">
                Appliances
              </a>
<a className="hover:text-white transition-colors" href="#">Storage</a>
<a className="hover:text-white transition-colors" href="#">Decor</a>
</div>
</div>
<div className="flex flex-col">
<h5 className="text-xs tracking-widest uppercase font-normal mb-6 text-white">
              Support
            </h5>
<div className="flex flex-col space-y-4 text-xs text-white/50 tracking-wide">
<a className="hover:text-white transition-colors" href="#">FAQ</a>
<a className="hover:text-white transition-colors" href="#">
                Shipping &amp; Returns
              </a>
<a className="hover:text-white transition-colors" href="#">
                Care Guide
              </a>
<a className="hover:text-white transition-colors" href="#">
                Contact Us
              </a>
</div>
</div>
<div className="flex flex-col">
<h5 className="text-xs tracking-widest uppercase font-normal mb-6 text-white">
              Connect
            </h5>
<div className="flex flex-col space-y-4 text-xs text-white/50 tracking-wide">
<a className="hover:text-white transition-colors" href="#">
                Instagram
              </a>
<a className="hover:text-white transition-colors" href="#">
                Pinterest
              </a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">
                Newsletter
              </a>
</div>
</div>
</div>
<div className="border-t border-[#4a3424] py-8 px-6 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest text-white/50 uppercase relative z-10">
<p>© 2025 OBSIDIAN FURNITURE.</p>
<div className="flex space-x-8 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">
              Conditions
            </a>
<a className="hover:text-white transition-colors" href="#">
              Data Policy
            </a>
</div>
</div>
</footer>
</main>


    </>
  );
}
