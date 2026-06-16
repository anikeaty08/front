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
            const navbar = document.getElementById('navbar');

            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('glass-nav');
                    navbar.classList.remove('border-transparent');
                } else {
                    navbar.classList.remove('glass-nav');
                    navbar.classList.add('border-transparent');
                }
            });

            const revealElements = document.querySelectorAll('.reveal');
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

            revealElements.forEach(el => revealObserver.observe(el));

            const diagramContainer = document.getElementById('diagram-container');
            const diagPaths = document.querySelectorAll('.anim-diag-path');
            const diagNodes = document.querySelectorAll('.anim-diag-node');
            
            if(diagramContainer) {
                const diagramObserver = new IntersectionObserver((entries) => {
                    if(entries[0].isIntersecting) {
                        diagPaths.forEach(p => p.classList.add('is-visible'));
                        diagNodes.forEach(n => n.classList.add('is-visible'));
                        diagramObserver.disconnect();
                    }
                }, { threshold: 0.4 });
                diagramObserver.observe(diagramContainer);
            }

            const counters = document.querySelectorAll('.counter');
            if (counters.length > 0) {
                const counterObserver = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        counters.forEach(counter => {
                            const target = +counter.getAttribute('data-target');
                            const duration = 1500;
                            const stepTime = Math.abs(Math.floor(duration / target));
                            let current = 0;
                            
                            const timer = setInterval(() => {
                                current += 1;
                                counter.textContent = current;
                                if (current === target) {
                                    clearInterval(timer);
                                }
                            }, stepTime);
                        });
                        counterObserver.disconnect();
                    }
                }, { threshold: 0.3 });
                
                counterObserver.observe(counters[0].closest('.border'));
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-[10%] left-1/2 w-[600px] h-[600px] blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 bg-[color:var(--accent-primary)] opacity-[0.05]"></div>
<div className="absolute bottom-[10%] right-0 w-[500px] h-[500px] blur-[100px] rounded-full bg-[color:var(--accent-green)] opacity-[0.1]"></div>
</div>
<div className="bg-grid-texture"></div>

<nav className="fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent py-6 opacity-0 translate-y-[-10px] animate-[reveal-blur_1s_cubic-bezier(0.2,0.8,0.2,1)_forwards]" id="navbar">
<div className="max-w-[80rem] mx-auto px-6 lg:px-12 flex justify-between items-center relative z-10">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-8 h-8 rounded-none bg-[color:var(--accent-primary)] flex items-center justify-center shadow-[0_0_20px_-5px_rgba(224,186,83,0.4)] group-hover:scale-105 transition-transform">
<span className="font-display text-xl tracking-tight text-[color:var(--text-on-accent)] pt-[2px]">R8</span>
</div>
<div className="font-display text-2xl tracking-tight text-[color:var(--text-primary)] pt-1 hidden sm:block">Método R8</div>
</div>
<a className="bg-[color:var(--surface-card)] text-[color:var(--text-primary)] border border-[color:var(--border-default)] rounded-none text-xs font-medium tracking-[0.1em] px-6 py-3 uppercase flex items-center gap-2 hover:border-[color:var(--accent-primary)] hover:bg-[color:var(--accent-green-subtle)] transition-all duration-300 group shadow-md" href="#cta">
                Aplicar Agora
                <iconify-icon className="transition-transform group-hover:translate-x-1 stroke-[1.5] text-[color:var(--accent-primary)]" height="1.2em" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</a>
</div>
</nav>

<header className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 max-w-[80rem] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 min-h-[90vh]">
<div className="w-full lg:w-[55%] flex flex-col items-start z-10">
<div className="reveal flex items-center gap-3 mb-8 px-4 py-1.5 rounded-[2px] border border-[color:var(--accent-primary)] border-opacity-20 bg-[color:var(--accent-green-subtle)] backdrop-blur-sm shadow-[0_0_20px_rgba(20,57,27,0.5)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--accent-primary)] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--accent-primary)]"></span>
</span>
<span className="text-caption text-[color:var(--accent-primary)]">Vagas Abertas</span>
</div>
<h1 className="font-display tracking-tight text-[clamp(2.5rem,4vw,3.8rem)] text-[color:var(--text-primary)] flex flex-col items-start uppercase mb-8 leading-[0.95]">
<span className="reveal delay-100">Diagnóstico Estratégico Para Empresários Que Faturam Acima De 50 Mil E Querem Transformar Seu Comercial Em Uma <span className="text-[color:var(--accent-primary)]">Operação Previsível</span>, Lucrativa E Independente.</span>
</h1>
<p className="reveal delay-200 text-lg lg:text-xl text-[color:var(--text-secondary)] border-l-2 border-[color:var(--accent-primary)] pl-5 max-w-2xl mb-10">
                Através do Método R8 – Cultura Que Vende, estruturamos sua cultura, liderança e estratégia comercial para gerar aumento real de vendas, lucro e liberdade em até 6 meses.
            </p>
<div className="reveal delay-300 flex flex-col items-start gap-4 w-full">
<a className="bg-[color:var(--accent-primary)] text-[color:var(--text-on-accent)] rounded-none font-medium tracking-[0.1em] px-8 py-5 uppercase flex items-center justify-center gap-3 hover:shadow-[0_0_30px_-5px_rgba(224,186,83,0.5)] transition-all duration-300 group w-full sm:w-auto text-sm hover:bg-white hover:scale-[1.02]" href="#cta">
                    Quero me aplicar para a call estratégica
                    <iconify-icon className="transition-transform group-hover:rotate-12 stroke-[1.5]" height="1.4em" icon="solar:magic-stick-3-linear" width="1.4em"></iconify-icon>
