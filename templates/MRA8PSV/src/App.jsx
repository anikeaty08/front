import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
colors: {
ink: {
50: '#f6f7f9', 100: '#eceef2', 200: '#dbe0e8', 300: '#c6cdd9',
400: '#9aa3b2', 500: '#6b7280', 600: '#4b5563', 700: '#374151',
800: '#1f2937', 900: '#111827'
},
primary: {
50: '#eef2ff', 100: '#e0e7ff', 200: '#c7d2fe', 300: '#a5b4fc',
400: '#93a2ff', 500: '#818cf8', 600: '#6366f1', 700: '#5458dc',
800: '#474cc1', 900: '#3a3fa2'
},
mint: { 100:'#daf5ee', 300:'#a8e8d8', 500:'#62d6bf', 700:'#2cb39a' },
peach: { 100:'#ffe9e2', 300:'#ffc9b5', 500:'#ffa98b', 700:'#ff8359' },
},
boxShadow: {
soft: '0 10px 30px -12px rgba(2,6,23,0.12), 0 6px 16px -8px rgba(2,6,23,0.10)',
}
}
},
darkMode: 'class'
};



    // Utility: Lucide
    function refreshIcons() {
      try { lucide.createIcons(); } catch(e) {}
    }

    // Theme handling
    const rootEl = document.documentElement;
    function setTheme(mode) {
      if (mode === 'dark') rootEl.classList.add('dark'); else rootEl.classList.remove('dark');
      localStorage.setItem('rebro-theme', mode);
    }
    (function initTheme() {
      const saved = localStorage.getItem('rebro-theme');
      if (saved) setTheme(saved);
      else if (window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark');
      refreshIcons();
    })();

    // Sidebar controls
    const aside = document.getElementById('sidebar');
    const collapseBtn = document.getElementById('collapseBtn');
    const showSidebarBtn = document.getElementById('showSidebarBtn');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    collapseBtn?.addEventListener('click', () => {
      aside.classList.add('hidden');
      showSidebarBtn.classList.remove('hidden');
    });
    showSidebarBtn?.addEventListener('click', () => {
      aside.classList.remove('hidden');
      showSidebarBtn.classList.add('hidden');
    });
    mobileMenuBtn?.addEventListener('click', () => {
      aside.classList.toggle('hidden');
    });

    // Topbar toggles
    document.getElementById('darkToggle')?.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('on');
      setTheme(rootEl.classList.contains('dark') ? 'light' : 'dark');
    });
    document.getElementById('mobileTheme')?.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('on');
      setTheme(rootEl.classList.contains('dark') ? 'light' : 'dark');
    });
    // Settings theme buttons
    document.getElementById('settingsLight')?.addEventListener('click', () => setTheme('light'));
    document.getElementById('settingsDark')?.addEventListener('click', () => setTheme('dark'));
    document.getElementById('settingsSystem')?.addEventListener('click', () => {
      const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(preferDark ? 'dark' : 'light');
    });

    // Simple toast
    function showToast(msg = 'Saved') {
      const t = document.getElementById('toast');
      document.getElementById('toastMsg').textContent = msg;
      t.classList.remove('hidden');
      setTimeout(() => t.classList.add('hidden'), 2000);
      refreshIcons();
    }

    // Navigation
    const pages = document.querySelectorAll('.page');
    function goTo(id) {
      pages.forEach(p => p.classList.remove('active'));
      document.getElementById(id)?.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      refreshIcons();
    }
    document.querySelectorAll('.navbtn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-nav');
        goTo(id);
      });
    });

    // Dataset
    let leads = [
      { id: 1, name: 'John Smith', phone: '(602) 555-0142', email: 'john.smith@example.com', source:'facebook-ads', city:'Phoenix', state:'AZ', investorType:'flipper', budgetMin:120000, budgetMax:250000, stage:'new', tags:['hot'], propertyTypes:['residential'], createdAt: new Date().getTime()-1000*60*60*2 },
      { id: 2, name: 'Sarah Lopez', phone: '(415) 555-4421', email: 'sarah.lopez@example.com', source:'referral', city:'San Francisco', state:'CA', investorType:'rental', budgetMin:400000, budgetMax:700000, stage:'interested', tags:['warm'], propertyTypes:['multi-family'], createdAt: new Date().getTime()-1000*60*60*24*1 },
      { id: 3, name: 'Mike Chen', phone: '(303) 555-7720', email: 'mike.chen@example.com', source:'google-ads', city:'Denver', state:'CO', investorType:'brrrr', budgetMin:200000, budgetMax:300000, stage:'contacted', tags:['cold'], propertyTypes:['residential','condos'], createdAt: new Date().getTime()-1000*60*60*5 },
      { id: 4, name: 'David Kim', phone: '(212) 555-1100', email: 'david.kim@example.com', source:'website', city:'New York', state:'NY', investorType:'commercial', budgetMin:1000000, budgetMax:2000000, stage:'negotiation', tags:['hot'], propertyTypes:['commercial'], createdAt: new Date().getTime()-1000*60*60*48 },
      { id: 5, name: 'Priya Patel', phone: '(214) 555-3201', email: 'priya.patel@example.com', source:'linkedin', city:'Dallas', state:'TX', investorType:'rental', budgetMin:300000, budgetMax:450000, stage:'new', tags:['warm'], propertyTypes:['multi-family'], createdAt: new Date().getTime()-1000*60*60*3 },
      { id: 6, name: 'Luis Garcia', phone: '(305) 555-8991', email: 'luis.garcia@example.com', source:'referral', city:'Miami', state:'FL', investorType:'flipper', budgetMin:150000, budgetMax:220000, stage:'closed', tags:['hot'], propertyTypes:['residential'], createdAt: new Date().getTime()-1000*60*60*72 },
      { id: 7, name: 'Emily Johnson', phone: '(310) 555-2210', email: 'emily.j@example.com', source:'facebook-ads', city:'Los Angeles', state:'CA', investorType:'syndication', budgetMin:500000, budgetMax:1500000, stage:'interested', tags:['warm'], propertyTypes:['commercial','multi-family'], createdAt: new Date().getTime()-1000*60*60*8 },
      { id: 8, name: 'Ahmed Hassan', phone: '(470) 555-9801', email: 'ahmed.h@example.com', source:'cold-call', city:'Atlanta', state:'GA', investorType:'wholesale', budgetMin:80000, budgetMax:120000, stage:'contacted', tags:['cold'], propertyTypes:['land'], createdAt: new Date().getTime()-1000*60*60*10 },
      { id: 9, name: 'Zoe Miller', phone: '(720) 555-3021', email: 'zoe.m@example.com', source:'website', city:'Boulder', state:'CO', investorType:'fix-hold', budgetMin:350000, budgetMax:600000, stage:'negotiation', tags:['hot'], propertyTypes:['residential','condos'], createdAt: new Date().getTime()-1000*60*60*30 },
      { id:10, name: 'Tom Nguyen', phone: '(480) 555-6632', email: 'tom.n@example.com', source:'direct-mail', city:'Tempe', state:'AZ', investorType:'rental', budgetMin:200000, budgetMax:350000, stage:'new', tags:['cold'], propertyTypes:['condos'], createdAt: new Date().getTime()-1000*60*60*1 },
      { id:11, name: 'Hannah Lee', phone: '(737) 555-4402', email: 'hannah.lee@example.com', source:'referral', city:'Austin', state:'TX', investorType:'commercial', budgetMin:2000000, budgetMax:3500000, stage:'closed', tags:['hot'], propertyTypes:['commercial','luxury'], createdAt: new Date().getTime()-1000*60*60*96 },
      { id:12, name: 'Marco Rossi', phone: '(954) 555-7788', email: 'marco.r@example.com', source:'networking', city:'Fort Lauderdale', state:'FL', investorType:'flipper', budgetMin:180000, budgetMax:260000, stage:'interested', tags:['warm'], propertyTypes:['residential','land'], createdAt: new Date().getTime()-1000*60*60*15 },
    ];

    // Metrics config
    const metricCards = [
      { elTitle: document.getElementById('metricTitle0'), elValue: document.getElementById('metricValue0') },
      { elTitle: document.getElementById('metricTitle1'), elValue: document.getElementById('metricValue1') },
      { elTitle: document.getElementById('metricTitle2'), elValue: document.getElementById('metricValue2') },
      { elTitle: document.getElementById('metricTitle3'), elValue: document.getElementById('metricValue3') },
    ];
    const metricFns = {
      totalLeads: { label: 'Total Leads', calc: () => leads.length },
      leadsFromFacebook: { label: 'Leads from Facebook', calc: () => leads.filter(l => l.source === 'facebook-ads').length },
      totalContacted: { label: 'Total Contacted', calc: () => leads.filter(l => l.stage === 'contacted').length },
      totalHot: { label: 'Total Hot Leads', calc: () => leads.filter(l => l.tags.includes('hot')).length },
      totalCold: { label: 'Total Cold Leads', calc: () => leads.filter(l => l.tags.includes('cold')).length },
    };
    const leadMetricsConfig = document.getElementById('leadMetricsConfig');
    document.getElementById('configureLeadMetricsBtn')?.addEventListener('click', () => {
      leadMetricsConfig.classList.toggle('hidden');
    });
    leadMetricsConfig.querySelectorAll('select').forEach(sel => {
      sel.addEventListener('change', updateMetricCards);
    });
    function updateMetricCards() {
      leadMetricsConfig.querySelectorAll('select').forEach(sel => {
        const idx = Number(sel.getAttribute('data-metric-index'));
        const key = sel.value;
        const m = metricFns[key];
        if (metricCards[idx]) {
          metricCards[idx].elTitle.textContent = m.label;
          metricCards[idx].elValue.textContent = m.calc().toLocaleString();
        }
      });
    }

    // Filters
    const filterControls = {
      search: document.getElementById('filterSearch'),
      stage: document.getElementById('filterStage'),
      source: document.getElementById('filterSource'),
      state: document.getElementById('filterState'),
      budgetMin: document.getElementById('filterBudgetMin'),
      budgetMax: document.getElementById('filterBudgetMax'),
      investorType: document.getElementById('filterInvestorType'),
      tagHot: document.getElementById('filterTagHot'),
      tagWarm: document.getElementById('filterTagWarm'),
      tagCold: document.getElementById('filterTagCold'),
      ptInput: document.getElementById('filterPropertyTypesInput'),
      ptDropdown: document.getElementById('filterPropertyTypesDropdown'),
      ptChecks: () => Array.from(document.querySelectorAll('.filter-pt')),
      apply: document.getElementById('applyFilters'),
      clear: document.getElementById('clearFilters'),
    };
    let selectedFilterPT = [];

    function readFilters() {
      const search = filterControls.search.value.trim().toLowerCase();
      const stage = filterControls.stage.value;
      const source = filterControls.source.value;
      const state = filterControls.state.value;
      const investorType = filterControls.investorType.value;
      const budgetMin = parseInt(filterControls.bMin.value || 'NaN', 10);
      const budgetMax = parseInt(filterControls.budgetMax.value || 'NaN', 10);
      const tagFilters = [];
      if (filterControls.tagHot.checked) tagFilters.push('hot');
      if (filterControls.tagWarm.checked) tagFilters.push('warm');
      if (filterControls.tagCold.checked) tagFilters.push('cold');
      return { search, stage, source, state, investorType, budgetMin, budgetMax, tagFilters, propertyTypes: selectedFilterPT };
    }

    // Multi-select (Filter)
    filterControls.ptInput.addEventListener('click', () => {
      filterControls.ptDropdown.classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
      if (!filterControls.ptDropdown.contains(e.target) && !filterControls.ptInput.contains(e.target)) {
        filterControls.ptDropdown.classList.add('hidden');
      }
    });
    filterControls.ptChecks().forEach(chk => {
      chk.addEventListener('change', () => {
        selectedFilterPT = filterControls.ptChecks().filter(c => c.checked).map(c => c.value);
        filterControls.ptInput.value = selectedFilterPT.length ? selectedFilterPT.join(', ') : '';
      });
    });

    // Add Lead form multi-select and custom selects
    const addPTDisplay = document.getElementById('propertyTypesDisplay');
    const addPTDropdown = document.getElementById('propertyTypesDropdown');
    let addSelectedPT = [];
    addPTDisplay?.addEventListener('click', () => addPTDropdown.classList.toggle('hidden'));
    document.addEventListener('click', (e) => {
      if (!addPTDropdown.contains(e.target) && !addPTDisplay.contains(e.target)) {
        addPTDropdown.classList.add('hidden');
      }
    });
    addPTDropdown?.querySelectorAll('input[type="checkbox"]').forEach(chk => {
      chk.addEventListener('change', () => {
        addSelectedPT = Array.from(addPTDropdown.querySelectorAll('input[type="checkbox"]:checked')).map(c => c.value);
        addPTDisplay.value = addSelectedPT.join(', ');
      });
    });
    // Allow "+ Add custom..." in selects
    document.querySelectorAll('select[data-allow-custom="true"]').forEach(sel => {
      sel.addEventListener('change', () => {
        if (sel.value === '__custom__') {
          const label = prompt('Enter custom value');
          if (label) {
            const opt = document.createElement('option');
            opt.value = label;
            opt.textContent = label;
            sel.insertBefore(opt, sel.querySelector('option[value="__custom__"]'));
            sel.value = label;
          } else {
            sel.value = '';
          }
        }
      });
    });

    // File upload
    const fileInput = document.getElementById('fileUpload');
    const fileList = document.getElementById('fileList');
    fileInput?.addEventListener('change', () => {
      fileList.innerHTML = '';
      const files = Array.from(fileInput.files || []);
      if (files.length) fileList.classList.remove('hidden');
      files.forEach(f => {
        const row = document.createElement('div');
        row.className = 'flex items-center justify-between p-2 rounded-lg border border-ink-100 dark:border-ink-700';
        row.innerHTML = `
          <div class="flex items-center gap-2">
            <i data-lucide="file" class="w-4 h-4 text-ink-400"></i>
            <span class="text-sm">${f.name}</span>
          </div>
          <div class="text-xs text-ink-500">${(f.size/1024).toFixed(1)} KB</div>
        `;
        fileList.appendChild(row);
      });
      refreshIcons();
    });

    // Add Lead form handling
    const addLeadBtn = document.getElementById('addLeadBtn');
    const addLeadFromLeads = document.getElementById('addLeadFromLeads');
    const backToLeads = document.getElementById('backToLeads');
    const cancelForm = document.getElementById('cancelForm');
    const saveAndAddAnother = document.getElementById('saveAndAddAnother');
    addLeadBtn?.addEventListener('click', () => goTo('addLead'));
    addLeadFromLeads?.addEventListener('click', () => goTo('addLead'));
    backToLeads?.addEventListener('click', () => goTo('leads'));
    cancelForm?.addEventListener('click', () => goTo('leads'));

    const addLeadForm = document.getElementById('addLeadForm');
    addLeadForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(addLeadForm);
      const newLead = {
        id: Date.now(),
        name: fd.get('leadName') || 'Untitled',
        phone: fd.get('phone') || '',
        email: fd.get('email') || '',
        source: fd.get('leadSource') || '',
        city: fd.get('city') || '',
        state: fd.get('state') || '',
        investorType: fd.get('investorType') || '',
        budgetMin: parseInt(fd.get('budgetMin') || '0', 10),
        budgetMax: parseInt(fd.get('budgetMax') || '0', 10),
        stage: fd.get('pipelineStage') || 'new',
        tags: Array.from(addLeadForm.querySelectorAll('input[name="tags"]:checked')).map(c => c.value),
        propertyTypes: addSelectedPT,
        createdAt: Date.now()
      };
      leads.unshift(newLead);
      renderAll();
      showToast('Lead saved');
      goTo('leads');
    });
    saveAndAddAnother?.addEventListener('click', () => {
      addLeadForm?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      addLeadForm?.reset();
      addSelectedPT = [];
      addPTDisplay.value = '';
    });

    // Leads rendering with pagination and views
    let state = { page: 1, perPage: 8, view: 'table', sort: 'recent', filters: readFilters() };
    const leadCount = document.getElementById('leadCount');
    const leadsTbody = document.getElementById('leadsTbody');
    const leadsCardsWrap = document.getElementById('leadsCardsWrap');
    const leadsTableWrap = document.getElementById('leadsTableWrap');
    const currentPageEl = document.getElementById('currentPage');
    const paginationInfo = document.getElementById('paginationInfo');

    function stagePill(stage) {
      const map = {
        new: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300',
        contacted: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
        interested: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
        negotiation: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
        closed: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
      };
      return `<span class="px-2 py-0.5 rounded-full text-xs font-medium ${map[stage] || 'bg-ink-100 text-ink-700 dark:bg-ink-700 dark:text-ink-200'}">${stage[0].toUpperCase()+stage.slice(1)}</span>`;
    }
    function tagPill(tag) {
      const map = {
        hot: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
        warm: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
        cold: 'bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300',
      };
      return `<span class="px-2 py-0.5 rounded-full text-xs ${map[tag] || 'bg-ink-100 text-ink-700 dark:bg-ink-700 dark:text-ink-200'}">${tag[0].toUpperCase()+tag.slice(1)}</span>`;
    }

    function applySort(items, key) {
      const arr = [...items];
      switch (key) {
        case 'name-asc': arr.sort((a,b)=>a.name.localeCompare(b.name)); break;
        case 'budget-desc': arr.sort((a,b)=> (b.budgetMax||0) - (a.budgetMax||0)); break;
        case 'stage': arr.sort((a,b)=> ['new','contacted','interested','negotiation','closed'].indexOf(a.stage) - ['new','contacted','interested','negotiation','closed'].indexOf(b.stage)); break;
        case 'source': arr.sort((a,b)=> a.source.localeCompare(b.source)); break;
        case 'recent':
        default: arr.sort((a,b)=> (b.createdAt||0) - (a.createdAt||0));
      }
      return arr;
    }

    function filterItems(items, f) {
      return items.filter(l => {
        if (f.search) {
          const blob = `${l.name} ${l.email} ${l.phone} ${l.city} ${l.state} ${l.source} ${l.investorType}`.toLowerCase();
          if (!blob.includes(f.search)) return false;
        }
        if (f.stage && l.stage !== f.stage) return false;
        if (f.source && l.source !== f.source) return false;
        if (f.state && l.state !== f.state) return false;
        if (f.investorType && l.investorType !== f.investorType) return false;
        if (!Number.isNaN(f.budgetMin) && (l.budgetMax || 0) < f.budgetMin) return false;
        if (!Number.isNaN(f.budgetMax) && (l.budgetMin || 0) > f.budgetMax) return false;
        if (f.tagFilters.length && !f.tagFilters.some(t => l.tags.includes(t))) return false;
        if (f.propertyTypes.length && !f.propertyTypes.every(pt => l.propertyTypes.includes(pt))) return false;
        return true;
      });
    }

    function renderTable(rows) {
      leadsTbody.innerHTML = rows.map(l => `
        <tr class="hover:bg-ink-50/50 dark:hover:bg-ink-800/60 transition-colors">
          <td class="px-4 py-3">
            <div class="font-medium">${l.name}</div>
            <div class="text-xs text-ink-500">${l.city || ''}${l.city && l.state ? ', ' : ''}${l.state || ''}</div>
          </td>
          <td class="px-4 py-3">
            <div class="text-sm">${l.email}</div>
            <div class="text-xs text-ink-500">${l.phone}</div>
          </td>
          <td class="px-4 py-3">${l.investorType ? l.investorType.replace('-', ' ') : ''}</td>
          <td class="px-4 py-3">$${(l.budgetMin||0).toLocaleString()} – $${(l.budgetMax||0).toLocaleString()}</td>
          <td class="px-4 py-3">${stagePill(l.stage)}</td>
          <td class="px-4 py-3" title="${l.source}">${l.source?.replace('-', ' ')}</td>
          <td class="px-4 py-3 flex flex-wrap gap-1">${l.tags.map(tagPill).join('')}</td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-2">
              <button class="p-2 rounded-lg hover:bg-ink-100 dark:hover:bg-ink-700" title="View"><i data-lucide="eye" class="w-4 h-4"></i></button>
              <a href="tel:${l.phone?.replace(/[^0-9+]/g,'') || ''}" class="p-2 rounded-lg hover:bg-ink-100 dark:hover:bg-ink-700" title="Call"><i data-lucide="phone" class="w-4 h-4"></i></a>
              <a href="mailto:${l.email || ''}" class="p-2 rounded-lg hover:bg-ink-100 dark:hover:bg-ink-700" title="Email"><i data-lucide="mail" class="w-4 h-4"></i></a>
            </div>
          </td>
        </tr>
      `).join('');
    }

    function renderCards(rows) {
      leadsCardsWrap.innerHTML = rows.map(l => `
        <div class="p-4 rounded-2xl bg-white dark:bg-ink-800 border border-ink-100 dark:border-ink-700">
          <div class="flex items-start justify-between gap-3">
            <div>
              <div class="font-medium">${l.name}</div>
              <div class="text-xs text-ink-500">${l.city || ''}${l.city && l.state ? ', ' : ''}${l.state || ''}</div>
            </div>
            ${stagePill(l.stage)}
          </div>
          <div class="mt-3 text-sm">
            <div class="flex items-center gap-2 text-ink-600 dark:text-ink-300"><i data-lucide="mail" class="w-4 h-4"></i>${l.email}</div>
            <div class="flex items-center gap-2 text-ink-600 dark:text-ink-300 mt-1"><i data-lucide="phone" class="w-4 h-4"></i>${l.phone}</div>
          </div>
          <div class="mt-3 text-xs text-ink-500">Budget: $${(l.budgetMin||0).toLocaleString()} – $${(l.budgetMax||0).toLocaleString()}</div>
          <div class="mt-2 flex flex-wrap gap-1">${l.tags.map(tagPill).join('')}</div>
          <div class="mt-3 flex items-center gap-2">
            <a href="mailto:${l.email || ''}" class="px-3 py-2 rounded-xl border border-ink-200 dark:border-ink-700 text-sm hover:bg-ink-50 dark:hover:bg-ink-700">Email</a>
            <a href="tel:${l.phone?.replace(/[^0-9+]/g,'') || ''}" class="px-3 py-2 rounded-xl bg-primary-600 text-white text-sm hover:bg-primary-700">Call</a>
          </div>
        </div>
      `).join('');
    }

    function paginate(items, page, perPage) {
      const total = items.length;
      const pages = Math.max(1, Math.ceil(total / perPage));
      const p = Math.min(Math.max(1, page), pages);
      const start = (p - 1) * perPage;
      const end = Math.min(start + perPage, total);
      return { slice: items.slice(start, end), total, page: p, pages, start: start+1, end };
    }

    function renderLeads() {
      // Read state
      state.filters = readFilters();
      let list = filterItems(leads, state.filters);
      list = applySort(list, state.sort);

      // Pagination
      const { slice, total, page, pages, start, end } = paginate(list, state.page, state.perPage);
      leadCount.textContent = total.toLocaleString();
      currentPageEl.textContent = `${page}/${pages}`;
      paginationInfo.textContent = `Showing ${total ? start : 0}–${total ? end : 0} of ${total.toLocaleString()}`;

      // Views
      if (state.view === 'table') {
        leadsTableWrap.classList.remove('hidden');
        leadsCardsWrap.classList.add('hidden');
        renderTable(slice);
      } else {
        leadsTableWrap.classList.add('hidden');
        leadsCardsWrap.classList.remove('hidden');
        renderCards(slice);
      }
      document.getElementById('dashTotalLeads')?.textContent = leads.length.toLocaleString();

      refreshIcons();
    }

    // Pagination controls
    document.getElementById('prevPage').addEventListener('click', () => {
      if (state.page > 1) { state.page--; renderLeads(); }
    });
    document.getElementById('nextPage').addEventListener('click', () => {
      state.page++; renderLeads();
    });
    document.getElementById('leadsSort').addEventListener('change', (e) => {
      state.sort = e.target.value;
      state.page = 1;
      renderLeads();
    });
    document.getElementById('viewTable').addEventListener('click', () => {
      state.view = 'table'; renderLeads();
    });
    document.getElementById('viewCards').addEventListener('click', () => {
      state.view = 'cards'; renderLeads();
    });

    // Apply/Clear filters
    function bindFilterChange() {
      ['keyup', 'change'].forEach(evt => {
        filterControls.search.addEventListener(evt, () => { state.page = 1; renderLeads(); });
        filterControls.stage.addEventListener(evt, () => { state.page = 1; renderLeads(); });
        filterControls.source.addEventListener(evt, () => { state.page = 1; renderLeads(); });
        filterControls.state.addEventListener(evt, () => { state.page = 1; renderLeads(); });
        filterControls.budgetMin.addEventListener(evt, () => { state.page = 1; renderLeads(); });
        filterControls.budgetMax.addEventListener(evt, () => { state.page = 1; renderLeads(); });
        filterControls.investorType.addEventListener(evt, () => { state.page = 1; renderLeads(); });
        filterControls.tagHot.addEventListener('change', () => { state.page = 1; renderLeads(); });
        filterControls.tagWarm.addEventListener('change', () => { state.page = 1; renderLeads(); });
        filterControls.tagCold.addEventListener('change', () => { state.page = 1; renderLeads(); });
      });
    }
    bindFilterChange();
    filterControls.apply.addEventListener('click', () => { state.page = 1; renderLeads(); });
    filterControls.clear.addEventListener('click', () => {
      filterControls.search.value = '';
      filterControls.stage.value = '';
      filterControls.source.value = '';
      filterControls.state.value = '';
      filterControls.budgetMin.value = '';
      filterControls.budgetMax.value = '';
      filterControls.investorType.value = '';
      filterControls.tagHot.checked = false;
      filterControls.tagWarm.checked = false;
      filterControls.tagCold.checked = false;
      selectedFilterPT = [];
      filterControls.ptChecks().forEach(c => c.checked = false);
      filterControls.ptInput.value = '';
      state.page = 1;
      renderLeads();
    });

    // Update metrics on render
    function renderAll() {
      renderLeads();
      updateMetricCards();
    }

    // Initialize
    renderAll();
    refreshIcons();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex h-full">

