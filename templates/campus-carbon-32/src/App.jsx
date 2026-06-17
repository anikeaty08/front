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



    // Mock data
    const buildings = [
      { id: 'A1', name: 'Engineering Block', pos: { left: '22%', top: '38%' }, kwh: 840000, co2: 180, layerImpact: { energy: 1.0, transport: 0.7, waste: 0.5, events: 0.6 } },
      { id: 'B2', name: 'Library', pos: { left: '56%', top: '44%' }, kwh: 420000, co2: 90, layerImpact: { energy: 0.7, transport: 0.5, waste: 0.4, events: 0.3 } },
      { id: 'C3', name: 'Student Center', pos: { left: '40%', top: '62%' }, kwh: 320000, co2: 110, layerImpact: { energy: 0.6, transport: 0.9, waste: 0.5, events: 1.0 } },
      { id: 'D4', name: 'Science Labs', pos: { left: '70%', top: '30%' }, kwh: 900000, co2: 210, layerImpact: { energy: 1.0, transport: 0.6, waste: 0.7, events: 0.5 } },
      { id: 'E5', name: 'Admin', pos: { left: '15%', top: '60%' }, kwh: 210000, co2: 60, layerImpact: { energy: 0.5, transport: 0.4, waste: 0.3, events: 0.2 } },
      { id: 'F6', name: 'Dorms North', pos: { left: '30%', top: '25%' }, kwh: 380000, co2: 100, layerImpact: { energy: 0.6, transport: 0.6, waste: 0.7, events: 0.4 } },
    ];
    const campusAvgCO2 = Math.round(buildings.reduce((a,b)=>a+b.co2,0)/buildings.length);
    const layerLabels = { energy:'Energy', transport:'Transport', waste:'Waste', events:'Events' };

    // Sections and view controller
    const sections = ['home','map','scenario','personal','analytics','building','student','export'];
    function showView(view) {
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.toggle('hidden', id !== view && !(view === 'home' && id === 'home'));
      });
      if (view === 'map') initMapView();
      if (view === 'scenario') initScenarioView();
      if (view === 'personal') initPersonalView();
      if (view === 'analytics') initAnalytics();
      if (view === 'building') initBuildingDetail();
      if (view === 'student') initStudentProfile();
      if (view === 'export') initExportView();
      setActiveNav(view);
    }
    function setActiveNav(view) {
      const links = document.querySelectorAll('header nav a, footer a, section#home a');
      links.forEach(a => {
        try {
          const u = new URL(a.href, location.href);
          const v = u.searchParams.get('view') || 'home';
          a.classList.toggle('ring-emerald-400/40', v === view);
          a.classList.toggle('text-white', v === view);
          a.setAttribute('aria-current', v === view ? 'page' : 'false');
        } catch (_) {}
      });
    }
    function navigateTo(params) {
      const url = location.pathname + '?' + params.toString();
      const view = params.get('view') || 'home';
      history.pushState({ view }, '', url);
      showView(view);
    }

    // Initialize base hero numbers
    document.getElementById('liveEmission').textContent = buildings.reduce((a,b)=>a+b.co2,0);
    document.getElementById('hotspotsCount').textContent = buildings.filter(b=>b.co2>campusAvgCO2).length;

    // MapView
    let activeLayer = 'energy';
    function initMapView() {
      const params = new URLSearchParams(location.search);
      activeLayer = params.get('layer') || 'energy';
      const layerEl = document.getElementById('activeLayerLabel');
      if (layerEl) layerEl.textContent = layerLabels[activeLayer] || 'Energy';

      const mapDiv = document.getElementById('mapContainer');
      if (!mapDiv) return;
      mapDiv.innerHTML = '';
      const fallback = document.createElement('div');
      fallback.className = 'absolute inset-0 bg-[url(https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1600&auto=format&fit=crop)] bg-cover bg-center opacity-30';
      mapDiv.appendChild(fallback);

      const overlay = document.getElementById('buildingOverlay');
      overlay.innerHTML = '';
      overlay.classList.remove('pointer-events-none');
      overlay.classList.add('pointer-events-auto');

      const list = document.getElementById('buildingList');
      if (list) list.innerHTML = '';
      const totalKwh = buildings.reduce((a,b)=>a+b.kwh,0);
      const totalCo2 = buildings.reduce((a,b)=>a+b.co2,0);
      const campusAvgEl = document.getElementById('campusAvg');
      if (campusAvgEl) campusAvgEl.textContent = campusAvgCO2 + ' tons/yr';
      const totalKwhEl = document.getElementById('totalKwh');
      if (totalKwhEl) totalKwhEl.textContent = (totalKwh/1000).toFixed(1) + ' MWh';
      const totalCo2El = document.getElementById('totalCo2');
      if (totalCo2El) totalCo2El.textContent = totalCo2 + ' tons';

      buildings.forEach(b => {
        const intensity = Math.min(1, b.co2 / (campusAvgCO2*1.2));
        const color = intensity > 0.85 ? 'bg-red-500' : intensity > 0.55 ? 'bg-orange-400' : 'bg-emerald-400';
        const glow = intensity > 0.55 ? 'shadow-[0_0_24px_rgba(248,113,113,0.35)]' : 'shadow-[0_0_24px_rgba(16,185,129,0.35)]';

        const m = document.createElement('button');
        m.type = 'button';
        m.className = `group absolute rounded-full ${glow} transition-transform hover:scale-110`;
        m.style.left = b.pos.left;
        m.style.top = b.pos.top;
        m.style.width = '22px';
        m.style.height = '22px';
        m.style.transform = 'translate(-50%, -50%)';
        m.setAttribute('aria-label', b.name);
        m.innerHTML = `
          <span class="absolute -inset-2 rounded-full ${color} opacity-30 blur-md animate-pulse"></span>
          <span class="relative inline-block h-full w-full rounded-full border border-white/20 ${color}"></span>
        `;
        m.addEventListener('click', (e) => {
          e.stopPropagation();
          const params = new URLSearchParams();
          params.set('view', 'building');
          params.set('bid', b.id);
          navigateTo(params);
        });
        m.addEventListener('mouseenter', (e) => showTooltip(e, \`${b.name}<br><span class='text-emerald-300'>${b.kwh.toLocaleString()} kWh</span> • <span class='text-red-300'>${b.co2} tCO₂</span>\`));
        m.addEventListener('mouseleave', hideTooltip);
        overlay.appendChild(m);

        if (list) {
          const li = document.createElement('li');
          li.className = 'py-2 flex items-center justify-between';
          li.innerHTML = `
            <div class="flex items-center gap-2">
              <span class="h-2.5 w-2.5 rounded-full ${color}"></span>
              <a href="?view=building&bid=${b.id}" class="text-sm hover:underline">${b.name}</a>
            </div>
            <div class="text-xs text-slate-300">${b.co2} tCO₂/yr</div>
          `;
          list.appendChild(li);
        }
      });
    }

    function showTooltip(e, html) {
      const t = document.getElementById('tooltip');
      if (!t) return;
      t.innerHTML = html;
      t.style.left = (e.clientX + 12) + 'px';
      t.style.top = (e.clientY + 12) + 'px';
      t.classList.remove('hidden');
    }
    function hideTooltip() {
      const t = document.getElementById('tooltip');
      if (t) t.classList.add('hidden');
    }
    document.addEventListener('mousemove', (e) => {
      const t = document.getElementById('tooltip');
      if (t && !t.classList.contains('hidden')) {
        t.style.left = (e.clientX + 12) + 'px';
        t.style.top = (e.clientY + 12) + 'px';
      }
    });

    // Scenario View
    function initScenarioView() {
      const overlay = document.getElementById('scenarioOverlay');
      if (!overlay) return;
      overlay.innerHTML = '';
      buildings.forEach((b) => {
        const before = document.createElement('div');
        before.className = 'absolute rounded-full bg-red-400/80';
        before.style.left = b.pos.left;
        before.style.top = b.pos.top;
        before.style.width = '10px'; before.style.height = '10px';
        before.style.transform = 'translate(-50%, -50%)';
        before.style.filter = 'drop-shadow(0 0 10px rgba(248,113,113,0.5))';
        overlay.appendChild(before);

        const after = document.createElement('div');
        after.className = 'absolute rounded-full bg-emerald-400/0 transition-all';
        after.style.left = b.pos.left;
        after.style.top = b.pos.top;
        after.style.width = '10px'; after.style.height = '10px';
        after.style.transform = 'translate(-50%, -50%)';
        after.style.filter = 'drop-shadow(0 0 0 rgba(16,185,129,0))';
        after.dataset.id = b.id;
        overlay.appendChild(after);
      });

      const solarRange = document.getElementById('solarRange');
      const hvacRange = document.getElementById('hvacRange');
      const busRange = document.getElementById('busRange');
      const solarVal = document.getElementById('solarVal');
      const hvacVal = document.getElementById('hvacVal');
      const busVal = document.getElementById('busVal');
      const impactVal = document.getElementById('impactVal');

      function recalc() {
        if (!solarRange || !hvacRange || !busRange) return;
        if (solarVal) solarVal.textContent = solarRange.value;
        if (hvacVal) hvacVal.textContent = hvacRange.value;
        if (busVal) busVal.textContent = busRange.value;

        const solarRed = Number(solarRange.value) * 0.012;
        const hvacRed = buildings.reduce((a,b)=>a+b.co2,0) * (Number(hvacRange.value)/100) * 0.25;
        const busRed = 40 * (Number(busRange.value)/100);
        const totalRed = (solarRed + hvacRed + busRed).toFixed(1);
        if (impactVal) impactVal.textContent = totalRed;

        buildings.forEach(b => {
          const el = overlay.querySelector(\`[data-id="\${b.id}"]\`);
          if (!el) return;
          const base = b.co2;
          const reduced = Math.max(0, base - (Number(hvacRange.value)/100)*base*0.4 - (Number(solarRange.value)/2000)*base*0.3 - (Number(busRange.value)/100)*base*0.1);
          const improved = base - reduced;
          const scale = Math.min(1, improved / base + 0.15);
          el.style.backgroundColor = 'rgba(16,185,129,0.9)';
          el.style.boxShadow = '0 0 12px rgba(16,185,129,0.55)';
          el.style.filter = 'drop-shadow(0 0 10px rgba(16,185,129,0.55))';
          el.style.width = (10 + 10*scale) + 'px';
          el.style.height = (10 + 10*scale) + 'px';
        });
      }
      ['input','change'].forEach(evt => {
        if (solarRange) solarRange.addEventListener(evt, recalc);
        if (hvacRange) hvacRange.addEventListener(evt, recalc);
        if (busRange) busRange.addEventListener(evt, recalc);
      });
      recalc();

      const applyBtn = document.getElementById('applyScenario');
      if (applyBtn) {
        applyBtn.onclick = () => {
          const params = new URLSearchParams(location.search);
          params.set('view', 'map');
          params.set('scenarioApplied', '1');
          navigateTo(params);
        };
      }

      const preset = new URLSearchParams(location.search).get('preset');
      if (preset === 'efficiency') {
        if (hvacRange) hvacRange.value = 30;
        if (busRange) busRange.value = 20;
        if (solarRange) solarRange.value = 800;
        recalc();
      }
    }

    // Personal View
    const students = [
      { id:'s1', name:'Aisha Khan', avatar:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop', score: 92, co2: 0.7, trips: 58, modes:['Bike','Bus','EV'] },
      { id:'s2', name:'Liam Chen', avatar:'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop', score: 88, co2: 0.9, trips: 44, modes:['Carpool','Bus'] },
      { id:'s3', name:'Maya Patel', avatar:'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=256&auto=format&fit=crop', score: 85, co2: 1.2, trips: 39, modes:['Bike','Bus'] },
      { id:'s4', name:'Jon Park', avatar:'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=256&auto=format&fit=crop', score: 82, co2: 1.0, trips: 31, modes:['EV','Bus'] },
    ];
    function initPersonalView() {
      const lb = document.getElementById('leaderboard');
      if (lb) {
        lb.innerHTML = '';
        students.slice().sort((a,b)=>b.score-a.score).forEach((s) => {
          const li = document.createElement('li');
          li.className = 'py-2 flex items-center justify-between';
          li.innerHTML = `
            <div class="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" class="h-8 w-8 rounded-full border border-white/10 object-cover" alt="${s.name}">
              <div>
                <a href="?view=student&id=${s.id}" class="text-sm hover:underline">${s.name}</a>
                <p class="text-[11px] text-slate-400">Eco score: ${s.score} • ${s.modes.join(' · ')}</p>
              </div>
            </div>
            <div class="text-xs text-slate-300">${s.co2} kg CO₂/day</div>
          `;
          lb.appendChild(li);
        });
      }

      document.querySelectorAll('.logMode').forEach(btn => {
        btn.addEventListener('click', () => {
          const mode = btn.getAttribute('data-mode');
          const impact = { Bike: 0.1, Bus: 0.5, Carpool: 0.8, EV: 0.3 }[mode] || 0.5;
          const you = document.getElementById('youCO2');
          const current = parseFloat((you.textContent || '0').split(' ')[0]) || 0.8;
          const newVal = Math.max(0, (current*0.7 + impact*0.3));
          you.textContent = newVal.toFixed(1) + ' kg/day';
        });
      });
    }
    function initStudentProfile() {
      const id = new URLSearchParams(location.search).get('id') || 's1';
      const s = students.find(x=>x.id===id) || students[0];
      const avatar = document.getElementById('studentAvatar');
      if (avatar) avatar.src = s.avatar;
      const name = document.getElementById('studentName');
      if (name) name.textContent = s.name;
      const rank = document.getElementById('studentRank');
      if (rank) rank.textContent = 'Eco score: ' + s.score;
      const co2 = document.getElementById('studentCO2');
      if (co2) co2.textContent = s.co2 + ' kg/day';
      const trips = document.getElementById('studentTrips');
      if (trips) trips.textContent = s.trips;
      const score = document.getElementById('studentScore');
      if (score) score.textContent = s.score;
      const log = document.getElementById('studentLog');
      if (log) {
        log.innerHTML = '';
        const modes = s.modes;
        for (let i=0;i<6;i++) {
          const mi = modes[i % modes.length];
          const li = document.createElement('li');
          li.className = 'py-2 flex items-center justify-between';
          li.innerHTML = `<span>${mi}</span><span class="text-slate-400">${(Math.random()*1.2+0.3).toFixed(1)} kg CO₂</span>`;
          log.appendChild(li);
        }
      }
    }

    // Analytics charts
    let chartsInit = false;
    function initAnalytics() {
      if (chartsInit) return;
      const trend = document.getElementById('trendChart');
      if (trend) {
        const ctx = trend.getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets: [
              {
                label: 'CO₂ (tons)',
                data: [220,210,205,198,190,185,182,178,176,172,170,168],
                borderColor: 'rgb(16,185,129)',
                backgroundColor: 'rgba(16,185,129,0.15)',
                fill: true,
                tension: 0.35,
                borderWidth: 2
              }
            ]
          },
          options: {
            plugins: { legend: { display: false } },
            scales: {
              x: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: '#9ca3af', font: { size: 11 } } },
              y: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: '#9ca3af', font: { size: 11 } } }
            }
          }
        });
      }
      const rank = document.getElementById('rankChart');
      if (rank) {
        const ctx2 = rank.getContext('2d');
        const labels = buildings.map(b=>b.name);
        const data = buildings.map(b=>b.co2);
        new Chart(ctx2, {
          type: 'bar',
          data: {
            labels,
            datasets: [{
              label: 'tCO₂/yr',
              data,
              backgroundColor: labels.map((_,i)=> i%2===0 ? 'rgba(16,185,129,0.5)' : 'rgba(59,130,246,0.45)'),
              borderColor: labels.map((_,i)=> i%2===0 ? 'rgba(16,185,129,1)' : 'rgba(59,130,246,1)'),
              borderWidth: 1.5
            }]
          },
          options: {
            plugins: { legend: { display: false } },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#9ca3af', font: { size: 11 } } },
              y: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: '#9ca3af', font: { size: 11 } } }
            }
          }
        });
      }
      chartsInit = true;
    }

    // Building Detail
    function initBuildingDetail() {
      const params = new URLSearchParams(location.search);
      const bid = params.get('bid') || buildings[0].id;
      const b = buildings.find(x=>x.id===bid) || buildings[0];
      const nameEl = document.getElementById('buildingName');
      if (nameEl) nameEl.textContent = b.name;
      const deltaEl = document.getElementById('buildingDelta');
      if (deltaEl) deltaEl.textContent = 'vs campus avg: ' + (b.co2 - campusAvgCO2 >= 0 ? '+' : '') + (b.co2 - campusAvgCO2) + ' tCO₂/yr';
      const kwhEl = document.getElementById('bdKwh');
      if (kwhEl) kwhEl.textContent = (bkwh/1000).toFixed(1) + ' MWh/yr';
      const co2El = document.getElementById('bdCo2');
      if (co2El) co2El.textContent = b.co2 + ' tCO₂/yr';

      const statusEl = document.getElementById('bdStatus');
      const badgeEl = document.getElementById('buildingBadge');
      const delta = b.co2 - campusAvgCO2;
      let status = 'Efficient';
      let statusColor = 'text-emerald-300';
      let badgeRing = 'ring-emerald-400/40';
      if (delta > 30) {
        status = 'Hotspot';
        statusColor = 'text-red-300';
        badgeRing = 'ring-red-400/40';
      } else if (delta > 0) {
        status = 'Above average';
        statusColor = 'text-amber-300';
        badgeRing = 'ring-amber-400/40';
      }
      if (statusEl) {
        statusEl.textContent = status;
        statusEl.className = 'text-lg font-semibold tracking-tight ' + statusColor;
      }
      if (badgeEl) {
        badgeEl.className = 'h-9 w-9 rounded-lg flex items-center justify-center border border-white/10 bg-black/30 ring-2 ' + badgeRing;
      }

      // Recommendations based on impacts
      const recs = [];
      const maxLayer = Object.entries(b.layerImpact).sort((a,b)=>b[1]-a[1])[0][0];
      if (b.layerImpact.energy >= 0.9 || b.kwh > 800000) {
        recs.push('Install rooftop solar and LED retrofits (target 15% kWh reduction).');
        recs.push('Optimize HVAC schedules with smart thermostats.');
      }
      if (b.layerImpact.transport >= 0.8) {
        recs.push('Improve shuttle frequency and no-idle zones near entrance.');
      }
      if (b.layerImpact.waste >= 0.7) {
        recs.push('Launch composting and recycling audits for common areas.');
      }
      if (b.layerImpact.events >= 0.8) {
        recs.push('Adopt green events checklist and occupancy-based lighting.');
      }
      if (recs.length === 0) {
        recs.push('Maintain current efficiency programs and monitor quarterly.');
      }
      const recList = document.getElementById('bdRecs');
      if (recList) {
        recList.innerHTML = '';
        recs.slice(0,4).forEach(r => {
          const li = document.createElement('li');
          li.textContent = r;
          recList.appendChild(li);
        });
      }

      // "Open on Map" should jump to the most relevant layer
      const openBtn = document.getElementById('openLayerFromBuilding');
      if (openBtn) {
        const params = new URLSearchParams();
        params.set('view','map');
        params.set('layer', maxLayer);
        params.set('focus', b.id);
        openBtn.setAttribute('href', '?' + params.toString());
        openBtn.onclick = (e) => {
          e.preventDefault();
          navigateTo(params);
          // briefly highlight target on the map after navigation
          setTimeout(() => {
            const target = document.querySelector(`#buildingOverlay [aria-label="${b.name}"] .relative`);
            if (target) {
              target.classList.add('ring-2','ring-white','ring-offset-2','ring-offset-black/30');
              setTimeout(()=> target.classList.remove('ring-2','ring-white','ring-offset-2','ring-offset-black/30'), 1200);
            }
          }, 250);
        };
      }
    }

    // Export view
    function initExportView() {
      const btn = document.getElementById('printBtn');
      if (btn) {
        btn.onclick = () => {
          // Optionally ensure analytics charts are drawn before printing for snapshot fidelity
          initAnalytics();
          setTimeout(() => window.print(), 150);
        };
      }
    }

    // Client-side routing: intercept clicks on ?view= links
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href]');
      if (!a) return;
      // Allow modified clicks (new tab/window) to behave normally
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === '_blank') return;
      let url;
      try { url = new URL(a.href, location.href); } catch { return; }
      const hasView = url.searchParams.has('view');
      if (!hasView) return;
      e.preventDefault();
      navigateTo(url.searchParams);
    });

    // Ensure "Open in New Tab" acts as new tab
    window.addEventListener('DOMContentLoaded', () => {
      const newTab = document.getElementById('openScenarioTab');
      if (newTab) newTab.setAttribute('target','_blank');

      // Initialize current view
      const current = new URLSearchParams(location.search).get('view') || 'home';
      showView(current);
    });

    // Browser navigation support
    window.addEventListener('popstate', (e) => {
      const view = (e.state && e.state.view) || (new URLSearchParams(location.search).get('view')) || 'home';
      showView(view);
    });

    // Map layer quick keyboard nav (optional accessibility)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'l' && (new URLSearchParams(location.search).get('view') || 'home') === 'map') {
        const order = ['energy','transport','waste','events'];
        const i = order.indexOf(activeLayer);
        const next = order[(i+1) % order.length];
        const params = new URLSearchParams(location.search);
        params.set('view','map');
        params.set('layer', next);
        navigateTo(params);
      }
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
      