</a>
<div className="flex flex-col gap-1 text-xs text-[color:var(--text-muted)] mt-2">
<span>A aplicação não garante a reunião.</span>
<span>Empresas selecionadas serão convidadas para a Call Estratégica.</span>
</div>
</div>
</div>

<div className="w-full lg:w-[45%] relative z-10 animate-[reveal-blur_1.5s_cubic-bezier(0.2,0.8,0.2,1)_forwards]" style={{animationDelay: '0.4s'}}>
<div className="relative w-full aspect-video bg-[color:var(--surface-elevated)] border border-[color:var(--border-default)] rounded-none shadow-2xl group cursor-pointer overflow-hidden flex items-center justify-center transition-all duration-500 hover:border-[color:var(--accent-primary)]/50">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMWExYTFhIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMjIyMjIyIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[color:var(--surface-page)] to-transparent opacity-60"></div>
<div className="w-16 h-16 bg-[color:var(--surface-card)] border border-[color:var(--accent-primary)]/30 rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(224,186,83,0.2)]">
<iconify-icon className="text-[color:var(--accent-primary)] ml-1" height="1.8em" icon="solar:play-linear" width="1.8em"></iconify-icon>
</div>
<div className="absolute bottom-4 left-6 right-6 flex justify-between items-end z-10">
<span className="text-caption text-[color:var(--text-primary)]">Vídeo Institucional</span>
<span className="text-xs text-[color:var(--text-muted)] font-mono">00:00</span>
</div>
</div>
</div>
</header>

