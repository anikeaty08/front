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
            
            // 1. Reveal Animation Observer
            const revealElements = document.querySelectorAll('.reveal-up');
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
            
            revealElements.forEach(el => revealObserver.observe(el));

            // 2. High-Fidelity 3D Hover on Data Cards
            const dataCards = document.querySelectorAll('.data-card');
            dataCards.forEach(card => {
                card.addEventListener('mousemove', e => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    // Aggressive, tight rotation
                    const rotateX = ((y - centerY) / centerY) * -4; 
                    const rotateY = ((x - centerX) / centerX) * 4;
                    
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-0.5rem) scale(1.02)`;
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)`;
                });
            });

            // 3. WebGL Hero Background (Three.js Ripple/Point Network)
            const initWebGL = () => {
                const canvas = document.getElementById('webgl-canvas');
                if (!canvas || typeof THREE === 'undefined') return;
                
                const scene = new THREE.Scene();
                // We use a dark fog to blend points into the background smoothly
                scene.fog = new THREE.FogExp2(0x060606, 0.15);

                const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
                const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

                // Create Particle Field
                const particles = new THREE.BufferGeometry();
                const particleCount = window.innerWidth > 768 ? 2000 : 800;
                const posArray = new Float32Array(particleCount * 3);
                
                // Create points in a 3D grid/cloud
                for(let i = 0; i < particleCount * 3; i+=3) {
                    posArray[i] = (Math.random() - 0.5) * 20;   // x
                    posArray[i+1] = (Math.random() - 0.5) * 20; // y
                    posArray[i+2] = (Math.random() - 0.5) * 10; // z
                }
                
                particles.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
                const material = new THREE.PointsMaterial({
                    size: 0.03,
                    color: 0xFF3300,
                    transparent: true,
                    opacity: 0.6,
                    blending: THREE.AdditiveBlending
                });
                
                const particleMesh = new THREE.Points(particles, material);
                scene.add(particleMesh);
                
                camera.position.z = 4;
                camera.position.y = 1; // Slightly angled down

                // Mouse Interaction Variables
                let mouseX = 0;
                let mouseY = 0;
                let targetX = 0;
                let targetY = 0;

                const halfX = window.innerWidth / 2;
                const halfY = window.innerHeight / 2;

                document.addEventListener('mousemove', (event) => {
                    mouseX = (event.clientX - halfX) * 0.001;
                    mouseY = (event.clientY - halfY) * 0.001;
                });

                // Animation Loop with ripple physics
                let clock = new THREE.Clock();
                const animate = () => {
                    requestAnimationFrame(animate);
                    const elapsedTime = clock.getElapsedTime();

                    targetX = mouseX * 0.5;
                    targetY = mouseY * 0.5;

                    // Smooth interpolation for rotation based on mouse
                    particleMesh.rotation.y += 0.05 * (targetX - particleMesh.rotation.y);
                    particleMesh.rotation.x += 0.05 * (targetY - particleMesh.rotation.x);
                    
                    // Continual slow rotation
                    particleMesh.rotation.y += 0.001;
                    
                    // Wave distortion on vertices
                    const positions = particleMesh.geometry.attributes.position.array;
                    for(let i = 0; i < particleCount; i++) {
                        const i3 = i * 3;
                        const x = positions[i3];
                        const z = positions[i3+2];
                        // Apply a gentle sine wave shifting based on time & x/z pos
                        positions[i3+1] += Math.sin(elapsedTime + x + z) * 0.002;
                    }
                    particleMesh.geometry.attributes.position.needsUpdate = true;

                    renderer.render(scene, camera);
                };
                
                animate();
                
                // Handle Resize
                window.addEventListener('resize', () => {
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(window.innerWidth, window.innerHeight);
                });
            };

            // Init WebGL if library loaded
            if (typeof THREE !== 'undefined') {
                initWebGL();
            } else {
                window.onload = initWebGL;
            }

            // 4. Mobile Menu
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            let menuOpen = false;

            mobileBtn.addEventListener('click', () => {
                menuOpen = !menuOpen;
                if(menuOpen) {
                    mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                    mobileBtn.innerHTML = '<iconify-icon icon="solar:close-linear" width="1.5rem" height="1.5rem"></iconify-icon>';
                    document.body.style.overflow = 'hidden';
                } else {
                    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                    mobileBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="1.5rem" height="1.5rem"></iconify-icon>';
                    document.body.style.overflow = '';
                }
            });

            document.querySelectorAll('.mobile-link').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                    mobileBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="1.5rem" height="1.5rem"></iconify-icon>';
                    document.body.style.overflow = '';
                    menuOpen = false;
                });
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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#060606]/80 border-b border-white/5 transition-all duration-300">
<div className="px-clamp(1.5rem,5vw,6rem) max-w-[120rem] mx-auto h-[5rem] flex items-center justify-between">
<a className="nav-link-group flex items-center gap-3 relative z-50 group" href="#">

