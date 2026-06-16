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
sans: ['Geist', 'sans-serif'],
display: ['Syne', 'sans-serif'],
mono: ['Geist Mono', 'monospace'],
},
colors: {
carbon: '#020202',
surface: '#060606',
panel: '#0a0a0a',
accent: '#E8FF47',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // Initialize Lucide Icons
            lucide.createIcons({
                strokeWidth: 1.5
            });

            // Preloader logic
            const preloader = document.getElementById('preloader');
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => preloader.remove(), 1000);
            }, 1400);

            // Framer-style Scroll Reveals
            const revealElements = document.querySelectorAll('.reveal-up, .reveal-clip');
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
            revealElements.forEach(el => revealObserver.observe(el));

            // Mouse Effect for Bento Boxes
            document.querySelectorAll('.bento-card').forEach(card => {
                card.addEventListener('mousemove', e => {
                    const rect = card.getBoundingClientRect();
                    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                });
            });

            // Count Up Animation
            const countObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const targetEl = entry.target;
                        if(targetEl.classList.contains('counted')) return;
                        const final = parseInt(targetEl.getAttribute('data-target'));
                        let current = 0;
                        const duration = 2000; 
                        const step = final / (duration / 16); 
                        
                        const timer = setInterval(() => {
                            current += step;
                            if(current >= final) {
                                targetEl.innerText = final;
                                targetEl.classList.add('counted');
                                clearInterval(timer);
                            } else {
                                targetEl.innerText = Math.floor(current);
                            }
                        }, 16);
                    }
                });
            }, { threshold: 0.5 });
            document.querySelectorAll('.count-up').forEach(el => countObserver.observe(el));

            // Interactive Systems Architecture Tabs
            const systemItems = document.querySelectorAll('.system-item');
            const bpLayers = document.querySelectorAll('.blueprint-layer');

            systemItems.forEach(item => {
                item.addEventListener('mouseenter', () => {
                    // Update active text state
                    systemItems.forEach(i => {
                        i.querySelector('h4').style.color = 'white';
                        i.querySelector('.indicator').style.backgroundColor = 'transparent';
                    });
                    item.querySelector('h4').style.color = '#E8FF47';
                    item.querySelector('.indicator').style.backgroundColor = '#E8FF47';

                    // Update right visual classes inline
                    const targetIdx = item.getAttribute('data-target');
                    bpLayers.forEach((layer, idx) => {
                        if(idx == targetIdx) {
                            layer.classList.replace('opacity-0', 'opacity-100');
                            layer.classList.replace('scale-95', 'scale-100');
                            layer.classList.add('z-10');
                        } else {
                            layer.classList.replace('opacity-100', 'opacity-0');
                            layer.classList.replace('scale-100', 'scale-95');
                            layer.classList.remove('z-10');
                        }
                    });
                });
            });

            // Countdown Logic
            let t = 18 * 24 * 60 * 60 + 4 * 60 * 60 + 22 * 60 + 59;
            const mainEl = document.getElementById('launch-countdown');
            if(mainEl) {
                setInterval(() => {
                    t--;
                    const h = Math.floor(t / 3600);
                    const m = Math.floor((t % 3600) / 60);
                    const s = t % 60;
                    const format = num => num.toString().padStart(2, '0');
                    mainEl.innerText = `-${format(h)}:${format(m)}:${format(s)}`;
                }, 1000);
            }

            // Simple WebGL Implementation for Hero
            const initWebGL = () => {
                const container = document.getElementById('webgl-container');
                if (!container || typeof THREE === 'undefined') return;

                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
                const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
                
                renderer.setSize(container.clientWidth, container.clientHeight);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                container.appendChild(renderer.domElement);

                const group = new THREE.Group();
                scene.add(group);

                const coreGeo = new THREE.OctahedronGeometry(1.5, 0);
                const coreMat = new THREE.MeshBasicMaterial({ color: 0x111111, wireframe: false });
                const coreMesh = new THREE.Mesh(coreGeo, coreMat);
                group.add(coreMesh);

                const shellGeo = new THREE.IcosahedronGeometry(2, 1);
                const shellMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.1 });
                const shellMesh = new THREE.Mesh(shellGeo, shellMat);
                group.add(shellMesh);

                camera.position.z = 6;

                let mouseX = 0;
                let mouseY = 0;
                let windowHalfX = window.innerWidth / 2;
                let windowHalfY = window.innerHeight / 2;

                document.addEventListener('mousemove', (e) => {
                    mouseX = (e.clientX - windowHalfX) * 0.001;
                    mouseY = (e.clientY - windowHalfY) * 0.001;
                });

                const animate = () => {
                    requestAnimationFrame(animate);
                    
                    group.rotation.y += 0.05 * (mouseX - group.rotation.y);
                    group.rotation.x += 0.05 * (mouseY - group.rotation.x);

                    shellMesh.rotation.y += 0.002;
                    shellMesh.rotation.x += 0.001;
                    coreMesh.rotation.y -= 0.005;

                    renderer.render(scene, camera);
                };

                animate();

                window.addEventListener('resize', () => {
                    windowHalfX = window.innerWidth / 2;
                    windowHalfY = window.innerHeight / 2;
                    camera.aspect = container.clientWidth / container.clientHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(container.clientWidth, container.clientHeight);
                });
            };
            initWebGL();

        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-y-0 left-[clamp(1.5rem,5vw,5rem)] w-px bg-white/[0.04] pointer-events-none z-0"></div>
<div className="fixed inset-y-0 right-[clamp(1.5rem,5vw,5rem)] w-px bg-white/[0.04] pointer-events-none z-0"></div>

<div className="fixed inset-0 z-[9999] bg-carbon flex flex-col items-center justify-center transition-all duration-1000 ease-out" id="preloader">
<div className="font-display font-medium text-[clamp(2rem,5vw,4rem)] text-white tracking-tighter overflow-hidden relative mb-6 mix-blend-difference">
<span className="block translate-y-full animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">VELA_SYS</span>
</div>
<div className="w-[15rem] h-px bg-white/10 relative overflow-hidden">
<div className="absolute inset-y-0 left-0 bg-white animate-[progress_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards]"></div>
</div>
</div>

