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
      {

tailwind.config = {
theme: {
extend: {
colors: {
base: '#171717',
accent: '#6EE7B7',
accentDark: '#2CE39D',
negative: '#FF5A5F',
warning: '#F7C948'
}
}
}
}

}

{

    // Icons
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) lucide.createIcons();
    });

    // Utility: show toast
    function showToast(msg = 'Done') {
      const t = document.getElementById('toast');
      t.textContent = msg;
      t.classList.remove('hidden', 'opacity-0');
      t.classList.add('opacity-100');
      setTimeout(() => {
        t.classList.add('opacity-0');
        setTimeout(() => t.classList.add('hidden'), 250);
      }, 1200);
    }

    // Copy order IDs
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.copy-id');
      if (!btn) return;
      const id = btn.dataset.id || btn.textContent.trim();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(id).then(() => showToast('Order ID copied'));
      }
    });

    // Tabs (top level)
    (function initTabs(){
      const tabButtons = [
        ...document.querySelectorAll('button[data-tab]'),
        ...document.querySelectorAll('button-tab[button-tab]')
      ];
      const panels = document.querySelectorAll('[id^="panel-"]');

      function activateTab(key){
        tabButtons.forEach(b => b.classList.remove('tab-active','tab-underline','text-neutral-200'));
        panels.forEach(p => p.classList.add('hidden'));
        const btn = tabButtons.find(b => (b.dataset.tab || b.getAttribute('button-tab')) === key);
        if (btn) btn.classList.add('tab-active','tab-underline','text-neutral-200');
        const panel = document.getElementById('panel-' + key);
        if (panel) panel.classList.remove('hidden');
      }

      tabButtons.forEach(btn => {
        btn.addEventListener('click', () => activateTab(btn.dataset.tab || btn.getAttribute('button-tab')));
      });

      // Default
      activateTab('balances');
    })();

    // Filter menu for balances
    (function initFilters(){
      const menuBtn = document.getElementById('filterBtn');
      const menu = document.getElementById('filterMenu');
      const rows = Array.from(document.querySelectorAll('#balancesBody tr'));

      function applyFilters(){
        const activeType = menu.dataset.activeFilter || 'all';
        const hideSmall = document.getElementById('hideSmallToggle').classList.contains('toggle-on');
        rows.forEach(r => {
          const typeOk = activeType === 'all' || r.dataset.type === activeType;
          const smallOk = !hideSmall || (parseFloat(r.dataset.usdc || '0') >= 100);
          r.classList.toggle('hidden', !(typeOk && smallOk));
        });
      }

      menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('hidden');
      });
      document.addEventListener('click', () => menu.classList.add('hidden'));
      menu.querySelectorAll('button[data-filter]').forEach(b => {
        b.addEventListener('click', () => {
          menu.dataset.activeFilter = b.dataset.filter;
          menu.classList.add('hidden');
          applyFilters();
        });
      });

      // Hide small toggle
      const toggle = document.getElementById('hideSmallToggle');
      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggle.classList.toggle('toggle-on');
        toggle.classList.toggle('toggle-off');
        applyFilters();
      });

      // Initial state
      toggle.classList.add('toggle-off');
      applyFilters();
    })();

    // Sorting for balances table
    (function initSorting(){
      const ths = document.querySelectorAll('thead .th-sort');
      const tbody = document.getElementById('balancesBody');
      let sortState = {};

      function parseNumber(text){
        if (!text) return 0;
        return parseFloat(String(text).replace(/[,$A-Z ]/g,'').replace(/USDC|BTC|ETH|SOL|IP|HYPE/gi,''));
      }

      function getCellValue(row, key){
        if (key === 'usdc') return parseFloat(row.dataset.usdc || '0');
        if (key === 'pnl') return parseFloat(row.dataset.pnl || '0');
        if (key === 'total') return parseNumber(row.children[1]?.textContent);
        if (key === 'avail') return parseNumber(row.children[2]?.textContent);
        return row.children[0]?.textContent.trim();
      }

      function sortRows(th){
        const type = th.dataset.sort || 'text';
        const key = th.dataset.key || 'text';
        const rows = Array.from(tbody.querySelectorAll('tr'));
        const dir = sortState[key] === 'asc' ? 'desc' : 'asc';
        sortState = {[key]: dir};

        rows.sort((a,b) => {
          const va = getCellValue(a, key);
          const vb = getCellValue(b, key);
          if (type === 'text') return dir === 'asc' ? String(va).localeCompare(String(vb)) : String(vb).localeCompare(String(va));
          return dir === 'asc' ? (va - vb) : (vb - va);
        });

        rows.forEach(r => tbody.appendChild(r));
      }

      ths.forEach(th => th.addEventListener('click', () => sortRows(th)));
    })();

    // TWAP subtabs
    (function initTwapTabs(){
      const tabBtns = document.querySelectorAll('.twap-tab');
      const sections = {
        active: document.getElementById('twap-active'),
        history: document.getElementById('twap-history'),
        fills: document.getElementById('twap-fills')
      };
      function setActive(k){
        tabBtns.forEach(b => b.classList.remove('btn-primary','text-neutral-900'));
        Object.values(sections).forEach(s => s.classList.add('hidden'));
        const btn = Array.from(tabBtns).find(b => b.dataset.twapTab === k);
        if (btn) btn.classList.add('btn-primary','text-neutral-900');
        sections[k]?.classList.remove('hidden');
      }
      tabBtns.forEach(b => b.addEventListener('click', () => setActive(b.dataset.twapTab)));
      setActive('active');
    })();

    // Bots: search, actions, drawer, refresh, create
    (function initBots(){
      const search = document.getElementById('botSearch');
      const table = document.getElementById('botsTable');
      const rows = () => Array.from(table.querySelectorAll('tbody .bot-row'));

      function filter(){
        const q = (search.value || '').toLowerCase();
        rows().forEach(r => {
          const name = r.dataset.name.toLowerCase();
          const pair = r.dataset.pair.toLowerCase();
          r.classList.toggle('hidden', !(name.includes(q) || pair.includes(q)));
        });
      }
      search.addEventListener('input', filter);

      // Drawer elements
      const drawer = document.getElementById('botDrawer');
      const overlay = document.getElementById('botDrawerOverlay');
      const closeBtn = document.getElementById('drawerClose');
      const title = document.getElementById('drawerTitle');
      const dot = document.getElementById('drawerStatusDot');
      const pair = document.getElementById('drawerPair');
      const strat = document.getElementById('drawerStrategy');
      const runtime = document.getElementById('drawerRuntime');
      const pnl = document.getElementById('drawerPNL');
      const activity = document.getElementById('drawerActivity');
      const primary = document.getElementById('drawerPrimaryAction');
      const secondary = document.getElementById('drawerSecondaryAction');
      let sparkChart;

      function openDrawer(data){
        title.textContent = data.name;
        pair.textContent = data.pair;
        strat.textContent = data.strategy;
        runtime.textContent = data.runtime;
        pnl.textContent = data.pnl;
        dot.className = 'status-dot ' + data.statusDot;
        primary.textContent = data.primaryAction || 'Pause';
        secondary.textContent = data.secondaryAction || 'Stop';
        activity.innerHTML = '';
        (data.activity || [
          'Checked signals',
          'Placed grid order',
          'Adjusted spread',
        ]).forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          activity.appendChild(li);
        });

        // Chart
        const ctx = document.getElementById('botSparkline').getContext('2d');
        const points = Array.from({length: 24}, () => Math.random() * 2 - 1).reduce((arr, v, i) => {
          arr.push((arr[i-1] || 0) + v);
          return arr;
        }, []).map(v => Math.round(v * 100) / 100);
        if (sparkChart) sparkChart.destroy();
        sparkChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: points.map((_, i) => i),
            datasets: [{
              data: points,
              borderColor: '#6EE7B7',
              pointRadius: 0,
              tension: 0.35,
              borderWidth: 2,
              fill: true,
              backgroundColor: 'rgba(110,231,183,0.08)'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: { x: { display: false }, y: { display: false } }
          }
        });

        overlay.classList.remove('hidden');
        requestAnimationFrame(() => drawer.classList.remove('translate-x-full'));
      }

      function closeDrawer(){
        drawer.classList.add('translate-x-full');
        setTimeout(() => overlay.classList.add('hidden'), 250);
      }

      overlay.addEventListener('click', closeDrawer);
      closeBtn.addEventListener('click', closeDrawer);

      // Row click -> open details
      table.addEventListener('click', (e) => {
        const row = e.target.closest('.bot-row');
        if (row && !e.target.closest('button')) {
          const data = parseBotRow(row);
          openDrawer(data);
        }
      });

      // Actions
      table.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-action]');
        if (!btn) return;
        const row = btn.closest('.bot-row');
        const action = btn.dataset.action;
        if (!row) return;

        if (action === 'pause' || action === 'resume') {
          setBotStatus(row, action === 'pause' ? 'paused' : 'running');
          btn.dataset.action = action === 'pause' ? 'resume' : 'pause';
          btn.textContent = action === 'pause' ? 'Resume' : 'Pause';
        } else if (action === 'stop') {
          row.remove();
          showToast('Bot stopped');
        } else if (action === 'retry') {
          setBotStatus(row, 'running');
          btn.dataset.action = 'pause';
          btn.textContent = 'Pause';
          showToast('Retrying bot');
        } else if (action === 'details') {
          const data = parseBotRow(row);
          openDrawer(data);
        }
      });

      function parseBotRow(row){
        const cols = row.querySelectorAll('td');
        const statusEl = row.querySelector('.status-dot');
        const statusDot = statusEl?.classList.contains('status-error') ? 'status-error'
                         : statusEl?.classList.contains('status-paused') ? 'status-paused'
                         : 'status-running';
        return {
          name: row.dataset.name,
          pair: row.dataset.pair,
          strategy: cols[2]?.textContent.trim(),
          runtime: cols[4]?.textContent.trim(),
          pnl: cols[5]?.textContent.trim(),
          statusDot,
          primaryAction: statusDot === 'status-running' ? 'Pause' : 'Resume',
          secondaryAction: 'Stop'
        };
      }

      function setBotStatus(row, state){
        const dot = row.querySelector('.status-dot');
        const label = row.querySelector('td:nth-child(4) span:last-child');
        if (!dot || !label) return;
        dot.classList.remove('status-running','status-paused','status-error');
        if (state === 'running') {
          dot.classList.add('status-running');
          label.textContent = 'Running';
          label.className = 'text-neutral-200';
        } else if (state === 'paused') {
          dot.classList.add('status-paused');
          label.textContent = 'Paused';
          label.className = 'text-neutral-400';
        }
      }

      // Refresh
      const refreshBtn = document.getElementById('refreshBots');
      refreshBtn.addEventListener('click', () => {
        const icon = refreshBtn.querySelector('svg');
        icon?.classList.add('animate-spin');
        setTimeout(() => icon?.classList.remove('animate-spin'), 800);
        // Simulate small pnl jitter
        rows().forEach(r => {
          const pnlCell = r.children[5];
          const dayCell = r.children[6];
          [pnlCell, dayCell].forEach(cell => {
            const val = parseFloat((cell.textContent || '').replace(/[+$,% ]/g,''));
            if (isNaN(val)) return;
            const delta = (Math.random() - 0.5) * 2;
            const next = Math.max(val + delta, -9999);
            const isPos = /[-]/.test(cell.textContent) ? next >= 0 ? true : false : next >= 0;
            cell.textContent = (next >= 0 ? '+' : '-') + Math.abs(next).toFixed(2);
            cell.classList.toggle('pnl-pos', next >= 0);
            cell.classList.toggle('pnl-neg', next < 0);
          });
        });
      });

      // New Bot modal
      const newBtn = document.getElementById('newBotBtn');
      const modal = document.getElementById('newBotModal');
      const modalClose = document.getElementById('newBotClose');
      const modalCancel = document.getElementById('newBotCancel');
      const form = document.getElementById('newBotForm');

      function closeModal(){ modal.classList.add('hidden'); }
      function openModal(){ modal.classList.remove('hidden'); }

      newBtn.addEventListener('click', openModal);
      modalClose.addEventListener('click', closeModal);
      modalCancel.addEventListener('click', closeModal);
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(form);
        const name = fd.get('name') || 'New Bot';
        const pairVal = fd.get('pair') || 'SOL/USDC';
        const strategy = fd.get('strategy') || 'Grid';
        const auto = document.getElementById('autoStart').checked;

        // Create row
        const tr = document.createElement('tr');
        tr.className = 'hover-row row-h bot-row';
        tr.dataset.name = name;
        tr.dataset.pair = pairVal;
        tr.innerHTML = `
          <td class="px-3 sm:px-4 font-medium">${name}</td>
          <td class="px-3 sm:px-4">${pairVal}</td>
          <td class="px-3 sm:px-4">${strategy}</td>
          <td class="px-3 sm:px-4">
            <span class="inline-flex items-center gap-2">
              <span class="status-dot ${auto ? 'status-running' : 'status-paused'}"></span>
              <span class="${auto ? 'text-neutral-200' : 'text-neutral-400'}">${auto ? 'Running' : 'Paused'}</span>
            </span>
          </td>
          <td class="px-3 sm:px-4 text-right nums">0m</td>
          <td class="px-3 sm:px-4 text-right nums ${auto ? 'pnl-pos' : ''}">${auto ? '+$0.00' : '$0.00'}</td>
          <td class="px-3 sm:px-4 text-right nums">$0.00</td>
          <td class="px-3 sm:px-4">
            <div class="flex items-center gap-2">
              <button class="focus-accent text-[12px] px-2 py-1 rounded-md hover:bg-white/5" data-action="${auto ? 'pause' : 'resume'}">${auto ? 'Pause' : 'Resume'}</button>
              <button class="focus-accent text-[12px] px-2 py-1 rounded-md hover:bg-white/5" data-action="details">Details</button>
              <button class="focus-accent text-[12px] px-2 py-1 rounded-md hover:bg-white/5 text-red-300" data-action="stop">Stop</button>
            </div>
          </td>
        `;
        table.querySelector('tbody').prepend(tr);
        closeModal();
        showToast('Bot created');
        form.reset();
      });
    })();
  
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
      

