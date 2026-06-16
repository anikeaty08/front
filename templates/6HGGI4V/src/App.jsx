import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Icons (1.5 stroke)
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Simple toast
      function toast(msg, icon = 'check-circle-2') {
        const el = document.getElementById('toast');
        const msgEl = document.getElementById('toastMsg');
        msgEl.textContent = msg;
        el.querySelector('i').setAttribute('data-lucide', icon);
        if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        el.classList.remove('hidden');
        setTimeout(() => el.classList.add('hidden'), 1800);
      }

      // Template selection
      const templateIndicator = document.getElementById('template-indicator');
      document.querySelectorAll('[data-action="use-template"]').forEach(btn => {
        btn.addEventListener('click', () => {
          const tpl = btn.getAttribute('data-template');
          templateIndicator.textContent = `Template sélectionné: ${tpl}`;
          templateIndicator.classList.remove('text-slate-400');
          templateIndicator.classList.add('text-sky-300');
          toast('Template appliqué');
        });
      });

      // Scroll helpers
      document.getElementById('btn-choose').addEventListener('click', () => {
        document.getElementById('catalogue').scrollIntoView({ behavior: 'smooth' });
      });
      document.getElementById('btn-catalogue').addEventListener('click', () => {
        document.getElementById('catalogue').scrollIntoView({ behavior: 'smooth' });
      });
      document.getElementById('btn-backtest').addEventListener('click', () => {
        document.getElementById('backtest').scrollIntoView({ behavior: 'smooth' });
      });

      // Clear
      document.getElementById('btn-clear').addEventListener('click', () => {
        document.getElementById('prompt').value = '';
        document.getElementById('resultText').textContent = 'En attente…';
      });

      // Copy
      document.getElementById('btn-copy').addEventListener('click', async () => {
        const text = document.getElementById('resultText').textContent || '';
        try { await navigator.clipboard.writeText(text); toast('Copié dans le presse-papiers'); }
        catch { toast('Impossible de copier', 'alert-triangle'); }
      });

      // Generate shortcut
      document.getElementById('btn-generate').addEventListener('click', () => {
        document.getElementById('btn-send').click();
      });

      // n8n integration (POST request)
      const N8N_WEBHOOK_URL = 'https://n8n.becorpai.com/webhook-test/9fddbc69-b82b-4f98-9ea7-649a85309c73';
      const sendBtn = document.getElementById('btn-send');
      const promptEl = document.getElementById('prompt');
      const resultEl = document.getElementById('resultText');

      async function callN8N(payload) {
        const res = await fetch(N8N_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error('Erreur réseau');
        const data = await res.json().catch(() => ({}));
        return data;
      }

      sendBtn.addEventListener('click', async () => {
        const strategy = promptEl.value.trim();
        const template = templateIndicator.textContent.replace('Template sélectionné: ', '') || null;

        if (!strategy) {
          toast('Ajoute une description de stratégie', 'info');
          promptEl.focus();
          return;
        }

        sendBtn.disabled = true;
        sendBtn.classList.add('opacity-70', 'cursor-not-allowed');
        resultEl.textContent = 'Génération en cours…';

        try {
          const payload = { strategy, template };

          const simulate = N8N_WEBHOOK_URL.includes('your-n8n-webhook-url');
          let data;
          if (simulate) {
            await new Promise(r => setTimeout(r, 900));
            data = {
              summary: 'Bot généré (simulation).',
              rules: [
                'Entrée: RSI < 30 + MA20 haussière',
                'Sortie: RSI > 60 ou SL/TP',
                'Risk: 1% par trade, SL 8 pips, TP 12 pips',
              ],
              code: 'def signal(c):\n    rsi = c.rsi(14)\n    ma = c.sma(20)\n    long = (rsi < 30) and (c.close > ma)\n    exit = (rsi > 60)\n    return {"long": long, "exit": exit}',
              backtest: Array.from({length: 30}, (_,i) => ({ day: i+1, equity: 10000 + Math.round((Math.sin(i/3)+i/10)*120) })),
            };
          } else {
            data = await callN8N(payload);
          }

          // Render output
          const rules = (data.rules || []).map(r => `• ${r}`).join('\n');
          const code = data.code ? `\n\nCode:\n${data.code}` : '';
          resultEl.textContent = `${data.summary || 'Résultats reçus.'}\n${rules}${code}`;

          // Update chart if backtest present
          if (data.backtest && Array.isArray(data.backtest)) {
            updateChart(data.backtest.map(p => p.day), data.backtest.map(p => p.equity));
          }

          toast('Génération terminée');
        } catch (e) {
          resultEl.textContent = 'Une erreur est survenue. Vérifie la connexion et réessaie.';
          toast('Erreur pendant la génération', 'alert-triangle');
        } finally {
          sendBtn.disabled = false;
          sendBtn.classList.remove('opacity-70', 'cursor-not-allowed');
        }
      });

      // Chart.js demo
      let chart;
      function updateChart(labels, series) {
        const ctx = document.getElementById('equityCurve').getContext('2d');
        if (chart) chart.destroy();
        chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels,
            datasets: [{
              label: 'Équité',
              data: series,
              borderColor: 'rgb(250, 204, 21)', // amber-400
              backgroundColor: 'rgba(250, 204, 21, 0.08)',
              fill: true,
              tension: 0.35,
              borderWidth: 2,
              pointRadius: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(15,23,42,0.9)',
                titleColor: '#e2e8f0',
                bodyColor: '#cbd5e1',
                padding: 10,
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1
              }
            },
            scales: {
              x: {
                grid: { color: 'rgba(255,255,255,0.04)' },
                ticks: { color: '#94a3b8', maxTicksLimit: 6, font: { size: 11 } }
              },
              y: {
                grid: { color: 'rgba(255,255,255,0.06)' },
                ticks: { color: '#94a3b8', font: { size: 11 } }
              }
            }
          }
        });
      }

      // Init demo chart with placeholder series
      const seedLabels = Array.from({ length: 30 }, (_, i) => i + 1);
      const seedSeries = seedLabels.map(i => 10000 + Math.round((Math.sin(i/4) + i/12) * 110));
      updateChart(seedLabels, seedSeries);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-amber-400/10 via-yellow-300/10 to-amber-500/10 blur-3xl"></div>
