import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Smooth scroll helpers for key CTAs
      const scrollToId = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.getElementById('startMapping')?.addEventListener('click', () => scrollToId('#twin'));
      document.getElementById('exploreSims')?.addEventListener('click', () => scrollToId('#simulations'));
      document.getElementById('viewAR')?.addEventListener('click', () => scrollToId('#twin'));

      // Loader: Tiny Three.js rotating Earth orb
      (function initEarth() {
        const canvas = document.getElementById('earthCanvas');
        if (!canvas || !window.THREE) return;
        const { Scene, PerspectiveCamera, WebGLRenderer, SphereGeometry, MeshStandardMaterial, Mesh, AmbientLight, DirectionalLight, Color, Vector2 } = THREE;

        const scene = new Scene();
        const camera = new PerspectiveCamera(28, 1, 0.1, 100);
        camera.position.set(0, 0, 6);

        const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true });
        const setSize = () => {
          const rect = canvas.getBoundingClientRect();
          const dpr = Math.min(window.devicePixelRatio || 1, 2);
          renderer.setPixelRatio(dpr);
          renderer.setSize(rect.width, rect.height, false);
          camera.aspect = rect.width / rect.height || 1;
          camera.updateProjectionMatrix();
        };
        setSize();
        window.addEventListener('resize', setSize);

        const geo = new SphereGeometry(1.4, 64, 64);
        const mat = new MeshStandardMaterial({
          color: new Color('#0ea5a4').offsetHSL(0, -0.2, -0.2),
          roughness: 0.4,
          metalness: 0.1,
          emissive: '#063a34',
          emissiveIntensity: 0.6
        });
        const globe = new Mesh(geo, mat);
        scene.add(globe);

        const amb = new AmbientLight('#9ef3d3', 0.6);
        const dir = new DirectionalLight('#f59e0b', 0.9);
        dir.position.set(2, 2, 3);
        scene.add(amb, dir);

        let t = 0;
        const animate = () => {
          t += 0.005;
          globe.rotation.y += 0.004;
          globe.rotation.x = Math.sin(t) * 0.08;
          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        };
        animate();

        // Auto-hide loader
        const loaderEl = document.getElementById('loader');
        setTimeout(() => {
          if (!loaderEl) return;
          loaderEl.style.transition = 'opacity 500ms ease';
          loaderEl.style.opacity = '0';
          setTimeout(() => loaderEl.remove(), 520);
        }, 1400);
      })();

      // Drone icon path animation
      (function animateDrone() {
        const path = document.getElementById('pathLine');
        const drone = document.getElementById('droneIcon');
        if (!path || !drone) return;
        const length = path.getTotalLength();
        let progress = 0, dir = 1;
        const step = () => {
          progress += dir * 1.2;
          if (progress >= length || progress <= 0) dir *= -1;
          const pt = path.getPointAtLength(progress);
          drone.style.left = pt.x + 'px';
          drone.style.top = pt.y + 'px';
          requestAnimationFrame(step);
        };
        step();
      })();

      // Charts theme helpers
      const gridColor = 'rgba(148, 163, 184, 0.18)';
      const tickColor = 'rgba(226,232,240,0.7)';
      const ctx = (id) => document.getElementById(id)?.getContext('2d');

      const emissionsChart = new Chart(ctx('emissionsChart'), {
        type: 'line',
        data: {
          labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
          datasets: [{
            label: 'tCO₂e',
            data: [380, 362, 355, 340, 335, 330, 324],
            borderColor: 'rgba(16,185,129,0.9)',
            backgroundColor: 'rgba(16,185,129,0.2)',
            tension: 0.35,
            fill: true,
            pointRadius: 0
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: { grid: { color: gridColor }, ticks: { color: tickColor } },
            x: { grid: { display: false }, ticks: { color: tickColor } }
          },
          plugins: { legend: { labels: { color: tickColor } } }
        }
      });

      const energyChart = new Chart(ctx('energyChart'), {
        type: 'doughnut',
        data: {
          labels: ['Solar','Grid','Wind','Other'],
          datasets: [{
            data: [28, 52, 12, 8],
            backgroundColor: ['#10b981','#64748b','#60a5fa','#f59e0b'],
            borderColor: 'rgba(0,0,0,0)',
            hoverOffset: 6
          }]
        },
        options: {
          plugins: { legend: { position: 'bottom', labels: { color: tickColor } } },
          cutout: '58%'
        }
      });

      const beforeData = [420, 380, 360, 310, 295];
      const afterDataBase = beforeData.map(v => Math.round(v * 0.9));
      const beforeChart = new Chart(ctx('beforeChart'), {
        type: 'bar',
        data: {
          labels: ['Lab A','Library','Dorms','Cafeteria','Admin'],
          datasets: [{ data: beforeData, backgroundColor: 'rgba(251,146,60,0.7)' }]
        },
        options: {
          plugins: { legend: { display: false } },
          scales: {
            y: { grid: { color: gridColor }, ticks: { color: tickColor } },
            x: { grid: { display: false }, ticks: { color: tickColor } }
          }
        }
      });
      const afterChart = new Chart(ctx('afterChart'), {
        type: 'bar',
        data: {
          labels: ['Lab A','Library','Dorms','Cafeteria','Admin'],
          datasets: [{ data: afterDataBase, backgroundColor: 'rgba(16,185,129,0.75)' }]
        },
        options: {
          plugins: { legend: { display: false } },
          scales: {
            y: { grid: { color: gridColor }, ticks: { color: tickColor } },
            x: { grid: { display: false }, ticks: { color: tickColor } }
          }
        }
      });

      const forecastChart = new Chart(ctx('forecastChart'), {
        type: 'line',
        data: {
          labels: ['2024','2025','2026','2027','2028','2029','2030'],
          datasets: [
            {
              label: 'Business-as-Usual',
              data: [2450, 2480, 2505, 2530, 2550, 2570, 2590],
              borderColor: 'rgba(148,163,184,0.9)',
              borderDash: [6,6],
              tension: 0.35,
              fill: false,
              pointRadius: 0
            },
            {
              label: 'Action Plan',
              data: [2450, 2380, 2310, 2220, 2120, 2010, 1890],
              borderColor: 'rgba(16,185,129,0.95)',
              backgroundColor: 'rgba(16,185,129,0.22)',
              tension: 0.35,
              fill: true,
              pointRadius: 0
            }
          ]
        },
        options: {
          plugins: { legend: { labels: { color: tickColor } } },
          scales: {
            y: { grid: { color: gridColor }, ticks: { color: tickColor } },
            x: { grid: { display: false }, ticks: { color: tickColor } }
          }
        }
      });

      // Time travel controls
      const ttLabel = document.getElementById('ttLabel');
      const timeSlider = document.getElementById('timeSlider');
      const greenerOverlay = document.getElementById('greenerOverlay');
      function setTimeTravel(val) {
        const states = ['Yesterday','Today','2030'];
        ttLabel.textContent = 'Year: ' + states[val];
        if (greenerOverlay) {
          greenerOverlay.style.opacity = val === '2' || val === 2 ? '1' : (val === '0' || val === 0 ? '0' : '0.35');
        }
      }
      timeSlider?.addEventListener('input', (e) => setTimeTravel(e.target.value));
      document.getElementById('timeYesterday')?.addEventListener('click', () => { timeSlider.value = 0; setTimeTravel(0); });
      document.getElementById('timeToday')?.addEventListener('click', () => { timeSlider.value = 1; setTimeTravel(1); });
      document.getElementById('time2030')?.addEventListener('click', () => { timeSlider.value = 2; setTimeTravel(2); });

      // Simulations panel logic
      const solar = document.getElementById('solar');
      const ev = document.getElementById('ev');
      const led = document.getElementById('led');
      const solarVal = document.getElementById('solarVal');
      const evVal = document.getElementById('evVal');
      const ledVal = document.getElementById('ledVal');
      const projReduction = document.getElementById('projReduction');

      function updateSimLabels() {
        solarVal.textContent = `${solar.value}%`;
        evVal.textContent = `${ev.value}%`;
        ledVal.textContent = `${led.value}%`;
        const reduction = (solar.value * 0.15 + ev.value * 0.20 + led.value * 0.10) / 100; // 0..1
        projReduction.textContent = `-${(reduction * 100).toFixed(1)}%`;
      }
      [solar, ev, led].forEach(r => r?.addEventListener('input', updateSimLabels));
      updateSimLabels();

      document.getElementById('applySim')?.addEventListener('click', () => {
        const reduction = (solar.value * 0.15 + ev.value * 0.20 + led.value * 0.10) / 100;
        afterChart.data.datasets[0].data = beforeData.map(v => Math.max(0, Math.round(v * (1 - reduction))));
        afterChart.update();

        // light visual feedback
        const waves = document.getElementById('greenWaves');
        if (waves) {
          waves.style.transition = 'opacity 600ms ease';
          waves.style.opacity = Math.min(1, 0.2 + reduction * 0.9);
          setTimeout(() => waves.style.opacity = Math.max(0.15, waves.style.opacity), 700);
        }
      });
      document.getElementById('resetSim')?.addEventListener('click', () => {
        solar.value = 20; ev.value = 40; led.value = 60; updateSimLabels();
        afterChart.data.datasets[0].data = afterDataBase;
        afterChart.update();
      });

      // Drone overlay toggle
      const droneOverlayBtn = document.getElementById('droneOverlayBtn');
      const droneOverlay = document.getElementById('droneOverlay');
      droneOverlayBtn?.addEventListener('click', () => {
        const show = droneOverlay.classList.contains('hidden');
        droneOverlay.classList.toggle('hidden');
        droneOverlayBtn.innerHTML = `${droneOverlayBtn.innerHTML.replace(show ? 'Show' : 'Hide', show ? 'Hide' : 'Show')}`;
      });

      // Alerts and spike simulation
      const alertToast = document.getElementById('alertToast');
      const simulateSpike = document.getElementById('simulateSpike');
      const alertBtn = document.getElementById('alertBtn');
      const alertBadge = document.getElementById('alertBadge');
      const eventLog = document.getElementById('eventLog');

      function showToast(msg = 'Spike detected at Lab A • +18% CO₂ in 10m') {
        if (!alertToast) return;
        alertToast.textContent = '';
        alertToast.insertAdjacentHTML('afterbegin', `
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
          ${msg}
        `);
        alertToast.classList.remove('hidden');
        setTimeout(() => alertToast.classList.add('hidden'), 4200);
      }
      simulateSpike?.addEventListener('click', () => {
        showToast();
        if (alertBadge) alertBadge.textContent = String((+alertBadge.textContent || 0) + 1);
        eventLog?.insertAdjacentHTML('afterbegin', `<li>• Alert • Lab A spike detected (${new Date().toLocaleTimeString()})</li>`);
      });
      alertBtn?.addEventListener('click', () => {
        showToast('All systems nominal • Last spike resolved');
        alertBadge && (alertBadge.textContent = '0');
      });

      // Live sensor jitter
      const co2 = document.getElementById('liveCO2');
      const kwh = document.getElementById('liveKwh');
      const water = document.getElementById('liveWater');
      setInterval(() => {
        if (co2) co2.textContent = String(450 + Math.floor(Math.random() * 40));
        if (kwh) kwh.textContent = (3 + Math.random() * 1.2).toFixed(1) + 'k';
        if (water) water.textContent = (1 + Math.random() * 0.6).toFixed(1) + 'k';
      }, 2000);

      // Wallet interactions
      const creditsEl = document.getElementById('walletCredits');
      const actionFeed = document.getElementById('actionFeed');
      document.querySelectorAll('.ecoBtn').forEach(btn => {
        btn.addEventListener('click', () => {
          const pts = parseInt(btn.getAttribute('data-pts') || '0', 10);
          creditsEl.textContent = String((parseInt(creditsEl.textContent, 10) || 0) + pts);
          actionFeed?.insertAdjacentHTML('afterbegin', `<li>• ${btn.textContent.trim()}</li>`);
          btn.classList.add('ring-1','ring-emerald-300/40');
          setTimeout(() => btn.classList.remove('ring-1','ring-emerald-300/40'), 800);
        });
      });

      // QR modal with camera
      const qrModal = document.getElementById('qrModal');
      const qrOpen = document.getElementById('qrOpen');
      const qrClose = document.getElementById('qrClose');
      const qrVideo = document.getElementById('qrVideo');
      let qrStream;
      qrOpen?.addEventListener('click', async () => {
        qrModal.classList.remove('hidden');
        qrModal.classList.add('flex');
        try {
          qrStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
          if (qrVideo) {
            qrVideo.srcObject = qrStream;
            qrVideo.play();
          }
        } catch (e) {
          const wrap = qrVideo?.parentElement;
          wrap?.insertAdjacentHTML('beforeend', `<div class="absolute inset-0 grid place-items-center text-xs text-slate-400">Camera unavailable in this browser.</div>`);
        }
      });
      const stopQR = () => {
        if (qrStream) qrStream.getTracks().forEach(t => t.stop());
        qrModal.classList.add('hidden');
        qrModal.classList.remove('flex');
      };
      qrClose?.addEventListener('click', stopQR);
      qrModal?.addEventListener('click', (e) => { if (e.target === qrModal) stopQR(); });

      // Chat assistant (mock)
      const chat = document.getElementById('chat');
      const chatInput = document.getElementById('chatInput');
      const chatSend = document.getElementById('chatSend');
      function addMsg(text, role = 'assistant') {
        const isUser = role === 'user';
        const bubble = `
          <div class="flex ${isUser ? 'justify-end' : 'justify-start'}">
            <div class="max-w-[85%] rounded-lg px-3 py-2 text-xs border ${isUser ? 'bg-emerald-500/10 border-emerald-400/30 text-emerald-100' : 'bg-white/5 border-white/10 text-slate-200'}">
              ${text}
            </div>
          </div>`;
        chat.insertAdjacentHTML('beforeend', bubble);
        chat.scrollTop = chat.scrollHeight;
      }
      function replyTo(prompt) {
        const lower = prompt.toLowerCase();
        let answer = 'Here are three levers with high ROI: 1) LED retrofits, 2) HVAC scheduling, 3) Rooftop solar. I can draft a 30-day action plan.';
        if (lower.includes('lab a')) {
          answer = 'For Lab A: calibrate fume hood sash heights, schedule ventilation setbacks after hours, and recover waste heat. Expect 15–22% drop in 30–45 days.';
        } else if (lower.includes('solar')) {
          answer = 'Rooftop solar: start at 30–40% coverage on sunniest roofs. Combine with demand response to maximize offset during peak hours.';
        } else if (lower.includes('hvac')) {
          answer = 'Optimize HVAC: widen setpoints by 1–2°C, enable economizer mode, and add occupancy-based controls. Comfort preserved, 8–12% savings typical.';
        }
        setTimeout(() => addMsg(answer, 'assistant'), 500);
      }
      chatSend?.addEventListener('click', () => {
        const val = chatInput.value.trim();
        if (!val) return;
        addMsg(val, 'user');
        chatInput.value = '';
        replyTo(val);
      });
      chatInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') chatSend.click();
      });
      document.querySelectorAll('.prompt').forEach(p => {
        p.addEventListener('click', () => {
          chatInput.value = p.textContent.trim();
          chatSend.click();
        });
      });

      // Forecast timelapse -> greener overlay effect
      const greenWaves = document.getElementById('greenWaves');
      const timelapse = document.getElementById('timelapse');
      timelapse?.addEventListener('input', (e) => {
        const v = Number(e.target.value);
        const op = Math.min(1, v / 85);
        if (greenWaves) greenWaves.style.opacity = op.toFixed(2);
        if (greenerOverlay) greenerOverlay.style.opacity = (op * 0.9).toFixed(2);
      });

      // KPI counters small pulse update
      function updateKPIs() {
        const k1 = document.getElementById('kpiEmissions');
        const k2 = document.getElementById('kpiSaved');
        const k3 = document.getElementById('kpiWarriors');
        if (k1) k1.textContent = (2400 + Math.floor(Math.random() * 60)).toLocaleString();
        if (k2) k2.textContent = (30 + Math.floor(Math.random() * 20)).toString();
        if (k3) k3.textContent = (10 + Math.floor(Math.random() * 5)).toString();
      }
      setInterval(updateKPIs, 8000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_20%,rgba(16,185,129,0.18),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(50%_30%_at_80%_60%,rgba(251,146,60,0.12),transparent_70%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_10%_80%,rgba(245,158,11,0.08),transparent_70%)]"></div>

