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



      // Set font family precisely
      document.body.style.fontFamily = "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial";

      // Lucide icons
      window.lucide && lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Mobile menu
      const menuBtn = document.getElementById('menuButton');
      const menu = document.getElementById('mobileMenu');
      if (menuBtn) {
        menuBtn.addEventListener('click', () => {
          menu.classList.toggle('hidden');
          const icon = menuBtn.querySelector('svg');
          if (icon) {
            const isOpen = !menu.classList.contains('hidden');
            icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
            lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
          }
        });
      }

      // Event modals
      document.querySelectorAll('[data-modal-target]').forEach(card => {
        card.addEventListener('click', () => {
          const id = card.getAttribute('data-modal-target');
          const modal = document.getElementById(id);
          if (!modal) return;
          modal.classList.remove('hidden');
          modal.classList.add('flex');
        });
      });
      document.querySelectorAll('[data-close]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const modal = e.target.closest('[id^="modal-"]');
          if (!modal) return;
          modal.classList.add('hidden');
          modal.classList.remove('flex');
        });
      });
      // Close modal when clicking backdrop
      document.querySelectorAll('[id^="modal-"]').forEach(modal => {
        modal.addEventListener('click', (e) => {
          if (e.target === modal || e.target.classList.contains('bg-black/70')) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
          }
        });
      });

      // Contact form validation
      const form = document.getElementById('contactForm');
      const status = document.getElementById('formStatus');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const data = new FormData(form);
          const name = String(data.get('name') || '').trim();
          const email = String(data.get('email') || '').trim();
          const message = String(data.get('message') || '').trim();

          if (!name || !email || !message) {
            status.textContent = 'Please fill all fields.';
            status.className = 'text-xs text-red-300';
            return;
          }
          const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
          if (!emailOk) {
            status.textContent = 'Enter a valid email.';
            status.className = 'text-xs text-red-300';
            return;
          }
          status.textContent = 'Message sent successfully. We will get back to you soon.';
          status.className = 'text-xs text-emerald-300';
          form.reset();
        });
      }

      // 3D Hero Scene (Three.js)
      const canvas = document.getElementById('heroCanvas');
      if (canvas && window.THREE) {
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
        camera.position.set(0, 1.2, 3.2);

        // Resize handling for hero section
        function resize() {
          const rect = canvas.parentElement.getBoundingClientRect();
          const w = rect.width;
          const h = rect.height;
          renderer.setSize(w, h, false);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }
        new ResizeObserver(resize).observe(canvas.parentElement);

        // Lights
        const amb = new THREE.AmbientLight(0x88aaff, 0.25);
        scene.add(amb);
        const dir = new THREE.DirectionalLight(0x55ccff, 0.9);
        dir.position.set(2, 3, 2);
        scene.add(dir);
        const dir2 = new THREE.DirectionalLight(0x33ffaa, 0.6);
        dir2.position.set(-2, 1, -1);
        scene.add(dir2);

        // "Microchip" core
        const chipGeo = new THREE.BoxGeometry(1.4, 0.2, 1.0);
        const chipMat = new THREE.MeshStandardMaterial({
          color: 0x0b1224,
          metalness: 0.6,
          roughness: 0.2,
          emissive: 0x0a3b46,
          emissiveIntensity: 0.4
        });
        const chip = new THREE.Mesh(chipGeo, chipMat);
        chip.position.y = 0.2;
        scene.add(chip);

        // Pins around chip
        const pinMat = new THREE.MeshStandardMaterial({ color: 0x0e7490, metalness: 0.8, roughness: 0.3, emissive: 0x0a3b46, emissiveIntensity: 0.7 });
        const pinGeo = new THREE.BoxGeometry(0.05, 0.05, 0.3);
        for (let i = -6; i <= 6; i += 2) {
          const pin1 = new THREE.Mesh(pinGeo, pinMat);
          pin1.position.set(i * 0.08, 0.05, 0.65);
          const pin2 = pin1.clone(); pin2.position.z = -0.65;
          const pin3 = new THREE.Mesh(pinGeo.clone(), pinMat);
          pin3.rotation.y = Math.PI / 2; pin3.position.set(0.7, 0.05, i * 0.08);
          const pin4 = pin3.clone(); pin4.position.x = -0.7;
          scene.add(pin1, pin2, pin3, pin4);
        }

        // Circuit grid plane
        const gridGeo = new THREE.PlaneGeometry(20, 20, 40, 40);
        const gridMat = new THREE.MeshBasicMaterial({ color: 0x0b2a33, wireframe: true, transparent: true, opacity: 0.25 });
        const grid = new THREE.Mesh(gridGeo, gridMat);
        grid.rotation.x = -Math.PI / 2;
        grid.position.y = -0.1;
        scene.add(grid);

        // Glowing circuit lines (random)
        const lines = new THREE.Group();
        const lineMat = new THREE.LineBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.6 });
        for (let k = 0; k < 20; k++) {
          const pts = [];
          let x = (Math.random() - 0.5) * 6;
          let z = (Math.random() - 0.5) * 6;
          pts.push(new THREE.Vector3(x, 0.001, z));
          for (let s = 0; s < 6; s++) {
            const step = Math.random() > 0.5 ? 0.6 : -0.6;
            if (Math.random() > 0.5) x += step; else z += step;
            pts.push(new THREE.Vector3(x, 0.001, z));
          }
          const g = new THREE.BufferGeometry().setFromPoints(pts);
          const ln = new THREE.Line(g, lineMat);
          lines.add(ln);
        }
        scene.add(lines);

        // Floating particles
        const pGeo = new THREE.SphereGeometry(0.01, 8, 8);
        const pMat = new THREE.MeshBasicMaterial({ color: 0x34d399 });
        const particles = new THREE.Group();
        for (let i = 0; i < 120; i++) {
          const p = new THREE.Mesh(pGeo, pMat);
          p.position.set((Math.random() - 0.5) * 6, Math.random() * 1.5 + 0.1, (Math.random() - 0.5) * 6);
          particles.add(p);
        }
        scene.add(particles);

        // Animate
        let t = 0;
        function render() {
          t += 0.01;
          chip.rotation.y += 0.0035;
          chip.position.y = 0.2 + Math.sin(t * 1.2) * 0.03;
          lines.children.forEach((ln, idx) => {
            ln.material.opacity = 0.35 + 0.25 * Math.sin(t * 1.5 + idx);
          });
          particles.children.forEach((p, idx) => {
            p.position.y += Math.sin(t + idx) * 0.0008 + 0.002;
            if (p.position.y > 1.9) p.position.y = 0.1;
          });
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          renderer.render(scene, camera);
          requestAnimationFrame(render);
        }
        resize();
        render();
      }
    
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
      

