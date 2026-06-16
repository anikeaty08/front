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

                    const fs = gl.createShader(gl.FRAGMENT_SHADER);
                    gl.shaderSource(fs, `precision mediump float; varying float vAlpha; void main() { gl_FragColor = vec4(0.6, 1.0, 0.8, vAlpha); }`);
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
                        { transform: 'translate(-45%, 5%) scale(1.1)', opacity: 0.2 },
                        {
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed inset-0 z-0 pointer-events-none opacity-60" height="949" id="webgl-stars" width="1728"></canvas>

<div className="fixed inset-0 opacity-[0.04] pointer-events-none z-50 mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E\')'}}></div>

<div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none z-0" id="light1"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none z-0" id="light2"></div>

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40 mix-blend-screen">
<div className="data-line left-[15%]" style={{animationDuration: '2.5s', animationDelay: '0s', height: '200px'}}></div>
<div className="data-line left-[35%]" style={{animationDuration: '3.2s', animationDelay: '1.2s', height: '150px'}}></div>
<div className="data-line left-[55%]" style={{animationDuration: '2.8s', animationDelay: '0.5s', height: '250px'}}></div>
<div className="data-line left-[75%]" style={{animationDuration: '3.5s', animationDelay: '2.1s', height: '180px'}}></div>
<div className="data-line left-[85%]" style={{animationDuration: '2.2s', animationDelay: '0.8s', height: '300px'}}></div>
</div>
<div className="z-10 w-full relative">

<nav className="sticky top-0 z-50 bg-[#030303]/80 backdrop-blur-sm border-b border-zinc-800/50">
<div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-wrap md:flex-nowrap items-center md:gap-4 lg:gap-8 relative">

<div className="flex-shrink-0 flex items-center gap-1.5 text-xl tracking-tight font-medium text-white">
            Brandon Bornancin
            <div className="h-7 px-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center justify-center ml-1">
<span className="text-xs font-semibold text-emerald-300 tracking-wider uppercase">
                Seamless.ai
              </span>
</div>
</div>

<div className="flex items-center gap-4 ml-auto md:hidden">
<a className="flex items-center justify-center px-4 py-1.5 bg-zinc-800 text-emerald-400 border border-emerald-500/30 rounded-full text-sm font-medium hover:bg-zinc-700 shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all" href="#">
              Fix Pipeline
            </a>
<button aria-expanded="false" aria-label="Toggle navigation" className="text-zinc-400 hover:text-white transition-colors flex items-center justify-center p-1 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded-md" id="mobile-menu-btn" onclick="const menu = document.getElementById('mobile-menu'); const expanded = this.getAttribute('aria-expanded') === 'true'; this.setAttribute('aria-expanded', !expanded); menu.classList.toggle('opacity-0'); menu.classList.toggle('invisible'); menu.classList.toggle('-translate-y-4'); menu.classList.toggle('opacity-100'); menu.classList.toggle('visible'); menu.classList.toggle('translate-y-0');">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="hidden md:flex lg:hidden flex-1 justify-center items-center gap-6 text-sm uppercase tracking-wider text-zinc-400 font-medium relative">
<a className="hover:text-emerald-300 transition-colors drop-shadow-[0_0_5px_rgba(52,211,153,0)] hover:drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]" href="#">
              List Building
            </a>
<button aria-controls="tablet-more-menu" aria-expanded="false" className="flex items-center gap-1 hover:text-emerald-300 transition-colors focus:outline-none" id="tablet-more-btn" onclick="const menu = document.getElementById('tablet-more-menu'); const expanded = this.getAttribute('aria-expanded') === 'true'; this.setAttribute('aria-expanded', !expanded); menu.classList.toggle('opacity-0'); menu.classList.toggle('invisible'); menu.classList.toggle('-translate-y-2'); menu.classList.toggle('opacity-100'); menu.classList.toggle('visible'); menu.classList.toggle('translate-y-0');">
              More
              <iconify-icon className="text-sm" icon="lucide:chevron-down"></iconify-icon>
</button>
<div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-48 bg-[#030303]/95 backdrop-blur-xl border border-zinc-800/50 rounded-xl px-5 py-5 flex flex-col gap-4 shadow-2xl transition-all duration-300 opacity-0 -translate-y-2 invisible z-50" id="tablet-more-menu">
<a className="hover:text-emerald-300 transition-colors" href="#">Prospecting</a>
<a className="hover:text-emerald-300 transition-colors" href="#">Frameworks</a>
<a className="hover:text-emerald-300 transition-colors" href="#">Training</a>
</div>
</div>

<div className="hidden md:flex items-center justify-end flex-shrink-0 gap-4 ml-auto whitespace-nowrap">
<a className="text-sm font-medium text-zinc-400 hover:text-white uppercase tracking-wider transition-colors" href="#">
              Log in
            </a>
<a className="flex items-center justify-center px-6 py-2 bg-emerald-500 text-black border border-emerald-400 rounded-full text-sm font-semibold hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] uppercase tracking-wide" href="#">
              Fix My Pipeline
            </a>
</div>
</div>

<div className="absolute top-full left-0 w-full bg-[#030303]/95 backdrop-blur-xl border-b border-zinc-800/50 px-6 py-6 flex flex-col gap-6 shadow-2xl transition-all duration-300 opacity-0 -translate-y-4 invisible md:hidden z-40" id="mobile-menu">
<div className="flex flex-col gap-4 text-sm uppercase tracking-wider text-zinc-400 font-medium">
<a className="hover:text-emerald-300 transition-colors" href="#">List Building</a>
<a className="hover:text-emerald-300 transition-colors" href="#">Prospecting</a>
<a className="hover:text-emerald-300 transition-colors" href="#">Frameworks</a>
<a className="hover:text-emerald-300 transition-colors" href="#">Training</a>
</div>
<div className="h-px w-full bg-zinc-800/50"></div>
<div className="flex flex-col gap-4 text-sm uppercase tracking-wider text-zinc-400 font-medium">
<a className="hover:text-white transition-colors" href="#">Log in</a>
<a className="inline-flex items-center justify-center px-6 py-2.5 bg-emerald-500 text-black border border-emerald-400 rounded-full text-sm font-semibold hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all uppercase tracking-wide w-fit" href="#">
              Fix My Pipeline
            </a>
</div>
</div>
</nav>

<section className="text-center max-w-[1000px] mr-auto ml-auto pt-24 pr-6 pb-16 pl-6 relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.5)] border border-zinc-700/50 mb-8 backdrop-blur-md mx-auto">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
</span>
<span className="text-xs font-semibold text-emerald-300 tracking-widest uppercase drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]">
            Sales Pipeline Engine
          </span>
</div>
<h1 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.1] mb-6 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)] uppercase">
<span className="block text-6xl font-black">You Don't Have a</span>
<span className="block bg-clip-text font-semibold text-transparent bg-gradient-to-b from-emerald-300 to-emerald-600 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">
            Lead Problem.
          </span>