<div className="min-h-screen w-full">

<section className="glass w-full border-b hairline">

<div className="glass-header sticky-header border-b hairline">
<div className="mx-auto max-w-[1600px] px-3 sm:px-4">
<div className="flex items-center justify-between h-12">
<div className="text-[13px] font-semibold tracking-tight text-neutral-200">Portfolio</div>
<div className="flex items-center gap-3">

<div className="relative">
<button className="btn-soft focus-accent h-8 px-3 rounded-md flex items-center gap-2 text-[12px]" id="filterBtn">
<i className="w-3.5 h-3.5" data-lucide="sliders-horizontal"></i>
<span className="text-neutral-300">Filter</span>
<i className="w-3.5 h-3.5" data-lucide="chevron-down"></i>
</button>
<div className="absolute right-0 mt-2 w-44 glass border hairline rounded-md p-2 hidden" id="filterMenu">
<button className="w-full text-left px-2 py-1.5 rounded hover:bg-white/5 text-[12px]" data-filter="all">All</button>
<button className="w-full text-left px-2 py-1.5 rounded hover:bg-white/5 text-[12px]" data-filter="perp">Perps</button>
<button className="w-full text-left px-2 py-1.5 rounded hover:bg-white/5 text-[12px]" data-filter="spot">Spot</button>
</div>
</div>

<button className="focus-accent flex items-center gap-2 rounded-md px-2 py-1.5" id="hideSmallToggle">
<span className="relative toggle-off flex items-center">
<span className="toggle-track border hairline"></span>
<span className="toggle-knob absolute left-[2px]"></span>
</span>
<span className="text-[12px] text-neutral-300">Hide Small Balances</span>
</button>
</div>
</div>
</div>
</div>

<div className="glass-header sticky-tabs border-b hairline">
<div className="mx-auto max-w-[1600px]">
<div className="flex gap-1 overflow-x-auto scrollbar-thin snap-x snap-mandatory px-2 sm:px-4" id="tabs">

<button className="tab-btn relative h-9 px-3 sm:px-4 text-[12.5px] font-medium text-neutral-400 snap-start" data-tab="balances">Balances</button>
<button className="tab-btn relative h-9 px-3 sm:px-4 text-[12.5px] font-medium text-neutral-400 snap-start" data-tab="positions">Positions</button>
<button-tab className="tab-btn relative h-9 px-3 sm:px-4 text-[12.5px] font text-neutral-400 snap-start">Open Orders
<button className="tab-btn relative h-9 px-3 sm:px-4 text-[12.5px] font-medium text-neutral-400 snap-start" data-tab="twap">TWAP</button>
<button className="tab-btn relative h-9 px-3 sm:px-4 text-[12.5px] font-medium text-neutral-400 snap-start" data-tab="tradeHistory">Trade History</button>
<button className="tab-btn relative h-9 px-3 sm:px-4 text-[12.5px] font-medium text-neutral-400 snap-start" data-tab="fundingHistory">Funding History</button>
<button className="tab-btn relative h-9 px-3 sm:px-4 text-[12.5px] font-medium text-neutral-400 snap-start" data-tab="orderHistory">Order History</button>
<button className="tab-btn relative h-9 px-3 sm:px-4 text-[12.5px] font-medium text-neutral-400 snap-start" data-tab="activeBots">Active Bots</button>
</button-tab></div>
</div>
</div>

<div className="mx-auto max-w-[1600px] px-2 sm:px-4 pb-24">

<section className="pt-4" id="panel-balances">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
<div className="tag rounded-md p-3">
<div className="text-[11px] uppercase text-neutral-400">Total Balance</div>
<div className="nums text-[14px] font-semibold tracking-tight">$188,435.50</div>
</div>
<div className="tag rounded-md p-3">
<div className="text-[11px] uppercase text-neutral-400">Available</div>
<div className="nums text-[14px] font-semibold tracking-tight">$123,421.64</div>
</div>
<div className="tag rounded-md p-3">
<div className="text-[11px] uppercase text-neutral-400">USDC Value</div>
<div className="nums text-[14px] font-semibold tracking-tight">$188,435.50</div>
</div>
<div className="tag rounded-md p-3">
<div className="text-[11px] uppercase text-neutral-400">PNL (ROE%)</div>
<div className="nums text-[14px] font-semibold tracking-tight"><span className="pnl-pos">+$2,481.34 (+2.1%)</span></div>
</div>
</div>

