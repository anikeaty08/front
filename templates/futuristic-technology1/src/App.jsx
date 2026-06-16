import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



          (function() {
            const container = document.getElementById('brutalist-accordion-container');
            if (!container) return;
            const items = container.querySelectorAll('.accordion-item');

            items.forEach(item => {
              item.addEventListener('click', function() {
                if (this.classList.contains('active-panel')) return;

                items.forEach(el => {
                  el.classList.remove('active-panel', 'flex-[1_0_0%]', 'min-w-[4rem]', 'cursor-default', 'bg-[#f3f4f6]', 'border-white', 'shadow-[inset_1px_1px_0_white]');
                  el.classList.add('inactive-panel', 'w-14', 'md:w-16', 'lg:w-20', 'min-w-[3.5rem]', 'cursor-pointer', 'hover:bg-white/[0.04]', 'bg-[#0a0a0a]', 'border-white/10');

                  const vertText = el.querySelector('.vert-text');
                  if (vertText) {
                    vertText.classList.remove('opacity-0', 'pointer-events-none');
                    vertText.classList.add('opacity-100');
                  }

                  const contentWrap = el.querySelector('.content-wrapper');
                  if (contentWrap) {
                    contentWrap.classList.remove('opacity-100', 'duration-700', 'delay-200');
                    contentWrap.classList.add('opacity-0', 'pointer-events-none', 'duration-300');
                  }

                  const contentText = el.querySelector('.content-text');
                  if (contentText) {
                    contentText.classList.remove('translate-y-0', 'duration-700', 'delay-200');
                    contentText.classList.add('translate-y-4', 'duration-500');
                  }
                });

                this.classList.remove('inactive-panel', 'w-14', 'md:w-16', 'lg:w-20', 'min-w-[3.5rem]', 'cursor-pointer', 'hover:bg-white/[0.04]', 'bg-[#0a0a0a]', 'border-white/10');
                this.classList.add('active-panel', 'flex-[1_0_0%]', 'min-w-[4rem]', 'cursor-default', 'bg-[#f3f4f6]', 'border-white', 'shadow-[inset_1px_1px_0_white]');

                const vertText = this.querySelector('.vert-text');
                if (vertText) {
                  vertText.classList.remove('opacity-100');
                  vertText.classList.add('opacity-0', 'pointer-events-none');
                }

                const contentWrap = this.querySelector('.content-wrapper');
                if (contentWrap) {
                  contentWrap.classList.remove('opacity-0', 'pointer-events-none', 'duration-300');
                  contentWrap.classList.add('opacity-100', 'duration-700', 'delay-200');
                }

                const contentText = this.querySelector('.content-text');
                if (contentText) {
                  contentText.classList.remove('translate-y-4', 'duration-500');
                  contentText.classList.add('translate-y-0', 'duration-700', 'delay-200');
                }
              });
            });
          })();
        


                  (function initWebGL() {
                      // Wait for Three.js to be loaded by the parent document
                      if (typeof THREE === 'undefined') {
                          setTimeout(initWebGL, 100);
                          return;
                      }

                      const container = document.getElementById('webgl-canvas-aura-emn7qynaw1v6smw73');
                      if (!container) return;
                      container.innerHTML = ''; // Clear any existing canvas

                      // Scene setup
                      const scene = new THREE.Scene();

                      // Camera setup
                      const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
                      camera.position.z = 6;

                      // Renderer setup
                      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
                      renderer.setSize(container.clientWidth, container.clientHeight);
                      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                      container.appendChild(renderer.domElement);

                      // Create groups for animation
                      const mainGroup = new THREE.Group();
                      scene.add(mainGroup);

                      // 1. Inner Solid Core
                      const coreGeo = new THREE.IcosahedronGeometry(1.5, 0);
                      const coreMat = new THREE.MeshBasicMaterial({
                          color: 0x022c22,
                          transparent: true,
                          opacity: 0.8
                      });
                      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
                      mainGroup.add(coreMesh);

                      // 2. Inner Wireframe
                      const wireMat1 = new THREE.LineBasicMaterial({
                          color: 0x10b981,
                          transparent: true,
                          opacity: 0.5
                      });
                      const wireframe1 = new THREE.LineSegments(new THREE.WireframeGeometry(coreGeo), wireMat1);
                      mainGroup.add(wireframe1);

                      // 3. Outer Complex Wireframe
                      const outerGeo = new THREE.IcosahedronGeometry(2.2, 1);
                      const wireMat2 = new THREE.LineBasicMaterial({
                          color: 0x059669,
                          transparent: true,
                          opacity: 0.2
                      });
                      const wireframe2 = new THREE.LineSegments(new THREE.WireframeGeometry(outerGeo), wireMat2);
                      mainGroup.add(wireframe2);

                      // 4. Floating Data Particles
                      const particlesGeo = new THREE.BufferGeometry();
                      const particleCount = 400;
                      const posArray = new Float32Array(particleCount * 3);
                      for(let i = 0; i < particleCount * 3; i++) {
                          posArray[i] = (Math.random() - 0.5) * 12; // Spread across a larger area
                      }
                      particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
                      const particleMat = new THREE.PointsMaterial({
                          size: 0.02,
                          color: 0x34d399,
                          transparent: true,
                          opacity: 0.6,
                          blending: THREE.AdditiveBlending
                      });
                      const particlesMesh = new THREE.Points(particlesGeo, particleMat);
                      scene.add(particlesMesh);

                      // Animation Loop
                      const clock = new THREE.Clock();

                      function animate() {
                          requestAnimationFrame(animate);
                          const elapsedTime = clock.getElapsedTime();

                          // Rotate elements at different speeds and axes
                          mainGroup.rotation.y = elapsedTime * 0.15;
                          mainGroup.rotation.x = elapsedTime * 0.1;
                          mainGroup.position.y = Math.sin(elapsedTime * 0.5) * 0.15;

                          wireframe2.rotation.y = elapsedTime * -0.08;
                          wireframe2.rotation.z = elapsedTime * 0.05;

                          particlesMesh.rotation.y = elapsedTime * -0.03;
                          particlesMesh.position.y = Math.sin(elapsedTime * 0.2) * 0.2;

                          renderer.render(scene, camera);
                      }
                      animate();

                      // Responsive Resizing
                      const resizeObserver = new ResizeObserver(() => {
                          if (!container.clientWidth || !container.clientHeight) return;
                          camera.aspect = container.clientWidth / container.clientHeight;
                          camera.updateProjectionMatrix();
                          renderer.setSize(container.clientWidth, container.clientHeight);
                      });
                      resizeObserver.observe(container);
                  })();
                


              (function initHeroWebGL() {
                  if (typeof THREE === 'undefined') {
                      setTimeout(initHeroWebGL, 100);
                      return;
                  }
                  const container = document.getElementById('webgl-canvas-cta-aura-emn7umqt72hftyznj');
                  if (!container) return;
                  container.innerHTML = '';

                  const scene = new THREE.Scene();
                  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
                  camera.position.z = 4;

                  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
                  renderer.setSize(container.clientWidth, container.clientHeight);
                  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                  container.appendChild(renderer.domElement);

                  const geometry = new THREE.IcosahedronGeometry(1.2, 0);
                  const material = new THREE.MeshPhysicalMaterial({
                      color: 0xffffff,
                      metalness: 0.9,
                      roughness: 0.15,
                      emissive: 0x047857,
                      emissiveIntensity: 0.4,
                      clearcoat: 1.0,
                      clearcoatRoughness: 0.1,
                      flatShading: true
                  });

                  const mesh = new THREE.Mesh(geometry, material);
                  scene.add(mesh);

                  const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
                  scene.add(ambientLight);

                  const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
                  directionalLight.position.set(5, 5, 5);
                  scene.add(directionalLight);

                  const pointLight = new THREE.PointLight(0x06b6d4, 5, 10);
                  pointLight.position.set(-2, -2, 2);
                  scene.add(pointLight);

                  const clock = new THREE.Clock();

                  function animateWebGL() {
                      requestAnimationFrame(animateWebGL);
                      const elapsedTime = clock.getElapsedTime();

                      mesh.rotation.y = elapsedTime * 0.3;
                      mesh.rotation.x = elapsedTime * 0.15;
                      mesh.position.y = Math.sin(elapsedTime * 2) * 0.1;

                      directionalLight.position.x = Math.sin(elapsedTime * 0.5) * 5;
                      directionalLight.position.z = Math.cos(elapsedTime * 0.5) * 5;

                      renderer.render(scene, camera);
                  }
                  animateWebGL();

                  const resizeObserver = new ResizeObserver(() => {
                      if (!container.clientWidth || !container.clientHeight) return;
                      camera.aspect = container.clientWidth / container.clientHeight;
                      camera.updateProjectionMatrix();
                      renderer.setSize(container.clientWidth, container.clientHeight);
                  });
                  resizeObserver.observe(container);
              })();
            


      // --- Dynamic V-Shape Background Bars ---
      const bgContainer = document.getElementById('dynamic-bg');
      bgContainer.innerHTML = ''; // Clear previous to prevent duplicate appending
      const numBars = window.innerWidth > 768 ? 41 : 21;
      const centerIndex = Math.floor(numBars / 2);
      const bars = [];

      for (let i = 0; i < numBars; i++) {
          const barWrapper = document.createElement('div');
          barWrapper.className = 'flex-1 h-full relative border-r border-white/5 last:border-0 overflow-hidden';

          const distance = Math.abs(i - centerIndex);
          const baseTopOffset = 30 + (distance * (window.innerWidth > 768 ? 2.5 : 4));

          const glow = document.createElement('div');
          glow.className = 'absolute w-full left-0 right-0';
          glow.style.height = '1200px';
          glow.style.top = `${baseTopOffset}%`;
          glow.style.background = 'linear-gradient(to bottom, rgba(3,3,3,1) 0%, rgba(16,185,129,0.7) 10%, rgba(255,255,255,0.9) 15%, rgba(6,182,212,0.8) 25%, rgba(3,3,3,1) 45%)';
          glow.style.filter = 'blur(4px)';

          barWrapper.appendChild(glow);
          bgContainer.appendChild(barWrapper);

          bars.push({ element: glow, baseTop: baseTopOffset, phase: distance * 0.2 });
      }

      let time = 0;
      function animateBars() {
          time += 0.02;
          bars.forEach(bar => {
              const wave = Math.sin(time + bar.phase) * 3;
              bar.element.style.top = `${bar.baseTop + wave}%`;
          });
          requestAnimationFrame(animateBars);
      }
      animateBars();

      // --- WebGL 3D Object Setup ---
      const container = document.getElementById('webgl-canvas');
      if(container) {
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
        camera.position.z = 4;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        const geometry = new THREE.IcosahedronGeometry(1.2, 0);

        const material = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: 0.9,
            roughness: 0.15,
            emissive: 0x047857,
            emissiveIntensity: 0.4,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
            flatShading: true
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        const pointLight = new THREE.PointLight(0x06b6d4, 5, 10);
        pointLight.position.set(-2, -2, 2);
        scene.add(pointLight);

        const clock = new THREE.Clock();

        function animateWebGL() {
            requestAnimationFrame(animateWebGL);
            const elapsedTime = clock.getElapsedTime();

            mesh.rotation.y = elapsedTime * 0.3;
            mesh.rotation.x = elapsedTime * 0.15;
            mesh.position.y = Math.sin(elapsedTime * 2) * 0.1;

            directionalLight.position.x = Math.sin(elapsedTime * 0.5) * 5;
            directionalLight.position.z = Math.cos(elapsedTime * 0.5) * 5;

            renderer.render(scene, camera);
        }
        animateWebGL();

        window.addEventListener('resize', () => {
            if (container) {
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            }
        });
      }

      // --- GSAP ScrollTrigger Masked Reveal ---
      if(typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".reveal-word",
            { y: "110%", rotation: 2, opacity: 0 },
            {
                y: "0%",
                rotation: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: "#reveal-title",
                    start: "top 85%"
                }
            }
        );
      }
    


      // Add beam styles
      const beamStyle = document.createElement('style');
      beamStyle.innerHTML = `
        @keyframes dropBeam {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .beam-line {
          position: absolute;
          top: 0;
          left: -1px;
          width: 3px;
          height: 250px;
          background: linear-gradient(to bottom, transparent, rgba(16,185,129,0.8), transparent);
          animation: dropBeam 4s infinite linear;
          opacity: 0;
          z-index: 50;
        }
      `;
      document.head.appendChild(beamStyle);

      // Add beams to vertical lines
      const fixedLines = document.querySelectorAll('.w-px.h-full');
      fixedLines.forEach((line, i) => {
        line.classList.add('relative', 'overflow-hidden');
        const beam = document.createElement('div');
        beam.className = 'beam-line';
        beam.style.animationDuration = (3 + (i % 3) * 1.5) + 's';
        beam.style.animationDelay = ((i % 3) * 0.7) + 's';
        line.appendChild(beam);
      });

      // Split text logic
      function splitTextNodes(el) {
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
        const textNodes = [];
        while (walker.nextNode()) {
          textNodes.push(walker.currentNode);
        }
        textNodes.forEach(node => {
          if (!node.nodeValue.trim()) return;
          const fragment = document.createDocumentFragment();
          node.nodeValue.split('').forEach(char => {
            if (char === ' ') {
              fragment.appendChild(document.createTextNode(' '));
            } else {
              const wrap = document.createElement('span');
              wrap.style.display = 'inline-block';
              wrap.style.overflow = 'hidden';
              wrap.style.verticalAlign = 'bottom';
              wrap.className = 'char-wrap';

              const inner = document.createElement('span');
              inner.style.display = 'inline-block';
              inner.className = 'char-inner';
              inner.innerText = char;
              inner.style.transform = 'translateY(-110%)';
              inner.style.opacity = '0';

              wrap.appendChild(inner);
              fragment.appendChild(wrap);
            }
          });
          node.parentNode.replaceChild(fragment, node);
        });
      }

      // Setup classes
      document.querySelectorAll('section:not(#hero), main > div').forEach(sec => {
        sec.querySelectorAll('h1, h2, h3').forEach(el => {
          if(!el.closest('#hero')) el.classList.add('split-text-down');
        });

        const targets = sec.querySelectorAll('.grid > div, .accordion-item, p, button, .max-w-4xl > div');
        targets.forEach(el => {
          if (!el.closest('.grid > div') && !el.closest('.accordion-item') && !el.closest('#hero')) {
            el.classList.add('animate-on-scroll');
          } else if (el.classList.contains('accordion-item') || (el.parentElement && el.parentElement.classList.contains('grid'))) {
            el.classList.add('animate-on-scroll');
          }
        });
      });

      setTimeout(() => {
        if(typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
          // Split text animate
          document.querySelectorAll('.split-text-down').forEach(el => {
            splitTextNodes(el);
            gsap.fromTo(el.querySelectorAll('.char-inner'),
              { y: "-110%", opacity: 0 },
              {
                y: "0%",
                opacity: 1,
                duration: 0.8,
                stagger: 0.03,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%"
                }
              }
            );
          });

          // Batch animate
          ScrollTrigger.batch('.animate-on-scroll', {
            start: "top 85%",
            once: true,
            onEnter: batch => gsap.fromTo(batch,
              { opacity: 0, y: 50, filter: "blur(12px)" },
              { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, stagger: 0.15, ease: "power3.out", overwrite: true }
            )
          });
        }
      }, 500);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-7xl border-x border-white/10 pointer-events-none z-0 flex justify-evenly">
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '3s', animationDelay: '0s'}}></div>
<div className="beam-line" style={{animationDuration: '3s', animationDelay: '0s'}}></div>
</div>
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '4.5s', animationDelay: '0.7s'}}></div>
<div className="beam-line" style={{animationDuration: '4.5s', animationDelay: '0.7s'}}></div>
</div>
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '6s', animationDelay: '1.4s'}}></div>
<div className="beam-line" style={{animationDuration: '6s', animationDelay: '1.4s'}}></div>
</div>
<div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
</div>

