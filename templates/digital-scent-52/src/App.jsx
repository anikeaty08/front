import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Data sets (agradables y desagradables)
    const datasets = {
      good: [
        {
          key: 'citrico',
          name: 'Cítrico',
          icon: 'citrus',
          colors: ['#FFE066', '#F59E0B'],
          accent: '#F7B731',
          mood: 'Energizante',
          tone: 'Brillante, chispeante, jugoso',
          notes: ['Limón', 'Naranja', 'Bergamota', 'Pomelo'],
          pairs: ['Herbal', 'Fresco', 'Floral'],
          description: 'Explosión de cítricos maduros: pieles vibrantes, pulpa dulce y un destello efervescente.'
        },
        {
          key: 'floral',
          name: 'Floral',
          icon: 'flower-2',
          colors: ['#F0ABFC', '#D946EF'],
          accent: '#E879F9',
          mood: 'Romántico',
          tone: 'Suave, almizclado, envolvente',
          notes: ['Rosa', 'Jazmín', 'Peonía', 'Violeta'],
          pairs: ['Dulce', 'Cítrico', 'Amaderado'],
          description: 'Pétalos sedosos y luz dorada. Un bouquet que respira elegancia y calma.'
        },
        {
          key: 'herbal',
          name: 'Herbal',
          icon: 'leaf',
          colors: ['#A7F3D0', '#10B981'],
          accent: '#34D399',
          mood: 'Equilibrante',
          tone: 'Verde, crujiente, limpio',
          notes: ['Menta', 'Albahaca', 'Tomillo', 'Eucalipto'],
          pairs: ['Cítrico', 'Fresco', 'Terroso'],
          description: 'Jardín recién cortado: tallos verdes, hojas brillantes y frescura aromática.'
        },
        {
          key: 'amaderado',
          name: 'Amaderado',
          icon: 'tree-pine',
          colors: ['#FBBF24', '#78350F'],
          accent: '#B45309',
          mood: 'Cálido',
          tone: 'Resinoso, seco, acogedor',
          notes: ['Cedro', 'Sándalo', 'Pino', 'Vetiver'],
          pairs: ['Floral', 'Especiado', 'Dulce'],
          description: 'Vetas cálidas, resinas y corteza. Profundidad que abraza y da estructura.'
        },
        {
          key: 'especiado',
          name: 'Especiado',
          icon: 'flame',
          colors: ['#FB7185', '#EF4444'],
          accent: '#F43F5E',
          mood: 'Vibrante',
          tone: 'Picante, exótico, cálido',
          notes: ['Canela', 'Clavo', 'Cardamomo', 'Pimienta'],
          pairs: ['Dulce', 'Amaderado', 'Floral'],
          description: 'Chispa y calor. Especias que despiertan sentidos y dan carácter.'
        },
        {
          key: 'dulce',
          name: 'Dulce',
          icon: 'candy',
          colors: ['#F9A8D4', '#F472B6'],
          accent: '#FB7185',
          mood: 'Confort',
          tone: 'Gourmand, cremoso, suave',
          notes: ['Vainilla', 'Caramelo', 'Miel', 'Algodón de azúcar'],
          pairs: ['Floral', 'Especiado', 'Amaderado'],
          description: 'Una nube aterciopelada de dulzor que reconforta y envuelve.'
        },
        {
          key: 'marino',
          name: 'Marino',
          icon: 'waves',
          colors: ['#93C5FD', '#0EA5E9'],
          accent: '#38BDF8',
          mood: 'Libre',
          tone: 'Salino, acuoso, aireado',
          notes: ['Brisa marina', 'Algas', 'Ozono', 'Sal'],
          pairs: ['Fresco', 'Herbal', 'Cítrico'],
          description: 'Rocío salado y espuma azul. Horizonte abierto y respiración profunda.'
        },
        {
          key: 'terroso',
          name: 'Terroso',
          icon: 'sprout',
          colors: ['#A3E635', '#4D7C0F'],
          accent: '#84CC16',
          mood: 'Raíz',
          tone: 'Húmedo, profundo, natural',
          notes: ['Musc', 'Pachulí', 'Musgo', 'Suelo húmedo'],
          pairs: ['Herbal', 'Amaderado', 'Floral'],
          description: 'Tierra tras la lluvia: humedad noble, hojas y quietud mineral.'
        },
        {
          key: 'ahumado',
          name: 'Ahumado',
          icon: 'cloud-fog',
          colors: ['#9CA3AF', '#111827'],
          accent: '#6B7280',
          mood: 'Misterio',
          tone: 'Seco, tostado, denso',
          notes: ['Humo', 'Cuero', 'Brezo', 'Té negro'],
          pairs: ['Amaderado', 'Especiado', 'Dulce'],
          description: 'Brasas y sombras. Un trazo oscuro que envuelve con calma.'
        },
        {
          key: 'fresco',
          name: 'Fresco',
          icon: 'wind',
          colors: ['#A5F3FC', '#22D3EE'],
          accent: '#67E8F9',
          mood: 'Revitalizante',
          tone: 'Limpio, cristalino, ligero',
          notes: ['Ozono', 'Pepino', 'Hierba fresca', 'Lima'],
          pairs: ['Cítrico', 'Herbal', 'Marino'],
          description: 'Brisas frías, notas acuosas y un toque cítrico que despeja la mente.'
        },
      ],
      bad: [
        {
          key: 'moho',
          name: 'Moho',
          icon: 'bug',
          colors: ['#A3A3A3', '#525252'],
          accent: '#737373',
          mood: 'Pesado',
          tone: 'Húmedo, rancio, terroso',
          notes: ['Humedad', 'Hongos', 'Sótano', 'Viejo'],
          pairs: ['Humedad', 'Drenaje', 'Terroso'],
          description: 'Olor a lugares cerrados y húmedos, con resonancias de hongos y polvo.'
        },
        {
          key: 'humedad',
          name: 'Humedad',
          icon: 'cloud-drizzle',
          colors: ['#60A5FA', '#334155'],
          accent: '#64748B',
          mood: 'Denso',
          tone: 'Acuoso, estancado',
          notes: ['Estanque', 'Ropa mojada', 'Pared húmeda', 'Sótano'],
          pairs: ['Moho', 'Drenaje', 'Ahumado'],
          description: 'Aire cargado y estancado con notas frías y paredes mojadas.'
        },
        {
          key: 'drenaje',
          name: 'Drenaje',
          icon: 'alert-triangle',
          colors: ['#F59E0B', '#92400E'],
          accent: '#F59E0B',
          mood: 'Fuerte',
          tone: 'Sulfurado, metálico',
          notes: ['Azufre', 'Tubería', 'Hierro', 'Gas'],
          pairs: ['Huevo', 'Amoniaco', 'Basura'],
          description: 'Notas sulfurosas y metálicas que recuerdan tuberías y sifones.'
        },
        {
          key: 'basura',
          name: 'Basura',
          icon: 'trash-2',
          colors: ['#F43F5E', '#9F1239'],
          accent: '#FB7185',
          mood: 'Nauseoso',
          tone: 'Agrio, fermentado',
          notes: ['Orgánico', 'Fermento', 'Ácido', 'Restos'],
          pairs: ['Drenaje', 'Humedad', 'Moho'],
          description: 'Fermentos y acidez punzante. La mezcla de residuos al descomponerse.'
        },
        {
          key: 'tabaco-rancio',
          name: 'Tabaco rancio',
          icon: 'skull',
          colors: ['#9CA3AF', '#1F2937'],
          accent: '#6B7280',
          mood: 'Pesado',
          tone: 'Tostado, rancio',
          notes: ['Ceniza', 'Alquitrán', 'Humo viejo', 'Tela impregnada'],
          pairs: ['Moho', 'Basura', 'Ahumado'],
          description: 'Rastro persistente de humo viejo y ceniza adherida a superficies.'
        },
        {
          key: 'sudor',
          name: 'Sudor',
          icon: 'droplets',
          colors: ['#F59E0B', '#C2410C'],
          accent: '#EA580C',
          mood: 'Punzante',
          tone: 'Ácido, animal',
          notes: ['Acridez', 'Calor', 'Textil', 'Salado'],
          pairs: ['Amoniaco', 'Basura', 'Humedad'],
          description: 'Notas ácidas y saladas con carácter corporal marcado.'
        },
        {
          key: 'amoniaco',
          name: 'Amoniaco',
          icon: 'flask-conical',
          colors: ['#A3E635', '#065F46'],
          accent: '#84CC16',
          mood: 'Irritante',
          tone: 'Químico, alcalino',
          notes: ['Limpieza', 'Solvente', 'Agudo', 'Picor'],
          pairs: ['Drenaje', 'Sudor', 'Químico'],
          description: 'Un golpe químico, punzante y seco que invade la nariz.'
        },
        {
          key: 'pescado',
          name: 'Pescado',
          icon: 'fish',
          colors: ['#60A5FA', '#0C4A6E'],
          accent: '#38BDF8',
          mood: 'Persistente',
          tone: 'Marino, rancio',
          notes: ['Mercado', 'Aceite', 'Rancio', 'Salobre'],
          pairs: ['Basura', 'Humedad', 'Drenaje'],
          description: 'Marino rancio con nota aceitada que se adhiere al ambiente.'
        },
        {
          key: 'huevo',
          name: 'Huevo',
          icon: 'egg',
          colors: ['#FDE047', '#92400E'],
          accent: '#FACC15',
          mood: 'Sulfurado',
          tone: 'Azufre, agrio',
          notes: ['Yema', 'Azufre', 'Cocido', 'Sulfuros'],
          pairs: ['Drenaje', 'Amoniaco', 'Basura'],
          description: 'Notas claras a azufre con un borde agrio característico.'
        },
        {
          key: 'quimico',
          name: 'Químico',
          icon: 'shield-alert',
          colors: ['#22D3EE', '#0EA5E9'],
          accent: '#06B6D4',
          mood: 'Artificial',
          tone: 'Solvente, plástico',
          notes: ['Disolvente', 'Pintura', 'Plástico', 'Pegamento'],
          pairs: ['Amoniaco', 'Drenaje', 'Huevo'],
          description: 'Aromas sintéticos: solvente, pinturas frescas y plásticos.'
        },
      ]
    };

    // Votes (placeholder) - keys must match dataset keys
    const votes = {
      good: { citrico: 12, floral: 8, herbal: 10, amaderado: 6, especiado: 4, dulce: 7, marino: 9, terroso: 3, ahumado: 5, fresco: 14 },
      bad:  { moho: 5, humedad: 7, drenaje: 3, basura: 6, 'tabaco-rancio': 4, sudor: 2, amoniaco: 3, pescado: 5, huevo: 2, quimico: 4 }
    };

    // Site rankings data
    const siteRankings = [
      { name: 'elpais.com', icon: 'newspaper', votes: { floral: 35, citrico: 28, fresco: 22, herbal: 15 } },
      { name: 'twitter.com', icon: 'message-circle', votes: { basura: 42, amoniaco: 28, moho: 18, sudor: 12 } },
      { name: 'medium.com', icon: 'book-open', votes: { amaderado: 38, dulce: 25, floral: 20, especiado: 17 } },
      { name: 'reddit.com', icon: 'users', votes: { moho: 34, drenaje: 26, humedad: 22, basura: 18 } },
      { name: 'instagram.com', icon: 'camera', votes: { floral: 45, dulce: 30, citrico: 15, fresco: 10 } },
      { name: 'github.com', icon: 'code', votes: { fresco: 40, herbal: 28, marino: 20, citrico: 12 } },
      { name: 'youtube.com', icon: 'play-circle', votes: { dulce: 32, floral: 28, especiado: 22, citrico: 18 } },
      { name: 'linkedin.com', icon: 'briefcase', votes: { amaderado: 36, especiado: 30, ahumado: 20, terroso: 14 } },
      { name: 'tiktok.com', icon: 'music', votes: { dulce: 48, floral: 26, citrico: 16, fresco: 10 } },
      { name: 'facebook.com', icon: 'users-2', votes: { humedad: 38, moho: 30, basura: 20, drenaje: 12 } },
    ];

    // Elements
    const elements = {
      ambient: document.getElementById('ambient'),
      scene: document.getElementById('scene'),
      wheel: document.getElementById('wheel'),
      segments: Array.from(document.querySelectorAll('#segments path')),
      labels: document.getElementById('labels'),
      badges: document.getElementById('badges'),
      aura: document.getElementById('aura'),
      centerIcon: document.getElementById('centerIcon'),
      centerName: document.getElementById('centerName'),
      badge: document.getElementById('badge'),
      detailIcon: document.getElementById('detailIcon'),
      detailName: document.getElementById('detailName'),
      detailTone: document.getElementById('detailTone'),
      detailMood: document.getElementById('detailMood'),
      notes: document.getElementById('notes'),
      pairs: document.getElementById('pairs'),
      description: document.getElementById('description'),
      suggestion: document.getElementById('suggestion'),
      particles: document.getElementById('particles'),
      randomBtn: document.getElementById('randomBtn'),
      randomBtn2: document.getElementById('randomBtn2'),
      voteTotal: document.getElementById('voteTotal'),
      modeGood: document.getElementById('modeGood'),
      modeBad: document.getElementById('modeBad'),
      rankingsContainer: document.getElementById('rankingsContainer'),
      demoBtn: document.getElementById('demoBtn'),
      demoModal: document.getElementById('demoModal'),
      closeModal: document.getElementById('closeModal'),
      scentSelector: document.getElementById('scentSelector'),
      successCheck: document.getElementById('successCheck'),
      replayDemo: document.getElementById('replayDemo'),
      step1: document.getElementById('step1'),
      step2: document.getElementById('step2'),
      step3: document.getElementById('step3'),
      heatmapGrid: document.getElementById('heatmapGrid'),
    };

    // State
    let mode = 'good';
    let scents = datasets[mode];
    let currentIndex = 9; // default: Fresco (good dataset)
    let rotationAngle = 0;
    let dragging = false;
    let startAngle = 0;
    let startRotation = 0;
    let demoTimeout;

    function applyIconStroke() {
      document.querySelectorAll('svg.lucide').forEach(svg => {
        svg.setAttribute('stroke-width', '1.5');
      });
    }

    function colorizeSegments(activeIdx) {
      elements.segments.forEach((seg, i) => {
        const s = scents[i];
        const base = 'rgba(255,255,255,';
        const active = i === activeIdx;
        const fill = active ? `url(#grad-${i})` : `${base}0.04)`;
        const stroke = active ? s.accent : 'rgba(255,255,255,0.12)';
        seg.style.fill = fill;
        seg.style.stroke = stroke;
        seg.style.strokeWidth = active ? '2' : '1.5';
        seg.style.filter = active ? 'drop-shadow(0 0 12px rgba(255,255,255,0.05))' : 'none';
      });
    }

    function ensureGradients() {
      const existing = elements.wheel.querySelector('#linear-gradients');
      if (existing) existing.remove();
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      defs.setAttribute('id', 'linear-gradients');
      scents.forEach((s, i) => {
        const lg = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        lg.setAttribute('id', `grad-${i}`);
        lg.setAttribute('x1', '0%');
        lg.setAttribute('y1', '0%');
        lg.setAttribute('x2', '100%');
        lg.setAttribute('y2', '0%');
        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', s.colors[0]);
        stop1.setAttribute('stop-opacity', '0.9');
        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('stop-color', s.colors[1]);
        stop2.setAttribute('stop-opacity', '0.9');
        lg.appendChild(stop1);
        lg.appendChild(stop2);
        defs.appendChild(lg);
      });
      elements.wheel.insertBefore(defs, elements.wheel.firstChild);
    }

    function updateParticles(accent) {
      elements.particles.querySelectorAll('span').forEach((p, idx) => {
        p.style.background = accent;
        p.style.opacity = 0.20 + (idx % 3) * 0.02;
        p.style.filter = 'blur(24px)';
      });
    }

    function updateSuggestion(idx) {
      const s = scents[idx];
      const [p1, p2] = s.pairs;
      const map = Object.fromEntries(scents.map(x => [x.name, x]));
      const i1 = map[p1]?.icon || 'sparkles';
      const i2 = map[p2]?.icon || 'sparkles';
      elements.suggestion.innerHTML = `
        <i data-lucide="${i1}" class="w-3.5 h-3.5"></i>
        +
        <i data-lucide="${i2}" class="w-3.5 h-3.5"></i>
      `;
      lucide.createIcons();
      applyIconStroke();
    }

    function chip(label, colorA, colorB) {
      const div = document.createElement('div');
      div.className = 'inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs ring-1 ring-white/10';
      div.style.background = 'rgba(255,255,255,0.04)';
      div.innerHTML = `
        <span class="h-2 w-2 rounded-full ring-1 ring-white/20" style="background: linear-gradient(120deg, ${colorA}, ${colorB});"></span>
        <span class="text-neutral-200">${label}</span>
      `;
      return div;
    }

    function updateLabels() {
      const texts = elements.labels.querySelectorAll('text');
      texts.forEach((t, i) => {
        if (scents[i]) t.textContent = scents[i].name;
      });
    }

    function renderBadges() {
      // Build once if empty
      if (!elements.badges.hasChildNodes()) {
        for (let i = 0; i < 10; i++) {
          const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
          g.setAttribute('transform', `rotate(${i * 36})`);
          // background pill
          const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
          rect.setAttribute('x', '106');
          rect.setAttribute('y', '-20');
          rect.setAttribute('rx', '8');
          rect.setAttribute('ry', '8');
          rect.setAttribute('width', '28');
          rect.setAttribute('height', '16');
          rect.setAttribute('fill', 'rgba(255,255,255,0.06)');
          rect.setAttribute('stroke', 'rgba(255,255,255,0.12)');
          rect.setAttribute('stroke-width', '0.5');
          // dot
          const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          dot.setAttribute('cx', '114');
          dot.setAttribute('cy', '-12');
          dot.setAttribute('r', '3');
          dot.setAttribute('fill', 'rgba(255,255,255,0.5)');
          // count
          const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          txt.setAttribute('x', '126');
          txt.setAttribute('y', '-12');
          txt.setAttribute('fill', 'rgba(255,255,255,0.8)');
          txt.setAttribute('font-size', '8');
          txt.setAttribute('font-weight', '500');
          txt.setAttribute('text-anchor', 'middle');
          txt.textContent = '0';
          g.appendChild(rect);
          g.appendChild(dot);
          g.appendChild(txt);
          elements.badges.appendChild(g);
        }
      }
      // Update counts and colors
      const groups = elements.badges.querySelectorAll('g');
      const vset = votes[mode] || {};
      let total = 0;
      scents.forEach((s, i) => {
        const count = vset[s.key] || 0;
        total += count;
        const g = groups[i];
        const rect = g.children[0];
        const dot = g.children[1];
        const txt = g.children[2];
        txt.textContent = String(count);
        rect.setAttribute('fill', 'rgba(255,255,255,0.06)');
        rect.setAttribute('stroke', 'rgba(255,255,255,0.12)');
        dot.setAttribute('fill', s.accent);
      });
      elements.voteTotal.textContent = total;
    }

    function setSelected(index) {
      currentIndex = index;
      const s = scents[index];

      // Background ambiance
      elements.ambient.style.background = `
        radial-gradient(900px 600px at 20% 10%, ${hexToRgba(s.colors[0], 0.18)}, transparent),
        radial-gradient(900px 600px at 80% 80%, ${hexToRgba(s.colors[1], 0.16)}, transparent),
        radial-gradient(600px 400px at 50% 50%, ${hexToRgba(s.accent, 0.10)}, transparent),
        linear-gradient(140deg, rgba(0,0,0,0), rgba(0,0,0,0))
      `;

      elements.scene.style.background = `
        radial-gradient(520px 360px at 50% 20%, ${hexToRgba(s.colors[0], 0.10)}, transparent),
        radial-gradient(420px 300px at 70% 80%, ${hexToRgba(s.colors[1], 0.08)}, transparent)
      `;

      // Center icon and name
      elements.centerIcon.setAttribute('data-lucide', s.icon);
      elements.centerName.textContent = s.name;

      // Detail panel
      elements.detailIcon.setAttribute('data-lucide', s.icon);
      elements.detailName.textContent = s.name;
      elements.detailTone.textContent = s.tone;
      elements.detailMood.textContent = s.mood;
      elements.description.textContent = s.description;

      // Badge
      elements.badge.style.background = `linear-gradient(120deg, ${hexToRgba(s.colors[0],0.25)}, ${hexToRgba(s.colors[1],0.25)})`;
      elements.badge.style.boxShadow = `0 0 0 1px rgba(255,255,255,0.12) inset, 0 10px 30px -10px ${hexToRgba(s.colors[1],0.35)}`;

      // Aura
      elements.aura.style.stroke = hexToRgba(s.accent, 0.35);

      // Particles
      updateParticles(`linear-gradient(120deg, ${s.colors[0]}, ${s.colors[1]})`);

      // Notes
      elements.notes.innerHTML = '';
      s.notes.forEach(n => elements.notes.appendChild(chip(n, s.colors[0], s.colors[1])));

      // Pairs
      elements.pairs.innerHTML = '';
      s.pairs.forEach(p => {
        const ref = scents.find(x => x.name === p) || s;
        elements.pairs.appendChild(chip(p, ref.colors[0], ref.colors[1]));
      });

      // Suggestion icons
      updateSuggestion(index);

      // Wheel segments
      ensureGradients();
      colorizeSegments(index);

      // Labels and badges
      updateLabels();
      renderBadges();

      // Refresh icons and stroke width
      lucide.createIcons();
      applyIconStroke();
    }

    function setMode(nextMode) {
      if (mode === nextMode) return;
      mode = nextMode;
      scents = datasets[mode];
      // Visual toggle state
      if (mode === 'good') {
        elements.modeGood.className = 'px-2.5 py-1 text-xs bg-white/10 text-white transition-colors';
        elements.modeBad.className = 'px-2.5 py-1 text-xs text-neutral-300 hover:bg-white/10 transition-colors';
      } else {
        elements.modeGood.className = 'px-2.5 py-1 text-xs text-neutral-300 hover:bg-white/10 transition-colors';
        elements.modeBad.className = 'px-2.5 py-1 text-xs bg-white/10 text-white transition-colors';
      }
      // Reset selection to index 0 for clarity
      currentIndex = 0;
      setSelected(currentIndex);
    }

    function hexToRgba(hex, alpha) {
      const h = hex.replace('#','');
      const bigint = parseInt(h.length === 3 ? h.split('').map(c=>c+c).join('') : h, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function findScentByKey(key) {
      const allScents = [...datasets.good, ...datasets.bad];
      return allScents.find(s => s.key === key);
    }

    function renderRankings() {
      elements.rankingsContainer.innerHTML = '';
      siteRankings.forEach(site => {
        const card = document.createElement('div');
        card.className = 'relative rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/[0.06] transition-colors';
        
        // Calculate total votes for this site
        const totalVotes = Object.values(site.votes).reduce((a, b) => a + b, 0);
        
        // Sort by percentage
        const sorted = Object.entries(site.votes)
          .map(([key, count]) => ({ key, count, pct: ((count / totalVotes) * 100).toFixed(1) }))
          .sort((a, b) => b.count - a.count);

        // Build bars
        let barsHtml = '';
        sorted.forEach(({ key, count, pct }) => {
          const scent = findScentByKey(key);
          if (!scent) return;
          barsHtml += `
            <div class="flex items-center gap-3 mb-3">
              <div class="flex items-center gap-2 w-28 shrink-0">
                <div class="h-6 w-6 rounded-md ring-1 ring-white/10 flex items-center justify-center" style="background: linear-gradient(120deg, ${hexToRgba(scent.colors[0], 0.3)}, ${hexToRgba(scent.colors[1], 0.3)});">
                  <i data-lucide="${scent.icon}" class="w-3.5 h-3.5"></i>
                </div>
                <span class="text-xs text-neutral-300">${scent.name}</span>
              </div>
              <div class="flex-1 relative h-5 rounded-md bg-white/5 ring-1 ring-white/10 overflow-hidden">
                <div class="absolute inset-y-0 left-0 rounded-md transition-all duration-500" style="width: ${pct}%; background: linear-gradient(90deg, ${hexToRgba(scent.colors[0], 0.7)}, ${hexToRgba(scent.colors[1], 0.7)});"></div>
              </div>
              <span class="text-xs font-medium text-white/80 w-10 text-right">${pct}%</span>
            </div>
          `;
        });

        card.innerHTML = `
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="h-9 w-9 rounded-lg bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
                <i data-lucide="${site.icon}" class="w-4 h-4"></i>
              </div>
              <div>
                <h3 class="text-sm font-semibold text-white">${site.name}</h3>
                <p class="text-xs text-neutral-400">${totalVotes} votos</p>
              </div>
            </div>
            <button class="inline-flex items-center gap-1.5 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-2.5 py-1.5 text-xs text-neutral-300 transition-colors">
              <i data-lucide="external-link" class="w-3 h-3"></i>
              Ver
            </button>
          </div>
          <div class="space-y-1">
            ${barsHtml}
          </div>
        `;
        
        elements.rankingsContainer.appendChild(card);
      });

      lucide.createIcons();
      applyIconStroke();
    }

    function renderHeatmap() {
      const hours = ['00h', '04h', '08h', '12h', '16h', '20h'];
      const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
      
      hours.forEach(hour => {
        const row = document.createElement('div');
        row.className = 'grid grid-cols-8 gap-2';
        
        const label = document.createElement('div');
        label.className = 'text-xs text-neutral-400 flex items-center';
        label.textContent = hour;
        row.appendChild(label);
        
        days.forEach(() => {
          const cell = document.createElement('div');
          cell.className = 'h-8 rounded transition-colors hover:ring-1 hover:ring-white/20 cursor-pointer';
          const intensity = Math.random();
          if (intensity < 0.1) {
            cell.style.background = 'rgba(255,255,255,0.05)';
          } else if (intensity < 0.3) {
            cell.style.background = 'rgba(244,114,182,0.3)';
          } else if (intensity < 0.6) {
            cell.style.background = 'rgba(244,114,182,0.5)';
          } else if (intensity < 0.8) {
            cell.style.background = 'rgba(244,114,182,0.7)';
          } else {
            cell.style.background = 'rgba(244,114,182,0.9)';
          }
          row.appendChild(cell);
        });
        
        elements.heatmapGrid.appendChild(row);
      });
    }

    function renderEvolutionChart() {
      const svg = document.getElementById('evolutionLines');
      const dataPoints = 6;
      const step = 800 / (dataPoints - 1);
      
      const datasets = [
        { color: '#FB7185', points: [180, 140, 120, 100, 90, 80] },
        { color: '#F0ABFC', points: [150, 130, 120, 130, 140, 150] },
        { color: '#FFE066', points: [100, 110, 120, 110, 100, 90] },
        { color: '#FB7185', points: [80, 100, 120, 140, 150, 160] },
      ];
      
      datasets.forEach(dataset => {
        let pathD = '';
        dataset.points.forEach((y, i) => {
          const x = i * step;
          pathD += i === 0 ? `M${x},${y}` : ` L${x},${y}`;
        });
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathD);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', dataset.color);
        path.setAttribute('stroke-width', '2');
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('stroke-linejoin', 'round');
        svg.appendChild(path);
      });
    }

    function attachEvents() {
      // Segment hover/click
      elements.segments.forEach(seg => {
        seg.addEventListener('mouseenter', () => {
          seg.style.transform = 'translateX(0.5px) translateY(-0.5px)';
          seg.style.transition = 'transform .2s ease';
        });
        seg.addEventListener('mouseleave', () => {
          seg.style.transform = 'translateX(0px) translateY(0px)';
        });
        seg.addEventListener('click', (e) => {
          e.stopPropagation();
          const i = Number(seg.getAttribute('data-index'));
          setSelected(i);
        });
      });

      // Random buttons
      [elements.randomBtn, elements.randomBtn2].forEach(btn => {
        if (!btn) return;
        btn.addEventListener('click', () => {
          const next = Math.floor(Math.random() * scents.length);
          setSelected(next);
        });
      });

      // Mode toggle
      elements.modeGood.addEventListener('click', () => setMode('good'));
      elements.modeBad.addEventListener('click', () => setMode('bad'));

      // Drag to rotate - FIXED: stop propagation to segments
      const svg = elements.wheel;
      svg.style.cursor = 'grab';
      
      svg.addEventListener('pointerdown', (e) => {
        // Only start drag if clicking on SVG background, not segments
        if (e.target.tagName === 'path') return;
        dragging = true;
        svg.setPointerCapture(e.pointerId);
        svg.style.cursor = 'grabbing';
        startAngle = pointerAngle(e);
        startRotation = rotationAngle;
        e.preventDefault();
      });
      
      svg.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        const a = pointerAngle(e);
        rotationAngle = startRotation + (a - startAngle);
        applyRotation();
      });
      
      svg.addEventListener('pointerup', (e) => {
        if (!dragging) return;
        dragging = false;
        svg.releasePointerCapture(e.pointerId);
        svg.style.cursor = 'grab';
      });
      
      svg.addEventListener('pointercancel', () => {
        dragging = false;
        svg.style.cursor = 'grab';
      });

      // Demo modal
      elements.demoBtn.addEventListener('click', openDemo);
      elements.closeModal.addEventListener('click', closeDemo);
      elements.replayDemo.addEventListener('click', replayDemo);
      
      // Close modal on backdrop click
      elements.demoModal.addEventListener('click', (e) => {
        if (e.target === elements.demoModal) closeDemo();
      });

      // Scent selector options in demo
      document.querySelectorAll('.scent-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          selectScentInDemo();
        });
      });

      // Viz tabs
      document.querySelectorAll('.viz-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          const targetTab = tab.getAttribute('data-tab');
          
          // Update tab styles
          document.querySelectorAll('.viz-tab').forEach(t => {
            if (t === tab) {
              t.className = 'viz-tab active inline-flex items-center gap-2 rounded-lg bg-white/10 ring-1 ring-white/20 px-4 py-2.5 text-sm font-medium text-white whitespace-nowrap transition-colors';
            } else {
              t.className = 'viz-tab inline-flex items-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 px-4 py-2.5 text-sm font-medium text-neutral-300 hover:text-white whitespace-nowrap transition-colors';
            }
          });
          
          // Show/hide content
          document.querySelectorAll('.viz-content').forEach(content => {
            if (content.id === `tab-${targetTab}`) {
              content.classList.remove('hidden');
            } else {
              content.classList.add('hidden');
            }
          });

          lucide.createIcons();
          applyIconStroke();
        });
      });
    }

    function pointerAngle(e) {
      const rect = elements.wheel.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const x = e.clientX - cx;
      const y = e.clientY - cy;
      return Math.atan2(y, x) * 180 / Math.PI;
    }

    function applyRotation() {
      // Rotate segments, labels, and badges together
      elements.wheel.querySelector('#segments').setAttribute('transform', `rotate(${rotationAngle})`);
      elements.wheel.querySelector('#labels').setAttribute('transform', `rotate(${rotationAngle})`);
      elements.wheel.querySelector('#badges').setAttribute('transform', `rotate(${rotationAngle})`);
    }

    function initBadgesContainer() {
      // Ensure empty and (re)build for safety on first load
      elements.badges.innerHTML = '';
      renderBadges();
    }

    // Demo animation functions
    function openDemo() {
      elements.demoModal.classList.remove('pointer-events-none', 'opacity-0');
      elements.demoModal.classList.add('opacity-100');
      document.body.style.overflow = 'hidden';
      
      // Start demo sequence
      startDemoSequence();
    }

    function closeDemo() {
      elements.demoModal.classList.add('pointer-events-none', 'opacity-0');
      elements.demoModal.classList.remove('opacity-100');
      document.body.style.overflow = '';
      
      // Clear timeout
      if (demoTimeout) clearTimeout(demoTimeout);
      
      // Reset demo state
      resetDemoState();
    }

    function replayDemo() {
      resetDemoState();
      startDemoSequence();
    }

    function resetDemoState() {
      elements.scentSelector.style.opacity = '0';
      elements.scentSelector.style.transform = 'translateY(1rem)';
      elements.successCheck.style.opacity = '0';
      elements.step1.style.opacity = '0.4';
      elements.step2.style.opacity = '0.4';
      elements.step3.style.opacity = '0.4';
    }

    function startDemoSequence() {
      // Step 1: Navigate (highlight step 1)
      setTimeout(() => {
        elements.step1.style.opacity = '1';
        elements.step1.style.background = 'rgba(255,255,255,0.08)';
      }, 300);

      // Step 2: Show scent selector (highlight step 2)
      setTimeout(() => {
        elements.step1.style.opacity = '0.4';
        elements.step1.style.background = 'rgba(255,255,255,0.05)';
        elements.step2.style.opacity = '1';
        elements.step2.style.background = 'rgba(255,255,255,0.08)';
        elements.scentSelector.style.opacity = '1';
        elements.scentSelector.style.transform = 'translateY(0)';
        lucide.createIcons();
        applyIconStroke();
      }, 2000);

      // Step 3: Auto-select a scent after 3 seconds
      demoTimeout = setTimeout(() => {
        selectScentInDemo();
      }, 4500);
    }

    function selectScentInDemo() {
      // Highlight step 3
      elements.step2.style.opacity = '0.4';
      elements.step2.style.background = 'rgba(255,255,255,0.05)';
      elements.step3.style.opacity = '1';
      elements.step3.style.background = 'rgba(255,255,255,0.08)';
      
      // Hide selector, show success
      elements.scentSelector.style.opacity = '0';
      elements.scentSelector.style.transform = 'translateY(1rem)';
      
      setTimeout(() => {
        elements.successCheck.style.opacity = '1';
        lucide.createIcons();
        applyIconStroke();
      }, 300);

      // Reset after showing success
      setTimeout(() => {
        elements.step3.style.opacity = '0.4';
        elements.step3.style.background = 'rgba(255,255,255,0.05)';
      }, 2000);
    }

    // Expose a minimal API to update votes from the site
    window.setVotes = function(payload) {
      // payload: { mode: 'good'|'bad', counts: { key: number } }
      if (!payload || !payload.mode || !payload.counts) return;
      const m = payload.mode === 'bad' ? 'bad' : 'good';
      votes[m] = Object.assign({}, votes[m], payload.counts);
      if (m === mode) {
        renderBadges();
      }
    };

    // Initialize
    lucide.createIcons();
    applyIconStroke();
    initBadgesContainer();
    setSelected(currentIndex);
    renderRankings();
    renderHeatmap();
    renderEvolutionChart();
    attachEvents();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 transition-all duration-700 ease-out" id="ambient" style={{background: 'radial-gradient(1000px 700px at 20% 10%, rgba(56,189,248,0.16), transparent), radial-gradient(900px 600px at 80% 80%, rgba(244,114,182,0.12), transparent), linear-gradient(140deg, rgba(37,99,235,0.08), rgba(0,0,0,0.0))'}}></div>
