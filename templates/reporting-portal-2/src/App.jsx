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



      // Utilities
      const $ = (s, root = document) => root.querySelector(s);
      const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
      const show = (el) => el.classList.remove('hidden');
      const hide = (el) => el.classList.add('hidden');
      const toggleHidden = (el) => el.classList.toggle('hidden');
      const toast = (msg = 'Done') => {
        const t = $('#toast');
        $('#toastMsg').textContent = msg;
        show(t);
        setTimeout(() => hide(t), 1800);
      };

      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();

        // User role (from header)
        const userRole = $('#userRole')?.textContent?.trim() || 'Data Analyst';

        // Dropdowns
        const blBtn = $('#blMenuBtn');
        const blMenu = $('#blMenu');
        const blLabel = $('#blLabel');
        const roleBtn = $('#roleMenuBtn');
        const roleMenu = $('#roleMenu');
        const roleLabel = $('#roleLabel');
        const myRoleToggle = $('#myRoleToggle');
        const clearBtn = $('#clearFilters');

        // Filters + list
        const searchInput = $('#searchInput');
        const cards = $$('.report-card');
        const resultCount = $('#resultCount');
        const contextRole = $('#contextRole');
        const contextBL = $('#contextBL');
        const emptyState = $('#emptyState');

        // Right panel
        const selectedTitle = $('#selectedTitle');
        const selectedImage = $('#selectedImage');
        const purposeText = $('#purposeText');
        const purposeBullets = $('#purposeBullets');
        const howtoList = $('#howtoList');
        const accessChips = $('#accessChips');

        // Modals
        const issueModal = $('#issueModal');
        const suggestModal = $('#suggestModal');
        const requestModal = $('#requestModal');
        const issueReportName = $('#issueReportName');
        const suggestReportName = $('#suggestReportName');

        // Support Drawer
        const supportDrawer = $('#supportDrawer');

        // Data for right panel (simple mapping)
        const reportMeta = {
          'Monthly Sales Overview': {
            img: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&w=1200&auto=format&fit=crop',
            purpose: 'Track revenue vs targets and surface regional risks early.',
            bullets: ['KPIs: Revenue, Pipeline, Conversion', 'Grain: Monthly, Region, Segment', 'Refresh: Daily 06:00 UTC'],
            howto: ['Filter by month or quarter', 'Drill into region > segment for variance', 'Export CSV for ad-hoc pivot'],
            access: ['Executive', 'Sales Lead', 'Data Analyst'],
            owner: 'Analytics'
          },
          'Operations Efficiency Dashboard': {
            img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop',
            purpose: 'Identify process bottlenecks and drive throughput improvements.',
            bullets: ['KPIs: Throughput, Cycle Time, SLA', 'Grain: Daily, Site, Workcenter', 'Refresh: Hourly'],
            howto: ['Use site filter to compare performance', 'Sort by cycle time to find delays', 'Export exceptions for triage'],
            access: ['Ops Manager', 'Executive', 'Data Analyst'],
            owner: 'Ops BI'
          },
          'Marketing Funnel Insights': {
            img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
            purpose: 'Optimize channel mix by monitoring funnel conversion and CAC.',
            bullets: ['KPIs: Visits, Leads, MQL, CAC', 'Grain: Weekly, Channel, Campaign', 'Refresh: Daily'],
            howto: ['Select campaign to compare cohorts', 'Check CAC trend per channel', 'Export attribution table'],
            access: ['Executive', 'Sales Lead', 'Data Analyst'],
            owner: 'Growth Analytics'
          },
          'Financial Performance Summary': {
            img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
            purpose: 'Summarize profitability and cash flow for leadership reviews.',
            bullets: ['KPIs: Revenue, Margin, Cash Flow', 'Grain: Monthly, BU', 'Refresh: Monthly EOM + d1'],
            howto: ['Pick month or QTD', 'Use BU filter for drilldown', 'Export P&L for board pack'],
            access: ['Executive', 'Data Analyst'],
            owner: 'FP&A'
          }
        };

        // State
        let selBL = 'all';
        let selRole = 'all';

        // Init: default to "My role" active
        const setMyRoleActive = (on) => {
          myRoleToggle.setAttribute('data-active', on ? 'true' : 'false');
          myRoleToggle.setAttribute('aria-pressed', on ? 'true' : 'false');
          myRoleToggle.classList.toggle('bg-blue-50', on);
          myRoleToggle.classList.toggle('border-blue-200', on);
          myRoleToggle.classList.toggle('text-blue-700', on);
          myRoleToggle.classList.toggle('hover:bg-blue-100', on);
          if (on) {
            selRole = userRole;
            roleLabel.textContent = userRole;
          } else {
            selRole = 'all';
            roleLabel.textContent = 'All roles';
          }
          applyFilters();
        };
        setMyRoleActive(true);

        const closeAllMenus = () => {
          hide(blMenu);
          hide(roleMenu);
        };

        blBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleHidden(blMenu);
          hide(roleMenu);
        });
        roleBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleHidden(roleMenu);
          hide(blMenu);
        });
        document.addEventListener('click', () => closeAllMenus());

        // Menu selections
        $$('#blMenu [data-bl]').forEach((btn) =>
          btn.addEventListener('click', (e) => {
            selBL = btn.getAttribute('data-bl');
            blLabel.textContent = selBL === 'all' ? 'All lines' : selBL;
            applyFilters();
            hide(blMenu);
          })
        );
        $$('#roleMenu [data-role]').forEach((btn) =>
          btn.addEventListener('click', () => {
            selRole = btn.getAttribute('data-role');
            roleLabel.textContent = selRole === 'all' ? 'All roles' : selRole;
            setMyRoleActive(false);
            applyFilters();
            hide(roleMenu);
          })
        );

        myRoleToggle.addEventListener('click', () => {
          const active = myRoleToggle.getAttribute('data-active') === 'true';
          setMyRoleActive(!active);
        });

        clearBtn.addEventListener('click', () => {
          searchInput.value = '';
          selBL = 'all';
          blLabel.textContent = 'All lines';
          setMyRoleActive(true);
          applyFilters();
        });

        // Keyboard shortcut to search
        window.addEventListener('keydown', (e) => {
          if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
          }
          if (e.key === 'Escape') {
            // Close modals and support
            [issueModal, suggestModal, requestModal].forEach((m) => hide(m));
            supportDrawer.classList.add('translate-x-full');
          }
        });

        // Filter logic
        const applyFilters = () => {
          const q = searchInput.value.trim().toLowerCase();
          let visible = 0;

          cards.forEach((card) => {
            const name = card.getAttribute('data-name')?.toLowerCase() || '';
            const bl = card.getAttribute('data-bl');
            const roles = (card.getAttribute('data-roles') || '').split(',').map((r) => r.trim());
            const matchesText = !q || name.includes(q);
            const matchesBL = selBL === 'all' || bl === selBL;
            const matchesRole = selRole === 'all' || roles.includes(selRole);

            const showCard = matchesText && matchesBL && matchesRole;
            card.classList.toggle('hidden', !showCard);
            if (showCard) visible += 1;
          });

          // Context
          resultCount.textContent = String(visible);
          contextRole.textContent = selRole === 'all' ? '' : `role “${selRole}”`;
          contextBL.textContent = selBL === 'all' ? '' : `in “${selBL}”`;
          contextRole.parentElement.classList.toggle('hidden', selRole === 'all' && selBL === 'all');

          // Empty state
          if (visible === 0) {
            show(emptyState);
          } else {
            hide(emptyState);
          }
        };

        searchInput.addEventListener('input', applyFilters);
        applyFilters();

        // Select card to populate right panel
        const selectReport = (reportName) => {
          selectedTitle.textContent = reportName;
          const meta = reportMeta[reportName] || null;
          if (meta) {
            selectedImage.src = meta.img;
            purposeText.textContent = meta.purpose;
            purposeBullets.innerHTML = '';
            meta.bullets.forEach((b) => {
              const li = document.createElement('li');
              li.textContent = b;
              purposeBullets.appendChild(li);
            });
            howtoList.innerHTML = '';
            meta.howto.forEach((h) => {
              const li = document.createElement('li');
              li.textContent = h;
              howtoList.appendChild(li);
            });
            accessChips.innerHTML = '';
            meta.access.forEach((r) => {
              const chip = document.createElement('span');
              chip.className = 'inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700 ring-1 ring-slate-200';
              chip.textContent = r;
              accessChips.appendChild(chip);
            });
            $('#contactOwner').nextElementSibling.textContent = `Owner: ${meta.owner}`;
          }
        };

        // Card click selects report
        cards.forEach((card) => {
          card.addEventListener('click', (e) => {
            // Avoid selecting when clicking buttons
            if (e.target.closest('button')) return;
            const name = card.getAttribute('data-name');
            selectReport(name);
          });
        });

        // Buttons on cards
        $$('.open-report').forEach((btn) =>
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            selectReport(btn.getAttribute('data-report'));
            toast('Opening report...');
          })
        );
        $$('.issue-btn').forEach((btn) =>
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            issueReportName.value = btn.getAttribute('data-report');
            show(issueModal);
          })
        );
        $$('.suggest-btn').forEach((btn) =>
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            suggestReportName.value = btn.getAttribute('data-report');
            show(suggestModal);
          })
        );

        // Panel actions
        $('#makeSuggestion').addEventListener('click', () => {
          suggestReportName.value = selectedTitle.textContent;
          show(suggestModal);
        });
        $('#panelIssueBtn').addEventListener('click', () => {
          issueReportName.value = selectedTitle.textContent;
          show(issueModal);
        });
        $('#panelSuggestBtn').addEventListener('click', () => {
          suggestReportName.value = selectedTitle.textContent;
          show(suggestModal);
        });
        $('#contactOwner').addEventListener('click', () => {
          const report = selectedTitle.textContent;
          show(supportDrawer);
          supportDrawer.classList.remove('translate-x-full');
          addSupportMessage('You', `Requesting access to “${report}”`, true);
        });

        // Global actions
        $('#openIssueModal').addEventListener('click', () => {
          issueReportName.value = selectedTitle.textContent;
          show(issueModal);
        });
        $('#openRequestModal').addEventListener('click', () => show(requestModal));
        $('#emptyRequest').addEventListener('click', () => show(requestModal));
        $$('[data-close]').forEach((btn) =>
          btn.addEventListener('click', () => hide($('#' + btn.getAttribute('data-close'))))
        );

        // Support drawer
        $('#openSupport').addEventListener('click', () => {
          supportDrawer.classList.remove('translate-x-full');
        });
        $('#closeSupport').addEventListener('click', () => {
          supportDrawer.classList.add('translate-x-full');
        });

        // Support chat
        const supportInput = $('#supportInput');
        const supportSend = $('#supportSend');
        const supportMessages = $('#supportMessages');
        const addSupportMessage = (author, text, me = false) => {
          const row = document.createElement('div');
          row.className = 'flex gap-2 ' + (me ? 'justify-end' : '');
          if (me) {
            const bubble = document.createElement('div');
            bubble.className = 'rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm text-slate-700 max-w-[80%]';
            bubble.textContent = text;
            row.appendChild(bubble);
          } else {
            const avatar = document.createElement('img');
            avatar.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=64&auto=format&fit=crop';
            avatar.className = 'h-7 w-7 rounded-full object-cover ring-1 ring-slate-200';
            const bubble = document.createElement('div');
            bubble.className = 'rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 max-w-[80%]';
            bubble.textContent = text;
            row.appendChild(avatar);
            row.appendChild(bubble);
          }
          supportMessages.appendChild(row);
          supportMessages.scrollTop = supportMessages.scrollHeight;
        };
        supportSend.addEventListener('click', () => {
          const val = supportInput.value.trim();
          if (!val) return;
          addSupportMessage('You', val, true);
          supportInput.value = '';
          setTimeout(() => addSupportMessage('Agent', 'Thanks! We will get back to you shortly.'), 600);
        });
        supportInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            supportSend.click();
          }
        });

        // Forms
        $('#issueForm').addEventListener('submit', (e) => {
          e.preventDefault();
          hide(issueModal);
          toast('Issue reported');
        });
        $('#suggestForm').addEventListener('submit', (e) => {
          e.preventDefault();
          hide(suggestModal);
          toast('Suggestion sent');
        });
        $('#requestForm').addEventListener('submit', (e) => {
          e.preventDefault();
          hide(requestModal);
          toast('Request submitted');
        });

        // Tab switching
        $$('.tab-btn').forEach((btn) =>
          btn.addEventListener('click', () => {
            const tab = btn.getAttribute('data-tab');
            $$('.tab-btn').forEach((b) => b.classList.remove('bg-slate-100', 'text-slate-700'));
            btn.classList.add('bg-slate-100', 'text-slate-700');
            $$('.tab-panel').forEach((p) => hide(p));
            show($('#tab-' + tab));
          })
        );

        // Initial selection
        selectReport('Monthly Sales Overview');
      });
    
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

