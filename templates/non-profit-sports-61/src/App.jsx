import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
900: '#18181b',
950: '#09090b',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    (function() {
        const section = document.getElementById('aura-emfms84tu');
        
        // Elements
        const billingToggle = section.querySelector('#billingToggle');
        const cardToggles = section.querySelectorAll('[data-card-toggle]');
        const prices = section.querySelectorAll('.price');
        const billingLabels = section.querySelectorAll('.billing-label');
        const segPersonal = section.querySelector('#seg-personal');
        const segBusiness = section.querySelector('#seg-business');

        // State
        let isYearly = false;
        let currentSegment = 'personal';

        // Pricing data
        const pricingData = {
          personal: {
            mini: { monthly: 'US$9', yearly: 'US$7' },
            basic: { monthly: 'US$20', yearly: 'US$16' },
            pro: { monthly: 'US$41', yearly: 'US$33' }
          },
          business: {
            mini: { monthly: 'US$19', yearly: 'US$15' },
            basic: { monthly: 'US$49', yearly: 'US$39' },
            pro: { monthly: 'US$99', yearly: 'US$79' }
          }
        };

        function updatePricing() {
          const data = pricingData[currentSegment];
          const period = isYearly ? 'yearly' : 'monthly';
          
          prices.forEach((el, index) => {
            const planNames = ['mini', 'basic', 'pro'];
            const planName = planNames[index];
            if (data[planName]) {
              el.textContent = data[planName][period];
              el.setAttribute(`data-${period}`, data[planName][period]);
            }
          });
        }

        function updateBillingLabels() {
          const label = isYearly ? 'Yearly' : 'Monthly';
          billingLabels.forEach(el => {
            el.textContent = label;
          });
        }

        function setBilling(yearly) {
          isYearly = yearly;
          
          // Update knob positions
          const knobPos = yearly ? 'translateX(26px)' : 'translateX(4px)';
          const cardKnobPos = yearly ? 'translateX(22px)' : 'translateX(4px)';
          
          // Header toggle
          const headerKnob = billingToggle.querySelector('span.z-10');
          if (headerKnob) {
            headerKnob.style.transform = yearly ? 'translateX(26px)' : 'translateX(4px)';
          }
          
          // Card toggles
          cardToggles.forEach(btn => {
            const knob = btn.querySelector('span.z-10');
            if (knob) {
              knob.style.transform = yearly ? 'translateX(22px)' : 'translateX(4px)';
            }
          });
          
          billingToggle.setAttribute('aria-pressed', yearly ? 'true' : 'false');
          updatePricing();
          updateBillingLabels();
        }

        function setSegment(segment) {
          currentSegment = segment;
          
          // Update button styles
          if (segment === 'personal') {
            segPersonal.className = 'px-5 py-2 text-sm font-medium rounded-full text-white bg-white/10 border border-white/10 transition-all duration-200';
            segBusiness.className = 'px-5 py-2 text-sm font-medium rounded-full text-slate-300 hover:text-white transition-all duration-200';
          } else {
            segBusiness.className = 'px-5 py-2 text-sm font-medium rounded-full text-white bg-white/10 border border-white/10 transition-all duration-200';
            segPersonal.className = 'px-5 py-2 text-sm font-medium rounded-full text-slate-300 hover:text-white transition-all duration-200';
          }
          
          updatePricing();
        }

        // Event listeners
        billingToggle.addEventListener('click', () => {
          setBilling(!isYearly);
        });

        cardToggles.forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            setBilling(!isYearly);
          });
        });

        segPersonal.addEventListener('click', () => {
          setSegment('personal');
        });

        segBusiness.addEventListener('click', () => {
          setSegment('business');
        });

        // Initialize
        setBilling(false);
        setSegment('personal');
      })();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-white text-2xl font-semibold tracking-tighter uppercase flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-zinc-950 text-sm">