<div className="relative">

<div className="pointer-events-none absolute inset-0 opacity-[0.04]">
<div className="w-full h-full" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
</div>

<header className="relative z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-center tracking-tight font-semibold text-sm" style={{letterSpacing: '-0.04em'}}>
            AO
          </div>
<div>
<h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">¿A qué huele Internet?</h1>
<p className="text-sm text-neutral-400">Descubre y otorga olores a las páginas web que visitas</p>
</div>
</div>
<div className="hidden sm:flex items-center gap-3">
<div className="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs text-neutral-300">
<i className="w-3.5 h-3.5" data-lucide="users"></i>
<span id="voteTotal">0</span> votos
          </div>
<button className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/25 ring-1 ring-white/10 hover:ring-white/20 transition-colors px-3.5 py-2 text-sm text-white" id="demoBtn">
<i className="w-4 h-4" data-lucide="play-circle"></i>
            Ver demo
          </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 active:bg-white/15 ring-1 ring-white/10 hover:ring-white/20 transition-colors px-3.5 py-2 text-sm text-white" id="randomBtn">
<i className="w-4 h-4" data-lucide="sparkles"></i>
            Aleatorio
          </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/25 ring-1 ring-white/10 hover:ring-white/20 transition-colors px-3.5 py-2 text-sm text-white" id="saveBtn">
