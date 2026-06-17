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



                !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
            


        // Scroll Reveal Animation Logic (From Template)
        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');
            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 100;
                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };
            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll();

            // Number Counter Logic (From Template)
            const counters = document.querySelectorAll('.counter');
            let hasAnimated = false;
            
            const animateCounters = () => {
                counters.forEach(counter => {
                    const target = parseFloat(counter.getAttribute('data-target'));
                    const isFloat = target % 1 !== 0;
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    let current = 0;
                    
                    const updateCount = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = isFloat ? current.toFixed(1) : Math.ceil(current);
                            requestAnimationFrame(updateCount);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCount();
                });
            };

            // Intersection Observer for Metrics
            const metricsSection = document.querySelector('.counter')?.closest('section');
            if(metricsSection) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && !hasAnimated) {
                            animateCounters();
                            hasAnimated = true;
                        }
                    });
                }, { threshold: 0.5 });
                observer.observe(metricsSection);
            }
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">

<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="pia5ESUYTMCLJATXcj8v"></div>

</div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.06] bg-slate-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex flex-col group" href="#">
<span className="font-serif text-xl tracking-tight text-white group-hover:text-[#D4AF37] transition-colors duration-500">D. RIBEIRO</span>
<span className="text-[0.6rem] uppercase tracking-[0.2em] text-slate-400 group-hover:text-white/80">Sociedade de Advocacia</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors duration-300" href="#inicio">Início</a>
<a className="hover:text-white transition-colors duration-300" href="#quem-somos">Quem Somos</a>
<a className="hover:text-white transition-colors duration-300" href="#filosofia">Filosofia</a>
<a className="hover:text-white transition-colors duration-300" href="#midia">Mídia</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#D4AF37] border border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-md hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-[0_0_15px_-5px_rgba(212,175,55,0.3)]" href="https://wa.me/5511985272009">
<span className="iconify" data-height="14" data-icon="lucide:siren" data-width="14"></span>
                    Plantão Criminal 24h
                </a>
<button className="md:hidden text-white">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" id="inicio">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none opacity-40 mix-blend-screen"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

<div className="text-left">

<div className="reveal delay-100 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-xs font-medium text-[#D4AF37] mb-8 shadow-[0_0_15px_-5px_rgba(212,175,55,0.3)]">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#D4AF37]"></span>
</span>
                    Advocacia Criminal Especializada
                </div>

<h1 className="reveal delay-200 text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-white mb-6 leading-[1.1]">
                    Defesa Criminal <br/>
<span className="italic text-gold-gradient">Estratégica</span> &amp; <br/>
                    Humanizada.
                </h1>

<p className="reveal delay-300 text-lg text-slate-400 max-w-xl mb-10 font-light leading-relaxed">
                    Assessoria jurídica completa para pessoas físicas e empresas. Protegendo sua liberdade dentro dos limites legais e garantias do direito penal.
                </p>

<div className="reveal delay-300 flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-xs font-semibold rounded hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] text-center flex items-center justify-center gap-2" href="https://wa.me/5511985272009">
                        Falar com Especialista
                        <span className="iconify group-hover:translate-x-0.5 transition-transform" data-height="14" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 border border-white/10 text-white text-xs font-medium rounded hover:bg-white/5 hover:border-white/20 transition-all text-center flex items-center justify-center" href="#quem-somos">
                        Conheça o Escritório
                    </a>
</div>
</div>

<div className="reveal delay-200 relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/10 backdrop-blur-sm">
<div className="absolute inset-0 z-10 bg-slate-950/20 mix-blend-overlay"></div>
<img alt="Advogado Criminalista" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dbd259d7-f117-4f0e-9348-1f50f0cb96fe_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
</div>
</div>
</header>

<section className="border-y border-white/[0.06] bg-white/[0.01] py-10 relative overflow-hidden reveal" id="midia">
<div className="max-w-7xl mx-auto px-6 mb-8 text-center">
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest">D. Ribeiro na Mídia e Imprensa</p>
</div>
<div className="mask-linear w-full inline-flex flex-nowrap overflow-hidden">
<div className="flex items-center justify-center md:justify-start [&amp;_li]:mx-8 animate-scroll w-max">

<div className="flex items-center gap-16 md:gap-24 px-8 opacity-60 hover:opacity-100 transition-all duration-500">
<span className="flex items-center gap-2 text-lg font-serif font-semibold text-white"><span className="iconify" data-icon="lucide:tv"></span> Televisão</span>
<span className="flex items-center gap-2 text-lg font-serif font-semibold text-white"><span className="iconify" data-icon="lucide:radio"></span> Rádio</span>
<span className="flex items-center gap-2 text-lg font-serif font-semibold text-white"><span className="iconify" data-icon="lucide:newspaper"></span> Jornais</span>
<span className="flex items-center gap-2 text-lg font-serif font-semibold text-white"><span className="iconify" data-icon="lucide:mic"></span> Podcasts</span>
<span className="flex items-center gap-2 text-lg font-serif font-semibold text-white"><span className="iconify" data-icon="lucide:globe"></span> Portais Jurídicos</span>
</div>