<aside className="flex-shrink-0 w-72 transition-all duration-200 bg-white/80 backdrop-blur shadow-soft dark:bg-ink-800 hidden md:flex md:flex-col" id="sidebar">
<div className="flex items-center gap-3 px-5 py-4">
<div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-mint-500 grid place-items-center">
<i className="w-5 h-5 text-white" data-lucide="building-2"></i>
</div>
<div className="flex-1">
<div className="text-xl tracking-tight font-semibold">Rebro</div>
<div className="text-xs text-ink-500 dark:text-ink-400">Real Estate + AI Outreach</div>
</div>
<button className="p-2 rounded-lg hover:bg-ink-100 dark:hover:bg-ink-700" id="collapseBtn" title="Collapse">
<i className="w-5 h-5" data-lucide="panel-left-close"></i>
</button>
</div>
<nav className="px-3 py-2 text-sm space-y-1">
<button className="navbtn w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-primary-50/80 text-ink-700 dark:text-ink-100 dark:hover:bg-ink-700" data-nav="dashboard">
<i className="w-5 h-5" data-lucide="layout-dashboard"></i><span>Dashboard</span>
</button>
<button className="navbtn w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-primary-50/80 dark:hover:bg-ink-700" data-nav="leads">
<i className="w-5 h-5" data-lucide="users"></i><span>Leads</span>
</button>
<button className="navbtn w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-primary-50/80 dark:hover:bg-ink-700" data-nav="properties">
<i className="w-5 h-5" data-lucide="home"></i><span>Properties</span>
</button>
<button className="navbtn w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-primary-50/80 dark:hover:bg-ink-700" data-nav="campaigns">
<i className="w-5 h-5" data-lucide="megaphone"></i><span>Campaigns</span>
</button>
<button className="navbtn w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-primary-50/80 dark:hover:bg-ink-700" data-nav="communications">
<i className="w-5 h-5" data-lucide="message-circle"></i><span>Communications</span>
</button>
<button className="navbtn w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-primary-50/80 dark:hover:bg-ink-700" data-nav="analytics">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i><span>Analytics</span>
</button>
<button className="navbtn w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-primary-50/80 dark:hover:bg-ink-700" data-nav="aiAssistants">
<i className="w-5 h-5" data-lucide="bot"></i><span>AI Assistants</span>
</button>
<button className="navbtn w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-primary-50/80 dark:hover:bg-ink-700" data-nav="settings">
<i className="w-5 h-5" data-lucide="settings"></i><span>Settings</span>
</button>
</nav>
<div className="mt-auto p-3">
<div className="p-4 rounded-2xl bg-gradient-to-br from-primary-50 to-mint-100 dark:from-ink-700 dark:to-ink-700">
<div className="text-sm font-medium tracking-tight mb-1">Market Update</div>
<p className="text-xs text-ink-600 dark:text-ink-300">Avg. Investment ROI</p>
<div className="mt-2 text-2xl tracking-tight font-semibold">14.2%</div>
<div className="mt-2 text-xs text-ink-500">Cap Rate Trends ↗️ 8.5%</div>
</div>
</div>
</aside>

