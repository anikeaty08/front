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
                const canvas = document.getElementById('webgl-stars');
                const gl = canvas.getContext('webgl');
                if (gl) {
                    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; gl.viewport(0, 0, canvas.width, canvas.height); };
                    window.addEventListener('resize', resize);
                    resize();

                    const vs = gl.createShader(gl.VERTEX_SHADER);
                    gl.shaderSource(vs, `attribute vec3 position; uniform float time; varying float vAlpha; void main() { float z = mod(position.z - time * 0.1, 1.0); vec2 pos = position.xy / (z * 2.0); gl_Position = vec4(pos, 0.0, 1.0); gl_PointSize = (1.0 - z) * 2.5; vAlpha = (1.0 - z) * 0.8; }`);
                    gl.compileShader(vs);

                    const fs = gl.createShader(gl.FRAGMENT_SHADER);
                    // Tinted red instead of green
                    gl.shaderSource(fs, `precision mediump float; varying float vAlpha; void main() { gl_FragColor = vec4(1.0, 0.4, 0.4, vAlpha); }`);
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

                const track = document.getElementById('marquee-track');
                if(track) {
                    track.animate([
                        { transform: 'translateX(0)' },
                        { transform: 'translateX(-50%)' }
                    ], { duration: 40000, iterations: Infinity, easing: 'linear' });
                }

                const light1 = document.getElementById('light1');
                const light2 = document.getElementById('light2');

                if(light1) {
                    light1.animate([
                        { transform: 'translate(-50%, 0) scale(1)', opacity: 0.1 },
                        { transform: 'translate(-45%, 5%) scale(1.1)', opacity: 0.2 },
                        { transform: 'translate(-50%, 0) scale(1)', opacity: 0.1 }
                    ], { duration: 12000, iterations: Infinity, easing: 'ease-in-out' });
                }

                if(light2) {
                    light2.animate([
                        { transform: 'translate(0, 0) scale(1)', opacity: 0.1 },
                        { transform: 'translate(-5%, -5%) scale(1.2)', opacity: 0.2 },
                        { transform: 'translate(0, 0) scale(1)', opacity: 0.1 }
                    ], { duration: 15000, iterations: Infinity, easing: 'ease-in-out', delay: 2000 });
                }
            });
    


      document.addEventListener('DOMContentLoaded', () => {
              const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
              const revealElements = document.querySelectorAll('.reveal-item');

              if (prefersReducedMotion) {
                revealElements.forEach(el => {
                  el.classList.add('is-visible');
                });
                return;
              }

              const delays = [450, 1400, 2350, 3300];
              revealElements.forEach((el, index) => {
                setTimeout(() => {
                  el.classList.add('is-visible');
                }, delays[index] || 3300);
              });
            });
    


      document.addEventListener('DOMContentLoaded', () => {
              const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
              const logoTrack = document.getElementById('logo-marquee-track');
              if (logoTrack && !prefersReducedMotion) {
                logoTrack.animate([
                  { transform: 'translateX(0)' },
                  { transform: 'translateX(-50%)' }
                ], { duration: 60000, iterations: Infinity, easing: 'linear' });
              }
            });
    


      window.toggleFaq = function(btn) {
          const container = btn.closest('.kb-content');
          const currentGroup = btn.closest('.group');
          const currentGrid = currentGroup.querySelector('.grid');
          const currentIcon = btn.querySelector('.faq-icon');

          const isOpen = currentGrid.classList.contains('grid-rows-[1fr]');

          container.querySelectorAll('.group').forEach(group => {
              group.querySelector('.grid').classList.remove('grid-rows-[1fr]');
              group.querySelector('.grid').classList.add('grid-rows-[0fr]');
              const icon = group.querySelector('.faq-icon');
              if(icon) icon.classList.remove('rotate-45', 'text-white');
          });

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
      

<canvas className="fixed inset-0 z-0 pointer-events-none opacity-40" height="884" id="webgl-stars" width="1568"></canvas>

<div className="fixed inset-0 opacity-[0.04] pointer-events-none z-50 mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E\')'}}></div>

<div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden mix-blend-screen">
<div className="w-full h-full max-w-[1200px] relative">
<div className="absolute top-0 left-0 w-1/2 h-[150%] bg-gradient-to-r from-red-600/10 to-transparent blur-3xl origin-top-left animate-[gap-tension_10s_ease-in-out_infinite]"></div>
<div className="absolute bottom-0 right-0 w-1/2 h-[150%] bg-gradient-to-l from-orange-600/10 to-transparent blur-3xl origin-bottom-right animate-[gap-tension-reverse_10s_ease-in-out_infinite]"></div>

<div className="absolute left-1/2 top-[-20%] bottom-[-20%] w-[1px] bg-gradient-to-b from-transparent via-red-500/20 to-transparent transform -translate-x-1/2 -skew-x-[15deg]"></div>
</div>
</div>

<div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none z-0" id="light1"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-600/10 blur-[100px] rounded-full pointer-events-none z-0" id="light2"></div>
<div className="z-10 w-full relative">

<nav className="sticky top-0 z-50 bg-[#030303]/80 backdrop-blur-sm border-b border-zinc-800/50">
<div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-wrap md:flex-nowrap items-center md:gap-4 lg:gap-8 relative">

<div className="flex-shrink-0 flex items-center gap-2 text-xl tracking-tight font-normal text-white uppercase">
            Keenan
            <div className="h-7 px-2 bg-red-500/10 border border-red-500/30 rounded flex items-center justify-center">
<span className="text-xs font-semibold text-red-400 tracking-widest uppercase">
                Gap Selling
              </span>
</div>
</div>

<div className="flex items-center gap-4 ml-auto md:hidden">
<a className="flex items-center justify-center px-4 py-1.5 bg-zinc-800 text-red-400 border border-red-500/30 rounded-sm text-sm font-normal hover:bg-zinc-700 shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-all uppercase tracking-wide" href="#">
              Fix My Deals
            </a>
<button aria-expanded="false" aria-label="Toggle navigation" className="text-zinc-400 hover:text-white transition-colors flex items-center justify-center p-1 focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-md" id="mobile-menu-btn" onclick="const menu = document.getElementById('mobile-menu'); const expanded = this.getAttribute('aria-expanded') === 'true'; this.setAttribute('aria-expanded', !expanded); menu.classList.toggle('opacity-0'); menu.classList.toggle('invisible'); menu.classList.toggle('-translate-y-4'); menu.classList.toggle('opacity-100'); menu.classList.toggle('visible'); menu.classList.toggle('translate-y-0');">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="hidden md:flex lg:hidden flex-1 justify-center items-center gap-6 text-sm uppercase tracking-widest text-zinc-400 font-normal relative">
<a className="hover:text-red-400 transition-colors drop-shadow-[0_0_5px_rgba(239,68,68,0)] hover:drop-shadow-[0_0_5px_rgba(239,68,68,0.5)]" href="#">
              Methodology
            </a>
<button aria-controls="tablet-more-menu" aria-expanded="false" className="flex items-center gap-1 hover:text-red-400 transition-colors focus:outline-none" id="tablet-more-btn" onclick="const menu = document.getElementById('tablet-more-menu'); const expanded = this.getAttribute('aria-expanded') === 'true'; this.setAttribute('aria-expanded', !expanded); menu.classList.toggle('opacity-0'); menu.classList.toggle('invisible'); menu.classList.toggle('-translate-y-2'); menu.classList.toggle('opacity-100'); menu.classList.toggle('visible'); menu.classList.toggle('translate-y-0');">
              More
              <iconify-icon className="text-sm" icon="lucide:chevron-down"></iconify-icon>
</button>
<div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-48 bg-[#030303]/95 backdrop-blur-xl border border-zinc-800/50 rounded-xl px-5 py-5 flex flex-col gap-4 shadow-2xl transition-all duration-300 opacity-0 -translate-y-2 invisible z-50" id="tablet-more-menu">
<a className="hover:text-red-400 transition-colors" href="#">Training</a>
<a className="hover:text-red-400 transition-colors" href="#">Consulting</a>
<a className="hover:text-red-400 transition-colors" href="#">Speaking</a>
</div>
</div>

<div className="hidden md:flex items-center justify-end flex-shrink-0 gap-4 ml-auto whitespace-nowrap">
<a className="flex items-center justify-center px-6 py-2 bg-zinc-800 text-red-400 border border-red-500/30 rounded-sm text-sm uppercase tracking-wide font-normal hover:bg-zinc-700 shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-all hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]" href="#">
              Fix My Deals
            </a>
</div>
</div>

<div className="absolute top-full left-0 w-full bg-[#030303]/95 backdrop-blur-xl border-b border-zinc-800/50 px-6 py-6 flex flex-col gap-6 shadow-2xl transition-all duration-300 opacity-0 -translate-y-4 invisible md:hidden z-40" id="mobile-menu">
<div className="flex flex-col gap-4 text-sm uppercase tracking-widest text-zinc-400 font-normal">
<a className="hover:text-red-400 transition-colors" href="#">Methodology</a>
<a className="hover:text-red-400 transition-colors" href="#">Training</a>
<a className="hover:text-red-400 transition-colors" href="#">Consulting</a>
<a className="hover:text-red-400 transition-colors" href="#">Speaking</a>
</div>
<div className="h-px w-full bg-zinc-800/50"></div>
<div className="flex flex-col gap-4 text-base text-zinc-400 font-normal">
<a className="inline-flex items-center justify-center px-6 py-2 bg-zinc-800 text-red-400 border border-red-500/30 rounded-sm text-sm uppercase tracking-wide font-normal hover:bg-zinc-700 shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-all w-fit" href="#">
              Fix My Deals
            </a>
</div>
</div>
</nav>

<section className="text-center max-w-[900px] mr-auto ml-auto pt-20 pr-6 pb-12 pl-6 relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-zinc-900/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.5)] border border-zinc-700/50 mb-8 backdrop-blur-md mx-auto">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
</span>
<span className="text-[10px] font-bold text-zinc-300 tracking-widest uppercase">
            Deal Inspection &amp; Diagnosis
          </span>
</div>
<h1 className="text-5xl md:text-7xl font-extralight tracking-tight leading-[1.1] mb-6 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
<span className="block">You’re Not Losing Deals.</span>
<span className="block text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-red-700 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)] italic font-light">
            You’re Selling the Wrong Thing
          </span>
</h1>
<p className="leading-relaxed text-xl font-light text-zinc-300/80 max-w-2xl mr-auto mb-10 ml-auto">Most salespeople focus on product. Jim Keenan teaches you how to focus on the problem because that’s what actually closes deals.</p>
</section>

<section className="px-6 pb-20 relative z-10">
<div className="max-w-[1000px] mx-auto">
<div className="p-3 rounded-md bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse"></div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]"></div>
<div className="relative rounded-sm bg-[#050101] shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col min-h-[500px] overflow-hidden group cursor-pointer">

<div className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 4px)'}}></div>
<div className="absolute inset-0 bg-red-500/5 mix-blend-screen pointer-events-none z-10 animate-pulse" style={{animationDuration: '4s'}}></div>