<i className="w-4 h-4" data-lucide="bookmark-plus"></i>
            Guardar
          </button>
</div>
</div>
</header>

<main className="relative z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

<section className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-2xl shadow-black/30 overflow-hidden">
<div className="relative p-6 sm:p-8 transition-colors duration-700 ease-out" id="scene" style={{background: 'radial-gradient(600px 420px at 50% 20%, rgba(255,255,255,0.03), transparent)'}}>
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-white">Selecciona un olor</h2>
<p className="text-sm text-neutral-400">Toca un segmento o arrastra para girar la rueda</p>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-400">Modo</span>
<div className="inline-flex items-center rounded-md ring-1 ring-white/10 overflow-hidden">
<button className="px-2.5 py-1 text-xs bg-white/10 text-white transition-colors" id="modeGood">Agradables</button>
<button className="px-2.5 py-1 text-xs text-neutral-300 hover:bg-white/10 transition-colors" id="modeBad">Desagradables</button>
</div>
</div>
</div>
</div>
<div className="relative mx-auto w-full flex items-center justify-center">

<div className="pointer-events-none absolute inset-0" id="particles">

<span className="absolute top-[10%] left-[12%] h-20 w-20 rounded-full blur-2xl opacity-20 mix-blend-screen animate-pulse" style={{animationDuration: '2.6s'}}></span>
<span className="absolute top-[18%] right-[14%] h-24 w-24 rounded-full blur-2xl opacity-20 mix-blend-screen animate-pulse" style={{animationDuration: '3.2s', animationDelay: '.2s'}}></span>
<span className="absolute bottom-[12%] left-[8%] h-24 w-24 rounded-full blur-2xl opacity-20 mix-blend-screen animate-pulse" style={{animationDuration: '3.4s', animationDelay: '.4s'}}></span>
<span className="absolute bottom-[14%] right-[10%] h-28 w-28 rounded-full blur-2xl opacity-20 mix-blend-screen animate-pulse" style={{animationDuration: '3.8s', animationDelay: '.6s'}}></span>
<span className="absolute top-1/2 left-[18%] h-20 w-20 rounded-full blur-2xl opacity-20 mix-blend-screen animate-pulse" style={{animationDuration: '2.9s', animationDelay: '.1s'}}></span>
<span className="absolute top-[26%] left-1/2 h-16 w-16 rounded-full blur-2xl opacity-20 mix-blend-screen animate-pulse" style={{animationDuration: '2.4s', animationDelay: '.3s'}}></span>
<span className="absolute bottom-[32%] right-[24%] h-16 w-16 rounded-full blur-2xl opacity-20 mix-blend-screen animate-pulse" style={{animationDuration: '2.8s', animationDelay: '.5s'}}></span>
<span className="absolute bottom-[22%] left-1/2 h-28 w-28 rounded-full blur-2xl opacity-20 mix-blend-screen animate-pulse" style={{animationDuration: '4.1s', animationDelay: '.7s'}}></span>
<span className="absolute top-[36%] right-[32%] h-14 w-14 rounded-full blur-2xl opacity-20 mix-blend-screen animate-pulse" style={{animationDuration: '2.1s', animationDelay: '.75s'}}></span>
<span className="absolute top-[42%] left-[32%] h-16 w-16 rounded-full blur-2xl opacity-20 mix-blend-screen animate-pulse" style={{animationDuration: '2.3s', animationDelay: '.95s'}}></span>
<span className="absolute bottom-[42%] right-[36%] h-20 w-20 rounded-full blur-2xl opacity-20 mix-blend-screen animate-pulse" style={{animationDuration: '2.7s', animationDelay: '1.1s'}}></span>
<span className="absolute bottom-[18%] left-[36%] h-16 w-16 rounded-full blur-2xl opacity-20 mix-blend-screen animate-pulse" style={{animationDuration: '3.0s', animationDelay: '1.2s'}}></span>
</div>

