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



        document.addEventListener("DOMContentLoaded", (event) => {
            
            // --- LENIS SMOOTH SCROLL ---
            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
                touchMultiplier: 2,
            });

            // Sincronizando Lenis com ScrollTrigger
            lenis.on('scroll', ScrollTrigger.update);
            
            gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
            });
            gsap.ticker.lagSmoothing(0, 0);

            // --- GSAP ANIMATIONS ---
            gsap.registerPlugin(ScrollTrigger);

            // 1. Navbar Fade In
            gsap.to(".nav-header", { opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.2 });

            // 2. Hero Cinematic Timeline
            const tlHero = gsap.timeline();
            tlHero.to(".hero-bg-elem", { opacity: 1, duration: 2, stagger: 0.2, ease: "power2.inOut" })
                  .to(".hero-badge", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=1.5")
                  .fromTo(".hero-title", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=1")
                  .fromTo(".hero-subtitle", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.8")
                  .fromTo(".hero-btn", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.5)" }, "-=0.6");

            // 3. Parallax Avançado na Hero
            gsap.to(".parallax-bg", {
                yPercent: 30,
                ease: "none",
                scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true }
            });
            gsap.to(".parallax-shape-1", {
                yPercent: -40,
                rotation: 15,
                ease: "none",
                scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: 1 }
            });
            gsap.to(".parallax-shape-2", {
                yPercent: -20,
                rotation: -10,
                ease: "none",
                scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: 1.5 }
            });
            gsap.to(".parallax-grid", {
                yPercent: 15,
                ease: "none",
                scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true }
            });

            // 4. Seção Benefícios (Cards Stagger)
            gsap.to(".section-header", {
                scrollTrigger: { trigger: "#beneficios", start: "top 80%" },
                opacity: 1, y: -20, duration: 1, ease: "power3.out"
            });
            gsap.fromTo(".card-beneficio", 
                { opacity: 0, y: 50, scale: 0.95 },
                { 
                    scrollTrigger: { trigger: ".card-beneficio", start: "top 85%" },
                    opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: "power3.out"
                }
            );

            // 5. Seção Soluções
            gsap.to(".solucoes-header", {
                scrollTrigger: { trigger: "#solucoes", start: "top 85%" },
                opacity: 1, y: -20, duration: 1, ease: "power3.out"
            });
            gsap.fromTo(".card-solucao",
                { opacity: 0, y: 40 },
                {
                    scrollTrigger: { trigger: ".card-solucao", start: "top 85%" },
                    opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out"
                }
            );

            // 6. Seção SEO Split Layout
            const tlSEO = gsap.timeline({
                scrollTrigger: { trigger: "#seo", start: "top 75%" }
            });
            tlSEO.fromTo(".seo-text", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out" })
                 .fromTo(".seo-visual", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, "-=0.8");

            // Gráfico Barras SEO Animation
            gsap.utils.toArray(".graph-bar").forEach(bar => {
                const targetHeight = bar.getAttribute("data-h");
                gsap.to(bar, {
                    scrollTrigger: { trigger: ".seo-visual", start: "top 60%" },
                    height: targetHeight,
                    duration: 1.5,
                    ease: "power3.out",
                    delay: 0.5
                });
            });

            // Contador Numérico Animado (SEO)
            gsap.to(".seo-counter", {
                scrollTrigger: { trigger: ".seo-visual", start: "top 60%" },
                innerText: 245,
                duration: 2,
                snap: { innerText: 1 },
                ease: "power2.out"
            });

            // 7. Seção Processo (Timeline Horizontal)
            gsap.to(".process-header", {
                scrollTrigger: { trigger: "#processo", start: "top 85%" },
                opacity: 1, y: -20, duration: 1, ease: "power3.out"
            });
            
            // Animando a linha de progresso conforme o scroll
            gsap.to(".process-line-progress", {
                scrollTrigger: {
                    trigger: "#processo",
                    start: "top 60%",
                    end: "bottom 80%",
                    scrub: 1
                },
                width: "100%",
                ease: "none"
            });

            // Animando o surgimento dos steps (bounce leve)
            gsap.fromTo(".process-step",
                { opacity: 0, y: 40, scale: 0.9 },
                {
                    scrollTrigger: { trigger: "#processo", start: "top 60%" },
                    opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.4)"
                }
            );

            // 8. Seção CTA Final
            const tlCTA = gsap.timeline({
                scrollTrigger: { trigger: "#contato", start: "top 80%" }
            });
            tlCTA.fromTo(".cta-card", { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1, ease: "power3.out" });
            
            // Background motion lento contínuo no CTA
            gsap.to(".cta-btn-bg", {
                backgroundPosition: "200% center",
                duration: 3,
                ease: "none",
                repeat: -1
            });
            gsap.to(".cta-glow", {
                scale: 1.2,
                opacity: 0.6,
                duration: 4,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });

            // Smooth Scroll links internos (Navbar -> Seções)
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    lenis.scrollTo(this.getAttribute('href'), {
                        offset: -80, // compensar altura da navbar fixa
                        duration: 1.5,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                    });
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
      