<div className="fixed inset-0 -z-10 pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] h-[40rem] w-[40rem] rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(closest-side, rgba(34,211,238,0.3), transparent 70%)'}}></div>
<div className="absolute bottom-[-20%] right-[-10%] h-[40rem] w-[40rem] rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(closest-side, rgba(16,185,129,0.25), transparent 70%)'}}></div>
</div>

<header className="sticky top-0 z-40">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="backdrop-blur-xl bg-white/0 supports-[backdrop-filter]:bg-black/30 border border-white/10 rounded-xl mt-4">
<div className="flex items-center justify-between px-4 py-3">
<a className="flex items-center gap-3 group" href="#home">
<div className="h-8 w-8 grid place-items-center rounded-md bg-cyan-500/10 ring-1 ring-cyan-400/30 text-cyan-300 group-hover:bg-cyan-500/20 group-hover:ring-cyan-400/50 transition">
<i className="h-4 w-4" data-lucide="cpu"></i>
</div>
<div className="leading-tight">
<div className="text-base font-semibold tracking-tight">MC • EIE</div>
<div className="text-[11px] text-slate-400 -mt-0.5">Media Club</div>
</div>
</a>
<nav className="hidden md:flex items-center gap-1">
<a className="px-3 py-2 rounded-md text-sm text-slate-300 hover:text-cyan-200 hover:bg-white/5 ring-1 ring-transparent hover:ring-cyan-400/30 transition" href="#home">Home</a>
<a className="px-3 py-2 rounded-md text-sm text-slate-300 hover:text-cyan-200 hover:bg-white/5 ring-1 ring-transparent hover:ring-cyan-400/30 transition" href="#events">Events</a>
<a className="px-3 py-2 rounded-md text-sm text-slate-300 hover:text-cyan-200 hover:bg-white/5 ring-1 ring-transparent hover:ring-cyan-400/30 transition" href="#about">About</a>
<a className="px-3 py-2 rounded-md text-sm text-slate-300 hover:text-cyan-200 hover:bg-white/5 ring-1 ring-transparent hover:ring-cyan-400/30 transition" href="#library">Library</a>
<a className="px-3 py-2 rounded-md text-sm text-slate-300 hover:text-cyan-200 hover:bg-white/5 ring-1 ring-transparent hover:ring-cyan-400/30 transition" href="#contact">Contact</a>
</nav>
<button aria-label="Open Menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-slate-300 hover:text-cyan-200 ring-1 ring-white/10 hover:ring-cyan-400/30 transition" id="menuButton">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
<div className="hidden md:hidden border-t border-white/10 px-4 py-3" id="mobileMenu">
<div className="grid gap-2">
<a className="px-3 py-2 rounded-md text-sm text-slate-300 hover:text-cyan-200 hover:bg-white/5 ring-1 ring-transparent hover:ring-cyan-400/30 transition" href="#home">Home</a>
<a className="px-3 py-2 rounded-md text-sm text-slate-300 hover:text-cyan-200 hover:bg-white/5 ring-1 ring-transparent hover:ring-cyan-400/30 transition" href="#events">Events</a>
<a className="px-3 py-2 rounded-md text-sm text-slate-300 hover:text-cyan-200 hover:bg-white/5 ring-1 ring-transparent hover:ring-cyan-400/30 transition" href="#about">About</a>
<a className="px-3 py-2 rounded-md text-sm text-slate-300 hover:text-cyan-200 hover:bg-white/5 ring-1 ring-transparent hover:ring-cyan-400/30 transition" href="#library">Library</a>
<a className="px-3 py-2 rounded-md text-sm text-slate-300 hover:text-cyan-200 hover:bg-white/5 ring-1 ring-transparent hover:ring-cyan-400/30 transition" href="#contact">Contact</a>
</div>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden" id="home">
<div className="absolute inset-0 -z-10">