<section className="py-24 lg:py-32 bg-[color:var(--surface-section-alt)] relative z-10 border-t border-[color:var(--border-subtle)]" style={{WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)'}}>
<div className="max-w-[80rem] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="flex flex-col items-start">
<span className="reveal text-caption text-[color:var(--accent-primary)] mb-6">O Problema Real</span>
<h2 className="reveal delay-100 font-serif-display tracking-tight italic text-3xl lg:text-4xl text-[color:var(--text-primary)] leading-tight mb-8">
                    Se o seu time não entrega resultado consistente, o problema não é falta de lead.
                </h2>
<p className="reveal delay-200 text-[color:var(--text-secondary)] mb-6">
                    A maioria dos empresários acredita que o problema está em:
                </p>
<ul className="reveal delay-300 flex flex-col gap-3 mb-6 w-full text-sm text-[color:var(--text-muted)]">
<li className="flex items-center gap-3"><span className="w-4 h-[1px] bg-[color:var(--border-default)]"></span> Falta de tráfego</li>
<li className="flex items-center gap-3"><span className="w-4 h-[1px] bg-[color:var(--border-default)]"></span> Falta de CRM</li>
<li className="flex items-center gap-3"><span className="w-4 h-[1px] bg-[color:var(--border-default)]"></span> Falta de script</li>
<li className="flex items-center gap-3"><span className="w-4 h-[1px] bg-[color:var(--border-default)]"></span> Falta de treinamento técnico</li>
</ul>
<p className="reveal delay-400 text-[color:var(--text-secondary)] mb-8">
                    Mas a verdade é mais profunda.<br/>
                    Seu time não é fraco. <span className="text-[color:var(--accent-primary)] font-medium">Sua cultura comercial é frágil.</span>
</p>
<div className="reveal delay-500 bg-[color:var(--accent-green-subtle)] border-l-[3px] border-[color:var(--accent-primary)] p-7 w-full shadow-[0_0_40px_-10px_rgba(20,57,27,0.4)]">
<p className="text-[color:var(--text-primary)] font-medium">Isso não é problema operacional. É problema estrutural.</p>
</div>
</div>

<div className="reveal delay-200 relative h-[400px] flex items-center justify-center opacity-80 group" id="diagram-container">
<div className="absolute w-[300px] h-[300px] bg-[color:var(--accent-green)] opacity-20 blur-[80px] rounded-full group-hover:opacity-40 transition-opacity duration-700"></div>
<svg className="w-full h-full relative z-10" id="pain-diagram" viewbox="0 0 320 400">
<path className="anim-diag-path" d="M160 200 L60 80" stroke="var(--border-default)" strokeWidth="1.5" style={{animationDelay: '0s'}}></path>
<path className="anim-diag-path" d="M160 200 L260 80" stroke="var(--border-default)" strokeWidth="1.5" style={{animationDelay: '0.15s'}}></path>
<path className="anim-diag-path" d="M160 200 L300 200" stroke="var(--border-default)" strokeWidth="1.5" style={{animationDelay: '0.3s'}}></path>
<path className="anim-diag-path" d="M160 200 L240 340" stroke="var(--border-default)" strokeWidth="1.5" style={{animationDelay: '0.45s'}}></path>
<path className="anim-diag-path" d="M160 200 L80 340" stroke="var(--border-default)" strokeWidth="1.5" style={{animationDelay: '0.6s'}}></path>
<rect className="shadow-xl" fill="var(--surface-elevated)" height="36" stroke="var(--accent-primary)" strokeWidth="1" width="120" x="100" y="182"></rect>
<text fill="var(--text-primary)" fontFamily="DM Sans" fontSize="12" font-weight="500" text-anchor="middle" x="160" y="204">Cultura Frágil</text>
<g className="anim-diag-node animate-float" style={{transitionDelay: '0.3s', animationDelay: '0s'}}>
<rect fill="var(--surface-page)" height="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1" width="120" x="0" y="60"></rect>
<text fill="var(--text-muted)" fontFamily="DM Sans" fontSize="10" font-weight="500" letter-spacing="1" text-anchor="middle" x="60" y="79">VENDEDORES OSCILANTES</text>
</g>
<g className="anim-diag-node animate-float" style={{transitionDelay: '0.45s', animationDelay: '0.5s'}}>
<rect fill="var(--surface-page)" height="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1" width="120" x="200" y="60"></rect>
<text fill="var(--text-muted)" fontFamily="DM Sans" fontSize="10" font-weight="500" letter-spacing="1" text-anchor="middle" x="260" y="79">ALTA ROTATIVIDADE</text>
</g>
<g className="anim-diag-node animate-float" style={{transitionDelay: '0.6s', animationDelay: '1s'}}>
<rect fill="var(--surface-page)" height="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1" width="100" x="220" y="185"></rect>
<text fill="var(--text-muted)" fontFamily="DM Sans" fontSize="10" font-weight="500" letter-spacing="1" text-anchor="middle" x="270" y="204">FALTA DE PREVISIBILIDADE</text>
</g>
<g className="anim-diag-node animate-float" style={{transitionDelay: '0.75s', animationDelay: '1.5s'}}>
<rect fill="var(--surface-page)" height="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1" width="120" x="180" y="340"></rect>
<text fill="var(--text-muted)" fontFamily="DM Sans" fontSize="10" font-weight="500" letter-spacing="1" text-anchor="middle" x="240" y="359">CRESCIMENTO SEM LUCRO</text>
</g>
<g className="anim-diag-node animate-float" style={{transitionDelay: '0.9s', animationDelay: '2s'}}>
<rect fill="var(--surface-page)" height="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1" width="120" x="20" y="340"></rect>
<text fill="var(--text-muted)" fontFamily="DM Sans" fontSize="10" font-weight="500" letter-spacing="1" text-anchor="middle" x="80" y="359">DEPENDÊNCIA DO DONO</text>
</g>
</svg>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative z-10">
<div className="max-w-[54rem] mx-auto px-6 text-center mb-16">
<span className="reveal text-caption text-[color:var(--text-muted)] mb-6 block">Mudança de Paradigma</span>
<h2 className="reveal font-display tracking-tight text-[clamp(3rem,5.5vw,5.5rem)] text-[color:var(--text-primary)] uppercase mb-4">
                Ferramentas organizam <span className="text-[color:var(--accent-primary)]">Processos</span>.
            </h2>
<p className="reveal delay-100 font-serif-display tracking-tight italic text-2xl lg:text-3xl text-[color:var(--text-secondary)]">
                Cultura sustenta resultados.
            </p>
</div>
<div className="max-w-[54rem] mx-auto px-6 mb-12 flex flex-col md:flex-row gap-0">
<div className="reveal delay-100 flex-1 h-[72px] bg-[color:var(--surface-card)] border border-[color:var(--border-default)] rounded-none flex items-center hover:bg-[color:var(--surface-elevated)] hover:border-[color:var(--accent-primary)] hover:border-opacity-30 transition-all duration-300">
<div className="w-[30%] flex justify-center items-center gap-2 border-r border-[color:var(--border-default)] h-full opacity-60">
<iconify-icon className="text-[color:var(--accent-primary)]" height="1.2em" icon="solar:laptop-minimalistic-linear" width="1.2em"></iconify-icon>
<span className="font-display tracking-tight text-lg text-[color:var(--text-muted)] tracking-wider pt-1">CRM</span>
</div>
<div className="w-[70%] px-6 text-sm italic text-[color:var(--text-secondary)] text-opacity-70">
                    Não cria disciplina
                </div>
</div>
<div className="reveal delay-200 flex-1 h-[72px] bg-[color:var(--surface-card)] border border-[color:var(--border-default)] border-t-0 md:border-t md:border-l-0 rounded-none flex items-center hover:bg-[color:var(--surface-elevated)] hover:border-[color:var(--accent-primary)] hover:border-opacity-30 transition-all duration-300">
<div className="w-[30%] flex justify-center items-center gap-2 border-r border-[color:var(--border-default)] h-full opacity-60">
<iconify-icon className="text-[color:var(--accent-primary)]" height="1.2em" icon="solar:users-group-two-rounded-linear" width="1.2em"></iconify-icon>
<span className="font-display tracking-tight text-lg text-[color:var(--text-muted)] tracking-wider pt-1">Leads</span>
</div>
<div className="w-[70%] px-6 text-sm italic text-[color:var(--text-secondary)] text-opacity-70">
                    Não criam engajamento
                </div>
</div>
<div className="reveal delay-300 flex-1 h-[72px] bg-[color:var(--surface-card)] border border-[color:var(--border-default)] border-t-0 md:border-t md:border-l-0 rounded-none flex items-center hover:bg-[color:var(--surface-elevated)] hover:border-[color:var(--accent-primary)] hover:border-opacity-30 transition-all duration-300">
<div className="w-[30%] flex justify-center items-center gap-2 border-r border-[color:var(--border-default)] h-full opacity-60">
<iconify-icon className="text-[color:var(--accent-primary)]" height="1.2em" icon="solar:wad-of-money-linear" width="1.2em"></iconify-icon>
<span className="font-display tracking-tight text-lg text-[color:var(--text-muted)] tracking-wider pt-1">Comissão</span>
</div>
<div className="w-[70%] px-6 text-sm italic text-[color:var(--text-secondary)] text-opacity-70">
                    Não cria mentalidade vencedora
                </div>
</div>
</div>
<div className="max-w-[64rem] mx-auto px-6 text-center mb-12">
<p className="reveal delay-400 text-lg text-[color:var(--text-secondary)]">
                Sem cultura forte, qualquer estrutura vira um caos organizado.<br/>
                Empresas que crescem de forma previsível possuem:
            </p>
</div>
<div className="max-w-[80rem] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="reveal delay-100 group relative overflow-hidden bg-[color:var(--surface-card)] border border-[color:var(--border-default)] p-8 transition-all duration-500 hover:border-[color:var(--accent-primary)]/40 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(224,186,83,0.15)]">
<div className="absolute inset-0 bg-gradient-to-b from-[color:var(--accent-primary)]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
<h3 className="text-caption text-[color:var(--accent-primary)] relative z-10 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:crown-star-linear"></iconify-icon> Liderança Comercial Clara
                </h3>