<svg className="w-[1.875rem] h-[1.875rem] logo-mark text-white" viewbox="0 0 100 100">
<path d="M20 80 L50 20 L80 80" fill="none" stroke="currentColor" strokeLinejoin="miter" strokeWidth="8"></path>
<path d="M35 50 L65 50" fill="none" stroke="#FF3300" strokeWidth="8"></path>
<circle className="logo-dot" cx="50" cy="20" fill="#FF3300" r="5"></circle>
</svg>
<span className="font-display font-semibold tracking-tight text-[1.25rem] text-[#f0f0ee]">VELOX</span>
</a>
<div className="hidden md:flex items-center gap-10 font-mono-custom text-micro text-[#888]">
<a className="text-link-hover hover:text-white transition-colors" href="#work">Case Studies</a>
<a className="text-link-hover hover:text-white transition-colors" href="#services">Growth Levers</a>
<a className="text-link-hover hover:text-white transition-colors" href="#metrics">Capital Raised</a>
<a className="text-link-hover hover:text-white transition-colors" href="#pricing">Engagement</a>
</div>
<div className="hidden md:flex items-center gap-6 z-50">
<div className="flex items-center gap-2 font-mono-custom text-[0.6875rem] text-[#555] border-r border-white/10 pr-6">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> ACCELERATING
                </div>
