import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    lucide.createIcons();

    function generateBoxShadows(n, color) {
      let value = '';
      for (let i = 0; i < n; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        value += `${x}px ${y}px ${color}`;
        if (i < n - 1) value += ', ';
      }
      return value;
    }
    document.getElementById('stars-small').style.boxShadow = generateBoxShadows(350, '#ffffff');
    document.getElementById('stars-medium').style.boxShadow = generateBoxShadows(100, '#ffffff');
    document.getElementById('stars-big').style.boxShadow = generateBoxShadows(40, '#ffffff');

    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById('scroll-progress').style.width = scrolled + "%";
    }, { passive: true });

    (function () {
      const el = document.getElementById('micro-tip');
      if (!el) return;

      const tips = [
        "Menos seguimiento manual. Más claridad cada día.",
        "Desliza para descubrir cómo funciona.",
        "Si quieres verlo en tu caso: solicita demo y lo adaptamos a tu flujo."
      ];
      let i = 0;

      setInterval(() => {
        i = (i + 1) % tips.length;
        el.classList.add('opacity-0');
        setTimeout(() => {
          el.textContent = tips[i];
          el.classList.remove('opacity-0');
        }, 220);
      }, 4200);
    })();

    (function () {
      const arena = document.getElementById('ai-arena');
      if (!arena) return;

      const center = document.getElementById('ai-center-pill');

      const pills = [
        document.getElementById('pill-openai'),
        document.getElementById('pill-claude'),
        document.getElementById('pill-gemini'),
        document.getElementById('pill-lovable')
      ].filter(Boolean);

      if (!pills.length) return;

      const refreshLucide = () => { try { lucide.createIcons(); } catch (e) {} };
      requestAnimationFrame(refreshLucide);
      setTimeout(refreshLucide, 150);

      const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const items = pills.map((el, i) => ({
        el,
        x: 0, y: 0,
        vx: 0, vy: 0,
        w: 0, h: 0,
        r: 0
      }));

      function rand(min, max) { return min + Math.random() * (max - min); }

      function measure() {
        const rect = arena.getBoundingClientRect();
        const aw = rect.width;
        const ah = rect.height;

        items.forEach((it) => {
          const pr = it.el.getBoundingClientRect();
          it.w = pr.width;
          it.h = pr.height;
          it.r = Math.max(it.w, it.h) / 2;
        });

        let centerObstacle = null;
        if (center) {
          const cr = center.getBoundingClientRect();
          const ar = arena.getBoundingClientRect();
          centerObstacle = {
            x: (cr.left - ar.left) + cr.width / 2,
            y: (cr.top - ar.top) + cr.height / 2,
            r: Math.max(cr.width, cr.height) / 2 + 10
          };
        }

        items.forEach((it, idx) => {
          const speed = prefersReduced ? 0 : rand(0.9, 1.3);
          const angle = rand(0, Math.PI * 2);
          it.vx = Math.cos(angle) * speed;
          it.vy = Math.sin(angle) * speed;

          const pad = Math.max(12, it.r * 0.6);
          const minX = pad;
          const maxX = Math.max(pad, aw - pad);
          const minY = pad;
          const maxY = Math.max(pad, ah - pad);

          it.x = rand(minX, maxX);
          it.y = rand(minY, maxY);

          if (centerObstacle) {
            const dx = it.x - centerObstacle.x;
            const dy = it.y - centerObstacle.y;
            const d = Math.hypot(dx, dy) || 1;
            const minD = it.r + centerObstacle.r;
            if (d < minD) {
              const k = (minD - d) + 6;
              it.x += (dx / d) * k;
              it.y += (dy / d) * k;
            }
          }

          it.x = Math.min(maxX, Math.max(minX, it.x));
          it.y = Math.min(maxY, Math.max(minY, it.y));
          it.el.style.transform = `translate3d(${it.x - it.w / 2}px, ${it.y - it.h / 2}px, 0)`;
        });

        return { aw, ah, centerObstacle };
      }

      let dims = null;
      function ensureMeasured() {
        let tries = 0;
        const go = () => {
          const rect = arena.getBoundingClientRect();
          if ((rect.width <= 2 || rect.height <= 2) && tries < 20) {
            tries++;
            requestAnimationFrame(go);
            return;
          }
          dims = measure();
        };
        go();
      }
      ensureMeasured();
      window.addEventListener('resize', () => { dims = measure(); }, { passive: true });

      function collideCircle(a, b) {
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.hypot(dx, dy) || 0.0001;
        const minDist = a.r + b.r;

        if (dist >= minDist) return;

        const overlap = (minDist - dist) + 0.2;
        const nx = dx / dist;
        const ny = dy / dist;

        a.x -= nx * overlap * 0.5;
        a.y -= ny * overlap * 0.5;
        b.x += nx * overlap * 0.5;
        b.y += ny * overlap * 0.5;

        const relVx = b.vx - a.vx;
        const relVy = b.vy - a.vy;
        const relVelAlongNormal = relVx * nx + relVy * ny;

        if (relVelAlongNormal > 0) return;

        const restitution = 0.95;
        const impulse = -(1 + restitution) * relVelAlongNormal / 2;

        const ix = impulse * nx;
        const iy = impulse * ny;

        a.vx -= ix;
        a.vy -= iy;
        b.vx += ix;
        b.vy += iy;
      }

      function collideWithWalls(it, aw, ah) {
        const pad = Math.max(8, it.r * 0.25);
        const minX = pad;
        const maxX = aw - pad;
        const minY = pad;
        const maxY = ah - pad;

        if (it.x - it.r < minX) { it.x = minX + it.r; it.vx *= -1; }
        if (it.x + it.r > maxX) { it.x = maxX - it.r; it.vx *= -1; }
        if (it.y - it.r < minY) { it.y = minY + it.r; it.vy *= -1; }
        if (it.y + it.r > maxY) { it.y = maxY - it.r; it.vy *= -1; }
      }

      function collideWithCenter(it, obstacle) {
        if (!obstacle) return;
        const dx = it.x - obstacle.x;
        const dy = it.y - obstacle.y;
        const dist = Math.hypot(dx, dy) || 0.0001;
        const minDist = it.r + obstacle.r;

        if (dist >= minDist) return;

        const nx = dx / dist;
        const ny = dy / dist;
        const overlap = (minDist - dist) + 0.4;

        it.x += nx * overlap;
        it.y += ny * overlap;

        const dot = it.vx * nx + it.vy * ny;
        it.vx = it.vx - 2 * dot * nx;
        it.vy = it.vy - 2 * dot * ny;
        it.vx *= 0.98;
        it.vy *= 0.98;
      }

      let last = performance.now();
      function tick(t) {
        if (!dims) { requestAnimationFrame(tick); return; }

        const dt = Math.min(32, t - last);
        last = t;

        const { aw, ah, centerObstacle } = dims;

        const step = prefersReduced ? 0 : (dt / 16.67);

        items.forEach((it) => {
          it.x += it.vx * step;
          it.y += it.vy * step;

          it.vx *= 0.999;
          it.vy *= 0.999;

          collideWithCenter(it, centerObstacle);
          collideWithWalls(it, aw, ah);
        });

        for (let i = 0; i < items.length; i++) {
          for (let j = i + 1; j < items.length; j++) {
            collideCircle(items[i], items[j]);
          }
        }

        items.forEach((it) => {
          it.x = Math.min(aw - it.r, Math.max(it.r, it.x));
          it.y = Math.min(ah - it.r, Math.max(it.r, it.y));
          it.el.style.transform = `translate3d(${it.x - it.w / 2}px, ${it.y - it.h / 2}px, 0)`;
        });

        requestAnimationFrame(tick);
      }

      let startTries = 0;
      const start = () => {
        const rect = arena.getBoundingClientRect();
        if ((rect.width <= 2 || rect.height <= 2) && startTries < 30) {
          startTries++;
          requestAnimationFrame(start);
          return;
        }
        if (!dims) dims = measure();
        requestAnimationFrame((tt) => { last = tt; requestAnimationFrame(tick); });
      };
      start();
    })();

    (function() {
      const canvas = document.getElementById('globe-canvas');
      const loader = document.getElementById('globe-loader');
      const container = document.getElementById('globe-container');
      if (!canvas || !container) return;

      const context = canvas.getContext('2d', { alpha: true });
      let width = container.clientWidth;
      let height = container.clientHeight;
      let radius = Math.min(width, height) / 2.2;

      let allDots = [];
      let rotation = [0, 0];

      const projection = d3.geoOrthographic().scale(radius).translate([width / 2, height / 2]).clipAngle(90);
      const path = d3.geoPath().projection(projection).context(context);

      function resize() {
        width = container.clientWidth;
        height = container.clientHeight;
        radius = Math.min(width, height) / 2.2;
        const dpr = window.devicePixelRatio || 1;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        context.setTransform(1, 0, 0, 1, 0, 0);
        context.scale(dpr, dpr);

        projection.scale(radius).translate([width / 2, height / 2]);
        render();
      }
      window.addEventListener('resize', resize, { passive: true });
      resize();

      function render() {
        context.clearRect(0, 0, width, height);
        const currentScale = projection.scale();
        const scaleFactor = currentScale / radius;

        context.beginPath();
        context.arc(width / 2, height / 2, currentScale, 0, 2 * Math.PI);
        context.strokeStyle = "rgba(55, 207, 134, 0.1)";
        context.lineWidth = 1 * scaleFactor;
        context.stroke();

        const graticule = d3.geoGraticule();
        context.beginPath();
        path(graticule());
        context.strokeStyle = "rgba(255,255,255,0.05)";
        context.lineWidth = 0.5 * scaleFactor;
        context.stroke();

        allDots.forEach((dot) => {
          const projected = projection([dot.lng, dot.lat]);
          if (!projected) return;
          context.beginPath();
          context.arc(projected[0], projected[1], 1.2 * scaleFactor, 0, 2 * Math.PI);
          context.fillStyle = "#37CF86";
          context.fill();
        });
      }

      (function initDots() {
        allDots = [];
        for (let i = 0; i < 600; i++) {
          allDots.push({ lng: Math.random() * 360 - 180, lat: Math.random() * 160 - 80 });
        }
      })();

      if (loader) loader.style.display = 'none';
      canvas.classList.add('loaded');

      d3.timer(() => {
        rotation[0] += 0.3;
        projection.rotate(rotation);
        render();
      });
    })();

    (function () {
      const layer = document.getElementById('cursor-trail');
      if (!layer) return;

      const dots = [
        document.getElementById('cursor-dot-a'),
        document.getElementById('cursor-dot-b'),
        document.getElementById('cursor-dot-c'),
        document.getElementById('cursor-dot-d'),
        document.getElementById('cursor-dot-e'),
      ].filter(Boolean);

      if (!dots.length) return;

      const colors = [
        'rgba(55, 207, 134, 0.95)',
        'rgba(55, 207, 134, 0.7)',
        'rgba(255, 182, 0, 0.55)',
        'rgba(255, 182, 0, 0.35)',
        'rgba(255, 255, 255, 0.12)',
      ];

      const shadows = [
        '0 0 18px rgba(55, 207, 134, 0.35)',
        '0 0 16px rgba(55, 207, 134, 0.24)',
        '0 0 16px rgba(255, 182, 0, 0.22)',
        '0 0 14px rgba(255, 182, 0, 0.14)',
        '0 0 10px rgba(255, 255, 255, 0.10)',
      ];

      dots.forEach((d, i) => {
        d.style.background = colors[i] || colors[0];
        d.style.boxShadow = shadows[i] || shadows[0];
        d.style.transform = 'translate(-9999px, -9999px)';
        d.style.opacity = '0';
        d.style.transition = 'opacity 250ms ease';
      });

      const state = dots.map(() => ({ x: -9999, y: -9999 }));
      let targetX = -9999, targetY = -9999;
      let active = false;

      function onMove(e) {
        targetX = e.clientX;
        targetY = e.clientY;
        if (!active) {
          active = true;
          dots.forEach(d => d.style.opacity = '1');
        }
      }

      function onLeave() {
        active = false;
        dots.forEach(d => d.style.opacity = '0');
      }

      window.addEventListener('mousemove', onMove, { passive: true });
      window.addEventListener('mouseleave', onLeave, { passive: true });

      function tick() {
        let x = targetX;
        let y = targetY;

        for (let i = 0; i < dots.length; i++) {
          const p = state[i];
          const ease = 0.22 - i * 0.03;

          p.x += (x - p.x) * Math.max(0.08, ease);
          p.y += (y - p.y) * Math.max(0.08, ease);

          const d = dots[i];
          d.style.transform = `translate(${p.x - 4}px, ${p.y - 4}px)`;

          x = p.x;
          y = p.y;
        }

        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    })();

    (function () {
      const form = document.getElementById('demo-form');
      if (!form) return;

      const status = document.getElementById('form-status');
      const statusIcon = document.getElementById('status-icon');
      const statusTitle = document.getElementById('status-title');
      const statusBody = document.getElementById('status-body');

      const btn = document.getElementById('submit-btn');
      const btnLabel = document.getElementById('submit-label');

      const ENDPOINT = "";

      function setStatus(type, title, body) {
        status.classList.remove('hidden');
        statusTitle.textContent = title;
        statusBody.textContent = body;

        statusIcon.className = "mt-0.5 w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center";
        if (type === 'success') {
          statusIcon.classList.add("text-[#37CF86]");
          statusIcon.innerHTML = '<i data-lucide="check" stroke-width="1.5" class="w-5 h-5"></i>';
        } else if (type === 'error') {
          statusIcon.classList.add("text-red-300");
          statusIcon.innerHTML = '<i data-lucide="x" stroke-width="1.5" class="w-5 h-5"></i>';
        } else {
          statusIcon.classList.add("text-zinc-200");
          statusIcon.innerHTML = '<i data-lucide="loader-circle" stroke-width="1.5" class="w-5 h-5 animate-spin"></i>';
        }
        lucide.createIcons();
      }

      function setLoading(isLoading) {
        btn.disabled = isLoading;
        btn.classList.toggle('opacity-70', isLoading);
        btn.classList.toggle('cursor-not-allowed', isLoading);
        btnLabel.textContent = isLoading ? "Enviando..." : "Solicitar acceso";
      }

      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!form.reportValidity()) return;

        const data = {
          nombre: document.getElementById('f-nombre')?.value?.trim() || "",
          empresa: document.getElementById('f-empresa')?.value?.trim() || "",
          email: document.getElementById('f-email')?.value?.trim() || "",
          mensaje: document.getElementById('f-mensaje')?.value?.trim() || "",
          source: "web"
        };

        setLoading(true);
        setStatus('loading', "Enviando solicitud", "Un momento...");

        try {
          if (ENDPOINT) {
            const res = await fetch(ENDPOINT, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data)
            });
            if (!res.ok) throw new Error("bad_response");
          } else {
            await new Promise(r => setTimeout(r, 650));
          }

          setStatus('success', "Solicitud enviada", "Te contactaremos en breve.");
          form.reset();
        } catch (err) {
          setStatus('error', "No se pudo enviar", "Inténtalo de nuevo o escríbenos a pedro@prossium.com.");
        } finally {
          setLoading(false);
        }
      });
    })();

    (function () {
      const kill = () => {
        const candidates = Array.from(document.querySelectorAll('a, div, span, button'))
          .filter(el => (el.textContent || '').toLowerCase().includes('made in aura'));
        candidates.forEach(el => el.remove());
      };
      kill();
      const obs = new MutationObserver(kill);
      obs.observe(document.documentElement, { childList: true, subtree: true });
      setTimeout(() => obs.disconnect(), 8000);
    })();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="pointer-events-none fixed inset-0 z-[80] hidden md:block" id="cursor-trail">
