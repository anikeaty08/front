import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
        // Initialize ParticlesJS
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
            },
            retina_detect: true
        });

        const sections = document.querySelectorAll('.section');
        const dots = document.querySelectorAll('.progress-dot');
        const magneticElements = document.querySelectorAll('.magnetic');
        let currentIndex = 0;
        let isScrolling = false;
        let touchStartY = 0;
        
        // Initialize
        updateActiveDot(currentIndex);
        
        // Magnetic effect
        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0px, 0px)';
            });
        });
        
        // Scroll event
        window.addEventListener('wheel', (e) => {
            if (isScrolling) return;
            
            isScrolling = true;
            if (e.deltaY > 0) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Touch events
        document.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', (e) => {
            if (isScrolling) return;
            
            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY - touchEndY;
            
            isScrolling = true;
            if (diff > 50) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else if (diff < -50) {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Click on dots
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'));
                currentIndex = index;
                changeSection(currentIndex);
            });
        });
        
        function changeSection(index) {
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            sections[index].classList.add('active');
            updateActiveDot(index);
            
            const reveals = sections[index].querySelectorAll('.reveal');
            reveals.forEach((el, i) => {
                setTimeout(() => {
                    el.classList.add('active');
                }, i * 150);
            });
            
            sections.forEach((section, i) => {
                if (i !== index) {
                    const otherReveals = section.querySelectorAll('.reveal');
                    otherReveals.forEach(el => {
                        el.classList.remove('active');
                    });
                }
            });
        }
        
        function updateActiveDot(index) {
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            dots[index].classList.add('active');
        }
    });



        // Initialize Icons
        lucide.createIcons();

        // Before/After Slider Logic
        function updateComparison(val) {
            const beforeImage = document.getElementById('before-image-wrapper');
            const handle = document.getElementById('slider-handle');
            const fixedImg = document.getElementById('before-img-fixed');
            const container = document.getElementById('slider-container');
            
            if(beforeImage) beforeImage.style.width = val + "%";
            if(handle) handle.style.left = val + "%";

            if(container && fixedImg) {
                fixedImg.style.width = container.offsetWidth + "px";
            }
        }

        window.addEventListener('load', () => {
            const container = document.getElementById('slider-container');
            const fixedImg = document.getElementById('before-img-fixed');
            if(container && fixedImg) {
                fixedImg.style.width = container.offsetWidth + "px";
            }
        });

        window.addEventListener('resize', () => {
            const container = document.getElementById('slider-container');
            const fixedImg = document.getElementById('before-img-fixed');
            if(container && fixedImg) {
                fixedImg.style.width = container.offsetWidth + "px";
            }
        });

        // ----------------------------------------------------
        // AURA TEXT EFFECT LOGIC
        // ----------------------------------------------------
        const auraContainer = document.getElementById('aura-text-area');
        const auraOverlay = document.getElementById('aura-overlay');

        if(auraContainer && auraOverlay) {
            auraContainer.addEventListener('mousemove', (e) => {
                const rect = auraContainer.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // O círculo de "luz" verde (150px de raio) segue o mouse
                auraOverlay.style.clipPath = `circle(120px at ${x}px ${y}px)`;
            });

            auraContainer.addEventListener('mouseleave', () => {
                // Quando sai, o círculo fecha suavemente
                auraOverlay.style.clipPath = `circle(0px at 50% 50%)`;
            });
        }

        // ----------------------------------------------------
        // TILT CARD LOGIC
        // ----------------------------------------------------
        document.addEventListener('DOMContentLoaded', () => {
            const tiltCard = document.getElementById('tilt-card');
            const tiltWrapper = tiltCard.parentElement;
            const shine = document.getElementById('card-shine');
            let isHovering = false;
            let currentScaleBase = 0.9;

            const handleScroll = () => {
                const rect = tiltWrapper.getBoundingClientRect();
                const viewHeight = window.innerHeight;
                let progress = 1 - (rect.top / (viewHeight * 0.8));
                if (progress < 0) progress = 0;
                
                let scale = 0.9 + (progress * 0.15);
                let opacity = 0.8 + (progress * 0.4);

                if (scale > 1) scale = 1;
                if (opacity > 1) opacity = 1;

                if (!isHovering) {
                    tiltCard.style.transform = `scale(${scale})`;
                    tiltCard.style.opacity = opacity;
                }
                currentScaleBase = scale;
            };

            window.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll();

            tiltWrapper.addEventListener('mousemove', (e) => {
                if (window.innerWidth < 768) return;
                isHovering = true;
                const rect = tiltCard.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const maxRotation = 5;
                const rotateX = ((y - centerY) / centerY) * -maxRotation;
                const rotateY = ((x - centerX) / centerX) * maxRotation;

                tiltCard.style.transform = `scale(${currentScaleBase}) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

                const shineOpacity = 0.1 + (Math.abs(rotateX) + Math.abs(rotateY)) / 20;
                shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2), transparent 60%)`;
                shine.style.opacity = shineOpacity;
            });

            tiltWrapper.addEventListener('mouseleave', () => {
                isHovering = false;
                tiltCard.style.transform = `scale(${currentScaleBase}) rotateX(0) rotateY(0)`;
                shine.style.opacity = 0;
            });
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute inset-0 -z-10" id="particles-js">


<canvas className="particles-js-canvas-el" height="871" style={{width: '100%', height: '100%'}} width="1417"></canvas></div></div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#69af38] rounded-full blur-[180px] opacity-5"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#2b93c9] rounded-full blur-[180px] opacity-5"></div>
<div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
</div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-6">
<div className="glass-panel rounded-full px-8 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#69af38] to-emerald-900 flex items-center justify-center text-white shadow-lg shadow-[#69af38]/20">
<svg aria-hidden="true" className="lucide lucide-gem w-5 h-5" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<span className="text-xl font-medium tracking-tight text-white">Celestia<span className="opacity-60 font-light">Smiles</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-[#69af38] transition-colors" href="#">Sobre Nós</a>
<a className="hover:text-[#69af38] transition-colors" href="#">Serviços</a>
<a className="hover:text-[#69af38] transition-colors" href="#">Dra. Souza</a>
<a className="hover:text-[#69af38] transition-colors" href="#">Histórias</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium hover:text-white transition-colors" href="#">Contato</a>
<button className="md:hidden text-white">
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<section className="relative z-10 min-h-screen pt-32 pb-20 flex flex-col justify-center max-w-7xl mx-auto px-6">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-5 z-0">
<h1 className="text-[12vw] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent leading-none">
                CELESTIA
            </h1>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
<div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">

<div className="aura-text-container">

<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] aura-text-base">
                        Nem todos os sorrisos precisam de conserto, alguns precisam de <span className="italic font-light">visão</span>.
                    </h1>

<h1 className="text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] aura-text-overlay" style={{clipPath: 'circle(0px at 50% 50%)'}}>
                        Nem todos os sorrisos precisam de conserto, alguns precisam de <span className="italic font-light">visão</span>.
                    </h1>
</div>
<p className="text-lg text-slate-400 font-light max-w-md leading-relaxed">
                    Um estúdio de ortodontia boutique liderado pela Dra. Laryssa Souza, criando sorrisos confiantes para quem não aceita nada menos que o extraordinário.
                </p>
</div>

<div className="lg:col-span-3 flex justify-center py-10 lg:py-0 relative order-1 lg:order-2 h-[400px] lg:h-[600px] items-center">
<div className="relative w-full h-full flex items-center justify-center">

<div className="absolute w-[250px] h-[250px] bg-[#69af38] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

<div className="relative z-20 w-full h-full flex items-center justify-center animate-reveal">

<img alt="Arte Conceitual Odontológica" className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{mixBlendMode: 'screen', filter: 'drop-shadow(rgba(105, 175, 56, 0.3) 0px 0px 30px)', maskImage: 'linear-gradient(black 80%, transparent 100%)'}}/>
</div>
</div>
</div>
<div className="lg:col-span-4 flex flex-col justify-end gap-8 text-right lg:pl-12 order-3">
<h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight">
                    Cuidado de luxo <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">personalizado</span>.
                </h2>
<div className="flex justify-end">
<button className="group relative px-8 py-4 rounded-full overflow-hidden glass-btn transition-all duration-300 hover:scale-105 active:scale-95">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative flex items-center gap-3 font-semibold text-white">
<svg aria-hidden="true" className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                            Agendar agora
                        </span>
</button>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-10 max-w-7xl mx-auto px-6 tilt-card-wrapper">
<div className="relative w-full rounded-[2.5rem] overflow-hidden min-h-[600px] flex flex-col justify-between p-8 md:p-16 border border-white/10 group transition-transform duration-100 ease-out origin-center" id="tilt-card" style={{transform: 'scale(1)', opacity: '1'}}>
<div className="absolute inset-0 z-0">
<img alt="Consultório Dentário" className="w-full h-full object-cover opacity-60 transition-transform duration-[2s] group-hover:scale-105" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2668&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#050505]/80 to-[#69af38]/30 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-[#050505]/40 backdrop-blur-[2px]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 transition-opacity duration-300 pointer-events-none mix-blend-overlay" id="card-shine"></div>
</div>
<div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-12 pointer-events-none">
<div className="max-w-3xl pointer-events-auto">
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-[1.05] mb-8 animate-reveal">
                        Revele a excelência.
                        Descubra a diferença
                        Celestia Smiles.
                    </h2>
<p className="text-lg md:text-2xl text-slate-200 font-light leading-relaxed max-w-2xl animate-reveal delay-100">
                        A Dra. Souza acredita que seu sorriso merece mais do que apenas cuidados – ele merece celebração. Experimente uma jornada de spa aliada à arte odontológica de ponta.
                    </p>
</div>
<div className="animate-reveal delay-200 pointer-events-auto">
<span className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-semibold tracking-widest uppercase text-white hover:bg-white/10 transition-colors cursor-default">
                        Filosofia
                    </span>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 max-w-7xl mx-auto px-6">
<div className="flex flex-col items-start mb-16">
<h3 className="text-[#69af38] uppercase tracking-widest text-xs font-semibold mb-3">Nossa Expertise</h3>
<h2 className="text-3xl lg:text-5xl font-medium text-white tracking-tight">Procedimentos de precisão</h2>
</div>
<div className="flex flex-col lg:flex-row h-[800px] lg:h-[500px] gap-4">

<div className="service-card group relative flex-1 hover:flex-[2.5] rounded-3xl overflow-hidden cursor-pointer border border-white/10">
<img alt="Lentes de Contato" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="w-12 h-12 rounded-xl bg-[#69af38]/20 flex items-center justify-center text-[#69af38] mb-4 backdrop-blur-md border border-[#69af38]/20">
<svg aria-hidden="true" className="lucide lucide-sparkles w-6 h-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Lentes de Porcelana</h3>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
<div className="overflow-hidden">
<div className="pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
<p className="text-slate-300 font-light leading-relaxed mb-6">
                                    Lâminas ultrafinas de porcelana personalizadas para redesenhar seu sorriso. Moldamos cada faceta meticulosamente para combinar com seus traços faciais.
                                </p>
<span className="text-[#69af38] text-sm font-medium flex items-center gap-2">Ver Tratamento <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</div>
</div>
</div>
</div>
</div>

<div className="service-card group relative flex-1 hover:flex-[2.5] rounded-3xl overflow-hidden cursor-pointer border border-white/10">
<img alt="Invisalign" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="w-12 h-12 rounded-xl bg-[#69af38]/20 flex items-center justify-center text-[#69af38] mb-4 backdrop-blur-md border border-[#69af38]/20">
<svg aria-hidden="true" className="lucide lucide-scan-face w-6 h-6" data-lucide="scan-face" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Invisalign &amp; Alinhadores</h3>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
<div className="overflow-hidden">
<div className="pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
<p className="text-slate-300 font-light leading-relaxed mb-6">
                                    Terapia de alinhamento discreta e confortável usando tecnologia de escaneamento 3D para prever seu sorriso perfeito.
                                </p>
<span className="text-[#69af38] text-sm font-medium flex items-center gap-2">Ver Tratamento <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</div>
</div>
</div>
</div>
</div>

<div className="service-card group relative flex-1 hover:flex-[2.5] rounded-3xl overflow-hidden cursor-pointer border border-white/10">
<img alt="Clareamento" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="w-12 h-12 rounded-xl bg-[#69af38]/20 flex items-center justify-center text-[#69af38] mb-4 backdrop-blur-md border border-[#69af38]/20">
<svg aria-hidden="true" className="lucide lucide-sun w-6 h-6" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Clareamento a Laser</h3>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
<div className="overflow-hidden">
<div className="pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
<p className="text-slate-300 font-light leading-relaxed mb-6">
                                    Resultados imediatos e brilhantes usando tecnologia laser avançada. Nosso protocolo especializado minimiza a sensibilidade.
                                </p>
<span className="text-[#69af38] text-sm font-medium flex items-center gap-2">Ver Tratamento <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 border-t border-white/5 bg-[#080808]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#69af38]/30 bg-[#69af38]/10 text-[#69af38] text-xs font-semibold uppercase tracking-wider mb-6">
<span className="w-2 h-2 rounded-full bg-[#69af38] animate-pulse"></span>
                        Histórias de Clientes
                    </div>
<h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight mb-8">
                        Histórias reais, <span className="text-slate-500">transformações reais</span>
</h2>
<div className="relative pl-8 border-l border-white/10">
<div className="mb-10">
<h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Antes do Tratamento</h4>
<p className="text-xl text-slate-400 font-light italic leading-relaxed">
                                "Passei anos escondendo meu riso atrás da mão. O espaço entre meus dentes me deixava insegura em todas as reuniões, e eu sentia que não estava projetando meu verdadeiro eu."
                            </p>
</div>
<div className="">
<h4 className="text-xs font-bold text-[#69af38] uppercase tracking-widest mb-2">Depois da Dra. Souza</h4>
<p className="text-2xl text-white font-medium italic leading-relaxed">
                                "Agora, não consigo parar de sorrir. A mudança de confiança foi imediata. Me sinto radiante, profissional e finalmente confortável na minha própria pele."
                            </p>
</div>
</div>
<div className="mt-12 flex items-center gap-4 text-sm font-medium text-slate-500">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-mouse-pointer-2 w-4 h-4 text-white" data-lucide="mouse-pointer-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path></svg>
</div>
                        Arraste o slider para ver a diferença
                    </div>
</div>
<div className="order-1 lg:order-2 relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group select-none">
<div className="relative w-full h-full" id="slider-container">
<img alt="Depois do tratamento" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/beb02b96-73a0-447c-9713-d3cfb0a6a2b3_3840w.png"/>
<div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#69af38] border border-[#69af38]/30">DEPOIS</div>
<div className="absolute inset-0 w-[50%] overflow-hidden border-r border-white/50" id="before-image-wrapper">
<img className="absolute inset-0 w-full h-full object-cover max-w-none" id="before-img-fixed" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ff6d160-bef0-4fb2-b9e4-f25dc7d790c2_3840w.png" style={{width: '582px'}}/>
<div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10">ANTES</div>
<div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
</div>
<div className="absolute inset-y-0 left-[50%] w-10 -ml-5 flex items-center justify-center pointer-events-none z-20" id="slider-handle">
<div className="w-1 h-full bg-white/40 backdrop-blur-sm"></div>
<div className="absolute w-10 h-10 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center cursor-ew-resize transform transition-transform group-hover:scale-110">
<svg aria-hidden="true" className="lucide lucide-arrow-left-right w-4 h-4 text-black" data-lucide="arrow-left-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>
</div>
</div>
<input className="cursor-ew-resize opacity-0 w-full h-full z-30 absolute top-0 right-0 bottom-0 left-0" id="comparison-range" max="100" min="0" oninput="updateComparison(this.value)" type="range" value="50"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-[#050505] overflow-hidden">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#69af38] rounded-full blur-[200px] opacity-[0.03] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16">
<h2 className="text-4xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-4">
                    Conheça a mente 
                    <span className="text-slate-500">por trás do seu sorriso</span>
</h2>
<div className="w-20 h-1 bg-[#69af38] rounded-full opacity-50"></div>
</div>
<div className="glass-panel rounded-[3rem] p-8 md:p-12 border border-white/5 relative overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-5 relative group">
<div className="absolute inset-0 bg-[#69af38] rounded-[2rem] blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
<div className="relative rounded-[2rem] overflow-hidden aspect-[4/5]">
<img alt="Dra. Laryssa Souza" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 right-6 glass-panel-strong p-4 rounded-xl flex items-center justify-between">
<div>
<p className="text-white font-medium">Dra. Laryssa Souza</p>
<p className="text-xs text-[#69af38] uppercase tracking-wider font-bold">Especialista Principal</p>
</div>
<div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-award w-5 h-5" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
</div>
</div>
</div>
<div className="md:col-span-7 flex flex-col gap-8">
<div>
<span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400 mb-4">Atuando desde 2018</span>
<h3 className="text-3xl lg:text-5xl font-medium text-white mb-6">Precisão encontra a <span className="italic text-[#69af38] font-serif">arte</span>.</h3>
<p className="text-lg text-slate-400 font-light leading-relaxed mb-6">
                                A Dra. Laryssa Souza fundou a Celestia Smiles com uma visão singular: preencher a lacuna entre a ortodontia clínica e a estética facial. Com mais de 6 anos de experiência especializada, ela foi pioneira em uma abordagem "face-first" na odontologia.
                            </p>
</div>
<div className="flex gap-4 mt-4">
<button className="px-8 py-3 bg-[#69af38] hover:bg-[#5a9632] text-black font-semibold rounded-full transition-colors">
                                Agendar Consulta
                            </button>
<button className="px-8 py-3 border border-white/20 hover:bg-white/5 text-white font-medium rounded-full transition-colors">
                                Ler Bio Completa
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6">
<div className="glass-panel rounded-[2.5rem] p-2 overflow-hidden border border-white/10">
<div className="grid grid-cols-1 lg:grid-cols-12 bg-black rounded-[2rem] overflow-hidden">

<div className="lg:col-span-4 p-10 flex flex-col justify-between h-full bg-gradient-to-b from-white/5 to-transparent">
<div>
<div className="inline-flex items-center gap-2 mb-8 text-[#69af38]">
<svg aria-hidden="true" className="lucide lucide-map-pin w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-xs font-bold uppercase tracking-widest">Localização</span>
</div>
<h3 className="text-3xl font-medium text-white mb-6">Visite nosso espaço exclusivo.</h3>
<p className="text-slate-400 font-light leading-relaxed mb-8">
                                Localizado no coração de São Paulo, nosso consultório foi desenhado para ser um oásis de tranquilidade em meio à cidade.
                            </p>
<div className="space-y-4 text-sm text-slate-300">
<p className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#69af38]"></span>
                                    Av. Paulista, 1000 - Jardins
                                </p>
<p className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#69af38]"></span>
                                    São Paulo - SP, 01310-100
                                </p>
</div>
</div>
<div className="mt-12">
<a className="flex items-center justify-center w-full py-4 rounded-xl bg-white text-black font-semibold hover:bg-[#69af38] transition-colors gap-2" href="https://maps.app.goo.gl/HY1DKuNGFczkbMdr9" target="_blank">
<svg aria-hidden="true" className="lucide lucide-navigation w-4 h-4" data-lucide="navigation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                                Traçar Rota no Google Maps
                            </a>
</div>
</div>

<div className="lg:col-span-8 h-[400px] lg:h-auto relative bg-[#111]">

<iframe allowfullscreen="" className="map-dark-mode w-full h-full grayscale opacity-80 hover:opacity-100 transition-opacity duration-500" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975762886475!2d-46.65215758502223!3d-23.56396448468164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1709228392123!5m2!1spt-BR!2sbr" style={{border: '0'}} width="100%">
</iframe>

<div className="absolute inset-0 pointer-events-none bg-gradient-to-l from-transparent via-transparent to-black/50 lg:to-black/80"></div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/10 bg-black pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-lg bg-[#69af38] flex items-center justify-center text-white">
<svg aria-hidden="true" className="lucide lucide-gem w-4 h-4" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<span className="text-xl font-medium text-white tracking-tight">Celestia</span>
</div>
<p className="text-slate-500 max-w-xs font-light">
                        Redefinindo a odontologia moderna através do design, tecnologia e cuidado compassivo.
                    </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12">
<div>
<h4 className="text-white font-medium mb-4">Mapa do Site</h4>
<ul className="space-y-3 text-slate-500 font-light text-sm">
<li><a className="hover:text-[#69af38] transition-colors" href="#">Início</a></li>
<li><a className="hover:text-[#69af38] transition-colors" href="#">Sobre</a></li>
<li><a className="hover:text-[#69af38] transition-colors" href="#">Serviços</a></li>
<li><a className="hover:text-[#69af38] transition-colors" href="#">Contato</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="text-white font-medium mb-4">Visite-nos</h4>
<p className="text-slate-500 font-light text-sm">
                             Av. Paulista, 1000 - Sala 400<br/>
                             Jardins, São Paulo - SP
                         </p>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-slate-600 font-light">
<p>© 2024 Celestia Smiles. Todos os direitos reservados.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-400" href="#">Política de Privacidade</a>
<a className="hover:text-slate-400" href="#">Termos de Serviço</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
