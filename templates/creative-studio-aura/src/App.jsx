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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- GSAP Masked Text Reveal with ScrollTrigger ---
        gsap.registerPlugin(ScrollTrigger);

        const titleElement = document.getElementById('hero-title');
        const text = titleElement.innerText;
        titleElement.innerHTML = '';
        
        const words = text.split(' ');
        words.forEach(word => {
            const wordSpan = document.createElement('span');
            wordSpan.style.display = 'inline-block';
            wordSpan.style.overflow = 'hidden';
            wordSpan.style.verticalAlign = 'top';
            
            const innerSpan = document.createElement('span');
            innerSpan.className = 'reveal-inner';
            innerSpan.style.display = 'inline-block';
            innerSpan.style.transform = 'translateY(110%)';
            innerSpan.style.willChange = 'transform';
            innerSpan.innerHTML = word + '&nbsp;';
            
            wordSpan.appendChild(innerSpan);
            titleElement.appendChild(wordSpan);
        });

        window.addEventListener('load', () => {
            gsap.to('.reveal-inner', {
                scrollTrigger: {
                    trigger: '#hero-title',
                    start: 'top 95%'
                },
                y: '0%',
                duration: 1.6,
                ease: 'power4.out',
                stagger: 0.03,
                delay: 0.1
            });
            
            gsap.from('header, .fixed.right-8, .group', {
                opacity: 0,
                y: 15,
                duration: 1.8,
                ease: 'power3.out',
                stagger: 0.15,
                delay: 0.6
            });
        });

        // --- WebGL Abstract Cloud / Smoke Background ---
        const canvas = document.getElementById('webgl-canvas');
        const gl = canvas.getContext('webgl');

        if (gl) {
            function resize() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                gl.viewport(0, 0, canvas.width, canvas.height);
            }
            window.addEventListener('resize', resize);
            resize();

            const vsSource = `
                attribute vec2 position;
                void main() { gl_Position = vec4(position, 0.0, 1.0); }
            `;

            const fsSource = `
                precision highp float;
                uniform vec2 u_resolution;
                uniform float u_time;

                vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
                float snoise(vec2 v) {
                    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                    vec2 i  = floor(v + dot(v, C.yy) );
                    vec2 x0 = v -   i + dot(i, C.xx);
                    vec2 i1; i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                    vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1;
                    i = mod289(i);
                    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
                    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                    m = m*m ; m = m*m ;
                    vec3 x = 2.0 * fract(p * C.www) - 1.0;
                    vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5); vec3 a0 = x - ox;
                    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                    vec3 g;
                    g.x  = a0.x  * x0.x  + h.x  * x0.y;
                    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                    return 130.0 * dot(m, g);
                }

                void main() {
                    vec2 st = gl_FragCoord.xy / u_resolution.xy;
                    st.x *= u_resolution.x / u_resolution.y;

                    vec2 pos1 = st * 1.5 + vec2(u_time * 0.02, u_time * 0.015);
                    vec2 pos2 = st * 2.5 - vec2(u_time * 0.01, u_time * 0.03);

                    float n1 = snoise(pos1) * 0.5 + 0.5;
                    float n2 = snoise(pos2) * 0.5 + 0.5;
                    float finalNoise = mix(n1, n2, 0.6);

                    // Dark smoke overlay opacity mapping
                    float alpha = smoothstep(0.1, 0.9, finalNoise);

                    vec2 center = gl_FragCoord.xy / u_resolution.xy - 0.5;
                    float dist = length(center);
                    alpha *= smoothstep(0.9, 0.1, dist);

                    // Dark/shadow tint output for a moody smoke effect
                    gl_FragColor = vec4(0.01, 0.01, 0.02, alpha * 0.9);
                }
            `;

            function createShader(type, source) {
                const s = gl.createShader(type);
                gl.shaderSource(s, source);
                gl.compileShader(s);
                return s;
            }
            
            const vs = createShader(gl.VERTEX_SHADER, vsSource);
            const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
            const program = gl.createProgram();
            gl.attachShader(program, vs);
            gl.attachShader(program, fs);
            gl.linkProgram(program);
            gl.useProgram(program);

            const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
            const buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
            
            const posAttr = gl.getAttribLocation(program, "position");
            gl.enableVertexAttribArray(posAttr);
            gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

            const resUni = gl.getUniformLocation(program, "u_resolution");
            const timeUni = gl.getUniformLocation(program, "u_time");

            let startTime = Date.now();
            function render() {
                gl.uniform2f(resUni, canvas.width, canvas.height);
                gl.uniform1f(timeUni, (Date.now() - startTime) * 0.001);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                requestAnimationFrame(render);
            }
            render();
        }
    
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
      

