import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
      // Icons
      lucide.createIcons();

      // State
      const currentUserRole = 'Data Analyst';
      let roleView = 'mine'; // 'mine' | 'all'
      let selectedBL = new Set();
      let selectedReportId = null;

      // Elements
      const reportList = document.getElementById('reportList');
      const cards = Array.from(reportList.querySelectorAll('article'));
      const searchInput = document.getElementById('searchInput');
      const visibleCount = document.getElementById('visibleCount');

      // Business line dropdown
      const blDropdownBtn = document.getElementById('blDropdownBtn');
      const blDropdown = document.getElementById('blDropdown');
      const blApply = document.getElementById('blApply');
      const blClear = document.getElementById('blClear');
      const blLabel = document.getElementById('blLabel');
      const selectedBLPills = document.getElementById('selectedBLPills');

      // Role dropdown
      const roleDropdownBtn = document.getElementById('roleDropdownBtn');
      const roleDropdown = document.getElementById('roleDropdown');
      const roleLabel = document.getElementById('roleLabel');

      // Details panel
      const detailTitle = document.getElementById('detailTitle');
      const detailSubtitle = document.getElementById('detailSubtitle');
      const tabPurposeBtn = document.getElementById('tabPurpose');
      const tabHowBtn = document.getElementById('tabHow');
      const tabContentPurpose = document.getElementById('tabContentPurpose');
      const tabContentHow = document.getElementById('tabContentHow');

      // Aside actions
      const btnOpenSelected = document.getElementById('openSelected');
      const btnOpenIssueAside = document.getElementById('openIssue');

      // Issue modal
      const issueModal = document.getElementById('issueModal');
      const issueReportName = document.getElementById('issueReportName');
      const closeIssue = document.getElementById('closeIssue');
      const cancelIssue = document.getElementById('cancelIssue');
      const issueForm = document.getElementById('issueForm');
      const openIssueHeader = document.getElementById('open-issue-header');

      // Support drawer
      const supportDrawer = document.getElementById('supportDrawer');
      const supportOverlay = document.getElementById('supportOverlay');
      const openSupport = document.getElementById('open-support');
      const openSupportSecondary = document.getElementById('open-support-secondary');
      const closeSupport = document.getElementById('closeSupport');
      const supportForm = document.getElementById('supportForm');
      const supportInput = document.getElementById('supportInput');
      const supportMessages = document.getElementById('supportMessages');

      // Toast
      const toast = document.getElementById('toast');
      const toastMsg = document.getElementById('toastMsg');
      let toastTimer;

      // Report metadata for details
      const reportMeta = {
        r1: {
          title: 'Monthly Sales Overview',
          subtitle: 'Revenue, pipeline and conversion health by region.',
          purpose: `
            <ul class="list-disc pl-5 space-y-1">
              <li>Understand monthly revenue trends and conversion rates.</li>
              <li>Identify top- and under-performing regions and reps.</li>
              <li>Track pipeline health and forecast accuracy.</li>
            </ul>`,
          how: `
            <ol class="list-decimal pl-5 space-y-1">
              <li>Use the region filter to narrow results.</li>
              <li>Compare MoM growth in the KPI header tiles.</li>
              <li>Drill into conversion funnel to find drop-off stages.</li>
            </ol>`
        },
        r2: {
          title: 'Operations Efficiency Dashboard',
          subtitle: 'Throughput, cycle time and bottleneck analysis for ops.',
          purpose: `
            <ul class="list-disc pl-5 space-y-1">
              <li>Monitor throughput and SLA adherence.</li>
              <li>Spot bottlenecks and capacity constraints.</li>
              <li>Measure improvement from process changes.</li>
            </ul>`,
          how: `
            <ol class="list-decimal pl-5 space-y-1">
              <li>Sort by cycle time to find slowest processes.</li>
              <li>Segment by queue and work type.</li>
              <li>Export the trend table for weekly ops review.</li>
            </ol>`
        },
        r3: {
          title: 'Finance P&L Snapshot',
          subtitle: 'Profit and loss KPIs with variance and trend analysis.',
          purpose: `
            <ul class="list-disc pl-5 space-y-1">
              <li>Provide quick view of revenue, COGS and gross margin.</li>
              <li>Explain variance vs budget and last period.</li>
              <li>Help executives align on financial health.</li>
            </ul>`,
          how: `
            <ol class="list-decimal pl-5 space-y-1">
              <li>Toggle between Actuals and Budget with the top switch.</li>
              <li>Hover bars to see variance commentary.</li>
              <li>Download the monthly P&L CSV for audit.</li>
            </ol>`
        },
        r4: {
          title: 'Customer Satisfaction Tracker',
          subtitle: 'NPS, CSAT and contact drivers across segments.',
          purpose: `
            <ul class="list-disc pl-5 space-y-1">
              <li>Track NPS and CSAT by segment and channel.</li>
              <li>Identify top drivers for detractor feedback.</li>
              <li>Correlate support KPIs with customer sentiment.</li>
            </ul>`,
          how: `
            <ol class="list-decimal pl-5 space-y-1">
              <li>Filter by segment to compare cohorts.</li>
              <li>Review verbatim themes in the text analysis card.</li>
              <li>Set alerts for CSAT dips greater than 5 points.</li>
            </ol>`
        }
      };

      // Utility: Toast
      function showToast(message) {
        clearTimeout(toastTimer);
        toastMsg.textContent = message;
        toast.classList.remove('hidden');
        toast.classList.add('animate-[fadeIn_0.2s_ease-out]');
        toastTimer = setTimeout(() => {
          toast.classList.add('hidden');
        }, 2500);
      }

      // Utility: Open/Close Issue Modal
      function openIssueModal(prefill = '') {
        issueReportName.value = prefill;
        issueModal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      }
      function closeIssueModal() {
        issueModal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }

      // Utility: Support Drawer
      function openSupportDrawer() {
        supportDrawer.classList.remove('translate-x-full');
        supportOverlay.classList.remove('hidden');
        supportInput.focus();
      }
      function closeSupportDrawer() {
        supportDrawer.classList.add('translate-x-full');
        supportOverlay.classList.add('hidden');
      }

      // Selection handling
      function clearSelectionStyles() {
        cards.forEach(c => c.classList.remove('ring-2', 'ring-indigo-500'));
      }
      function selectReportById(id) {
        selectedReportId = id;
        clearSelectionStyles();
        const el = reportList.querySelector(`[data-id="${id}"]`);
        if (el) {
          el.classList.add('ring-2', 'ring-indigo-500');
          const meta = reportMeta[id];
          if (meta) {
            detailTitle.textContent = meta.title;
            detailSubtitle.textContent = meta.subtitle;
            tabContentPurpose.innerHTML = meta.purpose;
            tabContentHow.innerHTML = meta.how;
          }
          btnOpenSelected.disabled = false;
        }
      }

      // Filtering
      function passRoleView(card) {
        if (roleView === 'all') return true;
        const roles = (card.getAttribute('data-roles') || '').toLowerCase();
        return roles.includes(currentUserRole.toLowerCase());
      }
      function passSearch(card, q) {
        if (!q) return true;
        const name = (card.getAttribute('data-name') || '').toLowerCase();
        const bl = (card.getAttribute('data-blines') || '').toLowerCase();
        return name.includes(q) || bl.includes(q);
      }
      function passBLines(card) {
        if (selectedBL.size === 0) return true;
        const bl = (card.getAttribute('data-blines') || '').split(',').map(s => s.trim());
        return bl.some(b => selectedBL.has(b));
      }

      function updateVisible() {
        const q = searchInput.value.trim().toLowerCase();
        let count = 0;
        cards.forEach(card => {
          const visible = passRoleView(card) && passSearch(card, q) && passBLines(card);
          card.classList.toggle('hidden', !visible);
          if (visible) count++;
        });
        visibleCount.textContent = `${count} report${count === 1 ? '' : 's'} visible`;
        renderEmptyState(count);
      }

      // Empty state
      function renderEmptyState(count) {
        let empty = document.getElementById('emptyState');
        if (count === 0) {
          if (!empty) {
            empty = document.createElement('div');
            empty.id = 'emptyState';
            empty.className = 'rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600';
            empty.innerHTML = `
              <div class="mx-auto mb-2 h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                <i data-lucide="search-x" class="h-5 w-5 text-slate-400"></i>
              </div>
              <div class="font-medium">No reports match your filters</div>
              <div class="text-sm text-slate-500 mt-1">Try adjusting search, business lines or role view.</div>
            `;
            reportList.appendChild(empty);
            lucide.createIcons();
          }
        } else {
          if (empty) empty.remove();
        }
      }

      // Search input
      searchInput.addEventListener('input', updateVisible);

      // Business line dropdown toggle
      blDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        blDropdown.classList.toggle('hidden');
      });
      blApply.addEventListener('click', () => {
        // Read selected checkboxes
        selectedBL = new Set();
        blDropdown.querySelectorAll('input[type="checkbox"]').forEach(cb => {
          if (cb.checked) selectedBL.add(cb.getAttribute('data-bl'));
        });
        // Label
        blLabel.textContent = selectedBL.size ? `${selectedBL.size} selected` : 'Business lines';
        // Pills
        selectedBLPills.innerHTML = '';
        selectedBL.forEach(b => {
          const pill = document.createElement('button');
          pill.type = 'button';
          pill.className = 'inline-flex items-center gap-1 text-xs rounded-full bg-slate-200 text-slate-700 px-2.5 py-1 hover:bg-slate-300';
          pill.innerHTML = `<span>${b}</span><span aria-hidden="true" class="text-slate-500">&times;</span>`;
          pill.addEventListener('click', () => {
            // Uncheck in dropdown
            blDropdown.querySelector(`input[data-bl="${b}"]`).checked = false;
            selectedBL.delete(b);
            blApply.click();
          });
          selectedBLPills.appendChild(pill);
        });
        blDropdown.classList.add('hidden');
        updateVisible();
      });
      blClear.addEventListener('click', () => {
        blDropdown.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        selectedBL.clear();
        blLabel.textContent = 'Business lines';
        selectedBLPills.innerHTML = '';
        updateVisible();
      });

      // Role dropdown
      roleDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        roleDropdown.classList.toggle('hidden');
      });
      roleDropdown.querySelectorAll('[data-role-view]').forEach(btn => {
        btn.addEventListener('click', () => {
          roleView = btn.getAttribute('data-role-view');
          roleLabel.textContent = roleView === 'mine' ? 'Assigned to me' : 'All roles';
          roleDropdown.classList.add('hidden');
          updateVisible();
        });
      });

      // Close dropdowns on outside click
      document.addEventListener('click', (e) => {
        if (!blDropdown.contains(e.target) && !blDropdownBtn.contains(e.target)) {
          blDropdown.classList.add('hidden');
        }
        if (!roleDropdown.contains(e.target) && !roleDropdownBtn.contains(e.target)) {
          roleDropdown.classList.add('hidden');
        }
      });

      // Cards: selection and actions
      cards.forEach(card => {
        card.classList.add('cursor-pointer');
        card.addEventListener('click', (e) => {
          // Avoid selecting when clicking inner buttons
          if (e.target.closest('button')) return;
          selectReportById(card.getAttribute('data-id'));
        });

        // Open button
        const openBtn = card.querySelector('[data-open]');
        openBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = card.getAttribute('data-id');
          selectReportById(id);
          openReport(id);
        });

        // Issue button
        const issueBtn = card.querySelector('[data-issue-for]');
        issueBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          openIssueModal(card.getAttribute('data-name') || '');
        });
      });

      function openReport(id) {
        // Simulate opening a report
        window.open(`https://example.com/report/${encodeURIComponent(id)}`, '_blank', 'noopener');
      }

      // Aside buttons
      btnOpenSelected.addEventListener('click', () => {
        if (selectedReportId) openReport(selectedReportId);
      });
      btnOpenIssueAside.addEventListener('click', () => {
        const name = selectedReportId ? (reportMeta[selectedReportId]?.title || '') : '';
        openIssueModal(name);
      });

      // Tabs
      function activateTab(which) {
        if (which === 'purpose') {
          tabPurposeBtn.classList.add('border-slate-900', 'text-slate-900');
          tabPurposeBtn.classList.remove('border-transparent', 'text-slate-500');
          tabHowBtn.classList.remove('border-slate-900', 'text-slate-900');
          tabHowBtn.classList.add('border-transparent', 'text-slate-500');
          tabContentPurpose.classList.remove('hidden');
          tabContentHow.classList.add('hidden');
        } else {
          tabHowBtn.classList.add('border-slate-900', 'text-slate-900');
          tabHowBtn.classList.remove('border-transparent', 'text-slate-500');
          tabPurposeBtn.classList.remove('border-slate-900', 'text-slate-900');
          tabPurposeBtn.classList.add('border-transparent', 'text-slate-500');
          tabContentHow.classList.remove('hidden');
          tabContentPurpose.classList.add('hidden');
        }
      }
      tabPurposeBtn.addEventListener('click', () => activateTab('purpose'));
      tabHowBtn.addEventListener('click', () => activateTab('how'));

      // Issue modal openers
      openIssueHeader.addEventListener('click', () => openIssueModal(''));
      document.getElementById('openIssue').addEventListener('click', () => {
        const name = selectedReportId ? (reportMeta[selectedReportId]?.title || '') : '';
        openIssueModal(name);
      });

      // Issue modal closers
      closeIssue.addEventListener('click', closeIssueModal);
      cancelIssue.addEventListener('click', closeIssueModal);
      issueModal.addEventListener('click', (e) => {
        if (e.target === issueModal) closeIssueModal();
      });

      // Issue form submit
      issueForm.addEventListener('submit', (e) => {
        e.preventDefault();
        closeIssueModal();
        showToast('Issue submitted. The analytics team will follow up.');
      });

      // Support drawer toggles
      openSupport?.addEventListener('click', openSupportDrawer);
      openSupportSecondary?.addEventListener('click', openSupportDrawer);
      closeSupport.addEventListener('click', closeSupportDrawer);
      supportOverlay.addEventListener('click', closeSupportDrawer);

      // Support chat
      supportForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const msg = supportInput.value.trim();
        if (!msg) return;
        appendSupportMessage('user', msg);
        supportInput.value = '';
        setTimeout(() => {
          appendSupportMessage('agent', 'Thanks for reaching out! We will get back shortly.');
        }, 600);
      });

      function appendSupportMessage(type, text) {
        const wrap = document.createElement('div');
        wrap.className = `flex items-start gap-2 ${type === 'user' ? 'justify-end' : ''}`;
        if (type === 'user') {
          wrap.innerHTML = `
            <div class="max-w-[75%] rounded-lg bg-indigo-600 text-white px-3 py-2">
              <p class="text-sm">${escapeHtml(text)}</p>
            </div>
            <div class="h-8 w-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-semibold">ME</div>
          `;
        } else {
          wrap.innerHTML = `
            <div class="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-semibold">AS</div>
            <div class="max-w-[75%] rounded-lg bg-slate-100 px-3 py-2">
              <p class="text-sm text-slate-800">${escapeHtml(text)}</p>
            </div>
          `;
        }
        supportMessages.appendChild(wrap);
        supportMessages.scrollTop = supportMessages.scrollHeight;
      }

      function escapeHtml(str) {
        return str.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
      }

      // Keyboard: Esc closes modals/drawer
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          if (!issueModal.classList.contains('hidden')) closeIssueModal();
          if (!supportOverlay.classList.contains('hidden')) closeSupportDrawer();
          blDropdown.classList.add('hidden');
          roleDropdown.classList.add('hidden');
        }
      });

      // Initialize
      updateVisible();
      btnOpenSelected.disabled = true;
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen flex flex-col">