<nav className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-md border-b border-white/5 transition-all duration-300 nav-header opacity-0">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2" href="#">
                N X T <span className="text-blue-500">.</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-400">
<a className="hover:text-white transition-colors duration-300" href="#beneficios">Benefícios</a>
<a className="hover:text-white transition-colors duration-300" href="#solucoes">Soluções</a>
<a className="hover:text-white transition-colors duration-300" href="#seo">SEO</a>
<a className="hover:text-white transition-colors duration-300" href="#processo">Processo</a>
</div>
<a className="hidden md:inline-flex items-center justify-center text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-5 py-2 transition-all duration-300 hover:scale-105 active:scale-95" href="#contato">
                Falar com especialista
            </a>
</div>
</nav>

<section className="hero-section relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="parallax-bg absolute inset-0 z-0 pointer-events-none hero-bg-elem opacity-0" style={{backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.15), transparent 60%)'}}></div>
<div className="parallax-shape-1 absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen hero-bg-elem opacity-0"></div>
<div className="parallax-shape-2 absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-indigo-600/10 rounded-full blur-[100px] mix-blend-screen hero-bg-elem opacity-0"></div>

<div className="parallax-grid absolute inset-0 z-0 opacity-20 hero-bg-elem" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '3rem 3rem', maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)'}}></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
<div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-400 mb-8 opacity-0">
<span className="w-2 h-2 rounded-full bg-blue-500 flex animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] relative">
<span className="absolute inline-flex w-full h-full rounded-full bg-blue-500 opacity-75"></span>
</span>
                Inovação Digital
            </div>
<h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white leading-tight mb-6 opacity-0">
                Transforme sua presença digital <br className="hidden lg:block"/> com um site profissional
            </h1>
<p className="hero-subtitle text-lg md:text-xl font-medium tracking-tight text-slate-300 max-w-3xl mx-auto mb-10 opacity-0">
                Criamos sites modernos, rápidos e estratégicos para empresas que querem crescer e gerar mais clientes.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="hero-btn group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-slate-900 bg-white rounded-full transition-all duration-300 overflow-hidden opacity-0 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]" href="#contato">
<span className="relative z-10 flex items-center gap-2">
                        Solicitar orçamento
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
<div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</a>
<a className="hero-btn group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 opacity-0 hover:scale-105 hover:border-white/20" href="#portfolio">
                    Ver portfólio
                </a>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="beneficios">
