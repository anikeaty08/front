import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icon initialization with uniform stroke
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { width: 20, height: 20, stroke: 'currentColor', 'stroke-width': 1.5 } });
      });

      // Map setup
      const map = new maplibregl.Map({
        container: 'map',
        style: {
          version: 8,
          glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
          sources: {
            osm: {
              type: 'raster',
              tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png','https://b.tile.openstreetmap.org/{z}/{x}/{y}.png','https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'],
              tileSize: 256,
              attribution: '© OpenStreetMap'
            }
          },
          layers: [
            { id: 'osm', type: 'raster', source: 'osm' }
          ]
        },
        center: [-118.263, 33.75], // LA/LB port area
        zoom: 10.5,
        pitch: 0,
        attributionControl: false
      });

      map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'bottom-right');

      // Data model
      const STATUS_COLORS = {
        enroute: '#2dd4bf', // teal
        atgate: '#22c55e',  // green
        idle: '#94a3b8',    // gray
        exception: '#f43f5e'// red
      };

      const GROUPS = [
        { id: 'ABC', name: 'ABC Lines', trucks: 28 },
        { id: 'BFR', name: 'Beta Freight', trucks: 16 },
        { id: 'COB', name: 'Cobalt Logistics', trucks: 11 },
        { id: 'DLT', name: 'Delta Transport', trucks: 36 },
        { id: 'ECH', name: 'Echo Carriers', trucks: 9 }
      ];

      const groupState = new Map(GROUPS.map(g => [g.id, { visible: true, selected: false }]));
      let selectedGroupId = null;
      let selectedTruckId = null;

      // Utility randomizers near a base
      function rand(min, max) { return Math.random() * (max - min) + min; }
      function choice(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
      function jitter(base, amt) { return base + rand(-amt, amt); }
      function bearingToCardinal(bearing) {
        const dirs = ['N','NE','E','SE','S','SW','W','NW'];
        return dirs[Math.floor(((bearing % 360)+360)%360 / 45)];
      }

      // Generate synthetic tracks for last 24h (60 steps)
      const STEPS = 60; // 24h / step ~ 24 min
      const STEP_MIN = 24;
      const BASE_CENTER = { lon: -118.263, lat: 33.75 };

      function generateTrack(startLon, startLat) {
        const pts = [];
        let lon = startLon, lat = startLat;
        let bearing = rand(0, 360);
        let speedKmh = rand(0, 55);
        for (let i = 0; i < STEPS; i++) {
          // random walk with occasional pauses
          if (Math.random() < 0.12) speedKmh = Math.max(0, Math.min(65, speedKmh + rand(-12, 12)));
          if (Math.random() < 0.1) bearing = (bearing + rand(-45, 45)) % 360;
          // meters per minute
          const mpm = speedKmh * 1000 / 60;
          // delta degrees approx
          const dLat = (mpm * Math.cos(bearing * Math.PI/180)) / 111320;
          const dLon = (mpm * Math.sin(bearing * Math.PI/180)) / (111320 * Math.cos(lat * Math.PI/180));
          lat = lat + dLat * 0.024; // scale down movement for map realism
          lon = lon + dLon * 0.024;

          // keep within a bounding box around port
          lat = Math.max(33.65, Math.min(33.85, lat));
          lon = Math.max(-118.4, Math.min(-118.15, lon));

          pts.push({
            timeMin: i * STEP_MIN,
            coord: [lon, lat],
            speed: Math.max(0, speedKmh + rand(-3, 3)),
            bearing: (bearing + 360) % 360
          });
        }
        return pts;
      }

      function synthDriver() {
        const first = ['Alex','Jordan','Sam','Taylor','Chris','Morgan','Riley','Cameron','Jamie','Casey'];
        const last = ['Lee','Nguyen','Garcia','Patel','Kim','Singh','Hernandez','Chen','Brown','Lopez'];
        return `${choice(first)} ${choice(last)}`;
      }
      function synthPlate() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = () => Math.floor(Math.random()*10);
        return `${letters[Math.floor(Math.random()*26)]}${letters[Math.floor(Math.random()*26)]}-${nums()}${nums()}${nums()}${letters[Math.floor(Math.random()*26)]}`;
      }

      // Build trucks
      let allTrucks = [];
      let truckIdCounter = 1000;
      GROUPS.forEach(g => {
        for (let i = 0; i < g.trucks; i++) {
          const lon = jitter(BASE_CENTER.lon, 0.06);
          const lat = jitter(BASE_CENTER.lat, 0.06);
          const track = generateTrack(lon, lat);
          const nowPoint = track[track.length - 1];
          const speed = nowPoint.speed;
          let status = 'enroute';
          if (speed < 1.5) status = Math.random() < 0.7 ? 'idle' : 'atgate';
          if (Math.random() < 0.05) status = 'exception';
          const etaMin = Math.floor(rand(10, 90));
          allTrucks.push({
            id: `T${truckIdCounter++}`,
            group: g.id,
            groupName: g.name,
            plate: synthPlate(),
            driver: synthDriver(),
            phone: '+1 (555) ' + Math.floor(1000000 + Math.random()*8999999).toString().replace(/(\d{3})(\d{4})/,'$1-$2'),
            status,
            eta: `${etaMin} min ±${Math.floor(rand(5,15))}`,
            lastSeenMin: Math.floor(rand(1, 12)),
            speed: speed.toFixed(1),
            heading: nowPoint.bearing,
            track
          });
        }
      });

      // Aggregates to KPIs
      function updateKPIs() {
        const visible = getVisibleTrucks();
        const moving = visible.filter(t => Number(t.speed) > 1.5).length;
        const exc = visible.filter(t => t.status === 'exception').length;
        const ontime = Math.max(78, 96 - Math.floor((exc / Math.max(1, visible.length)) * 100) + Math.floor(Math.random()*3));
        const avgEta = Math.floor(visible.reduce((s,t)=> s + parseInt(t.eta), 0) / Math.max(1, visible.length));
        document.getElementById('kpi-moving').textContent = moving;
        document.getElementById('kpi-exc').textContent = exc;
        document.getElementById('kpi-ontime').textContent = ontime + '%';
        document.getElementById('kpi-avg-eta').textContent = isFinite(avgEta) ? `${avgEta} min` : '—';
      }

      // Group UI build
      const groupListEl = document.getElementById('group-list');
      function renderGroupRow(g) {
        const excCount = getGroupTrucks(g.id).filter(t => t.status === 'exception').length;
        const el = document.createElement('div');
        el.className = 'group-row flex items-center gap-2 p-2 rounded-md ring-1 ring-slate-800 bg-slate-900/40 hover:ring-slate-700 cursor-pointer transition';
        el.dataset.groupId = g.id;
        el.innerHTML = `
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2">
              <div class="text-sm font-medium tracking-tight text-slate-100 truncate">${g.name}</div>
              ${excCount>0 ? `<span class="ml-auto inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full bg-rose-500/15 text-rose-300 ring-1 ring-rose-500/20"><i data-lucide="alert-triangle" class="h-3 w-3"></i>${excCount}</span>` : ''}
            </div>
            <div class="flex items-center justify-between mt-1">
              <div class="text-xs text-slate-400">${getGroupTrucks(g.id).length} trucks</div>
              <div class="h-6 w-24">
                ${sparklineSvg()}
              </div>
            </div>
          </div>
          <label class="ml-2 relative inline-flex items-center cursor-pointer select-none">
            <input type="checkbox" ${groupState.get(g.id).visible ? 'checked' : ''} class="sr-only peer">
            <div class="peer h-5 w-9 rounded-full bg-slate-800 ring-1 ring-slate-700 peer-checked:bg-cyan-600 transition"></div>
            <div class="pointer-events-none absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white/90 translate-x-0 peer-checked:translate-x-4 transition"></div>
          </label>
        `;
        groupListEl.appendChild(el);
        lucide.createIcons({ attrs: { width: 16, height: 16, 'stroke-width': 1.5 } , nameAttr: 'data-lucide' });
      }

      function sparklineSvg() {
        // tiny inline SVG sparkline
        const values = Array.from({length: 20}, () => Math.random());
        const max = Math.max(...values), min = Math.min(...values);
        const pts = values.map((v,i) => {
          const x = (i/(values.length-1))*96;
          const y = 18 - ((v - min)/(max-min || 1))*18;
          return `${x.toFixed(1)},${y.toFixed(1)}`;
        }).join(' ');
        return `<svg viewBox="0 0 96 18" class="w-full h-full"><polyline points="${pts}" fill="none" stroke="url(#g)" stroke-width="1.5" stroke-linecap="round"/><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#22d3ee"/><stop offset="1" stop-color="#60a5fa"/></linearGradient></defs></svg>`;
      }

      function buildGroupsUI() {
        groupListEl.innerHTML = '';
        GROUPS.forEach(g => renderGroupRow(g));
      }

      function getGroupTrucks(groupId) {
        return allTrucks.filter(t => t.group === groupId);
      }
      function getVisibleTrucks() {
        const visibleIds = new Set([...groupState.entries()].filter(([id, st])=> st.visible).map(([id])=> id));
        return allTrucks.filter(t => visibleIds.has(t.group));
      }

      // Map layers and sources
      function trucksToGeoJSON(trucks, timeMin = null) {
        return {
          type: 'FeatureCollection',
          features: trucks.map(t => {
            let coord = t.track[t.track.length - 1].coord;
            let speed = t.track[t.track.length - 1].speed;
            let bearing = t.track[t.track.length - 1].bearing;
            if (timeMin !== null) {
              const idx = Math.max(0, Math.min(t.track.length - 1, Math.floor(timeMin / STEP_MIN)));
              coord = t.track[idx].coord;
              speed = t.track[idx].speed;
              bearing = t.track[idx].bearing;
            }
            return {
              type: 'Feature',
              geometry: { type: 'Point', coordinates: coord },
              properties: {
                id: t.id,
                group: t.group,
                groupName: t.groupName,
                plate: t.plate,
                driver: t.driver,
                phone: t.phone,
                status: t.status,
                eta: t.eta,
                lastSeenMin: t.lastSeenMin,
                speed,
                bearing
              }
            };
          })
        };
      }

      function routesToGeoJSON(trucks, timeMin = null) {
        const features = trucks.map(t => {
          let uptoIdx = t.track.length - 1;
          if (timeMin !== null) {
            uptoIdx = Math.max(1, Math.floor(timeMin / STEP_MIN));
          } else {
            // last 60 min trail
            uptoIdx = t.track.length - 1;
          }
          const coords = t.track.slice(Math.max(0, uptoIdx - 6), uptoIdx + 1).map(p => p.coord);
          return {
            type: 'Feature',
            geometry: { type: 'LineString', coordinates: coords },
            properties: { id: t.id, group: t.group }
          };
        });
        return { type: 'FeatureCollection', features };
      }

      let mode = 'pins'; // or 'heat'
      let isPlaying = false;
      let currentTimeMin = 1440; // live at end
      let playbackSpeed = 1; // 1x
      const timeSlider = document.getElementById('time-slider');
      const sliderLabel = document.getElementById('slider-label');
      const sliderProgress = document.getElementById('slider-progress');

      function setSliderLabel(val) {
        sliderLabel.textContent = (val >= 1440) ? 'Live' : `${Math.max(0, 1440 - val)} min ago`;
      }
      function setSliderProgress(val) {
        const pct = Math.min(100, (val / 1440) * 100);
        sliderProgress.style.width = `${pct}%`;
      }

      map.on('load', () => {
        map.addSource('trucks', {
          type: 'geojson',
          data: trucksToGeoJSON(getVisibleTrucks(), currentTimeMin >= 1440 ? null : currentTimeMin),
          cluster: true,
          clusterMaxZoom: 14,
          clusterRadius: 50
        });

        // Heatmap source uses same
        // Routes source
        map.addSource('routes', {
          type: 'geojson',
          data: routesToGeoJSON(getVisibleTrucks(), currentTimeMin >= 1440 ? null : currentTimeMin),
        });

        // Cluster circles
        map.addLayer({
          id: 'clusters',
          type: 'circle',
          source: 'trucks',
          filter: ['has', 'point_count'],
          paint: {
            'circle-color': '#334155',
            'circle-stroke-width': 1,
            'circle-stroke-color': '#0f172a',
            'circle-radius': ['step', ['get', 'point_count'], 14, 12, 18, 28, 24, 50, 30]
          }
        });

        map.addLayer({
          id: 'cluster-count',
          type: 'symbol',
          source: 'trucks',
          filter: ['has', 'point_count'],
          layout: {
            'text-field': ['get', 'point_count_abbreviated'],
            'text-size': 12
          },
          paint: {
            'text-color': '#e2e8f0'
          }
        });

        // Unclustered pins
        map.addLayer({
          id: 'unclustered-point',
          type: 'circle',
          source: 'trucks',
          filter: ['!', ['has', 'point_count']],
          paint: {
            'circle-color': [
              'match',
              ['get','status'],
              'enroute', STATUS_COLORS.enroute,
              'atgate', STATUS_COLORS.atgate,
              'idle', STATUS_COLORS.idle,
              'exception', STATUS_COLORS.exception,
              '#94a3b8'
            ],
            'circle-radius': 6,
            'circle-stroke-width': 1.5,
            'circle-stroke-color': '#0b1220'
          }
        });

        // Selected halo
        map.addLayer({
          id: 'selected-point',
          type: 'circle',
          source: 'trucks',
          filter: ['all', ['!', ['has', 'point_count']], ['==', ['get','id'], '___']],
          paint: {
            'circle-color': 'transparent',
            'circle-radius': 12,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#22d3ee'
          }
        });

        // Heatmap
        map.addLayer({
          id: 'heatmap',
          type: 'heatmap',
          source: 'trucks',
          maxzoom: 15,
          paint: {
            'heatmap-weight': 0.8,
            'heatmap-intensity': 1.2,
            'heatmap-color': [
              'interpolate',
              ['linear'],
              ['heatmap-density'],
              0,'rgba(34,211,238,0)',
              0.2,'rgba(34,211,238,0.35)',
              0.4,'rgba(59,130,246,0.5)',
              0.6,'rgba(168,85,247,0.6)',
              0.8,'rgba(244,63,94,0.7)',
              1,'rgba(244,63,94,0.85)'
            ],
            'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 8, 14, 13, 28],
            'heatmap-opacity': 0.85
          },
          layout: { visibility: 'none' }
        });

        // Thin routes
        map.addLayer({
          id: 'routes-line',
          type: 'line',
          source: 'routes',
          paint: {
            'line-color': '#5eead4',
            'line-width': 1.2,
            'line-opacity': 0.45
          },
          layout: { visibility: 'none' }
        });

        // Map interactions
        map.on('click', 'clusters', (e) => {
          const features = map.queryRenderedFeatures(e.point, { layers: ['clusters'] });
          const clusterId = features[0].properties.cluster_id;
          const source = map.getSource('trucks');
          source.getClusterExpansionZoom(clusterId, (err, zoom) => {
            if (err) return;
            map.easeTo({ center: features[0].geometry.coordinates, zoom });
          });
        });

        map.on('click', 'unclustered-point', (e) => {
          const f = e.features[0];
          openDrawerForFeature(f);
        });

        map.on('mouseenter', 'unclustered-point', () => map.getCanvas().style.cursor = 'pointer');
        map.on('mouseleave', 'unclustered-point', () => map.getCanvas().style.cursor = '');

        // Initial UI build
        buildGroupsUI();
        wireGroupEvents();
        updateKPIs();

        // Render initial icons again (dynamic nodes)
        lucide.createIcons({ attrs: { width: 20, height: 20, 'stroke-width': 1.5 } });

        // Periodic live jitter update when Live
        setInterval(() => {
          if (currentTimeMin >= 1440 && mode === 'pins') {
            // simulate small live drift: rotate last track point
            allTrucks.forEach(t => {
              const last = t.track[t.track.length - 1];
              const speed = Math.max(0, Number(t.speed) + rand(-2, 2));
              const bearing = (Number(t.heading) + rand(-10, 10)) % 360;
              const mpm = speed * 1000 / 60;
              const dLat = (mpm * Math.cos(bearing * Math.PI/180)) / 111320;
              const dLon = (mpm * Math.sin(bearing * Math.PI/180)) / (111320 * Math.cos(last.coord[1] * Math.PI/180));
              const lat = Math.max(33.65, Math.min(33.85, last.coord[1] + dLat * 0.012));
              const lon = Math.max(-118.4, Math.min(-118.15, last.coord[0] + dLon * 0.012));
              last.coord = [lon, lat];
              t.speed = speed.toFixed(1);
              t.heading = bearing;
            });
            refreshSources();
          }
        }, 3000);
      });

      function refreshSources() {
        const src = map.getSource('trucks');
        if (!src) return;
        src.setData(trucksToGeoJSON(getVisibleTrucks(), currentTimeMin >= 1440 ? null : currentTimeMin));
        const routes = map.getSource('routes');
        routes.setData(routesToGeoJSON(getVisibleTrucks(), currentTimeMin >= 1440 ? null : currentTimeMin));
        updateKPIs();
      }

      function wireGroupEvents() {
        // Toggle
        groupListEl.querySelectorAll('label input[type="checkbox"]').forEach(input => {
          input.addEventListener('change', (e) => {
            const row = e.target.closest('.group-row');
            const gid = row.dataset.groupId;
            groupState.get(gid).visible = e.target.checked;
            // Reset selection if hidden
            if (!e.target.checked && selectedGroupId === gid) {
              selectedGroupId = null;
              document.getElementById('group-summary').classList.add('hidden');
              // also unselect map highlight
            }
            rebuildSourceFromVisibility();
          });
        });
        // Select for summary
        groupListEl.querySelectorAll('.group-row').forEach(row => {
          row.addEventListener('click', (e) => {
            if (e.target.tagName.toLowerCase() === 'input') return;
            const gid = row.dataset.groupId;
            selectedGroupId = gid;
            showGroupSummary(gid);
          });
        });
      }

      function rebuildSourceFromVisibility() {
        refreshSources();
      }

      function showGroupSummary(gid) {
        const el = document.getElementById('group-summary');
        el.classList.remove('hidden');
        const g = GROUPS.find(x => x.id === gid);
        document.getElementById('summary-title').textContent = g.name;
        const trucks = getGroupTrucks(gid).filter(t => groupState.get(gid).visible);
        document.getElementById('summary-total').textContent = trucks.length;
        const mv = trucks.filter(t => Number(t.speed) > 1.5).length;
        document.getElementById('summary-moving').textContent = `${mv} / ${trucks.length - mv}`;
        const avgEta = Math.floor(trucks.reduce((s,t)=> s + parseInt(t.eta), 0) / Math.max(1, trucks.length));
        document.getElementById('summary-eta').textContent = isFinite(avgEta) ? `${avgEta} min` : '—';
        const exc = trucks.filter(t => t.status === 'exception').length;
        document.getElementById('summary-exc').textContent = exc;

        document.getElementById('clear-selection').onclick = () => {
          selectedGroupId = null;
          el.classList.add('hidden');
        };
      }

      // Drawer interactions
      function openDrawerForFeature(f) {
        selectedTruckId = f.properties.id;
        // set selected halo filter
        map.setFilter('selected-point', ['all', ['!', ['has','point_count']], ['==', ['get','id'], selectedTruckId]]);

        document.getElementById('d-truck-id').textContent = f.properties.id;
        document.getElementById('drawer-title').textContent = `${f.properties.id} — ${f.properties.groupName}`;
        document.getElementById('d-plate').textContent = f.properties.plate;
        document.getElementById('d-driver').textContent = f.properties.driver;
        document.getElementById('d-call').href = `tel:${f.properties.phone.replace(/[^\d+]/g,'')}`;
        // Status badge color
        const st = f.properties.status;
        const color = STATUS_COLORS[st] || '#94a3b8';
        document.getElementById('d-status').innerHTML = `<span class="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ring-1" style="color:${color};border-color:${color}"><span class="h-1.5 w-1.5 rounded-full" style="background:${color}"></span>${st.replace('atgate','at-gate')}</span>`;
        document.getElementById('d-eta').textContent = f.properties.eta;
        document.getElementById('d-last-seen').textContent = `${f.properties.lastSeenMin} min ago`;
        document.getElementById('d-speed').textContent = `${Number(f.properties.speed).toFixed(1)} mph`;
        document.getElementById('d-heading').textContent = `${Math.round(Number(f.properties.bearing))}° ${bearingToCardinal(Number(f.properties.bearing))}`;
        // simple timeline mock
        const now = new Date();
        const t1 = new Date(now.getTime() - 90*60000), t2 = new Date(now.getTime() - 60*60000), t3 = new Date(now.getTime() - 15*60000);
        const fmt = (d) => d.toTimeString().slice(0,5);
        document.getElementById('tl1').textContent = fmt(t1);
        document.getElementById('tl2').textContent = fmt(t2);
        document.getElementById('tl3').textContent = fmt(t3);

        const drawer = document.getElementById('drawer');
        drawer.classList.remove('translate-x-full');

        // Center map on clicked point
        map.easeTo({ center: f.geometry.coordinates, zoom: Math.max(map.getZoom(), 12) });
      }

      document.getElementById('drawer-close').addEventListener('click', () => {
        document.getElementById('drawer').classList.add('translate-x-full');
        selectedTruckId = null;
        if (map.getLayer('selected-point')) {
          map.setFilter('selected-point', ['all', ['!', ['has','point_count']], ['==', ['get','id'], '___']]);
        }
      });

      // Mode toggles
      const btnPins = document.getElementById('mode-pins');
      const btnHeat = document.getElementById('mode-heat');
      function setMode(newMode) {
        mode = newMode;
        if (!map.getLayer('unclustered-point')) return;
        map.setLayoutProperty('unclustered-point', 'visibility', mode === 'pins' ? 'visible' : 'none');
        map.setLayoutProperty('clusters', 'visibility', mode === 'pins' ? 'visible' : 'none');
        map.setLayoutProperty('cluster-count', 'visibility', mode === 'pins' ? 'visible' : 'none');
        map.setLayoutProperty('heatmap', 'visibility', mode === 'heat' ? 'visible' : 'none');
        map.setLayoutProperty('routes-line', 'visibility', (mode === 'pins' && currentTimeMin < 1440) ? 'visible' : 'none');

        btnPins.classList.toggle('text-slate-200', mode === 'pins');
        btnPins.classList.toggle('text-slate-400', mode !== 'pins');
        btnHeat.classList.toggle('text-slate-200', mode === 'heat');
        btnHeat.classList.toggle('text-slate-400', mode !== 'heat');
        refreshSources();
      }
      btnPins.addEventListener('click', () => setMode('pins'));
      btnHeat.addEventListener('click', () => setMode('heat'));

      // Time slider
      timeSlider.addEventListener('input', (e) => {
        const val = Number(e.target.value);
        currentTimeMin = val;
        isPlaying = false;
        document.querySelector('#play-toggle i').setAttribute('data-lucide', 'play');
        lucide.createIcons({ attrs: { width: 20, height: 20, 'stroke-width': 1.5 } });
        setSliderLabel(val);
        setSliderProgress(val);
        map.setLayoutProperty('routes-line', 'visibility', (mode === 'pins' && currentTimeMin < 1440) ? 'visible' : 'none');
        refreshSources();
      });

      document.getElementById('jump-live').addEventListener('click', () => {
        currentTimeMin = 1440;
        timeSlider.value = 1440;
        setSliderLabel(1440);
        setSliderProgress(1440);
        map.setLayoutProperty('routes-line', 'visibility', 'none');
        refreshSources();
      });

      document.getElementById('play-toggle').addEventListener('click', () => {
        isPlaying = !isPlaying;
        document.querySelector('#play-toggle i').setAttribute('data-lucide', isPlaying ? 'pause' : 'play');
        lucide.createIcons({ attrs: { width: 20, height: 20, 'stroke-width': 1.5 } });
        if (isPlaying && currentTimeMin >= 1440) {
          currentTimeMin = 0;
          timeSlider.value = 0;
        }
        if (isPlaying) requestAnimationFrame(tickPlayback);
      });

      function tickPlayback(ts) {
        if (!isPlaying) return;
        currentTimeMin += 6 * playbackSpeed; // ~6 mins per frame chunk
        if (currentTimeMin >= 1440) {
          currentTimeMin = 1440;
          isPlaying = false;
          document.querySelector('#play-toggle i').setAttribute('data-lucide', 'play');
          lucide.createIcons({ attrs: { width: 20, height: 20, 'stroke-width': 1.5 } });
        }
        timeSlider.value = currentTimeMin;
        setSliderLabel(currentTimeMin);
        setSliderProgress(currentTimeMin);
        map.setLayoutProperty('routes-line', 'visibility', (mode === 'pins' && currentTimeMin < 1440) ? 'visible' : 'none');
        refreshSources();
        if (isPlaying) requestAnimationFrame(tickPlayback);
      }

      // Basemap style switch (simple dark/light color filters)
      document.getElementById('basemap-select').addEventListener('change', (e) => {
        const choice = e.target.value;
        const layer = map.getStyle().layers.find(l => l.id === 'osm');
        if (!layer) return;
        // We simulate dark/light via a hue-rotate filter overlay: not supported in raster.
        // As a workaround, adjust map background color feel with a translucent overlay
        setBasemapTone(choice);
      });

      let toneOverlay;
      function setBasemapTone(mode) {
        // Remove previous overlay
        if (toneOverlay) toneOverlay.remove();
        toneOverlay = document.createElement('div');
        toneOverlay.className = 'pointer-events-none absolute inset-0 z-10';
        if (mode === 'Dark') {
          toneOverlay.style.background = 'linear-gradient(rgba(2,6,23,0.0), rgba(2,6,23,0.0))';
        } else if (mode === 'Light') {
          toneOverlay.style.background = 'rgba(255,255,255,0.03)';
        } else {
          toneOverlay.style.background = 'rgba(30,58,138,0.06)';
        }
        document.getElementById('map').appendChild(toneOverlay);
      }

      // Geolocate
      document.getElementById('btn-geolocate').addEventListener('click', () => {
        if (!navigator.geolocation) return;
        navigator.geolocation.getCurrentPosition(pos => {
          const { latitude, longitude } = pos.coords;
          map.easeTo({ center: [longitude, latitude], zoom: 12.5 });
          const el = document.createElement('div');
          el.className = 'h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/30';
          new maplibregl.Marker({ element: el }).setLngLat([longitude, latitude]).addTo(map);
          setTimeout(()=> el.remove(), 5000);
        });
      });

      // Left panel collapse
      document.getElementById('collapse-left').addEventListener('click', () => {
        document.getElementById('left-panel').classList.add('hidden');
        document.getElementById('open-left').classList.remove('hidden');
      });
      document.getElementById('open-left').addEventListener('click', () => {
        document.getElementById('left-panel').classList.remove('hidden');
        document.getElementById('open-left').classList.add('hidden');
      });

      // Group search filter
      document.getElementById('group-search').addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase();
        groupListEl.querySelectorAll('.group-row').forEach(row => {
          const name = row.querySelector('.text-sm.font-medium').textContent.toLowerCase();
          row.style.display = name.includes(q) ? '' : 'none';
        });
      });

      // Initial basemap tone
      setBasemapTone('Dark');

      // Ensure groups UI is interactive after dynamic render
      const observer = new MutationObserver(() => {
        wireGroupEvents();
      });
      observer.observe(groupListEl, { childList: true, subtree: true });

      // Initial source build based on visibility
      function init() {
        rebuildSourceFromVisibility();
      }
      init();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="h-screen w-screen flex flex-col">