<div className="relative w-full max-w-[520px] mx-auto">
<svg className="w-full aspect-square select-none touch-none" id="wheel" viewbox="-160 -160 320 320">
<defs id="linear-gradients"></defs>

<circle className="stroke-white/10" cx="0" cy="0" fill="none" r="126" strokeWidth="2"></circle>

<g className="cursor-pointer" id="segments">

<g transform="rotate(0)">
<path className="transition-all duration-300 ease-out" d="M0,0 L114.127,-37.082 A120,120 0 0,1 114.127,37.082 Z" data-index="0" style={{fill: 'rgba(255,255,255,0.04)', stroke: 'rgba(255,255,255,0.1)', strokeWidth: '1.5'}}></path>
</g>

<g transform="rotate(36)">
<path className="transition-all duration-300 ease-out" d="M0,0 L114.127,-37.082 A120,120 0 0,1 114.127,37.082 Z" data-index="1" style={{fill: 'rgba(255,255,255,0.04)', stroke: 'rgba(255,255,255,0.1)', strokeWidth: '1.5'}}></path>
</g>

<g transform="rotate(72)">
<path className="transition-all duration-300 ease-out" d="M0,0 L114.127,-37.082 A120,120 0 0,1 114.127,37.082 Z" data-index="2" style={{fill: 'rgba(255,255,255,0.04)', stroke: 'rgba(255,255,255,0.1)', strokeWidth: '1.5'}}></path>
</g>

