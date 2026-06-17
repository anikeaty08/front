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



    // Utilities
    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
    const fmt = (n, d = 0) => Number(n).toLocaleString(undefined, { maximumFractionDigits: d, minimumFractionDigits: d });

    // Mock data
    const campusCenter = [29.8655, 77.8957]; // IIT Roorkee approx
    const buildings = [
      { id: 'MB', name: 'Main Building', type: 'academic', lat: 29.8654, lng: 77.8955, area: 120000, occupants: 900, energy_kwh: 1800000, co2_tons: 260, green: false, improved: true, monthly: [24,22,21,20,19,18,18,19,20,22,24,25] },
      { id: 'L1', name: 'Lecture Hall Complex', type: 'academic', lat: 29.8647, lng: 77.8929, area: 85000, occupants: 1200, energy_kwh: 1250000, co2_tons: 170, green: true, improved: true, monthly: [14,13,12,12,11,10,10,10,11,12,13,14] },
      { id: 'LB', name: 'Central Library', type: 'academic', lat: 29.8657, lng: 77.8983, area: 60000, occupants: 600, energy_kwh: 720000, co2_tons: 95, green: true, improved: false, monthly: [8,7,7,7,6,6,6,6,7,7,8,8] },
      { id: 'RL', name: 'Research Labs', type: 'lab', lat: 29.8629, lng: 77.8969, area: 70000, occupants: 350, energy_kwh: 1400000, co2_tons: 210, green: false, improved: false, monthly: [20,18,18,17,16,16,16,16,17,18,19,19] },
      { id: 'ADM', name: 'Administrative Block', type: 'administrative', lat: 29.8669, lng: 77.8939, area: 50000, occupants: 300, energy_kwh: 480000, co2_tons: 66, green: true, improved: true, monthly: [6,5,5,5,5,5,5,5,5,6,6,7] },
      { id: 'GH', name: 'Girls Hostel', type: 'residential', lat: 29.868, lng: 77.8978, area: 90000, occupants: 800, energy_kwh: 820000, co2_tons: 115, green: false, improved: true, monthly: [10,9,9,9,9,10,11,12,11,10,10,10] },
      { id: 'BH', name: 'Boys Hostel', type: 'residential', lat: 29.8636, lng: 77.8934, area: 110000, occupants: 1200, energy_kwh: 980000, co2_tons: 140, green: false, improved: false, monthly: [12,11,11,11,11,12,13,14,13,12,12,11] },
      { id: 'SP', name: 'Sports Complex', type: 'academic', lat: 29.8679, lng: 77.8922, area: 65000, occupants: 400, energy_kwh: 560000, co2_tons: 80, green: true, improved: false, monthly: [7,6,6,6,6,7,7,8,7,6,6,6] }
    ];

    const parkingLots = [
      { name: 'Admin Parking', lat: 29.8667, lng: 77.8942, spots: 60 },
      { name: 'LHC Parking', lat: 29.8645, lng: 77.8925, spots: 120 },
      { name: 'Sports Complex Parking', lat: 29.8681, lng: 77.8919, spots: 80 }
    ];

    const busRoutes = [
      {
        name: 'Campus Loop',
        color: '#22c55e',
        stops: [
          [29.8658,77.8984],[29.8682,77.8972],[29.8684,77.8931],[29.8668,77.8917],[29.8643,77.8927],[29.8630,77.8969],[29.8654,77.8955]
        ]
      },
      {
        name: 'Hostel Shuttle',
        color: '#38bdf8',
        stops: [
          [29.8636,77.8934],[29.8646,77.8926],[29.8656,77.8952],[29.8679,77.8978]
        ]
      },
      {
        name: 'City Connector',
        color: '#f59e0b',
        stops: [
          [29.8655,77.8957],[29.8619,77.9002],[29.8580,77.9070]
        ]
      }
    ];

    // Global state
    let map, fgBuildings, fgParking, fgBus, heatLayer, pulseGroup;
    let markersById = new Map();
    let selectedMarker = null;
    let pickDistanceMode = false;
    let pickPoints = [];
    let miniChart, pieChart, lineChart;

    // Icon rendering
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) lucide.createIcons();
    });

    // Initialize Map
    function initMap() {
      try {
        if (window.mappls && typeof mappls.Map === 'function') {
          map = new mappls.Map('map', {
            center: campusCenter,
            zoom: 16,
            zoomControl: true
          });
        } else if (window.L) {
          map = L.map('map', { center: campusCenter, zoom: 16 });
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
            attribution: '&copy; OpenStreetMap'
          }).addTo(map);
        } else {
          console.warn('Map library not available');
          return;
        }

        fgBuildings = L.layerGroup().addTo(map);
        fgParking = L.layerGroup().addTo(map);
        fgBus = L.layerGroup().addTo(map);
        pulseGroup = L.layerGroup().addTo(map);
        heatLayer = L.heatLayer([], { radius: 22, blur: 18, minOpacity: 0.25 });

        // Populate layers
        renderBuildings();
        renderParking();
        renderBuses();
        renderHeatmap();

        // Ensure map doesn't eat UI clicks
        // Panels have higher z-index; no action needed, but keep pointer-events consistent
      } catch (e) {
        console.error('Map init error', e);
      }
    }

    // Helpers
    function colorForEmission(t) {
      if (t < 50) return '#10b981';
      if (t < 150) return '#facc15';
      if (t < 250) return '#f97316';
      return '#ef4444';
    }

    function renderBuildings(list = buildings) {
      fgBuildings.clearLayers();
      pulseGroup.clearLayers();
      markersById.clear();
      list.forEach(b => {
        const color = colorForEmission(b.co2_tons);
        const marker = L.circleMarker([b.lat, b.lng], {
          radius: 9,
          weight: 1.5,
          color: color,
          fillColor: color,
          fillOpacity: 0.25,
          className: 'transition-all'
        }).addTo(fgBuildings);

        marker.bindTooltip(`${b.name} • ${b.co2_tons} t/yr`, { direction: 'top', opacity: 0.9, offset: [0,-8] });
        marker.on('click', () => openDetails(b.id));
        markersById.set(b.id, marker);

        if (b.co2_tons >= 200) {
          makePulse([b.lat, b.lng], color);
        }
      });

      $('#buildingCount').textContent = list.length.toString();
      renderBuildingList(list);
      renderScenarioBuildings(list);
    }

    function makePulse(latlng, color) {
      // Simple animated ring pulses
      const ring = L.circle(latlng, { radius: 5, color, weight: 1, fillOpacity: 0, opacity: 0.7 }).addTo(pulseGroup);
      let r = 5;
      const max = 65;
      const step = 1.1;
      function animate() {
        r = r * step;
        if (r > max) r = 5;
        ring.setRadius(r);
        ring.setStyle({ opacity: (1 - (r / max)) * 0.8 });
        ring._anim = requestAnimationFrame(animate);
      }
      animate();
    }

    function renderHeatmap(list = buildings) {
      const pts = list.map(b => [b.lat, b.lng, Math.min(Math.max(b.co2_tons / 300, 0.1), 1)]);
      heatLayer.setLatLngs(pts);
      if ($('#layerHeatmap').checked || $('#toggleHeatmap').checked) {
        if (!map.hasLayer(heatLayer)) heatLayer.addTo(map);
      } else {
        if (map.hasLayer(heatLayer)) map.removeLayer(heatLayer);
      }
    }

    function renderParking() {
      fgParking.clearLayers();
      parkingLots.forEach(p => {
        L.marker([p.lat, p.lng]).addTo(fgParking)
          .bindTooltip(`${p.name} • ${p.spots} spots`, { direction: 'top', opacity: 0.9 });
      });
    }

    function renderBuses() {
      fgBus.clearLayers();
      const listContainer = $('#busRouteList');
      listContainer.innerHTML = '';
      busRoutes.forEach(route => {
        const poly = L.polyline(route.stops, { color: route.color, weight: 3, opacity: 0.8 }).addTo(fgBus);
        route.stops.forEach((s, idx) => {
          L.circleMarker(s, { radius: 4, color: route.color, fillColor: route.color, fillOpacity: 0.8 }).addTo(fgBus)
            .bindTooltip(`${route.name} Stop ${idx+1}`, { opacity: 0.9 });
        });
        const item = document.createElement('div');
        item.className = 'flex items-center justify-between rounded-md border border-white/10 bg-neutral-900/60 px-2 py-1';
        item.innerHTML = `<span class="text-neutral-300">${route.name}</span><span class="text-xs" style="color:${route.color}">●</span>`;
        item.addEventListener('click', () => {
          map.fitBounds(poly.getBounds(), { padding: [30,30] });
        });
        listContainer.appendChild(item);
      });
    }

    function renderBuildingList(list) {
      const container = $('#buildingList');
      container.innerHTML = '';
      list
        .slice()
        .sort((a,b)=>b.co2_tons-a.co2_tons)
        .forEach(b => {
          const row = document.createElement('button');
          row.className = 'w-full text-left px-2 py-1.5 rounded-md bg-neutral-900/60 border border-white/10 hover:bg-neutral-800 flex items-center justify-between';
          row.innerHTML = `
            <span class="text-sm text-neutral-200">${b.name}</span>
            <span class="text-xs px-1.5 py-0.5 rounded bg-neutral-800 border border-white/10" style="color:${colorForEmission(b.co2_tons)}">${b.co2_tons} t</span>
          `;
          row.addEventListener('click', () => openDetails(b.id, true));
          container.appendChild(row);
        });
    }

    function renderScenarioBuildings(list) {
      const sel = $('#scenarioBuildings');
      sel.innerHTML = '';
      list.forEach(b => {
        const opt = document.createElement('option');
        opt.value = b.id;
        opt.textContent = b.name;
        sel.appendChild(opt);
      });
    }

    // Filters
    function applyBuildingFilters() {
      const type = $('#filterType').value;
      const emission = $('#filterEmission').value;
      let filtered = buildings.slice();
      if (type) filtered = filtered.filter(b => b.type === type);
      if (emission) {
        filtered = filtered.filter(b => {
          if (emission === 'low') return b.co2_tons < 50;
          if (emission === 'med') return b.co2_tons >= 50 && b.co2_tons <= 150;
          if (emission === 'high') return b.co2_tons > 150;
          return true;
        });
      }
      renderBuildings(filtered);
      renderHeatmap(filtered);
    }

    // Details panel
    function openDetails(id, pan = false) {
      const b = buildings.find(x => x.id === id);
      if (!b) return;
      // Populate
      $('#detailsTitle').textContent = b.name;
      $('#detailsEnergy').textContent = fmt(b.energy_kwh);
      $('#detailsCO2').textContent = fmt(b.co2_tons);
      $('#detailsArea').textContent = fmt(b.area);
      const perCapita = b.co2_tons / Math.max(b.occupants || 1, 1);
      $('#detailsPerCapita').textContent = fmt(perCapita, 2);
      $('#detailsComparison').innerHTML = `
        <div class="text-neutral-300">
          This building emits <span class="text-white font-medium">${fmt(b.co2_tons)} t</span>/yr.
          Compared to campus average (<span class="text-neutral-200">${fmt(avgCampusEmission(),0)} t</span>), it is
          <span class="${b.co2_tons > avgCampusEmission() ? 'text-red-400' : 'text-emerald-400'} font-medium">
            ${b.co2_tons > avgCampusEmission() ? 'higher' : 'lower'}
          </span>.
        </div>
      `;
      // Recs
      const recs = $('#detailsRecs');
      recs.innerHTML = '';
      const recommendations = [];
      if (!b.green) recommendations.push('Consider green certification measures and audits.');
      if (b.co2_tons > 150) recommendations.push('Install rooftop solar to offset at least 20% of consumption.');
      if (b.type === 'lab') recommendations.push('Optimize lab ventilation and fume hoods schedules.');
      if (!b.improved) recommendations.push('Retrofit lighting with LEDs and motion sensors.');
      if (recommendations.length === 0) recommendations.push('Great job! Maintain current efficiency practices.');
      recommendations.forEach(t => {
        const li = document.createElement('li');
        li.textContent = t;
        recs.appendChild(li);
      });

      // Mini chart
      const ctx = $('#miniChart').getContext('2d');
      if (miniChart) miniChart.destroy();
      miniChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['J','F','M','A','M','J','J','A','S','O','N','D'],
          datasets: [{ label: 'tons', data: b.monthly, backgroundColor: '#10b98166', borderColor: '#10b981' }]
        },
        options: {
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false }, ticks: { color: '#9ca3af' } },
            y: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: '#9ca3af' } }
          }
        }
      });

      // Panel in
      const panel = $('#detailsPanel');
      panel.style.transform = 'translateX(0%)';

      // Map focus
      const m = markersById.get(b.id);
      if (m) {
        if (selectedMarker) selectedMarker.setStyle({ fillOpacity: 0.25, radius: 9 });
        m.setStyle({ fillOpacity: 0.5, radius: 11 });
        selectedMarker = m;
      }
      if (pan) map.setView([b.lat, b.lng], 17, { animate: true });
    }

    function closeDetails() {
      $('#detailsPanel').style.transform = 'translateX(120%)';
      if (selectedMarker) selectedMarker.setStyle({ fillOpacity: 0.25, radius: 9 });
      selectedMarker = null;
    }

    // Analytics charts
    function initAnalytics() {
      // Counters
      const total = buildings.reduce((s,b)=>s + b.co2_tons, 0);
      $('#totalEmissionsCounter').textContent = fmt(total, 0);

      // Pie breakdown (by type)
      const byType = buildings.reduce((acc,b)=> {
        acc[b.type] = (acc[b.type]||0) + b.co2_tons; return acc;
      }, {});
      const pctx = $('#pieBreakdown').getContext('2d');
      pieChart = new Chart(pctx, {
        type: 'doughnut',
        data: {
          labels: Object.keys(byType),
          datasets: [{
            data: Object.values(byType),
            backgroundColor: ['#22c55e','#f59e0b','#38bdf8','#e11d48','#a78bfa']
          }]
        },
        options: {
          plugins: { legend: { labels: { color: '#d1d5db' } } }
        }
      });

      // Line monthly campus trend
      const months = ['J','F','M','A','M','J','J','A','S','O','N','D'];
      // Sum of monthly
      const monthly = months.map((_,i)=> buildings.reduce((s,b)=> s + (b.monthly[i]||0), 0));
      const lctx = $('#lineMonthly').getContext('2d');
      lineChart = new Chart(lctx, {
        type: 'line',
        data: {
          labels: months,
          datasets: [{
            label: 'tons',
            data: monthly,
            borderColor: '#22c55e',
            backgroundColor: '#22c55e33',
            tension: 0.35,
            fill: true
          }]
        },
        options: {
          plugins: { legend: { display: false } },
          scales: {
            x: { ticks: { color: '#9ca3af' }, grid: { display: false } },
            y: { ticks: { color: '#9ca3af' }, grid: { color: 'rgba(255,255,255,0.06)' } }
          }
        }
      });

      // Hotspots
      const hs = buildings.slice().sort((a,b)=> b.co2_tons - a.co2_tons).slice(0,4);
      const list = $('#hotspotsList');
      list.innerHTML = '';
      hs.forEach(h => {
        const div = document.createElement('div');
        div.className = 'rounded-md border border-white/10 bg-neutral-900/60 p-2 flex items-center justify-between';
        div.innerHTML = `<span class="text-neutral-300">${h.name}</span>
          <span class="text-xs px-1.5 py-0.5 rounded bg-neutral-800 border border-white/10" style="color:${colorForEmission(h.co2_tons)}">${h.co2_tons} t</span>`;
        div.addEventListener('click', () => openDetails(h.id, true));
        list.appendChild(div);
      });
    }

    function avgCampusEmission() {
      return buildings.reduce((s,b)=>s+b.co2_tons,0) / buildings.length;
    }

    // Transport UI
    function populateParkingList() {
      const list = $('#parkingList');
      list.innerHTML = '';
      parkingLots.forEach(p => {
        const item = document.createElement('div');
        item.className = 'flex items-center justify-between rounded-md border border-white/10 bg-neutral-900/60 px-2 py-1';
        item.innerHTML = `<span>${p.name}</span><span class="text-xs text-neutral-400">${p.spots} spots</span>`;
        item.addEventListener('click', () => map.setView([p.lat,p.lng], 18, { animate: true }));
        list.appendChild(item);
      });
    }

    // Live "campus commute" counter simulation
    function startLiveCounter() {
      const el = $('#campusCommuteCounter');
      let val = Math.floor(1200 + Math.random() * 400);
      el.textContent = val.toString();
      setInterval(() => {
        val += Math.floor(Math.random() * 15);
        el.textContent = val.toString();
      }, 2500);
    }

    // Alerts + timeline
    function initAlerts() {
      const alerts = [
        { time: 9, sev: 'high', msg: 'Main Building HVAC spike detected (+18% vs baseline).' },
        { time: 12, sev: 'med', msg: 'Bus usage surge - consider spreading lecture times.' },
        { time: 17, sev: 'high', msg: 'Parking occupancy near LHC exceeding 90%.' }
      ];
      const container = $('#alertsList');
      function render(hour) {
        container.innerHTML = '';
        alerts
          .filter(a => a.time <= hour)
          .forEach(a => {
            const div = document.createElement('div');
            const color = a.sev === 'high' ? 'text-red-300 bg-red-500/10 border-red-500/30' : 'text-amber-300 bg-amber-500/10 border-amber-500/30';
            div.className = `rounded-md border px-2 py-1.5 ${color} flex items-start gap-2`;
            div.innerHTML = `<i data-lucide="${a.sev==='high'?'flashlight':'alert-triangle'}" class="h-4 w-4"></i>
            <div class="flex-1">
              <div class="text-xs">${a.msg}</div>
              <div class="text-[10px] opacity-70 mt-0.5">${String(a.time).padStart(2,'0')}:00</div>
            </div>`;
            container.appendChild(div);
          });
        if (window.lucide) lucide.createIcons();
      }
      render(parseInt($('#timelineSlider').value,10));
      $('#timelineSlider').addEventListener('input', e => {
        const h = parseInt(e.target.value,10);
        $('#timelineLabel').textContent = `${String(h).padStart(2,'0')}:00`;
        render(h);
      });
    }

    // Weather (mock)
    function initWeather() {
      const temp = (26 + Math.random() * 6).toFixed(1);
      const desc = ['Sunny','Partly cloudy','Humid','Hazy'][Math.floor(Math.random()*4)];
      $('#weatherTemp').textContent = `${temp}°C`;
      $('#weatherDesc').textContent = desc;
      $('#weatherUpdated').textContent = new Date().toLocaleTimeString();
      $('#weatherIcon').style.backgroundImage = 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(56,189,248,0.2))';
      // Simple impact heuristic
      const impact = Math.round((parseFloat(temp) - 24) * 2);
      $('#weatherImpact').textContent = `${impact > 0 ? '+' : ''}${impact}%`;
    }

    // Personal commute logging
    const EF = { car: 0.171, bike: 0.094, bus: 0.103, cycle: 0, walk: 0 }; // kg CO2 per km (approx)
    function calcCommuteEmission(mode, distanceKm, frequency) {
      const trips = frequency === 'daily' ? 10 : 1; // work/school week
      return EF[mode] * distanceKm * trips;
    }

    function initCommuteModal() {
      $('#btnLogCommute').addEventListener('click', () => $('#commuteModal').classList.remove('hidden'));
      $('#closeCommuteModal').addEventListener('click', () => {
        $('#commuteModal').classList.add('hidden');
        pickDistanceMode = false; pickPoints = [];
      });
      ['commuteMode','commuteDistance','commuteFrequency'].forEach(id => {
        $(`#${id}`).addEventListener('input', updateCommuteEstimate);
      });
      $('#btnPickOnMap').addEventListener('click', () => {
        pickDistanceMode = true;
        pickPoints = [];
        showToast('Click two points on the map');
      });
      $('#btnSaveCommute').addEventListener('click', () => {
        const mode = $('#commuteMode').value;
        const dist = parseFloat($('#commuteDistance').value) || 0;
        const freq = $('#commuteFrequency').value;
        const est = calcCommuteEmission(mode, dist, freq);
        updatePersonalFootprint(est);
        $('#commuteModal').classList.add('hidden');
        showToast('Commute saved');
      });
    }

    function updateCommuteEstimate() {
      const mode = $('#commuteMode').value;
      const dist = parseFloat($('#commuteDistance').value) || 0;
      const freq = $('#commuteFrequency').value;
      const est = calcCommuteEmission(mode, dist, freq);
      $('#commuteEst').textContent = fmt(est, 2);
    }

    function updatePersonalFootprint(kgPerPeriod) {
      $('#personalFootprint').textContent = fmt(kgPerPeriod, 1);
      const pct = Math.min(100, (kgPerPeriod / 100) * 100);
      $('#personalFootprintBar').style.width = `${pct}%`;
    }

    // Map click for distance picking
    function setupMapPicking() {
      if (!map) return;
      map.on('click', (e) => {
        if (!pickDistanceMode) return;
        pickPoints.push([e.latlng.lat, e.latlng.lng]);
        L.circleMarker(e.latlng, { radius: 5, color: '#22c55e', fillColor: '#22c55e', fillOpacity: 0.9 }).addTo(map);
        if (pickPoints.length === 2) {
          const d = haversine(pickPoints[0], pickPoints[1]);
          $('#commuteDistance').value = d.toFixed(2);
          updateCommuteEstimate();
          pickDistanceMode = false;
          pickPoints = [];
          showToast(`Distance: ${d.toFixed(2)} km`);
        }
      });
    }

    function haversine(a, b) {
      const toRad = d => d * Math.PI / 180;
      const R = 6371; // km
      const dLat = toRad(b[0]-a[0]);
      const dLng = toRad(b[1]-a[1]);
      const s = Math.sin(dLat/2)**2 + Math.cos(toRad(a[0]))*Math.cos(toRad(b[0]))*Math.sin(dLng/2)**2;
      return 2 * R * Math.asin(Math.sqrt(s));
    }

    // Tabs
    function initTabs() {
      $$('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const target = btn.getAttribute('data-tab');
          $$('.tab-panel').forEach(p => p.classList.add('hidden'));
          $(`#${target}`).classList.remove('hidden');
          $$('.tab-btn').forEach(b => b.classList.remove('bg-emerald-600/20','border-emerald-500/30','text-emerald-300'));
          btn.classList.add('bg-emerald-600/20','border-emerald-500/30','text-emerald-300');
        });
      });
    }

    // Layers toggles
    function initLayerToggles() {
      $('#layerBuildings').addEventListener('change', e => {
        if (e.target.checked) fgBuildings.addTo(map); else map.removeLayer(fgBuildings);
      });
      const syncHeat = () => {
        const checked = $('#layerHeatmap').checked || $('#toggleHeatmap').checked;
        if (checked) { if (!map.hasLayer(heatLayer)) heatLayer.addTo(map); }
        else if (map.hasLayer(heatLayer)) map.removeLayer(heatLayer);
      };
      $('#layerHeatmap').addEventListener('change', syncHeat);
      $('#toggleHeatmap').addEventListener('change', () => {
        $('#layerHeatmap').checked = $('#toggleHeatmap').checked;
        syncHeat();
      });

      $('#layerParking').addEventListener('change', e => {
        if (e.target.checked) fgParking.addTo(map); else map.removeLayer(fgParking);
      });
      $('#toggleParking').addEventListener('click', () => {
        $('#layerParking').checked = !$('#layerParking').checked;
        $('#layerParking').dispatchEvent(new Event('change'));
      });

      $('#layerBus').addEventListener('change', e => {
        if (e.target.checked) fgBus.addTo(map); else map.removeLayer(fgBus);
      });
      $('#toggleBusRoutes').addEventListener('click', () => {
        $('#layerBus').checked = !$('#layerBus').checked;
        $('#layerBus').dispatchEvent(new Event('change'));
      });

      $('#layerPulses').addEventListener('change', e => {
        if (e.target.checked) pulseGroup.addTo(map); else map.removeLayer(pulseGroup);
      });

      $('#toggleLayerPanel').addEventListener('click', () => {
        $('#layerPanelBody').classList.toggle('hidden');
      });
    }

    // Sidebar behaviors
    function initSidebar() {
      const sidebar = $('#sidebar');
      $('#collapseSidebar').addEventListener('click', () => {
        const collapsed = sidebar.classList.toggle('-translate-x-full');
        sidebar.classList.add('transition-transform');
        sidebar.style.transitionDuration = '200ms';
        if (collapsed) sidebar.classList.add('pointer-events-none');
        else sidebar.classList.remove('pointer-events-none');
      });
      $('#mobileSidebarToggle').addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-0');
        sidebar.classList.toggle('-translate-x-full');
      });
    }

    // Filtering controls
    function initFilters() {
      $('#filterType').addEventListener('change', applyBuildingFilters);
      $('#filterEmission').addEventListener('change', applyBuildingFilters);
      $('#btnHighEmitters').addEventListener('click', () => {
        const list = buildings.filter(b => b.co2_tons > 150);
        renderBuildings(list);
        renderHeatmap(list);
        map.fitBounds(L.featureGroup(list.map(b=> L.marker([b.lat,b.lng]))).getBounds(), { padding: [30,30] });
      });
      $('#btnGreenOnly').addEventListener('click', () => {
        const list = buildings.filter(b => b.green);
        renderBuildings(list);
        renderHeatmap(list);
      });
      $('#btnRecentImprovements').addEventListener('click', () => {
        const list = buildings.filter(b => b.improved);
        renderBuildings(list);
        renderHeatmap(list);
      });
      $('#btnRefreshData').addEventListener('click', () => {
        showToast('Data refreshed');
        renderBuildings(buildings);
        renderHeatmap(buildings);
      });
    }

    // Global search
    function initSearch() {
      $('#globalSearch').addEventListener('input', (e) => {
        const q = e.target.value.trim().toLowerCase();
        const list = buildings.filter(b => b.name.toLowerCase().includes(q) || b.type.includes(q));
        renderBuildingList(list);
      });
      $('#globalSearch').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const q = e.target.value.trim().toLowerCase();
          const match = buildings.find(b => b.name.toLowerCase().includes(q));
          if (match) openDetails(match.id, true);
        }
      });
    }

    // Scenario planning
    function initScenarios() {
      const toggleField = (checkId, fieldId) => {
        $(`#${checkId}`).addEventListener('change', (e) => {
          const f = $(`#${fieldId}`);
          if (f) f.classList.toggle('hidden', !e.target.checked);
          computeScenario();
        });
      };
      toggleField('optSolar', 'solarFields');
      toggleField('optHVAC', 'hvacFields');
      toggleField('optTrees', 'treesFields');
      toggleField('optCycling', 'cyclingFields');

      ['solarCapacity','hvacEfficiency','treesCount','cyclingReduction'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', computeScenario);
      });
      $('#scenarioBuildings').addEventListener('change', computeScenario);
      $('#btnSaveScenario').addEventListener('click', () => {
        const payload = gatherScenario();
        localStorage.setItem('ccfm_scenario', JSON.stringify(payload));
        showToast('Scenario saved');
      });
    }

    function gatherScenario() {
      const selected = Array.from($('#scenarioBuildings').selectedOptions).map(o=>o.value);
      return {
        b: selected,
        solar: $('#optSolar').checked ? Number($('#solarCapacity').value || 0) : 0,
        hvacEff: $('#optHVAC').checked ? Number($('#hvacEfficiency').value || 0) : 0,
        trees: $('#optTrees').checked ? Number($('#treesCount').value || 0) : 0,
        cycling: $('#optCycling').checked ? Number($('#cyclingReduction').value || 0) : 0
      };
    }

    function computeScenario() {
      const s = gatherScenario();
      const selected = s.b.length ? buildings.filter(b => s.b.includes(b.id)) : buildings;
      // Assumptions
      const gridEF = 0.7; // kg CO2 per kWh
      const solarHoursYr = 1450; // kWh per kW per year approx
      let reductionKg = 0;

      // Solar
      if (s.solar > 0) reductionKg += s.solar * solarHoursYr * gridEF;

      // HVAC efficiency improvement (percent of selected buildings energy)
      if (s.hvacEff > 0) {
        const energyKwh = selected.reduce((sum,b)=> sum + b.energy_kwh, 0);
        reductionKg += energyKwh * (s.hvacEff/100) * gridEF;
      }

      // Trees offset (20 kg CO2/tree/yr conservative campus estimate)
      if (s.trees > 0) reductionKg += s.trees * 20;

      // Cycling mode shift: reduce 5% of transport share per 10% shift (proxy 80 t campus transport base)
      if (s.cycling > 0) {
        const transportBaseKg = 80000; // 80 t
        reductionKg += transportBaseKg * (s.cycling/100) * 0.5;
      }

      const reductionTons = reductionKg / 1000;
      const campusTotal = buildings.reduce((s,b)=> s + b.co2_tons, 0) + 80; // include small transport proxy
      const pct = Math.min(100, (reductionTons / campusTotal) * 100);

      $('#scenarioReductionTons').textContent = fmt(reductionTons, 2);
      $('#scenarioReductionPct').textContent = fmt(pct, 1);

      // Simple cost-benefit
      const costSolar = s.solar * 55000; // ₹/kW
      const saveSolarYr = s.solar * solarHoursYr * 7; // ₹/kWh @ ₹7
      const costHVAC = s.hvacEff * 200000; // rough
      const saveHVACYr = s.hvacEff * 50000;
      const invest = Math.round(costSolar + costHVAC);
      const savings = Math.round(saveSolarYr + saveHVACYr);
      const payback = savings > 0 ? (invest / savings).toFixed(1) + ' yrs' : '—';
      $('#scenarioCostBenefit').textContent = `Investment: ₹${fmt(invest)}, Savings: ₹${fmt(savings)}/yr, Payback: ${payback}`;
    }

    // Export CSV
    function initExport() {
      $('#btnExportCsv').addEventListener('click', () => {
        const headers = ['id','name','type','lat','lng','area','occupants','energy_kwh','co2_tons'];
        const rows = buildings.map(b => [b.id,b.name,b.type,b.lat,b.lng,b.area,b.occupants,b.energy_kwh,b.co2_tons]);
        const csv = [headers.join(','), ...rows.map(r=>r.join(','))].join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'campus_emissions.csv';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      });
    }

    // Share, Help, Dark mode
    function initHeader() {
      $('#btnShare').addEventListener('click', async () => {
        const url = new URL(location.href);
        if (selectedMarker) {
          const b = [...markersById.entries()].find(([,m]) => m === selectedMarker)?.[0];
          if (b) url.searchParams.set('b', b);
        }
        try {
          await navigator.clipboard.writeText(url.toString());
          showToast('Link copied to clipboard');
        } catch {
          showToast('Copy failed');
        }
      });
      $('#btnShowHelp').addEventListener('click', () => $('#helpOverlay').classList.remove('hidden'));
      $('#closeHelpOverlay').addEventListener('click', () => $('#helpOverlay').classList.add('hidden'));
      $('#btnStartExploring').addEventListener('click', () => $('#helpOverlay').classList.add('hidden'));
      $('#btnHelpDocs').addEventListener('click', () => window.open('https://developer.mappls.com/apis', '_blank'));

      $('#darkModeToggle').addEventListener('change', (e) => {
        const checked = e.target.checked;
        const knob = $('#darkHandle');
        knob.style.transform = checked ? 'translateX(1rem)' : 'translateX(0)';
        document.body.classList.toggle('bg-neutral-50', checked);
        document.body.classList.toggle('text-neutral-900', checked);
      });

      $('#btnNearMe').addEventListener('click', () => {
        if (!navigator.geolocation) return showToast('Geolocation not supported');
        navigator.geolocation.getCurrentPosition(pos => {
          const here = [pos.coords.latitude, pos.coords.longitude];
          map.setView(here, 17, { animate: true });
          L.marker(here).addTo(map).bindTooltip('You are here', { permanent: false });
          // nearest building
          const nearest = buildings
            .map(b => ({ b, d: haversine(here, [b.lat, b.lng]) }))
            .sort((a,b)=> a.d - b.d)[0];
          if (nearest) showToast(`Nearest: ${nearest.b.name} (${nearest.d.toFixed(2)} km)`);
        }, () => showToast('Location denied'));
      });

      $('#btnCloseDetails').addEventListener('click', closeDetails);
      $('#btnDetailedReport').addEventListener('click', () => showToast('Opening detailed report...'));
      $('#btnWatchlist').addEventListener('click', () => showToast('Added to watchlist'));
    }

    // Toast
    let toastTimer;
    function showToast(msg) {
      $('#toastMsg').textContent = msg;
      const t = $('#toast');
      t.classList.remove('hidden','opacity-0');
      t.classList.add('opacity-100');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        t.classList.add('opacity-0');
        setTimeout(()=> t.classList.add('hidden'), 200);
      }, 2200);
    }

    // URL param deep-link
    function handleDeepLink() {
      const params = new URLSearchParams(location.search);
      const id = params.get('b');
      if (id) openDetails(id, true);
    }

    // Bind buttons in transport cards
    function initTransportUI() {
      populateParkingList();
      startLiveCounter();
    }

    // Layer toggles inside Transport panel btns already wired by initLayerToggles

    // Buildings list item from renderBuildingList will call openDetails

    // Bind refresh help timeline etc.
    function initUIEvents() {
      // Link heatmap toggle with layer checkbox
      $('#toggleParking').setAttribute('aria-pressed', 'false');
      $('#toggleBusRoutes').setAttribute('aria-pressed', 'false');

      // Buildings filter resets on tab switch (optional)
      // Not resetting for now
    }

    // Initial hotspots + counters etc. after charts init

    // Kick-off
    window.addEventListener('DOMContentLoaded', () => {
      initMap();
      initAnalytics();
      initLayerToggles();
      initSidebar();
      initFilters();
      initSearch();
      initScenarios();
      initExport();
      initHeader();
      initCommuteModal();
      initTransportUI();
      initAlerts();
      initWeather();
      setupMapPicking();
      initTabs();
      initUIEvents();
      handleDeepLink();
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
      

<div className="min-h-screen flex flex-col" id="app">

<header className="fixed top-0 inset-x-0 z-50">
<div className="backdrop-blur supports-[backdrop-filter]:bg-neutral-900/70 bg-neutral-900/80 border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-emerald-600/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-semibold tracking-tight">
              C
            </div>
<h1 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-white">
              Campus Carbon Footprint Mapper - IIT Roorkee
            </h1>
</div>
<div className="hidden md:flex items-center gap-3">
<div className="relative">
<i className="absolute left-3 top-2.5 h-4 w-4 text-neutral-400" data-lucide="search"></i>
<input className="w-80 pl-9 pr-3 py-2 rounded-md bg-neutral-900 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus:border-emerald-600 text-sm placeholder:text-neutral-400" id="globalSearch" placeholder="Search buildings, departments, facilities..."/>
</div>
<button aria-label="Help and tutorial" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-900 border border-white/10 hover:bg-neutral-800 hover:border-neutral-700 transition-colors" id="btnShowHelp">
<i className="h-4 w-4 text-neutral-300" data-lucide="help-circle"></i>
<span className="hidden lg:inline text-sm">Help</span>
</button>
<button aria-label="Share" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-900 border border-white/10 hover:bg-neutral-800 hover:border-neutral-700 transition-colors" id="btnShare">
<i className="h-4 w-4 text-neutral-300" data-lucide="share-2"></i>
<span className="hidden lg:inline text-sm">Share</span>
</button>
<div className="flex items-center">
<label className="flex items-center gap-2 cursor-pointer group">
<input aria-label="Toggle dark mode" className="sr-only" id="darkModeToggle" type="checkbox"/>
<div className="w-10 h-6 rounded-full bg-neutral-800 border border-white/10 relative transition-all group-hover:border-neutral-600">
<div className="absolute top-0.5 left-0.5 h-5 w-5 bg-neutral-200 rounded-full transition-all" id="darkHandle"></div>
</div>
<span className="text-sm text-neutral-300 hidden xl:inline">Dark</span>
</label>
</div>
<div className="h-8 w-8 rounded-full bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop')] bg-cover bg-center border border-white/10"></div>
</div>
<div className="flex md:hidden items-center gap-2">
<button className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-neutral-900 border border-white/10 hover:bg-neutral-800" id="mobileSidebarToggle">
<i className="h-5 w-5 text-neutral-200" data-lucide="panel-left"></i>
</button>
</div>
</div>
</div>
</header>

<main className="flex-1 pt-16 relative">

<aside className="absolute left-4 top-20 z-40 w-[320px] max-w-[90vw] lg:w-[360px] transition-all" id="sidebar">
<div className="rounded-xl bg-neutral-900/80 backdrop-blur border border-white/10 shadow-2xl overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-emerald-400" data-lucide="sliders-horizontal"></i>
<span className="text-sm font-medium text-neutral-200">Controls</span>
</div>
<button className="inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-neutral-800 border border-white/10" id="collapseSidebar">
<i className="h-4 w-4 text-neutral-300" data-lucide="chevrons-left"></i>
</button>
</div>

<div className="px-3 pt-3">
<div className="grid grid-cols-4 gap-2">
<button className="tab-btn inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm bg-emerald-600/20 border border-emerald-500/30 text-emerald-300" data-tab="tab-buildings">
<i className="h-4 w-4" data-lucide="building-2"></i> Buildings
              </button>
<button className="tab-btn inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm bg-neutral-900 border border-white/10 text-neutral-300 hover:bg-neutral-800" data-tab="tab-transport">
<i className="h-4 w-4" data-lucide="bus"></i> Transport
              </button>
<button className="tab-btn inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm bg-neutral-900 border border-white/10 text-neutral-300 hover:bg-neutral-800" data-tab="tab-analytics">
<i className="h-4 w-4" data-lucide="chart-pie"></i> Analytics
              </button>
<button className="tab-btn inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm bg-neutral-900 border border-white/10 text-neutral-300 hover:bg-neutral-800" data-tab="tab-scenarios">
<i className="h-4 w-4" data-lucide="beaker"></i> Scenarios
              </button>
</div>
</div>

<div className="p-4 space-y-4 overflow-y-auto max-h-[62vh] lg:max-h-[70vh]" id="tab-panels">

<section className="tab-panel space-y-4" id="tab-buildings">
<div className="flex items-center justify-between">
<h2 className="text-base font-semibold tracking-tight text-white">Buildings Overview</h2>
<div className="flex items-center gap-2">
<label className="flex items-center gap-2 text-sm">
<input className="peer sr-only" id="toggleHeatmap" type="checkbox"/>
<span className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-neutral-900 border border-white/10 peer-checked:bg-emerald-900/30 peer-checked:border-emerald-600/40 cursor-pointer">
<i className="h-4 w-4 text-emerald-400" data-lucide="flame"></i>
                      Heatmap
                    </span>
</label>
<button className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-neutral-900 border border-white/10 hover:bg-neutral-800" id="btnRefreshData">
<i className="h-4 w-4 text-neutral-300" data-lucide="refresh-ccw"></i>
<span className="text-sm">Refresh</span>
</button>
</div>
</div>
<div className="rounded-lg border border-white/10 p-3 bg-neutral-950/50">
<div className="flex items-center gap-2 mb-3">
<i className="h-4 w-4 text-neutral-300" data-lucide="filter"></i>
<span className="text-sm font-medium text-neutral-200">Filters</span>
</div>
<div className="grid grid-cols-2 gap-2">
<select className="w-full px-3 py-2 rounded-md bg-neutral-900 border border-white/10 text-sm" id="filterType">
<option value="">All types</option>
<option>academic</option>
<option>residential</option>
<option>lab</option>
<option>administrative</option>
</select>
<select className="w-full px-3 py-2 rounded-md bg-neutral-900 border border-white/10 text-sm" id="filterEmission">
<option value="">All emission levels</option>
<option value="low">Low (&lt; 50 t)</option>
<option value="med">Medium (50-150 t)</option>
<option value="high">High (&gt; 150 t)</option>
</select>
<button className="col-span-2 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-neutral-900 border border-white/10 hover:bg-neutral-800 text-sm" id="btnHighEmitters">
<i className="h-4 w-4 text-amber-400" data-lucide="alert-triangle"></i>
                    Show All High Emitters
                  </button>
<button className="col-span-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-neutral-900 border border-white/10 hover:bg-neutral-800 text-sm" id="btnGreenOnly">
<i className="h-4 w-4 text-emerald-400" data-lucide="leaf"></i>
                    Green Buildings Only
                  </button>
<button className="col-span-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-neutral-900 border border-white/10 hover:bg-neutral-800 text-sm" id="btnRecentImprovements">
<i className="h-4 w-4 text-emerald-400" data-lucide="trending-up"></i>
                    Recent Improvements
                  </button>
</div>
</div>
<div className="rounded-lg border border-white/10 p-3 bg-neutral-950/50">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-300" data-lucide="list"></i>
<span className="text-sm font-medium text-neutral-200">Buildings</span>
</div>
<span className="text-xs text-neutral-400" id="buildingCount">0</span>
</div>
<div className="space-y-2 max-h-64 overflow-y-auto pr-1" id="buildingList">

</div>
</div>
<div className="rounded-lg border border-white/10 p-3 bg-neutral-950/50">
<div className="flex items-center gap-2 mb-3">
<i className="h-4 w-4 text-neutral-300" data-lucide="info"></i>
<span className="text-sm font-medium text-neutral-200">Legend</span>
</div>
<div className="grid grid-cols-4 gap-2 text-xs text-neutral-300">
<div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-emerald-500 inline-block"></span> &lt; 50 t</div>
<div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-yellow-400 inline-block"></span> 50–150 t</div>
<div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-orange-500 inline-block"></span> 150–250 t</div>
<div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-red-500 inline-block"></span> &gt; 250 t</div>
</div>
</div>
</section>

<section className="tab-panel space-y-4 hidden" id="tab-transport">
<div className="flex items-center justify-between">
<h2 className="text-base font-semibold tracking-tight text-white">Transport Emissions</h2>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-emerald-600/20 border border-emerald-500/30 hover:bg-emerald-600/25" id="btnLogCommute">
<i className="h-4 w-4 text-emerald-400" data-lucide="plus"></i>
                    Log Your Commute
                  </button>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 p-3 bg-neutral-950/50">
<div className="text-xs text-neutral-400 mb-1">Your weekly footprint</div>
<div className="flex items-baseline gap-2">
<div className="text-2xl font-semibold tracking-tight text-white" id="personalFootprint">0.0</div>
<div className="text-sm text-neutral-400">kg CO2</div>
</div>
<div className="mt-2 h-1.5 w-full rounded bg-neutral-800">
<div className="h-1.5 rounded bg-emerald-500" id="personalFootprintBar" style={{width: '0%'}}></div>
</div>
</div>
<div className="rounded-lg border border-white/10 p-3 bg-neutral-950/50">
<div className="flex items-center justify-between">
<div>
<div className="text-xs text-neutral-400 mb-1">Campus commute emissions</div>
<div className="flex items-baseline gap-2">
<div className="text-2xl font-semibold tracking-tight text-white" id="campusCommuteCounter">0</div>
<div className="text-sm text-neutral-400">kg CO2</div>
</div>
</div>
<span className="px-2 py-1 rounded bg-red-500/15 text-red-300 text-xs border border-red-500/30">Live</span>
</div>
</div>
</div>
<div className="rounded-lg border border-white/10 p-3 bg-neutral-950/50">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-300" data-lucide="parking-square"></i>
<span className="text-sm font-medium text-neutral-200">Parking Lots</span>
</div>
<button className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-neutral-900 border border-white/10 hover:bg-neutral-800 text-xs" id="toggleParking">
                    Toggle
                  </button>
</div>
<div className="space-y-1 text-sm text-neutral-300" id="parkingList">

</div>
</div>
<div className="rounded-lg border border-white/10 p-3 bg-neutral-950/50">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-300" data-lucide="route"></i>
<span className="text-sm font-medium text-neutral-200">Bus Routes</span>
</div>
<button className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-neutral-900 border border-white/10 hover:bg-neutral-800 text-xs" id="toggleBusRoutes">
                    Toggle
                  </button>
</div>
<div className="space-y-1 text-sm text-neutral-300" id="busRouteList">

</div>
</div>
<div className="rounded-lg border border-white/10 p-3 bg-neutral-950/50">
<div className="flex items-center gap-2 mb-3">
<i className="h-4 w-4 text-neutral-300" data-lucide="filter"></i>
<span className="text-sm font-medium text-neutral-200">Filters</span>
</div>
<div className="grid grid-cols-2 gap-2">
<select className="w-full px-3 py-2 rounded-md bg-neutral-900 border border-white/10 text-sm" id="filterRoute">
<option value="">All routes</option>
<option value="Campus Loop">Campus Loop</option>
<option value="Hostel Shuttle">Hostel Shuttle</option>
<option value="City Connector">City Connector</option>
</select>
<select className="w-full px-3 py-2 rounded-md bg-neutral-900 border border-white/10 text-sm" id="filterVehicleType">
<option value="">All vehicles</option>
<option value="car">Car</option>
<option value="bike">Bike</option>
<option value="bus">Bus</option>
<option value="cycle">Cycle</option>
<option value="walk">Walk</option>
</select>
</div>
</div>
</section>

<section className="tab-panel space-y-4 hidden" id="tab-analytics">
<div className="flex items-center justify-between">
<h2 className="text-base font-semibold tracking-tight text-white">Campus Analytics</h2>
<button className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-neutral-900 border border-white/10 hover:bg-neutral-800" id="btnExportCsv">
<i className="h-4 w-4 text-neutral-300" data-lucide="download"></i>
<span className="text-sm">Export CSV</span>
</button>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="col-span-3 md:col-span-1 rounded-lg border border-white/10 p-3 bg-neutral-950/50">
<div className="text-xs text-neutral-400 mb-1">Total Campus Emissions</div>
<div className="flex items-baseline gap-2">
<div className="text-3xl font-semibold tracking-tight text-white" id="totalEmissionsCounter">0</div>
<div className="text-sm text-neutral-400">tons CO2/yr</div>
</div>
<div className="mt-2 text-xs text-emerald-400">Campus reduced emissions by 12% vs last year</div>
</div>
<div className="col-span-3 md:col-span-2 rounded-lg border border-white/10 p-3 bg-neutral-950/50">
<h3 className="text-sm font-medium text-neutral-200 mb-2">Breakdown</h3>

<div className="relative">
<div className="h-[200px]"><canvas id="pieBreakdown"></canvas></div>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="col-span-3 md:col-span-2 rounded-lg border border-white/10 p-3 bg-neutral-950/50">
<h3 className="text-sm font-medium text-neutral-200 mb-2">Monthly Emissions (Last 12 months)</h3>
<div className="relative">
<div className="h-[220px]"><canvas id="lineMonthly"></canvas></div>
</div>
</div>
<div className="col-span-3 md:col-span-1 rounded-lg border border-white/10 p-3 bg-neutral-950/50">
<h3 className="text-sm font-medium text-neutral-200 mb-2">Top Hotspots</h3>
<div className="space-y-2 text-sm" id="hotspotsList">

</div>
</div>
</div>
<div className="rounded-lg border border-white/10 p-3 bg-neutral-950/50">
<div className="flex items-center gap-2 mb-2">
<i className="h-4 w-4 text-neutral-300" data-lucide="filter"></i>
<span className="text-sm font-medium text-neutral-200">Category Filters</span>
</div>
<div className="flex flex-wrap gap-2">
<button className="cat-btn px-3 py-1.5 rounded-md bg-neutral-900 border border-white/10 hover:bg-neutral-800 text-sm" data-cat="Buildings">Buildings</button>
<button className="cat-btn px-3 py-1.5 rounded-md bg-neutral-900 border border-white/10 hover:bg-neutral-800 text-sm" data-cat="Transport">Transport</button>
<button className="cat-btn px-3 py-1.5 rounded-md bg-neutral-900 border border-white/10 hover:bg-neutral-800 text-sm" data-cat="Waste">Waste</button>
<button className="cat-btn px-3 py-1.5 rounded-md bg-neutral-900 border border-white/10 hover:bg-neutral-800 text-sm" data-cat="Energy Type">Energy Type</button>
</div>
</div>
</section>

<section className="tab-panel space-y-4 hidden" id="tab-scenarios">
<div className="flex items-center justify-between">
<h2 className="text-base font-semibold tracking-tight text-white">Scenario Planning</h2>
<div className="flex items-center gap-2">
<label className="flex items-center gap-2 text-sm">
<input className="sr-only" id="toggleDiffMode" type="checkbox"/>
<span className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-neutral-900 border border-white/10 cursor-pointer hover:bg-neutral-800">
<i className="h-4 w-4 text-neutral-300" data-lucide="split"></i>
                      Before/After
                    </span>
</label>
<button className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-emerald-600/20 border border-emerald-500/30 hover:bg-emerald-600/25" id="btnSaveScenario">
<i className="h-4 w-4 text-emerald-400" data-lucide="save"></i>
                    Save
                  </button>
</div>
</div>
<div className="rounded-lg border border-white/10 p-3 bg-neutral-950/50 space-y-3">
<div className="grid grid-cols-2 gap-3">
<div className="space-y-2">
<label className="text-sm text-neutral-300">Select Buildings</label>
<select className="w-full px-3 py-2 rounded-md bg-neutral-900 border border-white/10 text-sm h-28" id="scenarioBuildings" multiple="">

</select>
<div className="text-xs text-neutral-400">Tip: Hold Ctrl/Cmd to select multiple.</div>
</div>
<div className="space-y-2">
<label className="text-sm text-neutral-300">What-If Options</label>
<div className="space-y-2">
<label className="flex items-center gap-2 text-sm">
<input className="sr-only" id="optSolar" type="checkbox"/>
<span className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-neutral-900 border border-white/10 cursor-pointer hover:bg-neutral-800">
<i className="h-4 w-4 text-yellow-400" data-lucide="sun"></i>
                          Install solar panels
                        </span>
</label>
<div className="hidden grid grid-cols-2 gap-2" id="solarFields">
<input className="col-span-2 px-3 py-2 rounded-md bg-neutral-900 border border-white/10 text-sm" id="solarCapacity" min="1" placeholder="Capacity (kW)" type="number"/>
</div>
<label className="flex items-center gap-2 text-sm">
<input className="sr-only" id="optHVAC" type="checkbox"/>
<span className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-neutral-900 border border-white/10 cursor-pointer hover:bg-neutral-800">
<i className="h-4 w-4 text-sky-400" data-lucide="air-vent"></i>
                          Upgrade HVAC systems
                        </span>
</label>
<div className="hidden grid grid-cols-2 gap-2" id="hvacFields">
<input className="col-span-2 px-3 py-2 rounded-md bg-neutral-900 border border-white/10 text-sm" id="hvacEfficiency" max="50" min="1" placeholder="Efficiency %" type="number"/>
</div>
<label className="flex items-center gap-2 text-sm">
<input className="sr-only" id="optEV" type="checkbox"/>
<span className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-neutral-900 border border-white/10 cursor-pointer hover:bg-neutral-800">
<i className="h-4 w-4 text-emerald-400" data-lucide="charging-station"></i>
                          Add EV charging stations
                        </span>
</label>
<label className="flex items-center gap-2 text-sm">
<input className="sr-only" id="optTrees" type="checkbox"/>
<span className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-neutral-900 border border-white/10 cursor-pointer hover:bg-neutral-800">
<i className="h-4 w-4 text-emerald-400" data-lucide="trees"></i>
                          Plant trees (offsets)
                        </span>
</label>
<div className="hidden grid grid-cols-2 gap-2" id="treesFields">
<input className="col-span-2 px-3 py-2 rounded-md bg-neutral-900 border border-white/10 text-sm" id="treesCount" min="1" placeholder="No. of trees" type="number"/>
</div>
<label className="flex items-center gap-2 text-sm">
<input className="sr-only" id="optCycling" type="checkbox"/>
<span className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-neutral-900 border border-white/10 cursor-pointer hover:bg-neutral-800">
<i className="h-4 w-4 text-emerald-400" data-lucide="bike"></i>
                          Promote cycling
                        </span>
</label>
<div className="hidden grid grid-cols-2 gap-2" id="cyclingFields">
<input className="col-span-2 px-3 py-2 rounded-md bg-neutral-900 border border-white/10 text-sm" id="cyclingReduction" max="100" min="1" placeholder="Reduce car trips by %" type="number"/>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-md border border-white/10 p-3 bg-neutral-900/80">
<div className="text-sm text-neutral-300">Projected CO2 reduction</div>
<div className="flex items-baseline gap-2 mt-1">
<div className="text-2xl font-semibold tracking-tight" id="scenarioReductionTons">0.0</div>
<div className="text-sm text-neutral-400">tons/yr (<span id="scenarioReductionPct">0</span>%)</div>
</div>
</div>
<div className="rounded-md border border-white/10 p-3 bg-neutral-900/80">
<div className="text-sm text-neutral-300">Cost-Benefit Analysis</div>
<div className="text-xs text-neutral-400 mt-1" id="scenarioCostBenefit">Investment: ₹0, Savings: ₹0/yr, Payback: —</div>
</div>
</div>
</div>
</section>
</div>

<div className="px-4 pb-4">
<div className="rounded-lg border border-white/10 p-3 bg-neutral-950/50 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-300" data-lucide="cloud-sun"></i>
<span className="text-sm font-medium text-neutral-200">Weather Impact</span>
</div>
<span className="text-xs text-neutral-400" id="weatherUpdated">—</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-neutral-800 border border-white/10" id="weatherIcon"></div>
<div>
<div className="text-sm font-medium" id="weatherTemp">—</div>
<div className="text-xs text-neutral-400" id="weatherDesc">—</div>
</div>
</div>
<div className="text-xs text-neutral-400">
                  Est. cooling/heating load impact: <span className="text-neutral-300" id="weatherImpact">—</span>
</div>
</div>
</div>
<div className="rounded-lg border border-white/10 p-3 bg-neutral-950/50 space-y-2 mt-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-red-400" data-lucide="bell-ring"></i>
<span className="text-sm font-medium text-neutral-200">Live Alerts</span>
</div>
<span className="px-2 py-1 rounded bg-red-500/15 text-red-300 text-xs border border-red-500/30">Live</span>
</div>
<div className="space-y-2 text-sm" id="alertsList">

</div>
<div className="mt-2">
<input className="w-full accent-emerald-500" id="timelineSlider" max="23" min="0" type="range" value="14"/>
<div className="flex justify-between text-xs text-neutral-400"><span>00:00</span><span id="timelineLabel">14:00</span><span>23:00</span></div>
</div>
</div>
</div>
</div>
</aside>

<div className="absolute inset-x-0 top-16 bottom-0 z-10" id="map"></div>

<div className="absolute right-4 top-20 z-40 w-[280px] max-w-[90vw]">
<div className="rounded-xl bg-neutral-900/80 backdrop-blur border border-white/10 shadow-2xl overflow-hidden">
<div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-300" data-lucide="layers"></i>
<span className="text-sm font-medium text-neutral-200">Layers</span>
</div>
<button className="h-8 w-8 rounded-md border border-white/10 hover:bg-neutral-800 flex items-center justify-center" id="toggleLayerPanel">
<i className="h-4 w-4 text-neutral-300" data-lucide="chevrons-right"></i>
</button>
</div>
<div className="p-3 space-y-2" id="layerPanelBody">
<label className="flex items-center justify-between text-sm">
              Buildings
              <input checked="" className="accent-emerald-500" id="layerBuildings" type="checkbox"/>
</label>
<label className="flex items-center justify-between text-sm">
              Heatmap
              <input className="accent-emerald-500" id="layerHeatmap" type="checkbox"/>
</label>
<label className="flex items-center justify-between text-sm">
              Parking
              <input checked="" className="accent-emerald-500" id="layerParking" type="checkbox"/>
</label>
<label className="flex items-center justify-between text-sm">
              Bus Routes
              <input checked="" className="accent-emerald-500" id="layerBus" type="checkbox"/>
</label>
<label className="flex items-center justify-between text-sm">
              Live Pulses
              <input checked="" className="accent-emerald-500" id="layerPulses" type="checkbox"/>
</label>
<button className="w-full inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-900 border border-white/10 hover:bg-neutral-800 text-sm" id="btnNearMe">
<i className="h-4 w-4 text-neutral-300" data-lucide="locate-fixed"></i>
              Find sources near me
            </button>
</div>
</div>
</div>

<aside className="absolute right-4 bottom-4 top-24 z-40 w-[360px] max-w-[92vw] translate-x-[120%] transition-transform" id="detailsPanel">
<div className="rounded-xl bg-neutral-900/90 backdrop-blur border border-white/10 shadow-2xl h-full overflow-hidden flex flex-col">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-emerald-400" data-lucide="building-2" id="detailsIcon"></i>
<h3 className="text-base font-semibold tracking-tight text-white" id="detailsTitle">Building</h3>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-neutral-900 border border-white/10 hover:bg-neutral-800 text-xs" id="btnWatchlist">
<i className="h-4 w-4 text-yellow-400" data-lucide="star"></i>
                Watch
              </button>
<button className="h-8 w-8 rounded-md border border-white/10 hover:bg-neutral-800 flex items-center justify-center" id="btnCloseDetails">
<i className="h-4 w-4 text-neutral-300" data-lucide="x"></i>
</button>
</div>
</div>
<div className="p-4 space-y-3 overflow-y-auto">
<div className="h-36 w-full rounded-lg bg-[url('https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&amp;w=1200&amp;auto=format&amp;fit=crop')] bg-cover bg-center border border-white/10" id="detailsImage"></div>
<div className="grid grid-cols-2 gap-2">
<div className="rounded-md border border-white/10 p-2 bg-neutral-950/50">
<div className="text-xs text-neutral-400">Energy (kWh/yr)</div>
<div className="text-lg font-semibold tracking-tight" id="detailsEnergy">—</div>
</div>
<div className="rounded-md border border-white/10 p-2 bg-neutral-950/50">
<div className="text-xs text-neutral-400">CO2 (tons/yr)</div>
<div className="text-lg font-semibold tracking-tight" id="detailsCO2">—</div>
</div>
<div className="rounded-md border border-white/10 p-2 bg-neutral-950/50">
<div className="text-xs text-neutral-400">Per Capita (t/yr)</div>
<div className="text-lg font-semibold tracking-tight" id="detailsPerCapita">—</div>
</div>
<div className="rounded-md border border-white/10 p-2 bg-neutral-950/50">
<div className="text-xs text-neutral-400">Area (sq ft)</div>
<div className="text-lg font-semibold tracking-tight" id="detailsArea">—</div>
</div>
</div>
<div className="rounded-md border border-white/10 p-3 bg-neutral-950/50">
<div className="text-sm" id="detailsComparison"></div>
</div>
<div className="rounded-md border border-white/10 p-3 bg-neutral-950/50">
<div className="flex items-center justify-between mb-2">
<div className="text-sm font-medium text-neutral-200">Monthly Emissions</div>
<div className="text-xs text-neutral-400">tons</div>
</div>
<div className="relative">
<div className="h-[150px]"><canvas id="miniChart"></canvas></div>
</div>
</div>
<div className="rounded-md border border-white/10 p-3 bg-neutral-950/50">
<div className="text-sm font-medium text-neutral-200 mb-2">Recommendations</div>
<ul className="list-disc pl-5 text-sm text-neutral-300 space-y-1" id="detailsRecs">

</ul>
</div>
<div className="flex items-center gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-500 transition-colors" id="btnDetailedReport">
<i className="h-4 w-4" data-lucide="file-text"></i>
                View Detailed Report
              </button>
<button className="h-10 w-10 rounded-md border border-white/10 hover:bg-neutral-800 flex items-center justify-center">
<i className="h-5 w-5 text-neutral-300" data-lucide="share-2"></i>
</button>
</div>
</div>
</div>
</aside>


<div className="fixed inset-0 z-50 hidden" id="commuteModal">
<div className="absolute inset-0 bg-black/70"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="w-full max-w-lg rounded-xl bg-neutral-900 border border-white/10 shadow-2xl overflow-hidden">
<div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-emerald-400" data-lucide="map-pin"></i>
<span className="text-sm font-medium text-neutral-200">Log Your Commute</span>
</div>
<button className="h-8 w-8 rounded-md border border-white/10 hover:bg-neutral-800 flex items-center justify-center" id="closeCommuteModal">
<i className="h-4 w-4 text-neutral-300" data-lucide="x"></i>
</button>
</div>
<div className="p-4 space-y-3">
<div className="grid grid-cols-2 gap-3">
<div className="space-y-2">
<label className="text-sm text-neutral-300">Mode of Transport</label>
<select className="w-full px-3 py-2 rounded-md bg-neutral-950 border border-white/10 text-sm" id="commuteMode">
<option value="car">Car</option>
<option value="bike">Bike</option>
<option value="bus">Bus</option>
<option value="cycle">Cycle</option>
<option value="walk">Walk</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm text-neutral-300">Frequency</label>
<select className="w-full px-3 py-2 rounded-md bg-neutral-950 border border-white/10 text-sm" id="commuteFrequency">
<option value="daily">Daily</option>
<option value="weekly">Weekly</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-sm text-neutral-300">Distance</label>
<div className="flex items-center gap-2">
<input className="flex-1 px-3 py-2 rounded-md bg-neutral-950 border border-white/10 text-sm" id="commuteDistance" min="0" placeholder="Distance (km)" step="0.1" type="number"/>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-900 border border-white/10 hover:bg-neutral-800 text-sm" id="btnPickOnMap">
<i className="h-4 w-4 text-neutral-300" data-lucide="mouse-pointer-click"></i>
                    Pick on map
                  </button>
</div>
<div className="text-xs text-neutral-400">Click start and end points on the map to auto-calculate distance.</div>
</div>
<div className="rounded-md border border-white/10 p-3 bg-neutral-950/50">
<div className="text-xs text-neutral-400 mb-1">Estimated Emissions</div>
<div className="flex items-baseline gap-2">
<div className="text-xl font-semibold tracking-tight" id="commuteEst">0.0</div>
<div className="text-sm text-neutral-400">kg CO2 per chosen period</div>
</div>
</div>
<div className="flex items-center justify-end gap-2 pt-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-500" id="btnSaveCommute">
<i className="h-4 w-4" data-lucide="check"></i>
                  Save
                </button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="helpOverlay">
<div className="absolute inset-0 bg-black/70"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="w-full max-w-3xl rounded-xl bg-neutral-900 border border-white/10 shadow-2xl overflow-hidden">
<div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-emerald-400" data-lucide="graduation-cap"></i>
<span className="text-sm font-medium text-neutral-200">Quick Tour</span>
</div>
<button className="h-8 w-8 rounded-md border border-white/10 hover:bg-neutral-800 flex items-center justify-center" id="closeHelpOverlay">
<i className="h-4 w-4 text-neutral-300" data-lucide="x"></i>
</button>
</div>
<div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="rounded-md border border-white/10 p-3 bg-neutral-950/50">
<h4 className="text-sm font-medium text-neutral-200 mb-1">1. Explore the campus</h4>
<p className="text-sm text-neutral-400">Use the map to zoom and pan. Click buildings to view details and recommendations.</p>
</div>
<div className="rounded-md border border-white/10 p-3 bg-neutral-950/50">
<h4 className="text-sm font-medium text-neutral-200 mb-1">2. Visualize emissions</h4>
<p className="text-sm text-neutral-400">Toggle markers and heatmap in Layers. High emitters pulse in real-time simulation.</p>
</div>
<div className="rounded-md border border-white/10 p-3 bg-neutral-950/50">
<h4 className="text-sm font-medium text-neutral-200 mb-1">3. Track commutes</h4>
<p className="text-sm text-neutral-400">Log personal commutes to see your footprint and join the leaderboard.</p>
</div>
<div className="rounded-md border border-white/10 p-3 bg-neutral-950/50">
<h4 className="text-sm font-medium text-neutral-200 mb-1">4. Model scenarios</h4>
<p className="text-sm text-neutral-400">Test interventions like solar, HVAC upgrades, and cycling initiatives. Save and share scenarios.</p>
</div>
</div>
<div className="px-4 py-3 border-t border-white/10 flexitems-center justify-end gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-900 border border-white/10 hover:bg-neutral-800 text-sm" id="btnHelpDocs">
<i className="h-4 w-4 text-neutral-300" data-lucide="book-open"></i>
                Docs
              </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-500 text-sm" id="btnStartExploring">
<i className="h-4 w-4" data-lucide="check-circle-2"></i>
                Got it
              </button>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] hidden" id="toast">
<div className="rounded-md bg-neutral-900/90 backdrop-blur border border-white/10 px-3 py-2 text-sm text-neutral-100 shadow-lg flex items-center gap-2">
<i className="h-4 w-4 text-emerald-400" data-lucide="check-circle"></i>
<span id="toastMsg">Saved</span>
</div>
</div>
</main>
</div>



    </>
  );
}
