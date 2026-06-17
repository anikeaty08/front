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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    const svg = document.getElementById("map");
    const mapBaseG = document.getElementById("mapBase");
    const edgesG = document.getElementById("edges");
    const edgeLabelsG = document.getElementById("edgeLabels");
    const mstEdgesG = document.getElementById("mstEdges");
    const activePathsG = document.getElementById("activePaths");
    const nodesG = document.getElementById("nodes");
    const jetsG = document.getElementById("jets");
    const radarZonesG = document.getElementById("radarZones");
    const explosionsG = document.getElementById("explosions");
    const fogLayerG = document.getElementById("fogLayer");

    const ui = {
      modeBadge: document.getElementById("modeBadge"),
      missionTime: document.getElementById("missionTime"),
      destroyedCount: document.getElementById("destroyedCount"),
      efficiencyScore: document.getElementById("efficiencyScore"),
      jetCount: document.getElementById("jetCount"),
      blockedCount: document.getElementById("blockedCount"),
      riskLevel: document.getElementById("riskLevel"),
      weatherState: document.getElementById("weatherState"),
      jetsPanel: document.getElementById("jetsPanel"),
      manualTarget: document.getElementById("manualTarget"),
      logPanel: document.getElementById("logPanel"),
      resultTime: document.getElementById("resultTime"),
      resultFuel: document.getElementById("resultFuel"),
      resultSuccess: document.getElementById("resultSuccess")
    };

    const state = {
      mode: "auto",
      running: false,
      paused: false,
      missionStart: null,
      elapsed: 0,
      totalFuelUsed: 0,
      destroyedTargets: 0,
      blockedEdges: new Set(),
      weatherFactor: 1,
      riskPulse: 1,
      overlapReservations: new Map(),
      radarZones: [
        { id: "R1", x: 680, y: 180, r: 90, threat: 2.2 },
        { id: "R2", x: 760, y: 430, r: 105, threat: 2.8 }
      ],
      discovered: new Set(["F1", "F2", "F3", "N1", "N2"]),
      explosions: [],
      logs: []
    };

    const nodes = {
      F1: { id: "F1", name: "North Command", type: "friendly", x: 150, y: 120, importance: 1, destroyed: false },
      F2: { id: "F2", name: "Central Hangar", type: "friendly", x: 180, y: 320, importance: 1, destroyed: false },
      F3: { id: "F3", name: "Coastal Runway", type: "friendly", x: 220, y: 540, importance: 1, destroyed: false },
      N1: { id: "N1", name: "Neutral Ridge", type: "neutral", x: 420, y: 150, importance: 0, destroyed: false },
      N2: { id: "N2", name: "Civil Air Corridor", type: "neutral", x: 420, y: 330, importance: 0, destroyed: false },
      N3: { id: "N3", name: "Mountain Pass", type: "neutral", x: 500, y: 540, importance: 0, destroyed: false },
      E1: { id: "E1", name: "Enemy Depot", type: "enemy", x: 820, y: 110, importance: 3, destroyed: false },
      E2: { id: "E2", name: "Enemy Radar Base", type: "enemy", x: 820, y: 280, importance: 5, destroyed: false },
      E3: { id: "E3", name: "Enemy Airfield", type: "enemy", x: 840, y: 500, importance: 4, destroyed: false }
    };

    const baseEdges = [
      ["F1","F2", { distance: 150, fuel: 12, risk: 1 }],
      ["F2","F3", { distance: 170, fuel: 14, risk: 1.2 }],
      ["F1","N1", { distance: 220, fuel: 18, risk: 1.4 }],
      ["F2","N1", { distance: 180, fuel: 16, risk: 1.2 }],
      ["F2","N2", { distance: 220, fuel: 17, risk: 1.3 }],
      ["F3","N2", { distance: 240, fuel: 20, risk: 1.6 }],
      ["F3","N3", { distance: 200, fuel: 16, risk: 1.2 }],
      ["N1","N2", { distance: 180, fuel: 13, risk: 1.1 }],
      ["N2","N3", { distance: 190, fuel: 15, risk: 1.2 }],
      ["N1","E1", { distance: 280, fuel: 24, risk: 2.4 }],
      ["N1","E2", { distance: 320, fuel: 26, risk: 2.8 }],
      ["N2","E2", { distance: 290, fuel: 23, risk: 2.4 }],
      ["N2","E3", { distance: 310, fuel: 25, risk: 2.7 }],
      ["N3","E3", { distance: 260, fuel: 21, risk: 1.9 }],
      ["N3","E2", { distance: 350, fuel: 28, risk: 3.2 }],
      ["F2","E2", { distance: 520, fuel: 38, risk: 3.6 }],
      ["F1","E1", { distance: 600, fuel: 44, risk: 3.8 }]
    ];

    const jets = [
      { id: "J1", label: "Falcon-1", start: "F1", currentNode: "F1", x: nodes.F1.x, y: nodes.F1.y, fuel: 140, maxFuel: 140, speed: 110, status: "Idle", target: null, route: [], routeEdges: [], segmentIndex: 0, progress: 0, visible: true, phase: "idle", color: "#93c5fd", fuelUsed: 0 },
      { id: "J2", label: "Falcon-2", start: "F2", currentNode: "F2", x: nodes.F2.x, y: nodes.F2.y, fuel: 150, maxFuel: 150, speed: 120, status: "Idle", target: null, route: [], routeEdges: [], segmentIndex: 0, progress: 0, visible: true, phase: "idle", color: "#67e8f9", fuelUsed: 0 },
      { id: "J3", label: "Falcon-3", start: "F3", currentNode: "F3", x: nodes.F3.x, y: nodes.F3.y, fuel: 135, maxFuel: 135, speed: 105, status: "Idle", target: null, route: [], routeEdges: [], segmentIndex: 0, progress: 0, visible: true, phase: "idle", color: "#a7f3d0", fuelUsed: 0 }
    ];

    function edgeKey(a, b) {
      return [a, b].sort().join("|");
    }

    function getNodeColor(type, destroyed = false) {
      if (destroyed) return "#52525b";
      if (type === "friendly") return "#60a5fa";
      if (type === "enemy") return "#f87171";
      return "#d4d4d8";
    }

    function dist(a, b) {
      return Math.hypot(nodes[a].x - nodes[b].x, nodes[a].y - nodes[b].y);
    }

    function pointToSegmentDistance(px, py, x1, y1, x2, y2) {
      const dx = x2 - x1;
      const dy = y2 - y1;
      if (dx === 0 && dy === 0) return Math.hypot(px - x1, py - y1);
      const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy)));
      const x = x1 + t * dx;
      const y = y1 + t * dy;
      return Math.hypot(px - x, py - y);
    }

    function getDynamicEdges() {
      return baseEdges.map(([a, b, w]) => {
        let riskBonus = 0;
        state.radarZones.forEach(zone => {
          const d = pointToSegmentDistance(zone.x, zone.y, nodes[a].x, nodes[a].y, nodes[b].x, nodes[b].y);
          if (d < zone.r) riskBonus += zone.threat * ((zone.r - d) / zone.r);
        });

        const weatherPenalty = state.weatherFactor;
        const blocked = state.blockedEdges.has(edgeKey(a, b));

        return {
          a, b,
          distance: w.distance * weatherPenalty,
          fuel: w.fuel * (1 + (weatherPenalty - 1) * 0.7),
          risk: w.risk + riskBonus,
          blocked
        };
      });
    }

    function buildAdjacency(weightMode = "attack") {
      const adj = {};
      Object.keys(nodes).forEach(id => adj[id] = []);
      for (const e of getDynamicEdges()) {
        if (e.blocked) continue;
        let weight;
        if (weightMode === "attack") weight = e.distance + e.fuel * 2 + e.risk * 26;
        else if (weightMode === "safe") weight = e.distance * 0.7 + e.fuel * 1.4 + e.risk * 42;
        else if (weightMode === "mst") weight = e.distance + e.fuel * 1.8;
        else weight = e.distance;
        adj[e.a].push({ to: e.b, weight, raw: e });
        adj[e.b].push({ to: e.a, weight, raw: e });
      }
      return adj;
    }

    function dijkstra(start, end, mode = "attack", avoidTargets = new Set()) {
      const adj = buildAdjacency(mode);
      const ids = Object.keys(nodes);
      const distMap = {};
      const prev = {};
      ids.forEach(id => distMap[id] = Infinity);
      distMap[start] = 0;

      const pq = [{ node: start, d: 0 }];
      while (pq.length) {
        pq.sort((x, y) => x.d - y.d);
        const { node, d } = pq.shift();
        if (d !== distMap[node]) continue;
        if (node === end) break;

        for (const edge of adj[node]) {
          if (avoidTargets.has(edge.to) && edge.to !== end) continue;
          if (nodes[edge.to].type === "enemy" && edge.to !== end && !nodes[edge.to].destroyed) continue;
          const nd = d + edge.weight;
          if (nd < distMap[edge.to]) {
            distMap[edge.to] = nd;
            prev[edge.to] = { from: node, edge: edge.raw };
            pq.push({ node: edge.to, d: nd });
          }
        }
      }

      if (!isFinite(distMap[end])) return null;
      const path = [];
      const edges = [];
      let cur = end;
      while (cur) {
        path.unshift(cur);
        if (prev[cur]) edges.unshift(prev[cur].edge);
        cur = prev[cur]?.from;
      }
      return { path, edges, cost: distMap[end] };
    }

    function primFriendlyMST() {
      const friendly = Object.values(nodes).filter(n => n.type === "friendly").map(n => n.id);
      const adj = buildAdjacency("mst");
      const visited = new Set([friendly[0]]);
      const mst = [];

      while (visited.size < friendly.length) {
        let best = null;
        for (const from of visited) {
          for (const edge of adj[from]) {
            if (!friendly.includes(edge.to) || visited.has(edge.to)) continue;
            if (!best || edge.weight < best.weight) best = { from, to: edge.to, raw: edge.raw, weight: edge.weight };
          }
        }
        if (!best) break;
        visited.add(best.to);
        mst.push(best.raw);
      }

      if (mst.length < friendly.length - 1) {
        const all = [];
        const seen = new Set();
        friendly.forEach(f => {
          Object.keys(nodes).forEach(t => {
            if (f !== t && !seen.has(edgeKey(f, t))) {
              const res = dijkstra(f, t, "mst");
              if (res && friendly.includes(t)) {
                all.push({ from: f, to: t, cost: res.cost, routeEdges: res.edges });
              }
              seen.add(edgeKey(f, t));
            }
          });
        });

        const visited2 = new Set([friendly[0]]);
        const finalEdges = [];
        while (visited2.size < friendly.length) {
          let candidate = null;
          for (const item of all) {
            const one = visited2.has(item.from), two = visited2.has(item.to);
            if ((one && !two) || (!one && two)) {
              if (!candidate || item.cost < candidate.cost) candidate = item;
            }
          }
          if (!candidate) break;
          visited2.add(candidate.from);
          visited2.add(candidate.to);
          candidate.routeEdges.forEach(e => finalEdges.push(e));
        }
        return finalEdges;
      }

      return mst;
    }

    function estimateFuel(edges) {
      return edges.reduce((s, e) => s + e.fuel, 0);
    }

    function scoreTarget(jet, targetId, reserved = new Set()) {
      const target = nodes[targetId];
      if (target.destroyed) return null;
      const attack = dijkstra(jet.currentNode, targetId, "attack", reserved);
      const ret = dijkstra(targetId, jet.start, "safe", reserved);
      if (!attack || !ret) return null;
      const totalFuel = estimateFuel(attack.edges) + estimateFuel(ret.edges);
      if (totalFuel > jet.fuel) return null;
      const score = target.importance * 200 - attack.cost - ret.cost * 0.55 - totalFuel * 1.5;
      return { targetId, attack, ret, totalFuel, score };
    }

    function assignJetMission(jet, manualTarget = null, reservedTargets = new Set()) {
      const enemies = Object.values(nodes).filter(n => n.type === "enemy" && !n.destroyed).map(n => n.id);
      if (!enemies.length) return false;

      let selected = null;
      if (state.mode === "manual" && manualTarget && !nodes[manualTarget].destroyed) {
        selected = scoreTarget(jet, manualTarget, reservedTargets);
      } else {
        const options = enemies
          .filter(id => !reservedTargets.has(id))
          .map(id => scoreTarget(jet, id, reservedTargets))
          .filter(Boolean)
          .sort((a, b) => b.score - a.score);
        selected = options[0] || null;
      }

      if (!selected) {
        jet.status = "Standby";
        jet.phase = "idle";
        return false;
      }

      jet.target = selected.targetId;
      jet.route = selected.attack.path.slice();
      jet.routeEdges = selected.attack.edges.slice();
      jet.segmentIndex = 0;
      jet.progress = 0;
      jet.status = "Strike";
      jet.phase = "outbound";
      reservedTargets.add(selected.targetId);

      selected.attack.path.forEach(id => state.discovered.add(id));
      log(`${jet.label} assigned to ${nodes[selected.targetId].name} via ${selected.attack.path.join(" → ")}`, "cyan");
      return true;
    }

    function computeReturnRoute(jet) {
      const res = dijkstra(jet.currentNode, jet.start, "safe");
      if (!res) {
        jet.status = "Trapped";
        log(`${jet.label} unable to compute safe return path`, "red");
        return false;
      }
      jet.route = res.path.slice();
      jet.routeEdges = res.edges.slice();
      jet.segmentIndex = 0;
      jet.progress = 0;
      jet.status = "Return";
      jet.phase = "return";
      res.path.forEach(id => state.discovered.add(id));
      log(`${jet.label} rerouted for safe return via ${res.path.join(" → ")}`, "emerald");
      return true;
    }

    function triggerExplosion(nodeId) {
      const n = nodes[nodeId];
      state.explosions.push({ id: "X" + Date.now() + Math.random(), x: n.x, y: n.y, t: 1 });
    }

    function log(message, tone = "zinc") {
      const colorMap = {
        emerald: "text-emerald-300 border-emerald-500/20 bg-emerald-500/10",
        red: "text-red-300 border-red-500/20 bg-red-500/10",
        amber: "text-amber-300 border-amber-500/20 bg-amber-500/10",
        cyan: "text-cyan-300 border-cyan-500/20 bg-cyan-500/10",
        zinc: "text-zinc-300 border-zinc-700 bg-zinc-900/80"
      };
      state.logs.unshift({ message, toneClass: colorMap[tone] || colorMap.zinc, ts: new Date().toLocaleTimeString() });
      state.logs = state.logs.slice(0, 20);
      renderLog();
    }

    function renderLog() {
      ui.logPanel.innerHTML = state.logs.map(item => `
        <div class="rounded-2xl border px-3 py-2 text-xs ${item.toneClass}">
          <div class="mb-1 text-[0.65rem] uppercase tracking-[0.18em] opacity-70">${item.ts}</div>
          <div>${item.message}</div>
        </div>
      `).join("");
    }

    function renderManualTargets() {
      const enemies = Object.values(nodes).filter(n => n.type === "enemy");
      ui.manualTarget.innerHTML = enemies.map(e => `<option value="${e.id}">${e.name}${e.destroyed ? " — Destroyed" : ""}</option>`).join("");
    }

    function renderMapBase() {
      mapBaseG.innerHTML = "";

      for (let x = 80; x <= 920; x += 140) {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x);
        line.setAttribute("y1", 50);
        line.setAttribute("x2", x);
        line.setAttribute("y2", 600);
        line.setAttribute("stroke", "rgba(255,255,255,0.05)");
        line.setAttribute("stroke-width", "1");
        mapBaseG.appendChild(line);
      }

      for (let y = 70; y <= 590; y += 130) {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", 60);
        line.setAttribute("y1", y);
        line.setAttribute("x2", 940);
        line.setAttribute("y2", y);
        line.setAttribute("stroke", "rgba(255,255,255,0.05)");
        line.setAttribute("stroke-width", "1");
        mapBaseG.appendChild(line);
      }

      const leftLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
      leftLabel.setAttribute("x", 70);
      leftLabel.setAttribute("y", 36);
      leftLabel.setAttribute("fill", "rgba(161,161,170,0.72)");
      leftLabel.setAttribute("font-size", "12");
      leftLabel.textContent = "Friendly Sector";
      mapBaseG.appendChild(leftLabel);

      const centerLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
      centerLabel.setAttribute("x", 425);
      centerLabel.setAttribute("y", 36);
      centerLabel.setAttribute("fill", "rgba(161,161,170,0.72)");
      centerLabel.setAttribute("font-size", "12");
      centerLabel.textContent = "Transit Zone";
      mapBaseG.appendChild(centerLabel);

      const rightLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
      rightLabel.setAttribute("x", 790);
      rightLabel.setAttribute("y", 36);
      rightLabel.setAttribute("fill", "rgba(161,161,170,0.72)");
      rightLabel.setAttribute("font-size", "12");
      rightLabel.textContent = "Enemy Sector";
      mapBaseG.appendChild(rightLabel);
    }

    function renderRadarZones() {
      radarZonesG.innerHTML = "";
      state.radarZones.forEach(zone => {
        const outer = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        outer.setAttribute("cx", zone.x);
        outer.setAttribute("cy", zone.y);
        outer.setAttribute("r", zone.r * (0.96 + Math.sin(Date.now() / 600) * 0.025));
        outer.setAttribute("fill", "rgba(239,68,68,0.08)");
        outer.setAttribute("stroke", "rgba(248,113,113,0.44)");
        outer.setAttribute("stroke-width", "2");
        outer.setAttribute("filter", "url(#glowRed)");
        radarZonesG.appendChild(outer);

        const inner = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        inner.setAttribute("cx", zone.x);
        inner.setAttribute("cy", zone.y);
        inner.setAttribute("r", zone.r * 0.52);
        inner.setAttribute("fill", "rgba(239,68,68,0.04)");
        inner.setAttribute("stroke", "rgba(248,113,113,0.2)");
        inner.setAttribute("stroke-width", "1.5");
        radarZonesG.appendChild(inner);

        const labelBg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        labelBg.setAttribute("x", zone.x - 44);
        labelBg.setAttribute("y", zone.y - zone.r - 24);
        labelBg.setAttribute("rx", "10");
        labelBg.setAttribute("ry", "10");
        labelBg.setAttribute("width", "88");
        labelBg.setAttribute("height", "18");
        labelBg.setAttribute("fill", "rgba(24,24,27,0.84)");
        labelBg.setAttribute("stroke", "rgba(248,113,113,0.22)");
        radarZonesG.appendChild(labelBg);

        const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
        label.setAttribute("x", zone.x);
        label.setAttribute("y", zone.y - zone.r - 11);
        label.setAttribute("text-anchor", "middle");
        label.setAttribute("fill", "rgba(252,165,165,0.95)");
        label.setAttribute("font-size", "11");
        label.textContent = "Radar Zone";
        radarZonesG.appendChild(label);
      });
    }

    function renderEdges() {
      edgesG.innerHTML = "";
      edgeLabelsG.innerHTML = "";
      const dyn = getDynamicEdges();

      dyn.forEach(e => {
        const x1 = nodes[e.a].x;
        const y1 = nodes[e.a].y;
        const x2 = nodes[e.b].x;
        const y2 = nodes[e.b].y;
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;

        const under = document.createElementNS("http://www.w3.org/2000/svg", "line");
        under.setAttribute("x1", x1);
        under.setAttribute("y1", y1);
        under.setAttribute("x2", x2);
        under.setAttribute("y2", y2);
        under.setAttribute("stroke", "rgba(0,0,0,0.55)");
        under.setAttribute("stroke-width", "7");
        under.setAttribute("stroke-linecap", "round");
        edgesG.appendChild(under);

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);

        let color = "rgba(212,212,216,0.5)";
        let width = 2.8;
        if (e.blocked) {
          color = "rgba(245,158,11,0.95)";
          width = 3.6;
          line.setAttribute("stroke-dasharray", "10 6");
        } else if (e.risk > 3.6) {
          color = "rgba(239,68,68,0.88)";
          width = 3.2;
        } else if (e.risk > 2.2) {
          color = "rgba(250,204,21,0.76)";
          width = 3;
        }

        line.setAttribute("stroke", color);
        line.setAttribute("stroke-width", width);
        line.setAttribute("stroke-linecap", "round");
        edgesG.appendChild(line);

        const labelBg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        labelBg.setAttribute("x", midX - 16);
        labelBg.setAttribute("y", midY - 10);
        labelBg.setAttribute("width", "32");
        labelBg.setAttribute("height", "18");
        labelBg.setAttribute("rx", "8");
        labelBg.setAttribute("ry", "8");
        labelBg.setAttribute("fill", "rgba(9,9,11,0.88)");
        labelBg.setAttribute("stroke", "rgba(63,63,70,0.9)");
        edgeLabelsG.appendChild(labelBg);

        const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
        label.setAttribute("x", midX);
        label.setAttribute("y", midY + 2.5);
        label.setAttribute("text-anchor", "middle");
        label.setAttribute("fill", e.blocked ? "rgba(252,211,77,1)" : "rgba(244,244,245,0.92)");
        label.setAttribute("font-size", "10");
        label.textContent = Math.round(e.fuel);
        edgeLabelsG.appendChild(label);
      });
    }

    function renderMST() {
      mstEdgesG.innerHTML = "";
      const mst = primFriendlyMST();
      const seen = new Set();
      mst.forEach(e => {
        const key = edgeKey(e.a, e.b);
        if (seen.has(key)) return;
        seen.add(key);

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", nodes[e.a].x);
        line.setAttribute("y1", nodes[e.a].y);
        line.setAttribute("x2", nodes[e.b].x);
        line.setAttribute("y2", nodes[e.b].y);
        line.setAttribute("stroke", "rgba(34,211,238,0.82)");
        line.setAttribute("stroke-width", "2.4");
        line.setAttribute("stroke-dasharray", "7 7");
        line.setAttribute("stroke-linecap", "round");
        line.setAttribute("filter", "url(#softGlow)");
        mstEdgesG.appendChild(line);
      });
    }

    function renderActivePaths() {
      activePathsG.innerHTML = "";
      jets.forEach(jet => {
        if (!jet.routeEdges.length) return;
        jet.routeEdges.forEach((e, idx) => {
          const under = document.createElementNS("http://www.w3.org/2000/svg", "line");
          under.setAttribute("x1", nodes[e.a].x);
          under.setAttribute("y1", nodes[e.a].y);
          under.setAttribute("x2", nodes[e.b].x);
          under.setAttribute("y2", nodes[e.b].y);
          under.setAttribute("stroke", "rgba(0,0,0,0.65)");
          under.setAttribute("stroke-width", idx === jet.segmentIndex ? "10" : "8");
          under.setAttribute("stroke-linecap", "round");
          activePathsG.appendChild(under);

          const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
          line.setAttribute("x1", nodes[e.a].x);
          line.setAttribute("y1", nodes[e.a].y);
          line.setAttribute("x2", nodes[e.b].x);
          line.setAttribute("y2", nodes[e.b].y);
          line.setAttribute("stroke", jet.phase === "return" ? "rgba(250,204,21,0.98)" : "rgba(16,185,129,0.98)");
          line.setAttribute("stroke-width", idx === jet.segmentIndex ? "6" : "4");
          line.setAttribute("stroke-linecap", "round");
          line.setAttribute("filter", "url(#glowGreen)");
          line.setAttribute("opacity", idx < jet.segmentIndex ? "0.5" : "1");
          activePathsG.appendChild(line);
        });
      });
    }

    function renderNodes() {
      nodesG.innerHTML = "";
      Object.values(nodes).forEach(n => {
        const discovered = state.discovered.has(n.id) || n.type === "friendly";
        if (!discovered) return;

        const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
        group.style.cursor = n.type === "enemy" ? "pointer" : "default";

        const halo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        halo.setAttribute("cx", n.x);
        halo.setAttribute("cy", n.y);
        halo.setAttribute("r", n.type === "enemy" ? 22 : 18);
        halo.setAttribute("fill", n.destroyed ? "rgba(82,82,91,0.12)" : n.type === "enemy" ? "rgba(248,113,113,0.16)" : n.type === "friendly" ? "rgba(96,165,250,0.16)" : "rgba(212,212,216,0.14)");
        halo.setAttribute("filter", n.type === "enemy" && !n.destroyed ? "url(#glowRed)" : "url(#softGlow)");
        group.appendChild(halo);

        const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        c.setAttribute("cx", n.x);
        c.setAttribute("cy", n.y);
        c.setAttribute("r", n.type === "enemy" ? 11 : 10);
        c.setAttribute("fill", getNodeColor(n.type, n.destroyed));
        c.setAttribute("stroke", n.destroyed ? "#3f3f46" : "#fafafa");
        c.setAttribute("stroke-width", "2");
        group.appendChild(c);

        if (n.type === "friendly") {
          const plus = document.createElementNS("http://www.w3.org/2000/svg", "path");
          plus.setAttribute("d", `M ${n.x-5} ${n.y} L ${n.x+5} ${n.y} M ${n.x} ${n.y-5} L ${n.x} ${n.y+5}`);
          plus.setAttribute("stroke", "white");
          plus.setAttribute("stroke-width", "1.6");
          plus.setAttribute("stroke-linecap", "round");
          group.appendChild(plus);
        }

        const idBadge = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        idBadge.setAttribute("x", n.x - 16);
        idBadge.setAttribute("y", n.y - 36);
        idBadge.setAttribute("width", "32");
        idBadge.setAttribute("height", "16");
        idBadge.setAttribute("rx", "8");
        idBadge.setAttribute("ry", "8");
        idBadge.setAttribute("fill", "rgba(9,9,11,0.9)");
        idBadge.setAttribute("stroke", n.type === "enemy" ? "rgba(248,113,113,0.35)" : n.type === "friendly" ? "rgba(96,165,250,0.35)" : "rgba(161,161,170,0.3)");
        group.appendChild(idBadge);

        const idText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        idText.setAttribute("x", n.x);
        idText.setAttribute("y", n.y - 25);
        idText.setAttribute("text-anchor", "middle");
        idText.setAttribute("fill", "#fafafa");
        idText.setAttribute("font-size", "9.5");
        idText.textContent = n.id;
        group.appendChild(idText);

        const labelBg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        labelBg.setAttribute("x", n.x + 14);
        labelBg.setAttribute("y", n.y - 23);
        labelBg.setAttribute("width", Math.max(76, n.name.length * 6.1));
        labelBg.setAttribute("height", "30");
        labelBg.setAttribute("rx", "10");
        labelBg.setAttribute("ry", "10");
        labelBg.setAttribute("fill", "rgba(9,9,11,0.86)");
        labelBg.setAttribute("stroke", "rgba(63,63,70,0.9)");
        group.appendChild(labelBg);

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", n.x + 22);
        text.setAttribute("y", n.y - 10);
        text.setAttribute("fill", n.destroyed ? "#71717a" : "#f4f4f5");
        text.setAttribute("font-size", "11.5");
        text.textContent = n.name;
        group.appendChild(text);

        const sub = document.createElementNS("http://www.w3.org/2000/svg", "text");
        sub.setAttribute("x", n.x + 22);
        sub.setAttribute("y", n.y + 3);
        sub.setAttribute("fill", n.destroyed ? "#52525b" : n.type === "enemy" ? "#fca5a5" : n.type === "friendly" ? "#93c5fd" : "#d4d4d8");
        sub.setAttribute("font-size", "9.5");
        sub.textContent = n.type;
        group.appendChild(sub);

        if (n.type === "enemy" && !n.destroyed) {
          group.addEventListener("click", () => {
            if (state.mode === "manual") {
              ui.manualTarget.value = n.id;
              log(`Manual target selected: ${n.name}`, "amber");
            }
          });
        }

        nodesG.appendChild(group);
      });
    }

    function renderFog() {
      fogLayerG.innerHTML = "";
      Object.values(nodes).forEach(n => {
        if (state.discovered.has(n.id) || n.type === "friendly") return;
        const fog = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        fog.setAttribute("cx", n.x);
        fog.setAttribute("cy", n.y);
        fog.setAttribute("r", "40");
        fog.setAttribute("fill", "rgba(0,0,0,0.66)");
        fog.setAttribute("stroke", "rgba(63,63,70,0.45)");
        fogLayerG.appendChild(fog);

        const q = document.createElementNS("http://www.w3.org/2000/svg", "text");
        q.setAttribute("x", n.x);
        q.setAttribute("y", n.y + 4);
        q.setAttribute("text-anchor", "middle");
        q.setAttribute("fill", "rgba(161,161,170,0.9)");
        q.setAttribute("font-size", "16");
        q.textContent = "?";
        fogLayerG.appendChild(q);
      });
    }

    function renderExplosions(dt = 0) {
      explosionsG.innerHTML = "";
      state.explosions.forEach(ex => ex.t -= dt * 0.7);
      state.explosions = state.explosions.filter(ex => ex.t > 0);

      state.explosions.forEach(ex => {
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", ex.x);
        text.setAttribute("y", ex.y - (1 - ex.t) * 20);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("font-size", "28");
        text.setAttribute("opacity", ex.t.toFixed(2));
        text.textContent = "💥";
        explosionsG.appendChild(text);
      });
    }

    function renderJets() {
      jetsG.innerHTML = "";
      jets.forEach(jet => {
        const group = document.createElementNS("http://www.w3.org/2000/svg", "g");

        const halo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        halo.setAttribute("cx", jet.x);
        halo.setAttribute("cy", jet.y);
        halo.setAttribute("r", "18");
        halo.setAttribute("fill", "rgba(16,185,129,0.1)");
        halo.setAttribute("filter", "url(#glowGreen)");
        group.appendChild(halo);

        const jetText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        jetText.setAttribute("x", jet.x);
        jetText.setAttribute("y", jet.y + 5);
        jetText.setAttribute("text-anchor", "middle");
        jetText.setAttribute("font-size", "18");
        jetText.textContent = "✈️";
        group.appendChild(jetText);

        const labelBg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        labelBg.setAttribute("x", jet.x + 12);
        labelBg.setAttribute("y", jet.y - 12);
        labelBg.setAttribute("width", "54");
        labelBg.setAttribute("height", "18");
        labelBg.setAttribute("rx", "9");
        labelBg.setAttribute("ry", "9");
        labelBg.setAttribute("fill", "rgba(9,9,11,0.88)");
        labelBg.setAttribute("stroke", "rgba(63,63,70,0.9)");
        group.appendChild(labelBg);

        const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
        label.setAttribute("x", jet.x + 39);
        label.setAttribute("y", jet.y + 1);
        label.setAttribute("text-anchor", "middle");
        label.setAttribute("fill", jet.color);
        label.setAttribute("font-size", "10");
        label.textContent = jet.label;
        group.appendChild(label);

        jetsG.appendChild(group);
      });
    }

    function renderJetsPanel() {
      ui.jetsPanel.innerHTML = jets.map(jet => {
        const fuelPct = Math.max(0, (jet.fuel / jet.maxFuel) * 100);
        const tone = fuelPct > 55 ? "bg-emerald-400" : fuelPct > 25 ? "bg-amber-400" : "bg-red-400";
        return `
          <div class="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-3">
            <div class="flex items-center justify-between">
              <div>
                <div class="text-sm font-medium text-white">${jet.label}</div>
                <div class="text-xs text-zinc-500">${jet.status}${jet.target ? " · " + nodes[jet.target].name : ""}</div>
              </div>
              <div class="text-xs" style="color:${jet.color}">✈️</div>
            </div>
            <div class="mt-3">
              <div class="mb-1 flex items-center justify-between text-xs text-zinc-500">
                <span>Fuel</span>
                <span>${jet.fuel.toFixed(1)} / ${jet.maxFuel}</span>
              </div>
              <div class="h-2 overflow-hidden rounded-full bg-zinc-800">
                <div class="h-full rounded-full ${tone}" style="width:${fuelPct}%"></div>
              </div>
            </div>
            <div class="mt-3 grid grid-cols-2 gap-2 text-xs text-zinc-400">
              <div class="rounded-xl border border-zinc-800 bg-zinc-950/60 px-2 py-2">Phase: <span class="text-zinc-200">${jet.phase}</span></div>
              <div class="rounded-xl border border-zinc-800 bg-zinc-950/60 px-2 py-2">Fuel used: <span class="text-zinc-200">${jet.fuelUsed.toFixed(1)}</span></div>
            </div>
          </div>
        `;
      }).join("");
    }

    function updateSummary() {
      ui.modeBadge.textContent = state.mode === "auto" ? "Auto" : "Manual";
      ui.destroyedCount.textContent = state.destroyedTargets;
      const totalEnemies = Object.values(nodes).filter(n => n.type === "enemy").length;
      const success = totalEnemies ? Math.round((state.destroyedTargets / totalEnemies) * 100) : 0;
      const efficiencyBase = Math.max(0, 100 - Math.round(state.totalFuelUsed * 0.4 + state.elapsed * 1.5));
      const efficiency = Math.max(success, efficiencyBase);
      ui.efficiencyScore.textContent = efficiency + "%";
      ui.missionTime.textContent = state.elapsed.toFixed(1) + "s";
      ui.resultTime.textContent = state.elapsed.toFixed(1) + "s";
      ui.resultFuel.textContent = state.totalFuelUsed.toFixed(1);
      ui.resultSuccess.textContent = success + "%";
      ui.blockedCount.textContent = state.blockedEdges.size;
      ui.weatherState.textContent = state.weatherFactor > 1.18 ? "Storm Front" : state.weatherFactor > 1.06 ? "Crosswind" : "Stable";

      const avgThreat = state.radarZones.reduce((s, z) => s + z.threat, 0) / state.radarZones.length;
      ui.riskLevel.textContent = avgThreat > 2.55 ? "High" : avgThreat > 2.1 ? "Medium" : "Low";
    }

    function maybeChangeEnvironment() {
      if (Math.random() < 0.015) {
        state.weatherFactor = 1 + Math.random() * 0.24;
        log(`Weather update: ${ui.weatherState.textContent}`, "amber");
      }

      if (Math.random() < 0.018) {
        const all = baseEdges.map(([a,b]) => edgeKey(a,b));
        const free = all.filter(k => !state.blockedEdges.has(k));
        if (free.length) {
          const picked = free[Math.floor(Math.random() * free.length)];
          state.blockedEdges.add(picked);
          log(`Flight path blocked: ${picked.replace("|"," ↔ ")}`, "red");
        }
      }

      if (Math.random() < 0.012 && state.blockedEdges.size) {
        const arr = Array.from(state.blockedEdges);
        const picked = arr[Math.floor(Math.random() * arr.length)];
        state.blockedEdges.delete(picked);
        log(`Path restored: ${picked.replace("|"," ↔ ")}`, "emerald");
      }

      state.radarZones.forEach(z => {
        z.threat = Math.max(1.4, Math.min(3.4, z.threat + (Math.random() - 0.5) * 0.18));
      });
    }

    function planMissions() {
      const reserved = new Set();
      jets.forEach(jet => {
        if (jet.phase === "idle" || jet.status === "Standby") {
          assignJetMission(jet, state.mode === "manual" ? ui.manualTarget.value : null, reserved);
        }
      });
    }

    function moveJet(jet, dt) {
      if (!jet.route || jet.route.length < 2 || jet.segmentIndex >= jet.route.length - 1) return;

      const a = nodes[jet.route[jet.segmentIndex]];
      const b = nodes[jet.route[jet.segmentIndex + 1]];
      const length = Math.hypot(b.x - a.x, b.y - a.y);
      const speed = jet.speed * (1 / state.weatherFactor);
      jet.progress += (speed * dt) / length;

      if (jet.progress >= 1) {
        const e = jet.routeEdges[jet.segmentIndex];
        const fuelCost = e ? e.fuel : 0;
        jet.fuel -= fuelCost;
        jet.fuelUsed += fuelCost;
        state.totalFuelUsed += fuelCost;

        jet.segmentIndex++;
        jet.progress = 0;
        jet.currentNode = jet.route[jet.segmentIndex];
        state.discovered.add(jet.currentNode);

        if (jet.currentNode === jet.target && jet.phase === "outbound" && !nodes[jet.target].destroyed) {
          nodes[jet.target].destroyed = true;
          state.destroyedTargets++;
          jet.status = "Target Neutralized";
          triggerExplosion(jet.target);
          log(`${jet.label} destroyed ${nodes[jet.target].name}`, "red");
          computeReturnRoute(jet);
        } else if (jet.currentNode === jet.start && jet.phase === "return") {
          jet.status = "Recovered";
          jet.phase = "idle";
          jet.target = null;
          jet.route = [];
          jet.routeEdges = [];
          jet.segmentIndex = 0;
          log(`${jet.label} returned safely to ${nodes[jet.start].name}`, "emerald");
        } else if (jet.segmentIndex >= jet.route.length - 1) {
          if (jet.phase === "outbound" && jet.target && !nodes[jet.target].destroyed) {
            nodes[jet.target].destroyed = true;
            state.destroyedTargets++;
            triggerExplosion(jet.target);
            computeReturnRoute(jet);
          }
        }
      }

      const t = Math.min(jet.progress, 1);
      jet.x = a.x + (b.x - a.x) * t;
      jet.y = a.y + (b.y - a.y) * t;
    }

    function update(dt) {
      if (!state.running || state.paused) return;
      state.elapsed = (performance.now() - state.missionStart) / 1000;
      maybeChangeEnvironment();

      jets.forEach(jet => {
        if ((jet.phase === "outbound" || jet.phase === "return") && jet.route.length > 1) {
          if (Math.random() < 0.01 && jet.phase === "return") {
            computeReturnRoute(jet);
          }
          moveJet(jet, dt);
        }
      });

      const livingTargets = Object.values(nodes).filter(n => n.type === "enemy" && !n.destroyed);
      if (livingTargets.length && jets.every(j => j.phase === "idle" || j.status === "Standby" || j.status === "Recovered")) {
        planMissions();
      }

      updateSummary();
      render();
    }

    function render() {
      renderMapBase();
      renderRadarZones();
      renderEdges();
      renderMST();
      renderActivePaths();
      renderNodes();
      renderFog();
      renderExplosions(0.016);
      renderJets();
      renderJetsPanel();
      updateSummary();
    }

    function resetSimulation() {
      state.running = false;
      state.paused = false;
      state.missionStart = null;
      state.elapsed = 0;
      state.totalFuelUsed = 0;
      state.destroyedTargets = 0;
      state.blockedEdges = new Set();
      state.weatherFactor = 1;
      state.discovered = new Set(["F1", "F2", "F3", "N1", "N2"]);
      state.explosions = [];
      state.logs = [];
      Object.values(nodes).forEach(n => n.destroyed = false);

      jets.forEach(jet => {
        jet.currentNode = jet.start;
        jet.x = nodes[jet.start].x;
        jet.y = nodes[jet.start].y;
        jet.fuel = jet.maxFuel;
        jet.status = "Idle";
        jet.target = null;
        jet.route = [];
        jet.routeEdges = [];
        jet.segmentIndex = 0;
        jet.progress = 0;
        jet.phase = "idle";
        jet.fuelUsed = 0;
      });

      log("Simulation reset and command network restored", "zinc");
      renderManualTargets();
      render();
    }

    document.getElementById("autoModeBtn").addEventListener("click", () => {
      state.mode = "auto";
      document.getElementById("autoModeBtn").className = "rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300 transition hover:bg-emerald-500/15";
      document.getElementById("manualModeBtn").className = "rounded-2xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:bg-zinc-800";
      log("Switched to autonomous mission planning", "emerald");
      updateSummary();
    });

    document.getElementById("manualModeBtn").addEventListener("click", () => {
      state.mode = "manual";
      document.getElementById("manualModeBtn").className = "rounded-2xl border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-sm font-medium text-amber-300 transition hover:bg-amber-500/15";
      document.getElementById("autoModeBtn").className = "rounded-2xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:bg-zinc-800";
      log("Manual targeting enabled", "amber");
      updateSummary();
    });

    document.getElementById("startBtn").addEventListener("click", () => {
      if (!state.running) {
        state.running = true;
        state.paused = false;
        state.missionStart = performance.now() - state.elapsed * 1000;
        planMissions();
        log("Mission launched", "cyan");
      } else if (state.paused) {
        state.paused = false;
        state.missionStart = performance.now() - state.elapsed * 1000;
        log("Mission resumed", "cyan");
      }
    });

    document.getElementById("pauseBtn").addEventListener("click", () => {
      if (!state.running) return;
      state.paused = !state.paused;
      if (!state.paused) {
        state.missionStart = performance.now() - state.elapsed * 1000;
        log("Mission resumed", "cyan");
      } else {
        log("Mission paused", "amber");
      }
    });

    document.getElementById("resetBtn").addEventListener("click", resetSimulation);

    ui.manualTarget.addEventListener("change", () => {
      if (state.mode === "manual") {
        log(`Manual target changed to ${nodes[ui.manualTarget.value].name}`, "amber");
      }
    });

    let last = performance.now();
    function loop(now) {
      const dt = Math.min(0.033, (now - last) / 1000);
      last = now;
      update(dt);

      const sweep = document.getElementById("radarSweep");
      const angle = ((now / 50) % 360);
      sweep.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

      requestAnimationFrame(loop);
    }

    renderManualTargets();
    resetSimulation();
    requestAnimationFrame(loop);
  
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
      
