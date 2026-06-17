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



document.addEventListener("DOMContentLoaded", () => {
// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
});
});
// Animation on scroll
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.style.animationPlayState = 'running';
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.animate-on-scroll').forEach((el) => {
el.style.animationPlayState = 'paused';
observer.observe(el);
});
});



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
      

<div className="grid-overlay">
<div className="grid-inner">
<div className="grid-line-v"></div>
<div className="grid-line-v hidden md:block"></div>
<div className="grid-line-v hidden lg:block"></div>
<div className="grid-line-v"></div>
</div>
</div>

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
</div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4" style={{animation: 'animationIn 0.8s ease-out 0.1s both'}}>
<div className="border-subtle flex bg-black/90 w-full max-w-5xl border p-2 shadow-2xl backdrop-blur-xl items-center justify-between">
<a className="hover:bg-white/10 uppercase transition-all text-xs text-neutral-300 tracking-widest font-geist bg-white/5 pt-2 pr-5 pb-2 pl-5" href="#hero">Junior Mateus</a>
<div className="hidden md:flex items-center gap-1">
<a className="hover:text-white px-4 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-geist" href="#about">
                    Sobre
                </a>
<a className="hover:text-white px-4 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-geist" href="#innovations">
                    Inovações
                </a>
<a className="hover:text-white px-4 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-geist" href="#impact">
                    Impacto
                </a>
<a className="hover:text-white px-4 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-geist" href="#partnerships">
                    Parcerias
                </a>
</div>
<a className="group relative bg-brand-gradient hover:opacity-90 transition-all text-white px-6 py-2 text-xs font-semibold tracking-widest uppercase overflow-hidden rounded-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]" href="#contact">
<span className="font-geist z-10 relative">Contato</span>
</a>
</div>
</nav>

<section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden z-10 min-h-screen flex items-center" id="hero">
<div className="container mx-auto px-4 relative max-w-7xl">
<div className="flex flex-col text-center items-center justify-center">

<div className="group relative mb-8" style={{animation: 'animationIn 0.8s ease-out 0.2s both'}}>
<div className="beam-border"></div>
<div className="border-subtle flex group-hover:bg-[#0f0716] group-hover:border-purple-500/30 transition-all h-12 md:h-14 bg-[#080808] z-10 border rounded-full px-6 relative gap-x-4 items-center">
<div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_12px_rgba(168,85,247,0.8)]"></div>
<span className="md:text-sm uppercase text-xs text-neutral-300 tracking-widest font-geist">Soluções que geram impacto</span>
</div>
</div>

<h1 className="uppercase leading-[0.9] text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter font-space-grotesk mb-8" style={{animation: 'animationIn 0.8s ease-out 0.3s both'}}>
<span className="block font-light">Entusiasta &amp;</span>
<span className="text-gradient text-glow font-light">Criador de Soluções com IA</span>
</h1>

<p className="md:text-2xl text-lg text-neutral-300 tracking-tight font-space-grotesk max-w-3xl mb-6" style={{animation: 'animationIn 0.8s ease-out 0.4s both'}}>Construo produtos digitais de IA que resolvem problemas reais e escalam em diversos setores.</p>

<p className="text-sm md:text-base text-neutral-500 font-geist max-w-2xl mb-12" style={{animation: 'animationIn 0.8s ease-out 0.5s both'}}>
                    Da ideia à execução, meu foco é na clareza, usabilidade e impacto mensurável.
                </p>

<div className="flex flex-col sm:flex-row gap-4" style={{animation: 'animationIn 0.8s ease-out 0.6s both'}}>
<a className="group bg-brand-gradient text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 rounded-sm font-geist flex items-center gap-3" href="#innovations">
                        Ver Produto Principal
                        <iconify-icon className="" height="18" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-500/30 text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 rounded-sm font-geist hover-glow" href="#partnerships">
                        Seja um Parceiro
                    </a>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block" style={{animation: 'animationIn 0.8s ease-out 1s both'}}>
<div className="flex flex-col items-center gap-2 text-neutral-600">
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 border-subtle z-10 border-t pt-24 pb-24 relative" id="about">
<div className="container mx-auto px-4 max-w-6xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="animate-on-scroll" style={{animation: '0.8s ease-out 0s 1 normal both paused animationIn'}}>
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
<span className="text-[10px] uppercase tracking-widest text-purple-400 font-geist">Sobre</span>
</div>
<h2 className="text-4xl md:text-5xl uppercase text-white tracking-tighter font-space-grotesk font-light mb-8">
                        Desenvolvimento de IA
                        <span className="block text-neutral-600">QUE GERA IMPACTO</span>
