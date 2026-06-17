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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



  document.addEventListener("DOMContentLoaded", () => {
    // 1. Cybernetic Typing Effect for Hero
    const titleEl = document.getElementById("hero-title");
    const subtitleEl = document.getElementById("hero-subtitle");
    const actionsEl = document.getElementById("hero-actions");

    if (titleEl) {
      const textToType = "Autonomous Risk Intelligence";
      let charIndex = 0;

      function typeText() {
        if (charIndex < textToType.length) {
          titleEl.innerHTML =
            textToType.substring(0, charIndex + 1) +
            '<span class="animate-pulse inline-block w-3 md:w-4 h-8 md:h-12 bg-cyan-400 ml-2 align-middle border border-cyan-200 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>';
          charIndex++;
          setTimeout(typeText, 45);
        } else {
          titleEl.innerHTML =
            textToType +
            '<span class="animate-pulse inline-block w-3 md:w-4 h-8 md:h-12 bg-cyan-400/50 ml-2 align-middle border border-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.5)]"></span>';

          if (actionsEl) {
            actionsEl.classList.remove("opacity-0");
            actionsEl.style.opacity = "1";
            actionsEl.style.transform = "translateY(0)";
          }
        }
      }

      if (subtitleEl) {
        subtitleEl.style.opacity = "0";
        subtitleEl.style.transform = "translateY(10px)";
        subtitleEl.style.transition =
          "opacity 0.8s ease 0.62s, transform 0.8s ease 0.62s";

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            subtitleEl.style.opacity = "1";
            subtitleEl.style.transform = "translateY(0)";
          });
        });
      }

      setTimeout(typeText, 600);
    }

    // 2. Dynamic Data Equalizer Charts
    // Assumes chart blocks already exist in the HTML.
    const chartCols = document.querySelectorAll(".chart-col-cyan");

    chartCols.forEach((col) => {
      const blocks = Array.from(col.children);
      if (!blocks.length) return;

      const maxBlocks = blocks.length;

      setInterval(() => {
        const activeLevel =
          Math.floor(Math.random() * maxBlocks * (Math.random() * 1.5)) + 1;

        blocks.forEach((block, i) => {
          if (i < activeLevel && i < maxBlocks) {
            if (i > maxBlocks * 0.7) {
              block.className =
                "w-full bg-cyan-300 border-t border-white transition-all duration-200 shadow-[0_0_10px_rgba(34,211,238,1)]";
            } else {
              block.className =
                "w-full bg-cyan-500/60 border-t border-cyan-300 transition-all duration-200 shadow-[0_0_5px_rgba(34,211,238,0.5)]";
            }
            block.style.opacity = "1";
          } else {
            block.className =
              "w-full bg-cyan-950/30 border-t border-cyan-900/50 transition-all duration-500";
            block.style.opacity = "0.3";
          }
        });
      }, 200 + Math.random() * 400);
    });

    // 3. Radial Glow Mouse Tracking for Scanner Cards
    const cards = document.querySelectorAll(".scanner-card");

    if (cards.length) {
      document.addEventListener("mousemove", (e) => {
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        });
      });
    }
  });



  document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("webgl-container");
    if (!container || typeof THREE === "undefined") return;

    const scene = new THREE.Scene();

    const rect = container.getBoundingClientRect();
    const camera = new THREE.PerspectiveCamera(45, rect.width / rect.height, 0.1, 1000);
    camera.position.z = 35;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(rect.width, rect.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(12.7, 2);

    const material = new THREE.MeshStandardMaterial({
      color: 0x030305,
      metalness: 0.9,
      roughness: 0.2,
      flatShading: true,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1
    });

    const globe = new THREE.Mesh(geometry, material);
    globe.rotation.z = 0.2;
    globe.position.y = 0.2;
    scene.add(globe);

    const edgesGeom = new THREE.EdgesGeometry(geometry);
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });

    const edges = new THREE.LineSegments(edgesGeom, edgesMat);
    globe.add(edges);

    const ambientLight = new THREE.AmbientLight(0x005555, 0.4);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0x00ffff, 1.5);
    mainLight.position.set(15, 20, 10);
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0x0088ff, 0.5);
    fillLight.position.set(-15, -10, -10);
    scene.add(fillLight);

    const coreLight = new THREE.PointLight(0x00ffff, 2, 50);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    let targetRotationX = 0;
    let targetRotationY = 0;

    document.addEventListener("mousemove", (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRotationY = mouseX * 0.12;
      targetRotationX = mouseY * 0.08;
    });

    function animate() {
      requestAnimationFrame(animate);

      globe.rotation.y += 0.0015;
      globe.rotation.x += 0.0004;

      globe.rotation.y += (targetRotationY - globe.rotation.y * 0.15) * 0.01;
      globe.rotation.x += (targetRotationX - globe.rotation.x * 0.15) * 0.01;

      globe.position.y = 0.2 + Math.sin(Date.now() * 0.001) * 0.45;

      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener("resize", () => {
      const newRect = container.getBoundingClientRect();
      camera.aspect = newRect.width / newRect.height;
      camera.updateProjectionMatrix();
      renderer.setSize(newRect.width, newRect.height);
    });
  });



  document.addEventListener("DOMContentLoaded", () => {
    const mobileToggle = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!mobileToggle || !mobileMenu) return;

    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = !mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden");
      mobileToggle.setAttribute("aria-expanded", String(!isOpen));
    });

    document.addEventListener("click", (e) => {
      if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add("hidden");
        mobileToggle.setAttribute("aria-expanded", "false");
      }
    });
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="1bY8o6HVTI1oxJxuCJEG"></div>
</div>

<div className="fixed inset-0 z-[-1] pointer-events-none bg-[linear-gradient(to_right,#22d3ee08_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee08_1px,transparent_1px)] bg-[size:32px_32px]">
</div>
<div className="fixed inset-0 z-[-1] pointer-events-none opacity-20 mix-blend-overlay bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#020617_2px,#020617_4px)]">
</div>

<div className="fixed left-4 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] text-[0.6rem] text-cyan-500/30 tracking-[0.3em] uppercase hidden xl:block z-0" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
    AXIOM_CORE_SYS // TELEMETRY_LINK_ACTIVE // OP_MODE: ANALYTICAL
  </div>
<div className="fixed right-4 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 text-[0.6rem] text-cyan-500/30 tracking-[0.3em] uppercase hidden xl:block z-0" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
    SECURE_ENCLAVE // NODE_COUNT: 4092 // LATENCY: 8MS
  </div>

<div className="max-w-[1400px] mx-auto border-x border-cyan-500/10 min-h-screen relative flex flex-col shadow-[0_0_100px_rgba(2,6,23,0.8)] bg-slate-950/70 backdrop-blur-md">

<header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
<div className="max-w-[1460px] mx-auto">
<div className="relative flex items-center justify-between h-[72px] px-4 sm:px-5 lg:px-6 border border-cyan-500/20 bg-[#020617]/78 backdrop-blur-xl shadow-[0_10px_40px_rgba(2,6,23,0.55),inset_0_1px_0_rgba(34,211,238,0.06)]">

<div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent">
</div>

<div className="pointer-events-none absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-400/45"></div>
<div className="pointer-events-none absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-400/45"></div>
<div className="pointer-events-none absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cyan-400/45"></div>
<div className="pointer-events-none absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-400/45"></div>

<a className="flex items-center gap-3 shrink-0 relative z-20" href="#">
<div className="relative w-6 h-6 flex items-center justify-center">
<div className="absolute inset-0 border border-cyan-500/50"></div>
<div className="w-1.5 h-1.5 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
</div>
<span className="text-slate-50 tracking-tight text-xl font-light uppercase" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
          AXIOM
        </span>
</a>

<nav className="hidden md:flex items-center gap-7 lg:gap-9 absolute left-1/2 -translate-x-1/2 text-[0.72rem] text-slate-400 font-normal uppercase tracking-[0.22em]" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
<a className="hover:text-cyan-400 transition-colors whitespace-nowrap" href="#architecture">Architecture</a>
<a className="hover:text-cyan-400 transition-colors whitespace-nowrap" href="#capabilities">Capabilities</a>
<a className="hover:text-cyan-400 transition-colors whitespace-nowrap" href="#engine">Engine</a>
</nav>

<div className="hidden md:flex items-center gap-3 shrink-0 relative z-20">
<a className="inline-flex items-center justify-center gap-2 h-[46px] px-5 border border-cyan-500/30 bg-cyan-500/10 text-cyan-50 hover:bg-cyan-500/18 hover:border-cyan-400 hover:shadow-[0_0_18px_rgba(34,211,238,0.16)] transition-all duration-300 text-[0.72rem] uppercase tracking-[0.2em]" href="#contact" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              Request Access
              <iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<button aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-11 w-11 border border-cyan-500/25 bg-slate-950/70 text-cyan-100 hover:border-cyan-400 hover:bg-slate-900/90 transition-colors relative z-20" id="mobile-menu-toggle">
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7h16"></path>
<path d="M4 12h16"></path>
<path d="M4 17h16"></path>
</svg>
</button>
</div>

