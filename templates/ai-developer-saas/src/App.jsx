import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                    (function () {
                      const canvas = document.getElementById('performanceChart');
                      if (!canvas) return;
                      const ctx = canvas.getContext('2d');

                      const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                      const tokensBase = [150, 230, 180, 320, 290, 140, 190];
                      const latencyBase = [400, 380, 420, 350, 390, 410, 400];

                      function makeBarGradient(colorTop, colorBottom, area) {
                        const g = ctx.createLinearGradient(0, area.top, 0, area.bottom);
                        g.addColorStop(0, colorTop);
                        g.addColorStop(1, colorBottom);
                        return g;
                      }

                      let chart = null;
                      let gradients = null;

                      function initChart() {
                        if (chart) {
                          chart.destroy();
                        }

                        chart = new Chart(ctx, {
                          type: 'bar',
                          data: {
                            labels,
                            datasets: [
                              {
                                type: 'bar',
                                label: 'Tokens (k)',
                                data: tokensBase,
                                backgroundColor: (c) => {
                                  const {chartArea} = c.chart;
                                  if (!chartArea) return '#3b82f6';
                                  if (!gradients) gradients = {};
                                  if (!gradients.tokens) gradients.tokens = makeBarGradient('#3b82f6', '#1d4ed8', chartArea);
                                  return gradients.tokens;
                                },
                                borderRadius: 8,
                                barPercentage: 0.6,
                                animation: {
                                  duration: 1500,
                                  easing: 'easeOutQuart'
                                }
                              },
                              {
                                type: 'line',
                                label: 'Latency (ms)',
                                data: latencyBase,
                                yAxisID: 'y2',
                                borderColor: '#06b6d4',
                                tension: 0.4,
                                pointRadius: 0,
                                borderWidth: 2,
                                animation: {
                                  duration: 2000,
                                  easing: 'easeOutSine'
                                }
                              }
                            ]
                          },
                          options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: { legend: { display: false } },
                            scales: {
                              x: { grid: { display: false }, ticks: { color: '#888' } },
                              y: { display: false },
                              y2: { display: false }
                            }
                          }
                        });
                      }

                      // Loop the animation by re-initializing the chart
                      initChart();
                      setInterval(initChart, 5000); // Re-animate every 5 seconds
                    })();
                  


            window.updateStep = function(step) {
              // 1. Reset Buttons
              document.querySelectorAll('[id^="btn-step-"]').forEach(btn => {
                // Reset classes to inactive state
                btn.className = 'px-5 py-2 text-neutral-500 hover:text-white text-sm font-medium flex items-center gap-2 transition-all duration-300 cursor-pointer';
                // Reset the number circle style
                const numSpan = btn.querySelector('span:first-child');
                if (numSpan) {
                   numSpan.className = 'w-5 h-5 rounded-full border border-neutral-700 flex items-center justify-center text-xs';
                }
              });

              // 2. Set Active Button
              const activeBtn = document.getElementById('btn-step-' + step);
              if (activeBtn) {
                activeBtn.className = 'px-5 py-2 bg-white text-black rounded-full text-sm font-semibold shadow-sm flex items-center gap-2 transition-all duration-300 cursor-default';
                const activeNumSpan = activeBtn.querySelector('span:first-child');
                if (activeNumSpan) {
                   activeNumSpan.className = 'font-bold';
                }
              }

              // 3. Hide all Content & Visuals
              document.querySelectorAll('.step-content').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('block', 'animate-fade-in');
              });
              document.querySelectorAll('.step-visual').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('block');
              });

              // 4. Show Active Content & Visual
              const activeContent = document.getElementById('content-step-' + step);
              const activeVisual = document.getElementById('visual-step-' + step);

              if (activeContent) {
                 activeContent.classList.remove('hidden');
                 activeContent.classList.add('block');
                 // Trigger a small animation
                 activeContent.style.opacity = '0';
                 setTimeout(() => activeContent.style.opacity = '1', 50);
              }
              if (activeVisual) {
                 activeVisual.classList.remove('hidden');
                 activeVisual.classList.add('block');
              }
            };
          


              (function() {
                            const testimonials = [{
                                name: "Sarah Chen",
                                title: "Lead Architect at DevScale",
                                quote: "\"Promptive isn't just a code generator; it's a context-aware partner. It reduced our debugging time by 60% and the prompt optimizer is a game changer for precise outputs.\"",
                                image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca8a8ad2-b776-4062-8743-e450dade97ba_800w.webp"
                              },
                              {
                                name: "Alex Rivera",
                                title: "Senior Engineer at AlgoStream",
                                quote: "\"The context window management is incredible. I can dump entire documentation files and it just works. No more 'token limit exceeded' errors in the middle of complex refactors.\"",
                                image: "https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80"
                              },
                              {
                                name: "Marcus Johnson",
                                title: "CTO at TechFlow",
                                quote: "\"Shipping features has never been faster. The VS Code extension integrates perfectly into our workflow. It feels like pair programming with a supercomputer that knows our entire codebase.\"",
                                image: "https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80"
                              },
                              {
                                name: "Elena Rodriguez",
                                title: "VP of Engineering at CloudScale",
                                quote: "\"We replaced our internal scaffolding tools with Promptive. The ability to customize generation templates means every line of code adheres to our strict style guidelines automatically.\"",
                                image: "https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80"
                              }
                            ];

                            let currentIndex = 0;
                            let isAnimating = false;

                            const avatarEl = document.getElementById('ts-avatar');
                            const contentEl = document.getElementById('ts-content-wrapper');
                            const quoteEl = document.getElementById('ts-quote');
                            const nameEl = document.getElementById('ts-name');
                            const titleEl = document.getElementById('ts-title');
                            const prevBtn = document.getElementById('ts-prev-btn');
                            const nextBtn = document.getElementById('ts-next-btn');

                            function updateTestimonial(index, direction) {
                              if (isAnimating) return;
                              isAnimating = true;

                              // Animate Out
                              contentEl.style.opacity = '0';
                              contentEl.style.transform = direction === 'next' ? 'translateX(-20px)' : 'translateX(20px)';
                              avatarEl.style.opacity = '0';
                              avatarEl.style.transform = 'scale(0.95)';

                              setTimeout(() => {
                                // Update Content
                                const t = testimonials[index];
                                quoteEl.textContent = t.quote;
                                nameEl.textContent = t.name;
                                titleEl.textContent = t.title;
                                avatarEl.src = t.image;

                                // Reset Position for Animation In
                                contentEl.style.transition = 'none';
                                contentEl.style.transform = direction === 'next' ? 'translateX(20px)' : 'translateX(-20px)';

                                // Force Reflow
                                void contentEl.offsetWidth;

                                // Animate In
                                contentEl.style.transition = 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)';
                                contentEl.style.opacity = '1';
                                contentEl.style.transform = 'translateX(0)';

                                avatarEl.style.opacity = '1';
                                avatarEl.style.transform = 'scale(1)';

                                isAnimating = false;
                              }, 300);
                            }

                            if (prevBtn && nextBtn) {
                              prevBtn.addEventListener('click', () => {
                                currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
                                updateTestimonial(currentIndex, 'prev');
                              });

                              nextBtn.addEventListener('click', () => {
                                currentIndex = (currentIndex + 1) % testimonials.length;
                                updateTestimonial(currentIndex, 'next');
                              });
                            }
                          })();
            


      (function() {
        const canvas = document.getElementById('three-canvas');
        if (!canvas) return;

        // Scene setup
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x000000, 0.0025);

        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 25, 80);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({
          canvas: canvas,
          antialias: false,
          alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 1);

        // Particle system
        const PARTICLE_COUNT = 50000;
        const FIELD_WIDTH = 300;
        const FIELD_DEPTH = 400;

        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(PARTICLE_COUNT * 3);
        const basePositions = new Float32Array(PARTICLE_COUNT * 3);
        const sizes = new Float32Array(PARTICLE_COUNT);
        const opacities = new Float32Array(PARTICLE_COUNT);

        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const x = (Math.random() - 0.5) * FIELD_WIDTH;
          const z = (Math.random() - 0.5) * FIELD_DEPTH;
          const y = 0;

          positions[i * 3] = x;
          positions[i * 3 + 1] = y;
          positions[i * 3 + 2] = z;

          basePositions[i * 3] = x;
          basePositions[i * 3 + 1] = y;
          basePositions[i * 3 + 2] = z;

          sizes[i] = 0.5 + Math.random() * 1.5;
          opacities[i] = 0.3 + Math.random() * 0.7;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        geometry.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));

        // Custom shader material for particles
        const vertexShader = `
          attribute float size;
          attribute float opacity;
          varying float vOpacity;
          varying float vDistToCamera;
          uniform float uPointLight[3];
          uniform float uLightIntensity;

          void main() {
            vOpacity = opacity;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vDistToCamera = -mvPosition.z;

            // Light influence on size
            vec3 lightPos = vec3(uPointLight[0], uPointLight[1], uPointLight[2]);
            float distToLight = distance(position, lightPos);
            float lightInfluence = smoothstep(60.0, 0.0, distToLight) * uLightIntensity;

            gl_PointSize = size * (200.0 / -mvPosition.z) * (1.0 + lightInfluence * 2.0);
            gl_Position = projectionMatrix * mvPosition;
          }
        `;

        const fragmentShader = `
          varying float vOpacity;
          varying float vDistToCamera;
          uniform float uPointLight[3];
          uniform float uLightIntensity;
          uniform vec3 uLightColor;

          void main() {
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;

            float alpha = smoothstep(0.5, 0.0, dist) * vOpacity;

            // Fog
            float fogFactor = exp(-0.0025 * vDistToCamera * vDistToCamera * 0.001);
            alpha *= clamp(fogFactor, 0.0, 1.0);

            // Base white with subtle electric blue tint
            vec3 baseColor = vec3(0.85, 0.90, 1.0);

            // Light glow
            vec3 finalColor = mix(baseColor, uLightColor, 0.25);

            gl_FragColor = vec4(finalColor, alpha * 0.8);
          }
        `;

        const material = new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader,
          uniforms: {
            uPointLight: { value: [0, 30, 0] },
            uLightIntensity: { value: 1.0 },
            // ELECTRIC BLUE COLOR UNIFORM
            uLightColor: { value: new THREE.Color(0x007AFF) }
          },
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Point light for visual glow
        const pointLight = new THREE.PointLight(0x007AFF, 2, 80, 2);
        pointLight.position.set(0, 30, 0);
        scene.add(pointLight);

        const ambientLight = new THREE.AmbientLight(0x001133, 0.5);
        scene.add(ambientLight);

        // Mouse tracking
        const mouse = { x: 0, y: 0, worldX: 0, worldY: 30, worldZ: 0 };

        document.addEventListener('mousemove', (e) => {
          mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        });

        // Scroll tracking
        let scrollProgress = 0;
        let targetScrollProgress = 0;

        function updateScroll() {
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          targetScrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
        }

        window.addEventListener('scroll', updateScroll, { passive: true });
        updateScroll();

        // Animation
        const clock = new THREE.Clock();
        let animFrame;

        function animate() {
          animFrame = requestAnimationFrame(animate);

          const time = clock.getElapsedTime();

          // Smooth scroll lerp
          scrollProgress += (targetScrollProgress - scrollProgress) * 0.05;

          // Camera fly-through on scroll
          const scrollZ = 80 - scrollProgress * 200;
          const scrollY = 25 + scrollProgress * 15;
          const lookAheadZ = scrollZ - 60;

          camera.position.x += (mouse.x * 8 - camera.position.x) * 0.02;
          camera.position.y += (scrollY + mouse.y * 5 - camera.position.y) * 0.03;
          camera.position.z += (scrollZ - camera.position.z) * 0.04;
          camera.lookAt(0, 5, lookAheadZ);

          // Update mouse world position for spotlight
          mouse.worldX = mouse.x * 60;
          mouse.worldY = 15 + mouse.y * 20;
          mouse.worldZ = camera.position.z - 40;

          pointLight.position.x += (mouse.worldX - pointLight.position.x) * 0.08;
          pointLight.position.y += (mouse.worldY - pointLight.position.y) * 0.08;
          pointLight.position.z += (mouse.worldZ - pointLight.position.z) * 0.06;

          material.uniforms.uPointLight.value = [
            pointLight.position.x,
            pointLight.position.y,
            pointLight.position.z
          ];

          // Animate particle heights with sine wave
          const posArray = geometry.attributes.position.array;

          for (let i = 0; i < PARTICLE_COUNT; i++) {
            const bx = basePositions[i * 3];
            const bz = basePositions[i * 3 + 2];

            // Multi-layered sine waves
            const wave1 = Math.sin(bx * 0.03 + time * 0.8) * 4;
            const wave2 = Math.sin(bz * 0.025 + time * 0.6) * 3;
            const wave3 = Math.sin((bx + bz) * 0.02 + time * 1.2) * 2;
            const wave4 = Math.sin(bx * 0.05 - time * 0.4) * Math.cos(bz * 0.04 + time * 0.3) * 3;

            // Mouse proximity influence
            const dx = bx - mouse.worldX;
            const dz = bz - mouse.worldZ;
            const distMouse = Math.sqrt(dx * dx + dz * dz);
            const mouseWave = Math.exp(-distMouse * distMouse * 0.0005) * 8 * Math.sin(time * 3 + distMouse * 0.1);

            posArray[i * 3 + 1] = wave1 + wave2 + wave3 + wave4 + mouseWave;
          }

          geometry.attributes.position.needsUpdate = true;

          // Light pulse
          const pulse = 1.5 + Math.sin(time * 2) * 0.5;
          pointLight.intensity = pulse;
          material.uniforms.uLightIntensity.value = pulse * 0.7;

          renderer.render(scene, camera);
        }

        animate();

        window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        });
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas height="2618" id="three-canvas" style={{width: '2080px', height: '1309px'}} width="4160"></canvas>