<nav aria-label="Main navigation" className="fixed z-50 flex w-[calc(100%-2rem)] -translate-x-1/2 max-w-4xl rounded-full p-2 top-8 left-1/2 shadow-2xl backdrop-blur-xl items-center justify-between" style={{background: 'linear-gradient(rgba(10,10,10,0.8), rgba(10,10,10,0.8)) padding-box, linear-gradient(90deg, rgba(255,255,255,0.05), rgba(16,185,129,0.3), rgba(6,182,212,0.3), rgba(255,255,255,0.05)) border-box', border: '1px solid transparent'}}>
<a aria-label="Veliq Home" className="flex items-center gap-2 pl-4 pr-2 text-white rounded-full outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 transition-shadow" href="/">
<span className="text-sm font-bold tracking-wide">Veliq</span>
</a>
<ul className="hidden md:flex items-center gap-1 text-sm text-gray-400">
<li>
<a className="block rounded-full px-4 py-1.5 transition-colors duration-300 hover:text-white hover:bg-white/5 outline-none focus-visible:text-white focus-visible:bg-white/5 focus-visible:ring-2 focus-visible:ring-emerald-400" href="#platform">
            Platform
          </a>
</li>
<li className="">
<a className="block rounded-full px-4 py-1.5 transition-colors duration-300 hover:text-white hover:bg-white/5 outline-none focus-visible:text-white focus-visible:bg-white/5 focus-visible:ring-2 focus-visible:ring-emerald-400" href="#ecosystem">
            Ecosystem
          </a>
</li>
<li>
<a className="block rounded-full px-4 py-1.5 transition-colors duration-300 hover:text-white hover:bg-white/5 outline-none focus-visible:text-white focus-visible:bg-white/5 focus-visible:ring-2 focus-visible:ring-emerald-400" href="#docs">
            Docs
          </a>
</li>
</ul>
<div className="flex items-center gap-2 pr-1">
<a className="hidden sm:block rounded-full px-4 py-1.5 text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-white hover:bg-white/5 outline-none focus-visible:text-white focus-visible:bg-white/5 focus-visible:ring-2 focus-visible:ring-emerald-400" href="#login">
          Log in
        </a>
<a className="block rounded-full bg-white px-5 py-1.5 text-sm font-semibold text-black transition-all hover:bg-gray-200 outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]" href="#start">
          Get Started
        </a>
</div>
</nav>
<main className="z-10 flex flex-col w-full relative items-center">

<section className="h-[800px] flex flex-col w-full max-w-7xl border-white/10 border-t border-b mr-auto ml-auto pt-40 pb-12 relative items-center justify-start" id="hero">

<div className="absolute inset-0 z-0 flex w-full h-full overflow-hidden opacity-90 pointer-events-none" id="dynamic-bg" style={{maskImage: 'linear-gradient(transparent 10%, black 50%, black 90%, transparent 100%)'}}></div>

<div className="relative z-20 flex w-full max-w-3xl flex-col items-center mx-auto mt-12 py-12 px-6">
<div className="pointer-events-none absolute top-0 left-0 h-6 w-6 border-l border-t border-white/20"></div>
<div className="pointer-events-none absolute top-0 right-0 h-6 w-6 border-r border-t border-white/20"></div>
<div className="pointer-events-none absolute bottom-0 left-0 h-6 w-6 border-b border-l border-white/20"></div>
<div className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b border-r border-white/20"></div>
<h1 className="mb-6 text-center text-5xl font-light leading-[1.1] tracking-tighter drop-shadow-2xl md:text-6xl lg:text-7xl" id="reveal-title">
<span className="inline-block overflow-hidden align-bottom pb-2">
<span className="reveal-word inline-block font-medium text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">
                Cognition
              </span>
</span>
<br className="hidden sm:block"/>
<span className="inline-block overflow-hidden align-bottom pb-2">
<span className="reveal-word inline-block text-white">that</span>
</span>
<span className="inline-block overflow-hidden align-bottom pb-2">
<span className="reveal-word inline-block text-white">Adapts.</span>
</span>
</h1>
<p className="mb-10 max-w-2xl text-center text-base leading-relaxed text-gray-400 md:text-lg text-balance">
            Design, deploy, and refine with neural networks that mold to your
            specific ecosystem, naturally grasp intent, and elevate performance
            dynamically.
          </p>