<div className="absolute w-2 h-2 rounded-full opacity-0" id="cursor-dot-a" style={{background: 'rgba(55, 207, 134, 0.95)', boxShadow: 'rgba(55, 207, 134, 0.35) 0px 0px 18px', transition: 'opacity 250ms'}}></div>
<div className="absolute w-2 h-2 rounded-full opacity-0" id="cursor-dot-b" style={{background: 'rgba(55, 207, 134, 0.7)', boxShadow: 'rgba(55, 207, 134, 0.24) 0px 0px 16px', transition: 'opacity 250ms'}}></div>
<div className="absolute w-2 h-2 rounded-full opacity-0" id="cursor-dot-c" style={{background: 'rgba(255, 182, 0, 0.55)', boxShadow: 'rgba(255, 182, 0, 0.22) 0px 0px 16px', transition: 'opacity 250ms'}}></div>
<div className="absolute w-2 h-2 rounded-full opacity-0" id="cursor-dot-d" style={{background: 'rgba(255, 182, 0, 0.35)', boxShadow: 'rgba(255, 182, 0, 0.14) 0px 0px 14px', transition: 'opacity 250ms'}}></div>
<div className="absolute w-2 h-2 rounded-full opacity-0" id="cursor-dot-e" style={{background: 'rgba(255, 255, 255, 0.12)', boxShadow: 'rgba(255, 255, 255, 0.1) 0px 0px 10px', transition: 'opacity 250ms'}}></div>
</div>
<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#051a0f_0%,_#000000_100%)]"></div>
<div className="absolute inset-0 w-[1px] h-[1px] bg-transparent animate-[animStar_100s_linear_infinite] optimize-gpu" id="stars-small"></div>
<div className="absolute inset-0 w-[2px] h-[2px] bg-transparent animate-[animStar_150s_linear_infinite] optimize-gpu" id="stars-medium"></div>
<div className="absolute inset-0 w-[3px] h-[3px] bg-transparent animate-[animStar_200s_linear_infinite] optimize-gpu" id="stars-big"></div>
<div className="absolute inset-0 bg-grid-pattern z-[1] opacity-60"></div>
<div className="absolute top-[-10%] left-[20%] w-[32rem] h-[32rem] bg-[#37CF86]/10 rounded-full blur-[7.5rem] mix-blend-screen"></div>
<div className="absolute bottom-[10%] right-[10%] w-[26rem] h-[26rem] bg-[#FFB600]/10 rounded-full blur-[6.5rem] mix-blend-screen"></div>
</div>
<div className="fixed top-0 left-0 w-full h-0.5 z-[60]">
<div className="h-full bg-[#37CF86] w-0 transition-all duration-100 ease-out shadow-[0_0_10px_#37CF86]" id="scroll-progress"></div>
</div>
<header className="fixed top-0 w-full z-50 pt-6 px-4">
<div className="max-w-[90rem] mx-auto">
<nav className="flex shadow-black/50 transition-all duration-300 bg-center bg-black/60 border-white/10 border rounded-[2rem] px-6 py-2 shadow-md backdrop-blur-xl items-center justify-between">
<div className="flex items-center gap-4 md:gap-8 min-w-0">
<div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center border border-white/10 shadow-inner shrink-0">
<img alt="Logo Prossium" className="w-10 h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cfacc694-0091-432e-8bf7-b8ede6be8912_3840w.png"/>
</div>
<div className="hidden xs:block min-w-0">
<span className="text-xl md:text-2xl font-manrope tracking-[0.2em] text-white font-light whitespace-nowrap">
              PRO<span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#37CF86] to-[#FFB600]">SS</span>IUM
            </span>
