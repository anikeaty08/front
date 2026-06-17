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
      

<nav className="fixed top-0 w-full z-50 border-b border-[#5e4b3e]/10 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 hover:opacity-80 transition-opacity group" href="#">

<img alt="Ritua Logo" className="md:h-9 w-auto h-8 object-contain brightness-0 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dbbb5279-4426-408d-8648-ee2df252bf60_320w.png"/>
<span className="font-serif italic text-2xl text-[#5e4b3e] pt-1">Offline</span>
</a>
<div className="hidden md:flex items-center gap-8 text-lg font-normal text-[#5e4b3e]/90">
<a className="hover:text-[#e07a72] transition-colors" href="#sobre">
            O Evento
          </a>
<a className="hover:text-[#e07a72] transition-colors" href="#instrutores">
            Instrutores
          </a>
<a className="hover:text-[#e07a72] transition-colors" href="#programacao">
            Programação
          </a>
<a className="hover:text-[#e07a72] transition-colors" href="#ingressos">
            Ingressos
          </a>
</div>
<a className="hidden md:inline-flex items-center justify-center transition-all duration-200 hover:bg-[#d66a62] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e07a72] focus:ring-offset-white text-base font-normal text-white bg-[#e07a72] rounded-full pt-2.5 pr-6 pb-2.5 pl-6" href="https://www.sympla.com.br/evento/ritua-offline-primeiro-evento-presencial-feito-para-mulheres/3308432" target="_blank">
          Garantir Vaga
        </a>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden md:pb-32 pt-32 pr-6 pb-80 pl-6 relative">

