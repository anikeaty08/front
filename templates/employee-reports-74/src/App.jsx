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



    // Initialize icons
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    });

    // Sidebar mobile toggle
    const sidebar = document.getElementById('sidebar');
    const mobileToggle = document.getElementById('mobileToggle');
    if (mobileToggle) {
      mobileToggle.addEventListener('click', () => {
        const isOpen = sidebar.classList.contains('hidden');
        sidebar.classList.toggle('hidden', !isOpen);
        sidebar.classList.toggle('absolute', isOpen);
        sidebar.classList.toggle('z-40', isOpen);
        sidebar.classList.toggle('h-full', isOpen);
        sidebar.classList.toggle('bg-white', isOpen);
        sidebar.classList.toggle('w-72', true);
      });
    }

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Employees dataset (example)
    const EMPLOYEES = [
      { name: 'Misbah Salam', department: 'Management' },
      { name: 'Ayesha Khan', department: 'Marketing' },
      { name: 'Imran Patel', department: 'Design' },
      { name: 'Sara Ahmed', department: 'Development' },
      { name: 'Usman Tariq', department: 'Development' },
      { name: 'Noor Fatima', department: 'Marketing' },
    ];

    // Combobox
    const employeeSelector = document.getElementById('employeeSelector');
    const employeeDropdown = document.getElementById('employeeDropdown');
    const employeeSearch = document.getElementById('employeeSearch');
    const employeeList = document.getElementById('employeeList');
    const employeeValue = document.getElementById('employeeValue');
    const employeeSelectedLabel = document.getElementById('employeeSelectedLabel');

    function renderEmployeeList(filter = '') {
      employeeList.innerHTML = '';
      const q = filter.trim().toLowerCase();
      const filtered = EMPLOYEES.filter(e => e.name.toLowerCase().includes(q) || e.department.toLowerCase().includes(q));
      if (!filtered.length) {
        const li = document.createElement('li');
        li.className = 'px-3 py-2 text-sm text-gray-500';
        li.textContent = 'No matches';
        employeeList.appendChild(li);
        return;
      }
      filtered.forEach((e) => {
        const li = document.createElement('li');
        li.className = 'flex cursor-pointer items-center justify-between px-3 py-2 hover:bg-gray-50';
        li.innerHTML = `
          <div class="flex items-center gap-2">
            <div class="h-6 w-6 rounded-full bg-gray-100 ring-1 ring-gray-200 flex items-center justify-center text-[10px] font-medium text-gray-700">${e.name.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase()}</div>
            <div class="flex flex-col">
              <span class="text-sm text-gray-800">${e.name}</span>
              <span class="text-xs text-gray-500">${e.department}</span>
            </div>
          </div>
          <i data-lucide="plus" class="h-4 w-4 text-gray-400"></i>
        `;
        li.addEventListener('click', () => {
          employeeValue.value = e.name;
          employeeSelectedLabel.textContent = e.name;
          employeeDropdown.classList.add('hidden');
        });
        employeeList.appendChild(li);
      });
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }

    employeeSelector.addEventListener('click', (e) => {
      e.stopPropagation();
      employeeDropdown.classList.toggle('hidden');
      if (!employeeDropdown.classList.contains('hidden')) {
        employeeSearch.focus();
        renderEmployeeList();
      }
    });
    employeeSearch.addEventListener('input', (e) => renderEmployeeList(e.target.value));
    document.addEventListener('click', (e) => {
      if (!employeeDropdown.contains(e.target) && e.target !== employeeSelector) {
        employeeDropdown.classList.add('hidden');
      }
    });

    // Schedule toggle
    const scheduleToggle = document.getElementById('scheduleToggle');
    const scheduleOptions = document.getElementById('scheduleOptions');
    scheduleToggle.addEventListener('click', () => {
      const pressed = scheduleToggle.getAttribute('aria-pressed') === 'true';
      scheduleToggle.setAttribute('aria-pressed', String(!pressed));
      // Visual states
      if (!pressed) {
        scheduleToggle.classList.remove('bg-gray-100');
        scheduleToggle.classList.add('bg-[#F0781F]');
        scheduleToggle.querySelector('.dot').classList.remove('translate-x-1');
        scheduleToggle.querySelector('.dot').classList.add('translate-x-6');
      } else {
        scheduleToggle.classList.add('bg-gray-100');
        scheduleToggle.classList.remove('bg-[#F0781F]');
        scheduleToggle.querySelector('.dot').classList.add('translate-x-1');
        scheduleToggle.querySelector('.dot').classList.remove('translate-x-6');
      }
      scheduleOptions.classList.toggle('hidden', pressed);
    });

    // Generate & Reset
    const generateBtn = document.getElementById('generateBtn');
    const resetBtn = document.getElementById('resetBtn');
    const reportSummary = document.getElementById('reportSummary');
    const reportTableBody = document.getElementById('reportTableBody');
    const summaryNotes = document.getElementById('summaryNotes');
    const summaryMeta = document.getElementById('summaryMeta');
    const lastGenerated = document.getElementById('lastGenerated');

    const reportType = document.getElementById('reportType');
    const dateFrom = document.getElementById('dateFrom');
    const dateTo = document.getElementById('dateTo');
    const department = document.getElementById('department');
    const frequency = document.getElementById('frequency');

    function formatDate(d) {
      const dt = new Date(d);
      if (isNaN(dt)) return d;
      return dt.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' });
    }

    function generateMockRow(name, dept) {
      // Simple mock data
      const breakthrough = Math.floor(Math.random() * 5) + 1;
      const breakdown = Math.floor(Math.random() * 5);
      const totalTasks = breakthrough + breakdown + Math.floor(Math.random() * 5) + 1;
      const onTime = Math.random() > 0.5 ? 'Yes' : 'No';
      const submission = Math.random() > 0.5 ? 'Yes' : 'No';
      const week = 28 + Math.floor(Math.random() * 10);
      const date = new Date(dateTo.value || Date.now());
      const dateStr = date.toISOString().split('T')[0].split('-').reverse().join('-');
      return { name, dept, breakthrough, breakdown, totalTasks, onTime, submission, week, date: dateStr };
    }

    function renderTable(rows) {
      reportTableBody.innerHTML = '';
      rows.forEach(r => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50';
        tr.innerHTML = `
          <td class="px-5 py-3">
            <div class="flex items-center gap-3">
              <div class="h-8 w-8 rounded-full bg-gray-100 ring-1 ring-gray-200 flex items-center justify-center text-[11px] font-medium text-gray-700">${r.name.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase()}</div>
              <div class="text-sm text-gray-900">${r.name}</div>
            </div>
          </td>
          <td class="px-3 py-3 text-gray-700">${r.dept}</td>
          <td class="px-3 py-3">
            <span class="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-[12px] font-medium text-emerald-700 ring-1 ring-inset ring-emerald-100">${r.breakthrough}</span>
          </td>
          <td class="px-3 py-3">
            <span class="inline-flex items-center gap-1 rounded-md bg-rose-50 px-2 py-1 text-[12px] font-medium text-rose-700 ring-1 ring-inset ring-rose-100">${r.breakdown}</span>
          </td>
          <td class="px-3 py-3 text-gray-900">${r.totalTasks}</td>
          <td class="px-3 py-3">
            <span class="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[12px] font-medium ${r.onTime==='Yes' ? 'bg-emerald-50 text-emerald-700 ring-emerald-100' : 'bg-amber-50 text-amber-700 ring-amber-100'} ring-1 ring-inset">${r.onTime}</span>
          </td>
          <td class="px-3 py-3">
            <span class="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[12px] font-medium ${r.submission==='Yes' ? 'bg-emerald-50 text-emerald-700 ring-emerald-100' : 'bg-rose-50 text-rose-700 ring-rose-100'} ring-1 ring-inset">${r.submission}</span>
          </td>
          <td class="px-3 py-3 text-gray-900">${r.week}</td>
          <td class="px-3 py-3 text-gray-900">${r.date}</td>
        `;
        reportTableBody.appendChild(tr);
      });
    }

    generateBtn.addEventListener('click', () => {
      const selEmp = employeeValue.value || 'Misbah Salam';
      const selDept = department.value || (EMPLOYEES.find(e => e.name === selEmp)?.department || 'Management');
      // Create 1-3 rows
      const rows = [generateMockRow(selEmp, selDept)];
      if (Math.random() > 0.6) rows.push(generateMockRow('Ayesha Khan', 'Marketing'));
      if (Math.random() > 0.75) rows.push(generateMockRow('Imran Patel', 'Design'));
      renderTable(rows);

      const totalBT = rows.reduce((a, r) => a + r.breakthrough, 0);
      const totalBD = rows.reduce((a, r) => a + r.breakdown, 0);
      summaryNotes.textContent = `${totalBD} BreakDowns, ${totalBT} BreakThroughs recorded for the selected period.`;
      summaryMeta.textContent = `For: ${selEmp || '—'} • ${reportType.value} • ${formatDate(dateFrom.value)} → ${formatDate(dateTo.value)} • ${frequency.value}`;
      lastGenerated.textContent = new Date().toLocaleString();

      reportSummary.classList.remove('hidden');
      reportSummary.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    resetBtn.addEventListener('click', () => {
      employeeValue.value = '';
      employeeSelectedLabel.textContent = 'Select Employee';
      reportType.value = 'Basic Report';
      dateFrom.value = '2025-11-01';
      dateTo.value = '2025-11-30';
      department.value = '';
      frequency.value = 'Weekly';
      if (scheduleToggle.getAttribute('aria-pressed') === 'true') scheduleToggle.click();
      document.getElementById('headerSearch').value = '';
      reportSummary.classList.add('hidden');
      reportTableBody.innerHTML = '';
      summaryNotes.textContent = '—';
      summaryMeta.textContent = 'For: —';
      lastGenerated.textContent = '—';
    });

    // Header search: quick select employee if matched
    const headerSearch = document.getElementById('headerSearch');
    headerSearch.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      const match = EMPLOYEES.find(emp => emp.name.toLowerCase().includes(q));
      if (match) {
        employeeValue.value = match.name;
        employeeSelectedLabel.textContent = match.name;
      }
    });

    // Download button bindings (mock)
    function notifyDownload(kind) {
      const msg = `Preparing ${kind} with current filters...`;
      // Simple toast
      const toast = document.createElement('div');
      toast.className = 'fixed bottom-4 right-4 z-50 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-800 shadow-lg';
      toast.textContent = msg;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 1800);
    }
    document.getElementById('topDownloadPdf').addEventListener('click', () => notifyDownload('PDF'));
    document.getElementById('topDownloadExcel').addEventListener('click', () => notifyDownload('Excel'));
    document.getElementById('downloadPdfTop').addEventListener('click', () => notifyDownload('PDF'));
    document.getElementById('downloadExcelTop').addEventListener('click', () => notifyDownload('Excel'));
    document.getElementById('downloadPdf').addEventListener('click', () => notifyDownload('PDF'));
    document.getElementById('downloadExcel').addEventListener('click', () => notifyDownload('Excel'));

    // Seed employee list
    renderEmployeeList();
  
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
      

