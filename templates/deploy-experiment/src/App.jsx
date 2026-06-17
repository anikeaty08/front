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
mono: ['JetBrains Mono', 'monospace'],
display: ['Geist Sans', 'sans-serif'],
},
fontSize: {
xxs: '0.6rem',
tiny: '0.65rem'
},
animation: { 'fade-in': 'fadeIn 1s ease-out forwards' },
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



      uniform float uTime;
      uniform float uDistortion; // Market Volatility
      uniform float uSize;       // Capital Concentration
      uniform float uSpread;     // Execution Spread
      uniform vec2 uMouse;

      varying float vAlpha;
      varying vec3 vPos;

      // Simplex Noise Function
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

      // Pseudo random
      float rand(vec2 co){
          return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
      }

      void main() {
          vec3 pos = position;

          // 1. Basic Noise Flow
          float noise = snoise(vec3(pos.x * 0.4 + uTime * 0.2, pos.y * 0.4, pos.z * 0.4));

          // 2. Execution Spread (Random scatter/fuzziness)
          vec3 randomScatter = vec3(
              rand(uv + uTime * 0.01) - 0.5,
              rand(uv + 1.0) - 0.5,
              rand(uv + 2.0) - 0.5
          ) * uSpread * 0.8;

          // 3. Volatility (Expansive distortion)
          // Directional force pushing particles outward/sideways
          vec3 dir = normalize(pos);
          float explosion = smoothstep(0.2, 1.0, noise) * uDistortion;

          vec3 finalPos = pos + (dir * explosion) + randomScatter;

          // Mouse interaction
          float mouseDist = distance(uMouse * 10.0, finalPos.xy);
          float mouseForce = smoothstep(4.0, 0.0, mouseDist);
          finalPos += dir * mouseForce * 0.5;

          vec4 mvPosition = modelViewMatrix * vec4(finalPos, 1.0);
          gl_Position = projectionMatrix * mvPosition;

          // Size attenuation
          gl_PointSize = uSize * (20.0 / -mvPosition.z);

          // Fade alpha based on spread to soften edges
          vAlpha = 1.0 - (uSpread * 0.5);
          vPos = finalPos;
      }
    


      uniform vec3 uColor;
      uniform float uOpacity;

      varying float vAlpha;
      varying vec3 vPos;

      void main() {
          // Circle shape
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);
          if (dist > 0.5) discard;

          // Soft edge
          float alpha = smoothstep(0.5, 0.4, dist) * uOpacity * vAlpha;

          // Slight depth gradient fake
          float depthColor = smoothstep(-5.0, 5.0, vPos.z);
          vec3 finalColor = mix(uColor * 0.5, uColor * 1.5, depthColor);

          gl_FragColor = vec4(finalColor, alpha);
      }
    


      lucide.createIcons();

      const container = document.getElementById('canvas-container');
      const trackerBlob = document.getElementById('tracker-blob');
      const trackersContainer = document.getElementById('trackers-container');
      const svgLines = document.getElementById('tracker-lines');

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xf5f5f5);
      scene.fog = new THREE.FogExp2(0xf5f5f5, 0.04); // Heavier fog for depth

      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 0, 22);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const mainGroup = new THREE.Group();
      mainGroup.position.x = 4.0;
      scene.add(mainGroup);

      // --- CREATE PARTICLE GLOBE ---
      // High segment count sphere for density
      const geometry = new THREE.SphereGeometry(4.5, 96, 96);

      const uniforms = {
          uTime: { value: 0 },
          uDistortion: { value: 0.5 }, // Volatility
          uSize: { value: 3.5 },       // Concentration (visual size)
          uSpread: { value: 0.0 },     // Execution Spread
          uColor: { value: new THREE.Color('#4338ca') },
          uOpacity: { value: 0.9 },
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

      const particleMesh = new THREE.Points(geometry, material);
      mainGroup.add(particleMesh);
      // -----------------------------

      const techGroup = new THREE.Group();
      mainGroup.add(techGroup);

      const orbits = [];

      function createOrbit(radius, type = 'thin', tiltX = 0, tiltY = 0, speed = 1.0) {
          let geo, mat;
          let opacity = 0.5;
          if (type === 'thin') {
              geo = new THREE.TorusGeometry(radius, 0.006, 6, 120);
              mat = new THREE.MeshBasicMaterial({ color: 0x171717, transparent: true, opacity: opacity });
          } else if (type === 'dotted') {
              const pts = [];
              const count = 64;
              for(let i=0; i<count; i++) {
                  const theta = (i / count) * Math.PI * 2;
                  pts.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
              }
              geo = new THREE.BufferGeometry().setFromPoints(pts);
              mat = new THREE.PointsMaterial({ color: 0x171717, size: 0.03, transparent: true, opacity: opacity });
          } else if (type === 'dashed') {
              geo = new THREE.RingGeometry(radius, radius + 0.02, 64, 1);
              mat = new THREE.MeshBasicMaterial({ color: 0x171717, transparent: true, opacity: opacity * 0.5, side: THREE.DoubleSide });
          }
          const mesh = type === 'dotted' ? new THREE.Points(geo, mat) : new THREE.Mesh(geo, mat);
          mesh.rotation.x = tiltX;
          mesh.rotation.y = tiltY;
          techGroup.add(mesh);
          orbits.push({
              mesh: mesh,
              baseOpacity: opacity,
              speedVector: new THREE.Vector3(
                  (Math.random() - 0.5) * 0.01 * speed,
                  (Math.random() - 0.5) * 0.01 * speed,
                  (Math.random() - 0.5) * 0.01 * speed
              )
          });
      }

      createOrbit(5.8, 'thin', Math.PI/2, 0, 1.5);
      createOrbit(6.2, 'dotted', Math.PI/3, Math.PI/6, 0.8);
      createOrbit(5.2, 'thin', 0, Math.PI/2, 2.0);
      createOrbit(6.8, 'dashed', Math.PI/1.5, Math.PI/4, 0.5);
      createOrbit(7.5, 'thin', Math.PI/4, 0, 0.6);

      // Define tracking points on the sphere surface
      // We'll approximate surface points at radius ~4.5
      const r = 4.5;
      const trackingPoints = [
          { pos: new THREE.Vector3(0, r * 0.6, r * 0.5), label: 'HI-01', el: null },
          { pos: new THREE.Vector3(-r * 0.5, -r * 0.2, r * 0.6), label: 'MID-X', el: null },
          { pos: new THREE.Vector3(r * 0.5, -r * 0.4, r * 0.5), label: 'LO-Z', el: null }
      ];

      // Create DOM elements for trackers
      trackingPoints.forEach((point, i) => {
          const div = document.createElement('div');
          div.className = 'point-marker';
          div.innerHTML = `
              <div class="point-dot"></div>
              <div class="point-corner pc-tl"></div>
              <div class="point-corner pc-br"></div>
              <div class="point-label">${point.label}</div>
          `;
          trackersContainer.appendChild(div);
          point.el = div;
      });

      // Create SVG lines
      const lines = [];
      const pairs = [[0,1], [1,2], [2,0]]; // Triangle connection
      pairs.forEach(pair => {
          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('class', pair[0] === 0 ? 'svg-line active' : 'svg-line');
          svgLines.appendChild(line);
          lines.push({ el: line, p1: pair[0], p2: pair[1] });
      });

      let time = 0;
      let flowSpeed = 0.15;
      let orbitSpeedMult = 1.0;
      let orbitVisMult = 0.7;
      let mouseX = 0;
      let mouseY = 0;
      let targetRotationX = 0;
      let targetRotationY = 0;
      const tempVec = new THREE.Vector3();

      document.addEventListener('mousemove', (e) => {
          mouseX = (e.clientX / window.innerWidth) * 2 - 1;
          mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
          uniforms.uMouse.value.set(mouseX, mouseY);
      });

      function animate() {
          requestAnimationFrame(animate);
          time += 0.01 * flowSpeed * 3.0; // Slightly faster time for particles

          // Rotate the particle sphere
          particleMesh.rotation.y += 0.003;
          particleMesh.rotation.z = Math.sin(time * 0.2) * 0.05;

          orbits.forEach((orbit, i) => {
              const speed = orbit.speedVector.clone().multiplyScalar(orbitSpeedMult * 2.0);
              orbit.mesh.rotation.x += speed.x;
              orbit.mesh.rotation.y += speed.y;
              orbit.mesh.rotation.z += speed.z;
              orbit.mesh.rotation.x += Math.sin(time * 0.5 + i) * 0.001 * orbitSpeedMult;
              orbit.mesh.rotation.y += Math.cos(time * 0.3 + i) * 0.001 * orbitSpeedMult;
              if(orbit.mesh.material) {
                  orbit.mesh.material.opacity = orbit.baseOpacity * orbitVisMult;
                  orbit.mesh.visible = orbit.mesh.material.opacity > 0.01;
              }
          });

          mainGroup.position.y = Math.sin(time * 0.5) * 0.2;
          if(window.innerWidth < 768) mainGroup.position.y += 1.5;

          targetRotationY = mouseX * 0.3;
          targetRotationX = mouseY * 0.2;
          mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.08;
          mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.08;

          // MARKET TRACKER LOGIC
          const screenPoints = [];

          trackingPoints.forEach((pt) => {
              // Clone position and apply mesh transformation
              tempVec.copy(pt.pos);

              // Apply rotation of the particle sphere itself
              tempVec.applyEuler(particleMesh.rotation);
              tempVec.applyMatrix4(particleMesh.matrix);

              // Since particleMesh is inside mainGroup, apply mainGroup matrix
              tempVec.applyMatrix4(mainGroup.matrixWorld);

              // Project to screen
              tempVec.project(camera);

              const x = (tempVec.x * .5 + .5) * window.innerWidth;
              const y = (-(tempVec.y * .5) + .5) * window.innerHeight;

              screenPoints.push({x, y});

              // Move div
              pt.el.style.transform = `translate(${x}px, ${y}px)`;
          });

          // Draw Lines
          lines.forEach((line) => {
              const p1 = screenPoints[line.p1];
              const p2 = screenPoints[line.p2];
              line.el.setAttribute('x1', p1.x);
              line.el.setAttribute('y1', p1.y);
              line.el.setAttribute('x2', p2.x);
              line.el.setAttribute('y2', p2.y);
          });

          // Update Blob position to center of points for ambient effect
          const avgX = screenPoints.reduce((a, b) => a + b.x, 0) / screenPoints.length;
          const avgY = screenPoints.reduce((a, b) => a + b.y, 0) / screenPoints.length;
          trackerBlob.style.left = `${avgX}px`;
          trackerBlob.style.top = `${avgY}px`;

          uniforms.uTime.value = time;
          renderer.render(scene, camera);
      }
      animate();

      const getEl = (id) => document.getElementById(id);
      getEl('input-distortion').addEventListener('input', (e) => {
          uniforms.uDistortion.value = parseFloat(e.target.value);
          getEl('val-distortion').textContent = e.target.value;
      });
      getEl('input-detail').addEventListener('input', (e) => {
          // Mapping "Concentration" to Point Size.
          // 0.1 input -> 1.0 size, 2.0 input -> 6.0 size approx
          const val = parseFloat(e.target.value);
          uniforms.uSize.value = val * 4.0 + 1.0;
          getEl('val-detail').textContent = e.target.value;
      });
      getEl('input-blur').addEventListener('input', (e) => {
          uniforms.uSpread.value = parseFloat(e.target.value);
          getEl('val-blur').textContent = e.target.value;
      });
      getEl('input-speed').addEventListener('input', (e) => {
          flowSpeed = parseFloat(e.target.value);
      });
      getEl('input-opacity').addEventListener('input', (e) => {
          uniforms.uOpacity.value = parseFloat(e.target.value);
      });
      getEl('input-orbit-speed').addEventListener('input', (e) => {
          orbitSpeedMult = parseFloat(e.target.value);
      });
      getEl('input-orbit-vis').addEventListener('input', (e) => {
          orbitVisMult = parseFloat(e.target.value);
          trackersContainer.style.opacity = orbitVisMult;
          svgLines.style.opacity = orbitVisMult;
      });
      getEl('input-color').addEventListener('input', (e) => {
          const hex = e.target.value;
          uniforms.uColor.value.set(hex);
          getEl('val-color').textContent = hex;

          const r = parseInt(hex.slice(1, 3), 16);
          const g = parseInt(hex.slice(3, 5), 16);
          const b = parseInt(hex.slice(5, 7), 16);
          trackerBlob.style.background = `radial-gradient(circle, rgba(${r}, ${g}, ${b}, 0.15) 0%, rgba(${r}, ${g}, ${b}, 0) 70%)`;

          const activeLine = document.querySelector('.svg-line.active');
          if(activeLine) activeLine.style.stroke = `rgba(${r}, ${g}, ${b}, 0.5)`;
      });

      window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
          if(window.innerWidth < 768) {
              mainGroup.position.x = 0;
          } else {
              mainGroup.position.x = 4.0;
          }
      });

      if(window.innerWidth < 768) {
          mainGroup.position.x = 0;
      }
    
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
      