<div className="relative min-h-screen overflow-hidden bg-black">
<div className="absolute inset-0 opacity-70" style="background:
      radial-gradient(circle at 20% 20%, rgba(16,185,129,0.08), transparent 30%),
      radial-gradient(circle at 80% 30%, rgba(34,197,94,0.05), transparent 28%),
      radial-gradient(circle at 60% 80%, rgba(14,165,233,0.06), transparent 32%),
      linear-gradient(180deg, rgba(0,0,0,0.98), rgba(3,7,18,0.98));"></div>
<div className="absolute inset-0 opacity-20" style="background-image:
      linear-gradient(rgba(34,197,94,0.12) 0.05rem, transparent 0.05rem),
      linear-gradient(90deg, rgba(34,197,94,0.12) 0.05rem, transparent 0.05rem);
      background-size: 2rem 2rem;"></div>
<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute rounded-full" id="radarSweep" style={{width: '55rem', height: '55rem', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', background: 'conic-gradient(from 0deg, rgba(16, 185, 129, 0.00), rgba(16, 185, 129, 0.00), rgba(16, 185, 129, 0.18), rgba(16, 185, 129, 0.00))', filter: 'blur(0.1rem)', opacity: '0.35'}}></div>
<div className="absolute inset-0" style={{background: 'radial-gradient(circle at center, rgba(16,185,129,0.04), transparent 45%)'}}></div>
</div>
<div className="relative z-10 flex min-h-screen flex-col">
<header className="border-b border-emerald-500/15 bg-zinc-950/80 backdrop-blur">
<div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-6">
<div className="flex items-start gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-300">
<iconify-icon height="22" icon="solar:routing-3-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div className="">
<div className="text-xs uppercase tracking-[0.3em] text-emerald-400/80">Strategic Command</div>
<h1 className="lg:text-3xl text-2xl font-semibold text-white tracking-tight"> Air Combat &amp; Strategic Network System</h1>
<p className="text-sm text-zinc-400 max-w-3xl mt-1">Weighted graph mission planning with shortest-path attacks, safe return routing, minimum-cost base connectivity, dynamic threat zones, and coordinated multi-agent air operations.</p>
</div>
</div>
<div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
<div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-3">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Mode</div>
<div className="mt-1 text-sm font-medium text-emerald-300" id="modeBadge">Auto</div>
</div>
<div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-3">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Mission Time</div>
<div className="mt-1 text-sm font-medium text-zinc-100" id="missionTime">0.0s</div>
</div>
<div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-3">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Destroyed</div>
<div className="mt-1 text-sm font-medium text-red-300" id="destroyedCount">0</div>
</div>
<div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-3">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Efficiency</div>
<div className="mt-1 text-sm font-medium text-cyan-300" id="efficiencyScore">100%</div>
</div>
</div>
</div>
</header>
<main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-4 px-4 py-4 lg:flex-row lg:px-6">
<aside className="w-full shrink-0 lg:w-[22rem]">
<div className="space-y-4">
<section className="rounded-3xl border border-zinc-800 bg-zinc-950/75 p-4 backdrop-blur">
<div className="flex items-center justify-between">
<div>
<h2 className="text-lg font-semibold text-white">Mission Control</h2>
<p className="text-sm text-zinc-400">Launch, assign, and reroute strike aircraft.</p>
</div>
<div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">Live</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<button className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300 transition hover:bg-emerald-500/15" id="autoModeBtn">Auto Mode</button>
<button className="rounded-2xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:bg-zinc-800" id="manualModeBtn">Manual Mode</button>
<button className="col-span-2 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/15" id="startBtn">Start Simulation</button>
<button className="rounded-2xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:bg-zinc-800" id="pauseBtn">Pause</button>
<button className="rounded-2xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:bg-zinc-800" id="resetBtn">Reset</button>
</div>
<div className="mt-4">
<label className="mb-2 block text-xs uppercase tracking-[0.2em] text-zinc-500">Manual target selection</label>
<div className="relative">
<select className="w-full appearance-none rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 pr-10 text-sm text-zinc-100 outline-none transition focus:border-emerald-500/40" id="manualTarget"><option value="E1">Enemy Depot</option><option value="E2">Enemy Radar Base</option><option value="E3">Enemy Airfield</option></select>
<div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-zinc-500">
<iconify-icon height="18" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-3">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Jets</div>
<div className="mt-1 text-sm font-medium text-white" id="jetCount">3</div>
</div>
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-3">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Paths Blocked</div>
<div className="mt-1 text-sm font-medium text-amber-300" id="blockedCount">0</div>
</div>
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-3">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Radar Risk</div>
<div className="mt-1 text-sm font-medium text-red-300" id="riskLevel">Medium</div>
</div>
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-3">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Weather</div>
<div className="mt-1 text-sm font-medium text-cyan-300" id="weatherState">Stable</div>
</div>
</div>
</section>
<section className="rounded-3xl border border-zinc-800 bg-zinc-950/75 p-4 backdrop-blur">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold text-white">Jet Telemetry</h3>
<div className="text-xs text-zinc-500">Fuel / task / route</div>
</div>
<div className="mt-4 space-y-3" id="jetsPanel">
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-3">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-white">Falcon-1</div>
<div className="text-xs text-zinc-500">Idle</div>
</div>
<div className="text-xs" style={{color: '#93c5fd'}}>✈️</div>
</div>
<div className="mt-3">
<div className="mb-1 flex items-center justify-between text-xs text-zinc-500">
<span>Fuel</span>
<span>140.0 / 140</span>
</div>
<div className="h-2 overflow-hidden rounded-full bg-zinc-800">
<div className="h-full rounded-full bg-emerald-400" style={{width: '100%'}}></div>
</div>
</div>
<div className="mt-3 grid grid-cols-2 gap-2 text-xs text-zinc-400">
<div className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-2 py-2">Phase: <span className="text-zinc-200">idle</span></div>
<div className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-2 py-2">Fuel used: <span className="text-zinc-200">0.0</span></div>
</div>
</div>
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-3">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-white">Falcon-2</div>
<div className="text-xs text-zinc-500">Idle</div>
</div>
<div className="text-xs" style={{color: '#67e8f9'}}>✈️</div>
</div>
<div className="mt-3">
<div className="mb-1 flex items-center justify-between text-xs text-zinc-500">
<span>Fuel</span>
<span>150.0 / 150</span>
</div>
<div className="h-2 overflow-hidden rounded-full bg-zinc-800">
<div className="h-full rounded-full bg-emerald-400" style={{width: '100%'}}></div>
</div>
</div>
<div className="mt-3 grid grid-cols-2 gap-2 text-xs text-zinc-400">
<div className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-2 py-2">Phase: <span className="text-zinc-200">idle</span></div>
<div className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-2 py-2">Fuel used: <span className="text-zinc-200">0.0</span></div>
</div>
</div>
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-3">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-white">Falcon-3</div>
<div className="text-xs text-zinc-500">Idle</div>
</div>
<div className="text-xs" style={{color: '#a7f3d0'}}>✈️</div>
</div>
<div className="mt-3">
<div className="mb-1 flex items-center justify-between text-xs text-zinc-500">
<span>Fuel</span>
<span>135.0 / 135</span>
</div>
<div className="h-2 overflow-hidden rounded-full bg-zinc-800">
<div className="h-full rounded-full bg-emerald-400" style={{width: '100%'}}></div>
</div>
</div>
<div className="mt-3 grid grid-cols-2 gap-2 text-xs text-zinc-400">
<div className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-2 py-2">Phase: <span className="text-zinc-200">idle</span></div>
<div className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-2 py-2">Fuel used: <span className="text-zinc-200">0.0</span></div>
</div>
</div>
</div>
</section>
<section className="rounded-3xl border border-zinc-800 bg-zinc-950/75 p-4 backdrop-blur">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold text-white">Algorithm Notes</h3>
<div className="rounded-full border border-zinc-700 bg-zinc-900 px-2 py-1 text-xs text-zinc-400">DAA</div>
</div>
<div className="mt-4 space-y-4 text-sm text-zinc-300">
<div>
<div className="font-medium text-emerald-300">Dijkstra</div>
<p className="mt-1 text-zinc-400">Computes the minimum cumulative edge weight path. Here it drives attack routing and dynamic escape rerouting when radar, weather, or blockages alter edge risk.</p>
<p className="mt-1 text-xs text-zinc-500">Time: O((V + E) log V) with a priority queue.</p>
</div>
<div>
<div className="font-medium text-cyan-300">Prim</div>
<p className="mt-1 text-zinc-400">Builds a minimum spanning tree across friendly bases so command can maintain the lowest-cost logistics and communication network.</p>
<p className="mt-1 text-xs text-zinc-500">Time: O(E log V) with a heap.</p>
</div>
<div>
<div className="font-medium text-amber-300">Real-world mapping</div>
<p className="mt-1 text-zinc-400">Supports resilient infrastructure and smart emergency routing by optimizing connections, reducing travel cost, and adapting to disruptions, aligning with SDG 9 and SDG 11.</p>
</div>
</div>
</section>
</div>
</aside>
<section className="flex-1">
<div className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-3 backdrop-blur">
<div className="mb-3 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
<div>
<h2 className="text-xl font-semibold tracking-tight text-white">Operational Theater</h2>
<p className="text-sm text-zinc-400">Friendly bases, enemy targets, neutral zones, threat corridors, dynamic weather, and real-time strike routes.</p>
</div>
<div className="flex flex-wrap items-center gap-2 text-xs text-zinc-300">
<div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-2"><span className="h-2.5 w-2.5 rounded-full bg-blue-400"></span>Friendly</div>
<div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-2"><span className="h-2.5 w-2.5 rounded-full bg-red-400"></span>Enemy</div>
<div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-2"><span className="h-2.5 w-2.5 rounded-full bg-zinc-400"></span>Neutral</div>
<div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>Active route</div>
<div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-2"><span className="h-2.5 w-2.5 rounded-full bg-cyan-400"></span>MST</div>
<div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-2"><span className="h-2.5 w-2.5 rounded-full bg-amber-400"></span>Blocked</div>
<div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-2"><span className="h-2.5 w-2.5 rounded-full bg-red-500"></span>High risk</div>
</div>
</div>
<div className="relative overflow-hidden rounded-3xl border border-zinc-700 bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
<div className="pointer-events-none absolute inset-0 opacity-100" style="background:
                radial-gradient(circle at center, rgba(24,24,27,0.25), transparent 60%),
                linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0));"></div>
