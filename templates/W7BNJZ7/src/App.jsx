import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Fade-in animation
    document.querySelectorAll('.fade-in').forEach((el, i) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(14px)';
      const d = parseFloat(el.style.getPropertyValue('--delay') || i * 0.1) * 1000;
      setTimeout(() => {
        el.style.transition = 'opacity 600ms ease-out, transform 600ms ease-out';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, d);
    });

    lucide.createIcons();

    // Charts
    const completionCtx = document.getElementById('completionChart').getContext('2d');
    new Chart(completionCtx, {
      type: 'bar',
      data: {
        labels: ['Acme', 'Globex', 'Umbrella', 'Stark'],
        datasets: [{ label: '% Complete', data: [75, 90, 45, 100], backgroundColor: '#6366F1', borderRadius: 4 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, max: 100, ticks: { color: '#6B7280' }, grid: { color: '#E5E7EB' } },
          x: { ticks: { color: '#6B7280' }, grid: { display: false } }
        },
        plugins: { legend: { display: false } }
      }
    });

    const regionCtx = document.getElementById('regionChart').getContext('2d');
    new Chart(regionCtx, {
      type: 'bar',
      data: {
        labels: ['Acme', 'Globex', 'Umbrella', 'Stark'],
        datasets: [{ label: 'Regions Active', data: [4, 6, 3, 9], backgroundColor: '#A5B4FC', borderRadius: 4 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, ticks: { color: '#6B7280' }, grid: { color: '#E5E7EB' } },
          x: { ticks: { color: '#6B7280' }, grid: { display: false } }
        },
        plugins: { legend: { display: false } }
      }
    });

    // Filters
    const slider = document.getElementById('progressFilter');
    const valueDisplay = document.getElementById('filterValue');
    const entitySelect = document.getElementById('entityFilter');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const entityCards = document.querySelectorAll('[data-progress]');

    let statusFilter = 'all';

    const applyFilters = () => {
      const minProgress = +slider.value;
      const selectedEntity = entitySelect.value;
      valueDisplay.textContent = minProgress + '%';

      entityCards.forEach(card => {
        const progress = +card.dataset.progress;
        const entity = card.dataset.entity;
        const onboarding = progress < 100;
        const matchesProgress = progress >= minProgress;
        const matchesEntity = selectedEntity === 'all' || entity === selectedEntity;
        const matchesStatus = statusFilter === 'all' || (statusFilter === 'onboarding' && onboarding);

        const visible = matchesProgress && matchesEntity && matchesStatus;
        card.style.display = visible ? '' : 'none';
      });
    };

    slider.addEventListener('input', applyFilters);
    entitySelect.addEventListener('change', applyFilters);

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('bg-white', 'text-indigo-600'));
        btn.classList.add('bg-white', 'text-indigo-600');
        statusFilter = btn.dataset.status;
        tabButtons.forEach(b => b.setAttribute('aria-selected', b === btn));
        applyFilters();
      });
    });

    applyFilters(); // initial run
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white border-b border-gray-200 px-6 py-4 flex flex-wrap items-center gap-6 justify-between">
<h1 className="text-3xl tracking-tight font-semibold flex items-center gap-2 fade-in">
<i className="w-8 h-8 text-indigo-600" data-lucide="layout-dashboard"></i>
      Legal Entity Account Activity
    </h1>

<div className="flex flex-wrap items-center gap-4 fade-in" style={{-Delay: '0.1s'}}>

<div className="flex items-center gap-3">
<label className="text-sm font-medium text-gray-700 select-none" htmlFor="progressFilter">Min % Complete</label>
<input className="h-2 w-40 sm:w-48 appearance-none cursor-pointer rounded-lg bg-gray-200 accent-indigo-600" id="progressFilter" max="100" min="0" type="range" value="0"/>
<span className="text-sm font-medium text-indigo-600 w-10 text-right" id="filterValue">0%</span>
</div>

<div className="flex items-center gap-2">
<label className="text-sm font-medium text-gray-700 select-none" htmlFor="entityFilter">Legal Entity</label>
<select className="text-sm font-medium bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-600" id="entityFilter">
<option value="all">All</option>
<option value="Acme Corp">Acme Corp</option>
<option value="Globex Inc">Globex Inc</option>
<option value="Umbrella LLC">Umbrella LLC</option>
<option value="Stark Industries">Stark Industries</option>
</select>
</div>

