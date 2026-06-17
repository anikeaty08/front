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



    // Smooth scroll helper
    function scrollToSection(id) {
      const el = document.getElementById(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const offset = window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo({
        top: rect.top + offset - 70,
        behavior: 'smooth'
      });
    }

    // Year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Core pricing assumptions
    const CHATGPT_SEAT_PRICE = 40; // per user per month
    const RELEVANCE_BASE_ANNUAL = 80000; // base annual platform fee (incl. $20K LLM)
    const INCLUDED_LLM_ANNUAL = 20000; // bundled LLM usage inside the platform fee

    // Usage profiles (per user per year) based on GPT‑4o / Claude Sonnet mix
    const USAGE_LEVELS = {
      low: 18,
      medium: 48,
      high: 96
    };

    let currentUsageLevel = 'medium';

    function formatCurrency(value) {
      return '$' + value.toLocaleString('en-US', { maximumFractionDigits: 0 });
    }

    function usageLabel(level) {
      if (level === 'low') return 'Low usage (≈3 chats/day)';
      if (level === 'high') return 'High usage (≈20 chats/day)';
      return 'Medium usage (≈8 chats/day)';
    }

    // Update calculator based on employees + usage
    function updateCalculator(employees) {
      const usagePerEmployee = USAGE_LEVELS[currentUsageLevel] || USAGE_LEVELS.medium;

      const chatAnnual = employees * CHATGPT_SEAT_PRICE * 12;

      // Total LLM usage cost at list pricing
      const relUsageAnnualGross = employees * usagePerEmployee;
      // Apply included $20K first
      const relUsageAnnualExtra = Math.max(relUsageAnnualGross - INCLUDED_LLM_ANNUAL, 0);

      const relAnnual = RELEVANCE_BASE_ANNUAL + relUsageAnnualExtra;
      const savingsAnnual = Math.max(chatAnnual - relAnnual, 0);
      const savings3yr = savingsAnnual * 3;

      // Main calculator
      const employeesDisplay = document.getElementById('employeesDisplay');
      const chatgptCost = document.getElementById('chatgptCost');
      const relevanceCost = document.getElementById('relevanceCost');
      const annualSavings = document.getElementById('annualSavings');
      const threeYearSavings = document.getElementById('threeYearSavings');
      const chatgptSeats = document.getElementById('chatgptSeats');
      const relevanceBreakdown = document.getElementById('relevanceBreakdown');

      if (employeesDisplay) employeesDisplay.textContent = employees;
      if (chatgptCost) chatgptCost.textContent = formatCurrency(chatAnnual);
      if (relevanceCost) relevanceCost.textContent = formatCurrency(relAnnual);
      if (annualSavings) annualSavings.textContent = formatCurrency(savingsAnnual);
      if (threeYearSavings) threeYearSavings.textContent = formatCurrency(savings3yr);
      if (chatgptSeats) chatgptSeats.textContent = employees;
      if (relevanceBreakdown) {
        relevanceBreakdown.textContent =
          formatCurrency(RELEVANCE_BASE_ANNUAL) + ' platform (incl. ' +
          formatCurrency(INCLUDED_LLM_ANNUAL) + ' LLM) + ' +
          formatCurrency(relUsageAnnualExtra) + ' extra API';
      }

      // Strips
      const calcChatStrip = document.getElementById('calcChatStrip');
      const calcRelStrip = document.getElementById('calcRelStrip');
      const total = chatAnnual + relAnnual;
      const ratio = total === 0 ? 0 : Math.min((chatAnnual / total) * 100, 100);
      if (calcChatStrip) calcChatStrip.style.width = ratio + '%';
      if (calcRelStrip) calcRelStrip.style.width = (100 - ratio) + '%';

      // Hero mini-calculator
      const heroEmployeesLabel = document.getElementById('heroEmployeesLabel');
      const heroChatCost = document.getElementById('heroChatCost');
      const heroRelCost = document.getElementById('heroRelCost');
      const heroSavings3yr = document.getElementById('heroSavings3yr');
      const heroChatStrip = document.getElementById('heroChatStrip');
      const heroRelStrip = document.getElementById('heroRelStrip');
      const heroUsageBreakdown = document.getElementById('heroUsageBreakdown');
      const heroUsageLabel = document.getElementById('heroUsageLabel');

      if (heroEmployeesLabel) heroEmployeesLabel.textContent = employees;
      if (heroChatCost) heroChatCost.textContent = formatCurrency(chatAnnual);
      if (heroRelCost) heroRelCost.textContent = formatCurrency(relAnnual);
      if (heroSavings3yr) heroSavings3yr.textContent = formatCurrency(savings3yr);
      if (heroChatStrip) heroChatStrip.style.width = ratio + '%';
      if (heroRelStrip) heroRelStrip.style.width = (100 - ratio) + '%';
      if (heroUsageBreakdown) {
        heroUsageBreakdown.textContent =
          formatCurrency(RELEVANCE_BASE_ANNUAL) + ' platform (incl. ' +
          formatCurrency(INCLUDED_LLM_ANNUAL) + ' LLM) + ' +
          formatCurrency(relUsageAnnualExtra) + ' extra API';
      }
      if (heroUsageLabel) heroUsageLabel.textContent = usageLabel(currentUsageLevel);
    }

    const employeesInput = document.getElementById('employees');
    const heroEmployeesInput = document.getElementById('heroEmployees');
    const usageSelector = document.getElementById('usageSelector');
    const usageLevelLabel = document.getElementById('usageLevelLabel');
    const heroUsageSelector = document.getElementById('heroUsageSelector');

    function syncEmployees(value) {
      const employees = Number(value);
      if (!Number.isFinite(employees)) return;
      if (employeesInput) employeesInput.value = employees;
      if (heroEmployeesInput) heroEmployeesInput.value = employees;
      updateCalculator(employees);
    }

    if (employeesInput) {
      employeesInput.addEventListener('input', (e) => syncEmployees(e.target.value));
    }
    if (heroEmployeesInput) {
      heroEmployeesInput.addEventListener('input', (e) => syncEmployees(e.target.value));
    }

    function setUsageLevel(level) {
      currentUsageLevel = level;

      // Update pill styles (main)
      if (usageSelector) {
        usageSelector.querySelectorAll('.usage-pill').forEach((pill) => {
          pill.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
          pill.classList.add('text-slate-600');
        });
        const active = usageSelector.querySelector('[data-usage="' + level + '"]');
        if (active) {
          active.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
          active.classList.remove('text-slate-600');
        }
      }

      // Update pill styles (hero)
      if (heroUsageSelector) {
        heroUsageSelector.querySelectorAll('.hero-usage-pill').forEach((pill) => {
          pill.classList.remove('bg-white/10', 'text-white', 'shadow-sm');
          pill.classList.add('text-white/70');
        });
        const activeHero = heroUsageSelector.querySelector('[data-usage="' + level + '"]');
        if (activeHero) {
          activeHero.classList.add('bg-white/10', 'text-white', 'shadow-sm');
          activeHero.classList.remove('text-white/70');
        }
      }

      if (usageLevelLabel) {
        usageLevelLabel.textContent = usageLabel(level);
      }

      syncEmployees(employeesInput ? employeesInput.value || 500 : 500);
    }

    if (usageSelector) {
      usageSelector.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-usage]');
        if (!btn) return;
        setUsageLevel(btn.getAttribute('data-usage'));
      });
    }
    if (heroUsageSelector) {
      heroUsageSelector.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-usage]');
        if (!btn) return;
        setUsageLevel(btn.getAttribute('data-usage'));
      });
    }

    // Initial state
    setUsageLevel('medium');

    // Simple mock submit handlers (prevent page reload)
    const roiForm = document.getElementById('roiForm');
    if (roiForm) {
      roiForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const btn = this.querySelector('button[type="submit"]');
        if (!btn) return;
        const original = btn.textContent;
        btn.disabled = true;
        btn.textContent = 'Sent!';
        setTimeout(() => {
          btn.disabled = false;
          btn.textContent = original;
        }, 2200);
      });
    }

    const demoForm = document.getElementById('demoForm');
    if (demoForm) {
      demoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const btn = this.querySelector('button[type="submit"]');
        if (!btn) return;
        const original = btn.textContent;
        btn.disabled = true;
        btn.textContent = 'Request received';
        setTimeout(() => {
          btn.disabled = false;
          btn.textContent = original;
        }, 2500);
      });
    }

    // Cost chart (ChatGPT vs Relevance AI) using medium usage assumption and bundled $20K
    const ctx = document.getElementById('costChart');
    if (ctx && window.Chart) {
      const labels = [100, 250, 500, 750, 1000, 1500, 2000];
      const chatData = labels.map(n => n * CHATGPT_SEAT_PRICE * 12);
      const usagePerEmployeeMedium = USAGE_LEVELS.medium;

      const relData = labels.map(n => {
        const grossUsage = n * usagePerEmployeeMedium;
        const extraUsage = Math.max(grossUsage - INCLUDED_LLM_ANNUAL, 0);
        return RELEVANCE_BASE_ANNUAL + extraUsage;
      });

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels.map(l => l + ' employees'),
          datasets: [
            {
              label: 'ChatGPT per-seat',
              data: chatData,
              borderColor: '#fb7185',
              backgroundColor: 'rgba(248, 113, 113, 0.09)',
              tension: 0.3,
              borderWidth: 2,
              pointRadius: 2.5,
              pointBackgroundColor: '#fb7185',
            },
            {
              label: 'Relevance AI platform + API (incl. $20K LLM)',
              data: relData,
              borderColor: '#6c5ce7',
              backgroundColor: 'rgba(129, 140, 248, 0.09)',
              tension: 0.1,
              borderDash: [5, 5],
              borderWidth: 2,
              pointRadius: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: (ctx) => `${ctx.dataset.label}: ${formatCurrency(ctx.parsed.y)}/year`,
              },
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                font: {
                  size: 10,
                },
              },
            },
            y: {
              grid: {
                color: 'rgba(148, 163, 184, 0.2)',
              },
              ticks: {
                callback: (value) => '$' + (value / 1000) + 'k',
                font: {
                  size: 10,
                },
              },
            },
          },
        },
      });
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
      
