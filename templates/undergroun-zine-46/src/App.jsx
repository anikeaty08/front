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



tailwind.config = {
theme: {
extend: {
colors: {
paper: '#F0F0F2',
ink: '#111111',
brand: '#D35D88', /* Hot Pink from request */
zinc: { 900: '#18181b' }
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Oswald', 'sans-serif'],
mono: ['IBM Plex Mono', 'monospace'],
},
boxShadow: {
hard: '8px 8px 0px 0px #111111',
tape: '0 2px 4px rgba(0,0,0,0.2)',
glow: '0 0 20px rgba(211, 93, 136, 0.5)'
},
backgroundImage: {
'halftone': 'radial-gradient(circle, #111 2px, transparent 2.5px)',
},
animation: {
marquee: 'marquee 25s linear infinite',
'marquee-rev': 'marquee-rev 25s linear infinite',
flicker: 'flicker 0.2s infinite alternate'
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
},
'marquee-rev': {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(0)' },
},
flicker: {
'0%': { opacity: 1 },
'100%': { opacity: 0.8 }
}
}
}
}
}



    // 1. ICONS
    lucide.createIcons();

    // 2. WEBGL TUNNEL SCENE
    const initThreeJS = () => {
      const container = document.getElementById('canvas-container');
      const scene = new THREE.Scene();
      // Add subtle fog to fade the tunnel into darkness
      scene.fog = new THREE.FogExp2(0x050505, 0.03);

      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // --- CREATE CURVE FOR TUNNEL ---
      // A winding path
      const points = [];
      for (let i = 0; i < 50; i++) {
        points.push(new THREE.Vector3(
          Math.sin(i * 0.2) * 10 + (Math.random() - 0.5) * 5,
          Math.cos(i * 0.3) * 5 + (Math.random() - 0.5) * 5,
          i * -10
        ));
      }
      const curve = new THREE.CatmullRomCurve3(points);

      // --- CREATE TUNNEL GEOMETRY ---
      const geometry = new THREE.TubeGeometry(curve, 100, 3, 8, false);
      // Wireframe aesthetic for brutalist tech look
      const material = new THREE.MeshBasicMaterial({ 
        color: 0x333333, 
        wireframe: true,
        transparent: true,
        opacity: 0.3
      });
      const tunnel = new THREE.Mesh(geometry, material);
      scene.add(tunnel);

      // --- ADD "FIBER" CABLES (Pink Lines) ---
      // We create a secondary thinner tube slightly offset
      const fiberGeo = new THREE.TubeGeometry(curve, 100, 0.1, 4, false);
      const fiberMat = new THREE.MeshBasicMaterial({ 
        color: 0xD35D88, // Brand Pink
        transparent: true,
        opacity: 0.8
      });
      const fiber = new THREE.Mesh(fiberGeo, fiberMat);
      fiber.position.x = 0.5; // Offset
      fiber.position.y = -1;
      scene.add(fiber);

      // --- ADD PARTICLES/STARS ---
      const particlesGeo = new THREE.BufferGeometry();
      const particlesCount = 400;
      const posArray = new Float32Array(particlesCount * 3);
      for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 100; // Spread wide
      }
      particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      const particlesMat = new THREE.PointsMaterial({
        size: 0.1,
        color: 0xffffff,
        transparent: true,
        opacity: 0.4
      });
      const particleSystem = new THREE.Points(particlesGeo, particlesMat);
      // scene.add(particleSystem); // Optional, kept scene clean for now

      // --- ANIMATION STATE ---
      let scrollProgress = 0;
      const binormal = new THREE.Vector3();
      const normal = new THREE.Vector3();

      // --- SCROLLTRIGGER SYNC ---
      gsap.registerPlugin(ScrollTrigger);
      
      ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          // Smoothly interpolate scrollProgress towards self.progress
          gsap.to(cameraPositionState, {
            val: self.progress,
            duration: 1, // Smooth dampening
            ease: "power2.out"
          });
        }
      });

      const cameraPositionState = { val: 0 };

      // --- RESIZE HANDLER ---
      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });

      // --- ANIMATION LOOP ---
      const animate = () => {
        requestAnimationFrame(animate);

        // Calculate position along curve based on scroll
        // Map 0..1 progress to a subsection of the curve (e.g., 0.05 to 0.95 to avoid ends)
        const loopTime = 0.9 * cameraPositionState.val + 0.02; // Start slightly in
        
        // Get position on curve
        const pos = curve.getPointAt(loopTime);
        // Get a point slightly ahead for lookAt
        const lookAtPos = curve.getPointAt(Math.min(loopTime + 0.05, 0.99));

        camera.position.copy(pos);
        camera.lookAt(lookAtPos);
        
        // Add subtle rotation based on curve tangent
        // (Simplified for performance)
        
        // Pulse the fiber opacity
        const time = Date.now() * 0.001;
        fiberMat.opacity = 0.5 + Math.sin(time * 2) * 0.3;

        renderer.render(scene, camera);
      };

      animate();
    };

    // Initialize only if not mobile to save battery? Or just run it. 
    // Brutalist sites usually just run it.
    window.addEventListener('load', initThreeJS);

  
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
      

