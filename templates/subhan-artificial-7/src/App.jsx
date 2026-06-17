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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Smooth scrolling
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true, smoothTouch: false });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    // Reduced motion
    let reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reduceBtn = document.getElementById("reduceMotionBtn");
    reduceBtn.addEventListener("click", () => {
      reducedMotion = !reducedMotion;
      reduceBtn.textContent = reducedMotion ? "Enable motion" : "Reduce motion";
      if (reducedMotion) {
        gsap.globalTimeline.timeScale(0.01);
      } else {
        gsap.globalTimeline.timeScale(1);
      }
    });

    // Hero parallax
    const heroTitle = document.getElementById("heroTitle");
    const lanterns = document.querySelectorAll(".lantern");
    const vignette = document.getElementById("vignette");

    function setParallax(e) {
      const x = (e.clientX / window.innerWidth - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);
      heroTitle.style.transform = `translate3d(${x * -0.6}rem, ${y * -0.6}rem, 0)`;
      lanterns.forEach((l, i) => {
        const k = (i + 1) * 0.7;
        l.style.transform = `translate3d(${x * k}rem, ${y * k}rem, 0)`;
      });
      vignette.style.opacity = String(0.85 - Math.abs(x) * 0.2);
    }
    window.addEventListener("mousemove", (e) => { if (!reducedMotion) setParallax(e); }, { passive: true });

    document.getElementById("scrollHint").addEventListener("click", () => {
      document.getElementById("experience").scrollIntoView({ behavior: "smooth" });
    });

    // Background Canvas Grid/Stars
    const sky = document.getElementById("sky");
    const skyCtx = sky.getContext("2d");
    let skyW = 0, skyH = 0;
    let stars = [];
    function resizeSky() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      skyW = sky.clientWidth; skyH = sky.clientHeight;
      sky.width = Math.floor(skyW * dpr);
      sky.height = Math.floor(skyH * dpr);
      skyCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.floor((skyW * skyH) / 18000);
      stars = Array.from({ length: Math.max(80, count) }, () => ({
        x: Math.random() * skyW,
        y: Math.random() * skyH,
        r: Math.random() * 1.5 + 0.2,
        a: Math.random() * 0.5 + 0.1,
        t: Math.random() * Math.PI * 2,
        s: Math.random() * 0.6 + 0.2
      }));
    }
    window.addEventListener("resize", resizeSky);
    resizeSky();

    function drawSky(time) {
      skyCtx.clearRect(0, 0, skyW, skyH);

      // abstract nebula glow
      const g = skyCtx.createRadialGradient(skyW * 0.5, skyH * 0.3, 0, skyW * 0.5, skyH * 0.3, Math.min(skyW, skyH) * 0.8);
      g.addColorStop(0, "rgba(59,130,246,0.06)");
      g.addColorStop(0.5, "rgba(139,92,246,0.03)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      skyCtx.fillStyle = g;
      skyCtx.fillRect(0, 0, skyW, skyH);

      // stars / data nodes
      for (const st of stars) {
        st.t += 0.008 * st.s;
        const tw = (Math.sin(st.t) + 1) / 2;
        const alpha = st.a * (0.4 + tw * 0.6);
        skyCtx.beginPath();
        skyCtx.fillStyle = `rgba(200,220,255,${alpha})`;
        skyCtx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        skyCtx.fill();
      }
      requestAnimationFrame(drawSky);
    }
    requestAnimationFrame(drawSky);

    // Particles (DOM)
    const particlesWrap = document.getElementById("particles");
    let particleCount = 20;
    function makeParticles() {
      particlesWrap.innerHTML = "";
      const count = reducedMotion ? Math.floor(particleCount * 0.2) : particleCount;

      for (let i = 0; i < count; i++) {
        const p = document.createElement("div");
        const size = Math.random() * 0.8 + 0.4;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const dur = Math.random() * 10 + 15;
        const delay = Math.random() * -10;
        const hue = Math.random() > 0.5 ? "59,130,246" : "139,92,246";
        
        p.className = "absolute rounded-full";
        p.style.width = `${size}rem`;
        p.style.height = `${size}rem`;
        p.style.left = `${left}%`;
        p.style.top = `${top}%`;
        p.style.background = `radial-gradient(circle at 30% 30%, rgba(${hue},0.6), rgba(255,255,255,0.10) 30%, rgba(0,0,0,0) 70%)`;
        p.style.filter = "blur(0.15rem)";
        p.style.opacity = "0.6";
        p.style.transform = `translate3d(0,0,0)`;
        particlesWrap.appendChild(p);

        if (!reducedMotion) {
          gsap.to(p, {
            y: -(Math.random() * 250 + 100),
            x: (Math.random() * 100 - 50),
            opacity: 0.1,
            duration: dur,
            delay: delay,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        }
      }
    }
    makeParticles();
    window.addEventListener("resize", makeParticles);

    document.getElementById("boostParticlesBtn").addEventListener("click", () => {
      particleCount = Math.min(80, particleCount + 20);
      makeParticles();
    });

    // GSAP reveals
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.fromTo(el, { opacity: 0, y: 24, scale: 0.985 }, {
        opacity: 1, y: 0, scale: 1,
        duration: reducedMotion ? 0.01 : 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" }
      });
    });

    gsap.fromTo(".revealPhilosophy", { opacity: 0, y: 20, scale: 0.98 }, {
      opacity: 1, y: 0, scale: 1,
      duration: reducedMotion ? 0.01 : 1.0,
      ease: "power3.out",
      scrollTrigger: { trigger: ".revealPhilosophy", start: "top 80%" }
    });

    // Glass panel floating
    if (!reducedMotion) {
      lanterns.forEach((l, i) => {
        gsap.to(l, { y: (i % 2 ? 16 : -14), x: (i % 2 ? -8 : 8), duration: 5 + i, repeat: -1, yoyo: true, ease: "sine.inOut" });
      });
      gsap.to("#glowMeter", { width: "100%", duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }

    // Abstract Geometry 3D (Hero Canvas)
    const heroCanvas = document.getElementById("hero3d");
    const heroRenderer = new THREE.WebGLRenderer({ canvas: heroCanvas, alpha: true, antialias: true });
    heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    
    const heroScene = new THREE.Scene();
    const heroCamera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    heroCamera.position.set(0, 0, 6.5);

    const heroGroup = new THREE.Group();
    heroScene.add(heroGroup);

    const hemi = new THREE.HemisphereLight(0x3B82F6, 0x040A15, 1.2);
    heroScene.add(hemi);

    const key = new THREE.DirectionalLight(0xffffff, 2.0);
    key.position.set(4, 5, 6);
    heroScene.add(key);

    const fill = new THREE.DirectionalLight(0x8B5CF6, 1.5);
    fill.position.set(-6, -2, 4);
    heroScene.add(fill);

    const rim = new THREE.PointLight(0x3B82F6, 2.0, 20);
    rim.position.set(0, 4, -4);
    heroScene.add(rim);

    // Premium tech materials
    const knotMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#1e3a8a"),
      metalness: 0.8,
      roughness: 0.2,
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });
    
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#8B5CF6"),
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.9,
      thickness: 1.5,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });

    function makeAbstractHero() {
      const knotGeo = new THREE.TorusKnotGeometry(0.9, 0.25, 128, 32);
      const knot = new THREE.Mesh(knotGeo, knotMat);

      const coreGeo = new THREE.IcosahedronGeometry(0.65, 1);
      const core = new THREE.Mesh(coreGeo, coreMat);

      heroGroup.add(knot);
      heroGroup.add(core);

      const particleGeo = new THREE.SphereGeometry(0.02, 12, 12);
      const particleMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      for (let i = 0; i < 20; i++) {
        const p = new THREE.Mesh(particleGeo, particleMat);
        const ang = (i / 20) * Math.PI * 2;
        p.position.set(Math.cos(ang) * 1.8, Math.sin(ang * 2) * 1.2, Math.sin(ang) * 1.8);
        p.userData = { speed: Math.random() * 0.02 + 0.01, angle: ang, dist: 1.5 + Math.random() };
        heroGroup.add(p);
      }
    }
    makeAbstractHero();

    function resizeHero3D() {
      const rect = heroCanvas.getBoundingClientRect();
      const w = Math.max(1, rect.width);
      const h = Math.max(1, rect.height);
      heroCamera.aspect = w / h;
      heroCamera.updateProjectionMatrix();
      heroRenderer.setSize(w, h, false);
    }
    window.addEventListener("resize", resizeHero3D);
    resizeHero3D();

    function renderHero3D(t) {
      if (!reducedMotion) {
        heroGroup.rotation.y = t * 0.0003;
        heroGroup.rotation.x = Math.sin(t * 0.0002) * 0.15;
        heroGroup.rotation.z = Math.cos(t * 0.00025) * 0.1;
        
        heroGroup.children.forEach(c => {
          if(c.userData.speed) {
            c.userData.angle += c.userData.speed;
            c.position.x = Math.cos(c.userData.angle) * c.userData.dist;
            c.position.z = Math.sin(c.userData.angle) * c.userData.dist;
            c.position.y = Math.sin(c.userData.angle * 2) * 0.8;
          }
        });
      }
      heroRenderer.render(heroScene, heroCamera);
      requestAnimationFrame(renderHero3D);
    }
    requestAnimationFrame(renderHero3D);

    // Theme toggle
    const themeBtn = document.getElementById("themeBtn");
    const themeIcon = document.getElementById("themeIcon");
    let lightMode = false;
    function applyTheme() {
      // Keeps dark luxury base, adjustments for slightly brighter "cyber-dawn" tone
      document.body.classList.toggle("cyber-dawn", lightMode);
      themeIcon.setAttribute("icon", lightMode ? "solar:sun-2-linear" : "solar:moon-linear");
      vignette.style.opacity = lightMode ? "0.6" : "0.85";
    }
    themeBtn.addEventListener("click", () => {
      lightMode = !lightMode;
      applyTheme();
    });
    applyTheme();

    // Audio
    const audioBtn = document.getElementById("audioBtn");
    const audio = new Audio();
    audio.src = "https://cdn.pixabay.com/download/audio/2022/02/23/audio_0f9b2b9db2.mp3?filename=ambient-piano-112998.mp3"; // Kept relaxing ambient
    audio.loop = true;
    audio.volume = 0.35;
    let audioOn = false;

    async function toggleAudio() {
      try {
        audioOn = !audioOn;
        if (audioOn) {
          await audio.play();
          audioBtn.classList.add("ring-2", "ring-[#3B82F6]/40");
          audioBtn.querySelector("span .hidden")?.replaceWith?.(); 
        } else {
          audio.pause();
          audioBtn.classList.remove("ring-2", "ring-[#3B82F6]/40");
        }
      } catch (e) {
        audioOn = false;
        audioBtn.classList.remove("ring-2", "ring-[#3B82F6]/40");
      }
    }
    audioBtn.addEventListener("click", toggleAudio);

    // Countdown logic
    const countdownEl = document.getElementById("countdown");
    function nextLaunchDate() {
      const d = new Date();
      d.setDate(d.getDate() + 30);
      d.setHours(0, 0, 0, 0);
      return d;
    }
    const target = nextLaunchDate();

    function tickCountdown() {
      const now = new Date();
      let diff = target.getTime() - now.getTime();
      if (diff < 0) diff = 0;

      const s = Math.floor(diff / 1000);
      const days = Math.floor(s / 86400);
      const hours = Math.floor((s % 86400) / 3600);
      const mins = Math.floor((s % 3600) / 60);
      const secs = s % 60;

      countdownEl.textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
    }
    tickCountdown();
    setInterval(tickCountdown, 1000);

    // Generator logic
    const nameInputTop = document.getElementById("nameInputTop");
    const generateBtnTop = document.getElementById("generateBtnTop");
    const greetingPreview = document.getElementById("greetingPreview");
    const copyPreviewBtn = document.getElementById("copyPreview");

    const templates = [
      (n) => `Building digital excellence${n ? ` for ${n}` : ""}.`,
      (n) => `Next-generation UI/UX${n ? ` tailored by ${n}` : " crafted for scale"}.`,
      (n) => `${n ? `${n} delivers` : "Delivering"} immersive 3D web experiences.`,
      (n) => `Precision, performance, and motion${n ? ` by ${n}` : ""}.`,
      (n) => `Scalable design systems${n ? ` empowering ${n}` : ""}.`
    ];

    function sanitizeName(str) {
      return (str || "").replace(/[<>]/g, "").trim().slice(0, 30);
    }

    function setGreeting(text) {
      greetingPreview.textContent = text;
      localStorage.setItem("luminaConcept", text);
    }

    function generateConcept() {
      const n = sanitizeName(nameInputTop.value);
      const t = templates[Math.floor(Math.random() * templates.length)];
      const msg = t(n);
      setGreeting(msg);
      const messageText = document.getElementById("messageText");
      if (messageText && !messageText.value.trim()) messageText.value = msg;
      updateCharCount();
    }

    generateBtnTop.addEventListener("click", generateConcept);
    nameInputTop.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        generateConcept();
      }
    });

    copyPreviewBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(greetingPreview.textContent.trim());
        copyPreviewBtn.textContent = "Copied";
        setTimeout(() => (copyPreviewBtn.textContent = "Copy"), 900);
      } catch {
        copyPreviewBtn.textContent = "Copy failed";
        setTimeout(() => (copyPreviewBtn.textContent = "Copy"), 900);
      }
    });

    const savedConcept = localStorage.getItem("luminaConcept");
    if (savedConcept) greetingPreview.textContent = savedConcept;

    // Core Systems Cards
    const cardsGrid = document.getElementById("cardsGrid");
    const shuffleCardsBtn = document.getElementById("shuffleCards");
    const applyToGreetingBtn = document.getElementById("applyToGreeting");
    
    const cardModal = document.getElementById("cardModal");
    const modalBackdrop = document.getElementById("modalBackdrop");
    const modalPanel = document.getElementById("modalPanel");
    const modalTitle = document.getElementById("modalTitle");
    const modalMessage = document.getElementById("modalMessage");
    const closeModalBtn = document.getElementById("closeModal");
    const useThisBtn = document.getElementById("useThis");
    const copyCardTextBtn = document.getElementById("copyCardText");

    const cardData = [
      {
        title: "Design Tokens",
        tag: "Architecture",
        message: "Scalable semantic tokens defining color, spacing, and typography across robust platforms."
      },
      {
        title: "Spatial Modals",
        tag: "Interaction",
        message: "Layered z-index architecture utilizing backdrop blurs and fluid entry/exit choreography."
      },
      {
        title: "Fluid Grids",
        tag: "Layout",
        message: "Algorithmic CSS grids adapting to intrinsic content sizes rather than rigid breakpoints."
      },
      {
        title: "WebGL Shaders",
        tag: "Rendering",
        message: "Custom GLSL material shaders integrated with DOM elements for cohesive visual storytelling."
      },
      {
        title: "Micro-Interactions",
        tag: "Motion",
        message: "Subtle state changes that provide immediate tactical feedback without overwhelming the user."
      },
      {
        title: "Accessible Contrast",
        tag: "Accessibility",
        message: "Calculated luminosity contrast ratios ensuring premium dark-mode aesthetics remain highly legible."
      }
    ];

    let selectedCardIndex = 0;

    function cardGradient(i) {
      const variants = [
        `radial-gradient(800px 320px at 30% 20%, rgba(59,130,246,0.18), transparent 60%),
         radial-gradient(700px 300px at 80% 70%, rgba(139,92,246,0.15), transparent 60%),
         linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))`,
        `radial-gradient(800px 340px at 70% 20%, rgba(139,92,246,0.18), transparent 60%),
         radial-gradient(700px 320px at 20% 80%, rgba(59,130,246,0.15), transparent 60%),
         linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))`,
        `radial-gradient(800px 340px at 35% 30%, rgba(255,255,255,0.12), transparent 60%),
         radial-gradient(700px 320px at 80% 70%, rgba(59,130,246,0.15), transparent 60%),
         linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))`
      ];
      return variants[i % variants.length];
    }

    function renderCards() {
      cardsGrid.innerHTML = "";
      cardData.forEach((c, i) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "group text-left rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-[0_40px_120px_-80px_rgba(0,0,0,0.85)] transition will-change-transform focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30 relative block w-full";
        btn.dataset.index = String(i);

        btn.innerHTML = `
          <div class="absolute inset-0 opacity-80 pointer-events-none" style="background:${cardGradient(i)}"></div>
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" style="background:
            radial-gradient(260px 140px at 25% 25%, rgba(59,130,246,0.20), transparent 60%),
            radial-gradient(260px 140px at 80% 70%, rgba(139,92,246,0.18), transparent 60%);"></div>

          <div class="relative p-6">
            <div class="flex items-start justify-between gap-3">
              <div>
                <div class="text-xs text-white/60">${c.tag}</div>
                <div class="mt-1 text-lg font-semibold tracking-tight text-white/95">${c.title}</div>
              </div>
              <div class="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 grid place-items-center shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]">
                <iconify-icon icon="solar:code-file-linear" width="22" height="22" style="stroke-width:1.5"></iconify-icon>
              </div>
            </div>

            <div class="mt-5 text-sm text-white/75 leading-relaxed line-clamp-2">
              ${c.message}
            </div>
            
            <div class="mt-6 flex items-center justify-between gap-3">
              <span class="inline-flex items-center gap-2 text-xs text-white/60">
                <span class="h-1.5 w-1.5 rounded-full ${i === selectedCardIndex ? "bg-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.8)]" : "bg-white/30"}"></span>
                ${i === selectedCardIndex ? "Active module" : "Tap to inspect"}
              </span>
              <span class="inline-flex items-center gap-2 text-xs font-semibold text-white/85">
                Examine
                <iconify-icon icon="solar:arrow-right-linear" width="18" height="18" style="stroke-width:1.5"></iconify-icon>
              </span>
            </div>
          </div>
          <div class="absolute inset-x-0 bottom-0 h-12 pointer-events-none" style="background: linear-gradient(to top, rgba(4,10,21,0.7), transparent);"></div>
        `;

        btn.addEventListener("pointermove", (e) => {
          if (reducedMotion) return;
          const r = btn.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          btn.style.transform = `perspective(900px) rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 10).toFixed(2)}deg) translateY(-2px)`;
        });
        btn.addEventListener("pointerleave", () => {
          btn.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)";
        });

        btn.addEventListener("click", () => openCardModal(i));
        cardsGrid.appendChild(btn);
      });
    }

    function openCardModal(i) {
      selectedCardIndex = i;
      const c = cardData[i];
      modalTitle.textContent = c.title;
      modalMessage.textContent = c.message;

      cardModal.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");

      if (!reducedMotion) {
        gsap.fromTo(modalPanel,
          { y: 30, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
        );
      }
      renderCards();
    }

    function closeCardModal() {
      cardModal.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }

    modalBackdrop.addEventListener("click", closeCardModal);
    closeModalBtn.addEventListener("click", closeCardModal);
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !cardModal.classList.contains("hidden")) closeCardModal();
    });

    useThisBtn.addEventListener("click", () => {
      const msg = cardData[selectedCardIndex]?.message || "";
      setGreeting(msg);
      const messageText = document.getElementById("messageText");
      if (messageText) messageText.value = msg;
      updateCharCount();
      closeCardModal();
    });

    copyCardTextBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText((cardData[selectedCardIndex]?.message || "").trim());
        copyCardTextBtn.textContent = "Copied";
        setTimeout(() => (copyCardTextBtn.textContent = "Copy logic"), 900);
      } catch {
        copyCardTextBtn.textContent = "Copy failed";
        setTimeout(() => (copyCardTextBtn.textContent = "Copy logic"), 900);
      }
    });

    shuffleCardsBtn.addEventListener("click", () => {
      for (let i = cardData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardData[i], cardData[j]] = [cardData[j], cardData[i]];
      }
      selectedCardIndex = 0;
      renderCards();
    });

    applyToGreetingBtn.addEventListener("click", () => {
      const msg = cardData[selectedCardIndex]?.message || "";
      setGreeting(msg);
      const messageText = document.getElementById("messageText");
      if (messageText) messageText.value = msg;
      updateCharCount();
      
      applyToGreetingBtn.textContent = "Synced";
      setTimeout(() => (applyToGreetingBtn.textContent = "Sync selected"), 900);
    });

    renderCards();

    // Manifesto Rotation
    const manifestoMain = document.getElementById("manifestoMain");
    const manifestoSub = document.getElementById("manifestoSub");
    const nextPrincipleBtn = document.getElementById("nextPrinciple");
    const copyPrincipleBtn = document.getElementById("copyPrinciple");
    const insertPhilosophyBtn = document.getElementById("insertPhilosophy");

    const principles = [
      {
        main: "DESIGN IS HOW IT WORKS",
        sub: "Creating interfaces that breathe, anticipate user intent, and feel remarkably human."
      },
      {
        main: "CLARITY ABOVE ALL",
        sub: "Removing the extraneous. Elevating the essential. True luxury is absence of friction."
      },
      {
        main: "MOTION AS MEANING",
        sub: "Animation is not decoration. It directs focus, implies spatial logic, and confirms action."
      },
      {
        main: "NATIVE TO THE MEDIUM",
        sub: "Respecting the browser constraints while pushing WebGL boundaries for seamless experiences."
      }
    ];
    let principleIndex = 0;

    function showPrinciple(i) {
      const p = principles[i];
      if (!p) return;

      if (!reducedMotion) {
        gsap.fromTo([manifestoMain, manifestoSub], 
          { opacity: 0, y: 15 }, 
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" }
        );
      }
      manifestoMain.textContent = p.main;
      manifestoSub.textContent = p.sub;
    }

    nextPrincipleBtn.addEventListener("click", () => {
      principleIndex = (principleIndex + 1) % principles.length;
      showPrinciple(principleIndex);
    });

    copyPrincipleBtn.addEventListener("click", async () => {
      try {
        const txt = `${manifestoMain.textContent} - ${manifestoSub.textContent}`;
        await navigator.clipboard.writeText(txt.trim());
        copyPrincipleBtn.textContent = "Copied";
        setTimeout(() => (copyPrincipleBtn.textContent = "Copy snippet"), 900);
      } catch {
        copyPrincipleBtn.textContent = "Failed";
        setTimeout(() => (copyPrincipleBtn.textContent = "Copy snippet"), 900);
      }
    });

    insertPhilosophyBtn.addEventListener("click", () => {
      const messageText = document.getElementById("messageText");
      if (!messageText) return;
      const ins = `Required framework: ${manifestoMain.textContent} — ${manifestoSub.textContent}`;
      const current = messageText.value.trim();
      messageText.value = current ? `${current}\n\n${ins}` : ins;
      updateCharCount();
      messageText.focus();
    });

    // Gallery carousel
    const spotlight = document.getElementById("spotlight");
    const spotlightTitle = document.getElementById("spotlightTitle");
    const prevSlideBtn = document.getElementById("prevSlide");
    const nextSlideBtn = document.getElementById("nextSlide");
    const slideIndexEl = document.getElementById("slideIndex");

    const slides = [
      { title: "Fintech Dashboard", bg: cardGradient(0) },
      { title: "Neural Network UI", bg: cardGradient(1) },
      { title: "Spatial E-commerce", bg: cardGradient(2) },
      { title: "SaaS Command Center", bg: cardGradient(0) },
      { title: "WebGL Platform", bg: cardGradient(1) }
    ];
    let currentSlide = 0;

    function renderSlide() {
      const s = slides[currentSlide];
      spotlight.style.background = s.bg;
      spotlightTitle.textContent = s.title;
      slideIndexEl.textContent = String(currentSlide + 1).padStart(2, "0");
    }
    function nextS() {
      currentSlide = (currentSlide + 1) % slides.length;
      renderSlide();
    }
    function prevS() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      renderSlide();
    }
    nextSlideBtn.addEventListener("click", nextS);
    prevSlideBtn.addEventListener("click", prevS);
    renderSlide();

    // Spatial Tech Scene (Three.js) replacing Mosque
    const spatialCanvas = document.getElementById("spatial3d");
    const spatialRenderer = new THREE.WebGLRenderer({ canvas: spatialCanvas, alpha: true, antialias: true });
    spatialRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    spatialRenderer.shadowMap.enabled = true;
    spatialRenderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const spatialScene = new THREE.Scene();
    const spatialCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    spatialCamera.position.set(5.5, 4.5, 6.5);

    const controls = new THREE.OrbitControls(spatialCamera, spatialCanvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 3.0;
    controls.maxDistance = 14.0;
    controls.maxPolarAngle = Math.PI * 0.45;

    const sAmb = new THREE.AmbientLight(0xffffff, 0.3);
    spatialScene.add(sAmb);

    const sMoon = new THREE.DirectionalLight(0x3B82F6, 1.2);
    sMoon.position.set(-6, 8, 5);
    sMoon.castShadow = true;
    sMoon.shadow.mapSize.set(1024, 1024);
    spatialScene.add(sMoon);

    const sSun = new THREE.DirectionalLight(0x8B5CF6, 1.5);
    sSun.position.set(7, 6, -6);
    sSun.castShadow = true;
    sSun.shadow.mapSize.set(1024, 1024);
    spatialScene.add(sSun);

    const floorMat = new THREE.MeshStandardMaterial({ color: 0x02050A, roughness: 0.8, metalness: 0.1 });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.5;
    floor.receiveShadow = true;
    spatialScene.add(floor);

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#ffffff"),
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.95,
      thickness: 1.0,
      transparent: true,
      opacity: 1
    });

    const techGroup = new THREE.Group();
    spatialScene.add(techGroup);

    function buildSpatialCity() {
      // Core pillar
      const core = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 0.4, 64), new THREE.MeshStandardMaterial({color: 0x111827}));
      core.position.y = -0.3;
      core.receiveShadow = true;
      techGroup.add(core);

      // Data blocks
      for(let i=0; i<12; i++) {
        const w = 0.4 + Math.random() * 0.8;
        const h = 0.5 + Math.random() * 3.5;
        const d = 0.4 + Math.random() * 0.8;
        
        const mat = Math.random() > 0.3 ? glassMat : new THREE.MeshStandardMaterial({color: 0x1e3a8a, roughness:0.3, metalness:0.7});
        const box = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
        
        const angle = Math.random() * Math.PI * 2;
        const radius = 1.2 + Math.random() * 2.5;
        box.position.set(Math.cos(angle)*radius, h/2 - 0.5, Math.sin(angle)*radius);
        box.castShadow = true;
        box.receiveShadow = true;
        techGroup.add(box);
      }

      // Orbiting Rings
      const r1 = new THREE.Mesh(new THREE.TorusGeometry(3.5, 0.02, 16, 100), new THREE.MeshBasicMaterial({color: 0x3B82F6}));
      r1.rotation.x = Math.PI
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
      