<header className="border-b border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-4">

<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-sm">
<span className="text-white text-sm font-semibold tracking-tight">RP</span>
</div>
<div>
<h1 className="text-[22px] sm:text-[24px] tracking-tight font-semibold text-slate-900">Reporting Portal</h1>
<p className="text-slate-500 text-sm">Company internal reports hub</p>
</div>
</div>

<div className="flex items-center gap-3 sm:gap-4">
<button className="hidden sm:flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition" id="open-support">
<i className="h-4 w-4 text-slate-600" data-lucide="messages-square"></i>
<span>Support</span>
</button>
<button className="hidden sm:flex items-center gap-2 rounded-md bg-indigo-600 text-white px-3 py-2 text-sm font-medium hover:bg-indigo-700 transition" id="open-issue-header">
<i className="h-4 w-4" data-lucide="bug"></i>
<span>Report issue</span>
</button>
<div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
<div className="flex items-center gap-3">
<div className="text-right hidden sm:block">
<div className="text-sm font-medium text-slate-900">Alex Tran</div>
<div className="text-xs text-slate-500">Data Analyst</div>
</div>
<img alt="User avatar" className="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</header>

<main className="flex-1">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-8">

<div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4">

<div className="relative flex-1">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" data-lucide="search"></i>
<input className="w-full rounded-lg border border-slate-200 bg-white pl-10 pr-3 py-2.5 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition" id="searchInput" placeholder="Search by report name or business line" type="text"/>
</div>