<div className="flex min-h-screen">

<aside className="hidden md:flex w-72 shrink-0 flex-col border-r border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60" id="sidebar">
<div className="flex items-center gap-3 px-5 py-4">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gray-900 text-white text-sm font-semibold tracking-tight">TM</div>
<div className="flex flex-col">
<span className="text-[15px] font-semibold tracking-tight text-gray-900">TaskMagics</span>
<span className="text-xs text-gray-500">Reports</span>
</div>
</div>
<div className="px-5">
<div className="h-px bg-gray-200"></div>
</div>
<nav className="mt-3 flex-1 px-3">
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" href="#">
<i className="h-4 w-4 text-gray-400 group-hover:text-gray-600" data-lucide="layout-grid"></i>
<span>Dashboard</span>
</a>
<a className="group mt-1 flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" href="#">
<i className="h-4 w-4 text-gray-400 group-hover:text-gray-600" data-lucide="check-square"></i>
<span>Tasks</span>
</a>
<a className="group mt-1 flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-900 bg-gray-100 ring-1 ring-inset ring-gray-200" href="#">
<i className="h-4 w-4 text-gray-700" data-lucide="file-bar-chart"></i>
<span className="font-medium">Reports</span>
</a>
<a className="group mt-1 flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" href="#">
<i className="h-4 w-4 text-gray-400 group-hover:text-gray-600" data-lucide="users"></i>
<span>Employees</span>
</a>
<a className="group mt-1 flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" href="#">
<i className="h-4 w-4 text-gray-400 group-hover:text-gray-600" data-lucide="settings"></i>
<span>Settings</span>
</a>
</nav>
<div className="mt-auto p-4">
<div className="rounded-xl border border-gray-200 bg-white p-3">
<div className="flex items-center justify-between">
<div className="text-xs text-gray-500">Last generated</div>
<div className="text-xs font-medium text-gray-700">Nov 1, 2025</div>
</div>
</div>
</div>
</aside>

