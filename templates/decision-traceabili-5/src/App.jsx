import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
setTimeout(() => emailInput.focus(), 300);
}
function closeModal() {
modal.classList.remove('scale-100', 'opacity-100', 'translate-y-0');
modal.classList.add('scale-95', 'opacity-0', 'translate-y-4');
overlay.classList.remove('opacity-100');
overlay.classList.add('opacity-0');
setTimeout(() => {
overlay.classList.add('pointer-events-none');
document.body.style.overflow = '';
// Reset state
formState.classList.remove('hidden');
successState.classList.add('hidden');
errorMsg.classList.add('hidden');
emailInput.value = '';
submitBtn.disabled = false;
submitText.textContent = 'Subscribe';
submitLoader.classList.add('hidden');
}, 300);
}
openBtns.forEach(btn => btn.addEventListener('click', openModal));
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => {
if (e.target === overlay) closeModal();
});
document.addEventListener('keydown', (e) => {
if (e.key === 'Escape' && !overlay.classList.contains('pointer-events-none')) closeModal();
});
// ── Email Validation ──
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
// ── Submit Handler ──
submitBtn.addEventListener('click', async () => {
const email = emailInput.value.trim();
if (!email || !isValidEmail(email)) {
errorMsg.textContent = 'Please enter a valid email address.';
errorMsg.classList.remove('hidden');
emailInput.focus();
return;
}
// Loading state
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
// Success
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
// ── Pricing Cards ──
const cards = ['pricing-hobby', 'pricing-pro', 'pricing-ent'];
function updateState(selectedId) {
cards.forEach(id => {
const card = document.getElementById(id);
if (!card) return;
const isSelected = id === selectedId;
if (isSelected) {
card.classList.add('scale-[1.02]', 'shadow-2xl', 'z-10', 'ring-1', 'ring-obsidian/5', 'opacity-100');
card.classList.remove('scale-[0.98]', 'opacity-60', 'hover:shadow-xl');
if (id !== 'pricing-pro') {
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
updateState('pricing-pro');
});



    uniform float uTime; uniform float uDistortion; uniform float uSize; uniform vec2 uMouse; varying float vNoise;
    vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
    float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+1.0*C.xxx;vec3 x2=x0-i2+2.0*C.xxx;vec3 x3=x0-1.0+3.0*C.xxx;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=1.0/7.0;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}
    void main(){vec3 pos=position;float noise=snoise(vec3(pos.x*0.5+uTime*0.15,pos.y*0.5,pos.z*0.5));vNoise=noise;vec3 newPos=pos+(normal*noise*uDistortion);float dist=distance(uMouse*10.0,newPos.xy);float interaction=smoothstep(6.0,0.0,dist);newPos.z+=interaction*1.5;vec4 mvPosition=modelViewMatrix*vec4(newPos,1.0);gl_Position=projectionMatrix*mvPosition;gl_PointSize=uSize*(20.0/-mvPosition.z);}
  


    uniform vec3 uColor;varying float vNoise;void main(){vec2 center=gl_PointCoord-vec2(0.5);float dist=length(center);if(dist>0.45)discard;float alpha=1.0;vec3 color1=uColor;vec3 color2=vec3(0.25,0.35,0.45);vec3 finalColor=mix(color1,color2,vNoise*0.5+0.5);gl_FragColor=vec4(finalColor,alpha);}
  


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
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 technical-grid pointer-events-none"></div>
<div className="fixed inset-0 z-0 opacity-100" id="canvas-container"></div>



<div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" id="modal-overlay" style={{background: 'rgba(250,250,250,0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)'}}>
<div className="relative w-full max-w-md mx-4 bg-white border border-border rounded-xl shadow-[0_24px_64px_-16px_rgba(0,0,0,0.12)] scale-95 opacity-0 translate-y-4 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" id="email-modal">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-obsidian/20 to-transparent"></div>

<button aria-label="Close" className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-subtle hover:text-obsidian hover:bg-canvas transition-all duration-200" id="modal-close">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="p-8 pt-10">

<div id="modal-form-state">
<div className="mb-8">
<div className="w-10 h-10 bg-canvas border border-border rounded-lg flex items-center justify-center mb-5">
<svg className="text-obsidian" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</div>
<h3 className="text-xl font-semibold text-obsidian tracking-tight mb-2">Stay in the loop</h3>
<p className="text-sm text-subtle leading-relaxed">Get notified about platform updates, research insights, and early access opportunities.</p>
</div>

<div className="space-y-3">
<label className="text-xs font-medium text-obsidian tracking-tight" htmlFor="modal-email-input">Email address</label>
<input autocomplete="email" className="w-full h-12 px-4 bg-canvas border-0 rounded-lg text-sm text-obsidian placeholder:text-subtle/50 ring-1 ring-border focus:ring-obsidian focus:ring-2 focus:outline-none transition-all duration-200" id="modal-email-input" placeholder="you@example.com" type="email"/>

<p className="text-xs text-red-500 font-medium hidden" id="modal-error"></p>
</div>

<button className="group relative isolate overflow-hidden w-full mt-5 h-12 bg-obsidian text-white text-sm font-semibold rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-300 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.3)] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-obsidian/20 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2" id="modal-submit-btn">
<div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 pointer-events-none"></div>
<span className="relative z-10" id="submit-text">Subscribe</span>
<svg className="hidden animate-spin-slow relative z-10" fill="none" height="16" id="submit-loader" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
</button>
<p className="text-[11px] text-subtle/60 text-center mt-4">No spam, ever. Unsubscribe anytime.</p>
</div>

<div className="hidden text-center py-6" id="modal-success-state">
<div className="w-14 h-14 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-6 check-pop">
<svg fill="none" height="24" stroke="#059669" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<h3 className="text-xl font-semibold text-obsidian tracking-tight mb-2">You're on the list</h3>
<p className="text-sm text-subtle leading-relaxed">We'll be in touch with updates.<br/>Welcome aboard.</p>
</div>
</div>
</div>
</div>

<header className="fixed z-50 md:px-12 flex border-border/50 transition-all duration-300 w-full border-b pt-5 pr-6 pb-5 pl-6 top-0 right-0 left-0 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-obsidian text-white flex items-center justify-center rounded-sm">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1 2.182a10 10 0 0 1 3.8 0"></path><path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"></path><path d="M21.817 10.1a10 10 0 0 1 0 3.8"></path><path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"></path><path d="M13.9 21.817a10 10 0 0 1-3.8 0"></path><path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"></path><path d="M2.182 13.9a10 10 0 0 1 0-3.8"></path><path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"></path>
</svg>
</div>
<span className="text-obsidian text-sm font-bold tracking-tight font-sans">Total Health</span>
</div>
<nav className="hidden md:flex items-center gap-8"></nav>
<div className="flex items-center gap-5"></div>
</header>

<div className="z-10 flex flex-col w-full relative">

<section className="min-h-[90vh] flex flex-col lg:flex-row md:px-12 lg:px-20 pt-32 pr-6 pb-20 pl-6 relative gap-x-16 gap-y-16 items-center justify-between">
<div className="max-w-2xl space-y-10 relative z-10">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-border/60 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[11px] text-subtle font-medium tracking-tight font-sans">System v2.4 Available</span>
</div>
<h1 className="md:text-7xl lg:text-8xl text-obsidian leading-[0.95] text-6xl font-semibold tracking-tighter font-sans">Medicine<br/><span className="text-subtle">Personalized.</span></h1>
<p className="text-subtle leading-relaxed text-base font-sans max-w-md">AI-enabled precision medicine backed by world class physicians and scientists</p>
</div>
<div className="flex flex-wrap items-center gap-4">
<button className="group relative isolate overflow-hidden bg-obsidian text-white text-sm font-semibold px-8 py-3.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)] hover:ring-white/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-obsidian/20 focus:ring-offset-2 flex items-center gap-2" data-open-modal="">
<div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0 pointer-events-none"></div>
<span className="z-10 relative">Join the Mailing List</span>
<svg className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
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
<span className="text-[10px] uppercase text-subtle font-semibold tracking-wider">Clinical Decision Logic Graph</span>
</div>
<div className="flex gap-2"><span className="w-12 h-1.5 rounded-full bg-border/50"></span></div>
</div>
<div className="flex-1 relative">
<svg className="w-[380px] h-[285px]" strokeWidth="2" style={{color: 'rgb(17, 17, 17)', width: '380px', height: '285px'}} viewbox="0 0 400 300">
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
<path d="M50,150 C100,150 100,220 150,220" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M150,80 C200,80 200,120 250,120" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M150,220 C200,220 200,180 250,180" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M250,120 L320,150" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path d="M250,180 L320,150" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
<path className="signal-path" d="M50,150 C100,150 100,80 150,80 C200,80 200,120 250,120 L320,150" fill="none" stroke="#111" strokeLinecap="round" strokeWidth="2.5"></path>
<circle className="node-context" cx="50" cy="150" fill="#111" r="6"></circle>
<text fill="#111" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" font-weight="600" text-anchor="middle" x="50" y="175">Context</text>
<rect className="node-assumptions" fill="white" height="20" rx="4" stroke="#111" strokeWidth="1.5" width="80" x="150" y="70"></rect>
<text dy="1" fill="#111" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="9" font-weight="600" text-anchor="middle" x="190" y="83">Assumptions</text>
<rect fill="white" height="20" rx="4" stroke="#E5E5E5" width="80" x="150" y="210"></rect>
<rect fill="#F5F5F7" height="20" rx="4" width="60" x="250" y="170"></rect>
<rect className="node-evidence" fill="white" height="20" rx="4" stroke="#111" strokeWidth="1.5" width="60" x="250" y="110"></rect>
<text dy="1" fill="#111" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="9" font-weight="600" text-anchor="middle" x="280" y="123">Evidence</text>
<circle className="node-outcome" cx="320" cy="150" fill="#111" r="12"></circle>
<path className="outcome-check" d="M316 150l3 3 5-5" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<text fill="#111" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" font-weight="600" text-anchor="middle" x="320" y="178">Outcome</text>
</svg>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-obsidian text-white text-[10px] font-medium px-3 py-1.5 rounded shadow-xl">Confidence: 98.4%</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-border/60 bg-white pt-16 pb-16">
<div className="md:px-12 flex flex-col md:flex-row max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-10 gap-y-10 items-center justify-between">
<p className="text-obsidian whitespace-nowrap md:w-auto md:text-left text-xs font-semibold text-center w-full">BUILT BY LEADERS FROM</p>
<div className="flex flex-wrap md:justify-end hover:opacity-100 transition-opacity duration-500 opacity-60 gap-x-12 gap-y-8 justify-center">
<span className="text-obsidian text-lg font-bold tracking-tight font-sans">Mount Sinai</span>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-20">
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-xl">
<h2 className="md:text-5xl text-obsidian leading-[1.1] text-4xl font-semibold tracking-tight font-sans mb-6">Structured Reasoning. <span className="text-subtle block">World Class Care.</span></h2>
<p className="text-subtle leading-relaxed text-lg">Giving every patient access to precision medicine to navigate their care journey.</p>
</div>
<a className="pb-1 border-b border-obsidian text-sm font-medium hover:opacity-70 transition-opacity mb-2" href="#">Explore Platform Features</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 p-10 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="max-w-md">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-obsidian mb-3">Decision Lineage</h3>
<p className="text-subtle leading-relaxed">Traverse the reasoning graph from outcome to assumption. Every node is traceable.</p>
</div>
<div className="hidden lg:block">
<div className="px-3 py-1 bg-canvas border border-border rounded text-[10px] font-mono text-subtle uppercase tracking-wider group-hover:text-obsidian group-hover:border-obsidian/30 transition-colors">Live Trace</div>
</div>
</div>
<div className="mt-12 h-32 w-full relative flex items-center border-t border-border/40 pt-6 overflow-hidden">
<svg className="w-full h-full" preserveaspectratio="xMidYMid meet" viewbox="0 0 600 100">
<defs><marker id="arrow-head" markerheight="4" markerwidth="4" orient="auto" refx="2" refy="2"><path d="M0,0 L4,2 L0,4" fill="#111"></path></marker></defs>
<path d="M20,50 C100,50 120,20 200,20 C280,20 300,80 380,80 C460,80 480,50 560,50" fill="none" stroke="#E5E5E5" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path className="transition-all duration-[1500ms] ease-in-out group-hover:stroke-dashoffset-0" d="M20,50 C100,50 120,20 200,20 C280,20 300,80 380,80 C460,80 480,50 560,50" fill="none" marker-end="url(#arrow-head)" stroke="#111" stroke-dasharray="600" stroke-dashoffset="600" strokeWidth="1.5"></path>
<g className="transition-all duration-500 opacity-100 group-hover:scale-110 origin-center"><circle cx="20" cy="50" fill="#111" r="4"></circle><text className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300" text-anchor="middle" x="20" y="70">INPUT</text></g>
<g className="transition-all duration-500 delay-[400ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center"><circle cx="200" cy="20" fill="#fff" r="4" stroke="#111" strokeWidth="1.5"></circle><text className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300" text-anchor="middle" x="200" y="40">LOGIC A</text></g>
<g className="transition-all duration-500 delay-[800ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center"><circle cx="380" cy="80" fill="#fff" r="4" stroke="#111" strokeWidth="1.5"></circle><text className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300" text-anchor="middle" x="380" y="100">LOGIC B</text></g>
<g className="transition-all duration-500 delay-[1200ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center"><circle cx="560" cy="50" fill="#111" r="4"></circle><text className="text-[8px] font-mono fill-obsidian font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300" text-anchor="middle" x="560" y="70">RESULT</text></g>
</svg>
</div>
</div>
</div>

<div className="md:col-span-4 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500 flex flex-col">
<div className="p-10 relative z-10 flex flex-col h-full">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 12"></path><path d="M3 3v9h9"></path><path d="M12 7v5l4 2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-obsidian mb-3">Immutable Audit</h3>
<p className="text-sm text-subtle leading-relaxed mb-8">Time-travel through your strategy. Inspect past states with zero ambiguity.</p>
<div className="mt-auto relative w-full h-32 flex flex-col justify-end items-center">
<div className="absolute w-[80%] h-12 bg-border/30 border border-border rounded-t-md top-4 scale-90 opacity-0 group-hover:opacity-100 group-hover:top-0 transition-all duration-500 ease-out"></div>
<div className="absolute w-[90%] h-12 bg-canvas border border-border rounded-t-md top-8 scale-95 opacity-50 group-hover:opacity-80 group-hover:top-6 transition-all duration-500 ease-out delay-75"></div>
<div className="relative w-full h-16 bg-white border border-border rounded shadow-sm flex items-center px-4 gap-4 z-10 transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:shadow-md">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] font-bold text-obsidian uppercase tracking-wide">Current State</span>
<span className="text-[10px] font-mono text-subtle">v2.4.1</span>
</div>
<div className="h-1 w-full bg-canvas rounded overflow-hidden"><div className="h-full w-2/3 bg-obsidian/20"></div></div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-12 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500">
<div className="p-10 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 max-w-lg">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
</div>
<h3 className="text-obsidian text-xl font-semibold mb-2"></h3>
<p className="text-subtle leading-relaxed">Turn complex graph data into clear clinical guidance.</p>
</div>
<div className="flex-1 w-full flex items-center justify-center gap-6 h-32 relative">
<div className="flex flex-col gap-2 relative">
<div className="w-10 h-12 bg-white border border-border shadow-sm rounded-sm flex items-center justify-center transition-all duration-700 ease-in-out group-hover:translate-x-12 group-hover:opacity-0 group-hover:scale-50"><div className="w-4 h-0.5 bg-subtle/20"></div></div>
<div className="w-10 h-12 bg-white border border-border shadow-sm rounded-sm flex items-center justify-center absolute top-2 left-2 transition-all duration-700 ease-in-out delay-100 group-hover:translate-x-10 group-hover:opacity-0 group-hover:scale-50"><div className="w-4 h-0.5 bg-subtle/20"></div></div>
</div>
<div className="w-16 h-16 rounded-full border border-dashed border-border flex items-center justify-center relative">
<div className="absolute inset-0 rounded-full border-t border-obsidian transparent animate-spin [animation-duration:3s] opacity-0 group-hover:opacity-100"></div>
<svg className="text-subtle group-hover:text-obsidian transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 12"></path><path d="M3 3v9h9"></path></svg>
</div>
<div className="w-24 h-32 bg-white border border-border shadow-lg rounded-sm p-4 space-y-3 transition-all duration-500 group-hover:shadow-xl group-hover:scale-105">
<div className="w-6 h-6 rounded bg-obsidian/5"></div>
<div className="space-y-1.5">
<div className="h-1.5 w-full bg-obsidian/10 rounded overflow-hidden"><div className="h-full w-0 bg-obsidian group-hover:w-full transition-all duration-700 delay-300 ease-out"></div></div>
<div className="h-1.5 w-3/4 bg-obsidian/10 rounded overflow-hidden"><div className="h-full w-0 bg-obsidian group-hover:w-full transition-all duration-700 delay-500 ease-out"></div></div>
<div className="h-1.5 w-5/6 bg-obsidian/10 rounded overflow-hidden"><div className="h-full w-0 bg-obsidian group-hover:w-full transition-all duration-700 delay-700 ease-out"></div></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white py-20 px-6 md:px-12 lg:px-20">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-xs space-y-6">
<div className="flex items-center gap-2">
<span className="text-obsidian text-sm font-bold tracking-tight">Total Health</span>
</div>
<p className="text-subtle leading-relaxed text-xs">AI-enabled precision medicine backed by leading physicians and scientists</p>
<div className="text-[10px] text-border">© 2024 Oravia Systems Inc.</div>
</div>
<div className="flex gap-16">
<div className="space-y-4">
<ul className="space-y-2 text-xs text-subtle"></ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-bold text-obsidian">Connect</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><a className="hover:text-obsidian" href="#">Twitter</a></li>
<li><a className="hover:text-obsidian" href="#">LinkedIn</a></li>
</ul>
</div>
</div>
</div>
</footer>
</div>





    </>
  );
}
