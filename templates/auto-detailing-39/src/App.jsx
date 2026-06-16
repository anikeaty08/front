import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
900: '#18181b',
950: '#09090b',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            /* --- Scroll Reveal Animation --- */
            const revealElements = document.querySelectorAll('.reveal');
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            });
            revealElements.forEach(el => revealObserver.observe(el));

            /* --- 3D Service Cards Hover Effect --- */
            const cards = document.querySelectorAll('.service-card-wrapper');
            cards.forEach(card => {
                const inner = card.querySelector('.service-card-inner');
                
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    // Calculate rotation based on cursor position
                    const rotateX = ((y - centerY) / centerY) * -12; // Max 12deg
                    const rotateY = ((x - centerX) / centerX) * 12;
                    
                    inner.style.transition = 'none';
                    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                });
                
                card.addEventListener('mouseleave', () => {
                    inner.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
                    inner.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                });
            });

            /* --- 3D Hero Car Wash Interaction --- */
            const container = document.getElementById('car-container');
            const cleanCar = document.getElementById('clean-car');
            const dirtyCar = document.getElementById('dirty-car');
            const spark = document.getElementById('spark');
            const instruction = document.getElementById('instruction');

            let isInteracting = false;
            let currentX = 0;
            let currentY = 0;
            let targetX = 0;
            let targetY = 0;
            let rafId = null;

            const updateMask = () => {
                if (!isInteracting) return;
                currentX += (targetX - currentX) * 0.15;
                currentY += (targetY - currentY) * 0.15;

                const rect = container.getBoundingClientRect();
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((currentY - centerY) / centerY) * -3;
                const rotateY = ((currentX - centerX) / centerX) * 3;

                container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                dirtyCar.style.transform = `scale(1.05) translate(${rotateY * -0.5}px, ${rotateX * 0.5}px)`;
                cleanCar.style.transform = `scale(1.05) translate(${rotateY * -0.5}px, ${rotateX * 0.5}px)`;

                const maskSize = window.innerWidth < 768 ? 200 : 350;
                const mask = `radial-gradient(circle ${maskSize}px at ${currentX}px ${currentY}px, black 30%, transparent 100%)`;
                
                cleanCar.style.webkitMaskImage = mask;
                cleanCar.style.maskImage = mask;

                spark.style.left = `${currentX}px`;
                spark.style.top = `${currentY}px`;

                rafId = requestAnimationFrame(updateMask);
            };

            const handleStart = () => {
                isInteracting = true;
                spark.style.opacity = '1';
                instruction.style.opacity = '0';
                instruction.style.transform = 'scale(0.95)';
                container.style.transition = 'none';
                cleanCar.style.transition = 'none';
                dirtyCar.style.transition = 'none';
                
                if (rafId) cancelAnimationFrame(rafId);
                rafId = requestAnimationFrame(updateMask);
            };

            const handleMove = (e) => {
                if (e.type === 'touchmove') e.preventDefault();
                const rect = container.getBoundingClientRect();
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                
                targetX = clientX - rect.left;
                targetY = clientY - rect.top;

                if (!isInteracting) {
                    currentX = targetX;
                    currentY = targetY;
                    handleStart();
                }
            };

            const handleEnd = () => {
                isInteracting = false;
                if (rafId) cancelAnimationFrame(rafId);
                
                container.style.transition = 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)';
                cleanCar.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
                dirtyCar.style.transition = 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)';
                
                container.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
                cleanCar.style.transform = `scale(1) translate(0px, 0px)`;
                dirtyCar.style.transform = `scale(1) translate(0px, 0px)`;
                
                spark.style.opacity = '0';
                instruction.style.opacity = '1';
                instruction.style.transform = 'scale(1)';
                
                const mask = `radial-gradient(circle 0px at 50% 50%, black 0%, transparent 0%)`;
                cleanCar.style.webkitMaskImage = mask;
                cleanCar.style.maskImage = mask;
            };

            container.addEventListener('mouseenter', handleStart);
            container.addEventListener('mousemove', handleMove);
            container.addEventListener('mouseleave', handleEnd);

            container.addEventListener('touchstart', (e) => {
                const rect = container.getBoundingClientRect();
                targetX = e.touches[0].clientX - rect.left;
                targetY = e.touches[0].clientY - rect.top;
                currentX = targetX;
                currentY = targetY;
                handleStart();
            }, { passive: false });
            
            container.addEventListener('touchmove', handleMove, { passive: false });
            container.addEventListener('touchend', handleEnd);
            container.addEventListener('touchcancel', handleEnd);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-[-1]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg tracking-tighter font-medium text-zinc-50 hover:opacity-80 transition-opacity" href="#hero">AURA</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-400">
