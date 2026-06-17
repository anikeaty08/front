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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Taxas maquininha
        const machineRates = [
            0.0918, 0.1093, 0.1195, 0.1297,
            0.1398, 0.1498, 0.1600, 0.1698,
            0.1800, 0.1898, 0.1998, 0.2098
        ];
        // Comissão do consultor por parcela (1x a 12x)
        const consultantRates = [0.0325, 0.035, 0.0375, 0.04, 0.0425, 0.045, 0.0475, 0.05, 0.0525, 0.055, 0.0575, 0.06];
        // Comissão do estabelecimento credenciado por parcela (1x a 12x)
        const establishmentRates = [0.01625, 0.0175, 0.01875, 0.02, 0.02125, 0.0225, 0.02375, 0.025, 0.02625, 0.0275, 0.02875, 0.03];
        const companyRate = 0.10;
        let currentInstallment = 12;

        function getCurrentView() {
            const hash = (location.hash || '#cliente').replace('#', '');
            if (hash === 'consultor') return 'consultor';
            if (hash === 'credenciados') return 'credenciados';
            return 'cliente';
        }

        function renderView(view) {
            const resultConsultor = document.getElementById('result-consultor');
            const resultCredenciados = document.getElementById('result-credenciados');
            const linkCliente = document.getElementById('menu-link-cliente');
            const linkConsultor = document.getElementById('menu-link-consultor');
            const linkCredenciados = document.getElementById('menu-link-credenciados');

            const activeClasses = ['text-[#F5A623]', 'border-[#F5A623]/30'];
            [linkCliente, linkConsultor, linkCredenciados].forEach(link => link.classList.remove(...activeClasses));
            resultConsultor.classList.add('hidden');
            resultCredenciados.classList.add('hidden');

            if (view === 'consultor') {
                resultConsultor.classList.remove('hidden');
                linkConsultor.classList.add(...activeClasses);
            } else if (view === 'credenciados') {
                resultCredenciados.classList.remove('hidden');
                linkCredenciados.classList.add(...activeClasses);
            } else {
                linkCliente.classList.add(...activeClasses);
            }
            calculate();
        }

        function openMenu() {
            const overlay = document.getElementById('menu-overlay');
            overlay.classList.remove('opacity-0', 'pointer-events-none');
            overlay.classList.add('opacity-100');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            const overlay = document.getElementById('menu-overlay');
            overlay.classList.add('opacity-0', 'pointer-events-none');
            overlay.classList.remove('opacity-100');
            document.body.style.overflow = '';
        }

        document.addEventListener('DOMContentLoaded', () => {
            if (!location.hash || location.hash === '#') {
                location.hash = 'cliente';
            }
            renderView(getCurrentView());
            selectInstallment(12);

            document.querySelectorAll('#menu-overlay a[href^="#"]').forEach(link => {
                link.addEventListener('click', () => closeMenu());
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    const overlay = document.getElementById('menu-overlay');
                    if (!overlay.classList.contains('pointer-events-none')) closeMenu();
                }
            });
        });

        window.addEventListener('hashchange', () => {
            renderView(getCurrentView());
        });

        function maskCurrency(input) {
            let value = input.value.replace(/\D/g, '');
            if (value === '') value = '0';
            value = parseInt(value, 10) / 100;

            input.value = value.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });

            calculate();
        }

        function selectInstallment(n) {
            currentInstallment = n;

            const activeClasses = ['bg-[#F5A623]', 'text-black', 'border-[#F5A623]'];
            const inactiveClasses = ['bg-[#16161A]', 'text-neutral-300', 'border-white/5'];

            document.querySelectorAll('.inst-btn').forEach(btn => {
                btn.classList.remove(...activeClasses);
                btn.classList.add(...inactiveClasses);
            });

            const activeBtn = document.getElementById('btn-inst-' + n);
            activeBtn.classList.remove(...inactiveClasses);
            activeBtn.classList.add(...activeClasses);

            const taxPercentage = (machineRates[n - 1] * 100).toFixed(2);
            document.getElementById('current-tax-display').innerText = `Taxa: ${taxPercentage}%`;

            calculate();
        }

        function calculate() {
            const input = document.getElementById('calc-amount');
            let cleanValue = input.value.replace(/\D/g, '') / 100;

            if (cleanValue <= 0) cleanValue = 0;

            const rateMaquininha = machineRates[currentInstallment - 1];
            const totalToPass = cleanValue * (1 + rateMaquininha) * (1 + companyRate);
            const installmentValue = totalToPass / currentInstallment;

            const formatCurrency = (val) => val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            document.getElementById('res-pix').innerText = formatCurrency(cleanValue);
            document.getElementById('res-total').innerText = formatCurrency(totalToPass);
            document.getElementById('res-installment-text').innerText = `${currentInstallment}x de`;
            document.getElementById('res-installment-val').innerText = formatCurrency(installmentValue);

            const view = getCurrentView();
            if (view === 'consultor') {
                const commission = totalToPass * consultantRates[currentInstallment - 1];
                document.getElementById('res-commission').innerText = formatCurrency(commission);
            } else if (view === 'credenciados') {
                const establishment = totalToPass * establishmentRates[currentInstallment - 1];
                document.getElementById('res-establishment').innerText = formatCurrency(establishment);
            }
        }
    
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
      

