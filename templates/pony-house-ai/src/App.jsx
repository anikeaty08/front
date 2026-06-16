import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ["Inter", "sans-serif"] },
colors: {
bg: "#0B0C0E",
surface: "#15171B",
surfaceHighlight: "#1E2127",
border: "rgba(255, 255, 255, 0.08)",
accent: "#3B82F6",
accentGlow: "#2563EB",
text: "#EAEAEA",
textDim: "#888888",
warmLight: "#FFD580",
},
},
},
};



          !(function () {
            if (!window.UnicornStudio) {
              window.UnicornStudio = { isInitialized: !1 };
              var i = document.createElement("script");
              i.src =
                "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
              i.onload = function () {
                window.UnicornStudio.isInitialized ||
                  (UnicornStudio.init(), (window.UnicornStudio.isInitialized = !0));
              };
              (document.head || document.body).appendChild(i);
            }
          })();
        


      // 1. Loading Simulation
      const loaderScreen = document.getElementById("loading-screen");
      const loaderFill = document.getElementById("loader-fill");
      const loaderText = document.getElementById("loader-text");
      const canvasContainer = document.getElementById("canvas-container");

      let progress = 0;
      const loadInterval = setInterval(() => {
        progress += Math.random() * 8;
        if (progress >= 100) {
          progress = 100;
          clearInterval(loadInterval);

          gsap.to(loaderScreen, {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => (loaderScreen.style.display = "none"),
          });

          canvasContainer.style.opacity = "1";
          init3D();
        }
        loaderFill.style.width = `${progress}%`;
        loaderText.innerText = `${Math.floor(progress)}%`;
      }, 50);

      // 2. Three.js Scene
      function init3D() {
        const container = document.getElementById("canvas-container");
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#0B0C0E");
        scene.fog = new THREE.FogExp2(0x0b0c0e, 0.025);

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 5, 25);
        camera.lookAt(0, 2, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        container.appendChild(renderer.domElement);

        const mGround = new THREE.MeshStandardMaterial({ color: 0x1a2618, flatShading: true, roughness: 1 });
        const mDirt = new THREE.MeshStandardMaterial({ color: 0x2b2118, flatShading: true });
        const mModernWall = new THREE.MeshStandardMaterial({ color: 0x111111, flatShading: true, roughness: 0.5 });
        const mAccents = new THREE.MeshStandardMaterial({ color: 0x2c2c2c, flatShading: true });
        const mWood = new THREE.MeshStandardMaterial({ color: 0x3e2723, flatShading: true });
        const mGlass = new THREE.MeshStandardMaterial({
          color: 0x88ccff,
          transparent: true,
          opacity: 0.4,
          roughness: 0,
          metalness: 0.9,
        });

        const islandGroup = new THREE.Group();
        scene.add(islandGroup);

        const islandGeo = new THREE.CylinderGeometry(6, 1, 5, 7);
        const islandMesh = new THREE.Mesh(islandGeo, mDirt);
        islandMesh.position.y = -2.5;
        islandMesh.receiveShadow = true;
        islandGroup.add(islandMesh);

        const grassGeo = new THREE.CylinderGeometry(6.2, 6, 0.8, 7);
        const grassMesh = new THREE.Mesh(grassGeo, mGround);
        grassMesh.position.y = 0.2;
        grassMesh.receiveShadow = true;
        grassMesh.castShadow = true;
        islandGroup.add(grassMesh);

        const houseGroup = new THREE.Group();

        const mainGeo = new THREE.BoxGeometry(2.5, 2.5, 2.5);
        const mainBox = new THREE.Mesh(mainGeo, mModernWall);
        mainBox.position.y = 1.25;
        mainBox.castShadow = true;
        mainBox.receiveShadow = true;
        houseGroup.add(mainBox);

        const accentGeo = new THREE.BoxGeometry(1.5, 2.6, 2.6);
        const accentBox = new THREE.Mesh(accentGeo, mWood);
        accentBox.position.set(0.6, 1.3, 0);
        accentBox.castShadow = true;
        houseGroup.add(accentBox);

        const windowGeo = new THREE.PlaneGeometry(1.2, 2.0);
        const windowMesh = new THREE.Mesh(windowGeo, mGlass);
        windowMesh.position.set(0.6, 1.3, 1.31);

        const winLight = new THREE.PointLight(0xffd580, 0.8, 4);
        winLight.position.set(0.6, 1.5, 1.0);
        houseGroup.add(winLight);
        houseGroup.add(windowMesh);

        const roofGeo = new THREE.BoxGeometry(3.5, 0.1, 3.5);
        const roof = new THREE.Mesh(roofGeo, mAccents);
        roof.position.y = 2.6;
        roof.castShadow = true;
        houseGroup.add(roof);

        islandGroup.add(houseGroup);

        function addTree(x, z, scale = 1) {
          const grp = new THREE.Group();
          const trnk = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.1, 1.5, 5), mWood);
          trnk.position.y = 0.75;
          trnk.castShadow = true;
          grp.add(trnk);

          const fol = new THREE.Mesh(new THREE.DodecahedronGeometry(0.8), mGround);
          fol.position.y = 1.8;
          fol.castShadow = true;
          grp.add(fol);

          grp.position.set(x, 0.5, z);
          grp.scale.set(scale, scale, scale);
          islandGroup.add(grp);
        }

        function addRock(x, z, s) {
          const geo = new THREE.DodecahedronGeometry(s, 0);
          const mesh = new THREE.Mesh(
            geo,
            new THREE.MeshStandardMaterial({ color: 0x444444, flatShading: true })
          );
          mesh.position.set(x, 0.6, z);
          mesh.castShadow = true;
          islandGroup.add(mesh);
        }

        addTree(-3, -1, 1.2);
        addTree(3.5, 1, 0.9);
        addTree(2, -2.5, 0.7);
        addRock(-2, 2, 0.4);
        addRock(2.5, 2, 0.3);

        const ambi = new THREE.AmbientLight(0x404060, 0.5);
        scene.add(ambi);

        const moon = new THREE.DirectionalLight(0xaaccff, 0.8);
        moon.position.set(-10, 20, -10);
        moon.castShadow = true;
        scene.add(moon);

        const warmLight = new THREE.PointLight(0xffaa00, 0.5, 8);
        warmLight.position.set(0, 1.5, 2.5);
        islandGroup.add(warmLight);

        const starGeo = new THREE.BufferGeometry();
        const starCount = 3000;
        const starPos = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount * 3; i++) starPos[i] = (Math.random() - 0.5) * 150;
        starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
        const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.15, transparent: true, opacity: 0.6 });
        const stars = new THREE.Points(starGeo, starMat);
        scene.add(stars);

        const clock = new THREE.Clock();
        function animate() {
          requestAnimationFrame(animate);
          const t = clock.getElapsedTime();
          islandGroup.position.y = Math.sin(t * 0.5) * 0.3;
          islandGroup.rotation.y += 0.001;
          renderer.render(scene, camera);
        }
        animate();

        window.addEventListener("resize", () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        });

        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#scroll-spacer",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
          },
        });

        tl.to("#hero-content", { opacity: 0, y: -50, duration: 2 }, 0);
        tl.to(camera.position, { x: 0, y: 3, z: 12, duration: 4 }, 0);
        tl.to(islandGroup.rotation, { x: 0.1, y: 0.5, duration: 4 }, 0);

        tl.to("#modal-1", { opacity: 1, scale: 1, duration: 1 }, 2);
        tl.to(islandGroup.scale, { x: 1.1, y: 1.1, z: 1.1, duration: 2 }, 2);

        tl.to("#modal-1", { opacity: 0, scale: 0.9, duration: 1 }, 4);

        tl.to(islandGroup.rotation, { y: -0.8, duration: 3 }, 4);
        tl.to("#modal-2", { opacity: 1, scale: 1, duration: 1 }, 5);

        tl.to("#modal-2", { opacity: 0, scale: 0.9, duration: 1 }, 7);

        tl.to(camera.position, { y: 20, z: 40, duration: 3 }, 8);
        tl.to("#canvas-container", { opacity: 0.1, duration: 2 }, 9);

        // --- CTA Interaction ---
        const tlCTA = gsap.timeline({
          scrollTrigger: {
             trigger: "#cta",
             start: "top bottom",
             end: "center center",
             scrub: 1.5
          },
          onUpdate: () => {
             camera.lookAt(0, 1.5, 0);
          }
        });

        tlCTA.to("#canvas-container", { opacity: 1, duration: 1 }, 0);
        tlCTA.to(camera.position, { x: -8, y: 8, z: 10, duration: 3 }, 0);
        tlCTA.to(islandGroup.rotation, { y: Math.PI * 0.25, duration: 3 }, 0);
        tlCTA.to(islandGroup.scale, { x: 1.25, y: 1.25, z: 1.25, duration: 3 }, 0);
      }

      // Reveal on Scroll
      const revealElements = document.querySelectorAll(".reveal");
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("active");
          });
        },
        { threshold: 0.1 }
      );
      revealElements.forEach((el) => revealObserver.observe(el));

      // Karaoke Text
      const karaokeText = document.getElementById("karaoke-text");
      const words = karaokeText.innerText.split(" ");
      karaokeText.innerHTML = words.map((word) => `<span class="karaoke-word">${word}</span> `).join("");
      const spans = karaokeText.querySelectorAll("span");

      const karaokeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) document.addEventListener("scroll", handleKaraokeScroll);
          else document.removeEventListener("scroll", handleKaraokeScroll);
        });
      });
      karaokeObserver.observe(karaokeText);

      function handleKaraokeScroll() {
        const rect = karaokeText.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const start = viewportHeight * 0.8;
        const end = viewportHeight * 0.2;
        let progress = (start - rect.top) / (start - end);
        progress = Math.max(0, Math.min(1, progress));
        const activeIndex = Math.floor(progress * spans.length);
        spans.forEach((span, index) => {
          if (index <= activeIndex) span.classList.add("active");
          else span.classList.remove("active");
        });
      }

      // Stacked Cards
      const stackContainer = document.getElementById("stack-container");
      const cards = document.querySelectorAll(".stack-card");

      const stackObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) document.addEventListener("scroll", handleStackScroll);
        else document.removeEventListener("scroll", handleStackScroll);
      });
      stackObserver.observe(stackContainer);

      function handleStackScroll() {
        const containerRect = stackContainer.getBoundingClientRect();
        const containerTop = containerRect.top;
        const containerHeight = containerRect.height;
        const windowHeight = window.innerHeight;
        const scrollDistance = -containerTop;
        const totalScrollable = containerHeight - windowHeight;
        let progress = scrollDistance / totalScrollable;
        progress = Math.max(0, Math.min(1, progress));

        if (progress < 0.3) setCardState(0);
        else if (progress < 0.7) setCardState(1);
        else setCardState(2);
      }

      function setCardState(activeIndex) {
        cards.forEach((card, index) => {
          if (index === activeIndex) {
            card.style.transform = "translateY(0) scale(1)";
            card.style.opacity = "1";
            card.style.zIndex = "10";
            card.style.filter = "brightness(1)";
          } else if (index < activeIndex) {
            card.style.transform = "translateY(-20px) scale(0.95)";
            card.style.opacity = "0.5";
            card.style.zIndex = "5";
          } else {
            card.style.transform = `translateY(${20 + index * 10}px) scale(0.9)`;
            card.style.opacity = "0";
            card.style.zIndex = "1";
          }
        });
      }
    


      setTimeout(() => {
        const newReveals = document.querySelectorAll("#testimonials .reveal");
        const newObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if(entry.isIntersecting) entry.target.classList.add("active");
          });
        }, { threshold: 0.1 });
        newReveals.forEach(el => newObserver.observe(el));

        if(typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
          gsap.to("#testimonial-stack", {
            y: 80,
            ease: "none",
            scrollTrigger: {
              trigger: "#testimonials",
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5
            }
          });
        }
      }, 100);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 hue-rotate-90" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ZHhDKfVqqu8PKOSMwfuA"></div>