<div className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-3] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/13fe9128-aded-4ad4-bbe1-491e1d5fb9f2_3840w.webp)]"></div>

<div className="fixed inset-0 w-full h-full bg-black/50 z-[-2]"></div>

<canvas className="fixed inset-0 w-full h-full object-cover z-[-1] pointer-events-none opacity-80" height="2048" id="webgl-canvas" width="1440"></canvas>

<main className="flex flex-col md:p-10 lg:p-12 min-h-[1200px] w-full z-10 pt-6 pr-6 pb-6 pl-6 relative">

<header className="flex justify-between items-center w-full">
<div className="text-sm md:text-base tracking-widest font-thin uppercase z-20">
                A U R A
            </div>
<nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-10 text-xs md:text-sm text-white/60 font-thin">
<a className="relative group hover:text-white transition-colors duration-300 pb-1" href="#">Showcase<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/70 transition-all duration-300 group-hover:w-full"></span></a>
<a className="relative group hover:text-white transition-colors duration-300 pb-1" href="#">Studio<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/70 transition-all duration-300 group-hover:w-full"></span></a>
<a className="relative group hover:text-white transition-colors duration-300 pb-1" href="#">Expertise<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/70 transition-all duration-300 group-hover:w-full"></span></a>
<a className="relative group hover:text-white transition-colors duration-300 pb-1" href="#">Connect<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/70 transition-all duration-300 group-hover:w-full"></span></a>
</nav>
<div className="flex flex-col gap-1.5 cursor-pointer group ml-auto md:ml-0 p-2 z-20">
<div className="w-8 h-[1px] bg-white group-hover:w-6 transition-all duration-300 ease-out ml-auto"></div>
<div className="w-6 h-[1px] bg-white group-hover:w-8 transition-all duration-300 ease-out ml-auto"></div>
</div>
</header>

<div className="hidden lg:block fixed top-1/2 right-8 text-base md:text-lg font-thin text-white/40 tracking-widest z-10" style={{transform: 'translateY(-50%) rotate(180deg)', writingMode: 'vertical-rl'}}>
            20–26
        </div>

<div className="flex-grow flex flex-col-reverse lg:flex-row lg:items-end lg:mt-0 gap-16 lg:gap-24 z-10 w-full mt-24 pb-8 relative gap-x-16 gap-y-16 items-start justify-between">
<div className="w-full sm:w-80 shrink-0 group hover:-translate-y-2 transition-transform duration-700 ease-out" style={{perspective: '1000px'}}>
<div className="p-[1px] rounded-[1.5rem] bg-gradient-to-br from-white/20 via-white/5 to-transparent shadow-2xl">
<div className="bg-black/40 backdrop-blur-2xl rounded-[calc(1.5rem-1px)] p-4 flex flex-col gap-3">
<div className="flex flex-col gap-2">
<div className="h-20 w-full rounded-xl bg-neutral-900 overflow-hidden relative group/img"><img alt="Project 1" className="w-full h-full object-cover opacity-60 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1532680678473-a16f2cda8e43?ixid=M3w3NTc5NzN8MHwxfHNlYXJjaHw4fHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZXxlbnwxfDB8fHwxNzczOTAyOTgxfDA&amp;ixlib=rb-4.1.0&amp;w=1600&amp;fit=max&amp;auto=format&amp;q=80"/></div>
<div className="h-20 w-full rounded-xl bg-neutral-900 overflow-hidden relative group/img"><img alt="Project 2" className="w-full h-full object-cover opacity-60 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1768577908037-bbc3da95c1cf?ixid=M3w3NTc5NzN8MHwxfHNlYXJjaHwzMHx8YW1iaWVudCUyMGxpZ2h0fGVufDF8MHx8fDE3NzM5MDI5MTh8MA&amp;ixlib=rb-4.1.0&amp;w=1600&amp;fit=max&amp;auto=format&amp;q=80"/></div>
<div className="h-20 w-full rounded-xl bg-neutral-900 overflow-hidden relative group/img"><img alt="Project 3" className="w-full h-full object-cover opacity-60 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1507908708918-778587c9e563?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/></div>
</div>
<div className="mt-3 flex justify-between items-center text-xs text-white/40 px-1">
<span className="font-thin uppercase tracking-widest">Selected Work</span>
<iconify-icon className="text-xl text-white/70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="px-1 pb-1">
<div className="text-xs md:text-sm font-light text-white/90 tracking-wide">Atmospheric Voids</div>
<div className="text-xs text-white/30 font-thin mt-1 tracking-wider">04 Nov, 2026</div>
</div>
</div>
</div>
</div>
<div className="max-w-4xl lg:text-right w-full">
<h1 className="text-3xl md:text-5xl lg:text-6xl font-thin tracking-tight text-white/95 leading-tight" id="hero-title"><span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}><span className="reveal-inner" style={{display: 'inline-block', willChange: 'transform'}}>Crafting ethereal digital environments and structural narratives that blend deep atmospheric presence, human emotion, and mathematical elegance.    </span></span></h1>
</div>
</div>
</main>

