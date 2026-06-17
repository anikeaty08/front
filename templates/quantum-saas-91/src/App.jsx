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
      const section = document.getElementById("solution");
      if(!section) return;

      const divider = section.querySelector(".split-divider");
      const packet = divider ? divider.querySelector(".packet") : null;

      const problemItems = Array.from(section.querySelectorAll('[data-list="problem"] .bullet-item'));
      const solutionItems = Array.from(section.querySelectorAll('[data-list="solution"] .bullet-item'));

      const routeLayer = section.querySelector(".route-layer svg");
      const routePath = section.querySelector(".route-path");

      if(!routeLayer || !routePath || !divider || !packet) return;

      // Convert element rect -> section-local coords
      function rectToLocalCenter(el){
        const r = el.getBoundingClientRect();
        const s = section.getBoundingClientRect();
        return {
          x: (r.left + r.width/2) - s.left,
          y: (r.top + r.height/2) - s.top
        };
      }

      function setPacketToY(y){
        const d = divider.getBoundingClientRect();
        const s = section.getBoundingClientRect();
        const topInSection = d.top - s.top;
        const clamped = Math.max(topInSection + 24, Math.min(topInSection + d.height - 24, y));
        packet.style.top = clamped + "px";
      }

      function setRoute(fromEl, toEl){
        const a = rectToLocalCenter(fromEl);
        const b = rectToLocalCenter(toEl);

        // Update SVG viewBox to match section for correct mapping
        const s = section.getBoundingClientRect();
        routeLayer.setAttribute("viewBox", `0 0 ${Math.max(1, s.width)} ${Math.max(1, s.height)}`);

        // Curve across the divider
        const midX = (a.x + b.x) / 2;
        const tension = Math.max(80, Math.min(220, Math.abs(b.x - a.x) * 0.35));

        const d = `M ${a.x} ${a.y} C ${midX - tension} ${a.y}, ${midX + tension} ${b.y}, ${b.x} ${b.y}`;
        routePath.setAttribute("d", d);

        // Move packet in divider to hovered row Y
        setPacketToY(a.y);

        // activate
        section.classList.add("is-active");
      }

      function clearRoute(){
        section.classList.remove("is-active");
      }

      function resolveIndex(i){
        problemItems.forEach((item, idx)=>{
          item.classList.toggle("is-resolved", idx === i);
        });
        solutionItems.forEach((item, idx)=>{
          item.classList.toggle("is-active", idx === i);
        });
      }

      // hover / click mapping (hover desktop, click mobile)
      problemItems.forEach((item)=>{
        const i = Number(item.getAttribute("data-route")) || 0;
        const sink = solutionItems.find(el => Number(el.getAttribute("data-sink")) === i) || solutionItems[i];

        const activate = ()=>{
          resolveIndex(i);
          setRoute(item, sink);
        };

        item.addEventListener("mouseenter", activate);
        item.addEventListener("focus", activate);

        item.addEventListener("click", ()=>{
          // mobile-friendly toggle
          if(section.classList.contains("is-active") && item.classList.contains("is-resolved")){
            clearRoute();
            problemItems.forEach(x=>x.classList.remove("is-resolved"));
            solutionItems.forEach(x=>x.classList.remove("is-active"));
          }else{
            activate();
          }
        });
      });

      // clear when leaving the section area
      section.addEventListener("mouseleave", ()=>{
        clearRoute();
        problemItems.forEach(x=>x.classList.remove("is-resolved"));
        solutionItems.forEach(x=>x.classList.remove("is-active"));
      });

      // keep route aligned on resize
      let lastActive = 0;
      const observer = new MutationObserver(()=>{
        // noop placeholder in case Aura toggles classes
      });
      observer.observe(section, { attributes:true, subtree:true });

      window.addEventListener("resize", ()=>{
        if(!section.classList.contains("is-active")) return;
        // Rebuild route based on current resolved
        const idx = problemItems.findIndex(x=>x.classList.contains("is-resolved"));
        if(idx >= 0){
          const sink = solutionItems[idx];
          setRoute(problemItems[idx], sink);
        }
      });
    })();
  


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
  


    (function() {
      const section = document.querySelector('[data-element-id="aura-emmcanfzzf4hq3jn"]');
      if (!section) return;
      const glowLayer = section.querySelector('.parallax-glow');
      
      if (glowLayer) {
        section.addEventListener('mousemove', function(e) {
          const rect = section.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          
          const moveX = (e.clientX - centerX) * 0.05;
          const moveY = (e.clientY - centerY) * 0.05;
          
          glowLayer.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
        });
        
        section.addEventListener('mouseleave', function() {
          glowLayer.style.transform = 'translate(0px, 0px)';
        });
      }
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

<header className="" id="main-header">
<div className="brand">QUANTUM.</div>
<ul className="nav-links">
<li><a href="#how-it-works">Work</a></li>
<li><a href="#solution">Solution</a></li>
<li><a href="#use-cases">Use Cases</a></li>
<li><a href="#testimonials">Testimonials</a></li>
<li><a href="#pricing">Pricing</a></li>
<li><a href="#faq">FAQ</a></li>
</ul>
<div className="header-actions">
<button className="btn-ghost">Log in</button>
<button className="btn-primary-small">Get started</button>
</div>
<button className="mobile-menu-btn" id="menu-toggle">☰</button>
</header>

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

<section className="section-container" id="solution">
<style>
    /* =========================
       SOLUTION SECTION: "STATE SHIFT CONSOLE"
       Unique behavior:
       - Hover/tap each row to "route" a signal from Problem -> Solution
       - Divider becomes a live conduit that animates toward the hovered row
       - Problem rows fade to "resolved" when mapped
       - Works without changing your existing copy
       ========================= */

    #solution{
      position: relative;
      overflow: hidden;
    }

    /* subtle cinematic grid texture enhancement */
    #solution .grid-texture{
      position:absolute;
      inset:-2px;
      opacity:.55;
      pointer-events:none;
      z-index:0;
      background:
        radial-gradient(800px 420px at 20% 0%, rgba(0,229,255,.10), rgba(0,0,0,0) 60%),
        radial-gradient(900px 520px at 80% 20%, rgba(255,255,255,.06), rgba(0,0,0,0) 62%),
        radial-gradient(900px 520px at 50% 120%, rgba(0,0,0,.5), rgba(0,0,0,0) 65%);
      filter: blur(0.2px);
    }

    #solution .text-center{
      position: relative;
      z-index: 2;
    }

    /* split layout container */
    #solution .split-section{
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: 1fr 84px 1fr;
      gap: 28px;
      align-items: stretch;
    }

    @media (max-width: 980px){
      #solution .split-section{
        grid-template-columns: 1fr;
        gap: 18px;
      }
    }

    /* panes styled like consoles */
    #solution .split-pane{
      position: relative;
      border-radius: 28px;
      background: rgba(15,15,18,0.35);
      border: 1px solid rgba(255,255,255,0.06);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      padding: 32px 28px;
      overflow: hidden;
      isolation: isolate;
    }

    #solution .split-pane::before{
      content:"";
      position:absolute;
      inset:-2px;
      background:
        radial-gradient(620px 260px at 18% 10%, rgba(0,229,255,0.12), rgba(0,0,0,0) 62%),
        radial-gradient(520px 260px at 85% 40%, rgba(255,255,255,0.06), rgba(0,0,0,0) 62%);
      pointer-events:none;
      z-index:0;
    }

    #solution .split-pane h3{
      position: relative;
      z-index: 1;
      display:flex;
      align-items:center;
      gap:10px;
      margin-bottom: 18px;
      letter-spacing: .08em;
      text-transform: uppercase;
      font-size: 12px;
      color: rgba(255,255,255,0.75);
    }

    /* unique "status pill" in headings */
    #solution .split-pane h3::after{
      content: attr(data-status);
      margin-left:auto;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
      font-size: 10px;
      letter-spacing: .18em;
      padding: 7px 10px;
      border-radius: 999px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      color: rgba(255,255,255,0.55);
    }

    #solution .split-pane.problem h3{ }
    #solution .split-pane.problem h3::after{ content: "INPUT"; }

    #solution .split-pane.solution h3::after{
      content: "OUTPUT";
      border-color: rgba(0,229,255,0.18);
      color: rgba(0,229,255,0.75);
      background: rgba(0,229,255,0.06);
      box-shadow: 0 0 22px rgba(0,229,255,0.08);
    }

    /* lists */
    #solution .bullet-list{
      position: relative;
      z-index: 1;
      display:flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 18px;
    }

    /* each row acts like an interactive "route" */
    #solution .bullet-item{
      position: relative;
      display:grid;
      grid-template-columns: 34px 1fr;
      gap: 14px;
      padding: 14px 14px;
      border-radius: 18px;
      border: 1px solid rgba(255,255,255,0.06);
      background: rgba(255,255,255,0.02);
      transition: border-color .25s ease, background-color .25s ease, transform .25s ease, opacity .25s ease;
      cursor: default;
      overflow: hidden;
    }

    /* hover “console focus” */
    #solution .bullet-item:hover{
      border-color: rgba(255,255,255,0.12);
      background: rgba(255,255,255,0.03);
      transform: translateY(-2px);
    }

    /* icon becomes a diode */
    #solution .bullet-icon{
      width: 28px;
      height: 28px;
      display:flex;
      align-items:center;
      justify-content:center;
      border-radius: 999px;
      font-size: 14px;
      line-height: 1;
      border: 1px solid rgba(255,255,255,0.10);
      background: rgba(0,0,0,0.25);
      color: rgba(255,255,255,0.75);
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.04);
      user-select:none;
    }

    #solution .split-pane.solution .bullet-icon{
      border-color: rgba(0,229,255,0.22);
      color: rgba(0,229,255,0.9);
      background: rgba(0,229,255,0.06);
      box-shadow: 0 0 18px rgba(0,229,255,0.10);
    }

    #solution .bullet-content h4{
      font-size: 14px;
      letter-spacing: -0.01em;
      color: rgba(255,255,255,0.92);
      margin-bottom: 4px;
    }

    #solution .bullet-content p{
      color: rgba(255,255,255,0.58);
      line-height: 1.55;
      font-weight: 300;
    }

    /* =========================
       CENTER DIVIDER: "LIVE CONDUIT"
       ========================= */
    #solution .split-divider{
      position: relative;
      border-radius: 999px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      overflow: hidden;
    }

    @media (max-width: 980px){
      #solution .split-divider{ display:none; }
    }

    /* static faint core line */
    #solution .split-divider::before{
      content:"";
      position:absolute;
      left: 50%;
      top: 10%;
      bottom: 10%;
      width: 2px;
      transform: translateX(-50%);
      background: linear-gradient(
        180deg,
        rgba(0,229,255,0),
        rgba(0,229,255,0.35),
        rgba(255,255,255,0.10),
        rgba(0,229,255,0.35),
        rgba(0,229,255,0)
      );
      opacity: .85;
      filter: blur(.2px);
    }

    /* moving “packet” that snaps to hovered row Y */
    #solution .split-divider .packet{
      position:absolute;
      left: 50%;
      width: 34px;
      height: 34px;
      transform: translate(-50%, -50%);
      border-radius: 999px;
      background:
        radial-gradient(circle at 30% 30%, rgba(255,255,255,0.20), rgba(255,255,255,0) 40%),
        radial-gradient(circle at center, rgba(0,229,255,0.35), rgba(0,229,255,0) 65%);
      border: 1px solid rgba(0,229,255,0.18);
      box-shadow:
        0 0 18px rgba(0,229,255,0.20),
        0 0 44px rgba(0,229,255,0.10);
      pointer-events:none;
      opacity: .0;
      transition: top .26s cubic-bezier(.2,.9,.2,1), opacity .22s ease;
    }

    #solution.is-active .split-divider .packet{
      opacity: 1;
    }

    /* electric trail around the packet */
    #solution .split-divider .packet::after{
      content:"";
      position:absolute;
      inset:-10px;
      border-radius: inherit;
      background:
        conic-gradient(from 180deg,
          rgba(0,0,0,0),
          rgba(0,229,255,0.55),
          rgba(255,255,255,0.10),
          rgba(0,229,255,0.55),
          rgba(0,0,0,0)
        );
      filter: blur(10px);
      opacity: .8;
      animation: packetSpin 2.2s linear infinite;
      pointer-events:none;
    }

    @keyframes packetSpin{
      to{ transform: rotate(360deg); }
    }

    /* =========================
       ROUTE LINKS (Problem row -> Solution row)
       ========================= */
    #solution .route-layer{
      position:absolute;
      inset:0;
      pointer-events:none;
      z-index: 3;
    }

    #solution .route-layer svg{
      width:100%;
      height:100%;
      display:block;
    }

    #solution .route-path{
      fill:none;
      stroke: rgba(0,229,255,0.75);
      stroke-width: 2;
      stroke-linecap: round;
      stroke-dasharray: 8 10;
      opacity: 0;
      filter: drop-shadow(0 0 10px rgba(0,229,255,0.35));
      transition: opacity .2s ease;
      animation: dashMove 1.2s linear infinite;
    }

    @keyframes dashMove{
      to{ stroke-dashoffset: -36; }
    }

    #solution.is-active .route-path{ opacity: 1; }

    /* resolve state (Problem item becomes “dimmed + sealed”) */
    #solution .bullet-item.is-resolved{
      opacity: .55;
      border-color: rgba(255,255,255,0.06);
      background: rgba(0,0,0,0.18);
    }

    #solution .bullet-item.is-resolved .bullet-icon{
      border-color: rgba(0,229,255,0.18);
      color: rgba(0,229,255,0.75);
      background: rgba(0,229,255,0.05);
    }

    #solution .bullet-item.is-resolved::after{
      content:"";
      position:absolute;
      inset:0;
      background:
        radial-gradient(340px 140px at 20% 10%, rgba(0,229,255,0.10), rgba(0,0,0,0) 60%),
        linear-gradient(90deg, rgba(0,229,255,0.10), rgba(0,0,0,0) 60%);
      opacity: .35;
      pointer-events:none;
    }

    /* mobile interaction: remove cursor expectations */
    @media (hover: none){
      #solution .bullet-item{ cursor: pointer; }
    }

    @media (prefers-reduced-motion: reduce){
      #solution .route-path{ animation: none !important; }
      #solution .split-divider .packet::after{ animation: none !important; }
      #solution .bullet-item{ transition: none !important; }
      #solution .split-divider .packet{ transition: none !important; }
    }
  </style>
