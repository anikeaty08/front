import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener('DOMContentLoaded', () => {
const cards = ['model-diag', 'model-sprint', 'model-part'];
function updateState(selectedId) {
cards.forEach(id => {
const card = document.getElementById(id);
if (!card) return;
const isSelected = id === selectedId;
if (isSelected) {
card.classList.add('scale-[1.02]', 'shadow-2xl', 'z-10', 'ring-1', 'ring-obsidian/5', 'opacity-100');
card.classList.remove('scale-[0.98]', 'opacity-60', 'hover:shadow-xl');
if (id !== 'model-sprint') {
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
updateState('model-sprint');
});



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
serif: ['"Instrument Serif"', 'serif'],
mono: ['"JetBrains Mono"', 'monospace'],
},
colors: {
canvas: '#FDFDFD',
surface: '#FFFFFF',
obsidian: '#1A1A1A',
charcoal: '#333333',
subtle: '#666666',
border: '#E0E0E0',
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



          (function(){const section=document.getElementById('decision-lifecycle');const header=document.getElementById('lifecycle-header');const line=document.getElementById('lifecycle-line');const steps=section.querySelectorAll('.lifecycle-step');function handleScroll(){if(!section)return;const rect=section.getBoundingClientRect();const viewH=window.innerHeight;const travelDistance=rect.height-viewH;const scrolled=-rect.top;let progress=scrolled/travelDistance;progress=Math.max(0,Math.min(1,progress));if(progress>0.02)header.style.opacity='1';else header.style.opacity='0';line.style.height=(progress*100)+'%';steps.forEach(step=>{const t=parseFloat(step.dataset.threshold);if(progress>=t){if(progress<t+0.11){step.classList.add('active');step.classList.replace('opacity-30','opacity-100');step.style.transform='scale(1.05)';}else{step.classList.add('active');step.classList.replace('opacity-30','opacity-50');step.style.transform='scale(1)';}}else{step.classList.remove('active');step.classList.replace('opacity-100','opacity-30');step.classList.replace('opacity-50','opacity-30');step.style.transform='scale(1)';}});};window.addEventListener('scroll',handleScroll,{passive:true});handleScroll();})();
        


      uniform float uTime;
      uniform float uDistortion;
      uniform float uSize;
      uniform vec2 uMouse;
      varying float vNoise;
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
      float snoise(vec3 v) {
          const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
          const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
          vec3 i  = floor(v + dot(v, C.yyy) );
          vec3 x0 = v - i + dot(i, C.xxx) ;
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min( g.xyz, l.zxy );
          vec3 i2 = max( g.xyz, l.zxy );
          vec3 x1 = x0 - i1 + 1.0 * C.xxx;
          vec3 x2 = x0 - i2 + 2.0 * C.xxx;
          vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
          i = mod289(i);
          vec4 p = permute( permute( permute(
                      i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                  + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                  + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
          float n_ = 1.0/7.0;
          vec3  ns = n_ * D.wyz - D.xzx;
          vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_ );
          vec4 x = x_ *ns.x + ns.yyyy;
          vec4 y = y_ *ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);
          vec4 b0 = vec4( x.xy, y.xy );
          vec4 b1 = vec4( x.zw, y.zw );
          vec4 s0 = floor(b0)*2.0 + 1.0;
          vec4 s1 = floor(b1)*2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
          vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
          vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
          vec3 p0 = vec3(a0.xy,h.x);
          vec3 p1 = vec3(a0.zw,h.y);
          vec3 p2 = vec3(a1.xy,h.z);
          vec3 p3 = vec3(a1.zw,h.w);
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
          p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
      }
      void main() {
          vec3 pos = position;
          float noise = snoise(vec3(pos.x * 0.5 + uTime * 0.15, pos.y * 0.5, pos.z * 0.5));
          vNoise = noise;
          vec3 newPos = pos + (normal * noise * uDistortion);
          float dist = distance(uMouse * 10.0, newPos.xy);
          float interaction = smoothstep(6.0, 0.0, dist);
          newPos.z += interaction * 1.5;
          vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = uSize * (20.0 / -mvPosition.z);
      }
    


      uniform vec3 uColor;
      varying float vNoise;
      void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);
          if (dist > 0.45) discard;
          float alpha = 1.0;
          vec3 color1 = uColor;
          vec3 color2 = vec3(0.25, 0.35, 0.45);
          vec3 finalColor = mix(color1, color2, vNoise * 0.5 + 0.5);
          gl_FragColor = vec4(finalColor, alpha);
      }
    


      const container = document.getElementById('canvas-container');
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0xFDFDFD, 0.04);

      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 0, 20);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const objectGroup = new THREE.Group();
      scene.add(objectGroup);

      const geometry = new THREE.BoxGeometry(9, 9, 9, 40, 40, 40);
      const uniforms = {
          uTime: { value: 0 },
          uDistortion: { value: 0.0 },
          uSize: { value: 1.8 },
          uColor: { value: new THREE.Color('#1A1A1A') },
          uMouse: { value: new THREE.Vector2(0, 0) }
      };

      const material = new THREE.ShaderMaterial({
          vertexShader: document.getElementById('vertexShader').textContent,
          fragmentShader: document.getElementById('fragmentShader').textContent,
          uniforms: uniforms,
          transparent: true,
          blending: THREE.NormalBlending
      });

      const points = new THREE.Points(geometry, material);
      objectGroup.add(points);

      let time = 0;
      let mouseX = 0, mouseY = 0;

      document.addEventListener('mousemove', (e) => {
          mouseX = (e.clientX / window.innerWidth) * 2 - 1;
          mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
          uniforms.uMouse.value.x += (mouseX - uniforms.uMouse.value.x) * 0.03;
          uniforms.uMouse.value.y += (mouseY - uniforms.uMouse.value.y) * 0.03;
      });

      function adjustLayout() {
          const w = window.innerWidth;
          if(w < 1024) {
              objectGroup.position.set(4, 5, -8);
              objectGroup.scale.set(0.65, 0.65, 0.65);
          } else {
              objectGroup.position.set(0, 2.5, 0);
              objectGroup.scale.set(0.65, 0.65, 0.65);
          }
      }

      window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
          adjustLayout();
      });
      adjustLayout();

      window.addEventListener('scroll', () => {
          const scrollY = window.scrollY;
          objectGroup.rotation.z = scrollY * 0.0005;
          const w = window.innerWidth;
          const baseY = w < 1024 ? 5 : 2.5;
          objectGroup.position.y = baseY + scrollY * 0.005;

          const header = document.querySelector('header');
          if(header) {
            if(scrollY > 50) {
              header.classList.add('shadow-sm');
              header.classList.replace('bg-canvas/90', 'bg-white/90');
            } else {
              header.classList.remove('shadow-sm');
              header.classList.replace('bg-white/90', 'bg-canvas/90');
            }
          }
      });

      function animate() {
          requestAnimationFrame(animate);
          time += 0.008;
          objectGroup.rotation.y = time * 0.2;
          uniforms.uTime.value = time;
          camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02;
          camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.02;
          camera.lookAt(0,0,0);
          renderer.render(scene, camera);
      }
      animate();
    


      (function() {
        const container = document.getElementById('testimonial-container');
        const prevBtn = document.getElementById('testimonial-prev');
        const nextBtn = document.getElementById('testimonial-next');
        if(!container || !prevBtn || !nextBtn) return;
        const slides = container.querySelectorAll('[data-index]');
        let currentIndex = 0;
        const maxIndex = slides.length - 1;
        function updateState() {
          slides.forEach(slide => {
            const idx = parseInt(slide.dataset
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 technical-grid pointer-events-none"></div>
<div className="fixed inset-0 z-0 opacity-100" id="canvas-container"></div>

<header className="fixed top-0 left-0 right-0 z-50 w-full px-6 md:px-12 flex justify-between items-center bg-canvas/90 backdrop-blur-md border-b border-border/50 transition-all duration-300 py-3">
<div className="flex items-center gap-3">
<div className="bg-obsidian text-white flex items-center justify-center rounded-sm w-5 h-5">
<iconify-icon height="14" icon="solar:shield-check-linear" width="14"></iconify-icon>
</div>
<span className="font-serif font-medium tracking-tight text-obsidian uppercase text-base">
          Hair &amp; Turtle
        </span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#">
          Approach
        </a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#">
          Studio
        </a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#">
          Insights
        </a>
</nav>
<div className="flex items-center gap-5">
<button className="group relative isolate overflow-hidden bg-obsidian text-white text-xs font-semibold rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 hover:scale-[1.02] px-5 py-2">
<span className="relative z-20">Inquire</span>
</button>
</div>
</header>

<div className="z-10 flex flex-col w-full relative">

<section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-32 pb-20 gap-16">
<div className="max-w-2xl space-y-10 relative z-10">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-border/60 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-obsidian"></span>
<span className="font-sans text-[11px] font-medium text-subtle tracking-tight">
                Accepting New Partners
              </span>
</div>
<h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-obsidian leading-[0.95]">
              Speed creates output.
              <br/>
<span className="text-subtle italic">Decisions create systems.</span>
</h1>
<p className="max-w-md font-sans text-base text-subtle leading-relaxed">
              We partner with senior teams to structure critical decisions —
              combining human judgment with AI to move faster, align teams, and
              ship outcomes you can stand behind.
            </p>
</div>
<div className="flex flex-wrap items-center gap-4">
<button className="group relative isolate overflow-hidden bg-obsidian text-white text-sm font-semibold px-8 py-3.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)] hover:ring-white/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-obsidian/20 focus:ring-offset-2 flex items-center gap-2">
<div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0 pointer-events-none"></div>
<span className="relative z-10">Engagement Models</span>
<iconify-icon className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="px-8 py-3.5 bg-white text-obsidian border border-border text-sm font-medium rounded shadow-sm transition-all duration-300 ease-out hover:bg-gray-50 hover:border-obsidian/40 hover:text-black hover:shadow-md active:scale-[0.97] active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-obsidian/10 focus:ring-offset-2">
              Our Philosophy
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
                    Decision Logic Architecture
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
                    .node-text { font-family: "Plus Jakarta Sans", sans-serif; font-size: 8px; font-weight: 600; fill: #111; text-transform: uppercase; letter-spacing: 0.05em; }
                    .node-box { fill: white; stroke: #111; stroke-width: 1.5; }
                  </style>

<path d="M50,150 C100,150 100,80 150,80" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M50,150 C100,150 100,220 150,220" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M150,80 C200,80 200,120 250,120" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M150,220 C200,220 200,180 250,180" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M250,120 L320,150" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M250,180 L320,150" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>

<path className="signal-path" d="M50,150 C100,150 100,80 150,80 C200,80 200,120 250,120 L320,150" fill="none" stroke="#111" strokeLinecap="round" strokeWidth="2.5"></path>

<circle cx="50" cy="150" fill="#111" r="6"></circle>
<text className="node-text" text-anchor="middle" x="50" y="175">
                    The Business Reality
                  </text>
<rect className="node-box" height="20" rx="4" width="100" x="130" y="70"></rect>
<text className="node-text" dy="1" text-anchor="middle" x="180" y="83">
                    Explicit Senior Assumptions
                  </text>
<rect fill="white" height="20" rx="4" stroke="#E5E5E5" width="80" x="130" y="210"></rect>
<rect fill="#F5F5F7" height="20" rx="4" width="60" x="250" y="170"></rect>
<rect className="node-box" height="20" rx="4" width="100" x="230" y="110"></rect>
<text className="node-text" dy="1" text-anchor="middle" x="280" y="123">
                    Signals &amp; Market Truth
                  </text>
<circle cx="350" cy="150" fill="#111" r="12"></circle>
<path d="M346 150l3 3 5-5" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<text className="node-text" text-anchor="middle" x="350" y="178">
                    Committed Direction
                  </text>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8 bg-obsidian text-white px-4 py-2 rounded shadow-xl max-w-[200px] text-center">
<div className="text-[9px] uppercase tracking-wider text-white/60 mb-1">
                    Decision Confidence
                  </div>
<div className="text-[11px] font-medium leading-tight">
                    Increases as assumptions are challenged &amp; validated.
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-border/60 py-16 bg-white">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
<p className="text-xs font-semibold text-obsidian whitespace-nowrap md:w-auto w-full text-center md:text-left uppercase tracking-wider">
            Partnering With
          </p>
<div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
<span className="font-serif text-xl italic text-obsidian">Vercel</span>
<span className="font-sans text-lg font-bold text-obsidian tracking-tight">
              stripe
            </span>
<span className="font-sans text-lg font-bold text-obsidian tracking-tight">
              Linear
            </span>
<span className="font-sans text-lg font-bold text-obsidian tracking-tight">
              OpenAI
            </span>
<span className="font-sans text-lg font-bold text-obsidian tracking-tight">
              Raycast
            </span>
</div>
</div>
</section>

<section className="relative w-full bg-canvas border-b border-border/60" id="decision-lifecycle" style={{height: '400vh'}}>
<div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
<div className="max-w-4xl w-full px-6 md:px-12 relative z-10 flex flex-col items-center h-full py-20">
<div className="text-center mb-12 shrink-0 opacity-0 transition-opacity duration-700" id="lifecycle-header">
<h2 className="font-serif text-3xl md:text-4xl font-medium text-obsidian mb-3">
                Traceability Lifecycle
              </h2>
<p className="text-subtle text-sm max-w-md mx-auto">
                Senior intervention accelerated by AI. Not the other way around.
              </p>
</div>
<div className="relative w-full max-w-2xl flex-1 flex flex-col justify-center my-auto">
<div className="absolute left-1/2 top-4 bottom-4 w-px bg-border/60 -translate-x-1/2"></div>
<div className="absolute left-1/2 top-4 w-px bg-obsidian -translate-x-1/2 transition-all duration-75 ease-linear h-0 max-h-[calc(100%-2rem)]" id="lifecycle-line"></div>
<div className="space-y-12 py-8 relative">

<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.1">
<div className="w-[42%] text-right pr-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      01 Trigger
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      Decision Trigger
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      A real business inflection appears.
                    </p>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<div className="bg-white border border-border p-3 rounded shadow-sm inline-block">
<span className="text-xs font-medium text-obsidian">
                        "Should we pivot to Enterprise?"
                      </span>
</div>
</div>
</div>

<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.22">
<div className="w-[42%] text-right pr-8">
<div className="bg-white border border-border p-3 rounded shadow-sm inline-block text-left">
<span className="text-xs font-medium text-obsidian">
                        Constraints &amp; Market Forces
                      </span>
</div>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      02 Align
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      Context Alignment
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      We align leadership on reality.
                    </p>
</div>
</div>

<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.34">
<div className="w-[42%] text-right pr-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      03 Belief
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      Assumptions Visible
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      No implied logic. No hidden bets.
                    </p>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<div className="bg-white border border-border p-3 rounded shadow-sm inline-block text-left">
<span className="text-[10px] text-subtle block mb-1">
                        Assumption
                      </span>
<span className="text-xs font-medium text-obsidian">
                        "PLG growth is plateauing."
                      </span>
</div>
</div>
</div>

<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.46">
<div className="w-[42%] text-right pr-8">
<div className="bg-white border border-border p-3 rounded shadow-sm inline-flex items-center gap-3">
<iconify-icon className="text-subtle" height="16" icon="solar:chart-square-linear" width="16"></iconify-icon>
<div>
<div className="text-[10px] text-subtle">
                          Churn Analysis
                        </div>
<div className="text-xs font-bold text-obsidian">
                          Up 12% in SMB
                        </div>
</div>
</div>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      04 Insight
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      Evidence &amp; Signals
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      AI accelerates insight, not judgment.
                    </p>
</div>
</div>

<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.58">
<div className="w-[42%] text-right pr-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      05 Logic
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      Structured Reasoning
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      Logic connects belief to action.
                    </p>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<div className="bg-white border border-border p-3 rounded shadow-sm inline-block max-w-[200px]">
<span className="text-xs font-medium text-obsidian">
                        Tradeoffs mapped. Disagreement productive.
                      </span>
</div>
</div>
</div>

<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.70">
<div className="w-[42%] text-right pr-8">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-obsidian text-white text-xs font-semibold shadow-lg shadow-obsidian/20">
<span>Direction Set</span>
<iconify-icon height="12" icon="solar:check-circle-bold" width="12"></iconify-icon>
</span>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      06 Outcome
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      Decision &amp; Commitment
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      A direction teams can execute on.
                    </p>
</div>
</div>

<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.82">
<div className="w-[42%] text-right pr-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      07 Asset
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      Versioned &amp; Reusable
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      Decisions become assets.
                    </p>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<span className="font-mono text-[10px] text-subtle bg-slate-100 px-2 py-1 rounded inline-block">
                      Audit Trail #8F2A
                    </span>
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
<h2 className="font-serif text-4xl md:text-5xl font-medium text-obsidian tracking-tight mb-6 leading-[1.1]">
                Capabilities
                <span className="text-subtle font-sans font-light text-2xl block mt-2">
                  Modes of engagement, not tools.
                </span>
</h2>
<p className="text-subtle text-lg leading-relaxed font-light">
                Every engagement is led by experienced operators. We use AI to
                compress analysis, not to replace the strategist.
              </p>
</div>
<a className="pb-1 border-b border-obsidian text-sm font-medium hover:opacity-70 transition-opacity mb-2" href="#">
              Explore Our Approach
            </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 p-10 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="max-w-md">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
<iconify-icon height="20" icon="solar:structure-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-serif font-medium text-obsidian mb-3">
                      Decision Architecture
                    </h3>
<p className="text-subtle leading-relaxed">
                      We help teams design how decisions are made — before
                      execution begins. Every major decision has a clear lineage
                      from question to outcome.
                    </p>
</div>
<div className="hidden lg:block">
<div className="px-3 py-1 bg-canvas border border-border rounded text-[10px] font-mono text-subtle uppercase tracking-wider">
                      System Design
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
<circle cx="20" cy="50" fill="#111" r="4"></circle>
<circle cx="200" cy="20" fill="#fff" r="4" stroke="#111" strokeWidth="1.5"></circle>
<circle cx="380" cy="80" fill="#fff" r="4" stroke="#111" strokeWidth="1.5"></circle>
<circle cx="560" cy="50" fill="#111" r="4"></circle>
</svg>
</div>
</div>
</div>

<div className="md:col-span-4 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500 flex flex-col">
<div className="p-10 relative z-10 flex flex-col h-full">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
<iconify-icon height="20" icon="solar:user-hand-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-medium text-obsidian mb-3">
                  Senior-Led Strategy
                </h3>
<p className="text-sm text-subtle leading-relaxed mb-8">
                  Every engagement is led by experienced operators who’ve made
                  these calls before. No junior consultants.
                </p>

<div className="mt-auto relative w-full h-32 flex flex-col justify-end items-center">
<div className="flex -space-x-4">
<div className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 z-0"></div>
<div className="w-12 h-12 rounded-full border-2 border-white bg-gray-300 z-10"></div>
<div className="w-12 h-12 rounded-full border-2 border-white bg-obsidian text-white flex items-center justify-center z-20 font-serif italic text-sm">
                      H&amp;T
                    </div>
</div>
</div>
</div>
</div>

<div className="md:col-span-12 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500">
<div className="p-10 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 max-w-lg">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
<iconify-icon height="20" icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-medium text-obsidian mb-2">
                    AI-Accelerated Analysis
                  </h3>
<p className="text-subtle leading-relaxed">
                    We use AI to compress weeks of analysis into days — without
                    collapsing judgment. The result isn't a slide, it's a
                    repeatable way of moving forward.
                  </p>
</div>
<div className="flex-1 w-full flex items-center justify-center gap-6 h-32 relative">
<div className="w-16 h-16 rounded-full border border-dashed border-border flex items-center justify-center relative">
<div className="absolute inset-0 rounded-full border-t border-obsidian transparent animate-spin [animation-duration:3s] opacity-0 group-hover:opacity-100"></div>
<iconify-icon className="text-subtle group-hover:text-obsidian transition-colors" height="24" icon="solar:cpu-bolt-linear" width="24"></iconify-icon>
</div>
<div className="text-xs font-mono text-obsidian bg-slate-50 border border-border px-3 py-1 rounded">
                    Analysis Complete
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-20 border-b border-border/60 bg-canvas">
<div className="max-w-7xl mx-auto text-center mb-16">
<h2 className="font-serif text-3xl font-medium text-obsidian tracking-tight mb-4">
            Built for high-stakes environments.
          </h2>
</div>
</section>
<section className="py-32 bg-obsidian text-white relative overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<div className="relative w-full" id="testimonial-container" style={{display: 'grid', gridTemplateAreas: '\'stack\''}}>

<div className="transition-all duration-700 ease-in-out opacity-100 flex flex-col justify-center" data-index="0" style={{gridArea: 'stack'}}>
<h2 className="text-4xl font-serif font-medium tracking-tight mb-8">
                    "It’s no longer about who has the loudest voice, but who has
                    the strongest lineage. Hair &amp; Turtle brought a rigor to
                    our strategy that didn't exist before."
                  </h2>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-serif italic text-lg">
                      MA
                    </div>
<div>
<div className="font-medium text-white">Marcus Alvarez</div>
<div className="text-sm text-white/50">
                        Lead Analyst, Stripe
                      </div>
</div>
</div>
</div>

<div className="transition-all duration-700 ease-in-out opacity-0 pointer-events-none flex flex-col justify-center" data-index="1" style={{gridArea: 'stack'}}>
<h2 className="text-4xl font-serif font-medium tracking-tight mb-8">
                    "We moved from opinion-based planning to evidence-backed
                    execution. This is the absolute backbone of our strategic
                    integrity."
                  </h2>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-serif italic text-lg">
                      SC
                    </div>
<div>
<div className="font-medium text-white">Sarah Chen</div>
<div className="text-sm text-white/50">
                        VP Product, Vercel
                      </div>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3 mt-10">
<button className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed" id="testimonial-prev">
<iconify-icon height="18" icon="solar:arrow-left-linear" width="18"></iconify-icon>
</button>
<button className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed" id="testimonial-next">
<iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-row md:flex-col justify-between gap-6 md:gap-0 md:space-y-12 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-16">
<div>
<div className="text-3xl font-serif mb-1">5x</div>
<div className="text-sm text-white/50">Faster Consensus</div>
</div>
<div>
<div className="text-3xl font-serif mb-1">100%</div>
<div className="text-sm text-white/50">Audit Coverage</div>
</div>
<div>
<div className="text-3xl font-serif mb-1">Zero</div>
<div className="text-sm text-white/50">Ambiguity</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-20 border-b border-border">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl md:text-4xl font-medium text-obsidian tracking-tight mb-4">
              Engagement Models
            </h2>
<p className="text-subtle text-base font-light">
              We structure our work around outcomes, not hours.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="pricing-grid">

<div className="pricing-card group relative p-8 rounded-xl border border-border bg-white flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-obsidian/30 transition-all duration-300" id="model-diag" role="button" tabindex="0">
<div className="mb-4 relative z-10">
<span className="font-serif text-xl text-obsidian">Diagnostic</span>
</div>
<p className="text-sm text-subtle mb-8 leading-relaxed relative z-10 h-12">
                Assessment of current decision velocity and blockers.
              </p>
<ul className="space-y-4 mb-8 flex-1 relative z-10">
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  System Audit
                </li>
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  Bottle-neck Analysis
                </li>
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  2 Week Sprint
                </li>
</ul>
<button className="w-full py-3 rounded-lg border border-border text-xs font-semibold text-obsidian bg-white hover:border-obsidian relative z-10">
                Inquire
              </button>
</div>

<div className="pricing-card group relative p-8 rounded-xl bg-obsidian text-white shadow-xl shadow-obsidian/20 flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-2xl scale-[1.02] z-10 transition-all duration-300" id="model-sprint" role="button" tabindex="0">
<div className="mb-4">
<span className="font-serif text-xl">Strategic Sprint</span>
</div>
<p className="text-sm text-white/60 mb-8 leading-relaxed h-12">
                Solve one critical strategic question (Pivot, Org Design, GTM).
              </p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-white/80">
<span className="text-white">✓</span>
                  Full Traceability Setup
                </li>
<li className="flex gap-3 text-sm text-white/80">
<span className="text-white">✓</span>
                  Senior Facilitation
                </li>
<li className="flex gap-3 text-sm text-white/80">
<span className="text-white">✓</span>
                  Defensible Outcome
                </li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-obsidian text-xs font-semibold hover:bg-gray-100 relative z-10">
                Inquire
              </button>
</div>

<div className="pricing-card group relative p-8 rounded-xl border border-border bg-white flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-obsidian/30 transition-all duration-300" id="model-part" role="button" tabindex="0">
<div className="mb-4 relative z-10">
<span className="font-serif text-xl text-obsidian">
                  System Partnership
                </span>
</div>
<p className="text-sm text-subtle mb-8 leading-relaxed relative z-10 h-12">
                Long-term governance and decision system implementation.
              </p>
<ul className="space-y-4 mb-8 flex-1 relative z-10">
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  Quarterly Planning
                </li>
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  Review Board Structure
                </li>
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  Retainer Access
                </li>
</ul>
<button className="w-full py-3 rounded-lg border border-border text-xs font-semibold text-obsidian bg-white hover:border-obsidian relative z-10">
                Inquire
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
<span className="font-serif font-bold text-lg tracking-tight text-obsidian uppercase">
                Hair &amp; Turtle
              </span>
</div>
<p className="text-xs text-subtle leading-relaxed">
              AI helps us move faster. Senior judgment ensures we move in the
              right direction.
            </p>
<div className="text-[10px] text-border">
              © 2024 Hair &amp; Turtle Systems.
            </div>
</div>
<div className="flex gap-16">
<div className="space-y-4">
<h4 className="text-xs font-bold text-obsidian">Studio</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><a className="hover:text-obsidian" href="#">Approach</a></li>
<li>
<a className="hover:text-obsidian" href="#">Case Studies</a>
</li>
<li><a className="hover:text-obsidian" href="#">Manifesto</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-bold text-obsidian">Contact</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><a className="hover:text-obsidian" href="#">Inquire</a></li>
<li><a className="hover:text-obsidian" href="#">Twitter</a></li>
<li><a className="hover:text-obsidian" href="#">LinkedIn</a></li>
</ul>
</div>
</div>
</div>
</footer>
</div>






    </>
  );
}