<a className="hover:text-zinc-50 transition-colors" href="#services">Services</a>
<a className="hover:text-zinc-50 transition-colors" href="#technology">Technology</a>
<a className="hover:text-zinc-50 transition-colors" href="#gallery">Gallery</a>
</div>
<a className="px-4 py-2 rounded-full bg-zinc-50 text-zinc-950 text-xs font-medium hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all duration-300" href="#booking">
                Book Consultation
            </a>
</div>
</nav>

<main className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden" id="hero">
<div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle at center, black, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'}}></div>
<div className="max-w-4xl mx-auto text-center relative z-10 mb-16 reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 hover:bg-white/10 transition-colors cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-slow" style={{boxShadow: '0 0 12px rgba(96,165,250,0.8)'}}></span>
<span className="text-xs font-normal text-zinc-300 tracking-wide uppercase">Next-Generation Auto Care</span>
</div>
<h1 className="text-4xl md:text-7xl tracking-tight font-medium text-zinc-50 mb-6 leading-[1.1]">
                Flawless precision. <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700">Uncompromising quality.</span>
</h1>
<p className="text-sm md:text-base text-zinc-400 font-normal max-w-xl mx-auto leading-relaxed mb-8">
                Experience the pinnacle of automotive restoration. Our advanced molecular bonding and meticulous correction techniques bring your vehicle back to absolute perfection.
            </p>
<div className="flex items-center justify-center gap-4">
<a className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-zinc-50 text-sm font-medium hover:bg-white/10 transition-colors backdrop-blur-sm" href="#services">
                    Explore Services
                </a>
</div>
</div>

<div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-2xl border border-white/10 bg-zinc-900/40 overflow-hidden cursor-crosshair group shadow-2xl shadow-black/50 reveal animate-float" id="car-container" style={{transformStyle: 'preserve-3d', transform: 'perspective(1000px)'}}>
<img alt="Vehicle Before" className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-1000 ease-out" id="dirty-car" src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&amp;fit=crop&amp;q=80&amp;w=1920" style={{filter: 'sepia(0.5) brightness(0.4) contrast(0.9) blur(0.5px)'}}/>
<img alt="Vehicle After" className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-1000 ease-out z-10" id="clean-car" src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&amp;fit=crop&amp;q=80&amp;w=1920" style={{WebkitMaskImage: 'radial-gradient(circle 0px at 50% 50%, black 0%, transparent 0%)', maskImage: 'radial-gradient(circle 0px at 50% 50%, black 0%, transparent 0%)', filter: 'contrast(1.15) brightness(1.1) saturate(1.2)'}}/>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 z-20 bg-zinc-950/20" id="instruction">
<div className="flex flex-col items-center gap-3">
<div className="w-12 h-12 rounded-full border border-white/20 bg-zinc-950/80 backdrop-blur-md flex items-center justify-center text-white/70 animate-bounce shadow-[0_0_30px_rgba(255,255,255,0.1)]">
<iconify-icon height="24" icon="solar:cursor-swipe-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-300 tracking-widest uppercase drop-shadow-md">
                        Drag to Reveal
                    </span>
