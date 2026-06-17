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



        // Initialize Lucide Icons
        lucide.createIcons();
    
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
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#0B0B0C]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 rounded-[12px] bg-[#042D63] flex items-center justify-center border border-white/10 group-hover:border-[#BFFCFE]/50 transition-colors">
<i className="text-[#BFFCFE]" data-lucide="anchor" strokeWidth="1.5"></i>
</div>
<span className="text-2xl font-semibold tracking-tight text-white">Âncora</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-lg text-neutral-400 hover:text-white transition-colors" href="#sobre">Sobre Nós</a>
<a className="text-lg text-neutral-400 hover:text-white transition-colors" href="#servicos">Serviços</a>
</div>
<div>
<a className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-base border border-white/10 transition-colors" href="#contato">Área do Cliente</a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-24 md:pt-56 md:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C] via-[#0B0B0C] to-[#042D63]/20 z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#042D63] rounded-full blur-[150px] opacity-30 pointer-events-none z-0"></div>
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#BFFCFE] rounded-full blur-[150px] opacity-10 pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#042D63]/30 border border-[#BFFCFE]/20 mb-10">
<span className="w-2.5 h-2.5 rounded-full bg-[#BFFCFE] animate-pulse"></span>
<span className="text-base font-medium text-[#BFFCFE]">Especialistas em Reabilitação Financeira</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-[80px] font-semibold tracking-tight text-white mb-8 max-w-5xl leading-[1.1]">
                Recuperar o crédito e a <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#BFFCFE] to-white">paz financeira</span>
</h1>
<p className="text-xl md:text-2xl text-neutral-400 mb-14 max-w-2xl leading-relaxed">
                A Âncora Soluções é o seu porto seguro. Retome o controle da sua vida financeira com total sigilo, agilidade e segurança.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#D6A832] text-[#0B0B0C] font-semibold text-lg hover:bg-[#FAF2C3] transition-colors shadow-[0_0_40px_-10px_#D6A832]/50 flex items-center justify-center gap-2" href="#contato">
                    Fale Conosco
                    <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto px-10 py-5 rounded-full border border-[#BFFCFE]/30 bg-white/5 text-[#BFFCFE] font-medium text-lg hover:bg-white/10 transition-colors flex items-center justify-center" href="#servicos">
                    Nossos Serviços
                </a>
</div>
</div>
</section>

<section className="py-32 bg-neutral-50 text-neutral-900 relative" id="sobre">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="flex flex-col">
<div className="mb-6 flex items-center gap-3">
<div className="w-12 h-[1px] bg-[#042D63]"></div>
<span className="text-lg font-medium tracking-tight text-[#042D63] uppercase">Sobre Nós</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B0B0C] mb-8 leading-tight">
                    Seu porto seguro para a retomada do controle.
                </h2>
<div className="space-y-6 text-xl text-neutral-600 leading-relaxed">
<p>
                        A <span className="font-semibold text-[#042D63]">Âncora Soluções</span> nasceu com o propósito de devolver a dignidade e a tranquilidade para pessoas e empresas que enfrentam desafios financeiros. Entendemos que imprevistos acontecem, e nosso objetivo não é julgar, mas solucionar.
                    </p>
<p>
                        Atuamos com extremo <strong>rigor, agilidade e sigilo absoluto</strong>. Nossa equipe de especialistas analisa cada caso de forma personalizada, traçando a melhor estratégia jurídica e financeira para limpar seu nome, blindar seus ativos e abrir novas portas no mercado de crédito.
                    </p>
