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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    gsap.registerPlugin(ScrollTrigger);

    document.addEventListener("DOMContentLoaded", () => {
      gsap.from(".gsap-reveal", {
        y: "110%",
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.15,
        delay: 0.2
      });

      document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 100;
        const y = (e.clientY / window.innerHeight - 0.5) * 100;
        gsap.to('.glow-orb-1', { x: x * 1.5, y: y * 1.5, duration: 1.5, ease: "power2.out" });
        gsap.to('.glow-orb-2', { x: -x * 1.2, y: -y * 1.2, duration: 2, ease: "power2.out" });
      });
    });

    const initWebGL = () => {
      const canvas = document.getElementById('webgl-canvas');
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.z = 15;

      const geometry = new THREE.IcosahedronGeometry(2.8, 0);
      const material = new THREE.MeshStandardMaterial({
        color: 0x0ea5e9,
        emissive: 0x082f49,
        roughness: 0.15,
        metalness: 0.85,
        flatShading: true
      });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      scene.add(new THREE.AmbientLight(0xffffff, 0.4));
      const mainLight = new THREE.DirectionalLight(0xffffff, 1.5);
      mainLight.position.set(10, 10, 10);
      scene.add(mainLight);
      const fillLight = new THREE.DirectionalLight(0x38bdf8, 0.8);
      fillLight.position.set(-10, -5, 5);
      scene.add(fillLight);

      const resize = () => {
        const w = window.innerWidth, h = window.innerHeight;
        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        mesh.position.set(w < 1024 ? 0 : 4, 0, w < 1024 ? -2 : 0);
      };
      window.addEventListener('resize', resize);
      resize();

      let t = 0;
      const animate = () => {
        requestAnimationFrame(animate);
        t += 0.01;
        mesh.rotation.x = t * 0.2;
        mesh.rotation.y = t * 0.3;
        mesh.position.y = Math.sin(t * 1.5) * 0.3;
        renderer.render(scene, camera);
      };
      animate();
    };
    initWebGL();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed inset-0 z-[-2] pointer-events-none" id="webgl-canvas"></canvas>

<div className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.03]" style={{backgroundImage: 'repeating-linear-gradient(-45deg, #000 0, #000 1px, transparent 1px, transparent 24px)'}}></div>

<div className="fixed inset-0 pointer-events-none z-50 flex justify-center overflow-hidden">
<div className="w-full max-w-7xl h-full relative">
<div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200/60"></div>
<div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200/60"></div>
<div className="absolute left-[-1px] top-[-1px] w-3 h-3 border-l border-t border-sky-500"></div>
<div className="absolute right-[-1px] top-[-1px] w-3 h-3 border-r border-t border-sky-500"></div>
<div className="absolute left-[-1px] bottom-[-1px] w-3 h-3 border-l border-b border-sky-500"></div>
<div className="absolute right-[-1px] bottom-[-1px] w-3 h-3 border-r border-b border-sky-500"></div>
</div>
</div>

<nav className="relative z-40 w-full max-w-7xl mx-auto px-6 lg:px-8 py-6 flex items-center justify-between border-b border-gray-200/60">
<div className="flex items-center gap-1.5">
<span className="text-sm font-medium tracking-tighter uppercase" style={{fontFamily: '\'Space Grotesk\',sans-serif'}}>A·WAY</span>
<div className="w-1.5 h-1.5 rounded-full bg-sky-500 mb-2"></div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-gray-600">
<a className="hover:text-gray-900 transition-colors" href="#services">Services</a>
<a className="hover:text-gray-900 transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-gray-900 transition-colors" href="#testimonials">Reviews</a>
<a className="hover:text-gray-900 transition-colors" href="#">Blog</a>
<a className="hover:text-gray-900 transition-colors" href="#">About</a>
</div>
<a className="text-sm font-normal text-gray-700 hover:text-gray-900 transition-colors" href="#contact">Contact →</a>
</nav>

