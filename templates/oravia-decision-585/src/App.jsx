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



document.addEventListener('DOMContentLoaded', () => {
const cards = ['pricing-hobby', 'pricing-pro', 'pricing-ent'];
function updateState(selectedId) {
cards.forEach(id => {
const card = document.getElementById(id);
if (!card) return;
const isSelected = id === selectedId;
if (isSelected) {
card.classList.add('scale-[1.02]', 'shadow-2xl', 'z-10', 'ring-1', 'ring-obsidian/5', 'opacity-100');
card.classList.remove('scale-[0.98]', 'opacity-60', 'hover:shadow-xl');
if (id !== 'pricing-pro') {
card.classList.add('border-obsidian');
card.classList.remove('border-border');
}
} else {
card.classList.remove('scale-[1.02]', 'shadow-2xl', 'z-10', 'border-obsidian', 'ring-1', 'ring-obsidian/5', 'opacity-100');
card.classList.add('border-border', 'opacity-60', 'scale-[0.98]');
}
});
}
cards.forEach(id => {
const card = document.getElementById(id);
if (card) {
card.addEventListener('click', () => updateState(id));
card.addEventListener('keydown', (e) => {
if (e.key === 'Enter' || e.key === ' ') {
e.preventDefault();
updateState(id);
}
});
card.addEventListener('mouseenter', () => {
if (card.classList.contains('opacity-60')) {
card.classList.remove('opacity-60');
card.classList.add('opacity-90');
}
});
card.addEventListener('mouseleave', () => {
const isSelected = card.classList.contains('z-10');
if (!isSelected) {
card.classList.remove('opacity-90');
card.classList.add('opacity-60');
}
});
}
});
updateState('pricing-pro');
// Page Routing Logic
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page-section');
navLinks.forEach(link => {
link.addEventListener('click', (e) => {
e.preventDefault();
const targetId = link.getAttribute('data-target');
if(targetId) {
pages.forEach(page => {
if(page.id === targetId) {
page.style.display = 'flex';
page.animate([{opacity: 0, transform: 'translateY(10px)'}, {opacity: 1, transform: 'translateY(0)'}], {duration: 400, fill: 'forwards', easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)'});
} else {
page.style.display = 'none';
}
});
window.scrollTo({top: 0, behavior: 'smooth'});
}
});
});
});



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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      uniform float uTime; uniform float uDistortion; uniform float uSize; uniform vec2 uMouse; varying float vNoise;
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; } vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; } vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); } vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
      float snoise(vec3 v) {
          const vec2  C = vec2(1.0/6.0, 1.0/3.0) ; const vec4  D = vec4(0.0, 0.5, 1.0, 2.0); vec3 i  = floor(v + dot(v, C.yyy) ); vec3 x0 = v - i + dot(i, C.xxx) ; vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1.0 - g; vec3 i1 = min( g.xyz, l.zxy ); vec3 i2 = max( g.xyz, l.zxy ); vec3 x1 = x0 - i1 + 1.0 * C.xxx; vec3 x2 = x0 - i2 + 2.0 * C.xxx; vec3 x3 = x0 - 1.0 + 3.0 * C.xxx; i = mod289(i);
          vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 )); float n_ = 1.0/7.0; vec3  ns = n_ * D.wyz - D.xzx; vec4 j = p - 49.0 * floor(p * ns.z *ns.z); vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7.0 * x_ ); vec4 x = x_ *ns.x + ns.yyyy; vec4 y = y_ *ns.x + ns.yyyy; vec4 h = 1.0 - abs(x) - abs(y); vec4 b0 = vec4( x.xy, y.xy ); vec4 b1 = vec4( x.zw, y.zw ); vec4 s0 = floor(b0)*2.0 + 1.0; vec4 s1 = floor(b1)*2.0 + 1.0; vec4 sh = -step(h, vec4(0.0)); vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ; vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ; vec3 p0 = vec3(a0.xy,h.x); vec3 p1 = vec3(a0.zw,h.y); vec3 p2 = vec3(a1.xy,h.z); vec3 p3 = vec3(a1.zw,h.w); vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3))); p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w; vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0); m = m * m; return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
      }
      void main() {
          vec3 pos = position; float noise = snoise(vec3(pos.x * 0.5 + uTime * 0.15, pos.y * 0.5, pos.z * 0.5)); vNoise = noise; vec3 newPos = pos + (normal * noise * uDistortion); float dist = distance(uMouse * 10.0, newPos.xy); float interaction = smoothstep(6.0, 0.0, dist); newPos.z += interaction * 1.5; vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0); gl_Position = projectionMatrix * mvPosition; gl_PointSize = uSize * (20.0 / -mvPosition.z);
      }
    


      uniform vec3 uColor; varying float vNoise;
      void main() { vec2 center = gl_PointCoord - vec2(0.5); float dist = length(center); if (dist > 0.45) discard; float alpha = 1.0; vec3 color1 = uColor; vec3 color2 = vec3(0.25, 0.35, 0.45); vec3 finalColor = mix(color1, color2, vNoise * 0.5 + 0.5); gl_FragColor = vec4(finalColor, alpha); }
    


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
<div className="fixed inset-0 z-0 opacity-100" id="canvas-container"></div>