</div>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="hover:text-white transition-colors duration-300 text-lg text-zinc-400" href="#accueil">Inicio</a>
<a className="hover:text-white transition-colors duration-300 text-lg text-zinc-400" href="#technologie">Tecnología</a>
<a className="hover:text-white transition-colors duration-300 text-lg text-zinc-400" href="#applications">Casos de uso</a>
<a className="hover:text-white transition-colors duration-300 text-lg text-zinc-400" href="#pricing">Adaptabilidad</a>
<a className="hover:text-white transition-colors duration-300 text-lg text-zinc-400" href="#contact">Contacto</a>
</div>
<div className="flex items-center gap-4 shrink-0">
<span className="hidden sm:block hover:text-white cursor-pointer transition-colors text-base font-medium text-zinc-500">ES</span>
<a className="shiny-cta px-6 py-2.5 text-base font-medium uppercase tracking-wider text-white group flex items-center gap-2 shrink-0" href="#contact">
<span>DEMO</span>
<i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</nav>
</div>
</header>
<main className="flex-1 overflow-hidden relative" id="accueil">
<div className="min-h-screen flex items-center pt-32 pb-12 lg:pt-36 lg:pb-16 px-6 md:px-12 lg:px-16 z-10 w-full">
<div className="max-w-[90rem] mx-auto w-full grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
<div className="lg:col-span-7 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-20 relative w-full order-1">
<h1 className="leading-[1.08] text-balance text-5xl sm:text-6xl lg:text-7xl xl:text-[4.75rem] font-normal text-white tracking-tight font-manrope mb-6 drop-shadow-2xl">
            La plataforma de <span className="text-[#37CF86]">inteligencia</span> <span className="text-[#FFB600]">artificial</span> de tu empresa
          </h1>
