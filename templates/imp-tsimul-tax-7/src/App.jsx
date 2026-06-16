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
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9', // Sky/Blue tone for fintech
600: '#0284c7',
900: '#0c4a6e',
},
slate: {
850: '#1e293b', // Custom dark
}
}
}
}
}



        // Init Icons
        lucide.createIcons();

        // --- Data & State ---
        const state = {
            status: 'single', // single, couple, divorced
            children: 0,
            parentIsole: false,
            income1: 40000,
            income2: 0,
            incomeOther: 0,
            year: 2025
        };

        // --- Brackets 2024 for 2023 income (Simplified for Demo, slightly adjusted for 2025 inflation projection) ---
        const BRACKETS = [
            { limit: 11294, rate: 0 },
            { limit: 28797, rate: 0.11 },
            { limit: 82341, rate: 0.30 },
            { limit: 177106, rate: 0.41 },
            { limit: Infinity, rate: 0.45 }
        ];

        // --- DOM Elements ---
        const els = {
            radiosStatus: document.querySelectorAll('input[name="status"]'),
            btnChildMinus: document.getElementById('btn-child-minus'),
            btnChildPlus: document.getElementById('btn-child-plus'),
            childCountDisplay: document.getElementById('child-count-display'),
            parentIsoleContainer: document.getElementById('parent-isole-container'),
            parentIsoleCheckbox: document.getElementById('parent-isole'),
            incomeInput: document.getElementById('income-input'),
            incomeSlider: document.getElementById('income-slider'),
            spouseContainer: document.getElementById('spouse-income-container'),
            spouseInput: document.getElementById('spouse-income-input'),
            spouseSlider: document.getElementById('spouse-income-slider'),
            otherIncomeInput: document.getElementById('other-income-input'),
            
            // Results
            resTax: document.getElementById('result-tax'),
            resTaxSmall: document.getElementById('result-tax-small'),
            resNetAnnual: document.getElementById('result-net-annual'),
            resAvgRate: document.getElementById('result-average-rate'),
            resMarginalRate: document.getElementById('result-marginal-rate'),
            resMonthly: document.getElementById('result-monthly'),
            taxProgressBar: document.getElementById('tax-progress-bar'),
            
            // Chart
            chartDonut: document.getElementById('chart-donut'),
            chartPercent: document.getElementById('chart-percent'),
            
            // Details
            detailParts: document.getElementById('detail-parts'),
            detailQf: document.getElementById('detail-qf'),
            dynamicTip: document.getElementById('dynamic-tip')
        };

        // --- Utils ---
        const formatMoney = (val) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
        const parseMoney = (val) => parseFloat(val) || 0;

        // --- Calculation Core ---
        function calculate() {
            // 1. Determine Parts
            let parts = 1;
            if (state.status === 'couple') parts = 2;

            // Children Logic
            // First 2 children = 0.5 each. 3rd+ = 1 each.
            if (state.children > 0) {
                if (state.children === 1) parts += 0.5;
                else if (state.children === 2) parts += 1; // 0.5 + 0.5
                else parts += 1 + (state.children - 2); // 2 first (1) + rest (1 each)
            }

            // Parent isolé logic (Simplified: +0.5 part total boost if single & children > 0)
            if (state.parentIsole && state.children > 0 && state.status !== 'couple') {
                parts += 0.5;
            }

            // 2. Total Income
            let totalIncome = state.income1 + state.incomeOther;
            if (state.status === 'couple') totalIncome += state.income2;

            // 3. Apply 10% deduction (Capped approx 14k - keeping simple logic here)
            // Deduction min ~470, max ~14171 per person.
            const deductionRate = 0.10;
            const maxDeduction = 14171; 
            
            // Calculate deduction per earner roughly
            let deduction = Math.min(state.income1 * deductionRate, maxDeduction);
            if(state.status === 'couple') {
                deduction += Math.min(state.income2 * deductionRate, maxDeduction);
            }
            
            // Other incomes might not have 10% (like foncier), but we assume global simplified for UX
            let taxableBase = Math.max(0, totalIncome - deduction);

            // 4. Quotient Familial
            let qf = taxableBase / parts;

            // 5. Calculate Tax per Part
            let taxPerPart = 0;
            let marginalRate = 0;

            for (let i = 0; i < BRACKETS.length; i++) {
                const b = BRACKETS[i];
                const prevLimit = i === 0 ? 0 : BRACKETS[i-1].limit;
                
                if (qf > prevLimit) {
                    const base = Math.min(qf, b.limit) - prevLimit;
                    taxPerPart += base * b.rate;
                    if (qf > prevLimit) marginalRate = b.rate; // Track highest bracket hit
                }
            }

            // 6. Total Tax
            let totalTax = Math.floor(taxPerPart * parts);
            
            // Decote (Simplified placeholder logic - decote reduces tax for low income)
            // Not implemented fully to keep code compact, but ensured no negative tax
            if (totalTax < 0) totalTax = 0;

            // 7. Results
            const netAfterStr = totalIncome - totalTax;
            const monthly = netAfterStr / 12;
            const avgRate = totalIncome > 0 ? (totalTax / totalIncome) * 100 : 0;
            const taxPercentOfTotal = totalIncome > 0 ? (totalTax / totalIncome) * 100 : 0;

            // --- Update UI ---
            els.resTax.innerText = formatMoney(totalTax);
            els.resTaxSmall.innerText = "- " + formatMoney(totalTax);
            els.resNetAnnual.innerText = formatMoney(netAfterStr);
            els.resMonthly.innerText = formatMoney(monthly) + "/mois";
            els.resAvgRate.innerText = avgRate.toFixed(1) + "%";
            els.resMarginalRate.innerText = (marginalRate * 100).toFixed(0) + "%";

            // Details
            els.detailParts.innerText = parts;
            els.detailQf.innerText = formatMoney(qf);

            // Graphics
            els.taxProgressBar.style.width = Math.min(avgRate * 2, 100) + "%"; // Visual scale
            
            // Donut Gradient
            const pTax = Math.max(0, Math.min(taxPercentOfTotal, 100));
            const pNet = 100 - pTax;
            els.chartDonut.style.background = `conic-gradient(#0ea5e9 0% ${pTax}%, #f1f5f9 ${pTax}% 100%)`;
            els.chartPercent.innerText = pNet.toFixed(0) + "%";

            // Dynamic Tips
            updateTips(marginalRate, parts, totalTax);
        }

        function updateTips(marginalRate, parts, tax) {
            let msg = "";
            if (tax === 0) {
                msg = "Vous n'êtes pas imposable. Profitez-en pour épargner via un LEP ou Livret A.";
            } else if (marginalRate >= 0.30) {
                msg = `Votre taux marginal est de ${(marginalRate*100).toFixed(0)}%. Réduire votre revenu imposable (PER, dons) est très efficace fiscalement.`;
            } else if (state.children === 0 && state.status !== 'couple') {
                msg = "Le mariage ou PACS permettrait de partager l'imposition si votre conjoint a des revenus très différents.";
            } else {
                msg = "Pensez aux crédits d'impôt (garde d'enfants, emploi à domicile) pour réduire la facture finale.";
            }
            els.dynamicTip.innerText = msg;
        }

        // --- Event Listeners ---
        
        // Status
        els.radiosStatus.forEach(r => {
            r.addEventListener('change', (e) => {
                state.status = e.target.value;
                // Show/Hide Spouse
                if (state.status === 'couple') {
                    els.spouseContainer.classList.remove('hidden');
                } else {
                    els.spouseContainer.classList.add('hidden');
                    state.income2 = 0; // Reset
                    els.spouseInput.value = 0;
                    els.spouseSlider.value = 0;
                }
                
                // Show/Hide Single Parent
                if (state.status === 'single' || state.status === 'divorced') {
                   // parent isole stays visible logic
                } else {
                   state.parentIsole = false;
                   els.parentIsoleCheckbox.checked = false;
                }
                
                // Visibility toggle for parent isole based on status logic simplified
                if(state.status === 'couple') {
                    els.parentIsoleContainer.classList.add('hidden');
                } else {
                    els.parentIsoleContainer.classList.remove('hidden');
                }

                calculate();
            });
        });

        // Children
        els.btnChildPlus.addEventListener('click', () => {
            state.children++;
            els.childCountDisplay.innerText = state.children;
            calculate();
        });
        els.btnChildMinus.addEventListener('click', () => {
            if (state.children > 0) {
                state.children--;
                els.childCountDisplay.innerText = state.children;
                calculate();
            }
        });

        // Parent Isole
        els.parentIsoleCheckbox.addEventListener('change', (e) => {
            state.parentIsole = e.target.checked;
            calculate();
        });

        // Incomes Sync (Input <-> Slider)
        const syncIncome = (input, slider, key) => {
            input.addEventListener('input', (e) => {
                const val = parseMoney(e.target.value);
                state[key] = val;
                if(val <= 150000) slider.value = val;
                calculate();
            });
            slider.addEventListener('input', (e) => {
                const val = parseInt(e.target.value);
                state[key] = val;
                input.value = val;
                calculate();
            });
        };

        syncIncome(els.incomeInput, els.incomeSlider, 'income1');
        syncIncome(els.spouseInput, els.spouseSlider, 'income2');
        
        els.otherIncomeInput.addEventListener('input', (e) => {
            state.incomeOther = parseMoney(e.target.value);
            calculate();
        });

        // Initialize
        calculate();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