<div className="pointer-events-none">
<div className="absolute top-20 left-16 w-2 h-2 bg-emerald-400/40 rounded-full blur-[2px] animate-ping"></div>
<div className="absolute top-1/3 right-24 w-3 h-3 bg-orange-400/40 rounded-full blur-[2px] animate-ping"></div>
<div className="absolute bottom-24 left-1/4 w-[6px] h-[6px] bg-amber-400/50 rounded-full blur-[1px] animate-pulse"></div>
<div className="absolute bottom-10 right-1/3 w-2 h-2 bg-emerald-300/40 rounded-full blur-[2px] animate-ping"></div>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md" id="loader">
<div className="relative flex flex-col items-center gap-6">
<div className="relative w-48 h-48 rounded-full ring-1 ring-white/10 shadow-2xl shadow-emerald-500/10 overflow-hidden" id="loaderCanvasWrap">
<canvas className="w-full h-full" id="earthCanvas"></canvas>

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-2 left-6 w-6 h-6 bg-emerald-400/30 blur-md rounded-full animate-pulse"></div>
<div className="absolute top-4 right-5 w-8 h-8 bg-amber-400/30 blur-md rounded-full animate-pulse"></div>
<div className="absolute bottom-6 left-1/3 w-5 h-5 bg-orange-400/30 blur-md rounded-full animate-pulse"></div>
</div>
</div>
<div className="text-center">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight bg-clip-text text-transparent bg-[linear-gradient(110deg,#a7f3d0,35%,#fb923c,65%,#f59e0b)]">Campus Climate Twin</h1>
<p className="text-sm text-slate-400 mt-2">Initializing digital twin • Mapping carbon clouds • Calibrating sensors</p>
</div>
<div className="flex items-center gap-2 text-emerald-300/80">

<svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M21 12a9 9 0 1 1-6.219-8.56" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs">Loading</span>
</div>
</div>
</div>

<header className="sticky top-0 z-40 backdrop-blur-xl bg-black/30 border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<span className="text-emerald-400 font-semibold tracking-tight">CCT</span>
</div>
<span className="hidden md:block text-slate-300 text-sm">Campus Climate Twin</span>
</div>
<nav className="hidden md:flex items-center gap-2">
<a className="text-slate-300/90 hover:text-emerald-300 transition px-3 py-2 text-sm rounded-md hover:bg-white/5" href="#hero">Home</a>
<a className="text-slate-300/90 hover:text-emerald-300 transition px-3 py-2 text-sm rounded-md hover:bg-white/5" href="#dashboard">Dashboard</a>
<a className="text-slate-300/90 hover:text-emerald-300 transition px-3 py-2 text-sm rounded-md hover:bg-white/5" href="#twin">Digital Twin</a>
<a className="text-slate-300/90 hover:text-emerald-300 transition px-3 py-2 text-sm rounded-md hover:bg-white/5" href="#simulations">Simulations</a>
<a className="text-slate-300/90 hover:text-emerald-300 transition px-3 py-2 text-sm rounded-md hover:bg-white/5" href="#drone">Drones</a>
<a className="text-slate-300/90 hover:text-emerald-300 transition px-3 py-2 text-sm rounded-md hover:bg-white/5" href="#wallet">Wallet</a>
<a className="text-slate-300/90 hover:text-emerald-300 transition px-3 py-2 text-sm rounded-md hover:bg-white/5" href="#advisor">Advisor</a>
<a className="text-slate-300/90 hover:text-emerald-300 transition px-3 py-2 text-sm rounded-md hover:bg-white/5" href="#forecast">Forecast</a>
<a className="text-slate-300/90 hover:text-emerald-300 transition px-3 py-2 text-sm rounded-md hover:bg-white/5" href="#team">Team</a>
</nav>
<div className="flex items-center gap-3">
<button className="relative flex items-center gap-2 px-3 py-2 rounded-md bg-red-500/10 text-red-300 border border-red-500/20 hover:bg-red-500/20 transition" id="alertBtn">

<svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
<line x1="12" x2="12" y1="9" y2="13"></line>
<line x1="12" x2="12.01" y1="17" y2="17"></line>
</svg>
<span className="text-xs font-medium">Alerts</span>
<span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] rounded-full bg-red-600 text-white flex items-center justify-center" id="alertBadge">1</span>
</button>
<button className="hidden md:flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition">

<svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"></path>
<path d="M14 14h3v3h-3zM7 7h3v3H7zM17 7h1M20 17h1"></path>
</svg>
<span className="text-sm text-slate-300">Scan</span>
</button>
</div>
</div>
</div>
</header>

<section className="relative" id="hero">
<div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">

<svg className="w-3.5 h-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3z"></path></svg>
              Live Digital Twin + AR-ready
            </div>
<h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Visualize. Predict. <span className="bg-clip-text text-transparent bg-[linear-gradient(100deg,#34d399,20%,#fb923c,55%,#f59e0b)]">Reduce Campus Carbon Footprint.</span>
</h1>
<p className="mt-4 text-base text-slate-400">
              AI-driven carbon mapper that turns your campus into a real-time, interactive climate digital twin. Simulate actions, forecast impact, and gamify sustainability.
            </p>
<div className="mt-6 flex items-center gap-3">
<button className="group relative overflow-hidden px-5 py-3 rounded-lg bg-[linear-gradient(90deg,#10b981_0%,#22c55e_50%,#10b981_100%)] text-slate-900 font-medium border border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] transition" id="startMapping">
<span className="relative z-10 flex items-center gap-2">

<svg className="w-4 h-4 text-slate-900 transition group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M9 18l-5 2V6l5-2 6 2 5-2v14l-5 2-6-2z"></path><path d="M9 4v14"></path><path d="M15 6v14"></path></svg>
                  Start Mapping
                </span>
<span className="absolute inset-0 opacity-0 group-active:opacity-100 transition bg-white/30"></span>
</button>
<button className="group relative overflow-hidden px-5 py-3 rounded-lg bg-[linear-gradient(90deg,#fb923c_0%,#f59e0b_50%,#fb923c_100%)] text-slate-900 font-medium border border-amber-400/50 hover:shadow-[0_0_30px_rgba(251,146,60,0.35)] transition" id="exploreSims">
<span className="relative z-10 flex items-center gap-2">

<svg className="w-4 h-4 text-slate-900 group-hover:scale-110 transition" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"></path></svg>
                  Explore Simulations
                </span>
<span className="absolute inset-0 opacity-0 group-active:opacity-100 transition bg-white/30"></span>
</button>
</div>

<div className="mt-10 grid grid-cols-3 gap-3">
<div className="rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/7.5 transition">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-400">Total Emissions</span>

<svg className="w-4 h-4 text-emerald-300/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M17.5 19a4.5 4.5 0 0 0 0-9 5.5 5.5 0 0 0-10.5 1A4 4 0 1 0 6.5 19h11z"></path></svg>
</div>
<div className="mt-2 text-xl font-semibold tracking-tight"><span id="kpiEmissions">2,430</span> tCO₂e</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/7.5 transition">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-400">Saved This Month</span>

<svg className="w-4 h-4 text-amber-300/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"></path></svg>
</div>
<div className="mt-2 text-xl font-semibold tracking-tight"><span id="kpiSaved">38</span> tCO₂e</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/7.5 transition">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-400">Top Eco-Warriors</span>

<svg className="w-4 h-4 text-orange-300/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<div className="mt-2 text-xl font-semibold tracking-tight"><span id="kpiWarriors">12</span> active</div>
</div>
</div>
</div>

<div className="relative rounded-2xl bg-white/5 border border-white/10 p-3 md:p-4 backdrop-blur-md overflow-hidden">
<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_50%_10%,rgba(16,185,129,0.08),transparent_70%)]"></div>
<div className="relative rounded-xl overflow-hidden ring-1 ring-white/10">
<img alt="Campus aerial" className="w-full h-64 md:h-96 object-cover opacity-60" src="https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0">
<button className="group absolute top-10 left-10 w-4 h-4 rounded-full bg-emerald-400/70 shadow-[0_0_16px_4px_rgba(16,185,129,0.45)] ring-2 ring-emerald-300/80 hover:scale-110 transition" data-tooltip="Library • 180 tCO₂e">
<span className="absolute -top-10 -left-6 px-2 py-1 rounded bg-black/70 text-xs text-slate-100 opacity-0 group-hover:opacity-100 transition border border-white/10">Library: 180 tCO₂e</span>
</button>
<button className="group absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-amber-400/70 shadow-[0_0_16px_4px_rgba(245,158,11,0.45)] ring-2 ring-amber-300/80 hover:scale-110 transition" data-tooltip="Lab A • 420 tCO₂e">
<span className="absolute -top-10 -left-6 px-2 py-1 rounded bg-black/70 text-xs text-slate-100 opacity-0 group-hover:opacity-100 transition border border-white/10">Lab A: 420 tCO₂e</span>
</button>
<button className="group absolute bottom-14 right-16 w-4 h-4 rounded-full bg-orange-400/70 shadow-[0_0_16px_4px_rgba(251,146,60,0.45)] ring-2 ring-orange-300/80 hover:scale-110 transition" data-tooltip="Dorms • 320 tCO₂e">
<span className="absolute -top-10 -left-6 px-2 py-1 rounded bg-black/70 text-xs text-slate-100 opacity-0 group-hover:opacity-100 transition border border-white/10">Dorms: 320 tCO₂e</span>
</button>
</div>

