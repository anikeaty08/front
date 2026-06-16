import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Geist Sans', 'Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
brand: '#474DEF',
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)",
},
animation: {
'shimmer': 'shimmer 2s linear infinite',
'dash': 'dash 15s linear infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
shimmer: {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(100%)' }
},
dash: {
'0%': { strokeDashoffset: '1000' },
'100%': { strokeDashoffset: '0' }
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' }
}
}
}
}
}



uniform float uTime;
uniform float uDistortion;
uniform float uDetail;
uniform vec2 uMouse;
uniform float uMouseForce;
varying vec2 vUv;
varying float vNoise;
varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vOriginalNormal;
varying vec3 vWorldPosition;
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
vec3 rotateY(vec3 v, float angle) {
float s = sin(angle);
float c = cos(angle);
return vec3(c * v.x + s * v.z, v.y, -s * v.x + c * v.z);
}
float getDisplacement(vec3 position) {
float time = uTime * 0.2;
float noise = snoise(vec3(position.x * uDetail + time, position.y * uDetail + time * 0.8, time));
vec3 mousePos = vec3(uMouse.x * 10.0, uMouse.y * 10.0, 4.0);
float dist = distance(position.xy, uMouse * 8.0);
float mouseWave = exp(-dist * 0.5) * sin(dist * 3.0 - uTime * 5.0) * uMouseForce * 2.5;
return (noise * uDistortion) + mouseWave;
}
void main() {
vUv = uv;
vOriginalNormal = normal;
vec3 twistedPos = rotateY(position, position.y * 0.3 + uMouse.x);
float disp = getDisplacement(twistedPos);
vec3 newPos = twistedPos + normal * disp;
vNoise = disp;
float epsilon = 0.1;
vec3 tangent = normalize(cross(normal, vec3(0.0, 1.0, 0.0)));
if (length(tangent) < 0.001) tangent = normalize(cross(normal, vec3(0.0, 0.0, 1.0)));
vec3 bitangent = normalize(cross(normal, tangent));
vec3 p1 = twistedPos + tangent * epsilon;
vec3 p2 = twistedPos + bitangent * epsilon;
vec3 p1Displaced = p1 + normal * getDisplacement(p1);
vec3 p2Displaced = p2 + normal * getDisplacement(p2);
vec3 v1 = p1Displaced - newPos;
vec3 v2 = p2Displaced - newPos;
vNormal = normalize(cross(v1, v2));
vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
vViewPosition = -mvPosition.xyz;
vWorldPosition = (modelMatrix * vec4(newPos, 1.0)).xyz;
gl_Position = projectionMatrix * mvPosition;
}