<span className="block text-6xl font-black">You Have a List Problem</span>
</h1>
<p className="md:text-2xl leading-relaxed text-xl font-light text-zinc-300/90 max-w-3xl mr-auto mb-10 ml-auto">
          If you don't know who to contact, you can't sell. Brandon Bornancin helps you build lists and pipeline at scale.
        </p>

<div className="mt-8 mb-12 text-left max-w-3xl mx-auto bg-zinc-900/60 border border-zinc-700/80 rounded-2xl p-6 sm:p-10 backdrop-blur-md shadow-[inset_0_1px_4px_rgba(255,255,255,0.05),_0_20px_40px_rgba(0,0,0,0.5)]">
<p className="md:text-3xl leading-snug text-2xl font-light text-white mb-8">
            If your pipeline isn't growing, the issue isn't effort. <br className="hidden sm:block"/>
<span className="text-emerald-400 italic font-medium drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">It's targeting.</span>
</p>
<div className="grid sm:grid-cols-2 gap-8">
<div>
<p className="text-zinc-400 font-medium uppercase tracking-wider text-sm mb-4">Most teams:</p>
<ul className="space-y-3 text-zinc-200 font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="2"></iconify-icon> 
                   don't have enough qualified leads
                 </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="2"></iconify-icon> 
                   waste time on bad data
                 </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="2"></iconify-icon> 
                   rely on outdated lists
                 </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="2"></iconify-icon> 
                   struggle to scale outreach
                 </li>
</ul>
</div>
<div className="">
<p className="text-emerald-400 font-medium uppercase tracking-wider text-sm mb-4">In this video:</p>
<ul className="space-y-3 text-zinc-200 font-light list-disc pl-5 marker:text-emerald-500">
<li className="">why pipeline dries up</li>
<li>how to build better lists</li>
<li className="">what it takes to scale outbound</li>
</ul>
</div>
</div>
<div className="mt-10 flex justify-center">
<a className="w-full sm:w-auto px-10 py-4 bg-emerald-500 text-black border border-emerald-400 rounded-full text-lg font-semibold shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:bg-emerald-400 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] whitespace-nowrap uppercase tracking-wide text-center" href="#">
              Fix My Pipeline
            </a>
</div>
</div>
</section>

<section className="px-6 pb-24 relative z-10">
<div className="max-w-[1000px] mx-auto">
<div className="p-3 rounded-[32px] bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]"></div>
<div className="relative rounded-[20px] bg-[#020a02] shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col h-[450px] overflow-hidden items-center justify-center">
<div className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 4px)'}}></div>

<div className="relative z-30 flex flex-col items-center justify-center text-center">
<iconify-icon className="text-7xl text-emerald-500/80 mb-6 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" icon="solar:play-circle-bold-duotone"></iconify-icon>
<span className="text-zinc-400 font-mono tracking-widest text-lg uppercase bg-zinc-900/80 px-6 py-2 rounded-lg border border-zinc-800">Video Placeholder</span>
</div>

<div className="absolute bottom-6 left-0 w-full text-center z-30">
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-950/90 border border-emerald-500/30 text-sm text-emerald-400 font-medium backdrop-blur-md shadow-[0_0_10px_rgba(0,0,0,0.5)]">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                      Watch: Why You're Not Generating Enough Pipeline
                  </span>
</div>
</div>
</div>
</div>
</section>

<div className="pt-24 pb-24 bg-black/40 backdrop-blur-md relative z-10 border-t border-zinc-900">

<section className="mb-24 relative">
<div className="max-w-[1200px] mx-auto px-6 mb-10 text-center flex flex-col items-center gap-3">
<div className="text-base md:text-lg font-medium tracking-[0.15em] uppercase text-white">
              Teams scaling pipeline and outreach
            </div>
<div className="text-xs md:text-sm font-semibold tracking-widest text-emerald-400 uppercase drop-shadow-[0_0_2px_rgba(16,185,129,0.5)]">
              Powered by better data
            </div>
</div>

<div className="relative w-full max-w-[1000px] mx-auto px-6">
<div className="w-full h-32 md:h-40 border-2 border-dashed border-zinc-800 rounded-2xl flex items-center justify-center bg-zinc-900/30 text-zinc-500 font-mono text-sm tracking-widest uppercase shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                Image Placeholder
            </div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 pt-16">
<div className="flex flex-col lg:flex-row gap-16 mb-16 items-start justify-between">
<h2 className="leading-[1.2] uppercase md:text-5xl text-3xl font-semibold text-white tracking-normal max-w-4xl drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
              "Top performers don't rely on luck. They rely on data, targeting, and volume. This is what turns <span className="font-normal italic text-emerald-400">prospects into pipeline.</span>"
            </h2>
<div className="flex flex-col items-start lg:items-end text-left lg:text-right shrink-0 lg:mt-4">
<div className="text-xl md:text-2xl text-white font-medium tracking-tight uppercase">
                Brandon Bornancin
              </div>