<header className="border-b border-slate-200 bg-white/80 backdrop-blur">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-3">

<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl border border-slate-200 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
<i className="h-5 w-5 text-blue-600" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
</div>
<div>
<h1 className="text-[26px] tracking-tight font-semibold text-slate-900">
                  Reporting Portal
                </h1>
<p className="text-xs text-slate-500">
                  Discover, request, and collaborate on company reports
                </p>
</div>
</div>

<div className="flex items-center gap-2 sm:gap-3">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:outline hover:outline-1 hover:outline-blue-100" id="openRequestModal">
<i className="h-4 w-4 text-blue-600" data-lucide="file-plus-2" strokeWidth="1.5"></i>
                Request Report
              </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:outline hover:outline-1 hover:outline-blue-100" id="openIssueModal">
<i className="h-4 w-4 text-blue-600" data-lucide="bug" strokeWidth="1.5"></i>
                Report Issue
              </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-3.5 py-2 text-sm font-medium hover:bg-blue-700 hover:outline hover:outline-1 hover:outline-blue-300" id="openSupport">
<i className="h-4 w-4" data-lucide="messages-square" strokeWidth="1.5"></i>
                Support
              </button>
<div className="hidden sm:block h-6 w-px bg-slate-200"></div>

<div className="flex items-center gap-3">
<div className="text-right hidden sm:block">
<div className="text-sm font-medium text-slate-900">
                    Truc Linh
                  </div>
