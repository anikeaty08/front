import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.addEventListener('DOMContentLoaded', () => {
      // WebGL Starfield
      const canvas = document.getElementById('webgl-stars');
      const gl = canvas.getContext('webgl');
      if (gl) {
          const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; gl.viewport(0, 0, canvas.width, canvas.height); };
          window.addEventListener('resize', resize);
          resize();

          const vs = gl.createShader(gl.VERTEX_SHADER);
          gl.shaderSource(vs, `attribute vec3 position; uniform float time; varying float vAlpha; void main() { float z = mod(position.z - time * 0.1, 1.0); vec2 pos = position.xy / (z * 2.0); gl_Position = vec4(pos, 0.0, 1.0); gl_PointSize = (1.0 - z) * 2.5; vAlpha = (1.0 - z) * 0.8; }`);
          gl.compileShader(vs);

          // Tweaked fragment shader for a subtle reddish tint to match theme
          const fs = gl.createShader(gl.FRAGMENT_SHADER);
          gl.shaderSource(fs, `precision mediump float; varying float vAlpha; void main() { gl_FragColor = vec4(1.0, 0.7, 0.7, vAlpha * 0.5); }`);
          gl.compileShader(fs);

          const prog = gl.createProgram();
          gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog); gl.useProgram(prog);

          const stars = new Float32Array(3000);
          for(let i=0; i<3000; i+=3) { stars[i] = (Math.random() - 0.5) * 4.0; stars[i+1] = (Math.random() - 0.5) * 4.0; stars[i+2] = Math.random(); }

          const buf = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.bufferData(gl.ARRAY_BUFFER, stars, gl.STATIC_DRAW);

          const posLoc = gl.getAttribLocation(prog, "position");
          gl.enableVertexAttribArray(posLoc); gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 0, 0);

          const timeLoc = gl.getUniformLocation(prog, "time");
          let start = performance.now();
          const draw = (now) => {
              gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
              gl.uniform1f(timeLoc, (now - start) / 1000.0);
              gl.drawArrays(gl.POINTS, 0, 1000);
              requestAnimationFrame(draw);
          };
          draw(start);
      }

      // Ambient Lights Breathing Animation
      const light1 = document.getElementById('light1');
      const light2 = document.getElementById('light2');

      if(light1) {
          light1.animate([
              { transform: 'translate(-50%, 0) scale(1)', opacity: 0.1 },
              { transform: 'translate(-45%, 5%) scale(1.1)', opacity: 0.15 },
              { transform: 'translate(-50%, 0) scale(1)', opacity: 0.1 }
          ], { duration: 12000, iterations: Infinity, easing: 'ease-in-out' });
      }

      if(light2) {
          light2.animate([
              { transform: 'translate(0, 0) scale(1)', opacity: 0.05 },
              { transform: 'translate(-5%, -5%) scale(1.2)', opacity: 0.1 },
              { transform: 'translate(0, 0) scale(1)', opacity: 0.05 }
          ], { duration: 15000, iterations: Infinity, easing: 'ease-in-out', delay: 2000 });
      }
    });

    window.toggleFaq = function(btn) {
        const currentGroup = btn.closest('.group');
        const currentGrid = currentGroup.querySelector('.grid');
        const currentIcon = btn.querySelector('.faq-icon');
        const isOpen = currentGrid.classList.contains('grid-rows-[1fr]');

        // Close all
        document.querySelectorAll('.faq-icon').forEach(icon => {
            icon.classList.remove('rotate-45');
        });
        document.querySelectorAll('.group .grid').forEach(grid => {
            grid.classList.remove('grid-rows-[1fr]');
            grid.classList.add('grid-rows-[0fr]');
        });

        // Toggle current
        if (!isOpen) {
            currentGrid.classList.remove('grid-rows-[0fr]');
            currentGrid.classList.add('grid-rows-[1fr]');
            currentIcon.classList.add('rotate-45');
        }
    };
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed inset-0 z-0 pointer-events-none opacity-60" height="999" id="webgl-stars" width="1824"></canvas>

<div className="fixed inset-0 opacity-[0.04] pointer-events-none z-50 mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E\')'}}></div>

<div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#862317]/10 blur-[120px] rounded-full pointer-events-none z-0" id="light1"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#862317]/5 blur-[100px] rounded-full pointer-events-none z-0" id="light2"></div>
<div className="z-10 w-full relative">

