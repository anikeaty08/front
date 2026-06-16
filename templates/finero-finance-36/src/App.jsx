import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Scroll Animation Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

        // Form Handling Simulation
        function handleSubscribe(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerHTML;
            const input = e.target.querySelector('input');
            
            if(input.value.length > 5) {
                btn.innerHTML = `<iconify-icon icon="solar:spinner-linear" class="animate-spin text-xl"></iconify-icon>`;
                btn.disabled = true;
                
                setTimeout(() => {
                    btn.innerHTML = `Vaga Garantida! <iconify-icon icon="solar:check-circle-linear" class="text-[#22ffbb] text-lg"></iconify-icon>`;
                    btn.classList.remove('bg-[#0F2A44]');
                    btn.classList.add('bg-green-600');
                    input.value = '';
                    input.placeholder = "Obrigado! Verifique seu e-mail.";
                    
                    // Reset after 3s
                    setTimeout(() => {
                        btn.disabled = false;
                        btn.innerHTML = originalText;
                        btn.classList.add('bg-[#0F2A44]');
                        btn.classList.remove('bg-green-600');
                        input.placeholder = "seu@email.com";
                    }, 3000);
                }, 1500);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-3 cursor-pointer group">
<div className="flex flex-col justify-center w-6 h-6">
<div className="logo-bar w-full group-hover:w-3/4 transition-all duration-300"></div>
<div className="logo-bar w-3/4 group-hover:w-full transition-all duration-300 delay-75"></div>
<div className="logo-bar w-1/2 group-hover:w-3/4 transition-all duration-300 delay-100"></div>
</div>
<span className="text-lg font-semibold tracking-tight text-[#0F2A44]">FINERO</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#28587b]">
<a className="hover:text-[#0F2A44] transition-colors" href="#how-it-works">Como funciona</a>
<a className="hover:text-[#0F2A44] transition-colors" href="#pricing">Planos</a>
</div>

<a className="bg-[#0F2A44] text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-[#28587b] transition-all transform hover:scale-105 shadow-lg shadow-[#0F2A44]/20" href="#hero">
                Entrar na Lista
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden" id="hero">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
<div className="absolute top-20 left-10 w-96 h-96 bg-[#22ffbb]/10 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob"></div>
<div className="absolute top-20 right-10 w-96 h-96 bg-[#9fb4c7]/20 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
</div>
<div className="max-w-4xl mx-auto text-center reveal relative z-10">

<div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0F2A44]/5 to-transparent border border-[#0F2A44]/10 rounded-full pl-1 pr-4 py-1 mb-8 hover:border-[#22ffbb]/50 transition-colors cursor-default">
<span className="bg-[#0F2A44] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">Novo</span>
<span className="text-xs font-medium text-[#0F2A44]">🔥 Campanha 100 Fundadores: Acesso PRO+ Vitalício</span>
</div>

<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#0F2A44] mb-6 leading-[1.1] text-balance">
                Sua vida financeira com mais clareza e direção.
            </h1>
<p className="text-lg md:text-xl text-[#28587b] mb-10 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
                A plataforma que ajuda a transformar seus sonhos em metas e seus planos em conquistas reais. Pare de apenas olhar o saldo e comece a construir o futuro.
            </p>

<div className="max-w-md mx-auto relative group mb-20">
<div className="absolute -inset-1 bg-gradient-to-r from-[#22ffbb] to-[#9fb4c7] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<form className="relative bg-white rounded-xl shadow-xl p-2 flex flex-col md:flex-row gap-2" onsubmit="handleSubscribe(event)">
<input className="custom-input flex-1 bg-transparent border-none outline-none px-4 py-3 text-[#0F2A44] placeholder-gray-400 text-sm w-full rounded-lg hover:bg-gray-50 transition-colors" placeholder="seu@email.com" required="" type="email"/>
<button className="bg-[#0F2A44] text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-[#1a3d5e] transition-all whitespace-nowrap flex items-center justify-center gap-2" type="submit">
                        Garantir minha vaga
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
<p className="mt-3 text-xs text-[#9fb4c7]">Junte-se a 84 pessoas na lista de espera. Restam 16 vagas PRO+.</p>
</div>
</div>

<div className="max-w-5xl mx-auto mt-8 reveal delay-200">
<div className="relative rounded-2xl border border-[#0F2A44]/10 bg-white/90 backdrop-blur-xl mockup-shadow overflow-hidden">

<div className="h-10 bg-white border-b border-gray-100 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
</div>

<div className="flex h-[400px] md:h-[500px]">

<div className="w-16 md:w-60 border-r border-gray-100 bg-gray-50/50 flex flex-col p-4 gap-6 hidden md:flex">
<div className="flex items-center gap-2 text-[#0F2A44] mb-4">
<div className="w-6 h-6 bg-[#0F2A44] rounded flex items-center justify-center">
<span className="text-[#22ffbb] text-xs font-bold">F</span>
</div>
<span className="text-sm font-semibold tracking-tight">Finero</span>
</div>
<div className="space-y-1">
<div className="flex items-center gap-3 px-3 py-2 bg-[#0F2A44]/5 text-[#0F2A44] rounded-lg text-xs font-medium cursor-pointer">
<iconify-icon className="text-base" icon="solar:home-2-linear"></iconify-icon> Visão Geral
                            </div>
<div className="flex items-center gap-3 px-3 py-2 text-[#28587b] hover:bg-gray-100 rounded-lg text-xs font-medium cursor-pointer">
<iconify-icon className="text-base" icon="solar:wallet-linear"></iconify-icon> Carteira
                            </div>
<div className="flex items-center gap-3 px-3 py-2 text-[#28587b] hover:bg-gray-100 rounded-lg text-xs font-medium cursor-pointer">
<iconify-icon className="text-base" icon="solar:chart-2-linear"></iconify-icon> Investimentos
                            </div>
<div className="flex items-center gap-3 px-3 py-2 text-[#28587b] hover:bg-gray-100 rounded-lg text-xs font-medium cursor-pointer">
<iconify-icon className="text-base" icon="solar:calendar-mark-linear"></iconify-icon> Recorrências
                            </div>
</div>
</div>

<div className="flex-1 p-6 md:p-8 bg-white overflow-hidden flex flex-col">
<div className="flex justify-between items-center mb-8">
<div>
<h3 className="text-lg font-semibold text-[#0F2A44]">Olá, Fundador</h3>
<p className="text-xs text-[#9fb4c7]">Seu resumo financeiro está pronto.</p>
</div>
<div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="p-4 rounded-xl border border-gray-100 bg-[#FAFAFA]">
<p className="text-[10px] uppercase text-[#9fb4c7] font-semibold tracking-wider mb-2">Patrimônio</p>
<p className="text-xl font-semibold text-[#0F2A44]">R$ 124.500</p>
<div className="text-[10px] text-green-600 flex items-center gap-1 mt-1">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> +12% esse mês
                                </div>
</div>
<div className="p-4 rounded-xl border border-gray-100 bg-[#FAFAFA]">
<p className="text-[10px] uppercase text-[#9fb4c7] font-semibold tracking-wider mb-2">Despesas Fixas</p>
<p className="text-xl font-semibold text-[#0F2A44]">R$ 3.240</p>
<div className="w-full bg-gray-200 h-1 rounded-full mt-3 overflow-hidden">
<div className="bg-[#0F2A44] w-2/3 h-full rounded-full"></div>
</div>
</div>
<div className="p-4 rounded-xl border border-gray-100 bg-[#FAFAFA]">
<p className="text-[10px] uppercase text-[#9fb4c7] font-semibold tracking-wider mb-2">Meta Viagem</p>
<p className="text-xl font-semibold text-[#0F2A44]">85%</p>
<p className="text-[10px] text-[#9fb4c7] mt-1">Faltam R$ 1.200</p>
</div>
</div>

<div className="flex-1 border border-dashed border-gray-200 rounded-xl bg-gray-50/30 flex items-end justify-between px-6 pb-6 pt-10 gap-2 md:gap-4">
<div className="w-full bg-[#22ffbb]/30 h-[40%] rounded-t-sm"></div>
<div className="w-full bg-[#22ffbb]/50 h-[60%] rounded-t-sm"></div>
<div className="w-full bg-[#0F2A44] h-[80%] rounded-t-sm relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0F2A44] text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">R$ 4.2k</div>
</div>
<div className="w-full bg-[#22ffbb]/40 h-[50%] rounded-t-sm"></div>
<div className="w-full bg-[#22ffbb]/20 h-[30%] rounded-t-sm"></div>
<div className="w-full bg-[#22ffbb]/60 h-[70%] rounded-t-sm"></div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-[#22ffbb]/20 blur-3xl -z-10 rounded-full"></div>
</div>
</header>

<section className="bg-[#0F2A44] py-24 px-6 text-white rounded-3xl mx-2 md:mx-6 shadow-2xl relative overflow-hidden reveal">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#22ffbb] rounded-full blur-[150px] opacity-10"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<iconify-icon className="text-[#22ffbb] text-4xl mb-6 opacity-80" icon="solar:graph-down-linear"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                Não é sobre ganhar mais.<br/>
<span className="text-[#9fb4c7]">É sobre controlar melhor.</span>
</h2>
<p className="text-lg text-gray-300 font-light leading-relaxed">
                Você sente que o mês acaba e o dinheiro desapareceu? A sensação de estar parado enquanto todos avançam não vem da falta de renda, mas da falta de clareza. O <span className="text-[#22ffbb] font-medium">Finero</span> ilumina os pontos cegos do seu dinheiro.
            </p>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto" id="how-it-works">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-semibold text-[#0F2A44] tracking-tight mb-4">Um ecossistema completo</h2>
<p className="text-[#28587b]">Ferramentas desenhadas para simplificar a complexidade.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group reveal">
<div className="w-12 h-12 bg-[#0F2A44]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#22ffbb]/20 transition-colors">
<iconify-icon className="text-[#0F2A44] text-2xl" icon="solar:chart-2-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#0F2A44] mb-2">Dashboard de Clareza</h3>
<p className="text-sm text-[#28587b] leading-relaxed">Visão completa e cristalina do seu mês em uma única tela. Sem planilhas confusas.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group reveal">
<div className="w-12 h-12 bg-[#0F2A44]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#22ffbb]/20 transition-colors">
<iconify-icon className="text-[#0F2A44] text-2xl" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#0F2A44] mb-2">Objetivos e Metas</h3>
<p className="text-sm text-[#28587b] leading-relaxed">Defina para onde quer ir. O sistema calcula a rota e o esforço diário necessário.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group reveal">
<div className="w-12 h-12 bg-[#0F2A44]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#22ffbb]/20 transition-colors">
<iconify-icon className="text-[#0F2A44] text-2xl" icon="solar:refresh-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#0F2A44] mb-2">Automação Inteligente</h3>
<p className="text-sm text-[#28587b] leading-relaxed">Importação rápida via OFX para controle total. <span className="bg-[#0F2A44]/10 text-[#0F2A44] px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase ml-1">Em breve</span> Conexão Open Finance.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group reveal">
<div className="w-12 h-12 bg-[#0F2A44]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#22ffbb]/20 transition-colors">
<iconify-icon className="text-[#0F2A44] text-2xl" icon="solar:bill-list-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#0F2A44] mb-2">Recorrências e Parcelamentos</h3>
<p className="text-sm text-[#28587b] leading-relaxed">Única plataforma com módulo dedicado para acompanhamento de suas compras parceladas e assinaturas mensais.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group reveal">
<div className="w-12 h-12 bg-[#0F2A44]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#22ffbb]/20 transition-colors">
<iconify-icon className="text-[#0F2A44] text-2xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#0F2A44] mb-2">Investimentos</h3>
<p className="text-sm text-[#28587b] leading-relaxed">O Finero te ajuda a calcular o aporte ideal para cada tipo de investimento, alinhado aos seus objetivos.</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gray-50 border-t border-gray-200" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-semibold text-[#0F2A44] tracking-tight mb-4">Escolha sua evolução</h2>
<p className="text-[#28587b]">Planos transparentes para cada estágio da sua jornada.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">

<div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm reveal">
<h3 className="text-sm font-medium text-[#28587b] uppercase tracking-wide mb-2">Free</h3>
<div className="text-3xl font-semibold text-[#0F2A44] mb-6">R$ 0</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-gray-600">
<iconify-icon className="text-[#22ffbb]" icon="solar:check-circle-linear"></iconify-icon> Controle Manual
                        </li>
<li className="flex items-center gap-2 text-sm text-gray-600">
<iconify-icon className="text-[#22ffbb]" icon="solar:check-circle-linear"></iconify-icon> 1 Objetivo
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-gray-200 text-sm font-medium text-[#0F2A44] hover:bg-gray-50 transition-colors">Começar</button>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm reveal">
<h3 className="text-sm font-medium text-[#28587b] uppercase tracking-wide mb-2">Pro</h3>
<div className="text-3xl font-semibold text-[#0F2A44] mb-6">R$ 29<span className="text-base font-normal text-gray-400">/mês</span></div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-gray-600">
<iconify-icon className="text-[#22ffbb]" icon="solar:check-circle-linear"></iconify-icon> Importação OFX
                        </li>
<li className="flex items-center gap-2 text-sm text-gray-600">
<iconify-icon className="text-[#22ffbb]" icon="solar:check-circle-linear"></iconify-icon> Objetivos Ilimitados
                        </li>
<li className="flex items-center gap-2 text-sm text-gray-600">
<iconify-icon className="text-[#22ffbb]" icon="solar:check-circle-linear"></iconify-icon> Relatórios
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-gray-200 text-sm font-medium text-[#0F2A44] hover:bg-gray-50 transition-colors">Selecionar</button>
</div>

<div className="bg-[#0F2A44] p-8 rounded-2xl border border-[#0F2A44] shadow-2xl relative transform md:-translate-y-4 reveal">
<div className="absolute top-0 right-0 bg-[#22ffbb] text-[#0F2A44] text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
<h3 className="text-sm font-medium text-[#9fb4c7] uppercase tracking-wide mb-2">Pro +</h3>
<div className="flex items-baseline gap-2 mb-6">
<div className="text-3xl font-semibold text-white">R$ 49</div>
<span className="text-sm text-[#22ffbb] bg-[#22ffbb]/10 px-2 py-0.5 rounded">Grátis p/ Fundadores</span>
</div>
<ul className="space-y-3 mb-8 text-white/90">
<li className="flex items-center gap-2 text-sm">
<iconify-icon className="text-[#22ffbb]" icon="solar:check-circle-linear"></iconify-icon> <strong>Open Finance (Em breve)</strong>
</li>
<li className="flex items-center gap-2 text-sm">
<iconify-icon className="text-[#22ffbb]" icon="solar:check-circle-linear"></iconify-icon> IA Financeira
                        </li>
<li className="flex items-center gap-2 text-sm">
<iconify-icon className="text-[#22ffbb]" icon="solar:check-circle-linear"></iconify-icon> Módulo Investimentos
                        </li>
</ul>
<button className="w-full py-3 rounded-lg bg-[#22ffbb] text-[#0F2A44] text-sm font-semibold hover:bg-[#9fb798] transition-colors shadow-lg shadow-[#22ffbb]/20" onclick="document.getElementById('hero').scrollIntoView()">Garantir Vaga 100</button>
<p className="text-center text-xs text-[#9fb4c7] mt-3">Vitalício para os 100 primeiros</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm reveal">
<h3 className="text-sm font-medium text-[#28587b] uppercase tracking-wide mb-2">Prime</h3>
<div className="text-3xl font-semibold text-[#0F2A44] mb-6">Sob Consulta</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-gray-600">
<iconify-icon className="text-[#22ffbb]" icon="solar:check-circle-linear"></iconify-icon> Tudo do Pro+
                        </li>
<li className="flex items-center gap-2 text-sm text-gray-600">
<iconify-icon className="text-[#22ffbb]" icon="solar:check-circle-linear"></iconify-icon> Consultor Humano
                        </li>
<li className="flex items-center gap-2 text-sm text-gray-600">
<iconify-icon className="text-[#22ffbb]" icon="solar:check-circle-linear"></iconify-icon> Reuniões Mensais
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-gray-200 text-sm font-medium text-[#0F2A44] hover:bg-gray-50 transition-colors">Aplicar</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto">
<h2 className="text-2xl font-semibold text-[#0F2A44] tracking-tight mb-8 text-center reveal">Perguntas Frequentes</h2>
<div className="space-y-4 reveal">

<details className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-[#0F2A44]">
<span>Como funciona a oferta dos 100 Fundadores?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-[#28587b] px-5 pb-5 text-sm leading-relaxed">
                    Os primeiros 100 usuários que se cadastrarem na lista de espera receberão um convite especial no lançamento. Se ativarem a conta no dia, o plano Pro+ será gratuito vitaliciamente.
                </div>
</details>

<details className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-[#0F2A44]">
<span>Meus dados bancários estão seguros?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-[#28587b] px-5 pb-5 text-sm leading-relaxed">
                    Absolutamente. Utilizamos criptografia de ponta a ponta. Não armazenamos suas senhas bancárias; a conexão futura via Open Finance é regulada pelo Banco Central. Pagamentos processados via Stripe.
                </div>
</details>

<details className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-[#0F2A44]">
<span>Quando a plataforma será lançada?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-[#28587b] px-5 pb-5 text-sm leading-relaxed">
                    Estamos na fase final de testes beta. A previsão de liberação para os Fundadores é no próximo mês. Você será notificado por e-mail.
                </div>
</details>
</div>
</section>

<footer className="bg-[#0F2A44] text-white py-12 px-6 border-t border-[#22ffbb]/10">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-3">
<div className="flex flex-col justify-center w-5 h-5 opacity-80">
<div className="bg-white rounded-full h-[2px] w-full mb-[2px]"></div>
<div className="bg-white rounded-full h-[2px] w-3/4 mb-[2px]"></div>
<div className="bg-white rounded-full h-[2px] w-1/2"></div>
</div>
<span className="text-lg font-semibold tracking-tight">FINERO.</span>
</div>
<div className="flex gap-6 text-sm text-[#9fb4c7]">
<a className="hover:text-white transition-colors" href="#">Termos</a>
<a className="hover:text-white transition-colors" href="#">Privacidade</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
<div className="flex items-center gap-2 text-xs text-[#9fb4c7] bg-white/5 px-3 py-1.5 rounded-md border border-white/5">
<iconify-icon className="text-[#22ffbb]" icon="solar:shield-check-linear"></iconify-icon>
<span>Dados Protegidos 256-bit SSL</span>
</div>
</div>
<div className="max-w-6xl mx-auto text-center mt-8 text-xs text-[#9fb4c7]/50">
            © 2024 Finero Tecnologia Financeira. Todos os direitos reservados.
        </div>
</footer>



    </>
  );
}
