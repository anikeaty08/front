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
      

<nav className="fixed top-0 w-full z-50 bg-[#F9F5EA]/80 backdrop-blur-md border-b border-[#DFDFDF] transition-all">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#1C1D18] flex items-center justify-center text-[#F9F5EA]">
<i className="w-5 h-5" data-lucide="test-tubes" strokeWidth="1.5"></i>
</div>
<div>
<h1 className="font-['Cormorant_Garamond'] text-2xl font-semibold leading-none tracking-tight text-[#1C1D18]">Fundamentos</h1>
<p className="font-['JetBrains_Mono'] text-xs text-[#585B52] uppercase tracking-widest mt-1">de Rumenologia</p>
</div>
</div>
<div className="hidden md:flex items-center gap-8 font-['JetBrains_Mono'] text-sm tracking-wider text-[#585B52]">
<a className="hover:text-[#1C1D18] transition-colors" href="#programa">Programa</a>
<a className="hover:text-[#1C1D18] transition-colors" href="#professor">Professor</a>
<a className="hover:text-[#1C1D18] transition-colors" href="#investimento">Investimento</a>
</div>
<a className="bg-[#1C1D18] text-[#F9F5EA] px-6 py-2.5 rounded-full text-sm font-medium hover:-translate-y-0.5 transition-transform" href="#investimento">
                Assinar agora
            </a>
</div>
</nav>

<section className="pt-32 pb-24 px-6 max-w-7xl mx-auto lg:min-h-screen flex items-center">
<div className="grid lg:grid-cols-[52%_48%] gap-16 items-center w-full">