<button className="hidden fixed left-3 top-3 z-50 p-2 rounded-lg bg-white shadow-soft border border-ink-100 dark:bg-ink-800 dark:border-ink-700" id="showSidebarBtn">
<i className="w-5 h-5" data-lucide="panel-left-open"></i>
</button>

<div className="md:hidden fixed top-0 inset-x-0 z-40 bg-white/90 backdrop-blur border-b border-ink-100 dark:bg-ink-900/90 dark:border-ink-700">
<div className="flex items-center gap-3 px-4 py-3">
<button className="p-2 rounded-lg hover:bg-ink-100 dark:hover:bg-ink-800" id="mobileMenuBtn"><i className="w-6 h-6" data-lucide="menu"></i></button>
<div className="text-lg font-semibold tracking-tight">Rebro</div>
<div className="ml-auto flex items-center gap-2">
<button className="toggle flex items-center bg-ink-200 dark:bg-ink-700 rounded-full" id="mobileTheme">
<span className="knob"></span>
</button>
<img alt="" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="flex-1 flex flex-col min-w-0">

<header className="hidden md:flex items-center gap-4 px-6 py-4 border-b border-ink-100 bg-white/70 backdrop-blur dark:bg-ink-900/70 dark:border-ink-800">
<div className="relative max-w-lg w-full">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-ink-50 border border-ink-100 focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none dark:bg-ink-800 dark:border-ink-700" placeholder="Search leads, properties, campaigns..."/>
</div>
<div className="ml-auto flex items-center gap-2">
<button className="toggle flex items-center bg-ink-200 dark:bg-ink-700 rounded-full" id="darkToggle" title="Dark mode">
<span className="knob"></span>
</button>
<button className="p-2 rounded-lg hover:bg-ink-100 dark:hover:bg-ink-800" title="Notifications"><i className="w-5 h-5" data-lucide="bell"></i></button>
<img alt="Profile" className="w-9 h-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=1080&amp;q=80"/>
</div>
</header>