<div className="max-w-7xl mx-auto px-6">
<div className="section-header text-center max-w-3xl mx-auto mb-16 opacity-0">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Por que sua empresa precisa de um site profissional?</h2>
<p className="text-base text-slate-400 font-normal">Hoje, a presença digital é essencial para qualquer negócio. Um site bem projetado transmite profissionalismo, confiança e melhora significativamente a experiência do cliente.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="card-beneficio opacity-0 relative bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 transition-all duration-500 hover:bg-slate-800/50 hover:border-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-2 hover:scale-[1.02] group">
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
<iconify-icon className="text-blue-400" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-3">Design estratégico</h3>
<p className="text-sm font-normal text-slate-400 leading-relaxed">Um design moderno e bem estruturado guia o usuário pela página e aumenta as chances de conversão.</p>
</div>

<div className="card-beneficio opacity-0 relative bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 transition-all duration-500 hover:bg-slate-800/50 hover:border-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-2 hover:scale-[1.02] group">
<div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-500">
<iconify-icon className="text-indigo-400" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-3">Credibilidade digital</h3>
<p className="text-sm font-normal text-slate-400 leading-relaxed">Empresas com sites profissionais transmitem mais confiança e autoridade no mercado moderno.</p>
</div>

<div className="card-beneficio opacity-0 relative bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 transition-all duration-500 hover:bg-slate-800/50 hover:border-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-2 hover:scale-[1.02] group">
<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-500">
<iconify-icon className="text-purple-400" icon="solar:smartphone-update-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-3">Experiência do usuário</h3>
<p className="text-sm font-normal text-slate-400 leading-relaxed">Interfaces intuitivas e responsivas garantem uma navegação fluida em qualquer dispositivo.</p>
</div>

<div className="card-beneficio opacity-0 relative bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 transition-all duration-500 hover:bg-slate-800/50 hover:border-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-2 hover:scale-[1.02] group">
<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500">
<iconify-icon className="text-emerald-400" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-3">Disponibilidade 24h</h3>
<p className="text-sm font-normal text-slate-400 leading-relaxed">Seu site trabalha para sua empresa de forma contínua, todos os dias da semana, sem interrupções.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="solucoes">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<h2 className="solucoes-header text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16 text-center opacity-0">Soluções digitais para diferentes negócios</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="card-solucao opacity-0 group flex flex-col p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(37,99,235,0.1)]">
<div className="mb-8 flex justify-between items-start">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-transparent flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/40 group-hover:scale-110 transition-all duration-500">
<iconify-icon className="text-blue-400" icon="solar:laptop-minimalistic-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<iconify-icon className="text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Site Institucional</h3>
<p className="text-sm font-normal text-slate-400 mb-6 flex-grow">Ideal para empresas que desejam apresentar sua marca, serviços e fortalecer sua presença online com autoridade.</p>
</div>

<div className="card-solucao opacity-0 group flex flex-col p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(99,102,241,0.1)]">
<div className="mb-8 flex justify-between items-start">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-transparent flex items-center justify-center border border-indigo-500/20 group-hover:border-indigo-500/40 group-hover:scale-110 transition-all duration-500">
<iconify-icon className="text-indigo-400" icon="solar:cart-large-minimalistic-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<iconify-icon className="text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">E-commerce</h3>
<p className="text-sm font-normal text-slate-400 mb-6 flex-grow">Lojas virtuais completas com sistemas de pagamento seguros, automação de vendas e gestão eficiente de produtos.</p>
</div>

<div className="card-solucao opacity-0 group flex flex-col p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(168,85,247,0.1)]">
<div className="mb-8 flex justify-between items-start">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-transparent flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/40 group-hover:scale-110 transition-all duration-500">
<iconify-icon className="text-purple-400" icon="solar:target-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<iconify-icon className="text-slate-600 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Landing Pages</h3>
<p className="text-sm font-normal text-slate-400 mb-6 flex-grow">Páginas estratégicas altamente otimizadas criadas especificamente para campanhas de marketing e geração de leads.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="seo">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="seo-text opacity-0">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400 mb-6">
<iconify-icon icon="solar:rocket-linear"></iconify-icon>
                        Alta Performance
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Seja encontrado no Google</h2>
<p className="text-base text-slate-400 mb-8 font-normal">
                        Ter um site bonito é importante, mas ele também precisa ser encontrado. <br/><br/>
                        Todos os nossos projetos são desenvolvidos com estrutura otimizada para SEO, garantindo melhor posicionamento nos motores de busca e maior visibilidade para sua empresa.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm font-medium text-slate-300 group">