<div className="fixed inset-0 z-[-1] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,black_20%,transparent_80%)]"></div>

<nav className="fixed top-6 md:top-8 inset-x-0 mx-auto z-50 w-[92%] max-w-[55rem] transition-all duration-700 reveal-up" id="navbar" style={{transitionDelay: '1s'}}>
<div className="flex items-center justify-between relative px-2.5 py-2.5 bg-panel/80 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]">

<div className="flex-none pl-3 z-10">
<a className="flex items-center gap-3 group/logo" href="#">
<svg className="w-5 h-5 transition-transform duration-700 group-hover/logo:rotate-180" fill="none" viewbox="0 0 32 32">
<path d="M 6.8 6.8 A 13 13 0 1 0 25.2 25.2" stroke="#ffffff" strokeLinecap="square" strokeWidth="2"></path>
<circle className="animate-pulse" cx="16" cy="16" fill="#E8FF47" r="3"></circle>
</svg>
<span className="font-display font-medium text-xs tracking-[0.2em] text-white">VELA</span>
</a>
</div>

<div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 px-4 border-x border-white/10 h-[60%]">
<a className="text-xs font-mono font-light text-[#888] hover:text-white hover:bg-white/5 px-4 py-2 rounded-full transition-all duration-300" href="#architecture">Architecture</a>
<a className="text-xs font-mono font-light text-[#888] hover:text-white hover:bg-white/5 px-4 py-2 rounded-full transition-all duration-300" href="#manifest">Manifest</a>
<a className="text-xs font-mono font-light text-[#888] hover:text-white hover:bg-white/5 px-4 py-2 rounded-full transition-all duration-300" href="#systems">Systems</a>
</div>

<div className="flex-none pr-1 z-10">
<a className="hidden md:flex text-sm font-mono text-carbon px-6 py-2.5 rounded-full items-center gap-2 font-medium group relative overflow-hidden bg-accent transition-all duration-500" href="#contact">
<div className="absolute inset-0 bg-white origin-bottom scale-y-0 transition-transform duration-500 group-hover:scale-y-100 z-[-1]"></div>
<span className="relative z-10 flex items-center gap-2">DEPLOY <i className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right"></i></span>
</a>
<button className="md:hidden flex flex-col gap-1.5 p-3">
<div className="w-4 h-[1px] bg-white"></div>
<div className="w-4 h-[1px] bg-white"></div>
</button>
</div>
</div>
</nav>

<section className="relative min-h-[100dvh] w-full flex items-center pt-[8rem] pb-[4rem] px-[clamp(1.5rem,5vw,5rem)] overflow-hidden">

<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60">
<div className="w-[120%] h-[120%] max-w-[80rem] aspect-square rounded-full bg-[radial-gradient(circle_at_center,rgba(232,255,71,0.03)_0%,transparent_50%)] relative">
<div className="absolute inset-0" id="webgl-container"></div>
</div>
</div>
<div className="w-full max-w-[90rem] mx-auto relative z-10 grid grid-cols-1 gap-12 items-center">
<div className="flex flex-col items-center text-center mt-12 md:mt-0">
<div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full mb-8 reveal-up" style={{transitionDelay: '1.1s'}}>
<div className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_#E8FF47]"></div>
<span className="font-mono text-xs font-light text-white uppercase tracking-widest">Orbital Engineering Redefined</span>
</div>
<h1 className="font-display font-medium text-[clamp(2.5rem,8vw,9rem)] leading-[0.85] tracking-tighter text-white mb-8 reveal-up text-balance flex flex-col items-center w-full" style={{transitionDelay: '1.2s'}}>
<span>WE ENGINEER FOR</span>
<span className="flex items-center justify-center gap-3 md:gap-4 flex-wrap w-full">
                        THE 
                        <span className="hidden sm:inline-flex h-[clamp(2.5rem,5vw,6rem)] w-[clamp(6rem,12vw,14rem)] bg-panel border border-white/20 rounded-full items-center justify-center overflow-hidden relative group">
<span className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-1000 grayscale"></span>
<span className="relative z-10 font-mono text-[0.75rem] md:text-[0.8rem] text-accent tracking-widest">ABSOLUTE</span>
</span>
                        EXTREMES.
                    </span>
</h1>
<p className="font-sans text-[clamp(1.125rem,1.5vw,1.5rem)] font-light text-[#888] max-w-[50ch] leading-[1.6] mb-12 reveal-up text-balance" style={{transitionDelay: '1.3s'}}>
                    Stop risking payloads on standard components. We architect, manufacture, and operate high-reliability spacecraft buses designed specifically for zero-failure missions.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto reveal-up" style={{transitionDelay: '1.4s'}}>
<a className="inline-flex h-14 w-full sm:w-auto px-8 rounded-full items-center justify-center text-sm font-mono tracking-widest font-medium text-carbon relative overflow-hidden bg-accent group transition-all duration-500 z-10 gap-3" href="#contact">
<div className="absolute inset-0 bg-white origin-bottom scale-y-0 transition-transform duration-500 group-hover:scale-y-100 z-[-1]"></div>
<span className="relative z-10 flex items-center gap-3">SECURE YOUR ORBIT <i className="w-5 h-5" data-lucide="rocket"></i></span>
</a>
<a className="group flex items-center justify-center gap-3 h-14 px-6 text-xs text-[#888] hover:text-white font-mono font-light tracking-widest transition-colors w-full sm:w-auto" href="#architecture">
<div className="w-8 h-[1px] bg-[#888] group-hover:w-12 group-hover:bg-white transition-all duration-300"></div>
                        EXPLORE PLATFORMS 
                    </a>
</div>
</div>
</div>

<div className="absolute left-[clamp(1.5rem,5vw,5rem)] bottom-12 hidden lg:flex flex-col items-start gap-4 reveal-up mix-blend-difference" style={{transitionDelay: '1.5s'}}>
<div className="font-mono text-xs font-light text-white tracking-widest transform -rotate-90 origin-left translate-y-12">SCROLL</div>
<div className="w-[1px] h-16 bg-white/30 relative overflow-hidden ml-2">
<div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[slideDown_2s_ease-in-out_infinite]"></div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-[#050505] overflow-hidden relative flex items-center h-20 md:h-28">