</div>
<div className="reveal delay-200 group relative overflow-hidden bg-[color:var(--surface-card)] border border-[color:var(--border-default)] p-8 transition-all duration-500 hover:border-[color:var(--accent-primary)]/40 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(224,186,83,0.15)]">
<div className="absolute inset-0 bg-gradient-to-b from-[color:var(--accent-primary)]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
<h3 className="text-caption text-[color:var(--accent-primary)] relative z-10 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:calendar-date-linear"></iconify-icon> Rituais de Gestão Definidos
                </h3>
</div>
<div className="reveal delay-300 group relative overflow-hidden bg-[color:var(--surface-card)] border border-[color:var(--border-default)] p-8 transition-all duration-500 hover:border-[color:var(--accent-primary)]/40 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(224,186,83,0.15)]">
<div className="absolute inset-0 bg-gradient-to-b from-[color:var(--accent-primary)]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
<h3 className="text-caption text-[color:var(--accent-primary)] relative z-10 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:bolt-linear"></iconify-icon> Cultura de Alta Performance
                </h3>
</div>
<div className="reveal delay-400 group relative overflow-hidden bg-[color:var(--surface-card)] border border-[color:var(--border-default)] p-8 transition-all duration-500 hover:border-[color:var(--accent-primary)]/40 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(224,186,83,0.15)]">
<div className="absolute inset-0 bg-gradient-to-b from-[color:var(--accent-primary)]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
<h3 className="text-caption text-[color:var(--accent-primary)] relative z-10 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:target-linear"></iconify-icon> Estratégia de Receita
                </h3>
</div>
</div>
<div className="mt-12 text-center reveal delay-500">
<span className="inline-block bg-[color:var(--surface-elevated)] border border-[color:var(--border-default)] px-6 py-2 text-sm text-[color:var(--text-primary)]">Isso é <span className="text-[color:var(--accent-primary)] font-medium">Arquitetura Comercial</span>.</span>
</div>
</section>

<section className="py-24 lg:py-32 relative z-10 bg-[color:var(--surface-section-alt)] border-y border-[color:var(--border-subtle)]">
<div className="max-w-[80rem] mx-auto px-6 text-center mb-16">
<h2 className="reveal font-display tracking-tight text-[clamp(2.5rem,4.5vw,4.5rem)] text-[color:var(--text-primary)] uppercase mb-4">
                MÉTODO R8 – CULTURA QUE VENDE
            </h2>
<p className="reveal delay-100 text-[color:var(--text-secondary)] text-lg">
                Um modelo estratégico de transformação comercial em 3 pilares:
            </p>
</div>
<div className="max-w-[80rem] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="reveal delay-100 group relative overflow-hidden bg-[color:var(--surface-page)] border border-[color:var(--border-default)] p-10 transition-all duration-500 hover:border-[color:var(--accent-primary)]/40 hover:-translate-y-2">
<div className="absolute inset-0 bg-gradient-to-b from-[color:var(--accent-primary)]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
<span className="absolute top-4 right-6 font-display text-[4rem] text-[color:var(--accent-primary)] opacity-10 select-none transition-opacity duration-300 group-hover:opacity-20 leading-none">1</span>
<h3 className="text-base font-medium text-[color:var(--text-primary)] mb-4 relative z-10 pr-8">Estrutura Estratégica de Receita</h3>
<p className="text-sm text-[color:var(--text-muted)] relative z-10">Modelagem inteligente de funil, posicionamento, ofertas e estratégia comercial para gerar previsibilidade e crescimento sustentável.</p>
</div>
<div className="reveal delay-200 group relative overflow-hidden bg-[color:var(--surface-page)] border border-[color:var(--border-default)] p-10 transition-all duration-500 hover:border-[color:var(--accent-primary)]/40 hover:-translate-y-2">
<div className="absolute inset-0 bg-gradient-to-b from-[color:var(--accent-primary)]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
<span className="absolute top-4 right-6 font-display text-[4rem] text-[color:var(--accent-primary)] opacity-10 select-none transition-opacity duration-300 group-hover:opacity-20 leading-none">2</span>
<h3 className="text-base font-medium text-[color:var(--text-primary)] mb-4 relative z-10 pr-8">Construção e Engajamento de Time</h3>
<p className="text-sm text-[color:var(--text-muted)] relative z-10">Contratação estratégica, retenção de talentos, metas bem estruturadas e cultura de alta performance que elimina acomodação e baixa produtividade.</p>
</div>
<div className="reveal delay-300 group relative overflow-hidden bg-[color:var(--surface-page)] border border-[color:var(--border-default)] p-10 transition-all duration-500 hover:border-[color:var(--accent-primary)]/40 hover:-translate-y-2">
<div className="absolute inset-0 bg-gradient-to-b from-[color:var(--accent-primary)]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
<span className="absolute top-4 right-6 font-display text-[4rem] text-[color:var(--accent-primary)] opacity-10 select-none transition-opacity duration-300 group-hover:opacity-20 leading-none">3</span>
<h3 className="text-base font-medium text-[color:var(--text-primary)] mb-4 relative z-10 pr-8">Governança e Performance Comercial</h3>
<p className="text-sm text-[color:var(--text-muted)] relative z-10">Indicadores claros, rituais de liderança, acompanhamento estratégico e estrutura de gestão que transforma o dono em líder — não em bombeiro da operação.</p>
</div>
</div>
</section>