<iconify-icon className="text-emerald-500 group-hover:scale-125 transition-transform duration-300" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Estrutura otimizada para buscadores
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-300 group">
<iconify-icon className="text-emerald-500 group-hover:scale-125 transition-transform duration-300" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Performance e velocidade superior
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-300 group">
<iconify-icon className="text-emerald-500 group-hover:scale-125 transition-transform duration-300" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Código limpo, semântico e organizado
                        </li>
</ul>
</div>

<div className="seo-visual opacity-0 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 blur-3xl rounded-full opacity-50"></div>
<div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-transform hover:scale-[1.02] duration-500">
<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-slate-950/50">
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
</div>
<div className="p-8">
<div className="flex items-center justify-between mb-8">
<div>
<div className="text-xs text-slate-500 font-medium mb-1">Tráfego Orgânico</div>
<div className="text-3xl font-semibold tracking-tight text-white flex items-center gap-2">
<span className="seo-counter">0</span>K
                                        <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full flex items-center gap-1">
<iconify-icon icon="solar:arrow-up-linear"></iconify-icon> 42%
                                        </span>
</div>
</div>
<div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
</div>

<div className="flex items-end gap-2 h-32 mt-4">
<div className="graph-bar w-full bg-blue-500/20 rounded-t-sm hover:bg-blue-500/40 transition-colors duration-300" data-h="30%" style={{height: '0%'}}></div>
<div className="graph-bar w-full bg-blue-500/20 rounded-t-sm hover:bg-blue-500/40 transition-colors duration-300" data-h="45%" style={{height: '0%'}}></div>
<div className="graph-bar w-full bg-blue-500/20 rounded-t-sm hover:bg-blue-500/40 transition-colors duration-300" data-h="40%" style={{height: '0%'}}></div>
<div className="graph-bar w-full bg-blue-500/30 rounded-t-sm hover:bg-blue-500/50 transition-colors duration-300" data-h="60%" style={{height: '0%'}}></div>
<div className="graph-bar w-full bg-blue-500/40 rounded-t-sm hover:bg-blue-500/60 transition-colors duration-300" data-h="75%" style={{height: '0%'}}></div>
<div className="graph-bar w-full bg-blue-500/60 rounded-t-sm hover:bg-blue-500/80 transition-colors duration-300 relative group" data-h="90%" style={{height: '0%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">SEO</div>
</div>
<div className="graph-bar w-full bg-emerald-500/80 rounded-t-sm shadow-[0_0_15px_rgba(16,185,129,0.3)]" data-h="100%" style={{height: '0%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-slate-900/20 border-y border-white/5" id="processo">
<div className="max-w-7xl mx-auto px-6">
<h2 className="process-header text-3xl md:text-4xl font-semibold tracking-tight text-white mb-20 text-center opacity-0">Processo de Desenvolvimento</h2>
<div className="relative">

<div className="hidden md:block absolute top-6 left-12 right-12 h-px bg-white/5 overflow-hidden rounded-full">
<div className="process-line-progress h-full w-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">

<div className="process-step opacity-0 relative group">
<div className="step-icon w-12 h-12 rounded-full bg-slate-950 border border-blue-500/30 flex items-center justify-center text-sm font-medium text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                            01
                        </div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Planejamento</h3>
<p className="text-sm font-normal text-slate-400">Analisamos seu negócio, entendemos seu público-alvo e definimos os objetivos estratégicos.</p>
</div>

<div className="process-step opacity-0 relative group">
<div className="step-icon w-12 h-12 rounded-full bg-slate-950 border border-indigo-500/30 flex items-center justify-center text-sm font-medium text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                            02
                        </div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Design</h3>
<p className="text-sm font-normal text-slate-400">Criamos um layout moderno, exclusivo e focado na imersão e experiência do usuário (UX/UI).</p>
</div>

<div className="process-step opacity-0 relative group">
<div className="step-icon w-12 h-12 rounded-full bg-slate-950 border border-purple-500/30 flex items-center justify-center text-sm font-medium text-purple-400 mb-6 group-hover:scale-110 group-hover:bg-purple-500/10 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                            03
                        </div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Desenvolvimento</h3>
<p className="text-sm font-normal text-slate-400">Transformamos o design em um ecossistema digital rápido, responsivo e altamente tecnológico.</p>
</div>

<div className="process-step opacity-0 relative group">
<div className="step-icon w-12 h-12 rounded-full bg-slate-950 border border-emerald-500/30 flex items-center justify-center text-sm font-medium text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-500/10 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                            04
                        </div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Publicação</h3>
<p className="text-sm font-normal text-slate-400">Seu site passa por testes rigorosos e entra no ar pronto para escalar seus resultados.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="contato">
<div className="max-w-5xl mx-auto px-6 relative">
<div className="cta-card opacity-0 relative bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-3xl p-10 md:p-16 text-center overflow-hidden">

<div className="cta-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-blue-600/20 blur-[120px] pointer-events-none rounded-full"></div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6 relative z-10">
                    Pronto para levar sua empresa <br className="hidden sm:block"/> para o próximo nível?
                </h2>
<p className="text-base font-normal text-slate-400 max-w-2xl mx-auto mb-10 relative z-10">
                    Invista em um site profissional e posicione sua marca com autoridade no mundo digital. Destaque-se da concorrência com uma plataforma feita para impressionar e converter.
                </p>
<a className="group relative inline-flex items-center justify-center gap-2 px-10 py-4 text-sm font-medium text-white bg-blue-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] z-10" href="#">
<span className="relative z-10">Criar meu site</span>
<div className="cta-btn-bg absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_auto]"></div>
</a>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">

<div className="col-span-1 md:col-span-1">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2 mb-4" href="#">
                        N X T <span className="text-blue-500">.</span>
</a>
<p className="text-sm text-slate-500 font-normal leading-relaxed mb-6">
                        Criando experiências digitais premium e sites focados em alta performance para marcas ambiciosas.
                    </p>
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300" href="#">
<iconify-icon icon="solar:link-circle-linear" width="24"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300" href="#">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-4">Plataforma</h4>
<ul className="space-y-3 text-sm font-normal text-slate-500">
<li><a className="hover:text-white transition-colors" href="#beneficios">Benefícios</a></li>
<li><a className="hover:text-white transition-colors" href="#solucoes">Soluções</a></li>
<li><a className="hover:text-white transition-colors" href="#seo">Performance SEO</a></li>
<li><a className="hover:text-white transition-colors" href="#processo">Nosso Processo</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-4">Empresa</h4>
<ul className="space-y-3 text-sm font-normal text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Sobre Nós</a></li>
<li><a className="hover:text-white transition-colors" href="#">Portfólio</a></li>
<li><a className="hover:text-white transition-colors" href="#">Carreiras</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contato</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-4">Legal</h4>
<ul className="space-y-3 text-sm font-normal text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Termos de Uso</a></li>
<li><a className="hover:text-white transition-colors" href="#">Política de Privacidade</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-600 font-normal">
                    © 2024 NXT Digital. Todos os direitos reservados.
                </p>
<div className="flex items-center gap-2 text-xs text-slate-600 font-normal">
                    Designed with <iconify-icon className="text-slate-500" icon="solar:code-square-linear"></iconify-icon> using GSAP &amp; Lenis.
                </div>
</div>
</div>
</footer>



    </>
  );
}