</div>
</div>

<div id="loading-screen">
<div className="text-xs font-medium tracking-widest uppercase text-textDim mb-2">
        Building Environment
      </div>
<div className="loader-bar-bg">
<div className="loader-bar-fill" id="loader-fill"></div>
</div>
<div className="mt-4 text-[10px] text-textDim font-mono" id="loader-text">
        0%
      </div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0B0C0E]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-white rounded-full"></div>
</div>
<span className="font-semibold tracking-tight">Lumora</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-textDim font-medium">
<a className="hover:text-white transition-colors" href="#features">
            Features
          </a>
<a className="hover:text-white transition-colors" href="#method">
            Method
          </a>
<a className="hover:text-white transition-colors" href="#pricing">
            Pricing
          </a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-textDim hover:text-white transition-colors" href="#">
            Log in
          </a>
<button className="px-4 py-2 text-sm font-medium bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors border border-white/5">
            Get Started
          </button>
</div>
</div>
</nav>

<div id="canvas-container"></div>

<div id="hero-content">
<div className="max-w-4xl mx-auto text-center px-6 relative top-[-5vh]">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 interactive-element hover:bg-white/10 transition-colors cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
<span className="text-xs font-medium text-textDim uppercase tracking-wider">
            v2.0 Now Available
          </span>
