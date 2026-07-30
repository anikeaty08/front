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

      // Ensure icons render with 1.5 stroke width and are hidden from screen readers
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          window.lucide.createIcons();
          document.querySelectorAll('[data-lucide]').forEach(el => {
            el.setAttribute('stroke-width', '1.5');
            el.setAttribute('aria-hidden', 'true');
            el.setAttribute('focusable', 'false');
          });
        }
      });

      // Current year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Mobile menu
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      mobileMenuBtn.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', String(!isOpen));
        mobileMenuBtn.setAttribute('aria-label', !isOpen ? 'Fechar menu' : 'Abrir menu');
      });
      // Close mobile menu on outside click
      document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
          if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mobileMenuBtn.setAttribute('aria-label', 'Abrir menu');
          }
        }
      });

      // Custom dropdown (region) with keyboard support
      const regionBtn = document.getElementById('regionButton');
      const regionMenu = document.getElementById('regionMenu');
      const regionLabel = document.getElementById('regionLabel');
      const regionOptions = Array.from(regionMenu.querySelectorAll('button[role="option"]'));
      let regionIndex = 0;

      function openRegionMenu() {
        regionMenu.classList.remove('hidden');
        regionBtn.setAttribute('aria-expanded', 'true');
        setTimeout(() => {
          regionOptions[regionIndex]?.focus();
        }, 0);
      }
      function closeRegionMenu() {
        regionMenu.classList.add('hidden');
        regionBtn.setAttribute('aria-expanded', 'false');
        regionBtn.focus();
      }

      regionBtn.addEventListener('click', () => {
        const isHidden = regionMenu.classList.contains('hidden');
        if (isHidden) openRegionMenu(); else closeRegionMenu();
      });
      regionBtn.addEventListener('keydown', (e) => {
        const keys = ['ArrowDown','Enter',' '];
        if (keys.includes(e.key)) {
          e.preventDefault();
          regionIndex = Math.max(0, regionOptions.findIndex(o => o.getAttribute('aria-selected') === 'true'));
          openRegionMenu();
        }
      });
      regionOptions.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
          regionLabel.textContent = btn.dataset.region;
          regionOptions.forEach(o => o.setAttribute('aria-selected','false'));
          btn.setAttribute('aria-selected','true');
          closeRegionMenu();
        });
        btn.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') { e.preventDefault(); closeRegionMenu(); }
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            regionIndex = (idx + 1) % regionOptions.length;
            regionOptions[regionIndex].focus();
          }
          if (e.key === 'ArrowUp') {
            e.preventDefault();
            regionIndex = (idx - 1 + regionOptions.length) % regionOptions.length;
            regionOptions[regionIndex].focus();
          }
          if (e.key === 'Home') { e.preventDefault(); regionIndex = 0; regionOptions[0].focus(); }
          if (e.key === 'End') { e.preventDefault(); regionIndex = regionOptions.length - 1; regionOptions[regionIndex].focus(); }
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            btn.click();
          }
        });
      });
      document.addEventListener('click', (e) => {
        if (!regionBtn.contains(e.target) && !regionMenu.contains(e.target)) {
          regionMenu.classList.add('hidden');
          regionBtn.setAttribute('aria-expanded', 'false');
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
        const expanded = !pasteArea.classList.contains('hidden');
        importBtn.setAttribute('aria-expanded', String(expanded));
        if (expanded) { pasteInput.focus(); }
      });
      cancelPaste.addEventListener('click', () => {
        pasteArea.classList.add('hidden');
        importBtn.setAttribute('aria-expanded', 'false');
        pasteInput.value = '';
        importBtn.focus();
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
      const srStatus = document.getElementById('srStatus');

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
            <div class="p-4 text-sm text-neutral-400 flex items-center gap-2" role="note">
              <i data-lucide="info" class="h-4 w-4" aria-hidden="true"></i>
              Sua lista está vazia. Adicione itens para começar.
            </div>`;
          if (window.lucide) { window.lucide.createIcons(); document.querySelectorAll('[data-lucide]').forEach(el => { el.setAttribute('stroke-width', '1.5'); el.setAttribute('aria-hidden','true'); }); }
        } else {
          items.forEach((it, idx) => {
            const prices = getItemPrices(it.name);
            const minStore = Object.entries(prices).sort((a,b)=>a[1]-b[1])[0];
            const row = document.createElement('div');
            row.className = 'flex items-center justify-between p-3';
            row.setAttribute('role', 'listitem');
            row.innerHTML = `
              <div class="flex items-center gap-3">
                <div class="h-8 w-8 rounded-md border border-neutral-800 bg-neutral-950/50 flex items-center justify-center text-neutral-300">
                  <i data-lucide="package" class="h-4 w-4" aria-hidden="true"></i>
                </div>
                <div>
                  <div class="text-sm font-medium capitalize tracking-tight">${it.name}</div>
                  <div class="text-[12px] text-neutral-400">Melhor: ${minStore[0]} • R$ ${minStore[1].toFixed(2)}</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <button type="button" data-idx="${idx}" data-act="dec" aria-label="Diminuir quantidade de ${it.name}" title="Diminuir" class="h-9 w-9 rounded-md border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-colors inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950"><i data-lucide="minus" class="h-4 w-4" aria-hidden="true"></i></button>
                <div class="min-w-[2.5rem] text-center text-sm" aria-label="Quantidade de ${it.name}" role="status" aria-live="polite">${it.qty}</div>
                <button type="button" data-idx="${idx}" data-act="inc" aria-label="Aumentar quantidade de ${it.name}" title="Aumentar" class="h-9 w-9 rounded-md border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-colors inline-flex items`})}}
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
      

<a className="sr-only focus:not-sr-only fixed top-2 left-2 z-[100] px-3 py-2 rounded-md bg-white text-neutral-900 text-sm shadow outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-white/0" href="#conteudo">
      Pular para o conteúdo
    </a>

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
<span className="text-[15px] font-semibold tracking-tight">Comparato</span>
</div>

<nav aria-label="Principal" className="hidden md:flex items-center gap-6 text-sm text-neutral-300" id="site-nav" role="navigation">
<a className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950 rounded" href="#como-funciona">Como funciona</a>
<a className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950 rounded" href="#comparacao">Comparação</a>
<a className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950 rounded" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex h-9 px-3 rounded-md border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950" type="button">Entrar</button>
<button className="hidden sm:inline-flex h-9 px-3 rounded-md bg-white text-neutral-900 hover:bg-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950" type="button">Começar grátis</button>

<button aria-controls="mobileMenu" aria-expanded="false" aria-label="Abrir menu" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950" id="mobileMenuBtn" type="button">
<svg aria-hidden="true" className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-neutral-800/60 bg-neutral-950/80 backdrop-blur" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
<nav aria-label="Menu móvel" className="flex flex-col gap-2" role="navigation">
<a className="px-3 py-2 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950" href="#como-funciona">Como funciona</a>
<a className="px-3 py-2 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950" href="#comparacao">Comparação</a>
<a className="px-3 py-2 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950" href="#faq">FAQ</a>
<div className="flex items-center gap-2 pt-2">
<button className="flex-1 h-10 px-3 rounded-md border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950" type="button">Entrar</button>
<button className="flex-1 h-10 px-3 rounded-md bg-white text-neutral-900 hover:bg-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950" type="button">Começar grátis</button>
</div>
</nav>
</div>
</div>
</header>
<main className="" id="conteudo" tabindex="-1">

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
<div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-xs text-neutral-300">
<svg aria-hidden="true" className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
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
<button aria-controls="regionMenu" aria-expanded="false" aria-haspopup="listbox" aria-label="Selecionar região" className="w-full h-11 px-3.5 rounded-md border border-neutral-800 bg-neutral-900/60 text-left text-sm text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900 transition-colors flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950" id="regionButton" role="combobox" type="button">
<span className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-map-pin h-4 w-4" data-lucide="map-pin" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="10"></circle></svg>
<span id="regionLabel">Selecionar região</span>
</span>
<svg aria-hidden="true" className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
<div aria-label="Lista de regiões" className="hidden absolute mt-2 w-full rounded-md border border-neutral-800 bg-neutral-900/95 backdrop-blur shadow-2xl" id="regionMenu" role="listbox">
<ul className="py-1 text-sm">
<li><button aria-selected="false" className="w-full text-left px-3 py-2 hover:bg-neutral-800/80 focus:bg-neutral-800/80 focus:outline-none" data-region="São Paulo, SP" role="option" tabindex="-1" type="button">São Paulo, SP</button></li>
<li><button aria-selected="false" className="w-full text-left px-3 py-2 hover:bg-neutral-800/80 focus:bg-neutral-800/80 focus:outline-none" data-region="Rio de Janeiro, RJ" role="option" tabindex="-1" type="button">Rio de Janeiro, RJ</button></li>
<li><button aria-selected="false" className="w-full text-left px-3 py-2 hover:bg-neutral-800/80 focus:bg-neutral-800/80 focus:outline-none" data-region="Belo Horizonte, MG" role="option" tabindex="-1" type="button">Belo Horizonte, MG</button></li>
<li><button aria-selected="false" className="w-full text-left px-3 py-2 hover:bg-neutral-800/80 focus:bg-neutral-800/80 focus:outline-none" data-region="Porto Alegre, RS" role="option" tabindex="-1" type="button">Porto Alegre, RS</button></li>
</ul>
</div>
</div>
<button className="h-11 px-4 rounded-md bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-100 transition-colors inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950" id="compareTop" type="button">
<svg aria-hidden="true" className="lucide lucide-scan-line h-4 w-4" data-lucide="scan-line" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
                  Comparar agora
                </button>
<button aria-controls="pasteArea" aria-expanded="false" className="h-11 px-4 rounded-md border border-neutral-800 text-sm text-neutral-200 hover:text-white hover:border-neutral-700 transition-colors inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950" id="importList" type="button">
<svg aria-hidden="true" className="lucide lucide-clipboard-list h-4 w-4" data-lucide="clipboard-list" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8"></rect><path></path><path></path><path></path><path></path><path></path></svg>
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
<svg aria-hidden="true" className="lucide lucide-shopping-cart h-4.5 w-4.5" data-lucide="shopping-cart" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21"></circle><circle cx="19" cy="21"></circle><path></path></svg>
<h2 className="text-lg sm:text-xl tracking-tight font-semibold">Sua lista de compras</h2>
</div>
<button className="text-xs text-neutral-300 hover:text-white px-2 py-1 rounded border border-neutral-800 hover:border-neutral-700 transition-colors focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950" id="clearList" type="button">Limpar</button>
</div>

<div className="hidden mt-4" id="pasteArea">
<div className="rounded-lg border border-neutral-800 overflow-hidden">
<label className="sr-only" htmlFor="pasteInput">Colar lista</label>
<textarea aria-describedby="pasteHint" className="w-full bg-neutral-950/60 text-sm p-3 outline-none placeholder:text-neutral-500" id="pasteInput" placeholder="Ex.: 2x arroz 5kg
1x feijão carioca
3x leite integral" rows="4"></textarea>
<div className="flex items-center justify-between border-t border-neutral-800 bg-neutral-950/60 p-2">
<span className="text-[12px] text-neutral-400" id="pasteHint">Dica: um item por linha. Use “2x nome do produto”.</span>
<div className="flex items-center gap-2">
<button className="text-xs px-2 py-1 rounded border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950" id="cancelPaste" type="button">Cancelar</button>
<button className="text-xs px-2 py-1 rounded bg-white text-neutral-900 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950" id="applyPaste" type="button">Aplicar</button>
</div>
</div>
</div>
</div>

<div className="mt-4 grid grid-cols-12 gap-2">
<div className="col-span-8">
<label className="sr-only" htmlFor="itemName">Produto</label>
<div className="h-11 flex items-center rounded-md border border-neutral-800 bg-neutral-950/50 px-3 focus-within:border-neutral-700 transition-colors">
<svg aria-hidden="true" className="lucide lucide-search h-4 w-4 text-neutral-400" data-lucide="search" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="11" cy="11"></circle></svg>
<input aria-label="Produto" autocomplete="off" className="flex-1 bg-transparent outline-none text-sm pl-2 placeholder:text-neutral-500" id="itemName" placeholder="Ex.: arroz, feijão, leite..." type="text" />
</div>
</div>
<div className="col-span-2">
<label className="sr-only" htmlFor="itemQty">Quantidade</label>
<input aria-label="Quantidade" className="h-11 w-full rounded-md border border-neutral-800 bg-neutral-950/50 px-3 text-sm focus:border-neutral-700 outline-none" id="itemQty" inputmode="numeric" min="1" pattern="[0-9]*" type="number" value="1" />
</div>
<div className="col-span-2">
<button className="w-full h-11 rounded-md bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950" id="addItem" type="button">Adicionar</button>
</div>
</div>

<div aria-label="Itens da lista" className="mt-4 divide-y divide-neutral-800 border-y border-neutral-800" id="itemsList" role="list"><div className="flex items-center justify-between p-3" role="listitem">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md border border-neutral-800 bg-neutral-950/50 flex items-center justify-center text-neutral-300">
<svg aria-hidden="true" className="lucide lucide-package h-4 w-4" data-lucide="package" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path></path></svg>
</div>
<div>
<div className="text-sm font-medium capitalize tracking-tight">arroz</div>
<div className="text-[12px] text-neutral-400">Melhor: Mercado B • R$ 21.50</div>
</div>
</div>
<div className="flex items-center gap-2">
<button aria-label="Diminuir quantidade de arroz" className="h-9 w-9 rounded-md border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-colors inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950" data-act="dec" data-idx="0" title="Diminuir" type="button"><svg aria-hidden="true" className="lucide lucide-minus h-4 w-4" data-lucide="minus" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg></button>
<div aria-label="Quantidade de arroz" aria-live="polite" className="min-w-[2.5rem] text-center text-sm" role="status">2</div>
<button aria-label="Aumentar quantidade de arroz" className="h-9 w-9 rounded-md border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-colors inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950" data-act="inc" data-idx="0" title="Aumentar" type="button"><svg aria-hidden="true" className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg></button>
<button aria-label="Remover arroz da lista" className="h-9 w-9 rounded-md border border-red-900/60 text-red-300 hover:border-red-800 hover:bg-red-950/40 transition-colors inline-flex items-center justify-center ml-1 focus-visible:outline-none focus-visible:ring-2 ring-red-700 ring-offset-2 ring-offset-neutral-950" data-act="del" data-idx="0" title="Remover" type="button"><svg aria-hidden="true" className="lucide lucide-trash-2 h-4 w-4" data-lucide="trash-2" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg></button>
</div>
</div><div className="flex items-center justify-between p-3" role="listitem">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md border border-neutral-800 bg-neutral-950/50 flex items-center justify-center text-neutral-300">
<svg aria-hidden="true" className="lucide lucide-package h-4 w-4" data-lucide="package" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path></path></svg>
</div>
<div>
<div className="text-sm font-medium capitalize tracking-tight">leite</div>
<div className="text-[12px] text-neutral-400">Melhor: Mercado B • R$ 4.60</div>
</div>
</div>
<div className="flex items-center gap-2">
<button aria-label="Diminuir quantidade de leite" className="h-9 w-9 rounded-md border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-colors inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950" data-act="dec" data-idx="1" title="Diminuir" type="button"><svg aria-hidden="true" className="lucide lucide-minus h-4 w-4" data-lucide="minus" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg></button>
<div aria-label="Quantidade de leite" aria-live="polite" className="min-w-[2.5rem] text-center text-sm" role="status">3</div>
<button aria-label="Aumentar quantidade de leite" className="h-9 w-9 rounded-md border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-colors inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950" data-act="inc" data-idx="1" title="Aumentar" type="button"><svg aria-hidden="true" className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg></button>
<button aria-label="Remover leite da lista" className="h-9 w-9 rounded-md border border-red-900/60 text-red-300 hover:border-red-800 hover:bg-red-950/40 transition-colors inline-flex items-center justify-center ml-1 focus-visible:outline-none focus-visible:ring-2 ring-red-700 ring-offset-2 ring-offset-neutral-950" data-act="del" data-idx="1" title="Remover" type="button"><svg aria-hidden="true" className="lucide lucide-trash-2 h-4 w-4" data-lucide="trash-2" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg></button>
</div>
</div><div className="flex items-center justify-between p-3" role="listitem">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md border border-neutral-800 bg-neutral-950/50 flex items-center justify-center text-neutral-300">
<svg aria-hidden="true" className="lucide lucide-package h-4 w-4" data-lucide="package" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path></path></svg>
</div>
<div>
<div className="text-sm font-medium capitalize tracking-tight">cafe</div>
<div className="text-[12px] text-neutral-400">Melhor: Mercado B • R$ 16.50</div>
</div>
</div>
<div className="flex items-center gap-2">
<button aria-label="Diminuir quantidade de cafe" className="h-9 w-9 rounded-md border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-colors inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950" data-act="dec" data-idx="2" title="Diminuir" type="button"><svg aria-hidden="true" className="lucide lucide-minus h-4 w-4" data-lucide="minus" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg></button>
<div aria-label="Quantidade de cafe" aria-live="polite" className="min-w-[2.5rem] text-center text-sm" role="status">1</div>
<button aria-label="Aumentar quantidade de cafe" className="h-9 w-9 rounded-md border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-colors inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950" data-act="inc" data-idx="2" title="Aumentar" type="button"><svg aria-hidden="true" className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg></button>
<button aria-label="Remover cafe da lista" className="h-9 w-9 rounded-md border border-red-900/60 text-red-300 hover:border-red-800 hover:bg-red-950/40 transition-colors inline-flex items-center justify-center ml-1 focus-visible:outline-none focus-visible:ring-2 ring-red-700 ring-offset-2 ring-offset-neutral-950" data-act="del" data-idx="2" title="Remover" type="button"><svg aria-hidden="true" className="lucide lucide-trash-2 h-4 w-4" data-lucide="trash-2" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg></button>
</div>
</div></div>

<div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
<div aria-live="polite" className="text-sm text-neutral-300" role="status">
<span id="itemsCount">6</span> itens • <span id="itemsHint">pronto para comparar</span>
</div>
<div className="flex items-center gap-2">
<button className="h-10 px-4 rounded-md bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-100 transition-colors inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950" id="compareBtn" type="button">
<i aria-hidden="true" className="h-4 w-4" data-lucide="scales" focusable="false" strokeWidth="1.5"></i>
                      Comparar preços
                    </button>
<button className="h-10 px-3 rounded-md border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 ring-neutral-700 ring-offset-2 ring-offset-neutral-950" id="shareBtn" type="button">
<svg aria-hidden="true" className="lucide lucide-share-2 h-4 w-4" data-lucide="share-2" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5"></circle><circle cx="6" cy="12"></circle><circle cx="18" cy="19"></circle><line></line><line></line></svg>
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

<section aria-labelledby="comparacao-titulo" className="border-t border-neutral-800 scroll-mt-16" id="comparacao">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
<div className="grid lg:grid-cols-12 gap-8">
<div className="lg:col-span-4 space-y-4">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-bar-chart-3 h-5 w-5" data-lucide="bar-chart-3" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
<h3 className="text-2xl tracking-tight font-semibold" id="comparacao-titulo">Comparação por mercado</h3>
</div>
<p className="text-sm text-neutral-300">Veja qual mercado é o mais vantajoso para sua lista agora.</p>
<div aria-live="polite" className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-4" id="bestStore" role="status">
<div className="text-xs text-neutral-400">Melhor opção</div>
<div className="mt-1 text-xl font-semibold tracking-tight" id="bestStoreName">Mercado B • R$ 73,30</div>
<div className="mt-1 text-sm text-neutral-300" id="bestStoreTotal">Economia potencial vs. mais caro: R$ 7,00</div>
<div className="mt-3 flex items-center gap-2 text-xs text-emerald-400" id="bestStoreSaveWrap" style={{}}>
<svg aria-hidden="true" className="lucide lucide-badge-percent h-4 w-4" data-lucide="badge-percent" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
<span id="bestStoreSave">Você pode economizar até R$ 7,00 nesta compra</span>
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

<div aria-label="Totais por mercado" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" id="storesGrid"><div className="rounded-lg border p-4 transition-colors border-emerald-700/50 bg-emerald-950/20" tabindex="0">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Mercado B</div>
<span className="text-[11px] text-emerald-400 inline-flex items-center gap-1"><svg aria-hidden="true" className="lucide lucide-crown h-3.5 w-3.5" data-lucide="crown" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg> Melhor</span>
</div>
<div className="mt-2 text-xl font-semibold tracking-tight">R$ 73,30</div>
<div className="mt-1 text-[12px] text-neutral-400">Menor total para sua lista</div>
</div><div className="rounded-lg border p-4 transition-colors border-neutral-800 bg-neutral-900/40" tabindex="0">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Mercado A</div>
</div>
<div className="mt-2 text-xl font-semibold tracking-tight">R$ 78,40</div>
<div className="mt-1 text-[12px] text-neutral-400">Diferença: R$ 5,10</div>
</div><div className="rounded-lg border p-4 transition-colors border-neutral-800 bg-neutral-900/40" tabindex="0">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Mercado C</div>
</div>
<div className="mt-2 text-xl font-semibold tracking-tight">R$ 80,30</div>
<div className="mt-1 text-[12px] text-neutral-400">Diferença: R$ 7,00</div>
</div></div>

<div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
<div className="">
<h4 className="text-[18px] tracking-tight font-semibold">Totais por mercado</h4>
<p className="text-sm text-neutral-400">Valores estimados com base nos itens da sua lista</p>
</div>
<div className="mt-3 rounded-lg border border-neutral-800 bg-neutral-950/50 p-3">
<div className="relative h-64 sm:h-72">
<div className="h-full">
<canvas aria-label="Gráfico de barras mostrando o total estimado por mercado" className="" id="totalsChart" role="img"></canvas>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-3 bg-neutral-900/40 border-neutral-800 border rounded-xl pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<div className="flex items-center gap-2 sm:flex-1 min-w-0">
<svg aria-hidden="true" className="lucide lucide-smartphone h-5 w-5" data-lucide="smartphone" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14"></rect><path></path></svg>
<div className="min-w-0">
<div className="text-[15px] font-medium tracking-tight">App móvel</div>
<div className="text-sm text-neutral-400">Acompanhe sua lista na loja e receba alertas de oferta.</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="h-10 px-3 rounded-md border border-neutral-800 text-neutral-400 cursor-not-allowed inline-flex items-center gap-2" disabled type="button">
<svg aria-hidden="true" className="lucide lucide-download h-4 w-4" data-lucide="download" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
                    Em breve
                  </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="como-funciona-titulo" className="border-t border-neutral-800 scroll-mt-16" id="como-funciona">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
<h3 className="text-2xl tracking-tight font-semibold" id="como-funciona-titulo">Como funciona</h3>
<div className="mt-6 grid md:grid-cols-3 gap-4">
<div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-list-checks h-5 w-5" data-lucide="list-checks" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
<div className="text-[15px] font-medium tracking-tight">Monte sua lista</div>
</div>
<p className="mt-2 text-sm text-neutral-300">Adicione itens manualmente ou cole uma lista. Quantidades são consideradas no cálculo.</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-radar h-5 w-5" data-lucide="radar" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><circle cx="12" cy="12"></circle><path></path></svg>
<div className="text-[15px] font-medium tracking-tight">Buscamos preços</div>
</div>
<p className="mt-2 text-sm text-neutral-300">Comparamos mercados próximos à sua região e estimamos o melhor total.</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-wallet h-5 w-5" data-lucide="wallet" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<div className="text-[15px] font-medium tracking-tight">Economize de verdade</div>
</div>
<p className="mt-2 text-sm text-neutral-300">Veja onde comprar cada item pelo menor preço e reduza sua conta no fim do mês.</p>
</div>
</div>
</div>
</section>

<section aria-labelledby="faq-titulo" className="border-t border-neutral-800 scroll-mt-16" id="faq">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
<h3 className="text-2xl tracking-tight font-semibold" id="faq-titulo">Perguntas frequentes</h3>
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
</main>

<footer className="border-t border-neutral-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<span className="text-[11px] font-semibold tracking-tight">CP</span>
</div>
<span className="text-[15px] font-semibold tracking-tight">Comparato</span>
</div>
<div className="text-sm text-neutral-400">© <span id="year">2025</span> Comparato. Todos os direitos reservados.</div>
</div>
</div>
</footer>

<div aria-live="polite" className="sr-only" id="srStatus" role="status"></div>

    </>
  );
}
