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



{
"imports": {
"three": "https://unpkg.com/three@0.160.0/build/three.module.js",
"three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Custom Fluid Cursor Logic
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let outlineX = mouseX;
        let outlineY = mouseY;
        
        // Expose mouse coordinates for 3D and effects globally
        window.fluidMouseX = 0;
        window.fluidMouseY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Normalized for 3D
            window.fluidMouseX = (e.clientX / window.innerWidth) * 2 - 1;
            window.fluidMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
            
            if(cursorDot) cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            
            // Card magnetic glow logic
            document.querySelectorAll('.glow-card').forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Smooth cursor trailing
        gsap.ticker.add(() => {
            outlineX += (mouseX - outlineX) * 0.15;
            outlineY += (mouseY - outlineY) * 0.15;
            if(cursorOutline) cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
        });

        // Interactive hover states
        const initCursorHovers = () => {
            document.querySelectorAll('a, button, .interactive').forEach(el => {
                el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
                el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
            });
        };
        initCursorHovers();

        // Smooth Scrolling setup (Lenis) with velocity skew for fluidity
        const fluidMarquee = document.getElementById('fluid-marquee');
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
        });

        function raf(time) {
            lenis.raf(time);
            
            // Apply velocity skew to marquee for fluid scroll feel
            if (fluidMarquee) {
                const skew = Math.min(Math.max(lenis.velocity * 0.5, -15), 15);
                fluidMarquee.style.transform = `skewX(${skew}deg)`;
            }
            
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Functional Smooth Scroll Links
        document.querySelectorAll('.scroll-link').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId && targetId !== '#') {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        lenis.scrollTo(targetElement, { offset: 0, duration: 1.5 });
                    }
                }
            });
        });

        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();

        // Fluid Initial Load Timeline
        tl.fromTo(".gs-nav",
            { y: -30, opacity: 0, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power4.out", delay: 0.2 }
        )
        .fromTo(".gs-hero-text",
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
            "-=0.8"
        )
        .fromTo(".gs-title-line",
            { y: "110%", rotate: 2 },
            { y: "0%", rotate: 0, duration: 1.4, stagger: 0.1, ease: "power4.out" },
            "-=1"
        )
        .fromTo(".gs-hero-btn",
            { scale: 0.5, opacity: 0, rotation: -10 },
            { scale: 1, opacity: 1, rotation: 0, duration: 1, ease: "elastic.out(1, 0.5)" },
            "-=0.7"
        )
        .fromTo(".gs-hero-img",
            { y: "50%", opacity: 0, scale: 0.9, clipPath: "inset(20% 20% 20% 20% round 24px)" },
            { y: "20%", opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0% round 24px)", duration: 1.8, ease: "power4.inOut" },
            "-=1.2"
        );

        // Parallax for Hero Image
        gsap.to("#hero-img-inner", {
            yPercent: 20,
            scale: 1.05,
            ease: "none",
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: 1.5
            }
        });

        // Background Text Fluid Parallax
        gsap.utils.toArray('.gs-bg-text').forEach((text, i) => {
            gsap.to(text, {
                y: -200,
                x: i === 0 ? -50 : 50,
                ease: "none",
                scrollTrigger: {
                    trigger: text.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2
                }
            });
        });

        // Global Fade Up Utility
        gsap.utils.toArray('.gs-fade-up').forEach(element => {
            gsap.fromTo(element,
                { y: 80, opacity: 0, scale: 0.98 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.5,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => { lenis.raf(time * 1000); });
        gsap.ticker.lagSmoothing(0, 0);

        // UI Interactive Logic (Tabs, Modal & Toast)
        function switchTab(tabId) {
            document.querySelectorAll('.tab-btn').forEach(btn => {
                if (btn.dataset.tab === tabId) {
                    btn.classList.add('bg-[#262626]', 'text-white');
                    btn.classList.remove('text-white/50');
                } else {
                    btn.classList.remove('bg-[#262626]', 'text-white');
                    btn.classList.add('text-white/50');
                }
            });

            document.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.add('hidden');
                pane.classList.remove('grid');
            });
            
            const activePane = document.getElementById('tab-' + tabId);
            if(activePane) {
                activePane.classList.remove('hidden');
                activePane.classList.add('grid');

                gsap.fromTo(activePane.children, 
                    { y: 30, opacity: 0, scale: 0.98 }, 
                    { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
                );
            }
            setTimeout(() => ScrollTrigger.refresh(), 100);
        }

        const modal = document.getElementById('global-modal');
        const modalPanel = document.getElementById('modal-panel');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');
        let toastTimeout;

        const modalContent = {
            access: {
                title: "// SYSTEM ACCESS",
                body: `
                    <h3 class="text-2xl font-medium tracking-tight uppercase text-white mb-2">Request Nexus Entry</h3>
                    <p class="text-sm font-light text-white/50 mb-6">Join the global syndicate of visionaries. Enter your credentials to proceed.</p>
                    <form onsubmit="handleFormSubmit(event)" class="flex flex-col gap-4">
                        <div class="relative">
                            <iconify-icon icon="solar:letter-linear" class="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" width="18"></iconify-icon>
                            <input type="email" required placeholder="Enter primary email" class="w-full bg-[#020617] border border-[#262626] rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:border-[#F97316] focus:outline-none transition-all duration-300 placeholder:text-white/20 hover:border-white/20 interactive">
                        </div>
                        <button type="submit" class="interactive w-full bg-white text-[#020617] px-4 py-3 rounded-xl text-sm font-medium hover:bg-[#D4D4D4] transition-all duration-300 flex items-center justify-center gap-2 outline-none group hover:scale-[1.02]">
                            Initialize <iconify-icon icon="solar:arrow-right-linear" stroke-width="1.5" class="group-hover:translate-x-2 transition-transform duration-300"></iconify-icon>
                        </button>
                    </form>
                `
            }
        };

        function openModal(type) {
            const data = modalContent[type] || modalContent['access'];
            modalTitle.innerHTML = data.title;
            modalBody.innerHTML = data.body;
            
            modal.classList.remove('hidden');
            requestAnimationFrame(() => {
                modal.classList.remove('opacity-0');
                modalPanel.classList.remove('scale-95');
                modalPanel.classList.add('scale-100');
            });
            lenis.stop();
            initCursorHovers(); // Re-init cursor hovers for new elements
        }

        function closeModal() {
            modal.classList.add('opacity-0');
            modalPanel.classList.remove('scale-100');
            modalPanel.classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
                lenis.start();
            }, 500);
        }

        function handleFormSubmit(e) {
            e.preventDefault();
            closeModal();
            setTimeout(() => showToast("Credentials accepted. Awaiting clearance."), 400);
        }

        function copyToClipboard(text, msg) {
            navigator.clipboard.writeText(text).then(() => showToast(msg));
        }

        function showToast(msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-msg').innerText = msg;
            
            clearTimeout(toastTimeout);
            toast.classList.remove('translate-y-20', 'opacity-0');
            
            toastTimeout = setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
        }
    


        import * as THREE from 'three';

        const canvas = document.querySelector('#webgl-canvas');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        
        camera.position.z = 30;

        const colors = [0x429DFE, 0xFF91E3, 0xF97316, 0x262626];
        const lines = new THREE.Group();
        
        const material = new THREE.LineBasicMaterial({ 
            transparent: true, 
            opacity: 0.25,
            blending: THREE.AdditiveBlending 
        });

        for(let i=0; i<50; i++) {
            const points = [];
            const offset = (Math.random() - 0.5) * 40;
            const yOffset = (Math.random() - 0.5) * 20;
            const mat = material.clone();
            mat.color.setHex(colors[Math.floor(Math.random() * colors.length)]);
            
            for(let j=0; j<60; j++) {
                points.push(new THREE.Vector3(
                    (j - 30) * 1.5 + offset,
                    Math.sin(j * 0.2 + offset) * 5 + yOffset,
                    (Math.random() - 0.5) * 15
                ));
            }
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const line = new THREE.Line(geometry, mat);
            line.userData = {
                speed: Math.random() * 0.002 + 0.001,
                offset: offset,
                baseY: yOffset,
                mouseReactSpeed: Math.random() * 0.05 + 0.01
            };
            lines.add(line);
        }
        
        scene.add(lines);

        let time = 0;
        let targetRotX = 0;
        let targetRotY = 0;

        function animate() {
            requestAnimationFrame(animate);
            time += 0.01;
            
            // Fluid reaction to mouse
            targetRotY = window.fluidMouseX * 0.2;
            targetRotX = window.fluidMouseY * 0.2;
            
            scene.rotation.y += (targetRotY - scene.rotation.y) * 0.05;
            scene.rotation.x += (targetRotX - scene.rotation.x) * 0.05;
            
            lines.children.forEach((line, index) => {
                const positions = line.geometry.attributes.position.array;
                
                // Mouse distortion wave effect
                const mouseDistortion = Math.sin(time + index) * (window.fluidMouseX * 2);
                
                for(let j=0; j<positions.length; j+=3) {
                    const wave = Math.sin((j/3) * 0.1 + time * line.userData.speed * 50 + line.userData.offset);
                    // Combine base wave with mouse-reactive wave
                    positions[j+1] = wave * 4 + line.userData.baseY + (mouseDistortion * line.userData.mouseReactSpeed * (j/10));
                }
                
                line.geometry.attributes.position.needsUpdate = true;
            });
            
            renderer.render(scene, camera);
        }

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        animate();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="cursor-dot hidden md:block"></div>
<div className="cursor-outline hidden md:block"></div>