<div className="md-table mt-3 overflow-x-auto scrollbar-thin">
<table className="w-full text-[12px]">
<thead className="sticky top-[86px] glass-header border-b hairline thead-h">
<tr className="text-neutral-400">
<th className="text-left px-3 sm:px-4 font-medium th-sort" data-sort="text">Coin</th>
<th className="text-right px-3 sm:px-4 font-medium th-sort" data-key="total" data-sort="num">Total Balance</th>
<th className="text-right px-3 sm:px-4 font-medium th-sort" data-key="avail" data-sort="num">Available Balance</th>
<th className="text-right px-3 sm:px-4 font-medium th-sort" data-key="usdc" data-sort="num">USDC Value</th>
<th className="text-right px-3 sm:px-4 font-medium th-sort" data-key="pnl" data-sort="pnl">PNL (ROE%)</th>
<th className="text-left px-3 sm:px-4 font-medium">Send</th>
<th className="text-left px-3 sm:px-4 font-medium">Transfer</th>
<th className="text-left px-3 sm:px-4 font-medium">Contract</th>
</tr>
</thead>
<tbody className="divide-y rowline" id="balancesBody">

<tr className="hover-row row-h" data-pnl="" data-type="perp" data-usdc="221.58">
<td className="px-3 sm:px-4">USDC (Perps)</td>
<td className="px-3 sm:px-4 text-right nums font-semibold">221.58 USDC</td>
<td className="px-3 sm:px-4 text-right nums font-semibold"><button className="link focus-accent underline-offset-2">21.64 USDC</button></td>
<td className="px-3 sm:px-4 text-right nums font-semibold">$221.58</td>
<td className="px-3 sm:px-4 text-right nums text-neutral-500">—</td>
<td className="px-3 sm:px-4"><button className="link focus-accent">Send</button></td>
<td className="px-3 sm:px-4"><button className="link focus-accent">Transfer to Spot</button></td>
<td className="px-3 sm:px-4 text-neutral-500">—</td>
</tr>
<tr className="hover-row row-h" data-pnl="" data-type="spot" data-usdc="1845.12">
<td className="px-3 sm:px-4">USDC (Spot)</td>
<td className="px-3 sm:px-4 text-right nums font-semibold">1,845.12 USDC</td>
<td className="px-3 sm:px-4 text-right nums font-semibold"><button className="link focus-accent underline-offset-2">1,220.00 USDC</button></td>
<td className="px-3 sm:px-4 text-right nums font-semibold">$1,845.12</td>
<td className="px-3 sm:px-4 text-right nums text-neutral-500">—</td>
<td className="px-3 sm:px-4"><button className="link focus-accent">Send</button></td>
<td className="px-3 sm:px-4"><button className="link focus-accent">Transfer to Perps</button></td>
<td className="px-3 sm:px-4 text-neutral-500">—</td>
</tr>
<tr className="hover-row row-h" data-pnl="+312.11" data-type="spot" data-usdc="9240.50">
<td className="px-3 sm:px-4">BTC</td>
<td className="px-3 sm:px-4 text-right nums font-semibold">0.1420 BTC</td>
<td className="px-3 sm:px-4 text-right nums font-semibold">0.0500 BTC</td>
<td className="px-3 sm:px-4 text-right nums font-semibold">$9,240.50</td>
<td className="px-3 sm:px-4 text-right nums"><span className="pnl-pos">+$312.11 (+3.5%)</span></td>
<td className="px-3 sm:px-4"><button className="link focus-accent">Send</button></td>
<td className="px-3 sm:px-4"><button className="link focus-accent">Transfer</button></td>
<td className="px-3 sm:px-4">Perp</td>
</tr>
<tr className="hover-row row-h" data-pnl="-118.44" data-type="spot" data-usdc="9905.40">
<td className="px-3 sm:px-4">ETH</td>
<td className="px-3 sm:px-4 text-right nums font-semibold">2.870 ETH</td>
<td className="px-3 sm:px-4 text-right nums font-semibold">0.900 ETH</td>
<td className="px-3 sm:px-4 text-right nums font-semibold">$9,905.40</td>
<td className="px-3 sm:px-4 text-right nums"><span className="pnl-neg">-$118.44 (-1.2%)</span></td>
<td className="px-3 sm:px-4"><button className="link focus-accent">Send</button></td>
<td className="px-3 sm:px-4"><button className="link focus-accent">Transfer</button></td>
<td className="px-3 sm:px-4">Perp</td>
</tr>
<tr className="hover-row row-h" data-pnl="+2034.70" data-type="spot" data-usdc="58356.00">
<td className="px-3 sm:px-4">SOL</td>
<td className="px-3 sm:px-4 text-right nums font-semibold">380.25 SOL</td>
<td className="px-3 sm:px-4 text-right nums font-semibold">120.00 SOL</td>
<td className="px-3 sm:px-4 text-right nums font-semibold">$58,356.00</td>
<td className="px-3 sm:px-4 text-right nums"><span className="pnl-pos">+$2,034.70 (+3.6%)</span></td>
<td className="px-3 sm:px-4"><button className="link focus-accent">Send</button></td>
<td className="px-3 sm:px-4"><button className="link focus-accent">Transfer</button></td>
<td className="px-3 sm:px-4">Spot</td>
</tr>
<tr className="hover-row row-h" data-pnl="-4210.00" data-type="spot" data-usdc="130240.00">
<td className="px-3 sm:px-4">HYPE</td>
<td className="px-3 sm:px-4 text-right nums font-semibold">2,950 HYPE</td>
<td className="px-3 sm:px-4 text-right nums font-semibold">1,100 HYPE</td>
<td className="px-3 sm:px-4 text-right nums font-semibold">$130,240.00</td>
<td className="px-3 sm:px-4 text-right nums"><span className="pnl-neg">-$4,210.00 (-3.1%)</span></td>
<td className="px-3 sm:px-4"><button className="link focus-accent">Send</button></td>
<td className="px-3 sm:px-4"><button className="link focus-accent">Transfer</button></td>
<td className="px-3 sm:px-4">Perp</td>
</tr>
<tr className="hover-row row-h" data-pnl="+145.00" data-type="spot" data-usdc="8972.00">
<td className="px-3 sm:px-4">IP</td>
<td className="px-3 sm:px-4 text-right nums font-semibold">1,240 IP</td>
<td className="px-3 sm:px-4 text-right nums font-semibold">200 IP</td>
<td className="px-3 sm:px-4 text-right nums font-semibold">$8,972.00</td>
<td className="px-3 sm:px-4 text-right nums"><span className="pnl-pos">+$145.00 (+1.6%)</span></td>
<td className="px-3 sm:px-4"><button className="link focus-accent">Send</button></td>
<td className="px-3 sm:px-4"><button className="link focus-accent">Transfer</button></td>
<td className="px-3 sm:px-4">Perp</td>
</tr>
</tbody>
</table>
</div>

<div className="md-list mt-3 space-y-2">