<div className="absolute left-0 top-0 bottom-0 z-20 flex items-center bg-[#050505] pl-[clamp(1.5rem,5vw,5rem)] pr-6 md:pr-10 border-r border-white/10 shadow-[20px_0_30px_-10px_rgba(5,5,5,1)]">
<div className="font-mono text-[0.65rem] md:text-xs text-[#666] tracking-[0.2em] font-light uppercase whitespace-nowrap">
                Trusted by prime <br/> contractors globally
            </div>
</div>

<div className="absolute right-0 top-0 bottom-0 z-20 w-32 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none"></div>

<div className="flex flex-nowrap w-max animate-[marquee_40s_linear_infinite] opacity-40 hover:opacity-100 transition-opacity duration-700 pl-[250px] md:pl-[350px]">
<div className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24 min-w-max">
<span className="font-display font-medium text-lg md:text-2xl tracking-tight text-white cursor-default">EUROPEAN SPACE AGENCY</span>
<span className="font-display font-medium text-lg md:text-2xl tracking-tight text-white cursor-default">NASA JPL</span>
<span className="font-display font-medium text-lg md:text-2xl tracking-tight text-white cursor-default">AIRBUS DEFENCE</span>
<span className="font-display font-medium text-lg md:text-2xl tracking-tight text-white cursor-default">THALES ALENIA</span>
<span className="font-display font-medium text-lg md:text-2xl tracking-tight text-white cursor-default">JAXA</span>
<span className="font-display font-medium text-lg md:text-2xl tracking-tight text-white cursor-default">ARIANEGROUP</span>
</div>
<div aria-hidden="true" className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24 min-w-max">
<span className="font-display font-medium text-lg md:text-2xl tracking-tight text-white cursor-default">EUROPEAN SPACE AGENCY</span>
<span className="font-display font-medium text-lg md:text-2xl tracking-tight text-white cursor-default">NASA JPL</span>
<span className="font-display font-medium text-lg md:text-2xl tracking-tight text-white cursor-default">AIRBUS DEFENCE</span>
<span className="font-display font-medium text-lg md:text-2xl tracking-tight text-white cursor-default">THALES ALENIA</span>
<span className="font-display font-medium text-lg md:text-2xl tracking-tight text-white cursor-default">JAXA</span>
<span className="font-display font-medium text-lg md:text-2xl tracking-tight text-white cursor-default">ARIANEGROUP</span>
</div>
</div>
</section>

<section className="py-[6rem] md:py-[10rem] px-[clamp(1.5rem,5vw,5rem)] relative z-10" id="architecture">
<div className="max-w-[90rem] mx-auto">
<div className="mb-12 md:mb-20 reveal-up">
<span className="font-mono text-xs font-light text-accent tracking-[0.2em] uppercase flex items-center gap-3 mb-6">
<span className="w-2 h-2 bg-accent"></span> Core Capabilities
                </span>
<h2 className="font-display font-medium text-[clamp(2.5rem,5vw,4.5rem)] tracking-tighter leading-none mb-6 text-white">
                    Built for the Void.<br/>
<span className="text-[#666]">Tested for Reality.</span>
</h2>
<p className="text-[clamp(1.125rem,1.5vw,1.25rem)] font-light text-[#888] max-w-[45ch] leading-[1.6]">
                    We provide end-to-end architectural supremacy. From LEO constellations to deep-space probes, our buses form the indestructible backbone of your mission.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto md:auto-rows-[24rem]">

<div className="md:col-span-8 md:row-span-2 bg-surface border border-white/5 relative overflow-hidden transition-all duration-600 group hover:border-white/15 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)] p-8 md:p-12 flex flex-col justify-between reveal-up min-h-[24rem] bento-card" style={{-MouseX: '50%', -MouseY: '50%'}}>
<div className="absolute inset-0 pointer-events-none z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-[radial-gradient(circle_30rem_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.03)_0%,transparent_50%)]"></div>

<div className="absolute w-3 h-3 pointer-events-none z-20 transition-all duration-600 opacity-40 text-white group-hover:opacity-100 group-hover:text-accent group-hover:scale-125 group-hover:rotate-90 -top-1.5 -left-1.5"><div className="absolute top-1/2 left-0 w-full h-px bg-current -translate-y-1/2"></div><div className="absolute left-1/2 top-0 h-full w-px bg-current -translate-x-1/2"></div></div>
<div className="absolute w-3 h-3 pointer-events-none z-20 transition-all duration-600 opacity-40 text-white group-hover:opacity-100 group-hover:text-accent group-hover:scale-125 group-hover:rotate-90 -top-1.5 -right-1.5"><div className="absolute top-1/2 left-0 w-full h-px bg-current -translate-y-1/2"></div><div className="absolute left-1/2 top-0 h-full w-px bg-current -translate-x-1/2"></div></div>
<div className="absolute w-3 h-3 pointer-events-none z-20 transition-all duration-600 opacity-40 text-white group-hover:opacity-100 group-hover:text-accent group-hover:scale-125 group-hover:rotate-90 -bottom-1.5 -left-1.5"><div className="absolute top-1/2 left-0 w-full h-px bg-current -translate-y-1/2"></div><div className="absolute left-1/2 top-0 h-full w-px bg-current -translate-x-1/2"></div></div>
<div className="absolute w-3 h-3 pointer-events-none z-20 transition-all duration-600 opacity-40 text-white group-hover:opacity-100 group-hover:text-accent group-hover:scale-125 group-hover:rotate-90 -bottom-1.5 -right-1.5"><div className="absolute top-1/2 left-0 w-full h-px bg-current -translate-y-1/2"></div><div className="absolute left-1/2 top-0 h-full w-px bg-current -translate-x-1/2"></div></div>
<div className="flex justify-between items-start z-10 mb-12 md:mb-0">
<div className="font-mono text-xs font-light bg-white/5 border border-white/10 px-3 py-1 rounded-full text-white backdrop-blur-md">PLATFORM_01</div>
<i className="w-8 h-8 text-white opacity-50 group-hover:opacity-100 group-hover:text-accent transition-all duration-500" data-lucide="cpu"></i>
</div>