<div className="grid-texture"></div>
<div className="text-center reveal visible" style={{marginBottom: '80px'}}>
<h2>From complexity to clarity</h2>
</div>

<div aria-hidden="true" className="route-layer">
<svg preserveaspectratio="none" viewbox="0 0 1000 520">
<path className="route-path" d="M 360 160 C 470 160, 530 160, 640 160"></path>
</svg>
</div>
<div className="split-section">
<div className="split-pane problem reveal visible" data-pane="problem">
<h3>The Problem</h3>
<div className="bullet-list" data-list="problem">
<div className="bullet-item" data-route="0">
<div className="bullet-icon">✕</div>
<div className="bullet-content">
<h4>Fragmented Data</h4>
<p>
              Silos restrict visibility and slow down critical system
              queries across the network.
            </p>
</div>
</div>
<div className="bullet-item" data-route="1">
<div className="bullet-icon">✕</div>
<div className="bullet-content">
<h4>High Latency</h4>
<p>
              Legacy architectures create bottlenecks during high-throughput
              rendering.
            </p>
</div>
</div>
<div className="bullet-item" data-route="2">
<div className="bullet-icon">✕</div>
<div className="bullet-content">
<h4>Scaling Friction</h4>
<p>
              Adding nodes requires manual reconfiguration and risks
              structural downtime.
            </p>
