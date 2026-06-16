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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


      // Text Splitting for Kinetic Typography
      const splitText = (selector) => {
          const el = document.querySelector(selector);
          if(!el) return;
          const text = el.innerText;
          el.innerHTML = '';
          text.split(' ').forEach(word => {
              const wordSpan = document.createElement('span');
              wordSpan.style.display = 'inline-block';
              wordSpan.style.overflow = 'hidden';
              wordSpan.style.verticalAlign = 'bottom';
              wordSpan.innerHTML = word.split('').map(char => `<span class="char inline-block translate-y-full opacity-0">${char}</span>`).join('') + '&nbsp;';
              el.appendChild(wordSpan);
          });
      };

      // Accordion Logic
      document.querySelectorAll('.accordion-btn').forEach(btn => {
          btn.addEventListener('click', function() {
              const item = this.parentElement;
              const content = this.nextElementSibling;
              const isActive = this.classList.contains('active');

              document.querySelectorAll('.accordion-btn').forEach(b => {
                  b.classList.remove('active');
                  b.nextElementSibling.style.maxHeight = '0px';
                  b.nextElementSibling.style.opacity = '0';
              });

              if (!isActive) {
                  this.classList.add('active');
                  content.style.maxHeight = content.scrollHeight + 'px';
                  content.style.opacity = '1';
              }
          });
      });

      // GSAP Animations
      document.addEventListener("DOMContentLoaded", (event) => {
          gsap.registerPlugin(ScrollTrigger);
          splitText('.hero-title');

          // Ticker Animation
          gsap.to(".animate-ticker", {
              xPercent: -50,
              ease: "none",
              duration: 25,
              repeat: -1
          });

          // Shimmer Background Animation
          gsap.to(".shimmer-bg", {
              x: "200%",
              duration: 3,
              repeat: -1,
              ease: "none"
          });

          // Initial Timeline
          const masterTl = gsap.timeline({ defaults: { ease: "power3.out" } });

          masterTl.fromTo("#webgl-canvas", { opacity: 0 }, { opacity: 0.3, duration: 2 }, 0);
          masterTl.from(".nav-bar", { y: -20, opacity: 0, duration: 1 }, 0.2);

          masterTl.to(".hero-title .char", {
              y: 0,
              opacity: 1,
              stagger: 0.015,
              duration: 0.8,
              ease: "back.out(1.4)"
          }, 0.5);

          masterTl.from(".hero-meta > *", {
              x: 20,
              opacity: 0,
              stagger: 0.1,
              duration: 0.8
          }, 1.0);

          masterTl.from(".hero-card", {
              y: 40,
              opacity: 0,
              stagger: 0.15,
              duration: 1,
              ease: "power2.out"
          }, 1.2);

          // Scroll Animations
          gsap.utils.toArray('.scroll-up').forEach((el) => {
              gsap.from(el, {
                  scrollTrigger: { trigger: el, start: "top 85%" },
                  y: 50, opacity: 0, duration: 0.8, ease: "power2.out"
              });
          });

          gsap.utils.toArray('.scroll-fade').forEach((el) => {
              gsap.from(el, {
                  scrollTrigger: { trigger: el, start: "top 80%" },
                  opacity: 0, scale: 0.95, duration: 1, ease: "power2.out"
              });
          });

           gsap.from('.scroll-slide-up', {
              scrollTrigger: { trigger: '.scroll-slide-up', start: "top 80%" },
              y: 30, opacity: 0, duration: 0.8, ease: "power2.out"
          });
      });

      // WebGL Background
      const canvas = document.getElementById('webgl-canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

      if (gl) {
          const vertexShaderSource = `
              attribute vec2 position;
              void main() { gl_Position = vec4(position, 0.0, 1.0); }
          `;
          const fragmentShaderSource = `
              precision mediump float;
              uniform vec2 u_resolution;
              uniform float u_time;

              vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
              vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
              vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

              float snoise(vec2 v) {
                  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                  vec2 i  = floor(v + dot(v, C.yy) );
                  vec2 x0 = v -   i + dot(i, C.xx);
                  vec2 i1;
                  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                  vec4 x12 = x0.xyxy + C.xxzz;
                  x12.xy -= i1;
                  i = mod289(i);
                  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ) );
                  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                  m = m*m ;
                  m = m*m ;
                  vec3 x = 2.0 * fract(p * C.www) - 1.0;
                  vec3 h = abs(x) - 0.5;
                  vec3 ox = floor(x + 0.5);
                  vec3 a0 = x - ox;
                  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                  vec3 g;
                  g.x  = a0.x  * x0.x  + h.x  * x0.y;
                  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                  return 130.0 * dot(m, g);
              }

              void main() {
                  vec2 st = gl_FragCoord.xy/u_resolution.xy;
                  st.x *= u_resolution.x/u_resolution.y;

                  vec3 color1 = vec3(0.96, 0.95, 0.94);
                  vec3 color2 = vec3(0.91, 0.89, 0.85);
                  vec3 color3 = vec3(0.85, 0.82, 0.78);

                  float n = snoise(st * 2.0 + u_time * 0.05);
                  float n2 = snoise(st * 4.0 - u_time * 0.08);

                  float mixVal = smoothstep(-1.0, 1.0, n + n2*0.5);
                  vec3 finalColor = mix(mix(color1, color2, mixVal), color3, smoothstep(0.5, 1.0, mixVal));

                  gl_FragColor = vec4(finalColor, 1.0);
              }
          `;

          const createShader = (gl, type, source) => {
              const shader = gl.createShader(type);
              gl.shaderSource(shader, source);
              gl.compileShader(shader);
              if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                  console.error('Shader error:', gl.getShaderInfoLog(shader));
                  gl.deleteShader(shader);
                  return null;
              }
              return shader;
          };

          const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
          const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
          const program = gl.createProgram();

          gl.attachShader(program, vertexShader);
          gl.attachShader(program, fragmentShader);
          gl.linkProgram(program);
          gl.useProgram(program);

          const positionBuffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

          const positionLocation = gl.getAttribLocation(program, "position");
          gl.enableVertexAttribArray(positionLocation);
          gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

          const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
          const timeLocation = gl.getUniformLocation(program, "u_time");

          const resize = () => {
              canvas.width = window.innerWidth;
              canvas.height = window.innerHeight;
              gl.viewport(0, 0, canvas.width, canvas.height);
              gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
          };
          window.addEventListener('resize', resize);
          resize();

          let startTime = Date.now();
          const render = () => {
              const time = (Date.now() - startTime) * 0.001;
              gl.uniform1f(timeLocation, time);
              gl.drawArrays(gl.TRIANGLES, 0, 6);
              requestAnimationFrame(render);
          };
          render();
      } else {
          canvas.style.display = 'none';
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[800px] invert hue-rotate-90 saturate-150 brightness-150" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="EET25BiXxR2StNXZvAzF"></div>

</div></div>

<canvas aria-hidden="true" className="fixed top-0 left-0 w-full h-screen -z-10 opacity-40 pointer-events-none" height="1021" id="webgl-canvas" width="1568"></canvas>

<div className="bg-[#2C2825] text-[#F7F5F0] text-xs uppercase tracking-[0.2rem] py-2 overflow-hidden flex items-center relative w-full h-8">
<div className="animate-ticker flex whitespace-nowrap w-max" style={{transform: 'translateX(0)'}}>
<span className="px-4">
          * NEW NOVEL 'ECHOES OF TOMORROW' OUT NOW - ORDER YOUR SIGNED COPY *
        </span>
<span className="px-4">
          * NEW NOVEL 'ECHOES OF TOMORROW' OUT NOW - ORDER YOUR SIGNED COPY *
        </span>
<span className="px-4">
          * NEW NOVEL 'ECHOES OF TOMORROW' OUT NOW - ORDER YOUR SIGNED COPY *
        </span>
<span className="px-4">
          * NEW NOVEL 'ECHOES OF TOMORROW' OUT NOW - ORDER YOUR SIGNED COPY *
        </span>
</div>
</div>

<header className="nav-bar border-b border-[#2C2825]/10 px-6 py-4 flex justify-between items-center relative z-20 bg-[#F7F5F0]/80 backdrop-blur-md">
<div className="text-xl font-normal tracking-tighter uppercase">JANE DOE</div>
<nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-[#2C2825]/80">
<a className="hover:text-[#C27A63] transition-colors" href="#">Books</a>
<a className="hover:text-[#C27A63] transition-colors" href="#">About</a>
<a className="hover:text-[#C27A63] transition-colors" href="#">Events</a>
<a className="hover:text-[#C27A63] transition-colors" href="#">Journal</a>
<a className="hover:text-[#C27A63] transition-colors" href="#">More</a>
</nav>
<div className="flex gap-6 text-xs uppercase tracking-widest">
<a className="hover:text-[#C27A63] transition-colors" href="#">Login</a>
<a className="hover:text-[#C27A63] transition-colors" href="#">Bag (02)</a>
</div>
</header>
<main className="">

<section className="px-6 pt-16 pb-8 max-w-[1600px] mx-auto min-h-[85vh] flex flex-col justify-between">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<h1 className="hero-title text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight uppercase font-normal max-w-5xl text-balance"><span className="" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}><span className="char inline-block translate-y-full opacity-0">C</span><span className="char inline-block translate-y-full opacity-0">R</span><span className="char inline-block translate-y-full opacity-0">A</span><span className="char inline-block translate-y-full opacity-0">F</span><span className="char inline-block translate-y-full opacity-0">T</span><span className="char inline-block translate-y-full opacity-0">I</span><span className="char inline-block translate-y-full opacity-0">N</span><span className="char inline-block translate-y-full opacity-0">G</span><span className="char inline-block translate-y-full opacity-0"> </span><span className="char inline-block translate-y-full opacity-0">S</span><span className="char inline-block translate-y-full opacity-0">T</span><span className="char inline-block translate-y-full opacity-0">O</span><span className="char inline-block translate-y-full opacity-0">R</span><span className="char inline-block translate-y-full opacity-0">I</span><span className="char inline-block translate-y-full opacity-0">E</span><span className="char inline-block translate-y-full opacity-0">S</span><span className="char inline-block translate-y-full opacity-0"> </span><span className="char inline-block translate-y-full opacity-0">T</span><span className="char inline-block translate-y-full opacity-0">H</span><span className="char inline-block translate-y-full opacity-0">A</span><span className="char inline-block translate-y-full opacity-0">T</span><span className="char inline-block translate-y-full opacity-0"> </span><span className="char inline-block translate-y-full opacity-0">L</span><span className="char inline-block translate-y-full opacity-0">I</span><span className="char inline-block translate-y-full opacity-0">N</span><span className="char inline-block translate-y-full opacity-0">G</span><span className="char inline-block translate-y-full opacity-0">E</span><span className="char inline-block translate-y-full opacity-0">R</span><span className="char inline-block translate-y-full opacity-0"> </span><span className="char inline-block translate-y-full opacity-0">L</span><span className="char inline-block translate-y-full opacity-0">O</span><span className="char inline-block translate-y-full opacity-0">N</span><span className="char inline-block translate-y-full opacity-0">G</span><span className="char inline-block translate-y-full opacity-0"> </span><span className="char inline-block translate-y-full opacity-0">A</span><span className="char inline-block translate-y-full opacity-0">F</span><span className="char inline-block translate-y-full opacity-0">T</span><span className="char inline-block translate-y-full opacity-0">E</span><span className="char inline-block translate-y-full opacity-0">R</span><span className="char inline-block translate-y-full opacity-0"> </span><span className="char inline-block translate-y-full opacity-0">T</span><span className="char inline-block translate-y-full opacity-0">H</span><span className="char inline-block translate-y-full opacity-0">E</span><span className="char inline-block translate-y-full opacity-0"> </span><span className="char inline-block translate-y-full opacity-0">F</span><span className="char inline-block translate-y-full opacity-0">I</span><span className="char inline-block translate-y-full opacity-0">N</span><span className="char inline-block translate-y-full opacity-0">A</span><span className="char inline-block translate-y-full opacity-0">L</span><span className="char inline-block translate-y-full opacity-0"> </span><span className="char inline-block translate-y-full opacity-0">P</span><span className="char inline-block translate-y-full opacity-0">A</span><span className="char inline-block translate-y-full opacity-0">G</span><span className="char inline-block translate-y-full opacity-0">E</span><span className="char inline-block translate-y-full opacity-0"> </span><span className="char inline-block translate-y-full opacity-0"> </span><span className="char inline-block translate-y-full opacity-0"> </span><span className="char inline-block translate-y-full opacity-0"> </span> </span></h1>
<div className="hero-meta flex flex-col items-center md:items-end gap-4 shrink-0 pr-8">
<div className="w-16 h-16 rounded-full overflow-hidden border border-[#2C2825]/10 group relative">
<img alt="Curator" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f59b84ca-1848-4b79-954a-fab4fed151e2_1600w.png"/>
</div>
<button aria-label="View Sale" className="w-14 h-14 rounded-full bg-[#C27A63] text-[#F7F5F0] flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#C27A63]/20">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="text-xs text-center md:text-right mt-2 text-[#2C2825]/80">
<p className="font-normal">Latest Release</p>
<p>Echoes of Tomorrow</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

<div className="hero-card group relative bg-[#EBE9E4] aspect-[4/5] overflow-hidden p-6 flex flex-col justify-between cursor-pointer border border-transparent hover:border-[#2C2825]/10 transition-colors duration-500">
<div className="flex justify-between items-start z-10">
<span className="text-xs bg-white/60 backdrop-blur-sm px-2 py-1 uppercase tracking-widest text-[#2C2825]/70">
                New Release
              </span>
</div>
<img alt="Monolith" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd2b7cc4-b191-41fb-bc2d-77c3ec98efa0_3840w.png"/>
<div className="flex justify-between items-end z-10 w-full">
<span className="uppercase text-sm font-normal text-[#ffffff] tracking-widest">
                Echoes of Tomorrow
              </span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>

<div className="hero-card group relative bg-[#EBE9E4] aspect-[4/5] overflow-hidden p-6 flex flex-col justify-between cursor-pointer border border-transparent hover:border-[#2C2825]/10 transition-colors duration-500">
<div className="flex justify-between items-start z-10">
<span className="text-xs bg-white/60 backdrop-blur-sm px-2 py-1 uppercase tracking-widest text-[#2C2825]/70">
                Bestseller
              </span>
</div>
<img alt="Spaces" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b2a71b4a-3a83-408e-9542-64e2bd8b2114_3840w.png"/>
<div className="flex justify-between items-end z-10 w-full">
<span className="uppercase text-sm font-normal text-[#ffffff] tracking-widest">
                The Silent City
              </span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>

<div className="hero-card group relative bg-[#EBE9E4] aspect-[4/5] overflow-hidden p-6 flex flex-col justify-between cursor-pointer border border-transparent hover:border-[#2C2825]/10 transition-colors duration-500">
<div className="flex justify-between items-start z-10">
<span className="text-xs bg-white/60 backdrop-blur-sm px-2 py-1 uppercase tracking-widest text-[#2C2825]/70">
                Anthology
              </span>
</div>
<img alt="Module" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86f3165f-3fb4-4573-906a-6d816f7b7a09_3840w.png"/>
<div className="flex justify-between items-end z-10 w-full">
<span className="uppercase text-sm font-normal text-[#ffffff] tracking-widest">
                Whispers in the Dark
              </span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="px-6 py-20 max-w-[1600px] mx-auto border-t border-[#2C2825]/10">
<div className="flex justify-between items-end mb-10">
<h2 className="text-3xl md:text-4xl tracking-tight uppercase font-normal">
            Featured Works
          </h2>
<div className="flex gap-2">
<button className="w-8 h-8 flex items-center justify-center border border-[#2C2825]/20 hover:bg-[#2C2825] hover:text-[#F7F5F0] transition-colors">
<iconify-icon icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center border border-[#2C2825]/20 hover:bg-[#2C2825] hover:text-[#F7F5F0] transition-colors">
<iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="scroll-up group flex flex-col gap-4">
<div className="bg-white aspect-square relative flex items-center justify-center overflow-hidden">
<span className="absolute top-4 left-4 text-xs bg-[#F7F5F0] px-2 py-1 text-[#2C2825]/60 uppercase">
                Limited
              </span>
<img alt="Product" className="w-3/4 h-3/4 object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c00a893d-007e-41ef-88e9-f99469b13d3a_3840w.png"/>
</div>
<div className="flex flex-col gap-2">
<div className="flex justify-between items-start">
<h3 className="text-sm uppercase font-normal w-1/2">
                  Echoes of Tomorrow (Hardcover)
                </h3>
<div className="flex gap-1">
<div className="w-3 h-3 rounded-full bg-blue-600 border border-black/10 cursor-pointer"></div>
<div className="w-3 h-3 rounded-full bg-gray-800 border border-black/10 cursor-pointer opacity-40 hover:opacity-100"></div>
</div>
</div>
<div className="flex justify-between items-center text-xs border-t border-[#2C2825]/10 pt-2 mt-1">
<div className="flex items-center gap-1 text-[#C27A63]">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="12"></iconify-icon>
<span className="text-[#2C2825]/60">4.9 (120)</span>
</div>
<span className="font-normal">$24.99</span>
</div>
</div>
</div>

<div className="scroll-up group flex flex-col gap-4" style={{transitionDelay: '100ms'}}>
<div className="bg-white aspect-square relative flex items-center justify-center overflow-hidden">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f78afac1-e918-4cd5-99bc-9bd507b541f2_3840w.png"/>
</div>
<div className="flex flex-col gap-2">
<div className="flex justify-between items-start">
<h3 className="text-sm uppercase font-normal w-1/2">
                  The Silent City (Paperback)
                </h3>
<div className="flex gap-1">
<div className="w-3 h-3 rounded-full bg-slate-200 border border-black/10 cursor-pointer"></div>
</div>
</div>
<div className="flex justify-between items-center text-xs border-t border-[#2C2825]/10 pt-2 mt-1">
<div className="flex items-center gap-1 text-[#C27A63]">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="12"></iconify-icon>
<span className="text-[#2C2825]/60">4.8 (84)</span>
</div>
<span className="font-normal">$16.99</span>
</div>
</div>
</div>

<div className="scroll-up group flex flex-col gap-4" style={{transitionDelay: '200ms'}}>
<div className="bg-white aspect-square relative flex items-center justify-center overflow-hidden">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/76935085-68ea-4c9b-8cfe-230d59d248d4_3840w.png"/>
</div>
<div className="flex flex-col gap-2">
<div className="flex justify-between items-start">
<h3 className="text-sm uppercase font-normal w-1/2">
                  Whispers in the Dark
                </h3>
<div className="flex gap-1"></div>
</div>
<div className="flex justify-between items-center text-xs border-t border-[#2C2825]/10 pt-2 mt-1">
<div className="flex items-center gap-1 text-[#C27A63]">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="12"></iconify-icon>
<span className="text-[#2C2825]/60">5.0 (22)</span>
</div>
<span className="font-normal">$18.50</span>
</div>
</div>
</div>

<div className="scroll-up group flex flex-col gap-4" style={{transitionDelay: '300ms'}}>
<div className="bg-white aspect-square relative flex items-center justify-center overflow-hidden">
<span className="absolute top-4 left-4 text-xs bg-[#F7F5F0] px-2 py-1 text-[#2C2825]/60 uppercase">
                Signed
              </span>
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3490840-0b71-4461-bc8a-052b40095f78_3840w.png"/>
</div>
<div className="flex flex-col gap-2">
<div className="flex justify-between items-start">
<h3 className="text-sm uppercase font-normal w-1/2">
                  Midnight Sun (Signed Edition)
                </h3>
<div className="flex gap-1">
<div className="w-3 h-3 rounded-full bg-orange-500 border border-black/10 cursor-pointer"></div>
<div className="w-3 h-3 rounded-full bg-blue-900 border border-black/10 cursor-pointer opacity-40"></div>
</div>
</div>
<div className="flex justify-between items-center text-xs border-t border-[#2C2825]/10 pt-2 mt-1">
<div className="flex items-center gap-1 text-[#C27A63]">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="12"></iconify-icon>
<span className="text-[#2C2825]/60">4.7 (56)</span>
</div>
<span className="font-normal">$35.00</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#2C2825] text-[#F7F5F0] py-16 px-6 relative overflow-hidden">
<div className="shimmer-bg absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full pointer-events-none"></div>
<div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-[#F7F5F0]/20 text-center relative z-10">
<div className="scroll-fade flex flex-col items-center gap-4 pt-6 md:pt-0">
<iconify-icon className="text-[#C27A63]" icon="solar:book-linear" strokeWidth="1.5" width="32"></iconify-icon>
<div className="">
<h4 className="text-sm uppercase tracking-widest mb-2 font-normal">
                Immersive Worlds
              </h4>
<p className="text-xs text-[#F7F5F0]/60 max-w-[200px] mx-auto leading-relaxed">
                Dive into rich, meticulously crafted universes.
              </p>
</div>
</div>
<div className="scroll-fade flex flex-col items-center gap-4 pt-6 md:pt-0" style={{transitionDelay: '150ms'}}>
<iconify-icon className="text-[#C27A63]" icon="solar:medal-star-linear" strokeWidth="1.5" width="32"></iconify-icon>
<div>
<h4 className="text-sm uppercase tracking-widest mb-2 font-normal">
                Award Winning
              </h4>
<p className="text-xs text-[#F7F5F0]/60 max-w-[200px] mx-auto leading-relaxed">
                Recognized globally for outstanding storytelling.
              </p>
</div>
</div>
<div className="scroll-fade flex flex-col items-center gap-4 pt-6 md:pt-0" style={{transitionDelay: '300ms'}}>
<iconify-icon className="text-[#C27A63]" icon="solar:pen-linear" strokeWidth="1.5" width="32"></iconify-icon>
<div>
<h4 className="text-sm uppercase tracking-widest mb-2 font-normal">
                Signed Copies
              </h4>
<p className="text-xs text-[#F7F5F0]/60 max-w-[200px] mx-auto leading-relaxed">
                Exclusive autographed editions available directly.
              </p>
</div>
</div>
</div>
</section><section className="px-6 py-24 max-w-[1600px] mx-auto border-t border-[#2C2825]/10">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-stretch">
<div className="lg:w-5/12 flex flex-col justify-center scroll-fade">
<div className="text-xs uppercase tracking-widest text-[#2C2825]/50 mb-8 flex items-center gap-4">
<span className="w-12 h-[1px] bg-[#2C2825]/20"></span>
        From the Archives
      </div>
<h2 className="text-4xl md:text-5xl tracking-tight uppercase font-normal leading-tight mb-8 text-balance">
        "The memories we bury are the seeds of our future."
      </h2>
<div className="text-sm text-[#2C2825]/70 leading-relaxed mb-10 space-y-4">
<p>
          The city was silent, not with the peace of sleep, but with the heavy anticipation of a drawn breath. Elara stood at the edge of the monolith, her fingers tracing the etched runes that predated the foundation of the world. 
        </p>
<p>
          She had spent a lifetime running from the echoes, only to find that they had been waiting for her here, at the end of everything. The truth was no longer a shadow to be feared, but a light to be embraced.
        </p>
</div>
<a className="inline-flex items-center gap-3 text-xs uppercase tracking-widest hover:text-[#C27A63] transition-colors group w-fit pb-2 border-b border-[#2C2825]/20 hover:border-[#C27A63]" href="#">
        Read Chapter One
        <iconify-icon className="transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="lg:w-7/12 relative min-h-[500px] lg:min-h-[700px] bg-[#EBE9E4] overflow-hidden scroll-fade group" style={{transitionDelay: '150ms'}}>
<img alt="Abstract Monolith" className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ef84b35-6f41-4e21-b9d2-ad54ad740085_3840w.png"/>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#2C2825]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
<div className="bg-[#F7F5F0] p-6 max-w-sm transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
<span className="text-[10px] uppercase tracking-widest text-[#2C2825]/60 block mb-2">Featured Excerpt</span>
<span className="text-sm uppercase font-normal tracking-wide">Echoes of Tomorrow</span>
</div>
</div>
</div>
</div>
</section><section className="bg-[#EBE9E4] px-6 py-24 border-t border-[#2C2825]/10">
<div className="max-w-[1600px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 scroll-fade">
<h2 className="text-3xl md:text-4xl tracking-tight uppercase font-normal max-w-lg text-balance">
        Critical Acclaim
      </h2>
<div className="flex gap-2">
<button aria-label="Previous Review" className="w-8 h-8 flex items-center justify-center border border-[#2C2825]/20 hover:bg-[#2C2825] hover:text-[#F7F5F0] transition-colors">
<iconify-icon icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button aria-label="Next Review" className="w-8 h-8 flex items-center justify-center border border-[#2C2825]/20 hover:bg-[#2C2825] hover:text-[#F7F5F0] transition-colors">
<iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-[#F7F5F0] p-8 md:p-10 flex flex-col justify-between min-h-[300px] scroll-fade hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
<div className="flex gap-1 text-[#C27A63] mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-lg md:text-xl font-normal leading-relaxed mb-8 text-balance">
          "A masterclass in world-building. Doe crafts a universe so vivid, it demands to be lived in. Truly unforgettable."
        </p>
<div className="text-xs uppercase tracking-widest text-[#2C2825]/50 flex items-center gap-2">
<span className="w-4 h-[1px] bg-[#2C2825]/20"></span>
          The Times
        </div>
</div>
<div className="bg-[#F7F5F0] p-8 md:p-10 flex flex-col justify-between min-h-[300px] scroll-fade hover:shadow-xl hover:-translate-y-1 transition-all duration-500" style={{transitionDelay: '150ms'}}>
<div className="flex gap-1 text-[#C27A63] mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-lg md:text-xl font-normal leading-relaxed mb-8 text-balance">
          "Evocative, haunting, and brilliantly paced. The most compelling narrative I've read this entire decade."
        </p>
<div className="text-xs uppercase tracking-widest text-[#2C2825]/50 flex items-center gap-2">
<span className="w-4 h-[1px] bg-[#2C2825]/20"></span>
          Literary Review
        </div>
</div>
<div className="bg-[#F7F5F0] p-8 md:p-10 flex flex-col justify-between min-h-[300px] scroll-fade hover:shadow-xl hover:-translate-y-1 transition-all duration-500" style={{transitionDelay: '300ms'}}>
<div className="flex gap-1 text-[#C27A63] mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-lg md:text-xl font-normal leading-relaxed mb-8 text-balance">
          "She doesn't just write stories; she constructs emotional architecture. Prepare to be completely immersed."
        </p>
<div className="text-xs uppercase tracking-widest text-[#2C2825]/50 flex items-center gap-2">
<span className="w-4 h-[1px] bg-[#2C2825]/20"></span>
          Guardian
        </div>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative h-[600px] w-full bg-[#EBE9E4] overflow-hidden group">
<img alt="Architecture" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ef35cc34-b859-4a06-aead-1a23ed29140e_3840w.png"/>

<div className="absolute top-8 left-8 w-48 bg-[#F7F5F0] p-3 shadow-2xl flex flex-col gap-2 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
<img alt="Detail" className="w-full aspect-square object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cffc2604-ce05-43fc-a3f8-383baa32fd19_3840w.png"/>
<div className="flex justify-between items-center text-xs uppercase tracking-widest pt-1 border-t border-[#2C2825]/10 mt-1">
<span>Author</span>
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="scroll-slide-up flex flex-col items-start max-w-md lg:ml-12">
<h2 className="text-4xl md:text-5xl tracking-tight uppercase font-normal leading-tight mb-6 text-balance">
              Writing the human
              <br/>
              experience
            </h2>
<p className="text-sm text-[#2C2825]/70 mb-10 leading-relaxed">
              Jane Doe is a New York Times bestselling author known for her
              evocative prose and complex characters. Her work explores the
              intersections of memory, time, and identity.
            </p>
<a className="inline-block bg-[#C27A63] text-white text-xs uppercase tracking-widest py-3 px-8 hover:bg-[#2C2825] transition-colors duration-300" href="#">
              Read Biography
            </a>
</div>
</div>
</section>

<section className="bg-[#EBE9E4] px-6 py-24">
<div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-5 scroll-fade">
<div className="bg-white p-6 max-w-sm mb-12 shadow-xl shadow-black/5 -mt-10 relative z-10 hidden lg:block">
<span className="text-xs uppercase tracking-widest text-[#2C2825]/50 mb-2 block">
                Next Event
              </span>
<img alt="Item" className="w-full aspect-[4/3] object-cover mb-4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c81b2af1-393a-4ee6-8b2e-8c5d8e1d63f5_3840w.png"/>
<div className="flex justify-between items-center text-sm font-normal uppercase">
<span>London Book Fair</span>
<span>Oct 12-14</span>
</div>
</div>
<h2 className="text-4xl md:text-5xl tracking-tight uppercase font-normal leading-tight mb-4 text-balance">
              Reader Questions?
              <br/>
              Answered here.
            </h2>
<p className="text-sm text-[#2C2825]/70 max-w-md leading-relaxed">
              Find quick solutions to common queries about book signings,
              international shipping, and upcoming releases.
            </p>
</div>
<div className="lg:col-span-7 flex flex-col justify-center">
<div className="accordion-group border-t border-[#2C2825]/10">

<div className="accordion-item border-b border-[#2C2825]/10 py-5">
<button className="accordion-btn w-full flex justify-between items-center text-left hover:text-[#C27A63] transition-colors group">
<span className="text-sm md:text-base font-normal flex gap-4">
<span className="text-[#2C2825]/40 text-xs">01.</span>
                    When is your next book coming out?
                  </span>
<iconify-icon className="transform transition-transform duration-300 group-[.active]:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content overflow-hidden max-h-0 transition-all duration-500 ease-in-out opacity-0">
<p className="text-sm text-[#2C2825]/70 pt-4 pl-8 pb-2 leading-relaxed">
                    My next novel is currently in the editing phase and is
                    slated for a Fall 2024 release. Stay tuned to the newsletter
                    for exclusive cover reveals.
                  </p>
</div>
</div>

<div className="accordion-item border-b border-[#2C2825]/10 py-5">
<button className="accordion-btn w-full flex justify-between items-center text-left hover:text-[#C27A63] transition-colors group">
<span className="text-sm md:text-base font-normal flex gap-4">
<span className="text-[#2C2825]/40 text-xs">02.</span>
                    Do you do personalized book signings?
                  </span>
<iconify-icon className="transform transition-transform duration-300 group-[.active]:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content overflow-hidden max-h-0 transition-all duration-500 ease-in-out opacity-0">
<p className="text-sm text-[#2C2825]/70 pt-4 pl-8 pb-2 leading-relaxed">
                    Yes, personalized signed copies can be ordered through this
                    website during special promotional windows.
                  </p>
</div>
</div>

<div className="accordion-item border-b border-[#2C2825]/10 py-5">
<button className="accordion-btn w-full flex justify-between items-center text-left hover:text-[#C27A63] transition-colors group active">
<span className="text-sm md:text-base font-normal flex gap-4">
<span className="text-[#2C2825]/40 text-xs">03.</span>
                    Are your books available in other languages?
                  </span>
<iconify-icon className="transform transition-transform duration-300 group-[.active]:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content overflow-hidden max-h-[200px] transition-all duration-500 ease-in-out opacity-100">
<p className="text-sm text-[#2C2825]/70 pt-4 pl-8 pb-2 leading-relaxed">
                    Currently, my works are translated into 15 languages. Check
                    with your local publishers or Amazon for specific regional
                    availability.
                  </p>
</div>
</div>

<div className="accordion-item border-b border-[#2C2825]/10 py-5">
<button className="accordion-btn w-full flex justify-between items-center text-left hover:text-[#C27A63] transition-colors group">
<span className="text-sm md:text-base font-normal flex gap-4">
<span className="text-[#2C2825]/40 text-xs">04.</span>
                    How long does shipping take for signed copies?
                  </span>
<iconify-icon className="transform transition-transform duration-300 group-[.active]:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content overflow-hidden max-h-0 transition-all duration-500 ease-in-out opacity-0">
<p className="text-sm text-[#2C2825]/70 pt-4 pl-8 pb-2 leading-relaxed">
                    Signed copies typically take 2-3 weeks to process and ship,
                    as I sign them in batches.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="px-6 pt-16 pb-8 border-t border-[#2C2825]/10 text-[#2C2825] bg-[#F7F5F0]">
<div className="max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
<div className="flex flex-col">
<h2 className="text-2xl font-light tracking-tight uppercase mb-4">Jane Doe</h2>
<p className="text-sm text-[#2C2825]/60 leading-relaxed font-light max-w-xs">
              Award-winning author crafting stories that linger. Based in the Pacific Northwest, weaving tales of magic and reality.
            </p>
</div>
<div className="">
<h3 className="text-xs uppercase tracking-widest text-[#2C2825] mb-6 font-light">Explore</h3>
<nav className="flex flex-col gap-3 text-sm text-[#2C2825]/70 font-light">
<a className="hover:text-[#C27A63] transition-colors w-fit" href="#">Books &amp; Publications</a>
<a className="hover:text-[#C27A63] transition-colors w-fit" href="#">About the Author</a>
<a className="hover:text-[#C27A63] transition-colors w-fit" href="#">Upcoming Events</a>
<a className="hover:text-[#C27A63] transition-colors w-fit" href="#">Personal Journal</a>
</nav>
</div>
<div className="">
<h3 className="text-xs uppercase tracking-widest text-[#2C2825] mb-6 font-light">Connect</h3>
<nav className="flex flex-col gap-3 text-sm text-[#2C2825]/70 font-light">
<a className="hover:text-[#C27A63] transition-colors w-fit" href="#">Instagram</a>
<a className="hover:text-[#C27A63] transition-colors w-fit" href="#">Goodreads</a>
<a className="hover:text-[#C27A63] transition-colors w-fit" href="#">Substack</a>
<a className="hover:text-[#C27A63] transition-colors w-fit" href="#">Press Inquiries</a>
</nav>
</div>
<div className="">
<h3 className="text-xs uppercase tracking-widest text-[#2C2825] mb-6 font-light">Newsletter</h3>
<p className="text-sm text-[#2C2825]/60 mb-4 font-light">
              Receive updates on new releases, events, and exclusive insights directly to your inbox.
            </p>
<form className="flex flex-col mt-4">
<div className="relative">
<input className="w-full bg-transparent border-b border-[#2C2825]/20 py-2 text-sm focus:outline-none focus:border-[#C27A63] transition-colors placeholder:text-[#2C2825]/40 text-[#2C2825] font-light pr-8" placeholder="Your email address" required="" type="email"/>
<button aria-label="Subscribe" className="absolute right-0 top-1/2 -translate-y-1/2 text-[#2C2825]/40 hover:text-[#C27A63] transition-colors" type="submit">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</form>
</div>
</div>
<div className="pt-8 border-t border-[#2C2825]/10 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-[#2C2825]/60 gap-6 md:gap-4 font-light">
<span>© 2024 Jane Doe. All rights reserved.</span>
<div className="flex flex-wrap justify-center gap-6 md:gap-8">
<a className="hover:text-[#C27A63] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#C27A63] transition-colors" href="#">Terms of Service</a>
<a className="hover:text-[#C27A63] transition-colors" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