<section className="overflow-hidden bg-[color:var(--surface-elevated)] border-b border-[color:var(--border-subtle)] py-8 relative">
<div className="relative w-full overflow-hidden mask-fade-sides">
<div className="flex items-center gap-12 w-max animate-marquee">

<div className="flex items-center gap-12">
<span className="font-display tracking-tight text-3xl text-[color:var(--text-primary)] uppercase tracking-wide">Cultura forte gera venda previsível</span>
<span className="w-2 h-2 rounded-full bg-[color:var(--accent-primary)] opacity-50 shadow-[0_0_10px_rgba(224,186,83,0.8)]"></span>
<span className="font-display tracking-tight text-3xl text-[color:var(--text-primary)] uppercase tracking-wide">Venda previsível gera lucro</span>
<span className="w-2 h-2 rounded-full bg-[color:var(--accent-primary)] opacity-50 shadow-[0_0_10px_rgba(224,186,83,0.8)]"></span>
<span className="font-display tracking-tight text-3xl text-[color:var(--text-primary)] uppercase tracking-wide">Lucro gera liberdade</span>
<span className="w-2 h-2 rounded-full bg-[color:var(--accent-primary)] opacity-50 shadow-[0_0_10px_rgba(224,186,83,0.8)]"></span>
</div>

<div className="flex items-center gap-12">
<span className="font-display tracking-tight text-3xl text-[color:var(--text-primary)] uppercase tracking-wide">Cultura forte gera venda previsível</span>
<span className="w-2 h-2 rounded-full bg-[color:var(--accent-primary)] opacity-50 shadow-[0_0_10px_rgba(224,186,83,0.8)]"></span>
<span className="font-display tracking-tight text-3xl text-[color:var(--text-primary)] uppercase tracking-wide">Venda previsível gera lucro</span>
<span className="w-2 h-2 rounded-full bg-[color:var(--accent-primary)] opacity-50 shadow-[0_0_10px_rgba(224,186,83,0.8)]"></span>
<span className="font-display tracking-tight text-3xl text-[color:var(--text-primary)] uppercase tracking-wide">Lucro gera liberdade</span>
<span className="w-2 h-2 rounded-full bg-[color:var(--accent-primary)] opacity-50 shadow-[0_0_10px_rgba(224,186,83,0.8)]"></span>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative z-10">
<div className="max-w-[64rem] mx-auto px-6 text-center mb-16">
<h2 className="reveal font-display tracking-tight text-[clamp(2.5rem,4.5vw,4.5rem)] text-[color:var(--text-primary)] uppercase">
                Resultados reais não são coincidência. <br/> São <span className="text-[color:var(--accent-primary)]">Estrutura</span>.
            </h2>
</div>
<div className="reveal delay-200 max-w-[64rem] mx-auto px-6">
<div className="border border-[color:var(--border-default)] bg-[color:var(--surface-card)] relative overflow-hidden grid grid-cols-1 md:grid-cols-[55%_45%] group hover:border-[color:var(--accent-primary)]/30 transition-colors duration-500">
<div className="absolute top-0 left-0 h-[2px] bg-[linear-gradient(90deg,var(--accent-green)_0%,var(--accent-primary)_50%,var(--accent-green)_100%)] w-[200%] transition-transform duration-[3s] ease-linear group-hover:animate-marquee z-20" id="case-gradient"></div>
<div className="p-10 lg:p-16 flex flex-col justify-between relative">
<div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10">
<span className="text-caption text-[color:var(--accent-primary)] block mb-4 flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:buildings-linear"></iconify-icon> Case Real
                        </span>
<h3 className="font-serif-display tracking-tight text-3xl lg:text-4xl text-[color:var(--text-primary)] mb-4">São Bento Incorporadora</h3>
<p className="text-sm text-[color:var(--text-muted)] border-b border-[color:var(--border-subtle)] pb-8 mb-8">
                            Sem lançamento. Apenas estoque existente estruturado com nova mentalidade.
                        </p>
</div>
<blockquote className="font-serif-display tracking-tight italic text-xl text-[color:var(--text-secondary)] text-opacity-70 leading-snug relative z-10">
                        "Isso é cultura estruturada aplicada na prática."
                    </blockquote>
</div>
<div className="bg-[color:var(--surface-elevated)] p-10 lg:p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-[color:var(--border-default)] relative">
<div className="flex flex-col py-5 border-b border-[color:var(--border-subtle)] first:pt-0 last:border-0 last:pb-0">
<div className="font-display tracking-tight text-[3.5rem] leading-none text-white mb-1"><span className="counter" data-target="3">0</span></div>
<div className="text-caption text-[color:var(--text-muted)]">Recordes consecutivos de vendas</div>
</div>
<div className="flex flex-col py-5 border-b border-[color:var(--border-subtle)] first:pt-0 last:border-0 last:pb-0">
<div className="font-display tracking-tight text-[3.5rem] leading-none text-white mb-1"><span className="counter" data-target="3">0</span><span className="text-[color:var(--accent-primary)]">x</span></div>
<div className="text-caption text-[color:var(--text-muted)]">Média de comissão multiplicada</div>
</div>
<div className="flex flex-col py-5 border-b border-[color:var(--border-subtle)] first:pt-0 last:border-0 last:pb-0">
<div className="font-display tracking-tight text-[3.5rem] leading-none text-white mb-1"><span className="counter" data-target="7">0</span></div>
<div className="text-caption text-[color:var(--text-muted)]">Corretores ultrapassaram 300 mil em comissão anual</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative z-10 bg-[color:var(--surface-section-alt)] border-y border-[color:var(--border-subtle)]">
<div className="max-w-[64rem] mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16">
<span className="reveal text-caption text-[color:var(--accent-primary)] mb-4">A Liderança do Método</span>
<h2 className="reveal delay-100 font-display tracking-tight text-[clamp(2.5rem,4vw,4rem)] text-[color:var(--text-primary)] uppercase mb-6">
                    Experiência executiva aplicada à prática.
                </h2>