<div className="flex items-center gap-16 md:gap-24 px-8 opacity-60 hover:opacity-100 transition-all duration-500">
<span className="flex items-center gap-2 text-lg font-serif font-semibold text-white"><span className="iconify" data-icon="lucide:tv"></span> Televisão</span>
<span className="flex items-center gap-2 text-lg font-serif font-semibold text-white"><span className="iconify" data-icon="lucide:radio"></span> Rádio</span>
<span className="flex items-center gap-2 text-lg font-serif font-semibold text-white"><span className="iconify" data-icon="lucide:newspaper"></span> Jornais</span>
<span className="flex items-center gap-2 text-lg font-serif font-semibold text-white"><span className="iconify" data-icon="lucide:mic"></span> Podcasts</span>
<span className="flex items-center gap-2 text-lg font-serif font-semibold text-white"><span className="iconify" data-icon="lucide:globe"></span> Portais Jurídicos</span>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/[0.06]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
<div className="reveal delay-100">
<div className="flex items-baseline justify-center md:justify-start gap-0.5 text-3xl md:text-4xl font-serif text-white tracking-tight mb-2">
<span className="counter" data-target="8">0</span> Anos
                    </div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Experiência Militar</div>
</div>
<div className="reveal delay-200">
<div className="flex items-baseline justify-center md:justify-start gap-0.5 text-3xl md:text-4xl font-serif text-white tracking-tight mb-2">
<span className="counter" data-target="300">0</span>+
                    </div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Artigos Publicados</div>
</div>
<div className="reveal delay-300">
<div className="flex items-baseline justify-center md:justify-start gap-0.5 text-3xl md:text-4xl font-serif text-white tracking-tight mb-2">
<span className="counter" data-target="24">0</span>h
                    </div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Plantão Ativo</div>
</div>
<div className="reveal delay-300">
<div className="flex items-baseline justify-center md:justify-start gap-0.5 text-3xl md:text-4xl font-serif text-white tracking-tight mb-2">
<span className="counter" data-target="100">0</span>%
                    </div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Confidencialidade</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/[0.06] bg-gradient-to-b from-white/[0.01] to-transparent" id="quem-somos">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 reveal">
<h2 className="font-serif text-3xl md:text-4xl text-white mb-6 tracking-tight">
                        Liderado pelo <br/>
<span className="text-[#D4AF37]">Dr. Douglas Ribeiro</span>
</h2>
<p className="text-slate-400 leading-relaxed mb-8 font-light text-lg">
                        Advogado criminal militante desde 2016, Gestor Jurídico e Sócio-fundador. Com uma mentalidade visionária, combina técnica jurídica refinada com gestão de alto nível.
                    </p>
<div className="h-px w-24 bg-[#D4AF37] mb-6 shadow-[0_0_10px_#D4AF37]"></div>
<p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">OAB/SP: 32.871</p>
</div>

