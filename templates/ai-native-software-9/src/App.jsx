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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Smooth Scrolling (Lenis)
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // In-View Cascade Animation
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.remove('opacity-0', 'translate-y-8', 'blur-sm');
                            entry.target.classList.add('opacity-100', 'translate-y-0', 'blur-0');
                        }, index * 100);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

            document.querySelectorAll('.in-view').forEach(el => {
                el.classList.add('transition-all', 'duration-[1200ms]', 'ease-[cubic-bezier(0.25,1,0.5,1)]', 'opacity-0', 'translate-y-8', 'blur-sm');
                observer.observe(el);
            });
        });

        // Magnetic Buttons
        const magneticElements = document.querySelectorAll('.magnetic-btn');
        magneticElements.forEach((el) => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0px, 0px)';
                el.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
            });
            el.addEventListener('mouseenter', () => {
                el.style.transition = 'none';
            });
        });

        // WebGL 3D Object Animation (Adapted from source)
        function initWebGL() {
            const container = document.getElementById('canvas-container');
            if(!container) return;

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
            
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            const geometry = new THREE.IcosahedronGeometry(1.6, 1);
            const material = new THREE.MeshPhysicalMaterial({
                color: 0x18181b,
                metalness: 0.9,
                roughness: 0.2,
                clearcoat: 0.5,
                clearcoatRoughness: 0.1,
                emissive: 0x4f46e5,
                emissiveIntensity: 0.15,
                flatShading: true 
            });

            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
            directionalLight.position.set(5, 5, 5);
            scene.add(directionalLight);

            const directionalLight2 = new THREE.DirectionalLight(0x818cf8, 1.5);
            directionalLight2.position.set(-5, -5, -2);
            scene.add(directionalLight2);

            const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
            scene.add(ambientLight);

            camera.position.z = 5.5;

            let time = 0;
            function animate() {
                requestAnimationFrame(animate);
                time += 0.003;
                mesh.rotation.x += 0.002;
                mesh.rotation.y += 0.003;
                mesh.position.y = Math.sin(time * 2) * 0.15;
                material.emissiveIntensity = 0.1 + Math.sin(time * 4) * 0.1;
                renderer.render(scene, camera);
            }
            animate();

            window.addEventListener('resize', () => {
                if(!container) return;
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            });
        }

        // Accordion Logic (Adapted from source)
        function initAccordion() {
            const items = document.querySelectorAll('.accordion-item');
            items.forEach((item) => {
                item.addEventListener('click', () => {
                    items.forEach(el => {
                        el.style.flex = '0 0 auto';
                        el.classList.remove('flex-[1_0_0%]', 'bg-gradient-to-br', 'from-indigo-500/40', 'via-zinc-800/40', 'to-zinc-900/40', 'cursor-default');
                        el.classList.add('w-16', 'cursor-pointer', 'bg-zinc-800/30');
                        
                        const verticalTextContainer = el.querySelector('.absolute.inset-\\[1px\\].flex');
                        if(verticalTextContainer) verticalTextContainer.classList.remove('opacity-0', 'pointer-events-none');

                        const content = el.querySelector('.content-wrapper');
                        if(content) {
                            content.classList.remove('opacity-100', 'delay-200');
                            content.classList.add('opacity-0', 'pointer-events-none');
                        }

                        const textObj = el.querySelector('.content-text');
                        if(textObj) {
                            textObj.classList.remove('translate-y-0', 'delay-200');
                            textObj.classList.add('translate-y-4');
                        }
                        
                        const innerBg = el.querySelector('.bg-gradient-to-t');
                        if(innerBg) innerBg.classList.add('hidden');
                    });

                    item.style.flex = ''; 
                    item.classList.remove('w-16', 'cursor-pointer', 'bg-zinc-800/30');
                    item.classList.add('flex-[1_0_0%]', 'bg-gradient-to-br', 'from-indigo-500/40', 'via-zinc-800/40', 'to-zinc-900/40', 'cursor-default');

                    const verticalTextContainer = item.querySelector('.absolute.inset-\\[1px\\].flex');
                    if(verticalTextContainer) verticalTextContainer.classList.add('opacity-0', 'pointer-events-none');

                    const content = item.querySelector('.content-wrapper');
                    if(content) {
                        content.classList.remove('opacity-0', 'pointer-events-none');
                        content.classList.add('opacity-100', 'delay-200');
                    }

                    const textObj = item.querySelector('.content-text');
                    if(textObj) {
                        textObj.classList.remove('translate-y-4');
                        textObj.classList.add('translate-y-0', 'delay-200');
                    }

                    const innerBg = item.querySelector('.bg-gradient-to-t');
                    if(innerBg) innerBg.classList.remove('hidden');
                });
            });
        }

        window.addEventListener('DOMContentLoaded', () => {
            initWebGL();
            initAccordion();
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
      

<div className="relative w-full max-w-[1400px] mx-auto min-h-screen flex flex-col px-6 md:px-12">

<div className="absolute top-0 bottom-0 left-6 md:left-12 w-[1px] bg-zinc-800/40 hidden md:block z-0 pointer-events-none"></div>
<div className="absolute top-0 bottom-0 right-6 md:right-12 w-[1px] bg-zinc-800/40 hidden md:block z-0 pointer-events-none"></div>

<nav className="relative z-50 w-full max-w-6xl mx-auto flex justify-between items-center py-8 in-view">
<div className="tracking-tighter text-xl font-medium text-white uppercase">Donovan</div>
<a className="magnetic-btn relative group px-6 py-3 bg-[#18181B] border border-zinc-800 rounded-full cursor-pointer flex items-center justify-center overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-colors duration-300 hover:bg-[#202024]" href="#contact">
<div className="btn-mask-container h-[20px] w-full flex items-center justify-center">
<span className="btn-mask-text base-text text-sm font-medium text-zinc-100 tracking-tight">Initiate Build</span>
<span className="btn-mask-text hover-text text-sm font-medium text-zinc-100 tracking-tight">Initiate Build</span>
</div>
</a>
</nav>

<main className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-32 md:gap-48 pb-32">

<section className="relative pt-20 md:pt-32 flex flex-col gap-16 min-h-[70vh] justify-center in-view">
<div className="absolute top-0 right-[-10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-50 pointer-events-none -z-10 mix-blend-screen" id="canvas-container"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
<div className="lg:col-span-4 flex items-start pt-3">
<span className="text-xs font-mono font-medium text-zinc-500 tracking-widest uppercase flex items-center gap-2">
<span className="text-indigo-400/80">[SYSTEM ACTIVE]</span> AI-Native Agency
                        </span>
</div>
<div className="lg:col-span-8 flex flex-col gap-8">
<h1 className="text-4xl md:text-6xl lg:text-7xl text-zinc-400 leading-[1.05] font-light tracking-tight">
<span className="text-zinc-100 block mb-2">Turn audience trust into scalable software.</span> Mapping distribution to absolute precision.
                        </h1>
<p className="text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed font-light">
                            Donovan Apps builds paid web applications, SaaS products, and AI tools for creators with distribution. You possess the audience and the taste. We architect the product strategy and technical execution.
                        </p>
<div className="flex items-center gap-6 mt-4">
<a className="text-sm font-medium text-zinc-100 flex items-center gap-2 group hover:text-indigo-400 transition-colors duration-300" href="#features">
                                Explore Framework 
                                <iconify-icon className="transform group-hover:translate-x-1 transition-transform duration-300" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-10 in-view">
<div className="text-center w-full">
<p className="text-xs font-mono font-medium text-zinc-600 tracking-widest uppercase">Infrastructure scaled across industry standards</p>
</div>
<div className="w-full flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale mix-blend-screen">
<iconify-icon className="hover:opacity-100 transition-opacity duration-500" height="64" icon="simple-icons:nasa" width="64"></iconify-icon>
<iconify-icon className="hover:opacity-100 transition-opacity duration-500" height="64" icon="simple-icons:spacex" width="64"></iconify-icon>
<iconify-icon className="hover:opacity-100 transition-opacity duration-500" height="64" icon="simple-icons:uber" width="64"></iconify-icon>
<iconify-icon className="hover:opacity-100 transition-opacity duration-500" height="64" icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon className="hover:opacity-100 transition-opacity duration-500" height="64" icon="simple-icons:grab" width="64"></iconify-icon>
<iconify-icon className="hover:opacity-100 transition-opacity duration-500 hidden sm:block" height="64" icon="simple-icons:bose" width="64"></iconify-icon>
<iconify-icon className="hover:opacity-100 transition-opacity duration-500 hidden md:block" height="64" icon="simple-icons:discover" width="64"></iconify-icon>
<iconify-icon className="hover:opacity-100 transition-opacity duration-500 hidden lg:block" height="64" icon="simple-icons:dji" width="64"></iconify-icon>
<iconify-icon className="hover:opacity-100 transition-opacity duration-500 hidden lg:block" height="64" icon="simple-icons:nikon" width="64"></iconify-icon>
<iconify-icon className="hover:opacity-100 transition-opacity duration-500 hidden xl:block" height="64" icon="simple-icons:sony" width="64"></iconify-icon>
</div>
</section>

<section className="flex flex-col gap-16 in-view" id="features">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">

<div className="lg:col-span-4 flex flex-col gap-12 pb-4">
<div className="flex flex-col gap-3 group">
<iconify-icon className="text-zinc-500 group-hover:text-indigo-400 transition-colors duration-300" height="24" icon="solar:target-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<h3 className="text-xl font-normal text-zinc-100 tracking-tight">Zero Fragmentation</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-[260px] font-light">
                                Consolidate courses, communities, and coaching into a single owned platform optimized for retention.
                            </p>
</div>
<div className="flex flex-col gap-3 group">
<iconify-icon className="text-zinc-500 group-hover:text-indigo-400 transition-colors duration-300" height="24" icon="solar:server-path-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<h3 className="text-xl font-normal text-zinc-100 tracking-tight">AI-Native Stacks</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-[260px] font-light">
                                Leveraging modern LLMs to build features that feel like magic, scaling your specialized knowledge asynchronously.
                            </p>
</div>
</div>

<div className="lg:col-span-8 h-[500px] w-full flex gap-3 overflow-hidden" id="accordion-container">

<div className="accordion-item relative h-full w-16 min-w-[4rem] cursor-pointer group flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] p-[1px] bg-zinc-800/30 hover:bg-zinc-700/50 rounded-lg overflow-hidden" data-index="0">
<div className="absolute inset-[1px] bg-[#080808] flex flex-col items-center py-8 z-10 transition-colors duration-500 group-hover:bg-[#0a0a0a] rounded-lg">
<span className="text-2xl font-normal text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300 tracking-tight" style={{writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>Phase 1</span>
</div>
<div className="content-wrapper absolute inset-0 opacity-0 pointer-events-none p-8 flex flex-col justify-between z-20">
<span className="text-4xl font-normal text-zinc-100 tracking-tight">Discovery</span>
<div className="transform translate-y-4 transition-transform duration-500 content-text">
<h4 className="text-2xl font-normal text-zinc-100 mb-3 tracking-tight">Audience Mapping</h4>
<p className="text-sm text-zinc-400 max-w-md font-light">Analyzing your specific distribution channels to identify high-leverage, repeated audience problems that software can solve.</p>
</div>
</div>
</div>
<div className="accordion-item relative h-full w-16 min-w-[4rem] cursor-pointer group flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] p-[1px] bg-zinc-800/30 hover:bg-zinc-700/50 rounded-lg overflow-hidden" data-index="1">
<div className="absolute inset-[1px] bg-[#080808] flex flex-col items-center py-8 z-10 transition-colors duration-500 group-hover:bg-[#0a0a0a] rounded-lg">
<span className="text-2xl font-normal text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300 tracking-tight" style={{writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>Phase 2</span>
</div>
<div className="content-wrapper absolute inset-0 opacity-0 pointer-events-none p-8 flex flex-col justify-between z-20">
<span className="text-4xl font-normal text-zinc-100 tracking-tight">Strategy</span>
<div className="transform translate-y-4 transition-transform duration-500 content-text">
<h4 className="text-2xl font-normal text-zinc-100 mb-3 tracking-tight">Product Taste</h4>
<p className="text-sm text-zinc-400 max-w-md font-light">Defining the exact UX vectors, payment models, and core logic required to convert followers into paying software subscribers.</p>
</div>
</div>
</div>
<div className="accordion-item relative h-full w-16 min-w-[4rem] cursor-pointer group flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] p-[1px] bg-zinc-800/30 hover:bg-zinc-700/50 rounded-lg overflow-hidden" data-index="2">
<div className="absolute inset-[1px] bg-[#080808] flex flex-col items-center py-8 z-10 transition-colors duration-500 group-hover:bg-[#0a0a0a] rounded-lg">
<span className="text-2xl font-normal text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300 tracking-tight" style={{writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>Phase 3</span>
</div>
<div className="content-wrapper absolute inset-0 opacity-0 pointer-events-none p-8 flex flex-col justify-between z-20">
<span className="text-4xl font-normal text-zinc-100 tracking-tight">Architecture</span>
<div className="transform translate-y-4 transition-transform duration-500 content-text">
<h4 className="text-2xl font-normal text-zinc-100 mb-3 tracking-tight">Core Infrastructure</h4>
<p className="text-sm text-zinc-400 max-w-md font-light">Handling the complexities: secure auth, high-performance databases, edge hosting, and seamless stripe integration.</p>
</div>
</div>
</div>

<div className="accordion-item relative h-full flex-[1_0_0%] min-w-[4rem] cursor-default group overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] p-[1px] bg-gradient-to-br from-indigo-500/40 via-zinc-800/40 to-zinc-900/40 rounded-lg" data-index="3">
<div className="absolute inset-[1px] bg-[#080808] flex flex-col items-center py-8 z-10 opacity-0 pointer-events-none transition-opacity duration-300 rounded-lg">
<span className="text-2xl font-normal text-zinc-600 tracking-tight" style={{writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>Phase 4</span>
</div>
<div className="absolute inset-[1px] bg-[#080808] z-0 rounded-lg"></div>
<div className="absolute inset-[1px] bg-gradient-to-t from-indigo-950/20 to-transparent z-0 rounded-lg pointer-events-none"></div>
<div className="content-wrapper absolute inset-0 opacity-100 p-8 flex flex-col justify-between z-20 transition-opacity duration-700 delay-200">
<span className="text-4xl font-normal text-zinc-100 tracking-tight">Execution</span>
<div className="transform translate-y-0 transition-transform duration-700 delay-200 content-text">
<h4 className="text-2xl font-normal text-white mb-4 tracking-tight">Deploy &amp; Telemetry</h4>
<p className="text-sm text-zinc-400 leading-relaxed max-w-md font-light">
                                        Rapid AI-native development workflows guarantee a swift build without technical debt. Continuous telemetry is activated post-launch, allowing data-driven structural iterations to enforce market superiority.
                                    </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-12 in-view">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-4 flex flex-col gap-4">
<span className="text-xs font-mono font-medium text-zinc-500 tracking-widest uppercase flex items-center gap-2">
<span className="text-indigo-400/80">[VECTORS]</span> Partnership Models
                        </span>
<h2 className="text-3xl md:text-4xl font-light text-zinc-100 tracking-tight">Calibrated to your exact parameters.</h2>
<p className="text-sm text-zinc-400 font-light mt-2 max-w-sm">We operate exclusively as a technical partner for creators with established distribution channels.</p>
</div>
<div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="flex flex-col justify-between p-8 bg-[#080808] border border-zinc-800 rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] group hover:border-zinc-700 transition-colors duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-zinc-800/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
<div>
<h3 className="text-xl font-normal text-zinc-100 tracking-tight mb-2">MVP Ignition</h3>
<p className="text-sm text-zinc-500 font-light mb-8">Fast iteration for validating audience willingness to pay for specialized software.</p>
<div className="flex items-baseline gap-2 mb-8">
<span className="text-4xl font-light text-white tracking-tight">Custom</span>
</div>
<ul className="flex flex-col gap-4 text-sm text-zinc-400 font-light">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="18"></iconify-icon> Core feature set build</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="18"></iconify-icon> Auth &amp; payment integration</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="18"></iconify-icon> 4-6 week deployment vector</li>
</ul>
</div>
<button className="magnetic-btn mt-10 w-full py-3 bg-[#18181B] border border-zinc-800 rounded-lg text-sm text-zinc-300 hover:text-white transition-colors duration-300">
                                Initialize Scope
                            </button>
</div>

<div className="flex flex-col justify-between p-8 bg-gradient-to-b from-[#101014] to-[#080808] border border-indigo-500/30 rounded-xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] relative overflow-hidden group">
<div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-normal text-zinc-100 tracking-tight">Platform Scale</h3>
<span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-mono rounded-md border border-indigo-500/20">PREMIUM</span>
</div>
<p className="text-sm text-zinc-500 font-light mb-8">Full ecosystem rebuild for top 1% creators moving off fragmented tools.</p>
<div className="flex items-baseline gap-2 mb-8">
<span className="text-4xl font-light text-white tracking-tight">Retainer</span>
<span className="text-sm text-zinc-500">/mo</span>
</div>
<ul className="flex flex-col gap-4 text-sm text-zinc-300 font-light">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:star-circle-linear" width="18"></iconify-icon> AI-native workflows</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:star-circle-linear" width="18"></iconify-icon> Complex database architecture</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:star-circle-linear" width="18"></iconify-icon> Maintenance &amp; infrastructure scaling</li>
</ul>
</div>
<button className="magnetic-btn relative z-10 mt-10 w-full py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm text-white font-medium transition-colors duration-300 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                                Apply for Partnership
                            </button>
</div>
</div>
</div>
</section>

<section className="in-view py-12 md:py-24 border-t border-zinc-900" id="contact">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
<div className="flex flex-col gap-6">
<span className="text-xs font-mono font-medium text-indigo-400 tracking-widest uppercase">Start Transmission</span>
<h2 className="text-4xl md:text-5xl font-light text-zinc-100 tracking-tight leading-[1.1]">
                            Ready to eliminate the latency between audience and product?
                        </h2>
<p className="text-base text-zinc-400 font-light max-w-md">
                            Submit your parameters. If the vectors align with our expertise, we will establish a secure connection within 24 hours.
                        </p>
</div>
<div className="p-8 md:p-10 bg-[#080808] border border-zinc-800/80 rounded-2xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<form className="flex flex-col gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-wider">Commander Name</label>
<input className="w-full bg-[#050505] border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-300 placeholder:text-zinc-700 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="Jane Doe" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-wider">Comms Channel (Email)</label>
<input className="w-full bg-[#050505] border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-300 placeholder:text-zinc-700 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="jane@creator.com" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-wider">Audience Distribution</label>
<input className="w-full bg-[#050505] border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-300 placeholder:text-zinc-700 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="e.g. 50k Newsletter, 200k Twitter" type="text"/>
</div>
<button className="magnetic-btn w-full py-4 mt-2 bg-zinc-100 hover:bg-white text-[#050505] rounded-lg font-medium text-sm transition-colors duration-300 flex items-center justify-center gap-2" type="button">
                                Transmit Request <iconify-icon icon="solar:plain-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</section>
</main>

<footer className="relative z-10 w-full max-w-6xl mx-auto border-t border-zinc-900 py-12 flex flex-col md:flex-row justify-between items-center gap-6 in-view">
<div className="flex flex-col gap-2">
<div className="tracking-tighter text-xl font-medium text-white uppercase">Donovan</div>
<p className="text-xs text-zinc-600 font-light">© 2024 Donovan Apps. All systems nominal.</p>
</div>
<div className="flex gap-8">
<a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors font-light" href="#">Manifesto</a>
<a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors font-light" href="#">Telemetry (Blog)</a>
<a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors font-light" href="#">X / Twitter</a>
</div>
</footer>
</div>



    </>
  );
}
