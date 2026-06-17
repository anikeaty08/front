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



      window.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }

        const overlayRoot = document.getElementById('overlayRoot');
        const createAppointmentBtn = document.getElementById('createAppointmentBtn');
        const addTimeBtn = document.getElementById('addTimeBtn');
        const addMileageBtn = document.getElementById('addMileageBtn');

        const popupCreate = document.getElementById('popup_create_appointment');
        const popupTime = document.getElementById('attachment_time');
        const popupMileage = document.getElementById('attachment_mileage');

        function showOverlay() {
          overlayRoot.classList.remove('hidden');
          overlayRoot.classList.add('flex');
        }

        function hideOverlay() {
          overlayRoot.classList.add('hidden');
          overlayRoot.classList.remove('flex');
          [popupCreate, popupTime, popupMileage].forEach((el) => el.classList.add('hidden'));
        }

        function openPopup(id) {
          [popupCreate, popupTime, popupMileage].forEach((el) => el.classList.add('hidden'));
          const target = document.getElementById(id);
          if (target) {
            target.classList.remove('hidden');
            showOverlay();
          }
        }

        createAppointmentBtn.addEventListener('click', () => openPopup('popup_create_appointment'));
        addTimeBtn.addEventListener('click', () => openPopup('attachment_time'));
        addMileageBtn.addEventListener('click', () => openPopup('attachment_mileage'));

        overlayRoot.addEventListener('click', (e) => {
          if (e.target === overlayRoot) {
            hideOverlay();
          }
        });

        document.querySelectorAll('[data-close]').forEach((btn) => {
          btn.addEventListener('click', () => hideOverlay());
        });

        document.querySelectorAll('[data-back]').forEach((btn) => {
          btn.addEventListener('click', (e) => {
            const targetId = e.currentTarget.getAttribute('data-back');
            if (targetId) {
              openPopup(targetId);
            } else {
              hideOverlay();
            }
          });
        });

        // Multiselect for employees
        const employeeOptions = ['Arun Kumar', 'Rasik', 'Faisal', 'Naseer', 'Ameer'];

        const multiselectRoot = document.querySelector('[data-multiselect]');
        const multiselectToggle = multiselectRoot?.querySelector('[data-multiselect-toggle]');
        const multiselectMenu = multiselectRoot?.querySelector('[data-multiselect-menu]');
        const multiselectSearch = multiselectRoot?.querySelector('[data-multiselect-search]');
        const multiselectOptionsContainer = multiselectRoot?.querySelector('[data-multiselect-options]');
        const employeeChips = document.getElementById('employeeChips');

        let selectedEmployees = new Set(employeeOptions.slice(0, 2)); // Preselect Arun & Rasik

        function renderEmployeeChips() {
          employeeChips.innerHTML = '';
          if (!selectedEmployees.size) {
            const span = document.createElement('span');
            span.className = 'text-xs lg:text-sm text-slate-400';
            span.textContent = 'Select employees...';
            employeeChips.appendChild(span);
            return;
          }
          selectedEmployees.forEach((name) => {
            const chip = document.createElement('span');
            chip.className =
              'inline-flex items-center gap-1 rounded-full bg-slate-900 text-slate-50 text-[0.7rem] lg:text-xs px-2 py-0.5';
            const initials = name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase();
            chip.innerHTML =
              '<span class="rounded-sm bg-slate-800/70 px-1 text-[0.65rem]">' +
              initials +
              '</span><span>' +
              name +
              '</span>';
            employeeChips.appendChild(chip);
          });
        }

        function renderEmployeeOptions(filter = '') {
          multiselectOptionsContainer.innerHTML = '';
          const lower = filter.toLowerCase();
          employeeOptions
            .filter((name) => name.toLowerCase().includes(lower))
            .forEach((name) => {
              const isSelected = selectedEmployees.has(name);
              const btn = document.createElement('button');
              btn.type = 'button';
              btn.className =
                'w-full flex items-center justify-between gap-2 px-3 py-1.5 hover:bg-slate-50 text-left ' +
                (isSelected ? 'bg-slate-50/80' : '');
              btn.innerHTML =
                '<div class="flex items-center gap-2">' +
                '<div class="h-6 w-6 rounded-full flex items-center justify-center text-[0.7rem] font-medium tracking-tight ' +
                (isSelected
                  ? 'bg-slate-900 text-slate-50'
                  : 'bg-slate-100 text-slate-600') +
                '">' +
                name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase() +
                '</div>' +
                '<span class="text-xs lg:text-sm text-slate-700">' +
                name +
                '</span>' +
                '</div>' +
                '<span class="inline-flex h-4 w-4 items-center justify-center rounded border ' +
                (isSelected
                  ? 'border-slate-900 bg-slate-900'
                  : 'border-slate-300 bg-white') +
                '">' +
                (isSelected
                  ? '<svg class="w-3 h-3 text-slate-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'
                  : '') +
                '</span>';
              btn.addEventListener('click', () => {
                if (selectedEmployees.has(name)) {
                  selectedEmployees.delete(name);
                } else {
                  selectedEmployees.add(name);
                }
                renderEmployeeChips();
                renderEmployeeOptions(multiselectSearch.value || '');
              });
              multiselectOptionsContainer.appendChild(btn);
            });

          if (!multiselectOptionsContainer.children.length) {
            const empty = document.createElement('div');
            empty.className = 'px-3 py-2 text-xs text-slate-400';
            empty.textContent = 'No matches';
            multiselectOptionsContainer.appendChild(empty);
          }
        }

        if (multiselectToggle && multiselectMenu && multiselectOptionsContainer && employeeChips) {
          renderEmployeeChips();
          renderEmployeeOptions();

          multiselectToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            multiselectMenu.classList.toggle('hidden');
            if (!multiselectMenu.classList.contains('hidden')) {
              multiselectSearch.focus();
            }
          });

          document.addEventListener('click', (e) => {
            if (!multiselectRoot.contains(e.target)) {
              multiselectMenu.classList.add('hidden');
            }
          });

          multiselectSearch.addEventListener('input', (e) => {
            renderEmployeeOptions(e.target.value || '');
          });
        }
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
      
