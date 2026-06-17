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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal, .stagger-container').forEach((el) => {
                observer.observe(el);
            });
        });
    


        const container = document.getElementById('webgl-container');
        
        // Scene setup
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x040604, 0.018);
        
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 100);
        camera.position.set(0, 0, 35);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Generate dynamic glowing particle texture
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const context = canvas.getContext('2d');
        const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(205, 255, 205, 1)');
        gradient.addColorStop(0.2, 'rgba(205, 255, 205, 0.8)');
        gradient.addColorStop(1, 'rgba(205, 255, 205, 0)');
        context.fillStyle = gradient;
        context.fillRect(0, 0, 32, 32);
        const particleTexture = new THREE.CanvasTexture(canvas);

        // Main Blob Group
        const blobGroup = new THREE.Group();
        scene.add(blobGroup);

        // High-density Icosahedron for an organic/complex network look
        const geometry = new THREE.IcosahedronGeometry(14, 16); 
        
        // Faint structural wireframe
        const wireMaterial = new THREE.MeshBasicMaterial({
            color: 0xCDFFCD,
            wireframe: true,
            transparent: true,
            opacity: 0.015,
            blending: THREE.AdditiveBlending
        });
        const wireMesh = new THREE.Mesh(geometry, wireMaterial);
        blobGroup.add(wireMesh);

        // Glowing nodes/points
        const pointsMaterial = new THREE.PointsMaterial({
            color: 0xCDFFCD,
            size: 0.25,
            map: particleTexture,
            transparent: true,
            opacity: 0.6,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });
        const pointsMesh = new THREE.Points(geometry, pointsMaterial);
        blobGroup.add(pointsMesh);

        // Cache original vertices for morphing animation
        const positions = geometry.attributes.position;
        const originalPositions = new Float32Array(positions.count * 3);
        for(let i = 0; i < positions.count; i++) {
            originalPositions[i*3] = positions.getX(i);
            originalPositions[i*3+1] = positions.getY(i);
            originalPositions[i*3+2] = positions.getZ(i);
        }

        // Ambient floating dust particles
        const dustGeometry = new THREE.BufferGeometry();
        const dustCount = 2000;
        const dustPositions = new Float32Array(dustCount * 3);
        for(let i = 0; i < dustCount; i++) {
            dustPositions[i*3] = (Math.random() - 0.5) * 120; // x
            dustPositions[i*3+1] = (Math.random() - 0.5) * 120; // y
            dustPositions[i*3+2] = (Math.random() - 0.5) * 80 - 10; // z
        }
        dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
        const dustMaterial = new THREE.PointsMaterial({
            color: 0xCDFFCD,
            size: 0.15,
            map: particleTexture,
            transparent: true,
            opacity: 0.25,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });
        const dust = new THREE.Points(dustGeometry, dustMaterial);
        scene.add(dust);

        // Animation state
        const clock = new THREE.Clock();
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        // Interactive mouse tracking
        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - window.innerWidth / 2) * 0.002;
            mouseY = (event.clientY - window.innerHeight / 2) * 0.002;
        });

        function animate() {
            requestAnimationFrame(animate);
            const time = clock.getElapsedTime() * 0.25;

            targetX = mouseX;
            targetY = mouseY;
            
            // Smoothly rotate the main network structure
            blobGroup.rotation.y += 0.0015;
            blobGroup.rotation.x += 0.0008;
            
            // Subtle parallax effect on the blob
            blobGroup.position.x += (targetX * 6 - blobGroup.position.x) * 0.05;
            blobGroup.position.y += (-targetY * 6 - blobGroup.position.y) * 0.05;

            // Slowly drift ambient dust
            dust.rotation.y += 0.0004;
            dust.rotation.x += 0.0002;

            // Mathematical morphing of the network nodes
            for (let i = 0; i < positions.count; i++) {
                const ox = originalPositions[i*3];
                const oy = originalPositions[i*3+1];
                const oz = originalPositions[i*3+2];
                
                // 3D Sine Wave interference pattern to simulate organic pulsing
                const noise = Math.sin(ox * 0.2 + time) +
                              Math.cos(oy * 0.2 + time * 1.2) +
                              Math.sin(oz * 0.2 + time * 0.8);
                
                // Directional vector
                const len = Math.sqrt(ox*ox + oy*oy + oz*oz);
                const nx = ox / len;
                const ny = oy / len;
                const nz = oz / len;

                // Displacement scale
                const displacement = noise * 1.5;
                
                positions.setXYZ(
                    i,
                    ox + nx * displacement,
                    oy + ny * displacement,
                    oz + nz * displacement
                );
            }
            positions.needsUpdate = true;

            // Dynamic camera shifting
            camera.position.x += (targetX * 3 - camera.position.x) * 0.02;
            camera.position.y += (-targetY * 3 - camera.position.y) * 0.02;
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
        }

        animate();

        // Responsive handling
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
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
      

<div id="webgl-container"></div>
<div className="flex flex-col md:flex-row w-full max-w-[100vw]">

<header className="md:hidden flex justify-between items-center p-6 border-b border-white/5 bg-[#040604]/80 backdrop-blur-xl sticky top-0 z-50">
<div className="text-2xl font-normal tracking-tighter text-[#CDFFCD]">sondo</div>
</header>

<aside className="hidden md:flex flex-col items-center justify-between fixed left-0 top-0 h-screen w-24 py-12 border-r border-white/5 bg-[#040604]/30 backdrop-blur-md z-40">
<div className="flex-1"></div>
<div className="-rotate-90 origin-center translate-y-12">
<span className="text-3xl font-normal tracking-tighter text-[#CDFFCD] select-none">sondo</span>
</div>
<div className="flex-1"></div>
</aside>