<div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-8 text-center bg-zinc-950/40 backdrop-blur-sm hover:bg-zinc-950/20 transition-all duration-500">
<div className="w-20 h-20 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(239,68,68,0.3)] group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-5xl text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]" icon="solar:play-circle-bold"></iconify-icon>
</div>
<h3 className="text-3xl font-light tracking-tight text-white uppercase tracking-widest drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
                  VIDEO PLACEHOLDER
                </h3>
<p className="text-lg text-red-400 font-light mt-4 tracking-wide">
                  Watch: Why Your Deals Aren’t Closing
                </p>
</div>
</div>
</div>

<div className="mt-12 max-w-3xl mx-auto text-center">
<p className="text-xl text-white font-light mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                If your deals aren’t closing, the issue isn’t your pitch.<br/>
<span className="text-red-400 font-normal italic">It’s what you’re selling.</span>
</p>
<div className="text-zinc-400 font-light text-lg mb-10 flex flex-col md:flex-row justify-center gap-6 md:gap-12 text-left bg-zinc-900/40 border border-zinc-800/50 rounded-sm p-6 backdrop-blur-sm">
<div>
<p className="text-zinc-200 mb-3 font-medium uppercase text-xs tracking-widest">Most reps:</p>
<ul className="space-y-2 text-sm list-none">
<li className="flex items-center gap-2"><iconify-icon className="text-red-500" icon="solar:close-circle-linear"></iconify-icon> Jump to solutions too early</li>
<li className="flex items-center gap-2"><iconify-icon className="text-red-500" icon="solar:close-circle-linear"></iconify-icon> Don't fully understand the problem</li>
<li className="flex items-center gap-2"><iconify-icon className="text-red-500" icon="solar:close-circle-linear"></iconify-icon> Focus on product instead of impact</li>
<li className="flex items-center gap-2"><iconify-icon className="text-red-500" icon="solar:close-circle-linear"></iconify-icon> Run shallow discovery</li>
</ul>
</div>
<div className="w-px bg-zinc-800 hidden md:block"></div>
<div>
<p className="text-zinc-200 mb-3 font-medium uppercase text-xs tracking-widest">In this video, Keenan breaks down:</p>
<ul className="space-y-2 text-sm list-none">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Why deals fall apart</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> How to identify the real problem</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> What actually drives a buying decision</li>
</ul>
</div>
</div>
<a className="inline-flex items-center justify-center px-10 py-4 bg-red-600 text-white border border-red-500 rounded-sm text-lg uppercase tracking-widest font-medium shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:bg-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transition-all" href="#">
                Fix My Sales Approach
             </a>
</div>
</div>
</section>

<div className="pt-24 pb-24 bg-black/40 backdrop-blur-md relative z-10 border-t border-zinc-900/80">

<section className="mb-24 relative">
<div className="max-w-[1200px] mx-auto px-6 mb-10 text-center flex flex-col items-center gap-3">
<div className="text-base md:text-lg font-light tracking-[0.15em] uppercase text-white">
              Sales teams improving deal execution
            </div>
