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
      

<header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#E8EDEB] transition-all h-[72px] flex items-center">
<div className="max-w-[1200px] w-full mx-auto px-6 lg:px-8 flex items-center justify-between">

<a className="flex items-center gap-3" href="#">
<div className="w-10 h-10 bg-[#0D4A35] rounded-lg flex items-center justify-center text-white">
<iconify-icon height="24" icon="solar:hospital-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex items-center gap-1.5">
<span className="font-playfair font-semibold text-[#0D4A35] text-lg leading-tight tracking-tight">Evanice Rocha</span>
<span className="text-[#6B7280] text-sm font-medium">|</span>
<span className="text-[#6B7280] text-xs font-medium tracking-widest uppercase leading-none mt-0.5">Hospital</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-[#374151] hover:text-[#0D4A35] relative group transition-colors" href="#especialidades">
                    Especialidades
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00B894] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-[#374151] hover:text-[#0D4A35] relative group transition-colors" href="#exames">
                    Exames
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00B894] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-[#374151] hover:text-[#0D4A35] relative group transition-colors" href="#unidades">
                    Nossas Unidades
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00B894] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-[#374151] hover:text-[#0D4A35] relative group transition-colors" href="#faq">
                    Dúvidas Frequentes
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00B894] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="bg-[#0D4A35] text-white px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-[#1B5E42] transition-colors ml-4 shadow-sm" href="https://wa.me/5575986218124" target="_blank">
                    💬 Agendar pelo WhatsApp
                </a>
</nav>

<button className="lg:hidden text-[#0D4A35] p-2">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</header>

