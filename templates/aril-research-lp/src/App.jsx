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
mono: ['"JetBrains Mono"', 'monospace'],
},
colors: {
canvas: '#FAFAFA',
surface: '#FFFFFF',
obsidian: '#111111',
subtle: '#737373',
border: '#E5E5E5',
primary: '#000000',
},
letterSpacing: {
tight: '-0.02em',
tighter: '-0.04em',
}
}
}
}



          (function(){
            const section=document.getElementById('prepare-lifecycle');
            const line=document.getElementById('lifecycle-line');
            const steps=section.querySelectorAll('.lifecycle-step');
            function handleScroll(){
                if(!section)return;
                const rect=section.getBoundingClientRect();
                const viewH=window.innerHeight;
                const travelDistance=rect.height-viewH;
                const scrolled=-rect.top;
                let progress=scrolled/travelDistance;
                progress=Math.max(0,Math.min(1,progress));
                
                line.style.height=(progress*100)+'%';
                
                steps.forEach(step=>{
                    const t=parseFloat(step.dataset.threshold);
                    if(progress>=t){
                        if(progress<t+0.2){
                            step.classList.add('active');
                            step.classList.replace('opacity-30','opacity-100');
                            step.style.transform='translateY(0)';
                        }else{
                            step.classList.add('active');
                            step.classList.replace('opacity-30','opacity-50');
                        }
                    }else{
                        step.classList.remove('active');
                        step.classList.replace('opacity-100','opacity-30');
                        step.classList.replace('opacity-50','opacity-30');
                    }
                });
            };
            window.addEventListener('scroll',handleScroll,{passive:true});
            handleScroll();
          })();
        


      uniform float uTime;
      uniform float uDistortion;
      uniform float uSize;
      uniform vec2 uMouse;
      varying float vNoise;
      // Simplex Noise (Keeping original noise function for texture)
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
          // Calmer, slower movement
          float noise = snoise(vec3(pos.x * 0.3 + uTime * 0.05, pos.y * 0.3, pos.z * 0.3));
          vNoise = noise;
          vec3 newPos = pos + (normal * noise * uDistortion);
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
          // Soft gray/slate colors for health context
          vec3 color1 = vec3(0.8, 0.85, 0.9); 
          vec3 color2 = vec3(0.6, 0.65, 0.7);
          vec3 finalColor = mix(color1, color2, vNoise * 0.5 + 0.5);
          gl_FragColor = vec4(finalColor, 0.8);
      }
    


      // Initialize Three.js
      const container = document.getElementById('canvas-container');
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 0, 20);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
      const geometry = new THREE.SphereGeometry(7, 40, 40); // Sphere instead of box for organic feel
      const uniforms = {
          uTime: { value: 0 },
          uDistortion: { value: 0.4 }, // Gentle distortion
          uSize: { value: 1.5 },
          uColor: { value: new THREE.Color('#E2E8F0') },
          uMouse: { value: new THREE.Vector2(0, 0) }
      };
      const material = new THREE.ShaderMaterial({
          vertexShader: document.getElementById('vertexShader').textContent,
          fragmentShader: document.getElementById('fragmentShader').textContent,
          uniforms: uniforms,
          transparent: true,
      });
      const points = new THREE.Points(geometry, material);
      scene.add(points);
      let time = 0;
      let mouseX = 0, mouseY = 0;
      document.addEventListener('mousemove', (e) => {
          mouseX = (e.clientX / window.innerWidth) * 2 - 1;
          mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      });
      function adjustLayout() {
          const w = window.innerWidth;
          if(w < 1024) { points.position.set(2, 4, -5); points.scale.set(0.8, 0.8, 0.8); } 
          else { points.position.set(5, 0, 0); points.scale.set(1, 1, 1); }
      }
      window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
          adjustLayout();
      });
      adjustLayout();
      function animate() {
          requestAnimationFrame(animate);
          time += 0.005; // Slower time
          points.rotation.y = time * 0.1;
          uniforms.uTime.value = time;
          camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.02;
          camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.02;
          camera.lookAt(0,0,0);
          renderer.render(scene, camera);
      }
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
<div className="fixed inset-0 z-0 opacity-60" id="canvas-container"></div>

<header className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-5 md:px-12 flex justify-between items-center bg-canvas/90 backdrop-blur-md border-b border-border/50 transition-all duration-300">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-obsidian text-white flex items-center justify-center rounded-lg shadow-sm">
<iconify-icon height="18" icon="solar:heart-pulse-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-sans text-sm font-bold tracking-tight text-obsidian uppercase">
          PreCare
        </span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#">How it Works</a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#">About</a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#">For Providers</a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#">Sign in</a>