<iconify-icon icon="solar:football-linear" strokeWidth="1.5"></iconify-icon>
</div>
                TDB
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#campanhas">Campanhas</a>
<a className="hover:text-white transition-colors" href="#impacto">Impacto</a>
<a className="hover:text-white transition-colors" href="#sobre">Sobre Nós</a>
</div>
<a className="hidden md:inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50 bg-white text-zinc-950 hover:bg-zinc-200 h-10 px-6 py-2" href="#doar">
                Fazer Parte
            </a>
</div>
</nav>

<main className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[100px] mix-blend-screen opacity-40"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

<div className="flex flex-col lg:pt-0 pt-12 items-start">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-emerald-400 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Novas campanhas disponíveis
                    </div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] uppercase text-5xl font-semibold text-white tracking-tighter">
                        Jogue pelo bem.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-200">Transforme vidas.</span>
</h1>
<p className="md:text-2xl text-xl font-medium text-zinc-200 tracking-tight mt-6">
                        Grandes jogadores. Grandes causas. Você também pode fazer parte.
                    </p>
<p className="text-base md:text-lg text-zinc-400 mt-4 max-w-lg leading-relaxed">
                        O Time do Bem conecta atletas, campanhas sociais e pessoas que querem ajudar. Cada doação é um passo para mudar histórias reais.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-full text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 bg-emerald-500 text-zinc-950 hover:bg-emerald-400 h-14 px-8 shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_0_60px_-15px_rgba(16,185,129,0.7)]" href="#doar">
                            DOAR AGORA
                        </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-full text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 border border-zinc-700 bg-transparent hover:bg-zinc-900 hover:text-white h-14 px-8 text-white" href="#campanhas">
                            VER CAMPANHAS
                        </a>
</div>
<div className="mt-10 flex items-center gap-4 text-sm text-zinc-500">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<span>100% transparente</span>
</div>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:heart-angle-linear" strokeWidth="1.5"></iconify-icon>
<span className="">Impacto real</span>
</div>
<span className="w-1 h-1 rounded-full bg-zinc-700 hidden sm:block"></span>
<div className="hidden sm:flex items-center gap-1.5">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span>Apoiadores no Brasil</span>
</div>
</div>
</div>

<div className="lg:h-[700px] lg:rounded-3xl overflow-hidden group w-full h-[500px] rounded-2xl relative">

<div className="absolute inset-0 bg-zinc-900">
<img alt="Jogador em estádio escuro" className="w-full h-full object-cover object-center opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute top-0 right-0 bottom-0 left-0">
<img alt="Crianças jogando futebol - Times do Bem" className="absolute inset-0 w-full h-full object-cover object-center opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&amp;w=2160"/>
<div className="bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent lg:hidden"></div>
</div>


<div className="transform hover:-translate-y-1 transition-transform duration-300 hidden md:block bg-zinc-900/40 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 absolute top-8 right-8 shadow-2xl backdrop-blur-md">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="flex text-emerald-400 bg-emerald-500/20 w-10 h-10 rounded-full items-center justify-center">
<iconify-icon className="text-xl" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<p className="text-2xl font-semibold text-white tracking-tight">R$ 14.500</p><p className="text-xs font-medium text-zinc-400">Arrecadação Hoje</p>
</div>
</div>
</div>

<div className="absolute top-1/3 left-6 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-full py-2 px-4 shadow-xl flex items-center gap-3 animate-pulse hidden lg:flex">
<div className="w-8 h-8 rounded-full border border-zinc-700 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-xs font-medium text-zinc-300">Ana acabou de doar <span className="text-emerald-400">R$ 50</span></p>
</div>

<div className="absolute bottom-6 left-6 right-6 bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl">
<div className="flex items-start justify-between mb-4">
<div className="">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium uppercase tracking-wider bg-emerald-500/10 text-emerald-400 mb-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                    Campanha Ativa
                                </div>
