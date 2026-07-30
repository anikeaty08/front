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
fontFamily: { sans: ['Geist', 'sans-serif'] },
colors: {
surface: {
50: '#1a1a1a',
100: '#262626',
200: '#404040',
},
accent: {
DEFAULT: '#2997ff',
glow: 'rgba(41, 151, 255, 0.4)'
}
},
letterSpacing: { tightest: '-0.04em', tighter: '-0.02em' },
transitionTimingFunction: {
'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
},
animation: {
'blob': 'blob 10s infinite',
},
keyframes: {
blob: {
'0%, 100%': { transform: 'translate(0, 0) scale(1)' },
'25%': { transform: 'translate(20px, -30px) scale(1.1)' },
'50%': { transform: 'translate(0, 40px) scale(1)' },
'75%': { transform: 'translate(-30px, -25px) scale(0.9)' },
}
}
}
}
}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



      document.addEventListener('DOMContentLoaded', function() {
          const lenis = new Lenis();
          function raf(time) {
              lenis.raf(time);
              requestAnimationFrame(raf);
          }
          requestAnimationFrame(raf);

          gsap.registerPlugin(ScrollTrigger);
          const easeExpo = "power4.out";
          const easeSmooth = "cubic-bezier(0.19, 1, 0.22, 1)";

          const tl = gsap.timeline({ defaults: { ease: easeExpo, duration: 1.5 } });
          tl.to(".gsap-hero-reveal", { y: 0, opacity: 1, delay: 0.2, startAt: { y: 20, opacity: 0 } })
            .to(".line-inner", { y: "0%", filter: "blur(0px)", duration: 1.8, stagger: 0.1, ease: "power4.out" }, "-=1.2")
            .to(".gsap-p-reveal", { y: 0, opacity: 1, startAt: { y: 20, opacity: 0 } }, "-=1.6")
            .to(".gsap-btn-reveal", { y: 0, opacity: 1, startAt: { y: 20, opacity: 0 } }, "-=1.5");

          gsap.utils.toArray(['.gsap-panel-left', '.gsap-panel-right', '.gsap-panel-center']).forEach((panel, i) => {
              let y = 0, scale = 1;
              if (panel.classList.contains('gsap-panel-left') || panel.classList.contains('gsap-panel-right')) y = 40;
              if (panel.classList.contains('gsap-panel-center')) scale = 0.95;

              gsap.from(panel, {
                  scrollTrigger: { trigger: "#visualizer", start: "top 75%" },
                  y: y,
                  scale: scale,
                  opacity: 0,
                  duration: 1.5,
                  delay: i * 0.1,
                  ease: easeSmooth
              });
          });

          gsap.from(".gsap-card, .gsap-fade-up", {
              scrollTrigger: { trigger: "#concepts", start: "top 70%" },
              y: 60,
              opacity: 0,
              duration: 1.2,
              stagger: 0.1,
              ease: easeSmooth
          });

          const cardsContainer = document.getElementById("cards-container");
          cardsContainer.addEventListener("mousemove", (e) => {
              document.querySelectorAll(".spotlight-card").forEach((card) => {
                  const rect = card.getBoundingClientRect();
                  card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                  card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
              });
          });

          let vizScene, vizCamera, vizRenderer, currentMesh, isWireframe = false;
          const vizContainer = document.getElementById('canvas-wrapper');
          const sliderA = document.getElementById('slider-a');
          const sliderB = document.getElementById('slider-b');
          const sliderC = document.getElementById('slider-c');
          let currentShapeType = 'cube';

          const shapeData = {
              cube: { controls: ['a'], labels: { a: 'Side (a)' }, create: (a) => new THREE.BoxGeometry(a, a, a), volume: (a) => a**3, sa: (a) => 6 * a**2, vForm: 'V = a³', saForm: 'SA = 6a²', step: (a) => `Vol: ${a}³ = ${(a**3).toFixed(1)}<br>SA: 6×${a}² = ${(6*a**2).toFixed(1)}` },
              cuboid: { controls: ['a', 'b', 'c'], labels: { a: 'Width', b: 'Height', c: 'Depth' }, create: (a, b, c) => new THREE.BoxGeometry(a, b, c), volume: (a, b, c) => a * b * c, sa: (a, b, c) => 2 * (a*b + b*c + c*a), vForm: 'V=w×h×d', saForm: 'SA=2(wh+hd+dw)', step: (a,b,c) => `Vol: ${a}×${b}×${c} = ${(a*b*c).toFixed(1)}` },
              cylinder: { controls: ['a', 'b'], labels: { a: 'Radius (r)', b: 'Height (h)' }, create: (a, b) => new THREE.CylinderGeometry(a, a, b, 64), volume: (r, h) => Math.PI * r**2 * h, sa: (r, h) => 2 * Math.PI * r * (r + h), vForm: 'V=πr²h', saForm: 'SA=2πr(r+h)', step: (r,h) => `Vol: π×${r}²×${h} ≈ ${(Math.PI*r**2*h).toFixed(1)}` },
              sphere: { controls: ['a'], labels: { a: 'Radius (r)' }, create: (a) => new THREE.SphereGeometry(a, 64, 32), volume: (r) => (4/3) * Math.PI * r**3, sa: (r) => 4 * Math.PI * r**2, vForm: 'V=4/3πr³', saForm: 'SA=4πr²', step: (r) => `Vol: 4/3×π×${r}³ ≈ ${((4/3)*Math.PI*r**3).toFixed(1)}` },
              cone: { controls: ['a', 'b'], labels: { a: 'Radius (r)', b: 'Height (h)' }, create: (a, b) => new THREE.ConeGeometry(a, b, 64), volume: (r, h) => (1/3) * Math.PI * r**2 * h, sa: (r, h) => Math.PI * r * (r + Math.sqrt(r**2 + h**2)), vForm: 'V=1/3πr²h', saForm: 'SA=πr(r+l)', step: (r,h) => `Vol: 1/3×π×${r}²×${h} ≈ ${((1/3)*Math.PI*r**2*h).toFixed(1)}` }
          };

          function initVisualizer() {
              vizScene = new THREE.Scene();
              vizCamera = new THREE.PerspectiveCamera(50, vizContainer.clientWidth / vizContainer.clientHeight, 0.1, 100);
              vizCamera.position.set(10, 8, 10);
              vizCamera.lookAt(0, 0, 0);

              vizRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
              vizRenderer.setSize(vizContainer.clientWidth, vizContainer.clientHeight);
              vizRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
              vizContainer.appendChild(vizRenderer.domElement);

              vizScene.add(new THREE.AmbientLight(0x404040, 2));
              const dirLight = new THREE.DirectionalLight(0xffffff, 2);
              dirLight.position.set(5, 10, 7);
              vizScene.add(dirLight);
              const blueLight = new THREE.PointLight(0x2997ff, 2, 50);
              blueLight.position.set(-5, 0, -5);
              vizScene.add(blueLight);

              const gridHelper = new THREE.GridHelper(20, 20, 0x333333, 0x111111);
              vizScene.add(gridHelper);

              updateMesh();

              let isDragging = false, prevMouse = { x: 0, y: 0 };
              vizContainer.addEventListener('mousedown', () => isDragging = true);
              window.addEventListener('mouseup', () => isDragging = false);
              vizContainer.addEventListener('mousemove', (e) => {
                  if(isDragging && currentMesh) {
                      currentMesh.rotation.y += (e.offsetX - prevMouse.x) * 0.005;
                      currentMesh.rotation.x += (e.offsetY - prevMouse.y) * 0.005;
                  }
                  prevMouse = { x: e.offsetX, y: e.offsetY };
              });

              (function animateViz() {
                  requestAnimationFrame(animateViz);
                  if(currentMesh && !isDragging) currentMesh.rotation.y += 0.002;
                  vizRenderer.render(vizScene, vizCamera);
              })();
          }

          function updateMesh() {
              if(currentMesh) {
                  vizScene.remove(currentMesh);
                  currentMesh.geometry.dispose();
                  if(Array.isArray(currentMesh.material)) currentMesh.material.forEach(m => m.dispose());
                  else currentMesh.material.dispose();
              }

              const data = shapeData[currentShapeType];
              const a = parseFloat(sliderA.value), b = parseFloat(sliderB.value), c = parseFloat(sliderC.value);
              const scale = 0.5;

              const args = data.controls.map(ctrl => {
                  if (ctrl === 'a') return a * scale;
                  if (ctrl === 'b') return b * scale;
                  if (ctrl === 'c') return c * scale;
              });

              const geometry = data.create(...args);
              const material = new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 0.1, roughness: 0.05, transmission: 0.2, thickness: 0.5, wireframe: isWireframe, clearcoat: 1.0, clearcoatRoughness: 0.1 });

              currentMesh = new THREE.Mesh(geometry, material);
              currentMesh.position.y = (currentShapeType === 'cone' ? b * scale / 2 : (currentShapeType === 'cylinder' ? b * scale / 2 : 2));
               if (currentShapeType === 'cylinder' || currentShapeType === 'cone') currentMesh.position.y = b * scale / 2;
               else if (currentShapeType === 'cuboid') currentMesh.position.y = b * scale / 2;
               else currentMesh.position.y = 2; // Default for sphere/cube

              vizScene.add(currentMesh);
              updateCalculations(data, a, b, c);
          }

          function updateCalculations(data, a, b, c) {
              const args = data.controls.map(ctrl => (ctrl === 'a' ? a : (ctrl === 'b' ? b : c)));
              document.getElementById('volume-result').textContent = data.volume(...args).toFixed(2);
              document.getElementById('sa-result').textContent = data.sa(...args).toFixed(2);
              document.getElementById('volume-formula').textContent = data.vForm;
              document.getElementById('sa-formula').textContent = data.saForm;
              document.getElementById('calc-steps').innerHTML = data.step(...args);
              document.getElementById('value-a').textContent = a;
              document.getElementById('value-b').textContent = b;
              document.getElementById('value-c').textContent = c;
          }

          window.selectShape = (type) => {
              currentShapeType = type;
              const data = shapeData[type];
              document.querySelectorAll('[id^="btn-"]').forEach(btn => btn.className = "p-3 rounded-xl bg-transparent border border-white/10 text-zinc-500 text-xs font-medium hover:bg-white/5 transition-all text-center");
              document.getElementById(`btn-${type}`).className = "p-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-medium hover:bg-white/20 transition-all text-center shadow-[0_0_15px_rgba(255,255,255,0.05)]";

              ['a', 'b', 'c'].forEach(key => {
                  const el = document.getElementById(`control-${key}`);
                  const isVisible = data.controls.includes(key);
                  el.classList.toggle('hidden', !isVisible);
                  if(isVisible) {
                      gsap.fromTo(el, { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.3 });
                      document.getElementById(`label-${key}`).textContent = data.labels[key];
                  }
              });
              updateMesh();
          };

          [sliderA, sliderB, sliderC].forEach(slider => slider.addEventListener('input', updateMesh));
          document.getElementById('wireframe-toggle').addEventListener('click', () => { isWireframe = !isWireframe; updateMesh(); });
          document.getElementById('reset-cam').addEventListener('click', () => {
               gsap.to(vizCamera.position, { x: 10, y: 8, z: 10, duration: 1.5, ease: "power2.inOut", onUpdate: () => vizCamera.lookAt(0,0,0) });
               sliderA.value = 5; sliderB.value = 3; sliderC.value = 4;
               updateMesh();
          });

          window.addEventListener('resize', () => {
              if(!vizRenderer || !vizCamera) return;
              vizCamera.aspect = vizContainer.clientWidth / vizContainer.clientHeight;
              vizCamera.updateProjectionMatrix();
              vizRenderer.setSize(vizContainer.clientWidth, vizContainer.clientHeight);
          });

          initVisualizer();
          selectShape('cube');
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: `linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)`, webkitMaskImage: `linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)`}}><div data-us-project="N9XzvQXu7fA5SY2ewADJ" style={{width: `1440px`, height: `900px`}}></div>
</div>

