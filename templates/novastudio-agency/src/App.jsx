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
      const rail = document.getElementById('testimonial-rail');
      const prevButton = document.getElementById('testimonial-prev');
      const nextButton = document.getElementById('testimonial-next');
      
      if (rail && prevButton && nextButton) {
        const getScrollDistance = () => {
          const firstCard = rail.querySelector('article');
          if (firstCard) {
            // Card width + tailwind gap-6 (1.5rem = 24px)
            return firstCard.offsetWidth + 24;
          }
          return window.innerWidth < 768 ? window.innerWidth * 0.85 : 540;
        };
        
        prevButton.addEventListener('click', function(e) {
          e.preventDefault();
          rail.scrollBy({ left: -getScrollDistance(), behavior: 'smooth' });
        });
        
        nextButton.addEventListener('click', function(e) {
          e.preventDefault();
          rail.scrollBy({ left: getScrollDistance(), behavior: 'smooth' });
        });
        
        function updateButtonStates() {
          const scrollLeft = Math.ceil(rail.scrollLeft);
          const maxScroll = Math.floor(rail.scrollWidth - rail.clientWidth);
          
          if (scrollLeft <= 10) {
            prevButton.style.opacity = '0.5';
            prevButton.style.pointerEvents = 'none';
          } else {
            prevButton.style.opacity = '1';
            prevButton.style.pointerEvents = 'auto';
          }
          
          if (scrollLeft >= maxScroll - 10) {
            nextButton.style.opacity = '0.5';
            nextButton.style.pointerEvents = 'none';
          } else {
            nextButton.style.opacity = '1';
            nextButton.style.pointerEvents = 'auto';
          }
        }
        
        updateButtonStates();
        rail.addEventListener('scroll', updateButtonStates, { passive: true });
        window.addEventListener('resize', updateButtonStates, { passive: true });
      }
    })();
    


    (function() {
      const canvas = document.getElementById('aura-schema-canvas');
      if (!canvas) return;
      
      const gl = canvas.getContext('webgl', { alpha: true });
      if (!gl) return;

      const vsSource = `
        attribute vec2 position;
        void main() {
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `;

      const fsSource = `
        precision mediump float;
        uniform vec2 u_res;
        uniform float u_time;
        
        void main() {
          vec2 st = gl_FragCoord.xy / u_res;
          st.x *= u_res.x / u_res.y;
          
          // Grid scale
          vec2 pos = st * 45.0;
          vec2 f_pos = fract(pos);
          
          float dist = distance(f_pos, vec2(0.5));
          
          // Organic movement
          float wave = sin(floor(pos.x) * 0.15 - u_time * 0.8) * cos(floor(pos.y) * 0.15 + u_time * 0.5);
          float radius = 0.03 + 0.08 * wave;
          
          // Point intensity
          float intensity = smoothstep(radius + 0.08, radius, dist);
          
          // Faint connection lines
          float gridX = smoothstep(0.97, 1.0, f_pos.x);
          float gridY = smoothstep(0.97, 1.0, f_pos.y);
          float grid = max(gridX, gridY);
          
          // Color palette mapped to theme
          vec3 pointColor = vec3(0.3, 0.27, 0.9);
          vec3 gridColor = vec3(0.08, 0.08, 0.15);
          
          vec3 finalColor = pointColor * intensity + gridColor * grid * 0.5;
          float alpha = max(intensity, grid * 0.2);
          
          // Fade edges
          float edgeFade = smoothstep(0.0, 0.3, st.y) * smoothstep(1.0, 0.7, st.y);
          
          gl_FragColor = vec4(finalColor, alpha * edgeFade * 0.8);
        }
      `;

      function createShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          console.error('Shader compile error:', gl.getShaderInfoLog(shader));
          gl.deleteShader(shader);
          return null;
        }
        return shader;
      }

      const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
      const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);

      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program link error:', gl.getProgramInfoLog(program));
        return;
      }

      gl.useProgram(program);

      const positions = new Float32Array([
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
        -1.0,  1.0,
         1.0, -1.0,
         1.0,  1.0,
      ]);

      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

      const positionLocation = gl.getAttribLocation(program, 'position');
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      const resLocation = gl.getUniformLocation(program, 'u_res');
      const timeLocation = gl.getUniformLocation(program, 'u_time');

      function resizeCanvasToDisplaySize(canvas) {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
        }
      }

      function render(time) {
        time *= 0.001; 
        resizeCanvasToDisplaySize(canvas);
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

        gl.uniform2f(resLocation, gl.canvas.width, gl.canvas.height);
        gl.uniform1f(timeLocation, time);

        gl.drawArrays(gl.TRIANGLES, 0, 6);

        requestAnimationFrame(render);
      }
      
      requestAnimationFrame(render);
    })();
  


          (function() {
            const c = document.getElementById('noiseCanvas');
            if (c) {
              const gl = c.getContext('webgl', { alpha: true });
              if (gl) {
                const pid = gl.createProgram();
                const shader = (type, src) => {
                  const s = gl.createShader(type);
                  gl.shaderSource(s, src);
                  gl.compileShader(s);
                  gl.attachShader(pid, s);
                };
                shader(gl.VERTEX_SHADER, 'attribute vec2 p;void main(){gl_Position=vec4(p,0,1);}');
                shader(gl.FRAGMENT_SHADER, 'precision lowp float;uniform float t;float rand(vec2 n){return fract(sin(dot(n,vec2(12.9898,4.1414)))*43758.5453);}void main(){vec2 uv=gl_FragCoord.xy;float n=rand(uv+vec2(t,-t));gl_FragColor=vec4(vec3(n),1.0);}');
                gl.linkProgram(pid); gl.useProgram(pid);
                gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
                const p = gl.getAttribLocation(pid, 'p');
                gl.enableVertexAttribArray(p); gl.vertexAttribPointer(p, 2, gl.FLOAT, false, 0, 0);
                const tLoc = gl.getUniformLocation(pid, 't');
                const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; gl.viewport(0,0,c.width,c.height); };
                window.addEventListener('resize', resize); resize();
                let time = 0;
                const draw = () => { time += 0.05; gl.uniform1f(tLoc, time); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); requestAnimationFrame(draw); };
                draw();
              }
            }

            setTimeout(() => {
              document.querySelectorAll('.typewriter-text').forEach(el => {
                const text = el.getAttribute('data-text');
                if(!text) return;
                el.innerHTML = '';
                let i = 0;
                const type = () => {
                  if (i < text.length) { el.innerHTML += text.charAt(i); i++; setTimeout(type, 35); }
                };
                type();
              });

              document.querySelectorAll('.draggable-card').forEach(wrapper => {
                let isDragging = false, startX, startY, currentX = 0, currentY = 0;
                const originalZ = window.getComputedStyle(wrapper).zIndex;
                const start = (e) => {
                  if (e.target.closest('button')) return;
                  isDragging = true; wrapper.style.transition = 'none'; wrapper.style.zIndex = '50';
                  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                  startX = clientX - currentX; startY = clientY - currentY;
                  wrapper.classList.replace('cursor-grab', 'cursor-grabbing');
                };
                const move = (e) => {
                  if (!isDragging) return;
                  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                  currentX = clientX - startX; currentY = clientY - startY;
                  wrapper.style.transform = `translate(${currentX}px, ${currentY}px)`;
                };
                const end = () => {
                  if (!isDragging) return;
                  isDragging = false; wrapper.style.zIndex = originalZ;
                  wrapper.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                  currentX = 0; currentY = 0; wrapper.style.transform = `translate(0px, 0px)`;
                  wrapper.classList.replace('cursor-grabbing', 'cursor-grab');
                };
                wrapper.addEventListener('mousedown', start);
                window.addEventListener('mousemove', move);
                window.addEventListener('mouseup', end);
                wrapper.addEventListener('touchstart', start, {passive: true});
                window.addEventListener('touchmove', (e) => { if(isDragging) e.preventDefault(); move(e); }, {passive: false});
                window.addEventListener('touchend', end);
              });
            }, 800);
          })();
        


      // Reduced motion check
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Mobile Menu Toggle
      const mobileMenuButton = document.getElementById('mobileMenuButton');
      mobileMenuButton.addEventListener('click', () => {
        // Basic implementation for structural completeness
        const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        mobileMenuButton.setAttribute('aria-expanded', String(!expanded));
      });

      // Scroll Reveal Animation Observer
      if (!reduceMotion) {
        const revealObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              revealObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        document.querySelectorAll('.scroll-reveal').forEach(el => {
          revealObserver.observe(el);
        });
      } else {
        document.querySelectorAll('.scroll-reveal').forEach(el => {
          el.classList.add('revealed');
        });
      }

      // Animated Counters
      const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const endValue = parseInt(target.getAttribute('data-target'));
            let startValue = 0;
            const duration = 2000;
            const startTime = performance.now();

            const updateCounter = (currentTime) => {
              const elapsedTime = currentTime - startTime;
              if (elapsedTime < duration) {
                // Easing function (easeOutExpo)
                const progress = elapsedTime / duration;
                const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                target.innerText = Math.floor(easedProgress * endValue);
                requestAnimationFrame(updateCounter);
              } else {
                target.innerText = endValue;
              }
            };
            requestAnimationFrame(updateCounter);
            observer.unobserve(target);
          }
        });
      }, { threshold: 0.5 });

      document.querySelectorAll('.counter').forEach(counter => {
        counterObserver.observe(counter);
      });

      // Interactive Accordion
      const accordionTriggers = document.querySelectorAll('.accordion-trigger');
      accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
          const content = trigger.nextElementSibling;
          const icon = trigger.querySelector('.trigger-icon');
          const isOpen = content.classList.contains('open');

          // Close all others
          document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
          document.querySelectorAll('.trigger-icon').forEach(i => {
            i.setAttribute('icon', 'solar:add-circle-linear');
            i.style.transform = 'rotate(0deg)';
          });

          // Toggle current
          if (!isOpen) {
            content.classList.add('open');
            icon.setAttribute('icon', 'solar:minus-circle-linear');
            icon.style.transform = 'rotate(180deg)';
          }
        });
      });

      // Testimonial Carousel
      const testimonialTrack = document.getElementById('testimonialTrack');
      const testimonialPrev = document.getElementById('testimonialPrev');
      const testimonialNext = document.getElementById('testimonialNext');

      if (testimonialPrev && testimonialNext) {
        testimonialPrev.addEventListener('click', () => {
          testimonialTrack.scrollBy({ left: -window.innerWidth * 0.8, behavior: reduceMotion ? 'auto' : 'smooth' });
        });

        testimonialNext.addEventListener('click', () => {
          testimonialTrack.scrollBy({ left: window.innerWidth * 0.8, behavior: reduceMotion ? 'auto' : 'smooth' });
        });
      }

      // Header Blur on Scroll
      const header = document.getElementById('header');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
          header.classList.add('shadow-sm');
        } else {
          header.classList.remove('shadow-sm');
        }
      });

      // Video & Cookie logic strictly maintained
      const cookieBanner = document.getElementById('cookieBanner');
      const cookieClose = document.getElementById('cookieClose');
      const acceptCookies = document.getElementById('acceptCookies');
      const rejectCookies = document.getElementById('rejectCookies');

      function hideCookieBanner() {
        cookieBanner.style.opacity = '0';
        cookieBanner.style.transform = 'translateY(1rem)';
        setTimeout(() => cookieBanner.classList.add('hidden'), 500);
      }

      if(cookieClose) cookieClose.addEventListener('click', hideCookieBanner);
      if(acceptCookies) acceptCookies.addEventListener('click', hideCookieBanner);
      if(rejectCookies) rejectCookies.addEventListener('click', hideCookieBanner);

      const heroVideo = document.getElementById('heroVideo');
      const videoToggle = document.getElementById('videoToggle');
      const videoToggleIcon = document.getElementById('videoToggleIcon');

      if (heroVideo && videoToggle && videoToggleIcon) {
        if (reduceMotion) {
          heroVideo.pause();
          videoToggleIcon.setAttribute('icon', 'solar:play-linear');
          videoToggle.setAttribute('aria-label', 'Play video');
        }

        videoToggle.addEventListener('click', () => {
          if (heroVideo.paused) {
            heroVideo.play();
            videoToggleIcon.setAttribute('icon', 'solar:pause-linear');
            videoToggleIcon.style.transform = 'scale(1)';
            videoToggle.setAttribute('aria-label', 'Pause video');
          } else {
            heroVideo.pause();
            videoToggleIcon.setAttribute('icon', 'solar:play-linear');
            videoToggle.setAttribute('aria-label', 'Play video');
          }
        });
      }

      // --- WebGL Background Animation (Hero) ---
      (function initHeroWebGL() {
        const canvas = document.getElementById('webgl-canvas');
        if (!canvas || typeof THREE === 'undefined' || reduceMotion) return;

        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const geometry = new THREE.PlaneGeometry(2, 2);

        const material = new THREE.ShaderMaterial({
          uniforms: {
            u_time: { value: 0.0 },
            u_resolution: { value: new THREE.Vector2() }
          },
          vertexShader: `
            void main() {
              gl_Position = vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform float u_time;
            uniform vec2 u_resolution;

            vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
            float snoise(vec2 v){
              const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
              vec2 i  = floor(v + dot(v, C.yy) );
              vec2 x0 = v -   i + dot(i, C.xx);
              vec2 i1; i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
              vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1;
              i = mod(i, 289.0);
              vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
              vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
              m = m*m ; m = m*m ;
              vec3 x = 2.0 * fract(p * C.www) - 1.0; vec3 h = abs(x) - 0.5;
              vec3 ox = floor(x + 0.5); vec3 a0 = x - ox;
              m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
              vec3 g; g.x  = a0.x  * x0.x  + h.x  * x0.y;
              g.yz = a0.yz * x12.xz + h.yz * x12.yw;
              return 130.0 * dot(m, g);
            }

            void main() {
              vec2 uv = gl_FragCoord.xy / u_resolution.xy;

              float n = snoise(uv * 2.5 + vec2(u_time * 0.4, u_time * 0.5));
              float n2 = snoise(uv * 1.5 - vec2(u_time * 0.3, u_time * 0.2));

              vec3 colorIndigo = vec3(0.31, 0.27, 0.90);
              vec3 colorCyan = vec3(0.02, 0.71, 0.83);
              vec3 colorDeep = vec3(0.15, 0.1, 0.5);

              float mixVal = smoothstep(-0.6, 0.8, n);
              vec3 finalColor = mix(colorDeep, colorIndigo, mixVal);

              float mixVal2 = smoothstep(-0.4, 0.9, n2);
              finalColor = mix(finalColor, colorCyan, mixVal2 * 0.8);

              float alphaFade = smoothstep(-0.2, 0.6, uv.x);
              gl_FragColor = vec4(finalColor, alphaFade);
            }
          `
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        function resizeCanvas() {
          const section = canvas.closest('section');
          const w = section ? section.clientWidth : window.innerWidth;
          const h = section ? section.clientHeight : window.innerHeight;
          renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
          renderer.setSize(w, h, false);
          material.uniforms.u_resolution.value.set(w, h);
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function animateWebGL(time) {
          material.uniforms.u_time.value = time * 0.002;
          renderer.render(scene, camera);
          requestAnimationFrame(animateWebGL);
        }

        requestAnimationFrame(animateWebGL);
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-[#0a0a0a] focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:text-white" href="#main">
      Skip to main content
    </a>

<div className="w-full bg-[#0a0a0a] text-white overflow-hidden relative">
<div className="mx-auto flex min-h-8 max-w-[90rem] items-center justify-center px-4 text-center text-xs font-medium leading-none tracking-wide">
<span className="mr-2 inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-[#4f46e5]"></span>
        Recognized as Digital Agency of the Year 2025.
        <a className="ml-2 text-[#a5b4fc] transition hover:text-white hover:underline underline-offset-4" href="#">
          View our latest awards
        </a>
</div>
</div>

<header className="sticky top-0 z-50 border-b border-[#eaeaea] bg-white/80 backdrop-blur-xl transition-all duration-300" id="header">
<nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-12">
<a aria-label="Home" className="flex items-center text-base font-semibold tracking-tight text-[#0a0a0a]" href="#">
            NOVASTUDIO
          </a>
<div className="hidden items-center gap-2 lg:flex">
<div className="group relative">
<button className="flex min-h-11 items-center gap-1.5 rounded-full px-4 text-sm font-medium text-[#4a4a4a] transition hover:bg-[#f4f4f5] hover:text-[#0a0a0a]">
                Expertise
                <iconify-icon className="text-base transition-transform duration-300 group-hover:-rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="pointer-events-none absolute left-0 top-full w-[48rem] translate-y-4 rounded-2xl border border-[#eaeaea] bg-white/95 p-6 opacity-0 shadow-2xl shadow-black/5 backdrop-blur-xl transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-2 group-hover:opacity-100">
<div className="grid grid-cols-12 gap-8">
<div className="col-span-5">
<p className="mb-5 text-xs font-medium uppercase tracking-widest text-[#888]">
                      Core Disciplines
                    </p>
<a className="group/link mb-2 block rounded-xl bg-[#f8f9fc] p-4 transition duration-300 hover:bg-[#eef2ff]" href="#">
<span className="flex items-center justify-between text-sm font-medium text-[#0a0a0a]">
                        Digital Platforms
                        <iconify-icon className="translate-x-0 opacity-0 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:opacity-100 group-hover/link:text-[#4f46e5]" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span className="mt-1.5 block text-xs leading-relaxed text-[#666]">
                        Award-winning websites and web applications built for
                        scale.
                      </span>
</a>
<a className="group/link block rounded-xl p-4 transition duration-300 hover:bg-[#f8f9fc]" href="#">
<span className="flex items-center justify-between text-sm font-medium text-[#0a0a0a]">
                        Brand Systems
                        <iconify-icon className="translate-x-0 opacity-0 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:opacity-100" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span className="mt-1.5 block text-xs leading-relaxed text-[#666]">
                        Comprehensive identity design and strategic positioning.
                      </span>
</a>
</div>
<div className="col-span-4">
<p className="mb-5 text-xs font-medium uppercase tracking-widest text-[#888]">
                      Capabilities
                    </p>
<ul className="space-y-4 text-sm font-medium text-[#4a4a4a]">
<li>
<a className="group/item flex items-center justify-between hover:text-[#0a0a0a]" href="#">
                          UI/UX Design
                          <span className="h-px w-0 bg-[#0a0a0a] transition-all duration-300 group-hover/item:w-4"></span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between hover:text-[#0a0a0a]" href="#">
                          Creative Development
                          <span className="h-px w-0 bg-[#0a0a0a] transition-all duration-300 group-hover/item:w-4"></span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between hover:text-[#0a0a0a]" href="#">
                          Motion Graphics
                          <span className="h-px w-0 bg-[#0a0a0a] transition-all duration-300 group-hover/item:w-4"></span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between hover:text-[#4f46e5]" href="#">
                          AI Integration
                          <span className="h-px w-0 bg-[#4f46e5] transition-all duration-300 group-hover/item:w-4"></span>
</a>
</li>
</ul>
</div>
<div className="col-span-3 border-l border-[#eaeaea] pl-6">
<p className="mb-5 text-xs font-medium uppercase tracking-widest text-[#888]">
                      Featured Work
                    </p>
<div className="group/thumb relative overflow-hidden rounded-lg">
<img alt="Featured project" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover/thumb:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f7dbc5c-f27b-4ee7-bb49-ce924886459c_320w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover/thumb:opacity-100"></div>
</div>
<p className="mt-4 text-sm font-medium leading-tight text-[#0a0a0a]">
                      Nexus OS Launch
                    </p>
<p className="mt-1 text-xs text-[#666]">
                      Brand &amp; Digital Platform
                    </p>
</div>
</div>
</div>
</div>
<a className="flex min-h-11 items-center rounded-full px-4 text-sm font-medium text-[#4a4a4a] transition hover:bg-[#f4f4f5] hover:text-[#0a0a0a]" href="#">
              Work
            </a>
<a className="flex min-h-11 items-center rounded-full px-4 text-sm font-medium text-[#4a4a4a] transition hover:bg-[#f4f4f5] hover:text-[#0a0a0a]" href="#">
              Studio
            </a>
<a className="flex min-h-11 items-center rounded-full px-4 text-sm font-medium text-[#4a4a4a] transition hover:bg-[#f4f4f5] hover:text-[#0a0a0a]" href="#">
              Insights
            </a>
</div>
</div>
<div className="hidden items-center gap-4 lg:flex">
<a className="text-sm font-medium text-[#4a4a4a] transition hover:text-[#0a0a0a]" href="#">
            Client Portal
          </a>
<a className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#0a0a0a] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#1a1a1a]" href="#">
<span className="relative z-10">Start a Project</span>
<div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] transition-transform duration-500 ease-out group-hover:translate-x-0"></div>
<span className="relative z-10 ml-2 block transition-transform duration-300 group-hover:translate-x-1">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</a>
</div>
<button aria-expanded="false" aria-label="Open menu" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eaeaea] lg:hidden hover:bg-[#f4f4f5] transition" id="mobileMenuButton">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</nav>
</header>
<main className="" id="main">

<section className="overflow-hidden lg:pt-36 lg:pb-48 bg-[#fcfcfc] pt-24 pb-32 relative">
<style>
    @keyframes kineticReveal {
      0% {
        opacity: 0;
        transform: translateZ(-800px) translateY(80px) rotateX(30deg) scale(0.8);
        filter: blur(12px);
        letter-spacing: -0.1em;
      }
      60% {
        opacity: 1;
        transform: translateZ(50px) translateY(-10px) rotateX(-5deg) scale(1.02);
        filter: blur(0px);
        letter-spacing: -0.04em;
      }
      100% {
        opacity: 1;
        transform: translateZ(0) translateY(0) rotateX(0deg) scale(1);
        filter: blur(0px);
        letter-spacing: -0.05em;
      }
    }
    @keyframes liquidFlow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes chromaticOffset {
      0% { transform: translate(-3px, -2px) scale(1.01); filter: hue-rotate(0deg) blur(2px); }
      100% { transform: translate(3px, 2px) scale(1.01); filter: hue-rotate(45deg) blur(3px); }
    }
    .animate-kinetic {
      animation: kineticReveal 1.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
      opacity: 0;
      transform-style: preserve-3d;
      display: inline-block;
      will-change: transform, opacity, filter;
    }
    .text-liquid {
      background: linear-gradient(
        110deg,
        #050505 0%,
        #4f46e5 25%,
        #7c3aed 50%,
        #2563eb 75%,
        #050505 100%
      );
      background-size: 200% auto;
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      animation: liquidFlow 4s linear infinite;
    }
    .text-aura {
      position: absolute;
      inset: -20px;
      background: linear-gradient(90deg, rgba(79,70,229,0.3), rgba(124,58,237,0.3), rgba(37,99,235,0.3));
      filter: blur(30px);
      z-index: -1;
      opacity: 0;
      animation: auraReveal 2s 1s ease-out forwards, liquidFlow 4s linear infinite;
      border-radius: 50%;
    }
    @keyframes auraReveal {
      to { opacity: 0.8; }
    }
  </style>

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center">
<canvas className="absolute inset-0 w-full h-full opacity-40" height="1924" id="webgl-canvas" width="2984"></canvas>

<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.12)_0%,transparent_60%)] blur-[100px]"></div>

<div className="absolute inset-0 bg-gradient-to-b from-[#fcfcfc]/30 via-[#fcfcfc]/80 to-[#fcfcfc]"></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wMjUpIi8+PC9zdmc+')] opacity-50" style={{WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)', maskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)'}}></div>
</div>
<div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

<div className="scroll-reveal revealed" style={{transitionDelay: '100ms'}}>
<div className="mb-8 inline-flex items-center rounded-full border border-[#e5e5e5] bg-white/60 px-4 py-1.5 text-xs font-medium text-[#171717] shadow-sm backdrop-blur-md transition-colors hover:border-[#d4d4d4] hover:bg-white cursor-pointer">
<span className="relative flex h-2 w-2 mr-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4f46e5] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#4f46e5]"></span>
</span>
        Accepting new projects for Q3
        <svg className="ml-2 h-3.5 w-3.5 text-[#666]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>

<div className="max-w-5xl mt-2 mb-2" style={{perspective: '1200px'}}>
<h1 className="text-[clamp(3.5rem,8vw,8.5rem)] font-medium leading-[0.95] tracking-tighter text-[#050505] flex flex-col items-center" style={{transformStyle: 'preserve-3d'}}>
<span className="block animate-kinetic" style={{animationDelay: '200ms'}}>
          Designing the
        </span>
<span className="block animate-kinetic" style={{animationDelay: '400ms'}}>
<span className="relative inline-block">

<span className="text-liquid inline-block pb-1 pr-2 relative z-10">
              next era
            </span>

<span className="absolute inset-0 text-liquid pb-1 pr-2 z-0 mix-blend-multiply opacity-60" style={{animation: 'liquidFlow 4s linear infinite, chromaticOffset 3s ease-in-out infinite alternate'}}>
              next era
            </span>

<span className="text-aura"></span>
</span>
</span>
<span className="block animate-kinetic" style={{animationDelay: '600ms'}}>
          of digital.
        </span>
</h1>
</div>

<div className="mt-8 max-w-2xl scroll-reveal revealed" style={{transitionDelay: '800ms'}}>
<p className="text-base leading-relaxed text-[#4a4a4a] sm:text-lg lg:text-xl">
        We are an independent creative agency partnering with ambitious
        brands to build premium websites, identity systems, and AI-powered
        experiences.
      </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#0a0a0a] px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#1a1a1a] hover:shadow-xl hover:shadow-black/10 hover:-translate-y-0.5" href="#">
          View Our Work
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17 17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</a>
</div>
</div>
</div>
</section>

<section className="border-y scroll-reveal revealed bg-white border-[#eaeaea] pt-10 pb-10">
<style>
          @keyframes marquee-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-marquee-scroll {
            animation: marquee-scroll 30s linear infinite;
          }
          .animate-marquee-scroll:hover {
            animation-play-state: paused;
          }
          .mask-edges {
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
        </style>
<div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
<p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-[#888]">
            Trusted by forward-thinking companies
          </p>
<div className="flex overflow-hidden mask-edges group">
<div className="flex w-max animate-marquee-scroll grayscale transition-all duration-500 group-hover:grayscale-0 opacity-60 group-hover:opacity-100">

<div className="flex items-center justify-around min-w-max gap-16 pr-16 sm:gap-24 sm:pr-24">
<img alt="Client" className="h-5 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/abm.svg"/>
<img alt="Client" className="h-5 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/discord.svg"/>
<img alt="Client" className="h-5 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/docusign.svg"/>
<img alt="Client" className="h-5 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/ideo.svg"/>
<img alt="Client" className="h-5 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/lattice.svg"/>
<img alt="Client" className="h-5 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/the-new-york-times.svg"/>
<img alt="Client" className="h-5 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/upwork.svg"/>
</div>

<div className="flex items-center justify-around min-w-max gap-16 pr-16 sm:gap-24 sm:pr-24">
<img alt="Client" className="h-5 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/abm.svg"/>
<img alt="Client" className="h-5 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/discord.svg"/>
<img alt="Client" className="h-5 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/docusign.svg"/>
<img alt="Client" className="h-5 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/ideo.svg"/>
<img alt="Client" className="h-5 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/lattice.svg"/>
<img alt="Client" className="h-5 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/the-new-york-times.svg"/>
<img alt="Client" className="h-5 w-auto" src="https://dhygzobemt712.cloudfront.net/Web/logos/dark/upwork.svg"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-[#080808] text-white">
<div className="relative mx-auto max-w-[90rem] px-4 py-16 sm:px-6 lg:px-8">

<div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#101010] scroll-reveal shadow-2xl revealed">

<video autoplay="" className="aspect-[16/8.2] opacity-90 w-full object-cover" id="heroVideo" loop="" muted="" playsinline="" poster="https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68c0557aa0ca3aef28f7396d_home-hero-vid-poster.webp">
<source src="https://dhygzobemt712.cloudfront.net/Web/home/09-2025/home-hero.mp4" type="video/mp4"/>
</video>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>

<div className="absolute right-4 top-4 flex flex-col gap-2">
<button aria-label="Pause video" className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black" id="videoToggle">
<iconify-icon className="text-xl transition-transform group-hover:scale-110" icon="solar:pause-linear" id="videoToggleIcon" strokeWidth="1.5"></iconify-icon>
</button>
<button aria-label="Open video" className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black">
<iconify-icon className="text-xl transition-transform group-hover:scale-110" icon="solar:full-screen-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="absolute bottom-4 right-4 rounded bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-white hover:text-black cursor-pointer">
              Reel 2025 · NovaStudio
            </div>

<div className="absolute bottom-5 left-5 max-w-sm rounded-lg border border-white/15 bg-[#101010]/95 backdrop-blur-xl p-5 text-white shadow-2xl transition-all duration-500" id="cookieBanner">
<div className="mb-3 flex items-start justify-between gap-4">
<h2 className="text-sm font-medium tracking-wide">
                  Experience Settings
                </h2>
<button aria-label="Close cookie notice" className="-mr-1 -mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-transparent transition hover:bg-white/10 hover:border-white/20" id="cookieClose">
<iconify-icon className="text-lg" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<p className="text-xs leading-5 text-[#a0a0a0]">
                We use tailored cookies to ensure you get the best creative
                experience on our site.
              </p>
<div className="mt-4 grid grid-cols-2 gap-2">
<button className="rounded border border-white/20 px-4 py-2.5 text-xs font-medium transition hover:bg-white/10" id="rejectCookies">
                  Essential Only
                </button>
<button className="rounded bg-white px-4 py-2.5 text-xs font-medium text-black transition hover:bg-[#e0e0e0]" id="acceptCookies">
                  Accept All
                </button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#fcfcfc]">
<div className="mx-auto max-w-[90rem] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 scroll-reveal">
<h2 className="text-[clamp(2.4rem,5vw,4.5rem)] leading-[1] font-medium tracking-tighter max-w-3xl">
              Capabilities designed for
              <br/>
              modern brand growth.
            </h2>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#4f46e5] transition-all hover:gap-3" href="#">
              View all services
              <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid gap-6 md:grid-cols-3">

<article className="group relative overflow-hidden rounded-2xl bg-white border border-[#eaeaea] p-2 transition-all duration-500 hover:shadow-2xl hover:shadow-[#4f46e5]/5 hover:-translate-y-1 scroll-reveal" style={{transitionDelay: '100ms'}}>
<div className="relative overflow-hidden rounded-xl bg-[#f4f4f5]">
<img alt="Brand Identity" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/e44ec1fe-2eb5-4aee-917b-f31f10e9f350/1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="absolute bottom-4 left-4 flex h-10 w-10 translate-y-4 items-center justify-center rounded-full bg-white text-[#0a0a0a] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="p-6">
<div className="mb-3 flex items-center gap-2">
<iconify-icon className="text-xl text-[#4f46e5]" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight">
                    Brand Identity
                  </h3>
</div>
<p className="text-sm leading-relaxed text-[#666]">
                  Strategic positioning, visual identity, and comprehensive
                  design systems that make your brand unmistakable.
                </p>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl bg-white border border-[#eaeaea] p-2 transition-all duration-500 hover:shadow-2xl hover:shadow-[#4f46e5]/5 hover:-translate-y-1 scroll-reveal" style={{transitionDelay: '200ms'}}>
<div className="relative overflow-hidden rounded-xl bg-[#f4f4f5]">
<img alt="Digital Platforms" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/e414d578-afd1-4518-9e6f-71869b5d327a/1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="absolute bottom-4 left-4 flex h-10 w-10 translate-y-4 items-center justify-center rounded-full bg-white text-[#0a0a0a] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="p-6">
<div className="mb-3 flex items-center gap-2">
<iconify-icon className="text-xl text-[#4f46e5]" icon="solar:devices-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight">
                    Digital Platforms
                  </h3>
</div>
<p className="text-sm leading-relaxed text-[#666]">
                  Immersive websites and applications engineered for
                  performance, scale, and flawless user experiences.
                </p>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl bg-white border border-[#eaeaea] p-2 transition-all duration-500 hover:shadow-2xl hover:shadow-[#4f46e5]/5 hover:-translate-y-1 scroll-reveal" style={{transitionDelay: '300ms'}}>
<div className="relative overflow-hidden rounded-xl bg-[#f4f4f5]">
<img alt="AI Experiences" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8f2e308-3a78-44ba-ad9b-3f23f5863b94_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="absolute bottom-4 left-4 flex h-10 w-10 translate-y-4 items-center justify-center rounded-full bg-white text-[#0a0a0a] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="p-6">
<div className="mb-3 flex items-center gap-2">
<iconify-icon className="text-xl text-[#4f46e5]" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight">
                    AI Integrations
                  </h3>
</div>
<p className="text-sm leading-relaxed text-[#666]">
                  Forward-thinking digital products enhanced by artificial
                  intelligence to drive personalization and engagement.
                </p>
</div>
</article>
</div>
</div>
</section>

<section className="border-y border-[#eaeaea] bg-white relative overflow-hidden">

<div className="absolute left-1/2 top-0 h-[1px] w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#4f46e5] to-transparent opacity-50"></div>
<div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 gap-8 md:grid-cols-4 divide-x divide-[#eaeaea]/50">
<div className="text-center scroll-reveal">
<p className="text-[clamp(2.5rem,4vw,3.5rem)] font-medium tracking-tighter text-[#0a0a0a]">
<span className="counter" data-target="150">0</span>
                +
              </p>
<p className="mt-2 text-xs font-medium uppercase tracking-widest text-[#888]">
                Industry Awards
              </p>
</div>
<div className="text-center scroll-reveal" style={{transitionDelay: '100ms'}}>
<p className="text-[clamp(2.5rem,4vw,3.5rem)] font-medium tracking-tighter text-[#0a0a0a]">
                $
                <span className="counter" data-target="2">0</span>
                B+
              </p>
<p className="mt-2 text-xs font-medium uppercase tracking-widest text-[#888]">
                Client Valuation Generated
              </p>
</div>
<div className="text-center scroll-reveal" style={{transitionDelay: '200ms'}}>
<p className="text-[clamp(2.5rem,4vw,3.5rem)] font-medium tracking-tighter text-[#0a0a0a]">
<span className="counter" data-target="40">0</span>
</p>
<p className="mt-2 text-xs font-medium uppercase tracking-widest text-[#888]">
                Global Team Members
              </p>
</div>
<div className="text-center scroll-reveal" style={{transitionDelay: '300ms'}}>
<p className="text-[clamp(2.5rem,4vw,3.5rem)] font-medium tracking-tighter text-[#0a0a0a]">
<span className="counter" data-target="99">0</span>
                %
              </p>
<p className="mt-2 text-xs font-medium uppercase tracking-widest text-[#888]">
                Project Success Rate
              </p>
</div>
</div>
</div>
</section>

<section className="z-10 sm:p-12 overflow-hidden bg-white w-full max-w-[90rem] border-[#eaeaea] border rounded-[2rem] mt-24 mr-auto mb-24 ml-auto pt-6 pr-6 pb-6 pl-6 relative shadow-sm">

<div className="flex flex-col md:flex-row gap-6 sm:px-0 pr-1 pl-1 items-start md:items-center">
<h2 className="text-[clamp(2.2rem,4vw,4rem)] leading-tight text-[#0a0a0a] font-normal tracking-tight max-w-4xl">
        Partnering with visionary founders and established market leaders.
      </h2>
</div>
<div className="h-px bg-[#eaeaea] mt-8"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 sm:mt-8 mt-6 items-center">

<div className="lg:col-span-12 relative">
<div className="relative overflow-hidden h-[500px] md:h-[450px] rounded-3xl mt-6">

<div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
<div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

<div className="flex gap-6 overflow-x-auto scroll-smooth pr-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-center snap-x snap-mandatory pb-4" id="testimonial-rail" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<article className="min-w-[85vw] md:min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-white border border-[#eaeaea] rounded-[24px] p-8 md:p-12 text-[#0a0a0a] transition-shadow hover:shadow-xl hover:shadow-black/5 snap-center -rotate-2 shadow-lg relative mt-4">
<svg className="w-10 h-10 text-[#4f46e5]/20 mb-6 absolute top-8 right-8" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3"></path>
</svg>
<p className="text-xl md:text-2xl text-[#0a0a0a] font-normal tracking-tight leading-tight mb-10">
                "NovaStudio completely redefined our digital presence. They didn't just build a website; they architected a scalable engine that doubled our conversion rate in three months."
              </p>
<div className="mt-8 flex items-center gap-4 pt-6 border-t border-[#eaeaea]">
<img alt="Client" className="w-12 h-12 rounded-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0413dc82-d7c0-447d-aaa9-87ce398bca83_320w.webp"/>
<div>
<div className="text-sm font-normal tracking-tight text-[#0a0a0a]">Sarah Jenkins</div>
<div className="text-xs text-[#666] tracking-tight">CMO, FinTech Global</div>
</div>
</div>
</article>

<article className="min-w-[85vw] md:min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-white border border-[#eaeaea] rounded-[24px] p-8 md:p-12 text-[#0a0a0a] transition-shadow hover:shadow-xl hover:shadow-black/5 snap-center rotate-1 shadow-lg relative mt-4">
<svg className="w-10 h-10 text-[#4f46e5]/20 mb-6 absolute top-8 right-8" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3"></path>
</svg>
<p className="text-xl md:text-2xl text-[#0a0a0a] font-normal tracking-tight leading-tight mb-10">
                "The level of craftsmanship and strategic thinking they brought to our rebrand was unmatched. NovaStudio operates at the very edge of what's possible in digital design."
              </p>
<div className="mt-8 flex items-center gap-4 pt-6 border-t border-[#eaeaea]">
<img alt="Client" className="w-12 h-12 rounded-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b202409f-816e-4451-8ac9-bd0b04439d1b_320w.webp"/>
<div>
<div className="text-sm font-normal tracking-tight text-[#0a0a0a]">Marcus Thorne</div>
<div className="text-xs text-[#666] tracking-tight">Founder, Nexus AI</div>
</div>
</div>
</article>

<article className="min-w-[85vw] md:min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-white border border-[#eaeaea] rounded-[24px] p-8 md:p-12 text-[#0a0a0a] transition-shadow hover:shadow-xl hover:shadow-black/5 snap-center -rotate-1 shadow-lg relative mt-4">
<svg className="w-10 h-10 text-[#4f46e5]/20 mb-6 absolute top-8 right-8" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3"></path>
</svg>
<p className="text-xl md:text-2xl text-[#0a0a0a] font-normal tracking-tight leading-tight mb-10">
                "Working with their team feels less like hiring an agency and more like finding a co-founder for your digital product. Fast, brilliant, and impeccably polished."
              </p>
<div className="mt-8 flex items-center gap-4 pt-6 border-t border-[#eaeaea]">
<img alt="Client" className="w-12 h-12 rounded-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d58e13a-35ac-4c87-af00-53519df6a64b_320w.webp"/>
<div>
<div className="text-sm font-normal tracking-tight text-[#0a0a0a]">Elena Rostova</div>
<div className="text-xs text-[#666] tracking-tight">VP Product, Lumin</div>
</div>
</div>
</article>

<article className="min-w-[85vw] md:min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-white border border-[#eaeaea] rounded-[24px] p-8 md:p-12 text-[#0a0a0a] transition-shadow hover:shadow-xl hover:shadow-black/5 snap-center rotate-2 shadow-lg relative mt-4">
<svg className="w-10 h-10 text-[#4f46e5]/20 mb-6 absolute top-8 right-8" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3"></path>
</svg>
<p className="text-xl md:text-2xl text-[#0a0a0a] font-normal tracking-tight leading-tight mb-10">
                "Our engagement metrics went through the roof after the redesign. The team understood our vision instantly and elevated it beyond our expectations."
              </p>
<div className="mt-8 flex items-center gap-4 pt-6 border-t border-[#eaeaea]">
<img alt="Client" className="w-12 h-12 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320&amp;h=320&amp;fit=crop&amp;crop=faces&amp;q=80"/>
<div>
<div className="text-sm font-normal tracking-tight text-[#0a0a0a]">David Chen</div>
<div className="text-xs text-[#666] tracking-tight">CEO, Orbit Media</div>
</div>
</div>
</article>

<article className="min-w-[85vw] md:min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-white border border-[#eaeaea] rounded-[24px] p-8 md:p-12 text-[#0a0a0a] transition-shadow hover:shadow-xl hover:shadow-black/5 snap-center -rotate-1 shadow-lg relative mt-4">
<svg className="w-10 h-10 text-[#4f46e5]/20 mb-6 absolute top-8 right-8" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3"></path>
</svg>
<p className="text-xl md:text-2xl text-[#0a0a0a] font-normal tracking-tight leading-tight mb-10">
                "A rare combination of breathtaking aesthetics and rock-solid engineering. They delivered a platform that is as beautiful as it is performant."
              </p>
<div className="mt-8 flex items-center gap-4 pt-6 border-t border-[#eaeaea]">
<img alt="Client" className="w-12 h-12 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=320&amp;h=320&amp;fit=crop&amp;crop=faces&amp;q=80"/>
<div>
<div className="text-sm font-normal tracking-tight text-[#0a0a0a]">Maria Gonzalez</div>
<div className="text-xs text-[#666] tracking-tight">Head of Design, Stellar</div>
</div>
</div>
</article>

<article className="min-w-[85vw] md:min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-white border border-[#eaeaea] rounded-[24px] p-8 md:p-12 text-[#0a0a0a] transition-shadow hover:shadow-xl hover:shadow-black/5 snap-center rotate-1 shadow-lg relative mt-4">
<svg className="w-10 h-10 text-[#4f46e5]/20 mb-6 absolute top-8 right-8" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3"></path>
</svg>
<p className="text-xl md:text-2xl text-[#0a0a0a] font-normal tracking-tight leading-tight mb-10">
                "The attention to detail is staggering. Every interaction, every animation feels purposeful. It's the kind of work that sets new industry standards."
              </p>
<div className="mt-8 flex items-center gap-4 pt-6 border-t border-[#eaeaea]">
<img alt="Client" className="w-12 h-12 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=320&amp;h=320&amp;fit=crop&amp;crop=faces&amp;q=80"/>
<div>
<div className="text-sm font-normal tracking-tight text-[#0a0a0a]">James Wilson</div>
<div className="text-xs text-[#666] tracking-tight">CTO, Vertex Solutions</div>
</div>
</div>
</article>
</div>

<div className="absolute bottom-2 right-6 z-20 flex items-center gap-3">
<button aria-label="Previous testimonial" className="flex h-12 w-12 items-center justify-center rounded-full border border-[#eaeaea] bg-white transition-all hover:border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white" id="testimonial-prev" style={{pointerEvents: 'none'}}>
<svg className="lucide lucide-arrow-left w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button aria-label="Next testimonial" className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0a0a0a] bg-[#0a0a0a] text-white transition-all hover:bg-[#1a1a1a]" id="testimonial-next" style={{pointerEvents: 'auto'}}>
<svg className="lucide lucide-arrow-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>

</section>

<section className="bg-[#fcfcfc] relative overflow-hidden border-y border-[#eaeaea]">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNCkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)] pointer-events-none"></div>
<div className="mx-auto max-w-[90rem] px-4 py-24 sm:px-6 lg:px-8 lg:py-32 relative z-10">
<div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">

<div className="lg:col-span-5 lg:sticky lg:top-32 self-start scroll-reveal">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#eaeaea] mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4f46e5] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#4f46e5]"></span>
</span>
<span className="text-xs font-medium uppercase tracking-widest text-[#666]">Architecture of Success</span>
</div>
<h2 className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-medium leading-[0.95] tracking-tighter text-[#0a0a0a] mb-6">
          Our integrated<br/>approach to building<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] to-[#2563eb]">category leaders.</span>
</h2>
<p className="text-base text-[#666] leading-relaxed max-w-sm">
          We dismantle the conventional to engineer digital ecosystems that demand attention and drive exponential growth.
        </p>
</div>

<div className="lg:col-span-7 mt-8 lg:mt-0">
<div className="border-t-2 border-[#0a0a0a]">

<div className="accordion-item group border-b border-[#eaeaea] scroll-reveal">
<button className="accordion-trigger flex w-full items-center justify-between py-10 md:py-14 text-left transition-colors relative overflow-hidden">

<span className="absolute left-[-10px] top-1/2 -translate-y-1/2 text-[8rem] md:text-[12rem] font-semibold text-[#f4f4f5] group-hover:text-[#eef2ff] transition-all duration-700 pointer-events-none select-none z-0 group-hover:translate-x-6 opacity-50">01</span>
<div className="flex items-center gap-8 relative z-10 pl-2 md:pl-8">
<span className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0a0a0a] group-hover:text-[#4f46e5] transition-colors duration-300">
                  Strategy &amp; Positioning
                </span>
</div>
<iconify-icon className="text-4xl text-[#a0a0a0] transition-all duration-500 trigger-icon relative z-10 group-hover:text-[#4f46e5] group-hover:rotate-90 shrink-0" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner pb-12 pt-2 md:pl-8 relative z-10">

<div className="bg-gradient-to-br from-[#0a0a0a] to-[#141414] rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl border border-white/5">
<div className="absolute -top-32 -right-32 w-80 h-80 bg-[#4f46e5] rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
<div className="grid md:grid-cols-5 gap-10 relative z-10">
<div className="md:col-span-3">
<p className="text-base md:text-lg leading-relaxed text-[#a0a0a0]">
<span className="text-white font-medium">We dig deep</span> into your business model, audience psychology, and market landscape to find the unique angle that makes your brand impossible to ignore.
                      </p>
</div>
<div className="md:col-span-2">
<ul className="flex flex-col gap-3">
<li className="flex items-center gap-3 text-sm font-medium text-white/90 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3 w-full backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-0.5">
<svg className="lucide lucide-check-circle text-[#4f46e5] shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
                          Market Research
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-white/90 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3 w-full backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-0.5">
<svg className="lucide lucide-check-circle text-[#4f46e5] shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
                          Brand Architecture
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-white/90 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3 w-full backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-0.5">
<svg className="lucide lucide-check-circle text-[#4f46e5] shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
                          Content Strategy
                        </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="accordion-item group border-b border-[#eaeaea] scroll-reveal">
<button className="accordion-trigger flex w-full items-center justify-between py-10 md:py-14 text-left transition-colors relative overflow-hidden">
<span className="absolute left-[-10px] top-1/2 -translate-y-1/2 text-[8rem] md:text-[12rem] font-semibold text-[#f4f4f5] group-hover:text-[#f3e8ff] transition-all duration-700 pointer-events-none select-none z-0 group-hover:translate-x-6 opacity-50">02</span>
<div className="flex items-center gap-8 relative z-10 pl-2 md:pl-8">
<span className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0a0a0a] group-hover:text-[#7c3aed] transition-colors duration-300">
                  Creative &amp; Design
                </span>
</div>
<iconify-icon className="text-4xl text-[#a0a0a0] transition-all duration-500 trigger-icon relative z-10 group-hover:text-[#7c3aed] group-hover:rotate-90 shrink-0" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner pb-12 pt-2 md:pl-8 relative z-10">
<div className="bg-gradient-to-br from-[#0a0a0a] to-[#141414] rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl border border-white/5">
<div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#7c3aed] rounded-full blur-[100px] opacity-25 pointer-events-none"></div>
<div className="grid md:grid-cols-5 gap-10 relative z-10">
<div className="md:col-span-3">
<p className="text-base md:text-lg leading-relaxed text-[#a0a0a0]">
<span className="text-white font-medium">Aesthetics engineered for impact.</span> Our design systems are fluid, accessible, and obsessively detailed to ensure premium brand perception at every touchpoint.
                      </p>
</div>
<div className="md:col-span-2">
<ul className="flex flex-col gap-3">
<li className="flex items-center gap-3 text-sm font-medium text-white/90 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3 w-full backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-0.5">
<svg className="lucide lucide-check-circle text-[#7c3aed] shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
                          UX/UI Design
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-white/90 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3 w-full backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-0.5">
<svg className="lucide lucide-check-circle text-[#7c3aed] shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
                          Visual Identity
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-white/90 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3 w-full backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-0.5">
<svg className="lucide lucide-check-circle text-[#7c3aed] shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
                          Motion &amp; 3D
                        </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="accordion-item group border-b border-[#eaeaea] scroll-reveal">
<button className="accordion-trigger flex w-full items-center justify-between py-10 md:py-14 text-left transition-colors relative overflow-hidden">
<span className="absolute left-[-10px] top-1/2 -translate-y-1/2 text-[8rem] md:text-[12rem] font-semibold text-[#f4f4f5] group-hover:text-[#eff6ff] transition-all duration-700 pointer-events-none select-none z-0 group-hover:translate-x-6 opacity-50">03</span>
<div className="flex items-center gap-8 relative z-10 pl-2 md:pl-8">
<span className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0a0a0a] group-hover:text-[#2563eb] transition-colors duration-300">
                  Engineering &amp; AI
                </span>
</div>
<iconify-icon className="text-4xl text-[#a0a0a0] transition-all duration-500 trigger-icon relative z-10 group-hover:text-[#2563eb] group-hover:rotate-90 shrink-0" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner pb-12 pt-2 md:pl-8 relative z-10">
<div className="bg-gradient-to-br from-[#0a0a0a] to-[#141414] rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl border border-white/5">
<div className="absolute -top-12 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#2563eb] rounded-full blur-[120px] opacity-25 pointer-events-none"></div>
<div className="grid md:grid-cols-5 gap-10 relative z-10">
<div className="md:col-span-3">
<p className="text-base md:text-lg leading-relaxed text-[#a0a0a0]">
<span className="text-white font-medium">We build on modern stacks</span> and integrate bespoke AI solutions to make your digital properties faster, smarter, and ready for the next decade of the web.
                      </p>
</div>
<div className="md:col-span-2">
<ul className="flex flex-col gap-3">
<li className="flex items-center gap-3 text-sm font-medium text-white/90 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3 w-full backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-0.5">
<svg className="lucide lucide-check-circle text-[#2563eb] shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
                          Full-stack Development
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-white/90 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3 w-full backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-0.5">
<svg className="lucide lucide-check-circle text-[#2563eb] shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
                          LLM Integrations
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-white/90 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3 w-full backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-0.5">
<svg className="lucide lucide-check-circle text-[#2563eb] shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
                          CMS Architecture
                        </li>
</ul>
</div>
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


<section className="min-h-[120vh] overflow-hidden sm:py-32 flex flex-col select-none text-white font-sans bg-[#030303] w-full pt-24 pb-24 relative items-center">

<canvas className="absolute inset-0 w-full h-full pointer-events-none z-0 mix-blend-screen opacity-60"></canvas>

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.05)_0%,rgba(3,3,3,1)_80%)] pointer-events-none z-0">
</div>
<style>
    @keyframes scan {
      0% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(120vh);
      }

      100% {
        transform: translateY(0);
      }
    }

    .glass-card {
      background: rgba(255, 255, 255, 0.02);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .schema-node {
      box-shadow: 0 0 20px rgba(79, 70, 229, 0.2), inset 0 0 10px rgba(79, 70, 229, 0.2);
    }
  </style>
<div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">

<div className="max-w-4xl mb-16 lg:mb-24 relative mix-blend-lighten">
<div className="flex items-center gap-4 mb-8">
<div className="w-1.5 h-1.5 bg-[#a5b4fc] rounded-full animate-pulse"></div>
<div className="w-16 h-[1px] bg-gradient-to-r from-[#4f46e5] to-transparent"></div>
<span className="text-xs uppercase tracking-widest font-normal text-[#a5b4fc] font-mono">
          NovaStudio Method
        </span>
</div>
<h2 className="text-[clamp(3rem,6vw,6rem)] font-normal leading-[0.9] tracking-tighter mb-8 text-[#eaeaea]">
<div className="overflow-hidden">
<span className="block text-[#a0a0a0]">We don't</span>
</div>
<div className="overflow-hidden">
<span className="block">just build.</span>
</div>
<div className="flex items-center gap-4 sm:gap-6 mt-2 sm:mt-4">
<div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-white/10 flex items-center justify-center" style={{animation: 'spin 10s linear infinite'}}>
<svg className="lucide lucide-asterisk text-[#4f46e5] w-6 h-6 sm:w-8 sm:h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v12"></path>
<path d="M17.196 9 6.804 15"></path>
<path d="m6.804 9 10.392 6"></path>
</svg>
</div>
<span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#a5b4fc] via-[#4f46e5] to-white pr-4">We invent.</span>
</div>
</h2>
<p className="text-base sm:text-lg text-[#a0a0a0] leading-relaxed max-w-xl font-normal border-l border-white/10 pl-6 ml-2 sm:ml-4">
        Our process is rooted in deep strategy and fearless creative execution. We strip away the unnecessary to craft
        digital experiences that are fundamentally better, not just different.
      </p>
</div>

<div className="relative w-full h-[900px] hidden lg:block">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveaspectratio="none" viewbox="0 0 100 100">

<path d="M 16.6 15 L 33 15 L 50 50 L 66 50 L 83.3 85" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.1"></path>

<path d="M 16.6 15 L 33 15 L 50 50 L 66 50 L 83.3 85" fill="none" stroke="#4f46e5" stroke-dasharray="20 100" stroke-dashoffset="120" strokeWidth="0.2">
<animate attributename="stroke-dashoffset" dur="6s" repeatcount="indefinite" values="120; -120"></animate>
</path>
<path d="M 16.6 15 L 33 15 L 50 50 L 66 50 L 83.3 85" fill="none" stroke="#a5b4fc" stroke-dasharray="5 150" stroke-dashoffset="155" strokeWidth="0.1">
<animate attributename="stroke-dashoffset" dur="6s" repeatcount="indefinite" values="155; -155"></animate>
</path>
</svg>

<div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-dashed border-[#4f46e5]/10 z-0 pointer-events-none" style={{animation: 'spin 30s linear infinite reverse'}}></div>

<div className="absolute top-[15%] left-[16.6%] -translate-x-1/2 -translate-y-1/2 w-[340px] xl:w-[380px] z-10 group cursor-default">

<div className="absolute -inset-10 rounded-full border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{animation: 'spin 15s linear infinite'}}>
<div className="absolute top-0 left-1/2 w-2 h-2 bg-[#4f46e5] rounded-full -translate-x-1/2 -translate-y-1/2 schema-node">
</div>
</div>
<div className="relative glass-card p-8 rounded-[2rem] overflow-hidden transition-all duration-500 group-hover:border-[#4f46e5]/40 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.15)]">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4f46e5]/20 to-transparent blur-2xl rounded-full translate-x-1/2 -translate-y-1/2 transition-colors duration-500 group-hover:from-[#4f46e5]/40">
</div>
<div className="flex items-start justify-between mb-8 relative z-10">
<div className="font-mono text-xs text-[#a5b4fc] border border-[#4f46e5]/30 rounded-full px-3 py-1 bg-[#4f46e5]/10">
              SEQ_01
            </div>
<svg className="lucide lucide-microscope w-6 h-6 text-white/20 transition-colors duration-500 group-hover:text-[#a5b4fc]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18h8"></path>
<path d="M3 22h18"></path>
<path d="M14 22a7 7 0 1 0 0-14h-1"></path>
<path d="M9 14h2"></path>
<path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
<path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
</svg>
</div>
<h3 className="text-2xl font-normal tracking-tight mb-3 text-white relative z-10">Discovery &amp; Strategy</h3>
<p className="text-[#a0a0a0] text-sm leading-relaxed mb-8 relative z-10 font-normal">Immersing ourselves in your
            business to uncover the insights that will drive our creative direction.</p>
<div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent transition-colors duration-500 group-hover:from-[#4f46e5]/50 relative z-10">
</div>
</div>
</div>

<div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[340px] xl:w-[380px] z-10 group cursor-default">

<div className="absolute -inset-10 rounded-full border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{animation: 'spin 15s linear infinite reverse'}}>
<div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#7c3aed] rounded-full -translate-x-1/2 translate-y-1/2 schema-node" style={{boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)'}}></div>
</div>
<div className="relative glass-card p-8 rounded-[2rem] overflow-hidden transition-all duration-500 group-hover:border-[#7c3aed]/40 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(124,58,237,0.15)]">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7c3aed]/20 to-transparent blur-2xl rounded-full translate-x-1/2 -translate-y-1/2 transition-colors duration-500 group-hover:from-[#7c3aed]/40">
</div>
<div className="flex items-start justify-between mb-8 relative z-10">
<div className="font-mono text-xs text-[#c4b5fd] border border-[#7c3aed]/30 rounded-full px-3 py-1 bg-[#7c3aed]/10">
              SEQ_02
            </div>
<svg className="lucide lucide-pen-tool w-6 h-6 text-white/20 transition-colors duration-500 group-hover:text-[#c4b5fd]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z">
</path>
<path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18">
</path>
<path d="m2.3 2.3 7.286 7.286"></path>
<circle cx="11" cy="11" r="2"></circle>
</svg>
</div>
<h3 className="text-2xl font-normal tracking-tight mb-3 text-white relative z-10">Concept &amp; Prototyping</h3>
<p className="text-[#a0a0a0] text-sm leading-relaxed mb-8 relative z-10 font-normal">Rapidly exploring visual
            directions and interactive models to define the soul of the product.</p>
<div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent transition-colors duration-500 group-hover:from-[#7c3aed]/50 relative z-10">
</div>
</div>
</div>

<div className="absolute top-[85%] left-[83.3%] -translate-x-1/2 -translate-y-1/2 w-[340px] xl:w-[380px] z-10 group cursor-default">

<div className="absolute -inset-10 rounded-full border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{animation: 'spin 15s linear infinite'}}>
<div className="absolute top-1/2 right-0 w-2 h-2 bg-[#2563eb] rounded-full translate-x-1/2 -translate-y-1/2 schema-node" style={{boxShadow: '0 0 20px rgba(37, 99, 235, 0.4)'}}></div>
</div>
<div className="relative glass-card p-8 rounded-[2rem] overflow-hidden transition-all duration-500 group-hover:border-[#2563eb]/40 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)]">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2563eb]/20 to-transparent blur-2xl rounded-full translate-x-1/2 -translate-y-1/2 transition-colors duration-500 group-hover:from-[#2563eb]/40">
</div>
<div className="flex items-start justify-between mb-8 relative z-10">
<div className="font-mono text-xs text-[#93c5fd] border border-[#2563eb]/30 rounded-full px-3 py-1 bg-[#2563eb]/10">
              SEQ_03
            </div>
<svg className="lucide lucide-cpu w-6 h-6 text-white/20 transition-colors duration-500 group-hover:text-[#93c5fd]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="6" rx="1" width="6" x="9" y="9"></rect>
<path d="M15 2v2"></path>
<path d="M15 20v2"></path>
<path d="M2 15h2"></path>
<path d="M2 9h2"></path>
<path d="M20 15h2"></path>
<path d="M20 9h2"></path>
<path d="M9 2v2"></path>
<path d="M9 20v2"></path>
</svg>
</div>
<h3 className="text-2xl font-normal tracking-tight mb-3 text-white relative z-10">Production &amp; Engineering
          </h3>
<p className="text-[#a0a0a0] text-sm leading-relaxed mb-8 relative z-10 font-normal">Writing pristine code and
            implementing flawless motion to bring the experience to life.</p>
<div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent transition-colors duration-500 group-hover:from-[#2563eb]/50 relative z-10">
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6 mt-16 w-full lg:hidden relative z-10">
<div className="relative glass-card p-6 sm:p-8 rounded-[2rem] border-l-2 border-[#4f46e5]">
<div className="font-mono text-xs text-[#a5b4fc] mb-4">SEQ_01</div>
<h3 className="text-xl sm:text-2xl font-normal tracking-tight mb-2 text-white">Discovery &amp; Strategy</h3>
<p className="text-[#a0a0a0] text-sm leading-relaxed font-normal">Immersing ourselves in your business to uncover
          the insights that will drive our creative direction.</p>
</div>
<div className="relative glass-card p-6 sm:p-8 rounded-[2rem] border-l-2 border-[#7c3aed]">
<div className="font-mono text-xs text-[#c4b5fd] mb-4">SEQ_02</div>
<h3 className="text-xl sm:text-2xl font-normal tracking-tight mb-2 text-white">Concept &amp; Prototyping</h3>
<p className="text-[#a0a0a0] text-sm leading-relaxed font-normal">Rapidly exploring visual directions and
          interactive models to define the soul of the product.</p>
</div>
<div className="relative glass-card p-6 sm:p-8 rounded-[2rem] border-l-2 border-[#2563eb]">
<div className="font-mono text-xs text-[#93c5fd] mb-4">SEQ_03</div>
<h3 className="text-xl sm:text-2xl font-normal tracking-tight mb-2 text-white">Production &amp; Engineering</h3>
<p className="text-[#a0a0a0] text-sm leading-relaxed font-normal">Writing pristine code and implementing flawless
          motion to bring the experience to life.</p>
</div>
</div>
</div>


</section>

<section className="bg-[#fcfcfc] overflow-hidden relative selection:bg-[#4f46e5]/20 py-24 sm:py-32">

<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
<div className="absolute w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full blur-[120px] opacity-20 animate-[pulse_6s_ease-in-out_infinite]" style={{background: 'radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)', left: '5%', top: '10%'}}></div>
<div className="absolute w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full blur-[120px] opacity-20 animate-[pulse_8s_ease-in-out_infinite]" style={{background: 'radial-gradient(circle, rgba(10,10,10,0.1) 0%, transparent 70%)', right: '5%', bottom: '10%'}}></div>
</div>
<canvas className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] w-full h-full mix-blend-multiply" height="799" id="noiseCanvas" width="1492"></canvas>
<div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 relative z-10">

<div className="mb-16 scroll-reveal text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-[#eaeaea] mb-6 backdrop-blur-md shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-[#4f46e5] animate-pulse"></div>
<span className="text-xs text-[#666] tracking-widest uppercase font-medium">
                Service Levels
              </span>
</div>
<h2 className="text-[clamp(2.4rem,4.5vw,5rem)] font-medium leading-[1] tracking-tighter mb-4 text-[#0a0a0a]">
              Transparent partnerships.
            </h2>
<p className="text-base text-[#666] max-w-md mx-auto typewriter-text h-10 md:h-auto" data-text="Tailored engagement models designed to scale from early-stage visionaries to global market leaders.">T</p>
</div>

<div className="relative w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8 z-10" style={{perspective: '1200px'}}>

<div className="draggable-card cursor-grab select-none relative w-full max-w-sm md:w-[24rem] h-[36rem] z-10">
<div className="relative w-full h-full rounded-[2rem] p-8 flex flex-col group transition-all duration-700 ease-out hover:-translate-y-4 hover:rotate-0 md:-rotate-6 md:translate-x-12" style={{background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fc 100%)', boxShadow: '2px 4px 8px rgba(0,0,0,0.02), 8px 16px 24px rgba(0,0,0,0.03), 64px 96px 128px rgba(0,0,0,0.08), 80px 120px 160px rgba(79, 70, 229, 0.08), inset 0 1px 1px rgba(255,255,255,1), 0 0 0 1px rgba(0,0,0,0.04)'}}>
<div className="flex justify-between items-start relative z-10 mb-8">
<div className="w-16 h-16 rounded-xl p-2.5 flex items-end justify-between gap-0.5 bg-white shadow-sm border border-[#eaeaea]">
<div className="w-full bg-[#4f46e5]/90 rounded-t-sm animate-pulse" style={{height: '40%', animationDuration: '0.7s'}}></div>
<div className="w-full bg-[#4f46e5]/90 rounded-t-sm animate-pulse" style={{height: '85%', animationDuration: '1.2s', animationDelay: '0.2s'}}></div>
<div className="w-full bg-[#4f46e5]/90 rounded-t-sm animate-pulse" style={{height: '100%', animationDuration: '1.5s', animationDelay: '0.1s'}}></div>
<div className="w-full bg-[#4f46e5]/90 rounded-t-sm animate-pulse" style={{height: '30%', animationDuration: '0.8s', animationDelay: '0.7s'}}></div>
</div>
<div className="flex flex-col items-end">
<div className="flex items-center gap-1.5 text-[#4f46e5] font-medium text-sm">
<iconify-icon className="text-lg" icon="solar:rocket-linear"></iconify-icon>
<span className="tracking-tight uppercase">Popular</span>
</div>
<div className="text-[10px] text-[#4f46e5]/70 mt-1 uppercase tracking-widest">
                      Growth Partner
                    </div>
</div>
</div>
<div className="relative z-10 mb-6">
<div className="flex items-end gap-2 mb-2">
<span className="text-5xl tracking-tighter text-[#0a0a0a] font-medium">
                      $15k
                    </span>
<span className="text-sm text-[#666] mb-1 tracking-widest uppercase">
                      / Proj
                    </span>
</div>
<h3 className="text-xl tracking-tight text-[#0a0a0a] mb-2 font-medium">
                    Scaling Startups
                  </h3>
<p className="text-xs text-[#666] leading-relaxed typewriter-text min-h-[2.5rem]" data-text="Everything you need to launch fast and establish a premium brand presence.">E</p>
</div>
<div className="relative z-10 flex flex-col gap-3 mb-8 flex-grow">
<div className="w-full h-px mb-1 bg-[#eaeaea]"></div>
<div className="flex items-start gap-3 text-xs text-[#4a4a4a]">
<iconify-icon className="text-[#4f46e5] text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Brand Identity &amp; Positioning</span>
</div>
<div className="flex items-start gap-3 text-xs text-[#4a4a4a]">
<iconify-icon className="text-[#4f46e5] text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Marketing Website (10 pages)</span>
</div>
<div className="flex items-start gap-3 text-xs text-[#4a4a4a]">
<iconify-icon className="text-[#4f46e5] text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>CMS Architecture &amp; Setup</span>
</div>
</div>
<button className="relative z-10 w-full py-3.5 px-5 rounded-xl flex items-center justify-between group/btn transition-all duration-300 hover:bg-[#f4f4f5] bg-white border border-[#eaeaea] shadow-sm">
<span className="text-xs text-[#0a0a0a] tracking-widest uppercase font-semibold">
                    Start Project
                  </span>
<iconify-icon className="text-[#4f46e5] text-lg group-hover/btn:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="draggable-card cursor-grab select-none relative w-full max-w-sm md:w-[24rem] h-[36rem] z-0">
<div className="relative w-full h-full rounded-[2rem] p-8 flex flex-col group transition-all duration-700 ease-out hover:-translate-y-4 hover:rotate-0 md:rotate-6 md:-translate-x-12" style={{background: 'linear-gradient(145deg, #121212 0%, #050505 100%)', boxShadow: '2px 4px 8px rgba(0,0,0,0.2), 8px 16px 24px rgba(0,0,0,0.3), 64px 96px 128px rgba(0,0,0,0.4), 80px 120px 160px rgba(10, 10, 10, 0.4), inset 0 1px 1px rgba(255,255,255,0.05), 0 0 0 1px rgba(255,255,255,0.1)'}}>
<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[2rem]">
<div className="absolute right-[-10%] top-[-10%] h-[15rem] w-[15rem] rounded-full bg-[#4f46e5] blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
</div>
<div className="flex justify-between items-start relative z-10 mb-8">
<div className="w-16 h-16 rounded-xl p-2.5 flex items-end justify-between gap-0.5 bg-[#1a1a1a] shadow-sm border border-white/10">
<div className="w-full bg-white/90 rounded-t-sm animate-pulse" style={{height: '60%', animationDuration: '0.9s'}}></div>
<div className="w-full bg-white/90 rounded-t-sm animate-pulse" style={{height: '90%', animationDuration: '1.1s', animationDelay: '0.1s'}}></div>
<div className="w-full bg-white/90 rounded-t-sm animate-pulse" style={{height: '50%', animationDuration: '0.8s', animationDelay: '0.6s'}}></div>
<div className="w-full bg-white/90 rounded-t-sm animate-pulse" style={{height: '75%', animationDuration: '1.3s', animationDelay: '0.3s'}}></div>
</div>
<div className="flex flex-col items-end">
<div className="flex items-center gap-1.5 text-white font-medium text-sm">
<iconify-icon className="text-lg" icon="solar:crown-star-linear"></iconify-icon>
<span className="tracking-tight uppercase">Scale</span>
</div>
<div className="text-[10px] text-white/50 mt-1 uppercase tracking-widest">
                      Enterprise Retainer
                    </div>
</div>
</div>
<div className="relative z-10 mb-6">
<div className="flex items-end gap-2 mb-2">
<span className="text-4xl tracking-tighter text-white font-medium">
                      Custom
                    </span>
<span className="text-sm text-white/50 mb-1 tracking-widest uppercase">
                      / Mo
                    </span>
</div>
<h3 className="text-xl tracking-tight text-white mb-2 font-medium">
                    Established Brands
                  </h3>
<p className="text-xs text-[#a0a0a0] leading-relaxed typewriter-text min-h-[2.5rem]" data-text="Dedicated product teams, AI integration, and continuous digital evolution.">D</p>
</div>
<div className="relative z-10 flex flex-col gap-3 mb-8 flex-grow">
<div className="w-full h-px mb-1 bg-white/10"></div>
<div className="flex items-start gap-3 text-xs text-white/90">
<iconify-icon className="text-[#a5b4fc] text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Everything in Growth Partner</span>
</div>
<div className="flex items-start gap-3 text-xs text-white/90">
<iconify-icon className="text-[#a5b4fc] text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Dedicated Product &amp; Eng Pod</span>
</div>
<div className="flex items-start gap-3 text-xs text-white/90">
<iconify-icon className="text-[#a5b4fc] text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Enterprise SLA &amp; 24/7 Priority</span>
</div>
</div>
<button className="relative z-10 w-full py-3.5 px-5 rounded-xl flex items-center justify-between group/btn transition-all duration-300 hover:bg-white/10 bg-[#1a1a1a] border border-white/10 shadow-sm">
<span className="text-xs text-white tracking-widest uppercase font-semibold">
                    Talk to Partners
                  </span>
<iconify-icon className="text-white text-lg group-hover/btn:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

</section>
<section className="relative overflow-hidden bg-[#0a0a0a] text-white">

<div className="absolute inset-0 opacity-60 mix-blend-screen pointer-events-none">
<div className="absolute left-[10%] top-[-10%] h-[30rem] w-[30rem] rounded-full bg-[#4f46e5] blur-[120px] transition-transform duration-[10s] ease-in-out hover:scale-110"></div>
<div className="absolute right-[5%] bottom-[-20%] h-[40rem] w-[40rem] rounded-full bg-[#7c3aed] blur-[150px] opacity-70"></div>
<div className="absolute left-[40%] top-[30%] h-[20rem] w-[20rem] rounded-full bg-[#2563eb] blur-[100px] opacity-50"></div>
</div>
<div className="relative mx-auto max-w-[90rem] px-4 py-32 text-center sm:px-6 lg:px-8 lg:py-48 scroll-reveal">
<h2 className="mx-auto max-w-4xl text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.9] tracking-tighter">
            Ready to build
            <br/>
            something extraordinary?
          </h2>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-medium text-[#0a0a0a] transition-all hover:scale-105" href="#">
<span className="relative z-10 flex items-center gap-2">
                Start a Project
                <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</a>
<a className="rounded-full bg-transparent border border-white/20 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10" href="#">
              View Case Studies
            </a>
</div>
</div>
</section>
</main>
<footer className="relative overflow-hidden bg-[#0a0a0a] text-white pt-24 pb-12 border-t border-white/10">
<div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
<div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-24">
<div className="lg:col-span-2 pr-8">
<a className="text-xl font-semibold tracking-tight" href="#">
              NOVASTUDIO
            </a>
<p className="mt-6 text-sm leading-relaxed text-[#a0a0a0] max-w-xs">
              An independent creative agency engineering premium digital
              platforms and brand identities for ambitious companies globally.
            </p>
</div>
<div>
<h3 className="mb-5 text-xs font-medium uppercase tracking-widest text-[#666]">
              Capabilities
            </h3>
<ul className="space-y-3 text-sm text-[#a0a0a0]">
<li>
<a className="transition-colors hover:text-white" href="#">
                  Brand Identity
                </a>
</li>
<li>
<a className="transition-colors hover:text-white" href="#">
                  Web Experience
                </a>
</li>
<li>
<a className="transition-colors hover:text-white" href="#">
                  Product Design
                </a>
</li>
<li>
<a className="transition-colors hover:text-white" href="#">
                  AI Engineering
                </a>
</li>
</ul>
</div>
<div>
<h3 className="mb-5 text-xs font-medium uppercase tracking-widest text-[#666]">
              Studio
            </h3>
<ul className="space-y-3 text-sm text-[#a0a0a0]">
<li>
<a className="transition-colors hover:text-white" href="#">
                  Our Work
                </a>
</li>
<li>
<a className="transition-colors hover:text-white" href="#">
                  About Us
                </a>
</li>
<li>
<a className="transition-colors hover:text-white" href="#">
                  Insights
                </a>
</li>
<li>
<a className="transition-colors hover:text-white" href="#">
                  Careers
                </a>
</li>
</ul>
</div>
<div>
<h3 className="mb-5 text-xs font-medium uppercase tracking-widest text-[#666]">
              Connect
            </h3>
<ul className="space-y-3 text-sm text-[#a0a0a0]">
<li>
<a className="transition-colors hover:text-white" href="#">
                  Contact
                </a>
</li>
<li>
<a className="transition-colors hover:text-white" href="#">
                  Twitter / X
                </a>
</li>
<li>
<a className="transition-colors hover:text-white" href="#">
                  LinkedIn
                </a>
</li>
<li>
<a className="transition-colors hover:text-white" href="#">
                  Instagram
                </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-8">
<p className="text-xs text-[#666]">
            © 2025 NovaStudio Agency. All rights reserved.
          </p>
<div className="flex gap-6 text-xs text-[#666]">
<a className="transition-colors hover:text-white" href="#">
              Privacy Policy
            </a>
<a className="transition-colors hover:text-white" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