<div className="fixed inset-0 -z-50 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-[#040A15] via-[#060E1C] to-[#02050A]"></div>
<div className="absolute inset-0 opacity-[0.4]" style="background:
      radial-gradient(circle 20rem at 20% 10%, rgba(59,130,246,0.12), transparent 45%),
      radial-gradient(circle 25rem at 85% 25%, rgba(139,92,246,0.12), transparent 40%),
      radial-gradient(circle 30rem at 55% 80%, rgba(255,255,255,0.05), transparent 45%);"></div>
<div className="absolute inset-0 opacity-[0.25]" style="background-image:
      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(180deg, rgba(255,255,255,0.05) 1px, transparent 1px);
      background-size: 6rem 6rem;"></div>
<div className="absolute inset-0" id="vignette" style="background:
      radial-gradient(1000px 600px at 50% 50%, transparent 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.85) 100%);"></div>
</div>

<header className="fixed top-0 inset-x-0 z-40">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
<div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.7)] rounded-2xl">
<div className="flex items-center justify-between px-4 sm:px-5 py-3">
<a className="flex items-center gap-3 group" href="#top">
<div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] grid place-items-center group-hover:bg-white/10 transition">
<span className="text-sm font-semibold tracking-tight text-white/90">LX</span>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold tracking-tight text-white/90">Lumina Studio</div>
<div className="text-xs text-white/60">Digital Excellence</div>
</div>
</a>
<nav className="hidden lg:flex items-center gap-2">
<a className="px-3 py-2 text-xs text-white/75 hover:text-white transition rounded-xl hover:bg-white/5" href="#experience">Features</a>
<a className="px-3 py-2 text-xs text-white/75 hover:text-white transition rounded-xl hover:bg-white/5" href="#cards">Systems</a>
<a className="px-3 py-2 text-xs text-white/75 hover:text-white transition rounded-xl hover:bg-white/5" href="#spatial">Spatial UI</a>
<a className="px-3 py-2 text-xs text-white/75 hover:text-white transition rounded-xl hover:bg-white/5" href="#philosophy">Vision</a>
<a className="px-3 py-2 text-xs text-white/75 hover:text-white transition rounded-xl hover:bg-white/5" href="#gallery">Projects</a>
</nav>
<div className="flex items-center gap-2">
<button className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl px-3 py-2 text-xs text-white/80 hover:text-white hover:bg-white/10 transition shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]" id="audioBtn">
<span className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:music-note-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="hidden sm:inline">Sound</span>
</span>
<span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition" style={{background: 'radial-gradient(180px 60px at 50% 50%, rgba(59,130,246,0.18), transparent 55%)'}}></span>
</button>
<button className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl px-3 py-2 text-xs text-white/80 hover:text-white hover:bg-white/10 transition shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]" id="themeBtn">
<span className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:moon-linear" id="themeIcon" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="hidden sm:inline">Theme</span>
</span>
<span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition" style={{background: 'radial-gradient(180px 60px at 50% 50%, rgba(139,92,246,0.16), transparent 55%)'}}></span>
</button>
<a className="hidden sm:flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#3B82F6]/80 px-4 py-2 text-xs font-semibold text-white shadow-[0_18px_50px_-20px_rgba(59,130,246,0.6)] hover:brightness-110 transition" href="#send">
<span>Start Project</span>
<iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
<div className="px-4 sm:px-5 pb-3">
<div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 grid place-items-center shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
<iconify-icon height="18" icon="solar:rocket-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div className="text-xs text-white/70">
<span className="text-white/85 font-semibold">V2 Launch</span>
<span className="mx-2 text-white/40">•</span>
<span className="tabular-nums" id="countdown">--d --h --m --s</span>
</div>
</div>
<div className="flex items-center gap-2">
<div className="hidden sm:block text-xs text-white/50">Personalize:</div>
<div className="relative flex-1 sm:flex-none">
<input className="w-full sm:w-56 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-xs text-white/90 placeholder:text-white/35 outline-none focus:border-[#3B82F6]/50 focus:ring-2 focus:ring-[#3B82F6]/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] transition" id="nameInputTop" placeholder="Your brand name" type="text"/>
<span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/35">
<iconify-icon height="18" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
</div>
<button className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 hover:text-white hover:bg-white/10 transition shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]" id="generateBtnTop">
                Initialize
                <span className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition" style={{background: 'radial-gradient(220px 70px at 50% 50%, rgba(59,130,246,0.16), transparent 55%)'}}></span>
