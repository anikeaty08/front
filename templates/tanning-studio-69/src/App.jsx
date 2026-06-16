import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // 1. Scroll Reveal Observer
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

            document.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el));

            // 2. Number Counter Observer
            const counterObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const targetStr = entry.target.getAttribute('data-target');
                        if(!targetStr) return;
                        
                        const target = parseFloat(targetStr.replace(/[^\d.-]/g, ''));
                        const suffix = entry.target.getAttribute('data-suffix') || '';
                        const prefix = entry.target.getAttribute('data-prefix') || '';
                        const duration = 2000; // 2 seconds
                        const frameRate = 1000 / 60;
                        const totalFrames = Math.round(duration / frameRate);
                        const easeOutQuad = t => t * (2 - t);
                        
                        let frame = 0;

                        const updateCounter = () => {
                            frame++;
                            const progress = easeOutQuad(frame / totalFrames);
                            const current = target * progress;

                            if (frame < totalFrames) {
                                // Format number based on magnitude
                                let displayValue = current;
                                if(target > 1000 && targetStr.indexOf('.') === -1) {
                                    displayValue = Math.floor(current).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                                } else {
                                    displayValue = Math.ceil(current);
                                }
                                
                                entry.target.innerText = prefix + displayValue + suffix;
                                requestAnimationFrame(updateCounter);
                            } else {
                                // Final format
                                let finalValue = target;
                                if(target > 1000 && targetStr.indexOf('.') === -1) {
                                     finalValue = target.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                                }
                                entry.target.innerText = prefix + finalValue + suffix;
                            }
                        };
                        
                        requestAnimationFrame(updateCounter);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            document.querySelectorAll('.counter').forEach(counter => counterObserver.observe(counter));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/40 bg-[#FAF7F2]/70 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between reveal-up is-visible">
<div className="flex items-center gap-2">

<div className="flex items-center -space-x-3">
<div className="w-6 h-6 rounded-full bg-[radial-gradient(circle,_#EFD5A8_0%,_#E8E0D4_100%)] mix-blend-multiply shadow-sm"></div>
<div className="w-6 h-6 rounded-full bg-[radial-gradient(circle,_#C9A472_0%,_#EFD5A8_100%)] mix-blend-multiply shadow-sm"></div>
<div className="w-6 h-6 rounded-full bg-[radial-gradient(circle,_#B07840_0%,_#C9A472_100%)] mix-blend-multiply shadow-sm"></div>
<div className="w-6 h-6 rounded-full bg-[radial-gradient(circle,_#8B5E30_0%,_#B07840_100%)] mix-blend-multiply shadow-sm"></div>
</div>
<span className="font-display font-semibold tracking-[0.28em] ml-3 text-lg text-[#2C2C2C]">SUNYA</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-[#6B6B6B] font-medium font-title">
<a className="hover:text-[#B07840] transition-colors" href="#">Como funciona</a>
<a className="hover:text-[#B07840] transition-colors" href="#">Funcionalidades</a>
<a className="hover:text-[#B07840] transition-colors" href="#">Preços</a>
<a className="hover:text-[#B07840] transition-colors flex items-center gap-1" href="#">Marketplace <span className="text-[10px] bg-[#EFD5A8]/30 text-[#8B5E30] px-1.5 py-0.5 rounded-full backdrop-blur-sm">Em breve</span></a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium font-title text-[#2C2C2C] hover:text-[#B07840] transition-colors" href="#">Entrar</a>
<button className="font-title bg-gradient-to-r from-[#B07840] to-[#C9A472] hover:opacity-90 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-[0_4px_14px_0_rgba(176,120,64,0.39)] hover:shadow-[0_6px_20px_rgba(176,120,64,0.23)] hover:-translate-y-0.5">
                    Começar Grátis
                </button>
</div>
</div>
</nav>

<header className="overflow-hidden pt-40 pr-6 pb-20 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#EFD5A8]/30 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="reveal-up inline-flex items-center px-3 py-1 rounded-full border border-white/60 bg-white/60 backdrop-blur-md text-xs text-[#B07840] mb-8 font-title font-medium shadow-sm">
                Feito para estúdios de bronzeamento
            </div>
<h1 className="reveal-up delay-100 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-[#2C2C2C]">
                O app que organiza o seu<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5E30] to-[#C9A472]">estúdio de bronzeamento.</span>
</h1>
<p className="reveal-up delay-200 text-lg text-[#6B6B6B] max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Organize suas clientes, controle seus atendimentos, gerencie o seu financeiro e tenha tudo no seu celular.
            </p>
<div className="reveal-up delay-300 flex flex-col items-center gap-4">
<button className="font-title bg-gradient-to-r from-[#B07840] to-[#C9A472] hover:opacity-90 text-white px-8 py-3 rounded-full text-base font-medium transition-all shadow-[0_4px_20px_0_rgba(176,120,64,0.3)] hover:-translate-y-0.5">
                    Organizar meu estúdio
                </button>
<div className="flex flex-wrap items-center justify-center gap-3 text-xs text-[#6B6B6B] font-title font-medium">
<span className="flex items-center gap-1"><iconify-icon className="text-[#B07840]" icon="solar:check-circle-linear"></iconify-icon> 7 dias grátis</span>
<span className="hidden sm:block text-[#E8E0D4]">•</span>
<span className="flex items-center gap-1"><iconify-icon className="text-[#B07840]" icon="solar:shield-check-linear"></iconify-icon> Sem cartão de crédito</span>
<span className="hidden sm:block text-[#E8E0D4]">•</span>
<span className="flex items-center gap-1"><iconify-icon className="text-[#B07840]" icon="solar:bolt-linear"></iconify-icon> Setup em 3 minutos</span>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto mt-20 relative reveal-up delay-300">
<div className="glass-card rounded-3xl p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
<div className="bg-white/90 backdrop-blur-xl rounded-[20px] p-6 md:p-10 flex flex-col md:flex-row gap-8 relative overflow-hidden border border-white/60">

<div className="w-full md:w-1/3 glass-element rounded-2xl p-6 flex flex-col items-center justify-between relative shadow-sm hover:shadow-md transition-shadow">
<div className="w-full flex justify-between text-xs text-[#6B6B6B] mb-4 font-title font-medium">
<span>FATURAMENTO HOJE</span>
<iconify-icon className="text-base text-[#6B6B6B]" icon="solar:menu-dots-semibold"></iconify-icon>
</div>
<div className="relative w-48 h-24 mb-4">

<svg className="w-full h-full" viewbox="0 0 200 100">
<path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#FAF7F2" strokeLinecap="round" strokeWidth="12"></path>
<path d="M 20 100 A 80 80 0 0 1 160 50" fill="none" stroke="url(#gradient)" stroke-dasharray="251" stroke-dashoffset="0" strokeLinecap="round" strokeWidth="12" style={{animation: 'fillGauge 2s ease-out forwards'}}></path>
<defs>
<lineargradient id="gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#C9A472"></stop>
<stop offset="100%" stop-color="#B07840"></stop>
</lineargradient>
</defs>
</svg>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
<div className="font-title text-3xl md:text-4xl font-medium text-[#2C2C2C] counter" data-prefix="R$ " data-target="1240">0</div>
</div>
</div>
<div className="text-center">
<div className="text-sm font-medium text-[#2C2C2C] font-title flex items-center justify-center gap-1"><iconify-icon className="text-green-500" icon="solar:arrow-up-linear"></iconify-icon> +18% vs ontem</div>
<div className="text-xs text-[#6B6B6B] mt-1 font-light">Dados 100% seguros</div>
</div>
</div>

<div className="w-full md:w-2/3 glass-element rounded-2xl p-6 relative shadow-sm">
<div className="flex justify-between items-start mb-8">
<div>
<div className="text-xs text-[#6B6B6B] mb-1 font-title font-medium">Próxima Cliente · 14:30</div>
<div className="text-xl font-medium text-[#2C2C2C] font-title">Maria Silva</div>
</div>
<div className="flex gap-2">
<div className="px-3 py-1 rounded-full border border-white/60 bg-white/80 backdrop-blur-sm text-[10px] text-[#B07840] font-title font-medium shadow-sm flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div> Confirmada
                                </div>
</div>
</div>

<div className="h-32 flex items-end justify-between gap-2 md:gap-4 px-2">

<div className="w-full bg-[#E8E0D4]/50 rounded-t-md h-[40%] transition-all duration-1000 ease-out" onload="this.style.height='40%'" style={{height: '0'}}></div>
<div className="w-full bg-gradient-to-t from-[#B07840] to-[#C9A472] rounded-t-md h-[70%] shadow-sm shadow-[#B07840]/20 transition-all duration-1000 delay-100 ease-out" style={{height: '0'}}></div>
<div className="w-full bg-[#E8E0D4]/50 rounded-t-md h-[50%] transition-all duration-1000 delay-75 ease-out" style={{height: '0'}}></div>
<div className="w-full bg-gradient-to-t from-[#C9A472] to-[#EFD5A8] rounded-t-md h-[30%] shadow-sm shadow-[#C9A472]/20 transition-all duration-1000 delay-150 ease-out" style={{height: '0'}}></div>
<div className="w-full bg-[#E8E0D4]/50 rounded-t-md h-[60%] transition-all duration-1000 delay-200 ease-out" style={{height: '0'}}></div>
<div className="w-full bg-[#E8E0D4]/50 rounded-t-md h-[45%] transition-all duration-1000 delay-100 ease-out" style={{height: '0'}}></div>
<div className="w-full bg-gradient-to-t from-[#B07840] to-[#C9A472] rounded-t-md h-[85%] shadow-sm shadow-[#B07840]/20 transition-all duration-1000 delay-300 ease-out" style={{height: '0'}}></div>
<div className="w-full bg-[#E8E0D4]/50 rounded-t-md h-[55%] transition-all duration-1000 delay-200 ease-out" style={{height: '0'}}></div>
<div className="w-full bg-[#E8E0D4]/50 rounded-t-md h-[40%] transition-all duration-1000 delay-75 ease-out" style={{height: '0'}}></div>
</div>

<div className="flex justify-between mt-4 text-xs text-[#6B6B6B] font-title font-medium px-1">
<span>Sessões da semana</span>
<span className="text-[#2C2C2C]"><span className="counter" data-target="42">0</span> Total</span>
</div>
</div>

<div className="absolute bottom-6 right-6 glass-card p-3 rounded-xl flex items-center gap-3 shadow-xl z-20 animate-[bounce_4s_infinite]">
<div className="text-right">
<div className="text-sm font-medium text-[#2C2C2C] font-title">Novo PIX!</div>
<div className="text-[10px] text-[#6B6B6B] font-light">Sinal recebido</div>
</div>
<span className="bg-[#EFD5A8]/30 backdrop-blur-sm border border-[#EFD5A8]/50 text-[#8B5E30] text-xs px-2 py-0.5 rounded-full font-medium font-title">+ R$ 45,00</span>
</div>
</div>
</div>
</div>
</header>

<section className="py-10 border-b border-white/50 overflow-hidden bg-white/30 backdrop-blur-sm">
<div className="flex flex-nowrap gap-12 md:gap-20 opacity-70 text-[#2C2C2C] w-max animate-[spin_20s_linear_infinite] px-6">
<div className="flex items-center gap-8 text-sm md:text-base font-medium font-title whitespace-nowrap">
<span className="flex items-center gap-2 hover:text-[#B07840] transition-colors"><iconify-icon className="text-lg text-[#B07840]" icon="solar:calendar-linear"></iconify-icon> Agenda Inteligente</span>
<span className="text-[#E8E0D4]">|</span>
<span className="flex items-center gap-2 hover:text-[#B07840] transition-colors"><iconify-icon className="text-lg text-[#B07840]" icon="solar:stopwatch-linear"></iconify-icon> Cronômetro Integrado</span>
<span className="text-[#E8E0D4]">|</span>
<span className="flex items-center gap-2 hover:text-[#B07840] transition-colors"><iconify-icon className="text-lg text-[#B07840]" icon="solar:users-group-rounded-linear"></iconify-icon> Controle de Clientes</span>
<span className="text-[#E8E0D4]">|</span>
<span className="flex items-center gap-2 hover:text-[#B07840] transition-colors"><iconify-icon className="text-lg text-[#B07840]" icon="solar:wallet-money-linear"></iconify-icon> PIX Automático</span>
<span className="text-[#E8E0D4]">|</span>
<span className="flex items-center gap-2 hover:text-[#B07840] transition-colors"><iconify-icon className="text-lg text-[#B07840]" icon="solar:sun-linear"></iconify-icon> UV em Tempo Real</span>
<span className="text-[#E8E0D4]">|</span>
<span className="flex items-center gap-2 hover:text-[#B07840] transition-colors"><iconify-icon className="text-lg text-[#B07840]" icon="solar:chat-round-dots-linear"></iconify-icon> Assistente Automático</span>
<span className="text-[#E8E0D4]">|</span>
<span className="flex items-center gap-2 hover:text-[#B07840] transition-colors"><iconify-icon className="text-lg text-[#B07840]" icon="solar:smartphone-linear"></iconify-icon> Tudo no Celular</span>
</div>

<div aria-hidden="true" className="flex items-center gap-8 text-sm md:text-base font-medium font-title whitespace-nowrap">
<span className="flex items-center gap-2 hover:text-[#B07840] transition-colors"><iconify-icon className="text-lg text-[#B07840]" icon="solar:calendar-linear"></iconify-icon> Agenda Inteligente</span>
<span className="text-[#E8E0D4]">|</span>
<span className="flex items-center gap-2 hover:text-[#B07840] transition-colors"><iconify-icon className="text-lg text-[#B07840]" icon="solar:stopwatch-linear"></iconify-icon> Cronômetro Integrado</span>
<span className="text-[#E8E0D4]">|</span>
<span className="flex items-center gap-2 hover:text-[#B07840] transition-colors"><iconify-icon className="text-lg text-[#B07840]" icon="solar:users-group-rounded-linear"></iconify-icon> Controle de Clientes</span>
<span className="text-[#E8E0D4]">|</span>
<span className="flex items-center gap-2 hover:text-[#B07840] transition-colors"><iconify-icon className="text-lg text-[#B07840]" icon="solar:wallet-money-linear"></iconify-icon> PIX Automático</span>
<span className="text-[#E8E0D4]">|</span>
<span className="flex items-center gap-2 hover:text-[#B07840] transition-colors"><iconify-icon className="text-lg text-[#B07840]" icon="solar:sun-linear"></iconify-icon> UV em Tempo Real</span>
<span className="text-[#E8E0D4]">|</span>
<span className="flex items-center gap-2 hover:text-[#B07840] transition-colors"><iconify-icon className="text-lg text-[#B07840]" icon="solar:chat-round-dots-linear"></iconify-icon> Assistente Automático</span>
<span className="text-[#E8E0D4]">|</span>
<span className="flex items-center gap-2 hover:text-[#B07840] transition-colors"><iconify-icon className="text-lg text-[#B07840]" icon="solar:smartphone-linear"></iconify-icon> Tudo no Celular</span>
</div>
</div>
</section>

<section className="py-16 bg-white/60 backdrop-blur-md border-b border-white/50 relative z-10">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
<div className="reveal-up">
<div className="text-4xl font-medium font-display text-[#2C2C2C] mb-2 counter" data-suffix="k+" data-target="12">0</div>
<div className="text-xs text-[#6B6B6B] font-title font-medium uppercase tracking-wider">Estúdios no Brasil</div>
</div>
<div className="reveal-up delay-100">
<div className="text-4xl font-medium font-display text-[#2C2C2C] mb-2 counter" data-suffix="%" data-target="85">0</div>
<div className="text-xs text-[#6B6B6B] font-title font-medium uppercase tracking-wider">Sem sistema adequado</div>
</div>
<div className="reveal-up delay-200">
<div className="text-4xl font-medium font-display text-[#2C2C2C] mb-2 counter" data-suffix="%" data-target="30">0</div>
<div className="text-xs text-[#6B6B6B] font-title font-medium uppercase tracking-wider">Taxa média de no-show</div>
</div>
<div className="reveal-up delay-300">
<div className="text-4xl font-medium font-display text-[#2C2C2C] mb-2 counter" data-suffix="h/dia" data-target="4">0</div>
<div className="text-xs text-[#6B6B6B] font-title font-medium uppercase tracking-wider">Perdidas em papel</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-20 items-center">
<div className="reveal-up">
<div className="inline-flex items-center px-3 py-1 rounded-full glass-element text-xs text-[#B07840] mb-6 font-title font-medium shadow-sm">
                    Você reconhece isso?
                </div>
<h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-[1.1] text-[#2C2C2C]">
                    O estresse do papel está<br/>
                    custando mais do que você imagina
                </h2>
<p className="text-lg text-[#6B6B6B] mb-10 leading-relaxed font-light">
                    Enquanto você gerencia no caderninho, suas clientes procuram estúdios mais profissionais.
                </p>
<div className="space-y-6">
<div className="flex gap-4 group">
<div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0 group-hover:scale-150 transition-transform"></div>
<div>
<h4 className="text-sm font-medium text-[#2C2C2C] font-title">Agenda em papel</h4>
<p className="text-sm text-[#6B6B6B] mt-1 font-light">Rasuras, páginas perdidas. Impossível saber quem confirmou ou cancelou.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0 group-hover:scale-150 transition-transform"></div>
<div>
<h4 className="text-sm font-medium text-[#2C2C2C] font-title">WhatsApp pessoal lotado</h4>
<p className="text-sm text-[#6B6B6B] mt-1 font-light">Mensagens de clientes misturadas com conversas pessoais. Zero controle.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0 group-hover:scale-150 transition-transform"></div>
<div>
<h4 className="text-sm font-medium text-[#2C2C2C] font-title">Sem controle financeiro</h4>
<p className="text-sm text-[#6B6B6B] mt-1 font-light">Não sabe exatamente quanto faturou. PIX perdidos, caderninhos imprecisos.</p>
</div>
</div>
</div>
</div>

<div className="relative reveal-up delay-200">
<div className="absolute -inset-4 bg-gradient-to-r from-red-100 to-[#FAF7F2] blur-xl opacity-50 rounded-[3rem]"></div>
<div className="glass-card shadow-2xl rounded-[2.5rem] p-8 relative z-10">
<div className="flex justify-between items-end mb-8">
<div>
<div className="text-xs text-[#6B6B6B] uppercase tracking-wider mb-2 font-title font-medium">Tempo Gasto</div>
<div className="text-4xl font-medium text-[#2C2C2C] font-title counter" data-suffix="h/dia" data-target="4">0</div>
</div>
<div className="text-right space-y-3">
<div>
<div className="text-xs text-[#6B6B6B] mb-1 font-title font-medium">NO-SHOW</div>
<div className="flex items-center justify-end gap-2 text-sm font-medium font-title text-[#2C2C2C]"><span className="counter" data-suffix="%" data-target="30">0</span> <span className="text-[10px] bg-red-50/80 backdrop-blur-sm text-red-600 border border-red-100 px-1 rounded animate-pulse">ALERTA</span></div>
</div>
</div>
</div>
<div className="flex items-end gap-3 h-32">
<div className="w-full bg-[#FAF7F2]/80 border border-white/50 h-[60%] rounded-md hover:h-[65%] transition-all"></div>
<div className="w-full bg-[#FAF7F2]/80 border border-white/50 h-[80%] rounded-md hover:h-[85%] transition-all"></div>
<div className="w-full bg-gradient-to-t from-red-300 to-red-100 h-[100%] rounded-md opacity-90 shadow-[0_0_15px_rgba(252,165,165,0.5)]"></div>
<div className="w-full bg-[#FAF7F2]/80 border border-white/50 h-[70%] rounded-md hover:h-[75%] transition-all"></div>
<div className="w-full bg-[#FAF7F2]/80 border border-white/50 h-[40%] rounded-md hover:h-[45%] transition-all"></div>
<div className="w-full bg-gradient-to-t from-[#B07840] to-[#EFD5A8] h-[20%] rounded-md opacity-90 shadow-sm"></div>
<div className="w-full bg-[#FAF7F2]/80 border border-white/50 h-[35%] rounded-md hover:h-[40%] transition-all"></div>
</div>
<div className="flex justify-between text-[10px] text-[#6B6B6B] mt-3 font-title px-1">
<span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span><span>Dom</span>
</div>
</div>

<div className="absolute -left-6 bottom-10 glass-card p-5 rounded-2xl w-56 shadow-2xl z-20 hidden md:block hover:-translate-y-1 transition-transform cursor-default">
<div className="text-xs text-[#6B6B6B] mb-2 font-title font-medium flex items-center gap-2"><iconify-icon className="text-red-500" icon="solar:danger-triangle-linear"></iconify-icon> Cliente Perdida</div>
<div className="text-sm font-medium text-[#2C2C2C] font-title mb-1">Horário: 10:00</div>
<div className="text-[10px] text-[#6B6B6B] font-light">Esqueceu de avisar e não compareceu. R$ 150 perdidos.</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white/40 backdrop-blur-md relative overflow-hidden">
<div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#EFD5A8]/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20 font-display reveal-up">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-2 text-[#2C2C2C]">A virada de chave</h2>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#C9A472]">Imagine acordar e ver que</h2>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#2C2C2C]"><span className="counter" data-target="5">0</span> clientes já marcaram sozinhas</h2>
</div>
<div className="grid md:grid-cols-2 gap-20 items-center">

<div className="reveal-up">
<div className="inline-flex items-center px-3 py-1 rounded-full glass-element text-xs text-[#B07840] mb-6 font-title font-medium">
                        Configure em 3 minutos
                    </div>
<p className="text-lg text-[#6B6B6B] mb-10 leading-relaxed font-light">
                        Os PIX já caíram. Os lembretes foram enviados. Você só precisa abrir a porta e fazer o que ama: bronzear. Isso é Sunya.
                    </p>
<div className="space-y-8 mb-10">
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-full glass-element flex items-center justify-center shrink-0 group-hover:bg-[#EFD5A8]/30 transition-colors">
<iconify-icon className="text-xl text-[#B07840]" icon="solar:smartphone-update-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-[#2C2C2C] font-title">Clientes marcam sozinhas pelo WhatsApp</h4>
<p className="text-sm text-[#6B6B6B] mt-1 font-light">Sem você precisar responder uma única mensagem.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-full glass-element flex items-center justify-center shrink-0 group-hover:bg-[#EFD5A8]/30 transition-colors">
<iconify-icon className="text-xl text-[#B07840]" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-[#2C2C2C] font-title">Receba e saiba exatamente quanto faturou</h4>
<p className="text-sm text-[#6B6B6B] mt-1 font-light">PIX verificado e dashboard financeiro em tempo real.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-full glass-element flex items-center justify-center shrink-0 group-hover:bg-[#EFD5A8]/30 transition-colors">
<iconify-icon className="text-xl text-[#B07840]" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-[#2C2C2C] font-title">No-show cai de 30% para menos de 5%</h4>
<p className="text-sm text-[#6B6B6B] mt-1 font-light">Lembretes automáticos garantem a cadeira cheia.</p>
</div>
</div>
</div>
<button className="font-title bg-gradient-to-r from-[#B07840] to-[#C9A472] hover:opacity-90 text-white px-8 py-3 rounded-full text-base font-medium transition-all shadow-lg shadow-[#B07840]/20 hover:-translate-y-0.5">
                        Quero Transformar Meu Estúdio
                    </button>
</div>

<div className="reveal-up delay-200">
<div className="glass-card shadow-2xl rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group">

<div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
<div className="mb-8 relative z-10">
<div className="text-xs text-[#6B6B6B] font-title font-medium mb-1 uppercase tracking-widest">Seu Faturamento</div>
<div className="font-title text-4xl md:text-5xl font-medium text-[#2C2C2C] mb-2 flex items-baseline">
                                R$ <span className="counter" data-target="12420">0</span><span className="text-[#8B5E30] text-3xl">,50</span>
</div>
<div className="text-sm text-[#6B6B6B] font-light flex items-center gap-1">
<iconify-icon className="text-green-500" icon="solar:trend-up-linear"></iconify-icon> Você ganhou +R$ 4.420,00 este mês
                            </div>
</div>
<div className="flex gap-2 mb-8 relative z-10">
<span className="px-3 py-1 rounded-full bg-[#EFD5A8]/50 text-[#8B5E30] text-xs font-title font-medium backdrop-blur-sm border border-[#EFD5A8]/30">Este Mês</span>
<span className="px-3 py-1 rounded-full glass-element text-[#6B6B6B] text-xs font-title font-medium hover:bg-white/50 transition-colors cursor-pointer">Anterior</span>
</div>

<div className="space-y-3 relative z-10">
<div className="glass-element p-4 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-default">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center border border-white/60">
<iconify-icon className="text-base text-[#B07840]" icon="solar:card-linear"></iconify-icon>
</div>
<div className="text-sm font-medium font-title text-[#2C2C2C]">Cartão</div>
</div>
<div className="flex items-center gap-3">
<span className="text-sm font-medium font-title text-[#2C2C2C]">R$ 8.378</span>
<span className="text-[10px] text-green-700 bg-green-100/80 px-1.5 py-0.5 rounded font-title backdrop-blur-sm border border-green-200">+3.4%</span>
</div>
</div>
<div className="glass-element p-4 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-default">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center border border-white/60">
<iconify-icon className="text-base text-[#B07840]" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div className="text-sm font-medium font-title text-[#2C2C2C]">PIX</div>
</div>
<div className="flex items-center gap-3">
<span className="text-sm font-medium font-title text-[#2C2C2C]">R$ 4.042</span>
<span className="text-[10px] text-green-700 bg-green-100/80 px-1.5 py-0.5 rounded font-title backdrop-blur-sm border border-green-200">+12.1%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-20 items-center">

<div className="reveal-up glass-card shadow-2xl rounded-[3rem] p-6 md:p-8 w-full max-w-sm mx-auto relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>
<div className="flex justify-between items-start mb-8 relative z-10">
<div>
<div className="text-xs text-[#6B6B6B] font-title font-medium mb-1">Bom dia</div>
<div className="text-xl font-medium text-[#2C2C2C] font-title">Elianna Alves</div>
</div>
<div className="w-10 h-10 rounded-full glass-element overflow-hidden shadow-sm">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
</div>
<div className="bg-gradient-to-r from-[#EFD5A8]/50 to-[#FAF7F2]/50 backdrop-blur-md border border-white/60 text-[#8B5E30] text-xs font-title font-medium px-3 py-1.5 rounded-full inline-flex items-center gap-2 mb-8 relative z-10 shadow-sm">
<iconify-icon className="text-base" icon="solar:sun-linear"></iconify-icon> UV 8.2 · 32°C Hoje
                </div>
<div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
<div className="glass-element p-4 rounded-2xl hover:bg-white/60 transition-colors">
<div className="text-[10px] text-[#6B6B6B] font-title font-medium mb-1 uppercase tracking-wide">Faturamento</div>
<div className="text-lg font-medium text-[#2C2C2C] font-title mb-1">R$ 1.240</div>
<div className="text-[10px] text-green-700 bg-green-100/80 inline-block px-1.5 py-0.5 rounded backdrop-blur-sm">+18%</div>
</div>
<div className="glass-element p-4 rounded-2xl hover:bg-white/60 transition-colors">
<div className="text-[10px] text-[#6B6B6B] font-title font-medium mb-1 uppercase tracking-wide">Sessões</div>
<div className="text-lg font-medium text-[#2C2C2C] font-title mb-1">7</div>
<div className="text-[10px] text-[#8B5E30] bg-[#EFD5A8]/50 inline-block px-1.5 py-0.5 rounded backdrop-blur-sm border border-[#EFD5A8]/30">3 restam</div>
</div>
</div>
<div className="border-t border-white/50 pt-6 relative z-10">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-title font-medium text-[#6B6B6B] uppercase tracking-wide">Próxima Cliente · 14:30</span>
<iconify-icon className="text-[#6B6B6B] cursor-pointer hover:text-[#B07840] transition-colors" icon="solar:menu-dots-semibold"></iconify-icon>
</div>
<div className="glass-element p-3 rounded-2xl flex items-center gap-4 hover:shadow-md transition-all cursor-pointer">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A472] to-[#B07840] text-white flex items-center justify-center font-title font-medium text-lg shadow-sm">
                            MS
                        </div>
<div>
<div className="text-sm font-medium text-[#2C2C2C] font-title">Maria Silva</div>
<div className="text-[10px] text-[#6B6B6B] font-light mt-0.5">Pacote Bronze 10 · 3 sessões restam</div>
<div className="text-[10px] text-green-600 font-medium flex items-center gap-1 mt-1">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon> Confirmada
                            </div>
</div>
</div>
</div>
</div>

<div className="reveal-up delay-200">
<div className="inline-flex items-center px-3 py-1 rounded-full glass-element text-xs text-[#B07840] mb-6 font-title font-medium shadow-sm">
                    Funcionalidades
                </div>
<h3 className="font-display text-4xl font-semibold tracking-tight mb-4 leading-tight text-[#2C2C2C]">Tudo que você precisa<br/>num só app</h3>
<p className="text-lg text-[#6B6B6B] mb-8 leading-relaxed font-light">
                    Feito por quem entende do mercado de bronze. Simples de usar, poderoso nos resultados.
                </p>

<div className="flex flex-wrap gap-2 mb-8">
<span className="px-4 py-2 bg-gradient-to-r from-[#B07840] to-[#C9A472] text-white rounded-full text-xs font-title font-medium shadow-md cursor-pointer hover:shadow-lg transition-all">Agenda Inteligente</span>
<span className="px-4 py-2 glass-element text-[#6B6B6B] hover:text-[#B07840] rounded-full text-xs font-title font-medium transition-colors cursor-pointer">Controle de Clientes</span>
<span className="px-4 py-2 glass-element text-[#6B6B6B] hover:text-[#B07840] rounded-full text-xs font-title font-medium transition-colors cursor-pointer">Cronômetro Integrado</span>
</div>
<h4 className="text-xl font-semibold text-[#2C2C2C] font-display mb-3">Sua agenda sempre organizada</h4>
<p className="text-sm text-[#6B6B6B] mb-6 font-light leading-relaxed">
                    Veja todos os agendamentos do dia numa tela simples. Suas clientes marcam sozinhas pelo WhatsApp e você só confirma. Sem papel, sem rasura, sem confusão.
                </p>
<div className="space-y-3 mb-8 text-sm text-[#2C2C2C] font-title font-medium">
<div className="flex items-center gap-3 hover:translate-x-1 transition-transform">
<div className="w-6 h-6 rounded-full glass-element flex items-center justify-center shrink-0 text-[#B07840]"><iconify-icon icon="solar:check-circle-linear"></iconify-icon></div> Agendamento automático pelo WhatsApp
                    </div>
<div className="flex items-center gap-3 hover:translate-x-1 transition-transform">
<div className="w-6 h-6 rounded-full glass-element flex items-center justify-center shrink-0 text-[#B07840]"><iconify-icon icon="solar:check-circle-linear"></iconify-icon></div> Lembretes que reduzem no-show
                    </div>
<div className="flex items-center gap-3 hover:translate-x-1 transition-transform">
<div className="w-6 h-6 rounded-full glass-element flex items-center justify-center shrink-0 text-[#B07840]"><iconify-icon icon="solar:check-circle-linear"></iconify-icon></div> Visão clara do dia inteiro
                    </div>
</div>
<button className="font-title glass-element hover:bg-white/80 text-[#2C2C2C] px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md">
                    Quero esta funcionalidade
                </button>
</div>
</div>
</section>

<section className="py-24 text-center bg-white/30 backdrop-blur-md border-t border-b border-white/50">
<div className="reveal-up inline-flex items-center px-3 py-1 rounded-full glass-element text-xs text-[#B07840] mb-6 font-title font-medium shadow-sm">
            Simples assim
        </div>
<h2 className="reveal-up delay-100 font-display text-4xl md:text-5xl font-semibold tracking-tight mb-16 text-[#2C2C2C]">
            3 passos para transformar<br/>seu estúdio para sempre
        </h2>
<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 text-left">

<div className="reveal-up delay-100 glass-card rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EFD5A8]/50 to-[#FAF7F2]/50 border border-white/60 text-[#8B5E30] flex items-center justify-center font-title font-semibold text-2xl mb-6 shadow-sm">
                    01
                </div>
<h3 className="text-lg font-semibold text-[#2C2C2C] font-title mb-3">Crie sua conta</h3>
<p className="text-sm text-[#6B6B6B] font-light leading-relaxed">
                    Preencha nome, email e dados do estúdio. Menos de 3 minutos. Sem cartão.
                </p>
</div>

<div className="reveal-up delay-200 glass-card rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EFD5A8]/50 to-[#FAF7F2]/50 border border-white/60 text-[#8B5E30] flex items-center justify-center font-title font-semibold text-2xl mb-6 shadow-sm">
                    02
                </div>
<h3 className="text-lg font-semibold text-[#2C2C2C] font-title mb-3">Configure tudo</h3>
<p className="text-sm text-[#6B6B6B] font-light leading-relaxed">
                    Conecte WhatsApp, defina horários e preços. O app faz o resto.
                </p>
</div>

<div className="reveal-up delay-300 glass-card rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EFD5A8]/50 to-[#FAF7F2]/50 border border-white/60 text-[#8B5E30] flex items-center justify-center font-title font-semibold text-2xl mb-6 shadow-sm">
                    03
                </div>
<h3 className="text-lg font-semibold text-[#2C2C2C] font-title mb-3">Relaxe e cresça</h3>
<p className="text-sm text-[#6B6B6B] font-light leading-relaxed">
                    Clientes marcam sozinhas, pagam e recebem confirmação. Você só abre a porta.
                </p>
</div>
</div>
<div className="mt-16 reveal-up delay-400">
<button className="font-title bg-gradient-to-r from-[#B07840] to-[#C9A472] hover:opacity-90 text-white px-8 py-3 rounded-full text-base font-medium transition-all shadow-lg shadow-[#B07840]/20 hover:-translate-y-0.5">
                Começar Agora · 7 Dias Grátis
            </button>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-5xl mx-auto px-6 relative z-10">
<h2 className="reveal-up font-display text-4xl md:text-5xl font-semibold tracking-tight mb-16 text-center text-[#2C2C2C]">
                A transformação que<br/>acontece em 7 dias
            </h2>
<div className="grid md:grid-cols-2 gap-8 mb-16">

<div className="reveal-up glass-element rounded-[2.5rem] p-8 md:p-10 opacity-80 hover:opacity-100 transition-opacity">
<h3 className="text-xl font-semibold text-[#2C2C2C] font-title mb-6 flex items-center gap-2">
<iconify-icon className="text-red-400 text-2xl" icon="solar:close-circle-linear"></iconify-icon> Sem Sunya
                    </h3>
<ul className="space-y-4 text-sm text-[#6B6B6B] font-light">
<li className="flex items-start gap-3"><span className="text-red-400 mt-0.5">•</span> Agenda em papel com rasuras</li>
<li className="flex items-start gap-3"><span className="text-red-400 mt-0.5">•</span> WhatsApp pessoal caótico</li>
<li className="flex items-start gap-3"><span className="text-red-400 mt-0.5">•</span> 30% de no-show toda semana</li>
<li className="flex items-start gap-3"><span className="text-red-400 mt-0.5">•</span> Faturamento no escuro</li>
<li className="flex items-start gap-3"><span className="text-red-400 mt-0.5">•</span> 4h por dia em tarefas manuais</li>
</ul>
</div>

<div className="reveal-up delay-200 glass-card border border-[#C9A472]/50 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden transform md:scale-105">

<div className="absolute -right-20 -top-20 w-60 h-60 bg-[#EFD5A8]/30 rounded-full blur-3xl"></div>
<h3 className="text-xl font-semibold text-[#2C2C2C] font-title mb-6 flex items-center gap-2 relative z-10">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A472] to-[#B07840] flex items-center justify-center text-white shadow-sm"><iconify-icon icon="solar:check-bold"></iconify-icon></div> Com Sunya
                    </h3>
<ul className="space-y-4 text-sm text-[#2C2C2C] font-medium font-title relative z-10">
<li className="flex items-center gap-3"><iconify-icon className="text-[#B07840] text-lg" icon="solar:check-circle-linear"></iconify-icon> Agenda digital, clara e atualizada</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#B07840] text-lg" icon="solar:check-circle-linear"></iconify-icon> WhatsApp que atende sozinho</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#B07840] text-lg" icon="solar:check-circle-linear"></iconify-icon> Menos de 5% de no-show</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#B07840] text-lg" icon="solar:check-circle-linear"></iconify-icon> Painel financeiro em tempo real</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#B07840] text-lg" icon="solar:check-circle-linear"></iconify-icon> Economiza 4h por dia</li>
</ul>
</div>
</div>

<div className="reveal-up delay-300 glass-card rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-lg">
<div>
<div className="text-3xl font-medium font-title text-[#B07840] mb-1 counter" data-prefix="+" data-suffix="%" data-target="35">0</div>
<div className="text-xs text-[#6B6B6B] font-title font-medium uppercase tracking-wider">Faturamento</div>
</div>
<div>
<div className="text-3xl font-medium font-title text-[#B07840] mb-1 counter" data-prefix="-" data-suffix="%" data-target="80">0</div>
<div className="text-xs text-[#6B6B6B] font-title font-medium uppercase tracking-wider">No-show</div>
</div>
<div>
<div className="text-3xl font-medium font-title text-[#B07840] mb-1 counter" data-suffix="h/dia" data-target="4">0</div>
<div className="text-xs text-[#6B6B6B] font-title font-medium uppercase tracking-wider">Economizadas</div>
</div>
<div>
<div className="text-3xl font-medium font-title text-[#B07840] mb-1 counter" data-suffix="%" data-target="98">0</div>
<div className="text-xs text-[#6B6B6B] font-title font-medium uppercase tracking-wider">Satisfação</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[#FAF7F2]/80 backdrop-blur-xl border-y border-white/50 z-0"></div>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A472]/30 to-transparent z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-20">

<div className="reveal-up">
<div className="inline-flex items-center px-3 py-1 rounded-full glass-element text-xs text-[#B07840] mb-6 font-title font-medium shadow-sm">
                    Sunya Assistente
                </div>
<h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight text-[#2C2C2C]">
                    Sua vendedora digital<br/>que trabalha 24/7
                </h2>
<p className="text-lg text-[#6B6B6B] mb-10 leading-relaxed font-light">
                    Enquanto você bronzeia, ela conversa, negocia e agenda pra você. Tudo pelo WhatsApp, em tempo real.
                </p>
<div className="glass-card rounded-[2rem] p-6 shadow-sm mb-8 hover:shadow-md transition-shadow">
<div className="flex justify-between items-center mb-6">
<div className="text-sm font-semibold font-title text-[#2C2C2C]">Tempo de resposta médio</div>
</div>
<div className="space-y-6">

<div>
<div className="flex justify-between text-xs text-[#6B6B6B] mb-2 font-title">
<span>Você respondendo</span>
<span>1h24min</span>
</div>
<div className="h-2 w-full glass-element rounded-full overflow-hidden">
<div className="h-full bg-red-300 w-0 transition-all duration-1500 ease-out" style={{width: '90%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs text-[#6B6B6B] mb-2 font-title">
<span className="text-[#8B5E30] font-medium flex items-center gap-1"><iconify-icon icon="solar:magic-stick-3-bold"></iconify-icon> Sunya Assistente</span>
<span className="text-[#8B5E30] font-medium">Imediato</span>
</div>
<div className="h-2 w-full glass-element rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-[#B07840] to-[#C9A472] w-0 transition-all duration-1500 delay-500 ease-out" style={{width: '5%'}}></div>
</div>
</div>
</div>
</div>
<button className="font-title glass-element hover:bg-white/80 text-[#2C2C2C] px-8 py-3 rounded-full text-base font-medium transition-all shadow-sm">
                    Ver como funciona
                </button>
</div>

<div className="relative reveal-up delay-200">
<div className="absolute inset-0 bg-gradient-to-tr from-[#EFD5A8]/40 to-transparent rounded-[2.5rem] blur-2xl transform translate-y-4 translate-x-4"></div>
<div className="glass-card rounded-[2.5rem] flex flex-col h-[500px] shadow-2xl relative z-10 overflow-hidden border border-white/60">

<div className="bg-white/40 backdrop-blur-md border-b border-white/50 p-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A472] to-[#B07840] text-white flex items-center justify-center shadow-sm">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-bold"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-[#2C2C2C] font-title">Sunya Assistente</div>
<div className="text-[10px] text-green-700 font-medium flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div> Online · Respondendo
                            </div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-transparent to-white/20">

<div className="flex flex-col items-end reveal-up delay-100">
<div className="glass-element text-[#2C2C2C] text-sm px-4 py-2.5 rounded-2xl rounded-tr-none max-w-[80%] font-light shadow-sm">
                                Oi, quero marcar bronze
                            </div>
<span className="text-[9px] text-[#6B6B6B] mt-1 mr-1">10:23</span>
</div>

<div className="flex flex-col items-start reveal-up delay-300">
<div className="bg-gradient-to-r from-[#EFD5A8]/40 to-[#FAF7F2]/40 backdrop-blur-md border border-[#EFD5A8]/50 text-[#8B5E30] text-sm px-4 py-2.5 rounded-2xl rounded-tl-none max-w-[85%] font-light shadow-sm">
                                Oi! Pra quando você quer vir? Tenho amanhã às 10h ou 14h ☀️
                            </div>
<span className="text-[9px] text-[#6B6B6B] mt-1 ml-1">10:23</span>
</div>

<div className="flex flex-col items-end reveal-up delay-500">
<div className="glass-element text-[#2C2C2C] text-sm px-4 py-2.5 rounded-2xl rounded-tr-none max-w-[80%] font-light shadow-sm">
                                Amanhã 10h pode
                            </div>
<span className="text-[9px] text-[#6B6B6B] mt-1 mr-1">10:25</span>
</div>

<div className="flex flex-col items-start reveal-up delay-700">
<div className="bg-gradient-to-r from-[#EFD5A8]/40 to-[#FAF7F2]/40 backdrop-blur-md border border-[#EFD5A8]/50 text-[#8B5E30] text-sm px-4 py-2.5 rounded-2xl rounded-tl-none max-w-[85%] font-light shadow-sm">
                                Perfeito! A sessão é R$ 150. Pra garantir sua vaga, preciso de um sinal de R$ 45 via PIX.<br/><br/>
                                Chave: CNPJ 12.345...<br/><br/>Me manda o comprovante?
                            </div>
<span className="text-[9px] text-[#6B6B6B] mt-1 ml-1">10:26</span>
</div>
</div>

<div className="bg-white/60 backdrop-blur-md border-t border-white/50 p-3 text-center text-xs text-green-700 font-title font-medium flex justify-center items-center gap-1.5">
<iconify-icon className="text-green-600" icon="solar:check-circle-bold"></iconify-icon> Agendamento criado no app
                    </div>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal-up">
<div className="inline-flex items-center px-3 py-1 rounded-full glass-element text-xs text-[#B07840] mb-6 font-title font-medium shadow-sm">
                    Planos simples
                </div>
<h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-[#2C2C2C]">
                    Preço justo.<br/>Sem letras miúdas.
                </h2>
<p className="text-lg text-[#6B6B6B] font-light max-w-xl mx-auto">
                    O que você economiza em tarefas manuais já paga o Sunya. O resto vira lucro.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">

<div className="reveal-up delay-100 glass-element rounded-[2.5rem] p-8 hover:-translate-y-2 transition-transform duration-300">
<h3 className="text-2xl font-semibold font-title text-[#2C2C2C] mb-2">Brilho</h3>
<div className="text-xs text-[#6B6B6B] font-light mb-6">Estúdio pequeno · Até 50 agends/mês</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-sm font-title font-medium text-[#6B6B6B]">R$</span>
<span className="text-5xl font-semibold font-title text-[#2C2C2C] tracking-tight counter" data-target="59">0</span>
<span className="text-sm text-[#6B6B6B] font-light">/mês</span>
</div>
<ul className="space-y-4 text-sm text-[#6B6B6B] font-light mb-8">
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-[#B07840] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Agenda digital ilimitada</li>
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-[#B07840] shrink-0" icon="solar:check-circle-linear"></iconify-icon> CRM de clientes</li>
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-[#B07840] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Cronômetro 4×30min</li>
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-[#B07840] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Financeiro completo</li>
<li className="flex items-center gap-3 opacity-40"><iconify-icon className="text-lg shrink-0" icon="solar:close-circle-linear"></iconify-icon> Sunya Assistente (IA)</li>
</ul>
<button className="w-full font-title glass-element hover:bg-white/80 text-[#2C2C2C] py-3 rounded-full text-sm font-medium transition-colors shadow-sm">
                        Criar conta grátis
                    </button>
</div>

<div className="reveal-up delay-200 glass-card border-2 border-[#C9A472]/50 rounded-[2.5rem] p-8 shadow-2xl relative transform md:scale-105 z-10">
<div className="absolute inset-0 bg-gradient-to-b from-[#EFD5A8]/10 to-transparent rounded-[2.5rem] pointer-events-none"></div>
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#B07840] to-[#C9A472] text-white text-[10px] font-title font-medium uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                        Mais Escolhido
                    </div>
<h3 className="text-2xl font-semibold font-title text-[#2C2C2C] mb-2 mt-2">Bronze</h3>
<div className="text-xs text-[#6B6B6B] font-light mb-6 h-auto">IA que atende pra você.<br/>Estúdio médio · 50-120 agends/mês</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-sm font-title font-medium text-[#6B6B6B]">R$</span>
<span className="text-5xl font-semibold font-title text-[#2C2C2C] tracking-tight counter" data-target="139">0</span>
<span className="text-sm text-[#6B6B6B] font-light">/mês</span>
</div>
<ul className="space-y-4 text-sm text-[#2C2C2C] font-medium font-title mb-8 relative z-10">
<li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-[#EFD5A8]/50 flex items-center justify-center"><iconify-icon className="text-xs text-[#8B5E30]" icon="solar:check-bold"></iconify-icon></div> Tudo do Brilho +</li>
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-[#B07840] shrink-0" icon="solar:magic-stick-3-bold"></iconify-icon> Sunya Assistente (500 conversas)</li>
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-[#B07840] shrink-0" icon="solar:check-circle-bold"></iconify-icon> Confirmação automática</li>
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-[#B07840] shrink-0" icon="solar:check-circle-bold"></iconify-icon> Lembrete automático</li>
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-[#B07840] shrink-0" icon="solar:check-circle-bold"></iconify-icon> Agenda sincronizada com IA</li>
</ul>
<button className="w-full font-title bg-gradient-to-r from-[#B07840] to-[#C9A472] hover:opacity-90 text-white py-3 rounded-full text-sm font-medium transition-all shadow-lg shadow-[#B07840]/30 hover:-translate-y-0.5 relative z-10">
                        Começar 7 dias grátis
                    </button>
</div>

<div className="reveal-up delay-300 glass-element rounded-[2.5rem] p-8 hover:-translate-y-2 transition-transform duration-300">
<h3 className="text-2xl font-semibold font-title text-[#2C2C2C] mb-2">Dourada</h3>
<div className="text-xs text-[#6B6B6B] font-light mb-6">IA ilimitada + equipe + suporte VIP.<br/>Estúdio grande · 120+ agends</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-sm font-title font-medium text-[#6B6B6B]">R$</span>
<span className="text-5xl font-semibold font-title text-[#2C2C2C] tracking-tight counter" data-target="239">0</span>
<span className="text-sm text-[#6B6B6B] font-light">/mês</span>
</div>
<ul className="space-y-4 text-sm text-[#6B6B6B] font-light mb-8">
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-[#B07840] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Tudo do Bronze +</li>
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-[#B07840] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Assistente Ilimitada</li>
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-[#B07840] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Feedback pós-sessão</li>
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-[#B07840] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Reativação de clientes</li>
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-[#B07840] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Até 3 usuários</li>
</ul>
<button className="w-full font-title glass-element hover:bg-white/80 text-[#2C2C2C] py-3 rounded-full text-sm font-medium transition-colors shadow-sm">
                        Criar conta grátis
                    </button>
</div>
</div>
</div>
</section>

<section className="py-32 flex justify-center px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-[#FAF7F2]/50 backdrop-blur-sm z-0"></div>
<div className="glass-card shadow-[0_30px_60px_rgba(176,120,64,0.1)] rounded-[3rem] p-12 md:p-20 text-center max-w-4xl w-full relative overflow-hidden z-10 border border-white/80">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#EFD5A8]/40 to-white/20 rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative z-10 reveal-up">
<div className="inline-flex items-center px-3 py-1 rounded-full glass-element text-xs text-[#B07840] mb-6 font-title font-medium shadow-sm">
                    O sistema mais moderno do Brasil
                </div>
<h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-[#2C2C2C] leading-tight">
                    Pronta para o estúdio<br/>que você sempre sonhou?
                </h2>
<p className="text-lg text-[#6B6B6B] font-light max-w-xl mx-auto mb-10">
                    Chega de papel, chega de estresse. Comece agora e veja a diferença nos próximos 7 dias.
                </p>
<div className="max-w-md mx-auto">
<button className="font-title w-full bg-gradient-to-r from-[#B07840] to-[#C9A472] hover:opacity-90 text-white rounded-full py-4 text-base font-medium mb-4 transition-all shadow-lg shadow-[#B07840]/30 hover:-translate-y-1">
                        Testar 7 Dias Grátis Agora
                    </button>
<div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#6B6B6B] font-title font-medium mt-6">
<span className="flex items-center gap-1"><iconify-icon className="text-sm text-[#8B5E30]" icon="solar:check-circle-linear"></iconify-icon> 7 dias grátis</span>
<span className="flex items-center gap-1"><iconify-icon className="text-sm text-[#8B5E30]" icon="solar:shield-check-linear"></iconify-icon> Sem cartão</span>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/50 pt-20 pb-10 bg-white/40 backdrop-blur-md text-sm relative z-10">

<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-10 mb-20 reveal-up">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="flex items-center -space-x-2">
<div className="w-4 h-4 rounded-full bg-[#EFD5A8] mix-blend-multiply"></div>
<div className="w-4 h-4 rounded-full bg-[#C9A472] mix-blend-multiply"></div>
<div className="w-4 h-4 rounded-full bg-[#B07840] mix-blend-multiply"></div>
</div>
<span className="font-display font-semibold tracking-[0.28em] ml-2 text-base text-[#2C2C2C]">SUNYA</span>
</div>
<p className="text-xs text-[#6B6B6B] font-light leading-relaxed">O app que organiza o seu estúdio de bronzeamento.</p>
</div>
<div className="flex flex-col gap-3 font-title text-sm">
<span className="text-[#2C2C2C] font-medium mb-2">Produto</span>
<a className="text-[#6B6B6B] hover:text-[#B07840] transition-colors font-light" href="#">Funcionalidades</a>
<a className="text-[#6B6B6B] hover:text-[#B07840] transition-colors font-light" href="#">Preços</a>
</div>
<div className="flex flex-col gap-3 font-title text-sm">
<span className="text-[#2C2C2C] font-medium mb-2">Empresa</span>
<a className="text-[#6B6B6B] hover:text-[#B07840] transition-colors font-light" href="#">Sobre a Sunya</a>
<a className="text-[#6B6B6B] hover:text-[#B07840] transition-colors font-light" href="#">Contato</a>
</div>
<div className="flex flex-col gap-3 font-title text-sm">
<span className="text-[#2C2C2C] font-medium mb-2">Legal</span>
<a className="text-[#6B6B6B] hover:text-[#B07840] transition-colors font-light" href="#">Termos de Uso</a>
<a className="text-[#6B6B6B] hover:text-[#B07840] transition-colors font-light" href="#">Privacidade</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-[#6B6B6B] font-light pt-8 border-t border-white/50">
<div>© 2026 Sunya.</div>
</div>
</footer>



    </>
  );
}