<div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#e07a72]/5 rounded-full blur-3xl"></div>
<div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-[#5e4b3e]/5 rounded-full blur-3xl"></div>
</div>
<img alt="" className="absolute bottom-0 right-0 w-full md:w-[45%] lg:w-[35%] h-auto object-contain object-bottom -z-10 opacity-80 pointer-events-none mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/997636de-8390-4de9-b29e-44a36247e247_3840w.png" style={{maskImage: 'linear-gradient(to left, black 30%, transparent 100%), linear-gradient(to top, transparent 0%, black 40%)'}}/>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex gap-2 glass-panel-dark md:text-base uppercase text-sm font-normal text-[#e07a72] tracking-wide rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 gap-x-2 gap-y-2 items-center">
<span className="w-2 h-2 rounded-full bg-[#e07a72]"></span>
          7 de Março • Pinheiros, SP
        </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-6xl font-normal tracking-tight font-serif mb-8 text-[#5e4b3e]">
          Bem-estar, Ritua,
          <br/>
<span className="italic text-[#e07a72]">agora offline.</span>
</h1>
<p className="text-xl md:text-2xl font-light leading-relaxed text-[#5e4b3e]/80 max-w-2xl mx-auto mb-12">
          O primeiro evento presencial da Ritua. Um dia inteiro para movimentar
          o corpo, conectar-se com a comunidade e celebrar o autocuidado.
        </p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-normal text-white transition-all duration-200 bg-[#e07a72] rounded-full hover:bg-[#d66a62] hover:scale-105 active:scale-95 shadow-lg shadow-[#e07a72]/20" href="https://www.sympla.com.br/evento/ritua-offline-primeiro-evento-presencial-feito-para-mulheres/3308432" target="_blank">
            Comprar Ingresso
            <iconify-icon className="ml-2 text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-normal text-[#5e4b3e] transition-all duration-200 border border-[#5e4b3e]/20 rounded-full hover:bg-[#5e4b3e]/5" href="#programacao">
            Ver programação
          </a>
</div>
</div>
</header>

<section className="pt-0 pr-6 pb-24 pl-6 relative" id="sobre">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 glass-panel-dark rounded-3xl p-10 flex flex-col justify-between min-h-[400px]">
<div className="">
<h2 className="text-4xl md:text-5xl font-serif font-normal mb-6 tracking-tight text-[#5e4b3e]">
                Saia energizada.
              </h2>
<p className="text-xl leading-relaxed text-[#5e4b3e]/70 max-w-lg font-light">
                Criamos um espaço exclusivo não apenas para treinar, mas para
                viver a experiência Ritua. Além das aulas, teremos áreas de
                networking, ativações de parceiros e um ambiente desenhado para
                você se desconectar do mundo e conectar com você.
              </p>
</div>
<div className="mt-12 flex flex-wrap gap-4">
<div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-[#5e4b3e]/10 shadow-sm">
<iconify-icon className="text-[#e07a72] text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-lg font-light text-[#5e4b3e]">
                  Networking &amp; Comunidade
                </span>
</div>
<div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-[#5e4b3e]/10 shadow-sm">
<iconify-icon className="text-[#e07a72] text-2xl" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="text-lg font-light text-[#5e4b3e]">Wellness Market</span>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col overflow-hidden group text-[#5e4b3e] bg-[#fdf6f0] border-[#5e4b3e]/5 border rounded-3xl pt-10 pr-10 pb-10 pl-10 relative justify-center">
<div className="z-10 relative">
<span className="uppercase block text-xs font-medium text-[#5e4b3e]/60 tracking-widest mb-2">
                Sua Host
              </span>
<h3 className="text-3xl font-serif font-normal mb-4 tracking-tight">
                Gabriela Morais
              </h3>
<p className="leading-relaxed text-lg font-light text-[#5e4b3e]/80 mb-6">
                Nossa sócia estará presente o dia inteiro para trocar ideias,
                conhecer cada aluna e vivenciar esse momento histórico da marca
                com você.
              </p>
<div className="flex -space-x-3 mt-4">
<div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-[#fdf6f0]"></div>
<div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-[#fdf6f0]"></div>
<div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-[#fdf6f0]"></div>
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e07a72] text-white text-xs font-medium border-2 border-[#fdf6f0]">
                  +20
                </div>
</div>
<p className="text-sm font-normal opacity-70 mt-3">
                Influencers confirmados
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-[#5e4b3e]/5 relative bg-white" id="instrutores">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="text-[#e07a72] font-normal tracking-wide uppercase text-sm">
            Line-up Oficial
          </span>
<h2 className="text-4xl md:text-5xl font-serif font-normal mt-3 mb-6 tracking-tight text-[#5e4b3e]">
            Seus instrutores prediletos
            <span className="block text-[#e07a72] text-3xl md:text-4xl mt-1 italic opacity-90">confirmados!</span>
</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="group relative flex flex-col md:flex-row lg:flex-col xl:flex-row overflow-hidden rounded-3xl bg-[#fdf6f0] border border-[#5e4b3e]/5 transition-all duration-300 hover:shadow-xl hover:shadow-[#e07a72]/5 hover:-translate-y-1">

<div className="w-full md:w-1/2 lg:w-full xl:w-1/2 relative overflow-hidden bg-gradient-to-br from-[#e07a72]/10 to-[#5e4b3e]/5">
<div className="aspect-[4/5] w-full h-full">
<img alt="Norton Mello" className="object-top transition-transform duration-700 group-hover:scale-105 saturate-[0.9] w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/390f647e-6bd0-41ac-a03d-4e89dae0c791_800w.png?w=800&amp;q=80"/>
</div>
</div>

<div className="w-full md:w-1/2 lg:w-full xl:w-1/2 p-10 flex flex-col justify-center relative">
<div className="mb-4">
<h3 className="text-3xl font-serif font-normal text-[#5e4b3e]">Norton Mello</h3>
<span className="text-[#e07a72] text-sm font-medium uppercase tracking-wider mt-1 block">Funcional</span>
</div>
<p className="text-lg leading-relaxed font-light text-[#5e4b3e]/80">
                 Personal trainer renomado com mais de 20 anos de experiência transformando vidas, Norton é uma referência em bem-estar que une técnica rigorosa e motivação para inspirar uma comunidade global de alunos como especialista em resultados reais, performance e longevidade.
               </p>
<div className="mt-8 flex items-center gap-3 opacity-60">
<iconify-icon className="text-2xl text-[#e07a72]" icon="solar:dumbbell-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-normal">Sessão da Manhã</span>
</div>
</div>
</div>

<div className="group relative flex flex-col md:flex-row lg:flex-col xl:flex-row overflow-hidden rounded-3xl bg-[#fdf6f0] border border-[#5e4b3e]/5 transition-all duration-300 hover:shadow-xl hover:shadow-[#e07a72]/5 hover:-translate-y-1">

<div className="w-full md:w-1/2 lg:w-full xl:w-1/2 relative overflow-hidden bg-gradient-to-br from-[#e07a72]/10 to-[#5e4b3e]/5">
<div className="aspect-[4/5] w-full h-full">
<img alt="Anita Carvalho" className="object-top transition-transform duration-700 group-hover:scale-105 saturate-[0.8] w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/10ab559e-f386-4538-9fd5-a78e02b680bd_800w.png"/>
</div>
</div>

<div className="w-full md:w-1/2 lg:w-full xl:w-1/2 p-10 flex flex-col justify-center relative">
<div className="mb-4">
<h3 className="text-3xl font-serif font-normal text-[#5e4b3e]">Anita Carvalho</h3>
<span className="text-[#e07a72] text-sm font-medium uppercase tracking-wider mt-1 block">Yoga Flow</span>
</div>
<p className="text-lg leading-relaxed font-light text-[#5e4b3e]/80">
                 Com mais de 20 anos de experiência, Anita é formada em Vinyasa e estuda Vedanta há anos e também foi sócia da Yoga Journal Brasil.
               </p>
<div className="mt-8 flex items-center gap-3 opacity-60">
<iconify-icon className="text-2xl text-[#e07a72]" icon="solar:sun-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-normal">Sessão da Tarde</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#faf9f6] pt-24 pr-6 pb-24 pl-6 border-y border-[#5e4b3e]/5" id="programacao">
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center mb-16">
<span className="text-[#e07a72] font-normal tracking-wide uppercase text-sm">
            Cronograma
          </span>
<h2 className="text-4xl md:text-5xl font-serif font-normal mt-3 mb-6 tracking-tight text-[#5e4b3e]">
            Escolha o seu ritual
          </h2>
<p className="text-xl text-[#5e4b3e]/70 max-w-2xl mx-auto font-light">
            Aulas de 45 minutos com slots de 1 hora. Chegue cedo para aproveitar
            o espaço e fique para o networking.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="space-y-6">
<div className="flex items-center gap-4 mb-8">
<div className="p-3 rounded-full bg-[#e07a72]/10 text-[#e07a72]">
<iconify-icon className="text-3xl" icon="solar:dumbbell-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<h3 className="text-2xl font-serif font-normal text-[#5e4b3e]">
                  Manhã: Funcional
                </h3>
<p className="text-lg text-[#5e4b3e]/60 font-light">
                  Com Norton Mello
                </p>
</div>
</div>

<div className="group flex items-start gap-6 p-6 rounded-2xl border border-[#5e4b3e]/10 bg-white hover:bg-white hover:border-[#e07a72]/30 hover:shadow-lg hover:shadow-[#e07a72]/5 transition-all duration-300">
<span className="text-xl font-normal text-[#e07a72] whitespace-nowrap pt-1">
                08:00
              </span>
<div className="">
<h4 className="text-xl font-normal mb-1 group-hover:text-[#e07a72] transition-colors text-[#5e4b3e]">
                  Aula 01
                </h4>
<p className="text-base text-[#5e4b3e]/60 font-light">
                  Treino funcional intenso para começar o dia.
                </p>
<div className="mt-3 flex items-center gap-2 text-sm opacity-50 font-light">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                  30 vagas
                </div>
</div>
</div>

<div className="group flex items-start gap-6 p-6 rounded-2xl border border-[#5e4b3e]/10 bg-white hover:bg-white hover:border-[#e07a72]/30 hover:shadow-lg hover:shadow-[#e07a72]/5 transition-all duration-300">
<span className="text-xl font-normal text-[#e07a72] whitespace-nowrap pt-1">
                09:00
              </span>
<div className="">
<h4 className="text-xl font-normal mb-1 group-hover:text-[#e07a72] transition-colors text-[#5e4b3e]">
                  Aula 02
                </h4>
<p className="text-base text-[#5e4b3e]/60 font-light">
                  Energia e movimento com técnica apurada.
                </p>
<div className="mt-3 flex items-center gap-2 text-sm opacity-50 font-light">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                  30 vagas
                </div>
</div>
</div>

<div className="group flex items-start gap-6 p-6 rounded-2xl border border-[#5e4b3e]/10 bg-white hover:bg-white hover:border-[#e07a72]/30 hover:shadow-lg hover:shadow-[#e07a72]/5 transition-all duration-300">
<span className="text-xl font-normal text-[#e07a72] whitespace-nowrap pt-1">
                10:00
              </span>
<div className="">
<h4 className="text-xl font-normal mb-1 group-hover:text-[#e07a72] transition-colors text-[#5e4b3e]">
                  Aula 03
                </h4>
<p className="text-base text-[#5e4b3e]/60 font-light">
                  Desafio e superação em grupo.
                </p>
<div className="mt-3 flex items-center gap-2 text-sm opacity-50 font-light">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                  30 vagas
                </div>
</div>
</div>

<div className="group flex items-start gap-6 p-6 rounded-2xl border border-[#5e4b3e]/10 bg-white hover:bg-white hover:border-[#e07a72]/30 hover:shadow-lg hover:shadow-[#e07a72]/5 transition-all duration-300">
<span className="text-xl font-normal text-[#e07a72] whitespace-nowrap pt-1">
                11:00
              </span>
<div className="">
<h4 className="text-xl font-normal mb-1 group-hover:text-[#e07a72] transition-colors text-[#5e4b3e]">
                  Aula 04
                </h4>
<p className="text-base text-[#5e4b3e]/60 font-light">
                  Última chamada da manhã.
                </p>
<div className="mt-3 flex items-center gap-2 text-sm opacity-50 font-light">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                  30 vagas
                </div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="flex items-center gap-4 mb-8">
<div className="p-3 rounded-full bg-[#e07a72]/10 text-[#e07a72]">
<iconify-icon className="text-3xl" icon="solar:sun-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<h3 className="text-2xl font-serif font-normal text-[#5e4b3e]">
                  Tarde: Yoga Flow
                </h3>
<p className="text-lg font-light text-[#5e4b3e]/60">
                  Anita Carvalho
                </p>
</div>
</div>

<div className="group flex items-start gap-6 p-6 rounded-2xl border border-[#5e4b3e]/10 bg-white hover:bg-white hover:border-[#e07a72]/30 hover:shadow-lg hover:shadow-[#e07a72]/5 transition-all duration-300">
<span className="text-xl font-normal text-[#e07a72] whitespace-nowrap pt-1">
                13:00
              </span>
<div className="">
<h4 className="text-xl font-normal mb-1 group-hover:text-[#e07a72] transition-colors text-[#5e4b3e]">
                  Prática 01
                </h4>
<p className="text-base text-[#5e4b3e]/60 font-light">
                  Reconexão e equilíbrio pós-almoço.
                </p>
<div className="mt-3 flex items-center gap-2 text-sm opacity-50 font-light">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                  30 vagas
                </div>
</div>
</div>

<div className="group flex items-start gap-6 p-6 rounded-2xl border border-[#5e4b3e]/10 bg-white hover:bg-white hover:border-[#e07a72]/30 hover:shadow-lg hover:shadow-[#e07a72]/5 transition-all duration-300">
<span className="text-xl font-normal text-[#e07a72] whitespace-nowrap pt-1">
                14:00
              </span>
<div className="">
<h4 className="text-xl font-normal mb-1 group-hover:text-[#e07a72] transition-colors text-[#5e4b3e]">
                  Prática 02
                </h4>
<p className="text-base text-[#5e4b3e]/60 font-light">
                  Fluidez e respiração consciente.
                </p>
<div className="mt-3 flex items-center gap-2 text-sm opacity-50 font-light">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                  30 vagas
                </div>
</div>
</div>

<div className="group flex items-start gap-6 p-6 rounded-2xl border border-[#5e4b3e]/10 bg-white hover:bg-white hover:border-[#e07a72]/30 hover:shadow-lg hover:shadow-[#e07a72]/5 transition-all duration-300">
<span className="text-xl font-normal text-[#e07a72] whitespace-nowrap pt-1">
                15:00
              </span>
<div className="">
<h4 className="text-xl font-normal mb-1 group-hover:text-[#e07a72] transition-colors text-[#5e4b3e]">
                  Prática 03
                </h4>
<p className="text-base text-[#5e4b3e]/60 font-light">
                  Força e flexibilidade em harmonia.
                </p>
<div className="mt-3 flex items-center gap-2 text-sm opacity-50 font-light">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                  30 vagas
                </div>
</div>
</div>

<div className="group flex items-start gap-6 p-6 rounded-2xl border border-[#5e4b3e]/10 bg-white hover:bg-white hover:border-[#e07a72]/30 hover:shadow-lg hover:shadow-[#e07a72]/5 transition-all duration-300">
<span className="text-xl font-normal text-[#e07a72] whitespace-nowrap pt-1">
                16:00
              </span>
<div className="">
<h4 className="group-hover:text-[#e07a72] transition-colors text-xl font-normal mb-1 text-[#5e4b3e]">
                  Prática 04
                </h4>
<p className="text-base text-[#5e4b3e]/60 font-light">
                  Encerre o seu dia com equilíbrio e harmonia.
                </p>
<div className="mt-3 flex items-center gap-2 text-sm opacity-50 font-light">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                  30 vagas
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pr-6 pb-24 pl-6 relative bg-white" id="ingressos">
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-serif font-normal mb-6 tracking-tight text-[#5e4b3e]">
            Garanta seu lugar
          </h2>
<p className="text-xl text-[#5e4b3e]/70 max-w-xl mr-auto ml-auto font-light">
            Vagas limitadas por turma. As alunas podem ficar no evento para
            networking antes ou depois do seu horário agendado.
          </p>
</div>

<div className="max-w-3xl mx-auto">
<div className="flex flex-col md:flex-row text-[#5e4b3e] bg-[#fdf6f0] rounded-3xl overflow-hidden relative shadow-xl shadow-black/5 border border-[#5e4b3e]/5">

<div className="p-8 md:p-12 w-full md:w-1/2 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#5e4b3e]/10">
<div className="mb-4">
<span className="inline-block py-1 px-3 rounded-full bg-[#e07a72]/10 text-[#e07a72] text-xs font-semibold uppercase tracking-widest mb-4">
                   Vagas Limitadas
                 </span>
<h3 className="text-3xl font-serif font-normal text-[#5e4b3e]">
                   Ingresso Ritua Offline
                 </h3>
<p className="text-base text-[#5e4b3e]/60 font-light mt-2">
                   Acesso completo à experiência presencial.
                 </p>
</div>
<div className="mt-4">
<div className="flex flex-col">
<span className="text-lg text-[#5e4b3e]/50 line-through font-light">De R$ 179</span>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-serif font-normal text-[#e07a72]">R$ 129</span>
</div>
<p className="text-sm font-medium text-[#e07a72] mt-2">
                     *Preço exclusivo para Assinantes Ritua
                     <br/>
<span className="text-[#5e4b3e]/60 font-light normal-case">(Desconto de R$ 50 aplicado)</span>
</p>
</div>
<div className="mt-4 pt-4 border-t border-[#5e4b3e]/5">
<p className="text-sm text-[#5e4b3e]/60">
                     Não assinante? <span className="font-medium text-[#5e4b3e]">R$ 179</span>
</p>
</div>
</div>
</div>

<div className="p-8 md:p-12 w-full md:w-1/2 flex flex-col justify-center bg-white/50 backdrop-blur-sm">
<ul className="space-y-5 mb-10">
<li className="flex items-start gap-3 text-lg font-light text-[#5e4b3e]">
<iconify-icon className="text-[#e07a72] text-xl shrink-0 mt-1" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
<span className="">1 Aula (Funcional ou Yoga)</span>
</li>
<li className="flex items-start gap-3 text-lg font-light text-[#5e4b3e]">
<iconify-icon className="text-[#e07a72] text-xl shrink-0 mt-1" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
<span>Acesso à área de wellness</span>
</li>
<li className="flex items-start gap-3 text-lg font-light text-[#5e4b3e]">
<iconify-icon className="text-[#e07a72] text-xl shrink-0 mt-1" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
<span>Kit exclusivo de boas-vindas</span>
</li>
<li className="flex items-start gap-3 text-lg font-light text-[#5e4b3e]">
<iconify-icon className="text-[#e07a72] text-xl shrink-0 mt-1" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
<span>Networking &amp; Comunidade</span>
</li>
</ul>
<a className="w-full inline-flex items-center justify-center px-6 py-4 text-lg font-normal text-white transition-all duration-200 bg-[#e07a72] rounded-full hover:bg-[#d66a62] shadow-lg shadow-[#e07a72]/20 hover:-translate-y-0.5" href="https://www.sympla.com.br/evento/ritua-offline-primeiro-evento-presencial-feito-para-mulheres/3308432" target="_blank">
                Comprar Ingresso
                <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-[#5e4b3e]/10 border-t pt-16 pr-6 pb-16 pl-6">
<div className="flex flex-col md:flex-row gap-8 max-w-7xl mr-auto ml-auto gap-x-8 gap-y-8 items-center justify-between">
<div className="text-center md:text-left">
<img alt="Ritua Logo" className="md:h-9 w-auto h-8 object-contain mb-4 brightness-0 opacity-80 mx-auto md:mx-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dbbb5279-4426-408d-8648-ee2df252bf60_320w.png"/>
<p className="text-lg font-light text-[#5e4b3e]/60">
            Seu bem-estar, do seu jeito.
          </p>
</div>
<div className="flex flex-col items-center md:items-end gap-2">
<div className="flex items-center gap-2 text-lg text-[#5e4b3e]/80 font-light">
<iconify-icon className="text-[#e07a72] text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
            Pinheiros, São Paulo - SP
          </div>
<div className="flex items-center gap-2 text-lg text-[#5e4b3e]/80 font-light">
<iconify-icon className="text-[#e07a72] text-xl" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
            07 de Março (Previsto)
          </div>
</div>
</div>
<div className="text-sm text-[#5e4b3e]/40 text-center max-w-7xl border-[#5e4b3e]/5 border-t mt-12 mr-auto ml-auto pt-8 font-light">
        © 2026 Ritua. Todos os direitos reservados. Feito com ❤️ para mulheres
        reais.
      </div>
</footer>

    </>
  );
}