<div className="flex min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-slate-100">

<div className="flex w-full">

<aside className="hidden md:flex md:flex-col md:w-56 lg:w-64 border-r border-slate-200 bg-white/80 backdropur-sm">
<div className="flex items-center justify-between gap-2 px-4 lg:px-6 py-4 border-b border-slate-100">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-lg bg-slate-900 text-slate-50 flex items-center justify-center text-xs font-semibold tracking-tight">
<span>SM</span>
</div>
<div className="flex flex-col">
<span className="text-sm lg:text-base font-semibold tracking-tight text-slate-900">Sales Magics</span>
<span className="text-xs lg:text-sm text-slate-500">Appointments</span>
</div>
</div>
<button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors h-7 w-7">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="settings"></i>
</button>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 lg:px-4">
<div className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400 mb-3">Workspace</div>
<button className="w-full flex items-center gap-2.5 rounded-md bg-slate-900 text-slate-50 px-2.5 py-2 text-sm font-medium tracking-tight shadow-sm">
<i className="w-4 h-4" data-lucide="calendar-days"></i>
<span>Appointments</span>
</button>
<button className="w-full flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm text-slate-600 hover:bg-slate-100/80 mt-1.5 transition-colors">
<i className="w-4 h-4" data-lucide="users"></i>
<span>Employees</span>
</button>
<button className="w-full flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm text-slate-600 hover:bg-slate-100/80 mt-1.5 transition-colors">
<i className="w-4 h-4" data-lucide="box"></i>
<span>Products</span>
</button>
<div className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-slate-400 mb-3">Shortcuts</div>
<button className="w-full flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm text-slate-600 hover:bg-slate-100/80 transition-colors">
<i className="w-4 h-4" data-lucide="clock-3"></i>
<span>Today</span>
</button>
<button className="w-full flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm text-slate-600 hover:bg-slate-100/80 mt-1.5 transition-colors">
<i className="w-4 h-4" data-lucide="history"></i>
<span>Recent</span>
</button>
</nav>
<div className="border-t border-slate-100 px-4 lg:px-6 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 text-white flex items-center justify-center text-xs font-medium tracking-tight">
                AK
              </div>