<div className="flex items-center bg-gray-100 rounded-md overflow-hidden" role="tablist">
<button aria-selected="true" className="tab-btn text-sm font-medium px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" data-status="all">All</button>
<button className="tab-btn text-sm font-medium px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" data-status="onboarding">Onboarding</button>
</div>
</div>
</header>

<main className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 grow">

<section className="fade-in" data-entity="Acme Corp" data-progress="75" style={{-Delay: '0.2s'}}>
<div className="bg-white rounded-lg p-5 border border-gray-200 hover:shadow-md transition h-full flex flex-col">
<div className="flex items-center justify-between">
<h2 className="text-lg font-medium tracking-tight flex items-center gap-2">
<i className="w-5 h-5 text-indigo-600" data-lucide="building-2"></i>Acme Corp
          </h2>
<span className="text-sm text-gray-500">75% Complete</span>
</div>

<div className="mt-4 grid grid-cols-2 gap-3">
<div className="flex items-center justify-between p-2 rounded-md bg-gray-50">
<span className="text-xs font-medium flex items-center gap-1 text-gray-600">
<i className="w-4 h-4 text-indigo-600" data-lucide="map-pin"></i>Regions
            </span>
<span className="text-xs font-medium text-gray-700">4 states</span>
</div>
<div className="flex items-center justify-between p-2 rounded-md bg-gray-50">
<span className="text-xs font-medium flex items-center gap-1 text-gray-600">
<i className="w-4 h-4 text-indigo-600" data-lucide="shield-check"></i>Reg. Agent
            </span>
<span className="text-xs font-medium text-gray-700">3 states</span>
</div>
</div>

<div className="mt-5 space-y-6 flex-1">

<div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium flex items-center gap-1">
<i className="w-4 h-4 text-indigo-600" data-lucide="list-todo"></i>Question Tasks
              </span>
<span className="text-sm text-gray-600">20 (75%)</span>
</div>
<div className="mt-1 h-2 w-full bg-gray-200 rounded-full">
<div className="h-full bg-indigo-600 rounded-full" style={{width: '75%'}}></div>
</div>
<ul className="mt-2 space-y-1 text-xs">
<li className="flex items-center justify-between"><span>doing-business</span><span className="font-medium">5</span></li>
<li className="flex items-center justify-between"><span>sales-tax-nexus</span><span className="font-medium">6</span></li>
<li className="flex items-center justify-between"><span>business-tax-nexus</span><span className="font-medium">4</span></li>
<li className="flex items-center justify-between"><span>has-employees</span><span className="font-medium">5</span></li>
</ul>
</div>

<div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium flex items-center gap-1">
<i className="w-4 h-4 text-indigo-600" data-lucide="file-text"></i>Requirement Tasks
              </span>
<span className="text-sm text-gray-600">12 (60%)</span>
</div>
<div className="mt-1 h-2 w-full bg-gray-200 rounded-full">
<div className="h-full bg-indigo-600 rounded-full" style={{width: '60%'}}></div>
</div>
<ul className="mt-2 space-y-1 text-xs">
<li className="flex items-center justify-between"><span>Payroll</span><span className="font-medium">3</span></li>
<li className="flex items-center justify-between"><span>HR</span><span className="font-medium">2</span></li>
<li className="flex items-center justify-between"><span>Registration</span><span className="font-medium">4</span></li>
<li className="flex items-center justify-between"><span>Tax</span><span className="font-medium">3</span></li>
</ul>
</div>

<div className="mt-auto">
<div className="flex items-center justify-between">
<span className="text-sm font-medium flex items-center gap-1">
<i className="w-4 h-4 text-indigo-600" data-lucide="log-in"></i>Account Logins
              </span>
<span className="text-sm text-gray-600">30 (85% Active)</span>
</div>
<div className="mt-1 h-2 w-full bg-gray-200 rounded-full">
<div className="h-full bg-indigo-600 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
</div>
</div>
</section>

<section className="fade-in" data-entity="Globex Inc" data-progress="90" style={{-Delay: '0.3s'}}>
<div className="bg-white rounded-lg p-5 border border-gray-200 hover:shadow-md transition h-full flex flex-col">
<div className="flex items-center justify-between">
<h2 className="text-lg font-medium tracking-tight flex items-center gap-2">
<i className="w-5 h-5 text-indigo-600" data-lucide="building-2"></i>Globex Inc
          </h2>
