import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = { theme: { extend: { colors: { primary: '#0f0f0f', secondary: '#555555', accent: '#EB3A14', 'off-white': '#FAFAFA' }, fontFamily: { sans: ['Geist', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'] } } } }



      // Initialize Icons
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Initialize Lenis Scrolling
      const lenis = new Lenis({
          duration: 0.7, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical', smoothWheel: true, touchMultiplier: 2,
      });
      function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);

      // GSAP Animations
      gsap.registerPlugin(ScrollTrigger);

      // Loader Sequence
      const loaderTimeline = gsap.timeline();
      loaderTimeline.to("#loader-progress", {
          width: "100%", duration: 1.2, ease: "power2.inOut",
          onUpdate: function() { document.getElementById("loader-text").innerText = Math.round(this.progress() * 100) + "%"; }
      })
      .to("#loader", { yPercent: -100, duration: 0.6, ease: "power4.inOut", delay: 0.1 })

      // Hero Reveal
      .to(".hero-glow", { opacity: 1, duration: 1.5, ease: "power2.out" }, "-=0.5")
      .to(".hero-char", {
          opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, stagger: 0.1, ease: "power3.out"
      }, "-=1.0")
      .to(".hero-fade-in", {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out"
      }, "-=0.8");

      // Portfolio Item Reveal
      document.querySelectorAll(".project-row").forEach(row => {
          gsap.from(row.children, {
              scrollTrigger: { trigger: row, start: "top 80%", toggleActions: "play none none reverse" },
              y: 60, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out"
          });
      });

      // Cursor Logic (Desktop)
      if (window.matchMedia("(pointer: fine)").matches) {
          const cursorDot = document.querySelector('.cursor-dot');
          const cursorCircle = document.querySelector('.cursor-circle');
          let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

          document.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; gsap.to(cursorDot, { x: mouseX, y: mouseY, duration: 0 }); });
          gsap.ticker.add(() => {
              cursorX += (mouseX - cursorX) * 0.2; cursorY += (mouseY - cursorY) * 0.2;
              cursorCircle.style.left = cursorX + 'px'; cursorCircle.style.top = cursorY + 'px';
          });
          document.querySelectorAll('a, button, .magnetic-btn, .project-img-container').forEach(el => {
              el.addEventListener('mouseenter', () => document.body.classList.add('hover-active'));
              el.addEventListener('mouseleave', () => document.body.classList.remove('hover-active'));
          });
      }

      // Magnetic Buttons
      document.querySelectorAll('.magnetic-btn').forEach(btn => {
          btn.addEventListener('mousemove', (e) => {
              const rect = btn.getBoundingClientRect();
              gsap.to(btn, { x: (e.clientX - rect.left - rect.width / 2) * 0.2, y: (e.clientY - rect.top - rect.height / 2) * 0.2, duration: 0.2 });
          });
          btn.addEventListener('mouseleave', () => gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" }));
      });

      // Canvas
      const canvas = document.getElementById('hero-canvas');
      const ctx = canvas.getContext('2d');
      let width, height, particles = [];
      function resizeCanvas() { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; }
      window.addEventListener('resize', resizeCanvas); resizeCanvas();
      class Particle {
          constructor() { this.x = Math.random() * width; this.y = Math.random() * height; this.vx = (Math.random() - 0.5) * 0.3; this.vy = (Math.random() - 0.5) * 0.3; this.size = Math.random() * 1.5; }
          update() { this.x += this.vx; this.y += this.vy; if(this.x < 0) this.x = width; if(this.x > width) this.x = 0; if(this.y < 0) this.y = height; if(this.y > height) this.y = 0; }
          draw() { ctx.fillStyle = '#cccccc'; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); ctx.fill(); }
      }
      for(let i=0; i<40; i++) particles.push(new Particle());
      function animateCanvas() {
          ctx.clearRect(0,0,width,height); ctx.strokeStyle = 'rgba(0,0,0,0.04)'; ctx.lineWidth = 1;
          for(let i=0; i<particles.length; i++) {
              for(let j=i; j<particles.length; j++) {
                  const d = Math.sqrt((particles[i].x-particles[j].x)**2 + (particles[i].y-particles[j].y)**2);
                  if(d<100) { ctx.beginPath(); ctx.moveTo(particles[i].x,particles[i].y); ctx.lineTo(particles[j].x,particles[j].y); ctx.stroke(); }
              }
              particles[i].update(); particles[i].draw();
          }
          requestAnimationFrame(animateCanvas);
      }
      animateCanvas();

      // AI Terminal Interaction
      const aiInput = document.getElementById('ai-input');
      const termOut = document.getElementById('terminal-output');
      async function handleCommand(cmd) {
          termOut.innerHTML += `<div><span class="text-blue-400">➜</span> <span class="text-gray-300">${cmd}</span></div>`;
          const loadId = 'l-'+Date.now(); termOut.innerHTML += `<div id="${loadId}" class="text-gray-500 italic text-xs">Processing request...</div>`;
          termOut.scrollTop = termOut.scrollHeight; await new Promise(r => setTimeout(r, 600)); document.getElementById(loadId).remove();
          let resp = "Command not recognized. Type 'help'.";
          const lCmd = cmd.toLowerCase();
          if(lCmd.includes('help')) resp = "Available commands: 'list projects', 'stack', 'contact', 'status'.";
          else if(lCmd.includes('stack')) resp = "Tech Stack: Vue.js, React, Node.js, Python, AWS, Docker.";
          else if(lCmd.includes('project')) resp = "Loaded 4 projects. Scroll up to view details.";
          else if(lCmd.includes('contact')) resp = "Email: hello@vijuit.com";
          termOut.innerHTML += `<div class="text-gray-200 border-l-2 border-accent pl-3 py-1">${resp}</div>`; termOut.scrollTop = termOut.scrollHeight;
      }
      aiInput.addEventListener('keydown', e => { if(e.key==='Enter'&&aiInput.value.trim()) { handleCommand(aiInput.value); aiInput.value=''; } });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-overlay"></div>

<div className="loader" id="loader">
<div className="flex flex-col items-center gap-4">
<div className="font-mono text-6xl md:text-8xl font-bold tracking-tighter" id="loader-text">0%</div>
<div className="w-32 h-[1px] bg-gray-800 relative overflow-hidden">
<div className="absolute inset-0 bg-accent w-0" id="loader-progress"></div>
</div>
</div>
</div>

<div className="cursor-dot"></div>
<div className="cursor-circle"></div>

<nav className="fixed top-0 left-0 w-full px-4 md:px-6 py-5 flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none">
<a className="uppercase hover:text-accent transition-colors pointer-events-auto text-sm font-semibold tracking-widest font-mono" href="#">
        VijuIT
      </a>
<div className="flex items-center gap-4 md:gap-10 pointer-events-auto">
<div className="hidden md:flex bg-white/10 border-white/10 border rounded-full pt-2 pr-6 pb-2 pl-6 backdrop-blur-md gap-x-8">
<a className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors" href="#portfolio">Portfolio</a>
<a className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors" href="#about">Services</a>
</div>
<a className="bg-white text-black px-5 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors duration-200 magnetic-btn shadow-lg" href="#contact">
          Contact
        </a>
</div>
</nav>

<section className="min-h-[90vh] flex flex-col pt-32 pb-20 px-4 md:px-6 relative items-center justify-center overflow-hidden">

<canvas className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" id="hero-canvas"></canvas>

<div className="hero-glow animate-pulse-slow"></div>
<div className="flex flex-col text-center w-full max-w-[1800px] z-10 relative items-center">

<div className="mb-8 md:mb-12 flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/20 shadow-sm opacity-0 hero-fade-in">
<div className="flex gap-1 h-3 items-center">
<span className="w-1 h-full bg-accent rounded-full animate-[pulse_1s_ease-in-out_infinite]"></span>
<span className="w-1 h-2/3 bg-accent rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"></span>
</div>
<span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-primary font-medium">
            Portfolio Showcase 2025
          </span>
</div>

<h1 className="text-[13vw] md:text-[10vw] leading-[0.85] text-primary uppercase flex flex-col items-center font-bold tracking-tighter mix-blend-darken select-none z-20 relative">
<div className="overflow-hidden">
<span className="hero-char">Selected</span>
</div>
<div className="overflow-hidden">
<span className="hero-char text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary to-accent">Works</span>
</div>
</h1>

<div className="mt-8 md:mt-12 max-w-xl mx-auto opacity-0 hero-fade-in">
<p className="text-secondary leading-relaxed text-balance text-lg md:text-2xl font-medium max-w-2xl mt-8 tracking-tight">
            A curated selection of digital products, engineered with precision and designed with passion by VijuIT.
          </p>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 hero-fade-in animate-bounce">
<svg className="w-5 h-5 text-secondary/50" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="m19 12-7 7-7-7"></path>
</svg>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-4 md:px-6 max-w-[1600px] mx-auto" id="portfolio">
<div className="flex flex-col gap-24 md:gap-40">

<div className="project-row grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
<div className="project-img-container aspect-[4/3] w-full relative group cursor-none">
<div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Bookydays" className="project-img w-full h-full object-cover" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&amp;w=2813&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest border border-black/5">
               Featured Case
             </div>
</div>
<div className="flex flex-col justify-center">
<span className="project-number text-8xl md:text-9xl font-bold font-mono block leading-none mb-6 select-none opacity-20">01</span>
<div className="flex items-center gap-3 mb-4">
<span className="w-2 h-2 bg-accent rounded-full"></span>
<span className="font-mono text-xs uppercase tracking-widest text-secondary">Wellness / SaaS Platform</span>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-primary">Bookydays.cy</h2>
<p className="text-secondary text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              A comprehensive booking engine tailored for the wellness industry. We architected a high-availability scheduling system handling thousands of concurrent appointments.
            </p>
<div className="flex flex-wrap gap-3 mb-10">
<span className="px-3 py-1.5 bg-white border border-black/10 rounded-lg text-xs font-mono text-secondary">Vue.js</span>
<span className="px-3 py-1.5 bg-white border border-black/10 rounded-lg text-xs font-mono text-secondary">Node.js</span>
<span className="px-3 py-1.5 bg-white border border-black/10 rounded-lg text-xs font-mono text-secondary">AWS</span>
</div>
<a className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs border-b border-primary/20 pb-1 hover:border-accent hover:text-accent transition-all w-max group" href="#">
              View Case Study
              <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="project-row grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

<div className="flex flex-col justify-center order-2 md:order-1">
<span className="project-number text-8xl md:text-9xl font-bold font-mono block leading-none mb-6 select-none opacity-20">02</span>
<div className="flex items-center gap-3 mb-4">
<span className="w-2 h-2 bg-blue-500 rounded-full"></span>
<span className="font-mono text-xs uppercase tracking-widest text-secondary">Fintech / Dashboard</span>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-primary">Agensa Core</h2>
<p className="text-secondary text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Advanced property and financial asset management dashboard. Featuring real-time data visualization and a custom CRM backend for enterprise agents.
            </p>
<div className="flex flex-wrap gap-3 mb-10">
<span className="px-3 py-1.5 bg-white border border-black/10 rounded-lg text-xs font-mono text-secondary">React</span>
<span className="px-3 py-1.5 bg-white border border-black/10 rounded-lg text-xs font-mono text-secondary">TypeScript</span>
<span className="px-3 py-1.5 bg-white border border-black/10 rounded-lg text-xs font-mono text-secondary">D3.js</span>
</div>
<a className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs border-b border-primary/20 pb-1 hover:border-blue-500 hover:text-blue-500 transition-all w-max group" href="#">
              View Case Study
              <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="project-img-container aspect-[4/3] w-full relative group cursor-none order-1 md:order-2">
<div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Agensa" className="project-img w-full h-full object-cover" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2426&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="project-row grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
<div className="project-img-container aspect-[4/3] w-full relative group cursor-none">
<div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="E-Commerce" className="project-img w-full h-full object-cover" src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&amp;w=2370&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center">
<span className="project-number text-8xl md:text-9xl font-bold font-mono block leading-none mb-6 select-none opacity-20">03</span>
<div className="flex items-center gap-3 mb-4">
<span className="w-2 h-2 bg-green-500 rounded-full"></span>
<span className="font-mono text-xs uppercase tracking-widest text-secondary">E-Commerce / Mobile</span>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-primary">Lumina Shop</h2>
<p className="text-secondary text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              A headless Shopify implementation focusing on sub-second load times and mobile-first UX. Increased conversion rates by 40% post-launch.
            </p>
<div className="flex flex-wrap gap-3 mb-10">
<span className="px-3 py-1.5 bg-white border border-black/10 rounded-lg text-xs font-mono text-secondary">Next.js</span>
<span className="px-3 py-1.5 bg-white border border-black/10 rounded-lg text-xs font-mono text-secondary">Shopify API</span>
<span className="px-3 py-1.5 bg-white border border-black/10 rounded-lg text-xs font-mono text-secondary">Vercel</span>
</div>
<a className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs border-b border-primary/20 pb-1 hover:border-green-500 hover:text-green-500 transition-all w-max group" href="#">
              View Case Study
              <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="project-row grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
<div className="flex flex-col justify-center order-2 md:order-1">
<span className="project-number text-8xl md:text-9xl font-bold font-mono block leading-none mb-6 select-none opacity-20">04</span>
<div className="flex items-center gap-3 mb-4">
<span className="w-2 h-2 bg-purple-500 rounded-full"></span>
<span className="font-mono text-xs uppercase tracking-widest text-secondary">AI / Experimental</span>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-primary">Viju Bot</h2>
<p className="text-secondary text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              An internal R&amp;D project exploring Large Language Models for automated customer support. Integrated directly into Slack and Discord environments.
            </p>
<div className="flex flex-wrap gap-3 mb-10">
<span className="px-3 py-1.5 bg-white border border-black/10 rounded-lg text-xs font-mono text-secondary">Python</span>
<span className="px-3 py-1.5 bg-white border border-black/10 rounded-lg text-xs font-mono text-secondary">OpenAI</span>
<span className="px-3 py-1.5 bg-white border border-black/10 rounded-lg text-xs font-mono text-secondary">Pinecone</span>
</div>
<a className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs border-b border-primary/20 pb-1 hover:border-purple-500 hover:text-purple-500 transition-all w-max group" href="#">
              View Case Study
              <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="project-img-container aspect-[4/3] w-full relative group cursor-none order-1 md:order-2">
<div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="AI Project" className="project-img w-full h-full object-cover" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=2565&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] text-gray-300 py-20 md:py-32 px-4 md:px-6 relative overflow-hidden" id="about">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20"></div>
<div className="max-w-[1000px] mx-auto relative z-10">
<div className="text-center mb-10 md:mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
<span className="font-mono text-[10px] uppercase tracking-widest text-white">System Online</span>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4">Have questions about our stack?</h2>
<p className="text-gray-400 max-w-md mx-auto font-light text-sm md:text-base">
            Ask our automated assistant about technical capabilities, availability, or pricing models.
          </p>
</div>
<div className="w-full bg-[#0F0F0F] border border-white/10 rounded-lg shadow-2xl overflow-hidden flex flex-col">
<div className="bg-[#151515] px-4 py-3 flex items-center gap-4 border-b border-white/5 shrink-0">
<div className="flex gap-1.5 md:gap-2">
<div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex-1 text-center font-mono text-[10px] md:text-xs text-gray-500">viju-cli — bash — 80x24</div>
</div>
<div className="p-4 md:p-6 font-mono text-xs md:text-base h-[300px] flex flex-col bg-black/50 backdrop-blur-sm">
<div className="space-y-3 md:space-y-4 mb-2 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent" id="terminal-output">
<div className="text-green-400/90">
<span className="text-accent">➜</span> ~ Initializing Portfolio Protocol...<br/>
<span className="text-accent">➜</span> ~ Type "help" for commands.
              </div>
</div>
<div className="flex items-center gap-2 md:gap-3 pt-3 border-t border-white/10 shrink-0">
<span className="text-accent">➜</span>
<span className="text-blue-400">~</span>
<input autocomplete="off" className="bg-transparent border-none outline-none text-white w-full placeholder-gray-700 focus:placeholder-gray-600" id="ai-input" placeholder="Type a command..." spellcheck="false" type="text"/>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 md:px-6 py-20 md:py-32 bg-[#050505] text-white border-t border-white/10" id="contact">
<div className="max-w-[1400px] mx-auto text-center">
<p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-accent mb-6">Start A Project</p>
<h2 className="text-5xl md:text-8xl font-semibold tracking-tighter uppercase leading-[0.9] mb-8">Ready to Build?</h2>
<a className="inline-flex items-center gap-4 text-xl md:text-2xl font-light tracking-tight hover:text-accent transition-colors group mb-12" href="mailto:hello@vijuit.com">
<span className="border-b border-white/20 group-hover:border-accent pb-2">hello@vijuit.com</span>
</a>
<div className="flex justify-center gap-4">
<a className="px-8 py-4 bg-white text-black rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all magnetic-btn" href="#">Get a Quote</a>
</div>
<div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">© 2025 VijuIT. All rights reserved.</p>
<button className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors" onclick="lenis.scrollTo(0)">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>
</div>
</div>
</section>


    </>
  );
}
