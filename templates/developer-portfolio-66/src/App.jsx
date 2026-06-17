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



        // Deep Dive Accordion Functionality
        function toggleDeepDive(element) {
            const content = element.querySelector('.deep-dive-content');
            if (content.classList.contains('max-h-0')) {
                content.classList.remove('max-h-0', 'opacity-0');
                content.classList.add('max-h-[300px]', 'opacity-100');
                // Optional slight scroll to center the expanded view
                setTimeout(() => {
                    const yOffset = -100; 
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({top: y, behavior: 'smooth'});
                }, 300);
            } else {
                content.classList.add('max-h-0', 'opacity-0');
                content.classList.remove('max-h-[300px]', 'opacity-100');
            }
        }

        // Marvel Cinematic Click Effects
        const effects = ['repulsor', 'web', 'thunder'];
        let currentEffect = 0;

        document.addEventListener('click', (e) => {
            // Create a temporary overlay for the effect so it doesn't break page layout
            const layer = document.createElement('div');
            layer.style.position = 'fixed';
            layer.style.inset = '0';
            layer.style.pointerEvents = 'none';
            layer.style.zIndex = '9999';
            layer.style.overflow = 'hidden';
            document.body.appendChild(layer);

            const x = e.clientX;
            const y = e.clientY;
            const effect = effects[currentEffect];
            currentEffect = (currentEffect + 1) % effects.length;

            if (effect === 'repulsor') {
                // 1. Iron Man Repulsor Blast
                const blast = document.createElement('div');
                blast.className = 'absolute rounded-full border-[3px] border-red-500 bg-red-100/40 transition-all duration-300 ease-out';
                blast.style.left = x + 'px';
                blast.style.top = y + 'px';
                blast.style.width = '0px';
                blast.style.height = '0px';
                blast.style.transform = 'translate(-50%, -50%)';
                blast.style.boxShadow = '0 0 30px 15px rgba(239, 68, 68, 0.4)';
                layer.appendChild(blast);

                const beam = document.createElement('div');
                beam.className = 'absolute bg-red-500 transition-all duration-200 ease-out origin-bottom';
                const dx = x - (window.innerWidth / 2);
                const dy = y - window.innerHeight;
                const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                const length = Math.sqrt(dx*dx + dy*dy);
                
                beam.style.left = (window.innerWidth / 2) + 'px';
                beam.style.top = window.innerHeight + 'px';
                beam.style.width = '8px';
                beam.style.height = '0px';
                beam.style.transform = `translate(-50%, -100%) rotate(${angle + 90}deg)`;
                beam.style.boxShadow = '0 0 20px 5px rgba(239, 68, 68, 0.6)';
                beam.style.borderRadius = '10px';
                layer.appendChild(beam);

                requestAnimationFrame(() => {
                    blast.style.width = '100px';
                    blast.style.height = '100px';
                    blast.style.opacity = '0';
                    beam.style.height = length + 'px';
                });

                setTimeout(() => { beam.style.opacity = '0'; }, 200);

            } else if (effect === 'web') {
                // 2. Spider-Man Web Shooter
                const web = document.createElement('div');
                web.className = 'absolute bg-zinc-100 transition-all duration-300 ease-out origin-left';
                const startX = x < window.innerWidth / 2 ? 0 : window.innerWidth;
                const startY = 0;
                const dx = x - startX;
                const dy = y - startY;
                const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                const length = Math.sqrt(dx*dx + dy*dy);

                web.style.left = startX + 'px';
                web.style.top = startY + 'px';
                web.style.height = '2px';
                web.style.width = '0px';
                web.style.transform = `rotate(${angle}deg)`;
                web.style.boxShadow = '0 0 10px rgba(255,255,255,0.6)';
                layer.appendChild(web);

                const splat = document.createElement('div');
                splat.className = 'absolute rounded-full bg-zinc-100 transition-all duration-200 ease-out opacity-0';
                splat.style.left = x + 'px';
                splat.style.top = y + 'px';
                splat.style.width = '16px';
                splat.style.height = '16px';
                splat.style.transform = 'translate(-50%, -50%) scale(0)';
                layer.appendChild(splat);

                requestAnimationFrame(() => {
                    web.style.width = length + 'px';
                    setTimeout(() => {
                        splat.style.opacity = '1';
                        splat.style.transform = 'translate(-50%, -50%) scale(1.5)';
                    }, 150);
                });

                setTimeout(() => {
                    web.style.opacity = '0';
                    splat.style.opacity = '0';
                }, 400);

            } else if (effect === 'thunder') {
                // 3. Thor Lightning Strike
                const flash = document.createElement('div');
                flash.className = 'absolute inset-0 bg-blue-500/10 transition-opacity duration-150';
                layer.appendChild(flash);

                const bolt = document.createElement('div');
                bolt.className = 'absolute bg-blue-50 transition-all duration-100 ease-in origin-top';
                bolt.style.left = x + 'px';
                bolt.style.top = '0px';
                bolt.style.width = '3px';
                bolt.style.height = '0px';
                bolt.style.boxShadow = '0 0 20px 5px rgba(96, 165, 250, 0.6), 0 0 40px 10px rgba(255, 255, 255, 0.4)';
                bolt.style.transform = 'translateX(-50%)';
                layer.appendChild(bolt);

                const strike = document.createElement('div');
                strike.className = 'absolute rounded-full bg-blue-100 transition-all duration-300 ease-out opacity-0';
                strike.style.left = x + 'px';
                strike.style.top = y + 'px';
                strike.style.width = '80px';
                strike.style.height = '6px';
                strike.style.transform = 'translate(-50%, -50%)';
                strike.style.boxShadow = '0 0 40px 20px rgba(96, 165, 250, 0.5)';
                layer.appendChild(strike);

                requestAnimationFrame(() => {
                    bolt.style.height = y + 'px';
                    strike.style.opacity = '1';
                });

                setTimeout(() => {
                    flash.style.opacity = '0';
                    bolt.style.opacity = '0';
                    strike.style.opacity = '0';
                    strike.style.transform = 'translate(-50%, -50%) scale(2)';
                }, 100);
            }

            // Cleanup layer
            setTimeout(() => {
                layer.remove();
            }, 600);
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
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none flex justify-center">
<div className="absolute top-[-20%] w-[150%] max-w-[80rem] aspect-square rounded-full bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.06),transparent_50%)]"></div>
<div className="absolute top-[20%] left-[-10%] w-[100%] max-w-[60rem] aspect-square rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.03),transparent_50%)]"></div>
</div>

<nav className="relative z-10 border-b backdrop-blur-md sticky top-0 border-zinc-900 bg-zinc-950/50">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-zinc-100 flex items-center gap-2" href="#">
<iconify-icon className="text-red-500" icon="solar:bolt-linear"></iconify-icon> SJ
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="transition-colors hover:text-zinc-100" href="#about">About</a>
<a className="transition-colors hover:text-zinc-100" href="#skills">Skills</a>
<a className="transition-colors hover:text-zinc-100" href="#projects">Projects</a>
<a className="transition-colors hover:text-zinc-100" href="#contact">Contact</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium rounded-full transition-colors text-zinc-950 bg-zinc-100 hover:bg-white" href="#contact">
                Access Mainframe
            </a>
<button className="md:hidden text-zinc-400 hover:text-zinc-100">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>
<main className="z-10 flex flex-col gap-32 max-w-5xl mr-auto ml-auto pt-24 pr-6 pb-32 pl-6 relative gap-x-32 gap-y-32">

<section className="flex flex-col max-w-3xl gap-x-6 gap-y-6 items-start">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium border-red-900/30 bg-red-950/20 text-red-200 shadow-[0_0_15px_rgba(220,38,38,0.1)]">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
                Systems Online
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight text-zinc-100">
                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r to-zinc-500 from-zinc-100">Saksham Jha.</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg text-zinc-400 max-w-2xl">
                An 11th-grade computer science student with a passion for writing clean code, crafting engaging video content, and exploring the Marvel universe.
            </p>
<div className="flex items-center gap-4 mt-4">
<a className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full transition-colors text-zinc-950 bg-zinc-100 hover:bg-white" href="#projects">
                    View My Work
                    <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center w-12 h-12 rounded-full border transition-all border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-300" href="https://github.com" target="_blank">
<iconify-icon height="20" icon="solar:programming-linear" width="20"></iconify-icon>
</a>
<span className="text-xs text-zinc-500 font-medium ml-4 hidden md:block">Click anywhere to test protocols</span>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center" id="about">
<div className="md:col-span-3 flex flex-col gap-6">
<h2 className="text-3xl font-medium tracking-tight text-zinc-100">Behind the Screen</h2>
<div className="space-y-4 text-sm md:text-base leading-relaxed text-zinc-400">
<p>
                        I'm currently in my 11th grade, diving deep into the world of Computer Science. My journey started with a curiosity about how websites and games work, which led me straight into learning C, C++, HTML, and CSS.
                    </p>
<p>
                        But code isn't my only language. I have a massive passion for editing and content creation. Whether it's cutting together a fast-paced montage or designing clean visuals, I love the storytelling aspect of media.
                    </p>
<p>
                        When I'm not debugging a C++ program or rendering a video, you'll probably find me geeking out over Marvel. Huge fan of Iron Man and Spider-Man—I appreciate the blend of genius-level tech and great responsibility!
                    </p>
</div>
</div>

<div className="md:col-span-2 relative aspect-[4/5] rounded-2xl overflow-hidden border group border-zinc-800 bg-zinc-950 flex flex-col items-center justify-center cursor-pointer" onclick="document.body.click()">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05),transparent_70%)] group-hover:bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_70%)] transition-colors duration-700"></div>
<div className="relative w-48 h-48 rounded-full border-[1px] border-cyan-900/50 bg-zinc-950 shadow-[0_0_60px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_80px_rgba(6,182,212,0.3)] transition-all duration-700 flex items-center justify-center">

