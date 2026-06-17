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
      

<div className="flashlight" id="flashlight"></div>
<div className="fire-glow" id="fireGlow"></div>
<div className="flame-core" id="flameCore"></div>
<div id="particlesContainer"></div>

<header className="fixed top-0 left-0 right-0 z-40 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
<div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl tracking-tighter font-semibold text-white group cursor-pointer">
<span className="inline-block animate-pulse">🔥</span> FireCopy
                </span>
</div>
<div className="hidden md:block text-xs font-medium text-orange-400 bg-orange-950/30 px-3 py-1 rounded-full border border-orange-900/50">
                EXCLUSIVO PARA INFOPRODUTORES
            </div>
</div>
</header>
<main className="pt-24 md:pt-32">

<section className="mx-auto max-w-3xl px-6 text-center mb-20 md:mb-32 relative">
<div className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-medium text-zinc-400 mb-8 shadow-sm">
<span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                Venda mais com Copy Estratégica
            </div>
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-8 leading-[1.1]">
                Se você não sabe o que escrever na hora de criar anúncios, VSLs e páginas...
            </h1>
<div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-10 text-left hover:border-zinc-700 transition-colors">
<h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">Você NÃO precisa:</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm md:text-base text-zinc-400">
<span className="iconify text-zinc-600 mt-0.5 min-w-[1.25rem]" data-icon="lucide:x" data-strokeWidth="1.5"></span>
<span>Fazer mais um curso de 40 horas</span>
</li>
<li className="flex items-start gap-3 text-sm md:text-base text-zinc-400">
<span className="iconify text-zinc-600 mt-0.5 min-w-[1.25rem]" data-icon="lucide:x" data-strokeWidth="1.5"></span>
<span>Ler 600 páginas de teoria densa</span>
</li>
<li className="flex items-start gap-3 text-sm md:text-base text-zinc-400">
<span className="iconify text-zinc-600 mt-0.5 min-w-[1.25rem]" data-icon="lucide:x" data-strokeWidth="1.5"></span>
<span>Pagar R$5k para copywriters escreverem sua página de vendas</span>
</li>
</ul>
</div>
<p className="text-lg md:text-xl text-zinc-200 font-medium">
                Você precisa dos <span className="text-orange-500 decoration-orange-900 decoration-2 underline underline-offset-4">FRAMEWORKS certos.</span>
</p>
<p className="mt-4 text-xs text-zinc-600 font-mono">(Passe o mouse para iluminar o conteúdo)</p>
</section>

<section className="mx-auto max-w-5xl px-6 mb-20 md:mb-32">
<div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 text-center md:text-left relative overflow-hidden group">

<div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-orange-900/10 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-all duration-700"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 text-orange-400 font-medium text-sm">
<span className="iconify" data-icon="lucide:sparkles" data-strokeWidth="1.5"></span>
                            O Segredo do Mecanismo
                        </div>
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                            O <span className="text-orange-500">Kit FireCopy</span> tem um assistente de IA e mini tutoriais para você criar anúncios aplicando copy profissional.
                        </h2>
<p className="text-zinc-400 leading-relaxed">
                            Ele replica os frameworks de <strong className="text-zinc-200">BREAKTHROUGH ADVERTISING</strong> (o livro de $500 dólares que copywriters profissionais estudam).
                        </p>
<div className="inline-flex items-center gap-3 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-lg px-4 py-3 text-sm text-zinc-300 shadow-sm">
<span className="iconify text-orange-500 w-5 h-5" data-icon="lucide:book-open" data-strokeWidth="1.5"></span>
<span>Baseado em <strong>Eugene Schwartz</strong> — o copywriter que escreveu a bíblia do marketing direto</span>
</div>
</div>
<div className="w-full md:w-1/3 flex justify-center">

<div className="w-40 h-52 bg-gradient-to-br from-orange-600 to-orange-800 rounded-lg shadow-2xl shadow-orange-900/20 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500 border-t border-white/10">
<span className="text-white/90 font-serif text-4xl font-bold">BA</span>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-4xl px-6 mb-20 md:mb-32 text-center">
<h2 className="text-xl font-semibold text-white mb-6 tracking-tight">Veja em 90 segundos como funciona na prática</h2>
<div className="relative aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-2xl shadow-black border border-zinc-800 group cursor-none">

<div className="absolute inset-0 flex items-center justify-center bg-zinc-900/50 group-hover:bg-zinc-900/40 transition-colors">
<div className="w-16 h-16 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-white w-6 h-6 ml-1" data-icon="lucide:play" data-strokeWidth="1.5"></span>
</div>
</div>
<div className="absolute bottom-6 left-6 text-white text-left">
<p className="text-sm font-medium">Demonstração do Kit</p>
<p className="text-xs text-white/60">01:30</p>
</div>
</div>
</section>

