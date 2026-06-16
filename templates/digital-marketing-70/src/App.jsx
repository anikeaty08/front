import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Intersection Observer for Scroll Animations
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        
                        // Numeric Counter Animation trigger
                        if (entry.target.classList.contains('counter-wrap')) {
                            const counters = entry.target.querySelectorAll('.counter');
                            counters.forEach(counter => {
                                const target = +counter.getAttribute('data-target');
                                const duration = 2000; // ms
                                const frameRate = 1000 / 60;
                                const totalFrames = Math.round(duration / frameRate);
                                let frame = 0;
                                
                                const updateCounter = () => {
                                    frame++;
                                    const progress = frame / totalFrames;
                                    // Ease out cubic
                                    const easeProgress = 1 - Math.pow(1 - progress, 3);
                                    const current = Math.round(target * easeProgress);
                                    
                                    if (frame < totalFrames) {
                                        counter.innerText = current;
                                        requestAnimationFrame(updateCounter);
                                    } else {
                                        counter.innerText = target;
                                    }
                                };
                                updateCounter();
                            });
                            // Unobserve to run only once
                            observer.unobserve(entry.target);
                        }
                    }
                });
            }, observerOptions);

            const animatableElements = document.querySelectorAll('.reveal-up, .reveal-scale, .reveal-left, .reveal-right');
            animatableElements.forEach(el => observer.observe(el));

            // 2. Parallax Scroll Effect
            const parallaxLayers = document.querySelectorAll('.parallax-layer');
            let requestAnimationFrameId;
            let lastScrollY = window.scrollY;

            const updateParallax = () => {
                const scrollY = window.scrollY;
                if (scrollY !== lastScrollY) {
                    parallaxLayers.forEach(layer => {
                        const speed = parseFloat(layer.getAttribute('data-speed'));
                        // Move element based on scroll and speed
                        const yPos = -(scrollY * speed);
                        layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
                    });
                    lastScrollY = scrollY;
                }
                requestAnimationFrameId = requestAnimationFrame(updateParallax);
            };
            
            // Start parallax loop
            updateParallax();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tight text-slate-900 flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm font-semibold shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform duration-300">
                    M
                </div>
                MGD
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#servicos">Serviços</a>
<a className="hover:text-slate-900 transition-colors" href="#planos">Planos</a>
<a className="hover:text-slate-900 transition-colors" href="#sobre">Sobre</a>
<a className="hover:text-slate-900 transition-colors" href="#contato">Contato</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5" href="#contato">
                Falar Conosco
            </a>
<button className="md:hidden text-slate-500 hover:text-slate-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center pt-24 pb-20 px-6 overflow-hidden bg-hero-gradient">

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden parallax-layer" data-speed="0.2">
<div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-blue-400/20 rounded-full blur-[8rem] animate-float"></div>
<div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-slate-200/50 rounded-full blur-[8rem] animate-float-delayed"></div>
</div>
<div className="max-w-7xl mx-auto text-center relative z-10 w-full">
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 mb-6 max-w-5xl mx-auto leading-tight reveal-up">
                Marketing Digital Que <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Gera Resultado</span>
</h1>
<p className="text-base sm:text-lg md:text-xl font-normal text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed reveal-up delay-100">
                Transforme sua presença digital em vendas reais. Gestão completa, criativos profissionais e tráfego pago estratégico.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 reveal-up delay-200">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-1 hover:scale-105 group" href="#contato">
                    Falar no WhatsApp
                    <iconify-icon className="ml-2 text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-slate-700 bg-white/80 backdrop-blur-md border border-slate-200/50 rounded-full hover:bg-slate-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group" href="#">
<iconify-icon className="mr-2 text-lg text-slate-400 group-hover:text-slate-700 transition-colors" icon="solar:camera-linear"></iconify-icon>
                    Ver Instagram
                </a>
</div>

