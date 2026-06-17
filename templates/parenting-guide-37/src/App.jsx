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
      

<nav className="flex max-w-5xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<div className="font-semibold tracking-tighter text-lg uppercase text-stone-900">
            CONEXÃO
        </div>
<a className="text-sm font-medium transition-colors text-stone-900 hover:text-stone-600" href="#comprar">
            Adquirir agora
        </a>
</nav>

<section className="xl:bg-clip-text xl:text-transparent text-center bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-red-400 via-red-600 to-red-400 max-w-4xl mr-auto ml-auto pt-20 pr-6 pb-24 pl-6">
<div className="inline-flex gap-2 text-xs font-medium text-stone-600 bg-stone-100 border-stone-200 border rounded-full mb-8 gap-x-2 gap-y-2 items-center">
<iconify-icon className="" height="16" icon="solar:book-bookmark-minimalistic-linear" width="16"></iconify-icon>
            Como Ajudar Minha Filha a Largar o Celular
        </div>
<h1 className="sm:text-5xl md:text-6xl leading-tight text-4xl font-semibold text-stone-900 tracking-tight mb-6">Não é só o celular… é o medo de perder a <span className="text-stone-400">conexão com a sua filha.</span></h1>
<p className="sm:text-xl leading-relaxed text-lg text-stone-50 max-w-2xl mr-auto mb-10 ml-auto">
            Descubra o guia prático e emocional que ajuda mães e pais a reduzir o tempo de tela, reconectar com seus filhos e trazer a paz de volta para o lar — sem gritos, sem culpa e sem brigas diárias.
        </p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<a className="sm:w-auto transition-all flex items-center justify-center gap-2 hover:bg-stone-800 shadow-stone-900/20 text-sm font-medium text-white bg-stone-900 w-full rounded-lg pt-4 pr-8 pb-4 pl-8 shadow-sm" href="#comprar">
<iconify-icon height="20" icon="solar:download-minimalistic-linear" width="20"></iconify-icon>
                Baixar o Guia Agora
            </a>
</div>
</section>

<section className="border-y py-24 bg-white border-stone-200">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4 text-stone-900">
                    Pais e mães como você estão vivendo isso agora mesmo
                </h2>
<p className="text-base text-stone-500">Reconhece alguma destas situações na sua casa?</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border bg-stone-50 border-stone-100">
<iconify-icon className="mb-4 text-stone-400" height="28" icon="solar:magnifer-linear" width="28"></iconify-icon>
<p className="text-sm leading-relaxed text-stone-700">Você é pai ou mãe de uma filha e busca alternativas eficazes ao celular?</p>
</div>

<div className="p-6 rounded-2xl border bg-stone-50 border-stone-100">
<iconify-icon className="mb-4 text-stone-400" height="28" icon="solar:sad-circle-linear" width="28"></iconify-icon>
<p className="text-sm leading-relaxed text-stone-700">Você está desesperado porque seu filho passa horas fazendo scroll no celular.</p>
</div>

<div className="p-6 rounded-2xl border bg-stone-50 border-stone-100">
<iconify-icon className="mb-4 text-stone-400" height="28" icon="solar:heart-break-linear" width="28"></iconify-icon>
<p className="text-sm leading-relaxed text-stone-700">Sente culpa, medo, frustração e perda de controle sobre a situação.</p>
</div>

<div className="p-6 rounded-2xl border bg-stone-50 border-stone-100">
<iconify-icon className="mb-4 text-stone-400" height="28" icon="solar:leaf-linear" width="28"></iconify-icon>
<p className="text-sm leading-relaxed text-stone-700">Busca uma solução simples, imediata e que funcione sem criar brigas.</p>
</div>

<div className="p-6 rounded-2xl border sm:col-span-2 lg:col-span-1 bg-stone-50 border-stone-100">
<iconify-icon className="mb-4 text-stone-400" height="28" icon="solar:target-linear" width="28"></iconify-icon>
<p className="text-sm leading-relaxed text-stone-700">Não quer apenas teoria de especialistas, quer uma alternativa real ao celular.</p>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-24">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6 text-stone-900">
                "A pequena mudança que está devolvendo a calma para muitas famílias."
            </h2>
<p className="text-base max-w-2xl mx-auto text-stone-600">
                Descubra uma forma tranquila, criativa e sem gritos de ajudá-la a largar o celular… mesmo que você já tenha tentado de tudo.
            </p>
