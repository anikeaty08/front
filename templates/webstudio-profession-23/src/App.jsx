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



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
}
},
fontSize: {
'xxs': '0.65rem',
}
}
}
}

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
      

<header className="fixed top-0 inset-x-0 z-50 border-b backdrop-blur-md border-white/5 bg-gray-950/80">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-3">
<div className="flex items-center justify-center h-8 w-8 rounded bg-gradient-to-br from-blue-500/20 to-pink-500/20 border shadow-inner border-white/10">
<span className="text-sm font-semibold tracking-tighter text-white">W</span>
</div>
<span className="text-sm font-medium tracking-tight text-white">WebStudio</span>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-gray-400 hover:text-white" href="#como-funciona">Como funciona</a>
<a className="text-sm font-medium transition-colors text-gray-400 hover:text-white" href="#beneficios">Benefícios</a>
<a className="text-sm font-medium transition-colors text-gray-400 hover:text-white" href="#planos">Planos</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium transition-colors text-gray-400 hover:text-white" href="#faq">Dúvidas?</a>
<a className="inline-flex items-center justify-center h-8 px-4 rounded text-sm font-medium border transition-all shadow-sm shadow-blue-500/10 text-white bg-white/10 border-white/5 hover:bg-white/15 hover:border-white/10" href="#solicitar">
                        Começar Agora
                    </a>
</div>
</div>
</div>
</header>
<main className="relative pt-24 pb-16">

<section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px] opacity-30 animate-blob mix-blend-screen pointer-events-none bg-blue-600/20"></div>
<div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full blur-[80px] opacity-30 animate-blob animation-delay-2000 mix-blend-screen pointer-events-none bg-pink-600/10"></div>
<div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-medium tracking-tight text-blue-200">Vagas limitadas para este mês</span>
</div>
<div className="space-y-4">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-white">
                            Seu Site Profissional <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r animate-gradient from-blue-400 via-pink-400 to-blue-400">Sem Custo de Criação</span>
</h1>
<p className="text-lg sm:text-xl max-w-lg leading-relaxed text-gray-400">
                            Desenvolvemos seu site ou landing page gratuitamente. Você paga apenas pela hospedagem e manutenção quando estiver tudo pronto.
                        </p>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-md text-base font-semibold tracking-tight transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] bg-white text-gray-950 hover:bg-gray-200" href="#solicitar">
                            Quero meu site grátis
                        </a>
<div className="flex items-center gap-3 text-sm px-2 text-gray-400">
<div className="flex -space-x-2">
<div className="h-8 w-8 rounded-full border flex items-center justify-center text-xs border-gray-900 bg-gray-800 text-white">JD</div>
<div className="h-8 w-8 rounded-full border flex items-center justify-center text-xs border-gray-900 bg-gray-700 text-white">MA</div>
<div className="h-8 w-8 rounded-full border flex items-center justify-center text-xs border-gray-900 bg-gray-600 text-white">+50</div>
</div>
<span>projetos entregues</span>
</div>
</div>
<div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
<div>
<p className="text-2xl font-semibold tracking-tight text-white">15 dias</p>
<p className="text-sm text-gray-500 mt-1">Prazo médio de entrega</p>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight text-white">R$ 0,00</p>
<p className="text-sm text-gray-500 mt-1">Investimento inicial</p>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-pink-500/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
<div className="relative rounded-xl border backdrop-blur-xl p-6 sm:p-8 shadow-2xl border-white/10 bg-gray-900/90" id="solicitar">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-medium tracking-tight text-white">Solicitar Proposta</h3>
<svg className="text-neutral-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wider text-gray-400">Nome</label>
<input className="w-full border rounded-lg px-3 py-2.5 text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all bg-gray-950 border-white/10 text-white" placeholder="Seu nome" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wider text-gray-400">WhatsApp</label>
<input className="w-full border rounded-lg px-3 py-2.5 text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all bg-gray-950 border-white/10 text-white" placeholder="(00) 00000-0000" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wider text-gray-400">E-mail Corporativo</label>
<input className="w-full border rounded-lg px-3 py-2.5 text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all bg-gray-950 border-white/10 text-white" placeholder="voce@empresa.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wider text-gray-400">Objetivo do Site</label>
<select className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all appearance-none bg-gray-950 border-white/10 text-white">
<option>Vender serviços</option>
<option>Vender produtos</option>
<option>Capturar leads</option>
<option>Apresentação institucional</option>
</select>
</div>
<div className="pt-2">
<label className="flex items-start gap-3 cursor-pointer group/check">
<div className="relative flex items-center">
<input className="peer h-4 w-4 rounded border checked:bg-blue-500 checked:border-blue-500 transition-all appearance-none border-gray-600 bg-gray-900" type="checkbox"/>
<svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs text-gray-500 group-hover/check:text-gray-400 transition-colors">Concordo em receber o contato de um especialista via WhatsApp.</span>
</label>
</div>
<button className="w-full bg-gradient-to-r to-blue-500 hover:from-blue-500 font-medium text-sm py-3 rounded-lg shadow-lg shadow-blue-500/20 transition-all transform active:scale-[0.98] from-blue-600 hover:to-blue-400 text-white" type="submit">
                                Garantir Vaga Gratuita
                            </button>