<a className="btn-cyber w-[11rem] h-[2.75rem]" href="#contact">
<div className="glitch-bar"></div>
<span className="btn-cyber-content text-micro">INITIATE DEPLOY <iconify-icon icon="solar:round-alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon></span>
</a>
</div>
<button className="md:hidden text-white z-50" id="mobile-menu-btn">
<iconify-icon height="1.5rem" icon="solar:hamburger-menu-linear" width="1.5rem"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-[#060606]/95 backdrop-blur-md z-40 flex flex-col justify-center items-center opacity-0 pointer-events-none transition-opacity duration-300" id="mobile-menu">
<div className="flex flex-col items-center gap-8 font-display text-[2rem]">
<a className="mobile-link text-[#888] hover:text-white" href="#work">Case Studies</a>
<a className="mobile-link text-[#888] hover:text-white" href="#services">Growth Levers</a>
<a className="mobile-link text-[#888] hover:text-white" href="#metrics">Capital Raised</a>
<a className="mobile-link text-[#888] hover:text-white" href="#pricing">Engagement</a>
<a className="mt-4 text-[#FF3300]" href="#contact">Initiate Deploy</a>
</div>
</div>

<section className="relative min-h-[100svh] flex items-center pt-[5rem] overflow-hidden section-pad border-b border-white/5">

<canvas id="webgl-canvas"></canvas>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[clamp(15rem,30vw,40rem)] font-bold text-outline select-none pointer-events-none z-0 tracking-tighter whitespace-nowrap opacity-[0.15]">VELOX</div>
<div className="container-custom relative z-10 w-full flex flex-col pt-8 lg:pt-0">

<div className="w-full flex justify-between items-end mb-8 reveal-up relative z-20">
<div className="sys-badge">SYS_STATUS: OPTIMAL</div>
<div className="hidden md:flex flex-col text-right font-mono-custom text-[0.625rem] text-[#666] leading-relaxed">
<span>LTV/CAC: [ VERIFIED ]</span>
<span>CONVERSION VELOCITY: MAX</span>
<span>TARGET: SERIES A+</span>
</div>
</div>
<div className="w-full flex justify-start reveal-up relative z-20" style={{transitionDelay: '100ms'}}>
<h1 className="text-hero text-[#f0f0ee] max-w-[85rem] relative drop-shadow-2xl">
                    WE ENGINEER TRUST.<br/>YOU <span className="text-[#FF3300] italic pr-2">CLOSE</span> THE ROUND.
                </h1>
</div>
<div className="w-full grid lg:grid-cols-[1.5fr_1fr] gap-16 mt-12 items-start relative z-10">

<div className="flex flex-col gap-8 reveal-up" style={{transitionDelay: '200ms'}}>
<p className="text-[1.25rem] text-[#aaa] max-w-[35rem] font-medium leading-relaxed">
                        High-fidelity brand identities, immersive web platforms, and data-driven web architectures deployed in 15 days. Stop pitching features. Start selling inevitability.
                    </p>
<div className="flex flex-wrap items-center gap-6 mt-4">
<a className="btn-cyber w-[14rem] h-[3.5rem]" href="#contact">
<div className="glitch-bar"></div>
<span className="btn-cyber-content text-small">ALLOCATE CAPITAL <iconify-icon icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon></span>
</a>
<a className="font-mono-custom text-micro text-[#888] text-link-hover hover:text-white flex items-center gap-2" href="#work">
                            VIEW EVIDENCE <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>

<div className="hidden lg:flex justify-end reveal-up" style={{transitionDelay: '300ms'}}>
<div className="data-card p-6 w-full max-w-[28rem]">
<div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
<span className="font-mono-custom text-[0.625rem] text-[#888] tracking-widest">LIVE FUNDING METRICS</span>
<iconify-icon className="text-[#FF3300]" icon="solar:chart-line-linear"></iconify-icon>
</div>
<div className="space-y-4 font-mono-custom text-micro">
<div className="flex justify-between items-end">
<span className="text-[#666]">Avg. Raise Post-Launch</span>
<span className="text-[1.25rem] text-white font-medium tracking-tight">$8.2M</span>
</div>
<div className="w-full h-1 bg-white/5 overflow-hidden">
<div className="h-full bg-[#FF3300] w-[78%]"></div>
</div>
<div className="flex justify-between items-end pt-2">
<span className="text-[#666]">Time to Deployment</span>
<span className="text-[1.25rem] text-white font-medium tracking-tight">15 DAYS</span>
</div>
<div className="w-full h-1 bg-white/5 overflow-hidden">
<div className="h-full bg-white w-[100%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0a0a0a] border-b border-white/5 relative z-20">
<div className="flex flex-col md:flex-row items-center border-y border-white/5">
<div className="md:w-1/4 p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/5 bg-[#060606] flex items-center justify-center md:justify-start">
<span className="font-mono-custom text-micro text-[#666]">DEPLOYED ACROSS PORTFOLIOS:</span>
</div>
<div className="md:w-3/4 overflow-hidden relative py-6">

<div className="absolute left-0 top-0 bottom-0 w-[4rem] bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-[4rem] bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>
<div className="flex w-max animate-[marquee_40s_linear_infinite]">
<div className="flex gap-16 items-center font-display font-semibold text-[1.5rem] tracking-widest text-[#444] px-8">
<span className="hover:text-white transition-colors cursor-default">TENSOR</span>
<span className="text-[#FF3300] opacity-50 text-[0.5rem]">✦</span>
<span className="hover:text-white transition-colors cursor-default">SYNAPSE AI</span>
<span className="text-[#FF3300] opacity-50 text-[0.5rem]">✦</span>
<span className="hover:text-white transition-colors cursor-default">LUMINA</span>
<span className="text-[#FF3300] opacity-50 text-[0.5rem]">✦</span>
<span className="hover:text-white transition-colors cursor-default">OMNICORE</span>
<span className="text-[#FF3300] opacity-50 text-[0.5rem]">✦</span>
<span className="hover:text-white transition-colors cursor-default">VANGUARD</span>
<span className="text-[#FF3300] opacity-50 text-[0.5rem]">✦</span>
<span className="hover:text-white transition-colors cursor-default">KINETICA</span>
</div>
<div className="flex gap-16 items-center font-display font-semibold text-[1.5rem] tracking-widest text-[#444] px-8">
<span className="hover:text-white transition-colors cursor-default">TENSOR</span>
<span className="text-[#FF3300] opacity-50 text-[0.5rem]">✦</span>
<span className="hover:text-white transition-colors cursor-default">SYNAPSE AI</span>
<span className="text-[#FF3300] opacity-50 text-[0.5rem]">✦</span>
<span className="hover:text-white transition-colors cursor-default">LUMINA</span>
<span className="text-[#FF3300] opacity-50 text-[0.5rem]">✦</span>
<span className="hover:text-white transition-colors cursor-default">OMNICORE</span>
<span className="text-[#FF3300] opacity-50 text-[0.5rem]">✦</span>
<span className="hover:text-white transition-colors cursor-default">VANGUARD</span>
<span className="text-[#FF3300] opacity-50 text-[0.5rem]">✦</span>
<span className="hover:text-white transition-colors cursor-default">KINETICA</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#060606] section-pad relative" id="work">
<div className="container-custom reveal-up z-10 relative">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div>
<div className="mb-6 font-mono-custom text-micro text-[#FF3300] flex items-center gap-2"><iconify-icon icon="solar:target-linear"></iconify-icon> EVIDENCE OF UNFAIR ADVANTAGES</div>
<h2 className="text-h2 max-w-[50rem]">
                        PLATFORMS THAT COMMAND <span className="text-[#FF3300]">VALUATIONS</span>.
                    </h2>
</div>
<div className="font-mono-custom text-[0.75rem] text-[#666] border border-white/10 p-4 max-w-[20rem]">
<span className="block text-white mb-1">DATA INTEGRITY:</span>
                    All visual outputs represent live, deployed architectures driving measurable Series A/B funding.
                </div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<a className="data-card img-scanner group col-span-1 lg:col-span-2 aspect-[16/9] lg:aspect-[21/9] flex flex-col justify-end p-8 lg:p-12" href="#">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-80 transition-all duration-[1.5s] ease-out group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/60 to-transparent"></div>

<div className="absolute top-8 right-8 bg-black/60 backdrop-blur-md border border-white/10 p-4 hidden md:flex flex-col gap-2 font-mono-custom text-[0.625rem] transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
<div className="flex justify-between gap-8"><span className="text-[#aaa]">CONV_RATE</span><span className="text-green-400">+14.2%</span></div>
<div className="flex justify-between gap-8"><span className="text-[#aaa]">USER_RET</span><span className="text-green-400">92.8%</span></div>
</div>
<div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-6">
<div>
<div className="flex items-center gap-3 mb-4 font-mono-custom text-micro text-[#aaa]">
<span className="bg-white/10 px-2 py-1">2024</span>
<span className="text-[#FF3300]">///</span>
<span>FINANCIAL INFRASTRUCTURE</span>
</div>
<h3 className="text-h2 text-white group-hover:text-[#FF3300] transition-colors">TENSOR PAY</h3>
</div>
<div className="w-12 h-12 border border-white/20 flex items-center justify-center rounded-full group-hover:border-[#FF3300] group-hover:bg-[#FF3300] transition-all duration-300">
<iconify-icon className="text-white text-[1.5rem] group-hover:text-black" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</a>

<a className="data-card img-scanner group aspect-[4/5] flex flex-col justify-end p-8" href="#">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-80 transition-all duration-[1.5s] ease-out group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#060606] to-transparent"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-3 font-mono-custom text-micro text-[#aaa]">
<span className="bg-white/10 px-2 py-1">2023</span>
<span className="text-[#FF3300]">///</span>
<span>AI LOGISTICS</span>
</div>
<h3 className="text-h3 text-white">SYNAPSE AI</h3>
</div>
</a>

<a className="data-card img-scanner group aspect-[4/5] flex flex-col justify-end p-8" href="#">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&amp;w=1964&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-80 transition-all duration-[1.5s] ease-out group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#060606] to-transparent"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-3 font-mono-custom text-micro text-[#aaa]">
<span className="bg-white/10 px-2 py-1">2024</span>
<span className="text-[#FF3300]">///</span>
<span>WEB3 PROTOCOL</span>
</div>
<h3 className="text-h3 text-white">LUMINA NET</h3>
</div>
</a>
</div>
</div>
</section>

<section className="bg-[#0a0a0a] section-pad border-t border-white/5 relative" id="services">
<div className="container-custom reveal-up">
<div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
<div className="lg:w-1/2">
<div className="mb-6 font-mono-custom text-micro text-[#FF3300] flex items-center gap-2"><iconify-icon icon="solar:cpu-linear"></iconify-icon> GROWTH LEVERS</div>
<h2 className="text-h2">
                        WE BUILD <span className="text-[#FF3300]">SYSTEMS</span>, NOT JUST SITES.
                    </h2>
</div>
<div className="lg:w-1/3 text-[1.125rem] text-[#888] font-medium leading-relaxed">
                    Aesthetics buy attention. Architecture buys conviction. We construct end-to-end digital authority engineered specifically to pass technical due diligence and impress venture capital.
                </div>
</div>

<div className="flex flex-col border-t border-white/10">

<div className="group relative flex flex-col lg:flex-row border-b border-white/10 py-12 lg:items-center gap-8 cursor-pointer overflow-hidden transition-colors hover:bg-white/[0.02]">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF3300] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
<div className="lg:w-1/4 font-mono-custom text-micro text-[#666] group-hover:text-[#FF3300] transition-colors flex flex-col gap-2">
<span>MODULE_01</span>
<span className="px-2 py-1 border border-white/10 w-max group-hover:border-[#FF3300]/30 bg-[#060606]">EST. 10 DAYS</span>
</div>
<div className="lg:w-1/2">
<h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-display font-semibold text-white mb-2 group-hover:translate-x-4 transition-transform duration-500">IDENTITY &amp; POSITIONING</h3>
<p className="text-[#888] text-small max-w-[30rem] group-hover:translate-x-4 transition-transform duration-500 delay-75">We strip away fluff and engineer a brand syntax that speaks directly to early adopters and institutional investors.</p>
</div>
<div className="lg:w-1/4 flex lg:justify-end opacity-50 group-hover:opacity-100 transition-opacity duration-300">
<div className="grid grid-cols-2 gap-x-6 gap-y-2 font-mono-custom text-[0.6875rem] text-[#aaa]">
<span className="flex items-center gap-2"><iconify-icon className="text-[#FF3300]" icon="solar:check-circle-linear"></iconify-icon> Visual DNA</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#FF3300]" icon="solar:check-circle-linear"></iconify-icon> Copywriting</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#FF3300]" icon="solar:check-circle-linear"></iconify-icon> Investor Decks</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#FF3300]" icon="solar:check-circle-linear"></iconify-icon> Typography</span>
</div>
</div>
</div>