</div>
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/2 space-y-4">
<div className="flex items-center gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-orange-100">
<iconify-icon className="text-orange-600" height="18" icon="solar:check-read-linear" width="18"></iconify-icon>
</div>
<span className="text-base font-medium text-stone-900">Sem castigos</span>
</div>
<div className="flex items-center gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-orange-100">
<iconify-icon className="text-orange-600" height="18" icon="solar:check-read-linear" width="18"></iconify-icon>
</div>
<span className="text-base font-medium text-stone-900">Sem brigas</span>
</div>
<div className="flex items-center gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-orange-100">
<iconify-icon className="text-orange-600" height="18" icon="solar:check-read-linear" width="18"></iconify-icon>
</div>
<span className="text-base font-medium text-stone-900">Funciona mesmo que ela "só queira tela"</span>
</div>
</div>
<div className="w-full md:w-1/2 p-8 rounded-2xl border shadow-sm bg-white border-stone-200">
<div className="flex items-center gap-2 mb-4 text-red-500">
<iconify-icon height="20" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-wider">O tempo passa rápido</span>
</div>
<ul className="space-y-3 text-sm mb-6 text-stone-600">
<li className="flex items-start gap-2">
<span className="mt-0.5">•</span>
                        Entre os 5 e 14 anos o cérebro é altamente moldável.
                    </li>
<li className="flex items-start gap-2">
<span className="mt-0.5">•</span>
                        O cérebro aprende hábitos emocionais.
                    </li>
<li className="flex items-start gap-2">
<span className="mt-0.5">•</span>
                        O que se repete… se normaliza.
                    </li>
<li className="flex items-start gap-2">
<span className="mt-0.5">•</span>
                        Se hoje o refúgio é a tela, amanhã também será.
                    </li>
</ul>
<div className="p-4 rounded-lg border bg-stone-50 border-stone-100">
<p className="text-sm font-medium italic text-stone-900">"O que você normaliza hoje, se torna hábito amanhã."</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-300">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-sm font-medium uppercase tracking-widest mb-4 block text-stone-400">A Mudança Mental</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6 text-white">
                    Você não precisa tirar o celular à força.<br/>
                    Você precisa dar algo melhor para ela.
                </h2>
</div>
<div className="border rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto bg-stone-800 border-stone-700">
<iconify-icon className="mb-6 text-white" height="48" icon="solar:book-bookmark-minimalistic-linear" width="48"></iconify-icon>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-4 text-white">
                    Um livro de colorir que transforma histórias inspiradoras da Bíblia em uma atividade que prende a atenção… sem telas.
                </h3>
<p className="text-sm mb-8 leading-relaxed text-stone-400">
                    Isso não é "mais uma solução mágica". É uma alternativa real que funciona porque oferece algo que as telas não conseguem dar: criatividade tangível, calma e conexão.
                </p>
<div className="text-left space-y-4 max-w-sm mx-auto mb-10">
<div className="flex items-center gap-3">
<iconify-icon className="text-white" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-stone-200">Reduz o tempo de tela</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-white" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-stone-200">Estimula a criatividade</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-white" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-stone-200">Promove espiritualidade e calma</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-white" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-stone-200">Cria momentos de conexão familiar</span>
</div>
</div>
<p className="text-sm font-medium italic text-white">
                    "Sua filha não vai se lembrar de quantos vídeos assistiu… Vai se lembrar de como se sentia quando estava com você."
                </p>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-16 text-stone-900">
            A transformação não é instantânea, mas é <span className="text-orange-600">real e sustentável</span>.
        </h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="p-8 rounded-3xl border shadow-sm bg-white border-red-100">
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-stone-100">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-50">
<iconify-icon className="text-red-500" height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-stone-900">Antes</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-stone-600">
<iconify-icon className="mt-0.5 shrink-0 text-red-400" height="18" icon="solar:minus-circle-linear" width="18"></iconify-icon>
                        Brigas constantes pelo uso do celular
                    </li>
<li className="flex items-start gap-3 text-sm text-stone-600">
<iconify-icon className="mt-0.5 shrink-0 text-red-400" height="18" icon="solar:minus-circle-linear" width="18"></iconify-icon>
                        Frustração diária por não saber o que fazer
                    </li>
<li className="flex items-start gap-3 text-sm text-stone-600">
<iconify-icon className="mt-0.5 shrink-0 text-red-400" height="18" icon="solar:minus-circle-linear" width="18"></iconify-icon>
                        Culpa constante ao ver as horas passando
                    </li>
</ul>
<div className="mt-8 p-4 rounded-xl bg-red-50">
<p className="text-xs font-medium text-center text-red-800">Sua filha não está mudando… o celular está educando ela.</p>
</div>
</div>

<div className="p-8 rounded-3xl border shadow-sm relative overflow-hidden bg-white border-orange-100">
<div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full -z-10 bg-orange-50"></div>
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-stone-100">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-50">
<iconify-icon className="text-orange-500" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-stone-900">Depois</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-stone-600">
<iconify-icon className="text-orange-500 mt-0.5 shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        Sua filha escolhe colorir espontaneamente
                    </li>
<li className="flex items-start gap-3 text-sm text-stone-600">
<iconify-icon className="text-orange-500 mt-0.5 shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        Momentos de calma e silêncio na casa
                    </li>
<li className="flex items-start gap-3 text-sm text-stone-600">
<iconify-icon className="text-orange-500 mt-0.5 shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        Você sente que voltou a ter controle da situação
                    </li>
