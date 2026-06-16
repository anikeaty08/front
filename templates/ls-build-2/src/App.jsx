import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        (function() {
            const main = document.currentScript.parentElement;
            function updateMouse(e) {
                const rect = main.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                main.style.setProperty('--mouse-x', `${x}px`);
                main.style.setProperty('--mouse-y', `${y}px`);

                const cards = main.querySelectorAll('.glass-card');
                cards.forEach(card => {
                    const cardRect = card.getBoundingClientRect();
                    const cardX = e.clientX - cardRect.left;
                    const cardY = e.clientY - cardRect.top;
                    card.style.setProperty('--card-x', `${cardX}px`);
                    card.style.setProperty('--card-y', `${cardY}px`);
                });
            }
            main.addEventListener('mousemove', updateMouse);
        })();
      


        const COST_PER_LEAD = 14.00;
        const LEADS_PER_SALE = 4.5;
        const SALES_PER_AGENT_DAY = 1;
        const FIXED_PLATFORM_COST = 9047.62;
        const els = {
            agentsSlider: document.getElementById('agents-slider'),
            daysSlider: document.getElementById('days-slider'),
            agentsDisplay: document.getElementById('agents-display'),
            daysDisplay: document.getElementById('days-display'),
            totalBudget: document.getElementById('total-budget'),
            dailyBurn: document.getElementById('daily-burn'),
            costPerAgent: document.getElementById('cost-per-agent'),
            leadSpend: document.getElementById('lead-spend'),
            compTotal: document.getElementById('comp-total'),
            barLeadSpend: document.getElementById('bar-lead-spend')
        };
        const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });

        function updateSliderStyle(slider) {
            const min = parseFloat(slider.min);
            const max = parseFloat(slider.max);
            const val = parseFloat(slider.value);
            const percentage = ((val - min) / (max - min)) * 100;
            slider.style.background = `linear-gradient(to right, #6366f1 ${percentage}%, #27272a ${percentage}%)`;
        }

        function calculateMain() {
            const agents = parseInt(els.agentsSlider.value);
            const days = parseInt(els.daysSlider.value);
            els.agentsDisplay.innerText = `${agents} Agent${agents !== 1 ? 's' : ''}`;
            els.daysDisplay.innerText = `${days} Days / Mo`;
            updateSliderStyle(els.agentsSlider);
            updateSliderStyle(els.daysSlider);
            const leadsPerDayPerAgent = SALES_PER_AGENT_DAY * LEADS_PER_SALE;
            const totalDailyLeads = agents * leadsPerDayPerAgent;
            const totalMonthlyLeads = totalDailyLeads * days;
            const variableLeadSpend = totalMonthlyLeads * COST_PER_LEAD;
            const totalMonthlyBudget = FIXED_PLATFORM_COST + variableLeadSpend;
            const dailyBurnRate = totalMonthlyBudget / days;
            const costPerAgentVal = totalMonthlyBudget / agents;
            els.totalBudget.innerText = currency.format(totalMonthlyBudget);
            els.dailyBurn.innerText = currency.format(dailyBurnRate);
            els.costPerAgent.innerText = currency.format(costPerAgentVal);
            els.leadSpend.innerText = currency.format(variableLeadSpend);
            els.compTotal.innerText = currency.format(totalMonthlyBudget);
            const totalForBar = totalMonthlyBudget;
            const leadPercent = (variableLeadSpend / totalForBar) * 100;
            els.barLeadSpend.style.width = `${leadPercent}%`;
        }

        document.addEventListener('DOMContentLoaded', () => {
            els.agentsSlider.addEventListener('input', calculateMain);
            els.daysSlider.addEventListener('input', calculateMain);
            calculateMain();
        });
      


        const RANKS = [
            "Associate", "Sr. Associate", "Manager", "Sr. Manager",
            "Director", "Sr. Director", "Executive Director",
            "Bronze ED", "Silver ED", "Gold ED", "Platinum ED",
            "Double Platinum ED", "Triple Platinum ED", "Platinum Elite", "Diamond ED"
        ];

        const RANK_FACTORS = {
            "Associate": 0.20, "Sr. Associate": 0.25, "Manager": 0.30, "Sr. Manager": 0.35,
            "Director": 0.40, "Sr. Director": 0.45, "Executive Director": 0.50,
            "Bronze ED": 0.51, "Silver ED": 0.52, "Gold ED": 0.53, "Platinum ED": 0.54,
            "Double Platinum ED": 0.55, "Triple Platinum ED": 0.56,
            "Platinum Elite": 0.58, "Diamond ED": 0.60
        };

        const PLANS = {
            "ls_2995": 29.95, "ls_3795": 37.95, "ls_4995": 49.95,
            "id_1495": 14.95, "id_1995": 19.95, "id_2995": 29.95, "id_3495": 34.95,
            "cdlp_3995": 39.95,
            "bun_4490": 44.90, "bun_4990": 49.90, "bun_5290": 52.90, "bun_5790": 57.90,
            "bun_5990": 59.90, "bun_6490": 64.90, "bun_6790": 67.90, "bun_6990": 69.90,
            "bun_7290": 72.90, "bun_7990": 79.90, "bun_8490": 84.90
        };

        const state = {
            plan: "bun_8490", userRank: "Executive Director", isElite: true,
            personalSales: 10, teamSales: {}, chargebackRate: 15
        };

        RANKS.forEach(r => state.teamSales[r] = 0);

        const formatCurrency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

        function getRate(rank, planId, isElite) {
            const monthly = PLANS[planId] || 0;
            const annual = monthly * 12;
            const factor = RANK_FACTORS[rank] || 0.20;
            const eliteVal = Math.floor(annual * factor);
            return isElite ? eliteVal : Math.floor(eliteVal * 0.85);
        }

        function initComm() {
            const teamContainer = document.getElementById('teamInputsContainer');
            teamContainer.innerHTML = '';
            RANKS.forEach(rank => {
                const row = document.createElement('div');
                row.className = "flex justify-between items-center bg-zinc-900/30 p-2 rounded border border-white/5";
                row.innerHTML = `
                    <label class="text-[10px] text-zinc-400 font-medium">${rank}</label>
                    <div class="flex items-center gap-2">
                        <span class="text-[9px] text-zinc-600 uppercase">Sales</span>
                        <input type="number" min="0" value="0" data-rank="${rank}" class="team-input w-12 bg-zinc-800 border border-white/10 text-center text-[10px] text-white rounded px-1 py-0.5 focus:border-emerald-500 focus:outline-none transition-colors">
                    </div>
                `;
                teamContainer.appendChild(row);
            });
            attachCommListeners();
            calculateComm();
        }

        function attachCommListeners() {
            document.getElementById('planSelect').addEventListener('change', (e) => { state.plan = e.target.value; calculateComm(); });
            document.getElementById('userRank').addEventListener('change', (e) => { state.userRank = e.target.value; calculateComm(); });
            document.getElementById('tierToggle').addEventListener('change', (e) => { state.isElite = e.target.checked; calculateComm(); });

            const pInput = document.getElementById('personalSalesInput');
            const pSlider = document.getElementById('personalSalesSlider');
            pInput.addEventListener('input', (e) => {
                state.personalSales = parseInt(e.target.value) || 0;
                pSlider.value = state.personalSales; updateSliderFill(pSlider, '#6366f1'); calculateComm();
            });
            pSlider.addEventListener('input', (e) => {
                state.personalSales = parseInt(e.target.value);
                pInput.value = state.personalSales; updateSliderFill(pSlider, '#6366f1'); calculateComm();
            });

            document.querySelectorAll('.team-input').forEach(input => {
                input.addEventListener('input', (e) => {
                    state.teamSales[e.target.getAttribute('data-rank')] = parseInt(e.target.value) || 0;
                    calculateComm();
                });
            });

            const cbSlider = document.getElementById('cbSlider');
            cbSlider.addEventListener('input', (e) => {
                state.chargebackRate = parseInt(e.target.value);
                document.getElementById('riskDisplay').innerText = `${state.chargebackRate}% CB`;
                updateSliderFill(cbSlider, '#f59e0b'); calculateComm();
            });

            updateSliderFill(pSlider, '#6366f1'); updateSliderFill(cbSlider, '#f59e0b');
        }

        function updateSliderFill(el, color) {
            const pct = ((el.value - el.min) / (el.max - el.min)) * 100;
            el.style.background = `linear-gradient(to right, ${color} ${pct}%, #27272a ${pct}%)`;
        }

        function calculateComm() {
            const myAdvance = getRate(state.userRank, state.plan, state.isElite);
            const personalGross = state.personalSales * myAdvance;

            let overrideGross = 0;
            let teamCount = 0;
            let tableHTML = "";

            Object.entries(state.teamSales).forEach(([rank, count]) => {
                if (count > 0) {
                    const downlineAdvance = getRate(rank, state.plan, state.isElite);
                    let spread = Math.max(0, myAdvance - downlineAdvance);
                    const lineTotal = count * spread;
                    overrideGross += lineTotal;
                    teamCount += count;
                    tableHTML += `<tr><td class="text-zinc-300">${rank}</td><td class="text-zinc-500 font-mono">${count}</td><td class="text-emerald-400 font-mono">+${formatCurrency.format(spread)}</td><td class="text-right text-white font-mono">${formatCurrency.format(lineTotal)}</td></tr>`;
                }
            });

            if(teamCount === 0) tableHTML = `<tr><td colspan="4" class="text-center text-zinc-600 italic py-4">No downline sales entered.</td></tr>`;

            const totalGross = personalGross + overrideGross;
            const cbDeduction = totalGross * (state.chargebackRate / 100);
            const totalNet = totalGross - cbDeduction;
            const effEarnings = (state.personalSales + teamCount) > 0 ? (totalNet / (state.personalSales + teamCount)) : 0;

            document.getElementById('totalNet').innerText = formatCurrency.format(totalNet);
            document.getElementById('estChargebacks').innerText = `-${formatCurrency.format(cbDeduction)}`;
            document.getElementById('effEarnings').innerText = formatCurrency.format(effEarnings);
            document.getElementById('personalGross').innerText = formatCurrency.format(personalGross);
            document.getElementById('personalCountDisplay').innerText = state.personalSales;
            document.getElementById('personalRateDisplay').innerText = formatCurrency.format(myAdvance);
            document.getElementById('overrideGross').innerText = formatCurrency.format(overrideGross);
            document.getElementById('teamCountDisplay').innerText = teamCount;
            document.getElementById('overrideTableBody').innerHTML = tableHTML;
        }

        document.addEventListener('DOMContentLoaded', initComm);
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="md:py-8 flex flex-col min-h-screen z-10 group/main cursor-pointer w-full max-w-6xl pt-8 pr-6 pb-8 pl-6 relative" role="button" style={{-MouseX: '739px', -MouseY: '1544px'}}>


