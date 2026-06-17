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



        import * as THREE from 'https://cdn.skypack.dev/three@0.136.0';
        import { gsap } from 'https://cdn.skypack.dev/gsap@3.12.2';
        import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap@3.12.2/ScrollTrigger';

        // --------------------------------------------------------
        // 1. THREE.JS: Abstract Topographic/Water Plane Animation
        // --------------------------------------------------------
        const canvasContainer = document.getElementById('webgl-container');
        const scene = new THREE.Scene();
        
        // Setup Camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 5, 20);
        camera.lookAt(0, 0, 0);

        // Setup Renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        canvasContainer.appendChild(renderer.domElement);

        // Setup Geometry (High-res plane for waves)
        const geometry = new THREE.PlaneGeometry(60, 40, 64, 64);
        
        // Minimalist Wireframe Material
        const material = new THREE.MeshBasicMaterial({ 
            color: 0xaaaaaa, 
            wireframe: true,
            transparent: true,
            opacity: 0.15
        });

        const plane = new THREE.Mesh(geometry, material);
        plane.rotation.x = -Math.PI / 2;
        scene.add(plane);

        // Store original vertices for animation
        const initialPositions = [];
        const positionAttribute = geometry.attributes.position;
        for (let i = 0; i < positionAttribute.count; i++) {
            initialPositions.push({
                x: positionAttribute.getX(i),
                y: positionAttribute.getY(i),
                z: positionAttribute.getZ(i)
            });
        }

        // Animation Loop
        const clock = new THREE.Clock();
        
        function animateThree() {
            requestAnimationFrame(animateThree);
            const time = clock.getElapsedTime();

            // Animate vertices to create a subtle flowing wave effect
            for (let i = 0; i < positionAttribute.count; i++) {
                const initZ = initialPositions[i].z;
                const initX = initialPositions[i].x;
                const initY = initialPositions[i].y;

                // Complex sine wave math for organic movement
                const zOffset = Math.sin(initX * 0.2 + time * 0.5) * 1.5 + 
                                Math.cos(initY * 0.2 + time * 0.4) * 1.5;
                
                positionAttribute.setZ(i, zOffset);
            }
            positionAttribute.needsUpdate = true;

            // Slowly rotate the entire plane
            plane.rotation.z = time * 0.02;

            renderer.render(scene, camera);
        }
        animateThree();

        // Handle Resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });


        // --------------------------------------------------------
        // 2. GSAP: Scroll & Intro Animations
        // --------------------------------------------------------
        gsap.registerPlugin(ScrollTrigger);

        // Initial Load Timeline
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.to(".js-nav", { autoAlpha: 1, duration: 0.1 })
          .from(".js-nav", { y: -20, duration: 1 })
          .from(".js-hero-img img", { scale: 1.3, duration: 2, ease: "power2.out" }, "-=1")
          .to(".js-hero-text", { autoAlpha: 1, duration: 0.1 }, "-=1.5")
          .from(".js-hero-text", { y: 100, duration: 1.5 }, "-=1.5")
          .to(".js-hero-subtext", { autoAlpha: 1, duration: 0.1 }, "-=1")
          .from(".js-hero-subtext", { y: 30, duration: 1 }, "-=1");

        // Standard Fade Up on Scroll
        gsap.utils.toArray('.js-scroll-fade-up').forEach(el => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                },
                y: 40,
                autoAlpha: 0,
                duration: 1.2,
                ease: "power2.out"
            });
        });

        // Project Cards Parallax & Stagger Reveal
        gsap.utils.toArray('.js-project-card').forEach(card => {
            // Card container reveal
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                },
                y: 60,
                autoAlpha: 0,
                duration: 1,
                ease: "power3.out"
            });

            // Image scrub parallax
            const img = card.querySelector('.js-parallax-img');
            gsap.to(img, {
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
                y: "20%",
                ease: "none"
            });
        });

        // Expertise Stagger
        gsap.from('.js-expertise-item', {
            scrollTrigger: {
                trigger: "#expertise",
                start: "top 70%",
            },
            y: 40,
            autoAlpha: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out"
        });

        // Footer Animations
        const footerTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top 70%",
            }
        });

        footerTl.from(".js-footer-text", { y: 50, autoAlpha: 0, duration: 1, ease: "power3.out" })
                .from(".js-footer-subtext", { y: 30, autoAlpha: 0, duration: 1, ease: "power2.out" }, "-=0.6")
                .from(".js-footer-bottom", { y: 20, autoAlpha: 0, duration: 1, ease: "power2.out" }, "-=0.6");

    
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
      