<main className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 min-h-[88vh] flex flex-col lg:flex-row items-center pt-12 lg:pt-0">
<div className="w-full lg:w-[58%] flex flex-col items-start z-20 relative py-16">
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-8" style={{background: 'linear-gradient(#FDFDFD, #FDFDFD) padding-box, linear-gradient(135deg, #38bdf8, #0c4a6e) border-box', border: '1px solid transparent'}}>
<iconify-icon className="text-sky-500 text-sm" icon="solar:snowflake-linear"></iconify-icon>
<span className="text-xs font-normal text-gray-800">Nelson Mandela Bay · Eastern Cape</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight font-normal text-gray-900 mb-6" style={{fontFamily: '\'Space Grotesk\',sans-serif'}}>
<div className="overflow-hidden pb-1"><span className="gsap-reveal block tracking-tighter">Beat the heat.</span></div>
<div className="overflow-hidden pb-1"><span className="gsap-reveal block tracking-tighter">Breathe easy.</span></div>
<div className="overflow-hidden pb-2"><span className="gsap-reveal block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-300 tracking-tighter">Engineered comfort.</span></div>
</h1>
<p className="text-base sm:text-lg text-gray-600 max-w-[30rem] leading-relaxed mb-10">
        Trusted aircon installation, repairs and refrigeration across Nelson Mandela Bay. Eco-friendly, energy-efficient systems for homes, businesses, and industrial sites — built to perform in the South African climate.
      </p>
<div className="flex flex-wrap items-center gap-4 mb-16">
<a className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1a1a1a] text-white text-sm font-normal rounded-full hover:bg-black transition-all" href="#contact">
          Book installation
          <iconify-icon className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3.5 text-sky-600 text-sm font-normal rounded-full hover:bg-sky-50/50 transition-colors" href="#services" style={{background: 'linear-gradient(#FDFDFD, #FDFDFD) padding-box, linear-gradient(135deg, #38bdf8, #0c4a6e) border-box', border: '1px solid transparent'}}>
          View services
        </a>
</div>
<div className="flex flex-wrap lg:flex-nowrap items-center gap-8 lg:gap-10 w-full">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-sky-500 shrink-0" style={{background: 'linear-gradient(#f0f9ff, #f0f9ff) padding-box, linear-gradient(135deg, #38bdf8, #bae6fd) border-box', border: '1px solid transparent'}}>
<iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-normal text-gray-900 tracking-tight">5-Year</div>
<div className="text-xs text-gray-500 mt-0.5">Warranty</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-sky-500 shrink-0" style={{background: 'linear-gradient(#f0f9ff, #f0f9ff) padding-box, linear-gradient(135deg, #38bdf8, #bae6fd) border-box', border: '1px solid transparent'}}>
<iconify-icon className="text-lg" icon="solar:leaf-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-normal text-gray-900 tracking-tight">Eco-Friendly</div>
<div className="text-xs text-gray-500 mt-0.5">Refrigerants</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-sky-500 shrink-0" style={{background: 'linear-gradient(#f0f9ff, #f0f9ff) padding-box, linear-gradient(135deg, #38bdf8, #bae6fd) border-box', border: '1px solid transparent'}}>
<iconify-icon className="text-lg" icon="solar:bolt-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-normal text-gray-900 tracking-tight">Energy</div>
<div className="text-xs text-gray-500 mt-0.5">Efficient</div>
</div>
</div>
</div>
</div>