<div className="flex min-w-0 flex-1 flex-col">

<div className="sticky top-0 z-30 flex md:hidden items-center justify-between gap-3 border-b border-gray-200 bg-white/80 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/60">
<button className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900" id="mobileToggle">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
<div className="text-sm font-semibold tracking-tight text-gray-900">Employee Reports</div>
<div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white text-[11px] font-semibold tracking-tight">TM</div>
</div>

<header className="flex w-full items-start justify-between gap-4 border-b border-gray-200 bg-white/70 px-6 py-5 backdrop-blur supports-[backdrop-filter]:bg-white/60">
<div>
<h1 className="text-[22px] sm:text-[24px] font-semibold tracking-tight text-gray-900">Employee Reports</h1>
<p className="mt-1 text-sm text-gray-600">Generate and download performance and activity reports.</p>
</div>
<div className="flex items-center gap-3">

<div className="hidden sm:flex w-64 items-center rounded-lg border border-gray-200 bg-white px-2.5 py-2 shadow-sm focus-within:ring-2 focus-within:ring-orange-200">
<i className="mr-2 h-4 w-4 text-gray-400" data-lucide="search"></i>
<input className="w-full text-sm placeholder-gray-400 outline-none" id="headerSearch" placeholder="Search by employee name" type="text"/>
</div>