<div className="glass rounded-md border hairline p-3">
<div className="flex items-center justify-between">
<div className="font-medium">USDC (Perps)</div>
<div className="text-xs nums">$221.58</div>
</div>
<div className="mt-2 grid grid-cols-2 gap-2 text-[12px]">
<div className="text-neutral-400">Total</div><div className="text-right nums font-semibold">221.58 USDC</div>
<div className="text-neutral-400">Available</div><div className="text-right"><button className="link">21.64 USDC</button></div>
<div className="text-neutral-400">PNL</div><div className="text-right text-neutral-500">—</div>
<div className="col-span-2 flex gap-3 pt-2">
<button className="link">Send</button>
<button className="link">Transfer to Spot</button>
</div>
</div>
</div>
<div className="glass rounded-md border hairline p-3">
<div className="flex items-center justify-between">
<div className="font-medium">USDC (Spot)</div>
<div className="text-xs nums">$1,845.12</div>
</div>
<div className="mt-2 grid grid-cols-2 gap-2 text-[12px]">
<div className="text-neutral-400">Total</div><div className="text-right nums font-semibold">1,845.12 USDC</div>
<div className="text-neutral-400">Available</div><div className="text-right"><button className="link">1,220.00 USDC</button></div>
<div className="text-neutral-400">PNL</div><div className="text-right text-neutral-500">—</div>
<div className="col-span-2 flex gap-3 pt-2">
<button className="link">Send</button>
<button className="link">Transfer to Perps</button>
</div>
</div>
</div>
<div className="glass rounded-md border hairline p-3">
<div className="flex items-center justify-between">
<div className="font-medium">BTC</div>
<div className="text-xs nums">$9,240.50</div>
</div>
<div className="mt-2 grid grid-cols-2 gap-2 text-[12px]">
<div className="text-neutral-400">Total</div><div className="text-right nums font-semibold">0.1420 BTC</div>
<div className="text-neutral-400">Available</div><div className="text-right nums font-semibold">0.0500 BTC</div>
<div className="text-neutral-400">PNL</div><div className="text-right nums pnl-pos">+$312.11 (+3.5%)</div>
<div className="col-span-2 flex gap-3 pt-2">
<button className="link">Send</button>
<button className="link">Transfer</button>
</div>
</div>
</div>
<div className="glass rounded-md border hairline p-3">
<div className="flex items-center justify-between">
<div className="font-medium">ETH</div>
<div className="text-xs nums">$9,905.40</div>
</div>
<div className="mt-2 grid grid-cols-2 gap-2 text-[12px]">
<div className="text-neutral-400">Total</div><div className="text-right nums font-semibold">2.870 ETH</div>
<div className="text-neutral-400">Available</div><div className="text-right nums font-semibold">0.900 ETH</div>
<div className="text-neutral-400">PNL</div><div className="text-right nums pnl-neg">-$118.44 (-1.2%)</div>
<div className="col-span-2 flex gap-3 pt-2">
<button className="link">Send</button>
<button className="link">Transfer</button>
</div>
</div>
</div>
<div className="glass rounded-md border hairline p-3">
<div className="flex items-center justify-between">
<div className="font-medium">SOL</div>
<div className="text-xs nums">$58,356.00</div>
</div>
<div className="mt-2 grid grid-cols-2 gap-2 text-[12px]">
<div className="text-neutral-400">Total</div><div className="text-right nums font-semibold">380.25 SOL</div>
<div className="text-neutral-400">Available</div><div className="text-right nums font-semibold">120.00 SOL</div>
<div className="text-neutral-400">PNL</div><div className="text-right nums pnl-pos">+$2,034.70 (+3.6%)</div>
<div className="col-span-2 flex gap-3 pt-2">
<button className="link">Send</button>
<button className="link">Transfer</button>
</div>
</div>
</div>
<div className="glass rounded-md border hairline p-3">
<div className="flex items-center justify-between">
<div className="font-medium">HYPE</div>
<div className="text-xs nums">$130,240.00</div>
</div>
<div className="mt-2 grid grid-cols-2 gap-2 text-[12px]">
<div className="text-neutral-400">Total</div><div className="text-right nums font-semibold">2,950 HYPE</div>
<div className="text-neutral-400">Available</div><div className="text-right nums font-semibold">1,100 HYPE</div>
<div className="text-neutral-400">PNL</div><div className="text-right nums pnl-neg">-$4,210.00 (-3.1%)</div>
<div className="col-span-2 flex gap-3 pt-2">
<button className="link">Send</button>
<button className="link">Transfer</button>
</div>
</div>
</div>
<div className="glass rounded-md border hairline p-3">
<div className="flex items-center justify-between">
<div className="font-medium">IP</div>
<div className="text-xs nums">$8,972.00</div>
</div>
<div className="mt-2 grid grid-cols-2 gap-2 text-[12px]">
<div className="text-neutral-400">Total</div><div className="text-right nums font-semibold">1,240 IP</div>
<div className="text-neutral-400">Available</div><div className="text-right nums font-semibold">200 IP</div>
<div className="text-neutral-400">PNL</div><div className="text-right nums pnl-pos">+$145.00 (+1.6%)</div>
<div className="col-span-2 flex gap-3 pt-2">
<button className="link">Send</button>
<button className="link">Transfer</button>
</div>
</div>
</div>
</div>
</section>

<section className="hidden pt-4" id="panel-positions">

<div className="flex flex-wrap gap-2">
<div className="tag rounded-md px-2.5 py-1.5 text-[12px]">IP · <span className="nums">3x</span></div>
<div className="tag rounded-md px-2.5 py-1.5 text-[12px]">Position Value <span className="nums font-semibold">$599.88</span></div>
<div className="tag rounded-md px-2.5 py-1.5 text-[12px]">Entry <span className="nums">7.5160</span></div>
<div className="tag rounded-md px-2.5 py-1.5 text-[12px]">Mark <span className="nums">7.8416</span></div>
<div className="tag rounded-md px-2.5 py-1.5 text-[12px]">PNL <span className="nums pnl-pos">+$24.91 (+13.0%)</span></div>
<div className="tag rounded-md px-2.5 py-1.5 text-[12px]">Liq <span className="nums">5.9332</span></div>
<div className="tag rounded-md px-2.5 py-1.5 text-[12px]">Margin <span className="nums">$199.96</span> (Cross)</div>
<div className="tag rounded-md px-2.5 py-1.5 text-[12px]">Funding <span className="nums">$0.09</span></div>
</div>

<div className="mt-3 overflow-x-auto scrollbar-thin">
<table className="w-full text-[12px]">
<thead className="sticky top-[86px] glass-header border-b hairline thead-h">
<tr className="text-neutral-400">
<th className="text-left px-3 sm:px-4 font-medium">Coin</th>
<th className="text-right px-3 sm:px-4 font-medium">Size</th>
<th className="text-right px-3 sm:px-4 font-medium">Position Value</th>
<th className="text-right px-3 sm:px-4 font-medium">Entry Price</th>
<th className="text-right px-3 sm:px-4 font-medium">Mark Price</th>
<th className="text-right px-3 sm:px-4 font-medium">PNL (ROE%)</th>
<th className="text-right px-3 sm:px-4 font-medium">Liq. Price</th>
<th className="text-right px-3 sm:px-4 font-medium">Margin</th>
<th className="text-right px-3 sm:px-4 font-medium">Funding</th>
<th className="text-left px-3 sm:px-4 font-medium">Close All</th>
<th className="text-left px-3 sm:px-4 font-medium">TP/SL</th>
</tr>
</thead>
<tbody className="divide-y rowline">
<tr className="hover-row row-h">
<td className="px-3 sm:px-4">IP (3x)</td>
<td className="px-3 sm:px-4 text-right nums font-semibold">76.5 IP</td>
<td className="px-3 sm:px-4 text-right nums font-semibold">$599.88</td>
<td className="px-3 sm:px-4 text-right nums">7.5160</td>
<td className="px-3 sm:px-4 text-right nums">7.8416</td>
<td className="px-3 sm:px-4 text-right nums pnl-pos">+$24.91 (+13.0%)</td>
<td className="px-3 sm:px-4 text-right nums">5.9332</td>
<td className="px-3 sm:px-4 text-right nums">$199.96 (Cross)</td>
<td className="px-3 sm:px-4 text-right nums">$0.09</td>
<td className="px-3 sm:px-4"><button className="link">Limit</button> · <button className="link">Market</button></td>
<td className="px-3 sm:px-4">-- / --</td>
</tr>
<tr className="hover-row row-h">
<td className="px-3 sm:px-4">BTC (5x Short)</td>
<td className="px-3 sm:px-4 text-right nums font-semibold">0.036 BTC</td>
<td className="px-3 sm:px-4 text-right nums font-semibold">$3,960.11</td>
<td className="px-3 sm:px-4 text-right nums">110,001</td>
<td className="px-3 sm:px-4 text-right nums">109,720</td>
<td className="px-3 sm:px-4 text-right nums pnl-pos">+$113.78 (+2.9%)</td>
<td className="px-3 sm:px-4 text-right nums">121,500</td>
<td className="px-3 sm:px-4 text-right nums">$792.02 (Isolated)</td>
<td className="px-3 sm:px-4 text-right nums">$0.22</td>
<td className="px-3 sm:px-4"><button className="link">Limit</button> · <button className="link">Market</button></td>
<td className="px-3 sm:px-4">107,772 / 111,040</td>
</tr>
<tr className="hover-row row-h">
<td className="px-3 sm:px-4">HYPE (4x Short)</td>
<td className="px-3 sm:px-4 text-right nums font-semibold">47.8 HYPE</td>
<td className="px-3 sm:px-4 text-right nums font-semibold">$2,120.64</td>
<td className="px-3 sm:px-4 text-right nums">44.431</td>
<td className="px-3 sm:px-4 text-right nums">44.318</td>
<td className="px-3 sm:px-4 text-right nums pnl-pos">+$5.35 (+0.3%)</td>
<td className="px-3 sm:px-4 text-right nums">49.980</td>
<td className="px-3 sm:px-4 text-right nums">$530.16 (Cross)</td>
<td className="px-3 sm:px-4 text-right nums">$0.10</td>
<td className="px-3 sm:px-4"><button className="link">Limit</button> · <button className="link">Market</button></td>
<td className="px-3 sm:px-4">44.223 / 44.584</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="hidden pt-4" id="panel-openOrders">
<div className="overflow-x-auto scrollbar-thin">
<table className="w-full text-[12px]">
<thead className="sticky top-[86px] glass-header border-b hairline thead-h">
<tr className="text-neutral-400">
<th className="text-left px-3 sm:px-4 font-medium th-sort" data-sort="text">Time</th>
<th className="text-left px-3 sm:px-4 font-medium">Type</th>
<th className="text-left px-3 sm:px-4 font-medium">Coin</th>
<th className="text-left px-3 sm:px-4 font-medium">Direction</th>
<th className="text-right px-3 sm:px-4 font-medium">Size</th>
<th className="text-right px-3 sm:px-4 font-medium">Original Size</th>
<th className="text-right px-3 sm:px-4 font-medium">Order Value</th>
<th className="text-right px-3 sm:px-4 font-medium">Price</th>
<th className="text-left px-3 sm:px-4 font-medium">Reduce Only</th>
<th className="text-left px-3 sm:px-4 font-medium">Trigger Conditions</th>
<th className="text-left px-3 sm:px-4 font-medium">TP/SL</th>
<th className="text-left px-3 sm:px-4 font-medium">Cancel</th>
</tr>
</thead>
<tbody className="divide-y rowline">
<tr className="hover-row row-h">
<td className="px-3 sm:px-4">2025/9/03 10:02:11</td>
<td className="px-3 sm:px-4">Limit</td>
<td className="px-3 sm:px-4">BTC</td>
<td className="px-3 sm:px-4">Buy</td>
<td className="px-3 sm:px-4 text-right nums">0.015</td>
<td className="px-3 sm:px-4 text-right nums">0.030</td>
<td className="px-3 sm:px-4 text-right nums">$983.40</td>
<td className="px-3 sm:px-4 text-right nums">65,560</td>
<td className="px-3 sm:px-4">No</td>
<td className="px-3 sm:px-4">N/A</td>
<td className="px-3 sm:px-4">--</td>
<td className="px-3 sm:px-4"><button className="link">Cancel</button></td>
</tr>
<tr className="hover-row row-h">
<td className="px-3 sm:px-4">2025/9/03 09:58:02</td>
<td className="px-3 sm:px-4">Stop Market</td>
<td className="px-3 sm:px-4">ETH</td>
<td className="px-3 sm:px-4">Sell</td>
<td className="px-3 sm:px-4 text-right nums">--</td>
<td className="px-3 sm:px-4 text-right nums">1.200</td>
<td className="px-3 sm:px-4 text-right nums">--</td>
<td className="px-3 sm:px-4 text-right nums">Market</td>
<td className="px-3 sm:px-4">Yes</td>
<td className="px-3 sm:px-4">Price below 3,320</td>
<td className="px-3 sm:px-4">SL</td>
<td className="px-3 sm:px-4"><button className="link">Cancel</button></td>
</tr>
<tr className="hover-row row-h">
<td className="px-3 sm:px-4">2025/9/03 09:37:45</td>
<td className="px-3 sm:px-4">Limit</td>
<td className="px-3 sm:px-4">SOL</td>
<td className="px-3 sm:px-4">Sell</td>
<td className="px-3 sm:px-4 text-right nums">80.0</td>
<td className="px-3 sm:px-4 text-right nums">80.0</td>
<td className="px-3 sm:px-4 text-right nums">$12,960.00</td>
<td className="px-3 sm:px-4 text-right nums">162.00</td>
<td className="px-3 sm:px-4">No</td>
<td className="px-3 sm:px-4">N/A</td>
<td className="px-3 sm:px-4">TP</td>
<td className="px-3 sm:px-4"><button className="link">Cancel</button></td>
</tr>
<tr className="hover-row row-h">
<td className="px-3 sm:px-4">2025/9/03 08:15:10</td>
<td className="px-3 sm:px-4">Stop Limit</td>
<td className="px-3 sm:px-4">IP</td>
<td className="px-3 sm:px-4">Buy</td>
<td className="px-3 sm:px-4 text-right nums">30.0</td>
<td className="px-3 sm:px-4 text-right nums">80.0</td>
<td className="px-3 sm:px-4 text-right nums">$620.40</td>
<td className="px-3 sm:px-4 text-right nums">7.65</td>
<td className="px-3 sm:px-4">No</td>
<td className="px-3 sm:px-4">Trigger 7.60</td>
<td className="px-3 sm:px-4">--</td>
<td className="px-3 sm:px-4"><button className="link">Cancel</button></td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="hidden pt-4" id="panel-twap">
<div className="flex gap-2 pb-2 overflow-x-auto scrollbar-thin">
<button className="twap-tab btn-soft rounded-md px-3 h-8 text-[12px] font-medium" data-twap-tab="active">Active</button>
<button className="twap-tab btn-soft rounded-md px-3 h-8 text-[12px] font-medium" data-twap-tab="history">History</button>
<button className="twap-tab btn-soft rounded-md px-3 h-8 text-[12px] font-medium" data-twap-tab="fills">Fill History</button>
</div>

