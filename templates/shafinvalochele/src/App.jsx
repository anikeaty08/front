import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
        // Initialize ParticlesJS
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
            },
            retina_detect: true
        });

        const sections = document.querySelectorAll('.section');
        const dots = document.querySelectorAll('.progress-dot');
        const magneticElements = document.querySelectorAll('.magnetic');
        let currentIndex = 0;
        let isScrolling = false;
        let touchStartY = 0;
        
        // Initialize
        updateActiveDot(currentIndex);
        
        // Magnetic effect
        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0px, 0px)';
            });
        });
        
        // Scroll event
        window.addEventListener('wheel', (e) => {
            if (isScrolling) return;
            
            isScrolling = true;
            if (e.deltaY > 0) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Touch events
        document.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', (e) => {
            if (isScrolling) return;
            
            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY - touchEndY;
            
            isScrolling = true;
            if (diff > 50) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else if (diff < -50) {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Click on dots
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'));
                currentIndex = index;
                changeSection(currentIndex);
            });
        });
        
        function changeSection(index) {
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            sections[index].classList.add('active');
            updateActiveDot(index);
            
            const reveals = sections[index].querySelectorAll('.reveal');
            reveals.forEach((el, i) => {
                setTimeout(() => {
                    el.classList.add('active');
                }, i * 150);
            });
            
            sections.forEach((section, i) => {
                if (i !== index) {
                    const otherReveals = section.querySelectorAll('.reveal');
                    otherReveals.forEach(el => {
                        el.classList.remove('active');
                    });
                }
            });
        }
        
        function updateActiveDot(index) {
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            dots[index].classList.add('active');
        }
    });



        import { Renderer, Program, Mesh, Color, Triangle } from 'https://unpkg.com/ogl';

        const VERT = `#version 300 es
        in vec2 position;
        void main() {
          gl_Position = vec4(position, 0.0, 1.0);
        }
        `;

        const FRAG = `#version 300 es
        precision highp float;

        uniform float uTime;
        uniform float uAmplitude;
        uniform vec3 uColorStops[3];
        uniform vec2 uResolution;
        uniform float uBlend;

        out vec4 fragColor;

        vec3 permute(vec3 x) {
          return mod(((x * 34.0) + 1.0) * x, 289.0);
        }

        float snoise(vec2 v){
          const vec4 C = vec4(
              0.211324865405187, 0.366025403784439,
              -0.577350269189626, 0.024390243902439
          );
          vec2 i  = floor(v + dot(v, C.yy));
          vec2 x0 = v - i + dot(i, C.xx);
          vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod(i, 289.0);

          vec3 p = permute(
              permute(i.y + vec3(0.0, i1.y, 1.0))
            + i.x + vec3(0.0, i1.x, 1.0)
          );

          vec3 m = max(
              0.5 - vec3(
                  dot(x0, x0),
                  dot(x12.xy, x12.xy),
                  dot(x12.zw, x12.zw)
              ), 
              0.0
          );
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

        struct ColorStop {
          vec3 color;
          float position;
        };

        #define COLOR_RAMP(colors, factor, finalColor) {              \
          int index = 0;                                            \
          for (int i = 0; i < 2; i++) {                               \
             ColorStop currentColor = colors[i];                    \
             bool isInBetween = currentColor.position <= factor;    \
             index = int(mix(float(index), float(i), float(isInBetween))); \
          }                                                         \
          ColorStop currentColor = colors[index];                   \
          ColorStop nextColor = colors[index + 1];                  \
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

        // Config
        const CONFIG = {
            colorStops: ['#5227FF', '#7cff67', '#5227FF'], // Purple - Green - Purple
            amplitude: 1.0,
            blend: 0.5,
            speed: 1.0
        };

        const ctn = document.getElementById('aurora-container');

        if (ctn) {
            const renderer = new Renderer({
                alpha: true,
                premultipliedAlpha: true,
                antialias: true
            });
            const gl = renderer.gl;
            
            // Set up context
            gl.clearColor(0, 0, 0, 0);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            gl.canvas.style.backgroundColor = 'transparent';

            ctn.appendChild(gl.canvas);

            const geometry = new Triangle(gl);

            const colorStopsArray = CONFIG.colorStops.map(hex => {
                const c = new Color(hex);
                return [c.r, c.g, c.b];
            });

            const program = new Program(gl, {
                vertex: VERT,
                fragment: FRAG,
                uniforms: {
                    uTime: { value: 0 },
                    uAmplitude: { value: CONFIG.amplitude },
                    uColorStops: { value: colorStopsArray },
                    uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
                    uBlend: { value: CONFIG.blend }
                }
            });

            const mesh = new Mesh(gl, { geometry, program });

            function resize() {
                const width = ctn.offsetWidth;
                const height = ctn.offsetHeight;
                renderer.setSize(width, height);
                program.uniforms.uResolution.value = [width, height];
            }
            
            window.addEventListener('resize', resize);
            resize();

            let time = 0;
            requestAnimationFrame(update);

            function update(t) {
                requestAnimationFrame(update);
                time += 0.01 * CONFIG.speed;
                program.uniforms.uTime.value = time;
                renderer.render({ scene: mesh });
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute inset-0 -z-10" id="particles-js">


</div></div>

<div id="aurora-container"></div>

<div className="fixed top-0 left-0 w-full h-full bg-black/20 z-[-9] pointer-events-none"></div>

<header className="fixed top-0 left-0 right-0 z-50 border-b bg-[#050505]/80 backdrop-blur-md border-white/5">
<div className="flex h-16 max-w-5xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group text-lg font-medium tracking-tighter text-white" href="#">
<div className="flex group-hover:scale-90 transition-transform duration-300 text-xs font-bold w-5 h-5 rounded-full items-center justify-center text-black bg-white">s</div>
<span className="">Shafin</span>
</a>
<nav className="hidden sm:flex items-center gap-8">
<a className="text-sm font-normal transition-colors duration-200 hover:text-white" href="#work">Work</a>
<a className="text-sm font-normal transition-colors duration-200 hover:text-white" href="#about">About</a>
<a className="text-sm font-normal transition-colors duration-200 hover:text-white" href="#process">Process</a>
</nav>
<a className="hidden sm:flex items-center gap-2 text-sm border px-4 py-2 rounded-full transition-all duration-300 group text-white bg-white/5 border-white/10 hover:bg-white/10" href="mailto:hello@alex.design">
<span>Let's talk</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>

<button className="sm:hidden text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</header>
<main className="flex-grow pt-32 pb-20">

<section className="max-w-5xl mr-auto mb-32 ml-auto pr-6 pl-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-medium mb-8 text-orange-400">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-orange-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
          Available for new projects
        </div>
<h1 className="sm:text-7xl md:text-8xl bg-clip-text text-5xl font-medium text-white tracking-tighter bg-gradient-to-b from-white via-white to-white/50 max-w-4xl mb-8">Designing Experinces that Matters</h1>
<p className="sm:text-xl leading-relaxed text-lg font-light max-w-2xl mb-10 text-stone-400">I'm shafin a multidisciplinary designer focused on building accessible, human-centered interfaces for the next generation of web applications.</p>
<div className="flex flex-wrap gap-x-4 items-center gap-y-4">
<a className="px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 bg-white text-black hover:bg-stone-200" href="#work">
            View Selected Work
            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-down" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<button className="px-6 py-3 rounded-lg text-sm font-medium border transition-colors flex items-center gap-2 text-white border-white/10 hover:bg-white/5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:copy" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></g></svg>
            Copy Email
          </button>
</div>
</section>

<section className="border-y bg-white/[0.01] border-white/5 backdrop-blur-sm">
<div className="grid grid-cols-2 md:grid-cols-4 max-w-5xl mr-auto ml-auto pt-10 pr-6 pb-10 pl-6 gap-x-8 gap-y-8">
<div className="">
<div className="text-3xl font-medium text-white tracking-tight mb-1">5+</div>
<div className="text-xs text-stone-500 uppercase tracking-widest font-medium">Years Experience</div>
</div>
<div className="">
<div className="text-3xl font-medium tracking-tight mb-1 text-white">40+</div>
<div className="text-xs text-stone-500 uppercase tracking-widest font-medium">Projects Shipped</div>
</div>
<div className="">
<div className="text-3xl font-medium tracking-tight mb-1 text-white">12</div>
<div className="text-xs text-stone-500 uppercase tracking-widest font-medium">Awards Won</div>
</div>
<div className="">
<div className="text-3xl font-medium tracking-tight mb-1 text-white">100%</div>
<div className="text-xs text-stone-500 uppercase tracking-widest font-medium">Job Success</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-32" id="work">
<div className="flex items-end justify-between mb-12">
<div className="">
<h2 className="text-2xl font-medium tracking-tight mb-2 text-white">Selected Work</h2>
<p className="text-sm text-stone-500">A curation of projects from 2021-2024</p>
</div>
<a className="hidden sm:flex items-center gap-1 text-xs transition-colors text-stone-400 hover:text-white" href="#">
            View Archive
            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-2xl border overflow-hidden relative mb-4 bg-stone-900 border-white/10">
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 from-black/60"></div>

<div className="w-full h-full bg-[#0A0A0A] relative flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
<div className="w-3/4 h-3/4 rounded-t-lg border-t border-l border-r backdrop-blur-sm shadow-2xl overflow-hidden border-white/10 bg-stone-900/50">
<div className="h-8 border-b flex items-center px-4 gap-2 border-white/5">
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<div className="p-6">
<div className="w-1/3 h-2 rounded mb-4 bg-white/10"></div>
<div className="w-2/3 h-2 rounded mb-2 bg-white/5"></div>
<div className="w-1/2 h-2 rounded bg-white/5"></div>
</div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-lg font-medium tracking-tight group-hover:text-stone-200 transition-colors text-white">Chronos Finance</h3>
<p className="text-sm text-stone-500 font-light mt-1">Fintech Dashboard &amp; Design System</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 rounded-md border text-[10px] uppercase tracking-wider bg-white/5 border-white/5 text-stone-400">Product</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-2xl border overflow-hidden relative mb-4 bg-stone-900 border-white/10">
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 from-black/60"></div>
<div className="w-full h-full bg-[#0A0A0A] relative flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent"></div>
<svg aria-hidden="true" className="iconify iconify--lucide text-red-400/30" data-icon="lucide:layers" data-strokeWidth="1" data-width="64" height="64" role="img" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-lg font-medium tracking-tight group-hover:text-stone-200 transition-colors text-white">Lumina AI</h3>
<p className="text-sm text-stone-500 font-light mt-1">Generative AI Marketing Tool</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 rounded-md border text-[10px] uppercase tracking-wider bg-white/5 border-white/5 text-stone-400">Web</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-2xl border overflow-hidden relative mb-4 bg-stone-900 border-white/10">
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 from-black/60"></div>
<div className="w-full h-full bg-[#0A0A0A] relative flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
<div className="grid grid-cols-2 gap-4 w-1/2 opacity-50">
<div className="aspect-square rounded-lg border bg-white/5 border-white/5"></div>
<div className="aspect-square rounded-lg border bg-white/5 border-white/5"></div>
<div className="aspect-square rounded-lg border bg-white/5 border-white/5"></div>
<div className="aspect-square rounded-lg border bg-white/5 border-white/5"></div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium tracking-tight group-hover:text-stone-200 transition-colors text-white">Vanguard Architecture</h3>
<p className="text-sm text-stone-500 font-light mt-1">Minimalist Portfolio Site</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 rounded-md border text-[10px] uppercase tracking-wider bg-white/5 border-white/5 text-stone-400">Dev</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-2xl border overflow-hidden relative mb-4 bg-stone-900 border-white/10">
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 from-black/60"></div>
<div className="w-full h-full bg-[#0A0A0A] relative flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
<svg aria-hidden="true" className="iconify iconify--lucide text-orange-400/30" data-icon="lucide:shopping-bag" data-strokeWidth="1" data-width="64" height="64" role="img" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-lg font-medium tracking-tight group-hover:text-stone-200 transition-colors text-white">Mono Supply</h3>
<p className="text-sm text-stone-500 font-light mt-1">E-commerce Experience</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 rounded-md border text-[10px] uppercase tracking-wider bg-white/5 border-white/5 text-stone-400">Design</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-10 mb-20">
<h2 className="text-2xl font-medium tracking-tight mb-12 text-white">Expertise</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-xl border transition-colors border-white/5 hover:border-white/10">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 bg-stone-900 border-white/10 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:pen-tool" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13l-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18M2.3 2.3l7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></g></svg>
</div>
<h3 className="text-base font-medium mb-3 text-white">Interface Design</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">Creating pixel-perfect, aesthetic user interfaces with a focus on usability, typography, and motion details.</p>
</div>

<div className="glass-card p-6 rounded-xl border transition-colors border-white/5 hover:border-white/10">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 bg-stone-900 border-white/10 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:code-2" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-base font-medium mb-3 text-white">Development</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">Translating designs into clean, semantic code using React, Tailwind CSS, and modern frontend frameworks.</p>
</div>

<div className="glass-card p-6 rounded-xl border transition-colors border-white/5 hover:border-white/10">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 bg-stone-900 border-white/10 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-template" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></g></svg>
</div>
<h3 className="text-base font-medium mb-3 text-white">Design Systems</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">Building scalable component libraries and documentation to ensure consistency across products.</p>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-20 text-center">
<h2 className="text-4xl sm:text-5xl font-medium tracking-tighter mb-6 text-white">Ready to collaborate?</h2>
<p className="text-lg text-stone-500 mb-10 font-light">I'm currently available for freelance projects and open to full-time opportunities.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-medium transition-colors bg-white text-black hover:bg-stone-200" href="mailto:hello@alex.design">Start a Project</a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-medium border transition-colors text-white border-white/10 hover:bg-white/5" href="#">Schedule Call</a>
</div>
</section>
</main>

<footer className="border-t bg-[#050505] py-12 border-white/5">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold bg-stone-800 text-white">a</div>
<span className="text-sm text-stone-500">© 2026 Shafin. All rights reserved.</span>
</div>
<div className="flex items-center gap-6">
<a className="text-stone-500 transition-colors hover:text-white" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-stone-500 transition-colors hover:text-white" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:github" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg>
</a>
<a className="text-stone-500 transition-colors hover:text-white" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
<a className="text-stone-500 transition-colors hover:text-white" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:dribbble" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94m19.5 1.9c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></g></svg>
</a>
</div>
</div>
</footer>



    </>
  );
}