<div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 main-flashlight transition-opacity duration-300"></div>

<nav className="flex animate-in select-none z-10 d-1 mb-8 relative items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-500/10"></div>
<span className="font-mono font-bold text-xs text-zinc-100">E</span>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-zinc-200 tracking-tight">
              Enterprise Remote
            </span>
<span className="text-[9px] font-mono text-zinc-500">
              Financial Systems
            </span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-[11px] font-medium text-zinc-200 bg-white/5 rounded border border-white/5 hover:bg-white/10 transition-colors">
            Financial Forecast Modeler
          </button>
</div>
</nav>
<div className="flex gap-6 z-20 animate-in mb-6 pl-1 relative gap-x-6 gap-y-6 items-center">
<button className="text-[11px] hover:text-white transition-colors font-medium text-zinc-400">
          Charges
        </button>
<button className="text-[11px] hover:text-white transition-colors font-medium text-zinc-400">
          Operations
        </button>
<button className="text-[11px] hover:text-white transition-colors font-medium text-zinc-400">
          About
        </button>
</div>

<header className="mb-8 animate-in d-2 max-w-2xl relative z-10">
<div className="flex items-start justify-between">
<div>
<h1 className="text-2xl font-medium text-zinc-100 tracking-tight mb-2">
              Financial Forecast Modeler
            </h1>