<div className="uppercase text-sm text-zinc-500 tracking-widest mt-1">
                Founder &amp; CEO
              </div>
<div className="text-base text-emerald-400 font-semibold tracking-widest uppercase mt-2 flex items-center gap-2 drop-shadow-[0_0_8px_rgba(110,231,183,0.5)]">
                Seamless.ai
              </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-zinc-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-[inset_0_1px_10px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] border border-zinc-800 flex flex-col h-56 justify-between relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
<div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
<div className="flex flex-col h-full relative z-10 justify-between">
<div className="">
<div className="text-6xl md:text-7xl font-light tracking-tighter text-emerald-400 leading-none drop-shadow-[0_0_12px_rgba(52,211,153,0.6)] mb-4 uppercase">
                    DATA
                  </div>
<h3 className="text-lg text-white font-medium leading-tight uppercase tracking-wide">
                    Better Targeting
                  </h3>
<p className="text-sm text-zinc-400 font-light mt-1">
                    Accurate, verified lists
                  </p>
</div>
</div>
</div>
<div className="bg-zinc-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-[inset_0_1px_10px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] border border-zinc-800 flex flex-col h-56 justify-between relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
<div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
<div className="flex flex-col h-full relative z-10 justify-between">
<div className="">
<div className="text-6xl md:text-7xl font-light tracking-tighter text-cyan-400 leading-none drop-shadow-[0_0_12px_rgba(34,211,238,0.6)] mb-4 uppercase">
                    SCALE
                  </div>
<h3 className="text-lg text-white font-medium leading-tight uppercase tracking-wide">
                    More Volume
                  </h3>
<p className="text-sm text-zinc-400 font-light mt-1">
                    Automated, massive outreach
                  </p>
</div>
</div>
</div>
<div className="bg-zinc-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-[inset_0_1px_10px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] border border-zinc-800 flex flex-col h-56 justify-between relative overflow-hidden group hover:border-violet-500/50 transition-colors">
<div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
<div className="flex flex-col h-full relative z-10 justify-between">
<div className="">
<div className="text-6xl md:text-7xl font-light tracking-tighter text-violet-400 leading-none drop-shadow-[0_0_12px_rgba(168,85,247,0.6)] mb-4 uppercase">
                    GROW
                  </div>
<h3 className="text-lg text-white font-medium leading-tight uppercase tracking-wide">
                    Massive Pipeline
                  </h3>
<p className="text-sm text-zinc-400 font-light mt-1">
                    Consistent, scalable revenue
                  </p>
</div>
</div>
</div>
</div>
</section>
</div>
<div className="w-full h-px relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent drop-shadow-[0_0_8px_rgba(16,185,129,0.35)]"></div>
</div>

<section className="py-24 px-6 max-w-[1200px] mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)] uppercase">
          Why Your Pipeline
          <br className="hidden md:block"/>
<span className="block text-zinc-400 font-semibold italic">Isn't Scaling</span>
</h2>
<p className="text-xl text-zinc-400 font-light mb-16 max-w-2xl mx-auto">
          The core issues holding your sales team back from generating the revenue they should be.
        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">

<div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-zinc-800/80 transition-colors backdrop-blur-sm group shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] relative overflow-hidden min-h-[350px]">
<div className="relative z-10 flex flex-col items-center justify-center flex-1 transition-opacity duration-200 md:group-hover:opacity-0">
<div className="w-16 h-16 bg-red-950/30 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(248,113,113,0.1)] border border-red-500/20 group-hover:border-red-500/40 transition-colors">
<iconify-icon className="text-3xl text-red-400 drop-shadow-[0_0_5px_rgba(248,113,113,0.8)]" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-wide text-zinc-100 mb-4 uppercase group-hover:text-red-300 transition-colors">
                Bad Data
              </h3>
<p className="text-lg text-zinc-400 font-light max-w-[20ch]">
                Wrong people, wrong results.
              </p>
</div>

<div className="hidden md:flex absolute inset-0 z-20 flex-col translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-zinc-900/95 backdrop-blur-sm border border-red-500/30 rounded-2xl">
<div className="h-full p-8 flex flex-col justify-center text-center">
<iconify-icon className="text-5xl text-red-500/50 mx-auto mb-6" icon="solar:danger-triangle-bold-duotone"></iconify-icon>
<h3 className="text-xl font-medium tracking-wide text-red-400 mb-4 uppercase">Stop Wasting Time</h3>
<p className="text-base text-zinc-300 font-light leading-relaxed">
                  If your lists are full of bad numbers and dead emails, your team is wasting hours every day pitching to ghosts.
                </p>
</div>
</div>
</div>

<div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-zinc-800/80 transition-colors backdrop-blur-sm group shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] relative overflow-hidden min-h-[350px]">
<div className="relative z-10 flex flex-col items-center justify-center flex-1 transition-opacity duration-200 md:group-hover:opacity-0">
<div className="w-16 h-16 bg-amber-950/30 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(251,191,36,0.1)] border border-amber-500/20 group-hover:border-amber-500/40 transition-colors">
<iconify-icon className="text-3xl text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]" icon="solar:folder-error-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-wide text-zinc-100 mb-4 uppercase group-hover:text-amber-300 transition-colors">
                Not Enough Leads
              </h3>
<p className="text-lg text-zinc-400 font-light max-w-[20ch]">
                Volume is simply too low.
              </p>
</div>

<div className="hidden md:flex absolute inset-0 z-20 flex-col translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-zinc-900/95 backdrop-blur-sm border border-amber-500/30 rounded-2xl">
<div className="h-full p-8 flex flex-col justify-center text-center">
<iconify-icon className="text-5xl text-amber-500/50 mx-auto mb-6" icon="solar:folder-error-bold-duotone"></iconify-icon>
<h3 className="text-xl font-medium tracking-wide text-amber-400 mb-4 uppercase">Scale Your Inputs</h3>
<p className="text-base text-zinc-300 font-light leading-relaxed">
                  You can't close massive deals if you don't have enough at-bats. Low volume guarantees low revenue.
                </p>