<header className="flex items-center justify-between px-4 lg:px-6 py-3 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md">
<div className="flex items-center gap-3">
<div className="h-8 w-8 flex items-center justify-center rounded-md bg-slate-900 ring-1 ring-slate-800 text-slate-200 tracking-tight text-base font-semibold">LT</div>
<div className="hidden md:flex items-center gap-2 text-slate-400 text-sm">
<span className="px-2 py-1 rounded-md bg-slate-900/70 ring-1 ring-slate-800 hover:ring-slate-700 transition">Ops</span>
<span className="px-2 py-1 rounded-md bg-slate-900/70 ring-1 ring-slate-800 hover:ring-slate-700 transition">Live</span>
<span className="px-2 py-1 rounded-md bg-slate-900/70 ring-1 ring-slate-800 hover:ring-slate-700 transition">Exceptions</span>
</div>
</div>

<div className="flex items-center gap-2 sm:gap-3 w-full justify-end">
<div className="hidden sm:flex items-center gap-2">
<div className="flex items-center gap-2 rounded-md ring-1 ring-slate-800 bg-slate-900/60 px-2.5 py-1.5 hover:ring-slate-700 transition">
<i className="h-4 w-4 text-cyan-300" data-lucide="package"></i>
<div className="flex flex-col">
<span className="text-[11px] text-slate-400">Today’s volume</span>
<span className="text-sm font-medium tracking-tight text-slate-100">1,284</span>
</div>
</div>
<div className="flex items-center gap-2 rounded-md ring-1 ring-slate-800 bg-slate-900/60 px-2.5 py-1.5 hover:ring-slate-700 transition">
<i className="h-4 w-4 text-teal-300" data-lucide="truck"></i>
<div className="flex flex-col">
<span className="text-[11px] text-slate-400">Trucks moving</span>
<span className="text-sm font-medium tracking-tight text-slate-100" id="kpi-moving">—</span>
</div>
</div>
<div className="flex items-center gap-2 rounded-md ring-1 ring-slate-800 bg-slate-900/60 px-2.5 py-1.5 hover:ring-slate-700 transition">
<i className="h-4 w-4 text-indigo-300" data-lucide="clock"></i>
<div className="flex flex-col">
<span className="text-[11px] text-slate-400">Avg ETA</span>
<span className="text-sm font-medium tracking-tight text-slate-100" id="kpi-avg-eta">—</span>
</div>
</div>
<div className="flex items-center gap-2 rounded-md ring-1 ring-slate-800 bg-slate-900/60 px-2.5 py-1.5 hover:ring-slate-700 transition">
<i className="h-4 w-4 text-rose-300" data-lucide="alert-triangle"></i>
<div className="flex flex-col">
<span className="text-[11px] text-slate-400">Exceptions</span>
<span className="text-sm font-medium tracking-tight text-slate-100" id="kpi-exc">—</span>
</div>
</div>
<div className="flex items-center gap-2 rounded-md ring-1 ring-slate-800 bg-slate-900/60 px-2.5 py-1.5 hover:ring-slate-700 transition">
<i className="h-4 w-4 text-emerald-300" data-lucide="check-circle-2"></i>
<div className="flex flex-col">
<span className="text-[11px] text-slate-400">% On-time</span>
<span className="text-sm font-medium tracking-tight text-slate-100" id="kpi-ontime">—</span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="hidden sm:flex items-center gap-2 rounded-md ring-1 ring-slate-800 bg-slate-900/60 px-2.5 py-1.5 hover:ring-slate-700 transition" id="btn-geolocate">
<i className="h-4 w-4 text-slate-300" data-lucide="crosshair"></i>
<span className="text-sm text-slate-300">Locate</span>
</button>
<button className="flex items-center gap-2 rounded-md ring-1 ring-slate-800 bg-slate-900/60 px-2.5 py-1.5 hover:ring-slate-700 transition" id="btn-theme">
<i className="h-4 w-4 text-slate-300" data-lucide="moon"></i>
</button>
</div>
</div>
</header>

