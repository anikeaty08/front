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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#F9F5EA]/90 border-b border-[#1C1D18]/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-[#1C1D18]" data-lucide="microscope"></i>
<span className="font-medium text-[#1C1D18] tracking-tight text-lg">Rumenologia</span>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-medium">
<a className="hover:text-[#1C1D18] transition-colors" href="#sobre">Sobre o curso</a>
<a className="hover:text-[#1C1D18] transition-colors" href="#modulos">Módulos</a>
<a className="hover:text-[#1C1D18] transition-colors" href="#especialista">Especialista</a>
</div>
<a className="rounded-full bg-[#1C1D18] text-white px-6 py-2.5 font-medium hover:bg-[#585B52] transition-colors inline-flex items-center gap-2" href="#oferta">
                Assinar agora
            </a>
</div>
</nav>

<section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-[#1C1D18]">
<div className="absolute inset-0 z-0">
<img alt="Bovinos em campo" className="w-full h-full object-cover opacity-50 mix-blend-overlay" src="https://images.unsplash.com/photo-1544385561-5817c4194492?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#1C1D18]/30 via-transparent to-[#1C1D18]"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
<h1 className="font-serif-custom text-5xl md:text-7xl font-medium tracking-tight text-[#F9F5EA] leading-tight mb-6">
                Domine o mundo do<br/>rúmen por dentro
            </h1>
<p className="text-lg md:text-xl text-[#F9F5EA]/80 font-normal max-w-3xl mx-auto leading-relaxed mb-10">
                Acabe com a falta de conhecimento de base para atuar em um dos mercados de maior remuneração e tenha segurança para enfrentar as novas demandas de produção.
            </p>
<a className="inline-flex items-center justify-center rounded-full bg-[#DBE270] text-[#1C1D18] px-8 py-4 text-lg font-medium hover:bg-white transition-colors shadow-lg" href="#oferta">
                Assinar agora!
            </a>
</div>

<div className="hidden md:flex absolute bottom-12 right-12 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl items-center gap-4 text-[#F9F5EA]">
<div className="bg-[#DBE270] text-[#1C1D18] p-3 rounded-full">
<i className="w-6 h-6" data-lucide="book-open"></i>
</div>
<div>
<p className="text-sm uppercase tracking-widest text-[#DBE270] font-medium mb-1">Conteúdo Denso</p>
<p className="text-xl font-medium tracking-tight">16 módulos · 80+ aulas</p>
</div>
</div>
</section>

<section className="bg-[#1C1D18] text-[#F9F5EA] py-24 md:py-32 px-6 border-t border-white/5">
<div className="max-w-4xl mx-auto text-center">
<i className="w-12 h-12 text-[#DBE270] mx-auto mb-8 opacity-50" data-lucide="quote"></i>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-snug">
                A base fisiológica e bioquímica que nenhuma graduação te entregou.
            </h2>
</div>
</section>

<section className="bg-[#F9F5EA] py-24 md:py-32 px-6 relative overflow-hidden" id="sobre">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl">
<img alt="Pesquisa em campo" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#1C1D18]/10 mix-blend-multiply"></div>
</div>

<div className="absolute -right-8 top-12 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-[#1C1D18]/5">
<div className="bg-[#F9F5EA] p-2 rounded-lg text-[#1C1D18]"><i className="w-5 h-5" data-lucide="monitor-play"></i></div>
<div><p className="text-sm font-medium text-[#1C1D18]">80+ aulas gravadas</p></div>
</div>
<div className="absolute -left-8 bottom-24 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-[#1C1D18]/5">
<div className="bg-[#DBE270] p-2 rounded-lg text-[#1C1D18]"><i className="w-5 h-5" data-lucide="award"></i></div>
<div><p className="text-sm font-medium text-[#1C1D18]">Certificação inédita</p></div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1D18]/5 text-[#1C1D18] text-sm font-medium mb-6">
<span className="w-2 h-2 rounded-full bg-[#DBE270]"></span>
                    Apresentação
                </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#1C1D18] mb-6 leading-tight">
                    Para os apaixonados pelo mundo do rúmen
                </h2>
<p className="text-lg leading-relaxed mb-8">
                    Acesso a 16 módulos com mais de 80 aulas gravadas em metodologia exclusiva na lousa, acompanhadas de materiais escritos detalhados.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-[#DBE270] shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-[#1C1D18] font-medium">Bioquímica &amp; Microbiologia</span>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-[#DBE270] shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-[#1C1D18] font-medium">Nutrição e Metano</span>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-[#DBE270] shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-[#1C1D18] font-medium">Metabolismo completo</span>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-[#DBE270] shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-[#1C1D18] font-medium">Distúrbios Metabólicos</span>
</div>
</div>
<div className="p-6 bg-white rounded-2xl border border-[#1C1D18]/5 shadow-sm">
<p className="text-base leading-relaxed text-[#1C1D18]">
                        Ao final deste curso, você terá construído ou revisitado os conhecimentos básicos sobre o rúmen e os ruminantes por meio de diversos módulos que abordam desde bioquímica até nutrição aplicada.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 md:py-32 px-6 border-y border-[#1C1D18]/5" id="modulos">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:mb-24">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#1C1D18] mb-4">Estrutura do Programa</h2>
<p className="text-lg max-w-2xl">Uma jornada profunda e sequencial pela ciência do rúmen.</p>
</div>
<div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

<div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
<div className="group cursor-pointer">
<p className="text-xs text-[#1C1D18]/40 font-medium mb-1">01</p>
<h3 className="text-xl font-medium tracking-tight text-[#1C1D18] group-hover:text-[#DBE270] transition-colors">Fundamentos &amp; Hábitos</h3>
</div>
<div className="group cursor-pointer">
<p className="text-xs text-[#1C1D18]/40 font-medium mb-1">02</p>
<h3 className="text-xl font-medium tracking-tight text-[#1C1D18] group-hover:text-[#DBE270] transition-colors">Microbiologia Ruminal</h3>
</div>
<div className="group cursor-pointer">
<p className="text-xs text-[#1C1D18]/40 font-medium mb-1">03</p>
<h3 className="text-xl font-medium tracking-tight text-[#1C1D18] group-hover:text-[#DBE270] transition-colors">Metabolismo Essencial</h3>
</div>
<div className="group cursor-pointer">
<p className="text-xs text-[#1C1D18]/40 font-medium mb-1">04</p>
<h3 className="text-xl font-medium tracking-tight text-[#1C1D18] group-hover:text-[#DBE270] transition-colors">Distúrbios &amp; Prevenção</h3>
</div>
<div className="group cursor-pointer">
<p className="text-xs text-[#DBE270] font-medium mb-1">EXTRA</p>
<h3 className="text-xl font-medium tracking-tight text-[#1C1D18]">Prática em Corte e Leite</h3>
</div>
</div>

<div className="lg:col-span-8 grid sm:grid-cols-2 gap-8">
<div className="bg-[#F9F5EA] rounded-3xl p-8 flex flex-col justify-between aspect-square border border-[#1C1D18]/5">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-6 text-[#1C1D18]">
<i className="w-5 h-5" data-lucide="test-tubes"></i>
</div>
<div>
<h4 className="text-2xl font-medium tracking-tight text-[#1C1D18] mb-3">Bioquímica e Microbiologia</h4>
<p className="text-base">Do básico ao avançado. Entenda a bioquímica do metano e a nutrição para mitigá-lo.</p>
</div>
</div>
<div className="bg-[#1C1D18] rounded-3xl p-8 flex flex-col justify-between aspect-square text-[#F9F5EA]">
<div className="w-12 h-12 rounded-full bg-[#30332C] flex items-center justify-center mb-6 text-[#DBE270]">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<div>
<h4 className="text-2xl font-medium tracking-tight text-[#F9F5EA] mb-3">Metabolismo</h4>
<p className="text-base text-[#F9F5EA]/70">Cinética ruminal, taxas de passagem, e o metabolismo completo de carboidratos, proteínas e lipídeos.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1C1D18] text-white py-24 md:py-32 px-6" id="especialista">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="relative">
<div className="aspect-[3/4] rounded-3xl overflow-hidden grayscale contrast-125 brightness-90">
<img alt="Professor Danilo Millen" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<div className="absolute inset-0 border border-white/10 rounded-3xl"></div>
</div>
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 leading-tight">
                    Veja quem é o idealizador desta metodologia
                </h2>
<h3 className="text-xl md:text-2xl text-[#DBE270] font-medium tracking-tight mb-8">Professor Danilo Millen</h3>
<p className="text-lg text-[#F9F5EA]/80 leading-relaxed mb-10">
                    PhD em Nutrição de Ruminantes, Zootecnista com mais de 12 anos de experiência. Docente da UNESP e consultor técnico com foco em nutrição e formulação de dietas. Reconhecido como uma das maiores autoridades em nutrição animal do Brasil.
                </p>
<ul className="space-y-5">
<li className="flex items-start gap-4">
<div className="mt-1 bg-white/10 p-1 rounded text-[#DBE270] shrink-0">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-base text-[#F9F5EA]/90">Zootecnista e Doutor pela UNESP. Pesquisador visitante na Univ. of Wisconsin-Madison/EUA e Univ. Autònoma de Barcelona.</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-white/10 p-1 rounded text-[#DBE270] shrink-0">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-base text-[#F9F5EA]/90">Um dos cientistas mais influentes no mundo na área de nutrição e saúde animal (PQ1D-CNPq).</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-white/10 p-1 rounded text-[#DBE270] shrink-0">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-base text-[#F9F5EA]/90">Orientou mais de 100 alunos. Criador do Canal de Rumenologia e Co-fundador do Programa C@rne 4.0.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="bg-[#F9F5EA] py-24 md:py-32 px-6 border-b border-[#1C1D18]/5 text-center">
<div className="max-w-4xl mx-auto">
<h2 className="text-xs font-medium uppercase tracking-widest text-[#1C1D18]/50 mb-12">O que os alunos falam</h2>
<div className="relative">
<i className="w-10 h-10 text-[#DBE270] mx-auto mb-6 opacity-60" data-lucide="quote"></i>
<p className="text-2xl md:text-4xl font-medium tracking-tight text-[#1C1D18] leading-snug mb-12">
                    "A didática do Danilo transforma conceitos complexos de bioquímica em algo aplicável no dia a dia da fazenda. Mudou minha visão profissional."
                </p>
<div className="flex items-center justify-center gap-4">
<button className="w-10 h-10 rounded-full border border-[#1C1D18]/10 flex items-center justify-center text-[#1C1D18] hover:bg-white transition-colors">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
<div className="flex items-center gap-3 text-left bg-white pr-6 pl-2 py-2 rounded-full shadow-sm border border-[#1C1D18]/5">
<div className="w-10 h-10 rounded-full bg-[#1C1D18] text-[#F9F5EA] flex items-center justify-center font-medium text-sm">
                            DB
                        </div>
<div>
<p className="text-sm font-medium text-[#1C1D18]">Débora</p>
<p className="text-xs text-[#585B52]">Zootecnista</p>
</div>
</div>
<button className="w-10 h-10 rounded-full border border-[#1C1D18]/10 flex items-center justify-center text-[#1C1D18] hover:bg-white transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="bg-[#F9F5EA] py-24 md:py-32 px-6" id="oferta">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#1C1D18] mb-4">Veja tudo que você terá acesso</h2>
<p className="text-lg">Estrutura completa para o seu desenvolvimento.</p>
</div>
<div className="space-y-3 mb-8">

<div className="bg-white p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 border border-[#1C1D18]/5 shadow-sm">
<div className="flex items-start gap-4">
<div className="bg-[#DBE270]/20 p-2 rounded text-[#1C1D18] shrink-0 mt-1"><i className="w-5 h-5" data-lucide="play-square"></i></div>
<div>
<p className="text-base text-[#1C1D18] font-medium mb-1">Acesso a mais de 70 aulas dos 14 módulos</p>
<p className="text-sm text-[#585B52]">Módulos liberados imediatamente após a assinatura.</p>
</div>
</div>
<div className="text-right md:w-32 shrink-0">
<p className="text-base font-medium text-[#1C1D18]">R$ 997,00</p>
</div>
</div>
<div className="bg-white p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 border border-[#1C1D18]/5 shadow-sm">
<div className="flex items-start gap-4">
<div className="bg-[#DBE270]/20 p-2 rounded text-[#1C1D18] shrink-0 mt-1"><i className="w-5 h-5" data-lucide="file-check-2"></i></div>
<div>
<p className="text-base text-[#1C1D18] font-medium mb-1">Avaliação individual para certificação</p>
<p className="text-sm text-[#585B52]">Metodologia exclusiva, válido após 12 meses.</p>
</div>
</div>
<div className="text-right md:w-32 shrink-0">
<p className="text-sm font-medium text-[#1C1D18]/40 uppercase tracking-wider">Incluso</p>
</div>
</div>
<div className="bg-white p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 border border-[#1C1D18]/5 shadow-sm">
<div className="flex items-start gap-4">
<div className="bg-[#DBE270]/20 p-2 rounded text-[#1C1D18] shrink-0 mt-1"><i className="w-5 h-5" data-lucide="book"></i></div>
<div>
<p className="text-base text-[#1C1D18] font-medium mb-1">Isenção de 30% no livro Rumenologia</p>
<p className="text-sm text-[#585B52]">E em demais cursos do Prof. Danilo Millen.</p>
</div>
</div>
<div className="text-right md:w-32 shrink-0">
<p className="text-base font-medium text-[#1C1D18]">R$ 135,00</p>
</div>
</div>
<div className="bg-white p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 border border-[#1C1D18]/5 shadow-sm">
<div className="flex items-start gap-4">
<div className="bg-[#DBE270]/20 p-2 rounded text-[#1C1D18] shrink-0 mt-1"><i className="w-5 h-5" data-lucide="gift"></i></div>
<div>
<p className="text-base text-[#1C1D18] font-medium mb-1">Módulos Bônus: Gado de Corte e Leite</p>
<p className="text-sm text-[#585B52]">Aulas práticas focadas na demanda de mercado (liberação no 4º mês).</p>
</div>
</div>
<div className="text-right md:w-32 shrink-0">
<p className="text-base font-medium text-[#1C1D18]">R$ 297,00</p>
</div>
</div>
</div>

<div className="bg-[#1C1D18] rounded-3xl p-8 md:p-10 text-center relative overflow-hidden shadow-2xl">
<div className="absolute top-0 right-0 p-8 opacity-10"><i className="w-32 h-32 text-white" data-lucide="circle-dollar-sign"></i></div>
<div className="relative z-10">
<p className="text-base text-[#DBE270] font-medium tracking-wide uppercase mb-2">Valor total do programa</p>
<p className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-2">R$ 1.429,00</p>
<p className="text-sm text-white/60 mb-8">+ Acesso para um colega por 12x R$37</p>
<button className="w-full md:w-auto inline-flex items-center justify-center rounded-full bg-[#DBE270] text-[#1C1D18] px-10 py-5 text-lg font-medium hover:bg-white transition-colors shadow-lg">
                        Assinar agora!
                    </button>
<p className="text-xs text-white/40 mt-6">Faça sua matrícula sem ocupar o limite do cartão. Assinatura mensal.</p>
</div>
</div>

<div className="mt-12 flex items-center gap-4 justify-center text-center max-w-lg mx-auto p-6 rounded-2xl border border-[#1C1D18]/10 bg-[#1C1D18]/5">
<i className="w-8 h-8 text-[#1C1D18] shrink-0" data-lucide="shield-check"></i>
<p className="text-sm text-[#1C1D18] font-medium">Garantia de 15 dias. Se não for o que esperava, devolvemos 100% do seu dinheiro.</p>
</div>
</div>
</section>

<section className="bg-white py-24 px-6 border-t border-[#1C1D18]/5">
<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 relative">
<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#1C1D18]/10 -translate-x-1/2"></div>
<div>
<h3 className="text-2xl font-medium tracking-tight text-[#1C1D18] mb-8">Para quem É esse curso</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-green-600" data-lucide="check"></i><span className="text-base">Profissionais buscando melhorar técnicas</span></li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-green-600" data-lucide="check"></i><span className="text-base">Estudantes de agrárias</span></li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-green-600" data-lucide="check"></i><span className="text-base">Zootecnistas e Veterinários</span></li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-green-600" data-lucide="check"></i><span className="text-base">Agrônomos e Técnicos de campo</span></li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-green-600" data-lucide="check"></i><span className="text-base">Consultores independentes</span></li>
</ul>
</div>
<div>
<h3 className="text-2xl font-medium tracking-tight text-[#1C1D18] mb-8 opacity-60">Para quem NÃO É esse curso</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#1C1D18]/30" data-lucide="x"></i><span className="text-base text-[#1C1D18]/60">Sem nenhum contato prévio com bovinos</span></li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#1C1D18]/30" data-lucide="x"></i><span className="text-base text-[#1C1D18]/60">Pessoas que não buscam desenvolvimento</span></li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#1C1D18]/30" data-lucide="x"></i><span className="text-base text-[#1C1D18]/60">Quem acredita em atalhos sem esforço</span></li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#1C1D18]/30" data-lucide="x"></i><span className="text-base text-[#1C1D18]/60">Quem já domina toda a base da rumenologia</span></li>
</ul>
</div>
</div>
</section>

<section className="bg-[#F9F5EA] py-24 px-6 border-t border-[#1C1D18]/5">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#1C1D18] mb-12 text-center">Perguntas Frequentes</h2>
<div className="space-y-4">
<div className="bg-white p-5 rounded-xl border border-[#1C1D18]/5 shadow-sm flex justify-between items-center cursor-pointer group hover:border-[#1C1D18]/20 transition-colors">
<span className="text-base font-medium text-[#1C1D18]">Como vou acessar o curso?</span>
<i className="w-5 h-5 text-[#1C1D18]/40 group-hover:text-[#1C1D18]" data-lucide="chevron-down"></i>
</div>
<div className="bg-white p-5 rounded-xl border border-[#1C1D18]/5 shadow-sm flex justify-between items-center cursor-pointer group hover:border-[#1C1D18]/20 transition-colors">
<span className="text-base font-medium text-[#1C1D18]">Por quanto tempo terei acesso?</span>
<i className="w-5 h-5 text-[#1C1D18]/40 group-hover:text-[#1C1D18]" data-lucide="chevron-down"></i>
</div>
<div className="bg-white p-5 rounded-xl border border-[#1C1D18]/5 shadow-sm flex justify-between items-center cursor-pointer group hover:border-[#1C1D18]/20 transition-colors">
<span className="text-base font-medium text-[#1C1D18]">O curso tem certificado?</span>
<i className="w-5 h-5 text-[#1C1D18]/40 group-hover:text-[#1C1D18]" data-lucide="chevron-down"></i>
</div>
<div className="bg-white p-5 rounded-xl border border-[#1C1D18]/5 shadow-sm flex justify-between items-center cursor-pointer group hover:border-[#1C1D18]/20 transition-colors">
<span className="text-base font-medium text-[#1C1D18]">Posso acessar de um aplicativo?</span>
<i className="w-5 h-5 text-[#1C1D18]/40 group-hover:text-[#1C1D18]" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</section>

<section className="bg-[#1C1D18] text-white py-32 px-6 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595000780213-92fbf8c5d947?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
<div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
<p className="text-[#DBE270] font-medium tracking-widest uppercase text-sm mb-6">Junte-se ao movimento</p>
<div className="flex items-center justify-center -space-x-4 mb-8">
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-[#1C1D18]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-[#1C1D18]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-[#1C1D18]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div className="w-12 h-12 rounded-full border-2 border-[#1C1D18] bg-[#30332C] flex items-center justify-center text-xs font-medium">+</div>
</div>
<h2 className="text-5xl md:text-7xl font-medium tracking-tight text-[#F9F5EA] mb-8">
                2.500+
            </h2>
<p className="text-xl md:text-3xl font-medium tracking-tight text-white/90 mb-12 max-w-2xl leading-tight">
                Faça parte da maior comunidade de apaixonados pelo mundo do rúmen.
            </p>
<a className="inline-flex items-center justify-center rounded-full bg-white text-[#1C1D18] px-10 py-4 text-lg font-medium hover:bg-[#DBE270] transition-colors shadow-lg" href="#oferta">
                Assine Agora
            </a>
</div>
</section>

<footer className="bg-black py-16 px-6 text-white/50 text-sm">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-white/80">
<i className="w-5 h-5" data-lucide="microscope"></i>
<span className="font-medium tracking-tight">Rumenologia</span>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors" href="#">Política de privacidade</a>
<a className="hover:text-white transition-colors" href="#">Termos de uso</a>
<a className="hover:text-white transition-colors" href="#">Aviso legal</a>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
</div>
</div>
<div className="max-w-7xl mx-auto text-center md:text-left mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between">
<p>Copyright © 2025 — Território da Carne</p>
<p>CNPJ: 29.422.007/0001-83 — Todos os Direitos Reservados</p>
</div>
</footer>


    </>
  );
}