<div className="hidden md:hidden mt-3 border border-cyan-500/20 bg-[#020617]/92 backdrop-blur-xl shadow-[0_18px_40px_rgba(2,6,23,0.55)] p-3" id="mobile-menu">
<div className="flex flex-col gap-2">
<a className="px-4 py-3 text-[0.72rem] uppercase tracking-[0.2em] text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/5 transition-colors" href="#architecture" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              Architecture
            </a>
<a className="px-4 py-3 text-[0.72rem] uppercase tracking-[0.2em] text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/5 transition-colors" href="#capabilities" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              Capabilities
            </a>
<a className="px-4 py-3 text-[0.72rem] uppercase tracking-[0.2em] text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/5 transition-colors" href="#engine" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              Engine
            </a>
<div className="h-px bg-cyan-500/10 my-2"></div>
<a className="inline-flex items-center justify-center gap-2 h-12 px-5 border border-cyan-500/30 bg-cyan-500/10 text-cyan-50 hover:bg-cyan-500/18 hover:border-cyan-400 transition-all duration-300 text-[0.72rem] uppercase tracking-[0.2em]" href="#contact" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              Request Access
              <iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</header>

<section className="min-h-[760px] sm:min-h-[860px] lg:min-h-[780px] flex lg:items-center overflow-hidden sm:pt-32 md:pt-36 lg:pt-24 sm:pb-16 lg:pb-20 w-full border-cyan-500/10 border-b pt-28 pb-14 relative items-start justify-center">

<div className="absolute inset-x-0 top-16 bottom-16 z-0 w-full opacity-90 mix-blend-screen pointer-events-none" id="webgl-container"></div>

<div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.03)_0%,transparent_60%)] pointer-events-none">
</div>

<div className="relative z-10 text-center mx-4 max-w-5xl w-full flex flex-col items-center">

<div className="mb-8 flex items-center gap-3 px-4 py-1.5 border border-cyan-500/30 bg-slate-900/60 text-[0.65rem] text-cyan-400 tracking-[0.2em] uppercase font-light backdrop-blur-sm" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon className="text-cyan-400 text-sm drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" icon="solar:radar-linear"></iconify-icon>
          TELEMETRY_ACTIVE // LIVE_ENV
        </div>
<h1 className="text-4xl md:text-5xl lg:text-7xl text-slate-50 tracking-tighter leading-[1.05] mb-6 font-light uppercase" id="hero-title" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>A<span className="animate-pulse inline-block w-3 md:w-4 h-8 md:h-12 bg-cyan-400 ml-2 align-middle border border-cyan-200 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span></h1>
<p className="text-sm md:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 font-extralight" id="hero-subtitle" style={{transition: 'opacity 0.8s 0.62s, transform 0.8s 0.62s'}}>
          Continuously interpret market vectors, protocol instability, and systemic exposure layers.
          Detect compounding risk early, isolate vulnerable nodes, and surface live telemetry before escalation.
        </p>

<div className="w-full max-w-4xl flex flex-col items-center opacity-0" id="hero-actions" style={{transform: 'translateY(10px)', transition: 'opacity 0.8s ease 0.82s, transform 0.8s ease 0.82s'}}>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto mb-14">
<button className="w-full sm:w-auto px-8 py-3 bg-cyan-500 text-slate-950 font-normal uppercase tracking-widest text-xs hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
          Deploy Architecture
        </button>
<button className="w-full sm:w-auto px-8 py-3 border border-cyan-500/30 text-cyan-50 font-normal uppercase tracking-widest text-xs hover:bg-cyan-500/10 hover:border-cyan-400 transition-all flex items-center justify-center gap-3 backdrop-blur-sm" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
          View Live Telemetry
          <iconify-icon className="text-sm text-cyan-400" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="w-full max-w-3xl mx-auto relative">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent">
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full border-t border-cyan-500/20 pt-8 text-center">
<div className="flex flex-col items-center">
<div className="text-[0.65rem] text-slate-500 tracking-[0.2em] uppercase mb-2" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                  Global Nodes
                </div>
<div className="text-3xl text-cyan-50 font-light tracking-tighter" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
                  4,092
                  <span className="text-cyan-400 text-[0.65rem] ml-1 tracking-widest uppercase align-middle" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                live
              </span>
</div>
</div>
<div className="flex flex-col items-center">
<div className="text-[0.65rem] text-slate-500 tracking-[0.2em] uppercase mb-2" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                  Signal Latency
                </div>
<div className="text-3xl text-cyan-50 font-light tracking-tighter" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
                  8ms
                  <span className="text-cyan-400 text-[0.65rem] ml-1 tracking-widest uppercase align-middle" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                avg
              </span>
</div>
</div>
<div className="col-span-2 md:col-span-1 flex flex-col items-center">
<div className="text-[0.65rem] text-slate-500 tracking-[0.2em] uppercase mb-2" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                  Exposure Triggers
                </div>
<div className="text-3xl text-cyan-50 font-light tracking-tighter" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
                  2.4B
                  <span className="text-cyan-400 text-[0.65rem] ml-1 tracking-widest uppercase align-middle" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                / day
              </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden py-24 px-6 lg:px-12 border-b border-cyan-500/10 bg-[#06131B]">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_45%)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015),transparent_18%,transparent_82%,rgba(255,255,255,0.015))]">
</div>
<div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'linear-gradient(rgba(34,211,238,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.16) 1px, transparent 1px)', backgroundSize: '72px 72px'}}>
</div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent">
</div>
<div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent">
</div>
</div>
<div className="relative z-10 max-w-7xl mx-auto">

<div className="max-w-4xl mb-16 lg:mb-20">
<div className="inline-flex items-center gap-2 rounded-none border border-cyan-500/20 bg-cyan-500/[0.05] px-3 py-1.5 mb-5" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
<span className="text-[0.65rem] text-cyan-300 tracking-[0.22em] uppercase">
    Signal Architecture
  </span>
</div>
<h2 className="max-w-4xl text-4xl leading-[0.95] sm:text-5xl lg:text-[3.6rem] font-light text-slate-50 tracking-[-0.04em] uppercase mb-6" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
            A live map of market, protocol<br className="hidden sm:block"/>
        and systemic exposure.
          </h2>
<p className="max-w-2xl text-sm sm:text-[0.95rem] text-slate-300/80 leading-relaxed font-extralight">
            Axiom integrates natively with execution layers and broad-market indexing
            to synthesize an uncorrupted, millisecond-accurate view of operational
            environments.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="scanner-card relative overflow-hidden border border-cyan-500/15 bg-slate-900/40 backdrop-blur-xl p-8 min-h-[360px] flex flex-col group transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/45 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]" style={{'--mouse-x': '618px', '--mouse-y': '-1266.203125px'}}>
<div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 scanner-bg">
</div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-60">
</div>

<div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-500/50 opacity-60 group-hover:opacity-100 transition-opacity">
</div>
<div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-500/50 opacity-60 group-hover:opacity-100 transition-opacity">
</div>

<div className="absolute top-0 right-0 p-5 opacity-30 group-hover:opacity-100 transition-opacity z-10">
<iconify-icon className="text-[30px] text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.45)]" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="relative z-10 mb-6 border-b border-cyan-500/15 pb-5">
<div className="text-[0.65rem] text-slate-500 tracking-[0.22em] mb-6 uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                MOD_01
              </div>
<h3 className="text-[1.35rem] lg:text-[1.45rem] font-light text-slate-50 mb-3 tracking-[-0.02em] uppercase" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
                Market Signals
              </h3>
<p className="text-[0.8rem] text-slate-300 leading-relaxed font-extralight max-w-none pr-2">
                Ingestion of high-frequency liquidity states, bid-ask density, and
                volume anomalies across tier-1 venues.
              </p>
</div>
<div className="mt-auto pt-5 flex items-end gap-[3px] h-28 opacity-65 group-hover:opacity-100 transition-opacity duration-700 w-full justify-between relative z-10">
<div className="chart-col-cyan flex flex-col-reverse gap-[3px] w-full" data-max="8"><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div></div>
<div className="chart-col-cyan flex flex-col-reverse gap-[3px] w-full" data-max="8"><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div></div>
<div className="chart-col-cyan flex flex-col-reverse gap-[3px] w-full" data-max="8"><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div></div>
<div className="chart-col-cyan flex flex-col-reverse gap-[3px] w-full" data-max="8"><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div></div>
<div className="chart-col-cyan flex flex-col-reverse gap-[3px] w-full" data-max="8"><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div></div>
<div className="chart-col-cyan flex flex-col-reverse gap-[3px] w-full" data-max="8"><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div></div>
<div className="chart-col-cyan flex flex-col-reverse gap-[3px] w-full" data-max="8"><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div></div>
</div>
</div>