<div className="flex-1 min-h-0 flex">

<aside className="hidden md:flex w-[320px] shrink-0 flex-col border-r border-slate-800/80 bg-slate-950/70 backdrop-blur" id="left-panel">
<div className="px-3 py-3 border-b border-slate-800/80">
<div className="flex items-center justify-between">
<h2 className="text-base font-semibold tracking-tight text-slate-100">Groups</h2>
<div className="flex items-center gap-1.5">
<button className="p-1.5 rounded-md ring-1 ring-slate-800 bg-slate-900/60 hover:ring-slate-700 transition" id="collapse-left" title="Collapse">
<i className="h-4 w-4 text-slate-300" data-lucide="chevron-left"></i>
</button>
</div>
</div>
<div className="mt-2 relative">
<i className="absolute left-2 top-2.5 h-4 w-4 text-slate-500" data-lucide="search"></i>
<input className="w-full pl-8 pr-3 py-2 rounded-md bg-slate-900/60 ring-1 ring-slate-800 placeholder:text-slate-500 text-sm focus:outline-none focus:ring-slate-700" id="group-search" placeholder="Search groups..."/>
</div>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-2" id="group-list">

</div>

<div className="m-3 mt-auto hidden rounded-lg ring-1 ring-slate-800 bg-slate-900/60 p-3" id="group-summary">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-300" data-lucide="layers"></i>
<h3 className="text-sm font-medium tracking-tight text-slate-100" id="summary-title">Group</h3>
</div>
<button className="text-xs text-slate-400 hover:text-slate-200 transition" id="clear-selection">Clear</button>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="rounded-md ring-1 ring-slate-800 bg-slate-950/50 p-2">
<div className="text-[11px] text-slate-400">Total trucks</div>
<div className="text-sm font-medium tracking-tight" id="summary-total">—</div>
</div>
<div className="rounded-md ring-1 ring-slate-800 bg-slate-950/50 p-2">
<div className="text-[11px] text-slate-400">Moving vs stopped</div>
<div className="text-sm font-medium tracking-tight" id="summary-moving">—</div>
</div>
<div className="rounded-md ring-1 ring-slate-800 bg-slate-950/50 p-2">
<div className="text-[11px] text-slate-400">Avg ETA</div>
<div className="text-sm font-medium tracking-tight" id="summary-eta">—</div>
</div>
<div className="rounded-md ring-1 ring-slate-800 bg-slate-950/50 p-2">
<div className="text-[11px] text-slate-400">Exceptions</div>
<div className="text-sm font-medium tracking-tight" id="summary-exc">—</div>
</div>
</div>
<div className="mt-2 flex items-center gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md ring-1 ring-slate-800 bg-slate-950/60 px-2 py-1.5 text-xs text-slate-300 hover:ring-slate-700 hover:text-slate-100 transition">
<i className="h-3.5 w-3.5" data-lucide="bell-ring"></i> Bulk Ping
              </button>
