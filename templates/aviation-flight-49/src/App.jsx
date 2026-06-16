import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {

          // Preloader logic
          const preloader = document.getElementById('preloader');
          if(preloader) {
              setTimeout(() => {
                  preloader.style.opacity = '0';
                  setTimeout(() => preloader.remove(), 1000);
              }, 1400);
          }

          // Framer-style Scroll Reveals
          const revealElements = document.querySelectorAll('.reveal-up, .reveal-clip');
          const revealObserver = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('is-visible');
                      revealObserver.unobserve(entry.target);
                  }
              });
          }, {
              threshold: 0.1,
              rootMargin: "0px 0px -50px 0px"
          });

          revealElements.forEach(el => revealObserver.observe(el));

          // Metrics Count Up Animation
          const countElements = document.querySelectorAll('.count-up');
          const countObserver = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      const target = parseInt(entry.target.getAttribute('data-target'));
                      const duration = 2000; // 2 seconds
                      const frameDuration = 1000 / 60;
                      const totalFrames = Math.round(duration / frameDuration);
                      let frame = 0;

                      const updateCount = () => {
                          frame++;
                          const progress = frame / totalFrames;
                          const currentCount = Math.round(target * progress);

                          if (frame < totalFrames) {
                              entry.target.innerText = currentCount;
                              requestAnimationFrame(updateCount);
                          } else {
                              entry.target.innerText = target;
                          }
                      };

                      requestAnimationFrame(updateCount);
                      countObserver.unobserve(entry.target);
                  }
              });
          }, { threshold: 0.5 });

          countElements.forEach(el => countObserver.observe(el));

          // Interactive Systems Toggle
          const systemItems = document.querySelectorAll('.system-item');
          const blueprintLayers = document.querySelectorAll('.blueprint-layer');

          systemItems.forEach(item => {
              item.addEventListener('mouseenter', () => {
                  const targetId = item.getAttribute('data-target');

                  // Update indicators & text colors
                  systemItems.forEach(i => {
                      const indicator = i.querySelector('.indicator');
                      const title = i.querySelector('h4');
                      if (i === item) {
                          indicator.classList.remove('bg-slate-300');
                          indicator.classList.add('bg-[#1A5DAB]');
                          title.classList.remove('text-slate-900');
                          title.classList.add('text-[#1A5DAB]');
                      } else {
                          indicator.classList.add('bg-slate-300');
                          indicator.classList.remove('bg-[#1A5DAB]');
                          title.classList.add('text-slate-900');
                          title.classList.remove('text-[#1A5DAB]');
                      }
                  });

                  // Update blueprint visual layers
                  blueprintLayers.forEach((layer, index) => {
                      if (index.toString() === targetId) {
                          layer.classList.remove('opacity-0', 'scale-95');
                          layer.classList.add('opacity-100', 'scale-100', 'active');
                      } else {
                          layer.classList.add('opacity-0', 'scale-95');
                          layer.classList.remove('opacity-100', 'scale-100', 'active');
                      }
                  });
              });
          });

          // Countdown Timer Logic
          const countdownEl = document.getElementById('launch-countdown');
          if (countdownEl) {
              let hours = 18;
              let minutes = 4;
              let seconds = 22;

              setInterval(() => {
                  seconds--;
                  if (seconds < 0) {
                      seconds = 59;
                      minutes--;
                      if (minutes < 0) {
                          minutes = 59;
                          hours--;
                      }
                  }

                  const h = hours.toString().padStart(2, '0');
                  const m = minutes.toString().padStart(2, '0');
                  const s = seconds.toString().padStart(2, '0');
                  countdownEl.innerText = `-${h}:${m}:${s}`;
              }, 1000);
          }

          // Abstract Three.js Particle Background (WebGL Container)
          const container = document.getElementById('webgl-container');
          if (container && window.THREE) {
              const scene = new THREE.Scene();
              const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
              const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

              renderer.setSize(window.innerWidth, window.innerHeight);
              renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
              container.appendChild(renderer.domElement);

              const particlesGeometry = new THREE.BufferGeometry();
              const particlesCount = 700;
              const posArray = new Float32Array(particlesCount * 3);

              for(let i = 0; i < particlesCount * 3; i++) {
                  // Spread particles in a wide subtle cloud
                  posArray[i] = (Math.random() - 0.5) * 20;
              }

              particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
              const particlesMaterial = new THREE.PointsMaterial({
                  size: 0.015,
                  color: 0x1A5DAB,
                  transparent: true,
                  opacity: 0.6,
                  blending: THREE.AdditiveBlending
              });

              const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
              scene.add(particlesMesh);

              camera.position.z = 4;

              // Mouse interaction for subtle parallax
              let mouseX = 0;
              let mouseY = 0;
              let targetX = 0;
              let targetY = 0;
              const windowHalfX = window.innerWidth / 2;
              const windowHalfY = window.innerHeight / 2;

              document.addEventListener('mousemove', (event) => {
                  mouseX = (event.clientX - windowHalfX);
                  mouseY = (event.clientY - windowHalfY);
              });

              const animate = () => {
                  requestAnimationFrame(animate);

                  targetX = mouseX * 0.001;
                  targetY = mouseY * 0.001;

                  particlesMesh.rotation.y += 0.0005;
                  particlesMesh.rotation.x += 0.0002;

                  // Ease rotation towards mouse position
                  particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
                  particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);

                  renderer.render(scene, camera);
              };

              animate();

              // Handle Resize
              window.addEventListener('resize', () => {
                  camera.aspect = window.innerWidth / window.innerHeight;
                  camera.updateProjectionMatrix();
                  renderer.setSize(window.innerWidth, window.innerHeight);
              });
          }

          // Bento Card Mouse Hover Parallax Effect
          const bentoCards = document.querySelectorAll('.bento-card');
          bentoCards.forEach(card => {
              card.addEventListener('mousemove', e => {
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  card.style.setProperty('--mouse-x', `${x}px`);
                  card.style.setProperty('--mouse-y', `${y}px`);
              });
          });

      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-y-0 left-[clamp(1.5rem,5vw,5rem)] w-px bg-slate-900/[0.04] pointer-events-none z-0"></div>
