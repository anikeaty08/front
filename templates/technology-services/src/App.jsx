import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}if(window.top&&window.top!==window){window.top.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24"}}catch(e){}


window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // Initialize Lucide Icons
            lucide.createIcons();
            
            // --- Three.js WebGL Setup ---
            const initWebGL = () => {
                const container = document.getElementById('webgl-container');
                if (!container) return;

                const scene = new THREE.Scene();
                
                const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
                camera.position.z = 30;
                camera.position.y = 5;

                const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                container.appendChild(renderer.domElement);

                const geometry = new THREE.BufferGeometry();
                const count = 15000;
                const positions = new Float32Array(count * 3);
                
                const radius = 25;

                for (let i = 0; i < count; i++) {
                    const u = Math.random();
                    const v = Math.random();
                    const theta = u * 2.0 * Math.PI;
                    const phi = Math.acos((Math.random() * 0.8) + 0.2);

                    const x = radius * Math.sin(phi) * Math.cos(theta);
                    const y = radius * Math.cos(phi);
                    const z = radius * Math.sin(phi) * Math.sin(theta);

                    positions[i * 3] = x;
                    positions[i * 3 + 1] = y - 20;
                    positions[i * 3 + 2] = z;
                }

                geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

                const material = new THREE.PointsMaterial({
                    size: 0.08,
                    color: 0xffffff,
                    transparent: true,
                    opacity: 0.4,
                    blending: THREE.AdditiveBlending,
                    depthWrite: false
                });

                const particles = new THREE.Points(geometry, material);
                scene.add(particles);

                const animate = () => {
                    requestAnimationFrame(animate);
                    particles.rotation.y += 0.0008;
                    particles.rotation.z += 0.0002;
                    renderer.render(scene, camera);
                };

                animate();

                window.addEventListener('resize', () => {
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(window.innerWidth, window.innerHeight);
                });
            };

            // --- GSAP Masked Text Reveal Setup ---
            const initGSAP = () => {
                gsap.registerPlugin(ScrollTrigger);

                const revealTexts = document.querySelectorAll('.js-reveal-text');

                revealTexts.forEach(textEl => {
                    const text = textEl.innerText;
                    textEl.innerHTML = '';
                    
                    const words = text.split(' ');
                    words.forEach((word, i) => {
                        const wrapper = document.createElement('span');
                        wrapper.className = 'reveal-wrapper';
                        
                        const inner = document.createElement('span');
                        inner.className = 'reveal-inner';
                        inner.innerText = word + (i < words.length - 1 ? '\u00A0' : '');
                        
                        wrapper.appendChild(inner);
                        textEl.appendChild(wrapper);
                    });

                    gsap.to(textEl.querySelectorAll('.reveal-inner'), {
                        y: '0%',
                        duration: 1.2,
                        stagger: 0.03,
                        ease: 'power4.out',
                        scrollTrigger: {
                            trigger: textEl,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse'
                        }
                    });
                });
            };

            initWebGL();
            setTimeout(initGSAP, 150);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="relative min-h-screen w-full flex flex-col overflow-hidden bg-[#0a0a0a]">
<div className="absolute inset-0 z-0 pointer-events-none opacity-80" id="webgl-container" style={{maskImage: 'linear-gradient(to bottom, transparent 20%, black 50%, black 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 20%, black 50%, black 100%)'}}></div>
<div className="relative z-10 w-full max-w-7xl mx-auto border-x border-white/5 flex-grow flex flex-col h-full min-h-screen">
<header className="w-full flex justify-between items-center px-6 py-5 border-b border-white/5 bg-gradient-to-b from-[#1a1a1a]/90 to-[#0a0a0a]/50 backdrop-blur-md">
<div className="font-light tracking-tight text-lg text-white/90">
                    NEXUS
                </div>
<nav className="hidden md:flex items-center space-x-12 text-sm font-light text-white/50 tracking-wide uppercase">
<a className="hover:text-white transition-colors duration-300" href="#">Methodology +</a>
<a className="hover:text-white transition-colors duration-300" href="#">Capabilities +</a>
<a className="hover:text-white transition-colors duration-300" href="#">Initiatives +</a>
<a className="hover:text-white transition-colors duration-300" href="#">Engage +</a>
</nav>
<button className="px-5 py-2 text-sm font-light text-white/70 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm transition-all duration-300">
                    Collaborate
                </button>
</header>
<main className="flex-grow flex flex-col items-center justify-center text-center px-4 pt-10 pb-32 md:pb-48">
<div className="mb-10 flex items-center justify-center w-full max-w-sm gap-4 opacity-70">
<div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-white/30"></div>
<span className="font-mono text-sm tracking-[0.4em] uppercase text-white">N/01</span>
<div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-white/30"></div>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight max-w-[900px] leading-[1.1] mb-16 text-white/95">
                    Translating today's objectives into tomorrow's infrastructure through logic, design, and computation.
                </h1>
<div className="flex items-center justify-center w-full max-w-4xl mx-auto gap-6 md:gap-12 mt-4">
<div className="h-px flex-grow bg-gradient-to-r from-transparent to-white/10 hidden md:block"></div>
<div className="flex flex-col sm:flex-row items-center gap-5 shrink-0">
<div className="relative group rounded-md p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent overflow-hidden">
<button className="relative w-full h-full px-8 py-3.5 rounded-md bg-[#111] text-lg font-light text-white/80 hover:text-white transition-colors group-hover:bg-[#181818]">
                                Schedule Intro
                            </button>
</div>
<button className="px-8 py-3.5 rounded-md bg-[#eab308] text-white text-lg font-light hover:bg-[#ca8a04] transition-colors flex items-center gap-2">
                            Explore Vectors
                            <i className="w-4 h-4 mt-[1px]" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="h-px flex-grow bg-gradient-to-l from-transparent to-white/10 hidden md:block"></div>
</div>
</main>
</div>
</section>

<section className="bg-white text-[#111] relative w-full border-t border-black/5 overflow-hidden py-24 md:py-32">
<div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
<div className="mb-8">
<span className="inline-block text-sm font-mono uppercase tracking-widest" style={{backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '4px 4px', padding: '0.5rem 1rem', color: 'rgba(0,0,0,0.6)'}}>The problem</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-center text-[#111] mb-24 leading-[1.1]">
                Struggling with slow,<br/>expensive onboarding?
            </h2>
<div className="relative w-full flex justify-center opacity-90" style={{WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)', maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)'}}>
<div className="flex w-max animate-marquee hover:[animation-play-state:paused] pr-6">

<div className="flex gap-4 md:gap-6 flex-shrink-0 scale-90 md:scale-100 items-center px-3">

<div className="flex flex-col gap-4 md:gap-6 w-56 md:w-64 flex-shrink-0 -translate-y-8">
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
<div className="min-h-32 bg-white border border-black/[0.04] shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-2xl p-6 flex items-center justify-center text-center">
<p className="text-lg text-black/80 font-light leading-relaxed">"New customers need to be onboarded in less than a day, not weeks."</p>
</div>
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
</div>

<div className="flex flex-col gap-4 md:gap-6 w-56 md:w-64 flex-shrink-0 translate-y-8">
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
<div className="min-h-32 bg-white border border-black/[0.04] shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-2xl p-6 flex items-center justify-center text-center">
<p className="text-lg text-black/80 font-light leading-relaxed">"We need to increase our Professional Services' margin by 40%."</p>
</div>
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
</div>

<div className="flex flex-col gap-4 md:gap-6 w-56 md:w-72 flex-shrink-0 -translate-y-4">
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
<div className="min-h-32 bg-white border border-black/[0.04] shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-2xl p-8 flex items-center justify-center text-center">
<p className="text-lg text-black/80 font-light leading-relaxed">"Prospects' custom instances and demo should be created within minutes."</p>
</div>
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
</div>

<div className="flex flex-col gap-4 md:gap-6 w-56 md:w-64 flex-shrink-0 translate-y-12">
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
<div className="min-h-32 bg-white border border-black/[0.04] shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-2xl p-6 flex items-center justify-center text-center">
<p className="text-lg text-black/80 font-light leading-relaxed">"We need to decrease our implementation time by 70%."</p>
</div>
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
</div>

<div className="flex flex-col gap-4 md:gap-6 w-56 md:w-64 flex-shrink-0 -translate-y-2">
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
<div className="min-h-32 bg-white border border-black/[0.04] shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-2xl p-6 flex items-center justify-center text-center">
<p className="text-lg text-black/80 font-light leading-relaxed">"We are losing momentum during the technical handoff phase."</p>
</div>
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
</div>
</div>

<div aria-hidden="true" className="flex gap-4 md:gap-6 flex-shrink-0 scale-90 md:scale-100 items-center px-3">

<div className="flex flex-col gap-4 md:gap-6 w-56 md:w-64 flex-shrink-0 -translate-y-8">
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
<div className="min-h-32 bg-white border border-black/[0.04] shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-2xl p-6 flex items-center justify-center text-center">
<p className="text-lg text-black/80 font-light leading-relaxed">"New customers need to be onboarded in less than a day, not weeks."</p>
</div>
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
</div>

<div className="flex flex-col gap-4 md:gap-6 w-56 md:w-64 flex-shrink-0 translate-y-8">
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
<div className="min-h-32 bg-white border border-black/[0.04] shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-2xl p-6 flex items-center justify-center text-center">
<p className="text-lg text-black/80 font-light leading-relaxed">"We need to increase our Professional Services' margin by 40%."</p>
</div>
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
</div>

<div className="flex flex-col gap-4 md:gap-6 w-56 md:w-72 flex-shrink-0 -translate-y-4">
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
<div className="min-h-32 bg-white border border-black/[0.04] shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-2xl p-8 flex items-center justify-center text-center">
<p className="text-lg text-black/80 font-light leading-relaxed">"Prospects' custom instances and demo should be created within minutes."</p>
</div>
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
</div>

<div className="flex flex-col gap-4 md:gap-6 w-56 md:w-64 flex-shrink-0 translate-y-12">
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
<div className="min-h-32 bg-white border border-black/[0.04] shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-2xl p-6 flex items-center justify-center text-center">
<p className="text-lg text-black/80 font-light leading-relaxed">"We need to decrease our implementation time by 70%."</p>
</div>
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
</div>

<div className="flex flex-col gap-4 md:gap-6 w-56 md:w-64 flex-shrink-0 -translate-y-2">
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
<div className="min-h-32 bg-white border border-black/[0.04] shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-2xl p-6 flex items-center justify-center text-center">
<p className="text-lg text-black/80 font-light leading-relaxed">"We are losing momentum during the technical handoff phase."</p>
</div>
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
<div className="h-32 bg-[#fafafa]/80 border border-black/[0.03] rounded-2xl flex items-center justify-center"><i className="w-6 h-6 text-black/[0.04]" data-lucide="box" strokeWidth="1.5"></i></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 text-[#111] font-sans bg-[#f5f5f7] w-full border-black/5 border-t pt-24 pb-24">
<div className="max-w-[1500px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">

<div className="lg:col-span-6 xl:col-span-5 relative w-full h-[600px] md:h-[800px] rounded-[2rem] overflow-hidden group border border-black/[0.04] shadow-[0_8px_40px_rgba(0,0,0,0.04)] bg-white">
<img alt="Nexus Architecture Overview" className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-1000 group-hover:scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6f65acfa-d747-4a1f-9d86-d66a528b1240_1600w.jpg"/>
<div className="absolute inset-0 bg-black/5 mix-blend-multiply"></div>

<div className="absolute top-6 left-6 right-6 md:right-auto bg-white/95 backdrop-blur-md text-[#111] rounded-full px-6 py-3.5 flex items-center justify-between md:justify-start gap-8 text-sm font-light z-20 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-black/5">
<div className="flex items-center gap-2 font-medium tracking-tight">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" ry="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" ry="1" width="6" x="9" y="9"></rect><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M2 12h2"></path><path d="M20 12h2"></path></svg>
                        nexus-core
                    </div>
<div className="hidden md:flex items-center gap-6 text-black/60">
<a className="hover:text-black transition-colors" href="#">Topology</a>
<a className="hover:text-black transition-colors" href="#">Logic</a>
<a className="hover:text-black transition-colors" href="#">State</a>
<a className="hover:text-black transition-colors" href="#">Deploy</a>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 md:ml-2 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
</div>

<div className="absolute inset-y-0 left-6 flex items-center z-10">
<button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-black/5 flex items-center justify-center text-black/70 hover:text-black hover:bg-white transition-all shadow-sm hover:scale-105">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
</div>
<div className="absolute inset-y-0 right-6 flex items-center z-10">
<button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-black/5 flex items-center justify-center text-black/70 hover:text-black hover:bg-white transition-all shadow-sm hover:scale-105">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-6 md:gap-8 h-full">

<div className="flex flex-col md:flex-row gap-6 md:gap-8">

<div className="flex-1 bg-white rounded-[2rem] p-8 md:p-10 flex flex-col justify-between border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
<div className="flex items-center gap-5 mb-8">
<img alt="Abstract Core Matrix" className="w-16 h-16 rounded-full object-cover border border-black/5 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4340f08-d355-4926-afca-701af404821c_320w.webp"/>
<div className="">
<div className="text-xl font-medium text-black tracking-tight mb-0.5">NEXUS Core Engine</div>
<div className="text-sm font-light text-black/50 tracking-wide">v2.4.1 — Production</div>
</div>
</div>
<p className="text-lg font-light text-black/70 leading-relaxed max-w-[95%]">
                            Engineered for deterministic execution. The core processes high-throughput topological data, resolving complex infrastructural variables with absolute precision and sub-millisecond latency.
                        </p>
</div>

<div className="w-full md:w-64 flex flex-col gap-3 shrink-0">
<a className="w-full bg-white border border-black/[0.04] hover:border-black/10 hover:bg-gray-50 rounded-[1.25rem] px-5 py-4 flex justify-between items-center text-sm font-light text-black/80 transition-all shadow-[0_2px_10px_rgba(0,0,0,0.01)] group" href="#">
                            Global Edge
                            <svg className="w-4 h-4 text-black/40 group-hover:text-black/70 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
</a>
<a className="w-full bg-white border border-black/[0.04] hover:border-black/10 hover:bg-gray-50 rounded-[1.25rem] px-5 py-4 flex justify-between items-center text-sm font-light text-black/80 transition-all shadow-[0_2px_10px_rgba(0,0,0,0.01)] group" href="#">
                            Data Matrix
                            <svg className="w-4 h-4 text-black/40 group-hover:text-black/70 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</a>
<a className="w-full bg-white border border-black/[0.04] hover:border-black/10 hover:bg-gray-50 rounded-[1.25rem] px-5 py-4 flex justify-between items-center text-sm font-light text-black/80 transition-all shadow-[0_2px_10px_rgba(0,0,0,0.01)] group" href="#">
                            Auth Gateway
                            <svg className="w-4 h-4 text-black/40 group-hover:text-black/70 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</a>
<a className="w-full bg-white border border-black/[0.04] hover:border-black/10 hover:bg-gray-50 rounded-[1.25rem] px-5 py-4 flex justify-between items-center text-sm font-light text-black/80 transition-all shadow-[0_2px_10px_rgba(0,0,0,0.01)] group" href="#">
                            Event Stream
                            <svg className="w-4 h-4 text-black/40 group-hover:text-black/70 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</a>
<button className="w-full mt-auto bg-[#111] hover:bg-black rounded-[1.25rem] px-5 py-4 flex justify-between items-center text-sm font-medium tracking-wide text-white transition-all shadow-[0_4px_14px_rgba(0,0,0,0.2)]">
                            Initialize
                            <svg className="w-4 h-4 text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>
</button>
</div>
</div>

<div className="flex justify-between items-center px-3 py-1 mt-2">
<div className="text-sm font-light text-black/60 flex items-center gap-2 tracking-wide uppercase">
                        Active Vectors <svg className="w-3.5 h-3.5 opacity-70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
<a className="text-sm font-light text-black/80 underline decoration-black/20 underline-offset-4 hover:decoration-black/60 transition-colors" href="#">
                        View Metrics
                    </a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 flex-1 min-h-[350px] md:min-h-0">

<div className="relative w-full h-[320px] md:h-full bg-white rounded-[2rem] overflow-hidden group shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-black/[0.04]">

<div className="absolute top-0 left-0 bg-[#f5f5f7] px-5 py-2.5 rounded-br-2xl z-10 text-xs font-medium tracking-widest uppercase text-black/70">
                            Compute
                        </div>
<img alt="Compute Allocation" className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-1000 group-hover:scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83b7d567-0b08-4ab3-b1b0-a4f5ceecc3e2_1600w.jpg"/>
</div>

<div className="relative w-full h-[320px] md:h-full bg-white rounded-[2rem] overflow-hidden group shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-black/[0.04]">

<div className="absolute top-0 left-0 bg-[#f5f5f7] px-5 py-2.5 rounded-br-2xl z-10 text-xs font-medium tracking-widest uppercase text-black/70">
                            Topology
                        </div>
<img alt="System Topology" className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-1000 group-hover:scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c9104c6d-9521-4057-b664-ed476bf3039e_1600w.webp"/>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] text-white relative w-full border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 py-24 md:py-32 border-x border-white/5">
<div className="text-center mb-20 flex flex-col items-center">
<div className="mb-6">
<span className="inline-block text-white/60 text-sm font-mono uppercase tracking-[0.2em]" style={{backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '4px 4px', padding: '0.5rem 1rem'}}>Investment Vectors</span>
</div>
<h3 className="text-4xl md:text-6xl font-light tracking-tight text-white/95 mb-10 js-reveal-text"><span className="reveal-wrapper"><span className="reveal-inner">Architectural Allocation</span></span></h3>

<div className="inline-flex bg-[#111] border border-white/10 rounded-full p-1 relative">
<div className="absolute inset-y-1 left-1 w-[calc(50%-4px)] bg-white/10 rounded-full shadow-sm transition-transform duration-300"></div>
<button className="relative z-10 px-8 py-2 rounded-full text-sm text-white font-light w-36">Monthly</button>
<button className="relative z-10 px-8 py-2 rounded-full text-sm text-white/50 hover:text-white transition-colors w-36">Annually</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">

<div className="border border-white/10 bg-[#0a0a0a] rounded-xl p-8 flex flex-col transition-colors hover:border-white/20">
<div className="text-sm font-light text-white/50 mb-4 uppercase tracking-wider">Foundation</div>
<div className="text-5xl font-light tracking-tight mb-4">$4,500 <span className="text-lg text-white/30 tracking-normal">/mo</span></div>
<p className="text-lg text-white/50 mb-10 font-light leading-relaxed">Initial architecture and strategic alignment for emerging entities.</p>
<ul className="space-y-5 flex-grow mb-10">
<li className="flex items-start gap-3 text-lg text-white/70 font-light">
<i className="w-5 h-5 text-[#eab308] mt-0.5 opacity-80" data-lucide="check-circle" strokeWidth="1.5"></i>
                            Vector Analysis Mapping
                        </li>
<li className="flex items-start gap-3 text-lg text-white/70 font-light">
<i className="w-5 h-5 text-[#eab308] mt-0.5 opacity-80" data-lucide="check-circle" strokeWidth="1.5"></i>
                            Core Logic Implementation
                        </li>
<li className="flex items-start gap-3 text-lg text-white/70 font-light">
<i className="w-5 h-5 text-[#eab308] mt-0.5 opacity-80" data-lucide="check-circle" strokeWidth="1.5"></i>
                            Asynchronous Support
                        </li>
</ul>
<button className="w-full py-3.5 rounded-md bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition-colors font-light">Initiate Protocol</button>
</div>

<div className="border border-white/20 bg-[#111] rounded-xl p-8 flex flex-col relative overflow-hidden transform md:-translate-y-4 shadow-[0_0_40px_rgba(234,179,8,0.05)]">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#eab308] to-transparent opacity-70"></div>
<div className="flex justify-between items-center mb-4">
<div className="text-sm font-light text-[#eab308] uppercase tracking-wider">Velocity</div>
<div className="text-xs px-2.5 py-1 rounded-full bg-[#eab308]/10 border border-[#eab308]/20 text-[#eab308] tracking-wide">OPTIMAL</div>
</div>
<div className="text-5xl font-light tracking-tight mb-4">$9,200 <span className="text-lg text-white/30 tracking-normal">/mo</span></div>
<p className="text-lg text-white/50 mb-10 font-light leading-relaxed">Accelerated deployment and sustained momentum for scaling systems.</p>
<ul className="space-y-5 flex-grow mb-10">
<li className="flex items-start gap-3 text-lg text-white/90 font-light">
<i className="w-5 h-5 text-[#eab308] mt-0.5" data-lucide="check-circle" strokeWidth="1.5"></i>
                            Everything in Foundation
                        </li>
<li className="flex items-start gap-3 text-lg text-white/70 font-light">
<i className="w-5 h-5 text-[#eab308] mt-0.5 opacity-80" data-lucide="check-circle" strokeWidth="1.5"></i>
                            Continuous Integration Matrix
                        </li>
<li className="flex items-start gap-3 text-lg text-white/70 font-light">
<i className="w-5 h-5 text-[#eab308] mt-0.5 opacity-80" data-lucide="check-circle" strokeWidth="1.5"></i>
                            Synchronous Strategy Sessions
                        </li>
</ul>
<button className="w-full py-3.5 rounded-md bg-[#eab308] text-sm text-white hover:bg-[#ca8a04] transition-colors font-light">Accelerate Now</button>
</div>

<div className="border border-white/10 bg-[#0a0a0a] rounded-xl p-8 flex flex-col transition-colors hover:border-white/20">
<div className="text-sm font-light text-white/50 mb-4 uppercase tracking-wider">Omni</div>
<div className="text-5xl font-light tracking-tight mb-4">Custom</div>
<p className="text-lg text-white/50 mb-10 font-light leading-relaxed">Bespoke infrastructure and unlimited bandwidth for enterprise resilience.</p>
<ul className="space-y-5 flex-grow mb-10">
<li className="flex items-start gap-3 text-lg text-white/70 font-light">
<i className="w-5 h-5 text-[#eab308] mt-0.5 opacity-80" data-lucide="check-circle" strokeWidth="1.5"></i>
                            Unrestricted Scope
                        </li>
<li className="flex items-start gap-3 text-lg text-white/70 font-light">
<i className="w-5 h-5 text-[#eab308] mt-0.5 opacity-80" data-lucide="check-circle" strokeWidth="1.5"></i>
                            Dedicated Pod Integration
                        </li>
<li className="flex items-start gap-3 text-lg text-white/70 font-light">
<i className="w-5 h-5 text-[#eab308] mt-0.5 opacity-80" data-lucide="check-circle" strokeWidth="1.5"></i>
                            Quarterly On-Site Summits
                        </li>
</ul>
<button className="w-full py-3.5 rounded-md bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition-colors font-light">Discuss Parameters</button>
</div>
</div>
</div>
</section>

<section className="bg-[#f5f5f7] text-[#111] relative w-full border-t border-black/10">
<div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 border-x border-black/5">
<div className="md:col-span-4 lg:col-span-4">
<div className="sticky top-24">
<div className="mb-6">
<span className="inline-block text-black/60 text-sm font-mono uppercase tracking-[0.2em]" style={{backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '4px 4px', padding: '0.5rem 1rem'}}>Inquiries</span>
</div>
<h3 className="text-4xl md:text-5xl font-light tracking-tight mb-6 js-reveal-text"><span className="reveal-wrapper"><span className="reveal-inner">Operational Clarity</span></span></h3>
<p className="text-lg text-black/50 leading-relaxed max-w-sm font-light">
                        Understanding our engagement models, deployment strategies, and infrastructural philosophies.
                    </p>
</div>
</div>
<div className="md:col-span-8 lg:col-span-8">
<div className="divide-y divide-black/10 border-t border-black/10">
<details className="group py-8" open="">
<summary className="flex justify-between items-center cursor-pointer text-xl md:text-2xl font-light tracking-tight text-black/90 outline-none select-none">
                            What defines your structural methodology?
                            <span className="relative flex-shrink-0 ml-4 w-5 h-5 flex items-center justify-center">
<span className="absolute h-px w-5 bg-black/60 transition-transform duration-300"></span>
<span className="absolute h-px w-5 bg-black/60 rotate-90 transition-transform duration-300 group-open:rotate-0"></span>
</span>
</summary>
<div className="pt-6 text-lg md:text-xl text-black/60 leading-relaxed font-light pr-8 md:pr-12">
                            We operate on a principle of deterministic design. This means every component, from micro-interactions to macro-architecture, is engineered with explicit intent. We do not rely on templates; we construct bespoke logic frameworks tailored to specific operational vectors.
                        </div>
</details>
<details className="group py-8">
<summary className="flex justify-between items-center cursor-pointer text-xl md:text-2xl font-light tracking-tight text-black/90 outline-none select-none">
                            How do engagement phases sequence?
                            <span className="relative flex-shrink-0 ml-4 w-5 h-5 flex items-center justify-center">
<span className="absolute h-px w-5 bg-black/60 transition-transform duration-300"></span>
<span className="absolute h-px w-5 bg-black/60 rotate-90 transition-transform duration-300 group-open:rotate-0"></span>
</span>
</summary>
<div className="pt-6 text-lg md:text-xl text-black/60 leading-relaxed font-light pr-8 md:pr-12">
                            Engagements initiate with a rigorous Discovery Phase to map variables, followed by Architectural Formulation. Once approved, we move into Asynchronous Deployment, ensuring rapid iteration without stalling your internal momentum, culminating in continuous structural refinement.
                        </div>
</details>
<details className="group py-8">
<summary className="flex justify-between items-center cursor-pointer text-xl md:text-2xl font-light tracking-tight text-black/90 outline-none select-none">
                            Can we transition between allocation tiers?
                            <span className="relative flex-shrink-0 ml-4 w-5 h-5 flex items-center justify-center">
<span className="absolute h-px w-5 bg-black/60 transition-transform duration-300"></span>
<span className="absolute h-px w-5 bg-black/60 rotate-90 transition-transform duration-300 group-open:rotate-0"></span>
</span>
</summary>
<div className="pt-6 text-lg md:text-xl text-black/60 leading-relaxed font-light pr-8 md:pr-12">
                            Fluidity is essential for survival. Tiers are designed to be malleable. You can escalate to Velocity during high-impact sprints and return to Foundation during consolidation periods. Adjustments take effect at the beginning of the subsequent operational cycle.
                        </div>
</details>
<details className="group py-8">
<summary className="flex justify-between items-center cursor-pointer text-xl md:text-2xl font-light tracking-tight text-black/90 outline-none select-none">
                            What constitutes 'Asynchronous Support'?
                            <span className="relative flex-shrink-0 ml-4 w-5 h-5 flex items-center justify-center">
<span className="absolute h-px w-5 bg-black/60 transition-transform duration-300"></span>
<span className="absolute h-px w-5 bg-black/60 rotate-90 transition-transform duration-300 group-open:rotate-0"></span>
</span>
</summary>
<div className="pt-6 text-lg md:text-xl text-black/60 leading-relaxed font-light pr-8 md:pr-12">
                            We utilize dedicated, encrypted channels for rapid data exchange and issue resolution. This eliminates the latency of traditional meetings, allowing our engineers to parse requests and deploy fixes within a 24-hour SLA window while you maintain operational focus.
                        </div>
</details>
</div>
</div>
</div>
</section>

<footer className="bg-[#050505] text-white w-full border-t border-white/5 relative z-10">
<div className="max-w-7xl mx-auto px-6 py-16 md:py-24 border-x border-white/5 flex flex-col">
<div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-8 mb-24">
<div className="md:col-span-2">
<div className="text-2xl font-light tracking-tight text-white/90 mb-6">NEXUS</div>
<p className="text-lg text-white/40 max-w-sm leading-relaxed font-light">
                        Structuring the unseen. Engineering the inevitable. Building the foundational layer for tomorrow's digital topography.
                    </p>
</div>
<div className="flex flex-col gap-5">
<div className="text-sm font-light text-white/80 mb-1 uppercase tracking-wider">Topology</div>
<a className="text-lg text-white/40 hover:text-white transition-colors font-light" href="#">Logic Models</a>
<a className="text-lg text-white/40 hover:text-white transition-colors font-light" href="#">Component Sets</a>
<a className="text-lg text-white/40 hover:text-white transition-colors font-light" href="#">System Status</a>
</div>
<div className="flex flex-col gap-5">
<div className="text-sm font-light text-white/80 mb-1 uppercase tracking-wider">Directives</div>
<a className="text-lg text-white/40 hover:text-white transition-colors font-light" href="#">Manifesto</a>
<a className="text-lg text-white/40 hover:text-white transition-colors font-light" href="#">Case Studies</a>
<a className="text-lg text-white/40 hover:text-white transition-colors font-light" href="#">Signal Blog</a>
</div>
<div className="flex flex-col gap-5">
<div className="text-sm font-light text-white/80 mb-1 uppercase tracking-wider">Legal</div>
<a className="text-lg text-white/40 hover:text-white transition-colors font-light" href="#">Privacy Policy</a>
<a className="text-lg text-white/40 hover:text-white transition-colors font-light" href="#">Terms of Service</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
<div className="text-sm text-white/30 font-light tracking-wide">
                    © 2024 N/01 Protocol. All constraints applied.
                </div>
<div className="flex gap-6">
<a className="text-white/30 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</a>
<a className="text-white/30 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="hash" strokeWidth="1.5"></i>
</a>
<a className="text-white/30 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="graduation-cap" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