<div className="group relative flex flex-col lg:flex-row border-b border-white/10 py-12 lg:items-center gap-8 cursor-pointer overflow-hidden transition-colors hover:bg-white/[0.02]">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF3300] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
<div className="lg:w-1/4 font-mono-custom text-micro text-[#666] group-hover:text-[#FF3300] transition-colors flex flex-col gap-2">
<span>MODULE_02</span>
<span className="px-2 py-1 border border-white/10 w-max group-hover:border-[#FF3300]/30 bg-[#060606]">EST. 15 DAYS</span>
</div>
<div className="lg:w-1/2">
<h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-display font-semibold text-white mb-2 group-hover:translate-x-4 transition-transform duration-500">WEB ARCHITECTURE</h3>
<p className="text-[#888] text-small max-w-[30rem] group-hover:translate-x-4 transition-transform duration-500 delay-75">High-conversion landing pages and interactive product tours built to channel traffic directly into your sales pipeline.</p>
</div>
<div className="lg:w-1/4 flex lg:justify-end opacity-50 group-hover:opacity-100 transition-opacity duration-300">
<div className="grid grid-cols-2 gap-x-6 gap-y-2 font-mono-custom text-[0.6875rem] text-[#aaa]">
<span className="flex items-center gap-2"><iconify-icon className="text-[#FF3300]" icon="solar:check-circle-linear"></iconify-icon> UX/UI Logic</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#FF3300]" icon="solar:check-circle-linear"></iconify-icon> Micro-interactions</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#FF3300]" icon="solar:check-circle-linear"></iconify-icon> 3D/WebGL</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#FF3300]" icon="solar:check-circle-linear"></iconify-icon> Wireframing</span>
</div>
</div>
</div>