<p className="reveal delay-200 text-[color:var(--text-secondary)]">Atuação em nível estratégico equivalente a Diretor Comercial C-Level.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="reveal delay-100 bg-[color:var(--surface-card)] border border-[color:var(--border-default)] p-8 flex items-start gap-4">
<div className="mt-1">
<iconify-icon className="text-[color:var(--accent-primary)]" height="1.8em" icon="solar:history-linear" width="1.8em"></iconify-icon>
</div>
<div>
<div className="font-display text-3xl text-white tracking-wide mb-1">14 ANOS</div>
<div className="text-sm text-[color:var(--text-muted)]">De atuação em vendas e gestão comercial</div>
</div>
</div>
<div className="reveal delay-200 bg-[color:var(--surface-card)] border border-[color:var(--border-default)] p-8 flex items-start gap-4">
<div className="mt-1">
<iconify-icon className="text-[color:var(--accent-primary)]" height="1.8em" icon="solar:wallet-money-linear" width="1.8em"></iconify-icon>
</div>
<div>
<div className="font-display text-3xl text-white tracking-wide mb-1">+500 MILHÕES</div>
<div className="text-sm text-[color:var(--text-muted)]">De reais gerenciados em vendas</div>
</div>
</div>
<div className="reveal delay-300 bg-[color:var(--surface-card)] border border-[color:var(--border-default)] p-8 flex items-start gap-4">
<div className="mt-1">
<iconify-icon className="text-[color:var(--accent-primary)]" height="1.8em" icon="solar:chart-square-linear" width="1.8em"></iconify-icon>
</div>
<div>
<div className="font-display text-3xl text-white tracking-wide mb-1">+5 MILHÕES</div>
<div className="text-sm text-[color:var(--text-muted)]">Gerenciados em orçamento de marketing</div>
</div>
</div>
<div className="reveal delay-400 bg-[color:var(--surface-card)] border border-[color:var(--border-default)] p-8 flex items-start gap-4">
<div className="mt-1">
<iconify-icon className="text-[color:var(--accent-primary)]" height="1.8em" icon="solar:global-linear" width="1.8em"></iconify-icon>
</div>
<div>
<div className="font-display text-3xl text-white tracking-wide mb-1">DIVERSIDADE</div>
<div className="text-sm text-[color:var(--text-muted)]">Experiência em mercado imobiliário, infoprodutos high ticket e empresas tradicionais</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative z-10">
<div className="max-w-[80rem] mx-auto px-6 text-center mb-16">
<h2 className="reveal font-display tracking-tight text-[clamp(2.5rem,4.5vw,4.5rem)] text-[color:var(--text-primary)] uppercase">
                Arquitetura <span className="text-[color:var(--accent-primary)]">Estratégica</span> <br/> Em 6 Meses
            </h2>
</div>
<div className="max-w-[80rem] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-[color:var(--border-subtle)] border border-[color:var(--border-subtle)]">
<div className="reveal delay-100 group bg-[color:var(--surface-page)] p-10 lg:p-12 relative overflow-hidden transition-all duration-300 hover:bg-[color:var(--surface-elevated)]">
<span className="absolute top-4 right-6 font-display text-[4rem] text-[color:var(--accent-primary)] opacity-10 select-none leading-none">1</span>
<h3 className="text-base font-medium text-[color:var(--text-primary)] mb-3 relative z-10 pr-6">Diagnóstico Estratégico Profundo</h3>
</div>
<div className="reveal delay-200 group bg-[color:var(--surface-page)] p-10 lg:p-12 relative overflow-hidden transition-all duration-300 hover:bg-[color:var(--surface-elevated)]">
<span className="absolute top-4 right-6 font-display text-[4rem] text-[color:var(--accent-primary)] opacity-10 select-none leading-none">2</span>
<h3 className="text-base font-medium text-[color:var(--text-primary)] mb-3 relative z-10 pr-6">Plano de Arquitetura Comercial Personalizado</h3>
</div>
<div className="reveal delay-300 group bg-[color:var(--surface-page)] p-10 lg:p-12 relative overflow-hidden transition-all duration-300 hover:bg-[color:var(--surface-elevated)]">
<span className="absolute top-4 right-6 font-display text-[4rem] text-[color:var(--accent-primary)] opacity-10 select-none leading-none">3</span>
<h3 className="text-base font-medium text-[color:var(--text-primary)] mb-3 relative z-10 pr-6">Mentoria Direta com o Dono</h3>
</div>
<div className="reveal delay-400 group bg-[color:var(--surface-page)] p-10 lg:p-12 relative overflow-hidden transition-all duration-300 hover:bg-[color:var(--surface-elevated)]">
<span className="absolute top-4 right-6 font-display text-[4rem] text-[color:var(--accent-primary)] opacity-10 select-none leading-none">4</span>
<h3 className="text-base font-medium text-[color:var(--text-primary)] mb-3 relative z-10 pr-6">Treinamento e Direcionamento do Líder Comercial</h3>
</div>
<div className="reveal delay-500 group bg-[color:var(--surface-page)] p-10 lg:p-12 relative overflow-hidden transition-all duration-300 hover:bg-[color:var(--surface-elevated)]">
<span className="absolute top-4 right-6 font-display text-[4rem] text-[color:var(--accent-primary)] opacity-10 select-none leading-none">5</span>
<h3 className="text-base font-medium text-[color:var(--text-primary)] mb-3 relative z-10 pr-6">Implementação Prática do Método R8</h3>
</div>
<div className="reveal delay-[600ms] group bg-[color:var(--surface-page)] p-10 lg:p-12 relative overflow-hidden transition-all duration-300 hover:bg-[color:var(--surface-elevated)]">
<span className="absolute top-4 right-6 font-display text-[4rem] text-[color:var(--accent-primary)] opacity-10 select-none leading-none">6</span>
<h3 className="text-base font-medium text-[color:var(--text-primary)] mb-3 relative z-10 pr-6">Ajustes Estratégicos e Consolidação da Cultura</h3>
</div>
</div>
<div className="mt-12 text-center reveal delay-[700ms]">
<p className="text-[color:var(--text-secondary)] text-lg">Você não recebe apenas teoria. <span className="text-[color:var(--accent-primary)] font-medium">Você implementa estrutura.</span></p>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[color:var(--surface-section-alt)] border-y border-[color:var(--border-subtle)] relative z-10">
<div className="max-w-[80rem] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