<div className="noise-overlay"></div>

<div className="fixed inset-0 z-0 bg-[#050505]" id="canvas-container"></div>

<nav className="fixed top-0 left-0 w-full z-50 pointer-events-none mix-blend-difference text-white">
<div className="max-w-[1400px] mx-auto p-4 flex justify-between items-start">
<div className="flex flex-col">
<div className="bg-white text-ink px-2 py-1 font-display font-bold text-xl tracking-tighter inline-block pointer-events-auto shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">
          LTRO
        </div>
<span className="font-mono text-[10px] tracking-widest mt-1 opacity-70">SEC.01 // TUNNEL_VISION</span>
</div>
<div className="hidden md:flex gap-1 pointer-events-auto">
<a className="border border-white/20 bg-black/50 backdrop-blur-sm px-3 py-1 font-mono text-[10px] hover:bg-brand hover:text-black hover:border-brand transition-colors" href="#node-00">[00] SIGNAL</a>
<a className="border border-white/20 bg-black/50 backdrop-blur-sm px-3 py-1 font-mono text-[10px] hover:bg-brand hover:text-black hover:border-brand transition-colors" href="#node-01">[01] ZINES</a>
<a className="border border-white/20 bg-black/50 backdrop-blur-sm px-3 py-1 font-mono text-[10px] hover:bg-brand hover:text-black hover:border-brand transition-colors" href="#node-02">[02] GIGS</a>
<a className="border border-white/20 bg-black/50 backdrop-blur-sm px-3 py-1 font-mono text-[10px] hover:bg-brand hover:text-black hover:border-brand transition-colors" href="#node-03">[03] DROPS</a>
</div>
</div>
</nav>

<main className="relative z-10 w-full">

<section className="min-h-screen flex items-center px-4 sm:px-6 relative overflow-hidden" id="node-00">

<svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-20 opacity-40 mix-blend-screen" xmlns="http://www.w3.org/2000/svg">
<path className="animate-pulse" d="M 100 100 Q 400 300 800 100" fill="none" stroke="#D35D88" strokeWidth="2"></path>
<circle cx="100" cy="100" fill="#D35D88" r="4"></circle>
</svg>
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 pt-20">

<div className="lg:col-span-7 relative z-10">
<div className="bg-paper p-6 sm:p-10 border-2 border-ink shadow-hard torn-paper rotate-1 relative group">
<div className="tape tape-pink -top-3 left-1/3 w-32 rotate-2 opacity-80"></div>
<h1 className="font-display font-semibold text-7xl sm:text-[9rem] leading-[0.85] tracking-tighter text-ink uppercase mb-6">
              LET THE<br/>
<span className="text-brand">RAT</span> OUT<br/>
<span className="text-4xl sm:text-6xl text-ink/80 block mt-2">Let the rats dance</span>
</h1>
<div className="flex flex-wrap gap-4 mt-8 font-mono text-sm">
<button className="bg-ink text-white px-6 py-3 uppercase tracking-widest hover:bg-brand transition-colors shadow-[4px_4px_0px_white]">
<span className="flex items-center gap-2">Get Directions <i className="w-4 h-4" data-lucide="map-pin"></i></span>
</button>
<button className="border-2 border-ink text-ink px-6 py-3 uppercase tracking-widest hover:bg-brand hover:text-white hover:border-brand transition-colors">
<span className="flex items-center gap-2">DM Instagram <i className="w-4 h-4" data-lucide="instagram"></i></span>
</button>
</div>