<div className="relative">
<button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50" id="blDropdownBtn">
<i className="h-4 w-4 text-slate-600" data-lucide="rows"></i>
<span id="blLabel">Business lines</span>
<i className="h-4 w-4 text-slate-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-20 mt-2 w-56 rounded-lg border border-slate-200 bg-white shadow-lg p-2" id="blDropdown">

<div className="space-y-1">

<label className="flex items-center justify-between gap-2 cursor-pointer rounded-md px-2 py-2 hover:bg-slate-50">
<span className="text-sm text-slate-700">Sales</span>
<input className="peer sr-only" data-bl="Sales" type="checkbox"/>
<span className="h-5 w-9 rounded-full bg-slate-200 relative transition peer-checked:bg-indigo-600">
<span className="h-4 w-4 rounded-full bg-white shadow absolute top-0.5 left-0.5 transition peer-checked:left-4"></span>
</span>
</label>
<label className="flex items-center justify-between gap-2 cursor-pointer rounded-md px-2 py-2 hover:bg-slate-50">
<span className="text-sm text-slate-700">Operations</span>
<input className="peer sr-only" data-bl="Operations" type="checkbox"/>
<span className="h-5 w-9 rounded-full bg-slate-200 relative transition peer-checked:bg-indigo-600">
<span className="h-4 w-4 rounded-full bg-white shadow absolute top-0.5 left-0.5 transition peer-checked:left-4"></span>
</span>
</label>
<label className="flex items-center justify-between gap-2 cursor-pointer rounded-md px-2 py-2 hover:bg-slate-50">
<span className="text-sm text-slate-700">Finance</span>
<input className="peer sr-only" data-bl="Finance" type="checkbox"/>
<span className="h-5 w-9 rounded-full bg-slate-200 relative transition peer-checked:bg-indigo-600">
<span className="h-4 w-4 rounded-full bg-white shadow absolute top-0.5 left-0.5 transition peer-checked:left-4"></span>
</span>
</label>
<label className="flex items-center justify-between gap-2 cursor-pointer rounded-md px-2 py-2 hover:bg-slate-50">
<span className="text-sm text-slate-700">Customer Experience</span>
<input className="peer sr-only" data-bl="Customer Experience" type="checkbox"/>
<span className="h-5 w-9 rounded-full bg-slate-200 relative transition peer-checked:bg-indigo-600">
<span className="h-4 w-4 rounded-full bg-white shadow absolute top-0.5 left-0.5 transition peer-checked:left-4"></span>
</span>
</label>
</div>
<div className="mt-2 flex items-center justify-between">
<button className="text-xs text-slate-500 hover:text-slate-700" id="blClear">Clear</button>
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-700" id="blApply">Apply</button>
</div>
</div>
</div>