<div className="scanner-card relative overflow-hidden border border-cyan-400/35 bg-[linear-gradient(180deg,rgba(8,24,33,0.92),rgba(6,18,26,0.82))] backdrop-blur-xl p-8 min-h-[360px] flex flex-col group transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/80 hover:shadow-[0_0_40px_rgba(34,211,238,0.22)] shadow-[0_0_24px_rgba(34,211,238,0.10)]" style={{'--mouse-x': '183.3359375px', '--mouse-y': '-1266.203125px'}}>
<div className="absolute inset-0 z-0 pointer-events-none opacity-100 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_55%)]">
</div>
<div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 scanner-bg">
</div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent">
</div>

<div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-400"></div>
<div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-400"></div>

<div className="absolute top-0 right-0 p-5 opacity-60 group-hover:opacity-100 transition-opacity z-10">
<iconify-icon className="text-[30px] text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.85)]" icon="solar:global-linear"></iconify-icon>
</div>
<div className="relative z-10 mb-6 border-b border-cyan-400/20 pb-5">
<div className="text-[0.65rem] text-cyan-300/80 tracking-[0.22em] mb-6 uppercase drop-shadow-[0_0_3px_rgba(34,211,238,0.4)]" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                MOD_02 // ACTIVE
              </div>
<h3 className="text-[1.4rem] lg:text-[1.5rem] font-light text-cyan-50 mb-3 tracking-[-0.02em] uppercase drop-shadow-[0_0_6px_rgba(255,255,255,0.18)]" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
                Exposure Mapping
              </h3>
<p className="text-[0.8rem] text-slate-300 leading-relaxed font-extralight max-w-none pr-2">
                Topology tracing of counterparty risk, systemic leverage concentration,
                and cascaded liquidation thresholds.
              </p>
</div>
<div className="mt-auto pt-5 flex items-end gap-[3px] h-28 opacity-90 group-hover:opacity-100 transition-opacity duration-700 w-full justify-between relative z-10">
<div className="chart-col-cyan flex flex-col-reverse gap-[3px] w-full" data-max="8"><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div></div>
<div className="chart-col-cyan flex flex-col-reverse gap-[3px] w-full" data-max="8"><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div></div>
<div className="chart-col-cyan flex flex-col-reverse gap-[3px] w-full" data-max="8"><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div></div>
<div className="chart-col-cyan flex flex-col-reverse gap-[3px] w-full" data-max="8"><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div></div>
<div className="chart-col-cyan flex flex-col-reverse gap-[3px] w-full" data-max="8"><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div></div>
<div className="chart-col-cyan flex flex-col-reverse gap-[3px] w-full" data-max="8"><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div></div>
<div className="chart-col-cyan flex flex-col-reverse gap-[3px] w-full" data-max="8"><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div></div>
</div>
</div>

<div className="scanner-card relative overflow-hidden border border-cyan-500/15 bg-slate-900/40 backdrop-blur-xl p-8 min-h-[360px] flex flex-col group transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/45 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]" style={{'--mouse-x': '-251.328125px', '--mouse-y': '-1266.203125px'}}>
<div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 scanner-bg">
</div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-60">
</div>

<div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-500/50 opacity-60 group-hover:opacity-100 transition-opacity">
</div>
<div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-500/50 opacity-60 group-hover:opacity-100 transition-opacity">
</div>

<div className="absolute top-0 right-0 p-5 opacity-30 group-hover:opacity-100 transition-opacity z-10">
<iconify-icon className="text-[30px] text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.45)]" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div className="relative z-10 mb-6 border-b border-cyan-500/15 pb-5">
<div className="text-[0.65rem] text-slate-500 tracking-[0.22em] mb-6 uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                MOD_03
              </div>
<h3 className="text-[1.35rem] lg:text-[1.45rem] font-light text-slate-50 mb-3 tracking-[-0.02em] uppercase" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
                Protocol Intelligence
              </h3>
<p className="text-[0.8rem] text-slate-300 leading-relaxed font-extralight max-w-none pr-2">
                Static and dynamic analysis of smart contract state changes, oracle
                deviations, and execution vulnerabilities.
              </p>
</div>
<div className="mt-auto pt-5 flex items-end gap-[3px] h-28 opacity-65 group-hover:opacity-100 transition-opacity duration-700 w-full justify-between relative z-10">
<div className="chart-col-cyan flex flex-col-reverse gap-[3px] w-full" data-max="8"><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div></div>
<div className="chart-col-cyan flex flex-col-reverse gap-[3px] w-full" data-max="8"><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div></div>
<div className="chart-col-cyan flex flex-col-reverse gap-[3px] w-full" data-max="8"><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div></div>
<div className="chart-col-cyan flex flex-col-reverse gap-[3px] w-full" data-max="8"><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div></div>
<div className="chart-col-cyan flex flex-col-reverse gap-[3px] w-full" data-max="8"><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div></div>
<div className="chart-col-cyan flex flex-col-reverse gap-[3px] w-full" data-max="8"><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div></div>
<div className="chart-col-cyan flex flex-col-reverse gap-[3px] w-full" data-max="8"><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div><div className="w-full bg-cyan-950/30 border-t border-cyan-900 transition-all duration-200" style={{height: '12.5%'}}></div></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden py-24 px-6 lg:px-12 border-b border-cyan-500/10 bg-[#020817]">
<div className="relative z-10 max-w-7xl mx-auto">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 rounded-none border border-cyan-500/20 bg-cyan-500/[0.05] px-3 py-1.5 mb-5" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
<span className="text-[0.65rem] text-cyan-300 tracking-[0.22em] uppercase">
        Capabilities
      </span>
</div>
<h2 className="max-w-4xl text-4xl leading-[0.95] sm:text-5xl lg:text-[3.6rem] font-light text-slate-50 tracking-[-0.04em] uppercase" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              Full visibility across every<br className="hidden xl:block"/>
      operational vector.
            </h2>
</div>
<div className="md:w-[34%] lg:w-[32%]">
<p className="max-w-[28rem] lg:max-w-[30rem] text-sm sm:text-[0.95rem] text-slate-300/80 leading-relaxed font-extralight md:pb-1">
              Observe systemic triggers, infrastructure signals, and automated response
              workflows from a unified operational command layer.
            </p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 z-10 mb-8 relative">

<div className="bg-slate-900/50 border border-cyan-500/20 p-6 lg:p-8 flex flex-col gap-6 relative overflow-hidden group hover:border-cyan-400/50 transition-all shadow-[inset_0_0_30px_rgba(2,6,23,0.8)]">
<div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none">
</div>
<div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500/50"></div>
<div className="relative z-10">
<h3 className="text-[1.35rem] lg:text-[1.5rem] font-light text-slate-50 tracking-[-0.02em] uppercase" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
                Active Topologies
              </h3>
<p className="text-[0.82rem] text-slate-400 mt-2 max-w-md font-extralight leading-relaxed">
                Monitor live exposure relationships, venue interdependencies, and
                counterparty pathways across active network conditions.
              </p>
</div>

<div className="flex-1 bg-[#020617] border border-cyan-500/20 flex flex-col md:flex-row relative mt-2 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">

<div className="w-full md:w-[45%] border-b md:border-b-0 md:border-r border-cyan-500/20 flex flex-col">
<div className="p-4 border-b border-cyan-500/20 flex justify-between items-center bg-cyan-950/10">
<span className="text-[0.6rem] text-slate-500 tracking-[0.2em] uppercase font-light" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                Active Nodes
              </span>
<span className="text-[0.6rem] bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-1.5 py-0.5 tracking-widest font-mono">
                142
              </span>
</div>
<div className="flex-1 p-3 flex flex-col gap-2">
<div className="p-2 border border-cyan-500/30 bg-cyan-900/20 flex items-center justify-between group/item">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
<div className="flex flex-col gap-0.5">
<span className="text-xs text-slate-200 font-normal uppercase" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
                      Node-Alpha-1
                    </span>
<span className="text-[0.6rem] text-cyan-400/60 uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                      us-east
                    </span>
</div>
</div>
</div>
<div className="p-2 border border-transparent hover:border-cyan-500/20 hover:bg-slate-800/50 flex items-center justify-between group/item transition-colors">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-slate-600 group-hover/item:bg-cyan-500"></div>
<div className="flex flex-col gap-0.5">
<span className="text-xs text-slate-400 font-normal uppercase group-hover/item:text-slate-200" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
                      Node-Beta-2
                    </span>
<span className="text-[0.6rem] text-slate-600 uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                      eu-west
                    </span>
</div>
</div>
</div>
<div className="p-2 border border-transparent hover:border-cyan-500/20 hover:bg-slate-800/50 flex items-center justify-between group/item transition-colors">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-slate-600 group-hover/item:bg-cyan-500"></div>
<div className="flex flex-col gap-0.5">
<span className="text-xs text-slate-500 font-normal uppercase group-hover/item:text-slate-200" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
                      Node-Delta-4
                    </span>
<span className="text-[0.6rem] text-slate-600 uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                      ap-south
                    </span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full md:w-[55%] flex flex-col relative z-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_0%,transparent_100%)]">