<div className="fixed inset-0 -z-20 bg-black overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-blob mix-blend-screen"></div>
<div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-600/15 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
<div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-indigo-900/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>
<div className="absolute inset-0 bg-grid opacity-20 mask-gradient"></div>
</div>
<div className="fixed inset-0 pointer-events-none z-0 bg-grid opacity-75"></div>

<nav className="fixed top-0 w-full z-50 nav-glass" id="navbar" style={{maskImage: `linear-gradient(to bottom, black 40%, transparent 100%)`, webkitMaskImage: `linear-gradient(to bottom, black 40%, transparent 100%)`}}>
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-start">
<a className="flex items-center gap-4 group cursor-pointer" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-zinc-100 to-zinc-400 flex items-center justify-center text-black font-semibold text-xs tracking-tight group-hover:rotate-12 transition-transform duration-500 ease-expo-out">
            3D
          </div>
<span className="group-hover:text-white transition-colors text-base font-semibold text-zinc-200 tracking-tight">Geometria</span>
</a>
</div>
</nav>
<main className="relative z-10">

<section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
<div className="flex flex-col text-center max-w-5xl z-10 mx-auto px-4 relative items-center">
<div className="gsap-hero-reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-zinc-300 mb-8 hover:bg-white/10 transition-colors cursor-default backdrop-blur-md" style={{translate: `none`, rotate: `none`, scale: `none`, opacity: `1`, transform: `translate(0px, 0px)`}}>
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
</span>
            Interactive Geometry for Class 9
          </div>
