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
sans: ['Inter', 'sans-serif'],
serif: ['Cormorant Garamond', 'serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
paper: '#0A0A0A',
ink: '#FAFAFA',
sepia: '#D97706',
stone: '#292524',
rust: '#EA580C'
},
animation: {
'fade-in': 'fadeIn 1.2s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      uniform float uTime;
      uniform float uDistortion;
      uniform float uSize;
      uniform float uDetail;
      uniform vec2 uMouse;

      varying float vAlpha;
      varying vec3 vPos;
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
          vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
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
          float noiseFreq = uDetail;
          float noiseAmp = uDistortion;
          float noise = snoise(vec3(pos.x * noiseFreq + uTime * 0.1, pos.y * noiseFreq, pos.z * noiseFreq));

          vNoise = noise;
          vec3 newPos = pos + (normalize(pos) * noise * noiseAmp);

          float dist = distance(uMouse * 10.0, newPos.xy);
          float interaction = smoothstep(5.0, 0.0, dist);
          newPos += normalize(pos) * interaction * 0.5;

          vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
          gl_Position = projectionMatrix * mvPosition;

          gl_PointSize = uSize * (24.0 / -mvPosition.z) * (1.0 + noise * 0.5);
          vAlpha = 1.0;
          vPos = newPos;
      }
    


      uniform vec3 uColor;
      uniform float uOpacity;
      varying float vNoise;
      varying vec3 vPos;

      void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);
          if (dist > 0.5) discard;

          float alpha = smoothstep(0.5, 0.2, dist) * uOpacity;
          // Slightly tighter color bounds for dark mode visibility
          vec3 darkColor = uColor * 0.3;
          vec3 lightColor = uColor;
          vec3 finalColor = mix(darkColor, lightColor, vNoise * 0.5 + 0.5);

          gl_FragColor = vec4(finalColor, alpha);
      }
    


      const container = document.getElementById('canvas-container');
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x0A0A0A, 0.035);

      const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 0, 18);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const systemsGroup = new THREE.Group();
      systemsGroup.position.set(4.0, 2.0, -2.0);
      scene.add(systemsGroup);

      const geometry = new THREE.IcosahedronGeometry(5.0, 30);

      const uniforms = {
          uTime: { value: 0 },
          uDistortion: { value: 0.9 },
          uSize: { value: 2.4 },
          uDetail: { value: 0.8 },
          uColor: { value: new THREE.Color('#FAFAFA') },
          uOpacity: { value: 0.8 },
          uMouse: { value: new THREE.Vector2(0, 0) }
      };

      const material = new THREE.ShaderMaterial({
          vertexShader: document.getElementById('vertexShader').textContent,
          fragmentShader: document.getElementById('fragmentShader').textContent,
          uniforms: uniforms,
          transparent: true,
          depthWrite: false,
          blending: THREE.NormalBlending
      });

      const particles = new THREE.Points(geometry, material);
      systemsGroup.add(particles);

      const lineGroup = new THREE.Group();
      systemsGroup.add(lineGroup);

      function createThinOrbit(radius, rotation) {
          const curve = new THREE.EllipseCurve(0, 0, radius, radius, 0, 2 * Math.PI, false, 0);
          const points = curve.getPoints(128);
          const geo = new THREE.BufferGeometry().setFromPoints(points);
          const mat = new THREE.LineBasicMaterial({ color: 0xEA580C, transparent: true, opacity: 0.15 });
          const orbit = new THREE.Line(geo, mat);
          orbit.rotation.x = rotation.x;
          orbit.rotation.y = rotation.y;
          lineGroup.add(orbit);
          return orbit;
      }

      const orbits = [
          createThinOrbit(6.0, {x: Math.PI/2, y: 0}),
          createThinOrbit(5.8, {x: Math.PI/3, y: Math.PI/6}),
          createThinOrbit(6.5, {x: Math.PI/1.8, y: Math.PI/4})
      ];

      let time = 0;
      let speed = 0.1;
      let mouseX = 0, mouseY = 0;

      document.addEventListener('mousemove', (e) => {
          mouseX = (e.clientX / window.innerWidth) * 2 - 1;
          mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
          uniforms.uMouse.value.x += (mouseX - uniforms.uMouse.value.x) * 0.05;
          uniforms.uMouse.value.y += (mouseY - uniforms.uMouse.value.y) * 0.05;
      });

      window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
          adjustLayout();
      });

      function adjustLayout() {
          if(window.innerWidth < 1024) {
              systemsGroup.position.set(0, 3.0, -6);
              systemsGroup.scale.set(0.8, 0.8, 0.8);
          } else {
              systemsGroup.position.set(6.0, 0, 0);
              systemsGroup.scale.set(1, 1, 1);
          }
      }
      adjustLayout();

      window.addEventListener('scroll', () => {
          const scrollY = window.scrollY;
          systemsGroup.position.y = (window.innerWidth < 1024 ? 3.0 : 0) + (scrollY * 0.002);
      });

      function animate() {
          requestAnimationFrame(animate);
          time += 0.01 + (speed * 0.05);

          systemsGroup.rotation.y = time * 0.05;
          systemsGroup.rotation.z = Math.sin(time * 0.1) * 0.05;

          lineGroup.rotation.x = Math.sin(time * 0.05) * 0.2;
          orbits.forEach((orbit, i) => {
              orbit.rotation.z += 0.002 * (i + 1);
          });

          camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
          camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
          camera.lookAt(0,0,0);

          uniforms.uTime.value = time;
          renderer.render(scene, camera);
      }
      animate();

      // UI Bindings if tablet exists
      const distInput = document.getElementById('input-distortion');
      if(distInput) {
          distInput.addEventListener('input', (e) => {
              uniforms.uDistortion.value = parseFloat(e.target.value);
              document.getElementById('val-distortion').textContent = e.target.value;
          });
          document.getElementById('input-detail').addEventListener('input', (e) => {
              const val = parseFloat(e.target.value);
              uniforms.uDetail.value = val;
              document.getElementById('val-detail').textContent = val;
          });
      }

      // Sticky Nav Logic
      const nav = document.querySelector('nav');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              nav.classList.add('py-2');
          } else {
              nav.classList.remove('py-2');
          }
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
      