<i className="h-5 w-5" data-lucide="calculator"></i>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900">ImpôtSimul</span>
</div>
<nav className="hidden md:flex gap-8">
<a className="text-sm font-medium text-slate-900" href="#">Simulateur</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#how-it-works">Comment ça marche</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 hidden sm:block" href="#">Se connecter</a>
<button className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
                    Partager
                </button>
</div>
</div>
</header>
<main className="flex-grow">

<section className="pt-16 pb-8 md:pt-24 md:pb-12 text-center px-4">
<h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Estimez vos impôts <span className="text-brand-600">en temps réel</span>
</h1>
<p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500">
                Un outil simple, rapide et gratuit pour calculer votre impôt sur le revenu 2024. Optimisez votre budget grâce à une vision claire de votre reste à vivre.
            </p>
</section>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
<div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">

<div className="lg:col-span-7 space-y-6">

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-brand-50 rounded-lg text-brand-600">
<i className="h-5 w-5" data-lucide="users"></i>
</div>
<h2 className="text-lg font-semibold text-slate-900">Votre situation</h2>
</div>

<div className="mb-6">
<label className="block text-sm font-medium text-slate-700 mb-3">Statut marital</label>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="status" type="radio" value="single"/>
<div className="rounded-xl border border-slate-200 bg-white p-4 text-center hover:bg-slate-50 peer-checked:border-brand-600 peer-checked:bg-brand-50 peer-checked:text-brand-900 transition-all">
<div className="mx-auto mb-2 w-max text-slate-400 peer-checked:text-brand-600"><i className="h-5 w-5" data-lucide="user"></i></div>
<span className="block text-sm font-medium">Célibataire</span>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="status" type="radio" value="couple"/>
<div className="rounded-xl border border-slate-200 bg-white p-4 text-center hover:bg-slate-50 peer-checked:border-brand-600 peer-checked:bg-brand-50 peer-checked:text-brand-900 transition-all">
<div className="mx-auto mb-2 w-max text-slate-400 peer-checked:text-brand-600"><i className="h-5 w-5" data-lucide="heart"></i></div>
<span className="block text-sm font-medium">Marié / PACS</span>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="status" type="radio" value="divorced"/>
<div className="rounded-xl border border-slate-200 bg-white p-4 text-center hover:bg-slate-50 peer-checked:border-brand-600 peer-checked:bg-brand-50 peer-checked:text-brand-900 transition-all">
<div className="mx-auto mb-2 w-max text-slate-400 peer-checked:text-brand-600"><i className="h-5 w-5" data-lucide="divide"></i></div>
<span className="block text-sm font-medium">Divorcé(e)</span>
</div>
</label>
</div>
</div>