<div className="absolute right-0 bottom-0 w-full md:w-[70%] h-[60%] md:h-[80%] z-0 pointer-events-none [clip-path:inset(100%_0_0_0)] transition-[clip-path] duration-700 group-hover:[clip-path:inset(0_0_0_0)]">
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10"></div>
<div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface z-10"></div>
<img alt="Spacecraft" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="z-10 relative max-w-[32rem]">
<h3 className="font-display font-medium text-[clamp(2rem,3vw,3rem)] text-white mb-4 leading-none tracking-tight">Modular Spacecraft Buses</h3>
<p className="text-base font-light text-[#888] leading-[1.6] mb-8 group-hover:text-[#aaa] transition-colors">Fully configurable platforms supporting 50kg to 4,500kg payloads. Engineered with triple-redundant life support, high-ISP propulsion, and autonomous failure mitigation.</p>
<div className="flex flex-wrap gap-4 md:gap-6 font-mono text-[0.65rem] md:text-xs font-light text-white border-t border-white/10 pt-6 mt-auto">
<div><span className="text-[#555] block mb-1">RELIABILITY</span> 99.98%</div>
<div><span className="text-[#555] block mb-1">LIFESPAN</span> 15+ YRS</div>
<div><span className="text-[#555] block mb-1">RAD-HARD</span> 100krad</div>
</div>
</div>
</div>

<div className="md:col-span-4 md:row-span-2 bg-surface border border-white/5 relative overflow-hidden transition-all duration-600 group hover:border-white/15 p-8 flex flex-col justify-between reveal-up min-h-[24rem] bento-card" style={{transitionDelay: '0.1s', -MouseX: '50%', -MouseY: '50%'}}>
<div className="absolute inset-0 pointer-events-none z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-[radial-gradient(circle_30rem_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.03)_0%,transparent_50%)]"></div>
<div className="flex justify-between items-start z-10 mb-8 md:mb-12">
<div className="font-mono text-xs font-light border border-white/10 px-3 py-1 rounded-full text-[#888]">SYSTEM_02</div>
</div>
<div className="relative flex-1 w-full flex items-center justify-center overflow-hidden mb-8 min-h-[10rem]">
<div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
<svg className="w-[80%] h-[80%] max-w-[12rem] animate-[spin_20s_linear_infinite]" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="#E8FF47" stroke-dasharray="4 4" strokeWidth="0.5"></circle>
<circle cx="50" cy="50" fill="none" r="30" stroke="#fff" strokeWidth="1"></circle>
<path d="M50 20 L50 80 M20 50 L80 50" opacity="0.5" stroke="#fff" strokeWidth="0.5"></path>
</svg>
</div>
</div>
<div className="z-10">
<h3 className="font-display font-medium text-[clamp(1.5rem,2.5vw,2rem)] text-white mb-3 tracking-tight">Propulsion Dynamics</h3>
<p className="text-base font-light text-[#888] leading-relaxed">Hall-effect thrusters yielding unmatched Isp for orbital keeping.</p>
</div>
</div>

<div className="md:col-span-12 bg-surface border border-white/5 relative overflow-hidden transition-all duration-600 group hover:border-white/15 p-0 flex flex-col md:flex-row reveal-up bento-card" style={{transitionDelay: '0.2s', -MouseX: '50%', -MouseY: '50%'}}>
<div className="absolute inset-0 pointer-events-none z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-[radial-gradient(circle_30rem_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.03)_0%,transparent_50%)]"></div>
<div className="p-8 md:p-12 flex-1 flex flex-col justify-center z-10 relative bg-panel">
<div className="font-mono text-xs font-light border border-white/10 px-3 py-1 rounded-full text-[#888] self-start mb-6 group-hover:border-accent group-hover:text-accent transition-colors">FACILITY_03</div>
<h3 className="font-display font-medium text-[clamp(1.75rem,2.5vw,2.25rem)] text-white mb-4 tracking-tight">Mission Operations Center</h3>
<p className="text-base font-light text-[#888] leading-[1.6] max-w-[40ch]">24/7 autonomous telemetry processing and payload tasking from our secure terrestrial facility. Zero latency. Total control.</p>
</div>
<div className="w-full md:w-[60%] bg-[#050505] border-t md:border-t-0 md:border-l border-white/5 relative p-8 flex items-center justify-center z-10">
<div className="w-full max-w-md space-y-4">
<div className="flex justify-between font-mono text-xs font-light"><span className="text-[#555]">DOWNLINK STRENGTH</span><span className="text-accent">14.2 Gbps</span></div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-accent w-[85%] group-hover:w-[95%] transition-all duration-1000 ease-out"></div>
</div>
<div className="flex justify-between font-mono text-xs font-light pt-4"><span className="text-[#555]">ENCRYPTION PROTOCOL</span><span className="text-white">AES-256-GCM ACTIVE</span></div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white w-[100%] opacity-50"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[6rem] md:py-[10rem] px-[clamp(1.5rem,5vw,5rem)] bg-[#050505] relative border-t border-white/5" id="systems">
<div className="max-w-[90rem] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">

<div className="lg:col-span-5 relative z-10 pt-4 md:pt-10">
<span className="font-mono text-xs font-light text-[#888] tracking-[0.2em] uppercase block mb-6">
                        System Architecture
                    </span>
<h2 className="font-display font-medium text-[clamp(2.5rem,4vw,3.5rem)] tracking-tighter leading-none mb-12 text-white">
                        Redundancy is <br/>Not Optional.<br/>
<span className="text-[#666]">It's By Design.</span>
</h2>
<div className="flex flex-col relative before:absolute before:left-[11px] before:top-4 before:bottom-4 before:w-px before:bg-white/10 space-y-12 pl-10" id="systems-list">

