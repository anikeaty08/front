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



/* Animation on scroll when visible */
(function () {
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', function() {
        // Initialize Lucide Icons
        lucide.createIcons();

        // Mobile Menu Logic
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const iconMenu = document.getElementById('icon-menu');
        const iconClose = document.getElementById('icon-close');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        // Toggle menu on button click
        mobileMenuBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
          iconMenu.classList.toggle('hidden');
          iconClose.classList.toggle('hidden');
        });

        // Automatically close the menu when a link is clicked
        mobileLinks.forEach(link => {
          link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            iconMenu.classList.remove('hidden');
            iconClose.classList.add('hidden');
          });
        });
      });
    


      function googleTranslateElementInit() {
        new google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,tr,ar',
          autoDisplay: false
        }, 'google_translate_element');
      }

      function switchLang(lang) {
        document.querySelectorAll('.lang-btn').forEach(function(btn) {
          btn.classList.remove('active');
        });
        var activeBtn = document.getElementById('lang-' + lang);
        if (activeBtn) activeBtn.classList.add('active');

        if (lang === 'ar') {
          document.documentElement.setAttribute('dir', 'rtl');
        } else {
          document.documentElement.setAttribute('dir', 'ltr');
        }

        localStorage.setItem('nl_lang', lang);

        var select = document.querySelector('.goog-te-combo');
        if (select) {
          select.value = lang;
          select.dispatchEvent(new Event('change'));
        } else {
          setTimeout(function() { switchLang(lang); }, 500);
        }
      }

      window.addEventListener('DOMContentLoaded', function() {
        var enBtn = document.getElementById('lang-en');
        if (enBtn) enBtn.classList.add('active');
        var saved = localStorage.getItem('nl_lang');
        if (saved && saved !== 'en') {
          setTimeout(function() { switchLang(saved); }, 1200);
        }
      });
    


      uniform float uTime; uniform float uIntensity; uniform float uSpeed; uniform vec2 uMouse; varying vec3 vNormal; varying vec3 vPosition; varying float vDisplacement; vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); } vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; } float snoise(vec3 v){ const vec2 C = vec2(1.0/6.0, 1.0/3.0); const vec4 D = vec4(0.0, 0.5, 1.0, 2.0); vec3 i = floor(v + dot(v, C.yyy)); vec3 x0 = v - i + dot(i, C.xxx); vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1.0 - g; vec3 i1 = min(g.xyz, l.zxy); vec3 i2 = max(g.xyz, l.zxy); vec3 x1 = x0 - i1 + C.xxx; vec3 x2 = x0 - i2 + C.yyy; vec3 x3 = x0 - D.yyy; i = mod(i, 289.0); vec4 p = permute(permute(permute( i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0)); float n_ = 1.0 / 7.0; vec3 ns = n_ * D.wyz - D.xzx; vec4 j = p - 49.0 * floor(p * ns.z * ns.z); vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7.0 * x_); vec4 xn = x_ * ns.x + ns.yyyy; vec4 yn = y_ * ns.x + ns.yyyy; vec4 h = 1.0 - abs(xn) - abs(yn); vec4 b0 = vec4(xn.xy, yn.xy); vec4 b1 = vec4(xn.zw, yn.zw); vec4 s0 = floor(b0) * 2.0 + 1.0; vec4 s1 = floor(b1) * 2.0 + 1.0; vec4 sh = -step(h, vec4(0.0)); vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy; vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww; vec3 p0 = vec3(a0.xy, h.x); vec3 p1 = vec3(a0.zw, h.y); vec3 p2 = vec3(a1.xy, h.z); vec3 p3 = vec3(a1.zw, h.w); vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3))); p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w; vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0); m = m * m; return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3))); }
      void main() {
        vNormal = normalize(normalMatrix * normal);
        float n1 = snoise(position * 0.8 + uTime * uSpeed) * uIntensity;
        float n2 = snoise(position * 1.6 + uTime * uSpeed * 0.6) * uIntensity * 0.5;
        float n3 = snoise(position * 3.2 + uTime * uSpeed * 0.3) * uIntensity * 0.25;
        float displacement = n1 + n2 + n3;
        displacement += uMouse.x * sin(position.y * 2.5 + uTime * 0.5) * 0.1;
        displacement += uMouse.y * cos(position.x * 2.5 + uTime * 0.3) * 0.1;
        vec3 newPosition = position + normal * displacement;
        vDisplacement = displacement;
        vPosition = (modelMatrix * vec4(newPosition, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    


      precision highp float; uniform vec3 uColor1; uniform vec3 uColor2; uniform vec3 uColor3; uniform float uTime; uniform float uOpacity; varying vec3 vNormal; varying vec3 vPosition; varying float vDisplacement;
      void main() {
        vec3 viewDirection = normalize(cameraPosition - vPosition);
        float fresnel = pow(1.0 - abs(dot(viewDirection, vNormal)), 2.8);
        vec3 color = mix(uColor2, uColor1, smoothstep(-0.15, 0.35, vDisplacement));
        color = mix(color, uColor3, fresnel * 0.35);
        color += uColor1 * fresnel * 0.25;
        float alpha = (0.85 + fresnel * 0.15) * uOpacity;
        gl_FragColor = vec4(color, alpha);
      }
    


      class FormaScene {
        constructor() {
          this.canvas = document.getElementById('webgl');
          if (!this.canvas) return;
          this.width = window.innerWidth;
          this.height = window.innerHeight;
          this.mouse = { x: 0, y: 0, tx: 0, ty: 0 };
          this.scroll = { current: 0, target: 0 };
          this.init();
          this.createBlob();
          this.createWireframe();
          this.createParticles();
          this.createFloatingShapes();
          this.setupEvents();
          this.animate();
        }
        init() {
          this.scene = new THREE.Scene();
          this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 100);
          this.camera.position.set(0, 0, 5.5);
          this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
          this.renderer.setSize(this.width, this.height);
          this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          this.clock = new THREE.Clock();
        }
        createBlob() {
          const geo = new THREE.IcosahedronGeometry(1.8, 64);
          this.blobMat = new THREE.ShaderMaterial({
            vertexShader: document.getElementById('blobVertex').textContent,
            fragmentShader: document.getElementById('blobFragment').textContent,
            uniforms: {
              uTime: { value: 0 },
              uIntensity: { value: 0.38 },
              uSpeed: { value: 0.22 },
              uColor1: { value: new THREE.Color('#38bdf8') },
              uColor2: { value: new THREE.Color('#020617') },
              uColor3: { value: new THREE.Color('#e0f2fe') },
              uMouse: { value: new THREE.Vector2(0, 0) },
              uOpacity: { value: 1.0 },
            },
            transparent: true,
            depthWrite: false,
          });
          this.blob = new THREE.Mesh(geo, this.blobMat);
          this.blob.position.set(2.2, 0.2, 0);
          this.scene.add(this.blob);
        }
        createWireframe() {
          const geo = new THREE.IcosahedronGeometry(1.84, 16);
          const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#38bdf8'), wireframe: true, transparent: true, opacity: 0.05, depthWrite: false });
          this.wireframe = new THREE.Mesh(geo, mat);
          this.wireframe.position.copy(this.blob.position);
          this.scene.add(this.wireframe);
        }
        createParticles() {
          const count = 1800;
          const positions = new Float32Array(count * 3);
          for (let i = 0; i < count; i++) {
            const r = 6 + Math.random() * 12;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);
          }
          const geo = new THREE.BufferGeometry();
          geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
          const mat = new THREE.PointsMaterial({ size: 1.2, color: new THREE.Color('#38bdf8'), transparent: true, opacity: 0.25, sizeAttenuation: true, depthWrite: false });
          this.particles = new THREE.Points(geo, mat);
          this.scene.add(this.particles);
        }
        createFloatingShapes() {
          this.floaters = [];
          const shapes = [
            new THREE.OctahedronGeometry(0.12, 0),
            new THREE.TetrahedronGeometry(0.1, 0),
            new THREE.IcosahedronGeometry(0.08, 0),
          ];
          const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#38bdf8'), wireframe: true, transparent: true, opacity: 0.15 });
          for (let i = 0; i < 14; i++) {
            const mesh = new THREE.Mesh(shapes[i % shapes.length], mat.clone());
            mesh.position.set((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 6 - 2);
            mesh.userData = { speedX: (Math.random() - 0.5) * 0.3, speedY: (Math.random() - 0.5) * 0.3, origY: mesh.position.y, phase: Math.random() * Math.PI * 2 };
            this.floaters.push(mesh);
            this.scene.add(mesh);
          }
        }
        setupEvents() {
          window.addEventListener('mousemove', (e) => {
            this.mouse.tx = (e.clientX / this.width) * 2 - 1;
            this.mouse.ty = -(e.clientY / this.height) * 2 + 1;
          });
          window.addEventListener('resize', () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.camera.aspect = this.width / this.height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(this.width, this.height);
          });
          gsap.registerPlugin(ScrollTrigger);
          ScrollTrigger.create({
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            onUpdate: (self) => { this.scroll.target = self.progress; },
          });
        }
        animate() {
          requestAnimationFrame(() => this.animate());
          const t = this.clock.getElapsedTime();
          this.mouse.x += (this.mouse.tx - this.mouse.x) * 0.04;
          this.mouse.y += (this.mouse.ty - this.mouse.y) * 0.04;
          this.scroll.current += (this.scroll.target - this.scroll.current) * 0.06;
          const sp = this.scroll.current;
          this.blobMat.uniforms.uTime.value = t;
          this.blobMat.uniforms.uMouse.value.set(this.mouse.x, this.mouse.y);
          this.blobMat.uniforms.uIntensity.value = 0.38 + Math.sin(sp * Math.PI * 2) * 0.12;
          this.blob.position.x = 2.2 - sp * 4.4;
          this.blob.position.y = 0.2 + Math.sin(sp * Math.PI) * 0.8;
          const scale = 1.0 + Math.sin(sp * Math.PI) * 0.25;
          this.blob.scale.setScalar(scale);
          this.blob.rotation.x = t * 0.06 + this.mouse.y * 0.3;
          this.blob.rotation.y = t * 0.09 + this.mouse.x * 0.3;
          this.wireframe.position.copy(this.blob.position);
          this.wireframe.rotation.copy(this.blob.rotation);
          this.wireframe.scale.copy(this.blob.scale);
          const opacityCurve = 1.0 - Math.sin(sp * Math.PI) * 0.3;
          this.blobMat.uniforms.uOpacity.value = opacityCurve;
          this.wireframe.material.opacity = 0.05 * opacityCurve;
          this.particles.rotation.y = t * 0.015;
          this.particles.rotation.x = t * 0.008 + sp * 0.3;
          this.floaters.forEach((f) => {
            const d = f.userData;
            f.rotation.x = t * d.speedX;
            f.rotation.y = t * d.speedY;
            f.position.y = d.origY + Math.sin(t * 0.5 + d.phase) * 0.3;
          });
          this.renderer.render(this.scene, this.camera);
        }
      }
      window.addEventListener('DOMContentLoaded', () => {
        if (typeof THREE !== 'undefined' && typeof gsap !== 'undefined') {
          new FormaScene();
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<canvas id="webgl" style={{position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', zIndex: '-5', pointerEvents: 'none'}}></canvas>
<nav className="fixed bg-black/80 z-50 border-white/10 border-b top-0 right-0 left-0 backdrop-blur-xl animate-fadeSlideIn">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-lg font-thin italic text-white tracking-tight font-playfair" href="/home" translate="no">
              Neo Lumen
            </a>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="hover:text-white transition text-sm text-slate-300" href="/services-hub">
              Services
            </a>
<a className="hover:text-white transition text-sm text-slate-300" href="/case-studies-portfolio">
              Work
            </a>
<a className="hover:text-white transition text-sm text-slate-300" href="/about-us">
              About
            </a>
<a className="hover:text-white transition text-sm text-slate-300" href="/contact-us">
              Contact
            </a>
<div className="flex items-center gap-1 border-l border-white/10 pl-4 ml-2">
<button className="lang-btn text-sm text-slate-300 hover:text-white transition px-1.5 py-0.5 rounded font-medium" id="lang-en" onclick="switchLang('en')" translate="no">
                EN
              </button>
<span className="text-white/20 text-xs" translate="no">|</span>
<button className="lang-btn text-sm text-slate-300 hover:text-white transition px-1.5 py-0.5 rounded font-medium" id="lang-tr" onclick="switchLang('tr')" translate="no">
                TR
              </button>
<span className="text-white/20 text-xs" translate="no">|</span>
<button className="lang-btn text-sm text-slate-300 hover:text-white transition px-1.5 py-0.5 rounded font-medium" id="lang-ar" onclick="switchLang('ar')" translate="no">
                AR
              </button>
</div>
</div>
<div className="flex items-center gap-3">
<a className="hidden md:block hover:bg-blue-500 transition text-sm font-medium text-white bg-blue-600 rounded-xl pt-2 pr-2 pb-2 pl-2" href="#inquiry-form">
              Consult with us
            </a>
<button className="md:flex hidden items-center justify-center p-2 text-slate-300 hover:text-white focus:outline-none transition-colors !flex md:!hidden" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu" id="icon-menu"></i>
<i className="w-6 h-6 hidden" data-lucide="x" id="icon-close"></i>
</button>
</div>
</div>
</div>
<div className="hidden md:hidden absolute top-16 left-0 w-full bg-black/95 border-b border-white/10 backdrop-blur-xl shadow-2xl" id="mobile-menu">
<div className="flex flex-col px-6 py-6 gap-6">
<a className="mobile-link text-lg font-medium text-slate-300 hover:text-white transition" href="/services-hub">
            Services
          </a>
<a className="mobile-link text-lg font-medium text-slate-300 hover:text-white transition" href="/case-studies-portfolio">
            Work
          </a>
<a className="mobile-link text-lg font-medium text-slate-300 hover:text-white transition" href="/about-us">
            About
          </a>
<a className="mobile-link text-lg font-medium text-slate-300 hover:text-white transition" href="/contact-us">
            Contact
          </a>
<div className="w-full h-px bg-white/10 my-2"></div>
<a className="mobile-link text-center hover:bg-blue-500 transition text-base font-medium text-white bg-blue-600 rounded-xl py-3 w-full block" href="#inquiry-form">
            Consult with us
          </a>
</div>
</div>
</nav>
<section className="relative z-10 pt-24 pb-8">
<div className="md:px-6 md:pt-16 max-w-7xl mr-auto ml-auto pt-10 pr-4 pb-8 pl-4">
<div className="max-w-3xl text-center mx-auto">
<p className="inline-flex items-center gap-2 animate-fadeSlideIn text-xs font-medium text-slate-300 bg-white/5 border-white/10 border rounded-full mb-4 pt-1 pr-3 pb-1 pl-3">
<svg aria-hidden="true" className="lucide lucide-sparkles h-4 w-4 text-sky-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
            publish with style and elegance
          </p>
<h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight animate-fadeSlideIn-delay-200">
            Illuminating Your Digital Growth
          </h1>
<p className="mt-5 text-base md:text-lg text-slate-300 animate-fadeSlideIn-delay-400">
            We turn outdated websites into 24/7 lead-generation machines. Stop
            losing customers to the competition.
          </p>
<div className="flex flex-col gap-3 sm:flex-row mt-8 items-center justify-center animate-fadeSlideIn-delay-600">
<a className="button" href="#inquiry-form">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner">
                Get Free Website Audit
                <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
</div>
<div className="mt-6 flex items-center justify-center gap-3 text-sm text-slate-400 animate-fadeSlideIn-delay-600">
<div className="flex -space-x-2">
<img alt="" className="h-6 w-6 rounded-full ring-2 ring-black/60 object-cover" height="24" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=320&amp;q=80" width="24"/>
<img alt="" className="h-6 w-6 rounded-full ring-2 ring-black/60 object-cover" height="24" loading="lazy" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320&amp;q=80" width="24"/>
<img alt="" className="h-6 w-6 rounded-full ring-2 ring-black/60 object-cover" height="24" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=320&amp;q=80" width="24"/>
</div>
<span className="">Trusted by teams of all sizes</span>
</div>
</div>
</div>
</section>
<section className="sm:p-8 border-gradient before:rounded-3xl [animation:fadeSlideIn_0.56s_ease-in-out_0.07s_both] animate-on-scroll bg-neutral-900/60 max-w-7xl border-white/10 border rounded-3xl mt-32 mr-auto mb-20 ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur" id="features" loading="lazy">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">
<div className="flex flex-col min-h-full justify-between">
<div className="">
<div className="flex gap-6 sm:px-0 pr-1 pl-1 gap-x-6 gap-y-6 items-center">
<span className="inline-flex items-center gap-2 text-sm">
<span className="text-4xl font-medium text-zinc-100 tracking-tight">
                  Feature
                </span>
</span>
<span aria-hidden="true" aria-orientation="vertical" className="w-px bg-white/10 h-10" role="separator"></span>
<span className="text-sm text-zinc-400">Work</span>
</div>
<div className="h-px bg-white/10 mt-4"></div>
<div className="mt-8 relative">
<div className="hidden sm:flex flex-col text-neutral-300 bg-transparent pr-4 pl-4 relative gap-x-4 gap-y-4">
<div className="relative">
<div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-indigo-400 to-purple-400"></div>
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-4 h-4 z-10 relative bg-neutral-900 border-emerald-400 border-2 rounded-full mt-0.5">
<div className="w-1.5 h-1.5 absolute top-0.5 left-0.5 bg-emerald-400 rounded-full"></div>
</div>
<div className="flex-1 pb-6">
<a className="text-sm font-medium text-emerald-300" href="/services">
                        Custom Web Design
                      </a>
<p className="text-xs text-neutral-400 mt-1">
                        Mobile-friendly, responsive sites built to convert
                        visitors into leads.
                      </p>
</div>
</div>
</div>
<div className="relative">
<div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-indigo-400 to-purple-400"></div>
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-indigo-400 bg-neutral-900 z-10 relative mt-0.5">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-400 absolute top-0.5 left-0.5"></div>
</div>
<div className="flex-1 pb-6">
<a className="text-sm font-medium text-indigo-300" href="/services">
                        SEO
                      </a>
<p className="text-xs text-neutral-400 mt-1">
                        Get found by customers in your area on Google Maps and
                        search.
                      </p>
</div>
</div>
</div>
<div className="relative">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-purple-400 bg-neutral-900 z-10 relative mt-0.5">
<div className="w-1.5 h-1.5 rounded-full bg-purple-400 absolute top-0.5 left-0.5"></div>
</div>
<div className="flex-1">
<a className="text-sm font-medium text-purple-300" href="/services">
                        PPC Management
                      </a>
<p className="text-xs text-neutral-400 mt-1">
                        Targeted Google &amp; Facebook ad campaigns with clear
                        ROI tracking.
                      </p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full mt-10">
<div className="">
<p className="text-sm font-medium text-white tracking-tight">
                Accelerate your growth
              </p>
<p className="text-sm text-neutral-300 mt-1 max-w-sm">
                Data-driven strategies, high-performance web development, and
                ROI-focused campaigns that drive real business results.
              </p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 relative gap-x-4 gap-y-4">
<article className="overflow-hidden aspect-[4/3] border-gradient before:rounded-2xl rounded-2xl relative group">
<div className="bg-center transition-transform duration-500 group-hover:scale-105 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5c9326db-8612-40ae-8664-9523f681eae5_800w.png)] bg-contain absolute top-0 right-0 bottom-0 left-0"></div>
</article>
<article className="overflow-hidden aspect-[4/3] border-gradient before:rounded-2xl rounded-2xl relative group">
<div className="bg-center transition-transform duration-500 group-hover:scale-105 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77b7b292-59c9-4d8d-a3ce-958e05cfe7e0_800w.png)] bg-contain absolute top-0 right-0 bottom-0 left-0"></div>
</article>
<article className="overflow-hidden aspect-[4/5] border-gradient before:rounded-2xl rounded-2xl relative group">
<div className="bg-center transition-transform duration-500 group-hover:scale-105 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2df2dcb6-8133-4640-81c3-5f042323dfab_800w.png?w=800&amp;q=80)] bg-cover absolute top-0 right-0 left-0 bottom-0"></div>
</article>
<article className="overflow-hidden aspect-[4/5] border-gradient before:rounded-2xl rounded-2xl relative group">
<div className="bg-center transition-transform duration-500 group-hover:scale-105 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9f139d3-9b9a-4be8-a5d0-18e0f018129f_800w.png?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
</article>
</div>
</div>
</section>
<section className="z-10 sm:p-8 bg-zinc-950/60 w-full max-w-7xl border-white/10 border rounded-3xl mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur border-gradient before:rounded-3xl [animation:fadeSlideIn_0.56s_ease-in-out_0.14s_both] animate-on-scroll animate" id="testimonials">
<div className="flex gap-6 sm:px-0 pr-1 pl-1 gap-x-6 gap-y-6 items-center">
<span className="inline-flex items-center gap-2 text-sm">
<span className="text-4xl font-medium text-zinc-100 tracking-tight">
            Testimonials
          </span>
</span>
<span aria-hidden="true" aria-orientation="vertical" className="w-px bg-white/10 h-10" role="separator"></span>
<span className="text-sm text-zinc-400">client success stories</span>
</div>
<div className="h-px bg-white/10 mt-4"></div>
<div className="relative sm:mt-8 overflow-hidden sm:rounded-3xl border-0 rounded-none mt-6">
<div className="grid grid-cols-1 lg:grid-cols-12 sm:gap-10 gap-x-8 gap-y-8 items-center">
<div className="lg:col-span-6">
<h3 className="text-4xl font-medium text-zinc-100 tracking-tight">
              Clients love Neo Lumen
            </h3>
<p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-[48ch]">
              Trusted by innovative companies, delivering exceptional digital
              experiences that drive real results.
            </p>
<div className="mt-6 grid grid-cols-3 gap-3">
<div className="sm:p-6 hover-lift bg-zinc-900/60 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 border-gradient before:rounded-2xl">
<div className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                  50+
                </div>
<div className="text-xs text-zinc-400 mt-1">Projects delivered</div>
</div>
<div className="rounded-2xl bg-zinc-900/60 border border-white/10 p-5 sm:p-6 hover-lift border-gradient before:rounded-2xl">
<div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  5
                </div>
<div className="text-xs text-zinc-400 mt-1">Years experience</div>
</div>
<div className="rounded-2xl bg-zinc-900/60 border border-white/10 p-5 sm:p-6 hover-lift border-gradient before:rounded-2xl">
<div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  100%
                </div>
<div className="text-xs text-zinc-400 mt-1">
                  Client satisfaction
                </div>
</div>
</div>
<div className="h-px bg-white/10 mt-6"></div>
<div className="flex gap-6 mt-5 items-center flex-wrap">
<a className="button mt-6" href="#inquiry-form">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner">
                  Book a call
                  <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
</div>
</div>
<div className="lg:col-span-6 relative overflow-hidden h-[600px] rounded-3xl">
<div className="testimonial-scroll-container flex flex-col gap-6" style={{animation: 'scroll-testimonials 60s linear infinite'}}>
<article className="sm:p-8 bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border-zinc-800/60 border rounded-3xl pt-6 pr-6 pb-6 pl-6 flex-shrink-0 hover-lift border-gradient before:rounded-3xl">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="">
<div className="text-lg font-semibold text-zinc-100 tracking-tight">
                          Sarah Jenkins
                        </div>
<div className="text-xs text-zinc-400 mt-0.5">
                          @SJsBoutique
                        </div>
</div>
</div>
<div className="h-px bg-white/10 my-4"></div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<span className="text-zinc-200">5.0</span>
<div className="flex text-amber-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-zinc-300">
                      "Our old site was driving customers away. The new design
                      by Neo Lumen isn't just pretty—it actually works. Online
                      sales are up 40% in just two months."
                    </p>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
<polyline points="17 6 23 6 23 12"></polyline>
</svg>
                        +40% Sales
                      </span>
<span className="text-xs text-zinc-500">Web Design</span>
</div>
</div>
</div>
</article>
<article className="sm:p-8 bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border-zinc-800/60 border rounded-3xl pt-6 pr-6 pb-6 pl-6 flex-shrink-0 hover-lift border-gradient before:rounded-3xl">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="">
<div className="text-lg font-semibold text-zinc-100 tracking-tight">
                          Mike Ross
                        </div>
<div className="text-xs text-zinc-400 mt-0.5">
                          @RossConstruction
                        </div>
</div>
</div>
<div className="h-px bg-white/10 my-4"></div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<span className="text-zinc-200">5.0</span>
<div className="flex text-amber-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-zinc-300">
                      "I didn't believe in SEO until I hired them. Now we are #1
                      on Google Maps for contractors in our area. The phone
                      hasn't stopped ringing."
                    </p>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
<path d="M8.5 8.5v.01"></path>
<path d="M16 16v.01"></path>
<path d="M12 12v.01"></path>
</svg>
                        #1 Ranking
                      </span>
<span className="text-xs text-zinc-500">Local SEO</span>
</div>
</div>
</div>
</article>
<article className="sm:p-8 bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border-zinc-800/60 border rounded-3xl pt-6 pr-6 pb-6 pl-6 flex-shrink-0 hover-lift border-gradient before:rounded-3xl">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="">
<div className="text-lg font-semibold text-zinc-100 tracking-tight">
                          Elena Rodriguez
                        </div>
<div className="text-xs text-zinc-400 mt-0.5">
                          @ElenaRealty
                        </div>
</div>
</div>
<div className="h-px bg-white/10 my-4"></div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<span className="text-zinc-200">5.0</span>
<div className="flex text-amber-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-zinc-300">
                      "We wasted so much money on ads before. The team optimized
                      our campaigns and cut our cost-per-lead in half. Highly
                      recommended."
                    </p>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
</svg>
                        -50% CPL
                      </span>
<span className="text-xs text-zinc-500">PPC Ads</span>
</div>
</div>
</div>
</article>
<article className="sm:p-8 bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border-zinc-800/60 border rounded-3xl pt-6 pr-6 pb-6 pl-6 flex-shrink-0 hover-lift border-gradient before:rounded-3xl">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="">
<div className="text-lg font-semibold text-zinc-100 tracking-tight">
                          David Chen
                        </div>
<div className="text-xs text-zinc-400 mt-0.5">
                          @TechStart
                        </div>
</div>
</div>
<div className="h-px bg-white/10 my-4"></div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<span className="text-zinc-200">5.0</span>
<div className="flex text-amber-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-zinc-300">
                      "Incredible speed. They delivered a full corporate website
                      in 3 weeks without cutting corners. The communication was
                      flawless."
                    </p>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-orange-400 bg-orange-400/10 px-2 py-1 rounded-full">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
                        3-Week Launch
                      </span>
<span className="text-xs text-zinc-500">Speed</span>
</div>
</div>
</div>
</article>
<article className="sm:p-8 bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border-zinc-800/60 border rounded-3xl pt-6 pr-6 pb-6 pl-6 flex-shrink-0 hover-lift border-gradient before:rounded-3xl">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="">
<div className="text-lg font-semibold text-zinc-100 tracking-tight">
                          Marcus Thorn
                        </div>
<div className="text-xs text-zinc-400 mt-0.5">
                          @ThornLaw
                        </div>
</div>
</div>
<div className="h-px bg-white/10 my-4"></div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<span className="text-zinc-200">5.0</span>
<div className="flex text-amber-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-zinc-300">
                      "The best investment we made this year. The 'Strategy
                      Session' alone was worth the price. They truly understand
                      digital growth."
                    </p>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<line x1="12" x2="12" y1="1" y2="23"></line>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
                        High ROI
                      </span>
<span className="text-xs text-zinc-500">Strategy</span>
</div>
</div>
</div>
</article>
<article className="sm:p-8 bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border-zinc-800/60 border rounded-3xl pt-6 pr-6 pb-6 pl-6 flex-shrink-0 hover-lift border-gradient before:rounded-3xl">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="">
<div className="text-lg font-semibold text-zinc-100 tracking-tight">
                          Jessica Alba
                        </div>
<div className="text-xs text-zinc-400 mt-0.5">@PureGym</div>
</div>
</div>
<div className="h-px bg-white/10 my-4"></div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<span className="text-zinc-200">5.0</span>
<div className="flex text-amber-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-zinc-300">
                      "Finally, an agency that doesn't speak in jargon. Clear
                      reporting, real results, and a website that my customers
                      love using."
                    </p>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded-full">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
</svg>
                        Client Success
                      </span>
<span className="text-xs text-zinc-500">General</span>
</div>
</div>
</div>
</article>
</div>
<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-transparent pointer-events-none z-10"></div>
<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent pointer-events-none z-10"></div>
</div>
</div>
</div>
</section>
<section className="sm:p-8 border-gradient before:rounded-[36px] [animation:fadeSlideIn_0.56s_ease-in-out_0.21s_both] animate-on-scroll bg-zinc-900/50 bg-cover border-zinc-800 rounded-[36px] mt-10 mr-8 ml-8 pt-6 pr-6 pb-6 pl-6 bg-[url(default)] bg-center animate" id="pricing">
<div className="flex gap-6 sm:px-0 pr-1 pl-1 gap-x-6 gap-y-6 items-center">
<span className="inline-flex items-center gap-2 text-sm">
<span className="text-4xl font-medium text-zinc-100 tracking-tight">
            Pricing
          </span>
</span>
<span aria-hidden="true" aria-orientation="vertical" className="w-px bg-white/10 h-10" role="separator"></span>
<span className="text-sm text-zinc-400">Scale with confidence</span>
</div>
<div className="h-px bg-white/10 mt-4"></div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mt-8 mr-auto ml-auto">
<article className="flex flex-col h-full relative overflow-hidden sm:p-6 bg-gradient-to-b from-zinc-900/70 to-zinc-950/80 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-xl border-gradient before:rounded-2xl">
<div className="flex items-center justify-between text-xs">
<div className="inline-flex items-center gap-2 text-zinc-400">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950/80 ring-1 ring-white/10 text-zinc-300 backdrop-blur">
                01
              </span>
<div className="flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/80"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/40"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/20"></span>
</div>
</div>
<div className="inline-flex items-center gap-1 text-zinc-400">
<svg className="h-3.5 w-3.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-geist">2-week delivery.</span>
</div>
</div>
<div className="mt-5 flex items-start justify-between flex-1">
<div className="">
<h3 className="text-2xl sm:text-3xl text-white font-medium tracking-tight">
                Starter Web Design
              </h3>
<p className="text-sm text-zinc-400 font-geist mt-1">
                Perfect for local businesses. 3-page responsive site + Contact
                setup.
              </p>
</div>
<div className="text-right">
<p className="sm:text-3xl text-2xl font-medium text-white tracking-tight font-geist"></p>
<p className="text-xs text-zinc-500 font-geist"></p>
</div>
</div>
<div className="mt-auto pt-6 w-full">
<a className="button w-full" href="#inquiry-form" id="pricing-form-btn-1">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner">
                Fill the form
                <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
<div className="mt-6">
<p className="text-xs text-zinc-400 font-geist">
                Everything you need to start:
              </p>
</div>
</div>
</article>
<article className="flex flex-col h-full relative overflow-hidden sm:p-6 bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 border-white/20 border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-xl border-gradient before:rounded-2xl">
<div className="flex text-xs items-center justify-between">
<div className="inline-flex items-center gap-2 text-zinc-400">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950/80 ring-1 ring-indigo-500/20 text-zinc-300 backdrop-blur">
                02
              </span>
<div className="flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/80"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/80"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/40"></span>
</div>
</div>
<div className="inline-flex items-center gap-1 text-zinc-400">
<svg className="h-3.5 w-3.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-geist">4-week delivery.</span>
</div>
</div>
<div className="mt-5 flex items-start justify-between flex-1">
<div className="">
<h3 className="text-2xl sm:text-3xl text-white font-medium tracking-tight">
                Growth Package
              </h3>
<p className="text-sm text-zinc-400 font-geist mt-1">
                5-7 Custom Pages, Advanced SEO setup, and Lead Capture forms.
              </p>
</div>
<div className="text-right">
<p className="sm:text-3xl text-2xl font-medium text-white tracking-tight font-geist"></p>
<p className="text-xs text-zinc-500 font-geist"></p>
</div>
</div>
<div className="mt-auto pt-6 w-full">
<a className="button w-full" href="#inquiry-form">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner">
                Fill the form
                <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
<div className="mt-6">
<p className="text-xs text-zinc-400 font-geist">
                Everything in Starter, plus:
              </p>
</div>
</div>
</article>
<article className="flex flex-col h-full overflow-hidden sm:p-6 border-gradient before:rounded-2xl bg-gradient-to-b from-zinc-900/70 to-zinc-950/80 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 relative backdrop-blur-xl">
<div className="flex items-center justify-between text-xs">
<div className="inline-flex items-center gap-2 text-zinc-400">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950/80 ring-1 ring-white/10 text-zinc-300 backdrop-blur">
                03
              </span>
<div className="flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/80"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/80"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/80"></span>
</div>
</div>
<div className="inline-flex items-center gap-1 text-zinc-400">
<svg className="h-3.5 w-3.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-geist">10-12 week delivery.</span>
</div>
</div>
<div className="mt-5 flex items-start justify-between flex-1">
<div className="">
<h3 className="text-2xl sm:text-3xl text-white font-medium tracking-tight">
                Full Store
              </h3>
<p className="text-sm text-zinc-400 font-geist mt-1">
                Complete online store setup, payment integration, and product
                upload.
              </p>
</div>
<div className="text-right">
<p className="sm:text-3xl text-2xl font-medium text-white tracking-tight font-geist"></p>
<p className="text-xs text-zinc-500 font-geist"></p>
</div>
</div>
<div className="mt-auto pt-6 w-full">
<a className="button w-full" href="#inquiry-form">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner">
                Fill the form
                <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
<div className="mt-6">
<p className="text-xs text-zinc-400 font-geist">
                Everything in Growth plus:
              </p>
</div>
</div>
</article>
</div>
<div className="flex flex-col text-center mt-6 items-center"></div>
</section>
<section className="z-10 pt-24 pb-24 relative" id="inquiry-form">
<div className="max-w-3xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-10">
<h2 className="text-4xl font-medium tracking-tight text-white">
            Tell Us About Your Project
          </h2>
<p className="mt-4 text-zinc-400">
            Fill out the details below so we can prepare for your strategy
            session.
          </p>
</div>
<form action="https://formspree.io/f/mqedvdgy" className="sm:p-10 border-gradient before:rounded-3xl bg-zinc-900/50 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl" method="POST">
<div className="space-y-6">
<div className="">
<label className="block text-sm font-medium text-zinc-300 mb-2" htmlFor="name">
                Name
              </label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" id="name" name="name" required="" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-zinc-300 mb-2" htmlFor="email">
                Email Address
              </label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" id="email" name="email" required="" type="email"/>
</div>
<div className="">
<label className="block text-sm font-medium text-zinc-300 mb-2" htmlFor="website">
                Current Website URL
                <span className="text-zinc-500 font-normal">(Optional)</span>
</label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" id="website" name="website" type="url"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="">
<label className="block text-sm font-medium text-zinc-300 mb-2" htmlFor="service">
                  What service are you interested in?
                </label>
<div className="relative">
<select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" id="service" name="service">
<option className="bg-zinc-900" value="Custom Web Design">
                      Custom Web Design
                    </option>
<option className="bg-zinc-900" value="SEO &amp; Local Search">
                      SEO &amp; Local Search
                    </option>
<option className="bg-zinc-900" value="PPC Advertising">
                      PPC Advertising
                    </option>
<option className="bg-zinc-900" value="Full Growth Package">
                      Full Growth Package
                    </option>
<option className="bg-zinc-900" value="Not Sure Yet">
                      Not Sure Yet
                    </option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-zinc-300 mb-2" htmlFor="budget">
                  What is your estimated budget?
                </label>
<div className="relative">
<select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" id="budget" name="budget">
<option className="bg-zinc-900" value="Under $1,000">
                      Under $1,000
                    </option>
<option className="bg-zinc-900" value="$1,000 - $3,000">
                      $1,000 - $3,000
                    </option>
<option className="bg-zinc-900" value="$3,000 - $5,000">
                      $3,000 - $5,000
                    </option>
<option className="bg-zinc-900" value="$5,000+">$5,000+</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-zinc-300 mb-2" htmlFor="challenge">
                Biggest Challenge?
              </label>
<textarea className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" id="challenge" name="challenge" placeholder="Briefly describe what you want to fix or achieve." rows="4"></textarea>
</div>
<button className="button w-full mt-4" type="submit">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner">Request Session</span>
</button>
</div>
</form>
</div>
</section>
<div className="relative overflow-hidden ring-1 ring-white/10 text-white bg-zinc-950 rounded-3xl mb-8 mx-4 mt-10 border-gradient before:rounded-3xl [animation:fadeSlideIn_0.56s_ease-in-out_0.28s_both] animate-on-scroll animate">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10"></div>
<div className="relative sm:px-10 lg:px-14 lg:py-16 pt-12 pr-6 pb-12 pl-6">
<div className="flex flex-col lg:flex-row gap-x-10 gap-y-10 items-start justify-between">
<div className="max-w-md">
<a className="inline-flex items-center gap-3" href="/home">
<span className="text-base font-thin italic tracking-tight font-playfair" translate="no">
                Neo Lumen
              </span>
</a>
<p className="mt-4 text-sm text-white/70 leading-relaxed font-geist">
              We design brands and products that move people to act. Strategy,
              systems, and craft—delivered with clarity.
            </p>
<form action="#" className="mt-6 flex items-center gap-2" method="POST">
<div className="flex-1">
<label className="sr-only" htmlFor="nl-email">Email</label>
<input className="w-full rounded-full bg-white/5 text-white placeholder-white/50 px-4 py-3 text-sm ring-1 ring-white/10 focus:ring-2 focus:ring-white/30 outline-none" id="nl-email" placeholder="Your email" required="" type="email"/>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-white text-zinc-900 px-4 py-3 text-sm ring-1 ring-white/10 hover:bg-zinc-100 transition font-geist" type="submit">
                Subscribe
                <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
<path d="m21.854 2.147-10.94 10.939"></path>
</svg>
</button>
</form>
<p className="mt-2 text-xs text-white/60 font-geist">
              Monthly updates. No spam.
            </p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 w-full lg:w-auto">
<div className="">
<h4 className="text-sm font-medium text-white/80">Company</h4>
<ul className="mt-3 space-y-2 text-sm text-white/60 font-geist">
<li className="">
<a className="hover:text-white transition" href="/about-us">
                    About Us
                  </a>
</li>
<li className="">
<a className="hover:text-white transition" href="/case-studies-portfolio">
                    Case Studies
                  </a>
</li>
<li className="">
<a className="hover:text-white transition" href="/contact-us">
                    Contact
                  </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium text-white/80">Services</h4>
<ul className="mt-3 space-y-2 text-sm text-white/60 font-geist">
<li className="" onclick="window.location.href='/custom-web-development'" role="button">
<a className="hover:text-white transition" href="/custom-web-development">
                    Web Development
                  </a>
</li>
<li className="">
<a className="hover:text-white transition" href="/seo-geo">
                    SEO &amp; Local Search
                  </a>
</li>
<li className="">
<a className="hover:text-white transition" href="/ppc-management">
                    PPC Management
                  </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium text-white/80">Legal</h4>
<ul className="mt-3 space-y-2 text-sm text-white/60 font-geist">
<li className="">
<a className="hover:text-white transition" href="/privacy-policy">
                    Privacy Policy
                  </a>
</li>
<li className="">
<a className="hover:text-white transition" href="/terms-of-service">
                    Terms of Service
                  </a>
</li>
</ul>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-white/60 font-geist">
            © 2026 Neo Lumen. All rights reserved.
          </p>
<div className="flex items-center gap-2">
<a className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="h-4 w-4 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="h-4 w-4 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
</div>
</div>


<div id="google_translate_element" style={{display: 'none'}}></div>
<style>
      /* Hide Google Translate toolbar / banner */
      .goog-te-banner-frame, .goog-te-balloon-frame { display: none !important; }
      body { top: 0 !important; }
      .skiptranslate { display: none !important; }
      #goog-gt-tt, .goog-gt-tooltip { display: none !important; }
      .lang-btn.active { color: white; text-decoration: underline; text-underline-offset: 3px; }
    </style>









    </>
  );
}
