import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Set current year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Mouse Glow Effect
        const cursorGlow = document.getElementById('cursor-glow');
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Subtle change in glow opacity based on movement
            cursorGlow.style.background = `radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, transparent 70%)`;
            clearTimeout(window.glowTimeout);
            window.glowTimeout = setTimeout(() => {
                cursorGlow.style.background = `radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)`;
            }, 150);
        });

        // Smooth follow
        function animateGlow() {
            const currentX = parseFloat(cursorGlow.style.left) || window.innerWidth / 2;
            const currentY = parseFloat(cursorGlow.style.top) || window.innerHeight / 2;
            
            // Easing
            const dx = mouseX - currentX;
            const dy = mouseY - currentY;
            
            cursorGlow.style.left = currentX + dx * 0.1 + 'px';
            cursorGlow.style.top = currentY + dy * 0.1 + 'px';
            
            requestAnimationFrame(animateGlow);
        }
        animateGlow();

        // Scroll Reveal logic
        const reveals = document.querySelectorAll('.reveal');
        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealOnScroll = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        reveals.forEach(reveal => {
            revealOnScroll.observe(reveal);
        });

        // Interactive Cards (Subtle Tilt)
        const tiltCards = document.querySelectorAll('[data-tilt]');
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -5; // Max rotation 5deg
                const rotateY = ((x - centerX) / centerX) * 5;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            });
        });

        // Bilingual System (EN/PT)
        const translations = {
            en: {
                system_status: "System Online",
                hero_text: "I build systems that transform ideas into reality.",
                scroll_prompt: "Scroll to initialize",
                section_identity: "Identity",
                identity_title: "Technology Builder. System Thinker. Creator of physical and digital experiences.",
                identity_desc: "It is not just about writing code. It is about architectural fusion—software, hardware, and human interaction merging into scalable infrastructures designed for real-world impact.",
                section_systems: "Modules",
                sys_purple: "Digital engineering, SaaS platforms, and resilient cloud systems designed for absolute scale and performance.",
                sys_lokk: "Smart lockers, real-world interfaces, and connected environments bridging the physical and digital divide seamlessly.",
                cyber_title: "Security as structural foundation.",
                cyber_desc: "Security is not an afterthought; it is embedded in the architecture. Building with an ISO mindset, focusing on resilience, threat awareness, and robust infrastructure capable of withstanding the complexities of the modern digital landscape.",
                section_thinking: "Operating Principles",
                th1: "Technology should be invisible.",
                th2: "Experience is everything.",
                th3: "Systems must scale, not just work.",
                th4: "The future is physical + digital combined.",
                th5: "Security is not optional, it's structural.",
                section_future: "Vision & Signals",
                future_desc: "Integrating intelligence into environments. Exploring robotics, spatial computing, and immersive systems to redefine human-machine interaction.",
                tag_robotics: "Robotics & Immersive",
                contact_title: "Let's build something impossible.",
                btn_initiate: "Initiate Sequence",
                footer_rights: "ALL SYSTEMS OPERATIONAL."
            },
            pt: {
                system_status: "Sistema Online",
                hero_text: "Construo sistemas que transformam ideias em realidade.",
                scroll_prompt: "Deslize para iniciar",
                section_identity: "Identidade",
                identity_title: "Construtor de Tecnologia. Pensador de Sistemas. Criador de experiências físicas e digitais.",
                identity_desc: "Não se trata apenas de escrever código. Trata-se de fusão arquitetónica — software, hardware e interação humana a fundirem-se em infraestruturas escaláveis desenhadas para impacto no mundo real.",
                section_systems: "Módulos",
                sys_purple: "Engenharia digital, plataformas SaaS e sistemas cloud resilientes desenhados para escala e performance absolutas.",
                sys_lokk: "Cacifos inteligentes, interfaces no mundo real e ambientes conectados unindo o físico e o digital de forma fluida.",
                cyber_title: "Segurança como fundação estrutural.",
                cyber_desc: "A segurança não é um extra; está embutida na arquitetura. Construir com uma mentalidade ISO, focado na resiliência, consciência de ameaças e infraestrutura robusta capaz de resistir às complexidades do cenário digital moderno.",
                section_thinking: "Princípios de Operação",
                th1: "A tecnologia deve ser invisível.",
                th2: "A experiência é tudo.",
                th3: "Sistemas devem escalar, não apenas funcionar.",
                th4: "O futuro é a combinação do físico + digital.",
                th5: "A segurança não é opcional, é estrutural.",
                section_future: "Visão & Sinais",
                future_desc: "A integrar inteligência em ambientes. A explorar robótica, computação espacial e sistemas imersivos para redefinir a interação humano-máquina.",
                tag_robotics: "Robótica & Imersivo",
                contact_title: "Vamos construir algo impossível.",
                btn_initiate: "Iniciar Sequência",
                footer_rights: "TODOS OS SISTEMAS OPERACIONAIS."
            }
        };

        let currentLanguage = 'en';
        const langToggleBtn = document.getElementById('langToggle');
        const langLabel = document.getElementById('currentLang');

        function updateLanguage(lang) {
            const elements = document.querySelectorAll('[data-i18n]');
            
            // Simple fade out/in effect for text transition
            elements.forEach(el => {
                el.style.opacity = 0;
                el.style.transition = "opacity 0.3s ease";
            });

            setTimeout(() => {
                elements.forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    if (translations[lang][key]) {
                        // Check if it's the hero text or btn to preserve inner HTML structure if needed
                        if(key === 'btn_initiate') {
                             el.innerHTML = `${translations[lang][key]} <iconify-icon icon="solar:arrow-right-linear" stroke-width="1.5" class="group-hover:translate-x-1 transition-transform"></iconify-icon>`;
                        } else if (key === 'system_status') {
                             el.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span> ${translations[lang][key]}`;
                        } else {
                            el.textContent = translations[lang][key];
                        }
                    }
                    el.style.opacity = 1;
                });
                langLabel.textContent = lang.toUpperCase();
                document.documentElement.lang = lang;
            }, 300);
        }

        langToggleBtn.addEventListener('click', () => {
            currentLanguage = currentLanguage === 'en' ? 'pt' : 'en';
            updateLanguage(currentLanguage);
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-grid"></div>
<div id="cursor-glow"></div>

<header className="fixed top-0 w-full z-50 mix-blend-difference p-6 flex justify-between items-center">
<div className="text-xl font-medium tracking-tighter cursor-pointer hover:opacity-70 transition-opacity">RP</div>
<div className="flex gap-4 items-center">
<button className="text-xs font-medium tracking-widest uppercase text-slate-400 hover:text-white transition-colors flex items-center gap-1" id="langToggle">
<span id="currentLang">EN</span>
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</header>
<main className="flex flex-col">

<section className="min-h-screen flex flex-col justify-center items-center relative px-6 w-full max-w-7xl mx-auto">
<div className="w-full flex flex-col items-start reveal">
<p className="text-sm font-medium tracking-widest uppercase text-cyan-400/70 mb-6 flex items-center gap-2" data-i18n="system_status">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    System Online
                </p>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-tight max-w-5xl text-gradient" data-i18n="hero_text">
                    I build systems that transform ideas into reality.
                </h1>
</div>
<div className="absolute bottom-10 left-6 right-6 flex justify-between items-end text-slate-500 text-xs font-medium tracking-widest uppercase reveal" style={{transitionDelay: '0.5s'}}>
<span data-i18n="scroll_prompt">Scroll to initialize</span>
<span>[ RP_OS v1.0 ]</span>
</div>
</section>

<section className="min-h-screen flex items-center px-6 w-full max-w-7xl mx-auto py-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
<div className="lg:col-span-4 reveal">
<h2 className="text-xs font-medium tracking-widest uppercase text-slate-500 mb-4" data-i18n="section_identity">Identity</h2>
</div>
<div className="lg:col-span-8 space-y-8 reveal" style={{transitionDelay: '0.2s'}}>
<h3 className="text-3xl md:text-4xl font-light tracking-tight text-white" data-i18n="identity_title">
                        Technology Builder. System Thinker. Creator of physical and digital experiences.
                    </h3>
<div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent"></div>
<p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl" data-i18n="identity_desc">
                        It is not just about writing code. It is about architectural fusion—software, hardware, and human interaction merging into scalable infrastructures designed for real-world impact.
                    </p>
</div>
</div>
</section>

<section className="min-h-screen flex items-center px-6 w-full max-w-7xl mx-auto py-24">
<div className="w-full">
<div className="reveal mb-16">
<h2 className="text-xs font-medium tracking-widest uppercase text-slate-500" data-i18n="section_systems">Modules</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">

<div className="glass-panel p-8 md:p-12 rounded-2xl reveal group transition-all duration-700 relative overflow-hidden" data-tilt="">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500 text-purple-400">
<iconify-icon icon="solar:server-square-cloud-linear" strokeWidth="1.5" width="2rem"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-normal tracking-tight mb-4 text-white">Purple Profile</h3>
<p className="text-slate-400 font-light leading-relaxed" data-i18n="sys_purple">
                            Digital engineering, SaaS platforms, and resilient cloud systems designed for absolute scale and performance.
                        </p>
</div>

<div className="glass-panel p-8 md:p-12 rounded-2xl reveal group transition-all duration-700 relative overflow-hidden" data-tilt="" style={{transitionDelay: '0.2s'}}>
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500 text-emerald-400">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="2rem"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-normal tracking-tight mb-4 text-white">Lokk</h3>
<p className="text-slate-400 font-light leading-relaxed" data-i18n="sys_lokk">
                            Smart lockers, real-world interfaces, and connected environments bridging the physical and digital divide seamlessly.
                        </p>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex items-center px-6 w-full max-w-7xl mx-auto py-24 relative">

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent -z-10"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
<div className="lg:col-span-5 reveal flex flex-col justify-center">
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center mb-8 text-cyan-400">
<iconify-icon icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="2rem"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-light tracking-tighter text-white mb-6" data-i18n="cyber_title">
                        Security as structural foundation.
                    </h2>
</div>
<div className="lg:col-span-7 reveal flex items-center" style={{transitionDelay: '0.2s'}}>
<p className="text-lg md:text-2xl text-slate-400 font-light leading-relaxed" data-i18n="cyber_desc">
                        Security is not an afterthought; it is embedded in the architecture. Building with an ISO mindset, focusing on resilience, threat awareness, and robust infrastructure capable of withstanding the complexities of the modern digital landscape.
                    </p>
</div>
</div>
</section>

<section className="min-h-screen flex items-center px-6 w-full max-w-7xl mx-auto py-24">
<div className="w-full">
<div className="reveal mb-16">
<h2 className="text-xs font-medium tracking-widest uppercase text-slate-500" data-i18n="section_thinking">Operating Principles</h2>
</div>
<div className="flex flex-col gap-8 md:gap-12">
<div className="reveal border-l border-white/10 pl-6 md:pl-10 py-2 hover:border-cyan-400/50 transition-colors duration-500">
<h3 className="text-2xl md:text-4xl font-light tracking-tight text-white" data-i18n="th1">Technology should be invisible.</h3>
</div>
<div className="reveal border-l border-white/10 pl-6 md:pl-10 py-2 hover:border-cyan-400/50 transition-colors duration-500" style={{transitionDelay: '0.1s'}}>
<h3 className="text-2xl md:text-4xl font-light tracking-tight text-white" data-i18n="th2">Experience is everything.</h3>
</div>
<div className="reveal border-l border-white/10 pl-6 md:pl-10 py-2 hover:border-cyan-400/50 transition-colors duration-500" style={{transitionDelay: '0.2s'}}>
<h3 className="text-2xl md:text-4xl font-light tracking-tight text-white" data-i18n="th3">Systems must scale, not just work.</h3>
</div>
<div className="reveal border-l border-white/10 pl-6 md:pl-10 py-2 hover:border-cyan-400/50 transition-colors duration-500" style={{transitionDelay: '0.3s'}}>
<h3 className="text-2xl md:text-4xl font-light tracking-tight text-white" data-i18n="th4">The future is physical + digital combined.</h3>
</div>
<div className="reveal border-l border-white/10 pl-6 md:pl-10 py-2 hover:border-cyan-400/50 transition-colors duration-500" style={{transitionDelay: '0.4s'}}>
<h3 className="text-2xl md:text-4xl font-light tracking-tight text-white" data-i18n="th5">Security is not optional, it's structural.</h3>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex items-center justify-center px-6 w-full max-w-7xl mx-auto py-24 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-900/20 blur-[100px] rounded-full -z-10"></div>
<div className="text-center max-w-4xl reveal">
<h2 className="text-xs font-medium tracking-widest uppercase text-slate-500 mb-8" data-i18n="section_future">Vision &amp; Signals</h2>
<p className="text-2xl md:text-4xl font-light tracking-tight text-white leading-snug mb-12" data-i18n="future_desc">
                    Integrating intelligence into environments. Exploring robotics, spatial computing, and immersive systems to redefine human-machine interaction.
                </p>
<div className="flex flex-wrap justify-center gap-4 text-xs font-medium tracking-widest text-slate-400 uppercase">
<span className="glass-panel px-4 py-2 rounded-full">PY Interactive</span>
<span className="glass-panel px-4 py-2 rounded-full">SCI Vila Real</span>
<span className="glass-panel px-4 py-2 rounded-full" data-i18n="tag_robotics">Robotics &amp; Immersive</span>
</div>
</div>
</section>

<section className="min-h-screen flex flex-col items-center justify-center px-6 w-full max-w-7xl mx-auto py-24 text-center">
<div className="reveal flex flex-col items-center">
<h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-12" data-i18n="contact_title">
                    Let's build something impossible.
                </h2>
<a className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-sm tracking-widest uppercase text-white overflow-hidden rounded-full glass-panel hover:bg-white/10 transition-all duration-300" href="mailto:contact@romeupacheco.com">
<span className="relative z-10 flex items-center gap-3" data-i18n="btn_initiate">
                        Initiate Sequence
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</a>
</div>
<div className="absolute bottom-10 text-xs font-medium tracking-widest uppercase text-slate-600 reveal" style={{transitionDelay: '0.5s'}}>
                © <span id="year"></span> ROMEU PACHECO. <span data-i18n="footer_rights">ALL SYSTEMS OPERATIONAL.</span>
</div>
</section>
</main>


    </>
  );
}