<div className="text-xs text-blue-600" id="userRole">Data Analyst</div>
</div>
<img alt="avatar" className="h-9 w-9 rounded-full object-cover ring-2 ring-blue-100" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</header>

<main className="flex-1">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-8 space-y-4">

<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<div className="flex-1 relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" data-lucide="search" strokeWidth="1.5"></i>
<input className="w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500" id="searchInput" placeholder="Search reports by name or keywords..." type="text"/>
</div>

<div className="flex items-center gap-2">

<div className="relative">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:outline hover:outline-1 hover:outline-blue-100" id="blMenuBtn">
<i className="h-4 w-4 text-blue-600" data-lucide="briefcase" strokeWidth="1.5"></i>
<span id="blLabel">All lines</span>
<i className="h-4 w-4 text-slate-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="hidden absolute z-20 mt-2 w-44 rounded-lg border border-slate-200 bg-white shadow-lg" id="blMenu">
<ul className="py-1 text-sm">
<li><button className="w-full text-left px-3 py-2 hover:bg-slate-50" data-bl="all">All lines</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-slate-50" data-bl="Sales">Sales</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-slate-50" data-bl="Operations">Operations</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-slate-50" data-bl="Finance">Finance</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-slate-50" data-bl="Marketing">Marketing</button></li>
</ul>
</div>
</div>