<div className="absolute -right-4 -bottom-8 bg-brand text-white p-4 rounded-full w-24 h-24 flex items-center justify-center text-center font-display font-bold text-xl leading-none rotate-12 shadow-lg animate-bounce">
              OPEN<br/>LATE
            </div>
</div>
</div>

<div className="hidden lg:flex lg:col-span-5 flex-col justify-end items-end pb-20 pointer-events-none">
<div className="bg-black/80 backdrop-blur text-white p-4 border-l-4 border-brand font-mono text-xs max-w-xs">
<div className="text-brand mb-1">// SYSTEM STATUS</div>
<p className="opacity-70 mb-2">Tunnel navigation active. Scroll to traverse underground nodes.</p>
<div className="flex gap-2">
<span className="bg-brand w-2 h-2 rounded-full animate-pulse"></span>
<span>LIVE FEED</span>
</div>
</div>
</div>
</div>
</section>

<div className="bg-brand text-white font-display font-bold text-4xl py-3 border-y-4 border-ink overflow-hidden whitespace-nowrap relative z-20 -rotate-1 origin-left scale-105">
<div className="animate-marquee flex gap-12 items-center">
<span>MATCHA + NOISE</span> <span>///</span> <span>UNDERGROUND CULTURE</span> <span>///</span> <span>NO SIGNAL</span> <span>///</span>
<span>MATCHA + NOISE</span> <span>///</span> <span>UNDERGROUND CULTURE</span> <span>///</span> <span>NO SIGNAL</span> <span>///</span>
<span>MATCHA + NOISE</span> <span>///</span> <span>UNDERGROUND CULTURE</span> <span>///</span> <span>NO SIGNAL</span> <span>///</span>
</div>
</div>

<section className="py-32 px-4 sm:px-6 relative" id="node-01">
<div className="max-w-6xl mx-auto">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-paper border-2 border-ink p-6 shadow-hard hover:-translate-y-1 transition-transform relative">
<div className="tape w-20 -top-3 left-10 -rotate-3"></div>
<div className="flex items-center justify-between mb-4 border-b border-ink/20 pb-2">
<h3 className="font-display font-semibold text-3xl uppercase">Slow Bar</h3>
<i className="text-brand stroke-[1.5]" data-lucide="coffee"></i>
</div>
<p className="font-mono text-xs leading-relaxed opacity-80">
              Ceremonial grade matcha &amp; dirty coffee. We brew slow. Don't rush the process.
            </p>
</div>

<div className="bg-paper border-2 border-ink p-6 shadow-hard hover:-translate-y-1 transition-transform relative lg:mt-12">
<div className="tape tape-pink w-16 -top-2 right-10 rotate-6 opacity-60"></div>
<div className="flex items-center justify-between mb-4 border-b border-ink/20 pb-2">
<h3 className="font-display font-semibold text-3xl uppercase">Gigs</h3>
<i className="text-brand stroke-[1.5]" data-lucide="mic-2"></i>
</div>
<p className="font-mono text-xs leading-relaxed opacity-80">
              Noise, indie, experimental. The acoustics of concrete. Check the flyer wall for dates.
            </p>
</div>

<div className="bg-paper border-2 border-ink p-6 shadow-hard hover:-translate-y-1 transition-transform relative">
<div className="tape w-24 -bottom-3 left-1/2 -translate-x-1/2 -rotate-1"></div>
<div className="flex items-center justify-between mb-4 border-b border-ink/20 pb-2">
<h3 className="font-display font-semibold text-3xl uppercase">Thrift</h3>
<i className="text-brand stroke-[1.5]" data-lucide="shirt"></i>
</div>
<p className="font-mono text-xs leading-relaxed opacity-80">
              Curated second-hand fits and handmade goods from local creators. Support the clan.
            </p>
</div>
</div>
<div className="mt-16 text-center">
<span className="bg-ink text-white font-mono text-xs px-4 py-1 uppercase tracking-widest inline-block -rotate-2">
                Coordinates: BKK-42 Underpass
             </span>
</div>
</div>
</section>

<section className="py-32 px-4 sm:px-6 relative min-h-screen flex items-center justify-center" id="node-02">

<div className="absolute inset-0 bg-ink/30 backdrop-blur-[2px]"></div>
<div className="max-w-7xl mx-auto w-full relative z-10">
<div className="flex items-end justify-between mb-12 border-b-2 border-white/20 pb-4">
<h2 className="font-display font-semibold text-6xl text-paper tracking-tighter uppercase drop-shadow-lg">
            Incoming <span className="text-brand">Signals</span>