<g transform="rotate(108)">
<path className="transition-all duration-300 ease-out" d="M0,0 L114.127,-37.082 A120,120 0 0,1 114.127,37.082 Z" data-index="3" style={{fill: 'rgba(255,255,255,0.04)', stroke: 'rgba(255,255,255,0.1)', strokeWidth: '1.5'}}></path>
</g>

<g transform="rotate(144)">
<path className="transition-all duration-300 ease-out" d="M0,0 L114.127,-37.082 A120,120 0 0,1 114.127,37.082 Z" data-index="4" style={{fill: 'rgba(255,255,255,0.04)', stroke: 'rgba(255,255,255,0.1)', strokeWidth: '1.5'}}></path>
</g>

<g transform="rotate(180)">
<path className="transition-all duration-300 ease-out" d="M0,0 L114.127,-37.082 A120,120 0 0,1 114.127,37.082 Z" data-index="5" style={{fill: 'rgba(255,255,255,0.04)', stroke: 'rgba(255,255,255,0.1)', strokeWidth: '1.5'}}></path>
</g>

<g transform="rotate(216)">
<path className="transition-all duration-300 ease-out" d="M0,0 L114.127,-37.082 A120,120 0 0,1 114.127,37.082 Z" data-index="6" style={{fill: 'rgba(255,255,255,0.04)', stroke: 'rgba(255,255,255,0.1)', strokeWidth: '1.5'}}></path>
</g>

