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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
  });



  // Simple router logic using visibility toggling
  function showChat() {
    const landing = document.getElementById('landing-view');
    const chat = document.getElementById('chat-view');
    const body = document.body;
    
    // Disable scroll on body when chat is open
    body.style.overflow = 'hidden';

    chat.classList.remove('hidden');
    // Trigger reflow
    void chat.offsetWidth;
    chat.style.opacity = '1';
  }

  function hideChat() {
    const chat = document.getElementById('chat-view');
    const body = document.body;
    
    chat.style.opacity = '0';
    
    setTimeout(() => {
        chat.classList.add('hidden');
        body.style.overflow = 'auto'; // Re-enable scroll
    }, 500);
  }

  // Mobile menu logic
  const mobileBtn = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMobile = document.getElementById('closeMobile');

  if (mobileBtn && mobileMenu && closeMobile) {
    mobileBtn.addEventListener('click', (e) => {
      e.preventDefault();
      mobileMenu.classList.remove('hidden');
    });
    closeMobile.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  }

  // Initialize icons
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-yellow-600/5 rounded-full blur-[100px] mix-blend-screen"></div>
<div className="absolute top-[40%] left-[-10%] w-[300px] h-[600px] bg-neutral-800/20 rounded-full blur-[80px]"></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
</div>



<div className="h-full overflow-y-auto w-full relative z-10 scroll-smooth" id="landing-view">
<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="/">
<div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center text-black shadow-[0_0_15px_rgba(250,204,21,0.4)] transition-transform group-hover:scale-105">
<svg className="lucide lucide-zap" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<span className="font-bold text-lg tracking-tight text-white group-hover:text-yellow-400 transition-colors">Yellow Mind</span>
</a>

<div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1 pl-6 backdrop-blur-xl">
<nav className="flex gap-6 text-sm font-medium text-white/70 mr-4">
<a className="hover:text-yellow-400 transition-colors" href="#product">Produto</a>
<a className="hover:text-yellow-400 transition-colors" href="#features">Funcionalidades</a>
<a className="hover:text-yellow-400 transition-colors" href="#pricing">Planos</a>
</nav>
<button className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-full text-xs font-bold transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_-5px_rgba(250,204,21,0.5)]" onclick="showChat()">
                Começar agora
            </button>
</div>

<button className="md:hidden text-white/70 hover:text-white" id="mobileMenuToggle">
<svg className="lucide lucide-menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</header>

<div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl hidden flex-col items-center justify-center space-y-8 transition-opacity" id="mobileMenu">
<button className="absolute top-6 right-6 text-white/60 hover:text-white" id="closeMobile">
<svg className="lucide lucide-x" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<a className="text-2xl font-medium text-white hover:text-yellow-400" href="#product" onclick="document.getElementById('mobileMenu').classList.add('hidden')">Produto</a>
<a className="text-2xl font-medium text-white hover:text-yellow-400" href="#features" onclick="document.getElementById('mobileMenu').classList.add('hidden')">Funcionalidades</a>
<a className="text-2xl font-medium text-white hover:text-yellow-400" href="#pricing" onclick="document.getElementById('mobileMenu').classList.add('hidden')">Preços</a>
<button className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-bold" onclick="showChat(); document.getElementById('mobileMenu').classList.add('hidden')">Começar agora</button>
</div>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">

<div className="animate-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-xs font-semibold mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
</span>
                IA Generativa 2.0
            </div>

<h1 className="animate-on-scroll text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1] mb-6">
                Seu agente de IA <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 animate-pulse">no WhatsApp.</span>
</h1>
<h2 className="animate-on-scroll text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto mb-10">
                A Yellow Mind desenvolve agentes inteligentes que organizam compromissos, agendam reuniões e executam tarefas operacionais por você — tudo diretamente no WhatsApp.
            </h2>