</div>
<h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-[1.1] drop-shadow-2xl">
          Automate your
          <br/>
<span className="text-gradient-blue">digital chaos.</span>
</h1>
<p className="text-lg md:text-xl text-textDim max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
          Orchestrate your entire tech stack with autonomous AI agents.
          <br className="hidden md:block"/>
          Build complex workflows in seconds.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 interactive-element">
<button className="h-12 px-8 bg-accent hover:bg-accentGlow text-white text-sm font-medium rounded-full transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2">
            Start Building
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="h-12 px-8 bg-[#1A1D24] border border-white/10 hover:bg-[#252830] text-white text-sm font-medium rounded-full transition-all flex items-center justify-center shadow-lg">
            View Documentation
          </button>
</div>
<div className="absolute -bottom-32 left-1/2 -translate-x-1/2 animate-bounce text-textDim/30">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<div className="project-modal" id="modal-1">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-lg font-bold text-white">Smart Home Node</h3>
</div>
<p className="text-sm text-textDim leading-relaxed">
        The house represents your local environment. Loopra agents monitor
        internal states and trigger automation sequences securely.
      </p>
<div className="mt-4 h-1 w-full bg-white/10 rounded overflow-hidden">
<div className="h-full bg-green-500 w-[80%]"></div>
</div>
<div className="flex justify-between mt-1 text-[10px] text-textDim">
<span>Status</span>
<span className="text-green-400">Online</span>
</div>
</div>
<div className="project-modal" id="modal-2">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-lg font-bold text-white">Cloud Synthesis</h3>
</div>
<p className="text-sm text-textDim leading-relaxed">
        Seamlessly connect local events to cloud infrastructure. 99.9% uptime
        guarantee with automated failover.
      </p>