<div className="group relative flex flex-col lg:flex-row border-b border-white/10 py-12 lg:items-center gap-8 cursor-pointer overflow-hidden transition-colors hover:bg-white/[0.02]">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF3300] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
<div className="lg:w-1/4 font-mono-custom text-micro text-[#666] group-hover:text-[#FF3300] transition-colors flex flex-col gap-2">
<span>MODULE_03</span>
<span className="px-2 py-1 border border-white/10 w-max group-hover:border-[#FF3300]/30 bg-[#060606]">EST. 5 DAYS</span>
</div>
<div className="lg:w-1/2">
<h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-display font-semibold text-white mb-2 group-hover:translate-x-4 transition-transform duration-500">FRONTEND DEPLOYMENT</h3>
<p className="text-[#888] text-small max-w-[30rem] group-hover:translate-x-4 transition-transform duration-500 delay-75">Flawless, zero-latency execution. Fully responsive, CMS-integrated, and optimized for global edge delivery.</p>
</div>
<div className="lg:w-1/4 flex lg:justify-end opacity-50 group-hover:opacity-100 transition-opacity duration-300">
<div className="grid grid-cols-2 gap-x-6 gap-y-2 font-mono-custom text-[0.6875rem] text-[#aaa]">
<span className="flex items-center gap-2"><iconify-icon className="text-[#FF3300]" icon="solar:check-circle-linear"></iconify-icon> Framer Dev</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#FF3300]" icon="solar:check-circle-linear"></iconify-icon> Core Web Vitals</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#FF3300]" icon="solar:check-circle-linear"></iconify-icon> Custom Code</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#FF3300]" icon="solar:check-circle-linear"></iconify-icon> CMS Scale</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FF3300] text-[#060606] py-20 relative overflow-hidden" id="metrics">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[clamp(15rem,30vw,40rem)] font-bold opacity-10 pointer-events-none select-none tracking-tighter w-full text-center leading-none">
            DATA
        </div>
<div className="container-custom reveal-up relative z-10">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center md:text-left">
<div className="flex flex-col gap-2 border-l-4 border-[#060606] pl-6">
<span className="font-display font-bold text-[clamp(2.5rem,4vw,3.5rem)] leading-none tracking-tight">43</span>
<span className="font-mono-custom text-[0.875rem] font-semibold tracking-widest uppercase">Rounds Closed</span>
</div>
<div className="flex flex-col gap-2 border-l-4 border-[#060606] pl-6">
<span className="font-display font-bold text-[clamp(2.5rem,4vw,3.5rem)] leading-none tracking-tight">$280M</span>
<span className="font-mono-custom text-[0.875rem] font-semibold tracking-widest uppercase">Capital Raised</span>
</div>
<div className="flex flex-col gap-2 border-l-4 border-[#060606] pl-6">
<span className="font-display font-bold text-[clamp(2.5rem,4vw,3.5rem)] leading-none tracking-tight">15</span>
<span className="font-mono-custom text-[0.875rem] font-semibold tracking-widest uppercase">Days to Deploy</span>
</div>
<div className="flex flex-col gap-2 border-l-4 border-[#060606] pl-6">
<span className="font-display font-bold text-[clamp(2.5rem,4vw,3.5rem)] leading-none tracking-tight">+310%</span>
<span className="font-mono-custom text-[0.875rem] font-semibold tracking-widest uppercase">Conv. Increase</span>
</div>
</div>
</div>
</section>

<section className="bg-[#060606] section-pad relative">
<div className="container-custom reveal-up">
<div className="mb-6 font-mono-custom text-micro text-[#FF3300] flex items-center gap-2"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> VELOCITY</div>
<h2 className="text-h2 mb-16 max-w-[50rem]">
                CONCEPT TO MARKET DOMINANCE IN <span className="text-[#FF3300]">15 DAYS</span>.
            </h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="data-card p-8 flex flex-col justify-between min-h-[16rem]">