<div className="flex p-4 border-b border-cyan-500/20 gap-4 bg-cyan-950/10">
<div className="flex-1 flex flex-col gap-1.5">
<span className="text-[0.6rem] text-slate-500 tracking-[0.2em] uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                  Signal Latency
                </span>
<div className="flex items-end gap-1.5">
<span className="text-3xl text-cyan-50 font-light leading-none" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
                    8.4
                  </span>
<span className="text-[0.65rem] text-cyan-400 font-mono mb-1 uppercase tracking-widest">
                    ms
                  </span>
</div>
</div>
</div>
<div className="p-4 flex-1 flex flex-col justify-end min-h-[140px] relative">
<div className="absolute inset-x-0 bottom-4 top-4 flex flex-col justify-between opacity-20">
<div className="border-b border-dashed border-cyan-500/50"></div>
<div className="border-b border-dashed border-cyan-500/50"></div>
<div className="border-b border-dashed border-cyan-500/50"></div>
</div>
<svg className="w-full h-full absolute inset-0 top-6 bottom-4 px-4 overflow-visible" preserveaspectratio="none" viewbox="0 0 200 60">
<path d="M0,50 C20,40 40,55 60,30 C80,10 100,45 120,20 C140,5 160,35 180,25 C190,20 195,15 200,10" fill="none" stroke="#22d3ee" strokeLinecap="square" strokeWidth="1.5"></path>
<rect className="shadow-[0_0_10px_rgba(34,211,238,1)]" fill="#22d3ee" height="3" width="3" x="118.5" y="18.5"></rect>
</svg>
</div>
</div>
</div>
</div>

<div className="bg-slate-900/50 border border-cyan-500/20 p-6 lg:p-8 flex flex-col gap-6 relative overflow-hidden group hover:border-cyan-400/50 transition-all shadow-[inset_0_0_30px_rgba(2,6,23,0.8)]">
<div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none">
</div>
<div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-500/50"></div>
<div className="relative z-10">
<h3 className="text-[1.35rem] lg:text-[1.5rem] font-light text-slate-50 tracking-[-0.02em] uppercase" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
                Anomaly Console
              </h3>
<p className="text-[0.82rem] text-slate-400 mt-2 max-w-md font-extralight leading-relaxed">
                Surface structural deviations, cascading threat patterns, and escalation
                thresholds as they emerge in real time.
              </p>
</div>
<div className="flex-1 bg-[#020617] border border-cyan-500/20 flex flex-col md:flex-row relative mt-2 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">

<div className="w-full md:w-[45%] border-b md:border-b-0 md:border-r border-cyan-500/20 flex items-center justify-center relative p-8 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_0%,transparent_100%)]">
<span className="absolute top-4 left-4 text-[0.55rem] text-cyan-500/70 tracking-[0.2em] border border-cyan-500/20 bg-cyan-950/20 px-1.5 py-0.5" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
              NET_SCAN::ACTIVE
            </span>
<div className="relative w-36 h-36">
<div className="absolute inset-0 border border-cyan-500/20 rounded-none"></div>
<div className="absolute inset-[18%] border border-cyan-500/20 rounded-none"></div>
<div className="absolute inset-[36%] border border-cyan-500/30 rounded-none"></div>
<div className="absolute inset-[54%] border border-cyan-500/40 rounded-none bg-cyan-500/5"></div>
<div className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 border border-cyan-400/50 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,1)]"></div>
</div>
<div className="absolute inset-0 border-r border-cyan-400/50 animate-[spin_3s_linear_infinite]" style={{background: 'conic-gradient(from 0deg, transparent 60%, rgba(34,211,238,0.2) 100%)', mixBlendMode: 'screen'}}>
</div>
</div>
</div>

<div className="w-full md:w-[55%] flex flex-col bg-cyan-950/5">
<div className="p-4 border-b border-cyan-500/20 flex justify-between items-center">
<span className="text-[0.6rem] text-slate-500 tracking-[0.2em] uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                Event Log
              </span>
<span className="text-[0.6rem] text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-1.5 py-0.5 tracking-widest uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                2 ALERTS
              </span>
</div>
<div className="flex-1 overflow-hidden p-3 flex flex-col gap-2">
<div className="p-3 bg-cyan-950/30 border border-cyan-500/40 flex flex-col gap-1.5 shadow-[inset_0_0_10px_rgba(34,211,238,0.1)]">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
<span className="text-[0.68rem] uppercase tracking-widest text-cyan-400 font-normal" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
                      Liquidation Cascade
                    </span>
</div>
<span className="text-[0.55rem] text-slate-500 tracking-widest uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                    1m ago
                  </span>
</div>
<span className="text-[0.6rem] text-slate-400 truncate uppercase tracking-widest font-mono">
                  Threshold breach &gt; 85%
                </span>
<div className="flex justify-end mt-1">
<button className="text-[0.55rem] text-cyan-50 bg-cyan-500/20 border border-cyan-500/50 px-3 py-1 uppercase tracking-[0.2em] hover:bg-cyan-500/40 transition-colors hover:shadow-[0_0_10px_rgba(34,211,238,0.3)]" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                    ISOLATE
                  </button>
</div>
</div>
<div className="p-3 bg-slate-900/40 border border-slate-700/50 flex flex-col gap-1.5">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-slate-500"></div>
<span className="text-[0.68rem] uppercase tracking-widest text-slate-400 font-normal" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
                      Variance Warning
                    </span>
</div>
<span className="text-[0.55rem] text-slate-600 tracking-widest uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                    4m ago
                  </span>
</div>
<span className="text-[0.6rem] text-slate-500 truncate uppercase tracking-widest font-mono">
                  Volume anomaly detected.
                </span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

<div className="bg-slate-900/40 border border-cyan-500/20 p-6 group hover:border-cyan-400/50 transition-colors shadow-[inset_0_0_20px_rgba(2,6,23,0.5)]">
<div className="flex items-center justify-between mb-6 border-b border-cyan-500/20 pb-3">
<span className="text-[0.6rem] text-slate-500 tracking-[0.2em] uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
            Autonomous Rules
          </span>
<iconify-icon className="text-cyan-500/50" icon="solar:settings-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-6">
<div className="flex justify-between items-center">
<span className="text-[0.7rem] text-slate-300 uppercase tracking-widest font-mono">Circuit Breaker</span>
<input checked="" className="cyber-toggle" type="checkbox"/>
</div>
<div className="flex items-start gap-3 pt-4 border-t border-cyan-500/10">
<input checked="" className="cyber-checkbox mt-0.5" type="checkbox"/>
<span className="text-[0.62rem] text-cyan-400/80 uppercase tracking-widest font-mono leading-relaxed">
              Automated response policy active.<br/>24 incidents contained.
            </span>
</div>
</div>
</div>

<div className="bg-slate-900/40 border border-cyan-500/20 p-6 group hover:border-cyan-400/50 transition-colors shadow-[inset_0_0_20px_rgba(2,6,23,0.5)]">
<div className="flex items-center justify-between mb-6 border-b border-cyan-500/20 pb-3">
<span className="text-[0.6rem] text-slate-500 tracking-[0.2em] uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
            System Log
          </span>
<iconify-icon className="text-cyan-500/50" icon="solar:history-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-4 relative pl-4 border-l border-cyan-500/20 ml-2">
<div className="relative">
<div className="absolute -left-[21px] top-1 w-2 h-2 bg-cyan-400 border border-cyan-200 shadow-[0_0_8px_rgba(34,211,238,0.8)]">
</div>
<span className="text-[0.68rem] uppercase tracking-widest text-slate-200 block font-mono">
              Matrix model synchronized
            </span>
<span className="text-[0.55rem] text-cyan-500/60 block mt-1 tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
              10:42 AM
            </span>
</div>
<div className="relative opacity-50">
<div className="absolute -left-[21px] top-1 w-2 h-2 bg-slate-600 border border-slate-400"></div>
<span className="text-[0.68rem] uppercase tracking-widest text-slate-400 block font-mono">
              Exposure topology mapped
            </span>
<span className="text-[0.55rem] text-slate-600 block mt-1 tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
              09:15 AM
            </span>
</div>
</div>
</div>

<div className="bg-slate-900/40 border border-cyan-500/20 p-6 group hover:border-cyan-400/50 transition-colors shadow-[inset_0_0_20px_rgba(2,6,23,0.5)]">
<div className="flex items-center justify-between mb-6 border-b border-cyan-500/20 pb-3">
<span className="text-[0.6rem] text-slate-500 tracking-[0.2em] uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
            Capacity
          </span>