<span className="text-sm text-gray-500">90% Complete</span>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="flex items-center justify-between p-2 rounded-md bg-gray-50">
<span className="text-xs font-medium flex items-center gap-1 text-gray-600">
<i className="w-4 h-4 text-indigo-600" data-lucide="map-pin"></i>Regions
            </span>
<span className="text-xs font-medium text-gray-700">6 states</span>
</div>
<div className="flex items-center justify-between p-2 rounded-md bg-gray-50">
<span className="text-xs font-medium flex items-center gap-1 text-gray-600">
<i className="w-4 h-4 text-indigo-600" data-lucide="shield-check"></i>Reg. Agent
            </span>
<span className="text-xs font-medium text-gray-700">5 states</span>
</div>
</div>
<div className="mt-5 space-y-6 flex-1">

<div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium flex items-center gap-1">
<i className="w-4 h-4 text-indigo-600" data-lucide="list-todo"></i>Question Tasks
              </span>
<span className="text-sm text-gray-600">15 (90%)</span>
</div>
<div className="mt-1 h-2 w-full bg-gray-200 rounded-full">
<div className="h-full bg-indigo-600 rounded-full" style={{width: '90%'}}></div>
</div>
<ul className="mt-2 space-y-1 text-xs">
<li className="flex items-center justify-between"><span>doing-business</span><span className="font-medium">4</span></li>
<li className="flex items-center justify-between"><span>sales-tax-nexus</span><span className="font-medium">4</span></li>
<li className="flex items-center justify-between"><span>business-tax-nexus</span><span className="font-medium">3</span></li>
<li className="flex items-center justify-between"><span>has-employees</span><span className="font-medium">4</span></li>
</ul>
</div>

<div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium flex items-center gap-1">
<i className="w-4 h-4 text-indigo-600" data-lucide="file-text"></i>Requirement Tasks
              </span>
<span className="text-sm text-gray-600">8 (80%)</span>
</div>
<div className="mt-1 h-2 w-full bg-gray-200 rounded-full">
<div className="h-full bg-indigo-600 rounded-full" style={{width: '80%'}}></div>
</div>
<ul className="mt-2 space-y-1 text-xs">
<li className="flex items-center justify-between"><span>Payroll</span><span className="font-medium">2</span></li>
<li className="flex items-center justify-between"><span>HR</span><span className="font-medium">1</span></li>
<li className="flex items-center justify-between"><span>Registration</span><span className="font-medium">3</span></li>
<li className="flex items-center justify-between"><span>Tax</span><span className="font-medium">2</span></li>
</ul>
</div>

<div className="mt-auto">
<div className="flex items-center justify-between">
<span className="text-sm font-medium flex items-center gap-1">
<i className="w-4 h-4 text-indigo-600" data-lucide="log-in"></i>Account Logins
              </span>
<span className="text-sm text-gray-600">42 (95% Active)</span>
</div>
<div className="mt-1 h-2 w-full bg-gray-200 rounded-full">
<div className="h-full bg-indigo-600 rounded-full" style={{width: '95%'}}></div>
</div>
</div>
</div>
</div>
</section>

<section className="fade-in" data-entity="Umbrella LLC" data-progress="45" style={{-Delay: '0.4s'}}>
<div className="bg-white rounded-lg p-5 border border-gray-200 hover:shadow-md transition h-full flex flex-col">
<div className="flex items-center justify-between">
<h2 className="text-lg font-medium tracking-tight flex items-center gap-2">
<i className="w-5 h-5 text-indigo-600" data-lucide="building-2"></i>Umbrella LLC
          </h2>
<span className="text-sm text-gray-500">45% Complete</span>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="flex items-center justify-between p-2 rounded-md bg-gray-50">
<span className="text-xs font-medium flex items-center gap-1 text-gray-600">
<i className="w-4 h-4 text-indigo-600" data-lucide="map-pin"></i>Regions
            </span>
<span className="text-xs font-medium text-gray-700">3 states</span>
</div>
<div className="flex items-center justify-between p-2 rounded-md bg-gray-50">
<span className="text-xs font-medium flex items-center gap-1 text-gray-600">
<i className="w-4 h-4 text-indigo-600" data-lucide="shield-check"></i>Reg. Agent
            </span>