</h2>
<div className="space-y-6 text-neutral-400 font-geist leading-relaxed">
<p className="">Sou <span className="font-medium text-white">Junior Mateus</span> — entusiasta em IA e criador de produtos digitais focada em desenvolver produtos de IA aplicada com usuários reais e resultados concretos.</p>
<p className="">Meu trabalho é centrado na execução. Transformo desafios complexos em soluções digitais claras e utilizáveis, impulsionadas por IA. Cada produto é projetado visando escalabilidade, adoção e valor a longo prazo.</p>
<p className="">Foco em construir soluções prontas para produção que ajudam empresas a crescer e escalar sua operação.</p>
</div>
</div>

<div className="animate-on-scroll" style={{animation: '0.8s ease-out 0.2s 1 normal both paused animationIn'}}>
<div className="relative">

<div className="grid grid-cols-2 gap-4">
<div className="border-subtle hover-glow transition-all duration-300 bg-[#050505] border pt-6 pr-6 pb-6 pl-6">
<iconify-icon className="text-2xl text-purple-400 mb-4" height="28" icon="lucide:brain" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<div className="text-3xl text-white font-space-grotesk font-light tracking-tight mb-2">Foco em IA</div>
<div className="uppercase text-xs text-neutral-500 tracking-widest font-geist">Abordagem de Produto</div>
</div>
<div className="bg-[#050505] border border-subtle p-6 hover-glow transition-all duration-300">
<iconify-icon className="text-2xl text-blue-400 mb-4" height="28" icon="lucide:rocket" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<div className="text-3xl text-white font-space-grotesk font-light tracking-tight mb-2">Escala</div>
<div className="uppercase text-xs text-neutral-500 tracking-widest font-geist">Soluções Prontas</div>
</div>
<div className="bg-[#050505] border border-subtle p-6 hover-glow transition-all duration-300">
<iconify-icon className="text-2xl text-green-400 mb-4" height="28" icon="lucide:users" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<div className="text-3xl text-white font-space-grotesk font-light tracking-tight mb-2">Real</div>
<div className="text-xs uppercase tracking-widest text-neutral-500 font-geist">Usuários &amp; Resultados</div>
</div>
<div className="bg-[#050505] border border-subtle p-6 hover-glow transition-all duration-300">
<iconify-icon className="text-2xl text-amber-400 mb-4" height="28" icon="lucide:trophy" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<div className="text-3xl font-light text-white tracking-tight font-space-grotesk mb-2">Resultados</div>
<div className="uppercase text-xs text-neutral-500 tracking-widest font-geist">Produtos que geram resultado</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>



<section className="md:py-32 z-10 border-subtle bg-black border-t pt-24 pb-24 relative" id="partnerships">
<div className="container mx-auto px-4 max-w-6xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="animate-on-scroll" style={{animation: '0.8s ease-out 0s 1 normal both paused animationIn'}}>
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
<span className="text-[10px] uppercase tracking-widest text-purple-400 font-geist">Parcerias</span>
</div>
<h2 className="md:text-5xl uppercase text-4xl font-light text-white tracking-tighter font-space-grotesk mb-8">
                        Colaboração Estratégica
                        <span className="text-neutral-600 block">Oportunidades</span>
</h2>
<p className="leading-relaxed text-neutral-400 font-geist mb-8">Estou aberto a colaborações com investidores, grupos educacionais, startups de IA e empresas interessadas em soluções de IA escaláveis.</p>
<a className="inline-flex items-center gap-3 bg-brand-gradient text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 rounded-sm font-geist" href="#contact">
                        Iniciar uma Conversa
                        <iconify-icon height="18" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>

<div className="animate-on-scroll" style={{animation: '0.8s ease-out 0.2s 1 normal both paused animationIn'}}>
<div className="space-y-4">
<div className="group flex items-center gap-6 p-6 bg-[#050505] border border-subtle hover-glow transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
<iconify-icon className="text-purple-400" height="24" icon="lucide:flask-conical" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg text-white tracking-tight font-space-grotesk">Pilotos de Produtos</h3>
<p className="text-sm text-neutral-500 font-geist">Testar e validar soluções de IA</p>
</div>
</div>
<div className="group flex items-center gap-6 p-6 bg-[#050505] border border-subtle hover-glow transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
<iconify-icon className="text-blue-400" height="24" icon="lucide:handshake" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg text-white tracking-tight font-space-grotesk">Parcerias Estratégicas</h3>
<p className="text-sm text-neutral-500 font-geist">Oportunidades de colaboração de longo prazo</p>
</div>
</div>
<div className="group flex items-center gap-6 p-6 bg-[#050505] border border-subtle hover-glow transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
<iconify-icon className="text-amber-400" height="24" icon="lucide:lightbulb" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg text-white tracking-tight font-space-grotesk">Consultoria ou Co-criação</h3>
<p className="text-sm text-neutral-500 font-geist">Orientação especializada e colaboração</p>
</div>
</div>
<div className="group flex items-center gap-6 p-6 bg-[#050505] border border-subtle hover-glow transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
<iconify-icon className="text-green-400" height="24" icon="lucide:scale" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg text-white tracking-tight font-space-grotesk">Escalonamento de Plataformas de IA</h3>
<p className="text-sm text-neutral-500 font-geist">Expandir soluções para novos mercados</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10 border-t border-subtle" id="contact">
<div className="container mx-auto px-4 max-w-4xl">