<svg className="block h-[70vh] w-full" id="map" viewbox="0 0 1000 650">
<defs>
<filter id="glowGreen">
<fegaussianblur result="coloredBlur" stddeviation="4"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
<filter id="glowRed">
<fegaussianblur result="coloredBlur" stddeviation="5"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
<filter id="softGlow">
<fegaussianblur result="coloredBlur" stddeviation="2.5"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<g id="mapBase"><line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="80" x2="80" y1="50" y2="600"></line><line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="220" x2="220" y1="50" y2="600"></line><line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="360" x2="360" y1="50" y2="600"></line><line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="500" x2="500" y1="50" y2="600"></line><line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="640" x2="640" y1="50" y2="600"></line><line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="780" x2="780" y1="50" y2="600"></line><line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="920" x2="920" y1="50" y2="600"></line><line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="60" x2="940" y1="70" y2="70"></line><line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="60" x2="940" y1="200" y2="200"></line><line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="60" x2="940" y1="330" y2="330"></line><line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="60" x2="940" y1="460" y2="460"></line><line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="60" x2="940" y1="590" y2="590"></line><text fill="rgba(161,161,170,0.72)" fontSize="12" x="70" y="36">Friendly Sector</text><text fill="rgba(161,161,170,0.72)" fontSize="12" x="425" y="36">Transit Zone</text><text fill="rgba(161,161,170,0.72)" fontSize="12" x="790" y="36">Enemy Sector</text></g>
<g id="radarZones"><circle cx="680" cy="180" fill="rgba(239,68,68,0.08)" filter="url(#glowRed)" r="85.25429589188184" stroke="rgba(248,113,113,0.44)" strokeWidth="2"></circle><circle cx="680" cy="180" fill="rgba(239,68,68,0.04)" r="46.800000000000004" stroke="rgba(248,113,113,0.2)" strokeWidth="1.5"></circle><rect fill="rgba(24,24,27,0.84)" height="18" rx="10" ry="10" stroke="rgba(248,113,113,0.22)" width="88" x="636" y="66"></rect><text fill="rgba(252,165,165,0.95)" fontSize="11" text-anchor="middle" x="680" y="79">Radar Zone</text><circle cx="760" cy="430" fill="rgba(239,68,68,0.08)" filter="url(#glowRed)" r="99.46334520719547" stroke="rgba(248,113,113,0.44)" strokeWidth="2"></circle><circle cx="760" cy="430" fill="rgba(239,68,68,0.04)" r="54.6" stroke="rgba(248,113,113,0.2)" strokeWidth="1.5"></circle><rect fill="rgba(24,24,27,0.84)" height="18" rx="10" ry="10" stroke="rgba(248,113,113,0.22)" width="88" x="716" y="301"></rect><text fill="rgba(252,165,165,0.95)" fontSize="11" text-anchor="middle" x="760" y="314">Radar Zone</text></g>
<g id="edges"><line stroke="rgba(0,0,0,0.55)" strokeLinecap="round" strokeWidth="7" x1="150" x2="180" y1="120" y2="320"></line><line stroke="rgba(212,212,216,0.5)" strokeLinecap="round" strokeWidth="2.8" x1="150" x2="180" y1="120" y2="320"></line><line stroke="rgba(0,0,0,0.55)" strokeLinecap="round" strokeWidth="7" x1="180" x2="220" y1="320" y2="540"></line><line stroke="rgba(212,212,216,0.5)" strokeLinecap="round" strokeWidth="2.8" x1="180" x2="220" y1="320" y2="540"></line><line stroke="rgba(0,0,0,0.55)" strokeLinecap="round" strokeWidth="7" x1="150" x2="420" y1="120" y2="150"></line><line stroke="rgba(212,212,216,0.5)" strokeLinecap="round" strokeWidth="2.8" x1="150" x2="420" y1="120" y2="150"></line><line stroke="rgba(0,0,0,0.55)" strokeLinecap="round" strokeWidth="7" x1="180" x2="420" y1="320" y2="150"></line><line stroke="rgba(212,212,216,0.5)" strokeLinecap="round" strokeWidth="2.8" x1="180" x2="420" y1="320" y2="150"></line><line stroke="rgba(0,0,0,0.55)" strokeLinecap="round" strokeWidth="7" x1="180" x2="420" y1="320" y2="330"></line><line stroke="rgba(212,212,216,0.5)" strokeLinecap="round" strokeWidth="2.8" x1="180" x2="420" y1="320" y2="330"></line><line stroke="rgba(0,0,0,0.55)" strokeLinecap="round" strokeWidth="7" x1="220" x2="420" y1="540" y2="330"></line><line stroke="rgba(212,212,216,0.5)" strokeLinecap="round" strokeWidth="2.8" x1="220" x2="420" y1="540" y2="330"></line><line stroke="rgba(0,0,0,0.55)" strokeLinecap="round" strokeWidth="7" x1="220" x2="500" y1="540" y2="540"></line><line stroke="rgba(212,212,216,0.5)" strokeLinecap="round" strokeWidth="2.8" x1="220" x2="500" y1="540" y2="540"></line><line stroke="rgba(0,0,0,0.55)" strokeLinecap="round" strokeWidth="7" x1="420" x2="420" y1="150" y2="330"></line><line stroke="rgba(212,212,216,0.5)" strokeLinecap="round" strokeWidth="2.8" x1="420" x2="420" y1="150" y2="330"></line><line stroke="rgba(0,0,0,0.55)" strokeLinecap="round" strokeWidth="7" x1="420" x2="500" y1="330" y2="540"></line><line stroke="rgba(212,212,216,0.5)" strokeLinecap="round" strokeWidth="2.8" x1="420" x2="500" y1="330" y2="540"></line><line stroke="rgba(0,0,0,0.55)" strokeLinecap="round" strokeWidth="7" x1="420" x2="820" y1="150" y2="110"></line><line stroke="rgba(250,204,21,0.76)" strokeLinecap="round" strokeWidth="3" x1="420" x2="820" y1="150" y2="110"></line><line stroke="rgba(0,0,0,0.55)" strokeLinecap="round" strokeWidth="7" x1="420" x2="820" y1="150" y2="280"></line><line stroke="rgba(239,68,68,0.88)" strokeLinecap="round" strokeWidth="3.2" x1="420" x2="820" y1="150" y2="280"></line><line stroke="rgba(0,0,0,0.55)" strokeLinecap="round" strokeWidth="7" x1="420" x2="820" y1="330" y2="280"></line><line stroke="rgba(250,204,21,0.76)" strokeLinecap="round" strokeWidth="3" x1="420" x2="820" y1="330" y2="280"></line><line stroke="rgba(0,0,0,0.55)" strokeLinecap="round" strokeWidth="7" x1="420" x2="840" y1="330" y2="500"></line><line stroke="rgba(239,68,68,0.88)" strokeLinecap="round" strokeWidth="3.2" x1="420" x2="840" y1="330" y2="500"></line><line stroke="rgba(0,0,0,0.55)" strokeLinecap="round" strokeWidth="7" x1="500" x2="840" y1="540" y2="500"></line><line stroke="rgba(250,204,21,0.76)" strokeLinecap="round" strokeWidth="3" x1="500" x2="840" y1="540" y2="500"></line><line stroke="rgba(0,0,0,0.55)" strokeLinecap="round" strokeWidth="7" x1="500" x2="820" y1="540" y2="280"></line><line stroke="rgba(239,68,68,0.88)" strokeLinecap="round" strokeWidth="3.2" x1="500" x2="820" y1="540" y2="280"></line><line stroke="rgba(0,0,0,0.55)" strokeLinecap="round" strokeWidth="7" x1="180" x2="820" y1="320" y2="280"></line><line stroke="rgba(250,204,21,0.76)" strokeLinecap="round" strokeWidth="3" x1="180" x2="820" y1="320" y2="280"></line><line stroke="rgba(0,0,0,0.55)" strokeLinecap="round" strokeWidth="7" x1="150" x2="820" y1="120" y2="110"></line><line stroke="rgba(239,68,68,0.88)" strokeLinecap="round" strokeWidth="3.2" x1="150" x2="820" y1="120" y2="110"></line></g>
<g id="edgeLabels"><rect fill="rgba(9,9,11,0.88)" height="18" rx="8" ry="8" stroke="rgba(63,63,70,0.9)" width="32" x="149" y="210"></rect><text fill="rgba(244,244,245,0.92)" fontSize="10" text-anchor="middle" x="165" y="222.5">12</text><rect fill="rgba(9,9,11,0.88)" height="18" rx="8" ry="8" stroke="rgba(63,63,70,0.9)" width="32" x="184" y="420"></rect><text fill="rgba(244,244,245,0.92)" fontSize="10" text-anchor="middle" x="200" y="432.5">14</text><rect fill="rgba(9,9,11,0.88)" height="18" rx="8" ry="8" stroke="rgba(63,63,70,0.9)" width="32" x="269" y="125"></rect><text fill="rgba(244,244,245,0.92)" fontSize="10" text-anchor="middle" x="285" y="137.5">18</text><rect fill="rgba(9,9,11,0.88)" height="18" rx="8" ry="8" stroke="rgba(63,63,70,0.9)" width="32" x="284" y="225"></rect><text fill="rgba(244,244,245,0.92)" fontSize="10" text-anchor="middle" x="300" y="237.5">16</text><rect fill="rgba(9,9,11,0.88)" height="18" rx="8" ry="8" stroke="rgba(63,63,70,0.9)" width="32" x="284" y="315"></rect><text fill="rgba(244,244,245,0.92)" fontSize="10" text-anchor="middle" x="300" y="327.5">17</text><rect fill="rgba(9,9,11,0.88)" height="18" rx="8" ry="8" stroke="rgba(63,63,70,0.9)" width="32" x="304" y="425"></rect><text fill="rgba(244,244,245,0.92)" fontSize="10" text-anchor="middle" x="320" y="437.5">20</text><rect fill="rgba(9,9,11,0.88)" height="18" rx="8" ry="8" stroke="rgba(63,63,70,0.9)" width="32" x="344" y="530"></rect><text fill="rgba(244,244,245,0.92)" fontSize="10" text-anchor="middle" x="360" y="542.5">16</text><rect fill="rgba(9,9,11,0.88)" height="18" rx="8" ry="8" stroke="rgba(63,63,70,0.9)" width="32" x="404" y="230"></rect><text fill="rgba(244,244,245,0.92)" fontSize="10" text-anchor="middle" x="420" y="242.5">13</text><rect fill="rgba(9,9,11,0.88)" height="18" rx="8" ry="8" stroke="rgba(63,63,70,0.9)" width="32" x="444" y="425"></rect><text fill="rgba(244,244,245,0.92)" fontSize="10" text-anchor="middle" x="460" y="437.5">15</text><rect fill="rgba(9,9,11,0.88)" height="18" rx="8" ry="8" stroke="rgba(63,63,70,0.9)" width="32" x="604" y="120"></rect><text fill="rgba(244,244,245,0.92)" fontSize="10" text-anchor="middle" x="620" y="132.5">24</text><rect fill="rgba(9,9,11,0.88)" height="18" rx="8" ry="8" stroke="rgba(63,63,70,0.9)" width="32" x="604" y="205"></rect><text fill="rgba(244,244,245,0.92)" fontSize="10" text-anchor="middle" x="620" y="217.5">26</text><rect fill="rgba(9,9,11,0.88)" height="18" rx="8" ry="8" stroke="rgba(63,63,70,0.9)" width="32" x="604" y="295"></rect><text fill="rgba(244,244,245,0.92)" fontSize="10" text-anchor="middle" x="620" y="307.5">23</text><rect fill="rgba(9,9,11,0.88)" height="18" rx="8" ry="8" stroke="rgba(63,63,70,0.9)" width="32" x="614" y="405"></rect><text fill="rgba(244,244,245,0.92)" fontSize="10" text-anchor="middle" x="630" y="417.5">25</text><rect fill="rgba(9,9,11,0.88)" height="18" rx="8" ry="8" stroke="rgba(63,63,70,0.9)" width="32" x="654" y="510"></rect><text fill="rgba(244,244,245,0.92)" fontSize="10" text-anchor="middle" x="670" y="522.5">21</text><rect fill="rgba(9,9,11,0.88)" height="18" rx="8" ry="8" stroke="rgba(63,63,70,0.9)" width="32" x="644" y="400"></rect><text fill="rgba(244,244,245,0.92)" fontSize="10" text-anchor="middle" x="660" y="412.5">28</text><rect fill="rgba(9,9,11,0.88)" height="18" rx="8" ry="8" stroke="rgba(63,63,70,0.9)" width="32" x="484" y="290"></rect><text fill="rgba(244,244,245,0.92)" fontSize="10" text-anchor="middle" x="500" y="302.5">38</text><rect fill="rgba(9,9,11,0.88)" height="18" rx="8" ry="8" stroke="rgba(63,63,70,0.9)" width="32" x="469" y="105"></rect><text fill="rgba(244,244,245,0.92)" fontSize="10" text-anchor="middle" x="485" y="117.5">44</text></g>
<g id="mstEdges"><line filter="url(#softGlow)" stroke="rgba(34,211,238,0.82)" stroke-dasharray="7 7" strokeLinecap="round" strokeWidth="2.4" x1="150" x2="180" y1="120" y2="320"></line><line filter="url(#softGlow)" stroke="rgba(34,211,238,0.82)" stroke-dasharray="7 7" strokeLinecap="round" strokeWidth="2.4" x1="180" x2="220" y1="320" y2="540"></line></g>
<g id="activePaths"></g>
<g id="fogLayer"><circle cx="500" cy="540" fill="rgba(0,0,0,0.66)" r="40" stroke="rgba(63,63,70,0.45)"></circle><text fill="rgba(161,161,170,0.9)" fontSize="16" text-anchor="middle" x="500" y="544">?</text><circle cx="820" cy="110" fill="rgba(0,0,0,0.66)" r="40" stroke="rgba(63,63,70,0.45)"></circle><text fill="rgba(161,161,170,0.9)" fontSize="16" text-anchor="middle" x="820" y="114">?</text><circle cx="820" cy="280" fill="rgba(0,0,0,0.66)" r="40" stroke="rgba(63,63,70,0.45)"></circle><text fill="rgba(161,161,170,0.9)" fontSize="16" text-anchor="middle" x="820" y="284">?</text><circle cx="840" cy="500" fill="rgba(0,0,0,0.66)" r="40" stroke="rgba(63,63,70,0.45)"></circle><text fill="rgba(161,161,170,0.9)" fontSize="16" text-anchor="middle" x="840" y="504">?</text></g>
<g id="nodes"><g style={{cursor: 'default'}}><circle cx="150" cy="120" fill="rgba(96,165,250,0.16)" filter="url(#softGlow)" r="18"></circle><circle cx="150" cy="120" fill="#60a5fa" r="10" stroke="#fafafa" strokeWidth="2"></circle><path d="M 145 120 L 155 120 M 150 115 L 150 125" stroke="white" strokeLinecap="round" strokeWidth="1.6"></path><rect fill="rgba(9,9,11,0.9)" height="16" rx="8" ry="8" stroke="rgba(96,165,250,0.35)" width="32" x="134" y="84"></rect><text fill="#fafafa" fontSize="9.5" text-anchor="middle" x="150" y="95">F1</text><rect fill="rgba(9,9,11,0.86)" height="30" rx="10" ry="10" stroke="rgba(63,63,70,0.9)" width="79.3" x="164" y="97"></rect><text fill="#f4f4f5" fontSize="11.5" x="172" y="110">North Command</text><text fill="#93c5fd" fontSize="9.5" x="172" y="123">friendly</text></g><g style={{cursor: 'default'}}><circle cx="180" cy="320" fill="rgba(96,165,250,0.16)" filter="url(#softGlow)" r="18"></circle><circle cx="180" cy="320" fill="#60a5fa" r="10" stroke="#fafafa" strokeWidth="2"></circle><path d="M 175 320 L 185 320 M 180 315 L 180 325" stroke="white" strokeLinecap="round" strokeWidth="1.6"></path><rect fill="rgba(9,9,11,0.9)" height="16" rx="8" ry="8" stroke="rgba(96,165,250,0.35)" width="32" x="164" y="284"></rect><text fill="#fafafa" fontSize="9.5" text-anchor="middle" x="180" y="295">F2</text><rect fill="rgba(9,9,11,0.86)" height="30" rx="10" ry="10" stroke="rgba(63,63,70,0.9)" width="85.39999999999999" x="194" y="297"></rect><text fill="#f4f4f5" fontSize="11.5" x="202" y="310">Central Hangar</text><text fill="#93c5fd" fontSize="9.5" x="202" y="323">friendly</text></g><g style={{cursor: 'default'}}><circle cx="220" cy="540" fill="rgba(96,165,250,0.16)" filter="url(#softGlow)" r="18"></circle><circle cx="220" cy="540" fill="#60a5fa" r="10" stroke="#fafafa" strokeWidth="2"></circle><path d="M 215 540 L 225 540 M 220 535 L 220 545" stroke="white" strokeLinecap="round" strokeWidth="1.6"></path><rect fill="rgba(9,9,11,0.9)" height="16" rx="8" ry="8" stroke="rgba(96,165,250,0.35)" width="32" x="204" y="504"></rect><text fill="#fafafa" fontSize="9.5" text-anchor="middle" x="220" y="515">F3</text><rect fill="rgba(9,9,11,0.86)" height="30" rx="10" ry="10" stroke="rgba(63,63,70,0.9)" width="85.39999999999999" x="234" y="517"></rect><text fill="#f4f4f5" fontSize="11.5" x="242" y="530">Coastal Runway</text><text fill="#93c5fd" fontSize="9.5" x="242" y="543">friendly</text></g><g style={{cursor: 'default'}}><circle cx="420" cy="150" fill="rgba(212,212,216,0.14)" filter="url(#softGlow)" r="18"></circle><circle cx="420" cy="150" fill="#d4d4d8" r="10" stroke="#fafafa" strokeWidth="2"></circle><rect fill="rgba(9,9,11,0.9)" height="16" rx="8" ry="8" stroke="rgba(161,161,170,0.3)" width="32" x="404" y="114"></rect><text fill="#fafafa" fontSize="9.5" text-anchor="middle" x="420" y="125">N1</text><rect fill="rgba(9,9,11,0.86)" height="30" rx="10" ry="10" stroke="rgba(63,63,70,0.9)" width="79.3" x="434" y="127"></rect><text fill="#f4f4f5" fontSize="11.5" x="442" y="140">Neutral Ridge</text><text fill="#d4d4d8" fontSize="9.5" x="442" y="153">neutral</text></g><g style={{cursor: 'default'}}><circle cx="420" cy="330" fill="rgba(212,212,216,0.14)" filter="url(#softGlow)" r="18"></circle><circle cx="420" cy="330" fill="#d4d4d8" r="10" stroke="#fafafa" strokeWidth="2"></circle><rect fill="rgba(9,9,11,0.9)" height="16" rx="8" ry="8" stroke="rgba(161,161,170,0.3)" width="32" x="404" y="294"></rect><text fill="#fafafa" fontSize="9.5" text-anchor="middle" x="420" y="305">N2</text><rect fill="rgba(9,9,11,0.86)" height="30" rx="10" ry="10" stroke="rgba(63,63,70,0.9)" width="109.8" x="434" y="307"></rect><text fill="#f4f4f5" fontSize="11.5" x="442" y="320">Civil Air Corridor</text><text fill="#d4d4d8" fontSize="9.5" x="442" y="333">neutral</text></g></g>
<g id="explosions"></g>
<g id="jets"><g><circle cx="150" cy="120" fill="rgba(16,185,129,0.1)" filter="url(#glowGreen)" r="18"></circle><text fontSize="18" text-anchor="middle" x="150" y="125">✈️</text><rect fill="rgba(9,9,11,0.88)" height="18" rx="9" ry="9" stroke="rgba(63,63,70,0.9)" width="54" x="162" y="108"></rect><text fill="#93c5fd" fontSize="10" text-anchor="middle" x="189" y="121">Falcon-1</text></g><g><circle cx="180" cy="320" fill="rgba(16,185,129,0.1)" filter="url(#glowGreen)" r="18"></circle><text fontSize="18" text-anchor="middle" x="180" y="325">✈️</text><rect fill="rgba(9,9,11,0.88)" height="18" rx="9" ry="9" stroke="rgba(63,63,70,0.9)" width="54" x="192" y="308"></rect><text fill="#67e8f9" fontSize="10" text-anchor="middle" x="219" y="321">Falcon-2</text></g><g><circle cx="220" cy="540" fill="rgba(16,185,129,0.1)" filter="url(#glowGreen)" r="18"></circle><text fontSize="18" text-anchor="middle" x="220" y="545">✈️</text><rect fill="rgba(9,9,11,0.88)" height="18" rx="9" ry="9" stroke="rgba(63,63,70,0.9)" width="54" x="232" y="528"></rect><text fill="#a7f3d0" fontSize="10" text-anchor="middle" x="259" y="541">Falcon-3</text></g></g>
</svg>
<div className="pointer-events-none absolute left-3 top-3 rounded-2xl border border-zinc-700 bg-zinc-950/85 px-3 py-2 text-xs text-zinc-300 backdrop-blur">
                Clear graph view · labeled links · highlighted active paths · visible network layers
              </div>
