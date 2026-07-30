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
      
      // Ensure icons render with 1.5 stroke width
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          window.lucide.createIcons();
          document.querySelectorAll('[data-lucide]').forEach(el => el.setAttribute('stroke-width', '1.5'));
        }
      });

      // Current year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Custom dropdown (region)
      const regionBtn = document.getElementById('regionButton');
      const regionMenu = document.getElementById('regionMenu');
      const regionLabel = document.getElementById('regionLabel');
      regionBtn.addEventListener('click', () => {
        regionMenu.classList.toggle('hidden');
      });
      regionMenu.querySelectorAll('button[data-region]').forEach(btn => {
        btn.addEventListener('click', () => {
          regionLabel.textContent = btn.dataset.region;
          regionMenu.classList.add('hidden');
        });
      });
      document.addEventListener('click', (e) => {
        if (!regionBtn.contains(e.target) && !regionMenu.contains(e.target)) {
          regionMenu.classList.add('hidden');
        }
      });

      // Paste area toggle
      const importBtn = document.getElementById('importList');
      const pasteArea = document.getElementById('pasteArea');
      const cancelPaste = document.getElementById('cancelPaste');
      const applyPaste = document.getElementById('applyPaste');
      const pasteInput = document.getElementById('pasteInput');
      importBtn.addEventListener('click', () => {
        pasteArea.classList.toggle('hidden');
        if (!pasteArea.classList.contains('hidden')) { pasteInput.focus(); }
      });
      cancelPaste.addEventListener('click', () => {
        pasteArea.classList.add('hidden');
        pasteInput.value = '';
      });

      // Items state
      const itemName = document.getElementById('itemName');
      const itemQty = document.getElementById('itemQty');
      const addItem = document.getElementById('addItem');
      const itemsList = document.getElementById('itemsList');
      const itemsCount = document.getElementById('itemsCount');
      const itemsHint = document.getElementById('itemsHint');
      const clearList = document.getElementById('clearList');
      const compareBtn = document.getElementById('compareBtn');
      const compareTop = document.getElementById('compareTop');

      let items = [];

      const catalog = {
        'arroz': { 'Mercado A': 22.9, 'Mercado B': 21.5, 'Mercado C': 23.4 },
        'feijao': { 'Mercado A': 8.9, 'Mercado B': 9.2, 'Mercado C': 8.5 },
        'leite': { 'Mercado A': 4.9, 'Mercado B': 4.6, 'Mercado C': 5.1 },
        'pao': { 'Mercado A': 9.9, 'Mercado B': 8.5, 'Mercado C': 10.4 },
        'cafe': { 'Mercado A': 17.9, 'Mercado B': 16.5, 'Mercado C': 18.2 },
        'oleo': { 'Mercado A': 6.9, 'Mercado B': 6.5, 'Mercado C': 7.2 },
        'açucar': { 'Mercado A': 4.5, 'Mercado B': 4.3, 'Mercado C': 4.7 },
        'macarrao': { 'Mercado A': 5.3, 'Mercado B': 4.9, 'Mercado C': 5.5 },
        'detergente': { 'Mercado A': 2.9, 'Mercado B': 3.1, 'Mercado C': 2.8 },
        'papel higienico': { 'Mercado A': 16.9, 'Mercado B': 15.5, 'Mercado C': 17.2 }
      };

      const stores = ['Mercado A', 'Mercado B', 'Mercado C'];

      function normalizeName(name) {
        return name.toLowerCase().trim()
          .replace(/\s+/g, ' ')
          .replace(/[áàãâ]/g, 'a')
          .replace(/[éê]/g, 'e')
          .replace(/[í]/g, 'i')
          .replace(/[óôõ]/g, 'o')
          .replace(/[ú]/g, 'u')
          .replace(/ç/g, 'c');
      }

      function randomPrice(base = 8, variance = 12) {
        const p = base + Math.random() * variance;
        return Math.round(p * 10) / 10;
      }

      function getItemPrices(name) {
        const key = normalizeName(name);
        if (catalog[key]) return catalog[key];
        // Generate a consistent pseudo-random based on name
        let seed = 0;
        for (let i = 0; i < key.length; i++) seed += key.charCodeAt(i);
        const base = 6 + (seed % 9);
        return {
          'Mercado A': Math.max(1.9, randomPrice(base, 6)),
          'Mercado B': Math.max(1.9, randomPrice(base - 0.8, 6)),
          'Mercado C': Math.max(1.9, randomPrice(base + 0.6, 6))
        };
      }

      function renderItems() {
        itemsList.innerHTML = '';
        if (items.length === 0) {
          itemsList.innerHTML = `
            <div class="p-4 text-sm text-neutral-400 flex items-center gap-2">
              <i data-lucide="info" class="h-4 w-4"></i>
              Sua lista está vazia. Adicione itens para começar.
            </div>`;
          if (window.lucide) { window.lucide.createIcons(); document.querySelectorAll('[data-lucide]').forEach(el => el.setAttribute('stroke-width', '1.5')); }
        } else {
          items.forEach((it, idx) => {
            const prices = getItemPrices(it.name);
            const minStore = Object.entries(prices).sort((a,b)=>a[1]-b[1])[0];
            const row = document.createElement('div');
            row.className = 'flex items-center justify-between p-3';
            row.innerHTML = `
              <div class="flex items-center gap-3">
                <div class="h-8 w-8 rounded-md border border-neutral-800 bg-neutral-950/50 flex items-center justify-center text-neutral-300">
                  <i data-lucide="package" class="h-4 w-4"></i>
                </div>
                <div>
                  <div class="text-sm font-medium capitalize tracking-tight">${it.name}</div>
                  <div class="text-[12px] text-neutral-400">Melhor: ${minStore[0]} • R$ ${minStore[1].toFixed(2)}</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <button data-idx="${idx}" data-act="dec" class="h-8 w-8 rounded-md border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-colors inline-flex items-center justify-center"><i data-lucide="minus" class="h-4 w-4"></i></button>
                <div class="w-10 text-center text-sm">${it.qty}</div>
                <button data-idx="${idx}" data-act="inc" class="h-8 w-8 rounded-md border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-colors inline-flex items-center justify-center"><i data-lucide="plus" class="h-4 w-4"></i></button>
                <button data-idx="${idx}" data-act="del" class="h-8 w-8 rounded-md border border-red-900/60 text-red-300 hover:border-red-800 hover:bg-red-950/40 transition-colors inline-flex items-center justify-center ml-1"><i data-lucide="trash-2" class="h-4 w-4"></i></button>
              </div>
            `;
            itemsList.appendChild(row);
          });
          if (window.lucide) { window.lucide.createIcons(); document.querySelectorAll('[data-lucide]').forEach(el => el.setAttribute('stroke-width', '1.5')); }
          // bind controls
          itemsList.querySelectorAll('button[data-act]').forEach(btn => {
            btn.addEventListener('click', () => {
              const idx = Number(btn.dataset.idx);
              const act = btn.dataset.act;
              if (act === 'inc') items[idx].qty++;
              if (act === 'dec') items[idx].qty = Math.max(1, items[idx].qty - 1);
              if (act === 'del') items.splice(idx, 1);
              renderItems();
              updateCounter();
              computeAndRender();
            });
          });
        }
      }

      function updateCounter() {
        const count = items.reduce((a,b)=>a + (b.qty||0), 0);
        itemsCount.textContent = count;
        itemsHint.textContent = items.length ? 'pronto para comparar' : 'adicione produtos para comparar';
      }

      function addItemFromInputs() {
        const name = itemName.value.trim();
        const qty = Math.max(1, parseInt(itemQty.value || '1', 10));
        if (!name) return;
        const existing = items.find(i => normalizeName(i.name) === normalizeName(name));
        if (existing) existing.qty += qty;
        else items.push({ name, qty });
        itemName.value = '';
        itemQty.value = 1;
        renderItems();
        updateCounter();
        computeAndRender();
      }

      addItem.addEventListener('click', addItemFromInputs);
      itemName.addEventListener('keydown', (e) => { if (e.key === 'Enter') addItemFromInputs(); });
      compareBtn.addEventListener('click', () => computeAndRender(true));
      compareTop.addEventListener('click', () => computeAndRender(true));
      clearList.addEventListener('click', () => {
        items = [];
        renderItems();
        updateCounter();
        computeAndRender();
      });

      // Paste parsing
      applyPaste.addEventListener('click', () => {
        const lines = pasteInput.value.split('\n').map(l => l.trim()).filter(Boolean);
        lines.forEach(line => {
          const m = line.match(/^(\d+)[xX]\s*(.+)$/);
          if (m) {
            items.push({ name: m[2], qty: parseInt(m[1],10) });
          } else {
            items.push({ name: line, qty: 1 });
          }
        });
        pasteInput.value = '';
        pasteArea.classList.add('hidden');
        renderItems();
        updateCounter();
        computeAndRender();
      });

      // Stores grid and best store
      const storesGrid = document.getElementById('storesGrid');
      const bestStoreName = document.getElementById('bestStoreName');
      const bestStoreTotal = document.getElementById('bestStoreTotal');
      const bestStoreSave = document.getElementById('bestStoreSave');
      const bestStoreSaveWrap = document.getElementById('bestStoreSaveWrap');

      // Chart
      let chart;
      function ensureChart() {
        const ctx = document.getElementById('totalsChart');
        if (!chart) {
          chart = new Chart(ctx, {
            type: 'bar',
            data: { labels: [], datasets: [{ label: 'Total (R$)', data: [], backgroundColor: ['#a1a1aa','#a1a1aa','#a1a1aa'], borderRadius: 8 }] },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false }, tooltip: { callbacks: { label: (c) => 'R$ ' + Number(c.formattedValue).toFixed(2) } } },
              scales: {
                x: { grid: { display: false }, ticks: { color: '#a3a3a3' } },
                y: { grid: { color: 'rgba(120,120,120,0.2)' }, ticks: { color: '#a3a3a3', callback: v => 'R$ ' + v } }
              }
            }
          });
        }
        return chart;
      }

      function computeTotals() {
        const totals = {};
        stores.forEach(s => totals[s] = 0);
        items.forEach(it => {
          const prices = getItemPrices(it.name);
          stores.forEach(s => {
            const p = prices[s] ?? randomPrice();
            totals[s] += p * it.qty;
          });
        });
        // round
        Object.keys(totals).forEach(s => totals[s] = Math.round(totals[s] * 100) / 100);
        return totals;
      }

      function currency(n) {
        return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      }

      function computeAndRender(scrollToSection = false) {
        const totals = computeTotals();
        // Stores grid
        storesGrid.innerHTML = '';
        let entries = Object.entries(totals);
        // If empty, show placeholder cards
        if (items.length === 0) {
          stores.forEach(s => {
            const card = document.createElement('div');
            card.className = 'rounded-lg border border-neutral-800 bg-neutral-900/40 p-4';
            card.innerHTML = `
              <div class="text-sm font-medium">${s}</div>
              <div class="mt-1 text-[13px] text-neutral-400">Adicione itens para ver o total</div>
            `;
            storesGrid.appendChild(card);
          });
          bestStoreName.textContent = '—';
          bestStoreTotal.textContent = 'Adicione itens para ver os valores';
          bestStoreSaveWrap.style.display = 'none';
          updateChart(entries);
          return;
        }

        entries.sort((a,b)=>a[1]-b[1]);
        const best = entries[0];
        const worst = entries[entries.length - 1];
        const save = Math.max(0, worst[1] - best[1]);

        bestStoreName.textContent = `${best[0]} • ${currency(best[1])}`;
        bestStoreTotal.textContent = `Economia potencial vs. mais caro: ${currency(save)}`;
        bestStoreSave.textContent = `Você pode economizar até ${currency(save)} nesta compra`;
        bestStoreSaveWrap.style.display = save > 0 ? '' : 'none';

        entries.forEach(([name, total], idx) => {
          const isBest = name === best[0];
          const card = document.createElement('div');
          card.className = 'rounded-lg border p-4 transition-colors ' + (isBest ? 'border-emerald-700/50 bg-emerald-950/20' : 'border-neutral-800 bg-neutral-900/40');
          card.innerHTML = `
            <div class="flex items-center justify-between">
              <div class="text-sm font-medium">${name}</div>
              ${isBest ? '<span class="text-[11px] text-emerald-400 inline-flex items-center gap-1"><i data-lucide="crown" class="h-3.5 w-3.5"></i> Melhor</span>' : ''}
            </div>
            <div class="mt-2 text-xl font-semibold tracking-tight">${currency(total)}</div>
            <div class="mt-1 text-[12px] text-neutral-400">${isBest ? 'Menor total para sua lista' : 'Diferença: ' + currency(total - best[1])}</div>
          `;
          storesGrid.appendChild(card);
        });
        if (window.lucide) { window.lucide.createIcons(); document.querySelectorAll('[data-lucide]').forEach(el => el.setAttribute('stroke-width', '1.5')); }

        updateChart(entries);

        if (scrollToSection) {
          const section = document.getElementById('comparacao');
          section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }

      function updateChart(entries) {
        const c = ensureChart();
        const labels = entries.map(e => e[0]);
        const data = entries.map(e => Math.round((e[1] || 0) * 100) / 100);
        c.data.labels = labels;
        c.data.datasets[0].data = data;
        // Color bars: best highlighted
        if (data.length) {
          const minVal = Math.min(...data);
          c.data.datasets[0].backgroundColor = data.map(v => v === minVal ? '#34d399' : '#71717a');
        } else {
          c.data.datasets[0].backgroundColor = ['#71717a','#71717a','#71717a'];
        }
        c.update();
      }

      // Share (copy list)
      document.getElementById('shareBtn').addEventListener('click', async () => {
        const region = regionLabel.textContent || 'Região';
        const lines = items.map(i => `${i.qty}x ${i.name}`).join('\n');
        const text = `Minha lista no Comparato (${region}):\n${lines || '- (vazia)'}\n\nCompare em: https://www.comparato.space/`;
        try {
          await navigator.clipboard.writeText(text);
          alert('Lista copiada para a área de transferência.');
        } catch {
          alert('Não foi possível copiar. Selecione e copie manualmente:\n\n' + text);
        }
      });

      // Seed with example items for demo
      items = [{ name: 'arroz', qty: 2 }, { name: 'leite', qty: 3 }, { name: 'cafe', qty: 1 }];
      renderItems();
      updateCounter();
      computeAndRender();
    
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_-10%,rgba(99,102,241,.25),transparent)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_80%_20%,rgba(56,189,248,.15),transparent)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.0),rgba(0,0,0,.5))]"></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-800/60">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<span className="text-[11px] font-semibold tracking-tight">CP</span>
</div>
<span className="text-[15px] sm:text-[16px] font-semibold tracking-tight">Comparato</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
<a className="hover:text-white transition-colors" href="#como-funciona">Como funciona</a>
<a className="hover:text-white transition-colors" href="#comparacao">Comparação</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex h-9 px-3 rounded-md border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors">Entrar</button>
<button className="inline-flex h-9 px-3 rounded-md bg-white text-neutral-900 hover:bg-neutral-100 transition-colors">Começar grátis</button>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
<div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-xs text-neutral-300">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i>
              Otimize sua compra em minutos
            </div>