<h1 className="text-7xl md:text-9xl font-normal tracking-tightest mb-8 leading-[0.9] text-white">
<div className="gsap-text-reveal">
<div className="line-mask">
<div className="line-inner" style={{translate: `none`, rotate: `none`, scale: `none`, filter: `blur(0px)`, transform: `translate(0px, 0%)`}}>Geometry</div>
</div>
</div>
<div className="gsap-text-reveal">
<div className="line-mask">
<div className="line-inner" style={{translate: `none`, rotate: `none`, scale: `none`, filter: `blur(0px)`, transform: `translate(0px, 0%)`}}>
<span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-zinc-200 to-zinc-500">
                    Reimagined.
                  </span>
</div>
</div>
</div>
</h1>
<p className="text-xl md:text-2xl text-zinc-400/80 max-w-2xl mx-auto mb-12 leading-relaxed font-light tracking-wide gsap-p-reveal" style={{translate: `none`, rotate: `none`, scale: `none`, opacity: `1`, transform: `translate(0px, 0px)`}}>
            Experience shapes in spatial 3D. Visualize volume, surface area, and
            complex theorems with interactive precision.
          </p>
<div className="flex items-center justify-center gap-4 w-full gsap-btn-reveal" style={{translate: `none`, rotate: `none`, scale: `none`, opacity: `1`, transform: `translate(0px, 0px)`}}>
<button className="group relative px-10 py-4 bg-white text-black rounded-full font-medium text-base overflow-hidden transition-all hover:scale-105 duration-300 ease-expo-out" onClick={(e) => { document.getElementById('visualizer').scrollIntoView({behavior: 'smooth'}) }}>
<span className="relative z-10">Start Exploring</span>
<div className="absolute inset-0 bg-zinc-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-expo-out -z-0"></div>
</button>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600 animate-bounce fade-in opacity-0" style={{animationDelay: `2s`, animationFillMode: `forwards`}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-down" data-width="20" height="20" role="img" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</section>