<div className="flex flex-col">
<span className="text-xs lg:text-sm font-medium tracking-tight text-slate-900">Arun Kumar</span>
<span className="text-xs text-slate-400">Admin</span>
</div>
</div>
<button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors h-7 w-7">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="log-out"></i>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col">

<header className="flex items-center justify-between gap-3 border-b border-slate-200 bg-white/80 backdrop-blur-sm px-4 lg:px-8 py-3">
<div className="flex items-center gap-3">
<button className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-200 bg-white hover:bg-slate-50 transition-colors h-8 w-8">
<i className="w-4 h-4 text-slate-600" data-lucide="menu"></i>
</button>
<div className="hidden md:flex items-center gap-2 text-xs lg:text-sm text-slate-500">
<span>Workspace</span>
<span>/</span>
<span className="text-slate-900 font-medium tracking-tight">Appointments</span>
</div>
</div>
<div className="flex items-center gap-2 lg:gap-3">
<div className="hidden sm:flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/60 px-2.5 py-1.5">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="search"></i>
<input className="bg-transparent border-none outline-none text-xs lg:text-sm text-slate-700 placeholder:text-slate-400 w-32 lg:w-48" placeholder="Search appointments..." type="text"/>
<span className="hidden lg:inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-1.5 py-0.5 text-[0.65rem] text-slate-400">
<span className="rounded-sm border border-slate-200 bg-slate-50 px-1 leading-none">⌘</span>
<span className="leading-none">K</span>
</span>
</div>
<button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors h-8 w-8">
<i className="w-4 h-4 text-slate-500" data-lucide="bell"></i>
</button>
<button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors h-8 w-8">
<i className="w-4 h-4 text-slate-500" data-lucide="help-circle"></i>
</button>
</div>
</header>

<section className="flex-1 overflow-y-auto px-4 lg:px-8 py-4 lg:py-6">

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 lg:mb-6">
<div>
<div className="flex items-center gap-2 mb-1">
<h1 className="text-2xl lg:text-3xl font-semibold tracking-tight text-slate-900">Appointments</h1>
<span className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 text-emerald-600 text-[0.7rem] font-medium px-1.5 py-0.5">
                    Live
                  </span>
</div>
<p className="text-sm lg:text-base text-slate-500">
                  Manage your field appointments, assigned employees, and related products.
                </p>
</div>
<div className="flex flex-wrap items-center justify-start sm:justify-end gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-slate-50 text-sm lg:text-base font-medium tracking-tight shadow-sm hover:bg-slate-800 transition-colors px-3 lg:px-4 py-2" id="createAppointmentBtn">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Create Appointment</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-6">
<div className="rounded-xl border border-slate-100 bg-white shadow-sm/40 px-3.5 py-3 flex items-center justify-between">
<div>
<p className="text-xs text-slate-500 mb-0.5">Scheduled</p>
<p className="text-lg lg:text-xl font-semibold tracking-tight text-slate-900">4</p>
</div>
<div className="h-8 w-8 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="calendar-clock"></i>
</div>
</div>
<div className="rounded-xl border border-slate-100 bg-white shadow-sm/40 px-3.5 py-3 flex items-center justify-between">
<div>
<p className="text-xs text-slate-500 mb-0.5">Completed</p>
<p className="text-lg lg:text-xl font-semibold tracking-tight text-slate-900">12</p>
</div>
<div className="h-8 w-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="check-circle-2"></i>
</div>
</div>
<div className="rounded-xl border border-slate-100 bg-white shadow-sm/40 px-3.5 py-3 flex items-center justify-between">
<div>
<p className="text-xs text-slate-500 mb-0.5">This week</p>
<p className="text-lg lg:text-xl font-semibold tracking-tight text-slate-900">8</p>
</div>
<div className="h-8 w-8 rounded-full bg-violet-50 text-violet-500 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="activity"></i>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-100 bg-white shadow-sm">
<div className="flex flex-col gap-3 border-b border-slate-100 px-3.5 lg:px-4 py-3">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
<div className="flex items-center gap-2">
<h2 className="text-sm lg:text-base font-medium tracking-tight text-slate-900">All Appointments</h2>
<span className="inline-flex items-center rounded-full bg-slate-100 text-slate-500 text-[0.7rem] px-1.5 py-0.5">
                      2 records
                    </span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 transition-colors px-2.5 py-1.5 text-xs lg:text-sm text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="filter"></i>