<div className="relative group cursor-pointer system-item" data-target="0">
<div className="absolute -left-[44px] top-1 w-6 h-6 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center z-10 group-hover:border-accent transition-colors">
<div className="w-2 h-2 bg-accent rounded-full indicator transition-colors"></div>
</div>
<h4 className="font-display font-normal text-2xl tracking-tight text-accent transition-colors mb-3">Fault-Tolerant ADCS</h4>
<p className="text-base font-light text-[#888] leading-relaxed">Triple-redundant reaction wheels paired with autonomous star-tracker recalibration. Sub-arcsecond precision maintained during SEU events.</p>
</div>

<div className="relative group cursor-pointer system-item" data-target="1">
<div className="absolute -left-[44px] top-1 w-6 h-6 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center z-10 group-hover:border-accent transition-colors">
<div className="w-2 h-2 bg-[#555] rounded-full indicator transition-colors group-hover:bg-accent"></div>
</div>
<h4 className="font-display font-normal text-2xl tracking-tight text-white group-hover:text-accent transition-colors mb-3">Rad-Hardened Avionics</h4>
<p className="text-base font-light text-[#888] leading-relaxed">Custom SPARC architecture with hardware-level EDAC memory protection. Designed for 15+ years continuous operation in GEO.</p>
</div>

<div className="relative group cursor-pointer system-item" data-target="2">
<div className="absolute -left-[44px] top-1 w-6 h-6 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center z-10 group-hover:border-accent transition-colors">
<div className="w-2 h-2 bg-[#555] rounded-full indicator transition-colors group-hover:bg-accent"></div>
</div>
<h4 className="font-display font-normal text-2xl tracking-tight text-white group-hover:text-accent transition-colors mb-3">Thermal Dynamics</h4>
<p className="text-base font-light text-[#888] leading-relaxed">Active loop heat pipes and multi-layer insulation matrices maintaining strict ±1°C payload tolerances while managing high-power instruments.</p>
</div>
</div>
</div>

<div className="lg:col-span-7 relative h-[50vh] lg:h-[80vh] mt-12 lg:mt-0">
<div className="sticky top-24 w-full h-full bg-panel border border-white/10 rounded-2xl overflow-hidden p-8 flex items-center justify-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,black_20%,transparent_80%)] opacity-20 pointer-events-none mix-blend-overlay"></div>
<div className="absolute inset-0 opacity-100 scale-100 z-10 transition-all duration-800 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col items-center justify-center w-full h-full text-center blueprint-layer active" id="bp-0">
<i className="w-32 h-32 text-accent mb-6 opacity-80" data-lucide="radar"></i>
<div className="font-mono text-xs font-light text-white bg-white/10 px-4 py-2 rounded-full border border-white/20">SUBSYSTEM: ATTITUDE CONTROL</div>
</div>
<div className="absolute inset-0 opacity-0 scale-95 transition-all duration-800 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col items-center justify-center w-full h-full text-center blueprint-layer" id="bp-1">
<i className="w-32 h-32 text-white mb-6 opacity-80" data-lucide="cpu"></i>
<div className="font-mono text-xs font-light text-white bg-white/10 px-4 py-2 rounded-full border border-white/20">SUBSYSTEM: CORE COMPUTE</div>
</div>
<div className="absolute inset-0 opacity-0 scale-95 transition-all duration-800 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col items-center justify-center w-full h-full text-center blueprint-layer" id="bp-2">
<i className="w-32 h-32 text-white mb-6 opacity-80" data-lucide="thermometer"></i>
<div className="font-mono text-xs font-light text-white bg-white/10 px-4 py-2 rounded-full border border-white/20">SUBSYSTEM: THERMAL LOOP</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/10 bg-carbon relative z-20">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 w-full">
<div className="p-10 lg:p-14 flex flex-col justify-between aspect-square group bg-surface hover:bg-accent transition-colors duration-500 cursor-default relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-700 mix-blend-overlay"></div>
<span className="font-mono text-xs text-[#666] group-hover:text-black/60 transition-colors relative z-10 font-medium tracking-widest">DEPLOYMENTS</span>
<div className="relative z-10 transform group-hover:-translate-y-4 transition-transform duration-500">
<div className="font-display font-medium text-[clamp(3.5rem,6vw,5.5rem)] text-white leading-none mb-2 group-hover:text-black transition-colors tracking-tighter count-up" data-target="34">0</div>
<p className="text-sm font-light text-[#888] group-hover:text-black/80 transition-colors">Successful orbital insertions.</p>
</div>
</div>
<div className="p-10 lg:p-14 flex flex-col justify-between aspect-square group bg-surface hover:bg-accent transition-colors duration-500 cursor-default relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-700 mix-blend-overlay"></div>
<span className="font-mono text-xs text-[#666] group-hover:text-black/60 transition-colors relative z-10 font-medium tracking-widest">RELIABILITY</span>
<div className="relative z-10 transform group-hover:-translate-y-4 transition-transform duration-500">
<div className="font-display font-medium text-[clamp(3.5rem,6vw,5.5rem)] text-white leading-none mb-2 group-hover:text-black transition-colors tracking-tighter"><span className="count-up" data-target="99">0</span>.9<span className="text-[clamp(1.75rem,3vw,3rem)] text-[#666] group-hover:text-black/50">%</span></div>
<p className="text-sm font-light text-[#888] group-hover:text-black/80 transition-colors">Mission success rate.</p>
</div>
</div>
<div className="p-10 lg:p-14 flex flex-col justify-between aspect-square group bg-surface hover:bg-white transition-colors duration-500 cursor-default relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-700 mix-blend-overlay"></div>
<span className="font-mono text-xs text-[#666] group-hover:text-black/60 transition-colors relative z-10 font-medium tracking-widest">ENDURANCE</span>
<div className="relative z-10 transform group-hover:-translate-y-4 transition-transform duration-500">
<div className="font-display font-medium text-[clamp(3.5rem,6vw,5.5rem)] text-white leading-none mb-2 group-hover:text-black transition-colors tracking-tighter"><span className="count-up" data-target="15">0</span><span className="text-[clamp(1.75rem,3vw,3rem)] text-[#666] group-hover:text-black/50">Y</span></div>
<p className="text-sm font-light text-[#888] group-hover:text-black/80 transition-colors">Design life for GEO buses.</p>
</div>
</div>
<div className="p-10 lg:p-14 flex flex-col justify-between aspect-square group bg-surface hover:bg-white transition-colors duration-500 cursor-default relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-700 mix-blend-overlay"></div>
<span className="font-mono text-xs text-[#666] group-hover:text-black/60 transition-colors relative z-10 font-medium tracking-widest">BACKLOG</span>
<div className="relative z-10 transform group-hover:-translate-y-4 transition-transform duration-500">
<div className="font-display font-medium text-[clamp(3.5rem,6vw,5.5rem)] text-white leading-none mb-2 flex items-start group-hover:text-black transition-colors tracking-tighter">
<span className="text-[clamp(1.75rem,3vw,3rem)] mt-2 mr-1 text-[#666] group-hover:text-black/50">$</span><span className="count-up" data-target="4">0</span>.2<span className="text-[clamp(1.75rem,3vw,3rem)] text-[#666] group-hover:text-black/50 mt-1">B</span>
</div>
<p className="text-sm font-light text-[#888] group-hover:text-black/80 transition-colors">Active contracted volume.</p>
</div>
</div>
</div>
</section>