<section className="mx-auto max-w-5xl px-6 mb-20 md:mb-32">
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-900 hover:shadow-lg hover:shadow-orange-900/20 transition-all duration-300">
<div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-orange-500 mb-4 border border-zinc-700">
<span className="iconify w-5 h-5" data-icon="lucide:target" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Anúncios &amp; Headlines</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Calibradas para o nível de consciência do seu público, capturando a atenção certa.
                    </p>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-900 hover:shadow-lg hover:shadow-orange-900/20 transition-all duration-300">
<div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-orange-500 mb-4 border border-zinc-700">
<span className="iconify w-5 h-5" data-icon="lucide:video" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">VSLs Estruturadas</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Roteiros baseados nas 7 técnicas de persuasão de Schwartz para reter e converter.
                    </p>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-900 hover:shadow-lg hover:shadow-orange-900/20 transition-all duration-300">
<div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-orange-500 mb-4 border border-zinc-700">
<span className="iconify w-5 h-5" data-icon="lucide:layout-template" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Páginas de Vendas</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Aplicação dos 5 estágios de sofisticação do mercado para se diferenciar da concorrência.
                    </p>
</div>
</div>
<div className="text-center mt-8 text-sm text-zinc-600 italic">
                (Sim, esses termos técnicos viraram copy pronta nas suas mãos)
            </div>
<div className="mt-12 text-center">
<a className="cursor-none inline-flex items-center gap-2 bg-white text-zinc-950 px-8 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10" href="#offer">
                    Quero criar copy profissional
                    <span className="iconify" data-icon="lucide:arrow-down" data-strokeWidth="1.5"></span>
</a>
</div>
</section>

<section className="mx-auto max-w-6xl px-6 mb-24 md:mb-32">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Veja a diferença na prática</h2>
<p className="text-zinc-500">Exemplo real: Headlines para curso de emagrecimento</p>
</div>
<div className="grid md:grid-cols-2 gap-0 md:gap-8 lg:gap-12 relative">

<div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-zinc-900 rounded-full border border-zinc-700 items-center justify-center text-zinc-500">
<span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</div>

<div className="bg-zinc-900/30 rounded-2xl border border-zinc-800 p-8">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
<h3 className="text-zinc-500 font-semibold flex items-center gap-2">
<span className="iconify text-zinc-600" data-icon="lucide:x-circle" data-strokeWidth="1.5"></span>
                            ANTES (GPT genérico)
                        </h3>
</div>
<p className="text-xs font-mono text-zinc-600 mb-4">Prompt: "Headlines para curso de emagrecimento?"</p>
<ul className="space-y-4 text-zinc-500">
<li className="bg-zinc-900 p-3 rounded border border-zinc-800">"Transforme seu corpo agora!"</li>
<li className="bg-zinc-900 p-3 rounded border border-zinc-800">"O segredo para emagrecer rápido!"</li>
<li className="bg-zinc-900 p-3 rounded border border-zinc-800">"Perca peso de forma natural!"</li>
</ul>
<div className="mt-6 text-sm text-zinc-600 border-t border-zinc-800 pt-4">
                        Genérico, igual ao de todo mundo. Não constrói desejo real nem diferencia.
                    </div>
</div>

<div className="bg-zinc-900 rounded-2xl border border-orange-900/30 p-8 shadow-xl shadow-orange-900/10 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-orange-800"></div>
<div className="flex items-center justify-between mb-6 pb-4 border-b border-orange-900/30">
<h3 className="text-orange-500 font-semibold flex items-center gap-2">
<span className="iconify" data-icon="lucide:check-circle-2" data-strokeWidth="1.5"></span>
                            DEPOIS (Schwartz Protocol™)
                        </h3>
</div>
<div className="mb-6 bg-orange-950/20 p-3 rounded-lg border border-orange-900/30">
<p className="text-xs font-medium text-orange-400 mb-2">O assistente pergunta:</p>
<ul className="text-xs text-orange-500/60 list-disc list-inside space-y-1">
<li>Quem é o público exato?</li>
<li>O que eles já tentaram e falhou?</li>
<li>Qual o mecanismo único?</li>
</ul>
</div>
<p className="text-xs font-mono text-zinc-500 mb-4">E entrega:</p>
<ul className="space-y-4">
<li className="bg-orange-950/10 p-4 rounded-lg border border-orange-900/20">
<p className="text-white font-medium text-sm mb-1">"Para quem cansou de dietas que duram só 2 semanas e quer resultados reais sem sofrer"</p>
<span className="text-[10px] uppercase tracking-wider text-orange-500 font-semibold">Identifica a dor latente</span>
</li>
<li className="bg-orange-950/10 p-4 rounded-lg border border-orange-900/20">
<p className="text-white font-medium text-sm mb-1">"O plano que emagrece ativando seu metabolismo natural, sem cortar o que ama"</p>
<span className="text-[10px] uppercase tracking-wider text-orange-500 font-semibold">Mecanismo + Identidade</span>
</li>
</ul>
<div className="mt-6 text-sm text-zinc-400 border-t border-orange-900/30 pt-4 font-medium">
                        Estratégico, personalizado, baseado em frameworks que intensificam o desejo.
                    </div>