<div className="absolute inset-0">
<canvas className="w-full h-full" id="heroCanvas"></canvas>
</div>

<div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '100% 3px'}}></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-20">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="relative">
<div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12px] text-cyan-200 ring-1 ring-cyan-400/30 bg-cyan-500/5">
<i className="h-3.5 w-3.5" data-lucide="radio"></i>
<span>Electronics • Instrumentation • Media</span>
</div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-100">
              Welcome to the Media Club
              <span className="block text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(90deg, #67e8f9, #34d399)'}}>Electronics &amp; Instrumentation</span>
              Engineering Department
            </h1>
<p className="mt-5 text-slate-400 max-w-xl">
              Creative storytellers, engineers, and designers capturing the pulse of circuits, sensors, and systems.
            </p>
<div className="mt-8 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 bg-cyan-500/10 text-cyan-200 ring-1 ring-cyan-400/40 hover:bg-cyan-500/20 hover:ring-cyan-300/60 transition" href="#events">
<i className="h-4 w-4" data-lucide="sparkles"></i>
                Explore Events
              </a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 bg-white/5 text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition" href="#about">
<i className="h-4 w-4" data-lucide="info"></i>
                About Us
              </a>
</div>

<div className="mt-12">
<div className="rounded-xl border border-cyan-400/20 bg-white/5 ring-1 ring-white/5 backdrop-blur supports-[backdrop-filter]:bg-black/30 hover:border-cyan-400/40 transition">
<div className="p-5 sm:p-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 grid place-items-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-400/30 text-emerald-300">
<i className="h-5 w-5" data-lucide="message-square"></i>
</div>
<div>
<div className="text-base font-semibold tracking-tight">Message from HOD</div>
<div className="text-xs text-slate-400">Electronics &amp; Instrumentation</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-300">
                    Our Media Club celebrates innovation, amplifies voices, and curates experiences that bridge engineering with creativity. Join us as we document breakthroughs and inspire the next generation.
                  </p>