<div className="fixed inset-0 pointer-events-none grid-overlay z-0">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-paper/50 to-paper"></div>
</div>
<div className="fixed inset-0 z-0 pointer-events-none opacity-80" id="canvas-container"></div>

<nav className="fixed top-0 w-full z-50 vellum-glass border-b transition-all duration-300 border-neutral-800/50">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 border flex items-center justify-center rounded-sm bg-paper relative overflow-hidden group-hover:bg-neutral-900 transition-colors border-neutral-200">
<div className="absolute w-full h-px rotate-45 bg-neutral-200"></div>
<div className="absolute w-full h-px -rotate-45 bg-neutral-200"></div>
</div>
<span className="font-serif text-xl tracking-tight text-ink font-medium">
            Shashi.ai
          </span>
</a>

<div className="hidden md:flex items-center gap-10">
<div className="relative group h-20 flex items-center">
<button className="font-mono text-xs hover:text-ink transition-colors uppercase tracking-widest flex items-center gap-1 text-neutral-400">
              Products
              <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>

<div className="absolute top-full left-1/2 -translate-x-1/2 w-56 vellum-glass rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 py-2">
<a className="block px-6 py-3 font-mono text-xs tracking-widest hover:text-ink uppercase transition-colors text-neutral-400 hover:bg-neutral-800/50" href="#">
                Booking
              </a>
<a className="block px-6 py-3 font-mono text-xs tracking-widest hover:text-ink uppercase transition-colors text-neutral-400 hover:bg-neutral-800/50" href="#">
                Check-In
              </a>
<a className="block px-6 py-3 font-mono text-xs tracking-widest hover:text-ink uppercase transition-colors text-neutral-400 hover:bg-neutral-800/50" href="#">
                In-Room
              </a>
<a className="block px-6 py-3 font-mono text-xs tracking-widest hover:text-ink uppercase transition-colors text-neutral-400 hover:bg-neutral-800/50" href="#">
                One-Click Service
              </a>
<a className="block px-6 py-3 font-mono text-xs tracking-widest hover:text-ink uppercase transition-colors text-neutral-400 hover:bg-neutral-800/50" href="#">
                Marketing
              </a>
</div>
</div>
<a className="font-mono text-xs hover:text-ink transition-colors uppercase tracking-widest text-neutral-400" href="#">
            Pricing
          </a>