<div className="mt-4 flex gap-2">
<span className="text-[10px] bg-white/5 border border-white/5 px-2 py-1 rounded text-textDim">
          AWS
        </span>
<span className="text-[10px] bg-white/5 border border-white/5 px-2 py-1 rounded text-textDim">
          GCP
        </span>
<span className="text-[10px] bg-white/5 border border-white/5 px-2 py-1 rounded text-textDim">
          Azure
        </span>
</div>
</div>

<div id="scroll-spacer"></div>

<div className="main-content">

<section className="py-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-semibold leading-tight text-left" id="karaoke-text">
            Stop manually connecting APIs. Lumora’s intelligent engine
            understands your intent, parses your data, and executes complex
            sequences across thousands of integrations without writing a single
            line of glue code.
          </h2>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="features">
<div className="mb-16 text-center reveal">
<h2 className="text-3xl font-bold mb-4">Unified Infrastructure</h2>
<p className="text-textDim">Connect trigger to action instantly.</p>
</div>
<div className="relative glass rounded-3xl p-12 border border-white/5 h-[500px] overflow-hidden reveal">

<div className="h-full grid grid-cols-[260px_1fr_260px] items-center gap-0">

<div className="relative z-10">
<div className="w-full bg-surface border border-border p-6 rounded-xl shadow-2xl">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded bg-green-500/20 text-green-500 flex items-center justify-center">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="font-medium text-sm">New Lead</span>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-white/10 rounded"></div>
<div className="h-2 w-3/4 bg-white/10 rounded"></div>
</div>
</div>
</div>

<div className="relative h-full w-full flex items-center justify-center">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 1000 500">

<path className="noodle-path" d="M0,250 C260,250 320,150 1000,150"></path>
<path className="noodle-path" d="M0,250 C260,250 320,350 1000,350"></path>

<path className="noodle-beam" d="M0,250 C260,250 320,150 1000,150"></path>
<path className="noodle-beam" d="M0,250 C260,250 320,350 1000,350" style={{animationDelay: '1.2s'}}></path>
</svg>
</div>