<nav className="fixed top-0 w-full z-50 px-6 py-6 mix-blend-difference text-white js-nav invisible-init">
<div className="max-w-screen-2xl mx-auto flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter uppercase z-10 hover:opacity-70 transition-opacity" href="#">
                STUDIOONISLAND
            </a>
<div className="hidden md:flex items-center space-x-10 text-sm font-light tracking-wide">
<a className="hover-line-link pb-1" href="#about">About</a>
<a className="hover-line-link pb-1" href="#projects">Projects</a>
<a className="hover-line-link pb-1" href="#expertise">Expertise</a>
<a className="hover-line-link pb-1" href="#contact">Contact</a>
</div>
<button className="md:hidden z-10 text-white hover:opacity-70 transition-opacity">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</nav>

<header className="relative h-screen w-full flex items-end justify-center pb-16 px-6 overflow-hidden bg-neutral-900">

<div id="webgl-container"></div>
<div className="absolute inset-0 w-full h-full z-0 js-hero-img">
<img alt="Modern Architecture" className="w-full h-full object-cover opacity-50 scale-110" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2075&amp;q=80"/>
<div className="bg-gradient-to-t from-black/80 via-black/20 to-black/40 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 w-full max-w-screen-2xl mx-auto text-white flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="overflow-hidden">
<h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-[0.9] js-hero-text invisible-init">
                    Contextual<br/>Architecture.
                </h1>
</div>
<div className="flex flex-col items-start md:items-end max-w-sm js-hero-subtext invisible-init">
<p className="text-base md:text-lg font-light text-neutral-300 md:text-right mb-8">
                    We craft spaces that respond to their environment, focusing on materiality, light, and enduring simplicity.
                </p>
<a className="group inline-flex items-center space-x-2 text-sm font-medium tracking-wide uppercase border border-white/30 rounded-full px-6 py-3 hover:bg-white hover:text-black transition-all duration-500" href="#projects">
<span>View Selected Works</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="py-32 md:py-48 px-6 bg-white overflow-hidden" id="about">
<div className="max-w-5xl mx-auto text-center js-scroll-fade-up">
<span className="block text-xs font-medium tracking-widest uppercase text-neutral-400 mb-8">The Studio</span>
<h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tighter text-neutral-800 leading-tight">
                Studio On Island is an architecture and interior design practice. We believe in an understated aesthetic, where form follows feeling and spaces are designed to quietly elevate everyday life.
            </h2>
</div>
</section>

<section className="py-24 px-6 bg-neutral-100/50" id="projects">
<div className="max-w-screen-2xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 js-scroll-fade-up">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter">Selected Works</h2>
<a className="hover-line-link text-sm font-medium text-neutral-600 pb-1 flex items-center gap-2" href="#">
                    All Projects <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-8 lg:gap-x-12">

<a className="group md:col-span-8 block cursor-pointer js-project-card" href="#">
<div className="overflow-hidden aspect-[4/3] bg-neutral-200 mb-6">
<img alt="Villa Tropical" className="w-full h-full object-cover scale-125 js-parallax-img origin-center" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="flex items-start justify-between js-project-text">
<div>
<h3 className="text-xl md:text-2xl font-light tracking-tight text-neutral-900 mb-1">Villa Atuh</h3>
<p className="text-sm font-light text-neutral-500">Residential / Nusa Penida</p>
</div>
<span className="text-xs font-medium tracking-widest text-neutral-400">2023</span>
</div>
</a>

<a className="group md:col-span-4 block cursor-pointer md:mt-32 js-project-card" href="#">
<div className="overflow-hidden aspect-[3/4] bg-neutral-200 mb-6">
<img alt="Urban Cafe" className="w-full h-full object-cover scale-125 js-parallax-img origin-center" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<div className="flex items-start justify-between js-project-text">
<div>
<h3 className="text-xl md:text-2xl font-light tracking-tight text-neutral-900 mb-1">Kinetic Cafe</h3>
<p className="text-sm font-light text-neutral-500">Commercial / Jakarta</p>
</div>
<span className="text-xs font-medium tracking-widest text-neutral-400">2022</span>
</div>
</a>