<header className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-5 md:px-12 flex justify-between items-center bg-canvas/90 backdrop-blur-md border-b border-border/50 transition-all duration-300">
<button className="nav-link flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-obsidian/20 rounded" data-target="page-home">
<div className="w-5 h-5 bg-obsidian text-white flex items-center justify-center rounded-sm">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1 2.182a10 10 0 0 1 3.8 0"></path>
<path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"></path>
<path d="M21.817 10.1a10 10 0 0 1 0 3.8"></path>
<path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"></path>
<path d="M13.9 21.817a10 10 0 0 1-3.8 0"></path>
<path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"></path>
<path d="M2.182 13.9a10 10 0 0 1 0-3.8"></path>
<path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"></path>
</svg>
</div>
<span className="text-sm font-semibold tracking-tight text-obsidian">
          ORAVIA
        </span>
</button>
<nav className="hidden md:flex items-center gap-8">
<button className="nav-link text-xs font-medium text-subtle hover:text-obsidian transition-colors focus:outline-none" data-target="page-product">
          Product
        </button>
<button className="nav-link text-xs font-medium text-subtle hover:text-obsidian transition-colors focus:outline-none" data-target="page-solutions">
          Solutions
        </button>
<button className="nav-link text-xs font-medium text-subtle hover:text-obsidian transition-colors focus:outline-none" data-target="page-research">
          Research
        </button>
<button className="nav-link text-xs font-medium text-subtle hover:text-obsidian transition-colors focus:outline-none" data-target="page-company">
          Company
        </button>
</nav>
<div className="flex items-center gap-5">
<button className="hidden md:block text-xs font-medium text-subtle hover:text-obsidian transition-colors focus:outline-none">
          Sign in
        </button>
<button className="group relative isolate overflow-hidden bg-obsidian text-white text-xs font-medium px-6 py-2.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.04] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.25)] hover:ring-white/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-obsidian/20 focus:ring-offset-1">
<div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent z-10"></div>
<span className="relative z-20">Start Trial</span>
</button>
</div>
</header>

<div className="w-full relative z-10" id="pages-wrapper">

<main className="page-section flex flex-col w-full relative" id="page-home">

<section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-32 pb-20 gap-16">
<div className="max-w-2xl space-y-10 relative z-10">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-border/60 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[11px] font-medium text-subtle tracking-tight">
                    System v2.4 Available
                  </span>
</div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-obsidian leading-[0.95]">
                  Decision
                  <br/>
<span className="text-subtle">Traceability.</span>
</h1>
<p className="max-w-md text-base text-subtle leading-relaxed">
                  The reasoning layer for the modern enterprise. Capture
                  assumptions, map logic, and ensure every strategic decision is
                  defensible.
                </p>
</div>
<div className="flex flex-wrap items-center gap-4">
<button className="group relative isolate overflow-hidden bg-obsidian text-white text-sm font-medium px-8 py-3.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)] focus:outline-none flex items-center gap-2">
<div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0 pointer-events-none"></div>
<span className="relative z-10">Request Demo</span>
<iconify-icon className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="px-8 py-3.5 bg-white text-obsidian border border-border text-sm font-medium rounded shadow-sm transition-all duration-300 hover:bg-gray-50 hover:border-obsidian/40 hover:shadow-md focus:outline-none">
                  Documentation
                </button>
</div>
</div>

<div className="relative w-full max-w-lg aspect-square lg:aspect-[4/3] flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-canvas via-white to-canvas opacity-50 blur-3xl"></div>
<div className="premium-card w-full h-full p-6 relative overflow-hidden rounded-xl">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-obsidian to-transparent"></div>