<section className="bg-[#F8F7F4] text-neutral-900 relative z-20 w-full py-24 md:py-32 px-6 md:px-10 shadow-[0_-30px_60px_rgba(0,0,0,0.8)] border-t border-white/10">
<div className="max-w-7xl mx-auto flex flex-col pt-4 md:pt-8">

<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-10">
<h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-neutral-900 leading-[1.05]">
                    Where Precision<br/>
<span className="italic text-neutral-800" style={{fontFamily: '\'Playfair Display\', serif'}}>Meets the Ethereal</span>
</h2>
<div className="flex flex-col items-start md:items-end gap-3 mt-4 md:mt-0">
<div className="flex items-center gap-1.5 text-[#636C5C]">
<iconify-icon className="text-base fill-current stroke-current" icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-base fill-current stroke-current" icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-base fill-current stroke-current" icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-base fill-current stroke-current" icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-base fill-current stroke-current" icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex items-center gap-5">
<span className="text-sm md:text-base font-light text-neutral-800">4.9 (2,048 environments rendered)</span>
<div className="flex -space-x-3">
<img alt="Render Element" className="w-12 h-12 rounded-xl border-[3px] border-[#F8F7F4] object-cover -rotate-6 z-10 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/beaf81e2-db7d-46d9-8dc2-26de271cab83_320w.jpg"/>
<img alt="Render Element" className="w-12 h-12 rounded-xl border-[3px] border-[#F8F7F4] object-cover rotate-3 z-20 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f6c82f7-e18c-4dc9-82dc-96bb615bfa30_320w.webp"/>
<img alt="Render Element" className="w-12 h-12 rounded-xl border-[3px] border-[#F8F7F4] object-cover -rotate-3 z-30 shadow-sm" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">

<div className="lg:col-span-6 relative h-[500px] md:h-[650px] rounded-[2rem] overflow-hidden group">
<img alt="Abstract architectural rendering" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d5d1d1a-b4ab-422c-895b-78809cb13c87_1600w.jpg"/>

<div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80 bg-white rounded-2xl p-7 md:p-8 shadow-2xl transition-transform duration-500 hover:-translate-y-2">
<div className="flex items-center gap-2.5 mb-2">
<iconify-icon className="text-xl text-neutral-900" icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base md:text-lg font-normal text-neutral-900">Optimized</span>
</div>
<div className="text-2xl md:text-3xl text-neutral-800 mb-3 italic tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Flawless Execution</div>
<p className="text-sm md:text-base font-light text-neutral-500 leading-relaxed">
                            Every environment is meticulously compiled for maximum spatial coherence.
                        </p>
</div>
</div>

<div className="lg:col-span-6 flex flex-col gap-6 md:gap-8">

