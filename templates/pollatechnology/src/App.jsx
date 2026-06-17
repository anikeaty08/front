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
      

<nav className="fixed top-0 w-full z-50 border-b border-[#ABBFDD]/10 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2.5">

<div className="w-8 h-8 bg-gradient-to-br from-[#D4D4DE] to-[#ABBFDD] rounded-lg flex items-center justify-center text-[#121F32] font-bold tracking-tighter text-lg brand-font">
                    P
                </div>
<span className="font-semibold text-white tracking-tight text-lg brand-font">Polla<span className="text-[#F04A23]">.</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#ABBFDD]/80">
<a className="hover:text-white transition-colors" href="#servicos">Soluções</a>
<a className="hover:text-white transition-colors" href="#sobre">O Técnico</a>
<a className="hover:text-white transition-colors" href="#contato">Contato</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-[#33312E] hover:bg-[#F04A23] border border-[#ABBFDD]/20 hover:border-[#F04A23] px-4 py-2 rounded-lg text-xs font-semibold text-white transition-all hover:shadow-[0_0_15px_-3px_rgba(240,74,35,0.4)] group" href="#contato">
<span>Falar com Carlos</span>
<span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</a>

<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 grid-bg [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#ABBFDD]/10 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="flex-1 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#33312E] border border-[#ABBFDD]/20 text-[#ABBFDD] text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F04A23] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#F04A23]"></span>
</span>
                        Disponível em São José e Região
                    </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.05] mb-6">
                        Menos problemas,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ABBFDD] to-white">mais performance.</span>
</h1>
<p className="text-lg text-[#ABBFDD]/80 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
                        Transformo complexidade técnica em soluções ágeis para seu negócio não parar. Infraestrutura, redes e suporte especializado.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<a className="w-full sm:w-auto px-8 py-3.5 bg-[#F04A23] text-white rounded-lg font-semibold text-sm hover:bg-[#d63e1b] transition-all shadow-[0_0_20px_-5px_rgba(240,74,35,0.3)] flex items-center justify-center gap-2" href="#contato">