<iconify-icon className="text-cyan-500/50" icon="solar:server-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-6">
<div>
<div className="flex justify-between text-[0.6rem] text-slate-400 mb-3 uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span>Compute Limit</span>
<span className="text-cyan-400">Stable</span>
</div>
<input className="cyber-slider" max="100" min="1" type="range" value="40"/>
</div>
<div>
<div className="flex justify-between text-[0.6rem] text-slate-400 mb-3 uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span>Memory Index</span>
<span className="text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">Elevated</span>
</div>
<input className="cyber-slider" max="100" min="1" type="range" value="82"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden py-24 px-6 lg:px-12 border-b border-cyan-500/10 bg-[#06131B]">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_45%)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015),transparent_18%,transparent_82%,rgba(255,255,255,0.015))]">
</div>
<div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'linear-gradient(rgba(34,211,238,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.16) 1px, transparent 1px)', backgroundSize: '72px 72px'}}>
</div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent">
</div>
<div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent">
</div>
</div>
<div className="mb-16 lg:mb-20 text-center max-w-4xl mx-auto relative z-10">
<div className="inline-flex items-center gap-2 rounded-none border border-cyan-500/20 bg-cyan-500/[0.05] px-3 py-1.5 mb-5" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
<span className="text-[0.65rem] text-cyan-300 tracking-[0.22em] uppercase">
        Engine State Processing
      </span>
</div>
<h2 className="text-4xl leading-[0.95] sm:text-5xl lg:text-[3.6rem] font-light text-slate-50 tracking-[-0.04em] mb-5 uppercase" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
          Engine state processing across<br className="hidden lg:block"/>
      live execution layers.
        </h2>
<p className="text-sm sm:text-[0.95rem] text-slate-300/80 max-w-[42rem] mx-auto leading-relaxed font-extralight">
          Detect signal emergence, interpret systemic conditions, and trigger
          autonomous response flows through a unified decision pipeline.
        </p>
</div>

<div className="relative max-w-5xl mx-auto mb-16 lg:mb-20">
<div className="grid grid-cols-1 md:grid-cols-[260px_auto_260px_auto_260px] xl:grid-cols-[360px_auto_360px_auto_360px] gap-8 md:gap-4 xl:gap-6 items-stretch justify-center relative z-10">

<div className="bg-slate-900/60 border border-cyan-500/20 p-8 text-center relative hover:border-cyan-400/50 transition-colors group shadow-[inset_0_0_20px_rgba(2,6,23,0.8)] backdrop-blur-sm">
<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500/50 opacity-50 group-hover:opacity-100 transition-opacity">
</div>
<div className="w-16 h-16 mx-auto bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:bg-cyan-900/40 transition-colors relative">
<span className="text-3xl font-light text-cyan-400/80 tracking-tighter" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
            01
          </span>
<div className="absolute -bottom-1 -right-1 w-2 h-2 bg-cyan-500/50"></div>
</div>
<div className="inline-flex items-center justify-center rounded-none border border-cyan-500/20 bg-cyan-500/[0.04] px-3 py-1.5 mb-5" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span className="text-[0.62rem] text-cyan-300 tracking-[0.22em] uppercase">Detect</span>
</div>
<h3 className="text-[1.35rem] lg:text-[1.5rem] font-light text-slate-50 mb-3 tracking-[-0.02em] uppercase" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              Signal Detection
            </h3>
<p className="text-[0.82rem] text-slate-400 leading-relaxed font-extralight max-w-[27ch] mx-auto">
              Ingest normalized telemetry from execution nodes, filter noise, and
              surface material state changes in real time.
            </p>
</div>

<div className="hidden md:flex items-center justify-center px-1">
<div className="flex items-center w-8 lg:w-16">
<div className="flex-1 border-t border-dashed border-cyan-400/35"></div>
</div>
</div>

<div className="bg-slate-900/80 border border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.15)] p-8 text-center relative backdrop-blur-md">
<div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
<div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></div>
<div className="w-16 h-16 mx-auto bg-cyan-500/10 border border-cyan-400 flex items-center justify-center mb-6 scale-105 shadow-[0_0_15px_rgba(34,211,238,0.3)inset] relative">
<span className="text-4xl font-light text-cyan-300 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] tracking-tighter" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
    02
  </span>
<div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-cyan-400"></div>
</div>
<div className="inline-flex items-center justify-center rounded-none border border-cyan-400/25 bg-cyan-500/[0.05] px-3 py-1.5 mb-5" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span className="text-[0.62rem] text-cyan-300 tracking-[0.22em] uppercase">Interpret</span>
</div>
<h3 className="text-[1.35rem] lg:text-[1.5rem] font-light text-cyan-50 mb-3 tracking-[-0.02em] uppercase drop-shadow-[0_0_2px_rgba(255,255,255,0.3)]" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              State Interpretation
            </h3>
<p className="text-[0.82rem] text-slate-300 leading-relaxed font-extralight max-w-[28ch] mx-auto">
              Cross-reference live conditions against historical models, dependency
              graphs, and defined risk thresholds.
            </p>
</div>

<div className="hidden md:flex items-center justify-center px-1">
<div className="flex items-center w-8 lg:w-16">
<div className="flex-1 border-t border-dashed border-cyan-400/35"></div>
</div>
</div>

<div className="bg-slate-900/60 border border-cyan-500/20 p-8 text-center relative hover:border-cyan-400/50 transition-colors group shadow-[inset_0_0_20px_rgba(2,6,23,0.8)] backdrop-blur-sm">
<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500/50 opacity-50 group-hover:opacity-100 transition-opacity">
</div>
<div className="w-16 h-16 mx-auto bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:bg-cyan-900/40 transition-colors relative">
<span className="text-3xl font-light text-cyan-400/80 tracking-tighter" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
            03
          </span>
<div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-500/50"></div>
</div>
<div className="inline-flex items-center justify-center rounded-none border border-cyan-500/20 bg-cyan-500/[0.04] px-3 py-1.5 mb-5" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span className="text-[0.62rem] text-cyan-300 tracking-[0.22em] uppercase">Act</span>
</div>
<h3 className="text-[1.35rem] lg:text-[1.5rem] font-light text-slate-50 mb-3 tracking-[-0.02em] uppercase" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              Autonomous Response
            </h3>
<p className="text-[0.82rem] text-slate-400 leading-relaxed font-extralight max-w-[28ch] mx-auto">
              Execute containment logic, reroute defensive flows, and broadcast
              severity alerts before instability expands.
            </p>
</div>
</div>
</div>

<div className="w-full max-w-3xl mx-auto relative z-10">
<div className="overflow-hidden bg-[#020617] border border-cyan-500/30 shadow-[0_10px_50px_rgba(2,6,23,0.8)] relative">

<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400 z-20"></div>
<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400 z-20"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400 z-20"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400 z-20"></div>
<div className="bg-slate-900/80 border-b border-cyan-500/30 flex p-3 items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-[0.55rem] text-cyan-500 tracking-widest border border-cyan-500/50 px-1 font-mono uppercase bg-cyan-950/50">SYS_READY</span>
</div>
<span className="text-[0.6rem] text-slate-400 uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
          bash — axiom proc
        </span>
<div className="w-16"></div>
</div>
<div className="p-6 text-xs overflow-x-auto tracking-widest leading-relaxed bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(34,211,238,0.02)_2px,rgba(34,211,238,0.02)_4px)]" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<div className="flex items-center gap-2 mb-4 whitespace-nowrap">
<span className="text-cyan-400 font-normal">sys@axiom</span>
<span className="text-slate-500">:</span>
<span className="text-slate-300">~/core</span>
<span className="text-slate-500">$</span>
<span className="text-cyan-50">axiom start --env prod</span>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3">
<span className="text-slate-500 mt-0.5">&gt;</span>
<div>
<div className="text-slate-400">Initializing baseline metrics...</div>
<div className="text-slate-600 text-[0.6rem] mt-1">Ingesting 2.4M ops/sec</div>
</div>
</div>
<div className="flex items-start gap-3">
<span className="text-cyan-400 mt-0.5">&gt;</span>
<div>
<div className="text-slate-400">
                    Continuous evaluation
                    <span className="text-cyan-400 bg-cyan-950/50 px-1 border border-cyan-500/30">active</span>
</div>
<div className="text-slate-600 text-[0.6rem] mt-1">Variance nominal.</div>
</div>
</div>
<div className="flex items-start gap-3">
<span className="text-cyan-500 mt-0.5">&gt;</span>
<div>
<div className="text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">
                    Standard deviation breach detected!
                  </div>
<div className="text-slate-500 text-[0.6rem] mt-1">
                    Executing circuit breaker payload...
                  </div>