<main className="p-4 md:p-6 mt-14 md:mt-0 overflow-y-auto">

<section className="page" id="addLead">
<div className="mb-6">
<div className="flex items-center gap-3 mb-2">
<button className="p-2 rounded-lg hover:bg-ink-100 dark:hover:bg-ink-700" id="backToLeads">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<h1 className="text-2xl md:text-3xl tracking-tight font-semibold flex items-center gap-2">
<i className="w-7 h-7 text-primary-600" data-lucide="user-plus"></i>
                Add New Lead
              </h1>
</div>
<p className="text-ink-500 dark:text-ink-400 pl-14 text-sm">Create a new investor lead profile</p>
</div>
<form className="max-w-4xl space-y-6" id="addLeadForm">

<div className="p-6 rounded-2xl bg-white shadow-soft dark:bg-ink-800">
<h2 className="text-lg tracking-tight font-semibold mb-4 flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 text-sm grid place-items-center font-medium">1</span>
                Basic Information
              </h2>
<div className="grid md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium mb-2 text-ink-700 dark:text-ink-300">Lead Name *</label>
<input className="w-full px-3 py-2 rounded-xl border border-ink-200 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none dark:bg-ink-900 dark:border-ink-700 dark:text-ink-100" name="leadName" placeholder="John Smith" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-ink-700 dark:text-ink-300">Phone Number *</label>
<input className="w-full px-3 py-2 rounded-xl border border-ink-200 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none dark:bg-ink-900 dark:border-ink-700 dark:text-ink-100" name="phone" placeholder="(555) 123-4567" required="" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-ink-700 dark:text-ink-300">Email Address *</label>
<input className="w-full px-3 py-2 rounded-xl border border-ink-200 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none dark:bg-ink-900 dark:border-ink-700 dark:text-ink-100" name="email" placeholder="john@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-ink-700 dark:text-ink-300">Lead Source</label>
<div className="relative">
<select className="appearance-none w-full px-3 pr-9 py-2 rounded-xl border border-ink-200 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none dark:bg-ink-900 dark:border-ink-700 dark:text-ink-100" data-allow-custom="true" name="leadSource">
<option value="">Select source...</option>
<option value="referral">Referral</option>
<option value="facebook-ads">Facebook Ads</option>
<option value="google-ads">Google Ads</option>
<option value="website">Website</option>
<option value="cold-call">Cold Call</option>
<option value="networking">Networking Event</option>
<option value="linkedin">LinkedIn</option>
<option value="direct-mail">Direct Mail</option>
<option value="other">Other</option>
<option value="__custom__">+ Add custom...</option>
</select>
<i className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-ink-500" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="mt-4">
<label className="block text-sm font-medium mb-2 text-ink-700 dark:text-ink-300">Address</label>
<div className="grid md:grid-cols-4 gap-3">
<div className="md:col-span-2">
<input className="w-full px-3 py-2 rounded-xl border border-ink-200 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none dark:bg-ink-900 dark:border-ink-700 dark:text-ink-100" name="street" placeholder="Street Address" type="text"/>
</div>
<div>
<input className="w-full px-3 py-2 rounded-xl border border-ink-200 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none dark:bg-ink-900 dark:border-ink-700 dark:text-ink-100" name="city" placeholder="City" type="text"/>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="relative">
<select className="appearance-none w-full px-2 pr-7 py-2 rounded-xl border border-ink-200 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none dark:bg-ink-900 dark:border-ink-700 dark:text-ink-100" data-allow-custom="true" name="state">
<option value="">State</option>
<option value="CA">CA</option>
<option value="TX">TX</option>
<option value="FL">FL</option>
<option value="NY">NY</option>
<option value="AZ">AZ</option>
<option value="CO">CO</option>
<option value="GA">GA</option>
<option value="__custom__">+ Add custom...</option>
</select>
<i className="w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 text-ink-500" data-lucide="chevron-down"></i>
</div>
<input className="w-full px-3 py-2 rounded-xl border border-ink-200 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none dark:bg-ink-900 dark:border-ink-700 dark:text-ink-100" name="zip" placeholder="ZIP" type="text"/>
</div>
</div>
<div className="mt-3">
<div className="relative max-w-xs">
<select className="appearance-none w-full px-3 pr-9 py-2 rounded-xl border border-ink-200 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none dark:bg-ink-900 dark:border-ink-700 dark:text-ink-100" data-allow-custom="true" name="country">
<option value="">Country</option>
<option value="USA">USA</option>
<option value="Canada">Canada</option>
<option value="__custom__">+ Add custom...</option>
</select>
<i className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-ink-500" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white shadow-soft dark:bg-ink-800">
<h2 className="text-lg tracking-tight font-semibold mb-4 flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-mint-100 dark:bg-mint-900 text-mint-700 text-sm grid place-items-center font-medium">2</span>
                Investment Information
              </h2>