</button>
</div>
</div>
</div>
</div>
</div>
</header>

<main className="relative" id="top">
<section className="relative min-h-[100svh] pt-36 sm:pt-32">

<canvas className="absolute inset-0 -z-10 w-full h-full" id="sky"></canvas>

<div className="absolute inset-0 z-10 overflow-hidden pointer-events-none" id="particles"></div>

<div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
<div className="relative w-[min(44rem,95vw)] aspect-square mt-10">
<canvas className="absolute inset-0 w-full h-full" id="hero3d"></canvas>
<div className="absolute inset-0 rounded-full" style={{background: 'radial-gradient(circle at 50% 45%, rgba(59, 130, 246, 0.12), transparent 60%)', filter: 'blur(0.25rem)'}}></div>
</div>
</div>

<div className="absolute inset-x-0 bottom-0 -z-20">
<div className="relative h-64 sm:h-80 overflow-hidden">
<div className="absolute inset-0 z-10" style={{background: 'linear-gradient(to top, rgba(4,10,21,1) 10%, rgba(4,10,21,0.6) 50%, transparent)', pointerEvents: 'none'}}></div>
<div className="absolute inset-0" style="
            background-image: 
              linear-gradient(to right, rgba(59,130,246,0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59,130,246,0.12) 1px, transparent 1px);
            background-size: 3.5rem 3.5rem;
            transform: perspective(800px) rotateX(72deg) scale(2);
            transform-origin: bottom center;
          "></div>
