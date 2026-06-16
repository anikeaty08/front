import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        function calculator() {
            return {
                // State
                km: 1500,
                currentEff: 10, // km/l
                gasPrice: 5.89,
                kwhPrice: 0.75,
                electricUse: 60, // percentage
                showToast: false,

                // Constants
                bydElectricEff: 4.34, // km/kWh
                bydHybridGasEff: 18.0, // km/l (Estimated hybrid mode efficiency)

                initAnimation() {
                    // Trigger toast after 3 seconds
                    setTimeout(() => {
                        this.showToast = true;
                        setTimeout(() => this.showToast = false, 5000);
                    }, 3000);
                },

                scrollToCalculator() {
                    document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
                },

                formatMoney(value) {
                    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
                },

                // Computed Properties (Getter functions in Alpine)
                get gasCost() {
                    return (this.km / this.currentEff) * this.gasPrice;
                },

                get bydCost() {
                    // Logic: 
                    // km driven on electric = total km * electricUse%
                    // km driven on gas = total km * (100 - electricUse)%
                    
                    const electricKm = this.km * (this.electricUse / 100);
                    const gasKm = this.km * ((100 - this.electricUse) / 100);

                    const costElec = (electricKm / this.bydElectricEff) * this.kwhPrice;
                    const costGas = (gasKm / this.bydHybridGasEff) * this.gasPrice;

                    return costElec + costGas;
                },

                get monthlySavings() {
                    return Math.max(0, this.gasCost - this.bydCost);
                },

                get yearlySavings() {
                    return this.monthlySavings * 12;
                },

                get savingsPercent() {
                    if (this.gasCost === 0) return 0;
                    return Math.round((this.monthlySavings / this.gasCost) * 100);
                }
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-24 left-4 z-50 flex items-center gap-3 rounded-xl border border-white/10 bg-[#1A1A1F]/90 px-4 py-3 backdrop-blur-md shadow-2xl md:bottom-8 md:left-8" style={{display: 'none'}} x-show="showToast" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-8" x-transition:leave="transition ease-in duration-200" x-transition:leave-end="opacity-0 translate-y-8" x-transition:leave-start="opacity-100 translate-y-0">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-[#00D4AA]">
<i className="h-4 w-4" data-lucide="check-circle"></i>
</div>
<div>
<p className="text-xs font-medium text-white/90">Maria de SP calculou</p>
<p className="text-xs text-[#00D4AA]">Economia de R$ 245/mês</p>
</div>
<span className="ml-2 text-[10px] text-white/40">há 3 min</span>
</div>

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#00D4AA]/5 blur-[120px]"></div>
<div className="absolute bottom-[10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-[#D70C19]/5 blur-[120px]"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6 md:px-12">
<div className="flex items-center gap-2">
<span className="text-xl font-bold tracking-tighter text-white">BYD</span>
<div className="h-4 w-[1px] bg-white/20"></div>
<span className="text-xs font-medium tracking-widest text-white/50 uppercase">Simulador Oficial</span>
</div>
<a className="hidden rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-white transition hover:bg-white/10 md:block" href="#calculator">
            Começar Agora
        </a>
</nav>

<section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20">

<div className="relative z-10 flex flex-col items-center px-6 text-center">
<div className="animate-float mb-6 inline-flex items-center gap-2 rounded-full border border-[#00D4AA]/30 bg-[#00D4AA]/10 px-3 py-1.5 backdrop-blur-md">
<i className="h-3 w-3 text-[#00D4AA]" data-lucide="zap"></i>
<span className="text-[10px] font-bold tracking-widest text-[#00D4AA] uppercase">Super Híbrido Plug-in</span>
</div>
<h1 className="font-heading mb-4 max-w-4xl text-5xl font-semibold leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl">
                Descubra quanto <br/>
<span className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">você vai economizar</span>
</h1>
<p className="mb-12 max-w-xl text-lg text-white/60 md:text-xl">
                Compare o custo real entre seu carro atual e a tecnologia revolucionária do novo BYD King GL.
            </p>
<button @click="scrollToCalculator" className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                Simular Economia
                <i className="h-4 w-4 transition-transform group-hover:translate-y-1" data-lucide="arrow-down"></i>
</button>
</div>

<div className="relative z-0 mt-12 w-full max-w-7xl md:mt-0">

<div className="relative mx-auto aspect-[16/6] w-full">
<div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0D0D0F] via-transparent to-transparent"></div>
<img alt="BYD King GL" className="h-full w-full object-cover opacity-80 mix-blend-overlay grayscale-[30%] mask-image-gradient" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-0 left-1/2 h-32 w-3/4 -translate-x-1/2 rounded-[100%] bg-gradient-to-t from-[#00D4AA]/10 to-transparent blur-3xl"></div>
</div>

<div className="absolute bottom-8 animate-bounce">
<i className="h-6 w-6 text-white/30" data-lucide="chevron-down"></i>
</div>
</section>

<section className="relative z-10 px-4 py-24 md:px-8 lg:px-12" id="calculator">
<div className="mx-auto max-w-6xl">
<div className="mb-16 text-center">
<h2 className="text-3xl font-semibold text-white md:text-4xl">Configure seu perfil</h2>
<p className="mt-2 text-white/50">Personalize os dados para uma estimativa precisa</p>
</div>
<div className="grid gap-8 lg:grid-cols-2 lg:gap-16">

<div className="glass-panel group relative rounded-3xl p-8 transition-all hover:border-white/10 hover:translate-y-[-4px]">
<div className="mb-8 flex items-center justify-between">
<h3 className="text-xl font-medium text-white">Seu carro atual</h3>
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D70C19]/10 text-[#D70C19]">
<i className="h-5 w-5" data-lucide="fuel"></i>
</div>
</div>
<div className="space-y-6">
<div>
<label className="mb-3 block text-xs font-medium tracking-widest text-white/40 uppercase">Tipo de Combustível</label>
<div className="relative">
<select className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white transition focus:border-white/20 focus:outline-none focus:ring-0">
<option className="bg-[#1A1A1F]">Gasolina</option>
<option className="bg-[#1A1A1F]">Etanol</option>
<option className="bg-[#1A1A1F]">Diesel</option>
</select>
<i className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="mb-3 flex items-center justify-between text-xs font-medium tracking-widest text-white/40 uppercase">
<span>Consumo Médio</span>
<span className="text-white" x-text="currentEff + ' km/l'"></span>
</label>
<div className="flex items-center gap-4">
<button @click="currentEff = Math.max(1, currentEff - 1)" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white">
<i className="h-4 w-4" data-lucide="minus"></i>
</button>
<div className="relative flex-1">
<input className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 text-center text-lg font-medium text-white focus:border-white/20 focus:outline-none" type="number" x-model.number="currentEff"/>
<span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/40">km/l</span>
</div>
<button @click="currentEff = currentEff + 1" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white">
<i className="h-4 w-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>

<div className="glass-panel group relative rounded-3xl p-8 ring-1 ring-[#00D4AA]/20 transition-all hover:shadow-[0_0_40px_-10px_rgba(0,212,170,0.1)] hover:translate-y-[-4px]">
<div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#00D4AA] text-[#0D0D0F] shadow-[0_0_15px_rgba(0,212,170,0.6)]">
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<div className="mb-8 flex items-center justify-between">
<h3 className="text-xl font-medium text-white">Novo BYD King GL</h3>
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00D4AA]/10 text-[#00D4AA]">
<i className="h-5 w-5" data-lucide="zap"></i>
</div>
</div>
<div className="space-y-8">
<div>
<div className="flex items-end justify-between border-b border-white/10 pb-4">
<span className="text-xs font-medium tracking-widest text-white/40 uppercase">Eficiência Elétrica</span>
<span className="text-2xl font-semibold text-[#00D4AA]">4.34 <span className="text-sm text-[#00D4AA]/60">km/kWh</span></span>
</div>
</div>
<div>
<div className="mb-4 flex items-center justify-between">
<label className="text-xs font-medium tracking-widest text-white/40 uppercase">Uso Modo Elétrico (EV)</label>
<span className="rounded bg-[#00D4AA]/10 px-2 py-1 text-xs font-bold text-[#00D4AA]" x-text="electricUse + '%'"></span>
</div>
<div className="relative h-10">
<div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-white/10 overflow-hidden">
<div :style={{`width: '${electricUse}%`'}} className="h-full bg-gradient-to-r from-[#00D4AA]/50 to-[#00D4AA]"></div>
</div>
<input className="absolute inset-0 z-10 w-full opacity-0 cursor-pointer" max="100" min="0" step="5" type="range" x-model="electricUse"/>

<div :style={{`left: 'calc(${electricUse}% - 12px)`'}} className="absolute top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border-2 border-[#00D4AA] bg-[#0D0D0F] shadow-[0_0_15px_rgba(0,212,170,0.4)] pointer-events-none transition-all duration-75"></div>
</div>
<p className="mt-2 text-xs text-white/30">Quanto mais elétrico, maior a economia.</p>
</div>
</div>
</div>
</div>

<div className="mt-12 space-y-12">

<div className="mx-auto max-w-3xl">
<div className="mb-6 flex items-end justify-between">
<label className="text-sm font-medium tracking-widest text-white/60 uppercase">Quilometragem Mensal</label>
<div className="text-4xl font-semibold text-white tracking-tight tabular-nums">
<span x-text="km"></span> <span className="text-base font-normal text-white/40">km</span>
</div>
</div>
<div className="relative mb-8 h-12 flex items-center">
<div className="absolute h-2 w-full rounded-full bg-[#1A1A1F] overflow-hidden">
<div :style={{`width: '${(km - 500) / 45}%`'}} className="h-full bg-gradient-to-r from-white/20 to-[#00D4AA]"></div>
</div>
<input className="relative z-10 w-full" max="5000" min="500" step="50" type="range" x-model="km"/>
</div>
<div className="flex justify-center gap-3">
<button :className="km === 800 ? 'bg-white/10 text-white border-white/20' : ''" @click="km = 800" className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/60 transition hover:bg-white/5 hover:text-white">Urbano (800km)</button>
<button :className="km === 1500 ? 'bg-white/10 text-white border-white/20' : ''" @click="km = 1500" className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/60 transition hover:bg-white/5 hover:text-white">Misto (1.500km)</button>
<button :className="km === 3000 ? 'bg-white/10 text-white border-white/20' : ''" @click="km = 3000" className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/60 transition hover:bg-white/5 hover:text-white">Estrada (3.000km)</button>
</div>
</div>

<div className="flex flex-col items-center justify-center gap-6 border-t border-white/5 pt-8 md:flex-row md:gap-12">
<div className="flex items-center gap-3">
<label className="text-xs font-medium text-white/40 uppercase">Preço Gasolina</label>
<div className="flex items-center rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/5 focus-within:ring-[#D70C19]/50">
<span className="text-xs text-white/40 mr-1">R$</span>
<input className="w-16 bg-transparent text-sm font-semibold text-white outline-none" step="0.01" type="number" x-model="gasPrice"/>
</div>
</div>
<div className="hidden h-8 w-[1px] bg-white/5 md:block"></div>
<div className="flex items-center gap-3">
<label className="text-xs font-medium text-white/40 uppercase">Preço Energia (kWh)</label>
<div className="flex items-center rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/5 focus-within:ring-[#00D4AA]/50">
<span className="text-xs text-white/40 mr-1">R$</span>
<input className="w-16 bg-transparent text-sm font-semibold text-white outline-none" step="0.01" type="number" x-model="kwhPrice"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-[#0D0D0F] py-24">

<div className="absolute left-1/2 top-0 h-[1px] w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-[#00D4AA]/50 to-transparent"></div>
<div className="container mx-auto px-4 md:px-8">

<div className="mb-20 text-center">
<span className="mb-4 inline-block text-sm font-medium tracking-widest text-[#00D4AA] uppercase">Sua economia estimada</span>
<div className="pulse-glow relative mx-auto inline-block rounded-full">
<div className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-6xl font-bold tracking-tight text-transparent tabular-nums md:text-8xl">
<span className="text-4xl text-white/30 md:text-5xl">R$</span> <span x-text="formatMoney(monthlySavings)"></span>
</div>
</div>
<p className="mt-4 text-xl text-white/60">por mês</p>
<div className="mt-2 text-sm text-white/30">
                    Isso significa <span className="text-white" x-text="'R$ ' + formatMoney(yearlySavings)"></span> livres no seu bolso por ano.
                </div>
</div>

<div className="grid gap-6 md:grid-cols-3">

<div className="glass-panel flex flex-col items-center justify-center rounded-2xl p-6 text-center">
<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00D4AA]/10 text-[#00D4AA]">
<i className="h-6 w-6" data-lucide="zap"></i>
</div>
<span className="text-xs font-medium tracking-widest text-white/40 uppercase">Custo BYD King</span>
<span className="mt-2 text-2xl font-semibold text-[#00D4AA]" x-text="'R$ ' + formatMoney(bydCost)"></span>
</div>

<div className="glass-panel flex flex-col items-center justify-center rounded-2xl p-6 text-center border-white/5">
<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#D70C19]/10 text-[#D70C19]">
<i className="h-6 w-6" data-lucide="fuel"></i>
</div>
<span className="text-xs font-medium tracking-widest text-white/40 uppercase">Custo Combustão</span>
<span className="mt-2 text-2xl font-semibold text-white/60" x-text="'R$ ' + formatMoney(gasCost)"></span>
</div>

<div className="relative flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[#1A1A1F] to-[#00D4AA]/10 p-6 text-center ring-1 ring-[#00D4AA]/20">
<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
<i className="h-6 w-6" data-lucide="trending-up"></i>
</div>
<span className="text-xs font-medium tracking-widest text-white/40 uppercase">Você Economiza</span>
<span className="mt-2 text-3xl font-bold text-white" x-text="savingsPercent + '%'"></span>
<span className="mt-1 text-xs text-[#00D4AA]">Mais eficiente</span>
</div>
</div>

<div className="mt-20">
<div className="relative mx-auto max-w-4xl border-l border-white/10 py-4 pl-8 md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pt-12">
<div className="grid gap-8 md:grid-cols-4 md:gap-4">
<div className="relative">
<div className="absolute -left-[37px] top-0 h-4 w-4 rounded-full border-2 border-[#00D4AA] bg-[#0D0D0F] md:-top-[55px] md:left-1/2 md:-translate-x-1/2"></div>
<p className="text-xs uppercase text-white/40">Em 1 ano</p>
<p className="mt-1 text-lg font-semibold text-white" x-text="'R$ ' + formatMoney(yearlySavings)"></p>
</div>
<div className="relative">
<div className="absolute -left-[37px] top-0 h-4 w-4 rounded-full border-2 border-[#00D4AA] bg-[#0D0D0F] md:-top-[55px] md:left-1/2 md:-translate-x-1/2"></div>
<p className="text-xs uppercase text-white/40">Em 3 anos</p>
<p className="mt-1 text-lg font-semibold text-white" x-text="'R$ ' + formatMoney(yearlySavings * 3)"></p>
</div>
<div className="relative">
<div className="absolute -left-[37px] top-0 h-4 w-4 rounded-full border-2 border-[#00D4AA] bg-[#0D0D0F] md:-top-[55px] md:left-1/2 md:-translate-x-1/2"></div>
<p className="text-xs uppercase text-white/40">Em 5 anos</p>
<p className="mt-1 text-lg font-semibold text-white" x-text="'R$ ' + formatMoney(yearlySavings * 5)"></p>
</div>
<div className="relative">
<div className="absolute -left-[37px] top-0 h-4 w-4 rounded-full bg-[#00D4AA] shadow-[0_0_10px_#00D4AA] md:-top-[55px] md:left-1/2 md:-translate-x-1/2"></div>
<p className="text-xs uppercase text-[#00D4AA]">Em 10 anos</p>
<p className="mt-1 text-2xl font-bold text-white" x-text="'R$ ' + formatMoney(yearlySavings * 10)"></p>
<div className="mt-3 rounded-lg bg-white/5 p-3 text-xs text-white/70">
<i className="mb-1 inline h-3 w-3 text-[#00D4AA]" data-lucide="palmtree"></i>
                                Equivale a 3 viagens em família para o Nordeste
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4">
<div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0F1F1A] to-[#0D0D0F] ring-1 ring-white/5">
<div className="grid md:grid-cols-2">
<div className="p-8 md:p-16">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-bold text-green-400 uppercase tracking-widest">
<i className="h-3 w-3" data-lucide="leaf"></i>
                        Eco Impacto
                    </div>
<h3 className="mb-4 text-3xl font-semibold text-white md:text-4xl">Seu impacto no planeta</h3>
<div className="mb-6">
<div className="text-5xl font-bold text-white tracking-tight">2.4 <span className="text-lg font-normal text-white/50">toneladas</span></div>
<p className="text-green-400">de CO₂ evitadas por ano</p>
</div>
<p className="mb-8 text-white/60 leading-relaxed">
                        Ao escolher o BYD King, você não apenas economiza, mas contribui ativamente para um futuro mais limpo. A energia no Brasil é 85% renovável.
                    </p>
<div className="flex items-center gap-4 text-sm font-medium text-white/80">
<span className="flex items-center gap-2">
<i className="h-4 w-4 text-green-500" data-lucide="trees"></i>
                             = 47 árvores plantadas
                         </span>
</div>
</div>
<div className="relative min-h-[300px] bg-[#0A0A0C]">

<svg className="absolute inset-0 h-full w-full text-green-900/20" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative">
<i className="h-32 w-32 text-green-500 opacity-80 drop-shadow-[0_0_30px_rgba(34,197,94,0.4)]" data-lucide="sprout"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 text-center">
<div className="container mx-auto px-6">
<p className="mb-2 text-xs font-bold tracking-widest text-white/30 uppercase">Junte-se à revolução</p>
<h3 className="mb-12 text-3xl font-semibold text-white">127.453 brasileiros já calcularam</h3>
<div className="grid gap-6 md:grid-cols-3">

<div className="glass-panel flex flex-col items-start rounded-2xl p-6 text-left">
<div className="mb-4 flex gap-1 text-[#00D4AA]">
<i className="h-3 w-3 fill-current" data-lucide="star"></i><i className="h-3 w-3 fill-current" data-lucide="star"></i><i className="h-3 w-3 fill-current" data-lucide="star"></i><i className="h-3 w-3 fill-current" data-lucide="star"></i><i className="h-3 w-3 fill-current" data-lucide="star"></i>
</div>
<p className="mb-6 flex-1 text-sm text-white/80">"Eu gastava R$ 800 de gasolina no meu sedan antigo. Com o King, gasto R$ 250 contando energia e gasolina. É surreal."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-white/10"></div>
<div>
<p className="text-xs font-bold text-white">Roberto M.</p>
<p className="text-[10px] text-white/40">São Paulo, SP</p>
</div>
</div>
</div>

<div className="glass-panel flex flex-col items-start rounded-2xl p-6 text-left">
<div className="mb-4 flex gap-1 text-[#00D4AA]">
<i className="h-3 w-3 fill-current" data-lucide="star"></i><i className="h-3 w-3 fill-current" data-lucide="star"></i><i className="h-3 w-3 fill-current" data-lucide="star"></i><i className="h-3 w-3 fill-current" data-lucide="star"></i><i className="h-3 w-3 fill-current" data-lucide="star"></i>
</div>
<p className="mb-6 flex-1 text-sm text-white/80">"A suavidade do motor elétrico vicia. E ver o gráfico de economia no painel é minha parte favorita do dia."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-white/10"></div>
<div>
<p className="text-xs font-bold text-white">Carla S.</p>
<p className="text-[10px] text-white/40">Curitiba, PR</p>
</div>
</div>
</div>

<div className="glass-panel flex flex-col items-start rounded-2xl p-6 text-left">
<div className="mb-4 flex gap-1 text-[#00D4AA]">
<i className="h-3 w-3 fill-current" data-lucide="star"></i><i className="h-3 w-3 fill-current" data-lucide="star"></i><i className="h-3 w-3 fill-current" data-lucide="star"></i><i className="h-3 w-3 fill-current" data-lucide="star"></i><i className="h-3 w-3 fill-current" data-lucide="star"></i>
</div>
<p className="mb-6 flex-1 text-sm text-white/80">"Troquei sem acreditar muito na economia prometida, mas na prática foi até melhor que o simulador."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-white/10"></div>
<div>
<p className="text-xs font-bold text-white">André L.</p>
<p className="text-[10px] text-white/40">Belo Horizonte, MG</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sticky bottom-0 z-40 border-t border-white/10 bg-[#0D0D0F]/90 px-6 py-4 backdrop-blur-xl md:relative md:border-t-0 md:bg-transparent md:py-24">
<div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 md:flex-row md:rounded-3xl md:bg-[#1A1A1F] md:p-12 md:ring-1 md:ring-white/5">
<div className="hidden md:block">
<h2 className="text-3xl font-semibold text-white">Pronto para economizar?</h2>
<p className="mt-2 text-white/60">Agende seu test drive hoje e sinta a diferença.</p>
</div>

<div className="flex w-full items-center justify-between md:hidden">
<div>
<p className="text-[10px] text-white/50 uppercase">Economia mensal</p>
<p className="text-xl font-bold text-[#00D4AA]" x-text="'R$ ' + formatMoney(monthlySavings)"></p>
</div>
</div>
<div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
<button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-transparent py-4 text-sm font-semibold text-white transition hover:bg-white/5 md:w-auto md:px-8">
                    Agendar Test Drive
                </button>
<button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#D70C19] py-4 text-sm font-semibold text-white shadow-lg shadow-red-900/20 transition hover:bg-red-600 hover:shadow-red-900/40 md:w-auto md:px-10">
                    SOLICITAR PROPOSTA
                    <i className="h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<p className="mt-4 text-center text-[10px] text-white/20 md:mt-8">
            🔒 Sem compromisso • Resposta em até 2h
        </p>
</section>

<a className="fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/30 transition hover:scale-110 hover:shadow-green-900/50 md:bottom-8" href="#">
<i className="h-7 w-7 fill-current" data-lucide="message-circle"></i>
<span className="absolute right-0 top-0 flex h-3 w-3">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
</span>
</a>


    </>
  );
}