<nav className="sticky top-0 z-50 bg-[#030303]/80 backdrop-blur-sm border-b border-zinc-800/50">
<div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-wrap md:flex-nowrap items-center md:gap-4 lg:gap-8 relative">

<div className="flex-shrink-0 flex items-center gap-1 text-xl tracking-tight font-normal text-white">
          Larry Long Jr.
        </div>

<div className="flex items-center gap-4 ml-auto md:hidden">
<a className="flex items-center justify-center px-4 py-1.5 bg-[#862317] text-white border border-[#862317]/50 rounded-full text-sm font-normal shadow-[0_0_15px_rgba(134,35,23,0.3)] transition-all" href="#">
            Book Call
          </a>
<button aria-expanded="false" aria-label="Toggle navigation" className="text-zinc-400 hover:text-white transition-colors flex items-center justify-center p-1 focus:outline-none" id="mobile-menu-btn" onclick="const menu = document.getElementById('mobile-menu'); const expanded = this.getAttribute('aria-expanded') === 'true'; this.setAttribute('aria-expanded', !expanded); menu.classList.toggle('opacity-0'); menu.classList.toggle('invisible'); menu.classList.toggle('-translate-y-4'); menu.classList.toggle('opacity-100'); menu.classList.toggle('visible'); menu.classList.toggle('translate-y-0');">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>


<div className="hidden md:flex items-center justify-end flex-shrink-0 gap-4 ml-auto whitespace-nowrap">
<a className="flex items-center justify-center px-6 py-2 bg-[#862317] text-white border border-[#862317]/50 rounded-full text-base font-normal hover:bg-[#6b1c12] shadow-[0_0_15px_rgba(134,35,23,0.3)] transition-all hover:shadow-[0_0_20px_rgba(134,35,23,0.5)]" href="#">
            Book a Strategy Call
          </a>
</div>
</div>

<div className="absolute top-full left-0 w-full bg-[#030303]/95 backdrop-blur-xl border-b border-zinc-800/50 px-6 py-6 flex flex-col gap-6 shadow-2xl transition-all duration-300 opacity-0 -translate-y-4 invisible md:hidden z-40" id="mobile-menu">
<div className="flex flex-col gap-4 text-base text-zinc-400 font-normal">
<a className="hover:text-[#862317] transition-colors" href="#">Approach</a>
<a className="hover:text-[#862317] transition-colors" href="#">Programs</a>
<a className="hover:text-[#862317] transition-colors" href="#">About</a>
<a className="hover:text-[#862317] transition-colors" href="#">FAQ</a>
</div>
<div className="h-px w-full bg-zinc-800/50"></div>
<div className="flex flex-col gap-4 text-base text-zinc-400 font-normal">
<a className="inline-flex items-center justify-center px-6 py-2 bg-[#862317] text-white rounded-full text-base font-normal shadow-[0_0_15px_rgba(134,35,23,0.3)] w-fit" href="#">
            Book a Strategy Call
          </a>
</div>
</div>
</nav>

<section className="text-center max-w-[1000px] mx-auto pt-24 px-6 pb-24 relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.5)] border border-zinc-700/50 mb-8 backdrop-blur-md mx-auto">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#862317] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#862317] shadow-[0_0_8px_rgba(134,35,23,0.8)]"></span>
</span>
<span className="text-xs font-light text-[#862317] tracking-wide uppercase">
          Sales Motivation &amp; Leadership
        </span>
</div>
<h1 className="text-5xl md:text-7xl font-extralight tracking-tight leading-[1.1] mb-6 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
<span className="block">Ignite Your Sales Team’s</span>
<span className="block bg-clip-text font-medium italic text-transparent bg-gradient-to-b from-[#b53424] to-[#862317] drop-shadow-[0_0_15px_rgba(134,35,23,0.4)]">
          Energy and Performance
        </span>
</h1>
<p className="leading-relaxed text-xl text-zinc-300/80 font-extralight max-w-2xl mr-auto mb-10 ml-auto">
        Larry Long Jr. helps sales teams and leaders unlock confidence, strengthen mindset, and perform at their highest level.
      </p>