<div className="absolute inset-x-0 bottom-0 h-28 z-20" style={{background: 'radial-gradient(900px 120px at 50% 0%, rgba(139,92,246,0.15), transparent 70%)'}}></div>
</div>
</div>

<div className="absolute inset-0 pointer-events-none">
<div className="lantern absolute left-[12%] top-[26%] opacity-90">
<div className="relative">
<div className="h-14 w-10 sm:h-16 sm:w-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_-30px_rgba(59,130,246,0.6)]"></div>
<div className="absolute inset-0 rounded-xl" style={{background: 'radial-gradient(circle at 50% 60%, rgba(59,130,246,0.20), transparent 60%)'}}></div>
</div>
</div>
<div className="lantern absolute left-[82%] top-[18%] opacity-90">
<div className="relative">
<div className="h-12 w-10 sm:h-14 sm:w-10 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_-30px_rgba(139,92,246,0.6)]"></div>
<div className="absolute inset-0 rounded-xl" style={{background: 'radial-gradient(circle at 50% 60%, rgba(139,92,246,0.20), transparent 60%)'}}></div>
</div>
</div>
<div className="lantern absolute left-[70%] top-[45%] opacity-80 hidden sm:block">
<div className="relative">
<div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_-30px_rgba(255,255,255,0.15)]"></div>
<div className="absolute inset-0 rounded-xl" style={{background: 'radial-gradient(circle at 50% 60%, rgba(255,255,255,0.12), transparent 70%)'}}></div>
</div>
</div>
</div>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
<div className="lg:col-span-6 z-10">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 text-xs text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]">
<span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.8)]"></span>
<span>UI/UX • WebGL • Motion</span>
</div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight" id="heroTitle">
              Crafting Digital Dimensions
            </h1>