<div className="relative z-10 flex flex-col justify-center gap-12">
<div className="w-full bg-surface border border-border p-6 rounded-xl shadow-2xl">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded bg-blue-500/20 text-blue-500 flex items-center justify-center">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="font-medium text-sm">Send Email</span>
</div>
<div className="h-2 w-1/2 bg-white/10 rounded"></div>
</div>
<div className="w-full bg-surface border border-border p-6 rounded-xl shadow-2xl">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded bg-purple-500/20 text-purple-500 flex items-center justify-center">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="font-medium text-sm">Update CRM</span>
</div>
<div className="h-2 w-1/2 bg-white/10 rounded"></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative pt-32 pb-64 px-6 bg-[#0B0C0E]" id="method">
<div className="text-center mb-32 reveal">
<h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight text-white">
            The Lumora Method
          </h2>
<p className="text-textDim text-lg font-light tracking-wide">
            Infrastructure as Code. Visualized.
          </p>
</div>
<div className="h-[250vh]" id="stack-container">
<div className="sticky top-32 max-w-5xl mx-auto h-[450px] relative perspective-1000">

<div className="stack-card absolute inset-0 bg-[#0E0F12] border border-white/10 rounded-3xl p-0 shadow-2xl overflow-hidden flex flex-col md:flex-row origin-top transition-all duration-500 ease-out">
<div className="md:w-1/2 p-10 flex flex-col justify-center border-r border-white/5 relative z-10">
<span className="text-xs font-mono text-textDim mb-4 tracking-widest uppercase">
                  01 // Ingestion
                </span>
<h3 className="text-3xl font-medium text-white mb-4 tracking-tight">
                  Unified Nexus
                </h3>
<p className="text-textDim leading-relaxed font-light">
                  Bind disparate data sources into a single event stream. Lumora
                  abstracts authentication and rate-limits, treating the entire
                  web as your local environment.
                </p>
<div className="mt-8 flex flex-wrap gap-2">
<span className="px-3 py-1 text-[10px] border border-white/10 rounded-full text-textDim uppercase tracking-wider">
                    REST
                  </span>
<span className="px-3 py-1 text-[10px] border border-white/10 rounded-full text-textDim uppercase tracking-wider">
                    GraphQL
                  </span>
<span className="px-3 py-1 text-[10px] border border-white/10 rounded-full text-textDim uppercase tracking-wider">
                    Webhooks
                  </span>
</div>
</div>
<div className="md:w-1/2 bg-[#050505] relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative w-64 h-64 flex items-center justify-center">
<div className="absolute inset-0 border border-white/5 rounded-full anim-spin-slow"></div>
<div className="absolute inset-4 border border-white/5 rounded-full anim-spin-slow" style={{animationDirection: 'reverse', animationDuration: '15s'}}></div>
<div className="w-20 h-20 bg-white/5 rounded-full backdrop-blur-md flex items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1a1a1a] border border-white/20 rounded-full"></div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1a1a1a] border border-white/20 rounded-full"></div>
<div className="absolute left-10 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#1a1a1a] border border-white/20 rounded-full"></div>
<div className="absolute right-10 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#1a1a1a] border border-white/20 rounded-full"></div>
</div>
</div>
</div>

<div className="stack-card absolute inset-0 bg-[#0E0F12] border border-white/10 rounded-3xl p-0 shadow-2xl overflow-hidden flex flex-col md:flex-row origin-top transition-all duration-500 ease-out opacity-0 translate-y-4 scale-95">
<div className="md:w-1/2 p-10 flex flex-col justify-center border-r border-white/5 relative z-10">
<span className="text-xs font-mono text-textDim mb-4 tracking-widest uppercase">
                  02 // Orchestration
                </span>
<h3 className="text-3xl font-medium text-white mb-4 tracking-tight">
                  Logic Graph
                </h3>
<p className="text-textDim leading-relaxed font-light">
                  Design adaptive workflows with a visual node engine. Define
                  branching paths, loops, and conditional logic without writing
                  fragile glue code.
                </p>
<div className="mt-8 flex flex-wrap gap-2">
<span className="px-3 py-1 text-[10px] border border-white/10 rounded-full text-textDim uppercase tracking-wider">
                    Visual Editor
                  </span>
<span className="px-3 py-1 text-[10px] border border-white/10 rounded-full text-textDim uppercase tracking-wider">
                    TypeScript
                  </span>
</div>
</div>
<div className="md:w-1/2 bg-[#050505] relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative w-full max-w-xs h-40 flex justify-between items-center px-6">
<div className="w-10 h-10 border border-white/20 rounded bg-[#111] flex items-center justify-center anim-pulse-seq">
<div className="w-3 h-3 border border-white/40 rounded-full"></div>
</div>
<div className="flex-1 h-px bg-white/10 mx-2 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full -translate-x-full anim-scan-x"></div>
</div>
<div className="w-10 h-10 border border-white/20 rounded bg-[#111] flex items-center justify-center anim-pulse-seq" style={{animationDelay: '0.5s'}}>
<div className="w-3 h-3 border border-white/40 rotate-45"></div>
</div>
<div className="flex-1 h-px bg-white/10 mx-2 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full -translate-x-full anim-scan-x" style={{animationDelay: '0.5s'}}></div>
</div>
<div className="w-10 h-10 border border-white/20 rounded bg-[#111] flex items-center justify-center anim-pulse-seq" style={{animationDelay: '1s'}}>
<div className="w-3 h-3 bg-white/40 rounded-sm"></div>
</div>
</div>
</div>
</div>

