import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  // ========= LOADER WITH THREE.JS =========
  (function() {
    const canvas = document.getElementById('loader-canvas');
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 3.5;

    const count = 2000;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.2 + Math.random() * 0.8;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.012, color: 0xABFF00, transparent: true, opacity: 0.5,
      blending: THREE.AdditiveBlending, depthWrite: false
    });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    let progress = 0;
    const bar = document.getElementById('loader-bar');

    function tick() {
      const t = performance.now() * 0.001;
      points.rotation.y = t * 0.12;
      points.rotation.x = Math.sin(t * 0.08) * 0.15;
      renderer.render(scene, camera);

      progress = Math.min(progress + 0.012 + Math.random() * 0.006, 1);
      bar.style.width = (progress * 100) + '%';

      if (progress >= 1) {
        setTimeout(() => {
          document.getElementById('loader').classList.add('done');
          initPageAnimations();
        }, 300);
        return;
      }
      requestAnimationFrame(tick);
    }
    tick();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  })();

  // ========= PAGE ANIMATIONS WITH ANIME.JS =========
  function initPageAnimations() {
    // Animate hero elements
    anime({
      targets: '#nav',
      translateY: [-16, 0],
      opacity: [0, 1],
      duration: 700,
      easing: 'easeOutCubic'
    });

    const heroItems = document.querySelectorAll('#hero .rv, #hero .rv-scale');
    anime({
      targets: heroItems,
      translateY: [32, 0],
      scale: [function(el) { return el.classList.contains('rv-scale') ? 0.94 : 1 }, 1],
      opacity: [0, 1],
      delay: anime.stagger(100, { start: 150 }),
      duration: 800,
      easing: 'easeOutCubic'
    });

    // Counter animation
    document.querySelectorAll('.counter-value').forEach(el => {
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '+';
      anime({
        targets: { val: 0 },
        val: target,
        duration: 2200,
        delay: 700,
        easing: 'easeOutExpo',
        round: 1,
        update: function(a) {
          el.textContent = Math.round(a.animations[0].currentValue) + suffix;
        }
      });
    });

    // Intersection Observer for scroll reveals
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          const el = entry.target;
          const props = { targets: el, opacity: [0, 1], duration: 750, easing: 'easeOutCubic' };

          if (el.classList.contains('rv')) {
            props.translateY = [32, 0];
          } else if (el.classList.contains('rv-left')) {
            props.translateX = [-32, 0];
          } else if (el.classList.contains('rv-right')) {
            props.translateX = [32, 0];
          } else if (el.classList.contains('rv-scale')) {
            props.scale = [0.94, 1];
          }
          anime(props);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.rv, .rv-left, .rv-right, .rv-scale').forEach(el => {
      if (!el.closest('#hero')) observer.observe(el);
    });
  }

  // ========= MOUSE GLOW EFFECT =========
  document.querySelectorAll('.mouse-glow').forEach(card => {
    const spot = card.querySelector('.glow-spot');
    if (!spot) return;
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      spot.style.left = (e.clientX - rect.left) + 'px';
      spot.style.top = (e.clientY - rect.top) + 'px';
    });
  });

  // ========= MOBILE MENU =========
  document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('hidden');
  });
  document.querySelectorAll('#mobileMenu a').forEach(l => {
    l.addEventListener('click', () => document.getElementById('mobileMenu').classList.add('hidden'));
  });

  // ========= SMOOTH SCROLL =========
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      const t = document.querySelector(this.getAttribute('href'));
      if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ========= NAV HIDE ON SCROLL DOWN =========
  let lastScroll = 0;
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > lastScroll && current > 100) {
      nav.style.transform = 'translateY(-100%)';
      nav.style.transition = 'transform 0.3s ease';
    } else {
      nav.style.transform = 'translateY(0)';
    }
    lastScroll = current;
  });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="loader">
<canvas id="loader-canvas" style={{position: 'absolute', inset: '0', width: '100%', height: '100%'}}></canvas>
<div style={{position: 'relative', zIndex: '2', textAlign: 'center'}}>
<div className="flex items-center justify-center gap-2.5 mb-6">
<div className="w-9 h-9 rounded-xl flex items-center justify-center bg-lime">
<span className="font-bold text-xs tracking-tighter" style={{color: '#050505'}}>LG</span>
</div>
<span className="text-sm font-semibold tracking-tight text-white">Lime Green</span>
</div>
<div id="loader-bar-track"><div id="loader-bar"></div></div>
<p className="text-xs text-neutral-600 mt-4 tracking-wide">Loading</p>
</div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 nav-glass" id="nav">
<div className="max-w-6xl mx-auto px-5 lg:px-8">
<div className="flex items-center justify-between h-14">
<a className="flex items-center gap-2" href="#">
<div className="w-7 h-7 rounded-lg flex items-center justify-center bg-lime">
<span className="font-bold text-xs tracking-tighter" style={{color: '#050505'}}>LG</span>
</div>
<span className="text-sm font-semibold tracking-tight">Lime Green</span>
</a>
<div className="hidden md:flex items-center gap-7">
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#testimonials">Clients</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full btn-primary" href="#contact">
            Get in touch
            <iconify-icon height="13" icon="solar:arrow-right-up-linear" width="13"></iconify-icon>