<div className="relative">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:outline hover:outline-1 hover:outline-blue-100" id="roleMenuBtn">
<i className="h-4 w-4 text-blue-600" data-lucide="key-round" strokeWidth="1.5"></i>
<span id="roleLabel">All roles</span>
<i className="h-4 w-4 text-slate-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="hidden absolute z-20 mt-2 w-48 rounded-lg border border-slate-200 bg-white shadow-lg" id="roleMenu">
<ul className="py-1 text-sm">
<li><button className="w-full text-left px-3 py-2 hover:bg-slate-50" data-role="all">All roles</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-slate-50" data-role="Data Analyst">Data Analyst</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-slate-50" data-role="Ops Manager">Ops Manager</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-slate-50" data-role="Executive">Executive</button></li>
<li><button className="w-full text-left px-3 py-2 hover:bg-slate-50" data-role="Sales Lead">Sales Lead</button></li>
</ul>
</div>
</div>

<button aria-pressed="true" className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100 hover:outline hover:outline-1 hover:outline-blue-200" data-active="true" id="myRoleToggle">
<i className="h-4 w-4" data-lucide="user-check" strokeWidth="1.5"></i>
                    My role
                  </button>

<button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:outline hover:outline-1 hover:outline-blue-100" id="clearFilters">
<i className="h-4 w-4" data-lucide="eraser" strokeWidth="1.5"></i>
                    Clear
                  </button>
</div>
</div>

<div className="flex items-center justify-between" id="resultInfo">
<div className="text-xs text-slate-500">
                  Showing <span className="font-medium text-slate-700" id="resultCount">0</span> reports
                  <span className="hidden sm:inline">for</span>
<span className="hidden sm:inline text-slate-700" id="contextRole"></span>
<span className="hidden sm:inline text-slate-700" id="contextBL"></span>
</div>
<div className="text-xs text-sky-700 bg-sky-50 border border-sky-200 rounded-md px-2 py-1">
                  Tip: Press “/” to focus search
                </div>
</div>

<div className="space-y-4" id="reportList">

<article className="report-card rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition" data-bl="Sales" data-name="Monthly Sales Overview" data-roles="Executive,Sales Lead,Data Analyst">
<div className="p-4 sm:p-5 flex items-start justify-between gap-4">
<div className="flex-1">
<div className="flex flex-wrap items-center gap-2">
<h3 className="text-lg tracking-tight font-semibold text-slate-900">
                          Monthly Sales Overview
                        </h3>
<span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700 ring-1 ring-blue-100">
<i className="h-3.5 w-3.5" data-lucide="bar-chart-4" strokeWidth="1.5"></i>
                          Sales
                        </span>
<span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-0.5 text-xs text-indigo-700 ring-1 ring-indigo-100">
<i className="h-3.5 w-3.5" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
                          Executive
                        </span>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700 ring-1 ring-emerald-100">
<i className="h-3.5 w-3.5" data-lucide="users" strokeWidth="1.5"></i>
                          Sales Lead
                        </span>
</div>
<p className="mt-1 text-sm text-slate-600">
                        Revenue, pipeline, and conversion health by region.
                      </p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs text-slate-500">Updated: 2 days ago</span>
<span className="text-slate-300">•</span>
<span className="text-xs text-slate-500">Owner: Analytics</span>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<button className="open-report inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-3 py-2 text-sm font-medium hover:bg-blue-700" data-report="Monthly Sales Overview">
<i className="h-4 w-4 mr-1" data-lucide="external-link" strokeWidth="1.5"></i>
                        Open
                      </button>
<div className="flex gap-2">
<button className="issue-btn inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50" data-report="Monthly Sales Overview">
<i className="h-4 w-4 text-amber-500 mr-1" data-lucide="triangle-alert" strokeWidth="1.5"></i>
                          Issue
                        </button>
<button className="suggest-btn inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50" data-report="Monthly Sales Overview">
<i className="h-4 w-4 text-blue-600 mr-1" data-lucide="wand-2" strokeWidth="1.5"></i>
                          Suggest
                        </button>
</div>
</div>
</div>
</article>