<g transform="rotate(252)">
<path className="transition-all duration-300 ease-out" d="M0,0 L114.127,-37.082 A120,120 0 0,1 114.127,37.082 Z" data-index="7" style={{fill: 'rgba(255,255,255,0.04)', stroke: 'rgba(255,255,255,0.1)', strokeWidth: '1.5'}}></path>
</g>

<g transform="rotate(288)">
<path className="transition-all duration-300 ease-out" d="M0,0 L114.127,-37.082 A120,120 0 0,1 114.127,37.082 Z" data-index="8" style={{fill: 'rgba(255,255,255,0.04)', stroke: 'rgba(255,255,255,0.1)', strokeWidth: '1.5'}}></path>
</g>

<g transform="rotate(324)">
<path className="transition-all duration-300 ease-out" d="M0,0 L114.127,-37.082 A120,120 0 0,1 114.127,37.082 Z" data-index="9" style={{fill: 'rgba(255,255,255,0.04)', stroke: 'rgba(255,255,255,0.1)', strokeWidth: '1.5'}}></path>
</g>
</g>

<g dominant-baseline="middle" fill="rgba(255,255,255,0.65)" fontSize="10" font-weight="500" id="labels" style={{letterSpacing: '-0.02em'}} text-anchor="middle">
<g transform="rotate(0)">
<text x="96" y="-8">Cítrico</text>
</g>
<g transform="rotate(36)">
<text x="96" y="-8">Floral</text>
</g>
<g transform="rotate(72)">
<text x="96" y="-8">Herbal</text>
</g>
<g transform="rotate(108)">
<text x="96" y="-8">Amaderado</text>
</g>
<g transform="rotate(144)">
<text x="96" y="-8">Especiado</text>
</g>
<g transform="rotate(180)">
<text x="96" y="-8">Dulce</text>
</g>
<g transform="rotate(216)">
<text x="96" y="-8">Marino</text>
</g>
<g transform="rotate(252)">
<text x="96" y="-8">Terroso</text>
</g>
<g transform="rotate(288)">
<text x="96" y="-8">Ahumado</text>
</g>
<g transform="rotate(324)">
<text x="96" y="-8">Fresco</text>
</g>
</g>

<g dominant-baseline="middle" fontSize="8" id="badges" text-anchor="middle"></g>

<g>
<circle className="fill-white/5 stroke-white/10" cx="0" cy="0" r="62" strokeWidth="1.5"></circle>
<circle className="fill-transparent animate-pulse" cx="0" cy="0" id="aura" r="74" style={{stroke: 'rgba(255,255,255,0.15)', strokeWidth: '10', filter: 'blur(0.5px)'}}></circle>
<foreignobject height="112" width="112" x="-56" y="-56">
<div className="w-full h-full flex flex-col items-center justify-center gap-2 text-center">
<div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/15">
<i className="w-5 h-5" data-lucide="wind" id="centerIcon"></i>
</div>
<div className="text-xs uppercase tracking-wider text-neutral-400">Familia</div>
<div className="text-sm font-semibold tracking-tight text-white" id="centerName">Fresco</div>
</div>
</foreignobject>
</g>
</svg>
</div>
</div>
<div className="mt-6 flex items-center justify-between">
<div className="flex -space-x-1.5">
<span className="h-6 w-6 rounded-full ring-1 ring-white/15" style={{background: 'linear-gradient(120deg, #a5f3fc, #22d3ee)'}}></span>
<span className="h-6 w-6 rounded-full ring-1 ring-white/15" style={{background: 'linear-gradient(120deg, #93c5fd, #0ea5e9)'}}></span>
<span className="h-6 w-6 rounded-full ring-1 ring-white/15" style={{background: 'linear-gradient(120deg, #f0abfc, #d946ef)'}}></span>
<span className="h-6 w-6 rounded-full ring-1 ring-white/15" style={{background: 'linear-gradient(120deg, #a7f3d0, #10b981)'}}></span>
</div>
<div className="sm:hidden">
<button className="inline-flex items-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 active:bg-white/15 ring-1 ring-white/10 hover:ring-white/20 transition-colors px-3 py-1.5 text-xs text-white" id="randomBtn2">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i>
                    Aleatorio
                  </button>
</div>
</div>
</div>
</section>

<aside className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8">
<div className="flex items-start justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg ring-1 ring-white/15 flex items-center justify-center bg-white/10 transition-colors duration-500" id="badge">
<i className="w-5 h-5" data-lucide="wind" id="detailIcon"></i>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-white" id="detailName">Fresco</h3>
<p className="text-sm text-neutral-400" id="detailTone">Luminoso, limpio, aireado</p>
</div>
</div>
<div className="text-right">
<div className="text-xs text-neutral-400">Sensación</div>
<div className="text-sm font-medium text-white/90" id="detailMood">Revitalizante</div>
</div>
</div>
<div className="my-6 h-px bg-white/10"></div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<div className="text-xs uppercase tracking-wider text-neutral-400 mb-2">Notas clave</div>
<div className="flex flex-wrap gap-2" id="notes">

</div>
</div>
<div>
<div className="text-xs uppercase tracking-wider text-neutral-400 mb-2">Acompaña bien con</div>
<div className="flex flex-wrap gap-2" id="pairs">

</div>
</div>
<div className="sm:col-span-2">
<div className="text-xs uppercase tracking-wider text-neutral-400 mb-2">Descripción</div>
<p className="text-sm leading-6 text-neutral-300" id="description">Brisas frías, notas acuosas y un toque cítrico que despeja la mente.</p>
</div>
</div>
<div className="my-6 h-px bg-white/10"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-400">Combinación sugerida</span>
<div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 ring-1 ring-white/10 text-xs" id="suggestion">
<i className="w-3.5 h-3.5" data-lucide="citrus"></i>
                  + 
                  <i className="w-3.5 h-3.5" data-lucide="flower-2"></i>
</div>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/25 ring-1 ring-white/10 hover:ring-white/20 transition-colors px-3.5 py-2 text-sm">
<i className="w-4 h-4" data-lucide="play"></i>
                  Probar mezcla
                </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 active:bg-white/15 ring-1 ring-white/10 hover:ring-white/20 transition-colors px-3.5 py-2 text-sm">
<i className="w-4 h-4" data-lucide="share-2"></i>
                  Compartir
                </button>
</div>
</div>
</aside>
</div>

<section className="mt-10">
<div className="relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/20 p-8 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br opacity-30" id="scentOfDayBg" style={{background: 'linear-gradient(135deg, rgba(244,114,182,0.2), rgba(147,197,253,0.2))'}}></div>
<div className="relative z-10">
<div className="flex items-start justify-between mb-6">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 ring-1 ring-white/20 text-xs font-medium text-white mb-3">
<i className="w-3.5 h-3.5" data-lucide="trophy"></i>
                    Olor del día
                  </div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-2" id="scentOfDayTitle">instagram.com</h2>
<p className="text-sm text-neutral-300">Sitio con más votos hoy · <span id="scentOfDayVotes">145</span> votos</p>
</div>
<div className="flex items-center gap-3">
<div className="h-16 w-16 rounded-2xl ring-1 ring-white/20 flex items-center justify-center" id="scentOfDayBadge" style={{background: 'linear-gradient(135deg, rgba(244,114,182,0.3), rgba(147,197,253,0.3))'}}>
<i className="w-8 h-8" data-lucide="camera"></i>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 ring-1 ring-white/15">
<i className="w-4 h-4" data-lucide="flower-2"></i>
<span className="text-sm font-medium">Floral</span>
<span className="text-xs text-neutral-300">45%</span>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 ring-1 ring-white/15">
<i className="w-4 h-4" data-lucide="candy"></i>
<span className="text-sm font-medium">Dulce</span>
<span className="text-xs text-neutral-300">30%</span>
</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 ring-1 ring-white/15 hover:ring-white/20 transition-colors px-4 py-2 text-sm">
<i className="w-4 h-4" data-lucide="external-link"></i>
                  Ver análisis
                </button>
</div>
</div>
</div>
</section>

<section className="mt-10">
<div className="mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Visualización y análisis</h2>
<p className="text-sm text-neutral-400">Explora patrones olfativos de Internet</p>
</div>

<div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
<button className="viz-tab active inline-flex items-center gap-2 rounded-lg bg-white/10 ring-1 ring-white/20 px-4 py-2.5 text-sm font-medium text-white whitespace-nowrap transition-colors" data-tab="heatmap">
<i className="w-4 h-4" data-lucide="calendar-clock"></i>
              Mapa de calor temporal
            </button>
<button className="viz-tab inline-flex items-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 px-4 py-2.5 text-sm font-medium text-neutral-300 hover:text-white whitespace-nowrap transition-colors" data-tab="evolution">
<i className="w-4 h-4" data-lucide="trending-up"></i>
              Evolución histórica
            </button>