</nav>
<div className="flex items-center gap-5">
<button className="group relative isolate overflow-hidden bg-obsidian text-white text-xs font-semibold px-6 py-2.5 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.02] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.15)] focus:outline-none">
<div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
<span className="relative z-20">Start PreCare</span>
</button>
</div>
</header>

<div className="z-10 flex flex-col w-full relative">

<section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-36 pb-20 gap-16">
<div className="max-w-2xl space-y-10 relative z-10">
<div className="space-y-6">
<h1 className="font-sans text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-obsidian leading-[0.95]">
              Prepare for your
              <span className="text-subtle">appointments.</span>
</h1>
<p className="font-sans text-2xl md:text-3xl font-medium text-obsidian tracking-tight leading-tight">
              Understand your body over time.
            </p>
<p className="max-w-md font-sans text-base text-subtle leading-relaxed">
              PreCare helps you capture what’s changed, what matters to you, and what you want your provider to understand — before the visit, not during it.
            </p>
</div>
<div className="flex flex-wrap items-center gap-4">
<button className="group relative isolate overflow-hidden bg-obsidian text-white text-sm font-semibold px-8 py-3.5 rounded-lg shadow-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-lg flex items-center gap-2">
<span className="relative z-10">Prepare for an appointment</span>
<iconify-icon className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="px-8 py-3.5 bg-white text-obsidian border border-border text-sm font-medium rounded-lg shadow-sm transition-all duration-300 hover:bg-gray-50 hover:border-obsidian/30">
              See how it works
            </button>
</div>
</div>

<div className="relative w-full max-w-md lg:max-w-lg aspect-square lg:aspect-[4/5] flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-canvas via-white to-canvas opacity-60 blur-3xl"></div>
<div className="premium-card w-full p-8 relative overflow-hidden rounded-2xl flex flex-col gap-6">

<div className="flex justify-between items-start border-b border-border/40 pb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-border flex items-center justify-center text-obsidian">
<iconify-icon icon="solar:user-id-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-subtle uppercase tracking-wide">Upcoming Visit</div>
<div className="text-base font-semibold text-obsidian">Dr. Al-Fayed</div>
</div>
</div>
<div className="px-3 py-1 bg-green-50 text-green-700 border border-green-100 rounded-full text-[10px] font-semibold tracking-wide">
                PREPARED
              </div>
</div>

<div className="space-y-4 flex-1">
<div className="text-[10px] font-bold text-subtle uppercase tracking-wider mb-2">Patient Context</div>

<div className="p-3 rounded-lg border border-border/60 bg-slate-50/50 flex gap-3 items-start">
<iconify-icon className="text-subtle mt-0.5 shrink-0" icon="solar:calendar-date-linear" width="16"></iconify-icon>
<div>
<div className="text-xs font-semibold text-obsidian">Timeline</div>
<div className="text-[11px] text-subtle leading-snug mt-1">Symptoms started 3 weeks ago, worsened after meals.</div>
</div>
</div>

<div className="p-3 rounded-lg border border-border/60 bg-slate-50/50 flex gap-3 items-start">
<iconify-icon className="text-subtle mt-0.5 shrink-0" icon="solar:gallery-wide-linear" width="16"></iconify-icon>
<div>
<div className="text-xs font-semibold text-obsidian">Observations</div>
<div className="text-[11px] text-subtle leading-snug mt-1">2 tongue scans attached. Noticeable coating change in morning.</div>
</div>
</div>

<div className="p-3 rounded-lg border border-border/60 bg-slate-50/50 flex gap-3 items-start">
<iconify-icon className="text-subtle mt-0.5 shrink-0" icon="solar:chat-round-line-linear" width="16"></iconify-icon>
<div>
<div className="text-xs font-semibold text-obsidian">My Question</div>
<div className="text-[11px] text-subtle leading-snug mt-1">"Is this related to the dietary change I made last month?"</div>
</div>
</div>
</div>

<div className="pt-4 mt-auto">
<div className="w-full h-10 bg-obsidian text-white rounded-md flex items-center justify-center text-xs font-medium gap-2 shadow-md">
<iconify-icon icon="solar:share-linear" width="14"></iconify-icon>
                 Share Summary
               </div>
</div>
</div>
</div>
</section>

