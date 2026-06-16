import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


        // Calculator Logic
        document.addEventListener('DOMContentLoaded', () => {
            const incomeInput = document.getElementById('income-range');
            const savingsInput = document.getElementById('savings-range');
            
            const incomeValDisplay = document.getElementById('income-val');
            const savingsValDisplay = document.getElementById('savings-val');
            const tradResultDisplay = document.getElementById('trad-result');
            const variantResultDisplay = document.getElementById('variant-result');
            const diffResultDisplay = document.getElementById('diff-result');

            function formatCurrency(num) {
                return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            }

            function updateCalculator() {
                const income = parseInt(incomeInput.value); // Faturamento Atual
                const savings = parseInt(savingsInput.value); // Capacidade Ociosa %

                // Update input displays
                incomeValDisplay.textContent = formatCurrency(income);
                savingsValDisplay.textContent = savings;

                // Calculations
                // Estimate Private Market Growth (organic 30%)
                const tradAmount = Math.floor(income * 1.3);
                
                // Estimate Gov Potential: Income + (Income * Capacity% * efficiency factor)
                // Gov buys a lot, assume good efficiency if using consultancy
                const growthFactor = (savings / 100) * 1.5; // multiplier
                const govPotential = Math.floor(income * (1.3 + growthFactor));
                
                const difference = govPotential - tradAmount;

                // Update results
                tradResultDisplay.textContent = formatCurrency(tradAmount);
                variantResultDisplay.textContent = formatCurrency(govPotential);
                diffResultDisplay.textContent = formatCurrency(difference);
            }

            incomeInput.addEventListener('input', updateCalculator);
            savingsInput.addEventListener('input', updateCalculator);
            
            // Initial calculation
            updateCalculator();
        });

        // Form Logic
        function submitLeadMagnet(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            btn.textContent = 'Processando...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '✓ Enviado';
                btn.style.backgroundColor = '#065f46';
                btn.style.color = '#fff';
                setTimeout(() => {
                    e.target.reset();
                    btn.innerHTML = 'RECEBER DIAGNÓSTICO <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>';
                    btn.disabled = false;
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                }, 2500);
            }, 1000);
        }

        function submitProjectForm(e) {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            const status = document.getElementById('formStatus');
            
            btn.textContent = 'Enviando...';
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = 'SOLICITAÇÃO RECEBIDA';
                btn.style.backgroundColor = '#059669';
                btn.style.color = '#fff';
                status.classList.remove('hidden');
                status.innerHTML = '<span class="text-emerald-600">Sucesso. Entraremos em contato em até 24 horas.</span>';
                e.target.reset();
            }, 1500);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 w-full h-full -z-10 pointer-events-none" style={{filter: 'invert(1) opacity(0.6) saturate(1.2)'}}>
<div className="absolute w-full h-full left-0 top-0" data-us-project="0WrRbFIPaKoWVkiQWBG0"></div>
</div>


<div aria-hidden="true" className="fixed inset-0 z-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
<div className="sm:px-6 flex h-14 max-w-6xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="bg-emerald-600 w-3 h-3 rounded-sm"></div>
<span className="text-sm font-semibold text-neutral-900 tracking-tight">ProntoPraLicitar</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#process">METODOLOGIA</a>
<a className="hover:text-neutral-900 transition-colors" href="#calculator">POTENCIAL</a>
<a className="hover:text-neutral-900 transition-colors" href="#solutions">SERVIÇOS</a>
<a className="hover:text-neutral-900 transition-colors" href="#audit">DIAGNÓSTICO</a>
</div>
<a className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 to-neutral-300 hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300" href="#contact">
<div className="relative h-full w-full bg-white/50 rounded-[1px] px-3 sm:px-4 py-2 flex items-center gap-2 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="hidden sm:inline text-xs font-medium text-neutral-600 group-hover:text-black transition-colors">Iniciar Consultoria</span>
<span className="sm:hidden text-xs font-medium text-neutral-600 group-hover:text-black transition-colors">Começar</span>
</div>
</a>
</div>
</nav>

<main className="sm:pt-32 sm:pb-24 sm:px-6 z-10 max-w-6xl mr-auto ml-auto pt-24 pr-4 pb-12 pl-4 relative">
<div className="flex flex-col md:pl-12 sm:pl-8 sm:gap-8 border-neutral-200 border-l pb-20 pl-6 relative gap-x-6 gap-y-6 items-start">