<p className="mt-4 text-sm sm:text-base text-white/70 max-w-xl">
              A premium design agency blending cinematic 3D environments, interactive WebGL, and pixel-perfect scalable interfaces.
            </p>
<div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
<a className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#3B82F6]/95 to-[#3B82F6]/70 px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_-30px_rgba(59,130,246,0.7)] hover:brightness-110 transition" href="#experience" id="celebrateNow">
<span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Systems
                  <iconify-icon height="18" icon="solar:code-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
<span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500" style={{background: 'radial-gradient(260px 80px at 50% 50%, rgba(255,255,255,0.25), transparent 60%)'}}></span>
</a>
<button className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-3 text-sm font-semibold text-white/85 hover:bg-white/10 transition shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]" id="scrollHint">
<iconify-icon height="18" icon="solar:mouse-minimalistic-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>Scroll down</span>
<span className="text-white/45 font-medium border-l border-white/10 pl-2">Discover</span>
</button>
</div>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]">
<div className="text-xs text-white/55">Rendering</div>
<div className="mt-1 text-sm font-semibold tracking-tight text-white/90">Abstract WebGL</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]">
<div className="text-xs text-white/55">Framerate</div>
<div className="mt-1 text-sm font-semibold tracking-tight text-white/90">Smooth 60fps</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] col-span-2 sm:col-span-1">
<div className="text-xs text-white/55">Systems</div>
<div className="mt-1 text-sm font-semibold tracking-tight text-white/90">Tokenized UI</div>
</div>
</div>
</div>
<div className="lg:col-span-6 mt-10 lg:mt-0 z-10">
<div className="relative max-w-lg mx-auto lg:ml-auto">
<div className="absolute -inset-4 rounded-[2.5rem] opacity-60" style="background:
                radial-gradient(600px 240px at 30% 20%, rgba(59,130,246,0.18), transparent 60%),
                radial-gradient(500px 220px at 70% 70%, rgba(139,92,246,0.16), transparent 60%); filter: blur(1.5rem);"></div>
<div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_40px_120px_-70px_rgba(0,0,0,0.85)] overflow-hidden">
<div className="p-5 sm:p-6">
<div className="flex items-center justify-between gap-3">
<div>
<div className="text-xs text-white/60">System Status</div>
<div className="mt-1 text-sm font-medium tracking-tight">Component Engine</div>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70">
<span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_20px_rgba(139,92,246,0.8)]"></span>
                        Live
                      </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70">
<iconify-icon height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                        Optimized
                      </span>
</div>
</div>
<div className="mt-5 grid grid-cols-2 gap-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-xs text-white/55">Performance</div>
<div className="mt-1 text-sm font-semibold tracking-tight text-white/90">Render Cycle</div>
<div className="mt-3 h-1 rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-2/3 rounded-full" id="glowMeter" style={{background: 'linear-gradient(90deg, rgba(59,130,246,0.9), rgba(139,92,246,0.7))'}}></div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-xs text-white/55">Architecture</div>
<div className="mt-1 text-sm font-semibold tracking-tight text-white/90">Z-Index Depth</div>
<div className="mt-3 flex items-center gap-2 text-xs text-white/70">
<iconify-icon height="18" icon="solar:layers-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>Multi-layer Scene</span>
</div>
</div>
</div>
<div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div>
<div className="text-xs text-white/55">Current Initialization</div>
<div className="mt-1 text-sm font-semibold tracking-tight text-white/90" id="greetingPreview">
                          Next-generation UI/UX tailored by Lumina.
                        </div>