<a className="font-mono text-xs hover:text-ink transition-colors uppercase tracking-widest text-neutral-400" href="#">
            About Us
          </a>
</div>

<button className="font-serif italic text-lg px-6 py-1 border transition-colors text-ink rounded-full hidden md:block border-neutral-800 hover:border-neutral-200">
          Book a Demo
        </button>
</div>
</nav>

<main className="relative z-10 flex flex-col w-full">

<section className="relative w-full min-h-screen flex items-center pt-20 px-6 md:px-12 max-w-screen-2xl mx-auto">
<div className="relative z-10 w-full max-w-4xl animate-fade-in opacity-0" style={{animationDelay: '0.2s'}}>
<div className="flex items-center gap-3 mb-6">
<div className="h-px w-12 bg-rust"></div>
<span className="font-mono text-xs text-rust uppercase tracking-widest">
              AGENTIC AI — HOSPITALITY
            </span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ink leading-none tracking-tight mix-blend-screen">
            Agentic AI for
            <br/>
<span className="italic font-light text-neutral-400">
              Autonomous Hospitality
            </span>
</h1>
<p className="mt-8 max-w-md font-sans text-sm md:text-base font-light leading-relaxed text-neutral-400">
            Shashi.ai orchestrates and personalises every guest interaction —
            from first booking to final checkout — through a single intelligent
            layer that connects your entire hotel ecosystem.
          </p>
<div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 pointer-events-auto">
<button className="group inline-flex w-fit items-center gap-3 bg-ink text-paper pl-6 pr-5 py-4 rounded-sm transition-all duration-500 shadow-xl hover:bg-neutral-300 shadow-black/50">
<span className="font-mono text-xs tracking-widest uppercase">
                SCHEDULE A DEMO
              </span>
<iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div className="hidden sm:block h-px w-12 bg-neutral-700"></div>
<span className="font-serif italic text-lg tracking-tight text-neutral-400">
              PILOT LIVE — SHASHI HOTEL
            </span>
</div>
<div className="mt-20 flex flex-col gap-1 opacity-50">
<span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
              SECTOR: HOSPITALITY TECH
            </span>
<span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
              PLATFORM: SHASHI.AI
            </span>
</div>
</div>

<div className="pointer-events-auto absolute bottom-12 right-6 md:right-12 w-[300px] vellum-glass rounded-sm animate-fade-in opacity-0 hidden lg:block" style={{animationDelay: '0.5s'}}>
<div className="border-b px-5 py-4 flex justify-between items-center border-neutral-800/60 bg-neutral-900/40">
<span className="font-serif italic text-xl text-ink tracking-tight">
              Guest Experience Engine
            </span>
</div>
<div className="p-6 space-y-8">
<div className="space-y-3">
<div className="flex justify-between font-mono text-xs tracking-widest uppercase text-neutral-400">
<span>PERSONALISATION</span>
<span id="val-distortion">0.9</span>
</div>
<input id="input-distortion" max="2.0" min="0" step="0.1" type="range" value="0.9"/>
</div>
<div className="space-y-3">
<div className="flex justify-between font-mono text-xs tracking-widest uppercase text-neutral-400">
<span>AUTOMATION</span>
<span id="val-detail">0.8</span>
</div>
<input id="input-detail" max="2.0" min="0.1" step="0.1" type="range" value="0.8"/>
</div>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-800/50">
<div className="space-y-2">
<div className="flex justify-between font-mono text-xs tracking-widest uppercase text-neutral-500">
<span>CHECK-IN</span>
</div>
<div className="h-1 w-full rounded-full overflow-hidden bg-neutral-800">
<div className="h-full bg-ink w-[85%]"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between font-mono text-xs tracking-widest uppercase text-neutral-500">
<span>IN-ROOM</span>
</div>
<div className="h-1 w-full rounded-full overflow-hidden bg-neutral-800">
<div className="h-full bg-ink w-[92%]"></div>
</div>
</div>
</div>
<div className="pt-2 flex items-center justify-between">
<span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                AI LAYER
              </span>
<div className="flex items-center gap-2">
<span className="font-mono text-xs tracking-widest text-green-500/80">
                  LIVE
                </span>
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)] animate-pulse"></div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-24 px-6 md:px-12 max-w-screen-2xl mx-auto border-t relative z-20 bg-paper/80 backdrop-blur-sm border-neutral-800/40">