<div className="mt-4 text-xs text-slate-400">
                    — Head of Department, EIE
                  </div>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 ring-1 ring-white/5 backdrop-blur">
<div className="rounded-xl overflow-hidden border border-cyan-400/20">
<img alt="Electronics Lab" className="w-full h-72 sm:h-96 object-cover" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 p-3 hover:border-cyan-400/30 hover:bg-white/5 transition">
<div className="text-xs text-slate-400">Focus</div>
<div className="mt-1 text-sm font-medium text-slate-100">Instrumentation</div>
</div>
<div className="rounded-lg border border-white/10 p-3 hover:border-cyan-400/30 hover:bg-white/5 transition">
<div className="text-xs text-slate-400">Creative</div>
<div className="mt-1 text-sm font-medium text-slate-100">Media &amp; Design</div>
</div>
<div className="rounded-lg border border-white/10 p-3 hover:border-cyan-400/30 hover:bg-white/5 transition">
<div className="text-xs text-slate-400">Community</div>
<div className="mt-1 text-sm font-medium text-slate-100">Workshops</div>
</div>
</div>
<div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
<i className="h-4 w-4 text-cyan-300" data-lucide="activity"></i>
                Waveforms • Oscilloscopes • Sensor Stories
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 border-t border-white/10" id="events">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-100">Events</h2>
<p className="mt-2 text-slate-400 text-sm max-w-2xl">Explore previous and recent highlights. Hover to interact and click for details.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md px-3.5 py-2 bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-400/40 hover:bg-emerald-500/20 hover:ring-emerald-300/60 transition" href="#contact">
<i className="h-4 w-4" data-lucide="plus"></i>
            Propose an Event
          </a>
</div>
<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition" data-modal-target="modal-1">
<div className="relative">
<img alt="PCB Workshop" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1555617981-dac3880bde16?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs text-cyan-200">
<i className="h-3.5 w-3.5" data-lucide="calendar"></i>
                12 Aug 2025
              </div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-slate-100">PCB Design Bootcamp</h3>
<i className="h-5 w-5 text-slate-400 group-hover:text-cyan-300 transition" data-lucide="arrow-right"></i>
</div>
<p className="mt-2 text-sm text-slate-400">Hands-on session on KiCad, routing strategies, and DFM tips.</p>
<div className="mt-3 flex items-center gap-2 text-xs text-emerald-300">
<i className="h-3.5 w-3.5" data-lucide="cpu"></i> Completed
              </div>
</div>
</div>
<div className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition" data-modal-target="modal-2">
<div className="relative">
<img alt="Media Day" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs text-cyan-200">
<i className="h-3.5 w-3.5" data-lucide="calendar"></i>
                25 Sep 2025
              </div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Media Day: Capture the Pulse</h3>
<i className="h-5 w-5 text-slate-400 group-hover:text-cyan-300 transition" data-lucide="arrow-right"></i>
</div>
<p className="mt-2 text-sm text-slate-400">Showcase of club films, lab reels, and instrument stories.</p>
<div className="mt-3 flex items-center gap-2 text-xs text-cyan-300">
<i className="h-3.5 w-3.5" data-lucide="activity"></i> Recent
              </div>
</div>
</div>
<div className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition" data-modal-target="modal-3">
<div className="relative">
<img alt="Sensor Hackathon" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs text-cyan-200">
<i className="h-3.5 w-3.5" data-lucide="calendar"></i>
                10 Oct 2025
              </div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Sensor Fusion Hackathon</h3>