</div>
</div>
</section>

<section className="mx-auto max-w-3xl px-6 mb-24 md:mb-32">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-3">O Kit FireCopy não é só o assistente</h2>
<p className="text-zinc-500">É um pacote completo para você aplicar e escalar.</p>
</div>
<div className="space-y-4">

<div className="bg-zinc-900 border border-orange-900/50 rounded-xl p-5 flex flex-col md:flex-row gap-4 items-start md:items-center relative overflow-hidden shadow-sm">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-600"></div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<h3 className="font-semibold text-white">Assistente GPT Schwartz Protocol™</h3>
<span className="bg-orange-950 text-orange-500 text-[10px] px-2 py-0.5 rounded-full font-medium tracking-wide border border-orange-900/50">VITALÍCIO</span>
</div>
<p className="text-sm text-zinc-400">Diagnostica consciência, sofisticação e estrutura persuasão.</p>
</div>
<div className="text-white font-semibold whitespace-nowrap">R$ 497,00</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 flex flex-col md:flex-row gap-4 items-start md:items-center">
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<h3 className="font-semibold text-zinc-300">Mini-Guia de Tráfego para Copywriters</h3>
<span className="bg-zinc-800 text-zinc-400 text-[10px] px-2 py-0.5 rounded-full font-medium tracking-wide">BÔNUS</span>
</div>
<p className="text-sm text-zinc-500">Otimize o Machine Learning do Meta Ads com sua copy.</p>
</div>
<div className="flex flex-col items-end">
<div className="text-zinc-600 line-through text-sm">R$ 47,00</div>
<div className="text-green-500 font-semibold text-sm">GRÁTIS</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 flex flex-col md:flex-row gap-4 items-start md:items-center">
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<h3 className="font-semibold text-zinc-300">Template de Página de Vendas + Tutorial</h3>
<span className="bg-zinc-800 text-zinc-400 text-[10px] px-2 py-0.5 rounded-full font-medium tracking-wide">BÔNUS</span>
</div>
<p className="text-sm text-zinc-500">Wireframe completo com os 12 elementos obrigatórios.</p>
</div>
<div className="flex flex-col items-end">
<div className="text-zinc-600 line-through text-sm">R$ 97,00</div>
<div className="text-green-500 font-semibold text-sm">GRÁTIS</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 flex flex-col md:flex-row gap-4 items-start md:items-center">
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<h3 className="font-semibold text-zinc-300">Diagnóstico Rápido do Funil</h3>
<span className="bg-zinc-800 text-zinc-400 text-[10px] px-2 py-0.5 rounded-full font-medium tracking-wide">BÔNUS</span>
</div>
<p className="text-sm text-zinc-500">Descubra onde seu funil está travado em 15 perguntas.</p>
</div>
<div className="flex flex-col items-end">
<div className="text-zinc-600 line-through text-sm">R$ 47,00</div>
<div className="text-green-500 font-semibold text-sm">GRÁTIS</div>
</div>
</div>
</div>
<div className="flex justify-between items-center mt-6 pt-6 border-t border-zinc-800 px-2">
<span className="text-zinc-500 font-medium">Valor Total:</span>
<span className="text-xl font-bold text-zinc-600 line-through decoration-zinc-600/50">R$ 688,00</span>
</div>
</section>

<section className="mx-auto max-w-4xl px-6 mb-24 md:mb-32" id="offer">
<div className="bg-zinc-900 rounded-3xl p-8 md:p-16 border border-zinc-800 text-center shadow-2xl shadow-black relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
<div className="relative z-10">
<p className="text-zinc-400 font-medium mb-4">Hoje, você leva tudo isso por:</p>
<div className="flex flex-col items-center justify-center gap-2 mb-8">
<span className="text-2xl text-zinc-600 line-through font-medium">R$ 688</span>
<div className="flex items-baseline gap-1">
<span className="text-3xl md:text-4xl font-light text-zinc-400">12x de</span>
<span className="text-6xl md:text-8xl font-bold text-white tracking-tighter">9,07</span>
</div>
<p className="text-sm text-zinc-500 mt-2">ou R$ 97,00 à vista</p>
</div>
<div className="inline-flex items-center gap-2 bg-orange-950/30 text-orange-400 px-4 py-2 rounded-lg text-sm font-medium mb-8 border border-orange-900/30">
<span className="iconify" data-icon="lucide:coffee" data-strokeWidth="1.5"></span>
                        Menos que um café por dia. Mais impacto que cursos de R$2.000.
                    </div>