</div>
</div>
<div className="flex items-start gap-3">
<span className="text-cyan-400 mt-0.5 animate-pulse">&gt;</span>
<div>
<div className="text-white font-normal bg-cyan-900/30 inline-block px-1 border-l-2 border-cyan-400">
                    Exposure isolated. Systems secure.
                  </div>
<div className="text-slate-600 text-[0.6rem] mt-1">Latency: 8ms</div>
</div>
</div>
</div>
<div className="flex items-center gap-2 mt-6 whitespace-nowrap">
<span className="text-cyan-400 font-normal">sys@axiom</span>
<span className="text-slate-500">:</span>
<span className="text-slate-300">~/core</span>
<span className="text-slate-500">$</span>
<span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)] ml-1"></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 border-b border-cyan-500/10 bg-[#020817] relative overflow-hidden">
<div className="relative z-30 max-w-7xl mx-auto space-y-24">

<div className="text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 rounded-none border border-cyan-500/20 bg-cyan-500/[0.05] px-3 py-1.5 mb-5" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
<span className="text-[0.65rem] text-cyan-300 tracking-[0.22em] uppercase">
          Deployment Architecture
        </span>
</div>
<h2 className="text-4xl leading-[0.95] sm:text-5xl lg:text-[3.6rem] font-light text-slate-50 tracking-[-0.04em] uppercase" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
        Controlled deployment across<br className="hidden lg:block"/>
<span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.28)]">secure execution layers.</span>
</h2>
<p className="mt-6 max-w-[34rem] mx-auto text-sm sm:text-[0.95rem] text-slate-300/80 leading-relaxed font-extralight">
        Deploy within governed infrastructure, enforce execution boundaries,
        and maintain audit-ready visibility across every operational environment.
      </p>
</div>

<div aria-labelledby="feature-1-heading" className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12" role="region">

<div className="lg:col-span-7">
<div className="relative overflow-hidden border border-cyan-500/30 bg-slate-900/60 backdrop-blur-md shadow-[0_0_40px_rgba(34,211,238,0.1)] group">
<div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(34,211,238,0.1)_2px,rgba(34,211,238,0.1)_4px)]"></div>

<div className="absolute inset-x-0 top-0 h-8 bg-slate-950/80 border-b border-cyan-500/30 flex items-center px-4 z-20">
<div className="flex items-center gap-2">
<span className="text-[0.55rem] text-cyan-500 border border-cyan-500/50 bg-cyan-950/50 px-1 font-mono tracking-widest uppercase">REC</span>
</div>
<div className="flex-1 text-center">
<span className="text-[0.6rem] text-slate-400 font-mono tracking-widest uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                axiom-deploy.local
              </span>
</div>
</div>

<div className="relative aspect-[16/10] sm:aspect-[16/9] w-full h-full pt-8">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/02265b95-7302-4fb0-bcef-44fde128e554/0.mp4"></video>
<svg aria-hidden="true" className="absolute inset-0 w-full h-full z-10" strokeWidth="1.5" viewbox="0 0 1200 700">
<line stroke="rgba(34,211,238,0.3)" stroke-dasharray="4 8" strokeWidth="1.5" x1="600" x2="600" y1="70" y2="630"></line>
<g transform="translate(320,330)">
<g filter="url(#soft-glow)">
<rect fill="rgba(2,6,23,0.5)" height="240" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5" width="240" x="-160" y="-140"></rect>
<rect fill="rgba(34,211,238,0.05)" height="200" stroke="rgba(34,211,238,0.8)" strokeWidth="1.5" width="200" x="-140" y="-120"></rect>
</g>
<g>
<rect fill="rgba(34,211,238,0.1)" height="120" stroke="rgba(34,211,238,0.5)" width="80" x="-40" y="-50"></rect>
<line stroke="rgba(34,211,238,0.5)" x1="-40" x2="40" y1="10" y2="10"></line>
<line stroke="rgba(34,211,238,0.5)" x1="-40" x2="40" y1="-20" y2="-20"></line>
</g>
<g opacity="0.8">
<rect fill="rgba(34,211,238,0.5)" height="2" width="160" x="-110" y="90"></rect>
<rect fill="rgba(34,211,238,0.3)" height="2" width="120" x="-110" y="110"></rect>
<rect fill="rgba(34,211,238,0.2)" height="2" width="90" x="-110" y="130"></rect>
</g>
<text fill="rgba(34,211,238,0.9)" fontFamily="'JetBrains Mono', monospace" fontSize="14" letter-spacing="0.2em" text-anchor="middle" x="-40" y="180">
                  PRIVATE_ENCLAVE
                </text>
</g>
<g transform="translate(880,340)">
<rect fill="rgba(34,211,238,0.05)" height="100" stroke="rgba(34,211,238,0.4)" width="160" x="-80" y="-50"></rect>
<rect fill="rgba(34,211,238,0.8)" height="10" width="10" x="-40" y="-20"></rect>
<rect fill="rgba(34,211,238,0.8)" height="10" width="10" x="20" y="-10"></rect>
<rect fill="rgba(34,211,238,0.8)" height="10" width="10" x="-5" y="20"></rect>
<line stroke="rgba(34,211,238,0.5)" x1="-35" x2="25" y1="-15" y2="-5"></line>
<line stroke="rgba(34,211,238,0.5)" x1="-35" x2="0" y1="-15" y2="25"></line>
<text fill="rgba(34,211,238,0.9)" fontFamily="'JetBrains Mono', monospace" fontSize="14" letter-spacing="0.2em" text-anchor="middle" x="0" y="90">
                  AXIOM_CLOUD
                </text>
</g>
<g fill="none" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5">
<line stroke-dasharray="4 4" x1="480" x2="720" y1="330" y2="330"></line>
<line stroke-dasharray="4 4" x1="480" x2="720" y1="360" y2="360"></line>
</g>
<g transform="translate(600,200)">
<text fill="rgba(34,211,238,0.8)" fontFamily="'JetBrains Mono', monospace" fontSize="12" letter-spacing="0.2em" text-anchor="middle" x="0" y="-10">
                  TOPOLOGY_ROUTING
                </text>
<path d="M-30 20 L30 20 M25 15 L30 20 L25 25" fill="none" stroke="rgba(34,211,238,0.8)" strokeWidth="1.5"></path>
</g>
</svg>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="inline-flex items-center border border-cyan-500/30 bg-cyan-950/30 px-2 py-1 text-[0.6rem] font-light text-cyan-400 uppercase tracking-[0.2em] mb-4" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon className="mr-2 text-sm drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" icon="solar:shield-check-linear"></iconify-icon>
          Isolation Modes
        </div>
<h3 className="text-3xl sm:text-4xl font-light tracking-tighter text-slate-50 leading-tight uppercase" id="feature-1-heading" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
          You define the execution boundary.
        </h3>
<p className="mt-5 text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl font-extralight">
          Run Axiom inside private infrastructure for maximum control, or extend
          across managed environments without compromising policy enforcement,
          telemetry integrity, or operational isolation.
        </p>
<ul className="mt-8 space-y-4" role="list">
<li className="flex items-start gap-3">
<span aria-hidden="true" className="mt-0.5 inline-flex h-4 w-4 items-center justify-center border border-cyan-500/50 bg-cyan-950/30">
<iconify-icon className="text-cyan-400 text-xs" icon="solar:check-read-linear"></iconify-icon>
</span>
<span className="text-xs text-slate-300 font-extralight uppercase tracking-widest" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              Docker-ready instances deploy in &lt; 2 mins
            </span>
</li>
<li className="flex items-start gap-3">
<span aria-hidden="true" className="mt-0.5 inline-flex h-4 w-4 items-center justify-center border border-cyan-500/50 bg-cyan-950/30">
<iconify-icon className="text-cyan-400 text-xs" icon="solar:check-read-linear"></iconify-icon>
</span>
<span className="text-xs text-slate-300 font-extralight uppercase tracking-widest" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              End-to-end encrypted telemetry streams
            </span>
</li>
<li className="flex items-start gap-3">
<span aria-hidden="true" className="mt-0.5 inline-flex h-4 w-4 items-center justify-center border border-cyan-500/50 bg-cyan-950/30">
<iconify-icon className="text-cyan-400 text-xs" icon="solar:check-read-linear"></iconify-icon>
</span>
<span className="text-xs text-slate-300 font-extralight uppercase tracking-widest" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              Governed model updates via secure CLI
            </span>
</li>
</ul>

<div className="mt-8 flex items-center gap-6 text-[0.6rem] uppercase tracking-[0.2em] font-light text-slate-500" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse"></span>
<span className="text-cyan-400/80">99.99% Uptime</span>
</div>
<div className="flex items-center gap-2 border-l border-cyan-500/30 pl-6">
<span className="h-1.5 w-1.5 bg-slate-500"></span>
<span>&lt; 8ms Sync</span>
</div>
</div>
</div>
</div>

<div aria-labelledby="feature-2-heading" className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12" role="region">