<span className="text-xs font-medium text-gray-700">2 states</span>
</div>
</div>
<div className="mt-5 space-y-6 flex-1">

<div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium flex items-center gap-1">
<i className="w-4 h-4 text-indigo-600" data-lucide="list-todo"></i>Question Tasks
              </span>
<span className="text-sm text-gray-600">10 (40%)</span>
</div>
<div className="mt-1 h-2 w-full bg-gray-200 rounded-full">
<div className="h-full bg-indigo-600 rounded-full" style={{width: '40%'}}></div>
</div>
<ul className="mt-2 space-y-1 text-xs">
<li className="flex items-center justify-between"><span>doing-business</span><span className="font-medium">2</span></li>
<li className="flex items-center justify-between"><span>sales-tax-nexus</span><span className="font-medium">3</span></li>
<li className="flex items-center justify-between"><span>business-tax-nexus</span><span className="font-medium">2</span></li>
<li className="flex items-center justify-between"><span>has-employees</span><span className="font-medium">3</span></li>
</ul>
</div>

<div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium flex items-center gap-1">
<i className="w-4 h-4 text-indigo-600" data-lucide="file-text"></i>Requirement Tasks
              </span>
<span className="text-sm text-gray-600">6 (50%)</span>
</div>
<div className="mt-1 h-2 w-full bg-gray-200 rounded-full">
<div className="h-full bg-indigo-600 rounded-full" style={{width: '50%'}}></div>
</div>
<ul className="mt-2 space-y-1 text-xs">
<li className="flex items-center justify-between"><span>Payroll</span><span className="font-medium">1</span></li>
<li className="flex items-center justify-between"><span>HR</span><span className="font-medium">1</span></li>
<li className="flex items-center justify-between"><span>Registration</span><span className="font-medium">2</span></li>
<li className="flex items-center justify-between"><span>Tax</span><span className="font-medium">2</span></li>
</ul>
</div>

<div className="mt-auto">
<div className="flex items-center justify-between">
<span className="text-sm font-medium flex items-center gap-1">
<i className="w-4 h-4 text-indigo-600" data-lucide="log-in"></i>Account Logins
              </span>
<span className="text-sm text-gray-600">22 (60% Active)</span>
</div>
<div className="mt-1 h-2 w-full bg-gray-200 rounded-full">
<div className="h-full bg-indigo-600 rounded-full" style={{width: '60%'}}></div>
</div>
</div>
</div>
</div>
</section>

<section className="fade-in" data-entity="Stark Industries" data-progress="100" style={{-Delay: '0.5s'}}>
<div className="bg-white rounded-lg p-5 border border-gray-200 hover:shadow-md transition h-full flex flex-col">
<div className="flex items-center justify-between">
<h2 className="text-lg font-medium tracking-tight flex items-center gap-2">
<i className="w-5 h-5 text-indigo-600" data-lucide="building-2"></i>Stark Industries
          </h2>
<span className="text-sm text-gray-500">100% Complete</span>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="flex items-center justify-between p-2 rounded-md bg-gray-50">
<span className="text-xs font-medium flex items-center gap-1 text-gray-600">
<i className="w-4 h-4 text-indigo-600" data-lucide="map-pin"></i>Regions
            </span>
<span className="text-xs font-medium text-gray-700">9 states</span>
</div>
<div className="flex items-center justify-between p-2 rounded-md bg-gray-50">
<span className="text-xs font-medium flex items-center gap-1 text-gray-600">
<i className="w-4 h-4 text-indigo-600" data-lucide="shield-check"></i>Reg. Agent
            </span>
<span className="text-xs font-medium text-gray-700">9 states</span>
</div>
</div>
<div className="mt-5 space-y-6 flex-1">

<div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium flex items-center gap-1">
<i className="w-4 h-4 text-indigo-600" data-lucide="list-todo"></i>Question Tasks
              </span>
<span className="text-sm text-gray-600">13 (100%)</span>
</div>
<div className="mt-1 h-2 w-full bg-gray-200 rounded-full">
<div className="h-full bg-indigo-600 rounded-full" style={{width: '100%'}}></div>
</div>
<ul className="mt-2 space-y-1 text-xs">
<li className="flex items-center justify-between"><span>doing-business</span><span className="font-medium">4</span></li>
<li className="flex items-center justify-between"><span>sales-tax-nexus</span><span className="font-medium">3</span></li>
<li className="flex items-center justify-between"><span>business-tax-nexus</span><span className="font-medium">3</span></li>
<li className="flex items-center justify-between"><span>has-employees</span><span className="font-medium">3</span></li>
</ul>
</div>