<div className="flex flex-col">
<h3 className="reveal font-display tracking-tight text-3xl lg:text-4xl text-[color:var(--text-primary)] mb-8 flex items-center gap-3">
<span className="w-8 h-8 flex items-center justify-center rounded-none bg-[color:var(--accent-green-subtle)] border border-[color:var(--accent-green)] text-[color:var(--accent-primary)]">
<iconify-icon icon="solar:check-read-linear" width="1.2em"></iconify-icon>
</span>
                    Empresários que:
                </h3>
<ul className="flex flex-col gap-4">
<li className="reveal delay-100 flex items-start gap-4 text-[color:var(--text-secondary)]">
<iconify-icon className="text-[color:var(--accent-primary)] mt-1 flex-shrink-0" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>
                        Faturam acima de 50 mil por mês
                    </li>
<li className="reveal delay-200 flex items-start gap-4 text-[color:var(--text-secondary)]">
<iconify-icon className="text-[color:var(--accent-primary)] mt-1 flex-shrink-0" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>
                        Já possuem time comercial
                    </li>
<li className="reveal delay-300 flex items-start gap-4 text-[color:var(--text-secondary)]">
<iconify-icon className="text-[color:var(--accent-primary)] mt-1 flex-shrink-0" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>
                        Querem previsibilidade real
                    </li>
<li className="reveal delay-400 flex items-start gap-4 text-[color:var(--text-secondary)]">
<iconify-icon className="text-[color:var(--accent-primary)] mt-1 flex-shrink-0" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>
                        Desejam escalar sem perder controle
                    </li>
<li className="reveal delay-500 flex items-start gap-4 text-[color:var(--text-secondary)]">
<iconify-icon className="text-[color:var(--accent-primary)] mt-1 flex-shrink-0" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>
                        Estão cansados de carregar o comercial nas costas
                    </li>
</ul>
</div>

<div className="flex flex-col">
<h3 className="reveal font-display tracking-tight text-3xl lg:text-4xl text-[color:var(--text-muted)] mb-8 flex items-center gap-3">
<span className="w-8 h-8 flex items-center justify-center rounded-none bg-[color:var(--surface-elevated)] border border-[color:var(--border-default)] text-[color:var(--text-muted)]">
<iconify-icon icon="solar:close-circle-linear" width="1.2em"></iconify-icon>
</span>
                    Não é para quem:
                </h3>
<ul className="flex flex-col gap-4 mb-8">
<li className="reveal delay-100 flex items-start gap-4 text-[color:var(--text-muted)]">
<iconify-icon className="opacity-50 mt-1 flex-shrink-0" icon="solar:close-square-linear" width="1.2em"></iconify-icon>
                        Busca fórmula mágica
                    </li>
<li className="reveal delay-200 flex items-start gap-4 text-[color:var(--text-muted)]">
<iconify-icon className="opacity-50 mt-1 flex-shrink-0" icon="solar:close-square-linear" width="1.2em"></iconify-icon>
                        Não quer mexer na cultura da empresa
                    </li>
<li className="reveal delay-300 flex items-start gap-4 text-[color:var(--text-muted)]">
<iconify-icon className="opacity-50 mt-1 flex-shrink-0" icon="solar:close-square-linear" width="1.2em"></iconify-icon>
                        Não aceita responsabilidade como líder
                    </li>
<li className="reveal delay-400 flex items-start gap-4 text-[color:var(--text-muted)]">
<iconify-icon className="opacity-50 mt-1 flex-shrink-0" icon="solar:close-square-linear" width="1.2em"></iconify-icon>
                        Não possui estrutura mínima de operação
                    </li>
</ul>
<div className="reveal delay-500 bg-[color:var(--surface-card)] border-l-[2px] border-[color:var(--border-default)] p-5">
<p className="text-sm text-[color:var(--text-secondary)] italic">Essa mentoria exige maturidade empresarial.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="max-w-[64rem] mx-auto px-6 text-center">
<h2 className="reveal font-display tracking-tight text-[clamp(2.5rem,4vw,3.5rem)] text-[color:var(--text-primary)] uppercase mb-12">
                Processo de Aplicação Estratégica
            </h2>