<div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="reveal delay-100 p-8 rounded-xl bg-[#0B0C10] border border-white/[0.08] hover:border-[#D4AF37]/30 transition-colors relative overflow-hidden group">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-[#D4AF37]/5 blur-[50px] group-hover:bg-[#D4AF37]/10 transition-all duration-700 rounded-full"></div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6 border border-[#D4AF37]/20">
<span className="iconify" data-icon="lucide:graduation-cap" data-width="20"></span>
</div>
<h3 className="text-white font-serif font-medium mb-2">MBA em Gestão</h3>
<p className="text-sm text-slate-400 font-light">Pela FGV – SP (2024). Visão estratégica aplicada ao direito.</p>
</div>
</div>

<div className="reveal delay-200 p-8 rounded-xl bg-[#0B0C10] border border-white/[0.08] hover:border-[#D4AF37]/30 transition-colors relative overflow-hidden group">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-[#D4AF37]/5 blur-[50px] group-hover:bg-[#D4AF37]/10 transition-all duration-700 rounded-full"></div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6 border border-[#D4AF37]/20">
<span className="iconify" data-icon="lucide:scale" data-width="20"></span>
</div>
<h3 className="text-white font-serif font-medium mb-2">Especialista Penal</h3>
<p className="text-sm text-slate-400 font-light">Pós-graduado em Direito Penal, Processo Penal e Administrativo.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="filosofia">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 md:mb-28 reveal">
<span className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-2 block">Nossa Filosofia</span>
<h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight mb-4">Pilares da Sociedade</h2>
<p className="text-slate-400 max-w-xl text-lg font-light">Fundamentos que norteiam nossa atuação na defesa dos seus direitos.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal delay-100 group relative p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-6 text-[#D4AF37] border border-[#D4AF37]/20 shadow-[0_0_15px_-5px_rgba(212,175,55,0.5)]">
<span className="iconify" data-icon="lucide:target" data-width="20"></span>
</div>
<h3 className="text-xl font-serif text-white tracking-tight mb-3">Missão</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                            Defender e representar juridicamente quem é vítima ou acusado em processos penais, com atuação consultiva, estratégica e humanizada.
                        </p>
</div>
</div>

<div className="reveal delay-200 group relative p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-6 text-[#D4AF37] border border-[#D4AF37]/20 shadow-[0_0_15px_-5px_rgba(212,175,55,0.5)]">
<span className="iconify" data-icon="lucide:eye" data-width="20"></span>
</div>
<h3 className="text-xl font-serif text-white tracking-tight mb-3">Visão</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                            Ser referência no direito criminal em SP até 2030. Empreender de modo disruptivo e inovador na advocacia.
                        </p>
</div>
</div>

<div className="reveal delay-300 group relative p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-6 text-[#D4AF37] border border-[#D4AF37]/20 shadow-[0_0_15px_-5px_rgba(212,175,55,0.5)]">
<span className="iconify" data-icon="lucide:diamond" data-width="20"></span>
</div>
<h3 className="text-xl font-serif text-white tracking-tight mb-3">Valores</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                            Trabalhar de forma ética, transparente, honesta e primar pela qualidade técnica e excelência no atendimento.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative overflow-hidden border-t border-white/[0.06]" id="contato">
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-6">Atendimento com <span className="italic text-[#D4AF37]">Sigilo</span></h2>
<p className="text-slate-400 text-lg font-light">Agende sua consulta em ambiente privado. Sua liberdade é nossa prioridade.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<form className="reveal delay-100 space-y-6 bg-[#0E0F14]/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/[0.08] shadow-2xl relative">
<div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
<div className="space-y-2 relative z-10">
<label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Nome Completo</label>
<input className="w-full bg-[#0B0C10] border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors" placeholder="Seu nome" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
<div className="space-y-2">
<label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Email</label>
<input className="w-full bg-[#0B0C10] border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors" placeholder="seu@email.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Telefone</label>
<input className="w-full bg-[#0B0C10] border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors" placeholder="(11) 99999-9999" type="tel"/>
</div>
</div>
<div className="space-y-2 relative z-10">
<label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Mensagem (Opcional)</label>
<textarea className="w-full bg-[#0B0C10] border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors resize-none" placeholder="Breve relato do caso..." rows="4"></textarea>
</div>
<div className="pt-4 relative z-10">
<button className="w-full bg-gradient-to-b from-[#D4AF37] to-[#b5952f] hover:from-[#b5952f] hover:to-[#967d29] text-black font-semibold py-3.5 rounded text-sm transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]" type="button">
                            Agendar Atendimento
                        </button>
</div>
</form>

<div className="reveal delay-200 flex flex-col justify-center space-y-8">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37]">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Escritório</h4>
<p className="text-slate-400 text-sm leading-relaxed">
                                Rua Potiguares, 308, Sobreloja,<br/>
                                Tatuapé, São Paulo/SP<br/>
                                CEP: 03065-010
                            </p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="p-2 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37]">
<span className="iconify" data-icon="lucide:phone" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Telefone</h4>
<p className="text-slate-400 text-sm">(11) 2051-8910</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="p-2 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37]">
<span className="iconify" data-icon="lucide:mail" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Email</h4>
<p className="text-slate-400 text-sm">d.ribeiro@dribeirosociedade.com.br</p>
</div>
</div>
<div className="pt-8 border-t border-white/5">
<p className="text-slate-500 text-xs mb-2">Horário de Atendimento:</p>
<p className="text-slate-300 text-sm">Segunda a Sexta: 08:00 - 18:00</p>
<p className="text-[#D4AF37] text-sm mt-1 font-medium">Plantão 24h para flagrantes</p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/[0.06] bg-[#0B0C10] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<span className="font-serif text-xl font-bold tracking-tight text-white">D. RIBEIRO</span>
</div>
<p className="text-sm text-slate-500 max-w-xs leading-relaxed font-light">
                        Excelência técnica e comprometimento na defesa dos seus direitos. Advocacia criminal com foco em resultados.
                    </p>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-6">Navegação</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-[#D4AF37] transition-colors" href="#inicio">Início</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#quem-somos">Quem Somos</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#filosofia">Atuação</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#midia">Na Mídia</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li>CNPJ: 38.660.175/0001-06</li>
<li>OAB/SP: 32.871</li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Termos de Uso</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Privacidade</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-600">© 2024 D. Ribeiro Sociedade de Advocacia. Todos os direitos reservados.</p>
<div className="flex gap-6">
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<span className="iconify" data-height="18" data-icon="lucide:instagram" data-width="18"></span>
</a>
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<span className="iconify" data-height="18" data-icon="lucide:linkedin" data-width="18"></span>
</a>
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<span className="iconify" data-height="18" data-icon="lucide:facebook" data-width="18"></span>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
