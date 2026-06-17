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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- ICONS ---
        lucide.createIcons();

        // --- THREE.JS CELESTIAL ENGINE ---
        const initThreeJS = () => {
            const container = document.getElementById('three-canvas');
            const scene = new THREE.Scene();
            
            // Fog for depth
            scene.fog = new THREE.FogExp2(0x030303, 0.002);

            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 30;

            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            container.appendChild(renderer.domElement);

            // 1. Starfield Particles
            const starsGeometry = new THREE.BufferGeometry();
            const starsCount = 2000;
            const posArray = new Float32Array(starsCount * 3);
            
            for(let i = 0; i < starsCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 100;
            }
            starsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            const starsMaterial = new THREE.PointsMaterial({
                size: 0.05,
                color: 0xffffff,
                transparent: true,
                opacity: 0.8
            });
            const starMesh = new THREE.Points(starsGeometry, starsMaterial);
            scene.add(starMesh);

            // 2. The Natal Sphere (Wireframe Globe)
            const geometry = new THREE.IcosahedronGeometry(10, 2);
            const material = new THREE.MeshBasicMaterial({ 
                color: 0xCCFF00, 
                wireframe: true, 
                transparent: true, 
                opacity: 0.1 
            });
            const sphere = new THREE.Mesh(geometry, material);
            scene.add(sphere);

            // 3. Planetary Nodes (Glowing Points)
            const nodesGroup = new THREE.Group();
            const planetColors = [0xfacc15, 0x60a5fa, 0xef4444];
            
            for (let i = 0; i < 5; i++) {
                const nodeGeo = new THREE.SphereGeometry(0.2, 16, 16);
                const nodeMat = new THREE.MeshBasicMaterial({ color: planetColors[i % 3] });
                const node = new THREE.Mesh(nodeGeo, nodeMat);
                
                // Random positions on surface roughly
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(Math.random() * 2 - 1);
                const r = 10;
                
                node.position.x = r * Math.sin(phi) * Math.cos(theta);
                node.position.y = r * Math.sin(phi) * Math.sin(theta);
                node.position.z = r * Math.cos(phi);
                
                nodesGroup.add(node);
            }
            sphere.add(nodesGroup);

            // Animation Loop
            const animate = () => {
                requestAnimationFrame(animate);
                
                starMesh.rotation.y += 0.0005;
                sphere.rotation.y -= 0.001;
                sphere.rotation.x += 0.0005;

                // Pulse effect on nodes
                nodesGroup.children.forEach((child, i) => {
                    const scale = 1 + Math.sin(Date.now() * 0.003 + i) * 0.3;
                    child.scale.set(scale, scale, scale);
                });

                renderer.render(scene, camera);
            };
            animate();

            // Resize Handler
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        };

        // --- UI LOGIC ---
        document.addEventListener('DOMContentLoaded', () => {
            initThreeJS();

            // Simulate Firebase/Realtime Notification
            setTimeout(() => {
                const notif = document.getElementById('notification');
                notif.classList.remove('translate-y-20', 'opacity-0');
                
                // Auto hide
                setTimeout(() => {
                    notif.classList.add('translate-y-20', 'opacity-0');
                }, 6000);
            }, 3000);

            // Chat Auto-Scroll
            const chatContainer = document.getElementById('chat-container');
            chatContainer.scrollTop = chatContainer.scrollHeight;
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
      

<div className="canvas-container opacity-60" id="three-canvas"><canvas height="1476" style={{display: 'block', width: '869px', height: '671px'}} width="1911"></canvas><canvas height="1476" style={{display: 'block', width: '869px', height: '671px'}} width="1911"></canvas><canvas height="1476" style={{display: 'block', width: '869px', height: '671px'}} width="1911"></canvas><canvas height="1476" style={{display: 'block', width: '869px', height: '671px'}} width="1911"></canvas><canvas height="1476" style={{display: 'block', width: '869px', height: '671px'}} width="1911"></canvas><canvas height="1476" style={{display: 'block', width: '869px', height: '671px'}} width="1911"></canvas><canvas height="1476" style={{display: 'block', width: '869px', height: '671px'}} width="1911"></canvas><canvas height="1476" style={{display: 'block', width: '869px', height: '671px'}} width="1911"></canvas><canvas height="1476" style={{display: 'block', width: '869px', height: '671px'}} width="1911"></canvas><canvas height="1476" style={{display: 'block', width: '869px', height: '671px'}} width="1911"></canvas><canvas height="1476" style={{display: 'block', width: '869px', height: '671px'}} width="1911"></canvas></div>
<div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0"></div>
<div className="fixed inset-0 bg-gradient-to-b from-black/20 via-transparent to-black z-0 pointer-events-none"></div>

<main className="ui-layer flex-grow flex flex-col relative h-screen overflow-hidden">

<header className="w-full h-16 border-b border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-between px-6 shrink-0">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-[#CCFF00] flex items-center justify-center shadow-[0_0_15px_rgba(204,255,0,0.4)]">
<svg className="lucide lucide-sparkles text-black w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="">
<h1 className="font-display font-bold text-lg tracking-tight leading-none text-white">AURA<span className="text-[#CCFF00]">SHADOW</span></h1>
<span className="text-[9px] font-hud text-gray-500 uppercase tracking-widest">Firebase Linked • v.4.0.1</span>
</div>
</div>

<div className="hidden md:flex items-center gap-6">
<div className="flex flex-col items-center">
<span className="text-[9px] font-hud text-[#60a5fa] uppercase mb-1">Current Transit</span>
<div className="flex items-center gap-2 text-xs font-display text-white">
<svg className="lucide lucide-moon w-3 h-3" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
<span>Moon <span className="text-gray-500">in</span> Scorpio 12°</span>
</div>
</div>
<div className="h-8 w-px bg-white/10"></div>
<div className="flex flex-col items-center">
<span className="text-[9px] font-hud text-[#ef4444] uppercase mb-1">Retrograde Alert</span>
<span className="text-xs font-display text-white tracking-wide">MERCURY</span>
</div>
</div>

<div className="flex items-center gap-4">
<div className="text-right hidden sm:block">
<div className="text-xs font-bold text-white">StarSeed_99</div>
<div className="text-[9px] text-[#CCFF00] font-hud">LVL 5 AWAKENED</div>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 bg-gray-900 flex items-center justify-center relative">
<img alt="User" className="w-8 h-8 rounded-full opacity-80" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#CCFF00] rounded-full border-2 border-black"></div>
</div>
</div>
</header>

<div className="flex-grow flex flex-col md:flex-row h-full overflow-hidden">

<aside className="w-full md:w-80 border-r border-white/10 bg-black/20 backdrop-blur-sm p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar">

<div className="space-y-4">
<div>
<div className="flex justify-between text-[10px] font-hud uppercase text-gray-400 mb-1">
<span>Spiritual Vitality</span>
<span className="text-[#CCFF00]">87%</span>
</div>
<div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-[#CCFF00] w-[87%] shadow-[0_0_10px_#CCFF00]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] font-hud uppercase text-gray-400 mb-1">
<span>Karma Cleared</span>
<span className="text-[#ef4444]">42%</span>
</div>
<div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-[#ef4444] w-[42%]"></div>
</div>
</div>
</div>

<div className="hud-panel p-4">
<div className="flex items-center justify-between mb-3">
<h3 className="font-display font-bold text-white text-sm">CURRENT QUEST</h3>
<svg className="lucide lucide-scroll w-4 h-4 text-[#facc15]" data-lucide="scroll" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17V5a2 2 0 0 0-2-2H4"></path><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path></svg>
</div>
<p className="text-[11px] text-gray-400 leading-relaxed mb-3">
<span className="text-white font-bold">The Shadow Work:</span> Saturn is transiting your 8th house. Confront a past fear to unlock the "Karmic Breaker" achievement.
                    </p>
<button className="w-full py-2 bg-white/5 border border-white/10 text-[10px] font-hud uppercase text-white hover:bg-[#CCFF00] hover:text-black transition-colors">
                        Begin Mediation
                    </button>
</div>

<div className="hud-panel p-4 group cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#60a5fa]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center gap-3 relative z-10">
<div className="w-12 h-16 bg-[#111] border border-white/20 rounded-sm flex items-center justify-center">
<svg className="lucide lucide-layers text-gray-500 w-5 h-5 group-hover:text-white transition-colors" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<div className="">
<h4 className="font-display text-sm font-bold text-white">DAILY DRAW</h4>
<p className="text-[10px] text-gray-500 font-hud mt-1">Reveal your archetype</p>
</div>
</div>
</div>

<div className="mt-auto">
<h4 className="font-hud text-[10px] text-gray-500 uppercase mb-3 tracking-widest">Natal Coordinates</h4>
<div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-gray-300">
<div className="bg-white/5 p-2 rounded">SUN <span className="text-[#facc15] float-right">LEO</span></div>
<div className="bg-white/5 p-2 rounded">MOON <span className="text-[#60a5fa] float-right">PIS</span></div>
<div className="bg-white/5 p-2 rounded">ASC <span className="text-[#CCFF00] float-right">SCO</span></div>
<div className="bg-white/5 p-2 rounded">VEN <span className="text-[#ef4444] float-right">GEM</span></div>
</div>
</div>
</aside>

<section className="flex-grow relative flex flex-col justify-end p-6 md:p-12">


<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
<div className="w-[300px] h-[300px] border border-[#CCFF00]/20 rounded-full animate-spin-slow flex items-center justify-center relative">
<div className="absolute inset-0 border border-dashed border-white/10 rounded-full scale-125"></div>
<div className="absolute inset-0 border border-dotted border-[#60a5fa]/30 rounded-full scale-75 animate-reverse-spin"></div>
</div>
</div>

<div className="relative z-20 w-full max-w-2xl mx-auto">

<div className="bg-[#050505] border border-white/10 p-1 rounded-lg shadow-2xl">
<div className="bg-[#0a0a0a] rounded p-4 flex flex-col gap-4">
<div className="flex items-center justify-between border-b border-white/5 pb-2">
<span className="text-[10px] font-hud uppercase text-[#CCFF00] animate-pulse">Scanning Synastry...</span>
<svg className="lucide lucide-wifi w-3 h-3 text-[#CCFF00]" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>
<div className="flex items-center gap-4">

<div className="flex items-center gap-2 opacity-50">
<div className="w-8 h-8 rounded-full bg-gray-800 border border-white/10"></div>
<span className="text-xs font-mono text-gray-400">YOU</span>
</div>

<div className="flex-grow h-px bg-gradient-to-r from-transparent via-white/20 to-transparent relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#facc15] rounded-full shadow-[0_0_10px_#facc15]"></div>
</div>

<div className="flex items-center gap-2">
<input className="w-32 bg-transparent border-b border-white/20 text-xs font-mono py-1 text-center focus:border-[#facc15]" placeholder="Enter Twin Code" type="text"/>
<button className="w-6 h-6 bg-[#facc15] text-black rounded-sm flex items-center justify-center hover:scale-105 transition-transform">
<svg className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<aside className="md:w-96 flex flex-col z-20 bg-black/80 w-full border-white/10 border-l relative backdrop-blur-md">
<style>
        @keyframes marquee-vertical {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
        }
        .animate-marquee-vertical {
            animation: marquee-vertical 40s linear infinite;
        }
        .mask-gradient {
            mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
            -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
        }
    </style>

<div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/40 backdrop-blur-md z-10 shrink-0">
<div className="flex items-center gap-2">
<div className="relative flex items-center justify-center w-2 h-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#CCFF00]"></span>
</div>
<span className="text-[10px] font-display font-bold tracking-widest text-white uppercase">Live Oracle Feed</span>
</div>
<div className="flex gap-2">
<button className="text-gray-500 hover:text-white transition-colors">
<svg className="lucide lucide-sliders-horizontal" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" y1="2" y2="6"></line><line x1="8" y1="10" y2="14"></line><line x1="16" y1="18" y2="22"></line></svg>
</button>
</div>
</div>

<div className="flex-grow relative overflow-hidden mask-gradient w-full bg-black/20">

<div className="animate-marquee-vertical flex flex-col p-4 gap-3 absolute inset-x-0 top-0">

<div className="p-3 rounded-lg border border-white/10 bg-[#0a0a0a]/80 hover:border-[#facc15]/50 hover:shadow-[0_0_15px_rgba(250,204,21,0.1)] transition-all duration-300 group cursor-pointer">
<div className="flex items-start gap-3">
<div className="p-2 rounded bg-[#facc15]/10 border border-[#facc15]/20 text-[#facc15] shrink-0">
<svg className="lucide lucide-rotate-ccw" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
</div>
<div className="">
<div className="flex items-center justify-between w-full mb-1">
<h4 className="text-[11px] font-bold text-white font-display uppercase tracking-wide">Mercury Retrograde</h4>
<span className="text-[9px] text-[#facc15] bg-[#facc15]/10 px-1.5 py-0.5 rounded font-mono">ACTIVE</span>
</div>
<p className="text-[10px] text-gray-400 leading-relaxed font-sans">Communication vectors unstable in the 3rd House. Backup cognitive patterns immediately.</p>
</div>
</div>
</div>

<div className="p-3 rounded-lg border border-white/10 bg-[#0a0a0a]/80 hover:border-[#60a5fa]/50 hover:shadow-[0_0_15px_rgba(96,165,250,0.1)] transition-all duration-300 group cursor-pointer">
<div className="flex items-start gap-3">
<div className="p-2 rounded bg-[#60a5fa]/10 border border-[#60a5fa]/20 text-[#60a5fa] shrink-0">
<svg className="lucide lucide-moon" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
</div>
<div>
<div className="flex items-center justify-between w-full mb-1">
<h4 className="text-[11px] font-bold text-white font-display uppercase tracking-wide">Lunar Transit</h4>
<span className="text-[9px] text-[#60a5fa] font-mono">12° SCORPIO</span>
</div>
<p className="text-[10px] text-gray-400 leading-relaxed font-sans">Emotional depth increased by 300%. Ideal time for shadow work and introspection.</p>
</div>
</div>
</div>

<div className="p-3 rounded-lg border border-white/10 bg-[#0a0a0a]/80 hover:border-[#ef4444]/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.1)] transition-all duration-300 group cursor-pointer">
<div className="flex items-start gap-3">
<div className="p-2 rounded bg-[#ef4444]/10 border border-[#ef4444]/20 text-[#ef4444] shrink-0">
<svg className="lucide lucide-alert-triangle" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
<div>
<div className="flex items-center justify-between w-full mb-1">
<h4 className="text-[11px] font-bold text-white font-display uppercase tracking-wide">Void Course</h4>
<span className="text-[9px] text-[#ef4444] bg-[#ef4444]/10 px-1.5 py-0.5 rounded font-mono">WARNING</span>
</div>
<p className="text-[10px] text-gray-400 leading-relaxed font-sans">Do not initiate new contracts or spiritual bonds until 14:00 UTC.</p>
</div>
</div>
</div>

<div className="p-3 rounded-lg border border-white/10 bg-[#0a0a0a]/80 hover:border-[#CCFF00]/50 hover:shadow-[0_0_15px_rgba(204,255,0,0.1)] transition-all duration-300 group cursor-pointer">
<div className="flex items-start gap-3">
<div className="p-2 rounded bg-[#CCFF00]/10 border border-[#CCFF00]/20 text-[#CCFF00] shrink-0">
<svg className="lucide lucide-sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"></path></svg>
</div>
<div>
<div className="flex items-center justify-between w-full mb-1">
<h4 className="text-[11px] font-bold text-white font-display uppercase tracking-wide">Energy Match</h4>
<span className="text-[9px] text-[#CCFF00] font-mono">98% SYNCH</span>
</div>
<p className="text-[10px] text-gray-400 leading-relaxed font-sans">Compatible frequency detected in sector 7. Twin Flame probability high.</p>
</div>
</div>
</div>

<div className="p-3 rounded-lg border border-white/10 bg-[#0a0a0a]/80 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.1)] transition-all duration-300 group cursor-pointer">
<div className="flex items-start gap-3">
<div className="p-2 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
<svg className="lucide lucide-layers" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></svg>
</div>
<div>
<div className="flex items-center justify-between w-full mb-1">
<h4 className="text-[11px] font-bold text-white font-display uppercase tracking-wide">Daily Tarot</h4>
<span className="text-[9px] text-purple-400 font-mono">ARCANA</span>
</div>
<p className="text-[10px] text-gray-400 leading-relaxed font-sans">The High Priestess revealed. Trust your intuition over logic today.</p>
</div>
</div>
</div>


<div className="p-3 rounded-lg border border-white/10 bg-[#0a0a0a]/80 hover:border-[#facc15]/50 hover:shadow-[0_0_15px_rgba(250,204,21,0.1)] transition-all duration-300 group cursor-pointer">
<div className="flex items-start gap-3">
<div className="p-2 rounded bg-[#facc15]/10 border border-[#facc15]/20 text-[#facc15] shrink-0">
<svg className="lucide lucide-rotate-ccw" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
</div>
<div>
<div className="flex items-center justify-between w-full mb-1">
<h4 className="text-[11px] font-bold text-white font-display uppercase tracking-wide">Mercury Retrograde</h4>
<span className="text-[9px] text-[#facc15] bg-[#facc15]/10 px-1.5 py-0.5 rounded font-mono">ACTIVE</span>
</div>
<p className="text-[10px] text-gray-400 leading-relaxed font-sans">Communication vectors unstable in the 3rd House. Backup cognitive patterns immediately.</p>
</div>
</div>
</div>

<div className="p-3 rounded-lg border border-white/10 bg-[#0a0a0a]/80 hover:border-[#60a5fa]/50 hover:shadow-[0_0_15px_rgba(96,165,250,0.1)] transition-all duration-300 group cursor-pointer">
<div className="flex items-start gap-3">
<div className="p-2 rounded bg-[#60a5fa]/10 border border-[#60a5fa]/20 text-[#60a5fa] shrink-0">
<svg className="lucide lucide-moon" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
</div>
<div>
<div className="flex items-center justify-between w-full mb-1">
<h4 className="text-[11px] font-bold text-white font-display uppercase tracking-wide">Lunar Transit</h4>
<span className="text-[9px] text-[#60a5fa] font-mono">12° SCORPIO</span>
</div>
<p className="text-[10px] text-gray-400 leading-relaxed font-sans">Emotional depth increased by 300%. Ideal time for shadow work and introspection.</p>
</div>
</div>
</div>

<div className="p-3 rounded-lg border border-white/10 bg-[#0a0a0a]/80 hover:border-[#ef4444]/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.1)] transition-all duration-300 group cursor-pointer">
<div className="flex items-start gap-3">
<div className="p-2 rounded bg-[#ef4444]/10 border border-[#ef4444]/20 text-[#ef4444] shrink-0">
<svg className="lucide lucide-alert-triangle" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
<div>
<div className="flex items-center justify-between w-full mb-1">
<h4 className="text-[11px] font-bold text-white font-display uppercase tracking-wide">Void Course</h4>
<span className="text-[9px] text-[#ef4444] bg-[#ef4444]/10 px-1.5 py-0.5 rounded font-mono">WARNING</span>
</div>
<p className="text-[10px] text-gray-400 leading-relaxed font-sans">Do not initiate new contracts or spiritual bonds until 14:00 UTC.</p>
</div>
</div>
</div>

<div className="p-3 rounded-lg border border-white/10 bg-[#0a0a0a]/80 hover:border-[#CCFF00]/50 hover:shadow-[0_0_15px_rgba(204,255,0,0.1)] transition-all duration-300 group cursor-pointer">
<div className="flex items-start gap-3">
<div className="p-2 rounded bg-[#CCFF00]/10 border border-[#CCFF00]/20 text-[#CCFF00] shrink-0">
<svg className="lucide lucide-sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"></path></svg>
</div>
<div>
<div className="flex items-center justify-between w-full mb-1">
<h4 className="text-[11px] font-bold text-white font-display uppercase tracking-wide">Energy Match</h4>
<span className="text-[9px] text-[#CCFF00] font-mono">98% SYNCH</span>
</div>
<p className="text-[10px] text-gray-400 leading-relaxed font-sans">Compatible frequency detected in sector 7. Twin Flame probability high.</p>
</div>
</div>
</div>

<div className="p-3 rounded-lg border border-white/10 bg-[#0a0a0a]/80 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.1)] transition-all duration-300 group cursor-pointer">
<div className="flex items-start gap-3">
<div className="p-2 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
<svg className="lucide lucide-layers" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></svg>
</div>
<div>
<div className="flex items-center justify-between w-full mb-1">
<h4 className="text-[11px] font-bold text-white font-display uppercase tracking-wide">Daily Tarot</h4>
<span className="text-[9px] text-purple-400 font-mono">ARCANA</span>
</div>
<p className="text-[10px] text-gray-400 leading-relaxed font-sans">The High Priestess revealed. Trust your intuition over logic today.</p>
</div>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/10 bg-black/90 shrink-0 z-20">
<div className="relative">
<input className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-3 pr-10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00] transition-colors font-sans" placeholder="Query the stars..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#CCFF00] transition-colors">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>
<div className="flex gap-2 mt-2 overflow-x-auto pb-1 no-scrollbar mask-gradient-x">
<button className="whitespace-nowrap px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[9px] text-gray-400 hover:text-[#CCFF00] hover:border-[#CCFF00]/50 transition-colors">Tell me about my day</button>
<button className="whitespace-nowrap px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[9px] text-gray-400 hover:text-[#CCFF00] hover:border-[#CCFF00]/50 transition-colors">Love compatibility</button>
<button className="whitespace-nowrap px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[9px] text-gray-400 hover:text-[#CCFF00] hover:border-[#CCFF00]/50 transition-colors">Career forecast</button>
</div>
</div>
</aside>
</div>
</main>

<div className="fixed bottom-6 left-6 z-50 transform transition-all duration-500" id="notification">
<div className="bg-[#111] border-l-4 border-[#facc15] p-4 rounded shadow-2xl flex items-center gap-4 max-w-sm">
<div className="p-2 bg-[#facc15]/10 rounded-full">
<svg className="lucide lucide-infinity w-5 h-5 text-[#facc15]" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>
</div>
<div>
<h4 className="text-white font-bold text-sm font-display">TWIN FLAME SIGNAL</h4>
<p className="text-xs text-gray-400">A user with compatible North Node coordinates has entered the lobby.</p>
</div>
</div>
</div>


    </>
  );
}