</div>
</div>
</div>

<div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-zinc-800/80 transition-colors backdrop-blur-sm group shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] relative overflow-hidden min-h-[350px]">
<div className="relative z-10 flex flex-col items-center justify-center flex-1 transition-opacity duration-200 md:group-hover:opacity-0">
<div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(161,161,170,0.1)] border border-zinc-600/30 group-hover:border-zinc-500/50 transition-colors">
<iconify-icon className="text-3xl text-zinc-300 drop-shadow-[0_0_5px_rgba(161,161,170,0.8)]" icon="solar:hourglass-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-wide text-zinc-100 mb-4 uppercase group-hover:text-zinc-300 transition-colors">
                Slow Prospecting
              </h3>
<p className="text-lg text-zinc-400 font-light max-w-[20ch]">
                Manual processes limit growth.
              </p>
</div>

<div className="hidden md:flex absolute inset-0 z-20 flex-col translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-zinc-900/95 backdrop-blur-sm border border-zinc-500/30 rounded-2xl">
<div className="h-full p-8 flex flex-col justify-center text-center">
<iconify-icon className="text-5xl text-zinc-500/50 mx-auto mb-6" icon="solar:hourglass-line-bold-duotone"></iconify-icon>
<h3 className="text-xl font-medium tracking-wide text-zinc-300 mb-4 uppercase">Automate Or Die</h3>
<p className="text-base text-zinc-300 font-light leading-relaxed">
                  If your reps are manually hunting for emails and building spreadsheets, your competition is already winning.
                </p>
</div>
</div>
</div>

<div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-zinc-800/80 transition-colors backdrop-blur-sm group shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] relative overflow-hidden min-h-[350px]">
<div className="relative z-10 flex flex-col items-center justify-center flex-1 transition-opacity duration-200 md:group-hover:opacity-0">
<div className="w-16 h-16 bg-orange-950/30 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(249,115,22,0.1)] border border-orange-500/20 group-hover:border-orange-500/40 transition-colors">
<iconify-icon className="text-3xl text-orange-400 drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]" icon="solar:graph-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-wide text-zinc-100 mb-4 uppercase group-hover:text-orange-300 transition-colors">
                Inconsistent Pipeline
              </h3>
<p className="text-lg text-zinc-400 font-light max-w-[20ch]">
                Results fluctuate constantly.
              </p>
</div>

<div className="hidden md:flex absolute inset-0 z-20 flex-col translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-zinc-900/95 backdrop-blur-sm border border-orange-500/30 rounded-2xl">
<div className="h-full p-8 flex flex-col justify-center text-center">
<iconify-icon className="text-5xl text-orange-500/50 mx-auto mb-6" icon="solar:graph-down-bold-duotone"></iconify-icon>
<h3 className="text-xl font-medium tracking-wide text-orange-400 mb-4 uppercase">Stop The Rollercoaster</h3>
<p className="text-base text-zinc-300 font-light leading-relaxed">
                  A great month followed by a terrible month is the result of relying on luck instead of a scalable targeting system.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-[1200px] mx-auto relative z-10 border-t border-zinc-900 mt-12">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400 mb-6">
              Pipeline Generation
            </div>
<h2 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-8 leading-[1.1] drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)] uppercase">
              The Problem Isn't Selling.
              <br className="hidden md:block"/>
<span className="block text-emerald-400 font-semibold italic mt-2">
                It's Targeting.
              </span>
</h2>
<p className="text-xl text-zinc-300 font-light mb-10 leading-relaxed">
              More calls won't fix this. <br/>
              More emails won't fix this.
            </p>
<ul className="space-y-6 mb-12">
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl text-emerald-500 mt-1 shrink-0 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-xl text-zinc-300 font-light">
                  Pipeline grows when <strong className="font-medium text-white">targeting improves</strong>
</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl text-emerald-500 mt-1 shrink-0 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-xl text-zinc-300 font-light">
                  Pipeline grows when <strong className="font-medium text-white">lists are accurate</strong>
</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl text-emerald-500 mt-1 shrink-0 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-xl text-zinc-300 font-light">
                  Pipeline grows when <strong className="font-medium text-white">volume is scalable</strong>
</span>
</li>
</ul>
<div className="flex flex-col sm:flex-row gap-4">
<button className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-emerald-500 text-black rounded-full text-lg font-semibold shadow-[0_0_20px_rgba(16,185,129,0.4)] border border-emerald-400 transition-all hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] uppercase tracking-wide">
<span>Scale My Pipeline</span>
</button>
</div>
</div>

<div className="order-1 lg:order-2 bg-zinc-900/40 border border-zinc-800 rounded-[2rem] p-6 sm:p-10 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] relative overflow-hidden h-[500px] md:h-[600px] flex items-center justify-center backdrop-blur-sm">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/10 to-transparent opacity-50"></div>
<div className="w-full h-full border-2 border-dashed border-zinc-700 rounded-2xl flex items-center justify-center bg-zinc-950/80 text-zinc-500 font-mono text-lg tracking-widest uppercase relative z-30 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                Image Placeholder
            </div>
</div>
</div>
</section>

<div className="w-full h-px relative overflow-hidden mt-12">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent drop-shadow-[0_0_8px_rgba(16,185,129,0.35)]"></div>
</div>
<section className="w-full py-32 relative z-10 bg-black/50 backdrop-blur-md overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-16">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-12 items-center">

<div className="max-w-2xl">
<h2 className="text-5xl md:text-6xl text-white tracking-tight font-light mb-6 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)] uppercase leading-tight">
                Teams building
                <br/>
<span className="text-emerald-400 font-semibold italic">massive pipeline</span>
</h2>
<p className="leading-relaxed text-xl font-light text-zinc-300 mt-6 border-l-4 border-emerald-500 pl-6 py-2">
                Sales teams use Brandon's approach to build lists, improve targeting, and scale outbound to unprecedented levels.
              </p>
</div>