<div className="mt-2 overflow-x-auto scrollbar-thin" id="twap-active">
<table className="w-full text-[12px]">
<thead className="sticky top-[86px] glass-header border-b hairline thead-h">
<tr className="text-neutral-400">
<th className="text-left px-3 sm:px-4 font-medium">Coin</th>
<th className="text-right px-3 sm:px-4 font-medium">Size</th>
<th className="text-right px-3 sm:px-4 font-medium">Executed Size</th>
<th className="text-right px-3 sm:px-4 font-medium">Average Price</th>
<th className="text-right px-3 sm:px-4 font-medium">Running Time / Total</th>
<th className="text-left px-3 sm:px-4 font-medium">Reduce Only</th>
<th className="text-left px-3 sm:px-4 font-medium">Creation Time</th>
<th className="text-left px-3 sm:px-4 font-medium">Terminate</th>
</tr>
</thead>
<tbody className="divide-y rowline">
<tr className="hover-row row-h">
<td className="px-3 sm:px-4">BTC</td>
<td className="px-3 sm:px-4 text-right nums">0.120</td>
<td className="px-3 sm:px-4 text-right nums">0.048</td>
<td className="px-3 sm:px-4 text-right nums">65,980</td>
<td className="px-3 sm:px-4 text-right nums">00:08:21 / 00:30:00</td>
<td className="px-3 sm:px-4">No</td>
<td className="px-3 sm:px-4">2025/9/03 09:50:00</td>
<td className="px-3 sm:px-4"><button className="link">Terminate</button></td>
</tr>
<tr className="hover-row row-h">
<td className="px-3 sm:px-4">ETH</td>
<td className="px-3 sm:px-4 text-right nums">2.00</td>
<td className="px-3 sm:px-4 text-right nums">0.60</td>
<td className="px-3 sm:px-4 text-right nums">3,370</td>
<td className="px-3 sm:px-4 text-right nums">00:03:05 / 00:15:00</td>
<td className="px-3 sm:px-4">Yes</td>
<td className="px-3 sm:px-4">2025/9/03 09:57:00</td>
<td className="px-3 sm:px-4"><button className="link">Terminate</button></td>
</tr>
</tbody>
</table>
</div>

<div className="hidden mt-2" id="twap-history">
<div className="glass rounded-md border hairline p-3 text-[12px]">
<div className="text-neutral-400">Recent TWAP History</div>
<ul className="mt-2 space-y-1">
<li><span className="nums">2025/9/03 10:00:02</span> BTC filled 0.012 @ 66,020</li>
<li><span className="nums">2025/9/03 09:56:40</span> ETH filled 0.10 @ 3,372</li>
<li><span className="nums">2025/9/03 09:54:02</span> BTC partial 0.006 @ 65,995</li>
</ul>
</div>
</div>

<div className="hidden mt-2" id="twap-fills">
<div className="glass rounded-md border hairline p-3 text-[12px]">
<div className="text-neutral-400">Fill History</div>
<ul className="mt-2 space-y-1">
<li><span className="nums">09:59:01</span> BTC 0.008 @ 66,010</li>
<li><span className="nums">09:57:20</span> ETH 0.05 @ 3,371</li>
<li><span className="nums">09:54:50</span> BTC 0.004 @ 65,990</li>
</ul>
</div>
</div>
</section>