<p className="text-[13px] leading-relaxed text-zinc-400 mb-4 max-w-xl">
              Estimate operating budget combining fixed platform fees with
              variable lead acquisition.
            </p>
</div>
<button className="inline-flex items-center gap-2 text-[10px] font-medium text-zinc-400 border border-white/10 hover:border-zinc-500 hover:text-white px-3 py-1.5 rounded transition-all">
<iconify-icon icon="solar:file-download-linear" width="14"></iconify-icon>
            PDF
          </button>
</div>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in d-3 relative z-10 mb-8">

<div className="lg:col-span-4 p-5 space-y-6 glass-card rounded-xl" style={{-CardX: '715px', -CardY: '1299px'}}>
<div className="flex items-center gap-2 mb-1 pb-3 border-b border-white/5">
<iconify-icon className="text-zinc-500" icon="solar:tuning-2-linear"></iconify-icon>
<h2 className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wide">
              Configuration
            </h2>
</div>

<div className="space-y-3">
<div className="flex justify-between items-end">
<label className="text-[11px] font-medium text-zinc-300">
                Capacity
              </label>
<span className="text-[10px] font-mono text-indigo-300 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20" id="agents-display">
                10 Agents
              </span>
</div>
<input className="w-full" id="agents-slider" max="50" min="1" step="1" style={{background: 'linear-gradient(to right, rgb(99, 102, 241) 18.367347%, rgb(39, 39, 42) 18.367347%)'}} type="range" value="10"/>
</div>