<div className="lg:text-right">
<div className="inline-block text-left lg:text-right">
<div className="text-8xl md:text-9xl font-semibold tracking-tighter text-white drop-shadow-[0_0_30px_rgba(16,185,129,0.8)] leading-none italic">
                  10X
                </div>
<div className="mt-4 text-xl md:text-2xl font-medium uppercase tracking-widest text-emerald-400">
                  Pipeline Growth
                </div>
</div>
</div>
</div>
</div>

<div className="relative w-full max-w-[1200px] mx-auto px-6 py-12">
<div className="w-full h-64 md:h-96 border-2 border-dashed border-zinc-700 rounded-3xl flex items-center justify-center bg-zinc-900/40 text-zinc-500 font-mono text-xl tracking-widest uppercase shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-sm">
                Image Placeholder
            </div>
</div>
</section>
<div className="w-full h-px relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent drop-shadow-[0_0_8px_rgba(16,185,129,0.35)]"></div>
</div>

<section className="max-w-[1200px] mx-auto px-6 py-32 relative z-10 border-b border-zinc-900">
<div className="max-w-3xl mx-auto text-center mb-24">
<h2 className="text-5xl md:text-6xl font-light tracking-tight text-white leading-tight uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
            How Brandon
            <br/>
<span className="block text-emerald-400 font-semibold italic mt-2">Builds Pipeline</span>
</h2>
</div>
<div className="relative max-w-4xl mx-auto" id="hardware-pipeline">
<style>
            @keyframes text-slide-fast {
              0% { top: -150px; opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { top: 100%; opacity: 0; }
            }
          </style>

<div className="absolute left-1/2 top-10 bottom-10 w-4 -translate-x-1/2 bg-zinc-900/80 backdrop-blur-sm rounded-full z-0 hidden md:flex flex-col justify-between items-center py-0 border border-zinc-700 shadow-[inset_0_2px_15px_rgba(0,0,0,0.9)]">
<div className="absolute inset-y-0 w-1.5 bg-zinc-800 rounded-full overflow-hidden z-0">
<div className="absolute -top-32 left-0 w-full h-40 bg-gradient-to-b from-transparent via-emerald-400 to-transparent animate-[text-slide-fast_2.5s_linear_infinite] shadow-[0_0_20px_rgba(16,185,129,1)]"></div>
</div>
<div className="w-12 h-12 rounded-full bg-zinc-950 border-2 border-zinc-700 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)] z-10 transition-transform hover:scale-110 -mt-6">
<div className="text-emerald-400 font-bold text-lg">1</div>
</div>
<div className="w-12 h-12 rounded-full bg-zinc-950 border-2 border-zinc-700 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)] z-10 transition-transform hover:scale-110">
<div className="text-emerald-400 font-bold text-lg">2</div>
</div>
<div className="w-12 h-12 rounded-full bg-zinc-950 border-2 border-zinc-700 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)] z-10 transition-transform hover:scale-110">
<div className="text-emerald-400 font-bold text-lg">3</div>
</div>
<div className="w-12 h-12 rounded-full bg-zinc-950 border-2 border-zinc-700 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)] z-10 transition-transform hover:scale-110 -mb-6">
<div className="text-emerald-400 font-bold text-lg">4</div>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 mb-20 group">
<div className="md:hidden w-full mb-4">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500/50 bg-emerald-500/20 text-emerald-400 font-bold mb-4 shadow-[0_0_15px_rgba(16,185,129,0.3)]">1</div>
<h3 className="text-2xl font-medium text-white uppercase tracking-wide">
                Identify Ideal Prospects
              </h3>
<p className="text-lg text-zinc-400 font-light mt-3 leading-relaxed">
                Stop guessing. Understand exactly who buys from you, why they buy, and where to find them in massive numbers.
              </p>
</div>
<div className="md:w-1/2 md:pr-16 md:text-right hidden md:block">
<h3 className="text-3xl font-medium text-white uppercase tracking-wide">
                Identify Ideal Prospects
              </h3>
<p className="text-lg text-zinc-400 font-light mt-4 leading-relaxed ml-auto max-w-[28ch]">
                Stop guessing. Understand exactly who buys from you, why they buy, and where to find them.
              </p>
</div>
<div className="md:w-1/2 md:pl-16 w-full">
<div className="bg-zinc-900/70 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-zinc-700 shadow-[inset_0_1px_15px_rgba(0,0,0,1)] flex items-center gap-6 hover:bg-zinc-800 transition-all duration-300 group-hover:border-emerald-500/50">
<div className="w-16 h-16 rounded-2xl bg-zinc-950 flex items-center justify-center text-emerald-400 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)] shrink-0">
<iconify-icon className="text-4xl" icon="solar:target-bold-duotone"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-white text-xl font-medium mb-2 uppercase">Laser Focus</h4>
<p className="text-zinc-400 font-light text-sm">Define your ICP so strictly that every outreach is relevant.</p>
</div>
</div>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 mb-20 group">
<div className="md:w-1/2 md:pr-16 w-full order-2 md:order-1 mt-4 md:mt-0">
<div className="bg-zinc-900/70 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-zinc-700 shadow-[inset_0_1px_15px_rgba(0,0,0,1)] flex items-center gap-6 hover:bg-zinc-800 transition-all duration-300 justify-end group-hover:border-emerald-500/50 flex-row-reverse md:flex-row">
<div className="flex-1 text-left md:text-right md:pr-4">
<h4 className="text-white text-xl font-medium mb-2 uppercase">Massive Volume</h4>
<p className="text-zinc-400 font-light text-sm">Generate thousands of verified leads in seconds, not hours.</p>
</div>
<div className="w-16 h-16 rounded-2xl bg-zinc-950 flex items-center justify-center text-emerald-400 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)] shrink-0">
<iconify-icon className="text-4xl" icon="solar:database-bold-duotone"></iconify-icon>
</div>
</div>
</div>
<div className="md:w-1/2 md:pl-16 order-1 md:order-3 md:hidden">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500/50 bg-emerald-500/20 text-emerald-400 font-bold mb-4 shadow-[0_0_15px_rgba(16,185,129,0.3)]">2</div>
<h3 className="text-2xl font-medium text-white uppercase tracking-wide">
                Build Targeted Lists
              </h3>
<p className="text-lg text-zinc-400 font-light mt-3 leading-relaxed">
                Use the best data available to build massive lists of highly qualified buyers who match your exact criteria.
              </p>
</div>
<div className="md:w-1/2 md:pl-16 hidden md:block order-3 text-left">
<h3 className="text-3xl font-medium text-white uppercase tracking-wide">
                Build Targeted Lists
              </h3>
<p className="text-lg text-zinc-400 font-light mt-4 leading-relaxed max-w-[28ch]">
                Use accurate data to build massive lists of highly qualified buyers who match your criteria.
              </p>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 mb-20 group">
<div className="md:hidden w-full mb-4">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500/50 bg-emerald-500/20 text-emerald-400 font-bold mb-4 shadow-[0_0_15px_rgba(16,185,129,0.3)]">3</div>
<h3 className="text-2xl font-medium text-white uppercase tracking-wide">
                Scale Outreach
              </h3>
<p className="text-lg text-zinc-400 font-light mt-3 leading-relaxed">
                Deploy aggressive, multi-channel sequences to reach your massive new lists at the perfect moment.
              </p>
</div>
<div className="md:w-1/2 md:pr-16 md:text-right hidden md:block">
<h3 className="text-3xl font-medium text-white uppercase tracking-wide">
                Scale Outreach
              </h3>
<p className="text-lg text-zinc-400 font-light mt-4 leading-relaxed ml-auto max-w-[28ch]">
                Deploy aggressive, multi-channel sequences to reach your massive lists at scale.
              </p>
</div>
<div className="md:w-1/2 md:pl-16 w-full">
<div className="bg-zinc-900/70 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-zinc-700 shadow-[inset_0_1px_15px_rgba(0,0,0,1)] flex items-center gap-6 hover:bg-zinc-800 transition-all duration-300 group-hover:border-emerald-500/50">
<div className="w-16 h-16 rounded-2xl bg-zinc-950 flex items-center justify-center text-emerald-400 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)] shrink-0">
<iconify-icon className="text-4xl" icon="solar:rocket-bold-duotone"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-white text-xl font-medium mb-2 uppercase">Execution Engine</h4>
<p className="text-zinc-400 font-light text-sm">Automate the follow-up so your reps focus on selling, not sending.</p>
</div>
</div>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 group">
<div className="md:w-1/2 md:pr-16 w-full order-2 md:order-1 mt-4 md:mt-0">
<div className="bg-zinc-900/70 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-zinc-700 shadow-[inset_0_1px_15px_rgba(0,0,0,1)] flex items-center gap-6 hover:bg-zinc-800 transition-all duration-300 justify-end group-hover:border-emerald-500/50 flex-row-reverse md:flex-row">
<div className="flex-1 text-left md:text-right md:pr-4">
<h4 className="text-white text-xl font-medium mb-2 uppercase">Revenue Growth</h4>
<p className="text-zinc-400 font-light text-sm">More qualified meetings directly leads to more closed-won deals.</p>
</div>
<div className="w-16 h-16 rounded-2xl bg-zinc-950 flex items-center justify-center text-emerald-400 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)] shrink-0">
<iconify-icon className="text-4xl" icon="solar:chart-square-bold-duotone"></iconify-icon>
</div>
</div>
</div>
<div className="md:w-1/2 md:pl-16 order-1 md:order-3 md:hidden">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500/50 bg-emerald-500/20 text-emerald-400 font-bold mb-4 shadow-[0_0_15px_rgba(16,185,129,0.3)]">4</div>
<h3 className="text-2xl font-medium text-white uppercase tracking-wide">
                Generate Pipeline
              </h3>
<p className="text-lg text-zinc-400 font-light mt-3 leading-relaxed">
                Turn responses into meetings, and meetings into revenue. This is the ultimate output of the system.
              </p>
</div>
<div className="md:w-1/2 md:pl-16 hidden md:block order-3">
<h3 className="text-3xl font-medium text-white uppercase tracking-wide">
                Generate Pipeline
              </h3>
<p className="text-lg text-zinc-400 font-light mt-4 leading-relaxed max-w-[28ch]">
                Turn responses into meetings, and meetings into revenue. This is the ultimate output.
              </p>
</div>
</div>
</div>
<div className="mt-20 text-center">
<a className="inline-flex items-center justify-center px-12 py-5 bg-emerald-500 text-black rounded-full text-xl font-bold shadow-[0_0_25px_rgba(16,185,129,0.5)] border border-emerald-400 transition-all hover:bg-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] uppercase tracking-widest" href="#">
              Scale My Pipeline
            </a>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-32 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

<div className="">
<div className="text-sm uppercase tracking-[0.25em] text-emerald-400 font-semibold mb-6">
              The Arsenal
            </div>
<h2 className="text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.1] drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)] uppercase">
              What's Included
              <br className="hidden md:block"/>
<span className="block text-zinc-400 font-semibold italic mt-2">
                In The System
              </span>
</h2>
<p className="leading-relaxed text-xl font-light text-zinc-300 max-w-xl mt-8">
              Everything your team needs to stop wasting time on manual prospecting and start building pipeline at scale.
            </p>
</div>

<div className="grid sm:grid-cols-2 gap-6">
<div className="bg-zinc-900/60 backdrop-blur-sm rounded-3xl border border-zinc-700 p-8 hover:bg-zinc-800/90 hover:border-emerald-500/50 transition-all shadow-[inset_0_1px_10px_rgba(0,0,0,1)]">
<div className="flex items-center gap-5">
<div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-700 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
<iconify-icon className="text-3xl text-zinc-300" icon="solar:layers-bold-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-lg text-white font-medium tracking-wide uppercase">
                  List Building Systems
                </div>
</div>
<p className="mt-6 text-base text-zinc-400 font-light leading-relaxed">
                Scalable frameworks to build massive, accurate lists of decision-makers in minutes.
              </p>
</div>
<div className="bg-zinc-900/60 backdrop-blur-sm rounded-3xl border border-zinc-700 p-8 hover:bg-zinc-800/90 hover:border-emerald-500/50 transition-all shadow-[inset_0_1px_10px_rgba(0,0,0,1)]">
<div className="flex items-center gap-5">
<div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-700 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
<iconify-icon className="text-3xl text-zinc-300" icon="solar:map-arrow-up-bold-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-lg text-white font-medium tracking-wide uppercase">
                  Prospecting Strategy
                </div>
</div>
<p className="mt-6 text-base text-zinc-400 font-light leading-relaxed">
                Aggressive tactics to reach the right people at the exact right time, every time.
              </p>
</div>
<div className="bg-zinc-900/60 backdrop-blur-sm rounded-3xl border border-zinc-700 p-8 hover:bg-zinc-800/90 hover:border-emerald-500/50 transition-all shadow-[inset_0_1px_10px_rgba(0,0,0,1)]">
<div className="flex items-center gap-5">
<div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-700 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
<iconify-icon className="text-3xl text-zinc-300" icon="solar:radar-bold-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-lg text-white font-medium tracking-wide uppercase">
                  Data &amp; Targeting
                </div>
</div>
<p className="mt-6 text-base text-zinc-400 font-light leading-relaxed">
                Leverage the most accurate B2B data to completely eliminate the guesswork from outreach.
              </p>
</div>
<div className="bg-zinc-900/60 backdrop-blur-sm rounded-3xl border border-zinc-700 p-8 hover:bg-zinc-800/90 hover:border-emerald-500/50 transition-all shadow-[inset_0_1px_10px_rgba(0,0,0,1)]">
<div className="flex items-center gap-5">
<div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-700 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
<iconify-icon className="text-3xl text-zinc-300" icon="solar:document-text-bold-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-lg text-white font-medium tracking-wide uppercase">
                  Outbound Frameworks
                </div>
</div>
<p className="mt-6 text-base text-zinc-400 font-light leading-relaxed">
                Proven, high-converting sequences and scripts designed to force responses.
              </p>
</div>

<div className="sm:col-span-2 mt-4">
<div className="bg-gradient-to-r from-emerald-900/40 to-zinc-900/60 backdrop-blur-sm rounded-3xl border border-emerald-500/30 p-8 flex flex-col sm:flex-row items-center gap-8 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
<div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.5)] border-4 border-zinc-950">
<iconify-icon className="text-4xl text-black" icon="solar:bolt-bold-duotone"></iconify-icon>
</div>
<div className="text-center sm:text-left">
<h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-2">Sales Growth Training</h3>
<p className="text-emerald-100/80 font-light text-lg">Ongoing education and aggressive strategies to keep your team closing.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full h-px relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent drop-shadow-[0_0_8px_rgba(16,185,129,0.35)]"></div>
</div>
<section className="max-w-[1200px] mx-auto px-6 py-32 relative z-10">
<div className="bg-zinc-900/70 rounded-[3rem] shadow-[inset_0_1px_15px_rgba(0,0,0,1)] flex flex-col lg:flex-row overflow-hidden border border-zinc-700 backdrop-blur-md relative">

