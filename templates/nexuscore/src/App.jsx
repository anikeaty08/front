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



        document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('webgl-container');
            if (!container) return;

            // Scene setup
            const scene = new THREE.Scene();
            
            // Isometric Camera setup
            const aspect = container.clientWidth / container.clientHeight;
            const d = 15;
            const camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);
            camera.position.set(20, 20, 20);
            camera.lookAt(scene.position);

            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            container.appendChild(renderer.domElement);

            // Lighting
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
            directionalLight.position.set(10, 20, 10);
            scene.add(directionalLight);

            const coreLight = new THREE.PointLight(0x00e5ff, 2, 20);
            coreLight.position.set(0, 2, 0);
            scene.add(coreLight);

            // Materials
            const darkMaterial = new THREE.MeshStandardMaterial({ 
                color: 0x111111, 
                roughness: 0.8,
                metalness: 0.2
            });
            const accentMaterial = new THREE.MeshStandardMaterial({ 
                color: 0x00e5ff, 
                emissive: 0x00e5ff,
                emissiveIntensity: 0.5,
                roughness: 0.2,
                metalness: 0.8
            });
            const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.3 });
            const gridMaterial = new THREE.LineBasicMaterial({ color: 0x333333, transparent: true, opacity: 0.3 });

            // Geometry Group to hold everything
            const group = new THREE.Group();
            scene.add(group);

            // 1. Base Grid (Floor)
            const gridHelper = new THREE.GridHelper(30, 15, 0x333333, 0x1a1a1a);
            gridHelper.position.y = -2;
            group.add(gridHelper);

            // 2. Main Platform
            const platformGeo = new THREE.BoxGeometry(14, 1.5, 14);
            const platform = new THREE.Mesh(platformGeo, darkMaterial);
            platform.position.y = -1;
            
            // Platform edges
            const edges = new THREE.EdgesGeometry(platformGeo);
            const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x333333 }));
            platform.add(line);
            group.add(platform);

            // 3. Middle Tier
            const midTierGeo = new THREE.BoxGeometry(8, 1, 8);
            const midTier = new THREE.Mesh(midTierGeo, darkMaterial);
            midTier.position.y = 0.25;
            
            const midEdges = new THREE.EdgesGeometry(midTierGeo);
            const midLine = new THREE.LineSegments(midEdges, new THREE.LineBasicMaterial({ color: 0x444444 }));
            midTier.add(midLine);
            group.add(midTier);

            // 4. Glowing Core
            const coreGeo = new THREE.BoxGeometry(3, 1, 3);
            const core = new THREE.Mesh(coreGeo, accentMaterial);
            core.position.y = 1.25;
            group.add(core);

            // 5. Holographic Rings (Wireframe Cylinders)
            const ringGeo = new THREE.CylinderGeometry(4.5, 4.5, 1.5, 32, 1, true);
            const ring1 = new THREE.LineSegments(new THREE.EdgesGeometry(ringGeo), wireframeMaterial);
            ring1.position.y = 4;
            group.add(ring1);

            const ring2 = new THREE.LineSegments(new THREE.EdgesGeometry(ringGeo), wireframeMaterial);
            ring2.position.y = 7;
            group.add(ring2);

            // 6. Floating Data Nodes
            const nodes = [];
            const nodeGeo = new THREE.BoxGeometry(0.6, 0.6, 0.6);
            for(let i=0; i<6; i++) {
                const node = new THREE.Mesh(nodeGeo, accentMaterial);
                
                // Random position around the center
                const angle = (i / 6) * Math.PI * 2;
                const radius = 8 + Math.random() * 2;
                node.position.x = Math.cos(angle) * radius;
                node.position.z = Math.sin(angle) * radius;
                node.position.y = Math.random() * 4 + 1;
                
                // Add wireframe box around node
                const nodeEdges = new THREE.EdgesGeometry(nodeGeo);
                const nodeWire = new THREE.LineSegments(nodeEdges, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 }));
                nodeWire.scale.set(1.5, 1.5, 1.5);
                node.add(nodeWire);

                // Store initial Y for bouncing animation
                node.userData.startY = node.position.y;
                node.userData.speed = 0.02 + Math.random() * 0.02;
                node.userData.offset = Math.random() * Math.PI * 2;

                group.add(node);
                nodes.push(node);
            }

            // Small decorative elements on platform
            const decorGeo = new THREE.BoxGeometry(0.8, 0.4, 1.5);
            const decorMat = new THREE.MeshStandardMaterial({ color: 0x00e5ff });
            for(let i=0; i<3; i++) {
                const decor = new THREE.Mesh(decorGeo, decorMat);
                decor.position.set(4, 0.25, -2 + i * 2);
                group.add(decor);
            }

            // Animation Loop
            const clock = new THREE.Clock();

            function animate() {
                requestAnimationFrame(animate);
                const time = clock.getElapsedTime();

                // Rotate group slowly
                group.rotation.y = Math.sin(time * 0.1) * 0.1;

                // Animate Rings
                ring1.rotation.y = time * 0.5;
                ring2.rotation.y = -time * 0.3;
                
                // Pulse core emissive
                const pulse = (Math.sin(time * 3) + 1) * 0.5; // 0 to 1
                accentMaterial.emissiveIntensity = 0.3 + pulse * 0.7;
                coreLight.intensity = 1 + pulse;

                // Bounce nodes
                nodes.forEach(node => {
                    node.position.y = node.userData.startY + Math.sin(time * 2 + node.userData.offset) * 0.5;
                    node.rotation.x += 0.01;
                    node.rotation.y += 0.01;
                });

                renderer.render(scene, camera);
            }

            animate();

            // Handle Resize
            window.addEventListener('resize', () => {
                if(!container) return;
                const newAspect = container.clientWidth / container.clientHeight;
                camera.left = -d * newAspect;
                camera.right = d * newAspect;
                camera.top = d;
                camera.bottom = -d;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-7xl bg-[#0a0a0a] border border-white/10 rounded-[20px] shadow-2xl overflow-hidden flex flex-col relative z-10">

<header className="flex items-center justify-between px-8 py-5 border-b border-white/5 bg-white/[0.01] backdrop-blur-md sticky top-0 z-50">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-xl" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-mono text-xs tracking-tighter font-medium uppercase">NEXUSCORE</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="font-mono text-xs text-white/50 hover:text-white uppercase tracking-widest transition-colors" href="#platform">Platform</a>
<a className="font-mono text-xs text-white/50 hover:text-white uppercase tracking-widest transition-colors" href="#features">Modules</a>
<a className="font-mono text-xs text-white/50 hover:text-white uppercase tracking-widest transition-colors" href="#pricing">Allocation</a>
<a className="font-mono text-xs text-white/50 hover:text-white uppercase tracking-widest transition-colors" href="#faq">Queries</a>
</nav>
<div className="flex items-center gap-6">
<a className="font-mono text-xs text-white/50 hover:text-white uppercase tracking-widest hidden sm:block" href="#">Authenticate</a>
<button className="border border-white/20 hover:border-[#00e5ff] hover:text-[#00e5ff] hover:bg-[#00e5ff]/5 text-white px-4 py-2 rounded uppercase font-mono text-xs tracking-widest transition-all">
                    Initialize
                </button>
</div>
</header>

<main className="flex flex-col lg:flex-row border-b border-white/5">

<div className="lg:w-1/2 p-8 lg:p-14 border-r border-white/5 flex flex-col justify-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none opacity-50"></div>
<div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-3 py-1 w-fit mb-8 bg-white/5 relative z-10 backdrop-blur-sm">
<div className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" style={{boxShadow: '0 0 8px #00e5ff'}}></div>
<span className="font-mono text-xs text-white/60 tracking-widest uppercase">Network Secure · v2.1</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl uppercase leading-none text-white mb-6 tracking-tighter relative z-10" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                    Orchestrate <br/> Systems <br/>
<span className="text-[#00e5ff]">Intelligently</span>
</h1>
<p className="text-sm text-white/50 max-w-md leading-relaxed mb-10 font-light relative z-10">
                    NEXUS.CORE initiates neural nodes that process, route, and optimize data streams across your architecture with absolute precision and limitless scalability.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-20 relative z-10">
<button className="bg-[#00e5ff] hover:bg-[#00cce5] text-black px-6 py-3.5 rounded uppercase font-mono text-xs font-normal tracking-widest transition-all flex items-center gap-2 w-full sm:w-auto justify-center shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)]">
                        Commence Sync
                        <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="border border-white/10 hover:bg-white/5 text-white px-6 py-3.5 rounded uppercase font-mono text-xs tracking-widest transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
<iconify-icon className="text-lg" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                        View Telemetry
                    </button>
</div>
<div className="mt-auto pt-8 border-t border-white/5 relative z-10">
<p className="font-mono text-xs text-white/40 tracking-widest uppercase mb-4">Integrated with networks:</p>
<div className="flex flex-wrap items-center gap-6 sm:gap-10 opacity-50 grayscale">
<span className="font-serif italic text-sm tracking-widest text-white">Cybernet</span>
<span className="font-medium tracking-tighter text-sm text-white">DATAGRID</span>
<span className="font-mono lowercase text-sm tracking-widest text-white">sys.logic</span>
<span className="font-normal text-sm tracking-tight text-white">Aethra</span>
<span className="font-serif uppercase text-xs tracking-widest text-white">VORTEX</span>
</div>
</div>
</div>

<div className="lg:w-1/2 relative bg-[#060606] min-h-[400px] lg:min-h-0 overflow-hidden flex items-center justify-center p-8 border-b lg:border-b-0 border-white/5">

<div className="absolute top-8 left-8 right-8 flex justify-between items-center z-20">
<span className="font-mono text-xs text-white/40 tracking-widest uppercase">// Neural Net Grid</span>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-pulse shadow-[0_0_8px_#00e5ff]"></div>
<span className="font-mono text-xs text-[#00e5ff] tracking-widest uppercase">Synced</span>
</div>
</div>

<div className="absolute top-[20%] left-[50%] -translate-x-[50%] z-20 flex flex-col items-center">
<div className="border border-white/10 bg-black/40 backdrop-blur-md px-4 py-2 rounded-sm flex flex-col items-center border-t-[#00e5ff]">
<span className="font-mono text-xs text-[#00e5ff]">Logic Core</span>
<span className="font-mono text-xs text-white/50 mt-1">Main Processor</span>
</div>

<div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent"></div>
</div>

<div className="absolute inset-0 z-10 pointer-events-none" id="webgl-container"></div>
</div>
</main>

<div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/5 bg-[#080808] border-b border-white/5 relative z-20">
<div className="p-6 flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-colors">
<span className="text-2xl text-white tracking-tighter" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>84</span>
<span className="font-mono text-xs text-[#00e5ff]/60 tracking-widest uppercase mt-2 group-hover:text-[#00e5ff] transition-colors">Nodes Active</span>
</div>
<div className="p-6 flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-colors">
<span className="text-2xl text-white tracking-tighter" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>3.2M</span>
<span className="font-mono text-xs text-[#00e5ff]/60 tracking-widest uppercase mt-2 group-hover:text-[#00e5ff] transition-colors">Req/Sec</span>
</div>
<div className="p-6 flex flex-col items-center justify-center text-center col-span-2 md:col-span-1 group hover:bg-white/[0.02] transition-colors bg-white/[0.01]">
<span className="text-2xl text-[#00e5ff] tracking-tighter" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '400'}}>914</span>
<span className="font-mono text-xs text-white/40 tracking-widest uppercase mt-2">Cycles Saved</span>
</div>
<div className="p-6 flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-colors">
<span className="text-2xl text-white tracking-tighter" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>99.99%</span>
<span className="font-mono text-xs text-[#00e5ff]/60 tracking-widest uppercase mt-2 group-hover:text-[#00e5ff] transition-colors">Stability</span>
</div>
<div className="p-6 flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-colors">
<span className="text-2xl text-white tracking-tighter" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>256+</span>
<span className="font-mono text-xs text-[#00e5ff]/60 tracking-widest uppercase mt-2 group-hover:text-[#00e5ff] transition-colors">Integrations</span>
</div>
</div>

<section className="flex flex-col border-b border-white/5 relative z-20 bg-[#0a0a0a]" id="features">
<div className="p-8 lg:p-14 border-b border-white/5 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<span className="font-mono text-xs text-[#00e5ff] tracking-widest uppercase mb-4 block">// System Capabilities</span>
<h2 className="text-3xl lg:text-4xl uppercase tracking-tighter text-white" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                        Architectural <br/> Advantages
                    </h2>
</div>
<p className="text-sm text-white/50 max-w-sm font-light leading-relaxed">
                    Engineered for deterministic performance. Our modules operate with zero-overhead abstraction, ensuring absolute data fidelity.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">

<div className="p-8 lg:p-12 hover:bg-white/[0.02] transition-colors duration-500 group">
<div className="w-10 h-10 rounded border border-white/10 bg-black/50 flex items-center justify-center text-white group-hover:text-[#00e5ff] group-hover:border-[#00e5ff]/30 transition-all mb-8 shadow-[0_0_0_rgba(0,229,255,0)] group-hover:shadow-[0_0_15px_rgba(0,229,255,0.15)]">
<iconify-icon className="text-xl" icon="solar:shield-network-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg uppercase tracking-tight text-white mb-3" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '400'}}>Byzantine Fault Tolerance</h3>
<p className="text-sm text-white/40 font-light leading-relaxed">
                        Distributed consensus mechanisms ensure your cluster remains operational even if up to 33% of nodes experience catastrophic failure or network partition.
                    </p>
</div>

<div className="p-8 lg:p-12 hover:bg-white/[0.02] transition-colors duration-500 group">
<div className="w-10 h-10 rounded border border-white/10 bg-black/50 flex items-center justify-center text-white group-hover:text-[#00e5ff] group-hover:border-[#00e5ff]/30 transition-all mb-8 shadow-[0_0_0_rgba(0,229,255,0)] group-hover:shadow-[0_0_15px_rgba(0,229,255,0.15)]">
<iconify-icon className="text-xl" icon="solar:bolt-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg uppercase tracking-tight text-white mb-3" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '400'}}>Sub-Millisecond Routing</h3>
<p className="text-sm text-white/40 font-light leading-relaxed">
                        Hardware-accelerated packet inspection routes payload streams directly through the closest physical backbone, eliminating software-layer latency.
                    </p>
