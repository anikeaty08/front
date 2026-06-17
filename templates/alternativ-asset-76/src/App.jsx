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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      import { Renderer, Program, Mesh, Color, Triangle } from 'https://cdn.jsdelivr.net/npm/ogl@1.0.0/+esm';

      const VERT = `#version 300 es
      in vec2 position;
      void main() {
          gl_Position = vec4(position, 0.0, 1.0);
      }`;

      const FRAG = `#version 300 es
      precision highp float;

      uniform float uTime;
      uniform float uAmplitude;
      uniform vec3 uColorStops[3];
      uniform vec2 uResolution;
      uniform float uBlend;

      out vec4 fragColor;

      vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

      float snoise(vec2 v){
          const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy));
          vec2 x0 = v - i + dot(i, C.xx);
          vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod(i, 289.0);
          vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
          vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
          m = m * m;
          m = m * m;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
          vec3 g;
          g.x  = a0.x  * x0.x  + h.x  * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
      }

      struct ColorStop { vec3 color; float position; };

      #define COLOR_RAMP(colors, factor, finalColor) { \
          int index = 0; \
          for (int i = 0; i < 2; i++) { \
              ColorStop currentColor = colors[i]; \
              bool isInBetween = currentColor.position <= factor; \
              index = int(mix(float(index), float(i), float(isInBetween))); \
          } \
          ColorStop currentColor = colors[index]; \
          ColorStop nextColor = colors[index + 1]; \
          float range = nextColor.position - currentColor.position; \
          float lerpFactor = (factor - currentColor.position) / range; \
          finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
      }

      void main() {
          vec2 uv = gl_FragCoord.xy / uResolution;
          ColorStop colors[3];
          colors[0] = ColorStop(uColorStops[0], 0.0);
          colors[1] = ColorStop(uColorStops[1], 0.5);
          colors[2] = ColorStop(uColorStops[2], 1.0);
          vec3 rampColor;
          COLOR_RAMP(colors, uv.x, rampColor);
          float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
          height = exp(height);
          height = (uv.y * 2.0 - height + 0.2);
          float intensity = 0.6 * height;
          float midPoint = 0.20;
          float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
          vec3 auroraColor = intensity * rampColor;
          fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
      }
      `;

      function initAurora() {
          const ctn = document.getElementById('aurora-container');
          if (!ctn) return;

          const renderer = new Renderer({ alpha: true, premultipliedAlpha: true, antialias: true });
          const gl = renderer.gl;
          gl.clearColor(0, 0, 0, 0);
          gl.enable(gl.BLEND);
          gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

          let program;

          function resize() {
              const width = ctn.offsetWidth;
              const height = ctn.offsetHeight;
              renderer.setSize(width, height);
              if (program) {
                  program.uniforms.uResolution.value = [width, height];
              }
          }
          window.addEventListener('resize', resize);

          // Nexora Golden Amber Aurora Colors
          const hexColors = ['#b45309', '#fcd34d', '#78350f'];
          const colorStopsArray = hexColors.map(hex => {
              const c = new Color(hex);
              return [c.r, c.g, c.b];
          });

          program = new Program(gl, {
              vertex: VERT,
              fragment: FRAG,
              uniforms: {
                  uTime: { value: 0 },
                  uAmplitude: { value: 1.2 },
                  uColorStops: { value: colorStopsArray },
                  uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
                  uBlend: { value: 0.6 }
              }
          });

          const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });
          ctn.appendChild(gl.canvas);

          let animateId;
          const update = t => {
              animateId = requestAnimationFrame(update);
              program.uniforms.uTime.value = (t * 0.01) * 1.0 * 0.1;
              renderer.render({ scene: mesh });
          };
          animateId = requestAnimationFrame(update);
          resize();
      }

      initAurora();
    


      document.addEventListener("DOMContentLoaded", () => {
          gsap.registerPlugin(ScrollTrigger);

          // --- 1. Hero 3D Wrapper Interactivity ---
          const cardsWrapper = document.getElementById('cards-wrapper');
          if(cardsWrapper) {
              // Set default orientation so we can see the 3D edges right away
              gsap.set(cardsWrapper, {
                  rotationY: -15,
                  rotationX: 10,
                  rotationZ: -5,
                  transformPerspective: 2000
              });

              document.addEventListener('mousemove', (e) => {
                  const xNorm = (e.clientX / window.innerWidth) - 0.5;
                  const yNorm = (e.clientY / window.innerHeight) - 0.5;

                  gsap.to(cardsWrapper, {
                      rotationY: -15 + (xNorm * 30),
                      rotationX: 10 - (yNorm * 30),
                      duration: 0.8,
                      ease: "power2.out",
                      overwrite: "auto"
                  });
              });
          }

          // --- 2. Custom Toggle logic ---
          const tMain = document.getElementById('toggle-mainnet');
          const tTest = document.getElementById('toggle-testnet');
          if(tMain && tTest) {
              const setToggle = (active, inactive) => {
                  active.classList.add('bg-white', 'shadow-sm', 'text-zinc-900', 'border', 'border-zinc-200/50');
                  active.classList.remove('text-zinc-400');
                  inactive.classList.remove('bg-white', 'shadow-sm', 'text-zinc-900', 'border', 'border-zinc-200/50');
                  inactive.classList.add('text-zinc-400');
              };
              tMain.addEventListener('click', () => setToggle(tMain, tTest));
              tTest.addEventListener('click', () => setToggle(tTest, tMain));
          }

          // --- 3. Scroll Reveal Animations ---
          const sectionsToAnimate = document.querySelectorAll('main, section, footer');
          sectionsToAnimate.forEach(section => {
              const targets = section.querySelectorAll('.reveal-target');
              if (targets.length > 0) {
                  gsap.set(targets, { opacity: 0, y: 30, filter: 'blur(8px)', autoAlpha: 0 });

                  ScrollTrigger.create({
                      trigger: section,
                      start: "top 85%",
                      onEnter: () => {
                          gsap.to(targets, {
                              autoAlpha: 1,
                              opacity: 1,
                              y: 0,
                              filter: 'blur(0px)',
                              duration: 1,
                              stagger: 0.15,
                              ease: "power3.out",
                              onComplete: function() {
                                  gsap.set(targets, { clearProps: "filter" });
                              }
                          });
                      },
                      once: true
                  });
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
      

<main className="flex flex-col overflow-hidden lg:py-32 w-full pt-24 pb-24 relative">

<div className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-50 mix-blend-screen" id="aurora-container"><canvas height="1075" style={{width: '1845px', height: '1075px'}} width="1845"></canvas><canvas height="1075" style={{width: '1845px', height: '1075px'}} width="1845"></canvas></div>

<nav className="absolute top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50 flex justify-between items-center px-6 py-3 rounded-full border border-white/10 bg-[#0A0A0A]/60 backdrop-blur-md shadow-2xl reveal-target">
<div className="flex items-center gap-2 text-white">
<span className="font-semibold tracking-widest text-sm">NEXORA</span>
</div>
<div className="hidden md:flex items-center gap-10 text-white/50 text-xs uppercase tracking-widest font-medium">
<a className="hover:text-white transition-colors" href="#strategy">
            Strategy
          </a>
<a className="hover:text-white transition-colors" href="#performance">
            Performance
          </a>
<a className="hover:text-white transition-colors" href="#terms">Terms</a>
<a className="hover:text-white transition-colors" href="#contact">
            Contact
          </a>
</div>
<button className="flex items-center gap-2 text-white text-xs border border-white/10 bg-white/5 backdrop-blur-md rounded-full px-5 py-2 hover:bg-white/10 transition-all">
<iconify-icon className="text-base text-slate-900" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-normal">Investor Portal</span>
</button>
</nav>
<div className="flex-1 flex flex-col lg:flex-row w-full relative pt-12 lg:pt-0 z-10 max-w-[100rem] mx-auto">

<div className="w-full lg:w-1/2 p-8 lg:p-24 flex flex-col justify-center relative z-20">
<div className="mb-5 opacity-80 inline-flex items-center gap-2 reveal-target text-slate-900">
<span className="italic text-sm md:text-base text-[#E5A93C]/80">
              { Alternative Asset Management }
            </span>
</div>
<h1 className="text-white text-4xl md:text-6xl xl:text-7xl tracking-tight leading-[1.05] mb-8 reveal-target">
            Chasing trust &amp;
            <br/>
<span className="italic text-white/60">
              consistency in digital assets.
            </span>
</h1>
<p className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg font-light mb-12 reveal-target">
            Founded in Dubai, Nexora Ventures offers a risk-managed, highly
            liquid investment structure combining digital assets and commodities
            to unlock superior portfolio diversification.
          </p>
<div className="flex flex-wrap gap-6 mb-16 reveal-target">
<div className="rounded-full shadow-[0_0_20px_rgba(229,169,60,0.15)]" style={{background: 'linear-gradient(145deg, rgba(229,169,60,0.5) 0%, rgba(229,169,60,0.05) 100%)', padding: '1px'}}>
<button className="bg-white text-black px-8 py-4 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all flex items-center gap-2">
                Explore Strategy
                <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<button className="text-white/70 border border-white/10 px-8 py-4 rounded-full text-sm font-normal hover:bg-white/5 transition-all hover:text-slate-900">
              View Track Record
            </button>
</div>

<div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-6 max-w-sm reveal-target">
<div>
<div className="text-white text-2xl font-medium tracking-tight mb-1">
                47.26%
              </div>
<div className="text-white/40 text-xs font-mono tracking-wider uppercase">
                Net Compounded Return
              </div>
</div>
<div>
<div className="text-white text-2xl font-medium tracking-tight mb-1">
                3.94%
              </div>
<div className="text-white/40 text-xs font-mono tracking-wider uppercase">
                Avg. Net Monthly
              </div>
</div>
</div>
</div>

<div className="lg:w-1/2 lg:h-auto z-10 overflow-hidden flex reveal-target w-full h-[60vh] relative items-center justify-center">

<div className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-screen flex items-center justify-center text-slate-900">
<svg className="absolute" fill="none" height="100%" preserveaspectratio="xMidYMid slice" viewbox="0 0 800 800" width="100%" xmlns="http://www.w3.org/2000/svg">
<circle cx="400" cy="400" r="300" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="0.5"></circle>
<circle cx="400" cy="400" r="150" stroke="currentColor" strokeWidth="0.5"></circle>
<path d="M 100 400 L 700 400" stroke="currentColor" strokeWidth="0.5"></path>
<path d="M 400 100 L 400 700" stroke="currentColor" strokeWidth="0.5"></path>
<rect fill="currentColor" height="4" width="4" x="398" y="398"></rect>
</svg>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="relative w-56 md:w-72 aspect-square xl:scale-110" id="cards-wrapper" style={{transformStyle: 'preserve-3d'}}>

<div className="absolute inset-0 flex items-center justify-center pointer-events-auto z-10" style={{transform: 'translate3d(55%, -45%, -80px)', transformStyle: 'preserve-3d'}}>
<div className="float-delay-3" style={{transformStyle: 'preserve-3d'}}>
<div className="relative w-20 h-20 md:w-28 md:h-28 group transition-transform duration-700 ease-out hover:scale-110" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute inset-0 rounded-full bg-zinc-600 border border-black/30" style={{transform: 'translateZ(-1px)'}}></div>
<div className="absolute inset-0 rounded-full bg-zinc-800 border border-black/30" style={{transform: 'translateZ(-2px)'}}></div>
<div className="absolute inset-0 rounded-full bg-zinc-600 border border-black/30" style={{transform: 'translateZ(-3px)'}}></div>
<div className="absolute inset-0 rounded-full bg-zinc-800 border border-black/30" style={{transform: 'translateZ(-4px)'}}></div>
<div className="absolute inset-0 rounded-full bg-zinc-900 border border-black/50" style={{transform: 'translateZ(-5px)', boxShadow: '0 15px 30px rgba(0,0,0,0.6)'}}></div>
<div className="absolute inset-0 rounded-full backdrop-blur-md" style={{transform: 'translateZ(1px)', background: 'linear-gradient(145deg, rgba(229,169,60,0.15) 0%, rgba(255,255,255,0.02) 100%)', padding: '1px'}}>
<div className="w-full h-full rounded-full bg-[#101010]/95 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#E5A93C]/5 to-[#E5A93C]/10 opacity-50"></div>
<div className="absolute inset-2 rounded-full border border-white/10 flex items-center justify-center shadow-[inset_0_0_10px_rgba(229,169,60,0.02)]">
<div className="absolute inset-1 rounded-full border border-white/5 border-dashed animate-[spin_25s_linear_infinite]"></div>
<iconify-icon className="text-3xl md:text-4xl grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" icon="logos:solana"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-auto z-20" style={{transform: 'translate3d(5%, -5%, 0px)', transformStyle: 'preserve-3d'}}>
<div className="float-delay-2" style={{transformStyle: 'preserve-3d'}}>
<div className="relative w-28 h-28 md:w-36 md:h-36 group transition-transform duration-700 ease-out hover:scale-110" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute inset-0 rounded-full bg-zinc-600 border border-black/40" style={{transform: 'translateZ(-1px)'}}></div>
<div className="absolute inset-0 rounded-full bg-zinc-800 border border-black/40" style={{transform: 'translateZ(-2px)'}}></div>
<div className="absolute inset-0 rounded-full bg-zinc-600 border border-black/40" style={{transform: 'translateZ(-3px)'}}></div>
<div className="absolute inset-0 rounded-full bg-zinc-800 border border-black/40" style={{transform: 'translateZ(-4px)'}}></div>
<div className="absolute inset-0 rounded-full bg-zinc-600 border border-black/40" style={{transform: 'translateZ(-5px)'}}></div>
<div className="absolute inset-0 rounded-full bg-zinc-800 border border-black/40" style={{transform: 'translateZ(-6px)'}}></div>
<div className="absolute inset-0 rounded-full bg-zinc-900 border border-black/50" style={{transform: 'translateZ(-7px)', boxShadow: '0 20px 40px rgba(0,0,0,0.7)'}}></div>
<div className="absolute inset-0 rounded-full backdrop-blur-md" style={{transform: 'translateZ(1px)', background: 'linear-gradient(145deg, rgba(229,169,60,0.2) 0%, rgba(255,255,255,0.02) 100%)', padding: '1px'}}>
<div className="w-full h-full rounded-full bg-[#121212]/95 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#E5A93C]/10 via-transparent to-black opacity-80"></div>
<div className="absolute inset-2.5 rounded-full border border-[#E5A93C]/20 flex items-center justify-center bg-black/40 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
<div className="absolute inset-1.5 rounded-full border border-[#E5A93C]/10 border-dotted animate-[spin_40s_linear_infinite_reverse]"></div>
<iconify-icon className="text-4xl md:text-5xl grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" icon="logos:ethereum"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-auto z-30" style={{transform: 'translate3d(-40%, 35%, 100px)', transformStyle: 'preserve-3d'}}>
<div className="float-delay-1" style={{transformStyle: 'preserve-3d'}}>
<div className="relative w-36 h-36 md:w-48 md:h-48 group transition-transform duration-700 ease-out hover:scale-110" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute inset-0 rounded-full bg-zinc-600 border border-black/50" style={{transform: 'translateZ(-1px)'}}></div>
<div className="absolute inset-0 rounded-full bg-zinc-800 border border-black/50" style={{transform: 'translateZ(-2px)'}}></div>
<div className="absolute inset-0 rounded-full bg-zinc-600 border border-black/50" style={{transform: 'translateZ(-3px)'}}></div>
<div className="absolute inset-0 rounded-full bg-zinc-800 border border-black/50" style={{transform: 'translateZ(-4px)'}}></div>
<div className="absolute inset-0 rounded-full bg-zinc-600 border border-black/50" style={{transform: 'translateZ(-5px)'}}></div>
<div className="absolute inset-0 rounded-full bg-zinc-800 border border-black/50" style={{transform: 'translateZ(-6px)'}}></div>
<div className="absolute inset-0 rounded-full bg-zinc-600 border border-black/50" style={{transform: 'translateZ(-7px)'}}></div>
<div className="absolute inset-0 rounded-full bg-zinc-800 border border-black/50" style={{transform: 'translateZ(-8px)'}}></div>
<div className="absolute inset-0 rounded-full bg-zinc-900 border border-black/50" style={{transform: 'translateZ(-9px)', boxShadow: '0 30px 60px rgba(0,0,0,0.8)'}}></div>
<div className="absolute inset-0 rounded-full backdrop-blur-xl" style={{transform: 'translateZ(1px)', background: 'linear-gradient(145deg, rgba(229,169,60,0.25) 0%, rgba(255,255,255,0.05) 100%)', padding: '1px'}}>
<div className="w-full h-full rounded-full bg-[#141414]/95 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#E5A93C]/10 to-[#E5A93C]/20 opacity-60"></div>
<div className="absolute inset-3 rounded-full border border-white/20 flex items-center justify-center bg-black/60 shadow-[inset_0_0_20px_rgba(229,169,60,0.1)]">
<div className="absolute inset-2 rounded-full border border-[#E5A93C]/20 border-dashed animate-[spin_30s_linear_infinite]"></div>
<iconify-icon className="text-6xl md:text-7xl grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 drop-shadow-xl" icon="logos:bitcoin"></iconify-icon>
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

<div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/5 bg-black/20 backdrop-blur-sm z-20 reveal-target py-4" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-16 pr-16 opacity-70 hover:opacity-100 transition-opacity duration-500">
<div className="flex items-center gap-3 text-white/50 font-medium tracking-tight transition-colors cursor-default hover:text-slate-900">
<iconify-icon className="text-xl grayscale opacity-70" icon="logos:bitcoin"></iconify-icon>
            Bitcoin
          </div>
<div className="flex items-center gap-3 text-white/50 font-medium tracking-tight transition-colors cursor-default hover:text-slate-900">
<iconify-icon className="text-xl grayscale opacity-70" icon="logos:ethereum"></iconify-icon>
            Ethereum
          </div>
<div className="flex items-center gap-3 text-white/50 font-medium tracking-tight transition-colors cursor-default hover:text-slate-900">
<iconify-icon className="text-xl grayscale opacity-70" icon="logos:solana"></iconify-icon>
            Solana
          </div>
<div className="flex items-center gap-3 text-white/50 font-medium tracking-tight transition-colors cursor-default hover:text-slate-900">
<iconify-icon className="text-xl grayscale opacity-70" icon="logos:tether"></iconify-icon>
            Tether
          </div>
<div className="flex items-center gap-3 text-white/50 font-medium tracking-tight transition-colors cursor-default hover:text-slate-900">
<iconify-icon className="text-xl grayscale opacity-70" icon="logos:chainlink"></iconify-icon>
            Chainlink
          </div>
<div className="flex items-center gap-3 text-white/50 font-medium tracking-tight transition-colors cursor-default hover:text-slate-900">
<iconify-icon className="text-xl grayscale opacity-70" icon="logos:avalanche"></iconify-icon>
            Avalanche
          </div>
<div className="flex items-center gap-3 text-white/50 font-medium tracking-tight transition-colors cursor-default hover:text-slate-900">
<iconify-icon className="text-xl grayscale opacity-70" icon="logos:bitcoin"></iconify-icon>
            Bitcoin
          </div>
<div className="flex items-center gap-3 text-white/50 font-medium tracking-tight transition-colors cursor-default hover:text-slate-900">
<iconify-icon className="text-xl grayscale opacity-70" icon="logos:ethereum"></iconify-icon>
            Ethereum
          </div>
<div className="flex items-center gap-3 text-white/50 font-medium tracking-tight transition-colors cursor-default hover:text-slate-900">
<iconify-icon className="text-xl grayscale opacity-70" icon="logos:solana"></iconify-icon>
            Solana
          </div>
<div className="flex items-center gap-3 text-white/50 font-medium tracking-tight transition-colors cursor-default hover:text-slate-900">
<iconify-icon className="text-xl grayscale opacity-70" icon="logos:tether"></iconify-icon>
            Tether
          </div>
<div className="flex items-center gap-3 text-white/50 font-medium tracking-tight transition-colors cursor-default hover:text-slate-900">
<iconify-icon className="text-xl grayscale opacity-70" icon="logos:chainlink"></iconify-icon>
            Chainlink
          </div>
<div className="flex items-center gap-3 text-white/50 font-medium tracking-tight transition-colors cursor-default hover:text-slate-900">
<iconify-icon className="text-xl grayscale opacity-70" icon="logos:avalanche"></iconify-icon>
            Avalanche
          </div>
</div>
</div>
</main>

<section className="w-full bg-white py-24 md:py-32 px-6 lg:px-24 relative z-20" id="terms">
<div className="max-w-[90rem] mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
<div className="max-w-2xl reveal-target">
<span className="text-zinc-400 text-xs font-normal uppercase tracking-widest mb-4 block">
              Fund Structure &amp; Terms
            </span>
<h2 className="text-zinc-900 text-3xl md:text-5xl tracking-tight font-normal leading-tight">
              Structured for security.
              <br/>
              Optimized for growth.
            </h2>
</div>

<div className="flex items-center gap-4 bg-zinc-50 p-1.5 rounded-2xl border border-zinc-100 reveal-target">
<button className="px-5 py-2 text-xs font-normal rounded-xl bg-white shadow-sm text-zinc-900 transition-all border border-zinc-200/50" id="toggle-mainnet">
              Compounding Strategy
            </button>
<button className="px-5 py-2 text-xs font-normal rounded-xl text-zinc-400 hover:text-zinc-600 transition-all" id="toggle-testnet">
              Monthly Strategy
            </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200 rounded-3xl overflow-hidden">
<div className="bg-white p-10 group hover:bg-zinc-50 transition-colors reveal-target">
<div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#E5A93C] group-hover:text-white transition-all text-slate-900">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-zinc-900 text-xl font-normal tracking-tight mb-4">
              Minimum Investment
            </h3>
<p className="text-zinc-500 text-sm leading-relaxed mb-8">
              Our fund provides an accessible entry point while maintaining
              institutional-grade execution and rigorous capital preservation
              parameters.
            </p>
<div className="pt-6 border-t border-zinc-100 flex items-center justify-between">
<span className="text-zinc-400 text-xs font-mono">ENTRY: $5,000</span>
<iconify-icon className="text-zinc-300 group-hover:text-[#E5A93C] text-xl transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="bg-white p-10 group hover:bg-zinc-50 transition-colors reveal-target">
<div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#E5A93C] group-hover:text-white transition-all text-slate-900">
<iconify-icon className="text-2xl" icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-zinc-900 text-xl font-normal tracking-tight mb-4">
              Lock-up &amp; Redemption
            </h3>
<p className="text-zinc-500 text-sm leading-relaxed mb-8">
              Designed with highly liquid underlying assets to offer exceptional
              flexibility, ensuring you remain agile in dynamic markets.
            </p>
<div className="pt-6 border-t border-zinc-100 flex items-center justify-between">
<span className="text-zinc-400 text-xs font-mono">
                100 DAYS / 45 DAYS
              </span>
<iconify-icon className="text-zinc-300 group-hover:text-[#E5A93C] text-xl transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="bg-white p-10 group hover:bg-zinc-50 transition-colors reveal-target">
<div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#E5A93C] group-hover:text-white transition-all text-slate-900">
<iconify-icon className="text-2xl" icon="solar:pie-chart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-zinc-900 text-xl font-normal tracking-tight mb-4">
              Aligned Fee Structure
            </h3>
<p className="text-zinc-500 text-sm leading-relaxed mb-8">
              We don't charge management fees. Our success is entirely tied to
              yours, driven exclusively by the alpha we generate for the
              portfolio.
            </p>
<div className="pt-6 border-t border-zinc-100 flex items-center justify-between">
<span className="text-zinc-400 text-xs font-mono">
                0% MGMT / 20% PERF
              </span>
<iconify-icon className="text-zinc-300 group-hover:text-[#E5A93C] text-xl transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] z-10 border-white/10 border-t pt-24 pb-24 relative" id="performance">
<div className="mx-auto max-w-7xl px-4 pb-8 md:px-6">
<div className="max-w-3xl text-center mx-auto">
<p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E5A93C]/20 bg-[#E5A93C]/10 px-3 py-1 text-xs font-normal reveal-target text-slate-900">
<iconify-icon className="text-base text-slate-900" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
            Active Trading Strategies
          </p>
<h2 className="sm:text-5xl md:text-6xl text-4xl font-normal tracking-tight text-white leading-tight reveal-target">
            Track your allocation.
          </h2>
<p className="mt-5 text-base md:text-lg text-slate-400 font-light reveal-target">
            Nexora Studio is a transparent terminal that lets you monitor
            historical performance, strategy splits, and compounding effects in
            real-time.
          </p>
<div className="flex flex-col gap-3 sm:flex-row mt-8 items-center justify-center reveal-target">
<button className="group hover:scale-95 transition-transform" style={{cursor: 'pointer', position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'radial-gradient(65.28% 65.28% at 50% 100%, rgba(251, 191, 36, 0.8) 0%, rgba(251, 191, 36, 0) 100%), linear-gradient(0deg, #b45309, #b45309)', borderRadius: '0.75rem', padding: '12px 18px', minHeight: '48px', minWidth: '102px'}} type="button">
<span className="" style={{position: 'absolute', inset: '1px', background: 'linear-gradient(177.95deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: 'calc(0.75rem - 1px)', zIndex: '0'}}></span>
<span className="" style={{position: 'absolute', inset: '2px', background: 'radial-gradient(65.28% 65.28% at 50% 100%, rgba(251, 191, 36, 0.8) 0%, rgba(251, 191, 36, 0) 100%), linear-gradient(0deg, #d97706, #d97706)', borderRadius: 'calc(0.75rem - 2px)', zIndex: '0'}}></span>
<div style={{overflow: 'hidden', width: '100%', height: '100%', pointerEvents: 'none', position: 'absolute', zIndex: '1'}}>
<i style={{bottom: '-10px', position: 'absolute', animation: 'floating-points 2.35s infinite ease-in-out 0.2s', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '10%'}}></i>
<i style={{bottom: '-10px', position: 'absolute', animation: 'floating-points 2.5s infinite ease-in-out 0.5s', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '30%', opacity: '0.7'}}></i>
<i style={{bottom: '-10px', position: 'absolute', animation: 'floating-points 2.2s infinite ease-in-out 0.1s', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '25%', opacity: '0.8'}}></i>
</div>
<span className="z-10 relative flex items-center justify-center gap-2 text-white text-sm font-normal">
                Access Portal
                <svg className="group-hover:translate-x-1 transition-transform w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto md:px-6 px-4 pb-12 reveal-target">
<div className="relative w-full overflow-hidden shadow-black/50 bg-gradient-to-b from-white/[0.04] to-white/[0.01] border-white/10 border rounded-2xl mx-auto shadow-2xl backdrop-blur-lg">

<div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-white/20"></span>
<span className="h-2.5 w-2.5 rounded-full bg-white/20"></span>
<span className="h-2.5 w-2.5 rounded-full bg-white/20"></span>
<div className="ml-3 hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-400 sm:flex font-mono">
<iconify-icon className="text-sm" icon="solar:sidebar-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                Nexora Studio — Account: Demo
              </div>
</div>
<div className="flex items-center gap-2">
<button className="hidden rounded-md border border-white/10 bg-white/5 p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors sm:inline-flex">
<iconify-icon className="text-base" icon="solar:share-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="rounded-md bg-white px-4 py-1.5 text-xs font-medium text-black hover:bg-zinc-200 transition-colors">
                Export CSV
              </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12">

<aside className="hidden md:block md:col-span-3 bg-black/40 border-white/10 border-r p-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-normal text-slate-300">
<iconify-icon className="text-sm text-slate-900" icon="solar:pie-chart-linear" strokeWidth="1.5"></iconify-icon>
                  Allocation
                </div>
</div>
<div className="space-y-1 text-slate-400">
<div className="bg-white/5 rounded-lg p-3 space-y-4">
<div className="space-y-1.5">
<div className="flex justify-between text-xs text-white/90">
<span>Digital Assets</span>
<span className="font-mono text-slate-900">70%</span>
</div>
<div className="w-full bg-white/10 rounded-full h-1.5">
<div className="h-1.5 rounded-full bg-slate-900" style={{width: '70%'}}></div>
</div>
</div>
<div className="space-y-1.5">
<div className="flex justify-between text-xs text-white/90">
<span>Commodities</span>
<span className="font-mono text-slate-600">15%</span>
</div>
<div className="w-full bg-white/10 rounded-full h-1.5">
<div className="h-1.5 rounded-full bg-slate-200" style={{width: '15%'}}></div>
</div>
</div>
<div className="space-y-1.5">
<div className="flex justify-between text-xs text-white/90">
<span>AI &amp; Emerging</span>
<span className="font-mono text-slate-950">15%</span>
</div>
<div className="w-full bg-white/10 rounded-full h-1.5">
<div className="h-1.5 rounded-full bg-slate-800" style={{width: '15%'}}></div>
</div>
</div>
</div>
<div className="bg-white/5 rounded-lg p-3 space-y-3 mt-2">
<div className="mb-1 flex items-center gap-2 text-white/90">
<iconify-icon className="text-sm" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Quick Stats</span>
</div>
<ul className="space-y-2 pl-1 text-xs font-light">
<li className="flex items-center justify-between text-white">
<span className="text-slate-400">Target Monthly</span>
<span className="font-mono text-white/90">2-4%</span>
</li>
<li className="flex items-center justify-between text-white">
<span className="text-slate-400">12M High</span>
<span className="font-mono text-emerald-400">+3.46%</span>
</li>
<li className="flex items-center justify-between text-white">
<span className="text-slate-400">Drawdown</span>
<span className="font-mono text-rose-400">-1.2%</span>
</li>
</ul>
</div>
</div>
</aside>

<main className="relative md:col-span-9 bg-black/50 min-h-[400px] flex flex-col">
<div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-xs text-slate-400">
<iconify-icon className="text-base text-slate-900" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
<span>Dataset</span>
<span className="rounded-md bg-[#E5A93C]/10 border border-[#E5A93C]/20 px-1.5 py-0.5 text-slate-900">
                  Live Data
                </span>
<span className="text-slate-600">|</span>
<span className="font-mono">Sync: OK</span>
</div>
<div className="p-4 sm:p-6 flex-1 overflow-x-auto">
<table className="w-full text-left whitespace-nowrap">
<thead>
<tr className="text-xs font-mono text-slate-500 uppercase tracking-widest border-b border-white/10">
<th className="pb-3 font-normal">Month</th>
<th className="pb-3 font-normal hidden sm:table-cell">
                        Primary Focus
                      </th>
<th className="pb-3 font-normal text-right">Net Return</th>
<th className="pb-3 font-normal text-right pl-4">Status</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-white/5">
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-4 text-white font-medium">March 2026</td>
<td className="py-4 text-slate-400 font-light text-xs hidden sm:table-cell">
                        Multi-Strategy
                      </td>
<td className="py-4 text-emerald-400 font-mono text-right">
                        + 1.94%
                      </td>
<td className="py-4 text-right pl-4">
<span className="inline-flex items-center rounded border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-xs font-mono uppercase tracking-widest text-emerald-400">
                          Live
                        </span>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-4 text-white font-medium">February 2026</td>
<td className="py-4 text-slate-400 font-light text-xs hidden sm:table-cell">
                        Multi-Strategy
                      </td>
<td className="py-4 text-emerald-400 font-mono text-right">
                        + 2.18%
                      </td>
<td className="py-4 text-right pl-4">
<span className="inline-flex items-center rounded border border-white/10 bg-white/5 px-2 py-1 text-xs font-mono uppercase tracking-widest text-slate-300">
                          Distributed
                        </span>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-4 text-white font-medium">January 2026</td>
<td className="py-4 text-slate-400 font-light text-xs hidden sm:table-cell">
                        Multi-Strategy
                      </td>
<td className="py-4 text-emerald-400 font-mono text-right">
                        + 2.35%
                      </td>
<td className="py-4 text-right pl-4">
<span className="inline-flex items-center rounded border border-white/10 bg-white/5 px-2 py-1 text-xs font-mono uppercase tracking-widest text-slate-300">
                          Distributed
                        </span>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-4 text-white font-medium">December 2025</td>
<td className="py-4 text-slate-400 font-light text-xs hidden sm:table-cell">
                        Multi-Strategy
                      </td>
<td className="py-4 text-emerald-400 font-mono text-right">
                        + 2.67%
                      </td>
<td className="py-4 text-right pl-4">
<span className="inline-flex items-center rounded border border-white/10 bg-white/5 px-2 py-1 text-xs font-mono uppercase tracking-widest text-slate-300">
                          Distributed
                        </span>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-4 text-white font-medium">November 2025</td>
<td className="py-4 text-slate-400 font-light text-xs hidden sm:table-cell">
                        Multi-Strategy
                      </td>
<td className="py-4 text-emerald-400 font-mono text-right">
                        + 2.66%
                      </td>
<td className="py-4 text-right pl-4">
<span className="inline-flex items-center rounded border border-white/10 bg-white/5 px-2 py-1 text-xs font-mono uppercase tracking-widest text-slate-300">
                          Distributed
                        </span>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-4 text-white font-medium">October 2025</td>
<td className="py-4 text-slate-400 font-light text-xs hidden sm:table-cell">
                        Multi-Strategy
                      </td>
<td className="py-4 text-emerald-400 font-mono text-right">
                        + 3.46%
                      </td>
<td className="py-4 text-right pl-4">
<span className="inline-flex items-center rounded border border-white/10 bg-white/5 px-2 py-1 text-xs font-mono uppercase tracking-widest text-slate-300">
                          Distributed
                        </span>
</td>
</tr>
</tbody>
</table>
</div>
</main>
</div>
</div>
</div>
</section>

<section className="max-w-7xl relative bg-white/5 border-white/10 border rounded-[2rem] mx-auto my-24 p-8 lg:p-12 backdrop-blur-md" id="strategy">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-10">

<div className="flex flex-col min-h-full justify-between">
<div>
<span className="text-xs font-normal uppercase tracking-widest block mb-4 reveal-target text-slate-900" style={{filter: 'blur(0px)'}}>
              Investment Philosophy
            </span>
<h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white reveal-target" style={{filter: 'blur(0px)'}}>
              A portfolio built for diverse market conditions.
            </h2>
<div className="mt-12 relative">
<div className="hidden sm:flex flex-col gap-8 relative text-white/70">
<div className="relative reveal-target" style={{filter: 'blur(0px)'}}>
<div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-[#E5A93C]/40 via-[#E5A93C]/10 to-transparent"></div>
<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-4 h-4 z-10 relative bg-[#0A0A0A] border-[#E5A93C]/50 border rounded-full mt-1 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
</div>
<div className="flex-1 pb-4">
<span className="text-sm font-medium text-white">
                        Futures &amp; Derivatives Trading
                      </span>
<p className="text-sm font-light text-white/50 mt-1.5 leading-relaxed">
                        Systematic directional and market-neutral approaches in
                        highly liquid digital asset derivatives.
                      </p>
</div>
</div>
</div>
<div className="relative reveal-target" style={{filter: 'blur(0px)'}}>
<div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-[#E5A93C]/40 via-[#E5A93C]/10 to-transparent"></div>
<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-4 h-4 rounded-full border border-[#E5A93C]/50 bg-[#0A0A0A] z-10 relative mt-1 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
</div>
<div className="flex-1 pb-4">
<span className="text-sm font-medium text-white">
                        DeFi Protocol Rotation
                      </span>
<p className="text-sm font-light text-white/50 mt-1.5 leading-relaxed">
                        Yield generation through liquidity provision and active
                        protocol rotation in decentralized finance.
                      </p>
</div>
</div>
</div>
<div className="relative reveal-target" style={{filter: 'blur(0px)'}}>
<div className="flex items-start gap-6">
<div className="flex-shrink-0 w-4 h-4 rounded-full border border-[#E5A93C]/50 bg-[#0A0A0A] z-10 relative mt-1 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
</div>
<div className="flex-1">
<span className="text-sm font-medium text-white">
                        Long-Short Crypto
                      </span>
<p className="text-sm font-light text-white/50 mt-1.5 leading-relaxed">
                        Capturing alpha via structural inefficiencies and
                        mispricings across various asset classes.
                      </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 relative mt-12 lg:mt-0">
<article className="relative overflow-hidden aspect-[4/3] bg-center bg-cover border border-white/10 hover:border-[#E5A93C]/30 rounded-2xl group reveal-target transition-colors" style={{filter: 'blur(0px)'}}>
<img alt="Abstract Financial Growth Chart" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48ce1223-d853-46fc-8cae-59aa717bfc7e_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/80"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center justify-center w-8 h-8 bg-black/40 border-[#E5A93C]/20 border rounded-full backdrop-blur-md text-slate-900">
<iconify-icon className="text-sm" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white text-lg font-medium tracking-tight leading-tight group-hover:text-[#E5A93C] transition-colors">
                Pre-Sale &amp; Early-Stage
              </p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/3] bg-center bg-cover border border-white/10 hover:border-[#E5A93C]/30 rounded-2xl group reveal-target transition-colors" style={{filter: 'blur(0px)'}}>
<img alt="Commodities Trading" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/80"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center justify-center w-8 h-8 bg-black/40 border-[#E5A93C]/20 border rounded-full backdrop-blur-md text-slate-900">
<iconify-icon className="text-sm" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white text-lg font-medium tracking-tight leading-tight group-hover:text-[#E5A93C] transition-colors">
                Commodities Trading
              </p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/5] bg-center bg-cover border border-white/10 hover:border-[#E5A93C]/30 rounded-2xl group reveal-target col-span-2 sm:col-span-1 transition-colors" style={{filter: 'blur(0.0017px)'}}>
<img alt="Data Analyst at Multi-Screen Night Workspace" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab6783df-8567-4942-8138-baa36c24245b_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/80"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center justify-center w-8 h-8 bg-black/40 border-[#E5A93C]/20 border rounded-full backdrop-blur-md text-slate-900">
<iconify-icon className="text-sm" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white text-lg font-medium tracking-tight leading-tight group-hover:text-[#E5A93C] transition-colors">
                AI &amp; Emerging Sectors
              </p>
</div>
</article>
</div>
</div>
</section>

<section className="overflow-hidden bg-zinc-50 border-white/10 border-t py-24 lg:py-32 relative" id="contact">
<div className="max-w-[90rem] mx-auto px-6 lg:px-24 z-10 relative">

<div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10">
<h2 className="text-3xl md:text-5xl tracking-tight text-zinc-900 max-w-3xl leading-tight font-normal reveal-target" style={{filter: 'blur(0px)'}}>
            Helping visionary investors engineer
            <span className="font-medium text-slate-900">cryptographic wealth</span>
            that reshapes digital portfolios.
          </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-3xl flex flex-col justify-between h-[520px] shadow-sm border border-zinc-200 hover:border-[#E5A93C]/30 transition-colors reveal-target" style={{filter: 'blur(0px)'}}>
<div>
<h3 className="text-lg font-medium text-zinc-900 mb-6 leading-tight tracking-tight">
                Institutional experience.
                <br/>
                Digital agility.
              </h3>
<p className="text-zinc-500 font-light leading-relaxed text-sm">
                With over 15 years of institutional banking and 7 years of
                digital asset trading, our team ensures a secure, compliant, and
                clearly structured investment vehicle.
              </p>
</div>
<div className="mt-8 border-t border-zinc-100 pt-6">
<div className="flex items-center justify-between mb-4 text-slate-900">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 border border-zinc-200">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-900 leading-none mb-1">
                    Nexora Managing Partners
                  </div>
<div className="text-xs text-zinc-400 font-normal">
                    Dubai, UAE
                  </div>
</div>
</div>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden h-[520px] group bg-white shadow-sm border border-zinc-200 hover:border-[#E5A93C]/30 transition-colors p-8 flex flex-col reveal-target" style={{filter: 'blur(0px)'}}>
<h3 className="text-lg font-medium text-zinc-900 mb-6 leading-tight tracking-tight">
              Investment Pipeline
            </h3>
<div className="flex-1 flex flex-col justify-center space-y-6 relative">
<div className="absolute left-[11px] top-4 bottom-4 w-px bg-zinc-200 z-0 hidden sm:block"></div>
<div className="relative z-10 flex gap-4 text-sm group/step">
<div className="w-6 h-6 rounded-full bg-white border border-zinc-300 group-hover/step:border-[#E5A93C] group-hover/step:text-[#E5A93C] flex items-center justify-center text-xs font-mono text-zinc-400 shrink-0 mt-0.5 transition-colors">
                  1
                </div>
<div>
<h4 className="font-medium text-zinc-900">Sign Agreement</h4>
<p className="text-zinc-500 font-light text-xs mt-1">
                    Review terms &amp; fee structures.
                  </p>
</div>
</div>
<div className="relative z-10 flex gap-4 text-sm group/step">
<div className="w-6 h-6 rounded-full bg-white border border-zinc-300 group-hover/step:border-[#E5A93C] group-hover/step:text-[#E5A93C] flex items-center justify-center text-xs font-mono text-zinc-400 shrink-0 mt-0.5 transition-colors">
                  2
                </div>
<div>
<h4 className="font-medium text-zinc-900">Capital Deposit</h4>
<p className="text-zinc-500 font-light text-xs mt-1">
                    Secure bank wire or crypto transfer.
                  </p>
</div>
</div>
<div className="relative z-10 flex gap-4 text-sm group/step">
<div className="w-6 h-6 rounded-full bg-white border border-zinc-300 group-hover/step:border-[#E5A93C] group-hover/step:text-[#E5A93C] flex items-center justify-center text-xs font-mono text-zinc-400 shrink-0 mt-0.5 transition-colors">
                  3
                </div>
<div>
<h4 className="font-medium text-zinc-900">Deployment</h4>
<p className="text-zinc-500 font-light text-xs mt-1">
                    Yield generation begins first Monday.
                  </p>
</div>
</div>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden h-[520px] group bg-[#0A0A0A] shadow-md border border-zinc-200 reveal-target" style={{filter: 'blur(0px)'}}>
<img alt="Dubai" className="transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-100 opacity-60 w-full h-full object-cover absolute inset-0 mix-blend-luminosity" src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90"></div>
<div className="flex flex-col z-10 text-white p-8 absolute inset-0 justify-between">
<div className="flex flex-col items-start gap-2">
<span className="text-sm font-normal tracking-wide text-slate-900">
                  Nexora HQ
                </span>
<span className="text-xs font-light text-white/70">
                  Westburry Tower, 1201
                </span>
<span className="text-xs font-light text-white/70">
                  Office N.48, Area Alsafa
                </span>
</div>
<span className="text-xs font-mono opacity-60 uppercase tracking-widest ml-auto">
                DUBAI, UAE
              </span>
</div>
</div>

<div className="flex flex-col overflow-hidden group text-white bg-zinc-900 h-[520px] rounded-3xl p-8 relative shadow-md justify-between border border-zinc-800 hover:border-[#E5A93C]/30 transition-colors reveal-target" style={{filter: 'blur(0.0002px)'}}>

<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen" src="https://images.unsplash.com/photo-1641738156783-df2049630f6c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute top-0 right-0 w-64 h-64 bg-[#E5A93C]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#E5A93C]/20 transition-colors duration-500"></div>
<div className="flex justify-between items-start relative z-10 text-slate-900">
<span className="text-lg font-medium tracking-tight">
                Direct Lines
              </span>
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10 mt-auto mb-12">
<p className="leading-relaxed text-xl text-white/90 font-light max-w-[260px] tracking-tight">
                Ready to allocate? Reach out to our managing partners directly.
              </p>
</div>
<div className="space-y-4 text-xs text-white/50 relative z-10 font-mono">
<div className="hover:text-white cursor-pointer transition-colors flex flex-col gap-1">
<span className="text-white/30 uppercase tracking-widest text-xs opacity-75">
                  Support
                </span>
                support@nexoraventures.net
              </div>
<div className="hover:text-white cursor-pointer transition-colors flex flex-col gap-1 pt-2 border-t border-white/10">
<span className="text-white/30 uppercase tracking-widest text-xs opacity-75">
                  Federico Coletti
                </span>
                +971 543457925
              </div>
<div className="hover:text-white cursor-pointer transition-colors flex flex-col gap-1 pt-2 border-t border-white/10">
<span className="text-white/30 uppercase tracking-widest text-xs opacity-75">
                  Daniele Bendinelli
                </span>
                +971 503990163
              </div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#050505] w-full pt-32 pb-0 relative border-t border-[#E5A93C]/10 overflow-hidden">

<div className="flex z-30 px-6 absolute top-12 right-0 left-0 justify-center reveal-target" style={{filter: 'blur(8px)'}}>
<div className="bg-[#0A0A0A]/80 backdrop-blur-md border border-[#E5A93C]/20 rounded-full py-2.5 pl-6 pr-2.5 flex items-center gap-4 shadow-[0_0_30px_rgba(229,169,60,0.05)] max-w-lg w-full group transition-all hover:border-[#E5A93C]/40">
<span className="text-[#E5A93C]/70 text-xs font-mono hidden sm:block">
            Request investor prospectus.
          </span>
<input className="bg-transparent border-none outline-none text-white text-sm w-full sm:w-auto placeholder:text-neutral-700 font-mono flex-1" placeholder="Enter email address..." type="text"/>
<button className="w-8 h-8 text-black rounded-full flex items-center justify-center hover:bg-white transition-colors shrink-0 bg-slate-900">
<iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="w-full bg-[#080808] border-t border-[#E5A93C]/10 rounded-t-[3rem] relative z-20 overflow-hidden mt-16">
<div className="w-full px-6 lg:px-24 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative z-20">

<div className="lg:col-span-7 flex flex-col justify-center reveal-target" style={{filter: 'blur(8px)'}}>
<h2 className="text-5xl lg:text-8xl leading-[0.9] font-normal text-white tracking-tighter mb-12">
              Diversified.
              <br/>
<span className="italic text-slate-900">Managed.</span>
<br/>
              Secure.
            </h2>
<div className="flex flex-wrap gap-10 items-center mt-auto">
<span className="text-white/30 transition-colors font-medium tracking-tighter text-sm uppercase cursor-pointer hover:text-slate-900">
                Strategy
              </span>
<span className="text-white/30 transition-colors font-medium tracking-tighter text-sm uppercase cursor-pointer hover:text-slate-900">
                Performance
              </span>
<div className="h-6 w-px bg-white/10"></div>
<span className="text-white/30 transition-colors font-medium tracking-tighter text-sm uppercase cursor-pointer hover:text-slate-900">
                Terms
              </span>
</div>
</div>

<div className="lg:col-span-5 flex lg:justify-end items-center reveal-target" style={{filter: 'blur(8px)'}}>
<div className="w-full max-w-md bg-[#111] border border-[#E5A93C]/20 p-8 lg:p-12 rounded-3xl relative overflow-hidden group rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl">

<iconify-icon className="absolute -right-8 -top-8 text-[#E5A93C]/5 text-9xl scale-150 rotate-12 group-hover:rotate-45 transition-transform duration-700" icon="solar:graph-up-linear"></iconify-icon>
<div className="relative z-10">
<h3 className="text-3xl font-medium text-white tracking-tight leading-tight mb-6">
                  Preserving and growing capital.
                </h3>
<p className="text-[#E5A93C]/70 text-xs font-normal leading-relaxed mb-10 font-mono">
                  // Where alternative assets meet institutional-grade risk
                  management.
                </p>
<div className="flex items-center justify-between border-t border-white/10 pt-6">
<div className="flex flex-col">
<span className="text-xs uppercase tracking-widest text-white/40 font-mono scale-90 origin-left">
                      Fund Status
                    </span>
<span className="text-xs font-medium mt-1 tracking-tight text-slate-900">
                      Accepting Allocations
                    </span>
</div>
<button className="text-black w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform group/btn bg-slate-900">
<iconify-icon className="text-lg group-hover/btn:rotate-45 transition-transform" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full overflow-hidden pointer-events-none select-none pt-12">
<h1 className="text-[20vw] leading-none font-normal text-white/5 text-center -mb-8 lg:-mb-16 tracking-tighter">
            NEXORA
          </h1>

<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#080808] to-transparent"></div>
</div>

<div className="absolute bottom-6 w-full flex justify-center z-30">
<p className="text-xs text-white/30 font-mono uppercase tracking-widest transition-colors cursor-default hover:text-slate-900">
            © 2026 Nexora Ventures. Based in Dubai, UAE.
          </p>
</div>
</div>
</footer>





    </>
  );
}