<div className="flex flex-col items-center text-center mb-24">
<span className="font-mono text-xs uppercase tracking-widest mb-10 text-neutral-500">
            TRUSTED BY INDUSTRY LEADERS
          </span>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale">
<span className="font-serif text-2xl font-medium tracking-tight">
              Marriott
            </span>
<span className="font-sans text-xl font-medium tracking-tight">
              Hilton
            </span>
<span className="font-serif italic text-2xl tracking-tight">
              Four Seasons
            </span>
<span className="font-mono text-lg tracking-tight">ORACLE</span>
</div>
<div className="mt-12 inline-flex items-center gap-3 border px-5 py-2 rounded-full border-neutral-700 bg-neutral-900/50">
<span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              AS FEATURED IN —
            </span>
<span className="font-serif italic text-lg tracking-tight text-ink">
              The Wall Street Journal
            </span>
</div>
</div>

<div className="mb-8">
<span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            WHAT PEOPLE ARE SAYING
          </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="vellum-glass p-8 flex flex-col justify-between min-h-[240px]">
<iconify-icon className="text-3xl text-rust/40 mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="font-serif italic text-xl md:text-2xl text-ink leading-snug mb-8 tracking-tight">
              "The future of hospitality is already here."
            </p>
<div className="border-t pt-4 border-neutral-800/50">
<span className="block font-mono text-xs uppercase tracking-widest text-neutral-400">
                Hotel GM, Silicon Valley
              </span>
</div>
</div>

<div className="vellum-glass p-8 flex flex-col justify-between min-h-[240px]">
<iconify-icon className="text-3xl text-rust/40 mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="font-serif italic text-xl md:text-2xl text-ink leading-snug mb-8 tracking-tight">
              "Checked in before I landed. Room was perfect."
            </p>
<div className="border-t pt-4 border-neutral-800/50">
<span className="block font-mono text-xs uppercase tracking-widest text-neutral-400">
                Tech Executive
              </span>
<span className="block font-mono text-xs uppercase tracking-widest mt-1 text-neutral-500">
                Shashi Hotel Guest
              </span>
</div>
</div>

<div className="vellum-glass p-8 flex flex-col justify-between min-h-[240px]">
<iconify-icon className="text-3xl text-rust/40 mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="font-serif italic text-xl md:text-2xl text-ink leading-snug mb-8 tracking-tight">
              "Finally, one platform that actually talks to our PMS."
            </p>
<div className="border-t pt-4 border-neutral-800/50">
<span className="block font-mono text-xs uppercase tracking-widest text-neutral-400">
                Hotel Operations Director
              </span>
</div>
</div>
</div>
</section>

<section className="w-full relative py-32 border-y bg-paper border-neutral-800/50">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
<div className="mb-16 text-center">
<span className="font-mono text-xs uppercase tracking-widest border px-4 py-1.5 rounded-full text-neutral-400 border-neutral-800 bg-neutral-900">
              THE SHIFT
            </span>
</div>
<div className="flex flex-col md:flex-row relative">

<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px flex-col items-center justify-center bg-neutral-800">
<div className="w-8 h-8 rounded-full border bg-paper flex items-center justify-center text-xs font-mono text-neutral-500 border-neutral-800">
                VS
              </div>
</div>

<div className="w-full md:w-1/2 md:pr-20 pb-16 md:pb-0 opacity-50 grayscale hover:opacity-80 transition-opacity">
<h3 className="font-serif italic text-4xl tracking-tight mb-12 text-neutral-400">
                "Today's Reality"
              </h3>
<div className="grid grid-cols-2 gap-8 mb-10 text-neutral-300">
<div className="flex items-center gap-4">
<iconify-icon className="text-2xl" icon="solar:key-linear"></iconify-icon>
<span className="font-mono text-xs tracking-widest uppercase">
                    Physical Key
                  </span>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-2xl" icon="solar:document-text-linear"></iconify-icon>
<span className="font-mono text-xs tracking-widest uppercase">
                    Paper Bill
                  </span>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span className="font-mono text-xs tracking-widest uppercase">
                    Front Desk Queue
                  </span>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-2xl" icon="solar:broom-linear"></iconify-icon>
<span className="font-mono text-xs tracking-widest uppercase">
                    Manual Housekeeping
                  </span>