<div aria-hidden="true" className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-white border border-neutral-200"></div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-50/80 backdrop-blur-sm border border-neutral-200 rounded-full animate-in animate-in-delay-1 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="inline-flex bg-emerald-500 w-2 h-2 rounded-full relative"></span>
</span>
<span className="text-[10px] uppercase font-medium text-emerald-600 tracking-wide">Novas Oportunidades Abertas</span>
</div>
<h1 className="sm:text-5xl md:text-7xl leading-[1.1] animate-in animate-in-delay-2 text-3xl font-medium text-neutral-900 tracking-tighter">Venda para o Governo.<br/> <span className="text-4xl text-neutral-400 px--">Sem burocracia. Com estratégia. Resultados previsíveis.</span></h1>
<p className="md:text-base leading-relaxed animate-in animate-in-delay-2 text-sm font-light text-neutral-500 max-w-xl">Transformamos licitações públicas em um canal de vendas escalável para sua empresa. Prospecção, habilitação e estratégia jurídica para você focar apenas em entregar.</p>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto animate-in animate-in-delay-3">

<div className="p-[1px] rounded-sm bg-gradient-to-b from-neutral-700 to-neutral-900 w-full sm:w-auto shadow-sm">
<a className="block hover:bg-neutral-800 transition-colors text-xs font-semibold text-white tracking-wide text-center bg-neutral-900 w-full h-full rounded-[1px] pt-3.5 pr-6 pb-3.5 pl-6" href="#contact">
                        FALAR COM ESPECIALISTA
                    </a>
</div>

<div className="p-[1px] rounded-sm bg-gradient-to-b from-neutral-200 to-neutral-300 w-full sm:w-auto shadow-sm hover:from-neutral-300 hover:to-neutral-400 transition-all">
<a className="hover:text-black transition-colors flex items-center justify-center gap-2 text-xs font-medium text-neutral-600 text-center bg-white/90 w-full h-full rounded-[1px] pt-3.5 pr-6 pb-3.5 pl-6 backdrop-blur-sm" href="#audit">
<svg className="" data-icon-set="lucide" data-lucide="file-bar-chart-2" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M8 18v-1m4 1v-6m4 6v-3"></path></g></svg>
                        DIAGNÓSTICO DE VIABILIDADE
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

<div className="relative z-30 mt-8 sm:mt-16 grid grid-cols-2 md:grid-cols-4 border-y border-neutral-200 animate-in animate-in-delay-3 bg-white/60 backdrop-blur-sm">
<div className="p-4 sm:p-8 border-r border-neutral-200 text-center">
<div className="sm:text-2xl md:text-3xl text-xl font-medium text-neutral-900 tracking-tighter mb-1">R$ Milhões</div>
<div className="text-[9px] sm:text-[10px] uppercase text-neutral-500 tracking-widest font-mono">Em contratos fechados</div>
</div>
<div className="p-4 sm:p-8 md:border-r border-neutral-200 text-center">
<div className="sm:text-2xl md:text-3xl text-xl font-medium text-neutral-900 tracking-tighter mb-1">15+ Anos</div>
<div className="text-[9px] sm:text-[10px] uppercase text-neutral-500 tracking-widest font-mono">De experiência pública</div>
</div>
<div className="p-4 sm:p-8 border-r border-t md:border-t-0 border-neutral-200 text-center">
<div className="sm:text-2xl md:text-3xl text-xl font-medium text-neutral-900 tracking-tighter mb-1">Nacional</div>
<div className="text-[9px] sm:text-[10px] uppercase text-neutral-500 tracking-widest font-mono">Cobertura Brasil</div>
</div>
<div className="p-4 sm:p-8 text-center border-t md:border-t-0 border-neutral-200">
<div className="sm:text-2xl md:text-3xl text-xl font-medium text-neutral-900 tracking-tighter mb-1">Escalável</div>
<div className="text-[9px] sm:text-[10px] uppercase text-neutral-500 tracking-widest font-mono">Crescimento constante</div>
</div>
</div>
</main>

<section className="overflow-hidden pause-on-hover bg-white border-neutral-200 border-b pt-12 pb-12 relative">

<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
<div className="flex animate-scroll hover:pause">