<article className="report-card rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition" data-bl="Operations" data-name="Operations Efficiency Dashboard" data-roles="Ops Manager,Executive,Data Analyst">
<div className="p-4 sm:p-5 flex items-start justify-between gap-4">
<div className="flex-1">
<div className="flex flex-wrap items-center gap-2">
<h3 className="text-lg tracking-tight font-semibold text-slate-900">
                          Operations Efficiency Dashboard
                        </h3>
<span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700 ring-1 ring-blue-100">
<i className="h-3.5 w-3.5" data-lucide="factory" strokeWidth="1.5"></i>
                          Operations
                        </span>
<span className="inline-flex items-center gap-1 rounded-full bg-purple-50 px-2 py-0.5 text-xs text-purple-700 ring-1 ring-purple-100">
<i className="h-3.5 w-3.5" data-lucide="gauge" strokeWidth="1.5"></i>
                          Ops Manager
                        </span>
</div>
<p className="mt-1 text-sm text-slate-600">
                        Throughput, cycle time, and bottleneck analysis for ops.
                      </p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs text-slate-500">Updated: 1 week ago</span>
<span className="text-slate-300">•</span>
<span className="text-xs text-slate-500">Owner: Ops BI</span>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<button className="open-report inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-3 py-2 text-sm font-medium hover:bg-blue-700" data-report="Operations Efficiency Dashboard">
<i className="h-4 w-4 mr-1" data-lucide="external-link" strokeWidth="1.5"></i>
                        Open
                      </button>
<div className="flex gap-2">
<button className="issue-btn inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50" data-report="Operations Efficiency Dashboard">
<i className="h-4 w-4 text-amber-500 mr-1" data-lucide="triangle-alert" strokeWidth="1.5"></i>
                          Issue
                        </button>
<button className="suggest-btn inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50" data-report="Operations Efficiency Dashboard">
<i className="h-4 w-4 text-blue-600 mr-1" data-lucide="wand-2" strokeWidth="1.5"></i>
                          Suggest
                        </button>
</div>
</div>
</div>
</article>

<article className="report-card rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition" data-bl="Marketing" data-name="Marketing Funnel Insights" data-roles="Executive,Sales Lead,Data Analyst">
<div className="p-4 sm:p-5 flex items-start justify-between gap-4">
<div className="flex-1">
<div className="flex flex-wrap items-center gap-2">
<h3 className="text-lg tracking-tight font-semibold text-slate-900">
                          Marketing Funnel Insights
                        </h3>
<span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700 ring-1 ring-blue-100">
<i className="h-3.5 w-3.5" data-lucide="megaphone" strokeWidth="1.5"></i>
                          Marketing
                        </span>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700 ring-1 ring-emerald-100">
<i className="h-3.5 w-3.5" data-lucide="users" strokeWidth="1.5"></i>
                          Sales Lead
                        </span>
</div>
<p className="mt-1 text-sm text-slate-600">
                        Channel performance, CAC, and campaign ROI.
                      </p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs text-slate-500">Updated: 3 days ago</span>
<span className="text-slate-300">•</span>
<span className="text-xs text-slate-500">Owner: Growth Analytics</span>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<button className="open-report inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-3 py-2 text-sm font-medium hover:bg-blue-700" data-report="Marketing Funnel Insights">
<i className="h-4 w-4 mr-1" data-lucide="external-link" strokeWidth="1.5"></i>
                        Open
                      </button>
<div className="flex gap-2">
<button className="issue-btn inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50" data-report="Marketing Funnel Insights">
<i className="h-4 w-4 text-amber-500 mr-1" data-lucide="triangle-alert" strokeWidth="1.5"></i>
                          Issue
                        </button>
<button className="suggest-btn inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50" data-report="Marketing Funnel Insights">
<i className="h-4 w-4 text-blue-600 mr-1" data-lucide="wand-2" strokeWidth="1.5"></i>
                          Suggest
                        </button>
</div>
</div>
</div>
</article>

<article className="report-card rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition" data-bl="Finance" data-name="Financial Performance Summary" data-roles="Executive,Data Analyst">
<div className="p-4 sm:p-5 flex items-start justify-between gap-4">
<div className="flex-1">
<div className="flex flex-wrap items-center gap-2">
<h3 className="text-lg tracking-tight font-semibold text-slate-900">
                          Financial Performance Summary
                        </h3>
<span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700 ring-1 ring-blue-100">
<i className="h-3.5 w-3.5" data-lucide="banknote" strokeWidth="1.5"></i>
                          Finance
                        </span>
<span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2 py-0.5 text-xs text-rose-700 ring-1 ring-rose-100">
<i className="h-3.5 w-3.5" data-lucide="sparkle" strokeWidth="1.5"></i>
                          Executive
                        </span>
</div>
<p className="mt-1 text-sm text-slate-600">
                        P&amp;L, cash flow, and profitability trends.
                      </p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs text-slate-500">Updated: Today</span>