<div className="flex justify-between items-start">
<span className="font-mono-custom text-[3rem] font-bold text-white/20 leading-none">01</span>
<span className="sys-badge bg-transparent">DAYS 1-3</span>
</div>
<div>
<h4 className="font-display text-[1.5rem] font-semibold text-white mb-2">STRATEGY &amp; AUDIT</h4>
<p className="text-small text-[#888]">Tearing down your competitors and mapping an undeniable value proposition.</p>
</div>
</div>
<div className="data-card p-8 flex flex-col justify-between min-h-[16rem] border-[#FF3300]/30 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#FF3300]/10 to-transparent"></div>
<div className="flex justify-between items-start relative z-10">
<span className="font-mono-custom text-[3rem] font-bold text-[#FF3300] leading-none drop-shadow-lg">02</span>
<span className="sys-badge">DAYS 4-10</span>
</div>
<div className="relative z-10">
<h4 className="font-display text-[1.5rem] font-semibold text-white mb-2">DESIGN ARCHITECTURE</h4>
<p className="text-small text-[#ccc]">Constructing the visual authority and UX logic that proves you are the market leader.</p>
</div>
</div>
<div className="data-card p-8 flex flex-col justify-between min-h-[16rem]">
<div className="flex justify-between items-start">
<span className="font-mono-custom text-[3rem] font-bold text-white/20 leading-none">03</span>
<span className="sys-badge bg-transparent">DAYS 11-15</span>
</div>
<div>
<h4 className="font-display text-[1.5rem] font-semibold text-white mb-2">DEPLOY &amp; SCALE</h4>
<p className="text-small text-[#888]">Code compiled, animations smoothed, domains linked. You go live and start closing.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0a0a0a] border-y border-white/5 py-24 relative overflow-hidden">
<div className="container-custom reveal-up">
<h2 className="font-display text-[clamp(2rem,3vw,3rem)] font-bold text-center mb-16 text-white max-w-[60rem] mx-auto">
                FOUNDERS WHO STOPPED PITCHING AND STARTED <span className="text-[#FF3300]">CLOSING</span>.
            </h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="p-10 border border-white/10 bg-[#060606] relative group hover:border-[#FF3300]/50 transition-colors">
<iconify-icon className="absolute top-10 right-10 text-[3rem] text-white/5 group-hover:text-[#FF3300]/20 transition-colors" icon="solar:quote-left-linear"></iconify-icon>
<div className="flex items-center gap-2 mb-8 font-mono-custom text-micro text-[#FF3300]">
<iconify-icon icon="solar:verified-check-linear"></iconify-icon> SERIES A SECURED: $12.5M
                    </div>
<p className="text-[1.125rem] text-[#ccc] font-medium leading-relaxed mb-10 max-w-[90%]">
                        "The platform Velox built didn't just look good—it completely reframed how VCs perceived our technical capabilities. It was the lever that allowed us to increase our valuation by 40%."
                    </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-display font-semibold text-white">MR</div>
<div className="font-mono-custom text-small">
<span className="text-white block">Marcus R.</span>
<span className="text-[#666] text-[0.75rem]">CEO, TENSOR INFRA</span>
</div>
</div>
</div>
<div className="p-10 border border-white/10 bg-[#060606] relative group hover:border-[#FF3300]/50 transition-colors">
<iconify-icon className="absolute top-10 right-10 text-[3rem] text-white/5 group-hover:text-[#FF3300]/20 transition-colors" icon="solar:quote-left-linear"></iconify-icon>
<div className="flex items-center gap-2 mb-8 font-mono-custom text-micro text-[#FF3300]">
<iconify-icon icon="solar:verified-check-linear"></iconify-icon> SEED SECURED: $3.2M
                    </div>
<p className="text-[1.125rem] text-[#ccc] font-medium leading-relaxed mb-10 max-w-[90%]">
                        "15 days. That's all it took. The sheer aggressive speed combined with pixel-perfect execution is unmatched. We sent the link to our lead investor and the term sheet arrived 48 hours later."
                    </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-display font-semibold text-white">EL</div>
<div className="font-mono-custom text-small">
<span className="text-white block">Elena L.</span>
<span className="text-[#666] text-[0.75rem]">FOUNDER, SYNAPSE</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#060606] section-pad relative" id="pricing">
<div className="container-custom reveal-up">
<div className="text-center mb-20 flex flex-col items-center">
<div className="mb-6 font-mono-custom text-micro text-[#FF3300] flex items-center gap-2"><iconify-icon icon="solar:wallet-money-linear"></iconify-icon> ENGAGEMENT</div>
<h2 className="text-h2 max-w-[40rem]">
                    CAPITAL ALLOCATION FOR MAXIMUM <span className="text-[#FF3300]">LEVERAGE</span>.
                </h2>
</div>
<div className="grid lg:grid-cols-2 gap-8 max-w-[60rem] mx-auto">

<div className="data-card p-10 flex flex-col group border-white/10">
<div className="font-mono-custom text-micro text-[#888] mb-4 tracking-widest">TIER_01</div>
<h3 className="font-display text-[2rem] font-semibold text-white mb-2">SEED PROTOCOL</h3>
<p className="text-small text-[#666] mb-8">The undeniable baseline required to close your first institutional money.</p>
<div className="font-mono-custom text-[2.5rem] text-white mb-8 border-b border-white/10 pb-8 tracking-tighter">€6,500</div>
<ul className="space-y-4 mb-12 text-small text-[#aaa] flex-grow font-mono-custom text-[0.8125rem]">
<li className="flex items-start gap-3"><iconify-icon className="text-[#FF3300] text-[1.25rem]" icon="solar:alt-arrow-right-linear"></iconify-icon> Core Brand DNA Matrix</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#FF3300] text-[1.25rem]" icon="solar:alt-arrow-right-linear"></iconify-icon> Single Page Immersive UI</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#FF3300] text-[1.25rem]" icon="solar:alt-arrow-right-linear"></iconify-icon> Copywriting for Conversion</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#FF3300] text-[1.25rem]" icon="solar:alt-arrow-right-linear"></iconify-icon> 10-Day Deployment Target</li>
</ul>
<a className="btn-cyber w-full h-[3.5rem]" href="#contact">
<div className="glitch-bar"></div>
<span className="btn-cyber-content text-small">AUTHORIZE SEED <iconify-icon icon="solar:shield-check-linear"></iconify-icon></span>
</a>
</div>