<div className="animate-on-scroll flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-yellow-400 px-8 font-semibold text-neutral-950 transition-all duration-300 hover:bg-yellow-300 hover:w-full sm:hover:w-auto hover:shadow-[0_0_40px_-10px_rgba(250,204,21,0.6)] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-neutral-900" onclick="showChat()">
<span className="mr-2" style={{}}>Como funciona</span>
<svg className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 font-medium text-white transition-colors hover:bg-white/10 hover:text-yellow-200" onclick="window.location.href='#pricing'">
                    Falar com especialista
                </button>
</div>
</div>

<div className="mt-16 md:mt-24 max-w-5xl mx-auto relative animate-on-scroll">
<div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-200 rounded-2xl blur opacity-20"></div>
<div className="relative bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/50 backdrop-blur">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="mx-auto text-[10px] font-mono text-white/30">YellowMind_Agent_v2.0.exe</div>
</div>
<div className="aspect-[16/9] md:aspect-[21/9] bg-black relative flex items-center justify-center overflow-hidden">

<div className="w-full h-full flex">

<div className="w-1/4 border-r border-white/5 bg-neutral-900/50 hidden sm:block p-4 space-y-3">
<div className="h-8 bg-white/5 rounded w-full animate-pulse"></div>
<div className="h-12 bg-white/5 rounded w-full opacity-60"></div>
<div className="h-12 bg-white/5 rounded w-full opacity-40"></div>
</div>

<div className="flex-1 p-6 md:p-12 flex flex-col justify-end space-y-4 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-900/10 via-black to-black">
<div className="flex gap-4 opacity-50 blur-[0.5px]">
<div className="bg-white/10 p-4 rounded-2xl rounded-bl-none max-w-md text-sm text-white/70">
                                    Agendar reunião com a equipe de marketing para amanhã às 14h.
                                </div>
</div>
<div className="flex flex-row-reverse gap-4">
<div className="bg-yellow-500 p-4 rounded-2xl rounded-br-none max-w-md text-sm text-black font-medium shadow-[0_0_30px_-5px_rgba(234,179,8,0.3)]">
<div className="flex items-center gap-2 mb-2 border-b border-black/10 pb-2">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
<span>Google Agenda</span>
</div>
                                    Confirmado. Reunião agendada: "Marketing Sync" para Amanhã, 14:00 - 15:00. Convites enviados.
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-black" id="product">
<div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
<h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">Automação inteligente onde as pessoas realmente se comunicam.</h2>
<p className="text-white/60 text-lg leading-relaxed">O Agente Yellow Mind é uma inteligência artificial treinada para operar como seu assistente pessoal ou empresarial. Ele executa tarefas organizacionais e de atendimento dentro do WhatsApp, 24 horas por dia.</p>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 p-8 hover:border-yellow-500/30 transition-colors animate-on-scroll">
<div className="relative z-10">
<div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center text-yellow-400 mb-6">
<svg className="lucide lucide-message-square-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Assistente Completo</h3>
<p className="text-white/60 mb-6 max-w-md">Respostas naturais, agendamento de reuniões e organização de tarefas. Tudo sem sair do chat.</p>
</div>
<div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-yellow-500/5 to-transparent"></div>
</div>

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 p-8 hover:border-yellow-500/30 transition-colors animate-on-scroll">
<div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6">
<svg className="lucide lucide-calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line><path d="m9 16 2 2 4-4"></path></svg>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Google Agenda</h3>
<p className="text-white/60">Sincronização bidirecional em tempo real. Nunca mais perca um horário.</p>
</div>

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 p-8 hover:border-yellow-500/30 transition-colors animate-on-scroll">
<div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 mb-6">
<svg className="lucide lucide-hard-drive-upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-4-4-4 4"></path><path d="M12 2v8"></path><rect height="8" rx="2" width="20" x="2" y="14"></rect><path d="M6 18h.01"></path><path d="M10 18h.01"></path></svg>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Google Drive</h3>
<p className="text-white/60">Envio e recuperação de arquivos instantâneos. Sua nuvem no seu bolso.</p>
</div>