<div className="fixed inset-0 z-0 pointer-events-none" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<img alt="Atmosphere" className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9aea64b5-bfda-4948-bf88-d4e5d45762fa_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent"></div>
<canvas className="fixed inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen transition-transform duration-1000" data-engine="three.js r160" height="1750" id="webgl-canvas" style={{width: '1565px', height: '1167px'}} width="2347"></canvas>
</div>

<nav className="fixed top-8 left-0 w-full z-50 px-6 flex justify-center pointer-events-none">
<div className="w-full max-w-7xl flex justify-between items-center bg-[#080808]/80 backdrop-blur-xl border border-[#262626] rounded-full px-6 py-3 pointer-events-auto gs-nav transition-all duration-300 hover:border-white/20 hover:bg-[#080808]/90">
<a className="text-xl font-medium tracking-tight uppercase text-white scroll-link interactive" href="#hero">AURALIS</a>
<div className="hidden md:flex items-center gap-8">
<a className="flex items-center gap-2 text-sm font-light text-[#F97316] transition-colors scroll-link hover:opacity-80 interactive" href="#features">
<span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse"></span>
                    Capabilities
                </a>
<a className="text-sm font-light text-white/70 hover:text-white transition-colors scroll-link interactive" href="#testimonials">
                    Syndicate
                </a>
</div>
<a className="bg-white text-[#020617] px-5 py-2 rounded-full text-sm font-normal flex items-center gap-2 hover:bg-[#D4D4D4] transition-all duration-300 group scroll-link interactive overflow-hidden relative" href="#footer">
<span className="relative z-10 flex items-center gap-2">
                    Engage
                    <iconify-icon className="group-hover:rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</span>
</a>
</div>
</nav>

<section className="min-h-[130vh] flex flex-col overflow-hidden w-full relative items-center justify-center pt-24" id="hero">
<div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none z-0 opacity-10">
<h1 className="text-[25vw] leading-[0.8] font-medium tracking-tight text-white/5 uppercase mix-blend-overlay gs-bg-text">GLOBAL</h1>
<h1 className="text-[25vw] leading-[0.8] font-medium tracking-tight text-white/5 uppercase mix-blend-overlay gs-bg-text">NEXUS</h1>
</div>
<div className="w-full max-w-[90%] mx-auto relative z-10 flex flex-col items-center">
<div className="w-full flex justify-between absolute top-0 -translate-y-full text-xs font-light text-white/50 uppercase tracking-widest hidden lg:flex gs-hero-text">
<div className="max-w-[200px] leading-relaxed">
                    Designed for visionaries. Daring to build the future from scratch.
                </div>