<div className="text-xs md:text-sm font-bold tracking-widest text-zinc-500 uppercase">
              Sales Growth Company
            </div>
</div>
<div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
<div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none"></div>
<div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none"></div>
<div className="flex w-max items-center opacity-60 hover:opacity-100 transition-all duration-500 text-zinc-300" id="logo-marquee-track">
<div className="flex items-center gap-x-16 pr-16">

<span className="text-xl md:text-2xl font-bold tracking-widest text-zinc-700 uppercase border border-zinc-800 px-6 py-2 rounded-sm bg-zinc-900/50">IMAGE PLACEHOLDER</span>
<span className="text-xl md:text-2xl font-bold tracking-widest text-zinc-700 uppercase border border-zinc-800 px-6 py-2 rounded-sm bg-zinc-900/50">IMAGE PLACEHOLDER</span>
<span className="text-xl md:text-2xl font-bold tracking-widest text-zinc-700 uppercase border border-zinc-800 px-6 py-2 rounded-sm bg-zinc-900/50">IMAGE PLACEHOLDER</span>
<span className="text-xl md:text-2xl font-bold tracking-widest text-zinc-700 uppercase border border-zinc-800 px-6 py-2 rounded-sm bg-zinc-900/50">IMAGE PLACEHOLDER</span>
<span className="text-xl md:text-2xl font-bold tracking-widest text-zinc-700 uppercase border border-zinc-800 px-6 py-2 rounded-sm bg-zinc-900/50">IMAGE PLACEHOLDER</span>
</div>
<div aria-hidden="true" className="flex items-center gap-x-16 pr-16">
<span className="text-xl md:text-2xl font-bold tracking-widest text-zinc-700 uppercase border border-zinc-800 px-6 py-2 rounded-sm bg-zinc-900/50">IMAGE PLACEHOLDER</span>
<span className="text-xl md:text-2xl font-bold tracking-widest text-zinc-700 uppercase border border-zinc-800 px-6 py-2 rounded-sm bg-zinc-900/50">IMAGE PLACEHOLDER</span>
<span className="text-xl md:text-2xl font-bold tracking-widest text-zinc-700 uppercase border border-zinc-800 px-6 py-2 rounded-sm bg-zinc-900/50">IMAGE PLACEHOLDER</span>
<span className="text-xl md:text-2xl font-bold tracking-widest text-zinc-700 uppercase border border-zinc-800 px-6 py-2 rounded-sm bg-zinc-900/50">IMAGE PLACEHOLDER</span>
<span className="text-xl md:text-2xl font-bold tracking-widest text-zinc-700 uppercase border border-zinc-800 px-6 py-2 rounded-sm bg-zinc-900/50">IMAGE PLACEHOLDER</span>
</div>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 mb-16 items-start justify-between">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-white leading-[1.3] max-w-3xl drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
              "The Problem Isn’t Your Pitch. It’s Your Diagnosis. Better demos won’t fix this. More follow-ups won’t fix this."
            </h2>
<div className="flex flex-col items-start lg:items-end text-left lg:text-right shrink-0">
<div className="text-lg md:text-xl text-white font-bold tracking-widest uppercase">
                Jim Keenan
              </div>
<div className="uppercase text-xs text-zinc-500 tracking-widest mt-1">
                Sales Growth Company
              </div>
<div className="text-sm text-red-400 font-bold tracking-widest uppercase mt-2 flex items-center gap-2 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">
                Gap Selling
              </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-sm shadow-[inset_0_1px_10px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] border border-zinc-800 flex flex-col h-56 justify-between relative overflow-hidden group hover:border-red-500/30 transition-colors">
<div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
<div className="flex flex-col h-full relative z-10 justify-between">
<div className="">
<div className="text-4xl md:text-5xl font-light tracking-tighter text-red-500 leading-none drop-shadow-[0_0_12px_rgba(239,68,68,0.6)] mb-4">
                    Clear
                  </div>
<h3 className="text-lg text-white font-light leading-tight">
                    The problem is clear
                  </h3>
<p className="text-sm text-zinc-400 font-light mt-1">
                    No guesswork, raw diagnosis.
                  </p>
</div>
<div className="mt-5 flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-zinc-600 group-hover:text-red-500 transition-colors">
<iconify-icon className="text-lg" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
                  Deals close when
                </div>
</div>
</div>
<div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-sm shadow-[inset_0_1px_10px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] border border-zinc-800 flex flex-col h-56 justify-between relative overflow-hidden group hover:border-orange-500/30 transition-colors">
<div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
<div className="flex flex-col h-full relative z-10 justify-between">
<div>
<div className="text-4xl md:text-5xl font-light tracking-tighter text-orange-500 leading-none drop-shadow-[0_0_12px_rgba(249,115,22,0.6)] mb-4">
                    Understood
                  </div>
<h3 className="text-lg text-white font-light leading-tight">
                    The gap is understood
                  </h3>
<p className="text-sm text-zinc-400 font-light mt-1">
                    Current state vs Future state.
                  </p>
</div>
<div className="mt-5 flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-zinc-600 group-hover:text-orange-500 transition-colors">
<iconify-icon className="text-lg" icon="solar:ruler-linear" strokeWidth="1.5"></iconify-icon>
                  Deals close when
                </div>
</div>
</div>
<div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-sm shadow-[inset_0_1px_10px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] border border-zinc-800 flex flex-col h-56 justify-between relative overflow-hidden group hover:border-white/30 transition-colors">
<div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
<div className="flex flex-col h-full relative z-10 justify-between">
<div className="">
<div className="text-4xl md:text-5xl font-light tracking-tighter text-white leading-none drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] mb-4">
                    Real
                  </div>
<h3 className="text-lg text-white font-light leading-tight">
                    The impact is real
                  </h3>
<p className="text-sm text-zinc-400 font-light mt-1">
                    Business value over product features.
                  </p>
</div>
<div className="mt-5 flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-zinc-600 group-hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
                  Deals close when
                </div>
</div>
</div>
</div>
</section>
</div>
<div className="w-full h-px relative overflow-hidden z-20">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent"></div>

<div className="absolute left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-red-600/60 to-transparent drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]"></div>
</div>

<section className="py-24 px-6 max-w-[1200px] mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)] uppercase tracking-wide">
          Why Your Deals Don’t Close
        </h2>
<p className="text-lg text-zinc-400 font-light mb-16 max-w-xl mx-auto">
          It’s not the economy. It’s not your competitors. 
          <br className="hidden md:block"/>
          It’s how you diagnose the buyer’s world.
        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">

<div className="bg-zinc-900/40 border border-zinc-800 rounded-sm p-8 flex flex-col items-center text-center hover:bg-zinc-800/60 transition-colors backdrop-blur-sm group shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] relative overflow-hidden min-h-[400px]">

<div className="relative z-10 flex flex-col items-center justify-center flex-1 transition-opacity duration-200 md:group-hover:opacity-0">
<div className="w-12 h-12 bg-red-950/50 rounded flex items-center justify-center mb-6 border border-red-500/20 group-hover:border-red-500/40 transition-colors">
<iconify-icon className="text-2xl text-red-500 drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]" icon="solar:magnifer-bug-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-bold tracking-tight text-zinc-200 mb-3 uppercase group-hover:text-red-400 transition-colors">
                Surface-level discovery
              </h3>