<div className="absolute right-0 top-0 w-full lg:w-[65%] h-full z-0 pointer-events-none hidden md:block">
<div className="glow-orb-1 absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(var(--tw-gradient-stops))] from-sky-500 via-cyan-300 to-transparent rounded-full opacity-60 blur-[80px]"></div>
<div className="glow-orb-2 absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-[radial-gradient(var(--tw-gradient-stops))] from-cyan-200 to-transparent rounded-full opacity-50 blur-[100px]"></div>
<div className="absolute inset-0 flex justify-end">
<div className="relative h-full w-[18%] border-l border-white/40 shadow-[-15px_0_30px_rgba(255,255,255,0.5)]" style={{background: 'linear-gradient(90deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 100%)', backdropFilter: 'blur(2px)'}}></div>
<div className="relative h-full w-[16%] border-l border-white/50 shadow-[-20px_0_40px_rgba(255,255,255,0.6)]" style={{background: 'linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.05) 100%)', backdropFilter: 'blur(4px)'}}></div>
<div className="relative h-full w-[15%] border-l border-white/60 shadow-[-25px_0_50px_rgba(255,255,255,0.7)]" style={{background: 'linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)', backdropFilter: 'blur(8px)'}}></div>
<div className="relative h-full w-[14%] border-l border-white/70 shadow-[-30px_0_60px_rgba(255,255,255,0.8)]" style={{background: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)', backdropFilter: 'blur(12px)'}}></div>
<div className="relative h-full w-[12%] border-l border-white/80 shadow-[-35px_0_70px_rgba(255,255,255,0.9)]" style={{background: 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)', backdropFilter: 'blur(16px)'}}></div>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-[#FDFDFD] via-[#FDFDFD]/80 to-transparent w-[35%]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#FDFDFD] via-transparent to-[#FDFDFD] opacity-80 pointer-events-none"></div>
</div>
</main>

<div className="relative z-10 w-full max-w-7xl mx-auto border-t border-gray-200/60"></div>

<section className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24" id="services">
<div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
<div>
<div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-widest text-sky-600" style={{fontFamily: '\'JetBrains Mono\', monospace', fontWeight: '500'}}>
<span className="w-6 h-px bg-sky-500"></span> 01 — Services
        </div>
<h2 className="text-4xl sm:text-5xl tracking-tight font-normal text-gray-900 max-w-2xl leading-[1.05]" style={{fontFamily: '\'Space Grotesk\',sans-serif'}}>
          Expert HVAC solutions for Nelson Mandela Bay.
        </h2>
</div>
<p className="text-sm text-gray-600 max-w-sm leading-relaxed">
        Residential, commercial and industrial — comprehensive cooling, heating and refrigeration delivered by certified technicians.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200/60 border border-gray-200/60 rounded-lg overflow-hidden">

<div className="bg-[#FDFDFD] p-8 hover:bg-white transition-colors group">
<div className="w-11 h-11 rounded-lg bg-sky-50 flex items-center justify-center text-sky-500 mb-6 border border-sky-100">
<iconify-icon className="text-xl" icon="solar:snowflake-linear"></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-medium text-gray-900 mb-2" style={{fontFamily: '\'Space Grotesk\',sans-serif'}}>Premium Aircon Installation</h3>
<p className="text-sm text-gray-600 leading-relaxed mb-6">Top-notch air conditioning installation for optimal comfort and efficiency, tailored to your space.</p>
<div className="flex items-center gap-1.5 text-xs text-sky-600 group-hover:gap-2.5 transition-all" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
          LEARN MORE <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="bg-[#FDFDFD] p-8 hover:bg-white transition-colors group">
<div className="w-11 h-11 rounded-lg bg-sky-50 flex items-center justify-center text-sky-500 mb-6 border border-sky-100">
<iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-medium text-gray-900 mb-2" style={{fontFamily: '\'Space Grotesk\',sans-serif'}}>Efficient Maintenance</h3>
<p className="text-sm text-gray-600 leading-relaxed mb-6">Keep your systems running smoothly with thorough, reliable scheduled maintenance services.</p>
<div className="flex items-center gap-1.5 text-xs text-sky-600 group-hover:gap-2.5 transition-all" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
          LEARN MORE <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="bg-[#FDFDFD] p-8 hover:bg-white transition-colors group">
<div className="w-11 h-11 rounded-lg bg-sky-50 flex items-center justify-center text-sky-500 mb-6 border border-sky-100">
<iconify-icon className="text-xl" icon="solar:fridge-linear"></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-medium text-gray-900 mb-2" style={{fontFamily: '\'Space Grotesk\',sans-serif'}}>Expert Refrigeration</h3>
<p className="text-sm text-gray-600 leading-relaxed mb-6">Specialized refrigeration solutions for cold storage, commercial kitchens and industrial sites.</p>
<div className="flex items-center gap-1.5 text-xs text-sky-600 group-hover:gap-2.5 transition-all" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
          LEARN MORE <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
<div className="border border-gray-200/60 rounded-lg p-5 bg-white/50">
<iconify-icon className="text-sky-500 text-lg mb-3" icon="solar:home-smile-linear"></iconify-icon>
<div className="text-sm font-medium text-gray-900 tracking-tight">Residential</div>
<div className="text-xs text-gray-500 mt-1 leading-relaxed">Tailored home cooling installs.</div>
</div>
<div className="border border-gray-200/60 rounded-lg p-5 bg-white/50">
<iconify-icon className="text-sky-500 text-lg mb-3" icon="solar:buildings-2-linear"></iconify-icon>
<div className="text-sm font-medium text-gray-900 tracking-tight">Commercial</div>
<div className="text-xs text-gray-500 mt-1 leading-relaxed">Reliable office &amp; retail systems.</div>
</div>
<div className="border border-gray-200/60 rounded-lg p-5 bg-white/50">
<iconify-icon className="text-sky-500 text-lg mb-3" icon="solar:cup-hot-linear"></iconify-icon>
<div className="text-sm font-medium text-gray-900 tracking-tight">Heat Pumps</div>
<div className="text-xs text-gray-500 mt-1 leading-relaxed">Industrial water heating.</div>
</div>
<div className="border border-gray-200/60 rounded-lg p-5 bg-white/50">
<iconify-icon className="text-sky-500 text-lg mb-3" icon="solar:smart-home-linear"></iconify-icon>
<div className="text-sm font-medium text-gray-900 tracking-tight">Smart Control</div>
<div className="text-xs text-gray-500 mt-1 leading-relaxed">Smart home integrations.</div>
</div>
</div>
</section>

<section className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 border-t border-gray-200/60" id="gallery">
<div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
<div>
<div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-widest text-sky-600" style={{fontFamily: '\'JetBrains Mono\', monospace', fontWeight: '500'}}>
<span className="w-6 h-px bg-sky-500"></span> 02 — Project Gallery
        </div>
<h2 className="text-4xl sm:text-5xl tracking-tight font-normal text-gray-900 max-w-2xl leading-[1.05]" style={{fontFamily: '\'Space Grotesk\',sans-serif'}}>
          Recent installations &amp; service work.
        </h2>
</div>
<a className="text-sm text-sky-600 hover:underline" href="#">View all projects →</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<article className="group rounded-lg overflow-hidden border border-gray-200/60 bg-white">
<div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
<img alt="Commercial HVAC" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 left-3 text-xs uppercase tracking-widest px-2 py-1 rounded-full bg-white/90 text-gray-700" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Commercial</div>
</div>
<div className="p-6">
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-2" style={{fontFamily: '\'Space Grotesk\',sans-serif'}}>Commercial HVAC Installation</h3>
<p className="text-xs text-gray-600 leading-relaxed">Large-scale HVAC installation for an office building — assessed cooling and heating needs, then installed energy-efficient systems for long-term savings.</p>
</div>
</article>

<article className="group rounded-lg overflow-hidden border border-gray-200/60 bg-white">
<div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
<img alt="Aircon Repair" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=900&amp;q=80"/>
<div className="absolute top-3 left-3 text-xs uppercase tracking-widest px-2 py-1 rounded-full bg-white/90 text-gray-700" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Residential</div>
</div>
<div className="p-6">
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-2" style={{fontFamily: '\'Space Grotesk\',sans-serif'}}>Residential AC Repair</h3>
<p className="text-xs text-gray-600 leading-relaxed">Rapid repair for a malfunctioning home aircon — diagnosed refrigerant leaks and faulty wiring, restoring full performance and comfort.</p>
</div>
</article>

<article className="group rounded-lg overflow-hidden border border-gray-200/60 bg-white">
<div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
<img alt="Cold storage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 left-3 text-xs uppercase tracking-widest px-2 py-1 rounded-full bg-white/90 text-gray-700" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Refrigeration</div>
</div>
<div className="p-6">
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-2" style={{fontFamily: '\'Space Grotesk\',sans-serif'}}>Cold Storage Maintenance</h3>
<p className="text-xs text-gray-600 leading-relaxed">Routine cold-storage maintenance — inspecting compressors, checking refrigerant, cleaning condenser coils to prevent breakdowns.</p>
</div>
</article>

<article className="group rounded-lg overflow-hidden border border-gray-200/60 bg-white">
<div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
<img alt="Industrial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-3 left-3 text-xs uppercase tracking-widest px-2 py-1 rounded-full bg-white/90 text-gray-700" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Industrial</div>
</div>
<div className="p-6">
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-2" style={{fontFamily: '\'Space Grotesk\',sans-serif'}}>Industrial Heat Pumps</h3>
<p className="text-xs text-gray-600 leading-relaxed">Commercial and industrial water heat pump installation engineered for high-volume hot water demand.</p>
</div>
</article>

<article className="group rounded-lg overflow-hidden border border-gray-200/60 bg-white">
<div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
<img alt="Smart aircon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=900&amp;q=80"/>
<div className="absolute top-3 left-3 text-xs uppercase tracking-widest px-2 py-1 rounded-full bg-white/90 text-gray-700" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Smart Home</div>
</div>
<div className="p-6">
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-2" style={{fontFamily: '\'Space Grotesk\',sans-serif'}}>Smart Climate System</h3>
<p className="text-xs text-gray-600 leading-relaxed">Connected aircon system with app control, scheduled zones, and energy reporting for a modern villa in Summerstrand.</p>
</div>
</article>

<article className="group rounded-lg overflow-hidden border border-gray-200/60 bg-white">
<div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
<img alt="Ventilation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=900&amp;q=80"/>
<div className="absolute top-3 left-3 text-xs uppercase tracking-widest px-2 py-1 rounded-full bg-white/90 text-gray-700" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Ventilation</div>
</div>
<div className="p-6">
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-2" style={{fontFamily: '\'Space Grotesk\',sans-serif'}}>Retail Ventilation Retrofit</h3>
<p className="text-xs text-gray-600 leading-relaxed">Custom ventilation retrofit for a busy retail floor — improving air quality and reducing humidity load.</p>
</div>
</article>
</div>
</section>

<section className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 border-t border-gray-200/60" id="testimonials">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
<div className="lg:col-span-4">
<div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-widest text-sky-600" style={{fontFamily: '\'JetBrains Mono\', monospace', fontWeight: '500'}}>
<span className="w-6 h-px bg-sky-500"></span> 03 — Trusted
        </div>
<h2 className="text-4xl tracking-tight font-normal text-gray-900 leading-[1.05] mb-4" style={{fontFamily: '\'Space Grotesk\',sans-serif'}}>
          The word from our clients.
        </h2>
<p className="text-sm text-gray-600 leading-relaxed">Homeowners and businesses across the Eastern Cape rely on A WAY for dependable, efficient HVAC.</p>
</div>
<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="border border-gray-200/60 rounded-lg p-7 bg-white relative">
<iconify-icon className="text-sky-300 text-2xl mb-3" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-sm text-gray-800 leading-relaxed mb-6">A WAY exceeded our expectations. The team was professional, efficient, and the installation was seamless. Our new system works perfectly in the hot South African climate.</p>
<div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-400 to-cyan-200 flex items-center justify-center text-white text-xs font-medium">TM</div>
<div>
<div className="text-sm font-medium text-gray-900 tracking-tight">Thabo Mokoena</div>
<div className="text-xs text-gray-500">Homeowner · Port Elizabeth</div>
</div>
</div>
</div>
<div className="border border-gray-200/60 rounded-lg p-7 bg-white relative">
<iconify-icon className="text-sky-300 text-2xl mb-3" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-sm text-gray-800 leading-relaxed mb-6">Quick diagnosis, clean work, fair pricing. Our cold storage hasn't had a single issue since the team set up the maintenance plan. Highly recommend.</p>
<div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-500 to-cyan-300 flex items-center justify-center text-white text-xs font-medium">LN</div>
<div>
<div className="text-sm font-medium text-gray-900 tracking-tight">Lerato Ndlovu</div>
<div className="text-xs text-gray-500">Operations Mgr · Gqeberha</div>
</div>
</div>
</div>
<div className="border border-gray-200/60 rounded-lg p-7 bg-white relative md:col-span-2">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="flex-1">
<iconify-icon className="text-sky-300 text-2xl mb-3" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-sm text-gray-800 leading-relaxed">"From quote to commissioning, the experience was seamless. Our office is finally consistent in temperature, and our energy bill has dropped meaningfully."</p>
</div>
<div className="flex items-center gap-3 md:border-l md:border-gray-200/60 md:pl-6">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-sky-200 flex items-center justify-center text-white text-xs font-medium">SV</div>
<div>
<div className="text-sm font-medium text-gray-900 tracking-tight">Sandra van Wyk</div>
<div className="text-xs text-gray-500">Facilities · Newton Park</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 rounded-xl border border-gray-200/60 overflow-hidden relative bg-gradient-to-br from-white via-sky-50/40 to-white p-10 md:p-14" id="contact">
<div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-[radial-gradient(var(--tw-gradient-stops))] from-sky-200 to-transparent rounded-full opacity-50 blur-2xl"></div>
<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
<div>
<h3 className="text-3xl sm:text-4xl tracking-tight font-normal text-gray-900 leading-[1.1] mb-3" style={{fontFamily: '\'Space Grotesk\',sans-serif'}}>Ready for cooler days?</h3>
<p className="text-sm text-gray-600 leading-relaxed max-w-md">Book a free site assessment in Nelson Mandela Bay. Our team will design the most efficient system for your space.</p>
</div>
<form className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<input className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-sky-400 transition-colors" placeholder="Name" type="text"/>
<input className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-sky-400 transition-colors" placeholder="Email" type="email"/>
<input className="sm:col-span-2 bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-sky-400 transition-colors" placeholder="How can we help?" type="text"/>
<button className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1a1a1a] text-white text-sm rounded-lg hover:bg-black transition-all" type="submit">
            Request a callback
            <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 border-t border-gray-200/60">
<div className="grid grid-cols-2 md:grid-cols-12 gap-10 mb-12">
<div className="col-span-2 md:col-span-5">
<div className="flex items-center gap-1.5 mb-4">
<span className="text-sm font-medium tracking-tighter uppercase" style={{fontFamily: '\'Space Grotesk\',sans-serif'}}>A·WAY</span>
<div className="w-1.5 h-1.5 rounded-full bg-sky-500 mb-2"></div>
</div>
<p className="text-sm text-gray-600 leading-relaxed max-w-sm mb-6">A WAY Airconditioning, Refrigeration, Heating &amp; Ventilation — serving Nelson Mandela Bay and the Eastern Cape.</p>
<div className="flex items-center gap-3 text-xs text-gray-500" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon className="text-sky-500" icon="solar:map-point-linear"></iconify-icon>
          NEWTON PARK · GQEBERHA
        </div>
</div>
<div className="md:col-span-2">
<div className="text-xs uppercase tracking-widest text-gray-400 mb-4" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Services</div>
<ul className="space-y-2.5 text-sm text-gray-600">
<li><a className="hover:text-gray-900" href="#">Installation</a></li>
<li><a className="hover:text-gray-900" href="#">Maintenance</a></li>
<li><a className="hover:text-gray-900" href="#">Refrigeration</a></li>
<li><a className="hover:text-gray-900" href="#">Heat Pumps</a></li>
</ul>
</div>
<div className="md:col-span-2">
<div className="text-xs uppercase tracking-widest text-gray-400 mb-4" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Company</div>
<ul className="space-y-2.5 text-sm text-gray-600">
<li><a className="hover:text-gray-900" href="#">About</a></li>
<li><a className="hover:text-gray-900" href="#">Blog</a></li>
<li><a className="hover:text-gray-900" href="#">Team</a></li>
<li><a className="hover:text-gray-900" href="#">Contact</a></li>
</ul>
</div>
<div className="md:col-span-3">
<div className="text-xs uppercase tracking-widest text-gray-400 mb-4" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Contact</div>
<ul className="space-y-2.5 text-sm text-gray-600">
<li className="flex items-center gap-2"><iconify-icon className="text-sky-500" icon="solar:phone-linear"></iconify-icon> +27 41 000 0000</li>
<li className="flex items-center gap-2"><iconify-icon className="text-sky-500" icon="solar:letter-linear"></iconify-icon> hello@away.co.za</li>
<li className="flex items-center gap-2"><iconify-icon className="text-sky-500" icon="solar:clock-circle-linear"></iconify-icon> Mon–Fri · 08:00–17:00</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-200/60 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-gray-500">
<div>© 2025 A WAY Airconditioning &amp; Refrigeration. All rights reserved.</div>
<div className="flex items-center gap-6">
<a className="hover:text-gray-900" href="#">Terms of service</a>
<a className="hover:text-gray-900" href="#">Privacy policy</a>
<span className="text-gray-400" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>v1.0 · EC-ZA</span>
</div>
</div>
</footer>


    </>
  );
}