<div className="flex flex-col gap-3 mb-8 max-w-2xl w-full">
<p className="leading-relaxed text-balance text-xl sm:text-2xl font-light text-zinc-300/90 tracking-tight">
              Conecta los datos, proyectos y procesos de tu negocio en un único sistema para entender lo que ocurre y dirigir tu empresa en chat.
            </p>
</div>
<div className="w-full max-w-2xl mb-10">
<div className="border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl px-5 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 min-h-[5.5rem] sm:min-h-[3.5rem]">
<div className="flex items-center gap-2 text-sm text-zinc-400 shrink-0">
<i className="w-4 h-4 text-[#37CF86]" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="uppercase tracking-wider text-zinc-500 font-medium text-xs">Tip rápido</span>
</div>
<div className="flex-1 flex sm:justify-end items-center">
<p className="text-sm sm:text-base font-light text-zinc-200/90 tracking-tight text-left sm:text-right transition-opacity duration-200" id="micro-tip">Menos seguimiento manual. Más claridad cada día.</p>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="bg-[#37CF86] sm:w-auto group hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 font-medium text-black tracking-wide w-full rounded-full py-3.5 px-8 relative shadow-[0_0_30px_-10px_rgba(55,207,134,0.5)] text-xl" href="#contact">
              Solicitar Demo
            </a>
