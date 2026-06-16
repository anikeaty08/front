import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();

        // Reveal Animations
        const revealElements = document.querySelectorAll('.reveal-up');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        revealElements.forEach(el => revealObserver.observe(el));

        // Engine Scroll Animation
        const engineContainer = document.getElementById('engine-scroll-container');
        if (engineContainer) {
            const parts = document.querySelectorAll('.engine-part');
            const texts = document.querySelectorAll('.engine-text');
            const totalSteps = parts.length;

            window.addEventListener('scroll', () => {
                const rect = engineContainer.getBoundingClientRect();
                const viewHeight = window.innerHeight;
                const scrollableDistance = rect.height - viewHeight;
                
                if(scrollableDistance <= 0) return;

                let progress = -rect.top / scrollableDistance;
                progress = Math.max(0, Math.min(1, progress));

                let currentStep = Math.floor(progress * totalSteps);
                if (currentStep >= totalSteps) currentStep = totalSteps - 1;

                parts.forEach((part, index) => {
                    if (index === currentStep) {
                        part.classList.remove('stroke-neutral-800');
                        part.classList.add('stroke-blue-500');
                        part.style.filter = 'drop-shadow(0 0 12px rgba(59,130,246,0.6))';
                    } else {
                        part.classList.add('stroke-neutral-800');
                        part.classList.remove('stroke-blue-500');
                        part.style.filter = 'none';
                    }
                });

                texts.forEach((text, index) => {
                    if (index === currentStep) {
                        text.classList.remove('opacity-0', 'translate-y-8', 'pointer-events-none');
                        text.classList.add('opacity-100', 'translate-y-0');
                    } else {
                        text.classList.add('opacity-0', 'translate-y-8', 'pointer-events-none');
                        text.classList.remove('opacity-100', 'translate-y-0');
                    }
                });
            });
            
            // Trigger scroll once to set initial state
            window.dispatchEvent(new Event('scroll'));
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl border border-white/10 bg-[#111111]/70 backdrop-blur-xl rounded-full shadow-2xl">
<div className="px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-lg font-medium tracking-tight text-white">ForgeChat</span>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-normal text-neutral-400">
<a className="hover:text-white transition-colors" href="#motor">Motor RAG</a>
<a className="hover:text-white transition-colors" href="#infraestrutura">Infraestrutura</a>
<a className="hover:text-white transition-colors" href="#casos">Casos</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-base font-normal text-neutral-300 hover:text-white transition-colors" href="#">Login</a>
<a className="px-5 py-2 bg-blue-500 text-white text-base font-medium rounded-full hover:bg-blue-600 transition-all transform hover:scale-105" href="#">
                    Começar
                </a>
</div>
</div>
</nav>

<section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-24 overflow-hidden">
<div className="stars-bg"></div>
<div className="hero-glow"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center reveal-up active">
<div className="w-16 h-16 bg-[#1a1a1a] border border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
<i className="text-blue-500 w-8 h-8" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                A infraestrutura de IA para <br className="hidden md:block"/>
                empresas que exigem escala
            </h1>
<p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
                ForgeChat é um motor flexível e robusto projetado para absorver, estruturar e converter seu atendimento digital de ponta a ponta.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-3.5 bg-blue-500 text-white text-lg font-medium rounded-full hover:bg-blue-600 transition-all transform hover:scale-105 shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)]" href="#">
                    Nossos serviços
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-[#111111] border border-white/10 text-white text-lg font-normal rounded-full hover:bg-white/5 transition-colors" href="#">
                    Fale conosco
                </a>
</div>
<div className="mt-20 text-base text-neutral-500 font-normal">
                Confiado por especialistas em atendimento
            </div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#000000] relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal-up">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">O caos custa caro.</h2>
<p className="text-xl text-neutral-400 max-w-2xl mx-auto font-normal">Sistemas obsoletos criam gargalos que impedem o crescimento orgânico da sua operação.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-panel hover-card p-8 rounded-3xl reveal-up" style={{transitionDelay: '100ms'}}>
<div className="h-14 w-14 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20">
<i className="text-red-400 w-6 h-6" data-lucide="ghost" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-3">Vazamento de Leads</h3>
<p className="text-lg text-neutral-400 font-normal leading-relaxed">Respostas lentas em momentos cruciais de decisão fazem seus clientes procurarem a concorrência imediatamente.</p>
</div>
<div className="glass-panel hover-card p-8 rounded-3xl reveal-up" style={{transitionDelay: '200ms'}}>
<div className="h-14 w-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20">
<i className="text-orange-400 w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-3">Equipes Caóticas</h3>
<p className="text-lg text-neutral-400 font-normal leading-relaxed">Atendentes sobrecarregados dividindo a mesma tela de WhatsApp, gerando atrito interno e perda de histórico.</p>
</div>
<div className="glass-panel hover-card p-8 rounded-3xl reveal-up" style={{transitionDelay: '300ms'}}>
<div className="h-14 w-14 rounded-2xl bg-neutral-500/10 flex items-center justify-center mb-6 border border-neutral-500/20">
<i className="text-neutral-400 w-6 h-6" data-lucide="bar-chart" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-3">Falta de Inteligência</h3>
<p className="text-lg text-neutral-400 font-normal leading-relaxed">Chatbots de menu engessados que irritam o usuário e são incapazes de resolver problemas complexos ou objeções.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] border-t border-white/5 relative" id="motor">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
<div className="max-w-7xl mx-auto px-6 pt-32 pb-16 relative z-20 text-center reveal-up">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-base text-blue-500 font-normal mb-6">
<i className="w-5 h-5" data-lucide="cpu" strokeWidth="1.5"></i>
                Motor de IA Proprietário
            </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">A anatomia da resolução.</h2>