uniform vec3 uColor;
uniform float uOpacity;
uniform float uBlur;
varying vec2 vUv;
varying float vNoise;
varying vec3 vNormal;
varying vec3 vOriginalNormal;
varying vec3 vViewPosition;
void main() {
vec3 viewDir = normalize(vViewPosition);
float randomBlurNoise = smoothstep(-0.5, 1.0, vNoise);
float currentBlur = clamp(uBlur + (randomBlurNoise * 0.4 - 0.2), 0.0, 1.0);
vec3 normal = normalize(mix(vNormal, vOriginalNormal, currentBlur * 0.95));
vec3 lightDir1 = normalize(vec3(1.0, 1.0, 1.0));
vec3 lightColor1 = vec3(1.0, 0.98, 0.95);
vec3 lightDir2 = normalize(vec3(-1.0, 0.2, 0.5));
vec3 lightColor2 = vec3(0.8, 0.9, 1.0);
float diff1 = max(dot(normal, lightDir1), 0.0);
float diff2 = max(dot(normal, lightDir2), 0.0);
float shininess = mix(60.0, 2.0, currentBlur);
vec3 reflectDir1 = reflect(-lightDir1, normal);
float spec1 = pow(max(dot(viewDir, reflectDir1), 0.0), shininess);
float NdotV = dot(normal, viewDir);
float fresnelBase = 1.0 - max(NdotV, 0.0);
float fresnelPower = mix(4.0, 0.8, currentBlur);
float fresnel = pow(fresnelBase, fresnelPower);
vec3 baseColor = uColor;
baseColor = mix(baseColor, baseColor * 1.2, vNoise * 0.5);
vec3 lighting = (diff1 * lightColor1 * 0.6) + (diff2 * lightColor2 * 0.4);
vec3 specular = vec3(spec1) * 0.5 * (1.0 - currentBlur);
vec3 finalColor = baseColor * lighting + specular;
finalColor += uColor * fresnel * 2.0;
float alpha = uOpacity;
float erosionThreshold = currentBlur * 1.1 - 0.2;
float erosionMask = smoothstep(erosionThreshold, erosionThreshold + 0.3, vNoise * 0.5 + 0.5);
float centerFade = mix(1.0, fresnel, currentBlur * 0.8);
alpha *= erosionMask * centerFade;
finalColor = mix(finalColor, vec3(0.95, 0.98, 1.0), currentBlur * 0.4 * fresnel);
gl_FragColor = vec4(finalColor, alpha);
}



      document.addEventListener('DOMContentLoaded', () => {
          lucide.createIcons();
          gsap.registerPlugin(ScrollTrigger);

          // --- Animations ---
          const initAnimations = () => {
              gsap.from('.stat-item', {
                  scrollTrigger: {
                      trigger: '.stats-section',
                      start: 'top 80%',
                  },
                  y: 20,
                  opacity: 0,
                  duration: 0.6,
                  stagger: 0.1,
                  ease: "power2.out"
              });
              gsap.set('.feature-card', { y: 50 });
              gsap.to('.feature-card', {
                  scrollTrigger: {
                      trigger: '.features-section',
                      start: 'top 75%',
                  },
                  y: 0,
                  opacity: 1,
                  duration: 1,
                  stagger: 0.2,
                  ease: "power3.out"
              });
               gsap.set('.code-block', { x: 50 });
               gsap.to('.code-block', {
                  scrollTrigger: {
                      trigger: '.code-section',
                      start: 'top 70%',
                  },
                  x: 0,
                  opacity: 1,
                  duration: 1,
                  ease: "power3.out"
              });
          };
          initAnimations();

          // --- Three.js Scene ---
          const initScene = () => {
              const container = document.getElementById('canvas-container');
              if (!container) return;

              // Cleanup existing canvases
              while(container.firstChild) container.removeChild(container.firstChild);

              const trackerBlob = document.getElementById('tracker-blob');
              const trackersContainer = document.getElementById('trackers-container');
              const svgLines = document.getElementById('tracker-lines');
              const vertexShaderEl = document.getElementById('vertexShader');
              const fragmentShaderEl = document.getElementById('fragmentShader');

              if (!vertexShaderEl || !fragmentShaderEl) {
                  console.warn("Shaders not loaded properly.");
                  return;
              }

              const scene = new THREE.Scene();
              // Make scene background transparent to blend with CSS
              // scene.background = new THREE.Color(0xf5f5f5);
              scene.fog = new THREE.FogExp2(0xffffff, 0.02);

              const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
              camera.position.set(0, 0, 18);

              const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
              renderer.setSize(window.innerWidth, window.innerHeight);
              renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
              container.appendChild(renderer.domElement);

              const mainGroup = new THREE.Group();
              // Changed position to be visible in header (was 4.0)
              mainGroup.position.x = 2.5; 
              scene.add(mainGroup);

              const geometry = new THREE.CylinderGeometry(0, 3.5, 7, 3, 80, true);
              geometry.rotateX(Math.PI * 0.15);
              geometry.rotateZ(Math.PI * 0.1);

              const uniforms = {
                  uTime: { value: 0 },
                  uDistortion: { value: 0.5 },
                  uDetail: { value: 0.8 },
                  uColor: { value: new THREE.Color('#4338ca') },
                  uOpacity: { value: 0.9 },
                  uBlur: { value: 0.6 },
                  uMouse: { value: new THREE.Vector2(0, 0) },
                  uMouseForce: { value: 1.0 }
              };

              const material = new THREE.ShaderMaterial({
                  vertexShader: vertexShaderEl.textContent,
                  fragmentShader: fragmentShaderEl.textContent,
                  uniforms: uniforms,
                  transparent: true,
                  side: THREE.DoubleSide,
                  depthWrite: false,
                  blending: THREE.NormalBlending
              });

              const mesh = new THREE.Mesh(geometry, material);
              mainGroup.add(mesh);

              const coreGeo = new THREE.CylinderGeometry(0, 2.0, 4, 3, 2, true);
              coreGeo.rotateX(Math.PI * 0.15);
              coreGeo.rotateZ(Math.PI * 0.1);

              const edges = new THREE.EdgesGeometry(coreGeo);
              const coreMat = new THREE.LineBasicMaterial({ color: 0x111111, transparent: true, opacity: 0.15 });
              const coreMesh = new THREE.LineSegments(edges, coreMat);
              mainGroup.add(coreMesh);

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

              const trackingPoints = [
                  { pos: new THREE.Vector3(0, 2.5, 0), label: 'HI-01', el: null },
                  { pos: new THREE.Vector3(-1.8, -1, 1), label: 'MID-X', el: null },
                  { pos: new THREE.Vector3(1.8, -1, 1), label: 'LO-Z', el: null }
              ];

              trackingPoints.forEach((point, i) => {
                  const div = document.createElement('div');
                  div.className = 'point-marker';
                  div.innerHTML = `
                      <div class="point-dot"></div>
                      <div class="point-corner pc-tl"></div>
                      <div class="point-corner pc-br"></div>
                      <div class="point-label">${point.label}</div>
                  `;
                  if(trackersContainer) {
                      trackersContainer.appendChild(div);
                      point.el = div;
                  }
              });

              const lines = [];
              if(svgLines) {
                  const pairs = [[0,1], [1,2], [2,0]];
                  pairs.forEach(pair => {
                      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                      line.setAttribute('class', pair[0] === 0 ? 'svg-line active' : 'svg-line');
                      svgLines.appendChild(line);
                      lines.push({ el: line, p1: pair[0], p2: pair[1] });
                  });
              }

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
                  time += 0.01 * flowSpeed * 2.0;

                  mesh.rotation.y += 0.002;
                  coreMesh.rotation.y += 0.002;

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

                  // Animation movement
                  mainGroup.position.y = Math.sin(time * 0.5) * 0.2;
                  
                  // Mobile positioning adjustments
                  if(window.innerWidth < 768) {
                      mainGroup.position.y += 1.5;
                  }

                  targetRotationY = mouseX * 0.5;
                  targetRotationX = mouseY * 0.3;
                  mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.08;
                  mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.08;

                  // Update HUD elements
                  if (trackersContainer && svgLines) {
                      const screenPoints = [];
                      trackingPoints.forEach((pt) => {
                          if (!pt.el) return;
                          tempVec.copy(pt.pos);
                          tempVec.applyMatrix4(mainGroup.matrixWorld);
                          tempVec.project(camera);
                          const x = (tempVec.x * .5 + .5) * window.innerWidth;
                          const y = (-(tempVec.y * .5) + .5) * window.innerHeight;
                          screenPoints.push({x, y});
                          pt.el.style.transform = `translate(${x}px, ${y}px)`;
                      });

                      lines.forEach((line) => {
                          if (screenPoints[line.p1] && screenPoints[line.p2]) {
                             const p1 = screenPoints[line.p1];
                             const p2 = screenPoints[line.p2];
                             line.el.setAttribute('x1', p1.x);
                             line.el.setAttribute('y1', p1.y);
                             line.el.setAttribute('x2', p2.x);
                             line.el.setAttribute('y2', p2.y);
                          }
                      });

                      if (screenPoints.length > 0 && trackerBlob) {
                          const avgX = screenPoints.reduce((a, b) => a + b.x, 0) / screenPoints.length;
                          const avgY = screenPoints.reduce((a, b) => a + b.y, 0) / screenPoints.length;
                          trackerBlob.style.left = `${avgX}px`;
                          trackerBlob.style.top = `${avgY}px`;
                      }
                  }

                  uniforms.uTime.value = time;
                  renderer.render(scene, camera);
              }
              animate();

              // Inputs
              const getEl = (id) => document.getElementById(id);
              getEl('input-distortion')?.addEventListener('input', (e) => {
                  uniforms.uDistortion.value = parseFloat(e.target.value);
                  getEl('val-distortion').textContent = e.target.value;
              });
              getEl('input-detail')?.addEventListener('input', (e) => {
                  uniforms.uDetail.value = parseFloat(e.target.value);
                  getEl('val-detail').textContent = e.target.value;
              });
              getEl('input-blur')?.addEventListener('input', (e) => {
                  uniforms.uBlur.value = parseFloat(e.target.value);
                  getEl('val-blur').textContent = e.target.value;
              });
              getEl('input-speed')?.addEventListener('input', (e) => {
                  flowSpeed = parseFloat(e.target.value);
              });
              getEl('input-opacity')?.addEventListener('input', (e) => {
                  uniforms.uOpacity.value = parseFloat(e.target.value);
              });
              getEl('input-orbit-speed')?.addEventListener('input', (e) => {
                  orbitSpeedMult = parseFloat(e.target.value);
              });
              getEl('input-orbit-vis')?.addEventListener('input', (e) => {
                  orbitVisMult = parseFloat(e.target.value);
                  if(trackersContainer) trackersContainer.style.opacity = orbitVisMult;
                  if(svgLines) svgLines.style.opacity = orbitVisMult;
              });
              getEl('input-color')?.addEventListener('input', (e) => {
                  const hex = e.target.value;
                  uniforms.uColor.value.set(hex);
                  getEl('val-color').textContent = hex;
                  const r = parseInt(hex.slice(1, 3), 16);
                  const g = parseInt(hex.slice(3, 5), 16);
                  const b = parseInt(hex.slice(5, 7), 16);
                  if(trackerBlob) trackerBlob.style.background = `radial-gradient(circle, rgba(${r}, ${g}, ${b}, 0.15) 0%, rgba(${r}, ${g}, ${b}, 0) 70%)`;
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
                      mainGroup.position.x = 2.5; // Updated resize logic
                  }
              });
              if(window.innerWidth < 768) mainGroup.position.x = 0;
          };

          initScene();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md transition-all duration-500 hover:shadow-lg hover:bg-white/95">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-4">