<div className="data-card p-10 flex flex-col group border-[#FF3300]/50 relative shadow-[0_0_4rem_rgba(255,51,0,0.1)] hover:shadow-[0_0_6rem_rgba(255,51,0,0.2)]">
<div className="absolute top-0 right-0 bg-[#FF3300] text-[#060606] font-mono-custom text-[0.625rem] font-bold px-4 py-2 tracking-widest">OPTIMAL ROI</div>
<div className="font-mono-custom text-micro text-[#FF3300] mb-4 tracking-widest">TIER_02</div>
<h3 className="font-display text-[2rem] font-semibold text-white mb-2">SERIES A DOMINANCE</h3>
<p className="text-small text-[#888] mb-8">Comprehensive digital authority engineered to sustain high-velocity scale.</p>
<div className="font-mono-custom text-[2.5rem] text-white mb-8 border-b border-[#FF3300]/20 pb-8 tracking-tighter">€12,500</div>
<ul className="space-y-4 mb-12 text-small text-[#eee] flex-grow font-mono-custom text-[0.8125rem]">
<li className="flex items-start gap-3"><iconify-icon className="text-[#FF3300] text-[1.25rem]" icon="solar:alt-arrow-right-linear"></iconify-icon> Comprehensive Identity System</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#FF3300] text-[1.25rem]" icon="solar:alt-arrow-right-linear"></iconify-icon> Up to 8 Complex Pages</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#FF3300] text-[1.25rem]" icon="solar:alt-arrow-right-linear"></iconify-icon> WebGL &amp; Advanced Motion Logic</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#FF3300] text-[1.25rem]" icon="solar:alt-arrow-right-linear"></iconify-icon> Modular CMS Architecture</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#FF3300] text-[1.25rem]" icon="solar:alt-arrow-right-linear"></iconify-icon> 15-Day Guaranteed Deployment</li>
</ul>
<a className="btn-cyber w-full h-[3.5rem]" href="#contact">
<div className="glitch-bar"></div>
<span className="btn-cyber-content text-small text-[#FF3300] group-hover:text-[#060606]">AUTHORIZE SERIES A <iconify-icon icon="solar:bolt-circle-linear"></iconify-icon></span>
</a>
</div>
</div>
</div>
</section>

<section className="bg-[#0a0a0a] section-pad border-t border-white/5">
<div className="container-custom max-w-[60rem] reveal-up">
<div className="text-center mb-16 flex flex-col items-center">
<div className="mb-6 font-mono-custom text-micro text-[#FF3300] flex items-center gap-2"><iconify-icon icon="solar:shield-warning-linear"></iconify-icon> INTELLIGENCE</div>
<h2 className="text-h2">OBJECTIONS, <span className="text-[#FF3300]">HANDLED</span>.</h2>
</div>
<div className="flex flex-col border-t-2 border-white/10">

<div className="border-b border-white/5 py-8 group cursor-pointer" onclick="this.classList.toggle('active'); const p = this.querySelector('.faq-content'); p.style.maxHeight = p.style.maxHeight ? null : p.scrollHeight + 'px';">
<div className="flex justify-between items-center group-hover:text-[#FF3300] transition-colors">
<h3 className="text-[1.25rem] font-display font-semibold text-[#eee]">Is the 15-day timeline absolute?</h3>
<iconify-icon className="text-[1.5rem] text-[#666] group-hover:text-[#FF3300] transition-transform duration-300 group-[.active]:rotate-45" icon="solar:add-circle-linear"></iconify-icon>
</div>
<div className="faq-content overflow-hidden max-h-0 transition-all duration-500 ease-in-out">
<p className="text-[#aaa] text-small pt-4 leading-relaxed font-mono-custom text-[0.875rem]">Yes. We do not tolerate scope creep or endless revision loops. We operate as an elite strike team. If you provide async feedback within 24 hours, the product deploys on day 15. The math does not lie.</p>
</div>
</div>

<div className="border-b border-white/5 py-8 group cursor-pointer" onclick="this.classList.toggle('active'); const p = this.querySelector('.faq-content'); p.style.maxHeight = p.style.maxHeight ? null : p.scrollHeight + 'px';">
<div className="flex justify-between items-center group-hover:text-[#FF3300] transition-colors">
<h3 className="text-[1.25rem] font-display font-semibold text-[#eee]">We need a custom React web-app. Can you do it?</h3>
<iconify-icon className="text-[1.5rem] text-[#666] group-hover:text-[#FF3300] transition-transform duration-300 group-[.active]:rotate-45" icon="solar:add-circle-linear"></iconify-icon>
</div>
<div className="faq-content overflow-hidden max-h-0 transition-all duration-500 ease-in-out">
<p className="text-[#aaa] text-small pt-4 leading-relaxed font-mono-custom text-[0.875rem]">No. We engineer marketing and positioning architectures using Framer to ensure blazing fast deployment and zero marketing-dependency on your engineering team. We build the engine that sells the app, not the app itself.</p>
</div>
</div>