</div>
</div>
<div className="lg:col-span-5 xl:col-span-5 relative w-full flex items-center justify-center order-2 lg:-translate-y-8 z-10 lg:translate-x-6 xl:translate-x-10">
<div className="relative w-full h-[24rem] sm:h-[32rem] lg:h-[38rem] xl:h-[42rem] flex items-center justify-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] sm:w-[28rem] sm:h-[28rem] md:w-[32rem] md:h-[32rem] bg-[#37CF86]/10 rounded-full blur-[6.5rem] mix-blend-screen pointer-events-none z-0"></div>
<div className="w-full h-full relative z-10 flex items-center justify-center" id="globe-container">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[84%] lg:w-[80%] aspect-square border border-white/[0.08] rounded-full z-30 pointer-events-none overflow-hidden" id="ai-arena">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full flex items-center gap-3 border border-[#37CF86]/20 shadow-[0_0_24px_rgba(55,207,134,0.18)] pointer-events-none" id="ai-center-pill">
<img alt="Prossium" className="h-5 sm:h-6 w-auto object-contain scale-150 origin-left" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cfacc694-0091-432e-8bf7-b8ede6be8912_3840w.png"/>
<span className="text-sm sm:text-base font-normal text-[#37CF86] hidden sm:block">Prossium</span>
</div>
<div className="ai-pill bg-black/60 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full flex items-center gap-3 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.12)] pointer-events-auto" id="pill-openai">
<iconify-icon className="text-xl sm:text-2xl text-white" icon="simple-icons:openai"></iconify-icon>
<span className="text-sm sm:text-base font-normal text-white hidden sm:block tracking-tight">ChatGPT</span>
</div>
<div className="ai-pill bg-black/60 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full flex items-center gap-3 border border-white/10 shadow-[0_0_20px_rgba(217,119,87,0.12)] pointer-events-auto" id="pill-claude">
<iconify-icon className="text-xl sm:text-2xl text-[#F2E1D9]" icon="simple-icons:anthropic"></iconify-icon>
<span className="text-sm sm:text-base font-normal text-[#F2E1D9] hidden sm:block tracking-tight">Claude</span>
</div>
<div className="ai-pill bg-black/60 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full flex items-center gap-3 border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.12)] pointer-events-auto" id="pill-gemini">
<iconify-icon className="text-xl sm:text-2xl text-blue-400" icon="simple-icons:googlegemini"></iconify-icon>
<span className="text-sm sm:text-base font-normal text-blue-100 hidden sm:block tracking-tight">Gemini</span>
</div>
<div className="ai-pill bg-black/60 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full flex items-center gap-3 border border-white/10 shadow-[0_0_20px_rgba(244,114,182,0.12)] pointer-events-auto" id="pill-lovable">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 fill-pink-400" data-lucide="heart" strokeWidth="1.5"></i>
<span className="text-sm sm:text-base font-normal text-pink-100 hidden sm:block tracking-tight">Lovable</span>
</div>
</div>
<canvas aria-hidden="true" className="aspect-square w-full h-full max-w-[52rem] loaded" id="globe-canvas"></canvas>
<div className="absolute text-[#37CF86] text-sm font-mono animate-pulse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" id="globe-loader" style={{display: 'none'}}>INITIALIZING TWIN...</div>
<div className="pointer-events-none absolute z-30 hidden" id="globe-tooltip">
<div className="max-w-xs rounded-2xl border border-white/10 bg-black/70 backdrop-blur-md px-4 py-3 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)]">
<div className="flex items-center gap-2 mb-1">
<span className="inline-flex w-2 h-2 rounded-full bg-[#37CF86]"></span>
<p className="text-sm font-medium tracking-tight text-white" id="globe-tooltip-title">Señal detectada</p>
</div>
<p className="text-sm text-zinc-300/90 tracking-tight" id="globe-tooltip-body">Ejemplo de insight generado automáticamente para retención.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="border-y border-white/5 bg-black/20 backdrop-blur-sm py-10 relative z-10">
<div className="max-w-[90rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-12 lg:px-16">
<span className="uppercase md:text-left text-base font-medium text-zinc-600 tracking-[0.2em] text-center">LA IA EXPERTA EN TU NEGOCIO </span>
<div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12 grayscale opacity-50 hover:opacity-100 transition-all duration-700">
<span className="text-xl font-normal text-white tracking-tight font-manrope">Lovable</span>
<span className="text-xl font-normal text-white tracking-tight font-manrope">Chat GPT</span>
<span className="text-xl font-normal text-white tracking-tight font-manrope">Gemini</span>
<span className="text-xl font-normal text-white tracking-tight font-manrope">Claude </span>
</div>
</div>
</div>
</main>
<section className="px-6 md:px-12 lg:px-16 z-10 pt-24 pb-24 relative" id="technologie">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-4xl md:text-6xl font-normal tracking-tight font-manrope mb-4">
          Lo que antes tardaba una reunión,<br/>