<header className="sticky top-0 z-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-4 mb-4 flex items-center justify-between rounded-2xl bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 border border-white/10 px-4 py-3">
<a className="flex items-center gap-2 group" href="?view=home">
<div className="h-8 w-8 rounded-md bg-emerald-500/20 ring-1 ring-emerald-400/40 flex items-center justify-center text-emerald-300 tracking-tight font-semibold">
<span className="text-[11px] leading-none">CF</span>
</div>
<span className="text-sm text-slate-300 group-hover:text-white transition-colors tracking-tight">Campus Carbon Footprint</span>
</a>
<nav className="flex items-center gap-1">
<a className="px-3 py-2 text-sm rounded-lg hover:bg-white/10 hover:text-white transition-colors border border-white/10" href="?view=map">
<div className="flex items-center gap-2">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 6l-5 2v12l5-2 8 2 5-2V4l-5 2-8-2z"></path><path d="M8 6v12"></path></svg>
<span>Map</span>
</div>
</a>
<a className="px-3 py-2 text-sm rounded-lg hover:bg-white/10 hover:text-white transition-colors border border-white/10" href="?view=scenario">
<div className="flex items-center gap-2">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M19 9l-5 5-4-4-6 6"></path></svg>
<span>Scenarios</span>
</div>
</a>
<a className="px-3 py-2 text-sm rounded-lg hover:bg-white/10 hover:text-white transition-colors border border-white/10" href="?view=personal">
<div className="flex items-center gap-2">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span>Personal</span>
</div>
</a>
<a className="px-3 py-2 text-sm rounded-lg hover:bg-white/10 hover:text-white transition-colors border border-white/10" href="?view=analytics">
<div className="flex items-center gap-2">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M7 13l3 3 7-7"></path></svg>
<span>Analytics</span>
</div>
</a>
<a className="px-3 py-2 text-sm rounded-lg hover:bg-white/10 hover:text-white transition-colors border border-white/10" href="?view=export">
<div className="flex items-center gap-2">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path></svg>
<span>Export</span>
</div>
</a>
</nav>
</div>
</div>
</header>