<span>Filter</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 transition-colors px-2.5 py-1.5 text-xs lg:text-sm text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="download"></i>
<span>Export</span>
</button>
</div>
</div>
<div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-50 text-slate-600 px-1.5 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-sky-500"></span> Scheduled
                  </span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-50 text-slate-600 px-1.5 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Completed
                  </span>
</div>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-slate-50/80 border-b border-slate-100">
<tr>
<th className="text-left text-xs font-medium text-slate-500 uppercase tracking-[0.12em] px-3.5 lg:px-4 py-2.5">
                        Appointment Name
                      </th>
<th className="text-left text-xs font-medium text-slate-500 uppercase tracking-[0.12em] px-3.5 lg:px-4 py-2.5">
                        Employees
                      </th>
<th className="text-left text-xs font-medium text-slate-500 uppercase tracking-[0.12em] px-3.5 lg:px-4 py-2.5">
                        Product
                      </th>
<th className="text-left text-xs font-medium text-slate-500 uppercase tracking-[0.12em] px-3.5 lg:px-4 py-2.5">
                        Status
                      </th>
<th className="w-10"></th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50/60 transition-colors">
<td className="px-3.5 lg:px-4 py-2.5 align-middle text-slate-900">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-sky-50 text-sky-500">
<i className="w-3.5 h-3.5" data-lucide="wrench"></i>
</span>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight">Installation</span>
<span className="text-xs text-slate-400">Tomorrow · 10:00–12:00</span>
</div>
</div>
</td>
<td className="px-3.5 lg:px-4 py-2.5 align-middle">
<div className="flex -space-x-1.5 items-center">
<div className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[0.7rem] font-medium tracking-tight border border-white">
                            A
                          </div>
<div className="h-6 w-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-[0.7rem] font-medium tracking-tight border border-white">
                            R
                          </div>
<span className="ml-2 text-xs text-slate-500">Arun, Rasik</span>
</div>
</td>
<td className="px-3.5 lg:px-4 py-2.5 align-middle text-slate-700">
                        Digital Signage
                      </td>
<td className="px-3.5 lg:px-4 py-2.5 align-middle">
<span className="inline-flex items-center gap-1 rounded-full bg-sky-50 text-sky-700 text-xs font-medium px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-sky-500"></span> Scheduled
                        </span>
</td>
<td className="px-3.5 lg:px-4 py-2.5 align-middle text-right">
<button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 h-7 w-7">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50/60 transition-colors">
<td className="px-3.5 lg:px-4 py-2.5 align-middle text-slate-900">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-50 text-emerald-500">
<i className="w-3.5 h-3.5" data-lucide="map-pin"></i>
</span>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight">Site Visit</span>
<span className="text-xs text-slate-400">Yesterday · 14:00–15:30</span>
</div>
</div>
</td>
<td className="px-3.5 lg:px-4 py-2.5 align-middle">
<div className="flex -space-x-1.5 items-center">
<div className="h-6 w-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[0.7rem] font-medium tracking-tight border border-white">
                            Ah
                          </div>
<span className="ml-2 text-xs text-slate-500">Ahmed</span>
</div>
</td>
<td className="px-3.5 lg:px-4 py-2.5 align-middle text-slate-400">
                        -
                      </td>
<td className="px-3.5 lg:px-4 py-2.5 align-middle">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Completed
                        </span>
