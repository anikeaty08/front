import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Aurora Comet Background Animation (unchanged/minimal)
      let scene, camera, renderer, particles;

      function initAurora() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({
          canvas: document.getElementById('aurora-canvas'),
          alpha: true
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);

        const particleCount = 800;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);

        const auroraColors = [
          new THREE.Color(1, 1, 1),
          new THREE.Color(1, 1, 1),
          new THREE.Color(1, 1, 1),
          new THREE.Color(1, 1, 1),
          new THREE.Color(1, 1, 1)
        ];

        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;

          positions[i3] = (Math.random() - 0.5) * 2000;
          positions[i3 + 1] = (Math.random() - 0.5) * 1000;
          positions[i3 + 2] = (Math.random() - 0.5) * 1000;

          const color = auroraColors[Math.floor(Math.random() * auroraColors.length)];
          colors[i3] = color.r;
          colors[i3 + 1] = color.g;
          colors[i3 + 2] = color.b;

          sizes[i] = Math.random() * 8 + 2;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.ShaderMaterial({
          vertexShader: `
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;
            varying float vAlpha;
            uniform float time;

            void main() {
              vColor = color;
              vec3 pos = position;

              pos.x += sin(time * 0.001 + position.y * 0.01) * 50.0;
              pos.y += cos(time * 0.0015 + position.x * 0.008) * 30.0;

              float dist = length(pos);
              vAlpha = 1.0 - (dist / 1000.0);
              vAlpha = clamp(vAlpha, 0.0, 0.8);

              vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
              gl_PointSize = size * (300.0 / -mvPosition.z);
              gl_Position = projectionMatrix * mvPosition;
            }
          `,
          fragmentShader: `
            varying vec3 vColor;
            varying float vAlpha;

            void main() {
              float dist = length(gl_PointCoord - vec2(0.5));
              if (dist > 0.5) discard;

              float alpha = (1.0 - dist * 2.0) * vAlpha;
              gl_FragColor = vec4(vColor, alpha);
            }
          `,
          uniforms: {
            time: { value: 0 }
          },
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        });

        particles = new THREE.Points(geometry, material);
        scene.add(particles);

        camera.position.z = 500;

        animate();
      }

      function animate() {
        requestAnimationFrame(animate);

        const time = Date.now();
        particles.material.uniforms.time.value = time;

        particles.rotation.y += 0.0005;
        particles.rotation.x += 0.0002;

        renderer.render(scene, camera);
      }

      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });

      // Card Stack Interaction (minimal)
      const cardsContainer = document.getElementById('cards-container');
      const dots = [
        document.getElementById('dot-1'),
        document.getElementById('dot-2'),
        document.getElementById('dot-3'),
        document.getElementById('dot-4')
      ];

      let currentCard = 1;
      let isAnimating = false;

      function updateDots() {
        dots.forEach((dot, index) => {
          if (index === currentCard - 1) {
            dot.className = 'w-2 h-2 rounded-full bg-blue-400 transition-all duration-300 scale-125';
          } else {
            dot.className = 'w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300';
          }
        });
      }

      function setActiveCard(cardNumber) {
        if (isAnimating || cardNumber === currentCard) return;

        isAnimating = true;
        cardsContainer.className = `card-${cardNumber}-active`;
        currentCard = cardNumber;
        updateDots();

        setTimeout(() => {
          isAnimating = false;
        }, 500);
      }

      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          setActiveCard(index + 1);
        });
      });

      // Auto-rotate suggestions for a cinematic feel
      setInterval(() => {
        if (!isAnimating) {
          const nextCard = currentCard === 4 ? 1 : currentCard + 1;
          setActiveCard(nextCard);
        }
      }, 7000);

      // Transcript: auto-scroll and keyword-driven card focus
      const transcriptEl = document.getElementById('transcript');

      function scrollTranscriptToBottom() {
        transcriptEl.scrollTop = transcriptEl.scrollHeight;
      }

      function analyzeLastProspectAndFocus() {
        const texts = [...transcriptEl.querySelectorAll('.space-y-4 .flex')].map(n => n.textContent.toLowerCase());
        const last = texts[texts.length - 1] || '';
        if (last.includes('price') || last.includes('budget') || last.includes('cost')) setActiveCard(1);
        else if (last.includes('security') || last.includes('soc') || last.includes('sso') || last.includes('compliance')) setActiveCard(2);
        else if (last.includes('timeline') || last.includes('go-live') || last.includes('next month') || last.includes('rollout')) setActiveCard(3);
        else if (last.includes('competitor') || last.includes('alternative') || last.includes('other tools')) setActiveCard(4);
      }

      // Tiny function to append a simulated incoming message
      function appendProspectMessage(text) {
        const wrapper = document.createElement('div');
        wrapper.className = 'flex items-start space-x-3 animate-fade-in';
        wrapper.style.animationDelay = '0s';
        wrapper.style.animationFillMode = 'forwards';
        wrapper.innerHTML = `
          <div class="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-xs font-semibold">P</div>
          <div class="flex-1">
            <div class="inline-flex items-center space-x-2 mb-1">
              <span class="text-white/80 font-medium">Prospect</span>
              <span class="text-[11px] text-white/40">${new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</span>
            </div>
            <div class="rounded-xl px-4 py-3 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-lg shadow-blue-500/10">
              ${text}
            </div>
          </div>
        `;
        transcriptEl.querySelector('.space-y-4').appendChild(wrapper);
        scrollTranscriptToBottom();
        analyzeLastProspectAndFocus();
      }

      // Bottom KPIs live updates
      const perfScore = document.getElementById('perfScore');
      const perfBar = document.getElementById('perfBar');
      const callTime = document.getElementById('callTime');
      const moodDot = document.getElementById('moodDot');
      const moodLabel = document.getElementById('moodLabel');
      const closeBar = document.getElementById('closeBar');
      const closeProb = document.getElementById('closeProb');

      const roiBar = document.getElementById('roiBar');
      const roiConf = document.getElementById('roiConf');
      const secBar = document.getElementById('secBar');
      const secPerc = document.getElementById('secPerc');
      const pilotBar = document.getElementById('pilotBar');
      const winBar = document.getElementById('winBar');
      const winOdds = document.getElementById('winOdds');

      let seconds = 0;
      function pad(n) { return n.toString().padStart(2, '0'); }

      function setMood(prob) {
        // simple mapping: higher close prob => more positive mood
        if (prob > 70) {
          moodDot.className = 'w-2 h-2 rounded-full bg-emerald-400';
          moodLabel.textContent = 'Positive';
          moodLabel.className = 'font-semibold text-white/90';
        } else if (prob > 45) {
          moodDot.className = 'w-2 h-2 rounded-full bg-amber-400';
          moodLabel.textContent = 'Neutral';
          moodLabel.className = 'font-semibold text-white/90';
        } else {
          moodDot.className = 'w-2 h-2 rounded-full bg-rose-400';
          moodLabel.textContent = 'Concerned';
          moodLabel.className = 'font-semibold text-white/90';
        }
      }

      function updateKPIs() {
        seconds += 1;
        callTime.textContent = `${pad(Math.floor(seconds/60))}:${pad(seconds%60)}`;

        // Performance score gentle oscillation
        const basePerf = 72 + Math.round(Math.sin(seconds/12) * 6);
        perfScore.textContent = basePerf;
        perfBar.style.width = `${Math.min(100, Math.max(0, basePerf))}%`;

        // Close probability nudged by "conversation"
        const baseClose = 61 + Math.round(Math.cos(seconds/10) * 8);
        closeBar.style.width = `${Math.min(100, Math.max(0, baseClose))}%`;
        closeProb.textContent = `${baseClose}%`;

        setMood(baseClose);

        // Card metrics
        const roi = 70 + Math.round(Math.sin(seconds/9) * 10);
        roiBar.style.width = `${roi}%`;
        roiConf.textContent = `${roi}%`;

        const sec = 60 + Math.round(Math.cos(seconds/11) * 12);
        secBar.style.width = `${sec}%`;
        secPerc.textContent = `${sec}%`;

        const pilot = 55 + Math.round(Math.sin(seconds/7) * 8);
        pilotBar.style.width = `${pilot}%`;

        const win = 64 + Math.round(Math.cos(seconds/8) * 7);
        winBar.style.width = `${win}%`;
        winOdds.textContent = `${win}%`;
      }
      setInterval(updateKPIs, 1000);

      // Charts
      let c1, c3, c4;
      function makeGradient(ctx, from, to) {
        const g = ctx.createLinearGradient(0, 0, 0, 100);
        g.addColorStop(0, from);
        g.addColorStop(1, to);
        return g;
      }
      function initCharts() {
        const ctx1 = document.getElementById('chart1').getContext('2d');
        const ctx3 = document.getElementById('chart3').getContext('2d');
        const ctx4 = document.getElementById('chart4').getContext('2d');

        c1 = new Chart(ctx1, {
          type: 'line',
          data: {
            labels: ['W1','W2','W3','W4','W5','W6'],
            datasets: [{
              data: [48,52,55,61,63,68],
              borderColor: '#22d3ee',
              backgroundColor: makeGradient(ctx1, 'rgba(34,211,238,0.25)', 'rgba(34,211,238,0.02)'),
              fill: true,
              tension: 0.35,
              pointRadius: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { x: { display:false }, y: { display:false } },
            plugins: { legend: { display:false }, tooltip: { enabled:false } }
          }
        });

        c3 = new Chart(ctx3, {
          type: 'bar',
          data: {
            labels: ['IT','Ops','Sales','Legal'],
            datasets: [{
              data: [6,4,5,3],
              backgroundColor: ['#fbbf24','#fbbf24','#f59e0b','#f59e0b'],
              borderWidth: 0,
              borderRadius: 4,
              barThickness: 12
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { x: { display:false }, y: { display:false } },
            plugins: { legend: { display:false }, tooltip: { enabled:false } }
          }
        });

        c4 = new Chart(ctx4, {
          type: 'line',
          data: {
            labels: ['A','B','C','D','E','F'],
            datasets: [{
              data: [22,31,28,36,42,47],
              borderColor: '#e879f9',
              backgroundColor: makeGradient(ctx4, 'rgba(232,121,249,0.25)', 'rgba(232,121,249,0.02)'),
              fill: true,
              tension: 0.35,
              pointRadius: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { x: { display:false }, y: { display:false } },
            plugins: { legend: { display:false }, tooltip: { enabled:false } }
          }
        });
      }

      // Simulate occasional new prospect notes to trigger focus
      setInterval(() => {
        const scenarios = [
          'Is there any flexibility on pricing if we start smaller?',
          'Our security team asked about data residency in the EU.',
          'We have an internal deadline to go-live by next month.',
          'We are also evaluating an alternative—how do you compare?'
        ];
        const pick = scenarios[Math.floor(Math.random() * scenarios.length)];
        // 1 in 5 chance to append, to avoid clutter
        if (Math.random() < 0.2) appendProspectMessage(pick);
      }, 6000);

      document.addEventListener('DOMContentLoaded', () => {
        // Render lucide icons via JS with 1.5 stroke width
        if (window.lucide && typeof lucide.createIcons === 'function') {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        updateDots();
        initAurora();
        initCharts();
        scrollTranscriptToBottom();
        analyzeLastProspectAndFocus();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<canvas id="aurora-canvas"></canvas>
<nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center space-x-2 opacity-0 animate-fade-in" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
<div className="w-8 h-8 flex bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg items-center justify-center shadow-lg shadow-cyan-500/20">
<i className="w-4 h-4 text-white" data-lucide="sparkles"></i>
</div>
<span className="text-lg font-semibold tracking-tight">Sales Copilot</span>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm opacity-0 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
<a className="text-white/60 hover:text-white transition-colors" href="#">Sessions</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">Playbooks</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">Settings</a>
</div>
</div>
</div>
</nav>
<main className="relative z-10 min-h-screen flex pt-16 pr-6 pl-6 pb-28 items-start">
<div className="max-w-7xl w-full mr-auto ml-auto px-8 pt-8">
<div className="flex flex-col lg:flex-row gap-12 items-start justify-between">

<div className="flex-1 lg:pr-8 w-full">
<div className="flex items-center justify-between mb-4 opacity-0 animate-fade-in" style={{animationDelay: '0.25s', animationFillMode: 'forwards'}}>
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
<p className="text-sm uppercase tracking-widest text-white/60 font-medium">Live Conversation</p>
</div>
<div className="flex items-center space-x-3 text-xs text-white/60">
<div className="flex items-center space-x-1">
<i className="w-4 h-4 text-white/70" data-lucide="mic"></i>
<span>Transcribing</span>
</div>
<div className="flex items-center space-x-1">
<i className="w-4 h-4 text-white/70" data-lucide="gauge"></i>
<span>Real-time AI</span>
</div>
</div>
</div>
<div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-6 max-h-[66vh] overflow-y-auto opacity-0 animate-fade-in" id="transcript" style={{animationDelay: '0.35s', animationFillMode: 'forwards', scrollBehavior: 'smooth'}}>
<div className="space-y-4 text-[15px] leading-relaxed">

<div className="flex items-start space-x-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-xs font-semibold">P</div>
<div className="flex-1">
<div className="inline-flex items-center space-x-2 mb-1">
<span className="text-white/80 font-medium">Prospect</span>
<span className="text-[11px] text-white/40">12:04 PM</span>
</div>
<div className="rounded-xl px-4 py-3 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-lg shadow-blue-500/10">
                      We like the feature set, but the price feels high for our current stage.
                    </div>
</div>
</div>

<div className="flex items-start space-x-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-xs font-semibold">M</div>
<div className="flex-1">
<div className="inline-flex items-center space-x-2 mb-1">
<span className="text-white/80 font-medium">Me</span>
<span className="text-[11px] text-white/40">12:05 PM</span>
</div>
<div className="rounded-xl px-4 py-3 bg-white/5 border border-white/10">
                      Totally understand. Can you share the top outcomes you’re targeting this quarter?
                    </div>
</div>
</div>

<div className="flex items-start space-x-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-xs font-semibold">P</div>
<div className="flex-1">
<div className="inline-flex items-center space-x-2 mb-1">
<span className="text-white/80 font-medium">Prospect</span>
<span className="text-[11px] text-white/40">12:06 PM</span>
</div>
<div className="rounded-xl px-4 py-3 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-lg shadow-blue-500/10">
                      Security is big for us. We need SOC 2 and SSO from day one.
                    </div>
</div>
</div>

<div className="flex items-start space-x-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-xs font-semibold">M</div>
<div className="flex-1">
<div className="inline-flex items-center space-x-2 mb-1">
<span className="text-white/80 font-medium">Me</span>
<span className="text-[11px] text-white/40">12:06 PM</span>
</div>
<div className="rounded-xl px-4 py-3 bg-white/5 border border-white/10">
                      Great news—we’re fully SOC 2 Type II and support SSO (Okta, Azure AD).
                    </div>
</div>
</div>

<div className="flex items-start space-x-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-xs font-semibold">P</div>
<div className="flex-1">
<div className="inline-flex items-center space-x-2 mb-1">
<span className="text-white/80 font-medium">Prospect</span>
<span className="text-[11px] text-white/40">12:07 PM</span>
</div>
<div className="rounded-xl px-4 py-3 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-lg shadow-blue-500/10">
                      Our go-live target is next month. Can you hit that?
                    </div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col space-y-8 items-center w-full lg:w-auto">
<section className="card-1-active" id="cards-container" style={{animationDelay: '0.4s', animationFillMode: 'forwards', cursor: 'grab'}}>

<article className="relative h-[34rem] glass rounded-2xl shadow-2xl">
<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-transparent pointer-events-none"></div>
<div className="h-full flex flex-col pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-2">
<i className="w-5 h-5 text-cyan-400" data-lucide="badge-dollar-sign"></i>
<span className="text-xs font-medium text-white/60 uppercase tracking-wider">AI Suggestion</span>
</div>
<div className="flex items-center space-x-2">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-amber-400/10 text-amber-300 border border-amber-400/20">
<span className="w-2 h-2 rounded-full bg-amber-400 mr-1"></span>
                        High Urgency
                      </span>
</div>
</div>
<div className="flex-1">
<h3 className="text-2xl font-semibold tracking-tight mb-2">Price Objection: Reframe to Outcomes</h3>
<p className="text-sm text-white/70 mb-4">
                      Anchor ROI and phase pricing. Offer a pilot tied to the top 3 outcomes.
                    </p>
<div className="rounded-lg border border-white/10 bg-white/5 p-3 mb-4">
<div className="text-sm text-white/80">
                        “Given your Q3 goals, teams see a 41% faster rollout and a 3.4x ROI in 90 days.
                        We can start with a pilot at team-level pricing and expand once the KPIs hit.”
                      </div>
</div>
<div className="space-y-3 mb-4">
<div className="flex items-center justify-between text-xs">
<span className="text-white/60">ROI Confidence</span>
<span className="font-semibold text-emerald-400" id="roiConf">76%</span>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-500" id="roiBar" style={{width: '76%'}}></div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-3 mb-4">
<div className="text-xs text-white/60 mb-2">Cost vs. Value Trend (last 6 weeks)</div>
<div className="relative h-20 w-full">
<canvas className="absolute inset-0" id="chart1"></canvas>
</div>
</div>
</div>
<div className="mt-auto grid grid-cols-2 gap-3">
<button className="w-full py-2.5 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/20">
<i className="inline w-4 h-4 mr-2" data-lucide="mouse-pointer-click"></i>
                      Insert into Call
                    </button>
<button className="w-full py-2.5 px-4 bg-white/5 border border-white/10 rounded-xl text-white font-medium hover:bg-white/10 transition-all duration-300">
<i className="inline w-4 h-4 mr-2" data-lucide="copy"></i>
                      Copy
                    </button>
</div>
</div>
</article>

<article className="relative h-[34rem] glass rounded-2xl shadow-2xl">
<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-teal-400/5 to-transparent pointer-events-none"></div>
<div className="h-full flex flex-col p-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-2">
<i className="w-5 h-5 text-emerald-400" data-lucide="shield-check"></i>
<span className="text-xs font-medium text-white/60 uppercase tracking-wider">AI Suggestion</span>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
<span className="w-2 h-2 rounded-full bg-emerald-400 mr-1"></span>
                      Positive Sentiment
                    </span>
</div>
<div className="flex-1">
<h3 className="text-2xl font-semibold tracking-tight mb-2">Security: Certs and Enterprise Readiness</h3>
<p className="text-sm text-white/70 mb-4">
                      Validate SOC 2 Type II, SSO, and data residency. Share brief architecture.
                    </p>
<div className="rounded-lg border border-white/10 bg-white/5 p-3 mb-4">
<div className="text-sm text-white/80">
                        “We’re SOC 2 Type II, SSO with Okta/Azure AD, least-privilege access, and audit trails.
                        Here’s the one-page architecture to forward to your security team.”
                      </div>
</div>
<div className="grid grid-cols-3 gap-3 mb-4 text-xs">
<div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
<div className="text-white/60 mb-1">SSO</div>
<div className="font-semibold">On</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
<div className="text-white/60 mb-1">SOC 2</div>
<div className="font-semibold">Type II</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
<div className="text-white/60 mb-1">Uptime</div>
<div className="font-semibold text-emerald-400" id="uptime">99.95%</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="text-xs text-white/60 mb-2">Security Checklist Completion</div>
<div className="w-full bg-white/10 rounded-full h-2 mb-2">
<div className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full transition-all duration-500" id="secBar" style={{width: '64%'}}></div>
</div>
<div className="text-right text-xs font-medium text-emerald-300" id="secPerc">64%</div>
</div>
</div>
<div className="mt-auto grid grid-cols-2 gap-3">
<button className="w-full py-2.5 px-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl text-white font-medium hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg shadow-emerald-500/20">
<i className="inline w-4 h-4 mr-2" data-lucide="send"></i>
                      Send One-Pager
                    </button>
<button className="w-full py-2.5 px-4 bg-white/5 border border-white/10 rounded-xl text-white font-medium hover:bg-white/10 transition-all duration-300">
<i className="inline w-4 h-4 mr-2" data-lucide="clipboard-list"></i>
                      Checklist
                    </button>
</div>
</div>
</article>

<article className="relative h-[34rem] glass rounded-2xl shadow-2xl">
<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/10 via-orange-400/5 to-transparent pointer-events-none"></div>
<div className="h-full flex flex-col pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-2">
<i className="w-5 h-5 text-amber-300" data-lucide="timer"></i>
<span className="text-xs font-medium text-white/60 uppercase tracking-wider">AI Suggestion</span>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-orange-400/10 text-orange-300 border border-orange-400/20">
<span className="w-2 h-2 rounded-full bg-orange-400 mr-1"></span>
                      Medium Urgency
                    </span>
</div>
<div className="flex-1">
<h3 className="text-2xl font-semibold tracking-tight mb-2">Timeline: Fast-Track Plan</h3>
<p className="text-sm text-white/70 mb-4">
                      Propose 2-week pilot, template onboarding, and change champion.
                    </p>
<div className="rounded-lg border border-white/10 bg-white/5 p-3 mb-4">
<div className="text-sm text-white/80">
                        “We can hit next month with a 2-week pilot: kickoff, SSO, templates,
                        and go-live. You’ll have dashboards by day 5.”
                      </div>
</div>
<div className="grid grid-cols-2 gap-3 mb-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="text-xs text-white/60 mb-1">Pilot Readiness</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-gradient-to-r from-amber-400 to-yellow-400 h-2 rounded-full transition-all duration-500" id="pilotBar" style={{width: '58%'}}></div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="text-xs text-white/60 mb-1">Stakeholder Map</div>
<div className="relative h-20 w-full">
<canvas className="absolute inset-0" id="chart3"></canvas>
</div>
</div>
</div>
</div>
<div className="mt-auto grid grid-cols-2 gap-3">
<button className="w-full py-2.5 px-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl text-black font-medium hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-orange-400/20">
<i className="inline w-4 h-4 mr-2" data-lucide="calendar-plus"></i>
                      Propose Pilot Dates
                    </button>
<button className="w-full py-2.5 px-4 bg-white/5 border border-white/10 rounded-xl text-white font-medium hover:bg-white/10 transition-all duration-300">
<i className="inline w-4 h-4 mr-2" data-lucide="file-text"></i>
                      Share Plan
                    </button>
</div>
</div>
</article>

<article className="relative h-[34rem] glass rounded-2xl shadow-2xl">
<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/10 via-fuchsia-500/5 to-transparent pointer-events-none"></div>
<div className="h-full flex flex-col pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-2">
<i className="w-5 h-5 text-pink-400" data-lucide="trophy"></i>
<span className="text-xs font-medium text-white/60 uppercase tracking-wider">AI Suggestion</span>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-pink-400/10 text-pink-300 border border-pink-400/20">
<span className="w-2 h-2 rounded-full bg-pink-400 mr-1"></span>
                      Neutral
                    </span>
</div>
<div className="flex-1">
<h3 className="text-2xl font-semibold tracking-tight mb-2">Competitor: Value Contrast</h3>
<p className="text-sm text-white/70 mb-4">
                      Reframe with unique capabilities and TCO, not feature-by-feature.
                    </p>
<div className="rounded-lg border border-white/10 bg-white/5 p-3 mb-4">
<div className="text-sm text-white/80">
                        “Unlike point tools, we unify data and actions—cutting tool sprawl by 38%.
                        That’s why switching costs net out in 1–2 quarters.”
                      </div>
</div>
<div className="grid grid-cols-2 gap-3 mb-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="text-xs text-white/60 mb-1">Win Odds</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-gradient-to-r from-fuchsia-500 to-pink-500 h-2 rounded-full transition-all duration-500" id="winBar" style={{width: '67%'}}></div>
</div>
<div className="text-right text-xs text-pink-300 mt-1" id="winOdds">67%</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="text-xs text-white/60 mb-2">Feature Impact</div>
<div className="relative h-20 w-full">
<canvas className="absolute inset-0" id="chart4"></canvas>
</div>
</div>
</div>
</div>
<div className="mt-auto grid grid-cols-2 gap-3">
<button className="w-full py-2.5 px-4 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-xl text-white font-medium hover:from-fuchsia-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-pink-500/20">
<i className="inline w-4 h-4 mr-2" data-lucide="languages"></i>
                      Handle Objection
                    </button>
<button className="w-full py-2.5 px-4 bg-white/5 border border-white/10 rounded-xl text-white font-medium hover:bg-white/10 transition-all duration-300">
<i className="inline w-4 h-4 mr-2" data-lucide="share"></i>
                      Share Snippet
                    </button>
</div>
</div>
</article>
</section>
<div className="flex space-x-3 opacity-0 animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
<button aria-label="Card 1" className="w-2 h-2 rounded-full bg-blue-400 transition-all duration-300 scale-125" id="dot-1"></button>
<button aria-label="Card 2" className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300" id="dot-2"></button>
<button aria-label="Card 3" className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300" id="dot-3"></button>
<button aria-label="Card 4" className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300" id="dot-4"></button>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-0 left-0 right-0 z-50">
<div className="mx-auto max-w-7xl px-6 lg:px-8 pb-6">
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3 sm:px-6 shadow-2xl shadow-blue-500/10">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">

<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-cyan-400" data-lucide="activity"></i>
<span className="text-white/70">Performance</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-24 bg-white/10 rounded-full h-1.5">
<div className="h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500" id="perfBar" style={{width: '72%'}}></div>
</div>
<span className="font-semibold" id="perfScore">72</span>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-white/70" data-lucide="clock-8"></i>
<span className="text-white/70">Duration</span>
</div>
<span className="font-semibold" id="callTime">00:00</span>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-white/70" data-lucide="smile"></i>
<span className="text-white/70">Mood</span>
</div>
<div className="inline-flex items-center space-x-2">
<span className="w-2 h-2 rounded-full bg-emerald-400" id="moodDot"></span>
<span className="font-semibold text-white/90" id="moodLabel">Positive</span>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-white/70" data-lucide="target"></i>
<span className="text-white/70">Close Prob.</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-24 bg-white/10 rounded-full h-1.5">
<div className="h-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-500" id="closeBar" style={{width: '61%'}}></div>
</div>
<span className="font-semibold text-emerald-300" id="closeProb">61%</span>
</div>
</div>
</div>
</div>
</div>
</div>
<footer className="relative z-10 mt-6 py-10 px-6 border-t border-white/5 hidden">
<div className="max-w-7xl mx-auto">

</div>
</footer>


    </>
  );
}