<p className="text-xl text-neutral-400 max-w-3xl mx-auto font-normal">Uma visão técnica de como transformamos requisições caóticas em respostas perfeitas em milissegundos.</p>
</div>

<div className="block lg:hidden px-6 pb-32 space-y-12 relative z-20">
<div className="glass-panel p-8 rounded-3xl border-l-2 border-blue-500">
<span className="text-blue-500 text-base font-medium tracking-widest uppercase mb-3 block">[1.0] Refinar Busca</span>
<p className="text-neutral-400 text-lg leading-relaxed">Para otimizar a precisão da resposta que a IA gera, os inputs recebidos dos clientes são limpos, formatados e refinados para garantir total compreensão estrutural pelo modelo.</p>
</div>
<div className="glass-panel p-8 rounded-3xl border-l-2 border-blue-500">
<span className="text-blue-500 text-base font-medium tracking-widest uppercase mb-3 block">[2.0] Recuperação Contextual</span>
<p className="text-neutral-400 text-lg leading-relaxed">O processo de recuperação varre todas as fontes de conhecimento da sua empresa (PDFs, sites, históricos) e seleciona as informações exatas necessárias para resolver o problema atual.</p>
</div>
<div className="glass-panel p-8 rounded-3xl border-l-2 border-blue-500">
<span className="text-blue-500 text-base font-medium tracking-widest uppercase mb-3 block">[3.0] Precisão (Rerank)</span>
<p className="text-neutral-400 text-lg leading-relaxed">O sistema avalia e pontua o conteúdo recuperado por relevância bruta. Em seguida, seleciona apenas os fragmentos de maior probabilidade de acerto para alimentar o LLM.</p>
</div>
<div className="glass-panel p-8 rounded-3xl border-l-2 border-blue-500">
<span className="text-blue-500 text-base font-medium tracking-widest uppercase mb-3 block">[4.0] Geração de Resposta</span>
<p className="text-neutral-400 text-lg leading-relaxed">Usando um processo generativo sob medida, cria respostas de alta resolução. Regras customizadas controlam estritamente o tom e o comportamento para se alinhar à sua marca.</p>
</div>
<div className="glass-panel p-8 rounded-3xl border-l-2 border-blue-500">
<span className="text-blue-500 text-base font-medium tracking-widest uppercase mb-3 block">[5.0] Otimização e Validação</span>
<p className="text-neutral-400 text-lg leading-relaxed">Na etapa final, o motor verifica internamente se a saída atende aos padrões de precisão e segurança antes do envio, retroalimentando o sistema para calibração contínua.</p>
</div>
</div>

<div className="hidden lg:block relative h-[500vh] w-full" id="engine-scroll-container">
<div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 max-w-7xl mx-auto w-full flex z-30 pointer-events-none">

<div className="w-1/2 relative h-full">
<div className="engine-text absolute right-16 top-[15%] text-right max-w-md transition-all duration-700 opacity-0 translate-y-8">
<span className="text-blue-500 text-base font-medium tracking-widest uppercase mb-3 flex items-center justify-end gap-3">
<span className="w-2 h-2 bg-blue-500"></span> [1.0] Refinar Busca
                            </span>