<span className="text-[#37CF86]">ahora tarda 30 segundos.</span>
</h2>
<p className="text-balance text-zinc-400 max-w-xl text-xl">Tu equipo trabaja. Prossium escucha. Tú decides.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[18.75rem] gap-6">
<div className="glass-card rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-between">
<div className="w-12 h-12 rounded-xl bg-[#37CF86]/10 border border-[#37CF86]/20 flex items-center justify-center text-[#37CF86] mb-4">
<i className="w-6 h-6 text-[#37CF86]" data-lucide="home" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-3xl font-normal font-manrope mb-2 tracking-tight">1. Todo en un lugar</h3>
<p className="text-xl text-zinc-400 font-light">Conectamos todas tus herramientas de comunicación y gestión en un solo lugar.</p>
</div>
</div>
<div className="glass-card rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-between">
<div className="border-[#37CF86]/20 flex text-[#37CF86] w-12 h-12 border rounded-xl mb-4 items-center justify-center">
<i className="w-6 h-6 text-[#37CF86]" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
<div className="">
<h3 className="text-3xl font-normal font-manrope mb-2 tracking-tight">2. La IA lo analiza</h3>
<p className="text-xl text-zinc-400 font-light">Nuestra IA analiza automáticamente correos, chats y notas de reuniones.</p>
</div>
</div>
<div className="glass-card md:row-span-2 rounded-3xl p-8 relative overflow-hidden group flex flex-col">
<div className="blur-[5rem] w-64 h-64 rounded-full absolute top-0 right-0 bg-[#FFB600]/5"></div>
<div className="flex flex-col h-full justify-center z-10">
<div className="border-[#FFB600]/20 flex text-[#FFB600] bg-[#FFB600]/10 w-12 h-12 border rounded-xl mb-6 items-center justify-center">
<i className="w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-normal font-manrope mb-4 tracking-tight">3. Tú solo decides</h3>
<p className="text-xl text-zinc-400 font-light mb-8">El sistema detecta fricciones, oportunidades y genera un resumen con prioridades claras por cada cliente.</p>
<div className="mt-auto border border-zinc-800 bg-black/80 rounded-lg p-4 font-mono text-sm text-zinc-500">
<div className="flex justify-between mb-2">
<span>Status:</span>
<span className="text-[#37CF86]">PROCESSING</span>
</div>
<div className="flex justify-between mb-2">
<span>Parameters:</span>
<span className="text-white">204 DETECTED</span>
</div>
<div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden mt-4">
<div className="bg-[#37CF86] h-full w-[93%] animate-pulse"></div>
</div>
</div>
</div>
</div>
<div className="glass-card md:col-span-2 rounded-3xl relative overflow-hidden group flex items-center justify-center bg-zinc-900/50 min-h-[18.75rem]">
<div className="bg-gradient-to-br from-[#37CF86]/5 to-transparent absolute inset-0"></div>
<i className="w-16 h-16 text-white/20 group-hover:text-[#37CF86] transition-colors cursor-pointer z-10" data-lucide="play-circle" strokeWidth="1.5"></i>
<p className="text-[#37CF86] text-base font-mono absolute bottom-6 left-8 tracking-tight">VER DEMOSTRACIÓN DE UNA PLATAFORMA</p>
</div>
</div>
</div>
</section>
<section className="py-16 md:py-24 px-6 md:px-12 lg:px-16 relative bg-zinc-900/20">
<div className="max-w-6xl mx-auto">
<h3 className="text-3xl font-normal font-manrope tracking-tight text-center mb-12">¿QUÉ TE OFRECEMOS?</h3>
<div className="glass-card rounded-2xl overflow-hidden border border-white/5">
<div className="grid grid-cols-4 bg-white/5 p-6 border-b border-white/10 text-sm md:text-base font-medium tracking-wider text-zinc-400 uppercase">
<div className="col-span-1">Criterio</div>
<div className="col-span-1 text-[#37CF86] text-center">PROSSIUM</div>
<div className="col-span-1 text-center font-normal">CRM</div>
<div className="col-span-1 text-center font-normal">REUNIONES</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 p-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors gap-3 md:gap-0">
<div className="text-xl font-light text-white md:col-span-1">¿Cuándo sabes qué pasa?</div>
<div className="text-[#37CF86] text-2xl font-normal text-left md:text-center tracking-tight md:col-span-1">Ahora mismo</div>
<div className="text-xl font-light text-zinc-500 text-left md:text-center md:col-span-1">Cuando alguien lo actualiza</div>
<div className="text-xl font-light text-zinc-500 text-left md:text-center md:col-span-1">Una vez a la semana</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 p-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors gap-3 md:gap-0">
<div className="text-xl font-light text-white">¿Detecta problemas solo?</div>
<div className="text-[#37CF86] text-2xl font-normal text-left md:text-center tracking-tight">Sí</div>
<div className="text-xl font-light text-zinc-500 text-left md:text-center">No</div>
<div className="text-xl font-light text-zinc-500 text-left md:text-center">No</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 p-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors gap-3 md:gap-0">
<div className="text-xl font-light text-white">¿Tu equipo tiene que hacer algo extra?</div>
<div className="text-[#37CF86] text-2xl font-normal text-left md:text-center tracking-tight">No</div>
<div className="text-xl font-light text-zinc-500 text-left md:text-center">Sí</div>
<div className="text-xl font-light text-zinc-500 text-left md:text-center">Sí</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 p-6 items-center hover:bg-white/5 transition-colors gap-3 md:gap-0">
<div className="text-xl font-light text-white">¿Sabes exactamente qué atender hoy?</div>
<div className="text-[#37CF86] text-2xl font-normal text-left md:text-center tracking-tight">Sí</div>
<div className="text-xl font-light text-zinc-500 text-left md:text-center">No</div>
<div className="text-xl font-light text-zinc-500 text-left md:text-center">A veces</div>
</div>
</div>
</div>
</section>
<section className="px-6 md:px-12 lg:px-16 pt-24 pb-24 relative" id="applications">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-6xl font-normal tracking-tight font-manrope mb-4">Aplicaciones</h2>
<div className="flex flex-wrap justify-center gap-4">
<span className="px-4 py-1.5 rounded-full bg-[#37CF86]/10 text-[#37CF86] text-sm font-medium border border-[#37CF86]/20">MÉDICO (2028)</span>
<span className="px-4 py-1.5 rounded-full bg-zinc-800 text-zinc-400 text-sm font-medium border border-zinc-700">NO MÉDICO (2026)</span>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="glass-card p-8 rounded-2xl relative group">
<div className="flex gap-4 items-start">
<div className="w-12 h-12 bg-[#0d2116] border border-[#1a3d28] rounded-xl flex items-center justify-center text-[#37CF86] shrink-0 shadow-inner">
<i className="w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-3xl font-normal text-white tracking-tight mb-3">
                Prossium centraliza lo que pasa con tus clientes y te dice exactamente qué requiere tu atención ahora mismo.
              </h4>