</div>
</div>
<p className="font-sans font-light leading-relaxed max-w-sm text-neutral-400">
                Fragmented systems. Manual processes. Zero personalisation.
                Guests leave without a trace.
              </p>
</div>

<div className="w-full md:w-1/2 md:pl-20 pt-16 md:pt-0 border-t md:border-t-0 relative border-neutral-800">
<h3 className="font-serif italic text-4xl text-ink tracking-tight mb-12">
                "The Shashi Layer"
              </h3>
<div className="grid grid-cols-2 gap-8 mb-10 text-ink">
<div className="flex items-center gap-4 text-rust">
<iconify-icon className="text-2xl" icon="solar:smartphone-rotate-linear"></iconify-icon>
<span className="font-mono text-xs tracking-widest uppercase text-ink">
                    Digital Key
                  </span>
</div>
<div className="flex items-center gap-4 text-rust">
<iconify-icon className="text-2xl" icon="solar:card-send-linear"></iconify-icon>
<span className="font-mono text-xs tracking-widest uppercase text-ink">
                    Instant Checkout
                  </span>
</div>
<div className="flex items-center gap-4 text-rust">
<iconify-icon className="text-2xl" icon="solar:user-check-linear"></iconify-icon>
<span className="font-mono text-xs tracking-widest uppercase text-ink">
                    Mobile Check-In
                  </span>
</div>
<div className="flex items-center gap-4 text-rust">
<iconify-icon className="text-2xl" icon="solar:smart-home-linear"></iconify-icon>
<span className="font-mono text-xs tracking-widest uppercase text-ink">
                    Smart Room
                  </span>
</div>
</div>
<p className="font-sans font-light text-ink leading-relaxed max-w-sm">
                One intelligent app. Unified data. Every interaction
                personalised. Every guest remembered.
              </p>
</div>
</div>
</div>
</section>

<section className="w-full py-32 px-6 md:px-12 max-w-screen-2xl mx-auto relative z-10 bg-paper/90 backdrop-blur-md">
<span className="block font-mono text-xs uppercase tracking-widest mb-8 text-neutral-500">
          WHY SHASHI.AI
        </span>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
<h2 className="font-serif text-5xl md:text-7xl text-ink leading-none tracking-tight">
            One Layer.
            <br/>
<span className="italic text-neutral-400">Everything Connected.</span>
</h2>
<div className="flex items-center">
<p className="font-sans font-light text-lg leading-relaxed max-w-lg text-neutral-400">
              Shashi.ai doesn't replace your existing hotel technology. It sits
              above your PMS and CRS as an intelligent orchestration layer —
              unifying fragmented guest data, automating decisions in real time,
              and delivering hyper-personalised experiences without a single
              rip-and-replace.
            </p>
</div>
</div>

<div className="w-full border rounded-sm p-8 mb-20 flex flex-col md:flex-row justify-between items-center gap-8 text-center vellum-glass border-neutral-800/60 bg-neutral-900/40">
<div className="w-full md:w-1/3 p-6 border bg-paper shadow-sm border-neutral-800">
<span className="block font-mono text-xs uppercase tracking-widest mb-2 text-neutral-400">
              EXISTING SYSTEMS
            </span>
<span className="font-serif italic text-2xl tracking-tight text-ink">
              PMS &amp; CRS
            </span>
</div>
<div className="flex flex-col items-center text-rust">
<span className="font-mono text-xs uppercase tracking-widest mb-2 opacity-60">
              INTEGRATES
            </span>
<iconify-icon className="text-3xl rotate-90 md:rotate-0" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="w-full md:w-1/3 p-8 bg-ink text-paper shadow-xl rounded-sm transform scale-105">
<span className="block font-mono text-xs text-paper/60 uppercase tracking-widest mb-2">
              INTELLIGENCE
            </span>
<span className="font-serif italic text-3xl tracking-tight">
              Shashi.ai Layer
            </span>
</div>
<div className="flex flex-col items-center text-rust">
<span className="font-mono text-xs uppercase tracking-widest mb-2 opacity-60">
              DELIVERS
            </span>
<iconify-icon className="text-3xl rotate-90 md:rotate-0" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="w-full md:w-1/3 p-6 border bg-paper shadow-sm border-neutral-800">
<span className="block font-mono text-xs uppercase tracking-widest mb-2 text-neutral-400">
              EXPERIENCE
            </span>