<div className="flex gap-16 min-w-max pr-8 pl-8 gap-x-16 gap-y-16 items-center">
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<svg className="lucide lucide-building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
<span className="font-semibold tracking-tight text-lg">GovTech Solutions</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<svg className="lucide lucide-briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
<span className="font-semibold tracking-tight text-lg">Construtora Alpha</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<svg className="lucide lucide-truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<span className="font-semibold tracking-tight text-lg">Logística BR</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<svg className="lucide lucide-stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path><circle cx="20" cy="10" r="2"></circle></svg>
<span className="font-semibold tracking-tight text-lg">MedSupply</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<svg className="lucide lucide-server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<span className="font-semibold tracking-tight text-lg">TechServices</span>
</div>
</div>

<div className="flex items-center gap-16 px-8 min-w-max">
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<svg className="lucide lucide-building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
<span className="font-semibold tracking-tight text-lg">GovTech Solutions</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<svg className="lucide lucide-briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
<span className="font-semibold tracking-tight text-lg">Construtora Alpha</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<svg className="lucide lucide-truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<span className="font-semibold tracking-tight text-lg">Logística BR</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<svg className="lucide lucide-stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path><circle cx="20" cy="10" r="2"></circle></svg>
<span className="font-semibold tracking-tight text-lg">MedSupply</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<svg className="lucide lucide-server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<span className="font-semibold tracking-tight text-lg">TechServices</span>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 border-b border-neutral-200 bg-white relative z-10">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4 flex items-center gap-2">
<span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                O Cenário Atual
            </h2>
<h3 className="sm:text-3xl md:text-4xl sm:mb-12 text-2xl font-medium text-neutral-900 tracking-tighter mb-8" style={{}}>Por que vender para o governo parece difícil?</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 hover:from-neutral-300 hover:via-neutral-400 hover:to-neutral-500 transition-all duration-500 h-full">
<div className="p-6 sm:p-8 bg-neutral-50 rounded-[1px] h-full relative z-10">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-neutral-200 mb-4 sm:mb-6 text-orange-500 shadow-sm">
<svg className="lucide lucide-file-warning" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
<h4 className="text-base font-medium text-neutral-900 tracking-tight mb-2">Burocracia &amp; Complexidade</h4>
<p className="leading-relaxed text-xs font-light text-neutral-500">Editais confusos e excesso de documentos afastam empresas qualificadas. Um erro simples pode desclassificar propostas milionárias.</p>
</div>
</div>

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 hover:from-neutral-300 hover:via-neutral-400 hover:to-neutral-500 transition-all duration-500 h-full">
<div className="p-6 sm:p-8 bg-neutral-50 rounded-[1px] h-full relative z-10">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-neutral-200 mb-4 sm:mb-6 text-red-500 shadow-sm">
<svg className="lucide lucide-trending-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg>
</div>
<h4 className="text-base font-medium text-neutral-900 tracking-tight mb-2" style={{}}>Falta de Estratégia</h4>
<p className="leading-relaxed text-xs font-light text-neutral-500">Entrar em disputas apenas pelo menor preço destrói a margem de lucro. O segredo está em impugnações e técnica, não apenas no desconto.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 border-b border-neutral-200 bg-neutral-50 relative z-10" id="calculator">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<div className="text-center mb-10">
<h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
<span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                    Calculadora de Potencial
                </h2>
<h3 className="text-2xl sm:text-3xl font-medium text-neutral-900 tracking-tighter">Quanto o governo pode comprar de você?</h3>
</div>
<div className="relative p-[1px] rounded-sm bg-gradient-to-b from-neutral-200 to-neutral-300 shadow-sm">
<div className="bg-white rounded-[1px] flex flex-col md:flex-row">

<div className="w-full md:w-1/2 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-neutral-100">
<div className="space-y-8">

<div className="">
<div className="flex justify-between items-baseline mb-3">
<label className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">Faturamento Anual Atual</label>
<div className="font-medium text-neutral-900 text-sm">R$ <span id="income-val">1.000.000</span></div>
</div>
<input className="w-full" id="income-range" max="10000000" min="100000" step="50000" type="range" value="1000000"/>
<div className="flex justify-between text-[10px] text-neutral-400 mt-2 font-mono">
<span>R$100k</span>
<span>R$10M+</span>
</div>
</div>

