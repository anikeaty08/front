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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 lg:h-20">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2">
<div className="bg-white text-black px-2 py-1 text-xs font-semibold tracking-widest">
                ESPM
              </div>
<div className="border border-white/30 px-2 py-1 text-xs font-medium tracking-widest">
                LIDE
              </div>
</div>
<span className="hidden sm:block text-xs text-neutral-500 tracking-wider uppercase">
              Corporate Academy
            </span>
</div>
<nav className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 text-sm font-medium bg-white/10 rounded-full" href="#">
              Strategic Foresight
            </a>
<a className="px-4 py-2 text-sm text-neutral-400 hover:text-white transition-colors" href="#">
              Inovação &amp; IA
            </a>
<a className="px-4 py-2 text-sm text-neutral-400 hover:text-white transition-colors" href="#">
              Sucessão
            </a>
</nav>
<button className="md:hidden p-2">
<i className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>

<main className="pt-20 lg:pt-24">
<section className="min-h-screen flex items-center">
<div className="w-full max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4 sm:px-6 lg:px-8 lg:pt-5">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

<div className="space-y-8">

<div className="mb-6">
<img alt="ESPM LIDE Corporate Academy" className="lg:h-24 opacity-90 w-auto h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/241eff0a-21d0-45a6-81c5-469c82f15db6_1600w.png"/>
</div>
<div className="inline-flex border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center" style={{backgroundColor: 'rgba(25, 72, 225, 0.1)', borderColor: 'rgba(255, 255, 255, 0.9)'}}>
<span className="uppercase text-xs font-medium text-neutral-300 tracking-wider">
                  Inscrições Abertas · Turma 2026
                </span>
</div>
<div className="space-y-4">
<h1 className="font-semibold tracking-tight leading-[1.1] text-3xl sm:text-4xl lg:text-5xl">
                  Quem transforma
                  <br/>
                  o futuro?
                </h1>
<p className="font-semibold tracking-tight leading-[1.1] text-3xl sm:text-4xl lg:text-5xl">
<span className="text-neutral-500" style={{}}>
                    Não os que esperam.
                  </span>