<div className="space-y-4">
<button className="w-full md:w-auto bg-orange-600 hover:bg-orange-500 text-white text-lg font-semibold px-10 py-4 rounded-full shadow-xl shadow-orange-900/40 transition-all transform hover:-translate-y-1 cursor-none">
                            QUERO O KIT FIRECOPY AGORA
                        </button>
<div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-zinc-500">
<span className="flex items-center gap-1"><span className="iconify text-green-500" data-icon="lucide:shield-check"></span> Garantia 30 dias</span>
<span className="flex items-center gap-1"><span className="iconify text-green-500" data-icon="lucide:infinity"></span> Acesso vitalício</span>
<span className="flex items-center gap-1"><span className="iconify text-green-500" data-icon="lucide:lock"></span> Pagamento Seguro</span>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-5xl px-6 mb-24">
<h2 className="text-3xl font-semibold text-center text-white tracking-tight mb-12">Para quem é este kit?</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-zinc-900 border border-green-900/30 rounded-2xl p-8 shadow-sm">
<h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-green-950/50 flex items-center justify-center text-green-500 border border-green-900/50">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="2"></span>
</div>
                        Perfeito se você:
                    </h3>
<ul className="space-y-4">
<li className="flex gap-3 text-sm text-zinc-400">
<span className="iconify text-green-500 mt-0.5 flex-shrink-0" data-icon="lucide:check"></span>
                            É infoprodutor querendo independência na copy
                        </li>
<li className="flex gap-3 text-sm text-zinc-400">
<span className="iconify text-green-500 mt-0.5 flex-shrink-0" data-icon="lucide:check"></span>
                            Já se frustrou com copywriters que não captam sua essência
                        </li>
<li className="flex gap-3 text-sm text-zinc-400">
<span className="iconify text-green-500 mt-0.5 flex-shrink-0" data-icon="lucide:check"></span>
                            Quer frameworks clássicos sem estudar volumes inteiros
                        </li>
</ul>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 opacity-80">
<h3 className="text-lg font-semibold text-zinc-500 mb-6 flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500">
<span className="iconify" data-icon="lucide:x" data-strokeWidth="2"></span>
</div>
                        NÃO é para você se:
                    </h3>
<ul className="space-y-4">
<li className="flex gap-3 text-sm text-zinc-500">
<span className="iconify text-zinc-600 mt-0.5 flex-shrink-0" data-icon="lucide:x"></span>
                            Espera milagres sem dar contexto ou testar
                        </li>
<li className="flex gap-3 text-sm text-zinc-500">
<span className="iconify text-zinc-600 mt-0.5 flex-shrink-0" data-icon="lucide:x"></span>
                            Acha que IA resolve tudo sozinha (ela guia, você contextualiza)
                        </li>
<li className="flex gap-3 text-sm text-zinc-500">
<span className="iconify text-zinc-600 mt-0.5 flex-shrink-0" data-icon="lucide:x"></span>
                            Não quer iterar baseado em resultados
                        </li>
</ul>
</div>
</div>
</section>

<section className="mx-auto max-w-3xl px-6 mb-24">
<h2 className="text-2xl font-semibold text-center text-white tracking-tight mb-2">Talvez você esteja pensando...</h2>
<p className="text-center text-zinc-500 mb-10">Veja se essas dúvidas fazem sentido:</p>
<div className="space-y-4">
<details className="group bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
<summary className="flex items-center justify-between p-5 cursor-none hover:bg-zinc-800 transition-colors text-white">
<span className="font-medium">E se eu não souber usar IA?</span>
<span className="iconify transform group-open:rotate-180 transition-transform text-zinc-400" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-5 pb-5 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800 pt-4">
                        O kit inclui tutoriais passo a passo de como instalar e usar o assistente. Você só precisa copiar/colar e responder as perguntas que ele faz. Se você sabe usar WhatsApp, sabe usar o assistente.
                    </div>
</details>
<details className="group bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
<summary className="flex items-center justify-between p-5 cursor-none hover:bg-zinc-800 transition-colors text-white">
<span className="font-medium">Funciona no meu nicho?</span>
<span className="iconify transform group-open:rotate-180 transition-transform text-zinc-400" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-5 pb-5 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800 pt-4">
                        Sim. Os frameworks de Schwartz funcionam em qualquer mercado porque são baseados em psicologia humana universal. Já testamos em +20 nichos: emagrecimento, finanças, relacionamento,</div></details></div></section></main>
    </>
  );
}