<p className="text-neutral-400 text-lg leading-relaxed pointer-events-auto bg-black/40 backdrop-blur-sm p-4 rounded-2xl border border-white/5">Para otimizar a precisão da resposta que a IA gera, os inputs recebidos são formatados e refinados para total compreensão estrutural.</p>
</div>
<div className="engine-text absolute right-16 top-[45%] text-right max-w-md transition-all duration-700 opacity-0 translate-y-8">
<span className="text-blue-500 text-base font-medium tracking-widest uppercase mb-3 flex items-center justify-end gap-3">
<span className="w-2 h-2 bg-blue-500"></span> [3.0] Precisão (Rerank)
                            </span>
<p className="text-neutral-400 text-lg leading-relaxed pointer-events-auto bg-black/40 backdrop-blur-sm p-4 rounded-2xl border border-white/5">O processo avalia o conteúdo recuperado por relevância, selecionando e ordenando os fragmentos ótimos para uso restrito do LLM.</p>
</div>
<div className="engine-text absolute right-16 top-[75%] text-right max-w-md transition-all duration-700 opacity-0 translate-y-8">
<span className="text-blue-500 text-base font-medium tracking-widest uppercase mb-3 flex items-center justify-end gap-3">
<span className="w-2 h-2 bg-blue-500"></span> [5.0] Validação Final
                            </span>
<p className="text-neutral-400 text-lg leading-relaxed pointer-events-auto bg-black/40 backdrop-blur-sm p-4 rounded-2xl border border-white/5">Na etapa final, o motor verifica se a saída gerada atende aos rígidos padrões de precisão, tom de voz e segurança da marca.</p>
</div>
</div>

<div className="w-1/2 relative h-full">
<div className="engine-text absolute left-16 top-[30%] text-left max-w-md transition-all duration-700 opacity-0 translate-y-8">
<span className="text-blue-500 text-base font-medium tracking-widest uppercase mb-3 flex items-center gap-3">
<span className="w-2 h-2 bg-blue-500"></span> [2.0] Recuperação Contextual
                            </span>
<p className="text-neutral-400 text-lg leading-relaxed pointer-events-auto bg-black/40 backdrop-blur-sm p-4 rounded-2xl border border-white/5">O processo de recuperação varre todas as fontes de conhecimento conectadas para isolar a informação exata necessária para a resolução.</p>
</div>
<div className="engine-text absolute left-16 top-[60%] text-left max-w-md transition-all duration-700 opacity-0 translate-y-8">
<span className="text-blue-500 text-base font-medium tracking-widest uppercase mb-3 flex items-center gap-3">
<span className="w-2 h-2 bg-blue-500"></span> [4.0] Geração Controlada
                            </span>
<p className="text-neutral-400 text-lg leading-relaxed pointer-events-auto bg-black/40 backdrop-blur-sm p-4 rounded-2xl border border-white/5">Usando um processo generativo guiado, cria respostas imaculadas. Parâmetros injetados controlam o comportamento para espelhar sua operação.</p>
</div>
</div>
</div>

<div className="relative z-10 w-full max-w-lg h-[90vh] flex items-center justify-center pointer-events-none">
<svg className="w-full h-full stroke-[1.5px] fill-transparent drop-shadow-2xl" style={{strokeLinecap: 'round', strokeLinejoin: 'round'}} viewbox="0 0 400 900">

<line className="stroke-neutral-800" stroke-dasharray="4 4" x1="200" x2="200" y1="50" y2="850"></line>

<g className="engine-part transition-all duration-700 stroke-neutral-800">
<ellipse cx="200" cy="120" rx="70" ry="20"></ellipse>
<ellipse cx="200" cy="110" rx="55" ry="15"></ellipse>
<ellipse cx="200" cy="100" rx="30" ry="8"></ellipse>
<path d="M 130 120 L 130 180 A 70 20 0 0 0 270 180 L 270 120"></path>
<ellipse cx="200" cy="180" rx="70" ry="20"></ellipse>
<path d="M 170 180 L 170 210 M 200 180 L 200 220 M 230 180 L 230 210"></path>
<path d="M 150 120 L 150 180 M 250 120 L 250 180" stroke-dasharray="2 4"></path>
</g>

