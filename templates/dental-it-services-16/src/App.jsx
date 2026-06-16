import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
bratt: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb',
900: '#1e3a8a',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



// --- THREE.JS ---
const canvas = document.getElementById('webgl-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 18);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const globeGroup = new THREE.Group();
scene.add(globeGroup);

// Adjusted colors for light theme
const geometry = new THREE.IcosahedronGeometry(5, 2);
const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0x93c5fd, wireframe: true, transparent: true, opacity: 0.3 });
const coreSphere = new THREE.Mesh(geometry, wireframeMaterial);
globeGroup.add(coreSphere);

const shieldGeometry = new THREE.IcosahedronGeometry(5.15, 4);
const vertexShader = `
  varying vec3 vNormal; varying vec3 vPosition;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const fragmentShader = `
  varying vec3 vNormal; varying vec3 vPosition;
  void main() {
    vec3 viewDirection = normalize(-vPosition);
    float fresnel = clamp(1.0 - dot(viewDirection, vNormal), 0.0, 1.0);
    fresnel = pow(fresnel, 4.0);
    vec3 rimColor = vec3(0.576, 0.768, 0.992); // light blue
    gl_FragColor = vec4(rimColor, fresnel * 0.4);
  }
`;
// Normal blending to show on white bg
const shieldMaterial = new THREE.ShaderMaterial({ vertexShader, fragmentShader, transparent: true, blending: THREE.NormalBlending, depthWrite: false });
globeGroup.add(new THREE.Mesh(shieldGeometry, shieldMaterial));

const particleCount = 150;
const particleGeometry = new THREE.BufferGeometry();
const particlePositions = new Float32Array(particleCount * 3);
for(let i = 0; i < particleCount; i++) {
  const r = 6.5 + Math.random() * 7.5;
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos((Math.random() * 2) - 1);
  particlePositions[i*3] = r * Math.sin(phi) * Math.cos(theta);
  particlePositions[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
  particlePositions[i*3+2] = r * Math.cos(phi);
}
particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
// Darker blue particles for light theme
const particles = new THREE.Points(particleGeometry, new THREE.PointsMaterial({ size: 0.06, color: 0x3b82f6, transparent: true, opacity: 0.4, blending: THREE.NormalBlending }));
globeGroup.add(particles);

const clock = new THREE.Clock();
function animate() {
  const t = clock.getElapsedTime();
  globeGroup.rotation.y = t * 0.03;
  globeGroup.rotation.x = t * 0.01;
  const s = 1 + Math.sin(t * 0.5) * 0.015;
  globeGroup.scale.set(s, s, s);
  particles.rotation.y = t * -0.015;
  particles.rotation.z = t * 0.005;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// --- GSAP ---
gsap.registerPlugin(ScrollTrigger);

const tl3D = gsap.timeline({
  scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1.5 }
});
tl3D.to(camera.position, { z: 24, y: -2, ease: "power1.inOut", duration: 1 }, 0)
  .to(wireframeMaterial.color, { r: 0.8, g: 0.8, b: 0.9, ease: "power1.inOut", duration: 1 }, 0)
  .to(globeGroup.position, { x: 5, ease: "power1.inOut", duration: 1 }, 0)
  .to(globeGroup.position, { y: -10, x: 0, duration: 1.5, ease: "power2.inOut" }, 1)
  .to(globeGroup.rotation, { x: Math.PI / 2, duration: 1.5 }, 1)
  .to(globeGroup.position, { y: 0, z: -5, duration: 1.5 }, 2.5)
  .to(globeGroup.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 1.5 }, 2.5)
  .to(globeGroup.position, { y: -20, z: -20, duration: 2 }, 4);

gsap.utils.toArray('.gs-reveal').forEach(elem => {
  gsap.fromTo(elem, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: elem, start: "top 85%" } });
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<canvas height="1990" id="webgl-canvas" style={{width: '1800px', height: '995px'}} width="3600"></canvas>

<header className="fixed -translate-x-1/2 glass-panel flex w-[92%] max-w-5xl z-50 rounded-full py-3 pr-3 pl-6 top-6 left-1/2 shadow-sm items-center justify-between">
<div className="flex-1 flex justify-start items-center gap-2">
<iconify-icon className="text-bratt-500 text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base font-semibold tracking-wide text-zinc-900">BRATT TECHNOLOGY</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-xs tracking-wide font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#how-it-works">Process</a>
<a className="hover:text-zinc-900 transition-colors" href="#features">Solutions</a>
<a className="hover:text-zinc-900 transition-colors" href="#pricing">Engagement</a>
<a className="hover:text-zinc-900 transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex-1 flex justify-end gap-3 items-center">
<a className="hidden md:inline text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors px-4 py-2" href="#">Client Portal</a>
<a className="text-sm font-medium bg-bratt-500 text-white px-6 py-2 rounded-full hover:bg-bratt-600 transition-all glow-button" href="#">Book Consultation</a>
</div>
</header>

<section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-32">
<div className="max-w-[860px] flex flex-col items-center z-10 gs-reveal mt-12">
<div className="flex items-center gap-2 border border-zinc-200 rounded-full px-4 py-1.5 mb-8 bg-zinc-50/50 backdrop-blur-sm shadow-sm">
<div className="w-2 h-2 rounded-full bg-bratt-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
<span className="text-xs font-medium tracking-wide text-zinc-600">Trusted by modern dental practices nationwide</span>
</div>
<h1 className="text-5xl md:text-7xl leading-[1.1] mb-6 tracking-tight font-medium text-zinc-900">
      Enterprise Data Infrastructure<br/>
<span className="text-zinc-400">for Modern Dentistry.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-[720px] mb-10 font-normal leading-relaxed">
      Strategic consulting for dental practices across the U.S. We provide immutable backup, rapid data recovery, and specialized CRM solutions to secure your practice’s future.
    </p>
<div className="flex flex-col sm:flex-row gap-4 items-center mb-12">
<a className="bg-bratt-500 text-white font-medium tracking-wide text-sm px-8 py-3.5 rounded-full glow-button flex items-center gap-2" href="#">
        Start Assessment <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="bg-white text-zinc-700 border border-zinc-200 font-medium tracking-wide text-sm px-8 py-3.5 rounded-full hover:bg-zinc-50 transition-colors shadow-sm" href="#features">
        Explore Solutions
      </a>
</div>
</div>
</section>

<section className="z-10 flex flex-col pt-20 pb-32 px-6 relative items-center bg-zinc-50/50 border-y border-zinc-100" id="features">
<div className="text-center mb-16 gs-reveal max-w-2xl mx-auto">
<span className="text-xs uppercase tracking-widest font-semibold mb-4 block text-bratt-500">Core Capabilities</span>
<h2 className="text-4xl md:text-5xl mb-4 font-medium tracking-tight text-zinc-900">Built for the demands<br/>of clinical data.</h2>
<p className="text-zinc-500 leading-relaxed font-normal">We implement architecture that prevents downtime and ensures HIPAA compliance automatically.</p>
</div>
<div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

<div className="bg-white rounded-3xl border border-zinc-200 shadow-sm p-8 flex flex-col justify-between group hover:shadow-md transition-shadow h-[420px] relative overflow-hidden gs-reveal">
<div className="absolute -right-10 -top-10 w-64 h-64 bg-bratt-50 rounded-full blur-3xl group-hover:bg-bratt-100 transition-colors opacity-50"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-bratt-50 border border-bratt-100 flex items-center justify-center mb-6 text-bratt-500 text-2xl">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3">Immutable Backups</h3>
<p className="text-zinc-500 leading-relaxed font-normal max-w-sm">Ransomware-proof protection for your patient database. Data is written once and cannot be altered or deleted by malicious actors.</p>
</div>
<div className="relative z-10 mt-8 bg-zinc-50 rounded-2xl border border-zinc-100 p-6">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-zinc-500">Latest Snapshot Status</span>
<span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Secured
          </span>
</div>
<div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
<div className="w-full h-full bg-emerald-500 rounded-full"></div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl border border-zinc-200 shadow-sm p-8 flex flex-col justify-between group hover:shadow-md transition-shadow h-[420px] relative overflow-hidden gs-reveal">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-bratt-50 border border-bratt-100 flex items-center justify-center mb-6 text-bratt-500 text-2xl">
<iconify-icon icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3">Rapid Data Recovery</h3>
<p className="text-zinc-500 leading-relaxed font-normal max-w-sm">Near-zero downtime restoration services. If disaster strikes, we spin up your infrastructure instantly so patient care continues uninterrupted.</p>
</div>
<div className="relative z-10 mt-8 flex items-end gap-4 h-32 w-full pt-4 border-b border-zinc-100">
<div className="w-1/5 bg-zinc-100 h-[20%] rounded-t-md relative group-hover:bg-zinc-200 transition-colors"></div>
<div className="w-1/5 bg-zinc-100 h-[40%] rounded-t-md relative group-hover:bg-zinc-200 transition-colors"></div>
<div className="w-1/5 bg-red-50 border border-red-100 h-[10%] rounded-t-md relative flex items-center justify-center">
<iconify-icon className="text-red-500 text-xs" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-1/5 bg-bratt-500 h-[90%] rounded-t-md relative shadow-sm flex justify-center items-start pt-2">
<span className="text-[10px] text-white font-medium">&lt; 15m</span>
</div>
<div className="w-1/5 bg-bratt-100 h-[100%] rounded-t-md relative"></div>
</div>
</div>

<div className="bg-white rounded-3xl border border-zinc-200 shadow-sm p-8 flex flex-col justify-between group hover:shadow-md transition-shadow h-[420px] relative overflow-hidden gs-reveal">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-bratt-50 border border-bratt-100 flex items-center justify-center mb-6 text-bratt-500 text-2xl">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3">Bratt CRM</h3>
<p className="text-zinc-500 leading-relaxed font-normal max-w-sm">Specialized practice management tools built specifically for the dental industry, optimizing scheduling, billing, and patient communications.</p>
</div>
<div className="relative z-10 mt-8 bg-zinc-50 rounded-2xl border border-zinc-100 p-4 shadow-inner flex flex-col gap-3">
<div className="bg-white p-3 rounded-xl border border-zinc-200 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 text-xs">JD</div>
<div>
<p className="text-sm font-medium text-zinc-900">John Doe <span className="text-xs text-zinc-400 font-normal ml-1">#8832</span></p>
<p className="text-xs text-zinc-500">Root Canal Consultation</p>
</div>
</div>
<span className="text-xs font-medium text-bratt-600 bg-bratt-50 px-2 py-1 rounded border border-bratt-100">09:00 AM</span>
</div>
<div className="bg-white p-3 rounded-xl border border-zinc-200 flex items-center justify-between shadow-sm opacity-60">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 text-xs">SW</div>
<div>
<p className="text-sm font-medium text-zinc-900">Sarah Williams</p>
<p className="text-xs text-zinc-500">Routine Cleaning</p>
</div>
</div>
<span className="text-xs font-medium text-zinc-500 bg-zinc-50 px-2 py-1 rounded border border-zinc-200">10:30 AM</span>
</div>
</div>
</div>

<div className="bg-white rounded-3xl border border-zinc-200 shadow-sm p-8 flex flex-col justify-between group hover:shadow-md transition-shadow h-[420px] relative overflow-hidden gs-reveal">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-bratt-50 border border-bratt-100 flex items-center justify-center mb-6 text-bratt-500 text-2xl">
<iconify-icon icon="solar:server-square-update-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3">Backend Testing</h3>
<p className="text-zinc-500 leading-relaxed font-normal max-w-sm">Stress-testing and optimizing your practice's digital infrastructure. We identify bottlenecks before they impact your daily operations.</p>
</div>
<div className="relative z-10 mt-8 grid grid-cols-2 gap-4">
<div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-5 flex flex-col">
<span className="text-xs font-medium text-zinc-500 mb-1">Database Latency</span>
<span className="text-3xl font-medium tracking-tight text-zinc-900">12<span className="text-sm text-zinc-500 font-normal ml-1">ms</span></span>
<span className="text-xs text-emerald-600 mt-2 flex items-center gap-1"><iconify-icon icon="solar:arrow-right-down-linear"></iconify-icon> Optimized</span>
</div>
<div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-5 flex flex-col">
<span className="text-xs font-medium text-zinc-500 mb-1">Network Uptime</span>
<span className="text-3xl font-medium tracking-tight text-zinc-900">100<span className="text-sm text-zinc-500 font-normal ml-1">%</span></span>
<span className="text-xs text-emerald-600 mt-2 flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Verified</span>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 md:px-20 py-24 relative bg-white border-b border-zinc-100">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="gs-reveal">
<div className="text-4xl md:text-5xl font-medium text-zinc-900 stat-number mb-3 tracking-tight">15<span className="text-2xl">m</span></div>
<p className="text-sm text-zinc-500 font-medium">Max recovery time SLA</p>
</div>
<div className="gs-reveal">
<div className="text-4xl md:text-5xl font-medium text-zinc-900 stat-number mb-3 tracking-tight">99.99<span className="text-2xl">%</span></div>
<p className="text-sm text-zinc-500 font-medium">Infrastructure uptime</p>
</div>
<div className="gs-reveal">
<div className="text-4xl md:text-5xl font-medium text-zinc-900 stat-number mb-3 tracking-tight">500<span className="text-2xl">+</span></div>
<p className="text-sm text-zinc-500 font-medium">Dental practices secured</p>
</div>
<div className="gs-reveal">
<div className="text-4xl md:text-5xl font-medium text-zinc-900 stat-number mb-3 tracking-tight">0</div>
<p className="text-sm text-zinc-500 font-medium">Ransomware breaches</p>
</div>
</div>
</div>
</section>

<section className="min-h-screen z-10 md:px-20 flex py-32 relative items-center bg-white" id="how-it-works">
<div className="w-full max-w-6xl mx-auto px-8">
<div className="text-center mb-24 max-w-2xl mx-auto">
<span className="text-xs uppercase tracking-widest font-semibold mb-4 block text-bratt-500">Engagement Model</span>
<h2 className="text-4xl md:text-5xl mb-6 font-medium text-zinc-900 tracking-tight leading-tight">A seamless transition<br/>for your practice.</h2>
<p className="text-zinc-500 text-base leading-relaxed max-w-md mx-auto">
      We handle the technical complexity so your staff can focus entirely on patient care. No disruptions, no downtime.
    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 px-4">
<div className="flex flex-col bg-zinc-50 border border-zinc-200 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-lg group">
<div className="p-8 flex-1 flex flex-col">
<div className="flex items-center justify-between mb-10">
<div className="w-10 h-10 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-sm font-semibold text-zinc-900 shadow-sm">
          01</div>
<span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">Audit</span>
</div>
<div className="mb-8 flex-1">
<h3 className="text-xl font-semibold mb-3 tracking-tight text-zinc-900">Infrastructure Assessment</h3>
<p className="text-zinc-500 text-sm leading-relaxed font-normal">
          We perform a comprehensive evaluation of your current network, data storage, and software stack to identify vulnerabilities.
        </p>
</div>
</div>
</div>
<div className="flex flex-col bg-zinc-50 border border-zinc-200 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-lg group">
<div className="p-8 flex-1 flex flex-col">
<div className="flex items-center justify-between mb-10">
<div className="w-10 h-10 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-sm font-semibold text-zinc-900 shadow-sm">
          02</div>
<span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">Deployment</span>
</div>
<div className="mb-8 flex-1">
<h3 className="text-xl font-semibold mb-3 tracking-tight text-zinc-900">Modernization &amp; Migration</h3>
<p className="text-zinc-500 text-sm leading-relaxed font-normal">
          We deploy immutable backups, upgrade your network hardware if needed, and integrate Bratt CRM without interrupting business hours.
        </p>
</div>
</div>
</div>
<div className="flex flex-col bg-bratt-50 border border-bratt-100 rounded-3xl overflow-hidden relative transition-all duration-500 hover:shadow-lg group">
<div className="p-8 flex-1 flex flex-col relative z-10">
<div className="flex items-center justify-between mb-10">
<div className="w-10 h-10 rounded-full border border-bratt-200 bg-white flex items-center justify-center text-sm font-semibold text-bratt-600 shadow-sm">
          03</div>
<span className="text-xs uppercase tracking-widest text-bratt-500 font-semibold">Management</span>
</div>
<div className="mb-8 flex-1">
<h3 className="text-xl font-semibold mb-3 tracking-tight text-zinc-900">Ongoing IT Partnership</h3>
<p className="text-zinc-600 text-sm leading-relaxed font-normal">
          Bratt Data LLC acts as your dedicated IT department. We monitor backups daily, perform backend stress tests, and provide instant support.
        </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-6 md:px-20 py-32 bg-zinc-50/50 border-y border-zinc-100">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-20 gs-reveal">
<span className="text-xs uppercase tracking-widest font-semibold mb-4 block text-bratt-500">Client Success</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900">Trusted by leading dental practices.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
<div className="flex flex-col bg-white border border-zinc-200 shadow-sm rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-md group">
<div className="p-8 flex-1 flex flex-col relative">
<div className="flex gap-4 mb-8 flex-1 relative z-10">
<iconify-icon className="text-zinc-200 text-4xl shrink-0" icon="solar:quote-left-bold"></iconify-icon>
<p className="text-zinc-600 text-sm leading-relaxed font-normal pt-1">
          When a ransomware attack hit our region, three other clinics lost weeks of patient data. Thanks to Bratt's immutable backups, we didn't lose a single file or a single hour of operation.
        </p>
</div>
</div>
<div className="p-6 border-t border-zinc-100 bg-zinc-50 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 font-medium text-lg">Dr.</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-zinc-900 tracking-tight">Dr. Sarah Jenkins</span>
<span className="text-xs text-zinc-500 mt-0.5">Lead Dentist, Horizon Dental</span>
</div>
</div>
</div>
<div className="flex flex-col bg-white border border-zinc-200 shadow-sm rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-md group">
<div className="p-8 flex-1 flex flex-col relative">
<div className="flex gap-4 mb-8 flex-1 relative z-10">
<iconify-icon className="text-zinc-200 text-4xl shrink-0" icon="solar:quote-left-bold"></iconify-icon>
<p className="text-zinc-600 text-sm leading-relaxed font-normal pt-1">
          Bratt CRM revolutionized our front desk. The integration between our patient scheduling and billing is flawless, and the dedicated IT support feels like having an in-house team.
        </p>
</div>
</div>
<div className="p-6 border-t border-zinc-100 bg-zinc-50 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 font-medium text-lg">MC</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-zinc-900 tracking-tight">Marcus Chen</span>
<span className="text-xs text-zinc-500 mt-0.5">Practice Administrator</span>
</div>
</div>
</div>
<div className="flex flex-col bg-white border border-zinc-200 shadow-sm rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-md group">
<div className="p-8 flex-1 flex flex-col relative">
<div className="flex gap-4 mb-8 flex-1 relative z-10">
<iconify-icon className="text-zinc-200 text-4xl shrink-0" icon="solar:quote-left-bold"></iconify-icon>
<p className="text-zinc-600 text-sm leading-relaxed font-normal pt-1">
          The transition was entirely seamless. They audited our outdated servers, migrated us to their secure infrastructure over the weekend, and we were fully operational by Monday morning.
        </p>
</div>
</div>
<div className="p-6 border-t border-zinc-100 bg-zinc-50 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 font-medium text-lg">Dr.</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-zinc-900 tracking-tight">Dr. Priya Patel</span>
<span className="text-xs text-zinc-500 mt-0.5">Founder, Quantus Orthodontics</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen relative z-10 px-6 md:px-20 py-32 bg-white" id="pricing">
<div className="w-full max-w-5xl mx-auto">
<div className="text-center mb-16 max-w-2xl mx-auto gs-reveal">
<span className="text-xs uppercase tracking-widest font-semibold mb-4 block text-bratt-500">Partnership Plans</span>
<h2 className="text-4xl md:text-5xl mb-6 font-medium tracking-tight text-zinc-900">Transparent consulting pricing.</h2>
<p className="text-zinc-500 leading-relaxed">Whether you are a single location or a growing regional network, we have a support tier designed for your scale.</p>
</div>
<div className="flex items-center justify-center">
<div className="flex flex-col md:flex-row overflow-hidden bg-white w-full border-zinc-200 border rounded-3xl shadow-lg relative">
<div className="flex-1 flex flex-col border-b md:border-b-0 md:border-r border-zinc-200 bg-zinc-50 hover:bg-white transition-colors duration-500">
<div className="px-8 lg:px-12 pt-12 pb-8">
<h3 className="text-2xl text-zinc-900 font-semibold mb-3 tracking-tight">Single Practice</h3>
<p className="text-zinc-500 text-sm leading-relaxed h-16 pr-4 font-normal">
            Essential data security, backups, and IT management for individual dental clinics.
          </p>
</div>
<div className="border-t border-b border-zinc-200 py-6 px-8 lg:px-12 flex justify-between items-center cursor-pointer hover:bg-zinc-100 text-zinc-900 transition-colors">
<span className="text-sm font-semibold">Request Quote</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</div>
<div className="px-8 lg:px-12 pt-8 pb-12 flex-1">
<ul className="space-y-5 text-sm text-zinc-600 font-medium">
<li className="flex items-center"><iconify-icon className="text-bratt-500 text-xl mr-3" icon="solar:check-circle-linear"></iconify-icon> Immutable Cloud Backups</li>
<li className="flex items-center"><iconify-icon className="text-bratt-500 text-xl mr-3" icon="solar:check-circle-linear"></iconify-icon> 24/7 Threat Monitoring</li>
<li className="flex items-center"><iconify-icon className="text-bratt-500 text-xl mr-3" icon="solar:check-circle-linear"></iconify-icon> Basic CRM Access</li>
<li className="flex items-center"><iconify-icon className="text-bratt-500 text-xl mr-3" icon="solar:check-circle-linear"></iconify-icon> Helpdesk Support</li>
</ul>
</div>
</div>
<div className="flex-1 flex flex-col bg-white relative">
<div className="absolute top-0 left-0 w-full h-1 bg-bratt-500"></div>
<div className="px-8 lg:px-12 pt-12 pb-8 relative z-10">
<div className="flex items-center justify-between mb-3">
<h3 className="text-2xl text-zinc-900 font-semibold tracking-tight">Regional Network</h3>
<span className="px-3 py-1 text-[10px] font-semibold tracking-widest uppercase border rounded-full text-bratt-700 bg-bratt-50 border-bratt-200">Enterprise</span>
</div>
<p className="text-zinc-500 text-sm leading-relaxed h-16 pr-4 font-normal">
            Advanced infrastructure management and custom CRM deployment for multi-location practices.
          </p>
</div>
<div className="bg-bratt-500 text-white border-t border-b border-bratt-600 py-6 px-8 lg:px-12 flex justify-between items-center cursor-pointer hover:bg-bratt-600 transition-colors shadow-sm relative z-10">
<span className="text-sm font-semibold">Schedule Assessment</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</div>
<div className="px-8 lg:px-12 pt-8 pb-12 flex-1 relative z-10">
<ul className="space-y-5 text-sm text-zinc-600 font-medium">
<li className="flex items-center"><iconify-icon className="text-bratt-500 text-xl mr-3" icon="solar:check-circle-linear"></iconify-icon> Multi-Site Replication</li>
<li className="flex items-center"><iconify-icon className="text-bratt-500 text-xl mr-3" icon="solar:check-circle-linear"></iconify-icon> Priority Data Recovery SLA</li>
<li className="flex items-center"><iconify-icon className="text-bratt-500 text-xl mr-3" icon="solar:check-circle-linear"></iconify-icon> Full Bratt CRM Customization</li>
<li className="flex items-center"><iconify-icon className="text-bratt-500 text-xl mr-3" icon="solar:check-circle-linear"></iconify-icon> Dedicated Virtual CIO</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-6 md:px-20 py-32 bg-zinc-50/50 border-t border-zinc-100" id="faq">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16 gs-reveal">
<span className="text-xs uppercase tracking-widest font-semibold mb-4 block text-bratt-500">FAQ</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900">Common questions.</h2>
</div>
<div className="space-y-4">
<details className="bg-white border border-zinc-200 rounded-2xl group shadow-sm" open="">
<summary className="px-8 py-6 cursor-pointer text-zinc-900 font-semibold flex items-center justify-between list-none">
          What makes an "Immutable Backup" different?
          <iconify-icon className="text-zinc-400 group-open:rotate-180 transition-transform text-xl" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-8 pb-6 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4 mt-2">
          Immutable backups use a "Write Once, Read Many" (WORM) architecture. This means once your patient data is backed up, it cannot be altered, encrypted, or deleted by anyone—not even an administrator or ransomware. If your primary systems are attacked, you are guaranteed to have a clean, uninfected version of your data.
        </div>
</details>
<details className="bg-white border border-zinc-200 rounded-2xl group shadow-sm">
<summary className="px-8 py-6 cursor-pointer text-zinc-900 font-semibold flex items-center justify-between list-none">
          Is Bratt CRM HIPAA compliant out of the box?
          <iconify-icon className="text-zinc-400 group-open:rotate-180 transition-transform text-xl" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-8 pb-6 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4 mt-2">
          Yes. Bratt CRM is engineered specifically for the dental and medical industries. All data is encrypted at rest and in transit, user access is strictly controlled and logged, and we sign a Business Associate Agreement (BAA) with every client.
        </div>
</details>
<details className="bg-white border border-zinc-200 rounded-2xl group shadow-sm">
<summary className="px-8 py-6 cursor-pointer text-zinc-900 font-semibold flex items-center justify-between list-none">
          Will migration disrupt our daily appointments?
          <iconify-icon className="text-zinc-400 group-open:rotate-180 transition-transform text-xl" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-8 pb-6 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4 mt-2">
          Not at all. We handle infrastructure migrations entirely outside of your business hours. We prep the environment, run a parallel test over the weekend, and flip the switch when everything is verified. Your team simply logs in Monday morning to a faster, more secure system.
        </div>
</details>
<details className="bg-white border border-zinc-200 rounded-2xl group shadow-sm">
<summary className="px-8 py-6 cursor-pointer text-zinc-900 font-semibold flex items-center justify-between list-none">
          Do you support single-location practices?
          <iconify-icon className="text-zinc-400 group-open:rotate-180 transition-transform text-xl" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-8 pb-6 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4 mt-2">
          Absolutely. While we service large regional networks, individual practices are highly targeted by ransomware due to historically weaker IT setups. We provide enterprise-grade protection scaled appropriately for single locations.
        </div>
</details>
</div>
</div>
</section>

<section className="min-h-[60vh] relative z-10 flex flex-col justify-between pt-32 px-6 border-t border-zinc-200 bg-white">
<div className="flex-1 flex flex-col items-center justify-center text-center gs-reveal mb-24">
<h2 className="text-5xl md:text-6xl mb-6 font-medium tracking-tight text-zinc-900">Secure your practice's future.</h2>
<p className="text-zinc-500 mb-10 max-w-lg text-lg">Partner with Bratt Data LLC to ensure your patient records are untouchable and your operations never stop.</p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="bg-bratt-500 text-white font-medium px-10 py-4 rounded-full glow-button hover:-translate-y-0.5 transition-transform text-sm tracking-wide" href="#">
        Schedule Free Audit
      </a>
<a className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors font-medium px-6 py-4" href="#">
        Contact Sales
      </a>
</div>
</div>
<footer className="w-full pb-8 pt-10 border-t border-zinc-100 max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-bratt-500 text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg font-bold tracking-wide text-zinc-900">BRATT DATA LLC</span>
</div>
<p className="text-sm text-zinc-500 max-w-xs leading-relaxed">Enterprise data infrastructure and consulting for modern dental practices.</p>
</div>
<div className="flex gap-16 text-sm text-zinc-500">
<div className="space-y-4">
<p className="text-zinc-900 font-semibold uppercase tracking-widest text-xs">Solutions</p>
<a className="block hover:text-bratt-600 transition-colors" href="#">Immutable Backups</a>
<a className="block hover:text-bratt-600 transition-colors" href="#">Disaster Recovery</a>
<a className="block hover:text-bratt-600 transition-colors" href="#">Bratt CRM</a>
<a className="block hover:text-bratt-600 transition-colors" href="#">IT Auditing</a>
</div>
<div className="space-y-4">
<p className="text-zinc-900 font-semibold uppercase tracking-widest text-xs">Company</p>
<a className="block hover:text-bratt-600 transition-colors" href="#">About Us</a>
<a className="block hover:text-bratt-600 transition-colors" href="#">Case Studies</a>
<a className="block hover:text-bratt-600 transition-colors" href="#">Careers</a>
<a className="block hover:text-bratt-600 transition-colors" href="#">Contact</a>
</div>
<div className="space-y-4">
<p className="text-zinc-900 font-semibold uppercase tracking-widest text-xs">Legal</p>
<a className="block hover:text-bratt-600 transition-colors" href="#">Privacy Policy</a>
<a className="block hover:text-bratt-600 transition-colors" href="#">Terms of Service</a>
<a className="block hover:text-bratt-600 transition-colors" href="#">HIPAA Compliance</a>
<a className="block hover:text-bratt-600 transition-colors" href="#">BAA Details</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 pt-6 border-t border-zinc-100">
<p>© 2026 Bratt Data LLC. All rights reserved.</p>
<p className="mt-2 md:mt-0">HIPAA Compliant · SOC 2 Type II Certified</p>
</div>
</footer>
</section>



    </>
  );
}