<h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold">
              A forma mais inteligente de economizar no supermercado
            </h1>
<p className="mt-4 text-neutral-300 text-base sm:text-[15px] leading-relaxed">
              Envie sua lista, compare preços entre mercados próximos e descubra onde comprar cada item pelo menor valor.
            </p>

<div className="mt-6 flex flex-col sm:flex-row gap-3">

<div className="relative w-full sm:w-60">
<button className="w-full h-11 px-3.5 rounded-md border border-neutral-800 bg-neutral-900/60 text-left text-sm text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900 transition-colors flex items-center justify-between" id="regionButton">
<span className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="map-pin"></i>
<span id="regionLabel">Selecionar região</span>
</span>
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute mt-2 w-full rounded-md border border-neutral-800 bg-neutral-900/95 backdrop-blur shadow-2xl" id="regionMenu">
<ul className="py-1 text-sm">
<li><button className="w-full text-left px-3 py-2 hover:bg-neutral-800/80" data-region="São Paulo, SP">São Paulo, SP</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-neutral-800/80" data-region="Rio de Janeiro, RJ">Rio de Janeiro, RJ</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-neutral-800/80" data-region="Belo Horizonte, MG">Belo Horizonte, MG</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-neutral-800/80" data-region="Porto Alegre, RS">Porto Alegre, RS</button></li>
</ul>
</div>
</div>
<button className="h-11 px-4 rounded-md bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-100 transition-colors inline-flex items-center justify-center gap-2" id="compareTop">
<i className="h-4 w-4" data-lucide="scan-line"></i>
                Comparar agora
              </button>