<div className="pointer-events-none absolute inset-0">
<div className="absolute top-16 left-8 w-10 h-10 bg-emerald-300/25 blur-xl rounded-full animate-bounce"></div>
<div className="absolute top-1/3 left-1/3 w-14 h-14 bg-amber-300/25 blur-xl rounded-full animate-bounce"></div>
<div className="absolute bottom-16 right-10 w-12 h-12 bg-orange-300/25 blur-xl rounded-full animate-bounce"></div>
</div>

<svg className="absolute inset-0" id="dronePath" preserveaspectratio="none" viewbox="0 0 800 600">
<path d="M80,520 C200,420 300,460 420,360 S650,200 740,120" fill="none" id="pathLine" stroke="rgba(16,185,129,0.3)" stroke-dasharray="6 6" strokeWidth="2"></path>
</svg>

<div className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2" id="droneIcon" style={{top: '520px', left: '80px'}}>

<svg className="w-8 h-8 text-emerald-300 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M10 10h4v4h-4z"></path>
<circle cx="4" cy="4" r="2"></circle>
<circle cx="20" cy="4" r="2"></circle>
<circle cx="4" cy="20" r="2"></circle>
<circle cx="20" cy="20" r="2"></circle>
<path d="M6 6l4 4M18 6l-4 4M6 18l4-4M18 18l-4-4"></path>
</svg>
</div>
</div>
<div className="mt-3 text-xs text-slate-400 flex items-center justify-between">
<span>Animated campus map with rising carbon clouds</span>
<button className="px-3 py-1 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center gap-2" id="viewAR">