</h2>
<div className="font-mono text-xs text-brand bg-black px-2 py-1 rotate-3">
             LIVE UPDATES
          </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 perspective-[1000px]">

<div className="group relative w-full aspect-[3/4] bg-[#F3F3F3] p-4 text-ink shadow-[10px_10px_20px_rgba(0,0,0,0.5)] transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer">
<div className="tape tape-pink w-32 -top-4 left-1/2 -translate-x-1/2 rotate-1"></div>
<div className="border-4 border-ink h-full p-4 flex flex-col justify-between relative overflow-hidden">

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')] opacity-10 pointer-events-none"></div>
<div>
<div className="flex justify-between items-start border-b-2 border-ink pb-2 mb-4">
<span className="font-display text-4xl font-bold">22 NOV</span>
<span className="font-mono text-xs bg-ink text-white px-1">LIVE</span>
</div>
<h3 className="font-display font-bold text-6xl leading-[0.8] mb-2 uppercase break-words">
                     AGGI<br/><span className="text-brand">UNKREATIVE</span>
</h3>
<p className="font-mono text-sm mt-4 border-t border-ink pt-2">
                     FEAT. BENGLAWAN<br/>
                     GENRE: NOISE / PUNK
                  </p>
</div>
<div className="flex justify-between items-end">
<div className="font-display text-2xl font-bold">20:00</div>
<div className="font-mono text-sm bg-brand text-white px-2 py-1">200 THB</div>
</div>
</div>
</div>

<div className="group relative w-full aspect-[3/4] bg-[#E5E5E5] p-2 text-ink shadow-[10px_10px_20px_rgba(0,0,0,0.5)] transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer lg:mt-12">
<div className="tape w-24 -top-3 right-10 -rotate-3"></div>
<div className="border-2 border-dashed border-ink h-full p-6 flex flex-col items-center justify-center text-center relative grayscale group-hover:grayscale-0 transition-all">
<h3 className="font-display font-bold text-5xl mb-2">TOY ROOM</h3>
<div className="w-full h-px bg-ink my-4"></div>
<h3 className="font-display font-bold text-5xl mb-2 opacity-50">REPPER</h3>
<div className="w-full h-px bg-ink my-4"></div>
<h3 className="font-display font-bold text-5xl mb-8 opacity-30">WINDFALL</h3>
<div className="absolute bottom-6 font-mono text-xs bg-ink text-white px-4 py-1 -rotate-3">
                  06 JAN // DOORS 8PM
               </div>
</div>
</div>

<div className="group relative w-full aspect-[3/4] bg-zinc-900 p-4 text-white shadow-[10px_10px_20px_rgba(0,0,0,0.5)] transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer">
<div className="tape tape-pink w-24 -bottom-3 left-4 rotate-45 opacity-80"></div>
<div className="border border-white/30 h-full p-6 flex flex-col justify-center relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center opacity-20">
<i className="w-64 h-64 animate-spin-slow" data-lucide="disc"></i>
</div>
<div className="relative z-10 text-center">
<h3 className="font-display font-bold text-7xl text-brand mb-2">OPEN<br/>DECKS</h3>
<p className="font-mono text-xs tracking-[0.2em] mb-8">COMMUNITY SESSION</p>
<button className="border border-white hover:bg-white hover:text-black font-mono text-xs uppercase px-6 py-3 transition-colors">
                     Sign Up
                  </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 sm:px-6 bg-paper relative z-10" id="node-03">
<div className="absolute top-0 left-0 w-full h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CiAgPHBhdGggZD0iTTAgMjAgTDEwIDAgTDIwIDIwIFoiIGZpbGw9IiMxMTExMTEiLz4KPC9zdmc+')] repeat-x opacity-10"></div>
<div className="max-w-6xl mx-auto">
<div className="flex items-center justify-between mb-12">
<h2 className="font-display font-semibold text-5xl uppercase">Supply <span className="text-brand">//</span> Gear</h2>
<a className="font-mono text-xs underline decoration-brand decoration-2 underline-offset-4 hover:bg-brand hover:text-white transition-colors p-1" href="#">View All</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="group bg-white border border-ink p-2 hover:shadow-hard transition-shadow cursor-pointer">
<div className="aspect-square bg-gray-200 relative overflow-hidden mb-3 grayscale group-hover:grayscale-0 transition-all">
<img alt="Cap" className="object-cover w-full h-full mix-blend-multiply opacity-80" src="https://placehold.co/400x400/eeeeee/111111?text=CAP"/>
<div className="absolute top-2 right-2 bg-brand text-white font-mono text-[10px] px-2 py-0.5">NEW</div>
</div>
<div className="px-2 pb-2">
<h4 className="font-display font-bold text-lg leading-none mb-1">LTRO CAP V1</h4>
<div className="flex justify-between font-mono text-xs opacity-60">
<span>BLK/WHT</span>
<span>850 THB</span>
</div>
</div>
</div>