<span className="font-serif italic text-2xl tracking-tight text-ink">
              Guest App
            </span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="vellum-glass p-8 border-t-2 border-t-neutral-200">
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-neutral-800">
<span className="font-mono text-xs text-neutral-500">01</span>
<span className="font-mono text-xs text-ink uppercase tracking-widest">
                NON-DISRUPTIVE
              </span>
</div>
<p className="font-sans font-light leading-relaxed text-sm text-neutral-400">
              Integrates seamlessly with existing PMS &amp; CRS systems. Zero
              hardware replacement required.
            </p>
</div>
<div className="vellum-glass p-8 border-t-2 border-t-neutral-200">
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-neutral-800">
<span className="font-mono text-xs text-neutral-500">02</span>
<span className="font-mono text-xs text-ink uppercase tracking-widest">
                AGENTIC AI
              </span>
</div>
<p className="font-sans font-light leading-relaxed text-sm text-neutral-400">
              Autonomous decision-making that personalises each guest's
              individual journey in real time.
            </p>
</div>
<div className="vellum-glass p-8 border-t-2 border-t-neutral-200">
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-neutral-800">
<span className="font-mono text-xs text-neutral-500">03</span>
<span className="font-mono text-xs text-ink uppercase tracking-widest">
                SINGLE PLATFORM
              </span>
</div>
<p className="font-sans font-light leading-relaxed text-sm text-neutral-400">
              One unified application controls Booking, Check-In, Room
              Environment, Services, and Loyalty.
            </p>
</div>
</div>
</section>

<section className="w-full py-32 border-y bg-paper/50 relative overflow-hidden border-neutral-800/50">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10 text-center mb-20">
<span className="font-mono text-xs uppercase tracking-widest mb-6 block text-neutral-500">
            THE PLATFORM
          </span>
<h2 className="font-serif text-5xl md:text-6xl text-ink leading-none tracking-tight">
            Five Pillars.
            <br/>
<span className="italic text-neutral-400">One Seamless Stay.</span>
</h2>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

<div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border rounded-full items-center justify-center bg-paper/80 backdrop-blur-md shadow-2xl z-0 border-neutral-800">
<div className="w-48 h-48 border rounded-full flex flex-col items-center justify-center relative border-neutral-800/50 bg-neutral-900">
<div className="absolute inset-0 rounded-full border border-rust/30 animate-ping" style={{animationDuration: '4s'}}></div>
<span className="font-serif text-2xl tracking-tight text-ink relative z-10">
                  Shashi.ai
                </span>
<span className="font-mono text-xs tracking-widest mt-2 relative z-10 text-neutral-500">
                  CORE
                </span>
</div>
</div>

<div className="vellum-glass p-8 relative z-10 md:col-start-1 md:row-start-1 transform hover:-translate-y-1 transition-transform">
<div className="w-8 h-8 rounded-full border flex items-center justify-center mb-6 border-neutral-700 bg-neutral-900">
<span className="font-mono text-xs text-ink">01</span>
</div>
<h4 className="font-mono text-xs uppercase tracking-widest text-ink mb-4 pb-4 border-b border-neutral-800/50">
                BOOKING
              </h4>
<p className="font-sans font-light text-sm text-neutral-400">
                3 clicks to book. Integrated Apple &amp; Google Pay.
                Frictionless loyalty rewards built in from step one.
              </p>
</div>

<div className="vellum-glass p-8 relative z-10 md:col-start-3 md:row-start-1 transform hover:-translate-y-1 transition-transform">
<div className="w-8 h-8 rounded-full border flex items-center justify-center mb-6 border-neutral-700 bg-neutral-900">
<span className="font-mono text-xs text-ink">02</span>
</div>
<h4 className="font-mono text-xs uppercase tracking-widest text-ink mb-4 pb-4 border-b border-neutral-800/50">
                CHECK-IN
              </h4>
<p className="font-sans font-light text-sm text-neutral-400">
                SmartAccess digital key. Fully contactless arrival. Zero front
                desk queues required.
              </p>
</div>

<div className="hidden md:block col-start-2 row-start-2"></div>

<div className="vellum-glass p-8 relative z-10 md:col-start-1 md:row-start-2 md:mt-12 transform hover:-translate-y-1 transition-transform">
<div className="w-8 h-8 rounded-full border flex items-center justify-center mb-6 border-neutral-700 bg-neutral-900">
<span className="font-mono text-xs text-ink">03</span>
</div>
<h4 className="font-mono text-xs uppercase tracking-widest text-ink mb-4 pb-4 border-b border-neutral-800/50">
                IN-ROOM
              </h4>