</a>
<button className="md:hidden w-8 h-8 flex items-center justify-center text-neutral-400" id="menuToggle">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden" id="mobileMenu" style={{background: 'rgba(5,5,5,0.97)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.04)'}}>
<div className="px-5 py-5 space-y-4">
<a className="block text-sm text-neutral-400 hover:text-white transition-colors" href="#work">Work</a>
<a className="block text-sm text-neutral-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="block text-sm text-neutral-400 hover:text-white transition-colors" href="#process">Process</a>
<a className="block text-sm text-neutral-400 hover:text-white transition-colors" href="#testimonials">Clients</a>
<a className="block text-sm font-semibold text-center py-2.5 rounded-full bg-lime mt-4" href="#contact" style={{color: '#050505'}}>Get in touch</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center dot-grid" id="hero">

<div className="absolute top-20 left-1/3 w-96 h-96 rounded-full blur-3xl" style={{background: 'rgba(171,255,0,0.025)'}}></div>
<div className="absolute bottom-32 right-1/4 w-80 h-80 rounded-full blur-3xl" style={{background: 'rgba(171,255,0,0.02)'}}></div>
<div className="relative max-w-6xl mx-auto px-5 lg:px-8 pt-32 pb-20 w-full">
<div className="max-w-4xl">
<div className="rv-scale tag tag-lime mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse"></span>
          Available for Q1 2025 projects
        </div>
<h1 className="rv text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-7">
          We craft digital<br/>
          products with<br/>
<span className="gradient-text">obsessive care</span>
</h1>
<p className="rv text-base sm:text-lg text-neutral-400 leading-relaxed max-w-lg mb-10 font-light">
          A design-led studio specializing in mobile apps, AI products, and SaaS platforms. We help founders go from idea to shipped product in weeks, not months.
        </p>
<div className="rv flex flex-wrap items-center gap-3.5">
<a className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full btn-primary breathe" href="#contact">
            Start a project
            <iconify-icon height="15" icon="solar:arrow-right-linear" width="15"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full btn-ghost" href="#work">
            See our work
          </a>
</div>
</div>

<div className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rv-scale glass rounded-2xl p-5">
<div className="text-2xl sm:text-3xl font-bold tracking-tight counter-value" data-count="42">0</div>
<div className="text-xs text-neutral-500 mt-1">Products shipped</div>
</div>
<div className="rv-scale glass rounded-2xl p-5">
<div className="text-2xl sm:text-3xl font-bold tracking-tight counter-value" data-count="18">0</div>
<div className="text-xs text-neutral-500 mt-1">Global clients</div>
</div>
<div className="rv-scale glass rounded-2xl p-5">
<div className="text-2xl sm:text-3xl font-bold tracking-tight">4<span className="text-lg font-medium text-neutral-400">wk</span></div>
<div className="text-xs text-neutral-500 mt-1">Avg. delivery</div>
</div>
<div className="rv-scale glass rounded-2xl p-5">
<div className="text-2xl sm:text-3xl font-bold tracking-tight counter-value" data-count="98" data-suffix="%">0</div>
<div className="text-xs text-neutral-500 mt-1">Satisfaction rate</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 rv">
<div className="w-5 h-8 rounded-full border border-white/[0.08] flex items-start justify-center pt-1.5">
<div className="w-0.5 h-1.5 bg-white/20 rounded-full animate-bounce"></div>
</div>
</div>
</section>