<div id="tracker-blob"></div>

<svg id="tracker-lines">

</svg>

<div id="trackers-container"></div>
<div className="absolute inset-0 z-1 bg-neutral-50" id="canvas-container"></div>
<main className="absolute inset-0 z-20 pointer-events-none">
<header className="absolute top-6 left-6 md:left-10 animate-fade-in opacity-0" style={{animationDelay: '0.1s'}}>
<div className="flex items-center gap-2">
<span className="font-mono text-xs font-medium tracking-tight text-neutral-500">
            DEPLOY_ENGINE_V2.9
          </span>
</div>
</header>
<div className="absolute -translate-y-1/2 left-6 md:left-10 max-w-3xl animate-fade-in opacity-0 top-[40%]" style={{animationDelay: '0.2s'}}>
<h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 leading-[0.9]">
          Turn Perps Motion
          <br/>
          into Productive Capital
        </h1>
</div>
<div className="absolute bottom-6 right-6 w-[240px] pointer-events-auto glass rounded-lg animate-fade-in opacity-0 flex flex-col shadow-xl shadow-neutral-200/50 font-mono" style={{animationDelay: '0.4s'}}>
<div className="flex items-center justify-between px-3.5 py-2.5 border-b border-neutral-200/50">
<div className="flex items-center gap-1.5">
<i className="w-3 h-3 text-neutral-500" data-lucide="scan-line" strokeWidth="1.5"></i>
<span className="text-xs font-medium text-neutral-800">CONFIG</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-1 h-1 bg-indigo-500 rounded-full animate-pulse"></div>
<span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">
              SYNCED
            </span>