<button className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md ring-1 ring-slate-800 bg-slate-950/60 px-2 py-1.5 text-xs text-slate-300 hover:ring-slate-700 hover:text-slate-100 transition">
<i className="h-3.5 w-3.5" data-lucide="file-down"></i> Export CSV
              </button>
<button className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md ring-1 ring-slate-800 bg-slate-950/60 px-2 py-1.5 text-xs text-slate-300 hover:ring-slate-700 hover:text-slate-100 transition">
<i className="h-3.5 w-3.5" data-lucide="shuffle"></i> Reassign
              </button>
</div>
</div>
</aside>

<button className="md:hidden absolute top-20 left-3 z-30 p-2 rounded-md ring-1 ring-slate-800 bg-slate-900/60 hover:ring-slate-700 transition" id="open-left">
<i className="h-5 w-5 text-slate-300" data-lucide="panel-left-open"></i>
</button>

<main className="flex-1 relative min-w-0">

<div className="absolute top-4 right-4 z-20 flex items-center gap-2">
<div className="flex items-center rounded-lg ring-1 ring-slate-800 bg-slate-950/70 backdrop-blur">
<button className="px-3 py-1.5 text-sm rounded-md text-slate-200 hover:bg-slate-900/60 transition" id="mode-pins">Pins</button>
<button className="px-3 py-1.5 text-sm rounded-md text-slate-400 hover:bg-slate-900/60 transition" id="mode-heat">Heatmap</button>
</div>
<div className="hidden sm:flex items-center gap-2 rounded-lg ring-1 ring-slate-800 bg-slate-950/70 px-2 py-1.5">
<i className="h-4 w-4 text-slate-300" data-lucide="layers-3"></i>
<select className="bg-transparent text-sm text-slate-200 outline-none" id="basemap-select">
<option className="bg-slate-900">Dark</option>
<option className="bg-slate-900">Light</option>
<option className="bg-slate-900">Streets</option>
</select>
</div>
</div>