<div className="grid md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium mb-2 text-ink-700 dark:text-ink-300">Investor Type</label>
<div className="relative">
<select className="appearance-none w-full px-3 pr-9 py-2 rounded-xl border border-ink-200 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none dark:bg-ink-900 dark:border-ink-700 dark:text-ink-100" data-allow-custom="true" name="investorType">
<option value="">Select type...</option>
<option value="first-time">First-time Buyer</option>
<option value="flipper">House Flipper</option>
<option value="rental">Rental Property Investor</option>
<option value="brrrr">BRRRR Investor</option>
<option value="wholesale">Wholesaler</option>
<option value="commercial">Commercial Investor</option>
<option value="fix-hold">Fix &amp; Hold</option>
<option value="syndication">Syndication</option>
<option value="__custom__">+ Add custom...</option>
</select>
<i className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-ink-500" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-ink-700 dark:text-ink-300">Timeline to Invest</label>
<div className="relative">
<select className="appearance-none w-full px-3 pr-9 py-2 rounded-xl border border-ink-200 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none dark:bg-ink-900 dark:border-ink-700 dark:text-ink-100" data-allow-custom="true" name="timeline">
<option value="">Select timeline...</option>
<option value="immediate">Immediate (0-30 days)</option>
<option value="3months">3 Months</option>
<option value="6months">6 Months</option>
<option value="1year">1 Year</option>
<option value="1year+">1+ Years</option>
<option value="__custom__">+ Add custom...</option>
</select>
<i className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-ink-500" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="mt-4">
<label className="block text-sm font-medium mb-2 text-ink-700 dark:text-ink-300">Budget / Investment Range</label>
<div className="grid md:grid-cols-2 gap-3">
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-500 text-sm">$</span>
<input className="w-full pl-8 pr-10 py-2 rounded-xl border border-ink-200 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none dark:bg-ink-900 dark:border-ink-700 dark:text-ink-100" name="budgetMin" placeholder="100000" type="number"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-ink-400">Min</span>
</div>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-500 text-sm">$</span>
<input className="w-full pl-8 pr-10 py-2 rounded-xl border border-ink-200 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none dark:bg-ink-900 dark:border-ink-700 dark:text-ink-100" name="budgetMax" placeholder="500000" type="number"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-ink-400">Max</span>
</div>
</div>
</div>
<div className="mt-4">
<label className="block text-sm font-medium mb-2 text-ink-700 dark:text-ink-300">Preferred Property Types</label>
<div className="multi-select">
<div className="relative">
<input className="w-full px-3 py-2 rounded-xl border border-ink-200 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none cursor-pointer dark:bg-ink-900 dark:border-ink-700 dark:text-ink-100" id="propertyTypesDisplay" placeholder="Select property types..." readonly="" type="text"/>
<i className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-ink-500" data-lucide="chevron-down"></i>
</div>
<div className="multi-select-dropdown hidden mt-1 border border-ink-200 rounded-xl bg-white dark:bg-ink-900 dark:border-ink-700 shadow-soft" id="propertyTypesDropdown">
<div className="p-2 space-y-1">
<label className="flex items-center gap-2 p-2 hover:bg-ink-50 dark:hover:bg-ink-800 rounded-lg cursor-pointer">
<input className="chk" name="propertyTypes" type="checkbox" value="residential"/> <span className="text-sm">Residential</span>
</label>
<label className="flex items-center gap-2 p-2 hover:bg-ink-50 dark:hover:bg-ink-800 rounded-lg cursor-pointer">
<input className="chk" name="propertyTypes" type="checkbox" value="commercial"/> <span className="text-sm">Commercial</span>
</label>
<label className="flex items-center gap-2 p-2 hover:bg-ink-50 dark:hover:bg-ink-800 rounded-lg cursor-pointer">
<input className="chk" name="propertyTypes" type="checkbox" value="land"/> <span className="text-sm">Land</span>
</label>
<label className="flex items-center gap-2 p-2 hover:bg-ink-50 dark:hover:bg-ink-800 rounded-lg cursor-pointer">
<input className="chk" name="propertyTypes" type="checkbox" value="luxury"/> <span className="text-sm">Luxury</span>
</label>
<label className="flex items-center gap-2 p-2 hover:bg-ink-50 dark:hover:bg-ink-800 rounded-lg cursor-pointer">
<input className="chk" name="propertyTypes" type="checkbox" value="multi-family"/> <span className="text-sm">Multi-Family</span>
</label>
<label className="flex items-center gap-2 p-2 hover:bg-ink-50 dark:hover:bg-ink-800 rounded-lg cursor-pointer">
<input className="chk" name="propertyTypes" type="checkbox" value="condos"/> <span className="text-sm">Condos</span>
</label>
</div>
</div>
</div>
</div>
<div className="mt-4">
<label className="block text-sm font-medium mb-2 text-ink-700 dark:text-ink-300">Property Interest Location</label>
<input className="w-full px-3 py-2 rounded-xl border border-ink-200 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none dark:bg-ink-900 dark:border-ink-700 dark:text-ink-100" name="interestLocation" placeholder="Phoenix, Denver, Atlanta..." type="text"/>
</div>
</div>

<div className="p-6 rounded-2xl bg-white shadow-soft dark:bg-ink-800">
<h2 className="text-lg tracking-tight font-semibold mb-4 flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-peach-100 dark:bg-peach-900 text-peach-700 text-sm grid place-items-center font-medium">3</span>
                Lead Status
              </h2>
<div className="grid md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium mb-2 text-ink-700 dark:text-ink-300">Pipeline Stage</label>
<div className="relative">
<select className="appearance-none w-full px-3 pr-9 py-2 rounded-xl border border-ink-200 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none dark:bg-ink-900 dark:border-ink-700 dark:text-ink-100" data-allow-custom="true" name="pipelineStage">
<option selected="" value="new">New</option>
<option value="contacted">Contacted</option>
<option value="interested">Interested</option>
<option value="negotiation">Negotiation</option>
<option value="closed">Closed</option>
<option value="lost">Lost</option>
<option value="__custom__">+ Add custom...</option>
</select>
<i className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-ink-500" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-ink-700 dark:text-ink-300">Tags</label>
<div className="flex gap-2">
<label className="flex items-center gap-2 px-3 py-2 rounded-xl border border-ink-200 dark:border-ink-700 cursor-pointer hover:bg-ink-50 dark:hover:bg-ink-700">
<input className="chk" name="tags" type="checkbox" value="hot"/>
<span className="text-sm flex items-center gap-1">🔥 Hot</span>
</label>
<label className="flex items-center gap-2 px-3 py-2 rounded-xl border border-ink-200 dark:border-ink-700 cursor-pointer hover:bg-ink-50 dark:hover:bg-ink-700">
<input className="chk" name="tags" type="checkbox" value="warm"/>
<span className="text-sm flex items-center gap-1">🟡 Warm</span>
</label>
<label className="flex items-center gap-2 px-3 py-2 rounded-xl border border-ink-200 dark:border-ink-700 cursor-pointer hover:bg-ink-50 dark:hover:bg-ink-700">
<input className="chk" name="tags" type="checkbox" value="cold"/>
<span className="text-sm flex items-center gap-1">🧊 Cold</span>
</label>
</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white shadow-soft dark:bg-ink-800">
<h2 className="text-lg tracking-tight font-semibold mb-4 flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-700 text-sm grid place-items-center font-medium">4</span>
                Notes &amp; Attachments
              </h2>
<div className="space-y-4">
<div>
<label className="block text-sm font-medium mb-2 text-ink-700 dark:text-ink-300">Notes</label>
<textarea className="w-full px-3 py-2 rounded-xl border border-ink-200 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none resize-none dark:bg-ink-900 dark:border-ink-700 dark:text-ink-100" name="notes" placeholder="Add any notes about this lead, their preferences, conversation highlights, etc." rows="4"></textarea>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-ink-700 dark:text-ink-300">Upload Documents</label>
<div className="border-2 border-dashed border-ink-200 dark:border-ink-700 rounded-xl p-6">
<div className="text-center">
<i className="w-8 h-8 text-ink-400 mx-auto mb-2" data-lucide="upload"></i>
<p className="text-sm text-ink-500 mb-2">Drag and drop files here, or click to browse</p>
<input accept=".pdf,.doc,.docx,.jpg,.png" className="hidden" id="fileUpload" multiple="" name="documents" type="file"/>
<button className="px-4 py-2 text-sm rounded-xl bg-primary-50 text-primary-600 hover:bg-primary-100 dark:bg-primary-900 dark:text-primary-300" onclick="document.getElementById('fileUpload').click()" type="button">
                        Browse Files
                      </button>
<p className="text-xs text-ink-400 mt-2">PDF, DOC, JPG, PNG up to 10MB each</p>
</div>
<div className="mt-4 space-y-2 hidden" id="fileList"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-3">
<button className="px-6 py-3 rounded-xl bg-primary-600 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary-700" type="submit">
<i className="w-4 h-4" data-lucide="check"></i>
                Save Lead
              </button>
<button className="px-6 py-3 rounded-xl border border-primary-200 dark:border-primary-700 text-primary-600 dark:text-primary-400 font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary-50 dark:hover:bg-primary-900" id="saveAndAddAnother" type="button">
<i className="w-4 h-4" data-lucide="plus"></i>
                Save &amp; Add Another
              </button>