<div className="space-y-3 pt-1">
<div className="flex justify-between items-end">
<label className="text-[11px] font-medium text-zinc-300">
                Duration
              </label>
<span className="text-[10px] font-mono text-indigo-300 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20" id="days-display">
                22 Days / Mo
              </span>
</div>
<input className="w-full" id="days-slider" max="30" min="5" step="1" style={{background: 'linear-gradient(to right, rgb(99, 102, 241) 68%, rgb(39, 39, 42) 68%)'}} type="range" value="22"/>
</div>

<div className="mt-4 pt-4 border-t border-white/5">
<div className="grid grid-cols-2 gap-2">
<div className="p-2 bg-zinc-900/30 rounded border border-white/5">
<span className="block text-[9px] text-zinc-500 mb-1">
                  Sales Velocity
                </span>
<span className="block text-[10px] font-mono text-zinc-300">
                  1 / Day
                </span>
</div>
<div className="p-2 bg-zinc-900/30 rounded border border-white/5">
<span className="block text-[9px] text-zinc-500 mb-1">
                  Cost Per Lead
                </span>
<span className="block text-[10px] font-mono text-zinc-300">
                  $14.00
                </span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="md:col-span-2 glass-card rounded-xl p-6 relative overflow-hidden group" style={{-CardX: '345.34375px', -CardY: '1299px'}}>
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-3xl rounded-full pointer-events-none -mr-10 -mt-10"></div>
<div className="relative z-10 flex justify-between items-end">
<div>
<h2 className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Est. Monthly Budget
                </h2>
<div className="flex items-baseline gap-2">
<span className="text-4xl font-mono font-medium text-white tracking-tighter" id="total-budget">
                    $22,907.62
                  </span>
<span className="text-[10px] text-zinc-500 font-mono">USD</span>
</div>
</div>
<div className="text-right">
<div className="text-[10px] text-zinc-500 mb-1">Lead Spend</div>
<div className="text-sm font-mono text-indigo-300" id="lead-spend">
                  $13,860.00
                </div>
</div>
</div>
</div>

<div className="glass-card p-4 rounded-lg" style={{-CardX: '345.34375px', -CardY: '1169px'}}>
<div className="flex items-center gap-2 mb-2 text-zinc-500">
<iconify-icon icon="solar:fire-linear" width="16"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-wider">
                Daily Burn Rate
              </span>
