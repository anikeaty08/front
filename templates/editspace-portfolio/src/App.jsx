import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
primary: '#020410', // Deep Dark Background
secondary: '#c026d3', // Fuchsia/Purple Accent
tertiary: '#06b6d4', // Cyan/Blue Accent
dark: '#f8fafc', // Light Text
surface: 'rgba(255, 255, 255, 0.03)',
glass: 'rgba(0, 0, 0, 0.3)'
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
boxShadow: {
'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
'glow': '0 0 40px rgba(192, 38, 211, 0.15)',
'3d': '20px 20px 60px #010205, -20px -20px 60px #03061b',
},
backgroundImage: {
'gradient-brand': 'linear-gradient(to right, #c026d3, #06b6d4)',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'spin-slow': 'spin-3d 20s linear infinite',
'glitch': 'glitch 3s infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
'spin-3d': {
'0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
'100%': { transform: 'rotateX(360deg) rotateY(360deg)' }
},
glitch: {
'0%': { transform: 'translateX(0)' },
'2%': { transform: 'translateX(-2px)' },
'4%': { transform: 'translateX(2px)' },
'6%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(0)' }
}
}
}
}
}



      const cursorDot = document.getElementById("cursor-dot");
      const cursorOutline = document.getElementById("cursor-outline");
      const interactables = document.querySelectorAll(".interactable, a, button, input, textarea, label");

      // Mouse Move Event
      window.addEventListener("mousemove", function (e) {
          const posX = e.clientX;
          const posY = e.clientY;

          // Move Dot instantly
          cursorDot.style.left = `${posX}px`;
          cursorDot.style.top = `${posY}px`;

          // Move Outline with slight delay/animation (using keyframes handled by CSS transition or simple JS lag)
          cursorOutline.animate({
              left: `${posX}px`,
              top: `${posY}px`
          }, { duration: 500, fill: "forwards" });
      });

      // Hover States
      interactables.forEach(el => {
          el.addEventListener("mouseenter", () => {
              document.body.classList.add("hovering");
          });
          el.addEventListener("mouseleave", () => {
              document.body.classList.remove("hovering");
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="cursor-dot" style={{left: '562px', top: '5px'}}></div>
<div id="cursor-outline"></div>

<nav className="fixed w-full z-50 pt-4 pr-6 pb-4 pl-6 top-0">
<div className="max-w-7xl mx-auto flex justify-between items-center bg-surface backdrop-blur-xl rounded-2xl border border-white/5 p-4 shadow-glass">
<a className="group flex items-center gap-3 interactable" href="#">
<div className="relative flex items-center font-semibold text-2xl tracking-tighter select-none">
<span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent glitch-e animate-glitch">
              E
            </span>
<span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              di
            </span>
<div className="relative">
<span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                t
              </span>
<iconify-icon className="absolute -top-4 -right-3 text-cyan-400 text-base -rotate-12 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" icon="lucide:scissors" strokeWidth="2"></iconify-icon>
</div>
<span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Space
            </span>
</div>
</a>
<div className="hidden md:flex gap-8 items-center text-sm font-medium text-white/70">
<a className="hover:text-white transition-colors hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] interactable" href="#services">
            Services
          </a>
<a className="hover:text-white transition-colors interactable" href="#work">
            Work
          </a>
<a className="hover:text-white transition-colors interactable" href="#about">
            About
          </a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-secondary hover:border-secondary transition-all shadow-lg hover:shadow-glow group interactable" href="#contact">
          Let's Talk
          <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<button className="md:hidden text-white/80 interactable">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="min-h-screen flex items-center relative pt-20 overflow-hidden">
<div className="absolute top-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float opacity-40 pointer-events-none"></div>
<div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-tertiary/10 rounded-full blur-[120px] animate-float-delayed opacity-30 pointer-events-none"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 pointer-events-none"></div>
<div className="max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/5 text-xs font-medium text-secondary tracking-wide uppercase shadow-[0_0_15px_rgba(192,38,211,0.2)]">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_#c026d3]"></span>
            Accepting New Projects
          </div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.9] text-white">
            Editing
            <br/>
<span className="text-outline">Beyond</span>
<br/>
            Reality.
          </h1>
<p className="text-lg text-white/60 max-w-md font-light leading-relaxed">
            We craft immersive digital experiences through high-end video
            editing, VFX, and motion graphics.
          </p>
<div className="flex flex-wrap gap-4">
<a className="bg-white text-primary px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 interactable" href="#work">
              View Projects
              <iconify-icon icon="lucide:eye" width="18"></iconify-icon>
</a>
<button className="px-8 py-4 rounded-xl font-medium border border-white/10 text-white hover:bg-white/5 transition-all duration-300 flex items-center gap-2 hover:border-white/30 interactable">
<iconify-icon icon="lucide:play-circle" width="18"></iconify-icon>
              Showreel
            </button>
</div>
</div>
<div className="h-[500px] flex items-center justify-center scene pointer-events-none">
<div className="relative w-[200px] h-[200px] cube animate-spin-slow">
<div className="cube-face face-front flex flex-col gap-2">
<iconify-icon icon="lucide:scissors" strokeWidth="1" width="48"></iconify-icon>
<span className="text-sm tracking-widest uppercase">Edit</span>
</div>
<div className="cube-face face-back flex flex-col gap-2">
<iconify-icon icon="lucide:film" strokeWidth="1" width="48"></iconify-icon>
<span className="text-sm tracking-widest uppercase">Cut</span>
</div>
<div className="cube-face face-right"></div>
<div className="cube-face face-left"></div>
<div className="cube-face face-top"></div>
<div className="cube-face face-bottom flex flex-col gap-2">
<iconify-icon icon="lucide:layers" strokeWidth="1" width="48"></iconify-icon>
<span className="text-sm tracking-widest uppercase">VFX</span>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 relative border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">
              Our Craft
            </h2>
<p className="text-white/50 font-light max-w-sm">
              Merging technical precision with artistic vision.
            </p>
</div>
<div className="h-px bg-gradient-to-r from-secondary/50 to-transparent flex-1 md:ml-12"></div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative p-8 rounded-3xl bg-surface border border-white/5 hover:border-secondary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 overflow-hidden interactable">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 ease-out"></div>
<div className="relative z-10">
<div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 text-secondary">
<iconify-icon icon="lucide:scissors" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium mb-3 tracking-tight text-white">
                Video Editing
              </h3>
<p className="text-sm text-white/60 font-light leading-relaxed mb-6">
                Cinematic storytelling, seamless transitions, and pacing that
                keeps viewers hooked.
              </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs font-medium text-white/40">
<iconify-icon className="text-secondary" icon="lucide:check-circle" width="14"></iconify-icon>
                  Narrative Flow
                </li>
<li className="flex items-center gap-2 text-xs font-medium text-white/40">
<iconify-icon className="text-secondary" icon="lucide:check-circle" width="14"></iconify-icon>
                  Sound Design
                </li>
</ul>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/30 shadow-[0_0_30px_rgba(192,38,211,0.1)] hover:shadow-glow hover:-translate-y-2 transition-all duration-500 interactable">
<div className="relative z-10">
<div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg">
<iconify-icon icon="lucide:wand-2" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium mb-3 tracking-tight text-white">
                VFX &amp; Motion
              </h3>
<p className="text-white/80 text-sm font-light leading-relaxed mb-6">
                High-end visual effects, compositing, and motion graphics that
                add production value.
              </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs font-medium text-white/80">
<iconify-icon className="text-white" icon="lucide:check-circle" width="14"></iconify-icon>
                  3D Composition
                </li>
<li className="flex items-center gap-2 text-xs font-medium text-white/80">
<iconify-icon className="text-white" icon="lucide:check-circle" width="14"></iconify-icon>
                  Rotoscoping
                </li>
</ul>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-surface border border-white/5 hover:border-tertiary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] hover:-translate-y-2 overflow-hidden interactable">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-tertiary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 ease-out"></div>
<div className="relative z-10">
<div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 text-tertiary">
<iconify-icon icon="lucide:palette" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium mb-3 tracking-tight text-white">
                Color Grading
              </h3>
<p className="text-sm text-white/60 font-light leading-relaxed mb-6">
                Professional color correction and grading to set the perfect
                mood and atmosphere.
              </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs font-medium text-white/40">
<iconify-icon className="text-tertiary" icon="lucide:check-circle" width="14"></iconify-icon>
                  Look Development
                </li>
<li className="flex items-center gap-2 text-xs font-medium text-white/40">
<iconify-icon className="text-tertiary" icon="lucide:check-circle" width="14"></iconify-icon>
                  Color Matching
                </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="work">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-12 text-white">
          Selected Works
        </h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-surface cursor-none border border-white/5 hover:border-secondary/30 transition-colors interactable">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-primary to-primary group-hover:scale-110 transition-transform duration-700"></div>
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transition-opacity z-20 absolute" icon="lucide:play" width="48"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-20">
<div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl">
<h3 className="text-xl font-medium text-white mb-1">
                  Video Editing
                </h3>
<p className="text-xs text-secondary uppercase tracking-widest font-semibold">
                  Post-Production
                </p>
</div>
</div>
</div>
<div className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-white/5 cursor-none md:mt-16 border border-white/5 hover:border-tertiary/30 transition-colors interactable">
<div className="absolute inset-0 flex items-center justify-center bg-black">
<div className="relative w-3/4 h-3/4 rounded-xl border border-white/10 flex items-center justify-center group-hover:rotate-1 transition-transform duration-500 bg-surface overflow-hidden">
<div className="absolute top-0 left-0 w-full h-8 bg-white/5 border-b border-white/5 flex items-center gap-2 px-4">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<div className="font-mono text-xs text-tertiary/60 p-6 pt-12 w-full select-none">
<div className="flex gap-2">
<span className="text-secondary">import</span>
<span className="text-white">Web</span>
</div>
<div className="flex gap-2 mt-2">
<span className="text-tertiary">return</span>
<span className="text-yellow-300">"Experience"</span>
                    ;
                  </div>
</div>
</div>
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transition-opacity z-20 absolute drop-shadow-lg" icon="lucide:external-link" width="48"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-20">
<div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl">
<h3 className="text-xl font-medium text-white mb-1">
                  Website Building
                </h3>
<p className="text-xs text-tertiary font-semibold uppercase tracking-widest">
                  Development
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 mb-12 relative" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="bg-surface backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-glass relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary/10 rounded-full blur-[80px] -ml-16 -mb-16 pointer-events-none"></div>
<div className="text-center mb-10 relative z-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">
              Start a Project
            </h2>
<p className="text-white/50 font-light">
              Tell us about your raw footage. We'll make it a masterpiece.
            </p>
</div>
<form className="space-y-6 relative z-10">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-white/40 ml-2">
                  Name
                </label>
<input className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-all text-sm text-white placeholder:text-white/20 interactable" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-white/40 ml-2">
                  Email
                </label>
<input className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-all text-sm text-white placeholder:text-white/20 interactable" placeholder="hello@editspace.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-white/40 ml-2">
                Service
              </label>
<div className="grid grid-cols-3 gap-3">
<label className="cursor-none interactable">
<input className="peer sr-only" name="service" type="radio"/>
<div className="text-center py-3 rounded-xl border border-white/10 bg-white/5 text-sm font-medium text-white/60 hover:bg-white/10 peer-checked:bg-secondary peer-checked:text-white peer-checked:border-secondary transition-all">
                    Editing
                  </div>
</label>
<label className="cursor-none interactable">
<input className="peer sr-only" name="service" type="radio"/>
<div className="text-center py-3 rounded-xl border border-white/10 bg-white/5 text-sm font-medium text-white/60 hover:bg-white/10 peer-checked:bg-secondary peer-checked:text-white peer-checked:border-secondary transition-all">
                    VFX
                  </div>
</label>
<label className="cursor-none interactable">
<input className="peer sr-only" name="service" type="radio"/>
<div className="text-center py-3 rounded-xl border border-white/10 bg-white/5 text-sm font-medium text-white/60 hover:bg-white/10 peer-checked:bg-secondary peer-checked:text-white peer-checked:border-secondary transition-all">
                    Color
                  </div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-white/40 ml-2">
                Message
              </label>
<textarea className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-all text-sm resize-none text-white placeholder:text-white/20 interactable" placeholder="Describe your project..." rows="4"></textarea>
</div>
<div className="space-y-4 pt-2">
<div className="flex justify-between items-center px-2">
<label className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  Budget Estimate
                </label>
<span className="text-sm font-medium text-secondary">
                  $1k - $5k
                </span>
</div>
<div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
<div className="absolute left-0 top-0 h-full bg-gradient-to-r from-secondary to-tertiary w-1/3 rounded-full"></div>
</div>
</div>
<button className="w-full bg-white text-primary font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300 mt-4 flex justify-center items-center gap-2 group interactable" type="button">
              Send Proposal
              <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="lucide:send" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</section>
<footer className="py-8 text-center text-white/20 text-xs font-medium uppercase tracking-widest border-t border-white/5">
      © 2023 EditSpace. All Rights Reserved.
    </footer>



    </>
  );
}
