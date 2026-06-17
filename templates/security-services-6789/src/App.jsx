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
      

<header className="bg-[#0B1120] text-white py-6 px-6 sticky top-0 z-50 border-b border-white/5">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:shield-linear" width="24"></iconify-icon>
</div>
<span className="text-2xl font-semibold tracking-tight">Jumper</span>
</div>
<nav className="hidden md:flex gap-10">
<a className="text-base text-white font-medium" href="#">Serviços</a>
<a className="text-base text-slate-400 hover:text-white transition-colors" href="#">Tecnologia</a>
<a className="text-base text-slate-400 hover:text-white transition-colors" href="#">Sobre</a>
<a className="text-base text-slate-400 hover:text-white transition-colors" href="#">Contato</a>
</nav>
<div>
<a className="hidden md:inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-base font-medium transition-colors" href="#">
                    Conhecer Soluções
                </a>
<button className="md:hidden text-slate-300">
<iconify-icon icon="solar:hamburger-menu-linear" width="32"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="bg-[#0B1120] pt-32 pb-32 px-6 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 mb-20">
<span className="text-blue-500 font-medium text-lg mb-6 block tracking-widest uppercase">4. Nossos Serviços</span>
<h1 className="text-5xl md:text-7xl text-white font-semibold tracking-tight mb-8">Nossos Serviços</h1>
<p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto">Soluções completas em segurança, facilities e monitoramento</p>
</div>

<div className="max-w-5xl mx-auto relative z-10">
<div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent z-10 rounded-3xl md:rounded-[2.5rem] pointer-events-none"></div>
<img alt="Dashboard de Monitoramento" className="w-full h-[300px] md:h-[450px] object-cover rounded-3xl md:rounded-[2.5rem] ring-1 ring-white/10 shadow-2xl" src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
</div>
</section>

<main className="py-32 px-6 bg-white flex-grow">
<div className="max-w-5xl mx-auto flex flex-col gap-32">

<div className="flex flex-col md:flex-row gap-12 md:gap-20 group">
<div className="md:w-5/12 shrink-0">
<div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 mb-8 shadow-sm group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
<iconify-icon icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Segurança Patrimonial</h2>
<p className="text-xl text-slate-500 leading-relaxed mb-10">Equipes especializadas em monitoramento, controle de acesso e vigilância</p>
<div className="overflow-hidden rounded-3xl shadow-sm ring-1 ring-slate-900/5">
<img alt="Segurança Patrimonial" className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1541888053303-3165b6f00ab9?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="md:w-7/12 flex flex-col pt-2">
<p className="text-lg text-slate-600 leading-relaxed mb-10">Oferecemos soluções completas de segurança patrimonial adaptadas às necessidades específicas de sua empresa. Nossas equipes especializadas realizam monitoramento contínuo, implementam sistemas avançados de controle de acesso, e executam vigilância estratégica de seus patrimônios. Utilizamos tecnologia de ponta como reconhecimento facial, biometria e sistemas de alarme inteligentes para garantir máxima proteção.</p>
<div className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100 mb-10">
<h3 className="text-lg font-semibold text-slate-900 mb-6 tracking-tight">Benefícios</h3>
<ul className="grid sm:grid-cols-2 gap-y-5 gap-x-6">
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Redução de 40% em incidentes de segurança</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Resposta imediata a situações de risco</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Integração com sistemas existentes</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Relatórios detalhados em tempo real</span></li>
</ul>
</div>
<div>
<a className="inline-flex items-center gap-3 text-blue-600 font-medium text-lg hover:text-blue-700 transition-colors" href="#">
                            Saiba Mais
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<hr className="border-slate-100"/>

<div className="flex flex-col md:flex-row gap-12 md:gap-20 group">
<div className="md:w-5/12 shrink-0">
<div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 mb-8 shadow-sm group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
<iconify-icon icon="solar:bolt-linear" width="32"></iconify-icon>
</div>
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Monitoramento 24/7</h2>
<p className="text-xl text-slate-500 leading-relaxed mb-10">Centro de Controle Operacional com operadores treinados e tecnologia de ponta</p>
<div className="overflow-hidden rounded-3xl shadow-sm ring-1 ring-slate-900/5">
<img alt="Monitoramento CCO" className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="md:w-7/12 flex flex-col pt-2">
<p className="text-lg text-slate-600 leading-relaxed mb-10">Nosso Centro de Controle Operacional (CCO) funciona ininterruptamente para monitorar seus patrimônios. Equipado com tecnologia de vigilância de alta resolução, sistemas de comunicação avançados e operadores altamente treinados, garantimos resposta rápida a qualquer situação. Cada operador passa por treinamento contínuo em protocolos de segurança, comunicação de crise e procedimentos de emergência.</p>
<div className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100 mb-10">
<h3 className="text-lg font-semibold text-slate-900 mb-6 tracking-tight">Benefícios</h3>
<ul className="grid sm:grid-cols-2 gap-y-5 gap-x-6">
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Monitoramento 24/7/365</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Operadores certificados e treinados</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Resposta em tempo real</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Integração com múltiplas câmeras e sensores</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Relatórios automáticos de incidentes</span></li>
</ul>
</div>
<div>
<a className="inline-flex items-center gap-3 text-blue-600 font-medium text-lg hover:text-blue-700 transition-colors" href="#">
                            Saiba Mais
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<hr className="border-slate-100"/>