<section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto" id="visualizer">
<div className="flex flex-col lg:flex-row gap-6 min-h-[600px] items-stretch">
<div className="lg:w-[350px] flex-shrink-0 space-y-4 gsap-panel-left" style={{translate: `none`, rotate: `none`, scale: `none`, opacity: `0`, transform: `translate(0px, 40px)`}}>
<div className="glass-panel rounded-3xl p-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
<h2 className="text-sm font-semibold tracking-wide text-zinc-200 uppercase">
                  Configuration
                </h2>
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:sliders-horizontal" data-width="16" height="16" role="img" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3m9 14H3M14 3v4m2 10v4m5-9h-9m9 7h-5m5-14h-7m-6 5v4m0-2H3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="grid grid-cols-3 gap-2 mb-10">
<button className="p-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-medium hover:bg-white/20 transition-all text-center shadow-[0_0_15px_rgba(255,255,255,0.05)]" id="btn-cube" onClick={(e) => { selectShape('cube') }}>
                  Cube
                </button>
<button className="p-3 rounded-xl bg-transparent border border-white/10 text-zinc-500 text-xs font-medium hover:bg-white/5 transition-all text-center" id="btn-cylinder" onClick={(e) => { selectShape('cylinder') }}>
                  Cylinder
                </button>
<button className="p-3 rounded-xl bg-transparent border border-white/10 text-zinc-500 text-xs font-medium hover:bg-white/5 transition-all text-center" id="btn-sphere" onClick={(e) => { selectShape('sphere') }}>
                  Sphere
                </button>