<div className="h-full w-full flex flex-col">
<div className="flex justify-between items-center mb-8 border-b border-border/50 pb-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-border"></div>
<span className="text-[10px] uppercase tracking-wider font-semibold text-subtle">
                        Decision Logic Graph
                      </span>
</div>
<div className="flex gap-2">
<span className="w-12 h-1.5 rounded-full bg-border/50"></span>
</div>
</div>
<div className="flex-1 relative">

<svg className="w-full h-full" viewbox="0 0 400 300">
<style>
                        .signal-path { stroke-dasharray: 60 400; stroke-dashoffset: 60; animation: signal-flow 6s linear infinite; }
                        @keyframes signal-flow { 0% { stroke-dashoffset: 60; opacity: 0; } 5% { opacity: 1; } 90% { stroke-dashoffset: -360; opacity: 1; } 95% { opacity: 0; } 100% { stroke-dashoffset: -360; opacity: 0; } }
                        .node-context { animation: pulse-context 6s infinite ease-out; transform-origin: 50px 150px; }
                        @keyframes pulse-context { 0% { transform: scale(1); fill: #111; } 5% { transform: scale(1.4); fill: #000; } 15% { transform: scale(1); fill: #111; } }
                        .node-assumptions { animation: pulse-assumptions 6s infinite ease-out; transform-origin: 190px 80px; }
                        @keyframes pulse-assumptions { 25% { stroke-width: 1.5; transform: scale(1); } 30% { stroke-width: 2.5; transform: scale(1.05); stroke: #000; } 40% { stroke-width: 1.5; transform: scale(1); stroke: #111; } }
                        .node-evidence { animation: pulse-evidence 6s infinite ease-out; transform-origin: 280px 120px; }
                        @keyframes pulse-evidence { 55% { stroke-width: 1.5; transform: scale(1); } 60% { stroke-width: 2.5; transform: scale(1.05); stroke: #000; } 70% { stroke-width: 1.5; transform: scale(1); stroke: #111; } }
                        .node-outcome { animation: pulse-outcome 6s infinite ease-out; transform-origin: 320px 150px; }
                        @keyframes pulse-outcome { 85% { transform: scale(1); fill: #111; } 90% { transform: scale(1.25); fill: #000; } 100% { transform: scale(1); fill: #111; } }
                        .outcome-check { stroke-dasharray: 12; stroke-dashoffset: 12; animation: check-draw 6s linear infinite; }
                        @keyframes check-draw { 0%, 88% { stroke-dashoffset: 12; opacity: 0; } 92% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: 0; opacity: 0; } }
                      </style>
<path d="M50,150 C100,150 100,80 150,80" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M50,150 C100,150 100,220 150,220" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M150,80 C200,80 200,120 250,120" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M150,220 C200,220 200,180 250,180" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M250,120 L320,150" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M250,180 L320,150" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path className="signal-path" d="M50,150 C100,150 100,80 150,80 C200,80 200,120 250,120 L320,150" fill="none" stroke="#111" strokeLinecap="round" strokeWidth="2.5"></path>
<circle className="node-context" cx="50" cy="150" fill="#111" r="6"></circle>
<text fill="#111" fontFamily='"Plus Jakarta Sans", sans-serif' fontSize="10" font-weight="600" text-anchor="middle" x="50" y="175">Context</text>
<rect className="node-assumptions" fill="white" height="20" rx="4" stroke="#111" strokeWidth="1.5" width="80" x="150" y="70"></rect>
<text dy="1" fill="#111" fontFamily='"Plus Jakarta Sans", sans-serif' fontSize="9" font-weight="600" text-anchor="middle" x="190" y="83">Assumptions</text>
<rect fill="white" height="20" rx="4" stroke="#E5E5E5" width="80" x="150" y="210"></rect>
<rect fill="#F5F5F7" height="20" rx="4" width="60" x="250" y="170"></rect>
<rect className="node-evidence" fill="white" height="20" rx="4" stroke="#111" strokeWidth="1.5" width="60" x="250" y="110"></rect>
<text dy="1" fill="#111" fontFamily='"Plus Jakarta Sans", sans-serif' fontSize="9" font-weight="600" text-anchor="middle" x="280" y="123">Evidence</text>
<circle className="node-outcome" cx="320" cy="150" fill="#111" r="12"></circle>
<path className="outcome-check" d="M316 150l3 3 5-5" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<text fill="#111" fontFamily='"Plus Jakarta Sans", sans-serif' fontSize="10" font-weight="600" text-anchor="middle" x="320" y="178">Outcome</text>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-obsidian text-white text-[10px] font-medium px-3 py-1.5 rounded shadow-xl">
                      Confidence: 98.4%
                    </div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-border/60 py-16 bg-white relative z-10">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
<p className="text-xs font-semibold text-obsidian whitespace-nowrap md:w-auto w-full text-center md:text-left">POWERING STRATEGY AT</p>
<div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
<span className="text-lg font-semibold text-obsidian tracking-tight">VERCEL</span>
<span className="text-lg font-semibold text-obsidian tracking-tight">stripe</span>
<span className="text-lg font-semibold text-obsidian tracking-tight">Linear</span>
<span className="text-lg font-semibold text-obsidian tracking-tight">OpenAI</span>
<span className="text-lg font-semibold text-obsidian tracking-tight">Raycast</span>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-20 bg-canvas border-b border-border/60 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold text-obsidian tracking-tight mb-4">Intelligence mapped, not just stored.</h2>
<p className="text-base text-subtle leading-relaxed">Turn ephemeral whiteboard sessions into structural, queryable knowledge graphs. Every decision is intrinsically connected to its underlying assumptions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-xl bg-white border border-border/60 hover:shadow-lg hover:-translate-y-1 hover:border-obsidian/20 transition-all duration-300">
<iconify-icon className="text-2xl text-obsidian mb-6" icon="solar:share-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-semibold text-obsidian tracking-tight mb-3">Contextual Memory</h3>
<p className="text-sm text-subtle leading-relaxed">Preserve the exact context of why a decision was made, who approved it, and what data was available at that precise timestamp.</p>
</div>

<div className="p-8 rounded-xl bg-white border border-border/60 hover:shadow-lg hover:-translate-y-1 hover:border-obsidian/20 transition-all duration-300">
<iconify-icon className="text-2xl text-obsidian mb-6" icon="solar:branching-paths-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-semibold text-obsidian tracking-tight mb-3">Assumption Mapping</h3>
<p className="text-sm text-subtle leading-relaxed">Visualize how one assumption underpins multiple strategic pillars. If data invalidates a premise, instantly see the ripple effect.</p>
</div>

<div className="p-8 rounded-xl bg-white border border-border/60 hover:shadow-lg hover:-translate-y-1 hover:border-obsidian/20 transition-all duration-300">
<iconify-icon className="text-2xl text-obsidian mb-6" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-semibold text-obsidian tracking-tight mb-3">Immutable Audits</h3>
<p className="text-sm text-subtle leading-relaxed">Cryptographically secure logs ensure that historical reasoning cannot be retroactively altered to fit a new narrative.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-20 bg-white border-b border-border/60 relative z-10">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="flex-1 space-y-10">
<div>
<h2 className="text-4xl md:text-5xl font-semibold text-obsidian tracking-tight leading-tight mb-6">From ambiguity to absolute clarity.</h2>
<p className="text-base text-subtle leading-relaxed max-w-md">Oravia replaces fragmented docs and scattered Slack threads with a structured pipeline for corporate reasoning.</p>
</div>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-xs font-semibold text-obsidian bg-canvas">1</div>
<div className="w-px h-full bg-border mt-2"></div>
</div>
<div className="pb-8">
<h4 className="text-lg font-semibold text-obsidian tracking-tight mb-2">Define Constraints</h4>
<p className="text-sm text-subtle">Establish the foundational parameters, budget, and timeline before ideation begins.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-xs font-semibold text-obsidian bg-canvas">2</div>
<div className="w-px h-full bg-border mt-2"></div>
</div>
<div className="pb-8">
<h4 className="text-lg font-semibold text-obsidian tracking-tight mb-2">Connect Evidence</h4>
<p className="text-sm text-subtle">Link internal metrics, market research, or heuristic models directly to your proposed logic branches.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-obsidian text-white flex items-center justify-center text-xs font-semibold shadow-md">3</div>
</div>
<div>
<h4 className="text-lg font-semibold text-obsidian tracking-tight mb-2">Execute with Conviction</h4>
<p className="text-sm text-subtle">Deploy strategy knowing every variable has been stress-tested by the Oravia Analysis Engine.</p>
</div>
</div>
</div>
</div>
<div className="flex-1 w-full max-w-lg aspect-square bg-canvas border border-border rounded-xl shadow-sm relative overflow-hidden flex items-center justify-center technical-grid p-8">
<div className="absolute top-0 right-0 p-4 opacity-50">
<iconify-icon className="text-xl text-subtle" icon="solar:maximize-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="w-full space-y-4">

<div className="bg-white p-4 rounded-lg border border-border shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-subtle" icon="solar:database-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-obsidian">Q3 Churn Metric</span>
</div>
<span className="text-xs bg-emerald-50 text-emerald-600 px-2 py-1 rounded border border-emerald-100 font-medium">Verified</span>
</div>
<div className="w-px h-6 bg-border mx-auto"></div>
<div className="bg-white p-4 rounded-lg border border-border shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-subtle" icon="solar:git-commit-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-obsidian">Assumption: Price Elasticity</span>
</div>
<span className="text-[10px] font-mono text-subtle">Weight: 0.8</span>
</div>
<div className="w-px h-6 bg-border mx-auto"></div>
<div className="bg-obsidian p-4 rounded-lg shadow-md flex items-center justify-between transform transition-transform hover:scale-[1.02] cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon className="text-white/70" icon="solar:flag-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-white">Pricing Model v2</span>
</div>
<span className="text-xs bg-white/10 text-white px-2 py-1 rounded border border-white/10 font-medium">Approved</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-20 bg-canvas border-b border-border/60 relative z-10 flex flex-col items-center text-center">
<iconify-icon className="text-4xl text-border mb-8" icon="solar:quote-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-obsidian tracking-tight leading-tight max-w-4xl mb-10">
              "Oravia fundamentally changed how our executive team evaluates risk. It acts as the organizational brain—what GitHub is for code, Oravia is for business strategy."
            </h2>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-obsidian/5 border border-border flex items-center justify-center overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/150?img=32"/>
</div>
<div className="text-left">
<div className="text-sm font-semibold text-obsidian">Elena Rostova</div>
<div className="text-xs text-subtle">VP of Strategy, Acme Corp</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-20 border-b border-border bg-canvas relative z-10">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-obsidian tracking-tight mb-4">Transparent Pricing</h2>
<p className="text-subtle text-base">Start tracing decisions today. Scale as your reasoning grows.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="pricing-grid">

<div className="pricing-card group relative p-8 rounded-xl border border-border bg-white flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-obsidian/30 pricing-transition" id="pricing-hobby" role="button" tabindex="0">
<div className="mb-4 relative z-10"><span className="font-semibold text-obsidian transition-colors group-[.selected]:text-black">Individual</span></div>
<div className="mb-4 flex items-baseline gap-1 relative z-10"><span className="text-3xl font-semibold text-obsidian tracking-tight">$49</span><span className="text-sm text-subtle">/mo</span></div>
<p className="text-sm text-subtle mb-8 leading-relaxed relative z-10">For solo analysts, product owners, or researchers.</p>
<button className="w-full py-3 rounded-lg border border-border text-xs font-semibold text-obsidian bg-white transition-all duration-300 relative z-10 focus:outline-none">Start Trial</button>
</div>

<div className="pricing-card group relative p-8 rounded-xl bg-obsidian text-white shadow-xl flex flex-col cursor-pointer hover:-translate-y-1 scale-[1.02] z-10 pricing-transition" id="pricing-pro" role="button" tabindex="0">
<div className="mb-4"><span className="font-semibold tracking-tight">Team</span></div>
<div className="mb-4 flex items-baseline gap-1"><span className="text-3xl font-semibold tracking-tight">Contact Sales</span></div>
<p className="text-sm text-white/60 mb-8 leading-relaxed">For teams formalizing shared decisions and accountability.</p>
<button className="w-full py-3 rounded-lg bg-white text-obsidian text-xs font-semibold transition-all duration-300 relative z-10 focus:outline-none hover:bg-gray-100">Contact Sales</button>
</div>

<div className="pricing-card group relative p-8 rounded-xl border border-border bg-white flex flex-col cursor-pointer hover:-translate-y-1 pricing-transition" id="pricing-ent" role="button" tabindex="0">
<div className="mb-4 relative z-10"><span className="font-semibold text-obsidian tracking-tight">Enterprise</span></div>
<div className="mb-4 flex items-baseline gap-1 relative z-10"><span className="text-3xl font-semibold text-obsidian tracking-tight">Contact Sales</span></div>
<p className="text-sm text-subtle mb-8 leading-relaxed relative z-10">For organizations using Oravia as a system of record.</p>
<button className="w-full py-3 rounded-lg border border-border text-xs font-semibold text-obsidian bg-white transition-all duration-300 relative z-10 focus:outline-none">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-20 bg-white relative z-10 flex flex-col items-center text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-obsidian tracking-tight leading-tight mb-6">Ready to defend your strategy?</h2>
<p className="text-base text-subtle max-w-xl mb-10">Join the vanguard of organizations abandoning intuition for mathematically structured reasoning.</p>
<button className="group relative isolate overflow-hidden bg-obsidian text-white text-sm font-medium px-10 py-4 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)] focus:outline-none flex items-center gap-2">
<div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0 pointer-events-none"></div>
<span className="relative z-10">Start Your Free Trial</span>
<iconify-icon className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</section>
</main>

<main className="page-section hidden flex-col w-full relative pt-32 pb-20" id="page-product">
<section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full mb-24">
<div className="max-w-3xl mb-16">
<button className="nav-link inline-flex items-center gap-2 text-sm font-medium text-subtle hover:text-obsidian transition-colors mb-8 focus:outline-none" data-target="page-home">
<iconify-icon icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Back to Home
              </button>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-obsidian leading-tight mb-6">
                Analysis Engine
              </h1>
<p className="text-lg text-subtle leading-relaxed">
                Move beyond static dashboards. Our analysis engine constructs a multi-dimensional reasoning graph, surfacing hidden dependencies, biases, and confidence thresholds in real-time.
              </p>
</div>
<div className="w-full aspect-[16/9] md:aspect-[21/9] bg-white border border-border rounded-xl shadow-sm overflow-hidden flex">

<div className="w-64 border-r border-border hidden md:flex flex-col bg-canvas/30">
<div className="p-4 border-b border-border text-xs font-semibold text-obsidian">Variables</div>
<div className="p-4 space-y-3">
<div className="h-2 w-3/4 bg-border/60 rounded"></div>
<div className="h-2 w-1/2 bg-border/60 rounded"></div>
<div className="h-2 w-5/6 bg-border/60 rounded"></div>
</div>
</div>

<div className="flex-1 p-8 relative flex items-center justify-center technical-grid">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 pointer-events-none"></div>

<div className="w-32 h-32 rounded-full border border-dashed border-obsidian/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
<div className="w-16 h-16 rounded-full bg-obsidian/5 flex items-center justify-center border border-obsidian/10"></div>
</div>
<div className="absolute text-center">
<span className="text-xs font-mono text-obsidian bg-white px-2 py-1 rounded border border-border shadow-sm">Calculating Vector</span>
</div>
</div>
</div>
</section>
<section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 bg-white border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-2xl text-obsidian mb-4" icon="solar:graph-new-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-semibold text-obsidian mb-2 tracking-tight">Causal Graphing</h3>
<p className="text-sm text-subtle leading-relaxed">Map secondary and tertiary effects automatically. Adjust an input node and watch ripple effects propagate through your strategy.</p>
</div>
<div className="p-8 bg-white border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-2xl text-obsidian mb-4" icon="solar:radar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-semibold text-obsidian mb-2 tracking-tight">Bias Detection</h3>
<p className="text-sm text-subtle leading-relaxed">Heuristic algorithms highlight over-indexed variables and potential logical fallacies before they reach executive review.</p>
</div>
<div className="p-8 bg-white border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-2xl text-obsidian mb-4" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-semibold text-obsidian mb-2 tracking-tight">Confidence Matrices</h3>
<p className="text-sm text-subtle leading-relaxed">Assign weight to evidence quality. The engine aggregates these scores to output a defensible confidence interval for the outcome.</p>
</div>
</section>
</main>

<main className="page-section hidden flex-col w-full relative pt-32 pb-20" id="page-solutions">
<section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full mb-20">
<button className="nav-link inline-flex items-center gap-2 text-sm font-medium text-subtle hover:text-obsidian transition-colors mb-8 focus:outline-none" data-target="page-home">
<iconify-icon icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Back to Home
            </button>
<div className="text-center">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-obsidian mb-4">Tailored for Scale</h1>
<p className="text-lg text-subtle max-w-2xl mx-auto">Different teams, identical rigor. See how Oravia adapts to the highest-stakes decisions across your organization.</p>
</div>
</section>
<section className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto w-full space-y-12">

<div className="flex flex-col md:flex-row items-center gap-12 bg-white p-10 border border-border rounded-xl">
<div className="flex-1 space-y-4">
<span className="text-[10px] font-mono uppercase tracking-widest text-subtle">Product Management</span>
<h2 className="text-3xl font-semibold text-obsidian tracking-tight">Justify Roadmaps</h2>
<p className="text-sm text-subtle leading-relaxed">Stop relying on gut-feel feature prioritization. Trace every roadmap item back to a verified user insight, revenue assumption, or strategic directive.</p>
<ul className="space-y-2 mt-4 text-sm text-obsidian">
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Defensible prioritization</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Clear PRD logic mapping</li>
</ul>
</div>
<div className="w-full md:w-1/2 aspect-[4/3] bg-canvas border border-border rounded-lg relative overflow-hidden technical-grid flex items-center justify-center">
<div className="w-24 h-8 bg-white border border-border rounded shadow-sm flex items-center justify-center text-xs font-mono">Sprint 42</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-12 bg-white p-10 border border-border rounded-xl">
<div className="flex-1 space-y-4">
<span className="text-[10px] font-mono uppercase tracking-widest text-subtle">Corporate Development</span>
<h2 className="text-3xl font-semibold text-obsidian tracking-tight">M&amp;A Diligence</h2>
<p className="text-sm text-subtle leading-relaxed">Map complex acquisition models. Ensure that the reasoning behind synergy valuations and risk assessments is preserved immutably for post-merger audits.</p>
<ul className="space-y-2 mt-4 text-sm text-obsidian">
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Preserved valuation logic</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Immutable diligence records</li>
</ul>
</div>
<div className="w-full md:w-1/2 aspect-[4/3] bg-canvas border border-border rounded-lg relative overflow-hidden technical-grid flex items-center justify-center">
<div className="w-32 h-32 rounded bg-obsidian text-white flex items-center justify-center text-xs shadow-lg transform rotate-3">Term Sheet</div>
</div>
</div>
</section>
</main>

<main className="page-section hidden flex-col w-full relative pt-32 pb-20" id="page-research">
<section className="px-6 md:px-12 lg:px-20 max-w-5xl mx-auto w-full mb-16">
<button className="nav-link inline-flex items-center gap-2 text-sm font-medium text-subtle hover:text-obsidian transition-colors mb-8 focus:outline-none" data-target="page-home">
<iconify-icon icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Back to Home
            </button>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-obsidian mb-4">Oravia Labs</h1>
<p className="text-lg text-subtle">Advancing the science of strategic decision making through graph theory, heuristics, and open research.</p>
</section>
<section className="px-6 md:px-12 lg:px-20 max-w-5xl mx-auto w-full">
<div className="border-t border-border flex flex-col">

<a className="group py-8 border-b border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-white/50 transition-colors px-4 -mx-4 rounded-lg" href="#">
<div className="space-y-1">
<div className="flex items-center gap-3">
<span className="text-[10px] font-mono bg-border/50 px-2 py-0.5 rounded text-obsidian">Nov 2024</span>
<span className="text-xs text-subtle">Methodology</span>
</div>
<h3 className="text-lg font-semibold text-obsidian group-hover:text-black transition-colors tracking-tight">Graph-Theoretic Approaches to Decision Traceability</h3>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-obsidian">
                  Read Paper <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</a>

<a className="group py-8 border-b border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-white/50 transition-colors px-4 -mx-4 rounded-lg" href="#">
<div className="space-y-1">
<div className="flex items-center gap-3">
<span className="text-[10px] font-mono bg-border/50 px-2 py-0.5 rounded text-obsidian">Aug 2024</span>
<span className="text-xs text-subtle">Algorithm</span>
</div>
<h3 className="text-lg font-semibold text-obsidian group-hover:text-black transition-colors tracking-tight">Quantifying Confidence in Ambiguous Environments</h3>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-obsidian">
                  Read Paper <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</a>

<a className="group py-8 border-b border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-white/50 transition-colors px-4 -mx-4 rounded-lg" href="#">
<div className="space-y-1">
<div className="flex items-center gap-3">
<span className="text-[10px] font-mono bg-border/50 px-2 py-0.5 rounded text-obsidian">Mar 2024</span>
<span className="text-xs text-subtle">Case Study</span>
</div>
<h3 className="text-lg font-semibold text-obsidian group-hover:text-black transition-colors tracking-tight">The Cost of Untraced Assumptions in Series C Startups</h3>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-obsidian">
                  Read Paper <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</a>
</div>
</section>
</main>

<main className="page-section hidden flex-col w-full relative pt-32 pb-20" id="page-company">
<section className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto w-full mb-24">
<button className="nav-link inline-flex items-center gap-2 text-sm font-medium text-subtle hover:text-obsidian transition-colors mb-8 focus:outline-none" data-target="page-home">
<iconify-icon icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Back to Home
            </button>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-obsidian leading-tight mb-8">
                  Defensible<br/>Strategy.
                </h1>
<div className="space-y-6 text-base text-subtle leading-relaxed">
<p>Oravia was founded on a simple observation: modern organizations possess infinite data, yet critical decisions are still made via undocumented intuition.</p>
<p>We believe that strategy without traceability is merely an opinion. By applying rigorous graph architecture to human reasoning, we're building the first true system of record for the "Why" behind the "What".</p>
</div>
</div>
<div className="relative w-full aspect-square bg-white border border-border rounded-xl overflow-hidden p-8 flex flex-col justify-end">
<div className="absolute top-0 right-0 p-8">
<iconify-icon className="text-4xl text-border" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-[10px] font-mono text-subtle uppercase tracking-widest mb-1">Headquarters</div>
<div className="text-lg font-semibold text-obsidian">San Francisco, CA</div>
<div className="text-sm text-subtle mt-2">Founded 2023</div>
</div>
</div>
</div>
</section>
<section className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto w-full">
<h2 className="text-2xl font-semibold text-obsidian tracking-tight mb-10 border-b border-border pb-4">Core Principles</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div>
<iconify-icon className="text-2xl text-obsidian mb-4" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-semibold text-obsidian mb-2">Absolute Transparency</h3>
<p className="text-sm text-subtle">Every assumption is surfaced. Every logical leap is documented. No black boxes in decision making.</p>
</div>
<div>
<iconify-icon className="text-2xl text-obsidian mb-4" icon="solar:ruler-pen-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-semibold text-obsidian mb-2">Intellectual Rigor</h3>
<p className="text-sm text-subtle">We build tools that force clarity, demanding evidence over consensus and structure over narrative.</p>
</div>
<div>
<iconify-icon className="text-2xl text-obsidian mb-4" icon="solar:history-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-semibold text-obsidian mb-2">Immutable History</h3>
<p className="text-sm text-subtle">Decisions are preserved securely for future audit, forming an organizational brain that never forgets.</p>
</div>
</div>
</section>
</main>
</div> 

<footer className="bg-white py-20 px-6 md:px-12 lg:px-20 border-t border-border relative z-10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-xs space-y-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-obsidian rounded-sm"></div>
<span className="font-semibold text-sm tracking-tight text-obsidian">ORAVIA</span>
</div>
<p className="text-xs text-subtle leading-relaxed">Designed for the rigorous demands of modern enterprise strategy. San Francisco, CA.</p>
<div className="text-[10px] text-border">© 2024 Oravia Systems Inc.</div>
</div>
<div className="flex gap-16">
<div className="space-y-4">
<h4 className="text-xs font-semibold text-obsidian">Platform</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><button className="nav-link hover:text-obsidian transition-colors" data-target="page-product">Analysis Engine</button></li>
<li><a className="hover:text-obsidian transition-colors" href="#">Security</a></li>
<li><button className="nav-link hover:text-obsidian transition-colors" data-target="page-solutions">Enterprise Use Cases</button></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold text-obsidian">Company</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><button className="nav-link hover:text-obsidian transition-colors" data-target="page-company">About</button></li>
<li><a className="hover:text-obsidian transition-colors" href="#">Careers</a></li>
<li><button className="nav-link hover:text-obsidian transition-colors" data-target="page-research">Research</button></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold text-obsidian">Connect</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><a className="hover:text-obsidian transition-colors" href="#">Twitter</a></li>
<li><a className="hover:text-obsidian transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-obsidian transition-colors" href="#">GitHub</a></li>
</ul>
</div>
</div>
</div>
</footer>





    </>
  );
}