</div>

<div className="p-8 lg:p-12 hover:bg-white/[0.02] transition-colors duration-500 group">
<div className="w-10 h-10 rounded border border-white/10 bg-black/50 flex items-center justify-center text-white group-hover:text-[#00e5ff] group-hover:border-[#00e5ff]/30 transition-all mb-8 shadow-[0_0_0_rgba(0,229,255,0)] group-hover:shadow-[0_0_15px_rgba(0,229,255,0.15)]">
<iconify-icon className="text-xl" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg uppercase tracking-tight text-white mb-3" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '400'}}>Stateless Topology</h3>
<p className="text-sm text-white/40 font-light leading-relaxed">
                        Scale horizontally infinitely. Every query contains its execution state, allowing load balancers to distribute workload strictly based on compute availability.
                    </p>
</div>
</div>
</section>

<section className="border-b border-white/5 relative bg-[#080808] overflow-hidden z-20">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="p-8 lg:p-14 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl uppercase tracking-tighter text-white mb-4" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                        Deployment Protocol
                    </h2>
<p className="text-sm text-white/50 font-light">
                        Transition from monolithic architecture to a distributed intelligence matrix in three discrete execution phases.
                    </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 relative">

<div className="hidden lg:block absolute top-[40px] left-[15%] right-[15%] h-px bg-white/10"></div>