<div className="fixed inset-y-0 right-[clamp(1.5rem,5vw,5rem)] w-px bg-slate-900/[0.04] pointer-events-none z-0"></div>


<div className="fixed inset-0 z-[-1] pointer-events-none bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,white_20%,transparent_80%)]"></div>

<nav className="fixed top-6 md:top-8 inset-x-0 mx-auto z-50 w-[92%] max-w-[55rem] transition-all duration-700 reveal-up is-visible" id="navbar" style={{transitionDelay: '1s'}}>
<div className="flex items-center justify-between relative px-2.5 py-2.5 bg-white/80 backdrop-blur-xl border border-slate-900/10 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]">

<div className="flex-none pl-3 z-10">
<a className="flex items-center gap-3 group/logo" href="#">
<img alt="Coast Flight Training" className="md:h-8 transition-transform duration-500 group-hover/logo:scale-105 w-auto h-7 object-contain invert-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7779c4e9-cf43-4379-a162-96455d9c5618_320w.png"/>
</a>
</div>

<div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 px-4 border-x border-slate-900/10 h-[60%]">
<a className="text-xs font-mono font-light text-slate-500 hover:text-slate-900 hover:bg-slate-900/5 px-4 py-2 rounded-full transition-all duration-300" href="#architecture">
            Pathways
          </a>
<a className="text-xs font-mono font-light text-slate-500 hover:text-slate-900 hover:bg-slate-900/5 px-4 py-2 rounded-full transition-all duration-300" href="#fleet">
            Fleet
          </a>
<a className="text-xs font-mono font-light text-slate-500 hover:text-slate-900 hover:bg-slate-900/5 px-4 py-2 rounded-full transition-all duration-300" href="#admissions">
            Admissions
          </a>
</div>

<div className="flex-none pr-1 z-10">
<a className="codepen-button hidden md:inline-block" href="#contact">
<span className="px-5 py-2 text-xs font-mono tracking-wider">
              BOOK FLIGHT
              <iconify-icon className="w-4 h-4" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</a>
<button className="md:hidden flex flex-col gap-1.5 p-3">
<div className="w-4 h-[1px] bg-slate-900"></div>
<div className="w-4 h-[1px] bg-slate-900"></div>
</button>
</div>
</div>
</nav>