<a className="text-xl font-medium tracking-tight text-slate-900 flex items-center gap-2 transition-transform hover:scale-105 duration-300 origin-left hover:text-[#474DEF]" href="#">
            Deploy
            <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-50 text-slate-500 border border-slate-200 uppercase tracking-wider">
              Protocol
            </span>
</a>
</div>
<div className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600">
<div className="relative group">
<button className="px-4 py-2 rounded-full hover:bg-slate-50 hover:text-black transition-all duration-200 flex items-center gap-1">
              Products
              <svg className="lucide lucide-chevron-down w-3 h-3 opacity-50" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="absolute left-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
<div className="bg-white border border-slate-100 rounded-xl shadow-xl p-1 overflow-hidden">
<a className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#474DEF] rounded-lg" href="#">
                  dUSD
                </a>
<a className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#474DEF] rounded-lg" href="#">
                  Yield as a Service
                </a>
</div>
</div>
</div>
<a className="px-4 py-2 rounded-full hover:bg-slate-50 hover:text-black transition-all duration-200" href="#">
            Docs
          </a>
<a className="px-4 py-2 rounded-full hover:bg-slate-50 hover:text-black transition-all duration-200" href="#">
            Blog
          </a>
<a className="px-4 py-2 rounded-full hover:bg-slate-50 hover:text-black transition-all duration-200" href="#">
            Contact Us
          </a>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:block text-sm font-normal text-slate-500 hover:text-slate-900" href="#">
            Institutional Login
          </a>