<h3 className="text-base font-semibold text-white tracking-tight leading-snug">Apoio a crianças em situação de vulnerabilidade</h3>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 bg-black/50 flex items-center justify-center text-white backdrop-blur-md">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs font-medium">
<span className="text-emerald-400">75% alcançado</span>
<span className="text-zinc-400">Meta: R$ 100k</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full w-[75%] relative">
<div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/30"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="bg-zinc-950 border-white/5 border-t pt-24 pb-24 relative" id="impacto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/5">
<div className="flex flex-col items-center text-center py-6 md:py-0 px-4">
<h4 className="text-5xl lg:text-6xl font-semibold tracking-tighter text-white mb-2">12k<span className="text-emerald-500">+</span></h4>
<p className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Vidas Impactadas</p>
</div>
<div className="flex flex-col items-center text-center py-6 md:py-0 px-4">
<h4 className="text-5xl lg:text-6xl font-semibold tracking-tighter text-white mb-2">R$4M</h4>
<p className="uppercase text-xs font-medium text-zinc-400 tracking-wider">Doações Realizadas</p>
</div>
<div className="flex flex-col items-center text-center py-6 md:py-0 px-4">
<h4 className="text-5xl lg:text-6xl font-semibold tracking-tighter text-white mb-2">24</h4>
<p className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Campanhas Ativas</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20 relative" id="campanhas">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">Campanhas em Destaque</h2>
<p className="text-base text-zinc-400 max-w-2xl">Assista às histórias e escolha uma causa. Seus ídolos já estão jogando por eles.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors" href="#">
                    Ver todas as campanhas
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="w-full rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 mb-12 relative flex flex-col lg:flex-row shadow-2xl transition-all hover:border-white/10 group/card">

<div className="relative w-full lg:w-3/5 bg-zinc-950 aspect-video lg:aspect-auto min-h-[300px] lg:min-h-[400px] group cursor-pointer overflow-hidden">
<img alt="Thumbnail do documentário" className="group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-105 opacity-60 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90"></div>

<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-500 ease-out group-hover:bg-emerald-500 group-hover:border-emerald-400 group-hover:text-zinc-950">
<iconify-icon className="text-3xl md:text-4xl ml-1" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="text-xs font-semibold text-white tracking-wider bg-black/60 border-white/10 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 absolute right-6 bottom-6 backdrop-blur-md">
                        05:24
                    </div>
<div className="absolute top-6 left-6">
<span className="px-3 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md text-xs font-semibold text-emerald-400 border border-emerald-500/20 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Documentário Original
                        </span>
</div>
</div>

<div className="lg:w-2/5 lg:p-12 flex flex-col bg-zinc-900 w-full pt-8 pr-8 pb-8 pl-8 relative justify-center">
<h3 className="md:text-3xl text-2xl font-semibold text-white tracking-tight mb-4">O Jogo Virou: Resgatando o Futuro</h3><div className="mb-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium bg-white/5 text-zinc-300 uppercase tracking-wider border border-white/10">
<iconify-icon className="text-yellow-400" icon="solar:star-linear"></iconify-icon> Campanha Principal
                        </span>
</div><p className="leading-relaxed text-base text-zinc-400 mb-8">
                        Assista à história emocionante de como o esporte resgatou mais de 500 jovens em comunidades vulneráveis. Veja o impacto real da sua doação através dos olhos de quem vive essa transformação todos os dias.
                    </p>
<div className="space-y-3 mb-8">
<div className="flex justify-between text-sm font-medium">
<span className="text-white text-base">R$ 240.000 <span className="text-zinc-500 font-normal text-xs">arrecadados</span></span>
<span className="text-emerald-400 text-base">80%</span>
</div>
<div className="h-2 w-full bg-zinc-950 rounded-full overflow-hidden border border-white/5">
<div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full w-[80%] relative">
<div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/30"></div>
</div>
</div>
</div>
<button className="w-full py-4 rounded-xl bg-emerald-500 text-zinc-950 text-base font-semibold transition-all hover:bg-emerald-400 shadow-[0_0_30px_-10px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.6)]">
                        Apoiar Este Projeto
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden hover:border-white/10 transition-all hover:shadow-2xl hover:-translate-y-1">
<div className="aspect-[4/3] relative overflow-hidden bg-zinc-800">
<img alt="Crianças jogando" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-zinc-900 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-medium text-white uppercase tracking-wider border border-white/10 flex items-center gap-1.5">
<iconify-icon className="text-yellow-400" icon="solar:user-circle-linear"></iconify-icon> Embaixador: Vini Jr.
                            </span>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Escolinha Esperança Rio</h3>