</div>
</div>
</div>
</div>

<div aria-hidden="true" className="split-divider">
<div className="packet"></div>
</div>
<div className="split-pane solution reveal visible" data-pane="solution" style={{transitionDelay: '0.2s'}}>
<h3>The Solution</h3>
<div className="bullet-list" data-list="solution">
<div className="bullet-item" data-sink="0">
<div className="bullet-icon">✓</div>
<div className="bullet-content">
<h4>Unified Architecture</h4>
<p>
              All streams mapped into a singular, highly structured spatial
              environment.
            </p>
</div>
</div>
<div className="bullet-item" data-sink="1">
<div className="bullet-icon">✓</div>
<div className="bullet-content">
<h4>Zero-Latency Processing</h4>
<p>
              Atomic-level processing ensures real-time rendering at
              infinite scale.
            </p>
</div>
</div>
<div className="bullet-item" data-sink="2">
<div className="bullet-icon">✓</div>
<div className="bullet-content">
<h4>Organic Expansion</h4>
<p>
              The network automatically adapts and balances as new instances
              are deployed.
            </p>
</div>
</div>
</div>
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

<section className="section-container" id="pricing">
<div className="text-center reveal">
<h2>Transparent architecture</h2>
<div className="billing-toggle">
<span className="active" id="lbl-monthly">Monthly</span>
<label className="switch">
<input id="pricing-toggle" type="checkbox"/>
<span className="slider"></span>
</label>
<span id="lbl-yearly">
            Yearly
            <span style={{color: '#00e5ff', fontSize: '0.8rem'}}>(Save 20%)</span>