<div className="flex flex-col items-center text-center relative group">
<div className="bg-[#050505] border border-white/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:border-[#00e5ff]/50 transition-colors">
<span className="font-mono text-lg text-white group-hover:text-[#00e5ff] transition-colors">01</span>
<div className="absolute -inset-2 rounded-full border border-white/5 scale-90 group-hover:scale-100 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
</div>
<h4 className="font-mono text-xs text-white uppercase tracking-widest mb-3">Install Daemon</h4>
<p className="text-sm text-white/40 font-light px-4">
                            Deploy the lightweight Rust binary to your environment. It automatically discovers adjacent cluster nodes.
                        </p>
</div>

<div className="flex flex-col items-center text-center relative group">
<div className="bg-[#050505] border border-white/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:border-[#00e5ff]/50 transition-colors">
<span className="font-mono text-lg text-white group-hover:text-[#00e5ff] transition-colors">02</span>
</div>
<h4 className="font-mono text-xs text-white uppercase tracking-widest mb-3">Map Topology</h4>
<p className="text-sm text-white/40 font-light px-4">
                            Nexus maps your existing infrastructure and generates a declarative configuration file for deterministic routing.
                        </p>
</div>

<div className="flex flex-col items-center text-center relative group">
<div className="bg-[#050505] border border-white/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:border-[#00e5ff]/50 transition-colors">
<span className="font-mono text-lg text-white group-hover:text-[#00e5ff] transition-colors">03</span>
<div className="absolute -inset-2 rounded-full border border-white/5 scale-90 group-hover:scale-100 transition-transform duration-500 opacity-0 group-hover:opacity-100 shadow-[0_0_20px_rgba(0,229,255,0.1)]"></div>
</div>
<h4 className="font-mono text-xs text-[#00e5ff] uppercase tracking-widest mb-3">Engage Core</h4>
<p className="text-sm text-white/40 font-light px-4">
                            Traffic is seamlessly re-routed through the neural layer. Telemetry data becomes instantly available.
                        </p>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 p-14 lg:p-24 flex flex-col items-center justify-center text-center bg-[#060606] relative overflow-hidden z-20">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#0A3BFF]/10 blur-[100px] pointer-events-none rounded-full"></div>
<iconify-icon className="text-4xl text-white/20 mb-8 relative z-10" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-2xl md:text-3xl lg:text-4xl uppercase tracking-tighter text-white max-w-4xl leading-[1.2] mb-10 relative z-10" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                "Nexus Core reduced our compute latency by <span className="text-[#00e5ff]">400%</span> while automating cluster scaling globally. It's not just a tool; it's a fundamental <span className="border-b border-[#00e5ff]/50 pb-1">infrastructure paradigm shift</span>."
            </h3>
<div className="flex items-center gap-4 relative z-10">
<div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-2xl text-white/50" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-left">
<p className="font-mono text-xs text-white tracking-widest uppercase">Elias Vance</p>
<p className="font-mono text-xs text-white/40 tracking-widest uppercase mt-1">Lead Architect, Synthetix</p>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-[#0a0a0a] z-20 relative" id="pricing">
<div className="p-8 lg:p-14 border-b border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h2 className="text-3xl lg:text-4xl uppercase tracking-tighter text-white mb-2" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                        Resource Allocation
                    </h2>
<p className="text-sm text-white/50 font-light">Scale parameters aligned with your computational bandwidth.</p>
</div>

<div className="flex items-center gap-3 border border-white/10 rounded px-4 py-2 bg-white/[0.02]">
<span className="font-mono text-xs text-white/50 tracking-widest uppercase">Monthly</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-[#0a0a0a] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00e5ff] border border-white/5"></div>
</label>
<span className="font-mono text-xs text-white tracking-widest uppercase">Annual <span className="text-[#00e5ff] ml-1">[-20%]</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">

<div className="p-8 lg:p-14 flex flex-col hover:bg-white/[0.01] transition-colors">
<span className="font-mono text-xs text-white/50 tracking-widest uppercase mb-2">Build Environment</span>
<h3 className="text-2xl uppercase tracking-tight text-white mb-6" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '400'}}>Developer</h3>
<div className="flex items-end gap-2 mb-8 border-b border-white/5 pb-8">
<span className="text-4xl uppercase tracking-tighter text-white" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>$0</span>
<span className="font-mono text-xs text-white/40 tracking-widest uppercase mb-1">/ Base</span>
</div>
<ul className="flex flex-col gap-4 mb-12 flex-grow">
<li className="flex items-center gap-3 text-sm text-white/70 font-light">
<iconify-icon className="text-[#00e5ff] text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Up to 3 Active Nodes
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70 font-light">
<iconify-icon className="text-[#00e5ff] text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            100k Requests per month
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70 font-light">
<iconify-icon className="text-[#00e5ff] text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Community Forum Access
                        </li>
<li className="flex items-center gap-3 text-sm text-white/30 font-light">
<iconify-icon className="text-base" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Dedicated Subnet
                        </li>
</ul>
<button className="w-full border border-white/10 hover:border-white/30 hover:bg-white/5 text-white px-6 py-3.5 rounded uppercase font-mono text-xs tracking-widest transition-all text-center">
                        Initialize Local
                    </button>
</div>

<div className="p-8 lg:p-14 flex flex-col bg-gradient-to-b from-[#00e5ff]/[0.02] to-transparent relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#00e5ff]/10 blur-[50px] group-hover:bg-[#00e5ff]/20 transition-all duration-700"></div>
<div className="flex justify-between items-center mb-2">
<span className="font-mono text-xs text-[#00e5ff] tracking-widest uppercase">Production Core</span>
<div className="px-2 py-1 rounded bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] font-mono text-xs uppercase tracking-widest">
                            Recommended
                        </div>
</div>
<h3 className="text-2xl uppercase tracking-tight text-white mb-6" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '400'}}>Enterprise</h3>
<div className="flex items-end gap-2 mb-8 border-b border-white/5 pb-8">
<span className="text-4xl uppercase tracking-tighter text-white" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>$499</span>
<span className="font-mono text-xs text-white/40 tracking-widest uppercase mb-1">/ Month</span>
</div>
<ul className="flex flex-col gap-4 mb-12 flex-grow">
<li className="flex items-center gap-3 text-sm text-white font-light">
<iconify-icon className="text-[#00e5ff] text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Unlimited Node Matrix
                        </li>