<div className="flex gap-x-4 gap-y-4 items-center">
<button className="inline-flex transition-all duration-300 overflow-hidden group text-sm text-white rounded-full pt-3 pr-6 pb-3 pl-6 relative gap-x-2 items-center" onmousemove="const rect = this.getBoundingClientRect(); const x = event.clientX - rect.left; const y = event.clientY - rect.top; const centerX = rect.width / 2; const centerY = rect.height / 2; const rotateX = ((y - centerY) / centerY) * -12; const rotateY = ((x - centerX) / centerX) * 12; this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`; this.style.setProperty('--x', ((x / rect.width) * 100) + '%'); this.style.setProperty('--y', ((y / rect.height) * 100) + '%');" onmouseout="this.style.boxShadow='0 8px 32px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.3)'; this.querySelector('.glow-layer').style.opacity='0.2'; this.querySelector('.light-sweep').style.transform='translate(-150%, 150%) rotate(45deg)';" onmouseover="this.style.boxShadow='0 20px 60px rgba(16, 185, 129, 0.3), inset 0 2px 8px rgba(255, 255, 255, 0.5)'; this.querySelector('.glow-layer').style.opacity='0.6'; this.querySelector('.light-sweep').style.transform='translate(150%, -150%) rotate(45deg)';" style={{-X: '65.8311322655902%', -Y: '55.329221903883194%', background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)', border: '1px solid rgba(255, 255, 255, 0.3)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 8px 32px, rgba(255, 255, 255, 0.4) 0px 2px 4px inset, rgba(0, 0, 0, 0.2) 0px -2px 4px inset, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset', backdropFilter: 'blur(20px)', transformStyle: 'preserve-3d', transition: '0.5s cubic-bezier(0.4, 0, 0.2, 1)', transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(15px)'}}>
<div className="absolute inset-0 rounded-full" style={{background: 'radial-gradient(circle at var(--x) var(--y), rgba(255, 255, 255, 0.4) 0%, transparent 60%)', pointerEvents: 'none', zIndex: '1'}}></div>
<div className="glow-layer absolute inset-0 rounded-full transition-opacity duration-500" style={{background: 'radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 40%, transparent 70%)', opacity: '0.6', transition: 'opacity 0.5s', pointerEvents: 'none', zIndex: '2'}}></div>
<div className="light-sweep absolute inset-0 rounded-full transition-transform duration-700 ease-in-out" style={{background: 'radial-gradient(ellipse at var(--x) var(--y), rgba(244,63,94,0.4) 0%, rgba(251,113,133,0.2) 30%, transparent 60%)', opacity: '0.4', transition: 'opacity 0.5s', pointerEvents: 'none', filter: 'blur(8px)', zIndex: '3'}}></div>
<span className="iconify text-lg relative z-10" data-icon="solar:check-read-linear" style={{filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))'}}></span>
<span className="z-10 relative font-medium tracking-wide" style={{textShadow: '0 2px 4px rgba(0,0,0,0.2)'}}>
                Activate System
              </span>
<div className="absolute -inset-4 rounded-full transition-opacity duration-500 group-hover:opacity-100" style={{background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)', transform: 'translate(-150%, 150%) rotate(45deg)', transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)', pointerEvents: 'none', filter: 'blur(6px)', width: '200%', height: '200%', top: '-50%', left: '-50%', zIndex: '4'}}></div>
</button>
<button className="inline-flex transition-all duration-300 group hover:text-white hover:border-white/10 hover:bg-white/5 text-sm text-gray-400 bg-transparent border-[#ffffff]/20 border rounded-full pt-3 pr-7 pb-3 pl-7 relative gap-x-2 gap-y-x-2 items-center">
<svg className="transition-transform duration-300 group-hover:scale-110" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polygon className="" points="6 3 20 12 6 21 6 3"></polygon>
</svg>
<span className="font-normal tracking-wide">Watch Preview</span>
</button>
</div>
</div>
</section>

<section className="z-10 bg-[#030303]/80 w-full max-w-7xl border-white/10 border mr-auto ml-auto pt-32 pr-8 pb-32 pl-8 relative backdrop-blur-sm">

<div className="absolute inset-0 pointer-events-none z-0 flex justify-evenly">
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '3s', animationDelay: '0s'}}></div>
<div className="beam-line" style={{animationDuration: '3s', animationDelay: '0s'}}></div>
</div>
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '4.5s', animationDelay: '0.7s'}}></div>
<div className="beam-line" style={{animationDuration: '4.5s', animationDelay: '0.7s'}}></div>
</div>
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '6s', animationDelay: '1.4s'}}></div>
<div className="beam-line" style={{animationDuration: '6s', animationDelay: '1.4s'}}></div>
</div>
<div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
</div>
<div className="flex-1 flex flex-col z-10 bg-[#0a0a0a]/50 border-white/10 border relative shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-sm">

<div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/20 z-20"></div>
<div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/20 z-20"></div>
<div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/20 z-20"></div>
<div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/20 z-20"></div>

<div className="flex-1 flex flex-col">

<div className="md:p-16 lg:p-20 overflow-hidden flex flex-col border-white/10 border-b pt-8 pr-8 pb-8 pl-8 relative justify-center min-h-[400px]">

<div className="absolute top-0 right-0 w-full md:w-[70%] lg:w-[50%] h-full opacity-70 pointer-events-none z-0 mix-blend-screen" id="brutalist-canvas-container" style={{maskImage: 'linear-gradient(to right, transparent, black)', WebkitMaskImage: 'linear-gradient(to right, transparent, black)'}}>
<canvas height="1116" style={{display: 'block', width: '637px', height: '558px'}} width="1274"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '611px', height: '527px'}} width="1222"></canvas>
<canvas height="1054" style={{display: 'block', width: '611px', height: '527px'}} width="1222"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
</div>
<div className="relative z-10 max-w-5xl">

<div className="flex items-center gap-4 mb-8">
<span className="w-1.5 h-1.5 rounded-none bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,1)]"></span>
<span className="text-[10px] font-medium text-gray-400 tracking-[0.2em] uppercase">
                    Veliq Architecture / Core.01
                  </span>
<div className="h-px w-12 bg-white/10"></div>
</div>

<h1 className="text-5xl md:text-7xl lg:text-[6rem] text-white leading-[0.85] mb-8 font-light tracking-tight split-text-down">
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          N
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          E
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          U
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          R
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          A
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          L
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="text-gray-500 font-light tracking-tight">
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            S
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            Y
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            N
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            T
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            H
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            E
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            S
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            I
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            S
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
</span>
<br/>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          M
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          A
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          T
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          R
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          I
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          X
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          A
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          L
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          I
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          G
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          N
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          M
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          E
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          N
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          T
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          .
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
</h1>
<p className="text-sm md:text-base text-gray-400 max-w-xl leading-relaxed font-normal animate-on-scroll">
                  Our architecture utilizes deterministic logic gates to bypass
                  conventional latency. Every vector is calibrated for absolute
                  structural integrity and optimal throughput within the void,
                  establishing an unshakeable foundation for complex rendering
                  tasks.
                </p>
</div>
</div>

<div className="flex-1 grid grid-cols-1 lg:grid-cols-12 relative min-h-[500px]">