</div>
<div className="text-lg font-mono text-zinc-200" id="daily-burn">
              $1,041.26
            </div>
</div>
<div className="glass-card p-4 rounded-lg" style={{-CardX: '-20.328125px', -CardY: '1169px'}}>
<div className="flex items-center gap-2 mb-2 text-zinc-500">
<iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-wider">
                Cost per Agent
              </span>
</div>
<div className="text-lg font-mono text-zinc-200" id="cost-per-agent">
              $2,290.76
            </div>
</div>

<div className="md:col-span-2 glass-card p-4 rounded-lg flex flex-col justify-center" style={{-CardX: '345.34375px', -CardY: '1067px'}}>
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] font-medium text-zinc-400">
                Fixed vs Variable Composition
              </span>
<span className="text-[10px] font-mono text-zinc-500" id="comp-total">
                $22,907.62
              </span>
</div>
<div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden flex">
<div className="bg-zinc-600 h-full" style={{width: '39.5%'}}></div>

<div className="bg-indigo-500 h-full" id="bar-lead-spend" style={{width: '60.503885%'}}></div>
</div>
<div className="flex justify-between mt-1.5">
<span className="text-[9px] text-zinc-600">Fixed Platform</span>
<span className="text-[9px] text-indigo-400/70">Variable Leads</span>
</div>
</div>
</div>
</div>

<div className="relative py-8 animate-in d-3 z-10">
<div aria-hidden="true" className="absolute inset-0 flex items-center">
<div className="w-full border-t border-dashed border-white/10"></div>
</div>
<div className="relative flex justify-center">
<span className="bg-[#09090b] px-3 text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
            Compensation Analysis
          </span>
</div>
</div>

<header className="mb-8 animate-in d-3 max-w-2xl relative z-10">
<h2 className="text-2xl font-medium text-zinc-100 tracking-tight mb-2">
          Commission Calculator
        </h2>
<p className="text-[13px] leading-relaxed text-zinc-400 mb-4 max-w-xl">
          Model personal production advances and downline override spreads based
          on your specific plan mix and rank.
        </p>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in d-3 relative z-10 mb-8">

<div className="lg:col-span-4 space-y-4">

<div className="p-5 glass-card rounded-xl space-y-5" style={{-CardX: '715px', -CardY: '744px'}}>
<div className="flex items-center justify-between border-b border-white/5 pb-3">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:crown-linear"></iconify-icon>
<h2 className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wide">
                  Rank &amp; Plan
                </h2>
</div>
<div className="flex items-center gap-2">
<span className="text-[9px] text-zinc-500 uppercase tracking-wide">
                  Basic
                </span>
<input checked="" className="toggle-checkbox" id="tierToggle" type="checkbox"/>
<label className="toggle-label" htmlFor="tierToggle"></label>
<span className="text-[9px] text-white font-medium uppercase tracking-wide">
                  Elite
                </span>
</div>
</div>

<div className="space-y-1.5">
<label className="text-[10px] text-zinc-400 uppercase tracking-wide">
                Your Level
              </label>
<div className="relative group">
<select className="w-full bg-zinc-900/50 border border-white/10 group-hover:border-zinc-700 text-[11px] text-zinc-200 rounded px-2 py-2 appearance-none focus:outline-none focus:border-indigo-500/50 transition-colors cursor-pointer font-sans" id="userRank">
<option value="Associate">Associate</option>
<option value="Sr. Associate">Sr. Associate</option>
<option value="Manager">Manager</option>
<option value="Sr. Manager">Sr. Manager</option>
<option value="Director">Director</option>
<option value="Sr. Director">Sr. Director</option>
<option selected="" value="Executive Director">
                    Executive Director
                  </option>
<option value="Bronze ED">Bronze ED</option>
<option value="Silver ED">Silver ED</option>
<option value="Gold ED">Gold ED</option>
<option value="Platinum ED">Platinum ED</option>
<option value="Double Platinum ED">Double Platinum ED</option>
<option value="Triple Platinum ED">Triple Platinum ED</option>
<option value="Platinum Elite">Platinum Elite</option>
<option value="Diamond ED">Diamond ED</option>
</select>
<iconify-icon className="absolute right-2 top-3 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>