<span className="iconify" data-icon="lucide:zap" data-width="18"></span>
                            Resolver Agora
                        </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-[#33312E] border border-[#ABBFDD]/20 text-white rounded-lg font-medium text-sm hover:bg-[#3f3d39] transition-colors" href="#servicos">
                            Conhecer Soluções
                        </a>
</div>
</div>

<div className="flex-1 w-full max-w-md lg:max-w-full flex justify-center lg:justify-end">
<div className="relative w-full max-w-sm glass-card border border-[#ABBFDD]/10 rounded-2xl p-6 shadow-2xl shadow-[#121F32]/50">

<div className="flex items-center justify-between mb-6 pb-4 border-b border-[#ABBFDD]/10">
<div className="flex items-center gap-3">
<div className="p-2 bg-[#ABBFDD]/10 rounded-lg">
<span className="iconify text-[#ABBFDD]" data-icon="lucide:cpu" data-width="20"></span>
</div>
<div>
<h3 className="text-sm font-semibold text-white">Status do Sistema</h3>
<p className="text-xs text-[#ABBFDD]/60">Monitoramento Polla</p>
</div>
</div>
<div className="flex items-center gap-2 bg-[#121F32] px-2 py-1 rounded border border-[#ABBFDD]/10">
<div className="h-1.5 w-1.5 rounded-full bg-[#F04A23] animate-pulse"></div>
<span className="text-[10px] text-white font-medium uppercase tracking-wide">Ativo</span>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-[#121F32] rounded-xl p-4 border border-[#ABBFDD]/5">
<span className="text-xs text-[#ABBFDD]/60 block mb-1">Performance</span>
<span className="text-2xl font-semibold text-white tracking-tight brand-font">100%</span>
</div>
<div className="bg-[#121F32] rounded-xl p-4 border border-[#ABBFDD]/5">
<span className="text-xs text-[#ABBFDD]/60 block mb-1">Latência</span>
<span className="text-2xl font-semibold text-white tracking-tight brand-font">1ms</span>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-[#121F32]/50 rounded-lg border border-[#ABBFDD]/5">
<div className="flex items-center gap-3">
<span className="iconify text-[#F04A23]" data-icon="lucide:shield-check" data-width="16"></span>
<span className="text-xs text-[#D4D4DE]">Segurança Ativa</span>
</div>
<div className="relative inline-block w-8 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-2 appearance-none cursor-pointer border-[#F04A23] right-0" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-[#F04A23] cursor-pointer"></label>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-[#121F32]/50 rounded-lg border border-[#ABBFDD]/5">
<div className="flex items-center gap-3">
<span className="iconify text-[#ABBFDD]" data-icon="lucide:wifi" data-width="16"></span>
<span className="text-xs text-[#D4D4DE]">Rede Otimizada</span>
</div>
<span className="text-[10px] bg-[#ABBFDD]/10 text-[#ABBFDD] px-1.5 py-0.5 rounded">Auto</span>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="border-y border-[#ABBFDD]/5 bg-[#121F32]">
<div className="max-w-7xl mx-auto px-6 py-12">
<p className="text-center text-[10px] font-semibold text-[#ABBFDD]/40 uppercase tracking-[0.2em] mb-8">Tecnologias &amp; Parceiros</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 hover:opacity-100 transition-all duration-500">
<span className="text-lg font-semibold tracking-tighter text-white flex items-center gap-2"><span className="iconify" data-icon="lucide:server"></span>Microsoft</span>
<span className="text-lg font-semibold tracking-tighter text-white flex items-center gap-2"><span className="iconify" data-icon="lucide:box"></span>Linux</span>
<span className="text-lg font-semibold tracking-tighter text-white flex items-center gap-2"><span className="iconify" data-icon="lucide:wifi"></span>Ubiquiti</span>
<span className="text-lg font-semibold tracking-tighter text-white flex items-center gap-2"><span className="iconify" data-icon="lucide:shield"></span>Mikrotik</span>
<span className="text-lg font-semibold tracking-tighter text-white flex items-center gap-2"><span className="iconify" data-icon="lucide:cpu"></span>Intel</span>
</div>
</div>
</div>

<section className="py-24 relative" id="servicos">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4 brand-font">Soluções Técnicas</h2>
<p className="text-[#ABBFDD]/70">Diagnóstico preciso e resolução definitiva para sua infraestrutura de TI.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 bg-[#33312E] rounded-xl border border-[#ABBFDD]/5 hover:border-[#F04A23]/50 transition-all hover:shadow-[0_0_30px_-10px_rgba(240,74,35,0.1)] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#F04A23]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-10 h-10 bg-[#121F32] rounded-lg flex items-center justify-center mb-6 text-[#F04A23] group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:wrench" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Manutenção de Hardware</h3>
<p className="text-sm text-[#D4D4DE]/70 leading-relaxed">
                            Reparo especializado em notebooks, desktops e servidores. Limpeza técnica, upgrade de performance e troca de componentes.
                        </p>
</div>
</div>

<div className="group relative p-8 bg-[#33312E] rounded-xl border border-[#ABBFDD]/5 hover:border-[#ABBFDD]/50 transition-all hover:shadow-[0_0_30px_-10px_rgba(171,191,221,0.15)] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#ABBFDD]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-10 h-10 bg-[#121F32] rounded-lg flex items-center justify-center mb-6 text-[#ABBFDD] group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:network" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Redes &amp; Infraestrutura</h3>
<p className="text-sm text-[#D4D4DE]/70 leading-relaxed">
                            Cabeamento estruturado, configuração de roteadores, switches e implementação de redes Wi-Fi de alta densidade.
                        </p>
</div>
</div>

<div className="group relative p-8 bg-[#33312E] rounded-xl border border-[#ABBFDD]/5 hover:border-[#F04A23]/50 transition-all hover:shadow-[0_0_30px_-10px_rgba(240,74,35,0.1)] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#F04A23]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-10 h-10 bg-[#121F32] rounded-lg flex items-center justify-center mb-6 text-[#F04A23] group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:layout-grid" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Gestão de Sistemas</h3>
<p className="text-sm text-[#D4D4DE]/70 leading-relaxed">
                            Formatação, instalação de sistemas operacionais, remoção de vírus e configuração de backups automatizados.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#33312E]/30 border-y border-[#ABBFDD]/5" id="sobre">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2">
<div className="text-[#F04A23] font-bold tracking-widest text-[10px] uppercase mb-2">Perfil Profissional</div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6 brand-font">Carlos Henrique Polla</h2>
<p className="text-[#D4D4DE]/80 mb-8 leading-relaxed">
                        Atuando como Técnico de TI com foco em eficiência. Minha missão é eliminar gargalos tecnológicos para que você ou sua empresa foquem no que realmente importa. Trabalho com transparência, agilidade e uma abordagem direta aos problemas.
                    </p>
<div className="space-y-6">
<div className="flex gap-4 group">
<div className="w-12 h-12 rounded-lg bg-[#121F32] flex items-center justify-center flex-shrink-0 border border-[#ABBFDD]/10 group-hover:border-[#F04A23] transition-colors">
<span className="iconify text-[#F04A23]" data-icon="lucide:clock" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Agilidade no Atendimento</h4>
<p className="text-sm text-[#ABBFDD]/60">Respostas rápidas para chamados críticos em São José e região.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-12 h-12 rounded-lg bg-[#121F32] flex items-center justify-center flex-shrink-0 border border-[#ABBFDD]/10 group-hover:border-[#ABBFDD] transition-colors">
<span className="iconify text-[#ABBFDD]" data-icon="lucide:award" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Qualidade Garantida</h4>
<p className="text-sm text-[#ABBFDD]/60">Serviços executados com as melhores práticas do mercado.</p>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2 w-full">

<div className="relative rounded-2xl bg-[#121F32] border border-[#ABBFDD]/10 p-1 aspect-video flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#ABBFDD 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="relative z-10 w-64 h-40 bg-gradient-to-br from-[#33312E] to-[#121F32] rounded-xl border border-[#ABBFDD]/10 shadow-2xl flex flex-col p-5 overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-[#ABBFDD]/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded bg-[#D4D4DE] flex items-center justify-center text-[#121F32] font-bold brand-font">P</div>
<div className="h-2 w-8 bg-[#F04A23] rounded-full"></div>
</div>
<div className="mt-auto">
<div className="text-[10px] text-[#ABBFDD]/60 uppercase tracking-wider mb-1">Técnico de TI</div>
<div className="text-white font-semibold text-lg leading-none">Carlos<br/>Henrique Polla</div>
</div>
</div>

<div className="absolute bottom-12 right-12 bg-[#F04A23] text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-lg transform rotate-[-5deg]">
                            Suporte Local
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contato">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F04A23]/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6 brand-font">
                Vamos resolver isso?
            </h2>
<p className="text-[#D4D4DE]/70 mb-10 text-lg">
                Entre em contato diretamente comigo. Sem burocracia, direto ao ponto.
            </p>
<div className="bg-[#33312E] backdrop-blur border border-[#ABBFDD]/10 p-2 rounded-2xl inline-block w-full max-w-md shadow-2xl">
<form className="flex flex-col gap-2 p-4">
<div className="flex flex-col text-left gap-1.5">
<label className="text-xs font-medium text-[#ABBFDD] ml-1">Seu Nome</label>
<input className="bg-[#121F32] border border-[#ABBFDD]/10 text-white text-sm rounded-lg block w-full p-3 focus:ring-[#F04A23] focus:border-[#F04A23] outline-none transition-all placeholder-[#ABBFDD]/30" placeholder="Como posso te chamar?" type="text"/>
</div>
<div className="flex flex-col text-left gap-1.5 mt-2">
<label className="text-xs font-medium text-[#ABBFDD] ml-1">Assunto</label>
<div className="relative">
<select className="bg-[#121F32] border border-[#ABBFDD]/10 text-white text-sm rounded-lg block w-full p-3 focus:ring-[#F04A23] focus:border-[#F04A23] outline-none appearance-none cursor-pointer">
<option>Orçamento de Infraestrutura</option>
<option>Manutenção de Computadores</option>
<option>Problemas de Rede/Wi-Fi</option>
<option>Consultoria Geral</option>
</select>
<span className="iconify absolute right-3 top-3.5 text-[#ABBFDD]/50 pointer-events-none" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
<button className="mt-4 text-white bg-[#F04A23] hover:bg-[#d63e1b] font-medium rounded-lg text-sm px-5 py-3.5 w-full transition-all shadow-[0_0_20px_-5px_rgba(240,74,35,0.4)] flex items-center justify-center gap-2" type="button">
                        Enviar Mensagem
                        <span className="iconify" data-icon="lucide:send" data-width="16"></span>
</button>
</form>
</div>
<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#ABBFDD]/10 pt-10 text-center md:text-left">
<div className="flex flex-col items-center md:items-start gap-2">
<div className="w-10 h-10 rounded bg-[#121F32] border border-[#ABBFDD]/10 flex items-center justify-center text-[#F04A23] mb-2">
<span className="iconify" data-icon="lucide:phone" data-width="20"></span>
</div>
<span className="text-xs text-[#ABBFDD]/50 uppercase tracking-wider">Telefone / WhatsApp</span>
<span className="text-white font-medium hover:text-[#F04A23] transition-colors cursor-pointer">+55 48 98475-0196</span>
</div>
<div className="flex flex-col items-center md:items-start gap-2">
<div className="w-10 h-10 rounded bg-[#121F32] border border-[#ABBFDD]/10 flex items-center justify-center text-[#ABBFDD] mb-2">
<span className="iconify" data-icon="lucide:mail" data-width="20"></span>
</div>
<span className="text-xs text-[#ABBFDD]/50 uppercase tracking-wider">Email</span>
<span className="text-white font-medium hover:text-[#F04A23] transition-colors cursor-pointer">chenriquep6@gmail.com</span>
</div>
<div className="flex flex-col items-center md:items-start gap-2">
<div className="w-10 h-10 rounded bg-[#121F32] border border-[#ABBFDD]/10 flex items-center justify-center text-[#ABBFDD] mb-2">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<span className="text-xs text-[#ABBFDD]/50 uppercase tracking-wider">Endereço</span>
<span className="text-white font-medium">Rua Frederico Afonso, 5267<br/><span className="text-[#D4D4DE]/60 font-normal">São José - SC</span></span>
</div>
</div>
</div>
</section>

<footer className="py-8 border-t border-[#ABBFDD]/5 bg-[#121F32] text-center">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-[#ABBFDD] rounded-md flex items-center justify-center text-[#121F32] font-bold text-[10px] brand-font">P</div>
<span className="text-sm text-[#ABBFDD]/60">Polla © 2024. Todos os direitos reservados.</span>
</div>
<div className="flex gap-6">
<a className="text-[#ABBFDD]/40 hover:text-[#F04A23] transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="text-[#ABBFDD]/40 hover:text-[#F04A23] transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="18"></span></a>
</div>
</div>
</footer>

    </>
  );
}