<div className="relative z-10">
<div className="flex items-center gap-4 mb-8">
<div className="w-px h-8 bg-[#1C1D18]/20"></div>
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DBE270] text-[#1C1D18] text-xs font-['JetBrains_Mono'] uppercase tracking-widest">
<span className="w-1.5 h-1.5 rounded-full bg-[#1C1D18] animate-pulse"></span>
                        Inscrições abertas · Turma 2026
                    </span>
</div>
<h2 className="font-['Cormorant_Garamond'] text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-[#1C1D18] mb-8">
                    Domine o <span className="italic text-[#585B52]">mundo do rúmen</span> por dentro.
                </h2>
<p className="text-xl text-[#585B52] leading-relaxed mb-12 max-w-lg">
                    A formação definitiva em fisiologia, bioquímica e microbiologia ruminal. Ciência aplicada de alto nível para profissionais que não aceitam o superficial.
                </p>
<div className="flex flex-wrap items-center gap-6 mb-16">
<a className="bg-[#1C1D18] text-[#F9F5EA] px-8 py-4 rounded-full text-base font-medium hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1C1D18]/10 transition-all" href="#investimento">
                        Garantir minha vaga
                    </a>
<a className="group flex items-center gap-2 text-[#1C1D18] font-medium border-b border-transparent hover:border-[#1C1D18] pb-1 transition-all" href="#programa">
                        Explorar ementa
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#DFDFDF] max-w-lg">
<div>
<span className="block font-['Cormorant_Garamond'] text-4xl font-semibold text-[#1C1D18]">16</span>
<span className="block font-['JetBrains_Mono'] text-xs text-[#585B52] uppercase tracking-wider mt-1">Módulos<br/>Completos</span>
</div>
<div className="pl-6 border-l border-[#DFDFDF]">
<span className="block font-['Cormorant_Garamond'] text-4xl font-semibold text-[#1C1D18]">80<span className="text-2xl text-[#DBE270]">+</span></span>
<span className="block font-['JetBrains_Mono'] text-xs text-[#585B52] uppercase tracking-wider mt-1">Aulas em<br/>Alta Definição</span>
</div>
<div className="pl-6 border-l border-[#DFDFDF]">
<span className="block font-['Cormorant_Garamond'] text-4xl font-semibold text-[#1C1D18]">12</span>
<span className="block font-['JetBrains_Mono'] text-xs text-[#585B52] uppercase tracking-wider mt-1">Meses de<br/>Acesso Master</span>
</div>
</div>
</div>

<div className="relative hidden lg:block h-full min-h-[40rem]">
<div className="absolute -top-12 -right-12 text-[20rem] font-['Cormorant_Garamond'] text-[#DBE270] opacity-40 leading-none z-0 select-none pointer-events-none">
                    16
                </div>
<div className="relative z-10 w-full h-full bg-[#E5E2D9] border border-[#DFDFDF] overflow-hidden aspect-[3/4]">
<img alt="Ruminant biology abstract" className="w-full h-full object-cover mix-blend-multiply opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>

<div className="w-full bg-[#DBE270] py-4 border-y border-[#1C1D18]/10 overflow-hidden flex select-none">
<div className="flex whitespace-nowrap font-['JetBrains_Mono'] text-sm uppercase tracking-widest text-[#1C1D18] items-center gap-8">
<span>Bioquímica Ruminal</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#1C1D18]"></span>
<span>Microbiologia Avançada</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#1C1D18]"></span>
<span>Cinética Ruminal</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#1C1D18]"></span>
<span>Fermentação de Carboidratos</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#1C1D18]"></span>
<span>Metabolismo Proteico</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#1C1D18]"></span>
<span>Bioquímica Ruminal</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#1C1D18]"></span>
<span>Microbiologia Avançada</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#1C1D18]"></span>
<span>Cinética Ruminal</span>
</div>
</div>

<section className="bg-[#FFFFFF] py-32 border-b border-[#DFDFDF]">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[45%_55%] gap-20">
<div className="lg:sticky lg:top-32 h-fit">
<h2 className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-[#1C1D18] mb-6">
                    Você sabe o que fazer. <br/><span className="text-[#585B52]">Mas não sabe por que funciona.</span>
</h2>
<p className="text-xl text-[#585B52] leading-relaxed">
                    A nutrição de ruminantes atingiu um platô técnico. Para avançar, replicar fórmulas não basta. É preciso entender a caixa preta do rúmen em nível celular e molecular.
                </p>
</div>
<div className="flex flex-col">

<div className="flex gap-8 py-10 border-b border-[#DFDFDF] first:pt-0">
<span className="font-['Cormorant_Garamond'] text-5xl text-[#DBE270] font-semibold leading-none shrink-0">01</span>
<div>
<h3 className="font-['Outfit'] font-semibold text-2xl text-[#1C1D18] tracking-tight mb-3">Decisões baseadas em achismos</h3>
<p className="text-[#585B52] leading-relaxed">Quando ocorre um distúrbio metabólico, você trata o sintoma ou entende a cascata microbiológica que causou o problema? A falta de base gera dependência de protocolos engessados.</p>
</div>
</div>

<div className="flex gap-8 py-10 border-b border-[#DFDFDF]">
<span className="font-['Cormorant_Garamond'] text-5xl text-[#DBE270] font-semibold leading-none shrink-0">02</span>
<div>
<h3 className="font-['Outfit'] font-semibold text-2xl text-[#1C1D18] tracking-tight mb-3">Interpretação superficial de dados</h3>
<p className="text-[#585B52] leading-relaxed">Laudos laboratoriais e análises de cinética de degradação são apenas números se você não compreender as vias bioquímicas que originaram aqueles resultados no ambiente ruminal.</p>
</div>
</div>

<div className="flex gap-8 py-10 border-b border-[#DFDFDF]">
<span className="font-['Cormorant_Garamond'] text-5xl text-[#DBE270] font-semibold leading-none shrink-0">03</span>
<div>
<h3 className="font-['Outfit'] font-semibold text-2xl text-[#1C1D18] tracking-tight mb-3">Estagnação técnica profissional</h3>
<p className="text-[#585B52] leading-relaxed">O mercado está cheio de calculadores de ração. O diferencial competitivo e financeiro está reservado para quem domina os mecanismos primários da digestão e fermentação.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1C1D18] text-[#F9F5EA] py-40 relative overflow-hidden flex flex-col items-center justify-center">

<div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
<div className="w-[40rem] h-[40rem] bg-[#DBE270] rounded-full blur-[150px] opacity-10"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[20rem] font-['Cormorant_Garamond'] text-[#F9F5EA] opacity-[0.02] select-none whitespace-nowrap z-0 tracking-tighter">
            Rumenologia
        </div>
<div className="relative z-10 max-w-4xl px-6 text-center">
<h2 className="font-['Cormorant_Garamond'] italic text-4xl lg:text-6xl font-medium tracking-tight leading-snug mb-16 text-[#F9F5EA]">
                "O verdadeiro controle nutricional só começa quando você entende a biologia microscópica."
            </h2>
<div className="flex flex-wrap items-center justify-center gap-4">
<span className="border border-[#F9F5EA]/20 rounded-full px-5 py-2 text-sm font-['JetBrains_Mono'] uppercase tracking-widest text-[#F9F5EA]/70">Microbioma</span>
<span className="border border-[#F9F5EA]/20 rounded-full px-5 py-2 text-sm font-['JetBrains_Mono'] uppercase tracking-widest text-[#F9F5EA]/70">pH Ruminal</span>
<span className="border border-[#F9F5EA]/20 rounded-full px-5 py-2 text-sm font-['JetBrains_Mono'] uppercase tracking-widest text-[#DBE270]">Vias Fermentativas</span>
<span className="border border-[#F9F5EA]/20 rounded-full px-5 py-2 text-sm font-['JetBrains_Mono'] uppercase tracking-widest text-[#F9F5EA]/70">Cinética</span>
</div>
</div>
</section>

<section className="bg-[#F9F5EA] py-32 border-b border-[#DFDFDF]" id="programa">
<div className="max-w-4xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1C1D18] pb-8 mb-8 gap-6">
<div>
<span className="font-['JetBrains_Mono'] text-sm text-[#585B52] uppercase tracking-widest mb-4 block">A Ementa Oficial</span>
<h2 className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl font-semibold tracking-tight text-[#1C1D18]">Arquitetura do Conhecimento</h2>
</div>
<div className="text-left md:text-right font-['JetBrains_Mono'] text-sm text-[#585B52] uppercase tracking-widest leading-relaxed">
                    16 Módulos Estruturados <br/>
                    Carga Horária: 80h+
                </div>
</div>
<div className="flex flex-col">

<div className="border-b border-[#DFDFDF] group">
<div className="flex items-center py-8 cursor-pointer">
<span className="font-['JetBrains_Mono'] text-xl text-[#DBE270] w-16 shrink-0 font-medium">01</span>
<h3 className="font-['Cormorant_Garamond'] text-3xl font-medium flex-1 text-[#1C1D18]">Anatomia e Fisiologia Funcional</h3>
<span className="hidden md:inline-block px-3 py-1 border border-[#DFDFDF] rounded-full text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[#585B52] mx-6">Fundamentos</span>
<i className="w-6 h-6 text-[#1C1D18] shrink-0" data-lucide="chevron-up" strokeWidth="1.5"></i>
</div>
<div className="pl-16 pb-10 pr-6">
<p className="text-[#585B52] mb-6">Mergulho profundo na estrutura física e motilidade dos compartimentos gástricos, estabelecendo a base para compreender os fluxos de digestão.</p>
<ul className="space-y-4 text-[#1C1D18]">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#DBE270] shrink-0 mt-0.5" data-lucide="corner-down-right" strokeWidth="1.5"></i>
<span>Ontogenia e desenvolvimento do aparelho digestivo</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#DBE270] shrink-0 mt-0.5" data-lucide="corner-down-right" strokeWidth="1.5"></i>
<span>Motilidade retículo-ruminal e regulação nervosa</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#DBE270] shrink-0 mt-0.5" data-lucide="corner-down-right" strokeWidth="1.5"></i>
<span>Ruminação, eructação e controle de fluxo da digesta</span>
</li>
</ul>
</div>
</div>

<div className="border-b border-[#DFDFDF] group hover:bg-[#1C1D18]/[0.02] transition-colors">
<div className="flex items-center py-8 cursor-pointer">
<span className="font-['JetBrains_Mono'] text-xl text-[#585B52] w-16 shrink-0">02</span>
<h3 className="font-['Cormorant_Garamond'] text-3xl font-medium flex-1 text-[#585B52] group-hover:text-[#1C1D18] transition-colors">Ecologia e Microbiologia Ruminal</h3>
<span className="hidden md:inline-block px-3 py-1 border border-[#DFDFDF] rounded-full text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[#585B52] mx-6">Microbioma</span>
<i className="w-6 h-6 text-[#585B52] shrink-0" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>

<div className="border-b border-[#DFDFDF] group hover:bg-[#1C1D18]/[0.02] transition-colors">
<div className="flex items-center py-8 cursor-pointer">
<span className="font-['JetBrains_Mono'] text-xl text-[#585B52] w-16 shrink-0">03</span>
<h3 className="font-['Cormorant_Garamond'] text-3xl font-medium flex-1 text-[#585B52] group-hover:text-[#1C1D18] transition-colors">Bioquímica dos Carboidratos</h3>
<span className="hidden md:inline-block px-3 py-1 border border-[#DFDFDF] rounded-full text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[#585B52] mx-6">Metabolismo</span>
<i className="w-6 h-6 text-[#585B52] shrink-0" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>

<div className="border-b border-[#DFDFDF] group hover:bg-[#1C1D18]/[0.02] transition-colors">
<div className="flex items-center py-8 cursor-pointer">
<span className="font-['JetBrains_Mono'] text-xl text-[#585B52] w-16 shrink-0">04</span>
<h3 className="font-['Cormorant_Garamond'] text-3xl font-medium flex-1 text-[#585B52] group-hover:text-[#1C1D18] transition-colors">Dinâmica de Nitrogênio e Proteína</h3>
<span className="hidden md:inline-block px-3 py-1 border border-[#DFDFDF] rounded-full text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[#585B52] mx-6">Metabolismo</span>
<i className="w-6 h-6 text-[#585B52] shrink-0" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>

<div className="group hover:bg-[#1C1D18]/[0.02] transition-colors">
<div className="flex items-center py-8 cursor-pointer">
<span className="font-['JetBrains_Mono'] text-xl text-[#585B52] w-16 shrink-0">...</span>
<h3 className="font-['Cormorant_Garamond'] text-3xl font-medium flex-1 text-[#585B52] group-hover:text-[#1C1D18] transition-colors">Mais 12 Módulos Avançados</h3>
<i className="w-6 h-6 text-[#585B52] shrink-0" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FFFFFF] py-32 border-b border-[#DFDFDF]" id="professor">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[40%_60%] gap-20 items-center">
<div className="relative w-full max-w-md mx-auto lg:mx-0">
<div className="absolute inset-0 translate-x-6 translate-y-6 border border-[#DBE270] z-0"></div>
<img alt="Prof. Danilo Millen" className="relative z-10 w-full aspect-[3/4] object-cover grayscale border border-[#DFDFDF]" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-8 -right-8 bg-[#1C1D18] text-[#DBE270] rounded-full w-32 h-32 flex flex-col items-center justify-center font-['JetBrains_Mono'] text-sm z-20 shadow-2xl shadow-black/20">
<span className="text-xs uppercase tracking-widest text-[#F9F5EA]/60 mb-1">Bolsista</span>
<span className="text-2xl font-semibold leading-none">PQ-1D</span>
<span className="text-[10px] mt-1 text-[#F9F5EA]/40">CNPq</span>
</div>
</div>
<div className="flex flex-col justify-center">
<span className="font-['JetBrains_Mono'] text-sm text-[#585B52] uppercase tracking-widest mb-4 block">Autoridade Científica</span>
<h2 className="font-['Cormorant_Garamond'] text-5xl lg:text-6xl font-semibold tracking-tight text-[#1C1D18] mb-2">Prof. Dr. Danilo Millen</h2>
<p className="font-['JetBrains_Mono'] text-sm text-[#585B52] uppercase tracking-widest mb-10">Líder em Pesquisa de Ruminantes — UNESP</p>
<p className="text-xl text-[#585B52] leading-relaxed mb-12">
                    Com mais de 15 anos dedicados à pesquisa de fronteira em nutrição e metabolismo de ruminantes, o Prof. Danilo não apenas ensina a teoria, ele é um dos pesquisadores que ajudam a escrevê-la globalmente. Sua abordagem une o rigor analítico do laboratório com a aplicabilidade exigida pelo campo.
                </p>
<div className="grid sm:grid-cols-2 gap-8 pt-10 border-t border-[#DFDFDF]">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#F9F5EA] flex items-center justify-center text-[#DBE270] shrink-0 border border-[#DFDFDF]">
<i className="w-5 h-5 text-[#1C1D18]" data-lucide="microscope" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-semibold text-[#1C1D18] mb-1 text-base tracking-tight">Pesquisa Ativa</h4>
<p className="text-sm text-[#585B52]">Dezenas de artigos publicados em revistas científicas de alto impacto.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#F9F5EA] flex items-center justify-center text-[#DBE270] shrink-0 border border-[#DFDFDF]">
<i className="w-5 h-5 text-[#1C1D18]" data-lucide="graduation-cap" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-semibold text-[#1C1D18] mb-1 text-base tracking-tight">Formação Acadêmica</h4>
<p className="text-sm text-[#585B52]">Mestrado e Doutorado focados estritamente em fisiologia ruminal.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#F9F5EA] flex items-center justify-center text-[#DBE270] shrink-0 border border-[#DFDFDF]">
<i className="w-5 h-5 text-[#1C1D18]" data-lucide="globe" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-semibold text-[#1C1D18] mb-1 text-base tracking-tight">Reconhecimento Global</h4>
<p className="text-sm text-[#585B52]">Palestrante internacional e revisor dos principais journals da área.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#F9F5EA] flex items-center justify-center text-[#DBE270] shrink-0 border border-[#DFDFDF]">
<i className="w-5 h-5 text-[#1C1D18]" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-semibold text-[#1C1D18] mb-1 text-base tracking-tight">Mentoria</h4>
<p className="text-sm text-[#585B52]">Orientador de dezenas de mestres e doutores que hoje lideram o mercado.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F9F5EA] py-32 border-b border-[#DFDFDF]" id="investimento">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<span className="font-['JetBrains_Mono'] text-sm text-[#585B52] uppercase tracking-widest mb-4 block">Condição de Inscrição</span>
<h2 className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl font-semibold tracking-tight text-[#1C1D18]">O valor do conhecimento exato</h2>
</div>

<div className="bg-[#1C1D18] rounded-t-2xl p-8 lg:p-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#DBE270] to-transparent"></div>
<div className="relative z-10">
<h3 className="font-['Outfit'] text-2xl font-medium text-[#F9F5EA] tracking-tight mb-2">Fundamentos de Rumenologia</h3>
<p className="font-['JetBrains_Mono'] text-sm text-[#F9F5EA]/60 uppercase tracking-widest">Acesso Anual Completo</p>
</div>
<div className="relative z-10 text-right">
<span className="block text-sm text-[#F9F5EA]/60 mb-1">Investimento único de</span>
<div className="font-['Cormorant_Garamond'] text-5xl lg:text-6xl font-medium text-[#DBE270] leading-none">R$ 1.429</div>
<span className="block text-sm text-[#F9F5EA]/40 mt-2">ou até 12x no cartão</span>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-4 mt-4">
<div className="bg-[#FFFFFF] p-8 border border-[#DFDFDF] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1C1D18]/5 transition-all group">
<div className="flex justify-between items-start mb-6">
<i className="w-8 h-8 text-[#1C1D18]" data-lucide="play-circle" strokeWidth="1.5"></i>
<span className="px-2.5 py-1 bg-[#F9F5EA] border border-[#DFDFDF] rounded-md text-[10px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#585B52]">Incluso</span>
</div>
<h4 className="font-semibold text-xl text-[#1C1D18] tracking-tight mb-2 group-hover:text-[#DBE270] transition-colors">16 Módulos em Vídeo</h4>
<p className="text-sm text-[#585B52] leading-relaxed">Aulas teóricas gravadas em alta resolução com material visual exclusivo e diagramas fisiológicos detalhados.</p>
</div>
<div className="bg-[#FFFFFF] p-8 border border-[#DFDFDF] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1C1D18]/5 transition-all group">
<div className="flex justify-between items-start mb-6">
<i className="w-8 h-8 text-[#1C1D18]" data-lucide="file-text" strokeWidth="1.5"></i>
<span className="px-2.5 py-1 bg-[#F9F5EA] border border-[#DFDFDF] rounded-md text-[10px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#585B52]">Incluso</span>
</div>
<h4 className="font-semibold text-xl text-[#1C1D18] tracking-tight mb-2 group-hover:text-[#DBE270] transition-colors">Material Didático PDF</h4>
<p className="text-sm text-[#585B52] leading-relaxed">Apostilas extensas, resumos de vias metabólicas e referências bibliográficas de cada aula para aprofundamento.</p>
</div>
<div className="bg-[#FFFFFF] p-8 border border-[#DFDFDF] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1C1D18]/5 transition-all group">
<div className="flex justify-between items-start mb-6">
<i className="w-8 h-8 text-[#1C1D18]" data-lucide="message-square" strokeWidth="1.5"></i>
<span className="px-2.5 py-1 bg-[#F9F5EA] border border-[#DFDFDF] rounded-md text-[10px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#585B52]">Bônus</span>
</div>
<h4 className="font-semibold text-xl text-[#1C1D18] tracking-tight mb-2 group-hover:text-[#DBE270] transition-colors">Sessões de Q&amp;A</h4>
<p className="text-sm text-[#585B52] leading-relaxed">Encontros periódicos ao vivo com o Prof. Danilo para tirar dúvidas complexas e discutir aplicações práticas.</p>
</div>
<div className="bg-[#FFFFFF] p-8 border border-[#DFDFDF] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1C1D18]/5 transition-all group">
<div className="flex justify-between items-start mb-6">
<i className="w-8 h-8 text-[#1C1D18]" data-lucide="award" strokeWidth="1.5"></i>
<span className="px-2.5 py-1 bg-[#F9F5EA] border border-[#DFDFDF] rounded-md text-[10px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#585B52]">Oficial</span>
</div>
<h4 className="font-semibold text-xl text-[#1C1D18] tracking-tight mb-2 group-hover:text-[#DBE270] transition-colors">Certificado Acadêmico</h4>
<p className="text-sm text-[#585B52] leading-relaxed">Certificação de conclusão de 80 horas atestando seu domínio avançado em rumenologia aplicada.</p>
</div>
</div>

<div className="mt-4 bg-[#1C1D18] rounded-b-2xl p-10 lg:p-14 text-center">
<a className="inline-flex items-center justify-center w-full sm:w-auto bg-[#DBE270] text-[#1C1D18] px-10 py-5 rounded-full text-lg font-semibold hover:-translate-y-1 hover:shadow-xl hover:shadow-[#DBE270]/20 transition-all" href="#">
                    Finalizar Matrícula Agora
                </a>
<p className="mt-6 text-sm text-[#F9F5EA]/40 flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="shield-check" strokeWidth="1.5"></i>
                    Pagamento 100% seguro via plataforma criptografada.
                </p>
</div>
</div>
</section>

<section className="bg-[#FFFFFF] py-32 border-b border-[#DFDFDF]">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-0 md:divide-x md:divide-[#DFDFDF]">
<div className="md:pr-16 lg:pr-24">
<span className="font-['JetBrains_Mono'] text-sm text-[#585B52] uppercase tracking-widest mb-4 block">Alinhamento</span>
<h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold tracking-tight text-[#1C1D18] mb-10">Para quem <span className="text-[#DBE270] italic">É</span></h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#DBE270]/20 flex items-center justify-center shrink-0 mt-1">
<i className="w-4 h-4 text-[#1C1D18]" data-lucide="check" strokeWidth="2"></i>
</div>
<p className="text-[#585B52]"><strong className="font-medium text-[#1C1D18]">Zootecnistas e Veterinários</strong> que formulam dietas e desejam embasamento científico inquestionável para suas decisões.</p>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#DBE270]/20 flex items-center justify-center shrink-0 mt-1">
<i className="w-4 h-4 text-[#1C1D18]" data-lucide="check" strokeWidth="2"></i>
</div>
<p className="text-[#585B52]"><strong className="font-medium text-[#1C1D18]">Consultores de Fábrica</strong> que precisam entender o impacto de aditivos na cinética e microbiologia ruminal.</p>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#DBE270]/20 flex items-center justify-center shrink-0 mt-1">
<i className="w-4 h-4 text-[#1C1D18]" data-lucide="check" strokeWidth="2"></i>
</div>
<p className="text-[#585B52]"><strong className="font-medium text-[#1C1D18]">Pós-graduandos</strong> buscando uma base teórica sólida e estruturada que muitas vezes falta na grade convencional.</p>
</li>
</ul>
</div>
<div className="md:pl-16 lg:pl-24 opacity-60 hover:opacity-100 transition-opacity">
<span className="font-['JetBrains_Mono'] text-sm text-[#585B52] uppercase tracking-widest mb-4 block">Aviso</span>
<h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold tracking-tight text-[#1C1D18] mb-10">Para quem <span className="italic text-[#585B52]">NÃO É</span></h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#DFDFDF] flex items-center justify-center shrink-0 mt-1">
<i className="w-4 h-4 text-[#585B52]" data-lucide="x" strokeWidth="2"></i>
</div>
<p className="text-[#585B52]">Produtores rurais em busca de "receitas prontas" de ração sem interesse na biologia por trás.</p>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#DFDFDF] flex items-center justify-center shrink-0 mt-1">
<i className="w-4 h-4 text-[#585B52]" data-lucide="x" strokeWidth="2"></i>
</div>
<p className="text-[#585B52]">Profissionais que procuram um curso focado puramente em software de formulação comercial.</p>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#DFDFDF] flex items-center justify-center shrink-0 mt-1">
<i className="w-4 h-4 text-[#585B52]" data-lucide="x" strokeWidth="2"></i>
</div>
<p className="text-[#585B52]">Estudantes iniciantes que ainda não cursaram as disciplinas básicas de anatomia e fisiologia animal.</p>
</li>
</ul>
</div>
</div>
</section>

<section className="bg-[#F9F5EA] py-32 border-b border-[#DFDFDF]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold tracking-tight text-[#1C1D18]">O impacto da alta ciência</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-[#FFFFFF] border border-[#DFDFDF] p-10 flex flex-col">
<div className="font-serif text-[#DBE270] text-7xl leading-[0.5] mb-6">"</div>
<p className="font-['Cormorant_Garamond'] italic text-2xl text-[#1C1D18] mb-8 flex-1 leading-snug">
                        A clareza com que o Prof. Danilo explica a cascata de fermentação mudou minha forma de analisar laudos de digestibilidade a campo.
                    </p>
<div className="flex items-center gap-4 pt-6 border-t border-[#DFDFDF]">
<div className="w-10 h-10 rounded-full bg-[#1C1D18] text-[#DBE270] flex items-center justify-center font-['JetBrains_Mono'] text-sm">LM</div>
<div>
<p className="font-semibold text-[#1C1D18] text-sm tracking-tight">Lucas M.</p>
<p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-[#585B52]">Consultor Nutricional</p>
</div>
</div>
</div>

<div className="bg-[#FFFFFF] border border-[#DFDFDF] p-10 flex flex-col">
<div className="font-serif text-[#DBE270] text-7xl leading-[0.5] mb-6">"</div>
<p className="font-['Cormorant_Garamond'] italic text-2xl text-[#1C1D18] mb-8 flex-1 leading-snug">
                        Fazia anos que buscava um material com esse nível de profundidade sobre cinética ruminal que não estivesse apenas em inglês técnico.
                    </p>
<div className="flex items-center gap-4 pt-6 border-t border-[#DFDFDF]">
<div className="w-10 h-10 rounded-full bg-[#1C1D18] text-[#DBE270] flex items-center justify-center font-['JetBrains_Mono'] text-sm">AF</div>
<div>
<p className="font-semibold text-[#1C1D18] text-sm tracking-tight">Aline F.</p>
<p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-[#585B52]">Zootecnista / Pós-Doc</p>
</div>
</div>
</div>

<div className="bg-[#FFFFFF] border border-[#DFDFDF] p-10 flex flex-col">
<div className="font-serif text-[#DBE270] text-7xl leading-[0.5] mb-6">"</div>
<p className="font-['Cormorant_Garamond'] italic text-2xl text-[#1C1D18] mb-8 flex-1 leading-snug">
                        O investimento se pagou no primeiro mês quando ajustamos uma dieta evitando um quadro subclínico de acidose graças aos conceitos do módulo 4.
                    </p>
<div className="flex items-center gap-4 pt-6 border-t border-[#DFDFDF]">
<div className="w-10 h-10 rounded-full bg-[#1C1D18] text-[#DBE270] flex items-center justify-center font-['JetBrains_Mono'] text-sm">RC</div>
<div>
<p className="font-semibold text-[#1C1D18] text-sm tracking-tight">Roberto C.</p>
<p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-[#585B52]">Gerente de Confinamento</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FFFFFF] py-32 border-b border-[#DFDFDF]">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[40%_60%] gap-20">

<div className="flex flex-col items-start lg:pr-12 lg:border-r lg:border-[#DFDFDF]">
<div className="w-32 h-32 rounded-full border-2 border-[#DBE270] p-2 mb-8">
<div className="w-full h-full rounded-full border border-[#DBE270] flex flex-col items-center justify-center bg-[#F9F5EA]">
<span className="font-['Cormorant_Garamond'] text-4xl font-semibold text-[#1C1D18] leading-none">15</span>
<span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-[#585B52] mt-1">Dias</span>
</div>
</div>
<h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold tracking-tight text-[#1C1D18] mb-4">Garantia Científica Integral</h3>
<p className="text-[#585B52] leading-relaxed">
                    Você tem 15 dias de acesso total ao conteúdo. Se ao explorar as aulas você concluir que o nível técnico, a didática ou a aplicabilidade não atendem ao padrão de excelência esperado, devolvemos 100% do seu investimento. Sem burocracia.
                </p>
</div>

<div>
<span className="font-['JetBrains_Mono'] text-sm text-[#585B52] uppercase tracking-widest mb-6 block">Dúvidas Frequentes</span>
<div className="border-t border-[#DFDFDF]">
<div className="py-6 border-b border-[#DFDFDF] flex justify-between items-center cursor-pointer group">
<h4 className="font-medium text-[#1C1D18] text-xl group-hover:text-[#DBE270] transition-colors">Como funciona o acesso às aulas?</h4>
<i className="w-5 h-5 text-[#585B52]" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="py-6 border-b border-[#DFDFDF] flex justify-between items-center cursor-pointer group">
<h4 className="font-medium text-[#1C1D18] text-xl group-hover:text-[#DBE270] transition-colors">Qual a duração total do programa?</h4>
<i className="w-5 h-5 text-[#585B52]" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="py-6 border-b border-[#DFDFDF] group">
<div className="flex justify-between items-center cursor-pointer mb-4">
<h4 className="font-medium text-[#1C1D18] text-xl group-hover:text-[#DBE270] transition-colors">Posso emitir nota fiscal para minha empresa?</h4>
<i className="w-5 h-5 text-[#1C1D18]" data-lucide="minus" strokeWidth="1.5"></i>
</div>
<p className="text-[#585B52] leading-relaxed pr-8">
                            Sim. Durante o processo de checkout na plataforma, você poderá inserir os dados CNPJ da sua consultoria ou fazenda, e a nota fiscal será emitida automaticamente e enviada para o seu e-mail cadastrado.
                        </p>
</div>
<div className="py-6 border-b border-[#DFDFDF] flex justify-between items-center cursor-pointer group">
<h4 className="font-medium text-[#1C1D18] text-xl group-hover:text-[#DBE270] transition-colors">O certificado é reconhecido pelo MEC?</h4>
<i className="w-5 h-5 text-[#585B52]" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1C1D18] py-40 text-center relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-['Cormorant_Garamond'] text-[#F9F5EA] opacity-[0.03] select-none whitespace-nowrap z-0 tracking-tighter pointer-events-none">
            Excelência
        </div>
<div className="relative z-10 max-w-3xl mx-auto px-6">
<h2 className="font-['Cormorant_Garamond'] text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] text-[#F9F5EA] mb-12">
                Eleve sua prática ao nível da <span className="italic text-[#DBE270]">alta ciência</span>.
            </h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="w-full sm:w-auto bg-[#DBE270] text-[#1C1D18] px-10 py-4 rounded-full text-base font-semibold hover:-translate-y-1 hover:shadow-xl hover:shadow-[#DBE270]/10 transition-all" href="#investimento">
                    Assinar o Programa
                </a>
<a className="w-full sm:w-auto text-[#F9F5EA] px-10 py-4 rounded-full text-base font-medium border border-[#F9F5EA]/30 hover:bg-[#F9F5EA]/5 transition-all" href="#programa">
                    Revisar Ementa
                </a>
</div>
</div>
</section>

<footer className="bg-[#1C1D18] border-t border-[#F9F5EA]/10 py-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3 opacity-60">
<i className="w-4 h-4 text-[#F9F5EA]" data-lucide="test-tubes" strokeWidth="1.5"></i>
<span className="font-['Cormorant_Garamond'] text-xl font-medium text-[#F9F5EA]">Fundamentos</span>
</div>
<div className="flex gap-8 font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#F9F5EA]/40">
<a className="hover:text-[#F9F5EA] transition-colors" href="#">Termos de Uso</a>
<a className="hover:text-[#F9F5EA] transition-colors" href="#">Política de Privacidade</a>
<a className="hover:text-[#F9F5EA] transition-colors" href="#">Contato</a>
</div>
<div className="font-['JetBrains_Mono'] text-xs text-[#F9F5EA]/30">
                © 2024 Danilo Millen. Todos os direitos reservados.
            </div>
</div>
</footer>


    </>
  );
}