<section className="border-y border-border/60 bg-white py-16">
<div className="max-w-4xl mx-auto px-6 text-center space-y-10">
<div>
<h2 className="text-2xl md:text-3xl font-semibold text-obsidian tracking-tight mb-3">
              Most healthcare visits rely on memory.<br/>
<span className="text-subtle">PreCare gives you context.</span>
</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left md:text-center">
<div className="flex flex-col md:items-center gap-2">
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mb-1 text-obsidian border border-border/50">
<iconify-icon icon="solar:sort-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-obsidian">Your observations, organized</span>
</div>
<div className="flex flex-col md:items-center gap-2">
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mb-1 text-obsidian border border-border/50">
<iconify-icon icon="solar:chart-2-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-obsidian">Your trends, over time</span>
</div>
<div className="flex flex-col md:items-center gap-2">
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mb-1 text-obsidian border border-border/50">
<iconify-icon icon="solar:microphone-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-obsidian">Your voice, clearly shared</span>
</div>
<div className="flex flex-col md:items-center gap-2">
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mb-1 text-obsidian border border-border/50">
<iconify-icon icon="solar:tag-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-obsidian">No diagnoses. No labels.</span>
</div>
</div>
<p className="text-xs text-subtle font-medium bg-canvas inline-block px-4 py-2 rounded-full border border-border/50">
            You choose what to include. You control who sees it.
          </p>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-20 bg-canvas">
<div className="max-w-3xl mx-auto text-center space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold text-obsidian tracking-tight">
            Appointments are short. Life isn’t.
          </h2>
<p className="text-lg text-subtle leading-relaxed max-w-2xl mx-auto">
            Most visits start the same way: You forget half of what you meant to say, remember details too late, or struggle to explain what changed.
          </p>
<div className="w-16 h-px bg-border mx-auto my-8"></div>
<p className="text-base text-obsidian font-medium">
            That’s not because you’re careless. It’s because health happens over time, and visits don’t.
          </p>
<p className="text-sm text-subtle">PreCare was built to fix that gap.</p>
</div>
</section>

<section className="py-20 px-6 md:px-12 lg:px-20 border-b border-border bg-white">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-sans text-3xl font-semibold text-obsidian tracking-tight mb-4">
              PreCare helps you arrive prepared — not rushed.
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="group p-8 rounded-xl border border-border bg-canvas/30 hover:bg-white transition-all duration-300 hover:shadow-lg hover:border-obsidian/20 flex flex-col">
<div className="w-10 h-10 bg-white border border-border rounded-lg flex items-center justify-center mb-6 text-obsidian shadow-sm">
<iconify-icon icon="solar:pen-new-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-obsidian mb-3">Capture changes as they happen</h3>
<p className="text-sm text-subtle leading-relaxed">
                Scans, notes, files, and observations — logged on your schedule, not the clinic’s.
              </p>
</div>

<div className="group p-8 rounded-xl border border-border bg-canvas/30 hover:bg-white transition-all duration-300 hover:shadow-lg hover:border-obsidian/20 flex flex-col">
<div className="w-10 h-10 bg-white border border-border rounded-lg flex items-center justify-center mb-6 text-obsidian shadow-sm">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-obsidian mb-3">See patterns over time</h3>
<p className="text-sm text-subtle leading-relaxed">
                Not numbers to stress over. Simple trends that show how things are shifting day to day.
              </p>
</div>

<div className="group p-8 rounded-xl border border-border bg-canvas/30 hover:bg-white transition-all duration-300 hover:shadow-lg hover:border-obsidian/20 flex flex-col">
<div className="w-10 h-10 bg-white border border-border rounded-lg flex items-center justify-center mb-6 text-obsidian shadow-sm">
<iconify-icon icon="solar:file-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-obsidian mb-3">Share clear context</h3>
<p className="text-sm text-subtle leading-relaxed">
                A single, calm summary your provider can review ahead of time.
              </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-20 bg-canvas">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 group relative bg-white border border-border rounded-2xl overflow-hidden hover:border-obsidian/30 transition-all duration-500">
<div className="relative z-10 p-10 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="max-w-md">
<h3 className="text-2xl font-semibold text-obsidian mb-3">Why the tongue?</h3>
<p className="text-subtle leading-relaxed">
                      The tongue is one of the few places in the body that reflects internal balance in a visible way. Think of it as a mirror, not a verdict.
                    </p>