<section className="py-[6rem] md:py-[10rem] bg-carbon relative overflow-hidden" id="manifest">
<div className="max-w-[90rem] mx-auto px-[clamp(1.5rem,5vw,5rem)] relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 reveal-up gap-6 md:gap-8">
<div>
<h2 className="font-display font-medium text-[clamp(2.5rem,4vw,3.5rem)] tracking-tighter leading-none text-white mb-4">
                        Active Telemetry.
                    </h2>
<p className="text-[#888] font-light text-base max-w-sm">Live data stream from currently operational Vela infrastructure across LEO, MEO, and GEO.</p>
</div>
<a className="inline-flex relative overflow-hidden bg-surface border border-white/5 transition-all duration-500 z-10 group hover:border-white hover:text-black hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.2)] h-12 px-6 rounded-full text-xs text-white font-mono tracking-widest items-center justify-center gap-2" href="#contact">
<div className="absolute inset-0 bg-white translate-y-full transition-transform duration-500 group-hover:translate-y-0 z-[-1]"></div>
<span className="relative z-10 flex items-center gap-2">REQUEST FULL MANIFEST <i className="w-3.5 h-3.5 group-hover:text-black" data-lucide="lock"></i></span>
</a>
</div>
<div className="border border-white/10 bg-surface rounded-2xl overflow-hidden reveal-up shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] relative">
<div className="overflow-x-auto">
<div className="min-w-[70rem]">

<div className="grid grid-cols-[2fr_1.5fr_1.5fr_1.5fr_2fr_1fr] gap-4 px-8 py-5 border-b border-white/10 bg-panel sticky top-0 z-20 backdrop-blur-md">
<div className="font-mono text-xs font-light text-[#666] tracking-[0.2em] uppercase">DESIGNATION</div>
<div className="font-mono text-xs font-light text-[#666] tracking-[0.2em] uppercase">STATUS</div>
<div className="font-mono text-xs font-light text-[#666] tracking-[0.2em] uppercase">ORBITAL_PARAMS</div>
<div className="font-mono text-xs font-light text-[#666] tracking-[0.2em] uppercase">NEXT_LOS</div>
<div className="font-mono text-xs font-light text-[#666] tracking-[0.2em] uppercase">POWER_SIG</div>
<div className="font-mono text-xs font-light text-[#666] tracking-[0.2em] uppercase text-right">UPTIME</div>
</div>

<div className="flex flex-col p-2 gap-1 bg-carbon">