<div className="space-y-1.5">
<label className="text-[10px] text-zinc-400 uppercase tracking-wide">
                Plan Type
              </label>
<div className="relative group">
<select className="w-full bg-zinc-900/50 border border-white/10 group-hover:border-zinc-700 text-[11px] text-zinc-200 rounded px-2 py-2 appearance-none focus:outline-none focus:border-indigo-500/50 transition-colors cursor-pointer font-sans truncate pr-6" id="planSelect">
<optgroup label="LegalShield">
<option value="ls_2995">$29.95 LegalShield</option>
<option value="ls_3795">$37.95 LegalShield</option>
<option value="ls_4995">$49.95 LegalShield</option>
</optgroup>
<optgroup label="IDShield">
<option value="id_1495">$14.95 IDShield</option>
<option value="id_1995">$19.95 IDShield</option>
<option value="id_2995">$29.95 IDShield</option>
<option value="id_3495">$34.95 IDShield</option>
</optgroup>
<optgroup label="Specialty">
<option value="cdlp_3995">$39.95 CDLP</option>
</optgroup>
<optgroup label="Combos">
<option value="bun_4490">$44.90 Combo</option>
<option value="bun_4990">$49.90 Combo</option>
<option value="bun_5290">$52.90 Combo</option>
<option value="bun_5790">$57.90 Combo</option>
<option value="bun_5990">$59.90 Combo</option>
<option value="bun_6490">$64.90 Combo</option>
<option value="bun_6790">$67.90 Combo</option>
<option value="bun_6990">$69.90 Combo</option>
<option value="bun_7290">$72.90 Combo</option>
<option value="bun_7990">$79.90 Combo</option>
<option value="bun_8490">$84.90 Combo</option>
</optgroup>
</select>
<iconify-icon className="absolute right-2 top-3 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>

<div className="space-y-3 pt-2 border-t border-dashed border-white/10">
<div className="flex justify-between items-end">
<label className="text-[10px] text-zinc-300 font-medium">
                  Personal Sales
                </label>
<input className="w-12 bg-zinc-900 border border-white/10 text-right text-[10px] font-mono text-white rounded px-1 py-0.5 focus:border-indigo-500 focus:outline-none" id="personalSalesInput" type="number" value="10"/>
</div>
<input className="w-full" id="personalSalesSlider" max="100" min="0" step="1" style={{background: 'linear-gradient(to right, rgb(99, 102, 241) 10%, rgb(39, 39, 42) 10%)'}} type="range" value="10"/>
</div>
</div>


<div className="p-5 glass-card rounded-xl space-y-4" style={{-CardX: '715px', -CardY: '218px'}}>
<div className="flex items-center gap-2 border-b border-white/5 pb-3 mb-2">
<iconify-icon className="text-zinc-500" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h2 className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wide">
                Team Production
              </h2>
</div>
<div className="space-y-3 max-h-[320px] overflow-y-auto pr-2" id="teamInputsContainer">
<div className="flex justify-between items-center bg-zinc-900/30 p-2 rounded border border-white/5">
<label className="text-[10px] text-zinc-400 font-medium">
                  Associate
                </label>
<div className="flex items-center gap-2">
<span className="text-[9px] text-zinc-600 uppercase">Sales</span>
<input className="team-input w-12 bg-zinc-800 border border-white/10 text-center text-[10px] text-white rounded px-1 py-0.5 focus:border-emerald-500 focus:outline-none transition-colors" data-rank="Associate" min="0" type="number" value="0"/>
</div>
</div>
<div className="flex justify-between items-center bg-zinc-900/30 p-2 rounded border border-white/5">
<label className="text-[10px] text-zinc-400 font-medium">
                  Sr. Associate
                </label>