<span className="text-slate-300">•</span>
<span className="text-xs text-slate-500">Owner: FP&amp;A</span>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<button className="open-report inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-3 py-2 text-sm font-medium hover:bg-blue-700" data-report="Financial Performance Summary">
<i className="h-4 w-4 mr-1" data-lucide="external-link" strokeWidth="1.5"></i>
                        Open
                      </button>
<div className="flex gap-2">
<button className="issue-btn inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50" data-report="Financial Performance Summary">
<i className="h-4 w-4 text-amber-500 mr-1" data-lucide="triangle-alert" strokeWidth="1.5"></i>
                          Issue
                        </button>
<button className="suggest-btn inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50" data-report="Financial Performance Summary">
<i className="h-4 w-4 text-blue-600 mr-1" data-lucide="wand-2" strokeWidth="1.5"></i>
                          Suggest
                        </button>
</div>
</div>
</div>
</article>

<div className="hidden rounded-xl border border-dashed border-slate-300 p-8 text-center" id="emptyState">
<div className="mx-auto mb-2 h-12 w-12 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center">
<i className="h-6 w-6 text-blue-600" data-lucide="search-x" strokeWidth="1.5"></i>
</div>
<h4 className="text-base font-semibold tracking-tight text-slate-900">No reports found</h4>
<p className="text-sm text-slate-600">Try adjusting filters or request a new report.</p>
<div className="mt-3">
<button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-3.5 py-2 text-sm font-medium hover:bg-blue-700" id="emptyRequest">
<i className="h-4 w-4" data-lucide="file-plus-2" strokeWidth="1.5"></i>
                      Request a report
                    </button>
</div>
</div>

<div className="flex items-center justify-center gap-2 pt-2">
<button className="h-9 w-9 rounded-md border border-slate-200 text-sm text-slate-600 hover:bg-slate-50">1</button>
<button className="h-9 w-9 rounded-md border border-slate-200 text-sm text-slate-600 hover:bg-slate-50">2</button>
<button className="h-9 w-9 rounded-md border border-slate-200 text-sm text-slate-600 hover:bg-slate-50">3</button>
</div>
</div>
</div>

<aside className="lg:col-span-4">
<div className="sticky top-4">
<div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm">

<div className="relative">
<img alt="report preview" className="h-40 w-full object-cover" id="selectedImage" src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
<div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
<div>
<p className="text-xs text-white/80">Selected report</p>
<h4 className="text-base tracking-tight font-semibold text-white" id="selectedTitle">
                          Monthly Sales Overview
                        </h4>
</div>
<button className="inline-flex items-center gap-1 rounded-lg bg-white/90 backdrop-blur px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-white hover:outline hover:outline-1 hover:outline-blue-100" id="makeSuggestion">
<i className="h-3.5 w-3.5 text-amber-500" data-lucide="lightbulb" strokeWidth="1.5"></i>
                        Suggest
                      </button>
</div>
</div>

<div className="px-4 pt-3">
<div className="flex items-center gap-2">
<button className="tab-btn inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700" data-tab="purpose">
<i className="h-4 w-4 text-blue-600" data-lucide="target" strokeWidth="1.5"></i>
                        Purpose
                      </button>
<button className="tab-btn inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50" data-tab="howto">
<i className="h-4 w-4 text-blue-600" data-lucide="book-open-check" strokeWidth="1.5"></i>
                        How to use
                      </button>
<button className="tab-btn ml-auto inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50" data-tab="access">
<i className="h-4 w-4 text-blue-600" data-lucide="lock" strokeWidth="1.5"></i>
                        Access &amp; Roles
                      </button>
</div>
</div>

<div className="p-4 space-y-4">
<div className="tab-panel space-y-3" id="tab-purpose">
<p className="text-sm text-slate-700" id="purposeText">
                        Track performance against targets, identify regional trends, and highlight risks requiring action.
                      </p>
<ul className="text-sm text-slate-600 list-disc pl-5 space-y-1" id="purposeBullets">
<li>KPIs: Revenue, Pipeline, Conversion</li>
<li>Grain: Monthly, Region, Segment</li>
<li>Refresh: Daily at 06:00 UTC</li>
</ul>
<div className="rounded-lg border border-slate-200 p-3">
<div className="flex items-center justify-between">
<div>
<h2 className="text-sm font-medium text-slate-700">
                              Trend Preview
                            </h2>
<p className="text-xs text-slate-500">Last 6 months</p>
</div>
<div className="text-xs text-slate-500">Sample</div>
</div>

<div className="mt-3 h-16 w-full relative">
<div className="absolute inset-0 flex items-end gap-1">
<div className="w-full h-5 bg-blue-100 rounded"></div>
<div className="w-full h-8 bg-blue-200 rounded"></div>
<div className="w-full h-10 bg-blue-300 rounded"></div>
<div className="w-full h-7 bg-blue-200 rounded"></div>
<div className="w-full h-12 bg-blue-400 rounded"></div>
<div className="w-full h-9 bg-blue-300 rounded"></div>
</div>
</div>
</div>
</div>
<div className="tab-panel hidden space-y-3" id="tab-howto">
<ol className="text-sm text-slate-700 list-decimal pl-5 space-y-1" id="howtoList">
<li>Use the date filter to select a month or range.</li>
<li>Drill into regions to compare conversion rates.</li>
<li>Export CSV from the overflow menu for ad-hoc analysis.</li>
</ol>
<div className="rounded-lg border border-blue-200 bg-blue-50 p-3 text-xs text-blue-700">
<i className="inline-block mr-1 h-4 w-4" data-lucide="info" strokeWidth="1.5"></i>
                        Tip: Hover KPI cards in the report for definition and formula.
                      </div>
