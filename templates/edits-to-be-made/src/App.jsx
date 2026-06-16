import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
obsidian: '#111111',
canvas:   '#FAFAFA',
subtle:   '#555555',
border:   '#EAEAEA',
}
}
}
}



document.addEventListener('DOMContentLoaded', () => {
const cards = ['pricing-hobby', 'pricing-pro', 'pricing-ent'];
function updateState(selectedId) {
cards.forEach(id => {
const card = document.getElementById(id);
if (!card) return;
const isSelected = id === selectedId;
if (isSelected) {
// Selected: Scale up, Shadow, Full Opacity, Border Highlight
card.classList.add('scale-[1.02]', 'shadow-2xl', 'z-10', 'ring-1', 'ring-obsidian/5', 'opacity-100');
card.classList.remove('scale-[0.98]', 'opacity-60', 'hover:shadow-xl');
if (id !== 'pricing-pro') {
card.classList.add('border-obsidian');
card.classList.remove('border-border');
}
} else {
// Unselected: Scale down slightly, Dim, Remove Shadow
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
// Lift slightly on hover if unselected
if (card.classList.contains('opacity-60')) {
card.classList.remove('opacity-60');
card.classList.add('opacity-90');
}
});
card.addEventListener('mouseleave', () => {
// Revert if not selected
const isSelected = card.classList.contains('z-10');
if (!isSelected) {
card.classList.remove('opacity-90');
card.classList.add('opacity-60');
}
});
}
});
updateState('pricing-pro');
});



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



              (function(){
                function runCounter(){
                  var el=document.getElementById('ddf-pct');
                  if(!el)return;
                  var t0=Date.now(),dur=1000,end=94.7;
                  (function tick(){var p=Math.min((Date.now()-t0)/dur,1);el.textContent=(p*end).toFixed(1)+'%';if(p<1)requestAnimationFrame(tick);})();
                }
                function restartAnim(){
                  var svg=document.getElementById('ddf-svg');
                  if(!svg)return;
                  var clone=svg.cloneNode(true);
                  svg.parentNode.replaceChild(clone,svg);
                  setTimeout(runCounter,6000);
                  setTimeout(restartAnim,12000);
                }
                setTimeout(runCounter,6000);
                setTimeout(restartAnim,12000);
              })();
            


          (function(){const section=document.getElementById('decision-lifecycle');const header=document.getElementById('lifecycle-header');const line=document.getElementById('lifecycle-line');const steps=section.querySelectorAll('.lifecycle-step');function handleScroll(){if(!section)return;const rect=section.getBoundingClientRect();const viewH=window.innerHeight;const travelDistance=rect.height-viewH;const scrolled=-rect.top;let progress=scrolled/travelDistance;progress=Math.max(0,Math.min(1,progress));if(progress>0.02)header.style.opacity='1';else header.style.opacity='0';line.style.height=(progress*100)+'%';steps.forEach(step=>{const t=parseFloat(step.dataset.threshold);if(progress>=t){if(progress<t+0.15){step.classList.add('active');step.classList.replace('opacity-30','opacity-100');step.style.transform='scale(1.05)';}else{step.classList.add('active');step.classList.replace('opacity-30','opacity-50');step.style.transform='scale(1)';}}else{step.classList.remove('active');step.classList.replace('opacity-100','opacity-30');step.classList.replace('opacity-50','opacity-30');step.style.transform='scale(1)';}});};window.addEventListener('scroll',handleScroll,{passive:true});handleScroll();})();
        


              (function() {
                const grid = document.getElementById('def-grid');
                const line = document.getElementById('def-line-fill');
                const steps = grid.querySelectorAll('.def-step');

                // Initial state: subdue all
                steps.forEach(s => s.classList.add('def-inactive'));

                function activateStep(index) {
                  // Calculate line width (each step adds ~16.6%, plus a little to reach center)
                  // We want to connect previous to current.
                  // If index 0, width 0. If index 1, width to step 1.
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

                // Auto-play sequence on intersection
                const observer = new IntersectionObserver((entries) => {
                  if (entries[0].isIntersecting) {
                    let current = 0;
                    activateStep(0);

                    const interval = setInterval(() => {
                      current++;
                      if (current >= steps.length) {
                        clearInterval(interval);
                      } else {
                        activateStep(current);
                      }
                    }, 900);

                    observer.disconnect();
                  }
                }, { threshold: 0.5 });

                observer.observe(grid);

                // Hover overrides
                steps.forEach((step, i) => {
                  step.addEventListener('mouseenter', () => activateStep(i));
                });
              })();
            


      uniform float uTime;
      uniform float uDistortion;
      uniform float uSize;
      uniform vec2 uMouse;
      varying float vNoise;

      // Simplex Noise
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
      const uniforms = {
          uTime: { value: 0 },
          uDistortion: { value: 0.0 },
          uSize: { value: 1.8 },
          uColor: { value: new THREE.Color('#0F172A') },
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
              // Mobile/Tablet: Anchored higher and right
              objectGroup.position.set(4, 5, -8);
              objectGroup.scale.set(0.65, 0.65, 0.65);
          } else {
              // Desktop: Center and match size
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

      const sliderDistortion = document.getElementById('input-distortion');
      const sliderSize = document.getElementById('input-size');
      if(sliderDistortion) {
        sliderDistortion.addEventListener('input', (e) => {
            uniforms.uDistortion.value = parseFloat(e.target.value);
            document.getElementById('val-entropy').innerText = e.target.value;
        });
      }
      if(sliderSize) {
        sliderSize.addEventListener('input', (e) => {
            const val = parseFloat(e.target.value);
            uniforms.uSize.value = val * 1.5;
            document.getElementById('val-scale').innerText = val;
        });
      }
    


      (function() {
        const toggle = document.getElementById('price-toggle');
        const items = [
          { cardId: 'card-hobby', priceId: 'price-hobby', m: '$0', y: '$0' },
          { cardId: 'card-pro', priceId: 'price-pro', m: '$49', y: '$39' },
          { cardId: 'card-ent', priceId: 'price-ent', m: 'Custom', y: 'Custom' }
        ];
        if(toggle) {
            toggle.addEventListener('change', (e) => {
                const isYearly = e.target.checked;
                items.forEach(item => {
                    const el = document.getElementById(item.priceId);
                    if(el) {
                        el.innerText = isYearly ? item.y : item.m;
                    }
                });
            });
        }
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
<div className="flex items-center">
<img alt="Kompetenza" src="https://raw.githubusercontent.com/treya-kompetenza/logo/31421fe0ed9ce893ef03edbe63780c352f80a652/Kompetenza%20logo%20compressed.png" style={{height: '36px', width: 'auto'}}/>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#">
          Product
        </a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#">
          Solutions
        </a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#">
          Research
        </a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#">
          Company
        </a>
</nav>
<div className="flex items-center gap-5">
<button className="group relative isolate overflow-hidden bg-obsidian text-white text-xs font-semibold px-6 py-2.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.04] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.25)] hover:ring-white/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-obsidian/20 focus:ring-offset-1">
<div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent z-10"></div>
<span className="relative z-20">Contact Us</span>
</button>
</div>
</header>

<div className="z-10 flex flex-col w-full relative">

<section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-32 pb-20 gap-16">
<div className="max-w-2xl space-y-10 relative z-10">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-border/60 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="font-sans text-[11px] font-medium text-subtle tracking-tight">
                System v2.4 Available
              </span>
</div>
<h1 className="font-sans text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-obsidian leading-[0.95]">
              Decision
              <br/>
<span className="text-subtle">Traceability.</span>
</h1>
<p className="max-w-md font-sans text-base text-subtle leading-relaxed">
              The reasoning layer for the modern enterprise. Capture
              assumptions, map logic, and ensure every strategic decision is
              defensible.
            </p>
</div>
<div className="flex flex-wrap items-center gap-4">
<button className="group relative isolate overflow-hidden bg-obsidian text-white text-sm font-semibold px-8 py-3.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)] hover:ring-white/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-obsidian/20 focus:ring-offset-2 flex items-center gap-2">
<div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0 pointer-events-none"></div>
<span className="relative z-10">Request Demo</span>
<svg className="lucide lucide-arrow-right relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="relative w-full max-w-lg flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-canvas via-white to-canvas opacity-50 blur-3xl pointer-events-none"></div>
<div className="premium-card w-full p-6 relative overflow-hidden rounded-xl">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-obsidian to-transparent"></div>

<div className="flex justify-between items-center mb-4 border-b border-border/50 pb-4">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-border"></div>
<span className="text-[10px] uppercase tracking-widest font-semibold text-subtle" style={{fontFamily: 'monospace'}}>Deal Decision Flow</span>
</div>
<div className="w-12 h-1.5 rounded-full bg-border/60"></div>
</div>

<svg id="ddf-svg" viewbox="0 0 400 260" width="100%">
<defs>
<pattern height="20" id="ddflow-grid" patternunits="userSpaceOnUse" width="20">
<path d="M 20 0 L 0 0 0 20" fill="none" stroke="#F0F0F0" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#ddflow-grid)" height="260" width="400"></rect>
<style>
                .ddf-start,.ddf-start-label,.ddf-friction,.ddf-objections,.ddf-solution,.ddf-brs,.ddf-badge,.ddf-bottom,.ddf-exit,.ddf-end,.ddf-check,.ddf-end-label{opacity:0;}
                .ddf-start{animation:ddf-start-anim 0.8s ease-out 0s forwards;transform-box:fill-box;transform-origin:center;}
                @keyframes ddf-start-anim{0%{opacity:0;transform:scale(0.5);}100%{opacity:1;transform:scale(1);}}
                .ddf-start-label{animation:ddf-fadein 0.6s ease-out 0.3s forwards;}
                .ddf-friction{stroke-dasharray:160;stroke-dashoffset:160;stroke:#111;stroke-width:2.5;animation:ddf-friction-draw 1s ease-out 1s forwards,ddf-friction-fade 0.5s ease-out 3s forwards;}
                @keyframes ddf-friction-draw{0%{stroke-dashoffset:160;opacity:0;}1%{opacity:1;}100%{stroke-dashoffset:0;opacity:1;}}
                @keyframes ddf-friction-fade{0%{stroke:#111;stroke-width:2.5;opacity:1;}100%{stroke:#D0D0D0;stroke-width:1.5;opacity:0.5;}}
                .ddf-objections{transform-box:fill-box;transform-origin:center;animation:ddf-obj-in 0.6s ease-out 2s forwards,ddf-obj-dim 0.5s ease-out 3s forwards;}
                @keyframes ddf-obj-in{0%{opacity:0;transform:scale(0.85);}100%{opacity:1;transform:scale(1);}}
                @keyframes ddf-obj-dim{0%{opacity:1;}100%{opacity:0.22;}}
                .ddf-solution{stroke-dasharray:115;stroke-dashoffset:115;animation:ddf-path-draw-sol 1.5s ease-out 3.5s forwards;}
                @keyframes ddf-path-draw-sol{0%{stroke-dashoffset:115;opacity:0;}1%{opacity:1;}100%{stroke-dashoffset:0;opacity:1;}}
                .ddf-brs{transform-box:fill-box;transform-origin:center;animation:ddf-brs-in 0.7s ease-out 5s forwards;}
                @keyframes ddf-brs-in{0%{opacity:0;transform:scale(0.85);}100%{opacity:1;transform:scale(1);}}
                .ddf-badge{transform-box:fill-box;transform-origin:center;animation:ddf-badge-in 0.8s ease-out 6s forwards,ddf-badge-pulse 0.6s ease-out 9s forwards;}
                @keyframes ddf-badge-in{0%{opacity:0;transform:scale(0.6);}70%{opacity:1;transform:scale(1.08);}100%{opacity:1;transform:scale(1);}}
                @keyframes ddf-badge-pulse{0%{transform:scale(1);}50%{transform:scale(1.06);}100%{transform:scale(1);}}
                .ddf-bottom{animation:ddf-bottom-in 0.8s ease-out 7s forwards;}
                @keyframes ddf-bottom-in{0%{opacity:0;}100%{opacity:0.9;}}
                .ddf-exit{stroke-dasharray:100;stroke-dashoffset:100;animation:ddf-path-draw-exit 1s ease-out 8s forwards;}
                @keyframes ddf-path-draw-exit{0%{stroke-dashoffset:100;opacity:0;}1%{opacity:1;}100%{stroke-dashoffset:0;opacity:1;}}
                .ddf-end{transform-box:fill-box;transform-origin:center;animation:ddf-end-in 0.6s ease-out 8.8s forwards;}
                @keyframes ddf-end-in{0%{opacity:0;transform:scale(0.4);}70%{opacity:1;transform:scale(1.12);}100%{opacity:1;transform:scale(1);}}
                .ddf-check{stroke-dasharray:16;stroke-dashoffset:16;animation:ddf-check-in 0.4s linear 9.2s forwards;}
                @keyframes ddf-check-in{0%{stroke-dashoffset:16;opacity:0;}1%{opacity:1;}100%{stroke-dashoffset:0;opacity:1;}}
                .ddf-end-label{animation:ddf-fadein 0.5s ease-out 9s forwards;}
                @keyframes ddf-fadein{0%{opacity:0;}100%{opacity:1;}}
              </style>

<path d="M48,130 C92,130 95,69 140,69" fill="none" stroke="#EBEBEB" strokeWidth="1.5"></path>
<path d="M48,130 C92,130 95,151 140,151" fill="none" stroke="#EBEBEB" strokeWidth="1.5"></path>
<path d="M262,69 C300,69 325,110 352,130" fill="none" stroke="#EBEBEB" strokeWidth="1.5"></path>
<path d="M280,151 C316,151 335,138 352,130" fill="none" stroke="#EBEBEB" strokeWidth="1.5"></path>

<path className="ddf-friction" d="M48,130 C92,130 95,69 140,69" fill="none" strokeLinecap="round"></path>
<path className="ddf-solution" d="M48,130 C92,130 95,151 140,151" fill="none" stroke="#111" strokeLinecap="round" strokeWidth="2"></path>
<path className="ddf-exit" d="M280,151 C316,151 335,138 352,130" fill="none" stroke="#111" strokeLinecap="round" strokeWidth="2"></path>

<circle className="ddf-start" cx="48" cy="130" fill="#111" r="7"></circle>
<text className="ddf-start-label" fill="#555" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="8.5" font-weight="600" text-anchor="middle" x="48" y="152">SMB Prospect</text>

<g className="ddf-objections">
<text fill="#888" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="7" font-weight="700" letter-spacing="0.8" x="141" y="56">OBJECTIONS</text>
<rect fill="white" height="21" rx="4" stroke="#111" strokeWidth="1.5" width="122" x="140" y="59"></rect>
<text fill="#444" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="7.5" font-weight="500" text-anchor="middle" x="201" y="73.5">Upfront Cost · Timeline · AI Gaps</text>
</g>

<g className="ddf-brs">
<text fill="#3B82F6" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="7" font-weight="700" letter-spacing="0.5" x="141" y="137">BUSINESS-READY SALESFORCE</text>
<rect fill="white" height="21" rx="4" stroke="#3B82F6" strokeWidth="1.5" width="140" x="140" y="141"></rect>
<text fill="#444" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="7.5" font-weight="500" text-anchor="middle" x="210" y="155.5">$599/mo · AI Included · 2–5 Days</text>
</g>

<g className="ddf-badge">
<rect fill="#111" height="22" rx="3" width="120" x="144" y="96"></rect>
<text fill="white" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="9" font-weight="600" text-anchor="middle" x="204" y="111">Deal Confidence: <tspan id="ddf-pct">0.0%</tspan></text>
</g>

<g className="ddf-bottom">
<rect fill="white" height="16" rx="3" stroke="#999999" strokeWidth="0.8" width="84" x="140" y="185"></rect>
<text fill="#555555" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="7.5" text-anchor="middle" x="182" y="197">Risk Removed</text>
<rect fill="white" height="16" rx="3" stroke="#999999" strokeWidth="0.8" width="97" x="140" y="207"></rect>
<text fill="#555555" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="7.5" text-anchor="middle" x="188" y="219">Value Immediate</text>
</g>

<circle className="ddf-end" cx="352" cy="130" fill="#111" r="14"></circle>
<path className="ddf-check" d="M346 130l4.5 4.5 8-8" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<text className="ddf-end-label" fill="#111" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="8.5" font-weight="600" text-anchor="middle" x="352" y="157">Signed Contract</text>
</svg>

</div>
</div>
</section>

<section className="border-y border-border/60 py-16 bg-white">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
<p className="text-xs font-semibold text-obsidian whitespace-nowrap md:w-auto w-full text-center md:text-left">
            POWERING STRATEGY AT
          </p>
<div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-8 opacity-60 hover:opacity-100 transition-opacity duration-500">

<span className="font-sans text-lg font-bold text-obsidian tracking-tight">
              VERCEL
            </span>
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
<h2 className="font-sans text-2xl md:text-3xl font-semibold text-obsidian tracking-tight mb-3">
                Traceability Lifecycle
              </h2>
<p className="text-subtle text-sm max-w-md mx-auto">
                From initial context to immutable record.
              </p>
</div>
<div className="relative w-full max-w-2xl flex-1 flex flex-col justify-center my-auto">
<div className="absolute left-1/2 top-4 bottom-4 w-px bg-border/60 -translate-x-1/2"></div>
<div className="absolute left-1/2 top-4 w-px bg-obsidian -translate-x-1/2 transition-all duration-75 ease-linear h-0 max-h-[calc(100%-2rem)]" id="lifecycle-line"></div>
<div className="space-y-16 py-8 relative">
<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.1">
<div className="w-[42%] text-right pr-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      01 Context
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      Decision Trigger
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      The strategic question is posed.
                    </p>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<div className="bg-white border border-border p-3 rounded shadow-sm inline-block">
<div className="flex items-center gap-2">
<svg className="text-subtle" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
<path d="M12 17h.01"></path>
</svg>
<span className="text-xs font-medium text-obsidian">
                          Should we pivot to Enterprise?
                        </span>
</div>
</div>
</div>
</div>
<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.25">
<div className="w-[42%] text-right pr-8">
<div className="bg-white border border-border p-3 rounded shadow-sm inline-block text-left">
<span className="text-[10px] text-subtle block mb-1">
                        Assumption
                      </span>
<span className="text-xs font-medium text-obsidian">
                        PLG growth is plateauing
                      </span>
</div>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      02 Input
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      Core Assumptions
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      Stating beliefs explicitly.
                    </p>
</div>
</div>
<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.4">
<div className="w-[42%] text-right pr-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      03 Data
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      Evidence
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      Validating with metrics.
                    </p>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<div className="bg-white border border-border p-3 rounded shadow-sm inline-flex items-center gap-3">
<div className="w-8 h-8 bg-slate-50 rounded flex items-center justify-center border border-border/50">
<svg className="text-subtle" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="m19 9-5 5-4-4-3 3"></path>
</svg>
</div>
<div>
<div className="text-[10px] text-subtle">
                          Q3 Churn Analysis
                        </div>
<div className="text-xs font-bold text-obsidian">
                          Churn up 12%
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
                        High confidence that Enterprise LTV offsets CAC
                        increase.
                      </span>
</div>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      04 Logic
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      Reasoning
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      Connecting the dots.
                    </p>
</div>
</div>
<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.7">
<div className="w-[42%] text-right pr-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      05 Result
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      Outcome
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      The consensus reached.
                    </p>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-obsidian text-white text-xs font-semibold shadow-lg shadow-obsidian/20">
<span>Pivot Approved</span>
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</span>
</div>
</div>
<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.85">
<div className="w-[42%] text-right pr-8">
<span className="font-mono text-[10px] text-subtle bg-slate-100 px-2 py-1 rounded inline-block">
                      SHA: 8f2a...9c1
                    </span>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">
                      06 Audit
                    </span>
<h3 className="font-sans text-base font-semibold text-obsidian">
                      Immutable
                    </h3>
<p className="text-xs text-subtle mt-1 hidden md:block">
                      Permanently traceable.
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="py-24 px-6 md:px-12 lg:px-20 bg-white border-b border-border/60">
<div className="max-w-6xl mx-auto">

<div className="mb-16 max-w-2xl">
<h2 className="font-sans md:text-5xl text-3xl font-semibold text-obsidian tracking-tight mb-4 leading-tight">
               Enterprise-Grade Support -<br/>
<span className="text-subtle">Not Ticket-Based Help Desks</span>
</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

<article className="relative ring-1 ring-border sm:p-8 flex flex-col hover:-translate-y-0.5 transition-transform duration-200 bg-white rounded-3xl p-6 shadow-xl shadow-neutral-100 h-full">
<div className="flex items-center gap-3 mb-6">
<span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 text-emerald-700 text-xs font-semibold px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  Business-Ready Salesforce
                </span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-obsidian leading-tight mb-4">Dedicated Expert Team</h3>
<p className="text-subtle text-sm leading-relaxed mb-8 flex-1">
                Your own team of certified Salesforce architects who understand your business context, not just the software.
              </p>
<div className="flex flex-col gap-3">
<div className="inline-flex items-center gap-3 ring-1 ring-border/80 text-sm font-semibold text-obsidian bg-zinc-50 rounded-xl px-4 py-3">
<iconify-icon className="text-obsidian shrink-0 w-5 h-5" icon="solar:user-id-linear"></iconify-icon>
                    Dedicated Salesforce expert/team
                 </div>
<div className="inline-flex items-center gap-3 ring-1 ring-border/80 text-sm font-semibold text-obsidian bg-zinc-50 rounded-xl px-4 py-3">
<iconify-icon className="text-obsidian shrink-0 w-5 h-5" icon="solar:clock-circle-linear"></iconify-icon>
                    24–72 hour turnaround
                 </div>
<div className="inline-flex items-center gap-3 ring-1 ring-border/80 text-sm font-semibold text-obsidian bg-zinc-50 rounded-xl px-4 py-3">
<iconify-icon className="text-obsidian shrink-0 w-5 h-5" icon="solar:chat-round-line-linear"></iconify-icon>
                    Strategic advisory
                 </div>
<div className="inline-flex items-center gap-3 ring-1 ring-border/80 text-sm font-semibold text-obsidian bg-zinc-50 rounded-xl px-4 py-3">
<iconify-icon className="text-obsidian shrink-0 w-5 h-5" icon="solar:graph-up-linear"></iconify-icon>
                    Proactive optimisation
                 </div>
<div className="inline-flex items-center gap-3 ring-1 ring-border/80 text-sm font-semibold text-obsidian bg-zinc-50 rounded-xl px-4 py-3">
<iconify-icon className="text-obsidian shrink-0 w-5 h-5" icon="solar:shield-check-linear"></iconify-icon>
                    Enterprise-grade service model
                 </div>
</div>
</article>

<article className="relative ring-1 ring-border/60 sm:p-8 flex flex-col bg-neutral-50 rounded-3xl p-6 h-full">
<div className="flex items-center gap-3 mb-6">
<span className="inline-flex items-center gap-2 rounded-full bg-neutral-200 text-neutral-600 text-xs font-medium px-2.5 py-1 border border-neutral-300">
                  Typical CRM Support
                </span>
</div>
<h3 className="text-2xl font-medium tracking-tight text-neutral-700 leading-tight mb-4">Standard Ticketing</h3>
<p className="text-neutral-600 text-sm leading-relaxed mb-8 flex-1">
                The industry standard reactive model where context is lost between tickets and agents.
              </p>
<div className="flex flex-col gap-3">
<div className="inline-flex items-center gap-3 ring-1 ring-neutral-300 text-sm text-neutral-600 bg-white rounded-xl px-4 py-3">
<iconify-icon className="shrink-0 w-5 h-5 text-neutral-500" icon="solar:ticket-linear"></iconify-icon>
                    Generic ticket-based support
                 </div>
<div className="inline-flex items-center gap-3 ring-1 ring-neutral-300 text-sm text-neutral-600 bg-white rounded-xl px-4 py-3">
<iconify-icon className="shrink-0 w-5 h-5 text-neutral-500" icon="solar:calendar-date-linear"></iconify-icon>
                    Multi-day response times
                 </div>
<div className="inline-flex items-center gap-3 ring-1 ring-neutral-300 text-sm text-neutral-600 bg-white rounded-xl px-4 py-3">
<iconify-icon className="shrink-0 w-5 h-5 text-neutral-500" icon="solar:question-circle-linear"></iconify-icon>
                    Basic troubleshooting
                 </div>
<div className="inline-flex items-center gap-3 ring-1 ring-neutral-300 text-sm text-neutral-600 bg-white rounded-xl px-4 py-3">
<iconify-icon className="shrink-0 w-5 h-5 text-neutral-500" icon="solar:bell-linear"></iconify-icon>
                    Reactive only
                 </div>
<div className="inline-flex items-center gap-3 ring-1 ring-neutral-300 text-sm text-neutral-600 bg-white rounded-xl px-4 py-3">
<iconify-icon className="shrink-0 w-5 h-5 text-neutral-500" icon="solar:forbidden-circle-linear"></iconify-icon>
                    Limited support tiers
                 </div>
</div>
</article>
</div>

<div className="mt-12 text-center md:text-left">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-obsidian text-white shadow-lg shadow-obsidian/20 text-xs font-semibold tracking-wide">
<iconify-icon height="14" icon="solar:stars-linear" width="14"></iconify-icon>
               This is white-glove managed service. Not a helpdesk.
             </div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-20 bg-canvas border-b border-border/60">
<div className="max-w-6xl mx-auto flex flex-col gap-10">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-1">
<div className="max-w-2xl">
<h2 className="font-sans md:text-5xl text-3xl font-semibold text-obsidian tracking-tight mb-4 leading-tight">
                        Quick Start Implementation -
                        <span className="text-subtle">Included Free</span>
</h2>
<p className="leading-relaxed text-base font-normal text-subtle">
                        Most Salesforce partners charge $10,000+ for implementation. With Business-Ready Salesforce, it's included at no extra cost.
                    </p>
<div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-border shadow-sm text-xs font-semibold text-obsidian">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        $0 Implementation Fee -What other partners charge $10,000+ for, we include free.
                    </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden shadow-sm bg-border rounded-[2rem] gap-px border border-border">

<div className="group hover:bg-white/50 transition-colors flex flex-col min-h-[340px] bg-white h-full p-8 relative justify-between">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3 text-subtle">
<iconify-icon height="24" icon="solar:database-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-obsidian mb-2 tracking-tight">Data Migration</h3>
<ul className="text-sm text-subtle font-medium leading-relaxed font-normal space-y-1 mt-2 list-disc list-inside">
<li>Accounts, Contacts, Leads</li>
<li>Historical CRM imports</li>
<li>Data cleaning &amp; structuring</li>
</ul>
</div>

<div className="flex flex-col flex-grow mt-8 pt-4 pb-4 relative items-center justify-center">
<div className="relative w-32 h-20 flex items-center justify-center">

<div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-10 border border-border bg-canvas rounded flex items-center justify-center shadow-sm z-10">
<div className="w-4 h-0.5 bg-subtle/30"></div>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-border/60"></div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 border border-border bg-obsidian rounded flex items-center justify-center shadow-sm z-10 text-white">
<iconify-icon height="16" icon="solar:server-linear" width="16"></iconify-icon>
</div>

<div className="absolute left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-obsidian rounded-full animate-[shimmer_1.5s_infinite]"></div>
</div>
</div>
</div>

<div className="group relative bg-white hover:bg-white/50 transition-colors p-8 flex flex-col justify-between h-full min-h-[340px] md:col-span-2 overflow-hidden">
<div className="relative z-10 max-w-md">
<div className="flex items-center gap-2 mb-3 text-subtle">
<iconify-icon height="24" icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-obsidian mb-2 tracking-tight">Analytics &amp; Dashboards</h3>
<p className="text-sm text-subtle font-medium leading-relaxed font-normal">
                            Executive dashboard, Pipeline visibility, Forecast dashboards, KPI reporting, and Revenue tracking.
                        </p>
</div>

<div className="absolute right-0 bottom-0 top-0 w-full md:w-2/3 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

<div className="absolute top-[20%] right-12 w-48 h-32 bg-white border border-border rounded-xl shadow-lg rotate-6 flex flex-col p-4 group-hover:rotate-3 group-hover:scale-105 transition-all duration-700 ease-out z-0">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-obsidian" height="20" icon="solar:graph-new-linear" width="20"></iconify-icon>
<span className="text-xs font-bold text-obsidian">Revenue Forecast</span>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-border/30 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-obsidian rounded-full"></div>
</div>
<div className="h-1.5 w-full bg-border/30 rounded-full overflow-hidden">
<div className="h-full w-1/2 bg-subtle/50 rounded-full"></div>
</div>
</div>
<div className="mt-auto flex justify-between items-end">
<span className="text-[10px] text-subtle font-medium">Q4 Growth</span>
<span className="text-sm font-bold text-obsidian">+24%</span>
</div>
</div>

<div className="absolute bottom-[15%] right-32 w-16 h-16 bg-white border border-border rounded-2xl shadow-md -rotate-12 flex items-center justify-center group-hover:-rotate-6 group-hover:translate-y-2 transition-all duration-700 delay-100 z-20">
<iconify-icon className="text-subtle" height="32" icon="solar:pie-chart-linear" width="32"></iconify-icon>
</div>
</div>
</div>

<div className="group relative bg-white hover:bg-white/50 transition-colors p-8 flex flex-col justify-between h-full min-h-[340px]">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3 text-subtle">
<iconify-icon height="24" icon="solar:shield-user-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-obsidian mb-2 tracking-tight">User Setup &amp; Security</h3>
<ul className="text-sm text-subtle font-medium leading-relaxed font-normal space-y-1 mt-2 list-disc list-inside">
<li>User profiles</li>
<li>Roles &amp; permissions</li>
<li>Access configuration</li>
</ul>
</div>

<div className="flex flex-col flex-grow mt-8 pt-4 pb-4 relative items-center justify-center">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-subtle relative z-30">JD</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-subtle relative z-20">AS</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-xs font-bold text-subtle relative z-10">MR</div>
</div>
<div className="mt-4 flex items-center gap-1.5 bg-white border border-border px-2 py-1 rounded-full shadow-sm">
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
<span className="text-[9px] font-bold text-subtle uppercase tracking-wide">Secure</span>
</div>
</div>
</div>

<div className="group relative bg-white hover:bg-white/50 transition-colors p-8 flex flex-col justify-between h-full min-h-[340px]">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3 text-subtle">
<iconify-icon height="24" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-obsidian mb-2 tracking-tight">Workflow Automation</h3>
<ul className="text-sm text-subtle font-medium leading-relaxed font-normal space-y-1 mt-2 list-disc list-inside">
<li>Lead routing</li>
<li>Task automation</li>
<li>Email triggers</li>
</ul>
</div>

<div className="mt-8 flex items-center justify-center py-4 relative flex-grow">
<div className="group-hover:opacity-100 transition-opacity opacity-60 w-32 h-32 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-obsidian rounded-full flex items-center justify-center z-10 shadow-lg text-white">
<iconify-icon height="16" icon="solar:settings-linear" width="16"></iconify-icon>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border border-border shadow-sm rounded-full"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border border-border shadow-sm rounded-full"></div>
<div className="absolute top-1/2 left-0 -translate-y-1/2 w-6 h-6 bg-white border border-border shadow-sm rounded-full"></div>
<div className="absolute top-1/2 right-0 -translate-y-1/2 w-6 h-6 bg-white border border-border shadow-sm rounded-full"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none text-border" style={{zIndex: '0'}}>
<line stroke="currentColor" strokeWidth="1.5" x1="64" x2="64" y1="64" y2="12"></line>
<line stroke="currentColor" strokeWidth="1.5" x1="64" x2="64" y1="64" y2="116"></line>
<line stroke="currentColor" strokeWidth="1.5" x1="64" x2="12" y1="64" y2="64"></line>
<line stroke="currentColor" strokeWidth="1.5" x1="64" x2="116" y1="64" y2="64"></line>
</svg>
</div>
</div>
</div>

<div className="group hover:bg-white/50 transition-colors flex flex-col min-h-[340px] bg-white h-full p-8 relative justify-between">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3 text-subtle">
<iconify-icon height="24" icon="solar:sort-from-top-to-bottom-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-obsidian mb-2 tracking-tight">Structured Sales Pipeline</h3>
<ul className="text-sm text-subtle font-medium leading-relaxed font-normal space-y-1 mt-2 list-disc list-inside">
<li>Multi-stage opportunity framework</li>
<li>Deal progression logic</li>
<li>Activity tracking</li>
</ul>
</div>

<div className="mt-8 flex flex-col gap-2 items-center justify-center relative flex-grow w-full max-w-[180px] mx-auto opacity-70 group-hover:opacity-100 transition-opacity">
<div className="w-full h-8 border border-border bg-white rounded flex items-center px-3 gap-2 shadow-sm">
<div className="w-2 h-2 rounded-full bg-border"></div>
<div className="h-1.5 w-1/2 bg-border/50 rounded"></div>
</div>
<div className="w-full h-8 border border-border bg-white rounded flex items-center px-3 gap-2 shadow-sm ml-2">
<div className="w-2 h-2 rounded-full bg-subtle"></div>
<div className="h-1.5 w-2/3 bg-subtle/30 rounded"></div>
</div>
<div className="w-full h-8 border border-border bg-white rounded flex items-center px-3 gap-2 shadow-sm ml-4 border-obsidian/20">
<div className="w-2 h-2 rounded-full bg-obsidian"></div>
<div className="h-1.5 w-3/4 bg-obsidian/20 rounded"></div>
</div>
</div>
</div>
</div>
<p className="text-center text-sm text-subtle mt-4">
                No Quick Start fee. No implementation invoice. No upfront shock. Everything configured and live within 14 days.
            </p>
</div>
</section>
<section className="py-32 px-6 md:px-12 lg:px-20">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-xl">
<h2 className="font-sans text-4xl md:text-5xl font-semibold text-obsidian tracking-tight mb-6 leading-[1.1]">
                Structured reasoning.
                <span className="text-subtle block">Not just data points.</span>
</h2>
<p className="text-subtle text-lg leading-relaxed">
                Bridge the gap between raw analytics and executive decisions
                with a platform designed for defensibility.
              </p>
</div>
<a className="pb-1 border-b border-obsidian text-sm font-medium hover:opacity-70 transition-opacity mb-2" href="#">
              Explore Platform Features
            </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 p-10 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="max-w-md">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
<svg className="lucide lucide-git-branch" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="6" x2="6" y1="3" y2="15"></line>
<circle cx="18" cy="6" r="3"></circle>
<circle cx="6" cy="18" r="3"></circle>
<path d="M18 9a9 9 0 0 1-9 9"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold text-obsidian mb-3">
                      Decision Lineage
                    </h3>
<p className="text-subtle leading-relaxed">
                      Traverse the reasoning graph from outcome to assumption.
                      Every node is traceable.
                    </p>
</div>
<div className="hidden lg:block">
<div className="px-3 py-1 bg-canvas border border-border rounded text-[10px] font-mono text-subtle uppercase tracking-wider group-hover:text-obsidian group-hover:border-obsidian/30 transition-colors">
                      Live Trace
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
<text className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300" text-anchor="middle" x="20" y="70">
                        INPUT
                      </text>
</g>
<g className="transition-all duration-500 delay-[400ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
<circle cx="200" cy="20" fill="#fff" r="4" stroke="#111" strokeWidth="1.5"></circle>
<text className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300" text-anchor="middle" x="200" y="40">
                        LOGIC A
                      </text>
</g>
<g className="transition-all duration-500 delay-[800ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
<circle cx="380" cy="80" fill="#fff" r="4" stroke="#111" strokeWidth="1.5"></circle>
<text className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300" text-anchor="middle" x="380" y="100">
                        LOGIC B
                      </text>
</g>
<g className="transition-all duration-500 delay-[1200ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
<circle cx="560" cy="50" fill="#111" r="4"></circle>
<text className="text-[8px] font-mono fill-obsidian font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300" text-anchor="middle" x="560" y="70">
                        RESULT
                      </text>
</g>
</svg>
</div>
</div>
</div>

<div className="md:col-span-4 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500 flex flex-col">
<div className="p-10 relative z-10 flex flex-col h-full">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
<svg className="lucide lucide-history" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 12"></path>
<path d="M3 3v9h9"></path>
<path d="M12 7v5l4 2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-obsidian mb-3">
                  Immutable Audit
                </h3>
<p className="text-sm text-subtle leading-relaxed mb-8">
                  Time-travel through your strategy. Inspect past states with
                  zero ambiguity.
                </p>

<div className="mt-auto relative w-full h-32 flex flex-col justify-end items-center">

<div className="absolute w-[80%] h-12 bg-border/30 border border-border rounded-t-md top-4 scale-90 opacity-0 group-hover:opacity-100 group-hover:top-0 transition-all duration-500 ease-out"></div>
<div className="absolute w-[90%] h-12 bg-canvas border border-border rounded-t-md top-8 scale-95 opacity-50 group-hover:opacity-80 group-hover:top-6 transition-all duration-500 ease-out delay-75"></div>

<div className="relative w-full h-16 bg-white border border-border rounded shadow-sm flex items-center px-4 gap-4 z-10 transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:shadow-md">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] font-bold text-obsidian uppercase tracking-wide">
                          Current State
                        </span>
<span className="text-[10px] font-mono text-subtle">
                          v2.4.1
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
<svg className="lucide lucide-file-text" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<line x1="10" x2="8" y1="9" y2="9"></line>
</svg>
</div>
<h3 className="text-xl font-semibold text-obsidian mb-2">
                    Automated Synthesis
                  </h3>
<p className="text-subtle leading-relaxed">
                    Turn complex graph data into plain-language briefing
                    documents automatically. Maintain a single source of truth.
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
<svg className="text-subtle group-hover:text-obsidian transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 12"></path>
<path d="M3 3v9h9"></path>
</svg>
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

<section className="py-24 px-6 md:px-12 lg:px-20 bg-canvas border-b border-border/60">
<div className="max-w-4xl mx-auto text-center mb-16">
<h2 className="font-sans text-3xl md:text-4xl font-semibold text-obsidian tracking-tight mb-4">
            AI-First From Day One -<span className="text-subtle">Not Phase Three</span>
</h2>
<p className="text-subtle text-base max-w-2xl mx-auto leading-relaxed">
            Every BRS subscription includes a dedicated AI Agent. Choose the one that fits your business:
          </p>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="md:col-span-1">
<div className="h-full sm:p-7 shadow-[0_2px_0_rgba(0,0,0,0.03),0_12px_24px_-12px_rgba(0,0,0,0.25)] ring-1 ring-obsidian/5 bg-white rounded-3xl p-6 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-obsidian text-white grid place-items-center shadow">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-obsidian">AI Sales Agent</h3>
<p className="text-sm text-subtle">Automated prospecting &amp; pipeline generation.</p>
</div>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-obsidian text-white px-4 py-2 text-sm font-medium hover:bg-black transition shadow-sm">
<iconify-icon height="16" icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
                    Generate
                  </button>
</div>
<div className="rounded-2xl ring-1 ring-obsidian/5 bg-canvas mb-6">
<div className="flex items-center gap-2 px-3 py-2 border-b border-obsidian/5">
<div className="h-4 w-4 rounded-full bg-border"></div>
<div className="h-4 w-24 rounded bg-border/50"></div>
</div>
<div className="p-4">
<div className="rounded-xl bg-white ring-1 ring-obsidian/5 shadow-sm p-4">
<p className="text-sm text-obsidian mb-2 font-medium">Subject: Re: Salesforce Implementation</p>
<p className="text-xs text-subtle leading-relaxed">
                        Hi Alex, saw you're scaling the sales team. Based on your recent growth, I drafted a plan to automate your outbound...
                      </p>
</div>
</div>
</div>
</div>

<div className="mt-auto">
<div className="rounded-2xl ring-1 ring-obsidian/5 bg-canvas p-4">
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
<li className="flex items-center gap-2 text-xs text-subtle font-medium">
<iconify-icon className="text-obsidian shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                          Automated outbound prospecting
                       </li>
<li className="flex items-center gap-2 text-xs text-subtle font-medium">
<iconify-icon className="text-obsidian shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                          Meeting booking
                       </li>
<li className="flex items-center gap-2 text-xs text-subtle font-medium">
<iconify-icon className="text-obsidian shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                          AI-driven lead nurturing
                       </li>
<li className="flex items-center gap-2 text-xs text-subtle font-medium">
<iconify-icon className="text-obsidian shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                          Pipeline generation
                       </li>
<li className="flex items-center gap-2 text-xs text-subtle font-medium">
<iconify-icon className="text-obsidian shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                          Follow-up automation
                       </li>
<li className="flex items-center gap-2 text-xs text-subtle font-medium">
<iconify-icon className="text-obsidian shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                          Smart qualification logic
                       </li>
</ul>
</div>
</div>
</div>
</div>

<div className="md:col-span-1">
<div className="h-full sm:p-7 shadow-[0_2px_0_rgba(0,0,0,0.03),0_12px_24px_-12px_rgba(0,0,0,0.25)] ring-1 ring-obsidian/5 bg-white rounded-3xl p-6 flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-full bg-obsidian text-white grid place-items-center shadow">
<iconify-icon height="20" icon="solar:chat-round-call-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-obsidian">AI Support Agent</h3>
<p className="text-sm text-subtle">Intelligent case handling &amp; resolution.</p>
</div>
</div>
<div className="rounded-2xl bg-canvas ring-1 ring-obsidian/5 p-4 mb-6">
<div className="relative">
<input className="w-full rounded-full border-0 bg-white px-5 py-3 pr-24 text-sm text-obsidian shadow-sm ring-1 ring-obsidian/5 placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-obsidian/10 pointer-events-none" placeholder="Checking ticket status #492..." type="text"/>
<button className="absolute right-1 top-1.5 inline-flex items-center gap-2 rounded-full bg-obsidian px-4 py-2 text-xs font-medium text-white shadow-sm">
<iconify-icon height="14" icon="solar:plain-linear" width="14"></iconify-icon>
                      Reply
                    </button>
</div>
<div className="mt-3 flex gap-2 justify-end">
<div className="bg-white border border-border px-3 py-2 rounded-tl-xl rounded-tr-xl rounded-bl-xl shadow-sm max-w-[80%]">
<p className="text-xs text-subtle">Ticket resolved via SLA workflow. Escalation avoided.</p>
</div>
</div>
</div>
</div>

<div className="mt-auto">
<div className="rounded-2xl ring-1 ring-obsidian/5 bg-canvas p-4">
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
<li className="flex items-center gap-2 text-xs text-subtle font-medium">
<iconify-icon className="text-obsidian shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                          Automated case handling
                       </li>
<li className="flex items-center gap-2 text-xs text-subtle font-medium">
<iconify-icon className="text-obsidian shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                          Support workflow automation
                       </li>
<li className="flex items-center gap-2 text-xs text-subtle font-medium">
<iconify-icon className="text-obsidian shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                          Customer query responses
                       </li>
<li className="flex items-center gap-2 text-xs text-subtle font-medium">
<iconify-icon className="text-obsidian shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                          SLA tracking &amp; reporting
                       </li>
<li className="flex items-center gap-2 text-xs text-subtle font-medium">
<iconify-icon className="text-obsidian shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                          Intelligent escalation routing
                       </li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-sm font-medium text-obsidian bg-white border border-border px-5 py-2.5 rounded-full inline-block shadow-sm">
                Not selling "future AI." This is AI-first Salesforce from Day One.
            </p>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-20 border-b border-border/60 bg-canvas">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
<div className="max-w-2xl">
<h2 className="font-sans text-3xl font-semibold text-obsidian tracking-tight mb-4">
                How a Decision Becomes Defensible
              </h2>
<p className="font-sans text-subtle text-base leading-relaxed">
                Oravia preserves reasoning from first assumption to final
                outcome, ensuring every strategic choice is traceable and
                auditable.
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
                    Decision Context
                  </h3>
<p className="text-xs text-subtle leading-relaxed">
                    The business or product question being evaluated.
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
                    Assumptions Captured
                  </h3>
<p className="text-xs text-subtle leading-relaxed">
                    Explicit assumptions recorded intentionally, not implied.
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
                    Evidence Linked
                  </h3>
<p className="text-xs text-subtle leading-relaxed">
                    Data, analysis, and references attached as inputs.
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
                    Reasoning Structured
                  </h3>
<p className="text-xs text-subtle leading-relaxed">
                    Logical connections formed between assumptions, evidence,
                    and conclusions.
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
                    Outcome Produced
                  </h3>
<p className="text-xs text-subtle leading-relaxed">
                    A decision generated with clear justification.
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
                    Versioned &amp; Preserved
                  </h3>
<p className="text-xs text-subtle leading-relaxed">
                    The full reasoning chain is saved, diffable, and reviewable
                    over time.
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
<h2 className="text-4xl font-semibold tracking-tighter mb-8">
                      "Oravia transforms how we justify capital allocation. It’s
                      no longer about who has the loudest voice, but who has the
                      strongest lineage."
                    </h2>
<div className="flex items-center gap-4">
<img alt="Marcus Alvarez" className="w-12 h-12 rounded-full object-cover border border-white/10 shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
<div>
<div className="font-medium text-white">Marcus Alvarez</div>
<div className="text-sm text-white/50">
                          Lead Analyst, Stripe
                        </div>
</div>
</div>
</div>

<div className="transition-all duration-700 ease-in-out opacity-0 pointer-events-none flex flex-col justify-center" data-index="1" style={{gridArea: 'stack'}}>
<h2 className="text-4xl font-semibold tracking-tighter mb-8">
                      "The ability to audit our decision logic three quarters
                      later is invaluable. It brings a level of rigor to product
                      strategy that didn't exist before."
                    </h2>
<div className="flex items-center gap-4">
<img alt="Sarah Chen" className="w-12 h-12 rounded-full object-cover border border-white/10 shadow-sm" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
<div>
<div className="font-medium text-white">Sarah Chen</div>
<div className="text-sm text-white/50">
                          VP of Product, Vercel
                        </div>
</div>
</div>
</div>

<div className="transition-all duration-700 ease-in-out opacity-0 pointer-events-none flex flex-col justify-center" data-index="2" style={{gridArea: 'stack'}}>
<h2 className="text-4xl font-semibold tracking-tighter mb-8">
                      "We moved from opinion-based planning to evidence-backed
                      execution. Oravia has become the absolute backbone of our
                      strategic integrity."
                    </h2>
<div className="flex items-center gap-4">
<img alt="David Ross" className="w-12 h-12 rounded-full object-cover border border-white/10 shadow-sm" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
<div>
<div className="font-medium text-white">David Ross</div>
<div className="text-sm text-white/50">COO, Linear</div>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3 mt-10">
<button aria-label="Previous testimonial" className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed" id="testimonial-prev">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12H5"></path>
<path d="M12 19l-7-7 7-7"></path>
</svg>
</button>
<button aria-label="Next testimonial" className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed" id="testimonial-next">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div>
<div className="flex flex-row md:flex-col justify-between gap-6 md:gap-0 md:space-y-12 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-16">
<div>
<div className="text-3xl font-bold mb-1 transition-all duration-300 ease-out transform" id="t-stat-val-0">
                  5x
                </div>
<div className="text-sm text-white/50 transition-opacity duration-300 ease-out" id="t-stat-lbl-0">
                  Faster Consensus
                </div>
</div>
<div>
<div className="text-3xl font-bold mb-1 transition-all duration-300 ease-out transform" id="t-stat-val-1">
                  100%
                </div>
<div className="text-sm text-white/50 transition-opacity duration-300 ease-out" id="t-stat-lbl-1">
                  Audit Coverage
                </div>
</div>
<div>
<div className="text-3xl font-bold mb-1 transition-all duration-300 ease-out transform" id="t-stat-val-2">
                  Zero
                </div>
<div className="text-sm text-white/50 transition-opacity duration-300 ease-out" id="t-stat-lbl-2">
                  Ambiguity
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
              Transparent Pricing
            </h2>
<p className="text-subtle text-base">
              Start tracing decisions today. Scale as your reasoning grows.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="pricing-grid">

<div className="pricing-card group relative p-8 rounded-xl border border-border bg-white flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-obsidian/30 focus:outline-none focus:ring-2 focus:ring-obsidian focus:ring-offset-2 pricing-transition" id="pricing-hobby" role="button" tabindex="0">

<div className="absolute inset-0 rounded-xl bg-gradient-to-b from-obsidian/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="mb-4 relative z-10">
<span className="font-semibold text-obsidian transition-colors group-[.selected]:text-black">
                  Individual
                </span>
</div>
<div className="mb-4 flex items-baseline gap-1 relative z-10">
<span className="text-3xl font-semibold text-obsidian">$49</span>
<span className="text-sm text-subtle">/mo</span>
</div>
<p className="text-sm text-subtle mb-8 leading-relaxed relative z-10">
                For solo analysts, product owners, or researchers exploring
                decision traceability.
              </p>
<ul className="space-y-4 mb-8 flex-1 relative z-10">
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  Personal decision graph
                </li>
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  Limited to 5 active projects
                </li>
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  Standard export
                </li>
</ul>
<button className="w-full py-3 rounded-lg border border-border text-xs font-semibold text-obsidian bg-white transition-all duration-300 ease-out hover:scale-[1.03] hover:border-obsidian hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] active:scale-[0.97] active:duration-100 relative z-10">
                Contact Sales
              </button>
</div>

<div className="pricing-card group relative p-8 rounded-xl bg-obsidian text-white shadow-xl shadow-obsidian/20 flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-obsidian scale-[1.02] z-10 pricing-transition" id="pricing-pro" role="button" tabindex="0">
<div className="mb-4">
<span className="font-semibold">Team</span>
</div>
<div className="mb-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold">Contact Sales</span>
</div>
<p className="text-sm text-white/60 mb-8 leading-relaxed">
                For teams formalizing shared decisions, reviews, and internal
                accountability.
              </p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-white/80">
<span className="text-white">✓</span>
                  Shared decision history
                </li>
<li className="flex gap-3 text-sm text-white/80">
<span className="text-white">✓</span>
                  Review &amp; approval workflows
                </li>
<li className="flex gap-3 text-sm text-white/80">
<span className="text-white">✓</span>
                  Organizational continuity
                </li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-obsidian text-xs font-semibold transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-[0.97] active:duration-100 relative z-10">
                Contact Sales
              </button>
</div>

<div className="pricing-card group relative p-8 rounded-xl border border-border bg-white flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-obsidian/30 focus:outline-none focus:ring-2 focus:ring-obsidian focus:ring-offset-2 pricing-transition" id="pricing-ent" role="button" tabindex="0">

<div className="absolute inset-0 rounded-xl bg-gradient-to-b from-obsidian/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="mb-4 relative z-10">
<span className="font-semibold text-obsidian">Enterprise</span>
</div>
<div className="mb-4 flex items-baseline gap-1 relative z-10">
<span className="text-3xl font-semibold text-obsidian">
                  Contact Sales
                </span>
</div>
<p className="text-sm text-subtle mb-8 leading-relaxed relative z-10">
                For organizations using Oravia as a decision system of record.
              </p>
<ul className="space-y-4 mb-8 flex-1 relative z-10">
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  Governance &amp; audit trails
                </li>
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  Immutable versioning
                </li>
<li className="flex gap-3 text-sm text-subtle">
<span className="text-obsidian">✓</span>
                  Long-term retention
                </li>
</ul>
<button className="w-full py-3 rounded-lg border border-border text-xs font-semibold text-obsidian bg-white transition-all duration-300 ease-out hover:scale-[1.03] hover:border-obsidian hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] active:scale-[0.97] active:duration-100 relative z-10">
                Contact Sales
              </button>
</div>
</div>
</div>
</section>

<footer className="bg-white py-20 px-6 md:px-12 lg:px-20">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-xs space-y-6">
<div className="flex items-center">
<img alt="Kompetenza" src="https://raw.githubusercontent.com/treya-kompetenza/logo/31421fe0ed9ce893ef03edbe63780c352f80a652/Kompetenza%20logo%20compressed.png" style={{height: '32px', width: 'auto'}}/>
</div>
<p className="text-xs text-subtle leading-relaxed">
              Designed for the rigorous demands of modern enterprise strategy.
              San Francisco, CA.
            </p>
<div className="text-[10px] text-border">
              © 2024 Oravia Systems Inc.
            </div>
</div>
<div className="flex gap-16">
<div className="space-y-4">
<h4 className="text-xs font-bold text-obsidian">Platform</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><a className="hover:text-obsidian" href="#">Features</a></li>
<li><a className="hover:text-obsidian" href="#">Security</a></li>
<li><a className="hover:text-obsidian" href="#">Enterprise</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-bold text-obsidian">Company</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><a className="hover:text-obsidian" href="#">About</a></li>
<li><a className="hover:text-obsidian" href="#">Careers</a></li>
<li><a className="hover:text-obsidian" href="#">Contact</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-bold text-obsidian">Connect</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><a className="hover:text-obsidian" href="#">Twitter</a></li>
<li><a className="hover:text-obsidian" href="#">LinkedIn</a></li>
<li><a className="hover:text-obsidian" href="#">GitHub</a></li>
</ul>
</div>
</div>
</div>
</footer>
</div>






    </>
  );
}