<div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-black pointer-events-none"></div>

<div className="p-10 lg:p-20 flex-1 flex flex-col justify-center text-center lg:text-left items-center lg:items-start max-w-2xl relative z-10">
<h2 className="text-4xl md:text-5xl tracking-tight text-white mb-8 leading-[1.2] drop-shadow-[0_2px_15px_rgba(16,185,129,0.15)] font-light uppercase relative z-10">
              Hi, I'm
              <span className="block text-emerald-400 font-semibold mt-2">Brandon Bornancin.</span>
</h2>
<p className="text-lg md:text-xl text-zinc-300 font-light mb-10 max-w-lg leading-relaxed relative z-10 mx-auto lg:mx-0">
              I work with sales teams that want more pipeline but don't have enough leads. <br/><br/>
              The issue isn't effort — <strong className="text-white font-medium">it's targeting and scale.</strong> <br/><br/>
              My focus is helping you build lists and generate pipeline fast. No fluff, just execution.
            </p>

<div className="flex flex-col sm:flex-row gap-5 max-w-[28rem] w-full justify-center lg:justify-start relative z-10">
<button className="flex-1 py-4 bg-emerald-500 text-black font-bold text-lg hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] px-8 rounded-full uppercase tracking-widest">
                Book a call
              </button>
</div>
</div>