<div className="flex items-center gap-2">
<span className="text-[9px] text-zinc-600 uppercase">Sales</span>
<input className="team-input w-12 bg-zinc-800 border border-white/10 text-center text-[10px] text-white rounded px-1 py-0.5 focus:border-emerald-500 focus:outline-none transition-colors" data-rank="Sr. Associate" min="0" type="number" value="0"/>
</div>
</div>
<div className="flex justify-between items-center bg-zinc-900/30 p-2 rounded border border-white/5">
<label className="text-[10px] text-zinc-400 font-medium">
                  Manager
                </label>
<div className="flex items-center gap-2">
<span className="text-[9px] text-zinc-600 uppercase">Sales</span>
<input className="team-input w-12 bg-zinc-800 border border-white/10 text-center text-[10px] text-white rounded px-1 py-0.5 focus:border-emerald-500 focus:outline-none transition-colors" data-rank="Manager" min="0" type="number" value="0"/>
</div>
</div>
<div className="flex justify-between items-center bg-zinc-900/30 p-2 rounded border border-white/5">
<label className="text-[10px] text-zinc-400 font-medium">
                  Sr. Manager
                </label>
<div className="flex items-center gap-2">
<span className="text-[9px] text-zinc-600 uppercase">Sales</span>
<input className="team-input w-12 bg-zinc-800 border border-white/10 text-center text-[10px] text-white rounded px-1 py-0.5 focus:border-emerald-500 focus:outline-none transition-colors" data-rank="Sr. Manager" min="0" type="number" value="0"/>
</div>
</div>
<div className="flex justify-between items-center bg-zinc-900/30 p-2 rounded border border-white/5">
<label className="text-[10px] text-zinc-400 font-medium">
                  Director
                </label>
<div className="flex items-center gap-2">
<span className="text-[9px] text-zinc-600 uppercase">Sales</span>
<input className="team-input w-12 bg-zinc-800 border border-white/10 text-center text-[10px] text-white rounded px-1 py-0.5 focus:border-emerald-500 focus:outline-none transition-colors" data-rank="Director" min="0" type="number" value="0"/>
</div>
</div>
<div className="flex justify-between items-center bg-zinc-900/30 p-2 rounded border border-white/5">
<label className="text-[10px] text-zinc-400 font-medium">
                  Sr. Director
                </label>
<div className="flex items-center gap-2">
<span className="text-[9px] text-zinc-600 uppercase">Sales</span>
<input className="team-input w-12 bg-zinc-800 border border-white/10 text-center text-[10px] text-white rounded px-1 py-0.5 focus:border-emerald-500 focus:outline-none transition-colors" data-rank="Sr. Director" min="0" type="number" value="0"/>
</div>
</div>
<div className="flex justify-between items-center bg-zinc-900/30 p-2 rounded border border-white/5">
<label className="text-[10px] text-zinc-400 font-medium">
                  Executive Director
                </label>
<div className="flex items-center gap-2">
<span className="text-[9px] text-zinc-600 uppercase">Sales</span>
<input className="team-input w-12 bg-zinc-800 border border-white/10 text-center text-[10px] text-white rounded px-1 py-0.5 focus:border-emerald-500 focus:outline-none transition-colors" data-rank="Executive Director" min="0" type="number" value="0"/>
</div>
</div>
</div>
</div>

<div className="p-4 glass-card rounded-xl space-y-3" style={{-CardX: '715px', -CardY: '-230px'}}>
<div className="flex justify-between items-center">
<h2 className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wide">
                Risk &amp; Retention
              </h2>
<span className="text-[9px] font-mono text-amber-500 bg-amber-500/10 px-1.5 rounded" id="riskDisplay">
                15% CB
              </span>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[9px] text-zinc-500">
<span>Chargeback Rate</span>
</div>
<input className="w-full" id="cbSlider" max="40" min="0" step="1" style={{background: 'linear-gradient(to right, #f59e0b 37.5%, #27272a 37.5%)'}} type="range" value="15"/>
</div>
</div>
</div>

<div className="lg:col-span-8 space-y-4">

<div className="glass-card rounded-xl p-8 relative overflow-hidden flex flex-col justify-center min-h-[180px] border border-indigo-500/20" style={{-CardX: '345.34375px', -CardY: '744px'}}>
<div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none -mr-20 -mt-20"></div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<h3 className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider mb-1">
                  Total Net Commission
                </h3>