</ul>
<div className="mt-8 p-4 rounded-xl bg-orange-50">
<p className="text-xs font-medium text-center text-orange-800">A conexão familiar é restaurada aos poucos.</p>
</div>
</div>
</div>
</section>

<section className="border-y py-24 bg-white border-stone-200">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4 text-stone-900">
                    Pais reais, resultados reais
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border flex flex-col justify-between border-stone-100 bg-stone-50">
<div>
<div className="flex gap-1 mb-4 text-pink-400">
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed mb-6 text-stone-700">"Não achei que fosse funcionar… mas agora minha filha me pede para imprimir outra folha para colorir."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-stone-500 bg-stone-200">M</div>
<div>
<p className="text-xs font-medium text-stone-900">María G.</p>
<p className="text-xs text-stone-500">Mãe da Sofía, 7 anos</p>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border flex flex-col justify-between border-stone-100 bg-stone-50">
<div>
<div className="flex gap-1 mb-4 text-pink-400">
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed mb-6 text-stone-700">"Pela primeira vez, ela largou o celular sem que ninguém pedisse. Foi um alívio enorme."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-stone-500 bg-stone-200">C</div>
<div>
<p className="text-xs font-medium text-stone-900">Carlos R.</p>
<p className="text-xs text-stone-500">Pai do Mateo, 9 anos</p>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border flex flex-col justify-between border-stone-100 bg-stone-50">
<div>
<div className="flex gap-1 mb-4 text-pink-400">
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed mb-6 text-stone-700">"O melhor é que agora colorimos juntos. Recuperei esse tempo de qualidade com meu filho."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-stone-500 bg-stone-200">A</div>
<div>
<p className="text-xs font-medium text-stone-900">Ana P.</p>
<p className="text-xs text-stone-500">Mãe do Diego, 6 anos</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-24" id="comprar">
<div className="border rounded-3xl p-8 sm:p-12 shadow-xl text-center relative overflow-hidden bg-white border-stone-200 shadow-stone-200/50">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent to-transparent opacity-10 via-stone-900"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-8 bg-red-50 border-red-100 text-red-600">
<iconify-icon height="16" icon="solar:gift-linear" width="16"></iconify-icon>
                Bônus Especial Incluído
            </div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2 text-stone-900">
                Acesse agora por um preço especial
            </h2>
<p className="text-sm text-stone-500 mb-8">O acesso pode ser encerrado sem aviso prévio.</p>
<div className="flex justify-center items-end gap-3 mb-8">
<span className="text-xl line-through mb-1 text-stone-400">US$ 15</span>
<span className="text-5xl font-semibold tracking-tight text-stone-900">US$ 5</span>
</div>
<div className="border rounded-xl p-4 mb-8 text-left max-w-sm mx-auto bg-stone-50 border-stone-100">
<p className="text-xs font-medium mb-2 text-stone-900">O que está incluído:</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-stone-600">
<iconify-icon className="text-orange-500" height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
                        Livro de Colorir Digital
                    </li>
<li className="flex items-start gap-2 text-xs text-stone-600">
<iconify-icon className="text-orange-500 mt-0.5" height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
<div>
<span className="font-medium">BÔNUS:</span> Guia de reconexão
                            <div className="text-[10px] line-through mt-0.5 text-stone-400">Antes US$ 20</div>
<div className="text-[10px] font-medium text-orange-600">Agora GRÁTIS</div>
</div>
</li>
</ul>
<p className="text-[10px] text-stone-500 mt-3 pt-3 border-t border-stone-200">
                    Você não está competindo contra um aparelho. Está competindo contra algoritmos.
                </p>
</div>
<a className="block w-full py-4 rounded-xl text-sm font-medium transition-all shadow-sm mb-4 bg-stone-900 text-white hover:bg-stone-800 shadow-stone-900/20" href="#">
                Sim, quero ajudar minha filha a largar o celular!
            </a>
<div className="flex items-center justify-center gap-2 text-xs text-stone-500">
<iconify-icon height="16" icon="solar:shield-check-linear" width="16"></iconify-icon>
<span>Garantia de reembolso. Sem perguntas.</span>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 pb-24 text-center">
<h3 className="text-xl sm:text-2xl font-medium tracking-tight mb-6 text-stone-900">
            Pronta para recuperar a calma em casa?
        </h3>
<p className="text-base text-stone-500 italic mb-8">
            "Se outras mulheres de fé conseguiram restaurar seus filhos em tempos difíceis… Por que você não poderia fazer o mesmo hoje?"
        </p>
<p className="text-sm font-medium text-stone-900">
            Talvez daqui a alguns meses você não se lembre deste momento… Mas pode se lembrar do dia em que decidiu tentar algo diferente. Comece hoje.
        </p>
</section>

<footer className="border-t py-8 text-center border-stone-200 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="font-semibold tracking-tighter text-lg uppercase mb-2 text-stone-300">
                CONEXÃO
            </div>
<p className="text-xs text-stone-400">
                © 2024 Todos os direitos reservados.
            </p>
</div>
</footer>

    </>
  );
}