<div className="flex-1 min-h-[400px] lg:min-h-[600px] relative bg-zinc-950 border-t lg:border-t-0 lg:border-l border-zinc-800 flex items-center justify-center p-8 lg:p-12">
<div className="w-full h-full border-2 border-dashed border-zinc-700 rounded-3xl flex items-center justify-center bg-zinc-900/50 text-zinc-500 font-mono text-xl tracking-widest uppercase shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] relative z-30">
                Image Placeholder
            </div>
</div>
</div>
</section>

<section className="max-w-[1000px] mx-auto px-6 pb-32 relative z-10" id="faq-section">
<div className="text-center mb-16">
<h2 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-6 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)] uppercase">
            Questions?
          </h2>
<p className="text-zinc-400 font-light text-xl leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about scaling your pipeline.
          </p>
</div>

<div className="max-w-3xl mx-auto bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 md:p-10 shadow-[inset_0_1px_10px_rgba(0,0,0,0.5)]">
<div className="block space-y-2">

<div className="group border-b border-zinc-800/80 overflow-hidden">
<button className="w-full py-6 flex justify-between items-center text-left gap-4 focus:outline-none" onclick="window.toggleFaq(this)">
<span className="text-xl font-medium tracking-wide text-zinc-200 group-hover:text-emerald-400 transition-colors duration-300 uppercase">
                  Who is this for?
                </span>