<div className="border-y border-white/[0.03] py-3.5 overflow-hidden" style={{background: 'rgba(255,255,255,0.01)'}}>
<div className="marquee-inner flex items-center gap-10" style={{width: 'max-content'}}>
<span className="text-xs font-medium text-neutral-700 uppercase tracking-widest flex items-center gap-2.5"><span className="w-1 h-1 rounded-full" style={{background: 'rgba(171,255,0,0.3)'}}></span>Product Design</span>
<span className="text-xs font-medium text-neutral-700 uppercase tracking-widest flex items-center gap-2.5"><span className="w-1 h-1 rounded-full" style={{background: 'rgba(171,255,0,0.3)'}}></span>Mobile Apps</span>
<span className="text-xs font-medium text-neutral-700 uppercase tracking-widest flex items-center gap-2.5"><span className="w-1 h-1 rounded-full" style={{background: 'rgba(171,255,0,0.3)'}}></span>AI Integration</span>
<span className="text-xs font-medium text-neutral-700 uppercase tracking-widest flex items-center gap-2.5"><span className="w-1 h-1 rounded-full" style={{background: 'rgba(171,255,0,0.3)'}}></span>SaaS Platforms</span>
<span className="text-xs font-medium text-neutral-700 uppercase tracking-widest flex items-center gap-2.5"><span className="w-1 h-1 rounded-full" style={{background: 'rgba(171,255,0,0.3)'}}></span>Design Systems</span>
<span className="text-xs font-medium text-neutral-700 uppercase tracking-widest flex items-center gap-2.5"><span className="w-1 h-1 rounded-full" style={{background: 'rgba(171,255,0,0.3)'}}></span>MVP Development</span>
<span className="text-xs font-medium text-neutral-700 uppercase tracking-widest flex items-center gap-2.5"><span className="w-1 h-1 rounded-full" style={{background: 'rgba(171,255,0,0.3)'}}></span>Backend &amp; Cloud</span>
<span className="text-xs font-medium text-neutral-700 uppercase tracking-widest flex items-center gap-2.5"><span className="w-1 h-1 rounded-full" style={{background: 'rgba(171,255,0,0.3)'}}></span>Brand Identity</span>
<span className="text-xs font-medium text-neutral-700 uppercase tracking-widest flex items-center gap-2.5"><span className="w-1 h-1 rounded-full" style={{background: 'rgba(171,255,0,0.3)'}}></span>Product Design</span>
<span className="text-xs font-medium text-neutral-700 uppercase tracking-widest flex items-center gap-2.5"><span className="w-1 h-1 rounded-full" style={{background: 'rgba(171,255,0,0.3)'}}></span>Mobile Apps</span>
<span className="text-xs font-medium text-neutral-700 uppercase tracking-widest flex items-center gap-2.5"><span className="w-1 h-1 rounded-full" style={{background: 'rgba(171,255,0,0.3)'}}></span>AI Integration</span>
<span className="text-xs font-medium text-neutral-700 uppercase tracking-widest flex items-center gap-2.5"><span className="w-1 h-1 rounded-full" style={{background: 'rgba(171,255,0,0.3)'}}></span>SaaS Platforms</span>
<span className="text-xs font-medium text-neutral-700 uppercase tracking-widest flex items-center gap-2.5"><span className="w-1 h-1 rounded-full" style={{background: 'rgba(171,255,0,0.3)'}}></span>Design Systems</span>
<span className="text-xs font-medium text-neutral-700 uppercase tracking-widest flex items-center gap-2.5"><span className="w-1 h-1 rounded-full" style={{background: 'rgba(171,255,0,0.3)'}}></span>MVP Development</span>
<span className="text-xs font-medium text-neutral-700 uppercase tracking-widest flex items-center gap-2.5"><span className="w-1 h-1 rounded-full" style={{background: 'rgba(171,255,0,0.3)'}}></span>Backend &amp; Cloud</span>
<span className="text-xs font-medium text-neutral-700 uppercase tracking-widest flex items-center gap-2.5"><span className="w-1 h-1 rounded-full" style={{background: 'rgba(171,255,0,0.3)'}}></span>Brand Identity</span>
</div>
</div>

<section className="py-24 sm:py-32 relative" id="work">
<div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(171,255,0,0.02), transparent 60%)'}}></div>
<div className="relative max-w-6xl mx-auto px-5 lg:px-8">
<div className="flex items-end justify-between mb-14">
<div>
<div className="rv tag mb-5">Selected Work</div>
<h2 className="rv text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Products we've<br/><span className="gradient-text">brought to life</span>
</h2>
</div>
<a className="rv hidden sm:inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-white transition-colors" href="#">
          View all
          <iconify-icon height="13" icon="solar:arrow-right-linear" width="13"></iconify-icon>
</a>
</div>

<div className="grid md:grid-cols-2 gap-4">