<div className="">
<div className="flex justify-between items-baseline mb-3">
<label className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">Capacidade Ociosa (%)</label>
<div className="font-medium text-neutral-900 text-sm"><span id="savings-val">30</span>%</div>
</div>
<input className="w-full" id="savings-range" max="100" min="0" step="5" type="range" value="30"/>
<div className="flex justify-between text-[10px] text-neutral-400 mt-2 font-mono">
<span>0%</span>
<span>100%</span>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 p-6 sm:p-8 bg-neutral-50/50 flex flex-col justify-center">
<div className="mb-6 pb-6 border-b border-neutral-200">
<span className="block text-[10px] font-mono uppercase text-neutral-500 mb-1">Mercado Privado (Estimado)</span>
<div className="text-2xl font-medium text-neutral-400 tracking-tight">R$ <span id="trad-result">1.300.000</span></div>
</div>
<div>
<span className="block text-[10px] font-mono uppercase text-emerald-600 mb-1 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                Com Vendas Públicas
                            </span>
<div className="text-4xl font-semibold text-neutral-900 tracking-tighter mb-2">R$ <span id="variant-result">1.750.000</span></div>
<p className="text-xs text-neutral-500 font-light leading-relaxed">
                                Você pode adicionar <span className="text-emerald-600 font-medium">+ R$ <span id="diff-result">450.000</span></span> ao seu faturamento anual diversificando para o setor público.
                            </p>
</div>
</div>
</div>
</div>
<p className="text-[10px] text-neutral-400 text-center mt-4">Estimativa baseada em média de conversão do setor. Valores reais podem variar.</p>
</div>
</section>

<section className="sm:py-24 bg-white z-10 pt-16 pb-16 relative" id="process">
<div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
<div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6 border-b border-neutral-200 pb-6 sm:pb-8">
<div className="">
<h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4 flex items-center gap-2">
<span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                        Nossa Metodologia
                    </h2>
<h3 className="text-2xl font-medium text-neutral-900 tracking-tighter sm:text-2xl">Do edital ao contrato assinado.</h3>
</div>
<p className="text-xs font-light text-neutral-500 max-w-md sm:text-xs">Não somos apenas um software de busca. Somos uma consultoria estratégica que opera o processo de ponta a ponta para garantir vitórias.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
<div className="bg-white p-6 sm:p-10 hover:bg-neutral-50 transition-colors duration-300">
<div className="sm:mb-6 inline-block text-xs text-neutral-500 font-mono bg-neutral-50 border-neutral-200 border rounded-sm mb-4 pt-1 pr-2 pb-1 pl-2">01 / PREPARAÇÃO</div>
<h4 className="sm:text-lg text-base font-medium text-neutral-900 tracking-tight mb-3">Organização &amp; Habilitação</h4>
<p className="leading-relaxed text-xs font-light text-neutral-500">Regularizamos toda a documentação da sua empresa (SICAF, Certidões) para garantir que você esteja apto a vender antes mesmo de encontrar a oportunidade.</p>
</div>
<div className="bg-white p-6 sm:p-10 hover:bg-neutral-50 transition-colors duration-300">
<div className="sm:mb-6 inline-block text-xs text-neutral-500 font-mono bg-neutral-50 border-neutral-200 border rounded-sm mb-4 pt-1 pr-2 pb-1 pl-2">02 / ESTRATÉGIA</div>
<h4 className="sm:text-lg text-base font-medium text-neutral-900 tracking-tight mb-3">Busca &amp; Disputa</h4>
<p className="leading-relaxed text-xs font-light text-neutral-500">Mapeamos as melhores oportunidades. Na hora do pregão, atuamos com estratégia de lances, recursos e impugnações para vencer concorrentes despreparados.</p>
</div>
<div className="bg-white p-6 sm:p-10 hover:bg-neutral-50 transition-colors duration-300">
<div className="sm:mb-6 inline-block text-xs text-neutral-500 font-mono bg-neutral-50 border-neutral-200 border rounded-sm mb-4 pt-1 pr-2 pb-1 pl-2">03 / GESTÃO</div>
<h4 className="sm:text-lg text-base font-medium text-neutral-900 tracking-tight mb-3">Assinatura &amp; Escala</h4>
<p className="leading-relaxed text-xs font-light text-neutral-500">Acompanhamos a homologação e assinatura do contrato. Transformamos vitórias pontuais em um processo de vendas recorrente e previsível.</p>
</div>
</div>
</div>
</section>