<div className="bg-[#EAE8E2] rounded-[2rem] relative overflow-hidden flex flex-col sm:flex-row min-h-[300px] p-8 md:p-10 group">
<div className="w-full sm:w-2/3 flex flex-col relative z-10 justify-center">
<iconify-icon className="text-3xl text-neutral-800 mb-6" icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-2xl md:text-4xl font-light tracking-tight text-neutral-900 mb-1">Procedural</h3>
<div className="text-2xl md:text-4xl italic tracking-tight text-neutral-800 mb-5" style={{fontFamily: '\'Playfair Display\', serif'}}>Topology</div>
<p className="text-sm md:text-base font-light text-neutral-600 leading-relaxed max-w-[280px]">
                                Algorithmic structures designed to scale infinitely across digital plains.
                            </p>
</div>
<div className="absolute right-0 bottom-0 top-0 w-1/2 min-w-[200px] flex items-end justify-end opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out">
<img alt="Procedural Geometry" className="h-[140%] object-cover object-left mix-blend-darken translate-x-8 translate-y-12" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f21c5120-8174-4b8b-99f8-868bbb3e3757_800w.webp"/>
</div>
</div>

<div className="bg-[#414F3D] rounded-[2rem] relative overflow-hidden flex min-h-[300px] text-white p-8 md:p-10">

<img alt="Volumetric Light rays" className="absolute -left-16 -bottom-16 w-80 h-80 object-cover mix-blend-screen opacity-70 transition-transform duration-1000 ease-out hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0a20e21-9ae4-4a4e-aa48-fb19b0ce94a8_800w.webp"/>
<div className="w-full flex justify-end">
<div className="w-full sm:w-2/3 flex flex-col relative z-10 justify-center pl-8 sm:pl-0">
<h3 className="text-2xl md:text-4xl font-light tracking-tight mb-1">Volumetric</h3>
<div className="text-2xl md:text-4xl italic tracking-tight text-white/90 mb-8" style={{fontFamily: '\'Playfair Display\', serif'}}>Illumination</div>
<div className="space-y-4 md:space-y-5">
<div className="flex items-center gap-3.5">
<iconify-icon className="text-xl text-white/60" icon="solar:sun-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm md:text-base font-light text-white/90">Raytraced Brilliance</span>
</div>
<div className="flex items-center gap-3.5">
<iconify-icon className="text-xl text-white/60" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm md:text-base font-light text-white/90">Global Illumination</span>
</div>
<div className="flex items-center gap-3.5">
<iconify-icon className="text-xl text-white/60" icon="solar:cpu-bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm md:text-base font-light text-white/90">Physically Based Processing</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] text-white relative z-20 w-full py-24 md:py-32 px-6 shadow-[0_-20px_60px_rgba(0,0,0,0.8)] border-t border-white/5 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-6xl mx-auto flex flex-col items-center relative z-10 pt-4 md:pt-8">

<div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
<h2 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#f3f3f3] leading-tight">
                    Monitor render nodes, topology, and atmospheric density in one clean view.
                </h2>
</div>
<div className="flex flex-col lg:flex-row w-full relative items-center justify-between z-10 gap-12 lg:gap-4 xl:gap-8">

<div className="hidden lg:flex flex-col justify-between h-[500px] sm:h-[560px] flex-1 py-16 xl:py-24">
<div className="flex items-center w-full group">
<p className="text-xs xl:text-sm text-[#8a8a8e] font-light leading-relaxed tracking-wide w-[180px] xl:w-[220px] shrink-0">
                Control atmospheric scattering — down to the voxel.
            </p>
<div className="flex-grow h-[1px] bg-gradient-to-r from-white/5 to-white/20 ml-4 xl:ml-6 relative flex items-center transition-opacity duration-300">
<div className="absolute right-0 w-1.5 h-1.5 rounded-full bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
</div>
</div>
<div className="flex items-center w-full group">
<p className="text-xs xl:text-sm text-[#8a8a8e] font-light leading-relaxed tracking-wide w-[180px] xl:w-[220px] shrink-0">
                Observe render telemetry — no clutter, just pure data.
            </p>
<div className="flex-grow h-[1px] bg-gradient-to-r from-white/5 to-white/20 ml-4 xl:ml-6 relative flex items-center transition-opacity duration-300">
<div className="absolute right-0 w-1.5 h-1.5 rounded-full bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
</div>
</div>
</div>