<section className="relative min-h-[84vh] flex items-center" id="home">
<div className="absolute inset-0">
<div className="h-full w-full rounded-none" id="heroMap">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_20%,rgba(16,185,129,0.08),transparent),radial-gradient(800px_400px_at_80%_70%,rgba(239,68,68,0.05),transparent)]"></div>
</div>
<div className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute left-[14%] top-[30%] h-24 w-24 rounded-full bg-emerald-500/20 blur-xl animate-ping"></div>
<div className="absolute left-[62%] top-[48%] h-24 w-24 rounded-full bg-red-500/20 blur-xl animate-ping"></div>
<div className="absolute left-[40%] top-[65%] h-16 w-16 rounded-full bg-emerald-500/20 blur-xl animate-ping"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f14]/20 to-[#0a0f14]"></div>
</div>
<div className="relative z-10 w-full">
<div className="mx-auto max-w-5xl px-6">
<div className="max-w-3xl">
<h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-semibold text-white">
            Visualize, Understand, and Reduce Your Campus Carbon Footprint
          </h1>
<p className="mt-4 text-slate-300 text-base sm:text-lg">
            Explore real-time emissions, simulate sustainability scenarios, and track personal impact—all in one interactive map-driven dashboard.
          </p>
</div>
<div className="mt-8 flex flex-wrap gap-3">
<a className="group inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium tracking-tight bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-400/40 hover:bg-emerald-500/20 transition" href="?view=map">
<svg className="h-4 w-4 group-hover:scale-105 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 6l-5 2v12l5-2 8 2 5-2V4l-5 2-8-2z"></path><path d="M8 6v12"></path></svg>
<span>View Campus Map</span>
</a>
<a className="group inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium tracking-tight bg-white/5 text-slate-200 ring-1 ring-white/10 hover:bg-white/10 transition" href="?view=scenario">
<svg className="h-4 w-4 group-hover:rotate-6 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M19 9l-5 5-4-4-6 6"></path></svg>
<span>Run Scenarios</span>
</a>
<a className="group inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium tracking-tight bg-white/5 text-slate-200 ring-1 ring-white/10 hover:bg-white/10 transition" href="?view=personal">
<svg className="h-4 w-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span>Personal Tracker</span>
</a>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<p className="text-xs text-slate-400">Live campus emissions</p>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-white" id="liveEmission">412</span>
<span className="text-xs text-slate-400">tons CO₂/year</span>
</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<p className="text-xs text-slate-400">Active hotspots</p>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-red-300" id="hotspotsCount">5</span>
<span className="text-xs text-slate-400">buildings</span>
</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<p className="text-xs text-slate-400">Green initiatives</p>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-emerald-300" id="initiativesCount">12</span>
<span className="text-xs text-slate-400">active</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" id="map">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-8 mb-4 flex items-center justify-between">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Interactive Map Dashboard</h2>
<div className="flex items-center gap-2">
<a className="px-3 py-2 rounded-lg text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition" href="?view=map&amp;layer=energy">Energy</a>
<a className="px-3 py-2 rounded-lg text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition" href="?view=map&amp;layer=transport">Transport</a>
<a className="px-3 py-2 rounded-lg text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition" href="?view=map&amp;layer=waste">Waste</a>
<a className="px-3 py-2 rounded-lg text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition" href="?view=map&amp;layer=events">Events</a>
</div>
</div>
</div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative h-[64vh] sm:h-[70vh] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
<div className="absolute inset-0" id="mapContainer"></div>
<div className="absolute inset-0 pointer-events-none" id="buildingOverlay"></div>
<div className="absolute top-3 left-3 flex flex-col gap-2">
<div className="backdrop-blur bg-black/40 border border-white/10 rounded-xl p-3">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-red-400"></span>
<span className="text-xs text-slate-300">Higher CO₂</span>
</div>
<div className="mt-2 flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="text-xs text-slate-300">Lower CO₂</span>
</div>
</div>
<div className="backdrop-blur bg-black/40 border border-white/10 rounded-xl p-3">
<p className="text-[11px] text-slate-300">Layer</p>
<p className="text-sm font-medium tracking-tight" id="activeLayerLabel">Energy</p>
</div>
</div>
<div className="hidden absolute z-20 rounded-lg bg-black/70 px-3 py-2 text-xs text-slate-100 border border-white/10 shadow-xl" id="tooltip"></div>
</div>
<div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-slate-300">Building-wise emissions</p>
<a className="text-xs text-emerald-300 hover:underline" href="?view=analytics">View Analytics</a>
</div>
<ul className="mt-2 divide-y divide-white/5" id="buildingList"></ul>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-4 lg:col-span-2">
<p className="text-sm text-slate-300">Quick Insights</p>
<div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-3">
<div className="rounded-lg bg-black/30 border border-white/10 p-3">
<p className="text-[11px] text-slate-400">Campus average</p>
<p className="text-lg font-semibold tracking-tight" id="campusAvg">—</p>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-3">
<p className="text-[11px] text-slate-400">Total kWh</p>
<p className="text-lg font-semibold tracking-tight" id="totalKwh">—</p>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-3">
<p className="text-[11px] text-slate-400">Total CO₂</p>
<p className="text-lg font-semibold tracking-tight" id="totalCo2">—</p>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-3">
<p className="text-[11px] text-slate-400">Updated</p>
<p className="text-lg font-semibold tracking-tight">Now</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" id="scenario">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-8 mb-4 flex items-center justify-between">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Scenario Analysis</h2>
<div className="flex items-center gap-2">
<a className="px-3 py-2 rounded-lg text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition" href="?view=scenario&amp;compare=new">Open Comparison</a>
<a className="px-3 py-2 rounded-lg text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition" href="?view=scenario&amp;preset=efficiency">Load Preset</a>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
<p className="text-sm text-slate-300">Inputs</p>
<div className="mt-3 space-y-4">
<div>
<label className="flex items-center justify-between text-sm">
<span className="text-slate-300">Add Solar Capacity</span>
<span className="text-emerald-300 font-medium tracking-tight"><span id="solarVal">500</span> kW</span>
</label>
<input className="w-full accent-emerald-400 cursor-pointer" id="solarRange" max="2000" min="0" type="range" value="500"/>
<p className="mt-1 text-[11px] text-slate-400">“Add 500 kW solar”</p>
</div>
<div>
<label className="flex items-center justify-between text-sm">
<span className="text-slate-300">HVAC Efficiency Upgrade</span>
<span className="text-emerald-300 font-medium tracking-tight"><span id="hvacVal">20</span>%</span>
</label>
<input className="w-full accent-emerald-400 cursor-pointer" id="hvacRange" max="50" min="0" type="range" value="20"/>
<p className="mt-1 text-[11px] text-slate-400">“Upgrade HVAC by 20% efficiency”</p>
</div>
<div>
<label className="flex items-center justify-between text-sm">
<span className="text-slate-300">Reduce Bus Idling</span>
<span className="text-emerald-300 font-medium tracking-tight"><span id="busVal">50</span>%</span>
</label>
<input className="w-full accent-emerald-400 cursor-pointer" id="busRange" max="100" min="0" type="range" value="50"/>
<p className="mt-1 text-[11px] text-slate-400">“Reduce bus idling by 50%”</p>
</div>
<div className="flex items-center gap-2">
<button className="group inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium tracking-tight bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-400/40 hover:bg-emerald-500/20 transition" id="applyScenario">
<svg className="h-4 w-4 group-hover:rotate-6 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M19 9l-5 5-4-4-6 6"></path></svg>
                Apply Scenario
              </button>
<a className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium tracking-tight bg-white/5 text-slate-200 ring-1 ring-white/10 hover:bg-white/10 transition" href="?view=scenario&amp;run=1" id="openScenarioTab">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
                Open in New Tab
              </a>
</div>
</div>
<div className="mt-4 rounded-xl bg-black/30 border border-white/10 p-3">
<p className="text-[11px] text-slate-400">Live Impact</p>
<p className="text-2xl font-semibold tracking-tight text-emerald-300"><span id="impactVal">0.0</span> tons CO₂/year reduced</p>
</div>
</div>
<div className="lg:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-slate-300">Map Preview</p>
<p className="text-xs text-slate-400">Hotspots shift as you change inputs</p>
</div>
<div className="relative mt-3 h-[48vh] rounded-xl overflow-hidden border border-white/10">
<div className="absolute inset-0 bg-gradient-to-tr from-[#0b1320] to-[#0f1724]" id="scenarioMap"></div>
<div className="absolute inset-0 pointer-events-none" id="scenarioOverlay"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs">
<span className="h-2 w-2 rounded-full bg-red-400"></span><span className="text-slate-300">Before</span>
<span className="h-2 w-2 rounded-full bg-emerald-400 ml-3"></span><span className="text-slate-300">After</span>
</div>
</div>
</div>
</div>
<p className="mt-3 text-[11px] text-slate-400">Tip: Each scenario run opens in a separate tab for parallel comparisons.</p>
</div>
</section>

<section className="hidden" id="personal">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-8 mb-4 flex items-center justify-between">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Personal Carbon Tracker</h2>
<a className="px-3 py-2 rounded-lg text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition" href="?view=personal&amp;new=1">Open New Tracker Tab</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
<p className="text-sm text-slate-300">Log Commute</p>
<div className="mt-3 grid grid-cols-2 gap-2">
<button className="logMode group flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-black/30 border border-white/10 hover:border-emerald-400/40 hover:bg-emerald-500/10 text-slate-200 hover:text-emerald-300 transition" data-mode="Bike">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="18.5" cy="17.5" r="3.5"></circle><path d="M12 17.5l-3-5h-2"></path><path d="M12 17.5l3-5h2"></path><path d="M12 6v3"></path></svg>
              Bike
            </button>
<button className="logMode group flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-black/30 border border-white/10 hover:border-emerald-400/40 hover:bg-emerald-500/10 text-slate-200 hover:text-emerald-300 transition" data-mode="Bus">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="13" rx="2" width="18" x="3" y="3"></rect><path d="M8 16v2"></path><path d="M16 16v2"></path><path d="M3 11h18"></path></svg>
              Bus
            </button>
<button className="logMode group flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-black/30 border border-white/10 hover:border-emerald-400/40 hover:bg-emerald-500/10 text-slate-200 hover:text-emerald-300 transition" data-mode="Carpool">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 13l2-5h14l2 5"></path><path d="M5 16h14"></path><circle cx="7.5" cy="18.5" r="1.5"></circle><circle cx="16.5" cy="18.5" r="1.5"></circle></svg>
              Carpool
            </button>
<button className="logMode group flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-black/30 border border-white/10 hover:border-emerald-400/40 hover:bg-emerald-500/10 text-slate-200 hover:text-emerald-300 transition" data-mode="EV">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v6"></path><path d="M6 6h12l3 6H3l3-6z"></path><path d="M6 18h12"></path><circle cx="7.5" cy="20" r="1"></circle><circle cx="16.5" cy="20" r="1"></circle></svg>
              EV
            </button>
</div>
<div className="mt-4 rounded-xl bg-black/30 border border-white/10 p-3">
<p className="text-[11px] text-slate-400">Your impact vs campus</p>
<div className="mt-2 grid grid-cols-2 gap-3">
<div>
<p className="text-xs text-slate-400">You</p>
<p className="text-lg font-semibold tracking-tight" id="youCO2">0.8 kg/day</p>
</div>
<div>
<p className="text-xs text-slate-400">Campus Avg</p>
<p className="text-lg font-semibold tracking-tight" id="avgCO2">2.1 kg/day</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-slate-300">Leaderboard</p>
<a className="text-xs text-emerald-300 hover:underline" href="?view=personal&amp;filter=top">Top performers</a>
</div>
<ul className="mt-3 divide-y divide-white/5" id="leaderboard"></ul>
</div>
</div>
</div>
</section>

<section className="hidden" id="analytics">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-8 mb-4 flex items-center justify-between">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Analytics &amp; Reports</h2>
<a className="px-3 py-2 rounded-lg text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center gap-2" href="?view=export">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path></svg>
          Download PDF Report
        </a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="lg:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-4">
<p className="text-sm text-slate-300">CO₂ Trends Over Time</p>
<div className="mt-2 rounded-xl bg-black/30 border border-white/10 p-3">
<div className="relative h-64">
<div className="absolute inset-0">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full"><canvas id="trendChart"></canvas></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
<p className="text-sm text-slate-300">Building Emissions Ranking</p>
<div className="mt-2 rounded-xl bg-black/30 border border-white/10 p-3">
<div className="relative h-64">
<div className="absolute inset-0">
<div><canvas id="rankChart"></canvas></div>
</div>
</div>
</div>
<a className="mt-3 inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-emerald-500/10 text-emerald-300 border border-emerald-400/40 hover:bg-emerald-500/20 transition" href="?view=export">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path></svg>
            Export PDF
          </a>
</div>
</div>
</div>
</div></section>

<section className="hidden" id="building">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
<div className="mt-10 rounded-2xl bg-white/5 border border-white/10 p-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg flex items-center justify-center border border-white/10 bg-black/30" id="buildingBadge">
<svg className="h-4 w-4 text-slate-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 21V7l9-4 9 4v14"></path><path d="M9 10h6"></path><path d="M9 14h6"></path><path d="M9 18h6"></path></svg>
</div>
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white" id="buildingName">Building</h3>
<p className="text-xs text-slate-400" id="buildingDelta">vs campus avg: —</p>
</div>
</div>
<a className="px-3 py-2 rounded-lg text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition" href="?view=map" id="openLayerFromBuilding">Open on Map</a>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-xl bg-black/30 border border-white/10 p-4">
<p className="text-xs text-slate-400">Annual kWh used</p>
<p className="text-lg font-semibold tracking-tight" id="bdKwh">—</p>
</div>
<div className="rounded-xl bg-black/30 border border-white/10 p-4">
<p className="text-xs textlate-400">Tons of CO₂ emitted</p>
<p className="text-lg font-semibold tracking-tight" id="bdCo2">—</p>
</div>
<div className="rounded-xl bg-black/30 border border-white/10 p-4">
<p className="text-xs text-slate-400">Status</p>
<p className="text-lg font-semibold tracking-tight" id="bdStatus">—</p>
</div>
</div>
<div className="mt-6 rounded-xl bg-black/30 border border-white/10 p-4">
<p className="text-sm text-slate-300">Recommendations</p>
<ul className="mt-2 list-disc list-inside text-sm text-slate-300" id="bdRecs"></ul>
</div>
</div>
</div>
</section>

<section className="hidden" id="student">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
<div className="mt-10 rounded-2xl bg-white/5 border border-white/10 p-6">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-12 w-12 rounded-full border border-white/10 object-cover" id="studentAvatar" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<h3 className="text-xl font-semibold tracking-tight" id="studentName">Student</h3>
<p className="text-xs text-slate-400" id="studentRank">—</p>
</div>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-xl bg-black/30 border border-white/10 p-4">
<p className="text-xs text-slate-400">Avg commute CO₂</p>
<p className="text-lg font-semibold tracking-tight" id="studentCO2">—</p>
</div>
<div className="rounded-xl bg-black/30 border border-white/10 p-4">
<p className="text-xs text-slate-400">Trips logged</p>
<p className="text-lg font-semibold tracking-tight" id="studentTrips">—</p>
</div>
<div className="rounded-xl bg-black/30 border border-white/10 p-4">
<p className="text-xs text-slate-400">Eco score</p>
<p className="text-lg font-semibold tracking-tight" id="studentScore">—</p>
</div>
</div>
<div className="mt-6 rounded-xl bg-black/30 border border-white/10 p-4">
<p className="text-sm text-slate-300">Commute Log</p>
<ul className="mt-2 divide-y divide-white/5 text-sm" id="studentLog"></ul>
</div>
</div>
</div>
</section>

<section className="hidden" id="export">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
<div className="mt-10 rounded-2xl bg-white/5 border border-white/10 p-6">
<h3 className="text-xl font-semibold tracking-tight text-white">Export Report</h3>
<p className="mt-1 text-sm text-slate-300">A print-optimized report view will be generated. Use your browser to save as PDF.</p>
<div className="mt-4 flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-emerald-500/10 text-emerald-300 border border-emerald-400/40 hover:bg-emerald-500/20 transition" id="printBtn">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 14h12v8H6z"></path></svg>
            Generate PDF
          </button>
<a className="px-4 py-2 rounded-lg text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition" href="?view=analytics">Open Analytics</a>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="rounded-xl bg-black/30 border border-white/10 p-4">
<p className="text-xs text-slate-400">Summary</p>
<ul className="mt-2 list-disc list-inside text-sm text-slate-300">
<li>Total emissions baseline</li>
<li>Top 5 emitting buildings</li>
<li>Scenario reductions</li>
</ul>
</div>
<div className="rounded-xl bg-black/30 border border-white/10 p-4">
<p className="text-xs text-slate-400">Recommendations</p>
<ul className="mt-2 list-disc list-inside text-sm text-slate-300">
<li>Solar + HVAC optimization</li>
<li>Transport idle management</li>
<li>Waste segregation drives</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-16 mb-10">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-between text-xs text-slate-500">
<p>Prototype for sustainability insights</p>
<div className="flex items-center gap-3">
<a className="hover:text-slate-300 transition" href="?view=home">Home</a>
<a className="hover:text-slate-300 transition" href="?view=map">Map</a>
<a className="hover:text-slate-300 transition" href="?view=scenario">Scenarios</a>
<a className="hover:text-slate-300 transition" href="?view=personal">Personal</a>
<a className="hover:text-slate-300 transition" href="?view=analytics">Analytics</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