<li className="flex items-center gap-3 text-sm text-white font-light">
<iconify-icon className="text-[#00e5ff] text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Unmetered Throughput
                        </li>
<li className="flex items-center gap-3 text-sm text-white font-light">
<iconify-icon className="text-[#00e5ff] text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            24/7 Direct Core Support
                        </li>
<li className="flex items-center gap-3 text-sm text-white font-light">
<iconify-icon className="text-[#00e5ff] text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Dedicated Subnet Isolation
                        </li>
</ul>
<button className="w-full bg-[#00e5ff] hover:bg-white text-black px-6 py-3.5 rounded uppercase font-mono text-xs font-normal tracking-widest transition-all text-center flex items-center justify-center gap-2">
                        Allocate Resources
                        <iconify-icon className="text-base" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="border-b border-white/5 p-8 lg:p-14 bg-[#080808] z-20 relative" id="faq">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl uppercase tracking-tighter text-white mb-3" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                        System Queries
                    </h2>
<p className="font-mono text-xs text-white/40 tracking-widest uppercase">Documentation / FAQ</p>
</div>
<div className="flex flex-col divide-y divide-white/5 border-y border-white/5">
<details className="group cursor-pointer">
<summary className="flex items-center justify-between py-6 outline-none">
<span className="text-base font-light text-white group-hover:text-[#00e5ff] transition-colors">How does Nexus handle packet loss across isolated nodes?</span>
<span className="text-white/40 group-open:rotate-45 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="pb-6 text-sm text-white/50 font-light leading-relaxed pr-8">
                            Our proprietary redundancy algorithm mirrors active states across adjacent nodes. In the event of packet loss, the nearest neighbor assumes the workload instantly, ensuring zero-downtime execution.
                        </div>