<div className="relative">
<button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50" id="roleDropdownBtn">
<i className="h-4 w-4 text-slate-600" data-lucide="shield"></i>
<span id="roleLabel">Assigned to me</span>
<i className="h-4 w-4 text-slate-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-20 mt-2 w-48 rounded-lg border border-slate-200 bg-white shadow-lg p-1" id="roleDropdown">
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-slate-50" data-role-view="mine">Assigned to me</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-slate-50" data-role-view="all">All roles</button>
</div>
</div>
</div>

<div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

<section className="lg:col-span-2">

<div className="flex flex-wrap gap-2" id="selectedBLPills"></div>
<div className="mt-4 space-y-3" id="reportList">

<article className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow transition" data-blines="Sales" data-id="r1" data-name="Monthly Sales Overview" data-roles="Data Analyst,Sales Manager">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-[18px] sm:text-[20px] tracking-tight font-semibold text-slate-900">Monthly Sales Overview</h3>
<p className="mt-1 text-sm text-slate-500">Revenue, pipeline and conversion health by region.</p>
<div className="mt-3 flex flex-wrap items-center gap-2">
<span className="text-xs rounded-full bg-indigo-50 text-indigo-700 px-2.5 py-1">Sales</span>
<span className="text-xs rounded-full bg-slate-100 text-slate-700 px-2.5 py-1">Data Analyst</span>
<span className="text-xs rounded-full bg-slate-100 text-slate-700 px-2.5 py-1">Sales Manager</span>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:bg-slate-800" data-open="" id="open_r1">
<i className="h-4 w-4" data-lucide="external-link"></i>
<span>Open</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-50" data-issue-htmlFor="Monthly Sales Overview">
<i className="h-3.5 w-3.5" data-lucide="bug"></i>
<span>Report issue</span>
</button>
</div>
</div>
</article>
<article className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow transition" data-blines="Operations" data-id="r2" data-name="Operations Efficiency Dashboard" data-roles="Data Analyst,Ops Lead">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-[18px] sm:text-[20px] tracking-tight font-semibold text-slate-900">Operations Efficiency Dashboard</h3>
<p className="mt-1 text-sm text-slate-500">Throughput, cycle time and bottleneck analysis for ops.</p>
<div className="mt-3 flex flex-wrap items-center gap-2">
<span className="text-xs rounded-full bg-indigo-50 text-indigo-700 px-2.5 py-1">Operations</span>
<span className="text-xs rounded-full bg-slate-100 text-slate-700 px-2.5 py-1">Data Analyst</span>
<span className="text-xs rounded-full bg-slate-100 text-slate-700 px-2.5 py-1">Ops Lead</span>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:bg-slate-800" data-open="" id="open_r2">
<i className="h-4 w-4" data-lucide="external-link"></i>
<span>Open</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-50" data-issue-htmlFor="Operations Efficiency Dashboard">
<i className="h-3.5 w-3.5" data-lucide="bug"></i>
<span>Report issue</span>
</button>
</div>
</div>
</article>
<article className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow transition" data-blines="Finance" data-id="r3" data-name="Finance P&amp;L Snapshot" data-roles="Finance Analyst,Executive">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-[18px] sm:text-[20px] tracking-tight font-semibold text-slate-900">Finance P&amp;L Snapshot</h3>
<p className="mt-1 text-sm text-slate-500">Profit and loss KPIs with variance and trend analysis.</p>
<div className="mt-3 flex flex-wrap items-center gap-2">
<span className="text-xs rounded-full bg-indigo-50 text-indigo-700 px-2.5 py-1">Finance</span>
<span className="text-xs rounded-full bg-slate-100 text-slate-700 px-2.5 py-1">Finance Analyst</span>
<span className="text-xs rounded-full bg-slate-100 text-slate-700 px-2.5 py-1">Executive</span>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:bg-slate-800" data-open="" id="open_r3">
<i className="h-4 w-4" data-lucide="external-link"></i>
<span>Open</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-50" data-issue-htmlFor="Finance P&amp;L Snapshot">
<i className="h-3.5 w-3.5" data-lucide="bug"></i>
<span>Report issue</span>
</button>
</div>
</div>
</article>
<article className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow transition" data-blines="Customer Experience" data-id="r4" data-name="Customer Satisfaction Tracker" data-roles="Data Analyst,Support Lead">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-[18px] sm:text-[20px] tracking-tight font-semibold text-slate-900">Customer Satisfaction Tracker</h3>
<p className="mt-1 text-sm text-slate-500">NPS, CSAT and contact drivers across segments.</p>
<div className="mt-3 flex flex-wrap items-center gap-2">
<span className="text-xs rounded-full bg-indigo-50 text-indigo-700 px-2.5 py-1">Customer Experience</span>
<span className="text-xs rounded-full bg-slate-100 text-slate-700 px-2.5 py-1">Data Analyst</span>
<span className="text-xs rounded-full bg-slate-100 text-slate-700 px-2.5 py-1">Support Lead</span>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:bg-slate-800" data-open="" id="open_r4">
<i className="h-4 w-4" data-lucide="external-link"></i>
<span>Open</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-50" data-issue-htmlFor="Customer Satisfaction Tracker">
<i className="h-3.5 w-3.5" data-lucide="bug"></i>
<span>Report issue</span>
</button>
</div>
</div>
</article>
</div>