<a className="group flex items-center gap-2 bg-[#0f172a] hover:bg-[#474DEF] text-white px-4 py-2 rounded text-sm font-medium transition-all duration-300" href="#">
            Launch App
            <svg className="lucide lucide-arrow-right w-4 h-4 text-white/70 group-hover:text-white transition-colors" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</nav>

<main className="relative pt-16">

<section className="relative min-h-screen w-full overflow-hidden bg-neutral-50/30 border-b border-neutral-200">

<div id="canvas-container"></div>

<div id="tracker-blob"></div>
<svg id="tracker-lines"></svg>
<div id="trackers-container"></div>
<div className="relative z-10 h-full w-full pointer-events-none min-h-screen flex flex-col justify-center">
<header className="absolute top-24 left-6 md:left-10 animate-fade-in opacity-0" style={{animationDelay: '0.1s'}}>
<div className="flex items-center gap-2">
<span className="font-mono text-xs font-medium tracking-tight text-neutral-500">
                DEPLOY_ENGINE_V2.9
              </span>
</div>
</header>
<div className="absolute top-[45%] -translate-y-1/2 left-6 md:left-10 max-w-3xl animate-fade-in opacity-0 pointer-events-auto" style={{animationDelay: '0.2s'}}>
<h1 className="font-[Geist Sans] text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 leading-[0.9] mb-6">
              Turn Perps Motion
              <br/>
              into Productive Capital
            </h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-lg leading-relaxed font-light mb-8">
              Building the next generation of income-generating base assets,
              powered by the only scalable decentralized delta-neutral yield
              engine.
            </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<a className="flex items-center gap-2 bg-[#474DEF] text-white px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-[#3b3fe0] transition-all shadow-lg shadow-[#474DEF]/20 hover:translate-y-px" href="#">
                Register Interest
                <svg className="lucide lucide-send w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
<path d="m21.854 2.147-10.94 10.939"></path>
</svg>
</a>
<button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3.5 rounded-lg text-sm font-medium hover:border-slate-300 hover:bg-slate-50 transition-all">
<svg className="lucide lucide-handshake w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
<path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
<path d="m21 3 1 11h-2"></path>
<path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
<path d="M3 4h8"></path>
</svg>
                Partner With Us
              </button>
</div>
</div>
<div className="absolute bottom-6 right-6 w-[240px] pointer-events-auto glass rounded-lg animate-fade-in opacity-0 flex flex-col shadow-xl shadow-neutral-200/50 font-mono hidden md:flex" style={{animationDelay: '0.4s'}}>
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
<span className="text-[10px] text-neutral-400" id="val-blur">
                    0.6
                  </span>
</div>
<input id="input-blur" max="1.0" min="0" step="0.01" type="range" value="0.6"/>
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
</div>
</section>

<section className="border-b border-slate-100 bg-white relative z-10 stats-section">
<div className="max-w-7xl mx-auto px-6 py-10">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4 text-center">
<div className="flex flex-col items-center stat-item" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<span className="text-3xl font-serif font-medium text-black mb-1">
                22.6%
              </span>
<span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                Avg APY (12-month)
              </span>
</div>
<div className="flex flex-col items-center stat-item" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<span className="text-3xl font-serif font-medium text-black mb-1">
                6.1
              </span>
<span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                Sharpe Ratio
              </span>
<span className="text-[9px] text-slate-400 mt-1">
                *Methodology disclosed
              </span>
</div>
<div className="flex flex-col items-center stat-item" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<span className="text-3xl font-serif font-medium text-black mb-1">
                $1.6M
              </span>
<span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                Real Yield Paid
              </span>
</div>
<div className="flex flex-col items-center stat-item" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<span className="text-3xl font-serif font-medium text-black mb-1">
                200M+
              </span>
<span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                Executed Volume
              </span>
</div>
<div className="flex flex-col items-center stat-item" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<span className="text-3xl font-serif font-medium text-black mb-1">
                +100%
              </span>
<span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                Perp DEX Growth
              </span>
</div>
<div className="flex flex-col items-center stat-item" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<span className="text-3xl font-serif font-medium text-black mb-1">
                0
              </span>
<span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                Loss Events
              </span>
<span className="text-[9px] text-slate-400 mt-1">Since 2018</span>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white border-b border-slate-100 relative z-10">
<div className="max-w-4xl mx-auto px-6">
<div className="mb-10">
<span className="text-[#474DEF] font-mono text-xs uppercase tracking-widest font-medium">
              Why Now
            </span>
<h2 className="text-3xl md:text-5xl text-black mt-4 mb-8 font-sans tracking-tight leading-[1.1]">
              Perpetual markets are exploding in popularity, and they are about
              to break out of crypto.
            </h2>
</div>
<div className="grid md:grid-cols-2 gap-12 text-lg text-slate-500 font-light leading-relaxed">
<p>
              No one is capturing the structural returns embedded in their
              motion.
              <span className="text-slate-900 font-medium">
                Deploy exists for this moment.
              </span>
              We transform perpetual market funding rates into sustainable,
              attractive yield for all.
            </p>