<div className="absolute bottom-0 right-0 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tl from-indigo-600/10 via-fuchsia-500/10 to-cyan-500/10 blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_10%_0%,rgba(255,255,255,0.06),transparent_60%)]"></div>
</div>

<header className="relative z-10">
<nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-6">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800/80 ring-1 ring-white/10 backdrop-blur">
<i className="h-5 w-5 text-amber-300" data-lucide="bot"></i>
</div>
<div className="text-slate-200">
<span className="text-base tracking-tight font-medium">0x12.AI</span>
<span className="ml-2 text-xs text-slate-400">Trading Studio</span>
</div>
</div>
<div className="hidden md:flex items-center gap-6 text-sm">
<a className="text-slate-300 hover:text-white transition" href="#catalogue">Catalogue</a>
<a className="text-slate-300 hover:text-white transition" href="#backtest">Backtesting</a>
<a className="text-slate-300 hover:text-white transition" href="#builder">Builder</a>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-white ring-1 ring-white/10 hover:bg-white/10" id="signin">
<i className="h-4 w-4" data-lucide="log-in"></i>
<span className="font-medium">Se connecter</span>
</button>
</div>
</nav>
</header>
<main className="relative z-10">

<section className="mx-auto max-w-7xl px-4 pt-6 lg:px-6 lg:pt-10">
<div className="max-w-3xl">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-amber-100 drop-shadow-[0_1px_0_rgba(0,0,0,0.3)]">
            Créer un robot trading
          </h1>
<p className="mt-4 text-base sm:text-lg text-slate-300/90">
            Décris ta stratégie en langage naturel, choisis un template, génère le bot et lance un backtest. Tout est prêt pour l’automatisation.
          </p>
</div>

<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" id="catalogue">