</div>
</div>
<div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
<div className="space-y-1.5">
<div className="flex items-center justify-between">
<label className="text-[10px] uppercase tracking-wide text-neutral-500">
                Market Volatility
              </label>
<span className="text-[10px] text-neutral-400" id="val-distortion">
                0.5
              </span>
</div>
<input id="input-distortion" max="2.0" min="0" step="0.1" type="range" value="0.5"/>
</div>
<div className="space-y-1.5">
<div className="flex items-center justify-between">
<label className="text-[10px] uppercase tracking-wide text-neutral-500">
                Capital Concentration
              </label>
<span className="text-[10px] text-neutral-400" id="val-detail">
                0.8
              </span>
</div>
<input id="input-detail" max="2.0" min="0.1" step="0.1" type="range" value="0.8"/>
</div>
<div className="space-y-1.5">
<div className="flex items-center justify-between">
<label className="text-[10px] uppercase tracking-wide text-neutral-500">
                Execution Spread
              </label>
<span className="text-[10px] text-neutral-400" id="val-blur">0</span>
</div>
<input id="input-blur" max="1.0" min="0" step="0.01" type="range" value="0"/>
</div>
<div className="h-px w-full bg-neutral-200/50 my-1"></div>
<div className="grid grid-cols-2 gap-3">
<div className="space-y-1.5">
<label className="text-[9px] uppercase tracking-wide text-neutral-500 block truncate">
                Liquidity Vel.
              </label>