<header className="z-10 relative">
<div className="flex w-full max-w-[1500px] mx-auto items-center justify-between pt-8 px-4 sm:px-6 lg:px-8 xl:px-12">
<div className="select-none flex items-center gap-2">
<div className="md:text-2xl md:text-[#ffffff] text-xl font-medium tracking-tight">
            Promptive
          </div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Prompts</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Docs</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-white hover:text-blue-400 transition-colors" href="#">
            Sign in
          </a>
<button aria-label="Open menu" className="inline-flex hover:-translate-y-0.5 transition will-change-transform bg-transparent rounded-full p-[2px] relative ring-1 ring-white/20 hover:ring-white/30 items-center">
<span className="z-0 inline-flex items-center justify-center leading-[1] font-semibold text-neutral-300 hover:text-white tracking-tight rounded-full px-4 py-2 relative transition-colors bg-white/5">
              Get Started
            </span>
</button>
</div>
</div>
</header>

<main className="z-10 relative">

<section className="relative pt-12 pb-16 md:pt-20 md:pb-24" id="hero">
<div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
<div className="grid grid-cols-12 gap-6 lg:gap-10">

<div className="col-span-12 lg:col-span-7 pt-8 md:pt-14">
<div className="mb-6 md:mb-8 flex items-center gap-2">
<div className="h-px w-8 bg-blue-500"></div>
<span className="text-blue-500 font-medium tracking-wide uppercase text-xs">
                  AI-Powered Engineering
                </span>
</div>
<h1 className="[text-wrap:balance] leading-[1] text-[10vw] sm:text-5xl md:text-6xl lg:text-[85px] xl:text-[95px] font-semibold text-neutral-100 tracking-tight">
                Ship code
                <br className="hidden sm:block"/>
                at the speed of
                <span className="font-semibold text-blue-500">thought</span>
                .
              </h1>
<div className="mt-12 max-w-2xl">
<p className="xl:text-lg text-xl text-neutral-300 tracking-tight">
                  Promptive refines your natural language into production-ready
                  code. Optimize prompts, debug context limits, and generate
                  high-quality outputs instantly.
                </p>
<div className="flex flex-wrap mt-8 gap-x-4 gap-y-4">
<button className="inline-flex hover:-translate-y-0.5 transition will-change-transform bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 rounded-full px-[2px] py-[2px] relative shadow-[0_0_48px_rgba(59,130,246,0.45)] items-center">
<span className="z-0 inline-flex items-center justify-between gap-4 leading-[1] text-lg font-semibold text-white tracking-tight rounded-full pt-3.5 pr-6 pb-3.5 pl-6 relative" style={{background: 'linear-gradient(90deg,#1d4ed8 0%, #3b82f6 50%, #06b6d4 100%)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.25)'}}>
<span className="pointer-events-none absolute inset-0 rounded-full" style={{background: 'radial-gradient(120% 120% at 50% 0%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0) 60%)'}}></span>
<span className="z-10 relative">Start Generating</span>
<span className="relative z-10 inline-flex items-center justify-center w-8 h-8 rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</span>
</button>
<button className="inline-flex hover:-translate-y-0.5 transition will-change-transform bg-transparent rounded-full p-[2px] relative ring-1 ring-white/20 hover:ring-white/30 items-center">
<span className="z-0 inline-flex items-center justify-between gap-4 leading-[1] text-lg font-semibold text-neutral-300 hover:text-white tracking-tight rounded-full py-3.5 px-6 relative transition-colors">
<span className="z-10 relative">Read Documentation</span>
<span className="relative z-10 inline-flex items-center justify-center w-8 h-8 rounded-xl bg-white/5 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:document-text-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</span>
</button>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-5 pt-8 md:pt-14 flex items-center justify-center">
<style>
                @keyframes typePrompt {
                  0%, 15% { width: 0; }
                  45%, 90% { width: 100%; }
                  95%, 100% { width: 0; }
                }
                @keyframes blinkCaret {
                  from, to { border-color: transparent; }
                  50% { border-color: #3b82f6; }
                }
                @keyframes streamCode {
                  0%, 40% { clip-path: inset(0 0 100% 0); opacity: 0; }
                  45% { opacity: 1; }
                  70%, 92% { clip-path: inset(0 0 0 0); opacity: 1; }
                  98%, 100% { opacity: 0; clip-path: inset(0 0 100% 0); }
                }
                @keyframes progressLoop {
                  0%, 40% { width: 0%; }
                  70%, 92% { width: 65%; }
                  98%, 100% { width: 0%; }
                }
                @keyframes floatInfinite {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-10px); }
                }
              </style>
<div className="w-full max-w-lg relative drop-shadow-2xl">

<div className="-top-10 -right-8 sm:w-[260px] z-20 bg-[#1C1C1E] border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4 absolute shadow-2xl backdrop-blur-md" style={{animation: 'floatInfinite 6s ease-in-out infinite'}}>
<div className="flex items-start justify-between gap-3">
<div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 ring-1 ring-blue-500/20 shrink-0 text-blue-400">
<iconify-icon height="20" icon="solar:cpu-bolt-linear" width="20"></iconify-icon>
</div>
<div className="flex items-center gap-1 bg-green-500/10 px-2 py-0.5 rounded text-[10px] text-green-400 border border-green-500/20">
<div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                      Optimized
                    </div>
</div>
<div className="mt-3">
<div className="flex justify-between items-center mb-1">
<h4 className="text-white text-xs font-semibold tracking-tight">
                        Token Usage
                      </h4>
<span className="text-xs text-neutral-400">45ms</span>
</div>

<div className="w-full bg-white/10 rounded-full h-1.5 mb-2">
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '0%', animation: 'progressLoop 8s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></div>
</div>
<p className="text-slate-400 text-[11px] font-mono mt-1">
                      Context window: 8k / 32k
                    </p>
</div>
</div>

<div className="group overflow-hidden transition-all duration-500 hover:border-blue-500/40 hover:ring-blue-500/30 bg-[#0F0F11] border-white/10 border ring-white/5 ring-1 rounded-2xl relative">
<div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl transition-all duration-700 group-hover:scale-110"></div>
<div className="pt-6 pr-6 pb-6 pl-6">

<div className="flex mb-6 items-center justify-between border-b border-white/5 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 ring-1 ring-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 ring-1 ring-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 ring-1 ring-green-500/50"></div>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] font-mono text-slate-500">
                          generator.ts
                        </span>
</div>
</div>

<div className="space-y-4">
<div className="relative">
<div className="absolute left-3 top-3 text-blue-500">
<iconify-icon icon="solar:stars-minimalistic-linear" width="16"></iconify-icon>
</div>
<div className="w-full bg-[#1C1C1E] text-slate-300 text-sm p-3 pl-9 rounded-lg border border-white/10 font-mono">

<div className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-blue-500 w-0 align-bottom" style={{animation: 'typePrompt 8s steps(52, end) infinite, blinkCaret 0.75s step-end infinite'}}>
                            Write a TypeScript function to debounce API calls...
                          </div>