</td>
<td className="px-3.5 lg:px-4 py-2.5 align-middle text-right">
<button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 h-7 w-7">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-slate-100 px-3.5 lg:px-4 py-2.5">
<p className="text-xs lg:text-sm text-slate-500">
                  Showing <span className="font-medium text-slate-700">2</span> of <span className="font-medium text-slate-700">2</span> appointments
                </p>
<div className="flex items-center gap-1.5">
<button className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-xs lg:text-sm text-slate-600 px-2.5 py-1.5">
<i className="w-3.5 h-3.5" data-lucide="chevron-left"></i>
<span>Prev</span>
</button>
<button className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-xs lg:text-sm text-slate-600 px-2.5 py-1.5">
<span>Next</span>
<i className="w-3.5 h-3.5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</section>
</main>
</div>

<div className="fixed inset-0 z-20 hidden items-center justify-center bg-slate-950/30 backdrop-blur-sm px-3 md:px-0" id="overlayRoot">

<div className="hidden w-full max-w-xl rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10" id="popup_create_appointment">
<div className="flex items-center justify-between gap-2 border-b border-slate-100 px-4 lg:px-5 py-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-slate-900 text-slate-50 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="calendar-plus"></i>
</div>
<div className="flex flex-col">
<h2 className="text-base lg:text-lg font-semibold tracking-tight text-slate-900">Create Appointment</h2>
<p className="text-xs lg:text-sm text-slate-500">
                  Define the appointment, assign employees, and link a product.
                </p>
</div>
</div>
<button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 h-8 w-8" data-close="">
<i className="w-4 h-4 text-slate-500" data-lucide="x"></i>
</button>
</div>
<div className="px-4 lg:px-5 py-4 space-y-4 max-h-[75vh] overflow-y-auto">

<div className="space-y-1.5">
<label className="flex items-center justify-between text-xs lg:text-sm font-medium text-slate-700">
<span>Appointment Name</span>
<span className="text-[0.7rem] text-slate-400">Required</span>
</label>
<div className="relative">
<input className="w-full rounded-md border border-slate-200 bg-slate-50/60 focus:bg-white focus:border-slate-400 outline-none text-sm lg:text-base text-slate-900 placeholder:text-slate-400 px-3 py-2 transition-colors" placeholder="e.g., Installation" type="text"/>
<div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
<i className="w-3.5 h-3.5 text-slate-300" data-lucide="type"></i>
</div>
</div>
</div>

<div className="space-y-1.5">
<label className="flex items-center justify-between text-xs lg:text-sm font-medium text-slate-700">
<span>Assign Employees</span>
<span className="text-[0.7rem] text-slate-400">Multiple allowed</span>
</label>
<div className="relative" data-multiselect="">
<button className="w-full flex items-center justify-between gap-2 rounded-md border border-slate-200 bg-white hover:bg-slate-50/70 text-sm lg:text-base text-slate-700 px-3 py-2" data-multiselect-toggle="" type="button">
<div className="flex flex-wrap items-center gap-1.5" id="employeeChips">
<span className="text-xs lg:text-sm text-slate-400">Select employees...</span>
</div>
<div className="flex items-center gap-1 text-slate-400">
<i className="w-3.5 h-3.5" data-lucide="users"></i>
<i className="w-3.5 h-3.5" data-lucide="chevron-down"></i>
</div>
</button>
<div className="absolute z-20 mt-1 w-full rounded-md border border-slate-200 bg-white shadow-lg shadow-slate-900/10 hidden" data-multiselect-menu="">
<div className="px-3 py-1.5 border-b border-slate-100">
<input className="w-full bg-slate-50/80 rounded-md border border-slate-200 outline-none text-xs lg:text-sm text-slate-700 placeholder:text-slate-400 px-2.5 py-1.5" data-multiselect-search="" placeholder="Search employees..." type="text"/>
</div>
<div className="max-h-48 overflow-y-auto py-1 text-xs lg:text-sm text-slate-700" data-multiselect-options="">

</div>
</div>
</div>
</div>

