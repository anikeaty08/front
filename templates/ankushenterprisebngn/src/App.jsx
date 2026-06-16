import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Three.js Enterprise Background Setup ---
        const canvas = document.getElementById('webgl-canvas');
        const scene = new THREE.Scene();
        
        // Denser, darker fog for depth
        scene.fog = new THREE.FogExp2(0x020617, 0.02);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        camera.position.y = 1.5;

        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Subtler grid
        const gridHelper = new THREE.GridHelper(200, 100, 0x0f172a, 0x040816);
        gridHelper.position.y = -2;
        scene.add(gridHelper);

        // Abstract light streaks / pillars (enterprise feel)
        const geometry = new THREE.BoxGeometry(0.05, 8, 0.05);
        const material = new THREE.MeshBasicMaterial({ 
            color: 0x1e293b, 
            transparent: true, 
            opacity: 0.15 
        });
        
        const pillars = [];
        for(let i=0; i<60; i++) {
            const mesh = new THREE.Mesh(geometry, material);
            const side = Math.random() > 0.5 ? 1 : -1;
            mesh.position.x = side * (Math.random() * 20 + 2);
            mesh.position.y = Math.random() * 2;
            mesh.position.z = Math.random() * -200;
            scene.add(mesh);
            pillars.push(mesh);
        }

        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - window.innerWidth / 2);
            mouseY = (event.clientY - window.innerHeight / 2);
        });

        const clock = new THREE.Clock();
        function animate() {
            requestAnimationFrame(animate);
            const delta = clock.getDelta();

            gridHelper.position.z += 8 * delta;
            if (gridHelper.position.z > 10) {
                gridHelper.position.z = 0;
            }

            pillars.forEach(pillar => {
                pillar.position.z += 12 * delta;
                if(pillar.position.z > 5) {
                    pillar.position.z = -200;
                }
            });

            // Smoother camera inertia
            targetX = mouseX * 0.0005;
            targetY = mouseY * 0.0005;
            
            camera.rotation.y += 0.02 * (targetX - camera.rotation.y);
            camera.rotation.x += 0.02 * (targetY - camera.rotation.x);

            // Subtle slow continuous rotation
            camera.position.x = Math.sin(clock.elapsedTime * 0.1) * 0.5;

            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // --- GSAP Premium Animations ---
        gsap.registerPlugin(ScrollTrigger);

        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('bg-[#020617]/80', 'backdrop-blur-lg', 'border-white/5');
                nav.classList.remove('border-transparent');
            } else {
                nav.classList.remove('bg-[#020617]/80', 'backdrop-blur-lg', 'border-white/5');
                nav.classList.add('border-transparent');
            }
        });

        const revealElements = document.querySelectorAll('.gs-reveal');
        revealElements.forEach((el) => {
            gsap.fromTo(el, 
                { autoAlpha: 0, y: 40, scale: 0.98 }, 
                { 
                    duration: 1.4, 
                    autoAlpha: 1, 
                    y: 0, 
                    scale: 1,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        const staggerContainers = document.querySelectorAll('#services');
        staggerContainers.forEach((container) => {
            const cards = container.querySelectorAll('.gs-reveal-stagger');
            gsap.fromTo(cards, 
                { autoAlpha: 0, y: 50, scale: 0.96 }, 
                { 
                    duration: 1.2, 
                    autoAlpha: 1, 
                    y: 0, 
                    scale: 1,
                    stagger: 0.15,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 75%",
                    }
                }
            );
        });

        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            let st = window.pageYOffset || document.documentElement.scrollTop;
            let velocity = Math.abs(st - lastScrollTop);
            gridHelper.position.z += velocity * 0.03;
            lastScrollTop = st <= 0 ? 0 : st; 
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-grain"></div>
<canvas id="webgl-canvas"></canvas>

<nav className="fixed top-0 w-full z-40 transition-all duration-500 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
<a className="text-base font-medium tracking-tighter text-slate-100 flex items-center gap-2" href="#">
<iconify-icon className="text-blue-500 text-lg" icon="solar:train-linear"></iconify-icon>
                ANKUSH
            </a>
<div className="hidden md:flex space-x-8 text-xs font-normal text-slate-400">
<a className="hover:text-slate-100 transition-colors duration-300" href="#about">About</a>
<a className="hover:text-slate-100 transition-colors duration-300" href="#services">Services</a>
<a className="hover:text-slate-100 transition-colors duration-300" href="#credentials">Credentials</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-slate-100 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300" href="#contact">
                Get in touch
            </a>
</div>
</nav>
<main className="relative z-10 flex flex-col items-center w-full">

<section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
<div className="max-w-4xl mx-auto flex flex-col items-center gs-reveal">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8 text-xs text-blue-200 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></span>
                    Registered Railway Vendor
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 mb-6 leading-[1.1]">
                    M/S. Ankush Enterprise
                </h1>
<p className="text-base md:text-lg text-slate-400 max-w-2xl mb-10 font-light leading-relaxed">
                    Trusted Railway General Order Supplier. Delivering premium industrial materials and comprehensive supply chain solutions with uncompromising reliability.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
<a className="btn-primary inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white rounded-lg" href="#contact">
                        Contact Now
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-300 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300" href="#services">
                        Explore Services
                    </a>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-slate-500/60 gs-reveal">
<span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
<iconify-icon className="text-base" icon="solar:mouse-linear"></iconify-icon>
</div>
</section>

<section className="w-full py-32 px-6 max-w-7xl mx-auto" id="about">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="flex flex-col gap-6 gs-reveal">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-100">
                        Foundation of Trust &amp; Precision
                    </h2>
<p className="text-sm text-slate-400 leading-loose font-light">
                        Based in the industrial hub of Bongaigaon, Assam, M/S. Ankush Enterprise has established itself as a cornerstone in railway and industrial supply. We specialize in fulfilling complex general orders with a commitment to quality and punctuality.
                    </p>
<p className="text-sm text-slate-400 leading-loose font-light">
                        Our operations are fully certified and compliant with government standards, ensuring that every procurement meets the rigorous demands of the Indian Railways and associated large-scale sectors.
                    </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gs-reveal">
<div className="glass-card rounded-2xl p-6 flex flex-col gap-3">
<div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-1">
<iconify-icon className="text-lg text-blue-400" icon="solar:document-text-linear"></iconify-icon>
</div>
<span className="text-xs text-slate-500 uppercase tracking-widest font-medium">Vendor Reg No.</span>
<span className="text-lg font-medium text-slate-200 tracking-tight">37226</span>
</div>
<div className="glass-card rounded-2xl p-6 flex flex-col gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-1">
<iconify-icon className="text-lg text-emerald-400" icon="solar:shield-check-linear"></iconify-icon>
</div>
<span className="text-xs text-slate-500 uppercase tracking-widest font-medium">GSTIN</span>
<span className="text-sm font-medium text-slate-200 tracking-tight">18AESPC7882C1Z6</span>
</div>
<div className="glass-card rounded-2xl p-6 flex flex-col gap-3 sm:col-span-2">
<div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-1">
<iconify-icon className="text-lg text-indigo-400" icon="solar:map-point-linear"></iconify-icon>
</div>
<span className="text-xs text-slate-500 uppercase tracking-widest font-medium">Headquarters</span>
<span className="text-sm font-medium text-slate-200 tracking-tight">Natunpara, Bongaigaon, Assam – 783380</span>
</div>
</div>
</div>
</section>

<section className="w-full py-24 px-6 max-w-7xl mx-auto relative" id="services">
<div className="text-center mb-20 gs-reveal">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-100 mb-4">Core Capabilities</h2>
<p className="text-sm text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">Providing end-to-end material supply solutions engineered for the demanding environments of heavy industry.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-3xl p-8 group relative overflow-hidden gs-reveal-stagger">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-500 relative z-10">
<iconify-icon className="text-xl" icon="solar:tram-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-200 mb-3 tracking-tight relative z-10">Railway Material</h3>
<p className="text-xs text-slate-400 leading-relaxed font-light relative z-10">
                        Specialized procurement and distribution of certified materials specifically graded for railway track maintenance, rolling stock, and infrastructure.
                    </p>
</div>

<div className="glass-card rounded-3xl p-8 group relative overflow-hidden gs-reveal-stagger">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-500 relative z-10">
<iconify-icon className="text-xl" icon="solar:box-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-200 mb-3 tracking-tight relative z-10">Industrial Goods</h3>
<p className="text-xs text-slate-400 leading-relaxed font-light relative z-10">
                        Bulk supply of raw materials, heavy machinery parts, and specialized industrial tools required for large-scale manufacturing and construction.
                    </p>
</div>

<div className="glass-card rounded-3xl p-8 group relative overflow-hidden gs-reveal-stagger">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-500 relative z-10">
<iconify-icon className="text-xl" icon="solar:clipboard-list-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-200 mb-3 tracking-tight relative z-10">General Orders</h3>
<p className="text-xs text-slate-400 leading-relaxed font-light relative z-10">
                        Flexible and responsive general order fulfillment, adapting to unique client specifications with streamlined logistics and rigorous quality control.
                    </p>
</div>
</div>
</section>

<section className="w-full py-8 border-y border-white/5 bg-white/[0.01] backdrop-blur-md mt-16 mb-24 overflow-hidden relative" id="credentials">
<div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617] z-10 pointer-events-none"></div>
<div className="flex gap-16 whitespace-nowrap opacity-50">
<div className="flex gap-16 items-center animate-[marquee_30s_linear_infinite] text-xs font-medium tracking-widest text-slate-400 uppercase">
<span>Vendor Reg: 37226</span>
<span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
<span>GST: 18AESPC7882C1Z6</span>
<span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
<span>Govt. Approved Supplier</span>
<span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
<span>Assam Based</span>
<span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
<span>Vendor Reg: 37226</span>
<span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
<span>GST: 18AESPC7882C1Z6</span>
</div>
</div>
</section>

<section className="w-full pb-32 px-6 max-w-6xl mx-auto" id="contact">
<div className="glass-card rounded-[2rem] p-1.5 overflow-hidden gs-reveal">
<div className="grid grid-cols-1 lg:grid-cols-2 rounded-[1.75rem] overflow-hidden bg-[#020617] relative">

<div className="p-10 md:p-16 flex flex-col justify-between relative overflow-hidden border-r border-white/5 z-10">

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-3">Initiate Procurement</h2>
<p className="text-sm text-slate-400 mb-12 font-light">Connect with our supply chain specialists to discuss your material requirements.</p>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-300" icon="solar:phone-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-xs text-slate-500 uppercase tracking-widest font-medium">Direct Lines</span>
<a className="text-sm font-medium text-slate-200 hover:text-blue-400 transition-colors" href="tel:+918011382500">+91 80113 82500</a>
<a className="text-sm font-medium text-slate-200 hover:text-blue-400 transition-colors" href="tel:+919706175337">+91 97061 75337</a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-300" icon="solar:letter-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-xs text-slate-500 uppercase tracking-widest font-medium">Electronic Mail</span>
<a className="text-sm font-medium text-slate-200 hover:text-blue-400 transition-colors break-all" href="mailto:ankushenterprisebngn@gmail.com">ankushenterprisebngn@gmail.com</a>
<a className="text-sm font-medium text-slate-200 hover:text-blue-400 transition-colors break-all" href="mailto:dchanda35@gmail.com">dchanda35@gmail.com</a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-300" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-xs text-slate-500 uppercase tracking-widest font-medium">Registered Office</span>
<span className="text-sm font-medium text-slate-200 leading-relaxed">
                                            Natunpara, Bongaigaon<br/>
                                            Assam – 783380, India
                                        </span>
</div>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/5 relative z-10">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all text-xs font-medium" href="https://wa.me/918011382500" target="_blank">
<iconify-icon className="text-sm" icon="solar:chat-round-line-linear"></iconify-icon>
                                Chat on WhatsApp
                            </a>
</div>
</div>

<div className="p-10 md:p-16 bg-white/[0.01] relative z-10">
<form className="flex flex-col gap-6" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs text-slate-400 font-medium ml-0.5">Full Name</label>
<input className="rounded-lg px-4 py-3 text-sm w-full" placeholder="John Doe" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-slate-400 font-medium ml-0.5">Company / Organization</label>
<input className="rounded-lg px-4 py-3 text-sm w-full" placeholder="ABC Corp" type="text"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-slate-400 font-medium ml-0.5">Email Address</label>
<input className="rounded-lg px-4 py-3 text-sm w-full" placeholder="john@example.com" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-slate-400 font-medium ml-0.5">Phone Number</label>
<input className="rounded-lg px-4 py-3 text-sm w-full" placeholder="+91 xxxxx xxxxx" type="tel"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-slate-400 font-medium ml-0.5">Order Details / Inquiry</label>
<textarea className="rounded-lg px-4 py-3 text-sm w-full resize-none" placeholder="Please describe your material requirements..." rows="4"></textarea>
</div>
<button className="mt-4 w-full py-3.5 rounded-lg bg-slate-100 text-slate-900 text-sm font-medium hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]" type="submit">
                                Submit Request
                                <iconify-icon className="text-base" icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full border-t border-white/5 bg-[#020617]/80 backdrop-blur-xl relative z-10 pt-20 pb-8 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2 flex flex-col gap-5">
<a className="text-base font-medium tracking-tighter text-slate-100 flex items-center gap-2" href="#">
<iconify-icon className="text-slate-500 text-lg" icon="solar:train-linear"></iconify-icon>
                    ANKUSH
                </a>
<p className="text-xs text-slate-500 max-w-sm leading-loose font-light">
                    M/S. Ankush Enterprise is a premier general order supplier serving the Indian Railways and industrial sectors with certified materials from Bongaigaon, Assam.
                </p>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-medium text-slate-300 uppercase tracking-widest mb-1">Legal</span>
<span className="text-xs text-slate-500 font-light">Vendor Reg: 37226</span>
<span className="text-xs text-slate-500 font-light">GSTIN: 18AESPC7882C1Z6</span>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-medium text-slate-300 uppercase tracking-widest mb-1">Contact</span>
<a className="text-xs text-slate-500 hover:text-slate-300 transition-colors font-light" href="tel:+918011382500">+91 80113 82500</a>
<a className="text-xs text-slate-500 hover:text-slate-300 transition-colors truncate font-light" href="mailto:ankushenterprisebngn@gmail.com">ankushenterprisebngn...</a>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600 font-light">© 2023 M/S. Ankush Enterprise. All rights reserved.</p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-slate-300 hover:bg-white/10 transition-all" href="#">
<iconify-icon className="text-sm" icon="solar:arrow-up-linear"></iconify-icon>
</a>
</div>
</div>
</footer>



    </>
  );
}
