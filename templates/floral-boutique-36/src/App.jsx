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



        // GSAP Animations
        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.to(".hero-anim", {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                startAt: { y: 30, opacity: 0 },
                delay: 0.2
            });
        });

        // Three.js Setup (Sunset Floral Flow)
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 15;
        camera.position.y = 2;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Abstract organic shape (Plane manipulated in loop)
        const geometry = new THREE.PlaneGeometry(40, 20, 64, 64);
        
        const material = new THREE.MeshStandardMaterial({
            color: 0xff7a33,      // Vibrant Orange
            emissive: 0xdb2b52,   // Pinkish/Magenta glow
            emissiveIntensity: 0.6,
            roughness: 0.3,
            metalness: 0.1,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.85
        });

        const plane = new THREE.Mesh(geometry, material);
        plane.rotation.x = -Math.PI * 0.3;
        plane.position.y = -5;
        scene.add(plane);

        // Lighting to enhance sunset feel
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(0xffd700, 1.5, 50); // Warm yellow
        pointLight1.position.set(5, 5, 5);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xff1493, 2, 50); // Deep pink
        pointLight2.position.set(-10, 0, 10);
        scene.add(pointLight2);

        const clock = new THREE.Clock();
        const initialPositions = geometry.attributes.position.clone();

        // Animation Loop
        function animate() {
            requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            // Create flowing/petal-like movement
            const positions = geometry.attributes.position;
            
            for (let i = 0; i < positions.count; i++) {
                const ix = initialPositions.getX(i);
                const iy = initialPositions.getY(i);
                
                // Complex wave function for organic feel
                const z = Math.sin(ix * 0.3 + elapsedTime * 0.8) * 1.5 + 
                          Math.cos(iy * 0.3 + elapsedTime * 0.5) * 1.5 +
                          Math.sin((ix + iy) * 0.1 + elapsedTime * 0.3) * 2;
                          
                positions.setZ(i, z);
            }
            
            positions.needsUpdate = true;
            
            // Slow overall rotation
            plane.rotation.z = Math.sin(elapsedTime * 0.1) * 0.05;

            renderer.render(scene, camera);
        }

        animate();

        // Handle Resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-orange-300/20 blur-[120px]"></div>
<div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-rose-400/20 blur-[120px]"></div>
<div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[40%] rounded-full bg-yellow-200/20 blur-[100px]"></div>
</div>

<div id="canvas-container"></div>

<nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12 max-w-7xl mx-auto hero-anim opacity-0">
<div className="flex items-center gap-8">
<a className="text-lg font-medium tracking-tighter text-slate-900 uppercase" href="#">
                FLR
            </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-normal text-slate-700 hover:text-slate-900 transition-colors" href="#">Bespoke</a>
<a className="text-sm font-normal text-slate-700 hover:text-slate-900 transition-colors" href="#">Collections</a>
<a className="text-sm font-normal text-slate-700 hover:text-slate-900 transition-colors" href="#">Journal</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-normal text-slate-700 hover:text-slate-900 transition-colors" href="#">Sign in</a>
<button className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200/60 bg-white/50 backdrop-blur-md hover:bg-slate-50 transition-colors text-slate-800">
<iconify-icon height="20" icon="solar:cart-large-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</nav>

<header className="relative z-10 pt-24 pb-40 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center min-h-[80vh] justify-center">
<div className="hero-anim opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 border border-white/50 backdrop-blur-md mb-8 shadow-sm shadow-orange-500/10">
<span className="w-2 h-2 rounded-full bg-orange-400"></span>
<span className="text-xs font-medium text-slate-800 tracking-wide uppercase">Now accepting custom orders</span>
</div>
<h1 className="hero-anim opacity-0 text-5xl md:text-7xl lg:text-8xl font-normal tracking-tighter text-slate-900 leading-[1.1] max-w-4xl mix-blend-overlay">
            Botanical artistry, <br className="hidden md:block"/>
<span className="text-slate-600">tailored for you.</span>
</h1>
<p className="hero-anim opacity-0 mt-8 text-base md:text-lg font-normal text-slate-700 max-w-xl leading-relaxed mix-blend-overlay">
            We move beyond standard catalogs. Every arrangement is a unique dialogue between nature's seasonal best and your personal aesthetic vision.
        </p>
<div className="hero-anim opacity-0 mt-12 flex flex-col sm:flex-row items-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-orange-900/20 flex items-center justify-center gap-2 group border border-slate-800">
                Start your consultation
                <iconify-icon className="group-hover:translate-x-1 transition-transform" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/60 backdrop-blur-md text-slate-900 border border-white/60 text-sm font-medium hover:bg-white/80 transition-all flex items-center justify-center gap-2 shadow-sm">
                Explore gallery
            </button>
</div>
</header>

<section className="relative z-10 py-24 bg-white/60 border-y border-slate-100/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-slate-900">The Bespoke Process</h2>
<p className="mt-3 text-sm font-normal text-slate-500 max-w-md">A thoughtful approach to floral design, ensuring every stem speaks to your occasion.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">