</span>
</div>
</div>
<div className="pricing-grid">

<div className="pricing-card glass-panel reveal">
<h3>Starter</h3>
<p className="body-text">For emerging systems.</p>
<div className="price-block">
<span className="currency">$</span>
<span className="price" data-monthly="49" data-yearly="39">49</span>
<span className="period">/mo</span>
</div>
<ul className="pricing-features">
<li>100k requests/mo</li>
<li>Standard encryption</li>
<li>Community support</li>
<li>Basic analytics</li>
</ul>
<button className="btn-primary-small btn-full" style={{background: 'transparent'}}>
            Initialize Starter
          </button>
</div>

<div className="pricing-card glass-panel pro-tier reveal" style={{transitionDelay: '0.1s'}}>
<div className="popular-badge">Most Popular</div>
<h3>Pro</h3>
<p className="body-text">For scaling architectures.</p>
<div className="price-block">
<span className="currency">$</span>
<span className="price" data-monthly="149" data-yearly="119">149</span>
<span className="period">/mo</span>
</div>
<ul className="pricing-features">
<li>1M requests/mo</li>
<li>Quantum matrix security</li>
<li>Priority nodal support</li>
<li>Advanced spatial analytics</li>
</ul>
<button className="cta-btn btn-full"><span>Initialize Pro</span></button>
</div>