<button className="p-3 rounded-xl bg-transparent border border-white/10 text-zinc-500 text-xs font-medium hover:bg-white/5 transition-all text-center" id="btn-cone" onClick={(e) => { selectShape('cone') }}>
                  Cone
                </button>
<button className="p-3 rounded-xl bg-transparent border border-white/10 text-zinc-500 text-xs font-medium hover:bg-white/5 transition-all text-center" id="btn-cuboid" onClick={(e) => { selectShape('cuboid') }}>
                  Cuboid
                </button>
</div>
<div className="space-y-8 flex-grow">
<div className="group" id="control-a">
<div className="flex justify-between text-xs font-medium mb-3">
<span className="text-zinc-400 group-hover:text-white transition-colors" id="label-a">
                      Side (a)
                    </span>
<span className="text-white bg-white/10 px-2 py-0.5 rounded text-[10px]" id="value-a">
                      5
                    </span>
</div>
<input className="w-full" id="slider-a" max="10" min="1" step="0.1" type="range" value="5" />
</div>
<div className="hidden group" id="control-b">
<div className="flex justify-between text-xs font-medium mb-3">
<span className="text-zinc-400 group-hover:text-white transition-colors" id="label-b">
                      Dimension B
                    </span>
<span className="text-white bg-white/10 px-2 py-0.5 rounded text-[10px]" id="value-b">
                      3
                    </span>
</div>
<input className="w-full" id="slider-b" max="10" min="1" step="0.1" type="range" value="3" />
</div>
<div className="hidden group" id="control-c">
<div className="flex justify-between text-xs font-medium mb-3">
<span className="text-zinc-400 group-hover:text-white transition-colors" id="label-c">
                      Dimension C
                    </span>
<span className="text-white bg-white/10 px-2 py-0.5 rounded text-[10px]" id="value-c">
                      4
                    </span>
</div>
<input className="w-full" id="slider-c" max="10" min="1" step="0.1" type="range" value="4" />
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/5 flex gap-4 text-xs text-zinc-500">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Edge
                </div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-white/20"></span>
                  Face
                </div>
</div>
</div>
</div>
<div className="lg:flex-grow relative h-[500px] lg:h-auto glass-panel rounded-3xl overflow-hidden border border-white/10 gsap-panel-center shadow-2xl" style={{translate: `none`, rotate: `none`, scale: `none`, opacity: `0`, transform: `scale(0.95, 0.95)`}}>
<div className="absolute inset-0 w-full h-full cursor-move z-10" id="canvas-wrapper"><canvas className="" height="498" style={{display: `block`, width: `774px`, height: `498px`}} width="774"></canvas><canvas height="498" style={{display: `block`, width: `774px`, height: `498px`}} width="774"></canvas><canvas height="498" style={{display: `block`, width: `774px`, height: `498px`}} width="774"></canvas><canvas height="498" style={{display: `block`, width: `774px`, height: `498px`}} width="774"></canvas><canvas height="498" style={{display: `block`, width: `774px`, height: `498px`}} width="774"></canvas></div>
<div className="absolute bottom-6 right-6 flex gap-2 z-20">
<button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-zinc-300 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300" id="reset-cam">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:rotate-ccw" data-stroke-width="1.5" data-width="16" height="16" role="img" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></g></svg>
</button>
<button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-zinc-300 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300" id="wireframe-toggle">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:grid" data-stroke-width="1.5" data-width="16" height="16" role="img" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18M3 15h18M9 3v18m6-18v18"></path></g></svg>
</button>
</div>
<div className="absolute top-6 left-6 pointer-events-none z-20">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-sm border border-white/5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-mono text-zinc-400 tracking-wider">
                  REALTIME RENDER
                </span>
