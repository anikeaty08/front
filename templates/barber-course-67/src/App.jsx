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
        
        const details = document.querySelectorAll("details");
        details.forEach((targetDetail) => {
            targetDetail.addEventListener("click", () => {
                details.forEach((detail) => {
                    if (detail !== targetDetail) {
                        detail.removeAttribute("open");
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-zinc-900">
<div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
<span className="font-['Montserrat',sans-serif] text-xl font-bold tracking-tight text-[#00E676] uppercase">Bruno Barbeiro</span>
<div className="hidden md:flex space-x-8 items-center">
<a className="text-zinc-300 hover:text-white font-medium transition-colors" href="#curso">O Curso</a>
<a className="text-zinc-300 hover:text-white font-medium transition-colors" href="#comprar">Comprar Agora</a>
<a className="text-[#00E676] border border-[#00E676] px-5 py-2 rounded-full font-medium hover:bg-[#00E676]/10 transition-colors uppercase text-sm tracking-wide" href="https://wa.me/SEUNUMERO" target="_blank">Fale no WhatsApp</a>
</div>
</div>
</nav>

<section className="pt-36 pb-24 px-6 border-b border-zinc-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 to-[#0A0A0A] pointer-events-none"></div>
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
<div className="space-y-8">
<p className="font-['Montserrat',sans-serif] text-zinc-400 font-semibold tracking-widest uppercase text-sm">
                    Método Exclusivo para Barbeiros
                </p>
<h1 className="font-['Montserrat',sans-serif] text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[1.1] text-white">
                    Platinado Sem Mancha, Sem Amarelar, Sem Dor e Com Uma Só Demão.
                </h1>
<p className="text-zinc-300 font-medium text-lg leading-relaxed uppercase tracking-wide">
                    Descubra o protocolo comprovado para barbeiros dominarem o Branco Neve Premium em 1 aplicação, eliminando manchas, amarelados e ardência.
                </p>
<ul className="space-y-5 text-zinc-400 font-medium">
<li className="flex items-start">
<span className="text-white font-bold mr-3 shrink-0">—</span>
<span>Tenha um método seguro e replicável para resultados perfeitos.</span>
</li>
<li className="flex items-start">
<span className="text-white font-bold mr-3 shrink-0">—</span>
<span>Elimine o medo de manchas, amarelados e ardência no cliente.</span>
</li>
<li className="flex items-start">
<span className="text-white font-bold mr-3 shrink-0">—</span>
<span>Aumente seu reconhecimento e faturamento com platinados de alto padrão.</span>
</li>
</ul>
<div className="pt-8">
<p className="font-['Montserrat',sans-serif] text-[#FFD700] text-xl font-bold uppercase tracking-tight mb-2">Apenas R$ 49,90</p>
<div className="space-y-1 mb-10">
<p className="text-sm text-zinc-500 font-medium uppercase tracking-widest">Acesso: Imediato após a compra</p>
<p className="text-sm text-zinc-500 font-medium uppercase tracking-widest">Validade: Acesso por 1 ano</p>
<p className="text-sm text-zinc-500 font-medium uppercase tracking-widest">Garantia: 7 dias de satisfação</p>
</div>
<a className="inline-flex items-center justify-center bg-[#00E676] text-black font-['Montserrat',sans-serif] font-bold tracking-tight uppercase px-8 py-5 rounded-full hover:scale-105 transition-transform w-full sm:w-auto text-lg shadow-[0_0_30px_rgba(0,230,118,0.15)]" href="#comprar">
                        QUERO APRENDER O PLATINADO PREMIUM AGORA
                    </a>
</div>
</div>
<div className="relative w-full h-full min-h-[400px]">
<div className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
<i className="w-16 h-16 text-zinc-700" data-lucide="image" strokeWidth="1.5"></i>
<div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#111111] border-b border-zinc-900">
<div className="max-w-6xl mx-auto">
<h2 className="font-['Montserrat',sans-serif] text-3xl md:text-4xl font-bold tracking-tight uppercase text-center text-white mb-20 leading-tight">
                O que faz o platinado ficar bonito NÃO é “pó mais forte”.<br/>
                O que faz dar certo é você controlar 3 coisas:
            </h2>
<div className="grid md:grid-cols-2 gap-16 items-start">
<div className="space-y-12 text-zinc-300 font-medium">
<div>
<p className="text-white font-['Montserrat',sans-serif] font-bold text-xl tracking-tight mb-2 uppercase flex items-center">
<span className="text-[#FFD700] mr-3 font-bold text-2xl">1.</span> Divisão em seções
                        </p>
<p className="text-zinc-400 pl-8">(pra aplicar igual em toda a cabeça e não manchar)</p>
</div>
<div>
<p className="text-white font-['Montserrat',sans-serif] font-bold text-xl tracking-tight mb-2 uppercase flex items-center">
<span className="text-[#FFD700] mr-3 font-bold text-2xl">2.</span> Quantidade certa de produto
                        </p>
<p className="text-zinc-400 pl-8">(pra não faltar produto em uma parte e sobrar em outra)</p>
</div>
<div>
<p className="text-white font-['Montserrat',sans-serif] font-bold text-xl tracking-tight mb-2 uppercase flex items-center">
<span className="text-[#FFD700] mr-3 font-bold text-2xl">3.</span> Tempo com checkpoints
                        </p>
<p className="text-zinc-400 pl-8">(pra não tirar cedo demais e nem passar do ponto e danificar)</p>
</div>
<div className="pt-8 border-t border-zinc-800">
<p className="text-white font-semibold text-lg leading-relaxed">
                            Quando você controla isso, o resultado fica mais igual e você tem menos susto.
                        </p>
</div>
</div>
<div className="w-full aspect-[4/5] bg-zinc-900 border border-zinc-800 rounded-3xl flex items-center justify-center relative overflow-hidden">
<i className="w-20 h-20 text-zinc-700" data-lucide="camera" strokeWidth="1.5"></i>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0A0A0A] border-b border-zinc-900" id="curso">
<div className="max-w-6xl mx-auto">
<h2 className="font-['Montserrat',sans-serif] text-3xl md:text-4xl font-bold tracking-tight uppercase text-center text-white mb-4">
                O que você vai aprender?
            </h2>
<p className="text-[#FFD700] font-['Montserrat',sans-serif] font-semibold tracking-tight uppercase text-center mb-16 text-sm">
                Curso curto, rápido e prático, direto ao ponto:
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">

<div className="text-center group">
<div className="aspect-video bg-zinc-900 border border-zinc-800 rounded-2xl mb-6 flex items-center justify-center overflow-hidden transition-colors group-hover:border-zinc-700">
<i className="w-10 h-10 text-zinc-700" data-lucide="image" strokeWidth="1.5"></i>
</div>
<p className="font-['Montserrat',sans-serif] text-[#FFD700] font-bold text-xl mb-2">1º</p>
<h3 className="font-['Montserrat',sans-serif] text-xl font-bold tracking-tight uppercase text-white mb-3 leading-snug">Quais produtos<br/>utilizar</h3>
</div>

<div className="text-center group">
<div className="aspect-video bg-zinc-900 border border-zinc-800 rounded-2xl mb-6 flex items-center justify-center overflow-hidden transition-colors group-hover:border-zinc-700">
<i className="w-10 h-10 text-zinc-700" data-lucide="image" strokeWidth="1.5"></i>
</div>
<p className="font-['Montserrat',sans-serif] text-[#FFD700] font-bold text-xl mb-2">2º</p>
<h3 className="font-['Montserrat',sans-serif] text-xl font-bold tracking-tight uppercase text-white mb-3 leading-snug">Quais perguntas fazer</h3>
<p className="text-zinc-400 font-medium text-sm leading-relaxed">para o cliente antes do processo</p>
</div>

<div className="text-center group">
<div className="aspect-video bg-zinc-900 border border-zinc-800 rounded-2xl mb-6 flex items-center justify-center overflow-hidden transition-colors group-hover:border-zinc-700">
<i className="w-10 h-10 text-zinc-700" data-lucide="image" strokeWidth="1.5"></i>
</div>
<p className="font-['Montserrat',sans-serif] text-[#FFD700] font-bold text-xl mb-2">3º</p>
<h3 className="font-['Montserrat',sans-serif] text-xl font-bold tracking-tight uppercase text-white mb-3 leading-snug">Preparação do couro</h3>
<p className="text-zinc-400 font-medium text-sm leading-relaxed">(aplicação do óleo protetor)</p>
</div>

<div className="text-center group">
<div className="aspect-video bg-zinc-900 border border-zinc-800 rounded-2xl mb-6 flex items-center justify-center overflow-hidden transition-colors group-hover:border-zinc-700">
<i className="w-10 h-10 text-zinc-700" data-lucide="image" strokeWidth="1.5"></i>
</div>
<p className="font-['Montserrat',sans-serif] text-[#FFD700] font-bold text-xl mb-2">4º</p>
<h3 className="font-['Montserrat',sans-serif] text-xl font-bold tracking-tight uppercase text-white mb-3 leading-snug">Pó descolorante</h3>
<p className="text-zinc-400 font-medium text-sm leading-relaxed">Preparação + aplicação</p>
</div>

<div className="text-center group">
<div className="aspect-video bg-zinc-900 border border-zinc-800 rounded-2xl mb-6 flex items-center justify-center overflow-hidden transition-colors group-hover:border-zinc-700">
<i className="w-10 h-10 text-zinc-700" data-lucide="image" strokeWidth="1.5"></i>
</div>
<p className="font-['Montserrat',sans-serif] text-[#FFD700] font-bold text-xl mb-2">5º</p>
<h3 className="font-['Montserrat',sans-serif] text-xl font-bold tracking-tight uppercase text-white mb-3 leading-snug">Matização + medidas</h3>
<p className="text-zinc-400 font-medium text-sm leading-relaxed">e aplicação da coloração (Branco Neve)</p>
</div>

<div className="text-center group">
<div className="aspect-video bg-zinc-900 border border-zinc-800 rounded-2xl mb-6 flex items-center justify-center overflow-hidden transition-colors group-hover:border-zinc-700">
<i className="w-10 h-10 text-zinc-700" data-lucide="image" strokeWidth="1.5"></i>
</div>
<p className="font-['Montserrat',sans-serif] text-[#FFD700] font-bold text-xl mb-2">6º</p>
<h3 className="font-['Montserrat',sans-serif] text-xl font-bold tracking-tight uppercase text-white mb-3 leading-snug">Resultado final</h3>
<p className="text-zinc-400 font-medium text-sm leading-relaxed">(acabamento e leitura final)</p>
</div>
</div>

<div className="mt-24 text-center max-w-4xl mx-auto border-t border-zinc-900 pt-16">
<p className="font-['Montserrat',sans-serif] text-white text-xl md:text-2xl font-bold tracking-tight uppercase mb-8 leading-tight">
                    Aprenda e aplique para faturar com platinado o ano inteiro!
                </p>
<p className="font-['Montserrat',sans-serif] text-[#FFD700] text-xl font-bold uppercase tracking-tight mb-2">Apenas R$ 49,90</p>
<div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-zinc-500 font-medium text-xs uppercase tracking-widest mb-10">
<span>Acesso imediato</span>
<span className="hidden md:inline">•</span>
<span>Acesso por 1 ano</span>
<span className="hidden md:inline">•</span>
<span>7 dias de garantia</span>
</div>
<a className="inline-flex items-center justify-center bg-[#00E676] text-black font-['Montserrat',sans-serif] font-bold tracking-tight uppercase px-8 py-5 rounded-full hover:scale-105 transition-transform w-full sm:w-auto text-lg shadow-[0_0_30px_rgba(0,230,118,0.15)]" href="#comprar">
                    QUERO APRENDER O PLATINADO PREMIUM AGORA
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#111111] border-b border-zinc-900">
<div className="max-w-4xl mx-auto">
<h2 className="font-['Montserrat',sans-serif] text-3xl md:text-4xl font-bold tracking-tight uppercase text-center text-white mb-16">
                Para quem é esse método?
            </h2>
<div className="bg-white rounded-[2rem] p-10 md:p-16 shadow-2xl">
<ul className="space-y-8 text-black font-medium text-lg md:text-xl text-center md:text-left">
<li className="flex flex-col md:flex-row items-center md:items-start">
<span className="text-black font-bold mb-2 md:mb-0 md:mr-4 shrink-0">—</span>
<span>Já atende clientes, mas no platinado ainda fica com medo de dar ruim</span>
</li>
<li className="flex flex-col md:flex-row items-center md:items-start">
<span className="text-black font-bold mb-2 md:mb-0 md:mr-4 shrink-0">—</span>
<span>Já teve mancha e ficou com vergonha (raiz quente, laranja, falhas)</span>
</li>
<li className="flex flex-col md:flex-row items-center md:items-start">
<span className="text-black font-bold mb-2 md:mb-0 md:mr-4 shrink-0">—</span>
<span>Já viu o branco amarelar e parecer “serviço incompleto”</span>
</li>
<li className="flex flex-col md:flex-row items-center md:items-start">
<span className="text-black font-bold mb-2 md:mb-0 md:mr-4 shrink-0">—</span>
<span>Quer fazer um platinado mais premium pra cobrar mais e ser reconhecido</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#F5F5F5] border-b border-zinc-200">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="w-full aspect-[4/5] bg-zinc-300 rounded-3xl flex items-center justify-center overflow-hidden shadow-xl border border-zinc-200">
<i className="w-16 h-16 text-zinc-400" data-lucide="image" strokeWidth="1.5"></i>
</div>
</div>
<div className="order-1 md:order-2">
<div className="flex items-center mb-10">
<div className="w-1.5 h-12 bg-black mr-6"></div>
<h2 className="font-['Montserrat',sans-serif] text-3xl md:text-4xl font-bold tracking-tight uppercase text-black">
                        Quem vai te guiar
                    </h2>
</div>
<div className="space-y-6 text-zinc-800 font-medium leading-relaxed">
<p>Eu sou o <strong className="text-black font-bold">Bruno Costa Silva</strong>, barbeiro e especialista em Platinado Branco Neve. E eu vou ser bem direto: por muito tempo, platinado foi o tipo de serviço que mais me deixava em alerta. Não porque eu não soubesse trabalhar, mas porque no platinado, qualquer detalhe vira problema.</p>
<p>Você faz tudo “certo”, e mesmo assim pode acontecer: uma parte abre mais, outra abre menos… fica laranja aqui, fica amarelo ali… a raiz esquenta… e quando o cliente sente ardor, aí o clima muda na hora. E o pior: quando dá ruim, o retrabalho come seu tempo, sua energia e sua margem.</p>
<p>Foi daí que eu parei de procurar atalho e comecei a montar um protocolo de verdade. Um método que não depende de marca X ou “segredinho”, mas de controle do processo. Porque no fim, o resultado vem do domínio de coisas simples que quase ninguém padroniza:</p>
<ul className="space-y-4 py-4 pl-4 md:pl-6 border-l-2 border-zinc-300">
<li><strong className="text-black font-bold">Diagnóstico</strong> (pra decidir o caminho certo e quando é melhor não fazer)</li>
<li><strong className="text-black font-bold">Seções</strong> (pra aplicar com uniformidade e reduzir mancha)</li>
<li><strong className="text-black font-bold">Saturação</strong> (quantidade e cobertura real de produto no fio)</li>
<li><strong className="text-black font-bold">Timing com checkpoints</strong> (pra não tirar cedo e nem passar do ponto)</li>
<li><strong className="text-black font-bold">Neutralização/matização</strong> com leitura do fundo (pra branco limpo, sem amarelo e sem cinza sujo)</li>
</ul>
<p className="font-bold text-black pt-4">O Método Platinado Premium – 1 Mão, Zero Ardência nasceu pra isso: transformar platinado em processo, não em aposta. Meu objetivo é que você tenha um passo a passo claro pra entregar um resultado premium com mais segurança, menos retrabalho e uma experiência melhor pro seu cliente.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-[#F5F5F5]">
<div className="max-w-6xl mx-auto">
<h2 className="font-['Montserrat',sans-serif] text-2xl md:text-3xl font-bold tracking-tight uppercase text-center text-black mb-2">
                Método que funciona
            </h2>
<p className="text-center text-zinc-500 font-semibold mb-12 uppercase tracking-widest text-sm">(fotos e vídeos)</p>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
<div className="aspect-[3/4] bg-zinc-300 rounded-2xl flex items-center justify-center shadow-lg border border-zinc-200">
<i className="w-8 h-8 text-zinc-400" data-lucide="image" strokeWidth="1.5"></i>
</div>
<div className="aspect-[3/4] bg-zinc-300 rounded-2xl flex items-center justify-center shadow-lg border border-zinc-200">
<i className="w-8 h-8 text-zinc-400" data-lucide="image" strokeWidth="1.5"></i>
</div>
<div className="aspect-[3/4] bg-zinc-300 rounded-2xl flex items-center justify-center shadow-lg border border-zinc-200">
<i className="w-8 h-8 text-zinc-400" data-lucide="video" strokeWidth="1.5"></i>
</div>
<div className="aspect-[3/4] bg-zinc-300 rounded-2xl flex items-center justify-center shadow-lg border border-zinc-200">
<i className="w-8 h-8 text-zinc-400" data-lucide="image" strokeWidth="1.5"></i>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0A0A0A] border-y border-zinc-900">
<div className="max-w-5xl mx-auto">
<h2 className="font-['Montserrat',sans-serif] text-3xl md:text-4xl font-bold tracking-tight uppercase text-center text-white mb-16">
                Fica tranquilo, você tem 7 dias de garantia!
            </h2>
<div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
<div className="relative shrink-0 w-48 h-48 rounded-full border-[6px] border-[#FFD700] flex flex-col items-center justify-center bg-[#111111] overflow-hidden shadow-[0_0_40px_rgba(255,215,0,0.1)]">
<i className="absolute inset-0 m-auto w-32 h-32 text-[#FFD700] opacity-10" data-lucide="shield-check" strokeWidth="1"></i>
<p className="font-['Montserrat',sans-serif] text-[#FFD700] font-bold text-4xl uppercase tracking-tight mt-2 relative z-10">7 DIAS</p>
<p className="text-white text-xs font-bold uppercase tracking-widest mt-1 relative z-10">Garantia</p>
<div className="absolute bottom-0 w-full bg-[#FFD700] py-1.5 text-center z-10">
<span className="text-black font-bold text-[10px] uppercase tracking-widest">- 100% -</span>
</div>
</div>
<div className="max-w-xl text-zinc-400 font-medium space-y-6 text-center md:text-left leading-relaxed">
<p className="text-xl text-white font-semibold">Acreditamos tanto na qualidade do curso que damos total liberdade para você decidir.</p>
<p>Após a confirmação do pagamento, você terá 7 dias corridos para acessar todo o conteúdo e experimentar sem compromisso. Se não ficar satisfeito, é só solicitar o reembolso completo de forma prática, direto no sistema, sem perguntas e sem complicações. Simples assim!</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#111111] border-b border-zinc-900">
<div className="max-w-3xl mx-auto">
<h2 className="font-['Montserrat',sans-serif] text-3xl font-bold tracking-tight uppercase text-center text-white mb-16">
                Perguntas Frequentes
            </h2>
<div className="space-y-4">
<details className="bg-[#1A1A1A] border border-zinc-800 rounded-2xl group overflow-hidden">
<summary className="font-['Montserrat',sans-serif] font-semibold text-white p-6 cursor-pointer flex justify-between items-center list-none outline-none">
                        Quais são as formas de pagamento?
                        <i className="w-5 h-5 text-[#00E676] transition-transform group-open:rotate-180 shrink-0 ml-4" data-lucide="chevron-down" strokeWidth="2"></i>
</summary>
<div className="px-6 pb-6 text-zinc-400 font-medium leading-relaxed">
                        Você poderá efetuar a compra via PIX ou cartão de crédito.
                    </div>
</details>
<details className="bg-[#1A1A1A] border border-zinc-800 rounded-2xl group overflow-hidden">
<summary className="font-['Montserrat',sans-serif] font-semibold text-white p-6 cursor-pointer flex justify-between items-center list-none outline-none">
                        Por quanto tempo terei acesso ao curso?
                        <i className="w-5 h-5 text-[#00E676] transition-transform group-open:rotate-180 shrink-0 ml-4" data-lucide="chevron-down" strokeWidth="2"></i>
</summary>
<div className="px-6 pb-6 text-zinc-400 font-medium leading-relaxed">
                        Você terá 1 ano de acesso ao curso, durante esse período poderá assistir as aulas quantas vezes desejar.
                    </div>
</details>
<details className="bg-[#1A1A1A] border border-zinc-800 rounded-2xl group overflow-hidden">
<summary className="font-['Montserrat',sans-serif] font-semibold text-white p-6 cursor-pointer flex justify-between items-center list-none outline-none">
                        Preciso ter experiência com descoloração?
                        <i className="w-5 h-5 text-[#00E676] transition-transform group-open:rotate-180 shrink-0 ml-4" data-lucide="chevron-down" strokeWidth="2"></i>
</summary>
<div className="px-6 pb-6 text-zinc-400 font-medium leading-relaxed">
                        O curso é ideal para barbeiros que já têm noção básica de descoloração ou já tentaram platinado e querem um passo a passo seguro. Mesmo assim, o método começa pelo diagnóstico e preparação, para você ter clareza antes de executar.
                    </div>
</details>
<details className="bg-[#1A1A1A] border border-zinc-800 rounded-2xl group overflow-hidden">
<summary className="font-['Montserrat',sans-serif] font-semibold text-white p-6 cursor-pointer flex justify-between items-center list-none outline-none">
                        O curso mostra o passo a passo na prática?
                        <i className="w-5 h-5 text-[#00E676] transition-transform group-open:rotate-180 shrink-0 ml-4" data-lucide="chevron-down" strokeWidth="2"></i>
</summary>
<div className="px-6 pb-6 text-zinc-400 font-medium leading-relaxed">
                        Sim. O foco é execução real: diagnóstico, divisão por secções, saturação, timing, neutralização/matização e o que fazer quando algo não abre uniforme.
                    </div>
</details>
<details className="bg-[#1A1A1A] border border-zinc-800 rounded-2xl group overflow-hidden">
<summary className="font-['Montserrat',sans-serif] font-semibold text-white p-6 cursor-pointer flex justify-between items-center list-none outline-none">
                        Vou precisar comprar produtos ou marcas específicas?
                        <i className="w-5 h-5 text-[#00E676] transition-transform group-open:rotate-180 shrink-0 ml-4" data-lucide="chevron-down" strokeWidth="2"></i>
</summary>
<div className="px-6 pb-6 text-zinc-400 font-medium leading-relaxed">
                        Não. O curso ensina a lógica do método e traz orientações para você trabalhar com equivalentes, de acordo com o que você tem acesso na sua região.
                    </div>
</details>
<details className="bg-[#1A1A1A] border border-zinc-800 rounded-2xl group overflow-hidden">
<summary className="font-['Montserrat',sans-serif] font-semibold text-white p-6 cursor-pointer flex justify-between items-center list-none outline-none">
                        O curso ensina correção de manchas e erros?
                        <i className="w-5 h-5 text-[#00E676] transition-transform group-open:rotate-180 shrink-0 ml-4" data-lucide="chevron-down" strokeWidth="2"></i>
</summary>
<div className="px-6 pb-6 text-zinc-400 font-medium leading-relaxed">
                        Sim. Você vai aprender como corrigir os problemas mais comuns (manchas, raiz quente, amarelo persistente) com o máximo de segurança possível para o fio.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0A0A0A] text-center relative border-b border-zinc-900" id="comprar">
<div className="max-w-4xl mx-auto relative z-10">
<div className="w-20 h-1 bg-[#FFD700] mx-auto mb-12"></div>
<h2 className="font-['Montserrat',sans-serif] text-2xl md:text-3xl font-bold tracking-tight uppercase text-white mb-6 leading-relaxed">
                Agora é com você: tá na hora de parar de “apostar” no platinado e começar a entregar um Branco Neve premium, com mais controle, menos retrabalho e uma experiência muito melhor pro cliente.
            </h2>
<p className="font-['Montserrat',sans-serif] text-[#FFD700] text-2xl font-bold uppercase tracking-tight mb-4 mt-16">Apenas R$ 49,90</p>
<div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 text-zinc-500 font-semibold text-xs uppercase tracking-widest mb-12">
<span>Acesso imediato</span>
<span className="hidden md:inline">•</span>
<span>Acesso por 1 ano</span>
<span className="hidden md:inline">•</span>
<span>7 dias de garantia</span>
</div>
<a className="inline-flex items-center justify-center bg-[#00E676] text-black font-['Montserrat',sans-serif] font-bold tracking-tight uppercase px-8 py-5 rounded-full hover:scale-105 transition-transform w-full sm:w-auto text-lg shadow-[0_0_40px_rgba(0,230,118,0.2)]" href="#comprar">
                QUERO APRENDER O PLATINADO PREMIUM AGORA
            </a>
</div>
</section>

<section className="py-20 px-6 bg-[#111111] text-center">
<div className="max-w-4xl mx-auto">
<h2 className="font-['Montserrat',sans-serif] text-sm font-bold uppercase tracking-widest text-zinc-500 mb-10">
                Ficou com alguma dúvida?
            </h2>
<a className="inline-flex items-center justify-center border border-[#00A859] text-[#00A859] font-['Montserrat',sans-serif] font-bold tracking-tight uppercase px-8 py-4 rounded-full hover:bg-[#00A859] hover:text-white transition-colors w-full sm:w-auto text-sm" href="https://wa.me/SEUNUMERO?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20curso%20de%20Platinado%20Branco%20Neve." target="_blank">
                Manda mensagem no meu WhatsApp e eu te esclareço tudo!
            </a>
</div>
</section>

<footer className="bg-black py-12 px-6 border-t border-zinc-900">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-zinc-500 font-medium text-xs text-center md:text-left">
<div className="space-y-3 lg:col-span-2">
<p className="font-['Montserrat',sans-serif] text-white text-sm font-bold tracking-widest uppercase mb-4">
                    Bruno Barbeiro
                </p>
<p>[Endereço PENDENTE - Complementar briefing]</p>
<p>[CNPJ PENDENTE - Complementar briefing]</p>
<p className="pt-2">
                    Email: <a className="hover:text-white transition-colors" href="mailto:contato@brunobarbeiro.com">contato@brunobarbeiro.com</a>
</p>
<p>
                    Telefone: (XX) XXXX-XXXX
                </p>
</div>
<div className="space-y-3">
<p className="font-['Montserrat',sans-serif] text-white text-sm font-bold tracking-widest uppercase mb-4">
                    Links Úteis
                </p>
<p>
<a className="hover:text-white transition-colors" href="#">Política de Privacidade</a>
</p>
<p>
<a className="hover:text-white transition-colors" href="#">Termos de Uso</a>
</p>
</div>
<div className="flex items-end md:justify-end justify-center pt-8 md:pt-0 border-t border-zinc-900 md:border-none">
<p className="leading-loose">
                    © 2026 Bruno Barbeiro.<br/>Todos os direitos reservados.
                </p>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50 transition-transform hover:scale-110 group" href="https://wa.me/SEUNUMERO?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20curso%20de%20Platinado%20Branco%20Neve." rel="noopener noreferrer" target="_blank" title="Fale no WhatsApp">
<span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
<i className="text-white w-7 h-7 relative z-10" data-lucide="message-circle" strokeWidth="2"></i>
</a>



    </>
  );
}