<div className="relative w-[300px] sm:w-[350px] h-[640px] sm:h-[700px] shrink-0 bg-black rounded-[2.5rem] sm:rounded-[3.25rem] border-[10px] sm:border-[14px] border-[#1C1C1E] shadow-[0_40px_80px_rgba(0,0,0,0.7)] flex flex-col overflow-hidden z-20 ring-1 ring-white/10">

<div className="absolute top-0 inset-x-0 h-6 flex justify-center z-30 pointer-events-none">
<div className="w-24 h-6 bg-black rounded-b-3xl"></div>
</div>

<div className="w-full h-full bg-[#0A0A0A] p-3 sm:p-4 pt-10 sm:pt-12 flex flex-col gap-3 overflow-y-auto [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

<div className="flex justify-between items-center px-1 text-white text-[9px] sm:text-[10px] font-normal tracking-wide mb-1 opacity-90">
<span>9:41</span>
<div className="flex gap-1 items-center">
<svg className="lucide lucide-bar-chart-2" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
<svg className="lucide lucide-wifi" fill="none" height="11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="11" xmlns="http://www.w3.org/2000/svg"><path d="M5 13a10 10 0 0 1 14 0"></path><path d="M8.5 16.5a5 5 0 0 1 7 0"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><line x1="12" x2="12.01" y1="20" y2="20"></line></svg>
<svg className="lucide lucide-battery-full" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><rect height="10" rx="2" ry="2" width="16" x="2" y="7"></rect><line x1="22" x2="22" y1="11" y2="13"></line><line x1="6" x2="6" y1="11" y2="13"></line><line x1="10" x2="10" y1="11" y2="13"></line><line x1="14" x2="14" y1="11" y2="13"></line></svg>
</div>
</div>

<div className="flex justify-between items-center mb-1 px-1">
<h3 className="text-sm sm:text-base font-light tracking-tight text-[#f3f3f3]">Hi, Architect</h3>
<div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-teal-400"></div>
</div>

<div className="bg-[#141414] border border-white/[0.04] rounded-xl sm:rounded-2xl p-3 flex flex-col gap-1 relative overflow-hidden group">
<span className="text-[9px] sm:text-[10px] text-[#8a8a8e] font-light tracking-wide uppercase">Active Simulation</span>
<div className="text-sm sm:text-base font-light tracking-tight text-white mt-0.5">Volumetric Fog Pass</div>

<div className="w-full flex gap-0.5 h-[2px] mt-1.5">
<div className="h-full bg-[#34C759] rounded-full w-[45%]"></div>
<div className="h-full bg-white/20 rounded-full w-[25%]"></div>
<div className="h-full bg-white/20 rounded-full w-[30%]"></div>
</div>
<span className="text-[9px] sm:text-[10px] text-[#8a8a8e] font-light mt-1">1h 40m remaining · Node 04</span>
</div>

<div className="bg-[#141414] border border-white/[0.04] rounded-xl sm:rounded-2xl p-3 flex flex-col gap-1">
<span className="text-[9px] sm:text-[10px] text-[#8a8a8e] font-light tracking-wide uppercase">Array Status</span>
<div className="text-sm sm:text-base font-light tracking-tight text-white mt-0.5">82% GPU Utilization</div>

<div className="w-full flex h-[2px] mt-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-[#FF9F0A] rounded-full w-[82%]"></div>
</div>
<span className="text-[9px] sm:text-[10px] text-[#8a8a8e] font-light mt-1">Balanced thermal output</span>
</div>

<div className="bg-[#141414] border border-white/[0.04] rounded-xl sm:rounded-2xl p-3 flex flex-col gap-1">
<span className="text-[9px] sm:text-[10px] text-[#8a8a8e] font-light tracking-wide uppercase">Scene Statistics</span>
<div className="text-sm sm:text-base font-light tracking-tight text-white mt-0.5">24.3M Polygons</div>
</div>