<ul className="mt-4 space-y-2">
<li className="flex items-center gap-2 text-xs text-subtle font-medium">
<iconify-icon className="text-obsidian" icon="solar:check-circle-linear"></iconify-icon>
                            Notice changes earlier
                        </li>
<li className="flex items-center gap-2 text-xs text-subtle font-medium">
<iconify-icon className="text-obsidian" icon="solar:check-circle-linear"></iconify-icon>
                            Compare before and after
                        </li>
<li className="flex items-center gap-2 text-xs text-subtle font-medium">
<iconify-icon className="text-obsidian" icon="solar:check-circle-linear"></iconify-icon>
                            See recovery and stress patterns
                        </li>
</ul>
</div>
</div>

<div className="mt-8 h-40 w-full relative flex items-center justify-center border-t border-border/40 pt-6 overflow-hidden">

<svg className="drop-shadow-sm" height="140" viewbox="0 0 200 140" width="200">
<path d="M60 20 C60 0, 140 0, 140 20 L140 80 C140 120, 110 140, 100 140 C90 140, 60 120, 60 80 Z" fill="#FFF0F0" stroke="#E5E5E5" strokeWidth="2"></path>

<line className="opacity-50" stroke="#111" stroke-dasharray="2 2" strokeWidth="1.5" x1="40" x2="160" y1="0" y2="0">
<animate attributename="y1" dur="3s" from="0" repeatcount="indefinite" to="140"></animate>
<animate attributename="y2" dur="3s" from="0" repeatcount="indefinite" to="140"></animate>
<animate attributename="opacity" dur="3s" repeatcount="indefinite" values="0;1;0"></animate>
</line>
</svg>
<div className="absolute bottom-4 right-4 text-[10px] font-mono text-subtle bg-white border border-border px-2 py-1 rounded">
                       SCAN COMPLETE
                   </div>
</div>
</div>
</div>

<div className="md:col-span-4 group relative bg-white border border-border rounded-2xl overflow-hidden hover:border-obsidian/30 transition-all duration-500 flex flex-col">
<div className="p-8 relative z-10 flex flex-col h-full">
<div className="w-10 h-10 bg-canvas border border-border rounded-lg flex items-center justify-center mb-6 text-obsidian">
<iconify-icon icon="solar:shield-check-linear" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-obsidian mb-3">Your data stays yours.</h3>
<ul className="space-y-3 mb-8">
<li className="flex gap-2 text-sm text-subtle">
<span className="text-obsidian">•</span> You decide what to share
                    </li>
<li className="flex gap-2 text-sm text-subtle">
<span className="text-obsidian">•</span> Nothing public by default
                    </li>
<li className="flex gap-2 text-sm text-subtle">
<span className="text-obsidian">•</span> No selling your data
                    </li>
</ul>
<div className="mt-auto">
<p className="text-xs font-medium text-subtle border-t border-border pt-4">
                        PreCare is built for care — not surveillance.
                    </p>
</div>
</div>
</div>

<div className="md:col-span-12 group relative bg-obsidian text-white rounded-2xl overflow-hidden shadow-xl">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
<div className="p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
<div className="max-w-xl">
<div className="text-sm font-bold tracking-widest uppercase text-white/50 mb-4">The Missing Piece</div>
<h3 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">Most patients never bring <span className="text-white underline decoration-white/30 underline-offset-4">context</span> to a visit.</h3>
<p className="text-white/70 text-lg leading-relaxed">
                           With PreCare, you don’t just say “something feels off.” You show what changed, when it changed, and what you tried. That single shift changes the entire conversation.
                       </p>
</div>
<div className="shrink-0 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
<iconify-icon icon="solar:lightbulb-linear" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full bg-canvas border-y border-border/60" id="prepare-lifecycle" style={{height: '350vh'}}>
<div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
<div className="max-w-3xl w-full px-6 md:px-12 relative z-10 flex flex-col items-center h-full py-16">
<div className="text-center mb-10 shrink-0 transition-opacity duration-700" id="lifecycle-header">
<h2 className="font-sans text-2xl md:text-3xl font-semibold text-obsidian tracking-tight mb-2">
                Prepare for an appointment — in minutes.
              </h2>
<p className="text-subtle text-sm">No forms. No medical jargon. Just what you want them to know.</p>
</div>
<div className="relative w-full max-w-xl flex-1 flex flex-col justify-center my-auto">