<g className="engine-part transition-all duration-700 stroke-neutral-800">
<ellipse cx="200" cy="280" rx="85" ry="25"></ellipse>
<ellipse cx="200" cy="280" rx="50" ry="15"></ellipse>
<ellipse cx="200" cy="280" rx="20" ry="6"></ellipse>
<line x1="150" x2="115" y1="280" y2="280"></line>
<line x1="250" x2="285" y1="280" y2="280"></line>
<line x1="170" x2="140" y1="270" y2="260"></line>
<line x1="230" x2="260" y1="270" y2="260"></line>
<line x1="170" x2="140" y1="290" y2="300"></line>
<line x1="230" x2="260" y1="290" y2="300"></line>
<circle cx="115" cy="280" r="4"></circle><circle cx="285" cy="280" r="4"></circle>
<circle cx="140" cy="260" r="4"></circle><circle cx="260" cy="260" r="4"></circle>
<circle cx="140" cy="300" r="4"></circle><circle cx="260" cy="300" r="4"></circle>
<path d="M 185 280 L 185 320 M 215 280 L 215 320"></path>
</g>

<g className="engine-part transition-all duration-700 stroke-neutral-800">
<circle cx="200" cy="440" r="75"></circle>
<ellipse cx="200" cy="440" rx="75" ry="25"></ellipse>
<ellipse cx="200" cy="440" rx="25" ry="75"></ellipse>
<ellipse cx="200" cy="440" rx="55" ry="55" transform="rotate(45 200 440)"></ellipse>
<ellipse cx="200" cy="440" rx="55" ry="55" transform="rotate(-45 200 440)"></ellipse>
<circle className="fill-black" cx="200" cy="440" r="20"></circle>
<circle cx="200" cy="440" r="8"></circle>
</g>

<g className="engine-part transition-all duration-700 stroke-neutral-800">
<ellipse cx="200" cy="600" rx="80" ry="22"></ellipse>
<path d="M 120 600 L 120 650 A 80 22 0 0 0 280 650 L 280 600"></path>
<ellipse cx="200" cy="650" rx="80" ry="22"></ellipse>
<ellipse cx="200" cy="600" rx="55" ry="15"></ellipse>
<ellipse cx="200" cy="650" rx="55" ry="15"></ellipse>
<path d="M 140 605 L 140 645 M 160 615 L 160 655 M 240 615 L 240 655 M 260 605 L 260 645" stroke-dasharray="2 3"></path>
</g>

<g className="engine-part transition-all duration-700 stroke-neutral-800">
<path d="M 150 730 L 250 730 L 280 810 A 80 25 0 0 1 120 810 Z"></path>
<ellipse cx="200" cy="810" rx="80" ry="25"></ellipse>
<ellipse cx="200" cy="730" rx="50" ry="14"></ellipse>
<rect height="35" rx="4" width="80" x="160" y="760"></rect>
<circle cx="175" cy="775" r="4"></circle><circle cx="195" cy="775" r="4"></circle><circle cx="215" cy="775" r="4"></circle>
<line x1="170" x2="180" y1="788" y2="788"></line><line x1="190" x2="200" y1="788" y2="788"></line>
</g>
</svg>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#000000]" id="infraestrutura">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal-up">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">A base operacional</h2>
<p className="text-xl text-neutral-400 max-w-2xl mx-auto font-normal">Conecte tudo. Monitore tudo. Assuma o controle.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="md:col-span-1 flex flex-col gap-6 reveal-up">
<div className="glass-panel hover-card p-6 rounded-3xl flex-1">
<h4 className="text-lg font-medium tracking-tight text-white mb-6 flex items-center gap-3">
<i className="text-neutral-400 w-5 h-5" data-lucide="network" strokeWidth="1.5"></i> Omnichannel
                        </h4>
<ul className="space-y-5">
<li className="flex items-center gap-4 text-base text-neutral-400 font-normal">
<div className="w-10 h-10 rounded-2xl bg-[#25D366]/10 flex items-center justify-center border border-[#25D366]/20">
<i className="text-[#25D366] w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i>
</div>
                                WhatsApp API
                            </li>
<li className="flex items-center gap-4 text-base text-neutral-400 font-normal">
<div className="w-10 h-10 rounded-2xl bg-[#E1306C]/10 flex items-center justify-center border border-[#E1306C]/20">
<i className="text-[#E1306C] w-4 h-4" data-lucide="camera" strokeWidth="1.5"></i>
</div>
                                Instagram DM
                            </li>
<li className="flex items-center gap-4 text-base text-neutral-400 font-normal">
<div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
<i className="text-white w-4 h-4" data-lucide="mail" strokeWidth="1.5"></i>
</div>
                                E-mail
                            </li>
