import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: '#CCFF00', // Neon Lime Green
brandhover: '#b3e600',
dark: '#050505',
surface: '#0A0A0A',
glass: 'rgba(10, 10, 10, 0.4)',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Space Grotesk', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)",
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-glow': 'pulseGlow 3s infinite',
'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'beam': 'borderBeam 8s linear infinite',
'spin-slow': 'spin 8s linear infinite',
'cursor-path': 'cursorPath 4s infinite',
'ui-change': 'uiChange 4s infinite',
'scan-line': 'scanLine 3s linear infinite',
'download-bar': 'downloadBar 3s ease-in-out infinite',
'stamp': 'stamp 3s ease-in-out infinite',
'mesh-breath': 'meshBreath 8s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
pulseGlow: {
'0%, 100%': { boxShadow: '0 0 20px -5px rgba(204, 255, 0, 0.1)' },
'50%': { boxShadow: '0 0 50px -10px rgba(204, 255, 0, 0.3)' },
},
borderBeam: {
'0%': { transform: 'rotate(0deg)' },
'100%': { transform: 'rotate(360deg)' },
},
cursorPath: {
'0%': { transform: 'translate(0, 0)' },
'30%': { transform: 'translate(40px, 30px)' },
'40%': { transform: 'translate(40px, 30px) scale(0.9)' }, /* Click */
'50%': { transform: 'translate(40px, 30px) scale(1)' },
'100%': { transform: 'translate(0, 0)' }
},
uiChange: {
'0%, 35%': { borderRadius: '4px', backgroundColor: 'rgba(255,255,255,0.1)' },
'40%, 100%': { borderRadius: '50px', backgroundColor: 'rgba(204,255,0,0.2)', borderColor: '#CCFF00' }
},
scanLine: {
'0%': { top: '0%', opacity: 0 },
'10%': { opacity: 1 },
'90%': { opacity: 1 },
'100%': { top: '100%', opacity: 0 }
},
downloadBar: {
'0%': { width: '0%' },
'50%': { width: '70%' },
'100%': { width: '100%' }
},
stamp: {
'0%, 30%': { transform: 'scale(1.5)', opacity: 0 },
'40%': { transform: 'scale(1)', opacity: 1 },
'45%': { transform: 'scale(1.05)' },
'50%, 100%': { transform: 'scale(1)', opacity: 1 }
},
meshBreath: {
'0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
'50%': { transform: 'scale(1.2)', opacity: '0.5' }
}
}
}
}
}



      document.addEventListener('DOMContentLoaded', () => {
          // Standard Reveal Animation
          const revealOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.1
          };

          const revealObserver = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('reveal-visible');
                      observer.unobserve(entry.target);
                  }
              });
          }, revealOptions);

          const revealElements = document.querySelectorAll('.reveal-element');
          revealElements.forEach(el => revealObserver.observe(el));

          // Scrollytelling Arsenal Logic
          const arsenalOptions = {
              root: null,
              // This triggers when the element is in the vertical center 20% of the screen
              rootMargin: '-40% 0px -40% 0px',
              threshold: 0
          };

          const arsenalObserver = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                      entry.target.classList.remove('inactive');
                  } else {
                      entry.target.classList.remove('active');
                      entry.target.classList.add('inactive');
                  }
              });
          }, arsenalOptions);

          const arsenalCards = document.querySelectorAll('.arsenal-card');
          arsenalCards.forEach(card => arsenalObserver.observe(card));

          // MAGNETIC BUTTON LOGIC
          const magneticBtn = document.querySelector('.magnetic-btn');

          if(magneticBtn) {
              magneticBtn.addEventListener('mousemove', (e) => {
                  const rect = magneticBtn.getBoundingClientRect();
                  const x = e.clientX - rect.left - rect.width / 2;
                  const y = e.clientY - rect.top - rect.height / 2;

                  // Reduced intensity (0.2) for subtle effect
                  magneticBtn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
              });

              magneticBtn.addEventListener('mouseleave', () => {
                  magneticBtn.style.transform = 'translate(0, 0)';
              });
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[120px] animate-orb-move"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand/5 rounded-full blur-[100px] animate-orb-move" style={{animationDirection: 'reverse', animationDuration: '25s'}}></div>
<div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-emerald-800/10 rounded-full blur-[150px] animate-pulse"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-dark/70 backdrop-blur-xl">
<div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 reveal-element">
<span className="iconify text-brand drop-shadow-[0_0_8px_rgba(204,255,0,0.5)]" data-icon="lucide:zap" data-width="20"></span>
<span className="font-heading font-bold text-white tracking-tight">
            PLAYERPACK
          </span>
</div>
<a className="reveal-element btn-press px-5 py-2 text-xs font-bold bg-brand text-black rounded-full transition-all hover:shadow-[0_0_15px_rgba(204,255,0,0.4)] btn-sheen" href="#offer">
          Acessar Agora
        </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-44 lg:pb-36 overflow-hidden min-h-screen flex items-center bg-[#050505]">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200vw] h-[600px] cyber-floor pointer-events-none z-0 opacity-20"></div>
<div className="container mx-auto px-4 sm:px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="text-center lg:text-left z-20 flex flex-col items-center lg:items-start order-2 lg:order-1">
<div className="reveal-element inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/5 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-wider mb-8 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse shadow-[0_0_8px_#CCFF00]"></span>
              Novo Método Disponível
            </div>

<h1 className="reveal-element font-heading font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tighter text-white mb-6 text-balance max-w-2xl" style={{transitionDelay: '100ms'}}>
              Playerpack: O Arsenal de Templates para
              <span className="text-brand drop-shadow-[0_0_15px_rgba(204,255,0,0.3)]">
                Vender Design Estratégico.
              </span>
</h1>
<p className="reveal-element text-neutral-400 text-lg mb-10 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed tracking-tight" style={{transitionDelay: '200ms'}}>
              A estrutura de templates validada para você elevar o nível das
              suas entregas. Gere valor real, diferencie-se da multidão e feche
              contratos High-Ticket.
            </p>
<div className="reveal-element flex flex-col w-full sm:w-auto sm:flex-row items-center gap-6" style={{transitionDelay: '300ms'}}>
<a className="w-full sm:w-auto btn-press btn-sheen px-8 py-4 bg-brand text-black font-bold text-sm rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(204,255,0,0.5)] flex items-center justify-center gap-2 group" href="#offer">
                Quero os templates
                <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<div className="flex items-center gap-6 text-xs font-medium text-neutral-400">
<div className="flex items-center gap-2 group cursor-default">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand/30 transition-colors">
<span className="iconify text-brand" data-icon="lucide:check-circle-2" data-width="14"></span>
</div>
<span>100% Online</span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand/30 transition-colors">
<span className="iconify text-brand" data-icon="lucide:infinity" data-width="14"></span>
</div>
<span>Vitalício</span>
</div>
</div>
</div>
</div>

<div className="reveal-element relative w-full h-[500px] flex items-center justify-center perspective-[2000px] scale-[0.75] sm:scale-100 lg:scale-110 order-1 lg:order-2" style={{transitionDelay: '400ms'}}>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#CCFF00] blur-[150px] opacity-20 rounded-full animate-pulse-glow z-0"></div>

<div className="relative w-[340px] h-[460px] preserve-3d transition-transform duration-700 hover:rotate-y-0 hover:rotate-x-0" style={{transformStyle: 'preserve-3d', transform: 'rotateY(-12deg) rotateX(6deg)'}}>

<svg className="absolute inset-0 w-full h-full z-0 overflow-visible pointer-events-none drop-shadow-[0_0_8px_rgba(204,255,0,0.5)]" viewbox="0 0 340 460">

<path className="animate-pulse" d="M170 230 L40 50" fill="none" opacity="0.4" stroke="#CCFF00" stroke-dasharray="4 4" strokeWidth="1"></path>

<path className="animate-pulse" d="M170 230 L300 90" fill="none" opacity="0.4" stroke="#CCFF00" stroke-dasharray="4 4" strokeWidth="1" style={{animationDelay: '0.5s'}}></path>

<path className="animate-pulse" d="M170 230 L310 390" fill="none" opacity="0.4" stroke="#CCFF00" stroke-dasharray="4 4" strokeWidth="1" style={{animationDelay: '1s'}}></path>

<path className="animate-pulse" d="M170 230 L30 410" fill="none" opacity="0.4" stroke="#CCFF00" stroke-dasharray="4 4" strokeWidth="1" style={{animationDelay: '1.5s'}}></path>

<circle className="animate-pulse-glow" cx="170" cy="230" fill="#CCFF00" r="4"></circle>
</svg>

<div className="absolute inset-0 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col animate-float" style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', borderColor: 'rgba(204,255,0,0.15)'}}>

<div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-20 pointer-events-none"></div>

<div className="p-5 flex flex-col h-full relative z-20">
<div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-[#CCFF00]/20 border border-[#CCFF00]/30 flex items-center justify-center">
<span className="iconify text-[#CCFF00]" data-icon="lucide:grid" data-width="16"></span>
</div>
<div className="flex flex-col gap-0.5">
<div className="w-20 h-2 bg-white/20 rounded-full"></div>
<div className="w-12 h-1.5 bg-white/10 rounded-full"></div>
</div>
</div>
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
</div>
</div>

<div className="flex-1 w-full bg-black/20 rounded-lg border border-white/5 p-4 relative overflow-hidden mb-4">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]"></div>
<div className="flex items-end justify-between h-full gap-2 relative z-10 px-2 pb-2">
<div className="w-full bg-[#CCFF00]/10 rounded-t h-[30%]"></div>
<div className="w-full bg-[#CCFF00]/20 rounded-t h-[50%]"></div>
<div className="w-full bg-[#CCFF00]/40 rounded-t h-[40%]"></div>
<div className="w-full bg-[#CCFF00]/30 rounded-t h-[70%]"></div>
<div className="w-full bg-[#CCFF00] rounded-t h-[90%] shadow-[0_0_15px_#CCFF00]"></div>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="h-12 bg-white/5 rounded-lg border border-white/5 p-2 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white/10"></div>
<div className="flex-1 space-y-1.5">
<div className="w-full h-1.5 bg-white/10 rounded"></div>
<div className="w-2/3 h-1.5 bg-white/10 rounded"></div>
</div>
</div>
<div className="h-12 bg-white/5 rounded-lg border border-white/5 p-2 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white/10"></div>
<div className="flex-1 space-y-1.5">
<div className="w-full h-1.5 bg-white/10 rounded"></div>
<div className="w-2/3 h-1.5 bg-white/10 rounded"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -top-6 -left-10 w-16 h-16 glass-panel rounded-xl flex items-center justify-center z-30 animate-float shadow-lg border border-white/20" style={{animationDelay: '0.2s'}}>
<div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-xl pointer-events-none"></div>
<span className="iconify text-[#CCFF00] drop-shadow-[0_0_8px_rgba(204,255,0,0.8)]" data-icon="lucide:radar" data-width="28"></span>
</div>

<div className="absolute top-10 -right-12 w-16 h-16 glass-panel rounded-xl flex items-center justify-center z-30 animate-float shadow-lg border border-white/20" style={{animationDelay: '1.5s'}}>
<div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-xl pointer-events-none"></div>
<span className="iconify text-[#CCFF00] drop-shadow-[0_0_8px_rgba(204,255,0,0.8)]" data-icon="lucide:dna" data-width="28"></span>
</div>

<div className="absolute bottom-20 -right-8 w-16 h-16 glass-panel rounded-xl flex items-center justify-center z-30 animate-float shadow-lg border border-white/20" style={{animationDelay: '0.8s'}}>
<div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-xl pointer-events-none"></div>
<span className="iconify text-[#CCFF00] drop-shadow-[0_0_8px_rgba(204,255,0,0.8)]" data-icon="lucide:crown" data-width="28"></span>
</div>

<div className="absolute bottom-5 -left-12 w-16 h-16 glass-panel rounded-xl flex items-center justify-center z-30 animate-float shadow-lg border border-white/20" style={{animationDelay: '2.2s'}}>
<div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-xl pointer-events-none"></div>
<span className="iconify text-[#CCFF00] drop-shadow-[0_0_8px_rgba(204,255,0,0.8)]" data-icon="lucide:eye" data-width="28"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="arsenal-section">
<div className="container mx-auto px-4 sm:px-6">
<div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">

<div className="lg:w-5/12 lg:sticky lg:top-32 h-fit pb-10">
<div className="reveal-element">
<h2 className="font-heading font-semibold text-4xl lg:text-5xl text-white mb-6 leading-tight">
                O Arsenal do
                <br/>
<span className="text-brand drop-shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                  Estrategista
                </span>
</h2>
<p className="text-neutral-400 text-base max-w-md leading-relaxed">
                4 Templates fundamentais para você provar seu valor estratégico,
                sair da guerra de preços e fechar os melhores clientes do
                mercado.
              </p>
<div className="mt-10 hidden lg:block">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 text-sm text-neutral-500">
<div className="w-px h-12 bg-gradient-to-b from-brand/50 to-transparent"></div>
<p>Role para explorar os módulos</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:w-7/12 flex flex-col gap-32 pb-32 w-full">

<div className="arsenal-card glass-panel rounded-2xl overflow-hidden inactive" data-index="1">
<div className="h-56 bg-black/40 relative overflow-hidden border-b border-white/5">
<div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
<div className="absolute bottom-4 right-4 text-[120px] leading-none font-heading font-bold text-white/5 select-none">
                  01
                </div>
<div className="absolute top-6 left-6 w-12 h-12 bg-brand text-black rounded-xl flex items-center justify-center shadow-lg shadow-brand/20">
<span className="iconify" data-icon="lucide:radar" data-width="24"></span>
</div>
</div>
<div className="p-8 md:p-10">
<h3 className="text-2xl font-heading font-semibold text-white mb-3">
                  PlayerScan
                </h3>
<p className="text-base text-neutral-400 mb-8 leading-relaxed">
                  O template definitivo para mapear o terreno antes do
                  lançamento. Entenda o público, o mercado e como posicionar seu
                  expert.
                </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-neutral-500">
<span className="iconify text-brand mt-0.5" data-icon="lucide:circle-dot" data-width="12"></span>
                    Pesquisa de Mercado Profunda
                  </li>
<li className="flex items-start gap-3 text-sm text-neutral-500">
<span className="iconify text-brand mt-0.5" data-icon="lucide:circle-dot" data-width="12"></span>
                    Análise de Concorrência
                  </li>
</ul>
</div>
</div>

<div className="arsenal-card glass-panel rounded-2xl overflow-hidden inactive" data-index="2">
<div className="h-56 bg-black/40 relative overflow-hidden border-b border-white/5">
<div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
<div className="absolute bottom-4 right-4 text-[120px] leading-none font-heading font-bold text-white/5 select-none">
                  02
                </div>
<div className="absolute top-6 left-6 w-12 h-12 bg-brand text-black rounded-xl flex items-center justify-center shadow-lg shadow-brand/20">
<span className="iconify" data-icon="lucide:fingerprint" data-width="24"></span>
</div>
</div>
<div className="p-8 md:p-10">
<h3 className="text-2xl font-heading font-semibold text-white mb-3">
                  PlayerIdentity
                </h3>
<p className="text-base text-neutral-400 mb-8 leading-relaxed">
                  Defina a alma do lançamento. O guia completo para extrair e
                  documentar o arquétipo e a narrativa única do seu expert.
                </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-neutral-500">
<span className="iconify text-brand mt-0.5" data-icon="lucide:circle-dot" data-width="12"></span>
                    Definição de Arquétipo
                  </li>
<li className="flex items-start gap-3 text-sm text-neutral-500">
<span className="iconify text-brand mt-0.5" data-icon="lucide:circle-dot" data-width="12"></span>
                    Big Idea do Produto
                  </li>
</ul>
</div>
</div>

<div className="arsenal-card glass-panel rounded-2xl overflow-hidden inactive" data-index="3">
<div className="h-56 bg-black/40 relative overflow-hidden border-b border-white/5">
<div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
<div className="absolute bottom-4 right-4 text-[120px] leading-none font-heading font-bold text-white/5 select-none">
                  03
                </div>
<div className="absolute top-6 left-6 w-12 h-12 bg-brand text-black rounded-xl flex items-center justify-center shadow-lg shadow-brand/20">
<span className="iconify" data-icon="lucide:crown" data-width="24"></span>
</div>
</div>
<div className="p-8 md:p-10">
<h3 className="text-2xl font-heading font-semibold text-white mb-3">
                  AuthorityStack
                </h3>
<p className="text-base text-neutral-400 mb-8 leading-relaxed">
                  Transforme seu expert em uma autoridade inquestionável.
                  Estruture os elementos de prova social e conteúdo.
                </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-neutral-500">
<span className="iconify text-brand mt-0.5" data-icon="lucide:circle-dot" data-width="12"></span>
                    Engenharia de Autoridade
                  </li>
<li className="flex items-start gap-3 text-sm text-neutral-500">
<span className="iconify text-brand mt-0.5" data-icon="lucide:circle-dot" data-width="12"></span>
                    Mapa de Conteúdo de Aquecimento
                  </li>
</ul>
</div>
</div>

<div className="arsenal-card glass-panel rounded-2xl overflow-hidden inactive" data-index="4">
<div className="h-56 bg-black/40 relative overflow-hidden border-b border-white/5">
<div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
<div className="absolute bottom-4 right-4 text-[120px] leading-none font-heading font-bold text-white/5 select-none">
                  04
                </div>
<div className="absolute top-6 left-6 w-12 h-12 bg-brand text-black rounded-xl flex items-center justify-center shadow-lg shadow-brand/20">
<span className="iconify" data-icon="lucide:palette" data-width="24"></span>
</div>
</div>
<div className="p-8 md:p-10">
<h3 className="text-2xl font-heading font-semibold text-white mb-3">
                  Player Visual
                </h3>
<p className="text-base text-neutral-400 mb-8 leading-relaxed">
                  A materialização da estratégia. Entregue uma identidade visual
                  de lançamento que converte e alinha com os passos anteriores.
                </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-neutral-500">
<span className="iconify text-brand mt-0.5" data-icon="lucide:circle-dot" data-width="12"></span>
                    Direção de Arte do Lançamento
                  </li>
<li className="flex items-start gap-3 text-sm text-neutral-500">
<span className="iconify text-brand mt-0.5" data-icon="lucide:circle-dot" data-width="12"></span>
                    Assets para CPLs e Vendas
                  </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-black/20 backdrop-blur-sm relative z-10 py-16">
<div className="container mx-auto px-4 sm:px-6">
<div className="text-center mb-10 reveal-element">
<h2 className="font-heading font-semibold text-2xl text-white">
            Tudo o que você precisa.
            <span className="text-neutral-500">Sem enrolação.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-min">

<div className="col-span-1 md:col-span-8 glass-panel rounded-2xl p-6 relative overflow-hidden group reveal-element min-h-[220px] flex flex-col justify-between" style={{transitionDelay: '0ms'}}>
<div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>

<div className="absolute top-4 right-4 w-32 h-32 md:w-48 md:h-48">
<div className="relative w-full h-full bg-white/5 rounded-lg border border-white/10 overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 p-2 grid gap-2">
<div className="h-2 w-full bg-white/10 rounded"></div>
<div className="flex gap-2">
<div className="w-1/3 h-20 bg-white/5 rounded"></div>
<div className="w-2/3 h-20 animate-ui-change border border-transparent"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/3 z-20 animate-cursor-path">
<svg fill="none" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="#CCFF00" stroke="black" strokeWidth="1.5"></path>
</svg>
<div className="absolute top-4 left-4 bg-[#CCFF00] text-black text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap">
                    Araújo
                  </div>
</div>
</div>
</div>
<div className="relative z-10 mt-auto md:mt-0">
<div className="w-10 h-10 mb-3 rounded-lg bg-white/10 flex items-center justify-center text-brand">
<span className="iconify" data-icon="lucide:pen-tool" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-lg mb-1 group-hover:text-brand transition-colors">
                100% Editável no Figma
              </h3>
<p className="text-neutral-500 text-sm max-w-[250px]">
                Arquivos abertos e organizados. Mude cores, textos e imagens em
                segundos.
              </p>
</div>
</div>

<div className="col-span-1 md:col-span-4 glass-panel rounded-2xl p-6 relative overflow-hidden group reveal-element min-h-[220px]" style={{transitionDelay: '100ms'}}>

<div className="absolute top-1/2 right-4 -translate-y-1/2 w-20 h-28 bg-white/5 border border-white/10 rounded overflow-hidden">
<div className="p-2 space-y-1.5">
<div className="h-1.5 w-1/2 bg-white/20 rounded"></div>
<div className="h-1 w-full bg-white/10 rounded"></div>
<div className="h-1 w-full bg-white/10 rounded"></div>
<div className="h-1 w-2/3 bg-white/10 rounded"></div>
<div className="h-16 w-full bg-white/5 rounded mt-2"></div>
</div>

<div className="absolute left-0 w-full h-8 bg-gradient-to-b from-brand/20 to-transparent border-t border-brand/50 animate-scan-line z-10"></div>
</div>
<div className="relative z-10 h-full flex flex-col justify-end">
<div className="w-10 h-10 mb-3 rounded-lg bg-white/10 flex items-center justify-center text-brand">
<span className="iconify" data-icon="lucide:book-open" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-lg mb-1 group-hover:text-brand transition-colors">
                Guia de Uso
              </h3>
<p className="text-neutral-500 text-sm max-w-[150px]">
                Documentação passo a passo.
              </p>
</div>
</div>

<div className="col-span-1 md:col-span-4 glass-panel rounded-2xl p-6 relative overflow-hidden group reveal-element min-h-[220px]" style={{transitionDelay: '200ms'}}>

<div className="absolute top-4 right-4 w-24 h-32 flex items-center justify-center">
<div className="w-full h-full bg-white/5 border border-white/10 rounded p-2 flex flex-col gap-2">
<div className="h-2 w-10 bg-white/20 rounded"></div>
<div className="flex-1 bg-white/5 rounded"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center animate-stamp">
<div className="w-16 h-16 rounded-full border-2 border-brand text-brand flex items-center justify-center transform -rotate-12 backdrop-blur-sm bg-black/30 shadow-[0_0_15px_rgba(204,255,0,0.3)]">
<span className="text-[8px] font-bold uppercase tracking-widest">
                    100% livre
                  </span>
</div>
</div>
</div>
<div className="relative z-10 h-full flex flex-col justify-end">
<div className="w-10 h-10 mb-3 rounded-lg bg-white/10 flex items-center justify-center text-brand">
<span className="iconify" data-icon="lucide:file-check" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-lg mb-1 group-hover:text-brand transition-colors">
                Licença Comercial
              </h3>
<p className="text-neutral-500 text-sm max-w-[150px]">
                Lucre livremente com seus clientes.
              </p>
</div>
</div>

<div className="col-span-1 md:col-span-8 glass-panel rounded-2xl p-6 relative overflow-hidden group reveal-element min-h-[220px] flex flex-col justify-between" style={{transitionDelay: '300ms'}}>

<div className="absolute top-8 right-8 w-48">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
<span className="iconify text-brand" data-icon="lucide:folder-down" data-width="16"></span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-white">Playerpack.zip</span>
<span className="text-[8px] text-neutral-500">245 MB</span>
</div>
</div>

<div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">

<div className="h-full bg-brand rounded-full animate-download-bar shadow-[0_0_10px_#CCFF00]"></div>
</div>
<div className="flex justify-between mt-1">
<span className="text-[8px] text-neutral-500">Downloading...</span>
<span className="text-[8px] text-brand font-mono">10MB/s</span>
</div>
</div>
<div className="relative z-10 mt-auto md:mt-0">
<div className="w-10 h-10 mb-3 rounded-lg bg-white/10 flex items-center justify-center text-brand">
<span className="iconify" data-icon="lucide:download-cloud" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-lg mb-1 group-hover:text-brand transition-colors">
                Download Imediato
              </h3>
<p className="text-neutral-500 text-sm max-w-[280px]">
                Acesso liberado automaticamente no seu e-mail assim que o
                pagamento confirmar.
              </p>
</div>
</div>
</div>

<div className="flex flex-wrap justify-center gap-4 mt-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 reveal-element" style={{transitionDelay: '400ms'}}>
<div className="flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px]">
<span className="iconify" data-icon="lucide:infinity" data-width="12"></span>
            Acesso Vitalício
          </div>
<div className="flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px]">
<span className="iconify" data-icon="lucide:globe" data-width="12"></span>
            100% Online
          </div>
<div className="flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px]">
<span className="iconify" data-icon="lucide:shield-check" data-width="12"></span>
            Garantia de 7 Dias
          </div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-black/40 backdrop-blur-md relative z-10">
<div className="container mx-auto px-4 sm:px-6">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">

<div className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 glass-panel rounded-2xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden reveal-element border border-white/5">
<div className="relative z-10">
<h2 className="font-heading font-semibold text-3xl lg:text-4xl text-white leading-tight mb-6">
                Design sem estratégia
                <br/>
                é
                <span className="text-neutral-500 line-through decoration-neutral-500/50">
                  commodity
                </span>
                .
                <br/>
                Com estratégia, vira
                <br/>
<span className="text-brand drop-shadow-[0_0_10px_rgba(204,255,0,0.5)]">
                  necessidade
                </span>
                .
              </h2>
<p className="text-neutral-400 text-sm leading-relaxed max-w-lg">
                Enquanto 99% dos designers brigam por centavos focando apenas no
                visual, os Estrategistas Playerpack dominam o jogo construindo
                valor desde o início.
              </p>
</div>

<div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-brand/5 blur-[80px] rounded-full pointer-events-none"></div>
</div>

<div className="col-span-1 hover-beam rounded-2xl p-6 relative group transition-transform duration-300 hover:scale-[1.02] cursor-default reveal-element" style={{transitionDelay: '100ms'}}>
<div className="absolute -right-2 -bottom-6 text-[80px] font-heading font-bold text-white/5 select-none group-hover:text-brand/5 transition-colors duration-500">
              01
            </div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-brand group-hover:text-black group-hover:bg-brand transition-all duration-300 shadow-lg shadow-black/20">
<span className="iconify group-hover:animate-pulse" data-icon="lucide:scan-search" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-bold text-base mb-1 group-hover:text-brand transition-colors">
                  Diagnóstico
                </h4>
<p className="text-neutral-500 text-[11px] leading-relaxed group-hover:text-neutral-300 transition-colors">
                  Entenda o cenário com PlayerScan
                </p>
</div>
</div>
</div>

<div className="col-span-1 hover-beam rounded-2xl p-6 relative group transition-transform duration-300 hover:scale-[1.02] cursor-default reveal-element" style={{transitionDelay: '150ms'}}>
<div className="absolute -right-2 -bottom-6 text-[80px] font-heading font-bold text-white/5 select-none group-hover:text-brand/5 transition-colors duration-500">
              02
            </div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-brand group-hover:text-black group-hover:bg-brand transition-all duration-300 shadow-lg shadow-black/20">
<span className="iconify group-hover:animate-spin-slow" data-icon="lucide:dna" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-bold text-base mb-1 group-hover:text-brand transition-colors">
                  Fundação
                </h4>
<p className="text-neutral-500 text-[11px] leading-relaxed group-hover:text-neutral-300 transition-colors">
                  Defina a essência com PlayerIdentity
                </p>
</div>
</div>
</div>

<div className="col-span-1 hover-beam rounded-2xl p-6 relative group transition-transform duration-300 hover:scale-[1.02] cursor-default reveal-element" style={{transitionDelay: '200ms'}}>
<div className="absolute -right-2 -bottom-6 text-[80px] font-heading font-bold text-white/5 select-none group-hover:text-brand/5 transition-colors duration-500">
              03
            </div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-brand group-hover:text-black group-hover:bg-brand transition-all duration-300 shadow-lg shadow-black/20">
<span className="iconify group-hover:scale-110 transition-transform" data-icon="lucide:trophy" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-bold text-base mb-1 group-hover:text-brand transition-colors">
                  Poder
                </h4>
<p className="text-neutral-500 text-[11px] leading-relaxed group-hover:text-neutral-300 transition-colors">
                  Construa influência com AuthorityStack
                </p>
</div>
</div>
</div>

<div className="col-span-1 hover-beam rounded-2xl p-6 relative group transition-transform duration-300 hover:scale-[1.02] cursor-default reveal-element" style={{transitionDelay: '250ms'}}>
<div className="absolute -right-2 -bottom-6 text-[80px] font-heading font-bold text-white/5 select-none group-hover:text-brand/5 transition-colors duration-500">
              04
            </div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-brand group-hover:text-black group-hover:bg-brand transition-all duration-300 shadow-lg shadow-black/20">
<span className="iconify group-hover:animate-pulse" data-icon="lucide:sparkles" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-bold text-base mb-1 group-hover:text-brand transition-colors">
                  Expressão
                </h4>
<p className="text-neutral-500 text-[11px] leading-relaxed group-hover:text-neutral-300 transition-colors">
                  Materialize a marca com Player Visual
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden z-10">
<div className="container mx-auto px-4 sm:px-6">
<div className="text-center mb-16 reveal-element">
<h2 className="font-heading font-semibold text-3xl md:text-4xl text-white mb-4">
            A diferença entre ganhar
            <span className="line-through decoration-neutral-600 text-neutral-500">
              trocados
            </span>
            e fazer
            <br/>
<span className="text-brand drop-shadow-[0_0_15px_rgba(204,255,0,0.5)]">
              dinheiro
            </span>
            .
          </h2>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="glass-panel rounded-2xl p-8 opacity-60 hover:opacity-100 transition-opacity reveal-element" style={{transitionDelay: '0ms'}}>
<div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
<h3 className="font-bold text-white">Designer Comum</h3>
<span className="text-xs font-mono text-neutral-500">O PADRÃO</span>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-neutral-500">
<span className="iconify text-red-500/70" data-icon="lucide:x" data-width="16"></span>
                Vende apenas "visual bonito"
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-500">
<span className="iconify text-red-500/70" data-icon="lucide:x" data-width="16"></span>
                Cliente pede alteração toda hora
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-500">
<span className="iconify text-red-500/70" data-icon="lucide:x" data-width="16"></span>
                Concorre com sobrinhos e IA
              </li>
</ul>
<div className="mt-8 pt-4 border-t border-white/5">
<p className="text-xs text-neutral-500 mb-1">
                Preço médio por Landing Page:
              </p>
<p className="text-white font-bold text-xl">R$ 200 - R$ 500</p>
</div>
</div>

<div className="border-beam-card bg-black/80 p-8 transform md:scale-105 shadow-2xl reveal-element" style={{transitionDelay: '200ms'}}>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(204,255,0,0.6)] z-10">
              Você com o Playerpack
            </div>
<div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4 relative z-10">
<h3 className="font-bold text-white">Estrategista Playerpack</h3>
<span className="text-[10px] font-bold text-brand border border-brand/20 bg-brand/5 px-2 py-0.5 rounded backdrop-blur-sm">
                HIGH TICKET
              </span>
</div>
<ul className="space-y-4 relative z-10">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-brand" data-icon="lucide:check" data-width="16"></span>
                Vende
                <strong className="text-white">Solução de Negócio</strong>
</li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-brand" data-icon="lucide:check" data-width="16"></span>
                Cliente vê como autoridade e respeita
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-brand" data-icon="lucide:check" data-width="16"></span>
                Sem concorrência (oceano azul)
              </li>
</ul>
<div className="mt-8 pt-4 border-t border-white/10 relative z-10">
<p className="text-xs text-neutral-400 mb-1">
                Preço médio por Landing Page:
              </p>
<p className="text-white font-bold text-3xl drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                R$ 2.000+
                <span className="text-[10px] text-brand ml-2 align-middle">
                  LUCRO 10X MAIOR
                </span>
</p>
</div>
</div>
</div>
<p className="text-center text-xs text-neutral-600 mt-8">
          É o mesmo trabalho técnico. A única diferença é a
          <span className="text-brand">Estratégia Playerpack</span>
          .
        </p>
</div>
</section>

<section className="py-24 relative z-10">
<div className="container mx-auto px-4 sm:px-6">
<div className="text-center mb-16 reveal-element">
<h2 className="font-heading font-semibold text-3xl text-white mb-2">
            Eu cobrei
            <span className="text-brand drop-shadow-[0_0_10px_rgba(204,255,0,0.5)]">
              +R$ 2.000
            </span>
            nestes projetos.
          </h2>
<p className="text-neutral-500 text-sm max-w-xl mx-auto">
            Usando exatamente os mesmos templates e estruturas que você vai
            receber.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

<div className="glass-panel rounded-xl overflow-hidden group reveal-element" style={{transitionDelay: '0ms'}}>

<div className="h-8 bg-[#1a1a1a]/50 flex items-center gap-2 px-4 border-b border-white/5 backdrop-blur-md">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>

<div className="h-64 relative bg-black/50 overflow-hidden">
<div className="absolute inset-0 screen-glare z-20"></div>

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"></div>
</div>

<div className="p-6">
<div className="flex justify-between items-end">
<div>
<span className="text-[10px] font-bold text-brand uppercase tracking-wider mb-1 block">
                    Finanças / Trading
                  </span>
<h4 className="text-white font-bold text-lg">VIP DEOR</h4>
</div>
<div className="text-right">
<span className="text-[10px] text-neutral-500 block">
                    VALOR COBRADO
                  </span>
<span className="text-brand font-bold text-lg drop-shadow-[0_0_5px_rgba(204,255,0,0.5)]">
                    R$ 3.700,00
                  </span>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl overflow-hidden group reveal-element" style={{transitionDelay: '200ms'}}>
<div className="h-8 bg-[#1a1a1a]/50 flex items-center gap-2 px-4 border-b border-white/5 backdrop-blur-md">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
<div className="h-64 relative bg-black/50 overflow-hidden">
<div className="absolute inset-0 screen-glare z-20"></div>
<div className="absolute inset-0 bg-[url('https://drive.google.com/u/0/drive-viewer/AKGpihaltFf5T4MwnMoekyv4-2JR9Tyx6Gajs70fdUTe9Z_SQnXD2PCW4B-jEQvsKfvs_y8HwjK-_IKFb0v_M5_gf9z26zuRiaQlZJU=s1600-rw-v1?auditContext=forDisplay')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"></div>
</div>
<div className="p-6">
<div className="flex justify-between items-end">
<div>
<span className="text-[10px] font-bold text-brand uppercase tracking-wider mb-1 block">
                    Desenvolvimento Pessoal
                  </span>
<h4 className="text-white font-bold text-lg">
                    Marca Milionária
                    <br/>
                    M10
                  </h4>
</div>
<div className="text-right">
<span className="text-[10px] text-neutral-500 block">
                    VALOR COBRADO
                  </span>
<span className="text-brand font-bold text-lg drop-shadow-[0_0_5px_rgba(204,255,0,0.5)]">
                    R$ 2.200,00
                  </span>
</div>
</div>
</div>
</div>
</div>
<p className="text-center text-xs text-neutral-600 mt-6 max-w-2xl mx-auto italic">
          Nota: Você não precisa ser um gênio do design. A estrutura de
          autoridade já está pronta nos templates. É copiar, adaptar para o
          cliente e cobrar o valor justo.
        </p>
</div>
</section>

<section className="py-24 relative z-10">
<div className="container mx-auto px-4 sm:px-6">
<div className="text-center mb-10 reveal-element">
<h2 className="font-heading font-semibold text-2xl text-white">
            Se eu vendesse cada item
            <span className="text-brand">separadamente...</span>
</h2>
<p className="text-neutral-500 text-xs mt-2">
            O valor real do que você está prestes a acessar:
          </p>
</div>
<div className="max-w-3xl mx-auto flex flex-col gap-3 reveal-element">

<div className="relative group overflow-hidden rounded-xl border border-white/5 bg-white/5 p-1 transition-all hover:border-brand/30">
<div className="absolute inset-0 bg-gradient-to-r from-brand/10 via-transparent to-transparent opacity-20 transition-opacity group-hover:opacity-40"></div>
<div className="relative flex items-center gap-4 rounded-lg bg-black/20 p-4 backdrop-blur-sm">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-brand/20 bg-brand/5 text-brand shadow-[0_0_15px_-3px_rgba(204,255,0,0.3)]">
<span className="iconify" data-icon="lucide:unlock" data-width="24" strokeWidth="1.5"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-white">
                  Template PlayerScan
                  <span className="text-neutral-500 font-normal text-base ml-1">
                    (Diagnóstico)
                  </span>
</span>
</div>
<div className="ml-auto font-mono text-neutral-400 whitespace-nowrap">
                R$ 97,00
              </div>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl border border-white/5 bg-white/5 p-1 transition-all hover:border-brand/30">
<div className="absolute inset-0 bg-gradient-to-r from-brand/10 via-transparent to-transparent opacity-20 transition-opacity group-hover:opacity-40"></div>
<div className="relative flex items-center gap-4 rounded-lg bg-black/20 p-4 backdrop-blur-sm">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-brand/20 bg-brand/5 text-brand shadow-[0_0_15px_-3px_rgba(204,255,0,0.3)]">
<span className="iconify" data-icon="lucide:unlock" data-width="24" strokeWidth="1.5"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-white">
                  Template PlayerIdentity
                  <span className="text-neutral-500 font-normal text-base ml-1">
                    (Fundação)
                  </span>
</span>
</div>
<div className="ml-auto font-mono text-neutral-400 whitespace-nowrap">
                R$ 97,00
              </div>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl border border-white/5 bg-white/5 p-1 transition-all hover:border-brand/30">
<div className="absolute inset-0 bg-gradient-to-r from-brand/10 via-transparent to-transparent opacity-20 transition-opacity group-hover:opacity-40"></div>
<div className="relative flex items-center gap-4 rounded-lg bg-black/20 p-4 backdrop-blur-sm">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-brand/20 bg-brand/5 text-brand shadow-[0_0_15px_-3px_rgba(204,255,0,0.3)]">
<span className="iconify" data-icon="lucide:unlock" data-width="24" strokeWidth="1.5"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-white">
                  Template AuthorityStack
                  <span className="text-neutral-500 font-normal text-base ml-1">
                    (Autoridade)
                  </span>
</span>
</div>
<div className="ml-auto font-mono text-neutral-400 whitespace-nowrap">
                R$ 97,00
              </div>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl border border-white/5 bg-white/5 p-1 transition-all hover:border-brand/30">
<div className="absolute inset-0 bg-gradient-to-r from-brand/10 via-transparent to-transparent opacity-20 transition-opacity group-hover:opacity-40"></div>
<div className="relative flex items-center gap-4 rounded-lg bg-black/20 p-4 backdrop-blur-sm">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-brand/20 bg-brand/5 text-brand shadow-[0_0_15px_-3px_rgba(204,255,0,0.3)]">
<span className="iconify" data-icon="lucide:unlock" data-width="24" strokeWidth="1.5"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-white">
                  Template Player Visual
                  <span className="text-neutral-500 font-normal text-base ml-1">
                    (Identidade)
                  </span>
</span>
</div>
<div className="ml-auto font-mono text-neutral-400 whitespace-nowrap">
                R$ 97,00
              </div>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl border border-white/5 bg-white/5 p-1 transition-all hover:border-brand/30">
<div className="absolute inset-0 bg-gradient-to-r from-brand/10 via-transparent to-transparent opacity-20 transition-opacity group-hover:opacity-40"></div>
<div className="relative flex items-center gap-4 rounded-lg bg-black/20 p-4 backdrop-blur-sm">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-brand/20 bg-brand/5 text-brand shadow-[0_0_15px_-3px_rgba(204,255,0,0.3)]">
<span className="iconify" data-icon="lucide:gift" data-width="24" strokeWidth="1.5"></span>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-2">
<span className="text-lg font-semibold tracking-tight text-white">
                    Pack de Contratos de Prestação
                  </span>
<span className="bg-brand text-black text-[10px] font-bold px-2 py-0.5 rounded w-fit">
                    BÔNUS
                  </span>
</div>
</div>
<div className="ml-auto font-mono text-white font-bold whitespace-nowrap">
                R$ 197,00
              </div>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl border border-white/5 bg-white/5 p-1 transition-all hover:border-brand/30">
<div className="absolute inset-0 bg-gradient-to-r from-brand/10 via-transparent to-transparent opacity-20 transition-opacity group-hover:opacity-40"></div>
<div className="relative flex items-center gap-4 rounded-lg bg-black/20 p-4 backdrop-blur-sm">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-brand/20 bg-brand/5 text-brand shadow-[0_0_15px_-3px_rgba(204,255,0,0.3)]">
<span className="iconify" data-icon="lucide:gift" data-width="24" strokeWidth="1.5"></span>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-2">
<span className="text-lg font-semibold tracking-tight text-white">
                    Checklist de Lançamento
                  </span>
<span className="bg-brand text-black text-[10px] font-bold px-2 py-0.5 rounded w-fit">
                    BÔNUS
                  </span>
</div>
</div>
<div className="ml-auto font-mono text-white font-bold whitespace-nowrap">
                R$ 147,00
              </div>
</div>
</div>
</div>
<div className="text-center mt-12 reveal-element">
<div className="inline-flex flex-col items-center justify-center px-10 py-6 rounded-xl bg-brand text-black shadow-[0_0_40px_rgba(204,255,0,0.5)] transform hover:scale-105 transition-transform duration-300 border border-white/20">
<span className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">
              Valor Total do Arsenal
            </span>
<span className="text-4xl font-heading font-bold tracking-tighter">
              R$ 732,00
            </span>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="offer">
<div className="container mx-auto px-4 sm:px-6">
<div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

<div className="bg-surface border border-white/10 rounded-3xl p-8 sm:p-12 flex flex-col justify-center h-full reveal-element">
<h2 className="font-heading font-semibold text-3xl sm:text-4xl text-white mb-10 leading-tight">
              Você terá acesso a todo conteúdo abaixo para
              <span className="text-brand">elevar seu faturamento</span>
              como designer!
            </h2>
<ul className="space-y-5">
<li className="flex items-center gap-4">
<div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
<span className="iconify text-brand" data-icon="lucide:check" data-width="14"></span>
</div>
<span className="text-neutral-300 text-sm font-medium">
                  4 Templates Estratégicos (Figma)
                </span>
</li>
<li className="flex items-center gap-4">
<div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
<span className="iconify text-brand" data-icon="lucide:check" data-width="14"></span>
</div>
<span className="text-neutral-300 text-sm font-medium">
                  Acesso Vitalício ao Conteúdo
                </span>
</li>
<li className="flex items-center gap-4">
<div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
<span className="iconify text-brand" data-icon="lucide:check" data-width="14"></span>
</div>
<span className="text-neutral-300 text-sm font-medium">
                  Direito de Uso Comercial
                </span>
</li>
<li className="flex items-center gap-4">
<div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
<span className="iconify text-brand" data-icon="lucide:check" data-width="14"></span>
</div>
<span className="text-neutral-300 text-sm font-medium">
                  Atualizações Gratuitas
                </span>
</li>
<li className="flex items-center gap-4">
<div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
<span className="iconify text-brand" data-icon="lucide:check" data-width="14"></span>
</div>
<span className="text-neutral-300 text-sm font-medium">
                  Bônus: Pack de Contratos
                </span>
</li>
<li className="flex items-center gap-4">
<div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
<span className="iconify text-brand" data-icon="lucide:check" data-width="14"></span>
</div>
<span className="text-neutral-300 text-sm font-medium">
                  Bônus: Checklist de Lançamento
                </span>
</li>
<li className="flex items-center gap-4">
<div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
<span className="iconify text-brand" data-icon="lucide:check" data-width="14"></span>
</div>
<span className="text-neutral-300 text-sm font-medium">
                  Suporte Personalizado
                </span>
</li>
</ul>
</div>

<div className="bg-surface border border-brand/30 rounded-3xl p-8 sm:p-12 relative shadow-[0_0_60px_-20px_rgba(204,255,0,0.1)] reveal-element" style={{transitionDelay: '150ms'}}>

<div className="flex flex-col items-center mb-10">
<div className="relative border border-brand border-dashed px-8 py-3 rounded mb-5 group">

<div className="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 bg-brand border border-black"></div>
<div className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-brand border border-black"></div>
<div className="absolute -bottom-1.5 -left-1.5 w-2.5 h-2.5 bg-brand border border-black"></div>
<div className="absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 bg-brand border border-black"></div>

<div className="absolute -top-6 -right-6 text-brand transform rotate-12 drop-shadow-lg">
<svg fill="#CCFF00" height="24" stroke="black" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"></path>
</svg>
</div>
<span className="font-heading font-bold text-3xl text-white tracking-tight">
                  PLAYER
                  <span className="text-brand">PACK</span>
</span>
</div>
<div className="text-center space-y-1">
<p className="text-brand text-sm font-bold tracking-wide">
                  4 TEMPLATES COMPLETOS
                </p>
<p className="text-brand text-sm font-bold tracking-wide">
                  + PRESENTES EXCLUSIVOS
                </p>
</div>
</div>

<div className="text-center mb-6">
<p className="text-neutral-400 text-base font-light">
                De
                <span className="line-through decoration-white/30 mx-1">
                  R$ 97,00
                </span>
                por apenas:
              </p>
</div>
<div className="bg-white/5 rounded-2xl p-8 mb-8 text-center border border-white/5 shadow-inner">
<p className="text-neutral-400 text-xs mb-2 tracking-wide font-medium">
                À vista
              </p>
<div className="flex items-baseline justify-center gap-1 text-brand">
<span className="text-2xl font-bold">R$</span>
<span className="text-6xl font-heading font-bold tracking-tighter drop-shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                  19,90
                </span>
</div>
</div>

<a className="block w-full bg-brand hover:bg-brandhover text-black font-bold text-lg py-4 rounded-xl text-center transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] flex items-center justify-center gap-2 mb-8 group" href="#">
<span className="iconify transition-transform group-hover:scale-110" data-icon="lucide:flame" data-width="20"></span>
              Garantir minha vaga
            </a>

<p className="text-center text-neutral-500 text-xs mb-5">
              As vagas podem esgotar a qualquer momento!
            </p>
<div className="flex justify-center gap-4 opacity-40 grayscale hover:grayscale-0 transition-all">

<svg className="h-6 w-auto" fill="none" viewbox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
<rect fill="white" fillOpacity="0.1" height="32" rx="4" width="48"></rect>
<path d="M18.5547 7.78125H21.75L20.25 24.2188H17.0547L18.5547 7.78125ZM30.9375 7.96875C30.3281 7.75 29.25 7.53125 27.8906 7.53125C24.4219 7.53125 21.9844 9.375 21.9844 12.9375C21.9844 15.5 24.2812 16.9062 25.7344 17.625C27.2344 18.375 27.75 18.8438 27.75 19.5312C27.75 20.5938 26.4844 21.0938 25.3125 21.0938C24.1875 21.0938 22.7344 20.7812 21.6094 20.2812L21.0938 23.3438C22.2188 23.875 24.2812 24.2812 26.1562 24.2812C29.8594 24.2812 32.25 22.4688 32.25 18.8125C32.25 16.5938 30.8438 15.1562 28.5 14.0312C27.0938 13.3125 26.25 12.875 26.25 12.0625C26.25 11.2188 27.1875 10.7812 28.1719 10.7812C29.5312 10.7812 30.5625 11.0938 31.2188 11.4062L31.7344 8.28125C31.5469 8.21875 31.2656 8.09375 30.9375 7.96875ZM37.9688 24.2188H41.25L38.3906 7.78125H35.3906C34.7344 7.78125 34.2188 8.15625 33.9844 8.75L29.0625 24.2188H32.4375L33.1406 22.2188H37.3594L37.9688 24.2188ZM34.0781 19.5625L35.7656 14.9062L36.75 19.5625H34.0781ZM14.2031 7.78125L10.3125 18.5938L9.9375 16.625C9.46875 14.9375 8.01562 10.875 6.28125 9.9375L12.5156 24.2188H16.125L20.2031 7.78125H14.2031Z" fill="#E5E5E5"></path>
</svg>

<svg className="h-6 w-auto" fill="none" viewbox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
<rect fill="white" fillOpacity="0.1" height="32" rx="4" width="48"></rect>
<path d="M19.5 24H12.5V8H19.5V24ZM35.5 24H28.5V8H35.5V24Z" fill="#E5E5E5"></path>
<circle cx="18" cy="16" fill="#E5E5E5" fillOpacity="0.8" r="6"></circle>
<circle cx="30" cy="16" fill="#E5E5E5" fillOpacity="0.5" r="6"></circle>
</svg>

<svg className="h-6 w-auto" fill="none" viewbox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
<rect fill="white" fillOpacity="0.1" height="32" rx="4" width="48"></rect>
<path d="M24 10L18 16L24 22L30 16L24 10ZM24 8L32 16L24 24L16 16L24 8Z" fill="#E5E5E5"></path>
<path d="M24 12.5L20.5 16L24 19.5L27.5 16L24 12.5Z" fill="#E5E5E5"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-black/40 backdrop-blur-sm relative z-10">
<div className="container mx-auto px-4 sm:px-6">
<div className="flex flex-col md:flex-row gap-12 items-center max-w-5xl mx-auto">
<div className="w-full md:w-1/3 reveal-element">
<div className="relative aspect-[3/4] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/5">

<div className="absolute inset-0 bg-neutral-800 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=2574&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black to-transparent">
<h3 className="text-white font-bold text-lg">Breno Nery</h3>
<p className="text-brand text-xs font-medium drop-shadow-[0_0_5px_rgba(204,255,0,0.5)]">
                  Product Designer &amp; Estrategista
                </p>
</div>
<div className="absolute bottom-4 right-4 w-10 h-10 bg-black/80 rounded flex flex-col items-center justify-center text-[8px] font-bold text-white border border-white/10 backdrop-blur">
<span className="text-brand text-xs">5+</span>
                Anos de XP
              </div>
</div>
</div>
<div className="w-full md:w-2/3 reveal-element" style={{transitionDelay: '200ms'}}>
<h2 className="font-heading font-semibold text-3xl text-white mb-6">
              Quem está por trás do
              <span className="text-brand">Playerpack?</span>
</h2>
<div className="space-y-4 text-neutral-400 text-sm leading-relaxed">
<p>
                Olá, eu sou o Breno. Nos últimos 5 anos, atuei no design de
                produtos digitais, ajudando a lançar e escalar negócios que
                faturaram múltiplos 7 dígitos.
              </p>
<p>
                Percebi um padrão no mercado: designers talentosos sendo
                desvalorizados porque entregavam apenas "telas bonitas". O
                mercado não paga caro por beleza, paga por
                <strong className="text-white">resultado e estratégia</strong>
                .
              </p>
<p>
                Criei o Playerpack para quebrar esse ciclo. Eu empacotei toda a
                metodologia que uso nos meus projetos high-ticket em templates
                prontos, para que você possa pular a curva de aprendizado e
                começar a vender valor real imediatamente.
              </p>
</div>
<div className="flex gap-4 mt-8">
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-brand hover:border-brand/30 transition-all" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="18"></span>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-brand hover:border-brand/30 transition-all" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="18"></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative z-10">
<div className="container mx-auto px-4 sm:px-6 max-w-3xl">
<h2 className="font-heading font-semibold text-2xl text-white text-center mb-12 reveal-element">
          Ainda com
          <span className="text-brand">dúvidas?</span>
</h2>
<div className="space-y-4">
<details className="group glass-panel rounded-lg open:border-brand/30 transition-colors reveal-element" style={{transitionDelay: '0ms'}}>
<summary className="flex justify-between items-center p-5 cursor-pointer font-medium text-white text-sm">
              O Playerpack serve para quem está começando?
              <span className="iconify text-neutral-500 group-open:rotate-45 group-open:text-brand transition-all" data-icon="lucide:plus" data-width="20"></span>
</summary>
<div className="px-5 pb-5 text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4 mt-2">
              Com certeza. O Playerpack foi desenhado para ser intuitivo. Mesmo
              que você nunca tenha feito um projeto de estratégia, os templates
              te guiam passo a passo. É o atalho perfeito para começar com o pé
              direito.
            </div>
</details>
<details className="group glass-panel rounded-lg open:border-brand/30 transition-colors reveal-element" style={{transitionDelay: '100ms'}}>
<summary className="flex justify-between items-center p-5 cursor-pointer font-medium text-white text-sm">
              E se eu já sou experiente?
              <span className="iconify text-neutral-500 group-open:rotate-45 group-open:text-brand transition-all" data-icon="lucide:plus" data-width="20"></span>
</summary>
<div className="px-5 pb-5 text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4 mt-2">
              O Playerpack vai acelerar seu processo. Em vez de criar
              apresentações do zero a cada cliente, você terá uma base sólida e
              visualmente impactante, permitindo que você foque no que realmente
              importa: a estratégia personalizada.
            </div>
</details>
<details className="group glass-panel rounded-lg open:border-brand/30 transition-colors reveal-element" style={{transitionDelay: '200ms'}}>
<summary className="flex justify-between items-center p-5 cursor-pointer font-medium text-white text-sm">
              Preciso ser expert em Copy ou Estratégia?
              <span className="iconify text-neutral-500 group-open:rotate-45 group-open:text-brand transition-all" data-icon="lucide:plus" data-width="20"></span>
</summary>
<div className="px-5 pb-5 text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4 mt-2">
              Não. Os templates já possuem os gatilhos e a estrutura lógica
              montada. Você só precisa preencher as lacunas com as informações
              do cliente.
            </div>
</details>
<details className="group glass-panel rounded-lg open:border-brand/30 transition-colors reveal-element" style={{transitionDelay: '300ms'}}>
<summary className="flex justify-between items-center p-5 cursor-pointer font-medium text-white text-sm">
              Vou ter acesso imediato?
              <span className="iconify text-neutral-500 group-open:rotate-45 group-open:text-brand transition-all" data-icon="lucide:plus" data-width="20"></span>
</summary>
<div className="px-5 pb-5 text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4 mt-2">
              Sim! Assim que o pagamento for confirmado, você recebe um e-mail
              com o link de acesso à área de membros e os links para duplicar os
              arquivos no seu Figma.
            </div>
</details>
</div>
</div>
</section>

<footer className="py-10 bg-black border-t border-white/5 relative z-10">
<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-brand" data-icon="lucide:zap" data-width="18"></span>
<span className="text-white font-heading font-bold text-lg tracking-tight">
            PLAYERPACK
          </span>
</div>
<div className="text-[10px] text-neutral-600">
          © 2025 Playerpack Inc. Todos os direitos reservados.
        </div>
<div className="flex gap-6 text-[10px] text-neutral-500">
<a className="hover:text-brand transition-colors" href="#">
            Termos de Uso
          </a>
<a className="hover:text-brand transition-colors" href="#">Privacidade</a>
</div>
</div>
</footer>



    R
  
    </>
  );
}