</details>
<details className="group cursor-pointer">
<summary className="flex items-center justify-between py-6 outline-none">
<span className="text-base font-light text-white group-hover:text-[#00e5ff] transition-colors">Can I integrate Core with legacy Kubernetes clusters?</span>
<span className="text-white/40 group-open:rotate-45 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="pb-6 text-sm text-white/50 font-light leading-relaxed pr-8">
                            Yes. Nexus acts as an overlay network. You can inject our sidecar proxies into existing K8s pods without modifying your underlying manifests or halting active deployments.
                        </div>
</details>
<details className="group cursor-pointer">
<summary className="flex items-center justify-between py-6 outline-none">
<span className="text-base font-light text-white group-hover:text-[#00e5ff] transition-colors">What is the latency overhead of the routing layer?</span>
<span className="text-white/40 group-open:rotate-45 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="pb-6 text-sm text-white/50 font-light leading-relaxed pr-8">
                            Statistically negligible. Our benchmark telemetry indicates a consistent P99 overhead of less than 0.8 milliseconds, thanks to the compiled native binary and zero-copy memory architecture.
                        </div>
</details>
</div>
</div>
</section>

<footer className="bg-[#050505] relative overflow-hidden z-20 flex flex-col">

<div className="p-14 lg:p-24 flex flex-col items-center justify-center text-center relative border-b border-white/5">
<div className="absolute inset-0 bg-gradient-to-t from-[#00e5ff]/5 to-transparent pointer-events-none"></div>
<h2 className="text-4xl lg:text-5xl uppercase tracking-tighter text-white mb-6 relative z-10" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif', fontWeight: '300'}}>
                    Initialize <br/> <span className="text-[#00e5ff]">Your Network</span>