<svg className="w-4 h-4 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
                AR demo
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16 border-t border-white/10" id="dashboard">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Dashboard</h2>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition" id="timeYesterday">Yesterday</button>
<button className="px-3 py-1.5 text-xs rounded-md bg-emerald-500/15 border border-emerald-400/30 text-emerald-200 hover:bg-emerald-500/25 transition" id="timeToday">Today</button>
<button className="px-3 py-1.5 text-xs rounded-md bg-orange-500/10 border border-orange-400/30 text-orange-200 hover:bg-orange-500/20 transition" id="time2030">2030</button>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
<div className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-emerald-400/30 transition">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-400">Total Emissions</span>

<svg className="w-5 h-5 text-emerald-300/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M12 2v2M12 20v2M5.22 5.22l1.42 1.42M17.36 17.36l1.42 1.42M2 12h2M20 12h2M5.22 18.78l1.42-1.42M17.36 6.64l1.42-1.42"></path></svg>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight"><span id="dashEmissions">2,430</span> tCO₂e</div>
<div className="mt-2 flex items-center gap-2 text-xs text-emerald-300">

<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
                -4.2% this week
              </div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-amber-400/30 transition">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-400">Carbon Saved (Month)</span>

<svg className="w-5 h-5 text-amber-300/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11 3a8.5 8.5 0 0 0 10 10 8.5 8.5 0 0 1-10 8 8.5 8.5 0 0 1-8-8 8.5 8.5 0 0 1 8-10z"></path><path d="M12 13l-1-1-2-2"></path></svg>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight"><span id="dashSaved">38</span> tCO₂e</div>
<div className="mt-2 text-xs text-slate-400">From LEDs + EV buses + HVAC tuning</div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-orange-400/30 transition">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-400">Top Eco-Warriors</span>