<div className="absolute w-40 h-40 rounded-full border-[4px] border-cyan-500/20 flex items-center justify-center animate-[spin_12s_linear_infinite] group-hover:border-cyan-400/50 transition-colors duration-500">
<div className="w-full h-full rounded-full border-t-[4px] border-cyan-300/40"></div>
</div>
<div className="absolute w-32 h-32 rounded-full border-[2px] border-cyan-400/30 flex items-center justify-center animate-[spin_8s_linear_infinite_reverse] border-dashed"></div>

<div className="absolute w-20 h-20 rounded-full bg-cyan-950/50 border border-cyan-300/40 shadow-[inset_0_0_20px_rgba(6,182,212,0.5)] flex items-center justify-center">
<div className="w-10 h-10 rounded-full bg-cyan-100 shadow-[0_0_40px_15px_rgba(6,182,212,0.6)] group-hover:shadow-[0_0_60px_20px_rgba(255,255,255,0.8)] group-hover:bg-white transition-all duration-500 flex items-center justify-center">
<div className="w-4 h-4 rounded-full bg-white blur-[1px]"></div>
</div>
</div>
</div>
<div className="absolute bottom-8 w-full text-center z-20 flex flex-col items-center gap-2">
<span className="text-[10px] uppercase tracking-[0.3em] font-medium text-cyan-500/70 group-hover:text-cyan-400 transition-colors drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">Mark LXXXV Core</span>
<span className="text-[10px] text-zinc-600 font-medium tracking-wide">Click to overload</span>
</div>
</div>
</section>