<section className="sm:py-24 z-10 bg-white border-neutral-200 border-b pt-16 pb-16 relative">
<div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">
<div className="flex flex-col lg:flex-row justify-between items-start mb-12 sm:mb-16 gap-6 sm:gap-10 border-b border-neutral-200 pb-6 sm:pb-8">
<h2 className="sm:text-3xl md:text-4xl leading-[1.1] text-2xl font-medium text-neutral-900 tracking-tight max-w-2xl">Ajudamos empresas a venderem para o <span className="text-neutral-400">maior comprador do país</span>.</h2>
<a className="flex items-center gap-2 text-sm font-medium text-neutral-900 border-b border-neutral-200 pb-1 hover:border-emerald-500 hover:text-emerald-600 transition-colors" href="#contact">
                    Iniciar Projeto
                    <svg className="" data-icon-set="lucide" data-lucide="arrow-up-right" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 transition-all duration-300 h-full">
<div className="sm:p-8 flex flex-col min-h-[320px] z-10 bg-neutral-50 h-full rounded-[1px] pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div className="">
<h3 className="sm:text-lg leading-tight text-base font-medium text-neutral-900 tracking-tight mb-4">"Achávamos que era carta marcada."</h3>
<p className="leading-relaxed sm:text-sm text-xs font-light text-neutral-500">"Tentamos vender sozinhos por 2 anos sem sucesso. Com a ProntoPraLicitar, entendemos que faltava técnica jurídica. Em 3 meses, fechamos o primeiro contrato."</p>
</div>
<div className="mt-6 border-t border-neutral-200 pt-4">
<div className="flex items-center gap-3">
<div className="flex text-sm font-medium text-neutral-900 bg-white w-10 h-10 border-neutral-200 border rounded-full items-center justify-center">RS</div>
<div className="">
<div className="leading-none text-sm font-medium text-neutral-900 mb-1">Ricardo Silva</div>
<div className="text-[10px] uppercase text-neutral-500 tracking-wider font-mono" style={{}}>CEO, TechSolutions</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 transition-all duration-300 h-full">
<div className="bg-neutral-50 p-6 sm:p-8 rounded-[1px] flex flex-col items-center justify-between min-h-[320px] h-full relative z-10">
<div className="text-center">
<span className="uppercase block text-xs text-neutral-500 tracking-widest font-mono mb-2" style={{}}>TAXA DE SUCESSO</span>
<span className="text-sm font-medium text-neutral-900 tracking-tight">Recursos Deferidos</span>
</div>
<div className="relative w-32 h-32 flex items-center justify-center">
<div className="border-neutral-200 border rounded-full absolute top-0 right-0 bottom-0 left-0"></div>
<div className="text-3xl font-medium text-neutral-900 tracking-tighter">78%</div>
</div>
<button className="w-full bg-white border border-neutral-200 text-neutral-900 text-xs font-semibold tracking-wide py-3 rounded-sm hover:bg-neutral-100 transition-colors">
                            VER CASES
                        </button>
</div>
</div>

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-800 to-neutral-700 sm:col-span-2 lg:col-span-1 h-full">
<div className="flex flex-col bg-neutral-900 min-h-[320px] h-full rounded-[1px] p-6 sm:p-8 justify-between relative z-10">
<div className="flex justify-between items-start text-white">
<span className="sm:text-lg text-base font-medium tracking-tight">Fale Conosco</span>
<svg className="text-neutral-500" data-icon-set="lucide" data-lucide="arrow-up-right" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="leading-relaxed text-base font-light text-neutral-300">Seja para começar do zero ou escalar suas vendas atuais, estamos prontos para atuar como seu braço direito.</p>
<div className="text-sm text-neutral-400 space-y-3">
<a className="hover:text-white transition-colors flex gap-x-3 items-center text-sm text-neutral-300" href="mailto:contato@prontopralicitar.com.br">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-50"></span>
                                contato@prontopralicitar.br
                            </a>
<div className="flex gap-2 text-sm text-neutral-300 gap-x-3 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-50"></span>
                                +55 (11) 9999-9999
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200 relative z-10" id="audit">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<div className="relative p-[1px] rounded-sm bg-gradient-to-b from-neutral-200 to-neutral-300 shadow-sm">
<div className="bg-white p-6 sm:p-8 md:p-12 rounded-[1px]">
<div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-2 py-1 bg-emerald-50 border border-emerald-100 rounded-sm mb-4 sm:mb-6">
<svg className="text-emerald-600" data-icon-set="lucide" data-lucide="unlock" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></g></svg>
<span className="text-[10px] font-mono text-emerald-600 uppercase tracking-wider">Acesso Gratuito</span>
</div>
<h2 className="text-2xl sm:text-3xl font-medium text-neutral-900 tracking-tight mb-4">Receba um Diagnóstico Preliminar</h2>
<p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                                Descubra se sua empresa tem os requisitos básicos (CNAE, Documentação) para vender para o governo antes de investir.
                            </p>