<a className="group md:col-span-5 block cursor-pointer js-project-card" href="#">
<div className="overflow-hidden aspect-square bg-neutral-200 mb-6">
<img alt="Modern Loft" className="w-full h-full object-cover scale-125 js-parallax-img origin-center" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<div className="flex items-start justify-between js-project-text">
<div>
<h3 className="text-xl md:text-2xl font-light tracking-tight text-neutral-900 mb-1">The Loft</h3>
<p className="text-sm font-light text-neutral-500">Interior / Bandung</p>
</div>
<span className="text-xs font-medium tracking-widest text-neutral-400">2023</span>
</div>
</a>

<a className="group md:col-span-7 block cursor-pointer md:-mt-24 js-project-card" href="#">
<div className="overflow-hidden aspect-[16/9] bg-neutral-200 mb-6">
<img alt="Resort Design" className="w-full h-full object-cover scale-125 js-parallax-img origin-center" src="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
</div>
<div className="flex items-start justify-between js-project-text">
<div>
<h3 className="text-xl md:text-2xl font-light tracking-tight text-neutral-900 mb-1">Uluwatu Retreat</h3>
<p className="text-sm font-light text-neutral-500">Hospitality / Bali</p>
</div>
<span className="text-xs font-medium tracking-widest text-neutral-400">2021</span>
</div>
</a>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-neutral-200 bg-white" id="expertise">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-4">
<h2 className="text-3xl md:text-5xl font-light tracking-tighter sticky top-32 js-scroll-fade-up">Our Expertise</h2>
</div>
<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

<div className="group js-expertise-item">
<iconify-icon className="text-neutral-400 mb-6 group-hover:text-neutral-900 transition-colors duration-500" icon="solar:home-angle-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight mb-4">Architecture</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">Comprehensive architectural design from concept to completion. We focus on structural integrity interwoven with aesthetic purity, ensuring each building belongs to its site.</p>
</div>

<div className="group js-expertise-item">
<iconify-icon className="text-neutral-400 mb-6 group-hover:text-neutral-900 transition-colors duration-500" icon="solar:sofa-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight mb-4">Interior Design</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">Crafting the inner experiences of spaces. Our interior approach emphasizes tactile materials, bespoke detailing, and a seamless flow from the exterior architecture.</p>
</div>

<div className="group js-expertise-item">
<iconify-icon className="text-neutral-400 mb-6 group-hover:text-neutral-900 transition-colors duration-500" icon="solar:leaf-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight mb-4">Master Planning</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">Strategic visioning for larger developments. We coordinate spatial organization, landscape integration, and environmental strategies for sustainable community growth.</p>
</div>

<div className="group js-expertise-item">
<iconify-icon className="text-neutral-400 mb-6 group-hover:text-neutral-900 transition-colors duration-500" icon="solar:pen-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight mb-4">Consultancy</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">Providing expert guidance on feasibility, design strategy, and project management to ensure client visions are realized with precision and quality.</p>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-950 text-white py-24 md:py-32 px-6 overflow-hidden" id="contact">
<div className="max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 md:mb-32">
<div className="js-footer-text">
<h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.9] mb-10">
                        Let's build<br/>together.
                    </h2>
<a className="group inline-flex items-center text-xl md:text-3xl font-light tracking-tight text-neutral-300 hover:text-white transition-colors" href="mailto:hello@studioonisland.com">
<span className="hover-line-link pb-2">hello@studioonisland.com</span>
<iconify-icon className="ml-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" width="32"></iconify-icon>
</a>
</div>
<div className="flex flex-col justify-end lg:text-right text-neutral-400 font-light text-sm space-y-6 js-footer-subtext">
<p className="max-w-xs lg:ml-auto">
                        Available for new commissions worldwide. Reach out to discuss your next project.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-10 border-t border-white/10 text-xs font-light text-neutral-500 js-footer-bottom">
<div className="col-span-1">
<span className="block font-medium tracking-widest uppercase text-neutral-300 mb-4">Office</span>
<p className="leading-relaxed">
                        Jl. Sunset Road No. 88<br/>
                        Seminyak, Bali<br/>
                        Indonesia 80361
                    </p>
</div>
<div className="col-span-1">
<span className="block font-medium tracking-widest uppercase text-neutral-300 mb-4">Socials</span>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors" href="#">Behance</a></li>
<li><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
</ul>
</div>
<div className="md:col-span-2 flex flex-col justify-end md:text-right mt-12 md:mt-0">
<a className="text-lg font-medium tracking-tighter uppercase text-white mb-2 hover:opacity-70 transition-opacity" href="#">STUDIOONISLAND</a>
<p>© 2024 Studio On Island. All rights reserved.</p>
</div>
</div>
</div>
</footer>



    </>
  );
}