</div>
</div>
</div>
<div className="lg:w-[300px] flex-shrink-0 space-y-4 gsap-panel-right" style={{translate: `none`, rotate: `none`, scale: `none`, opacity: `0`, transform: `translate(0px, 40px)`}}>
<div className="glass-panel rounded-3xl p-6 h-full border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent">
<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-6">
                Output Data
              </h3>
<div className="space-y-4">
<div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="text-sm text-zinc-400 font-medium">Volume</div>
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:box" data-stroke-width="1.5" data-width="16" height="16" role="img" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg>
</div>
<div className="text-3xl font-medium text-white tracking-tighter" id="volume-result">125.00</div>
</div>
<div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="text-sm text-zinc-400 font-medium">
                      Surface Area
                    </div>
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:maximize" data-stroke-width="1.5" data-width="16" height="16" role="img" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-3xl font-medium text-white tracking-tighter" id="sa-result">150.00</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-white/5">
<div className="flex justify-between items-center text-sm mb-3">
<span className="text-zinc-400 font-medium">Breakdown</span>
</div>
<div className="p-3 rounded-lg bg-black/20 border border-white/5">
<div className="text-xs text-zinc-400 font-mono leading-relaxed" id="calc-steps"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black relative" id="concepts">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex items-end justify-between mb-16">
<h2 className="text-4xl md:text-5xl font-medium tracking-tightest text-white/90 max-w-lg leading-[1.1] gsap-fade-up" style={{translate: `none`, rotate: `none`, scale: `none`, opacity: `0`, transform: `translate(0px, 60px)`}}>
              Out-of-the-box
              <br />
<span className="text-zinc-500">concepts.</span>
</h2>
<span className="text-xs text-zinc-500 hidden sm:block border border-white/10 px-3 py-1 rounded-full gsap-fade-up" style={{translate: `none`, rotate: `none`, scale: `none`, opacity: `0`, transform: `translate(0px, 60px)`}}>
              Class 9 Syllabus
            </span>
</div>
<div className="grid md:grid-cols-3 gap-6" id="cards-container">
<div className="spotlight-card group p-8 rounded-3xl cursor-default transition-all duration-500 hover:-translate-y-2" style={{'--mouse-x': `485px`, '--mouse-y': `78px`}}>
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-zinc-200 group-hover:bg-white/10 transition-colors duration-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:box" data-stroke-width="1.5" data-width="24" height="24" role="img" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg>
</div>
<h3 className="text-lg font-normal mb-3 text-white tracking-tight">
                The Tesseract
              </h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                A cube is just the shadow of a 4-dimensional hypercube.
                Understanding 3D space is the first step to visualizing higher
                dimensions.
              </p>
</div>
<div className="spotlight-card group p-8 rounded-3xl cursor-default transition-all duration-500 hover:-translate-y-2" style={{'--mouse-x': `218.34375px`, '--mouse-y': `78px`}}>
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-zinc-200 group-hover:bg-white/10 transition-colors duration-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:circle" data-stroke-width="1.5" data-width="24" height="24" role="img" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
</div>
<h3 className="text-lg font-normal mb-3 text-white tracking-tight">
                Isoperimetry
              </h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                Nature prefers the sphere because it encloses the greatest
                volume for a given surface area, minimizing energy in bubbles
                and planets.
              </p>
</div>
<div className="spotlight-card group p-8 rounded-3xl cursor-default transition-all duration-500 hover:-translate-y-2" style={{'--mouse-x': `-48.328125px`, '--mouse-y': `78px`}}>
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-zinc-200 group-hover:bg-white/10 transition-colors duration-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:triangle" data-stroke-width="1.5" data-width="24" height="24" role="img" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-normal mb-3 text-white tracking-tight">
                Conic Sections
              </h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                Slicing a cone reveals the ellipse, parabola, and
                hyperbola—fundamental curves governing everything from satellite
                orbits to flashlight beams.
              </p>
</div>
</div>
</div>
</section>
<footer className="z-10 bg-black border-white/5 border-t pt-12 pb-12 relative">
<div className="flex flex-col md:flex-row max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="text-xs font-medium text-zinc-600">© 2025</div>
<div className="flex gap-6">
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
</a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
</a>
</div>
</div>
</footer>
</main>


    </>
  );
}