<p className="text-center text-xs mt-2 text-gray-600">Sem spam. Seus dados estão seguros.</p>
</form>
</div>
</div>
</div>
</section>

<section className="border-y bg-white/[0.02] border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<p className="text-center text-sm font-medium text-gray-500 mb-8 tracking-wide">TECNOLOGIAS MODERNAS &amp; ALTA PERFORMANCE</p>
<div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5Z"></path><path d="m2 17 10 5 10-5"></path><path d="m2 12 10 5 10-5"></path></svg><span className="font-semibold tracking-tight text-white">Stax</span></div>
<div className="flex items-center gap-2"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span className="font-semibold tracking-tight text-white">Verified</span></div>
<div className="flex items-center gap-2"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg><span className="font-semibold tracking-tight text-white">Social</span></div>
<div className="flex items-center gap-2"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 3h12l4 6-10 13L2 9Z"></path><path d="M11 3 8 9l4 13 4-13-3-6"></path></svg><span className="font-semibold tracking-tight text-white">Gem</span></div>
<div className="flex items-center gap-2"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path></svg><span className="font-semibold tracking-tight text-white">Secure</span></div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="beneficios">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 text-white">Design Premium, Custo Zero</h2>
<p className="text-lg text-gray-400">Entregamos qualidade de agência sem cobrar taxas abusivas de desenvolvimento. Focamos no longo prazo.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-6 rounded-2xl border transition-all duration-300 bg-gray-900/50 border-white/5 hover:border-white/10 hover:bg-gray-900">
<div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="text-indigo-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</div>
<h3 className="text-lg font-medium mb-2 tracking-tight text-white">Design Exclusivo</h3>
<p className="text-base leading-relaxed text-gray-400">Layouts pensados para conversão e alinhados com a identidade visual da sua marca. Nada de templates genéricos.</p>
</div>

<div className="group p-6 rounded-2xl border transition-all duration-300 bg-gray-900/50 border-white/5 hover:border-white/10 hover:bg-gray-900">
<div className="h-10 w-10 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="text-purple-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="16" x="4" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-lg font-medium mb-2 tracking-tight text-white">100% Responsivo</h3>
<p className="text-base leading-relaxed text-gray-400">Seu site funcionará perfeitamente em celulares, tablets e computadores, garantindo a melhor experiência.</p>
</div>

<div className="group p-6 rounded-2xl border transition-all duration-300 bg-gray-900/50 border-white/5 hover:border-white/10 hover:bg-gray-900">
<div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="text-emerald-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
</div>
<h3 className="text-lg font-medium mb-2 tracking-tight text-white">Otimizado (SEO)</h3>
<p className="text-base leading-relaxed text-gray-400">Estrutura preparada para o Google, com carregamento rápido e boas práticas de desenvolvimento web.</p>
</div>
</div>
</section>

<section className="border-y py-20 border-white/5 bg-gray-900/20" id="como-funciona">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full opacity-20"></div>
<div className="relative rounded-xl border p-1 border-white/10 bg-gray-950">
<div className="rounded-lg border p-8 space-y-6 border-white/5 bg-gray-900">

<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-semibold text-white">1</div>
<div className="w-px h-full my-2 bg-white/10"></div>
</div>
<div className="pb-8">
<h4 className="font-medium text-lg text-white">Briefing Inicial</h4>
<p className="text-base mt-2 text-gray-400">Conversamos para entender seu negócio e objetivos.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-sm font-medium bg-gray-800 text-gray-400 border-gray-700">2</div>
<div className="w-px h-full my-2 bg-white/10"></div>
</div>
<div className="pb-8">
<h4 className="font-medium text-lg text-gray-200">Desenvolvimento</h4>
<p className="text-base mt-2 text-gray-400">Nossa equipe cria o layout e programa o site completo.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-sm font-medium bg-gray-800 text-gray-400 border-gray-700">3</div>
</div>
<div>
<h4 className="font-medium text-lg text-gray-200">Aprovação &amp; Publicação</h4>
<p className="text-base mt-2 text-gray-400">Você aprova e colocamos no ar em seu domínio.</p>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Como conseguimos fazer grátis?</h2>
<p className="text-lg leading-relaxed text-gray-300">
                            Apostamos na parceria de longo prazo. Em vez de cobrar R$ 3.000,00 na criação, diluímos nosso custo na mensalidade de manutenção. 
                        </p>
<p className="text-lg leading-relaxed text-gray-300">
                            Assim, você começa com um site profissional sem descapitalizar seu negócio, e nós ganhamos um cliente satisfeito e recorrente.
                        </p>