</ul>
</div>
</div>

<div className="md:col-span-2 glass-panel hover-card p-8 rounded-3xl relative overflow-hidden reveal-up" style={{transitionDelay: '100ms'}}>
<h4 className="text-2xl font-medium tracking-tight text-white mb-3 relative z-10">Gestão de Equipe Híbrida</h4>
<p className="text-lg text-neutral-400 font-normal mb-8 relative z-10">Transição perfeita da IA para agentes humanos quando o fechamento exige empatia.</p>
<div className="grid grid-cols-2 gap-4 relative z-10">
<div className="bg-black/50 border border-white/5 p-6 rounded-2xl group hover:border-white/20 transition-colors">
<i className="text-neutral-400 mb-4 w-6 h-6 group-hover:text-white transition-colors" data-lucide="git-merge" strokeWidth="1.5"></i>
<h5 className="text-base font-medium text-white mb-2">Roteamento</h5>
<p className="text-base text-neutral-500 font-normal">Distribuição round-robin inteligente.</p>
</div>
<div className="bg-black/50 border border-white/5 p-6 rounded-2xl group hover:border-white/20 transition-colors">
<i className="text-neutral-400 mb-4 w-6 h-6 group-hover:text-white transition-colors" data-lucide="history" strokeWidth="1.5"></i>
<h5 className="text-base font-medium text-white mb-2">Histórico Unificado</h5>
<p className="text-base text-neutral-500 font-normal">Timeline de toda a jornada do cliente.</p>
</div>
<div className="bg-black/50 border border-white/5 p-6 rounded-2xl group hover:border-white/20 transition-colors">
<i className="text-neutral-400 mb-4 w-6 h-6 group-hover:text-white transition-colors" data-lucide="pause-circle" strokeWidth="1.5"></i>
<h5 className="text-base font-medium text-white mb-2">Status de Agente</h5>
<p className="text-base text-neutral-500 font-normal">Controle de pausa e recebimento.</p>
</div>
<div className="bg-black/50 border border-white/5 p-6 rounded-2xl group hover:border-white/20 transition-colors">
<i className="text-neutral-400 mb-4 w-6 h-6 group-hover:text-white transition-colors" data-lucide="trending-up" strokeWidth="1.5"></i>
<h5 className="text-base font-medium text-white mb-2">Analytics Real-time</h5>
<p className="text-base text-neutral-500 font-normal">Métricas de resolução e conversão.</p>
</div>
</div>
</div>

<div className="md:col-span-1 flex flex-col gap-6 reveal-up" style={{transitionDelay: '200ms'}}>
<div className="glass-panel hover-card p-6 rounded-3xl flex-1 bg-gradient-to-b from-neutral-900 to-black">
<h4 className="text-lg font-medium tracking-tight text-white mb-6 flex items-center gap-3">
<i className="text-blue-500 w-5 h-5" data-lucide="zap" strokeWidth="1.5"></i> Automação
                        </h4>
<div className="space-y-8">
<div>
<h5 className="text-base text-white font-medium mb-2">Webhooks In/Out</h5>
<p className="text-base text-neutral-500 font-normal">Conecte CRM ou ERPs instantaneamente.</p>
</div>
<div>
<h5 className="text-base text-white font-medium mb-2">Gatilhos Visuais</h5>
<p className="text-base text-neutral-500 font-normal">Regras complexas criadas sem código.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
<div className="reveal-up">
<h2 className="text-4xl font-medium tracking-tight text-white mb-6">Projetado para Escala</h2>
<p className="text-xl text-neutral-400 font-normal mb-12">Transforme seu atendimento de um centro de custo inflamado para um motor gerador de receita orgânica.</p>
<div className="space-y-10">
<div className="flex gap-6 group">
<div className="mt-1">
<div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-colors">
<i className="text-white group-hover:text-blue-500 transition-colors w-6 h-6" data-lucide="rocket" strokeWidth="1.5"></i>
</div>
</div>
<div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-3">Escala Sem Barreiras</h3>
<p className="text-lg text-neutral-400 font-normal leading-relaxed">Multiplique sua capacidade de atendimento por 10x sem precisar aumentar o headcount proporcionalmente.</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="mt-1">
<div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-colors">
<i className="text-white group-hover:text-blue-500 transition-colors w-6 h-6" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
</div>
<div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-3">Qualidade Padronizada</h3>
<p className="text-lg text-neutral-400 font-normal leading-relaxed">A IA não acorda em um mau dia. Todo cliente recebe o melhor discurso de vendas validado pela empresa, 24/7.</p>
</div>
</div>
</div>
</div>
<div className="glass-panel p-12 rounded-[2.5rem] flex flex-col justify-center relative overflow-hidden reveal-up" style={{transitionDelay: '200ms'}}>
<div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full"></div>
<span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-neutral-300 uppercase tracking-widest mb-6 w-max">Modelo Justo</span>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Precificação baseada em resultado real.</h3>
<p className="text-lg text-neutral-400 font-normal leading-relaxed mb-10">
                        Esqueça planos engessados por quantidade de "atendentes". No ForgeChat, você opera em um modelo escalável de créditos por consumo.
                    </p>