<main className="flex-1 md:ml-24 px-6 md:px-16 lg:px-24 py-16 md:py-32 flex flex-col gap-32 max-w-6xl mx-auto w-full z-10">

<section className="reveal pt-8 md:pt-16">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter leading-[1.1] text-zinc-100 max-w-4xl">
                    Backing pre-seed and seed stage teams <br className="hidden md:block"/>
                    with a link to <span className="text-[#CDFFCD]">Norway</span>
</h1>
</section>

<section className="reveal stagger-container">
<h2 className="text-xs font-normal text-zinc-500 tracking-[0.2em] uppercase mb-10">Active Portfolio</h2>
<div className="flex flex-wrap items-center gap-x-6 gap-y-5 text-xl md:text-2xl leading-relaxed">

<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '50ms'}}>Aiba</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '75ms'}}>Atlas</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '100ms'}}>Bislab</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '125ms'}}>Breyta</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '150ms'}}>Cardboard</a>
<span className="text-zinc-600 italic stagger-item" style={{transitionDelay: '175ms'}}>[tba]</span>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '200ms'}}>Catchwise</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '225ms'}}>Curipod</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '250ms'}}>Dune</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '275ms'}}>Enode</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '300ms'}}>Fairsight</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '325ms'}}>Fronted</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '350ms'}}>Heimdal</a>
<span className="text-zinc-600 italic stagger-item" style={{transitionDelay: '375ms'}}>[tba]</span>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '400ms'}}>Hemi</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '425ms'}}>Installer</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '450ms'}}>Lightsonic</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '475ms'}}>Midio</a>
<span className="text-zinc-600 italic stagger-item" style={{transitionDelay: '500ms'}}>[tba]</span>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '525ms'}}>Nadeno</a>
<span className="text-zinc-600 italic stagger-item" style={{transitionDelay: '550ms'}}>[tba]</span>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '575ms'}}>Omnimod</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '600ms'}}>Ordinary Objects</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '625ms'}}>Riff</a>
<span className="text-zinc-600 italic stagger-item" style={{transitionDelay: '650ms'}}>[tba]</span>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '675ms'}}>Sanna</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '700ms'}}>Skye</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '725ms'}}>Spare</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '750ms'}}>Spring</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '775ms'}}>Starflow</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '800ms'}}>Strise</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '825ms'}}>Tana</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '850ms'}}>Torg</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '875ms'}}>Two</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '900ms'}}>Unleash</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '925ms'}}>Unloc</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '950ms'}}>Versiro</a>
<a className="portfolio-link stagger-item" href="#" style={{transitionDelay: '975ms'}}>We Are</a>
</div>
</section>

<section className="reveal">
<h2 className="text-xs font-normal text-zinc-500 tracking-[0.2em] uppercase mb-10">Contact</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">

<div className="group flex flex-col items-start gap-4">
<h3 className="text-2xl font-normal tracking-tight text-zinc-100 group-hover:text-[#CDFFCD] transition-colors duration-300">Henrik Hatlebrekke</h3>
<div className="flex flex-col gap-3">
<a className="flex items-center gap-3 text-base text-zinc-400 hover:text-white transition-colors" href="mailto:henrik@sondo.com">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
                                henrik@sondo.com
                            </a>
<a className="flex items-center gap-3 text-base text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:user-circle-linear"></iconify-icon>
                                LinkedIn
                            </a>
</div>
</div>

<div className="group flex flex-col items-start gap-4">
<h3 className="text-2xl font-normal tracking-tight text-zinc-100 group-hover:text-[#CDFFCD] transition-colors duration-300">Kjetil Holmefjord</h3>
<div className="flex flex-col gap-3">
<a className="flex items-center gap-3 text-base text-zinc-400 hover:text-white transition-colors" href="mailto:kjetil@sondo.com">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
                                kjetil@sondo.com
                            </a>
<a className="flex items-center gap-3 text-base text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:user-circle-linear"></iconify-icon>
                                LinkedIn
                            </a>
</div>
</div>
</div>
</section>

<section className="reveal border-t border-white/5 pt-12 mt-12">
<details className="group cursor-pointer">
<summary className="flex items-center justify-between text-lg md:text-xl font-normal tracking-tight text-zinc-300 hover:text-[#CDFFCD] transition-colors duration-300">
<span>SFDR Disclosures</span>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#CDFFCD]/30 transition-colors">
<iconify-icon className="text-xl transform group-open:rotate-180 transition-transform duration-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</summary>
<div className="accordion-content">
<div className="accordion-inner">
<div className="pt-8 pb-4 text-sm md:text-base text-zinc-500 leading-relaxed max-w-4xl space-y-6">
<p>Sondo Capital integrates sustainability risks into its investment decision-making process in accordance with the Sustainable Finance Disclosure Regulation (SFDR). We believe that evaluating environmental, social, and governance (ESG) criteria is vital to identifying resilient, future-proof founders and technologies.</p>
<p>Our fund focuses on backing teams that align with long-term sustainable growth. While we remain a generalist pre-seed and seed fund, avoiding strict exclusion mandates outside standard international sanctions, we actively monitor our portfolio's impact and encourage continuous improvement in governance and societal contributions.</p>
</div>
</div>
</div>
</details>
</section>
</main>
</div>





    </>
  );
}