<details className="relative group">
<summary className="list-none">
<button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 hover:border-gray-300">
<i className="h-4 w-4 text-gray-600" data-lucide="download"></i>
<span>Download</span>
<i className="h-4 w-4 text-gray-500" data-lucide="chevron-down"></i>
</button>
</summary>
<div className="absolute right-0 z-40 mt-2 w-44 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
<button className="flex w-full items-center gap-2 px-3 py-2.5 text-sm text-gray-800 hover:bg-gray-50" id="topDownloadPdf">
<i className="h-4 w-4 text-gray-600" data-lucide="file-down"></i> Download PDF
              </button>
<button className="flex w-full items-center gap-2 px-3 py-2.5 text-sm text-gray-800 hover:bg-gray-50" id="topDownloadExcel">
<i className="h-4 w-4 text-gray-600" data-lucide="file-spreadsheet"></i> Export Excel
              </button>
</div>
</details>
</div>
</header>

<main className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-6">

<section className="rounded-2xl border border-gray-200 bg-white shadow-sm">
<div className="flex items-center justify-between border-b border-gray-200 px-4 sm:px-5 py-3">
<div className="inline-flex items-center gap-2">
<i className="h-4 w-4 text-gray-500" data-lucide="sliders-horizontal"></i>
<h2 className="text-[15px] font-medium text-gray-900 tracking-tight">Filters</h2>
</div>
<div className="hidden sm:flex items-center gap-3">
<div className="group relative">
<i className="h-4 w-4 text-gray-400" data-lucide="info"></i>
<div className="pointer-events-none absolute -right-3 top-6 z-20 hidden min-w-[220px] rounded-md border border-gray-200 bg-white px-3 py-2 text-xs text-gray-700 shadow-md group-hover:block">Filters help narrow down the report scope. You can save your selections by generating the report.</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">

<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-gray-700">Select Employee</label>
<div className="relative">
<button className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-200" id="employeeSelector" type="button">
<div className="inline-flex items-center gap-2">
<i className="h-4 w-4 text-gray-500" data-lucide="user"></i>
<span className="truncate text-gray-600" id="employeeSelectedLabel">Select Employee</span>
</div>
<i className="h-4 w-4 text-gray-500" data-lucide="chevron-down"></i>
</button>
<div className="absolute z-40 mt-1 hidden w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg" id="employeeDropdown">
<div className="flex items-center gap-2 px-2.5 py-2 border-b border-gray-200">
<i className="h-4 w-4 text-gray-400" data-lucide="search"></i>
<input className="w-full text-sm placeholder-gray-400 outline-none" id="employeeSearch" placeholder="Search employees..." type="text"/>
</div>
<ul className="max-h-56 overflow-auto py-1" id="employeeList">