<button className="h-11 px-4 rounded-md border border-neutral-800 text-sm text-neutral-200 hover:text-white hover:border-neutral-700 transition-colors inline-flex items-center justify-center gap-2" id="importList">
<i className="h-4 w-4" data-lucide="clipboard-list"></i>
                Colar lista
              </button>
</div>

<div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
<div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-3">
<div className="text-[11px] text-neutral-400">Economia média</div>
<div className="mt-1 text-xl font-semibold tracking-tight">12% a 22%</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-3">
<div className="text-[11px] text-neutral-400">Mercados mapeados</div>
<div className="mt-1 text-xl font-semibold tracking-tight">+150</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-3">
<div className="text-[11px] text-neutral-400">Tempo médio</div>
<div className="mt-1 text-xl font-semibold tracking-tight">2 min</div>
</div>
</div>
</div>

<div className="lg:col-span-6">
<div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 sm:p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4.5 w-4.5" data-lucide="shopping-cart"></i>
<h2 className="text-lg sm:text-xl tracking-tight font-semibold">Sua lista de compras</h2>
</div>
<button className="text-xs text-neutral-300 hover:text-white px-2 py-1 rounded border border-neutral-800 hover:border-neutral-700 transition-colors" id="clearList">Limpar</button>
</div>

<div className="hidden mt-4" id="pasteArea">
<div className="rounded-lg border border-neutral-800 overflow-hidden">
<textarea className="w-full bg-neutral-950/60 text-sm p-3 outline-none placeholder:text-neutral-500" id="pasteInput" placeholder="Ex.: 2x arroz 5kg
1x feijão carioca
3x leite integral" rows="4"></textarea>
<div className="flex items-center justify-between border-t border-neutral-800 bg-neutral-950/60 p-2">
<span className="text-[12px] text-neutral-400">Dica: um item por linha. Use “2x nome do produto”.</span>
<div className="flex items-center gap-2">
<button className="text-xs px-2 py-1 rounded border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white" id="cancelPaste">Cancelar</button>
<button className="text-xs px-2 py-1 rounded bg-white text-neutral-900 hover:bg-neutral-100" id="applyPaste">Aplicar</button>
</div>
</div>
</div>
</div>