<p>
              As global fintechs and brokerages embed perps into consumer apps,
              open interest expands and multiplies the basis trade that powers
              Deploy.
            </p>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 relative z-10 features-section">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<span className="text-[#474DEF] font-mono text-xs uppercase tracking-widest font-medium block mb-4">
              B2C Execution USPs
            </span>
<h2 className="text-3xl md:text-5xl text-black mb-6 font-sans tracking-tighter">
              As quantitative traders, we understand how to deliver returns at
              scale.
            </h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="md:col-span-2 p-10 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 relative overflow-hidden group feature-card opacity-0" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: '1'}}>

<div className="relative z-10 max-w-sm">
<div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-8 text-[#474DEF]">
<svg className="lucide lucide-network w-6 h-6" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="6" rx="1" width="6" x="16" y="16"></rect>
<rect height="6" rx="1" width="6" x="2" y="16"></rect>
<rect height="6" rx="1" width="6" x="9" y="2"></rect>
<path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
<path d="M12 12V8"></path>
</svg>
</div>
<h3 className="text-2xl font-medium text-black mb-4 tracking-tight">
                  Market-wide basis capture
                </h3>
<p className="text-slate-500 leading-relaxed">
                  Deploy is built on top of a cross-venue, neutral carry program
                  that harvests structural funding spreads as they emerge across
                  decentralized perpetual markets.
                </p>
</div>

<div className="absolute -right-12 -bottom-12 md:right-8 md:bottom-8 md:top-auto w-[360px] bg-white border border-slate-100 rounded-xl shadow-2xl shadow-slate-200/50 p-5 transform md:rotate-[-3deg] group-hover:rotate-0 transition-all duration-500 hover:scale-[1.02] origin-bottom-right">
<div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-50">
<span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                    Live Basis Monitor
                  </span>
<div className="flex items-center gap-1.5">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
</span>
<span className="text-[10px] text-green-600 font-medium">
                      Scanning
                    </span>
</div>
</div>
<div className="space-y-4">

<div>
<div className="flex justify-between items-center text-xs mb-1.5">
<span className="font-medium text-slate-700 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#474DEF] rounded-full"></span>
                        Hyperliquid
                      </span>
<span className="font-mono text-green-600">+14.2%</span>
</div>
<div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-[#474DEF] to-cyan-400 rounded-full w-[70%] animate-pulse"></div>
</div>
</div>

<div>
<div className="flex justify-between items-center text-xs mb-1.5">
<span className="font-medium text-slate-700 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                        dYdX Chain
                      </span>
<span className="font-mono text-green-600">+9.8%</span>
</div>
<div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full w-[45%] animate-pulse" style={{animationDelay: '0.5s'}}></div>
</div>
</div>

<div className="pt-2 mt-2 border-t border-slate-50">
<svg className="w-full h-12" preserveaspectratio="none" viewbox="0 0 100 30">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#474DEF" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#474DEF" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,25 Q10,20 20,22 T40,15 T60,20 T80,10 T100,18 V30 H0 Z" fill="url(#chartGradient)"></path>
<path className="path-animate" d="M0,25 Q10,20 20,22 T40,15 T60,20 T80,10 T100,18" fill="none" stroke="#474DEF" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-2 p-10 bg-[#474DEF] border border-white/10 rounded-3xl shadow-xl flex flex-col justify-between text-white relative overflow-hidden group feature-card opacity-0" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: '1'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white/10 border border-white/10 rounded-xl flex items-center justify-center mb-8 text-white">
<svg className="lucide lucide-trending-up w-6 h-6" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
</div>
<h3 className="text-2xl font-medium text-white mb-4 tracking-tight">
                  Sharpe 6.1 profile
                </h3>
<p className="text-blue-100 leading-relaxed mb-8">
                  Deploy’s live strategy delivers institutional-grade returns:
                  stable, repeatable carry rather than directional speculation
                </p>
<div className="mt-auto pt-8 border-t border-white/10">
<div className="flex items-end gap-2 mb-2">
<span className="text-4xl font-serif text-white">6.1</span>
<span className="text-sm text-blue-200 mb-1">Ratio</span>
</div>
<div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
<div className="bg-white h-full w-[85%]"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 p-10 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 group relative overflow-hidden feature-card opacity-0" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: '1'}}>

<div className="relative z-10 max-w-sm">
<div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-6 text-[#474DEF]">
<svg className="lucide lucide-fingerprint w-6 h-6" data-lucide="fingerprint" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path>
<path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path>
<path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path>
<path d="M2 12a10 10 0 0 1 18-6"></path>
<path d="M2 16h.01"></path>
<path d="M21.8 16c.2-2 .131-5.354 0-6"></path>
<path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path>
<path d="M8.65 22c.21-.66.45-1.32.57-2"></path>
<path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-black mb-2 tracking-tight">
                  Zero custody.
                </h3>
<p className="text-slate-500 leading-relaxed">
                  Your keys stay with you — our execution layer manages hedging,
                  rebalancing, and safeguards without ever taking possession of
                  capital.
                </p>
</div>

<div className="absolute -right-4 top-1/2 -translate-y-1/2 w-[340px] bg-[#1e293b] border border-slate-700 rounded-lg shadow-2xl p-4 transform translate-x-8 md:translate-x-0 md:rotate-[2deg] group-hover:rotate-0 transition-all duration-500 hover:scale-[1.02]">

<div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-700/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
</div>
<span className="text-[10px] font-mono text-slate-400 ml-auto">
                    enclave_status.log
                  </span>
</div>

<div className="space-y-3 font-mono text-[11px]">
<div className="flex justify-between items-center p-2 rounded bg-slate-800/50 border border-slate-700/50">
<span className="text-slate-300">Custody_Type</span>
<span className="text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded">
                      Self_Hosted
                    </span>
</div>
<div className="flex justify-between items-center p-2 rounded bg-slate-800/50 border border-slate-700/50">
<span className="text-slate-300">Withdrawal_Auth</span>
<span className="text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded">
                      Restricted::User
                    </span>
</div>
<div className="flex justify-between items-center p-2 rounded bg-slate-800/50 border border-slate-700/50">
<span className="text-slate-300">Permissions</span>
<div className="flex items-center gap-1 text-green-400">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>Trade_Only</span>
</div>
</div>

<div className="pt-1 flex gap-2 items-center text-slate-500">
<span className="animate-pulse">&gt;</span>
<span>Monitoring signature requests...</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y overflow-hidden bg-[#050505] border-white/5 pt-24 pb-24 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#474DEF] rounded-full blur-[150px] opacity-[0.06] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">

<div className="flex flex-col">
<div className="mb-10">
<span className="inline-flex items-center px-3 py-1.5 rounded border border-[#474DEF]/30 bg-[#474DEF]/5 text-[#474DEF] text-[10px] font-mono tracking-widest uppercase">
                  Coming Soon
                </span>
</div>
<h2 className="text-6xl md:text-8xl font-semibold text-white tracking-tighter mb-8">
                dUSD
                <span className="text-[#474DEF]">.</span>
</h2>
<p className="text-lg text-slate-400 font-light leading-relaxed max-w-lg mb-12">
                Our first product, dUSD, is a productive dollar position that
                earns. dUSD has achieved 22.6% average APY at size, during the
                6-month beta, with a max drawdown of 2%.
              </p>
<p className="text-slate-400 font-light mb-8 max-w-lg">
                We are rolling out dUSD in the coming months to select users.
              </p>
<div className=""></div>
</div>

<div className="relative">

<div className="hidden lg:block absolute top-1/2 -left-20 -translate-y-1/2 w-12 h-8 bg-[#474DEF] rounded-full blur-md opacity-60 animate-pulse"></div>
<div className="bg-[#0B0F17] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group hover:border-[#474DEF]/30 transition-colors duration-500">

<div className="absolute inset-0 bg-gradient-to-b from-[#474DEF]/5 to-transparent pointer-events-none"></div>

<div className="flex justify-between items-center mb-12 relative z-10">
<span className="text-xs font-mono text-slate-500 tracking-widest uppercase">
                    Yield_Performance_L12M
                  </span>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#474DEF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#474DEF]"></span>
</span>
<span className="text-xs text-slate-400 font-medium">Beta</span>
</div>
</div>

<div className="relative h-[220px] w-full mb-8">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="h-px bg-white/5 w-full"></div>
<div className="h-px bg-white/5 w-full"></div>
<div className="h-px bg-white/5 w-full"></div>
</div>

<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="lineGradient" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#474DEF" stop-opacity="0.5"></stop>
<stop offset="50%" stop-color="#474DEF" stop-opacity="0.8"></stop>
<stop offset="100%" stop-color="#60a5fa" stop-opacity="1"></stop>
</lineargradient>
<lineargradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#474DEF" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#474DEF" stop-opacity="0"></stop>
</lineargradient>
<filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="2"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>

<path className="path-animate" d="M0,90 C20,80 40,85 55,60 C70,35 85,45 100,25" fill="none" filter="url(#glow)" stroke="url(#lineGradient)" strokeWidth="1.5"></path>

<circle cx="55" cy="60" fill="#0B0F17" r="1.5" stroke="#474DEF" strokeWidth="1"></circle>
<circle cx="85" cy="45" fill="#0B0F17" r="1.5" stroke="#474DEF" strokeWidth="1"></circle>
<circle cx="100" cy="25" fill="#0B0F17" r="1.5" stroke="#60a5fa" strokeWidth="1"></circle>

<path d="M0,90 C20,80 40,85 55,60 C70,35 85,45 100,25 V110 H0 Z" fill="url(#areaGradient)"></path>
</svg>
</div>

<div className="flex justify-between items-end relative z-10 border-t border-white/5 pt-6">
<div>
<div className="text-[10px] text-slate-500 font-mono uppercase mb-2 tracking-wider">
                      Current APY
                    </div>
<div className="text-5xl font-medium text-white tracking-tight">
                      22.6
                      <span className="text-2xl text-slate-500 ml-1">%</span>
</div>
</div>
<div className="text-right pb-1">
<div className="text-[10px] text-slate-500 font-mono uppercase mb-1 tracking-wider">
                      Spread
                    </div>
<div className="text-sm font-mono text-[#474DEF]">+0.04%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#474DEF] text-blue-100 overflow-hidden relative code-section">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">
<div className="">
<div className="flex items-center gap-2 mb-6 text-white">
<svg className="lucide lucide-terminal w-5 h-5" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19h8"></path>
<path d="m4 17 6-6-6-6"></path>
</svg>
<span className="text-sm font-mono uppercase tracking-widest">
                  Developers
                </span>
</div>
<h2 className="text-4xl md:text-5xl text-white mb-6 font-sans tracking-tighter">
                Built for Composability.
              </h2>
<p className="text-lg font-light mb-8 max-w-md">
                Integrate basis yield directly into your dApp, wallet, or
                fintech application with our SDK. ERC-4626 standard compliant.
              </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center shrink-0 font-serif">
                    1
                  </div>
<div className="">
<h4 className="text-white font-medium mb-1">
                      Single-Click Integration
                    </h4>
<p className="text-sm">
                      Standardized vault interface for easy adoption.
                    </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center shrink-0 font-serif">
                    2
                  </div>
<div>
<h4 className="text-white font-medium mb-1">Real-time Data</h4>
<p className="text-sm">
                      Sub-second updates via GraphQL indexer.
                    </p>
</div>
</div>
</div>
<div className="mt-10">
<a className="text-white border-b border-white/40 hover:text-white hover:border-white transition-colors pb-1 inline-flex items-center gap-2" href="#">
                  Read the Documentation
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="bg-[#1e293b]/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden shadow-2xl code-block opacity-0" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: '1'}}>
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-700 bg-[#1e293b]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<span className="text-xs font-mono text-slate-500">deposit.ts</span>
</div>
<div className="p-6 overflow-x-auto code-scroll">
<pre className="font-mono text-sm leading-relaxed"><span className="text-purple-400">import</span> { DeploySDK } <span className="text-purple-400">from</span> <span className="text-green-400">'@deploy-finance/sdk'</span>;

<span className="text-slate-500">// Initialize SDK</span>
<span className="text-purple-400">const</span> deploy = <span className="text-purple-400">new</span> DeploySDK({
  provider: window.ethereum,
  network: <span className="text-green-400">'mainnet'</span>
});

<span className="text-slate-500">// Approve and Deposit USDC</span>
<span className="text-purple-400">await</span> deploy.vaults.<span className="text-blue-400">deposit</span>({
  token: <span className="text-green-400">'USDC'</span>,
  amount: <span className="text-orange-400">10000</span>,
  onProgress: (<span className="text-orange-400">status</span>) =&gt; {
    console.<span className="text-blue-400">log</span>(<span className="text-green-400">`Transaction Status: ${status}`</span>);
  }
});

<span className="text-slate-500">// Monitor Yield</span>
<span className="text-purple-400">const</span> yield = <span className="text-purple-400">await</span> deploy.analytics.<span className="text-blue-400">getAPY</span>();
</pre>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-6xl text-black mb-8 tracking-tighter font-sans">
            Ready to deploy?
          </h2>
<p className="text-slate-500 mb-12 text-lg max-w-xl mx-auto font-light">
            Join thousands of allocators generating productive yield on their
            idle stablecoins today.
          </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-[#474DEF] text-white px-8 py-4 rounded-lg text-sm font-medium hover:bg-[#3b3fe0] transition-colors shadow-xl shadow-[#474DEF]/30 hover:-translate-y-1">
              Launch Application
            </button>
<button className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
              Contact Sales
            </button>
</div>
</div>
</section>

<section className="py-24 bg-white relative z-10 border-t border-slate-100" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[#474DEF] font-mono text-xs uppercase tracking-widest font-medium block mb-4">
              Support
            </span>
<h2 className="text-3xl md:text-5xl text-black font-sans tracking-tighter mb-4">
              Frequently Asked Questions
            </h2>
</div>
<div className="border-t border-slate-100">
<div className="border-b border-slate-100">
<button className="w-full py-6 flex items-center justify-between text-left focus:outline-none group faq-btn">
<span className="text-lg font-medium text-slate-900 group-hover:text-[#474DEF] transition-colors">
                  What is Deploy?
                </span>
<span className="relative flex items-center justify-center w-8 h-8 bg-slate-50 rounded-full group-hover:bg-[#474DEF] transition-colors">
<svg className="lucide lucide-plus w-4 h-4 text-slate-400 group-hover:text-white transition-transform duration-300 icon-plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</span>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out faq-content">
<p className="pb-6 text-slate-500 leading-relaxed">
                  A self-custodial execution engine that turns idle capital into
                  productive base assets.
                </p>
</div>
</div>
<div className="border-b border-slate-100">
<button className="w-full py-6 flex items-center justify-between text-left focus:outline-none group faq-btn">
<span className="text-lg font-medium text-slate-900 group-hover:text-[#474DEF] transition-colors">
                  What is dUSD?
                </span>
<span className="relative flex items-center justify-center w-8 h-8 bg-slate-50 rounded-full group-hover:bg-[#474DEF] transition-colors">
<svg className="lucide lucide-plus w-4 h-4 text-slate-400 group-hover:text-white transition-transform duration-300 icon-plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</span>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out faq-content">
<p className="pb-6 text-slate-500 leading-relaxed">
                  A high-yield, productive dollar that earns through basis
                  funding spreads.
                </p>
</div>
</div>
<div className="border-b border-slate-100">
<button className="w-full py-6 flex items-center justify-between text-left focus:outline-none group faq-btn">
<span className="text-lg font-medium text-slate-900 group-hover:text-[#474DEF] transition-colors">
                  Where does yield come from?
                </span>
<span className="relative flex items-center justify-center w-8 h-8 bg-slate-50 rounded-full group-hover:bg-[#474DEF] transition-colors">
<svg className="lucide lucide-plus w-4 h-4 text-slate-400 group-hover:text-white transition-transform duration-300 icon-plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</span>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out faq-content">
<p className="pb-6 text-slate-500 leading-relaxed">
                  dUSD earns by capturing perpetual funding spreads — a
                  persistent, market-structural source of return, not dependent
                  on token incentives or price direction.
                </p>
</div>
</div>
<div className="border-b border-slate-100">
<button className="w-full py-6 flex items-center justify-between text-left focus:outline-none group faq-btn">
<span className="text-lg font-medium text-slate-900 group-hover:text-[#474DEF] transition-colors">
                  How do I know funds are safe?
                </span>
<span className="relative flex items-center justify-center w-8 h-8 bg-slate-50 rounded-full group-hover:bg-[#474DEF] transition-colors">
<svg className="lucide lucide-plus w-4 h-4 text-slate-400 group-hover:text-white transition-transform duration-300 icon-plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</span>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out faq-content">
<p className="pb-6 text-slate-500 leading-relaxed">
                  No pooled custody. Positions remain user-owned, transparently
                  observable on-chain.
                </p>
</div>
</div>
<div className="border-b border-slate-100">
<button className="w-full py-6 flex items-center justify-between text-left focus:outline-none group faq-btn">
<span className="text-lg font-medium text-slate-900 group-hover:text-[#474DEF] transition-colors">
                  Who is the team?
                </span>
<span className="relative flex items-center justify-center w-8 h-8 bg-slate-50 rounded-full group-hover:bg-[#474DEF] transition-colors">
<svg className="lucide lucide-plus w-4 h-4 text-slate-400 group-hover:text-white transition-transform duration-300 icon-plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</span>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out faq-content">
<p className="pb-6 text-slate-500 leading-relaxed">
                  Deploy is built by the ex-founding team of a quant fund
                  managing over $100m in TVL, and ex LLoyds Bank.
                </p>
</div>
</div>
<div className="border-b border-slate-100">
<button className="w-full py-6 flex items-center justify-between text-left focus:outline-none group faq-btn">
<span className="text-lg font-medium text-slate-900 group-hover:text-[#474DEF] transition-colors">
                  What makes this robust?
                </span>
<span className="relative flex items-center justify-center w-8 h-8 bg-slate-50 rounded-full group-hover:bg-[#474DEF] transition-colors">
<svg className="lucide lucide-plus w-4 h-4 text-slate-400 group-hover:text-white transition-transform duration-300 icon-plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</span>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out faq-content">
<p className="pb-6 text-slate-500 leading-relaxed">
                  Live since 2018. Survived every major volatility cycle with
                  consistent performance -
                  <a className="text-[#474DEF] hover:underline" href="#">
                    read more
                  </a>
                  .
                </p>
</div>
</div>
<div className="border-b border-slate-100">
<button className="w-full py-6 flex items-center justify-between text-left focus:outline-none group faq-btn">
<span className="text-lg font-medium text-slate-900 group-hover:text-[#474DEF] transition-colors">
                  Is dUSD audited?
                </span>
<span className="relative flex items-center justify-center w-8 h-8 bg-slate-50 rounded-full group-hover:bg-[#474DEF] transition-colors">
<svg className="lucide lucide-plus w-4 h-4 text-slate-400 group-hover:text-white transition-transform duration-300 icon-plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</span>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out faq-content">
<p className="pb-6 text-slate-500 leading-relaxed">
                  Yes — Halborn. Additional audit partners in progress.
                </p>
</div>
</div>
</div>
</div>
</section>
<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-12 text-sm">
<div className="col-span-2">
<a className="text-xl font-medium tracking-tight text-slate-900 block mb-6" href="#">
              Deploy
            </a>
<div className="flex gap-4 mb-8">
<a className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#474DEF] hover:border-[#474DEF] transition-all" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#474DEF] hover:border-[#474DEF] transition-all" href="#">
<svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
<a className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#474DEF] hover:border-[#474DEF] transition-all" href="#">
<svg className="lucide lucide-disc w-4 h-4" data-lucide="disc" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="2"></circle>
</svg>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Protocol</h4>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-[#474DEF]" href="#">Vaults</a></li>
<li><a className="hover:text-[#474DEF]" href="#">Stats</a></li>
<li><a className="hover:text-[#474DEF]" href="#">Governance</a></li>
<li><a className="hover:text-[#474DEF]" href="#">Bug Bounty</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Developers</h4>
<ul className="space-y-3 text-slate-500">
<li>
<a className="hover:text-[#474DEF]" href="#">Documentation</a>
</li>
<li><a className="hover:text-[#474DEF]" href="#">SDK</a></li>
<li><a className="hover:text-[#474DEF]" href="#">Audits</a></li>
<li><a className="hover:text-[#474DEF]" href="#">GitHub</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-[#474DEF]" href="#">Terms</a></li>
<li><a className="hover:text-[#474DEF]" href="#">Privacy</a></li>
<li><a className="hover:text-[#474DEF]" href="#">Risks</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2024 Deploy Labs. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span>All Systems Operational</span>
</div>
</div>
</footer>
</main>



    </>
  );
}
