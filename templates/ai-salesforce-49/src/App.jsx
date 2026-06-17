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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
display: ['"Plus Jakarta Sans"', 'sans-serif'],
mono: ['"JetBrains Mono"', 'monospace'],
},
colors: {
canvas: '#FAFAFA',
surface: '#FFFFFF',
obsidian: '#111111',
charcoal: '#333333',
subtle: '#737373',
border: '#E5E5E5',
accent: '#252525',
primary: '#000000',
},
letterSpacing: {
tight: '-0.02em',
tighter: '-0.04em',
}
}
}
}



          (function(){const section=document.getElementById('decision-lifecycle');const header=document.getElementById('lifecycle-header');const line=document.getElementById('lifecycle-line');const steps=section.querySelectorAll('.lifecycle-step');function handleScroll(){if(!section)return;const rect=section.getBoundingClientRect();const viewH=window.innerHeight;const travelDistance=rect.height-viewH;const scrolled=-rect.top;let progress=scrolled/travelDistance;progress=Math.max(0,Math.min(1,progress));if(progress>0.02)header.style.opacity='1';else header.style.opacity='0';line.style.height=(progress*100)+'%';steps.forEach(step=>{const t=parseFloat(step.dataset.threshold);if(progress>=t){if(progress<t+0.15){step.classList.add('active');step.classList.replace('opacity-30','opacity-100');step.style.transform='scale(1.05)';}else{step.classList.add('active');step.classList.replace('opacity-30','opacity-50');step.style.transform='scale(1)';}}else{step.classList.remove('active');step.classList.replace('opacity-100','opacity-30');step.classList.replace('opacity-50','opacity-30');step.style.transform='scale(1)';}});};window.addEventListener('scroll',handleScroll,{passive:true});handleScroll();})();
        


              (function() {
                const grid = document.getElementById('def-grid');
                const line = document.getElementById('def-line-fill');
                const steps = grid.querySelectorAll('.def-step');
                steps.forEach(s => s.classList.add('def-inactive'));
                function activateStep(index) {
                  const percentage = index === 0 ? 0 : (index / (steps.length - 1)) * 100;
                  line.style.width = percentage + '%';
                  steps.forEach((step, i) => {
                    if (i === index) { step.classList.add('def-active'); step.classList.remove('def-inactive'); }
                    else { step.classList.remove('def-active'); step.classList.add('def-inactive'); }
                  });
                }
                const observer = new IntersectionObserver((entries) => {
                  if (entries[0].isIntersecting) {
                    let current = 0; activateStep(0);
                    const interval = setInterval(() => {
                      current++; if (current >= steps.length) clearInterval(interval); else activateStep(current);
                    }, 900);
                    observer.disconnect();
                  }
                }, { threshold: 0.5 });
                observer.observe(grid);
                steps.forEach((step, i) => { step.addEventListener('mouseenter', () => activateStep(i)); });
              })();
            


      uniform float uTime; uniform float uDistortion; uniform float uSize; uniform vec2 uMouse; varying float vNoise;
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; } vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; } vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); } vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
      float snoise(vec3 v) { const vec2 C = vec2(1.0/6.0, 1.0/3.0) ; const vec4 D = vec4(0.0, 0.5, 1.0, 2.0); vec3 i = floor(v + dot(v, C.yyy) ); vec3 x0 = v - i + dot(i, C.xxx) ; vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1.0 - g; vec3 i1 = min( g.xyz, l.zxy ); vec3 i2 = max( g.xyz, l.zxy ); vec3 x1 = x0 - i1 + 1.0 * C.xxx; vec3 x2 = x0 - i2 + 2.0 * C.xxx; vec3 x3 = x0 - 1.0 + 3.0 * C.xxx; i = mod289(i); vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 )); float n_ = 1.0/7.0; vec3 ns = n_ * D.wyz - D.xzx; vec4 j = p - 49.0 * floor(p * ns.z *ns.z); vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7.0 * x_ ); vec4 x = x_ *ns.x + ns.yyyy; vec4 y = y_ *ns.x + ns.yyyy; vec4 h = 1.0 - abs(x) - abs(y); vec4 b0 = vec4( x.xy, y.xy ); vec4 b1 = vec4( x.zw, y.zw ); vec4 s0 = floor(b0)*2.0 + 1.0; vec4 s1 = floor(b1)*2.0 + 1.0; vec4 sh = -step(h, vec4(0.0)); vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ; vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ; vec3 p0 = vec3(a0.xy,h.x); vec3 p1 = vec3(a0.zw,h.y); vec3 p2 = vec3(a1.xy,h.z); vec3 p3 = vec3(a1.zw,h.w); vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3))); p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w; vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0); m = m * m; return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) ); }
      void main() { vec3 pos = position; float noise = snoise(vec3(pos.x * 0.5 + uTime * 0.15, pos.y * 0.5, pos.z * 0.5)); vNoise = noise; vec3 newPos = pos + (normal * noise * uDistortion); float dist = distance(uMouse * 10.0, newPos.xy); float interaction = smoothstep(6.0, 0.0, dist); newPos.z += interaction * 1.5; vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0); gl_Position = projectionMatrix * mvPosition; gl_PointSize = uSize * (20.0 / -mvPosition.z); }
    


      uniform vec3 uColor; varying float vNoise; void main() { vec2 center = gl_PointCoord - vec2(0.5); float dist = length(center); if (dist > 0.45) discard; float alpha = 1.0; vec3 color1 = uColor; vec3 color2 = vec3(0.25, 0.35, 0.45); vec3 finalColor = mix(color1, color2, vNoise * 0.5 + 0.5); gl_FragColor = vec4(finalColor, alpha); }
    


      lucide.createIcons();
      const container = document.getElementById('canvas-container');
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0xF5F5F7, 0.04);
      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 0, 20);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
      const objectGroup = new THREE.Group();
      scene.add(objectGroup);
      const geometry = new THREE.BoxGeometry(9, 9, 9, 40, 40, 40);
      const uniforms = { uTime: { value: 0 }, uDistortion: { value: 0.0 }, uSize: { value: 1.8 }, uColor: { value: new THREE.Color('#0F172A') }, uMouse: { value: new THREE.Vector2(0, 0) } };
      const material = new THREE.ShaderMaterial({ vertexShader: document.getElementById('vertexShader').textContent, fragmentShader: document.getElementById('fragmentShader').textContent, uniforms: uniforms, transparent: true, blending: THREE.NormalBlending });
      const points = new THREE.Points(geometry, material);
      objectGroup.add(points);
      let time = 0; let mouseX = 0, mouseY = 0;
      document.addEventListener('mousemove', (e) => { mouseX = (e.clientX / window.innerWidth) * 2 - 1; mouseY = -(e.clientY / window.innerHeight) * 2 + 1; uniforms.uMouse.value.x += (mouseX - uniforms.uMouse.value.x) * 0.03; uniforms.uMouse.value.y += (mouseY - uniforms.uMouse.value.y) * 0.03; });
      function adjustLayout() { const w = window.innerWidth; if(w < 1024) { objectGroup.position.set(4, 5, -8); objectGroup.scale.set(0.65, 0.65, 0.65); } else { objectGroup.position.set(0, 2.5, 0); objectGroup.scale.set(0.65, 0.65, 0.65); } }
      window.addEventListener('resize', () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); adjustLayout(); });
      adjustLayout();
      window.addEventListener('scroll', () => { const scrollY = window.scrollY; objectGroup.rotation.z = scrollY * 0.0005; const w = window.innerWidth; const baseY = w < 1024 ? 5 : 2.5; objectGroup.position.y = baseY + scrollY * 0.005; const header = document.querySelector('header'); if(header) { if(scrollY > 50) { header.classList.add('shadow-sm'); header.classList.replace('bg-canvas/90', 'bg-white/90'); } else { header.classList.remove('shadow-sm'); header.classList.replace('bg-white/90', 'bg-canvas/90'); } } });
      function animate() { requestAnimationFrame(animate); time += 0.008; objectGroup.rotation.y = time * 0.2; uniforms.uTime.value = time; camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02; camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.02; camera.lookAt(0,0,0); renderer.render(scene, camera); }
      animate();
    


    document.addEventListener('DOMContentLoaded', () => {
      // Deal Decision Flow Logic
      var el = document.getElementById('ddf-pct');
      if (el) {
        setTimeout(function() {
          var t0 = Date.now(), dur = 1000, end = 94.7;
          (function tick() {
            var p = Math.min((Date.now() - t0) / dur, 1);
            el.textContent = (p * end).toFixed(1) + '%';
            if (p < 1) requestAnimationFrame(tick);
          })();
        }, 6000);
      }
      setTimeout(function() {
        const replayBtn = document.getElementById('replay-btn');
        if(replayBtn) replayBtn.classList.remove('opacity-0');
      }, 10000);
      document.getElementById('replay-btn')?.addEventListener('click', function() {
        var svg = document.getElementById('ddf-svg');
        var parent = svg.parentNode;
        var clone = svg.cloneNode(true);
        parent.replaceChild(clone, svg);
        var el = document.getElementById('ddf-pct');
        if (el) el.textContent = '0.0%';
        setTimeout(function() {
          var el2 = document.getElementById('ddf-pct');
          if (!el2) return;
          var t0 = Date.now(), dur = 1000, end = 94.7;
          (function tick() {
            var p = Math.min((Date.now() - t0) / dur, 1);
            el2.textContent = (p * end).toFixed(1) + '%';
            if (p < 1) requestAnimationFrame(tick);
          })();
        }, 6000);
      });

      // Testimonial Logic
      (function() {
        const container = document.getElementById('testimonial-container');
        const prevBtn = document.getElementById('testimonial-prev');
        const nextBtn = document.getElementById('testimonial-next');
        if(!container || !prevBtn || !nextBtn) return;
        const slides = container.querySelectorAll('[data-index]');
        let currentIndex = 0;
        const maxIndex = slides.length - 1;
        const stats = [
          [{ val: "2-5", lbl: "Days to Deploy" }, { val: "0%", lbl: "Financial Risk" }, { val: "100%", lbl: "Money-Back Guarantee" }],
          [{ val: "3x", lbl: "Win Rate" }, { val: "Day 1", lbl: "AI Activation" }, { val: "100%", lbl: "Ecosystem Value" }],
          [{ val: "Zero", lbl: "Scope Creep" }, { val: "50%", lbl: "Faster Close" }, { val: "Full", lbl: "Compliance" }]
        ];
        function updateState(isInit) {
          slides.forEach(slide => {
            const idx = parseInt(slide.dataset.index);
            if (idx === currentIndex) { slide.classList.remove('opacity-0', 'pointer-events-none'); slide.classList.add('opacity-100'); }
            else { slide.classList.remove('opacity-100'); slide.classList.add('opacity-0', 'pointer-events-none'); }
          });
          prevBtn.disabled = currentIndex === 0;
          nextBtn.disabled = currentIndex === maxIndex;
          const data = stats[currentIndex];
          for(let i=0; i<3; i++) {
            const val = document.getElementById('t-stat-val-' + i);
            const lbl = document.getElementById('t-stat-lbl-' + i);
            if(val && lbl) {
              if(!isInit) {
                val.classList.add('opacity-0', '-translate-y-2'); lbl.classList.add('opacity-0');
                setTimeout(() => { val.textContent = data[i].val; lbl.textContent = data[i].lbl; val.classList.remove('opacity-0', '-translate-y-2'); lbl.classList.remove('opacity-0'); }, 300);
              } else { val.textContent = data[i].val; lbl.textContent = data[i].lbl; }
            }
          }
        }
        prevBtn.addEventListener('click', () => { if (currentIndex > 0) { currentIndex--; updateState(); } });
        nextBtn.addEventListener('click', () => { if (currentIndex < maxIndex) { currentIndex++; updateState(); } });
        updateState(true);
      })();
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
      

<div className="fixed inset-0 z-0 technical-grid pointer-events-none"></div>
<div className="fixed inset-0 z-0 opacity-100" id="canvas-container"><canvas height="1652" style={{display: 'block', width: '1230px', height: '826px'}} width="2460"></canvas><canvas height="1652" style={{display: 'block', width: '1230px', height: '826px'}} width="2460"></canvas><canvas height="1652" style={{display: 'block', width: '1230px', height: '826px'}} width="2460"></canvas></div>

<header className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-5 md:px-12 flex justify-between items-center backdrop-blur-md border-b border-border/50 transition-all duration-300">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-obsidian text-white flex items-center justify-center rounded-sm">
<svg className="lucide lucide-zap w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<span className="font-sans text-sm font-bold tracking-tight text-obsidian uppercase">
          Business-Ready
        </span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#">
          Overview
        </a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#">
          Why It Works
        </a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#">
          Comparison
        </a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#">
          Pricing
        </a>
</nav>
<div className="flex items-center gap-5">
<a className="hidden md:block font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#">
          Login
        </a>
<button className="group relative isolate overflow-hidden bg-obsidian text-white text-xs font-semibold px-6 py-2.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.04] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.25)] hover:ring-white/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-obsidian/20 focus:ring-offset-1">
<div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent z-10"></div>
<span className="relative z-20">Activate Engine</span>
</button>
</div>
</header>

<div className="z-10 flex flex-col w-full relative">

<section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-32 pb-20 gap-16">
<div className="max-w-2xl space-y-10 relative z-10">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-border/60 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="font-sans text-[11px] font-medium text-subtle tracking-tight">
                World’s 1st Business-Ready Salesforce
              </span>
</div>
<h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-obsidian leading-[0.95]">
              Win More SMB Deals
              <br/>
<span className="text-subtle">No Upfront Cost.</span>
</h1>
<p className="max-w-md font-sans text-base text-subtle leading-relaxed">
              The AI-Powered Revenue Engine That Turns Salesforce Hesitation Into Signed Contracts. Live in 2-5 days.
            </p>
</div>
<div className="flex flex-wrap items-center gap-4">
<button className="group relative isolate overflow-hidden bg-obsidian text-white text-sm font-semibold px-8 py-3.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)] hover:ring-white/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-obsidian/20 focus:ring-offset-2 flex items-center gap-2">
<div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0 pointer-events-none"></div>
<span className="relative z-10">Activate Business-Ready</span>
<svg className="lucide lucide-arrow-right relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<button className="px-8 py-3.5 bg-white text-obsidian border border-border text-sm font-medium rounded shadow-sm transition-all duration-300 ease-out hover:bg-gray-50 hover:border-obsidian/40 hover:text-black hover:shadow-md active:scale-[0.97] active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-obsidian/10 focus:ring-offset-2">
              Download AE Overview
            </button>
</div>
</div>

<div className="relative w-full max-w-lg aspect-square lg:aspect-[4/3] flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-canvas via-white to-canvas opacity-50 blur-3xl"></div>
<div className="premium-card w-full h-full p-0 relative overflow-hidden rounded-xl bg-white border border-border shadow-lg">
<div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-obsidian to-transparent z-10"></div>

<div className="flex justify-between items-center border-b border-border/50 px-6 py-4 bg-white">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
<span className="text-[10px] uppercase tracking-wider font-semibold text-subtle font-mono">
                  Deal Decision Flow
                </span>
</div>
<div className="w-12 h-1.5 rounded-full bg-border/50"></div>
</div>

<div className="w-full h-full relative" id="ddf-container">
<svg className="bg-white" height="100%" id="ddf-svg" preserveaspectratio="xMidYMid meet" viewbox="0 0 400 260" width="100%">
<defs>
<pattern height="20" id="ddflow-grid" patternunits="userSpaceOnUse" width="20">
<path d="M 20 0 L 0 0 0 20" fill="none" stroke="#F0F0F0" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#ddflow-grid)" height="260" width="400"></rect>

<path d="M48,130 C92,130 95,69 140,69" fill="none" stroke="#EBEBEB" strokeWidth="1.5"></path>
<path d="M48,130 C92,130 95,151 140,151" fill="none" stroke="#EBEBEB" strokeWidth="1.5"></path>
<path d="M262,69 C300,69 325,110 352,130" fill="none" stroke="#EBEBEB" strokeWidth="1.5"></path>
<path d="M280,151 C316,151 335,138 352,130" fill="none" stroke="#EBEBEB" strokeWidth="1.5"></path>

<path className="ddf-friction" d="M48,130 C92,130 95,69 140,69" fill="none" strokeLinecap="round"></path>

<path className="ddf-solution" d="M48,130 C92,130 95,151 140,151" fill="none" stroke="#111" strokeLinecap="round" strokeWidth="2"></path>

<path className="ddf-exit" d="M280,151 C316,151 335,138 352,130" fill="none" stroke="#111" strokeLinecap="round" strokeWidth="2"></path>

<circle className="ddf-start" cx="48" cy="130" fill="#111" r="7"></circle>
<text className="ddf-start-label" fill="#555" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8.5" font-weight="600" text-anchor="middle" x="48" y="152">SMB Prospect</text>

<g className="ddf-objections">
<text fill="#888" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="7" font-weight="700" letter-spacing="0.8" x="141" y="56">OBJECTIONS</text>
<rect fill="white" height="21" rx="4" stroke="#111" strokeWidth="1.5" width="122" x="140" y="59"></rect>
<text fill="#444" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="7.5" font-weight="500" text-anchor="middle" x="201" y="73.5">Upfront Cost · Timeline · AI Gaps</text>
</g>

<g className="ddf-brs">
<text fill="#3B82F6" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="7" font-weight="700" letter-spacing="0.5" x="141" y="137">BUSINESS-READY SALESFORCE</text>
<rect fill="white" height="21" rx="4" stroke="#3B82F6" strokeWidth="1.5" width="140" x="140" y="141"></rect>
<text fill="#444" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="7.5" font-weight="500" text-anchor="middle" x="210" y="155.5">$599/mo · AI Included · 2–5 Days</text>
</g>

<g className="ddf-badge">
<rect fill="#111" height="22" rx="3" width="120" x="144" y="96"></rect>
<text fill="white" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="9" font-weight="600" text-anchor="middle" x="204" y="111">Deal Confidence: <tspan id="ddf-pct">0.0%</tspan></text>
</g>

<g className="ddf-bottom">
<rect fill="white" height="16" rx="3" stroke="#CCCCCC" strokeWidth="0.8" width="84" x="140" y="185"></rect>
<text fill="#AAAAAA" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="7.5" text-anchor="middle" x="182" y="197">Risk Removed</text>
<rect fill="white" height="16" rx="3" stroke="#CCCCCC" strokeWidth="0.8" width="97" x="140" y="207"></rect>
<text fill="#AAAAAA" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="7.5" text-anchor="middle" x="188" y="219">Value Immediate</text>
</g>

<circle className="ddf-end" cx="352" cy="130" fill="#111" r="14"></circle>
<path className="ddf-check" d="M346 130l4.5 4.5 8-8" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<text className="ddf-end-label" fill="#111" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8.5" font-weight="600" text-anchor="middle" x="352" y="157">Signed Contract</text>
</svg>
<button className="absolute bottom-4 right-4 bg-obsidian text-white text-[10px] font-semibold px-3 py-1.5 rounded transition-opacity duration-300 hover:bg-neutral-800" id="replay-btn">
                Replay Flow
              </button>
</div>
</div>
</div>
</section>

<section className="border-y border-border/60 py-16 bg-white">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
<p className="text-xs font-semibold text-obsidian whitespace-nowrap md:w-auto w-full text-center md:text-left uppercase">
            Built for the Salesforce Ecosystem
          </p>
<div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-8 opacity-60 hover:opacity-100 transition-opacity duration-500">

<span className="font-sans text-lg font-bold text-obsidian tracking-tight">
              Salesforce
            </span>
<span className="font-sans text-lg font-bold text-obsidian tracking-tight">
              Tableau
            </span>
<span className="font-sans text-lg font-bold text-obsidian tracking-tight">
              Slack
            </span>
<span className="font-sans text-lg font-bold text-obsidian tracking-tight">
              MuleSoft
            </span>
</div>
</div>
</section>

<section className="relative w-full bg-canvas border-b border-border/60" id="decision-lifecycle" style={{height: '400vh'}}>
<div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
<div className="max-w-4xl w-full px-6 md:px-12 relative z-10 flex flex-col items-center h-full py-20">
<div className="text-center mb-12 shrink-0 opacity-0 transition-opacity duration-700" id="lifecycle-header">
<h2 className="font-sans text-2xl md:text-3xl font-semibold text-obsidian tracking-tight mb-3">
                The Shift in Logic
              </h2>
<p className="text-subtle text-sm max-w-md mx-auto">
                Replacing "Software + Uncertainty" with "Revenue Certainty".
              </p>
</div>
<div className="relative w-full max-w-2xl flex-1 flex flex-col justify-center my-auto">
<div className="absolute left-1/2 top-4 bottom-4 w-px bg-border/60 -translate-x-1/2"></div>
<div className="absolute left-1/2 top-4 w-px bg-obsidian -translate-x-1/2 transition-all duration-75 ease-linear h-0 max-h-[calc(100%-2rem)]" id="lifecycle-line" style={{height: '100%'}}></div>
<div className="space-y-16 py-8 relative">

<div className="lifecycle-step group flex items-center justify-between w-full transition-all duration-500" data-threshold="0.1">
<div className="w-[42%] text-right pr-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      01 The Problem
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      SMB Objection
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      Why deals stall.
                    </p>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<div className="bg-white border border-border p-3 rounded shadow-sm inline-block">
<div className="flex items-center gap-2">
<iconify-icon className="text-subtle" icon="solar:danger-triangle-linear"></iconify-icon>
<span className="text-xs font-medium text-obsidian">
                          Implementation Cost &amp; Timeline Risk
                        </span>
</div>
</div>
</div>
</div>

<div className="lifecycle-step group flex items-center justify-between w-full transition-all duration-500" data-threshold="0.25">
<div className="w-[42%] text-right pr-8">
<div className="bg-white border border-border p-3 rounded shadow-sm inline-block text-left">
<span className="text-[10px] text-subtle block mb-1">
                        Traditional Quote
                      </span>
<span className="text-xs font-medium text-obsidian">
                        $15,000+ Upfront Investment
                      </span>
</div>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      02 High Friction
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      Financial Risk
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      Investing before value.
                    </p>
</div>
</div>

<div className="lifecycle-step group flex items-center justify-between w-full transition-all duration-500" data-threshold="0.4">
<div className="w-[42%] text-right pr-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      03 Delayed Value
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      Slow Timeline
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      3-6 Weeks Onboarding.
                    </p>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<div className="bg-white border border-border p-3 rounded shadow-sm inline-flex items-center gap-3">
<div className="w-8 h-8 bg-slate-50 rounded flex items-center justify-center border border-border/50">
<iconify-icon className="text-subtle" icon="solar:calendar-linear"></iconify-icon>
</div>
<div>
<div className="text-[10px] text-subtle">
                          Time to Value
                        </div>
<div className="text-xs font-bold text-obsidian">
                          Delayed 45+ Days
                        </div>
</div>
</div>
</div>
</div>

<div className="lifecycle-step group flex items-center justify-between w-full transition-all duration-500" data-threshold="0.55">
<div className="w-[42%] text-right pr-8">
<div className="bg-white border border-border p-3 rounded shadow-sm inline-block max-w-[200px] text-left">
<div className="flex gap-1 mb-1">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
</div>
<span className="text-xs font-medium text-obsidian">
                        Fully built revenue workflows live in 2 to 5 days.
                      </span>
</div>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      04 The Solution
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      Business-Ready
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      $599/mo. Zero Upfront.
                    </p>
</div>
</div>

<div className="lifecycle-step group flex items-center justify-between w-full transition-all duration-500" data-threshold="0.7">
<div className="w-[42%] text-right pr-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      05 The Leverage
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      AI Included
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      Day One Revenue Engine.
                    </p>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-obsidian text-white text-xs font-semibold shadow-lg shadow-obsidian/20">
<span>Value Immediate</span>
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</span>
</div>
</div>

<div className="lifecycle-step group flex items-center justify-between w-full transition-all duration-500" data-threshold="0.85">
<div className="w-[42%] text-right pr-8">
<span className="font-mono text-[10px] text-subtle bg-slate-100 px-2 py-1 rounded inline-block">
                      Risk: 0%
                    </span>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      06 The Result
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      Deal Closed
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      Hesitation Disappears.
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="py-32 px-6 md:px-12 lg:px-20">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-xl">
<h2 className="font-sans text-4xl md:text-5xl font-semibold text-obsidian tracking-tight mb-6 leading-[1.1]">
                A Fully Built Revenue &amp; Operations Engine.
                <span className="text-subtle block">No Code. No Friction.</span>
</h2>
<p className="text-subtle text-lg leading-relaxed">
                Everything included from Day One. Instead of selling software plus uncertainty, you present a ready-to-run machine.
              </p>
</div>
<a className="pb-1 border-b border-obsidian text-sm font-medium hover:opacity-70 transition-opacity mb-2" href="#">
              Explore Full Specifications
            </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 p-10 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="max-w-md">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-obsidian mb-3">
                      Core CRM &amp; Sales Framework
                    </h3>
<p className="text-subtle leading-relaxed">
                      Lead capture and routing, opportunity pipeline automation, proposal workflows, and executive dashboards.
                    </p>
</div>
<div className="hidden lg:block">
<div className="px-3 py-1 bg-canvas border border-border rounded text-[10px] font-mono text-subtle uppercase tracking-wider group-hover:text-obsidian group-hover:border-obsidian/30 transition-colors">
                      Live Day 1
                    </div>
</div>
</div>

<div className="mt-12 h-32 w-full relative flex items-center border-t border-border/40 pt-6 overflow-hidden">
<svg className="w-full h-full" preserveaspectratio="xMidYMid meet" viewbox="0 0 600 100">
<defs>
<marker id="arrow-head" markerheight="4" markerwidth="4" orient="auto" refx="2" refy="2">
<path d="M0,0 L4,2 L0,4" fill="#111"></path>
</marker>
</defs>
<path d="M20,50 C100,50 120,20 200,20 C280,20 300,80 380,80 C460,80 480,50 560,50" fill="none" stroke="#E5E5E5" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path className="transition-all duration-[1500ms] ease-in-out group-hover:stroke-dashoffset-0" d="M20,50 C100,50 120,20 200,20 C280,20 300,80 380,80 C460,80 480,50 560,50" fill="none" marker-end="url(#arrow-head)" stroke="#111" stroke-dasharray="600" stroke-dashoffset="600" strokeWidth="1.5"></path>
<g className="transition-all duration-500 delay-0 opacity-100 group-hover:scale-110 origin-center">
<circle cx="20" cy="50" fill="#111" r="4"></circle>
<text className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300" text-anchor="middle" x="20" y="70">LEAD</text>
</g>
<g className="transition-all duration-500 delay-[400ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
<circle cx="200" cy="20" fill="#fff" r="4" stroke="#111" strokeWidth="1.5"></circle>
<text className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300" text-anchor="middle" x="200" y="40">OPPORTUNITY</text>
</g>
<g className="transition-all duration-500 delay-[800ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
<circle cx="380" cy="80" fill="#fff" r="4" stroke="#111" strokeWidth="1.5"></circle>
<text className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300" text-anchor="middle" x="380" y="100">PROPOSAL</text>
</g>
<g className="transition-all duration-500 delay-[1200ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
<circle cx="560" cy="50" fill="#111" r="4"></circle>
<text className="text-[8px] font-mono fill-obsidian font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300" text-anchor="middle" x="560" y="70">CLOSED</text>
</g>
</svg>
</div>
</div>
</div>

<div className="md:col-span-4 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500 flex flex-col">
<div className="p-10 relative z-10 flex flex-col h-full">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-obsidian mb-3">
                  Automation Engine
                </h3>
<p className="text-sm text-subtle leading-relaxed mb-8">
                  Smart task automation, lifecycle workflows, lead scoring, and renewal automation built-in.
                </p>

<div className="mt-auto relative w-full h-32 flex flex-col justify-end items-center">
<div className="absolute w-[80%] h-12 bg-border/30 border border-border rounded-t-md top-4 scale-90 opacity-0 group-hover:opacity-100 group-hover:top-0 transition-all duration-500 ease-out"></div>
<div className="absolute w-[90%] h-12 bg-canvas border border-border rounded-t-md top-8 scale-95 opacity-50 group-hover:opacity-80 group-hover:top-6 transition-all duration-500 ease-out delay-75"></div>
<div className="relative w-full h-16 bg-white border border-border rounded shadow-sm flex items-center px-4 gap-4 z-10 transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:shadow-md">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] font-bold text-obsidian uppercase tracking-wide">Status</span>
<span className="text-[10px] font-mono text-subtle">Active</span>
</div>
<div className="h-1 w-full bg-canvas rounded overflow-hidden">
<div className="h-full w-2/3 bg-obsidian/20"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-12 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500">
<div className="p-10 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 max-w-lg">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
<iconify-icon icon="solar:magic-stick-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-obsidian mb-2">
                    AI Revenue Stack Included
                  </h3>
<p className="text-subtle leading-relaxed">
                    AI Document Builder, AI Proposal Generator, E-Signature, and Smart WhatsApp integration. Individually valued at €4,000/mo, included for $599.
                  </p>
</div>

<div className="flex-1 w-full flex items-center justify-center gap-6 h-32 relative">
<div className="flex flex-col gap-2 relative">
<div className="w-10 h-12 bg-white border border-border shadow-sm rounded-sm flex items-center justify-center transition-all duration-700 ease-in-out group-hover:translate-x-12 group-hover:opacity-0 group-hover:scale-50">
<div className="w-4 h-0.5 bg-subtle/20"></div>
</div>
<div className="w-10 h-12 bg-white border border-border shadow-sm rounded-sm flex items-center justify-center absolute top-2 left-2 transition-all duration-700 ease-in-out delay-100 group-hover:translate-x-10 group-hover:opacity-0 group-hover:scale-50">
<div className="w-4 h-0.5 bg-subtle/20"></div>
</div>
</div>
<div className="w-16 h-16 rounded-full border border-dashed border-border flex items-center justify-center relative">
<div className="absolute inset-0 rounded-full border-t border-obsidian transparent animate-spin [animation-duration:3s] opacity-0 group-hover:opacity-100"></div>
<iconify-icon className="text-subtle group-hover:text-obsidian transition-colors" icon="solar:refresh-linear" width="20"></iconify-icon>
</div>
<div className="w-24 h-32 bg-white border border-border shadow-lg rounded-sm p-4 space-y-3 transition-all duration-500 group-hover:shadow-xl group-hover:scale-105">
<div className="w-6 h-6 rounded bg-obsidian/5"></div>
<div className="space-y-1.5">
<div className="h-1.5 w-full bg-obsidian/10 rounded overflow-hidden">
<div className="h-full w-0 bg-obsidian group-hover:w-full transition-all duration-700 delay-300 ease-out"></div>
</div>
<div className="h-1.5 w-3/4 bg-obsidian/10 rounded overflow-hidden">
<div className="h-full w-0 bg-obsidian group-hover:w-full transition-all duration-700 delay-500 ease-out"></div>
</div>
<div className="h-1.5 w-5/6 bg-obsidian/10 rounded overflow-hidden">
<div className="h-full w-0 bg-obsidian group-hover:w-full transition-all duration-700 delay-700 ease-out"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-20 border-b border-border/60 bg-canvas">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
<div className="max-w-2xl">
<h2 className="font-sans text-3xl font-semibold text-obsidian tracking-tight mb-4">
                Simple. Fast. Powerful.
              </h2>
<p className="font-sans text-subtle text-base leading-relaxed">
                This is not a service. It is a deal acceleration system.
              </p>
</div>
</div>
<div className="relative w-full">
<style>
              .def-active .def-num { border-color: #111; color: #111; background-color: #fff; transform: scale(1.1); box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
              .def-inactive .def-content { opacity: 0.4; filter: grayscale(100%); }
              .def-active .def-content { opacity: 1; filter: grayscale(0%); transform: translateY(0); }
              .def-step { transition: opacity 0.5s ease; }
            </style>
<div className="absolute top-[1.125rem] left-0 right-0 h-px bg-border/60 hidden lg:block z-0">
<div className="h-full bg-obsidian w-0 transition-all duration-700 ease-in-out" id="def-line-fill"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-12 relative z-10" id="def-grid">

<div className="def-step group flex flex-col gap-4 def-inactive" data-index="0">
<div className="flex items-center gap-4">
<div className="def-num w-9 h-9 bg-white border border-border rounded flex items-center justify-center text-[10px] font-mono font-medium text-subtle shadow-sm transition-all duration-500 z-10">01</div>
<div className="h-px flex-1 bg-border/60 lg:hidden"></div>
</div>
<div className="def-content transition-all duration-500">
<h3 className="font-sans text-sm font-semibold text-obsidian mb-1.5">Activate Partnership</h3>
<p className="text-xs text-subtle leading-relaxed">Align with Kompetenza to change the deal structure.</p>
</div>
</div>

<div className="def-step group flex flex-col gap-4 def-inactive" data-index="1">
<div className="flex items-center gap-4">
<div className="def-num w-9 h-9 bg-white border border-border rounded flex items-center justify-center text-[10px] font-mono font-medium text-subtle shadow-sm transition-all duration-500 z-10">02</div>
<div className="h-px flex-1 bg-border/60 lg:hidden"></div>
</div>
<div className="def-content transition-all duration-500">
<h3 className="font-sans text-sm font-semibold text-obsidian mb-1.5">Deploy System</h3>
<p className="text-xs text-subtle leading-relaxed">System goes live in 2 to 5 days. Zero downtime.</p>
</div>
</div>

<div className="def-step group flex flex-col gap-4 def-inactive" data-index="2">
<div className="flex items-center gap-4">
<div className="def-num w-9 h-9 bg-white border border-border rounded flex items-center justify-center text-[10px] font-mono font-medium text-subtle shadow-sm transition-all duration-500 z-10">03</div>
<div className="h-px flex-1 bg-border/60 lg:hidden"></div>
</div>
<div className="def-content transition-all duration-500">
<h3 className="font-sans text-sm font-semibold text-obsidian mb-1.5">AI Activated</h3>
<p className="text-xs text-subtle leading-relaxed">Revenue workflows and AI stack activate instantly.</p>
</div>
</div>

<div className="def-step group flex flex-col gap-4 def-inactive" data-index="3">
<div className="flex items-center gap-4">
<div className="def-num w-9 h-9 bg-white border border-border rounded flex items-center justify-center text-[10px] font-mono font-medium text-subtle shadow-sm transition-all duration-500 z-10">04</div>
<div className="h-px flex-1 bg-border/60 lg:hidden"></div>
</div>
<div className="def-content transition-all duration-500">
<h3 className="font-sans text-sm font-semibold text-obsidian mb-1.5">Objections Fade</h3>
<p className="text-xs text-subtle leading-relaxed">Implementation objections disappear. Discount pressure reduces.</p>
</div>
</div>

<div className="def-step group flex flex-col gap-4 def-inactive" data-index="4">
<div className="flex items-center gap-4">
<div className="def-num w-9 h-9 bg-white border border-border rounded flex items-center justify-center text-[10px] font-mono font-medium text-subtle shadow-sm transition-all duration-500 z-10">05</div>
<div className="h-px flex-1 bg-border/60 lg:hidden"></div>
</div>
<div className="def-content transition-all duration-500">
<h3 className="font-sans text-sm font-semibold text-obsidian mb-1.5">Accelerate Growth</h3>
<p className="text-xs text-subtle leading-relaxed">Shorter sales cycles. Higher conversions. Win rates increase.</p>
</div>
</div>

<div className="def-step group flex flex-col gap-4 def-inactive" data-index="5">
<div className="flex items-center gap-4">
<div className="def-num w-9 h-9 bg-white border border-border rounded flex items-center justify-center text-[10px] font-mono font-medium text-subtle shadow-sm transition-all duration-500 z-10">06</div>
<div className="h-px flex-1 bg-border/60 lg:hidden"></div>
</div>
<div className="def-content transition-all duration-500">
<h3 className="font-sans text-sm font-semibold text-obsidian mb-1.5">Close Deal</h3>
<p className="text-xs text-subtle leading-relaxed">Customer approves faster. Upside is immediate.</p>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="py-32 bg-obsidian text-white relative overflow-hidden">
<div className="opacity-10 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="">
<div className="relative w-full">
<div className="relative w-full" id="testimonial-container" style={{display: 'grid', gridTemplateAreas: '\'stack\''}}>

<div className="transition-all duration-700 ease-in-out opacity-100 flex flex-col justify-center" data-index="0" style={{gridArea: 'stack'}}>
<h2 className="text-4xl font-semibold tracking-tighter mb-8">
                      "When time-to-value improves, churn drops. This model significantly improves our first-year customer success."
                    </h2>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<div>
<div className="font-medium text-white">Faster SMB Velocity</div>
<div className="text-sm text-white/50">Deal Acceleration</div>
</div>
</div>
</div>

<div className="transition-all duration-700 ease-in-out opacity-0 pointer-events-none flex flex-col justify-center" data-index="1" style={{gridArea: 'stack'}}>
<h2 className="text-4xl font-semibold tracking-tighter mb-8">
                      "Stronger positioning versus HubSpot and Zoho. We stop defending license pricing and start selling a revenue engine."
                    </h2>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<div>
<div className="font-medium text-white">Competitive Edge</div>
<div className="text-sm text-white/50">Strategic Advantage</div>
</div>
</div>
</div>

<div className="transition-all duration-700 ease-in-out opacity-0 pointer-events-none flex flex-col justify-center" data-index="2" style={{gridArea: 'stack'}}>
<h2 className="text-4xl font-semibold tracking-tighter mb-8">
                      "Reduced implementation failure risk. When risk approaches zero and speed approaches immediate, hesitation disappears."
                    </h2>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon icon="solar:verified-check-linear" width="24"></iconify-icon>
</div>
<div>
<div className="font-medium text-white">Risk Reversal</div>
<div className="text-sm text-white/50">100% Guarantee</div>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3 mt-10">
<button className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed" disabled="" id="testimonial-prev">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed" id="testimonial-next">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="flex flex-row md:flex-col justify-between gap-6 md:gap-0 md:space-y-12 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-16">
<div className="">
<div className="transition-all duration-300 ease-out transform text-3xl font-bold mb-1" id="t-stat-val-0">14</div>
<div className="text-sm text-white/50 transition-opacity duration-300 ease-out" id="t-stat-lbl-0">Days to Deploy</div>
</div>
<div className="">
<div className="text-3xl font-bold mb-1 transition-all duration-300 ease-out transform" id="t-stat-val-1">0%</div>
<div className="text-sm text-white/50 transition-opacity duration-300 ease-out" id="t-stat-lbl-1">Financial Risk</div>
</div>
<div>
<div className="text-3xl font-bold mb-1 transition-all duration-300 ease-out transform" id="t-stat-val-2">100%</div>
<div className="text-sm text-white/50 transition-opacity duration-300 ease-out" id="t-stat-lbl-2">Money-Back Guarantee</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-20 border-b border-border">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-sans text-3xl md:text-4xl font-semibold text-obsidian tracking-tight mb-4">
              Predictable. Powerful. Frictionless.
            </h2>
<p className="text-subtle text-base">
              The downside is protected. The upside is leveraged.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="pricing-grid">

<div className="pricing-card group relative p-8 rounded-xl border border-border bg-white flex flex-col opacity-60 hover:opacity-100 transition-opacity" id="pricing-hobby">
<div className="mb-4 relative z-10">
<span className="font-semibold text-subtle uppercase text-xs tracking-wider">Traditional Model</span>
</div>
<div className="mb-4 flex items-baseline gap-1 relative z-10">
<span className="text-3xl font-semibold text-subtle line-through">$15,000+</span>
<span className="text-sm text-subtle">upfront</span>
</div>
<p className="text-sm text-subtle mb-8 leading-relaxed relative z-10">
                The old way. High friction. Slow timeline. Risk on the customer.
              </p>
<ul className="space-y-4 mb-8 flex-1 relative z-10">
<li className="flex gap-3 text-sm text-subtle">
<iconify-icon className="text-subtle" icon="solar:close-circle-linear"></iconify-icon>
                  3-6 weeks timeline
                </li>
<li className="flex gap-3 text-sm text-subtle">
<iconify-icon className="text-subtle" icon="solar:close-circle-linear"></iconify-icon>
                  AI scoped as add-on
                </li>
<li className="flex gap-3 text-sm text-subtle">
<iconify-icon className="text-subtle" icon="solar:close-circle-linear"></iconify-icon>
                  Delayed ROI
                </li>
</ul>
</div>

<div className="pricing-card group relative p-8 rounded-xl bg-obsidian text-white shadow-xl shadow-obsidian/20 flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-obsidian scale-[1.05] z-10 pricing-transition" id="pricing-pro">
<div className="mb-4 flex justify-between items-center">
<span className="font-semibold text-white">Business-Ready</span>
<span className="text-[10px] bg-white text-obsidian px-2 py-0.5 rounded font-bold">RECOMMENDED</span>
</div>
<div className="mb-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold">$599</span>
<span className="text-sm text-white/60">/mo</span>
</div>
<p className="text-sm text-white/60 mb-8 leading-relaxed">
                A fully built revenue engine. AI included. No upfront cost.
              </p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-white/80">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                  Live in 2-5 days
                </li>
<li className="flex gap-3 text-sm text-white/80">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                  €4,000/mo AI Stack Included
                </li>
<li className="flex gap-3 text-sm text-white/80">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                  100% Money-Back Guarantee
                </li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-obsidian text-xs font-semibold transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-[0.97] active:duration-100 relative z-10">
                Activate Engine
              </button>
</div>

<div className="pricing-card group relative p-8 rounded-xl border border-border bg-white flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-obsidian/30 focus:outline-none focus:ring-2 focus:ring-obsidian focus:ring-offset-2 pricing-transition" id="pricing-ent">
<div className="absolute inset-0 rounded-xl bg-gradient-to-b from-obsidian/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="mb-4 relative z-10">
<span className="font-semibold text-obsidian">Guarantee Stack</span>
</div>
<div className="mb-4 flex items-baseline gap-1 relative z-10">
<span className="text-3xl font-semibold text-obsidian">Included</span>
</div>
<p className="text-sm text-subtle mb-8 leading-relaxed relative z-10">
                Our risk reversal stack ensures your deal closes.
              </p>
<ul className="space-y-4 mb-8 flex-1 relative z-10">
<li className="flex gap-3 text-sm text-subtle">
<iconify-icon className="text-obsidian" icon="solar:shield-check-linear"></iconify-icon>
                  Price-Beat Guarantee
                </li>
<li className="flex gap-3 text-sm text-subtle">
<iconify-icon className="text-obsidian" icon="solar:shield-check-linear"></iconify-icon>
                  No Financial Risk
                </li>
<li className="flex gap-3 text-sm text-subtle">
<iconify-icon className="text-obsidian" icon="solar:shield-check-linear"></iconify-icon>
                  Fast Deployment Guarantee
                </li>
</ul>
<button className="w-full py-3 rounded-lg border border-border text-xs font-semibold text-obsidian bg-white transition-all duration-300 ease-out hover:scale-[1.03] hover:border-obsidian hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] active:scale-[0.97] active:duration-100 relative z-10">
                Contact Strategy Team
              </button>
</div>
</div>
</div>
</section>

<footer className="bg-white py-20 px-6 md:px-12 lg:px-20">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-xs space-y-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-obsidian rounded-sm"></div>
<span className="font-bold text-sm tracking-tight text-obsidian uppercase">
                Business-Ready
              </span>
</div>
<p className="text-xs text-subtle leading-relaxed">
              World’s 1st Business-Ready Salesforce. Powered by Kompetenza.
            </p>
<div className="text-[10px] text-border">
              © 2024 Kompetenza. All rights reserved.
            </div>
</div>
<div className="flex gap-16">
<div className="space-y-4">
<h4 className="text-xs font-bold text-obsidian">Offering</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><a className="hover:text-obsidian" href="#">Overview</a></li>
<li><a className="hover:text-obsidian" href="#">Features</a></li>
<li><a className="hover:text-obsidian" href="#">AI Stack</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-bold text-obsidian">Compare</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><a className="hover:text-obsidian" href="#">Vs Traditional</a></li>
<li><a className="hover:text-obsidian" href="#">ROI Calculator</a></li>
<li><a className="hover:text-obsidian" href="#">Case Studies</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-bold text-obsidian">Partner</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><a className="hover:text-obsidian" href="#">For AEs</a></li>
<li><a className="hover:text-obsidian" href="#">Book Strategy</a></li>
</ul>
</div>
</div>
</div>
</footer>
</div>






    </>
  );
}