<p className="text-sm text-zinc-400 mb-6 line-clamp-2">Construção de um novo centro esportivo para 200 crianças em situação de risco no Rio de Janeiro.</p>
<div className="space-y-3 mb-6">
<div className="flex justify-between text-xs font-medium">
<span className="text-white">R$ 80.000 <span className="text-zinc-500 font-normal">arrecadados</span></span>
<span className="text-emerald-400">80%</span>
</div>
<div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-white/5">
<div className="h-full bg-emerald-500 rounded-full w-[80%]"></div>
</div>
</div>
<button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-colors border border-white/10">
                            Doar para esta causa
                        </button>
</div>
</div>

<div className="group rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden hover:border-white/10 transition-all hover:shadow-2xl hover:-translate-y-1">
<div className="aspect-[4/3] relative overflow-hidden bg-zinc-800">
<img alt="Assistência" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-medium text-white uppercase tracking-wider border border-white/10 flex items-center gap-1.5">
<iconify-icon className="text-yellow-400" icon="solar:user-circle-linear"></iconify-icon> Embaixador: Alisson B.
                            </span>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Combate à Fome RS</h3>
<p className="text-sm text-zinc-400 mb-6 line-clamp-2">Distribuição de cestas básicas e kits de higiene para famílias afetadas pelas enchentes.</p>
<div className="space-y-3 mb-6">
<div className="flex justify-between text-xs font-medium">
<span className="text-white">R$ 150.000 <span className="text-zinc-500 font-normal">arrecadados</span></span>
<span className="text-emerald-400">50%</span>
</div>
<div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-white/5">
<div className="h-full bg-emerald-500 rounded-full w-[50%]"></div>
</div>
</div>
<button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-colors border border-white/10">
                            Doar para esta causa
                        </button>
</div>
</div>

<div className="group rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden hover:border-white/10 transition-all hover:shadow-2xl hover:-translate-y-1">
<div className="aspect-[4/3] relative overflow-hidden bg-zinc-800">
<img alt="Saúde" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1576085898323-218337e3e43c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-medium text-white uppercase tracking-wider border border-white/10 flex items-center gap-1.5">
<iconify-icon className="text-yellow-400" icon="solar:user-circle-linear"></iconify-icon> Embaixador: Richarlison
                            </span>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Saúde em Jogo</h3>
<p className="text-sm text-zinc-400 mb-6 line-clamp-2">Financiamento de tratamentos médicos complexos para jovens atletas de baixa renda.</p>
<div className="space-y-3 mb-6">
<div className="flex justify-between text-xs font-medium">
<span className="text-white">R$ 45.000 <span className="text-zinc-500 font-normal">arrecadados</span></span>
<span className="text-emerald-400">90%</span>
</div>
<div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-white/5">
<div className="h-full bg-emerald-500 rounded-full w-[90%]"></div>
</div>
</div>
<button className="w-full py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-zinc-950 text-sm font-semibold transition-colors border border-emerald-500/20">
                            Completar Meta
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative">

<div className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">

<div className="relative text-center max-w-4xl mx-auto">
<h2 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight">
      Pricing
    </h2>
<p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed">
      Use Vaultic for free. Upgrade to connect a custom domain, unlock advanced features, and raise your limits.
    </p>

<div className="mt-8 inline-flex items-center rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur-sm">
<button className="px-5 py-2 text-sm font-medium rounded-full text-white bg-white/10 border border-white/10 transition-all duration-200" id="seg-personal">
          Personal
        </button>