<svg className="w-5 h-5 text-orange-300/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M8 21h8"></path><path d="M12 17v4"></path><path d="M7 4h10v7a5 5 0 0 1-10 0V4z"></path><path d="M5 4H3v2a4 4 0 0 0 4 4"></path><path d="M19 4h2v2a4 4 0 0 1-4 4"></path></svg>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">Aarav • Zara • Ishan</div>
<div className="mt-2 text-xs text-emerald-300">Live leaderboard synced</div>
</div>
</div>

<div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
<div className="rounded-2xl bg-white/5 border border-white/10 p-5">
<div className="flex items-center justify-between">
<h3 className="text-sm text-slate-300">Emissions Trend</h3>

<svg className="w-4 h-4 text-emerald-300/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M3 3v18h18"></path><path d="M19 9l-5 5-4-4-6 6"></path></svg>
</div>
<div className="mt-4">
<div className="relative w-full h-48"><canvas id="emissionsChart"></canvas></div>
</div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-5">
<div className="flex items-center justify-between">
<h3 className="text-sm text-slate-300">Energy Mix</h3>

<svg className="w-4 h-4 text-amber-300/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M21.21 15.89A10 10 0 1 1 12 2v10z"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
</div>
<div className="mt-4">
<div className="relative w-full h-48"><canvas id="energyChart"></canvas></div>
</div>
</div>
</div>
</div>

<div className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">

<svg className="w-4 h-4 text-emerald-300/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="14" r="8"></circle><path d="M12 6v2"></path><path d="M12 14l4 4"></path></svg>
<h3 className="text-sm text-slate-300">Interactive Time Travel</h3>
</div>
<span className="text-xs text-slate-400" id="ttLabel">Year: Today</span>
</div>
<div className="mt-3">
<input className="w-full appearance-none bg-transparent" id="timeSlider" max="2" min="0" type="range" value="1"/>
<div className="flex justify-between text-[11px] text-slate-400 mt-1">
<span>Yesterday</span><span>Today</span><span>2030</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16 border-t border-white/10" id="twin">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">3D Carbon Map (Digital Twin)</h2>
<div className="text-xs text-slate-400">Map layer: MapmyIndia (mock) + 3D clouds</div>
</div>
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
<div className="relative">
<div className="relative" id="twinContainer">
<div className="relative w-full h-[420px] bg-[url('https://images.unsplash.com/photo-1489769002049-ccd828976a6c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60"></div>