<section className="hidden pt-4" id="panel-tradeHistory">
<div className="overflow-x-auto scrollbar-thin">
<table className="w-full text-[12px]">
<thead className="sticky top-[86px] glass-header border-b hairline thead-h">
<tr className="text-neutral-400">
<th className="text-left px-3 sm:px-4 font-medium">Time</th>
<th className="text-left px-3 sm:px-4 font-medium">Coin</th>
<th className="text-left px-3 sm:px-4 font-medium">Direction</th>
<th className="text-right px-3 sm:px-4 font-medium">Price</th>
<th className="text-right px-3 sm:px-4 font-medium">Size</th>
<th className="text-right px-3 sm:px-4 font-medium">Trade Value</th>
<th className="text-right px-3 sm:px-4 font-medium">Fee</th>
<th className="text-right px-3 sm:px-4 font-medium">Closed PNL</th>
</tr>
</thead>
<tbody className="divide-y rowline">
<tr className="hover-row row-h">
<td className="px-3 sm:px-4">2025/9/03 10:05:30</td><td className="px-3 sm:px-4">SOL</td><td className="px-3 sm:px-4">Close Short</td>
<td className="px-3 sm:px-4 text-right nums">161.90</td><td className="px-3 sm:px-4 text-right nums">40.0 SOL</td>
<td className="px-3 sm:px-4 text-right nums">6,476.00 USDC</td><td className="px-3 sm:px-4 text-right nums">2.60 USDC</td>
<td className="px-3 sm:px-4 text-right nums pnl-neg">-18.90 USDC</td>
</tr>
<tr className="hover-row row-h">
<td className="px-3 sm:px-4">2025/9/03 10:04:21</td><td className="px-3 sm:px-4">SOL</td><td className="px-3 sm:px-4">Open Short</td>
<td className="px-3 sm:px-4 text-right nums">162.20</td><td className="px-3 sm:px-4 text-right nums">40.0 SOL</td>
<td className="px-3 sm:px-4 text-right nums">6,488.00 USDC</td><td className="px-3 sm:px-4 text-right nums">2.60 USDC</td>
<td className="px-3 sm:px-4 text-right nums pnl-neg">-2.60 USDC</td>
</tr>
<tr className="hover-row row-h">
<td className="px-3 sm:px-4">2025/9/03 09:59:00</td><td className="px-3 sm:px-4">BTC</td><td className="px-3 sm:px-4">Open Long</td>
<td className="px-3 sm:px-4 text-right nums">65,780</td><td className="px-3 sm:px-4 text-right nums">0.0200 BTC</td>
<td className="px-3 sm:px-4 text-right nums">1,315.60 USDC</td><td className="px-3 sm:px-4 text-right nums">0.66 USDC</td>
<td className="px-3 sm:px-4 text-right nums pnl-neg">-0.66 USDC</td>
</tr>
<tr className="hover-row row-h">
<td className="px-3 sm:px-4">2025/9/03 09:55:12</td><td className="px-3 sm:px-4">ETH</td><td className="px-3 sm:px-4">Close Short</td>
<td className="px-3 sm:px-4 text-right nums">3,355</td><td className="px-3 sm:px-4 text-right nums">0.80 ETH</td>
<td className="px-3 sm:px-4 text-right nums">2,684.00 USDC</td><td className="px-3 sm:px-4 text-right nums">1.34 USDC</td>
<td className="px-3 sm:px-4 text-right nums pnl-pos">+9.70 USDC</td>
</tr>
<tr className="hover-row row-h">
<td className="px-3 sm:px-4">2025/9/03 09:20:45</td><td className="px-3 sm:px-4">IP</td><td className="px-3 sm:px-4">Open Long</td>
<td className="px-3 sm:px-4 text-right nums">7.5200</td><td className="px-3 sm:px-4 text-right nums">62.3 IP</td>
<td className="px-3 sm:px-4 text-right nums">468.25 USDC</td><td className="px-3 sm:px-4 text-right nums">0.07 USDC</td>
<td className="px-3 sm:px-4 text-right nums pnl-neg">-0.07 USDC</td>
</tr>
<tr className="hover-row row-h">
<td className="px-3 sm:px-4">2025/9/03 09:20:29</td><td className="px-3 sm:px-4">IP</td><td className="px-3 sm:px-4">Open Long</td>
<td className="px-3 sm:px-4 text-right nums">7.5200</td><td className="px-3 sm:px-4 text-right nums">14.2 IP</td>
<td className="px-3 sm:px-4 text-right nums">106.73 USDC</td><td className="px-3 sm:px-4 text-right nums">0.02 USDC</td>
<td className="px-3 sm:px-4 text-right nums pnl-neg">-0.02 USDC</td>
</tr>
<tr className="hover-row row-h">
<td className="px-3 sm:px-4">2025/9/02 15:55:05</td><td className="px-3 sm:px-4">BTC</td><td className="px-3 sm:px-4">Close Short</td>
<td className="px-3 sm:px-4 text-right nums">110,061</td><td className="px-3 sm:px-4 text-right nums">0.03681 BTC</td>
<td className="px-3 sm:px-4 text-right nums">4,051.33 USDC</td><td className="px-3 sm:px-4 text-right nums">1.75 USDC</td>
<td className="px-3 sm:px-4 text-right nums pnl-neg">-3.95 USDC</td>
</tr>
<tr className="hover-row row-h">
<td className="px-3 sm:px-4">2025/9/02 15:55:03</td><td className="px-3 sm:px-4">BTC</td><td className="px-3 sm:px-4">Open Short</td>
<td className="px-3 sm:px-4 text-right nums">110,001</td><td className="px-3 sm:px-4 text-right nums">0.03681 BTC</td>
<td className="px-3 sm:px-4 text-right nums">4,049.14 USDC</td><td className="px-3 sm:px-4 text-right nums">1.75 USDC</td>
<td className="px-3 sm:px-4 text-right nums pnl-neg">-1.75 USDC</td>
</tr>
<tr className="hover-row row-h">
<td className="px-3 sm:px-4">2025/9/02 14:06:33</td><td className="px-3 sm:px-4">HYPE</td><td className="px-3 sm:px-4">Close Short</td>
<td className="px-3 sm:px-4 text-right nums">44.595</td><td className="px-3 sm:px-4 text-right nums">47.66 HYPE</td>
<td className="px-3 sm:px-4 text-right nums">2,125.40 USDC</td><td className="px-3 sm:px-4 text-right nums">0.92 USDC</td>
<td className="px-3 sm:px-4 text-right nums pnl-neg">-8.75 USDC</td>
</tr>
<tr className="hover-row row-h">
<td className="px-3 sm:px-4">2025/9/02 13:55:18</td><td className="px-3 sm:px-4">HYPE</td><td className="px-3 sm:px-4">Open Short</td>
<td className="px-3 sm:px-4 text-right nums">44.431</td><td className="px-3 sm:px-4 text-right nums">47.66 HYPE</td>
<td className="px-3 sm:px-4 text-right nums">2,117.57 USDC</td><td className="px-3 sm:px-4 text-right nums">0.91 USDC</td>
<td className="px-3 sm:px-4 text-right nums pnl-neg">-0.91 USDC</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="hidden pt-4" id="panel-fundingHistory">
<div className="overflow-x-auto scrollbar-thin">
<table className="w-full text-[12px]">
<thead className="sticky top-[86px] glass-header border-b hairline thead-h">
<tr className="text-neutral-400">
<th className="text-left px-3 sm:px-4 font-medium">Time</th>
<th className="text-left px-3 sm:px-4 font-medium">Coin</th>
<th className="text-right px-3 sm:px-4 font-medium">Size</th>
<th className="text-left px-3 sm:px-4 font-medium">Position Side</th>
<th className="text-right px-3 sm:px-4 font-medium">Payment</th>
<th className="text-right px-3 sm:px-4 font-medium">Rate</th>
</tr>
</thead>
<tbody className="divide-y rowline">
<tr className="hover-row row-h"><td className="px-3 sm:px-4">2025/9/03 10:00</td><td className="px-3 sm:px-4">SOL</td><td className="px-3 sm:px-4 text-right nums">120 SOL</td><td className="px-3 sm:px-4">Short</td><td className="px-3 sm:px-4 text-right nums pnl-neg">-$0.0301</td><td className="px-3 sm:px-4 text-right nums">0.0010%</td></tr>
<tr className="hover-row row-h"><td className="px-3 sm:px-4">2025/9/03 09:00</td><td className="px-3 sm:px-4">IP</td><td className="px-3 sm:px-4 text-right nums">76.5 IP</td><td className="px-3 sm:px-4">Long</td><td className="px-3 sm:px-4 text-right nums pnl-neg">-$0.0072</td><td className="px-3 sm:px-4 text-right nums">0.0013%</td></tr>
<tr className="hover-row row-h"><td className="px-3 sm:px-4">2025/9/03 08:00</td><td className="px-3 sm:px-4">IP</td><td className="px-3 sm:px-4 text-right nums">76.5 IP</td><td className="px-3 sm:px-4">Long</td><td className="px-3 sm:px-4 text-right nums pnl-neg">-$0.0068</td><td className="px-3 sm:px-4 text-right nums">0.0012%</td></tr>
<tr className="hover-row row-h"><td className="px-3 sm:px-4">2025/9/03 07:00</td><td className="px-3 sm:px-4">IP</td><td className="px-3 sm:px-4 text-right nums">76.5 IP</td><td className="px-3 sm:px-4">Long</td><td className="px-3 sm:px-4 text-right nums pnl-neg">-$0.0074</td><td className="px-3 sm:px-4 text-right nums">0.0013%</td></tr>
<tr className="hover-row row-h"><td className="px-3 sm:px-4">2025/9/03 06:00</td><td className="px-3 sm:px-4">IP</td><td className="px-3 sm:px-4 text-right nums">76.5 IP</td><td className="px-3 sm:px-4">Long</td><td className="px-3 sm:px-4 text-right nums pnl-neg">-$0.0074</td><td className="px-3 sm:px-4 text-right nums">0.0013%</td></tr>
<tr className="hover-row row-h"><td className="px-3 sm:px-4">2025/9/03 05:00</td><td className="px-3 sm:px-4">IP</td><td className="px-3 sm:px-4 text-right nums">76.5 IP</td><td className="px-3 sm:px-4">Long</td><td className="px-3 sm:px-4 text-right nums pnl-neg">-$0.0075</td><td className="px-3 sm:px-4 text-right nums">0.0013%</td></tr>
<tr className="hover-row row-h"><td className="px-3 sm:px-4">2025/9/03 04:00</td><td className="px-3 sm:px-4">IP</td><td className="px-3 sm:px-4 text-right nums">76.5 IP</td><td className="px-3 sm:px-4">Long</td><td className="px-3 sm:px-4 text-right nums pnl-pos">$0.0079</td><td className="px-3 sm:px-4 text-right nums">-0.0013%</td></tr>
<tr className="hover-row row-h"><td className="px-3 sm:px-4">2025/9/03 03:00</td><td className="px-3 sm:px-4">IP</td><td className="px-3 sm:px-4 text-right nums">76.5 IP</td><td className="px-3 sm:px-4">Long</td><td className="px-3 sm:px-4 text-right nums pnl-neg">-$0.0074</td><td className="px-3 sm:px-4 text-right nums">0.0013%</td></tr>
<tr className="hover-row row-h"><td className="px-3 sm:px-4">2025/9/03 02:00</td><td className="px-3 sm:px-4">IP</td><td className="px-3 sm:px-4 text-right nums">76.5 IP</td><td className="px-3 sm:px-4">Long</td><td className="px-3 sm:px-4 text-right nums pnl-neg">-$0.0066</td><td className="px-3 sm:px-4 text-right nums">0.0011%</td></tr>
<tr className="hover-row row-h"><td className="px-3 sm:px-4">2025/9/03 01:00</td><td className="px-3 sm:px-4">IP</td><td className="px-3 sm:px-4 text-right nums">76.5 IP</td><td className="px-3 sm:px-4">Long</td><td className="px-3 sm:px-4 text-right nums pnl-pos">$0.0161</td><td className="px-3 sm:px-4 text-right nums">-0.0027%</td></tr>
</tbody>
</table>
</div>
</section>

