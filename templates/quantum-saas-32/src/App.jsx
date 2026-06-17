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



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


    (function(){
      const wrap = document.querySelector('[data-constellation-wrap]');
      if(!wrap) return;

      const canvas = wrap.querySelector('[data-constellation-canvas]');
      const ctx = canvas.getContext('2d');

      const chips = Array.from(wrap.querySelectorAll('[data-node]'));
      const shards = Array.from(document.querySelectorAll('.shard-card[data-shard]'));

      // Active state
      let active = 0;

      function setActive(i){
        active = i;
        shards.forEach(s=>{
          const isActive = Number(s.getAttribute('data-shard')) === i;
          s.classList.toggle('is-active', isActive);
          if(!isActive) s.classList.add('opacity-70');
          else s.classList.remove('opacity-70');
        });
      }
      setActive(0);

      // Canvas "Signal Constellation" animation
      let w = 0, h = 0, dpr = 1;
      let mouse = { x: 0.5, y: 0.5 };

      // Node anchor points (relative positions)
      const nodes = [
        { x: 0.18, y: 0.72 },
        { x: 0.54, y: 0.62 },
        { x: 0.82, y: 0.78 },
        { x: 0.30, y: 0.42 },
        { x: 0.70, y: 0.35 },
      ];

      function resize(){
        const r = wrap.getBoundingClientRect();
        dpr = Math.min(2, window.devicePixelRatio || 1);
        w = Math.max(1, Math.floor(r.width * dpr));
        h = Math.max(1, Math.floor(r.height * dpr));
        canvas.width = w;
        canvas.height = h;
        canvas.style.width = r.width + "px";
        canvas.style.height = r.height + "px";
      }
      window.addEventListener('resize', resize);
      resize();

      wrap.addEventListener('mousemove', (e)=>{
        const r = wrap.getBoundingClientRect();
        mouse.x = (e.clientX - r.left) / Math.max(1, r.width);
        mouse.y = (e.clientY - r.top) / Math.max(1, r.height);
      });

      // Chips control active shard + "burst" in constellation
      let burst = 0;
      chips.forEach(btn=>{
        btn.addEventListener('mouseenter', ()=>{
          const i = Number(btn.getAttribute('data-node'));
          setActive(i);
          burst = 1.0;
        });
        btn.addEventListener('click', ()=>{
          const i = Number(btn.getAttribute('data-node'));
          setActive(i);
          burst = 1.0;
        });
      });

      function draw(t){
        const time = t * 0.001;
        burst *= 0.92;

        ctx.clearRect(0,0,w,h);

        // Background faint scanlines
        ctx.globalAlpha = 0.10;
        ctx.fillStyle = "#00e5ff";
        for(let y=0;y<h;y+=Math.floor(18*dpr)){
          ctx.fillRect(0,y,w,1);
        }
        ctx.globalAlpha = 1;

        // Convert nodes to pixels + subtle orbit
        const px = nodes.map((n,idx)=>{
          const wobble = 0.012 * Math.sin(time*1.3 + idx*1.7);
          const wobble2 = 0.012 * Math.cos(time*1.0 + idx*1.1);
          const mx = (mouse.x - 0.5) * 0.10;
          const my = (mouse.y - 0.5) * 0.10;
          return {
            x: (n.x + wobble + mx) * w,
            y: (n.y + wobble2 + my) * h
          };
        });

        // Draw connections with animated traveling "pulse"
        function line(a,b,intensity){
          const ax = a.x, ay = a.y, bx = b.x, by = b.y;

          // base line
          ctx.lineWidth = 1.2 * dpr;
          ctx.strokeStyle = "rgba(255,255,255,0.10)";
          ctx.beginPath();
          ctx.moveTo(ax,ay);
          ctx.lineTo(bx,by);
          ctx.stroke();

          // traveling pulse
          const p = (time*0.35 + intensity) % 1;
          const x = ax + (bx-ax)*p;
          const y = ay + (by-ay)*p;

          const g = ctx.createRadialGradient(x,y,0, x,y, 22*dpr);
          g.addColorStop(0, "rgba(0,229,255,0.35)");
          g.addColorStop(1, "rgba(0,229,255,0)");

          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(x,y, 22*dpr, 0, Math.PI*2);
          ctx.fill();
        }

        line(px[3], px[0], 0.12 + active*0.07);
        line(px[3], px[1], 0.28 + active*0.07);
        line(px[1], px[4], 0.42 + active*0.07);
        line(px[4], px[2], 0.66 + active*0.07);

        // Nodes
        px.forEach((p,idx)=>{
          const isHot = (idx === active) || (idx === active+3); // slight bias toward active cluster
          const r = (isHot ? 5.2 : 4.2) * dpr;

          // outer glow
          const glow = ctx.createRadialGradient(p.x,p.y,0, p.x,p.y, 34*dpr);
          glow.addColorStop(0, `rgba(0,229,255,${0.22 + (isHot?0.10:0) + burst*0.12})`);
          glow.addColorStop(1, "rgba(0,229,255,0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(p.x,p.y, 34*dpr, 0, Math.PI*2);
          ctx.fill();

          // core
          ctx.fillStyle = `rgba(0,229,255,${0.55 + (isHot?0.18:0)})`;
          ctx.beginPath();
          ctx.arc(p.x,p.y, r, 0, Math.PI*2);
          ctx.fill();
        });

        requestAnimationFrame(draw);
      }
      requestAnimationFrame(draw);
    })();
  


      /* ==========================================================================
         EXISTING WEBGL LOGIC (STRICTLY UNTOUCHED)
         ========================================================================== */
      const container = document.getElementById('webgl-container');
      const scene = new THREE.Scene();

      const bgColor = 0x09090b;
      scene.background = new THREE.Color(bgColor);
      scene.fog = new THREE.FogExp2(bgColor, 0.025);

      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 0, 15);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      container.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0x222233, 1.5);
      scene.add(ambientLight);

      const tealLight = new THREE.PointLight(0x00e5ff, 5, 50);
      tealLight.position.set(10, 15, 10);
      scene.add(tealLight);

      const violetLight = new THREE.PointLight(0xb388ff, 4, 50);
      violetLight.position.set(-10, -15, 10);
      scene.add(violetLight);

      const backLight = new THREE.PointLight(0xffffff, 2, 60);
      backLight.position.set(0, 0, -20);
      scene.add(backLight);

      const shardMaterial = new THREE.MeshPhysicalMaterial({
          color: 0xffffff,
          metalness: 0.1,
          roughness: 0.15,
          transmission: 0.95,
          ior: 1.5,
          thickness: 2.5,
          transparent: true,
          opacity: 1.0,
          side: THREE.DoubleSide
      });

      const geometries =[
          new THREE.TetrahedronGeometry(1, 0),
          new THREE.OctahedronGeometry(1, 0),
          new THREE.IcosahedronGeometry(1, 0)
      ];

      geometries.forEach(geo => {
          geo.scale(1, 2.5 + Math.random() * 1.5, 1);
      });

      const shards =[];
      const shardCount = 60;

      for (let i = 0; i < shardCount; i++) {
          const geo = geometries[Math.floor(Math.random() * geometries.length)];
          const mesh = new THREE.Mesh(geo, shardMaterial);

          mesh.position.x = (Math.random() - 0.5) * 40;
          mesh.position.y = (Math.random() - 0.5) * 40;
          mesh.position.z = (Math.random() - 0.5) * 30 - 5;

          mesh.rotation.x = Math.random() * Math.PI;
          mesh.rotation.y = Math.random() * Math.PI;
          mesh.rotation.z = Math.random() * Math.PI;

          const scale = Math.random() * 0.8 + 0.2;
          mesh.scale.set(scale, scale, scale);

          mesh.userData = {
              rx: (Math.random() - 0.5) * 0.002,
              ry: (Math.random() - 0.5) * 0.002,
              rz: (Math.random() - 0.5) * 0.002,
              dy: (Math.random() - 0.5) * 0.005 + 0.002,
              originalY: mesh.position.y
          };

          scene.add(mesh);
          shards.push(mesh);
      }

      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;
      let scrollY = 0;

      const baseCameraZ = 15;
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;

      document.addEventListener('mousemove', (event) => {
          mouseX = (event.clientX - windowHalfX) / windowHalfX;
          mouseY = (event.clientY - windowHalfY) / windowHalfY;
      });

      window.addEventListener('scroll', () => {
          scrollY = window.scrollY;
      });

      window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
      });

      const clock = new THREE.Clock();

      function animate() {
          requestAnimationFrame(animate);

          const elapsedTime = clock.getElapsedTime();

          shards.forEach(shard => {
              shard.rotation.x += shard.userData.rx;
              shard.rotation.y += shard.userData.ry;
              shard.rotation.z += shard.userData.rz;
              shard.position.y += Math.sin(elapsedTime * 0.5 + shard.userData.originalY) * 0.005;
          });

          targetX = mouseX * 2;
          targetY = -(mouseY * 2) + (scrollY * 0.015);

          camera.position.x += (targetX - camera.position.x) * 0.02;
          camera.position.y += (targetY - camera.position.y) * 0.02;

          camera.lookAt(camera.position.x * 0.5, camera.position.y * 0.5, 0);

          renderer.render(scene, camera);
      }

      animate();

      /* ==========================================================================
         NEW UI INTERACTIONS LOGIC
         ========================================================================== */
      document.addEventListener("DOMContentLoaded", () => {

          // 1. Header Scroll Logic
          const header = document.getElementById('main-header');
          window.addEventListener('scroll', () => {
              if (window.scrollY > 50) {
                  header.classList.add('scrolled');
              } else {
                  header.classList.remove('scrolled');
              }
          });

          // 2. Mobile Menu Toggle
          const menuToggle = document.getElementById('menu-toggle');
          const mobileMenu = document.getElementById('mobile-menu');
          const mobileLinks = document.querySelectorAll('.mobile-link');

          menuToggle.addEventListener('click', () => {
              mobileMenu.classList.toggle('open');
          });

          mobileLinks.forEach(link => {
              link.addEventListener('click', () => {
                  mobileMenu.classList.remove('open');
              });
          });

          // 3. Scroll Reveal Observer
          const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
          const observer = new IntersectionObserver((entries, obs) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('visible');
                      obs.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

          // 4. Use Cases Tabs
          const tabBtns = document.querySelectorAll('.tab-btn');
          const panelContents = document.querySelectorAll('.panel-content');

          tabBtns.forEach(btn => {
              btn.addEventListener('click', () => {
                  // Remove active from all
                  tabBtns.forEach(b => b.classList.remove('active'));
                  panelContents.forEach(p => p.classList.remove('active'));

                  // Add active to clicked
                  btn.classList.add('active');
                  const targetId = btn.getAttribute('data-target');
                  document.getElementById(targetId).classList.add('active');
              });
          });

          // 5. Pricing Toggle
          const pricingToggle = document.getElementById('pricing-toggle');
          const priceElements = document.querySelectorAll('.price');
          const lblMonthly = document.getElementById('lbl-monthly');
          const lblYearly = document.getElementById('lbl-yearly');

          pricingToggle.addEventListener('change', (e) => {
              const isYearly = e.target.checked;

              if(isYearly) {
                  lblYearly.classList.add('active');
                  lblMonthly.classList.remove('active');
              } else {
                  lblMonthly.classList.add('active');
                  lblYearly.classList.remove('active');
              }

              priceElements.forEach(el => {
                  if (el.innerText !== "Custom") {
                      // animate the number change subtly
                      el.style.opacity = 0;
                      setTimeout(() => {
                          el.innerText = isYearly ? el.getAttribute('data-yearly') : el.getAttribute('data-monthly');
                          el.style.opacity = 1;
                      }, 200);
                  }
              });
          });

          // 6. FAQ Accordion
          const faqItems = document.querySelectorAll('.faq-item');

          faqItems.forEach(item => {
              item.addEventListener('click', () => {
                  const isOpen = item.classList.contains('open');

                  // Close all
                  faqItems.forEach(faq => {
                      faq.classList.remove('open');
                      faq.querySelector('.faq-answer').style.maxHeight = null;
                  });

                  // If wasn't open, open it
                  if (!isOpen) {
                      item.classList.add('open');
                      const answer = item.querySelector('.faq-answer');
                      answer.style.maxHeight = answer.scrollHeight + "px";
                  }
              });
          });
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="0bj47BRhqOMrgLlpMNC0"></div>

</div>
</div>

<div className="" id="webgl-container"></div>

<div className="bg-overlay"></div>


<nav className="mobile-menu" id="mobile-menu">
<a className="mobile-link" href="#how-it-works">Work</a>
<a className="mobile-link" href="#solution">Solution</a>
<a className="mobile-link" href="#use-cases">Use Cases</a>
<a className="mobile-link" href="#testimonials">Testimonials</a>
<a className="mobile-link" href="#pricing">Pricing</a>
<a className="mobile-link" href="#faq">FAQ</a>
<div style={{height: '1px', background: 'rgba(255,255,255,0.1)', margin: '10px 0'}}></div>
<a href="#" style={{color: '#a1a1aa'}}>Log in</a>
<a href="#" style={{color: '#00e5ff'}}>Get started</a>
</nav>

<main className="hero">
<h1 className="">The Geometry of Infinite Scale</h1>
<p className="subtext">
    Experience crystalline data infrastructure. Secure, infinitely scalable,
    and engineered with absolute precision for the modern enterprise.
  </p>
<div className="cta-wrapper">
<button className="cta-btn"><span className="">Initialize Node</span></button>
</div>
<div className="scroll-indicator">
<span>Scroll</span>
<div className="scroll-line"></div>
</div>
</main>

<section className="section-container" id="how-it-works">
<div className="text-center reveal visible">
<h2 className="">How it works</h2>
<p className="body-text">
          Three elegant phases to crystalline infrastructure.
        </p>
</div>
<div className="how-it-works-flow">
<div className="step-card glass-panel reveal visible" style={{transitionDelay: '0.1s'}}>
<div className="step-number">01</div>
<h3>Integrate</h3>
<p className="body-text">
            Connect your existing data streams to the Quantum gateway in
            minutes.
          </p>
</div>
<div className="step-card glass-panel reveal visible" style={{transitionDelay: '0.2s'}}>
<div className="step-number">02</div>
<h3>Process</h3>
<p className="body-text">
            Our engine crystallizes raw inputs into structured, query-optimized
            shards.
          </p>
</div>
<div className="step-card glass-panel reveal visible" style={{transitionDelay: '0.3s'}}>
<div className="step-number">03</div>
<h3>Scale</h3>
<p className="body-text">
            Expand globally with zero-friction nodal deployment and edge
            routing.
          </p>
</div>
</div>
</section>


<section className="section-container z-10 w-full max-w-[1400px] mx-auto pt-24 px-6 pb-24 relative">
<div className="modules-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="module-card group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5 backdrop-blur-md overflow-hidden reveal visible">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10">
<div className="inline-flex ring-inset group-hover:scale-105 group-hover:bg-white/10 transition-all duration-300 text-zinc-400 bg-white/5 w-12 h-12 ring-white/10 ring-1 rounded-xl mb-6 items-center justify-center">
<svg className="lucide lucide-layers" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
<polyline points="2 17 12 22 22 17"></polyline>
<polyline points="2 12 12 17 22 12"></polyline>
</svg>
</div>
<h3 className="text-lg font-normal text-white mb-3 tracking-tight group-hover:text-white transition-colors">
          Dynamic Rendering
        </h3>
<p className="text-zinc-400 font-light leading-relaxed text-[15px] group-hover:text-zinc-300 transition-colors">
          Volumetric layers compute instantly for the spatial web with zero-latency throughput.
        </p>
</div>
</div>

<div className="module-card group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5 backdrop-blur-md overflow-hidden reveal visible" style={{transitionDelay: '0.1s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10">
<div className="inline-flex ring-inset group-hover:scale-105 group-hover:bg-white/10 transition-all duration-300 text-zinc-400 bg-white/5 w-12 h-12 ring-white/10 ring-1 rounded-xl mb-6 items-center justify-center">
<svg className="lucide lucide-shield-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-lg font-normal text-white mb-3 tracking-tight group-hover:text-white transition-colors">
          Quantum Encryption
        </h3>
<p className="text-zinc-400 font-light leading-relaxed text-[15px] group-hover:text-zinc-300 transition-colors">
          Multi-layered defensive matrices secure the inner vault against localized threats.
        </p>
</div>
</div>

<div className="module-card group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5 backdrop-blur-md overflow-hidden reveal visible" style={{transitionDelay: '0.2s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10">
<div className="inline-flex ring-inset group-hover:scale-105 group-hover:bg-white/10 transition-all duration-300 text-zinc-400 bg-white/5 w-12 h-12 ring-white/10 ring-1 rounded-xl mb-6 items-center justify-center">
<svg className="lucide lucide-share-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="5" r="3"></circle>
<circle cx="6" cy="12" r="3"></circle>
<circle cx="18" cy="19" r="3"></circle>
<line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
<line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
</svg>
</div>
<h3 className="text-lg font-normal text-white mb-3 tracking-tight group-hover:text-white transition-colors">
          Nodal Scalability
        </h3>
<p className="text-zinc-400 font-light leading-relaxed text-[15px] group-hover:text-zinc-300 transition-colors">
          Infrastructures that grow organically without friction, expanding as demand rises.
        </p>
</div>
</div>

<div className="module-card group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5 backdrop-blur-md overflow-hidden reveal visible" style={{transitionDelay: '0.3s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10">
<div className="inline-flex ring-inset group-hover:scale-105 group-hover:bg-white/10 transition-all duration-300 text-zinc-400 bg-white/5 w-12 h-12 ring-white/10 ring-1 rounded-xl mb-6 items-center justify-center">
<svg className="lucide lucide-zap" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<h3 className="text-lg font-normal text-white mb-3 tracking-tight group-hover:text-white transition-colors">
          Edge Routing
        </h3>
<p className="text-zinc-400 font-light leading-relaxed text-[15px] group-hover:text-zinc-300 transition-colors">
          Distribute workloads efficiently across global access points to minimize distance.
        </p>
</div>
</div>

<div className="module-card group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5 backdrop-blur-md overflow-hidden reveal visible" style={{transitionDelay: '0.4s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10">
<div className="inline-flex ring-inset group-hover:scale-105 group-hover:bg-white/10 transition-all duration-300 text-zinc-400 bg-white/5 w-12 h-12 ring-white/10 ring-1 rounded-xl mb-6 items-center justify-center">
<svg className="lucide lucide-activity" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<h3 className="text-lg font-normal text-white mb-3 tracking-tight group-hover:text-white transition-colors">
          Analytics Engine
        </h3>
<p className="text-zinc-400 font-light leading-relaxed text-[15px] group-hover:text-zinc-300 transition-colors">
          Deep spatial insights into volumetric usage patterns and user behavior maps.
        </p>
</div>
</div>

<div className="module-card group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5 backdrop-blur-md overflow-hidden reveal visible" style={{transitionDelay: '0.5s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10">
<div className="inline-flex ring-inset group-hover:scale-105 group-hover:bg-white/10 transition-all duration-300 text-zinc-400 bg-white/5 w-12 h-12 ring-white/10 ring-1 rounded-xl mb-6 items-center justify-center">
<svg className="lucide lucide-database" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
<path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
</svg>
</div>
<h3 className="text-lg font-normal text-white mb-3 tracking-tight group-hover:text-white transition-colors">
          Immutable Ledgers
        </h3>
<p className="text-zinc-400 font-light leading-relaxed text-[15px] group-hover:text-zinc-300 transition-colors">
          Cryptographically verifiable event logging at the atomic level for total auditing.
        </p>
</div>
</div>
</div>
</section>

<section className="section-container" id="use-cases">
<div className="text-center reveal visible">
<h2 className="text-white font-light tracking-tight mb-4">Built for modern demands</h2>
</div>
<div className="use-case-container reveal visible">
<div className="use-case-tabs" id="uc-tabs">
<button className="tab-btn active font-medium" data-target="uc-1">
        Enterprise SaaS
      </button>
<button className="tab-btn font-light" data-target="uc-2">Financial Systems</button>
<button className="tab-btn font-light" data-target="uc-3">Real-time Gaming</button>
<button className="tab-btn font-light" data-target="uc-4">AI Infrastructure</button>
</div>
<div className="use-case-panel glass-panel overflow-hidden relative group" style={{background: 'rgba(15, 15, 18, 0.6)', border: '1px solid rgba(255, 255, 255, 0.08)'}}>

<div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
<div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent animate-[spin_20s_linear_infinite]"></div>
</div>

<div className="panel-content active transition-all duration-700" id="uc-1">
<h3 className="font-medium tracking-tight text-white">Enterprise SaaS</h3>
<p className="body-text mb-6 text-zinc-400">
          Handle millions of concurrent users with crystalline data
          separation and instant spatial querying.
        </p>
<div className="panel-abstract-ui relative h-[180px] bg-black/40 border border-white/5 rounded-xl p-4 overflow-hidden group/ui">
<div className="absolute inset-0 z-0 bg-[#0f0f12]/90"></div>
<div className="relative z-10 h-full flex flex-col gap-3">

<div className="flex items-center justify-between border-b border-white/5 pb-2">
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
</div>
<div className="h-1.5 w-24 bg-white/5 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-white/20 rounded-full animate-[loading_2s_ease-in-out_infinite]"></div>
</div>
</div>

<div className="grid grid-cols-3 gap-3 flex-grow">

<div className="bg-white/[0.03] rounded-lg border border-white/5 p-3 flex flex-col gap-2 hover:bg-white/[0.06] transition-colors duration-500">
<div className="h-1 w-full bg-white/10 rounded overflow-hidden">
<div className="h-full bg-white/40 w-2/3 animate-[pulse_3s_infinite]"></div>
</div>
<div className="h-1 w-1/2 bg-white/5 rounded"></div>
<div className="mt-auto flex justify-end">
<div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center border border-white/5">
<svg className="text-zinc-400" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
</div>
</div>

<div className="bg-white/[0.03] rounded-lg border border-white/5 p-3 flex flex-col gap-2 hover:bg-white/[0.06] transition-colors duration-500">
<div className="h-1 w-full bg-white/10 rounded overflow-hidden">
<div className="h-full bg-white/40 w-1/2 animate-[pulse_4s_infinite]"></div>
</div>
<div className="h-1 w-2/3 bg-white/5 rounded"></div>
<div className="mt-auto flex justify-end">
<div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center border border-white/5">
<svg className="text-zinc-400" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="17 8 12 3 7 8"></polyline>
<line x1="12" x2="12" y1="3" y2="15"></line>
</svg>
</div>
</div>
</div>

<div className="bg-white/[0.03] rounded-lg border border-white/10 p-3 flex flex-col gap-2 ring-1 ring-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 animate-[pulse_3s_infinite]">
</div>
<div className="h-1 w-full bg-white/20 rounded"></div>
<div className="h-1 w-3/4 bg-white/10 rounded"></div>
<div className="mt-auto flex justify-end">
<div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-ping"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="panel-content transition-all duration-700" id="uc-2">
<h3 className="font-medium tracking-tight text-white">Financial Systems</h3>
<p className="body-text mb-6 text-zinc-400">
          Immutable ledger tracking and zero-latency transaction routing
          secured by quantum matrices.
        </p>
<div className="panel-abstract-ui relative h-[180px] bg-black/40 border border-white/5 rounded-xl p-4 overflow-hidden">
<div className="absolute inset-0 z-0 bg-[#0f0f12]/90"></div>
<div className="relative z-10 h-full flex items-center justify-center">
<div className="w-full max-w-sm flex flex-col gap-2">

<div className="flex items-center gap-3 p-2 bg-white/[0.02] rounded-lg border border-white/5 hover:border-white/10 transition-colors">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
<svg className="text-zinc-300" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div className="flex-grow">
<div className="h-1.5 w-32 bg-white/10 rounded-full mb-1"></div>
<div className="h-1 w-20 bg-white/5 rounded-full"></div>
</div>
<div className="text-[10px] font-mono text-zinc-400 animate-[pulse_3s_infinite]">0.002ms</div>
</div>

<div className="flex items-center gap-3 p-2 bg-white/[0.02] rounded-lg border border-white/5 hover:border-white/10 transition-colors">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
<svg className="text-zinc-300" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
<div className="flex-grow">
<div className="h-1.5 w-24 bg-white/10 rounded-full mb-1"></div>
<div className="h-1 w-16 bg-white/5 rounded-full"></div>
</div>
<div className="text-[10px] font-mono text-zinc-500">SECURE</div>
</div>

<div className="flex items-center gap-3 p-2 bg-white/[0.06] rounded-lg border border-white/10">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
<svg className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
<div className="flex-grow">
<div className="h-1.5 w-40 bg-white/30 rounded-full mb-1"></div>
<div className="h-1 w-24 bg-white/10 rounded-full"></div>
</div>
<div className="text-[10px] font-mono text-white flex items-center gap-1">
<span className="w-1 h-1 rounded-full bg-white animate-ping"></span>
                  +12.4%
                </div>
</div>
</div>
</div>
</div>
</div>

<div className="panel-content transition-all duration-700" id="uc-3">
<h3 className="font-medium tracking-tight text-white">Real-time Gaming</h3>
<p className="body-text mb-6 text-zinc-400">
          Global edge routing prevents state desynchronization, allowing
          massive concurrent spatial worlds.
        </p>
<div className="panel-abstract-ui relative h-[180px] bg-black/40 border border-white/5 rounded-xl p-4 overflow-hidden">
<div className="absolute inset-0 z-0 bg-[#0f0f12]/90"></div>
<div className="relative z-10 h-full flex items-center justify-center">

<div className="relative w-32 h-32 flex items-center justify-center">

<div className="absolute inset-0 border border-white/5 rounded-full"></div>
<div className="absolute inset-8 border border-white/5 rounded-full"></div>
<div className="absolute inset-[40%] border border-white/5 rounded-full"></div>

<div className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite]" style={{background: 'conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(255,255,255,0.1) 360deg)'}}></div>

<div className="w-1 h-1 bg-white rounded-full relative z-10 shadow-[0_0_10px_white]"></div>

<div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white rounded-full opacity-0 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
<div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white rounded-full opacity-60"></div>
<div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white rounded-full opacity-0 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" style={{animationDelay: '1s'}}></div>
<div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-zinc-400 rounded-full opacity-50"></div>
</div>

<div className="ml-12 flex flex-col gap-4">
<div className="flex flex-col gap-1 group">
<span className="text-[10px] text-zinc-500 tracking-widest uppercase">Latency</span>
<span className="text-xl font-light text-white group-hover:text-zinc-200 transition-colors">14ms</span>
<div className="h-[1px] w-full bg-white/10 group-hover:bg-white/30 transition-colors origin-left scale-x-0 animate-[scaleX_1s_ease-out_forwards]"></div>
</div>
<div className="flex flex-col gap-1 group">
<span className="text-[10px] text-zinc-500 tracking-widest uppercase">Nodes</span>
<span className="text-xl font-light text-zinc-300 group-hover:text-white transition-colors">2.4k</span>
<div className="h-[1px] w-full bg-white/10 group-hover:bg-white/30 transition-colors origin-left scale-x-0 animate-[scaleX_1s_ease-out_0.2s_forwards]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="panel-content transition-all duration-700" id="uc-4">
<h3 className="font-medium tracking-tight text-white">AI Infrastructure</h3>
<p className="body-text mb-6 text-zinc-400">
          Feed massive tensor arrays into processing nodes with zero
          structural friction or data loss.
        </p>
<div className="panel-abstract-ui relative h-[-hidden">
<div className="absolute inset-0 z-0 bg-[#0f0f12]/90"></div>
<div className="relative z-10 h-full flex items-center justify-center">
<div className="grid grid-cols-6 gap-2">

<div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center"><div className="w-1 h-1 rounded-full bg-white animate-[pulse_3s_infinite]"></div></div>
<div className="w-6 h-6 rounded bg-white/[0.02] border border-white/5"></div>
<div className="w-6 h-6 rounded bg-white/[0.02] border border-white/5"></div>
<div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center"><div className="w-1 h-1 rounded-full bg-zinc-400 animate-[pulse_4s_infinite]"></div></div>
<div className="w-6 h-6 rounded bg-white/[0.02] border border-white/5"></div>
<div className="w-6 h-6 rounded bg-white/[0.02] border border-white/5"></div>
<div className="w-6 h-6 rounded bg-white/10 border border-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)]"><div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div></div>
<div className="w-6 h-6 rounded bg-white/[0.02] border border-white/5"></div>
<div className="w-6 h-6 rounded bg-white/[0.02] border border-white/5"></div>
<div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center"><div className="w-1 h-1 rounded-full bg-zinc-400 animate-[pulse_2.5s_infinite]"></div></div>
<div className="w-6 h-6 rounded bg-white/[0.02] border border-white/5"></div>
<div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center"><div className="w-1 h-1 rounded-full bg-zinc-400"></div></div>
<div className="w-6 h-6 rounded bg-white/[0.02] border border-white/5"></div>
<div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center"><div className="w-1 h-1 rounded-full bg-white animate-[pulse_5s_infinite]"></div></div>
<div className="w-6 h-6 rounded bg-white/[0.02] border border-white/5"></div>
<div className="w-6 h-6 rounded bg-white/[0.02] border border-white/5"></div>
<div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center"><div 10="" border-l="" border-white="" className="wdiv class=" ml-12="" overflow-hidden"="" pl-12="" relative="">
<div className="flex flex-col gap-2">
<div className="h-1.5 w-24 bg-white/20 rounded-full overflow-hidden relative">
<div className="absolute inset-0 bg-white/40 animate-[translateX_2s_ease-in-out_infinite]"></div>
</div>
<div className="h-1.5 w-32 bg-white/10 rounded-full"></div>
<div className="h-1.5 w-20 bg-white/10 rounded-full"></div>
<div className="h-1.5 w-28 bg-white/5 rounded-full mt-2"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<style>
    @keyframes loading {
      0% { transform: translateX(-100%); opacity: 0.5; }
      50% { opacity: 1; }
      100% { transform: translateX(300%); opacity: 0.5; }
    }
    @keyframes translateX {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    @keyframes scaleX {
      to { transform: scaleX(1); }
    }
  </style>
</div></div></section>

<section className="section-container overflow-hidden pt-24 pr-[5vw] pb-24 pl-[5vw] relative" id="testimonials">
<div className="max-w-7xl mx-auto relative z-10">

<div className="mb-16 reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e5ff] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#00e5ff]"></span>
</span>
<span className="text-[10px] font-medium tracking-[0.2em] text-[#00e5ff] uppercase">Validation Matrix</span>
</div>
<h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">Architects of the future</h2>
<p className="text-zinc-400 font-light max-w-xl">
        Quantifiable shifts in infrastructure performance, verified by leads at global engineering teams.
      </p>
</div>

<div className="grid grid-cols-12 gap-6 items-stretch">

<div className="col-span-12 lg:col-span-7 overflow-hidden reveal group bg-[#0f0f12]/40 z-10 border-white/5 border rounded-3xl relative backdrop-blur-xl" data-constellation-wrap="">

<div className="absolute -top-32 -left-32 w-96 h-96 bg-[#00e5ff]/10 blur-[120px]"></div>
<div className="-bottom-40 -right-40 blur-[140px] bg-cyan-500/10 w-[520px] h-[520px] absolute"></div>

<div className="z-10 md:p-12 pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex items-start justify-between gap-6">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
<span className="text-[10px] tracking-[0.2em] text-zinc-300 uppercase">Live Signal Review</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] shadow-[0_0_14px_rgba(0,229,255,0.55)]"></span>
</div>
<blockquote className="text-2xl md:text-3xl font-light text-white leading-tight tracking-tight max-w-2xl">
          "It didn’t feel like onboarding. It felt like the system recognized our architecture
          and <span className="text-white font-normal italic">aligned itself</span>. We shipped in days, not quarters."
        </blockquote>
</div>
<div className="hidden md:flex flex-col items-end text-right">
<span className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Signal Confidence</span>
<span className="text-[#00e5ff] font-mono text-2xl">99.6%</span>
<span className="text-[11px] text-zinc-500 mt-2">Drift: 0.04</span>
</div>
</div>

<div className="mt-10 grid grid-cols-3 gap-3 max-w-xl" data-node-grid="">
<button className="node-chip group/node hover:border-white/10 transition text-left bg-gradient-to-tr from-white/10 to-white/0 border-white/5 border rounded-2xl px-4 py-3 backdrop-blur-xl" data-node="0">
<div className="flex items-center justify-between gap-3">
<span className="text-[11px] text-zinc-400">Latency drop</span>
<span className="w-2 h-2 rounded-full bg-[#00e5ff] shadow-[0_0_16px_rgba(0,229,255,0.6)]"></span>
</div>
<div className="text-white text-sm mt-1">-94%</div>
</button>
<button className="node-chip group/node hover:border-white/10 transition text-left bg-gradient-to-tr from-white/10 to-white/0 border-white/5 border rounded-2xl px-4 py-3 backdrop-blur-xl" data-node="1">
<div className="flex items-center justify-between gap-3">
<span className="text-[11px] text-zinc-400">Deploy speed</span>
<span className="w-2 h-2 rounded-full bg-[#00e5ff] shadow-[0_0_16px_rgba(0,229,255,0.6)]"></span>
</div>
<div className="text-white text-sm mt-1">x12 faster</div>
</button>
<button className="node-chip group/node hover:border-white/10 transition text-left bg-gradient-to-tr from-white/10 to-white/0 border-white/5 border rounded-2xl px-4 py-3 backdrop-blur-xl" data-node="2">
<div className="flex items-center justify-between gap-3">
<span className="text-[11px] text-zinc-400">Security posture</span>
<span className="w-2 h-2 rounded-full bg-[#00e5ff] shadow-[0_0_16px_rgba(0,229,255,0.6)]"></span>
</div>
<div className="text-white text-sm mt-1">Vault-ready</div>
</button>
</div>
<div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border border-white/10 p-0.5">
<div className="w-full h-full rounded-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/23c92345-65be-44d2-b48a-3073db88554d_320w.webp)] bg-cover bg-center">
</div>
</div>
<div>
<h4 className="text-white font-medium text-sm">Sarah Jenkins</h4>
<p className="text-zinc-500 text-xs">CTO, SpatialSync</p>
</div>
</div>
<div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/5">
<span className="text-[10px] text-zinc-500 uppercase tracking-widest">Trace</span>
<span className="text-[11px] font-mono text-zinc-300">SIG-ARC-031</span>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-5 grid grid-cols-1 gap-6">
<div className="shard-card relative rounded-3xl bg-[#0f0f12]/40 border border-white/5 p-8 backdrop-blur-xl reveal overflow-hidden is-active" data-shard="0" style={{transitionDelay: '0.1s'}}>
<div className="absolute -top-28 -right-28 w-72 h-72 bg-[#00e5ff]/10 blur-[120px]"></div>
<h4 className="text-white text-xs uppercase tracking-widest font-normal mb-5">Latency Shift</h4>
<p className="text-zinc-300 font-light leading-relaxed">
            "The pipeline went from visible lag to silence. Our UI felt like it was ahead of the user, not behind them."
          </p>
<div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
<span className="text-[10px] text-zinc-500 uppercase tracking-widest">Measured</span>
<span className="text-[#00e5ff] font-mono text-lg">-94%</span>
</div>
</div>
<div className="shard-card relative rounded-3xl bg-[#0f0f12]/40 border border-white/5 p-8 backdrop-blur-xl reveal overflow-hidden opacity-70" data-shard="1" style={{transitionDelay: '0.2s'}}>
<div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-500/10 blur-[140px]"></div>
<h4 className="text-white text-xs uppercase tracking-widest font-normal mb-5">Deployment Flow</h4>
<p className="text-zinc-300 font-light leading-relaxed">
            "Provisioning nodes used to be a calendar event. Now it’s a natural state change we barely notice."
          </p>
<div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
<span className="text-[10px] text-zinc-500 uppercase tracking-widest">Acceleration</span>
<span className="text-[#00e5ff] font-mono text-lg">x12</span>
</div>
</div>
<div className="shard-card relative rounded-3xl bg-[#0f0f12]/40 border border-white/5 p-8 backdrop-blur-xl reveal overflow-hidden opacity-70" data-shard="2" style={{transitionDelay: '0.3s'}}>
<div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-[#00e5ff]/10 blur-[160px]"></div>
<h4 className="text-white text-xs uppercase tracking-widest font-normal mb-5">Security Proof</h4>
<p className="text-zinc-300 font-light leading-relaxed">
            "Audit reviews turned from negotiation into verification. The vault model made compliance feel inevitable."
          </p>
<div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
<span className="text-[10px] text-zinc-500 uppercase tracking-widest">Status</span>
<span className="text-[#00e5ff] font-mono text-lg">READY</span>
</div>
</div>
</div>
</div>
</div>

<style>
    /* Smooth morph highlight for shards */
    .shard-card{
      transform: translateY(0);
      transition: opacity .35s ease, transform .35s ease, border-color .35s ease, background-color .35s ease;
    }
    .shard-card.is-active{
      opacity: 1 !important;
      transform: translateY(-4px);
      border-color: rgba(255,255,255,0.12);
      background-color: rgba(255,255,255,0.03);
    }

    /* Node chip micro glow */
    .node-chip{
      outline: none;
    }
    .node-chip:focus{
      border-color: rgba(0,229,255,0.35);
      box-shadow: 0 0 0 1px rgba(0,229,255,0.25), 0 0 30px rgba(0,229,255,0.12);
    }
  </style>

</section>


<section className="section-container" id="faq">
<div className="text-center reveal">
<h2>Common Queries</h2>
</div>
<div className="faq-container reveal">
<div className="faq-item">
<div className="faq-question">
            What is Quantum's core architecture?
            <div className="faq-icon"></div>
</div>
<div className="faq-answer">
<p>
              Quantum utilizes a spatial web infrastructure, replacing linear
              databases with a multi-layered, zero-latency rendering environment
              that stores data visually and structurally.
            </p>
</div>
</div>
<div className="faq-item">
<div className="faq-question">
            How fast is the integration process?
            <div className="faq-icon"></div>
</div>
<div className="faq-answer">
<p>
              Most enterprise teams complete nodal connection in under 48 hours
              using our automated gateway scripts. Full matrix mapping takes
              approximately one week.
            </p>
</div>
</div>
<div className="faq-item">
<div className="faq-question">
            Is the Quantum matrix secure?
            <div className="faq-icon"></div>
</div>
<div className="faq-answer">
<p>
              Yes. We employ multi-layered defensive matrices with atomic-level
              encryption, ensuring that even if one node is compromised, the
              broader structural integrity remains unbroken.
            </p>
</div>
</div>
<div className="faq-item">
<div className="faq-question">
            Can I switch plans later?
            <div className="faq-icon"></div>
</div>
<div className="faq-answer">
<p>
              Absolutely. Infrastructure should adapt. You can scale your plan
              up or down instantly from the control dashboard without any system
              downtime.
            </p>
</div>
</div>
<div className="faq-item">
<div className="faq-question">
            Do you offer SLAs for Enterprise?
            <div className="faq-icon"></div>
</div>
<div className="faq-answer">
<p>
              Yes, our Enterprise clients receive a 99.99% uptime SLA, backed by
              our globally distributed edge routing fallback mechanisms.
            </p>
</div>
</div>
</div>
</section>






    </>
  );
}