<div className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 p-8 hover:border-yellow-500/30 transition-colors animate-on-scroll">
<div className="relative z-10">
<div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6">
<svg className="lucide lucide-building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Para Empresas</h3>
<p className="text-white/60 mb-6 max-w-lg">Atendimento automatizado, qualificação de leads e operação multiusuário. O Yellow Mind escala sua operação sem aumentar sua equipe.</p>
</div>
<div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-purple-500/10 to-transparent"></div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950 relative overflow-hidden" id="features">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Implantação rápida. Resultado imediato.</h2>
<p className="text-white/60">Comece a usar em menos de 5 minutos.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition animate-on-scroll">
<span className="text-5xl font-bold text-white/10 mb-4 block">01</span>
<h3 className="text-lg font-semibold text-white mb-2">Escolha seu plano</h3>
<p className="text-sm text-white/60">Defina se o uso é pessoal ou empresarial.</p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition animate-on-scroll" style={{transitionDelay: '100ms'}}>
<span className="text-5xl font-bold text-white/10 mb-4 block">02</span>
<h3 className="text-lg font-semibold text-white mb-2">Personalização</h3>
<p className="text-sm text-white/60">Configuramos o tom de voz e integrações.</p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition animate-on-scroll" style={{transitionDelay: '200ms'}}>
<span className="text-5xl font-bold text-white/10 mb-4 block">03</span>
<h3 className="text-lg font-semibold text-white mb-2">Conexão</h3>
<p className="text-sm text-white/60">Conecte seu WhatsApp via QR Code seguro.</p>
</div>

<div className="p-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 hover:bg-yellow-500/10 transition animate-on-scroll" style={{transitionDelay: '300ms'}}>
<span className="text-5xl font-bold text-yellow-500/20 mb-4 block">04</span>
<h3 className="text-lg font-semibold text-white mb-2">Operação</h3>
<p className="text-sm text-white/60">Seu agente começa a trabalhar 24/7.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 animate-on-scroll">
<h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Planos claros para necessidades reais.</h2>
<p className="text-white/60">Cancele a qualquer momento.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="rounded-3xl border border-white/10 bg-neutral-900/50 p-8 flex flex-col animate-on-scroll">
<h3 className="text-xl font-medium text-white mb-2">Pessoal</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-white">R$ 97</span>
<span className="text-white/60">/mês</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white/70">
<svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                            Agente IA no WhatsApp
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                            Integração Google Agenda
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                            Atendimento 24/7
                        </li>
</ul>
<button className="w-full py-3 rounded-full border border-white/20 bg-white/5 text-white font-medium hover:bg-white/10 transition" onclick="showChat()">Começar agora</button>
</div>

<div className="relative rounded-3xl border border-yellow-500/50 bg-neutral-900/80 p-8 flex flex-col shadow-[0_0_40px_-10px_rgba(234,179,8,0.15)] animate-on-scroll scale-105 z-10">
<div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
<span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">RECOMENDADO</span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Pro</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-white">R$ 197</span>
<span className="text-white/60">/mês</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                            Tudo do plano Pessoal
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                            Memória de longo prazo
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                            Integração Google Drive
                        </li>
</ul>
<button className="w-full py-3 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition shadow-[0_0_20px_-5px_rgba(250,204,21,0.4)]" onclick="showChat()">Assinar agora</button>
</div>

<div className="rounded-3xl border border-white/10 bg-neutral-900/50 p-8 flex flex-col animate-on-scroll">
<h3 className="text-xl font-medium text-white mb-2">Empresarial</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold text-white">Sob consulta</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white/70">
<svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                            Agente corporativo completo
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                            Múltiplos clientes simultâneos
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                            API Personalizada
                        </li>