<div className="space-y-1.5">
<label className="flex items-center justify-between text-xs lg:text-sm font-medium text-slate-700">
<span>Choose Product (Optional)</span>
<span className="text-[0.7rem] text-slate-400">Optional</span>
</label>
<div className="relative">
<select className="w-full appearance-none rounded-md border border-slate-200 bg-white text-sm lg:text-base text-slate-700 px-3 py-2 pr-8 outline-none focus:border-slate-400">
<option>Digital Signage – 55 inch</option>
<option>QR Menu System</option>
<option>LED Light Box</option>
<option>Glass Frosting</option>
<option>No Product</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="border border-slate-100 rounded-xl bg-slate-50/60">
<div className="flex items-center justify-between gap-2 border-b border-slate-100 px-3.5 py-2.5">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-md bg-slate-900 text-slate-50 flex items-center justify-center">
<i className="w-3.5 h-3.5" data-lucide="paperclip"></i>
</div>
<div className="flex flex-col">
<h3 className="text-xs lg:text-sm font-medium tracking-tight text-slate-900">Attachments</h3>
<p className="text-[0.7rem] text-slate-500">
                      Add time and mileage entries to this appointment.
                    </p>
</div>
</div>
<span className="text-[0.7rem] text-slate-400">Optional</span>
</div>
<div className="px-3.5 py-3 flex flex-wrap gap-2">
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-xs lg:text-sm text-slate-700 px-3 py-1.5" id="addTimeBtn">
<i className="w-3.5 h-3.5" data-lucide="clock-3"></i>
<span>Add Time Entry</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-xs lg:text-sm text-slate-700 px-3 py-1.5" id="addMileageBtn">
<i className="w-3.5 h-3.5" data-lucide="route"></i>
<span>Add Mileage</span>
</button>
</div>
</div>
</div>
<div className="border-t border-slate-100 bg-slate-50/80 rounded-b-2xl px-4 lg:px-5 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
<div className="text-[0.7rem] lg:text-xs text-slate-500">
              Once saved, you can still edit employees, product, and attachments.
            </div>
<div className="flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-transparent bg-transparent hover:bg-slate-100 text-xs lg:text-sm text-slate-600 px-2.5 py-1.5" data-close="">
<span>Cancel</span>
</button>
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-slate-50 text-xs lg:text-sm font-medium tracking-tight hover:bg-slate-800 px-3.5 py-1.75" data-close="">
<i className="w-3.5 h-3.5" data-lucide="save"></i>
<span>Save Appointment</span>
</button>
</div>
</div>
</div>

<div className="hidden w-full max-w-md rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10" id="attachment_time">
<div className="flex items-center justify-between gap-2 border-b border-slate-100 px-4 py-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-slate-900 text-slate-50 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="clock-3"></i>
</div>
<div className="flex flex-col">
<h2 className="text-base font-semibold tracking-tight text-slate-900">Time Attachment</h2>
<p className="text-xs text-slate-500">
                  Log the time spent on this appointment.
                </p>
</div>
</div>
<button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 h-8 w-8" data-back="popup_create_appointment">
<i className="w-4 h-4 text-slate-500" data-lucide="x"></i>
</button>
</div>
<div className="px-4 py-4 space-y-3 max-h-[70vh] overflow-y-auto">
<div className="space-y-1.5">
<label className="text-xs lg:text-sm font-medium text-slate-700">Start Time</label>
<input className="w-full rounded-md border border-slate-200 bg-slate-50/60 focus:bg-white focus:border-slate-400 outline-none text-sm lg:text-base text-slate-900 placeholder:text-slate-400 px-3 py-2" placeholder="Select start time" type="time"/>
</div>
<div className="space-y-1.5">
<label className="text-xs lg:text-sm font-medium text-slate-700">End Time</label>
<input className="w-full rounded-md border border-slate-200 bg-slate-50/60 focus:bg-white focus:border-slate-400 outline-none text-sm lg:text-base text-slate-900 placeholder:text-slate-400 px-3 py-2" placeholder="Select end time" type="time"/>
</div>
<div className="space-y-1.5">
<label className="text-xs lg:text-sm font-medium text-slate-700">Total Hours</label>
<input className="w-full rounded-md border border-slate-200 bg-slate-50/60 focus:bg-white focus:border-slate-400 outline-none text-sm lg:text-base text-slate-900 placeholder:text-slate-400 px-3 py-2" placeholder="Auto-calculated or manual" type="text"/>
</div>
</div>
<div className="border-t border-slate-100 bg-slate-50/80 rounded-b-2xl px-4 py-3 flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-transparent bg-transparent hover:bg-slate-100 text-xs lg:text-sm text-slate-600 px-2.5 py-1.5" data-back="popup_create_appointment">
<span>Cancel</span>
</button>
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-slate-50 text-xs lg:text-sm font-medium tracking-tight hover:bg-slate-800 px-3.5 py-1.75" data-back="popup_create_appointment">
<i className="w-3.5 h-3.5" data-lucide="save"></i>
<span>Save Time Entry</span>
</button>
</div>
</div>

