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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", (event) => {
            // GSAP Animations
            gsap.registerPlugin(ScrollTrigger);

            gsap.from(".hero-text", {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.2
            });

            gsap.utils.toArray('.reveal').forEach(element => {
                gsap.from(element, {
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out"
                });
            });

            // Navbar Blur effect adjustment
            const nav = document.querySelector('nav');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    nav.classList.add('shadow-sm');
                } else {
                    nav.classList.remove('shadow-sm');
                }
            });

            // FAQ Accordion
            const faqToggles = document.querySelectorAll('.faq-toggle');
            faqToggles.forEach(toggle => {
                toggle.addEventListener('click', () => {
                    const content = toggle.nextElementSibling;
                    const icon = toggle.querySelector('iconify-icon');
                    
                    // Close others
                    document.querySelectorAll('.faq-content').forEach(c => {
                        if (c !== content) {
                            c.classList.remove('open');
                            c.previousElementSibling.querySelector('iconify-icon').style.transform = 'rotate(0deg)';
                        }
                    });

                    // Toggle current
                    if (content.classList.contains('open')) {
                        content.classList.remove('open');
                        icon.style.transform = 'rotate(0deg)';
                    } else {
                        content.classList.add('open');
                        icon.style.transform = 'rotate(180deg)';
                    }
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
      

<nav className="fixed w-full z-50 glass-nav transition-all duration-300 py-4">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<a className="font-display text-xl font-medium tracking-tighter text-gray-900" href="#">
                JHON
            </a>
<div className="hidden md:flex gap-8 items-center text-sm font-light text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#diferenciais">Diferenciais</a>
<a className="hover:text-gray-900 transition-colors" href="#servicos">Serviços</a>
<a className="hover:text-gray-900 transition-colors" href="#processo">Como Funciona</a>
<a className="hover:text-gray-900 transition-colors" href="#unidades">Unidades</a>
</div>
<a className="group relative px-5 py-2 text-sm font-medium text-white overflow-hidden rounded-full bg-[#00a1fc] hover:bg-[#008be5] transition-all duration-300 shadow-sm shadow-[#00a1fc]/20" href="https://api.whatsapp.com/send/?phone=558321786881&amp;text&amp;type=phone_number&amp;app_absent=0" target="_blank">
<span className="relative z-10 flex items-center gap-2">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
                    Agendar Revisão
                </span>
</a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">

<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#00a1fc]/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gray-200/50 rounded-full blur-[100px]"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] opacity-[0.03] object-cover mix-blend-multiply"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center mt-12">
<div className="hero-text inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs font-medium text-[#00a1fc] mb-8 uppercase tracking-widest bg-white">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
                A Melhor Oficina de João Pessoa
            </div>
<h1 className="hero-text font-display text-5xl md:text-7xl font-medium tracking-tighter text-gradient leading-tight mb-6 max-w-4xl">
                Padrão de concessionária.<br/>
<span className="text-gray-900">Preço de Auto Center.</span>
</h1>
<p className="hero-text text-base md:text-lg text-gray-500 font-light max-w-2xl mb-12">
                Centro Automotivo Premium. Diagnóstico preciso, peças de alta qualidade e atendimento exclusivo em duas unidades preparadas para o seu veículo.
            </p>
<div className="hero-text flex flex-col sm:flex-row gap-4">
<a className="px-8 py-4 rounded-full bg-[#00a1fc] text-white text-sm font-medium hover:bg-[#008be5] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#00a1fc]/20 hover:shadow-[#00a1fc]/40" href="https://api.whatsapp.com/send/?phone=558321786881&amp;text&amp;type=phone_number&amp;app_absent=0" target="_blank">
                    Falar com Especialista
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="px-8 py-4 rounded-full bg-white border border-gray-200 text-gray-900 text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center" href="#servicos">
                    Explorar Serviços
                </a>
</div>
</div>
</section>

<section className="py-8 border-y border-gray-100 bg-gray-50/50">
<div className="marquee-container w-full">
<div className="marquee-content gap-12 items-center text-sm font-light text-gray-400 uppercase tracking-widest">
<span>Diagnóstico de Motor</span> •
                <span>Injeção Eletrônica</span> •
                <span>Transmissão Automática</span> •
                <span>Ar-Condicionado</span> •
                <span>Suspensão e Direção</span> •
                <span>Freios</span> •
                <span>Autoelétrico</span> •
                <span>Alinhamento 3D</span> •
                <span>Balanceamento</span> •
                
<span>Diagnóstico de Motor</span> •
                <span>Injeção Eletrônica</span> •
                <span>Transmissão Automática</span> •
                <span>Ar-Condicionado</span> •
                <span>Suspensão e Direção</span> •
                <span>Freios</span> •
                <span>Autoelétrico</span> •
                <span>Alinhamento 3D</span> •
                <span>Balanceamento</span>
</div>
</div>
</section>

<section className="py-24 relative bg-white" id="diferenciais">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal text-center md:text-left">
<h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">A excelência está nos detalhes.</h2>
<p className="text-sm text-gray-500 font-light max-w-xl mx-auto md:mx-0">Nossa estrutura foi projetada para oferecer transparência, conforto e resolutividade máxima para o seu automóvel.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">

<div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group reveal flex flex-col justify-between">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#00a1fc] rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
<iconify-icon className="text-3xl text-[#00a1fc] mb-4" icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
<div className="relative z-10">
<h3 className="font-display text-2xl font-medium tracking-tight text-gray-900 mb-2">Eleita a Melhor Oficina</h3>
<p className="text-sm text-gray-500 font-light max-w-md">Reconhecimento conquistado através de milhares de atendimentos bem-sucedidos em João Pessoa. Qualidade comprovada por quem exige o melhor.</p>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden group reveal flex flex-col justify-between">
<iconify-icon className="text-3xl text-gray-400 group-hover:text-[#00a1fc] transition-colors" icon="solar:sofa-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h3 className="font-display text-xl font-medium tracking-tight text-gray-900 mb-2">Conforto Absoluto</h3>
<p className="text-xs text-gray-500 font-light">Sala de espera climatizada com água, café e Wi-Fi enquanto preparamos seu veículo.</p>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden group reveal flex flex-col justify-between bg-gradient-brand">
<iconify-icon className="text-3xl text-[#00a1fc]" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h3 className="font-display text-xl font-medium tracking-tight text-gray-900 mb-2">Duas Unidades</h3>
<p className="text-xs text-gray-500 font-light">Estrategicamente localizadas nos bairros dos Ipês e Torre para melhor lhe atender.</p>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group reveal flex flex-col justify-between">
<div className="absolute right-0 bottom-0 opacity-5 w-1/2 h-full grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-none" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1486262715619-670810a07971?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center', maskImage: 'linear-gradient(to right, transparent, black)', WebkitMaskImage: 'linear-gradient(to right, transparent, black)'}}></div>
<iconify-icon className="text-3xl text-gray-400 group-hover:text-[#00a1fc] transition-colors mb-4 relative z-10" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
<div className="relative z-10">
<h3 className="font-display text-2xl font-medium tracking-tight text-gray-900 mb-2">Diagnóstico Computadorizado</h3>
<p className="text-sm text-gray-500 font-light max-w-md">Tecnologia de ponta para identificar falhas com precisão milimétrica em motores, sistemas elétricos e transmissões modernas.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50/50 border-y border-gray-100" id="processo">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">Como funciona nosso atendimento</h2>
<p className="text-sm text-gray-500 font-light max-w-xl mx-auto">Um processo transparente desenhado para que você tenha controle total e zero surpresas.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative reveal">

<div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#00a1fc] mb-6 group-hover:border-[#00a1fc] group-hover:shadow-md transition-all">
<iconify-icon className="text-xl" icon="solar:calendar-add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display text-lg font-medium tracking-tight text-gray-900 mb-2">1. Agendamento</h3>
<p className="text-xs text-gray-500 font-light">Marque via WhatsApp ou telefone na unidade mais conveniente.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#00a1fc] mb-6 group-hover:border-[#00a1fc] group-hover:shadow-md transition-all">
<iconify-icon className="text-xl" icon="solar:scanner-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display text-lg font-medium tracking-tight text-gray-900 mb-2">2. Diagnóstico</h3>
<p className="text-xs text-gray-500 font-light">Análise computadorizada e física completa do seu veículo.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#00a1fc] mb-6 group-hover:border-[#00a1fc] group-hover:shadow-md transition-all">
<iconify-icon className="text-xl" icon="solar:clipboard-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display text-lg font-medium tracking-tight text-gray-900 mb-2">3. Orçamento</h3>
<p className="text-xs text-gray-500 font-light">Envio do laudo transparente com peças e serviços necessários.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#00a1fc] mb-6 group-hover:border-[#00a1fc] group-hover:shadow-md transition-all">
<iconify-icon className="text-xl" icon="solar:key-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display text-lg font-medium tracking-tight text-gray-900 mb-2">4. Entrega</h3>
<p className="text-xs text-gray-500 font-light">Execução premium e veículo entregue limpo e revisado.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="servicos">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal gap-6">
<div>
<h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">Soluções Completas.</h2>
<p className="text-sm text-gray-500 font-light max-w-xl">Do diagnóstico avançado à manutenção preventiva. Expertise técnica para manter seu veículo sempre novo.</p>
</div>
<a className="text-sm font-medium text-[#00a1fc] hover:text-[#008be5] transition-colors flex items-center gap-2 pb-1 border-b border-[#00a1fc]/30 hover:border-[#00a1fc]" href="https://api.whatsapp.com/send/?phone=558321786881&amp;text=Gostaria%20de%20saber%20mais%20sobre%20os%20serviços" target="_blank">
                    Consultar todos os serviços
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 reveal">

<div className="glass-panel p-8 rounded-2xl">
<div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-[#00a1fc]" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display text-lg font-medium tracking-tight text-gray-900 mb-4">Mecânica Geral</h3>
<ul className="space-y-3 text-xs text-gray-500 font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Diagnóstico de motor</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Retífica parcial/total</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Sistema de exaustão</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Correias e ignição</li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl">
<div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-[#00a1fc]" icon="solar:wheel-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display text-lg font-medium tracking-tight text-gray-900 mb-4">Suspensão &amp; Freios</h3>
<ul className="space-y-3 text-xs text-gray-500 font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Reparo de suspensão</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Amortecedores e molas</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Pastilhas e discos</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Fluido de freio</li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl">
<div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-[#00a1fc]" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display text-lg font-medium tracking-tight text-gray-900 mb-4">Elétrica &amp; Injeção</h3>
<ul className="space-y-3 text-xs text-gray-500 font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Autoelétrico completo</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Limpeza de bicos</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Manutenção de bateria</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Módulos e sensores</li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl">
<div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-[#00a1fc]" icon="solar:snowflake-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display text-lg font-medium tracking-tight text-gray-900 mb-4">Climatização</h3>
<ul className="space-y-3 text-xs text-gray-500 font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Higienização de Ar</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Carga de gás (Fluido)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Troca de filtro de cabine</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Reparo de compressores</li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl">
<div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-[#00a1fc]" icon="solar:gas-station-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display text-lg font-medium tracking-tight text-gray-900 mb-4">Troca de Óleo</h3>
<ul className="space-y-3 text-xs text-gray-500 font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Óleos sintéticos premium</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Filtro de óleo original</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Fluido de transmissão</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Lubrificação geral</li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl">
<div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-[#00a1fc]" icon="solar:ruler-pen-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display text-lg font-medium tracking-tight text-gray-900 mb-4">Pneus &amp; Geometria</h3>
<ul className="space-y-3 text-xs text-gray-500 font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Alinhamento 3D</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Balanceamento preciso</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Rodízio de pneus</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Desempeno de rodas</li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl">
<div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-[#00a1fc]" icon="solar:transmission-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display text-lg font-medium tracking-tight text-gray-900 mb-4">Transmissão</h3>
<ul className="space-y-3 text-xs text-gray-500 font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Reparo de câmbio auto</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Embreagem completa</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Troca de fluido ATF</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Diagnóstico eletrônico</li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl">
<div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-[#00a1fc]" icon="solar:clipboard-list-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display text-lg font-medium tracking-tight text-gray-900 mb-4">Revisão Programada</h3>
<ul className="space-y-3 text-xs text-gray-500 font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Revisão por quilometragem</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Check-up de viagem</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Inspeção pré-compra</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00a1fc]/60" icon="solar:check-circle-linear"></iconify-icon> Check-list de 50 itens</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-gray-50 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-center text-gray-900 mb-16 reveal">A voz de quem confia.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl reveal">
<div className="flex text-[#00a1fc] mb-6">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-gray-600 font-light mb-8 leading-relaxed">"Sala de espera completa: Agua, café e instalações confortáveis. Excelente serviço executado no meu carro, cumpriram rigorosamente o prazo."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm text-gray-900 font-medium border border-gray-200">C</div>
<div>
<p className="text-sm text-gray-900 font-medium">Carlos R.</p>
<span className="text-xs text-gray-500 font-light">Cliente Unidade Ipês</span>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl reveal">
<div className="flex text-[#00a1fc] mb-6">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-gray-600 font-light mb-8 leading-relaxed">"Atendimento ótimo, ótimos mecânicos e são responsáveis top. Recomendo de olhos fechados para qualquer serviço, do mais simples ao complexo."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm text-gray-900 font-medium border border-gray-200">M</div>
<div>
<p className="text-sm text-gray-900 font-medium">Marcio T.</p>
<span className="text-xs text-gray-500 font-light">Motorista de Aplicativo</span>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl reveal">
<div className="flex text-[#00a1fc] mb-6">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-gray-600 font-light mb-8 leading-relaxed">"Excelente profissional, têm tudo pra se destacar no mercado. Muita transparência na hora de passar o orçamento, sem tentar empurrar serviços extras."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm text-gray-900 font-medium border border-gray-200">P</div>
<div>
<p className="text-sm text-gray-900 font-medium">Paulo S.</p>
<span className="text-xs text-gray-500 font-light">Cliente Unidade Torre</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12 reveal">
<h2 className="font-display text-3xl font-medium tracking-tight text-gray-900 mb-4">Perguntas Frequentes</h2>
</div>
<div className="space-y-4 reveal">

<div className="glass-panel rounded-xl overflow-hidden">
<button className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none faq-toggle">
<span className="font-medium text-sm text-gray-900">Vocês atendem todas as marcas de veículos?</span>
<iconify-icon className="text-gray-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content bg-gray-50/50">
<div className="faq-inner px-6 pb-4 text-sm text-gray-500 font-light">
                            Sim, nossa equipe é qualificada e possuímos equipamentos de diagnóstico atualizados para atender veículos nacionais e importados de todas as montadoras.
                        </div>
</div>
</div>

<div className="glass-panel rounded-xl overflow-hidden">
<button className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none faq-toggle">
<span className="font-medium text-sm text-gray-900">Preciso agendar horário para serviços rápidos?</span>
<iconify-icon className="text-gray-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content bg-gray-50/50">
<div className="faq-inner px-6 pb-4 text-sm text-gray-500 font-light">
                            Embora aceitemos clientes sem agendamento (encaixes), recomendamos fortemente agendar via WhatsApp para garantir atendimento imediato e sem filas, mesmo para trocas de óleo.
                        </div>
</div>
</div>

<div className="glass-panel rounded-xl overflow-hidden">
<button className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none faq-toggle">
<span className="font-medium text-sm text-gray-900">As peças possuem garantia?</span>
<iconify-icon className="text-gray-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content bg-gray-50/50">
<div className="faq-inner px-6 pb-4 text-sm text-gray-500 font-light">
                            Com certeza. Trabalhamos apenas com peças de primeira linha e originais. Oferecemos garantia legal em todas as peças aplicadas e também nos serviços de mão de obra prestados.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-100" id="unidades">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-12 text-center reveal">Encontre nossa unidade mais próxima.</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal">

<div className="flex flex-col gap-4">
<div className="glass-panel p-8 rounded-2xl flex flex-col sm:flex-row gap-6 items-start justify-between">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs font-medium text-gray-900 mb-4">
                                📍 Loja dos Ipês
                            </div>
<p className="text-sm text-gray-600 font-light leading-relaxed mb-2">
                                Av. Presidente Tancredo Neves, 195<br/>
                                Bairro dos Ipês, João Pessoa - PB<br/>
                                58028-840
                            </p>
<a className="text-xs font-medium text-[#00a1fc] hover:underline mt-2 inline-block" href="https://api.whatsapp.com/send/?phone=558321786881" target="_blank">Falar com a Unidade Ipês</a>
</div>
<a className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#00a1fc] hover:border-[#00a1fc] transition-all shrink-0" href="https://maps.google.com/?q=Av.+Presidente+Tancredo+Neves,+195+-+Bairro+dos+Ipês,+João+Pessoa" target="_blank">
<iconify-icon className="text-xl" icon="solar:map-arrow-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="w-full h-64 rounded-2xl overflow-hidden glass-panel p-1">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://maps.google.com/maps?q=Av.+Presidente+Tancredo+Neves,+195+-+Bairro+dos+Ip%C3%AAs,+Jo%C3%A3o+Pessoa&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{border: '0', borderRadius: '12px'}} width="100%"></iframe>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="glass-panel p-8 rounded-2xl flex flex-col sm:flex-row gap-6 items-start justify-between">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs font-medium text-gray-900 mb-4">
                                📍 Loja da Torre
                            </div>
<p className="text-sm text-gray-600 font-light leading-relaxed mb-2">
                                Av. Dom Pedro II, 1299<br/>
                                Torre, João Pessoa - PB<br/>
                                58040-440
                            </p>
<a className="text-xs font-medium text-[#00a1fc] hover:underline mt-2 inline-block" href="https://api.whatsapp.com/send/?phone=558321786881" target="_blank">Falar com a Unidade Torre</a>
</div>
<a className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#00a1fc] hover:border-[#00a1fc] transition-all shrink-0" href="https://maps.google.com/?q=Av.+Dom+Pedro+II,+1299+-+Torre,+João+Pessoa" target="_blank">
<iconify-icon className="text-xl" icon="solar:map-arrow-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="w-full h-64 rounded-2xl overflow-hidden glass-panel p-1">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://maps.google.com/maps?q=Av.+Dom+Pedro+II,+1299+-+Torre,+Jo%C3%A3o+Pessoa&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{border: '0', borderRadius: '12px'}} width="100%"></iframe>
</div>
</div>
</div>
<div className="mt-16 flex justify-center reveal">
<a className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm hover:shadow-md" href="https://www.instagram.com/jhonautocenter/" target="_blank">
<iconify-icon className="text-lg text-[#00a1fc]" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
                    Siga nosso trabalho no Instagram
                </a>
</div>
</div>
</section>

<footer className="py-12 border-t border-gray-200 bg-white text-center">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<span className="font-display text-2xl font-medium tracking-tighter text-gray-900 mb-4">JHON</span>
<p className="text-xs text-gray-400 font-light mb-6">
                © 2026 Centro Automotivo Porto Serviço. Todos os direitos reservados.
            </p>
</div>
</footer>



    </>
  );
}