<div className="mt-4 grid grid-cols-12 gap-2">
<div className="col-span-8">
<label className="sr-only" htmlFor="itemName">Produto</label>
<div className="h-11 flex items-center rounded-md border border-neutral-800 bg-neutral-950/50 px-3 focus-within:border-neutral-700 transition-colors">
<i className="h-4 w-4 text-neutral-400" data-lucide="search"></i>
<input className="flex-1 bg-transparent outline-none text-sm pl-2 placeholder:text-neutral-500" id="itemName" placeholder="Ex.: arroz, feijão, leite..." type="text" />
</div>
</div>
<div className="col-span-2">
<label className="sr-only" htmlFor="itemQty">Qtd</label>
<input className="h-11 w-full rounded-md border border-neutral-800 bg-neutral-950/50 px-3 text-sm focus:border-neutral-700 outline-none" id="itemQty" min="1" type="number" value="1" />
</div>
<div className="col-span-2">
<button className="w-full h-11 rounded-md bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-100 transition-colors" id="addItem">Adicionar</button>
</div>
</div>

<div className="mt-4 divide-y divide-neutral-800 border-y border-neutral-800" id="itemsList">

</div>

<div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
<div className="text-sm text-neutral-300">
<span id="itemsCount">0</span> itens • <span id="itemsHint">adicione produtos para comparar</span>
</div>
<div className="flex items-center gap-2">
<button className="h-10 px-4 rounded-md bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-100 transition-colors inline-flex items-center gap-2" id="compareBtn">
<i className="h-4 w-4" data-lucide="scales"></i>
                    Comparar preços
                  </button>