<div className="flex justify-center mt-8 reveal-scale delay-300">
<div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1">
<div className="w-1 h-2 bg-slate-400 rounded-full animate-pulse-soft"></div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 w-full relative z-10 parallax-layer" data-speed="0.05">

<div className="bg-white/60 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 reveal-up delay-200 group">
<div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-2">Resultados Mensuráveis</h3>
<p className="text-xs text-slate-500 leading-relaxed">Acompanhamento rigoroso de métricas e ROI para cada campanha.</p>
</div>

<div className="bg-white/60 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 reveal-up delay-300 group">
<div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 mb-4 group-hover:scale-110 group-hover:text-blue-600 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-2">Atendimento Próximo</h3>
<p className="text-xs text-slate-500 leading-relaxed">Uma parceria verdadeira e dedicada ao sucesso do seu negócio.</p>
</div>

<div className="bg-white/60 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 reveal-up delay-400 group">
<div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 mb-4 group-hover:scale-110 group-hover:text-blue-600 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:layers-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-2">Gestão Completa</h3>
<p className="text-xs text-slate-500 leading-relaxed">Cuidamos de tudo, desde a criação das artes até a gestão de anúncios.</p>
</div>

<div className="bg-white/60 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 reveal-up delay-500 group">
<div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 mb-4 group-hover:scale-110 group-hover:text-blue-600 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-2">Estratégia Personalizada</h3>
<p className="text-xs text-slate-500 leading-relaxed">Soluções desenvolvidas sob medida para o seu nicho e objetivos.</p>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900"></div>
<div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-800 text-center relative z-10 counter-wrap reveal-scale">
<div className="pt-8 md:pt-0 group">
<div className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-2 group-hover:scale-105 transition-transform duration-500"><span className="counter" data-target="100">0</span><span className="text-blue-500">+</span></div>
<div className="text-xs font-medium text-slate-400 uppercase tracking-widest">Projetos Ativos</div>
</div>
<div className="pt-8 md:pt-0 group">
<div className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-2 group-hover:scale-105 transition-transform duration-500"><span className="text-blue-500">+</span><span className="counter" data-target="250">0</span><span className="text-blue-500">%</span></div>
<div className="text-xs font-medium text-slate-400 uppercase tracking-widest">Crescimento Médio</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 px-6 relative overflow-hidden" id="servicos">
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-up">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Soluções Completas em Marketing Digital</h2>
<p className="text-sm text-slate-500">Serviços avulsos e planos contínuos estruturados para cada fase e necessidade do seu negócio.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

<div className="group bg-white/80 backdrop-blur-md border border-slate-200 p-8 rounded-3xl hover:-translate-y-2 hover:border-blue-300/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 cursor-pointer reveal-up delay-100 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-blue-600 flex items-center justify-center text-slate-700 group-hover:text-white transition-all duration-500 mb-6 group-hover:rotate-6">
<iconify-icon className="text-2xl" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3 relative z-10">Artes Avulsas</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed relative z-10">Design profissional para posts, stories, banners e materiais gráficos específicos.</p>
<a className="inline-flex items-center text-sm font-medium text-slate-400 group-hover:text-blue-600 transition-colors relative z-10" href="#contato">
                        Saiba mais <iconify-icon className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white/80 backdrop-blur-md border border-slate-200 p-8 rounded-3xl hover:-translate-y-2 hover:border-blue-300/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 cursor-pointer reveal-up delay-200 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-blue-600 flex items-center justify-center text-slate-700 group-hover:text-white transition-all duration-500 mb-6 group-hover:rotate-6">
<iconify-icon className="text-2xl" icon="solar:videocamera-record-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3 relative z-10">Vídeo Maker</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed relative z-10">Captação e edição de vídeos curtos (Reels, TikToks) com alta retenção.</p>
<a className="inline-flex items-center text-sm font-medium text-slate-400 group-hover:text-blue-600 transition-colors relative z-10" href="#contato">
                        Saiba mais <iconify-icon className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white/80 backdrop-blur-md border border-slate-200 p-8 rounded-3xl hover:-translate-y-2 hover:border-blue-300/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 cursor-pointer reveal-up delay-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-blue-600 flex items-center justify-center text-slate-700 group-hover:text-white transition-all duration-500 mb-6 group-hover:rotate-6">