</div>
<div className="mt-12 grid grid-cols-2 gap-8 pt-8 border-t border-neutral-200">
<div>
<div className="text-4xl font-semibold text-[#D6A832] mb-2 tracking-tight">+10k</div>
<div className="text-lg text-neutral-500">Clientes Atendidos</div>
</div>
<div>
<div className="text-4xl font-semibold text-[#D6A832] mb-2 tracking-tight">100%</div>
<div className="text-lg text-neutral-500">Sigilo Garantido</div>
</div>
</div>
</div>
<div className="relative w-full aspect-square md:aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(4,45,99,0.15)] group">
<div className="absolute inset-0 bg-[#042D63]/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Composição abstrata de negócios e confiança" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-32 bg-[#0B0B0C] relative" id="servicos">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                    Soluções sob medida
                </h2>
<p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                    Um portfólio completo de serviços desenhados para restaurar e proteger a saúde financeira do seu CPF ou CNPJ.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-[#121214] border border-[#FAF2C3]/10 rounded-[24px] p-10 hover:border-[#FAF2C3]/30 transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(250,242,195,0.05)] relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#BFFCFE] rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
<div className="w-14 h-14 rounded-full bg-[#042D63]/50 flex items-center justify-center mb-8 border border-[#BFFCFE]/20">
<i className="text-[#BFFCFE] w-7 h-7" data-lucide="line-chart" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Consultoria Financeira</h3>
<p className="text-lg text-neutral-400 leading-relaxed">
                        Transforme sua vida financeira com soluções personalizadas para CPF ou CNPJ.
                    </p>
</div>

<div className="group bg-[#121214] border border-[#FAF2C3]/10 rounded-[24px] p-10 hover:border-[#FAF2C3]/30 transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(250,242,195,0.05)] relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#BFFCFE] rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
<div className="w-14 h-14 rounded-full bg-[#042D63]/50 flex items-center justify-center mb-8 border border-[#BFFCFE]/20">
<i className="text-[#BFFCFE] w-7 h-7" data-lucide="file-check-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Remoção de Apontamentos</h3>
<p className="text-lg text-neutral-400 leading-relaxed">
                        Removemos apontamento em seu CPF ou CNPJ junto aos órgãos de proteção ao crédito.
                    </p>
</div>

<div className="group bg-[#121214] border border-[#FAF2C3]/10 rounded-[24px] p-10 hover:border-[#FAF2C3]/30 transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(250,242,195,0.05)] relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#FAF2C3] rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
<div className="w-14 h-14 rounded-full bg-[#D6A832]/20 flex items-center justify-center mb-8 border border-[#FAF2C3]/20">
<i className="text-[#FAF2C3] w-7 h-7" data-lucide="landmark" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Linha de Crédito Facilitada</h3>
<p className="text-lg text-neutral-400 leading-relaxed">
                        Ideal para quem quer abrir um negócio ou para quem já é dono do próprio negócio.
                    </p>
</div>

<div className="group bg-[#121214] border border-[#FAF2C3]/10 rounded-[24px] p-10 hover:border-[#FAF2C3]/30 transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(250,242,195,0.05)] relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#BFFCFE] rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
<div className="w-14 h-14 rounded-full bg-[#042D63]/50 flex items-center justify-center mb-8 border border-[#BFFCFE]/20">
<i className="text-[#BFFCFE] w-7 h-7" data-lucide="eraser" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Remoção do Histórico</h3>
<p className="text-lg text-neutral-400 leading-relaxed">
                        Remoção total de todas as dívidas e histórico de inadimplência no Serasa, SPC e Boa Vista.
                    </p>
</div>

<div className="group bg-[#121214] border border-[#FAF2C3]/10 rounded-[24px] p-10 hover:border-[#FAF2C3]/30 transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(250,242,195,0.05)] relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#FAF2C3] rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
<div className="w-14 h-14 rounded-full bg-[#D6A832]/20 flex items-center justify-center mb-8 border border-[#FAF2C3]/20">
<i className="text-[#FAF2C3] w-7 h-7" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Recuperação de Score</h3>
<p className="text-lg text-neutral-400 leading-relaxed">
                        Quanto mais alto seu score, mais chances no mercado de crédito você pode ter!
                    </p>
</div>

<div className="group bg-[#121214] border border-[#FAF2C3]/10 rounded-[24px] p-10 hover:border-[#FAF2C3]/30 transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(250,242,195,0.05)] relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#BFFCFE] rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
<div className="w-14 h-14 rounded-full bg-[#042D63]/50 flex items-center justify-center mb-8 border border-[#BFFCFE]/20">
<i className="text-[#BFFCFE] w-7 h-7" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Blindagem de CPF/CNPJ</h3>
<p className="text-lg text-neutral-400 leading-relaxed">
                        Proteção para manter seu crédito seguro enquanto você reorganiza sua vida financeira.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="contato">
<div className="absolute inset-0 bg-gradient-to-t from-[#042D63]/20 to-[#0B0B0C] z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">

<div className="lg:col-span-3 bg-[#042D63] rounded-[24px] p-8 md:p-14 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/5 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2 relative z-10">Iniciar Atendimento</h2>
<p className="text-lg text-[#BFFCFE]/80 mb-10 relative z-10">Preencha os dados abaixo e nossa equipe entrará em contato em sigilo.</p>
<form className="space-y-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-base text-white/80 font-medium ml-1">Nome Completo</label>
<input className="w-full bg-black/20 border border-white/10 rounded-[12px] px-5 py-4 text-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#BFFCFE]/50 focus:bg-black/30 transition-all" placeholder="Seu nome" type="text"/>
</div>
<div className="space-y-2">
<label className="text-base text-white/80 font-medium ml-1">Telefone / WhatsApp</label>
<input className="w-full bg-black/20 border border-white/10 rounded-[12px] px-5 py-4 text-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#BFFCFE]/50 focus:bg-black/30 transition-all" placeholder="(00) 00000-0000" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-base text-white/80 font-medium ml-1">E-mail</label>
<input className="w-full bg-black/20 border border-white/10 rounded-[12px] px-5 py-4 text-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#BFFCFE]/50 focus:bg-black/30 transition-all" placeholder="seu@email.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-base text-white/80 font-medium ml-1">Mensagem (Opcional)</label>
<textarea className="w-full bg-black/20 border border-white/10 rounded-[12px] px-5 py-4 text-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#BFFCFE]/50 focus:bg-black/30 transition-all resize-none" placeholder="Como podemos ajudar?" rows="4"></textarea>
</div>
<button className="w-full bg-[#D6A832] text-[#0B0B0C] font-semibold text-lg py-5 rounded-full hover:bg-[#FAF2C3] transition-colors mt-4 flex justify-center items-center gap-2" type="submit">
                        Solicitar Análise Gratuita
                        <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="2"></i>
</button>
<p className="text-sm text-white/50 text-center mt-4 flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="lock" strokeWidth="1.5"></i>
                        Seus dados estão protegidos sob sigilo absoluto.
                    </p>
</form>
</div>

<div className="lg:col-span-2 space-y-12 pl-0 lg:pl-8">
<div>
<h3 className="text-4xl font-semibold tracking-tight text-white mb-8">Fale Conosco</h3>
<p className="text-xl text-neutral-400 leading-relaxed mb-8">
                        Nossa equipe de especialistas está pronta para analisar o seu caso e oferecer a melhor solução.
                    </p>
</div>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<i className="text-[#BFFCFE] w-6 h-6" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-lg font-medium text-white mb-1">E-mail</div>
<div className="text-lg text-neutral-400">contato@ancorasolucoes.com.br</div>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<i className="text-[#BFFCFE] w-6 h-6" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-lg font-medium text-white mb-1">Telefone / WhatsApp</div>
<div className="text-lg text-neutral-400">0800 123 4567</div>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<i className="text-[#BFFCFE] w-6 h-6" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-lg font-medium text-white mb-1">Endereço</div>
<div className="text-lg text-neutral-400">Av. Empresarial, 1000 - Andar 12<br/>São Paulo, SP - 01000-000</div>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<i className="text-[#BFFCFE] w-6 h-6" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-lg font-medium text-white mb-1">Atendimento</div>
<div className="text-lg text-neutral-400">Seg. a Sex. das 09h às 18h</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#0B0B0C] py-12 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<i className="text-neutral-500 w-5 h-5" data-lucide="anchor" strokeWidth="1.5"></i>
<span className="text-lg font-medium text-neutral-400">Âncora Soluções</span>
</div>
<p className="text-base text-neutral-600 text-center md:text-left">
                © 2024 Âncora Soluções Financeiras. Todos os direitos reservados.
            </p>
<div className="flex gap-4">
<a className="text-neutral-600 hover:text-[#BFFCFE] transition-colors text-base" href="#">Termos</a>
<a className="text-neutral-600 hover:text-[#BFFCFE] transition-colors text-base" href="#">Privacidade</a>
</div>
</div>
</footer>


    </>
  );
}