<div className="border-b border-white/5 py-8 group cursor-pointer" onclick="this.classList.toggle('active'); const p = this.querySelector('.faq-content'); p.style.maxHeight = p.style.maxHeight ? null : p.scrollHeight + 'px';">
<div className="flex justify-between items-center group-hover:text-[#FF3300] transition-colors">
<h3 className="text-[1.25rem] font-display font-semibold text-[#eee]">Why are you more expensive than typical freelancers?</h3>
<iconify-icon className="text-[1.5rem] text-[#666] group-hover:text-[#FF3300] transition-transform duration-300 group-[.active]:rotate-45" icon="solar:add-circle-linear"></iconify-icon>
</div>
<div className="faq-content overflow-hidden max-h-0 transition-all duration-500 ease-in-out">
<p className="text-[#aaa] text-small pt-4 leading-relaxed font-mono-custom text-[0.875rem]">You are not paying for a website. You are paying for a strategic lever that increases your valuation and reduces due diligence friction. If our architecture helps you raise $2M at a better valuation, the ROI is exponential.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FF3300] text-[#060606] py-32 relative overflow-hidden flex items-center justify-center min-h-[80svh]" id="contact">

<div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"></div>
<div className="container-custom flex flex-col items-center text-center relative z-20 reveal-up">
<div className="sys-badge bg-[#060606] text-[#FF3300] border-[#060606] mb-12">SYSTEM READY FOR DEPLOYMENT</div>
<h2 className="text-[clamp(3.5rem,6vw,6rem)] font-display font-bold leading-[1] tracking-tighter max-w-[65rem] mb-12 uppercase text-[#060606]">
                THE NEXT ROUND STARTS <span className="text-white">HERE</span>.
            </h2>
<p className="text-[1.25rem] font-mono-custom font-medium max-w-[30rem] mb-12 opacity-80">Stop bleeding leads due to low-trust architecture. Secure your spot in the pipeline.</p>
<a className="btn-cyber w-[20rem] h-[4.5rem] bg-[#060606] border-none group" href="#">
<div className="glitch-bar"></div>
<span className="btn-cyber-content text-[1.125rem] text-white group-hover:text-[#FF3300]">SUBMIT PROJECT BRIEF <iconify-icon icon="solar:arrow-right-linear" width="1.5rem"></iconify-icon></span>
</a>
<div className="mt-12 flex flex-col items-center gap-2 font-mono-custom text-[0.75rem] font-bold">
<span>[ CURRENT PIPELINE STATUS: 2 SLOTS REMAINING THIS MONTH ]</span>
<span className="opacity-70 font-normal">SLA: Response guaranteed within 4 hours.</span>
</div>
</div>
</section>

<footer className="bg-[#060606] pt-24 pb-8 border-t border-white/5 relative z-20">
<div className="container-custom">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20 border-b border-white/5 pb-16">

<div className="flex flex-col items-start gap-6 md:w-1/3">
<a className="nav-link-group flex items-center gap-3 group mb-4" href="#">
<svg className="w-8 h-8 logo-mark text-white" viewbox="0 0 100 100">
<path d="M20 80 L50 20 L80 80" fill="none" stroke="currentColor" strokeWidth="8"></path>
<path d="M35 50 L65 50" fill="none" stroke="#FF3300" strokeWidth="8"></path>
<circle className="logo-dot" cx="50" cy="20" fill="#FF3300" r="5"></circle>
</svg>
<span className="font-display font-semibold tracking-tight text-[1.5rem] text-[#f0f0ee]">VELOX</span>
</a>
<p className="font-mono-custom text-micro text-[#666] leading-relaxed">WE ENGINEER TRUST.<br/>YOU CLOSE THE ROUND.</p>
</div>

<div className="flex flex-wrap gap-16 md:justify-end md:w-2/3 font-mono-custom text-[0.8125rem]">
<div className="flex flex-col gap-4">
<span className="text-[#444] tracking-widest uppercase mb-2">Navigation</span>
<a className="text-[#aaa] text-link-hover hover:text-white transition-colors" href="#work">Evidence</a>
<a className="text-[#aaa] text-link-hover hover:text-white transition-colors" href="#services">Levers</a>
<a className="text-[#aaa] text-link-hover hover:text-white transition-colors" href="#metrics">Data</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-[#444] tracking-widest uppercase mb-2">Legal</span>
<a className="text-[#aaa] text-link-hover hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="text-[#aaa] text-link-hover hover:text-white transition-colors" href="#">Privacy Policy</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-[#444] tracking-widest uppercase mb-2">Comms</span>
<a className="text-[#FF3300] text-link-hover hover:text-white transition-colors" href="mailto:deploy@velox.io">deploy@velox.io</a>
<a className="text-[#aaa] text-link-hover hover:text-white transition-colors" href="#">X (Twitter)</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-small text-[#555] font-mono-custom text-[0.6875rem] uppercase tracking-widest">
<span>© 2025 VELOX TECHNOLOGIES</span>
<span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF3300] rounded-full animate-pulse"></span> GLOBAL DEPLOYMENT ACTIVE</span>
</div>
</div>
</footer>



    </>
  );
}
