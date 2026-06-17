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



        // Inicializa os ícones do Lucide
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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
<div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-cyan-500/20 blur-[120px] mix-blend-screen" style={{animation: 'float-1 20s ease-in-out infinite'}}></div>
<div className="absolute top-[10%] right-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-fuchsia-600/20 blur-[120px] mix-blend-screen" style={{animation: 'float-2 25s ease-in-out infinite'}}></div>
<div className="absolute bottom-[-20%] left-[20%] w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-emerald-500/15 blur-[150px] mix-blend-screen" style={{animation: 'float-3 30s ease-in-out infinite'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.05] bg-zinc-950/60 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">

<img alt="Makers Logo" className="h-8 w-auto object-contain" src="logo.png"/>
</a>
<div className="hidden md:flex items-center gap-8 text-base font-extralight text-zinc-400">
<a className="hover:text-zinc-100 transition-colors duration-300" href="#work">Projetos</a>
<a className="hover:text-zinc-100 transition-colors duration-300" href="#expertise">Expertise</a>
<a className="hover:text-zinc-100 transition-colors duration-300" href="#about">Studio</a>
</div>
<div className="flex items-center">
<a className="text-sm font-normal tracking-tight text-white bg-fuchsia-600 hover:bg-fuchsia-500 px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(192,38,211,0.3)] hover:shadow-[0_0_25px_rgba(192,38,211,0.5)]" href="#contact">
                    Iniciar Projeto
                    <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 z-10">
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fuchsia-600/20 bg-fuchsia-600/10 text-sm font-extralight text-fuchsia-400 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 animate-pulse"></span>
                Disponível para novos projetos
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 mb-6 leading-[1.1]">
                Design digital com foco em resultados.
            </h1>
<p className="text-lg md:text-xl font-extralight text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
                Somos a Makers. Transformamos marcas ambiciosas através de estratégias, identidades visuais e produtos digitais que geram impacto real e conectam pessoas.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto text-base font-normal text-white bg-fuchsia-600 hover:bg-fuchsia-500 px-6 py-3 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(192,38,211,0.2)] hover:shadow-[0_0_30px_rgba(192,38,211,0.4)]" href="#work">
                    Ver nosso trabalho
                </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 text-base font-extralight text-zinc-300 hover:text-white px-6 py-3 rounded-full transition-all duration-300 group" href="#contact">
                    Fale conosco
                    <i className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fuchsia-500 transition-all" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</main>

<section className="py-24 px-6 border-t border-white/[0.02] bg-zinc-950/50 relative z-10" id="expertise">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:flex justify-between items-end">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-100 mb-4">Nossa Expertise</h2>
<p className="text-base md:text-lg font-extralight text-zinc-400 max-w-md">Especialistas na intersecção entre estética, conversão e tecnologia.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-zinc-900/30 border border-white/[0.05] hover:border-fuchsia-600/30 hover:bg-zinc-900/50 transition-all duration-500 relative overflow-hidden">
<div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-6 text-zinc-300 group-hover:text-fuchsia-500 group-hover:border-fuchsia-600/30 group-hover:scale-110 transition-all duration-500">
<i className="w-6 h-6" data-lucide="pen-tool" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal tracking-tight text-zinc-100 mb-3">Product Design (UX/UI)</h3>
<p className="text-base font-extralight text-zinc-500 leading-relaxed">
                        Desenhamos interfaces intuitivas e envolventes que resolvem problemas reais e encantam os usuários finais.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/30 border border-white/[0.05] hover:border-fuchsia-600/30 hover:bg-zinc-900/50 transition-all duration-500 relative overflow-hidden">
<div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-6 text-zinc-300 group-hover:text-fuchsia-500 group-hover:border-fuchsia-600/30 group-hover:scale-110 transition-all duration-500">
<i className="w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal tracking-tight text-zinc-100 mb-3">Branding &amp; Posicionamento</h3>
<p className="text-base font-extralight text-zinc-500 leading-relaxed">
                        Construímos identidades visuais fortes e coesas preparadas para se destacarem no ecossistema digital.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/30 border border-white/[0.05] hover:border-fuchsia-600/30 hover:bg-zinc-900/50 transition-all duration-500 relative overflow-hidden">
<div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-6 text-zinc-300 group-hover:text-fuchsia-500 group-hover:border-fuchsia-600/30 group-hover:scale-110 transition-all duration-500">
<i className="w-6 h-6" data-lucide="code" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal tracking-tight text-zinc-100 mb-3">Desenvolvimento Web</h3>
<p className="text-base font-extralight text-zinc-500 leading-relaxed">
                        Trazemos designs à vida com código limpo, animações fluidas e foco extremo em performance e conversão.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="work">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-100 mb-4">Projetos em Destaque</h2>