<div className="text-center mb-16 animate-on-scroll" style={{animation: '0.8s ease-out 0s 1 normal both paused animationIn'}}>
<div className="flex items-center justify-center gap-3 mb-6">
<div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-500"></div>
<span className="text-[10px] uppercase tracking-widest text-purple-400 font-geist">Contato</span>
<div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-500"></div>
</div>
<h2 className="md:text-6xl uppercase text-4xl font-light text-white tracking-tighter font-space-grotesk mb-4">Vamos Explorar uma <span className="text-gradient text-glow">Solução Estratégica</span></h2>
</div>

<div className="glassmorphic p-8 md:p-12 animate-on-scroll" style={{animation: '0.8s ease-out 0.2s 1 normal both paused animationIn'}}>
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative">
<input className="outline-none focus:border-purple-500 transition-colors peer text-white font-geist bg-transparent w-full border-neutral-800 border-b pt-4 pb-4" id="name" placeholder=" " required="" type="text"/>
<label className="absolute left-0 top-4 text-neutral-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-400 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs font-geist uppercase tracking-widest text-sm" htmlFor="name">
                                Nome
                            </label>
</div>

<div className="group relative">
<input className="w-full bg-transparent border-b border-neutral-800 py-4 text-white outline-none focus:border-purple-500 transition-colors font-geist peer" id="email" placeholder=" " required="" type="email"/>
<label className="absolute left-0 top-4 text-neutral-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-400 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs font-geist uppercase tracking-widest text-sm" htmlFor="email">
                                E-mail
                            </label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative">
<input className="w-full bg-transparent border-b border-neutral-800 py-4 text-white outline-none focus:border-purple-500 transition-colors font-geist peer" id="organization" placeholder=" " type="text"/>
<label className="transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-400 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs uppercase text-sm text-neutral-500 tracking-widest font-geist absolute top-4 left-0" htmlFor="organization">Empresa</label>
</div>

<div className="group relative">
<select className="outline-none focus:border-purple-500 transition-colors appearance-none cursor-pointer text-white font-geist bg-transparent w-full border-neutral-800 border-b pt-4 pb-4" id="interest">
<option className="bg-[#0a0a0a]" value="">Selecione o Interesse</option>
<option className="bg-[#0a0a0a]" value="investment">Automação</option>
<option className="bg-[#0a0a0a]" value="partnership">Solução com IA</option>
<option className="bg-[#0a0a0a]" value="pilot">Integrações</option>
<option className="bg-[#0a0a0a]" value="advisory">Não sei ao certo</option>
</select>
<iconify-icon className="absolute right-0 top-4 text-neutral-500 pointer-events-none" height="20" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>

<div className="group relative">
<textarea className="w-full bg-transparent border-b border-neutral-800 py-4 text-white outline-none focus:border-purple-500 transition-colors font-geist peer resize-none" id="message" placeholder=" " rows="4"></textarea>
<label className="transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-400 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs uppercase text-sm text-neutral-500 tracking-widest font-geist absolute top-4 left-0" htmlFor="message">
                            Mensagem
                        </label>
</div>

<div className="pt-4">
<button className="md:w-auto uppercase hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 flex gap-3 text-sm font-semibold text-white tracking-widest font-geist w-full rounded-sm pt-4 pr-12 pb-4 pl-12 gap-x-3 gap-y-3 items-center justify-center" type="submit">
                            Enviar Mensagem
                            <iconify-icon className="" height="18" icon="lucide:send" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</section>

<footer className="border-subtle z-10 bg-black border-t pt-12 pb-12 relative">
<div className="container mx-auto px-4 max-w-6xl">
<div className="flex flex-col text-center items-center">
<p className="text-neutral-400 font-geist max-w-md mb-4">Construindo soluções de IA com propósito, clareza e impacto.</p>
<div className="flex items-center gap-2 mb-8">
<div className="w-2 h-2 rounded-full bg-purple-500"></div>
<span className="text-white tracking-tight font-space-grotesk">IA não é o futuro, IA é o agora</span>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent mb-8"></div>
<p className="uppercase text-xs text-neutral-600 tracking-widest font-geist">© 2026 Junior Mateus. Todos os direitos reservados.</p>
</div>
</div>
</footer>

    </>
  );
}