<div className="min-h-screen flex flex-col bg-[#0f1014]">

<div className="pointer-events-none fixed inset-0 opacity-[0.045]">
<div className="w-full h-full" style="
        background-image: linear-gradient(#272937 1px, transparent 1px), linear-gradient(90deg, #272937 1px, transparent 1px);
        background-size: 32px 32px;
        ">
</div>
</div>

<header className="relative z-20 border-b border-white/5 bg-[#0f1014]/80 backdrop-blur">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">

<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#8861ff] via-[#6c5ce7] to-[#d4c6ff] flex items-center justify-center shadow-lg shadow-purple-500/40">
<span className="text-xs font-semibold tracking-tight" style={{fontFamily: '\'Outfit\', system-ui'}}>RA</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight" style={{fontFamily: '\'Outfit\', system-ui'}}>Relevance AI</span>
<span className="text-[10px] uppercase tracking-[0.18em] text-white/40">Cost-First AI Platform</span>
</div>
</div>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
<a className="hover:text-white transition-colors" href="#calculator">ROI Calculator</a>
<a className="hover:text-white transition-colors" href="#features">Platform</a>
<a className="hover:text-white transition-colors" href="#comparison">Comparison</a>
<a className="hover:text-white transition-colors" href="#security">Security</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it works</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex px-3.5 py-2 rounded-full border border-white/15 text-xs font-medium text-white/80 hover:text-white hover:border-white/50 hover:bg-white/5 transition transform hover:-translate-y-0.5" onclick="scrollToSection('demo-final')">
            Book a demo
          </button>
<button className="inline-flex px-4 py-2 rounded-full bg-[#6c5ce7] text-xs font-medium text-white shadow-lg shadow-purple-500/30 hover:bg-[#7c6cff] hover:shadow-purple-500/50 transition transform hover:-translate-y-0.5" onclick="scrollToSection('calculator')">
            Calculate your savings
          </button>
</div>
</div>
</header>
<main className="relative z-10 flex-1">

<section className="relative" id="top">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-[#6c5ce7]/30 blur-3xl opacity-70"></div>
<div className="absolute -bottom-40 -left-10 w-80 h-80 rounded-full bg-[#8861ff]/25 blur-3xl opacity-70"></div>
</div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-20 lg:pb-28 grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-12 items-center">

<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-6">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="text-[11px] uppercase tracking-[0.18em] text-white/60">Enterprise LLM cost optimizer</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-[3.15rem] font-semibold tracking-tight mb-4" style={{fontFamily: '\'Outfit\', system-ui'}}>
<span className="block mb-1 text-[0.8rem] uppercase tracking-[0.24em] text-white/40">ChatGPT Alternative for Enterprise</span>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8861ff] via-[#c4b5ff] to-[#d4c6ff]">
                Stop Paying Per Seat for AI
              </span>
</h1>
<p className="text-base sm:text-lg text-white/70 max-w-xl mb-6">
              Companies with 250+ employees save <span className="text-white font-medium">$160K–$400K+ per year</span> by switching from ChatGPT’s $40/seat pricing to Relevance AI’s usage-based model.
            </p>

<div className="flex flex-wrap gap-3 mb-7 text-[13px] text-white/70">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
<span className="h-1.5 w-1.5 rounded-[3px] bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.25)]"></span>
<span>Usage-based · Not per seat</span>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
<span className="h-1.5 w-1.5 rounded-[3px] bg-[#6c5ce7]"></span>
<span>BYO API keys · Any LLM provider</span>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
<span className="h-1.5 w-1.5 rounded-[3px] bg-[#f97316]"></span>
<span>Break-even at ~250 employees</span>
</div>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
<button className="inline-flex justify-center items-center px-5 py-3 rounded-full bg-[#6c5ce7] text-sm font-medium text-white shadow-lg shadow-purple-500/40 hover:bg-[#7c6cff] hover:shadow-purple-500/60 transition transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c4b5ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1014]" onclick="scrollToSection('calculator')">
<span>Calculate your savings</span>
<svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M13 6l6 6-6 6"></path>
</svg>
</button>
<button className="inline-flex justify-center items-center px-5 py-3 rounded-full border border-white/20 text-sm font-medium text-white/80 hover:text-white hover:border-white/60 hover:bg-white/5 transition transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1014]" onclick="scrollToSection('demo-final')">
<span>Book a demo</span>
</button>
</div>
<p className="text-xs text-white/50 flex items-center gap-2">
<span className="inline-flex items-center gap-1">
<span className="relative inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/5 border border-white/15">

<svg className="h-3 w-3 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s7-4 7-10V5l-7-3-7 3v7c0 6 7 10 7 10z"></path>
<path d="M9 12l2 2 4-4"></path>
</svg>
</span>
<span>SOC 2-ready · GDPR aligned · SSO &amp; Audit logs</span>
</span>
</p>
</div>

<div className="relative">
<div className="absolute -top-6 -right-4 w-24 h-6 rounded-full border border-emerald-400/40 bg-emerald-400/10 flex items-center justify-center text-[11px] text-emerald-200 uppercase tracking-[0.18em]">
<span className="leading-none">Live ROI Engine</span>
</div>
<div className="relative rounded-2xl border border-white/10 bg-[#11121a]/80 backdrop-blur shadow-[0_18px_45px_rgba(15,23,42,0.65)] overflow-hidden">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-gradient-to-r from-white/5 via-white/0 to-white/5">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#1e1f2b] border border-white/10">

<svg className="h-3.5 w-3.5 text-[#c4b5ff]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="6" rx="1" width="6" x="9" y="9"></rect>
<path d="M9 1v3"></path><path d="M15 1v3"></path>
<path d="M9 20v3"></path><path d="M15 20v3"></path>
<path d="M20 9h3"></path><path d="M20 15h3"></path>
<path d="M1 9h3"></path><path d="M1 15h3"></path>
</svg>
</span>
<div className="flex flex-col">
<span className="text-xs font-medium tracking-tight text-white/90 leading-snug" style={{fontFamily: '\'Outfit\', system-ui'}}>Seat &amp; Usage Simulator</span>
<span className="text-[10px] text-white/50 leading-snug">ChatGPT vs Relevance AI</span>
</div>
</div>
<div className="flex items-center gap-1.5">
<span className="h-1.5 w-8 rounded-full bg-gradient-to-r from-emerald-400 to-[#6c5ce7]"></span>
<span className="h-1.5 w-1.5 rounded-[3px] bg-emerald-400 shadow-[0_0_0_3px_rgba(16,185,129,0.35)]"></span>
</div>
</div>
<div className="p-5 space-y-5">

<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-[0.16em] text-white/50">Company size</span>
<span className="text-xs text-white/70">
<span className="font-medium text-white" id="heroEmployeesLabel">500</span> employees
                    </span>
</div>
<div className="flex items-center gap-3">
<span className="text-[11px] text-white/40">50</span>
<input className="w-full h-1.5 rounded-full appearance-none bg-white/10 cursor-pointer accent-[#6c5ce7]" id="heroEmployees" max="2000" min="50" step="10" style={{accentColor: '#6c5ce7'}} type="range" value="500"/>
<span className="text-[11px] text-white/40">2000</span>
</div>
<div className="h-1.5 w-full rounded-[5px] bg-black/30 border border-white/5 flex overflow-hidden">
<div className="bg-[#ef4444]/80" id="heroChatStrip" style={{width: '65%'}}></div>
<div className="bg-[#10b981]/80 flex-1" id="heroRelStrip"></div>
</div>
<div className="flex justify-between text-[10px] uppercase tracking-[0.16em] text-white/40">
<span className="leading-none">ChatGPT cost</span>
<span className="leading-none">Relevance AI cost</span>
</div>
</div>

<div className="space-y-1.5">
<div className="flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[0.16em] text-white/50">Usage level</span>
<span className="text-[11px] text-white/70 leading-snug" id="heroUsageLabel">
                      Medium usage assumption
                    </span>
</div>
<div className="inline-flex rounded-full border border-white/10 bg-white/5 p-0.5 text-[11px]" id="heroUsageSelector">
<button className="hero-usage-pill px-2.5 py-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition" data-usage="low" type="button">
                      Low
                    </button>
<button className="hero-usage-pill px-2.5 py-1 rounded-full bg-white/10 text-white shadow-sm" data-usage="medium" type="button">
                      Medium
                    </button>
<button className="hero-usage-pill px-2.5 py-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition" data-usage="high" type="button">
                      High
                    </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
<div className="rounded-xl border border-[#ef4444]/40 bg-[#1b1113]/80 px-3 py-2.5">
<div className="flex items-center justify-between mb-1">
<span className="text-[10px] uppercase tracking-[0.16em] text-[#fecaca] leading-none">ChatGPT</span>
<span className="inline-flex items-center gap-1 text-[10px] text-[#fecaca] leading-none">
<span className="h-1.5 w-1.5 rounded-[3px] bg-[#ef4444]"></span>$40/seat
                      </span>
</div>
<p className="text-xs text-white/80 leading-snug">Annual cost</p>
<p className="mt-1 text-sm font-semibold tracking-tight text-[#fee2e2] leading-none" id="heroChatCost">$240,000</p>
</div>
<div className="rounded-xl border border-emerald-400/40 bg-[#071913]/ px-3 py-2.5">
<div className="flex items-center justify-between mb-1">
<span className="text-[10px] uppercase tracking-[0.16em] text-emerald-200 leading-none">Relevance AI</span>
<span className="inline-flex items-center gap-1 text-[10px] text-emerald-200 leading-none">
<span className="h-1.5 w-1.5 rounded-[3px] bg-emerald-400"></span>Platform + usage
                      </span>
</div>
<p className="text-xs text-white/80 leading-snug">Annual platform + LLM</p>
<p className="mt-1 text-sm font-semibold tracking-tight text-emerald-200 leading-none" id="heroRelCost">$88,160</p>
<p className="mt-0.5 text-[10px] text-emerald-300/80 leading-snug" id="heroUsageBreakdown">
                      $80K platform (incl. $20K LLM) + $8,160 additional API
                    </p>
</div>
<div className="rounded-xl border border-[#6c5ce7]/50 bg-[#151227]/80 px-3 py-2.5">
<div className="flex items-center justify-between mb-1">
<span className="text-[10px] uppercase tracking-[0.16em] text-[#e0e7ff] leading-none">Your savings</span>
<span className="inline-flex items-center gap-1 text-[10px] text-[#e0e7ff] leading-none">

<svg className="h-3 w-3 text-[#c4b5ff]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
<polyline points="17 6 23 6 23 12"></polyline>
</svg>
                        3-year
                      </span>
</div>
<p className="text-xs text-white/80 leading-snug">3-year savings</p>
<p className="mt-1 text-sm font-semibold tracking-tight text-[#e5e7ff] leading-none" id="heroSavings3yr">$480,000</p>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
<button className="inline-flex justify-center items-center px-3.5 py-2 rounded-xl bg-[#6c5ce7] text-xs font-medium text-white hover:bg-[#7c6cff] transition shadow-md shadow-purple-500/40 hover:shadow-purple-500/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c4b5ff]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#11121a]" onclick="scrollToSection('calculator')">
<span>See full ROI analysis</span>
<svg className="ml-1.5 h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M13 6l6 6-6 6"></path>
</svg>
</button>
<p className="text-[11px] text-white/50 leading-snug">
                    Includes Relevance platform fee, $20K of bundled LLM, and any extra API usage.
                  </p>
</div>
</div>
</div>

<div className="mt-4 flex flex-wrap gap-3 text-[11px] text-white/60">
<div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5">
<span className="h-1.5 w-1.5 rounded-[3px] bg-emerald-400"></span>
<span className="leading-snug"><span className="font-medium text-white">250+</span> employees: break-even</span>
</div>
<div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5">
<span className="h-1.5 w-1.5 rounded-[3px] bg-[#6c5ce7]"></span>
<span className="leading-snug"><span className="font-medium text-white">500</span> employees: save $150K+/yr*</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-[#f4f6fa] text-[#111827]" id="problem">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
<div className="grid lg:grid-cols-[1.1fr_minmax(0,1fr)] gap-10 items-start">
<div>
<h2 className="text-2xl sm:text-[1.7rem] font-semibold tracking-tight mb-4" style={{fontFamily: '\'Inter\', system-ui'}}>
                Sound Familiar?
              </h2>
<div className="relative rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
<div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#6c5ce7] via-[#8861ff] to-[#d4c6ff]"></div>
<div className="p-5 sm:p-6">
<div className="flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-slate-500 mb-3">

<svg className="h-3.5 w-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4"></path>
<path d="M17 17a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4"></path>
</svg>
<span className="leading-none">Enterprise prospect · 2024</span>
</div>
<p className="text-base sm:text-lg leading-relaxed text-slate-900 mb-3">
                    “We currently have a subscription with OpenAI, but we are kind of also looking at that as it gets very expensive at scale. We're looking at whether we go with more of a LibreChat or WebUI, with our own API keys.”
                  </p>
<p className="text-sm text-slate-500">
                    Enterprise Prospect, 2024
                  </p>
</div>
</div>
</div>
<div className="space-y-6">
<div className="grid sm:grid-cols-3 gap-4">

<div className="rounded-2xl border border-slate-200 bg-white p-4 flex flex-col gap-2 shadow-sm">
<div className="inline-flex items-center gap-2 text-sm font-medium text-slate-900">
<div className="h-7 w-7 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center">
<span className="text-lg">💸</span>
</div>
<span>Costs spiral with headcount</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                    $40 per user per month means every new hire increases your AI bill—even if they barely use it.
                  </p>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-4 flex flex-col gap-2 shadow-sm">
<div className="inline-flex items-center gap-2 text-sm font-medium text-slate-900">
<div className="h-7 w-7 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
<span className="text-lg">🔒</span>
</div>
<span>Locked into one LLM</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                    Tied to a single provider’s roadmap, pricing, and SLAs—even when better models or deals exist.
                  </p>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-4 flex flex-col gap-2 shadow-sm">
<div className="inline-flex items-center gap-2 text-sm font-medium text-slate-900">
<div className="h-7 w-7 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center">
<span className="text-lg">📊</span>
</div>
<span>No cost visibility</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                    Seat-based plans make it hard to answer basic questions: Who’s using AI, for what, and at what cost?
                  </p>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div className="text-sm text-slate-700">
<span className="font-medium text-slate-900">You’re not alone.</span> Most enterprises discover they’re overpaying for chat while under-investing in automation.
                </div>
<button className="inline-flex justify-center items-center px-4 py-2 rounded-full text-xs font-medium text-white bg-[#6c5ce7] hover:bg-[#7c6cff] transition shadow-sm hover:shadow md:whitespace-nowrap" onclick="scrollToSection('calculator')">
                  Run the numbers
                </button>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-[#e5e9f5]" id="calculator">
<div className="absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-[#f4f6fa] to-[#e5e9f5]"></div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
<div className="max-w-3xl mx-auto text-center mb-10">
<h2 className="text-2xl sm:text-[1.7rem] font-semibold tracking-tight text-[#111827] mb-3" style={{fontFamily: '\'Inter\', system-ui'}}>
              How Much Are You Overpaying?
            </h2>
<p className="text-sm sm:text-base text-slate-600">
              Use your real headcount to see the difference between ChatGPT’s per-seat plan and Relevance AI’s usage-based platform, including $20K of bundled LLM usage and any additional API spend.
            </p>
</div>
<div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] gap-8 items-start">

<div className="rounded-2xl border border-white/40 bg-white shadow-lg shadow-slate-300/40 overflow-hidden">

<div className="px-5 py-3 border-b border-slate-200 flex items-center justify-between bg-gradient-to-r from-[#6c5ce7]/10 via-white to-[#8861ff]/10">
<div className="flex items-center gap-2 text-xs text-slate-700">
<div className="flex -space-x-1.5">
<span className="h-1.5 w-6 rounded-full bg-emerald-400/80"></span>
<span className="h-1.5 w-4 rounded-full bg-amber-400/80"></span>
<span className="h-1.5 w-3 rounded-full bg-rose-400/80"></span>
</div>
<span className="uppercase tracking-[0.18em] text-[10px] text-slate-500 leading-none">
                    ROI calculator · Live
                  </span>
</div>
<div className="flex items-center gap-1 text-[10px] text-slate-500 leading-none">

<svg className="h-3.5 w-3.5 text-[#6c5ce7]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
</svg>
<span>Includes bundled &amp; extra LLM API usage</span>
</div>
</div>
<div className="p-5 sm:p-6 space-y-6">

<div className="space-y-3">
<div className="flex items-center justify-between flex-wrap gap-2">
<div>
<label className="block text-xs uppercase tracking-[0.16em] text-slate-500 mb-1 leading-none" htmlFor="employees">Number of employees</label>
<p className="text-sm text-slate-700 leading-snug">
                        Estimate how many people you’d give AI access to.
                      </p>
</div>
<div className="inline-flex items-baseline gap-1 text-sm leading-none">
<span className="text-lg font-semibold tracking-tight text-slate-900" id="employeesDisplay">500</span>
<span className="text-xs text-slate-500">employees</span>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-[11px] text-slate-500">50</span>
<input className="w-full h-2 rounded-full appearance-none bg-slate-200 cursor-pointer accent-[#6c5ce7]" id="employees" max="2000" min="50" step="10" style={{accentColor: '#6c5ce7'}} type="range" value="500"/>
<span className="text-[11px] text-slate-500">2000</span>
</div>
<div className="flex items-center justify-between text-[11px] text-slate-500">
<span className="leading-none">ChatGPT at $40/seat/month</span>
<span className="leading-none">Relevance AI: $80K incl. $20K LLM + extra usage</span>
</div>
<div className="h-2 w-full rounded-full bg-slate-100 border border-slate-200 flex overflow-hidden">
<div className="bg-rose-400" id="calcChatStrip" style={{width: '75%'}}></div>
<div className="bg-emerald-400 flex-1" id="calcRelStrip"></div>
</div>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between flex-wrap gap-2">
<div>
<p className="text-xs uppercase tracking-[0.16em] text-slate-500 mb-1 leading-none">LLM usage level</p>
<p className="text-xs text-slate-600 leading-snug">
                        Approximate how heavily employees will use AI each month.
                      </p>
</div>
<p className="text-xs font-medium text-slate-700 leading-snug" id="usageLevelLabel">
                      Medium usage (≈8 chats/day)
                    </p>
</div>
<div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1 text-xs" id="usageSelector">
<button className="usage-pill px-3 py-1 rounded-full text-slate-600 hover:text-slate-900 hover:bg-white transition" data-usage="low" type="button">
                      Low
                    </button>
<button className="usage-pill px-3 py-1 rounded-full bg-white text-slate-900 shadow-sm" data-usage="medium" type="button">
                      Medium
                    </button>
<button className="usage-pill px-3 py-1 rounded-full text-slate-600 hover:text-slate-900 hover:bg-white transition" data-usage="high" type="button">
                      High
                    </button>
</div>
<p className="text-[11px] text-slate-500 leading-snug">
                    Based on typical GPT‑4o/Claude Sonnet pricing. The first $20K of LLM usage is bundled into the $80K platform fee; additional usage is billed on top.
                  </p>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
<div className="rounded-xl border border-rose-100 bg-rose-50/80 p-3 flex flex-col gap-1">
<div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-rose-500 leading-none">
<span>ChatGPT cost</span>
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-[3px] bg-rose-400"></span>Annual
                      </span>
</div>
<p className="text-base font-semibold tracking-tight text-rose-800 leading-none mt-1" id="chatgptCost">$240,000</p>
<p className="text-[11px] text-rose-600 leading-snug">
                      Seats: <span id="chatgptSeats">500</span> · $40/mo
                    </p>
</div>
<div className="rounded-xl border border-emerald-100 bg-emerald-50/80 p-3 flex flex-col gap-1">
<div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-emerald-600 leading-none">
<span>Relevance AI</span>
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-[3px] bg-emerald-400"></span>Annual
                      </span>
</div>
<p className="text-base font-semibold tracking-tight text-emerald-800 leading-none mt-1" id="relevanceCost">$88,160</p>
<p className="text-[11px] text-emerald-600 leading-snug" id="relevanceBreakdown">
                      $80K platform (incl. $20K LLM) + $8,160 extra API
                    </p>
</div>
<div className="rounded-xl border border-indigo-100 bg-indigo-50/80 p-3 flex flex-col gap-1">
<div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-indigo-600 leading-none">
<span>Your savings</span>
<span className="inline-flex items-center gap-1">

<svg className="h-3 w-3 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
                        Annual
                      </span>
</div>
<p className="text-base font-semibold tracking-tight text-indigo-800 leading-none mt-1" id="annualSavings">$151,840</p>
<p className="text-[11px] text-indigo-600 leading-snug">
                      vs ChatGPT seats
                    </p>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50 p-3 flex flex-col gap-1">
<div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-slate-600 leading-none">
<span>3-year impact</span>
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-[3px] bg-slate-400"></span>Compounded
                      </span>
</div>
<p className="text-base font-semibold tracking-tight text-slate-900 leading-none mt-1" id="threeYearSavings">$455,520</p>
<p className="text-[11px] text-slate-600 leading-snug">
                      Assuming steady headcount
                    </p>
</div>
</div>

<div className="mt-2 rounded-xl border border-slate-200 bg-slate-50/60 p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
<div className="text-xs sm:text-sm text-slate-600 leading-snug">
<span className="font-medium text-slate-900">Want a board-ready ROI breakdown?</span>
<span> Get a detailed report with assumptions, roll-out plan, and payback period.</span>
</div>
<form className="flex flex-col sm:flex-row gap-2 w-full md:w-auto" id="roiForm">
<input className="w-full sm:w-52 px-3 py-2 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6c5ce7] focus:border-[#6c5ce7]" placeholder="Work email" required="" type="email" />
<button className="inline-flex justify-center items-center px-4 py-2 rounded-lg bg-[#6c5ce7] text-xs font-medium text-white hover:bg-[#7c6cff] shadow-sm hover:shadow-md transition disabled:opacity-60 disabled:cursor-not-allowed" type="submit">
                      Get detailed ROI report
                    </button>
</input></form>
</div>
<p className="text-[11px] text-slate-500 leading-snug">
                  No credit card required. We’ll only use your email to send the ROI analysis and follow up with relevant details.
                </p>
</div>
</div>

<div className="space-y-5 text-sm text-slate-700">
<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
<h3 className="text-sm font-medium text-slate-900 mb-1">
                  The math behind the calculator
                </h3>
<p className="text-xs text-slate-600 mb-2 leading-snug">
                  We keep it simple and transparent:
                </p>
<ul className="space-y-1.5 text-xs text-slate-600">
<li className="flex gap-2">
<span className="mt-1 h-1 w-3 rounded-full bg-rose-400"></span>
<span><span className="font-medium text-slate-900">ChatGPT cost</span> = employees × $40 × 12 months.</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1 w-3 rounded-full bg-emerald-400"></span>
<span>
<span className="font-medium text-slate-900">Relevance AI cost</span> = flat $80K/year platform fee
                      (including the first $20K of LLM usage) + any additional LLM API usage per employee (low, medium, high).
                    </span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1 w-3 rounded-full bg-indigo-400"></span>
<span><span className="font-medium text-slate-900">Savings</span> = ChatGPT cost − (platform + your total API spend).</span>
</li>
</ul>
<p className="mt-2 text-[11px] text-slate-500 leading-snug">
                  Usage estimates are based on current GPT‑4o / Claude Sonnet pricing and typical enterprise usage (3, 8, or 20 chats per day). We’ll plug in your exact provider mix and how far the bundled $20K covers you during a detailed ROI review.
                </p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-slate-900">Typical outcomes by size</h3>
<span className="inline-flex items-center gap-1 text-[11px] text-slate-500 leading-none">

<svg className="h-3.5 w-3.5 text-[#6c5ce7]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="18" y1="20" y2="10"></line>
<line x1="12" x2="12" y1="20" y2="4"></line>
<line x1="6" x2="6" y1="20" y2="14"></line>
</svg>
                    Benchmarks
                  </span>
</div>
<dl className="space-y-2 text-xs text-slate-700">
<div className="flex items-center justify-between">
<dt className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-[3px] bg-slate-400"></span>
<span>250 employees</span>
</dt>
<dd className="font-medium text-slate-900">Save ≈ $35K–$45K/year*</dd>
</div>
<div className="flex items-center justify-between">
<dt className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-[3px] bg-slate-400"></span>
<span>500 employees</span>
</dt>
<dd className="font-medium text-slate-900">Save ≈ $140K–$160K/year*</dd>
</div>
<div className="flex items-center justify-between">
<dt className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-[3px] bg-slate-400"></span>
<span>1,000 employees</span>
</dt>
<dd className="font-medium text-slate-900">$350K+ yearly upside*</dd>
</div>
</dl>
<p className="mt-2 text-[11px] text-slate-500 leading-snug">
                  *Assuming medium usage (≈8 chats/day) and GPT‑4o/Claude Sonnet pricing. Low/high usage scenarios and how much of your usage fits inside the bundled $20K will change these numbers.
                </p>
</div>
<div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-[#111827] via-[#1f2933] to-[#0f172a] text-slate-100 p-4 shadow-lg shadow-slate-700/40">
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-black/40 border border-white/10">

<svg className="h-3.5 w-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</span>
<div>
<p className="text-xs uppercase tracking-[0.16em] text-emerald-300/90 leading-none">Risk-free switch</p>
<p className="text-sm font-medium leading-snug">Zero disruption, zero retraining</p>
</div>
</div>
<p className="text-xs text-slate-200 mb-2 leading-snug">
                  Your employees keep the same chat experience—web, Slack, or Teams. You get radically better economics, visibility, and control.
                </p>
<p className="text-[11px] text-slate-400 leading-snug">
                  Migration support included: SSO, security review, and a 4-week pilot to validate savings before full rollout.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-[#f4f6fa]" id="break-even">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
<div className="max-w-xl">
<h2 className="text-2xl sm:text-[1.7rem] font-semibold tracking-tight text-[#111827] mb-3" style={{fontFamily: '\'Inter\', system-ui'}}>
                The Break-Even Point
              </h2>
<p className="text-sm sm:text-base text-slate-600">
                At ~250 employees, per-seat pricing becomes more expensive than Relevance AI’s fixed platform fee (which includes $20K of LLM usage) plus typical additional API costs. Beyond that, the gap widens dramatically.
              </p>
</div>
<div className="grid sm:grid-cols-3 gap-3 text-xs text-slate-700">
<div className="rounded-xl border border-slate-200 bg-white px-3 py-2">
<p className="uppercase tracking-[0.18em] text-[10px] text-slate-500 mb-1 leading-none">
                  250 employees
                </p>
<p className="font-medium text-slate-900 leading-snug">Save ≈ $40K/year*</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white px-3 py-2">
<p className="uppercase tracking-[0.18em] text-[10px] text-slate-500 mb-1 leading-none">
                  500 employees
                </p>
<p className="font-medium text-slate-900 leading-snug">Save ≈ $150K+/year*</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white px-3 py-2">
<p className="uppercase tracking-[0.18em] text-[10px] text-slate-500 mb-1 leading-none">
                  1,000 employees
                </p>
<p className="font-medium text-slate-900 leading-snug">$350K+ yearly upside*</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
<div className="flex items-center justify-between mb-3 text-[11px] text-slate-500">
<div className="inline-flex items-center gap-2">

<svg className="h-3.5 w-3.5 text-[#6c5ce7]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="m19 9-5 5-4-4-3 3"></path>
</svg>
<span className="leading-snug">Annual cost vs headcount (platform + LLM usage)</span>
</div>
<div className="flex items-center gap-3">
<div className="inline-flex items-center gap-1.5 leading-none">
<span className="h-1.5 w-4 rounded-full bg-rose-400"></span>
<span>ChatGPT per-seat</span>
</div>
<div className="inline-flex items-center gap-1.5 leading-none">
<span className="h-1.5 w-4 rounded-full bg-[#6c5ce7]"></span>
<span>Relevance AI (incl. $20K LLM)</span>
</div>
</div>
</div>
<div className="relative h-64 sm:h-80">
<canvas aria-label="Cost comparison chart" id="costChart" role="img"></canvas>
</div>
</div>
</div>
</section>

<section className="relative bg-white" id="features">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
<div className="max-w-3xl mb-10">
<h2 className="text-2xl sm:text-[1.7rem] font-semibold tracking-tight text-[#111827] mb-3" style={{fontFamily: '\'Inter\', system-ui'}}>
              Same Experience, Smarter Economics
            </h2>
<p className="text-sm sm:text-base text-slate-600">
              Your team keeps the chat experience they know. You gain usage-based pricing, multi-model optionality, and full cost visibility—including bundled LLM usage and any extra compute.
            </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

<div className="group rounded-2xl border border-slate-200 bg-white p-4 flex flex-col gap-3 shadow-sm hover:shadow-md hover:border-[#6c5ce7]/70 transition">
<div className="inline-flex items-center gap-2">
<span className="h-8 w-8 rounded-xl bg-[#6c5ce7]/10 border border-[#6c5ce7]/40 flex items-center justify-center">

<svg className="h-4 w-4 text-[#6c5ce7]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 14l4-4"></path>
<path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
</svg>
</span>
<div>
<h3 className="text-sm font-medium text-slate-900">Usage-Based Pricing</h3>
<p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 leading-none">Pay for usage, not seats</p>
</div>
</div>
<p className="text-xs text-slate-600">
                Replace $40/user/month with a single platform fee (including $20K of LLM spend) plus metered LLM usage via your own API keys once you exceed the bundle.
              </p>
<p className="text-xs text-slate-500">
                Forecast spend with confidence using built-in dashboards and alerts.
              </p>
</div>

<div className="group rounded-2xl border border-slate-200 bg-white p-4 flex flex-col gap-3 shadow-sm hover:shadow-md hover:border-[#6c5ce7]/ transition">
<div className="inline-flex items-center gap-2">
<span className="h-8 w-8 rounded-xl bg-[#6c5ce7]/10 border border-[#6c5ce7]/40 flex items-center justify-center">

<svg className="h-4 w-4 text-[#6c5ce7]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<circle cx="9" cy="9" r="2"></circle>
<path d="M21 15l-3.5-3.5"></path>
<path d="M17 15l-1.5 1.5"></path>
</svg>
</span>
<div>
<h3 className="text-sm font-medium text-slate-900">BYO API Keys</h3>
<p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 leading-none">Use your own LLM contracts</p>
</div>
</div>
<p className="text-xs text-slate-600">
                Plug in your existing OpenAI, Anthropic, Google, or open-source LLM contracts. Keep your volume discounts and preferred terms while Relevance AI orchestrates usage.
              </p>
<p className="text-xs text-slate-500">
                You keep full visibility into token usage and cost per user.
              </p>
</div>

<div className="group rounded-2xl border border-slate-200 bg-white p-4 flex flex-col gap-3 shadow-sm hover:shadow-md hover:border-[#6c5ce7]/70 transition">
<div className="inline-flex items-center gap-2">
<span className="h-8 w-8 rounded-xl bg-[#6c5ce7]/10 border border-[#6c5ce7]/40 flex items-center justify-center">

<svg className="h-4 w-4 text-[#6c5ce7]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12h10"></path>
<path d="M7 8h6"></path>
<path d="M18 20H6l-4 4V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
</span>
<div>
<h3 className="text-sm font-medium text-slate-900">Deploy Anywhere</h3>
<p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 leading-none">Meet teams where they work</p>
</div>
</div>
<p className="text-xs text-slate-600">
                Offer the same assistants via web chat, Slack, or Microsoft Teams. No new tab sprawl or learning curve for employees.
              </p>
<p className="text-xs text-slate-500">
                Govern access centrally with SSO, RBAC, and audit logging.
              </p>
</div>

<div className="group rounded-2xl border border-slate-200 bg-white p-4 flex flex-col gap-3 shadow-sm hover:shadow-md hover:border-[#6c5ce7]/70 transition">
<div className="inline-flex items-center gap-2">
<span className="h-8 w-8 rounded-xl bg-[#6c5ce7]/10 border border-[#6c5ce7]/40 flex items-center justify-center">

<svg className="h-4 w-4 text-[#6c5ce7]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="2"></circle>
<circle cx="18" cy="18" r="2"></circle>
<circle cx="6" cy="18" r="2"></circle>
<path d="M8 7.5v9a3 3 0 0 0 3 3h5"></path>
</svg>
</span>
<div>
<h3 className="text-sm font-medium text-slate-900">Multi-Model Choice</h3>
<p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 leading-none">GPT-4, Claude, Gemini, Llama</p>
</div>
</div>
<p className="text-xs text-slate-600">
                Route each use case to the best model—GPT‑4 for reasoning, Claude for summarization, Gemini or Llama for cost-sensitive tasks.
              </p>
<p className="text-xs text-slate-500">
                Swap providers without re-building agents or flows.
              </p>
</div>
</div>
</div>
</section>

<section className="relative bg-[#f4f6fa]" id="comparison">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
<div className="max-w-3xl mb-8">
<h2 className="text-2xl sm:text-[1.7rem] font-semibold tracking-tight text-[#111827] mb-3" style={{fontFamily: '\'Inter\', system-ui'}}>
              ChatGPT vs Relevance AI
            </h2>
<p className="text-sm sm:text-base text-slate-600">
              Understand how the economics, flexibility, and deployment options differ—using a 500-employee company and real API usage assumptions, including bundled LLM usage on the Relevance side.
            </p>
</div>
<div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-[#f4f6fa] via-white to-[#e5e9ff] p-4 sm:p-6 shadow-sm">
<div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
<div className="grid grid-cols-[1.2fr_1fr_1fr] text-xs sm:text-sm text-slate-700 border-b border-slate-200 bg-slate-50/80">
<div className="px-3 sm:px-4 py-3 font-medium">Feature</div>
<div className="px-3 sm:px-4 py-3 font-medium flex items-center gap-2 border-l border-slate-200">
<span className="inline-flex h-1.5 w-1.5 rounded-[3px] bg-rose-400"></span>
                  ChatGPT
                </div>
<div className="px-3 sm:px-4 py-3 font-medium flex items-center gap-2 border-l border-slate-200 bg-gradient-to-r from-[#eef2ff] to-[#e0e7ff]">
<span className="inline-flex h-1.5 w-1.5 rounded-[3px] bg-[#6c5ce7]"></span>
                  Relevance AI
                </div>
</div>
<div className="divide-y divide-slate-100 text-xs sm:text-sm">

<div className="grid grid-cols-[1.2fr_1fr_1fr]">
<div className="px-3 sm:px-4 py-3 flex items-center text-slate-600">Pricing model</div>
<div className="px-3 sm:px-4 py-3 border-l border-slate-100 flex items-center">Per-seat ($40/mo)</div>
<div className="px-3 sm:px-4 py-3 border-l border-slate-100 bg-slate-50 flex items-center font-medium text-slate-900">
                    Usage-based platform + API (incl. $20K LLM)
                  </div>
</div>

<div className="grid grid-cols-[1.2fr_1fr_1fr] bg-slate-50/60">
<div className="px-3 sm:px-4 py-3 flex items-center text-slate-600">Your cost (500 employees)</div>
<div className="px-3 sm:px-4 py-3 border-l border-slate-100 flex items-center text-rose-600 font-medium">$240K/year</div>
<div className="px-3 sm:px-4 py-3 border-l border-slate-100 bg-gradient-to-r from-[#eef2ff] to-[#e0e7ff] flex items-center font-semibold text-[#111827]">
                    ≈$88K/year* (platform incl. $20K LLM + API)
                  </div>
</div>

<div className="grid grid-cols-[1.2fr_1fr_1fr]">
<div className="px-3 sm:px-4 py-3 flex items-center text-slate-600">Bring your own API keys</div>
<div className="px-3 sm:px-4 py-3 border-l border-slate-100 flex items-center">
<span className="inline-flex items-center gap-1.5 text-rose-500">
                      ✗ <span className="hidden sm:inline">Limited</span>
</span>
</div>
<div className="px-3 sm:px-4 py-3 border-l border-slate-100 bg-slate-50 flex items-center">
<span className="inline-flex items-center gap-1.5 text-emerald-600">
                      ✓ <span className="hidden sm:inline">Full BYO support</span>
</span>
</div>
</div>

<div className="grid grid-cols-[1.2fr_1fr_1fr]">
<div className="px-3 sm:px-4 py-3 flex items-center text-slate-600">Model choice</div>
<div className="px-3 sm:px-4 py-3 border-l border-slate-100 flex items-center">OpenAI only</div>
<div className="px-3 sm:px-4 py-3 border-l border-slate-100 bg-slate-50 flex items-center">Any provider (GPT, Claude, Gemini, Llama, OSS)</div>
</div>

<div className="grid grid-cols-[1.2fr_1fr_1fr]">
<div className="px-3 sm:px-4 py-3 flex items-center text-slate-600">Slack / Teams integration</div>
<div className="px-3 sm:px-4 py-3 border-l border-slate-100 flex items-center text-slate-700">Basic connectors</div>
<div className="px-3 sm:px-4 py-3 border-l border-slate-100 bg-slate-50 flex items-center">
<span className="inline-flex items-center gap-1.5 text-emerald-600">
                      ✓ <span className="hidden sm:inline">Native, admin-controlled</span>
</span>
</div>
</div>

<div className="grid grid-cols-[1.2fr_1fr_1fr]">
<div className="px-3 sm:px-4 py-3 flex items-center text-slate-600">Custom agent builder</div>
<div className="px-3 sm:px-4 py-3 border-l border-slate-100 flex items-center">Basic prompts</div>
<div className="px-3 sm:px-4 py-3 border-l border-slate-100 bg-slate-50 flex items-center">Unlimited agents, flows &amp; tools</div>
</div>

<div className="grid grid-cols-[1.2fr_1fr_1fr]">
<div className="px-3 sm:px-4 py-3 flex items-center text-slate-600">Cost visibility</div>
<div className="px-3 sm:px-4 py-3 border-l border-slate-100 flex items-center">High-level seat count</div>
<div className="px-3 sm:px-4 py-3 border-l border-slate-100 bg-slate-50 flex items-center">Per-agent, per-team, and per-model analytics</div>
</div>

<div className="grid grid-cols-[1.2fr_1fr_1fr] bg-gradient-to-r from-slate-50 via-[#eef2ff] to-[#e0e7ff]">
<div className="px-3 sm:px-4 py-3 flex items-center text-slate-700 font-medium">
                    Your savings at 500 employees*
                  </div>
<div className="px-3 sm:px-4 py-3 border-l border-slate-100 flex items-center text-slate-400">
                    —
                  </div>
<div className="px-3 sm:px-4 py-3 border-l border-slate-100 flex items-center font-semibold text-[#111827]">
                    ≈$150K/year unlocked for AI projects
                  </div>
</div>
</div>
</div>
<div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
<p>Use the calculator above to swap in your real employee count and usage pattern to see your own numbers.</p>
<button className="inline-flex justify-center items-center px-4 py-2 rounded-full bg-[#6c5ce7] text-white font-medium hover:bg-[#7c6cff] transition text-xs shadow-sm hover:shadow-md" onclick="scrollToSection('calculator')">
                Recalculate with my headcount
              </button>
</div>
</div>
</div>
</section>

<section className="relative bg-[#0f1014] text-white" id="beyond-chat">

</section>

<section className="relative bg-white" id="roi-reinvestment">

</section>

<section className="relative bg-[#f4f6fa]" id="security">

</section>

<section className="relative bg-white" id="how-it-works">

</section>

<section className="relative bg-[#0f1014] text-white" id="demo-final">

</section>
</main>

<footer className="relative border-t border-white/10 bg-[#05060a] text-white/60 text-xs">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-lg bg-gradient-to-br from-[#8861ff] via-[#6c5ce7] to-[#d4c6ff] flex items-center justify-center text-[10px] font-semibold" style={{fontFamily: '\'Outfit\', system-ui'}}>
            RA
          </div>
<p className="text-[11px] text-white/50">
            © <span id="currentYear"></span> Relevance AI. All rights reserved.
          </p>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-white transition-colors" href="#security">Security</a>
<a className="hover:text-white transition-colors" href="#how-it-works">Implementation</a>
<a className="hover:text-white transition-colors" href="#calculator">ROI Calculator</a>
</div>
</div>
</footer>
</div>



    </>
  );
}