<iconify-icon className="text-2xl" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3 relative z-10">Catálogo Digital</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed relative z-10">Apresentação moderna e interativa dos seus produtos ou serviços para clientes.</p>
<a className="inline-flex items-center text-sm font-medium text-slate-400 group-hover:text-blue-600 transition-colors relative z-10" href="#contato">
                        Saiba mais <iconify-icon className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white/80 backdrop-blur-md border border-slate-200 p-8 rounded-3xl hover:-translate-y-2 hover:border-blue-300/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 cursor-pointer reveal-up delay-100 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-blue-600 flex items-center justify-center text-slate-700 group-hover:text-white transition-all duration-500 mb-6 group-hover:rotate-6">
<iconify-icon className="text-2xl" icon="solar:smartphone-update-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3 relative z-10">Gestão de Redes Sociais</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed relative z-10">Planejamento, criação e postagem de conteúdo estratégico no Instagram e Facebook.</p>
<a className="inline-flex items-center text-sm font-medium text-slate-400 group-hover:text-blue-600 transition-colors relative z-10" href="#contato">
                        Saiba mais <iconify-icon className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white/80 backdrop-blur-md border border-slate-200 p-8 rounded-3xl hover:-translate-y-2 hover:border-blue-300/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 cursor-pointer reveal-up delay-200 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-blue-600 flex items-center justify-center text-slate-700 group-hover:text-white transition-all duration-500 mb-6 group-hover:rotate-6">
<iconify-icon className="text-2xl" icon="solar:cursor-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3 relative z-10">Tráfego Pago</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed relative z-10">Anúncios otimizados no Meta Ads (Instagram/Facebook) focados em gerar leads.</p>
<a className="inline-flex items-center text-sm font-medium text-slate-400 group-hover:text-blue-600 transition-colors relative z-10" href="#contato">
                        Saiba mais <iconify-icon className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white/80 backdrop-blur-md border border-slate-200 p-8 rounded-3xl hover:-translate-y-2 hover:border-blue-300/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 cursor-pointer reveal-up delay-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-blue-600 flex items-center justify-center text-slate-700 group-hover:text-white transition-all duration-500 mb-6 group-hover:rotate-6">
<iconify-icon className="text-2xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3 relative z-10">Google Ads</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed relative z-10">Apareça no topo das buscas quando seu cliente procurar pelo seu serviço ou produto.</p>
<a className="inline-flex items-center text-sm font-medium text-slate-400 group-hover:text-blue-600 transition-colors relative z-10" href="#contato">
                        Saiba mais <iconify-icon className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="text-center reveal-scale">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm hover:shadow-md hover:-translate-y-1" href="#contato">
                    Ver Todos os Serviços
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white relative" id="planos">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-20 reveal-up">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Escolha o Plano Ideal Para Seu Negócio</h2>
<p className="text-sm text-slate-500">Transparência e foco no resultado. Nossos pacotes foram desenhados para gerar escala.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-6 mb-16 items-center">

<div className="flex flex-col bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 reveal-right hover:-translate-y-2">
<div className="mb-6">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Plano Iniciante</h3>
<p className="text-xs text-slate-500 mt-1">Ideal para começar a presença digital.</p>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex items-start text-sm text-slate-600">
<iconify-icon className="text-slate-300 mr-3 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                            Configuração de Perfil
                        </li>
<li className="flex items-start text-sm text-slate-600">
<iconify-icon className="text-slate-300 mr-3 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                            2 Posts por semana
                        </li>
<li className="flex items-start text-sm text-slate-600">
<iconify-icon className="text-slate-300 mr-3 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                            Design Profissional
                        </li>