<p className="font-sans font-light text-sm text-neutral-400">
                65" Shashi TV connection. IoT climate &amp; lighting control.
                AI-driven entertainment and concierge.
              </p>
</div>

<div className="vellum-glass p-8 relative z-10 md:col-start-3 md:row-start-2 md:mt-12 transform hover:-translate-y-1 transition-transform">
<div className="w-8 h-8 rounded-full border flex items-center justify-center mb-6 border-neutral-700 bg-neutral-900">
<span className="font-mono text-xs text-ink">04</span>
</div>
<h4 className="font-mono text-xs uppercase tracking-widest text-ink mb-4 pb-4 border-b border-neutral-800/50">
                ONE-CLICK SERVICE
              </h4>
<p className="font-sans font-light text-sm text-neutral-400">
                Request anything with a single tap. Instant fulfilment tracking
                and seamless staff routing.
              </p>
</div>

<div className="vellum-glass p-8 relative z-10 md:col-start-2 md:row-start-3 md:mt-8 transform hover:-translate-y-1 transition-transform">
<div className="w-8 h-8 rounded-full border flex items-center justify-center mb-6 border-neutral-700 bg-neutral-900">
<span className="font-mono text-xs text-ink">05</span>
</div>
<h4 className="font-mono text-xs uppercase tracking-widest text-ink mb-4 pb-4 border-b border-neutral-800/50">
                MARKETING
              </h4>
<p className="font-sans font-light text-sm text-neutral-400">
                Hyper-personalised offers. Real-time contextual promotions.
                Automated cashback loyalty.
              </p>
</div>
</div>
</div>
</section>

<section className="w-full py-32 px-6 md:px-12 max-w-screen-2xl mx-auto bg-paper">
<span className="block font-mono text-xs uppercase tracking-widest mb-16 text-neutral-500">
          INDUSTRY VALIDATION
        </span>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

<div className="flex flex-col border p-10 md:p-16 relative border-neutral-800 bg-neutral-900/50">
<div className="absolute top-0 left-0 w-full h-1 bg-neutral-200"></div>
<iconify-icon className="text-4xl mb-8 text-neutral-600" icon="solar:newspaper-linear"></iconify-icon>
<h3 className="font-serif italic text-5xl md:text-6xl text-ink tracking-tight leading-none mb-8">
              "Hotel of the Future"
            </h3>
<span className="font-mono text-xs uppercase tracking-widest mb-10 block text-neutral-400">
              — The Wall Street Journal
            </span>
<p className="font-sans font-light text-lg leading-relaxed mt-auto border-t pt-8 text-neutral-400 border-neutral-800">
              Shashi.ai was featured by the WSJ as a landmark example of
              AI-driven hospitality — the first platform to fully automate the
              guest journey end-to-end.
            </p>
</div>

<div className="flex flex-col justify-center">
<div className="inline-flex items-center gap-3 mb-12 border px-4 py-1.5 rounded-full w-fit border-neutral-800 bg-neutral-900/30">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
<span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                LIVE PILOT — SHASHI HOTEL
              </span>
</div>
<div className="space-y-12">
<div className="flex flex-col border-b pb-8 border-neutral-800">
<span className="font-serif text-6xl text-ink tracking-tight mb-2">
                  3
                </span>
<span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                  Clicks to complete a booking
                </span>
</div>
<div className="flex flex-col border-b pb-8 border-neutral-800">
<span className="font-serif text-6xl text-ink tracking-tight mb-2">
                  $100
                </span>
<span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                  Revenue potential per room / month
                </span>
</div>
<div className="flex flex-col">
<span className="font-serif text-6xl text-ink tracking-tight mb-2">
                  1
                </span>
<span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                  App to control the entire stay
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-32 px-6 md:px-12 max-w-screen-2xl mx-auto border-t bg-paper/80 backdrop-blur-sm border-neutral-800/50">
<div className="mb-16">
<span className="block font-mono text-xs uppercase tracking-widest mb-6 text-neutral-500">
            GUEST STORIES
          </span>
<h2 className="font-serif text-5xl md:text-6xl text-ink leading-none tracking-tight">
            The Age of
            <br/>