<i className="h-5 w-5 text-slate-400 group-hover:text-cyan-300 transition" data-lucide="arrow-right"></i>
</div>
<p className="mt-2 text-sm text-slate-400">Teams build real-time dashboards with IMUs and environmental sensors.</p>
<div className="mt-3 flex items-center gap-2 text-xs text-amber-300">
<i className="h-3.5 w-3.5" data-lucide="clock"></i> Upcoming
              </div>
</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 items-center justify-center p-4" id="modal-1">
<div className="absolute inset-0 bg-black/70"></div>
<div className="relative w-full max-w-2xl rounded-2xl border border-cyan-400/30 bg-[#0a0f1f] p-6 ring-1 ring-white/10">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-100">PCB Design Bootcamp</h3>
<p className="mt-1 text-sm text-slate-400">12 Aug 2025 • Completed</p>
</div>
<button className="h-9 w-9 grid place-items-center rounded-md ring-1 ring-white/10 hover:ring-cyan-400/40 hover:text-cyan-200 transition" data-close="">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<img alt="PCB" className="rounded-lg border border-white/10 object-cover h-48 w-full" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="text-sm text-slate-300">
              Hands-on KiCad sprints, routing constraints, ground planes, and manufacturing handoff. Participants produced 2-layer boards and learned DRC best practices.
              <ul className="mt-3 space-y-1 text-slate-400 list-disc pl-5">
<li>Footprints &amp; libraries</li>
<li>ERC/DRC &amp; fabrication files</li>
<li>Soldering lab demo</li>
</ul>
<div className="mt-4 flex items-center gap-2 text-emerald-300 text-xs">
<i className="h-3.5 w-3.5" data-lucide="badge-check"></i> Certificates issued
              </div>
</div>
</div>
</div>
</div>
<div className="hidden fixed inset-0 z-50 items-center justify-center p-4" id="modal-2">
<div className="absolute inset-0 bg-black/70"></div>
<div className="relative w-full max-w-2xl rounded-2xl border border-cyan-400/30 bg-[#0a0f1f] p-6 ring-1 ring-white/10">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-100">Media Day: Capture the Pulse</h3>
<p className="mt-1 text-sm text-slate-400">25 Sep 2025 • Recent</p>
</div>
<button className="h-9 w-9 grid place-items-center rounded-md ring-1 ring-white/10 hover:ring-cyan-400/40 hover:text-cyan-200 transition" data-close="">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<img alt="Media Day" className="rounded-lg border border-white/10 object-cover h-48 w-full" src="https://images.unsplash.com/photo-1475738972911-5b44ce984c42?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="text-sm text-slate-300">
              A curated screening of short films, lab reels, and interviews with innovators. Lighting rigs and audio setups transformed the lab into a studio.
              <ul className="mt-3 space-y-1 text-slate-400 list-disc pl-5">
<li>Director’s talk</li>
<li>Instrument storytelling</li>
<li>Post-production workshop</li>
</ul>
<div className="mt-4 flex items-center gap-2 text-cyan-300 text-xs">
<i className="h-3.5 w-3.5" data-lucide="video"></i> Highlights posted
              </div>
</div>
</div>
</div>
</div>
<div className="hidden fixed inset-0 z-50 items-center justify-center p-4" id="modal-3">
<div className="absolute inset-0 bg-black/70"></div>
<div className="relative w-full max-w-2xl rounded-2xl border border-cyan-400/30 bg-[#0a0f1f] p-6 ring-1 ring-white/10">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-100">Sensor Fusion Hackathon</h3>
<p className="mt-1 text-sm text-slate-400">10 Oct 2025 • Upcoming</p>
</div>
<button className="h-9 w-9 grid place-items-center rounded-md ring-1 ring-white/10 hover:ring-cyan-400/40 hover:text-cyan-200 transition" data-close="">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<img alt="Hackathon" className="rounded-lg border border-white/10 object-cover h-48 w-full" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="text-sm text-slate-300">
              Teams integrate IMU, temperature, and environmental sensors to stream real-time metrics, visualize waveforms, and implement simple filters.
              <ul className="mt-3 space-y-1 text-slate-400 list-disc pl-5">