<p className="text-base text-zinc-500 font-light max-w-[26ch]">
                Problems aren’t fully understood. You’re diagnosing symptoms instead of root causes.
              </p>
<div className="mt-4 inline-flex items-center gap-2 border border-zinc-700 bg-zinc-800/50 px-3 py-1.5 text-[10px] uppercase font-bold text-zinc-400 tracking-widest rounded-sm">
                Diagnosis Failure
              </div>
</div>

<div className="hidden md:flex absolute inset-0 z-20 flex-col translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-zinc-900/95 backdrop-blur-sm">
<div className="absolute top-0 left-0 right-0 h-px bg-red-500/50"></div>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-red-600/20 blur-2xl"></div>
<div className="h-full p-6 flex flex-col text-left">
<div className="flex items-start justify-between gap-4">
<div className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">
                    The Fix
                  </div>
<div className="text-[10px] uppercase font-bold text-red-400 tracking-widest whitespace-nowrap">
                    Go Deeper
                  </div>
</div>
<div className="mt-4"></div>
<div className="flex-1 overflow-auto pr-1">
<p className="text-sm text-zinc-300 font-light leading-relaxed mb-5">
                    Stop accepting the first answer. Interrogate the problem until you expose the operational impact.
                  </p>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800 rounded-sm p-8 flex flex-col items-center text-center hover:bg-zinc-800/60 transition-colors backdrop-blur-sm group shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] relative overflow-hidden min-h-[400px]">
<div className="relative z-10 flex flex-col items-center justify-center flex-1 transition-opacity duration-200 md:group-hover:opacity-0">
<div className="w-12 h-12 bg-orange-950/50 rounded flex items-center justify-center mb-6 border border-orange-500/20 group-hover:border-orange-500/40 transition-colors">
<iconify-icon className="text-2xl text-orange-500 drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]" icon="solar:stopwatch-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-bold tracking-tight text-zinc-200 mb-3 uppercase group-hover:text-orange-400 transition-colors">
                Selling too early
              </h3>
<p className="text-base text-zinc-500 font-light max-w-[26ch]">
                Solutions come before clarity. You pitch the product before they agree on the problem.
              </p>
<div className="mt-4 inline-flex items-center gap-2 border border-zinc-700 bg-zinc-800/50 px-3 py-1.5 text-[10px] uppercase font-bold text-zinc-400 tracking-widest rounded-sm">
                Timing Failure
              </div>
</div>
<div className="hidden md:flex absolute inset-0 z-20 flex-col translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-zinc-900/95 backdrop-blur-sm">
<div className="absolute top-0 left-0 right-0 h-px bg-orange-500/50"></div>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-orange-600/20 blur-2xl"></div>
<div className="h-full p-6 flex flex-col text-left">
<div className="flex items-start justify-between gap-4">
<div className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">
                    The Fix
                  </div>
<div className="text-[10px] uppercase font-bold text-orange-400 tracking-widest whitespace-nowrap">
                    Hold The Pitch
                  </div>
</div>
<div className="mt-4"></div>
<div className="flex-1 overflow-auto pr-1">
<p className="text-sm text-zinc-300 font-light leading-relaxed mb-5">
                    Never show the product until the buyer acknowledges the exact cost of their current state.
                  </p>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800 rounded-sm p-8 flex flex-col items-center text-center hover:bg-zinc-800/60 transition-colors backdrop-blur-sm group shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] relative overflow-hidden min-h-[400px]">
<div className="relative z-10 flex flex-col items-center justify-center flex-1 transition-opacity duration-200 md:group-hover:opacity-0">
<div className="w-12 h-12 bg-zinc-800 rounded flex items-center justify-center mb-6 border border-zinc-600 group-hover:border-white/40 transition-colors">
<iconify-icon className="text-2xl text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" icon="solar:folder-error-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-bold tracking-tight text-zinc-200 mb-3 uppercase group-hover:text-white transition-colors">
                Weak qualification
              </h3>
<p className="text-base text-zinc-500 font-light max-w-[26ch]">
                Bad deals stay in pipeline. Hope is not a sales strategy.
              </p>
<div className="mt-4 inline-flex items-center gap-2 border border-zinc-700 bg-zinc-800/50 px-3 py-1.5 text-[10px] uppercase font-bold text-zinc-400 tracking-widest rounded-sm">
                Process Failure
              </div>
</div>
<div className="hidden md:flex absolute inset-0 z-20 flex-col translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-zinc-900/95 backdrop-blur-sm">
<div className="absolute top-0 left-0 right-0 h-px bg-zinc-400/50"></div>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-white/10 blur-2xl"></div>
<div className="h-full p-6 flex flex-col text-left">
<div className="flex items-start justify-between gap-4">
<div className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">
                    The Fix
                  </div>
<div className="text-[10px] uppercase font-bold text-white tracking-widest whitespace-nowrap">
                    Disqualify Hard
                  </div>
</div>
<div className="mt-4"></div>
<div className="flex-1 overflow-auto pr-1">
<p className="text-sm text-zinc-300 font-light leading-relaxed mb-5">
                    If there is no business problem with measurable impact, there is no deal. Get them out of your forecast.
                  </p>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800 rounded-sm p-8 flex flex-col items-center text-center hover:bg-zinc-800/60 transition-colors backdrop-blur-sm group shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] relative overflow-hidden min-h-[400px]">
<div className="relative z-10 flex flex-col items-center justify-center flex-1 transition-opacity duration-200 md:group-hover:opacity-0">
<div className="w-12 h-12 bg-red-950/50 rounded flex items-center justify-center mb-6 border border-red-500/20 group-hover:border-red-500/40 transition-colors">
<iconify-icon className="text-2xl text-red-500 drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-bold tracking-tight text-zinc-200 mb-3 uppercase group-hover:text-red-400 transition-colors">
                Focus on product
              </h3>
<p className="text-base text-zinc-500 font-light max-w-[26ch]">
                Instead of business impact. You sell features, not the transformation.
              </p>
<div className="mt-4 inline-flex items-center gap-2 border border-zinc-700 bg-zinc-800/50 px-3 py-1.5 text-[10px] uppercase font-bold text-zinc-400 tracking-widest rounded-sm">
                Value Failure
              </div>
</div>
<div className="hidden md:flex absolute inset-0 z-20 flex-col translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-zinc-900/95 backdrop-blur-sm">
<div className="absolute top-0 left-0 right-0 h-px bg-red-500/50"></div>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-red-600/20 blur-2xl"></div>
<div className="h-full p-6 flex flex-col text-left">
<div className="flex items-start justify-between gap-4">
<div className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">
                    The Fix
                  </div>
<div className="text-[10px] uppercase font-bold text-red-400 tracking-widest whitespace-nowrap">
                    Sell The Impact
                  </div>
