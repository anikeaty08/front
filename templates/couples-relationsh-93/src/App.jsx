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



/* Animation on Scroll */
(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



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
      

<header className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 z-50" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)', filter: 'var(--fx-filter)', WebkitBackdropFilter: 'var(--fx-filter)'}}>
<nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
<div className="flex items-center gap-2">
<div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl w-9 h-9 flex items-center justify-center">
<span className="text-white text-lg font-semibold" style={{letterSpacing: '-0.03em'}}>ND</span>
</div>
<span className="text-lg font-semibold tracking-tight">Nós Dois</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" href="#funcionalidades">Funcionalidades</a>
<a className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" href="#games">Mini Games</a>
<a className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" href="#depoimentos">Depoimentos</a>
<button className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-gray-800 dark:hover:bg-white transition-colors">Baixar App</button>
</div>
<button className="md:hidden">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</nav>
</header>

<section className="pt-32 pb-20 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-2 mb-6 [animation:fadeIn_0.8s_ease-out_both] animate-on-scroll">
<span className="text-2xl">💕</span>
<span className="text-sm font-medium text-pink-600 dark:text-pink-400">Feito para casais de verdade</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1] [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
                    Um app só de<br/>vocês dois
                </h1>
<p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
                    Organizem, reclamem e se divirtam juntos num só lugar
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<button className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-medium px-8 py-4 rounded-xl hover:bg-gray-800 dark:hover:bg-white transition-all hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center">
                        Baixar App
                        <i className="w-5 h-5" data-lucide="download"></i>
</button>
<button className="border-2 border-gray-300 dark:border-gray-800 text-gray-900 dark:text-gray-100 font-medium px-8 py-4 rounded-xl hover:border-gray-400 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all w-full sm:w-auto">
                        Entrar no espaço
                    </button>
</div>

<div className="relative max-w-5xl mx-auto [animation:fadeSlideUp_1s_ease-out_0.4s_both] animate-on-scroll">
<div className="bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-gray-800">
<div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800">
<div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center gap-2">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="flex-1 text-center">
<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Nós Dois 💕</span>
</div>
</div>
<div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 rounded-2xl p-6 border border-pink-500/20">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
<span className="text-lg">🛒</span>
</div>
<span className="font-semibold text-gray-900 dark:text-gray-100">Lista de Compras</span>
</div>
<div className="space-y-2">
<div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">Café especial ☕</div>
<div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">Papel higiênico (nunca lembra)</div>
<div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">Brigadeiro 🍫</div>
</div>
</div>
<div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl p-6 border border-purple-500/20">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
<span className="text-lg">💬</span>
</div>
<span className="font-semibold text-gray-900 dark:text-gray-100">Interações</span>
</div>
<div className="space-y-2">
<div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-3 text-sm text-gray-700 dark:text-gray-300 flex items-center justify-between border border-gray-200 dark:border-gray-700">
<span>Mandar um beijo</span>
<span>😘</span>
</div>
<div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-3 text-sm text-gray-700 dark:text-gray-300 flex items-center justify-between border border-gray-200 dark:border-gray-700">
<span>Reclamação do dia</span>
<span>😤</span>
</div>
<div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-3 text-sm text-gray-700 dark:text-gray-300 flex items-center justify-between border border-gray-200 dark:border-gray-700">
<span>Peido virtual</span>
<span>💨</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
<div className="max-w-5xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-gray-900 dark:text-white [animation:fadeSlideIn_0.8s_ease-out_both] animate-on-scroll">
                Seu relacionamento, mas com<br/>modo divertido ativado
            </h2>
<p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light leading-relaxed [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
                Nós Dois é o app que mistura organização e diversão — feito pra quem vive junto, mas quer rir mais do que brigar. Um espaço privado só de vocês, onde tudo pode: listas, reclamações, jogos e muito amor.
            </p>
</div>
</section>

<section className="py-24 px-6" id="funcionalidades">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-gray-900 dark:text-white [animation:fadeSlideIn_0.8s_ease-out_both] animate-on-scroll">
                    Tudo que vocês precisam
                </h2>
<p className="text-lg text-gray-600 dark:text-gray-400 font-light [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">E algumas coisas que nem sabiam que precisavam</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10 transition-all [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-5">
<i className="w-6 h-6 text-pink-500 dark:text-pink-400" data-lucide="shopping-cart"></i>
</div>
<h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Listas compartilhadas</h3>
<p className="text-gray-600 dark:text-gray-400 leading-relaxed">Compras, viagens, metas... tudo sincronizado. Nunca mais esqueçam o papel higiênico.</p>
</div>

<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-5">
<i className="w-6 h-6 text-purple-500 dark:text-purple-400" data-lucide="wind"></i>
</div>
<h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Interações engraçadas</h3>
<p className="text-gray-600 dark:text-gray-400 leading-relaxed">Mande um beijo, um abraço virtual ou até um peido. Porque amor é isso também.</p>
</div>

<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-5">
<i className="w-6 h-6 text-orange-500 dark:text-orange-400" data-lucide="message-circle"></i>
</div>
<h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Reclamações leves</h3>
<p className="text-gray-600 dark:text-gray-400 leading-relaxed">Registre as frustrações do dia com humor. Rir junto é melhor que brigar sozinho.</p>
</div>

<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
<i className="w-6 h-6 text-blue-500 dark:text-blue-400" data-lucide="calendar"></i>
</div>
<h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Agenda do casal</h3>
<p className="text-gray-600 dark:text-gray-400 leading-relaxed">Compromissos, dates, aniversários. Tudo num lugar só pra ninguém esquecer nada importante.</p>
</div>

<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 transition-all [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-5">
<i className="w-6 h-6 text-green-500 dark:text-green-400" data-lucide="heart"></i>
</div>
<h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Chat com reações</h3>
<p className="text-gray-600 dark:text-gray-400 leading-relaxed">Conversem, reajam, mandem figurinhas. Um chat só de vocês, sem distrações.</p>
</div>

<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10 transition-all [animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll">
<div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-5">
<i className="w-6 h-6 text-pink-500 dark:text-pink-400" data-lucide="gamepad-2"></i>
</div>
<h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Mini games de casal</h3>
<p className="text-gray-600 dark:text-gray-400 leading-relaxed">Descubram coisas novas um sobre o outro e riam muito no processo.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-blue-500/5 border-y border-gray-200 dark:border-gray-800" id="games">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-gray-900 dark:text-white [animation:fadeSlideIn_0.8s_ease-out_both] animate-on-scroll">
                    Mais do que organização:<br/>momentos divertidos
                </h2>
<p className="text-lg text-gray-600 dark:text-gray-400 font-light [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">Porque vocês merecem rir juntos todos os dias</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/10 transition-all [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="text-5xl mb-4">🤔</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-gray-900 dark:text-white">Quem é mais provável?</h3>
<p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">Descubram quem é mais provável de esquecer aniversário, dormir no sofá ou comer escondido.</p>
<button className="text-pink-500 dark:text-pink-400 font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all">
                        Jogar agora
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="text-5xl mb-4">⚡</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-gray-900 dark:text-white">Modo Treta</h3>
<p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">Resolvam debates importantes: pizza doce é crime? Abacaxi na pizza? Quem lava a louça?</p>
<button className="text-purple-500 dark:text-purple-400 font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all">
                        Começar debate
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="text-5xl mb-4">💯</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-gray-900 dark:text-white">Quiz de Compatibilidade</h3>
<p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">Testem o quanto vocês se conhecem com perguntas divertidas e reveladoras.</p>
<button className="text-blue-500 dark:text-blue-400 font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all">
                        Fazer quiz
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="depoimentos">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-gray-900 dark:text-white [animation:fadeSlideIn_0.8s_ease-out_both] animate-on-scroll">
                    Casais reais, histórias reais
                </h2>
<p className="text-lg text-gray-600 dark:text-gray-400 font-light [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">Nem sempre fácil, mas sempre juntos ❤️</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg transition-all [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="flex items-center gap-4 mb-6">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="font-semibold text-gray-900 dark:text-white">Ana &amp; Bruno</div>
<div className="text-sm text-gray-500 dark:text-gray-500">Juntos há 3 anos</div>
</div>
</div>
<p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">"Depois do Nós Dois, até nossas brigas ficaram mais engraçadas 😂"</p>
<div className="flex gap-1">
<span className="text-yellow-400">⭐</span>
<span className="text-yellow-400">⭐</span>
<span className="text-yellow-400">⭐</span>
<span className="text-yellow-400">⭐</span>
<span className="text-yellow-400">⭐</span>
</div>
</div>

<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg transition-all [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="flex items-center gap-4 mb-6">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="font-semibold text-gray-900 dark:text-white">Carlos &amp; Marina</div>
<div className="text-sm text-gray-500 dark:text-gray-500">Casados há 5 anos</div>
</div>
</div>
<p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">"Agora eu lembro das datas sem medo. Obrigado, app!"</p>
<div className="flex gap-1">
<span className="text-yellow-400">⭐</span>
<span className="text-yellow-400">⭐</span>
<span className="text-yellow-400">⭐</span>
<span className="text-yellow-400">⭐</span>
<span className="text-yellow-400">⭐</span>
</div>
</div>

<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg transition-all [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="flex items-center gap-4 mb-6">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="font-semibold text-gray-900 dark:text-white">Julia &amp; Pedro</div>
<div className="text-sm text-gray-500 dark:text-gray-500">Namorando há 2 anos</div>
</div>
</div>
<p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">"O peido virtual foi a melhor invenção da história dos apps 💨"</p>
<div className="flex gap-1">
<span className="text-yellow-400">⭐</span>
<span className="text-yellow-400">⭐</span>
<span className="text-yellow-400">⭐</span>
<span className="text-yellow-400">⭐</span>
<span className="text-yellow-400">⭐</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 leading-[1.1] text-gray-900 dark:text-white [animation:fadeSlideIn_0.8s_ease-out_both] animate-on-scroll">
                É só entre vocês dois —<br/>e isso é o melhor do mundo
            </h2>
<p className="text-xl text-gray-600 dark:text-gray-400 mb-10 font-light [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">Um app pra rir, reclamar e amar</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium px-8 py-4 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center">
                    Baixar Agora
                    <i className="w-5 h-5" data-lucide="download"></i>
</button>
<button className="border-2 border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white font-medium px-8 py-4 rounded-xl hover:border-gray-400 dark:hover:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all w-full sm:w-auto">
                    Ver Demo
                </button>
</div>
</div>
</section>

<footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-12 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl w-9 h-9 flex items-center justify-center">
<span className="text-white text-lg font-semibold" style={{letterSpacing: '-0.03em'}}>ND</span>
</div>
<span className="text-lg font-semibold tracking-tight">Nós Dois</span>
</div>
<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Um espaço digital só de vocês dois para organizar, rir e amar.</p>
</div>
<div>
<h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Produto</h4>
<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
<li><a className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors" href="#">Funcionalidades</a></li>
<li><a className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors" href="#">Mini Games</a></li>
<li><a className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors" href="#">Preços</a></li>
<li><a className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Empresa</h4>
<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
<li><a className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors" href="#">Sobre</a></li>
<li><a className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors" href="#">Contato</a></li>
<li><a className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors" href="#">Carreiras</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Legal</h4>
<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
<li><a className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors" href="#">Privacidade</a></li>
<li><a className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors" href="#">Termos de Uso</a></li>
<li><a className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors" href="#">Cookies</a></li>
<li><a className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors" href="#">Licenças</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-gray-600 dark:text-gray-400">© 2024 Nós Dois. Feito com ❤️ para casais reais.</p>
<div className="flex items-center gap-4">
<a className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors" href="#">
<i className="w-4 h-4 text-gray-600 dark:text-gray-400" data-lucide="instagram"></i>
</a>
<a className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors" href="#">
<i className="w-4 h-4 text-gray-600 dark:text-gray-400" data-lucide="twitter"></i>
</a>
<a className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors" href="#">
<i className="w-4 h-4 text-gray-600 dark:text-gray-400" data-lucide="facebook"></i>
</a>
<a className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors" href="#">
<i className="w-4 h-4 text-gray-600 dark:text-gray-400" data-lucide="mail"></i>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