<div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<label className="block text-sm font-medium text-slate-700">Enfants à charge</label>
<p className="text-xs text-slate-500 mt-1">Mineurs ou rattachés</p>
</div>
<div className="flex items-center gap-4 rounded-lg border border-slate-200 bg-slate-50 p-1">
<button className="h-8 w-8 rounded-md bg-white text-slate-500 shadow-sm hover:text-brand-600 flex items-center justify-center transition-colors" id="btn-child-minus">
<i className="h-4 w-4" data-lucide="minus"></i>
</button>
<span className="w-6 text-center text-lg font-semibold text-slate-900" id="child-count-display">0</span>
<button className="h-8 w-8 rounded-md bg-white text-slate-500 shadow-sm hover:text-brand-600 flex items-center justify-center transition-colors" id="btn-child-plus">
<i className="h-4 w-4" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="flex items-center justify-between border-t border-slate-100 pt-4" id="parent-isole-container">
<div>
<label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                    Parent isolé
                                    <i className="h-4 w-4 text-slate-400 cursor-help" data-lucide="info" title="Cochez cette case si vous élevez seul(e) vos enfants (case T)."></i>
</label>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="parent-isole" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-600"></div>
</label>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-brand-50 rounded-lg text-brand-600">
<i className="h-5 w-5" data-lucide="banknote"></i>
</div>
<h2 className="text-lg font-semibold text-slate-900">Vos Revenus Annuels</h2>
</div>