<p className="text-xl text-zinc-400 font-light mb-6 leading-relaxed">
                Prossium te avisa antes de que un cliente se enfade, se vaya o deje de pagar. Sin reportes. Sin preguntar al equipo.
              </p>
<ul className="space-y-3 text-xl font-light text-zinc-500">
<li className="flex gap-3 items-start">
<i className="w-5 h-5 text-[#37CF86] mt-1 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span>Sabes cuándo un cliente está en riesgo</span>
</li>
<li className="flex gap-3 items-start">
<i className="w-5 h-5 text-[#37CF86] mt-1 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span>Resumen de cada cuenta sin pedirlo</span>
</li>
</ul>
</div>
</div>
</div>
<div className="glass-card p-8 rounded-2xl relative group">
<div className="flex gap-4 items-start">
<div className="w-12 h-12 bg-[#37CF86]/10 border border-[#37CF86]/20 rounded-xl flex items-center justify-center text-[#37CF86] shrink-0">
<i className="w-6 h-6" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-3xl font-normal tracking-tight text-white mb-3">Entras a cada reunión sabiendo exactamente cómo está la cosa</h4>
<p className="text-xl text-zinc-400 font-light mb-6 leading-relaxed">
                Antes de llamar a un cliente, ya sabes qué pasó, qué está pendiente y qué necesita. Sin buscar en cinco sitios.
              </p>
