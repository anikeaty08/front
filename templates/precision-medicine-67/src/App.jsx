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
display: ['"Cormorant Garamond"', 'serif'],
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



document.addEventListener('DOMContentLoaded', () => {
// ── Supabase Setup ──
const SUPABASE_URL = 'https://vpjndasvvgkewsrbfilb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwam5kYXN2dmdrZXdzcmJmaWxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzODg4MTksImV4cCI6MjA4NTk2NDgxOX0.9KBXHnTJ0jZC2_pC7TIv3L7bXXJivCqFO8wvnNb5J6k';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// ── Modal Elements ──
const overlay = document.getElementById('modal-overlay');
const modal = document.getElementById('email-modal');
const openBtns = document.querySelectorAll('[data-open-modal]');
const closeBtn = document.getElementById('modal-close');
const emailInput = document.getElementById('modal-email-input');
const submitBtn = document.getElementById('modal-submit-btn');
const formState = document.getElementById('modal-form-state');
const successState = document.getElementById('modal-success-state');
const errorMsg = document.getElementById('modal-error');
const submitText = document.getElementById('submit-text');
const submitLoader = document.getElementById('submit-loader');
function openModal() {
overlay.classList.remove('pointer-events-none', 'opacity-0');
overlay.classList.add('opacity-100');
modal.classList.remove('scale-95', 'opacity-0', 'translate-y-4');
modal.classList.add('scale-100', 'opacity-100', 'translate-y-0');
document.body.style.overflow = 'hidden';
setTimeout(() => emailInput.focus(), 100);
}
function closeModal() {
modal.classList.remove('scale-100', 'opacity-100', 'translate-y-0');
modal.classList.add('scale-95', 'opacity-0', 'translate-y-4');
overlay.classList.remove('opacity-100');
overlay.classList.add('opacity-0');
setTimeout(() => {
overlay.classList.add('pointer-events-none');
document.body.style.overflow = '';
formState.classList.remove('hidden');
successState.classList.add('hidden');
errorMsg.classList.add('hidden');
emailInput.value = '';
submitBtn.disabled = false;
submitText.textContent = 'Subscribe';
submitLoader.classList.add('hidden');
}, 300);
}
openBtns.forEach(btn => {
btn.addEventListener('click', (e) => {
e.preventDefault();
openModal();
});
});
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => {
if (e.target === overlay) closeModal();
});
document.addEventListener('keydown', (e) => {
if (e.key === 'Escape' && !overlay.classList.contains('pointer-events-none')) closeModal();
});
function isValidEmail(email) {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
emailInput.addEventListener('input', () => {
errorMsg.classList.add('hidden');
if (emailInput.value.length > 0 && !isValidEmail(emailInput.value)) {
emailInput.classList.add('ring-red-300');
emailInput.classList.remove('ring-border', 'focus:ring-obsidian');
} else {
emailInput.classList.remove('ring-red-300');
emailInput.classList.add('ring-border', 'focus:ring-obsidian');
}
});
submitBtn.addEventListener('click', async () => {
const email = emailInput.value.trim();
if (!email || !isValidEmail(email)) {
errorMsg.textContent = 'Please enter a valid email address.';
errorMsg.classList.remove('hidden');
emailInput.focus();
return;
}
submitBtn.disabled = true;
submitText.textContent = 'Subscribing';
submitLoader.classList.remove('hidden');
errorMsg.classList.add('hidden');
try {
const { data, error } = await supabaseClient
.from('mailing_list')
.insert([{ email: email, subscribed_at: new Date().toISOString() }]);
if (error) {
if (error.code === '23505') {
errorMsg.textContent = 'This email is already subscribed.';
} else {
errorMsg.textContent = 'Something went wrong. Please try again.';
}
errorMsg.classList.remove('hidden');
submitBtn.disabled = false;
submitText.textContent = 'Subscribe';
submitLoader.classList.add('hidden');
return;
}
formState.classList.add('hidden');
successState.classList.remove('hidden');
setTimeout(() => closeModal(), 2500);
} catch (err) {
errorMsg.textContent = 'Network error. Please try again.';
errorMsg.classList.remove('hidden');
submitBtn.disabled = false;
submitText.textContent = 'Subscribe';
submitLoader.classList.add('hidden');
}
});
emailInput.addEventListener('keydown', (e) => {
if (e.key === 'Enter') {
e.preventDefault();
submitBtn.click();
}
});
// ── SPA Router Logic ──
function router() {
const hash = window.location.hash || '#home';
// Handle Mobile Menu Close
document.getElementById('mobile-menu').classList.add('translate-x-full');
document.getElementById('mobile-menu').classList.remove('translate-x-0');
// Hide all views
document.querySelectorAll('.page-view').forEach(el => el.classList.add('hidden'));
// Show active view
const activeView = document.querySelector(hash) || document.querySelector('#home');
if (activeView) activeView.classList.remove('hidden');
// Update nav active states
document.querySelectorAll('.nav-link').forEach(link => {
if (link.getAttribute('href') === hash) {
link.classList.add('text-[#111111]', 'font-medium');
link.classList.remove('text-subtle');
} else {
link.classList.add('text-subtle');
link.classList.remove('text-[#111111]', 'font-medium');
}
});
// Handle ThreeJS background visibility
const canvasContainer = document.getElementById('canvas-container');
if (hash === '#home') {
canvasContainer.style.opacity = '1';
} else {
canvasContainer.style.opacity = '0';
}
// Only scroll to top if we aren't jumping to an anchor within the terms page
if (!hash.includes('-section')) {
window.scrollTo({ top: 0, behavior: 'smooth' });
}
}
window.addEventListener('hashchange', router);
router();
// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
const menu = document.getElementById('mobile-menu');
if (menu.classList.contains('translate-x-full')) {
menu.classList.remove('translate-x-full');
menu.classList.add('translate-x-0');
} else {
menu.classList.add('translate-x-full');
menu.classList.remove('translate-x-0');
}
});
});



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      uniform float uTime; uniform float uDistortion; uniform float uSize; uniform vec2 uMouse; varying float vNoise;
      vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
      float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+1.0*C.xxx;vec3 x2=x0-i2+2.0*C.xxx;vec3 x3=x0-1.0+3.0*C.xxx;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=1.0/7.0;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}
      void main(){vec3 pos=position;float noise=snoise(vec3(pos.x*0.5+uTime*0.15,pos.y*0.5,pos.z*0.5));vNoise=noise;vec3 newPos=pos+(normal*noise*uDistortion);float dist=distance(uMouse*10.0,newPos.xy);float interaction=smoothstep(6.0,0.0,dist);newPos.z+=interaction*1.5;vec4 mvPosition=modelViewMatrix*vec4(newPos,1.0);gl_Position=projectionMatrix*mvPosition;gl_PointSize=uSize*(20.0/-mvPosition.z);}
    


      uniform vec3 uColor;varying float vNoise;void main(){vec2 center=gl_PointCoord-vec2(0.5);float dist=length(center);if(dist>0.45)discard;float alpha=1.0;vec3 color1=uColor;vec3 color2=vec3(0.25,0.35,0.45);vec3 finalColor=mix(color1,color2,vNoise*0.5+0.5);gl_FragColor=vec4(finalColor,alpha);}
    


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
      const uniforms = { uTime: { value: 0 }, uDistortion: { value: 0.0 }, uSize: { value: 1.8 }, uColor: { value: new THREE.Color('#0F172A') }, uMouse: { value: new THREE.Vector2(0, 0) } };
      const material = new THREE.ShaderMaterial({ vertexShader: document.getElementById('vertexShader').textContent, fragmentShader: document.getElementById('fragmentShader').textContent, uniforms: uniforms, transparent: true, blending: THREE.NormalBlending });
      const points = new THREE.Points(geometry, material);
      objectGroup.add(points);
      let time = 0; let mouseX = 0, mouseY = 0;
      document.addEventListener('mousemove', (e) => { mouseX = (e.clientX / window.innerWidth) * 2 - 1; mouseY = -(e.clientY / window.innerHeight) * 2 + 1; uniforms.uMouse.value.x += (mouseX - uniforms.uMouse.value.x) * 0.03; uniforms.uMouse.value.y += (mouseY - uniforms.uMouse.value.y) * 0.03; });
      function adjustLayout() { const w = window.innerWidth; if(w < 1024) { objectGroup.position.set(4, 5, -8); objectGroup.scale.set(0.65, 0.65, 0.65); } else { objectGroup.position.set(0, 2.5, 0); objectGroup.scale.set(0.65, 0.65, 0.65); } }
      window.addEventListener('resize', () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); adjustLayout(); });
      adjustLayout();
      window.addEventListener('scroll', () => { const scrollY = window.scrollY; objectGroup.rotation.z = scrollY * 0.0005; const w = window.innerWidth; const baseY = w < 1024 ? 5 : 2.5; objectGroup.position.y = baseY + scrollY * 0.005; });
      function animate() { requestAnimationFrame(animate); time += 0.008; objectGroup.rotation.y = time * 0.2; uniforms.uTime.value = time; camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02; camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.02; camera.lookAt(0,0,0); renderer.render(scene, camera); }
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
      