</div>
<div className="tab-panel hidden space-y-3" id="tab-access">
<div className="flex items-center gap-2 text-sm">
<i className="h-4 w-4 text-emerald-600" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="text-slate-700">Accessible to:</span>
<div className="flex flex-wrap gap-1" id="accessChips">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700 ring-1 ring-slate-200">Executive</span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700 ring-1 ring-slate-200">Sales Lead</span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700 ring-1 ring-slate-200">Data Analyst</span>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-3 text-sm">
<div className="flex items-center justify-between">
<div className="text-slate-700">
                            Need access?
                          </div>
<button className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50" id="contactOwner">
<i className="h-3.5 w-3.5 text-blue-600" data-lucide="mail" strokeWidth="1.5"></i>
                            Contact owner
                          </button>
</div>
<p className="mt-1 text-xs text-slate-500">Owner: Analytics</p>
</div>
</div>
</div>

<div className="px-4 pb-4">
<div className="flex flex-col sm:flex-row gap-2">
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 text-white px-3 py-2 text-sm font-medium hover:bg-blue-700 flex-1" href="#">
<i className="h-4 w-4" data-lucide="external-link" strokeWidth="1.5"></i>
                        Open Report
                      </a>
<button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 flex-1" id="panelIssueBtn">
<i className="h-4 w-4 text-amber-500" data-lucide="triangle-alert" strokeWidth="1.5"></i>
                        Report Issue
                      </button>
<button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 flex-1" id="panelSuggestBtn">
<i className="h-4 w-4 text-blue-600" data-lucide="wand-2" strokeWidth="1.5"></i>
                        Make Suggestion
                      </button>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>
</main>
</div>

<div className="fixed inset-0 z-40 hidden" id="issueModal">
<div className="absolute inset-0 bg-slate-900/40"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="w-full max-w-lg rounded-xl bg-white shadow-xl border border-slate-200">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-600" data-lucide="bug" strokeWidth="1.5"></i>
<h3 className="text-base tracking-tight font-semibold text-slate-900">
                Report Issue
              </h3>
</div>
<button className="rounded-md p-1 hover:bg-slate-50" data-close="issueModal">
<i className="h-5 w-5 text-slate-500" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<form className="p-4 space-y-3" id="issueForm">
<div>
<label className="text-xs text-slate-600">Report</label>
<input className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500" id="issueReportName" readonly=""/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="text-xs text-slate-600">Severity</label>
<select className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500">
<option>Low</option>
<option>Medium</option>
<option>High</option>
</select>
</div>
<div>
<label className="text-xs text-slate-600">Category</label>
<select className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500">
<option>Data mismatch</option>
<option>Access/Permissions</option>
<option>Performance</option>
<option>Other</option>
</select>
</div>
</div>
<div>
<label className="text-xs text-slate-600">Details</label>
<textarea className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500" placeholder="Describe the issue, steps to reproduce, expected vs actual" rows="4"></textarea>
</div>
<div className="flex items-center justify-between">
<label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
<i className="h-4 w-4 text-slate-500" data-lucide="paperclip" strokeWidth="1.5"></i>
<span className="underline decoration-dotted">Attach screenshot</span>
<input className="hidden" type="file"/>
</label>
<button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-3 py-2 text-sm font-medium hover:bg-blue-700" type="submit">
<i className="h-4 w-4" data-lucide="send" strokeWidth="1.5"></i>
                Submit
              </button>
</div>
</form>
</div>
</div>
</div>

<div className="fixed inset-0 z-40 hidden" id="suggestModal">
<div className="absolute inset-0 bg-slate-900/40"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="w-full max-w-lg rounded-xl bg-white shadow-xl border border-slate-200">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-600" data-lucide="wand-2" strokeWidth="1.5"></i>
<h3 className="text-base tracking-tight font-semibold text-slate-900">
                Suggest an Update
              </h3>
</div>
<button className="rounded-md p-1 hover:bg-slate-50" data-close="suggestModal">
<i className="h-5 w-5 text-slate-500" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<form className="p-4 space-y-3" id="suggestForm">
<div>
<label className="text-xs text-slate-600">Report</label>
<input className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500" id="suggestReportName" readonly=""/>
</div>
<div>
<label className="text-xs text-slate-600">What would you improve?</label>
<textarea className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500" placeholder="Fields, filters, visuals, frequency, access, etc." rows="4"></textarea>
</div>
<div className="flex items-center justify-between">
<div className="text-xs text-slate-500">Your suggestion goes to the report owner</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-3 py-2 text-sm font-medium hover:bg-blue-700" type="submit">
<i className="h-4 w-4" data-lucide="send" strokeWidth="1.5"></i>
                Send
              </button>