<button className="px-6 py-3 rounded-xl border border-ink-200 dark:border-ink-700 font-medium text-sm flex items-center justify-center gap-2 hover:bg-ink-50 dark:hover:bg-ink-700" id="cancelForm" type="button">
<i className="w-4 h-4" data-lucide="x"></i>
                Cancel
              </button>
</div>
</form>
</section>

<section className="page active" id="dashboard">
<div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-6">
<div>
<h1 className="text-2xl md:text-3xl tracking-tight font-semibold">Dashboard</h1>
<p className="text-ink-500 dark:text-ink-400">Investment pipeline and campaign performance overview</p>
</div>
<div className="md:ml-auto flex items-center gap-3">
<button className="px-4 py-2.5 rounded-xl bg-primary-600 text-white hover:bg-primary-700 flex items-center gap-2" id="addLeadBtn">
<i className="w-4 h-4" data-lucide="user-plus"></i>
<span className="text-sm font-medium">Add Lead</span>
</button>
<button className="px-4 py-2.5 rounded-xl border border-ink-200 dark:border-ink-700 hover:bg-ink-50 dark:hover:bg-ink-800 flex items-center gap-2" id="openWizardFromDashboard">
<i className="w-4 h-4" data-lucide="megaphone"></i>
<span className="text-sm font-medium">New Campaign</span>
</button>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
<div className="p-5 rounded-2xl bg-white shadow-soft dark:bg-ink-800">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-ink-500">Total Leads</span>
<i className="w-4 h-4 text-ink-400" data-lucide="users"></i>
</div>
<div className="text-2xl tracking-tight font-semibold" id="dashTotalLeads">1,847</div>
<div className="flex items-center gap-2 text-xs text-ink-500 mt-1">
<span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">New: 342</span>
<span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">Hot: 128</span>
</div>
</div>
<div className="p-5 rounded-2xl bg-white shadow-soft dark:bg-ink-800">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-ink-500">Properties</span>
<i className="w-4 h-4 text-ink-400" data-lucide="home"></i>
</div>
<div className="text-2xl tracking-tight font-semibold">89</div>
<div className="flex items-center gap-2 text-xs text-ink-500 mt-1">
<span className="text-neutral-600">Available: 32</span>
<span className="text-cyan-600">Contract: 18</span>
</div>
</div>
<div className="p-5 rounded-2xl bg-white shadow-soft dark:bg-ink-800">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-ink-500">Deals Closed</span>
<i className="w-4 h-4 text-ink-400" data-lucide="handshake"></i>
</div>
<div className="text-2xl tracking-tight font-semibold">$2.4M</div>
<p className="text-xs text-ink-500 mt-1">14 deals this month</p>
</div>
<div className="p-5 rounded-2xl bg-white shadow-soft dark:bg-ink-800">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-ink-500">Campaign Performance</span>
<i className="w-4 h-4 text-ink-400" data-lucide="trending-up"></i>
</div>
<div className="text-2xl tracking-tight font-semibold">32%</div>
<div className="flex items-center gap-2 text-xs text-ink-500 mt-1">
<span>SMS: 45%</span> <span>Call: 28%</span> <span>Email: 24%</span>
</div>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6 mb-6">

<div className="lg:col-span-2 p-6 rounded-2xl bg-white shadow-soft dark:bg-ink-800">
<h2 className="text-xl tracking-tight font-semibold mb-4">Investment Pipeline</h2>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="w-24 text-sm text-ink-500">New</div>
<div className="flex-1 h-10 bg-ink-100 dark:bg-ink-700 rounded-xl relative overflow-hidden">
<div className="h-full bg-indigo-500 rounded-xl flex items-center justify-end pr-3 text-white text-sm font-medium" style={{width: '95%'}}>342 leads</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-24 text-sm text-ink-500">Contacted</div>
<div className="flex-1 h-10 bg-ink-100 dark:bg-ink-700 rounded-xl relative overflow-hidden">
<div className="h-full bg-cyan-500 rounded-xl flex items-center justify-end pr-3 text-white text-sm font-medium" style={{width: '72%'}}>259 leads</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-24 text-sm text-ink-500">Interested</div>
<div className="flex-1 h-10 bg-ink-100 dark:bg-ink-700 rounded-xl relative overflow-hidden">
<div className="h-full bg-orange-500 rounded-xl flex items-center justify-end pr-3 text-white text-sm font-medium" style={{width: '45%'}}>156 leads</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-24 text-sm text-ink-500">Negotiation</div>
<div className="flex-1 h-10 bg-ink-100 dark:bg-ink-700 rounded-xl relative overflow-hidden">
<div className="h-full bg-blue-500 rounded-xl flex items-center justify-end pr-3 text-white text-sm font-medium" style={{width: '28%'}}>97 leads</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-24 text-sm text-ink-500">Closed</div>
<div className="flex-1 h-10 bg-ink-100 dark:bg-ink-700 rounded-xl relative overflow-hidden">
<div className="h-full bg-green-500 rounded-xl flex items-center justify-end pr-3 text-white text-sm font-medium" style={{width: '18%'}}>63 deals</div>
</div>
</div>
</div>
<div className="mt-4 text-sm text-ink-500">
                Conversion Rate: 18.4% (New → Closed) • Pipeline Value: $8.2M
              </div>
</div>

<div className="p-6 rounded-2xl bg-white shadow-soft dark:bg-ink-800">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl tracking-tight font-semibold">Upcoming Follow-ups</h2>
<button className="text-sm px-3 py-1 rounded-lg border border-ink-200 dark:border-ink-700">View All</button>
</div>
<div className="space-y-3" id="upcomingFollowups">
<div className="flex items-center gap-3 p-3 rounded-xl border border-ink-100 dark:border-ink-700">
<div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 grid place-items-center">
<i className="w-4 h-4 text-blue-600" data-lucide="phone"></i>
</div>
<div className="flex-1 min-w-0">
<div className="font-medium text-sm">Call Mike Chen</div>
<div className="text-xs text-ink-500">Today 2:30 PM • $500K Budget</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl border border-ink-100 dark:border-ink-700">
<div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 grid place-items-center">
<i className="w-4 h-4 text-indigo-600" data-lucide="mail"></i>
</div>
<div className="flex-1 min-w-0">
<div className="font-medium text-sm">Email Sarah Lopez</div>
<div className="text-xs text-ink-500">Tomorrow 10:00 AM • Duplex Interest</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl border border-ink-100 dark:border-ink-700">
<div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-900 grid place-items-center">
<i className="w-4 h-4 text-neutral-600" data-lucide="calendar"></i>
</div>
<div className="flex-1 min-w-0">
<div className="font-medium text-sm">Property Tour</div>
<div className="text-xs text-ink-500">Thu 3:00 PM • David Kim</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page" id="leads">
<div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-4">
<div>
<h1 className="text-2xl md:text-3xl tracking-tight font-semibold">Leads</h1>
<p className="text-ink-500 dark:text-ink-400">Manage your investor leads and pipeline</p>
</div>
<div className="md:ml-auto flex items-center gap-3">
<button className="px-4 py-2.5 rounded-xl bg-primary-600 text-white hover:bg-primary-700 flex items-center gap-2" id="addLeadFromLeads">
<i className="w-4 h-4" data-lucide="user-plus"></i>
<span className="text-sm font-medium">Add Lead</span>
</button>
<button className="px-4 py-2.5 rounded-xl border border-ink-200 dark:border-ink-700 hover:bg-ink-50 dark:hover:bg-ink-800 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="upload"></i>
<span className="text-sm font-medium">Import CSV</span>
</button>
</div>
</div>

<div className="mb-6">
<div className="flex items-center justify-between mb-3">
<div className="text-sm text-ink-500">Overview</div>
<button className="text-sm px-3 py-1.5 rounded-lg border border-ink-200 dark:border-ink-700 hover:bg-ink-50 dark:hover:bg-ink-800 flex items-center gap-2" id="configureLeadMetricsBtn">
<i className="w-4 h-4" data-lucide="sliders-horizontal"></i> Configure
              </button>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
<div className="p-5 rounded-2xl bg-white shadow-soft dark:bg-ink-800">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-ink-500" id="metricTitle0">Total Leads</span>
<i className="w-4 h-4 text-ink-400" data-lucide="users"></i>
</div>
<div className="text-2xl tracking-tight font-semibold" id="metricValue0">0</div>
</div>
<div className="p-5 rounded-2xl bg-white shadow-soft dark:bg-ink-800">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-ink-500" id="metricTitle1">Leads from Facebook</span>
<i className="w-4 h-4 text-ink-400" data-lucide="facebook"></i>
</div>
<div className="text-2xl tracking-tight font-semibold" id="metricValue1">0</div>
</div>
<div className="p-5 rounded-2xl bg-white shadow-soft dark:bg-ink-800">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-ink-500" id="metricTitle2">Total Contacted</span>
<i className="w-4 h-4 text-ink-400" data-lucide="phone"></i>
</div>
<div className="text-2xl tracking-tight font-semibold" id="metricValue2">0</div>
</div>
<div className="p-5 rounded-2xl bg-white shadow-soft dark:bg-ink-800">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-ink-500" id="metricTitle3">Total Hot Leads</span>
<i className="w-4 h-4 text-ink-400" data-lucide="flame"></i>
</div>
<div className="text-2xl tracking-tight font-semibold" id="metricValue3">0</div>
</div>
</div>