</h2>
<p className="text-sm text-white/50 max-w-md font-light mb-10 relative z-10">
                    Join the vanguard of distributed infrastructure. Deploy the nexus daemon and secure your architecture today.
                </p>
<div className="flex flex-col sm:flex-row gap-4 relative z-10">
<button className="bg-white hover:bg-gray-200 text-black px-8 py-3.5 rounded uppercase font-mono text-xs font-normal tracking-widest transition-colors">
                        Deploy Now
                    </button>
<button className="border border-white/10 hover:border-[#00e5ff] hover:text-[#00e5ff] text-white px-8 py-3.5 rounded uppercase font-mono text-xs tracking-widest transition-colors">
                        Read Docs
                    </button>
</div>
</div>

<div className="p-8 lg:p-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 bg-[#0a0a0a]">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-xl text-[#00e5ff]" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-mono text-xs tracking-tighter font-medium uppercase text-white/70">NEXUSCORE</span>
</div>
<div className="flex flex-wrap items-center gap-6">
<a className="font-mono text-xs text-white/40 hover:text-white uppercase tracking-widest transition-colors" href="#">Twitter</a>
<a className="font-mono text-xs text-white/40 hover:text-white uppercase tracking-widest transition-colors" href="#">GitHub</a>
<a className="font-mono text-xs text-white/40 hover:text-white uppercase tracking-widest transition-colors" href="#">Discord</a>
<a className="font-mono text-xs text-white/40 hover:text-white uppercase tracking-widest transition-colors" href="#">Status</a>
</div>
</div>
<div className="px-8 py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 bg-[#0a0a0a]">
<span className="text-xs text-white/30 font-light">© 2024 Nexus Core Systems. All rights reserved.</span>
<div className="flex gap-4">
<a className="text-xs text-white/30 hover:text-white/60 font-light transition-colors" href="#">Privacy</a>
<a className="text-xs text-white/30 hover:text-white/60 font-light transition-colors" href="#">Terms</a>
</div>
</div>
</footer>
</div>



    </>
  );
}