<div className="flex flex-col md:flex-row gap-12 md:gap-20 group">
<div className="md:w-5/12 shrink-0">
<div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 mb-8 shadow-sm group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
<iconify-icon icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
</div>
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Facilities Integradas</h2>
<p className="text-xl text-slate-500 leading-relaxed mb-10">Limpeza, portaria, recepção, jardinagem e gestão completa</p>
<div className="overflow-hidden rounded-3xl shadow-sm ring-1 ring-slate-900/5">
<img alt="Facilities e Recepção" className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="md:w-7/12 flex flex-col pt-2">
<p className="text-lg text-slate-600 leading-relaxed mb-10">Oferecemos uma solução integrada de facilities que vai além da segurança. Gerenciamos limpeza profissional, portaria eficiente, recepção de excelência, jardinagem e paisagismo, além de manutenção predial. Tudo coordenado através de uma única gestão, reduzindo custos administrativos e garantindo consistência de qualidade em todos os serviços.</p>
<div className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100 mb-10">
<h3 className="text-lg font-semibold text-slate-900 mb-6 tracking-tight">Benefícios</h3>
<ul className="grid sm:grid-cols-2 gap-y-5 gap-x-6">
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Redução de até 20% em custos operacionais</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Gestão centralizada e simplificada</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Equipes multidisciplinares</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Padrão de qualidade uniforme</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Maior eficiência operacional</span></li>
</ul>
</div>
<div>
<a className="inline-flex items-center gap-3 text-blue-600 font-medium text-lg hover:text-blue-700 transition-colors" href="#">
                            Saiba Mais
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<hr className="border-slate-100"/>

<div className="flex flex-col md:flex-row gap-12 md:gap-20 group">
<div className="md:w-5/12 shrink-0">
<div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 mb-8 shadow-sm group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
<iconify-icon icon="solar:siren-rounded-linear" width="32"></iconify-icon>
</div>
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Ronda Motorizada</h2>
<p className="text-xl text-slate-500 leading-relaxed mb-10">Vigilância eficiente com veículos especializados em áreas de grande extensão</p>
<div className="overflow-hidden rounded-3xl shadow-sm ring-1 ring-slate-900/5">
<img alt="Ronda Motorizada" className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1510250689994-e0eb289748b6?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="md:w-7/12 flex flex-col pt-2">
<p className="text-lg text-slate-600 leading-relaxed mb-10">Para propriedades de grande extensão, oferecemos serviço de ronda motorizada com veículos especializados e equipados com tecnologia GPS, câmeras de vigilância e sistemas de comunicação integrados. Nossas equipes realizam patrulhas estratégicas, inspeções periódicas e resposta rápida a situações de risco em perímetros externos.</p>
<div className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100 mb-10">
<h3 className="text-lg font-semibold text-slate-900 mb-6 tracking-tight">Benefícios</h3>
<ul className="grid sm:grid-cols-2 gap-y-5 gap-x-6">
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Cobertura eficiente de grandes áreas</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Rastreamento em tempo real</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Resposta rápida a incidentes</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Documentação de rondas via GPS</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Redução de vulnerabilidades em perímetros</span></li>
</ul>
</div>
<div>
<a className="inline-flex items-center gap-3 text-blue-600 font-medium text-lg hover:text-blue-700 transition-colors" href="#">
                            Saiba Mais
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<hr className="border-slate-100"/>

<div className="flex flex-col md:flex-row gap-12 md:gap-20 group">
<div className="md:w-5/12 shrink-0">
<div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 mb-8 shadow-sm group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
<iconify-icon icon="solar:face-scan-linear" width="32"></iconify-icon>
</div>
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Controle de Acesso</h2>
<p className="text-xl text-slate-500 leading-relaxed mb-10">Sistemas de reconhecimento facial e controle biométrico avançado</p>
<div className="overflow-hidden rounded-3xl shadow-sm ring-1 ring-slate-900/5">
<img alt="Controle de Acesso Biométrico" className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="md:w-7/12 flex flex-col pt-2">
<p className="text-lg text-slate-600 leading-relaxed mb-10">Implementamos sistemas modernos de controle de acesso utilizando reconhecimento facial, leitura de impressão digital, cartões inteligentes e senhas dinâmicas. Esses sistemas garantem que apenas pessoas autorizadas acessem áreas restritas, com registro completo de entradas e saídas. Integrados ao App Jumper, permitem gestão remota e relatórios em tempo real.</p>
<div className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100 mb-10">
<h3 className="text-lg font-semibold text-slate-900 mb-6 tracking-tight">Benefícios</h3>
<ul className="grid sm:grid-cols-2 gap-y-5 gap-x-6">
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Precisão de 99,9% em identificação</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Acesso controlado e rastreável</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Integração com sistemas de segurança</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Relatórios detalhados de movimento</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Redução de acessos não autorizados</span></li>
</ul>
</div>
<div>
<a className="inline-flex items-center gap-3 text-blue-600 font-medium text-lg hover:text-blue-700 transition-colors" href="#">
                            Saiba Mais
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<hr className="border-slate-100"/>

