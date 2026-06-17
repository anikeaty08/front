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



        document.addEventListener('DOMContentLoaded', () => {
              // Seleciona o botão de abrir que já existe na navbar
              const openMenuBtn = document.querySelector('nav button.lg\\:hidden');
              const closeMenuBtn = document.getElementById('close-menu');
              const mobileMenu = document.getElementById('mobile-menu');
      
              if (openMenuBtn && closeMenuBtn && mobileMenu) {
                  // Abrir menu
                  openMenuBtn.addEventListener('click', () => {
                      mobileMenu.classList.remove('translate-x-full');
                      mobileMenu.classList.add('translate-x-0');
                      document.body.style.overflow = 'hidden'; // Evita rolagem do fundo
                  });
      
                  // Fechar menu
                  closeMenuBtn.addEventListener('click', () => {
                      mobileMenu.classList.remove('translate-x-0');
                      mobileMenu.classList.add('translate-x-full');
                      document.body.style.overflow = ''; // Restaura rolagem
                  });
              }
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
      

<nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-[#c3c4c7]/30">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#fee460] text-3xl" icon="solar:shield-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-2xl tracking-tight font-medium text-[#333333]">G R U P O R C R</span>
</div>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-[#333333] hover:text-[#fee460] transition-colors" href="#">Empresa</a>
<a className="text-sm font-medium text-[#333333] hover:text-[#fee460] transition-colors" href="#">Serviços</a>
<a className="text-sm font-medium text-[#333333] hover:text-[#fee460] transition-colors" href="#">Segmentos</a>
<a className="text-sm font-medium text-[#333333] hover:text-[#fee460] transition-colors" href="#">Área do Cliente</a>
<a className="text-sm font-medium text-[#333333] hover:text-[#fee460] transition-colors" href="#">Trabalhe Conosco</a>
<a className="text-sm font-medium text-[#333333] hover:text-[#fee460] transition-colors" href="#">Contato</a>
</div>
<div className="hidden lg:flex gap-4">
<button className="px-5 py-2.5 bg-[#333333] text-white rounded-full text-sm font-medium hover:bg-[#fee460] hover:text-[#333333] transition-colors">
                Fale Conosco
            </button>
</div>
<button className="lg:hidden text-[#333333]">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-white z-[60] flex flex-col p-6 translate-x-full transition-transform duration-300 ease-in-out lg:hidden" id="mobile-menu">
<div className="flex justify-between items-center mb-12">
<div className="flex items-center gap-2"> <iconify-icon className="text-[#fee460] text-3xl" icon="solar:shield-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-2xl tracking-tight font-medium text-[#333333]">G R U P O R C R</span> </div>
<button className="text-[#333333] hover:text-[#fee460] transition-colors" id="close-menu"> <iconify-icon className="text-3xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon> </button>
</div>
<div className="flex flex-col gap-6 overflow-y-auto">
<a className="text-xl tracking-tight font-medium text-[#333333] hover:text-[#fee460] transition-colors" href="#">Empresa</a>
<a className="text-xl tracking-tight font-medium text-[#333333] hover:text-[#fee460] transition-colors" href="#">Serviços</a>
<a className="text-xl tracking-tight font-medium text-[#333333] hover:text-[#fee460] transition-colors" href="#">Segmentos</a>
<a className="text-xl tracking-tight font-medium text-[#333333] hover:text-[#fee460] transition-colors" href="#">Área do
          Cliente</a>
<a className="text-xl tracking-tight font-medium text-[#333333] hover:text-[#fee460] transition-colors" href="#">Trabalhe
          Conosco</a>
<a className="text-xl tracking-tight font-medium text-[#333333] hover:text-[#fee460] transition-colors" href="#">Contato</a>
<div className="mt-4 pt-8 border-t border-[#c3c4c7]/30">
<button className="w-full px-6 py-4 bg-[#333333] text-white rounded-full text-base font-medium hover:bg-[#fee460] hover:text-[#333333] transition-colors flex justify-center items-center gap-2">
                      Fale Conosco
                      <iconify-icon className="text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>


</nav>

<header className="pt-40 pb-16 px-6 max-w-5xl mx-auto text-center relative z-10">
<h1 className="text-5xl md:text-6xl tracking-tight font-medium text-[#333333] leading-tight mb-6">
        Segurança e Facilities de Excelência para o seu Patrimônio
    </h1>
</header>

<section className="relative py-48 w-full mt-4 flex flex-col items-center justify-center">

<div className="absolute inset-0 bg-[#fee460] diagonal-bg-2 translate-y-16 -z-20"></div>
<div className="absolute inset-0 bg-[#333333] diagonal-bg-1 -z-10"></div>

<div className="relative max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center">
<div className="flex items-center gap-4 text-white/80 text-xs uppercase tracking-widest font-medium mb-10">
<span>Segurança</span>
<span className="w-1.5 h-1.5 bg-[#fee460] rounded-full"></span>
<span>Facilities</span>
<span className="w-1.5 h-1.5 bg-[#fee460] rounded-full"></span>
<span>Tecnologia</span>
</div>
<iconify-icon className="text-[#fee460] text-4xl mb-12" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-4xl md:text-5xl tracking-tight font-medium text-white mb-8 leading-tight">
            Soluções Completas em<br/>Segurança e Serviços para<br/>todos os Setores
        </h2>
<p className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl leading-relaxed">
            O Grupo RCR é especialista em terceirização de serviços e segurança patrimonial, entregando soluções integradas que garantem a proteção e a valorização do seu negócio ou condomínio em todo o Brasil.
        </p>
<a className="px-10 py-5 bg-[#fee460] text-[#333333] rounded-full font-medium text-base hover:bg-white transition-colors shadow-lg shadow-black/10 inline-flex items-center gap-2" href="#">
            Solicite um Orçamento
            <iconify-icon className="text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<section className="py-32 bg-white relative z-20">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div>
<p className="uppercase tracking-widest text-[#7a7a7a] text-xs font-medium mb-4">Tradição e Qualidade Comprovada</p>
<h2 className="text-4xl md:text-5xl tracking-tight font-medium text-[#333333] mb-8">Segurança Patrimonial</h2>
<p className="text-base leading-relaxed text-[#7a7a7a] mb-6">
                Nossa equipe de vigilantes, armada ou desarmada, passa por rigorosos treinamentos táticos e comportamentais. Utilizamos inteligência e tecnologia para prevenir riscos e garantir a integridade física e patrimonial em ambientes corporativos, industriais e residenciais.
            </p>
<p className="text-base leading-relaxed text-[#7a7a7a] mb-12">
                Cada operação é desenhada para antecipar riscos, manter a fluidez do dia a dia e garantir tranquilidade contínua com presença ativa e tomada de decisão responsável.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 border-l border-[#c3c4c7]/40 pl-8">
<div>
<div className="w-12 h-12 rounded-xl bg-[#f8f9fa] flex items-center justify-center mb-5 text-[#333333]">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-[#333333] mb-3">Vigilância Patrimonial</h3>
<p className="text-sm text-[#7a7a7a] leading-relaxed">Proteção patrimonial com procedimentos rigorosos, prevenção de ocorrências e presença dissuasória.</p>
</div>
<div>
<div className="w-12 h-12 rounded-xl bg-[#f8f9fa] flex items-center justify-center mb-5 text-[#333333]">
<iconify-icon className="text-2xl" icon="solar:videocamera-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-[#333333] mb-3">Monitoramento</h3>
<p className="text-sm text-[#7a7a7a] leading-relaxed">Sistemas de CFTV, controle de acesso e acompanhamento em tempo real para ações proativas.</p>
</div>
</div>
<div className="mt-12">
<a className="px-8 py-4 bg-[#333333] text-white rounded-full font-medium text-sm hover:bg-[#444444] transition-colors inline-block" href="#">Saiba Mais</a>
</div>
</div>
<div className="relative h-[40rem] w-full bg-[#f8f9fa] rounded-3xl overflow-hidden flex items-center justify-center group border border-[#c3c4c7]/20">
<iconify-icon className="text-9xl text-[#c3c4c7] opacity-30 group-hover:scale-110 transition-transform duration-700" icon="solar:user-rounded-linear" strokeWidth="1"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
</div>
</div>
</section>

<section className="py-32 bg-[#f8f9fa] relative z-20">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1 relative h-[40rem] w-full bg-white rounded-3xl overflow-hidden flex items-center justify-center group shadow-sm border border-[#c3c4c7]/20">
<iconify-icon className="text-9xl text-[#c3c4c7] opacity-30 group-hover:scale-110 transition-transform duration-700" icon="solar:stars-linear" strokeWidth="1"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
</div>
<div className="order-1 lg:order-2">
<p className="uppercase tracking-widest text-[#7a7a7a] text-xs font-medium mb-4">A Primeira Impressão é Fundamental</p>
<h2 className="text-4xl md:text-5xl tracking-tight font-medium text-[#333333] mb-8">Facilities e Limpeza</h2>
<p className="text-base leading-relaxed text-[#7a7a7a] mb-6">
                O Grupo RCR reúne serviços essenciais de infraestrutura e operação que sustentam a rotina das organizações, garantindo continuidade, eficiência e padrão. Atuamos do atendimento e recepção à limpeza e conservação, manutenção predial e rotinas correlatas.
            </p>
<p className="text-base leading-relaxed text-[#7a7a7a] mb-12">
                Na prática, mantemos ambientes prontos e equipes focadas no core do negócio, elevando o bem-estar e a produtividade com soluções sob medida e tecnologia aplicada.
            </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-[#fee460] shrink-0 mt-1" icon="solar:waterdrops-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h3 className="text-xl tracking-tight font-medium text-[#333333] mb-1">Limpeza Profissional</h3>
<p className="text-sm text-[#7a7a7a]">Produtos de alta performance e equipamentos modernos para higienização impecável de hospitais a indústrias.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-[#fee460] shrink-0 mt-1" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h3 className="text-xl tracking-tight font-medium text-[#333333] mb-1">Manutenção Predial</h3>
<p className="text-sm text-[#7a7a7a]">Gestão centralizada da sua infraestrutura para otimizar recursos e reduzir custos operacionais com assertividade.</p>
</div>
</div>
</div>
<div className="mt-12">
<a className="px-8 py-4 bg-[#333333] text-white rounded-full font-medium text-sm hover:bg-[#444444] transition-colors inline-block" href="#">Saiba Mais</a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white text-center max-w-4xl mx-auto px-6">
<p className="uppercase tracking-widest text-[#7a7a7a] text-xs font-medium mb-4">Excelência em Números</p>
<h2 className="text-4xl md:text-5xl tracking-tight font-medium text-[#333333] mb-8">Tradição, Confiança e Inovação</h2>
<p className="text-lg leading-relaxed text-[#7a7a7a] mb-16">
        Com mais de duas décadas de atuação, o Grupo RCR destaca-se pela excelência operacional. A tecnologia atua como extensão do olhar humano, ampliando capacidade, precisão e controle em todas as frentes de trabalho.
    </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#c3c4c7]/30 pt-16">
<div>
<p className="text-4xl tracking-tight font-medium text-[#333333] mb-2">+20</p>
<p className="text-sm text-[#7a7a7a]">Anos de Tradição</p>
</div>
<div>
<p className="text-4xl tracking-tight font-medium text-[#333333] mb-2">+200</p>
<p className="text-sm text-[#7a7a7a]">Clientes Atendidos</p>
</div>
<div>
<p className="text-4xl tracking-tight font-medium text-[#333333] mb-2">1.1K</p>
<p className="text-sm text-[#7a7a7a]">Colaboradores</p>
</div>
<div>
<p className="text-4xl tracking-tight font-medium text-[#333333] mb-2">24/7</p>
<p className="text-sm text-[#7a7a7a]">Atendimento Prontidão</p>
</div>
</div>
</section>

<footer className="relative mt-20 pt-48 pb-12 bg-[#333333] footer-diagonal">

<div className="absolute top-0 left-0 right-0 h-4 bg-[#fee460] z-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
<div className="md:col-span-5">
<h2 className="text-5xl md:text-7xl tracking-tight font-medium text-white leading-[1.1] mb-8">
                    Cuidando<br/><span className="text-[#7a7a7a]">do que</span><br/>importa.
                </h2>
<a className="px-8 py-4 bg-[#fee460] text-[#333333] rounded-full font-medium text-sm hover:bg-white transition-colors inline-block mt-4" href="#">Trabalhe Conosco</a>
</div>
<div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-white/80 pt-4">
<div className="flex flex-col gap-4">
<a className="text-sm hover:text-[#fee460] transition-colors" href="#">Empresa</a>
<a className="text-sm hover:text-[#fee460] transition-colors" href="#">Serviços</a>
<a className="text-sm hover:text-[#fee460] transition-colors" href="#">Segmentos</a>
</div>
<div className="flex flex-col gap-4">
<a className="text-sm hover:text-[#fee460] transition-colors" href="#">Área do Cliente</a>
<a className="text-sm hover:text-[#fee460] transition-colors" href="#">Blog</a>
<a className="text-sm hover:text-[#fee460] transition-colors" href="#">Contato</a>
</div>
<div className="flex flex-col gap-4">
<p className="text-xs uppercase tracking-widest text-white/50 mb-2">Fale Conosco</p>
<p className="text-base font-medium text-white">(11) 3751-0948</p>
<a className="text-sm hover:text-[#fee460] transition-colors flex items-center gap-2" href="#">
<iconify-icon className="text-lg" icon="solar:chat-line-linear" strokeWidth="1.5"></iconify-icon> WhatsApp
                    </a>
<a className="text-sm text-[#7a7a7a] hover:text-white transition-colors mt-2" href="mailto:contato@gruporcr.com.br">contato@gruporcr.com.br</a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#fee460] text-2xl" icon="solar:shield-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg tracking-tight font-medium text-white">G R U P O R C R</span>
</div>
<p className="text-xs text-white/50">© Grupo RCR: Todos os direitos reservados.</p>
</div>
</div>
</footer>

    </>
  );
}