<section className="flex flex-col gap-8" id="skills">
<h2 className="text-3xl font-medium tracking-tight text-zinc-100">Arsenal</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="flex flex-col gap-4 p-6 rounded-2xl border transition-colors border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/80">
<div className="w-10 h-10 rounded-lg flex items-center justify-center border bg-zinc-800 text-zinc-100 border-zinc-700">
<iconify-icon height="22" icon="solar:code-square-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-zinc-200">Development</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">Building logic and interfaces from the ground up.</p>
<ul className="flex flex-wrap gap-2 text-xs font-medium">
<li className="px-2.5 py-1 rounded-md border bg-zinc-800/50 border-zinc-700/50 text-zinc-300">C</li>
<li className="px-2.5 py-1 rounded-md border bg-zinc-800/50 border-zinc-700/50 text-zinc-300">C++</li>
<li className="px-2.5 py-1 rounded-md border bg-zinc-800/50 border-zinc-700/50 text-zinc-300">HTML5</li>
<li className="px-2.5 py-1 rounded-md border bg-zinc-800/50 border-zinc-700/50 text-zinc-300">CSS3</li>
</ul>
</div>
</div>

<div className="flex flex-col gap-4 p-6 rounded-2xl border transition-colors border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/80">
<div className="w-10 h-10 rounded-lg flex items-center justify-center border bg-zinc-800 text-zinc-100 border-zinc-700">
<iconify-icon height="22" icon="solar:video-frame-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-zinc-200">Content &amp; Editing</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">Crafting narratives through visual media and cuts.</p>
<ul className="flex flex-wrap gap-2 text-xs font-medium">
<li className="px-2.5 py-1 rounded-md border bg-zinc-800/50 border-zinc-700/50 text-zinc-300">Video Editing</li>
<li className="px-2.5 py-1 rounded-md border bg-zinc-800/50 border-zinc-700/50 text-zinc-300">Motion Graphics</li>
<li className="px-2.5 py-1 rounded-md border bg-zinc-800/50 border-zinc-700/50 text-zinc-300">Content Strategy</li>
</ul>
</div>
</div>