<button className="viz-tab inline-flex items-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 px-4 py-2.5 text-sm font-medium text-neutral-300 hover:text-white whitespace-nowrap transition-colors" data-tab="compare">
<i className="w-4 h-4" data-lucide="git-compare"></i>
              Comparador de sitios
            </button>
<button className="viz-tab inline-flex items-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 px-4 py-2.5 text-sm font-medium text-neutral-300 hover:text-white whitespace-nowrap transition-colors" data-tab="categories">
<i className="w-4 h-4" data-lucide="layout-grid"></i>
              Nube por categoría
            </button>
</div>

<div className="viz-content" id="tab-heatmap">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-1">Mapa de calor temporal</h3>
<p className="text-sm text-neutral-400">twitter.com · Última semana</p>
</div>
<div className="flex items-center gap-2">
<select className="rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-white">
<option>Última semana</option>
<option>Último mes</option>
<option>Último año</option>
</select>
</div>
</div>

<div className="space-y-3">

<div className="grid grid-cols-8 gap-2 text-xs text-neutral-400">
<div></div>
<div className="text-center">Lun</div>
<div className="text-center">Mar</div>
<div className="text-center">Mié</div>
<div className="text-center">Jue</div>
<div className="text-center">Vie</div>
<div className="text-center">Sáb</div>
<div className="text-center">Dom</div>
</div>

<div className="space-y-2" id="heatmapGrid">

</div>
</div>

<div className="mt-6 flex items-center justify-between">
<div className="text-xs text-neutral-400">Intensidad de votos</div>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-400">Menos</span>
<div className="flex gap-1">
<div className="h-4 w-4 rounded" style={{background: 'rgba(255,255,255,0.05)'}}></div>
<div className="h-4 w-4 rounded" style={{background: 'rgba(244,114,182,0.3)'}}></div>
<div className="h-4 w-4 rounded" style={{background: 'rgba(244,114,182,0.5)'}}></div>
<div className="h-4 w-4 rounded" style={{background: 'rgba(244,114,182,0.7)'}}></div>
<div className="h-4 w-4 rounded" style={{background: 'rgba(244,114,182,0.9)'}}></div>
</div>
<span className="text-xs text-neutral-400">Más</span>
</div>
</div>
</div>
</div>

<div className="viz-content hidden" id="tab-evolution">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-1">Evolución histórica</h3>
<p className="text-sm text-neutral-400">youtube.com · Últimos 6 meses</p>
</div>
<div className="flex items-center gap-2">
<select className="rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-white">
<option>youtube.com</option>
<option>twitter.com</option>
<option>instagram.com</option>
<option>github.com</option>
</select>
</div>
</div>

<div className="relative h-64 mb-6">
<svg className="w-full h-full" id="evolutionChart" viewbox="0 0 800 256">

<g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
<line x1="0" x2="800" y1="51.2" y2="51.2"></line>
<line x1="0" x2="800" y1="102.4" y2="102.4"></line>
<line x1="0" x2="800" y1="153.6" y2="153.6"></line>
<line x1="0" x2="800" y1="204.8" y2="204.8"></line>
</g>

<g id="evolutionLines"></g>
</svg>
</div>

<div className="flex flex-wrap gap-4">
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full" style={{background: 'linear-gradient(120deg, #FB7185, #F472B6)'}}></div>
<span className="text-xs text-neutral-300">Dulce</span>
</div>
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full" style={{background: 'linear-gradient(120deg, #F0ABFC, #D946EF)'}}></div>
<span className="text-xs text-neutral-300">Floral</span>
</div>
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full" style={{background: 'linear-gradient(120deg, #FFE066, #F59E0B)'}}></div>
<span className="text-xs text-neutral-300">Cítrico</span>
</div>
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full" style={{background: 'linear-gradient(120deg, #FB7185, #EF4444)'}}></div>
<span className="text-xs text-neutral-300">Especiado</span>
</div>
</div>
</div>
</div>

<div className="viz-content hidden" id="tab-compare">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="youtube"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-white">youtube.com</h3>
<p className="text-xs text-neutral-400">100 votos totales</p>
</div>
</div>
<button className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition-colors">
<i className="w-4 h-4" data-lucide="refresh-cw"></i>
</button>
</div>

<div className="relative mb-6">
<svg className="w-full max-w-[200px] mx-auto" viewbox="0 0 200 200">
<circle cx="100" cy="100" fill="none" r="80" stroke="rgba(255,255,255,0.05)" strokeWidth="40"></circle>

<circle cx="100" cy="100" fill="none" r="80" stroke="#FB7185" stroke-dasharray="126 377" strokeWidth="40" transform="rotate(-90 100 100)"></circle>
<circle cx="100" cy="100" fill="none" r="80" stroke="#F0ABFC" stroke-dasharray="113 377" stroke-dashoffset="-126" strokeWidth="40" transform="rotate(-90 100 100)"></circle>
<circle cx="100" cy="100" fill="none" r="80" stroke="#FFE066" stroke-dasharray="63 377" stroke-dashoffset="-239" strokeWidth="40" transform="rotate(-90 100 100)"></circle>
<circle cx="100" cy="100" fill="none" r="80" stroke="#FB7185" stroke-dasharray="75 377" stroke-dashoffset="-302" strokeWidth="40" transform="rotate(-90 100 100)"></circle>
</svg>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full" style={{background: '#FB7185'}}></div>
<span className="text-sm">Dulce</span>
</div>
<span className="text-sm font-medium">32%</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full" style={{background: '#F0ABFC'}}></div>
<span className="text-sm">Floral</span>
</div>
<span className="text-sm font-medium">28%</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full" style={{background: '#FB7185'}}></div>
<span className="text-sm">Especiado</span>
</div>
<span className="text-sm font-medium">22%</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full" style={{background: '#FFE066'}}></div>
<span className="text-sm">Cítrico</span>
</div>
<span className="text-sm font-medium">18%</span>
</div>
</div>
</div>

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="github"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-white">github.com</h3>
<p className="text-xs text-neutral-400">100 votos totales</p>
</div>
</div>
<button className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition-colors">
<i className="w-4 h-4" data-lucide="refresh-cw"></i>
</button>
</div>

<div className="relative mb-6">
<svg className="w-full max-w-[200px] mx-auto" viewbox="0 0 200 200">
<circle cx="100" cy="100" fill="none" r="80" stroke="rgba(255,255,255,0.05)" strokeWidth="40"></circle>

<circle cx="100" cy="100" fill="none" r="80" stroke="#67E8F9" stroke-dasharray="151 377" strokeWidth="40" transform="rotate(-90 100 100)"></circle>
<circle cx="100" cy="100" fill="none" r="80" stroke="#34D399" stroke-dasharray="106 377" stroke-dashoffset="-151" strokeWidth="40" transform="rotate(-90 100 100)"></circle>
<circle cx="100" cy="100" fill="none" r="80" stroke="#38BDF8" stroke-dasharray="75 377" stroke-dashoffset="-257" strokeWidth="40" transform="rotate(-90 100 100)"></circle>
<circle cx="100" cy="100" fill="none" r="80" stroke="#FFE066" stroke-dasharray="45 377" stroke-dashoffset="-332" strokeWidth="40" transform="rotate(-90 100 100)"></circle>
</svg>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full" style={{background: '#67E8F9'}}></div>
<span className="text-sm">Fresco</span>
</div>
<span className="text-sm font-medium">40%</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full" style={{background: '#34D399'}}></div>
<span className="text-sm">Herbal</span>
</div>
<span className="text-sm font-medium">28%</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full" style={{background: '#38BDF8'}}></div>
<span className="text-sm">Marino</span>
</div>
<span className="text-sm font-medium">20%</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full" style={{background: '#FFE066'}}></div>
<span className="text-sm">Cítrico</span>
</div>
<span className="text-sm font-medium">12%</span>
</div>
</div>
</div>
</div>
</div>

<div className="viz-content hidden" id="tab-categories">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="code"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-white">Tecnología</h3>
<p className="text-xs text-neutral-400">235 votos · 12 sitios</p>
</div>
</div>

<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg ring-1 ring-white/10 text-lg font-medium" style={{background: 'linear-gradient(120deg, rgba(103,232,249,0.15), rgba(34,211,238,0.15))'}}>
<i className="w-5 h-5" data-lucide="wind"></i>
                    Fresco
                  </span>
<span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg ring-1 ring-white/10 text-base font-medium" style={{background: 'linear-gradient(120deg, rgba(167,243,208,0.12), rgba(16,185,129,0.12))'}}>
<i className="w-4 h-4" data-lucide="leaf"></i>
                    Herbal
                  </span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ring-1 ring-white/10 text-sm" style={{background: 'linear-gradient(120deg, rgba(147,197,253,0.1), rgba(14,165,233,0.1))'}}>