<div className="bg-[#141414] border border-white/[0.04] rounded-xl sm:rounded-2xl p-3 flex flex-col gap-1">
<span className="text-[9px] sm:text-[10px] text-[#8a8a8e] font-light tracking-wide uppercase">Memory Cache</span>
<div className="text-sm sm:text-base font-light tracking-tight text-white mt-0.5">14.2 TB Allocated</div>

<div className="w-full flex h-[2px] mt-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full w-[64%]"></div>
</div>
<span className="text-[9px] sm:text-[10px] text-[#8a8a8e] font-light mt-1">DDR6 VRAM clusters active</span>
</div>

<div className="bg-[#141414] border border-white/[0.04] rounded-xl sm:rounded-2xl p-3 flex flex-col gap-1 mb-2">
<span className="text-[9px] sm:text-[10px] text-[#8a8a8e] font-light tracking-wide uppercase">Network Uplink</span>
<div className="text-sm sm:text-base font-light tracking-tight text-white mt-0.5">400 Gbps Synchronized</div>
</div>
</div>
</div>

<div className="hidden lg:flex flex-col justify-between h-[500px] sm:h-[560px] flex-1 py-16 xl:py-24 text-right">
<div className="flex items-center w-full group">
<div className="flex-grow h-[1px] bg-gradient-to-l from-white/5 to-white/20 mr-4 xl:mr-6 relative flex items-center justify-start transition-opacity duration-300">
<div className="absolute left-0 w-1.5 h-1.5 rounded-full bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
</div>
<p className="text-xs xl:text-sm text-[#8a8a8e] font-light leading-relaxed tracking-wide w-[180px] xl:w-[220px] shrink-0">
                Track continuous resource allocation across global GPU clusters.
            </p>
</div>
<div className="flex items-center w-full group">
<div className="flex-grow h-[1px] bg-gradient-to-l from-white/5 to-white/20 mr-4 xl:mr-6 relative flex items-center justify-start transition-opacity duration-300">
<div className="absolute left-0 w-1.5 h-1.5 rounded-full bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
</div>
<p className="text-xs xl:text-sm text-[#8a8a8e] font-light leading-relaxed tracking-wide w-[180px] xl:w-[220px] shrink-0">
                Optimized for mathematical precision, not just visuals.
            </p>
</div>
</div>

<div className="flex lg:hidden flex-col gap-2 text-center mt-12 px-6 max-w-md mx-auto w-full">
<div className="py-4 border-b border-white/5">
<p className="text-xs sm:text-sm text-[#8a8a8e] font-light leading-relaxed">Control atmospheric scattering — down to the voxel.</p>
</div>
<div className="py-4 border-b border-white/5">
<p className="text-xs sm:text-sm text-[#8a8a8e] font-light leading-relaxed">Observe render telemetry — no clutter, just pure data.</p>
</div>
<div className="py-4 border-b border-white/5">
<p className="text-xs sm:text-sm text-[#8a8a8e] font-light leading-relaxed">Track continuous resource allocation across global GPU clusters.</p>
</div>
<div className="py-4">
<p className="text-xs sm:text-sm text-[#8a8a8e] font-light leading-relaxed">Optimized for mathematical precision, not just visuals.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] text-white relative z-20 w-full py-24 md:py-32 px-6 shadow-[0_-20px_50px_rgba(0,0,0,0.6)] border-t border-white/5">
<div className="max-w-6xl mx-auto flex flex-col items-center">
<h2 className="text-3xl md:text-5xl font-light tracking-tight text-white/95 mb-4 text-center">
                Commitment tiers.
            </h2>
<p className="text-base md:text-lg font-light tracking-wide text-white/50 mb-16 text-center max-w-xl">
                Structured resource allocation for discrete environments and persistent spatial narratives.
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-white/20 transition-colors duration-300">
<div className="text-xs md:text-sm font-medium tracking-widest text-white/40 uppercase mb-4">Phase 01</div>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-3xl md:text-4xl font-light tracking-tight text-white/95">$4,500</span>
<span className="text-xs md:text-sm font-thin text-white/40">/project</span>
</div>
<p className="text-xs md:text-sm font-light text-white/60 mb-8 h-10">Essential geometric and ambient light structural modeling.</p>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-center gap-3">
<iconify-icon className="text-white/50 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs md:text-sm font-light text-white/80">3 Render passes</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white/50 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs md:text-sm font-light text-white/80">Basic procedural rules</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white/50 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs md:text-sm font-light text-white/80">Standard 4K output</span>
</li>
</ul>
<button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs md:text-sm font-medium transition-colors border border-white/5">Initiate</button>
</div>