<div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium flex items-center gap-1">
<i className="w-4 h-4 text-indigo-600" data-lucide="file-text"></i>Requirement Tasks
              </span>
<span className="text-sm text-gray-600">11 (100%)</span>
</div>
<div className="mt-1 h-2 w-full bg-gray-200 rounded-full">
<div className="h-full bg-indigo-600 rounded-full" style={{width: '100%'}}></div>
</div>
<ul className="mt-2 space-y-1 text-xs">
<li className="flex items-center justify-between"><span>Payroll</span><span className="font-medium">3</span></li>
<li className="flex items-center justify-between"><span>HR</span><span className="font-medium">2</span></li>
<li className="flex items-center justify-between"><span>Registration</span><span className="font-medium">3</span></li>
<li className="flex items-center justify-between"><span>Tax</span><span className="font-medium">3</span></li>
</ul>
</div>

<div className="mt-auto">
<div className="flex items-center justify-between">
<span className="text-sm font-medium flex items-center gap-1">
<i className="w-4 h-4 text-indigo-600" data-lucide="log-in"></i>Account Logins
              </span>
<span className="text-sm text-gray-600">32 (100% Active)</span>
</div>
<div className="mt-1 h-2 w-full bg-gray-200 rounded-full">
<div className="h-full bg-indigo-600 rounded-full" style={{width: '100%'}}></div>
</div>
</div>
</div>
</div>
</section>
</main>

<section className="px-6 pb-10 grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white rounded-lg p-6 border border-gray-200 fade-in" style={{-Delay: '0.6s'}}>
<h2 className="text-xl font-semibold tracking-tight flex items-center gap-2 mb-4">
<i className="w-6 h-6 text-indigo-600" data-lucide="bar-chart"></i>Feature Usage
      </h2>

<h3 className="text-sm font-medium text-gray-700 mb-2">Handbook Enabled?</h3>
<ul className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
<li className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
<span className="text-sm font-medium">Acme</span>
<span className="text-sm font-medium text-green-600">Yes</span>
</li>
<li className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
<span className="text-sm font-medium">Globex</span>
<span className="text-sm font-medium text-green-600">Yes</span>
</li>
<li className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
<span className="text-sm font-medium">Umbrella</span>
<span className="text-sm font-medium text-red-600">No</span>
</li>
<li className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
<span className="text-sm font-medium">Stark</span>
<span className="text-sm font-medium text-green-600">Yes</span>
</li>
</ul>

<h3 className="text-sm font-medium text-gray-700 mb-2">Workflow Activity</h3>
<ul className="divide-y divide-gray-200">
<li className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
<span className="font-medium">Acme Corp - NC Withholding</span>
<span className="text-xs text-indigo-600 mt-1 sm:mt-0">In-progress • last updated 2025-07-09</span>
</li>
<li className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
<span className="font-medium">Umbrella LLC - Pittsburgh, PA Local Tax</span>
<span className="text-xs text-indigo-600 mt-1 sm:mt-0">In-progress • last updated 2025-07-03</span>
</li>
</ul>
</div>

<div className="bg-white rounded-lg p-6 border border-gray-200 fade-in" style={{-Delay: '0.7s'}}>
<h2 className="text-xl font-semibold tracking-tight flex items-center gap-2 mb-4">
<i className="w-6 h-6 text-indigo-600" data-lucide="clock"></i>Last Account Login
      </h2>
<ul className="divide-y divide-gray-200">
<li className="py-3 flex items-center justify-between"><span className="font-medium">pepper@stark.com</span><span className="text-xs text-gray-500">2 mins ago</span></li>
<li className="py-3 flex items-center justify-between"><span className="font-medium">hr@globex.io</span><span className="text-xs text-gray-500">15 days ago</span></li>
<li className="py-3 flex items-center justify-between"><span className="font-medium">ops@acme.co</span><span className="text-xs text-gray-500">30 mins ago</span></li>
<li className="py-3 flex items-center justify-between"><span className="font-medium">security@umbrella.llc</span><span className="text-xs text-gray-500">3 months ago</span></li>
</ul>
</div>
</section>



    </>
  );
}