<div className="rv glass glass-hover mouse-glow rounded-2xl overflow-hidden group md:row-span-2">
<div className="glow-spot"></div>
<div className="relative aspect-[4/3] overflow-hidden" style={{background: 'linear-gradient(145deg, #0d0d0d, #141414)'}}>
<div className="absolute inset-0" style={{background: 'linear-gradient(145deg, rgba(171,255,0,0.06), rgba(171,255,0,0.01))'}}></div>
<div className="absolute inset-0 flex items-center justify-center p-8">
<div className="w-full max-w-xs rounded-xl border border-white/[0.06] overflow-hidden" style={{background: 'rgba(20,20,20,0.9)', boxShadow: '0 32px 64px rgba(0,0,0,0.4)'}}>
<div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.04]">
<div className="w-2 h-2 rounded-full" style={{background: 'rgba(255,95,87,0.7)'}}></div>
<div className="w-2 h-2 rounded-full" style={{background: 'rgba(255,189,46,0.7)'}}></div>
<div className="w-2 h-2 rounded-full" style={{background: 'rgba(39,201,63,0.7)'}}></div>
</div>
<div className="p-4 space-y-3">
<div className="flex gap-3">
<div className="w-16 bg-white/[0.03] rounded-lg h-20"></div>
<div className="flex-1 space-y-2">
<div className="h-2.5 bg-white/[0.06] rounded w-full"></div>
<div className="h-2 bg-white/[0.04] rounded w-3/4"></div>
<div className="h-8 rounded-lg mt-2" style={{background: 'rgba(171,255,0,0.06)', border: '1px solid rgba(171,255,0,0.08)'}}></div>
</div>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="h-12 bg-white/[0.03] rounded-lg"></div>
<div className="h-12 bg-white/[0.03] rounded-lg"></div>
<div className="h-12 bg-white/[0.03] rounded-lg"></div>
</div>
</div>
</div>
</div>
<div className="project-img-overlay"></div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-lime uppercase tracking-wider">SaaS Platform</span>
<iconify-icon className="text-neutral-600 group-hover:text-lime transition-colors duration-300" height="14" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-1.5">Metric — Analytics Dashboard</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Real-time analytics platform with AI-driven insights, team collaboration, and custom report builder.</p>
<div className="flex flex-wrap gap-1.5 mt-4">
<span className="text-xs text-neutral-600 px-2.5 py-1 rounded-md bg-white/[0.03]">Next.js</span>
<span className="text-xs text-neutral-600 px-2.5 py-1 rounded-md bg-white/[0.03]">PostgreSQL</span>
<span className="text-xs text-neutral-600 px-2.5 py-1 rounded-md bg-white/[0.03]">AI/ML</span>
</div>
</div>
</div>

<div className="rv glass glass-hover mouse-glow rounded-2xl overflow-hidden group">
<div className="glow-spot"></div>
<div className="relative aspect-[16/9] overflow-hidden" style={{background: 'linear-gradient(145deg, #0d0d0d, #141414)'}}>
<div className="absolute inset-0" style={{background: 'linear-gradient(145deg, rgba(139,92,246,0.06), rgba(99,102,241,0.02))'}}></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="flex gap-2 items-end">
<div className="w-12 rounded-xl border border-white/[0.05] p-2 -rotate-3 opacity-50" style={{height: '140px', background: 'rgba(20,20,20,0.9)'}}>
<div className="w-6 h-6 mx-auto rounded-md mb-2" style={{background: 'rgba(139,92,246,0.1)'}}></div>
<div className="space-y-1.5"><div className="h-1.5 bg-white/[0.05] rounded"></div><div className="h-1.5 bg-white/[0.03] rounded w-3/4"></div></div>
</div>
<div className="w-14 rounded-xl border border-white/[0.07] p-2.5 z-10 shadow-2xl" style={{height: '160px', background: 'rgba(20,20,20,0.95)'}}>
<div className="w-7 h-7 mx-auto rounded-lg mb-2.5" style={{background: 'rgba(139,92,246,0.12)'}}></div>
<div className="space-y-1.5"><div className="h-1.5 bg-white/[0.06] rounded"></div><div className="h-1.5 bg-white/[0.04] rounded w-2/3"></div></div>
<div className="h-10 rounded-lg mt-3" style={{background: 'rgba(139,92,246,0.04)'}}></div>
</div>
<div className="w-12 rounded-xl border border-white/[0.05] p-2 rotate-3 opacity-50" style={{height: '140px', background: 'rgba(20,20,20,0.9)'}}>
<div className="w-6 h-6 mx-auto rounded-md mb-2" style={{background: 'rgba(139,92,246,0.1)'}}></div>
<div className="space-y-1.5"><div className="h-1.5 bg-white/[0.05] rounded"></div><div className="h-1.5 bg-white/[0.03] rounded w-3/4"></div></div>
</div>
</div>
</div>
<div className="project-img-overlay"></div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-violet-400 uppercase tracking-wider">Mobile App</span>
<iconify-icon className="text-neutral-600 group-hover:text-violet-400 transition-colors duration-300" height="14" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-1">Aura — Wellness Companion</h3>
<p className="text-xs text-neutral-500 leading-relaxed">AI-powered wellness tracking with personalized routines and guided meditation.</p>
</div>
</div>