<div className="bg-neutral-900 border border-white/20 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-white/30 transition-colors duration-300 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
<div className="text-xs md:text-sm font-medium tracking-widest text-white/90 uppercase mb-4 flex justify-between items-center">
                        Phase 02
                        <span className="bg-white text-black text-xs px-2.5 py-0.5 rounded-full font-medium tracking-normal">Optimal</span>
</div>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-3xl md:text-4xl font-light tracking-tight text-white/95">$8,200</span>
<span className="text-xs md:text-sm font-thin text-white/40">/project</span>
</div>
<p className="text-xs md:text-sm font-light text-white/60 mb-8 h-10">Advanced atmospheric simulations with complex mathematical topology.</p>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-center gap-3">
<iconify-icon className="text-white/50 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs md:text-sm font-light text-white/80">Unlimited render passes</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white/50 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs md:text-sm font-light text-white/80">Complex volumetric acoustics</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white/50 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs md:text-sm font-light text-white/80">Material refraction nodes</span>
</li>
</ul>
<button className="w-full py-3 rounded-xl bg-white text-black hover:bg-neutral-200 text-xs md:text-sm font-medium transition-colors border border-transparent shadow-[0_0_20px_rgba(255,255,255,0.2)]">Initiate</button>
</div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-white/20 transition-colors duration-300">
<div className="text-xs md:text-sm font-medium tracking-widest text-white/40 uppercase mb-4">Continuous</div>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-3xl md:text-4xl font-light tracking-tight text-white/95">$14k</span>
<span className="text-xs md:text-sm font-thin text-white/40">/month</span>
</div>
<p className="text-xs md:text-sm font-light text-white/60 mb-8 h-10">Dedicated resource allocation for ongoing environmental expansion.</p>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-center gap-3">
<iconify-icon className="text-white/50 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs md:text-sm font-light text-white/80">Dedicated simulation array</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white/50 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs md:text-sm font-light text-white/80">Infinite fractal recursion</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white/50 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs md:text-sm font-light text-white/80">Priority render queuing</span>
</li>
</ul>
<button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs md:text-sm font-medium transition-colors border border-white/5">Connect</button>
</div>
</div>
</div>
</section>

<section className="bg-[#FBFBFA] text-neutral-900 relative z-20 w-full py-32 md:py-40 px-6 shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
<div className="max-w-4xl mx-auto flex flex-col items-center text-center">
<h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-neutral-900 mb-8 leading-tight">
                Construct the <br className="hidden md:block"/> ethereal void.
            </h2>
<p className="text-base md:text-xl font-light text-neutral-500 mb-12 max-w-2xl tracking-wide">
                Begin the synthesis of mathematical precision and atmospheric depth for your next spatial narrative.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="px-8 py-4 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 text-xs md:text-sm font-medium transition-colors shadow-lg shadow-neutral-900/20 flex items-center justify-center gap-2 group">
                    Initialize Project
                    <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="px-8 py-4 rounded-full bg-white text-neutral-900 hover:bg-neutral-50 border border-neutral-200 text-xs md:text-sm font-medium transition-colors flex items-center justify-center gap-2">
                    View Documentation
                </button>
</div>
</div>
</section>

<footer className="bg-[#050505] text-white py-12 md:py-16 px-6 relative z-20 w-full border-t border-white/5">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 text-center md:text-left">

<div className="text-sm md:text-base tracking-widest font-thin uppercase text-white/90">
                A U R A
            </div>

<div className="flex flex-wrap justify-center gap-8 text-xs md:text-sm font-thin text-white/50">
<a className="hover:text-white transition-colors" href="#">Showcase</a>
<a className="hover:text-white transition-colors" href="#">Studio</a>
<a className="hover:text-white transition-colors" href="#">Expertise</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>

<div className="text-xs font-thin text-white/30 tracking-wide">
                © 2026 Aura Studios.
            </div>
</div>
</footer>


    </>
  );
}