<ul className="space-y-2 mb-6 sm:mb-8">
<li className="flex items-center gap-3 text-xs text-neutral-600">
<svg className="text-emerald-500" data-icon-set="lucide" data-lucide="check" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Análise de CNAEs compatíveis
                                </li>
<li className="flex items-center gap-3 text-xs text-neutral-600">
<svg className="text-emerald-500" data-icon-set="lucide" data-lucide="check" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Checklist documental básico
                                </li>
<li className="flex items-center gap-3 text-xs text-neutral-600">
<svg className="text-emerald-500" data-icon-set="lucide" data-lucide="check" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Mapa de oportunidades no seu setor
                                </li>
</ul>
</div>
<div className="w-full md:w-80">
<form className="space-y-4" onsubmit="submitLeadMagnet(event)">
<div className="">
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5" htmlFor="lm-email">Email Corporativo</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-sm placeholder:text-neutral-400" id="lm-email" placeholder="nome@empresa.com.br" required="" type="email"/>
</div>
<div className="">
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5" htmlFor="lm-url">Site da Empresa</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-sm placeholder:text-neutral-400" id="lm-url" placeholder="https://suaempresa.com.br" required="" type="url"/>
</div>
<div className="p-[1px] rounded-sm bg-gradient-to-b from-neutral-700 to-neutral-900 shadow-sm">
<button className="w-full bg-neutral-900 text-white px-4 py-3 text-xs font-semibold tracking-wide hover:bg-neutral-800 transition-colors rounded-[1px] flex items-center justify-center gap-2" type="submit">
                                        RECEBER DIAGNÓSTICO
                                        <svg className="" data-icon-set="lucide" data-lucide="arrow-right" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<p className="text-[10px] text-neutral-400 text-center">Sem spam. 100% Valor.</p>
</form>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-white relative z-10" id="solutions">
<div className="max-w-5xl mx-auto px-4 sm:px-6">
<div className="text-center mb-12 sm:mb-16">
<h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4">Modelos de Atuação</h2>
<h3 className="text-2xl sm:text-3xl font-medium text-neutral-900 tracking-tighter">Escolha como quer crescer.</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 hover:from-neutral-300 hover:via-neutral-400 hover:to-neutral-500 transition-all duration-300 h-full">
<div className="flex flex-col sm:p-8 bg-neutral-50 h-full z-10 rounded-[1px] pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex items-start justify-between mb-4 sm:mb-6">
<div className="w-10 h-10 bg-white border border-neutral-200 rounded-sm flex items-center justify-center text-emerald-600 shadow-sm">
<svg className="" data-icon-set="lucide" data-lucide="gavel" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"></path><path d="m16 16 6-6"></path><path d="m8 8 6-6"></path><path d="m9 7 8 8"></path><path d="m21 11-8-8"></path></g></svg>
</div>
<span className="text-[10px] font-mono border border-neutral-200 px-2 py-1 rounded-sm text-neutral-500 bg-white">CONSULTORIA</span>
</div>
<h3 className="text-base sm:text-lg font-medium text-neutral-900 tracking-tight mb-2">Assessoria Pontual</h3>
<p className="text-xs text-neutral-500 font-light mb-6 leading-relaxed">
                            Ideal para empresas que já participam mas precisam de apoio jurídico em casos específicos (recursos, impugnações ou mandados de segurança).
                        </p>
<ul className="space-y-2 mt-auto border-t border-neutral-200 pt-4 sm:pt-6">
<li className="text-[11px] text-neutral-500 flex items-center gap-2">
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span> Elaboração de Recursos
                            </li>
<li className="text-[11px] text-neutral-500 flex items-center gap-2">
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span> Análise de Risco de Edital
                            </li>