<p className="text-[10px] text-zinc-500 mb-3">
                  Estimated monthly payout after chargeback reserve.
                </p>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-mono font-medium text-white tracking-tighter" id="totalNet">
                    $11,254.00
                  </span>
<span className="text-sm font-mono text-zinc-500">USD</span>
</div>
</div>
<div className="flex flex-col justify-end items-end space-y-4">
<div className="text-right">
<span className="block text-[10px] text-zinc-500 uppercase tracking-wide">
                    Eff. Earnings / Sale
                  </span>
<span className="text-xl font-mono text-zinc-200" id="effEarnings">
                    $1,125.40
                  </span>
</div>
<div className="text-right">
<span className="block text-[10px] text-zinc-500 uppercase tracking-wide">
                    Est. Chargebacks
                  </span>
<span className="text-base font-mono text-amber-500/80" id="estChargebacks">
                    -$1,986.00
                  </span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="glass-card p-5 rounded-xl border-l-2 border-l-indigo-500" style={{-CardX: '345.34375px', -CardY: '548px'}}>
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">
                  Personal Income
                </span>
<iconify-icon className="text-indigo-500" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div className="text-2xl font-mono text-white tracking-tight" id="personalGross">
                $13,240.00
              </div>
<div className="mt-2 text-[10px] text-zinc-600">
<span className="text-zinc-400 font-mono" id="personalCountDisplay">
                  10
                </span>
                Sales @
                <span className="text-zinc-400 font-mono" id="personalRateDisplay">
                  $1,324.00
                </span>
</div>
</div>
<div className="glass-card p-5 rounded-xl border-l-2 border-l-emerald-500" style={{-CardX: '-20.328125px', -CardY: '548px'}}>
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">
                  Override Income
                </span>
<iconify-icon className="text-emerald-500" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="text-2xl font-mono text-white tracking-tight" id="overrideGross">
                $0.00
              </div>
<div className="mt-2 text-[10px] text-zinc-600">
                From
                <span className="text-zinc-400 font-mono" id="teamCountDisplay">
                  0
                </span>
                Downline Sales
              </div>
</div>
</div>

<div className="glass-card rounded-xl p-5" style={{-CardX: '345.34375px', -CardY: '411px'}}>
<div className="flex items-center justify-between mb-4">
<h3 className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wide">
                Override Breakdown
              </h3>
<span className="text-[9px] text-zinc-500 italic">
                * Spread = Your Adv. - Downline Adv.
              </span>
</div>
<div className="overflow-x-auto">
<table className="w-full data-table text-left">
<thead>
<tr>
<th width="30%">Downline Level</th>
<th width="20%">Sales Vol</th>
<th width="25%">Spread</th>
<th className="text-right" width="25%">Total Override</th>
</tr>
</thead>
<tbody id="overrideTableBody">
<tr>
<td className="text-center text-zinc-600 italic py-4" colspan="4">
                      No downline sales entered.
                    </td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-6 relative overflow-hidden z-10 animate-in d-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 group">
<div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-zinc-100 tracking-tight mb-1">
            Platform Charges &amp; Fees
          </h3>
<p className="text-[13px] text-zinc-400 max-w-lg">
            Ready to move forward? Review the comprehensive breakdown of
            platform costs and operational charges.
          </p>
</div>
<a className="relative z-10 inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-[11px] font-medium text-zinc-200 border border-white/10 rounded transition-colors group-hover:text-white group-hover:border-white/20" href="overview-3">
          View Charges
          <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
<footer className="animate-in z-10 text-center border-white/5 border-t mt-4 pt-6 relative pb-4 d-5">
<p className="text-[10px] text-zinc-600">
          For planning purposes only. Commissions are subject to plan rules,
          retention requirements, and chargeback policies.
          <br/>
          Advance rates are estimates based on the selected tier structure.
          Forecast based on 4.5 sales per recruit.
        </p>
</footer>




</main>

    </>
  );
}