<li>Streaming dashboards</li>
<li>Kalman intuition</li>
<li>Best hardware practices</li>
</ul>
<div className="mt-4 flex items-center gap-2 text-amber-300 text-xs">
<i className="h-3.5 w-3.5" data-lucide="alarm-clock"></i> Registrations open soon
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 border-t border-white/10" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-100">About the Club</h2>
<p className="mt-3 text-slate-400 text-sm">
              We’re a multidisciplinary student collective exploring the intersection of electronics, instrumentation, and media. From documenting labs and building narratives around instruments to designing interactive installations, we turn engineering into stories.
            </p>

<div className="mt-6 grid sm:grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 p-4 hover:border-cyan-400/30 hover:bg-white/5 transition">
<div className="flex items-center gap-2 text-cyan-300">
<i className="h-4 w-4" data-lucide="waveform"></i>
<span className="text-sm font-medium">Waveforms</span>
</div>
<p className="mt-2 text-xs text-slate-400">Signal visuals, oscilloscopes, FFT frames.</p>
</div>
<div className="rounded-lg border border-white/10 p-4 hover:border-emerald-400/30 hover:bg-white/5 transition">
<div className="flex items-center gap-2 text-emerald-300">
<i className="h-4 w-4" data-lucide="film"></i>
<span className="text-sm font-medium">Cinematics</span>
</div>
<p className="mt-2 text-xs text-slate-400">Reels, lab tours, storytelling edits.</p>
</div>
<div className="rounded-lg border border-white/10 p-4 hover:border-cyan-400/30 hover:bg-white/5 transition">
<div className="flex items-center gap-2 text-cyan-300">
<i className="h-4 w-4" data-lucide="sparkles"></i>
<span className="text-sm font-medium">Showcases</span>
</div>
<p className="mt-2 text-xs text-slate-400">Demos, exhibits, project highlights.</p>
</div>
</div>
</div>

<div className="space-y-8">
<div>
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-slate-100">Faculty Members</h3>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/30 hover:translate-y-[-2px] transition">
<div className="flex items-center gap-3">
<img alt="Faculty 1" className="h-12 w-12 rounded-lg object-cover border border-white/10" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-100">Dr. A. Sharma</div>
<div className="text-xs text-slate-400">Professor, EIE</div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/30 hover:translate-y-[-2px] transition">
<div className="flex items-center gap-3">
<img alt="Faculty 2" className="h-12 w-12 rounded-lg object-cover border border-white/10" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-100">Ms. R. Iyer</div>
<div className="text-xs text-slate-400">Assistant Professor, EIE</div>
</div>
</div>
</div>
</div>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-slate-100">Committee Members</h3>
<div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-emerald-400/30 hover:translate-y-[-2px] transition">
<img alt="Chair" className="h-12 w-12 rounded-lg object-cover border border-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="mt-2 text-sm font-medium text-slate-100">Arjun Patel</div>
<div className="text-xs text-slate-400">Chair</div>
<a className="mt-2 inline-flex items-center gap-1 text-xs text-cyan-300 hover:text-cyan-200" href="mailto:arjun@example.com">
<i className="h-3.5 w-3.5" data-lucide="mail"></i> arjun@example.com
                  </a>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-emerald-400/30 hover:translate-y-[-2px] transition">
<img alt="Vice Chair" className="h-12 w-12 rounded-lg object-cover border border-white/10" src="https://images.unsplash.com/photo-1547425260-4a1f3c7c8e9a?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="mt-2 text-sm font-medium text-slate-100">Sara Khan</div>
<div className="text-xs text-slate-400">Vice Chair</div>
<a className="mt-2 inline-flex items-center gap-1 text-xs text-cyan-300 hover:text-cyan-200" href="mailto:sara@example.com">
<i className="h-3.5 w-3.5" data-lucide="mail"></i> sara@example.com
                  </a>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-emerald-400/30 hover:translate-y-[-2px] transition">
