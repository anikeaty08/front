import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simulation Logic
        const slider = document.getElementById('depositSlider');
        const amountDisplay = document.getElementById('amountDisplay');
        const termSelect = document.getElementById('termSelect');
        
        const cardAmount = document.getElementById('cardAmount');
        const cardInterest = document.getElementById('cardInterest');
        const cardTotal = document.getElementById('cardTotal');

        function updateSimulation() {
            const amount = parseInt(slider.value);
            const rate = parseFloat(termSelect.value);
            
            // Assuming simple interest for this demo logic
            const interest = amount * rate; 
            const total = amount + interest;

            const formatter = new Intl.NumberFormat('pt-PT', {
                style: 'currency',
                currency: 'EUR',
                maximumFractionDigits: 0
            });

            amountDisplay.textContent = formatter.format(amount);
            cardAmount.textContent = formatter.format(amount);
            cardInterest.textContent = '+ ' + formatter.format(interest);
            cardTotal.textContent = formatter.format(total);
        }

        slider.addEventListener('input', updateSimulation);
        termSelect.addEventListener('change', updateSimulation);
        
        // Initial Call
        updateSimulation();


        // FAQ Accordion Logic
        function toggleAccordion(id, btn) {
            const content = document.getElementById(id);
            const icon = btn.querySelector('iconify-icon');
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
                btn.classList.add('text-[#2F3E56]');
            } else {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
                btn.classList.remove('text-[#2F3E56]');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-[#2F3E56] rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:wallet-money-linear" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-[#2F3E56]">NOVO<span className="font-light">BANCO</span></span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-[#2F3E56] transition-colors" href="#">Depósitos</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#2F3E56] transition-colors" href="#">Cartões</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#2F3E56] transition-colors" href="#">Seguros</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#2F3E56] transition-colors" href="#">Ajuda</a>
</div>

<button className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full border border-gray-200 text-sm font-medium text-[#2F3E56] hover:border-[#2F3E56] hover:bg-gray-50 transition-all-300">
<iconify-icon icon="solar:user-circle-linear" width="18"></iconify-icon>
                Login
            </button>

<button className="md:hidden text-[#2F3E56]">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="pt-20 pb-16 px-6 max-w-[1440px] mx-auto text-center">
<h1 className="text-5xl md:text-6xl font-semibold text-[#2F3E56] tracking-tight mb-6 leading-[1.1]">
            Comece a poupar <br className="hidden md:block"/> a sério.
        </h1>
<p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto font-light">
            Soluções de aforro com taxas competitivas e garantia total de capital. O seu futuro financeiro começa hoje.
        </p>

<div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-white rounded-full border border-gray-200 shadow-sm mx-auto overflow-x-auto max-w-full">
<button className="px-5 py-2 rounded-full text-sm font-medium bg-[#2F3E56] text-white shadow-sm transition-all-300">Popular</button>
<button className="px-5 py-2 rounded-full text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all-300">Novo Cliente</button>
<button className="px-5 py-2 rounded-full text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all-300">3 Meses</button>
<button className="px-5 py-2 rounded-full text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all-300">6 Meses</button>
<button className="px-5 py-2 rounded-full text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all-300">12 Meses</button>
<button className="px-5 py-2 rounded-full text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all-300">Moeda</button>
</div>
</section>

<section className="py-12 px-6 max-w-[1440px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all-300 group flex flex-col">
<div className="w-10 h-10 bg-blue-50 text-[#4F6EF7] rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-2">Depósito Step Up</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-[#2F3E56] tracking-tight">3.50%</span>
<span className="text-sm text-gray-500 font-medium">TANB</span>
</div>
<div className="space-y-3 mb-8 flex-grow">
<div className="flex justify-between text-sm border-b border-gray-50 pb-2">
<span className="text-gray-500">Prazo</span>
<span className="font-medium text-gray-900">12 Meses</span>
</div>
<div className="flex justify-between text-sm border-b border-gray-50 pb-2">
<span className="text-gray-500">Mínimo</span>
<span className="font-medium text-gray-900">€500</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-gray-500">Juros</span>
<span className="font-medium text-gray-900">Trimestral</span>
</div>
</div>
<div className="flex flex-col gap-3">
<button className="w-full py-3 bg-[#2F3E56] text-white rounded-xl font-medium text-sm hover:bg-[#1f2a3d] transition-colors">Subscrever</button>
<button className="w-full py-2 text-[#4F6EF7] text-sm font-medium hover:text-[#3d5bd6] transition-colors">Ver detalhes</button>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all-300 group flex flex-col">
<div className="w-10 h-10 bg-green-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-2">Depósito Verde</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-[#2F3E56] tracking-tight">3.00%</span>
<span className="text-sm text-gray-500 font-medium">TANB</span>
</div>
<div className="space-y-3 mb-8 flex-grow">
<div className="flex justify-between text-sm border-b border-gray-50 pb-2">
<span className="text-gray-500">Prazo</span>
<span className="font-medium text-gray-900">24 Meses</span>
</div>
<div className="flex justify-between text-sm border-b border-gray-50 pb-2">
<span className="text-gray-500">Mínimo</span>
<span className="font-medium text-gray-900">€1,000</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-gray-500">Juros</span>
<span className="font-medium text-gray-900">Anual</span>
</div>
</div>
<div className="flex flex-col gap-3">
<button className="w-full py-3 bg-[#2F3E56] text-white rounded-xl font-medium text-sm hover:bg-[#1f2a3d] transition-colors">Subscrever</button>
<button className="w-full py-2 text-[#4F6EF7] text-sm font-medium hover:text-[#3d5bd6] transition-colors">Ver detalhes</button>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all-300 group flex flex-col">
<div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:star-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-2">Novo Aforrador</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-[#2F3E56] tracking-tight">4.00%</span>
<span className="text-sm text-gray-500 font-medium">TANB</span>
</div>
<div className="space-y-3 mb-8 flex-grow">
<div className="flex justify-between text-sm border-b border-gray-50 pb-2">
<span className="text-gray-500">Prazo</span>
<span className="font-medium text-gray-900">3 Meses</span>
</div>
<div className="flex justify-between text-sm border-b border-gray-50 pb-2">
<span className="text-gray-500">Mínimo</span>
<span className="font-medium text-gray-900">€2,500</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-gray-500">Juros</span>
<span className="font-medium text-gray-900">Fim do prazo</span>
</div>
</div>
<div className="flex flex-col gap-3">
<button className="w-full py-3 bg-[#2F3E56] text-white rounded-xl font-medium text-sm hover:bg-[#1f2a3d] transition-colors">Subscrever</button>
<button className="w-full py-2 text-[#4F6EF7] text-sm font-medium hover:text-[#3d5bd6] transition-colors">Ver detalhes</button>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-[1440px] mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-[#2F3E56] tracking-tight mb-2">Compare depósitos de forma fácil</h2>
<p className="text-gray-500">Encontre a solução que melhor se adapta aos seus objetivos.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">

<div className="bg-white p-6 rounded-2xl border border-gray-100 opacity-80 hover:opacity-100 transition-all-300">
<h3 className="text-lg font-semibold text-gray-700">Prazo Curto</h3>
<div className="my-4">
<span className="text-3xl font-semibold text-gray-900">2.5%</span>
</div>
<ul className="space-y-3 text-sm text-gray-600 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> 3 a 6 meses</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Min €250</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Liquidez imediata</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-[0_20px_40px_rgba(0,0,0,0.08)] relative transform scale-105 z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#4F6EF7] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">Recomendado</div>
<h3 className="text-xl font-semibold text-[#2F3E56]">Prazo Médio</h3>
<div className="my-4">
<span className="text-4xl font-semibold text-[#2F3E56]">3.5%</span>
</div>
<ul className="space-y-4 text-sm text-gray-600 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-[#4F6EF7]" icon="solar:check-circle-bold"></iconify-icon> 12 meses</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#4F6EF7]" icon="solar:check-circle-bold"></iconify-icon> Min €500</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#4F6EF7]" icon="solar:check-circle-bold"></iconify-icon> Juros trimestrais</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#4F6EF7]" icon="solar:check-circle-bold"></iconify-icon> Acesso a ofertas exclusivas</li>
</ul>
<button className="w-full py-3 bg-[#4F6EF7] text-white rounded-xl font-medium text-sm hover:bg-[#3d5bd6] transition-colors shadow-lg shadow-blue-500/20">Escolher este</button>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 opacity-80 hover:opacity-100 transition-all-300">
<h3 className="text-lg font-semibold text-gray-700">Longo Prazo</h3>
<div className="my-4">
<span className="text-3xl font-semibold text-gray-900">3.0%</span>
</div>
<ul className="space-y-3 text-sm text-gray-600 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> 24 a 36 meses</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Min €1000</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Taxa fixa</li>
</ul>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white border-y border-gray-100">
<div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl font-semibold text-[#2F3E56] tracking-tight mb-2">Simule o seu retorno</h2>
<p className="text-gray-500 mb-10">Veja quanto as suas poupanças podem crescer.</p>
<div className="space-y-8">
<div>
<div className="flex justify-between mb-4">
<label className="text-sm font-medium text-gray-700">Montante de depósito</label>
<span className="text-lg font-semibold text-[#2F3E56]" id="amountDisplay">€10,000</span>
</div>
<input className="w-full" id="depositSlider" max="50000" min="500" step="500" type="range" value="10000"/>
<div className="flex justify-between mt-2 text-xs text-gray-400">
<span>€500</span>
<span>€50,000</span>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Prazo</label>
<div className="relative">
<select className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-[#4F6EF7] focus:border-[#4F6EF7] block p-3.5 pr-8" id="termSelect">
<option value="0.025">3 Meses (2.5%)</option>
<option selected="" value="0.035">12 Meses (3.5%)</option>
<option value="0.030">24 Meses (3.0%)</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#F5F7FA] p-8 rounded-3xl border border-gray-200">
<div className="grid grid-cols-2 gap-6 mb-8">
<div>
<p className="text-sm text-gray-500 mb-1">Montante</p>
<p className="text-lg font-medium text-gray-900" id="cardAmount">€10,000</p>
</div>
<div>
<p className="text-sm text-gray-500 mb-1">Juros Brutos Est.</p>
<p className="text-lg font-medium text-green-600" id="cardInterest">+ €350</p>
</div>
</div>
<div className="pt-6 border-t border-gray-200 mb-8">
<p className="text-sm text-gray-500 mb-1">Valor Final Estimado</p>
<p className="text-4xl font-semibold text-[#2F3E56] tracking-tight" id="cardTotal">€10,350</p>
</div>
<button className="w-full py-3.5 bg-[#2F3E56] text-white rounded-xl font-medium shadow-md hover:bg-[#1f2a3d] transition-all-300 flex justify-center items-center gap-2">
                    Investir Agora <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-[1440px] mx-auto">
<h2 className="text-3xl font-semibold text-[#2F3E56] tracking-tight mb-12">Porque escolher um depósito?</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="flex flex-col items-start">
<div className="p-3 bg-blue-50 text-[#4F6EF7] rounded-xl mb-4">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Capital Garantido</h3>
<p className="text-sm text-gray-500 leading-relaxed">O seu dinheiro está protegido pelo Fundo de Garantia de Depósitos até 100.000€.</p>
</div>
<div className="flex flex-col items-start">
<div className="p-3 bg-purple-50 text-purple-600 rounded-xl mb-4">
<iconify-icon icon="solar:chart-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Taxas Competitivas</h3>
<p className="text-sm text-gray-500 leading-relaxed">Oferecemos algumas das melhores taxas do mercado europeu.</p>
</div>
<div className="flex flex-col items-start">
<div className="p-3 bg-orange-50 text-orange-600 rounded-xl mb-4">
<iconify-icon icon="solar:smartphone-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">100% Digital</h3>
<p className="text-sm text-gray-500 leading-relaxed">Abra a sua conta e subscreva depósitos em minutos através da app.</p>
</div>
<div className="flex flex-col items-start">
<div className="p-3 bg-teal-50 text-teal-600 rounded-xl mb-4">
<iconify-icon icon="solar:hand-money-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Sem Custos</h3>
<p className="text-sm text-gray-500 leading-relaxed">Sem comissões de manutenção ou custos escondidos.</p>
</div>
</div>
</section>

<section className="py-12 px-6 bg-white border-y border-gray-100 overflow-hidden">
<div className="max-w-[1440px] mx-auto">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-2xl font-semibold text-[#2F3E56]">Leilões de Depósitos</h2>
<p className="text-sm text-gray-500 mt-1">Oportunidades limitadas com taxas exclusivas.</p>
</div>
<div className="flex gap-2">
<button className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 text-gray-600"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon></button>
<button className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 text-gray-600"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="flex overflow-x-auto gap-6 pb-6 hide-scroll snap-x snap-mandatory">

<div className="min-w-[280px] md:min-w-[320px] bg-[#F5F7FA] p-6 rounded-2xl border border-gray-200 snap-start flex-shrink-0 relative">
<span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-100 px-2 py-1 rounded-md">Termina em 2h</span>
<div className="mb-4">
<span className="text-3xl font-semibold text-[#2F3E56]">4.25%</span>
<span className="text-xs text-gray-500">TANB</span>
</div>
<div className="space-y-2 mb-6">
<div className="flex justify-between text-sm"><span className="text-gray-500">Duração</span> <span className="font-medium">6 Meses</span></div>
<div className="flex justify-between text-sm"><span className="text-gray-500">Mínimo</span> <span className="font-medium">€5,000</span></div>
</div>
<button className="w-full py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-[#2F3E56] hover:border-[#2F3E56] transition-colors">Licitar</button>
</div>

<div className="min-w-[280px] md:min-w-[320px] bg-[#F5F7FA] p-6 rounded-2xl border border-gray-200 snap-start flex-shrink-0 relative">
<span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-green-600 bg-green-100 px-2 py-1 rounded-md">Novo</span>
<div className="mb-4">
<span className="text-3xl font-semibold text-[#2F3E56]">3.80%</span>
<span className="text-xs text-gray-500">TANB</span>
</div>
<div className="space-y-2 mb-6">
<div className="flex justify-between text-sm"><span className="text-gray-500">Duração</span> <span className="font-medium">9 Meses</span></div>
<div className="flex justify-between text-sm"><span className="text-gray-500">Mínimo</span> <span className="font-medium">€1,000</span></div>
</div>
<button className="w-full py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-[#2F3E56] hover:border-[#2F3E56] transition-colors">Licitar</button>
</div>

<div className="min-w-[280px] md:min-w-[320px] bg-[#F5F7FA] p-6 rounded-2xl border border-gray-200 snap-start flex-shrink-0 relative">
<div className="mb-4">
<span className="text-3xl font-semibold text-[#2F3E56]">3.65%</span>
<span className="text-xs text-gray-500">TANB</span>
</div>
<div className="space-y-2 mb-6">
<div className="flex justify-between text-sm"><span className="text-gray-500">Duração</span> <span className="font-medium">12 Meses</span></div>
<div className="flex justify-between text-sm"><span className="text-gray-500">Mínimo</span> <span className="font-medium">€500</span></div>
</div>
<button className="w-full py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-[#2F3E56] hover:border-[#2F3E56] transition-colors">Licitar</button>
</div>

<div className="min-w-[280px] md:min-w-[320px] bg-[#F5F7FA] p-6 rounded-2xl border border-gray-200 snap-start flex-shrink-0 relative">
<div className="mb-4">
<span className="text-3xl font-semibold text-[#2F3E56]">3.90%</span>
<span className="text-xs text-gray-500">TANB</span>
</div>
<div className="space-y-2 mb-6">
<div className="flex justify-between text-sm"><span className="text-gray-500">Duração</span> <span className="font-medium">18 Meses</span></div>
<div className="flex justify-between text-sm"><span className="text-gray-500">Mínimo</span> <span className="font-medium">€2,500</span></div>
</div>
<button className="w-full py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-[#2F3E56] hover:border-[#2F3E56] transition-colors">Licitar</button>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-[800px] mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-[#2F3E56] tracking-tight">Ainda tem dúvidas?</h2>
</div>
<div className="space-y-4">

<div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
<button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none group" onclick="toggleAccordion('faq1', this)">
<span className="font-medium text-gray-900">Como são calculados os juros?</span>
<iconify-icon className="text-gray-400 transition-transform duration-300 group-hover:text-[#2F3E56]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="hidden px-6 pb-4 text-sm text-gray-500 leading-relaxed" id="faq1">
                    Os juros são calculados diariamente sobre o saldo depositado e creditados na sua conta na data de vencimento ou periodicamente, conforme as condições do produto específico.
                </div>
</div>

<div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
<button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none group" onclick="toggleAccordion('faq2', this)">
<span className="font-medium text-gray-900">Posso mobilizar o dinheiro antecipadamente?</span>
<iconify-icon className="text-gray-400 transition-transform duration-300 group-hover:text-[#2F3E56]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="hidden px-6 pb-4 text-sm text-gray-500 leading-relaxed" id="faq2">
                    Sim, a maioria dos nossos depósitos permite mobilização antecipada, sujeita a uma penalização sobre os juros corridos. O capital inicial está sempre garantido.
                </div>
</div>

<div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
<button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none group" onclick="toggleAccordion('faq3', this)">
<span className="font-medium text-gray-900">É necessário abrir conta à ordem?</span>
<iconify-icon className="text-gray-400 transition-transform duration-300 group-hover:text-[#2F3E56]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="hidden px-6 pb-4 text-sm text-gray-500 leading-relaxed" id="faq3">
                    Sim, para subscrever aos nossos produtos de aforro é necessária uma conta à ordem, que é totalmente gratuita e sem custos de manutenção.
                </div>
</div>
</div>
</section>

<section className="py-12 px-6 max-w-[1440px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-8 rounded-2xl bg-[#2F3E56] text-white flex flex-col justify-between min-h-[200px] relative overflow-hidden group">
<div className="absolute right-0 top-0 opacity-10 transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:headset-linear" width="180"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold mb-2">Contacte-nos</h3>
<p className="text-blue-200 text-sm max-w-xs">A nossa equipa de suporte está disponível todos os dias das 9h às 22h.</p>
</div>
<button className="mt-8 self-start px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 text-sm font-medium transition-all">Ligar Agora</button>
</div>
<div className="p-8 rounded-2xl bg-white border border-gray-200 flex flex-col justify-between min-h-[200px] relative overflow-hidden group">
<div className="absolute right-0 top-0 opacity-5 transform translate-x-10 -translate-y-10 text-[#2F3E56] group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:shop-linear" width="180"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-[#2F3E56] mb-2">Visite um balcão</h3>
<p className="text-gray-500 text-sm max-w-xs">Prefere atendimento presencial? Encontre o balcão mais perto de si.</p>
</div>
<button className="mt-8 self-start px-5 py-2 rounded-full border border-gray-200 hover:border-[#2F3E56] text-[#2F3E56] text-sm font-medium transition-all">Localizar</button>
</div>
</div>
</section>

<section className="py-12 px-6 max-w-[1440px] mx-auto border-t border-gray-200 mt-12">
<h3 className="text-lg font-semibold text-[#2F3E56] mb-6">Documentação legal</h3>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm text-gray-500">
<thead className="bg-gray-50 text-xs uppercase text-gray-400 font-medium">
<tr>
<th className="px-6 py-3 rounded-l-lg">Documento</th>
<th className="px-6 py-3">Descrição</th>
<th className="px-6 py-3 text-right rounded-r-lg">Download</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="group hover:bg-white transition-colors">
<td className="px-6 py-4 font-medium text-gray-900">Ficha de Informação Normalizada</td>
<td className="px-6 py-4">Detalhes completos sobre o Depósito Step Up.</td>
<td className="px-6 py-4 text-right">
<button className="text-[#4F6EF7] hover:bg-blue-50 p-2 rounded-lg transition-colors"><iconify-icon icon="solar:file-download-linear" width="20"></iconify-icon></button>
</td>
</tr>
<tr className="group hover:bg-white transition-colors">
<td className="px-6 py-4 font-medium text-gray-900">Condições Gerais</td>
<td className="px-6 py-4">Termos e condições de abertura de conta.</td>
<td className="px-6 py-4 text-right">
<button className="text-[#4F6EF7] hover:bg-blue-50 p-2 rounded-lg transition-colors"><iconify-icon icon="solar:file-download-linear" width="20"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
<p className="text-xs text-gray-400 mt-6 max-w-4xl">
            A informação aqui apresentada não dispensa a consulta da informação pré-contratual e contratual legalmente exigida. As taxas apresentadas são Taxas Anuais Nominais Brutas (TANB) e estão sujeitas ao regime fiscal em vigor.
        </p>
</section>

<footer className="bg-[#2F3E56] text-white pt-16 pb-8 px-6">
<div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-white rounded flex items-center justify-center text-[#2F3E56]">
<iconify-icon icon="solar:wallet-money-linear" width="14"></iconify-icon>
</div>
<span className="text-md font-semibold tracking-tight">NOVO<span className="font-light">BANCO</span></span>
</div>
<p className="text-gray-400 text-sm leading-relaxed">
                    O seu parceiro financeiro digital na Europa. Simples, transparente e seguro.
                </p>
</div>
<div>
<h4 className="text-sm font-semibold mb-4 text-blue-200">Produtos</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Depósitos a Prazo</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contas Poupança</a></li>
<li><a className="hover:text-white transition-colors" href="#">Fundos de Investimento</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-4 text-blue-200">Empresa</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Sobre Nós</a></li>
<li><a className="hover:text-white transition-colors" href="#">Carreiras</a></li>
<li><a className="hover:text-white transition-colors" href="#">Imprensa</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-4 text-blue-200">Social</h4>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon></a> 
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="max-w-[1440px] mx-auto pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
<p>© 2023 NovoBanco Digital S.A. Todos os direitos reservados.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacidade</a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
<a className="hover:text-white transition-colors" href="#">Termos</a>
</div>
</div>
</footer>



    </>
  );
}