<article className="rounded-xl bg-gradient-to-b from-slate-900/70 to-slate-900/40 p-3 ring-1 ring-white/10 backdrop-blur">
<header className="flex items-center justify-between">
<span className="text-xs font-medium tracking-wide text-sky-300">EURO TRADE</span>
<div className="flex items-center gap-1 text-[10px] text-slate-400">
<i className="h-3.5 w-3.5 text-amber-300" data-lucide="sparkles"></i>
<span>AI</span>
</div>
</header>
<div className="mt-2 overflow-hidden rounded-lg ring-1 ring-white/10">
<img alt="Robot template" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<dl className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-300/90">
<div className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5 ring-1 ring-white/10">
<dt>Target</dt><dd className="font-medium">50.00</dd>
</div>
<div className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5 ring-1 ring-white/10">
<dt>PNL %</dt><dd className="font-medium">0.00</dd>
</div>
<div className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5 ring-1 ring-white/10">
<dt>Weekly</dt><dd className="font-medium">12.28</dd>
</div>
<div className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5 ring-1 ring-white/10">
<dt>Month</dt><dd className="font-medium">176.40</dd>
</div>
</dl>
<div className="mt-3 flex items-center justify-between text-xs">
<span className="text-slate-400">Floating:</span>
<span className="font-medium text-slate-200">0.00</span>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-sky-600/20 px-3 py-2 text-sm text-sky-200 ring-1 ring-sky-500/30 hover:bg-sky-600/30" data-action="use-template" data-template="euro_trade">
<i className="h-4 w-4" data-lucide="plus"></i>
                Utiliser
              </button>
<button aria-label="Preview" className="inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm text-slate-300 ring-1 ring-white/10 hover:bg-white/5" data-action="preview">
<i className="h-4 w-4" data-lucide="eye"></i>
</button>
</div>
</article>

<article className="rounded-xl bg-gradient-to-b from-slate-900/70 to-slate-900/40 p-3 ring-1 ring-white/10 backdrop-blur">
<header className="flex items-center justify-between">
<span className="text-xs font-medium tracking-wide text-sky-300">SCALP FX</span>
<div className="flex items-center gap-1 text-[10px] text-slate-400">
<i className="h-3.5 w-3.5 text-amber-300" data-lucide="sparkles"></i>
<span>AI</span>
</div>
</header>
<div className="mt-2 overflow-hidden rounded-lg ring-1 ring-white/10">
<img alt="Scalp FX template" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<dl className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-300/90">
<div className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5 ring-1 ring-white/10">
<dt>Target</dt><dd className="font-medium">25.00</dd>
</div>
<div className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5 ring-1 ring-white/10">
<dt>Winrate</dt><dd className="font-medium">62%</dd>
</div>
<div className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5 ring-1 ring-white/10">
<dt>Daily</dt><dd className="font-medium">2.3</dd>
</div>
<div className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5 ring-1 ring-white/10">
<dt>Risk</dt><dd className="font-medium">Low</dd>
</div>
</dl>
<div className="mt-3 flex items-center justify-between text-xs">
<span className="text-slate-400">Floating:</span>
<span className="font-medium text-slate-200">0.00</span>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-sky-600/20 px-3 py-2 text-sm text-sky-200 ring-1 ring-sky-500/30 hover:bg-sky-600/30" data-action="use-template" data-template="scalp_fx">
<i className="h-4 w-4" data-lucide="plus"></i>
                Utiliser
              </button>
<button aria-label="Preview" className="inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm text-slate-300 ring-1 ring-white/10 hover:bg-white/5" data-action="preview">
<i className="h-4 w-4" data-lucide="eye"></i>
</button>
</div>
</article>