<iconify-icon className="faq-icon text-2xl text-zinc-500 group-hover:text-emerald-400 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-8 text-zinc-400 font-light text-lg leading-relaxed">
                    Sales reps, founders, BDRs/SDRs, AEs, and entire revenue teams operating in outbound-heavy organizations.
                  </p>
</div>
</div>
</div>

<div className="group border-b border-zinc-800/80 overflow-hidden">
<button className="w-full py-6 flex justify-between items-center text-left gap-4 focus:outline-none" onclick="window.toggleFaq(this)">
<span className="text-xl font-medium tracking-wide text-zinc-200 group-hover:text-emerald-400 transition-colors duration-300 uppercase">
                  Is this prospecting training?
                </span>
<iconify-icon className="faq-icon text-2xl text-zinc-500 group-hover:text-emerald-400 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-8 text-zinc-400 font-light text-lg leading-relaxed">
                    Yes, but highly focused on pipeline generation and execution. It's about building systems that scale, not just theory.
                  </p>
</div>
</div>
</div>

<div className="group border-b border-zinc-800/80 overflow-hidden">
<button className="w-full py-6 flex justify-between items-center text-left gap-4 focus:outline-none" onclick="window.toggleFaq(this)">
<span className="text-xl font-medium tracking-wide text-zinc-200 group-hover:text-emerald-400 transition-colors duration-300 uppercase">
                  Does this work for experienced teams?
                </span>
<iconify-icon className="faq-icon text-2xl text-zinc-500 group-hover:text-emerald-400 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-8 text-zinc-400 font-light text-lg leading-relaxed">
                    Yes, especially those. Experienced teams often hit a ceiling because their manual processes break. This system scales outbound aggressively.
                  </p>
</div>
</div>
</div>

<div className="group border-b border-zinc-800/80 overflow-hidden">
<button className="w-full py-6 flex justify-between items-center text-left gap-4 focus:outline-none" onclick="window.toggleFaq(this)">
<span className="text-xl font-medium tracking-wide text-zinc-200 group-hover:text-emerald-400 transition-colors duration-300 uppercase">
                  What makes this different?
                </span>
<iconify-icon className="faq-icon text-2xl text-zinc-500 group-hover:text-emerald-400 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-8 text-zinc-400 font-light text-lg leading-relaxed">
                    Zero fluff. 100% focus on data accuracy and massive scale. If you want motivation without mechanics, look elsewhere.
                  </p>
</div>
</div>
</div>

<div className="group overflow-hidden">
<button className="w-full py-6 flex justify-between items-center text-left gap-4 focus:outline-none" onclick="window.toggleFaq(this)">
<span className="text-xl font-medium tracking-wide text-zinc-200 group-hover:text-emerald-400 transition-colors duration-300 uppercase">
                  How do we start?
                </span>
<iconify-icon className="faq-icon text-2xl text-zinc-500 group-hover:text-emerald-400 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-8 text-zinc-400 font-light text-lg leading-relaxed">
                    Book a call below. We'll audit your current pipeline generation and show you how to scale it immediately.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1000px] mx-auto px-6 pb-32 relative z-10 text-center">
<h2 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)] uppercase">
            Build Pipeline <span className="font-semibold italic text-emerald-400">At Scale</span>
</h2>
<p className="text-zinc-300 font-light text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Book a call to grow your pipeline faster.
        </p>

<div className="w-full max-w-4xl mx-auto h-[500px] border-2 border-dashed border-zinc-700 rounded-3xl flex flex-col items-center justify-center bg-zinc-900/60 z-30 relative shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-md mb-12">
<iconify-icon className="text-6xl text-emerald-500/50 mb-6 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]" icon="solar:calendar-bold-duotone"></iconify-icon>
<span className="text-zinc-400 font-mono tracking-widest text-lg uppercase bg-zinc-950/80 px-8 py-3 rounded-xl border border-zinc-800 shadow-[0_5px_15px_rgba(0,0,0,0.5)]">Calendly Placeholder</span>
</div>
<div className="mt-10">
<button className="px-12 py-5 bg-emerald-500 text-black font-bold rounded-full shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:bg-emerald-400 transition-all text-xl tracking-widest uppercase hover:scale-105 transform">
               Book My Call
           </button>
</div>
</section>

<footer className="bg-zinc-950 border-t border-zinc-900 pt-24 pb-16 relative z-10">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col lg:flex-row justify-between gap-20">

<div className="max-w-[300px]">
<div className="flex items-center gap-2 text-xl tracking-tight font-medium text-white mb-6">
                    Brandon Bornancin
                    <div className="h-6 px-2 bg-emerald-500/10 border border-emerald-500/30 rounded flex items-center justify-center">
<span className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase">
                        Seamless.ai
                    </span>
</div>
</div>
<p className="text-base text-zinc-500 font-light leading-relaxed">
                    Scale your pipeline. Build massive lists. Dominate outbound sales.
                </p>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-12">
<div>
<h4 className="text-xs font-semibold text-emerald-500 mb-6 uppercase tracking-[0.2em]">
                    System
                </h4>
<ul className="space-y-4 text-sm font-medium uppercase tracking-wider text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">List Building</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Prospecting</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Frameworks</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-emerald-500 mb-6 uppercase tracking-[0.2em]">
                    Company
                </h4>
<ul className="space-y-4 text-sm font-medium uppercase tracking-wider text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">About</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Training</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Seamless.ai</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="text-xs font-semibold text-emerald-500 mb-6 uppercase tracking-[0.2em]">
                    Action
                </h4>
<ul className="space-y-4 text-sm font-medium uppercase tracking-wider text-zinc-500">
<li><a className="hover:text-emerald-400 text-emerald-500 transition-colors" href="#">Book A Call</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-24 pt-10 border-t border-zinc-900">
<div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-medium tracking-wider uppercase text-zinc-600">
<div>© 2026 Brandon Bornancin</div>
<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
<a className="hover:text-zinc-300 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-zinc-300 transition-colors" href="#">YouTube</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a>
</div>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