<div className="hidden lg:block fixed inset-0 pointer-events-none z-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F5A623]/5 rounded-full blur-[120px]">
</div>
</div>

<main className="w-full h-full lg:h-auto max-w-5xl bg-[#0A0A0C] lg:rounded-3xl lg:border border-white/5 shadow-2xl flex flex-col lg:flex-row relative z-10 overflow-hidden">

<section className="flex-1 flex flex-col h-full lg:h-auto overflow-y-auto no-scrollbar pb-[220px] lg:pb-0">
<div className="p-6 lg:p-12 flex-1 flex flex-col max-w-2xl mx-auto w-full">

<div className="flex justify-center mb-6 lg:mb-8">
<img alt="Share Investimentos" className="h-12 lg:h-14 w-auto object-contain" src="https://shareinvestimentos.com.br/wp-content/uploads/2026/01/LOGO-BRANCO-BANCO-02-scaled.png"/>
</div>

<header className="flex items-center justify-between gap-3 mb-10 lg:mb-16 w-full">
<div className="flex items-center gap-3 min-w-0">
<div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#FBBF24] to-[#D97706] flex items-center justify-center shadow-lg shadow-[#F5A623]/10">
<iconify-icon className="text-xl text-black" icon="solar:card-transfer-linear"></iconify-icon>
</div>
<div className="min-w-0">
<h1 className="text-base font-medium tracking-tight text-neutral-100 truncate">Share Pagamentos</h1>
<p className="text-xs text-neutral-500 truncate">Simulador de Antecipação</p>
</div>
</div>
<button aria-label="Abrir menu" className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 transition-all border border-white/5" id="btn-menu-open" onclick="openMenu()" type="button">
<iconify-icon className="text-2xl text-neutral-300" icon="mdi:menu"></iconify-icon>
</button>
</header>

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-30 opacity-0 pointer-events-none transition-opacity duration-300" id="menu-overlay" onclick="closeMenu()">
<div className="absolute inset-0 flex items-center justify-center p-6">
<nav className="flex flex-col gap-4 w-full max-w-xs" onclick="event.stopPropagation()">
<a className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#16161A] border border-white/5 text-neutral-300 hover:bg-white/5 hover:text-[#F5A623] transition-all active:scale-[0.98]" href="#cliente" id="menu-link-cliente">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
<span className="font-medium">Visão Cliente</span>
</a>
<a className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#16161A] border border-white/5 text-neutral-300 hover:bg-white/5 hover:text-[#F5A623] transition-all active:scale-[0.98]" href="#consultor" id="menu-link-consultor">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="font-medium">Visão Consultor</span>
</a>
<a className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#16161A] border border-white/5 text-neutral-300 hover:bg-white/5 hover:text-[#F5A623] transition-all active:scale-[0.98]" href="#credenciados" id="menu-link-credenciados">
<iconify-icon className="text-xl" icon="solar:shop-2-linear"></iconify-icon>
<span className="font-medium">Credenciados</span>
</a>
</nav>
</div>
</div>

<div className="mb-10 lg:mb-16">
<label className="block text-xs text-neutral-400 uppercase tracking-widest mb-4" htmlFor="calc-amount">
                        Valor que o cliente recebe (PIX)
                    </label>
<div className="relative group">
<input className="w-full bg-transparent text-5xl lg:text-6xl text-white font-mono font-medium tracking-tight outline-none border-b border-white/10 focus:border-[#F5A623] pb-4 transition-all placeholder:text-neutral-800" id="calc-amount" inputmode="numeric" oninput="maskCurrency(this)" type="text" value="R$ 1.000,00"/>
</div>
</div>

<div>
<div className="flex items-end justify-between mb-4">
<label className="text-xs text-neutral-400 uppercase tracking-widest">
                            Número de Parcelas
                        </label>
<span className="hidden text-xs font-medium text-[#F5A623] bg-[#F5A623]/10 px-2.5 py-1 rounded-full border border-[#F5A623]/20 transition-all" id="current-tax-display">
                            Taxa: 20.98%
                        </span>
</div>