<div className="flex flex-col gap-4 p-6 rounded-2xl border transition-colors border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/80">
<div className="w-10 h-10 rounded-lg flex items-center justify-center border bg-zinc-800 text-zinc-100 border-zinc-700">
<iconify-icon height="22" icon="solar:rocket-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-zinc-200">Deployment</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">Taking local projects and making them live for the world.</p>
<ul className="flex flex-wrap gap-2 text-xs font-medium">
<li className="px-2.5 py-1 rounded-md border bg-zinc-800/50 border-zinc-700/50 text-zinc-300">Render</li>
<li className="px-2.5 py-1 rounded-md border bg-zinc-800/50 border-zinc-700/50 text-zinc-300">Git/GitHub</li>
<li className="px-2.5 py-1 rounded-md border bg-zinc-800/50 border-zinc-700/50 text-zinc-300">Web Hosting</li>
</ul>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-8" id="projects">
<h2 className="text-3xl font-medium tracking-tight text-zinc-100">Recent Endeavors</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group flex flex-col gap-0 rounded-2xl border overflow-hidden transition-all duration-300 cursor-pointer border-zinc-800 bg-zinc-900/20 hover:border-zinc-600 hover:bg-zinc-900/40" onclick="toggleDeepDive(this)">
<div className="h-48 border-b relative overflow-hidden flex items-center justify-center bg-zinc-900 border-zinc-800">
<img alt="Web Development Project" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent z-10 from-zinc-900"></div>
<iconify-icon className="z-20 group-hover:scale-110 transition-transform duration-500 drop-shadow-xl text-zinc-200" height="48" icon="solar:window-frame-linear" width="48"></iconify-icon>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-xl font-medium tracking-tight text-zinc-200">Personal Portfolio</h3>
<p className="text-xs text-zinc-500 mt-1">HTML, CSS, Render</p>
</div>
<div className="text-zinc-500 transition-transform group-hover:text-zinc-200 group-hover:rotate-45">
<iconify-icon height="20" icon="solar:add-circle-linear" width="20"></iconify-icon>
</div>
</div>
<p className="text-sm leading-relaxed text-zinc-400">
                            A fully responsive, custom-designed portfolio to showcase my skills in web development and content creation, deployed seamlessly via Render.
                        </p>

<div className="deep-dive-content overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out">
<div className="pt-4 mt-4 border-t border-zinc-800/80">
<h4 className="text-[10px] font-semibold text-cyan-500 tracking-widest uppercase mb-3 flex items-center gap-2">
<iconify-icon icon="solar:folder-code-linear" width="14"></iconify-icon> Subroutine Extracted
                                </h4>
<div className="p-4 rounded-lg bg-zinc-950/80 border border-zinc-800/50 font-mono text-[10px] text-zinc-400 leading-relaxed">
<span className="text-cyan-400">const</span> <span className="text-red-300">initPortfolio</span> = <span className="text-cyan-400">() =&gt;</span> {<br/>
                                      <span className="text-zinc-300">loadAssets</span>();<br/>
                                      <span className="text-zinc-300">injectStyling</span>();<br/>
                                      <span className="text-zinc-500">// Ready for deployment</span><br/>
                                      <span className="text-cyan-400">return</span> <span className="text-amber-200">"Online"</span>;<br/>
                                    };
                                </div>
</div>
</div>
<div className="mt-5 flex items-center justify-center text-[10px] text-zinc-500 font-medium tracking-widest uppercase gap-2 transition-colors group-hover:text-cyan-500">
<span>Click to dive deeper</span>
</div>
</div>
</div>