<div className="hidden mt-3 p-4 rounded-xl border border-ink-100 dark:border-ink-700 bg-white dark:bg-ink-800" id="leadMetricsConfig">
<div className="grid md:grid-cols-4 gap-3">
<div>
<label className="block text-xs mb-1 text-ink-500">Card 1</label>
<select className="w-full px-3 py-2 rounded-xl border border-ink-200 text-sm dark:bg-ink-900 dark:border-ink-700" data-metric-index="0">
<option value="totalLeads">Total Leads</option>
<option value="leadsFromFacebook">Leads from Facebook</option>
<option value="totalContacted">Total Contacted</option>
<option value="totalHot">Total Hot Leads</option>
<option value="totalCold">Total Cold Leads</option>
</select>
</div>
<div>
<label className="block text-xs mb-1 text-ink-500">Card 2</label>
<select className="w-full px-3 py-2 rounded-xl border border-ink-200 text-sm dark:bg-ink-900 dark:border-ink-700" data-metric-index="1">
<option value="leadsFromFacebook">Leads from Facebook</option>
<option value="totalLeads">Total Leads</option>
<option value="totalContacted">Total Contacted</option>
<option value="totalHot">Total Hot Leads</option>
<option value="totalCold">Total Cold Leads</option>
</select>
</div>
<div>
<label className="block text-xs mb-1 text-ink-500">Card 3</label>
<select className="w-full px-3 py-2 rounded-xl border border-ink-200 text-sm dark:bg-ink-900 dark:border-ink-700" data-metric-index="2">
<option value="totalContacted">Total Contacted</option>
<option value="totalLeads">Total Leads</option>
<option value="leadsFromFacebook">Leads from Facebook</option>
<option value="totalHot">Total Hot Leads</option>
<option value="totalCold">Total Cold Leads</option>
</select>
</div>
<div>
<label className="block text-xs mb-1 text-ink-500">Card 4</label>
<select className="w-full px-3 py-2 rounded-xl border border-ink-200 text-sm dark:bg-ink-900 dark:border-ink-700" data-metric-index="3">
<option value="totalHot">Total Hot Leads</option>
<option value="totalLeads">Total Leads</option>
<option value="leadsFromFacebook">Leads from Facebook</option>
<option value="totalContacted">Total Contacted</option>
<option value="totalCold">Total Cold Leads</option>
</select>
</div>
</div>
</div>
</div>

<div className="bg-white dark:bg-ink-800 rounded-2xl shadow-soft p-6 mb-6">
<div className="grid md:grid-cols-4 gap-4 mb-4">
<div>
<label className="block text-sm font-medium mb-2">Search</label>
<div className="relative">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 py-2 rounded-xl border border-ink-200 focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none dark:bg-ink-900 dark:border-ink-700" id="filterSearch" placeholder="Search leads..."/>
</div>
</div>
<div>
<label className="block text-sm font-medium mb-2">Stage</label>
<select className="appearance-none w-full px-3 pr-9 py-2 rounded-xl border border-ink-200 focus:border-primary-300 outline-none dark:bg-ink-900 dark:border-ink-700" id="filterStage">
<option value="">All Stages</option>
<option value="new">New</option>
<option value="contacted">Contacted</option>
<option value="interested">Interested</option>
<option value="negotiation">Negotiation</option>
<option value="closed">Closed</option>
</select>
</div>
<div>
<label className="block text-sm font-medium mb-2">Source</label>
<select className="appearance-none w-full px-3 pr-9 py-2 rounded-xl border border-ink-200 focus:border-primary-300 outline-none dark:bg-ink-900 dark:border-ink-700" id="filterSource">
<option value="">All Sources</option>
<option value="facebook-ads">Facebook Ads</option>
<option value="google-ads">Google Ads</option>
<option value="referral">Referral</option>
<option value="website">Website</option>
<option value="cold-call">Cold Call</option>
</select>
</div>
<div>
<label className="block text-sm font-medium mb-2">State</label>
<select className="appearance-none w-full px-3 pr-9 py-2 rounded-xl border border-ink-200 focus:border-primary-300 outline-none dark:bg-ink-900 dark:border-ink-700" id="filterState">
<option value="">Any</option>
<option>CA</option><option>TX</option><option>FL</option><option>NY</option><option>AZ</option><option>CO</option><option>GA</option>
</select>
</div>
</div>
<div className="grid md:grid-cols-4 gap-4">
<div>
<label className="block text-sm font-medium mb-2">Budget Min</label>
<input className="w-full px-3 py-2 rounded-xl border border-ink-200 focus:border-primary-300 outline-none dark:bg-ink-900 dark:border-ink-700" id="filterBudgetMin" placeholder="Min" type="number"/>
</div>
<div>
<label className="block text-sm font-medium mb-2">Budget Max</label>
<input className="w-full px-3 py-2 rounded-xl border border-ink-200 focus:border-primary-300 outline-none dark:bg-ink-900 dark:border-ink-700" id="filterBudgetMax" placeholder="Max" type="number"/>
</div>
<div>
<label className="block text-sm font-medium mb-2">Investor Type</label>
<select className="appearance-none w-full px-3 pr-9 py-2 rounded-xl border border-ink-200 focus:border-primary-300 outline-none dark:bg-ink-900 dark:border-ink-700" id="filterInvestorType">
<option value="">Any</option>
<option value="first-time">First-time Buyer</option>
<option value="flipper">House Flipper</option>
<option value="rental">Rental Property Investor</option>
<option value="commercial">Commercial Investor</option>
<option value="wholesale">Wholesaler</option>
</select>
</div>
<div>
<label className="block text-sm font-medium mb-2">Tags</label>
<div className="flex gap-2 flex-wrap">
<label className="flex items-center gap-1 text-sm"><input className="chk" id="filterTagHot" type="checkbox"/> Hot</label>
<label className="flex items-center gap-1 text-sm"><input className="chk" id="filterTagWarm" type="checkbox"/> Warm</label>
<label className="flex items-center gap-1 text-sm"><input className="chk" id="filterTagCold" type="checkbox"/> Cold</label>
</div>
</div>
<div className="md:col-span-2">
<label className="block text-sm font-medium mb-2">Property Types</label>
<div className="multi-select">
<div className="relative">
<input className="w-full px-3 py-2 rounded-xl border border-ink-200 text-sm focus:border-primary-300 outline-none cursor-pointer dark:bg-ink-900 dark:border-ink-700" id="filterPropertyTypesInput" placeholder="Select property types..." readonly="" type="text"/>
<i className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-ink-500" data-lucide="chevron-down"></i>
</div>
<div className="multi-select-dropdown hidden mt-1 border border-ink-200 rounded-xl bg-white dark:bg-ink-900 dark:border-ink-700 shadow-soft" id="filterPropertyTypesDropdown">
<div className="p-2 grid grid-cols-2 gap-1">
<label className="flex items-center gap-2 p-2 hover:bg-ink-50 dark:hover:bg-ink-800 rounded-lg cursor-pointer">
<input className="chk filter-pt" type="checkbox" value="residential"/> <span className="text-sm">Residential</span>
</label>
<label className="flex items-center gap-2 p-2 hover:bg-ink-50 dark:hover:bg-ink-800 rounded-lg cursor-pointer">
<input className="chk filter-pt" type="checkbox" value="commercial"/> <span className="text-sm">Commercial</span>
</label>
<label className="flex items-center gap-2 p-2 hover:bg-ink-50 dark:hover:bg-ink-800 rounded-lg cursor-pointer">
<input className="chk filter-pt" type="checkbox" value="land"/> <span className="text-sm">Land</span>
</label>
<label className="flex items-center gap-2 p-2 hover:bg-ink-50 dark:hover:bg-ink-800 rounded-lg cursor-pointer">
<input className="chk filter-pt" type="checkbox" value="luxury"/> <span className="text-sm">Luxury</span>
</label>
<label className="flex items-center gap-2 p-2 hover:bg-ink-50 dark:hover:bg-ink-800 rounded-lg cursor-pointer">
<input className="chk filter-pt" type="checkbox" value="multi-family"/> <span className="text-sm">Multi-Family</span>
</label>
<label className="flex items-center gap-2 p-2 hover:bg-ink-50 dark:hover:bg-ink-800 rounded-lg cursor-pointer">
<input className="chk filter-pt" type="checkbox" value="condos"/> <span className="text-sm">Condos</span>
</label>
</div>
</div>
</div>
</div>
</div>

<div className="mt-4 flex flex-wrap items-center gap-2">
<button className="px-4 py-2 rounded-xl bg-primary-600 text-white text-sm font-medium hover:bg-primary-700" id="applyFilters">Apply Filters</button>
<button className="px-4 py-2 rounded-xl border border-ink-200 dark:border-ink-700 text-sm hover:bg-ink-50 dark:hover:bg-ink-800" id="clearFilters">Clear</button>
</div>
</div>

<div className="mb-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
<div className="text-sm text-ink-600 dark:text-ink-300">
<span id="leadCount">0</span> leads
            </div>