<div className="grid grid-cols-3 sm:grid-cols-4 gap-2 lg:gap-3">
<button className="inst-btn flex items-center justify-center py-4 lg:py-3.5 rounded-2xl border border-white/5 bg-[#16161A] text-neutral-300 text-sm font-medium transition-all active:scale-95" id="btn-inst-1" onclick="selectInstallment(1)" type="button">1x</button>
<button className="inst-btn flex items-center justify-center py-4 lg:py-3.5 rounded-2xl border border-white/5 bg-[#16161A] text-neutral-300 text-sm font-medium transition-all active:scale-95" id="btn-inst-2" onclick="selectInstallment(2)" type="button">2x</button>
<button className="inst-btn flex items-center justify-center py-4 lg:py-3.5 rounded-2xl border border-white/5 bg-[#16161A] text-neutral-300 text-sm font-medium transition-all active:scale-95" id="btn-inst-3" onclick="selectInstallment(3)" type="button">3x</button>
<button className="inst-btn flex items-center justify-center py-4 lg:py-3.5 rounded-2xl border border-white/5 bg-[#16161A] text-neutral-300 text-sm font-medium transition-all active:scale-95" id="btn-inst-4" onclick="selectInstallment(4)" type="button">4x</button>
<button className="inst-btn flex items-center justify-center py-4 lg:py-3.5 rounded-2xl border border-white/5 bg-[#16161A] text-neutral-300 text-sm font-medium transition-all active:scale-95" id="btn-inst-5" onclick="selectInstallment(5)" type="button">5x</button>
<button className="inst-btn flex items-center justify-center py-4 lg:py-3.5 rounded-2xl border border-white/5 bg-[#16161A] text-neutral-300 text-sm font-medium transition-all active:scale-95" id="btn-inst-6" onclick="selectInstallment(6)" type="button">6x</button>
<button className="inst-btn flex items-center justify-center py-4 lg:py-3.5 rounded-2xl border border-white/5 bg-[#16161A] text-neutral-300 text-sm font-medium transition-all active:scale-95" id="btn-inst-7" onclick="selectInstallment(7)" type="button">7x</button>
<button className="inst-btn flex items-center justify-center py-4 lg:py-3.5 rounded-2xl border border-white/5 bg-[#16161A] text-neutral-300 text-sm font-medium transition-all active:scale-95" id="btn-inst-8" onclick="selectInstallment(8)" type="button">8x</button>
<button className="inst-btn flex items-center justify-center py-4 lg:py-3.5 rounded-2xl border border-white/5 bg-[#16161A] text-neutral-300 text-sm font-medium transition-all active:scale-95" id="btn-inst-9" onclick="selectInstallment(9)" type="button">9x</button>
<button className="inst-btn flex items-center justify-center py-4 lg:py-3.5 rounded-2xl border border-white/5 bg-[#16161A] text-neutral-300 text-sm font-medium transition-all active:scale-95" id="btn-inst-10" onclick="selectInstallment(10)" type="button">10x</button>
<button className="inst-btn flex items-center justify-center py-4 lg:py-3.5 rounded-2xl border border-white/5 bg-[#16161A] text-neutral-300 text-sm font-medium transition-all active:scale-95" id="btn-inst-11" onclick="selectInstallment(11)" type="button">11x</button>
<button className="inst-btn flex items-center justify-center py-4 lg:py-3.5 rounded-2xl border border-white/5 bg-[#16161A] text-neutral-300 text-sm font-medium transition-all active:scale-95" id="btn-inst-12" onclick="selectInstallment(12)" type="button">12x</button>
</div>
</div>
</div>
</section>

<section className="fixed bottom-0 left-0 right-0 lg:relative lg:w-[400px] xl:w-[460px] bg-[#111114]/80 lg:bg-[#111114] backdrop-blur-2xl lg:backdrop-blur-none border-t lg:border-t-0 lg:border-l border-white/5 p-6 lg:p-12 flex flex-col justify-end lg:justify-center z-20 transition-transform">
<div className="flex flex-col gap-6 lg:gap-8">

<div>
<h2 className="text-xs text-neutral-400 uppercase tracking-widest mb-2 flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:card-linear"></iconify-icon>
                        Cobrar do cliente
                    </h2>
<div className="flex items-baseline gap-2 flex-wrap">
<span className="text-xl lg:text-2xl text-neutral-300 font-medium tracking-tight" id="res-installment-text">12x de</span>
<span className="text-4xl lg:text-5xl text-[#F5A623] font-medium tracking-tight font-mono" id="res-installment-val">
                            R$ 0,00
                        </span>
</div>
</div>
<div className="w-full h-px bg-white/5"></div>

<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="text-sm text-neutral-400">Total no cartão</span>
<span className="text-base text-neutral-100 font-mono font-medium" id="res-total">R$ 0,00</span>
</div>

<div className="flex justify-between items-center p-3 rounded-xl bg-[#16161A] border border-white/5" id="result-cliente">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
<span className="text-sm text-neutral-300">Receber (PIX)</span>
</div>
<span className="text-base text-green-400 font-mono font-medium tracking-tight" id="res-pix">R$ 0,00</span>
</div>

<div className="hidden flex justify-between items-center p-3 rounded-xl bg-[#16161A] border border-white/5" id="result-consultor">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#F5A623] shadow-[0_0_8px_rgba(245,166,35,0.4)]"></div>
<span className="text-sm text-neutral-300">Comissão do consultor</span>
</div>
<span className="text-base text-[#F5A623] font-mono font-medium tracking-tight" id="res-commission">R$ 0,00</span>
</div>

<div className="hidden flex justify-between items-center p-3 rounded-xl bg-[#16161A] border border-white/5" id="result-credenciados">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#F5A623] shadow-[0_0_8px_rgba(245,166,35,0.4)]"></div>
<span className="text-sm text-neutral-300">Comissão do credenciado</span>
</div>
<span className="text-base text-[#F5A623] font-mono font-medium tracking-tight" id="res-establishment">R$ 0,00</span>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