<div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-border/60 md:-translate-x-1/2"></div>
<div className="absolute left-8 md:left-1/2 top-4 w-px bg-obsidian md:-translate-x-1/2 transition-all duration-75 ease-linear h-0 max-h-[calc(100%-2rem)]" id="lifecycle-line"></div>
<div className="space-y-24 py-8 relative pl-20 md:pl-0">

<div className="lifecycle-step group flex flex-col md:flex-row items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.1">
<div className="md:w-[42%] md:text-right md:pr-10 mb-2 md:mb-0">
<h3 className="font-sans text-lg font-semibold text-obsidian">Select Appointment</h3>
<p className="text-xs text-subtle mt-1">Choose an upcoming visit or add one.</p>
</div>
<div className="absolute left-8 md:relative md:left-auto shrink-0 z-10 -translate-x-1/2 md:translate-x-0">
<div className="w-4 h-4 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="md:w-[42%] md:pl-10">
<div className="bg-white border border-border p-3 rounded-lg shadow-sm inline-flex items-center gap-3 w-full md:w-auto">
<iconify-icon className="text-obsidian" icon="solar:calendar-add-linear"></iconify-icon>
<span className="text-xs font-medium">Nov 14 • Dr. Al-Fayed</span>
</div>
</div>
</div>

<div className="lifecycle-step group flex flex-col md:flex-row items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.35">
<div className="md:w-[42%] md:text-right md:pr-10 mb-2 md:mb-0 order-1 md:order-1">
<div className="bg-white border border-border p-3 rounded-lg shadow-sm inline-block text-left w-full md:w-auto">
<div className="flex gap-2 mb-2">
<span className="bg-slate-100 text-[10px] px-2 py-0.5 rounded text-obsidian">Digestion</span>
<span className="bg-slate-100 text-[10px] px-2 py-0.5 rounded text-obsidian">Sleep</span>
</div>
<span className="text-xs text-subtle">Added to agenda</span>
</div>
</div>
<div className="absolute left-8 md:relative md:left-auto shrink-0 z-10 -translate-x-1/2 md:translate-x-0 order-2">
<div className="w-4 h-4 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="md:w-[42%] md:pl-10 order-3 md:order-3">
<h3 className="font-sans text-lg font-semibold text-obsidian">Choose what matters</h3>
<p className="text-xs text-subtle mt-1">Focus on what you want to discuss.</p>
</div>
</div>

<div className="lifecycle-step group flex flex-col md:flex-row items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.6">
<div className="md:w-[42%] md:text-right md:pr-10 mb-2 md:mb-0">
<h3 className="font-sans text-lg font-semibold text-obsidian">Review Trends</h3>
<p className="text-xs text-subtle mt-1">See changes since your last visit.</p>
</div>
<div className="absolute left-8 md:relative md:left-auto shrink-0 z-10 -translate-x-1/2 md:translate-x-0">
<div className="w-4 h-4 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="md:w-[42%] md:pl-10">
<div className="bg-white border border-border p-3 rounded-lg shadow-sm w-full md:w-auto">
<div className="flex items-end gap-1 h-8">
<div className="w-2 bg-slate-100 h-4 rounded-t-sm"></div>
<div className="w-2 bg-slate-100 h-5 rounded-t-sm"></div>
<div className="w-2 bg-obsidian h-7 rounded-t-sm"></div>
<div className="w-2 bg-obsidian h-6 rounded-t-sm"></div>
</div>
<div className="text-[10px] text-subtle mt-1">Recent pattern change detected</div>
</div>
</div>
</div>

<div className="lifecycle-step group flex flex-col md:flex-row items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.85">
<div className="md:w-[42%] md:text-right md:pr-10 mb-2 md:mb-0 order-1">
<div className="bg-obsidian text-white px-4 py-2 rounded-lg shadow-lg inline-flex items-center gap-2">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon>
<span className="text-xs font-semibold">Summary Sent</span>
</div>
</div>
<div className="absolute left-8 md:relative md:left-auto shrink-0 z-10 -translate-x-1/2 md:translate-x-0 order-2">
<div className="w-4 h-4 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="md:w-[42%] md:pl-10 order-3">
<h3 className="font-sans text-lg font-semibold text-obsidian">Share Context</h3>
<p className="text-xs text-subtle mt-1">A clean, sealed summary for your doctor.</p>
</div>
</div>
</div>
</div>
<div className="mt-12">
<button className="bg-obsidian text-white text-sm font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-transform">
                   Create a pre-visit summary
               </button>
</div>
</div>
</div>

</section>