<span className="italic text-neutral-400">Hyper-Personalisation</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative w-full aspect-video border overflow-hidden mb-4 rounded-sm flex items-center justify-center bg-neutral-800 border-neutral-700">
<div className="absolute inset-0 group-hover:bg-white/10 transition-colors z-10 bg-white/5"></div>
<img alt="Hotel Room" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="w-16 h-16 rounded-full backdrop-blur border flex items-center justify-center relative z-20 group-hover:scale-110 transition-transform bg-neutral-900/90 border-neutral-700">
<iconify-icon className="text-2xl text-ink translate-x-0.5" icon="solar:play-linear"></iconify-icon>
</div>
</div>
<span className="block font-mono text-xs text-ink uppercase tracking-widest mb-1">
              "The Google Executive"
            </span>
<span className="block font-sans font-light text-sm text-neutral-400">
              Pre-programmed his entire stay
            </span>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-video border overflow-hidden mb-4 rounded-sm flex items-center justify-center bg-neutral-800 border-neutral-700">
<div className="absolute inset-0 group-hover:bg-white/10 transition-colors z-10 bg-white/5"></div>
<img alt="Hotel Exterior" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="w-16 h-16 rounded-full backdrop-blur border flex items-center justify-center relative z-20 group-hover:scale-110 transition-transform bg-neutral-900/90 border-neutral-700">
<iconify-icon className="text-2xl text-ink translate-x-0.5" icon="solar:play-linear"></iconify-icon>
</div>
</div>
<span className="block font-mono text-xs text-ink uppercase tracking-widest mb-1">
              "Hotel of the Future"
            </span>
<span className="block font-sans font-light text-sm text-neutral-400">
              WSJ Featured Story
            </span>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-video border overflow-hidden mb-4 rounded-sm flex items-center justify-center bg-neutral-800 border-neutral-700">
<div className="absolute inset-0 group-hover:bg-white/10 transition-colors z-10 bg-white/5"></div>
<img alt="Guest Phone" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="w-16 h-16 rounded-full backdrop-blur border flex items-center justify-center relative z-20 group-hover:scale-110 transition-transform bg-neutral-900/90 border-neutral-700">
<iconify-icon className="text-2xl text-ink translate-x-0.5" icon="solar:play-linear"></iconify-icon>
</div>
</div>
<span className="block font-mono text-xs text-ink uppercase tracking-widest mb-1">
              "From Booking to Checkout"
            </span>
<span className="block font-sans font-light text-sm text-neutral-400">
              End-to-End Walkthrough
            </span>
</div>
</div>
</section>

<section className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center py-32 px-6 border-t relative bg-paper z-20 border-neutral-800">
<div className="absolute inset-0 pointer-events-none grid-overlay opacity-50 z-0"></div>
<div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
<div className="w-12 h-12 border flex items-center justify-center rounded-sm relative overflow-hidden mb-10 border-neutral-200 bg-neutral-900">
<div className="absolute w-full h-px rotate-45 bg-neutral-200"></div>
<div className="absolute w-full h-px -rotate-45 bg-neutral-200"></div>
</div>
<h2 className="font-serif text-5xl md:text-7xl text-ink leading-none tracking-tight mb-8">
            Ready to Orchestrate
            <br/>
<span className="italic text-neutral-400">Every Stay?</span>
</h2>
<p className="font-sans font-light text-lg mb-12 max-w-lg text-neutral-400">
            Join the hotels already delivering the future. Schedule a
            personalised demo and see Shashi.ai live.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-6">
<button className="group flex items-center justify-center gap-3 bg-ink text-paper px-8 py-4 rounded-sm transition-all duration-500 w-full sm:w-auto shadow-xl hover:bg-neutral-300 shadow-black/50">
<span className="font-mono text-xs tracking-widest uppercase">
                BOOK A DEMO
              </span>
<iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<a className="font-mono text-xs hover:text-ink transition-colors uppercase tracking-widest border-b border-transparent hover:border-ink pb-1 text-neutral-400" href="#">
              Explore the Platform
            </a>
</div>
</div>

<div className="absolute bottom-8 w-full text-center opacity-60">
<span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            SHASHI.AI — AGENTIC HOSPITALITY INTELLIGENCE
          </span>
</div>
</section>
</main>





    </>
  );
}
