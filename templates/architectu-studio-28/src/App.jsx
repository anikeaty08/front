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



    gsap.registerPlugin(ScrollTrigger);

    /**
     * 1. PRELOADER & SETUP
     */
    const loaderBar = document.querySelector('.bar');
    let loadProgress = 0;

    const updateLoader = setInterval(() => {
      loadProgress += Math.random() * 10;
      if (loadProgress >= 100) {
        loadProgress = 100;
        clearInterval(updateLoader);
        initSite();
      }
      loaderBar.style.width = loadProgress + '%';
    }, 80);

    function initSite() {
      const tl = gsap.timeline();
      tl.to('.loader', { yPercent: -100, duration: 1.2, ease: "power4.inOut" })
        .to('#canvas-container', { opacity: 1, duration: 1 }, "-=0.5")
        .from('.hero-title', { yPercent: 120, stagger: 0.1, duration: 1.5, ease: "power3.out" }, "-=0.5")
        .from('.reveal-text', { opacity: 0, y: 20, duration: 1 }, "-=1");

      document.body.classList.remove('loading');
    }

    /**
     * 2. LENIS SMOOTH SCROLL
     */
    const lenis = new Lenis({ lerp: 0.08, smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    /**
     * 3. THREE.JS MAGIC
     */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // BACKGROUND LAYER: THE NEON CORE
    const bgGroup = new THREE.Group();
    bgGroup.position.z = -12;
    scene.add(bgGroup);

    const coreGeo = new THREE.TorusKnotGeometry(12, 3.5, 128, 32);

    const coreWireMat = new THREE.MeshBasicMaterial({
      color: 0x333333,
      wireframe: true,
      transparent: true,
      opacity: 0.08
    });
    const coreWire = new THREE.Mesh(coreGeo, coreWireMat);
    bgGroup.add(coreWire);

    const coreBodyMat = new THREE.MeshBasicMaterial({ color: 0x050505 });
    const coreBody = new THREE.Mesh(coreGeo, coreBodyMat);
    coreBody.scale.set(0.99, 0.99, 0.99);
    bgGroup.add(coreBody);

    const haloCount = 350;
    const haloGeo = new THREE.BufferGeometry();
    const haloPos = new Float32Array(haloCount * 3);
    for (let i = 0; i < haloCount * 3; i++) haloPos[i] = (Math.random() - 0.5) * 60;
    haloGeo.setAttribute('position', new THREE.BufferAttribute(haloPos, 3));

    const haloMat = new THREE.PointsMaterial({
      size: 0.06,
      color: 0xffffff,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending
    });

    const haloSystem = new THREE.Points(haloGeo, haloMat);
    bgGroup.add(haloSystem);

    // ARTIFACT
    const artifactGeo = new THREE.IcosahedronGeometry(1.5, 2);
    const artifactMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.1 });
    const artifact = new THREE.Mesh(artifactGeo, artifactMat);

    const coreGeoSmall = new THREE.IcosahedronGeometry(0.8, 0);
    const coreMatSmall = new THREE.MeshNormalMaterial({ wireframe: false, flatShading: true });
    const coreSmall = new THREE.Mesh(coreGeoSmall, coreMatSmall);
    artifact.add(coreSmall);

    artifact.position.set(4, 0, 0);
    scene.add(artifact);

    // PARTICLE VOID
    const particleCount = 1000;
    const particlesGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const randomArray = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i++) posArray[i] = (Math.random() - 0.5) * 15;
    for (let i = 0; i < particleCount; i++) randomArray[i] = Math.random();

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeo.setAttribute('aRandom', new THREE.BufferAttribute(randomArray, 1));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.03,
      color: 0xd4a67e,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleSystem);

    // Interaction (mouse only drives parallax now)
    let targetMouseX = 0, targetMouseY = 0;
    window.addEventListener('mousemove', (e) => {
      targetMouseX = e.clientX / window.innerWidth;
      targetMouseY = 1.0 - e.clientY / window.innerHeight;
    });

    // Animation loop
    const clock = new THREE.Clock();
    let smoothedMouseX = 0;
    let smoothedMouseY = 0;

    function animate() {
      const time = clock.getElapsedTime();

      smoothedMouseX += (targetMouseX - smoothedMouseX) * 0.05;
      smoothedMouseY += (targetMouseY - smoothedMouseY) * 0.05;

      bgGroup.rotation.y = (time * 0.03) + (lenis.scroll * 0.0002);
      bgGroup.rotation.z = (time * 0.015);

      const pulse = 1 + Math.sin(time * 0.5) * 0.02;
      bgGroup.scale.set(pulse, pulse, pulse);

      const paraX = (smoothedMouseX * 2) - 1;
      const paraY = (smoothedMouseY * 2) - 1;
      bgGroup.position.x = paraX * 1.5;
      bgGroup.position.y = paraY * 1.5;

      artifact.rotation.x = time * 0.2;
      artifact.rotation.y = time * 0.3;
      const scalePulse = 1 + Math.sin(time * 2) * 0.05;
      coreSmall.scale.set(scalePulse, scalePulse, scalePulse);

      particleSystem.rotation.y = time * 0.1;
      particleSystem.rotation.z = lenis.scroll * 0.0002;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    /**
     * 4. GSAP SCROLL TRIGGERS & PARALLAX
     */
    gsap.utils.toArray('[data-speed]').forEach(el => {
      const speed = parseFloat(el.getAttribute('data-speed'));
      gsap.to(el, {
        yPercent: -20 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 0
        }
      });
    });

    gsap.utils.toArray('.highlight-text').forEach(text => {
      gsap.to(text, {
        color: '#ffffff',
        scrollTrigger: { trigger: text, start: 'top 65%', end: 'top 45%', scrub: true }
      });
    });

    gsap.to('#line-anim', {
      scaleX: 1,
      scrollTrigger: { trigger: '#philosophy', start: 'top 70%', end: 'top 50%', scrub: 1 }
    });

    const artifactTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#artifact",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
    artifactTl.to(artifact.position, { x: 1.5, ease: "power1.inOut" })
      .to(artifact.rotation, { z: Math.PI, ease: "none" }, "<")
      .to(artifact.position, { x: -4, ease: "power1.inOut" });

    const voidTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#void",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
    voidTl.to(particlesMat, { opacity: 0.8, duration: 0.5 })
      .from(particleSystem.scale, { x: 0.5, y: 0.5, z: 0.5 }, "<")
      .to(particlesMat, { opacity: 0, duration: 0.5 });

    const race = document.querySelector('.pin-wrap');
    if (window.innerWidth > 768) {
      const tween = gsap.to(race, { x: () => -(race.scrollWidth - window.innerWidth), ease: "none" });
      ScrollTrigger.create({
        trigger: "#studio",
        start: "top top",
        end: () => `+=${race.scrollWidth - window.innerWidth}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true
      });
    }

    // Project Hover Reveal (fixed positioning)
    const hoverReveal = document.querySelector('.hover-reveal');
    gsap.set(hoverReveal, { xPercent: -50, yPercent: -50 });

    document.querySelectorAll('.project-item').forEach(item => {
      item.addEventListener('mouseenter', () => {
        hoverReveal.style.backgroundImage = `url(${item.getAttribute('data-img')})`;
        gsap.to(hoverReveal, { opacity: 1, scale: 1, duration: 0.25, overwrite: true });
      });
      item.addEventListener('mouseleave', () => {
        gsap.to(hoverReveal, { opacity: 0, scale: 0.85, duration: 0.25, overwrite: true });
      });
      item.addEventListener('mousemove', (e) => {
        gsap.to(hoverReveal, { x: e.clientX, y: e.clientY, duration: 0.35, ease: "power3.out", overwrite: true });
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
      
<div className="hover-reveal"></div>
<div id="canvas-container"></div>
<div className="loader">
<div className="font-mono-display text-2xl tracking-widest">ATELIER</div>
<div className="bar-wrap"><div className="bar"></div></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 text-white">
<div className="mx-auto max-w-[1600px] px-6 pt-6">
<div className="nav-glass rounded-2xl px-6 py-4 flex items-center justify-between">
<a className="font-mono-display font-bold tracking-widest text-lg" href="#">ATELIER.</a>
<div className="hidden md:flex gap-12 font-body text-xs uppercase tracking-widest text-white/70">
<a className="hover:text-white transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#artifact">Artifact</a>
<a className="hover:text-white transition-colors" href="#studio">Studio</a>
</div>
<button className="border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all px-6 py-2 rounded-full text-xs uppercase tracking-widest">
          Inquire
        </button>
</div>
</div>
</nav>
<main id="smooth-wrapper">
<div id="smooth-content">

<section className="min-h-screen flex flex-col justify-center section-padding relative">
<div className="container-custom w-full relative z-10">
<div className="overflow-hidden">
<h1 className="hero-title font-display text-[14vw] leading-[0.85] text-white mix-blend-overlay opacity-90" data-speed="0.2">
              Spatial
            </h1>
</div>
<div className="overflow-hidden">
<h1 className="hero-title font-display text-[14vw] leading-[0.85] text-white italic-custom text-right" data-speed="0.4">
              Alchemy
            </h1>
</div>
<div className="flex flex-col md:flex-row justify-between items-end mt-20 border-t border-white/20 pt-8" data-speed="0.1">
<div className="max-w-md">
<p className="text-neutral-400 text-lg leading-relaxed reveal-text">
                We are a multidisciplinary design studio crafting digital and physical spaces that resonate with the human spirit.
              </p>
</div>
<div className="animate-bounce mt-10 md:mt-0 text-xs uppercase tracking-widest text-neutral-500">
              Scroll to Explore
            </div>
</div>
</div>
</section>

<section className="section-padding bg-neutral-900/50 backdrop-blur-sm relative z-10" id="philosophy">
<div className="container-custom">
<div className="flex flex-col gap-20">
<div className="w-full h-[1px] bg-white/20 origin-left scale-x-0" id="line-anim"></div>
<p className="font-display text-[5vw] leading-[1.1] text-neutral-500">
<span className="highlight-text transition-colors duration-500">Architecture is silent music.</span>
<span className="highlight-text transition-colors duration-500">We do not just build walls;</span>
<span className="highlight-text transition-colors duration-500">we sculpt light,</span>
<span className="highlight-text transition-colors duration-500">curate emptiness,</span>
<span className="highlight-text transition-colors duration-500">and design moments</span>
<span className="highlight-text transition-colors duration-500 text-white italic-custom">that linger.</span>
</p>
</div>
</div>
</section>

<section className="section-padding relative z-10" id="work">
<div className="container-custom">
<div className="mb-20 flex items-end justify-between" data-speed="0.1">
<h2 className="font-mono-display text-4xl uppercase">Selected Works</h2>
<span className="text-xs text-neutral-500">(2023 — 2026)</span>
</div>
<div className="projects-list">
<div className="project-item group py-12 flex flex-col md:flex-row justify-between items-center cursor-pointer" data-img="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=1200&amp;auto=format">
<div className="text-4xl md:text-6xl font-display group-hover:translate-x-4 transition-transform duration-500">Horizon Villa</div>
<div className="flex gap-8 items-center mt-4 md:mt-0 text-sm text-neutral-500 uppercase tracking-widest">
<span>Zurich</span><span>Residential</span>
</div>
</div>
<div className="project-item group py-12 flex flex-col md:flex-row justify-between items-center cursor-pointer" data-img="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=1200&amp;auto=format">
<div className="text-4xl md:text-6xl font-display group-hover:translate-x-4 transition-transform duration-500 italic-custom">The Void</div>
<div className="flex gap-8 items-center mt-4 md:mt-0 text-sm text-neutral-500 uppercase tracking-widest">
<span>Kyoto</span><span>Gallery</span>
</div>
</div>
<div className="project-item group py-12 flex flex-col md:flex-row justify-between items-center cursor-pointer" data-img="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=1200&amp;auto=format">
<div className="text-4xl md:text-6xl font-display group-hover:translate-x-4 transition-transform duration-500">Aesop Fifth</div>
<div className="flex gap-8 items-center mt-4 md:mt-0 text-sm text-neutral-500 uppercase tracking-widest">
<span>New York</span><span>Retail</span>
</div>
</div>
</div>
</div>
</section>

<section className="h-[120vh] relative z-10 flex items-center overflow-hidden" id="artifact">
<div className="container-custom w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center pointer-events-none">
<div className="pointer-events-auto z-20" data-speed="0.1">
<div className="glass-panel p-12 rounded-sm max-w-lg">
<span className="font-mono-display text-xs tracking-[0.2em] mb-4 block" style={{color: 'var(--accent)'}}>Experimental Division</span>
<h2 className="font-display text-6xl md:text-7xl mb-6">Digital<br/>Artifacts</h2>
<p className="text-neutral-400 leading-relaxed mb-8">
                We explore the intersection of geometry and code. Our "Artifacts" are procedural entities that exist only in the browser, reacting to the observer's gaze.
              </p>
<div className="flex gap-4 text-xs font-mono-display uppercase tracking-widest">
<span>WebGL</span><span>—</span><span>GLSL</span><span>—</span><span>React</span>
</div>
</div>
</div>
</div>
</section>

<section className="h-screen bg-white text-black flex items-center overflow-hidden z-20 relative" id="studio">
<div className="pin-wrap-container w-full h-full">
<div className="pin-wrap flex h-full items-center pl-[10vw]">
<div className="flex gap-[10vw] w-[300vw]">
<div className="w-[60vw] flex-shrink-0 flex flex-col justify-center">
<span className="font-mono-display text-sm uppercase tracking-widest mb-6 border-b border-black/20 pb-2 w-max">The Process</span>
<h2 className="font-display text-[6vw] leading-none">
                  We believe in<br/>
<em className="text-gray-400">subtraction.</em>
</h2>
<p className="mt-8 max-w-xl text-xl leading-relaxed">
                  In a world of noise, we design silence. Every line drawn is a decision to exclude the unnecessary.
                </p>
</div>
<div className="w-[40vw] flex-shrink-0 relative aspect-[3/4]" data-speed="0.05">
<img alt="Sketch" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d983b6b-8b1c-4f5c-97b3-727751f32999_1600w.jpg"/>
<div className="absolute bottom-4 left-4 font-mono-display text-white text-xs bg-black px-2 py-1">01. Sketch</div>
</div>
<div className="w-[40vw] flex-shrink-0 relative aspect-[3/4]" data-speed="0.1">
<img alt="Material" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/571f7932-206f-4e5b-9b25-436cdeaa1d7d_1600w.jpg"/>
<div className="absolute bottom-4 left-4 font-mono-display text-white text-xs bg-black px-2 py-1">02. Material</div>
</div>
<div className="w-[40vw] flex-shrink-0 relative aspect-[3/4]" data-speed="0.15">
<img alt="Build" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=800&amp;auto=format"/>
<div className="absolute bottom-4 left-4 font-mono-display text-white text-xs bg-black px-2 py-1">03. Realize</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-[100vh] flex items-center justify-center relative z-10 overflow-hidden bg-black" id="void">
<div className="container-custom text-center relative z-20">
<h2 className="font-mono-display text-xs md:text-sm text-neutral-500 uppercase tracking-[1em] mb-8" data-speed="-0.1">The Unknown</h2>
<div className="overflow-hidden">
<div className="font-display text-[8vw] md:text-[10vw] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent mix-blend-exclusion" data-speed="0.2">
              ENTROPY
            </div>
</div>
<p className="max-w-xl mx-auto mt-12 text-neutral-400 font-light" data-speed="0.1">
            Chaos is the only constant. We embrace the unpredictable nature of materials and environments to create structures that adapt and evolve over time.
          </p>
</div>
</section>

<footer className="section-padding bg-black text-white relative z-10 min-h-[50vh] flex flex-col justify-between">
<div className="grid grid-cols-1 md:grid-cols-2 gap-20">
<div data-speed="0.1">
<h2 className="font-display text-[5vw] leading-none mb-10">
              Let's create<br/><span className="italic-custom text-neutral-500">legacy.</span>
</h2>
<a className="inline-block border border-white/20 rounded-full px-8 py-4 text-xl uppercase tracking-wide hover:bg-white hover:text-black transition-all" href="mailto:hello@atelier.com">
              Start a Project
            </a>
</div>
<div className="flex flex-col gap-4 text-sm uppercase tracking-widest text-neutral-400" data-speed="0.2">
<a className="footer-link w-max" href="#">Instagram</a>
<a className="footer-link w-max" href="#">LinkedIn</a>
<a className="footer-link w-max" href="#">Behance</a>
<div className="mt-10 text-xs text-neutral-600">
              Bahnhofstrasse 12, 8001 Zurich<br/>
              +41 44 000 00 00
            </div>
</div>
</div>
<div className="border-t border-white/10 mt-20 pt-8 flex justify-between text-xs text-neutral-600 font-mono-display">
<span>© 2026 ATELIER.</span>
<span>Designed by AI</span>
</div>
</footer>
</div>
</main>







    </>
  );
}