<section className="hidden pt-4" id="panel-orderHistory">
<div className="overflow-x-auto scrollbar-thin">
<table className="w-full text-[12px]" id="orderHistoryTable">
<thead className="sticky top-[86px] glass-header border-b hairline thead-h">
<tr className="text-neutral-400">
<th className="text-left px-3 sm:px-4 font-medium">Time</th>
<th className="text-left px-3 sm:px-4 font-medium">Type</th>
<th className="text-left px-3 sm:px-4 font-medium">Coin</th>
<th className="text-left px-3 sm:px-4 font-medium">Direction</th>
<th className="text-right px-3 sm:px-4 font-medium">Size</th>
<th className="text-right px-3 sm:px-4 font-medium">Filled Size</th>
<th className="text-right px-3 sm:px-4 font-medium">Order Value</th>
<th className="text-right px-3 sm:px-4 font-medium">Price</th>
<th className="text-left px-3 sm:px-4 font-medium">Reduce Only</th>
<th className="text-left px-3 sm:px-4 font-medium">Trigger Conditions</th>
<th className="text-left px-3 sm:px-4 font-medium">TP/SL</th>
<th className="text-left px-3 sm:px-4 font-medium">Status</th>
<th className="text-left px-3 sm:px-4 font-medium">Order ID</th>
</tr>
</thead>
<tbody className="divide-y rowline">
<tr className="hover-row row-h"><td className="px-3 sm:px-4">2025/9/03 10:05:29</td><td className="px-3 sm:px-4">Take Profit Market</td><td className="px-3 sm:px-4">SOL</td><td className="px-3 sm:px-4">Close Short</td><td className="px-3 sm:px-4 text-right nums">40.0</td><td className="px-3 sm:px-4 text-right nums">40.0</td><td className="px-3 sm:px-4 text-right nums">--</td><td className="px-3 sm:px-4 text-right nums">Market</td><td className="px-3 sm:px-4">Yes</td><td className="px-3 sm:px-4">Price below 161.95</td><td className="px-3 sm:px-4">--</td><td className="px-3 sm:px-4">Filled</td><td className="px-3 sm:px-4"><button className="link copy-id" data-id="151108880001">151108880001</button></td></tr>
<tr className="hover-row row-h"><td className="px-3 sm:px-4">2025/9/03 10:04:20</td><td className="px-3 sm:px-4">Market</td><td className="px-3 sm:px-4">SOL</td><td className="px-3 sm:px-4">Short</td><td className="px-3 sm:px-4 text-right nums">40.0</td><td className="px-3 sm:px-4 text-right nums">40.0</td><td className="px-3 sm:px-4 text-right nums">--</td><td className="px-3 sm:px-4 text-right nums">Market</td><td className="px-3 sm:px-4">No</td><td className="px-3 sm:px-4">N/A</td><td className="px-3 sm:px-4">--</td><td className="px-3 sm:px-4">Filled</td><td className="px-3 sm:px-4"><button className="link copy-id" data-id="151108870998">151108870998</button></td></tr>
<tr className="hover-row row-h"><td className="px-3 sm:px-4">2025/9/03 09:59:03</td><td className="px-3 sm:px-4">Limit</td><td className="px-3 sm:px-4">BTC</td><td className="px-3 sm:px-4">Long</td><td className="px-3 sm:px-4 text-right nums">0.0200</td><td className="px-3 sm:px-4 text-right nums">0.0200</td><td className="px-3 sm:px-4 text-right nums">$1,315.60</td><td className="px-3 sm:px-4 text-right nums">65,780780</td><td className="px-3 sm:px-4">No</td><td className="px-3 sm:px-4">N/A</td><td className="px-3 sm:px-4">--</td><td className="px-3 sm:px-4">Filled</td><td className="px-3 sm:px-4"><button className="link copy-id" data-id="151108860554">151108860554</button></td></tr>
<tr className="hover-row row-h"><td className="px-3 sm:px-4">2025/9/03 09:55:15</td><td className="px-3 sm:px-4">Stop Market</td><td className="px-3 sm:px-4">ETH</td><td className="px-3 sm:px-4">Close Short</td><td className="px-3 sm:px-4 text-right nums">--</td><td className="px-3 sm:px-4 text-right nums">0.80</td><td className="px-3 sm:px-4 text-right nums">--</td><td className="px-3 sm:px-4 text-right nums">Market</td><td className="px-3 sm:px-4">Yes</td><td className="px-3 sm:px-4">Price above 3,360</td><td className="px-3 sm:px-4">SL</td><td className="px-3 sm:px-4">Canceled</td><td className="px-3 sm:px-4"><button className="link copy-id" data-id="151108840321">151108840321</button></td></tr>
</tbody>
</table>
</div>
</section>

<section className="hidden pt-4" id="panel-activeBots">

<div className="flex flex-col sm:flex-row sm:items-center gap-2">
<div className="flex items-center gap-2">
<button className="btn-primary h-8 px-3 rounded-md text-[12px] font-semibold focus-accent flex items-center gap-2" id="newBotBtn">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                New Bot
              </button>
<button className="btn-soft h-8 px-3 rounded-md text-[12px] focus-accent flex items-center gap-2" id="refreshBots">
<i className="w-3.5 h-3.5" data-lucide="refresh-ccw"></i>
                Refresh
              </button>
</div>
<div className="flex-1"></div>
<div className="relative">
<i className="w-3.5 h-3.5 absolute left-2 top-[7px] text-neutral-400" data-lucide="search"></i>
<input className="w-full sm:w-64 pl-7 pr-3 h-8 rounded-md glass border hairline focus-accent text-[12px] placeholder-neutral-500" id="botSearch" placeholder="Search bots..." type="text" />
</div>
</div>

