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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



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
      

<header className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="text-2xl font-semibold tracking-tighter text-white" href="#">
                    ZOUTI
                </a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Produtos</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Soluções</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Tarifas</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Desenvolvedores</a>
</nav>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-white hover:text-neutral-300 transition-colors" href="#">Entrar</a>
<a className="text-sm font-medium bg-[#D4FF00] text-black px-5 py-2.5 rounded-full hover:bg-[#bce600] transition-all transform hover:scale-105" href="#">
                    Criar conta
                </a>
</div>
<button className="md:hidden text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</header>

<main className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[#D4FF00] opacity-[0.07] blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-16">

<div className="flex-1 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
<span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse"></span>
<span className="text-xs font-medium text-neutral-300">Nova API de Checkout disponível</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                    A infraestrutura que <span className="text-[#D4FF00]">converte mais.</span>
</h1>
<p className="text-lg lg:text-xl text-neutral-400 mb-10 max-w-xl mx-auto lg:mx-0 font-normal">
                    Maximize suas vendas com a tecnologia financeira mais robusta do Brasil. Pix, Cartão de Crédito e Boleto em um checkout projetado para alta conversão.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<a className="w-full sm:w-auto text-base font-medium bg-[#D4FF00] text-black px-8 py-4 rounded-full hover:bg-[#bce600] transition-all transform hover:scale-105 text-center flex items-center justify-center gap-2" href="#">
                        Comece agora
                        <iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto text-base font-medium bg-transparent text-white border border-white/20 px-8 py-4 rounded-full hover:bg-white/5 transition-colors text-center" href="#">
                        Falar com vendas
                    </a>
</div>
</div>

<div className="flex-1 w-full max-w-lg relative perspective-[1000px]">
<div className="relative bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-2xl p-6 transform rotate-y-[-5deg] rotate-x-[5deg] transition-transform duration-700 hover:rotate-y-0 hover:rotate-x-0" style={{boxShadow: '0 25px 50px -12px rgba(212, 255, 0, 0.1)'}}>
<div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
<div className="text-base font-medium tracking-tight">Checkout Segurio</div>
<iconify-icon className="text-neutral-500" icon="solar:lock-password-linear" width="20"></iconify-icon>
</div>
<div className="space-y-4 mb-6">
<div className="h-12 w-full bg-white/5 rounded-lg border border-white/5 flex items-center px-4">
<span className="text-sm text-neutral-500 font-medium">Nome no cartão</span>
</div>
<div className="h-12 w-full bg-white/5 rounded-lg border border-white/5 flex items-center px-4 justify-between">
<span className="text-sm text-neutral-500 font-medium">**** **** **** 4242</span>
<div className="flex gap-1">
<div className="w-6 h-4 bg-white/20 rounded-sm"></div>
<div className="w-6 h-4 bg-white/10 rounded-sm"></div>
</div>
</div>
<div className="flex gap-4">
<div className="h-12 w-1/2 bg-white/5 rounded-lg border border-white/5 flex items-center px-4">
<span className="text-sm text-neutral-500 font-medium">MM/AA</span>
</div>
<div className="h-12 w-1/2 bg-white/5 rounded-lg border border-white/5 flex items-center px-4">
<span className="text-sm text-neutral-500 font-medium">CVC</span>
</div>
</div>
</div>
<div className="flex items-center justify-between mb-6 text-sm">
<span className="text-neutral-400">Total a pagar</span>
<span className="text-xl font-semibold tracking-tight text-white">R$ 1.250,00</span>
</div>
<button className="w-full bg-[#D4FF00] text-black text-sm font-medium py-4 rounded-xl flex items-center justify-center gap-2">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
                        Confirmar Pagamento
                    </button>
</div>

<div className="absolute -right-8 -bottom-8 bg-[#1a1a1a] border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-10 h-10 rounded-full bg-[#D4FF00]/20 flex items-center justify-center text-[#D4FF00]">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-neutral-400 mb-1">Aprovação Pix</div>
<div className="text-sm font-medium tracking-tight text-white">0.3 segundos</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-10 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-neutral-500 uppercase tracking-widest mb-8">Empresas que escalam com a Zouti</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">

<span className="text-xl font-semibold tracking-tighter">ACME CORP</span>
<span className="text-xl font-semibold tracking-tighter">GLOBEX</span>
<span className="text-xl font-semibold tracking-tighter">SOYUZ</span>
<span className="text-xl font-semibold tracking-tighter">INITECH</span>
<span className="text-xl font-semibold tracking-tighter">UMBRELLA</span>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6">
                    Tudo que sua operação precisa para crescer sem limites
                </h2>
<p className="text-base text-neutral-400">
                    Construímos ferramentas poderosas para simplificar sua gestão financeira e aumentar suas taxas de aprovação, tudo em uma única plataforma.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#111111] border border-white/5 rounded-2xl p-8 hover:border-[#D4FF00]/30 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover:text-[#D4FF00] group-hover:bg-[#D4FF00]/10 transition-colors">
<iconify-icon icon="solar:card-transfer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Checkout Transparente</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Mantenha seu cliente no seu ambiente. Um checkout otimizado, rápido e focado em converter a venda sem redirecionamentos.
                    </p>
</div>

<div className="bg-[#111111] border border-white/5 rounded-2xl p-8 hover:border-[#D4FF00]/30 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover:text-[#D4FF00] group-hover:bg-[#D4FF00]/10 transition-colors">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Antifraude Inteligente</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Motor de análise comportamental e machine learning que aprova mais transações legítimas e bloqueia fraudes em milissegundos.
                    </p>
</div>

<div className="bg-[#111111] border border-white/5 rounded-2xl p-8 hover:border-[#D4FF00]/30 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover:text-[#D4FF00] group-hover:bg-[#D4FF00]/10 transition-colors">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Dashboard em Tempo Real</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Acompanhe suas métricas de vendas, conversão, chargebacks e extrato financeiro com clareza e precisão.
                    </p>
</div>

<div className="bg-[#111111] border border-white/5 rounded-2xl p-8 hover:border-[#D4FF00]/30 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover:text-[#D4FF00] group-hover:bg-[#D4FF00]/10 transition-colors">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Split de Pagamentos</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Divida recebíveis automaticamente entre múltiplos recebedores. Ideal para marketplaces, coprodutores e afiliados.
                    </p>
</div>

<div className="bg-[#111111] border border-white/5 rounded-2xl p-8 hover:border-[#D4FF00]/30 transition-colors group lg:col-span-2 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
<div className="flex-1 z-10">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover:text-[#D4FF00] group-hover:bg-[#D4FF00]/10 transition-colors">
<iconify-icon icon="solar:code-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Integração feita para Desenvolvedores</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">
                            Documentação clara, webhooks confiáveis e SDKs para as principais linguagens. Crie sua solução de pagamentos em horas, não semanas.
                        </p>
<a className="text-sm font-medium text-[#D4FF00] flex items-center gap-2 hover:underline underline-offset-4" href="#">
                            Ver documentação API
                            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="w-full md:w-1/2 bg-[#050505] rounded-xl border border-white/10 p-4 font-mono text-xs text-neutral-300 leading-relaxed z-10 shadow-inner">
<span className="text-pink-400">const</span> <span className="text-blue-400">zouti</span> = <span className="text-pink-400">new</span> <span className="text-yellow-200">Zouti</span>(<span className="text-green-300">'sk_live_...'</span>);<br/><br/>
<span className="text-pink-400">const</span> <span className="text-blue-400">charge</span> = <span className="text-pink-400">await</span> zouti.charges.<span className="text-yellow-200">create</span>({<br/>
                          amount: <span className="text-orange-300">125000</span>, <span className="text-neutral-500">// R$ 1.250,00</span><br/>
                          currency: <span className="text-green-300">'BRL'</span>,<br/>
                          payment_method: <span className="text-green-300">'pix'</span>,<br/>
                          customer: {<br/>
                            email: <span className="text-green-300">'cliente@email.com'</span><br/>
                          }<br/>
                        });<br/><br/>
<span className="text-blue-400">console</span>.<span className="text-yellow-200">log</span>(charge.qr_code_url);
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden border-t border-white/5">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#D4FF00]/5 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
                Pronto para revolucionar seus pagamentos?
            </h2>
<p className="text-base lg:text-lg text-neutral-400 mb-10">
                Junte-se a milhares de empresas que confiam na Zouti para processar suas vendas diariamente com segurança e estabilidade.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto text-base font-medium bg-[#D4FF00] text-black px-8 py-4 rounded-full hover:bg-[#bce600] transition-all transform hover:scale-105" href="#">
                    Criar conta gratuitamente
                </a>
</div>
</div>
</section>

<footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
<div className="lg:col-span-2">
<a className="text-2xl font-semibold tracking-tighter text-white mb-6 block" href="#">
                        ZOUTI
                    </a>
<p className="text-sm text-neutral-400 mb-6 max-w-sm leading-relaxed">
                        A infraestrutura financeira definitiva para o seu negócio digital decolar. Pix, Cartão e Boleto com a melhor taxa de conversão do mercado.
                    </p>
<div className="flex items-center gap-4 text-neutral-400">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:map-arrow-square-linear" width="24"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="24"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:phone-linear" width="24"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-white mb-6 uppercase">Produtos</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-[#D4FF00] transition-colors" href="#">Checkout</a></li>
<li><a className="hover:text-[#D4FF00] transition-colors" href="#">Links de Pagamento</a></li>
<li><a className="hover:text-[#D4FF00] transition-colors" href="#">Split de Recebíveis</a></li>
<li><a className="hover:text-[#D4FF00] transition-colors" href="#">Antifraude</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-white mb-6 uppercase">Desenvolvedores</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-[#D4FF00] transition-colors" href="#">Documentação da API</a></li>
<li><a className="hover:text-[#D4FF00] transition-colors" href="#">Bibliotecas e SDKs</a></li>
<li><a className="hover:text-[#D4FF00] transition-colors" href="#">Status do Sistema</a></li>
<li><a className="hover:text-[#D4FF00] transition-colors" href="#">Github</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-white mb-6 uppercase">Empresa</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-[#D4FF00] transition-colors" href="#">Sobre nós</a></li>
<li><a className="hover:text-[#D4FF00] transition-colors" href="#">Carreiras</a></li>
<li><a className="hover:text-[#D4FF00] transition-colors" href="#">Termos de Uso</a></li>
<li><a className="hover:text-[#D4FF00] transition-colors" href="#">Privacidade</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-500">
                    © 2023 Zouti Instituição de Pagamento S.A. Todos os direitos reservados.
                </p>
<div className="flex items-center gap-4 opacity-50">
<iconify-icon className="text-white" icon="solar:shield-check-linear" width="20"></iconify-icon>
<span className="text-xs text-white font-medium">PCI DSS Compliant</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