</ul>
</div>
<input id="employeeValue" type="hidden"/>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-gray-700">Report Type</label>
<div className="relative">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" data-lucide="list"></i>
<select className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-9 py-2.5 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200" id="reportType">
<option value="Basic Report">Basic Report</option>
<option value="Task Sheet Summary">Task Sheet Summary</option>
<option value="Attendance Log">Attendance Log</option>
<option value="Breakthrough Analysis">Breakthrough Analysis</option>
</select>
<i className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" data-lucide="chevron-down"></i>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-gray-700">Date Range</label>
<div className="grid grid-cols-2 gap-2">
<div className="relative">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" data-lucide="calendar"></i>
<input className="w-full rounded-lg border border-gray-200 bg-white px-9 py-2.5 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200" id="dateFrom" type="date" value="2025-11-01"/>
</div>
<div className="relative">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" data-lucide="calendar"></i>
<input className="w-full rounded-lg border border-gray-200 bg-white px-9 py-2.5 text-sm text-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-orange-200" id="dateTo" type="date" value="2025-11-30"/>
</div>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-gray-700">Department</label>
<div className="relative">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" data-lucide="building-2"></i>
<select className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-9 py-2.5 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200" id="department">
<option value="">All Departments</option>
<option>Management</option>
<option>Marketing</option>
<option>Design</option>
<option>Development</option>
</select>
<i className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" data-lucide="chevron-down"></i>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-gray-700">Frequency</label>
<div className="relative">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" data-lucide="clock"></i>
<select className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-9 py-2.5 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200" id="frequency">
<option>Daily</option>
<option selected="">Weekly</option>
<option>Monthly</option>
</select>
<i className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" data-lucide="chevron-down"></i>
</div>
</div>

<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-gray-700">Auto-schedule Reports</label>
<button aria-pressed="false" className="relative inline-flex h-6 w-11 items-center rounded-full border border-gray-200 bg-gray-100 transition-colors" id="scheduleToggle">
<span className="sr-only">Enable auto schedule</span>
<span className="dot translate-x-1 inline-block h-4 w-4 rounded-full bg-white shadow ring-1 ring-gray-300 transition-transform"></span>
</button>
</div>
<div className="hidden grid grid-cols-2 gap-2" id="scheduleOptions">
<select className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200" id="scheduleEvery">
<option value="weekly">Weekly</option>
<option value="monthly">Monthly</option>
</select>
<input className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200" id="scheduleTime" type="time" value="09:00"/>
</div>
</div>
</div>

<div className="flex flex-col items-stretch gap-3 border-t border-gray-200 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
<div className="text-xs text-gray-500">
              Tip: You can export directly once a preview is generated.
            </div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-200" id="resetBtn">
