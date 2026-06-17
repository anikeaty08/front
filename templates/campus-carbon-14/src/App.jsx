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



    // Icon initialization with consistent stroke
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) {
        window.lucide.createIcons({
          attrs: { 'stroke-width': 1.75, 'vector-effect': 'non-scaling-stroke' }
        });
      }
    });

    // Utility
    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
    const fmt = (n, d = 0) => Number(n).toLocaleString(undefined, { maximumFractionDigits: d });
    const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

    // Year
    $('#year').textContent = new Date().getFullYear();

    // Tagline rotator
    const taglines = [
      'Real-time Sustainability Monitoring',
      'Turn data into climate action',
      'Map, model, and reduce emissions',
      'Gamify your path to Net Zero'
    ];
    let tIdx = 0;
    setInterval(() => {
      tIdx = (tIdx + 1) % taglines.length;
      const el = $('#tagline');
      el.style.opacity = '0';
      setTimeout(() => {
        el.textContent = taglines[tIdx];
        el.style.opacity = '1';
      }, 220);
    }, 3500);

    // User menu
    (function () {
      const btn = $('#userBtn');
      const menu = $('#userMenu');
      const toggle = () => menu.classList.toggle('hidden');
      btn?.addEventListener('click', (e) => { e.stopPropagation(); toggle(); });
      document.addEventListener('click', () => { if (!menu.classList.contains('hidden')) menu.classList.add('hidden'); });
    })();

    // Hero particles (2D)
    (function () {
      const canvas = $('#heroParticles');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let dpr = window.devicePixelRatio || 1;
      let W, H;
      const particles = Array.from({ length: 80 }, () => ({
        x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.0006, vy: (Math.random() - 0.5) * 0.0006
      }));
      const resize = () => {
        W = canvas.clientWidth; H = canvas.clientHeight;
        canvas.width = W * dpr; canvas.height = H * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      };
      resize(); window.addEventListener('resize', resize);
      function step() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > 1) p.vx *= -1;
          if (p.y < 0 || p.y > 1) p.vy *= -1;
          const x = p.x * W, y = p.y * H;
          ctx.beginPath();
          ctx.arc(x, y, 1.6, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0,217,255,0.65)';
          ctx.fill();
        });
        requestAnimationFrame(step);
      }
      step();
    })();

    // Map and fallback logic
    let leafletMap = null;
    let heatLayer = null;
    const mapDiv = $('#mapmyindia');
    const overlay = $('#mapFallback');
    const mmiInput = $('#mmiTokenInput');
    const mmiSave = $('#mmiTokenSave');
    const mmiStatus = $('#mmiStatus');

    const buildings = [
      { id: 'lib', name: 'Main Library', lat: 28.5452, lng: 77.1925, emissions: 22.3, energy: 13800, severity: 'mid', action: 'Switch to smart lighting after 8pm.' },
      { id: 'lab', name: 'Energy Lab', lat: 28.5446, lng: 77.1916, emissions: 34.9, energy: 20120, severity: 'high', action: 'Tune AHU schedule; reduce idle load.' },
      { id: 'gym', name: 'Sports Complex', lat: 28.5459, lng: 77.1931, emissions: 12.4, energy: 8200, severity: 'low', action: 'Install VFD on circulation pumps.' },
      { id: 'hall', name: 'Admin Block', lat: 28.5463, lng: 77.1920, emissions: 18.1, energy: 10950, severity: 'mid', action: 'Optimize chiller setpoints by +1°C.' },
      { id: 'hostel', name: 'North Hostel', lat: 28.5450, lng: 77.1909, emissions: 28.0, energy: 14500, severity: 'high', action: 'Thermal audit: windows and ducts.' }
    ];

    function severityColor(s) {
      switch (s) {
        case 'low': return '#00FF94';
        case 'mid': return '#FACC15';
        case 'high': return '#F97316';
        default: return '#FF6B35';
      }
    }

    function initLeaflet() {
      if (!mapDiv) return;
      const center = [28.5455, 77.1920];
      leafletMap = L.map(mapDiv, {
        zoomControl: false,
        attributionControl: false
      }).setView(center, 17);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20
      }).addTo(leafletMap);

      // Simple heat from building emissions
      const heatData = buildings.map(b => [b.lat, b.lng, Math.min(1, b.emissions / 40)]);
      heatLayer = L.heatLayer(heatData, { radius: 30, blur: 18, maxZoom: 19, gradient: { 0.2: '#00FF94', 0.5: '#F59E0B', 0.8: '#F97316', 1.0: '#FF6B35' } }).addTo(leafletMap);

      // Building markers
      buildings.forEach(b => {
        const marker = L.circleMarker([b.lat, b.lng], {
          radius: 8,
          color: severityColor(b.severity),
          weight: 2,
          fillOpacity: 0.2
        }).addTo(leafletMap);

        marker.on('mouseover', (e) => showBuildingCard(b, e.latlng));
        marker.on('mousemove', (e) => moveBuildingCard(e.latlng));
        marker.on('mouseout', hideBuildingCard);
        marker.on('click', () => leafletMap.setView([b.lat, b.lng], 18));
      });

      // UI transform: turn full overlay into a compact token card
      if (overlay) {
        overlay.className = 'absolute right-3 bottom-3 z-10';
        overlay.innerHTML = `
          <div class="rounded-2xl bg-[#0A0E27]/90 backdrop-blur border border-white/10 p-4 w-[320px] shadow-xl">
            <div class="flex items-center gap-2">
              <i data-lucide="key" class="w-4 h-4 text-[#00D9FF]"></i>
              <div class="text-sm text-white/80" style="font-family: Inter, system-ui, sans-serif;">Enable official map</div>
              <button id="dismissOverlay" class="ml-auto rounded-lg p-1.5 bg-white/5 border border-white/10 hover:bg-white/10 transition" aria-label="Dismiss token card"><i data-lucide="x" class="w-4 h-4"></i></button>
            </div>
            <div class="mt-2 text-xs text-white/60" style="font-family: Inter, system-ui, sans-serif;">Paste your MapmyIndia token to load base map + 3D buildings.</div>
            <div class="mt-3 flex items-center gap-2">
              <input id="mmiTokenInput" type="text" placeholder="Paste API token" class="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs outline-none focus:ring-2 focus:ring-[#00D9FF]/40" style="font-family: Inter, system-ui, sans-serif;">
              <button id="mmiTokenSave" class="px-3 py-2 rounded-lg bg-[#00D9FF] text-[#0A0E27] font-medium tracking-tight hover:scale-[1.02] transition text-xs" style="font-family: Inter, system-ui, sans-serif;">Add</button>
            </div>
            <div id="mmiStatus" class="mt-2 text-[11px] text-white/60" style="font-family: Inter, system-ui, sans-serif;"></div>
          </div>
        `;
        window.lucide?.createIcons({ attrs: { 'stroke-width': 1.75 } });
        $('#dismissOverlay')?.addEventListener('click', () => overlay.remove());
        // Rebind controls
        mmiBind();
      }

      // Basic controls
      const zoomInBtn = document.querySelector('button:has(> i[data-lucide="zoom-in"])');
      const zoomOutBtn = document.querySelector('button:has(> i[data-lucide="zoom-out"])');
      zoomInBtn?.addEventListener('click', () => leafletMap.setZoom(leafletMap.getZoom() + 1));
      zoomOutBtn?.addEventListener('click', () => leafletMap.setZoom(leafletMap.getZoom() - 1));
    }

    function mmiBind() {
      const input = $('#mmiTokenInput');
      const save = $('#mmiTokenSave');
      const status = $('#mmiStatus');
      if (!save || !input) return;
      save.addEventListener('click', async () => {
        const token = input.value.trim();
        if (!token) { status.textContent = 'Please paste a valid token.'; return; }
        status.textContent = 'Loading MapmyIndia...';
        await loadMMI(token).catch(() => {});
      });
    }

    async function loadMMI(token) {
      return new Promise((resolve, reject) => {
        try {
          localStorage.setItem('mmi_token', token);
          const script = document.getElementById('mmi-sdk');
          if (script) script.src = `https://apis.mapmyindia.com/advancedmaps/v1/${token}/map_load?v=1.5`;
          const done = () => {
            try {
              // eslint-disable-next-line no-undef
              const mmiMap = new MapmyIndia.Map('mapmyindia', { center: [28.5455, 77.1920], zoom: 17 });
              // Add markers on MMI too
              buildings.forEach(b => {
                // eslint-disable-next-line no-undef
                const m = new MapmyIndia.Marker({ position: { lat: b.lat, lng: b.lng }, map: mmiMap, icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png' });
                if (m && m.addListener) {
                  m.addListener('mouseover', (e) => showBuildingCard(b, { lat: b.lat, lng: b.lng }));
                }
              });
              // Hide overlay card if present
              overlay?.remove();
              // Remove Leaflet instance if any
              if (leafletMap) { leafletMap.remove(); leafletMap = null; }
              $('#mmiStatus')?.textContent && ($('#mmiStatus').textContent = 'MapmyIndia loaded.');
              resolve();
            } catch (err) {
              console.warn('MMI not available yet, retrying...', err);
              setTimeout(done, 800);
            }
          };
          setTimeout(done, 600);
        } catch (e) {
          console.error(e);
          $('#mmiStatus')?.textContent && ($('#mmiStatus').textContent = 'Failed to load. Check token and network.');
          reject(e);
        }
      });
    }

    // Building hover card
    const bCard = $('#buildingCard');
    const bTitle = bCard?.querySelector('h4');
    const bSev = $('#b-severity');
    const bEm = $('#b-emissions');
    const bEn = $('#b-energy');
    const bAct = $('#b-action');

    function showBuildingCard(b, latlng) {
      if (!leafletMap && !latlng) {
        bCard?.classList.remove('hidden');
        return;
      }
      moveBuildingCard(latlng, b);
      if (bTitle) bTitle.textContent = b.name;
      if (bEm) bEm.textContent = `${fmt(b.emissions, 1)}`;
      if (bEn) bEn.textContent = `${fmt(b.energy)}`;
      if (bAct) bAct.textContent = b.action;
      if (bSev) {
        bSev.textContent = b.severity.toUpperCase();
        bSev.className = 'px-2 py-0.5 rounded-md text-[10px]';
        const color = severityColor(b.severity);
        bSev.style.color = color;
        bSev.style.background = color + '1A';
        bSev.style.border = `1px solid ${color}55`;
      }
      bCard?.classList.remove('hidden');
    }

    function moveBuildingCard(latlng, b) {
      if (!bCard) return;
      let x = 12, y = 12;
      if (leafletMap && latlng) {
        const pt = leafletMap.latLngToContainerPoint(latlng);
        x = pt.x + 14; y = pt.y - 14;
      }
      bCard.style.left = x + 'px';
      bCard.style.top = y + 'px';
    }

    function hideBuildingCard() {
      bCard?.classList.add('hidden');
    }

    // Layer buttons
    const layerBtns = $$('.layerBtn');
    const activeLayers = new Set();
    function updateActiveLayersUI() {
      const wrap = $('#activeLayers');
      if (!wrap) return;
      wrap.innerHTML = '';
      activeLayers.forEach(name => {
        const tag = document.createElement('span');
        tag.className = 'inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/10';
        tag.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5 text-[#00FF94]"></i> ${name}`;
        wrap.appendChild(tag);
      });
      window.lucide?.createIcons({ attrs: { 'stroke-width': 1.75 } });
    }
    layerBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.dataset.layer;
        if (activeLayers.has(name)) {
          activeLayers.delete(name);
          btn.classList.remove('bg-white/10');
        } else {
          activeLayers.add(name);
          btn.classList.add('bg-white/10');
        }
        // Example: toggle heat layer on 'energy'
        if (name === 'energy' && heatLayer && leafletMap) {
          if (leafletMap.hasLayer(heatLayer)) leafletMap.removeLayer(heatLayer);
          else heatLayer.addTo(leafletMap);
        }
        updateActiveLayersUI();
      });
    });

    // Three.js overlay: subtle bars and carbon "clouds"
    (function () {
      const canvas = $('#mapClouds');
      if (!canvas) return;
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      let W = canvas.clientWidth, H = canvas.clientHeight;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(35, W / H, 0.1, 100);
      camera.position.set(0, 5.5, 9);

      const light = new THREE.HemisphereLight(0xffffff, 0x111122, 1);
      scene.add(light);

      // Ground grid (subtle)
      const grid = new THREE.GridHelper(20, 20, 0x0ea5e9, 0x0ea5e9);
      grid.material.opacity = 0.08; grid.material.transparent = true;
      scene.add(grid);

      // Bars
      const group = new THREE.Group();
      buildings.forEach((b, i) => {
        const h = 0.5 + (b.emissions / 40) * 2.2;
        const geo = new THREE.BoxGeometry(0.4, h, 0.4);
        const col = new THREE.Color(severityColor(b.severity));
        const mat = new THREE.MeshStandardMaterial({ color: col, metalness: 0.1, roughness: 0.5, transparent: true, opacity: 0.7 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set((i - 2) * 1.2, h / 2, (Math.sin(i) * 1.0));
        mesh.userData.baseH = h;
        group.add(mesh);
      });
      scene.add(group);

      // Carbon clouds as billboards
      const particles = new THREE.Group();
      const pGeo = new THREE.SphereGeometry(0.03, 8, 8);
      const pMat = new THREE.MeshBasicMaterial({ color: 0x00d9ff, transparent: true, opacity: 0.35 });
      for (let i = 0; i < 180; i++) {
        const p = new THREE.Mesh(pGeo, pMat.clone());
        p.position.set((Math.random() - 0.5) * 6, 0.8 + Math.random() * 1.8, (Math.random() - 0.5) * 6);
        particles.add(p);
      }
      scene.add(particles);

      function resize() {
        W = canvas.clientWidth; H = canvas.clientHeight;
        renderer.setSize(W, H, false);
        camera.aspect = W / H; camera.updateProjectionMatrix();
      }
      window.addEventListener('resize', resize);
      resize();

      let t = 0;
      function animate() {
        t += 0.01;
        group.children.forEach((m, i) => {
          m.scale.y = 0.95 + Math.sin(t + i) * 0.05;
        });
        particles.children.forEach((p, i) => {
          p.position.y += Math.sin(t + i) * 0.0008;
          p.material.opacity = 0.25 + (Math.sin(t * 2 + i) * 0.5 + 0.5) * 0.25;
        });
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
      animate();
    })();

    // KPIs + dashboard charts
    const demoTotal = 120.4; // tCO2/mo
    function initKPIs() {
      $('#totalEmissions').textContent = fmt(demoTotal, 1);
      $('#kpiEmissions').textContent = fmt(1480.5, 1);
      $('#kpiEnergy').textContent = fmt(982340);
      $('#kpiWarriors').textContent = fmt(412);
      $('#kpiTrees').textContent = fmt(6580);
      const trend = +((Math.random() - 0.2) * 5).toFixed(1);
      const trendStr = `${trend > 0 ? '+' : ''}${trend}%`;
      const trendElms = ['#emissionTrend', '#kpiEmissionsTrend'].map(sel => $(sel));
      trendElms.forEach(el => {
        if (!el) return;
        el.textContent = trendStr;
        el.classList.remove('text-[#00FF94]', 'text-[#FF6B35]');
        el.style.color = trend <= 0 ? '#00FF94' : '#FF6B35';
      });
      const bar = $('#emissionBar');
      if (bar) bar.style.width = clamp(30 + (demoTotal / 2), 10, 95) + '%';
    }

    function initCharts() {
      const lineCtx = $('#lineChart');
      const donutCtx = $('#donutChart');
      const barCtx = $('#barChart');

      const months = Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString(undefined, { month: 'short' }));
      new Chart(lineCtx, {
        type: 'line',
        data: {
          labels: months,
          datasets: [{
            label: 'Emissions',
            data: months.map(() => 90 + Math.round(Math.random() * 40)),
            borderColor: '#00D9FF',
            tension: 0.35,
            fill: true,
            backgroundColor: 'rgba(0,217,255,0.12)'
          }]
        },
        options: {
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: 'rgba(255,255,255,0.7)' } },
            y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: 'rgba(255,255,255,0.7)' } }
          }
        }
      });

      new Chart(donutCtx, {
        type: 'doughnut',
        data: {
          labels: ['Energy', 'Transport', 'Waste', 'Water'],
          datasets: [{
            data: [58, 22, 12, 8],
            backgroundColor: ['#00D9FF', '#F59E0B', '#FF6B35', '#00FF94'],
            borderWidth: 0
          }]
        },
        options: {
          plugins: { legend: { display: false } },
          cutout: '62%'
        }
      });

      new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: buildings.map(b => b.name),
          datasets: [{
            label: 'tCO₂/mo',
            data: buildings.map(b => b.emissions),
            backgroundColor: buildings.map(b => severityColor(b.severity) + 'CC')
          }]
        },
        options: {
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false }, ticks: { color: 'rgba(255,255,255,0.7)' } },
            y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: 'rgba(255,255,255,0.7)' } }
          }
        }
      });
    }

    // Leaderboard and feed
    function initLeaderboard() {
      const lb = $('#leaderboard');
      const people = [
        { name: 'Alex Green', pts: 1280 },
        { name: 'Priya Singh', pts: 1210 },
        { name: 'Rahul Mehta', pts: 1155 },
        { name: 'Sara Lee', pts: 1102 },
        { name: 'Nikhil Rao', pts: 1074 }
      ];
      lb.innerHTML = '';
      people.forEach((p, i) => {
        const row = document.createElement('div');
        row.className = 'flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 p-2';
        row.innerHTML = `
          <div class="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs">${i + 1}</div>
          <div class="flex-1">
            <div class="text-sm">${p.name}</div>
            <div class="text-[11px] text-white/60">${fmt(p.pts)} pts</div>
          </div>
          <button class="rounded-lg p-2 bg-white/5 border border-white/10 hover:bg-white/10 transition" aria-label="Applaud">
            <i data-lucide="sparkles" class="w-4 h-4 text-[#00FF94]"></i>
          </button>
        `;
        lb.appendChild(row);
      });
      window.lucide?.createIcons({ attrs: { 'stroke-width': 1.75 } });
    }

    function initFeed() {
      const ticker = $('#feedTicker');
      const items = [
        'Alex logged "Cycled Today" (+20)',
        'Priya used Steel Bottle (+10)',
        'Rahul carpooled (+15)',
        'Sara switched off AC (+12)',
        'Nikhil planted a tree (+30)'
      ];
      const content = document.createElement('div');
      content.className = 'absolute left-0 right-0';
      content.style.willChange = 'transform';
      content.innerHTML = items.concat(items).map((t, i) => `
        <div class="px-3 py-2 border-b border-white/10 text-sm text-white/80 bg-white/[0.02]">${t}</div>
      `).join('');
      ticker.innerHTML = ''; ticker.appendChild(content);
      let y = 0;
      function scroll() {
        y -= 0.3;
        if (Math.abs(y) > content.scrollHeight / 2) y = 0;
        content.style.transform = `translateY(${y}px)`;
        requestAnimationFrame(scroll);
      }
      scroll();
    }

    // Action modal and QR
    function toggleActionModal(show) {
      const modal = $('#actionModal');
      if (!modal) return;
      if (show) modal.classList.remove('hidden');
      else modal.classList.add('hidden');
    }
    $('#fabLogAction')?.addEventListener('click', () => toggleActionModal(true));

    $$('.actionBtn').forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.dataset.action || 'Eco Action';
        showToast(`Logged: ${name}`);
        // credit wallet
        const current = parseInt($('#navScore').textContent || '0', 10);
        $('#navScore').textContent = fmt(current + 10);
      });
    });

    function showToast(msg) {
      const toast = $('#toast');
      toast.textContent = msg;
      toast.classList.remove('hidden');
      toast.setAttribute('aria-live', 'polite');
      setTimeout(() => toast.classList.add('hidden'), 1800);
    }

    // Generate QR
    (function makeQR() {
      const el = $('#qr');
      if (!el) return;
      el.innerHTML = '';
      new QRCode(el, {
        text: 'campus://eco-action/log',
        width: 120,
        height: 120,
        colorDark: '#00FF94',
        colorLight: '#0A0E27',
        correctLevel: QRCode.CorrectLevel.H
      });
    })();

    // Wallet logic
    function initWallet() {
      const bal = 540; // demo CC
      $('#walletBalance').textContent = fmt(bal);
      $('#walletTrend').textContent = '+4.2%';
      $('#walletTrend').style.color = '#00FF94';

      const tx = [
        { name: 'Cycled Today', delta: +20, time: '2h ago' },
        { name: 'Cafe Voucher', delta: -80, time: '1d ago' },
        { name: 'Switched Off AC', delta: +12, time: '3d ago' },
        { name: 'Solar Lab Tour', delta: -300, time: '1w ago' }
      ];
      const wrap = $('#txList');
      wrap.innerHTML = '';
      tx.forEach(t => {
        const row = document.createElement('div');
        row.className = 'flex items-center justify-between rounded-lg bg-white/5 border border-white/10 p-3';
        row.innerHTML = `
          <div>
            <div class="text-sm" style="font-family: Inter, system-ui, sans-serif;">${t.name}</div>
            <div class="text-[11px] text-white/60">${t.time}</div>
          </div>
          <div class="text-sm ${t.delta > 0 ? 'text-[#00FF94]' : 'text-[#FF6B35]'}" style="font-family: JetBrains Mono, monospace;">
            ${t.delta > 0 ? '+' : ''}${t.delta} CC
          </div>
        `;
        wrap.appendChild(row);
      });

      $('#copyAddr')?.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText($('#walletAddr').textContent.trim());
          showToast('Wallet address copied');
        } catch {
          showToast('Copy failed');
        }
      });

      $$('.redeemBtn').forEach(btn => {
        btn.addEventListener('click', () => {
          const cost = parseInt(btn.dataset.cost || '0', 10);
          const cur = parseInt($('#walletBalance').textContent.replace(/,/g, ''), 10);
          const msg = $('#redeemMsg');
          if (cur >= cost) {
            $('#walletBalance').textContent = fmt(cur - cost);
            msg.textContent = `Redeemed successfully (-${cost} CC). Check your email for details.`;
            msg.style.color = '#00FF94';
          } else {
            msg.textContent = `Insufficient balance. You need ${cost - cur} more CC.`;
            msg.style.color = '#FF6B35';
          }
        });
      });

      $('#btnClaim')?.addEventListener('click', () => showToast('Offsets claimed successfully'));
      $('#btnSend')?.addEventListener('click', () => showToast('Send feature coming soon'));
    }

    // Simulations logic
    (function simInit() {
      const hvac = $('#simHvac');
      const light = $('#simLighting');
      const solar = $('#simSolar');
      const vH = $('#vHvac'), vL = $('#vLighting'), vS = $('#vSolar');
      const outE = $('#simEmissions'), outEn = $('#simEnergy'), outC = $('#simCost'), bar = $('#simBar');

      const base = { emissions: 120, energy: 980000, cost: 215000 }; // demo baselines
      function recalc() {
        const dh = parseInt(hvac.value, 10);
        const dl = parseInt(light.value, 10);
        const ds = parseInt(solar.value, 10);

        vH.textContent = dh.toString();
        vL.textContent = `${dl}%`;
        vS.textContent = `${ds}%`;

        // very simple model
        const saveH = dh * 1.8; // tCO2
        const saveL = dl * 0.15;
        const solarOffset = ds * 0.35;
        const projE = clamp(base.emissions - (saveH + saveL + solarOffset), 40, base.emissions);
        const energySave = Math.round((dh * 6000) + (dl * 1200) + (ds * 1800));
        const costSave = Math.round(energySave * 7.5);

        outE.textContent = fmt(projE, 1);
        outEn.textContent = fmt(energySave);
        outC.textContent = fmt(Math.max(0, base.cost - costSave));
        bar.style.width = clamp(100 - ((projE / base.emissions) * 100), 5, 95) + '%';

        const tips = $('#simTips');
        tips.children[0].textContent = dh >= 2 ? 'Great: +2°C setpoint reduces peak loads significantly.' : 'Try +2°C setpoint during low occupancy.';
        tips.children[1].textContent = dl >= 25 ? 'Lighting cuts >25%: schedule daylight harvesting.' : 'LED retrofits can yield 15–20% savings.';
        tips.children[2].textContent = ds >= 30 ? 'Solar >30%: plan battery time shift to evening.' : 'Scale solar to 30% for best ROI on rooftops.';
      }
      ['input', 'change'].forEach(evt => [hvac, light, solar].forEach(el => el?.addEventListener(evt, recalc)));
      $('#resetSim')?.addEventListener('click', () => {
        hvac.value = 0; light.value = 0; solar.value = 0; recalc();
      });
      recalc();
    })();

    // Initialize everything after DOM
    document.addEventListener('DOMContentLoaded', () => {
      initKPIs();
      initCharts();
      initLeaderboard();
      initFeed();
      initWallet();
      mmiBind();

      const token = localStorage.getItem('mmi_token');
      if (token) loadMMI(token).catch(() => initLeaflet());
      else initLeaflet();

      // Nav zoom/rotate dummy handlers
      const rotateBtn = document.querySelector('button:has(> i[data-lucide="rotate-3d"])');
      rotateBtn?.addEventListener('click', () => showToast('Rotate available on 3D overlay. Drag to view.'));

      // Animate milestone bar to match score
      const mbar = $('#milestoneBar');
      setTimeout(() => { if (mbar) mbar.style.width = '68%'; }, 600);
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
      

<div className="w-full sticky top-0 z-[70] bg-white/5 backdrop-blur border-b border-white/10" id="emergencyBar">
<div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="relative inline-flex">
<span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#FF6B35]"></span>
<span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#FF6B35] opacity-75 animate-ping"></span>
</span>
<p className="text-sm font-medium" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Critical: Emission spike detected at Energy Lab (+18% in last hour). <a className="underline text-[#00D9FF] hover:text-white transition-colors" href="#map">View Details</a></p>
</div>
<button className="text-white/70 hover:text-white transition-colors" onclick="document.getElementById('emergencyBar').classList.add('hidden')">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
</div>

<header className="sticky top-8 z-[60]">
<div className="max-w-7xl mx-auto px-4">
<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 px-4 md:px-6 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center">
<span className="text-[#00D9FF] font-semibold tracking-tight" style={{fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif'}}>CC</span>
</div>
<div className="hidden md:flex items-center gap-6 text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
<a className="text-white/75 hover:text-white transition-colors" href="#dashboard">Dashboard</a>
<a className="text-white/75 hover:text-white transition-colors" href="#map">3D Map</a>
<a className="text-white/75 hover:text-white transition-colors" href="#simulate">Simulations</a>
<a className="text-white/75 hover:text-white transition-colors" href="#challenge">Eco Challenge</a>
<a className="text-white/75 hover:text-white transition-colors" href="#wallet">My Wallet</a>
<a className="text-white/75 hover:text-white transition-colors" href="#drone">Drone Insights</a>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-2 py-1.5">
<span className="px-2 py-0.5 rounded-md bg-[#00FF94]/10 text-[#00FF94] text-xs font-medium" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Score: <span className="font-[600]" id="navScore">1280</span></span>
<span className="text-xs text-white/60">Eco Level</span>
</div>
<button className="md:hidden rounded-lg p-2 bg-white/5 border border-white/10 hover:border-white/20 transition">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<div className="relative">
<button className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-3 py-1.5 hover:bg-white/10 transition" id="userBtn">
<img alt="user" className="h-7 w-7 rounded-lg object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-left hidden sm:block">
<div className="text-sm font-medium leading-4" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Alex Green</div>
<div className="text-[11px] text-white/60">Eco Warrior</div>
</div>
<i className="w-4 h-4 text-white/70" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 mt-2 w-56 rounded-xl bg-[#0A0E27]/95 backdrop-blur border border-white/10 shadow-2xl" id="userMenu">
<div className="p-2">
<a className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition" href="#wallet">
<i className="w-4 h-4 text-[#00D9FF]" data-lucide="wallet"></i>
<span className="text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Carbon Wallet</span>
</a>
<a className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition" href="#challenge">
<i className="w-4 h-4 text-[#00FF94]" data-lucide="trophy"></i>
<span className="text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Eco Challenge</span>
</a>
<button className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition">
<i className="w-4 h-4 text-white/70" data-lucide="settings"></i>
<span className="text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Settings</span>
</button>
<div className="my-2 border-t border-white/10"></div>
<button className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition">
<i className="w-4 h-4 text-white/70" data-lucide="log-out"></i>
<span className="text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Sign out</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden" id="hero">
<canvas className="absolute inset-0 w-full h-full" id="heroParticles"></canvas>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="mx-auto w-full md:w-[85%] rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 shadow-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 mb-6">
<i className="w-4 h-4 text-[#00D9FF]" data-lucide="radar"></i>
<span className="text-xs tracking-tight" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Real-time Campus Sustainability</span>
</div>
<h1 className="text-3xl md:text-5xl lg:text-6xl tracking-tight font-semibold leading-tight" style={{fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif'}}>Campus Carbon Digital Twin</h1>
<p className="mt-4 text-white/70 text-base md:text-lg" id="tagline" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Real-time Sustainability Monitoring</p>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00D9FF] text-[#0A0E27] font-medium tracking-tight hover:shadow-[0_0_0_3px_rgba(0,217,255,0.2)] hover:scale-[1.03] transition will-change-transform" href="#map" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
<i className="w-5 h-5" data-lucide="map"></i>
            Explore 3D Map
            <span className="ml-1 relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A0E27] opacity-40"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#0A0E27]"></span>
</span>
</a>
<a className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00FF94] text-[#0A0E27] font-medium tracking-tight hover:shadow-[0_0_0_3px_rgba(0,255,148,0.2)] hover:scale-[1.03] transition will-change-transform" href="#challenge" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
<i className="w-5 h-5" data-lucide="gamepad-2"></i>
            Join Eco Challenge
          </a>
</div>
<div className="mt-8 flex items-center justify-center gap-6 text-xs text-white/60" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
<span className="inline-flex items-center gap-2"><i className="w-4 h-4 text-[#00FF94]" data-lucide="activity"></i> Live metrics</span>
<span className="inline-flex items-center gap-2"><i className="w-4 h-4 text-[#00D9FF]" data-lucide="cube"></i> 3D emissions</span>
<span className="inline-flex items-center gap-2"><i className="w-4 h-4 text-white/70" data-lucide="bot"></i> AI suggestions</span>
</div>
</div>
</div>
<div className="pointer-events-none absolute inset-0 -z-0">
<div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[#00D9FF]/10 blur-3xl"></div>
<div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-[#00FF94]/10 blur-3xl"></div>
</div>
</section>

<section className="relative py-16 md:py-20" id="map">
<div className="max-w-7xl mx-auto px-4">
<div className="flex items-end justify-between mb-6">
<div>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold" style={{fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif'}}>Interactive 3D Carbon Map</h2>
<p className="text-white/60 mt-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Visualize emissions by building with carbon clouds, heatmaps, and layers.</p>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}><i className="w-4 h-4" data-lucide="zoom-in"></i></button>
<button className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}><i className="w-4 h-4" data-lucide="zoom-out"></i></button>
<button className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}><i className="w-4 h-4" data-lucide="rotate-3d"></i></button>
</div>
</div>
<div className="grid lg:grid-cols-4 gap-5">
<div className="lg:col-span-3 relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10">
<div className="h-[520px] relative" id="mapContainer">
<div className="absolute inset-0" id="mapmyindia"></div>

<div className="absolute inset-0 flex items-center justify-center bg-[#0A0E27]" id="mapFallback">
<div className="text-center px-6">
<div className="mx-auto h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
<i className="w-8 h-8 text-[#00D9FF]" data-lucide="map"></i>
</div>
<p className="mt-4 text-white/70" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Map layer requires a valid MapmyIndia API key.</p>
<p className="text-xs text-white/50" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Add your token to enable base map and 3D building footprints.</p>

<div className="mt-4 max-w-sm mx-auto">
<div className="flex items-center gap-2">
<input className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm outline-none focus:outline-none focus:ring-2 focus:ring-[#00D9FF]/40" id="mmiTokenInput" placeholder="Paste API token" style={{fontFamily: 'Inter, system-ui, sans-serif'}} type="text"/>
<button className="px-3 py-2 rounded-lg bg-[#00D9FF] text-[#0A0E27] font-medium tracking-tight hover:scale-[1.02] transition text-sm" id="mmiTokenSave" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Add</button>
</div>
<div className="mt-2 text-xs text-white/60" id="mmiStatus" style={{fontFamily: 'Inter, system-ui, sans-serif'}}></div>
</div>
</div>
</div>

<canvas className="absolute inset-0 pointer-events-none" id="mapClouds"></canvas>

<div className="hidden absolute z-10 min-w-[220px] rounded-xl bg-[#0A0E27]/95 backdrop-blur border border-white/10 p-3" id="buildingCard">
<div className="flex items-center justify-between">
<h4 className="text-sm font-medium tracking-tight" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>—</h4>
<span className="px-2 py-0.5 rounded-md text-[10px]" id="b-severity">—</span>
</div>
<div className="mt-2 grid grid-cols-2 gap-2">
<div className="rounded-lg bg-white/5 border border-white/10 p-2.5">
<div className="text-[10px] text-white/60">Emissions</div>
<div className="text-sm font-[600] tracking-tight" id="b-emissions" style={{fontFamily: 'JetBrains Mono, monospace'}}>—</div>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-2.5">
<div className="text-[10px] text-white/60">Energy</div>
<div className="text-sm font-[600] tracking-tight" id="b-energy" style={{fontFamily: 'JetBrains Mono, monospace'}}>—</div>
</div>
</div>
<div className="mt-2">
<div className="text-[10px] text-white/60">Action</div>
<div className="text-xs text-white/90" id="b-action">—</div>
</div>
</div>
</div>

<div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center gap-2">
<div className="flex items-center gap-2 rounded-xl bg-[#0A0E27]/80 backdrop-blur border border-white/10 p-2">
<span className="text-xs text-white/60 px-2" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Layers</span>
<button className="layerBtn inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-xs" data-layer="energy">
<i className="w-4 h-4 text-[#00D9FF]" data-lucide="bolt"></i> Energy
              </button>
<button className="layerBtn inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-xs" data-layer="water">
<i className="w-4 h-4 text-[#00FF94]" data-lucide="droplets"></i> Water
              </button>
<button className="layerBtn inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-xs" data-layer="waste">
<i className="w-4 h-4 text-[#FF6B35]" data-lucide="trash-2"></i> Waste
              </button>
<button className="layerBtn inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-xs" data-layer="transport">
<i className="w-4 h-4 text-white/80" data-lucide="bus"></i> Transport
              </button>
</div>
<div className="ml-auto flex items-center gap-2 rounded-xl bg-[#0A0E27]/80 backdrop-blur border border-white/10 p-2">
<div className="flex items-center gap-2 text-[11px]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
<span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-[#00FF94]"></span> Low</span>
<span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-yellow-400"></span> Mid</span>
<span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-orange-500"></span> High</span>
<span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-[#FF6B35]"></span> Critical</span>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#FF6B35]" data-lucide="factory"></i>
<div>
<div className="text-xs text-white/60" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Total Campus Emissions</div>
<div className="text-xl font-semibold tracking-tight" style={{fontFamily: 'JetBrains Mono, monospace'}}><span id="totalEmissions">—</span> tCO₂/mo</div>
</div>
</div>
<span className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10" id="emissionTrend">—</span>
</div>
<div className="mt-3 h-2 rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-2/3 bg-gradient-to-r from-[#00FF94] via-yellow-400 to-[#FF6B35]" id="emissionBar"></div>
</div>
</div>
<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#00D9FF]" data-lucide="layers"></i>
<div className="text-xs text-white/60" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Active Layers</div>
</div>
<div className="mt-2 flex flex-wrap gap-2 text-xs" id="activeLayers"></div>
</div>
<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-white/70" data-lucide="info"></i>
<div className="text-xs text-white/60" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Tip</div>
</div>
<p className="mt-2 text-sm text-white/70" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Rotate and zoom to see carbon clouds proportional to emissions above each building.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 md:py-20" id="dashboard">
<div className="max-w-7xl mx-auto px-4">
<div className="flex items-end justify-between mb-6">
<div>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold" style={{fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif'}}>Real-time Dashboard</h2>
<p className="text-white/60 mt-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Key metrics, trends, and insights across campus.</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}><i className="w-4 h-4" data-lucide="refresh-ccw"></i></button>
</div>
</div>
<div className="grid md:grid-cols-4 gap-4">
<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-lg bg-[#FF6B35]/10 border border-[#FF6B35]/30 flex items-center justify-center">
<i className="w-5 h-5 text-[#FF6B35]" data-lucide="arrow-trending-down"></i>
</div>
<div>
<div className="text-xs text-white/60" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Total Emissions</div>
<div className="text-xl font-semibold tracking-tight" style={{fontFamily: 'JetBrains Mono, monospace'}}><span id="kpiEmissions">—</span> tCO₂</div>
</div>
</div>
<span className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10" id="kpiEmissionsTrend">—</span>
</div>
</div>
<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-lg bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center">
<i className="w-5 h-5 text-[#00D9FF]" data-lucide="bolt"></i>
</div>
<div>
<div className="text-xs text-white/60" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Energy Consumption</div>
<div className="text-xl font-semibold tracking-tight" style={{fontFamily: 'JetBrains Mono, monospace'}}><span id="kpiEnergy">—</span> kWh</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-lg bg-[#00FF94]/10 border border-[#00FF94]/30 flex items-center justify-center">
<i className="w-5 h-5 text-[#00FF94]" data-lucide="users"></i>
</div>
<div>
<div className="text-xs text-white/60" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Active Eco Warriors</div>
<div className="text-xl font-semibold tracking-tight" style={{fontFamily: 'JetBrains Mono, monospace'}}><span id="kpiWarriors">—</span></div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-lg bg-[#00FF94]/10 border border-[#00FF94]/30 flex items-center justify-center">
<i className="w-5 h-5 text-[#00FF94]" data-lucide="tree-pine"></i>
</div>
<div>
<div className="text-xs text-white/60" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Trees Equivalent Needed</div>
<div className="text-xl font-semibold tracking-tight" style={{fontFamily: 'JetBrains Mono, monospace'}}><span id="kpiTrees">—</span></div>
</div>
</div>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-5 mt-6">
<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 lg:col-span-2">
<div className="flex items-center justify-between">
<div className="text-sm text-white/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Monthly Emission Trends</div>
<button className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Last 12 mo</button>
</div>
<div className="mt-3">
<div><canvas height="110" id="lineChart"></canvas></div>
</div>
</div>
<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4">
<div className="text-sm text-white/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Emission Breakdown</div>
<div className="mt-3">
<div><canvas height="140" id="donutChart"></canvas></div>
</div>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-5 mt-5">
<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 lg:col-span-3">
<div className="text-sm text-white/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Building-wise Comparison</div>
<div className="mt-3">
<div><canvas height="90" id="barChart"></canvas></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 md:py-20" id="challenge">
<div className="max-w-7xl mx-auto px-4">
<div className="flex items-end justify-between mb-6">
<div>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold" style={{fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif'}}>Eco Warriors</h2>
<p className="text-white/60 mt-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Gamified actions to reduce campus carbon footprint.</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}><i className="w-4 h-4" data-lucide="qr-code"></i></button>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-5">
<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4">
<div className="flex items-center justify-between">
<div className="text-sm text-white/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Student Leaderboard</div>
<span className="text-xs px-2 py-1 rounded-md bg-[#00FF94]/10 text-[#00FF94] border border-[#00FF94]/30" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Live</span>
</div>
<div className="mt-3 space-y-2" id="leaderboard"></div>
</div>
<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4">
<div className="flex items-center justify-between">
<div className="text-sm text-white/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Recent Eco-actions</div>
<i className="w-4 h-4 text-white/60" data-lucide="rss"></i>
</div>
<div className="mt-3 h-[260px] overflow-hidden relative" id="actionFeed">
<div className="absolute inset-0" id="feedTicker"></div>
</div>
</div>
<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4">
<div className="flex items-center justify-between">
<div className="text-sm text-white/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Achievements</div>
<i className="w-4 h-4 text-white/60" data-lucide="medal"></i>
</div>
<div className="mt-3 grid grid-cols-3 gap-3">
<div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center hover:bg-white/10 transition">
<div className="mx-auto h-10 w-10 rounded-lg bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center"><i className="w-5 h-5 text-yellow-400" data-lucide="star"></i></div>
<div className="mt-2 text-xs" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Bronze</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center hover:bg-white/10 transition">
<div className="mx-auto h-10 w-10 rounded-lg bg-gray-300/10 border border-gray-300/30 flex items-center justify-center"><i className="w-5 h-5 text-gray-200" data-lucide="shield"></i></div>
<div className="mt-2 text-xs" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Silver</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center hover:bg-white/10 transition">
<div className="mx-auto h-10 w-10 rounded-lg bg-amber-300/10 border border-amber-300/30 flex items-center justify-center"><i className="w-5 h-5 text-amber-300" data-lucide="crown"></i></div>
<div className="mt-2 text-xs" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Gold</div>
</div>
</div>
<div className="mt-4 rounded-xl bg-[#00FF94]/10 border border-[#00FF94]/30 p-3">
<div className="flex items-center justify-between">
<div className="text-xs text-white/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Next Milestone: <span className="font-medium">Carbon Champion</span></div>
<span className="text-xs text-[#00FF94]">+500 pts</span>
</div>
<div className="mt-2 h-2 rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-1/2 bg-gradient-to-r from-[#00FF94] to-[#00D9FF]" id="milestoneBar"></div>
</div>
</div>
</div>
</div>
<button className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[55] px-5 py-3 rounded-2xl bg-[#00FF94] text-[#0A0E27] font-medium tracking-tight border border-[#00FF94]/40 hover:shadow-[0_0_0_3px_rgba(0,255,148,0.2)] hover:scale-[1.03] transition flex items-center gap-2" id="fabLogAction" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
<i className="w-5 h-5" data-lucide="plus"></i> Log Action
      </button>
<div className="hidden fixed inset-0 z-[80] items-center justify-center" id="actionModal">
<div className="absolute inset-0 bg-black/60 backdrop-blur" onclick="toggleActionModal(false)"></div>
<div className="relative w-full max-w-lg mx-auto rounded-2xl bg-[#0A0E27] border border-white/10 p-5">
<div className="flex items-center justify-between">
<div className="text-lg font-semibold tracking-tight" style={{fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif'}}>Log Eco Action</div>
<button className="rounded-lg p-2 bg-white/5 border border-white/10 hover:bg-white/10 transition" onclick="toggleActionModal(false)">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<button className="actionBtn rounded-xl bg-white/5 border border-white/10 p-3 text-left hover:bg-white/10 transition" data-action="Cycled Today">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#00FF94]" data-lucide="bike"></i>
<div>
<div className="text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Cycled Today</div>
<div className="text-xs text-[#00FF94]">+20 pts</div>
</div>
</div>
</button>
<button className="actionBtn rounded-xl bg-white/5 border border-white/10 p-3 text-left hover:bg-white/10 transition" data-action="Used Steel Bottle">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#00FF94]" data-lucide="cup-soda"></i>
<div>
<div className="text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Used Steel Bottle</div>
<div className="text-xs text-[#00FF94]">+10 pts</div>
</div>
</div>
</button>
<button className="actionBtn rounded-xl bg-white/5 border border-white/10 p-3 text-left hover:bg-white/10 transition" data-action="Carpooled">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#00FF94]" data-lucide="car"></i>
<div>
<div className="text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Carpooled</div>
<div className="text-xs text-[#00FF94]">+15 pts</div>
</div>
</div>
</button>
<button className="actionBtn rounded-xl bg-white/5 border border-white/10 p-3 text-left hover:bg-white/10 transition" data-action="Switched Off AC">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#00FF94]" data-lucide="snowflake"></i>
<div>
<div className="text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Switched Off AC</div>
<div className="text-xs text-[#00FF94]">+12 pts</div>
</div>
</div>
</button>
</div>
<div className="mt-5 rounded-xl bg-white/5 border border-white/10 p-3">
<div className="text-sm text-white/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Scan at campus station</div>
<div className="mt-2 flex items-center justify-center" id="qr"></div>
</div>
<div className="hidden absolute top-4 right-4 px-3 py-2 rounded-lg bg-[#00FF94]/10 text-[#00FF94] border border-[#00FF94]/30 text-sm" id="toast" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
            Action logged!
          </div>
</div>
</div>
</div>
</section>

<section className="relative py-16 md:py-20" id="wallet">
<div className="max-w-7xl mx-auto px-4">
<div className="flex items-end justify-between mb-6">
<div>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold" style={{fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif'}}>Carbon Wallet</h2>
<p className="text-white/60 mt-1" stylestyle="font-family: Inter, system-ui, sans-serif;">Track, earn, and redeem carbon credits from your actions.</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}><i className="w-4 h-4" data-lucide="history"></i></button>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-5">

<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5">
<div className="flex items-center justify-between">
<div className="text-sm text-white/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Wallet Balance</div>
<span className="text-xs px-2 py-1 rounded-md bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Auto-sync</span>
</div>
<div className="mt-3 flex items-end gap-3">
<div className="text-3xl font-semibold tracking-tight" style={{fontFamily: 'JetBrains Mono, monospace'}}><span id="walletBalance">—</span> CC</div>
<span className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10" id="walletTrend">—</span>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<button className="rounded-xl bg-[#00FF94]/10 border border-[#00FF94]/30 px-3 py-2 text-sm hover:bg-[#00FF94]/15 transition inline-flex items-center justify-center gap-2" id="btnClaim" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
<i className="w-4 h-4 text-[#00FF94]" data-lucide="leaf"></i> Claim Offsets
            </button>
<button className="rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm hover:bg-white/10 transition inline-flex items-center justify-center gap-2" id="btnSend" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
<i className="w-4 h-4" data-lucide="send"></i> Send
            </button>
</div>
<div className="mt-4 rounded-xl bg-white/5 border border-white/10 p-3">
<div className="text-xs text-white/60 mb-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Wallet Address</div>
<div className="flex items-center gap-2">
<code className="text-xs text-white/80 truncate" id="walletAddr" style={{fontFamily: 'JetBrains Mono, monospace'}}>ccampus_0xA1B2C3D4E5F6</code>
<button aria-label="Copy wallet address" className="ml-auto rounded-lg p-2 bg-white/5 border border-white/10 hover:bg-white/10 transition" id="copyAddr">
<i className="w-4 h-4" data-lucide="copy"></i>
</button>
</div>
</div>
</div>

<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5">
<div className="flex items-center justify-between">
<div className="text-sm text-white/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Recent Transactions</div>
<i className="w-4 h-4 text-white/60" data-lucide="list"></i>
</div>
<div className="mt-3 space-y-2" id="txList"></div>
</div>

<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5">
<div className="flex items-center justify-between">
<div className="text-sm text-white/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Redeem Marketplace</div>
<i className="w-4 h-4 text-white/60" data-lucide="shopping-bag"></i>
</div>
<div className="mt-3 grid grid-cols-2 gap-3">
<button className="redeemBtn rounded-xl bg-white/5 border border-white/10 p-3 text-left hover:bg-white/10 transition" data-cost="120">
<div className="flex items-center gap-2">
<div className="h-10 w-10 rounded-lg bg-[#00FF94]/10 border border-[#00FF94]/30 flex items-center justify-center">
<i className="w-5 h-5 text-[#00FF94]" data-lucide="recycle"></i>
</div>
<div>
<div className="text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Recycling Kit</div>
<div className="text-xs text-white/60">120 CC</div>
</div>
</div>
</button>
<button className="redeemBtn rounded-xl bg-white/5 border border-white/10 p-3 text-left hover:bg-white/10 transition" data-cost="300">
<div className="flex items-center gap-2">
<div className="h-10 w-10 rounded-lg bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center">
<i className="w-5 h-5 text-[#00D9FF]" data-lucide="sun"></i>
</div>
<div>
<div className="text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Solar Lab Tour</div>
<div className="text-xs text-white/60">300 CC</div>
</div>
</div>
</button>
<button className="redeemBtn rounded-xl bg-white/5 border border-white/10 p-3 text-left hover:bg-white/10 transition" data-cost="80">
<div className="flex items-center gap-2">
<div className="h-10 w-10 rounded-lg bg-amber-300/10 border border-amber-300/30 flex items-center justify-center">
<i className="w-5 h-5 text-amber-300" data-lucide="coffee"></i>
</div>
<div>
<div className="text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Cafe Voucher</div>
<div className="text-xs text-white/60">80 CC</div>
</div>
</div>
</button>
<button className="redeemBtn rounded-xl bg-white/5 border border-white/10 p-3 text-left hover:bg-white/10 transition" data-cost="200">
<div className="flex items-center gap-2">
<div className="h-10 w-10 rounded-lg bg-purple-300/10 border border-purple-300/30 flex items-center justify-center">
<i className="w-5 h-5 text-purple-300" data-lucide="ticket"></i>
</div>
<div>
<div className="text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Eco Event Pass</div>
<div className="text-xs text-white/60">200 CC</div>
</div>
</div>
</button>
</div>
<div className="mt-3 text-xs text-white/60" id="redeemMsg"></div>
</div>
</div>
</div>
</section>

<section className="relative py-16 md:py-20" id="simulate">
<div className="max-w-7xl mx-auto px-4">
<div className="flex items-end justify-between mb-6">
<div>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold" style={{fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif'}}>Scenario Simulator</h2>
<p className="text-white/60 mt-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Test strategies and see projected carbon impact instantly.</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition text-sm" id="resetSim" style={{fontFamily: 'Inter, system-ui, sans-serif'}}><i className="w-4 h-4" data-lucide="undo-2"></i></button>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-5">
<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5 lg:col-span-2">
<div className="space-y-4">
<div>
<div className="flex items-center justify-between">
<label className="text-sm text-white/80" htmlFor="simHvac" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>HVAC Setpoint (+°C)</label>
<span className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10" id="vHvac">0</span>
</div>
<input className="w-full accent-[#00D9FF]" id="simHvac" max="4" min="0" type="range" value="0"/>
</div>
<div>
<div className="flex items-center justify-between">
<label className="text-sm text-white/80" htmlFor="simLighting" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Lighting Reduction (%)</label>
<span className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10" id="vLighting">0%</span>
</div>
<input className="w-full accent-[#00FF94]" id="simLighting" max="50" min="0" type="range" value="0"/>
</div>
<div>
<div className="flex items-center justify-between">
<label className="text-sm text-white/80" htmlFor="simSolar" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Solar Adoption (%)</label>
<span className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10" id="vSolar">0%</span>
</div>
<input className="w-full accent-yellow-300" id="simSolar" max="60" min="0" type="range" value="0"/>
</div>
</div>
<div className="mt-5 rounded-xl bg-white/5 border border-white/10 p-4">
<div className="grid md:grid-cols-3 gap-3">
<div className="rounded-lg bg-[#00FF94]/10 border border-[#00FF94]/30 p-3">
<div className="text-[11px] text-white/70">Projected Emissions</div>
<div className="text-xl font-semibold tracking-tight" style={{fontFamily: 'JetBrains Mono, monospace'}}><span id="simEmissions">—</span> tCO₂/mo</div>
</div>
<div className="rounded-lg bg-[#00D9FF]/10 border border-[#00D9FF]/30 p-3">
<div className="text-[11px] text-white/70">Energy Savings</div>
<div className="text-xl font-semibold tracking-tight" style={{fontFamily: 'JetBrains Mono, monospace'}}><span id="simEnergy">—</span> kWh</div>
</div>
<div className="rounded-lg bg-yellow-300/10 border border-yellow-300/30 p-3">
<div className="text-[11px] text-white/70">Cost Impact</div>
<div className="text-xl font-semibold tracking-tight" style={{fontFamily: 'JetBrains Mono, monospace'}}>₹<span id="simCost">—</span>/mo</div>
</div>
</div>
<div className="mt-4 h-2 rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-1/3 bg-gradient-to-r from-[#00FF94] via-[#00D9FF] to-yellow-300 transition-[width] duration-700" id="simBar"></div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5">
<div className="text-sm text-white/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>AI Suggestions</div>
<ul className="mt-3 text-sm space-y-2 text-white/80" id="simTips" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
<li className="rounded-lg bg-white/5 border border-white/10 p-3">Enable staggered HVAC start to shave peak demand by ~6%.</li>
<li className="rounded-lg bg-white/5 border border-white/10 p-3">Prioritize LED retrofits in Library and Energy Lab wings.</li>
<li className="rounded-lg bg-white/5 border border-white/10 p-3">Schedule solar cleaning biweekly to sustain &gt;95% yield.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative py-16 md:py-20" id="drone">
<div className="max-w-7xl mx-auto px-4">
<div className="flex items-end justify-between mb-6">
<div>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold" style={{fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif'}}>Drone Insights</h2>
<p className="text-white/60 mt-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Thermal anomalies and plume detections from recent flights.</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}><i className="w-4 h-4" data-lucide="download"></i></button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-5">
<div className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10">
<img alt="Thermal inspection rooftop" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-4">
<div className="flex items-center justify-between">
<div className="text-sm font-medium" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Library Rooftop</div>
<span className="text-xs px-2 py-1 rounded-md bg-orange-500/10 text-orange-300 border border-orange-500/30">Hotspot</span>
</div>
<p className="mt-2 text-xs text-white/60">Insulation gap detected near north HVAC unit. Estimated loss ~3.2 kW.</p>
</div>
</div>
<div className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10">
<img alt="Solar panel aerial" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="flex items-center justify-between">
<div className="text-sm font-medium" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Energy Lab Solar</div>
<span className="text-xs px-2 py-1 rounded-md bg-[#00FF94]/10 text-[#00FF94] border border-[#00FF94]/30">Healthy</span>
</div>
<p className="mt-2 text-xs text-white/60">Array performing at 94% of expected yield. Minor dust accumulation.</p>
</div>
</div>
<div className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10">
<img alt="Building stack plume" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-4">
<div className="flex items-center justify-between">
<div className="text-sm font-medium" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Central Plant Stack</div>
<span className="text-xs px-2 py-1 rounded-md bg-[#FF6B35]/10 text-[#FF6B35] border border-[#FF6B35]/30">Plume</span>
</div>
<p className="mt-2 text-xs text-white/60">Short plume observed in still air. Suggest calibration check this week.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="relative pb-12 pt-10">
<div className="max-w-7xl mx-auto px-4">
<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6">
<div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center">
<span className="text-[#00D9FF] font-semibold tracking-tight" style={{fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif'}}>CC</span>
</div>
<div className="text-white/70 text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Campus Carbon Digital Twin</div>
</div>
<div className="flex items-center gap-4 text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
<a className="text-white/60 hover:text-white" href="#map">Map</a>
<a className="text-white/60 hover:text-white" href="#dashboard">Dashboard</a>
<a className="text-white/60 hover:text-white" href="#simulate">Simulations</a>
<a className="text-white/60 hover:text-white" href="#challenge">Challenge</a>
<a className="text-white/60 hover:text-white" href="#wallet">Wallet</a>
</div>
<div className="text-xs text-white/50" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>© <span id="year"></span> Campus Carbon. All rights reserved.</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