<article className="rounded-xl bg-gradient-to-b from-slate-900/70 to-slate-900/40 p-3 ring-1 ring-white/10 backdrop-blur">
<header className="flex items-center justify-between">
<span className="text-xs font-medium tracking-wide text-sky-300">CRYPTO SWING</span>
<div className="flex items-center gap-1 text-[10px] text-slate-400">
<i className="h-3.5 w-3.5 text-amber-300" data-lucide="sparkles"></i>
<span>AI</span>
</div>
</header>
<div className="mt-2 overflow-hidden rounded-lg ring-1 ring-white/10">
<img alt="Crypto Swing template" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<dl className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-300/90">
<div className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5 ring-1 ring-white/10">
<dt>Target</dt><dd className="font-medium">80.00</dd>
</div>
<div className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5 ring-1 ring-white/10">
<dt>Drawdown</dt><dd className="font-medium">7.2%</dd>
</div>
<div className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5 ring-1 ring-white/10">
<dt>Weekly</dt><dd className="font-medium">10.1</dd>
</div>
<div className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5 ring-1 ring-white/10">
<dt>Month</dt><dd className="font-medium">120.3</dd>
</div>
</dl>
<div className="mt-3 flex items-center justify-between text-xs">
<span className="text-slate-400">Floating:</span>
<span className="font-medium text-slate-200">0.00</span>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-sky-600/20 px-3 py-2 text-sm text-sky-200 ring-1 ring-sky-500/30 hover:bg-sky-600/30" data-action="use-template" data-template="crypto_swing">
<i className="h-4 w-4" data-lucide="plus"></i>
                Utiliser
              </button>
<button aria-label="Preview" className="inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm text-slate-300 ring-1 ring-white/10 hover:bg-white/5" data-action="preview">
<i className="h-4 w-4" data-lucide="eye"></i>
</button>
</div>
</article>

<article className="rounded-xl bg-gradient-to-b from-slate-900/70 to-slate-900/40 p-3 ring-1 ring-white/10 backdrop-blur">
<header className="flex items-center justify-between">
<span className="text-xs font-medium tracking-wide text-sky-300">INDEX ARB</span>
<div className="flex items-center gap-1 text-[10px] text-slate-400">
<i className="h-3.5 w-3.5 text-amber-300" data-lucide="sparkles"></i>
<span>AI</span>
</div>
</header>
<div className="mt-2 overflow-hidden rounded-lg ring-1 ring-white/10">
<img alt="Index Arb template" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<dl className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-300/90">
<div className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5 ring-1 ring-white/10">
<dt>Latency</dt><dd className="font-medium">3ms</dd>
</div>
<div className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5 ring-1 ring-white/10">
<dt>Spread</dt><dd className="font-medium">0.2</dd>
</div>
<div className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5 ring-1 ring-white/10">
<dt>Risk</dt><dd className="font-medium">Mid</dd>
</div>
<div className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5 ring-1 ring-white/10">
<dt>Month</dt><dd className="font-medium">76.5</dd>
</div>
</dl>
<div className="mt-3 flex items-center justify-between text-xs">
<span className="text-slate-400">Floating:</span>
<span className="font-medium text-slate-200">0.00</span>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-sky-600/20 px-3 py-2 text-sm text-sky-200 ring-1 ring-sky-500/30 hover:bg-sky-600/30" data-action="use-template" data-template="index_arb">
<i className="h-4 w-4" data-lucide="plus"></i>
                Utiliser
              </button>
<button aria-label="Preview" className="inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm text-slate-300 ring-1 ring-white/10 hover:bg-white/5" data-action="preview">
<i className="h-4 w-4" data-lucide="eye"></i>
</button>
</div>
</article>
</div>

<div className="mt-6 flex flex-wrap items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2.5 text-sm text-white ring-1 ring-white/10 hover:bg-white/10" id="btn-generate">
<i className="h-4.5 w-4.5 text-amber-300" data-lucide="wand-2"></i>
<span className="font-medium">Générer</span>
</button>
<button className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2.5 text-sm text-white ring-1 ring-white/10 hover:bg-white/10" id="btn-choose">
<i className="h-4.5 w-4.5" data-lucide="layout-grid"></i>
<span className="font-medium">Choisis ta stratégie</span>
</button>
<button className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2.5 text-sm text-white ring-1 ring-white/10 hover:bg-white/10" id="btn-catalogue">
<i className="h-4.5 w-4.5" data-lucide="book-open"></i>
<span className="font-medium">Visite notre catalogue</span>
<span className="ml-2 rounded-full bg-amber-400/90 px-2 py-0.5 text-[10px] font-medium text-slate-900">PRO</span>
</button>
<button className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2.5 text-sm text-white ring-1 ring-white/10 hover:bg-white/10" id="btn-backtest">
<i className="h-4.5 w-4.5" data-lucide="line-chart"></i>
<span className="font-medium">Backtesting</span>
<span className="ml-2 rounded-full bg-amber-400/90 px-2 py-0.5 text-[10px] font-medium text-slate-900">PRO</span>
</button>
</div>