<div className="mt-4 flex justify-between items-center">
<p className="text-sm text-slate-500" id="visibleCount"></p>
<nav className="hidden sm:flex items-center gap-1">
<button className="px-3 py-1.5 text-sm rounded-md border border-slate-200 bg-white text-slate-700 hover:bg-slate-50">1</button>
<button className="px-3 py-1.5 text-sm rounded-md border border-slate-200 bg-white text-slate-700 hover:bg-slate-50">2</button>
<button className="px-3 py-1.5 text-sm rounded-md border border-slate-200 bg-white text-slate-700 hover:bg-slate-50">3</button>
</nav>
</div>
</section>

<aside className="lg:col-span-1">
<div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
<div className="relative h-28">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>
<div className="p-4">
<h2 className="text-[20px] tracking-tight font-semibold text-slate-900" id="detailTitle">Select a report to view details</h2>
<p className="mt-1 text-sm text-slate-500" id="detailSubtitle">Purpose and how to use will appear here.</p>

<div className="mt-4 border-b border-slate-200">
<nav className="-mb-px flex gap-4" role="tablist">
<button className="tab-btn border-b-2 border-slate-900 text-slate-900 px-1.5 pb-2 text-sm font-medium" data-tab="purpose" id="tabPurpose">Purpose</button>
<button className="tab-btn border-b-2 border-transparent text-slate-500 hover:text-slate-700 px-1.5 pb-2 text-sm font-medium" data-tab="how" id="tabHow">How to use</button>
</nav>
</div>
<div className="mt-4 text-sm text-slate-700 leading-6" id="tabContentPurpose">
                  Choose a report from the list to see its mission, business questions answered and owners.
                </div>
