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



        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const links = document.querySelectorAll('.mobile-link');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            const isExpanded = !menu.classList.contains('hidden');
            btn.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when a link is clicked
        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                btn.setAttribute('aria-expanded', 'false');
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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
<a className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2 z-50" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-violet-500/20">
<span className="iconify" data-icon="lucide:hexagon" data-width="18" style={{strokeWidth: '2.5'}}></span>
</div>
                unimor.
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-violet-600 transition-colors" href="#solucoes">Soluções</a>
<a className="hover:text-violet-600 transition-colors" href="#sobre">A Empresa</a>
<a className="hover:text-violet-600 transition-colors" href="#depoimentos">Clientes</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-all duration-300 bg-slate-900 rounded-full hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900" href="#contato">
                Falar com especialista
            </a>

<button className="md:hidden p-2 text-slate-600 hover:text-violet-600 transition-colors z-50 relative group" id="mobile-menu-btn">
<span className="iconify group-aria-expanded:hidden" data-icon="lucide:menu" data-width="24"></span>
<span className="iconify hidden group-aria-expanded:block" data-icon="lucide:x" data-width="24"></span>
</button>
</div>

<div className="hidden md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-100 shadow-xl py-6 px-6" id="mobile-menu">
<div className="flex flex-col gap-4 text-base font-medium text-slate-600">
<a className="mobile-link py-2 border-b border-slate-50 hover:text-violet-600 hover:pl-2 transition-all" href="#solucoes">Soluções</a>
<a className="mobile-link py-2 border-b border-slate-50 hover:text-violet-600 hover:pl-2 transition-all" href="#sobre">A Empresa</a>
<a className="mobile-link py-2 border-b border-slate-50 hover:text-violet-600 hover:pl-2 transition-all" href="#depoimentos">Clientes</a>
<a className="mobile-link mt-4 inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-violet-600 shadow-lg shadow-slate-200/50" href="#contato">
                    Falar com especialista
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute top-[-10%] right-[20%] w-[500px] h-[500px] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-8 left-[30%] w-[500px] h-[500px] bg-pink-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
</div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-violet-100 text-violet-700 text-xs font-medium mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
                Nova plataforma de gestão fiscal disponível
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
                Contabilidade moderna para <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 animate-gradient">o futuro.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Simplifique a burocracia financeira com nossa tecnologia de ponta e consultoria humana. Mais tempo para o que realmente importa: o seu negócio.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-gradient-to-r from-slate-900 to-slate-800 rounded-full hover:from-violet-600 hover:to-blue-600 transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-violet-500/25 flex items-center justify-center gap-2 group" href="#contato">
                    Começar agora
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center shadow-sm hover:shadow-md" href="#solucoes">
                    Ver soluções
                </a>
</div>

<div className="mt-20 relative max-w-5xl mx-auto group">
<div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="relative rounded-xl bg-white p-2 shadow-2xl ring-1 ring-slate-900/5">
<img alt="Dashboard e Analytics" className="rounded-lg shadow-inner w-full h-auto object-cover aspect-[2/1] opacity-95" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=2400&amp;q=80"/>

<div className="absolute -bottom-6 -right-6 hidden md:flex items-center gap-3 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="20"></span>
</div>
<div>
<p className="text-xs text-slate-500 font-medium">Situação Fiscal</p>
<p className="text-sm font-bold text-slate-900">Regularizada</p>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-10 border-y border-slate-200/60 bg-white/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Empresas que confiam na Unimor</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-1"><span className="iconify" data-icon="lucide:box" data-width="24"></span>ACME Corp</span>
<span className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-1"><span className="iconify" data-icon="lucide:globe" data-width="24"></span>GlobalTech</span>
<span className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-1"><span className="iconify" data-icon="lucide:layers" data-width="24"></span>StarkInd</span>
<span className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-1"><span className="iconify" data-icon="lucide:zap" data-width="24"></span>BoltInc</span>
<span className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-1"><span className="iconify" data-icon="lucide:activity" data-width="24"></span>Pulse</span>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="solucoes">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
<div className="lg:w-1/2 order-2 lg:order-1">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-violet-200 to-blue-200 rounded-2xl transform rotate-3 scale-105 opacity-50"></div>
<img alt="Equipe em reunião" className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute top-8 -left-8 bg-white p-5 rounded-xl shadow-xl border border-slate-100 max-w-[200px] hidden md:block">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-500 font-medium">Economia anual</span>
<span className="iconify text-green-500" data-icon="lucide:trending-up" data-width="16"></span>
</div>
<div className="text-2xl font-bold text-slate-900 tracking-tight">R$ 42k</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
<div className="bg-green-500 h-full rounded-full" style={{width: '75%'}}></div>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2 order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-xs font-medium mb-6">
<span className="iconify" data-icon="lucide:sparkles" data-width="14"></span>
                        Soluções Completas
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                        Tudo o que você precisa para crescer com segurança.
                    </h2>
<p className="text-slate-500 leading-relaxed mb-10 text-lg">
                        Deixe a complexidade conosco. Nossa equipe de especialistas garante que sua empresa esteja sempre em dia com o fisco, enquanto você foca no crescimento.
                    </p>