</div>
</div>

<div className="bg-[#151517] rounded-lg p-4 font-mono text-xs border-l-2 border-blue-500 relative overflow-hidden min-h-[180px]">
<div className="absolute top-0 right-0 p-2 opacity-50 z-10">
<iconify-icon className="text-white" icon="solar:copy-linear"></iconify-icon>
</div>

<div className="relative w-full h-full" style={{animation: 'streamCode 8s ease-in-out infinite'}}>
<div className="text-purple-400">
                            function
                            <span className="text-blue-400">debounce</span>
<span className="text-white">
                              &lt;T extends (...args: any[]) =&gt; void&gt;
                            </span>
                            (
                          </div>
<div className="pl-4 text-white">
                            func: T, delay: number
                          </div>
<div className="text-white">
                            ):
                            <span className="text-yellow-300">
                              (...args: Parameters&lt;T&gt;) =&gt; void
                            </span>
                            {
                          </div>
<div className="pl-4 text-slate-400">
                            // Implementation generated...
                          </div>
<div className="pl-4 text-blue-300">
                            let timeoutId: ReturnType&lt;typeof setTimeout&gt;;
                          </div>
<div className="pl-4 text-white">
                            return (...args) =&gt; {
                          </div>
<div className="pl-8 text-white">
                            clearTimeout(timeoutId);
                          </div>
<div className="pl-8 text-white">
                            timeoutId = setTimeout(() =&gt; func(...args),
                            delay);
                          </div>
<div className="pl-4 text-white">};</div>
<div className="text-white">}</div>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white ring-2 ring-[#0F0F11]">
                          AI
                        </div>
<div className="w-6 h-6 rounded-full bg-slate-700 ring-2 ring-[#0F0F11]"></div>
</div>
<button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
<iconify-icon icon="solar:play-circle-linear"></iconify-icon>
                        Run Code
                      </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-12 lg:py-16 border-y border-white/5 bg-white/[0.01]" id="partners">
<div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
<div className="text-center mb-10">
<p className="uppercase text-xs font-medium text-blue-200/50 tracking-wide">
              Powering codebases at
            </p>
</div>
<div className="overflow-hidden relative" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="ticker-track flex gap-16 pt-2 pb-2 items-center" style={{width: 'max-content'}}>
<div className="flex gap-16 shrink-0 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-bold tracking-tighter font-bricolage text-white">
                  DevScale
                </span>
<span className="text-lg font-semibold tracking-tighter font-merriweather text-white">
                  CodeFlow
                </span>
<span className="text-lg font-normal tracking-tighter font-instrument-serif text-white">
                  Syntax.io
                </span>
<span className="text-lg font-semibold tracking-tighter font-playfair text-white">
                  GitStream
                </span>
<span className="text-lg font-bold tracking-tighter text-white">
                  Terminal_
                </span>
<span className="text-lg font-normal tracking-tighter text-white">
                  PromptBase
                </span>
</div>
<div className="flex gap-16 shrink-0 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-bold tracking-tighter font-bricolage text-white">
                  DevScale
                </span>
<span className="text-lg font-semibold tracking-tighter font-merriweather text-white">
                  CodeFlow
                </span>
<span className="text-lg font-normal tracking-tighter font-instrument-serif text-white">
                  Syntax.io
                </span>
<span className="text-lg font-semibold tracking-tighter font-playfair text-white">
                  GitStream
                </span>
<span className="text-lg font-bold tracking-tighter text-white">
                  Terminal_
                </span>
<span className="text-lg font-normal tracking-tighter text-white">
                  PromptBase
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-20 lg:py-32" id="features">
<div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

<div className="flex flex-col lg:flex-row lg:items-start lg:gap-x-6 mb-16 gap-x-6 gap-y-6">

<div className="flex-shrink-0 mb-8 lg:mb-0">
<div className="inline-flex items-center gap-3">
<span className="lg:text-7xl text-6xl text-white/10 font-dm-sans tracking-tight font-light">
                  01
                </span>
<div className="w-px xl:bg-blue-500/20 h-16"></div>
</div>
</div>

<div className="flex-1 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

<div className="">
<h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6 font-dm-sans tracking-tight font-light">
                  Engineered for
                  <span className="text-white font-dm-sans tracking-tight font-light">
                    Developers
                  </span>
</h2>
<p className="text-xl text-neutral-300 max-w-3xl font-dm-sans tracking-tight font-light">
                  From natural language to executable binaries. We handle the
                  context, parsing, and optimization so you can focus on
                  architecture.
                </p>
</div>

<div className="mt-8 lg:mt-0 lg:self-start">
<button className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/20 hover:scale-105 border border-white/10 font-sans">
                  Explore Features
                  <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 lg:[grid-auto-flow:dense] lg:auto-rows-fr lg:gap-8 gap-x-6 gap-y-6">
<style>
              @keyframes typeLine {
                0% { width: 0; border-right-color: rgba(59, 130, 246, 0.5); }
                1% { opacity: 1; }
                99% { border-right-color: rgba(59, 130, 246, 0.5); }
                100% { width: 100%; opacity: 1; border-right-color: transparent; }
              }
              @keyframes cursorBlink {
                0%, 100% { border-color: transparent; }
                50% { border-color: rgba(59, 130, 246, 0.5); }
              }
              @keyframes progressFillLoop {
                0% { width: 0%; }
                40% { width: 75%; }
                90% { width: 75%; opacity: 1; }
                100% { width: 75%; opacity: 0; }
              }
              @keyframes fadeInUpLoop {
                0% { opacity: 0; transform: translateY(10px); }
                20% { opacity: 1; transform: translateY(0); }
                80% { opacity: 1; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(-10px); }
              }
              @keyframes pulseSoft {
                0%, 100% { opacity: 0.5; transform: scale(0.95); }
                50% { opacity: 1; transform: scale(1.05); }
              }
              .typing-line {
                overflow: hidden;
                white-space: nowrap;
                border-right: 2px solid transparent;
                width: 0;
                opacity: 0;
                animation: typeLine 2s steps(30, end) forwards;
              }
              .typing-line-1 { animation-delay: 0.5s; }
              .typing-line-2 { animation-delay: 2.5s; }
              .typing-line-3 { animation-delay: 4.5s; }

              .text-reveal {
                animation: revealText 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                opacity: 0;
                transform: translateY(8px);
              }
              @keyframes revealText {
                to { opacity: 1; transform: translateY(0); }
              }
            </style>

<div className="group hover:border-blue-500/40 transition-all duration-500 overflow-hidden xl:gap-y-16 xl:px-6 xl:py-6 bg-black border-white/15 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative gap-x-y-8 gap-y-16">
<div className="-bottom-12 -right-12 transition-all duration-700 group-hover:scale-110 bg-blue-600/10 w-48 h-48 rounded-full absolute blur-3xl"></div>
<div className="relative z-10">
<section className="col-span-12 flex md:pt-14 lg:col-span-5 lg:pt-0 pt-14 items-center justify-center">
<div className="xl:mb-8 w-full max-w-lg mb-8 relative">
<div className="overflow-hidden bg-[#121214] ring-white/10 ring-1 rounded-2xl mb-8 pt-4 pr-4 pb-4 pl-4 relative group-hover:ring-blue-500/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none"></div>

<div className="flex items-center gap-3 mb-4 relative z-10">
<div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
<iconify-icon icon="solar:code-file-linear" width="18"></iconify-icon>
</div>
<span className="text-white font-medium text-sm">
                          Code Generator
                        </span>
</div>

<div className="space-y-3 relative z-10 font-mono text-xs">
<div className="p-3 bg-[#1C1C1E] rounded-lg border border-white/5 text-slate-300 relative">
<div className="typing-line typing-line-1">
<span className="text-purple-400">const</span>
<span className="text-blue-400">optimizeData</span>
                            =
                            <span className="text-white">(data)</span>
                            =&gt; {
                          </div>
<div className="typing-line typing-line-2 pl-4">
<span className="text-slate-500">
                              // AI generated cache logic
                            </span>
</div>
<div className="typing-line typing-line-3 pl-4">
<span className="text-purple-400">return</span>
                            data.filter(x =&gt; x.isValid);
                          </div>
<div className="text-white opacity-0" style={{animation: 'revealText 0.1s forwards 6.5s'}}>
                            }
                          </div>
</div>
<div className="flex items-center gap-2 text-[10px] text-green-400 opacity-0" style={{animation: 'revealText 0.5s forwards 7s'}}>
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                          Syntax valid
                        </div>
</div>
</div>
</div>
</section>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3 text-reveal" style={{animationDelay: '0.3s'}}>
                  Intelligent Generation
                </h3>
<p className="text-neutral-300 leading-relaxed mb-4 text-reveal" style={{animationDelay: '0.4s'}}>
                  Context-aware code generation that understands your project
                  structure, dependencies, and style guide.
                </p>
<div className="flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform text-reveal" style={{animationDelay: '0.5s'}}>
                  Start Coding
                  <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group hover:border-blue-500/40 transition-all duration-500 overflow-hidden xl:gap-y-16 xl:px-6 xl:py-6 bg-black border-white/15 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative gap-x-y-8 gap-y-16">
<div className="-bottom-12 -right-12 transition-all duration-700 group-hover:scale-110 bg-cyan-600/10 w-48 h-30 rounded-full absolute blur-3xl"></div>
<div className="relative z-10">
<section className="col-span-12 flex md:pt-14 lg:col-span-5 lg:pt-0 pt-14 items-center justify-center">
<div className="xl:mb-8 w-full max-w-lg mb-8 relative">
<div className="overflow-hidden bg-[#121214] ring-white/10 ring-1 rounded-2xl mb-8 pt-4 pr-4 pb-4 pl-4 relative group-hover:ring-cyan-500/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/5 pointer-events-none"></div>

<div className="flex items-center justify-between mb-4 relative z-10">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
<iconify-icon icon="solar:wand-linear" width="18"></iconify-icon>
</div>
<span className="text-white font-medium text-sm">
                            Prompt Refiner
                          </span>
</div>
</div>

<div className="space-y-2 relative z-10 text-xs font-mono">
<div className="flex items-center gap-3 p-2 bg-red-500/5 rounded-lg ring-1 ring-red-500/20 text-red-200/70 line-through opacity-60 transition-opacity duration-1000 group-hover:opacity-40">
                          "Make a website for a coffee shop"
                        </div>
<div className="flex justify-center text-white/30 animate-bounce">
<iconify-icon icon="solar:arrow-down-linear"></iconify-icon>
</div>
<div className="flex items-center gap-3 p-2 bg-green-500/10 rounded-lg ring-1 ring-green-500/30 text-green-100" style={{animation: 'pulseSoft 3s infinite ease-in-out'}}>
                          "Create a responsive Next.js 14 landing page for a
                          specialty coffee brand using Tailwind CSS..."
                        </div>
</div>
</div>
</div>
</section>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3 text-reveal" style={{animationDelay: '0.4s'}}>
                  Prompt Optimization
                </h3>
<p className="leading-relaxed text-neutral-300 mb-4 text-reveal" style={{animationDelay: '0.5s'}}>
                  Automatically refine vague instructions into detailed
                  technical specifications for better LLM outputs.
                </p>
<div className="flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform text-reveal" style={{animationDelay: '0.6s'}}>
                  Optimize Now
                  <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="lg:col-span-2 group hover:border-blue-500/40 transition-all duration-500 overflow-hidden xl:gap-y-16 xl:px-6 xl:py-6 bg-black border-white/15 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative gap-x-y-8 gap-y-16">
<div className="-bottom-12 -right-12 transition-all duration-700 group-hover:scale-110 bg-blue-600/10 w-48 h-48 rounded-full absolute blur-3xl"></div>
<div className="relative z-10">
<section className="col-span-12 flex md:pt-14 lg:col-span-5 lg:pt-0 pt-14 items-center justify-center">
<div className="xl:mb-8 w-full max-w-lg mb-8 relative">
<div className="group overflow-hidden transition-all duration-500 hover:border-blue-500/40 hover:ring-blue-500/30 bg-[#0F0F11] border-white/10 border ring-white/5 ring-1 rounded-2xl relative">

<div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl transition-all duration-700 group-hover:scale-110"></div>
<div className="overflow-hidden xl:mt-0 bg-[#121214] ring-white/10 ring-1 rounded-2xl mt-0 pt-4 pr-4 pb-4 pl-4 relative">
<h4 className="text-white text-base sm:text-lg font-semibold tracking-tight mb-2">
                          Context Window
                        </h4>
<div className="flex items-center gap-2 mb-3">
<span className="text-xs text-slate-400">
                            Tokens used
                          </span>
<div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" style={{width: '75%', animation: 'progressFillLoop 4s ease-in-out infinite'}}></div>
</div>
<span className="text-xs text-blue-400 font-mono">
                            24k/32k
                          </span>
</div>

<div className="space-y-1 relative">
<div className="flex items-center justify-between text-xs p-2 bg-white/5 rounded text-slate-300 hover:bg-white/10 transition-colors cursor-pointer border border-transparent hover:border-white/10">
<span className="flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:file-code-linear"></iconify-icon>
                              utils.ts
                            </span>
<span className="text-slate-500">1.2k tok</span>
</div>
<div className="flex items-center justify-between text-xs p-2 bg-white/5 rounded text-slate-300 hover:bg-white/10 transition-colors cursor-pointer border border-transparent hover:border-white/10">
<span className="flex items-center gap-2">
<iconify-icon className="text-purple-400" icon="solar:file-text-linear"></iconify-icon>
                              schema.prisma
                            </span>
<span className="text-slate-500">800 tok</span>
</div>
</div>
</div>
</div>
</div>
</section>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3 text-reveal" style={{animationDelay: '0.5s'}}>
                  Context Management
                </h3>
<p className="leading-relaxed text-neutral-300 mb-4 text-reveal" style={{animationDelay: '0.6s'}}>
                  Smartly manage token limits. Pin critical files, summarize
                  documentation, and maintain history without overflow.
                </p>
<div className="flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform text-reveal" style={{animationDelay: '0.7s'}}>
                  Manage Context
                  <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="lg:col-span-1 group hover:border-blue-500/40 transition-all duration-500 overflow-hidden xl:gap-y-16 xl:px-6 xl:py-6 bg-black max-w-6xl border-white/15 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative gap-x-y-8 gap-y-16">
<div className="-bottom-12 -right-12 transition-all duration-700 group-hover:scale-110 bg-blue-600/5 w-48 h-48 rounded-full absolute blur-3xl"></div>
<div className="relative z-10">
<div className="pt-6 pr-6 pb-6 pl-6">
<div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-[#0F0F11]">
<div className="pointer-events-none absolute inset-0" style={{background: 'radial-gradient(120% 100% at 0% 0%, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0.02) 20%, rgba(0,0,0,0) 55%)'}}></div>
<div className="absolute left-1/2 top-3 -translate-x-1/2 z-10">
<span className="inline-flex items-center rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-sm font-medium tracking-tight text-white/90 backdrop-blur-md">
                        Tokens • Latency • Cost
                      </span>
</div>
<div className="relative h-48 sm:h-56 pt-14 pr-4 pl-4">
<canvas className="" height="336" id="performanceChart" style={{display: 'block', boxSizing: 'border-box', height: '168px', width: '795px'}} width="1590"></canvas>
</div>
</div>


</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3 text-reveal" style={{animationDelay: '0.6s'}}>
                  Usage Analytics
                </h3>
<p className="leading-relaxed text-neutral-300 mb-4 text-reveal" style={{animationDelay: '0.7s'}}>
                  Track token consumption, API latency, and estimated costs
                  across all your projects in real-time.
                </p>
<div className="flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform text-reveal" style={{animationDelay: '0.8s'}}>
                  View Metrics
                  <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="lg:col-span-1 group hover:border-blue-500/40 transition-all duration-500 overflow-hidden xl:gap-y-16 xl:px-6 xl:py-6 [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll bg-[#0F0F11] max-w-6xl border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative gap-x-y-8 gap-y-16">
<div className="-bottom-12 -right-12 transition-all duration-700 group-hover:scale-110 bg-blue-600/5 w-48 h-48 rounded-full absolute blur-3xl"></div>
<div className="relative z-10">
<div className="overflow-hidden bg-[#121214] ring-white/10 ring-1 rounded-2xl mb-8 pt-4 pr-4 pb-4 pl-4 relative group-hover:ring-blue-500/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-500/5 pointer-events-none"></div>
<div className="flex items-center justify-between mb-4 relative z-10">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:laptop-minimalistic-linear" width="20"></iconify-icon>
<span className="text-white font-medium text-sm">
                        VS Code Extension
                      </span>
</div>
</div>
<div className="flex items-center gap-3 p-3 bg-[#0F0F11] rounded-xl ring-1 ring-white/10">
<div className="text-xs font-mono text-slate-300 flex-1 relative h-10">

<div className="absolute inset-0">
<span className="typing-line" style={{animation: 'typeLine 2s steps(20, end) infinite alternate', display: 'inline-block', verticalAlign: 'bottom'}}>
                          &gt; promptive init
                        </span>
</div>
<div className="absolute top-5 left-0 opacity-0" style={{animation: 'fadeInUpLoop 4s infinite'}}>
<span className="text-green-400">
                          ✓ Project initialized
                        </span>
</div>
</div>
</div>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3 text-reveal" style={{animationDelay: '0.7s'}}>
                  IDE Integration
                </h3>
<p className="text-neutral-300 leading-relaxed mb-4 text-reveal" style={{animationDelay: '0.8s'}}>
                  Install our VS Code extension or CLI tool to generate code
                  directly in your workflow.
                </p>
<div className="flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform text-reveal" style={{animationDelay: '0.9s'}}>
                  Install Extension
                  <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-20 lg:py-32" id="process">
<div className="sm:px-6 lg:px-8 xl:px-12 w-full max-w-[1500px] mr-auto ml-auto pr-4 pl-4">

<div className="flex flex-col lg:flex-row lg:items-start lg:gap-x-6 mb-16 gap-x-6 gap-y-6">

<div className="flex-shrink-0 mb-8 lg:mb-0">
<div className="inline-flex items-center gap-3">
<span className="lg:text-7xl text-6xl text-white/10 font-dm-sans tracking-tight font-light">
                  02
                </span>
<div className="w-px xl:bg-blue-500/20 h-16"></div>
</div>
</div>

<div className="flex-1 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

<div className="">
<h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6 font-dm-sans tracking-tight font-light">
                  How It
                  <span className="text-white font-dm-sans tracking-tight font-light">
                    Works
                  </span>
</h2>
<p className="text-xl text-neutral-300 max-w-3xl font-dm-sans tracking-tight font-light">
                  A simple three-step process designed to transform your ideas
                  into production-ready results with speed and precision.
                </p>
</div>

<div className="mt-8 lg:mt-0 lg:self-start">
<button className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/20 hover:scale-105 border border-white/10 font-sans">
                  View the Process
                  <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 lg:pt-0 lg:pb-0 w-full max-w-none z-10 mr-auto ml-auto pt-12 pb-12 relative gap-x-12 gap-y-12 items-center">

<div className="flex flex-col items-start order-2 lg:order-1 h-full justify-center">

<div className="inline-flex items-center p-1.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm mb-10 select-none">
<button className="px-5 py-2 bg-white text-black rounded-full text-sm font-semibold shadow-sm flex items-center gap-2 transition-all duration-300" id="btn-step-1" onclick="window.updateStep(1)">
<span className="font-bold">1</span>
                  Prompt
                </button>
<button className="px-5 py-2 text-neutral-500 hover:text-white text-sm font-medium flex items-center gap-2 transition-all duration-300" id="btn-step-2" onclick="window.updateStep(2)">
<span className="w-5 h-5 rounded-full border border-neutral-700 flex items-center justify-center text-xs">
                    2
                  </span>
                  Refine
                </button>
<button className="px-5 py-2 text-neutral-500 hover:text-white text-sm font-medium flex items-center gap-2 transition-all duration-300" id="btn-step-3" onclick="window.updateStep(3)">
<span className="w-5 h-5 rounded-full border border-neutral-700 flex items-center justify-center text-xs">
                    3
                  </span>
                  Generate
                </button>
</div>

<div className="step-content block transition-all duration-500 ease-in-out" id="content-step-1">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                  Code at the
                  <br/>
                  Speed of Thought
                </h2>
<p className="text-lg text-neutral-400 leading-relaxed mb-12 max-w-md font-medium">
                  Describe your architecture in plain English. Promptive
                  translates intent into production-ready, type-safe code
                  tailored to your existing patterns.
                </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="text-blue-500">
<svg className="lucide lucide-brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
<path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
<path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
<path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
<path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
<path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
<path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
<path d="M6 18a4 4 0 0 1-1.938-1.5"></path>
<path d="M19.938 16.5A4 4 0 0 1 18 18"></path>
</svg>
</div>
<span className="text-white text-lg font-semibold tracking-tight">
                      Semantic Understanding
                    </span>
</div>
<div className="flex items-center gap-4">
<div className="text-blue-500">
<svg className="lucide lucide-git-merge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="3"></circle>
<circle cx="6" cy="6" r="3"></circle>
<path d="M6 21V9a9 9 0 0 0 9 9"></path>
</svg>
</div>
<span className="text-white text-lg font-semibold tracking-tight">
                      Git-Aware Context
                    </span>
</div>
<div className="flex items-center gap-4">
<div className="text-blue-500">
<svg className="lucide lucide-terminal-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m7 11 2-2-2-2"></path>
<path d="M11 13h4"></path>
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
</svg>
</div>
<span className="text-white text-lg font-semibold tracking-tight">
                      Instant Implementation
                    </span>
</div>
</div>
</div>

<div className="step-content hidden transition-all duration-500 ease-in-out" id="content-step-2">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                  Iterate with
                  <br/>
                  Precision
                </h2>
<p className="text-lg text-neutral-400 leading-relaxed mb-12 max-w-md font-medium">
                  Refine logic instantly. Ask for changes, optimize performance,
                  or handle edge cases with natural language commands.
                </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="text-purple-500">
<svg className="lucide lucide-file-diff" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M9 10h6"></path>
<path d="M9 14h6"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
</svg>
</div>
<span className="text-white text-lg font-semibold tracking-tight">
                      Context-Aware Diffs
                    </span>
</div>
<div className="flex items-center gap-4">
<div className="text-purple-500">
<svg className="lucide lucide-wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"></path>
<path d="m14 7 3 3"></path>
<path d="M5 6v4"></path>
<path d="M19 14v4"></path>
<path d="M10 2v2"></path>
<path d="M7 8H3"></path>
<path d="M21 16h-4"></path>
<path d="M11 3H9"></path>
</svg>
</div>
<span className="text-white text-lg font-semibold tracking-tight">
                      Smart Refactoring
                    </span>
</div>
<div className="flex items-center gap-4">
<div className="text-purple-500">
<svg className="lucide lucide-shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<span className="text-white text-lg font-semibold tracking-tight">
                      Security Audits
                    </span>
</div>
</div>
</div>

<div className="step-content hidden transition-all duration-500 ease-in-out" id="content-step-3">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                  Production
                  <br/>
                  Ready
                </h2>
<p className="text-lg text-neutral-400 leading-relaxed mb-12 max-w-md font-medium">
                  From prompt to pull request. Get fully typed, tested code that
                  adheres to your engineering standards.
                </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="text-green-500">
<svg className="lucide lucide-test-tube-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 7 7 21"></path>
<path d="M18 10l-2-2"></path>
<path d="m12 16 2-2"></path>
<path d="M7 21a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2Z"></path>
</svg>
</div>
<span className="text-white text-lg font-semibold tracking-tight">
                      Unit Test Generation
                    </span>
</div>
<div className="flex items-center gap-4">
<div className="text-green-500">
<svg className="lucide lucide-check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<span className="text-white text-lg font-semibold tracking-tight">
                      Full Type Safety
                    </span>
</div>
<div className="flex items-center gap-4">
<div className="text-green-500">
<svg className="lucide lucide-file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
</svg>
</div>
<span className="text-white text-lg font-semibold tracking-tight">
                      Auto-Documentation
                    </span>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 w-full perspective-normal">
<div className="rounded-xl border border-white/10 bg-[#0F0F11] overflow-hidden shadow-2xl relative group hover:rotate-y-0 transition-transform duration-700 ease-out rotate-y-5 rotate-x-5">

<div className="bg-[#1C1C1E] px-4 py-3 flex items-center gap-4 border-b border-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30"></div>
</div>
<div className="flex-1 max-w-xl bg-[#000] rounded-lg px-3 py-1.5 flex items-center justify-between text-xs text-neutral-500 border border-white/5 mx-auto">
<div className="flex items-center gap-2">
<svg className="lucide lucide-lock" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
<span className="text-neutral-400">
                        https://promptive.dev/studio
                      </span>
</div>
<svg className="lucide lucide-rotate-cw" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5"></path>
</svg>
</div>
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/50 border border-white/5">
<svg className="lucide lucide-layout" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<line x1="3" x2="21" y1="9" y2="9"></line>
<line x1="9" x2="9" y1="21" y2="9"></line>
</svg>
</div>
</div>

<div className="step-visual block h-[550px] md:h-[600px] text-sm flex" id="visual-step-1">

<div className="w-64 bg-[#111] border-r border-white/5 flex flex-col hidden sm:flex shrink-0">

<div className="p-4 border-b border-white/5">
<div className="flex items-center justify-between text-white font-medium">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded text-[10px] flex items-center justify-center font-bold">
                            P
                          </div>
                          Promptive Inc.
                        </div>
<svg className="lucide lucide-chevrons-up-down text-neutral-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m7 15 5 5 5-5"></path>
<path d="m7 9 5-5 5 5"></path>
</svg>
</div>
</div>

<div className="px-4 py-3">
<div className="relative">
<svg className="lucide lucide-folder absolute left-2.5 top-2 text-neutral-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
</svg>
<input className="w-full bg-[#1C1C1E] border border-white/5 rounded-md py-1.5 pl-8 text-xs text-neutral-400 focus:outline-none focus:border-neutral-600 placeholder:text-neutral-700" placeholder="Filter repositories..." type="text"/>
</div>
</div>
<div className="flex-1 overflow-y-auto px-2 py-2 space-y-6">
<div className="space-y-0.5">
<a className="flex items-center gap-3 px-2 py-1.5 text-white bg-white/5 rounded-md font-medium border border-white/5" href="#">
<svg className="lucide lucide-layout-dashboard" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
                          Workspace
                        </a>
</div>
<div>
<h4 className="px-2 text-[10px] font-semibold text-neutral-600 uppercase tracking-wider mb-1">
                          Repositories
                        </h4>
<div className="space-y-0.5 font-mono text-xs">
<a className="flex items-center gap-3 px-2 py-1.5 text-neutral-300 bg-white/5 rounded-md transition-colors border-l-2 border-blue-500" href="#">
<svg className="lucide lucide-git-branch" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<line x1="6" x2="6" y1="3" y2="15"></line>
<circle cx="18" cy="6" r="3"></circle>
<circle cx="6" cy="18" r="3"></circle>
<path d="M18 9a9 9 0 0 1-9 9"></path>
</svg>
                            rate-limiter
                          </a>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-black flex flex-col min-w-0">

<div className="px-8 py-6 border-b border-white/5">
<div className="flex items-center justify-between gap-4">
<div>
<h1 className="text-xl font-semibold text-white tracking-tight mb-1">
                            Implement Redis Rate Limiter
                          </h1>
<p className="text-xs text-neutral-400 font-mono">
                            Started 12s ago • 3 files modified
                          </p>
</div>
<div className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-semibold text-blue-400 flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                          GENERATING
                        </div>
</div>
</div>

<div className="flex-1 p-8 text-sm space-y-4 font-mono leading-relaxed overflow-y-auto custom-scrollbar">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 border border-white/10 text-neutral-400">
<svg className="lucide lucide-terminal" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="4 17 10 11 4 5"></polyline>
<line x1="12" x2="20" y1="19" y2="19"></line>
</svg>
</div>
<div className="flex-1 space-y-2">
<div className="text-xs text-neutral-500">
                            Input Prompt
                          </div>
<div className="text-neutral-300">
                            Create a sliding window rate limiter middleware
                            using Redis. Include configuration for
                            <span className="text-blue-300 bg-blue-500/10 px-1 rounded">
                              requests per minute
                            </span>
                            .
                          </div>
</div>
</div>
<div className="flex gap-4 pt-4">
<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/20 text-white">
<svg className="lucide lucide-sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
</div>
<div className="flex-1 space-y-3">
<div className="text-xs text-blue-400 font-medium animate-pulse">
                            Writing implementation...
                          </div>
<div className="rounded-lg border border-white/10 bg-[#0d0d0d] overflow-hidden">
<div className="flex items-center justify-between px-3 py-1.5 bg-white/5 border-b border-white/5">
<span className="text-[10px] text-neutral-400">
                                src/middleware/rate-limiter.ts
                              </span>
</div>
<div className="p-4 text-xs text-neutral-300 overflow-x-auto">
<pre><code><span className="text-purple-400">export const</span> createRateLimiter = (redis: Redis, config: RateLimitConfig) =&gt; {
  <span className="text-purple-400">return async</span> (req: Request, res: Response, next: NextFunction) =&gt; {
    <span className="text-purple-400">const</span> key = <span className="text-green-400">`rate-limit:${req.ip}`</span>;
    <span className="text-purple-400">const</span> current = <span className="text-purple-400">await</span> redis.incr(key);
    <span className="text-slate-500">// Set expiry on first request</span>
    <span className="text-purple-400">if</span> (current === <span className="text-yellow-400">1</span>) {
      <span className="text-purple-400">await</span> redis.expire(key, config.windowMs / <span className="text-yellow-400">1000</span>);
    }
    next();
  };
};</code></pre>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="step-visual hidden h-[550px] md:h-[600px] text-sm flex" id="visual-step-2">
<div className="w-64 bg-[#111] border-r border-white/5 flex flex-col hidden sm:flex shrink-0">

<div className="p-4 border-b border-white/5 flex items-center gap-2 text-white font-medium">
<div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded text-[10px] flex items-center justify-center font-bold">
                        P
                      </div>
                      Promptive Inc.
                    </div>
<div className="p-4 flex-1">
<div className="text-xs text-neutral-500 mb-2">History</div>
<div className="flex items-center gap-2 text-white bg-white/5 p-2 rounded text-xs mb-1">
<svg className="text-purple-400" fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12">
<path d="M12 20h9"></path>
<path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
</svg>
                        Refactor Fallback
                      </div>
</div>
</div>
<div className="flex-1 bg-black flex flex-col min-w-0">
<div className="px-8 py-6 border-b border-white/5 flex justify-between">
<div>
<h1 className="text-xl font-semibold text-white tracking-tight mb-1">
                          Refactoring: Add Fallback
                        </h1>
<p className="text-xs text-neutral-400 font-mono">
                          Comparing changes...
                        </p>
</div>
</div>
<div className="flex-1 p-6 overflow-y-auto">

<div className="flex gap-4 mb-6">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 border border-white/10">
<svg className="text-neutral-400" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
</div>
<div className="bg-[#1C1C1E] p-3 rounded-lg rounded-tl-none border border-white/10 text-neutral-300 text-xs max-w-lg">
                          Add a fallback to in-memory store if Redis connection
                          fails.
                        </div>
</div>

<div className="rounded-lg border border-white/10 bg-[#0d0d0d] overflow-hidden font-mono text-xs">
<div className="flex items-center justify-between px-3 py-1.5 bg-white/5 border-b border-white/5">
<span className="text-[10px] text-neutral-400">
                            src/middleware/rate-limiter.ts
                          </span>
</div>
<div className="overflow-x-auto">
<div className="flex bg-neutral-900/50 text-neutral-500">
<div className="w-8 text-right pr-2 border-r border-white/5 select-none opacity-50">
                              12
                            </div>
<div className="pl-4">
                              const current = await redis.incr(key);
                            </div>
</div>
<div className="flex bg-red-900/20 text-red-200/70">
<div className="w-8 text-right pr-2 border-r border-red-500/20 select-none opacity-50">
                              -
                            </div>
<div className="pl-4">
                              if (current === 1) await redis.expire(key, 60);
                            </div>
</div>
<div className="flex bg-green-900/20 text-green-200/70">
<div className="w-8 text-right pr-2 border-r border-green-500/20 select-none opacity-50">
                              +
                            </div>
<div className="pl-4">let current;</div>
</div>
<div className="flex bg-green-900/20 text-green-200/70">
<div className="w-8 text-right pr-2 border-r border-green-500/20 select-none opacity-50">
                              +
                            </div>
<div className="pl-4">try {</div>
</div>
<div className="flex bg-green-900/20 text-green-200/70">
<div className="w-8 text-right pr-2 border-r border-green-500/20 select-none opacity-50">
                              +
                            </div>
<div className="pl-4">
                              current = await redis.incr(key);
                            </div>
</div>
<div className="flex bg-green-900/20 text-green-200/70">
<div className="w-8 text-right pr-2 border-r border-green-500/20 select-none opacity-50">
                              +
                            </div>
<div className="pl-4">} catch (e) {</div>
</div>
<div className="flex bg-green-900/20 text-green-200/70">
<div className="w-8 text-right pr-2 border-r border-green-500/20 select-none opacity-50">
                              +
                            </div>
<div className="pl-4">
                              console.warn('Redis failed, using memory');
                            </div>
</div>
<div className="flex bg-green-900/20 text-green-200/70">
<div className="w-8 text-right pr-2 border-r border-green-500/20 select-none opacity-50">
                              +
                            </div>
<div className="pl-4">
                              current = memoryStore.incr(key);
                            </div>
</div>
<div className="flex bg-green-900/20 text-green-200/70">
<div className="w-8 text-right pr-2 border-r border-green-500/20 select-none opacity-50">
                              +
                            </div>
<div className="pl-4">}</div>
</div>
</div>
</div>
</div>
<div className="p-4 border-t border-white/10 flex justify-end">
<button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-xs font-semibold transition-colors">
                        Apply Changes
                      </button>
</div>
</div>
</div>

<div className="step-visual hidden h-[550px] md:h-[600px] text-sm flex" id="visual-step-3">
<div className="w-64 bg-[#111] border-r border-white/5 flex flex-col hidden sm:flex shrink-0">
<div className="p-4 border-b border-white/5 flex items-center gap-2 text-white font-medium">
<div className="w-5 h-5 bg-gradient-to-br from-green-500 to-emerald-500 rounded text-[10px] flex items-center justify-center font-bold">
                        P
                      </div>
                      Promptive Inc.
                    </div>
<div className="p-4">
<div className="text-xs text-neutral-500 mb-2">
                        Pull Requests
                      </div>
<div className="flex items-center gap-2 text-white bg-white/5 p-2 rounded text-xs">
<svg className="text-green-400" fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12">
<path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
<line x1="6" x2="6" y1="9" y2="21"></line>
<circle cx="6" cy="6" r="3"></circle>
<circle cx="18" cy="18" r="3"></circle>
</svg>
                        feature/rate-limit
                      </div>
</div>
</div>
<div className="flex-1 bg-black flex flex-col min-w-0">
<div className="px-8 py-6 border-b border-white/5">
<div className="flex items-center gap-3 mb-2">
<span className="bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded text-[10px] font-bold">
                          OPEN
                        </span>
<h1 className="text-lg font-semibold text-white tracking-tight">
                          Feature: Rate Limiter Middleware
                        </h1>
<span className="text-neutral-500 font-mono text-xs">
                          #42
                        </span>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-400">
<div className="w-5 h-5 rounded-full bg-neutral-700"></div>
<span>
                          Alex Rivera wants to merge 3 commits into
                          <span className="bg-white/10 px-1 rounded text-neutral-300">
                            main
                          </span>
</span>
</div>
</div>
<div className="flex-1 p-8 overflow-y-auto">
<div className="bg-[#0F0F11] border border-white/10 rounded-lg p-4 mb-6">
<h3 className="text-xs font-semibold text-white mb-3 flex items-center gap-2">
<svg className="text-green-500" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
                          All checks passed
                        </h3>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs text-neutral-400 bg-white/5 p-2 rounded border border-white/5">
<span className="flex items-center gap-2">
<svg className="text-green-500" fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12">
<circle cx="12" cy="12" r="10"></circle>
</svg>
                              Build
                            </span>
<span className="text-green-400">Successful</span>
</div>
<div className="flex items-center justify-between text-xs text-neutral-400 bg-white/5 p-2 rounded border border-white/5">
<span className="flex items-center gap-2">
<svg className="text-green-500" fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12">
<circle cx="12" cy="12" r="10"></circle>
</svg>
                              Unit Tests
                            </span>
<span className="text-green-400">4/4 Passed</span>
</div>
<div className="flex items-center justify-between text-xs text-neutral-400 bg-white/5 p-2 rounded border border-white/5">
<span className="flex items-center gap-2">
<svg className="text-green-500" fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12">
<circle cx="12" cy="12" r="10"></circle>
</svg>
                              Lint
                            </span>
<span className="text-green-400">No issues</span>
</div>
</div>
</div>
<div className="space-y-3">
<h3 className="text-xs font-semibold text-white mb-2">
                          Files Changed (3)
                        </h3>
<div className="flex items-center justify-between p-2 hover:bg-white/5 rounded cursor-pointer transition-colors border border-transparent hover:border-white/5">
<div className="flex items-center gap-2 text-xs text-neutral-300">
<svg className="text-neutral-500" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
</svg>
                            src/middleware/rate-limiter.ts
                          </div>
<span className="text-[10px] text-green-400">+45</span>
</div>
<div className="flex items-center justify-between p-2 hover:bg-white/5 rounded cursor-pointer transition-colors border border-transparent hover:border-white/5">
<div className="flex items-center gap-2 text-xs text-neutral-300">
<svg className="text-neutral-500" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
</svg>
                            tests/rate-limiter.test.ts
                          </div>
<span className="text-[10px] text-green-400">+82</span>
</div>
</div>
<div className="mt-8">
<button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-green-900/20">
                          Merge Pull Request
                        </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</section>

<section className="relative z-10 py-20 lg:py-32" id="value">
<div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
<div className="flex flex-col lg:flex-row lg:items-start lg:gap-x-6 mb-16 gap-x-6 gap-y-6">

<div className="flex-shrink-0 mb-8 lg:mb-0">
<div className="inline-flex items-center gap-3">
<span className="lg:text-7xl text-6xl text-white/10 font-dm-sans tracking-tight font-light">
                  03
                </span>
<div className="w-px xl:bg-blue-500/20 h-16"></div>
</div>
</div>

<div className="flex-1 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

<div className="">
<h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6 font-dm-sans tracking-tight font-light">
                  Deliver Real
                  <span className="text-white font-dm-sans tracking-tight font-light">
                    Business Value
                  </span>
</h2>
<p className="text-xl text-neutral-300 max-w-3xl font-dm-sans tracking-tight font-light">
                  Accelerate development, reduce complexity, and ship
                  production-ready solutions with confidence. Built to turn
                  ambition into measurable results without unnecessary friction.
                </p>
</div>

<div className="mt-8 lg:mt-0 lg:self-start">
<button className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/20 hover:scale-105 border border-white/10 font-sans">
                  See How It Works
                  <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 border-dashed overflow-hidden sm:mt-8 z-10 bg-black border-white/15 border rounded-3xl mt-6 relative items-stretch">

<div className="group flex flex-col lg:border-b-0 lg:border-r border-dashed border-white/15 border-b relative">
<div className="sm:p-10 flex flex-col border-dashed flex-1 border-white/15 border-b pt-8 pr-8 pb-8 pl-8 items-start">
<div className="inline-flex items-center border border-blue-500/20 bg-blue-500/10 rounded pl-1 pr-3 py-1 gap-2 mb-8">
<div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center text-white">
<svg className="lucide lucide-database" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
<path d="M3 12A9 3 0 0 0 21 12"></path>
</svg>
</div>
<span className="text-[11px] font-semibold text-blue-200 tracking-widest font-mono">
                    CONTEXT
                  </span>
</div>
<h3 className="text-2xl sm:text-3xl font-medium text-white mb-4 tracking-tight">
                  Deep Indexing
                </h3>
<p className="text-neutral-400 leading-relaxed text-base font-light">
                  Securely connect your repositories. Promptive builds a
                  semantic graph of your codebase, ensuring every generation is
                  context-aware and accurate.
                </p>
</div>
<div className="h-64 sm:h-80 w-full flex items-center justify-center relative bg-gradient-to-b from-blue-900/0 to-blue-900/10">

<svg className="group-hover:scale-105 transition-transform duration-500" fill="none" height="180" viewbox="0 0 200 200" width="180" xmlns="http://www.w3.org/2000/svg">

<path className="" d="M100 130L160 100L100 70L40 100L100 130Z" fill="#172554"></path>

<path d="M40 100V120L100 150V130L40 100Z" fill="#0f172a"></path>

<path className="" d="M160 100V120L100 150V130L160 100Z" fill="#1e3a8a"></path>


<path className="" d="M100 100L160 70L100 40L40 70L100 100Z" fill="#3b82f6"></path>

<path d="M40 70V90L100 120V100L40 70Z" fill="#1d4ed8"></path>

<path className="" d="M160 70V90L100 120V100L160 70Z" fill="#2563eb"></path>


<path className="" d="M100 70L160 40L100 10L40 40L100 70Z" fill="none" stroke="#60a5fa" strokeWidth="2"></path>

</svg>
</div>
</div>

<div className="group flex flex-col border-b lg:border-b-0 lg:border-r border-dashed border-white/15 relative">
<div className="p-8 sm:p-10 flex flex-col items-start border-b border-dashed border-white/15 flex-1">
<div className="inline-flex items-center border border-cyan-500/20 bg-cyan-500/10 rounded pl-1 pr-3 py-1 gap-2 mb-8">
<div className="w-6 h-6 bg-cyan-500 rounded-sm flex items-center justify-center text-black">
<svg className="lucide lucide-sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
</div>
<span className="text-[11px] font-semibold text-cyan-200 tracking-widest font-mono">
                    SYNTHESIS
                  </span>
</div>
<h3 className="text-2xl sm:text-3xl font-medium text-white mb-4 tracking-tight">
                  Neural Synthesis
                </h3>
<p className="text-neutral-400 leading-relaxed text-base font-light">
                  Describe features in plain English. The engine translates
                  vague intent into precise technical specifications and
                  implementation plans.
                </p>
</div>
<div className="h-64 sm:h-80 w-full flex items-center justify-center relative bg-gradient-to-b from-cyan-900/0 to-cyan-900/10">

<svg className="group-hover:scale-105 transition-transform duration-500" fill="none" height="180" viewbox="0 0 200 200" width="180" xmlns="http://www.w3.org/2000/svg">

<path d="M40 60V140L70 155V75L40 60Z" fill="#164e63"></path>


<path d="M40 140L100 170L100 140L40 110V140Z" fill="#083344"></path>


<path d="M100 110L130 95L100 80L70 95L100 110Z" fill="#06b6d4"></path>

<path d="M70 95V125L100 140V110L70 95Z" fill="#0891b2"></path>

<path className="" d="M130 95V125L100 140V110L130 95Z" fill="#22d3ee"></path>


<path className="" d="M40 60L100 90L160 60L100 30L40 60Z" fill="none" stroke="#67e8f9" strokeWidth="12"></path>


<path d="M160 60V140" stroke="#67e8f9" strokeWidth="12"></path>

<path className="" d="M160 140L100 170" stroke="#67e8f9" strokeWidth="12"></path>
</svg>
</div>
</div>

<div className="group flex flex-col relative">
<div className="p-8 sm:p-10 flex flex-col items-start border-b border-dashed border-white/15 flex-1">
<div className="inline-flex items-center border border-indigo-500/20 bg-indigo-500/10 rounded pl-1 pr-3 py-1 gap-2 mb-8">
<div className="w-6 h-6 bg-indigo-500 rounded-sm flex items-center justify-center text-white">
<svg className="lucide lucide-git-pull-request" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="3"></circle>
<circle cx="6" cy="6" r="3"></circle>
<path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
<line x1="6" x2="6" y1="9" y2="21"></line>
</svg>
</div>
<span className="text-[11px] font-semibold text-indigo-200 tracking-widest font-mono">
                    DELIVERY
                  </span>
</div>
<h3 className="text-2xl sm:text-3xl font-medium text-white mb-4 tracking-tight">
                  Production Ready
                </h3>
<p className="text-neutral-400 leading-relaxed text-base font-light">
                  Receive fully typed, tested, and linted Pull Requests directly
                  in your git provider. Review the diff, approve, and deploy.
                </p>
</div>
<div className="h-64 sm:h-80 w-full flex items-center justify-center relative bg-gradient-to-b from-indigo-900/0 to-indigo-900/10">

<svg className="group-hover:scale-105 transition-transform duration-500" fill="none" height="180" viewbox="0 0 200 200" width="180" xmlns="http://www.w3.org/2000/svg">

<path d="M60 80L120 50L140 60L80 90L60 80Z" fill="#6366f1"></path>

<path d="M60 80V120L80 130V90L60 80Z" fill="#4f46e5"></path>

<path d="M120 50V90L140 100V60L120 50Z" fill="#818cf8"></path>


<path d="M40 110L100 80L120 90L60 120L40 110Z" fill="#312e81"></path>

<path d="M40 110V150L60 160V120L40 110Z" fill="#1e1b4b"></path>

<path d="M100 80V120L120 130V90L100 80Z" fill="#3730a3"></path>


<path d="M80 50L140 20L160 30L100 60L80 50Z" fill="#312e81"></path>

<path d="M80 50V90L100 100V60L80 50Z" fill="#1e1b4b"></path>

<path d="M140 20V60L160 70V30L140 20Z" fill="#4338ca"></path>

</svg>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-20 lg:py-32" id="testimonials">
<div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

<div className="flex flex-col lg:flex-row lg:items-start lg:gap-x-6 mb-16 gap-x-6 gap-y-6">
<div className="flex-shrink-0 mb-8 lg:mb-0">
<div className="inline-flex items-center gap-3">
<span className="lg:text-7xl text-6xl text-white/10 font-dm-sans tracking-tight font-light">
                  04
                </span>
<div className="w-px xl:bg-blue-500/20 h-16"></div>
</div>
</div>
<div className="flex-1 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
<div className="">
<h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6 font-dm-sans tracking-tight font-light">
                  Loved by
                  <span className="text-white font-dm-sans tracking-tight font-light">
                    Engineers
                  </span>
</h2>
<p className="text-xl text-neutral-300 max-w-3xl font-dm-sans tracking-tight font-light">
                  See how development teams use Promptive to ship features
                  faster and reduce technical debt.
                </p>
</div>
<div className="mt-8 lg:mt-0 lg:self-start">
<button className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/20 hover:scale-105 border border-white/10 font-sans">
                  Explore Features
                  <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 lg:[grid-auto-flow:dense] lg:auto-rows-auto gap-0 bg-black border-white/15 border rounded-3xl gap-x-0 gap-y-0">

<div className="lg:col-span-3 overflow-hidden group bg-black border-white/15 border-b relative">

<div className="grid grid-cols-1 lg:grid-cols-12 h-full">

<div className="col-span-12 lg:col-span-10 lg:p-10 flex flex-col min-h-[420px] pt-6 pr-6 pb-6 pl-6 justify-center">
<div className="flex flex-col lg:flex-row gap-6 lg:gap-10 gap-x-6 gap-y-6 items-start h-full">

<div className="w-full max-w-[420px] lg:max-w-[360px] overflow-hidden rounded-2xl select-none shrink-0 aspect-[4/3] lg:aspect-[3/4] relative bg-[#151517]">
<img alt="Customer portrait" className="w-full h-full object-cover transition-all duration-500 ease-out transform" id="ts-avatar" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca8a8ad2-b776-4062-8743-e450dade97ba_800w.webp"/>
</div>

<div className="flex-1 w-full flex flex-col justify-between h-full py-2">
<div className="transition-all duration-500 ease-out transform translate-y-0 opacity-100" id="ts-content-wrapper">

<div className="mb-6 text-white/20">
<iconify-icon height="40" icon="solar:quote-up-linear" width="40"></iconify-icon>
</div>

<p className="leading-relaxed sm:text-3xl lg:text-4xl text-2xl italic text-white/70 tracking-tight min-h-[160px] lg:min-h-[200px]" id="ts-quote">
                          "Promptive isn't just a code generator; it's a
                          context-aware partner. It reduced our debugging time
                          by 60% and the prompt optimizer is a game changer for
                          precise outputs."
                        </p>

<div className="mt-8 flex items-end justify-between gap-6">
<div className="">
<h4 className="sm:text-3xl text-2xl font-semibold text-white tracking-tight" id="ts-name">
                              Sarah Chen
                            </h4>
<p className="sm:text-lg text-base text-slate-400 mt-1" id="ts-title">
                              Lead Architect at DevScale
                            </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 bg-black h-fit">
<div className="h-full w-full flex items-center justify-center">
<div className="flex gap-4 pt-6 pr-6 pb-6 pl-6 gap-x-4 gap-y-4 items-center w-full justify-center lg:flex-col lg:gap-6">
<button className="group/btn relative inline-flex items-center justify-center w-14 h-14 rounded-2xl ring-1 ring-white/10 bg-white/5 hover:bg-white/10 hover:ring-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-300" id="ts-prev-btn">
<iconify-icon className="text-slate-400 group-hover/btn:text-white transition-colors" icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="group/btn relative inline-flex items-center justify-center w-14 h-14 rounded-2xl ring-1 ring-white/10 bg-white/5 hover:bg-white/10 hover:ring-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-300" id="ts-next-btn">
<iconify-icon className="text-slate-400 group-hover/btn:text-white transition-colors" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>


<div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 bg-[#0F0F11] h-fit">

<div className="flex flex-col md:border-b-0 group max-h-fit border-white/10 border-r border-b pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<div className="flex items-start font-medium text-blue-500 leading-none">
<span className="text-5xl tracking-tight group-hover:scale-105 transition-transform duration-300">
                    10M
                  </span>
<span className="text-xl ml-1 mt-1 font-normal">+</span>
</div>
<div className="mt-3 text-base font-normal text-neutral-300">
                  PRs Merged
                </div>
</div>

<div className="flex flex-col md:border-b-0 md:border-r group max-h-fit border-white/10 border-b pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<div className="flex items-start font-medium text-blue-500 leading-none">
<span className="text-5xl tracking-tight group-hover:scale-105 transition-transform duration-300">
                    500k
                  </span>
<span className="text-xl ml-1 mt-1 font-normal">+</span>
</div>
<div className="mt-3 text-base font-normal text-neutral-300">
                  Hours Saved
                </div>
</div>

<div className="flex flex-col group max-h-fit border-white/10 border-r pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<div className="flex items-start font-medium text-blue-500 leading-none">
<span className="text-5xl tracking-tight group-hover:scale-105 transition-transform duration-300">
                    99.9
                  </span>
<span className="text-xl ml-1 mt-1 font-normal text-blue-500/80">
                    %
                  </span>
</div>
<div className="mt-3 text-base font-normal text-neutral-300">
                  Syntax Accuracy
                </div>
</div>

<div className="flex flex-col group max-h-fit pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<div className="flex items-start font-medium text-blue-500 leading-none">
<span className="text-5xl tracking-tight group-hover:scale-105 transition-transform duration-300">
                    &lt;50
                  </span>
<span className="text-xl ml-1 mt-1 font-normal">ms</span>
</div>
<div className="mt-3 text-base font-normal text-neutral-300">
                  Avg Latency
                </div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 lg:py-32 pt-20 pb-20 relative" id="pricing">
<div className="sm:px-6 lg:px-8 xl:px-12 w-full max-w-[1500px] mr-auto ml-auto pr-4 pl-4">

<div className="flex flex-col lg:flex-row lg:items-start lg:gap-x-6 mb-16 gap-x-6 gap-y-6">
<div className="flex-shrink-0 mb-8 lg:mb-0">
<div className="inline-flex items-center gap-3">
<span className="lg:text-7xl text-6xl text-white/10 font-dm-sans tracking-tight font-light">
                  05
                </span>
<div className="w-px xl:bg-blue-500/20 h-16"></div>
</div>
</div>
<div className="flex-1 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
<div className="">
<h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6 font-dm-sans tracking-tight font-light">
                  Scalable
                  <span className="text-white font-dm-sans tracking-tight font-light">
                    Pricing
                  </span>
</h2>
<p className="text-xl text-neutral-300 max-w-3xl font-dm-sans tracking-tight font-light">
                  Start hacking for free, scale to enterprise when you're ready.
                </p>
</div>
<div className="mt-8 lg:mt-0 lg:self-start">
<button className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/20 hover:scale-105 border border-white/10 font-sans">
                  Explore Features
                  <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="sm:rounded-3xl lg:rounded-3xl overflow-hidden bg-black border-white/15 border rounded-3xl">
<div className="grid grid-cols-1 lg:grid-cols-3 lg:divide-x lg:divide-white/10">

<div className="flex flex-col h-full">
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6">
<h3 className="text-white text-xl sm:text-2xl font-semibold tracking-tight mb-4">
                    Hacker
                  </h3>
<div className="mt-3 flex items-end gap-2">
<span className="text-white leading-[1] tracking-tight" style={{fontSize: '44px', fontWeight: '600'}}>
                      $0
                    </span>
<span className="text-slate-400 text-lg mb-2">/month</span>
</div>
<p className="text-sm text-slate-400 mt-2 mb-6">
                    Perfect for side projects.
                  </p>
<button className="w-full bg-white/5 hover:bg-white/10 text-white rounded-full py-3 font-medium transition-colors border border-white/10">
                    Start Coding
                  </button>
</div>
<div className="mt-auto border-t border-white/10 p-6 sm:p-8">
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
<span className="tracking-tight">Unlimited prompts</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
<span className="tracking-tight">
                        Standard code generation
                      </span>
</li>
</ul>
</div>
</div>

<div className="flex flex-col h-full bg-gradient-to-b from-blue-600/10 via-transparent to-transparent">
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-white text-xl sm:text-2xl font-semibold tracking-tight">
                      Pro
                    </h3>
<span className="bg-blue-600 text-[10px] font-bold px-2 py-1 rounded text-white">
                      POPULAR
                    </span>
</div>
<div className="mt-3 flex items-end gap-2">
<span className="text-white leading-[1] tracking-tight" style={{fontSize: '44px', fontWeight: '600'}}>
                      $29
                    </span>
<span className="text-slate-400 text-lg mb-2">/month</span>
</div>
<p className="text-sm text-slate-400 mt-2 mb-6">
                    For professional developers.
                  </p>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 font-medium transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                    Get Pro
                  </button>
</div>
<div className="mt-auto border-t border-white/10 p-6 sm:p-8">
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-blue-400" icon="solar:check-circle-bold"></iconify-icon>
<span className="tracking-tight">
                        GPT-4 &amp; Claude 3 Opus
                      </span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-blue-400" icon="solar:check-circle-bold"></iconify-icon>
<span className="tracking-tight">VS Code Extension</span>
</li>
</ul>
</div>
</div>

<div className="flex flex-col h-full">
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6">
<h3 className="sm:text-2xl text-xl font-semibold text-white tracking-tight mb-4">
                    Team
                  </h3>
<div className="flex gap-2 mt-3 mb-4 gap-x-2 gap-y-2 items-end">
<span className="leading-[1] text-white tracking-tight" style={{fontSize: '44px', fontWeight: '600'}}>
                      Custom
                    </span>
</div>
<p className="text-slate-300 text-sm mb-6">
                    For engineering organizations.
                  </p>
<button className="w-full bg-transparent hover:bg-white/5 text-white rounded-full py-3 font-medium transition-colors border border-white/10">
                    Contact Sales
                  </button>
</div>
<div className="mt-auto border-t border-white/10 p-6 sm:p-8">
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:shield-check-linear"></iconify-icon>
<span className="tracking-tight">SSO &amp; Audit Logs</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:server-square-linear"></iconify-icon>
<span className="tracking-tight">On-premise deployment</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="z-10 lg:py-32 pt-20 pb-20 relative" id="pricing">
<div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
<div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black isolate">

<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50"></div>
<div className="absolute inset-0 opacity-[0.15]" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '64px 64px', maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'}}></div>
<div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-blue-600/10 blur-[100px]"></div>
</div>

<div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 sm:p-12 lg:p-20 gap-12 lg:gap-20">

<div className="flex-1 text-center lg:text-left max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-medium text-blue-400 tracking-wide uppercase font-sans">
                    Limited Access
                  </span>
</div>
<h2 className="text-4xl sm:text-5xl lg:text-6xl text-white font-dm-sans tracking-tight font-light mb-6 leading-[1.1]">
                  Code the future,
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-normal">
                    today.
                  </span>
</h2>
<p className="text-xl text-neutral-400 font-light leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-sans tracking-tight">
                  Stop wrestling with boilerplate. Let Promptive handle the
                  implementation details while you focus on the architecture.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<button className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition-all hover:bg-neutral-200 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
<span className="">Start Building Free</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-white transition-all hover:bg-white/10 hover:border-white/20 backdrop-blur-sm">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
                    Book a Demo
                  </button>
</div>
<div className="mt-8 flex items-center justify-center lg:justify-start gap-x-8 gap-y-4 flex-wrap">
<div className="flex items-center gap-2 text-sm text-neutral-500 font-sans">
<iconify-icon className="text-blue-500" icon="lucide:check-circle"></iconify-icon>
<span className="">No credit card required</span>
</div>
<div className="flex items-center gap-2 text-sm text-neutral-500 font-sans">
<iconify-icon className="text-blue-500" icon="lucide:check-circle"></iconify-icon>
<span>14-day free trial</span>
</div>
</div>
</div>

<div className="flex-shrink-0 w-full max-w-md lg:max-w-lg perspective-normal group hidden sm:block">
<div className="relative transform transition-all duration-700 hover:rotate-y-6 hover:rotate-x-6 preserve-3d">

<div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl backdrop-blur-xl">

<div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
<div className="flex gap-2">
<div className="h-3 w-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50"></div>
<div className="h-3 w-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50"></div>
<div className="h-3 w-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50"></div>
</div>
<div className="text-[10px] font-mono text-neutral-500 flex items-center gap-1">
<iconify-icon icon="lucide:terminal" width="10"></iconify-icon>
                        install.sh
                      </div>
<div className="w-12"></div>
</div>

<div className="p-6 font-mono text-sm leading-relaxed">
<div className="flex gap-3 mb-2">
<span className="text-green-400">➜</span>
<span className="text-blue-300">~</span>
<span className="text-white">
                          npm install -g promptive-cli
                        </span>
</div>
<div className="text-neutral-500 mb-4 text-xs">
                        Downloading packages...
                      </div>
<div className="space-y-1 text-xs mb-6">
<div className="flex justify-between text-neutral-300">
<span>core-engine</span>
<span className="text-neutral-600">
                            [====================] 100%
                          </span>
</div>
<div className="flex justify-between text-neutral-300">
<span>syntax-parser</span>
<span className="text-neutral-600">
                            [====================] 100%
                          </span>
</div>
</div>
<div className="flex gap-3 mb-2">
<span className="text-green-400">➜</span>
<span className="text-blue-300">~</span>
<span className="text-white">promptive init</span>
</div>
<div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded text-blue-200 text-xs flex gap-3">
<span className="text-blue-400 text-base">ℹ</span>
<div>
<span className="font-semibold text-blue-100">
                            Welcome to Promptive!
                          </span>
<br/>
<span className="opacity-80">
                            Ready to generate production code.
                          </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="relative z-10 border-t border-white/10 bg-black pt-16 pb-12">
<div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="text-xl font-semibold tracking-tight text-white">
                Promptive
              </div>
</div>
<p className="text-sm text-neutral-400 mb-6 max-w-xs leading-relaxed">
              Engineered for developers who want to ship code at the speed of
              thought. Automate your workflow with AI-driven precision.
            </p>
<div className="flex gap-4">
<a aria-label="Github" className="text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:github" width="20"></iconify-icon>
</a>
<a aria-label="Twitter" className="text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="20"></iconify-icon>
</a>
<a aria-label="Discord" className="text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:message-circle" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h3 className="font-semibold text-white mb-6">Product</h3>
<ul className="space-y-4 text-sm text-neutral-400">
<li>
<a className="hover:text-blue-400 transition-colors" href="#">
                  Features
                </a>
</li>
<li>
<a className="hover:text-blue-400 transition-colors" href="#">
                  Integrations
                </a>
</li>
</ul>
</div>
<div>
<h3 className="font-semibold text-white mb-6">Resources</h3>
<ul className="space-y-4 text-sm text-neutral-400">
<li>
<a className="hover:text-blue-400 transition-colors" href="#">
                  Documentation
                </a>
</li>
<li>
<a className="hover:text-blue-400 transition-colors" href="#">
                  API Reference
                </a>
</li>
</ul>
</div>
<div>
<h3 className="font-semibold text-white mb-6">Company</h3>
<ul className="space-y-4 text-sm text-neutral-400">
<li>
<a className="hover:text-blue-400 transition-colors" href="#">
                  About
                </a>
</li>
<li>
<a className="hover:text-blue-400 transition-colors" href="#">
                  Careers
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-sm text-neutral-500">
            © 2024 Promptive Inc. All rights reserved.
          </div>
<div className="flex gap-8 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
<a className="hover:text-white transition-colors" href="#">
              Cookie Settings
            </a>
</div>
</div>
</div>
</footer>



    </>
  );
}