</ul>
<button className="w-full py-3 rounded-full border border-white/20 bg-white/5 text-white font-medium hover:bg-white/10 transition">Falar com especialista</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950">
<div className="max-w-7xl mx-auto">
<h2 className="text-center text-2xl font-bold text-white mb-12 animate-on-scroll">Profissionais e empresas já automatizam com Yellow Mind.</h2>
<div className="grid md:grid-cols-2 gap-6 animate-on-scroll">
<div className="p-8 rounded-2xl bg-white/5 border border-white/5">
<p className="text-lg text-white/80 italic mb-4">"O agente da Yellow Mind reduziu drasticamente nosso tempo operacional. O atendimento inicial agora é 100% automático e impecável."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-700"></div>
<div>
<div className="text-sm font-bold text-white">Ricardo Mendes</div>
<div className="text-xs text-white/50">Diretor Comercial, TechSolutions</div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-white/5 border border-white/5">
<p className="text-lg text-white/80 italic mb-4">"Hoje minha agenda se organiza sozinha dentro do WhatsApp. Não perco mais tempo negociando horários."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-700"></div>
<div>
<div className="text-sm font-bold text-white">Ana Paula</div>
<div className="text-xs text-white/50">Consultora Financeira</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 border-y border-white/5">
<div className="max-w-4xl mx-auto text-center animate-on-scroll">
<h2 className="text-2xl font-bold text-white mb-8">Segurança corporativa de ponta a ponta.</h2>
<div className="flex flex-wrap justify-center gap-4 md:gap-12">
<div className="flex items-center gap-2 text-white/60">
<svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
<span>Criptografia E2E</span>
</div>
<div className="flex items-center gap-2 text-white/60">
<svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
<span>LGPD Compliant</span>
</div>
<div className="flex items-center gap-2 text-white/60">
<svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
<span>Google Cloud Secure</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto text-center animate-on-scroll">
<h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">Automatize sua rotina hoje com inteligência real.</h2>
<p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">Transforme seu WhatsApp em um assistente pessoal ou corporativo completo.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition w-full sm:w-auto shadow-[0_0_30px_-5px_rgba(250,204,21,0.5)]" onclick="showChat()">Começar agora</button>
<button className="text-white hover:text-yellow-400 font-medium px-8 py-4 w-full sm:w-auto border border-white/10 rounded-full hover:bg-white/5 transition">Falar com especialista</button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-12">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-yellow-400 rounded flex items-center justify-center text-black">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<span className="font-bold text-white">Yellow Mind</span>
</div>
<p className="text-sm text-white/50">Tecnologia de ponta para automação via WhatsApp. Simplifique, organize, escale.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
<div>
<h4 className="font-bold text-white mb-4">Produto</h4>
<ul className="space-y-2 text-white/50">
<li><a className="hover:text-yellow-400" href="#">Funcionalidades</a></li>
<li><a className="hover:text-yellow-400" href="#">Preços</a></li>
<li><a className="hover:text-yellow-400" href="#">Integrações</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-white mb-4">Suporte</h4>
<ul className="space-y-2 text-white/50">
<li><a className="hover:text-yellow-400" href="#">Ajuda</a></li>
<li><a className="hover:text-yellow-400" href="#">API Docs</a></li>
<li><a className="hover:text-yellow-400" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-white mb-4">Legal</h4>
<ul className="space-y-2 text-white/50">
<li><a className="hover:text-yellow-400" href="#">Privacidade</a></li>
<li><a className="hover:text-yellow-400" href="#">Termos</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
<p>© 2025 Yellow Mind AI. Todos os direitos reservados.</p>
<div className="flex gap-4">
<a className="hover:text-white" href="#">Twitter</a>
<a className="hover:text-white" href="#">Instagram</a>
<a className="hover:text-white" href="#">LinkedIn</a>
</div>
</div>
</footer>
</div>

<div className="hidden h-full flex items-center justify-center bg-black/90 p-4 sm:p-8 opacity-0 transition-opacity duration-500 absolute inset-0 z-50 backdrop-blur-3xl" id="chat-view">