<div className="flex justify-center mb-16 relative z-20">
<a className="px-8 py-3.5 bg-[#862317] text-white border border-[#862317]/50 rounded-full text-lg font-light shadow-[0_0_20px_rgba(134,35,23,0.4)] hover:bg-[#6b1c12] transition-all hover:shadow-[0_0_25px_rgba(134,35,23,0.6)] whitespace-nowrap" href="#">
          Book a Strategy Call
        </a>
</div>

<div className="w-full max-w-4xl mx-auto aspect-video bg-zinc-900/40 border border-zinc-800 rounded-[2rem] shadow-[inset_0_1px_10px_rgba(0,0,0,1)] flex flex-col items-center justify-center relative overflow-hidden group backdrop-blur-sm">
<div className="absolute inset-0 bg-gradient-to-tr from-[#862317]/10 to-transparent opacity-50"></div>
<div className="absolute inset-0 pointer-events-none z-10 opacity-20 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 4px)'}}></div>
<div className="relative z-20 flex flex-col items-center text-center p-6">
<div className="w-16 h-16 rounded-full bg-[#862317]/20 border border-[#862317]/50 flex items-center justify-center mb-4 text-[#862317] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(134,35,23,0.3)]">
<iconify-icon className="text-4xl" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-zinc-500 font-light tracking-widest text-xs uppercase mb-2">Video Placeholder</span>
<span className="text-zinc-300 text-lg font-light max-w-sm">Watch Larry Share His Sales Motivation Philosophy</span>
</div>
</div>
</section>

<div className="w-full h-px relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#862317]/40 to-transparent drop-shadow-[0_0_8px_rgba(134,35,23,0.35)]"></div>
</div>

<section className="py-24 px-6 relative z-10 bg-black/20 backdrop-blur-sm">
<div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">

<div className="w-full max-w-5xl h-48 bg-zinc-900/30 border border-zinc-800 border-dashed rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-[#862317]/5 to-transparent opacity-50"></div>
<div className="relative z-10 flex flex-col items-center p-4">
<iconify-icon className="text-4xl text-zinc-600 mb-3 group-hover:text-[#862317]/70 transition-colors" icon="solar:gallery-wide-linear"></iconify-icon>
<span className="text-zinc-500 font-light tracking-widest text-xs uppercase mb-2">Image Placeholder</span>
<span className="text-zinc-400 text-sm font-light">Organizations inspired by Larry Long Jr.’s leadership and energy</span>
</div>
</div>
</div>
</section>

<div className="w-full h-px relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#862317]/40 to-transparent drop-shadow-[0_0_8px_rgba(134,35,23,0.35)]"></div>
</div>

<section className="py-24 px-6 max-w-[1200px] mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-16 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
        Why Many Sales Teams Lose Momentum
      </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">

<div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-zinc-800/60 transition-colors backdrop-blur-sm group shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] relative overflow-hidden">
<div className="relative z-10 flex flex-col items-center justify-center">
<div className="w-12 h-12 bg-[#862317]/10 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(134,35,23,0.1)] border border-[#862317]/20 group-hover:border-[#862317]/40 transition-colors">
<iconify-icon className="text-2xl text-[#862317]" icon="solar:battery-charge-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-light tracking-tight text-zinc-200 mb-3 group-hover:text-white transition-colors">
              Low Energy &amp; Motivation
            </h3>
<p className="text-base text-zinc-500 font-extralight">
              Teams struggle to maintain consistent enthusiasm.
            </p>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#862317]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-zinc-800/60 transition-colors backdrop-blur-sm group shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] relative overflow-hidden">
<div className="relative z-10 flex flex-col items-center justify-center">
<div className="w-12 h-12 bg-[#862317]/10 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(134,35,23,0.1)] border border-[#862317]/20 group-hover:border-[#862317]/40 transition-colors">
<iconify-icon className="text-2xl text-[#862317]" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-light tracking-tight text-zinc-200 mb-3 group-hover:text-white transition-colors">
              Confidence Challenges
            </h3>
<p className="text-base text-zinc-500 font-extralight">
              Sales professionals hesitate in high-pressure conversations.
            </p>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#862317]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-zinc-800/60 transition-colors backdrop-blur-sm group shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] relative overflow-hidden">