<div className="flex flex-col sm:flex-row gap-4 mb-6">
<div className="w-full sm:w-1/2">
<label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Année Fiscale</label>
<select className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 px-3 text-sm font-medium text-slate-900 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none">
<option value="2024">2024 (Revenus 2023)</option>
<option selected="" value="2025">2025 (Revenus 2024)</option>
</select>
</div>
<div className="w-full sm:w-1/2">
<label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Pays</label>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 py-2.5 px-3 text-sm font-medium text-slate-900 cursor-not-allowed opacity-75">
<span className="text-base">🇫🇷</span> France
                                </div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-2">
<label className="block text-sm font-medium text-slate-700">Revenu Net Imposable <span className="text-slate-400 font-normal">(Déclarant 1)</span></label>
<div className="relative">
<input className="block w-32 text-right rounded-md border-0 py-1.5 pl-3 pr-8 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6 font-semibold" id="income-input" placeholder="0" type="number" value="40000"/>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
<span className="text-slate-500 sm:text-sm">€</span>
</div>
</div>
</div>
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer" id="income-slider" max="150000" min="0" step="500" type="range" value="40000"/>
<div className="flex justify-between mt-1">
<span className="text-xs text-slate-400">0 €</span>
<span className="text-xs text-slate-400">150k € +</span>
</div>
</div>

<div className="mb-6 hidden" id="spouse-income-container">
<div className="flex justify-between items-center mb-2">
<label className="block text-sm font-medium text-slate-700">Revenu Net Imposable <span className="text-slate-400 font-normal">(Conjoint)</span></label>
<div className="relative">
<input className="block w-32 text-right rounded-md border-0 py-1.5 pl-3 pr-8 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6 font-semibold" id="spouse-income-input" type="number" value="0"/>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
<span className="text-slate-500 sm:text-sm">€</span>
</div>
</div>
</div>
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer" id="spouse-income-slider" max="150000" min="0" step="500" type="range" value="0"/>
</div>

<div className="border-t border-slate-100 pt-4">
<button className="flex w-full items-center justify-between text-left text-sm font-medium text-brand-600 hover:text-brand-700" onclick="document.getElementById('other-incomes').classList.toggle('hidden')" type="button">
<span>+ Ajouter d'autres revenus (fonciers, etc.)</span>
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
<div className="hidden mt-4 space-y-4" id="other-incomes">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Revenus Fonciers (Net)</label>
<div className="relative">
<input className="block w-full rounded-md border-0 py-1.5 pl-3 pr-8 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6" id="other-income-input" type="number" value="0"/>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
<span className="text-slate-500 sm:text-sm">€</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-2">
<button className="text-sm text-slate-500 hover:text-slate-900 flex items-center gap-1" onclick="window.location.reload()">
<i className="h-4 w-4" data-lucide="rotate-ccw"></i> Réinitialiser
                        </button>
<span className="text-xs text-slate-400">Dernière mise à jour des barèmes : Jan 2025</span>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="lg:sticky lg:top-24 space-y-6">

<div className="rounded-2xl bg-slate-900 text-white p-6 shadow-xl overflow-hidden relative">

<div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-brand-500 opacity-20 blur-xl"></div>
<h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-6">Estimation d'impôt 2025</h3>
<div className="flex items-end gap-2 mb-2">
<span className="text-4xl font-bold tracking-tight text-white" id="result-tax">0 €</span>
</div>
<div className="h-1 w-full bg-slate-800 rounded-full mb-6 overflow-hidden">
<div className="h-full bg-brand-500 chart-transition" id="tax-progress-bar" style={{width: '0%'}}></div>
</div>
<div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-4">
<div>
<p className="text-xs text-slate-400 mb-1">Taux moyen</p>
<p className="text-lg font-semibold text-brand-400" id="result-average-rate">0%</p>
</div>
<div>
<p className="text-xs text-slate-400 mb-1">Taux marginal</p>
<p className="text-lg font-semibold text-white" id="result-marginal-rate">0%</p>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Votre reste à vivre</h3>
<div className="flex flex-col sm:flex-row items-center gap-6 mb-6">

<div className="relative h-32 w-32 flex-shrink-0">
<div className="absolute inset-0 rounded-full chart-transition" id="chart-donut" style={{background: 'conic-gradient(#0ea5e9 0% 10%, #f1f5f9 10% 100%)'}}></div>
<div className="absolute inset-4 rounded-full bg-white flex items-center justify-center flex-col">
<span className="text-xs text-slate-400">Net</span>
<span className="text-sm font-bold text-slate-900" id="chart-percent">90%</span>
</div>
</div>
<div className="flex-grow space-y-3 w-full">
<div className="flex justify-between items-center border-b border-slate-50 pb-2">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-slate-100"></span>
<span className="text-sm text-slate-600">Revenu Net Annuel</span>
</div>
<span className="text-sm font-semibold text-slate-900" id="result-net-annual">0 €</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-brand-500"></span>
<span className="text-sm text-slate-600">Impôt</span>
</div>
<span className="text-sm font-medium text-slate-500" id="result-tax-small">0 €</span>
</div>
<div className="pt-2">
<div className="flex justify-between items-baseline">
<span className="text-sm font-medium text-slate-900">Mensuel après impôt</span>
<span className="text-xl font-bold text-brand-600 tracking-tight" id="result-monthly">0 €</span>
</div>
</div>
</div>
</div>