<button className="h-10 px-3 rounded-md border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors inline-flex items-center gap-2" id="shareBtn">
<i className="h-4 w-4" data-lucide="share-2"></i>
                    Compartilhar
                  </button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12 sm:mt-16">
<div className="mx-auto max-w-7xl">
<div className="rounded-xl border border-neutral-800 bg-neutral-900/30 px-4 sm:px-6 py-4 sm:py-5">
<div className="grid sm:grid-cols-3 gap-4 text-center">
<div className="text-sm text-neutral-300">Sem spam, sem pegadinhas</div>
<div className="text-sm text-neutral-300">Preços atualizados frequentemente</div>
<div className="text-sm text-neutral-300">Funciona no celular</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-800" id="comparacao">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
<div className="grid lg:grid-cols-12 gap-8">
<div className="lg:col-span-4 space-y-4">
<div className="flex items-center gap-2">
<i className="h-5 w-5" data-lucide="bar-chart-3"></i>
<h3 className="text-2xl tracking-tight font-semibold">Comparação por mercado</h3>
</div>
<p className="text-sm text-neutral-300">Veja qual mercado é o mais vantajoso para sua lista agora.</p>
<div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-4" id="bestStore">
<div className="text-xs text-neutral-400">Melhor opção</div>
<div className="mt-1 text-xl font-semibold tracking-tight" id="bestStoreName">—</div>
<div className="mt-1 text-sm text-neutral-300" id="bestStoreTotal">Adicione itens para ver os valores</div>
<div className="mt-3 flex items-center gap-2 text-xs text-emerald-400" id="bestStoreSaveWrap" style={{display: `none`}}>
<i className="h-4 w-4" data-lucide="badge-percent"></i>
<span id="bestStoreSave"></span>
</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-4">
<div className="text-xs text-neutral-400">Dica</div>
<p className="mt-1 text-sm text-neutral-300">
                Combine mercados para economias ainda maiores. Nós destacamos os itens que valem a pena separar.
              </p>