<div className="relative z-10 flex flex-col items-center justify-center">
<div className="w-12 h-12 bg-[#862317]/10 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(134,35,23,0.1)] border border-[#862317]/20 group-hover:border-[#862317]/40 transition-colors">
<iconify-icon className="text-2xl text-[#862317]" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-light tracking-tight text-zinc-200 mb-3 group-hover:text-white transition-colors">
              Leadership Gaps
            </h3>
<p className="text-base text-zinc-500 font-extralight">
              Managers struggle to inspire consistent performance.
            </p>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#862317]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-zinc-800/60 transition-colors backdrop-blur-sm group shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] relative overflow-hidden">
<div className="relative z-10 flex flex-col items-center justify-center">
<div className="w-12 h-12 bg-[#862317]/10 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(134,35,23,0.1)] border border-[#862317]/20 group-hover:border-[#862317]/40 transition-colors">
<iconify-icon className="text-2xl text-[#862317]" icon="solar:graph-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-light tracking-tight text-zinc-200 mb-3 group-hover:text-white transition-colors">
              Performance Plateaus
            </h3>
<p className="text-base text-zinc-500 font-extralight">
              Without mindset development, teams stop improving.
            </p>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#862317]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-[1200px] mx-auto relative z-10">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">
          Why Teams Learn From Larry Long Jr.
        </h2>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] flex flex-col justify-center relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 bg-[#862317] h-0 group-hover:h-full transition-all duration-500"></div>
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-lg bg-[#862317]/10 flex items-center justify-center text-[#862317] border border-[#862317]/20">
<iconify-icon className="text-xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl font-light text-white">High-Energy Leadership</h3>
</div>
<p className="text-zinc-400 font-extralight leading-relaxed pl-14">
            Known for inspiring teams to perform at their best.
          </p>
</div>

<div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] flex flex-col justify-center relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 bg-[#862317] h-0 group-hover:h-full transition-all duration-500"></div>
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-lg bg-[#862317]/10 flex items-center justify-center text-[#862317] border border-[#862317]/20">
<iconify-icon className="text-xl" icon="solar:star-fall-linear"></iconify-icon>
</div>
<h3 className="text-xl font-light text-white">Sales Motivation Expertise</h3>
</div>
<p className="text-zinc-400 font-extralight leading-relaxed pl-14">
            Helping professionals develop stronger confidence.
          </p>
</div>

<div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] flex flex-col justify-center relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 bg-[#862317] h-0 group-hover:h-full transition-all duration-500"></div>
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-lg bg-[#862317]/10 flex items-center justify-center text-[#862317] border border-[#862317]/20">
<iconify-icon className="text-xl" icon="solar:brain-linear"></iconify-icon>
</div>
<h3 className="text-xl font-light text-white">Mindset-Driven Performance</h3>
</div>
<p className="text-zinc-400 font-extralight leading-relaxed pl-14">
            Focusing on mental resilience and growth.
          </p>
</div>

<div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] flex flex-col justify-center relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 bg-[#862317] h-0 group-hover:h-full transition-all duration-500"></div>
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-lg bg-[#862317]/10 flex items-center justify-center text-[#862317] border border-[#862317]/20">
<iconify-icon className="text-xl" icon="solar:diploma-verified-linear"></iconify-icon>
</div>
<h3 className="text-xl font-light text-white">Engaging Sales Training</h3>
</div>
<p className="text-zinc-400 font-extralight leading-relaxed pl-14">
            Delivering practical strategies that energize teams.
          </p>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 bg-black/30 backdrop-blur-sm border-y border-zinc-900/80">
<div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-white leading-tight mb-6 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
            Sales teams across industries benefit from Larry Long Jr.’s motivational approach to leadership and performance development.
          </h2>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-400 font-light uppercase tracking-widest">
<span className="w-1.5 h-1.5 rounded-full bg-[#862317] shadow-[0_0_8px_rgba(134,35,23,0.8)]"></span>
            Proven Impact
          </div>
</div>

<div className="w-full aspect-square md:aspect-[4/3] bg-zinc-900/40 border border-zinc-800 border-dashed rounded-[2rem] flex flex-col items-center justify-center relative overflow-hidden shadow-[inset_0_1px_10px_rgba(0,0,0,1)]">
<div className="absolute inset-0 bg-gradient-to-tr from-[#862317]/5 to-transparent opacity-50"></div>
<div className="relative z-10 flex flex-col items-center p-6 text-center">
<iconify-icon className="text-4xl text-zinc-600 mb-4" icon="solar:chat-square-like-linear"></iconify-icon>
<span className="text-zinc-500 font-light tracking-widest text-xs uppercase mb-2">Image Placeholder</span>
<span className="text-zinc-400 text-sm font-light">Audience insights and leadership impact</span>
</div>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-32 relative z-10">
<div className="max-w-2xl mx-auto text-center mb-20">
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white leading-tight">
          How Larry Long Jr. Elevates
          <span className="block text-zinc-300/70">Sales Performance</span>
</h2>
</div>
<div className="relative max-w-4xl mx-auto">
<style>
          @keyframes text-slide {
            0% { top: -150px; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
        </style>

<div className="absolute left-1/2 top-10 bottom-10 w-4 -translate-x-1/2 bg-zinc-900/50 backdrop-blur-sm rounded-full z-0 hidden md:flex flex-col justify-between items-center py-0 border border-zinc-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.7)]">
<div className="absolute inset-y-0 w-1 bg-zinc-800 rounded-full overflow-hidden z-0">
<div className="absolute -top-32 left-0 w-full h-32 bg-gradient-to-b from-transparent via-[#862317] to-transparent animate-[text-slide_3s_linear_infinite] shadow-[0_0_15px_rgba(134,35,23,0.8)]"></div>
</div>
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 transition-transform hover:scale-110 -mt-5">
<div className="w-3 h-3 rounded-full bg-[#862317] shadow-[0_0_10px_rgba(134,35,23,0.8)] border border-[#862317]/50"></div>
</div>
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 transition-transform hover:scale-110">
<div className="w-3 h-3 rounded-full bg-[#862317] shadow-[0_0_10px_rgba(134,35,23,0.8)] border border-[#862317]/50"></div>
</div>
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 transition-transform hover:scale-110 -mb-5">
<div className="w-3 h-3 rounded-full bg-[#862317] shadow-[0_0_10px_rgba(134,35,23,0.8)] border border-[#862317]/50"></div>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 mb-20 group">
<div className="md:w-1/2 md:pr-16 md:text-right w-full">
<div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-[10px] font-light text-zinc-400 tracking-widest uppercase mb-3 md:float-right">
              Step 1
            </div>
<div className="clear-both"></div>
<h3 className="text-2xl font-light text-zinc-100 mb-2">
              Strengthen Sales Mindset
            </h3>
<p className="text-base text-zinc-400 font-extralight leading-relaxed md:ml-auto">
              Develop confidence and belief in success.
            </p>
</div>
<div className="md:w-1/2 md:pl-16 w-full hidden md:block">
<div className="w-16 h-16 rounded-2xl bg-zinc-900/80 flex items-center justify-center border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] group-hover:border-[#862317]/30 transition-colors">
<iconify-icon className="text-3xl text-[#862317]" icon="solar:target-linear"></iconify-icon>
</div>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 mb-20 group">
<div className="md:w-1/2 md:pr-16 hidden md:flex justify-end order-2 md:order-1">
<div className="w-16 h-16 rounded-2xl bg-zinc-900/80 flex items-center justify-center border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] group-hover:border-[#862317]/30 transition-colors">
<iconify-icon className="text-3xl text-[#862317]" icon="solar:flame-linear"></iconify-icon>
</div>
</div>
<div className="md:w-1/2 md:pl-16 w-full order-1 md:order-2 text-left">
<div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-[10px] font-light text-zinc-400 tracking-widest uppercase mb-3">
              Step 2
            </div>
<h3 className="text-2xl font-light text-zinc-100 mb-2">
              Increase Team Energy
            </h3>
<p className="text-base text-zinc-400 font-extralight leading-relaxed">
              Inspire motivation and enthusiasm.
            </p>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 group">
<div className="md:w-1/2 md:pr-16 md:text-right w-full">
<div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-[10px] font-light text-zinc-400 tracking-widest uppercase mb-3 md:float-right">
              Step 3
            </div>
<div className="clear-both"></div>
<h3 className="text-2xl font-light text-zinc-100 mb-2">
              Improve Sales Execution
            </h3>
<p className="text-base text-zinc-400 font-extralight leading-relaxed md:ml-auto">
              Equip teams with practical strategies.
            </p>
</div>
<div className="md:w-1/2 md:pl-16 w-full hidden md:block">
<div className="w-16 h-16 rounded-2xl bg-zinc-900/80 flex items-center justify-center border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] group-hover:border-[#862317]/30 transition-colors">
<iconify-icon className="text-3xl text-[#862317]" icon="solar:rocket-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center justify-center px-8 py-4 bg-[#862317] text-white rounded-full text-lg font-light shadow-[0_0_20px_rgba(134,35,23,0.4)] hover:bg-[#6b1c12] transition-all hover:shadow-[0_0_25px_rgba(134,35,23,0.6)]" href="#">
          Elevate Your Team Performance
        </a>
</div>
</section>

<div className="w-full h-px relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#862317]/40 to-transparent drop-shadow-[0_0_8px_rgba(134,35,23,0.35)]"></div>
</div>

<section className="py-24 px-6 max-w-[1000px] mx-auto relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-16 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
        What's Included
      </h2>
<div className="flex flex-wrap justify-center gap-4">
<div className="px-6 py-4 bg-zinc-900/40 border border-zinc-800 rounded-full flex items-center gap-3 backdrop-blur-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] hover:border-[#862317]/40 transition-colors cursor-default">
<iconify-icon className="text-xl text-[#862317]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-zinc-200 font-light">Sales Motivation Training</span>
</div>
<div className="px-6 py-4 bg-zinc-900/40 border border-zinc-800 rounded-full flex items-center gap-3 backdrop-blur-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] hover:border-[#862317]/40 transition-colors cursor-default">
<iconify-icon className="text-xl text-[#862317]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-zinc-200 font-light">Leadership Development</span>
</div>
<div className="px-6 py-4 bg-zinc-900/40 border border-zinc-800 rounded-full flex items-center gap-3 backdrop-blur-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] hover:border-[#862317]/40 transition-colors cursor-default">
<iconify-icon className="text-xl text-[#862317]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-zinc-200 font-light">Sales Mindset Coaching</span>
</div>
<div className="px-6 py-4 bg-zinc-900/40 border border-zinc-800 rounded-full flex items-center gap-3 backdrop-blur-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] hover:border-[#862317]/40 transition-colors cursor-default">
<iconify-icon className="text-xl text-[#862317]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-zinc-200 font-light">Team Performance Workshops</span>
</div>
<div className="px-6 py-4 bg-zinc-900/40 border border-zinc-800 rounded-full flex items-center gap-3 backdrop-blur-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] hover:border-[#862317]/40 transition-colors cursor-default">
<iconify-icon className="text-xl text-[#862317]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-zinc-200 font-light">Keynote Speaking Programs</span>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 bg-black/30 backdrop-blur-sm border-y border-zinc-900/80">
<div className="max-w-[1000px] mx-auto grid md:grid-cols-5 gap-12 items-center">

<div className="md:col-span-2 w-full aspect-[3/4] bg-zinc-900/40 border border-zinc-800 border-dashed rounded-[2rem] flex flex-col items-center justify-center relative overflow-hidden shadow-[inset_0_1px_10px_rgba(0,0,0,1)]">
<div className="absolute inset-0 bg-gradient-to-tr from-[#862317]/10 to-transparent opacity-50"></div>
<div className="relative z-10 flex flex-col items-center p-6 text-center">
<iconify-icon className="text-5xl text-zinc-600 mb-4" icon="solar:user-id-linear"></iconify-icon>
<span className="text-zinc-500 font-light tracking-widest text-xs uppercase">Image Placeholder</span>
</div>
</div>
<div className="md:col-span-3 text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#862317]/20 bg-[#862317]/10 text-xs text-[#862317] font-light uppercase tracking-widest mb-6">
            Meet the Speaker
          </div>
<h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
            Hi, I’m Larry Long Jr.
          </h2>
<div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
<p className="">
              I work with sales teams and leaders to build confidence, strengthen mindset, and unlock higher levels of performance.
            </p>
<p className="">
              My mission is simple: help individuals and teams bring their best energy to every opportunity.
            </p>
</div>
</div>
</div>
</section>

<section className="max-w-[800px] mx-auto px-6 py-32 relative z-10">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
          Frequently Asked Questions
        </h2>
</div>
<div className="space-y-1">

<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
<span className="text-lg font-light text-zinc-300 group-hover:text-white transition-colors duration-300">
              Who is this designed for?
            </span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-[#862317] transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                Sales teams and leaders seeking stronger performance and motivation.
              </p>
</div>
</div>
</div>

<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
<span className="text-lg font-light text-zinc-300 group-hover:text-white transition-colors duration-300">
              Is this sales training or leadership development?
            </span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-[#862317] transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                Both — combining mindset, leadership, and sales performance.
              </p>
</div>
</div>
</div>

<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
<span className="text-lg font-light text-zinc-300 group-hover:text-white transition-colors duration-300">
              Does this work for experienced teams?
            </span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-[#862317] transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                Yes. The focus is unlocking higher levels of energy and execution.
              </p>
</div>
</div>
</div>

<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
<span className="text-lg font-light text-zinc-300 group-hover:text-white transition-colors duration-300">
              What makes Larry’s approach different?
            </span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-[#862317] transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                A powerful combination of motivation, leadership, and practical sales insights.
              </p>
</div>
</div>
</div>

<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
<span className="text-lg font-light text-zinc-300 group-hover:text-white transition-colors duration-300">
              How do we get started?
            </span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-[#862317] transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                Book a strategy call.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-24 relative z-10">
<div className="bg-zinc-900/50 rounded-[2.5rem] shadow-[inset_0_1px_10px_rgba(0,0,0,1)] flex flex-col lg:flex-row overflow-hidden border border-zinc-800 backdrop-blur-sm relative">
<div className="absolute inset-0 bg-gradient-to-br from-[#862317]/10 via-transparent to-black pointer-events-none"></div>

<div className="p-10 lg:p-20 flex-1 flex flex-col justify-center text-center lg:text-left items-center lg:items-start max-w-2xl relative z-10">
<div className="absolute inset-0 bg-[#862317]/5 blur-[80px] rounded-full pointer-events-none z-0"></div>
<h2 className="text-4xl md:text-[2.75rem] tracking-tight text-white mb-6 leading-[1.1] drop-shadow-[0_2px_15px_rgba(134,35,23,0.15)] font-light relative z-10">
            Ignite Your Sales Team’s
            <span className="text-[#b53424] italic block">Performance</span>
</h2>
<p className="text-lg text-zinc-400 font-extralight mb-10 max-w-md leading-relaxed relative z-10 mx-auto lg:mx-0">
            Book a conversation with Larry Long Jr. to explore how his energy-driven leadership approach can elevate your team’s results.
          </p>
<div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start relative z-10">
<button className="py-4 bg-[#862317] text-white border border-[#862317]/50 font-light text-lg hover:bg-[#6b1c12] transition-colors shadow-[0_0_20px_rgba(134,35,23,0.4)] px-10 rounded-full w-full sm:w-auto">
              Book My Call
            </button>
</div>
</div>

<div className="flex-1 min-h-[400px] lg:min-h-[500px] relative bg-zinc-900/30 border-t lg:border-t-0 lg:border-l border-zinc-700/30 flex items-center justify-center p-8">
<div className="absolute inset-0 pointer-events-none z-20 opacity-10 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 4px)'}}></div>
<div className="w-full max-w-sm aspect-[3/4] bg-[#050505] rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-zinc-800 border-dashed flex flex-col items-center justify-center relative z-30">
<iconify-icon className="text-5xl text-zinc-600 mb-4" icon="solar:calendar-date-linear"></iconify-icon>
<span className="text-zinc-500 font-light tracking-widest text-sm uppercase mb-2">Calendly Placeholder</span>
<span className="text-zinc-600 text-xs font-light">Embed calendar widget here</span>
</div>
</div>
</div>
</section>

<footer className="bg-[#000000] border-t border-zinc-900 pt-24 pb-16 relative z-10">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-light text-zinc-500">
<div className="text-lg font-medium text-white tracking-tight">
            Larry Long Jr.
          </div>
<div className="flex flex-wrap items-center gap-x-6 gap-y-3">
<a className="hover:text-[#862317] transition-colors" href="#">LinkedIn</a>
<a className="hover:text-[#862317] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#862317] transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