<button className="px-5 py-2 text-sm font-medium rounded-full text-slate-300 hover:text-white transition-all duration-200" id="seg-business">
          Business
        </button>
</div>

<div className="mt-6 flex items-center justify-center gap-3 text-sm">
<span className="text-slate-400">Monthly</span>
<button aria-pressed="false" className="relative inline-flex h-6 w-11 items-center rounded-full border border-white/15 bg-white/10 backdrop-blur-sm transition-colors cursor-pointer" id="billingToggle">
<span className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(90deg, rgba(16,185,129,0.25), rgba(110,231,183,0.25))'}}></span>
<span className="z-10 inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-300" style={{transform: 'translateX(4px)'}}></span>
</button>
<div className="inline-flex items-center gap-2">
<span className="text-white">Yearly</span>
<span className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium text-emerald-300 border border-emerald-400/30 bg-emerald-400/10">Save 20%</span>
</div>
</div>
</div>

<div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">

<div className="relative rounded-3xl border border-white/15 bg-black/40 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-emerald-400/30 hover:bg-black/50 group cursor-pointer">
<div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100 opacity-75" style={{background: 'radial-gradient(120% 100% at 0% 0%, rgba(16,185,129,0.18), rgba(16,185,129,0.06) 40%, transparent 60%)'}}>
</div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
</div>
<div className="p-6 sm:p-8">
<div className="flex items-center justify-between">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white group-hover:text-emerald-50 transition-colors duration-300">
            Mini</h3>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="uppercase billing-label">Monthly</span>
<button className="relative inline-flex h-5 w-9 items-center rounded-full border border-white/15 bg-white/10 cursor-pointer transition-colors duration-200 hover:bg-white/15" data-card-toggle="">
<span className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(90deg, rgba(16,185,129,0.25), rgba(110,231,183,0.2))'}}></span>
<span className="z-10 inline-block h-3.5 w-3.5 rounded-full bg-white shadow-sm transition-transform duration-300" style={{transform: 'translateX(4px)'}}></span>
</button>
</div>
</div>
<p className="mt-5 text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Landing pages are</p>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-white text-3xl sm:text-4xl font-semibold tracking-tight group-hover:text-emerald-50 transition-colors duration-300">
<span className="price" data-monthly="US$9" data-yearly="US$7">US$9</span>
</span>
<span className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">/month, per site</span>
</div>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/25 group-hover:ring-emerald-400/40 transition-all duration-300">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">2 pages</span>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/25 group-hover:ring-emerald-400/40 transition-all duration-300">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">10 GB bandwidth</span>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/25 group-hover:ring-emerald-400/40 transition-all duration-300">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">Custom domain</span>
</li>
</ul>
<button className="mt-8 w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all duration-200 group-hover:border-emerald-400/30 group-hover:bg-emerald-400/10">
            Get started
          </button>
</div>
</div>

<div className="relative rounded-3xl border border-white/15 bg-black/40 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-emerald-400/30 hover:bg-black/50 group cursor-pointer">
<div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100 opacity-75" style={{background: 'radial-gradient(120% 100% at 0% 0%, rgba(16,185,129,0.18), rgba(16,185,129,0.06) 40%, transparent 60%)'}}>
</div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
</div>
<div className="p-6 sm:p-8">
<div className="flex items-center justify-between">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white group-hover:text-emerald-50 transition-colors duration-300">
            Basic</h3>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="uppercase billing-label">Monthly</span>