<br/>
<span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(to right, #ffffff, #a3a3a3)'}}>
                    Os que decidem.
                  </span>
</p>
</div>
<p className="text-base lg:text-lg text-neutral-400 max-w-lg leading-relaxed">
                O primeiro programa executivo do Brasil que une a profundidade
                acadêmica da
                <span className="text-white font-medium">ESPM</span>
                ao acesso direto aos maiores líderes empresariais do país
                através do
                <span className="text-white font-medium">LIDE</span>
                .
              </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="group px-8 py-4 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2" onmouseout="this.style.backgroundColor='#1948E1'" onmouseover="this.style.backgroundColor='#1439b8'" style={{backgroundColor: 'rgb(25, 72, 225)'}}>
                  Tenho interesse
                  <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<button className="hover:bg-white/5 transition-all font-medium text-white bg-[#A80532] border rounded-lg px-8 py-4" style={{borderColor: 'rgba(168, 5, 50, 0.4)'}}>
                  Inscrever minha equipe
                </button>
</div>

<div className="pt-8 border-t border-white/10">
<div className="flex flex-col sm:flex-row sm:items-end gap-6">
<div className="">
<p className="text-sm text-neutral-500 mb-2">
                      Investimento Individual
                    </p>
<p className="text-4xl lg:text-5xl font-semibold tracking-tight">
                      R$48.000
                    </p>
</div>
<div className="flex gap-4">
<div className="rounded-lg pt-3 pr-4 pb-3 pl-4" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
<p className="text-xs mb-1 text-neutral-400">
                        Equipes: 2+ Executivos
                      </p>
<p className="text-sm font-medium">
<span className="text-neutral-300">12% OFF</span>
                        · R$42.240/cada
                      </p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:p-8 bg-neutral-900/50 border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="mb-8">
<h2 className="text-2xl font-semibold tracking-tight mb-1">
                  Strategic Foresight
                </h2>
<p className="text-sm text-neutral-500">
                  Market demand vs. Capability
                </p>
</div>

<div className="pl-6 relative">

<div className="absolute left-0 top-2 bottom-2 w-px bg-white/10"></div>
<div className="space-y-6">
<div className="relative">
<div className="absolute -left-6 top-1 w-2 h-2 rounded-full border-2 border-neutral-900" style={{backgroundColor: '#22c55e'}}></div>
<p className="text-xs font-medium uppercase tracking-wider mb-1" style={{color: '#22c55e'}}>
                      ABRIL - 2026
                    </p>
<p className="text-lg font-medium text-white mb-1">
                      Pensamento Prospectivo e Leitura do Futuro
                    </p>
<p className="text-sm text-neutral-500">
                      Sinais e antecipação de rupturas de mercado.
                    </p>
</div>
<div className="relative">
<div className="absolute -left-6 top-1 w-2 h-2 rounded-full border-2 border-neutral-900" style={{backgroundColor: '#4ade80'}}></div>
<p className="text-xs font-medium uppercase tracking-wider mb-1" style={{color: '#4ade80'}}>
                      MAIO - 2026
                    </p>
<p className="text-lg font-medium text-white mb-1">
                      Megatendências e Forças de Transformação
                    </p>
<p className="text-sm text-neutral-500">
                      Forças macroeconômicas e tendências setoriais.
                    </p>
</div>
<div className="relative">
<div className="absolute -left-6 top-1 w-2 h-2 rounded-full border-2 border-neutral-900" style={{backgroundColor: '#86efac'}}></div>
<p className="uppercase text-xs font-medium tracking-wider mb-1" style={{color: '#86efac'}}>
                      JUNHO - 2026
                    </p>
<p className="text-lg font-medium text-white mb-1">
                      Construção de Cenários Estratégicos
                    </p>
<p className="text-sm text-neutral-500">
                      Metodologias para testar decisões em múltiplos futuros.
                    </p>
</div>
<div className="relative">
<div className="absolute -left-6 top-1 w-2 h-2 rounded-full border-2 border-neutral-900" style={{backgroundColor: '#bbf7d0'}}></div>
<p className="uppercase text-xs font-medium tracking-wider mb-1" style={{color: '#86efac'}}>
                      JULHO - 2026
                    </p>
<p className="text-lg font-medium text-white mb-1">
                      Estratégia Adaptções Reais
                    </p>
<p className="text-sm text-neutral-500">
                      Planejamento flexível para ambientes de alta volatilidade.
                    </p>
</div>
<div className="relative">
<div className="absolute -left-6 top-1 w-2 h-2 rounded-full border-2 border-neutral-900" style={{backgroundColor: '#dcfce7'}}></div>
<p className="uppercase text-xs font-medium tracking-wider mb-1" style={{color: '#86efac'}}>
                      AGOSTO - 2026
                    </p>
<p className="text-lg font-medium text-white mb-1">
                      Liderança Visionária, Governança e Legado
                    </p>
<p className="text-sm text-neutral-500">
                      O líder como arquiteto do futuro da organização.
                    </p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-6 border-white/10 border-t mt-10 pt-8 gap-x-6 gap-y-6">
<div className="rounded-xl pt-5 pr-5 pb-5 pl-5" style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
<div className="flex items-baseline gap-2 mb-3">
<p className="text-4xl font-semibold tracking-tight text-white">
                      60
                    </p>
<span className="text-base font-medium text-neutral-400">
                      horas
                    </span>
</div>
<p className="text-xs text-neutral-400 uppercase tracking-wider mb-3">
                    Carga Horária Total
                  </p>
<div className="space-y-1">
<div className="flex gap-2 text-sm text-white font-semibold gap-x-2 gap-y-2 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-500"></span>
<span className="">Sextas: 18h às 22h</span>
</div>
<div className="flex items-center gap-2 text-sm text-neutral-400">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-500"></span>
<span className="">Sábados: 8h às 16h</span>
</div>
</div>
</div>
<div className="p-5 rounded-xl" style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
<div className="flex items-baseline gap-2 mb-3">
<p className="text-4xl font-semibold tracking-tight text-white">
                      5
                    </p>
<span className="text-base font-medium text-neutral-400">
                      módulos
                    </span>
</div>
<p className="text-xs text-neutral-400 uppercase tracking-wider mb-3">
                    Imersão Executiva
                  </p>
<div className="space-y-1">
<div className="flex items-center gap-2 text-sm text-neutral-400">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-500"></span>
<span className="">Campus ESPM</span>
</div>
<div className="flex items-center gap-2 text-sm text-neutral-400">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-500"></span>
<span className="">Casa LIDE</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-20 pb-32 lg:pt-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12 lg:mb-16">
<p className="uppercase text-xs font-medium text-neutral-500 tracking-widest mb-4">
              Diferenciais
            </p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Não é mais um curso executivo.
            </h2>
</div>
<div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
<div className="group p-6 lg:p-8 bg-neutral-900/30 border border-white/5 rounded-2xl hover:border-white/10 transition-all">
<p className="text-5xl lg:text-6xl font-light text-neutral-700 mb-6">
                01
              </p>
<h3 className="text-xl font-medium mb-3">Corpo Docente Híbrido</h3>
<p className="text-base text-neutral-400 leading-relaxed">
                Professores titulares da ESPM acompanhados de líderes
                empresariais convidados. Teoria com quem pesquisa, prática com
                quem executa.
              </p>
</div>
<div className="group p-6 lg:p-8 bg-neutral-900/30 border border-white/5 rounded-2xl hover:border-white/10 transition-all">
<p className="text-5xl lg:text-6xl font-light text-neutral-700 mb-6">
                02
              </p>
<h3 className="text-xl font-medium mb-3">Acesso à Rede LIDE</h3>
<p className="text-base text-neutral-400 leading-relaxed">
                Acesso a almoços-debate exclusivos, seminários e encontros com
                mais de 4.000 líderes empresariais.
              </p>
</div>
<div className="group p-6 lg:p-8 bg-neutral-900/30 border border-white/5 rounded-2xl hover:border-white/10 transition-all">
<p className="text-5xl lg:text-6xl font-light text-neutral-700 mb-6">
                03
              </p>
<h3 className="text-xl font-medium mb-3">Metodologia Harvard</h3>
<p className="text-base text-neutral-400 leading-relaxed">
                Frameworks globais adaptados à realidade e aos desafios
                específicos do mercado brasileiro.
              </p>
</div>
<div className="group p-6 lg:p-8 bg-neutral-900/30 border border-white/5 rounded-2xl hover:border-white/10 transition-all">
<p className="text-5xl lg:text-6xl font-light text-neutral-700 mb-6">
                04
              </p>
<h3 className="text-xl font-medium mb-3">Turma Limitada</h3>
<p className="text-base text-neutral-400 leading-relaxed">
                Apenas 30 participantes, todos C-Level. Sem diluição. Discussões
                de alto nível com pares reais.
              </p>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-20 pb-32 lg:pt-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center">
<h2 className="sm:text-4xl lg:text-5xl text-3xl font-semibold tracking-tight mb-6">
              Garanta sua vaga na próxima turma
            </h2>
<p className="text-base lg:text-lg text-neutral-400 mb-10">
              Vagas limitadas. Processo seletivo com análise de perfil
              executivo.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="group px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
                Quero me inscrever
                <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="download" strokeWidth="1.5"></i>
                Baixar prospecto
              </button>
</div>
</div>
</div>
</section>
</main>

<footer className="py-8 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="bg-white text-black px-2 py-1 text-xs font-semibold tracking-widest">
              ESPM
            </div>
<div className="border border-white/30 px-2 py-1 text-xs font-medium tracking-widest">
              LIDE
            </div>
</div>
<p className="text-sm text-neutral-500">
            © 2024 Strategic Partnership. São Paulo / Global.
          </p>
</div>
</div>
</footer>


    </>
  );
}
