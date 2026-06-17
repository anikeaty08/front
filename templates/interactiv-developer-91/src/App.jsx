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



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
glass: 'rgba(255, 255, 255, 0.05)',
'glass-border': 'rgba(255, 255, 255, 0.1)',
}
}
}
}



      // Initialize Icons
      lucide.createIcons();
      gsap.registerPlugin(ScrollTrigger);

      // --- 1. LOADING ANIMATION ---
      const initLoader = () => {
          const tl = gsap.timeline({
              onComplete: () => {
                  // Smoothly remove loader
                  gsap.to('#loader', { opacity: 0, duration: 0.5, onComplete: () => {
                      document.getElementById('loader').style.display = 'none';
                  }});
                  initHeroPhysics();
                  document.getElementById('navbar').classList.remove('opacity-0');
              }
          });

          // Animate Rect Fade Out
          tl.to("#loader-rect", {
              opacity: 0,
              duration: 1,
              ease: "power2.inOut"
          })
          // Move Text to Logo Position
          .to("#loader-text", {
              top: "1.5rem", // 24px
              left: "1.5rem", // 24px
              x: 0,
              y: 0,
              fontSize: "1.25rem", // text-xl
              fontWeight: 600,
              duration: 1.5,
              ease: "power3.inOut"
          }, "-=0.5");
      };

      // --- 2. HERO SECTION PHYSICS ---
      let engine, render, runner;

      const initHeroPhysics = () => {
          const container = document.getElementById('hero-canvas-container');
          const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint, Composite } = Matter;

          engine = Engine.create();
          engine.world.gravity.y = 0.5;

          render = Render.create({
              element: container,
              engine: engine,
              options: {
                  width: container.clientWidth,
                  height: container.clientHeight,
                  background: 'transparent',
                  wireframes: false,
                  pixelRatio: window.devicePixelRatio
              }
          });

          const ground = Bodies.rectangle(container.clientWidth/2, container.clientHeight + 30, container.clientWidth, 60, { isStatic: true, render: { visible: false } });
          const leftWall = Bodies.rectangle(-30, container.clientHeight/2, 60, container.clientHeight * 2, { isStatic: true, render: { visible: false } });
          const rightWall = Bodies.rectangle(container.clientWidth + 30, container.clientHeight/2, 60, container.clientHeight * 2, { isStatic: true, render: { visible: false } });

          World.add(engine.world, [ground, leftWall, rightWall]);

          const shapes = [];
          const colors = ['#27272a', '#3f3f46', '#52525b'];

          for(let i = 0; i < 25; i++) {
              const x = Math.random() * container.clientWidth;
              const y = Math.random() * -500 - 100;
              const w = 40 + Math.random() * 40;
              const h = 40 + Math.random() * 40;
              const color = colors[Math.floor(Math.random() * colors.length)];

              let body;
              if(Math.random() > 0.5) {
                   body = Bodies.rectangle(x, y, w, h, {
                      chamfer: { radius: 4 },
                      render: { fillStyle: color }
                  });
              } else {
                  body = Bodies.polygon(x, y, Math.floor(Math.random() * 3) + 3, w/2, {
                      render: { fillStyle: color }
                  });
              }
              shapes.push(body);
          }
          World.add(engine.world, shapes);

          // Mouse Interaction (Individual)
          const mouse = Mouse.create(render.canvas);
          const mouseConstraint = MouseConstraint.create(engine, {
              mouse: mouse,
              constraint: {
                  stiffness: 0.2,
                  render: { visible: false }
              }
          });
          World.add(engine.world, mouseConstraint);
          render.mouse = mouse;

          Render.run(render);
          runner = Runner.create();
          Runner.run(runner, engine);

          // Parallax on Scroll Only
          gsap.to(engine.world.gravity, {
              y: -0.5,
              scrollTrigger: {
                  trigger: "#hero",
                  start: "top top",
                  end: "bottom top",
                  scrub: true
              }
          });
      };

      // --- 3. SKILLS SECTION PHYSICS ---
      const initSkillsPhysics = () => {
          const container = document.getElementById('skills-container');
          const pills = document.querySelectorAll('.skill-pill');
          const { Engine, World, Bodies } = Matter;

          const engine = Engine.create();
          engine.world.gravity.y = 0;
          engine.world.gravity.x = 0;

          const width = container.clientWidth;
          const height = container.clientHeight;

          const wallOptions = { isStatic: true, restitution: 1, render: { visible: false } };
          const walls = [
              Bodies.rectangle(width/2, -25, width, 50, wallOptions),
              Bodies.rectangle(width/2, height+25, width, 50, wallOptions),
              Bodies.rectangle(width+25, height/2, 50, height, wallOptions),
              Bodies.rectangle(-25, height/2, 50, height, wallOptions)
          ];
          World.add(engine.world, walls);

          const pillBodies = [];
          pills.forEach((pill, i) => {
              const x = Math.random() * (width - 200) + 100;
              const y = Math.random() * (height - 100) + 50;
              const body = Bodies.rectangle(x, y, pill.offsetWidth, pill.offsetHeight, {
                  restitution: 0.9,
                  frictionAir: 0.02,
                  chamfer: { radius: 20 },
                  angle: (Math.random() - 0.5) * 0.5
              });
              pillBodies.push({ dom: pill, body: body });
              World.add(engine.world, body);
          });

          const runner = Matter.Runner.create();
          Matter.Runner.run(runner, engine);

          gsap.ticker.add(() => {
              pillBodies.forEach(item => {
                  const { x, y } = item.body.position;
                  const angle = item.body.angle;
                  item.dom.style.transform = `translate(${x - item.dom.offsetWidth/2}px, ${y - item.dom.offsetHeight/2}px) rotate(${angle}rad)`;
              });
          });

          let draggedBody = null;
          pills.forEach((pill, index) => {
              pill.addEventListener('mousedown', () => { draggedBody = pillBodies[index].body; });
          });
          window.addEventListener('mousemove', (e) => {
              if(!draggedBody) return;
              const rect = container.getBoundingClientRect();
              const mouseX = e.clientX - rect.left;
              const mouseY = e.clientY - rect.top;
              Matter.Body.translate(draggedBody, { x: (mouseX - draggedBody.position.x) * 0.2, y: (mouseY - draggedBody.position.y) * 0.2 });
              Matter.Body.setAngularVelocity(draggedBody, 0);
          });
          window.addEventListener('mouseup', () => { draggedBody = null; });
      };

      // --- 4. PROJECTS SECTION EFFECTS ---
      const initProjects = () => {
          const cards = document.querySelectorAll('.project-card');
          cards.forEach(card => {
              card.addEventListener('mousemove', (e) => {
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = ((y - centerY) / centerY) * -2;
                  const rotateY = ((x - centerX) / centerX) * 2;
                  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
              });
              card.addEventListener('mouseleave', () => {
                  card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
                  card.style.transition = 'transform 0.5s ease';
              });
              card.addEventListener('mouseenter', () => { card.style.transition = 'none'; });

              card.addEventListener('mouseenter', () => {
                  gsap.to("#displacementFilter feTurbulence", {
                      attr: { baseFrequency: "0.02" },
                      duration: 0.5,
                      yoyo: true,
                      repeat: 1
                  });
              });
          });
      };

      // --- 5. CONTACT ROPE ---
      const initContact = () => {
          gsap.fromTo("#rope-path",
              { strokeDasharray: 600, strokeDashoffset: 600 },
              {
                  strokeDashoffset: 100,
                  scrollTrigger: {
                      trigger: "#contact",
                      start: "top center",
                      end: "bottom bottom",
                      scrub: 1
                  },
                  onComplete: () => {
                      const buttons = document.querySelectorAll('.contact-btn');
                      document.getElementById('contact-options').style.pointerEvents = 'auto';
                      document.getElementById('contact-options').style.opacity = '1';
                      gsap.from(buttons, {
                          y: 50,
                          opacity: 0,
                          scale: 0,
                          stagger: 0.1,
                          duration: 0.6,
                          ease: "back.out(1.7)"
                      });
                  }
              }
          );
          document.getElementById('contact').addEventListener('mousemove', (e) => {
              const center = window.innerWidth / 2;
              const offset = (e.clientX - center) * 0.1;
              const path = document.getElementById('rope-path');
              gsap.to(path, {
                  attr: { d: `M100,0 C${100+offset},200 ${100-offset},400 100,600` },
                  duration: 1,
                  ease: "power2.out"
              });
          });
      };

      window.addEventListener('load', () => {
          initLoader();
          setTimeout(() => {
              initSkillsPhysics();
              initProjects();
              initContact();
          }, 1000);
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
      

<svg style={{position: 'absolute', width: '0', height: '0'}}>
<filter id="displacementFilter">
<feturbulence basefrequency="0.01" numoctaves="3" result="turbulence" type="turbulence"></feturbulence>
<fedisplacementmap in="SourceGraphic" in2="turbulence" scale="30" xchannelselector="R" ychannelselector="G"></fedisplacementmap>
</filter>
</svg>

<div className="fixed inset-0 z-50 block bg-zinc-950" id="loader">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="relative w-64 h-32">
<svg className="absolute inset-0 w-full h-full overflow-visible">
<rect fill="none" height="100%" id="loader-rect" stroke="white" strokeWidth="1" vector-effect="non-scaling-stroke" width="100%" x="0" y="0"></rect>
</svg>
</div>
</div>

<h1 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-light tracking-tight whitespace-nowrap z-50 text-white mix-blend-difference" id="loader-text">
        OLOLADE
      </h1>
</div>

<nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-start mix-blend-difference opacity-0" id="navbar">
<div className="w-20 h-10" id="logo-placeholder"></div>

<ul className="flex gap-6 text-sm font-medium tracking-wide">
<li>
<a className="hover:text-zinc-400 transition-colors" href="#about">
            About
          </a>
</li>
<li>
<a className="hover:text-zinc-400 transition-colors" href="#skills">
            Skills
          </a>
</li>
<li>
<a className="hover:text-zinc-400 transition-colors" href="#projects">
            Work
          </a>
</li>
<li>
<a className="hover:text-zinc-400 transition-colors" href="#contact">
            Contact
          </a>
</li>
</ul>
</nav>
<main className="relative w-full">

<section className="relative min-h-screen w-full grid grid-cols-1 md:grid-cols-2 pt-0 overflow-hidden" id="hero">

<div className="px-6 lg:pl-16 flex flex-col justify-center h-full order-2 md:order-1 relative z-10">
<div className="pointer-events-auto max-w-xl space-y-8">
<span className="inline-block py-1 px-3 border border-zinc-800 rounded-full text-xs text-zinc-400 font-medium tracking-wider uppercase bg-zinc-900/50 backdrop-blur-sm">
              Software Engineer
            </span>
<h2 className="text-5xl lg:text-7xl font-light tracking-tight leading-[1.1]">
              Building digital
              <br/>
<span className="text-zinc-500">experiences</span>
              that
              <br/>
              feel
              <span className="italic font-normal">alive.</span>
</h2>
<p className="text-lg lg:text-xl text-zinc-400 font-light leading-relaxed max-w-md">
              I craft high-performance web applications with a focus on motion,
              interaction, and clean architecture.
            </p>
</div>
</div>

<div className="relative h-[50vh] md:h-screen w-full order-1 md:order-2 bg-zinc-950" id="hero-canvas-container">

</div>
</section>

<section className="relative py-20 px-6 w-full overflow-hidden bg-zinc-950" id="skills">
<div className="max-w-7xl mx-auto mb-16">
<h3 className="text-3xl font-light tracking-tight mb-4">
            Technical Arsenal
          </h3>
<p className="text-zinc-400 text-lg">Drag to explore the stack.</p>
</div>

<div className="relative w-full h-[600px] border-y border-zinc-900 bg-zinc-900/20 overflow-hidden cursor-grab active:cursor-grabbing rounded-xl" id="skills-container">

<div className="skill-pill bg-zinc-100 text-zinc-950 px-8 py-4 rounded-full text-lg font-medium" data-label="React">
            React
          </div>
<div className="skill-pill border border-zinc-700 bg-zinc-900/50 backdrop-blur px-8 py-4 rounded-full text-lg font-light" data-label="TypeScript">
            TypeScript
          </div>
<div className="skill-pill border border-zinc-700 bg-zinc-900/50 backdrop-blur px-6 py-3 rounded-full text-lg font-light" data-label="Next.js">
            Next.js
          </div>
<div className="skill-pill bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-medium" data-label="Tailwind">
            Tailwind
          </div>
<div className="skill-pill border border-zinc-700 bg-zinc-900/50 backdrop-blur px-6 py-3 rounded-full text-lg font-light" data-label="Node.js">
            Node.js
          </div>
<div className="skill-pill bg-yellow-400 text-black px-7 py-4 rounded-full text-lg font-medium" data-label="JavaScript">
            JavaScript
          </div>
<div className="skill-pill border border-zinc-700 bg-zinc-900/50 backdrop-blur px-6 py-3 rounded-full text-lg font-light" data-label="Three.js">
            Three.js
          </div>
<div className="skill-pill border border-zinc-700 bg-zinc-900/50 backdrop-blur px-6 py-3 rounded-full text-lg font-light" data-label="GraphQL">
            GraphQL
          </div>
<div className="skill-pill bg-zinc-100 text-zinc-950 px-6 py-3 rounded-full text-lg font-medium" data-label="Go">
            Go
          </div>
<div className="skill-pill border border-zinc-700 bg-zinc-900/50 backdrop-blur px-8 py-4 rounded-full text-lg font-light" data-label="Python">
            Python
          </div>
<div className="skill-pill border border-zinc-700 bg-zinc-900/50 backdrop-blur px-6 py-3 rounded-full text-lg font-light" data-label="Postgres">
            Postgres
          </div>
<div className="skill-pill border border-zinc-700 bg-zinc-900/50 backdrop-blur px-6 py-3 rounded-full text-lg font-light" data-label="Docker">
            Docker
          </div>
</div>
</section>

<section className="relative py-32 w-full overflow-hidden" id="projects">
<div className="px-6 mb-12 flex items-baseline justify-between max-w-7xl mx-auto">
<h3 className="text-3xl font-light tracking-tight">Selected Work</h3>
<span className="text-zinc-500 text-sm hidden md:inline">
            Scroll horizontally →
          </span>
</div>

<div className="flex gap-8 px-6 pb-20 overflow-x-auto no-scrollbar snap-x snap-mandatory" id="projects-track">

<div className="project-card relative flex-shrink-0 w-[85vw] md:w-[700px] h-auto md:h-[400px] rounded-2xl bg-glass border border-glass-border overflow-hidden snap-center group flex flex-col md:flex-row">

<div className="h-64 md:h-full w-full md:w-1/2 overflow-hidden relative wave-container">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 wave-image" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp'}}></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
</div>

<div className="h-auto md:h-full w-full md:w-1/2 p-8 flex flex-col justify-between backdrop-blur-md bg-zinc-900/40">
<div>
<div className="flex justify-between items-start mb-2">
<h4 className="text-2xl font-light tracking-tight">
                    Finance Dashboard
                  </h4>
<div className="flex gap-2">
<a className="p-2 bg-white text-black rounded-full hover:scale-110 transition-transform" href="#">
<i data-lucide="arrow-up-right" width="18"></i>
</a>
<a className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors" href="#">
<i data-lucide="github" width="18"></i>
</a>
</div>
</div>
<p className="text-zinc-400 font-light text-sm line-clamp-3">
                  A comprehensive financial analytics platform providing
                  real-time data visualization and asset management tools.
                </p>
</div>
<div className="flex flex-wrap gap-2 mt-4">
<span className="px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 text-xs text-zinc-300">
                  Next.js
                </span>
<span className="px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 text-xs text-zinc-300">
                  Tailwind
                </span>
<span className="px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 text-xs text-zinc-300">
                  Stripe
                </span>
</div>
</div>
</div>

<div className="project-card relative flex-shrink-0 w-[85vw] md:w-[700px] h-auto md:h-[400px] rounded-2xl bg-glass border border-glass-border overflow-hidden snap-center group flex flex-col md:flex-row">
<div className="h-64 md:h-full w-full md:w-1/2 overflow-hidden relative wave-container">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 wave-image" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&amp'}}></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="h-auto md:h-full w-full md:w-1/2 p-8 flex flex-col justify-between backdrop-blur-md bg-zinc-900/40">
<div>
<div className="flex justify-between items-start mb-2">
<h4 className="text-2xl font-light tracking-tight">
                    Code Editor Pro
                  </h4>
<div className="flex gap-2">
<a className="p-2 bg-white text-black rounded-full hover:scale-110 transition-transform" href="#">
<i data-lucide="arrow-up-right" width="18"></i>
</a>
<a className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors" href="#">
<i data-lucide="github" width="18"></i>
</a>
</div>
</div>
<p className="text-zinc-400 font-light text-sm line-clamp-3">
                  Browser-based IDE with collaborative features, supporting
                  multiple languages and real-time compilation.
                </p>
</div>
<div className="flex flex-wrap gap-2 mt-4">
<span className="px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 text-xs text-zinc-300">
                  React
                </span>
<span className="px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 text-xs text-zinc-300">
                  WebAssembly
                </span>
<span className="px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 text-xs text-zinc-300">
                  Socket.io
                </span>
</div>
</div>
</div>

<div className="project-card relative flex-shrink-0 w-[85vw] md:w-[700px] h-auto md:h-[400px] rounded-2xl bg-glass border border-glass-border overflow-hidden snap-center group flex flex-col md:flex-row">
<div className="h-64 md:h-full w-full md:w-1/2 overflow-hidden relative wave-container">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 wave-image" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp'}}></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="h-auto md:h-full w-full md:w-1/2 p-8 flex flex-col justify-between backdrop-blur-md bg-zinc-900/40">
<div>
<div className="flex justify-between items-start mb-2">
<h4 className="text-2xl font-light tracking-tight">
                    Crypto Exchange
                  </h4>
<div className="flex gap-2">
<a className="p-2 bg-white text-black rounded-full hover:scale-110 transition-transform" href="#">
<i data-lucide="arrow-up-right" width="18"></i>
</a>
<a className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors" href="#">
<i data-lucide="github" width="18"></i>
</a>
</div>
</div>
<p className="text-zinc-400 font-light text-sm line-clamp-3">
                  Decentralized exchange interface featuring live charts, wallet
                  connection and secure swapping protocols.
                </p>
</div>
<div className="flex flex-wrap gap-2 mt-4">
<span className="px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 text-xs text-zinc-300">
                  Vue
                </span>
<span className="px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 text-xs text-zinc-300">
                  Ethers.js
                </span>
<span className="px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 text-xs text-zinc-300">
                  D3.js
                </span>
</div>
</div>
</div>
<div className="w-12 shrink-0"></div>
</div>
</section>

<section className="relative min-h-screen flex flex-col items-center justify-start pt-32 w-full overflow-hidden" id="contact">
<div className="text-center z-10">
<h2 className="text-6xl md:text-8xl font-light tracking-tighter leading-none mb-4">
            Hit me up
            <br/>
<span className="text-zinc-600">Let's create</span>
<span className="italic font-normal bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Magic
            </span>
</h2>
</div>

<div className="relative w-full flex-grow flex flex-col items-center justify-center">
<svg className="w-[200px] h-[600px] overflow-visible" id="rope-svg" viewbox="0 0 200 600">
<path d="M100,0 C100,100 100,200 100,300 C100,400 100,500 100,600" fill="none" id="rope-path" stroke="#52525b" strokeLinecap="round" strokeWidth="2"></path>
</svg>

<div className="absolute bottom-20 flex justify-center items-center gap-4 opacity-0 pointer-events-none" id="contact-options">
<a className="bg-zinc-100 text-zinc-950 px-6 py-3 rounded-full font-medium hover:scale-110 transition-transform contact-btn" href="#">
              Email
            </a>
<a className="bg-zinc-800 text-white px-6 py-3 rounded-full font-medium border border-zinc-700 hover:bg-zinc-700 transition-colors contact-btn" href="#">
              GitHub
            </a>
<a className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-500 transition-colors contact-btn" href="#">
              LinkedIn
            </a>
<a className="bg-black text-white px-6 py-3 rounded-full font-medium border border-zinc-800 hover:bg-zinc-900 transition-colors contact-btn" href="#">
              X.com
            </a>
</div>
</div>
<footer className="w-full py-8 text-center text-zinc-600 text-sm font-light border-t border-zinc-900/50 z-10 bg-zinc-950">
<p>© 2026 Ololade. Built with precision.</p>
</footer>
</section>
</main>



    </>
  );
}