<ul className="space-y-3 pt-4">
<li className="flex items-center gap-3 text-base text-gray-300">
<svg className="w-5 h-5 shrink-0 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                Sem custo de setup ou adesão
                            </li>
<li className="flex items-center gap-3 text-base text-gray-300">
<svg className="w-5 h-5 shrink-0 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                Domínio e Hospedagem inclusos
                            </li>
<li className="flex items-center gap-3 text-base text-gray-300">
<svg className="w-5 h-5 shrink-0 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                Suporte técnico humanizado
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="planos">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 text-white">Planos Simples e Transparentes</h2>
<p className="text-lg text-gray-400">Escolha como prefere manter seu site no ar. A criação é grátis em ambos.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="relative rounded-2xl border p-8 flex flex-col transition-all bg-gray-900 border-white/5 hover:border-white/10">
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Plano Mensal</h3>
<p className="text-sm text-gray-500 mt-1">Flexibilidade total para seu negócio.</p>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight text-white">R$ 199</span>
<span className="text-gray-500">/mês</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-gray-300">
<svg className="w-5 h-5 text-neutral-500 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Criação do Site Inclusa
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<svg className="w-5 h-5 text-neutral-500 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Hospedagem Premium
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<svg className="w-5 h-5 text-neutral-500 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Manutenção Técnica
                        </li>
</ul>
<a className="w-full block text-center py-3 rounded-lg border text-sm font-medium transition-colors border-white/10 text-white hover:bg-white/5" href="#solicitar">
                        Selecionar Mensal
                    </a>
</div>

<div className="relative rounded-2xl border border-blue-500/30 p-8 flex flex-col shadow-2xl bg-gray-900/80 shadow-blue-900/10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg shadow-blue-500/40 text-white">
                        Mais Escolhido
                    </div>
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Plano Anual</h3>
<p className="text-sm mt-1 text-blue-200/60">Economia e tranquilidade por 12 meses.</p>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight text-white">R$ 149</span>
<span className="text-gray-500">/mês</span>
</div>
<p className="text-xs text-gray-500 mb-6 -mt-4">Cobrado parcelado no cartão ou à vista.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-white">
<svg className="w-5 h-5 shrink-0 text-indigo-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<svg className="w-5 h-5 shrink-0 text-indigo-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Criação Prioritária
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<svg className="w-5 h-5 shrink-0 text-indigo-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Suporte VIP via WhatsApp
                        </li>
</ul>
<a className="w-full block text-center py-3 rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20 bg-blue-600 text-white" href="#solicitar">
                        Selecionar Anual
                    </a>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5" id="faq">
<h2 className="text-2xl font-semibold tracking-tight mb-8 text-white">Perguntas Frequentes</h2>
<div className="space-y-4">
<details className="group border rounded-lg open:border-white/10 bg-gray-900 border-white/5">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-base font-medium text-gray-200">O site é realmente meu?</span>
<svg className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-4 pb-4 text-base leading-relaxed text-gray-400">
                        Sim! Após o período mínimo de fidelidade do contrato (12 meses), você pode migrar o site para qualquer outra hospedagem se desejar, levando todos os arquivos.
                    </div>
</details>
<details className="group border rounded-lg open:border-white/10 bg-gray-900 border-white/5">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-base font-medium text-gray-200">Quais tipos de site vocês criam?</span>
<svg className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-4 pb-4 text-base leading-relaxed text-gray-400">
                        Especializamos em Sites Institucionais, Landing Pages de alta conversão, Portfólios e Blogs. Não desenvolvemos E-commerces complexos (lojas virtuais com carrinho) nesta modalidade gratuita.
                    </div>
</details>
<details className="group border rounded-lg open:border-white/10 bg-gray-900 border-white/5">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-base font-medium text-gray-200">Tenho garantia?</span>
<svg className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-4 pb-4 text-base leading-relaxed text-gray-400">
                        Com certeza. Você só começa a pagar a mensalidade APÓS aprovar o design e ver o site funcionando. Se não gostar do resultado, não paga nada e cancelamos o projeto. Risco zero.
                    </div>
</details>
</div>
</section>
</main>
<footer className="border-t py-12 border-white/5 bg-gray-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded bg-blue-500/20 flex items-center justify-center border border-white/10">
<span className="text-xs font-bold text-white">W</span>
</div>
<span className="text-sm text-gray-400">© 2024 WebStudio. Todos os direitos reservados.</span>
</div>
<div className="flex gap-6">
<a className="text-sm text-gray-500 transition-colors hover:text-white" href="#">Termos</a>
<a className="text-sm text-gray-500 transition-colors hover:text-white" href="#">Privacidade</a>
<a className="text-sm text-gray-500 transition-colors hover:text-white" href="#">Contato</a>
</div>
</div>
</footer>

    </>
  );
}