<i className="h-4 w-4" data-lucide="rotate-ccw"></i> Reset Filters
              </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-[#F0781F] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[linear-gradient(90deg,#F0781F, #f39554)] hover:shadow focus:outline-none focus:ring-2 focus:ring-orange-200" id="generateBtn">
<i className="h-4 w-4 text-white" data-lucide="sparkles"></i> Generate Report
              </button>
</div>
</div>
</section>

<section className="mt-6 hidden" id="reportSummary">
<div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
<div className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-gray-700" data-lucide="file-text"></i>
<div>
<h3 className="text-[16px] font-semibold tracking-tight text-gray-900">Report Preview</h3>
<p className="text-xs text-gray-600" id="summaryMeta">For: —</p>
</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200" id="downloadPdfTop">
<i className="h-4 w-4 text-gray-700" data-lucide="file-down"></i> Download PDF
                </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200" id="downloadExcelTop">
<i className="h-4 w-4 text-gray-700" data-lucide="file-spreadsheet"></i> Export Excel
                </button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full min-w-[860px] text-left">
<thead className="bg-gray-50">
<tr className="text-xs text-gray-600">
<th className="px-5 py-3 font-medium">Employee</th>
<th className="px-3 py-3 font-medium">Department</th>
<th className="px-3 py-3 font-medium">Breakthrough</th>
<th className="px-3 py-3 font-medium">Breakdown</th>
<th className="px-3 py-3 font-medium">Total Tasks</th>
<th className="px-3 py-3 font-medium">On Time Arrival</th>
<th className="px-3 py-3 font-medium">Submission Status</th>
<th className="px-3 py-3 font-medium">Week</th>
<th className="px-3 py-3 font-medium">Date</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-sm" id="reportTableBody">

</tbody>
</table>
</div>

<div className="grid grid-cols-1 gap-4 border-t border-gray-200 px-5 py-4 lg:grid-cols-3">
<div className="lg:col-span-2">
<div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
<div className="text-xs font-medium text-gray-700 mb-1">Summary Notes</div>
<p className="text-sm text-gray-700" id="summaryNotes">—</p>
</div>

<div className="mt-4 rounded-xl border border-gray-200 bg-white px-4 py-3">
<div className="flex items-center justify-between">
<div className="text-xs font-medium text-gray-700">Breakthrough vs Breakdown</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1 text-xs text-gray-600">
<span className="h-2.5 w-2.5 rounded-sm bg-emerald-500"></span> Breakthrough
                      </div>
<div className="flex items-center gap-1 text-xs text-gray-600">
<span className="h-2.5 w-2.5 rounded-sm bg-rose-500"></span> Breakdown
                      </div>
</div>
</div>
<div className="mt-3 grid grid-cols-7 gap-2">

<div className="flex flex-col justify-end rounded-md border border-gray-100 bg-gray-50 p-1">
<div className="mx-auto w-3 rounded-t-sm bg-emerald-500" style={{height: '28px'}}></div>
<div className="mx-auto mt-0.5 w-3 rounded-t-sm bg-rose-500" style={{height: '16px'}}></div>
</div>
<div className="flex flex-col justify-end rounded-md border border-gray-100 bg-gray-50 p-1">
<div className="mx-auto w-3 rounded-t-sm bg-emerald-500" style={{height: '20px'}}></div>
<div className="mx-auto mt-0.5 w-3 rounded-t-sm bg-rose-500" style={{height: '22px'}}></div>
</div>
<div className="flex flex-col justify-end rounded-md border border-gray-100 bg-gray-50 p-1">
<div className="mx-auto w-3 rounded-t-sm bg-emerald-500" style={{height: '24px'}}></div>
<div className="mx-auto mt-0.5 w-3 rounded-t-sm bg-rose-500" style={{height: '12px'}}></div>
</div>
<div className="flex flex-col justify-end rounded-md border border-gray-100 bg-gray-50 p-1">
<div className="mx-auto w-3 rounded-t-sm bg-emerald-500" style={{height: '14px'}}></div>
<div className="mx-auto mt-0.5 w-3 rounded-t-sm bg-rose-500" style={{height: '26px'}}></div>
</div>
<div className="flex flex-col justify-end rounded-md border border-gray-100 bg-gray-50 p-1">
<div className="mx-auto w-3 rounded-t-sm bg-emerald-500" style={{height: '18px'}}></div>
<div className="mx-auto mt-0.5 w-3 rounded-t-sm bg-rose-500" style={{height: '14px'}}></div>
</div>
<div className="flex flex-col justify-end rounded-md border border-gray-100 bg-gray-50 p-1">
<div className="mx-auto w-3 rounded-t-sm bg-emerald-500" style={{height: '30px'}}></div>
<div className="mx-auto mt-0.5 w-3 rounded-t-sm bg-rose-500" style={{height: '10px'}}></div>
</div>
<div className="flex flex-col justify-end rounded-md border border-gray-100 bg-gray-50 p-1">
<div className="mx-auto w-3 rounded-t-sm bg-emerald-500" style={{height: '12px'}}></div>
<div className="mx-auto mt-0.5 w-3 rounded-t-sm bg-rose-500" style={{height: '20px'}}></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-4">
<div className="text-xs font-medium text-gray-700">Actions</div>
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#F0781F] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[linear-gradient(90deg,#F0781F,#f39554)] hover:shadow focus:outline-none focus:ring-2 focus:ring-orange-200" id="downloadPdf">
<i className="h-4 w-4 text-white" data-lucide="file-down"></i> Download PDF
                </button>
<button className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-200" id="downloadExcel">
<i className="h-4 w-4 text-gray-700" data-lucide="file-spreadsheet"></i> Export Excel
                </button>
<a className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-200" href="#" id="viewDetailed">
<i className="h-4 w-4 text-gray-700" data-lucide="eye"></i> View Detailed Report
                </a>
<div className="mt-2 h-px w-full bg-gray-200"></div>
<div className="flex items-center justify-between text-xs text-gray-600">
<span>Last generated</span>
<span className="font-medium text-gray-800" id="lastGenerated">—</span>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="mt-auto border-t border-gray-200 bg-white/60 px-6 py-3 text-xs text-gray-500">
        © <span id="year"></span> TaskMagics • Employee Reports
      </footer>
</div>
</div>


    </>
  );
}