<p className="text-base md:text-lg font-extralight text-zinc-400">Um recorte do nosso trabalho recente de transformação.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<a className="group block" href="#">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/[0.05] mb-6">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-3/4 h-3/4 rounded-xl border border-white/[0.05] bg-zinc-950/80 shadow-2xl overflow-hidden flex flex-col transform group-hover:scale-105 group-hover:-translate-y-2 transition-transform duration-700 ease-out group-hover:shadow-[0_0_30px_rgba(192,38,211,0.1)]">
<div className="h-6 border-b border-white/[0.05] flex items-center px-3 gap-1.5">
<div className="w-2 h-2 rounded-full bg-zinc-800"></div>
<div className="w-2 h-2 rounded-full bg-zinc-800"></div>
<div className="w-2 h-2 rounded-full bg-zinc-800"></div>
</div>
<div className="flex-1 p-6 flex flex-col gap-4">
<div className="w-1/3 h-4 rounded bg-zinc-800/50"></div>
<div className="w-full h-24 rounded bg-zinc-800/30"></div>
<div className="w-2/3 h-4 rounded bg-zinc-800/50"></div>
</div>
</div>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-normal tracking-tight text-zinc-100 group-hover:text-fuchsia-500 transition-colors">Plataforma Financeira</h3>
<p className="text-base font-extralight text-zinc-500 mt-1">UX/UI Design, App Mobile</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/[0.1] flex items-center justify-center text-zinc-400 group-hover:bg-fuchsia-600 group-hover:text-white group-hover:border-fuchsia-600 transition-all duration-300">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</a>

<a className="group block md:mt-16" href="#">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/[0.05] mb-6">
<div className="absolute inset-0 bg-gradient-to-bl from-zinc-800 to-zinc-950 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-2/3 h-5/6 rounded-t-xl border-t border-x border-white/[0.05] bg-zinc-950/90 shadow-2xl flex flex-col items-center pt-8 px-6 transform group-hover:scale-105 group-hover:-translate-y-4 transition-transform duration-700 ease-out group-hover:shadow-[0_0_30px_rgba(192,38,211,0.1)]">
<div className="w-16 h-16 rounded-full border border-white/[0.05] bg-zinc-900 mb-6"></div>
<div className="w-full h-3 rounded bg-zinc-800/50 mb-3"></div>
<div className="w-4/5 h-3 rounded bg-zinc-800/50 mb-8"></div>
<div className="w-full flex-1 rounded-t-lg bg-zinc-800/30 border-t border-x border-white/[0.05]"></div>
</div>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-normal tracking-tight text-zinc-100 group-hover:text-fuchsia-500 transition-colors">Sistema SaaS</h3>
<p className="text-base font-extralight text-zinc-500 mt-1">Product Design, Design System</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/[0.1] flex items-center justify-center text-zinc-400 group-hover:bg-fuchsia-600 group-hover:text-white group-hover:border-fuchsia-600 transition-all duration-300">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</a>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 text-base font-extralight text-zinc-300 hover:text-fuchsia-500 border-b border-white/[0.2] hover:border-fuchsia-500 pb-1 transition-all duration-300" href="#">
                    Ver arquivo completo de projetos
                </a>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden z-10" id="contact">
<div className="absolute inset-0 bg-zinc-900/20 border-t border-white/[0.02]"></div>

<div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-20 blur-[120px] rounded-full bg-gradient-to-r from-cyan-500 via-fuchsia-600 to-emerald-500 pointer-events-none z-0" style={{animation: 'float-2 20s ease-in-out infinite'}}></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-100 mb-6">
                Pronto para transformar sua marca?
            </h2>
<p className="text-lg font-extralight text-zinc-400 mb-10">
                Conte-nos sobre o seu desafio. Vamos construir o próximo grande case juntos.
            </p>
<a className="inline-flex items-center justify-center gap-3 text-base font-normal text-white bg-fuchsia-600 hover:bg-fuchsia-500 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(192,38,211,0.3)] hover:shadow-[0_0_50px_rgba(192,38,211,0.5)]" href="mailto:hello@sejamakers.com.br">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
                Iniciar uma conversa
            </a>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/[0.05] bg-zinc-950 text-base font-extralight text-zinc-500 relative z-10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-4">
<img alt="Makers Logo" className="h-6 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="logo.png"/>
<span className="text-zinc-800">|</span>
<span>© 2024 Design Studio.</span>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-fuchsia-500 transition-colors" href="#">Instagram</a>
<a className="hover:text-fuchsia-500 transition-colors" href="#">Behance</a>
<a className="hover:text-fuchsia-500 transition-colors" href="#">LinkedIn</a>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-fuchsia-600"></div>
                Brasil
            </div>
</div>
</footer>


    </>
  );
}