<div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 p-8 md:p-12 lg:p-16 flex flex-col justify-center gap-10 bg-[#030303] animate-on-scroll">

<div className="p-6 md:p-8 bg-gradient-to-b from-emerald-500 to-emerald-600 border border-emerald-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),_inset_0_-2px_6px_rgba(0,0,0,0.2),_0_12px_24px_rgba(16,185,129,0.15)] rounded-sm relative group overflow-hidden transition-transform duration-300 hover:-translate-y-1 cursor-default">
<div className="absolute -right-6 -top-6 text-emerald-400/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 ease-out"></div>
<div className="relative z-10 flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-widest text-emerald-950/70 font-semibold">
                      Execution Latency
                    </span>
<h3 className="text-5xl font-medium text-emerald-950 tracking-tight mt-1 split-text-down">
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              0
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              .
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              0
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              2
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="text-2xl font-normal tracking-normal text-emerald-900/80 ml-1">
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                                m
                              </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                                s
                              </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
</span>
</h3>
<p className="text-xs text-emerald-900 mt-3 font-medium max-w-[220px] leading-relaxed mix-blend-color-burn">
                      Zero-point optimization achieved through strict hardwired
                      routing protocols.
                    </p>
</div>
</div>

<div className="p-6 md:p-8 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_inset_0_-1px_3px_rgba(0,0,0,0.5),_0_8px_16px_rgba(0,0,0,0.4)] rounded-sm relative group overflow-hidden transition-transform duration-300 hover:-translate-y-1 cursor-default">
<div className="absolute -right-6 -top-6 text-white/10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 ease-out"></div>
<div className="relative z-10 flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                      System Coherence
                    </span>
<h3 className="text-5xl font-medium text-white tracking-tight mt-1 split-text-down">
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              9
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              9
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              .
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              9
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="text-2xl font-normal tracking-normal text-gray-500 ml-1">
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                                %
                              </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
</span>
</h3>
<p className="text-xs text-gray-400 mt-3 font-normal max-w-[220px] leading-relaxed">
                      Structural primitives maintain absolute stability under
                      peak synthetic loads.
                    </p>
</div>
</div>
</div>

<div className="lg:col-span-8 flex flex-row w-full overflow-x-hidden bg-[#0a0a0a] animate-on-scroll" id="brutalist-accordion-container">

<div className="accordion-item active-panel relative h-[400px] lg:h-auto flex-[1_0_0%] min-w-[4rem] cursor-default overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] bg-[#f3f4f6] border-l border-white shadow-[inset_1px_1px_0_white] animate-on-scroll" data-index="0">
<div className="vert-text absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300">
<span className="text-[10px] font-medium tracking-[0.3em] text-gray-400 uppercase" style={{writingMode: 'vertical-rl'}}>
                      Phase 1
                    </span>
</div>
<div className="content-wrapper absolute inset-0 opacity-100 p-6 md:p-10 lg:p-14 flex flex-col justify-between z-20 transition-opacity duration-700 delay-200">
<div className="flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-500">
                        Sequence 01
                      </span>
<svg className="text-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
<path d="M3 12A9 3 0 0 0 21 12"></path>
</svg>
</div>
<div className="transform translate-y-0 transition-transform duration-700 delay-200 content-text">
<h4 className="text-3xl md:text-5xl font-medium text-black tracking-tighter mb-4 leading-none">
                        Ingestion
                      </h4>
<p className="text-xs md:text-sm text-gray-700 font-normal max-w-sm leading-relaxed">
                        Raw data vectors are ingested into the primary holding
                        matrix, filtered through high-pass deterministic gates
                        to strip anomalies.
                      </p>
</div>
</div>
</div>

<div className="accordion-item inactive-panel relative h-[400px] lg:h-auto w-14 md:w-16 lg:w-20 min-w-[3.5rem] cursor-pointer group flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] bg-[#0a0a0a] border-l border-white/10 hover:bg-white/[0.04] animate-on-scroll" data-index="1">
<div className="vert-text flex flex-col transition-opacity duration-300 opacity-100 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<span className="text-[10px] font-medium tracking-[0.3em] text-gray-500 group-hover:text-gray-300 transition-colors uppercase" style={{writingMode: 'vertical-rl'}}>
                      Phase 2
                    </span>
</div>
<div className="content-wrapper absolute inset-0 opacity-0 pointer-events-none p-6 md:p-10 lg:p-14 flex flex-col justify-between z-20 transition-opacity duration-300">
<div className="flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-500">
                        Sequence 02
                      </span>
<svg className="text-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
<path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
<path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
</svg>
</div>
<div className="transform translate-y-4 transition-transform duration-500 content-text">
<h4 className="text-3xl md:text-5xl font-medium text-black tracking-tighter mb-4 leading-none">
                        Compilation
                      </h4>
<p className="text-xs md:text-sm text-gray-700 font-normal max-w-sm leading-relaxed">
                        Synthesizing raw inputs into structured geometric
                        primitives. Layering protocols establish the foundation
                        for rendering.
                      </p>
</div>
</div>
</div>

<div className="accordion-item inactive-panel relative h-[400px] lg:h-auto w-14 md:w-16 lg:w-20 min-w-[3.5rem] cursor-pointer group flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] bg-[#0a0a0a] border-l border-white/10 hover:bg-white/[0.04] animate-on-scroll" data-index="2">
<div className="vert-text absolute inset-0 flex flex-col items-center justify-center opacity-100 transition-opacity duration-300">
<span className="text-[10px] font-medium tracking-[0.3em] text-gray-500 group-hover:text-gray-300 transition-colors uppercase" style={{writingMode: 'vertical-rl'}}>
                      Phase 3
                    </span>
</div>
<div className="content-wrapper absolute inset-0 opacity-0 pointer-events-none p-6 md:p-10 lg:p-14 flex flex-col justify-between z-20 transition-opacity duration-300">
<div className="flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-500">
                        Sequence 03
                      </span>
<svg className="text-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
<path d="m3.3 7 8.7 5 8.7-5"></path>
<path d="M12 22V12"></path>
</svg>
</div>
<div className="transform translate-y-4 transition-transform duration-500 content-text">
<h4 className="text-3xl md:text-5xl font-medium text-black tracking-tighter mb-4 leading-none">
                        Synthesis
                      </h4>
<p className="text-xs md:text-sm text-gray-700 font-normal max-w-sm leading-relaxed">
                        Assembling architectural primitives into fully formed
                        functional units. Deep material properties are assigned
                        globally.
                      </p>
</div>
</div>
</div>

<div className="accordion-item inactive-panel relative h-[400px] lg:h-auto w-14 md:w-16 lg:w-20 min-w-[3.5rem] cursor-pointer group flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] bg-[#0a0a0a] border-l border-white/10 hover:bg-white/[0.04] animate-on-scroll" data-index="3">
<div className="vert-text absolute inset-0 flex flex-col items-center justify-center opacity-100 transition-opacity duration-300">
<span className="text-[10px] font-medium tracking-[0.3em] text-gray-500 group-hover:text-gray-300 transition-colors uppercase" style={{writingMode: 'vertical-rl'}}>
                      Phase 4
                    </span>
</div>
<div className="content-wrapper absolute inset-0 opacity-0 pointer-events-none p-6 md:p-10 lg:p-14 flex flex-col justify-between z-20 transition-opacity duration-300">
<div className="flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-500">
                        Sequence 04
                      </span>
<svg className="text-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<div className="transform translate-y-4 transition-transform duration-500 content-text">
<h4 className="text-3xl md:text-5xl font-medium text-black tracking-tighter mb-4 leading-none">
                        Verification
                      </h4>
<p className="text-xs md:text-sm text-gray-700 font-normal max-w-sm leading-relaxed">
                        Automated stress algorithms hit the newly synthesized
                        structures. Only zero-fault matrices survive to the
                        final stage.
                      </p>
</div>
</div>
</div>

<div className="accordion-item inactive-panel relative h-[400px] lg:h-auto w-14 md:w-16 lg:w-20 min-w-[3.5rem] cursor-pointer group flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] bg-[#0a0a0a] border-l border-white/10 hover:bg-white/[0.04] animate-on-scroll" data-index="4">
<div className="vert-text absolute inset-0 flex flex-col items-center justify-center opacity-100 transition-opacity duration-300">
<span className="text-[10px] font-medium tracking-[0.3em] text-gray-500 group-hover:text-gray-300 transition-colors uppercase" style={{writingMode: 'vertical-rl'}}>
                      Phase 5
                    </span>
</div>
<div className="content-wrapper absolute inset-0 opacity-0 pointer-events-none p-6 md:p-10 lg:p-14 flex flex-col justify-between z-20 transition-opacity duration-300">
<div className="flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-500">
                        Sequence 05
                      </span>
<svg className="text-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
<path d="M4 6h.01"></path>
<path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
<path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
<path d="M12 18h.01"></path>
<path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
<circle cx="12" cy="12" r="2"></circle>
<path d="m13.41 10.59 5.66-5.66"></path>
</svg>
</div>
<div className="transform translate-y-4 transition-transform duration-500 content-text">
<h4 className="text-3xl md:text-5xl font-medium text-black tracking-tighter mb-4 leading-none">
                        Telemetry
                      </h4>
<p className="text-xs md:text-sm text-gray-700 font-normal max-w-sm leading-relaxed">
                        Deployment is finalized. Live telemetry channels open,
                        streaming continuous feedback loops back to the
                        synthesis engine.
                      </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>
<section className="z-10 bg-[#030303]/80 w-full max-w-7xl border-white/10 border mr-auto ml-auto pt-32 pr-8 pb-32 pl-8 relative backdrop-blur-sm">

<div className="absolute inset-0 pointer-events-none z-0 flex justify-evenly">
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '3s', animationDelay: '0s'}}></div>
<div className="beam-line" style={{animationDuration: '3s', animationDelay: '0s'}}></div>
</div>
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '4.5s', animationDelay: '0.7s'}}></div>
<div className="beam-line" style={{animationDuration: '4.5s', animationDelay: '0.7s'}}></div>
</div>
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '6s', animationDelay: '1.4s'}}></div>
<div className="beam-line" style={{animationDuration: '6s', animationDelay: '1.4s'}}></div>
</div>
<div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
</div>
<div className="flex-1 flex flex-col gap-x-10 gap-y-10">

<div className="md:p-16 lg:p-20 overflow-hidden flex flex-col border-white/10 border-b pt-8 pr-8 pb-8 pl-8 relative gap-x-10 gap-y-10 justify-center min-h-[400px]">

<div className="md:w-[70%] lg:w-[50%] pointer-events-none z-0 opacity-70 mix-blend-screen w-full h-full absolute top-0 right-0 gap-x-10 gap-y-10" id="brutalist-canvas-container">
<canvas height="1116" style={{display: 'block', width: '637px', height: '558px'}} width="1274"></canvas>
<canvas height="1054" style={{display: 'block', width: '751px', height: '527px'}} width="1502"></canvas>
</div>
<div className="relative z-10 max-w-5xl">

<div className="flex items-center gap-4 mb-8">
<span className="w-1.5 h-1.5 rounded-none bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,1)]"></span>
<span className="text-[10px] font-medium text-gray-400 tracking-[0.2em] uppercase">
                  Veliq Architecture / Core.01
                </span>
<div className="h-px w-12 bg-white/10"></div>
</div>

<h1 className="text-5xl md:text-7xl lg:text-[6rem] text-white leading-[0.85] mb-8 font-light tracking-tight split-text-down">
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        N
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        E
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        U
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        R
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        A
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        L
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="text-gray-500 font-light tracking-tight">
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          S
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          Y
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          N
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          T
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          H
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          E
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          S
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          I
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          S
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
</span>
<br/>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        M
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        A
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        T
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        R
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        I
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        X
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        A
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        L
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        I
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        G
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        N
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        M
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        E
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        N
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        T
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        .
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
</h1>
<p className="text-sm md:text-base text-gray-400 max-w-xl leading-relaxed font-normal animate-on-scroll">
                Our architecture utilizes deterministic logic gates to bypass
                conventional latency. Every vector is calibrated for absolute
                structural integrity and optimal throughput within the void,
                establishing an unshakeable foundation for complex rendering
                tasks.
              </p>
</div>
</div>

<div className="flex-1 grid grid-cols-1 lg:grid-cols-12 relative border border-white/10 rounded-sm bg-[#0a0a0a] overflow-hidden min-h-[600px]">

<div className="lg:col-span-7 bg-[#030303] text-white p-8 lg:p-16 flex flex-col justify-between relative overflow-hidden lg:border-r border-white/10 animate-on-scroll">

<div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5 -translate-x-1/2 z-0"></div>
<div className="absolute left-0 right-0 top-[60%] h-[1px] bg-white/5 -translate-y-1/2 z-0"></div>
<div className="absolute top-[60%] left-1/2 w-[110%] aspect-square rounded-full border border-white/5 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"></div>
<div className="absolute top-[60%] left-1/2 w-[200%] h-[1px] bg-white/5 -translate-x-1/2 -translate-y-1/2 rotate-[35deg] z-0 origin-center pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full justify-between gap-12 lg:gap-0">