<i className="w-3.5 h-3.5" data-lucide="waves"></i>
                    Marino
                  </span>
<span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg ring-1 ring-white/10 text-xs" style={{background: 'linear-gradient(120deg, rgba(255,224,102,0.1), rgba(245,158,11,0.1))'}}>
<i className="w-3 h-3" data-lucide="citrus"></i>
                    Cítrico
                  </span>
</div>
</div>

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-white">Redes Sociales</h3>
<p className="text-xs text-neutral-400">412 votos · 8 sitios</p>
</div>
</div>

<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg ring-1 ring-white/10 text-lg font-medium" style={{background: 'linear-gradient(120deg, rgba(163,163,163,0.15), rgba(82,82,82,0.15))'}}>
<i className="w-5 h-5" data-lucide="bug"></i>
                    Moho
                  </span>
<span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg ring-1 ring-white/10 text-base font-medium" style={{background: 'linear-gradient(120deg, rgba(245,158,11,0.12), rgba(146,64,14,0.12))'}}>
<i className="w-4 h-4" data-lucide="alert-triangle"></i>
                    Drenaje
                  </span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ring-1 ring-white/10 text-sm" style={{background: 'linear-gradient(120deg, rgba(244,63,94,0.1), rgba(159,18,57,0.1))'}}>
<i className="w-3.5 h-3.5" data-lucide="trash-2"></i>
                    Basura
                  </span>
<span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg ring-1 ring-white/10 text-xs" style={{background: 'linear-gradient(120deg, rgba(96,165,250,0.1), rgba(51,65,85,0.1))'}}>
<i className="w-3 h-3" data-lucide="cloud-drizzle"></i>
                    Humedad
                  </span>
</div>
</div>

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="newspaper"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-white">Noticias</h3>
<p className="text-xs text-neutral-400">189 votos · 15 sitios</p>
</div>
</div>

<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg ring-1 ring-white/10 text-lg font-medium" style={{background: 'linear-gradient(120deg, rgba(240,171,252,0.15), rgba(217,70,239,0.15))'}}>
<i className="w-5 h-5" data-lucide="flower-2"></i>
                    Floral
                  </span>
<span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg ring-1 ring-white/10 text-base font-medium" style={{background: 'linear-gradient(120deg, rgba(255,224,102,0.12), rgba(245,158,11,0.12))'}}>
<i className="w-4 h-4" data-lucide="citrus"></i>
                    Cítrico
                  </span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ring-1 ring-white/10 text-sm" style={{background: 'linear-gradient(120deg, rgba(103,232,249,0.1), rgba(34,211,238,0.1))'}}>
<i className="w-3.5 h-3.5" data-lucide="wind"></i>
                    Fresco
                  </span>
<span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg ring-1 ring-white/10 text-xs" style={{background: 'linear-gradient(120deg, rgba(167,243,208,0.1), rgba(16,185,129,0.1))'}}>
<i className="w-3 h-3" data-lucide="leaf"></i>
                    Herbal
                  </span>
</div>
</div>

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-white">E-commerce</h3>
<p className="text-xs text-neutral-400">321 votos · 20 sitios</p>
</div>
</div>

<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg ring-1 ring-white/10 text-lg font-medium" style={{background: 'linear-gradient(120deg, rgba(249,168,212,0.15), rgba(244,114,182,0.15))'}}>
<i className="w-5 h-5" data-lucide="candy"></i>
                    Dulce
                  </span>
<span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg ring-1 ring-white/10 text-base font-medium" style={{background: 'linear-gradient(120deg, rgba(240,171,252,0.12), rgba(217,70,239,0.12))'}}>
<i className="w-4 h-4" data-lucide="flower-2"></i>
                    Floral
                  </span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ring-1 ring-white/10 text-sm" style={{background: 'linear-gradient(120deg, rgba(251,113,133,0.1), rgba(239,68,68,0.1))'}}>
<i className="w-3.5 h-3.5" data-lucide="flame"></i>
                    Especiado
                  </span>
<span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg ring-1 ring-white/10 text-xs" style={{background: 'linear-gradient(120deg, rgba(251,191,36,0.1), rgba(120,53,15,0.1))'}}>
<i className="w-3 h-3" data-lucide="tree-pine"></i>
                    Amaderado
                  </span>
</div>
</div>
</div>
</div>
</section>

<section className="mt-10">
<div className="mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Rankings por sitio</h2>
<p className="text-sm text-neutral-400">Percepción olfativa de usuarios según el dominio visitado</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div id="rankingsContainer"></div>
</div>
</section>
</div>
</main>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="demoModal">
<div className="relative w-full max-w-2xl mx-4">
<div className="relative rounded-2xl bg-neutral-900 ring-1 ring-white/10 shadow-2xl overflow-hidden">

<div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
<div>
<h3 className="text-lg font-semibold tracking-tight text-white">Cómo funciona</h3>
<p className="text-sm text-neutral-400">Otorga olores a las páginas que visitas</p>
</div>
<button className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition-colors" id="closeModal">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>

<div className="p-6">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 overflow-hidden">

<div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
<div className="flex items-center gap-1.5">
<div className="h-3 w-3 rounded-full bg-red-500/80"></div>
<div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
<div className="h-3 w-3 rounded-full bg-green-500/80"></div>
</div>
<div className="flex-1 flex items-center gap-2 ml-4">
<i className="w-3 h-3 text-neutral-400" data-lucide="lock"></i>
<div className="text-sm text-neutral-300" id="demoUrl">youtube.com/watch?v=dQw4w9WgXcQ</div>
</div>
</div>

<div className="relative p-8 bg-gradient-to-br from-white/5 to-white/0 h-64 flex items-center justify-center">
<div className="text-center">
<div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-white/10 ring-1 ring-white/15 mb-4">
<i className="w-8 h-8" data-lucide="youtube" id="demoIcon"></i>
</div>
<div className="text-lg font-medium text-white mb-1">Página web simulada</div>
<div className="text-sm text-neutral-400">Contenido de ejemplo</div>
</div>

<div className="absolute bottom-6 right-6 rounded-xl bg-neutral-800/95 ring-1 ring-white/10 shadow-2xl p-4 w-64 opacity-0 translate-y-4 transition-all duration-500" id="scentSelector">
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4" data-lucide="wind"></i>
<span className="text-sm font-medium">Selecciona un olor</span>
</div>
<div className="grid grid-cols-3 gap-2">
<button className="scent-option flex flex-col items-center gap-1.5 p-2 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition-all" data-scent="citrico">
<i className="w-4 h-4" data-lucide="citrus"></i>
<span className="text-xs">Cítrico</span>
</button>
<button className="scent-option flex flex-col items-center gap-1.5 p-2 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition-all" data-scent="floral">
<i className="w-4 h-4" data-lucide="flower-2"></i>
<span className="text-xs">Floral</span>
</button>
<button className="scent-option flex flex-col items-center gap-1.5 p-2 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition-all" data-scent="dulce">
<i className="w-4 h-4" data-lucide="candy"></i>
<span className="text-xs">Dulce</span>
</button>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300" id="successCheck">
<div className="flex flex-col items-center gap-3">
<div className="h-20 w-20 rounded-full bg-green-500/20 ring-2 ring-green-500/50 flex items-center justify-center">
<i className="w-10 h-10 text-green-400" data-lucide="check"></i>
</div>
<div className="text-sm font-medium text-white">¡Olor asignado!</div>
</div>
</div>
</div>
</div>

<div className="mt-6 space-y-3">
<div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 ring-1 ring-white/10 transition-all duration-300 opacity-40" id="step1">
<div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-xs font-medium">1</div>
<div>
<div className="text-sm font-medium text-white">Navega por Internet</div>
<div className="text-xs text-neutral-400">Visita cualquier página web</div>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 ring-1 ring-white/10 transition-all duration-300 opacity-40" id="step2">
<div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-xs font-medium">2</div>
<div>
<div className="text-sm font-medium text-white">Selecciona un olor</div>
<div className="text-xs text-neutral-400">Elige el aroma que mejor describe la página</div>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 ring-1 ring-white/10 transition-all duration-300 opacity-40" id="step3">
<div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-xs font-medium">3</div>
<div>
<div className="text-sm font-medium text-white">Contribuye al mapa olfativo</div>
<div className="text-xs text-neutral-400">Tu voto ayuda a construir el aroma de Internet</div>
</div>
</div>
</div>
<button className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 ring-1 ring-white/10 hover:ring-white/20 transition-colors px-4 py-2.5 text-sm font-medium" id="replayDemo">
<i className="w-4 h-4" data-lucide="rotate-ccw"></i>
            Ver de nuevo
          </button>
</div>
</div>
</div>
</div>


    </>
  );
}