<div className="lg:col-span-5 order-2 lg:order-1">
<div className="inline-flex items-center border border-cyan-500/30 bg-cyan-950/30 px-2 py-1 text-[0.6rem] font-light text-cyan-400 uppercase tracking-[0.2em] mb-4" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon className="mr-2 text-sm drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" icon="solar:command-linear"></iconify-icon>
          Headless Operator
        </div>
<h3 className="text-3xl sm:text-4xl font-light tracking-tighter text-slate-50 leading-tight uppercase" id="feature-2-heading" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
          Built for governed operator control.
        </h3>
<p className="mt-5 text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl font-extralight">
          Interact with Axiom through terminal workflows, deterministic scripts,
          or API surfaces designed for repeatable control, auditability, and
          high-confidence operational automation.
        </p>
<ul className="mt-8 space-y-4" role="list">
<li className="flex items-start gap-3">
<span aria-hidden="true" className="mt-0.5 inline-flex h-4 w-4 items-center justify-center border border-cyan-500/50 bg-cyan-950/30">
<iconify-icon className="text-cyan-400 text-xs" icon="solar:check-read-linear"></iconify-icon>
</span>
<span className="text-xs text-slate-300 font-extralight uppercase tracking-widest" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              Comprehensive local CLI environment
            </span>
</li>
<li className="flex items-start gap-3">
<span aria-hidden="true" className="mt-0.5 inline-flex h-4 w-4 items-center justify-center border border-cyan-500/50 bg-cyan-950/30">
<iconify-icon className="text-cyan-400 text-xs" icon="solar:check-read-linear"></iconify-icon>
</span>
<span className="text-xs text-slate-300 font-extralight uppercase tracking-widest" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              Inject dynamic parameters into live models
            </span>
</li>
<li className="flex items-start gap-3">
<span aria-hidden="true" className="mt-0.5 inline-flex h-4 w-4 items-center justify-center border border-cyan-500/50 bg-cyan-950/30">
<iconify-icon className="text-cyan-400 text-xs" icon="solar:check-read-linear"></iconify-icon>
</span>
<span className="text-xs text-slate-300 font-extralight uppercase tracking-widest" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              High-throughput WebSocket SDKs
            </span>
</li>
</ul>

<div className="text-[0.65rem] font-mono bg-[#020617] border-cyan-500/30 border shadow-[inset_0_0_20px_rgba(2,6,23,0.8)] mt-8 p-4 relative overflow-hidden h-[120px] uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400 z-10"></div>
<div style={{animation: 'scrollText 8s linear infinite', position: 'absolute', whiteSpace: 'nowrap'}}>
<div className="flex gap-2 mb-3 items-center">
<span className="h-1.5 w-1.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
<span className="text-cyan-500/70 text-[0.55rem] uppercase tracking-[0.2em]">
                Axiom Terminal
              </span>
</div>
<div className="text-cyan-50 mb-1.5">
<span className="text-slate-600">$</span>
              axiom stream init --venue binance
            </div>
<div className="text-slate-500 mb-2">
              [OK] Websocket hooked. Latency: 4ms
            </div>
<div className="text-cyan-50 mb-1.5">
<span className="text-slate-600">$</span>
              axiom model apply variance_alpha --active
            </div>
<div className="text-slate-500 mb-2">
              [OK] Model enforcing live thresholds
            </div>
<div className="text-cyan-50 mb-1.5">
<span className="text-slate-600">$</span>
              axiom status
            </div>
<div className="text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] mb-2">
              System nominal. 1.2M events analyzed.
            </div>
</div>
<style>
            @keyframes scrollText {
              0% { transform: translateY(0); }
              100% { transform: translateY(-120px); }
            }
          </style>
</div>
</div>

<div className="lg:col-span-7 order-1 lg:order-2">
<div className="relative overflow-hidden border border-cyan-500/30 bg-slate-900/60 backdrop-blur-md shadow-[0_0_40px_rgba(34,211,238,0.1)] group">
<div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(34,211,238,0.1)_2px,rgba(34,211,238,0.1)_4px)]"></div>
<div className="absolute inset-x-0 top-0 h-8 bg-slate-950/80 border-b border-cyan-500/30 flex items-center px-4 z-20">
<div className="flex items-center gap-2">
<span className="text-[0.55rem] text-cyan-500 border border-cyan-500/50 bg-cyan-950/50 px-1 font-mono tracking-widest uppercase">TRM</span>
</div>
<div className="flex-1 text-center">
<span className="text-[0.6rem] text-slate-400 font-mono tracking-widest uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                terminal — bash — 120x40
              </span>
</div>
</div>
<div className="relative aspect-[16/10] sm:aspect-[16/9] pt-8">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/b684a978-25aa-4f71-9a00-4b906ffa9e86/0.mp4"></video>
<svg aria-hidden="true" className="absolute inset-0 w-full h-full z-10" strokeWidth="1.5" viewbox="0 0 1200 700">
<g transform="translate(250,220)">
<rect fill="rgba(2,6,23,0.6)" height="180" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5" width="420" x="-120" y="-60"></rect>
<text fill="rgba(34,211,238,0.9)" fontFamily="'JetBrains Mono', monospace" fontSize="28" letter-spacing="0.1em" x="-90" y="-10">
                  &gt; AXIOM_SYNC
                </text>
<text fill="rgba(34,211,238,0.6)" fontFamily="'JetBrains Mono', monospace" fontSize="16" letter-spacing="0.1em" x="-90" y="40">
                  ALIGNING_MODELS...
                </text>
<text fill="rgba(34,211,238,0.8)" fontFamily="'JetBrains Mono', monospace" fontSize="14" letter-spacing="0.1em" x="-90" y="80">
                  [OK] SECURE_CHANNEL_ESTABLISHED
                </text>
</g>
<g transform="translate(640,360)">
<rect fill="rgba(34,211,238,0.1)" height="68" stroke="rgba(34,211,238,0.8)" strokeWidth="1.5" width="68" x="-34" y="-34"></rect>
<text fill="rgba(34,211,238,0.9)" fontFamily="'JetBrains Mono', monospace" fontSize="14" letter-spacing="0.1em" text-anchor="middle" x="0" y="5">
                  CORE
                </text>
</g>
<g stroke="rgba(34,211,238,0.4)" strokeWidth="1.5">
<line x1="640" x2="900" y1="360" y2="260"></line>
<line x1="640" x2="940" y1="360" y2="380"></line>
<line x1="640" x2="880" y1="360" y2="510"></line>
</g>
<g fill="rgba(34,211,238,0.8)" fontFamily="'JetBrains Mono', monospace" fontSize="12" letter-spacing="0.1em">
<g transform="translate(940,250)">
<rect fill="rgba(2,6,23,0.8)" height="40" stroke="rgba(34,211,238,0.5)" width="120" x="-60" y="-20"></rect>
<text text-anchor="middle" x="0" y="4">SCRIPTS</text>
</g>
<g transform="translate(1000,380)">
<rect fill="rgba(2,6,23,0.8)" height="40" stroke="rgba(34,211,238,0.5)" width="120" x="-60" y="-20"></rect>
<text text-anchor="middle" x="0" y="4">WEBHOOKS</text>
</g>
<g transform="translate(940,520)">
<rect fill="rgba(2,6,23,0.8)" height="40" stroke="rgba(34,211,238,0.5)" width="120" x="-60" y="-20"></rect>
<text text-anchor="middle" x="0" y="4">CI/CD</text>
</g>
</g>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-24 px-6 lg:px-12 flex flex-col items-center text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.05),transparent_50%)] pointer-events-none"></div>
<div className="w-full max-w-6xl mx-auto flex flex-col items-center relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center w-full">

<div className="text-left">
<div className="inline-flex items-center gap-2 rounded-none border border-cyan-500/20 bg-cyan-500/[0.05] px-3 py-1.5 mb-5" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
<span className="text-[0.65rem] text-cyan-300 tracking-[0.22em] uppercase">
            Deployment Request
          </span>
</div>
<h2 className="text-4xl leading-[0.95] sm:text-5xl lg:text-[3.6rem] font-light text-slate-50 tracking-[-0.04em] mb-6 uppercase" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
          Request a private<br className="hidden lg:block" />
<span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.28)]">system briefing.</span>
</br></h2>
<p className="text-sm sm:text-[0.95rem] text-slate-300/80 mb-8 leading-relaxed max-w-[31rem] font-extralight">
          Axiom is onboarding select operators who require controlled deployment,
          governed execution logic, and real-time oversight across high-exposure environments.
        </p>
<ul className="mb-10 space-y-4">
<li className="flex items-start gap-3 border border-cyan-500/10 p-3 bg-slate-900/30">
<iconify-icon className="text-cyan-400 text-xl drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" icon="solar:check-circle-linear"></iconify-icon>
<div>
<p className="text-xs font-normal text-slate-100 uppercase tracking-widest" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
                Private Enclave Setup
              </p>