<div className="flex items-center gap-3 text-[10px] font-medium tracking-widest uppercase text-gray-500">
<svg className="text-emerald-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" ry="2" width="16" x="4" y="4"></rect>
<rect height="6" width="6" x="9" y="9"></rect>
<line x1="9" x2="9" y1="1" y2="4"></line>
<line x1="15" x2="15" y1="1" y2="4"></line>
<line x1="9" x2="9" y1="20" y2="23"></line>
<line x1="15" x2="15" y1="20" y2="23"></line>
<line x1="20" x2="23" y1="9" y2="9"></line>
<line x1="20" x2="23" y1="14" y2="14"></line>
<line x1="1" x2="4" y1="9" y2="9"></line>
<line x1="1" x2="4" y1="14" y2="14"></line>
</svg>
                  VELIQ.880
                </div>

<div className="my-auto py-12 lg:py-16">
<h2 className="text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] tracking-tight leading-[0.85] font-light text-white flex flex-col gap-2 split-text-down">
<span className="block text-white">
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              V
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              E
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              L
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              I
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              Q
                            </span>
</span>
</span>
</span>
</span>
<span className="block text-gray-500">
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              P
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              R
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              O
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              C
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              E
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              S
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              S
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              I
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              N
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              G
                            </span>
</span>
</span>
</span>
</span>
<span className="block text-gray-700">
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              U
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              N
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              I
                            </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                              T
                            </span>
</span>
</span>
</span>
</span>
</h2>
</div>

<div className="flex flex-col gap-6 lg:gap-8">
<h3 className="text-lg lg:text-2xl font-light tracking-tight text-gray-400 split-text-down">
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            Q
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            u
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            a
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            n
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            t
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            u
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            m
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            R
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            e
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            s
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            o
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            n
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            a
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            n
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            c
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            e
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            F
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            i
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            e
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            l
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                            d
                          </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
</h3>
<div className="flex items-center gap-4 border-t border-white/10 pt-6 w-full max-w-md">
<div className="w-8 h-[2px] bg-emerald-500"></div>
<span className="text-[10px] font-medium tracking-widest uppercase text-gray-500">
                      Sync: 14.11.2142
                    </span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col border-t lg:border-t-0 border-white/10 animate-on-scroll">

<div className="flex-1 bg-gradient-to-b from-emerald-500 to-emerald-600 border-b border-white/10 p-8 lg:p-12 relative flex flex-col justify-between group overflow-hidden cursor-default transition-transform duration-300">
<div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></div>
<div className="relative z-10 flex justify-end text-emerald-900/40">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
</svg>
</div>
<div className="relative z-10 mt-auto mb-10 lg:mb-16">
<div className="text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-none mb-3 text-emerald-950">
                    1402
                  </div>
<div className="text-sm md:text-base lg:text-lg font-medium tracking-tight text-emerald-900/80">
                    Live Telemetry Streams
                  </div>
</div>
<div className="relative z-10 border-t border-emerald-900/20 pt-6 flex justify-between items-center mt-auto">
<span className="text-[10px] font-semibold tracking-widest uppercase text-emerald-950/70">
                    Sector 9 • 1024 Threads
                  </span>
<svg className="text-emerald-950 group-hover:translate-x-2 transition-transform duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</div>
</div>

<div className="flex-1 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 lg:p-12 relative flex flex-col justify-between group overflow-hidden cursor-default transition-colors duration-500 hover:bg-white/[0.06]">
<div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300"></div>
<div className="relative z-10 flex justify-end text-gray-600 group-hover:text-emerald-400 transition-colors duration-300">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12.01" y1="16" y2="16"></line>
</svg>
</div>
<div className="relative z-10 mt-auto mb-10 lg:mb-16">
<div className="text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-none mb-3 text-white">
                    93
                  </div>
<div className="text-sm md:text-base lg:text-lg font-normal tracking-tight text-gray-400">
                    Anomalies Detected
                  </div>
</div>
<div className="relative z-10 border-t border-white/10 pt-6 flex justify-between items-center mt-auto">
<span className="text-[10px] font-medium tracking-widest uppercase text-gray-500">
                    Sector 4 • 32 Threads
                  </span>
<svg className="text-gray-500 group-hover:translate-x-2 group-hover:text-emerald-400 transition-all duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="z-10 bg-[#030303]/80 w-full max-w-7xl border-white/10 border mr-auto ml-auto pt-32 pr-8 pb-32 pl-8 relative backdrop-blur-sm">

<div className="absolute inset-0 pointer-events-none z-0 flex justify-evenly">
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '3s', animationDelay: '0s'}}></div>
<div className="beam-line" style={{animationDuration: '3s', animationDelay: '0s'}}></div>
</div>
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '4.5s', animationDelay: '0.7s'}}></div>
<div className="beam-line" style={{animationDuration: '4.5s', animationDelay: '0.7s'}}></div>
</div>
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '6s', animationDelay: '1.4s'}}></div>
<div className="beam-line" style={{animationDuration: '6s', animationDelay: '1.4s'}}></div>
</div>
<div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
</div>
<main className="z-10 border-x flex flex-col w-full max-w-[1280px] border-neutral-800 mr-auto ml-auto relative min-h-[800px]">

<div className="md:p-12 lg:p-16 overflow-hidden flex flex-col bg-[#0a0a0a]/50 border-white/10 border relative shadow-[0_0_50px_rgba(0,0,0,0.5)] justify-center">

<div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/20 z-20"></div>
<div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/20 z-20"></div>
<div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/20 z-20"></div>
<div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/20 z-20"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">

<div className="flex items-center justify-center gap-4 mb-8 animate-on-scroll">
<div className="h-px w-8 bg-white/10"></div>
<span className="w-1.5 h-1.5 rounded-none bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,1)]"></span>
<span className="text-[10px] font-medium text-gray-400 tracking-[0.2em] uppercase">
                  Veliq OS / Telemetry
                </span>
<span className="w-1.5 h-1.5 rounded-none bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,1)]"></span>
<div className="h-px w-8 bg-white/10"></div>
</div>

<h2 className="text-4xl md:text-6xl lg:text-7xl text-white leading-[0.85] mb-6 font-light tracking-tight split-text-down">
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        N
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        E
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        T
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        W
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        O
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        R
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        K
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        C
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        O
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        R
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        E
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="text-gray-500 font-light tracking-tight">
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          T
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          E
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          L
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          E
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          M
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          E
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          T
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          R
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          Y
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
</span>
<br/>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        V
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        I
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        S
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        U
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        A
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        L
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        I
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        Z
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        A
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        T
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        I
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        O
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        N
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        .
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
</h2>
<p className="text-sm md:text-base text-gray-400 max-w-xl leading-relaxed font-normal mb-12 animate-on-scroll">
                Observe real-time node utilization, cross-cluster latency, and
                dynamic load distribution across our zero-trust edge compute
                infrastructure.
              </p>

<div className="flex items-center justify-center gap-4 animate-on-scroll">
<span className="text-[10px] uppercase tracking-widest font-medium text-gray-500">
                  Diagnostics Mode
                </span>
<button aria-checked="true" className="animate-on-scroll" role="switch" type="white/20 cursor-pointer group hover:border-emerald-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]">
<div className="absolute left-1 top-1 w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-transform translate-x-6"></div>
</button>
<span className="text-[10px] uppercase tracking-widest font-semibold text-white">
                  Live Telemetry
                  <span className="text-emerald-500 ml-1">Active</span>
</span>
</div>
</div>
</div>

<div className="md:p-8 border-neutral-800 border-b pt-4 pr-4 pb-4 pl-4 relative">

<div className="relative border border-neutral-800/80 bg-neutral-900/40 p-1 flex flex-col lg:flex-row gap-1">

<section className="flex-1 min-h-[500px] flex overflow-hidden bg-neutral-950 relative items-center justify-center">

<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="z-10 mix-blend-lighten absolute top-0 right-0 bottom-0 left-0" id="webgl-canvas-aura-emn7qynaw1v6smw73">
<canvas height="1000" style={{display: 'block', width: '814px', height: '500px'}} width="1628"></canvas>
</div>

<div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-neutral-600 z-20"></div>
<div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-neutral-600 z-20"></div>
<div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-neutral-600 z-20"></div>
<div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-neutral-600 z-20"></div>

<div className="absolute bottom-8 left-8 z-20 flex items-center gap-3 bg-neutral-950/50 backdrop-blur-sm px-4 py-2 border border-white/5 rounded-full">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,1)]"></div>
<span className="text-[10px] font-medium tracking-widest uppercase text-emerald-400">
                    Core Simulation // Active
                  </span>
</div>

<div className="absolute top-8 right-8 z-20">
<span className="text-[10px] font-mono tracking-widest uppercase text-neutral-600">
                    VELIQ.VER.880
                  </span>
</div>


</section>

<section className="w-full lg:w-80 flex flex-col gap-1 relative z-20">

<div className="flex-1 bg-emerald-600 p-8 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="flex justify-between items-start">
<iconify-icon className="text-3xl text-emerald-200" icon="solar:cpu-bold-duotone" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-semibold tracking-widest text-emerald-300 uppercase">
                      SYS_LOAD
                    </span>
</div>
<div className="">
<div className="text-5xl font-semibold tracking-tighter text-white mb-1">
                      99.8%
                    </div>
<div className="text-xs font-medium text-emerald-200">
                      Processing Node Utilization
                    </div>
</div>
</div>

<div className="flex-1 bg-gray-200 p-8 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="flex justify-between items-start">
<iconify-icon className="text-3xl text-neutral-800" icon="solar:server-square-bold-duotone" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
                      SYNC_RATE
                    </span>
</div>
<div className="">
<div className="text-5xl font-semibold tracking-tighter text-neutral-900 mb-1">
                      2ms
                    </div>
<div className="text-xs font-medium text-neutral-600">
                      Cross-cluster Latency
                    </div>
</div>
</div>
</section>
</div>
</div>