<div className="group bg-white border border-ink p-2 hover:shadow-hard transition-shadow cursor-pointer">
<div className="aspect-square bg-gray-200 relative overflow-hidden mb-3 grayscale group-hover:grayscale-0 transition-all">
<img alt="Tote" className="object-cover w-full h-full mix-blend-multiply opacity-80" src="https://placehold.co/400x400/eeeeee/111111?text=TOTE"/>
</div>
<div className="px-2 pb-2">
<h4 className="font-display font-bold text-lg leading-none mb-1">RATION TOTE</h4>
<div className="flex justify-between font-mono text-xs opacity-60">
<span>CANVAS</span>
<span>590 THB</span>
</div>
</div>
</div>

<div className="group bg-white border border-ink p-2 hover:shadow-hard transition-shadow cursor-pointer">
<div className="aspect-square bg-gray-200 relative overflow-hidden mb-3 grayscale group-hover:grayscale-0 transition-all">
<img alt="Zine" className="object-cover w-full h-full mix-blend-multiply opacity-80" src="https://placehold.co/400x400/eeeeee/111111?text=ZINE"/>
</div>
<div className="px-2 pb-2">
<h4 className="font-display font-bold text-lg leading-none mb-1">ISSUE 04</h4>
<div className="flex justify-between font-mono text-xs opacity-60">
<span>PAPER</span>
<span>300 THB</span>
</div>
</div>
</div>

<div className="group bg-ink p-2 text-white relative overflow-hidden cursor-not-allowed">
<div className="aspect-square border border-white/20 flex items-center justify-center mb-3">
<span className="font-display font-bold text-4xl text-brand -rotate-12 border-2 border-brand p-2">SOLD<br/>OUT</span>
</div>
<div className="px-2 pb-2 opacity-50">
<h4 className="font-display font-bold text-lg leading-none mb-1">LOGO TEE</h4>
<div className="flex justify-between font-mono text-xs">
<span>COTTON</span>
<span>---</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-ink text-paper py-20 px-4 relative z-10 border-t-8 border-brand">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 justify-between items-start">
<div>
<h2 className="font-display font-bold text-8xl tracking-tighter text-brand mb-6 leading-[0.8]">LOCATE<br/><span className="text-white">US</span></h2>
<div className="font-mono text-sm space-y-2 opacity-70">
<p>Sukhumvit 42 Underpass</p>
<p>Bangkok, Thailand</p>
<p className="pt-4 text-brand">/// coordinates.hidden.below</p>
</div>
</div>
<div className="w-full md:w-1/2 bg-zinc-900 border border-white/20 p-8 min-h-[300px] relative flex flex-col items-center justify-center text-center">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10">
<div className="w-4 h-4 bg-brand rounded-full animate-ping absolute -top-2 -right-2"></div>
<div className="w-4 h-4 bg-brand rounded-full mx-auto mb-4"></div>
<h3 className="font-display text-2xl uppercase">Map Unavailable</h3>
<p className="font-mono text-xs text-white/50 mt-2 max-w-xs mx-auto">
                   Signal lost underground. Follow the red rats stenciled on the pavement from BTS Ekkamai.
                </p>
<a className="mt-6 inline-block border border-brand text-brand font-mono text-xs px-4 py-2 hover:bg-brand hover:text-white transition-colors" href="#">
                   OPEN GOOGLE MAPS
                </a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-20 border-t border-white/10 pt-8 flex justify-between items-end font-mono text-[10px] uppercase text-white/40">
<div>© 2024 LTRO PROJECT</div>
<div className="text-right">Built for the Underground<br/>Establishment</div>
</div>
</section>
</main>



    </>
  );
}