<input id="input-speed" max="1.0" min="0" step="0.05" type="range" value="0.15"/>
</div>
<div className="space-y-1.5">
<label className="text-[9px] uppercase tracking-wide text-neutral-500 block truncate">
                Risk Tolerance
              </label>
<input id="input-opacity" max="1.0" min="0.1" step="0.05" type="range" value="0.9"/>
</div>
</div>

<div className="space-y-2 pt-1">
<div className="flex items-center justify-between">
<label className="text-[10px] uppercase tracking-wide font-medium text-neutral-700 flex items-center gap-1.5">
<i className="w-3 h-3 text-indigo-500" data-lucide="crosshair"></i>
                Market Tracker
              </label>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="space-y-1">
<label className="text-[9px] text-neutral-400 uppercase">
                  Scan Rate
                </label>
<input id="input-orbit-speed" max="3.0" min="0" step="0.1" type="range" value="1.0"/>
</div>
<div className="space-y-1">
<label className="text-[9px] text-neutral-400 uppercase">
                  HUD Opacity
                </label>
<input id="input-orbit-vis" max="1.0" min="0" step="0.05" type="range" value="0.7"/>
</div>
</div>
</div>
<div className="space-y-1.5 pt-1">
<label className="text-[10px] uppercase tracking-wide text-neutral-500 block">
              Brand Accent
            </label>
<div className="flex items-center gap-2 p-1.5 rounded bg-white border border-neutral-200 hover:border-neutral-300 transition-colors cursor-pointer group shadow-sm">
<div className="color-wrapper shadow-sm">
<input id="input-color" type="color" value="#4338ca"/>
</div>
<span className="text-[10px] text-neutral-500 uppercase" id="val-color">
                #4338CA
              </span>
</div>
</div>
</div>
</div>
</main>






    </>
  );
}