<section className="relative grid grid-cols-1 md:grid-cols-3 gap-0 border-b border-neutral-800">

<div className="relative p-10 border-b md:border-b-0 md:border-r border-neutral-800 group hover:bg-neutral-900/50 transition-colors duration-500 animate-on-scroll">

<div className="absolute inset-0 border border-transparent group-hover:border-neutral-700/50 transition-colors duration-500 pointer-events-none"></div>
<iconify-icon className="text-2xl text-neutral-300 mb-6" icon="solar:database-bold-duotone" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-semibold text-neutral-100 tracking-tight mb-3 split-text-down">
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        S
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        t
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        a
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        t
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        e
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        P
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        e
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        r
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        s
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        i
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        s
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        t
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        e
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        n
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        c
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        e
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-medium">
                Maintain rigorous volume continuity across parallel
                environments. Snapshots occur continuously without operational
                decay.
              </p>
</div>

<div className="relative p-10 border-b md:border-b-0 md:border-r border-neutral-800 group hover:bg-neutral-900/50 transition-colors duration-500 animate-on-scroll">
<div className="absolute inset-0 border border-transparent group-hover:border-neutral-700/50 transition-colors duration-500 pointer-events-none"></div>
<iconify-icon className="text-2xl text-neutral-300 mb-6" icon="solar:chart-square-bold-duotone" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-semibold text-neutral-100 tracking-tight mb-3 split-text-down">
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        T
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        e
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        l
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        e
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        m
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        e
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        t
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        r
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        y
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        A
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        g
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        g
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        r
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        e
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        g
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        a
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        t
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        i
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        o
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        n
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-medium">
                Consume scattered log artifacts into a strictly parsed, singular
                data structure. Reveal truth through raw metric convergence.
              </p>
</div>

<div className="relative p-10 group hover:bg-neutral-900/50 transition-colors duration-500 animate-on-scroll">
<div className="absolute inset-0 border border-transparent group-hover:border-neutral-700/50 transition-colors duration-500 pointer-events-none"></div>
<iconify-icon className="text-2xl text-neutral-300 mb-6" icon="solar:shield-keyhole-bold-duotone" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-semibold text-neutral-100 tracking-tight mb-3 split-text-down">
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        I
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        d
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        e
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        n
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        t
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        i
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        t
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        y
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        E
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        n
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        c
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        r
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        y
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        p
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        t
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        i
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        o
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        n
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-medium">
                Zero-trust boundary logic applied universally. Cryptographic
                exchange happens invisibly at the compute edge.
              </p>
</div>
</section>

</main>
</section>
<section className="z-10 bg-[#030303]/80 w-full max-w-7xl border-white/10 border mr-auto ml-auto pt-32 pr-8 pb-32 pl-8 relative backdrop-blur-sm">

<div className="absolute inset-0 pointer-events-none z-0 flex justify-evenly">
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '3s', animationDelay: '0s'}}></div>
<div className="beam-line" style={{animationDuration: '3s', animationDelay: '0s'}}></div>
</div>
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '4.5s', animationDelay: '0.7s'}}></div>
<div className="beam-line" style={{animationDuration: '4.5s', animationDelay: '0.7s'}}></div>
</div>
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '6s', animationDelay: '1.4s'}}></div>
<div className="beam-line" style={{animationDuration: '6s', animationDelay: '1.4s'}}></div>
</div>
<div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
</div>
<div className="z-10 flex flex-col gap-12 w-full relative gap-x-12 gap-y-12">

<div className="md:p-12 lg:p-16 overflow-hidden flex flex-col bg-[#0a0a0a]/50 border-white/10 border relative shadow-[0_0_50px_rgba(0,0,0,0.5)] justify-center">

<div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/20 z-20"></div>
<div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/20 z-20"></div>
<div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/20 z-20"></div>
<div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/20 z-20"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">

<div className="flex items-center justify-center gap-4 mb-8 animate-on-scroll">
<div className="h-px w-8 bg-white/10"></div>
<span className="w-1.5 h-1.5 rounded-none bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,1)]"></span>
<span className="text-[10px] font-medium text-gray-400 tracking-[0.2em] uppercase">
                  Veliq OS / Verification
                </span>
<span className="w-1.5 h-1.5 rounded-none bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,1)]"></span>
<div className="h-px w-8 bg-white/10"></div>
</div>

<h2 className="text-4xl md:text-6xl lg:text-7xl text-white leading-[0.85] mb-6 font-light tracking-tight split-text-down">
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        N
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        E
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        T
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        W
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        O
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        R
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        K
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="text-gray-500 font-light tracking-tight">
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          C
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          O
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          N
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          S
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          E
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          N
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          S
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          U
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          S
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
</span>
<br/>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        L
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        O
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        G
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        S
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        .
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
</h2>
<p className="text-sm md:text-base text-gray-400 max-w-xl leading-relaxed font-normal mb-0 animate-on-scroll">
                Verified execution reports from enterprise nodes.
                Cryptographically signed testimonials regarding system
                stability, latency reduction, and absolute structural integrity.
              </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 border border-white/10 bg-[#0a0a0a] relative z-10">

<div className="md:col-span-7 lg:p-12 md:border-r flex flex-col group transition-colors duration-500 hover:bg-[#0a0a0a] overflow-hidden bg-[#030303] border-white/10 border-b pt-8 pr-8 pb-8 pl-8 relative animate-on-scroll">
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">
<div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
<span className="text-[10px] font-medium tracking-widest uppercase text-gray-500">
                      Log / 001.A
                    </span>
<div className="flex items-center gap-1">
<svg className="text-emerald-500" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-emerald-500" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-emerald-500" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-emerald-500" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-emerald-500" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
</div>
<p className="text-xl md:text-2xl font-light text-white leading-relaxed tracking-tight mb-10">
                    "The deterministic routing protocols effectively eliminated
                    our cross-cluster latency. We're processing massive
                    telemetry streams without a single dropped packet. Absolute
                    structural integrity achieved from day one."
                  </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/10 mt-auto">
<div className="flex bg-center w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52f90c3d-9f64-4db9-997b-8765ea3ff941_320w.jpg)] bg-cover border-0 items-center justify-center"></div>
<div className="">
<div className="text-sm font-semibold text-white">
                      Dr. Elena Rostova
                    </div>
<div className="text-[10px] uppercase tracking-widest text-gray-500 mt-0.5">
                      Chief Data Scientist, Voxel Dynamics
                    </div>
</div>
</div>
</div>
</div>

<div className="md:col-span-5 lg:p-12 flex flex-col group overflow-hidden bg-gradient-to-b from-emerald-500 to-emerald-600 border-emerald-400/30 border-b pt-8 pr-8 pb-8 pl-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.4),_inset_0_-2px_6px_rgba(0,0,0,0.2),_0_12px_24px_rgba(16,185,129,0.15)] animate-on-scroll">
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">
<div className="flex items-center justify-between mb-8 border-b border-emerald-900/20 pb-4">
<span className="text-[10px] font-semibold tracking-widest uppercase text-emerald-950/70">
                      Log / Verified
                    </span>
<div className="flex items-center gap-1">
<svg className="text-emerald-900" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-emerald-900" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-emerald-900" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon className="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-emerald-900" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-emerald-900" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
</div>
<p className="text-lg md:text-xl font-medium text-emerald-950 leading-relaxed tracking-tight mix-blend-color-burn mb-10">
                    "Deployment was seamless. The live feedback loops allowed us
                    to stabilize our neural matrices in record time. It's the
                    most coherent infrastructure we've ever utilized."
                  </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-emerald-900/20 mt-auto">
<div className="flex bg-center w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf728e3d-89a4-468d-96e5-d2d55f70e406_320w.webp)] bg-cover border-0 items-center justify-center"></div>
<div className="">
<div className="text-sm font-semibold text-emerald-950">
                      Marcus Chen
                    </div>
<div className="text-[10px] uppercase tracking-widest text-emerald-900/80 mt-0.5">
                      Systems Ops, Quantum Edge
                    </div>
</div>
</div>
</div>
</div>

<div className="md:col-span-5 lg:p-12 md:border-b-0 md:border-r flex flex-col group transition-colors duration-500 hover:bg-white/[0.06] overflow-hidden bg-gradient-to-b from-white/[0.04] to-white/[0.01] border-white/10 border-b pt-8 pr-8 pb-8 pl-8 relative animate-on-scroll">
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">
<div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
<span className="text-[10px] font-medium tracking-widest uppercase text-gray-500">
                      Log / 003.C
                    </span>
<div className="flex items-center gap-1">
<svg className="text-emerald-500" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-emerald-500" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-emerald-500" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-emerald-500" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-emerald-500" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
</div>
<p className="text-lg md:text-xl font-light text-gray-300 leading-relaxed tracking-tight mb-10">
                    "Zero-fault tolerance isn't just a marketing term here. We
                    ran automated stress algorithms for 72 hours straight, and
                    the state persistence never wavered once."
                  </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/10 mt-auto">
<div className="flex bg-center w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/03517ac1-a924-43ae-88b0-64089e9abe04_320w.webp)] bg-cover border-0 items-center justify-center"></div>
<div>
<div className="text-sm font-semibold text-white">
                      Sarah Jenkins
                    </div>
<div className="text-[10px] uppercase tracking-widest text-gray-500 mt-0.5">
                      Infrastructure Lead, Alt-Net
                    </div>
</div>
</div>
</div>
</div>

<div className="md:col-span-7 lg:p-12 flex flex-col group transition-colors duration-500 hover:bg-[#0a0a0a] overflow-hidden bg-[#030303] pt-8 pr-8 pb-8 pl-8 relative animate-on-scroll">
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">
<div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
<span className="text-[10px] font-medium tracking-widest uppercase text-gray-500">
                      Log / Verified
                    </span>
<div className="flex items-center gap-1">
<svg className="text-emerald-500" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-emerald-500" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-emerald-500" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon className="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-emerald-500" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-emerald-500" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
</div>
<p className="text-xl md:text-2xl font-light text-white leading-relaxed tracking-tight mb-10">
                    "We completely bypassed conventional rendering latency. The
                    dynamic scaling adapts instantly to our workloads, giving us
                    unprecedented control over compute allocation without a
                    single interface stutter."
                  </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/10 mt-auto">
<div className="flex bg-center w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f869148-195a-4100-981c-34c0ee95afe0_320w.webp)] bg-cover border-0 items-center justify-center"></div>
<div>
<div className="text-sm font-semibold text-white">
                      David Park
                    </div>
<div className="text-[10px] uppercase tracking-widest text-gray-500 mt-0.5">
                      CTO, Synthetix.ai
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="z-10 bg-[#030303]/80 w-full max-w-7xl border-white/10 border mr-auto ml-auto pt-32 pr-8 pb-32 pl-8 relative backdrop-blur-sm">

<div className="absolute inset-0 pointer-events-none z-0 flex justify-evenly">
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '3s', animationDelay: '0s'}}></div>
<div className="beam-line" style={{animationDuration: '3s', animationDelay: '0s'}}></div>
</div>
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '4.5s', animationDelay: '0.7s'}}></div>
<div className="beam-line" style={{animationDuration: '4.5s', animationDelay: '0.7s'}}></div>
</div>
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '6s', animationDelay: '1.4s'}}></div>
<div className="beam-line" style={{animationDuration: '6s', animationDelay: '1.4s'}}></div>
</div>
<div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
</div>
<div className="z-10 w-full relative flex flex-col gap-12">