<div className="rv glass glass-hover mouse-glow rounded-2xl overflow-hidden group">
<div className="glow-spot"></div>
<div className="relative aspect-[16/9] overflow-hidden" style={{background: 'linear-gradient(145deg, #0d0d0d, #141414)'}}>
<div className="absolute inset-0" style={{background: 'linear-gradient(145deg, rgba(6,182,212,0.06), rgba(20,184,166,0.02))'}}></div>
<div className="absolute inset-0 flex items-center justify-center p-6">
<div className="w-full max-w-[200px] space-y-2.5">
<div className="flex items-start gap-2">
<div className="w-7 h-7 rounded-lg flex-shrink-0" style={{background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.12)'}}></div>
<div className="flex-1 rounded-lg border border-white/[0.05] p-2.5" style={{background: 'rgba(20,20,20,0.8)'}}><div className="h-1.5 bg-white/[0.06] rounded w-full mb-1"></div><div className="h-1.5 bg-white/[0.03] rounded w-2/3"></div></div>
</div>
<div className="flex items-start gap-2 justify-end">
<div className="flex-1 rounded-lg p-2.5" style={{background: 'rgba(6,182,212,0.04)', border: '1px solid rgba(6,182,212,0.08)'}}><div className="h-1.5 rounded w-full mb-1" style={{background: 'rgba(6,182,212,0.08)'}}></div><div className="h-1.5 rounded w-1/2" style={{background: 'rgba(6,182,212,0.05)'}}></div></div>
<div className="w-7 h-7 rounded-lg flex-shrink-0" style={{background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.12)'}}></div>
</div>
<div className="flex items-start gap-2">
<div className="w-7 h-7 rounded-lg flex-shrink-0" style={{background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.12)'}}></div>
<div className="flex-1 rounded-lg border border-white/[0.05] p-2.5" style={{background: 'rgba(20,20,20,0.8)'}}><div className="h-1.5 bg-white/[0.06] rounded w-3/4 mb-1"></div><div className="h-1.5 bg-white/[0.03] rounded w-1/2"></div></div>
</div>
</div>
</div>
<div className="project-img-overlay"></div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">AI + Chat</span>
<iconify-icon className="text-neutral-600 group-hover:text-cyan-400 transition-colors duration-300" height="14" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-1">Nova — AI Assistant</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Context-aware AI chat platform with multi-modal capabilities and memory.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 border-t border-white/[0.03] relative" id="services">
<div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(171,255,0,0.02), transparent 60%)'}}></div>
<div className="relative max-w-6xl mx-auto px-5 lg:px-8">
<div className="text-center mb-16">
<div className="rv tag mb-5 mx-auto" style={{width: 'fit-content'}}>What We Do</div>
<h2 className="rv text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          Full-stack product<br/><span className="gradient-text">capabilities</span>
</h2>
<p className="rv text-sm sm:text-base text-neutral-400 max-w-md mx-auto font-light">
          Every layer of your product, handled with craft and precision.
        </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">

<div className="rv glass glass-hover mouse-glow rounded-2xl p-7 group">
<div className="glow-spot"></div>
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{background: 'rgba(171,255,0,0.08)', border: '1px solid rgba(171,255,0,0.1)'}}>
<iconify-icon height="20" icon="solar:smartphone-2-linear" style={{color: '#ABFF00'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-2">Mobile Development</h3>
<p className="text-xs text-neutral-500 leading-relaxed mb-5">Native iOS/Android and cross-platform apps with fluid animations and offline-first architecture.</p>
<div className="flex flex-wrap gap-1.5">
<span className="text-xs text-neutral-600 px-2 py-0.5 rounded bg-white/[0.03]">Swift</span>
<span className="text-xs text-neutral-600 px-2 py-0.5 rounded bg-white/[0.03]">Kotlin</span>
<span className="text-xs text-neutral-600 px-2 py-0.5 rounded bg-white/[0.03]">React Native</span>
<span className="text-xs text-neutral-600 px-2 py-0.5 rounded bg-white/[0.03]">Flutter</span>
</div>
</div>

<div className="rv glass glass-hover mouse-glow rounded-2xl p-7 group">
<div className="glow-spot"></div>
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{background: 'rgba(171,255,0,0.08)', border: '1px solid rgba(171,255,0,0.1)'}}>
<iconify-icon height="20" icon="solar:magic-stick-3-linear" style={{color: '#ABFF00'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-2">AI Products</h3>
<p className="text-xs text-neutral-500 leading-relaxed mb-5">From intelligent features to full AI-native apps. We make complex AI feel simple and delightful.</p>
<div className="flex flex-wrap gap-1.5">
<span className="text-xs text-neutral-600 px-2 py-0.5 rounded bg-white/[0.03]">GPT</span>
<span className="text-xs text-neutral-600 px-2 py-0.5 rounded bg-white/[0.03]">LangChain</span>
<span className="text-xs text-neutral-600 px-2 py-0.5 rounded bg-white/[0.03]">RAG</span>
<span className="text-xs text-neutral-600 px-2 py-0.5 rounded bg-white/[0.03]">Vision</span>
</div>
</div>

<div className="rv glass glass-hover mouse-glow rounded-2xl p-7 group">
<div className="glow-spot"></div>
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{background: 'rgba(171,255,0,0.08)', border: '1px solid rgba(171,255,0,0.1)'}}>
<iconify-icon height="20" icon="solar:monitor-linear" style={{color: '#ABFF00'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-2">SaaS &amp; Web Apps</h3>
<p className="text-xs text-neutral-500 leading-relaxed mb-5">Complex data visualized beautifully. Dashboards and platforms users genuinely enjoy.</p>
<div className="flex flex-wrap gap-1.5">
<span className="text-xs text-neutral-600 px-2 py-0.5 rounded bg-white/[0.03]">Next.js</span>
<span className="text-xs text-neutral-600 px-2 py-0.5 rounded bg-white/[0.03]">TypeScript</span>
<span className="text-xs text-neutral-600 px-2 py-0.5 rounded bg-white/[0.03]">Postgres</span>
</div>
</div>

<div className="rv glass glass-hover mouse-glow rounded-2xl p-7 group">
<div className="glow-spot"></div>
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{background: 'rgba(171,255,0,0.08)', border: '1px solid rgba(171,255,0,0.1)'}}>
<iconify-icon height="20" icon="solar:palette-linear" style={{color: '#ABFF00'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-2">Product Design</h3>
<p className="text-xs text-neutral-500 leading-relaxed mb-5">End-to-end UX research, wireframing, prototyping, and high-fidelity interface design.</p>
<div className="flex flex-wrap gap-1.5">
<span className="text-xs text-neutral-600 px-2 py-0.5 rounded bg-white/[0.03]">Figma</span>
<span className="text-xs text-neutral-600 px-2 py-0.5 rounded bg-white/[0.03]">Prototyping</span>
<span className="text-xs text-neutral-600 px-2 py-0.5 rounded bg-white/[0.03]">Systems</span>
</div>
</div>

<div className="rv glass glass-hover mouse-glow rounded-2xl p-7 group">
<div className="glow-spot"></div>
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{background: 'rgba(171,255,0,0.08)', border: '1px solid rgba(171,255,0,0.1)'}}>
<iconify-icon height="20" icon="solar:rocket-2-linear" style={{color: '#ABFF00'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-2">MVP Development</h3>
<p className="text-xs text-neutral-500 leading-relaxed mb-5">Zero to shippable product in 4 weeks. Validate faster without cutting corners.</p>
<div className="flex flex-wrap gap-1.5">
<span className="text-xs text-neutral-600 px-2 py-0.5 rounded bg-white/[0.03]">Rapid</span>
<span className="text-xs text-neutral-600 px-2 py-0.5 rounded bg-white/[0.03]">Lean</span>
<span className="text-xs text-neutral-600 px-2 py-0.5 rounded bg-white/[0.03]">Iterative</span>
</div>
</div>

<div className="rv glass glass-hover mouse-glow rounded-2xl p-7 group">
<div className="glow-spot"></div>
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{background: 'rgba(171,255,0,0.08)', border: '1px solid rgba(171,255,0,0.1)'}}>
<iconify-icon height="20" icon="solar:server-linear" style={{color: '#ABFF00'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-2">Backend &amp; Infrastructure</h3>
<p className="text-xs text-neutral-500 leading-relaxed mb-5">Scalable APIs, cloud infrastructure, and DevOps pipelines built for growth.</p>
<div className="flex flex-wrap gap-1.5">
<span className="text-xs text-neutral-600 px-2 py-0.5 rounded bg-white/[0.03]">AWS</span>
<span className="text-xs text-neutral-600 px-2 py-0.5 rounded bg-white/[0.03]">Node</span>
<span className="text-xs text-neutral-600 px-2 py-0.5 rounded bg-white/[0.03]">Docker</span>
<span className="text-xs text-neutral-600 px-2 py-0.5 rounded bg-white/[0.03]">CI/CD</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 border-t border-white/[0.03]" id="process">
<div className="max-w-6xl mx-auto px-5 lg:px-8">
<div className="text-center mb-16">
<div className="rv tag mb-5 mx-auto" style={{width: 'fit-content'}}>Our Process</div>
<h2 className="rv text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          Idea to launch in<br/><span className="gradient-text">four weeks</span>
</h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rv glass glass-hover rounded-2xl p-6 relative">
<div className="flex items-center gap-3 mb-5">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold" style={{background: 'rgba(171,255,0,0.1)', border: '1px solid rgba(171,255,0,0.15)', color: '#ABFF00'}}>01</div>
<div className="hidden lg:block flex-1 h-px" style={{background: 'linear-gradient(90deg,rgba(171,255,0,0.15),transparent)'}}></div>
</div>
<h3 className="text-sm font-semibold tracking-tight mb-2">Discovery</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Deep dive into your vision, users, market, and technical requirements. Align on goals and scope.</p>
<div className="mt-4 text-xs text-neutral-600">Week 1</div>
</div>
<div className="rv glass glass-hover rounded-2xl p-6 relative">
<div className="flex items-center gap-3 mb-5">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold" style={{background: 'rgba(171,255,0,0.1)', border: '1px solid rgba(171,255,0,0.15)', color: '#ABFF00'}}>02</div>
<div className="hidden lg:block flex-1 h-px" style={{background: 'linear-gradient(90deg,rgba(171,255,0,0.15),transparent)'}}></div>
</div>
<h3 className="text-sm font-semibold tracking-tight mb-2">Design</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Wireframes, high-fidelity mockups, interactive prototypes. Every detail is intentional.</p>
<div className="mt-4 text-xs text-neutral-600">Week 1–2</div>
</div>
<div className="rv glass glass-hover rounded-2xl p-6 relative">
<div className="flex items-center gap-3 mb-5">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold" style={{background: 'rgba(171,255,0,0.1)', border: '1px solid rgba(171,255,0,0.15)', color: '#ABFF00'}}>03</div>
<div className="hidden lg:block flex-1 h-px" style={{background: 'linear-gradient(90deg,rgba(171,255,0,0.15),transparent)'}}></div>
</div>
<h3 className="text-sm font-semibold tracking-tight mb-2">Develop</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Pixel-perfect implementation with clean, scalable code. Weekly demos and feedback loops.</p>
<div className="mt-4 text-xs text-neutral-600">Week 2–3</div>
</div>
<div className="rv glass glass-hover rounded-2xl p-6 relative">
<div className="flex items-center gap-3 mb-5">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold bg-lime" style={{color: '#050505'}}>04</div>
</div>
<h3 className="text-sm font-semibold tracking-tight mb-2">Launch</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Production deployment, testing, monitoring, and post-launch support. You're live.</p>
<div className="mt-4 text-xs text-lime font-medium">Week 4 ✓</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 border-t border-white/[0.03] relative" id="testimonials">
<div className="max-w-6xl mx-auto px-5 lg:px-8">
<div className="text-center mb-16">
<div className="rv tag mb-5 mx-auto" style={{width: 'fit-content'}}>Testimonials</div>
<h2 className="rv text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          Trusted by<br/><span className="gradient-text">ambitious founders</span>
</h2>
</div>

<div className="rv flex flex-wrap items-center justify-center gap-8 sm:gap-14 mb-16">
<span className="text-lg font-bold tracking-tighter text-neutral-700 hover:text-neutral-400 transition-colors cursor-pointer">Silverbox</span>
<span className="text-lg font-bold tracking-tighter text-neutral-700 hover:text-neutral-400 transition-colors cursor-pointer">Align</span>
<span className="text-lg font-bold tracking-tighter text-neutral-700 hover:text-neutral-400 transition-colors cursor-pointer">Nextra</span>
<span className="text-lg font-bold tracking-tighter text-neutral-700 hover:text-neutral-400 transition-colors cursor-pointer">Flowbase</span>
<span className="text-lg font-bold tracking-tighter text-neutral-700 hover:text-neutral-400 transition-colors cursor-pointer">Stackwise</span>
<span className="text-lg font-bold tracking-tighter text-neutral-700 hover:text-neutral-400 transition-colors cursor-pointer">Orbis</span>
</div>

<div className="grid md:grid-cols-3 gap-3">
<div className="rv glass glass-hover rounded-2xl p-6">
<div className="flex gap-0.5 mb-4">
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#ABFF00'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#ABFF00'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#ABFF00'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#ABFF00'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#ABFF00'}} width="12"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-6 font-light">"They delivered an MVP that looked and felt like a mature product. Our investors couldn't believe it was built in 3 weeks."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold" style={{background: 'linear-gradient(135deg,rgba(171,255,0,0.15),rgba(171,255,0,0.05))', color: '#ABFF00'}}>AK</div>
<div>
<div className="text-xs font-medium">Alex Kim</div>
<div className="text-xs text-neutral-600">Founder, Silverbox</div>
</div>
</div>
</div>
<div className="rv glass glass-hover rounded-2xl p-6">
<div className="flex gap-0.5 mb-4">
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#ABFF00'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#ABFF00'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#ABFF00'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#ABFF00'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#ABFF00'}} width="12"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-6 font-light">"The design quality is world-class. They made our complex AI features feel effortless and beautiful. Best studio we've ever worked with."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold" style={{background: 'linear-gradient(135deg,rgba(139,92,246,0.15),rgba(59,130,246,0.05))', color: 'rgb(167,139,250)'}}>SR</div>
<div>
<div className="text-xs font-medium">Sarah Rodriguez</div>
<div className="text-xs text-neutral-600">CEO, Align</div>
</div>
</div>
</div>
<div className="rv glass glass-hover rounded-2xl p-6">
<div className="flex gap-0.5 mb-4">
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#ABFF00'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#ABFF00'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#ABFF00'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#ABFF00'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#ABFF00'}} width="12"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-6 font-light">"They don't just build — they think. Every decision was backed by real reasoning. It felt like having a co-founder, not a contractor."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold" style={{background: 'linear-gradient(135deg,rgba(6,182,212,0.15),rgba(20,184,166,0.05))', color: 'rgb(103,232,249)'}}>JM</div>
<div>
<div className="text-xs font-medium">James Mitchell</div>
<div className="text-xs text-neutral-600">CTO, Nextra</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 border-t border-white/[0.03] relative" id="contact">
<div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(171,255,0,0.025), transparent 60%)'}}></div>
<div className="relative max-w-3xl mx-auto px-5 lg:px-8 text-center">
<div className="rv-scale glass rounded-3xl p-10 sm:p-16 relative overflow-hidden">
<div className="absolute -top-20 -left-20 w-40 h-40 rounded-full blur-3xl" style={{background: 'rgba(171,255,0,0.03)'}}></div>
<div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl" style={{background: 'rgba(171,255,0,0.03)'}}></div>
<div className="relative">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-7" style={{background: 'rgba(171,255,0,0.08)', border: '1px solid rgba(171,255,0,0.12)'}}>
<iconify-icon height="22" icon="solar:chat-round-call-linear" style={{color: '#ABFF00'}} width="22"></iconify-icon>
</div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Ready to build<br/>something <span className="gradient-text">great</span>?
          </h2>
<p className="text-sm sm:text-base text-neutral-400 max-w-sm mx-auto mb-9 font-light">
            Book a free 30-minute discovery call. We'll explore your idea, scope, and how we can help bring it to life.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full btn-primary" href="mailto:hello@limegreen.studio">
<iconify-icon height="16" icon="solar:letter-linear" width="16"></iconify-icon>
              hello@limegreen.studio
            </a>
<a className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-full btn-ghost" href="#">
<iconify-icon height="16" icon="solar:calendar-linear" width="16"></iconify-icon>
              Book a call
            </a>
</div>
<div className="mt-8 flex items-center justify-center gap-5 flex-wrap">
<span className="flex items-center gap-1.5 text-xs text-neutral-500">
<iconify-icon height="13" icon="solar:check-circle-linear" style={{color: '#ABFF00'}} width="13"></iconify-icon>
              Free consultation
            </span>
<span className="flex items-center gap-1.5 text-xs text-neutral-500">
<iconify-icon height="13" icon="solar:check-circle-linear" style={{color: '#ABFF00'}} width="13"></iconify-icon>
              NDA ready
            </span>
<span className="flex items-center gap-1.5 text-xs text-neutral-500">
<iconify-icon height="13" icon="solar:check-circle-linear" style={{color: '#ABFF00'}} width="13"></iconify-icon>
              Reply in 24h
            </span>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/[0.03] pt-16 pb-10">
<div className="max-w-6xl mx-auto px-5 lg:px-8">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
<div className="sm:col-span-2 lg:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-7 h-7 rounded-lg flex items-center justify-center bg-lime">
<span className="font-bold text-xs tracking-tighter" style={{color: '#050505'}}>LG</span>
</div>
<span className="text-sm font-semibold tracking-tight">Lime Green</span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed max-w-xs mb-5 font-light">
            Design-led product studio crafting world-class mobile, AI, and SaaS experiences.
          </p>
<div className="flex gap-2">
<a className="w-8 h-8 rounded-lg glass flex items-center justify-center text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon height="15" icon="solar:chat-round-dots-linear" width="15"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-lg glass flex items-center justify-center text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon height="15" icon="solar:share-circle-linear" width="15"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-lg glass flex items-center justify-center text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon height="15" icon="solar:videocamera-record-linear" width="15"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Services</h4>
<ul className="space-y-2.5">
<li><a className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Mobile Development</a></li>
<li><a className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors" href="#">AI Products</a></li>
<li><a className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors" href="#">SaaS Platforms</a></li>
<li><a className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Product Design</a></li>
<li><a className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors" href="#">MVP Development</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Company</h4>
<ul className="space-y-2.5">
<li><a className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors" href="#">About</a></li>
<li><a className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors" href="#work">Work</a></li>
<li><a className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Blog</a></li>
<li><a className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Careers</a></li>
<li><a className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Connect</h4>
<ul className="space-y-2.5">
<li><a className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Twitter / X</a></li>
<li><a className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors" href="#">LinkedIn</a></li>
<li><a className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Dribbble</a></li>
<li><a className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors" href="#">GitHub</a></li>
</ul>
</div>
</div>
<div className="h-px w-full mb-8" style={{background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.04),transparent)'}}></div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-700">© 2025 Lime Green Studios. All rights reserved.</p>
<div className="flex gap-5">
<a className="text-xs text-neutral-700 hover:text-neutral-500 transition-colors" href="#">Privacy</a>
<a className="text-xs text-neutral-700 hover:text-neutral-500 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