<div className="grid grid-cols-[2fr_1.5fr_1.5fr_1.5fr_2fr_1fr] gap-4 px-6 py-4 rounded-xl bg-surface group cursor-pointer border border-transparent hover:border-white/10 hover:bg-white/[0.02] hover:pl-8 transition-all duration-400 relative">
<div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-transparent group-hover:border-accent opacity-0 group-hover:opacity-100 transition-all duration-400"></div>
<div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-transparent group-hover:border-accent opacity-0 group-hover:opacity-100 transition-all duration-400"></div>
<div className="flex items-center gap-4">
<div className="font-mono text-sm font-light text-[#444] group-hover:text-accent transition-colors">01</div>
<div className="font-display font-normal text-lg text-white tracking-tight">HELIOS-1</div>
</div>
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] animate-pulse"></div><span className="font-mono text-sm font-light text-[#888] group-hover:text-white transition-colors">NOMINAL</span></div>
<div className="font-mono text-sm font-light text-[#888] group-hover:text-white transition-colors">720km SSO</div>
<div className="font-mono text-sm font-light text-[#888] group-hover:text-white transition-colors">T-00:14:22</div>
<div className="flex items-center gap-3">
<div className="font-mono text-sm font-light text-[#888] w-12 group-hover:text-white transition-colors">28.4V</div>
<svg className="w-16 h-3 stroke-[#10B981] opacity-50 group-hover:opacity-100 transition-opacity" fill="none" viewbox="0 0 64 12"><path d="M0 6 L10 10 L20 2 L30 10 L40 4 L50 8 L64 2" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</div>
<div className="font-mono text-sm font-light text-[#888] text-right group-hover:text-white transition-colors">412d 11h</div>
</div>

<div className="grid grid-cols-[2fr_1.5fr_1.5fr_1.5fr_2fr_1fr] gap-4 px-6 py-4 rounded-xl bg-surface group cursor-pointer border border-transparent hover:border-white/10 hover:bg-white/[0.02] hover:pl-8 transition-all duration-400 relative">
<div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-transparent group-hover:border-accent opacity-0 group-hover:opacity-100 transition-all duration-400"></div>
<div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-transparent group-hover:border-accent opacity-0 group-hover:opacity-100 transition-all duration-400"></div>
<div className="flex items-center gap-4">
<div className="font-mono text-sm font-light text-[#444] group-hover:text-accent transition-colors">02</div>
<div className="font-display font-normal text-lg text-white tracking-tight">ARES-V</div>
</div>
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></div><span className="font-mono text-sm font-light text-[#888] group-hover:text-white transition-colors">NOMINAL</span></div>
<div className="font-mono text-sm font-light text-[#888] group-hover:text-white transition-colors">GEO 14°W</div>
<div className="font-mono text-sm font-light text-[#888] group-hover:text-white transition-colors">CONTINUOUS</div>
<div className="flex items-center gap-3">
<div className="font-mono text-sm font-light text-[#888] w-12 group-hover:text-white transition-colors">100.2V</div>
<svg className="w-16 h-3 stroke-[#666] opacity-50 group-hover:opacity-100 transition-opacity" fill="none" viewbox="0 0 64 12"><path d="M0 6 L20 6 L30 4 L40 8 L64 6" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</div>
<div className="font-mono text-sm font-light text-[#888] text-right group-hover:text-white transition-colors">1,024d 02h</div>
</div>

<div className="grid grid-cols-[2fr_1.5fr_1.5fr_1.5fr_2fr_1fr] gap-4 px-6 py-4 rounded-xl bg-[#F59E0B]/5 border border-[#F59E0B]/20 cursor-pointer relative overflow-hidden group hover:bg-[#F59E0B]/10 hover:pl-8 transition-all duration-400">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F59E0B] transition-all duration-400 group-hover:w-1.5 group-hover:left-2"></div>
<div className="flex items-center gap-4 pl-2 group-hover:pl-0 transition-all duration-400">
<div className="font-mono text-sm font-light text-[#F59E0B]">03</div>
<div className="font-display font-normal text-lg text-[#F59E0B] tracking-tight">EOS-PROBE</div>
</div>
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shadow-[0_0_8px_#F59E0B] animate-pulse"></div><span className="font-mono text-sm font-light text-[#F59E0B]">SAFE_MODE</span></div>
<div className="font-mono text-sm font-light text-[#888] group-hover:text-white transition-colors">L2 HALO</div>
<div className="font-mono text-sm font-light text-[#888] group-hover:text-white transition-colors">T-02:45:00</div>
<div className="flex items-center gap-3">
<div className="font-mono text-sm font-light text-[#F59E0B] w-12">22.1V ↓</div>
<svg className="w-16 h-3 stroke-[#F59E0B] opacity-80" fill="none" viewbox="0 0 64 12"><path d="M0 2 L10 6 L20 10 L30 8 L40 12 L64 10" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</div>
<div className="font-mono text-sm font-light text-[#888] text-right group-hover:text-white transition-colors">89d 14h</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[6rem] md:py-[8rem] bg-carbon overflow-hidden relative border-t border-white/5">
<div className="max-w-[70rem] mx-auto px-[clamp(1.5rem,5vw,5rem)]">
<div className="relative bg-surface border border-white/10 rounded-2xl p-8 md:p-16 reveal-up shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden group">
<div className="absolute -right-10 md:-right-20 -top-10 md:-top-20 text-[10rem] md:text-[15rem] font-display font-medium text-white/[0.02] pointer-events-none select-none rotate-12 group-hover:scale-110 transition-transform duration-1000">CONFIDENTIAL</div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">
<div className="w-12 h-12 rounded-full bg-[#111] overflow-hidden border border-white/20">
<img alt="Director" className="w-full h-full object-cover grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="font-mono text-sm font-medium text-white tracking-widest">DR. ELENA ROSTOVA</div>
<div className="font-mono text-xs font-light text-[#888] mt-1">CHIEF ENGINEER, ESA INTERPLANETARY DIV.</div>
</div>
</div>
<h3 className="font-display font-light text-[clamp(1.25rem,4vw,2.5rem)] text-white leading-[1.3] mb-12 tracking-tight">
                        "When evaluating contractors for the deep-space optical network, Vela was the only firm that didn't hand us a brochure. They handed us a fully modeled risk register and validated thermal analysis. <span className="text-accent bg-accent/10 px-2 leading-relaxed">They engineer out failure before metal is cut.</span>"
                    </h3>
<div className="flex items-center gap-3 font-mono text-xs font-light text-[#555]">
<i className="w-5 h-5" data-lucide="shield-check"></i>
                        VERIFIED PROGRAM DIRECTOR BRIEFING
                    </div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-[#000] relative overflow-hidden">
<div className="max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-2">

<div className="bg-accent text-black p-[clamp(2.5rem,6vw,5rem)] flex flex-col justify-center relative min-h-[50vh] lg:min-h-screen lg:sticky lg:top-0 z-10">
<div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.05)_10px,rgba(0,0,0,0.05)_11px)]"></div>
<div className="relative z-10">
<div className="font-mono text-xs font-medium uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
<div className="w-2 h-2 bg-black animate-pulse rounded-full"></div> L-MINUS TICKET ACTIVE
                    </div>
<h3 className="font-display font-medium text-[clamp(2.5rem,4vw,3.5rem)] leading-tight mb-2 tracking-tighter">MISSION: AURA-9</h3>
<p className="font-mono text-sm font-normal opacity-70 mb-8 md:mb-12 max-w-sm">Earth Observation Constellation Insertion via Ariane 64 from Kourou CSG.</p>
<div className="font-mono text-[clamp(3rem,12vw,7rem)] tracking-tighter leading-[0.85] font-medium" id="launch-countdown">
                        -18:04:22
                    </div>
</div>
</div>

<div className="bg-[#050505] p-[clamp(2.5rem,6vw,5rem)] flex flex-col justify-center">
<span className="font-mono text-xs font-light text-[#666] tracking-[0.2em] uppercase block mb-8 md:mb-12">
                    Forward Manifest 2024-2025
                </span>