</div>
</form>
</div>
</div>
</div>

<div className="fixed inset-0 z-40 hidden" id="requestModal">
<div className="absolute inset-0 bg-slate-900/40"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="w-full max-w-2xl rounded-xl bg-white shadow-xl border border-slate-200">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-600" data-lucide="file-plus-2" strokeWidth="1.5"></i>
<h3 className="text-base tracking-tight font-semibold text-slate-900">
                Request a New Report
              </h3>
</div>
<button className="rounded-md p-1 hover:bg-slate-50" data-close="requestModal">
<i className="h-5 w-5 text-slate-500" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<form className="p-4 space-y-4" id="requestForm">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="text-xs text-slate-600">Proposed Name</label>
<input className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500" placeholder="e.g., Customer Churn Monitor" required=""/>
</div>
<div>
<label className="text-xs text-slate-600">Business Line</label>
<select className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500" required="">
<option value="">Select...</option>
<option>Sales</option>
<option>Operations</option>
<option>Finance</option>
<option>Marketing</option>
</select>
</div>
</div>
<div>
<label className="text-xs text-slate-600">Purpose</label>
<textarea className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500" placeholder="Describe the business question and decisions this report supports" required="" rows="3"></textarea>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div>
<label className="text-xs text-slate-600">Refresh</label>
<select className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500">
<option>Daily</option>
<option>Hourly</option>
<option>Weekly</option>
<option>Monthly</option>
</select>
</div>
<div>
<label className="text-xs text-slate-600">Audience Roles</label>
<input className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500" placeholder="e.g., Executive, Data Analyst"/>
</div>
<div>
<label className="text-xs text-slate-600">Urgency</label>
<select className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500">
<option>Low</option>
<option>Medium</option>
<option>High</option>
</select>
</div>
</div>
<div>
<label className="text-xs text-slate-600">Key Metrics / Fields</label>
<textarea className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500" placeholder="List the KPIs, dimensions, filters needed" rows="3"></textarea>
</div>
<div className="flex items-center justify-between">
<label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
<i className="h-4 w-4 text-slate-500" data-lucide="paperclip" strokeWidth="1.5"></i>
<span className="underline decoration-dotted">Attach requirements doc</span>
<input className="hidden" type="file"/>
</label>
<button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-3 py-2 text-sm font-medium hover:bg-blue-700" type="submit">
<i className="h-4 w-4" data-lucide="send" strokeWidth="1.5"></i>
                Submit Request
              </button>
</div>
</form>
</div>
</div>
</div>

<div className="fixed inset-y-0 right-0 w-full sm:w-[420px] z-40 translate-x-full transition-transform" id="supportDrawer">
<div className="absolute inset-0 bg-slate-900/20 sm:bg-transparent pointer-events-none"></div>
<div className="relative h-full bg-white border-l border-slate-200 shadow-xl">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-600" data-lucide="life-buoy" strokeWidth="1.5"></i>
<h3 className="text-base tracking-tight font-semibold text-slate-900">Support</h3>
</div>
<button className="rounded-md p-1 hover:bg-slate-50" id="closeSupport">
<i className="h-5 w-5 text-slate-500" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="h-[calc(100%-52px)] flex flex-col">

<div className="px-4 py-3 flex gap-2">
<button className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50">
<i className="h-3.5 w-3.5 text-blue-600" data-lucide="book-open" strokeWidth="1.5"></i>
              Help Center
            </button>
<button className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50">
<i className="h-3.5 w-3.5 text-blue-600" data-lucide="mail" strokeWidth="1.5"></i>
              Email BI
            </button>
<button className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50">
<i className="h-3.5 w-3.5 text-blue-600" data-lucide="message-circle" strokeWidth="1.5"></i>
              Chat
            </button>
</div>

<div className="flex-1 overflow-y-auto px-4 py-3 space-y-3" id="supportMessages">
<div className="flex gap-2">
<img alt="agent" className="h-7 w-7 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                Hi Linh! How can we help with your reports today?
              </div>
</div>
</div>

<div className="border-t border-slate-200 p-3">
<div className="flex items-center gap-2">
<input className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500" id="supportInput" placeholder="Type your message..."/>
<button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-3 py-2 text-sm font-medium hover:bg-blue-700" id="supportSend">
<i className="h-4 w-4" data-lucide="send" strokeWidth="1.5"></i>
                Send
              </button>
</div>
</div>
</div>
</div>
</div>

<div className="pointer-events-none fixed inset-x-0 bottom-4 flex justify-center z-50 hidden" id="toast">
<div className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white/90 text-sm px-3 py-2 shadow-lg">
<i className="h-4 w-4 text-emerald-400" data-lucide="check-circle" strokeWidth="1.5"></i>
<span id="toastMsg">Saved</span>
</div>
</div>



    </>
  );
}
