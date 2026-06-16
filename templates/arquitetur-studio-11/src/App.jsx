import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Custom Cursor Logic
        const cursor = document.getElementById('cursor');
        const follower = document.getElementById('cursor-follower');
        let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
        let followerX = mouseX, followerY = mouseY;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });

        function animateFollower() {
            followerX += (mouseX - followerX) * 0.15;
            followerY += (mouseY - followerY) * 0.15;
            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';
            requestAnimationFrame(animateFollower);
        }
        animateFollower();

        // Cursor Hover Effects
        const interactables = document.querySelectorAll('a, button');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                follower.style.width = '3rem';
                follower.style.height = '3rem';
                follower.style.borderColor = '#C9A84C';
                follower.style.backgroundColor = 'rgba(201, 168, 76, 0.05)';
                cursor.style.backgroundColor = 'transparent';
                cursor.style.border = '1px solid #C9A84C';
            });
            el.addEventListener('mouseleave', () => {
                follower.style.width = '2rem';
                follower.style.height = '2rem';
                follower.style.borderColor = 'rgba(201, 168, 76, 0.4)';
                follower.style.backgroundColor = 'transparent';
                cursor.style.backgroundColor = '#C9A84C';
                cursor.style.border = 'none';
            });
        });

        // Parallax & Header Scroll Effect
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            
            // Hero Parallax
            const heroBg = document.getElementById('hero-bg');
            if(heroBg) heroBg.style.transform = `translateY(${scrollY * 0.35}px)`;
            
            // Services Parallax
            const servicesBg = document.getElementById('services-bg');
            const servicesSec = document.getElementById('projetos');
            if(servicesBg && servicesSec) {
                const rect = servicesSec.getBoundingClientRect();
                if(rect.top < window.innerHeight && rect.bottom > 0) {
                    servicesBg.style.transform = `translateY(${(rect.top) * -0.15}px)`;
                }
            }

            // Header state
            const header = document.getElementById('header');
            if(scrollY > 50) {
                header.classList.remove('py-5', 'bg-[#0a0a0a]/40');
                header.classList.add('py-3', 'bg-[#0a0a0a]/80');
            } else {
                header.classList.add('py-5', 'bg-[#0a0a0a]/40');
                header.classList.remove('py-3', 'bg-[#0a0a0a]/80');
            }
        });

        // Intersection Observer for Fade-ins and Line Animation
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Handle fade up elements
                    if (entry.target.classList.contains('anim-element')) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                    }
                    // Handle specific line animation
                    if (entry.target.id === 'line-1') {
                        entry.target.style.transform = 'scaleX(1)';
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements on load
        window.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.anim-element, #line-1').forEach(el => {
                observer.observe(el);
            });
            
            // Trigger first elements immediately
            setTimeout(() => {
                document.querySelectorAll('#inicio .anim-element').forEach(el => {
                    el.classList.remove('opacity-0', 'translate-y-8');
                });
            }, 100);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed w-1.5 h-1.5 bg-[#C9A84C] rounded-full pointer-events-none z-[9999] mix-blend-difference" id="cursor" style={{transform: 'translate(-50%, -50%)', transition: 'width 0.2s, height 0.2s, background-color 0.2s'}}></div>
<div className="fixed w-8 h-8 border border-[#C9A84C]/40 rounded-full pointer-events-none z-[9998]" id="cursor-follower" style={{transform: 'translate(-50%, -50%)', transition: 'width 0.3s, height 0.3s, border-color 0.3s, left 0.1s ease-out, top 0.1s ease-out'}}></div>

<header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/40 backdrop-blur-md border-b border-white/5 py-5 px-6 md:px-12 flex justify-between items-center transition-all duration-500" id="header">
<a className="text-lg font-mono font-light tracking-tighter text-white z-10" href="#">ARQUITETURA.TECH</a>
<nav className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2">
<a className="text-xs font-mono tracking-[0.3em] text-white/60 hover:text-white relative group py-2 transition-colors duration-300" href="#inicio">
                INÍCIO
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A84C] transition-all duration-500 ease-out group-hover:w-full"></span>
</a>
<a className="text-xs font-mono tracking-[0.3em] text-white/60 hover:text-white relative group py-2 transition-colors duration-300" href="#sobre">
                SOBRE
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A84C] transition-all duration-500 ease-out group-hover:w-full"></span>
</a>
<a className="text-xs font-mono tracking-[0.3em] text-white/60 hover:text-white relative group py-2 transition-colors duration-300" href="#projetos">
                PROJETOS
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A84C] transition-all duration-500 ease-out group-hover:w-full"></span>
</a>
<a className="text-xs font-mono tracking-[0.3em] text-white/60 hover:text-white relative group py-2 transition-colors duration-300" href="#apresentacao">
                APRESENTAÇÃO
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A84C] transition-all duration-500 ease-out group-hover:w-full"></span>
</a>
<a className="text-xs font-mono tracking-[0.3em] text-white/60 hover:text-white relative group py-2 transition-colors duration-300" href="#modelo">
                3D MODELO
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A84C] transition-all duration-500 ease-out group-hover:w-full"></span>
</a>
</nav>
<button className="md:hidden text-white/60 hover:text-white z-10 transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</header>