<div className="pricing-card glass-panel reveal" style={{transitionDelay: '0.2s'}}>
<h3>Enterprise</h3>
<p className="body-text">For infinite structures.</p>
<div className="price-block" style={{paddingTop: '10px'}}>
<span className="price" style={{fontSize: '2.5rem'}}>Custom</span>
</div>
<ul className="pricing-features">
<li>Unlimited requests</li>
<li>Dedicated shards</li>
<li>24/7 SLA</li>
<li>Custom implementations</li>
</ul>
<button className="btn-primary-small btn-full" style={{background: 'transparent'}}>
            Contact Sales
          </button>
</div>
</div>
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

<section className="final-cta flex flex-col min-h-[80vh] overflow-hidden bg-black w-full relative items-center justify-center">
<style>
    @keyframes spotlight-breathe {

      0%,
      100% {
        transform: scale(1);
        opacity: 0.4;
        filter: blur(120px);
      }

      50% {
        transform: scale(1.05);
        opacity: 0.7;
        filter: blur(140px);
      }
    }

    @keyframes spotlight-core-breathe {

      0%,
      100% {
        transform: scale(1);
        opacity: 0.3;
        filter: blur(80px);
      }

      50% {
        transform: scale(1.1);
        opacity: 0.6;
        filter: blur(100px);
      }
    }

    .glow-outer {
      animation: spotlight-breathe 8s ease-in-out infinite;
    }

    .glow-inner {
      animation: spotlight-core-breathe 6s ease-in-out infinite;
    }

    .noise-bg {
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.06'/%3E%3C/svg%3E");
    }
  </style>
<div className="absolute inset-0 z-0 noise-bg mix-blend-overlay pointer-events-none"></div>
<div className="parallax-glow absolute inset-0 z-0 flex items-center justify-center pointer-events-none transition-transform duration-300 ease-out">
<div className="absolute w-[90vw] max-w-[900px] h-[90vw] max-h-[900px] bg-blue-600/30 rounded-full glow-outer mix-blend-screen">
</div>
<div className="absolute w-[40vw] max-w-[500px] h-[40vw] max-h-[500px] bg-[#00e5ff]/30 rounded-full glow-inner mix-blend-screen">
</div>
</div>
<div className="absolute inset-0 z-0 pointer-events-none" style={{background: 'radial-gradient(circle at center, transparent 10%, #000 80%)'}}></div>
<div className="relative z-10 flex flex-col items-center text-center p-8 md:p-16 lg:p-24 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05)] w-[90%] max-w-4xl overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none rounded-3xl">
</div>
<div className="reveal visible">
<h2 className="relative text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white mb-10 leading-tight drop-shadow-2xl">
        Launch with clarity.
        <br/>
        Scale with confidence.
      </h2>