<div className="mt-6 rounded-2xl bg-slate-900/50 p-3 ring-1 ring-white/10 backdrop-blur" id="builder">
<div className="rounded-xl bg-slate-900/60 p-2 ring-1 ring-white/10">
<label className="block px-3 pt-2 text-sm text-slate-400" htmlFor="prompt">Brief de stratégie</label>
<textarea className="mt-2 w-full resize-y rounded-xl bg-slate-950/60 px-4 py-3 text-[15px] text-slate-200 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400/40" id="prompt" placeholder="Tapez n'importe quoi dans n'importe quelle langue pour décrire votre stratégie de trading personnelle et unique. Ex: 'Scalping EURUSD sur M5 avec RSI &lt; 30, SL 8 pips, TP 12 pips'" rows="6"></textarea>
<div className="mt-3 flex flex-wrap items-center justify-between gap-3 px-1 pb-2">
<div className="flex items-center gap-2 text-xs text-slate-400">
<i className="h-4 w-4" data-lucide="chip"></i>
<span id="template-indicator">Aucun template sélectionné</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-slate-200 ring-1 ring-white/10 hover:bg-white/10" id="btn-clear">
<i className="h-4 w-4" data-lucide="eraser"></i>
                  Effacer
                </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-amber-400/90 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-amber-300" data-n8n="send" id="btn-send">
<i className="h-4 w-4" data-lucide="send"></i>
                  Envoyer
                </button>
</div>
</div>
</div>

<div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
<div className="rounded-xl bg-slate-900/60 p-4 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium tracking-tight text-white">Résultat</h3>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-slate-200 ring-1 ring-white/10 hover:bg-white/10" id="btn-copy">
<i className="h-3.5 w-3.5" data-lucide="copy"></i> Copier
                  </button>
</div>
</div>
<div className="mt-3 h-60 overflow-auto rounded-lg bg-black/40 p-3 text-sm text-slate-300 ring-1 ring-white/10" id="result">
<pre className="whitespace-pre-wrap leading-relaxed" id="resultText">En attente…</pre>
</div>
</div>
<div className="rounded-xl bg-slate-900/60 p-4 ring-1 ring-white/10" id="backtest">
<h3 className="text-base font-medium tracking-tight text-white">Backtest (démo)</h3>
<p className="mt-1 text-xs text-slate-400">Visualisation rapide des performances simulées sur 30 jours.</p>
<div className="mt-3 rounded-lg bg-black/40 p-2 ring-1 ring-white/10">
<div className="relative h-56 w-full overflow-hidden rounded-md bg-slate-950/50">
<div className="h-full w-full p-2">
<div className="h-full w-full">
<div className="h-full w-full"><canvas id="equityCurve"></canvas></div>
</div>
</div>
</div>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
<i className="h-3.5 w-3.5" data-lucide="info"></i>
<span>Les données sont simulées. Remplace-les avec tes résultats n8n.</span>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="relative z-10 mx-auto max-w-7xl px-4 py-10 lg:px-6">
<div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
<p>© <span id="year"></span> 0x12.AI — Tous droits réservés.</p>
<div className="flex items-center gap-4">
<a className="hover:text-slate-200" href="#">Mentions légales</a>
<a className="hover:text-slate-200" href="#">Confidentialité</a>
</div>
</div>
</footer>

<div className="fixed bottom-4 right-4 z-50 hidden items-center gap-2 rounded-lg bg-slate-900/90 px-4 py-2 text-sm text-white ring-1 ring-white/10 backdrop-blur" id="toast">
<i className="h-4 w-4 text-emerald-400" data-lucide="check-circle-2"></i>
<span id="toastMsg">Copié</span>
</div>


    </>
  );
}