<div className="mt-3 overflow-x-auto scrollbar-thin">
<table className="w-full text-[12px]" id="botsTable">
<thead className="sticky top-[86px] glass-header border-b hairline thead-h">
<tr className="text-neutral-400">
<th className="text-left px-3 sm:px-4 font-medium">Bot</th>
<th className="text-left px-3 sm:px-4 font-medium">Pair</th>
<th className="text-left px-3 sm:px-4 font-medium">Strategy</th>
<th className="text-left px-3 sm:px-4 font-medium">Status</th>
<th className="text-right px-3 sm:px-4 font-medium">Runtime</th>
<th className="text-right px-3 sm:px-4 font-medium">PNL</th>
<th className="text-right px-3 sm:px-4 font-medium">24h PNL</th>
<th className="text-left px-3 sm:px-4 font-medium">Actions</th>
</tr>
</thead>
<tbody className="divide-y rowline">
<tr className="hover-row row-h bot-row" data-name="SOL Scalper" data-pair="SOL/USDC">
<td className="px-3 sm:px-4 font-medium">SOL Scalper</td>
<td className="px-3 sm:px-4">SOL/USDC</td>
<td className="px-3 sm:px-4">Grid</td>
<td className="px-3 sm:px-4">
<span className="inline-flex items-center gap-2">
<span className="status <span class=" status-dot=""></span>
<span className="text-neutral-200">Running</span>
</span>
</td>
<td className="px-3 sm:px-4 text-right nums">3h 42m</td>
<td className="px-3 sm:px-4 text-right nums pnl-pos">+$482.10</td>
<td className="px-3 sm:px-4 text-right nums pnl-pos">+$38.22</td>
<td className="px-3 sm:px-4">
<div className="flex items-center gap-2">
<button className="focus-accent text-[12px] px-2 py-1 rounded-md hover:bg-white/5" data-action="pause">Pause</button>
<button className="focus-accent text-[12px] px-2 py-1 rounded-md hover:bg-white/5" data-action="details">Details</button>
<button className="focus-accent text-[12px] px-2 py-1 rounded-md hover:bg-white/5 text-red-300" data-action="stop">Stop</button>
</div>
</td>
</tr>
<tr className="hover-row row-h bot-row" data-name="IP Trend Follower" data-pair="IP/USDC">
<td className="px-3 sm:px-4 font-medium">IP Trend Follower</td>
<td className="px-3 sm:px-4">IP/USDC</td>
<td className="px-3 sm:px-4">Trend</td>
<td className="px-3 sm:px-4">
<span className="inline-flex items-center gap-2">
<span className="status-dot status-paused"></span>
<span className="text-neutral-400">Paused</span>
</span>
</td>
<td className="px-3 sm:px-4 text-right nums">1d 06h</td>
<td className="px-3 sm:px-4 text-right nums pnl-pos">+$129.44</td>
<td className="px-3 sm:px-4 text-right nums pnl-neg">-$4.12</td>
<td className="px-3 sm:px-4">
<div className="flex items-center gap-2">
<button className="focus-accent text-[12px] px-2 py-1 rounded-md hover:bg-white/5" data-action="resume">Resume</button>
<button className="focus-accent text-[12px] px-2 py-1 rounded-md hover:bg-white/5" data-action="details">Details</button>
<button className="focus-accent text-[12px] px-2 py-1 rounded-md hover:bg-white/5 text-red-300" data-action="stop">Stop</button>
</div>
</td>
</tr>
<tr className="hover-row row-h bot-row" data-name="BTC Breakout v2" data-pair="BTC/USDC">
<td className="px-3 sm:px-4 font-medium">BTC Breakout v2</td>
<td className="px-3 sm:px-4">BTC/USDC</td>
<td className="px-3 sm:px-4">Breakout</td>
<td className="px-3 sm:px-4">
<span className="inline-flex items-center gap-2">
<span className="status-dot status-error"></span>
<span className="text-warning">Attention</span>
</span>
</td>
<td className="px-3 sm:px-4 text-right nums">58m</td>
<td className="px-3 sm:px-4 text-right nums pnl-neg">-$22.60</td>
<td className="px-3 sm:px-4 text-right nums pnl-neg">-$8.40</td>
<td className="px-3 sm:px-4">
<div className="flex items-center gap-2">
<button className="focus-accent text-[12px] px-2 py-1 rounded-md hover:bg-white/5" data-action="retry">Retry</button>
<button className="focus-accent text-[12px] px-2 py-1 rounded-md hover:bg-white/5" data-action="details">Details</button>
<button className="focus-accent text-[12px] px-2 py-1 rounded-md hover:bg-white/5 text-red-300" data-action="stop">Stop</button>
</div>
</td>
</tr>
<tr className="hover-row row-h bot-row" data-name="ETH Mean Reversion" data-pair="ETH/USDC">
<td className="px-3 sm:px-4 font-medium">ETH Mean Reversion</td>
<td className="px-3 sm:px-4">ETH/USDC</td>
<td className="px-3 sm:px-4">Mean Reversion</td>
<td className="px-3 sm:px-4">
<span className="inline-flex items-center gap-2">
<span className="status-dot status-running"></span>
<span className="text-neutral-200">Running</span>
</span>
</td>
<td className="px-3 sm:px-4 text-right nums">7h 12m</td>
<td className="px-3 sm:px-4 text-right nums pnl-pos">+$64.03</td>
<td className="px-3 sm:px-4 text-right nums pnl-pos">+$12.77</td>
<td className="px-3 sm:px-4">
<div className="flex items-center gap-2">
<button className="focus-accent text-[12px] px-2 py-1 rounded-md hover:bg-white/5" data-action="pause">Pause</button>
<button className="focus-accent text-[12px] px-2 py-1 rounded-md hover:bg-white/5" data-action="details">Details</button>
<button className="focus-accent text-[12px] px-2 py-1 rounded-md hover:bg-white/5 text-red-300" data-action="stop">Stop</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
</section>
</div>

<div className="fixed inset-0 bg-black/50 backdrop-blur-sm hidden z-40" id="botDrawerOverlay"></div>
<aside className="fixed right-0 top-0 h-full w-full sm:w-[420px] glass border-l hairline translate-x-full transition-transform duration-300 z-50 flex flex-col" id="botDrawer">
<div className="glass-header border-b hairline h-12 flex items-center justify-between px-3 sm:px-4">
<div className="flex items-center gap-2">
<span className="status-dot status-running" id="drawerStatusDot"></span>
<h3 className="text-[14px] font-semibold tracking-tight" id="drawerTitle">Bot Details</h3>
</div>
<button aria-label="Close details" className="focus-accent p-1 rounded hover:bg-white/5" id="drawerClose">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="p-3 sm:p-4 space-y-3 overflow-y-auto">
<div className="grid grid-cols-2 gap-2">
<div className="tag rounded-md p-2">
<div className="text-[11px] text-neutral-400">Pair</div>
<div className="nums text-[13px] font-semibold" id="drawerPair">—</div>
</div>
<div className="tag rounded-md p-2">
<div className="text-[11px] text-neutral-400">Strategy</div>
<div className="nums text-[13px] font-semibold" id="drawerStrategy">—</div>
</div>
<div className="tag rounded-md p-2">
<div className="text-[11px] text-neutral-400">Runtime</div>
<div className="nums text-[13px] font-semibold" id="drawerRuntime">—</div>
</div>
<div className="tag rounded-md p-2">
<div className="text-[11px] text-neutral-400">Overall PNL</div>
<div className="nums text-[13px] font-semibold" id="drawerPNL">—</div>
</div>
</div>
<div className="glass rounded-md border hairline p-3">
<div className="flex items-center justify-between">
<div className="text-[12px] font-medium">Performance</div>
<div className="text-[11px] text-neutral-400">Last 24h</div>
</div>
<div className="mt-3 h-28">
<canvas height="110" id="botSparkline"></canvas>
</div>
</div>
<div className="glass rounded-md border hairline p-3">
<div className="text-[12px] font-medium">Recent Activity</div>
<ul className="mt-2 space-y-1 text-[12px]" id="drawerActivity">
<li className="text-neutral-400">No recent activity.</li>
</ul>
</div>
<div className="flex items-center gap-2">
<button className="btn-primary focus-accent h-9 px-3 rounded-md text-[12px] font-semibold" id="drawerPrimaryAction">Pause</button>
<button className="btn-soft focus-accent h-9 px-3 rounded-md text-[12px]" id="drawerSecondaryAction">Stop</button>
</div>
</div>
</aside>

<div className="fixed inset-0 z-50 hidden" id="newBotModal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative mx-auto mt-20 w-[92%] max-w-md glass border hairline rounded-lg overflow-hidden">
<div className="glass-header border-b hairline h-12 flex items-center justify-between px-4">
<div className="text-[14px] font-semibold">Create New Bot</div>
<button className="focus-accent p-1 rounded hover:bg-white/5" id="newBotClose">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<form className="p-4 space-y-3 text-[12px]" id="newBotForm">
<div>
<label className="block text-neutral-400 mb-1">Name</label>
<input className="w-full h-9 glass border hairline rounded-md px-3 focus-accent" name="name" placeholder="My Bot" required />
</div>
<div className="grid grid-cols-2 gap-2">
<div>
<label className="block text-neutral-400 mb-1">Pair</label>
<select className="w-full h-9 glass border hairline rounded-md px-2 focus-accent" name="pair">
<option>SOL/USDC</option>
<option>BTC/USDC</option>
<option>ETH/USDC</option>
<option>IP/USDC</option>
</select>
</div>
<div>
<label className="block text-neutral-400 mb-1">Strategy</label>
<select className="w-full h-9 glass border hairline rounded-md px-2 focus-accent" name="strategy">
<option>Grid</option>
<option>Trend</option>
<option>Breakout</option>
<option>Mean Reversion</option>
</select>
</div>
</div>
<div className="grid grid-cols-2 gap-2">
<div>
<label className="block text-neutral-400 mb-1">Budget (USDC)</label>
<input className="w-full h-9 glass border hairline rounded-md px-3 focus-accent" min="50" name="budget" placeholder="500" step="10" type="number" />
</div>
<div>
<label className="block text-neutral-400 mb-1">Auto-start</label>
<div className="flex items-center gap-2">
<input className="accent-emerald-400" id="autoStart" type="checkbox" />
<label className="text-neutral-300" htmlFor="autoStart">Start after creation</label>
</div>
</div>
</div>
<div className="pt-1 flex items-center justify-end gap-2">
<button className="focus-accent h-9 px-3 rounded-md hover:bg-white/5" id="newBotCancel" type="button">Cancel</button>
<button className="btn-primary h-9 px-3 rounded-md font-semibold focus-accent" type="submit">Create Bot</button>
</div>
</form>
</div>
</div>

<div className="fixed bottom-4 right-4 glass border hairline rounded-md px-3 py-2 text-[12px] hidden z-50" id="toast">Copied</div>





    </>
  );
}