<div className="mt-4">
<details className="group">
<summary className="flex cursor-pointer items-center justify-between rounded-lg bg-slate-50 p-3 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
<span>Détails du calcul</span>
<span className="transition group-open:rotate-180">
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="mt-3 px-3 text-sm text-slate-600 space-y-2">
<div className="flex justify-between">
<span>Nombre de parts</span>
<span className="font-medium" id="detail-parts">1</span>
</div>
<div className="flex justify-between">
<span>Revenu par part</span>
<span className="font-medium" id="detail-qf">0 €</span>
</div>
<div className="p-3 bg-blue-50 text-blue-800 rounded text-xs mt-2 border border-blue-100">
<span className="font-semibold">Info :</span> Calcul basé sur l'abattement forfaitaire de 10% (max 14 171 €).
                                        </div>
</div>
</details>
</div>
</div>

<div className="rounded-xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 p-4">
<div className="flex gap-3">
<div className="text-indigo-600 mt-0.5"><i className="h-5 w-5" data-lucide="lightbulb"></i></div>
<div>
<h4 className="text-sm font-semibold text-indigo-900">Conseil personnalisé</h4>
<p className="text-sm text-indigo-700 mt-1 leading-relaxed" id="dynamic-tip">
                                        Vos revenus sont dans la tranche à 30%. Pensez au PER pour réduire votre impôt.
                                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="bg-white border-t border-slate-200 py-16" id="how-it-works">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Comment ça marche ?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex flex-col items-center text-center">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-900 mb-4 font-bold text-lg">1</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Renseignez votre profil</h3>
<p className="text-slate-500 text-sm">Indiquez votre situation familiale et vos revenus annuels nets.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-700 mb-4 font-bold text-lg">2</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Calcul automatique</h3>
<p className="text-slate-500 text-sm">Notre algorithme applique le barème progressif et le quotient familial.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-900 mb-4 font-bold text-lg">3</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Optimisez</h3>
<p className="text-slate-500 text-sm">Visualisez l'impact d'une augmentation ou d'un changement de situation.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50" id="faq">
<div className="mx-auto max-w-3xl px-4">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8 text-center">Questions fréquentes</h2>
<div className="space-y-4">
<details className="group rounded-xl bg-white border border-slate-200 p-4 open:ring-1 open:ring-brand-500">
<summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900">
                            Le résultat est-il 100% garanti ?
                            <span className="transition group-open:rotate-180"><i className="h-4 w-4" data-lucide="chevron-down"></i></span>
</summary>
<p className="mt-3 text-sm text-slate-600 leading-relaxed">
                            Non, il s'agit d'une estimation basée sur le barème général. Certains crédits d'impôts, réductions spécifiques ou situations complexes ne sont pas pris en compte dans ce simulateur simplifié.
                        </p>
</details>
<details className="group rounded-xl bg-white border border-slate-200 p-4">
<summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900">
                            Quel montant déclarer ?
                            <span className="transition group-open:rotate-180"><i className="h-4 w-4" data-lucide="chevron-down"></i></span>
</summary>
<p className="mt-3 text-sm text-slate-600 leading-relaxed">
                            Utilisez le "Net Imposable" qui figure généralement en bas de votre bulletin de salaire de décembre (cumul annuel) ou sur vos relevés de pension.
                        </p>
</details>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded bg-slate-900 text-white">
<i className="h-3 w-3" data-lucide="calculator"></i>
</div>
<span className="text-sm font-semibold text-slate-900">ImpôtSimul</span>
</div>
<p className="text-xs text-slate-500">
                © 2024 ImpôtSimul. Données à titre indicatif. Ne remplace pas l'avis officiel de la DGFiP.
            </p>
<div className="flex gap-4">
<a className="text-xs text-slate-500 hover:text-slate-900" href="#">Confidentialité</a>
<a className="text-xs text-slate-500 hover:text-slate-900" href="#">Mentions légales</a>
</div>
</div>
</footer>



    </>
  );
}