<div aria-label="Live map" className="absolute inset-0" id="map"></div>

<div className="absolute left-4 bottom-4 z-20 w-[min(560px,92vw)] rounded-lg ring-1 ring-slate-800 bg-slate-950/80 backdrop-blur px-3 py-2">
<div className="flex items-center gap-3">
<button className="p-1.5 rounded-md ring-1 ring-slate-800 bg-slate-900/60 hover:ring-slate-700 transition" id="play-toggle" title="Play/Pause">
<i className="h-4 w-4 text-slate-200" data-lucide="play"></i>
</button>
<div className="flex-1">
<div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
<span>Last 24h</span>
<span id="slider-label">Live</span>
</div>
<div className="relative">
<input className="w-full h-2 bg-slate-900/60 rounded-full appearance-none cursor-pointer" id="time-slider" max="1440" min="0" style={{accentColor: '#22d3ee'}} type="range" value="1440"/>

<div className="pointer-events-none absolute top-0 left-0 h-2 bg-cyan-500/30 rounded-full" id="slider-progress" style={{width: '100%'}}></div>
</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="px-2 py-1.5 text-xs rounded-md ring-1 ring-slate-800 bg-slate-900/60 text-slate-300 hover:text-cyan-200 hover:ring-cyan-700/50 transition" id="jump-live">Go Live</button>
<div className="flex items-center gap-1 text-[11px] text-slate-400">
<i className="h-3.5 w-3.5" data-lucide="speedometer"></i>
<span id="playback-speed">1x</span>
</div>
</div>
</div>
</div>