<div className="flex flex-col">
<div className="py-8 md:py-10 border-b border-white/10 group cursor-pointer relative">
<div className="flex justify-between items-start mb-4">
<h4 className="font-display font-normal text-2xl text-white group-hover:text-accent transition-colors tracking-tight">KRONOS-4</h4>
<span className="font-mono text-xs font-light text-[#555] border border-white/10 px-3 py-1 rounded-full group-hover:border-white/30 transition-colors">Q1 2025</span>
</div>
<p className="text-[#888] font-light text-base mb-6">GEO Communications Bus. SpaceX Falcon 9 integration.</p>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
<i className="w-4 h-4 text-white group-hover:text-black transition-colors" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="py-8 md:py-10 border-b border-white/10 group cursor-pointer relative">
<div className="flex justify-between items-start mb-4">
<h4 className="font-display font-normal text-2xl text-white group-hover:text-accent transition-colors tracking-tight">DEMOS-5</h4>
<span className="font-mono text-xs font-light text-[#555] border border-white/10 px-3 py-1 rounded-full group-hover:border-white/30 transition-colors">Q2 2025</span>
</div>
<p className="text-[#888] font-light text-base mb-6">SAR Constellation Node. Vega-C integration.</p>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
<i className="w-4 h-4 text-white group-hover:text-black transition-colors" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="py-8 md:py-10 border-b border-white/10 group cursor-pointer relative">
<div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
<h4 className="font-display font-normal text-2xl text-white group-hover:text-accent transition-colors tracking-tight">ARTEMIS-GATEWAY HUB</h4>
<span className="font-mono text-xs font-light text-[#555] border border-white/10 px-3 py-1 rounded-full group-hover:border-white/30 transition-colors self-start">Q4 2025</span>
</div>
<p className="text-[#888] font-light text-base mb-6">Deep Space Logistics Module. SLS Block 1B.</p>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
<i className="w-4 h-4 text-white group-hover:text-black transition-colors" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
<a className="mt-12 text-xs font-mono font-light text-white hover:text-accent underline underline-offset-8 decoration-white/20 hover:decoration-accent transition-all inline-block w-fit" href="#">
                    VIEW COMPLETE SCHEDULE
                </a>
</div>
</div>
</section>

<section className="py-[8rem] md:py-[12rem] px-[clamp(1.5rem,5vw,5rem)] bg-carbon relative text-center" id="contact">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(232,255,71,0.1)_0%,transparent_60%)] pointer-events-none blur-3xl z-0"></div>
<div className="relative z-10 max-w-[50rem] mx-auto reveal-up">
<h2 className="font-display font-medium text-[clamp(3rem,7vw,6.5rem)] tracking-tighter text-white leading-[0.9] mb-6">
                Ready for <br/>Deployment?
            </h2>
<p className="font-sans text-[clamp(1.125rem,1.25vw,1.25rem)] font-light text-[#888] max-w-[40ch] mx-auto mb-10 md:mb-12 leading-[1.6]">
                Bring us your payload specifications. Our engineering team delivers architectural proposals within 48 hours. Zero obligations.
            </p>
<a className="inline-flex h-14 px-10 rounded-full items-center justify-center text-sm font-mono tracking-widest font-medium text-carbon relative overflow-hidden bg-accent group transition-all duration-500 z-10 shadow-[0_0_30px_rgba(232,255,71,0.2)] hover:shadow-[0_0_50px_rgba(232,255,71,0.4)]" href="mailto:ops@vela.space">
<div className="absolute inset-0 bg-white origin-bottom scale-y-0 transition-transform duration-500 group-hover:scale-y-100 z-[-1]"></div>
<span className="relative z-10">INITIATE PARTNERSHIP</span>
</a>
</div>
</section>

<footer className="bg-[#050505] border-t border-white/10 relative pb-8 pt-16 md:pt-20 z-30">
<div className="max-w-[90rem] mx-auto px-[clamp(1.5rem,5vw,5rem)] flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 border-b border-white/10 pb-12 lg:pb-16">
<div className="flex flex-col justify-between max-w-xs">
<svg className="w-10 h-10 mb-8" fill="none" viewbox="0 0 32 32">
<path d="M 6.8 6.8 A 13 13 0 1 0 25.2 25.2" stroke="#E8FF47" strokeWidth="2"></path>
<circle cx="16" cy="16" fill="#E8FF47" r="3"></circle>
</svg>
<div className="font-mono text-xs font-light text-[#666] leading-[1.8] tracking-widest">
                    VELA SPACE SYSTEMS<br/>
                    TOULOUSE SPACE CENTER<br/>
                    ISO 14620 / AS9100D
                </div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-24 w-full lg:w-auto">
<div>
<h5 className="font-mono text-xs font-medium text-white tracking-[0.2em] mb-6 uppercase">Platforms</h5>
<ul className="flex flex-col gap-4 font-mono text-sm font-light text-[#888]">
<li><a className="hover:text-white transition-colors block" href="#">LEO Micro-Bus</a></li>
<li><a className="hover:text-white transition-colors block" href="#">GEO High-Power</a></li>
<li><a className="hover:text-white transition-colors block" href="#">Deep Space Hub</a></li>
</ul>
</div>
<div>
<h5 className="font-mono text-xs font-medium text-white tracking-[0.2em] mb-6 uppercase">Company</h5>
<ul className="flex flex-col gap-4 font-mono text-sm font-light text-[#888]">
<li><a className="hover:text-white transition-colors block" href="#">Manifesto</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#">Careers <span className="bg-accent text-black px-1.5 py-0.5 text-[0.6rem] font-medium rounded-sm">HIRING</span></a></li>
<li><a className="hover:text-white transition-colors block" href="#">Press Room</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h5 className="font-mono text-xs font-medium text-white tracking-[0.2em] mb-6 uppercase">Network</h5>
<ul className="flex flex-col gap-4 font-mono text-sm font-light text-[#888]">
<li><a className="hover:text-white transition-colors block" href="#">Twitter / X</a></li>
<li><a className="hover:text-white transition-colors block" href="#">LinkedIn</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#">System Status <div className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse"></div></a></li>
</ul>
</div>
</div>
</div>
<div className="w-full text-center relative mt-12 md:mt-16 group select-none overflow-hidden flex items-center justify-center">
<h1 className="font-display font-medium text-[clamp(5rem,20vw,20rem)] text-panel leading-[0.7] tracking-tighter transition-all duration-1000 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-white/10 group-hover:to-transparent">
                VELA
            </h1>
</div>
<div className="w-full flex justify-center mt-6 md:mt-8">
<span className="font-mono text-[0.65rem] font-light text-[#444] tracking-widest uppercase text-center px-4">© 2024 VELA SPACE. ALL RIGHTS RESERVED.</span>
</div>
</footer>



    </>
  );
}
