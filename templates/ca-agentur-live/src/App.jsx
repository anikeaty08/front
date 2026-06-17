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
sans: ['Inter', 'sans-serif'],
serif: ['Cormorant Garamond', 'serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
paper: '#FDFCF8',
ink: '#1C1917',
sepia: '#78350F',
stone: '#E7E5E4',
rust: '#9A3412'
},
animation: {
'fade-in': 'fadeIn 1.2s ease-out forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
window.gtag = function(){window.dataLayer.push(arguments);}
window.gtag('consent', 'default', {
'analytics_storage': 'denied',
'ad_storage': 'denied',
'ad_user_data': 'denied',
'ad_personalization': 'denied',
'functionality_storage': 'granted',
'security_storage': 'granted'
});



      (function(){const gate=document.getElementById('intro-gate');const video=document.getElementById('intro-video');const containedVideo=document.getElementById('intro-video-contained');const enterBtn=document.getElementById('enter-btn');const soundBtn=document.getElementById('sound-btn');const overlay=document.getElementById('intro-center-overlay');const group=document.getElementById('intro-claim-group');const topLeftLogo=document.getElementById('top-left-logo');const endScreen=document.getElementById('intro-end-screen');if(!gate||!video)return;let introParam=null;try{introParam=new URLSearchParams(window.parent.location.search).get('intro');}catch(e){}if(!introParam)introParam=new URLSearchParams(window.location.search).get('intro');if(introParam==='safe'){gate.classList.remove('intro-mode-fullscreen');}let isMuted=false;const setIcon=(name)=>{soundBtn.innerHTML='<i data-lucide="'+name+'" class="w-5 h-5"></i>';if(window.lucide)window.lucide.createIcons({root:soundBtn});};const attemptPlay=()=>{video.muted=false;const playPromise=video.play();if(containedVideo)containedVideo.play().catch(()=>{});if(playPromise!==undefined){playPromise.then(()=>{isMuted=false;setIcon('volume-2');}).catch(()=>{video.muted=true;isMuted=true;setIcon('volume-x');video.play().catch(()=>{});});}};setTimeout(attemptPlay,50);soundBtn.addEventListener('click',()=>{isMuted=!isMuted;video.muted=isMuted;setIcon(isMuted?'volume-x':'volume-2');});enterBtn.addEventListener('click',()=>{gate.style.pointerEvents='none';gate.style.opacity='0';setTimeout(()=>{video.pause();if(containedVideo)containedVideo.pause();gate.remove();},1000);});setTimeout(()=>{if(group){group.style.opacity='0';setTimeout(()=>{group.innerHTML='<div class="font-sans text-sm md:text-base font-light text-neutral-400 max-w-[90vw] md:max-w-2xl leading-relaxed">Brand Strategy, Culture &amp; Technology</div>';group.style.opacity='1';},800);}},3000);setTimeout(()=>{if(overlay)overlay.style.opacity='0';setTimeout(()=>{if(topLeftLogo)topLeftLogo.style.opacity='1';},1000);},5500);video.addEventListener('ended',()=>{if(endScreen)endScreen.style.opacity='1';if(topLeftLogo)topLeftLogo.style.opacity='0';});})();
    


      uniform float uTime;
      uniform float uDistortion;
      uniform float uSize;
      uniform vec2 uMouse;

      varying float vAlpha;
      varying vec3 vPos;
      varying float vNoise;

      // Simplex Noise (Standard implementation)
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

          // Smoother, more organic noise (Liquid/Ink feel)
          float noiseFreq = 0.5;
          float noiseAmp = uDistortion;
          float noise = snoise(vec3(pos.x * noiseFreq + uTime * 0.1, pos.y * noiseFreq, pos.z * noiseFreq));

          vNoise = noise;

          // Deform the sphere along normal based on noise
          vec3 newPos = pos + (normalize(pos) * noise * noiseAmp);

          // Interaction
          float dist = distance(uMouse * 10.0, newPos.xy);
          float interaction = smoothstep(5.0, 0.0, dist);
          newPos += normalize(pos) * interaction * 0.5;

          vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
          gl_Position = projectionMatrix * mvPosition;

          // Size variation based on depth and noise
          gl_PointSize = uSize * (24.0 / -mvPosition.z) * (1.0 + noise * 0.5);

          vAlpha = 1.0;
          vPos = newPos;
      }
    


      uniform vec3 uColor;
      uniform float uOpacity;

      varying float vNoise;
      varying vec3 vPos;

      void main() {
          // Soft circle particle
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);
          if (dist > 0.5) discard;

          // Soft edges for "ink blot" effect
          float alpha = smoothstep(0.5, 0.2, dist) * uOpacity;

          // Color variation based on noise (creates depth)
          vec3 darkColor = uColor * 0.5;
          vec3 lightColor = uColor * 1.8; // Highlights

          vec3 finalColor = mix(darkColor, lightColor, vNoise * 0.5 + 0.5);

          gl_FragColor = vec4(finalColor, alpha);
      }
    


      lucide.createIcons();

      const container = document.getElementById('canvas-container');
      const scene = new THREE.Scene();
      // Fog to blend into paper background
      scene.fog = new THREE.FogExp2(0xFDFCF8, 0.035);

      const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 0, 18);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Group to hold the "Systems"
      const systemsGroup = new THREE.Group();
      systemsGroup.position.x = 4.0;
      scene.add(systemsGroup);

      // --- MAIN PARTICLE MESH (The "Brain/Cloud") ---
      // Dense geometry for ink effect
      const geometry = new THREE.IcosahedronGeometry(4.5, 30);

      const uniforms = {
          uTime: { value: 0 },
          uDistortion: { value: 0.6 },
          uSize: { value: 2.5 },
          uColor: { value: new THREE.Color('#1C1917') }, // Ink Color
          uOpacity: { value: 0.8 },
          uMouse: { value: new THREE.Vector2(0, 0) }
      };

      const material = new THREE.ShaderMaterial({
          vertexShader: document.getElementById('vertexShader').textContent,
          fragmentShader: document.getElementById('fragmentShader').textContent,
          uniforms: uniforms,
          transparent: true,
          depthWrite: false,
          // Additive blending makes it look too digital/glowing.
          // Normal blending is better for ink/physical matter.
          blending: THREE.NormalBlending
      });

      const particles = new THREE.Points(geometry, material);
      systemsGroup.add(particles);

      // --- RENAISSANCE LINES (Astrolabe effect) ---
      const lineGroup = new THREE.Group();
      systemsGroup.add(lineGroup);

      function createThinOrbit(radius, rotation) {
          const curve = new THREE.EllipseCurve(
              0, 0,            // ax, aY
              radius, radius,  // xRadius, yRadius
              0, 2 * Math.PI,  // aStartAngle, aEndAngle
              false,           // aClockwise
              0                // aRotation
          );
          const points = curve.getPoints(128);
          const geo = new THREE.BufferGeometry().setFromPoints(points);
          const mat = new THREE.LineBasicMaterial({
              color: 0x78350F, // Sepia
              transparent: true,
              opacity: 0.15
          });
          const orbit = new THREE.Line(geo, mat);
          orbit.rotation.x = rotation.x;
          orbit.rotation.y = rotation.y;
          lineGroup.add(orbit);
          return orbit;
      }

      const orbits = [
          createThinOrbit(5.5, {x: Math.PI/2, y: 0}),
          createThinOrbit(5.2, {x: Math.PI/3, y: Math.PI/6}),
          createThinOrbit(6.0, {x: Math.PI/1.8, y: Math.PI/4})
      ];

      // --- INTERACTION & ANIMATION ---
      let time = 0;
      let speed = 0.1;
      let mouseX = 0, mouseY = 0;

      document.addEventListener('mousemove', (e) => {
          mouseX = (e.clientX / window.innerWidth) * 2 - 1;
          mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
          uniforms.uMouse.value.x += (mouseX - uniforms.uMouse.value.x) * 0.05;
          uniforms.uMouse.value.y += (mouseY - uniforms.uMouse.value.y) * 0.05;
      });

      // Resize
      window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
          adjustLayout();
      });

      function adjustLayout() {
          if(window.innerWidth < 768) {
              systemsGroup.position.set(0, 1.5, -5);
              systemsGroup.scale.set(0.8, 0.8, 0.8);
          } else {
              systemsGroup.position.set(4.5, 0, 0);
              systemsGroup.scale.set(1, 1, 1);
          }
      }
      adjustLayout();

      function animate() {
          requestAnimationFrame(animate);
          time += 0.01 + (speed * 0.05);

          // Rotate entire system slowly (planetary motion)
          systemsGroup.rotation.y = time * 0.05;
          systemsGroup.rotation.z = Math.sin(time * 0.1) * 0.05;

          // Counter-rotate orbits
          lineGroup.rotation.x = Math.sin(time * 0.05) * 0.2;
          orbits.forEach((orbit, i) => {
              orbit.rotation.z += 0.002 * (i + 1);
          });

          // Smooth camera sway based on mouse
          camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
          camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
          camera.lookAt(0,0,0);

          uniforms.uTime.value = time;
          renderer.render(scene, camera);
      }
      animate();

      // --- UI BINDINGS ---
      document.getElementById('input-distortion').addEventListener('input', (e) => {
          uniforms.uDistortion.value = parseFloat(e.target.value);
          document.getElementById('val-distortion').textContent = e.target.value;
      });
      document.getElementById('input-detail').addEventListener('input', (e) => {
          // Higher input = Smaller particles but more visual complexity illusion
          const val = parseFloat(e.target.value);
          uniforms.uSize.value = val * 3.0;
          document.getElementById('val-detail').textContent = val;
      });
      document.getElementById('input-speed').addEventListener('input', (e) => {
          speed = parseFloat(e.target.value);
      });
      document.getElementById('input-opacity').addEventListener('input', (e) => {
          uniforms.uOpacity.value = parseFloat(e.target.value);
      });

      // Color Switching
      document.querySelectorAll('.color-btn').forEach(btn => {
          btn.addEventListener('click', () => {
              const color = btn.getAttribute('data-color');
              uniforms.uColor.value.set(color);

              // Change line color subtly too
              lineGroup.children.forEach(line => {
                  line.material.color.set(color);
              });
          });
      });
    


      (async()=>{try{const key='home-backup-2026-05-13';if(!localStorage.getItem(key)){let html=await fetch(window.location.href,{cache:'no-store'}).then(r=>r.text());const marker='<script id="home-backup-2026-05-13-backup" type="module">';const end='<'+ '/script>';const start=html.indexOf(marker);if(start!==-1){const close=html.indexOf(end,start);if(close!==-1){html=html.slice(0,start)+html.slice(close+end.length);}}localStorage.setItem(key,html);}}catch(e){}})();
    


      (() => {
        const contactButton = document.getElementById('contact-button');
        const modal = document.getElementById('contact-modal');
        const closeButton = document.getElementById('contact-close');
        const form = document.getElementById('contact-form');
        const success = document.getElementById('contact-success');

        if (!contactButton || !modal || !closeButton || !form) return;

        const openModal = () => {
          modal.classList.remove('hidden');
          modal.classList.add('flex');
          const firstInput = document.getElementById('contact-name');
          if (firstInput) firstInput.focus();
        };

        const closeModal = () => {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
          contactButton.focus();
        };

        contactButton.addEventListener('click', openModal);
        closeButton.addEventListener('click', closeModal);
        modal.addEventListener('click', (event) => {
          if (event.target === modal) closeModal();
        });
        document.addEventListener('keydown', (event) => {
          if (event.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
        });
        form.addEventListener('submit', (event) => {
          event.preventDefault();

          const formData = new FormData(form);
          const fullName = formData.get('Full name') || 'Website inquiry';
          const body = Array.from(formData.entries())
            .filter(([, value]) => String(value).trim() !== '')
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n\n');

          const subject = `CA Agentur inquiry — ${fullName}`;
          window.location.href = `mailto:ca@ca-agentur.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

          if (success) success.classList.remove('hidden');
        });

        if (window.lucide) window.lucide.createIcons();
      })();
    


      (function() {
        const cursor = document.getElementById('ca-cursor');
        if (!cursor) return;
        if (window.matchMedia('(pointer: fine)').matches) {
          cursor.classList.remove('hidden');
          let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;
          let hasMoved = false;
          document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!hasMoved) {
              cursorX = mouseX;
              cursorY = mouseY;
              hasMoved = true;
            }
            if (cursor.style.opacity !== '1') cursor.style.opacity = '1';
          });
          document.addEventListener('mouseleave', () => cursor.style.opacity = '0');
          document.addEventListener('mouseenter', () => cursor.style.opacity = '1');
          function loop() {
            if (hasMoved) {
              cursorX += (mouseX - cursorX) * 0.15;
              cursorY += (mouseY - cursorY) * 0.15;
              cursor.style.transform = `translate(${cursorX + 15}px, ${cursorY + 15}px)`;
            }
            requestAnimationFrame(loop);
          }
          loop();
        }
      })();
    


      (function() {
        const banner = document.getElementById('cookie-banner');
        const acceptBtn = document.getElementById('cookie-accept');
        const rejectBtn = document.getElementById('cookie-reject');
        const settingsBtn = document.getElementById('cookie-settings-btn');
        const introGate = document.getElementById('intro-gate');
        const STORAGE_KEY = 'ca_cookie_consent_v1';
        function loadGA() {
          if (document.getElementById('ga-script')) return;
          const script = document.createElement('script');
          script.id = 'ga-script';
          script.async = true;
          script.src = 'https://www.googletagmanager.com/gtag/js?id=G-2M6V79H761';
          document.head.appendChild(script);
          script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){window.dataLayer.push(arguments);}
            window.gtag('js', new Date());
            window.gtag('config', 'G-2M6V79H761', { 'anonymize_ip': true });
          };
        }
        function updateConsent(status) {
          if (status === 'accepted') {
            window.gtag('consent', 'update', { 'analytics_storage': 'granted' });
            loadGA();
          } else {
            window.gtag('consent', 'update', { 'analytics_storage': 'denied' });
          }
          localStorage.setItem(STORAGE_KEY, status);
          hideBanner();
        }
        function showBanner() {
          banner.classList.remove('hidden');
          banner.classList.add('flex');
          setTimeout(() => { banner.style.opacity = '1'; }, 50);
        }
        function hideBanner() {
          banner.style.opacity = '0';
          setTimeout(() => {
            banner.classList.remove('flex');
            banner.classList.add('hidden');
          }, 500);
        }
        function checkConsent() {
          const status = localStorage.getItem(STORAGE_KEY);
          if (!status) {
            if (introGate && document.contains(introGate) && introGate.style.opacity !== '0') {
              const observer = new MutationObserver(() => {
                if (introGate.style.opacity === '0') {
                  setTimeout(showBanner, 1200);
                  observer.disconnect();
                }
              });
              observer.observe(introGate, { attributes: true });
            } else {
              setTimeout(showBanner, 1200);
            }
          } else if (status === 'accepted') {
            updateConsent('accepted');
          }
        }
        acceptBtn?.addEventListener('click', () => updateConsent('accepted'));
        rejectBtn?.addEventListener('click', () => updateConsent('rejected'));
        settingsBtn?.addEventListener('click', (e) => {
          e.preventDefault();
          showBanner();
        });
        checkConsent();
      })();
    
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
      
<div className="fixed inset-0 z-[99999] bg-black transition-opacity duration-1000 ease-in-out" id="intro-gate">
<div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white bg-black transition-opacity duration-1000 pointer-events-none" id="intro-center-overlay">
<div className="flex flex-col items-center justify-center transition-opacity duration-700 w-full px-6 opacity-100" id="intro-claim-group">
<div className="font-sans text-xl md:text-3xl tracking-tight font-medium mb-4">
            CA.AGENTUR
          </div>
<div className="font-sans text-sm md:text-base font-light text-neutral-400 max-w-[90vw] md:max-w-2xl leading-relaxed">
            We deliver what matters most
            <br className="md:hidden"/>
<span className="hidden md:inline"></span>
            for customers and brands.
          </div>
</div>
</div>
<div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white bg-black opacity-0 pointer-events-none transition-opacity duration-1000" id="intro-end-screen">
<div className="font-sans text-xl md:text-3xl tracking-tight font-medium mb-4">
          CA.AGENTUR
        </div>
<div className="font-sans text-sm md:text-base font-light text-neutral-400 mb-2 max-w-[90vw] md:max-w-2xl px-6 leading-relaxed">
          We deliver what matters most
          <br className="md:hidden"/>
<span className="hidden md:inline"></span>
          for customers and brands.
        </div>
<div className="font-sans text-sm md:text-base font-light text-neutral-400 mb-12 max-w-[90vw] md:max-w-md px-6 leading-relaxed">
          Brand Strategy, Culture &amp; Technology
        </div>
<div className="animate-bounce mt-8 text-neutral-400">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14M19 12l-7 7-7-7"></path>
</svg>
</div>
</div>
<div className="absolute left-6 top-6 md:left-12 md:top-12 z-30 pointer-events-none opacity-0 transition-opacity duration-1000" id="top-left-logo" style={{top: 'max(1.5rem, env(safe-area-inset-top))'}}>
<div className="font-sans text-xl tracking-tight text-white font-medium">
          CA.AGENTUR
        </div>
</div>
<video autoplay="" className="absolute inset-0 w-full h-full object-cover object-center bg-black opacity-30 blur-xl md:opacity-100 md:blur-none" id="intro-video" muted="" playsinline="" preload="auto" src="https://customer-za5t6om2dy8q0fyq.cloudflarestream.com/1552c806785fef16a63e90dd0be982aa/downloads/default.mp4?v=v15-samsung-nicochiara-cleanloop-nopaolo"></video>
<video autoplay="" className="absolute inset-0 w-full h-full object-cover object-center bg-black md:hidden z-10 pointer-events-none" id="intro-video-contained" muted="" playsinline="" preload="auto" src="https://customer-za5t6om2dy8q0fyq.cloudflarestream.com/594fb1a35a59b5449c27e2b06e962cf7/downloads/default.mp4?v=v16-mobile-portrait"></video>
<div className="absolute inset-x-0 px-6 md:px-12 flex items-end z-30 justify-center md:justify-between" id="intro-controls" style={{bottom: 'max(2rem, env(safe-area-inset-bottom))'}}>
<div className="w-12 h-12 pointer-events-none hidden md:block"></div>
<button className="font-mono text-xs tracking-[0.2em] text-white px-8 py-3 border border-white/30 bg-black/40 backdrop-blur-md hover:bg-black/60 transition-all cursor-pointer uppercase" id="enter-btn">
          Click to Enter
        </button>
<button aria-label="Toggle sound" className="w-12 h-12 items-center justify-center border border-white/30 bg-black/40 backdrop-blur-md hover:bg-black/60 transition-all text-white cursor-pointer hidden md:flex" id="sound-btn">
<i className="w-5 h-5" data-lucide="volume-x"></i>
</button>
</div>
</div>


<div className="fixed inset-0 pointer-events-none grid-overlay z-0"></div>

<div className="fixed inset-0 z-1 pointer-events-none lg:pointer-events-auto translate-y-12 lg:translate-y-0 lg:translate-x-[10%] xl:translate-x-[15%] opacity-30 lg:opacity-100 hidden md:block" id="canvas-container"></div>

<main className="relative min-h-screen w-full z-20 pointer-events-none flex flex-col justify-start md:justify-between p-6 md:p-12">

<header className="relative z-[100] flex justify-between items-start animate-fade-in pointer-events-none" style={{animationDelay: '0.1s'}}>
<div className="flex flex-col gap-1">
<div className="flex items-center">
<a className="font-sans text-xl tracking-tight text-ink font-medium pointer-events-auto" href="/">
              CA.AGENTUR
            </a>
</div>
<div className="flex items-center gap-2">
<span className="font-mono text-[10px] uppercase tracking-widest text-sepia/70">
              EST. 2011
            </span>
<div className="h-px w-8 bg-sepia/20"></div>
</div>
</div>
<nav className="pointer-events-auto hidden lg:flex items-center gap-3 xl:gap-5">
<a className="font-mono text-[10px] text-neutral-500 hover:text-ink transition-colors uppercase tracking-widest whitespace-nowrap" href="/ecosystem">
            Ecosystem
          </a>
<a className="font-mono text-[10px] text-neutral-500 hover:text-ink transition-colors uppercase tracking-widest whitespace-nowrap" href="/cases">
            Projects
          </a>
<a className="font-mono text-[10px] text-neutral-500 hover:text-ink transition-colors uppercase tracking-widest whitespace-nowrap" href="/services">
            Services
          </a>
<a className="font-mono text-[10px] text-neutral-500 hover:text-ink transition-colors uppercase tracking-widest whitespace-nowrap" href="/point-of-view">
            Thinking
          </a>
<a className="font-mono text-[10px] text-neutral-500 hover:text-ink transition-colors uppercase tracking-widest whitespace-nowrap" href="/in-the-media">
            In the Media
          </a>
<a className="font-mono text-[10px] text-neutral-500 hover:text-ink transition-colors uppercase tracking-widest whitespace-nowrap" href="/awards">
            Awards
          </a>
<a className="font-mono text-[10px] text-neutral-500 hover:text-ink transition-colors uppercase tracking-widest whitespace-nowrap" href="/artist-network">
            ART2PEOPLE
          </a>
<a className="font-sans italic text-base px-5 py-1 border border-neutral-200 hover:border-neutral-800 transition-colors text-ink rounded-full whitespace-nowrap" href="/contact" id="contact-button">
            Contact
          </a>
</nav>
<details className="pointer-events-auto lg:hidden relative z-[100]">
<summary aria-label="Toggle mobile menu" className="block pointer-events-auto select-none list-none cursor-pointer font-sans italic text-base px-5 py-1 border border-neutral-200 hover:border-neutral-800 transition-colors text-ink rounded-full whitespace-nowrap outline-none [&amp;::-webkit-details-marker]:hidden relative z-[110] focus-visible:ring-2 focus-visible:ring-ink focus-visible:outline-none">
            Menu
          </summary>
<nav className="absolute top-full right-0 mt-2 w-48 vellum-glass rounded-sm flex flex-col p-5 gap-4 z-[100] shadow-xl pointer-events-auto">
<a className="font-mono text-[10px] text-neutral-500 hover:text-ink transition-colors uppercase tracking-widest" href="/ecosystem">
              Ecosystem
            </a>
<a className="font-mono text-[10px] text-neutral-500 hover:text-ink transition-colors uppercase tracking-widest" href="/cases">
              Projects
            </a>
<a className="font-mono text-[10px] text-neutral-500 hover:text-ink transition-colors uppercase tracking-widest" href="/services">
              Services
            </a>
<a className="font-mono text-[10px] text-neutral-500 hover:text-ink transition-colors uppercase tracking-widest" href="/point-of-view">
              Thinking
            </a>
<a className="font-mono text-[10px] text-neutral-500 hover:text-ink transition-colors uppercase tracking-widest" href="/in-the-media">
              In the Media
            </a>
<a className="font-mono text-[10px] text-neutral-500 hover:text-ink transition-colors uppercase tracking-widest" href="/awards">
              Awards
            </a>
<a className="font-mono text-[10px] text-neutral-500 hover:text-ink transition-colors uppercase tracking-widest" href="/artist-network">
              ART2PEOPLE
            </a>
<div className="h-px w-full bg-neutral-200/60 my-1"></div>
<a className="font-sans italic text-sm text-ink text-center border border-neutral-200 hover:border-neutral-800 rounded-full py-1.5 transition-colors" href="/contact">
              Contact
            </a>
</nav>
</details>
</header>

<div className="relative z-30 w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl pr-4 md:pr-0 md:mt-0 md:top-[-10%] animate-fade-in opacity-100 visible block mt-16 sm:mt-20 pointer-events-auto" style={{animationDelay: '0.3s'}}>
<div className="flex items-center gap-3 mb-6">
<div className="h-px w-12 bg-rust"></div>
<span className="font-mono text-xs text-rust uppercase tracking-[0.2em]">
            CA Agentur
          </span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl text-ink tracking-tighter mix-blend-normal md:mix-blend-multiply font-sans leading-none md:leading-[0.9]">
          WE DELIVER
          <br/>
<span className="italic font-light text-neutral-600 transition-colors duration-300 hover:text-[#F2A900] cursor-pointer">
            WHAT MATTERS MOST
          </span>
<br/>
          FOR CUSTOMERS AND BRANDS.
        </h1>
<p className="mt-8 max-w-xl font-sans text-sm md:text-base text-neutral-600 font-light leading-relaxed">
          In a world where
          <span className="transition-all duration-300 hover:text-[#F2A900] cursor-pointer">
            attention
          </span>
          is the most valuable currency, CA designs ecosystems, experiences and
          technologies that earn it, keep it and turn it into lasting value.
        </p>
<div className="mt-10 flex items-center gap-4 pointer-events-auto">
<a className="group flex items-center gap-3 bg-ink text-paper pl-6 pr-5 py-3 rounded-sm hover:bg-sepia transition-all duration-500" href="/ecosystem">
<span className="font-mono text-xs tracking-widest uppercase">
              Explore Ecosystem
            </span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<div className="h-px w-16 bg-neutral-300"></div>
<span className="font-serif italic text-neutral-400">v.4.0</span>
</div>
</div>

<div className="pointer-events-auto absolute bottom-8 right-6 xl:right-12 w-[280px] vellum-glass rounded-sm animate-fade-in opacity-0 hidden xl:block" style={{animationDelay: '0.5s'}}>
<div className="border-b border-neutral-200/60 px-4 py-3 flex justify-between items-center">
<span className="font-serif italic text-lg text-ink">
            System Calibration
          </span>
<div className="w-2 h-2 rounded-full bg-green-500/50 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
</div>
<div className="p-5 space-y-6">

<div className="space-y-2">
<div className="flex justify-between text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
<span>Fluid Dynamics</span>
<span id="val-distortion">0.5</span>
</div>
<input id="input-distortion" max="2.0" min="0" step="0.1" type="range" value="0.6"/>
</div>

<div className="space-y-2">
<div className="flex justify-between text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
<span>Complexity</span>
<span id="val-detail">0.8</span>
</div>
<input id="input-detail" max="2.0" min="0.1" step="0.1" type="range" value="0.9"/>
</div>

<div className="grid grid-cols-2 gap-4 pt-2 border-t border-neutral-200/50">
<div className="space-y-2">
<div className="flex justify-between text-[9px] font-mono tracking-widest text-neutral-500 uppercase">
<span>Entropy</span>
</div>
<input id="input-speed" max="0.5" min="0" step="0.01" type="range" value="0.1"/>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[9px] font-mono tracking-widest text-neutral-500 uppercase">
<span>Density</span>
</div>
<input id="input-opacity" max="1.0" min="0.1" step="0.05" type="range" value="0.8"/>
</div>
</div>

<div className="pt-4 flex items-center justify-between">
<span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
              Ink Tone
            </span>
<div className="flex gap-2">
<button className="w-4 h-4 rounded-full bg-[#1C1917] border border-transparent ring-1 ring-offset-2 ring-transparent hover:ring-neutral-300 transition-all color-btn" data-color="#1C1917"></button>
<button className="w-4 h-4 rounded-full bg-[#78350F] border border-transparent hover:ring-1 hover:ring-offset-2 hover:ring-neutral-300 transition-all color-btn" data-color="#78350F"></button>
<button className="w-4 h-4 rounded-full bg-[#404040] border border-transparent hover:ring-1 hover:ring-offset-2 hover:ring-neutral-300 transition-all color-btn" data-color="#404040"></button>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-6 md:left-12 flex flex-col gap-1 z-30 pointer-events-auto visible block" style={{bottom: 'max(1.5rem, env(safe-area-inset-bottom))'}}>
<span className="font-mono text-[9px] text-neutral-400 opacity-60">
          LAT: 43.7696° N
        </span>
<span className="font-mono text-[9px] text-neutral-400 opacity-60">
          LON: 11.2558° E
        </span>
<button className="font-mono text-[9px] text-neutral-400 hover:text-ink transition-colors uppercase tracking-widest cursor-pointer mt-1 text-left" id="cookie-settings-btn">
          Cookie Settings
        </button>
</div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-30 pointer-events-auto" style={{bottom: 'max(1.5rem, env(safe-area-inset-bottom))'}}>
<a className="font-mono text-[9px] text-neutral-400 hover:text-ink transition-colors uppercase tracking-widest" href="/imprint">
          Imprint
        </a>
<a className="font-mono text-[9px] text-neutral-400 hover:text-ink transition-colors uppercase tracking-widest" href="/privacy-policy">
          Data Protection
        </a>
</div>
</main>
<section className="pointer-events-auto relative z-30 w-full px-6 md:px-12 pb-32 max-w-[1400px] mx-auto animate-fade-in opacity-0" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
<div className="mb-8 md:mb-12">
<div className="font-mono text-[10px] uppercase tracking-widest text-sepia/70 mb-3">
          Network proof
        </div>
<h2 className="font-sans text-2xl md:text-3xl text-ink tracking-tight font-medium">
          Client, collaboration and project network
        </h2>
<p className="font-sans text-sm md:text-base text-neutral-600 mt-3 max-w-2xl leading-relaxed">
          Clients, collaborators, platforms and project partners shown with
          official brand assets and clear reference marks.
        </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            Samsung
          </span>
</div>
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            Ledger
          </span>
</div>
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            Mercedes-Benz
          </span>
</div>
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            VfB Stuttgart
          </span>
</div>
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            Belvedere
          </span>
</div>
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            HUGO BOSS
          </span>
</div>
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            PwC
          </span>
</div>
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            OpenSea
          </span>
</div>
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            gamescom
          </span>
</div>
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            Wilder World
          </span>
</div>
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            Illuvium
          </span>
</div>
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            World of Women NFT
          </span>
</div>
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            NFT Paris
          </span>
</div>
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            NFT Lisbon
          </span>
</div>
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            NFT London
          </span>
</div>
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            TOKEN2049
          </span>
</div>
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            NFT.NYC
          </span>
</div>
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            Blockchain Week Luxembourg
          </span>
</div>
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            Forbes
          </span>
</div>
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            GIOLABS
          </span>
</div>
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            ART2PEOPLE
          </span>
</div>
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            GRIDX
          </span>
</div>
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            Immersive Market / Festival de Cannes
          </span>
</div>
<div className="h-[72px] md:h-[82px] xl:h-[96px] bg-white/70 backdrop-blur-sm border border-neutral-200/60 rounded-sm flex items-center justify-center p-4 text-center hover:bg-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<span className="font-sans text-sm font-medium text-neutral-800 tracking-tight leading-snug">
            Feli Giorgetti
          </span>
</div>
</div>
</section>





<div aria-labelledby="contact-modal-title" aria-modal="true" className="fixed inset-0 z-50 hidden items-start md:items-center justify-center bg-ink/20 backdrop-blur-sm p-6 overflow-y-auto" id="contact-modal" role="dialog">
<div className="vellum-glass pointer-events-auto w-full max-w-2xl rounded-sm animate-fade-in my-auto max-h-[calc(100vh-3rem)] overflow-y-auto">
<div className="border-b border-neutral-200/60 px-5 py-4 flex items-center justify-between">
<div>
<p className="font-mono text-[10px] uppercase tracking-widest text-sepia/70">
              Let’s talk.
            </p>
<h2 className="font-sans text-2xl tracking-tight text-ink" id="contact-modal-title">
              Contact CA Agentur
            </h2>
</div>
<button aria-label="Close contact form" className="text-neutral-400 hover:text-ink transition-colors" id="contact-close" type="button">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<form className="p-5 space-y-5" id="contact-form">
<p className="font-sans text-sm text-neutral-600 font-light leading-relaxed">
            Tell us what you are building.
            <br/>
            CA will help shape the right strategy, experience layer and launch
            path.
          </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="font-mono text-[10px] uppercase tracking-widest text-neutral-500" htmlFor="contact-name">
                Full name
              </label>
<input className="w-full bg-paper/70 border border-neutral-200 px-3 py-2 text-sm text-ink focus:outline-none focus:border-neutral-800 transition-colors" id="contact-name" name="Full name" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="font-mono text-[10px] uppercase tracking-widest text-neutral-500" htmlFor="contact-company">
                Company / Organization
              </label>
<input className="w-full bg-paper/70 border border-neutral-200 px-3 py-2 text-sm text-ink focus:outline-none focus:border-neutral-800 transition-colors" id="contact-company" name="Company / Organization" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="font-mono text-[10px] uppercase tracking-widest text-neutral-500" htmlFor="contact-email">
                Email address
              </label>
<input className="w-full bg-paper/70 border border-neutral-200 px-3 py-2 text-sm text-ink focus:outline-none focus:border-neutral-800 transition-colors" id="contact-email" name="Email address" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="font-mono text-[10px] uppercase tracking-widest text-neutral-500" htmlFor="contact-phone">
                Phone number
                <span className="text-neutral-400">optional</span>
</label>
<input className="w-full bg-paper/70 border border-neutral-200 px-3 py-2 text-sm text-ink focus:outline-none focus:border-neutral-800 transition-colors" id="contact-phone" name="Phone number" type="tel"/>
</div>
<div className="space-y-2">
<label className="font-mono text-[10px] uppercase tracking-widest text-neutral-500" htmlFor="contact-interest">
                Project interest
              </label>
<select className="w-full bg-paper/70 border border-neutral-200 px-3 py-2 text-sm text-ink focus:outline-none focus:border-neutral-800 transition-colors" id="contact-interest" name="Project interest" required="">
<option disabled="" selected="" value="">
                  Select an interest
                </option>
<option>Brand Strategy</option>
<option>Attention Economy Strategy</option>
<option>AI &amp; Automation Prototype</option>
<option>Immersive Brand Experience</option>
<option>GIOLABS Event / Venue</option>
<option>ART2PEOPLE Artist Collaboration</option>
<option>Web3 / Collectible Launch</option>
<option>Partnership / Business Development</option>
<option>Press / Speaking Request</option>
<option>Other</option>
</select>
</div>
<div className="space-y-2">
<label className="font-mono text-[10px] uppercase tracking-widest text-neutral-500" htmlFor="contact-timeline">
                Estimated timeline
              </label>
<select className="w-full bg-paper/70 border border-neutral-200 px-3 py-2 text-sm text-ink focus:outline-none focus:border-neutral-800 transition-colors" id="contact-timeline" name="Estimated timeline" required="">
<option disabled="" selected="" value="">
                  Select a timeline
                </option>
<option>As soon as possible</option>
<option>Within 1 month</option>
<option>1-3 months</option>
<option>3-6 months</option>
<option>Later this year</option>
<option>Exploratory</option>
</select>
</div>
<div className="space-y-2 md:col-span-2">
<label className="font-mono text-[10px] uppercase tracking-widest text-neutral-500" htmlFor="contact-budget">
                Budget range
                <span className="text-neutral-400">optional</span>
</label>
<select className="w-full bg-paper/70 border border-neutral-200 px-3 py-2 text-sm text-ink focus:outline-none focus:border-neutral-800 transition-colors" id="contact-budget" name="Budget range">
<option selected="" value="">Select a range</option>
<option>Not sure yet</option>
<option>Under 10k</option>
<option>10k-25k</option>
<option>25k-50k</option>
<option>50k-100k</option>
<option>100k+</option>
</select>
</div>
<div className="space-y-2 md:col-span-2">
<label className="font-mono text-[10px] uppercase tracking-widest text-neutral-500" htmlFor="contact-message">
                Message / Project brief
              </label>
<textarea className="w-full bg-paper/70 border border-neutral-200 px-3 py-2 text-sm text-ink focus:outline-none focus:border-neutral-800 transition-colors resize-none" id="contact-message" name="Message / Project brief" required="" rows="5"></textarea>
</div>
</div>
<button className="group w-full flex items-center justify-center gap-3 bg-ink text-paper px-5 py-3 rounded-sm hover:bg-sepia transition-all duration-500" type="submit">
<span className="font-mono text-xs tracking-widest uppercase">
              Send inquiry
            </span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="send"></i>
</button>
<p className="hidden font-mono text-[10px] uppercase tracking-widest text-sepia text-center" id="contact-success">
            Opening your email client to complete the inquiry.
          </p>
</form>
</div>
</div>

<div className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center opacity-0 transition-opacity duration-300" id="ca-cursor" style={{willChange: 'transform'}}>
<span className="font-mono text-[9px] font-medium tracking-[0.2em] text-ink vellum-glass px-2 py-1 rounded-sm uppercase">
        CA
      </span>
</div>

<div className="fixed inset-x-6 md:inset-x-auto md:right-6 z-[100] vellum-glass rounded-sm p-5 w-auto md:w-[320px] hidden flex-col gap-4 pointer-events-auto shadow-xl transition-opacity duration-500 opacity-0" id="cookie-banner" style={{bottom: 'max(1.5rem, env(safe-area-inset-bottom))'}}>
<p className="font-sans text-xs text-ink leading-relaxed">
        We use optional analytics to understand how the site performs. No
        marketing cookies.
      </p>
<div className="flex gap-3 justify-end items-center mt-1">
<button className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 hover:text-ink transition-colors cursor-pointer" id="cookie-reject">
          Reject
        </button>
<button className="font-mono text-[10px] uppercase tracking-widest bg-ink text-paper px-4 py-2 rounded-sm hover:bg-sepia transition-colors cursor-pointer" id="cookie-accept">
          Accept Analytics
        </button>
</div>
</div>



    </>
  );
}