<section className="relative min-h-[100dvh] w-full flex items-center pt-[8rem] pb-[4rem] px-[clamp(1.5rem,5vw,5rem)] overflow-hidden">

<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden bg-gradient-to-b from-[#AEC7E4] via-[#C0D6EC] to-white">

<div className="absolute -left-[10%] top-[15%] w-[50vw] min-w-[400px] aspect-square bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-screen opacity-90" style={{WebkitMaskImage: 'radial-gradient(circle at center, black 15%, transparent 60%)', maskImage: 'radial-gradient(circle at center, black 15%, transparent 60%)'}}></div>

<div className="absolute -right-[15%] top-[5%] w-[60vw] min-w-[500px] aspect-square bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-screen opacity-90" style={{WebkitMaskImage: 'radial-gradient(circle at center, black 15%, transparent 60%)', maskImage: 'radial-gradient(circle at center, black 15%, transparent 60%)', transform: 'scaleX(-1) rotate(5deg)'}}></div>
<div className="absolute inset-0 z-0 opacity-20 mix-blend-multiply" id="webgl-container"></div>
</div>
<div className="w-full max-w-[90rem] mx-auto relative z-10 grid grid-cols-1 gap-12 items-center">
<div className="flex flex-col items-center text-center mt-12 md:mt-0">
<div className="inline-flex items-center gap-3 border border-slate-900/10 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full mb-8 reveal-up shadow-sm is-visible" style={{transitionDelay: '1.1s'}}>
<div className="w-2 h-2 bg-[#1A5DAB] rounded-full animate-pulse shadow-[0_0_10px_rgba(26,93,171,0.20)]"></div>
<span className="font-mono text-xs font-light text-slate-900 uppercase tracking-widest">
              Professional Flight School
            </span>
</div>
<h1 className="font-display font-normal text-[clamp(2.5rem,8vw,9rem)] leading-[0.85] tracking-tighter text-slate-900 mb-8 reveal-up text-balance flex flex-col items-center w-full is-visible" style={{transitionDelay: '1.2s'}}>
<span className="sr-only">Professional Flight School</span>
<span className="">THE SKY IS NO</span>
<span className="flex items-center justify-center gap-3 md:gap-4 flex-wrap w-full">
              LONGER THE
              <span className="hidden sm:inline-flex h-[clamp(2.5rem,5vw,6rem)] w-[clamp(6rem,12vw,14rem)] bg-white border rounded-full items-center justify-center overflow-hidden relative group backdrop-blur-sm shadow-sm border-white">
<span className="bg-center group-hover:scale-110 transition-transform duration-1000 opacity-60 bg-[url(https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?w=320&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></span>
<span className="z-[5] border-stone-50 absolute top-0 right-0 bottom-0 left-0"></span>
<span className="text-xs text-neutral-50 tracking-widest font-mono z-10 relative">
                  LIMIT.
                </span>
</span>
</span>
<span className="">IT'S YOUR OFFICE.</span>
</h1>
<p className="font-sans text-[clamp(1.125rem,1.5vw,1.5rem)] font-light text-slate-600 max-w-[50ch] leading-[1.6] mb-12 reveal-up text-balance is-visible" style={{transitionDelay: '1.3s'}}>
            Elite Airline Pilot Training in San Diego, Dallas, and San Marcos.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto reveal-up is-visible" style={{transitionDelay: '1.4s'}}>
<a className="codepen-button w-full sm:w-auto" href="#admissions">
<span className="px-8 py-4 text-sm font-mono tracking-widest">
                BOOK A DISCOVERY FLIGHT
                <iconify-icon className="w-5 h-5" icon="solar:paperplane-linear"></iconify-icon>
</span>
</a>
<a className="group flex items-center justify-center gap-3 h-14 px-6 text-xs text-slate-500 hover:text-slate-900 font-mono font-light tracking-widest transition-colors w-full sm:w-auto" href="#architecture">
<div className="w-8 h-[1px] bg-slate-300 group-hover:w-12 group-hover:bg-slate-900 transition-all duration-300"></div>
              EXPLORE PATHWAYS
            </a>
</div>
</div>
</div>

<div className="absolute left-[clamp(1.5rem,5vw,5rem)] bottom-12 hidden lg:flex flex-col items-start gap-4 reveal-up is-visible" style={{transitionDelay: '1.5s'}}>
<div className="font-mono text-xs font-light text-slate-900 tracking-widest transform -rotate-90 origin-left translate-y-12">
          SCROLL
        </div>
<div className="w-[1px] h-16 bg-slate-900/30 relative overflow-hidden ml-2">
<div className="absolute top-0 left-0 w-full h-1/2 bg-slate-900 animate-[slideDown_2s_ease-in-out_infinite]"></div>
</div>
</div>
</section>

<section className="border-y border-slate-200 overflow-hidden relative flex items-center h-20 md:h-28 bg-slate-50">

<div className="absolute left-0 top-0 bottom-0 z-20 flex items-center pl-[clamp(1.5rem,5vw,5rem)] pr-6 md:pr-10 border-r border-slate-200 shadow-[20px_0_30px_-10px_rgba(255,255,255,1)] bg-slate-50">
<div className="font-mono text-xs text-slate-500 tracking-[0.2em] font-light uppercase whitespace-nowrap">
          Partner
          <br/>
          Careers
        </div>
</div>

<div className="absolute right-0 top-0 bottom-0 z-20 w-32 bg-gradient-to-l to-transparent pointer-events-none from-slate-50"></div>

<div className="flex flex-nowrap w-max animate-[marquee_40s_linear_infinite] opacity-60 hover:opacity-100 transition-opacity duration-700 pl-[250px] md:pl-[350px]" style={{animation: 'marquee 40s linear infinite'}}>
<div className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24 min-w-max">
<span className="font-display font-normal text-lg md:text-2xl tracking-tight text-slate-400 hover:text-slate-900 transition-all duration-300 cursor-default">
            UNITED
          </span>
<span className="font-display font-normal text-lg md:text-2xl tracking-tight text-slate-400 hover:text-slate-900 transition-all duration-300 cursor-default">
            SKYWEST
          </span>
<span className="font-display font-normal text-lg md:text-2xl tracking-tight text-slate-400 hover:text-slate-900 transition-all duration-300 cursor-default">
            AMERICAN AIRLINES
          </span>
<span className="font-display font-normal text-lg md:text-2xl tracking-tight text-slate-400 hover:text-slate-900 transition-all duration-300 cursor-default">
            DELTA
          </span>
<span className="font-display font-normal text-lg md:text-2xl tracking-tight text-slate-400 hover:text-slate-900 transition-all duration-300 cursor-default">
            SOUTHWEST
          </span>
</div>
<div aria-hidden="true" className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24 min-w-max">
<span className="font-display font-normal text-lg md:text-2xl tracking-tight text-slate-400 hover:text-slate-900 transition-all duration-300 cursor-default">
            UNITED
          </span>
<span className="font-display font-normal text-lg md:text-2xl tracking-tight text-slate-400 hover:text-slate-900 transition-all duration-300 cursor-default">
            SKYWEST
          </span>
<span className="font-display font-normal text-lg md:text-2xl tracking-tight text-slate-400 hover:text-slate-900 transition-all duration-300 cursor-default">
            AMERICAN AIRLINES
          </span>
<span className="font-display font-normal text-lg md:text-2xl tracking-tight text-slate-400 hover:text-slate-900 transition-all duration-300 cursor-default">
            DELTA
          </span>
<span className="font-display font-normal text-lg md:text-2xl tracking-tight text-slate-400 hover:text-slate-900 transition-all duration-300 cursor-default">
            SOUTHWEST
          </span>
</div>
</div>
</section>

<section className="py-[6rem] md:py-[10rem] px-[clamp(1.5rem,5vw,5rem)] relative z-10 bg-white" id="architecture">
<div className="max-w-[90rem] mx-auto">
<div className="mb-12 md:mb-20 reveal-up is-visible">
<span className="font-mono text-xs font-light text-[#1A5DAB] tracking-[0.2em] uppercase flex items-center gap-3 mb-6">
<span className="w-2 h-2 bg-[#1A5DAB]"></span>
            Training Pathways
          </span>
<h2 className="font-display font-normal text-[clamp(2.5rem,5vw,4.5rem)] tracking-tighter leading-none mb-6 text-slate-900">
            Your Journey.
            <br/>
<span className="text-slate-400">Our Expertise.</span>
</h2>
<p className="text-[clamp(1.125rem,1.5vw,1.25rem)] font-light text-slate-500 max-w-[45ch] leading-[1.6]">
            From zero experience to airline-ready. Our structured programs are
            designed to turn ambition into a professional aviation career.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto md:auto-rows-[24rem]">

<div className="md:col-span-8 md:row-span-2 bg-white border border-slate-200 relative overflow-hidden transition-all duration-700 group hover:border-slate-300 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] flex flex-col justify-between reveal-up min-h-[24rem] bento-card hover:scale-[1.01] hover:z-20 rounded-xl is-visible" style={{-MouseX: '552.40625px', -MouseY: '766.203125px'}}>
<div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
<div className="absolute bottom-0 left-0 right-0 h-[65%] bg-gradient-to-t from-white/95 via-white/70 to-transparent z-10 pointer-events-none"></div>
<img alt="Airline Career" className="w-full h-full object-cover saturate-[1.1] transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:brightness-[1.08] group-hover:contrast-[1.05]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ae91804-ad20-4064-a787-425d5dc07a7b_1600w.jpg"/>
</div>
<div className="z-10 relative h-full flex flex-col justify-between p-8 md:p-12 pointer-events-none">
<div className="flex justify-between items-start mb-12 md:mb-0">
<div className="font-mono text-xs font-light bg-slate-100/80 border border-slate-200 px-3 py-1 rounded-full text-slate-600 backdrop-blur-md">
                  PROGRAM_01
                </div>
<iconify-icon className="w-8 h-8 text-slate-900 opacity-40 group-hover:opacity-100 group-hover:text-[#2B7CD4] transition-all duration-500 text-3xl" icon="solar:paperplane-linear"></iconify-icon>
</div>
<div className="max-w-[32rem] pointer-events-auto">
<h3 className="font-display font-normal text-[clamp(2rem,3vw,3rem)] text-slate-900 mb-4 leading-none tracking-tight drop-shadow-sm group-hover:drop-shadow-none">
                  Airline Career
                </h3>
<p className="text-base font-light text-slate-600 leading-[1.6] mb-8 group-hover:text-slate-800 transition-colors">
                  Our premier structured training program designed to take you
                  from zero hours to a guaranteed flight instructor role, and
                  onward to the airlines.
                </p>
<a className="inline-flex items-center gap-2 font-mono text-xs font-light text-[#1A5DAB] hover:text-[#2B7CD4] transition-colors" href="#">
                  VIEW CURRICULUM
                  <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="md:col-span-4 md:row-span-2 bg-white border border-slate-200 relative overflow-hidden transition-all duration-700 group hover:border-slate-300 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] flex flex-col justify-between reveal-up min-h-[24rem] bento-card hover:scale-[1.01] hover:z-20 rounded-xl is-visible" style={{transitionDelay: '0.1s', -MouseX: '157.203125px', -MouseY: '626.203125px'}}>
<div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
<div className="absolute bottom-0 left-0 right-0 h-[65%] bg-gradient-to-t from-white/95 via-white/70 to-transparent z-10 pointer-events-none"></div>
<img alt="Military Transition" className="w-full h-full object-cover contrast-[1.08] saturate-[1.05] transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:brightness-[1.08] group-hover:contrast-[1.05]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6adba3db-5f1c-4818-920e-2ba54a1e81b1_1600w.jpg"/>
</div>
<div className="z-10 relative h-full flex flex-col justify-between p-8 md:p-12 pointer-events-none">
<div className="flex justify-between items-start mb-8 md:mb-12">
<div className="font-mono text-xs font-light bg-slate-100/80 border border-slate-200 px-3 py-1 rounded-full text-slate-600 backdrop-blur-md">
                  PROGRAM_02
                </div>
</div>
<div className="pointer-events-auto">
<h3 className="font-display font-normal text-[clamp(1.5rem,2.5vw,2rem)] text-slate-900 mb-3 tracking-tight">
                  Military Transition
                </h3>
<p className="text-base font-light text-slate-600 leading-relaxed mb-6 group-hover:text-slate-800 transition-colors">
                  Rotor transition and skillbridge programs tailored for
                  veterans.
                </p>
<a className="inline-flex items-center gap-2 font-mono text-xs font-light text-[#1A5DAB] hover:text-[#2B7CD4] transition-colors" href="#">
                  VIEW CURRICULUM
                  <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="md:col-span-12 bg-white border border-slate-200 relative overflow-hidden transition-all duration-700 group hover:border-slate-300 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] flex flex-col md:flex-row reveal-up bento-card hover:scale-[1.01] hover:z-20 rounded-xl is-visible" style={{transitionDelay: '0.2s', -MouseX: '950.40625px', -MouseY: '28.203125px'}}>
<div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
<div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-transparent md:bg-gradient-to-r md:from-white/95 md:via-white/70 md:to-transparent z-10 pointer-events-none"></div>
<img alt="Private Pilot" className="contrast-[1.05] saturate-[1.05] transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:brightness-[1.08] group-hover:contrast-[1.05] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52cb41cc-89b1-4d2b-8d88-f41e229a3b68_1600w.jpg"/>
</div>
<div className="p-8 md:p-12 flex-1 flex flex-col justify-center z-10 relative w-full pointer-events-none">
<div className="font-mono text-xs font-light bg-slate-100/80 border border-slate-200 px-3 py-1 rounded-full text-slate-600 self-start mb-6 backdrop-blur-md">
                PROGRAM_03
              </div>
<h3 className="font-display font-normal text-[clamp(1.75rem,2.5vw,2.25rem)] text-slate-900 mb-4 tracking-tight">
                Private Pilot
              </h3>
<p className="text-base font-light text-slate-600 leading-[1.6] max-w-[40ch] mb-6 group-hover:text-slate-800 transition-colors">
                Fly for business or pleasure. The ultimate freedom begins here
                with our world-class modern fleet.
              </p>
<a className="inline-flex items-center gap-2 font-mono text-xs font-light text-[#1A5DAB] hover:text-[#2B7CD4] transition-colors pointer-events-auto" href="#">
                VIEW CURRICULUM
                <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>


<section className="border-y border-slate-200 bg-white relative z-20">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 w-full">
<div className="p-10 lg:p-14 flex flex-col justify-between aspect-square group bg-slate-50 hover:bg-[#1A5DAB] transition-colors duration-500 cursor-default relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-700 mix-blend-multiply grayscale"></div>
<span className="group-hover:text-white/80 transition-colors z-10 text-xs font-normal text-slate-500 tracking-widest font-mono relative">
            PILOTS TRAINED
          </span>
<div className="relative z-10 transform group-hover:-translate-y-4 transition-transform duration-500">
<div className="text-[clamp(3.5rem,6vw,5.5rem)] leading-none group-hover:text-white transition-colors count-up font-normal text-slate-900 tracking-tighter font-display mb-2" data-target="34">
              0
            </div>
<p className="group-hover:text-white/90 transition-colors text-sm font-light text-slate-500">
              Career and recreational graduates across three campuses.
            </p>
</div>
</div>
<div className="p-10 lg:p-14 flex flex-col justify-between aspect-square group bg-slate-50 hover:bg-[#1A5DAB] transition-colors duration-500 cursor-default relative overflow-hidden">
<div className="bg-center group-hover:opacity-10 transition-opacity duration-700 opacity-0 mix-blend-multiply bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover absolute top-0 right-0 bottom-0 left-0 grayscale"></div>
<span className="group-hover:text-white/80 transition-colors text-xs font-normal text-slate-500 tracking-widest font-mono z-10 relative">
            PLACEMENT RATE
          </span>
<div className="relative z-10 transform group-hover:-translate-y-4 transition-transform duration-500">
<div className="font-display font-normal text-[clamp(3.5rem,6vw,5.5rem)] text-slate-900 leading-none mb-2 group-hover:text-white transition-colors tracking-tighter">
<span className="count-up" data-target="99">0</span>
              .9
              <span className="text-[clamp(1.75rem,3vw,3rem)] text-slate-400 group-hover:text-white/80">
                %
              </span>
</div>
<p className="group-hover:text-white/90 transition-colors text-sm font-light text-slate-500">
              Academy graduates placed with airline partners.
            </p>
</div>
</div>
<div className="p-10 lg:p-14 flex flex-col justify-between aspect-square group bg-slate-50 hover:bg-slate-900 transition-colors duration-500 cursor-default relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-700 mix-blend-multiply grayscale"></div>
<span className="group-hover:text-white/60 transition-colors text-xs font-normal text-slate-500 tracking-widest font-mono z-10 relative">
            AIRCRAFT FLEET
          </span>
<div className="relative z-10 transform group-hover:-translate-y-4 transition-transform duration-500">
<div className="font-display font-normal text-[clamp(3.5rem,6vw,5.5rem)] text-slate-900 leading-none mb-2 group-hover:text-white transition-colors tracking-tighter">
<span className="count-up" data-target="15">0</span>
<span className="text-[clamp(1.75rem,3vw,3rem)] text-slate-400 group-hover:text-white/60">
                Y
              </span>
</div>
<p className="group-hover:text-white/80 transition-colors text-sm font-light text-slate-500">
              Cirrus, Piper, Cessna — all G1000 equipped.
            </p>
</div>
</div>
<div className="p-10 lg:p-14 flex flex-col justify-between aspect-square group bg-slate-50 hover:bg-slate-900 transition-colors duration-500 cursor-default relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-700 mix-blend-multiply grayscale"></div>
<span className="group-hover:text-white/60 transition-colors text-xs font-normal text-slate-500 tracking-widest font-mono z-10 relative">
            JOB OFFERS
          </span>
<div className="relative z-10 transform group-hover:-translate-y-4 transition-transform duration-500">
<div className="font-display font-normal text-[clamp(3.5rem,6vw,5.5rem)] text-slate-900 leading-none mb-2 flex items-start group-hover:text-white transition-colors tracking-tighter">
<span className="text-[clamp(1.75rem,3vw,3rem)] mt-2 mr-1 text-slate-400 group-hover:text-white/60">
                $
              </span>
<span className="count-up" data-target="4">0</span>
              .2
              <span className="text-[clamp(1.75rem,3vw,3rem)] text-slate-400 group-hover:text-white/60 mt-1">
                B
              </span>
</div>
<p className="group-hover:text-white/80 transition-colors text-sm font-light text-slate-500">
              More conditional offers than any peer school nationally.
            </p>
</div>
</div>
</div>
</section>



<section className="border-b border-slate-200 bg-white relative overflow-hidden">
<div className="max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-2">


</div>
</section>

<div className="bg-white relative z-20 px-[clamp(1.5rem,5vw,5rem)] py-[4rem] md:py-[8rem]">
<section className="cta-section relative w-full max-w-[90rem] mx-auto min-h-[60vh] py-20 flex flex-col items-center justify-center overflow-hidden text-center bg-[#06080c] rounded-3xl shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)]">

<video autoplay="" className="cta-bg-photo absolute inset-0 z-0 w-full h-[130%] -top-[15%] object-cover" loop="" muted="" playsinline="" style={{filter: 'brightness(0.8) contrast(1.1) saturate(1.15)'}}>
<source src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/ee77abb2-b67d-4ed9-bbf1-155a06f3baad/642c4e57-36d4-4a67-b403-0d13c769b912-1460279_Cockpit_View_1280x720-1-1-.mp4?v=1777486220669" type="video/mp4"/>
</video>

<div className="absolute inset-0 z-10 bg-[#06080c]/50"></div>
<div className="absolute inset-0 z-10 bg-gradient-to-b from-[#06080c] via-transparent to-[#06080c] opacity-80"></div>


<div className="relative z-30 w-full max-w-[50rem] mx-auto px-6 flex flex-col items-center">

<h2 className="cta-title font-display font-normal text-[clamp(3rem,7vw,6.5rem)] tracking-tight text-white leading-[0.9] mb-6 flex flex-wrap justify-center gap-x-[1.5vw]">
<span className="word block">Ready</span>
<span className="word block">for</span>
<span className="word block">Takeoff?</span>
</h2>

<p className="cta-subtitle font-sans text-[clamp(1.125rem,1.25vw,1.25rem)] font-light text-white/90 max-w-[40ch] mx-auto mb-10 md:mb-12 leading-[1.6]">
            Book a campus tour or schedule a discovery flight. Our admissions
            team responds within 24 hours. Zero obligations.
          </p>

<div className="cta-button flex flex-col items-center gap-4">
<a className="group inline-flex items-center justify-center px-[48px] py-[18px] bg-[#1A5DAB] text-white text-sm font-medium tracking-widest uppercase rounded-full transition-all duration-300 hover:-translate-y-[3px] hover:bg-[#2B7CD4] hover:shadow-[0_0_20px_rgba(43,124,212,0.4)]" href="#admissions">
              BOOK A DISCOVERY FLIGHT
              <svg className="ml-2 transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="text-white/70 hover:text-white text-sm font-light transition-colors" href="tel:8582794359">
              or call (858) 279-4359
            </a>
</div>
</div>


</section>
</div>

<footer className="bg-[#f8fafc] border-t border-slate-200 relative pb-8 pt-16 md:pt-20 z-30">
<div className="max-w-[90rem] mx-auto px-[clamp(1.5rem,5vw,5rem)] flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 border-b border-slate-200 pb-12 lg:pb-16">
<div className="flex flex-col justify-between max-w-xs">
<img alt="Coast Flight Training Logo" className="md:w-40 w-32 h-auto object-contain mb-8 invert-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7779c4e9-cf43-4379-a162-96455d9c5618_320w.png"/>
<div className="font-mono text-xs font-light text-slate-500 leading-[1.8] tracking-widest">
            VELA SPACE SYSTEMS
            <br/>
            TOULOUSE SPACE CENTER
            <br/>
            ISO 14620 / AS9100D
          </div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-24 w-full lg:w-auto">
<div>
<h5 className="font-mono text-xs font-normal text-slate-900 tracking-[0.2em] mb-6 uppercase">
              Platforms
            </h5>
<ul className="flex flex-col gap-4 font-mono text-sm font-light text-slate-500">
<li>
<a className="hover:text-[#2B7CD4] transition-colors block" href="#">
                  LEO Micro-Bus
                </a>
</li>
<li>
<a className="hover:text-[#2B7CD4] transition-colors block" href="#">
                  GEO High-Power
                </a>
</li>
<li>
<a className="hover:text-[#2B7CD4] transition-colors block" href="#">
                  Deep Space Hub
                </a>
</li>
</ul>
</div>
<div className="">
<h5 className="font-mono text-xs font-normal text-slate-900 tracking-[0.2em] mb-6 uppercase">
              Company
            </h5>
<ul className="flex flex-col gap-4 font-mono text-sm font-light text-slate-500">
<li>
<a className="hover:text-[#2B7CD4] transition-colors block" href="#">
                  Manifesto
                </a>
</li>
<li className="">
<a className="hover:text-[#2B7CD4] transition-colors flex items-center gap-2" href="#">
                  Careers
                  <span className="bg-[#1A5DAB] text-white px-1.5 py-0.5 text-[0.6rem] font-normal rounded-sm">
                    HIRING
                  </span>
</a>
</li>
<li className="">
<a className="hover:text-[#2B7CD4] transition-colors block" href="#">
                  Press Room
                </a>
</li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h5 className="font-mono text-xs font-normal text-slate-900 tracking-[0.2em] mb-6 uppercase">
              Network
            </h5>
<ul className="flex flex-col gap-4 font-mono text-sm font-light text-slate-500">
<li>
<a className="hover:text-[#2B7CD4] transition-colors block" href="#">
                  Twitter / X
                </a>
</li>
<li>
<a className="hover:text-[#2B7CD4] transition-colors block" href="#">
                  LinkedIn
                </a>
</li>
<li>
<a className="hover:text-[#2B7CD4] transition-colors flex items-center gap-2" href="#">
                  System Status
                  <div className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse"></div>
</a>
</li>
</ul>
</div>
</div>
</div>
<div className="w-full flex justify-center mt-6 md:mt-8">
<span className="font-mono text-xs font-light text-slate-400 tracking-widest uppercase text-center px-4">
          © 2024 VELA SPACE. ALL RIGHTS RESERVED.
        </span>
</div>
</footer>



    </>
  );
}