<div className="flex flex-col md:flex-row gap-12 md:gap-20 group">
<div className="md:w-5/12 shrink-0">
<div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 mb-8 shadow-sm group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
<iconify-icon icon="solar:diploma-linear" width="32"></iconify-icon>
</div>
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Treinamento e Capacitação</h2>
<p className="text-xl text-slate-500 leading-relaxed mb-10">Programas especializados de aprimoramento contínuo para colaboradores</p>
<div className="overflow-hidden rounded-3xl shadow-sm ring-1 ring-slate-900/5">
<img alt="Treinamento de Equipe" className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="md:w-7/12 flex flex-col pt-2">
<p className="text-lg text-slate-600 leading-relaxed mb-10">Investimos continuamente na formação de nossos colaboradores através de programas especializados que cobrem desde defesa pessoal e técnicas de vigilância até atendimento ao público, comunicação de crise e protocolos de segurança. Todos os colaboradores passam por reciclagem periódica para manter os conhecimentos atualizados com as melhores práticas do mercado.</p>
<div className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100 mb-10">
<h3 className="text-lg font-semibold text-slate-900 mb-6 tracking-tight">Benefícios</h3>
<ul className="grid sm:grid-cols-2 gap-y-5 gap-x-6">
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Equipes altamente qualificadas</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Conhecimento atualizado de melhores práticas</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Redução de erros operacionais</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Maior profissionalismo</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon><span className="text-lg text-slate-600">Conformidade com regulamentações</span></li>
</ul>
</div>
<div>
<a className="inline-flex items-center gap-3 text-blue-600 font-medium text-lg hover:text-blue-700 transition-colors" href="#">
                            Saiba Mais
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</main>

<section className="bg-[#3b82f6] py-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl text-white font-semibold tracking-tight mb-8">Pronto para transformar sua segurança?</h2>
<p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">Solicite um diagnóstico gratuito e descubra como a Jumper Segurança pode elevar o nível de proteção e eficiência do seu patrimônio.</p>
<a className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-600 rounded-full font-medium text-lg hover:bg-slate-50 hover:scale-105 transition-all shadow-lg shadow-blue-900/20 mb-12" href="#">
                Agendar Consulta Gratuita 
                <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-blue-100 text-base">
<span className="flex items-center gap-2"><iconify-icon className="text-white border-2 border-white rounded-full p-0.5" icon="solar:check-linear" width="16"></iconify-icon> Diagnóstico completo</span>
<span className="flex items-center gap-2"><iconify-icon className="text-white border-2 border-white rounded-full p-0.5" icon="solar:check-linear" width="16"></iconify-icon> Estimativa de ROI</span>
<span className="flex items-center gap-2"><iconify-icon className="text-white border-2 border-white rounded-full p-0.5" icon="solar:check-linear" width="16"></iconify-icon> Sem compromisso</span>
</div>
</div>
</section>

<footer className="bg-[#0B1120] pt-24 pb-12 px-6 text-slate-400">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

<div className="lg:pr-8">
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:shield-linear" width="16"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-white">Jumper</span>
</div>
<p className="text-base leading-relaxed">Segurança, facilities e serviços patrimoniais com excelência. Com 14 anos de experiência, 15 mil colaboradores e presença em 5 estados, somos líderes em segurança inteligente no Brasil.</p>
</div>

<div>
<h4 className="text-white font-medium text-base mb-6">Empresa</h4>
<ul className="space-y-4">
<li><a className="text-base hover:text-white transition-colors" href="#">Sobre Nós</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Serviços</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Tecnologia</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Carreiras</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium text-base mb-6">Contato</h4>
<ul className="space-y-4">
<li className="text-base">(11) 2366-7941</li>
<li><a className="text-base hover:text-white transition-colors" href="mailto:contato@jumperseg.com.br">contato@jumperseg.com.br</a></li>
<li className="text-base">São Caetano do Sul - SP</li>
</ul>
</div>

<div>
<h4 className="text-white font-medium text-base mb-6">Redes Sociais</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors" href="#">
<iconify-icon icon="bxl:linkedin" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors" href="#">
<iconify-icon icon="bxl:instagram" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors" href="#">
<iconify-icon icon="bxl:facebook" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-800/50 text-sm">
<p>© 2024 Jumper Segurança. Todos os direitos reservados.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Políticas de Privacidade</a>
<a className="hover:text-white transition-colors" href="#">Termos de Serviço</a>
</div>
</div>
</footer>

    </>
  );
}