</div>
<button className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:text-white hover:bg-white/10 transition shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" id="copyPreview">
                        Copy
                        <span className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition" style={{background: 'radial-gradient(260px 70px at 50% 50%, rgba(255,255,255,0.16), transparent 55%)'}}></span>
</button>
</div>
</div>
</div>
<div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 pointer-events-none" style={{background: 'linear-gradient(to top, rgba(4,10,21,0.95), transparent)'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 inset-x-0 flex items-center justify-center pointer-events-none z-20">
<div className="rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 text-xs text-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]">
<span className="inline-flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.8)]"></span>
            Scroll to begin sequence
          </span>
</div>
</div>
</section>

<section className="relative py-16 sm:py-20 z-10" id="experience">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 text-xs text-white/70">
<iconify-icon height="18" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>Interactive Fidelity</span>
</div>
<h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">Kinetic Choreography</h2>
<p className="mt-3 text-sm sm:text-base text-white/70 max-w-xl">
              Each section renders intelligently based on viewport position—managing depth, scale, and performance metrics dynamically.
            </p>
</div>
<div className="flex items-center gap-2">
<button className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:text-white hover:bg-white/10 transition" id="reduceMotionBtn">
              Reduce motion
              <span className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition" style={{background: 'radial-gradient(240px 70px at 50% 50%, rgba(255,255,255,0.12), transparent 60%)'}}></span>
</button>
<button className="relative overflow-hidden rounded-xl bg-white text-[#040A15] px-4 py-2 text-xs font-semibold hover:brightness-95 transition shadow-[0_20px_60px_-35px_rgba(255,255,255,0.35)]" id="boostParticlesBtn">
              Stress test UI
            </button>
</div>
</div>
<div className="mt-10 grid lg:grid-cols-12 gap-4">
<div className="reveal lg:col-span-4 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.85)]">
<div className="h-11 w-11 rounded-2xl bg-white/5 border border-white/10 grid place-items-center shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
<iconify-icon height="22" icon="solar:slider-vertical-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div className="mt-4 text-sm font-semibold tracking-tight">Parallax Scrolling</div>
<div className="mt-2 text-xs sm:text-sm text-white/65">
              Deep-layered Z-space movements that create realistic optical depth natively in the browser.
            </div>
</div>
<div className="reveal lg:col-span-4 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.85)]">
<div className="h-11 w-11 rounded-2xl bg-white/5 border border-white/10 grid place-items-center shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
<iconify-icon height="22" icon="solar:sun-2-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div className="mt-4 text-sm font-semibold tracking-tight">Ambient Refraction</div>
<div className="mt-2 text-xs sm:text-sm text-white/65">
              Fluid glows and particle emissions blend seamlessly into glassmorphic UI shells.
            </div>
</div>
<div className="reveal lg:col-span-4 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.85)]">
<div className="h-11 w-11 rounded-2xl bg-white/5 border border-white/10 grid place-items-center shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
<iconify-icon height="22" icon="solar:shield-minimalistic-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div className="mt-4 text-sm font-semibold tracking-tight">Hardware Accelerated</div>
<div className="mt-2 text-xs sm:text-sm text-white/65">
              Adaptive rendering pipelines ensuring smooth interactions across desktop and mobile devices.
            </div>
</div>
</div>
</div>
</section>

<section className="relative py-16 sm:py-20 z-10" id="cards">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 text-xs text-white/70">
<iconify-icon height="18" icon="solar:layers-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>Design Library</span>
</div>
<h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">Spatial Components</h2>
<p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl">
              Hover over modules to perceive 3D tilting. Click to expand architectural breakdowns.
            </p>
</div>
<div className="flex items-center gap-2">
<button className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:text-white hover:bg-white/10 transition" id="shuffleCards">
              Regenerate grid
              <span className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100" style={{background: 'radial-gradient(240px 70px at 50% 50%, rgba(139,92,246,0.16), transparent 60%)'}}></span>
</button>
<button className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#3B82F6]/75 px-4 py-2 text-xs font-semibold text-white shadow-[0_18px_50px_-20px_rgba(59,130,246,0.8)] hover:brightness-110 transition" id="applyToGreeting">
              Sync selected
            </button>
</div>
</div>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="cardsGrid">

</div>
</div>
</section>

<section className="relative py-16 sm:py-20 z-10" id="spatial">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-5">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 text-xs text-white/70">
<iconify-icon height="18" icon="solar:box-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>Interactive WebGL</span>
</div>
<h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">Drag to rotate. Toggle states.</h2>
<p className="mt-3 text-sm sm:text-base text-white/70">
              A stylized 3D conceptual space demonstrating realistic shader transitions, glass materials, and spatial layouts.
            </p>
<div className="mt-6 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-5 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.85)]">
<div className="flex flex-wrap items-center gap-2">
<button className="relative overflow-hidden rounded-xl bg-white text-[#040A15] px-4 py-2 text-xs font-semibold hover:brightness-95 transition shadow-[0_20px_60px_-35px_rgba(255,255,255,0.35)]" id="toggleDayNight">
                  Dark / Light Mode
                </button>
<button className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:text-white hover:bg-white/10 transition" id="resetCamera">
                  Reset view
                  <span className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition" style={{background: 'radial-gradient(240px 70px at 50% 50%, rgba(59,130,246,0.16), transparent 60%)'}}></span>
</button>
<div className="ml-auto text-xs text-white/55">
<span className="text-white/75 font-semibold">Tip:</span> drag • scroll
                </div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-xs text-white/55">Lighting</div>
<div className="mt-1 text-sm font-semibold tracking-tight text-white/90" id="lightingLabel">Dark</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-xs text-white/55">Material</div>
<div className="mt-1 text-sm font-semibold tracking-tight text-white/90">Refract Glass</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-xs text-white/55">Controls</div>
<div className="mt-1 text-sm font-semibold tracking-tight text-white/90">Orbit</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_50px_140px_-90px_rgba(0,0,0,0.95)] overflow-hidden">
<div className="absolute inset-0 opacity-60 pointer-events-none" style="background:
                radial-gradient(800px 300px at 30% 20%, rgba(59,130,246,0.15), transparent 60%),
                radial-gradient(700px 280px at 70% 80%, rgba(139,92,246,0.15), transparent 60%);"></div>
<canvas className="relative w-full h-[22rem] sm:h-[28rem] lg:h-[32rem]" id="spatial3d"></canvas>
<div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{background: 'linear-gradient(to top, rgba(4,10,21,0.85), transparent)'}}></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 sm:py-20 z-10" id="philosophy">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_50px_140px_-90px_rgba(0,0,0,0.95)] overflow-hidden">
<div className="absolute -inset-10 opacity-50 pointer-events-none" style="background:
            radial-gradient(800px 280px at 25% 25%, rgba(59,130,246,0.15), transparent 60%),
            radial-gradient(700px 260px at 80% 70%, rgba(139,92,246,0.15), transparent 60%);"></div>
<div className="relative grid lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-5">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 text-xs text-white/70">
<iconify-icon height="18" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>Design Philosophy</span>
</div>
<h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">Form follows motion.</h2>
<p className="mt-3 text-sm sm:text-base text-white/70">
                A manifesto built into our DNA. We don't just push pixels; we engineer spatial relationships, logical flows, and intuitive digital ecosystems.
              </p>
</div>
<div className="lg:col-span-7">
<div className="revealPhilosophy rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]">
<div className="text-xs text-white/55">Core Principle</div>
<div className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight leading-tight text-white/95" id="manifestoMain">
                  DESIGN IS HOW IT WORKS
                </div>