</ul>
</div>
</div>

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 hover:from-neutral-300 hover:via-neutral-400 hover:to-neutral-500 transition-all duration-300 h-full">
<div className="flex flex-col p-6 sm:p-8 bg-neutral-50 rounded-[1px] h-full relative z-10">
<div className="flex items-start justify-between mb-4 sm:mb-6">
<div className="w-10 h-10 bg-white border border-neutral-200 rounded-sm flex items-center justify-center text-purple-600 shadow-sm">
<svg className="" data-icon-set="lucide" data-lucide="layers" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<span className="text-[10px] font-mono border border-neutral-200 px-2 py-1 rounded-sm text-neutral-500 bg-white">FULL SERVICE</span>
</div>
<h3 className="text-base sm:text-lg font-medium text-neutral-900 tracking-tight mb-2">Terceirização Completa</h3>
<p className="text-xs text-neutral-500 font-light mb-6 leading-relaxed">
                            Nós nos tornamos seu departamento de licitações. Desde a busca de oportunidades diária até a gestão do contrato. Foco total em resultado.
                        </p>
<ul className="space-y-2 mt-auto border-t border-neutral-200 pt-4 sm:pt-6">
<li className="text-[11px] text-neutral-500 flex items-center gap-2">
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span> Prospecção e Participação
                            </li>
<li className="text-[11px] text-neutral-500 flex items-center gap-2">
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span> Gestão de Documentos
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 border-t border-neutral-200 bg-white relative z-10" id="contact">
<div className="max-w-3xl mx-auto px-4 sm:px-6">
<div className="text-center mb-8 sm:mb-12">
<h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4">Agenda Limitada</h2>
<h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-neutral-900 tracking-tighter mb-4">
                    Pronto para escalar suas vendas?
                </h3>
<p className="text-neutral-500 text-xs sm:text-sm font-light">
                    Analisamos cada perfil para garantir viabilidade técnica e financeira.
                </p>
</div>
<div className="relative p-[1px] rounded-sm bg-gradient-to-b from-neutral-200 to-neutral-300 shadow-sm">
<form className="space-y-4 sm:space-y-6 bg-neutral-50 p-6 sm:p-8 rounded-[1px]" id="projectForm" onsubmit="submitProjectForm(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
<div className="">
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Nome Completo</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-sm" name="name" placeholder="João Silva" required="" type="text"/>
</div>
<div className="">
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Email Corporativo</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-sm" name="email" placeholder="joao@empresa.com.br" required="" type="email"/>
</div>
</div>
<div className="">
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Site da Empresa</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-sm" name="website" placeholder="https://" type="url"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
<div className="">
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Faturamento Atual</label>
<select className="w-full input-base px-3 py-3 rounded-sm text-sm text-neutral-600" name="budget" required="">
<option disabled="" selected="" value="">Selecione</option>
<option value="small">Até R$ 1 Milhão/ano</option>
<option value="medium">R$ 1M - R$ 5M/ano</option>
<option value="large">Acima de R$ 5M/ano</option>
</select>
</div>
<div className="">
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Interesse Principal</label>
<select className="w-full input-base px-3 py-3 rounded-sm text-sm text-neutral-600" name="timeline" required="">
<option disabled="" selected="" value="">Selecione</option>
<option value="full">Terceirização Completa</option>
<option value="legal">Assessoria Jurídica</option>
<option value="consult">Consultoria Estratégica</option>
</select>
</div>
</div>
<div className="">
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Desafio Atual</label>
<textarea className="w-full input-base px-3 py-3 rounded-sm text-sm" name="message" placeholder="Qual sua maior dificuldade em vender para o governo hoje?" required="" rows="4"></textarea>
</div>
<div className="p-[1px] rounded-sm bg-gradient-to-b from-neutral-700 to-neutral-900 shadow-sm mt-4">
<button className="w-full bg-neutral-900 text-white py-4 text-xs font-semibold tracking-wide hover:bg-neutral-800 transition-colors rounded-[1px] flex items-center justify-center gap-2" id="submitBtn" type="submit">
                            ENVIAR SOLICITAÇÃO
                            <svg className="" data-icon-set="lucide" data-lucide="arrow-right" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="hidden text-center text-xs mt-4" id="formStatus"></div>
</form>
</div>
</div>
</section>

<footer className="bg-white py-8 sm:py-12 border-t border-neutral-200">
<div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-neutral-900"></div>
<span className="">ProntoPraLicitar © 2025</span>
</div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Operações Ativas
            </div>
</div>
</footer>



    </>
  );
}
