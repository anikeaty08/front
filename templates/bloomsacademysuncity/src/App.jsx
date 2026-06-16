import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener('DOMContentLoaded', () => {
const cards = ['tier-early', 'tier-primary', 'tier-secondary'];
function updateState(selectedId) {
cards.forEach(id => {
const card = document.getElementById(id);
if (!card) return;
const isSelected = id === selectedId;
if (isSelected) {
card.classList.add('scale-[1.02]', 'shadow-2xl', 'z-10', 'ring-1', 'ring-obsidian/5', 'opacity-100');
card.classList.remove('scale-[0.98]', 'opacity-60', 'hover:shadow-xl');
if (id !== 'tier-primary') {
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
updateState('tier-primary');
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
                    if (i === index) {
                      step.classList.add('def-active');
                      step.classList.remove('def-inactive');
                    } else {
                      step.classList.remove('def-active');
                      step.classList.add('def-inactive');
                    }
                  });
                }
                const observer = new IntersectionObserver((entries) => {
                  if (entries[0].isIntersecting) {
                    let current = 0;
                    activateStep(0);
                    const interval = setInterval(() => {
                      current++;
                      if (current >= steps.length) { clearInterval(interval); } else { activateStep(current); }
                    }, 900);
                    observer.disconnect();
                  }
                }, { threshold: 0.5 });
                observer.observe(grid);
                steps.forEach((step, i) => { step.addEventListener('mouseenter', () => activateStep(i)); });
              })();
            


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
      const uniforms = {
          uTime: { value: 0 },
          uDistortion: { value: 0.0 },
          uSize: { value: 1.8 },
          uColor: { value: new THREE.Color('#4F46E5') },
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
        const stats = [
          [
            { val: "100%", lbl: "Pass Rate" },
            { val: "20+", lbl: "Years of Excellence" },
            { val: "15:1", lbl: "Student Ratio" }
          ],
          [
            { val: "50+", lbl: "Awards Won" },
            { val: "100%", lbl: "Parent Satisfaction" },
            { val: "Top", lbl: "Facilities in Abuja" }
          ],
          [
            { val: "100%", lbl: "University Entry" },
            { val: "25", lbl: "Clubs & Societies" },
            { val: "Global", lbl: "Alumni Network" }
          ]
        ];
        function updateState(isInit) {
          slides.forEach(slide => {
            const idx = parseInt(slide.dataset.index);
            if (idx === currentIndex) {
              slide.classList.remove('opacity-0', 'pointer-events-none');
              slide.classList.add('opacity-100');
            } else {
              slide.classList.remove('opacity-100');
              slide.classList.add('opacity-0', 'pointer-events-none');
            }
          });
          prevBtn.disabled = currentIndex === 0;
          nextBtn.disabled = currentIndex === maxIndex;
          const data = stats[currentIndex];
          for(let i=0; i<3; i++) {
            const val = document.getElementById('t-stat-val-' + i);
            const lbl = document.getElementById('t-stat-lbl-' + i);
            if(val && lbl) {
              if(!isInit) {
                val.classList.add('opacity-0', '-translate-y-2');
                lbl.classList.add('opacity-0');
                setTimeout(() => {
                  val.textContent = data[i].val;
                  lbl.textContent = data[i].lbl;
                  val.classList.remove('opacity-0', '-translate-y-2');
                  lbl.classList.remove('opacity-0');
                }, 300);
              } else {
                val.textContent = data[i].val;
                lbl.textContent = data[i].lbl;
              }
            }
          }
        }
        prevBtn.addEventListener('click', () => { if (currentIndex > 0) { currentIndex--; updateState(); } });
        nextBtn.addEventListener('click', () => { if (currentIndex < maxIndex) { currentIndex++; updateState(); } });
        updateState(true);
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 technical-grid pointer-events-none"></div>
<div className="fixed inset-0 z-0 opacity-100" id="canvas-container"></div>

<header className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-5 md:px-12 flex justify-between items-center bg-canvas/90 backdrop-blur-md border-b border-border/50 transition-all duration-300">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-obsidian text-white flex items-center justify-center rounded-sm">
<iconify-icon icon="solar:hat-graduation-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-sans text-sm font-bold tracking-tight text-obsidian uppercase">
          Blooms Academy
        </span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="admissions.html">
          Admissions
        </a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="academics.html">
          Academics
        </a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="campus-life.html">
          Campus Life
        </a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="portal.html">
          Portal
        </a>
</nav>
<div className="flex items-center gap-5">
<a className="hidden md:block font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="staff-login.html">
          Staff Login
        </a>
<a className="group relative isolate overflow-hidden bg-indigo-600 text-white text-xs font-semibold px-6 py-2.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.04] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.25)] hover:ring-white/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:ring-offset-1 inline-flex items-center justify-center" href="apply.html">
<div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent z-10"></div>
<span className="relative z-20">Apply Now</span>
</a>
</div>
</header>

<div className="z-10 flex flex-col w-full relative">

<section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-32 pb-20 gap-16">
<div className="max-w-2xl space-y-10 relative z-10">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-border/60 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
<span className="font-sans text-[11px] font-medium text-subtle tracking-tight">
                Admissions Open for 2024/2025
              </span>
</div>
<h1 className="font-sans text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-obsidian leading-[0.95]">
              Nurturing
              <br/>
<span className="text-subtle">Global Leaders.</span>
</h1>
<p className="max-w-md font-sans text-base text-subtle leading-relaxed">
              Located in Sunnyside, Abuja. We provide a blend of British and
              Nigerian curricula to raise total children who excel in academics
              and character.
            </p>
</div>
<div className="flex flex-wrap items-center gap-4">
<button className="group relative isolate overflow-hidden bg-indigo-600 text-white text-sm font-semibold px-8 py-3.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)] hover:ring-white/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:ring-offset-2 flex items-center gap-2">
<div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0 pointer-events-none"></div>
<span className="relative z-10">Book a Tour</span>
<iconify-icon className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="px-8 py-3.5 bg-white text-obsidian border border-border text-sm font-medium rounded shadow-sm transition-all duration-300 ease-out hover:bg-gray-50 hover:border-obsidian/40 hover:text-black hover:shadow-md active:scale-[0.97] active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-obsidian/10 focus:ring-offset-2">
              Download Prospectus
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
                    Academic Trajectory
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
                    @keyframes signal-flow {
                      0% { stroke-dashoffset: 60; opacity: 0; }
                      5% { opacity: 1; }
                      90% { stroke-dashoffset: -360; opacity: 1; }
                      95% { opacity: 0; }
                      100% { stroke-dashoffset: -360; opacity: 0; }
                    }
                    .node-pulse { animation: pulse 6s infinite ease-out; transform-box: fill-box; transform-origin: center; }
                    @keyframes pulse {
                      0%, 100% { transform: scale(1); }
                      50% { transform: scale(1.1); }
                    }
                  </style>

<path d="M50,150 C100,150 100,80 150,80" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M50,150 C100,150 100,220 150,220" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M150,80 C200,80 200,120 250,120" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M150,220 C200,220 200,180 250,180" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M250,120 L320,150" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M250,180 L320,150" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>

<path className="signal-path" d="M50,150 C100,150 100,80 150,80 C200,80 200,120 250,120 L320,150" fill="none" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2.5"></path>

<circle className="node-pulse" cx="50" cy="150" fill="#111" r="6"></circle>
<text fill="#111" fontFamily="sans-serif" fontSize="10" font-weight="600" text-anchor="middle" x="50" y="175">
                    Enrollment
                  </text>
<rect fill="white" height="20" rx="4" stroke="#111" strokeWidth="1.5" width="80" x="150" y="70"></rect>
<text dy="1" fill="#111" fontFamily="sans-serif" fontSize="9" font-weight="600" text-anchor="middle" x="190" y="83">
                    Cambridge
                  </text>
<rect fill="white" height="20" rx="4" stroke="#E5E5E5" width="80" x="150" y="210"></rect>
<rect fill="#F5F5F7" height="20" rx="4" width="60" x="250" y="170"></rect>
<rect fill="white" height="20" rx="4" stroke="#111" strokeWidth="1.5" width="60" x="250" y="110"></rect>
<text dy="1" fill="#111" fontFamily="sans-serif" fontSize="9" font-weight="600" text-anchor="middle" x="280" y="123">
                    STEAM
                  </text>
<circle cx="320" cy="150" fill="#111" r="12"></circle>
<path d="M316 150l3 3 5-5" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<text fill="#111" fontFamily="sans-serif" fontSize="10" font-weight="600" text-anchor="middle" x="320" y="178">
                    Excellence
                  </text>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-obsidian text-white text-[10px] font-medium px-3 py-1.5 rounded shadow-xl">
                  Success Rate: 100%
                </div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-border/60 py-16 bg-white">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
<p className="text-xs font-semibold text-obsidian whitespace-nowrap md:w-auto w-full text-center md:text-left">
            ACCREDITED &amp; AFFILIATED WITH
          </p>
<div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
<span className="font-sans text-lg font-bold text-obsidian tracking-tight">
              Cambridge
            </span>
<span className="font-sans text-lg font-bold text-obsidian tracking-tight">
              British Council
            </span>
<span className="font-sans text-lg font-bold text-obsidian tracking-tight">
              NIG Curriculum
            </span>
<span className="font-sans text-lg font-bold text-obsidian tracking-tight">
              COBIS
            </span>
<span className="font-sans text-lg font-bold text-obsidian tracking-tight">
              APEN
            </span>
</div>
</div>
</section>

<section className="relative w-full bg-canvas border-b border-border/60" id="decision-lifecycle" style={{height: '250vh'}}>
<div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
<div className="max-w-4xl w-full px-6 md:px-12 relative z-10 flex flex-col items-center h-full py-20">
<div className="text-center mb-12 shrink-0 opacity-0 transition-opacity duration-700" id="lifecycle-header">
<h2 className="font-sans text-2xl md:text-3xl font-semibold text-obsidian tracking-tight mb-3">
                The Blooms Journey
              </h2>
<p className="text-subtle text-sm max-w-md mx-auto">
                From early years discovery to secondary leadership.
              </p>
</div>
<div className="relative w-full max-w-2xl flex-1 flex flex-col justify-center my-auto">
<div className="absolute left-1/2 top-4 bottom-4 w-px bg-border/60 -translate-x-1/2"></div>
<div className="absolute left-1/2 top-4 w-px bg-obsidian -translate-x-1/2 transition-all duration-75 ease-linear h-0 max-h-[calc(100%-2rem)]" id="lifecycle-line"></div>
<div className="space-y-16 py-8 relative">

<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.1">
<div className="w-[42%] text-right pr-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      01 FOUNDATION
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      Early Years
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      Montessori &amp; Play-based learning.
                    </p>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<div className="bg-white border border-border p-3 rounded shadow-sm inline-block">
<div className="flex items-center gap-2">
<iconify-icon className="text-subtle" icon="solar:star-linear"></iconify-icon>
<span className="text-xs font-medium text-obsidian">
                          Curiosity Ignited
                        </span>
</div>
</div>
</div>
</div>

<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.25">
<div className="w-[42%] text-right pr-8">
<div className="bg-white border border-border p-3 rounded shadow-sm inline-block text-left">
<span className="text-[10px] text-subtle block mb-1">
                        Key Stage 1 &amp; 2
                      </span>
<span className="text-xs font-medium text-obsidian">
                        Numeracy &amp; Literacy
                      </span>
</div>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      02 DISCOVERY
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      Primary School
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      Building core academic skills.
                    </p>
</div>
</div>

<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.4">
<div className="w-[42%] text-right pr-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      03 INNOVATION
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      STEAM Focus
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      Robotics, Coding &amp; Sciences.
                    </p>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<div className="bg-white border border-border p-3 rounded shadow-sm inline-flex items-center gap-3">
<div className="w-8 h-8 bg-slate-50 rounded flex items-center justify-center border border-border/50">
<iconify-icon className="text-subtle" icon="solar:code-square-linear"></iconify-icon>
</div>
<div>
<div className="text-[10px] text-subtle">Assessment</div>
<div className="text-xs font-bold text-obsidian">
                          Top 5% Math
                        </div>
</div>
</div>
</div>
</div>

<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.55">
<div className="w-[42%] text-right pr-8">
<div className="bg-white border border-border p-3 rounded shadow-sm inline-block max-w-[200px] text-left">
<div className="flex gap-1 mb-1">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-border"></div>
</div>
<span className="text-xs font-medium text-obsidian">
                        Cambridge Checkpoint &amp; BECE Preparation.
                      </span>
</div>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      04 MASTERY
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      Secondary School
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      IGCSE &amp; WAEC curriculum.
                    </p>
</div>
</div>

<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.7">
<div className="w-[42%] text-right pr-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      05 LEADERSHIP
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      Prefecture
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      Character development &amp; service.
                    </p>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-obsidian text-white text-xs font-semibold shadow-lg shadow-obsidian/20">
<span>Head Boy/Girl</span>
<iconify-icon icon="solar:medal-ribbon-linear" width="12"></iconify-icon>
</span>
</div>
</div>

<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.85">
<div className="w-[42%] text-right pr-8">
<span className="font-mono text-[10px] text-subtle bg-slate-100 px-2 py-1 rounded inline-block">
                      Class of 2024
                    </span>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      06 FUTURE
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      University
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      Global admission placements.
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
                Academic Excellence.
                <span className="text-subtle block">Holistic Development.</span>
</h2>
<p className="text-subtle text-lg leading-relaxed">
                We bridge the gap between traditional learning and modern skill
                acquisition, preparing students for the future of work and
                leadership.
              </p>
</div>
<a className="pb-1 border-b border-obsidian text-sm font-medium hover:opacity-70 transition-opacity mb-2" href="#">
              Explore Our Curriculum
            </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 p-10 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="max-w-md">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
<iconify-icon icon="solar:book-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-obsidian mb-3">
                      Hybrid Curriculum
                    </h3>
<p className="text-subtle leading-relaxed">
                      Seamlessly integrating the National Curriculum with
                      British standards (Cambridge Checkpoint &amp; IGCSE).
                    </p>
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
<text className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300" text-anchor="middle" x="20" y="70">
                        YEAR 1
                      </text>
</g>
<g className="transition-all duration-500 delay-[400ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
<circle cx="200" cy="20" fill="#fff" r="4" stroke="#111" strokeWidth="1.5"></circle>
<text className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300" text-anchor="middle" x="200" y="40">
                        CAMBRIDGE
                      </text>
</g>
<g className="transition-all duration-500 delay-[800ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
<circle cx="380" cy="80" fill="#fff" r="4" stroke="#111" strokeWidth="1.5"></circle>
<text className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300" text-anchor="middle" x="380" y="100">
                        WAEC
                      </text>
</g>
<g className="transition-all duration-500 delay-[1200ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
<circle cx="560" cy="50" fill="#111" r="4"></circle>
<text className="text-[8px] font-mono fill-obsidian font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300" text-anchor="middle" x="560" y="70">
                        ALUMNI
                      </text>
</g>
</svg>
</div>
</div>
</div>

<div className="md:col-span-4 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500 flex flex-col">
<div className="p-10 relative z-10 flex flex-col h-full">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
<iconify-icon icon="solar:buildings-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-obsidian mb-3">
                  World-Class Facilities
                </h3>
<p className="text-sm text-subtle leading-relaxed mb-8">
                  State-of-the-art laboratories, ICT suites, and sports
                  complexes in Sunnyside.
                </p>
<div className="mt-auto relative w-full h-32 flex flex-col justify-end items-center">
<div className="absolute w-[80%] h-12 bg-border/30 border border-border rounded-t-md top-4 scale-90 opacity-0 group-hover:opacity-100 group-hover:top-0 transition-all duration-500 ease-out"></div>
<div className="absolute w-[90%] h-12 bg-canvas border border-border rounded-t-md top-8 scale-95 opacity-50 group-hover:opacity-80 group-hover:top-6 transition-all duration-500 ease-out delay-75"></div>
<div className="relative w-full h-16 bg-white border border-border rounded shadow-sm flex items-center px-4 gap-4 z-10 transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:shadow-md">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] font-bold text-obsidian uppercase tracking-wide">
                          Science Lab
                        </span>
<span className="text-[10px] font-mono text-subtle">
                          Active
                        </span>
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
<iconify-icon icon="solar:atom-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-obsidian mb-2">
                    STEAM &amp; Innovation
                  </h3>
<p className="text-subtle leading-relaxed">
                    Robotics, Coding, and Design Thinking are integrated into
                    the daily curriculum to foster problem-solving skills.
                  </p>
</div>

<div className="flex-1 w-full flex items-center justify-center gap-6 h-32 relative">

<div className="flex flex-col gap-2 relative">
<div className="w-10 h-12 bg-white border border-border shadow-sm rounded-sm flex items-center justify-center transition-all duration-700 ease-in-out group-hover:translate-x-12 group-hover:opacity-0 group-hover:scale-50">
<iconify-icon className="text-subtle" icon="solar:code-file-linear" width="16"></iconify-icon>
</div>
</div>

<div className="w-16 h-16 rounded-full border border-dashed border-border flex items-center justify-center relative">
<div className="absolute inset-0 rounded-full border-t border-obsidian transparent animate-spin [animation-duration:3s] opacity-0 group-hover:opacity-100"></div>
<iconify-icon className="text-subtle group-hover:text-obsidian transition-colors" icon="solar:cpu-linear" width="20"></iconify-icon>
</div>

<div className="w-24 h-32 bg-white border border-border shadow-lg rounded-sm p-4 space-y-3 transition-all duration-500 group-hover:shadow-xl group-hover:scale-105">
<div className="w-6 h-6 rounded bg-obsidian/5 flex items-center justify-center">
<iconify-icon icon="solar:cup-first-linear" width="12"></iconify-icon>
</div>
<div className="space-y-1.5">
<div className="h-1.5 w-full bg-obsidian/10 rounded overflow-hidden">
<div className="h-full w-0 bg-obsidian group-hover:w-full transition-all duration-700 delay-300 ease-out"></div>
</div>
<div className="h-1.5 w-3/4 bg-obsidian/10 rounded overflow-hidden">
<div className="h-full w-0 bg-obsidian group-hover:w-full transition-all duration-700 delay-500 ease-out"></div>
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
                The Blooms Standard
              </h2>
<p className="font-sans text-subtle text-base leading-relaxed">
                Our core values define the Blooms student. Discipline,
                Integrity, and Excellence form the foundation of our community.
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

<div className="def-step group flex flex-col gap-4" data-index="0">
<div className="flex items-center gap-4">
<div className="def-num w-9 h-9 bg-white border border-border rounded flex items-center justify-center text-[10px] font-mono font-medium text-subtle shadow-sm transition-all duration-500 z-10">
                    01
                  </div>
<div className="h-px flex-1 bg-border/60 lg:hidden"></div>
</div>
<div className="def-content transition-all duration-500">
<h3 className="font-sans text-sm font-semibold text-obsidian mb-1.5">
                    Integrity
                  </h3>
<p className="text-xs text-subtle leading-relaxed">
                    Moral uprightness in all actions.
                  </p>
</div>
</div>
<div className="def-step group flex flex-col gap-4" data-index="1">
<div className="flex items-center gap-4">
<div className="def-num w-9 h-9 bg-white border border-border rounded flex items-center justify-center text-[10px] font-mono font-medium text-subtle shadow-sm transition-all duration-500 z-10">
                    02
                  </div>
<div className="h-px flex-1 bg-border/60 lg:hidden"></div>
</div>
<div className="def-content transition-all duration-500">
<h3 className="font-sans text-sm font-semibold text-obsidian mb-1.5">
                    Excellence
                  </h3>
<p className="text-xs text-subtle leading-relaxed">
                    Striving for the highest standards.
                  </p>
</div>
</div>
<div className="def-step group flex flex-col gap-4" data-index="2">
<div className="flex items-center gap-4">
<div className="def-num w-9 h-9 bg-white border border-border rounded flex items-center justify-center text-[10px] font-mono font-medium text-subtle shadow-sm transition-all duration-500 z-10">
                    03
                  </div>
<div className="h-px flex-1 bg-border/60 lg:hidden"></div>
</div>
<div className="def-content transition-all duration-500">
<h3 className="font-sans text-sm font-semibold text-obsidian mb-1.5">
                    Discipline
                  </h3>
<p className="text-xs text-subtle leading-relaxed">
                    Respect for rules and self-control.
                  </p>
</div>
</div>
<div className="def-step group flex flex-col gap-4" data-index="3">
<div className="flex items-center gap-4">
<div className="def-num w-9 h-9 bg-white border border-border rounded flex items-center justify-center text-[10px] font-mono font-medium text-subtle shadow-sm transition-all duration-500 z-10">
                    04
                  </div>
<div className="h-px flex-1 bg-border/60 lg:hidden"></div>
</div>
<div className="def-content transition-all duration-500">
<h3 className="font-sans text-sm font-semibold text-obsidian mb-1.5">
                    Creativity
                  </h3>
<p className="text-xs text-subtle leading-relaxed">
                    Innovation in thought and action.
                  </p>
</div>
</div>
<div className="def-step group flex flex-col gap-4" data-index="4">
<div className="flex items-center gap-4">
<div className="def-num w-9 h-9 bg-white border border-border rounded flex items-center justify-center text-[10px] font-mono font-medium text-subtle shadow-sm transition-all duration-500 z-10">
                    05
                  </div>
<div className="h-px flex-1 bg-border/60 lg:hidden"></div>
</div>
<div className="def-content transition-all duration-500">
<h3 className="font-sans text-sm font-semibold text-obsidian mb-1.5">
                    Empathy
                  </h3>
<p className="text-xs text-subtle leading-relaxed">
                    Understanding and respecting others.
                  </p>
</div>
</div>
<div className="def-step group flex flex-col gap-4" data-index="5">
<div className="flex items-center gap-4">
<div className="def-num w-9 h-9 bg-white border border-border rounded flex items-center justify-center text-[10px] font-mono font-medium text-subtle shadow-sm transition-all duration-500 z-10">
                    06
                  </div>
<div className="h-px flex-1 bg-border/60 lg:hidden"></div>
</div>
<div className="def-content transition-all duration-500">
<h3 className="font-sans text-sm font-semibold text-obsidian mb-1.5">
                    Community
                  </h3>
<p className="text-xs text-subtle leading-relaxed">
                    Building a supportive family.
                  </p>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="py-32 bg-obsidian text-white relative overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<div className="relative w-full">
<div className="relative w-full" id="testimonial-container" style={{display: 'grid', gridTemplateAreas: '\'stack\''}}>

<div className="transition-all duration-700 ease-in-out opacity-100 flex flex-col justify-center" data-index="0" style={{gridArea: 'stack'}}>
<h2 className="text-3xl font-semibold tracking-tighter mb-8 leading-snug">
                      "Blooms Academy has truly transformed my daughter's
                      confidence. The blend of Nigerian values with British
                      academic standards is exactly what we needed."
                    </h2>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<div>
<div className="font-medium text-white">Mrs. Adebayo</div>
<div className="text-sm text-white/50">Parent, Year 5</div>
</div>
</div>
</div>

<div className="transition-all duration-700 ease-in-out opacity-0 pointer-events-none flex flex-col justify-center" data-index="1" style={{gridArea: 'stack'}}>
<h2 className="text-3xl font-semibold tracking-tighter mb-8 leading-snug">
                      "The facilities in Sunnyside are unmatched. My son's
                      interest in robotics started here, and now he is leading
                      the school's STEM club."
                    </h2>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<div>
<div className="font-medium text-white">Mr. Okonkwo</div>
<div className="text-sm text-white/50">Parent, Year 9</div>
</div>
</div>
</div>

<div className="transition-all duration-700 ease-in-out opacity-0 pointer-events-none flex flex-col justify-center" data-index="2" style={{gridArea: 'stack'}}>
<h2 className="text-3xl font-semibold tracking-tighter mb-8 leading-snug">
                      "Blooms prepared me for university life abroad. The rigor
                      of the IGCSE program here gave me a head start in my
                      engineering degree."
                    </h2>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon icon="solar:diploma-linear" width="24"></iconify-icon>
</div>
<div>
<div className="font-medium text-white">Chidi N.</div>
<div className="text-sm text-white/50">
                          Alumni, Class of 2020
                        </div>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3 mt-10">
<button className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed" id="testimonial-prev">
<iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
</button>
<button className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed" id="testimonial-next">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="flex flex-row md:flex-col justify-between gap-6 md:gap-0 md:space-y-12 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-16">
<div>
<div className="text-3xl font-bold mb-1 transition-all duration-300 ease-out transform" id="t-stat-val-0">
                  100%
                </div>
<div className="text-sm text-white/50 transition-opacity duration-300 ease-out" id="t-stat-lbl-0">
                  Pass Rate
                </div>
</div>
<div>
<div className="text-3xl font-bold mb-1 transition-all duration-300 ease-out transform" id="t-stat-val-1">
                  20+
                </div>
<div className="text-sm text-white/50 transition-opacity duration-300 ease-out" id="t-stat-lbl-1">
                  Years of Excellence
                </div>
</div>
<div>
<div className="text-3xl font-bold mb-1 transition-all duration-300 ease-out transform" id="t-stat-val-2">
                  15:1
                </div>
<div className="text-sm text-white/50 transition-opacity duration-300 ease-out" id="t-stat-lbl-2">
                  Student Ratio
                </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-20 border-b border-border">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-sans text-3xl md:text-4xl font-semibold text-obsidian tracking-tight mb-4">
              Academic Tiers
            </h2>
<p className="text-subtle text-base">
              Admission into Blooms Academy is competitive. Explore our school
              sections.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="pricing-grid">

<div className="pricing-card group relative p-8 rounded-xl border border-border bg-white flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-obsidian/30 focus:outline-none focus:ring-2 focus:ring-obsidian focus:ring-offset-2 pricing-transition" id="tier-early" role="button" tabindex="0">
<div className="absolute inset-0 rounded-xl bg-gradient-to-b from-obsidian/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="mb-4 relative z-10">
<span className="font-semibold text-obsidian transition-colors group-[.selected]:text-black">
                  Early Years
                </span>
</div>
<div className="mb-4 flex items-baseline gap-1 relative z-10">
<span className="text-3xl font-semibold text-obsidian">
                  Nursery
                </span>
</div>
<p className="text-sm text-subtle mb-8 leading-relaxed relative z-10">
                For children aged 18 months to 5 years. Montessori foundation.
              </p>
<ul className="space-y-4 mb-8 flex-1 relative z-10">
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  Play-based learning
                </li>
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  Phonics introduction
                </li>
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  Social skills
                </li>
</ul>
<button className="w-full py-3 rounded-lg border border-border text-xs font-semibold text-obsidian bg-white transition-all duration-300 ease-out hover:scale-[1.03] hover:border-obsidian hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] active:scale-[0.97] active:duration-100 relative z-10">
                View Requirements
              </button>
</div>

<div className="pricing-card group relative p-8 rounded-xl bg-obsidian text-white shadow-xl shadow-obsidian/20 flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-obsidian scale-[1.02] z-10 pricing-transition" id="tier-primary" role="button" tabindex="0">
<div className="mb-4">
<span className="font-semibold">Primary</span>
</div>
<div className="mb-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold">Years 1-6</span>
</div>
<p className="text-sm text-white/60 mb-8 leading-relaxed">
                Cambridge Primary Curriculum blended with Nigerian History and
                Values.
              </p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-white/80">
<span className="text-white">✓</span>
                  Core subjects mastery
                </li>
<li className="flex gap-3 text-sm text-white/80">
<span className="text-white">✓</span>
                  ICT &amp; Coding
                </li>
<li className="flex gap-3 text-sm text-white/80">
<span className="text-white">✓</span>
                  Checkpoint Exams
                </li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-obsidian text-xs font-semibold transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-[0.97] active:duration-100 relative z-10">
                Apply Now
              </button>
</div>

<div className="pricing-card group relative p-8 rounded-xl border border-border bg-white flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-obsidian/30 focus:outline-none focus:ring-2 focus:ring-obsidian focus:ring-offset-2 pricing-transition" id="tier-secondary" role="button" tabindex="0">
<div className="absolute inset-0 rounded-xl bg-gradient-to-b from-obsidian/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="mb-4 relative z-10">
<span className="font-semibold text-obsidian">Secondary</span>
</div>
<div className="mb-4 flex items-baseline gap-1 relative z-10">
<span className="text-3xl font-semibold text-obsidian">
                  College
                </span>
</div>
<p className="text-sm text-subtle mb-8 leading-relaxed relative z-10">
                Preparation for IGCSE, WAEC, and Global University Admissions.
              </p>
<ul className="space-y-4 mb-8 flex-1 relative z-10">
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  Science &amp; Arts pathways
                </li>
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  Leadership training
                </li>
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  University counseling
                </li>
</ul>
<button className="w-full py-3 rounded-lg border border-border text-xs font-semibold text-obsidian bg-white transition-all duration-300 ease-out hover:scale-[1.03] hover:border-obsidian hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] active:scale-[0.97] active:duration-100 relative z-10">
                View Prospectus
              </button>
</div>
</div>
</div>
</section>

<footer className="bg-white py-20 px-6 md:px-12 lg:px-20">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-xs space-y-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-obsidian rounded-sm flex items-center justify-center text-white">
<iconify-icon icon="solar:hat-graduation-linear" width="10"></iconify-icon>
</div>
<span className="font-bold text-sm tracking-tight text-obsidian">
                BLOOMS ACADEMY
              </span>
</div>
<p className="text-xs text-subtle leading-relaxed">
              Sunnyside, Abuja, Nigeria.
              <br/>
              Raising the next generation of global leaders through academic
              excellence.
            </p>
<div className="text-[10px] text-border">
              © 2024 Blooms Academy. All Rights Reserved.
            </div>
</div>
<div className="flex gap-16">
<div className="space-y-4">
<h4 className="text-xs font-bold text-obsidian">Academics</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><a className="hover:text-obsidian" href="#">Early Years</a></li>
<li><a className="hover:text-obsidian" href="#">Primary</a></li>
<li><a className="hover:text-obsidian" href="#">Secondary</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-bold text-obsidian">Admissions</h4>
<ul className="space-y-2 text-xs text-subtle">
<li>
<a className="hover:text-obsidian" href="#">How to Apply</a>
</li>
<li>
<a className="hover:text-obsidian" href="#">Tuition Fees</a>
</li>
<li>
<a className="hover:text-obsidian" href="#">Entrance Exams</a>
</li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-bold text-obsidian">Contact</h4>
<ul className="space-y-2 text-xs text-subtle">
<li>
<a className="hover:text-obsidian" href="#">Portal Login</a>
</li>
<li><a className="hover:text-obsidian" href="#">Instagram</a></li>
<li>
<a className="hover:text-obsidian" href="#">info@blooms.edu.ng</a>
</li>
</ul>
</div>
</div>
</div>
</footer>
</div>






    </>
  );
}