<div className="mt-4 text-xs text-white/55">Application</div>
<div className="mt-2 text-sm sm:text-base text-white/70" id="manifestoSub">
                  Creating interfaces that breathe, anticipate user intent, and feel remarkably human.
                </div>
<div className="mt-5 flex flex-wrap items-center gap-2">
<button className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#3B82F6]/95 to-[#3B82F6]/70 px-4 py-2 text-xs font-semibold text-white shadow-[0_18px_50px_-25px_rgba(59,130,246,0.7)] hover:brightness-110 transition" id="nextPrinciple">
                    Next principle
                  </button>
<button className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:text-white hover:bg-white/10 transition" id="copyPrinciple">
                    Copy snippet
                    <span className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition" style={{background: 'radial-gradient(240px 70px at 50% 50%, rgba(255,255,255,0.12), transparent 60%)'}}></span>
</button>
<div className="ml-auto text-xs text-white/50">
<span className="inline-flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.8)]"></span>
                      Core logic
                    </span>
</div>
</div>
</div>
</div>
</div>

<div className="relative mt-8 h-20 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
<div className="absolute inset-0 opacity-70" style="background:
              conic-gradient(from 180deg at 50% 50%, rgba(59,130,246,0.18), rgba(139,92,246,0.16), rgba(255,255,255,0.05), rgba(59,130,246,0.18));
              filter: blur(0.5rem);"></div>
<div className="absolute inset-0 opacity-40" style="background-image:
              radial-gradient(circle at 1.5rem 1.5rem, rgba(255,255,255,0.08) 0, transparent 0.22rem);
              background-size: 3rem 3rem;"></div>
</div>
</div>
</div>
</section>

<section className="relative py-16 sm:py-20 z-10" id="gallery">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 text-xs text-white/70">
<iconify-icon height="18" icon="solar:folder-with-files-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>Project Matrix</span>
</div>
<h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">Case studies &amp; Abstracts</h2>
<p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl">
              An optimized masonry layout mapping conceptual prototypes without loading heavy image assets.
            </p>
</div>
<div className="flex items-center gap-2">
<button className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:text-white hover:bg-white/10 transition" id="prevSlide">
<span className="inline-flex items-center gap-2">
<iconify-icon height="18" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Prev
              </span>
</button>
<button className="relative overflow-hidden rounded-xl bg-white text-[#040A15] px-4 py-2 text-xs font-semibold hover:brightness-95 transition shadow-[0_20px_60px_-35px_rgba(255,255,255,0.35)]" id="nextSlide">
<span className="inline-flex items-center gap-2">
                Next
                <iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
</button>
</div>
</div>

<div className="mt-10 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_50px_140px_-90px_rgba(0,0,0,0.95)] overflow-hidden">
<div className="relative">
<div className="h-56 sm:h-72 lg:h-96 transition-all duration-700" id="spotlight" style="background:
                radial-gradient(900px 340px at 30% 20%, rgba(59,130,246,0.22), transparent 60%),
                radial-gradient(900px 360px at 80% 70%, rgba(139,92,246,0.20), transparent 60%),
                linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));">
<div className="absolute inset-0 opacity-40" style="background-image:
                radial-gradient(circle at 1.5rem 1.5rem, rgba(255,255,255,0.12) 0, transparent 0.2rem);
                background-size: 3rem 3rem;"></div>
</div>
<div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
<div className="flex items-end justify-between gap-4">
<div>
<div className="text-xs text-white/60">Featured Asset</div>
<div className="mt-1 text-lg sm:text-xl font-semibold tracking-tight text-white/95" id="spotlightTitle">Fintech Dashboard</div>
</div>
<div className="text-xs text-white/60 tabular-nums">
<span id="slideIndex">01</span><span className="text-white/35"> / 05</span>
</div>
</div>
</div>
<div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{background: 'linear-gradient(to top, rgba(4,10,21,0.95), transparent)'}}></div>
</div>
</div>

<div className="mt-6 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
<div className="galleryItem mb-4 break-inside-avoid rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_40px_120px_-85px_rgba(0,0,0,0.95)]">
<div className="h-40 sm:h-48" style="background:
              radial-gradient(700px 240px at 30% 20%, rgba(59,130,246,0.20), transparent 60%),
              linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02));"></div>
<div className="p-5">
<div className="text-xs text-white/55">Healthcare</div>
<div className="mt-1 text-sm font-semibold tracking-tight">Vitals Interface</div>
</div>
</div>
<div className="galleryItem mb-4 break-inside-avoid rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_40px_120px_-85px_rgba(0,0,0,0.95)]">
<div className="h-52 sm:h-60" style="background:
              radial-gradient(700px 260px at 70% 20%, rgba(139,92,246,0.20), transparent 60%),
              linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02));"></div>
<div className="p-5">
<div className="text-xs text-white/55">Crypto</div>
<div className="mt-1 text-sm font-semibold tracking-tight">Ledger Matrix</div>
</div>
</div>
<div className="galleryItem mb-4 break-inside-avoid rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_40px_120px_-85px_rgba(0,0,0,0.95)]">
<div className="h-44 sm:h-52" style="background:
              radial-gradient(700px 240px at 40% 40%, rgba(255,255,255,0.15), transparent 60%),
              linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02));"></div>
<div className="p-5">
<div className="text-xs text-white/55">Commerce</div>
<div className="mt-1 text-sm font-semibold tracking-tight">Spatial Checkout</div>
</div>
</div>
<div className="galleryItem mb-4 break-inside-avoid rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_40px_120px_-85px_rgba(0,0,0,0.95)]">
<div className="h-56 sm:h-64" style="background:
              radial-gradient(700px 280px at 30% 60%, rgba(59,130,246,0.18), transparent 60%),
              radial-gradient(800px 280px at 80% 30%, rgba(139,92,246,0.14), transparent 60%),
              linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02));"></div>
<div className="p-5">
<div className="text-xs text-white/55">SaaS Platform</div>
<div className="mt-1 text-sm font-semibold tracking-tight">Command Center</div>
</div>
</div>
<div className="galleryItem mb-4 break-inside-avoid rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_40px_120px_-85px_rgba(0,0,0,0.95)]">
<div className="h-44 sm:h-52" style="background:
              radial-gradient(700px 240px at 80% 60%, rgba(139,92,246,0.20), transparent 60%),
              linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02));"></div>
<div className="p-5">
<div className="text-xs text-white/55">AI Studio</div>
<div className="mt-1 text-sm font-semibold tracking-tight">Neural Prompt</div>
</div>
</div>
<div className="galleryItem mb-4 break-inside-avoid rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_40px_120px_-85px_rgba(0,0,0,0.95)]">
<div className="h-52 sm:h-60" style="background:
              radial-gradient(700px 260px at 20% 25%, rgba(59,130,246,0.16), transparent 60%),
              linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02));"></div>
<div className="p-5">
<div className="text-xs text-white/55">Web3</div>
<div className="mt-1 text-sm font-semibold tracking-tight">Decentralized Hub</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 sm:py-20 z-10" id="send">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-5">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 text-xs text-white/70">
<iconify-icon height="18" icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>Initiate Project</span>
</div>
<h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">Let's build something extraordinary.</h2>
<p className="mt-3 text-sm sm:text-base text-white/70">
              Submit a brief to start a conversation. Expect a response within 24 hours regarding bandwidth and fit.
            </p>
<div className="mt-6 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-[0_50px_140px_-90px_rgba(0,0,0,0.95)]">
<div className="text-xs text-white/55">Context Data</div>
<div className="mt-2 text-sm text-white/70">
                Your selected components and generated concepts will be attached to the request payload automatically.
              </div>
