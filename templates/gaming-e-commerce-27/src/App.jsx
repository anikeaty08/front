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
      

<div className="fixed top-0 left-0 right-0 h-1.5 bg-orange-500 z-[100]"></div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-[#040F24] via-[#0A224A] to-[#123A7C]"></div>

<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-400/10 blur-[150px]"></div>
<div className="absolute top-[40%] left-[60%] w-[40%] h-[40%] rounded-full bg-orange-500/5 blur-[120px]"></div>
<div className="absolute inset-0 bg-grid z-0 mask-image:linear-gradient(to_bottom,white,transparent)"></div>
</div>
<nav className="relative z-50 w-full pt-10 pb-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-6 md:gap-0">

<div className="flex items-center transform hover:scale-105 transition-transform duration-300 cursor-pointer">
<div className="flex flex-col items-end leading-[0.85] mr-1 italic">
<span className="text-2xl sm:text-3xl font-black tracking-tighter text-white drop-shadow-sm">RAFA</span>
<span className="text-2xl sm:text-3xl font-black tracking-tighter text-white drop-shadow-sm">GAMER</span>
</div>
<div className="flex items-center">
<i className="w-8 h-8 fill-blue-500 stroke-blue-500 -ml-1 z-10" data-lucide="play"></i>
<span className="text-5xl sm:text-6xl font-black italic tracking-tighter text-yellow-400 drop-shadow-md ml-[-4px]">2.0</span>
</div>
</div>
<a className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/20 px-6 py-3 text-base font-medium text-orange-400 backdrop-blur-md hover:bg-orange-500 hover:text-white hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="radio"></i>
            Acessar a Live
        </a>
</nav>
<main className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
<section className="pt-24 pb-32 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-base font-medium text-orange-400 backdrop-blur-md mb-10 uppercase tracking-wide">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
</span>
                A LOJA GAMER N1 DO BRASIL
            </div>
<h1 className="max-w-5xl text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white leading-[1.05]">
                Os Melhores Jogos, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500">Direto na Live.</span>
</h1>
<p className="mt-8 max-w-3xl text-xl md:text-2xl text-blue-200 font-light leading-relaxed">
                Mídia física, digital e acessórios com preços imbatíveis. <strong className="text-white font-medium">Faça parte do clube sócio gamer</strong> e garanta descontos exclusivos enquanto assiste.
            </p>
<div className="mt-14 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
<a className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-orange-500 text-white px-10 py-5 text-lg font-medium transition-all duration-300 hover:bg-orange-400 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.6)] active:scale-95 w-full sm:w-auto" href="#">
<i className="w-6 h-6 stroke-[1.5] group-hover:animate-pulse" data-lucide="tv"></i>
                    Entrar na Live Agora
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-10 py-5 text-lg font-medium text-white backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all w-full sm:w-auto" href="#catalogo">
                    Ver Catálogo
                    <i className="w-5 h-5 stroke-[1.5]" data-lucide="chevron-down"></i>
</a>
</div>
<p className="mt-8 text-base text-blue-300/60 flex items-center gap-2 font-light">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="truck"></i>
                Enviamos para todo o Brasil.
            </p>