</ul>
<a className="w-full inline-flex justify-center items-center py-3 px-4 text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors" href="#contato">
                        Quero Este Plano
                    </a>
</div>

<div className="relative flex flex-col bg-white border-2 border-blue-500 animate-border-glow rounded-[2rem] p-10 shadow-2xl shadow-blue-900/10 transform md:scale-105 z-10 reveal-scale delay-200 hover:-translate-y-2 transition-transform duration-500">
<div className="absolute -top-5 left-0 right-0 flex justify-center animate-float">
<span className="bg-blue-600 text-white text-[10px] font-semibold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg shadow-blue-600/30">
                            Mais Popular
                        </span>
</div>
<div className="mb-6 mt-2">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Gerenciamento Completo</h3>
<p className="text-xs text-slate-500 mt-1">O pacote perfeito para escalar.</p>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex items-start text-sm text-slate-800 font-medium">
<iconify-icon className="text-blue-500 mr-3 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                            Gestão de Redes Sociais
                        </li>
<li className="flex items-start text-sm text-slate-800 font-medium">
<iconify-icon className="text-blue-500 mr-3 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                            Criação de Vídeos (Reels)
                        </li>
<li className="flex items-start text-sm text-slate-800 font-medium">
<iconify-icon className="text-blue-500 mr-3 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                            Gestão de Tráfego Pago (Meta)
                        </li>
<li className="flex items-start text-sm text-slate-800 font-medium">
<iconify-icon className="text-blue-500 mr-3 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                            Relatório de Performance
                        </li>
</ul>
<a className="w-full inline-flex justify-center items-center py-3.5 px-4 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all" href="#contato">
                        Quero Este Plano
                    </a>
</div>

<div className="flex flex-col bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 reveal-left delay-300 hover:-translate-y-2">
<div className="mb-6">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Completo (Redes + Google)</h3>
<p className="text-xs text-slate-500 mt-1">Dominação em todas as plataformas.</p>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex items-start text-sm text-slate-600">
<iconify-icon className="text-slate-300 mr-3 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                            Tudo do Gerenciamento Completo
                        </li>
<li className="flex items-start text-sm text-slate-600">
<iconify-icon className="text-slate-300 mr-3 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                            Gestão de Google Ads
                        </li>
<li className="flex items-start text-sm text-slate-600">
<iconify-icon className="text-slate-300 mr-3 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                            Otimização de Conversão
                        </li>
</ul>
<a className="w-full inline-flex justify-center items-center py-3 px-4 text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors" href="#contato">
                        Quero Este Plano
                    </a>
</div>
</div>

<div className="max-w-3xl mx-auto bg-slate-50/80 backdrop-blur-sm border border-slate-200 rounded-3xl p-8 text-center reveal-up delay-400 mt-12 hover:shadow-lg transition-shadow duration-500">
<p className="text-sm font-medium text-slate-900 mb-5">
                    Não sabe qual plano escolher? Fale conosco e criamos uma estratégia personalizada.
                </p>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-md hover:-translate-y-1" href="#contato">
<iconify-icon className="mr-2 text-lg" icon="solar:chat-round-dots-linear"></iconify-icon>
                    Falar com Especialista
                </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 px-6 border-t border-slate-200 overflow-hidden" id="sobre">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal-right">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                    Especialistas em Transformar Presença em Resultados Reais
                </h2>
<div className="space-y-6 text-sm text-slate-600 leading-relaxed mb-8">
<p>
                        A Marques Gestão Digital nasceu com um propósito claro: acabar com a complexidade do marketing e entregar o que realmente importa para o seu negócio: <strong className="text-slate-900 font-medium">crescimento e vendas.</strong>
</p>
<p>
                        Acreditamos em um atendimento próximo e humanizado. Baseamos cada decisão em dados concretos para garantir que seu investimento tenha retorno real.
                    </p>
</div>
<a className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group" href="#contato">
                    Conheça nossa metodologia
                    <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal-left delay-200 parallax-layer" data-speed="0.05">
