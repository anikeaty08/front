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



        // --- Smooth Scrolling with Lenis ---
        const lenis = new Lenis({
            duration: 1.2,
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // --- Three.js 3D Background Logic ---
        const initThreeJS = () => {
            const container = document.getElementById('canvas-container');
            if (!container) return;

            const scene = new THREE.Scene();
            scene.fog = new THREE.FogExp2(0xfcfbf9, 0.002);

            const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
            camera.position.z = 30;

            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setClearColor(0xfcfbf9, 1);
            container.appendChild(renderer.domElement);

            const geometry = new THREE.TorusKnotGeometry(9, 2.5, 120, 16);
            const material = new THREE.MeshPhysicalMaterial({
                color: 0xcccccc,
                emissive: 0x000000,
                metalness: 0.1, 
                roughness: 0.8,
                wireframe: true,
                transparent: true,
                opacity: 0.2
            });
            const torusKnot = new THREE.Mesh(geometry, material);
            scene.add(torusKnot);

            const sparkCount = 100;
            const sparkGeo = new THREE.CircleGeometry(0.15, 3);
            const sparkMat = new THREE.MeshBasicMaterial({
                color: 0xB8860B,
                side: THREE.DoubleSide,
                blending: THREE.NormalBlending, 
                transparent: true,
                opacity: 0.8,
                depthTest: false
            });
            const sparks = new THREE.InstancedMesh(sparkGeo, sparkMat, sparkCount);
            torusKnot.add(sparks);

            const dummy = new THREE.Object3D();
            const sparkData = [];
            const radialSegments = 16;
            const tubularSegments = 120;
            
            for (let i = 0; i < sparkCount; i++) {
                sparkData.push({
                    speed: 0.001 + Math.random() * 0.002,
                    progress: Math.random(),
                    pathIndex: Math.floor(Math.random() * radialSegments)
                });
            }

            const posAttribute = geometry.attributes.position;
            const stride = radialSegments + 1;
            const v1 = new THREE.Vector3();
            const v2 = new THREE.Vector3();

            function updateSparks() {
                sparkData.forEach((spark, i) => {
                    spark.progress += spark.speed;
                    if (spark.progress >= 1) spark.progress = 0;
                    const exactInd = spark.progress * tubularSegments;
                    const u = Math.floor(exactInd);
                    const nextU = (u + 1) % tubularSegments;
                    const v = spark.pathIndex;
                    const idx1 = (u * stride + v) * 3;
                    const idx2 = (nextU * stride + v) * 3;
                    v1.fromArray(posAttribute.array, idx1);
                    v2.fromArray(posAttribute.array, idx2);
                    v1.lerp(v2, exactInd - u);
                    dummy.position.copy(v1);
                    dummy.lookAt(v2); 
                    dummy.updateMatrix();
                    sparks.setMatrixAt(i, dummy.matrix);
                });
                sparks.instanceMatrix.needsUpdate = true;
            }

            const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
            scene.add(ambientLight);
            
            const pLight1 = new THREE.PointLight(0xB8860B, 2, 50);
            pLight1.position.set(10, 10, 10);
            scene.add(pLight1);

            let mouseX = 0, mouseY = 0;
            let targetX = 0, targetY = 0;
            const windowHalfX = window.innerWidth / 2;
            const windowHalfY = window.innerHeight / 2;

            document.addEventListener('mousemove', (e) => {
                mouseX = (e.clientX - windowHalfX) * 0.0005;
                mouseY = (e.clientY - windowHalfY) * 0.0005;
            });

            const animate = () => {
                requestAnimationFrame(animate);
                targetX = mouseX * 0.5;
                targetY = mouseY * 0.5;
                torusKnot.rotation.y += 0.05 * (targetX - torusKnot.rotation.y) + 0.002;
                torusKnot.rotation.x += 0.05 * (targetY - torusKnot.rotation.x) + 0.001;
                updateSparks();
                renderer.render(scene, camera);
            };

            animate();

            window.addEventListener('resize', () => {
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            });
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initThreeJS);
        } else {
            initThreeJS();
        }
    
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
      

<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 text-neutral-900 bg-[#fcfbf9]/80 backdrop-blur-sm border-b border-transparent transition-colors duration-300">
<a className="lowercase hover:opacity-60 transition-opacity text-sm font-medium tracking-tight" href="#">
            henry slorach
        </a>
<div className="flex gap-8 text-xs font-normal tracking-wide lowercase">
<a className="hover:opacity-60 transition-opacity" href="#about">about</a>
<a className="hover:opacity-60 transition-opacity" href="#work">work</a>
<a className="hover:opacity-60 transition-opacity" href="#studio">studio</a>
<a className="hover:opacity-60 transition-opacity" href="#contact">contact</a>
</div>
</nav>

<div className="relative z-0 bg-[#fcfbf9]">

<header className="min-h-screen flex flex-col justify-end w-full px-6 pb-12 md:px-12 md:pb-16 relative overflow-hidden bg-[#fcfbf9]" id="hero">

<div className="absolute inset-0 w-full h-full z-0 pointer-events-auto" id="canvas-container"></div>
<div className="max-w-[1920px] w-full mx-auto relative z-10 pointer-events-none">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
<div className="md:col-span-4 reveal-up flex flex-col justify-end h-full pointer-events-auto">
<p className="text-xs md:text-sm font-normal leading-relaxed text-neutral-900 lowercase max-w-xs tracking-wide">
                            digital craftsman &amp; visual director based in berlin. focusing on interactive experiences and brand identity.
                        </p>
<div className="mt-8 md:mt-12 flex gap-4">
<a className="group flex items-center gap-2 text-xs font-normal uppercase tracking-widest border-b border-neutral-900 pb-1 transition-colors hover:opacity-60 text-neutral-900" href="#about">
                                Explore
                                <iconify-icon className="group-hover:translate-y-0.5 transition-transform duration-300" icon="lucide:arrow-down" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</div>
<div className="md:col-span-8 text-right reveal-up delay-100 mt-6 md:mt-0 pointer-events-auto">
<h1 className="text-5xl md:text-6xl lg:text-7xl lowercase leading-[0.9] font-medium text-neutral-900 tracking-tighter">
                           at the forefront<br/>of design
                            <span className="text-neutral-400 block text-2xl md:text-4xl lg:text-5xl mt-4 tracking-tight font-normal">since 2003</span>
</h1>
</div>
</div>
</div>
</header>

<section className="relative z-10 w-full px-6 md:px-12 pt-24 pb-12 lg:pt-32 lg:pb-24 bg-[#fcfbf9]" id="about">
<div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

<div className="lg:col-span-5 w-full h-full min-h-[400px] overflow-hidden bg-neutral-100 relative group">
<img alt="Portrait" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>

<div className="lg:col-span-7 flex flex-col justify-between h-full lg:pl-12">
<div>

<div className="flex items-center gap-4 text-neutral-300 mb-8 leading-none">
<iconify-icon className="text-neutral-400" icon="lucide:asterisk" strokeWidth="1.5" width="18"></iconify-icon>
<div className="h-px bg-neutral-200 w-full"></div>
</div>

<p className="font-mono text-sm md:text-base leading-relaxed text-neutral-800 mb-10 max-w-4xl font-normal text-justify">
                            I design and build beautiful, high-performing digital products. I craft user interfaces with clean design systems and bring them to life with code, creating fast, responsive, and immersive experiences for startups, agencies, and creative teams. My approach is deeply rooted in typographic rigor and spatial awareness.
                        </p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 font-mono text-xs md:text-sm">
<div>
<h5 className="text-neutral-900 font-medium mb-5">Specialties</h5>
<ul className="space-y-2 text-neutral-500 font-normal">
<li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-neutral-400"></span>UI/UX Design</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-neutral-400"></span>Front-End Development</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-neutral-400"></span>Design Systems</li>
</ul>
</div>
<div>
<h5 className="text-neutral-900 font-medium mb-5">Industries</h5>
<ul className="space-y-2 text-neutral-500 font-normal">
<li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-neutral-400"></span>SaaS &amp; Tech</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-neutral-400"></span>Creative Agencies</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-neutral-400"></span>Enterprise</li>
</ul>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-start gap-6 pt-8 border-t border-dashed border-neutral-200">
<a className="group inline-flex items-center justify-center gap-3 px-6 py-3 bg-neutral-900 text-[#fcfbf9] text-sm font-medium rounded-none hover:bg-neutral-800 transition-all" href="#work">
                            See Selected Work
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="group inline-flex items-center justify-center gap-3 px-6 py-3 bg-transparent border border-neutral-300 text-neutral-900 text-sm font-medium rounded-none hover:bg-neutral-50 hover:border-neutral-400 transition-all" href="#contact">
                            Contact Me
                        </a>
</div>
</div>
</div>
</section>
</div>

<section className="relative z-20 bg-[#fcfbf9] text-neutral-900 border-t border-neutral-200" id="work">
<div className="max-w-7xl w-full mx-auto px-6 md:px-12 pt-24 pb-32">
<div className="w-full mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 lowercase mb-6">
                        artifacts
                    </h2>
<p className="text-neutral-500 max-w-md text-sm md:text-base font-normal leading-relaxed lowercase">
                        a curation of digital products and interactive experiences crafted with precision.
                    </p>
</div>
<div className="hidden md:block w-px h-16 bg-neutral-200"></div>
<div className="hidden md:flex gap-12 font-mono text-xs uppercase tracking-widest text-neutral-400">
<div>
<span className="block text-neutral-900 mb-1">Status</span>
                        Open for work
                    </div>
<div>
<span className="block text-neutral-900 mb-1">Location</span>
                        Berlin, DE
                    </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<a className="group block w-full cursor-pointer" href="#">
<div className="relative w-full aspect-[4/5] overflow-hidden bg-neutral-900 border border-neutral-200 shadow-sm transition-all duration-500 hover:shadow-2xl rounded-none">

<img alt="Onyx Ledger" className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90 opacity-90 transition-opacity duration-300"></div>

<div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
<span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-medium uppercase tracking-widest text-white shadow-sm">React</span>
<span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-medium uppercase tracking-widest text-white shadow-sm">WebGL</span>
</div>

<div className="absolute top-6 right-6 z-10">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>

<div className="absolute bottom-0 left-0 p-8 w-full z-10">
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-4 lowercase">
                                onyx ledger
                            </h3>
<p className="text-sm text-neutral-300 leading-relaxed font-normal max-w-sm">
                                "A real-time financial visualization platform designed to process millions of transactions with absolute zero latency."
                            </p>
</div>
</div>
</a>

<a className="group block w-full cursor-pointer" href="#">
<div className="relative w-full aspect-[4/5] overflow-hidden bg-neutral-900 border border-neutral-200 shadow-sm transition-all duration-500 hover:shadow-2xl rounded-none">
<img alt="Kortex Array" className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90 opacity-90 transition-opacity duration-300"></div>
<div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
<span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-medium uppercase tracking-widest text-white shadow-sm">Python</span>
<span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-medium uppercase tracking-widest text-white shadow-sm">TensorFlow</span>
</div>
<div className="absolute top-6 right-6 z-10">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full z-10">
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-4 lowercase">
                                kortex array
                            </h3>
<p className="text-sm text-neutral-300 leading-relaxed font-normal max-w-sm">
                                "AI infrastructure dashboard designed for clarity in complex neural network monitoring and deployment."
                            </p>
</div>
</div>
</a>

<a className="group block w-full cursor-pointer" href="#">
<div className="relative w-full aspect-[4/5] overflow-hidden bg-neutral-900 border border-neutral-200 shadow-sm transition-all duration-500 hover:shadow-2xl rounded-none">
<img alt="Vesper Commerce" className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90 opacity-90 transition-opacity duration-300"></div>
<div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
<span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-medium uppercase tracking-widest text-white shadow-sm">Next.js</span>
<span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-medium uppercase tracking-widest text-white shadow-sm">Stripe</span>
</div>
<div className="absolute top-6 right-6 z-10">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full z-10">
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-4 lowercase">
                                vesper commerce
                            </h3>
<p className="text-sm text-neutral-300 leading-relaxed font-normal max-w-sm">
                                "Global e-commerce solution focusing on high-conversion checkout flows and inventory management."
                            </p>
</div>
</div>
</a>
</div>

<div className="mt-20 flex justify-center">
<a className="inline-flex items-center gap-3 px-8 py-4 border border-neutral-300 text-sm font-medium text-neutral-900 bg-transparent hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all group duration-300 rounded-none" href="#">
                    view archive
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-neutral-900 text-[#fcfbf9] py-24 px-6 md:px-12 relative overflow-hidden" id="studio">
<div className="absolute top-0 left-0 w-full h-px bg-white/10"></div>

<div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
<div className="lg:col-span-7">
<span className="text-neutral-500 font-mono text-xs mb-8 block tracking-widest uppercase">The Studio</span>
<h3 className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tighter lowercase leading-[0.9] mb-12">
                    intelligence<br/>
<span className="text-neutral-600">made visible.</span>
</h3>
<div className="w-24 h-px bg-neutral-700 mb-12"></div>
<p className="text-lg md:text-2xl font-light leading-relaxed lowercase text-neutral-400 tracking-wide max-w-2xl">
                    we believe in the power of reduction. stripping away the non-essential to reveal the core truth of a brand.
                </p>
</div>
<div className="lg:col-span-5 flex flex-col gap-12 border-l border-neutral-800 lg:pl-16">
<div>
<span className="block text-xs font-medium tracking-widest text-neutral-500 uppercase mb-6">Services</span>
<ul className="space-y-3 text-lg font-light lowercase text-neutral-300">
<li className="hover:text-white transition-colors cursor-default">art direction</li>
<li className="hover:text-white transition-colors cursor-default">digital design</li>
<li className="hover:text-white transition-colors cursor-default">development</li>
<li className="hover:text-white transition-colors cursor-default">strategy</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="py-24 px-6 md:px-12 bg-[#fcfbf9] text-neutral-900 border-t border-neutral-200 relative z-30" id="contact">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
<div className="max-w-3xl">
<h4 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter lowercase mb-8">
                        have a project<br/>in mind?
                    </h4>
<a className="inline-flex items-center gap-3 text-xl md:text-2xl font-normal transition-all lowercase border-b border-neutral-300 pb-1 text-neutral-500 hover:text-neutral-900 hover:border-neutral-900 hover:gap-4 group" href="mailto:hello@faux.moni">
                        hello@faux.moni
                        <iconify-icon className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" icon="lucide:arrow-up-right" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
<div className="flex flex-col items-start md:items-end gap-8 w-full md:w-auto">
<div className="flex gap-4">
<a className="p-3 rounded-full border border-neutral-200 text-neutral-400 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="lucide:twitter" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="p-3 rounded-full border border-neutral-200 text-neutral-400 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="lucide:instagram" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="p-3 rounded-full border border-neutral-200 text-neutral-400 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="lucide:linkedin" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<span className="text-xs font-medium uppercase tracking-widest text-neutral-500">
                        © 2024 faux.moni
                    </span>
</div>
</div>
</div>
</footer>



    </>
  );
}