<div className="absolute inset-0">

<div className="group absolute top-20 left-24">
<div className="w-20 h-20 rounded-full bg-emerald-300/20 blur-2xl"></div>
<div className="absolute -top-8 -left-4 px-2 py-1 rounded bg-black/70 text-xs border border-white/10 opacity-0 group-hover:opacity-100 transition">Library • CO₂: 180 • kWh: 14k • Water: 9k L</div>
</div>
<div className="group absolute top-40 left-1/2">
<div className="w-24 h-24 rounded-full bg-amber-300/20 blur-2xl"></div>
<div className="absolute -top-8 -left-10 px-2 py-1 rounded bg-black/70 text-xs border border-white/10 opacity-0 group-hover:opacity-100 transition">Lab A • CO₂: 420 • kWh: 22k • Water: 12k L</div>
</div>
<div className="group absolute bottom-16 right-20">
<div className="w-20 h-20 rounded-full bg-orange-300/20 blur-2xl"></div>
<div className="absolute -top-8 -left-8 px-2 py-1 rounded bg-black/70 text-xs border border-white/10 opacity-0 group-hover:opacity-100 transition">Dorms • CO₂: 320 • kWh: 18k • Water: 15k L</div>
</div>
</div>
</div>

<div className="absolute inset-0 pointer-events-none opacity-0 transition" id="greenerOverlay">
<div className="absolute inset-0 bg-emerald-400/5 mix-blend-screen"></div>
<div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_70%_30%,rgba(34,197,94,0.2),transparent_60%)]"></div>
</div>

<div className="hidden absolute top-4 right-4 px-3 py-2 rounded-lg bg-red-600/20 border border-red-500/30 text-red-200 text-xs flex items-center gap-2 shadow-lg" id="alertToast">

<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
                Spike detected at Lab A • +18% CO₂ in 10m
              </div>
</div>
<div className="p-4 flex items-center justify-between text-xs text-slate-400">
<div className="flex items-center gap-2">

<svg className="w-4 h-4 text-slate-300/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="m5 3 7-2 7 2-7 2-7-2"></path><path d="M5 7l7 2 7-2"></path><path d="M12 9v13"></path><path d="m5 19 7 2 7-2"></path></svg>
                Drag to explore • Hover buildings for metrics
              </div>
<button className="px-3 py-1.5 rounded-md bg-red-500/15 text-red-200 border border-red-500/30 hover:bg-red-500/25 transition" id="simulateSpike">Trigger Spike</button>
</div>
</div>
<div className="space-y-4">
<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
<h4 className="text-sm text-slate-300">Live Sensors</h4>
<div className="mt-3 grid grid-cols-3 gap-3 text-center">
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<div className="text-xs text-slate-400">CO₂ ppm</div>
<div className="text-lg font-semibold tracking-tight text-emerald-300" id="liveCO2">462</div>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<div className="text-xs text-slate-400">kWh</div>
<div className="text-lg font-semibold tracking-tight text-amber-300" id="liveKwh">3.2k</div>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<div className="text-xs text-slate-400">Water L</div>
<div className="text-lg font-semibold tracking-tight text-orange-300" id="liveWater">1.1k</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
<h4 className="text-sm text-slate-300">AR Demo Preview</h4>
<div className="mt-3 aspect-video rounded-lg bg-black/40 border border-white/10 overflow-hidden relative">
<video autoplay="" className="w-full h-full object-cover opacity-70" id="arPreview" loop="" muted="" playsinline="" src="https://videos.pexels.com/video-files/3129959/3129959-sd_640_360_24fps.mp4"></video>
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-4 left-4 px-2 py-1 rounded bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-[11px]">AR Overlay • Solar potential</div>
<div className="absolute bottom-4 right-4 px-2 py-1 rounded bg-orange-500/20 border border-orange-400/30 text-orange-200 text-[11px]">Tap building to inspect</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
<h4 className="text-sm text-slate-300">Event Log</h4>
<ul className="mt-3 space-y-2 text-xs text-slate-400 max-h-40 overflow-auto pr-1" id="eventLog">
<li>• Digital Twin initialized</li>
<li>• Sensors synced: 64 nodes</li>
<li>• Drone flight path loaded</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16 border-t border-white/10" id="simulations">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Simulations</h2>
<div className="text-xs text-slate-400">Before vs After • Real-time updates</div>
</div>
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-1 rounded-2xl bg-white/5 border border-white/10 p-5">
<div className="space-y-5">
<div>
<div className="flex items-center justify-between">
<label className="text-sm text-slate-300">Add Solar Panels</label>
<span className="text-xs text-emerald-300" id="solarVal">20%</span>
</div>
<input className="w-full mt-2 appearance-none bg-transparent" id="solar" max="100" min="0" type="range" value="20"/>
</div>
<div>
<div className="flex items-center justify-between">
<label className="text-sm text-slate-300">Convert Buses to EVs</label>
<span className="text-xs text-emerald-300" id="evVal">40%</span>
</div>
<input className="w-full mt-2 appearance-none bg-transparent" id="ev" max="100" min="0" type="range" value="40"/>
</div>
<div>
<div className="flex items-center justify-between">
<label className="text-sm text-slate-300">LED Lighting %</label>
<span className="text-xs text-emerald-300" id="ledVal">60%</span>
</div>
<input className="w-full mt-2 appearance-none bg-transparent" id="led" max="100" min="0" type="range" value="60"/>
</div>
<div className="flex items-center gap-3">
<button className="flex-1 px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 hover:bg-emerald-500/30 transition" id="applySim">Apply</button>
<button className="px-4 py-2 rounded-lg bg-white/5 text-slate-200 border border-white/10 hover:bg-white/10 transition" id="resetSim">Reset</button>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-3 text-xs text-slate-300">
<div>Projected Reduction</div>
<div className="mt-1 text-emerald-300 text-lg font-semibold tracking-tight"><span id="projReduction">-14.2%</span></div>
</div>
</div>
</div>
<div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
<div className="rounded-2xl bg-white/5 border border-white/10 p-5">
<div className="flex items-center justify-between">
<h3 className="text-sm text-slate-300">Before</h3>

<svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M3 12a9 9 0 1 0 9-9 9 9 0 0 0-9 9z"></path><polyline points="3 12 9 12 9 18"></polyline></svg>
</div>
<div className="mt-4">
<div className="relative w-full h-48"><canvas id="beforeChart"></canvas></div>
</div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-5">
<div className="flex items-center justify-between">
<h3 className="text-sm text-slate-300">After</h3>

<svg className="w-4 h-4 text-emerald-300/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><line points="17 18 23 18 23 12"></line></svg>
</div>
<div className="mt-4">
<div className="relative w-full h-48"><canvas id="afterChart"></canvas></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16 border-t border-white/10" id="drone">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Drone Insights</h2>
<div className="text-xs text-slate-400">Parking density • Roof scans • Heat anomalies</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
<div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-white/10">
<img alt="Drone Map" className="w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-3 left-3 px-3 py-1.5 rounded-md bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 hover:bg-emerald-500/30 transition text-xs flex items-center gap-2" id="droneOverlayBtn">

<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a10 10 0 1 0 10 10"></path><path d="M12 12L22 2"></path></svg>
                Show Overlay
              </button>
<div className="hidden absolute inset-0 bg-emerald-500/10 backdrop-blur-[2px]" id="droneOverlay">
<div className="absolute top-4 right-4 px-2 py-1 rounded bg-black/60 border border-white/10 text-xs">Roof Heat Anomaly • 7%</div>
<div className="absolute bottom-4 left-4 px-2 py-1 rounded bg-black/60 border border-white/10 text-xs">Parking Density • 65%</div>
</div>
</div>
<div className="mt-3 text-xs text-slate-400">Click overlays to view real-time images/data</div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center justify-between">
<h3 className="text-sm text-slate-300">Live Drone Feed (mock)</h3>

<svg className="w-4 h-4 text-slate-300/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M23 7l-7 5 7 5V7z"></path><rect height="14" rx="2" ry="2" width="15" x="1" y="5"></rect></svg>
</div>
<div className="mt-3 aspect-video rounded-lg overflow-hidden border border-white/10">
<video autoplay="" className="w-full h-full object-cover opacity-80" loop="" muted="" playsinline="" src="https://videos.pexels.com/video-files/855566/855566-uhd_2560_1440_25fps.mp4"></video>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16 border-t border-white/10" id="wallet">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">My Carbon Wallet</h2>
<button className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition text-xs flex items-center gap-2" id="qrOpen">

<svg className="w-4 h-4 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
            Scan QR
          </button>
</div>
<div className="grid lg:grid-cols-3 gap-6">
<div className="rounded-2xl bg-white/5 border border-white/10 p-5">
<div className="flex items-center justify-between">
<h3 className="text-sm text-slate-300">Wallet</h3>

<svg className="w-4 h-4 text-amber-300/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 7H5a3 3 0 0 0 0 6h15V7z"></path><path d="M20 13H6a3 3 0 0 0 0 6h14v-6z"></path></svg>
</div>
<div className="mt-4 rounded-xl bg-black/40 border border-white/10 p-4">
<div className="text-xs text-slate-400">Carbon Credits</div>
<div className="text-3xl font-semibold tracking-tight text-emerald-300"><span id="walletCredits">420</span> pts</div>
</div>
<div className="mt-4">
<div className="text-xs text-slate-400 mb-2">Log Eco-Action</div>
<div className="space-y-2">
<button className="ecoBtn w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-400/30 transition text-left text-sm" data-pts="5">Cycling to Campus • +5</button>
<button className="ecoBtn w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-400/30 transition text-left text-sm" data-pts="10">Tree Planting • +10</button>
<button className="ecoBtn w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-400/30 transition text-left text-sm" data-pts="8">Carpooling • +8</button>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-5">
<h3 className="text-sm text-slate-300">Leaderboard</h3>
<div className="mt-3 space-y-3">
<div className="flex items-center justify-between rounded-lg bg-black/30 border border-white/10 p-3 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full ring-2 ring-emerald-400/40" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm">Aarav</div>
<div className="text-[11px] text-emerald-300">Lvl 7 • 980 pts</div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.9)]"></div>
</div>
<div className="flex items-center justify-between rounded-lg bg-black/30 border border-white/10 p-3">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full ring-2 ring-amber-400/40" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm">Zara</div>
<div className="text-[11px] text-amber-300">Lvl 6 • 920 pts</div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
</div>
<div className="flex items-center justify-between rounded-lg bg-black/30 border border-white/10 p-3">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full ring-2 ring-orange-400/40" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm">Ishan</div>
<div className="text-[11px] text-orange-300">Lvl 6 • 910 pts</div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-5">
<h3 className="text-sm text-slate-300">Recent Actions</h3>
<ul className="mt-3 space-y-2 text-xs text-slate-300 max-h-56 overflow-auto pr-1" id="actionFeed">
<li>• You planted a tree • +10</li>
<li>• You biked to campus • +5</li>
</ul>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 items-center justify-center bg-black/70 backdrop-blur" id="qrModal">
<div className="w-[90%] max-w-md rounded-2xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center justify-between">
<h4 className="text-sm text-slate-300">QR Scanner</h4>
<button className="p-1 rounded-md hover:bg-white/10 transition" id="qrClose">

<svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</button>
</div>
<div className="mt-3 aspect-[3/4] rounded-lg overflow-hidden bg-black/30 border border-white/10">
<video className="w-full h-full object-cover" id="qrVideo"></video>
</div>
<div className="mt-3 text-xs text-slate-400">Point camera at event QR to earn eco-points.</div>
</div>
</div>
</section>

<section className="py-12 md:py-16 border-t border-white/10" id="advisor">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">AI Sustainability Advisor</h2>
<div className="text-xs text-slate-400">Ask: “How do we reduce Lab A’s emissions?”</div>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="md:col-span-2 rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
<div className="h-80 overflow-auto p-4 space-y-3" id="chat">
<div className="text-xs text-slate-400">Assistant ready. Type your question below.</div>
</div>
<div className="p-3 border-t border-white/10 flex items-center gap-2">
<input className="flex-1 bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400/30" id="chatInput" placeholder="Ask about emissions, actions, or strategies..."/>
<button className="px-3 py-2 rounded-md bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 hover:bg-emerald-500/30 transition flex items-center gap-2" id="chatSend">