</div>
</div>
<div className="absolute w-64 h-64 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 transition-opacity duration-300 z-30" id="spark" style={{background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%)', mixBlendMode: 'screen'}}></div>
</div>
</main>

<section className="py-32 px-6 relative bg-zinc-950" id="services">

<div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
<div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-zinc-800/10 rounded-full blur-[150px]"></div>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-zinc-50 mb-4">Comprehensive Care</h2>
<p className="text-sm text-zinc-400 font-normal max-w-md leading-relaxed">From molecular surface protection to deep material restoration, our full suite of services ensures every inch of your vehicle achieves absolute perfection.</p>
</div>
<a className="inline-flex items-center gap-2 text-xs font-medium text-zinc-300 hover:text-white transition-colors group" href="#booking">
                    Schedule service <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="service-card-wrapper w-full h-[400px] rounded-2xl cursor-pointer group reveal">
<div className="service-card-inner relative w-full h-full rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl">
<img alt="Paint Correction" className="service-card-bg absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
<div className="service-card-content absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
<div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center mb-6 text-zinc-100 shadow-inner">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-zinc-50 mb-3 drop-shadow-md">Paint Correction</h3>
<p className="text-sm text-zinc-300 font-normal leading-relaxed drop-shadow-md">Multi-stage machine polishing permanently removes swirl marks, scratches, and oxidation to restore a flawless, mirror-like finish.</p>
</div>
</div>
</div>

<div className="service-card-wrapper w-full h-[400px] rounded-2xl cursor-pointer group reveal" style={{transitionDelay: '100ms'}}>
<div className="service-card-inner relative w-full h-full rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl">
<img alt="Ceramic Coating" className="service-card-bg absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" src="https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
<div className="service-card-content absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
<div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center mb-6 text-zinc-100 shadow-inner">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-zinc-50 mb-3 drop-shadow-md">Ceramic Coating</h3>
<p className="text-sm text-zinc-300 font-normal leading-relaxed drop-shadow-md">Professional-grade 9H ceramic matrix bonding to the clear coat, providing years of hydrophobic protection, intense gloss, and chemical resistance.</p>
</div>
</div>
</div>

<div className="service-card-wrapper w-full h-[400px] rounded-2xl cursor-pointer group reveal" style={{transitionDelay: '200ms'}}>
<div className="service-card-inner relative w-full h-full rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl">
<img alt="Interior Restoration" className="service-card-bg absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
<div className="service-card-content absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
<div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center mb-6 text-zinc-100 shadow-inner">
<iconify-icon icon="solar:sofa-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-zinc-50 mb-3 drop-shadow-md">Interior Restoration</h3>
<p className="text-sm text-zinc-300 font-normal leading-relaxed drop-shadow-md">Deep extraction and UV conditioning of all surfaces. Leather, alcantara, and precise instrumentation are meticulously revitalized.</p>
</div>
</div>
</div>

<div className="service-card-wrapper w-full h-[400px] rounded-2xl cursor-pointer group reveal">
<div className="service-card-inner relative w-full h-full rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl">
<img alt="Paint Protection Film" className="service-card-bg absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
<div className="service-card-content absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
<div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center mb-6 text-zinc-100 shadow-inner">
<iconify-icon icon="solar:layers-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-zinc-50 mb-3 drop-shadow-md">Paint Protection Film</h3>
<p className="text-sm text-zinc-300 font-normal leading-relaxed drop-shadow-md">Self-healing, optically clear urethane film precision-cut to protect high-impact areas from rock chips, road debris, and physical abrasion.</p>
</div>
</div>
</div>

<div className="service-card-wrapper w-full h-[400px] rounded-2xl cursor-pointer group reveal" style={{transitionDelay: '100ms'}}>
<div className="service-card-inner relative w-full h-full rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl">
<img alt="Engine Bay Detailing" className="service-card-bg absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
<div className="service-card-content absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
<div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center mb-6 text-zinc-100 shadow-inner">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-zinc-50 mb-3 drop-shadow-md">Engine Bay Preservation</h3>
<p className="text-sm text-zinc-300 font-normal leading-relaxed drop-shadow-md">Safe, meticulous degreasing and high-heat dressing application, restoring engine components to factory-new appearance while protecting seals.</p>
</div>
</div>
</div>

<div className="service-card-wrapper w-full h-[400px] rounded-2xl cursor-pointer group reveal" style={{transitionDelay: '200ms'}}>
<div className="service-card-inner relative w-full h-full rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl">
<img alt="Window Tinting" className="service-card-bg absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
<div className="service-card-content absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
<div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center mb-6 text-zinc-100 shadow-inner">
<iconify-icon icon="solar:sun-fog-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-zinc-50 mb-3 drop-shadow-md">Ceramic Window Tint</h3>
<p className="text-sm text-zinc-300 font-normal leading-relaxed drop-shadow-md">Advanced nano-ceramic tinting technology that blocks 99% of UV rays and deeply rejects infrared heat, ensuring comfort and privacy.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 bg-zinc-950 relative overflow-hidden" id="technology">
<div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-zinc-800/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-zinc-50 mb-4">Driven by Technology</h2>
<p className="text-sm text-zinc-400 font-normal">We utilize industry-leading tools and proprietary chemical formulations to achieve results that traditional methods cannot match.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">

<div className="md:col-span-2 rounded-2xl bg-zinc-900/50 border border-white/5 p-8 relative overflow-hidden group reveal animate-float" style={{animationDelay: '0s'}}>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&amp;fit=crop&amp;q=80&amp;w=800')] bg-cover bg-center opacity-10 mix-blend-luminosity group-hover:opacity-20 group-hover:scale-105 transition-all duration-700"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<iconify-icon className="text-zinc-300" icon="solar:atom-linear" width="28"></iconify-icon>
<div>
<h3 className="text-xl tracking-tight font-medium text-zinc-100 mb-2">Molecular Bonding</h3>
<p className="text-sm text-zinc-400">Our coatings cross-link with the clear coat at a microscopic level for ultimate durability.</p>
</div>
</div>
</div>

<div className="md:col-span-1 rounded-2xl bg-zinc-900/50 border border-white/5 p-8 relative overflow-hidden group reveal animate-float" style={{animationDelay: '1s'}}>
<div className="relative z-10 flex flex-col h-full justify-between">
<iconify-icon className="text-zinc-300" icon="solar:sun-linear" width="28"></iconify-icon>
<div>
<h3 className="text-base tracking-tight font-medium text-zinc-100 mb-2">IR Curing</h3>
<p className="text-xs text-zinc-400">Short-wave infrared baking for maximum matrix hardness.</p>
</div>
</div>
</div>

<div className="md:col-span-1 rounded-2xl bg-zinc-900/50 border border-white/5 p-8 relative overflow-hidden group reveal animate-float" style={{animationDelay: '2s'}}>
<div className="relative z-10 flex flex-col h-full justify-between">
<iconify-icon className="text-zinc-300" icon="solar:camera-minimalistic-linear" width="28"></iconify-icon>
<div>
<h3 className="text-base tracking-tight font-medium text-zinc-100 mb-2">Defect Mapping</h3>
<p className="text-xs text-zinc-400">LED spectrum analysis to identify micro-marring perfectly.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-zinc-950 relative" id="gallery">
<div className="max-w-7xl mx-auto px-6 mb-12 reveal">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-zinc-50 mb-4">Recent Commissions</h2>
<p className="text-sm text-zinc-400 font-normal">A curated selection of our finest restoration work.</p>
</div>
<div className="flex overflow-x-auto gap-6 px-6 pb-8 snap-x snap-mandatory no-scrollbar reveal">
<div className="min-w-[85vw] md:min-w-[600px] h-[400px] snap-center rounded-2xl overflow-hidden relative group shrink-0 shadow-xl">
<img alt="Gallery Image 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1543465077-db45d34b88a5?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<span className="text-sm font-medium text-white tracking-wide">Porsche 911 GT3 RS · Full PPF</span>
</div>
</div>
<div className="min-w-[85vw] md:min-w-[600px] h-[400px] snap-center rounded-2xl overflow-hidden relative group shrink-0 shadow-xl">
<img alt="Gallery Image 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1619551734325-81aaf323686c?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<span className="text-sm font-medium text-white tracking-wide">McLaren 720S · Stage 3 Correction</span>
</div>
</div>
<div className="min-w-[85vw] md:min-w-[600px] h-[400px] snap-center rounded-2xl overflow-hidden relative group shrink-0 shadow-xl">
<img alt="Gallery Image 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<span className="text-sm font-medium text-white tracking-wide">BMW M4 Competition · Ceramic Matrix</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 bg-zinc-900/20 relative overflow-hidden" id="booking">
<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-zinc-800/30 rounded-full blur-[120px]"></div>
<div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-zinc-800/20 rounded-full blur-[120px]"></div>
</div>
<div className="max-w-3xl mx-auto relative z-10 text-center reveal">
<h2 className="text-3xl md:text-5xl tracking-tight font-medium text-zinc-50 mb-6">Ready for perfection?</h2>
<p className="text-sm md:text-base text-zinc-400 font-normal mb-10 max-w-xl mx-auto">Join our exclusive clientele and give your vehicle the meticulous attention it deserves. Secure your consultation today.</p>
<form className="flex flex-col md:flex-row gap-3 max-w-md mx-auto" onsubmit="event.preventDefault(); alert('Booking request sent!');">
<input className="flex-1 px-5 py-3 rounded-xl bg-zinc-950/50 border border-white/10 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all backdrop-blur-sm shadow-inner" placeholder="Enter your email" required="" type="email"/>
<button className="px-6 py-3 rounded-xl bg-zinc-50 text-zinc-950 text-sm font-medium hover:bg-zinc-200 active:scale-[0.98] transition-all whitespace-nowrap shadow-lg" type="submit">
                    Request Booking
                </button>
</form>
<p className="text-xs text-zinc-600 mt-6">Typically responds within 24 hours.</p>
</div>
</section>

<section className="py-20 px-6 border-t border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-around gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/10 reveal">
<div className="w-full pt-8 md:pt-0 md:px-12 flex flex-col items-center md:items-start">
<span className="text-3xl tracking-tight font-medium text-zinc-50 mb-2">10+</span>
<span className="text-xs text-zinc-500 font-normal uppercase tracking-wide">Years Experience</span>
</div>
<div className="w-full pt-8 md:pt-0 md:px-12 flex flex-col items-center md:items-start">
<span className="text-3xl tracking-tight font-medium text-zinc-50 mb-2">5.0</span>
<span className="text-xs text-zinc-500 font-normal uppercase tracking-wide">Average Rating</span>
</div>
<div className="w-full pt-8 md:pt-0 md:px-12 flex flex-col items-center md:items-start">
<span className="text-3xl tracking-tight font-medium text-zinc-50 mb-2">100%</span>
<span className="text-xs text-zinc-500 font-normal uppercase tracking-wide">Satisfaction</span>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<a className="text-sm tracking-tighter font-medium text-zinc-50 hover:opacity-80 transition-opacity" href="#hero">AURA</a>
<div className="flex items-center gap-6 text-xs text-zinc-500 font-normal">
<a className="hover:text-zinc-300 transition-colors" href="#">Instagram</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Twitter</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a>
</div>
<span className="text-xs text-zinc-600 font-normal">© 2024 Aura Detailing. All rights reserved.</span>
</div>
</footer>



    </>
  );
}