<div className="mt-4 text-sm text-slate-700 leading-6 hidden" id="tabContentHow">
                  Step-by-step tips and filters will be shown for the selected report.
                </div>

<div className="mt-6 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-900">Report Owners</div>
<div className="text-xs text-slate-500">Analytics Team</div>
</div>
</div>
</div>

<div className="border-t border-slate-200 bg-slate-50/70 p-3 flex flex-col sm:flex-row gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2.5 text-sm font-medium hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed" id="openSelected">
<i className="h-4 w-4" data-lucide="external-link"></i>
<span>Open report</span>
</button>
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50" id="openIssue">
<i className="h-4 w-4" data-lucide="bug"></i>
<span>Report issue</span>
</button>
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50" id="open-support-secondary">
<i className="h-4 w-4" data-lucide="messages-square"></i>
<span>Get support</span>
</button>
</div>
</div>
</aside>
</div>
</div>
</main>
</div>

<div className="fixed inset-0 z-40 hidden" id="issueModal">
<div className="absolute inset-0 bg-slate-900/50"></div>
<div className="absolute inset-0 flex items-end sm:items-center justify-center p-4">
<div className="w-full sm:max-w-lg rounded-2xl bg-white shadow-xl border border-slate-200">
<div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-slate-700" data-lucide="bug"></i>
<h3 className="text-[18px] tracking-tight font-semibold text-slate-900">Report an issue</h3>
</div>
<button className="p-1 rounded-md hover:bg-slate-100" id="closeIssue">
<i className="h-5 w-5 text-slate-500" data-lucide="x"></i>
</button>
</div>
<form className="px-5 py-4 space-y-4" id="issueForm">
<div>
<label className="text-sm font-medium text-slate-700">Report</label>
<input className="mt-1 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm" id="issueReportName" placeholder="Which report?" type="text" />
</input></div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="text-sm font-medium text-slate-700">Category</label>
<div className="relative mt-1">
<i className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="layers"></i>
<select className="w-full appearance-none rounded-md border border-slate-200 bg-white pl-9 pr-8 py-2 text-sm">
<option>Data accuracy</option>
<option>Access/permission</option>
<option>Performance</option>
<option>Visualization bug</option>
<option>Other</option>
</select>
<i className="h-4 w-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="text-sm font-medium text-slate-700">Impact</label>
<div className="relative mt-1">
<i className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="alert-triangle"></i>
<select className="w-full appearance-none rounded-md border border-slate-200 bg-white pl-9 pr-8 py-2 text-sm">
<option>Low</option>
<option>Medium</option>
<option>High</option>
<option>Critical</option>
</select>
<i className="h-4 w-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div>
<label className="text-sm font-medium text-slate-700">Description</label>
<textarea className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm" placeholder="Describe the problem, steps to reproduce, expected vs actual" rows="4"></textarea>
</div>
<div>
<label className="text-sm font-medium text-slate-700">Attach screenshot (optional)</label>
<input accept="image/*" className="mt -1 block w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm file:mr-3 file:py-2 file:px-3 file:rounded-md file:border-0 file:bg-slate-100 file:text-slate-700 file:text-sm hover:file:bg-slate-200" type="file"/>
<p className="mt-1 text-xs text-slate-500">PNG, JPG up to 5MB.</p>
</div>
<div className="flex items-center gap-2">
<input className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" id="includeMeta" type="checkbox"/>
<label className="text-sm text-slate-700" htmlFor="includeMeta">Include page URL and browser info</label>
</div>
<div className="flex items-center justify-end gap-2 pt-2">
<button className="px-3 py-2 text-sm rounded-md border border-slate-200 bg-white text-slate-700 hover:bg-slate-50" id="cancelIssue" type="button">Cancel</button>
<button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-3 py-2 text-sm font-medium hover:bg-indigo-700" type="submit">
<i className="h-4 w-4" data-lucide="send"></i>
<span>Submit issue</span>
</button>
</div>
</form>
</div>
</div>
</div>