<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
<div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-blue-600" icon="solar:target-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-slate-900 mb-2">Foco em Resultado</h4>
<p className="text-xs text-slate-500 leading-relaxed">Métricas de conversão que realmente importam.</p>
</div>
<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 sm:translate-y-8">
<div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-blue-600" icon="solar:hand-shake-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-slate-900 mb-2">Parceria Verdadeira</h4>
<p className="text-xs text-slate-500 leading-relaxed">Atendimento próximo e suporte contínuo.</p>
</div>
<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
<div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-blue-600" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-slate-900 mb-2">Solução Completa</h4>
<p className="text-xs text-slate-500 leading-relaxed">Do design inicial ao anúncio otimizado.</p>
</div>
<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 sm:translate-y-8">
<div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-blue-600" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-slate-900 mb-2">Transparência Total</h4>
<p className="text-xs text-slate-500 leading-relaxed">Acesso claro e direto aos dados do projeto.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white overflow-hidden" id="contato">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-up">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Vamos Conversar Sobre Seu Projeto?</h2>
<p className="text-sm text-slate-500">Entre em contato direto ou preencha o formulário abaixo para uma análise inicial.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white rounded-[2rem] border border-slate-100 shadow-2xl shadow-slate-200/50 reveal-scale delay-100 overflow-hidden">

<div className="lg:col-span-2 bg-slate-900 text-white p-10 sm:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-blue-600 rounded-full blur-[6rem] opacity-40 animate-float pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-48 h-48 bg-blue-400 rounded-full blur-[5rem] opacity-20 pointer-events-none"></div>
<h3 className="text-2xl font-semibold tracking-tight mb-10 relative z-10">Informações de Contato</h3>
<div className="space-y-8 relative z-10">
<a className="flex items-start group" href="#">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-5 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300 shrink-0">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 mb-1">WhatsApp</p>
<p className="text-base font-medium group-hover:text-blue-400 transition-colors">(47) 9148-3665</p>
</div>
</a>
<a className="flex items-start group" href="#">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-5 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300 shrink-0">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 mb-1">Instagram</p>
<p className="text-base font-medium group-hover:text-blue-400 transition-colors">@marquesgestaodigital</p>
</div>
</a>
<div className="flex items-start group">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-5 shrink-0 group-hover:bg-white/20 transition-colors">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 mb-1">Endereço</p>
<p className="text-sm font-medium leading-relaxed">Av. Nilo Bittencourt, 306<br/>São Vicente, Itajaí – SC</p>
</div>
</div>
<div className="flex items-start group">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-5 shrink-0 group-hover:bg-white/20 transition-colors">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 mb-1">Horário</p>
<p className="text-sm font-medium">Seg a Sáb – 09h às 19h</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 p-10 sm:p-14 bg-slate-50/50">
<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="relative group">
<input className="peer w-full bg-white border border-slate-200 rounded-xl px-4 pt-6 pb-2 text-sm text-slate-900 placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm" id="nome" placeholder="Nome Completo" type="text"/>
<label className="absolute left-4 top-2 text-xs font-medium text-slate-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 cursor-text" htmlFor="nome">Nome Completo</label>
</div>
<div className="relative group">
<input className="peer w-full bg-white border border-slate-200 rounded-xl px-4 pt-6 pb-2 text-sm text-slate-900 placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm" id="telefone" placeholder="WhatsApp" type="tel"/>
<label className="absolute left-4 top-2 text-xs font-medium text-slate-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 cursor-text" htmlFor="telefone">Telefone / WhatsApp</label>
</div>
</div>
<div className="relative group">
<input className="peer w-full bg-white border border-slate-200 rounded-xl px-4 pt-6 pb-2 text-sm text-slate-900 placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm" id="email" placeholder="E-mail" type="email"/>
<label className="absolute left-4 top-2 text-xs font-medium text-slate-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 cursor-text" htmlFor="email">E-mail</label>
</div>
<div className="relative group">
<textarea className="peer w-full bg-white border border-slate-200 rounded-xl px-4 pt-6 pb-2 text-sm text-slate-900 placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none shadow-sm" id="mensagem" placeholder="Mensagem" rows="4"></textarea>
<label className="absolute left-4 top-2 text-xs font-medium text-slate-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 cursor-text" htmlFor="mensagem">Conte-nos sobre seu negócio...</label>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
<p className="text-xs text-slate-500 flex items-center">
<iconify-icon className="mr-2 text-lg text-blue-600" icon="solar:shield-check-linear"></iconify-icon>
                                Suas informações estão seguras conosco.
                            </p>