<aside className="absolute top-0 right-0 h-full w-full sm:w-[420px] max-w-[92vw] translate-x-full transition-transform duration-300 bg-slate-950/95 backdrop-blur ring-1 ring-slate-800 z-30 flex flex-col" id="drawer">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-slate-200" data-lucide="truck"></i>
<h3 className="text-base font-semibold tracking-tight text-slate-100" id="drawer-title">Truck</h3>
</div>
<button className="p-1.5 rounded-md ring-1 ring-slate-800 bg-slate-900/60 hover:ring-slate-700 transition" id="drawer-close">
<i className="h-4 w-4 text-slate-300" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto">
<div className="p-4 space-y-4">
<div className="grid grid-cols-2 gap-3">
<div className="rounded-md ring-1 ring-slate-800 bg-slate-900/60 p-3">
<div className="text-[11px] text-slate-400">Truck ID</div>
<div className="text-sm font-medium tracking-tight text-slate-100" id="d-truck-id">—</div>
</div>
<div className="rounded-md ring-1 ring-slate-800 bg-slate-900/60 p-3">
<div className="text-[11px] text-slate-400">Plate</div>
<div className="text-sm font-medium tracking-tight text-slate-100" id="d-plate">—</div>
</div>
<div className="rounded-md ring-1 ring-slate-800 bg-slate-900/60 p-3">
<div className="text-[11px] text-slate-400">Driver</div>
<div className="flex items-center gap-2">
<div className="text-sm font-medium tracking-tight text-slate-100" id="d-driver">—</div>
<a className="ml-auto inline-flex items-center gap-1.5 text-xs text-cyan-300 hover:text-cyan-200 transition" href="#" id="d-call">
<i className="h-3.5 w-3.5" data-lucide="phone"></i> Call
                      </a>