<div className="mt-4 flex flex-wrap items-center gap-2">
<button className="relative overflow-hidden rounded-xl bg-white text-[#040A15] px-4 py-2 text-xs font-semibold hover:brightness-95 transition shadow-[0_20px_60px_-35px_rgba(255,255,255,0.35)]" id="usePreviewInForm">
                  Attach current concept
                </button>
<button className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:text-white hover:bg-white/10 transition" id="randomizeGreeting">
                  Randomize brief
                  <span className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition" style={{background: 'radial-gradient(240px 70px at 50% 50%, rgba(59,130,246,0.16), transparent 60%)'}}></span>
</button>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_60px_160px_-100px_rgba(0,0,0,0.95)] overflow-hidden">
<div className="absolute inset-0 opacity-60 pointer-events-none" style="background:
                radial-gradient(900px 340px at 20% 20%, rgba(59,130,246,0.15), transparent 60%),
                radial-gradient(900px 340px at 80% 80%, rgba(139,92,246,0.15), transparent 60%);"></div>
<div className="relative p-6 sm:p-8">
<form className="space-y-4" id="projectForm">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-white/65 mb-2">Name / Company</label>
<div className="relative">
<input className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/90 placeholder:text-white/35 outline-none focus:border-[#3B82F6]/60 focus:ring-2 focus:ring-[#3B82F6]/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] transition" id="fromName" placeholder="John Doe" type="text"/>
<span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/35">
<iconify-icon height="18" icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
</div>
</div>
<div>
<label className="block text-xs text-white/65 mb-2">Email Address</label>
<div className="relative">
<input className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/90 placeholder:text-white/35 outline-none focus:border-[#8B5CF6]/60 focus:ring-2 focus:ring-[#8B5CF6]/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] transition" id="toEmail" placeholder="hello@company.com" type="email"/>
<span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/35">
<iconify-icon height="18" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
</div>
</div>
</div>
<div>
<label className="block text-xs text-white/65 mb-2">Project Brief</label>
<div className="relative">
<textarea className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/90 placeholder:text-white/35 outline-none focus:border-[#3B82F6]/50 focus:ring-2 focus:ring-[#3B82F6]/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] transition resize-none" id="messageText" placeholder="Describe your design and engineering requirements..." rows="5"></textarea>
<div className="pointer-events-none absolute right-4 top-4 text-white/35">
<iconify-icon height="18" icon="solar:pen-2-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
<div className="mt-2 flex items-center justify-between text-xs text-white/50">
<span className="tabular-nums" id="charCount">0 / 400</span>
<button className="text-white/70 hover:text-white transition font-semibold" id="insertPhilosophy" type="button">
                        Insert framework
                      </button>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
<button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#3B82F6] to-[#3B82F6]/70 px-5 py-3 text-sm font-semibold text-white shadow-[0_30px_90px_-45px_rgba(59,130,246,0.8)] hover:brightness-110 transition" id="sendBtn" type="submit">
<span className="relative z-10 inline-flex items-center justify-center gap-2">
                        Transmit Request
                        <iconify-icon height="18" icon="solar:plain-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
<span className="pointer-events-none absolute rounded-full opacity-0" id="ripple" style={{background: 'radial-gradient(circle, rgba(255,255,255,0.4), transparent 60%)', width: '12rem', height: '12rem'}}></span>
</button>
<button className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-3 text-sm font-semibold text-white/85 hover:bg-white/10 transition shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]" id="copyFinal" type="button">
                      Copy text
                      <span className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition" style={{background: 'radial-gradient(240px 70px at 50% 50%, rgba(59,130,246,0.16), transparent 60%)'}}></span>
</button>
<div className="sm:ml-auto text-xs text-white/60 font-medium" id="formStatus"></div>
</div>
</form>
</div>

<canvas className="absolute inset-0 w-full h-full pointer-events-none z-20" id="confetti"></canvas>
</div>
</div>
</div>
</div>
</section>

<footer className="relative py-12 sm:py-14 z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_50px_140px_-90px_rgba(0,0,0,0.95)] overflow-hidden">
<div className="absolute inset-0 opacity-70 pointer-events-none" style="background:
            linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.08), rgba(255,255,255,0.04));
          "></div>
<div className="relative p-6 sm:p-8">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
<div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-2xl bg-white/5 border border-white/10 grid place-items-center shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
<span className="text-sm font-bold tracking-tight text-white/90">LX</span>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Lumina Studio</div>
<div className="text-xs text-white/60">Digital Excellence Architecture.</div>
</div>
</div>
<div className="mt-5 text-xs text-white/55 max-w-2xl">
                  Crafted as a premium digital environment—showcasing real-time spatial web, glassmorphism logic, and interactive performance designed for next-level brands.
                </div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-4">
<div className="flex items-center gap-2">
<a aria-label="Home" className="social group h-11 w-11 rounded-2xl border border-white/10 bg-white/5 grid place-items-center hover:bg-white/10 transition shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]" href="#top">
<iconify-icon className="text-white/80 group-hover:text-white transition" height="20" icon="solar:home-angle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a aria-label="Projects" className="social group h-11 w-11 rounded-2xl border border-white/10 bg-white/5 grid place-items-center hover:bg-white/10 transition shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]" href="#gallery">
<iconify-icon className="text-white/80 group-hover:text-white transition" height="20" icon="solar:folder-with-files-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a aria-label="Contact" className="social group h-11 w-11 rounded-2xl border border-white/10 bg-white/5 grid place-items-center hover:bg-white/10 transition shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]" href="#send">
<iconify-icon className="text-white/80 group-hover:text-white transition" height="20" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
</div>
<div className="text-xs text-white/50">
<span className="tabular-nums">© <span id="year"></span></span> <span className="text-white/80 font-semibold">Lumina</span> • Minimal • Engineered
                </div>
</div>
</div>
</div>
<div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none" style={{background: 'linear-gradient(to top, rgba(4,10,21,0.85), transparent)'}}></div>
</div>
</div>
</footer>
</main>

<div className="fixed inset-0 z-50 hidden" id="cardModal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-md" id="modalBackdrop"></div>
<div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
<div className="relative w-full max-w-3xl rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-3xl shadow-[0_80px_160px_-40px_rgba(0,0,0,0.95)] overflow-hidden pointer-events-auto" id="modalPanel">
<div className="absolute inset-0 opacity-70 pointer-events-none" style="background:
          radial-gradient(900px 340px at 30% 20%, rgba(59,130,246,0.18), transparent 60%),
          radial-gradient(900px 340px at 80% 80%, rgba(139,92,246,0.16), transparent 60%);"></div>
<div className="relative p-6 sm:p-8">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs text-white/60">Component Architecture</div>
<div className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-white/95" id="modalTitle">Data Matrix</div>
</div>
<button className="group h-11 w-11 rounded-2xl border border-white/10 bg-white/5 grid place-items-center hover:bg-white/10 transition" id="closeModal">
<iconify-icon className="text-white/80 group-hover:text-white" height="22" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
</div>
<div className="mt-6 text-sm sm:text-base text-white/80 leading-relaxed font-medium" id="modalMessage">

</div>
<div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
<button className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#3B82F6]/95 to-[#3B82F6]/70 px-5 py-3 text-sm font-semibold text-white shadow-[0_30px_90px_-30px_rgba(59,130,246,0.8)] hover:brightness-110 transition" id="useThis">
              Select Concept
            </button>
<button className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 hover:bg-white/10 transition" id="copyCardText">
              Copy logic
            </button>
</div>
</div>
<div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none" style={{background: 'linear-gradient(to top, rgba(4,10,21,0.95), transparent)'}}></div>
</div>
</div>
</div>

    </>
  );
}