<div className="group">
<div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500">
<iconify-icon height="24" icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">1. Consultation</h3>
<p className="text-sm font-normal text-slate-500 leading-relaxed">
                        We begin with your vision. Share your color palettes, mood boards, and the sentiment behind the arrangement.
                    </p>
</div>

<div className="group">
<div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500">
<iconify-icon height="24" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">2. Curation</h3>
<p className="text-sm font-normal text-slate-500 leading-relaxed">
                        Our florists hand-select the finest seasonal blooms from local growers, focusing on unique textures and delicate hues.
                    </p>
</div>

<div className="group">
<div className="w-12 h-12 rounded-2xl bg-yellow-50 text-yellow-500 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500">
<iconify-icon height="24" icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">3. Composition</h3>
<p className="text-sm font-normal text-slate-500 leading-relaxed">
                        Crafted with intention and delivered in our signature sustainable packaging, ready to transform your space.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 max-w-7xl mx-auto px-6 md:px-12">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-slate-900 mb-12 text-center md:text-left">Aesthetic Inspirations</h2>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-7 group cursor-pointer relative overflow-hidden rounded-[2rem]">
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
<img alt="Soft pink and white flowers" className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 z-20">
<div className="flex items-center gap-3 mb-2">
<span className="w-3 h-3 rounded-full bg-rose-200"></span>
<span className="w-3 h-3 rounded-full bg-sky-100"></span>
<span className="text-xs font-medium text-white tracking-wide uppercase drop-shadow-md">Palette</span>
</div>
<h3 className="text-3xl font-medium tracking-tight text-white drop-shadow-md">Blush &amp; Breeze</h3>
</div>
</div>

<div className="md:col-span-5 group cursor-pointer relative overflow-hidden rounded-[2rem]">
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
<img alt="Orange and yellow flowers" className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&amp;w=2727&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 z-20">
<div className="flex items-center gap-3 mb-2">
<span className="w-3 h-3 rounded-full bg-orange-200"></span>
<span className="w-3 h-3 rounded-full bg-yellow-100"></span>
<span className="text-xs font-medium text-white tracking-wide uppercase drop-shadow-md">Palette</span>
</div>
<h3 className="text-3xl font-medium tracking-tight text-white drop-shadow-md">Golden Hour</h3>
</div>
</div>

<div className="md:col-span-12 group cursor-pointer relative overflow-hidden rounded-[2rem] mt-2">
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
<img alt="Minimalist white flowers" className="w-full h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 p-8 z-20">
<div className="flex items-center gap-3 mb-2">
<span className="w-3 h-3 rounded-full bg-white border border-slate-200"></span>
<span className="w-3 h-3 rounded-full bg-slate-100 border border-slate-200"></span>
<span className="text-xs font-medium text-white tracking-wide uppercase drop-shadow-md">Palette</span>
</div>
<h3 className="text-3xl font-medium tracking-tight text-white drop-shadow-md">Pure Canvas</h3>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 flex justify-center text-center relative z-10">
<div className="max-w-3xl">
<iconify-icon className="text-slate-200 mb-6 mx-auto" height="40" icon="solar:quote-left-linear" style={{strokeWidth: '1'}} width="40"></iconify-icon>
<p className="text-2xl md:text-4xl font-normal tracking-tight text-slate-800 leading-snug">
                "Flora didn't just deliver flowers; they translated my fragmented ideas into a sculptural arrangement that felt incredibly personal and profoundly beautiful."
            </p>
<div className="mt-8 flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<p className="text-sm font-medium text-slate-900">Elara V.</p>
<p className="text-xs font-normal text-slate-500">Custom Event Client</p>
</div>
</div>
</div>
</section>

<footer className="relative z-10 bg-white border-t border-slate-100/60 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
<div>
<h4 className="text-2xl font-normal tracking-tight text-slate-900 mb-4">Join our inner circle</h4>
<p className="text-sm font-normal text-slate-500 mb-6 max-w-sm">Receive notes on seasonality, editorial inspiration, and early access to limited collections.</p>

<form className="flex items-center w-full max-w-md relative">
<input className="w-full bg-slate-50 border border-slate-200/60 rounded-full py-3 pl-5 pr-12 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-slate-300 focus:bg-white transition-colors" placeholder="Email address" type="email"/>
<button className="absolute right-1.5 p-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors flex items-center justify-center" type="submit">
<iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</form>
</div>
<div className="flex gap-16 md:justify-end">
<div className="flex flex-col gap-4">
<span className="text-xs font-medium tracking-wide text-slate-900 uppercase mb-2">Studio</span>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#">About us</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#">The Process</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#">Journal</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-medium tracking-wide text-slate-900 uppercase mb-2">Connect</span>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#">Instagram</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#">Pinterest</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#">Inquiries</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-100/60 text-xs font-normal text-slate-400">
<p>© 2024 Flora Studio. All rights reserved.</p>
<div className="flex items-center gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-600 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