<div className="cta-wrapper relative z-20 mt-6">
<button className="cta-btn relative flex items-center justify-center mx-auto px-8 md:px-14 py-4 md:py-5 rounded-full bg-white/5 text-white font-light text-base md:text-lg border border-white/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-[#00e5ff]/10 hover:border-[#00e5ff]/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.3),inset_0_0_15px_rgba(0,229,255,0.15)] group/btn">
<span className="relative z-10 tracking-wide">Deploy Architecture</span>
</button>
</div>
</div>
</div>

</section>

<footer className="bg-[#09090b] border-t border-white/5 pt-24 pb-12 px-[5vw] relative z-10">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">

<div className="flex flex-col gap-6">
<div className="brand text-xl font-medium tracking-widest text-white">
            QUANTUM.
          </div>
<p className="text-zinc-500 text-[15px] leading-relaxed font-light">
            Engineering the future of spatial computing. Crystalline
            infrastructure for infinitely scalable, secure decentralized
            systems.
          </p>
<div className="flex gap-4 mt-2">
<a className="w-9 h-9 rounded-full border border-white/5 flex items-center justify-center text-zinc-400 hover:text-[#00e5ff] hover:border-[#00e5ff]/30 transition-all" href="#">
<svg className="lucide lucide-twitter" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="w-9 h-9 rounded-full border border-white/5 flex items-center justify-center text-zinc-400 hover:text-[#00e5ff] hover:border-[#00e5ff]/30 transition-all" href="#">
<svg className="lucide lucide-github" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
<a className="w-9 h-9 rounded-full border border-white/5 flex items-center justify-center text-zinc-400 hover:text-[#00e5ff] hover:border-[#00e5ff]/30 transition-all" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>

<div className="flex flex-col gap-6">
<h4 className="text-white font-normal text-xs uppercase tracking-[0.2em]">
            Architecture
          </h4>
<ul className="flex flex-col gap-4">
<li className="">
<a className="text-zinc-400 hover:text-[#00e5ff] transition-colors text-sm font-light" href="#">
                Core Nodal
              </a>
</li>
<li className="">
<a className="text-zinc-400 hover:text-[#00e5ff] transition-colors text-sm font-light" href="#">
                Security Shards
              </a>
</li>
<li className="">
<a className="text-zinc-400 hover:text-[#00e5ff] transition-colors text-sm font-light" href="#">
                Edge Distribution
              </a>
</li>
<li>
<a className="text-zinc-400 hover:text-[#00e5ff] transition-colors text-sm font-light" href="#">
                Protocols
              </a>
</li>
</ul>
</div>

<div className="flex flex-col gap-6">
<h4 className="text-white font-normal text-xs uppercase tracking-[0.2em]">
            Resources
          </h4>
<ul className="flex flex-col gap-4">
<li>
<a className="text-zinc-400 hover:text-[#00e5ff] transition-colors text-sm font-light" href="#">
                Documentation
              </a>
</li>
<li>
<a className="text-zinc-400 hover:text-[#00e5ff] transition-colors text-sm font-light" href="#">
                API Reference
              </a>
</li>
<li>
<a className="text-zinc-400 hover:text-[#00e5ff] transition-colors text-sm font-light" href="#">
                Whitepaper
              </a>
</li>
<li>
<a className="text-zinc-400 hover:text-[#00e5ff] transition-colors text-sm font-light" href="#">
                System Status
              </a>
</li>
</ul>
</div>

<div className="flex flex-col gap-6">
<h4 className="text-white font-normal text-xs uppercase tracking-[0.2em]">
            Dispatch
          </h4>
<p className="text-zinc-500 text-sm font-light leading-relaxed">
            Receive periodic technical updates on spatial computing
            advancements.
          </p>
<form className="flex flex-col gap-3" onsubmit="event.preventDefault();">
<div className="relative flex items-center group">
<input className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00e5ff]/40 focus:bg-white/[0.05] transition-all" placeholder="Email address" type="email"/>
<button className="absolute right-2 p-2 text-zinc-500 hover:text-[#00e5ff] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 7-7 7 7"></path>
<path d="M12 19V5"></path>
</svg>
</button>
</div>
</form>
</div>
</div>

</footer>




    </>
  );
}