<div className="space-y-6">
<div className="flex gap-4 group">
<div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 shrink-0 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:calculator" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Contabilidade Digital</h3>
<p className="text-sm text-slate-500 leading-relaxed">Balancetes em tempo real e integração bancária automática.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:users" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Gestão de Pessoal</h3>
<p className="text-sm text-slate-500 leading-relaxed">Folha de pagamento e benefícios processados sem erros.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Consultoria Tributária</h3>
<p className="text-sm text-slate-500 leading-relaxed">Planejamento para reduzir legalmente sua carga tributária.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-500 via-slate-900 to-slate-900"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
<div className="p-4">
<div className="text-4xl md:text-5xl font-semibold mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">500+</div>
<div className="text-sm text-slate-400 font-medium">Clientes Ativos</div>
</div>
<div className="p-4">
<div className="text-4xl md:text-5xl font-semibold mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">R$ 2M</div>
<div className="text-sm text-slate-400 font-medium">Economizados</div>
</div>
<div className="p-4">
<div className="text-4xl md:text-5xl font-semibold mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">12h</div>
<div className="text-sm text-slate-400 font-medium">Suporte Médio</div>
</div>
<div className="p-4">
<div className="text-4xl md:text-5xl font-semibold mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">100%</div>
<div className="text-sm text-slate-400 font-medium">Digital</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative" id="contato">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-violet-50/50 via-blue-50/30 to-transparent pointer-events-none"></div>
<div className="flex flex-col lg:flex-row gap-16 relative z-10">

<div className="lg:w-1/3 flex flex-col justify-between">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
                                Vamos conversar?
                            </h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                                Tem alguma dúvida sobre como podemos ajudar sua empresa? Preencha o formulário e nossa equipe entrará em contato em até 24h.
                            </p>
<div className="space-y-6">
<div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
<div className="mt-1 w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 shrink-0">
<span className="iconify" data-icon="lucide:mail" data-width="18"></span>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Email</h4>
<a className="text-sm text-slate-500 hover:text-violet-600 transition-colors" href="mailto:contato@unimor.com.br">contato@unimor.com.br</a>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
<div className="mt-1 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
<span className="iconify" data-icon="lucide:phone" data-width="18"></span>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">WhatsApp</h4>
<p className="text-sm text-slate-500">(11) 99999-8888</p>
</div>
</div>
</div>
</div>
<div className="mt-10 lg:mt-0">
<p className="text-xs font-medium text-slate-400 mb-3">CONECTE-SE</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-violet-600 hover:text-white transition-all duration-300" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18"></span>
</a>
<a className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all duration-300" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="18"></span>
</a>
<a className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-400 hover:text-white transition-all duration-300" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
</div>
</div>
</div>

<div className="lg:w-2/3">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide" htmlFor="name">Nome completo</label>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all hover:bg-slate-50" id="name" placeholder="João Silva" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide" htmlFor="email">Email corporativo</label>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all hover:bg-slate-50" id="email" placeholder="joao@empresa.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide" htmlFor="company">Empresa</label>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all hover:bg-slate-50" id="company" placeholder="Sua Empresa Ltda" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide" htmlFor="segment">Segmento</label>
<div className="relative">
<select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all hover:bg-slate-50 appearance-none cursor-pointer" id="segment">
<option>Selecione uma opção</option>
<option>Serviços</option>
<option>Comércio</option>
<option>Indústria</option>
<option>Tech / Startup</option>
</select>
<span className="iconify absolute right-4 top-3.5 text-slate-400 pointer-events-none" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide" htmlFor="message">Mensagem</label>
<textarea className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all hover:bg-slate-50 resize-none" id="message" placeholder="Descreva brevemente sua necessidade..." rows="4"></textarea>
</div>
<div className="flex items-center justify-between pt-2">
<label className="flex items-center gap-3 cursor-pointer group select-none">
<div className="relative w-5 h-5">
<input className="peer appearance-none w-5 h-5 border border-slate-300 rounded bg-white checked:bg-violet-600 checked:border-violet-600 transition-colors cursor-pointer" type="checkbox"/>
<span className="iconify absolute top-0.5 left-0.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" data-icon="lucide:check" data-width="16"></span>
</div>
<span className="text-xs text-slate-500 group-hover:text-slate-700">Aceito a política de privacidade.</span>
</label>
<button className="px-6 py-3 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 flex items-center gap-2 transform active:scale-95" type="submit">
                                    Enviar mensagem
                                    <span className="iconify" data-icon="lucide:send" data-width="14"></span>
</button>
</div>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2 pr-8">
<a className="text-lg font-semibold tracking-tighter text-slate-900 flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:hexagon" data-width="14" style={{strokeWidth: '3'}}></span>
</div>
                        unimor.
                    </a>
<p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs">
                        Transformando a contabilidade em uma ferramenta de crescimento estratégico para o seu negócio.
                    </p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Empresa</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-violet-600 transition-colors" href="#">Sobre</a></li>
<li><a className="hover:text-violet-600 transition-colors" href="#">Carreiras</a></li>
<li><a className="hover:text-violet-600 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Serviços</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-violet-600 transition-colors" href="#">Contábil</a></li>
<li><a className="hover:text-violet-600 transition-colors" href="#">Fiscal</a></li>
<li><a className="hover:text-violet-600 transition-colors" href="#">Abertura de Empresa</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-violet-600 transition-colors" href="#">Privacidade</a></li>
<li><a className="hover:text-violet-600 transition-colors" href="#">Termos</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
<p>© 2023 Unimor Contabilidade. Todos os direitos reservados.</p>
<div className="flex items-center gap-1">
<span>Feito em São Paulo</span>
<span className="iconify text-red-500 animate-pulse" data-icon="lucide:heart" data-width="10"></span>
</div>
</div>
</div>
</footer>



    </>
  );
}
