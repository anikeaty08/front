import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Simple smooth reveal on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-bg"></div>

<div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#1e293b] blur-[120px] opacity-40 pointer-events-none"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-[#D9F99D] blur-[150px] opacity-[0.08] pointer-events-none"></div>

<nav className="fixed w-full z-40 top-0 border-b border-white/5 backdrop-blur-md bg-[#020408]/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="display-font text-xl font-bold tracking-tighter text-white flex items-center gap-2" href="#">
<span className="w-2 h-2 bg-[#D9F99D] rounded-full animate-pulse"></span>
                NIUCO
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-[#D9F99D] transition-colors" href="#solutions">Plataforma IDM</a>
<a className="hover:text-[#D9F99D] transition-colors" href="#features">Governança (IGA)</a>
<a className="hover:text-[#D9F99D] transition-colors" href="#enterprise">Enterprise</a>
</div>
<a className="hidden md:block text-xs font-semibold tracking-wide uppercase border border-white/10 px-4 py-2 rounded hover:bg-white hover:text-black transition-all duration-300" href="#demo">
                Falar com Especialista
            </a>
</div>
</nav>
<main className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 grid-bg -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col gap-8 animate-enter">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9F99D] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#D9F99D]"></span>
</span>
<span className="text-xs font-medium tracking-wide text-[#D9F99D] uppercase">Nova geração de Segurança</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">
                    Identidade é o novo <br/>
<span className="text-white italic font-light">perímetro.</span>
</h1>
<p className="text-lg text-slate-400 max-w-xl font-light leading-relaxed">
                    Automatize o ciclo de vida de identidades (IDM) e garanta conformidade contínua (IGA). Governança sem atrito para empresas modernas.
                </p>
<div className="flex items-center gap-6 pt-4">
<div className="flex flex-col gap-1">
<span className="text-3xl font-bold text-white display-font">100%</span>
<span className="text-xs text-slate-500 uppercase tracking-wider">Visibilidade</span>
</div>
<div className="w-px h-12 bg-white/10"></div>
<div className="flex flex-col gap-1">
<span className="text-3xl font-bold text-white display-font">0s</span>
<span className="text-xs text-slate-500 uppercase tracking-wider">Provisionamento</span>
</div>
</div>
</div>

<div className="relative animate-enter delay-200">

<div className="absolute -inset-1 bg-gradient-to-r from-[#D9F99D] to-[#2DD4BF] rounded-lg opacity-20 blur-lg"></div>
<div className="relative bg-[#0A0F1A] border border-white/10 p-8 rounded-lg shadow-2xl backdrop-blur-xl">
<div className="mb-8">
<h3 className="text-xl font-semibold text-white mb-2">Agende uma demo técnica</h3>
<p className="text-sm text-slate-400">Descubra como a Niuco elimina riscos de acesso.</p>
</div>
<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-4">
<div className="relative input-group">
<input className="peer w-full bg-transparent border-b border-slate-700 py-2 text-white placeholder-transparent focus:outline-none focus:border-[#D9F99D] transition-colors" id="name" placeholder="Nome" type="text"/>
<label className="absolute left-0 top-2 text-slate-500 text-sm transition-all cursor-text" htmlFor="name">Nome</label>
</div>
<div className="relative input-group">
<input className="peer w-full bg-transparent border-b border-slate-700 py-2 text-white placeholder-transparent focus:outline-none focus:border-[#D9F99D] transition-colors" id="surname" placeholder="Sobrenome" type="text"/>
<label className="absolute left-0 top-2 text-slate-500 text-sm transition-all cursor-text" htmlFor="surname">Sobrenome</label>
</div>
</div>
<div className="relative input-group">
<input className="peer w-full bg-transparent border-b border-slate-700 py-2 text-white placeholder-transparent focus:outline-none focus:border-[#D9F99D] transition-colors" id="email" placeholder="Email Corporativo" type="email"/>
<label className="absolute left-0 top-2 text-slate-500 text-sm transition-all cursor-text" htmlFor="email">Email Corporativo</label>
</div>
<div className="relative input-group">
<select className="peer w-full bg-transparent border-b border-slate-700 py-2 text-white focus:outline-none focus:border-[#D9F99D] transition-colors appearance-none" id="role">
<option className="bg-[#0A0F1A]" disabled="" selected="" value="">Selecione o desafio</option>
<option className="bg-[#0A0F1A]" value="iga">Governança e Compliance (IGA)</option>
<option className="bg-[#0A0F1A]" value="idm">Gestão de Acessos (IDM)</option>
<option className="bg-[#0A0F1A]" value="pam">Privileged Access (PAM)</option>
</select>
<i className="absolute right-0 top-2 w-4 h-4 text-slate-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>

<label className="flex items-start gap-3 cursor-pointer group">
<input className="hidden peer" type="checkbox"/>
<div className="mt-1">
<div className="w-4 h-4 border border-slate-600 rounded flex items-center justify-center custom-check group-hover:border-slate-400 transition-colors">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
</div>
<span className="text-xs text-slate-500 leading-relaxed">Concordo em receber comunicações sobre segurança e identidade. Posso cancelar a qualquer momento.</span>
</label>
<button className="w-full group relative overflow-hidden rounded bg-white px-4 py-3 text-sm font-semibold text-black transition-all hover:bg-[#D9F99D]" type="submit">
<span className="relative z-10 flex items-center justify-center gap-2">
                                Solicitar Acesso
                                <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
</button>
</form>
</div>
</div>
</div>

<div className="mt-24 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-10">
<p className="text-center text-xs font-medium text-slate-600 uppercase tracking-[0.2em] mb-8">Trust Engine Active For</p>
<div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-40 grayscale mix-blend-screen">

<span className="display-font font-bold text-xl tracking-tighter">VERTEX</span>
<span className="display-font font-bold text-xl tracking-tighter">ACME CORP</span>
<span className="display-font font-bold text-xl tracking-tighter">NEXUS</span>
<span className="display-font font-bold text-xl tracking-tighter">GLOBAL BANK</span>
<span className="display-font font-bold text-xl tracking-tighter">STRATOS</span>
</div>
</div>
</div>
</main>

<section className="py-24 relative bg-[#020408]" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-6 rounded-lg border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 animate-enter delay-300">
<div className="w-10 h-10 rounded bg-[#D9F99D]/10 flex items-center justify-center mb-4 text-[#D9F99D] group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<h4 className="text-lg font-medium text-white mb-2">IGA Inteligente</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                        Recertificações de acesso automatizadas. Elimine o "rubber stamping" com análises de risco baseadas em contexto.
                    </p>
</div>

<div className="group p-6 rounded-lg border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 animate-enter delay-400">
<div className="w-10 h-10 rounded bg-teal-400/10 flex items-center justify-center mb-4 text-teal-400 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="refresh-cw"></i>
</div>
<h4 className="text-lg font-medium text-white mb-2">Lifecycle Automation</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                        Onboarding e offboarding zero-touch. Conecte RH e TI para provisionamento instantâneo em todas as aplicações.
                    </p>
</div>

<div className="group p-6 rounded-lg border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 animate-enter delay-500">
<div className="w-10 h-10 rounded bg-indigo-400/10 flex items-center justify-center mb-4 text-indigo-400 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="fingerprint"></i>
</div>
<h4 className="text-lg font-medium text-white mb-2">Auditoria Contínua</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                        Esteja sempre pronto para auditorias (SOX, LGPD, GDPR). Logs imutáveis e relatórios granulares em tempo real.
                    </p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020408] py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="display-font text-lg font-bold tracking-tighter text-white">NIUCO</span>
<span className="text-xs text-slate-600 px-2 py-0.5 rounded border border-white/5">v2.4.0</span>
</div>
<div className="text-xs text-slate-500">
                © 2024 Niuco Technologies. Segurança em primeiro lugar.
            </div>
</div>
</footer>


    </>
  );
}