</div>
</div>
<div className="rounded-md ring-1 ring-slate-800 bg-slate-900/60 p-3">
<div className="text-[11px] text-slate-400">Status</div>
<div className="text-sm font-medium tracking-tight" id="d-status">—</div>
</div>
<div className="rounded-md ring-1 ring-slate-800 bg-slate-900/60 p-3">
<div className="text-[11px] text-slate-400">ETA</div>
<div className="text-sm font-medium tracking-tight" id="d-eta">—</div>
</div>
<div className="rounded-md ring-1 ring-slate-800 bg-slate-900/60 p-3">
<div className="text-[11px] text-slate-400">Last seen</div>
<div className="text-sm font-medium tracking-tight" id="d-last-seen">—</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-md ring-1 ring-slate-800 bg-slate-900/60 p-3">
<div className="text-[11px] text-slate-400">Speed</div>
<div className="text-sm font-medium tracking-tight" id="d-speed">—</div>
</div>
<div className="rounded-md ring-1 ring-slate-800 bg-slate-900/60 p-3">
<div className="text-[11px] text-slate-400">Heading</div>
<div className="text-sm font-medium tracking-tight" id="d-heading">—</div>
</div>
</div>
<div className="rounded-lg ring-1 ring-slate-800 bg-slate-900/60 p-3">
<div className="flex items-center gap-2 mb-2">
<i className="h-4 w-4 text-slate-300" data-lucide="timeline"></i>
<div className="text-sm font-medium tracking-tight">Event timeline</div>
</div>
<div className="relative" id="d-timeline">

<div className="flex items-center gap-3">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-slate-500"></div>
<span className="text-xs text-slate-300">arrive_gate</span>
</div>
<div className="h-px flex-1 bg-slate-700/60"></div>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-slate-500"></div>
<span className="text-xs text-slate-300">weighbridge</span>
</div>
<div className="h-px flex-1 bg-slate-700/60"></div>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-slate-500"></div>
<span className="text-xs text-slate-300">loading</span>
</div>
</div>
<div className="mt-2 grid grid-cols-3 text-[11px] text-slate-400" id="d-timeline-times">
<div id="tl1">—</div>
<div id="tl2">—</div>
<div id="tl3">—</div>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md ring-1 ring-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-300 hover:ring-slate-700 hover:text-slate-100 transition">
<i className="h-4 w-4" data-lucide="message-square"></i> Message Driver
                  </button>
<button className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md ring-1 ring-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-300 hover:ring-slate-700 hover:text-slate-100 transition">
<i className="h-4 w-4" data-lucide="pin"></i> Center Here
                  </button>
</div>
</div>
</div>
</aside>
</main>
</div>
</div>


    </>
  );
}