<button className="relative inline-flex h-5 w-9 items-center rounded-full border border-white/15 bg-white/10 cursor-pointer transition-colors duration-200 hover:bg-white/15" data-card-toggle="">
<span className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(90deg, rgba(16,185,129,0.25), rgba(110,231,183,0.2))'}}></span>
<span className="z-10 inline-block h-3.5 w-3.5 rounded-full bg-white shadow-sm transition-transform duration-300" style={{transform: 'translateX(4px)'}}></span>
</button>
</div>
</div>
<p className="mt-5 text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Basic sites are</p>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-white text-3xl sm:text-4xl font-semibold tracking-tight group-hover:text-emerald-50 transition-colors duration-300">
<span className="price" data-monthly="US$20" data-yearly="US$16">US$20</span>
</span>
<span className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">/month, per site</span>
</div>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/25 group-hover:ring-emerald-400/40 transition-all duration-300">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">1,000 pages</span>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/25 group-hover:ring-emerald-400/40 transition-all duration-300">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">50 GB bandwidth</span>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/25 group-hover:ring-emerald-400/40 transition-all duration-300">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">Password protect</span>
</li>
</ul>
<button className="mt-8 w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all duration-200 group-hover:border-emerald-400/30 group-hover:bg-emerald-400/10">
            Get started
          </button>
</div>
</div>

<div className="relative rounded-3xl border border-emerald-400/30 bg-black/40 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] group cursor-pointer">
<div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(120% 120% at 90% 10%, rgba(16,185,129,0.35), rgba(16,185,129,0.15) 40%, rgba(16,185,129,0.06) 60%, transparent 75%)'}}>
</div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300">
</div>
<div className="p-6 sm:p-8">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white group-hover:text-emerald-50 transition-colors duration-300">
              Pro</h3>
<span className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium text-emerald-900 bg-emerald-300/95 shadow-[0_0_20px_rgba(16,185,129,0.35)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300">Popular</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="uppercase billing-label">Monthly</span>
<button className="relative inline-flex h-5 w-9 items-center rounded-full border border-emerald-400/40 bg-emerald-400/20 cursor-pointer transition-colors duration-200 hover:bg-emerald-400/25" data-card-toggle="">
<span className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(90deg, rgba(16,185,129,0.45), rgba(110,231,183,0.35))'}}></span>
<span className="z-10 inline-block h-3.5 w-3.5 rounded-full bg-white shadow-sm transition-transform duration-300" style={{transform: 'translateX(4px)'}}></span>
</button>
</div>
</div>
<p className="mt-5 text-slate-300 group-hover:text-slate-200 transition-colors duration-300">Growing sites are</p>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-white text-3xl sm:text-4xl font-semibold tracking-tight group-hover:text-emerald-50 transition-colors duration-300">
<span className="price" data-monthly="US$41" data-yearly="US$33">US$41</span>
</span>
<span className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">/month, per site</span>
</div>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/50 transition-all duration-300">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">10,000 pages</span>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/50 transition-all duration-300">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">100 GB bandwidth</span>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/50 transition-all duration-300">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">10 CMS collections</span>
</li>
</ul>
<button className="mt-8 w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-black bg-emerald-400/95 hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]">
            Get started
          </button>
</div>
</div>
</div>


</div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
<iconify-icon className="text-6xl text-zinc-800 mb-8 mx-auto" icon="solar:quote-left-bold-duotone"></iconify-icon>
<h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-white leading-tight mb-10">
                "O futebol me deu tudo. Devolver para a comunidade não é uma escolha, é uma obrigação. Ver o sorriso de uma criança quando ela recebe uma oportunidade muda mais o meu dia do que fazer um gol em final de campeonato."
            </h2>
<div className="flex items-center justify-center gap-4">
<div className="w-14 h-14 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img alt="Jogador" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<p className="text-base font-semibold text-white tracking-tight">Atleta Embaixador</p>
<p className="text-xs text-emerald-400 font-medium uppercase tracking-wider">Seleção Brasileira</p>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 border-white/5 border-t pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2 opacity-50">
<div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-zinc-950 text-xs">
<iconify-icon icon="solar:football-linear"></iconify-icon>
</div>
<span className="text-white text-lg font-semibold tracking-tighter uppercase">TDB</span>
</div>
<p className="text-xs font-medium text-zinc-500">
                © 2024 Time do Bem. Todos os direitos reservados.
            </p>
<div className="flex gap-4 text-zinc-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:info-circle-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