<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
                Send
              </button>
</div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
<h3 className="text-sm text-slate-300">Suggested Prompts</h3>
<div className="mt-3 space-y-2">
<button className="prompt w-full text-left px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition text-xs">How to cut Lab A by 20% in 30 days?</button>
<button className="prompt w-full text-left px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition text-xs">Best solar % for our rooftops?</button>
<button className="prompt w-full text-left px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition text-xs">Optimize HVAC without comfort loss</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16 border-t border-white/10" id="forecast">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Future Forecasting</h2>
<div className="text-xs text-slate-400">2025 / 2030 CO₂ with side-by-side comparison</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="rounded-2xl bg-white/5 border border-white/10 p-5">
<div className="flex items-center justify-between">
<h3 className="text-sm text-slate-300">Projection</h3>

<svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
</div>
<div className="mt-4">
<div className="relative w-full h-56"><canvas id="forecastChart"></canvas></div>
</div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-5">
<div className="flex items-center justify-between">
<h3 className="text-sm text-slate-300">Greener Time-Lapse</h3>

<svg className="w-4 h-4 text-emerald-300/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M7 22V8l-5 6h10L7 8"></path><path d="M17 22v-7l-5 6h10l-5-6"></path></svg>
</div>
<div className="mt-4 relative overflow-hidden rounded-xl border border-white/10">
<img className="w-full h-56 object-cover opacity-60" src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 opacity-0 transition" id="greenWaves">
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(80%_60%_at_50%_100%,rgba(16,185,129,0.25),transparent_70%)]"></div>
<div className="absolute inset-x-0 bottom-10 h-1/3 bg-[radial-gradient(60%_35%_at_30%_100%,rgba(245,158,11,0.18),transparent_70%)]"></div>
</div>
</div>
<div className="mt-3">
<input className="w-full appearance-none bg-transparent" id="timelapse" max="100" min="0" type="range" value="0"/>
<div className="flex justify-between text-[11px] text-slate-400 mt-1">
<span>Now</span><span>2025</span><span>2030</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16 border-t border-white/10" id="team">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About / Team</h2>
<div className="text-xs text-slate-400">Open-source spirit • Built for hackathons</div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-5">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

<div className="group relative rounded-xl bg-black/30 border border-white/10 p-4 hover:-translate-y-1 transition will-change-transform">
<div className="absolute inset-0 rounded-xl ring-1 ring-white/10"></div>
<img className="w-full h-32 object-cover rounded-lg" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="mt-3">
<div className="text-sm font-medium">Aanya</div>
<div className="text-xs text-slate-400">Digital Twin Engineer</div>
</div>
</div>
<div className="group relative rounded-xl bg-black/30 border border-white/10 p-4 hover:-translate-y-1 transition">
<img className="w-full h-32 object-cover rounded-lg" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="mt-3">
<div className="text-sm font-medium">Vihaan</div>
<div className="text-xs text-slate-400">AI &amp; Forecasting</div>
</div>
</div>
<div className="group relative rounded-xl bg-black/30 border border-white/10 p-4 hover:-translate-y-1 transition">
<img className="w-full h-32 object-cover rounded-lg" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="mt-3">
<div className="text-sm font-medium">Kaira</div>
<div className="text-xs text-slate-400">Drone Ops</div>
</div>
</div>
<div className="group relative rounded-xl bg-black/30 border border-white/10 p-4 hover:-translate-y-1 transition">
<img className="w-full h-32 object-cover rounded-lg" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="mt-3">
<div className="text-sm font-medium">Reyansh</div>
<div className="text-xs text-slate-400">Product &amp; AR</div>
</div>
</div>
</div>
<div className="mt-6 text-xs text-slate-400">Background = glowing carbon-free green waves</div>
</div>
</div>
</section>

<div className="fixed bottom-3 inset-x-0 z-40 md:hidden px-4">
<div className="mx-auto max-w-md rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 p-2 flex items-center justify-around">
<a className="group p-2 rounded-lg hover:bg-white/10 transition" href="#dashboard">

<svg className="w-5 h-5 text-slate-300 group-hover:text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="9" width="7" x="3" y="3"></rect><rect height="5" width="7" x="14" y="3"></rect><rect height="9" width="7" x="14" y="12"></rect><rect height="7" width="7" x="3" y="14"></rect></svg>
</a>
<a className="group p-2 rounded-lg hover:bg-white/10 transition" href="#twin">

<svg className="w-5 h-5 text-slate-300 group-hover:text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
</a>
<a className="group p-2 rounded-lg hover:bg-white/10 transition" href="#simulations">

<svg className="w-5 h-5 text-slate-300 group-hover:text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.9 0 1.64.73 1.64 1.64S20.3 12.28 19.4 13z"></path></svg>
</a>
<a className="group p-2 rounded-lg hover:bg-white/10 transition" href="#wallet">

<svg className="w-5 h-5 text-slate-300 group-hover:text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 7H5a3 3 0 0 0 0 6h15V7z"></path><path d="M20 13H6a3 3 0 0 0 0 6h14v-6z"></path></svg>
</a>
<a className="group p-2 rounded-lg hover:bg-white/10 transition" href="#advisor">

<svg className="w-5 h-5 text-slate-300 group-hover:text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="10" rx="2" width="18" x="3" y="11"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><path d="M8 15h8"></path></svg>
</a>
</div>
</div>

<footer className="border-t border-white/10 py-10">
<div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">© 2025 Campus Climate Twin. Built for rapid prototyping and demos.</p>
<div className="flex items-center gap-3 text-xs text-slate-400">
<a className="hover:text-emerald-300 transition" href="#hero">Top</a>
<span className="text-white/20">•</span>
<a className="hover:text-emerald-300 transition" href="#dashboard">Dashboard</a>
<span className="text-white/20">•</span>
<a className="hover:text-emerald-300 transition" href="#twin">Digital Twin</a>
<span className="text-white/20">•</span>
<a className="hover:text-emerald-300 transition" href="#simulations">Simulations</a>
</div>
</div>
</footer>



    </>
  );
}