<div className="sm:ml-auto flex items-center gap-2">
<label className="text-sm text-ink-500">Sort</label>
<select className="px-3 py-2 rounded-xl border border-ink-200 text-sm dark:bg-ink-900 dark:border-ink-700" id="leadsSort">
<option value="recent">Most Recent</option>
<option value="name-asc">Name A–Z</option>
<option value="budget-desc">Budget High → Low</option>
<option value="stage">Stage</option>
<option value="source">Source</option>
</select>
<div className="hidden sm:flex items-center gap-1 ml-1">
<button className="px-3 py-2 rounded-xl border border-ink-200 dark:border-ink-700 text-sm bg-white dark:bg-ink-800" id="viewTable">Table</button>
<button className="px-3 py-2 rounded-xl border border-ink-200 dark:border-ink-700 text-sm hover:bg-ink-50 dark:hover:bg-ink-800" id="viewCards">Cards</button>
</div>
</div>
</div>

<div className="overflow-x-auto rounded-2xl bg-white dark:bg-ink-800 shadow-soft" id="leadsTableWrap">
<table className="min-w-full text-sm">
<thead className="bg-ink-50/70 dark:bg-ink-900/50 text-ink-600 dark:text-ink-300">
<tr>
<th className="text-left px-4 py-3 font-medium">Lead</th>
<th className="text-left px-4 py-3 font-medium">Contact</th>
<th className="text-left px-4 py-3 font-medium">Investor Type</th>
<th className="text-left px-4 py-3 font-medium">Budget</th>
<th className="text-left px-4 py-3 font-medium">Stage</th>
<th className="text-left px-4 py-3 font-medium">Source</th>
<th className="text-left px-4 py-3 font-medium">Tags</th>
<th className="text-left px-4 py-3 font-medium">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-ink-100 dark:divide-ink-700" id="leadsTbody"></tbody>
</table>
</div>

<div className="hidden grid sm:grid-cols-2 xl:grid-cols-3 gap-4" id="leadsCardsWrap"></div>

<div className="mt-4 flex items-center justify-between">
<div className="text-xs text-ink-500" id="paginationInfo">Showing 0–0 of 0</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-lg border border-ink-200 dark:border-ink-700 text-sm hover:bg-ink-50 dark:hover:bg-ink-800 disabled:opacity-40 disabled:cursor-not-allowed" id="prevPage">Prev</button>
<div className="text-sm font-medium" id="currentPage">1</div>
<button className="px-3 py-2 rounded-lg border border-ink-200 dark:border-ink-700 text-sm hover:bg-ink-50 dark:hover:bg-ink-800 disabled:opacity-40 disabled:cursor-not-allowed" id="nextPage">Next</button>
</div>
</div>
</section>

<section className="page" id="properties">
<div className="mb-4">
<h1 className="text-2xl md:text-3xl tracking-tight font-semibold">Properties</h1>
<p className="text-ink-500 dark:text-ink-400">Track opportunities and deals</p>
</div>
<div className="grid md:grid-cols-3 gap-4">
<div className="p-5 rounded-2xl bg-white shadow-soft dark:bg-ink-800">
<div className="text-sm text-ink-500 mb-1">Active Listings</div>
<div className="text-2xl font-semibold">32</div>
</div>
<div className="p-5 rounded-2xl bg-white shadow-soft dark:bg-ink-800">
<div className="text-sm text-ink-500 mb-1">Under Contract</div>
<div className="text-2xl font-semibold">18</div>
</div>
<div className="p-5 rounded-2xl bg-white shadow-soft dark:bg-ink-800">
<div className="text-sm text-ink-500 mb-1">Avg. Days on Market</div>
<div className="text-2xl font-semibold">21</div>
</div>
</div>
<div className="mt-6 p-6 rounded-2xl bg-white dark:bg-ink-800 shadow-soft text-sm text-ink-600 dark:text-ink-300">
            Property management coming soon.
          </div>
</section>

<section className="page" id="campaigns">
<div className="mb-4">
<h1 className="text-2xl md:text-3xl tracking-tight font-semibold">Campaigns</h1>
<p className="text-ink-500 dark:text-ink-400">Manage SMS, email, and call outreach</p>
</div>
<div className="grid md:grid-cols-3 gap-4">
<div className="p-5 rounded-2xl bg-white shadow-soft dark:bg-ink-800">
<div className="flex items-center justify-between">
<div className="text-sm text-ink-500">Active Campaigns</div>
<i className="w-4 h-4 text-ink-400" data-lucide="megaphone"></i>
</div>
<div className="mt-2 text-2xl font-semibold">7</div>
<button className="mt-3 px-3 py-2 rounded-xl border border-ink-200 dark:border-ink-700 text-sm hover:bg-ink-50 dark:hover:bg-ink-800">New Campaign</button>
</div>
<div className="p-5 rounded-2xl bg-white shadow-soft dark:bg-ink-800">
<div className="text-sm text-ink-500">Avg. Response Rate</div>
<div className="mt-2 text-2xl font-semibold">18%</div>
</div>
<div className="p-5 rounded-2xl bg-white shadow-soft dark:bg-ink-800">
<div className="text-sm text-ink-500">Leads Contacted</div>
<div className="mt-2 text-2xl font-semibold">1,204</div>
</div>
</div>
</section>

<section className="page" id="communications">
<div className="mb-4">
<h1 className="text-2xl md:text-3xl tracking-tight font-semibold">Communications</h1>
<p className="text-ink-500 dark:text-ink-400">Inbox and conversations</p>
</div>
<div className="p-6 rounded-2xl bg-white dark:bg-ink-800 shadow-soft text-sm text-ink-600 dark:text-ink-300">
            Unified inbox coming soon.
          </div>
</section>

<section className="page" id="analytics">
<div className="mb-4">
<h1 className="text-2xl md:text-3xl tracking-tight font-semibold">Analytics</h1>
<p className="text-ink-500 dark:text-ink-400">Attribution and performance</p>
</div>
<div className="grid md:grid-cols-2 gap-4">
<div className="p-6 rounded-2xl bg-white dark:bg-ink-800 shadow-soft">
<div className="text-sm text-ink-500">Lead Sources</div>
<div className="mt-3 h-40 rounded-xl bg-ink-50 dark:bg-ink-900 grid place-items-center text-ink-400 text-sm">Chart placeholder</div>
</div>
<div className="p-6 rounded-2xl bg-white dark:bg-ink-800 shadow-soft">
<div className="text-sm text-ink-500">Conversion by Stage</div>
<div className="mt-3 h-40 rounded-xl bg-ink-50 dark:bg-ink-900 grid place-items-center text-ink-400 text-sm">Chart placeholder</div>
</div>
</div>
</section>

<section className="page" id="aiAssistants">
<div className="mb-4">
<h1 className="text-2xl md:text-3xl tracking-tight font-semibold">AI Assistants</h1>
<p className="text-ink-500 dark:text-ink-400">Automate outreach and follow-ups</p>
</div>
<div className="p-6 rounded-2xl bg-white dark:bg-ink-800 shadow-soft text-sm text-ink-600 dark:text-ink-300">
            Configure AI agents coming soon.
          </div>
</section>

<section className="page" id="settings">
<div className="mb-4">
<h1 className="text-2xl md:text-3xl tracking-tight font-semibold">Settings</h1>
<p className="text-ink-500 dark:text-ink-400">Account and preferences</p>
</div>
<div className="grid md:grid-cols-2 gap-4">
<div className="p-6 rounded-2xl bg-white dark:bg-ink-800 shadow-soft">
<div className="text-sm font-medium">Theme</div>
<div className="mt-3 flex items-center gap-3">
<button className="px-3 py-2 rounded-xl border border-ink-200 dark:border-ink-700 text-sm" id="settingsLight">Light</button>
<button className="px-3 py-2 rounded-xl border border-ink-200 dark:border-ink-700 text-sm" id="settingsDark">Dark</button>
<button className="px-3 py-2 rounded-xl border border-ink-200 dark:border-ink-700 text-sm" id="settingsSystem">System</button>
</div>
</div>
<div className="p-6 rounded-2xl bg-white dark:bg-ink-800 shadow-soft">
<div className="text-sm font-medium mb-2">Notifications</div>
<label className="flex items-center justify-between p-3 rounded-xl border border-ink-200 dark:border-ink-700">
<span className="text-sm">Email Alerts</span>
<button className="toggle bg-ink-200 dark:bg-ink-700 rounded-full" id="notifEmail"><span className="knob"></span></button>
</label>
<label className="mt-2 flex items-center justify-between p-3 rounded-xl border border-ink-200 dark:border-ink-700">
<span className="text-sm">SMS Alerts</span>
<button className="toggle bg-ink-200 dark:bg-ink-700 rounded-full" id="notifSms"><span className="knob"></span></button>
</label>
</div>
</div>
</section>
</main>
</div>
</div>

<div className="fixed bottom-4 right-4 z-50 hidden" id="toast">
<div className="px-4 py-3 rounded-xl bg-ink-900 text-white text-sm shadow-soft flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check-circle"></i>
<span id="toastMsg">Saved</span>
</div>
</div>




    </>
  );
}