<div className="stack-card absolute inset-0 bg-[#0E0F12] border border-white/10 rounded-3xl p-0 shadow-2xl overflow-hidden flex flex-col md:flex-row origin-top transition-all duration-500 ease-out opacity-0 translate-y-8 scale-90">
<div className="md:w-1/2 p-10 flex flex-col justify-center border-r border-white/5 relative z-10">
<span className="text-xs font-mono text-textDim mb-4 tracking-widest uppercase">
                  03 // Execution
                </span>
<h3 className="text-3xl font-medium text-white mb-4 tracking-tight">
                  Edge Runtime
                </h3>
<p className="text-textDim leading-relaxed font-light">
                  Deploy to a serverless global network instantly. Monitor
                  execution traces, debug in real-time, and roll back with
                  millisecond precision.
                </p>
<div className="mt-8 flex flex-wrap gap-2">
<span className="px-3 py-1 text-[10px] border border-white/10 rounded-full text-textDim uppercase tracking-wider">
                    99.99% Uptime
                  </span>
<span className="px-3 py-1 text-[10px] border border-white/10 rounded-full text-textDim uppercase tracking-wider">
                    &lt; 50ms Latency
                  </span>
</div>
</div>
<div className="md:w-1/2 bg-[#050505] relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="w-56 bg-[#111] border border-white/10 rounded-lg p-4 font-mono text-[8px] text-textDim space-y-2 relative overflow-hidden">
<div className="flex gap-2 mb-4 border-b border-white/5 pb-2">
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<div className="flex justify-between anim-pulse-seq" style={{animationDelay: '0s'}}>
<span>&gt; init_sequence</span>
<span className="text-green-500">OK</span>
</div>
<div className="flex justify-between anim-pulse-seq" style={{animationDelay: '0.5s'}}>
<span>&gt; load_modules</span>
<span className="text-green-500">OK</span>
</div>
<div className="flex justify-between anim-pulse-seq" style={{animationDelay: '1.0s'}}>
<span>&gt; connect_edge</span>
<span className="text-green-500">OK</span>
</div>
<div className="flex justify-between anim-pulse-seq" style={{animationDelay: '1.5s'}}>
<span>&gt; sync_state</span>
<span className="text-blue-500">SYNCING</span>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-1/2 -translate-y-full anim-scan-y"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 px-6 max-w-7xl mx-auto" id="pricing">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Pricing that scales with your workflows</h2>
<p className="text-textDim max-w-2xl mx-auto">
            Start small, ship fast, upgrade only when your automation grows.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

<div className="glass rounded-3xl p-8 border border-white/5 reveal flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold text-white">Starter</h3>
<span className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-textDim">
                For trying it out
              </span>
</div>
<div className="mt-6">
<div className="flex items-end gap-2">
<span className="text-4xl font-bold text-white">$0</span>
<span className="text-textDim pb-1">/mo</span>
</div>
<p className="mt-3 text-sm text-textDim leading-relaxed">
                Build your first workflows and validate the flow.
              </p>
</div>
<div className="mt-8 space-y-3 text-sm text-textDim">
<div className="flex items-start gap-2">
<span className="text-white/70">✓</span>
<span>5 active workflows</span>
</div>
<div className="flex items-start gap-2">
<span className="text-white/70">✓</span>
<span>1,000 runs per month</span>
</div>
<div className="flex items-start gap-2">
<span className="text-white/70">✓</span>
<span>Community support</span>
</div>
</div>
<div className="mt-10 pt-6 border-t border-white/5">
<button className="w-full h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors font-medium text-white">
                Start Free
              </button>
</div>
</div>

<div className="relative reveal">

<div className="absolute -inset-1 rounded-[28px] bg-gradient-to-b from-accent/30 via-accent/10 to-transparent blur-2xl opacity-60 pointer-events-none">
</div>
<div className="relative glass rounded-3xl p-8 border border-white/10 flex flex-col overflow-hidden">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-accent/10 blur-[90px] rounded-full">
</div>
</div>
<div className="relative z-10 flex items-center justify-between">
<h3 className="text-lg font-semibold text-white">Pro</h3>
<span className="text-[11px] px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-white/90">
                  Most Popular
                </span>
</div>
<div className="relative z-10 mt-6">
<div className="flex items-end gap-2">
<span className="text-4xl font-bold text-white">$49</span>
<span className="text-textDim pb-1">/mo</span>
</div>
<p className="mt-3 text-sm text-textDim leading-relaxed">
                  For teams shipping workflows every week, with reliability and speed.
                </p>
</div>
<div className="relative z-10 mt-8 space-y-3 text-sm text-white/90">
<div className="flex items-start gap-2">
<span className="text-accent">✓</span>
<span><span className="font-medium text-white">Unlimited</span> workflows</span>
</div>
<div className="flex items-start gap-2">
<span className="text-accent">✓</span>
<span>50,000 runs per month</span>
</div>
<div className="flex items-start gap-2">
<span className="text-accent">✓</span>
<span>Priority monitoring and alerts</span>
</div>
<div className="flex items-start gap-2">
<span className="text-accent">✓</span>
<span>Team workspaces</span>
</div>
</div>
<div className="relative z-10 mt-10 pt-6 border-t border-white/10">
<button className="w-full h-12 rounded-full bg-accent hover:bg-accentGlow transition-colors font-semibold text-white shadow-lg shadow-accent/20">
                  Get Started
                </button>
<div className="mt-3 text-[11px] text-textDim text-center">
                  No credit card required to start.
                </div>
</div>
</div>
</div>

<div className="glass rounded-3xl p-8 border border-white/5 reveal flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold text-white">Business</h3>
<span className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-textDim">
                For compliance
              </span>
</div>
<div className="mt-6">
<div className="flex items-end gap-2">
<span className="text-4xl font-bold text-white">$199</span>
<span className="text-textDim pb-1">/mo</span>
</div>
<p className="mt-3 text-sm text-textDim leading-relaxed">
                Secure automation for teams that need governance and auditability.
              </p>
</div>
<div className="mt-8 space-y-3 text-sm text-textDim">
<div className="flex items-start gap-2">
<span className="text-white/70">✓</span>
<span>Single sign-on</span>
</div>
<div className="flex items-start gap-2">
<span className="text-white/70">✓</span>
<span>Audit logs and retention</span>
</div>
<div className="flex items-start gap-2">
<span className="text-white/70">✓</span>
<span>Role-based permissions</span>
</div>
<div className="flex items-start gap-2">
<span className="text-white/70">✓</span>
<span>Dedicated support</span>
</div>
</div>
<div className="mt-10 pt-6 border-t border-white/5">
<button className="w-full h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors font-medium text-white">
                Contact Sales
              </button>
</div>
</div>
</div>

<div className="mt-10 text-center text-[11px] text-textDim reveal">
          Transparent pricing, cancel anytime, and your workflows stay exportable.
        </div>
</section>

<section className="py-28 px-6 max-w-7xl mx-auto" id="testimonials">
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-20 reveal">
<h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
              Loved by teams who ship
            </h2>
<p className="text-textDim text-lg max-w-2xl mx-auto mb-8">
              Real workflows. Real outcomes. No hype.
            </p>
<div className="flex flex-wrap justify-center gap-3 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-textDim flex items-center gap-2">
<div className="w-2 h-2 bg-white rounded-full"></div>
                Linear
              </div>
<div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-textDim flex items-center gap-2">
<div className="w-2 h-2 bg-white rounded-full"></div>
                Vercel
              </div>
<div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-textDim flex items-center gap-2">
<div className="w-2 h-2 bg-white rounded-full"></div>
                Raycast
              </div>
<div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-textDim flex items-center gap-2">
<div className="w-2 h-2 bg-white rounded-full"></div>
                Ramp
              </div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
<div className="lg:col-span-7 sticky top-32 reveal">
<div className="glass p-10 rounded-3xl border border-white/10 relative overflow-hidden group transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_50px_rgba(0,0,0,0.5)]">
<div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-start gap-5 mb-8">
<div className="relative group-hover:scale-105 transition-transform duration-300">
<img alt="Elena" className="w-16 h-16 rounded-full border-2 border-white/10 shadow-lg bg-surface" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[#15171B] rounded-full animate-pulse"></div>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-white">
                        Elena R.
                      </h3>
<p className="text-textDim text-sm mb-2">
                        VP of Engineering @ Solaris
                      </p>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-accent/10 border border-accent/20 text-accent text-[11px] font-medium tracking-wide">
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                        Saved 10 hrs/wk
                      </span>
</div>
</div>
<blockquote className="text-2xl font-medium leading-relaxed text-gray-200 mb-8">
                    "We replaced 5 scattered automations with one clean
                    workflow. The best part is how calm it feels—no fragile glue
                    code, just pure logic."
                  </blockquote>
<div className="flex gap-6 border-t border-white/5 pt-6">
<div>
<div className="text-xs text-textDim uppercase tracking-wider mb-1">
                        Reliability
                      </div>
<div className="text-white font-mono text-sm">99.99%</div>
</div>
<div>
<div className="text-xs text-textDim uppercase tracking-wider mb-1">
                        Avg Run
                      </div>
<div className="text-white font-mono text-sm">120ms</div>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 flex flex-col gap-5 relative pt-10 lg:pt-0" id="testimonial-stack">
<div className="glass p-6 rounded-2xl border border-white/5 relative group hover:-translate-y-1 hover:border-white/15 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full border border-white/10 bg-surface" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div>
<div className="text-sm font-semibold tracking-tight text-white">
                        Marcus J.
                      </div>
<div className="text-xs text-textDim">Product Lead</div>
</div>
</div>
<span className="text-[10px] px-2 py-1 bg-white/5 rounded border border-white/5 text-textDim font-mono">
                    2 days to launch
                  </span>
</div>
<p className="text-sm text-textDim leading-relaxed">
                  "The UI makes complex logic feel simple. We finally have
                  automation that’s readable, not a spaghetti mess."
                </p>
</div>
<div className="glass p-6 rounded-2xl border border-white/5 relative group hover:-translate-y-1 hover:border-white/15 transition-all duration-300 reveal" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full border border-white/10 bg-surface" src="https://randomuser.me/api/portraits/women/65.jpg"/>
<div>
<div className="text-sm font-semibold tracking-tight text-white">
                        Sarah L.
                      </div>
<div className="text-xs text-textDim">DevOps Engineer</div>
</div>
</div>
<span className="text-[10px] px-2 py-1 bg-white/5 rounded border border-white/5 text-textDim font-mono">
                    Zero downtime
                  </span>
</div>
<p className="text-sm text-textDim leading-relaxed">
                  "The 'house node' concept is perfect. Local triggers, cloud
                  actions, and monitoring in one place. It just works."
                </p>
</div>
<div className="glass p-6 rounded-2xl border border-white/5 relative group hover:-translate-y-1 hover:border-white/15 transition-all duration-300 reveal" style={{transitionDelay: '300ms'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full border border-white/10 bg-surface" src="https://randomuser.me/api/portraits/men/86.jpg"/>
<div>
<div className="text-sm font-semibold tracking-tight text-white">
                        David K.
                      </div>
<div className="text-xs text-textDim">Founder</div>
</div>
</div>
<span className="text-[10px] px-2 py-1 bg-white/5 rounded border border-white/5 text-textDim font-mono">
                    Stable
                  </span>
</div>
<p className="text-sm text-textDim leading-relaxed">
                  "Finally, an automation tool that treats infrastructure as a
                  first-class citizen. No more hacky webhooks."
                </p>
</div>
</div>
</div>
</div>
</section>

</div>
<section className="relative z-10 h-[150vh]" id="cta">
<div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center pointer-events-none">
<div className="relative z-20 text-center p-10 pointer-events-auto">
<h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8 drop-shadow-2xl">
            Automate
            <br/>
            Everything.
          </h2>
<p className="text-xl text-textDim mb-10 max-w-xl mx-auto drop-shadow-lg text-shadow">
            From simple scripts to complex autonomous agents. Start building
            your infrastructure today.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<button className="h-14 px-10 bg-white text-black text-base font-bold rounded-full hover:bg-gray-200 transition-colors shadow-xl">
              Start for free
            </button>
<button className="h-14 px-10 bg-black/40 backdrop-blur-md border border-white/10 text-white text-base font-medium rounded-full hover:bg-black/60 transition-colors">
              Talk to sales
            </button>
</div>
</div>
</div>
</section>
<footer className="relative z-20 bg-[#050505] border-t border-white/5 py-20 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-5 h-5 bg-accent rounded-full"></div>
<span className="font-bold text-xl text-white tracking-tight">
              Lumora
            </span>
</div>
<p className="text-textDim text-sm max-w-xs leading-relaxed">
            Intelligent automation infrastructure for the modern web.
            <br/>
            © 2024 Lumora Inc.
          </p>
</div>
<div className="flex gap-20 text-sm font-medium text-textDim">
<div className="flex flex-col gap-5">
<h4 className="text-white">Product</h4>
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">
              Integrations
            </a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex flex-col gap-5">
<h4 className="text-white">Company</h4>
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
<a className="hover:text-white transition-colors" href="#">Careers</a>
</div>
<div className="flex flex-col gap-5">
<h4 className="text-white">Legal</h4>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