<div className="md:p-12 lg:p-16 overflow-hidden flex flex-col bg-[#0a0a0a]/50 border-white/10 border relative shadow-[0_0_50px_rgba(0,0,0,0.5)] justify-center">

<div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/20 z-20"></div>
<div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/20 z-20"></div>
<div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/20 z-20"></div>
<div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/20 z-20"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">

<div className="flex items-center justify-center gap-4 mb-8 animate-on-scroll">
<div className="h-px w-8 bg-white/10"></div>
<span className="w-1.5 h-1.5 rounded-none bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,1)]"></span>
<span className="text-[10px] font-medium text-gray-400 tracking-[0.2em] uppercase">
                  Veliq Network / Allocation
                </span>
<span className="w-1.5 h-1.5 rounded-none bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,1)]"></span>
<div className="h-px w-8 bg-white/10"></div>
</div>

<h2 className="text-4xl md:text-6xl lg:text-7xl text-white leading-[0.85] mb-6 font-light tracking-tight split-text-down">
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        R
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        E
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        S
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        O
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        U
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        R
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        C
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        E
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="text-gray-500 font-light tracking-tight">
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          A
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          L
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          L
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          O
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          C
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          A
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          T
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          I
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          O
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          N
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
</span>
<br/>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        M
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        A
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        T
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        R
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        I
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        X
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        .
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
</h2>
<p className="text-sm md:text-base text-gray-400 max-w-xl leading-relaxed font-normal mb-12 animate-on-scroll">
                Select your required compute threshold. Our dynamic scaling
                infrastructure adapts instantly to your operational demands
                without latency overhead.
              </p>

<div className="flex items-center justify-center gap-4 animate-on-scroll">
<span className="text-[10px] uppercase tracking-widest font-medium text-gray-500">
                  Monthly
                </span>
<button aria-checked="true" className="relative w-12 h-6 bg-white/10 rounded-full border border-white/20 cursor-pointer group hover:border-emerald-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] animate-on-scroll" role="switch" type="button">
<div className="absolute left-1 top-1 w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-transform translate-x-6"></div>
</button>
<span className="text-[10px] uppercase tracking-widest font-semibold text-white">
                  Annually
                  <span className="text-emerald-500 ml-1">-20%</span>
</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 border border-white/10 bg-[#0a0a0a] relative z-10">

<div className="flex-1 lg:p-12 lg:border-b-0 lg:border-r flex flex-col group transition-colors duration-500 hover:bg-[#0a0a0a] overflow-hidden bg-[#030303] border-white/10 border-b pt-8 pr-8 pb-8 pl-8 relative animate-on-scroll">
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
<span className="text-[10px] font-medium tracking-widest uppercase text-gray-500">
                    Node / Standard
                  </span>
<svg className="text-gray-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect>
<rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect>
<line x1="6" x2="6.01" y1="6" y2="6"></line>
<line x1="6" x2="6.01" y1="18" y2="18"></line>
</svg>
</div>
<div className="mb-10">
<div className="flex items-baseline gap-2 mb-2">
<span className="text-5xl md:text-6xl font-light tracking-tight text-white">
                      $19
                    </span>
<span className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">
                      / cycle
                    </span>
</div>
<p className="text-xs text-gray-400 mt-4 leading-relaxed font-normal">
                    Standard allocation for localized synthesis tasks and minor
                    rendering operations.
                  </p>
</div>
<div className="flex-1 mb-10">
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3 text-sm text-gray-300 font-normal">
<svg className="w-4 h-4 text-emerald-500 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">256 Core Threads</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300 font-normal">
<svg className="w-4 h-4 text-emerald-500 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">1TB Matrix Storage</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300 font-normal">
<svg className="w-4 h-4 text-emerald-500 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">Standard Telemetry Logs</span>
</li>
</ul>
</div>
<button className="w-full py-4 border border-white/20 text-[10px] uppercase tracking-widest text-white font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 relative z-10 backdrop-blur-sm mt-auto">
                  Initialize Node
                </button>
</div>
</div>

<div className="flex-1 lg:p-12 lg:border-b-0 lg:border-r flex flex-col group overflow-hidden bg-gradient-to-b from-emerald-500 to-emerald-600 border-emerald-400/30 border-b pt-8 pr-8 pb-8 pl-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.4),_inset_0_-2px_6px_rgba(0,0,0,0.2),_0_12px_24px_rgba(16,185,129,0.15)] animate-on-scroll">
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-center justify-between mb-8 border-b border-emerald-900/20 pb-4">
<span className="text-[10px] font-semibold tracking-widest uppercase text-emerald-950/70">
                    Cluster / Advanced
                  </span>
<span className="px-2.5 py-1 text-[8px] uppercase tracking-widest font-semibold bg-emerald-950 text-emerald-400 border border-emerald-900/50 shadow-sm">
                    Optimal
                  </span>
</div>
<div className="mb-10">
<div className="flex items-baseline gap-2 mb-2">
<span className="text-5xl md:text-6xl font-normal tracking-tight text-emerald-950">
                      $89
                    </span>
<span className="text-[10px] text-emerald-900/80 font-semibold uppercase tracking-widest">
                      / cycle
                    </span>
</div>
<p className="text-xs text-emerald-900 mt-4 leading-relaxed mix-blend-color-burn font-medium">
                    Elevated throughput for massive neural structures and
                    continuous telemetry streams.
                  </p>
</div>
<div className="flex-1 mb-10">
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3 text-sm text-emerald-950 font-medium">
<svg className="w-4 h-4 text-emerald-900 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">1024 Core Threads</span>
</li>
<li className="flex items-start gap-3 text-sm text-emerald-950 font-medium">
<svg className="w-4 h-4 text-emerald-900 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">5TB Matrix Storage</span>
</li>
<li className="flex items-start gap-3 text-sm text-emerald-950 font-medium">
<svg className="w-4 h-4 text-emerald-900 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span>Live Telemetry Channels</span>
</li>
</ul>
</div>
<button className="w-full py-4 bg-emerald-950 text-[10px] uppercase tracking-widest text-emerald-400 font-semibold hover:bg-emerald-900 transition-all duration-300 relative z-10 shadow-[0_0_15px_rgba(2,44,34,0.3)] mt-auto">
                  Deploy Cluster
                </button>
</div>
</div>

<div className="flex-1 lg:p-12 flex flex-col group transition-colors duration-500 hover:bg-white/[0.06] overflow-hidden bg-gradient-to-b from-white/[0.04] to-white/[0.01] pt-8 pr-8 pb-8 pl-8 relative animate-on-scroll">
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
<span className="text-[10px] font-medium tracking-widest uppercase text-gray-500">
                    Matrix / Enterprise
                  </span>
<svg className="text-gray-600 group-hover:text-emerald-400 transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
<path d="M3 12A9 3 0 0 0 21 12"></path>
</svg>
</div>
<div className="mb-10">
<div className="flex items-baseline gap-2 mb-2">
<span className="text-5xl md:text-6xl font-light tracking-tight text-white">
                      Custom
                    </span>
</div>
<p className="text-xs text-gray-400 mt-4 leading-relaxed font-normal">
                    Absolute structural integrity for hyper-scale operations
                    with dedicated bridging.
                  </p>
</div>
<div className="flex-1 mb-10">
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3 text-sm text-gray-300 font-normal">
<svg className="w-4 h-4 text-emerald-500 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">Unlimited Threading</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300 font-normal">
<svg className="w-4 h-4 text-emerald-500 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">Infinite Cloud Storage</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300 font-normal">
<svg className="w-4 h-4 text-emerald-500 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">Direct Command Access</span>
</li>
</ul>
</div>
<button className="w-full py-4 bg-white text-[10px] uppercase tracking-widest text-black font-semibold hover:bg-gray-200 transition-all duration-300 relative z-10 mt-auto">
                  Contact Command
                </button>
</div>
</div>
</div>
</div>
</section>
<section className="z-10 bg-[#030303]/80 w-full max-w-7xl border-white/10 border mr-auto ml-auto pt-32 pr-8 pb-32 pl-8 relative backdrop-blur-sm">

<div className="absolute inset-0 pointer-events-none z-0 flex justify-evenly">
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '3s', animationDelay: '0s'}}></div>
<div className="beam-line" style={{animationDuration: '3s', animationDelay: '0s'}}></div>
</div>
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '4.5s', animationDelay: '0.7s'}}></div>
<div className="beam-line" style={{animationDuration: '4.5s', animationDelay: '0.7s'}}></div>
</div>
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '6s', animationDelay: '1.4s'}}></div>
<div className="beam-line" style={{animationDuration: '6s', animationDelay: '1.4s'}}></div>
</div>
<div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
</div>
<div className="z-10 w-full relative">