<p className="text-[0.65rem] text-slate-500 mt-1 font-mono tracking-wider uppercase">
                Dedicated node architecture with isolated execution paths.
              </p>
</div>
</li>
<li className="flex items-start gap-3 border border-cyan-500/10 p-3 bg-slate-900/30">
<iconify-icon className="text-cyan-400 text-xl drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" icon="solar:check-circle-linear"></iconify-icon>
<div>
<p className="text-xs font-normal text-slate-100 uppercase tracking-widest" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
                Custom Response Logic
              </p>
<p className="text-[0.65rem] text-slate-500 mt-1 font-mono tracking-wider uppercase">
                Deterministic trigger modules aligned to your risk model.
              </p>
</div>
</li>
</ul>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="px-8 py-3 bg-cyan-500 text-slate-950 font-normal uppercase tracking-widest text-xs hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
            Initialize Request
          </button>
<button className="px-8 py-3 bg-cyan-950/20 border border-cyan-500/30 text-cyan-50 font-normal uppercase tracking-widest text-xs hover:bg-cyan-500/20 hover:border-cyan-400 transition-all backdrop-blur-sm" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
            Review Technical Docs
          </button>
</div>
</div>

<div className="relative w-full max-w-md mx-auto">
<div className="bg-[#020617] border border-cyan-500/30 relative overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.1)]">

<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400"></div>
<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400"></div>
<div className="absolute -bottom-12 -right-12 h-48 w-48 bg-cyan-500/10 blur-3xl"></div>
<div className="p-6 lg:p-8 relative z-10">
<div className="flex mb-6 items-center justify-between border-b border-cyan-500/20 pb-4">
<span className="inline-flex items-center gap-2 text-[0.6rem] font-light text-cyan-50 uppercase tracking-[0.2em] bg-cyan-950/40 border border-cyan-500/30 px-2 py-1" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<div className="h-1.5 w-1.5 animate-pulse bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                Deployment Init
              </span>
<span className="text-[0.6rem] text-slate-500 tracking-[0.2em] uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                sys_req_89
              </span>
</div>
<h3 className="text-xl font-light text-white mb-2 tracking-tight uppercase" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              Infrastructure Setup
            </h3>
<p className="text-xs text-slate-400 mb-6 font-extralight leading-relaxed">
              Provisioning execution layers, response modules, and secure telemetry
              pathways for a controlled deployment environment.
            </p>
<div className="bg-slate-900/60 border border-cyan-500/20 p-4 mb-6 shadow-[inset_0_0_15px_rgba(2,6,23,0.5)]">
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-3 h-3 border border-cyan-400 bg-cyan-500/20 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-cyan-400"></div>
</div>
<div className="flex-1 flex justify-between items-center">
<span className="text-xs text-slate-200 uppercase tracking-widest font-normal" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
                      Enclave provisioned
                    </span>
<span className="text-[0.6rem] text-slate-500 tracking-widest uppercase font-mono">Done</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-3 h-3 border border-cyan-400 border-t-transparent animate-spin"></div>
<div className="flex-1 flex justify-between items-center">
<span className="text-xs text-white uppercase tracking-widest font-normal drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
                      Syncing state
                    </span>
<span className="text-[0.6rem] text-cyan-400 tracking-widest uppercase font-mono animate-pulse">Active</span>
</div>
</div>
<div className="flex items-center gap-3 opacity-50">
<div className="w-3 h-3 border border-slate-500"></div>
<div className="flex-1 flex justify-between items-center">
<span className="text-xs text-slate-400 uppercase tracking-widest font-normal" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
                      Live telemetry
                    </span>
<span className="text-[0.6rem] text-slate-600 tracking-widest uppercase font-mono">Pending</span>
</div>
</div>
</div>
</div>

<div className="flex gap-1 w-full h-1">
<div className="h-full bg-cyan-400 w-1/4 shadow-[0_0_5px_rgba(34,211,238,0.8)]"></div>
<div className="h-full bg-cyan-400 w-1/4 shadow-[0_0_5px_rgba(34,211,238,0.8)]"></div>
<div className="h-full bg-cyan-400/30 w-1/4"></div>
<div className="h-full bg-cyan-950 w-1/4"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="w-full pt-20 pb-12 border-t border-cyan-500/20 bg-slate-950/90 backdrop-blur-md relative z-10">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">

<div className="lg:col-span-2 relative">
<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500/50"></div>
<div className="pt-4 pl-4">
<h3 className="text-xl font-light tracking-tight text-slate-50 mb-4 flex items-center gap-3 uppercase" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
<iconify-icon className="text-cyan-400 text-xl drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" icon="solar:radar-linear"></iconify-icon>
            System Comm Link
          </h3>
<p className="text-xs text-slate-400 mb-6 max-w-sm leading-relaxed font-extralight">
            Secure channel for field reports, prototype access, deployment updates,
            and ongoing system communication.
          </p>
<form className="flex max-w-md" onsubmit="event.preventDefault();">
<input className="w-full bg-[#020617] border border-cyan-500/30 px-4 py-3 text-[0.65rem] text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors uppercase tracking-[0.2em] shadow-[inset_0_0_10px_rgba(2,6,23,0.8)]" placeholder="ENTER_ADDRESS..." style={{fontFamily: '\'JetBrains Mono\', monospace'}} type="email" />
<button className="bg-cyan-950/50 border border-l-0 border-cyan-500/30 text-cyan-50 px-6 py-3 text-[0.65rem] font-light uppercase tracking-[0.2em] hover:bg-cyan-500/20 hover:border-cyan-400 transition-colors shrink-0" style={{fontFamily: '\'JetBrains Mono\', monospace'}} type="submit">
              Transmit
            </button>
</input></form>
</div>
</div>

<div>
<h4 className="text-[0.6rem] font-light uppercase tracking-[0.2em] text-slate-500 mb-6" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
          Architecture
        </h4>
<ul className="space-y-4 font-extralight">
<li>
<a className="text-xs text-slate-400 hover:text-cyan-400 hover:tracking-widest transition-all uppercase" href="#" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              Nodes
            </a>
</li>
<li>
<a className="text-xs text-slate-400 hover:text-cyan-400 hover:tracking-widest transition-all uppercase" href="#" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              Telemetry
            </a>
</li>
<li>
<a className="text-xs text-slate-400 hover:text-cyan-400 hover:tracking-widest transition-all uppercase" href="#" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              Enclaves
            </a>
</li>
</ul>
</div>
<div>
<h4 className="text-[0.6rem] font-light uppercase tracking-[0.2em] text-slate-500 mb-6" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
          Capabilities
        </h4>
<ul className="space-y-4 font-extralight">
<li>
<a className="text-xs text-slate-400 hover:text-cyan-400 hover:tracking-widest transition-all uppercase" href="#" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              Exposure Mapping
            </a>
</li>
<li>
<a className="text-xs text-slate-400 hover:text-cyan-400 hover:tracking-widest transition-all uppercase" href="#" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              Risk Isolation
            </a>
</li>
<li>
<a className="text-xs text-slate-400 hover:text-cyan-400 hover:tracking-widest transition-all uppercase" href="#" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              Alert Logic
            </a>
</li>
</ul>
</div>
<div>
<h4 className="text-[0.6rem] font-light uppercase tracking-[0.2em] text-slate-500 mb-6" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
          Organization
        </h4>
<ul className="space-y-4 font-extralight">
<li>
<a className="text-xs text-slate-400 hover:text-cyan-400 hover:tracking-widest transition-all uppercase" href="#" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              About
            </a>
</li>
<li>
<a className="text-xs text-slate-400 hover:text-cyan-400 hover:tracking-widest transition-all uppercase" href="#" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              Careers
            </a>
</li>
<li>
<a className="text-xs text-slate-400 hover:text-cyan-400 hover:tracking-widest transition-all uppercase" href="#" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
              Security
            </a>
</li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="relative w-4 h-4 flex items-center justify-center">
<div className="absolute inset-0 border border-cyan-500/50"></div>
<div className="w-1 h-1 bg-cyan-400"></div>
</div>
<span className="text-slate-50 tracking-tighter text-lg font-light uppercase" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
          AXIOM
        </span>
</div>
<div className="text-[0.55rem] text-slate-500 tracking-[0.2em] uppercase text-center" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
        © 2024 Axiom Analytics. All systems nominal.
      </div>
<div className="flex items-center gap-4">
<a className="text-slate-500 hover:text-cyan-400 transition-colors" href="#">
<iconify-icon className="text-sm" icon="ri:twitter-x-line"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-cyan-400 transition-colors" href="#">
<iconify-icon className="text-sm" icon="ri:github-line"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-cyan-400 transition-colors" href="#">
<iconify-icon className="text-sm" icon="ri:discord-line"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>
</div> 





    </>
  );
}