</div>
<div className="mt-4"></div>
<div className="flex-1 overflow-auto pr-1">
<p className="text-sm text-zinc-300 font-light leading-relaxed mb-4">
                    Buyers don't care about your software. They care about fixing their current broken state.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-[1200px] mx-auto relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<div className="text-xs uppercase font-bold tracking-[0.25em] text-red-500 mb-4">
              The Mechanism
            </div>
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-8 leading-[1.1] uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
              Gap Selling
            </h2>
<ul className="space-y-6 mb-12">
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded bg-red-900/30 flex items-center justify-center shrink-0 border border-red-500/30">
<span className="text-red-500 font-bold text-sm">1</span>
</div>
<div>
<h4 className="text-lg text-white font-bold uppercase tracking-wide">Identify Current State</h4>
<p className="text-base text-zinc-400 font-light mt-1">What is broken right now? Map the literal facts of their problem.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded bg-orange-900/30 flex items-center justify-center shrink-0 border border-orange-500/30">
<span className="text-orange-500 font-bold text-sm">2</span>
</div>
<div>
<h4 className="text-lg text-white font-bold uppercase tracking-wide">Define Future State</h4>
<p className="text-base text-zinc-400 font-light mt-1">Where do they need to be? Quantify the business outcomes.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-600">
<span className="text-white font-bold text-sm">3</span>
</div>
<div>
<h4 className="text-lg text-white font-bold uppercase tracking-wide">Expose The Gap</h4>
<p className="text-base text-zinc-400 font-light mt-1">The space between current and future state is the value of your deal. This is what turns conversations into decisions.</p>
</div>
</li>
</ul>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-red-600 text-white border border-red-500 rounded-sm text-base uppercase tracking-widest font-medium hover:bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all" href="#">
                Learn The Framework
              </a>
</div>
</div>

<div className="order-1 lg:order-2 bg-zinc-900 border border-zinc-800 rounded-sm p-6 sm:p-10 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] relative overflow-hidden h-[600px] flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 to-transparent opacity-50"></div>

<div className="relative w-full h-full bg-[#050505] rounded shadow-[0_0_30px_rgba(0,0,0,1)] flex flex-col border border-zinc-800 overflow-hidden items-center justify-center group">
<div className="absolute inset-0 pointer-events-none z-20 opacity-20 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 4px)'}}></div>
<iconify-icon className="text-6xl text-zinc-700 mb-4 group-hover:text-red-500 transition-colors duration-500" icon="solar:image-outline"></iconify-icon>
<h3 className="text-2xl font-bold text-zinc-600 uppercase tracking-widest group-hover:text-white transition-colors duration-500">
                IMAGE PLACEHOLDER
              </h3>
<p className="text-zinc-500 mt-2 text-sm uppercase tracking-wide">Gap Visualization / Diagram</p>
</div>
</div>
</div>
</section>

<div className="w-full h-px relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-red-600/60 to-transparent drop-shadow-[0_0_8px_rgba(220,38,38,0.35)]"></div>
</div>
<section className="w-full py-24 relative z-10 bg-black/30 backdrop-blur-sm overflow-hidden border-b border-zinc-900/80">
<div className="max-w-7xl mx-auto px-6 mb-14">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 items-start">
<div className="max-w-xl">
<h2 className="md:text-5xl text-4xl text-white tracking-tight font-extralight mb-4 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)] uppercase">
                Teams improving win rates and deal quality
              </h2>
<p className="leading-relaxed text-lg font-light text-zinc-400 mt-4">
                Sales teams use Jim Keenan’s Gap Selling approach to improve how they diagnose problems and close deals.
              </p>
</div>
<div className="lg:text-right">
<div className="inline-block text-left">
<div className="text-6xl md:text-7xl font-bold tracking-[-0.02em] text-red-500 leading-none drop-shadow-[0_0_14px_rgba(239,68,68,0.5)]">
                  GAP
                </div>
<div className="mt-2 text-sm font-bold uppercase tracking-widest text-zinc-500">
                  Selling Execution
                </div>
</div>
</div>
</div>
</div>
<div className="relative w-full max-w-[1200px] mx-auto overflow-hidden mask-fade">
<div className="flex w-max gap-4 mb-4 animate-marquee-left hover:pause">