<button className="absolute top-6 right-6 text-white/50 hover:text-white z-50" onclick="hideChat()">
<svg className="lucide lucide-x" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="w-full max-w-sm bg-[#0b141a] h-[600px] rounded-[30px] overflow-hidden border border-white/10 shadow-[0_0_50px_-10px_rgba(250,204,21,0.2)] flex flex-col relative">

<div className="bg-[#202c33] px-4 py-3 flex items-center gap-3 border-b border-[#2a3942] z-10">
<button className="text-[#aebac1]" onclick="hideChat()">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<div className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center text-black">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<div className="flex-1">
<div className="text-white text-sm font-medium">Yellow Mind AI</div>
<div className="text-[#8696a0] text-xs">online</div>
</div>
</div>

<div className="absolute inset-0 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] opacity-5 pointer-events-none"></div>

<div className="flex-1 overflow-y-auto p-4 space-y-4 relative z-0">

<div className="flex justify-center mb-4">
<span className="bg-[#202c33] text-[#8696a0] text-[10px] px-2 py-1 rounded-lg shadow uppercase">Hoje</span>
</div>

<div className="flex justify-end">
<div className="bg-[#005c4b] text-white p-2 px-3 rounded-lg rounded-tr-none max-w-[85%] shadow-sm relative">
<p className="text-sm">Preciso agendar uma reunião com o cliente da TechCorp para amanhã às 15h.</p>
<div className="text-[10px] text-white/60 text-right mt-1 flex items-center justify-end gap-1">
                         10:30 <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path><path d="M20 12 14.5 17.5"></path></svg>
</div>
</div>
</div>

<div className="flex justify-start">
<div className="bg-[#202c33] text-white p-2 px-3 rounded-lg rounded-tl-none max-w-[85%] shadow-sm">
<p className="text-sm">Verificando sua agenda...</p>
<div className="text-[10px] text-white/60 text-right mt-1">10:30</div>
</div>
</div>

<div className="flex justify-start">
<div className="bg-[#202c33] text-white p-2 px-3 rounded-lg rounded-tl-none max-w-[85%] shadow-sm">
<p className="text-sm">Amanhã às 15h está livre. Agendei a reunião "TechCorp Sync" e enviei o convite para o e-mail deles. Algo mais?</p>
<div className="mt-2 bg-black/20 p-2 rounded text-xs flex items-center gap-2 border border-white/5">
<svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
<span>Google Agenda: Confirmado</span>
</div>
<div className="text-[10px] text-white/60 text-right mt-1">10:31</div>
</div>
</div>

<div className="flex justify-end">
<div className="bg-[#005c4b] text-white p-2 px-3 rounded-lg rounded-tr-none max-w-[85%] shadow-sm relative">
<p className="text-sm">Mande o PDF da proposta comercial também.</p>
<div className="text-[10px] text-white/60 text-right mt-1 flex items-center justify-end gap-1">
                        10:32 <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path><path d="M20 12 14.5 17.5"></path></svg>
</div>
</div>
</div>

<div className="flex justify-start">
<div className="bg-[#202c33] text-white p-2 px-3 rounded-lg rounded-tl-none max-w-[85%] shadow-sm">
<p className="text-sm">Localizei "Proposta_Comercial_TechCorp_v2.pdf" no seu Drive. Enviando agora...</p>
<div className="mt-2 bg-black/20 p-2 rounded text-xs flex items-center gap-2 border border-white/5">
<svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
<span>Enviado via WhatsApp</span>
</div>
<div className="text-[10px] text-white/60 text-right mt-1">10:32</div>
</div>
</div>
</div>

<div className="bg-[#202c33] p-2 flex items-center gap-2 z-10">
<button className="text-[#8696a0] p-1"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg></button>
<div className="flex-1 bg-[#2a3942] rounded-lg px-3 py-2 text-white text-sm">Digite uma mensagem</div>
<button className="text-[#8696a0] p-1"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg></button>
</div>
</div>
</div>


    </>
  );
}