<div className="pointer-events-none absolute bottom-3 left-3 right-3 grid gap-2 sm:grid-cols-4">
<div className="rounded-2xl border border-zinc-700 bg-zinc-950/80 px-3 py-2 text-xs text-zinc-300 backdrop-blur">
<span className="text-zinc-500">Blue nodes</span> friendly bases
                </div>
<div className="rounded-2xl border border-zinc-700 bg-zinc-950/80 px-3 py-2 text-xs text-zinc-300 backdrop-blur">
<span className="text-zinc-500">Red nodes</span> enemy targets
                </div>
<div className="rounded-2xl border border-zinc-700 bg-zinc-950/80 px-3 py-2 text-xs text-zinc-300 backdrop-blur">
<span className="text-zinc-500">Numbers on links</span> fuel cost
                </div>
<div className="rounded-2xl border border-zinc-700 bg-zinc-950/80 px-3 py-2 text-xs text-zinc-300 backdrop-blur">
<span className="text-zinc-500">Brighter lines</span> current selected routes
                </div>
</div>
</div>
<div className="mt-4 grid gap-4 lg:grid-cols-3">
<div className="rounded-3xl border border-zinc-800 bg-zinc-950/75 p-4">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold text-white">Mission Results</h3>
<iconify-icon className="text-cyan-300" height="18" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-3">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Time</div>
<div className="mt-1 text-sm font-medium text-white" id="resultTime">0.0s</div>
</div>
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-3">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Fuel</div>
<div className="mt-1 text-sm font-medium text-amber-300" id="resultFuel">0.0</div>
</div>
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-3">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Success</div>
<div className="mt-1 text-sm font-medium text-emerald-300" id="resultSuccess">0%</div>
</div>
</div>
</div>
<div className="rounded-3xl border border-zinc-800 bg-zinc-950/75 p-4 lg:col-span-2">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold text-white">Command Log</h3>
<div className="text-xs text-zinc-500">Event stream</div>
</div>
<div className="mt-4 max-h-40 space-y-2 overflow-auto pr-1" id="logPanel">
<div className="rounded-2xl border px-3 py-2 text-xs text-zinc-300 border-zinc-700 bg-zinc-900/80">
<div className="mb-1 text-[0.65rem] uppercase tracking-[0.18em] opacity-70">10:57:41 AM</div>
<div>Simulation reset and command network restored</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
</div>
</div>


    </>
  );
}