<div className="w-[380px] shrink-0 mr-6 p-3 rounded-sm bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="relative h-full rounded bg-[#0a0202] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[4px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="relative z-30 mb-6">
<p className="text-sm text-zinc-300 font-light leading-relaxed">
                    “We stopped pitching features and started dissecting the buyer's pain. Our win rate doubled in one quarter.”
                  </p>
</div>
<div className="relative z-30 flex items-center gap-4">
<div className="w-10 h-10 rounded bg-zinc-800 border-[1.5px] border-zinc-600 flex items-center justify-center text-[8px] font-bold text-zinc-500 text-center uppercase tracking-tighter">
                    IMG
                  </div>
<div>
<div className="text-sm text-zinc-200 font-bold uppercase tracking-wide">
                      IMAGE PLACEHOLDER
                    </div>
<div className="text-[10px] text-red-500 font-bold uppercase tracking-widest">
                      VP of Sales
                    </div>
</div>
</div>
</div>
</div>
<div className="w-[380px] shrink-0 mr-6 p-3 rounded-sm bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="relative h-full rounded bg-[#0a0500] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[4px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="relative z-30 mb-6">
<p className="text-sm text-zinc-300 font-light leading-relaxed">
                    “Keenan’s methodology completely reframed how our AEs qualify. Bad deals are killed early, and good deals close faster.”
                  </p>
</div>
<div className="relative z-30 flex items-center gap-4">
<div className="w-10 h-10 rounded bg-zinc-800 border-[1.5px] border-zinc-600 flex items-center justify-center text-[8px] font-bold text-zinc-500 text-center uppercase tracking-tighter">
                    IMG
                  </div>
<div>
<div className="text-sm text-zinc-200 font-bold uppercase tracking-wide">
                      IMAGE PLACEHOLDER
                    </div>
<div className="text-[10px] text-orange-500 font-bold uppercase tracking-widest">
                      CRO
                    </div>
</div>
</div>
</div>
</div>
<div className="w-[380px] shrink-0 mr-6 p-3 rounded-sm bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="relative h-full rounded bg-[#050505] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[4px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="relative z-30 mb-6">
<p className="text-sm text-zinc-300 font-light leading-relaxed">
                    “If you want to stop getting ghosted after demos, you need to understand the problem. This training is mandatory for us now.”
                  </p>
</div>
<div className="relative z-30 flex items-center gap-4">
<div className="w-10 h-10 rounded bg-zinc-800 border-[1.5px] border-zinc-600 flex items-center justify-center text-[8px] font-bold text-zinc-500 text-center uppercase tracking-tighter">
                    IMG
                  </div>
<div className="">
<div className="text-sm text-zinc-200 font-bold uppercase tracking-wide">
                      IMAGE PLACEHOLDER
                    </div>
<div className="text-[10px] text-white font-bold uppercase tracking-widest">
                      Sales Enablement Leader
                    </div>
</div>
</div>
</div>
</div>
<div className="w-[380px] shrink-0 mr-6 p-3 rounded-sm bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="relative h-full rounded bg-[#0a0202] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[4px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="relative z-30 mb-6">
<p className="text-sm text-zinc-300 font-light leading-relaxed">
                    “We stopped pitching features and started dissecting the buyer's pain. Our win rate doubled in one quarter.”
                  </p>
</div>
<div className="relative z-30 flex items-center gap-4">
<div className="w-10 h-10 rounded bg-zinc-800 border-[1.5px] border-zinc-600 flex items-center justify-center text-[8px] font-bold text-zinc-500 text-center uppercase tracking-tighter">
                    IMG
                  </div>
<div>
<div className="text-sm text-zinc-200 font-bold uppercase tracking-wide">
                      IMAGE PLACEHOLDER
                    </div>
<div className="text-[10px] text-red-500 font-bold uppercase tracking-widest">
                      VP of Sales
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-24 relative z-10">
<div className="max-w-2xl mx-auto text-center mb-16">
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white leading-tight uppercase">
            How Keenan Fixes Sales Execution
          </h2>
</div>
<div className="relative max-w-4xl mx-auto" id="hardware-pipeline">
<style>
            @keyframes text-slide {
              0% { top: -150px; opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { top: 100%; opacity: 0; }
            }
          </style>

<div className="absolute left-1/2 top-10 bottom-10 w-4 -translate-x-1/2 bg-zinc-900/50 backdrop-blur-sm rounded-sm z-0 hidden md:flex flex-col justify-between items-center py-0 border border-zinc-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.7)]">
<div className="absolute inset-y-0 w-1 bg-zinc-800 rounded-sm overflow-hidden z-0">
<div className="absolute -top-32 left-0 w-full h-32 bg-gradient-to-b from-transparent via-red-600 to-transparent animate-[text-slide_3s_linear_infinite] shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>
</div>
<div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 transition-transform hover:scale-110 -mt-5">
<div className="text-xs font-bold text-red-500">1</div>
</div>
<div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 transition-transform hover:scale-110">
<div className="text-xs font-bold text-orange-500">2</div>
</div>
<div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 transition-transform hover:scale-110">
<div className="text-xs font-bold text-white">3</div>
</div>
<div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 transition-transform hover:scale-110 -mb-5">
<iconify-icon className="text-red-500 text-sm" icon="solar:flag-linear"></iconify-icon>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 group">
<div className="md:hidden w-full mb-4">
<div className="inline-flex items-center gap-2 border border-red-500/30 bg-red-900/20 px-3 py-1.5 text-[10px] font-bold text-red-400 tracking-widest uppercase mb-3">
                Step 1
              </div>
<h3 className="text-xl font-bold uppercase text-zinc-100">Inspect current deals</h3>
<p className="text-sm text-zinc-400 font-light mt-2 leading-relaxed">
                We look at your existing pipeline to see where reps are pitching solutions without deeply uncovering the business problem.
              </p>
</div>
<div className="md:w-1/2 md:pr-16 md:text-right hidden md:block">
<div className="inline-flex items-center gap-2 border border-red-500/30 bg-red-900/20 px-3 py-1.5 text-[10px] font-bold text-red-400 tracking-widest uppercase mb-3 text-right">
                Step 1
              </div>
<h3 className="text-xl font-bold uppercase text-zinc-100">Inspect current deals</h3>
<p className="text-sm text-zinc-400 font-light mt-2 leading-relaxed ml-auto">
                We look at your existing pipeline to see where reps are pitching solutions without deeply uncovering the business problem.
              </p>
</div>
<div className="md:w-1/2 md:pl-16 w-full">
<div className="bg-zinc-900/50 backdrop-blur-sm p-5 rounded-sm border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] flex items-center gap-4 hover:bg-zinc-800/60 transition-all duration-300 group-hover:border-red-500/30">
<div className="w-12 h-12 rounded bg-red-950 flex items-center justify-center text-red-500 border border-red-500/20 shrink-0">
<iconify-icon className="text-2xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
<div className="flex-1 text-sm text-zinc-300 font-light">
                  Pipeline breakdown and deal interrogation.
                </div>
</div>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 group">
<div className="md:w-1/2 md:pr-16 w-full order-2 md:order-1 mt-4 md:mt-0">
<div className="bg-zinc-900/50 backdrop-blur-sm p-5 rounded-sm border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] flex items-center gap-4 hover:bg-zinc-800/60 transition-all duration-300 justify-end group-hover:border-orange-500/30 flex-row-reverse md:flex-row">
<div className="flex-1 text-left md:text-right md:pr-2 text-sm text-zinc-300 font-light">
                  Find the root cause of why deals stall or die.
                </div>
<div className="w-12 h-12 rounded bg-orange-950 flex items-center justify-center text-orange-500 border border-orange-500/20 shrink-0">
<iconify-icon className="text-2xl" icon="solar:map-point-wave-linear"></iconify-icon>
</div>
</div>
</div>
<div className="md:w-1/2 md:pl-16 order-1 md:order-3 md:hidden">
<div className="inline-flex items-center gap-2 border border-orange-500/30 bg-orange-900/20 px-3 py-1.5 text-[10px] font-bold text-orange-400 tracking-widest uppercase mb-3">
                Step 2
              </div>
<h3 className="text-xl font-bold uppercase text-zinc-100">Identify gaps in discovery</h3>
<p className="text-sm text-zinc-400 font-light mt-2 leading-relaxed">
                We expose the exact moments reps fail to dig deeper, leaving money on the table.
              </p>
</div>
<div className="md:w-1/2 md:pl-16 hidden md:block order-3 text-left">
<div className="inline-flex items-center gap-2 border border-orange-500/30 bg-orange-900/20 px-3 py-1.5 text-[10px] font-bold text-orange-400 tracking-widest uppercase mb-3">
                Step 2
              </div>
<h3 className="text-xl font-bold uppercase text-zinc-100">Identify gaps in discovery</h3>
<p className="text-sm text-zinc-400 font-light mt-2 leading-relaxed">
                We expose the exact moments reps fail to dig deeper, leaving money on the table.
              </p>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 group">
<div className="md:hidden w-full mb-4">
<div className="inline-flex items-center gap-2 border border-zinc-600 bg-zinc-800 px-3 py-1.5 text-[10px] font-bold text-white tracking-widest uppercase mb-3">
                Step 3
              </div>
<h3 className="text-xl font-bold uppercase text-zinc-100">Improve problem diagnosis</h3>
<p className="text-sm text-zinc-400 font-light mt-2 leading-relaxed">
                Implement Gap Selling frameworks so reps confidently diagnose problems and measure impact.
              </p>
</div>
<div className="md:w-1/2 md:pr-16 md:text-right hidden md:block">
<div className="inline-flex items-center gap-2 border border-zinc-600 bg-zinc-800 px-3 py-1.5 text-[10px] font-bold text-white tracking-widest uppercase mb-3">
                Step 3
              </div>
<h3 className="text-xl font-bold uppercase text-zinc-100">Improve problem diagnosis</h3>
<p className="text-sm text-zinc-400 font-light mt-2 leading-relaxed ml-auto">
                Implement Gap Selling frameworks so reps confidently diagnose problems and measure impact.
              </p>
</div>
<div className="md:w-1/2 md:pl-16 w-full">
<div className="bg-zinc-900/50 backdrop-blur-sm p-5 rounded-sm border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] flex items-center gap-4 hover:bg-zinc-800/60 transition-all duration-300 group-hover:border-white/30">
<div className="w-12 h-12 rounded bg-zinc-800 flex items-center justify-center text-white border border-zinc-600 shrink-0">
<iconify-icon className="text-2xl" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<div className="flex-1 text-sm text-zinc-300 font-light">
                  Reframe conversations from product to transformation.
                </div>
</div>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 group">
<div className="md:w-1/2 md:pr-16 w-full order-2 md:order-1 mt-4 md:mt-0">
<div className="bg-zinc-900/50 backdrop-blur-sm p-5 rounded-sm border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] flex items-center gap-4 hover:bg-zinc-800/60 transition-all duration-300 justify-end group-hover:border-red-500/30 flex-row-reverse md:flex-row">
<div className="flex-1 text-left md:text-right md:pr-2 text-sm text-zinc-300 font-light">
                  Make the buyer realize they can't afford to stay broken.
                </div>
<div className="w-12 h-12 rounded bg-red-950 flex items-center justify-center text-red-500 border border-red-500/20 shrink-0">
<iconify-icon className="text-2xl" icon="solar:hand-shake-linear"></iconify-icon>
</div>
</div>
</div>
<div className="md:w-1/2 md:pl-16 order-1 md:order-3 md:hidden">
<div className="inline-flex items-center gap-2 border border-red-500/30 bg-red-900/20 px-3 py-1.5 text-[10px] font-bold text-red-400 tracking-widest uppercase mb-3">
                Execution
              </div>
<h3 className="text-xl font-bold uppercase text-zinc-100">Close Deals</h3>
<p className="text-sm text-zinc-400 font-light mt-2 leading-relaxed">
                When the gap is clear and the impact is undeniable, deals close naturally. No hard selling required.
              </p>
</div>
<div className="md:w-1/2 md:pl-16 hidden md:block order-3">
<div className="inline-flex items-center gap-2 border border-red-500/30 bg-red-900/20 px-3 py-1.5 text-[10px] font-bold text-red-400 tracking-widest uppercase mb-3">
                Execution
              </div>
<h3 className="text-xl font-bold uppercase text-zinc-100">Close Deals</h3>
<p className="text-sm text-zinc-400 font-light mt-2 leading-relaxed">
                When the gap is clear and the impact is undeniable, deals close naturally. No hard selling required.
              </p>
</div>
</div>
</div>
<div className="mt-20 text-center">
<a className="inline-flex items-center justify-center px-10 py-4 bg-zinc-100 text-zinc-900 border border-zinc-300 rounded-sm text-base uppercase tracking-widest font-bold hover:bg-white shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all" href="#">
            Improve My Deals
          </a>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-24 relative z-10 border-t border-zinc-900">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
<div className="">
<div className="text-xs uppercase font-bold tracking-[0.25em] text-orange-500 mb-4">
              Our Offerings
            </div>
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white leading-[1.1] uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
              What's Included
            </h2>
<p className="leading-relaxed text-lg font-light text-zinc-400 max-w-xl mt-6">
              Complete overhaul of how your team sells. We break down bad habits and install problem-centric execution from reps up to leadership.
            </p>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="bg-zinc-900/40 backdrop-blur-sm rounded-sm border border-zinc-800 p-6 hover:border-red-500/30 transition-colors">
<div className="flex items-center gap-4">
<div className="w-11 h-11 rounded bg-red-950 border border-red-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-red-500" icon="solar:presentation-board-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-sm text-white font-bold uppercase tracking-wide">
                  Gap Selling Training
                </div>
</div>
<p className="mt-4 text-sm text-zinc-400 font-light leading-relaxed">
                Intensive workshops mapping out the core Gap Selling methodology tailored to your market.
              </p>
</div>
<div className="bg-zinc-900/40 backdrop-blur-sm rounded-sm border border-zinc-800 p-6 hover:border-orange-500/30 transition-colors">
<div className="flex items-center gap-4">
<div className="w-11 h-11 rounded bg-orange-950 border border-orange-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-orange-500" icon="solar:scanner-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-sm text-white font-bold uppercase tracking-wide">
                  Deal Inspection
                </div>
</div>
<p className="mt-4 text-sm text-zinc-400 font-light leading-relaxed">
                Live, surgical teardowns of your active pipeline. Find out exactly why specific deals are stalled.
              </p>
</div>
<div className="bg-zinc-900/40 backdrop-blur-sm rounded-sm border border-zinc-800 p-6 hover:border-white/30 transition-colors">
<div className="flex items-center gap-4">
<div className="w-11 h-11 rounded bg-zinc-800 border border-zinc-600 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-white" icon="solar:document-add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-sm text-white font-bold uppercase tracking-wide">
                  Discovery Frameworks
                </div>
</div>
<p className="mt-4 text-sm text-zinc-400 font-light leading-relaxed">
                Custom questioning structures to uncover deep operational and financial impact with buyers.
              </p>
</div>
<div className="bg-zinc-900/40 backdrop-blur-sm rounded-sm border border-zinc-800 p-6 hover:border-red-500/30 transition-colors">
<div className="flex items-center gap-4">
<div className="w-11 h-11 rounded bg-red-950 border border-red-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-red-500" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-sm text-white font-bold uppercase tracking-wide">
                  Sales Coaching &amp; Leadership
                </div>
</div>
<p className="mt-4 text-sm text-zinc-400 font-light leading-relaxed">
                Teaching managers how to coach problem-centric selling so the methodology sticks long-term.
              </p>
</div>
</div>
</div>
</section>

<div className="w-full h-px relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-red-600/60 to-transparent drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]"></div>
</div>
<section className="max-w-[1200px] mx-auto px-6 py-32 relative z-10">
<div className="bg-zinc-900/50 rounded-sm shadow-[inset_0_1px_10px_rgba(0,0,0,1)] flex flex-col lg:flex-row overflow-hidden border border-zinc-800 backdrop-blur-sm relative">
<div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-orange-900/10 pointer-events-none"></div>

<div className="p-10 lg:p-20 flex-1 flex flex-col justify-center text-center lg:text-left items-center lg:items-start max-w-2xl relative z-10">
<h2 className="text-4xl md:text-[2.75rem] tracking-tight text-white mb-6 leading-[1.1] drop-shadow-[0_2px_15px_rgba(239,68,68,0.15)] font-light relative z-10 uppercase">
              Hi, I'm <span className="text-red-500 font-bold">Jim Keenan.</span>
</h2>
<p className="text-lg text-zinc-300 font-light mb-6 max-w-md leading-relaxed relative z-10 mx-auto lg:mx-0">
              I work with sales teams that are doing everything right — but still not closing. 
            </p>
<p className="text-base text-zinc-400 font-light mb-10 max-w-md leading-relaxed relative z-10 mx-auto lg:mx-0">
              The issue isn’t effort — it’s what you’re focusing on. My focus is helping you understand the problem so deals actually move forward.
            </p>
<div className="flex flex-col sm:flex-row gap-4 max-w-[26rem] w-full justify-center lg:justify-start relative z-10">
<a className="flex-1 py-4 text-center bg-red-600 text-white border border-red-500 font-bold text-sm uppercase tracking-widest hover:bg-red-500 transition-colors shadow-[0_0_15px_rgba(239,68,68,0.3)] px-7 rounded-sm" href="#">
                Book a Call
              </a>
</div>
</div>

<div className="flex-1 min-h-[400px] lg:min-h-[600px] relative bg-zinc-950 border-t lg:border-t-0 lg:border-l border-zinc-800 flex items-center justify-center p-8 group">
<div className="absolute inset-0 bg-red-500/5 mix-blend-screen pointer-events-none z-10 animate-pulse"></div>
<div className="w-full h-full max-w-sm max-h-[400px] border border-zinc-800 flex flex-col items-center justify-center bg-[#0a0202] rounded-sm relative z-30 shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden">
<div className="absolute inset-0 pointer-events-none z-20 opacity-20 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 4px)'}}></div>
<iconify-icon className="text-7xl text-zinc-700 mb-4 group-hover:text-red-500 transition-colors duration-500" icon="solar:user-circle-linear"></iconify-icon>
<h3 className="text-2xl font-bold text-zinc-600 uppercase tracking-widest group-hover:text-white transition-colors duration-500 text-center px-4">
                  IMAGE PLACEHOLDER
                </h3>
<p className="text-zinc-500 mt-2 text-sm uppercase tracking-wide">Jim Keenan Profile</p>
</div>
</div>
</div>
</section>

<section className="max-w-[1000px] mx-auto px-6 pb-24 relative z-10" id="faq-section">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)] uppercase">
            FAQ
          </h2>
</div>
<div className="max-w-3xl mx-auto min-h-[400px]">
<div className="kb-content block space-y-1" id="kb-start">
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
<span className="text-lg font-bold uppercase tracking-wide text-zinc-300 group-hover:text-red-500 transition-colors duration-300">
                  Who is this for?
                </span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-red-500 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                    B2B reps, account executives, sales teams, and leaders struggling with low win rates or stuck in "feature selling".
                  </p>
</div>
</div>
</div>
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
<span className="text-lg font-bold uppercase tracking-wide text-zinc-300 group-hover:text-red-500 transition-colors duration-300">
                  Is this sales training?
                </span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-red-500 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                    Yes, but it's highly focused on problem-centric selling and executing discovery that drives deals forward.
                  </p>
</div>
</div>
</div>
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
<span className="text-lg font-bold uppercase tracking-wide text-zinc-300 group-hover:text-red-500 transition-colors duration-300">
                  Does this work for experienced reps?
                </span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-red-500 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                    Yes, especially those stuck in deals. Experienced reps often fall into the trap of pitching solutions too early.
                  </p>
</div>
</div>
</div>
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
<span className="text-lg font-bold uppercase tracking-wide text-zinc-300 group-hover:text-red-500 transition-colors duration-300">
                  What makes this different?
                </span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-red-500 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                    Intense focus on the problem, not the product. We teach you how to expose the gap between current and future states.
                  </p>
</div>
</div>
</div>
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
<span className="text-lg font-bold uppercase tracking-wide text-zinc-300 group-hover:text-red-500 transition-colors duration-300">
                  How do we start?
                </span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-red-500 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                    Book a call below. We'll look at your current approach and see exactly what needs to change.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1000px] mx-auto px-6 pb-32 relative z-10">
<div className="bg-zinc-900 border border-zinc-800 rounded-sm p-10 md:p-16 text-center shadow-[inset_0_1px_10px_rgba(0,0,0,1)] relative overflow-hidden group">
<div className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 4px)'}}></div>
<div className="absolute inset-0 bg-red-600/5 group-hover:bg-red-600/10 transition-colors duration-500"></div>
<div className="relative z-30">
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white uppercase mb-6 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
                    Close Deals by Selling the Problem
                </h2>
<p className="text-lg text-zinc-400 font-light max-w-xl mx-auto mb-10">
                    Book a call to improve how you diagnose and win deals.
                </p>

<div className="max-w-md mx-auto h-[300px] border border-zinc-700 bg-black/50 rounded-sm flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
<div className="text-center">
<iconify-icon className="text-4xl text-zinc-600 mb-3" icon="solar:calendar-linear"></iconify-icon>
<h3 className="text-xl font-bold text-zinc-500 uppercase tracking-widest">CALENDLY PLACEHOLDER</h3>
</div>
</div>
<a className="inline-flex items-center justify-center px-12 py-5 bg-red-600 text-white border border-red-500 rounded-sm text-lg uppercase tracking-widest font-bold shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:bg-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all" href="#">
                    Book My Call
                </a>
</div>
</div>
</section>

<footer className="bg-[#000000] border-t border-zinc-900 pt-24 pb-16 relative z-10">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col lg:flex-row justify-between gap-20">

<div className="max-w-[260px]">
<div className="text-xl font-bold uppercase tracking-widest text-white mb-5">
                Keenan <span className="text-red-500">|</span> <span className="text-sm font-light text-zinc-400 ml-1">Gap Selling</span>
</div>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                Sales Growth Company. Stop pitching products. Start diagnosing problems and closing deals.
              </p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-12">
<div>
<h4 className="text-[10px] font-bold text-zinc-300 mb-5 uppercase tracking-widest">
                  Methodology
                </h4>
<ul className="space-y-3 text-sm font-light text-zinc-500">
<li><a className="hover:text-red-500 transition-colors" href="#">Gap Selling</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Deal Inspection</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Discovery</a></li>
</ul>
</div>
<div>
<h4 className="text-[10px] font-bold text-zinc-300 mb-5 uppercase tracking-widest">
                  Services
                </h4>
<ul className="space-y-3 text-sm font-light text-zinc-500">
<li><a className="hover:text-red-500 transition-colors" href="#">Sales Training</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Consulting</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Speaking</a></li>
</ul>
</div>
<div>
<h4 className="text-[10px] font-bold text-zinc-300 mb-5 uppercase tracking-widest">
                  Resources
                </h4>
<ul className="space-y-3 text-sm font-light text-zinc-500">
<li><a className="hover:text-red-500 transition-colors" href="#">Books</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Videos</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-[10px] font-bold text-zinc-300 mb-5 uppercase tracking-widest">
                  Company
                </h4>
<ul className="space-y-3 text-sm font-light text-zinc-500">
<li><a className="hover:text-red-500 transition-colors" href="#">About Jim</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-20 pt-10 relative">
<div className="w-full h-px relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-72 h-px bg-gradient-to-r from-transparent via-red-600/60 to-transparent drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]">
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm font-light text-zinc-500">
<div>© 2026 Sales Growth Company</div>
<div className="flex flex-wrap items-center gap-x-6 gap-y-3">
<a className="hover:text-red-500 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-red-500 transition-colors" href="#">YouTube</a>
<a className="hover:text-red-500 transition-colors" href="#">Privacy</a>
<a className="hover:text-red-500 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</div>
</footer>
</div>






    </>
  );
}