<ul className="space-y-3 text-xl font-light text-zinc-500">
<li className="flex gap-3 items-start">
<i className="w-5 h-5 text-[#37CF86] mt-1 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span>Contexto completo antes de cada llamada</span>
</li>
<li className="flex gap-3 items-start">
<i className="w-5 h-5 text-[#37CF86] mt-1 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span>Todo sincronizado con tu CRM</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="px-6 md:px-12 lg:px-16 z-10 border-white/5 border-t pt-24 pb-24 relative" id="pricing">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight font-manrope mb-4">Nos adaptamos</h2>
<p className="text-xl font-light text-zinc-400">Cada negocio es distinto. Prossium también.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-[#0a0a0a] border border-white/5 border-l-4 border-l-[#37CF86] rounded-2xl p-8 flex flex-col hover:border-white/10 transition-colors">
<h3 className="text-3xl font-normal text-white tracking-tight font-manrope mb-3">Prossium se adapta a ti y funciona desde el primer día.</h3>
<p className="text-xl font-light text-zinc-500 mb-8">Da igual el sector o cómo trabajas.</p>
<div className="mb-8 flex-grow">
<div className="flex justify-between items-center py-4 border-b border-white/5 text-xl">
<span className="text-zinc-400 font-light">Personalizable</span>
<span className="font-normal text-white">100%</span>
</div>
<div className="flex text-xl border-white/5 border-b py-4 items-center justify-between">
<span className="text-zinc-400 font-light">Tipo de negocio</span>
<span className="text-[#37CF86] font-normal tracking-tight">TODOS</span>
</div>
</div>
<a className="hover:bg-[#1a1a1a] transition-colors text-xl font-normal text-white text-center bg-[#141414] w-full border-white/5 border rounded-xl mt-auto py-3 tracking-tight" href="#contact">DEMO</a>
</div>
<div className="bg-[#0a0a0a] border border-white/5 border-l-4 border-l-[#FFB600] rounded-2xl p-8 flex flex-col hover:border-white/10 transition-colors">
<h3 className="text-3xl font-normal text-white tracking-tight font-manrope mb-3">Lo ajustamos y seguimos construyendo según lo que tu negocio necesite.</h3>
<p className="text-xl font-light text-zinc-500 mb-8">Prossium no se queda quieto.</p>
<div className="mb-8 flex-grow">
<div className="flex justify-between items-center py-4 border-b border-white/5 text-xl">
<span className="text-zinc-400 font-light">Seguimiento</span>
<span className="text-[#FFB600] font-normal tracking-tight">SIEMPRE</span>
</div>
<div className="flex justify-between items-center py-4 border-b border-white/5 text-xl">
<span className="text-zinc-400 font-light">Crecimiento</span>
<span className="font-normal text-white tracking-tight">Conjunto</span>
</div>
</div>
<a className="w-full bg-[#141414] hover:bg-[#1a1a1a] border border-white/5 transition-colors font-normal tracking-tight text-white text-center rounded-xl py-3 text-xl mt-auto" href="#contact">Contactar</a>
</div>
</div>
</div>
</section>
<section className="px-6 md:px-12 lg:px-16 bg-zinc-900/30 pt-24 pb-24" id="contact">
<div className="max-w-2xl mx-auto glass-card p-8 md:p-12 rounded-3xl">
<h2 className="text-4xl font-normal tracking-tight font-manrope text-center mb-3">Solicita una demo</h2>
<p className="text-xl font-light text-zinc-400/90 tracking-tight text-center mb-10">
        Envíanos tus datos y te contactamos. No se abrirá tu aplicación de correo.
      </p>
<form action="#" className="space-y-6" id="demo-form" method="post" novalidate="">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block uppercase text-sm font-medium tracking-wider text-zinc-500 mb-2">Nombre</label>
<input autocomplete="name" className="focus:border-[#37CF86] focus:outline-none transition-colors text-white bg-black/50 w-full border-white/10 border rounded-lg py-3 px-4 text-xl font-light" id="f-nombre" name="Nombre" placeholder="Tu nombre" required="" type="text"/>
</div>
<div>
<label className="block uppercase text-sm font-medium tracking-wider text-zinc-500 mb-2">Empresa</label>
<input autocomplete="organization" className="focus:border-[#37CF86] focus:outline-none transition-colors text-white bg-black/50 w-full border-white/10 border rounded-lg py-3 px-4 text-xl font-light" id="f-empresa" name="Empresa" placeholder="Nombre de la empresa" required="" type="text"/>
</div>
</div>
<div>
<label className="block uppercase text-sm font-medium tracking-wider text-zinc-500 mb-2">Email profesional</label>
<input autocomplete="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#37CF86] focus:outline-none transition-colors text-xl font-light" id="f-email" name="Email" placeholder="nombre@empresa.com" required="" type="email"/>
</div>
<div>
<label className="block uppercase text-sm font-medium tracking-wider text-zinc-500 mb-2">Mensaje</label>
<textarea className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#37CF86] focus:outline-none transition-colors text-xl font-light" id="f-mensaje" name="Mensaje" placeholder="Describe tu proyecto..." required="" rows="4"></textarea>
</div>
<div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
<div className="hidden sm:flex items-center gap-2 text-sm text-zinc-500" id="form-hint">
<i className="w-4 h-4" data-lucide="lock" strokeWidth="1.5"></i>
<span className="tracking-tight">Tus datos se envían de forma segura.</span>
</div>
<button className="bg-[#37CF86] hover:bg-emerald-600 transition-colors font-medium text-black w-full sm:w-auto rounded-lg py-3.5 px-8 text-xl tracking-tight inline-flex items-center justify-center gap-3" id="submit-btn" type="submit">
<span id="submit-label">Solicitar acceso</span>
<i className="w-6 h-6" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="hidden rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md px-5 py-4" id="form-status">
<div className="flex items-start gap-3">
<div className="mt-0.5 w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/80" id="status-icon">
<i className="w-5 h-5" data-lucide="check" strokeWidth="1.5"></i>
</div>
<div className="min-w-0">
<p className="text-xl font-normal tracking-tight text-white" id="status-title">Solicitud enviada</p>
<p className="text-lg text-zinc-400/90 tracking-tight mt-1 font-light" id="status-body">
                Te contactaremos en breve.
              </p>
</div>
</div>
</div>
</form>
</div>
</section>
<footer className="overflow-hidden bg-black border-zinc-900 border-t pt-14 pb-8 relative">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 z-10 max-w-7xl mx-auto mb-10 px-6 md:px-12 lg:px-16 relative items-start">
<div className="md:col-span-2">
<div className="max-w-xs">
<div className="h-24 md:h-28 flex items-center">
<img alt="Logo" className="object-left opacity-90 w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cfacc694-0091-432e-8bf7-b8ede6be8912_3840w.png"/>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 md:col-span-2">
<div className="">
<h4 className="uppercase text-sm font-medium text-white tracking-widest mb-6">Contacto</h4>
<ul className="space-y-3 text-xl font-light text-zinc-500">
<li className=""><a className="hover:text-[#37CF86] transition-colors" href="mailto:pedro@prossium.com">pedro@prossium.com</a></li>
</ul>
</div>
<div className="">
<h4 className="uppercase text-sm font-medium text-white tracking-widest mb-6">Redes sociales</h4>
<ul className="space-y-3 text-xl font-light text-zinc-500">
<li className=""><a className="hover:text-[#37CF86] transition-colors" href="#">Instagram</a></li>
<li className=""><a className="hover:text-[#37CF86] transition-colors" href="#">Linkedin </a></li>
</ul>
</div>
</div>
</div>
<div className="relative w-full overflow-hidden opacity-5 select-none pointer-events-none flex justify-center">
<h1 className="text-[13vw] font-black font-manrope leading-none text-transparent tracking-tighter" style={{WebkitTextStroke: '1px #fff'}}>
        PROSSIUM
      </h1>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600 uppercase tracking-wider">
<p>© 2026 PROSSIUM. Todos los derechos reservados.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-400" href="#">LinkedIn</a>
</div>
</div>
</footer>


    </>
  );
}