<section className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 bg-[linear-gradient(135deg,#F0F7F4_0%,#F8F6F1_100%)] overflow-hidden">
<div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-[55%] flex flex-col items-start z-10">
<div className="border border-[#0D4A35]/20 text-[#0D4A35] bg-transparent rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.15em] uppercase mb-8 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#00B894]"></span>
                    CUIDADO E DEDICAÇÃO
                </div>
<h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-semibold text-[#0D4A35] leading-[1.1] mb-6 tracking-tight">
                    Medicina <span className="text-[#00B894] italic font-normal">humana</span>,<br/>resultados precisos.
                </h1>
<p className="font-inter text-base lg:text-lg text-[#6B7280] leading-[1.7] max-w-[480px] mb-10">
                    Referência em saúde na Bahia, unindo tecnologia avançada e corpo clínico experiente para atendimentos particulares e 100% SUS.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="bg-[#0D4A35] text-white px-7 py-3.5 rounded-lg text-base font-medium flex items-center justify-center gap-2 hover:bg-[#1B5E42] transition-colors shadow-[0_4px_16px_rgba(13,74,53,0.15)]" href="https://wa.me/5575986218124" target="_blank">
                        Agendar via WhatsApp
                        <iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="bg-white border-[1.5px] border-[#0D4A35] text-[#0D4A35] px-7 py-3.5 rounded-lg text-base font-medium flex items-center justify-center hover:bg-[#F0F7F4] transition-colors" href="#unidades">
                        Conhecer Estrutura
                    </a>
</div>
</div>

<div className="w-full lg:w-[45%] relative mt-10 lg:mt-0">
<img alt="Médico em atendimento humanizado" className="w-full h-[400px] lg:h-[540px] object-cover rounded-tl-[32px] rounded-br-[32px] rounded-tr-[4px] rounded-bl-[4px] shadow-[0_20px_40px_rgba(13,74,53,0.12)]" src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-6 -left-4 lg:-left-10 bg-white p-5 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex items-center gap-4 border border-[#F0F7F4]">
<div className="w-12 h-12 bg-[#F0FAF7] rounded-lg text-[#00B894] flex items-center justify-center shrink-0">
<iconify-icon height="28" icon="solar:verified-check-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<p className="font-playfair font-semibold text-[#1A1A2E] text-lg leading-tight mb-0.5 tracking-tight">✓ Certificado</p>
<p className="font-inter text-sm text-[#6B7280]">100% Qualidade e Ética</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8F6F1]">
<div className="max-w-[1200px] mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] premium-hover">
<div className="w-12 h-12 bg-[#E8F5F0] rounded-xl flex items-center justify-center text-[#0D4A35] mb-6">
<iconify-icon height="24" icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-playfair text-xl font-medium text-[#0D4A35] mb-3 tracking-tight">Estrutura Moderna</h3>
<p className="font-inter text-sm text-[#6B7280] leading-[1.7]">Ambientes projetados para o máximo conforto, equipados com tecnologia diagnóstica de ponta.</p>
</div>

<div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] premium-hover">
<div className="w-12 h-12 bg-[#E8F5F0] rounded-xl flex items-center justify-center text-[#0D4A35] mb-6">
<iconify-icon height="24" icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-playfair text-xl font-medium text-[#0D4A35] mb-3 tracking-tight">Corpo Clínico</h3>
<p className="font-inter text-sm text-[#6B7280] leading-[1.7]">Especialistas com formação rigorosa, selecionados pela excelência técnica e empatia.</p>
</div>

<div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] premium-hover">
<div className="w-12 h-12 bg-[#E8F5F0] rounded-xl flex items-center justify-center text-[#0D4A35] mb-6">
<iconify-icon height="24" icon="solar:heart-pulse-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-playfair text-xl font-medium text-[#0D4A35] mb-3 tracking-tight">Acesso Amplo</h3>
<p className="font-inter text-sm text-[#6B7280] leading-[1.7]">Atendimentos ágeis para pacientes particulares e serviços referenciados 100% SUS.</p>
</div>

<div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] premium-hover">
<div className="w-12 h-12 bg-[#E8F5F0] rounded-xl flex items-center justify-center text-[#0D4A35] mb-6">
<iconify-icon height="24" icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-playfair text-xl font-medium text-[#0D4A35] mb-3 tracking-tight">Segurança Total</h3>
<p className="font-inter text-sm text-[#6B7280] leading-[1.7]">Protocolos sanitários e de esterilização que excedem os padrões normativos nacionais.</p>
</div>
</div>
</div>
</section>

<section className="bg-texture-dark py-16">
<div className="max-w-[1000px] mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
<div className="bg-[#00B894]/20 text-[#00B894] px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 flex items-center gap-2">
<iconify-icon icon="solar:danger-triangle-linear" width="16"></iconify-icon>
                Informação Importante
            </div>
<h2 className="font-playfair text-3xl lg:text-4xl font-semibold text-white mb-4 leading-tight tracking-tight max-w-[600px]">
                Nossas unidades não atendem por Planos de Saúde Privados.
            </h2>
<p className="font-inter text-base text-white/80 max-w-[700px] mx-auto leading-[1.6] mb-8">
                Temos orgulho de direcionar todos os nossos esforços para oferecer um atendimento acessível, de classe e excelência para toda a população.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
<div className="bg-white px-6 py-3 rounded-lg flex items-center justify-center gap-3 w-full sm:w-auto">
<iconify-icon className="text-[#0D4A35]" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-inter font-medium text-[#0D4A35] text-sm">100% SUS</span>
</div>
<div className="bg-white px-6 py-3 rounded-lg flex items-center justify-center gap-3 w-full sm:w-auto">
<iconify-icon className="text-[#0D4A35]" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-inter font-medium text-[#0D4A35] text-sm">Pacientes Particulares</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8F6F1]" id="especialidades">
<div className="max-w-[1200px] mx-auto px-6 lg:px-8">
<div className="mb-16">
<h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-[#0D4A35] leading-tight tracking-tight">
                    Especialidades Médicas
                </h2>
<div className="section-divider"></div>
<p className="font-inter text-base lg:text-lg text-[#6B7280] leading-[1.7] max-w-[650px]">
                    Abordagem multidisciplinar com mais de 20 áreas dedicadas à sua saúde, garantindo diagnósticos precisos e tratamentos eficazes.
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="specialty-card bg-white border border-[#E2EAE8] rounded-xl p-5 flex items-center gap-4 cursor-pointer">
<div className="w-10 h-10 bg-[#E8F5F0] rounded-lg flex items-center justify-center text-[#0D4A35] shrink-0">
<iconify-icon height="22" icon="solar:heart-pulse-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div>
<h4 className="font-inter font-medium text-[#1A1A2E] text-base leading-tight mb-1">Cardiologia</h4>
<p className="font-inter text-[#6B7280] text-xs leading-snug">Prevenção e tratamento cardíaco</p>
</div>
</div>

<div className="specialty-card bg-white border border-[#E2EAE8] rounded-xl p-5 flex items-center gap-4 cursor-pointer">
<div className="w-10 h-10 bg-[#E8F5F0] rounded-lg flex items-center justify-center text-[#0D4A35] shrink-0">
<iconify-icon height="22" icon="solar:bone-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div>
<h4 className="font-inter font-medium text-[#1A1A2E] text-base leading-tight mb-1">Ortopedia</h4>
<p className="font-inter text-[#6B7280] text-xs leading-snug">Traumatologia e mobilidade</p>
</div>
</div>

<div className="specialty-card bg-white border border-[#E2EAE8] rounded-xl p-5 flex items-center gap-4 cursor-pointer">
<div className="w-10 h-10 bg-[#E8F5F0] rounded-lg flex items-center justify-center text-[#0D4A35] shrink-0">
<iconify-icon height="22" icon="solar:user-rounded-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div>
<h4 className="font-inter font-medium text-[#1A1A2E] text-base leading-tight mb-1">Ginecologia</h4>
<p className="font-inter text-[#6B7280] text-xs leading-snug">Saúde da mulher</p>
</div>
</div>

<div className="specialty-card bg-white border border-[#E2EAE8] rounded-xl p-5 flex items-center gap-4 cursor-pointer">
<div className="w-10 h-10 bg-[#E8F5F0] rounded-lg flex items-center justify-center text-[#0D4A35] shrink-0">
<iconify-icon height="22" icon="solar:medical-kit-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div>
<h4 className="font-inter font-medium text-[#1A1A2E] text-base leading-tight mb-1">Pediatria</h4>
<p className="font-inter text-[#6B7280] text-xs leading-snug">Acompanhamento infantil</p>
</div>
</div>

<div className="specialty-card bg-white border border-[#E2EAE8] rounded-xl p-5 flex items-center gap-4 cursor-pointer">
<div className="w-10 h-10 bg-[#E8F5F0] rounded-lg flex items-center justify-center text-[#0D4A35] shrink-0">
<iconify-icon height="22" icon="solar:brain-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div>
<h4 className="font-inter font-medium text-[#1A1A2E] text-base leading-tight mb-1">Neurologia</h4>
<p className="font-inter text-[#6B7280] text-xs leading-snug">Sistema nervoso central</p>
</div>
</div>

<div className="specialty-card bg-white border border-[#E2EAE8] rounded-xl p-5 flex items-center gap-4 cursor-pointer">
<div className="w-10 h-10 bg-[#E8F5F0] rounded-lg flex items-center justify-center text-[#0D4A35] shrink-0">
<iconify-icon height="22" icon="solar:stomach-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div>
<h4 className="font-inter font-medium text-[#1A1A2E] text-base leading-tight mb-1">Gastroenterologia</h4>
<p className="font-inter text-[#6B7280] text-xs leading-snug">Aparelho digestivo e clínico</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center gap-2 text-[#00B894] font-medium text-sm hover:text-[#0D4A35] transition-colors" href="#">
                    Ver a lista completa de especialidades
                    <iconify-icon height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-[#E2EAE8]" id="exames">
<div className="max-w-[1200px] mx-auto px-6 lg:px-8">
<div className="mb-16">
<h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-[#0D4A35] leading-tight tracking-tight">
                    Exames Disponíveis
                </h2>
<div className="section-divider"></div>
<p className="font-inter text-base lg:text-lg text-[#6B7280] leading-[1.7] max-w-[650px]">
                    Diagnósticos precisos para suportar decisões clínicas seguras e eficazes.
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#F8F6F1] rounded-2xl p-6 border border-[#E2EAE8] premium-hover">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0D4A35] mb-6">
<iconify-icon height="24" icon="solar:monitor-heart-rate-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-playfair text-lg font-medium text-[#0D4A35] mb-2 tracking-tight">Ultrassonografia</h3>
<p className="font-inter text-sm text-[#6B7280] leading-[1.6]">Diagnóstico por imagem de alta precisão para avaliação interna detalhada.</p>
</div>

<div className="bg-[#F8F6F1] rounded-2xl p-6 border border-[#E2EAE8] premium-hover">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0D4A35] mb-6">
<iconify-icon height="24" icon="solar:test-tube-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-playfair text-lg font-medium text-[#0D4A35] mb-2 tracking-tight">Laboratoriais</h3>
<p className="font-inter text-sm text-[#6B7280] leading-[1.6]">Testes sanguíneos e análises clínicas com tecnologia certificada de resultados.</p>
</div>

<div className="bg-[#F8F6F1] rounded-2xl p-6 border border-[#E2EAE8] premium-hover">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0D4A35] mb-6">
<iconify-icon height="24" icon="solar:heart-pulse-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-playfair text-lg font-medium text-[#0D4A35] mb-2 tracking-tight">Eletrocardiograma</h3>
<p className="font-inter text-sm text-[#6B7280] leading-[1.6]">Avaliação cardiológica com auxílio ágil e equipamentos modernos.</p>
</div>

<div className="bg-[#F8F6F1] rounded-2xl p-6 border border-[#E2EAE8] premium-hover">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0D4A35] mb-6">
<iconify-icon height="24" icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-playfair text-lg font-medium text-[#0D4A35] mb-2 tracking-tight">Preventivo</h3>
<p className="font-inter text-sm text-[#6B7280] leading-[1.6]">Exames fundamentais para prevenção e rastreamento precoce de patologias.</p>
</div>
</div>
</div>
</section>

<section className="bg-texture-dark py-24">
<div className="max-w-[1200px] mx-auto px-6 lg:px-8">
<div className="mb-16">
<h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
                    Experiências que falam por nós
                </h2>
<div className="section-divider"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8">
<div className="flex gap-1 text-[#C9A84C] mb-5">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="font-playfair italic text-lg text-white leading-[1.7] mb-6 opacity-95">
                        "Fui atendida na unidade de Cruz das Almas e me surpreendi com a estrutura e a atenção do médico. Um hospital que realmente se importa com o paciente."
                    </p>
<p className="font-inter text-xs text-white/70 uppercase tracking-wider font-semibold">
                        Maria Oliveira, Paciente
                    </p>
</div>

<div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8">
<div className="flex gap-1 text-[#C9A84C] mb-5">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="font-playfair italic text-lg text-white leading-[1.7] mb-6 opacity-95">
                        "Fiz todos os meus exames cardiológicos lá. Equipamentos super modernos, resultado rápido e ambiente limpíssimo. Recomendo de olhos fechados."
                    </p>
<p className="font-inter text-xs text-white/70 uppercase tracking-wider font-semibold">
                        Carlos Eduardo Silva
                    </p>
</div>

<div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8">
<div className="flex gap-1 text-[#C9A84C] mb-5">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="font-playfair italic text-lg text-white leading-[1.7] mb-6 opacity-95">
                        "A equipe de recepção é maravilhosa, o ambiente não tem aquela cara fria de hospital. O atendimento pelo SUS foi de altíssima qualidade."
                    </p>
<p className="font-inter text-xs text-white/70 uppercase tracking-wider font-semibold">
                        Juliana Costa, Paciente integral do SUS
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8F6F1]" id="unidades">
<div className="max-w-[1200px] mx-auto px-6 lg:px-8">
<div className="mb-16">
<h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-[#0D4A35] leading-tight tracking-tight">
                    Nossas Unidades
                </h2>
<div className="section-divider"></div>
<p className="font-inter text-base lg:text-lg text-[#6B7280] leading-[1.7] max-w-[650px]">
                    Presença estratégica na Bahia para facilitar o seu acesso à saúde.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

<div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#E2EAE8]">
<div className="h-[200px] bg-[#E8F5F0] relative">
<img alt="Hospital Cruz das Almas" className="w-full h-full object-cover mix-blend-multiply opacity-80" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D4A35]/80 to-transparent flex items-end p-6">
<h3 className="font-playfair text-2xl font-semibold text-white tracking-tight">Cruz das Almas</h3>
</div>
</div>
<div className="p-8">
<p className="font-inter text-sm text-[#6B7280] mb-6 flex items-start gap-3">
<iconify-icon className="text-[#0D4A35] mt-0.5 shrink-0" icon="solar:map-point-linear" width="20"></iconify-icon>
                            R. Crisógno Fernandes, 316 - Centro<br/>Cruz das Almas - BA, 44380-000
                        </p>
<div className="space-y-4 mb-8">
<a className="flex items-center gap-3 text-sm text-[#374151] hover:text-[#00B894] transition-colors font-medium" href="tel:7536217143">
<iconify-icon className="text-[#0D4A35]" icon="solar:phone-linear" width="20"></iconify-icon>
                                (75) 3621-7143
                            </a>
<a className="flex items-center gap-3 text-sm text-[#374151] hover:text-[#00B894] transition-colors font-medium" href="https://wa.me/5575983588124">
<iconify-icon className="text-[#25D366]" icon="solar:chat-round-line-linear" width="20"></iconify-icon>
                                (75) 98358-8124
                            </a>
</div>
<a className="inline-flex items-center gap-2 border-[1.5px] border-[#E2EAE8] text-[#0D4A35] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#F0F7F4] hover:border-[#0D4A35] transition-all" href="https://maps.google.com/?q=R.+Crisógno+Fernandes,+316+-+Centro,+Cruz+das+Almas" target="_blank">
                            Ver Rota no Mapa
                        </a>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#E2EAE8]">
<div className="h-[200px] bg-[#E8F5F0] relative">
<img alt="Hospital Camaçari" className="w-full h-full object-cover mix-blend-multiply opacity-80" src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D4A35]/80 to-transparent flex items-end p-6">
<h3 className="font-playfair text-2xl font-semibold text-white tracking-tight">Camaçari</h3>
</div>
</div>
<div className="p-8">
<p className="font-inter text-sm text-[#6B7280] mb-6 flex items-start gap-3">
<iconify-icon className="text-[#0D4A35] mt-0.5 shrink-0" icon="solar:map-point-linear" width="20"></iconify-icon>
                            Av. Dep. Luís Eduardo Magalhães, 37<br/>Centro, Camaçari - Bahia
                        </p>
<div className="space-y-4 mb-8">
<a className="flex items-center gap-3 text-sm text-[#374151] hover:text-[#00B894] transition-colors font-medium" href="https://wa.me/5571983588124">
<iconify-icon className="text-[#25D366]" icon="solar:chat-round-line-linear" width="20"></iconify-icon>
                                (71) 98358-8124
                            </a>
</div>
<a className="inline-flex items-center gap-2 border-[1.5px] border-[#E2EAE8] text-[#0D4A35] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#F0F7F4] hover:border-[#0D4A35] transition-all" href="https://maps.google.com/?q=Av.+Dep.+Luís+Eduardo+Magalhães,+37,+Camaçari" target="_blank">
                            Ver Rota no Mapa
                        </a>
</div>
</div>
</div>

<div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-sm border border-[#E2EAE8]">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.967664468205!2d-39.11181284999999!3d-12.6710777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71442111162afeb%3A0x6b8d2983ba2d007e!2sCruz%20das%20Almas%20-%20BA!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr" style={{border: '0'}} title="Mapa de Localização" width="100%"></iframe>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-[#E2EAE8]" id="faq">
<div className="max-w-[800px] mx-auto px-6 lg:px-0">
<div className="text-center flex flex-col items-center mb-14">
<h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-[#0D4A35] leading-tight tracking-tight">
                    Dúvidas Frequentes
                </h2>
<div className="section-divider !mx-auto"></div>
</div>
<div className="space-y-2">

<details className="group border-b border-[#E2EAE8]">
<summary className="flex items-center justify-between py-5 cursor-pointer text-base font-inter font-medium text-[#0D4A35] hover:text-[#00B894] transition-colors">
                        Como realizar o agendamento de consultas no Hospital Evanice Rocha em Cruz das Almas ou Camaçari?
                        <iconify-icon className="transition-transform duration-300 group-open:rotate-45 text-[#00B894] shrink-0 ml-4" icon="solar:add-linear" width="24"></iconify-icon>
</summary>
<div className="pb-6 text-sm text-[#6B7280] leading-[1.7] font-inter pr-8">
                        Você pode agendar sua consulta diretamente pelo WhatsApp:<br/>
                        Cruz das Almas: (75) 98358-8124<br/>
                        Camaçari: (71) 98358-8124<br/>
                        Nossa equipe responde rapidamente e ajuda a encontrar o melhor horário para você.
                    </div>
</details>

<details className="group border-b border-[#E2EAE8]">
<summary className="flex items-center justify-between py-5 cursor-pointer text-base font-inter font-medium text-[#0D4A35] hover:text-[#00B894] transition-colors">
                        A instituição aceita planos de saúde?
                        <iconify-icon className="transition-transform duration-300 group-open:rotate-45 text-[#00B894] shrink-0 ml-4" icon="solar:add-linear" width="24"></iconify-icon>
</summary>
<div className="pb-6 text-sm text-[#6B7280] leading-[1.7] font-inter pr-8">
                        Atendemos exclusivamente pacientes pelo SUS (Sistema Único de Saúde) e pacientes particulares. No momento, não trabalhamos com planos de saúde privados. Para dúvidas sobre valores particulares, entre em contato pelo WhatsApp.
                    </div>
</details>

<details className="group border-b border-[#E2EAE8]">
<summary className="flex items-center justify-between py-5 cursor-pointer text-base font-inter font-medium text-[#0D4A35] hover:text-[#00B894] transition-colors">
                        Quais são os horários de atendimento?
                        <iconify-icon className="transition-transform duration-300 group-open:rotate-45 text-[#00B894] shrink-0 ml-4" icon="solar:add-linear" width="24"></iconify-icon>
</summary>
<div className="pb-6 text-sm text-[#6B7280] leading-[1.7] font-inter pr-8">
                        Nossas unidades funcionam de segunda a sexta-feira, das 7h às 18h, e aos sábados, das 7h às 12h. Para emergências, o pronto atendimento está disponível 24 horas por dia.
                    </div>
</details>

<details className="group border-b border-[#E2EAE8]">
<summary className="flex items-center justify-between py-5 cursor-pointer text-base font-inter font-medium text-[#0D4A35] hover:text-[#00B894] transition-colors">
                        Quais especialidades médicas estão disponíveis?
                        <iconify-icon className="transition-transform duration-300 group-open:rotate-45 text-[#00B894] shrink-0 ml-4" icon="solar:add-linear" width="24"></iconify-icon>
</summary>
<div className="pb-6 text-sm text-[#6B7280] leading-[1.7] font-inter pr-8">
                        Contamos com mais de 20 especialidades, incluindo Cardiologia, Ortopedia, Pediatria, Ginecologia, Neurologia e Gastroenterologia. <a className="text-[#00B894] hover:underline font-medium" href="#especialidades">Ver todas as especialidades →</a>
</div>
</details>

<details className="group border-b border-[#E2EAE8]">
<summary className="flex items-center justify-between py-5 cursor-pointer text-base font-inter font-medium text-[#0D4A35] hover:text-[#00B894] transition-colors">
                        Posso levar acompanhante durante a consulta ou internação?
                        <iconify-icon className="transition-transform duration-300 group-open:rotate-45 text-[#00B894] shrink-0 ml-4" icon="solar:add-linear" width="24"></iconify-icon>
</summary>
<div className="pb-6 text-sm text-[#6B7280] leading-[1.7] font-inter pr-8">
                        Sim. Valorizamos o suporte familiar e, em geral, o acompanhante é bem-vindo. Em áreas específicas, nossa equipe orientará sobre as regras de acesso para garantir segurança e conforto de todos.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-[#F8F6F1]">
<div className="max-w-[1200px] mx-auto px-6 lg:px-8">
<div className="mb-16 text-center flex flex-col items-center">
<h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-[#0D4A35] leading-tight tracking-tight">
                    Blog de Saúde
                </h2>
<div className="section-divider !mx-auto"></div>
<p className="font-inter text-base lg:text-lg text-[#6B7280] leading-[1.7] max-w-[600px]">
                    Informações e dicas aprovadas por nossos especialistas.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-8 border border-[#E2EAE8] shadow-sm premium-hover flex flex-col">
<span className="text-xs font-semibold text-[#00B894] tracking-widest uppercase mb-4 block">CARDIOLOGIA</span>
<h3 className="font-playfair text-xl font-semibold text-[#0D4A35] leading-tight mb-4 tracking-tight">10 Sinais de que Você Precisa de uma Consulta Cardiológica</h3>
<p className="font-inter text-sm text-[#6B7280] mb-8 leading-[1.6] flex-grow">Seu coração manda sinais — aprenda a identificá-los antes que virem problema.</p>
<a className="text-sm font-medium text-[#0D4A35] hover:text-[#00B894] transition-colors inline-flex items-center gap-1.5 mt-auto" href="#">
                        Ler artigo <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-2xl p-8 border border-[#E2EAE8] shadow-sm premium-hover flex flex-col">
<span className="text-xs font-semibold text-[#00B894] tracking-widest uppercase mb-4 block">PREVENÇÃO</span>
<h3 className="font-playfair text-xl font-semibold text-[#0D4A35] leading-tight mb-4 tracking-tight">Prevenção é o Melhor Remédio: Guia de Exames</h3>
<p className="font-inter text-sm text-[#6B7280] mb-8 leading-[1.6] flex-grow">Descubra quais exames você não pode deixar de fazer em cada fase da vida.</p>
<a className="text-sm font-medium text-[#0D4A35] hover:text-[#00B894] transition-colors inline-flex items-center gap-1.5 mt-auto" href="#">
                        Ler artigo <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-2xl p-8 border border-[#E2EAE8] shadow-sm premium-hover flex flex-col">
<span className="text-xs font-semibold text-[#00B894] tracking-widest uppercase mb-4 block">CIRURGIA GERAL</span>
<h3 className="font-playfair text-xl font-semibold text-[#0D4A35] leading-tight mb-4 tracking-tight">Cirurgias Eletivas: Segurança e Qualidade no SUS</h3>
<p className="font-inter text-sm text-[#6B7280] mb-8 leading-[1.6] flex-grow">Desmistificamos o procedimento e explicamos como garantimos sua recuperação.</p>
<a className="text-sm font-medium text-[#0D4A35] hover:text-[#00B894] transition-colors inline-flex items-center gap-1.5 mt-auto" href="#">
                        Ler artigo <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center justify-center gap-2 border-[1.5px] border-[#0D4A35] text-[#0D4A35] px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#F0F7F4] transition-all" href="#">
                    Ver Blog Completo
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-texture-dark pt-24 pb-10 border-t-4 border-[#00B894]">
<div className="max-w-[1200px] mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

<div className="lg:col-span-1">
<a className="flex items-center gap-3 mb-6" href="#">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#0D4A35]">
<iconify-icon height="24" icon="solar:hospital-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex items-center gap-1.5">
<span className="font-playfair font-semibold text-white text-lg leading-tight tracking-tight">Evanice Rocha</span>
<span className="text-white/50 text-sm font-medium">|</span>
<span className="text-white/70 text-xs font-medium tracking-widest uppercase leading-none mt-0.5">Hospital</span>
</div>
</a>
<p className="font-inter text-sm text-white/75 leading-[1.7] mb-6 pr-4">
                        Uma instituição dedicada à excelência médica, proporcionando cuidados humanizados com segurança e respeito à vida.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#00B894] transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#00B894] transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#00B894] transition-colors" href="https://wa.me/5575986218124"><iconify-icon icon="solar:whatsapp-linear" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="font-inter font-semibold text-xs text-white mb-6 uppercase tracking-widest opacity-90">Instituição</h4>
<ul className="space-y-4 font-inter text-sm text-white/75">
<li><a className="hover:text-[#00B894] transition-colors" href="#">Corpo Clínico</a></li>
<li><a className="hover:text-[#00B894] transition-colors" href="#">Estrutura Física</a></li>
<li><a className="hover:text-[#00B894] transition-colors" href="#">Protocolos de Segurança</a></li>
<li><a className="hover:text-[#00B894] transition-colors" href="#">Trabalhe Conosco</a></li>
</ul>
</div>

<div>
<h4 className="font-inter font-semibold text-xs text-white mb-6 uppercase tracking-widest opacity-90">Para o Paciente</h4>
<ul className="space-y-4 font-inter text-sm text-white/75">
<li><a className="hover:text-[#00B894] transition-colors" href="#especialidades">Especialidades</a></li>
<li><a className="hover:text-[#00B894] transition-colors" href="#exames">Centro de Exames</a></li>
<li><a className="hover:text-[#00B894] transition-colors" href="#">Guia de Internação</a></li>
<li><a className="hover:text-[#00B894] transition-colors" href="#">Privacidade &amp; LGPD</a></li>
</ul>
</div>

<div>
<h4 className="font-inter font-semibold text-xs text-white mb-6 uppercase tracking-widest opacity-90">Atendimento</h4>
<div className="space-y-6 font-inter text-white/75 text-sm">
<div>
<span className="block text-xs uppercase tracking-wider text-white/50 mb-1 font-semibold">Cruz das Almas</span>
<a className="hover:text-[#00B894] transition-colors flex items-center gap-2 mb-1.5" href="tel:7536217143"><iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>(75) 3621-7143</a>
<a className="hover:text-[#00B894] transition-colors flex items-center gap-2" href="https://wa.me/5575983588124"><iconify-icon icon="solar:chat-round-line-linear" width="16"></iconify-icon>WhatsApp: (75) 98358-8124</a>
</div>
<div>
<span className="block text-xs uppercase tracking-wider text-white/50 mb-1 font-semibold">Camaçari</span>
<a className="hover:text-[#00B894] transition-colors flex items-center gap-2" href="https://wa.me/5571983588124"><iconify-icon icon="solar:chat-round-line-linear" width="16"></iconify-icon>WhatsApp: (71) 98358-8124</a>
</div>
</div>
</div>
</div>

<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-inter text-white/50">
<p>© 2026 Hospital Evanice Rocha. Excelência e Humanização em Saúde.</p>
<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
<span>Responsável Técnico: Dr. Nome Sobrenome | CRM-BA 00000</span>
<div className="flex items-center gap-4">
<a className="hover:text-white transition-colors" href="#">Política de Privacidade</a>
<a className="hover:text-white transition-colors" href="#">LGPD</a>
<a className="hover:text-white transition-colors" href="#">Aviso Legal</a>
</div>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.3)] z-50 flex items-center justify-center gap-2 hover:-translate-y-1 transition-all duration-300" href="https://wa.me/5575986218124" rel="noopener noreferrer" target="_blank">
<iconify-icon height="24" icon="solar:chat-round-line-bold" width="24"></iconify-icon>
<span className="font-inter font-medium text-sm">Agendar via WhatsApp</span>
<iconify-icon className="ml-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

    </>
  );
}