<img alt="Coordinator" className="h-12 w-12 rounded-lg object-cover border border-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="mt-2 text-sm font-medium text-slate-100">Nikhil Rao</div>
<div className="text-xs text-slate-400">Media Coordinator</div>
<a className="mt-2 inline-flex items-center gap-1 text-xs text-cyan-300 hover:text-cyan-200" href="mailto:nikhil@example.com">
<i className="h-3.5 w-3.5" data-lucide="mail"></i> nikhil@example.com
                  </a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 border-t border-white/10" id="library">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-100">Digital Library</h2>
<p className="mt-2 text-slate-400 text-sm max-w-2xl">Curated PDFs, journals, and study materials for EIE enthusiasts.</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
<i className="h-4 w-4 text-cyan-300" data-lucide="download"></i> Click download or view online
          </div>
</div>
<div className="mt-8 grid gap-4">

<div className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/30 transition">
<div className="flex items-center gap-4">
<div className="h-10 w-10 grid place-items-center rounded-md bg-cyan-500/10 ring-1 ring-cyan-400/30 text-cyan-300">
<i className="h-5 w-5" data-lucide="file-text"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-100">Sensors &amp; Instrumentation Notes (V Sem)</div>
<div className="text-xs text-slate-400">PDF • 3.2 MB</div>
</div>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-cyan-400/30 transition" href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank">
<i className="h-4 w-4" data-lucide="external-link"></i> View
              </a>
<a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs bg-cyan-500/10 text-cyan-200 ring-1 ring-cyan-400/40 hover:bg-cyan-500/20 hover:ring-cyan-300/60 transition" download="" href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
<i className="h-4 w-4" data-lucide="download"></i> Download
              </a>
</div>
</div>
<div className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/30 transition">
<div className="flex items-center gap-4">
<div className="h-10 w-10 grid place-items-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-400/30 text-emerald-300">
<i className="h-5 w-5" data-lucide="book-open"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-100">Journal: Signal Processing &amp; Measurement</div>
<div className="text-xs text-slate-400">PDF • 6.8 MB</div>
</div>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-cyan-400/30 transition" href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank">
<i className="h-4 w-4" data-lucide="external-link"></i> View
              </a>
<a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs bg-cyan-500/10 text-cyan-200 ring-1 ring-cyan-400/40 hover:bg-cyan-500/20 hover:ring-cyan-300/60 transition" download="" href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
<i className="h-4 w-4" data-lucide="download"></i> Download
              </a>
</div>
</div>
<div className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/30 transition">
<div className="flex items-center gap-4">
<div className="h-10 w-10 grid place-items-center rounded-md bg-cyan-500/10 ring-1 ring-cyan-400/30 text-cyan-300">
<i className="h-5 w-5" data-lucide="file-chart-column-increasing"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-100">Lab Manual: Oscilloscope &amp; DAQ</div>
<div className="text-xs text-slate-400">PDF • 2.1 MB</div>
</div>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-cyan-400/30 transition" href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank">
<i className="h-4 w-4" data-lucide="external-link"></i> View
              </a>
<a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs bg-cyan-500/10 text-cyan-200 ring-1 ring-cyan-400/40 hover:bg-cyan-500/20 hover:ring-cyan-300/60 transition" download="" href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
<i className="h-4 w-4" data-lucide="download"></i> Download
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 border-t border-white/10" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-100">Contact Us</h2>
<p className="mt-2 text-slate-400 text-sm">Have questions, ideas, or want to collaborate? Send us a note.</p>
<form className="mt-6 space-y-4" id="contactForm">
<div>
<label className="text-xs text-slate-400">Name</label>
<input className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400/30" name="name" placeholder="Your full name" required="" type="text"/>
</div>
<div>
<label className="text-xs text-slate-400">Email</label>
<input className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400/30" name="email" placeholder="you@domain.com" required="" type="email"/>
</div>
<div>
<label className="text-xs text-slate-400">Message</label>
<textarea className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400/30" name="message" placeholder="Tell us more..." required="" rows="5"></textarea>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-400/40 hover:bg-emerald-500/20 hover:ring-emerald-300/60 transition" type="submit">
<i className="h-4 w-4" data-lucide="send"></i>
                  Send Message
                </button>