</section>
<section className="py-24 relative border-t border-white/10" id="catalogo">
<div className="mb-16 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">Plataformas na Live</h2>
<p className="text-xl text-blue-200 max-w-2xl font-light">Estoque atualizado em tempo real. Qual console vai receber seu próximo jogo?</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-6 py-3 text-lg font-medium text-white hover:bg-white/10 transition-colors" href="#">
                    Falar com Atendimento
                    <i className="w-5 h-5 stroke-[1.5]" data-lucide="headphones"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0A1B3F]/60 p-8 backdrop-blur-xl transition-all duration-300 hover:bg-[#0F2656]/80 hover:border-blue-400/40 hover:-translate-y-1 shadow-lg shadow-black/20">
<div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300 border border-blue-500/30 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="gamepad-2"></i>
</div>
<div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-3">PlayStation</h3>
<p className="text-lg text-blue-200 leading-relaxed font-light">Lançamentos, pré-vendas e exclusivos do PS4 e PS5 em mídia física lacrada e digital.</p>
</div>
</div>

<div className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0A1B3F]/60 p-8 backdrop-blur-xl transition-all duration-300 hover:bg-[#0F2656]/80 hover:border-green-400/40 hover:-translate-y-1 shadow-lg shadow-black/20">
<div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/20 text-green-300 border border-green-500/30 group-hover:bg-green-500 group-hover:text-white transition-colors">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="box"></i>
</div>
<div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-3">Xbox</h3>
<p className="text-lg text-blue-200 leading-relaxed font-light">Os melhores títulos para a família Xbox, Gift Cards e códigos de Game Pass com preços que você só vê aqui.</p>
</div>
</div>

<div className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0A1B3F]/60 p-8 backdrop-blur-xl transition-all duration-300 hover:bg-[#0F2656]/80 hover:border-red-400/40 hover:-translate-y-1 shadow-lg shadow-black/20">
<div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/20 text-red-300 border border-red-500/30 group-hover:bg-red-500 group-hover:text-white transition-colors">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="swords"></i>
</div>
<div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-3">Nintendo</h3>
<p className="text-lg text-blue-200 leading-relaxed font-light">O universo Mario, Zelda e Pokémon. Mídia física para colecionadores e códigos eShop.</p>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex w-full justify-center items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-6 py-4 text-lg font-medium text-white hover:bg-white/10 transition-colors" href="#">
                    Falar com Atendimento
                </a>
</div>
</section>
<section className="py-24 border-t border-white/10 relative">
<div className="flex flex-col lg:flex-row gap-20 items-center">
<div className="w-full lg:w-1/2">
<div className="inline-flex items-center gap-2 rounded-lg bg-blue-900/50 border border-blue-500/30 px-4 py-2 text-blue-300 text-base font-semibold mb-6 uppercase tracking-wider backdrop-blur-sm">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="gem"></i>
                        FAÇA PARTE DO CLUBE SÓCIO GAMER
                    </div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-8 leading-[1.1]">Muito além de uma loja.<br/><span className="text-blue-300">A sua central de games.</span></h2>
<p className="text-xl md:text-2xl text-blue-100/80 mb-10 font-light leading-relaxed">Nossa missão é trazer os melhores jogos do mercado para você, com transparência e interação ao vivo. Quem compra na nossa live não troca por nada.</p>
<a className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white text-[#0A1B3F] px-8 py-5 text-lg font-semibold transition-all hover:scale-105 hover:bg-neutral-200 shadow-xl" href="#">
                        Quero Ser Sócio Gamer
                        <i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
<div className="w-full lg:w-1/2 flex flex-col gap-6">
<div className="group flex items-start gap-6 p-8 rounded-3xl bg-[#081533]/80 border border-white/5 backdrop-blur-sm transition-all hover:bg-[#0C1F4A]/90 hover:border-blue-500/20">
<div className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-950 text-orange-400 border border-blue-800 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="flame"></i>
</div>
<div>
<h4 className="text-2xl font-semibold text-white mb-2">Preços Imbatíveis ao Vivo</h4>
<p className="text-lg text-blue-200 font-light leading-relaxed">Durante a live, soltamos lotes com descontos que você não acha em nenhum site. É ver, comprar e comemorar.</p>
</div>
</div>
<div className="group flex items-start gap-6 p-8 rounded-3xl bg-[#081533]/80 border border-white/5 backdrop-blur-sm transition-all hover:bg-[#0C1F4A]/90 hover:border-blue-500/20">
<div className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-950 text-orange-400 border border-blue-800 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="package-check"></i>
</div>
<div>
<h4 className="text-2xl font-semibold text-white mb-2">Mídia Física e Digital</h4>
<p className="text-lg text-blue-200 font-light leading-relaxed">Seja para colocar na estante ou baixar na hora. Trabalhamos com produtos originais, lacrados e códigos verificados.</p>
</div>
</div>
<div className="group flex items-start gap-6 p-8 rounded-3xl bg-[#081533]/80 border border-white/5 backdrop-blur-sm transition-all hover:bg-[#0C1F4A]/90 hover:border-blue-500/20">
<div className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-950 text-orange-400 border border-blue-800 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="users"></i>
</div>
<div>
<h4 className="text-2xl font-semibold text-white mb-2">Comunidade e Interação</h4>
<p className="text-lg text-blue-200 font-light leading-relaxed">Tire dúvidas ao vivo, participe de sorteios exclusivos e converse com milhares de outros gamers apaixonados.</p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 border-t border-white/10">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">Quem comprou, recomenda</h2>
<p className="text-xl text-blue-200 max-w-2xl mx-auto font-light">Veja o feedback de quem já garantiu seus jogos na nossa live.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-col gap-6 p-8 rounded-3xl bg-[#081533]/60 border border-white/10 backdrop-blur-md">
<div className="flex gap-1 text-orange-400">
<i className="w-6 h-6 fill-current stroke-none" data-lucide="star"></i>
<i className="w-6 h-6 fill-current stroke-none" data-lucide="star"></i>
<i className="w-6 h-6 fill-current stroke-none" data-lucide="star"></i>
<i className="w-6 h-6 fill-current stroke-none" data-lucide="star"></i>
<i className="w-6 h-6 fill-current stroke-none" data-lucide="star"></i>
</div>
<p className="text-lg text-blue-100 flex-1 leading-relaxed font-light">"Comprei a pré-venda do novo God of War na live e chegou no dia do lançamento, lacrado e muito bem embalado. Atendimento nota 10!"</p>
<div className="flex items-center gap-4 pt-6 border-t border-white/10">
<div className="h-12 w-12 rounded-full bg-blue-900 border border-blue-700 flex items-center justify-center text-base font-semibold text-blue-200">RC</div>
<div>
<p className="text-base font-semibold text-white">Rafael C.</p>
<p className="text-sm text-blue-300">Sócio Gamer</p>
</div>
</div>
</div>
<div className="flex flex-col gap-6 p-8 rounded-3xl bg-[#081533]/60 border border-white/10 backdrop-blur-md">
<div className="flex gap-1 text-orange-400">
<i className="w-6 h-6 fill-current stroke-none" data-lucide="star"></i>
<i className="w-6 h-6 fill-current stroke-none" data-lucide="star"></i>
<i className="w-6 h-6 fill-current stroke-none" data-lucide="star"></i>
<i className="w-6 h-6 fill-current stroke-none" data-lucide="star"></i>
<i className="w-6 h-6 fill-current stroke-none" data-lucide="star"></i>
</div>
<p className="text-lg text-blue-100 flex-1 leading-relaxed font-light">"Peguei um código digital pro Switch na live, o envio foi imediato no WhatsApp. Preço muito melhor que na eShop direta."</p>
<div className="flex items-center gap-4 pt-6 border-t border-white/10">
<div className="h-12 w-12 rounded-full bg-blue-900 border border-blue-700 flex items-center justify-center text-base font-semibold text-blue-200">AM</div>
<div>
<p className="text-base font-semibold text-white">André M.</p>
<p className="text-sm text-blue-300">Cliente desde 2023</p>
</div>
</div>
</div>
<div className="flex flex-col gap-6 p-8 rounded-3xl bg-[#081533]/60 border border-white/10 backdrop-blur-md">
<div className="flex gap-1 text-orange-400">
<i className="w-6 h-6 fill-current stroke-none" data-lucide="star"></i>
<i className="w-6 h-6 fill-current stroke-none" data-lucide="star"></i>
<i className="w-6 h-6 fill-current stroke-none" data-lucide="star"></i>
<i className="w-6 h-6 fill-current stroke-none" data-lucide="star"></i>
<i className="w-6 h-6 fill-current stroke-none" data-lucide="star"></i>
</div>
<p className="text-lg text-blue-100 flex-1 leading-relaxed font-light">"A energia da live é muito boa! Além de comprar jogo barato, a gente dá muita risada. Melhor loja de games do Brasil sem dúvidas."</p>
<div className="flex items-center gap-4 pt-6 border-t border-white/10">
<div className="h-12 w-12 rounded-full bg-blue-900 border border-blue-700 flex items-center justify-center text-base font-semibold text-blue-200">LS</div>
<div>
<p className="text-base font-semibold text-white">Letícia S.</p>
<p className="text-sm text-blue-300">Sócio Gamer</p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24">
<div className="relative overflow-hidden rounded-[2.5rem] border border-orange-500/20 bg-[#08173B]/80 p-10 md:p-24 text-center backdrop-blur-xl shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-t from-orange-600/10 to-transparent pointer-events-none"></div>
<div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]"></div>
<div className="absolute -bottom-24 -left-24 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px]"></div>
<div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6 leading-tight">Sua coleção atualizada.<br/>Com o atendimento que você merece.</h2>
<p className="text-xl md:text-2xl text-blue-200 mb-12 font-light leading-relaxed">Não perca os lançamentos e as promoções relâmpago. Participe da nossa próxima live, interaja com a comunidade e compre seus jogos favoritos com segurança.</p>
<div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center">
<a className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-orange-500 text-white px-12 py-6 text-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-orange-400 shadow-[0_0_50px_-15px_rgba(249,115,22,0.6)]" href="#">
<i className="w-7 h-7 stroke-[1.5]" data-lucide="play-circle"></i>
                            Acessar a Live Agora
                        </a>
</div>
<p className="mt-8 text-base text-blue-300 font-light">FAÇA PARTE DO CLUBE SÓCIO GAMER E TENHA VANTAGENS EXCLUSIVAS.</p>
</div>
</div>
</section>
<footer className="pt-20 pb-12 border-t border-white/10 flex flex-col items-center justify-center gap-8">
<div className="flex items-center opacity-80 italic">
<div className="flex flex-col items-end leading-[0.85] mr-1">
<span className="text-xl font-black tracking-tighter text-white">RAFA</span>
<span className="text-xl font-black tracking-tighter text-white">GAMER</span>
</div>
<div className="flex items-center">
<i className="w-6 h-6 fill-blue-500 stroke-blue-500 -ml-1" data-lucide="play"></i>
<span className="text-4xl font-black tracking-tighter text-yellow-400 ml-[-2px]">2.0</span>
</div>
</div>
<p className="text-base md:text-lg text-blue-200/60 text-center max-w-4xl px-4 font-light leading-relaxed">
                Copyright © Rafa Gamer 2.0 2025 - A Loja Gamer Nº1 do Brasil. Todos os direitos reservados. 
            </p>
</footer>
</main>


    </>
  );
}
