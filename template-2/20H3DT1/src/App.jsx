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
      
      // Initial icon render
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) { lucide.createIcons(); }
      });

      // Simple SPA view switching
      const viewSearch = document.getElementById('view-search');
      const viewArtifact = document.getElementById('view-artifact');
      const viewAsk = document.getElementById('view-ask');
      function showView(name) {
        viewSearch.classList.toggle('hidden', name !== 'search');
        viewArtifact.classList.toggle('hidden', name !== 'artifact');
        viewAsk.classList.toggle('hidden', name !== 'ask');
        if (window.lucide) { lucide.createIcons(); }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      document.querySelectorAll('[data-nav]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const t = e.currentTarget.getAttribute('data-nav');
          if (t === 'search') showView('search');
          if (t === 'ask') showView('ask');
          if (t === 'artifacts') showView('search');
        });
      });

      // Mobile menu
      const mobileBtn = document.getElementById('mobileMenuBtn');
      const mobileNav = document.getElementById('mobileNav');
      if (mobileBtn) {
        mobileBtn.addEventListener('click', () => mobileNav.classList.toggle('hidden'));
      }

      // Filters: Tenant
      const tenantBtn = document.getElementById('tenantBtn');
      const tenantMenu = document.getElementById('tenantMenu');
      const tenantLabel = document.getElementById('tenantLabel');
      tenantBtn.addEventListener('click', () => tenantMenu.classList.toggle('hidden'));
      tenantMenu.querySelectorAll('button[data-tenant]').forEach(item => {
        item.addEventListener('click', () => {
          tenantLabel.textContent = item.getAttribute('data-tenant');
          tenantMenu.classList.add('hidden');
        });
      });
      // Filters: Date
      const dateBtn = document.getElementById('dateBtn');
      const dateMenu = document.getElementById('dateMenu');
      const dateLabel = document.getElementById('dateLabel');
      dateBtn.addEventListener('click', () => dateMenu.classList.toggle('hidden'));
      dateMenu.querySelectorAll('button[data-date]').forEach(item => {
        item.addEventListener('click', () => {
          dateLabel.textContent = item.getAttribute('data-date');
          dateMenu.classList.add('hidden');
        });
      });
      // Public-only toggle
      const publicToggle = document.getElementById('publicToggle');
      let publicOnly = false;
      publicToggle.addEventListener('click', () => {
        publicOnly = !publicOnly;
        publicToggle.classList.toggle('bg-teal-500/20', publicOnly);
        publicToggle.classList.toggle('border-teal-700/50', publicOnly);
        const knob = publicToggle.querySelector('span');
        knob.style.transform = publicOnly ? 'translate(20px,-50%)' : 'translate(0,-50%)';
        knob.classList.toggle('bg-teal-400', publicOnly);
        renderResults();
      });

      // Dummy search results
      const resultsData = [
        {
          id: 'AW-2024-0812-001',
          title: 'Q2 Earnings Call Transcript',
          snippet: 'Management raised Q3 revenue guidance and expanded margin outlook on stronger pipeline conversion.',
          tags: ['earnings','q2'],
          bm25: 0.84,
          vector: 0.91,
          sources: 3,
          public: true
        },
        {
          id: 'AW-2024-0729-003',
          title: 'Investor Presentation — Guidance Update',
          snippet: 'FY guide narrowed with upside bias; reiterated long-term ARR growth framework.',
          tags: ['deck','guide'],
          bm25: 0.76,
          vector: 0.88,
          sources: 2,
          public: false
        },
        {
          id: 'AW-2024-0615-014',
          title: 'Sell-side Summary: Post-Q2 Notes',
          snippet: 'Consensus moved higher by ~1.5% on stronger renewals; watch FX headwinds into H2.',
          tags: ['consensus','notes'],
          bm25: 0.71,
          vector: 0.86,
          sources: 4,
          public: true
        }
      ];

      const resultsEl = document.getElementById('results');
      const searchBtn = document.getElementById('searchBtn');
      const searchInput = document.getElementById('searchInput');

      function scorePill(icon, label) {
        return `
        <span class="inline-flex items-center gap-1 rounded-md border border-neutral-800 bg-neutral-900 px-2 py-1 text-[11px] text-neutral-300">
          <i data-lucide="${icon}" class="h-3.5 w-3.5"></i>${label}
        </span>`;
      }

      function renderResults() {
        const q = searchInput.value.trim().toLowerCase();
        const filtered = resultsData.filter(r => {
          if (publicOnly && !r.public) return false;
          if (!q) return true;
          return r.title.toLowerCase().includes(q) || r.snippet.toLowerCase().includes(q);
        });
        resultsEl.innerHTML = filtered.map((r, idx) => `
          <div class="p-4 flex flex-col gap-2 hover:bg-neutral-900/40">
            <div class="flex items-start justify-between gap-3">
              <div>
                <div class="flex items-center gap-2">
                  <button class="text-left text-sm md:text-base tracking-tight font-semibold text-white hover:underline open-artifact" data-id="${r.id}">
                    ${idx+1}) ${r.title}
                  </button>
                  <i data-lucide="${r.public ? 'unlock' : 'lock'}" class="h-4 w-4 ${r.public ? 'text-emerald-400' : 'text-amber-400'}"></i>
                </div>
                <p class="text-sm text-neutral-300 mt-0.5">${r.snippet}</p>
              </div>
              <div class="flex items-center gap-2 shrink-0">
                ${scorePill('hash', 'BM25:'+r.bm25.toFixed(2))}
                ${scorePill('fingerprint', 'Vector:'+r.vector.toFixed(2))}
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                ${r.tags.map(t => `<span class="text-[11px] rounded-md bg-neutral-800/70 px-2 py-0.5 text-neutral-300">#${t}</span>`).join('')}
                <span class="text-[11px] text-neutral-400">Sources: ${r.sources}</span>
              </div>
              <div class="flex items-center gap-2">
                <button class="open-artifact inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-2.5 py-1.5 text-xs font-medium text-neutral-200 hover:bg-neutral-800" data-id="${r.id}">
                  <i data-lucide="external-link" class="h-3.5 w-3.5"></i>
                  Open
                </button>
              </div>
            </div>
          </div>
        `).join('') || `<div class="p-6 text-sm text-neutral-400">No results.</div>`;
        if (window.lucide) { lucide.createIcons(); }
        resultsEl.querySelectorAll('.open-artifact').forEach(btn => {
          btn.addEventListener('click', () => showView('artifact'));
        });
      }
      renderResults();
      searchBtn.addEventListener('click', renderResults);
      searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') renderResults(); });

      // Back from artifact
      document.getElementById('backToResults').addEventListener('click', () => showView('search'));

      // Copy with citation
      function copyWithCitation(text, artifact, page, start, end) {
        const payload = `"${text}" — ValuWiki / Artifact ${artifact} / p${page} / chars ${start}-${end}`;
        navigator.clipboard.writeText(payload).then(() => {
          toast('Copied with citation');
        });
      }
      document.querySelectorAll('[data-copy-cite]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const el = e.currentTarget;
          const quote = document.getElementById(el.getAttribute('data-quote-id')).textContent.trim();
          const art = el.getAttribute('data-artifact');
          const page = el.getAttribute('data-page');
          const start = el.getAttribute('data-start');
          const end = el.getAttribute('data-end');
          copyWithCitation(quote, art, page, start, end);
        });
      });

      // Derived JSON download
      document.getElementById('downloadJson').addEventListener('click', () => {
        const data = {
          artifact_id: 'AW-2024-0812-001',
          status: 'completed',
          pages: [
            { page: 1, chunks: [{ idx: 0, text: document.getElementById('chunk0').textContent.trim() }, { idx: 1, text: document.getElementById('chunk1').textContent.trim() }] }
          ]
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'derived.json';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      });

      // Ask (RAG) interactions
      const askBtn = document.getElementById('askBtn');
      const askInput = document.getElementById('askInput');
      const answerEl = document.getElementById('answer');
      const srcCards = document.getElementById('sourceCards');
      const confBar = document.getElementById('confBar');
      const confLabel = document.getElementById('confLabel');
      const tokUsed = document.getElementById('tokUsed');
      const promptBlock = document.getElementById('promptBlock');

      askBtn.addEventListener('click', handleAsk);
      askInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleAsk(); });

      function handleAsk() {
        const q = askInput.value.trim() || 'How did X company guidance change in Q2?';
        const conf = 0.82;
        // Answer with inline citations [1], [2]
        answerEl.innerHTML = `
          <p>Guidance was raised for Q3 revenue with an emphasis on stronger pipeline conversion and improved retention <a href="#src-1" class="text-teal-400 hover:underline">[1]</a>. Management narrowed the full‑year outlook with an upside bias and reiterated the long‑term ARR growth framework <a href="#src-2" class="text-teal-400 hover:underline">[2]</a>.</p>
          <p>Operating margin is expected to expand on mix shift to higher‑margin cloud ARR, while FX remains a modest headwind into H2 <a href="#src-3" class="text-teal-400 hover:underline">[3]</a>.</p>
        `;
        // Confidence + tokens
        confBar.style.width = (conf * 100) + '%';
        confLabel.textContent = Math.round(conf * 100) + '%';
        tokUsed.textContent = '1,236';
        // Prompt shown
        promptBlock.textContent = [
          'System: You are an analyst assistant. Cite sources inline as [n].',
          'User question: ' + q,
          'Retrieval: top-k=3; re-rank: bm25+vector; dedupe: checksum'
        ].join('\n');

        // Source cards
        srcCards.innerHTML = [
          {
            id: 'src-1',
            title: 'Q2 Earnings Call Transcript',
            ref: 'p3',
            excerpt: '“We are raising Q3 revenue guidance on stronger pipeline conversion and improved retention.”',
            confidence: 0.88,
            artifact: 'AW-2024-0812-001'
          },
          {
            id: 'src-2',
            title: 'Investor Presentation — Guidance Update',
            ref: 'p7',
            excerpt: 'FY guide narrowed with upside bias; reiterated long‑term ARR growth framework.',
            confidence: 0.80,
            artifact: 'AW-2024-0729-003'
          },
          {
            id: 'src-3',
            title: 'Sell-side Summary: Post-Q2 Notes',
            ref: 'p2',
            excerpt: 'FX remains a modest headwind into H2; margin expansion supported by mix shift.',
            confidence: 0.78,
            artifact: 'AW-2024-0615-014'
          }
        ].map((s, i) => `
          <div id="${s.id}" class="rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <div class="flex items-start justify-between gap-3">
              <div>
                <div class="flex items-center gap-2">
                  <span class="inline-flex h-5 w-5 items-center justify-center rounded-md bg-neutral-800 text-[11px] text-neutral-200">${i+1}</span>
                  <p class="text-sm font-medium text-neutral-200">${s.title} — ${s.ref}</p>
                </div>
                <p class="mt-2 text-sm text-neutral-300">${s.excerpt}</p>
              </div>
              <div class="shrink-0 text-right">
                <div class="text-[11px] text-neutral-400">Confidence</div>
                <div class="mt-1 h-1.5 w-20 rounded-full bg-neutral-800 overflow-hidden">
                  <div class="h-full" style="width:${Math.round(s.confidence*100)}%; background: linear-gradient(90deg,#22d3ee,#34d399)"></div>
                </div>
              </div>
            </div>
            <div class="mt-3 flex items-center gap-2">
              <button class="inline-flex items-center gap-1 rounded-md border border-neutral-800 bg-neutral-900 px-2 py-1 text-xs text-neutral-200 hover:bg-neutral-800 open-artifact">
                <i data-lucide="external-link" class="h-3.5 w-3.5"></i>
                Open in viewer
              </button>
              <button class="inline-flex items-center gap-1 rounded-md border border-neutral-800 bg-neutral-900 px-2 py-1 text-xs text-neutral-200 hover:bg-neutral-800 copy-excerpt" data-text="${s.excerpt.replace(/"/g, '&quot;')}" data-artifact="${s.artifact}">
                <i data-lucide="clipboard" class="h-3.5 w-3.5"></i>
                Copy excerpt
              </button>
            </div>
          </div>
        `).join('');
        // Bind actions
        srcCards.querySelectorAll('.open-artifact').forEach(btn => {
          btn.addEventListener('click', () => showView('artifact'));
        });
        srcCards.querySelectorAll('.copy-excerpt').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const text = e.currentTarget.getAttribute('data-text');
            const artifact = e.currentTarget.getAttribute('data-artifact');
            navigator.clipboard.writeText(`${text} — ValuWiki / Artifact ${artifact}`).then(() => toast('Excerpt copied'));
          });
        });
        if (window.lucide) { lucide.createIcons(); }
      }

      // Simple toast
      function toast(msg) {
        const t = document.createElement('div');
        t.className = 'fixed bottom-4 left-1/2 -translate-x-1/2 z-50 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-200 shadow';
        t.textContent = msg;
        document.body.appendChild(t);
        setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .3s'; }, 1400);
        setTimeout(() => t.remove(), 1750);
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
      

<div className="min-h-screen flex flex-col">

<header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-14 items-center justify-between">
<div className="flex items-center gap-3">

<img alt="ValuWiki logo" className="h-7 w-7 rounded-md shadow-[0_0_40px_#14b8a6] ring-1 ring-teal-400/30" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<span className="text-xl tracking-tight font-semibold text-white">ValuWiki</span>
</div>
<nav className="hidden md:flex items-center gap-6">
<button className="text-sm font-medium text-neutral-300 hover:text-white transition" data-nav="search">Search</button>
<button className="text-sm font-medium text-neutral-300 hover:text-white transition" data-nav="ask">Ask</button>
<button className="text-sm font-medium text-neutral-300 hover:text-white transition" data-nav="artifacts">My Artifacts</button>
<div className="h-6 w-px bg-neutral-800"></div>
<button className="flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-sm font-medium text-neutral-200 hover:bg-neutral-800 transition">
<i className="h-4 w-4" data-lucide="user"></i>
                Analyst
              </button>
</nav>
<button className="md:hidden rounded-md border border-neutral-800 p-2" id="mobileMenuBtn">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>

<div className="hidden md:hidden pb-3" id="mobileNav">
<div className="flex flex-col gap-2 pt-2">
<button className="text-sm text-left font-medium text-neutral-300 hover:text-white transition px-1 py-1" data-nav="search">Search</button>
<button className="text-sm text-left font-medium text-neutral-300 hover:text-white transition px-1 py-1" data-nav="ask">Ask</button>
<button className="text-sm text-left font-medium text-neutral-300 hover:text-white transition px-1 py-1" data-nav="artifacts">My Artifacts</button>
</div>
</div>
</div>
</header>

<main className="flex-1">

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8" id="view-search">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<aside className="lg:col-span-3">
<nav className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-3">
<ul className="flex lg:block gap-2 lg:gap-0">
<li>
<button className="w-full flex items-center gap-3 rounded-md px-3 py-2 hover:bg-neutral-800/60 transition text-neutral-200" data-nav="search">
<i className="h-4 w-4" data-lucide="home"></i>
<span className="text-sm font-medium">Home</span>
</button>
</li>
<li>
<button className="w-full flex items-center gap-3 rounded-md px-3 py-2 hover:bg-neutral-800/60 transition text-neutral-300" data-nav="artifacts">
<i className="h-4 w-4" data-lucide="folder"></i>
<span className="text-sm font-medium">My Artifacts</span>
</button>
</li>
<li>
<button className="w-full flex items-center gap-3 rounded-md px-3 py-2 hover:bg-neutral-800/60 transition text-neutral-300">
<i className="h-4 w-4" data-lucide="file-text"></i>
<span className="text-sm font-medium">Thesis</span>
</button>
</li>
<li>
<button className="w-full flex items-center gap-3 rounded-md px-3 py-2 hover:bg-neutral-800/60 transition text-neutral-300">
<i className="h-4 w-4" data-lucide="shield-check"></i>
<span className="text-sm font-medium">Admin</span>
</button>
</li>
</ul>
</nav>
</aside>

<div className="lg:col-span-9">
<div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 md:p-6">
<div className="flex flex-col gap-3">

<div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
<div className="relative flex-1">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" data-lucide="search"></i>
<input className="w-full rounded-lg border border-neutral-800 bg-neutral-950 pl-10 pr-3 py-2.5 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30" id="searchInput" placeholder="Search documents, filings, transcripts..." type="text" />
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500/90 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-500 transition" id="searchBtn">
<i className="h-4 w-4" data-lucide="search"></i>
                      Search
                    </button>
</div>

<div className="flex flex-wrap items-center gap-3">

<div className="relative">
<button className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs font-medium text-neutral-300 hover:bg-neutral-900 transition" id="tenantBtn">
<i className="h-4 w-4" data-lucide="building-2"></i>
<span>Tenant: <span className="text-neutral-100" id="tenantLabel">All</span></span>
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-20 mt-2 w-44 rounded-lg border border-neutral-800 bg-neutral-950 p-1 shadow-lg" id="tenantMenu">
<button className="w-full text-left rounded-md px-3 py-2 text-xs text-neutral-200 hover:bg-neutral-800" data-tenant="All">All</button>
<button className="w-full text-left rounded-md px-3 py-2 text-xs text-neutral-200 hover:bg-neutral-800" data-tenant="Research">Research</button>
<button className="w-full text-left rounded-md px-3 py-2 text-xs text-neutral-200 hover:bg-neutral-800" data-tenant="PM">PM</button>
<button className="w-full text-left rounded-md px-3 py-2 text-xs text-neutral-200 hover:bg-neutral-800" data-tenant="IR">IR</button>
</div>
</div>

<div className="relative">
<button className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs font-medium text-neutral-300 hover:bg-neutral-900 transition" id="dateBtn">
<i className="h-4 w-4" data-lucide="calendar"></i>
<span>Date: <span className="text-neutral-100" id="dateLabel">Any time</span></span>
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-20 mt-2 w-48 rounded-lg border border-neutral-800 bg-neutral-950 p-1 shadow-lg" id="dateMenu">
<button className="w-full text-left rounded-md px-3 py-2 text-xs text-neutral-200 hover:bg-neutral-800" data-date="Any time">Any time</button>
<button className="w-full text-left rounded-md px-3 py-2 text-xs text-neutral-200 hover:bg-neutral-800" data-date="Last 7 days">Last 7 days</button>
<button className="w-full text-left rounded-md px-3 py-2 text-xs text-neutral-200 hover:bg-neutral-800" data-date="Last 30 days">Last 30 days</button>
<button className="w-full text-left rounded-md px-3 py-2 text-xs text-neutral-200 hover:bg-neutral-800" data-date="This year">This year</button>
</div>
</div>

<div className="flex items-center gap-2">
<span className="text-xs font-medium text-neutral-300">Public only</span>
<button className="relative h-6 w-11 rounded-full border border-neutral-800 bg-neutral-900 transition" id="publicToggle">
<span className="absolute left-1 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-neutral-500 transition"></span>
</button>
</div>
</div>

<div>
<h2 className="text-lg md:text-xl tracking-tight font-semibold text-white mb-2">Results</h2>
<div className="flex flex-col divide-y divide-neutral-800 rounded-xl border border-neutral-800 bg-neutral-950/40" id="results">

</div>
</div>
</div>
</div>
</div>
</div>

<footer className="mt-8 border-t border-neutral-800 pt-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div>
<p className="text-sm text-neutral-400">Search and synthesize earnings, filings, transcripts, and internal docs in one place.</p>
</div>
<div>
<h3 className="text-base tracking-tight font-semibold text-white mb-2">Quick links</h3>
<div className="flex flex-wrap gap-3 text-sm">
<a className="text-neutral-300 hover:text-white" data-nav="search" href="#">Home</a>
<a className="text-neutral-300 hover:text-white" data-nav="ask" href="#">Ask</a>
<a className="text-neutral-300 hover:text-white" href="#">My Artifacts</a>
<a className="text-neutral-300 hover:text-white" href="#">Admin</a>
</div>
</div>
<div>
<h3 className="text-base tracking-tight font-semibold text-white mb-2">Beta signup</h3>
<div className="flex gap-2">
<input className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30" placeholder="your@company.com" type="email" />
<button className="rounded-lg bg-teal-500/90 px-3 py-2 text-sm font-medium text-white hover:bg-teal-500">Join</button>
</div>
</div>
</div>
</footer>
</section>

<section className="hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8" id="view-artifact">
<div className="mb-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-sm font-medium text-neutral-200 hover:bg-neutral-800 transition" id="backToResults">
<i className="h-4 w-4" data-lucide="arrow-left"></i>
                Back to results
              </button>
<h1 className="text-xl md:text-2xl tracking-tight font-semibold text-white">Q2 Earnings Call Transcript (2024-08-12)</h1>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-sm font-medium text-neutral-200 hover:bg-neutral-800">
<i className="h-4 w-4" data-lucide="pencil"></i>
                Edit
              </button>
<button className="inline-flex items-center gap-2 rounded-md bg-teal-500/90 px-3 py-1.5 text-sm font-medium text-white hover:bg-teal-500">
<i className="h-4 w-4" data-lucide="upload-cloud"></i>
                Publish
              </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8">
<div className="rounded-xl border border-neutral-800 bg-neutral-900/40 overflow-hidden">
<div className="flex items-center gap-2 border-b border-neutral-800 p-3">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-neutral-400">Page</span>
<div className="flex gap-1">
<button className="px-2 py-1 text-xs rounded-md bg-neutral-800 text-neutral-200">1</button>
<button className="px-2 py-1 text-xs rounded-md hover:bg-neutral-800 text-neutral-300">2</button>
<button className="px-2 py-1 text-xs rounded-md hover:bg-neutral-800 text-neutral-300">3</button>
</div>
</div>
</div>
<div className="p-4 md:p-6 space-y-4">

<article className="rounded-lg border border-neutral-800 bg-neutral-950/40 p-4">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-base tracking-tight font-semibold text-white">Chunk 0 — Executive Summary</h3>
<p className="mt-1 text-sm text-neutral-300" id="chunk0">
                          Revenue grew 9% y/y with operating margin expansion of 120 bps. Guidance for Q3 was raised on stronger pipeline conversion and improved retention.
                        </p>
</div>
<button className="shrink-0 inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-200 hover:bg-neutral-800" data-artifact="AW-2024-0812-001" data-copy-cite="" data-end="138" data-page="1" data-quote-id="chunk0" data-start="12">
<i className="h-4 w-4" data-lucide="clipboard-copy"></i>
                        Copy w/ citation
                      </button>
</div>
</article>

<article className="rounded-lg border border-neutral-800 bg-neutral-950/40 p-4">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-base tracking-tight font-semibold text-white">Chunk 1 — Table 2: Segment Performance</h3>
<p className="mt-1 text-sm text-neutral-300" id="chunk1">
                          Cloud ARR reached $1.4B (+17% y/y) while Payments grew 6% y/y. International contributed 34% of total revenue with stable churn.
                        </p>
</div>
<button className="shrink-0 inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-200 hover:bg-neutral-800" data-artifact="AW-2024-0812-001" data-copy-cite="" data-end="128" data-page="1" data-quote-id="chunk1" data-start="0">
<i className="h-4 w-4" data-lucide="clipboard-copy"></i>
                        Copy w/ citation
                      </button>
</div>
</article>
</div>
</div>

<div className="mt-6">
<h2 className="text-lg md:text-xl tracking-tight font-semibold text-white mb-3">Related artifacts</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<a className="group rounded-xl border border-neutral-800 overflow-hidden bg-neutral-900/40 hover:bg-neutral-900 transition" href="#">
<div className="h-24 bg-cover bg-center" style={{backgroundImage: `url('https://source.unsplash.com/featured/400x200?3d,render')`}}></div>
<div className="p-3">
<p className="text-sm font-medium text-neutral-200 group-hover:text-white">Q2 Investor Deck Highlights</p>
<p className="text-xs text-neutral-400 mt-1">Updated 17 days ago</p>
</div>
</a>
<a className="group rounded-xl border border-neutral-800 overflow-hidden bg-neutral-900/40 hover:bg-neutral-900 transition" href="#">
<div className="h-24 bg-cover bg-center" style={{backgroundImage: `url('https://source.unsplash.com/featured/400x200?mountains,minimal')`}}></div>
<div className="p-3">
<p className="text-sm font-medium text-neutral-200 group-hover:text-white">Sell-side Summary — Q2</p>
<p className="text-xs text-neutral-400 mt-1">Updated 5 days ago</p>
</div>
</a>
<a className="group rounded-xl border border-neutral-800 overflow-hidden bg-neutral-900/40 hover:bg-neutral-900 transition" href="#">
<div className="h-24 bg-cover bg-center" style={{backgroundImage: `url('https://source.unsplash.com/featured/400x200?face,minimal')`}}></div>
<div className="p-3">
<p className="text-sm font-medium text-neutral-200 group-hover:text-white">Mgt. Q&A — Key Quotes</p>
<p className="text-xs text-neutral-400 mt-1">Updated yesterday</p>
</div>
</a>
</div>
</div>
</div>

<aside className="lg:col-span-4">
<div className="sticky top-20 space-y-4">
<div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
<h3 className="text-base tracking-tight font-semibold text-white mb-3">Metadata</h3>
<dl className="space-y-2 text-sm">
<div className="flex items-center justify-between">
<dt className="text-neutral-400">artifact_id</dt>
<dd className="text-neutral-200 font-medium">AW-2024-0812-001</dd>
</div>
<div className="flex items-center justify-between">
<dt className="text-neutral-400">source</dt>
<dd>
<a className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300" href="#">
<i className="h-4 w-4" data-lucide="cloud"></i>
                          OneDrive — download
                        </a>
</dd>
</div>
<div className="flex items-center justify-between">
<dt className="text-neutral-400">status</dt>
<dd className="inline-flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="text-neutral-200 font-medium">completed</span>
</dd>
</div>
<div className="flex items-center justify-between">
<dt className="text-neutral-400">checksum</dt>
<dd className="text-neutral-200 font-medium">9f2a5c1e</dd>
</div>
<div className="flex items-center justify-between">
<dt className="text-neutral-400">derived_json</dt>
<dd>
<button className="inline-flex items-center gap-1 rounded-md border border-neutral-800 bg-neutral-900 px-2 py-1 text-xs text-neutral-200 hover:bg-neutral-800" id="downloadJson">
<i className="h-4 w-4" data-lucide="download"></i>
                          download
                        </button>
</dd>
</div>
</dl>
</div>
</div>
</aside>
</div>
</section>

<section className="hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8" id="view-ask">
<div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 md:p-6">
<div className="flex flex-col md:flex-row gap-3">
<div className="relative flex-1">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" data-lucide="message-square"></i>
<input className="w-full rounded-lg border border-neutral-800 bg-neutral-950 pl-10 pr-3 py-2.5 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30" id="askInput" placeholder="How did X company guidance change in Q2?" type="text" />
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500/90 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-500 transition" id="askBtn">
<i className="h- w-4" data-lucide="sparkles"></i>
                Ask
              </button>
</div>
<div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-7">
<div className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
<h2 className="text-lg md:text-xl tracking-tight font-semibold text-white mb-3">Answer</h2>
<div className="space-y-3 text-sm text-neutral-300" id="answer">

</div>

<div className="mt-4 flex items-center justify-between gap-4">
<div className="w-full">
<div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
<span>Confidence</span><span id="confLabel">—</span>
</div>
<div className="h-2 w-full rounded-full bg-neutral-800 overflow-hidden">
<div className="h-full w-0 rounded-full bg-gradient-to-r from-amber-400 via-teal-400 to-emerald-400 transition-[width] duration-500" id="confBar"></div>
</div>
</div>
<div className="text-xs text-neutral-400 shrink-0">
<div>Tokens: <span id="tokUsed">0</span></div>
</div>
</div>

<details className="mt-4 rounded-lg border border-neutral-800 bg-neutral-900/40 p-3">
<summary className="cursor-pointer text-sm font-medium text-neutral-200">Show prompt used</summary>
<pre className="mt-2 whitespace-pre-wrap text-xs text-neutral-400" id="promptBlock"></pre>
</details>
</div>
</div>

<div className="lg:col-span-5">
<h3 className="text-base tracking-tight font-semibold text-white mb-3">Sources</h3>
<div className="space-y-3" id="sourceCards">

</div>
</div>
</div>
</div>
</section>
</main>
</div>



    </>
  );
}