<div className="fixed inset-0 bg-slate-900/50 z-40 hidden" id="supportOverlay"></div>
<aside className="fixed right-0 top-0 h-full w-full sm:max-w-md bg-white border-l border-slate-200 shadow-xl z-50 translate-x-full transition-transform" id="supportDrawer">
<div className="flex h-full flex-col">
<div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-slate-700" data-lucide="messages-square"></i>
<h3 className="text-[18px] tracking-tight font-semibold text-slate-900">Support</h3>
</div>
<button className="p-1 rounded-md hover:bg-slate-100" id="closeSupport">
<i className="h-5 w-5 text-slate-500" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-3" id="supportMessages">
<div className="flex items-start gap-2">
<div className="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-semibold">AS</div>
<div className="max-w-[75%] rounded-lg bg-slate-100 px-3 py-2">
<p className="text-sm text-slate-800">Hi! How can we help with your report today?</p>
</div>
</div>
</div>
<form className="p-3 border-t border-slate-200" id="supportForm">
<div className="flex items-center gap-2">
<input className="flex-1 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500" id="supportInput" placeholder="Type your message..." type="text"/>
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:bg-slate-800" type="submit">
<i className="h-4 w-4" data-lucide="send"></i>
<span>Send</span>
</button>
</div>
</form>
</div>
</aside>

<div className="fixed bottom-4 right-4 z-[60] hidden" id="toast">
<div className="rounded-lg bg-slate-900 text-white px-4 py-3 shadow-lg flex items-center gap-2">
<i className="h-5 w-5 text-emerald-400" data-lucide="check-circle"></i>
<span className="text-sm" id="toastMsg">Saved</span>
</div>
</div>



    </>
  );
}
