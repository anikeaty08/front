import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
paper: '#E8E4DD',
signal: '#E63B2E',
offwhite: '#F5F3EE',
graphite: '#111111'
},
fontFamily: {
sans: ['"Space Grotesk"', 'sans-serif'],
serif: ['"DM Serif Display"', 'serif'],
mono: ['"Space Mono"', 'monospace']
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // 1. Lenis Smooth Scroll Initialization
      const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
      function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      gsap.registerPlugin(ScrollTrigger);

      // 2. Custom Cursor Logic
      const cursor = document.getElementById('custom-cursor');
      let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
      let cursorX = mouseX, cursorY = mouseY;

      window.addEventListener('mousemove', (e) => {
          mouseX = e.clientX;
          mouseY = e.clientY;
      });

      gsap.ticker.add(() => {
          cursorX += (mouseX - cursorX) * 0.15;
          cursorY += (mouseY - cursorY) * 0.15;
          gsap.set(cursor, { x: cursorX, y: cursorY });
      });

      document.querySelectorAll('.hover-trigger, a, button, .toggle-ui').forEach(el => {
          el.addEventListener('mouseenter', () => cursor.classList.add('w-12', 'h-12', 'bg-paper'));
          el.addEventListener('mouseleave', () => cursor.classList.remove('w-12', 'h-12', 'bg-paper'));
      });

      // 3. Text Splitter Utility
      function splitText(selector) {
          document.querySelectorAll(selector).forEach(el => {
              const text = el.innerText;
              el.innerHTML = '';
              text.split(' ').forEach(word => {
                  const wordDiv = document.createElement('div');
                  wordDiv.className = 'inline-block overflow-hidden mr-[1.5vw] last:mr-0 align-top';
                  word.split('').forEach(char => {
                      const charSpan = document.createElement('span');
                      charSpan.className = 'char-span inline-block translate-y-[110%] opacity-0 rotate-[12deg]';
                      charSpan.innerHTML = char === ' ' ? '&nbsp;' : char;
                      wordDiv.appendChild(charSpan);
                  });
                  el.appendChild(wordDiv);
              });
          });
      }

      // 4. Hero Animations
      splitText('.split-target');

      const heroTl = gsap.timeline();
      heroTl.fromTo('.hero-image-wrapper',
          { clipPath: 'inset(100% 0 0 0)' },
          { clipPath: 'inset(0% 0 0 0)', duration: 1.6, ease: 'power3.out', delay: 0.2 }
      )
      .fromTo('.hero-image',
          { scale: 1.2 },
          { scale: 1, duration: 2, ease: 'power2.out' }, '-=1.6'
      )
      .to('.split-target .char-span',
          { y: '0%', rotation: 0, opacity: 1, duration: 1.2, stagger: 0.02, ease: 'power3.out' }, '-=1.2'
      );

      // Navbar vanish/reveal
      let lastScroll = 0;
      window.addEventListener('scroll', () => {
          const current = window.scrollY;
          if (current > lastScroll && current > 100) {
              gsap.to('#navbar', { y: '-150%', duration: 0.4, ease: 'power2.in' });
          } else {
              gsap.to('#navbar', { y: '0%', duration: 0.4, ease: 'power2.out' });
          }
          lastScroll = current;
      });

      // 5. Features Section
      gsap.fromTo('.feature-card',
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', scrollTrigger: {
              trigger: '#features', start: 'top 70%'
          }}
      );

      // Terminal Feed
      const feedWords = ['[INIT] Handshake established.', '[SYNC] Nodes aligned (8).', '[OK] Telemetry stream active.', 'Latency detected: 0.04ms', 'Routing optimized.'];
      const feedContainer = document.getElementById('terminal-feed');
      let feedStep = 0;
      setInterval(() => {
          if(feedStep >= feedWords.length) feedStep = 0;
          const div = document.createElement('div');
          div.innerText = feedWords[feedStep];
          feedContainer.prepend(div);
          feedStep++;
      }, 1200);

      // Scroll Counter
      ScrollTrigger.create({
          trigger: '#uptime-counter',
          start: 'top 85%',
          onEnter: () => {
              gsap.to({ val: 0 }, {
                  val: 99.9, duration: 2.5, ease: 'power4.out',
                  onUpdate: function() { document.getElementById('uptime-counter').innerText = this.targets()[0].val.toFixed(1); }
              });
              gsap.fromTo('.waveform-path',
                  { strokeDasharray: 200, strokeDashoffset: 200 },
                  { strokeDashoffset: 0, duration: 2, ease: 'power2.out' }
              );
          }
      });

      // 6. Philosophy
      splitText('.split-target-2');
      gsap.to('.parallax-bg', {
          y: '20%', ease: 'none',
          scrollTrigger: { trigger: '#philosophy', scrub: true }
      });

      ScrollTrigger.create({
          trigger: '#philosophy', start: 'top 60%',
          onEnter: () => {
              gsap.fromTo('.contrast-1', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 });
              gsap.to('.split-target-2 .char-span', { y: '0%', rotation: 0, opacity: 1, duration: 1, stagger: 0.02, ease: 'power3.out', delay: 0.3 });
          }
      });

      // 7. Protocol (Horizontal Scroll)
      const prContainer = document.querySelector('.pr-container');
      gsap.to(prContainer, {
          x: () => -(prContainer.scrollWidth - window.innerWidth) + "px",
          ease: "none",
          scrollTrigger: {
              trigger: "#protocol", pin: true, scrub: 1, end: () => "+=" + prContainer.scrollWidth
          }
      });

      // 8. Topology Animations
      gsap.fromTo('.topology-card',
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', scrollTrigger: {
              trigger: '#topology', start: 'top 70%'
          }}
      );

      // Custom Toggle UI Logic
      document.querySelectorAll('.toggle-ui').forEach(toggle => {
          let active = false;
          const statusText = toggle.closest('.topology-card').querySelector('.toggle-status');

          toggle.addEventListener('click', () => {
              active = !active;
              const knob = toggle.querySelector('.toggle-knob');
              if(active) {
                  gsap.to(knob, { x: 'calc(100% + 0.6vw)', backgroundColor: '#E63B2E', duration: 0.4, ease: 'back.out(1.5)' });
                  gsap.to(toggle, { backgroundColor: '#111111', duration: 0.4 });
                  if(statusText) statusText.innerText = "ENGAGED";
              } else {
                  gsap.to(knob, { x: 0, backgroundColor: '#E8E4DD', duration: 0.4, ease: 'back.out(1.5)' });
                  gsap.to(toggle, { backgroundColor: 'rgba(17, 17, 17, 0.1)', duration: 0.4 });
                  if(statusText) statusText.innerText = "STANDBY";
              }
          });
      });

      // 9. Parameters Accordion Animations
      gsap.fromTo('.parameter-row',
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: {
              trigger: '#parameters', start: 'top 65%'
          }}
      );

      // 10. Stacking Cards Refined
      const stackCards = gsap.utils.toArray('.stack-card');
      stackCards.forEach((card, i) => {
          if (i === stackCards.length - 1) return; // Skip last card
          gsap.to(card, {
              scale: 0.94 - (i * 0.02),
              filter: 'brightness(0.4)',
              transformOrigin: 'top center',
              ease: 'none',
              scrollTrigger: {
                  trigger: stackCards[i + 1],
                  start: 'top 85%',
                  end: 'top ' + (20 + i*5) + 'vh',
                  scrub: true
              }
          });
      });

      // NEW: Ecosystem Grid Animation
      gsap.fromTo('.eco-item',
          { y: 50, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.05, ease: 'back.out(1.5)', scrollTrigger: {
              trigger: '#ecosystem', start: 'top 80%'
          }}
      );

      // NEW: Data Stream Animation
      gsap.to('.stream-text', {
          y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: {
              trigger: '#data-stream', start: 'top 70%'
          }
      });

      // 11. Infinite Marquee Animation
      const marqueeContent = document.getElementById('marquee-content');
      const originalContent = marqueeContent.innerHTML;
      marqueeContent.innerHTML = originalContent + originalContent;

      gsap.to(marqueeContent, {
          xPercent: -50,
          ease: 'none',
          duration: 12,
          repeat: -1
      });

      // 12. Performance Matrix Animations
      gsap.fromTo('.matrix-item',
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out', scrollTrigger: {
              trigger: '#matrix-section', start: 'top 75%'
          }}
      );

      // SVG Line Animation in Matrix
      const pathLine = document.getElementById('animated-line');
      if(pathLine) {
          const length = pathLine.getTotalLength();
          gsap.set(pathLine, { strokeDasharray: length, strokeDashoffset: length });
          ScrollTrigger.create({
              trigger: '#matrix-section', start: 'top 50%',
              onEnter: () => {
                  gsap.to(pathLine, { strokeDashoffset: 0, duration: 2.5, ease: 'power3.inOut' });
                  gsap.to(['#path-point-1', '#path-point-2'], { opacity: 1, scale: 1.5, duration: 0.5, stagger: 1, delay: 0.5, ease: 'back.out(2)', yoyo: true, repeat: 1 });
                  gsap.to(['#path-point-1', '#path-point-2'], { opacity: 1, scale: 1, duration: 0.3, stagger: 1, delay: 1.5 });
              }
          });
      }

      // Circular Progress in Matrix
      ScrollTrigger.create({
          trigger: '#matrix-section', start: 'top 50%',
          onEnter: () => {
              // 283 is circumference, we want approx 82% filled
              gsap.to('#entropy-circle', { strokeDashoffset: 283 - (283 * 0.82), duration: 2.5, ease: 'power4.out' });
              gsap.to({ val: 0 }, {
                  val: 82, duration: 2.5, ease: 'power4.out',
                  onUpdate: function() { document.getElementById('entropy-value').innerText = Math.round(this.targets()[0].val); }
              });
          }
      });

      // 13. CTA Split Text
      splitText('.split-target-cta');
      ScrollTrigger.create({
          trigger: '#cta', start: 'top 75%',
          onEnter: () => {
              gsap.to('.split-target-cta .char-span', { y: '0%', rotation: 0, opacity: 1, duration: 1, stagger: 0.03, ease: 'power3.out' });
          }
      });

      // Magnetic Buttons
      document.querySelectorAll('.magnetic-btn').forEach(btn => {
          btn.addEventListener('mousemove', (e) => {
              const rect = btn.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              gsap.to(btn, { x: x * 0.4, y: y * 0.4, duration: 0.6, ease: 'power3.out' });
          });
          btn.addEventListener('mouseleave', () => {
              gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
          });
      });

      // Footer Back to Top
      document.querySelector('footer button').addEventListener('click', () => {
          lenis.scrollTo(0, { duration: 2, ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 z-50 opacity-[0.05] mix-blend-overlay">
<svg className="w-full h-full" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<filter id="noiseFilter">
<feturbulence basefrequency="0.85" numoctaves="3" stitchtiles="stitch" type="fractalNoise"></feturbulence>
</filter>
<rect filter="url(#noiseFilter)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="fixed top-0 left-0 w-5 h-5 bg-signal rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-[width,height] duration-300 ease-out will-change-transform" id="custom-cursor"></div>

<nav className="fixed top-[4vh] left-1/2 -translate-x-1/2 z-40 bg-offwhite/80 backdrop-blur-xl border border-graphite/10 rounded-[2rem] px-[1.5vw] py-[1vh] flex items-center justify-between gap-[4vw] hover-trigger" id="navbar">
<div className="font-sans font-medium tracking-tighter uppercase text-sm">
        Lumina
      </div>
<div className="hidden md:flex items-center gap-[2vw] font-mono text-xs text-graphite/60">
<a className="hover:text-signal transition-colors" href="#features">
          Telemetry
        </a>
<a className="hover:text-signal transition-colors" href="#philosophy">
          Doctrine
        </a>
<a className="hover:text-signal transition-colors" href="#protocol">
          Protocol
        </a>
<a className="hover:text-signal transition-colors" href="#topology">
          Topology
        </a>
</div>
<button className="relative overflow-hidden rounded-[1.5rem] bg-signal text-paper px-[1.5vw] py-[1vh] font-mono text-xs uppercase tracking-tight group hover:scale-[1.03] transition-transform duration-500 magnetic-btn">
<span className="absolute inset-0 bg-graphite translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></span>
<span className="relative z-10 group-hover:text-paper transition-colors duration-500">
          Initialize
        </span>
</button>
</nav>

<header className="h-[100dvh] flex flex-col justify-end pb-[10vh] px-[5vw] relative overflow-hidden" id="hero">
<div className="z-10 w-full max-w-[80vw]">
<h1 className="font-sans text-[9vw] leading-[0.85] tracking-tighter text-graphite font-medium uppercase split-target">
          Command the
        </h1>
<h1 className="font-serif text-[10vw] leading-[0.85] tracking-tighter text-signal italic split-target mt-[2vh]">
          Architecture.
        </h1>
</div>
<div className="absolute top-[20vh] right-[5vw] w-[45vw] h-[65vh] rounded-[3rem] overflow-hidden hero-image-wrapper z-0 hidden md:block border border-graphite/10">
<img alt="Brutalist concrete architecture" className="w-full h-full object-cover hero-image scale-[1.2] grayscale contrast-125 hover-trigger" src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-signal mix-blend-multiply opacity-20"></div>
</div>
<div className="absolute bottom-[5vh] right-[5vw] flex items-center gap-[1vw] font-mono text-xs text-graphite/40 uppercase tracking-tight">
<span>Scroll Sequence</span>
<iconify-icon className="text-lg animate-bounce" icon="solar:arrow-down-linear"></iconify-icon>
</div>
</header>

<section className="py-[15vh] px-[5vw] grid grid-cols-1 md:grid-cols-3 gap-[2vw] relative z-10" id="features">

<div className="bg-offwhite rounded-[3rem] p-[2.5vw] h-[50vh] flex flex-col justify-between group border border-graphite/10 hover-trigger feature-card">
<div className="flex justify-between items-start">
<span className="font-mono text-xs text-graphite/50 uppercase tracking-tight">
            01 // Telemetry
          </span>
<iconify-icon className="text-2xl text-signal" icon="solar:radar-linear"></iconify-icon>
</div>
<div className="font-mono text-xs text-graphite/80 space-y-1 h-[15vh] overflow-hidden opacity-70" id="terminal-feed">

</div>
<h3 className="font-sans text-[2vw] leading-none tracking-tighter font-medium text-graphite mt-[4vh]">
          Sub-millisecond
          <br/>
          telemetry
        </h3>
</div>

<div className="bg-offwhite rounded-[3rem] p-[2.5vw] h-[50vh] flex flex-col justify-between group border border-graphite/10 hover-trigger feature-card">
<div className="flex justify-between items-start">
<span className="font-mono text-xs text-graphite/50 uppercase tracking-tight">
            02 // Network
          </span>
<iconify-icon className="text-2xl text-signal" icon="solar:routing-2-linear"></iconify-icon>
</div>
<div className="flex-1 flex items-end mb-[2vh] relative">
<span className="font-sans text-[6vw] leading-none tracking-tighter font-medium text-graphite" id="uptime-counter">
            0
          </span>
<span className="font-mono text-sm text-signal mb-[1vh]">%</span>

<svg className="absolute bottom-[2vh] left-0 w-full h-[10vh] opacity-20" preserveaspectratio="none" viewbox="0 0 100 50">
<path className="waveform-path" d="M0,50 Q10,20 20,40 T40,10 T60,30 T80,5 T100,25" fill="none" stroke="#111111" strokeWidth="2"></path>
</svg>
</div>
<h3 className="font-sans text-[2vw] leading-none tracking-tighter font-medium text-graphite">
          Adaptive neural
          <br/>
          routing
        </h3>
</div>

<div className="bg-offwhite rounded-[3rem] p-[2.5vw] h-[50vh] flex flex-col justify-between relative overflow-hidden group border border-graphite/10 hover-trigger feature-card">
<div className="absolute top-0 left-0 w-full h-[2px] bg-signal shadow-[0_0_15px_rgba(230,59,46,0.8)] -translate-y-[10px] group-hover:translate-y-[50vh] transition-transform duration-[2s] ease-[cubic-bezier(0.87,0,0.13,1)] z-20"></div>
<div className="flex justify-between items-start relative z-10">
<span className="font-mono text-xs text-graphite/50 uppercase tracking-tight">
            03 // Security
          </span>
<iconify-icon className="text-2xl text-signal" icon="solar:shield-keyhole-minimalistic-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-offwhite/60 backdrop-blur-[8px] z-10 group-hover:backdrop-blur-none transition-all duration-[2s]"></div>
<div className="relative z-0 mt-auto">
<div className="font-mono text-xs text-signal mb-[2vh] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-500">
            [AUTH_VERIFIED]
          </div>
<h3 className="font-sans text-[2vw] leading-none tracking-tighter font-medium text-graphite">
            Zero-trust
            <br/>
            architecture
          </h3>
</div>
</div>
</section>

<section className="py-[20vh] px-[5vw] bg-graphite rounded-[3rem] mx-[2vw] my-[5vh] text-paper relative overflow-hidden" id="philosophy">
<div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1606768341670-659fecaf9a43?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center parallax-bg mix-blend-luminosity"></div>
<div className="relative z-10 max-w-[70vw] mx-auto text-center flex flex-col items-center">
<p className="font-mono text-xs text-paper/40 mb-[8vh] uppercase tracking-tight border border-paper/10 px-[1.5vw] py-[0.5vh] rounded-full">
          System Doctrine
        </p>
<p className="font-sans text-[2vw] text-paper/50 font-light mb-[4vh] tracking-tight contrast-1">
          Most networks accept passive transit limitations.
        </p>
<h2 className="font-serif text-[7vw] leading-[0.9] text-signal italic contrast-2 split-target-2">
          We orchestrate living algorithms.
        </h2>
</div>
</section>

<section className="h-screen w-full overflow-hidden bg-paper relative flex items-center pr-wrapper mt-[10vh]" id="protocol">
<div className="w-[300vw] flex h-full pr-container">
<div className="w-screen h-full flex flex-col justify-center px-[10vw] relative">
<span className="font-mono text-[15vw] text-graphite/[0.03] leading-none absolute top-[20vh] left-[5vw]">
            01
          </span>
<h3 className="font-sans text-[5vw] text-graphite font-medium tracking-tighter mt-[4vh] relative z-10">
            Ingest
          </h3>
<p className="font-mono text-sm text-graphite/60 mt-[2vh] max-w-sm relative z-10">
            Capture raw topological anomalies across distributed cloud nodes in
            real-time.
          </p>
</div>
<div className="w-screen h-full flex flex-col justify-center px-[10vw] relative">
<span className="font-mono text-[15vw] text-graphite/[0.03] leading-none absolute top-[20vh] left-[5vw]">
            02
          </span>
<h3 className="font-sans text-[5vw] text-graphite font-medium tracking-tighter mt-[4vh] relative z-10">
            Compute
          </h3>
<p className="font-mono text-sm text-graphite/60 mt-[2vh] max-w-sm relative z-10">
            Neural models map optimal latency paths via geometric routing
            protocols.
          </p>
</div>
<div className="w-screen h-full flex flex-col justify-center px-[10vw] relative">
<span className="font-mono text-[15vw] text-graphite/[0.03] leading-none absolute top-[20vh] left-[5vw]">
            03
          </span>
<h3 className="font-sans text-[5vw] text-graphite font-medium tracking-tighter mt-[4vh] relative z-10 text-signal">
            Execute
          </h3>
<p className="font-mono text-sm text-graphite/60 mt-[2vh] max-w-sm relative z-10">
            Deploy state changes instantly, enforced by zero-trust cryptographic
            validation.
          </p>
</div>
</div>
</section>

<section className="py-[15vh] px-[5vw] relative z-10" id="topology">
<div className="mb-[8vh] flex flex-col md:flex-row md:items-end justify-between gap-[4vh]">
<div>
<span className="font-mono text-xs text-graphite/50 uppercase tracking-tight">
            System Topology
          </span>
<h2 className="font-sans text-[6vw] tracking-tighter text-graphite font-medium leading-none mt-[2vh]">
            Global
            <span className="font-serif text-signal italic">Matrix.</span>
</h2>
</div>
<p className="font-mono text-xs text-graphite/60 max-w-sm">
          Distributed infrastructure spanning 42 regions. Optimized for
          zero-packet-loss state synchronization.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-[2vw]">

<div className="md:col-span-2 md:row-span-2 bg-offwhite rounded-[3rem] p-[3vw] flex flex-col justify-between group border border-graphite/10 hover-trigger topology-card overflow-hidden relative min-h-[50vh]">
<div className="flex justify-between items-start relative z-10">
<span className="font-mono text-xs text-graphite/50 uppercase tracking-tight">
              04 // Node Distribution
            </span>
<iconify-icon className="text-2xl text-signal" icon="solar:global-linear"></iconify-icon>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none mt-[4vh]">
<div className="w-[120%] h-[120%] md:w-[80%] md:h-[120%] border-[1px] border-graphite/20 rounded-full absolute animate-[spin_60s_linear_infinite]"></div>
<div className="w-[80%] h-[80%] md:w-[60%] md:h-[90%] border-[1px] border-graphite/20 rounded-full absolute animate-[spin_40s_linear_infinite_reverse] border-dashed"></div>
<div className="w-[40%] h-[40%] md:w-[30%] md:h-[45%] border-[1px] border-graphite/20 rounded-full absolute animate-[spin_20s_linear_infinite]"></div>
<div className="absolute w-[0.5vw] h-[0.5vw] min-w-[6px] min-h-[6px] bg-signal rounded-full top-[30%] left-[40%] shadow-[0_0_10px_#E63B2E]"></div>
<div className="absolute w-[0.4vw] h-[0.4vw] min-w-[5px] min-h-[5px] bg-signal rounded-full top-[60%] left-[70%] shadow-[0_0_10px_#E63B2E]"></div>
<div className="absolute w-[0.6vw] h-[0.6vw] min-w-[8px] min-h-[8px] bg-signal rounded-full top-[50%] left-[20%] shadow-[0_0_10px_#E63B2E]"></div>
</div>
<h3 className="font-sans text-[2vw] leading-none tracking-tighter font-medium text-graphite mt-[30vh] relative z-10">
            Decentralized
            <br/>
            consensus
          </h3>
</div>

<div className="bg-offwhite rounded-[3rem] p-[2.5vw] flex flex-col justify-between group border border-graphite/10 hover-trigger topology-card aspect-square md:aspect-auto">
<div className="flex justify-between items-start">
<span className="font-mono text-xs text-graphite/50 uppercase tracking-tight">
              05 // Cryptography
            </span>
<iconify-icon className="text-2xl text-graphite/50 group-hover:text-signal transition-colors" icon="solar:lock-password-linear"></iconify-icon>
</div>
<div className="flex items-center justify-center flex-1 py-[4vh]">

<div className="w-[6vw] h-[3vw] min-w-[3.5rem] min-h-[1.75rem] bg-graphite/10 rounded-full relative p-[0.3vw] cursor-pointer flex items-center toggle-ui">
<div className="w-[2.4vw] h-[2.4vw] min-w-[1.4rem] min-h-[1.4rem] bg-paper rounded-full shadow-sm transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] toggle-knob"></div>
</div>
</div>
<div className="flex flex-col md:flex-row md:justify-between md:items-end gap-[1vh]">
<h3 className="font-sans text-[1.5vw] min-text-lg leading-tight tracking-tighter font-medium text-graphite">
              Quantum
              <br/>
              Resist
            </h3>
<span className="font-mono text-xs text-signal opacity-0 group-hover:opacity-100 transition-opacity toggle-status">
              STANDBY
            </span>
</div>
</div>

<div className="bg-offwhite rounded-[3rem] p-[2.5vw] flex flex-col justify-between group border border-graphite/10 hover-trigger topology-card aspect-square md:aspect-auto">
<div className="flex justify-between items-start">
<span className="font-mono text-xs text-graphite/50 uppercase tracking-tight">
              06 // Bandwidth
            </span>
<iconify-icon className="text-2xl text-graphite/50 group-hover:text-signal transition-colors" icon="solar:server-square-linear"></iconify-icon>
</div>
<div className="flex flex-col justify-center flex-1 gap-[2vh] py-[4vh]">

<div className="w-full h-[2px] bg-graphite/10 relative rounded-full">
<div className="absolute top-0 left-0 h-full w-[75%] bg-signal rounded-full"></div>
<div className="absolute top-1/2 left-[75%] w-[1.2vw] h-[1.2vw] min-w-[0.8rem] min-h-[0.8rem] bg-paper border-[2px] border-signal rounded-full -translate-y-1/2 -translate-x-1/2 shadow-sm cursor-ew-resize hover:scale-125 transition-transform"></div>
</div>
<div className="flex justify-between font-mono text-xs text-graphite/40 uppercase">
<span>Min</span>
<span className="text-signal">75 TB/s</span>
<span>Max</span>
</div>
</div>
<h3 className="font-sans text-[1.5vw] min-text-lg leading-tight tracking-tighter font-medium text-graphite">
            Dynamic
            <br/>
            Allocation
          </h3>
</div>

<div className="md:col-span-2 bg-offwhite rounded-[3rem] p-[2.5vw] flex flex-col justify-between group border border-graphite/10 hover-trigger topology-card min-h-[25vh]">
<div className="flex justify-between items-start mb-[4vh]">
<span className="font-mono text-xs text-graphite/50 uppercase tracking-tight">
              07 // Diagnostics
            </span>
<iconify-icon className="text-2xl text-signal" icon="solar:pulse-2-linear"></iconify-icon>
</div>
<div className="flex items-end justify-between">
<div>
<h3 className="font-sans text-[2vw] leading-none tracking-tighter font-medium text-graphite mb-[1vh]">
                System Intact
              </h3>
<p className="font-mono text-xs text-graphite/50">
                All operational heuristics nominal.
              </p>
</div>
<div className="flex items-end gap-[0.5vw] h-[6vh]">

<div className="w-[0.8vw] min-w-[0.4rem] bg-graphite/10 h-[30%] rounded-t-sm group-hover:h-[60%] transition-all duration-300"></div>
<div className="w-[0.8vw] min-w-[0.4rem] bg-graphite/10 h-[50%] rounded-t-sm group-hover:h-[40%] transition-all duration-300 delay-75"></div>
<div className="w-[0.8vw] min-w-[0.4rem] bg-graphite/10 h-[80%] rounded-t-sm group-hover:h-[90%] transition-all duration-300 delay-150"></div>
<div className="w-[0.8vw] min-w-[0.4rem] bg-signal h-[40%] rounded-t-sm group-hover:h-[100%] transition-all duration-300 delay-200 shadow-[0_0_10px_#E63B2E]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[15vh] px-[5vw] relative z-10 bg-graphite rounded-[3rem] mx-[2vw] my-[5vh] text-paper overflow-hidden" id="parameters">
<div className="absolute inset-0 opacity-[0.03] bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
<div className="relative z-10 max-w-[80vw] mx-auto">
<div className="mb-[10vh]">
<span className="font-mono text-xs text-paper/40 uppercase tracking-tight border border-paper/10 px-[1.5vw] py-[0.5vh] rounded-full">
            Deployment Logic
          </span>
</div>
<div className="flex flex-col border-t border-paper/10">

<div className="py-[5vh] border-b border-paper/10 flex flex-col md:flex-row md:items-center justify-between gap-[4vh] group hover-trigger cursor-none parameter-row">
<h3 className="font-sans text-[4vw] font-medium tracking-tighter text-paper/60 group-hover:text-signal transition-colors duration-500">
              Heuristic Routing
            </h3>
<div className="md:w-[40%] flex justify-between items-center gap-[2vw]">
<p className="font-mono text-xs text-paper/40 group-hover:text-paper/80 transition-colors duration-500 md:max-w-[20vw]">
                Algorithms anticipate bottlenecks before they manifest,
                redirecting packets dynamically.
              </p>
<iconify-icon className="text-3xl text-paper/20 group-hover:text-signal group-hover:rotate-45 transition-all duration-500" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="py-[5vh] border-b border-paper/10 flex flex-col md:flex-row md:items-center justify-between gap-[4vh] group hover-trigger cursor-none parameter-row">
<h3 className="font-sans text-[4vw] font-medium tracking-tighter text-paper/60 group-hover:text-signal transition-colors duration-500">
              State Reconciliation
            </h3>
<div className="md:w-[40%] flex justify-between items-center gap-[2vw]">
<p className="font-mono text-xs text-paper/40 group-hover:text-paper/80 transition-colors duration-500 md:max-w-[20vw]">
                Nodes continuously vote on topological truth, achieving
                consensus in under 4ms.
              </p>
<iconify-icon className="text-3xl text-paper/20 group-hover:text-signal group-hover:rotate-45 transition-all duration-500" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="py-[5vh] border-b border-paper/10 flex flex-col md:flex-row md:items-center justify-between gap-[4vh] group hover-trigger cursor-none parameter-row">
<h3 className="font-sans text-[4vw] font-medium tracking-tighter text-paper/60 group-hover:text-signal transition-colors duration-500">
              Syntactic Analysis
            </h3>
<div className="md:w-[40%] flex justify-between items-center gap-[2vw]">
<p className="font-mono text-xs text-paper/40 group-hover:text-paper/80 transition-colors duration-500 md:max-w-[20vw]">
                Deep packet inspection at the edge. Zero-trust validation on
                every topological frame.
              </p>
<iconify-icon className="text-3xl text-paper/20 group-hover:text-signal group-hover:rotate-45 transition-all duration-500" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-[5vw] py-[15vh] min-h-[200vh]" id="stacking-cards-section">
<div className="mb-[8vh] relative z-20">
<span className="font-mono text-xs text-graphite/50 uppercase tracking-tight">
          System Layers
        </span>
<h2 className="font-sans text-[6vw] tracking-tighter text-graphite font-medium leading-none mt-[2vh]">
          Stack
          <span className="font-serif text-signal italic">Architecture.</span>
</h2>
</div>
<div className="relative w-full" id="cards-wrapper">

<div className="sticky top-[15vh] w-full h-[70vh] bg-offwhite rounded-[3rem] border border-graphite/10 p-[4vw] flex flex-col justify-between stack-card stack-shadow overflow-hidden group">
<div className="absolute right-[-10%] top-[-10%] w-[50vw] h-[50vw] bg-graphite/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-signal/10 transition-colors duration-700"></div>
<div className="flex justify-between items-start relative z-10">
<span className="font-mono text-xs text-graphite/50 uppercase tracking-tight">
              Layer 01
            </span>
<iconify-icon className="text-3xl text-signal" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="font-sans text-[4vw] tracking-tighter font-medium text-graphite leading-none">
              Physical Mesh
            </h3>
<p className="font-mono text-sm text-graphite/60 mt-[2vh] max-w-md">
              Hardened data centers operating below ambient temperatures. Zero
              physical access points. Redundant backbone connectivity spanning
              ocean floors.
            </p>
</div>
</div>

<div className="sticky top-[20vh] w-full h-[70vh] bg-[#2A2A2A] rounded-[3rem] border border-graphite/20 p-[4vw] flex flex-col justify-between stack-card text-paper stack-shadow overflow-hidden group">
<div className="absolute right-[-10%] top-[-10%] w-[50vw] h-[50vw] bg-paper/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-signal/20 transition-colors duration-700"></div>
<div className="flex justify-between items-start relative z-10">
<span className="font-mono text-xs text-paper/50 uppercase tracking-tight">
              Layer 02
            </span>
<iconify-icon className="text-3xl text-signal" icon="solar:cpu-linear"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="font-sans text-[4vw] tracking-tighter font-medium text-paper leading-none">
              Neural Core
            </h3>
<p className="font-mono text-sm text-paper/60 mt-[2vh] max-w-md">
              Liquid-state routing algorithms predictive modeling. Foreseeing
              topological shifts and rerouting payload fragments before
              congestion manifests in reality.
            </p>
</div>
</div>

<div className="sticky top-[25vh] w-full h-[70vh] bg-graphite rounded-[3rem] border border-graphite/40 p-[4vw] flex flex-col justify-between stack-card text-paper stack-shadow overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
<div className="flex justify-between items-start relative z-10">
<span className="font-mono text-xs text-paper/50 uppercase tracking-tight">
              Layer 03
            </span>
<iconify-icon className="text-3xl text-paper" icon="solar:code-circle-linear"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="font-sans text-[4vw] tracking-tighter font-medium text-paper leading-none">
              Logic Fabric
            </h3>
<p className="font-mono text-sm text-paper/60 mt-[2vh] max-w-md">
              Turing-complete smart contracts deployed instantly at the edge.
              Trustless execution verified across millions of concurrent nodes
              in micro-seconds.
            </p>
</div>
</div>
</div>
</section>

<section className="py-[10vh] overflow-hidden relative z-10 bg-signal text-paper flex items-center hover-trigger group" id="marquee-section">

<div className="absolute inset-0 bg-graphite translate-y-full group-hover:translate-y-0 transition-transform duration-[1.5s] ease-[cubic-bezier(0.87,0,0.13,1)] z-0"></div>
<div className="marquee-container relative z-10 pointer-events-none" id="marquee-content">

<div className="flex items-center gap-[4vw] px-[2vw] whitespace-nowrap">
<h2 className="font-serif text-[12vw] leading-none italic tracking-tighter group-hover:text-paper transition-colors duration-700">
            ZERO LATENCY
          </h2>
<span className="font-sans text-[6vw] font-medium not-italic opacity-30 group-hover:text-signal group-hover:opacity-100 transition-colors duration-700">
            //
          </span>
<h2 className="font-serif text-[12vw] leading-none italic tracking-tighter group-hover:text-paper transition-colors duration-700">
            INFINITE SCALE
          </h2>
<span className="font-sans text-[6vw] font-medium not-italic opacity-30 group-hover:text-signal group-hover:opacity-100 transition-colors duration-700">
            //
          </span>
<h2 className="font-serif text-[12vw] leading-none italic tracking-tighter group-hover:text-paper transition-colors duration-700">
            QUANTUM SECURE
          </h2>
<span className="font-sans text-[6vw] font-medium not-italic opacity-30 group-hover:text-signal group-hover:opacity-100 transition-colors duration-700">
            //
          </span>
</div>
</div>
</section>

<section className="py-[15vh] px-[5vw] relative z-10" id="matrix-section">
<div className="mb-[8vh]">
<span className="font-mono text-xs text-graphite/50 uppercase tracking-tight">
          Live Telemetry
        </span>
<h2 className="font-sans text-[6vw] tracking-tighter text-graphite font-medium leading-none mt-[2vh]">
          Performance
          <span className="font-serif text-signal italic">Matrix.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-[2vw]">

<div className="md:col-span-2 bg-offwhite rounded-[3rem] p-[3vw] h-[60vh] flex flex-col justify-between border border-graphite/10 matrix-item overflow-hidden relative group hover-trigger">
<div className="flex justify-between items-start relative z-10">
<span className="font-mono text-xs text-graphite/50 uppercase tracking-tight">
              Flux Capacitance
            </span>
<iconify-icon className="text-2xl text-signal" icon="solar:chart-square-linear"></iconify-icon>
</div>

<div className="absolute inset-0 flex items-end justify-center pointer-events-none p-[2vw] mt-[5vh]">
<svg className="w-full h-[80%] overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">

<line stroke="#111111" stroke-opacity="0.05" strokeWidth="0.5" x1="0" x2="100" y1="20" y2="20"></line>
<line stroke="#111111" stroke-opacity="0.05" strokeWidth="0.5" x1="0" x2="100" y1="50" y2="50"></line>
<line stroke="#111111" stroke-opacity="0.05" strokeWidth="0.5" x1="0" x2="100" y1="80" y2="80"></line>

<path className="opacity-20" d="M0,100 C20,80 30,90 50,50 C70,10 80,40 100,0" fill="none" stroke="#111111" stroke-dasharray="2 4" strokeWidth="0.5"></path>

<path d="M0,100 C20,80 30,90 50,50 C70,10 80,40 100,0" fill="none" id="animated-line" stroke="#E63B2E" strokeWidth="1.5"></path>

<circle className="opacity-0 shadow-lg" cx="50" cy="50" fill="#E63B2E" id="path-point-1" r="1.5"></circle>
<circle className="opacity-0 shadow-lg" cx="100" cy="0" fill="#E63B2E" id="path-point-2" r="1.5"></circle>
</svg>
</div>
<div className="relative z-10 mt-auto flex justify-between items-end">
<h3 className="font-sans text-[3vw] tracking-tighter font-medium text-graphite leading-none">
              Non-linear
              <br/>
              Throughput
            </h3>
<div className="text-right">
<span className="block font-mono text-[1.5vw] text-signal opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                PEAK
              </span>
<span className="block font-mono text-xs text-graphite/40">
                1.21 GW/s
              </span>
</div>
</div>
</div>

<div className="bg-offwhite rounded-[3rem] p-[3vw] h-[60vh] flex flex-col justify-between border border-graphite/10 matrix-item group hover-trigger">
<div className="flex justify-between items-start">
<span className="font-mono text-xs text-graphite/50 uppercase tracking-tight">
              Entropy Level
            </span>
<iconify-icon className="text-2xl text-graphite/50 group-hover:text-signal transition-colors duration-500" icon="solar:pie-chart-2-linear"></iconify-icon>
</div>
<div className="flex items-center justify-center flex-1 relative my-[4vh]">
<svg className="w-[15vw] h-[15vw] min-w-[150px] min-h-[150px] -rotate-90 group-hover:scale-110 transition-transform duration-700 ease-out" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="#111111" stroke-opacity="0.1" strokeWidth="1"></circle>
<circle cx="50" cy="50" fill="none" id="entropy-circle" r="45" stroke="#E63B2E" stroke-dasharray="283" stroke-dashoffset="283" strokeLinecap="round" strokeWidth="2"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="font-sans text-[4vw] tracking-tighter font-medium text-graphite leading-none" id="entropy-value">
                0
              </span>
<span className="font-mono text-xs text-signal tracking-tight mt-[1vh]">
                dB/s
              </span>
</div>
</div>
<div>
<h3 className="font-sans text-[2vw] tracking-tighter font-medium text-graphite leading-none">
              Quantum
              <br/>
              Noise
            </h3>
</div>
</div>
</div>
</section>


<section className="h-[60vh] flex flex-col justify-center px-[5vw] relative z-10 overflow-hidden bg-graphite text-paper mx-[2vw] rounded-[3rem] my-[5vh]" id="data-stream">
<div className="absolute inset-0 opacity-20 pointer-events-none">
<div className="w-[1px] h-[200%] bg-gradient-to-b from-transparent via-signal to-transparent absolute left-[20%] animate-[slideDown_3s_linear_infinite]"></div>
<div className="w-[1px] h-[200%] bg-gradient-to-b from-transparent via-signal to-transparent absolute left-[50%] animate-[slideDown_4s_linear_infinite_0.5s]"></div>
<div className="w-[1px] h-[200%] bg-gradient-to-b from-transparent via-signal to-transparent absolute left-[80%] animate-[slideDown_2.5s_linear_infinite_1s]"></div>
</div>
<div className="relative z-10 text-center">
<h2 className="font-sans text-[4vw] font-medium tracking-tighter uppercase leading-none stream-text opacity-0 translate-y-10">
          Synchronizing Nodes
        </h2>
<div className="font-mono text-sm text-signal mt-[2vh] stream-text opacity-0 translate-y-10">
          0x8F9A ... ESTABLISHED
        </div>
</div>
</section>

<section className="py-[15vh] px-[5vw] relative z-10 bg-offwhite rounded-[3rem] mx-[2vw] my-[5vh] border border-graphite/10" id="ecosystem">
<div className="mb-[8vh] text-center max-w-[50vw] mx-auto">
<span className="font-mono text-xs text-graphite/50 uppercase tracking-tight">
          Ecosystem
        </span>
<h2 className="font-sans text-[5vw] tracking-tighter text-graphite font-medium leading-none mt-[2vh]">
          Universal
          <span className="font-serif text-signal italic">Handshake.</span>
</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-graphite/10 border border-graphite/10 rounded-[2rem] overflow-hidden">
<div className="bg-offwhite p-[4vw] flex items-center justify-center group hover-trigger eco-item">
<iconify-icon className="text-4xl text-graphite/40 group-hover:text-signal group-hover:scale-110 transition-all duration-500" icon="solar:figma-linear"></iconify-icon>
</div>
<div className="bg-offwhite p-[4vw] flex items-center justify-center group hover-trigger eco-item">
<iconify-icon className="text-4xl text-graphite/40 group-hover:text-signal group-hover:scale-110 transition-all duration-500" icon="solar:code-square-linear"></iconify-icon>
</div>
<div className="bg-offwhite p-[4vw] flex items-center justify-center group hover-trigger eco-item">
<iconify-icon className="text-4xl text-graphite/40 group-hover:text-signal group-hover:scale-110 transition-all duration-500" icon="solar:database-linear"></iconify-icon>
</div>
<div className="bg-offwhite p-[4vw] flex items-center justify-center group hover-trigger eco-item">
<iconify-icon className="text-4xl text-graphite/40 group-hover:text-signal group-hover:scale-110 transition-all duration-500" icon="solar:server-minimalistic-linear"></iconify-icon>
</div>
<div className="bg-offwhite p-[4vw] flex items-center justify-center group hover-trigger eco-item">
<iconify-icon className="text-4xl text-graphite/40 group-hover:text-signal group-hover:scale-110 transition-all duration-500" icon="solar:cloud-check-linear"></iconify-icon>
</div>
<div className="bg-offwhite p-[4vw] flex items-center justify-center group hover-trigger eco-item">
<iconify-icon className="text-4xl text-graphite/40 group-hover:text-signal group-hover:scale-110 transition-all duration-500" icon="solar:shield-network-linear"></iconify-icon>
</div>
<div className="bg-offwhite p-[4vw] flex items-center justify-center group hover-trigger eco-item">
<iconify-icon className="text-4xl text-graphite/40 group-hover:text-signal group-hover:scale-110 transition-all duration-500" icon="solar:tuning-square-2-linear"></iconify-icon>
</div>
<div className="bg-offwhite p-[4vw] flex items-center justify-center group hover-trigger eco-item">
<iconify-icon className="text-4xl text-graphite/40 group-hover:text-signal group-hover:scale-110 transition-all duration-500" icon="solar:widget-add-linear"></iconify-icon>
</div>
</div>
</section>
<section className="py-[20vh] px-[5vw] relative z-10 flex flex-col items-center justify-center text-center overflow-hidden" id="cta">
<h2 className="font-serif text-[8vw] leading-[0.9] text-graphite italic mb-[8vh] split-target-cta">
        Ready to override.
      </h2>
<button className="relative overflow-hidden rounded-[2rem] bg-graphite text-paper px-[3vw] py-[2vh] min-w-[200px] font-mono text-xs uppercase tracking-tight group hover:scale-[1.05] transition-transform duration-500 magnetic-btn flex items-center justify-center gap-[1vw]">
<span className="absolute inset-0 bg-signal translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></span>
<span className="relative z-10 group-hover:text-paper transition-colors duration-500 flex items-center gap-[1vw]">
          Deploy Architecture
          <iconify-icon className="text-lg" icon="solar:rocket-linear"></iconify-icon>
</span>
</button>
</section>

<footer className="bg-graphite text-paper rounded-t-[4rem] mt-[5vh] pt-[15vh] pb-[5vh] px-[5vw] relative overflow-hidden">
<div className="absolute inset-0 opacity-5 pointer-events-none">
<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E8E4DD" strokeWidth="1"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-[10vw] relative z-10">
<div>
<h2 className="font-sans text-[6vw] font-medium tracking-tighter uppercase leading-none text-paper">
            Lumina
          </h2>
<p className="font-mono text-xs text-paper/40 mt-[3vh] max-w-xs">
            Quantum-aligned ambient intelligence. Engineering the brutalist
            backbone of tomorrow.
          </p>
</div>
<div className="flex flex-col md:flex-row gap-[8vw] mt-[4vh] md:mt-0">
<ul className="space-y-[2vh] font-mono text-xs text-paper/60">
<li>
<a className="hover:text-signal transition-colors hover-trigger" href="#">
                Platform Architecture
              </a>
</li>
<li>
<a className="hover:text-signal transition-colors hover-trigger" href="#">
                API Documentation
              </a>
</li>
<li>
<a className="hover:text-signal transition-colors hover-trigger" href="#">
                Enterprise Deployment
              </a>
</li>
</ul>
<ul className="space-y-[2vh] font-mono text-xs text-paper/60">
<li>
<a className="hover:text-signal transition-colors hover-trigger" href="#">
                Security Policy
              </a>
</li>
<li>
<a className="hover:text-signal transition-colors hover-trigger" href="#">
                Terms of Service
              </a>
</li>
<li>
<a className="hover:text-signal transition-colors hover-trigger" href="#">
                Network Status
              </a>
</li>
</ul>
</div>
</div>
<div className="mt-[20vh] flex justify-between items-end border-t border-paper/10 pt-[5vh] relative z-10">
<div className="flex items-center gap-[1vw]">
<div className="w-[8px] h-[8px] rounded-full bg-green-500 animate-pulse"></div>
<span className="font-mono text-xs text-paper/50 uppercase tracking-tight">
            System Operational
          </span>
</div>
<button className="font-mono text-xs uppercase tracking-tight text-signal hover:text-paper transition-colors duration-300 hover-trigger">
          [ Back to Top ]
        </button>
</div>
</footer>


    </>
  );
}