<ul className="space-y-5 mb-10">
<li className="flex items-center gap-4 text-lg text-neutral-300 font-normal">
<i className="text-blue-500 w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i> Usuários e agentes ilimitados.
                        </li>
<li className="flex items-center gap-4 text-lg text-neutral-300 font-normal">
<i className="text-blue-500 w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i> Conexões de canais ilimitadas.
                        </li>
<li className="flex items-center gap-4 text-lg text-neutral-300 font-normal">
<i className="text-blue-500 w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i> Pague apenas pelo processamento da IA.
                        </li>
</ul>
<a className="inline-flex items-center gap-3 text-lg text-white hover:text-blue-500 transition-colors font-medium w-max group" href="#">
                        Ver tabela de preços <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#000000]" id="faq">
<div className="max-w-3xl mx-auto px-6 reveal-up">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-12 text-center">Perguntas Frequentes</h2>
<div className="space-y-4">
<details className="group glass-panel rounded-3xl cursor-pointer hover:bg-white/[0.03] transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer p-8 text-lg text-white">
<span>O ForgeChat funciona para o meu tipo de empresa?</span>
<span className="transition-transform group-open:rotate-180 text-neutral-500">
<i className="w-6 h-6" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-lg text-neutral-400 font-normal px-8 pb-8 leading-relaxed">
                        Sim. Se a sua empresa realiza vendas ou suporte via WhatsApp, Instagram ou E-mail, e lida com um volume que sobrecarrega a equipe, nossa infraestrutura resolve o gargalo imediatamente.
                    </div>
</details>
<details className="group glass-panel rounded-3xl cursor-pointer hover:bg-white/[0.03] transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer p-8 text-lg text-white">
<span>A IA vai substituir meus vendedores?</span>
<span className="transition-transform group-open:rotate-180 text-neutral-500">
<i className="w-6 h-6" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-lg text-neutral-400 font-normal px-8 pb-8 leading-relaxed">
                        Não. A IA opera no modelo Copiloto ou Linha de Frente. Ela resolve dúvidas frequentes e qualifica o lead. Quando o momento do fechamento chega, ela transfere a conversa para o humano com todo o contexto resumido.
                    </div>
</details>
<details className="group glass-panel rounded-3xl cursor-pointer hover:bg-white/[0.03] transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer p-8 text-lg text-white">
<span>Como alimento a IA com os dados da minha empresa?</span>
<span className="transition-transform group-open:rotate-180 text-neutral-500">
<i className="w-6 h-6" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-lg text-neutral-400 font-normal px-8 pb-8 leading-relaxed">
                        O processo leva minutos. Cole a URL do seu site, faça upload de manuais em PDF ou escreva textos diretamente na plataforma. O motor se encarrega de ler, vetorizar e preparar tudo internamente.
                    </div>
</details>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#000000] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
<div className="text-center md:text-left">
<span className="text-2xl font-medium tracking-tight text-white flex items-center justify-center md:justify-start gap-3">
<i className="text-blue-500 w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i> FORGECHAT
                    </span>
<p className="text-base text-neutral-500 font-normal mt-3">A infraestrutura definitiva de inteligência artificial.</p>
</div>
<div className="flex items-center gap-8 text-base font-normal text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Serviços</a>
<a className="hover:text-white transition-colors" href="#">Preços</a>
<a className="hover:text-white transition-colors" href="#">Contato</a>
<a className="hover:text-white transition-colors" href="#">Termos</a>
</div>
</div>
<div className="text-center text-base text-neutral-600 font-normal border-t border-white/5 pt-8">
                © 2024 ForgeChat. Todos os direitos reservados.
            </div>
</div>
</footer>


    </>
  );
}