</div>
</div>
<div className="lg:col-span-8 space-y-4">

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" id="storesGrid">

</div>

<div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
<div>
<h4 className="text-[18px] tracking-tight font-semibold">Totais por mercado</h4>
<p className="text-sm text-neutral-400">Valores estimados com base nos itens da sua lista</p>
</div>
<div className="mt-3 rounded-lg border border-neutral-800 bg-neutral-950/50 p-3">
<div className="relative h-64 sm:h-72">
<div className="h-full">
<canvas id="totalsChart"></canvas>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="flex items-center gap-2">
<i className="h-5 w-5" data-lucide="smartphone"></i>
<div>
<div className="text-[15px] font-medium tracking-tight">App móvel</div>
<div className="text-sm text-neutral-400">Acompanhe sua lista na loja e receba alertas de oferta.</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="h-10 px-3 rounded-md border border-neutral-800 text-neutral-400 cursor-not-allowed inline-flex items-center gap-2" disabled>
<i className="h-4 w-4" data-lucide="download"></i>
                  Em breve
                </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-800" id="como-funciona">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
<h3 className="text-2xl tracking-tight font-semibold">Como funciona</h3>
<div className="mt-6 grid md:grid-cols-3 gap-4">
<div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
<div className="flex items-center gap-2">
<i className="h-5 w-5" data-lucide="list-checks"></i>
<div className="text-[15px] font-medium tracking-tight">Monte sua lista</div>
</div>
<p className="mt-2 text-sm text-neutral-300">Adicione itens manualmente ou cole uma lista. Quantidades são consideradas no cálculo.</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
<div className="flex items-center gap-2">
<i className="h-5 w-5" data-lucide="radar"></i>
<div className="text-[15px] font-medium tracking-tight">Buscamos preços</div>
</div>
<p className="mt-2 text-sm text-neutral-300">Comparamos mercados próximos à sua região e estimamos o melhor total.</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
<div className="flex items-center gap-2">
<i className="h-5 w-5" data-lucide="wallet"></i>
<div className="text-[15px] font-medium tracking-tight">Economize de verdade</div>
</div>
<p className="mt-2 text-sm text-neutral-300">Veja onde comprar cada item pelo menor preço e reduza sua conta no fim do mês.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-800" id="faq">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
<h3 className="text-2xl tracking-tight font-semibold">Perguntas frequentes</h3>
<div className="mt-6 grid md:grid-cols-2 gap-4">
<div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
<div className="text-[15px] font-medium">De onde vêm os preços?</div>
<p className="mt-2 text-sm text-neutral-300">Usamos fontes públicas e atualizações frequentes enviadas por parceiros e usuários.</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
<div className="text-[15px] font-medium">Preciso criar conta?</div>
<p className="mt-2 text-sm text-neutral-300">Você pode testar sem cadastro. Para salvar listas e receber alertas, crie uma conta gratuita.</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<span className="text-[11px] font-semibold tracking-tight">CP</span>
</div>
<span className="text-[15px] font-semibold tracking-tight">Comparato</span>
</div>
<div className="text-sm text-neutral-400">© <span id="year"></span> Comparato. Todos os direitos reservados.</div>
</div>
</div>
</footer>


    </>
  );
}
