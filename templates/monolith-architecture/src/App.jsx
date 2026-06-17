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



        // ==========================================
        // THREE.JS SCENE (Same as before)
        // ==========================================
        const canvas = document.getElementById('three-canvas');
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x0a0a0b, 0.035);

        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 8);

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.2;

        const ambientLight = new THREE.AmbientLight(0x404050, 0.5);
        scene.add(ambientLight);

        const mainLight = new THREE.DirectionalLight(0xfff5ee, 2);
        mainLight.position.set(5, 8, 5);
        mainLight.castShadow = true;
        scene.add(mainLight);

        const accentLight = new THREE.PointLight(0xff4500, 3, 20);
        accentLight.position.set(-3, 2, 4);
        scene.add(accentLight);

        const rimLight = new THREE.PointLight(0x3366ff, 1.5, 15);
        rimLight.position.set(4, -2, 3);
        scene.add(rimLight);

        const fillLight = new THREE.DirectionalLight(0x8888aa, 0.8);
        fillLight.position.set(-5, -3, -5);
        scene.add(fillLight);

        const monolithGroup = new THREE.Group();
        scene.add(monolithGroup);

        const icoGeo = new THREE.IcosahedronGeometry(2, 1);
        const icoWire = new THREE.WireframeGeometry(icoGeo);
        const icoMat = new THREE.LineBasicMaterial({ color: 0xff4500, opacity: 0.35, transparent: true });
        const icoLines = new THREE.LineSegments(icoWire, icoMat);
        monolithGroup.add(icoLines);

        const dodGeo = new THREE.DodecahedronGeometry(1.3, 0);
        const dodWire = new THREE.WireframeGeometry(dodGeo);
        const dodMat = new THREE.LineBasicMaterial({ color: 0xaaaacc, opacity: 0.2, transparent: true });
        const dodLines = new THREE.LineSegments(dodWire, dodMat);
        monolithGroup.add(dodLines);

        const octGeo = new THREE.OctahedronGeometry(0.8, 0);
        const octMat = new THREE.MeshStandardMaterial({
            color: 0x1a1a2e,
            metalness: 0.9,
            roughness: 0.1,
            emissive: 0xff4500,
            emissiveIntensity: 0.05
        });
        const octMesh = new THREE.Mesh(octGeo, octMat);
        monolithGroup.add(octMesh);

        const ringGeo = new THREE.TorusGeometry(3, 0.015, 8, 64);
        const ringMat = new THREE.MeshStandardMaterial({ color: 0xff4500, emissive: 0xff4500, emissiveIntensity: 0.3, metalness: 1, roughness: 0.2 });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2;
        monolithGroup.add(ring);

        const ring2Geo = new THREE.TorusGeometry(3.5, 0.008, 8, 80);
        const ring2Mat = new THREE.MeshStandardMaterial({ color: 0x666688, metalness: 1, roughness: 0.3 });
        const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
        ring2.rotation.x = Math.PI / 3;
        ring2.rotation.y = Math.PI / 6;
        monolithGroup.add(ring2);

        const particleCount = 500;
        const particleGeo = new THREE.SphereGeometry(0.015, 4, 4);
        const particleMat = new THREE.MeshBasicMaterial({ color: 0x555566 });
        const instancedParticles = new THREE.InstancedMesh(particleGeo, particleMat, particleCount);

        const dummy = new THREE.Object3D();
        const particleData = [];

        for (let i = 0; i < particleCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 5 + Math.random() * 20;
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            dummy.position.set(x, y, z);
            const s = 0.5 + Math.random() * 2;
            dummy.scale.set(s, s, s);
            dummy.updateMatrix();
            instancedParticles.setMatrixAt(i, dummy.matrix);

            particleData.push({ x, y, z, speed: 0.0005 + Math.random() * 0.001, offset: Math.random() * Math.PI * 2 });
        }
        scene.add(instancedParticles);

        const debrisCount = 60;
        const debrisGeo = new THREE.BoxGeometry(0.08, 0.08, 0.08);
        const debrisMat = new THREE.MeshStandardMaterial({ color: 0x333344, metalness: 0.8, roughness: 0.3 });
        const instancedDebris = new THREE.InstancedMesh(debrisGeo, debrisMat, debrisCount);
        const debrisData = [];

        for (let i = 0; i < debrisCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = 4 + Math.random() * 8;
            const x = Math.cos(angle) * dist;
            const y = (Math.random() - 0.5) * 10;
            const z = Math.sin(angle) * dist;

            dummy.position.set(x, y, z);
            dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
            const s = 0.3 + Math.random() * 1.5;
            dummy.scale.set(s, s, s * 2);
            dummy.updateMatrix();
            instancedDebris.setMatrixAt(i, dummy.matrix);

            debrisData.push({ x, y, z, rotSpeed: 0.001 + Math.random() * 0.003, angle: Math.random() * Math.PI * 2 });
        }
        scene.add(instancedDebris);

        const gridHelper = new THREE.GridHelper(40, 40, 0x222233, 0x151520);
        gridHelper.position.y = -4;
        scene.add(gridHelper);

        let mouseX = 0, mouseY = 0;
        let targetMouseX = 0, targetMouseY = 0;

        document.addEventListener('mousemove', (e) => {
            targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
        });

        let scrollProgress = 0;
        window.addEventListener('scroll', () => {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            scrollProgress = window.scrollY / maxScroll;
        });

        const clock = new THREE.Clock();
        function animate() {
            requestAnimationFrame(animate);
            const time = clock.getElapsedTime();

            mouseX += (targetMouseX - mouseX) * 0.05;
            mouseY += (targetMouseY - mouseY) * 0.05;

            monolithGroup.rotation.y = time * 0.15 + mouseX * 0.3;
            monolithGroup.rotation.x = Math.sin(time * 0.1) * 0.1 + mouseY * 0.15;
            icoLines.rotation.y = -time * 0.08;
            icoLines.rotation.z = time * 0.05;
            dodLines.rotation.y = time * 0.12;
            dodLines.rotation.x = time * 0.07;
            octMesh.rotation.y = time * 0.2;
            octMesh.rotation.x = time * 0.15;
            ring.rotation.z = time * 0.1;
            ring2.rotation.z = -time * 0.07;
            ring2.rotation.x = Math.PI / 3 + time * 0.05;

            accentLight.position.x = Math.cos(time * 0.3) * 5;
            accentLight.position.z = Math.sin(time * 0.3) * 5;
            accentLight.position.y = Math.sin(time * 0.5) * 2;

            for (let i = 0; i < particleCount; i++) {
                const p = particleData[i];
                dummy.position.set(
                    p.x + Math.sin(time * p.speed * 100 + p.offset) * 0.3,
                    p.y + Math.cos(time * p.speed * 80 + p.offset) * 0.3,
                    p.z + Math.sin(time * p.speed * 60 + p.offset + 1) * 0.3
                );
                const s = 0.5 + Math.sin(time + p.offset) * 0.3;
                dummy.scale.set(s, s, s);
                dummy.updateMatrix();
                instancedParticles.setMatrixAt(i, dummy.matrix);
            }
            instancedParticles.instanceMatrix.needsUpdate = true;

            for (let i = 0; i < debrisCount; i++) {
                const d = debrisData[i];
                dummy.position.set(
                    d.x + Math.sin(time * 0.2 + d.angle) * 0.5,
                    d.y + Math.cos(time * 0.15 + d.angle) * 0.5,
                    d.z
                );
                dummy.rotation.set(time * d.rotSpeed * 50, time * d.rotSpeed * 30, time * d.rotSpeed * 40);
                const s = 0.3 + Math.sin(time * 0.5 + d.angle) * 0.15;
                dummy.scale.set(s, s, s * 2);
                dummy.updateMatrix();
                instancedDebris.setMatrixAt(i, dummy.matrix);
            }
            instancedDebris.instanceMatrix.needsUpdate = true;

            const targetFov = 60 + scrollProgress * 15;
            camera.fov += (targetFov - camera.fov) * 0.05;
            camera.updateProjectionMatrix();

            const duskProgress = Math.max(0, (scrollProgress - 0.7) / 0.3);
            const bgR = 0x0a / 255 * (1 - duskProgress) + 0x12 / 255 * duskProgress;
            const bgG = 0x0a / 255 * (1 - duskProgress) + 0x08 / 255 * duskProgress;
            const bgB = 0x0b / 255 * (1 - duskProgress) + 0x18 / 255 * duskProgress;
            scene.background = new THREE.Color(bgR, bgG, bgB);
            scene.fog.color.set(bgR, bgG, bgB);

            accentLight.intensity = 3 + duskProgress * 2;
            mainLight.intensity = 2 - duskProgress * 0.8;

            const pulse = 1 + Math.sin(time * 0.5) * 0.02;
            monolithGroup.scale.set(pulse, pulse, pulse);

            camera.position.x = mouseX * 0.5;
            camera.position.y = -mouseY * 0.3;
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // ==========================================
        // GSAP ANIMATIONS
        // ==========================================
        gsap.registerPlugin(ScrollTrigger);

        gsap.to('#hero-badge', { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' });
        gsap.to('#hero-title', { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power3.out' });
        gsap.to('#hero-sub', { opacity: 1, y: 0, duration: 1, delay: 0.7, ease: 'power3.out' });

        const processInner = document.getElementById('process-inner');
        const processCards = processInner.querySelectorAll('.process-card');

        gsap.to(processInner, {
            x: () => -(processInner.scrollWidth - window.innerWidth + 100),
            ease: 'none',
            scrollTrigger: {
                trigger: '#process',
                start: 'top top',
                end: () => '+=' + (processInner.scrollWidth - window.innerWidth + 200),
                scrub: 1,
                pin: false,
                invalidateOnRefresh: true
            }
        });

        processCards.forEach((card, i) => {
            gsap.from(card, {
                opacity: 0,
                y: 40,
                scale: 0.95,
                scrollTrigger: {
                    trigger: '#process',
                    start: `top+=${i * 150} center`,
                    end: `top+=${i * 150 + 300} center`,
                    scrub: 1
                }
            });
        });

        // Gallery Items Animation
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach((item, i) => {
            gsap.from(item, {
                opacity: 0,
                y: 40,
                duration: 0.6,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 90%',
                    end: 'top 70%',
                    scrub: 0.5
                }
            });
        });

        // Testimonials Animation
        gsap.from('#testimonials .grid > div', {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.8,
            scrollTrigger: {
                trigger: '#testimonials',
                start: 'top 80%',
            }
        });

        // Pricing Animation
        gsap.from('#pricing .grid > div', {
            opacity: 0,
            y: 40,
            stagger: 0.2,
            duration: 0.8,
            scrollTrigger: {
                trigger: '#pricing',
                start: 'top 75%',
            }
        });

        gsap.from('#contact form', {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: '#contact',
                start: 'top 70%',
                end: 'top 40%',
                scrub: 0.5
            }
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
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
      

<canvas id="three-canvas" style={{position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', zIndex: '0'}}></canvas>

<div style={{position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', pointerEvents: 'none', zIndex: '1', background: 'radial-gradient(ellipse at center, transparent 50%, rgba(10,10,11,0.6) 100%)'}}></div>

<div id="scroll-container" style={{position: 'relative', zIndex: '2'}}>

<nav style={{position: 'fixed', top: '0', left: '0', right: '0', zIndex: '50', backdropFilter: 'blur(20px)', background: 'rgba(10, 10, 11, 0.4)', borderBottom: '1px solid rgba(255,255,255,0.06)'}}>
<div className="max-w-7xl mx-auto flex items-center justify-between" style={{padding: '1.25rem 2rem'}}>
<div className="tracking-tighter" style={{fontFamily: '\'Space Grotesk\', sans-serif', fontWeight: '600', letterSpacing: '-0.05em', fontSize: '1.25rem'}}>
                    MONOLITH
                </div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs" href="#hero" onmouseout="this.style.color='rgba(232,230,227,0.5)'" onmouseover="this.style.color='#e8e6e3'" style={{color: 'rgba(232,230,227,0.5)', transition: 'color 0.3s', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '500'}}>Origin</a>
<a className="text-xs" href="#process" onmouseout="this.style.color='rgba(232,230,227,0.5)'" onmouseover="this.style.color='#e8e6e3'" style={{color: 'rgba(232,230,227,0.5)', transition: 'color 0.3s', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '500'}}>Process</a>
<a className="text-xs" href="#gallery" onmouseout="this.style.color='rgba(232,230,227,0.5)'" onmouseover="this.style.color='#e8e6e3'" style={{color: 'rgba(232,230,227,0.5)', transition: 'color 0.3s', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '500'}}>Work</a>
<a className="text-xs" href="#pricing" onmouseout="this.style.color='rgba(232,230,227,0.5)'" onmouseover="this.style.color='#e8e6e3'" style={{color: 'rgba(232,230,227,0.5)', transition: 'color 0.3s', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '500'}}>Pricing</a>
</div>
<a className="hidden sm:block" href="#contact" onmouseout="this.style.background='#ff4500'" onmouseover="this.style.background='#ff6633'" style={{background: '#ff4500', color: '#0a0a0b', padding: '0.5rem 1.25rem', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase', transition: 'all 0.3s', textDecoration: 'none'}}>
                    Start Project
                </a>
</div>
</nav>

<section id="hero" style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
<div className="text-center" style={{maxWidth: '900px', padding: '0 2rem'}}>
<div id="hero-badge" style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 1rem', border: '1px solid rgba(255, 69, 0, 0.3)', marginBottom: '2rem', opacity: '0', transform: 'translateY(20px)'}}>
<div style={{width: '6px', height: '6px', background: '#ff4500', borderRadius: '50', animation: 'pulse 2s infinite'}}></div>
<span className="text-xs" style={{color: 'rgba(232,230,227,0.7)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '500'}}>Now Accepting Projects</span>
</div>
<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight" id="hero-title" style={{fontFamily: '\'Space Grotesk\', sans-serif', fontWeight: '300', lineHeight: '0.95', letterSpacing: '-0.04em', opacity: '0', transform: 'translateY(40px)'}}>
                    Defining<br/>
<span style={{fontWeight: '600'}}>Digital</span>
<span style={{color: '#ff4500', fontWeight: '600'}}>Form</span>
</h1>
<p className="text-sm sm:text-base" id="hero-sub" style={{color: 'rgba(232, 230, 227, 0.45)', maxWidth: '480px', margin: '2rem auto 0', lineHeight: '1.7', fontWeight: '300', opacity: '0', transform: 'translateY(30px)'}}>
                    We craft immersive digital experiences at the intersection of architectural thinking and computational design.
                </p>
</div>

<div style={{position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem'}}>
<div style={{width: '1px', height: '48px', background: 'linear-gradient(to bottom, transparent, rgba(255,69,0,0.5), transparent)', animation: 'scrollPulse 2s infinite'}}></div>
</div>
</section>

<section id="process" style={{minHeight: '300vh', position: 'relative'}}>
<div style={{position: 'sticky', top: '0', height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden'}}>
<div id="process-inner" style={{display: 'flex', gap: '4rem', padding: '0 10vw', willChange: 'transform'}}>

<div style={{minWidth: '40vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', flexShrink: '0'}}>
<span className="text-xs" style={{color: '#ff4500', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: '600', marginBottom: '1.5rem'}}>Our Process</span>
<h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight" style={{fontFamily: '\'Space Grotesk\', sans-serif', fontWeight: '300', letterSpacing: '-0.03em', lineHeight: '1.1'}}>
                            From <span style={{fontWeight: '600'}}>concept</span><br/>to <span style={{fontWeight: '600', color: '#ff4500'}}>construct</span>
</h2>
</div>

<div className="process-card" style={{minWidth: '340px', maxWidth: '340px', flexShrink: '0', background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(40px)', border: '1px solid rgba(255,255,255,0.06)', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
<div>
<div style={{width: '48px', height: '48px', border: '1px solid rgba(255,69,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem'}}>
<iconify-icon icon="solar:compass-linear" style={{color: '#ff4500'}} width="22"></iconify-icon>
</div>
<div className="text-xs" style={{color: 'rgba(232,230,227,0.3)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '500', marginBottom: '1rem'}}>Phase 01</div>
<h3 className="text-xl tracking-tight" style={{fontFamily: '\'Space Grotesk\', sans-serif', fontWeight: '500', letterSpacing: '-0.02em', marginBottom: '1rem'}}>Discovery</h3>
<p className="text-xs" style={{color: 'rgba(232,230,227,0.4)', lineHeight: '1.8', fontWeight: '300'}}>Mapping constraints, identifying opportunities, and establishing the architectural brief.</p>
</div>
</div>
<div className="process-card" style={{minWidth: '340px', maxWidth: '340px', flexShrink: '0', background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(40px)', border: '1px solid rgba(255,255,255,0.06)', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
<div>
<div style={{width: '48px', height: '48px', border: '1px solid rgba(255,69,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem'}}>
<iconify-icon icon="solar:ruler-angular-linear" style={{color: '#ff4500'}} width="22"></iconify-icon>
</div>
<div className="text-xs" style={{color: 'rgba(232,230,227,0.3)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '500', marginBottom: '1rem'}}>Phase 02</div>
<h3 className="text-xl tracking-tight" style={{fontFamily: '\'Space Grotesk\', sans-serif', fontWeight: '500', letterSpacing: '-0.02em', marginBottom: '1rem'}}>Design</h3>
<p className="text-xs" style={{color: 'rgba(232,230,227,0.4)', lineHeight: '1.8', fontWeight: '300'}}>Iterative prototyping through wireframes, 3D spatial mapping, and high-fidelity visual systems.</p>
</div>
</div>
<div className="process-card" style={{minWidth: '340px', maxWidth: '340px', flexShrink: '0', background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(40px)', border: '1px solid rgba(255,255,255,0.06)', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
<div>
<div style={{width: '48px', height: '48px', border: '1px solid rgba(255,69,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem'}}>
<iconify-icon icon="solar:code-square-linear" style={{color: '#ff4500'}} width="22"></iconify-icon>
</div>
<div className="text-xs" style={{color: 'rgba(232,230,227,0.3)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '500', marginBottom: '1rem'}}>Phase 03</div>
<h3 className="text-xl tracking-tight" style={{fontFamily: '\'Space Grotesk\', sans-serif', fontWeight: '500', letterSpacing: '-0.02em', marginBottom: '1rem'}}>Engineer</h3>
<p className="text-xs" style={{color: 'rgba(232,230,227,0.4)', lineHeight: '1.8', fontWeight: '300'}}>Precision engineering with modern frameworks. Every interaction crafted for performance and delight.</p>
</div>
</div>
</div>
</div>
</section>

<section id="gallery" style={{minHeight: '100vh', padding: '6rem 2rem'}}>
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<span className="text-xs" style={{color: '#ff4500', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: '600', display: 'block', marginBottom: '1rem'}}>Selected Work</span>
<h2 className="text-4xl sm:text-5xl tracking-tight" style={{fontFamily: '\'Space Grotesk\', sans-serif', fontWeight: '300', letterSpacing: '-0.03em', lineHeight: '1.1'}}>
                            The Digital <span style={{fontWeight: '600', color: '#ff4500'}}>Vault</span>
</h2>
</div>
<div className="text-xs sm:text-sm max-w-sm" style={{color: 'rgba(232,230,227,0.5)', fontWeight: '300', lineHeight: '1.6'}}>
                        A curated selection of architectural interfaces and digital environments built for forward-thinking clients.
                    </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 auto-rows-[300px]" id="gallery-grid">

<div className="gallery-item group lg:col-span-4 md:col-span-2 relative overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-[#ff4500]/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-[#ff4500]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center overflow-hidden">

<div className="w-[80%] h-[70%] bg-[#1a1a1a] border border-white/10 rounded-lg shadow-2xl transform translate-y-12 group-hover:translate-y-8 group-hover:scale-[1.02] transition-all duration-700 p-6 flex flex-col gap-4">
<div className="flex items-center gap-2 border-b border-white/5 pb-4">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="flex-1 grid grid-cols-3 gap-4">
<div className="col-span-1 bg-white/5 rounded h-full animate-pulse"></div>
<div className="col-span-2 flex flex-col gap-3">
<div className="h-8 w-1/2 bg-white/5 rounded"></div>
<div className="h-4 w-full bg-white/5 rounded"></div>
<div className="h-32 w-full bg-white/5 rounded mt-auto"></div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0a0a0b] to-transparent">
<div className="flex justify-between items-end">
<div>
<h3 className="font-['Space_Grotesk'] text-2xl font-medium tracking-tight mb-1">Zenith Tower</h3>
<p className="text-xs text-white/40 uppercase tracking-widest font-medium">Immersive Architecture WebGL</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#ff4500] group-hover:border-[#ff4500] group-hover:text-black transition-all duration-300">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="gallery-item group lg:col-span-2 md:col-span-1 relative overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-[#ff4500]/30 transition-all duration-500">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 rounded-full border border-[#ff4500]/30 flex items-center justify-center group-hover:scale-125 transition-transform duration-700">
<div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center animate-[spin_10s_linear_infinite]">
<div className="w-1 h-1 bg-[#ff4500] rounded-full absolute -top-1"></div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<h3 className="font-['Space_Grotesk'] text-xl font-medium tracking-tight mb-1">Orbital Labs</h3>
<p className="text-xs text-white/40 uppercase tracking-widest font-medium">Identity System</p>
</div>
</div>

<div className="gallery-item group lg:col-span-2 md:col-span-1 relative overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-[#ff4500]/30 transition-all duration-500">
<div className="absolute inset-0 flex items-center justify-center">

<div className="grid grid-cols-4 gap-2 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
<div className="w-8 h-8 border border-white/20"></div><div className="w-8 h-8 border border-white/20 bg-[#ff4500]/20"></div><div className="w-8 h-8 border border-white/20"></div><div className="w-8 h-8 border border-white/20"></div>
<div className="w-8 h-8 border border-white/20"></div><div className="w-8 h-8 border border-white/20"></div><div className="w-8 h-8 border border-white/20 bg-white/10"></div><div className="w-8 h-8 border border-white/20"></div>
<div className="w-8 h-8 border border-white/20 bg-white/10"></div><div className="w-8 h-8 border border-white/20"></div><div className="w-8 h-8 border border-white/20"></div><div className="w-8 h-8 border border-white/20"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<h3 className="font-['Space_Grotesk'] text-xl font-medium tracking-tight mb-1">Flux Platform</h3>
<p className="text-xs text-white/40 uppercase tracking-widest font-medium">Fintech Dashboard</p>
</div>
</div>

<div className="gallery-item group lg:col-span-2 md:col-span-1 relative overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-[#ff4500]/30 transition-all duration-500">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent group-hover:from-[#ff4500]/10 transition-colors duration-500"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<iconify-icon className="text-white/20 group-hover:text-[#ff4500] transition-colors duration-500" icon="solar:gallery-wide-linear" width="64"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<h3 className="font-['Space_Grotesk'] text-xl font-medium tracking-tight mb-1">Prism Gallery</h3>
<p className="text-xs text-white/40 uppercase tracking-widest font-medium">Art Marketplace</p>
</div>
</div>

<div className="gallery-item group lg:col-span-2 md:col-span-1 relative overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-[#ff4500]/30 transition-all duration-500">
<div className="absolute inset-0 flex items-center justify-center gap-1 opacity-40 group-hover:gap-2 transition-all duration-500">
<div className="w-2 h-20 bg-white/20 rounded-full"></div>
<div className="w-2 h-32 bg-[#ff4500]/60 rounded-full"></div>
<div className="w-2 h-16 bg-white/20 rounded-full"></div>
<div className="w-2 h-24 bg-white/10 rounded-full"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<h3 className="font-['Space_Grotesk'] text-xl font-medium tracking-tight mb-1">Resonance</h3>
<p className="text-xs text-white/40 uppercase tracking-widest font-medium">Audio Interface</p>
</div>
</div>
</div>
</div>
</section>

<section id="testimonials" style={{padding: '6rem 2rem', borderTop: '1px solid rgba(255,255,255,0.04)'}}>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="text-xs" style={{color: '#ff4500', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: '600'}}>Client Voices</span>
<h2 className="text-3xl sm:text-4xl mt-4 font-['Space_Grotesk'] tracking-tight">Trusted by <span className="font-semibold text-white">Visionaries</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.06] hover:border-white/10 transition-colors duration-300">
<div className="flex gap-1 mb-6 text-[#ff4500]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-white/70 mb-8 font-light">
                            "Monolith translated our complex architectural data into a seamless digital experience. The precision in their code matches the precision of our buildings."
                        </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold font-['Space_Grotesk']">AS</div>
<div>
<div className="text-sm font-medium text-white">Alex Stanton</div>
<div className="text-xs text-white/40">CTO, Zenith Structures</div>
</div>
</div>
</div>

<div className="p-8 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.06] hover:border-white/10 transition-colors duration-300">
<div className="flex gap-1 mb-6 text-[#ff4500]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-white/70 mb-8 font-light">
                            "They don't just build websites; they build systems. The scalability of the Orbital Labs platform has been instrumental in our Series B funding."
                        </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold font-['Space_Grotesk']">EL</div>
<div>
<div className="text-sm font-medium text-white">Elena Liu</div>
<div className="text-xs text-white/40">Founder, Orbital</div>
</div>
</div>
</div>

<div className="p-8 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.06] hover:border-white/10 transition-colors duration-300">
<div className="flex gap-1 mb-6 text-[#ff4500]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-white/70 mb-8 font-light">
                            "A rare combination of aesthetic sensibility and technical rigor. The 3D integration is performant across all devices, which is no small feat."
                        </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold font-['Space_Grotesk']">MR</div>
<div>
<div className="text-sm font-medium text-white">Marcus Reed</div>
<div className="text-xs text-white/40">Director, Flux Arts</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section id="pricing" style={{padding: '6rem 2rem', position: 'relative'}}>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="text-xs" style={{color: '#ff4500', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: '600'}}>Investment</span>
<h2 className="text-3xl sm:text-4xl mt-4 font-['Space_Grotesk'] tracking-tight">Engagement <span className="font-semibold text-white">Models</span></h2>
<p className="text-sm text-white/40 mt-4 max-w-lg mx-auto font-light">Transparent pricing structures designed for projects of varying complexity and scale.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">

<div className="p-8 bg-[#0a0a0b] border border-white/[0.06] relative group hover:border-white/20 transition-all duration-300">
<h3 className="font-['Space_Grotesk'] text-xl font-medium text-white mb-2">Protocol</h3>
<div className="text-xs text-white/40 mb-6 uppercase tracking-wider font-medium">For MVPs &amp; Startups</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-3xl font-semibold tracking-tight">$15k</span>
<span className="text-sm text-white/40">/ project</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-white/70 font-light"><iconify-icon className="text-[#ff4500]" icon="solar:check-circle-linear"></iconify-icon> Strategy Workshop</li>
<li className="flex items-center gap-3 text-sm text-white/70 font-light"><iconify-icon className="text-[#ff4500]" icon="solar:check-circle-linear"></iconify-icon> Core Identity System</li>
<li className="flex items-center gap-3 text-sm text-white/70 font-light"><iconify-icon className="text-[#ff4500]" icon="solar:check-circle-linear"></iconify-icon> 5-Page Marketing Site</li>
<li className="flex items-center gap-3 text-sm text-white/70 font-light"><iconify-icon className="text-[#ff4500]" icon="solar:check-circle-linear"></iconify-icon> CMS Integration</li>
<li className="flex items-center gap-3 text-sm text-white/30 font-light line-through"><iconify-icon icon="solar:close-circle-linear"></iconify-icon> 3D/WebGL Interactions</li>
</ul>
<a className="block w-full py-3 px-4 text-center text-xs font-bold uppercase tracking-widest border border-white/10 hover:bg-white/5 transition-colors text-white" href="#contact">Inquire</a>
</div>

<div className="p-8 bg-[#0f0f10] border border-[#ff4500]/30 relative shadow-[0_0_30px_rgba(255,69,0,0.1)] transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ff4500] text-black text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full">Most Popular</div>
<h3 className="font-['Space_Grotesk'] text-xl font-medium text-white mb-2">Construct</h3>
<div className="text-xs text-white/40 mb-6 uppercase tracking-wider font-medium">For Growing Brands</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-3xl font-semibold tracking-tight">$35k</span>
<span className="text-sm text-white/40">/ project</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-white/70 font-light"><iconify-icon className="text-[#ff4500]" icon="solar:check-circle-linear"></iconify-icon> Full Brand Discovery</li>
<li className="flex items-center gap-3 text-sm text-white/70 font-light"><iconify-icon className="text-[#ff4500]" icon="solar:check-circle-linear"></iconify-icon> Advanced Design System</li>
<li className="flex items-center gap-3 text-sm text-white/70 font-light"><iconify-icon className="text-[#ff4500]" icon="solar:check-circle-linear"></iconify-icon> Full-Scale Platform</li>
<li className="flex items-center gap-3 text-sm text-white/70 font-light"><iconify-icon className="text-[#ff4500]" icon="solar:check-circle-linear"></iconify-icon> WebGL &amp; Micro-interactions</li>
<li className="flex items-center gap-3 text-sm text-white/70 font-light"><iconify-icon className="text-[#ff4500]" icon="solar:check-circle-linear"></iconify-icon> SEO &amp; Performance Audit</li>
</ul>
<a className="block w-full py-3 px-4 text-center text-xs font-bold uppercase tracking-widest bg-[#ff4500] text-black hover:bg-[#ff6633] transition-colors" href="#contact">Select Plan</a>
</div>

<div className="p-8 bg-[#0a0a0b] border border-white/[0.06] relative group hover:border-white/20 transition-all duration-300">
<h3 className="font-['Space_Grotesk'] text-xl font-medium text-white mb-2">Monolith</h3>
<div className="text-xs text-white/40 mb-6 uppercase tracking-wider font-medium">For Global Scale</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-3xl font-semibold tracking-tight">Custom</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-white/70 font-light"><iconify-icon className="text-[#ff4500]" icon="solar:check-circle-linear"></iconify-icon> Dedicated Design Team</li>
<li className="flex items-center gap-3 text-sm text-white/70 font-light"><iconify-icon className="text-[#ff4500]" icon="solar:check-circle-linear"></iconify-icon> Enterprise Architecture</li>
<li className="flex items-center gap-3 text-sm text-white/70 font-light"><iconify-icon className="text-[#ff4500]" icon="solar:check-circle-linear"></iconify-icon> Custom 3D Environments</li>
<li className="flex items-center gap-3 text-sm text-white/70 font-light"><iconify-icon className="text-[#ff4500]" icon="solar:check-circle-linear"></iconify-icon> SLA &amp; Priority Support</li>
<li className="flex items-center gap-3 text-sm text-white/70 font-light"><iconify-icon className="text-[#ff4500]" icon="solar:check-circle-linear"></iconify-icon> Quarterly Strategy Reviews</li>
</ul>
<a className="block w-full py-3 px-4 text-center text-xs font-bold uppercase tracking-widest border border-white/10 hover:bg-white/5 transition-colors text-white" href="#contact">Contact Sales</a>
</div>
</div>
</div>
</section>

<section id="contact" style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '6rem 2rem'}}>
<div style={{maxWidth: '680px', width: '100%'}}>
<div className="text-center" style={{marginBottom: '3rem'}}>
<span className="text-xs" style={{color: '#ff4500', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: '600', display: 'block', marginBottom: '1.5rem'}}>Start a Project</span>
<h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight" style={{fontFamily: '\'Space Grotesk\', sans-serif', fontWeight: '300', letterSpacing: '-0.03em', lineHeight: '1.1'}}>
                        Let's build<br/><span style={{fontWeight: '600', color: '#ff4500'}}>together</span>
</h2>
<p className="text-sm" style={{color: 'rgba(232,230,227,0.4)', maxWidth: '400px', margin: '1.5rem auto 0', lineHeight: '1.7', fontWeight: '300'}}>
                        Have a project in mind? We'd love to hear about it. Fill out the form below and we'll get back within 24 hours.
                    </p>
</div>
<form style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="text-xs" style={{color: 'rgba(232,230,227,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '500', display: 'block', marginBottom: '0.5rem'}}>Name</label>
<input onblur="this.style.borderColor='rgba(255,255,255,0.08)'" onfocus="this.style.borderColor='rgba(255,69,0,0.5)'" placeholder="Your name" style={{width: '100%', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '0.875rem 1rem', color: '#e8e6e3', fontFamily: '\'Inter\', sans-serif', fontSize: '0.875rem', outline: 'none', transition: 'border-color 0.3s', boxSizing: 'border-box'}} type="text"/>
</div>
<div>
<label className="text-xs" style={{color: 'rgba(232,230,227,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '500', display: 'block', marginBottom: '0.5rem'}}>Email</label>
<input onblur="this.style.borderColor='rgba(255,255,255,0.08)'" onfocus="this.style.borderColor='rgba(255,69,0,0.5)'" placeholder="hello@company.com" style={{width: '100%', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '0.875rem 1rem', color: '#e8e6e3', fontFamily: '\'Inter\', sans-serif', fontSize: '0.875rem', outline: 'none', transition: 'border-color 0.3s', boxSizing: 'border-box'}} type="email"/>
</div>
</div>
<div>
<label className="text-xs" style={{color: 'rgba(232,230,227,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '500', display: 'block', marginBottom: '0.5rem'}}>Project Type</label>
<select onblur="this.style.borderColor='rgba(255,255,255,0.08)'" onfocus="this.style.borderColor='rgba(255,69,0,0.5)'" style={{width: '100%', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '0.875rem 1rem', color: 'rgba(232,230,227,0.5)', fontFamily: '\'Inter\', sans-serif', fontSize: '0.875rem', outline: 'none', transition: 'border-color 0.3s', appearance: 'none', cursor: 'pointer', boxSizing: 'border-box'}}>
<option value="">Select a service</option>
<option value="web">Web Experience</option>
<option value="brand">Brand System</option>
<option value="product">Product Design</option>
<option value="3d">3D / Interactive</option>
</select>
</div>
<div>
<label className="text-xs" style={{color: 'rgba(232,230,227,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '500', display: 'block', marginBottom: '0.5rem'}}>Message</label>
<textarea onblur="this.style.borderColor='rgba(255,255,255,0.08)'" onfocus="this.style.borderColor='rgba(255,69,0,0.5)'" placeholder="Tell us about your vision..." rows="4" style={{width: '100%', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '0.875rem 1rem', color: '#e8e6e3', fontFamily: '\'Inter\', sans-serif', fontSize: '0.875rem', outline: 'none', transition: 'border-color 0.3s', resize: 'vertical', boxSizing: 'border-box'}}></textarea>
</div>
<button onmouseout="this.style.background='#ff4500'" onmouseover="this.style.background='#ff6633'" style={{width: '100%', background: '#ff4500', color: '#0a0a0b', padding: '1rem', fontFamily: '\'Inter\', sans-serif', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}} type="submit">
                        Send Message
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</form>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-6" style={{marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.06)'}}>
<div className="text-center sm:text-left">
<div className="text-xs" style={{color: 'rgba(232,230,227,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '500', marginBottom: '0.5rem'}}>Email</div>
<div className="text-xs" style={{color: 'rgba(232,230,227,0.7)'}}>hello@monolith.studio</div>
</div>
<div className="text-center sm:text-left">
<div className="text-xs" style={{color: 'rgba(232,230,227,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '500', marginBottom: '0.5rem'}}>Location</div>
<div className="text-xs" style={{color: 'rgba(232,230,227,0.7)'}}>New York · London</div>
</div>
<div className="text-center sm:text-left">
<div className="text-xs" style={{color: 'rgba(232,230,227,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '500', marginBottom: '0.5rem'}}>Socials</div>
<div className="sm:justify-start" style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
<iconify-icon icon="solar:link-circle-linear" onmouseout="this.style.color='rgba(232,230,227,0.5)'" onmouseover="this.style.color='#ff4500'" style={{color: 'rgba(232,230,227,0.5)', cursor: 'pointer', transition: 'color 0.3s'}} width="18"></iconify-icon>
<iconify-icon icon="solar:letter-linear" onmouseout="this.style.color='rgba(232,230,227,0.5)'" onmouseover="this.style.color='#ff4500'" style={{color: 'rgba(232,230,227,0.5)', cursor: 'pointer', transition: 'color 0.3s'}} width="18"></iconify-icon>
<iconify-icon icon="solar:share-circle-linear" onmouseout="this.style.color='rgba(232,230,227,0.5)'" onmouseover="this.style.color='#ff4500'" style={{color: 'rgba(232,230,227,0.5)', cursor: 'pointer', transition: 'color 0.3s'}} width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<footer style={{padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.04)'}}>
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="text-sm tracking-tighter" style={{fontFamily: '\'Space Grotesk\', sans-serif', fontWeight: '600', letterSpacing: '-0.05em'}}>MONOLITH</div>
<div className="text-xs" style={{color: 'rgba(232,230,227,0.25)'}}>© 2025 Monolith Studio. All rights reserved.</div>
</div>
</footer>
</div>
<style>
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
        }
        @keyframes scrollPulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
        }
        * { scrollbar-width: thin; scrollbar-color: rgba(255,69,0,0.3) transparent; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,69,0,0.3); }
        ::selection { background: rgba(255,69,0,0.3); color: #e8e6e3; }
        html { scroll-behavior: smooth; }
        select option { background: #1a1a1b; color: #e8e6e3; }
    </style>


    </>
  );
}