<button className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-sm font-medium text-white bg-slate-900 rounded-xl hover:bg-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-md hover:-translate-y-1" type="submit">
                                Enviar Mensagem
                            </button>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="py-32 bg-blue-600 px-6 relative overflow-hidden">

<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute top-0 left-1/4 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 to-transparent opacity-50"></div>
<div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-400 rounded-full blur-[8rem] opacity-60 animate-float"></div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10 reveal-scale">
<h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white mb-10 leading-tight">
                Pronto Para Impulsionar Seu Negócio?
            </h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-sm font-semibold text-blue-700 bg-white rounded-full hover:bg-slate-50 transition-all duration-300 shadow-xl shadow-black/10 hover:-translate-y-1 hover:scale-105 animate-pulse-soft" href="#contato" style={{animationDuration: '4s'}}>
                    Falar no WhatsApp
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-sm font-medium text-white border border-blue-400/50 rounded-full hover:bg-blue-700 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1" href="#planos">
                    Ver Planos
                </a>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 px-6 border-t border-slate-100 reveal-up">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div className="lg:col-span-1">
<a className="text-xl font-semibold tracking-tight text-slate-900 flex items-center gap-2 mb-6 group" href="#">
<div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm font-semibold group-hover:scale-110 transition-transform">M</div>
                    MGD
                </a>
<p className="text-sm text-slate-500 mb-8 leading-relaxed">
                    Agência especializada em transformar presença digital em vendas reais através de estratégias validadas e performance.
                </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:-translate-y-1 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:-translate-y-1 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-slate-900 mb-6">Links Rápidos</h4>
<ul className="space-y-4">
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Início</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#servicos">Serviços</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#planos">Planos</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#sobre">Sobre Nós</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-slate-900 mb-6">Serviços</h4>
<ul className="space-y-4">
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#servicos">Gestão de Redes Sociais</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#servicos">Tráfego Pago</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#servicos">Google Ads</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#servicos">Artes e Vídeos</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-slate-900 mb-6">Contato</h4>
<ul className="space-y-4">
<li className="flex items-start text-sm text-slate-500 group cursor-default">
<iconify-icon className="mr-3 mt-0.5 text-slate-400 group-hover:text-blue-600 transition-colors" icon="solar:phone-linear"></iconify-icon>
                        (47) 9148-3665
                    </li>
<li className="flex items-start text-sm text-slate-500 group cursor-default">
<iconify-icon className="mr-3 mt-0.5 text-slate-400 group-hover:text-blue-600 transition-colors" icon="solar:letter-linear"></iconify-icon>
                        contato@marquesgestao.com
                    </li>
<li className="flex items-start text-sm text-slate-500 group cursor-default">
<iconify-icon className="mr-3 mt-0.5 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0" icon="solar:map-point-linear"></iconify-icon>
                        Itajaí - SC
                    </li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">
                © 2025 Marques Gestão Digital. Todos os direitos reservados.
            </p>
<p className="text-xs text-slate-400 flex items-center gap-1.5">
                Construído para <span className="text-slate-900 font-medium">Conversão</span>.
            </p>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl shadow-green-600/30 hover:scale-110 hover:-translate-y-1 transition-all duration-300" href="#">
<iconify-icon className="text-2xl" icon="solar:phone-bold"></iconify-icon>
</a>



    </>
  );
}
