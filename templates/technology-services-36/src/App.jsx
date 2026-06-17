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
      

<nav className="fixed w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-white font-semibold text-2xl tracking-tighter" href="#">
                VIDTEC
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-yellow-400 transition-colors" href="#sobre">Sobre</a>
<a className="hover:text-yellow-400 transition-colors" href="#servicos">Serviços</a>
<a className="hover:text-yellow-400 transition-colors" href="#contratos">Contratos</a>
<a className="hover:text-yellow-400 transition-colors" href="#clientes">Clientes</a>
</div>
<a className="hidden md:inline-flex items-center justify-center bg-yellow-400 text-black text-sm font-semibold py-2.5 px-6 rounded-full hover:bg-yellow-500 transition-colors" href="https://wa.me/5582981880904" target="_blank">
                Fale Conosco
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-screen">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.05)_0,transparent_50%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400 mb-8">
<span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                Desde 1992 em Maceió - AL
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
                Vença os desafios com <span className="text-yellow-400">tecnologia.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Referência em serviços de TI, segurança, automação e sistemas elétricos para empresas e condomínios.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-yellow-400 text-black text-base font-semibold py-3.5 px-8 rounded-full hover:bg-yellow-500 transition-colors" href="https://wa.me/5582981880904" target="_blank">
<span className="text-xl flex items-center"><iconify-icon icon="solar:phone-linear"></iconify-icon></span>
                    Solicitar Orçamento
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 text-white border border-zinc-800 text-base font-medium py-3.5 px-8 rounded-full hover:bg-zinc-800 transition-colors" href="#servicos">
                    Conhecer Serviços
                </a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-y border-zinc-900" id="sobre">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Tradição e Inovação<br/>andando juntas.</h2>
<div className="border-l-2 border-yellow-400 pl-6 space-y-4">
<p className="text-base text-zinc-400 leading-relaxed">
                            Fundado em 1992 em Maceió, o <strong>Grupo Vidtec</strong> é referência em serviços de tecnologia da informação. Somos especialistas em oferecer soluções completas em segurança, automação e sistemas elétricos focados em empresas e condomínios.
                        </p>
<p className="text-base text-zinc-400 leading-relaxed">
                            Com mais de 30 anos de experiência, atuamos de forma consultiva e técnica, priorizando as necessidades do cliente para entregar resultados precisos e duradouros. Revenda autorizada <strong>Intelbras</strong>.
                        </p>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col items-start gap-3">
<span className="text-yellow-400 text-2xl"><iconify-icon icon="solar:lightbulb-bolt-linear"></iconify-icon></span>
<span className="text-sm font-medium text-white">Inovação</span>
</div>
<div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col items-start gap-3">
<span className="text-yellow-400 text-2xl"><iconify-icon icon="solar:target-linear"></iconify-icon></span>
<span className="text-sm font-medium text-white">Determinação</span>
</div>
<div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col items-start gap-3">
<span className="text-yellow-400 text-2xl"><iconify-icon icon="solar:shield-check-linear"></iconify-icon></span>
<span className="text-sm font-medium text-white">Confiança</span>
</div>
<div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col items-start gap-3">
<span className="text-yellow-400 text-2xl"><iconify-icon icon="solar:hand-shake-linear"></iconify-icon></span>
<span className="text-sm font-medium text-white">Comprometimento</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="servicos">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Nossos Serviços</h2>
<p className="text-base text-zinc-400 max-w-2xl mx-auto">Soluções completas e integradas para a segurança e eficiência do seu condomínio ou empresa.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-yellow-400/50 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-yellow-400 text-2xl mb-6 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
<iconify-icon icon="solar:fire-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Prevenção a Incêndio</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Inspeção, correção e manutenção de sistemas preventivos contra incêndios, rigorosamente dentro das normas do Corpo de Bombeiros de Alagoas (CBMAL).</p>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-yellow-400/50 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-yellow-400 text-2xl mb-6 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
<iconify-icon icon="solar:smart-home-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Automação</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Sistemas de controle de acesso para portões de pedestres e garagens de condomínios residenciais. Instalação, configuração e manutenção especializada.</p>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-yellow-400/50 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-yellow-400 text-2xl mb-6 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
<iconify-icon icon="solar:camera-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">CFTV / Segurança</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Projetos, instalação e configuração de sistemas de monitoramento com acesso remoto via smartphone ou computador. Tecnologia Intelbras com suporte pós-instalação.</p>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-yellow-400/50 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-yellow-400 text-2xl mb-6 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
<iconify-icon icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">SPDA</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Serviços de manutenção, correção e laudos de engenharia para Sistemas de Proteção contra Descargas Atmosféricas (Para-raios).</p>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-yellow-400/50 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-yellow-400 text-2xl mb-6 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
<iconify-icon icon="solar:plug-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Sistemas Elétricos NR10</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Instalação e manutenção de painéis elétricos, redes elétricas e iluminação, seguindo a norma NR10 com engenheiros e técnicos habilitados.</p>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-yellow-400/50 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-yellow-400 text-2xl mb-6 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
<iconify-icon icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Controle de Acesso</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Portaria eletrônica inteligente e controle de acesso autônomo para garantir a máxima segurança e praticidade em condomínios.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900" id="contratos">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-zinc-950 border border-zinc-800 p-8 md:p-12 rounded-3xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
<div className="flex-1">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Contratos de Manutenção</h2>
<p className="text-base text-zinc-400 mb-8">Tranquilidade e segurança contínua para sua empresa ou condomínio. Nossos contratos abrangem todos os serviços oferecidos com atendimento prioritário.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="text-yellow-400 text-xl mt-0.5"><iconify-icon icon="solar:check-circle-linear"></iconify-icon></span>
<span className="text-sm text-zinc-300">Prioridade absoluta no atendimento e suporte.</span>
</li>
<li className="flex items-start gap-3">
<span className="text-yellow-400 text-xl mt-0.5"><iconify-icon icon="solar:check-circle-linear"></iconify-icon></span>
<span className="text-sm text-zinc-300">Suporte e supervisão contínua dos sistemas.</span>
</li>
<li className="flex items-start gap-3">
<span className="text-yellow-400 text-xl mt-0.5"><iconify-icon icon="solar:check-circle-linear"></iconify-icon></span>
<span className="text-sm text-zinc-300">Plantão de emergência aos finais de semana.</span>
</li>
<li className="flex items-start gap-3">
<span className="text-yellow-400 text-xl mt-0.5"><iconify-icon icon="solar:check-circle-linear"></iconify-icon></span>
<span className="text-sm text-zinc-300">Equipe técnica altamente qualificada à disposição.</span>
</li>
</ul>
</div>
<div className="w-full lg:w-auto">
<a className="w-full inline-flex items-center justify-center bg-white text-black text-sm font-semibold py-4 px-8 rounded-xl hover:bg-zinc-200 transition-colors whitespace-nowrap" href="https://wa.me/5582981880904" target="_blank">
                            Consultar Planos
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-zinc-900" id="clientes">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-12">Empresas e condomínios que confiam na VIDTEC</h2>
<div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
<div className="px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-white tracking-tight">
                    Hospital de Olhos Santa Luzia
                </div>