<div className="hidden w-full max-w-md rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10" id="attachment_mileage">
<div className="flex items-center justify-between gap-2 border-b border-slate-100 px-4 py-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-slate-900 text-slate-50 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="route"></i>
</div>
<div className="flex flex-col">
<h2 className="text-base font-semibold tracking-tight text-slate-900">Mileage Attachment</h2>
<p className="text-xs text-slate-500">
                  Capture the distance travelled for this appointment.
                </p>
</div>
</div>
<button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 h-8 w-8" data-back="popup_create_appointment">
<i className="w-4 h-4 text-slate-500" data-lucide="x"></i>
</button>
</div>
<div className="px-4 py-4 space-y-3 max-h-[70vh] overflow-y-auto">
<div className="space-y-1.5">
<label className="text-xs lg:text-sm font-medium text-slate-700">Starting KM</label>
<input className="w-full rounded-md border border-slate-200 bg-slate-50/60 focus:bg-white focus:border-slate-400 outline-none text-sm lg:text-base text-slate-900 placeholder:text-slate-400 px-3 py-2" placeholder="Enter starting KM" type="number"/>
</div>
<div className="space-y-1.5">
<label className="text-xs lg:text-sm font-medium text-slate-700">Ending KM</label>
<input className="w-full rounded-md border border-slate-200 bg-slate-50/60 focus:bg-white focus:border-slate-400 outline-none text-sm lg:text-base text-slate-900 placeholder:text-slate-400 px-3 py-2" placeholder="Enter ending KM" type="number"/>
</div>
<div className="space-y-1.5">
<label className="text-xs lg:text-sm font-medium text-slate-700">Total Distance</label>
<input className="w-full rounded-md border border-slate-200 bg-slate-50/60 focus:bg-white focus:border-slate-400 outline-none text-sm lg:text-base text-slate-900 placeholder:text-slate-400 px-3 py-2" placeholder="Auto-calculated or manual" type="number"/>
</div>
<div className="space-y-1.5">
<label className="text-xs lg:text-sm font-medium text-slate-700">Vehicle</label>
<input className="w-full rounded-md border border-slate-200 bg-slate-50/60 focus:bg-white focus:border-slate-400 outline-none text-sm lg:text-base text-slate-900 placeholder:text-slate-400 px-3 py-2" placeholder="e.g., Van 01" type="text"/>
</div>
</div>
<div className="border-t border-slate-100 bg-slate-50/80 rounded-b-2xl px-4 py-3 flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-transparent bg-transparent hover:bg-slate-100 text-xs lg:text-sm text-slate-600 px-2.5 py-1.5" data-back="popup_create_appointment">
<span>Cancel</span>
</button>
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-slate-50 text-xs lg:text-sm font-medium tracking-tight hover:bg-slate-800 px-3.5 py-1.75" data-back="popup_create_appointment">
<i className="w-3.5 h-3.5" data-lucide="save"></i>
<span>Save Mileage</span>
</button>
</div>
</div>
</div>
</div>



    </>
  );
}