<div className="flex flex-col md:flex-row gap-4 mb-12">
<div className="reveal delay-100 flex-1 bg-[color:var(--surface-card)] border border-[color:var(--border-default)] p-8 text-center relative">
<span className="block text-caption text-[color:var(--accent-primary)] mb-4">Etapa 1</span>
<p className="text-sm text-[color:var(--text-primary)] font-medium">Você preenche a aplicação</p>
</div>
<div className="reveal delay-200 flex-1 bg-[color:var(--surface-card)] border border-[color:var(--border-default)] p-8 text-center relative">
<span className="block text-caption text-[color:var(--accent-primary)] mb-4">Etapa 2</span>
<p className="text-sm text-[color:var(--text-primary)] font-medium">Nossa equipe analisa seu perfil</p>
</div>
<div className="reveal delay-300 flex-1 bg-[color:var(--surface-card)] border border-[color:var(--border-default)] p-8 text-center relative">
<span className="block text-caption text-[color:var(--accent-primary)] mb-4">Etapa 3</span>
<p className="text-sm text-[color:var(--text-primary)] font-medium">Se aprovado, você será convidado para a Call</p>
</div>
</div>
<p className="reveal delay-400 text-sm text-[color:var(--text-muted)] max-w-xl mx-auto">
<span className="text-[color:var(--text-secondary)]">A aplicação não garante a reunião.</span> <br/>Trabalhamos com número limitado de empresas por ciclo para manter profundidade estratégica.
            </p>
</div>
</section>

<section className="py-32 lg:py-48 bg-[color:var(--surface-page)] border-t border-[color:var(--border-subtle)] relative z-10 min-h-[80vh] flex items-center justify-center overflow-hidden" id="cta">
<div className="absolute left-0 top-0 bottom-0 w-1/4 hidden md:flex gap-4 opacity-30 mask-fade-sides translate-x-[-20%] pointer-events-none z-0">
<div className="flex flex-col gap-4 w-20 animate-marquee" style={{animationDirection: 'reverse', animationDuration: '40s'}}>
<div className="grid-cell"></div><div className="grid-cell"></div><div className="grid-cell"></div><div className="grid-cell"></div><div className="grid-cell"></div><div className="grid-cell"></div>
</div>
<div className="flex flex-col gap-4 w-20 animate-marquee mt-10" style={{animationDuration: '35s'}}>
<div className="grid-cell opacity-50"></div><div className="grid-cell"></div><div className="grid-cell opacity-50"></div><div className="grid-cell"></div><div className="grid-cell"></div><div className="grid-cell opacity-50"></div>
</div>
</div>
<div className="absolute right-0 top-0 bottom-0 w-1/4 hidden md:flex gap-4 opacity-30 mask-fade-sides translate-x-[20%] pointer-events-none z-0">
<div className="flex flex-col gap-4 w-20 animate-marquee" style={{animationDuration: '38s'}}>
<div className="grid-cell"></div><div className="grid-cell"></div><div className="grid-cell"></div><div className="grid-cell"></div><div className="grid-cell"></div><div className="grid-cell"></div>
</div>
<div className="flex flex-col gap-4 w-20 animate-marquee mt-10" style={{animationDirection: 'reverse', animationDuration: '42s'}}>
<div className="grid-cell opacity-50"></div><div className="grid-cell"></div><div className="grid-cell opacity-50"></div><div className="grid-cell"></div><div className="grid-cell opacity-50"></div><div className="grid-cell"></div>
</div>
</div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,186,83,0.06),transparent_60%)] pointer-events-none z-0"></div>
<div className="max-w-[64rem] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<h2 className="reveal delay-100 font-display text-[clamp(3.5rem,7vw,6.875rem)] text-[color:var(--text-primary)] uppercase leading-[0.95] flex flex-col items-center mb-10 drop-shadow-xl">
<span>Se você quer</span>
</h2>
<ul className="reveal delay-200 flex flex-col gap-3 text-[color:var(--text-secondary)] text-lg mb-12 text-left bg-[color:var(--surface-card)] border border-[color:var(--border-default)] p-8 shadow-2xl">
<li className="flex items-center gap-3"><iconify-icon className="text-[color:var(--accent-primary)]" icon="solar:arrow-right-linear"></iconify-icon> Aumentar vendas com previsibilidade</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[color:var(--accent-primary)]" icon="solar:arrow-right-linear"></iconify-icon> Construir um time engajado</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[color:var(--accent-primary)]" icon="solar:arrow-right-linear"></iconify-icon> Elevar lucro e margem</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[color:var(--accent-primary)]" icon="solar:arrow-right-linear"></iconify-icon> Parar de depender do feeling</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[color:var(--accent-primary)]" icon="solar:arrow-right-linear"></iconify-icon> Assumir liderança estratégica do comercial</li>
</ul>
<p className="reveal delay-300 text-[color:var(--text-primary)] font-medium mb-8">Aplique agora para a Call Estratégica.</p>
<button className="reveal delay-400 bg-[color:var(--accent-primary)] text-[color:var(--text-on-accent)] rounded-none font-medium tracking-[0.1em] px-12 lg:px-16 py-6 lg:py-7 uppercase flex items-center justify-center gap-4 hover:bg-white hover:scale-105 transition-all duration-300 group shadow-[0_0_40px_-5px_rgba(224,186,83,0.5)]">
                Quero me aplicar
                <iconify-icon className="transition-transform group-hover:translate-x-2 stroke-[1.5]" height="1.5em" icon="solar:arrow-right-linear" width="1.5em"></iconify-icon>
</button>
</div>
</section>

<footer className="bg-[color:var(--surface-section-alt)] border-t border-[color:var(--border-subtle)] py-11 text-center relative z-10">
<div className="font-display tracking-widest text-[1.375rem] text-[color:var(--text-primary)] opacity-15 mb-4">
            MÉTODO R8 – CULTURA QUE VENDE
        </div>
<div className="text-caption text-[color:var(--text-muted)] opacity-50 flex items-center justify-center gap-2">
            © 2025 · Todos os direitos reservados
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent-primary)] mx-2 animate-pulse"></span>
            Diagnóstico Estratégico Comercial
        </div>
</footer>



    </>
  );
}