<div className="px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-white tracking-tight">
                    Condomínio Varanda do Horto
                </div>
<div className="px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-white tracking-tight">
                    Corr Plastik
                </div>
</div>
<p className="text-xs text-zinc-500 mt-12">Atendemos condomínios residenciais, empresas, indústrias e órgãos governamentais em toda região.</p>
</div>
</section>

<section className="py-24" id="contato">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Pronto para modernizar sua segurança?</h2>
<p className="text-base text-zinc-400 mb-8">Entre em contato com nossa equipe de especialistas para um orçamento sem compromisso.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-yellow-400 shrink-0">
<span className="text-lg"><iconify-icon icon="solar:map-point-linear"></iconify-icon></span>
</div>
<div>
<h4 className="text-sm font-medium text-white">Endereço</h4>
<p className="text-sm text-zinc-400 mt-1">Av. Eraldo Lins Cavalcante, nº47<br/>Serraria, Maceió - AL</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-yellow-400 shrink-0">
<span className="text-lg"><iconify-icon icon="solar:phone-linear"></iconify-icon></span>
</div>
<div>
<h4 className="text-sm font-medium text-white">Telefone fixo</h4>
<p className="text-sm text-zinc-400 mt-1">(82) 3241-0011</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-yellow-400 shrink-0">
<span className="text-lg"><iconify-icon icon="solar:chat-square-linear"></iconify-icon></span>
</div>
<div>
<h4 className="text-sm font-medium text-white">WhatsApp</h4>
<a className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors mt-1 inline-block" href="https://wa.me/5582981880904" target="_blank">(82) 98188-0904</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-yellow-400 shrink-0">
<span className="text-lg"><iconify-icon icon="solar:letter-linear"></iconify-icon></span>
</div>
<div>
<h4 className="text-sm font-medium text-white">E-mail</h4>
<a className="text-sm text-zinc-400 hover:text-white transition-colors mt-1 inline-block" href="mailto:vidtecmaceio@gmail.com">vidtecmaceio@gmail.com</a>
</div>
</div>
</div>
</div>
<div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl flex flex-col justify-center text-center">
<span className="text-4xl text-yellow-400 mx-auto mb-4"><iconify-icon icon="solar:chat-round-line-linear"></iconify-icon></span>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Atendimento Rápido</h3>
<p className="text-sm text-zinc-400 mb-8">Nossa equipe está pronta para responder suas dúvidas diretamente pelo WhatsApp.</p>
<a className="inline-flex items-center justify-center w-full bg-yellow-400 text-black text-sm font-semibold py-4 px-6 rounded-xl hover:bg-yellow-500 transition-colors" href="https://wa.me/5582981880904" target="_blank">
                        Iniciar conversa no WhatsApp
                    </a>
</div>
</div>
</div>
</section>

<footer className="py-8 border-t border-zinc-900 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
<p>© 2023 Grupo Vidtec. Todos os direitos reservados.</p>
<p>Vença os desafios com tecnologia.</p>
</div>
</footer>

<a aria-label="Falar pelo WhatsApp" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center text-black shadow-lg shadow-yellow-400/20 hover:scale-110 hover:bg-yellow-500 transition-all duration-300" href="https://wa.me/5582981880904" rel="noopener noreferrer" target="_blank">
<span className="text-3xl flex items-center justify-center"><iconify-icon icon="solar:chat-square-linear"></iconify-icon></span>
</a>

    </>
  );
}