<section className="relative h-screen w-full flex flex-col justify-end pb-16 px-6 md:px-12 overflow-hidden" id="inicio">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[#0a0a0a]/55 z-10 mix-blend-multiply"></div>
<img alt="Casa moderna de vidro" className="w-full h-[120%] object-cover object-center absolute top-[-10%]" id="hero-bg" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"/>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full text-center mix-blend-overlay pointer-events-none opacity-0 translate-y-8 anim-element delay-300">
<h1 className="text-[12vw] font-serif text-white/30 tracking-tighter font-light leading-none">ARQUITETURA</h1>
</div>
<div className="relative z-20 flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-12 mt-auto">
<div className="opacity-0 translate-y-8 anim-element delay-500">
<span className="text-[0.65rem] font-mono tracking-[0.4em] text-[#C9A84C] mb-4 block">VISÃO TÉCNICA</span>
<h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight leading-[1.1] max-w-lg">
                    ENGENHARIA<br/>
<span className="text-white/60 italic text-3xl md:text-5xl">E</span> ARQUITETURA
                </h2>
</div>
<div className="flex flex-col items-start md:items-end gap-8 opacity-0 translate-y-8 anim-element delay-700">
<h2 className="text-2xl md:text-4xl font-serif font-light tracking-tight text-left md:text-right leading-[1.2]">
                    INOVAÇÃO EM<br/>CADA PROJETO
                </h2>
<a className="inline-flex items-center justify-center gap-4 px-8 py-4 border border-[#C9A84C]/40 text-[0.65rem] font-mono tracking-[0.3em] text-white hover:bg-[#C9A84C] hover:text-[#0a0a0a] transition-all duration-500 group relative overflow-hidden bg-transparent" href="#contato">
<span className="relative z-10 flex items-center gap-3">
                        SOLICITAR PROJETO
                        <iconify-icon className="group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</a>
</div>
</div>
</section>

<section className="bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 relative" id="sobre">
<div className="w-full h-[1px] bg-white/5 absolute top-0 left-0" id="line-1" style={{transformOrigin: 'left', transform: 'scaleX(0)', transition: 'transform 1.5s cubic-bezier(0.19, 1, 0.22, 1)'}}></div>
<div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
<div className="lg:col-span-5 opacity-0 translate-y-8 anim-element">
<h3 className="text-5xl md:text-7xl font-serif font-light tracking-tight leading-[1.05] mb-8">Nossos<br/>Princípios</h3>
<p className="text-xs font-sans text-white/40 leading-relaxed max-w-sm">Acreditamos que a arquitetura do futuro se baseia no equilíbrio sutil entre a brutalidade dos materiais puros e a precisão da tecnologia estrutural.</p>
</div>
<div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-6 lg:pt-8">

<div className="border-l border-white/10 pl-6 opacity-0 translate-y-8 anim-element delay-100 group">
<span className="text-[0.6rem] font-mono tracking-[0.2em] text-[#C9A84C] mb-2 block">01</span>
<h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/90 mb-4 group-hover:text-[#C9A84C] transition-colors duration-300">Materiais Inovadores</h4>
<p className="text-xs font-sans text-white/40 leading-relaxed">Pesquisa contínua por texturas e compostos sustentáveis que redefinem o luxo contemporâneo estrutural.</p>
</div>

<div className="border-l border-white/10 pl-6 opacity-0 translate-y-8 anim-element delay-200 group">
<span className="text-[0.6rem] font-mono tracking-[0.2em] text-[#C9A84C] mb-2 block">02</span>
<h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/90 mb-4 group-hover:text-[#C9A84C] transition-colors duration-300">Design Único e Funcionalidade</h4>
<p className="text-xs font-sans text-white/40 leading-relaxed">Estética minimalista alinhada à usabilidade extrema, criando espaços que influenciam positivamente o comportamento.</p>
</div>

<div className="border-l border-white/10 pl-6 opacity-0 translate-y-8 anim-element delay-300 group">
<span className="text-[0.6rem] font-mono tracking-[0.2em] text-[#C9A84C] mb-2 block">03</span>
<h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/90 mb-4 group-hover:text-[#C9A84C] transition-colors duration-300">BIM e Modelagem 3D</h4>
<p className="text-xs font-sans text-white/40 leading-relaxed">Antecipação de cenários através de simulações paramétricas precisas, reduzindo impactos e otimizando processos.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#111111] relative pt-12 pb-32" id="projetos">

<div className="h-[65vh] relative w-full overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111111]/60 to-[#111111] z-10"></div>
<img alt="Prédio comercial moderno" className="w-full h-[115%] object-cover object-center absolute top-[-5%]" id="services-bg" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920"/>
</div>

<div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-20 -mt-40">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">

<div className="bg-[#0f0f0f]/95 backdrop-blur-md p-10 aspect-[4/5] flex flex-col justify-between hover:bg-[#151515] transition-all duration-500 group opacity-0 translate-y-8 anim-element relative overflow-hidden">
<div className="absolute inset-0 border border-transparent group-hover:border-[#C9A84C]/30 transition-colors duration-500 pointer-events-none"></div>
<iconify-icon className="text-white/20 group-hover:text-[#C9A84C] transition-all duration-500 group-hover:scale-110 origin-left" icon="solar:city-linear" strokeWidth="1.5" width="28"></iconify-icon>
<div>
<h4 className="text-xl font-serif font-light tracking-tight text-white/90 mb-4">Serviços<br/>Arquitetônicos</h4>
<div className="w-8 h-px bg-white/10 group-hover:w-full group-hover:bg-[#C9A84C] transition-all duration-700 ease-out"></div>
</div>
</div>

<div className="bg-[#0f0f0f]/95 backdrop-blur-md p-10 aspect-[4/5] flex flex-col justify-between hover:bg-[#151515] transition-all duration-500 group opacity-0 translate-y-8 anim-element delay-100 relative overflow-hidden">
<div className="absolute inset-0 border border-transparent group-hover:border-[#C9A84C]/30 transition-colors duration-500 pointer-events-none"></div>
<iconify-icon className="text-white/20 group-hover:text-[#C9A84C] transition-all duration-500 group-hover:scale-110 origin-left" icon="solar:sofa-linear" strokeWidth="1.5" width="28"></iconify-icon>
<div>
<h4 className="text-xl font-serif font-light tracking-tight text-white/90 mb-4">Design de<br/>Interiores</h4>
<div className="w-8 h-px bg-white/10 group-hover:w-full group-hover:bg-[#C9A84C] transition-all duration-700 ease-out"></div>
</div>
</div>

<div className="bg-[#0f0f0f]/95 backdrop-blur-md p-10 aspect-[4/5] flex flex-col justify-between hover:bg-[#151515] transition-all duration-500 group opacity-0 translate-y-8 anim-element delay-200 relative overflow-hidden">
<div className="absolute inset-0 border border-transparent group-hover:border-[#C9A84C]/30 transition-colors duration-500 pointer-events-none"></div>
<iconify-icon className="text-white/20 group-hover:text-[#C9A84C] transition-all duration-500 group-hover:scale-110 origin-left" icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="28"></iconify-icon>
<div>
<h4 className="text-xl font-serif font-light tracking-tight text-white/90 mb-4">Modelagem BIM<br/>e 3D</h4>
<div className="w-8 h-px bg-white/10 group-hover:w-full group-hover:bg-[#C9A84C] transition-all duration-700 ease-out"></div>
</div>
</div>

<div className="bg-[#0f0f0f]/95 backdrop-blur-md p-10 aspect-[4/5] flex flex-col justify-between hover:bg-[#151515] transition-all duration-500 group opacity-0 translate-y-8 anim-element delay-300 relative overflow-hidden">
<div className="absolute inset-0 border border-transparent group-hover:border-[#C9A84C]/30 transition-colors duration-500 pointer-events-none"></div>
<iconify-icon className="text-white/20 group-hover:text-[#C9A84C] transition-all duration-500 group-hover:scale-110 origin-left" icon="solar:leaf-linear" strokeWidth="1.5" width="28"></iconify-icon>
<div>
<h4 className="text-xl font-serif font-light tracking-tight text-white/90 mb-4">Design<br/>Paisagístico</h4>
<div className="w-8 h-px bg-white/10 group-hover:w-full group-hover:bg-[#C9A84C] transition-all duration-700 ease-out"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#f2f2f2] text-[#0a0a0a] py-32 px-6 md:px-12 relative overflow-hidden" id="apresentacao">
<div className="max-w-[90rem] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
<div className="lg:w-5/12 opacity-0 translate-y-8 anim-element z-10">
<h3 className="text-[0.6rem] font-mono tracking-[0.3em] text-black/40 mb-8 uppercase">SAIBA MAIS SOBRE NOSSA EMPRESA</h3>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mb-8 leading-[1.1]">Tradição atemporal<br/>com tecnologia<br/>de ponta.</h2>
<div className="w-12 h-px bg-[#C9A84C] mb-8"></div>
<p className="text-xs font-sans text-black/60 leading-relaxed mb-10 max-w-md">Fundimos o rigor do design editorial com as mais recentes inovações em automação e engenharia estrutural. Cada ambiente é meticulosamente planejado para oferecer uma experiência sensorial única, equilibrando luz, sombra e materialidade bruta.</p>
<a className="inline-flex items-center gap-3 pb-2 border-b border-black/20 text-[0.65rem] font-mono tracking-[0.2em] text-black hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300 group" href="#">
                    CONHEÇA O ESTÚDIO
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
<div className="lg:w-7/12 relative opacity-0 translate-y-8 anim-element delay-200">
<div className="relative overflow-hidden group">
<img alt="Interior do Escritório" className="w-full h-[60vh] lg:h-[80vh] object-cover filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"/>
<div className="absolute inset-0 bg-[#0a0a0a]/10 pointer-events-none group-hover:opacity-0 transition-opacity duration-1000"></div>
</div>

<div className="absolute -bottom-10 -left-10 lg:-left-20 bg-white p-8 md:p-12 border border-black/5 hidden md:block z-20 shadow-2xl shadow-black/5">
<p className="text-6xl font-serif font-light tracking-tighter text-[#0a0a0a] mb-2">15<span className="text-[#C9A84C]">+</span></p>
<p className="text-[0.6rem] font-mono tracking-[0.3em] text-black/50">ANOS DE EXCELÊNCIA</p>
</div>
</div>
</div>
</section>

<footer className="bg-[#050505] pt-24 pb-12 px-6 md:px-12 border-t border-white/5 relative">
<div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
<div>
<a className="text-xl font-mono font-light tracking-tighter text-white mb-6 block" href="#">ARQUITETURA.TECH</a>
<p className="text-[0.65rem] font-mono tracking-[0.2em] text-white/30">© 2024 ARQUITETURA TECH.<br/>TODOS OS DIREITOS RESERVADOS.</p>
</div>
<div className="flex gap-6">
<a className="text-white/40 hover:text-[#C9A84C] transition-colors duration-300" href="#">
<iconify-icon icon="solar:instagram-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-white/40 hover:text-[#C9A84C] transition-colors duration-300" href="#">
<iconify-icon icon="solar:linkedin-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-white/40 hover:text-[#C9A84C] transition-colors duration-300" href="#">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>



    </>
  );
}