<section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
<div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
<div className="flex-1 space-y-6">
<h2 className="text-3xl font-semibold text-obsidian tracking-tight">Track changes — when you choose.</h2>
<p className="text-subtle text-lg leading-relaxed">
                      Some weeks, you don’t want to track anything. Other times, you want to understand a change.
                  </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-obsidian">
<iconify-icon className="text-subtle" icon="solar:check-circle-linear"></iconify-icon> Mark when something changes
                      </li>
<li className="flex items-center gap-3 text-sm text-obsidian">
<iconify-icon className="text-subtle" icon="solar:check-circle-linear"></iconify-icon> Add or remove scans freely
                      </li>
<li className="flex items-center gap-3 text-sm text-obsidian">
<iconify-icon className="text-subtle" icon="solar:check-circle-linear"></iconify-icon> Keep context without pressure
                      </li>
</ul>
<p className="text-sm font-semibold text-obsidian pt-2">You decide the pace.</p>
</div>
<div className="flex-1 flex justify-center">
<div className="relative w-64 h-64">

<div className="absolute inset-0 border border-border rounded-full flex items-center justify-center">
<div className="w-48 h-48 border border-dashed border-border/60 rounded-full"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center animate-spin [animation-duration:10s]">
<div className="w-2 h-2 bg-obsidian rounded-full absolute top-0"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-xs font-mono text-subtle">YOUR TIME</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-canvas border-y border-border/60">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

<div>
<div className="text-sm font-bold text-subtle uppercase tracking-widest mb-6">Who this is for</div>
<h2 className="text-3xl font-semibold text-obsidian tracking-tight mb-6">Built for people who want clarity — not labels.</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center shrink-0">
<iconify-icon icon="solar:chat-line-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-obsidian text-sm">Better Conversations</h4>
<p className="text-xs text-subtle mt-1 leading-relaxed">For those who value collaboration with providers.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center shrink-0">
<iconify-icon icon="solar:road-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-obsidian text-sm">Health is a Journey</h4>
<p className="text-xs text-subtle mt-1 leading-relaxed">For those who believe health is not just a single moment.</p>
</div>
</div>
</div>
</div>

<div className="bg-white p-10 rounded-2xl border border-border shadow-sm">
<h3 className="text-xl font-semibold text-obsidian mb-4">Providers appreciate context.</h3>
<p className="text-subtle text-base leading-relaxed mb-6">
                       When patients arrive prepared, visits are calmer, clearer, and more productive. PreCare supports better conversations — without adding work for anyone.
                   </p>
<div className="flex items-center gap-3 text-xs text-subtle font-medium bg-canvas p-3 rounded-lg border border-border/50">
<iconify-icon icon="solar:info-circle-linear" width="16"></iconify-icon>
                       Provider tools are optional and patient-controlled.
                   </div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-20 bg-white">
<div className="max-w-4xl mx-auto text-center">
<h2 className="font-sans text-4xl md:text-5xl font-semibold text-obsidian tracking-tight mb-2">
                Your health doesn’t start at the appointment.
            </h2>
<p className="text-2xl text-subtle mb-10 font-medium">It starts with awareness.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-obsidian text-white text-base font-semibold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto">
                    Prepare for an appointment
                </button>
<button className="bg-white text-obsidian border border-border text-base font-medium px-10 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto">
                    Learn more
                </button>
</div>
</div>
</section>

<footer className="bg-canvas border-t border-border py-16 px-6 md:px-12 lg:px-20">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-sm space-y-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-obsidian rounded-sm flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<span className="font-bold text-sm tracking-tight text-obsidian uppercase">
                PRECARE
              </span>
</div>
<p className="text-xs text-subtle leading-relaxed">
              PreCare is a personal health context system. It does not diagnose or replace medical care. It helps people and providers think together.
            </p>
<div className="text-[10px] text-border/80 text-subtle">
              © 2024 PreCare Inc.
            </div>
</div>
<div className="flex gap-16">
<div className="space-y-4">
<h4 className="text-xs font-bold text-obsidian">Platform</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><a className="hover:text-obsidian" href="#">How it works</a></li>
<li><a className="hover:text-obsidian" href="#">Privacy</a></li>
<li><a className="hover:text-obsidian" href="#">Pricing</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-bold text-obsidian">Company</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><a className="hover:text-obsidian" href="#">About</a></li>
<li><a className="hover:text-obsidian" href="#">Mission</a></li>
<li><a className="hover:text-obsidian" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
</footer>
</div>





    </>
  );
}