<div className="group flex flex-col gap-0 rounded-2xl border overflow-hidden transition-all duration-300 cursor-pointer border-zinc-800 bg-zinc-900/20 hover:border-zinc-600 hover:bg-zinc-900/40" onclick="toggleDeepDive(this)">
<div className="h-48 border-b relative overflow-hidden flex items-center justify-center bg-zinc-900 border-zinc-800">
<img alt="C++ Gaming Project" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent z-10 from-zinc-900"></div>
<iconify-icon className="z-20 group-hover:scale-110 transition-transform duration-500 drop-shadow-xl text-zinc-200" height="48" icon="solar:gamepad-linear" width="48"></iconify-icon>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-xl font-medium tracking-tight text-zinc-200">C++ Logic Games</h3>
<p className="text-xs text-zinc-500 mt-1">C, C++, CLI</p>
</div>
<div className="text-zinc-500 transition-transform group-hover:text-zinc-200 group-hover:rotate-45">
<iconify-icon height="20" icon="solar:add-circle-linear" width="20"></iconify-icon>
</div>
</div>
<p className="text-sm leading-relaxed text-zinc-400">
                            A collection of terminal-based games and logic puzzles built to strengthen my core programming fundamentals and algorithm design.
                        </p>

<div className="deep-dive-content overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out">
<div className="pt-4 mt-4 border-t border-zinc-800/80">
<h4 className="text-[10px] font-semibold text-red-500 tracking-widest uppercase mb-3 flex items-center gap-2">
<iconify-icon icon="solar:folder-code-linear" width="14"></iconify-icon> Memory Dump
                                </h4>
<div className="p-4 rounded-lg bg-zinc-950/80 border border-zinc-800/50 font-mono text-[10px] text-zinc-400 leading-relaxed">
<span className="text-red-400">#include</span> &lt;<span className="text-amber-200">iostream</span>&gt;<br/>
<span className="text-cyan-400">int</span> <span className="text-zinc-200">main</span>() {<br/>
                                      <span className="text-zinc-300">GameEngine</span> engine;<br/>
                                      <span className="text-cyan-400">while</span>(engine.<span className="text-zinc-300">isRunning</span>()) {<br/>
                                        engine.<span className="text-zinc-300">updateLoop</span>();<br/>
                                      }<br/>
                                      <span className="text-cyan-400">return</span> <span className="text-amber-200">0</span>;<br/>
                                    }
                                </div>
</div>
</div>
<div className="mt-5 flex items-center justify-center text-[10px] text-zinc-500 font-medium tracking-widest uppercase gap-2 transition-colors group-hover:text-red-500">
<span>Click to dive deeper</span>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col items-center justify-center text-center gap-6 py-20 border-t border-zinc-900" id="contact">
<h2 className="text-3xl font-medium tracking-tight text-zinc-100">Let's Connect</h2>
<p className="text-sm md:text-base max-w-md mx-auto mb-4 text-zinc-400">
                Whether you want to discuss code, collaborate on an editing project, or debate the best Spider-Man movie, I'm always open to chat.
            </p>
<a className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border rounded-full transition-all group text-zinc-100 bg-zinc-900 border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="mailto:jhasakshamwillbe@gmail.com">
<iconify-icon className="group-hover:scale-110 transition-transform" height="18" icon="solar:letter-linear" width="18"></iconify-icon>
                jhasakshamwillbe@gmail.com
            </a>
<div className="flex items-center gap-6 mt-8 text-zinc-500">
<a className="transition-colors hover:text-zinc-100" href="#">
<span className="sr-only">GitHub</span>
<iconify-icon height="24" icon="solar:code-circle-linear" width="24"></iconify-icon>
</a>
<a className="transition-colors hover:text-zinc-100" href="#">
<span className="sr-only">YouTube</span>
<iconify-icon height="24" icon="solar:videocamera-linear" width="24"></iconify-icon>
</a>
<a className="transition-colors hover:text-zinc-100" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon height="24" icon="solar:camera-linear" width="24"></iconify-icon>
</a>
</div>
</section>
</main>

<footer className="border-t border-zinc-900 bg-zinc-950">
<div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-500 font-medium tracking-wide">
                © 2023 SAKSHAM JHA. ALL RIGHTS RESERVED.
            </p>
<div className="flex items-center gap-2 text-xs text-zinc-600">
                Designed with <iconify-icon className="text-red-500/50" height="14" icon="solar:heart-linear" width="14"></iconify-icon> in HTML &amp; CSS
            </div>
</div>
</footer>



    </>
  );
}