<div className="text-right flex flex-col gap-1 font-mono">
<span className="flex justify-end gap-2 items-center"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span> // IMMERSIVE</span>
<span className="flex justify-end gap-2 items-center"><span className="w-1 h-1 bg-[#429DFE] rounded-full"></span> // FLUIDITY</span>
</div>
</div>
<div className="text-center relative gs-title mt-12 md:mt-0">
<div className="absolute -left-10 md:-left-32 top-1/2 -translate-y-1/2 gs-hero-btn z-30">
<button className="interactive bg-white/5 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-normal flex items-center gap-3 hover:bg-white/10 hover:border-white/40 transition-all duration-300 group" onclick="openModal('access')">
                        Access
                        <span className="w-6 h-6 rounded-full text-[#020617] flex items-center justify-center bg-[#F97316] group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</button>
</div>
<h1 className="text-[14vw] md:text-[11vw] leading-[0.85] font-medium tracking-tight uppercase text-white drop-shadow-2xl z-20 relative mix-blend-difference">
<span className="block overflow-hidden"><span className="block gs-title-line">WHERE</span></span>
<span className="block overflow-hidden"><span className="block gs-title-line">VISION</span></span>
<span className="block overflow-hidden text-transparent clip-text-image"><span className="block gs-title-line hover:tracking-normal transition-all duration-700">MEETS</span></span>
</h1>
</div>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[20%] w-[90%] md:w-[70%] h-[50vh] md:h-[65vh] rounded-3xl overflow-hidden z-20 gs-hero-img border border-[#262626]" style={{clipPath: 'inset(0% round 24px)'}}>
<div className="w-full h-full bg-[#020617]/20 absolute inset-0 z-10 transition-colors duration-700 hover:bg-transparent"></div>
<img alt="Nexus Architecture" className="w-full h-full object-cover scale-110 origin-bottom" id="hero-img-inner" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c69b0daa-dea4-4516-9b14-b46c6f05101c_1600w.webp"/>
</div>
</section>

<section className="bg-[#080808] pt-[30vh] pb-32 px-6 md:px-12 relative z-20" id="features">
<div className="max-w-7xl mx-auto gs-fade-up">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 border-b border-[#262626] pb-12">
<div className="">
<div className="px-3 py-1 rounded-full border border-[#262626] text-xs font-medium uppercase tracking-wider mb-6 inline-block text-white/70">
                        Core Capabilities
                    </div>
<h2 className="text-5xl md:text-[6vw] leading-[0.9] font-medium tracking-tight text-white uppercase">
                        ENGINEERED<br/>FOR IMPACT
                    </h2>
</div>
<div className="max-w-sm mt-12 md:mt-auto">
<p className="text-sm font-light text-white/50 leading-relaxed border-l-2 border-[#262626] pl-6 uppercase tracking-widest hover:border-white/50 transition-colors duration-500">
                        Auralis translates conceptual workflows into physical and digital reality. We provide the friction-free infrastructure required for elite creation.
                    </p>
</div>
</div>

<div className="w-full overflow-x-auto no-scrollbar mb-12">
<div className="flex gap-2 p-1.5 bg-[#020617] border border-[#262626] rounded-full w-max mx-auto md:mx-0">
<button className="interactive tab-btn px-5 md:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 text-white bg-[#262626] outline-none whitespace-nowrap" data-tab="infra" onclick="switchTab('infra')">Infrastructure</button>
<button className="interactive tab-btn px-5 md:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 text-white/50 hover:text-white outline-none whitespace-nowrap" data-tab="intel" onclick="switchTab('intel')">Intelligence</button>
<button className="interactive tab-btn px-5 md:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 text-white/50 hover:text-white outline-none whitespace-nowrap" data-tab="connect" onclick="switchTab('connect')">Connectivity</button>
<button className="interactive tab-btn px-5 md:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 text-white/50 hover:text-white outline-none whitespace-nowrap" data-tab="security" onclick="switchTab('security')">Security</button>
<button className="interactive tab-btn px-5 md:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 text-white/50 hover:text-white outline-none whitespace-nowrap" data-tab="analytics" onclick="switchTab('analytics')">Analytics</button>
</div>
</div>

<div className="tab-pane grid grid-cols-1 md:grid-cols-2 gap-6" id="tab-infra">
<div className="glow-card interactive bg-[#020617] border border-[#262626] rounded-3xl p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden group min-h-[60vh] transition-all duration-700 hover:-translate-y-2 hover:border-white/20" style={{-MouseX: '1300.2727355957031px', -MouseY: '2956.426025390625px'}}>
<div className="absolute inset-0 bg-[#080808] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-start mb-12">
<span className="text-5xl font-extralight opacity-20 font-mono transition-all duration-500 group-hover:opacity-100 group-hover:text-[#F97316] group-hover:translate-x-2">01</span>
<div className="w-12 h-12 rounded-full border border-[#262626] flex items-center justify-center bg-[#080808] group-hover:bg-[#F97316] group-hover:text-[#020617] group-hover:scale-110 transition-all duration-500">
<iconify-icon icon="solar:cpu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="relative z-10 h-48 w-full rounded-2xl overflow-hidden mb-8 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
<img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f78131e-65e9-49b2-aa1f-ccc33e28df9f_1600w.webp"/>
</div>
<div className="relative z-10">
<h3 className="text-3xl md:text-4xl font-medium uppercase tracking-tight leading-none mb-4 group-hover:text-[#F97316] transition-colors duration-500">
                            KINETIC<br/>ZONES
                        </h3>
<p className="text-sm font-light text-white/50 leading-relaxed mb-6 max-w-sm group-hover:text-white/70 transition-colors duration-500">
                            Adaptive environments that respond to your workflow state, altering acoustics and lighting for maximum focus.
                        </p>
<div className="w-full h-[1px] bg-white/10 mb-6 group-hover:bg-white/20 transition-colors duration-500"></div>
<button className="text-xs font-medium uppercase tracking-wider flex items-center gap-2 group-hover:text-[#F97316] transition-colors duration-500 cursor-pointer w-max outline-none" onclick="openModal('specs')">
                            Explore Specs <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="glow-card interactive bg-[#020617] border border-[#262626] rounded-3xl p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden group min-h-[60vh] transition-all duration-700 hover:-translate-y-2 hover:border-white/20" style={{-MouseX: '648.2770385742188px', -MouseY: '2956.426025390625px'}}>
<div className="absolute inset-0 bg-[#080808] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-start mb-12">
<span className="text-5xl font-extralight opacity-20 font-mono transition-all duration-500 group-hover:opacity-100 group-hover:text-[#429DFE] group-hover:translate-x-2">02</span>
<div className="w-12 h-12 rounded-full border border-[#262626] flex items-center justify-center bg-[#080808] group-hover:bg-[#429DFE] group-hover:text-[#020617] group-hover:scale-110 transition-all duration-500">
<iconify-icon icon="solar:network-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="relative z-10 h-48 w-full rounded-2xl overflow-hidden mb-8 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
<img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bfef5098-c30f-4cd9-b4ac-04b2673ab943_1600w.jpg"/>
</div>
<div className="relative z-10">
<h3 className="text-3xl md:text-4xl font-medium uppercase tracking-tight leading-none mb-4 group-hover:text-[#429DFE] transition-colors duration-500">
                            GLOBAL<br/>SYNCHRONY
                        </h3>
<p className="text-sm font-light text-white/50 leading-relaxed mb-6 max-w-sm group-hover:text-white/70 transition-colors duration-500">
                            Instantaneous zero-latency connections bridging distributed teams across our international node network.
                        </p>
<div className="w-full h-[1px] bg-white/10 mb-6 group-hover:bg-white/20 transition-colors duration-500"></div>
<button className="text-xs font-medium uppercase tracking-wider flex items-center gap-2 group-hover:text-[#429DFE] transition-colors duration-500 cursor-pointer w-max outline-none" onclick="openModal('nodes')">
                            View Nodes <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="tab-pane hidden grid-cols-1 md:grid-cols-2 gap-6" id="tab-intel">
<div className="glow-card interactive bg-[#020617] border border-[#262626] rounded-3xl p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden group min-h-[60vh] transition-all duration-700 hover:-translate-y-2 hover:border-white/20" style={{-MouseX: '1443px', -MouseY: '556px'}}>
<div className="absolute inset-0 bg-[#080808] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-start mb-12">
<span className="text-5xl font-extralight opacity-20 font-mono transition-all duration-500 group-hover:opacity-100 group-hover:text-[#FF91E3] group-hover:translate-x-2">03</span>
<div className="w-12 h-12 rounded-full border border-[#262626] flex items-center justify-center bg-[#080808] group-hover:bg-[#FF91E3] group-hover:text-[#020617] group-hover:scale-110 transition-all duration-500">
<iconify-icon icon="solar:brain-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="relative z-10 h-48 w-full rounded-2xl overflow-hidden mb-8 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 bg-[#1A1A1A]">
<img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=1600&amp;q=80"/>
</div>
<div className="relative z-10">
<h3 className="text-3xl md:text-4xl font-medium uppercase tracking-tight leading-none mb-4 group-hover:text-[#FF91E3] transition-colors duration-500">
                            COGNITIVE<br/>FLOW
                        </h3>
<p className="text-sm font-light text-white/50 leading-relaxed mb-6 max-w-sm group-hover:text-white/70 transition-colors duration-500">
                            Neural pattern matching actively analyzes and accelerates your computational state, pre-loading essential assets before you demand them.
                        </p>
<div className="w-full h-[1px] bg-white/10 mb-6 group-hover:bg-white/20 transition-colors duration-500"></div>
<button className="text-xs font-medium uppercase tracking-wider flex items-center gap-2 group-hover:text-[#FF91E3] transition-colors duration-500 cursor-pointer w-max outline-none" onclick="openModal('specs')">
                            System Details <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="glow-card interactive bg-[#020617] border border-[#262626] rounded-3xl p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden group min-h-[60vh] transition-all duration-700 hover:-translate-y-2 hover:border-white/20" style={{-MouseX: '1443px', -MouseY: '556px'}}>
<div className="absolute inset-0 bg-[#080808] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-start mb-12">
<span className="text-5xl font-extralight opacity-20 font-mono transition-all duration-500 group-hover:opacity-100 group-hover:text-[#10B981] group-hover:translate-x-2">04</span>
<div className="w-12 h-12 rounded-full border border-[#262626] flex items-center justify-center bg-[#080808] group-hover:bg-[#10B981] group-hover:text-[#020617] group-hover:scale-110 transition-all duration-500">
<iconify-icon icon="solar:chart-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="relative z-10 h-48 w-full rounded-2xl overflow-hidden mb-8 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 bg-[#1A1A1A]">
<img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&amp;q=80"/>
</div>
<div className="relative z-10">
<h3 className="text-3xl md:text-4xl font-medium uppercase tracking-tight leading-none mb-4 group-hover:text-[#10B981] transition-colors duration-500">
                            PREDICTIVE<br/>ALLOCATION
                        </h3>
<p className="text-sm font-light text-white/50 leading-relaxed mb-6 max-w-sm group-hover:text-white/70 transition-colors duration-500">
                            Algorithmic resource distribution ensures intensive rendering or compiling processes never interrupt active creative momentum.
                        </p>
<div className="w-full h-[1px] bg-white/10 mb-6 group-hover:bg-white/20 transition-colors duration-500"></div>
<button className="text-xs font-medium uppercase tracking-wider flex items-center gap-2 group-hover:text-[#10B981] transition-colors duration-500 cursor-pointer w-max outline-none" onclick="openModal('specs')">
                            View Metrics <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="tab-pane hidden grid-cols-1 md:grid-cols-2 gap-6" id="tab-connect">
<div className="glow-card interactive bg-[#020617] border border-[#262626] rounded-3xl p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden group min-h-[60vh] transition-all duration-700 hover:-translate-y-2 hover:border-white/20" style={{-MouseX: '1443px', -MouseY: '556px'}}>
<div className="absolute inset-0 bg-[#080808] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-start mb-12">
<span className="text-5xl font-extralight opacity-20 font-mono transition-all duration-500 group-hover:opacity-100 group-hover:text-[#F59E0B] group-hover:translate-x-2">05</span>
<div className="w-12 h-12 rounded-full border border-[#262626] flex items-center justify-center bg-[#080808] group-hover:bg-[#F59E0B] group-hover:text-[#020617] group-hover:scale-110 transition-all duration-500">
<iconify-icon icon="solar:routing-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="relative z-10 h-48 w-full rounded-2xl overflow-hidden mb-8 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 bg-[#1A1A1A]">
<img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&amp;q=80"/>
</div>
<div className="relative z-10">
<h3 className="text-3xl md:text-4xl font-medium uppercase tracking-tight leading-none mb-4 group-hover:text-[#F59E0B] transition-colors duration-500">
                            HOLOGRAPHIC<br/>RELAYS
                        </h3>
<p className="text-sm font-light text-white/50 leading-relaxed mb-6 max-w-sm group-hover:text-white/70 transition-colors duration-500">
                            Project high-fidelity virtual instances of your collaborators directly into your physical workspace without latency.
                        </p>
<div className="w-full h-[1px] bg-white/10 mb-6 group-hover:bg-white/20 transition-colors duration-500"></div>
<button className="text-xs font-medium uppercase tracking-wider flex items-center gap-2 group-hover:text-[#F59E0B] transition-colors duration-500 cursor-pointer w-max outline-none" onclick="openModal('specs')">
                            Discover Range <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="glow-card interactive bg-[#020617] border border-[#262626] rounded-3xl p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden group min-h-[60vh] transition-all duration-700 hover:-translate-y-2 hover:border-white/20" style={{-MouseX: '1443px', -MouseY: '556px'}}>
<div className="absolute inset-0 bg-[#080808] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-start mb-12">
<span className="text-5xl font-extralight opacity-20 font-mono transition-all duration-500 group-hover:opacity-100 group-hover:text-[#8B5CF6] group-hover:translate-x-2">06</span>
<div className="w-12 h-12 rounded-full border border-[#262626] flex items-center justify-center bg-[#080808] group-hover:bg-[#8B5CF6] group-hover:text-[#020617] group-hover:scale-110 transition-all duration-500">
<iconify-icon icon="solar:planet-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="relative z-10 h-48 w-full rounded-2xl overflow-hidden mb-8 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 bg-[#1A1A1A]">
<img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&amp;q=80"/>
</div>
<div className="relative z-10">
<h3 className="text-3xl md:text-4xl font-medium uppercase tracking-tight leading-none mb-4 group-hover:text-[#8B5CF6] transition-colors duration-500">
                            QUANTUM<br/>LINKS
                        </h3>
<p className="text-sm font-light text-white/50 leading-relaxed mb-6 max-w-sm group-hover:text-white/70 transition-colors duration-500">
                            Proprietary tunneling technology bypassing traditional internet infrastructure, offering uninterrupted, unthrottled bandwidth.
                        </p>
<div className="w-full h-[1px] bg-white/10 mb-6 group-hover:bg-white/20 transition-colors duration-500"></div>
<button className="text-xs font-medium uppercase tracking-wider flex items-center gap-2 group-hover:text-[#8B5CF6] transition-colors duration-500 cursor-pointer w-max outline-none" onclick="openModal('specs')">
                            Topology View <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="tab-pane hidden grid-cols-1 md:grid-cols-2 gap-6" id="tab-security">
<div className="glow-card interactive bg-[#020617] border border-[#262626] rounded-3xl p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden group min-h-[60vh] transition-all duration-700 hover:-translate-y-2 hover:border-white/20" style={{-MouseX: '1443px', -MouseY: '556px'}}>
<div className="absolute inset-0 bg-[#080808] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-start mb-12">
<span className="text-5xl font-extralight opacity-20 font-mono transition-all duration-500 group-hover:opacity-100 group-hover:text-[#EF4444] group-hover:translate-x-2">07</span>
<div className="w-12 h-12 rounded-full border border-[#262626] flex items-center justify-center bg-[#080808] group-hover:bg-[#EF4444] group-hover:text-[#020617] group-hover:scale-110 transition-all duration-500">
<iconify-icon icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="relative z-10 h-48 w-full rounded-2xl overflow-hidden mb-8 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 bg-[#1A1A1A]">
<img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&amp;q=80"/>
</div>
<div className="relative z-10">
<h3 className="text-3xl md:text-4xl font-medium uppercase tracking-tight leading-none mb-4 group-hover:text-[#EF4444] transition-colors duration-500">
                            BIOMETRIC<br/>BASTION
                        </h3>
<p className="text-sm font-light text-white/50 leading-relaxed mb-6 max-w-sm group-hover:text-white/70 transition-colors duration-500">
                            Multi-factor physical and digital access controlled by non-intrusive ambient scanning and gait analysis.
                        </p>
<div className="w-full h-[1px] bg-white/10 mb-6 group-hover:bg-white/20 transition-colors duration-500"></div>
<button className="text-xs font-medium uppercase tracking-wider flex items-center gap-2 group-hover:text-[#EF4444] transition-colors duration-500 cursor-pointer w-max outline-none" onclick="openModal('specs')">
                            Security Protocol <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="glow-card interactive bg-[#020617] border border-[#262626] rounded-3xl p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden group min-h-[60vh] transition-all duration-700 hover:-translate-y-2 hover:border-white/20" style={{-MouseX: '1443px', -MouseY: '556px'}}>
<div className="absolute inset-0 bg-[#080808] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-start mb-12">
<span className="text-5xl font-extralight opacity-20 font-mono transition-all duration-500 group-hover:opacity-100 group-hover:text-[#6366F1] group-hover:translate-x-2">08</span>
<div className="w-12 h-12 rounded-full border border-[#262626] flex items-center justify-center bg-[#080808] group-hover:bg-[#6366F1] group-hover:text-[#020617] group-hover:scale-110 transition-all duration-500">
<iconify-icon icon="solar:lock-password-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="relative z-10 h-48 w-full rounded-2xl overflow-hidden mb-8 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 bg-[#1A1A1A]">
<img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1600&amp;q=80"/>
</div>
<div className="relative z-10">
<h3 className="text-3xl md:text-4xl font-medium uppercase tracking-tight leading-none mb-4 group-hover:text-[#6366F1] transition-colors duration-500">
                            ENCRYPTED<br/>VAULTS
                        </h3>
<p className="text-sm font-light text-white/50 leading-relaxed mb-6 max-w-sm group-hover:text-white/70 transition-colors duration-500">
                            Cold storage integration directly at the edge. Your intellectual property never touches public servers without military-grade obfuscation.
                        </p>
<div className="w-full h-[1px] bg-white/10 mb-6 group-hover:bg-white/20 transition-colors duration-500"></div>
<button className="text-xs font-medium uppercase tracking-wider flex items-center gap-2 group-hover:text-[#6366F1] transition-colors duration-500 cursor-pointer w-max outline-none" onclick="openModal('specs')">
                            Audit Vaults <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="tab-pane hidden grid-cols-1 md:grid-cols-2 gap-6" id="tab-analytics">
<div className="glow-card interactive bg-[#020617] border border-[#262626] rounded-3xl p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden group min-h-[60vh] transition-all duration-700 hover:-translate-y-2 hover:border-white/20" style={{-MouseX: '1443px', -MouseY: '556px'}}>
<div className="absolute inset-0 bg-[#080808] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-start mb-12">
<span className="text-5xl font-extralight opacity-20 font-mono transition-all duration-500 group-hover:opacity-100 group-hover:text-[#14B8A6] group-hover:translate-x-2">09</span>
<div className="w-12 h-12 rounded-full border border-[#262626] flex items-center justify-center bg-[#080808] group-hover:bg-[#14B8A6] group-hover:text-[#020617] group-hover:scale-110 transition-all duration-500">
<iconify-icon icon="solar:pie-chart-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="relative z-10 h-48 w-full rounded-2xl overflow-hidden mb-8 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 bg-[#1A1A1A]">
<img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&amp;q=80"/>
</div>
<div className="relative z-10">
<h3 className="text-3xl md:text-4xl font-medium uppercase tracking-tight leading-none mb-4 group-hover:text-[#14B8A6] transition-colors duration-500">
                            NEURAL<br/>METRICS
                        </h3>
<p className="text-sm font-light text-white/50 leading-relaxed mb-6 max-w-sm group-hover:text-white/70 transition-colors duration-500">
                            Analyze productivity cycles with non-invasive sensors, mapping out your peak cognitive hours for critical problem solving.
                        </p>
<div className="w-full h-[1px] bg-white/10 mb-6 group-hover:bg-white/20 transition-colors duration-500"></div>
<button className="text-xs font-medium uppercase tracking-wider flex items-center gap-2 group-hover:text-[#14B8A6] transition-colors duration-500 cursor-pointer w-max outline-none" onclick="openModal('specs')">
                            Read Dashboard <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="glow-card interactive bg-[#020617] border border-[#262626] rounded-3xl p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden group min-h-[60vh] transition-all duration-700 hover:-translate-y-2 hover:border-white/20" style={{-MouseX: '1443px', -MouseY: '556px'}}>
<div className="absolute inset-0 bg-[#080808] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-start mb-12">
<span className="text-5xl font-extralight opacity-20 font-mono transition-all duration-500 group-hover:opacity-100 group-hover:text-[#EC4899] group-hover:translate-x-2">10</span>
<div className="w-12 h-12 rounded-full border border-[#262626] flex items-center justify-center bg-[#080808] group-hover:bg-[#EC4899] group-hover:text-[#020617] group-hover:scale-110 transition-all duration-500">
<iconify-icon icon="solar:pulse-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="relative z-10 h-48 w-full rounded-2xl overflow-hidden mb-8 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 bg-[#1A1A1A]">
<img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&amp;q=80"/>
</div>
<div className="relative z-10">
<h3 className="text-3xl md:text-4xl font-medium uppercase tracking-tight leading-none mb-4 group-hover:text-[#EC4899] transition-colors duration-500">
                            FLOW STATE<br/>TRACKING
                        </h3>
<p className="text-sm font-light text-white/50 leading-relaxed mb-6 max-w-sm group-hover:text-white/70 transition-colors duration-500">
                            The system learns when you enter deep work, automatically silencing peripheral notifications and routing non-critical tasks to async processing.
                        </p>
<div className="w-full h-[1px] bg-white/10 mb-6 group-hover:bg-white/20 transition-colors duration-500"></div>
<button className="text-xs font-medium uppercase tracking-wider flex items-center gap-2 group-hover:text-[#EC4899] transition-colors duration-500 cursor-pointer w-max outline-none" onclick="openModal('specs')">
                            Flow Metrics <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-[#262626] py-6 bg-[#020617] marquee-container relative z-20">
<div className="marquee-content text-2xl md:text-4xl font-normal tracking-tight uppercase text-white/10 flex gap-8 select-none hover:text-white/30 transition-colors duration-500 cursor-default" id="fluid-marquee">
<span className="">FLUID MOTION • UNCOMPROMISED FOCUS • IMMERSIVE DESIGN •</span>
<span className="">FLUID MOTION • UNCOMPROMISED FOCUS • IMMERSIVE DESIGN •</span>
<span>FLUID MOTION • UNCOMPROMISED FOCUS • IMMERSIVE DESIGN •</span>
<span>FLUID MOTION • UNCOMPROMISED FOCUS • IMMERSIVE DESIGN •</span>
</div>
</div>

<section className="bg-[#020617] py-32 px-6 md:px-12 relative z-20" id="testimonials">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col items-center text-center mb-24 gs-fade-up">
<span className="text-xs font-mono text-[#F97316] mb-4 block">// PROOF OF CONCEPT</span>
<h2 className="text-4xl md:text-[5vw] leading-[0.9] font-medium tracking-tight text-white uppercase max-w-3xl">
                    THE SYNDICATE<br/>VOICES
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glow-card interactive bg-[#080808] border border-[#262626] p-8 md:p-10 rounded-3xl flex flex-col justify-between min-h-[400px] gs-fade-up hover:border-white/20 transition-all duration-700 hover:-translate-y-2 group cursor-default" style={{-MouseX: '1116.1660614013672px', -MouseY: '-3138.343505859375px'}}>
<iconify-icon className="text-white/10 group-hover:text-[#F97316] transition-colors duration-500 mb-8" icon="solar:quote-left-linear" width="32"></iconify-icon>
<p className="text-base md:text-lg font-light text-white/80 leading-relaxed mb-12 flex-grow group-hover:text-white transition-colors duration-500">
                        "Auralis completely redefined our developmental workflow. The environment acts as a catalyst for deep work, stripping away the friction of traditional spaces."
                    </p>
<div className="flex items-center gap-4 border-t border-[#262626] pt-6 group-hover:border-white/20 transition-colors duration-500">
<img alt="Member" className="w-12 h-12 rounded-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d50f4a31-1a94-4495-b28b-7fb99a6f6730_320w.jpg"/>
<div>
<div className="text-sm font-medium uppercase tracking-tight text-white">ELENA ROSTOVA</div>
<div className="text-xs font-mono text-white/40 mt-0.5">Founder // Nova Tech</div>
</div>
</div>
</div>
<div className="glow-card interactive bg-[#080808] border border-[#262626] p-8 md:p-10 rounded-3xl flex flex-col justify-between min-h-[400px] gs-fade-up hover:border-white/20 transition-all duration-700 hover:-translate-y-2 group cursor-default" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-white/10 group-hover:text-[#429DFE] transition-colors duration-500 mb-8" icon="solar:quote-left-linear" width="32"></iconify-icon>
<p className="text-base md:text-lg font-light text-white/80 leading-relaxed mb-12 flex-grow group-hover:text-white transition-colors duration-500">
                        "The integration of aesthetics and pure utility here is unmatched. It's less of a workspace and more of an operating system for human creativity."
                    </p>
<div className="flex items-center gap-4 border-t border-[#262626] pt-6 group-hover:border-white/20 transition-colors duration-500">
<div className="w-12 h-12 rounded-full bg-[#141414] border border-[#262626] flex items-center justify-center text-[#429DFE] font-mono text-lg group-hover:bg-[#429DFE] group-hover:text-[#020617] group-hover:scale-110 transition-all duration-500">
                            M
                        </div>
<div>
<div className="text-sm font-medium uppercase tracking-tight text-white">MARCUS CHEN</div>
<div className="text-xs font-mono text-white/40 mt-0.5">Lead Architect // Void</div>
</div>
</div>
</div>
<div className="glow-card interactive bg-[#080808] border border-[#262626] p-8 md:p-10 rounded-3xl flex flex-col justify-between min-h-[400px] gs-fade-up hover:border-white/20 transition-all duration-700 hover:-translate-y-2 group cursor-default" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-white/10 group-hover:text-[#FF91E3] transition-colors duration-500 mb-8" icon="solar:quote-left-linear" width="32"></iconify-icon>
<p className="text-base md:text-lg font-light text-white/80 leading-relaxed mb-12 flex-grow group-hover:text-white transition-colors duration-500">
                        "Joining the syndicate granted us access to a network of individuals who operate on a totally different frequency. The serendipity engineered here is brilliant."
                    </p>
<div className="flex items-center gap-4 border-t border-[#262626] pt-6 group-hover:border-white/20 transition-colors duration-500">
<img alt="Member" className="w-12 h-12 rounded-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fb6415fd-bf4d-4ccf-8e9d-7ab445e99207_800w.jpg"/>
<div>
<div className="text-sm font-medium uppercase tracking-tight text-white">SARAH JENKINS</div>
<div className="text-xs font-mono text-white/40 mt-0.5">Director // Synthesis</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#080808] pt-32 pb-8 relative z-20 border-t border-[#262626]" id="footer">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
<h2 className="text-[12vw] leading-[0.8] font-medium tracking-tight text-white uppercase text-center mb-16 gs-fade-up">
                EXPAND<br/>
<span className="text-transparent transition-all duration-700 hover:text-white/10" style={{WebkitTextStroke: '1px rgba(255,255,255,0.4)'}}>YOUR</span><br/>
                HORIZON
            </h2>
<div className="w-full h-[40vh] md:h-[50vh] rounded-3xl overflow-hidden mb-24 gs-fade-up relative border border-[#262626] group interactive" onclick="openModal('access')">
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent z-10 opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
<img className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c30e3ef4-40d7-42ff-80da-9a2204d74fdb_1600w.webp"/>
<div className="absolute bottom-10 left-10 z-20 pointer-events-none transition-transform duration-500 group-hover:translate-x-4">
<h3 className="text-2xl md:text-4xl font-medium uppercase tracking-tight leading-none text-white drop-shadow-lg">
                        RESERVE YOUR<br/>COORDINATES.
                    </h3>
</div>
<div className="absolute bottom-10 right-10 z-20 pointer-events-none">
<div className="w-16 h-16 rounded-full bg-white text-[#020617] flex items-center justify-center group-hover:bg-[#F97316] group-hover:scale-125 transition-all duration-500 shadow-2xl">
<iconify-icon className="group-hover:rotate-45 transition-transform duration-500" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col lg:flex-row w-full border-t border-[#262626] pt-16 items-start justify-between gs-fade-up gap-12">
<div className="max-w-sm">
<div className="text-3xl font-medium tracking-tight uppercase text-white mb-6">AURALIS</div>
<p className="text-xs font-light text-white/50 uppercase tracking-widest leading-relaxed">
                        Auralis is designed for visionaries. The global nexus combining brutalist structure with fluid creativity.
                    </p>
</div>
<div className="flex flex-wrap gap-16 md:gap-24">
<div className="">
<h4 className="text-xs font-mono text-[#F97316] uppercase tracking-widest mb-6 block">// DIRECT</h4>
<button className="interactive text-sm font-light text-white/70 hover:text-[#F97316] transition-colors block mb-4 text-left outline-none group" onclick="copyToClipboard('nexus@auralis.io', 'Email address copied to clipboard')">
                            nexus@auralis.io
                            <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity ml-1 group-hover:translate-x-1 duration-300 inline-block" icon="solar:copy-linear"></iconify-icon>
</button>
<button className="interactive text-sm font-light text-white/70 hover:text-[#F97316] transition-colors block text-left outline-none group" onclick="copyToClipboard('+81 900 1010', 'System terminal copied to clipboard')">SYS: +9607340707<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity ml-1 group-hover:translate-x-1 duration-300 inline-block" icon="solar:copy-linear"></iconify-icon></button>
</div>
<div className="">
<h4 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-6 block">// INDEX</h4>
<ul className="space-y-4">
<li className=""><a className="interactive text-sm font-light text-white/70 hover:text-[#429DFE] transition-colors scroll-link hover:translate-x-1 duration-300 inline-block" href="#hero">Platform</a></li>
<li className=""><button className="interactive text-sm font-light text-white/70 hover:text-[#429DFE] transition-colors outline-none text-left hover:translate-x-1 duration-300" onclick="showToast('Manifesto is currently encrypted.')">Manifesto</button></li>
<li className=""><a className="interactive text-sm font-light text-white/70 hover:text-[#429DFE] transition-colors scroll-link hover:translate-x-1 duration-300 inline-block" href="#testimonials">Syndicate</a></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-6 block">// NETWORK</h4>
<ul className="space-y-4">
<li className=""><button className="interactive w-full text-sm font-light text-white/70 hover:text-[#FF91E3] transition-colors flex items-center justify-between group outline-none" onclick="showToast('Establishing X connection...')">X <iconify-icon className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" icon="solar:arrow-right-up-linear"></iconify-icon></button></li>
<li><button className="interactive w-full text-sm font-light text-white/70 hover:text-[#FF91E3] transition-colors flex items-center justify-between group outline-none" onclick="showToast('Establishing Insta connection...')">Insta <iconify-icon className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" icon="solar:arrow-right-up-linear"></iconify-icon></button></li>
<li><button className="interactive w-full text-sm font-light text-white/70 hover:text-[#FF91E3] transition-colors flex items-center justify-between group outline-none" onclick="showToast('Establishing Linked connection...')">Linked <iconify-icon className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" icon="solar:arrow-right-up-linear"></iconify-icon></button></li>
</ul>
</div>
</div>
</div>
<div className="w-full border-t border-[#262626] mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gs-fade-up">
<ul className="flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-white/30 uppercase tracking-widest mb-6 md:mb-0">
<li><button className="interactive hover:text-white transition-colors outline-none" onclick="showToast('Privacy protocol initiated.')">Privacy</button></li>
<li><button className="interactive hover:text-white transition-colors outline-none" onclick="showToast('Terms of engagement loaded.')">Terms</button></li>
<li><button className="interactive hover:text-white transition-colors outline-none" onclick="showToast('Cookie preferences updated.')">Cookies</button></li>
</ul>
<div className="text-xs font-mono text-white/30 uppercase tracking-widest text-center">
                    © 2025 AURALIS. ALL RIGHTS RESERVED.
                </div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden flex items-center justify-center opacity-0 transition-opacity duration-500" id="global-modal">
<div className="absolute inset-0 bg-[#020617]/80 backdrop-blur-md cursor-pointer" onclick="closeModal()"></div>
<div className="bg-[#080808] border border-[#262626] rounded-3xl w-full max-w-md mx-6 relative z-10 scale-95 transition-transform duration-500 flex flex-col overflow-hidden shadow-2xl" id="modal-panel">
<div className="px-6 py-4 border-b border-[#262626] flex justify-between items-center bg-[#020617]/50">
<span className="text-xs font-mono text-white/50 uppercase tracking-widest" id="modal-title">// SYSTEM ACCESS</span>
<button className="interactive text-white/50 hover:text-white transition-colors outline-none hover:rotate-90 duration-300 transform" onclick="closeModal()">
<iconify-icon icon="solar:close-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="p-6 md:p-8" id="modal-body"></div>
</div>
</div>

<div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[110] bg-white text-[#020617] px-6 py-3 rounded-full text-sm font-medium tracking-tight shadow-2xl flex items-center gap-3 translate-y-20 opacity-0 transition-all duration-500 pointer-events-none" id="toast">
<iconify-icon className="text-[#F97316]" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span id="toast-msg">Action successful</span>
</div>





    </>
  );
}