<div className="fixed z-0 technical-grid pointer-events-none top-0 right-0 bottom-0 left-0"></div>
<div className="fixed z-0 transition-opacity duration-700 ease-in-out top-0 right-0 bottom-0 left-0 pointer-events-none" id="canvas-container">
<canvas className="" height="1658" style={{display: 'block', width: '951px', height: '829px'}} width="1902"></canvas>
<canvas className="" height="1658" style={{display: 'block', width: '951px', height: '829px'}} width="1902"></canvas>
<canvas className="" height="1694" style={{display: 'block', width: '824px', height: '847px'}} width="1648"></canvas><canvas className="" height="1694" style={{display: 'block', width: '824px', height: '847px'}} width="1648"></canvas><canvas className="" height="1694" style={{display: 'block', width: '824px', height: '847px'}} width="1648"></canvas><canvas height="1694" style={{display: 'block', width: '824px', height: '847px'}} width="1648"></canvas></div>



<div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FAFAFA]/80 backdrop-blur-sm opacity-0 pointer-events-none transition-all duration-300" id="modal-overlay">
<div className="border-border transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] bg-white opacity-0 w-full max-w-md border rounded-xl mx-4 relative shadow-[0_24px_64px_-16px_rgba(0,0,0,0.12)] translate-y-4 scale-95" id="email-modal">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#111111]/20 to-transparent"></div>
<button aria-label="Close" className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-subtle hover:text-[#111111] hover:bg-canvas transition-all duration-200" id="modal-close">
<iconify-icon height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
<div className="p-8 pt-10">
<div id="modal-form-state">
<div className="mb-8">
<div className="w-10 h-10 bg-canvas border border-border rounded-lg flex items-center justify-center mb-5">
<iconify-icon className="text-[#111111]" height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#111111] tracking-tight mb-2 font-display">
                Stay in the loop
              </h3>
<p className="text-sm text-subtle leading-relaxed">
                Get notified about platform updates, research insights, and
                early access opportunities.
              </p>
</div>
<div className="space-y-3">
<label className="text-xs font-normal text-[#111111] tracking-tight" htmlFor="modal-email-input">
                Email address
              </label>
<input autocomplete="email" className="w-full h-12 px-4 bg-canvas border-0 rounded-lg text-sm text-[#111111] placeholder:text-subtle/50 ring-1 ring-border focus:ring-[#111111] focus:ring-2 focus:outline-none transition-all duration-200" id="modal-email-input" placeholder="you@example.com" type="email"/>
<p className="text-xs text-red-500 font-normal hidden" id="modal-error"></p>
</div>
<button className="group relative isolate overflow-hidden w-full mt-5 h-12 bg-[#111111] text-white text-sm font-medium rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-300 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.3)] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2" id="modal-submit-btn">
<div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 pointer-events-none"></div>
<span className="relative z-10" id="submit-text">Subscribe</span>
<iconify-icon className="hidden animate-spin-slow relative z-10" height="16" icon="solar:restart-linear" id="submit-loader" width="16"></iconify-icon>
</button>
<p className="text-[11px] text-subtle/60 text-center mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
</div>
<div className="hidden text-center py-6" id="modal-success-state">
<div className="w-14 h-14 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-6 check-pop">
<iconify-icon className="text-emerald-600" height="24" icon="solar:check-read-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#111111] tracking-tight mb-2 font-display">
              You're on the list
            </h3>
<p className="text-sm text-subtle leading-relaxed">
              We'll be in touch with updates.
              <br/>
              Welcome aboard.
            </p>
</div>
</div>
</div>
</div>

<header className="fixed z-50 md:px-12 flex border-border/50 transition-all duration-300 w-full border-b pt-5 pr-6 pb-5 pl-6 top-0 right-0 left-0 backdrop-blur-md items-center justify-between">
<a className="flex items-center gap-2 hover:opacity-80 transition-opacity" href="#home">
<div className="w-5 h-5 bg-white border border-border flex items-center justify-center rounded-sm">
<svg className="text-red-600" fill="currentColor" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7V2z"></path>
</svg>
</div>
<span className="text-[#111111] text-sm font-medium tracking-tight font-sans">
          Total Health
        </span>
</a>

<nav className="hidden md:flex text-sm font-normal gap-x-8 gap-y-8 items-center">
<a className="nav-link hover:text-[#111111] transition-colors text-[#111111] font-medium" href="#home">
          Home
        </a>
<a className="nav-link text-subtle hover:text-[#111111] transition-colors" href="#about">
          About
        </a>
<a className="nav-link text-subtle hover:text-[#111111] transition-colors" href="#team">
          Team
        </a>
<a className="nav-link text-subtle hover:text-[#111111] transition-colors" href="#terms">
          Terms &amp; Privacy
        </a>
</nav>
<div className="flex gap-5 items-center">
<button className="hidden md:flex group relative isolate overflow-hidden bg-[#111111] text-white text-xs font-medium px-5 py-2.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-300 hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.3)] active:scale-[0.98] items-center gap-2" data-open-modal="">
<div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0 pointer-events-none"></div>
<span className="z-10 relative">Join List</span>
</button>

<button className="md:hidden text-[#111111] p-1" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<div className="fixed inset-0 bg-white z-40 transform translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] pt-24 px-6" id="mobile-menu">
<nav className="flex flex-col gap-6 text-2xl font-display tracking-tight text-[#111111]">
<a className="border-b border-border pb-4 hover:text-subtle transition-colors" href="#home">
          Home
        </a>
<a className="border-b border-border pb-4 hover:text-subtle transition-colors" href="#about">
          About
        </a>
<a className="border-b border-border pb-4 hover:text-subtle transition-colors" href="#team">
          Team
        </a>
<a className="border-b border-border pb-4 hover:text-subtle transition-colors" href="#terms">
          Terms &amp; Privacy
        </a>
<button className="mt-4 bg-[#111111] text-white text-sm font-medium px-6 py-4 rounded text-center" data-open-modal="">
          Join the Mailing List
        </button>
</nav>
</div>

<main className="z-10 flex flex-col w-full relative min-h-screen" id="app-content">



<div className="page-view w-full" id="home">

<section className="min-h-[90vh] flex flex-col lg:flex-row md:px-12 lg:px-20 pt-32 pr-6 pb-20 pl-6 relative gap-x-16 gap-y-16 items-center justify-between">
<div className="max-w-2xl space-y-10 relative z-10">
<div className="flex flex-wrap items-center gap-4">
<button className="group relative isolate overflow-hidden bg-[#111111] text-white text-sm font-medium px-8 py-3.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)] hover:ring-white/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:ring-offset-2 flex items-center gap-2 cursor-pointer" data-open-modal="">
<div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0 pointer-events-none"></div>
<span className="z-10 relative">Join the Mailing List</span>
<iconify-icon className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<a className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded text-sm font-medium bg-white text-subtle border border-border hover:text-[#111111] hover:border-[#111111]/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#111111]/10 shadow-sm" href="mailto:eric.dai@trytotalhealth.com">
<iconify-icon className="transition-colors" height="18" icon="solar:letter-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>Send Email</span>
</a>
</div><div className="space-y-6">
<h1 className="md:text-7xl lg:text-8xl leading-[0.95] text-6xl font-medium text-[#111111] tracking-tighter font-display">
                Medicine
                <br/>
<span className="text-subtle">Personalized.</span>
</h1>
<p className="text-subtle leading-relaxed text-base font-sans max-w-md">
                AI-enabled precision medicine backed by world class physicians
                and scientists
              </p>
</div>
</div>

<div className="relative w-full max-w-lg aspect-square lg:aspect-[4/3] flex items-center justify-center pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-tr from-canvas via-white to-canvas opacity-50 blur-3xl"></div>
<div className="premium-card w-full h-full p-6 relative overflow-hidden rounded-xl">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#111111] to-transparent"></div>
<div className="h-full w-full flex flex-col">
<div className="flex justify-between items-center mb-8 border-b border-border/50 pb-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-border"></div>
<span className="text-[10px] uppercase text-subtle font-medium font-mono tracking-wider">
                      Clinical Decision Logic Graph
                    </span>
</div>
<div className="flex gap-2">
<span className="w-12 h-1.5 rounded-full bg-border/50"></span>
</div>
</div>
<div className="flex-1 relative">
<svg className="w-[380px] h-[285px]" strokeWidth="2" style={{width: '380px', height: '285px', color: '#111111'}} viewbox="0 0 400 300">
<style>
                      .signal-path { stroke-dasharray: 60 400; stroke-dashoffset: 60; animation: signal-flow 6s linear infinite; }
                      @keyframes signal-flow { 0% { stroke-dashoffset: 60; opacity: 0; } 5% { opacity: 1; } 90% { stroke-dashoffset: -360; opacity: 1; } 95% { opacity: 0; } 100% { stroke-dashoffset: -360; opacity: 0; } }
                      .node-context { animation: pulse-context 6s infinite ease-out; transform-origin: 50px 150px; }
                      @keyframes pulse-context { 0% { transform: scale(1); fill: #111; } 5% { transform: scale(1.4); fill: #000; } 15% { transform: scale(1); fill: #111; } }
                      .node-assumptions { animation: pulse-assumptions 6s infinite ease-out; transform-origin: 190px 80px; }
                      @keyframes pulse-assumptions { 25% { stroke-width: 1.5; transform: scale(1); } 30% { stroke-width: 2.5; transform: scale(1.05); stroke: #000; } 40% { stroke-width: 1.5; transform: scale(1); stroke: #111; } }
                      .node-evidence { animation: pulse-evidence 6s infinite ease-out; transform-origin: 280px 120px; }
                      @keyframes pulse-evidence { 55% { stroke-width: 1.5; transform: scale(1); } 60% { stroke-width: 2.5; transform: scale(1.05); stroke: #000; } 70% { stroke-width: 1.5; transform: scale(1); stroke: #111; } }
                      .node-outcome { animation: pulse-outcome 6s infinite ease-out; transform-origin: 320px 150px; }
                      @keyframes pulse-outcome { 85% { transform: scale(1); fill: #111; } 90% { transform: scale(1.25); fill: #000; } 100% { transform: scale(1); fill: #111; } }
                      .outcome-check { stroke-dasharray: 12; stroke-dashoffset: 12; animation: check-draw 6s linear infinite; }
                      @keyframes check-draw { 0%, 88% { stroke-dashoffset: 12; opacity: 0; } 92% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: 0; opacity: 0; } }
                    </style>
<path d="M50,150 C100,150 100,80 150,80" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M150,80 C200,80 200,120 250,120" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M250,120 L320,150" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M50,150 C100,150 100,220 150,220" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M230,220 C270,220 290,150 320,150" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path className="signal-path" d="M50,150 C100,150 100,80 150,80 C200,80 200,120 250,120 L320,150" fill="none" stroke="#111" strokeLinecap="round" strokeWidth="2.5"></path>
<circle className="node-context" cx="50" cy="150" fill="#111" r="6"></circle>
<text fill="#111" fontFamily="'Inter', sans-serif" fontSize="10" font-weight="500" text-anchor="middle" x="50" y="175">
                      Context
                    </text>
<rect className="node-assumptions" fill="white" height="20" rx="4" stroke="#111" strokeWidth="1.5" width="80" x="150" y="70"></rect>
<text dy="1" fill="#111" fontFamily="'Inter', sans-serif" fontSize="9" font-weight="500" text-anchor="middle" x="190" y="83">
                      Assumptions
                    </text>
<rect fill="white" height="20" rx="4" stroke="#E5E5E5" strokeWidth="1.5" width="80" x="150" y="210"></rect>
<text dy="1" fill="#111" fontFamily="'Inter', sans-serif" fontSize="9" font-weight="500" text-anchor="middle" x="190" y="223">
                      Counterfactual
                    </text>
<rect className="node-evidence" fill="white" height="20" rx="4" stroke="#111" strokeWidth="1.5" width="60" x="250" y="110"></rect>
<text dy="1" fill="#111" fontFamily="'Inter', sans-serif" fontSize="9" font-weight="500" text-anchor="middle" x="280" y="123">
                      Evidence
                    </text>
<circle className="node-outcome" cx="320" cy="150" fill="#111" r="12"></circle>
<path className="outcome-check" d="M316 150l3 3 5-5" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<text fill="#111" fontFamily="'Inter', sans-serif" fontSize="10" font-weight="500" text-anchor="middle" x="320" y="178">
                      Outcome
                    </text>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="logo-marquee-section border-y border-border/60 bg-white pt-16 pb-16 relative z-10">
<div className="md:px-12 flex flex-col md:flex-row max-w-7xl mx-auto px-6 gap-x-10 gap-y-10 items-center justify-between">
<p className="text-[#111111] whitespace-nowrap md:w-auto md:text-left text-xs font-medium text-center w-full font-mono">
              BUILT BY LEADERS FROM
            </p>
<div className="w-full flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
<div className="logo-marquee-track flex w-max items-center">
<div className="flex shrink-0 items-center gap-12 pr-12">
<img alt="Mount Sinai" className="w-32 h-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/mount-sinai-logo.png"/>
<img alt="Stanford" className="w-32 h-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/stanford-logo.png"/>
<img alt="Princeton" className="w-32 h-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/princeton-logo.png"/>
<img alt="UPenn" className="w-32 h-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/upenn-logo.png"/>
<img alt="Pathos" className="w-32 h-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/pathos-logo.png"/>
</div>
<div aria-hidden="true" className="flex shrink-0 items-center gap-12 pr-12">
<img alt="" className="w-32 h-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/mount-sinai-logo.png"/>
<img alt="" className="w-32 h-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/stanford-logo.png"/>
<img alt="" className="w-32 h-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/princeton-logo.png"/>
<img alt="" className="w-32 h-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/upenn-logo.png"/>
<img alt="" className="w-32 h-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/pathos-logo.png"/>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 lg:px-20 pt-32 px-6 pb-32 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-xl">
<h2 className="md:text-5xl text-[#111111] leading-[1.1] text-4xl font-medium tracking-tight font-display mb-6">
                  Structured Reasoning.
                  <span className="text-subtle block">World Class Care.</span>
</h2>
<p className="text-subtle leading-relaxed text-lg">
                  Giving every patient access to precision medicine to navigate
                  their care journey.
                </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-[#111111]/30 transition-all duration-500">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 p-10 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="max-w-md">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-[#111111] shadow-sm">
<iconify-icon height="20" icon="solar:diagram-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-[#111111] mb-3 font-display">
                        Decision Lineage
                      </h3>
<p className="text-subtle leading-relaxed text-sm">
                        Traverse the reasoning graph from outcome to assumption.
                        Every node is traceable.
                      </p>
</div>
<div className="hidden lg:block">
<div className="px-3 py-1 bg-canvas border border-border rounded text-[10px] font-mono text-subtle uppercase tracking-wider group-hover:text-[#111111] group-hover:border-[#111111]/30 transition-colors">
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
<g className="transition-all duration-500 opacity-100 group-hover:scale-110 origin-center">
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
<text className="text-[8px] font-mono fill-obsidian font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" text-anchor="middle" x="560" y="70">
                          RESULT
                        </text>
</g>
</svg>
</div>
</div>
</div>

<div className="md:col-span-4 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-[#111111]/30 transition-all duration-500 flex flex-col">
<div className="p-10 relative z-10 flex flex-col h-full">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-[#111111] shadow-sm">
<iconify-icon height="20" icon="solar:history-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl tracking-tight font-medium text-[#111111] mb-3 font-display">
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
<span className="text-[10px] font-medium font-mono text-[#111111] uppercase tracking-wide">
                            Current State
                          </span>
</div>
<div className="h-1 w-full bg-canvas rounded overflow-hidden">
<div className="h-full w-2/3 bg-[#111111]/20"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-12 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-[#111111]/30 transition-all duration-500">
<div className="p-10 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 max-w-lg">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-[#111111] shadow-sm">
<iconify-icon height="20" icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<h3 className="text-[#111111] text-2xl tracking-tight font-medium mb-3 font-display">
                      Clinical Report Generation
                    </h3>
<p className="text-sm text-subtle leading-relaxed">
                      Turn complex graph data into clear clinical guidance for
                      care teams.
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
<div className="absolute inset-0 rounded-full border-t border-[#111111] transparent animate-spin [animation-duration:3s] opacity-0 group-hover:opacity-100"></div>
<iconify-icon className="text-subtle group-hover:text-[#111111] transition-colors" height="20" icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<div className="w-24 h-32 bg-white border border-border shadow-lg rounded-sm p-4 space-y-3 transition-all duration-500 group-hover:shadow-xl group-hover:scale-105">
<div className="w-6 h-6 rounded bg-[#111111]/5"></div>
<div className="space-y-1.5">
<div className="h-1.5 w-full bg-[#111111]/10 rounded overflow-hidden">
<div className="h-full w-0 bg-[#111111] group-hover:w-full transition-all duration-700 delay-300 ease-out"></div>
</div>
<div className="h-1.5 w-3/4 bg-[#111111]/10 rounded overflow-hidden">
<div className="h-full w-0 bg-[#111111] group-hover:w-full transition-all duration-700 delay-500 ease-out"></div>
</div>
<div className="h-1.5 w-5/6 bg-[#111111]/10 rounded overflow-hidden">
<div className="h-full w-0 bg-[#111111] group-hover:w-full transition-all duration-700 delay-700 ease-out"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 lg:px-20 py-24 bg-canvas border-t border-border/50 relative z-10" id="contact-section">
<div className="max-w-2xl mx-auto text-center mb-10">
<h2 className="text-3xl font-medium tracking-tight text-[#111111] font-display mb-3">
              Get in Touch
            </h2>
<p className="text-subtle text-sm">
              Have questions about our clinical capabilities or partnership
              opportunities? Send us a message.
            </p>
</div>
<div className="max-w-xl mx-auto premium-card p-8 md:p-10 rounded-xl relative">
<form className="space-y-5" onsubmit="event.preventDefault(); var name = this.querySelectorAll('input[type=text]')[0].value; var email = this.querySelector('input[type=email]').value; var subject = this.querySelectorAll('input[type=text]')[1].value; var message = this.querySelector('textarea').value; window.location.href = 'mailto:eric.dai@trytotalhealth.com?subject=' + encodeURIComponent(subject) + '&amp;body=' + encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message); this.innerHTML='&lt;div class=\'text-center py-12\'&gt;&lt;div class=\'w-12 h-12 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4 check-pop\'&gt;&lt;iconify-icon icon=\'solar:check-read-linear\' width=\'20\' height=\'20\' class=\'text-emerald-600\'&gt;&lt;/iconify-icon&gt;&lt;/div&gt;&lt;h3 class=\'text-xl font-medium text-[#111111] tracking-tight font-display mb-2\'&gt;Message Sent&lt;/h3&gt;&lt;p class=\'text-sm text-subtle\'&gt;Your email client has been opened with your message. Thank you for reaching out.&lt;/p&gt;&lt;/div&gt;';">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-normal text-[#111111] tracking-tight">
                    Full Name
                  </label>
<input className="w-full h-11 px-3 bg-canvas border-0 rounded text-sm text-[#111111] ring-1 ring-border focus:ring-[#111111] focus:ring-2 focus:outline-none transition-all placeholder:text-subtle/40" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-normal text-[#111111] tracking-tight">
                    Email Address
                  </label>
<input className="w-full h-11 px-3 bg-canvas border-0 rounded text-sm text-[#111111] ring-1 ring-border focus:ring-[#111111] focus:ring-2 focus:outline-none transition-all placeholder:text-subtle/40" placeholder="jane@example.com" required="" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-normal text-[#111111] tracking-tight">
                  Subject
                </label>
<input className="w-full h-11 px-3 bg-canvas border-0 rounded text-sm text-[#111111] ring-1 ring-border focus:ring-[#111111] focus:ring-2 focus:outline-none transition-all placeholder:text-subtle/40" placeholder="Partnership Inquiry" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-normal text-[#111111] tracking-tight">
                  Message
                </label>
<textarea className="w-full p-3 bg-canvas border-0 rounded text-sm text-[#111111] ring-1 ring-border focus:ring-[#111111] focus:ring-2 focus:outline-none transition-all placeholder:text-subtle/40 resize-y" placeholder="How can we help you?" required="" rows="4"></textarea>
</div>
<button className="group relative isolate overflow-hidden w-full h-11 bg-[#111111] text-white text-sm font-medium rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-300 hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.3)] active:scale-[0.98]" type="submit">
<div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 pointer-events-none"></div>
<span className="relative z-10">Send Message</span>
</button>
</form>
</div>
</section>
</div>



<div className="page-view hidden w-full pt-32 pb-20 relative z-10" id="about">
<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

<div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
<div className="flex-1 space-y-6">
<h1 className="text-5xl md:text-6xl font-medium tracking-tight text-[#111111] font-display leading-[1.05]">
                Personalized Medicine Delivered by Top Clinicians.
              </h1>
<div className="space-y-4 text-subtle leading-relaxed text-sm md:text-base max-w-lg">
<p>
                  Total Health offers the future of evidence-based medicine.
                  It's time for every clinical decision to be backed by
                  personalized evidence.
                </p>
<p>
                  We work with top clinicians and physician-scientists from
                  Mount Sinai, MSK, and Stanford to deliver personalized care
                  for cancer and rare genetic disorders.
                </p>
</div>
</div>
<div className="flex-1 w-full flex justify-center">

<div className="premium-card w-full max-w-md aspect-square p-8 rounded-xl flex items-center justify-center relative overflow-hidden bg-white/80 backdrop-blur-md">
<div className="absolute inset-0 bg-gradient-to-br from-canvas/50 via-transparent to-canvas/50"></div>
<iconify-icon className="text-[#111111]/10 absolute -right-10 -bottom-10" height="120" icon="solar:dna-linear" width="120"></iconify-icon>
<svg className="w-full h-full relative z-10" strokeWidth="1.5" style={{color: '#111111'}} viewbox="0 0 400 400">
<circle cx="200" cy="200" fill="none" r="140" stroke="#E5E5E5" stroke-dasharray="4 4"></circle>
<circle cx="200" cy="200" fill="none" r="90" stroke="#E5E5E5" stroke-dasharray="4 4"></circle>
<path d="M200 60 A 140 140 0 0 1 340 200" fill="none" stroke="#111" strokeLinecap="round" strokeWidth="2"></path>
<path d="M340 200 A 140 140 0 0 1 200 340" fill="none" opacity="0.4" stroke="#111" strokeLinecap="round" strokeWidth="2"></path>
<path d="M200 340 A 140 140 0 0 1 60 200" fill="none" stroke="#111" strokeLinecap="round" strokeWidth="2"></path>
<path d="M60 200 A 140 140 0 0 1 200 60" fill="none" opacity="0.4" stroke="#111" strokeLinecap="round" strokeWidth="2"></path>
<circle cx="200" cy="60" fill="#111" r="6"></circle>
<circle cx="340" cy="200" fill="#fff" r="6" stroke="#111" strokeWidth="2"></circle>
<circle cx="200" cy="340" fill="#111" r="6"></circle>
<circle cx="60" cy="200" fill="#fff" r="6" stroke="#111" strokeWidth="2"></circle>
<circle cx="200" cy="200" fill="#111" r="24"></circle>
<path d="M200 110 L200 170 M200 230 L200 290 M110 200 L170 200 M230 200 L290 200" stroke="#E5E5E5" stroke-dasharray="2 4"></path>
</svg>
</div>
</div>
</div>

<div className="border-t border-border/60 pt-20">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-[#111111] font-display">
                Our Core Principles
              </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="premium-card p-8 rounded-xl flex flex-col items-start hover:border-[#111111]/30">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-5 text-[#111111]">
<iconify-icon height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#111111] mb-2 font-display tracking-tight">
                  Clinical Rigor
                </h3>
<p className="text-xs text-subtle leading-relaxed">
                  Built alongside top-tier geneticists and oncologists, ensuring
                  outputs exceed the standard of care.
                </p>
</div>
<div className="premium-card p-8 rounded-xl flex flex-col items-start hover:border-[#111111]/30">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-5 text-[#111111]">
<iconify-icon height="20" icon="solar:heart-pulse-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#111111] mb-2 font-display tracking-tight">
                  Patient-First Design
                </h3>
<p className="text-xs text-subtle leading-relaxed">
                  Simplifying the complex journey of genetic testing to deliver
                  timely clarity and peace of mind.
                </p>
</div>
<div className="premium-card p-8 rounded-xl flex flex-col items-start hover:border-[#111111]/30">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-5 text-[#111111]">
<iconify-icon height="20" icon="solar:eye-scan-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#111111] mb-2 font-display tracking-tight">
                  AI Transparency
                </h3>
<p className="text-xs text-subtle leading-relaxed">
                  No black boxes. Every clinical decision output is fully
                  sourced, auditable, and traceable.
                </p>
</div>
<div className="premium-card p-8 rounded-xl flex flex-col items-start hover:border-[#111111]/30">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-5 text-[#111111]">
<iconify-icon height="20" icon="solar:lock-keyhole-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#111111] mb-2 font-display tracking-tight">
                  Data Privacy
                </h3>
<p className="text-xs text-subtle leading-relaxed">
                  Enterprise-grade security infrastructure compliant with HIPAA,
                  GINA, and the strictest state regulations.
                </p>
</div>
</div>
</div>
</div>
</div>



<div className="page-view hidden w-full pt-32 pb-32 relative z-10" id="team">
<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
<div className="mb-16">
<h1 className="text-5xl font-medium tracking-tight text-[#111111] font-display mb-4">
              The People Behind Total Health
            </h1>
<p className="text-subtle text-base max-w-xl">
              Uniting decades of scientific leadership in genomics with modern
              AI engineering to make precision medicine transparent, accessible,
              and clinically actionable.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="premium-card p-8 rounded-xl flex flex-col hover:border-[#111111]/30 transition-all duration-300">
<img alt="Eric Schadt" className="w-20 h-20 rounded-xl object-cover border border-border mb-6" onerror="this.outerHTML='&lt;div class=\'w-20 h-20 rounded-xl bg-canvas border border-border flex items-center justify-center mb-6 text-subtle/50 text-xl font-medium font-mono\'&gt;ES&lt;/div&gt;'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3d826a0-acdb-4caa-98e8-356cc5577aa7_3840w.jpg?w=800&amp;q=80"/>
<h3 className="text-xl font-medium text-[#111111] font-display tracking-tight mb-1">
                Eric Schadt
              </h3>
<p className="text-xs font-mono text-subtle uppercase tracking-wider mb-4">
                Co-Founder &amp; CEO
              </p>
<p className="text-sm text-subtle leading-relaxed flex-grow mb-6">
                Eric is a pioneering figure in genomics, systems biology, and
                multi-scale biological modeling. He serves as Professor and
                Founding Director of the Icahn Institute for Genomics and
                Multiscale Biology at Mount Sinai, and currently serves as Dean
                of Precision Medicine at Mount Sinai. He is driven to make
                precision medicine accessible to genetic disorder patients by
                closing the gap between cutting-edge genomic science and
                clinical care. Eric Schadt is one of the most cited researchers
                in the country, having published in leading journals like
                Nature, Science, and Cell. Eric Schadt has previously raised
                over $800M to build clinical reasoning models as CEO and
                co-founder of Sema4/GeneDx. As Chief AI Officer of Pathos he has
                led training the world's largest precision oncology foundation
                models on over 8M de-identified patient records with 450+
                petabytes of multimodal clinical data. Eric Schadt is based in
                New York with his family.
              </p>
<div className="flex items-center gap-4 pt-4 border-t border-border/50">
<a className="text-subtle hover:text-[#111111] transition-colors" href="https://www.linkedin.com/in/ericschadt/" rel="noopener noreferrer" target="_blank">
<iconify-icon height="18" icon="solar:link-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="premium-card p-8 rounded-xl flex flex-col hover:border-[#111111]/30 transition-all duration-300">
<img alt="Farhan Damani" className="w-20 h-20 rounded-xl object-cover border border-border mb-6" onerror="this.outerHTML='&lt;div class=\'w-20 h-20 rounded-xl bg-canvas border border-border flex items-center justify-center mb-6 text-subtle/50 text-xl font-medium font-mono\'&gt;FD&lt;/div&gt;'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba97907a-8758-47b2-a499-252cd4cfe383_1600w.jpg?w=800&amp;q=80"/>
<h3 className="text-xl font-medium text-[#111111] font-display tracking-tight mb-1">
                Farhan Damani
              </h3>
<p className="text-xs font-mono text-subtle uppercase tracking-wider mb-4">
                Co-Founder
              </p>
<p className="text-sm text-subtle leading-relaxed flex-grow mb-6">
                Farhan is a Princeton and Johns Hopkins trained scientist and
                engineer applying advanced machine learning to computational
                biology and genomics to solve complex problems in healthcare. At
                Total Health, Farhan helps lead efforts on building AI reasoning
                capabilities for the clinical interpretation of multi-variate
                clinical data. Prior to Total Health, Farhan was one of the lead
                inventors at Dyno Therapeutics on a world-leading central
                nervous system targeting genetic medicine. He has published his
                work on machine learning for healthcare in leading venues like
                Nature and NeurIPS. Farhan is based in the Bay Area with his
                family.
              </p>
<div className="flex items-center gap-4 pt-4 border-t border-border/50">
<a className="text-subtle hover:text-[#111111] transition-colors" href="https://www.linkedin.com/in/farhandamani/" rel="noopener noreferrer" target="_blank">
<iconify-icon height="18" icon="solar:link-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="premium-card p-8 rounded-xl flex flex-col hover:border-[#111111]/30 transition-all duration-300">
<img alt="Eric Dai" className="w-20 h-20 rounded-xl object-cover border border-border mb-6" onerror="this.outerHTML='&lt;div class=\'w-20 h-20 rounded-xl bg-canvas border border-border flex items-center justify-center mb-6 text-subtle/50 text-xl font-medium font-mono\'&gt;ED&lt;/div&gt;'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/88d5f035-4afc-4441-84cd-96fa89be6c56_800w.jpg?w=800&amp;q=80"/>
<h3 className="text-xl font-medium text-[#111111] font-display tracking-tight mb-1">
                Eric Dai
              </h3>
<p className="text-xs font-mono text-subtle uppercase tracking-wider mb-4">
                Co-Founder
              </p>
<p className="text-sm text-subtle leading-relaxed flex-grow mb-6">
                Eric is a Penn and WashU trained bioengineer focused on business
                development and strategy in AI for life science and healthcare.
                Formerly a biotech investor, Eric helped to invest and partner
                with many of the leading AI for life science and healthcare
                companies in the world as an investor at a16z Bio+Health and
                Dimension. As an investor, Eric has partnered with companies
                like Aspect Biosystems, Chai Discovery, and NewLimit. Eric is
                based in the Bay Area with his family.
              </p>
<div className="flex items-center gap-4 pt-4 border-t border-border/50">
<a className="text-subtle hover:text-[#111111] transition-colors" href="https://www.linkedin.com/in/eric-dai-bioe/" rel="noopener noreferrer" target="_blank">
<iconify-icon height="18" icon="solar:link-linear" width="18"></iconify-icon>
</a>
<a className="text-subtle hover:text-[#111111] transition-colors" href="mailto:eric.dai@trytotalhealth.com">
<iconify-icon height="18" icon="solar:letter-linear" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="premium-card p-8 rounded-xl flex flex-col hover:border-[#111111]/30 transition-all duration-300">
<div className="w-20 h-20 rounded-xl bg-canvas border border-border flex items-center justify-center mb-6 text-subtle/50 text-xl font-medium font-mono">
                DC
              </div>
<h3 className="text-xl font-medium text-[#111111] font-display tracking-tight mb-1">
                Dan Clark
              </h3>
<p className="text-xs font-mono text-subtle uppercase tracking-wider mb-4">
                General Legal Counsel
              </p>
<p className="text-sm text-subtle leading-relaxed flex-grow mb-6">
                Dan is a University of Michigan trained attorney and former
                General Counsel of GeneDx/Sema4, with deep expertise in
                healthcare regulation, transactions, and scaling public
                companies. At Total Health, Dan oversees legal strategy across
                regulatory compliance, corporate governance, and commercial
                partnerships.
              </p>
<div className="flex items-center gap-4 pt-4 border-t border-border/50">
<a className="text-subtle hover:text-[#111111] transition-colors" href="https://www.linkedin.com/in/dan-clark/" rel="noopener noreferrer" target="_blank">
<iconify-icon height="18" icon="solar:link-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>



<div className="page-view hidden w-full pt-32 pb-32 relative z-10 bg-white" id="terms">
<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row gap-12 lg:gap-20">

<aside className="w-full md:w-64 lg:w-72 shrink-0 md:border-r border-border/50 md:pr-8">
<div className="md:sticky md:top-32 max-h-[calc(100vh-10rem)] overflow-y-auto toc-scroll pr-2">
<div className="mb-8">
<h4 className="text-[10px] font-mono text-subtle uppercase tracking-wider mb-4">
                  Table of Contents
                </h4>
<div className="space-y-6">

<div>
<a className="block text-sm font-medium text-[#111111] mb-2 hover:opacity-70 transition-opacity" href="#terms-section">
                      Terms of Service
                    </a>
<ul className="space-y-2 text-xs text-subtle ml-2 border-l border-border/50 pl-3">
<li>
<a className="hover:text-[#111111] transition-colors block" href="#tos-1">
                          1. Acceptance of Terms
                        </a>
</li>
<li>
<a className="hover:text-[#111111] transition-colors block" href="#tos-2">
                          2. Description of Services
                        </a>
</li>
<li>
<a className="hover:text-[#111111] transition-colors block" href="#tos-3">
                          3. Eligibility &amp; Account
                        </a>
</li>
<li>
<a className="hover:text-[#111111] transition-colors block" href="#tos-4">
                          4. Intellectual Property
                        </a>
</li>
<li>
<a className="hover:text-[#111111] transition-colors block" href="#tos-5">
                          5. Medical Disclaimer
                        </a>
</li>
<li>
<a className="hover:text-[#111111] transition-colors block" href="#tos-6">
                          6. Governing Law
                        </a>
</li>
</ul>
</div>

<div>
<a className="block text-sm font-medium text-[#111111] mb-2 hover:opacity-70 transition-opacity" href="#privacy-section">
                      Privacy Policy
                    </a>
<ul className="space-y-2 text-xs text-subtle ml-2 border-l border-border/50 pl-3">
<li>
<a className="hover:text-[#111111] transition-colors block" href="#priv-1">
                          1. HIPAA Notice of Privacy Practices
                        </a>
</li>
<li>
<a className="hover:text-[#111111] transition-colors block" href="#priv-2">
                          2. GINA Protections
                        </a>
</li>
<li>
<a className="hover:text-[#111111] transition-colors block" href="#priv-3">
                          3. NY State Genetic Testing Regs
                        </a>
</li>
<li>
<a className="hover:text-[#111111] transition-colors block" href="#priv-4">
                          4. Telehealth Disclosures
                        </a>
</li>
<li>
<a className="hover:text-[#111111] transition-colors block" href="#priv-5">
                          5. General Data Practices
                        </a>
</li>
</ul>
</div>
</div>
</div>
</div>
</aside>

<article className="flex-1 max-w-[760px] prose prose-sm prose-slate text-subtle">
<p className="text-xs font-mono uppercase tracking-wider mb-8">
              Last Updated: October 2024
            </p>

<section className="mb-20" id="terms-section">
<h1 className="text-4xl font-medium tracking-tight text-[#111111] font-display mb-8">
                Terms of Service
              </h1>
<div className="mb-8" id="tos-1">
<h3 className="text-xl font-medium text-[#111111] tracking-tight mb-3">
                  1. Acceptance of Terms
                </h3>
<p className="leading-[1.7] mb-4">
                  By accessing or using the platform, services, or related
                  software provided by Total Health, Inc. ("Total Health", "we",
                  "us", or "our"), you agree to be bound by these Terms of
                  Service. If you do not agree to these terms, you must not
                  access our platform or utilize our services.
                </p>
</div>
<div className="mb-8" id="tos-2">
<h3 className="text-xl font-medium text-[#111111] tracking-tight mb-3">
                  2. Description of Services
                </h3>
<p className="leading-[1.7] mb-4">
                  Total Health provides an AI-assisted precision medicine
                  platform ("Platform") designed to aid in the coordination of
                  genetic testing, delivery of genetic counseling services, and
                  structured reasoning analysis of genetic data. The Platform is
                  intended to supplement, not replace, clinical judgment.
                </p>
</div>
<div className="mb-8" id="tos-3">
<h3 className="text-xl font-medium text-[#111111] tracking-tight mb-3">
                  3. Eligibility and Account Responsibilities
                </h3>
<p className="leading-[1.7] mb-4">
                  You must be at least 18 years of age to use the Services.
                  Users are responsible for maintaining the confidentiality of
                  their account credentials and are strictly liable for all
                  activities occurring under reductions under their account. You
                  must notify us immediately of any unauthorized use of your
                  account.
                </p>
</div>
<div className="mb-8" id="tos-4">
<h3 className="text-xl font-medium text-[#111111] tracking-tight mb-3">
                  4. Intellectual Property
                </h3>
<p className="leading-[1.7] mb-4">
                  The Platform, its underlying decision-logic algorithms, design
                  schemas, and all contained materials are the exclusive
                  property of Total Health, Inc. and are protected by applicable
                  intellectual property laws. You are granted a limited,
                  non-transferable, revocable license strictly for permitted
                  uses under these Terms.
                </p>
</div>
<div className="mb-8" id="tos-5">
<h3 className="text-xl font-medium text-[#111111] tracking-tight mb-3">
                  5. Medical Disclaimer and Limitations
                </h3>
<p className="leading-[1.7] mb-4">
<strong>
                    NOT A SUBSTITUTE FOR PROFESSIONAL MEDICAL ADVICE.
                  </strong>
                  Total Health provides a technological infrastructure to assist
                  licensed clinical providers. We do not practice medicine. The
                  output generated by the Platform must be independently
                  evaluated by a qualified healthcare professional. In no event
                  shall Total Health be liable for direct, indirect, incidental,
                  or clinical damages arising from the use of the Platform.
                </p>
</div>
<div className="mb-8" id="tos-6">
<h3 className="text-xl font-medium text-[#111111] tracking-tight mb-3">
                  6. Governing Law
                </h3>
<p className="leading-[1.7] mb-4">
                  These Terms shall be governed by and construed in accordance
                  with the laws of the State of New York, without giving effect
                  to any principles of conflicts of law. Any legal action or
                  proceeding shall be brought exclusively in the federal or
                  state courts located in New York County, New York.
                </p>
</div>
</section>
<hr className="border-border/60 my-16"/>

<section id="privacy-section">
<h1 className="text-4xl font-medium tracking-tight text-[#111111] font-display mb-8">
                Privacy Policy
              </h1>
<div className="mb-10" id="priv-1">
<h3 className="text-xl font-medium text-[#111111] tracking-tight mb-4">
                  1. HIPAA Notice of Privacy Practices
                </h3>
<div className="space-y-4 leading-[1.7]">
<p>
                    This section describes how medical information about you may
                    be used and disclosed and how you can get access to this
                    information under the Health Insurance Portability and
                    Accountability Act (HIPAA).
                  </p>
<h4 className="text-[#111111] font-medium text-sm mt-4">
                    1.1 Uses and Disclosures of PHI
                  </h4>
<p>
                    We may use Protected Health Information (PHI) for treatment,
                    payment, and health care operations. Total Health acts as a
                    Business Associate to our clinical partners (Covered
                    Entities) and complies strictly with Business Associate
                    Agreements (BAAs).
                  </p>
<h4 className="text-[#111111] font-medium text-sm mt-4">
                    1.2 Patient Rights
                  </h4>
<p>
                    You have the right to request restrictions on certain uses,
                    receive confidential communications, inspect and copy your
                    PHI, request amendments to your PHI, and receive an
                    accounting of disclosures. To exercise these rights, contact
                    our Privacy Officer.
                  </p>
<h4 className="text-[#111111] font-medium text-sm mt-8">
                    1.3 Authorization for Use and Disclosure of Protected Health
                    Information
                  </h4>
<p>
                    While most uses and disclosures of your Protected Health
                    Information (PHI) fall under standard treatment, payment,
                    and healthcare operations (as described above), certain
                    scenarios require your explicit written permission. A formal
                    HIPAA Authorization is a separate document you will sign at
                    the point of care for uses not otherwise permitted under
                    HIPAA—such as research outside the direct treatment
                    relationship or disclosures to third parties at your
                    request. The formal authorization document accessed via [URL
                    or pathway to access the full Authorization Form] contains
                    the following required elements:
                  </p>
<p className="text-[#111111] font-medium text-sm mt-6">
                    Core Elements of the Authorization:
                  </p>
<ol className="list-decimal pl-5 space-y-2">
<li>
                      A specific and meaningful description of the information
                      to be used or disclosed (e.g., genetic test results,
                      genetic counseling records, family medical history, and
                      related PHI).
                    </li>
<li>
                      The name or specific identification of the person(s) or
                      class of persons authorized to make the requested use or
                      disclosure (e.g., Total Health, Inc. and its authorized
                      Business Associates).
                    </li>
<li>
                      The name or specific identification of the person(s) or
                      class of persons to whom Total Health may make the
                      requested use or disclosure.
                    </li>
<li>
                      A description of each purpose of the requested use or
                      disclosure, or a statement that the disclosure is "at the
                      request of the individual."
                    </li>
<li>
                      An explicit expiration date or expiration event that
                      relates to the individual or the purpose of the use or
                      disclosure.
                    </li>
<li>
                      The signature of the individual and date (or if signed by
                      a personal representative, a description of their legal
                      authority to act for the individual).
                    </li>
</ol>
<p className="text-[#111111] font-medium text-sm mt-6">
                    Required Statements:
                  </p>
<ol className="list-decimal pl-5 space-y-2">
<li>
<strong>Right to Revoke:</strong>
                      You have the right to revoke the Authorization in writing
                      at any time, subject to certain exceptions where action
                      has already been taken in reliance on it. To revoke an
                      authorization, you must submit a written request to
                      [Privacy Officer Name] at [Privacy Officer Email Address]
                      or by mail to [Mailing Address for Revocation Requests].
                    </li>
<li>
<strong>Conditioning of Treatment:</strong>
                      Total Health will not condition your treatment, payment,
                      enrollment, or eligibility for benefits on whether you
                      sign the Authorization, except in specific instances
                      permitted by law (e.g., research-related treatment).
                    </li>
<li>
<strong>Potential for Redisclosure:</strong>
                      Information disclosed pursuant to the Authorization may be
                      subject to redisclosure by the recipient and may no longer
                      be protected by the HIPAA Privacy Rule.
                    </li>
</ol>
</div>
</div>
<div className="mb-10" id="priv-2">
<h3 className="text-xl font-medium text-[#111111] tracking-tight mb-4">
                  2. Genetic Information Nondiscrimination Act (GINA)
                </h3>
<p className="leading-[1.7] mb-4">
                  Total Health strictly adheres to GINA protections. GINA
                  prohibits health insurers and employers from requesting or
                  requiring genetic information of an individual or their family
                  members, and from using this information for decisions
                  regarding coverage, rates, or employment. Total Health will
                  never disclose your genetic data to employers or health
                  insurers without your explicit, legally valid authorization.
                </p>
</div>
<div className="mb-10" id="priv-3">
<h3 className="text-xl font-medium text-[#111111] tracking-tight mb-4">
                  3. New York State Genetic Testing Regulations
                </h3>
<p className="leading-[1.7] mb-4">
                  In accordance with New York Civil Rights Law Article 79-l,
                  genetic testing coordinated through our platform requires
                  explicit, written informed consent. No person shall disclose
                  your genetic test results to any organization or individual
                  without your specific written consent, except as specifically
                  authorized by state law. Your sample will be destroyed after
                  the legally required retention period unless you consent to
                  specific, anonymized research uses.
                </p>
</div>
<div className="mb-10" id="priv-4">
<h3 className="text-xl font-medium text-[#111111] tracking-tight mb-4">
                  4. Telehealth Consent and Disclosures
                </h3>
<div className="space-y-4 leading-[1.7]">
<p>
                    By engaging in telehealth services (such as genetic
                    counseling) facilitated by our platform, you acknowledge the
                    nature and scope of these remote services.
                  </p>
<h4 className="text-[#111111] font-medium text-sm mt-4">
                    4.1 Risks and Data Security
                  </h4>
<p>
                    While we use end-to-end encrypted, HIPAA-compliant
                    communication channels, you acknowledge the inherent risks
                    of electronic transmission. We employ strict data security
                    protocols to protect your sessions.
                  </p>
<h4 className="text-[#111111] font-medium text-sm mt-4">
                    4.2 State-Specific Regulations
                  </h4>
<p>
                    Providers rendering services are licensed in the state where
                    you are located during the encounter (e.g., New York). You
                    retain the right to withhold or withdraw consent to
                    telehealth services at any time.
                  </p>
</div>
</div>
<div className="mb-10" id="priv-5">
<h3 className="text-xl font-medium text-[#111111] tracking-tight mb-4">
                  5. General Data Practices
                </h3>
<div className="space-y-4 leading-[1.7]">
<h4 className="text-[#111111] font-medium text-sm mt-4">
                    5.1 Data Collection &amp; Usage
                  </h4>
<p>
                    We collect device and usage data (cookies, IP addresses)
                    strictly to ensure platform security, verify user
                    authentication, and monitor performance. We do not sell
                    personal data.
                  </p>
<h4 className="text-[#111111] font-medium text-sm mt-4">
                    5.2 Third-Party Sharing
                  </h4>
<p>
                    Data is shared only with certified Business Associates
                    required to deliver the Service (e.g., CLIA-certified
                    laboratory partners, cloud hosting providers), all of whom
                    are contractually bound by HIPAA.
                  </p>
<h4 className="text-[#111111] font-medium text-sm mt-4">
                    5.3 Contact Information
                  </h4>
<p>
                    For any privacy-related inquiries, to request data deletion,
                    or to contact our designated Privacy Officer, please email:
                    [Privacy Officer Email Address].
                  </p>
</div>
</div>
</section>
</article>
</div>
</div>

<footer className="bg-white py-20 px-6 md:px-12 lg:px-20 border-t border-border mt-auto relative z-10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-xs space-y-6">
<div className="flex items-center gap-2">
<svg className="text-red-600" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7V2z"></path>
</svg>
<span className="text-[#111111] text-sm font-medium tracking-tight font-sans">
                Total Health
              </span>
</div>
<p className="text-subtle leading-relaxed text-xs">
              AI-enabled precision medicine backed by leading physicians and
              scientists
            </p>
<div className="text-xs text-subtle leading-relaxed">
<span className="font-medium text-[#111111]">
                Icahn School of Medicine at Mount Sinai
              </span>
<br/>
              Department of Genetics and Genomic Sciences
              <br/>
              1425 Madison Avenue
              <br/>
              New York, NY 10029
            </div>
<div className="text-[10px] text-border/80 font-mono">
              © 2026 Total Health Inc.
            </div>
</div>
<div className="flex gap-16">
<div className="space-y-4">
<h4 className="text-xs font-medium text-[#111111] tracking-tight">
                Platform
              </h4>
<ul className="space-y-2 text-xs text-subtle">
<li>
<a className="hover:text-[#111111] transition-colors" href="#about">
                    About Us
                  </a>
</li>
<li>
<a className="hover:text-[#111111] transition-colors" href="#team">
                    Team
                  </a>
</li>
<li>
<a className="hover:text-[#111111] transition-colors" href="#terms">
                    Terms &amp; Privacy
                  </a>
</li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-medium text-[#111111] tracking-tight">
                Connect
              </h4>
<ul className="space-y-2 text-xs text-subtle">
<li>
<a className="hover:text-[#111111] transition-colors" href="#home" onclick="setTimeout(() =&gt; document.getElementById('contact-section').scrollIntoView({behavior: 'smooth'}), 100)">
                    Contact
                  </a>
</li>
<li>
<a className="hover:text-[#111111] transition-colors" href="mailto:eric.dai@trytotalhealth.com">
                    Email
                  </a>
</li>
</ul>
</div>
</div>
</div>
</footer>
</main>





    </>
  );
}