<div className="md:p-16 lg:p-24 overflow-hidden flex flex-col text-center bg-gradient-to-b from-[#0a0a0a]/80 to-[#030303] border-white/10 border relative shadow-[0_0_50px_rgba(0,0,0,0.5)] items-center justify-center">

<div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/20 z-20"></div>
<div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/20 z-20"></div>
<div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/20 z-20"></div>
<div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/20 z-20"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0%,transparent_60%)] pointer-events-none z-0"></div>

<div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-lighten flex items-center justify-center overflow-hidden" id="webgl-canvas-cta-aura-emn7umqt72hftyznj">
<canvas height="1104" style={{display: 'block', width: '1212px', height: '552px'}} width="2424"></canvas>
</div>

<div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

<div className="flex items-center justify-center gap-4 mb-8 animate-on-scroll">
<div className="h-px w-8 bg-white/10"></div>
<span className="w-1.5 h-1.5 rounded-none bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,1)]"></span>
<span className="text-[10px] font-medium text-gray-400 tracking-[0.2em] uppercase">
                  Veliq Network / Deployment
                </span>
<span className="w-1.5 h-1.5 rounded-none bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,1)]"></span>
<div className="h-px w-8 bg-white/10"></div>
</div>

<h2 className="text-4xl md:text-6xl lg:text-7xl text-white leading-[0.85] mb-6 font-light tracking-tight split-text-down">
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        C
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        O
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        M
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        M
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        E
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        N
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        C
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        E
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="text-gray-500 font-light tracking-tight">
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          N
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          E
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          U
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          R
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          A
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                          L
                        </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
</span>
<br/>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        S
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        Y
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        N
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        T
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        H
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        E
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        S
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        I
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        S
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
                        .
                      </span>
</span>
</span>
</span>
<span className="char-wrap" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom'}}>
<span className="char-inner" style={{display: 'inline-block'}}>
<br/>
</span>
</span>
</h2>
<p className="text-sm md:text-base text-gray-400 max-w-xl leading-relaxed font-normal mb-12 animate-on-scroll">
                Join the network of enterprise nodes leveraging zero-latency
                deterministic routing. Provision your cluster instantly and
                scale without friction.
              </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-on-scroll">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-[10px] uppercase tracking-widest text-black font-semibold hover:bg-gray-200 transition-all duration-300 relative z-10 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] animate-on-scroll">
                  Initialize Node
                  <svg className="lucide lucide-arrow-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<button className="w-full sm:w-auto px-8 py-4 border border-white/20 text-[10px] uppercase tracking-widest text-white font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 relative z-10 backdrop-blur-sm flex items-center justify-center gap-2 group animate-on-scroll">
<svg className="lucide lucide-terminal text-gray-400 group-hover:text-emerald-400 transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="4 17 10 11 4 5"></polyline>
<line x1="12" x2="20" y1="19" y2="19"></line>
</svg>
                  Read Documentation
                </button>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full max-w-7xl mx-auto border-b border-white/10 relative z-10 bg-[#030303]/90 backdrop-blur-sm">
<footer className="overflow-hidden md:px-12 selection:bg-emerald-500/30 text-white font-sans bg-[#030303] w-full border-white/10 border-t pt-24 pr-6 pb-8 pl-6 relative" style={{backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 1px, transparent 1px, transparent 12px)'}}>
<div className="absolute inset-0 pointer-events-none z-0 flex justify-evenly border-x border-white/10">
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '3s', animationDelay: '0s'}}></div>
<div className="beam-line" style={{animationDuration: '3s', animationDelay: '0s'}}></div>
</div>
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '4.5s', animationDelay: '0.7s'}}></div>
<div className="beam-line" style={{animationDuration: '4.5s', animationDelay: '0.7s'}}></div>
</div>
<div className="w-px h-full bg-white/[0.03] relative overflow-hidden">
<div className="beam-line" style={{animationDuration: '6s', animationDelay: '1.4s'}}></div>
<div className="beam-line" style={{animationDuration: '6s', animationDelay: '1.4s'}}></div>
</div>
<div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
<div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-[#030303]" style={{border: '1px solid rgba(255,255,255,0.2)'}}></div>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full text-center z-0 pointer-events-none select-none">
<h1 className="text-[20vw] leading-[0.75] tracking-tighter font-light text-transparent bg-clip-text opacity-40" style={{backgroundImage: 'linear-gradient(to bottom, rgba(16,185,129,0.4) 0%, rgba(16,185,129,0.01) 100%)'}}>
            Veliq AI
          </h1>
</div>
<div className="absolute bottom-[18%] left-[36%] md:left-[35.5%] flex items-center justify-center z-10 hidden sm:flex"></div>
<div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col xl:flex-row justify-between gap-20 xl:gap-8 mb-40">
<div className="w-full max-w-md relative p-8 bg-[#0a0a0a] border border-white/10 rounded-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_8px_16px_rgba(0,0,0,0.4)]">
<div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-emerald-500/40"></div>
<div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-emerald-500/40"></div>
<div className="flex items-center gap-4 mb-6">
<span className="w-1.5 h-1.5 rounded-none bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,1)]"></span>
<span className="text-[10px] font-mono text-gray-400 tracking-[0.2em] uppercase">
                Comms / Sync
              </span>
</div>
<h2 className="text-3xl font-light text-white mb-8 tracking-tight">
              Initialize updates
            </h2>
<div className="flex flex-col gap-3">
<div className="flex items-center bg-[#030303] border border-white/10 rounded-none p-1">
<input className="bg-transparent font-mono text-xs uppercase tracking-widest text-white px-4 py-3 w-full focus:outline-none placeholder:text-gray-600" placeholder="ENTER_EMAIL" type="email"/>
</div>
<button className="bg-white hover:bg-gray-200 text-black transition-colors duration-300 text-xs font-mono uppercase tracking-widest px-6 py-3.5 rounded-none whitespace-nowrap font-semibold flex items-center justify-center gap-2 w-full">
                Establish Link
                <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
<div className="flex flex-row flex-wrap sm:flex-nowrap gap-16 sm:gap-24 lg:gap-32 mt-8 xl:mt-0">
<div className="flex flex-col gap-4">
<span className="text-[10px] font-mono text-gray-500 tracking-[0.2em] uppercase mb-2 border-b border-white/10 pb-3">
                Platform
              </span>
<a className="text-sm font-normal text-gray-400 hover:text-emerald-400 transition-colors" href="#">
                Architecture
              </a>
<a className="text-sm font-normal text-gray-400 hover:text-emerald-400 transition-colors" href="#">
                Compute Nodes
              </a>
<a className="text-sm font-normal text-gray-400 hover:text-emerald-400 transition-colors" href="#">
                Benchmarks
              </a>
<a className="text-sm font-normal text-gray-400 hover:text-emerald-400 transition-colors" href="#">
                Pricing Tiers
              </a>
<a className="text-sm font-normal text-gray-400 hover:text-emerald-400 transition-colors" href="#">
                Ecosystem
              </a>
<a className="text-sm font-normal text-gray-400 hover:text-emerald-400 transition-colors" href="#">
                Security Protocol
              </a>
<a className="text-sm font-normal text-gray-400 hover:text-emerald-400 transition-colors" href="#">
                Core Research
              </a>
</div>
<div className="flex flex-col gap-4">
<span className="text-[10px] font-mono text-gray-500 tracking-[0.2em] uppercase mb-2 border-b border-white/10 pb-3">
                Developers
              </span>
<a className="text-sm font-normal text-gray-400 hover:text-emerald-400 transition-colors whitespace-nowrap" href="#">
                API Reference
              </a>
<a className="text-sm font-normal text-gray-400 hover:text-emerald-400 transition-colors whitespace-nowrap" href="#">
                Documentation
              </a>
<a className="text-sm font-normal text-gray-400 hover:text-emerald-400 transition-colors whitespace-nowrap" href="#">
                System Status
              </a>
<a className="text-sm font-normal text-gray-400 hover:text-emerald-400 transition-colors whitespace-nowrap" href="#">
                SLA &amp; Terms
              </a>
</div>
<div className="flex flex-col gap-4">
<span className="text-[10px] font-mono text-gray-500 tracking-[0.2em] uppercase mb-2 border-b border-white/10 pb-3">
                Network
              </span>
<a className="text-sm font-normal text-gray-400 hover:text-emerald-400 transition-colors" href="#">
                X / Twitter
              </a>
<a className="text-sm font-normal text-gray-400 hover:text-emerald-400 transition-colors" href="#">
                GitHub
              </a>
<a className="text-sm font-normal text-gray-400 hover:text-emerald-400 transition-colors" href="#">
                Discord
              </a>
</div>
</div>
</div>
<div className="z-10 flex flex-col md:flex-row gap-6 w-full max-w-7xl border-white/10 border-t mr-auto ml-auto pt-8 relative gap-x-6 gap-y-6 items-center justify-between">
<div className="flex items-center gap-4 text-[10px] font-mono tracking-widest uppercase">
<span className="text-white/60">© 2026, Veliq AI.</span>
<div className="w-1 h-1 bg-white/20"></div>
<span className="text-gray-500">Engineered by Core Research.</span>
</div>
<a className="flex items-center gap-3 text-[10px] font-mono tracking-widest uppercase text-gray-500 hover:text-white transition-colors group" href="#">
            Powered by Neural Engine
            <div className="w-6 h-6 border border-white/10 rounded-sm flex items-center justify-center text-white/50 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-colors bg-[#0a0a0a]">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12">
<rect height="16" rx="2" ry="2" width="16" x="4" y="4"></rect>
<rect height="6" width="6" x="9" y="9"></rect>
<line x1="9" x2="9" y1="1" y2="4"></line>
<line x1="15" x2="15" y1="1" y2="4"></line>
<line x1="9" x2="9" y1="20" y2="23"></line>
<line x1="15" x2="15" y1="20" y2="23"></line>
<line x1="20" x2="23" y1="9" y2="9"></line>
<line x1="20" x2="23" y1="14" y2="14"></line>
<line x1="1" x2="4" y1="9" y2="9"></line>
<line x1="1" x2="4" y1="14" y2="14"></line>
</svg>
</div>
</a>
</div>
</footer>
</footer>







    </>
  );
}