<p className="text-xs text-slate-400" id="formStatus"></p>
</div>
</form>

<div className="mt-8">
<div className="text-xs text-slate-400">Follow us</div>
<div className="mt-2 flex items-center gap-2">
<a className="h-9 w-9 grid place-items-center rounded-md ring-1 ring-white/10 hover:ring-cyan-400/30 hover:text-cyan-200 transition" href="#">
<i className="h-4.5 w-4.5" data-lucide="instagram"></i>
</a>
<a className="h-9 w-9 grid place-items-center rounded-md ring-1 ring-white/10 hover:ring-cyan-400/30 hover:text-cyan-200 transition" href="#">
<i className="h-4.5 w-4.5" data-lucide="twitter"></i>
</a>
<a className="h-9 w-9 grid place-items-center rounded-md ring-1 ring-white/10 hover:ring-cyan-400/30 hover:text-cyan-200 transition" href="#">
<i className="h-4.5 w-4.5" data-lucide="linkedin"></i>
</a>
<a className="h-9 w-9 grid place-items-center rounded-md ring-1 ring-white/10 hover:ring-cyan-400/30 hover:text-cyan-200 transition" href="#">
<i className="h-4.5 w-4.5" data-lucide="youtube"></i>
</a>
</div>
</div>
</div>

<div className="relative rounded-2xl border border-white/10 bg-white/5 p-4 ring-1 ring-white/10 overflow-hidden">
<div className="rounded-xl overflow-hidden border border-cyan-400/20 relative">
<img alt="Circuit Board" className="w-full h-80 object-cover" src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs text-cyan-300">
<i className="h-4 w-4" data-lucide="radio-tower"></i>
                Broadcasting creativity from the lab
              </div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 p-3">
<div className="text-xs text-slate-400">Email</div>
<div className="mt-1 text-sm text-slate-100">mediaclub@eie.edu</div>
</div>
<div className="rounded-lg border border-white/10 p-3">
<div className="text-xs text-slate-400">Location</div>
<div className="mt-1 text-sm text-slate-100">EIE Block, Campus</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-10 grid sm:grid-cols-3 gap-6">
<div>
<div className="flex items-center gap-2">
<div className="h-8 w-8 grid place-items-center rounded-md bg-cyan-500/10 ring-1 ring-cyan-400/30 text-cyan-300">
<i className="h-4 w-4" data-lucide="chip"></i>
</div>
<div className="text-base font-semibold tracking-tight">MC • EIE</div>
</div>
<p className="mt-3 text-xs text-slate-400 max-w-xs">A platform for creative engineering—capturing signals, sensors, and stories.</p>
</div>
<div>
<div className="text-sm font-medium text-slate-200">Quick Links</div>
<div className="mt-3 grid text-sm text-slate-400 gap-1.5">
<a className="hover:text-cyan-200 transition" href="#home">Home</a>
<a className="hover:text-cyan-200 transition" href="#events">Events</a>
<a className="hover:text-cyan-200 transition" href="#about">About</a>
<a className="hover:text-cyan-200 transition" href="#library">Library</a>
<a className="hover:text-cyan-200 transition" href="#contact">Contact</a>
</div>
</div>
<div>
<div className="text-sm font-medium text-slate-200">Contact</div>
<div className="mt-3 text-sm text-slate-400">
              mediaclub@eie.edu<br/>
              EIE Department, Campus
            </div>
</div>
</div>
<div className="py-4 flex items-center justify-between border-t border-white/10 text-xs text-slate-500">
<span>© <span id="year"></span> Media Club • EIE</span>
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="shield"></i> All rights reserved
          </span>
</div>
</div>
</footer>



    </>
  );
}
