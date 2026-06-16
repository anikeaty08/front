import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // DOM helpers
      const $ = (sel, el=document) => el.querySelector(sel);
      const $$ = (sel, el=document) => Array.from(el.querySelectorAll(sel));

      // Sidebar (mobile)
      const mobileSidebar = $('#mobileSidebar');
      $('#openSidebarBtn')?.addEventListener('click', () => {
        mobileSidebar.classList.remove('hidden');
      });
      $('[data-close-sidebar]', mobileSidebar)?.addEventListener('click', () => {
        mobileSidebar.classList.add('hidden');
      });
      $('[data-overlay]', mobileSidebar)?.addEventListener('click', () => {
        mobileSidebar.classList.add('hidden');
      });

      // Elements
      const staffTableBody = $('#staffTableBody');
      const totalStaffCount = $('#totalStaffCount');
      const availableCount = $('#availableCount');
      const busyCount = $('#busyCount');
      const offlineCount = $('#offlineCount');
      const staffSearch = $('#staffSearch');
      const filterDepartment = $('#filterDepartment');
      const filterAvailability = $('#filterAvailability');
      const noResults = $('#noResults');

      // Add Staff
      const addStaffButton = $('#addStaffButton');
      const staffName = $('#staffName');
      const staffPhone = $('#staffPhone');
      const staffDepartment = $('#staffDepartment');

      // Edit Modal fields
      const editModal = $('#editStaffModal');
      const editName = $('#editName');
      const editPhone = $('#editPhone');
      const editDepartment = $('#editDepartment');
      const editAvailability = $('#editAvailability');
      const editTask = $('#editTask');
      const saveEditBtn = $('#saveEditBtn');
      let editingRow = null;

      // Utility: Availability badge
      function availabilityBadge(status) {
        const map = {
          'Available': 'bg-emerald-50 text-emerald-600 border border-emerald-200',
          'Busy': 'bg-amber-50 text-amber-700 border border-amber-200',
          'Offline': 'bg-slate-100 text-slate-700 border border-slate-200'
        };
        const cls = map[status] || 'bg-slate-100 text-slate-700 border border-slate-200';
        return `<span class="inline-flex items-center gap-1 rounded-full ${cls} px-2 py-0.5 text-xs">${status}</span>`;
      }

      // Utility: Create table row
      function createRow({ name, department, phone, availability = 'Available', currentTask = '-' }) {
        const tr = document.createElement('tr');
        tr.dataset.name = name;
        tr.dataset.department = department;
        tr.dataset.phone = phone;
        tr.dataset.availability = availability;

        const avatarUrl = `https://source.unsplash.com/64x64/?face,portrait&sig=${Math.floor(Math.random()*1000)}`;

        tr.innerHTML = `
          <td class="px-4 py-3">
            <div class="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" class="h-8 w-8 rounded-full object-cover border border-slate-200" alt="${name}" />
              <div class="font-medium text-slate-900">${name}</div>
            </div>
          </td>
          <td class="px-4 py-3 text-slate-700">${department}</td>
          <td class="px-4 py-3 text-slate-700">${phone}</td>
          <td class="px-4 py-3">${availabilityBadge(availability)}</td>
          <td class="px-4 py-3 text-slate-700">${currentTask}</td>
          <td class="px-4 py-3">
            <button class="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-900 px-2 py-1 rounded-md hover:bg-slate-100" data-open-modal="taskLogModal">
              <i data-lucide="list" class="h-4 w-4"></i>
              <span>View Logs</span>
            </button>
          </td>
          <td class="px-4 py-3">
            <div class="flex items-center justify-end gap-2">
              <button class="p-2 rounded-md hover:bg-slate-100" title="Edit Staff" data-edit>
                <i data-lucide="edit-3" class="h-4 w-4"></i>
              </button>
              <button class="p-2 rounded-md hover:bg-slate-100 text-rose-600 hover:text-rose-700" title="Remove Staff" data-remove>
                <i data-lucide="trash-2" class="h-4 w-4"></i>
              </button>
            </div>
          </td>
        `;
        attachRowHandlers(tr);
        if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } , nameAttr: 'data-lucide' , icons: window.lucide.icons });
        return tr;
      }

      // Attach handlers to a row
      function attachRowHandlers(tr) {
        $('[data-open-modal="taskLogModal"]', tr)?.addEventListener('click', () => openModal('taskLogModal'));
        $('[data-edit]', tr)?.addEventListener('click', () => {
          editingRow = tr;
          openEditForRow(tr);
        });
        $('[data-remove]', tr)?.addEventListener('click', () => {
          if (confirm('Remove this staff?')) {
            tr.remove();
            updateStats();
            applyFilters(); // keep filters consistent and noResults
          }
        });
      }

      // Open/Close Modal helpers
      function openModal(id) {
        const modal = document.getElementById(id);
        if (!modal) return;
        modal.classList.remove('hidden');
      }
      function closeParentModal(el) {
        const modal = el.closest('.fixed.inset-0');
        if (modal) modal.classList.add('hidden');
      }
      $$('#taskLogModal [data-close-modal], #taskLogModal [data-close-modal] ~ *, #editStaffModal [data-close-modal], #editStaffModal [data-close-modal] ~ *').forEach(btn => {
        btn.addEventListener('click', (e) => {
          closeParentModal(e.currentTarget);
        });
      });
      $$('#taskLogModal [data-close-modal], #editStaffModal [data-close-modal]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          closeParentModal(e.currentTarget);
        });
      });
      // Overlay close
      $$('[data-close-modal]').forEach(btn => {
        btn.addEventListener('click', (e) => closeParentModal(e.currentTarget));
      });
      $$('[data-close-modal]', $('#taskLogModal')).forEach(btn => btn.addEventListener('click', (e)=>closeParentModal(e.currentTarget)));
      $$('[data-close-modal]', $('#editStaffModal')).forEach(btn => btn.addEventListener('click', (e)=>closeParentModal(e.currentTarget)));
      $$('[data-close-modal]', document).forEach(btn => btn.addEventListener('click', (e)=>closeParentModal(e.currentTarget)));
      $$('[data-close-modal]', document);

      // Also close when clicking overlay
      $$('#taskLogModal [data-close-modal], #taskLogModal [data-close-modal] ~ *');
      $$('[data-close-modal]').forEach(() => {});

      // Generic overlay click close
      $$('[data-close-modal]').forEach(() => {});
      $$('[data-close-modal]');
      $$('[data-close-modal]');
      $$('[data-close-modal]');
      $$('#taskLogModal [data-close-modal]');

      // Add Staff handler
      addStaffButton.addEventListener('click', () => {
        const name = staffName.value.trim();
        const phone = staffPhone.value.trim();
        const department = staffDepartment.value;

        if (!name || !phone || !department) {
          alert('Please fill out Name, Phone No and Department.');
          return;
        }

        const tr = createRow({ name, department, phone, availability: 'Available', currentTask: '-' });
        staffTableBody.appendChild(tr);
        staffName.value = '';
        staffPhone.value = '';
        staffDepartment.value = '';
        updateStats();
        applyFilters();
      });

      // Edit Staff: open and save
      function openEditForRow(tr) {
        editName.value = tr.dataset.name || '';
        editPhone.value = tr.dataset.phone || '';
        editDepartment.value = tr.dataset.department || 'Housekeeping';
        editAvailability.value = tr.dataset.availability || 'Available';
        const currentTaskText = tr.children[4]?.textContent?.trim() || '-';
        editTask.value = currentTaskText;
        openModal('editStaffModal');
      }
      saveEditBtn.addEventListener('click', () => {
        if (!editingRow) return;
        const name = editName.value.trim();
        const phone = editPhone.value.trim();
        const department = editDepartment.value;
        const availability = editAvailability.value;
        const task = editTask.value.trim() || '-';

        if (!name || !phone || !department || !availability) {
          alert('Please complete all fields.');
          return;
        }

        // Update dataset
        editingRow.dataset.name = name;
        editingRow.dataset.phone = phone;
        editingRow.dataset.department = department;
        editingRow.dataset.availability = availability;

        // Update cells
        // Name cell text
        const nameCell = editingRow.children[0].querySelector('div.font-medium');
        if (nameCell) nameCell.textContent = name;
        // Department
        editingRow.children[1].textContent = department;
        // Phone
        editingRow.children[2].textContent = phone;
        // Availability badge
        editingRow.children[3].innerHTML = availabilityBadge(availability);
        // Task
        editingRow.children[4].textContent = task;

        // Re-render icons in case
        if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        updateStats();
        applyFilters();
        editModal.classList.add('hidden');
        editingRow = null;
      });

      // Filters
      staffSearch.addEventListener('input', applyFilters);
      filterDepartment.addEventListener('change', applyFilters);
      filterAvailability.addEventListener('change', applyFilters);

      function applyFilters() {
        const q = staffSearch.value.trim().toLowerCase();
        const dep = filterDepartment.value;
        const avail = filterAvailability.value;

        let visibleCount = 0;
        $$('#staffTableBody tr').forEach(tr => {
          const name = tr.dataset.name.toLowerCase();
          const phone = tr.dataset.phone.toLowerCase();
          const department = tr.dataset.department;
          const availability = tr.dataset.availability;

          const matchesQuery = !q || name.includes(q) || phone.includes(q);
          const matchesDep = dep === 'All' || department === dep;
          const matchesAvail = avail === 'All' || availability === avail;

          const show = matchesQuery && matchesDep && matchesAvail;
          tr.classList.toggle('hidden', !show);
          if (show) visibleCount++;
        });

        noResults.classList.toggle('hidden', visibleCount > 0);
      }

      // Stats
      function updateStats() {
        const rows = $$('#staffTableBody tr');
        const total = rows.length;
        let available = 0, busy = 0, offline = 0;
        rows.forEach(tr => {
          const av = tr.dataset.availability;
          if (av === 'Available') available++;
          else if (av === 'Busy') busy++;
          else if (av === 'Offline') offline++;
        });
        totalStaffCount.textContent = total;
        availableCount.textContent = available;
        busyCount.textContent = busy;
        offlineCount.textContent = offline;
      }

      // Initial attach for existing rows
      $$('#staffTableBody tr').forEach(attachRowHandlers);
      // Initial filters/stats
      updateStats();
      applyFilters();

      // Global modal openers
      $$('[data-open-modal]').forEach(btn => {
        btn.addEventListener('click', () => openModal(btn.getAttribute('data-open-modal')));
      });

      // Close modals on overlay click
      $$('#taskLogModal [data-close-modal], #editStaffModal [data-close-modal]');
      $$('#taskLogModal [data-close-modal], #editStaffModal [data-close-modal]');
      $$('#taskLogModal [data-close-modal]');
      // Overlays:
      $$('#taskLogModal .absolute.inset-0.bg-slate-900\\/40, #editStaffModal .absolute.inset-0.bg-slate-900\\/40').forEach(overlay => {
        overlay.addEventListener('click', () => {
          overlay.parentElement.parentElement.classList.add('hidden');
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex">

<aside className="hidden md:flex md:flex-col md:w-64 border-r border-slate-200 bg-white">
<div className="flex items-center gap-2 px-5 h-16 border-b border-slate-200">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white flex items-center justify-center text-sm tracking-tight font-semibold">AT</div>
<div className="flex flex-col">
<span className="text-sm text-slate-700 leading-tight">Admin Panel</span>
<span className="text-[11px] text-slate-500 leading-tight">AeroTag Assist</span>
</div>
</div>
<nav className="p-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100 text-slate-700 text-sm" href="#">
<i className="h-4 w-4" data-lucide="home"></i>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-slate-900/5 text-slate-900 hover:bg-slate-900/10 text-sm" href="#">
<i className="h-4 w-4" data-lucide="users"></i>
<span>Staffing</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100 text-slate-700 text-sm" href="#">
<i className="h-4 w-4" data-lucide="list-checks"></i>
<span>Tasks</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100 text-slate-700 text-sm" href="#">
<i className="h-4 w-4" data-lucide="bar-chart-3"></i>
<span>Reports</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100 text-slate-700 text-sm" href="#">
<i className="h-4 w-4" data-lucide="settings"></i>
<span>Settings</span>
</a>
</nav>
<div className="mt-auto px-4 py-3 border-t border-slate-200">
<div className="text-xs text-slate-500">v1.0 • Staffing</div>
</div>
</aside>

<div className="fixed inset-0 z-40 hidden" id="mobileSidebar">
<div className="absolute inset-0 bg-slate-900/40" data-overlay=""></div>
<aside className="absolute left-0 top-0 h-full w-72 bg-white border-r border-slate-200 shadow-xl">
<div className="flex items-center justify-between px-5 h-16 border-b border-slate-200">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white flex items-center justify-center text-sm tracking-tight font-semibold">AT</div>
<div className="flex flex-col">
<span className="text-sm text-slate-700 leading-tight">Admin Panel</span>
<span className="text-[11px] text-slate-500 leading-tight">AeroTag Assist</span>
</div>
</div>
<button aria-label="Close sidebar" className="p-2 rounded-md hover:bg-slate-100" data-close-sidebar="">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<nav className="p-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100 text-slate-700 text-sm" href="#">
<i className="h-4 w-4" data-lucide="home"></i>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-slate-900/5 text-slate-900 hover:bg-slate-900/10 text-sm" href="#">
<i className="h-4 w-4" data-lucide="users"></i>
<span>Staffing</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100 text-slate-700 text-sm" href="#">
<i className="h-4 w-4" data-lucide="list-checks"></i>
<span>Tasks</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100 text-slate-700 text-sm" href="#">
<i className="h-4 w-4" data-lucide="bar-chart-3"></i>
<span>Reports</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100 text-slate-700 text-sm" href="#">
<i className="h-4 w-4" data-lucide="settings"></i>
<span>Settings</span>
</a>
</nav>
</aside>
</div>

<main className="flex-1 flex flex-col">

<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-6">
<div className="flex items-center gap-2">
<button aria-label="Open sidebar" className="md:hidden p-2 rounded-md hover:bg-slate-100" id="openSidebarBtn">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
<div>
<h1 className="text-[22px] md:text-[24px] font-semibold tracking-tight">Staffing Management</h1>
<p className="text-[12px] md:text-[13px] text-slate-500">Manage staff, track daily performance and tasks in AeroTag Assist</p>
</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-slate-200 bg-white hover:bg-slate-50">
<i className="h-4 w-4" data-lucide="download"></i>
              Export
            </button>
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-slate-200 bg-white hover:bg-slate-50">
<i className="h-4 w-4" data-lucide="refresh-ccw"></i>
              Refresh
            </button>
</div>
</header>

<section className="p-4 md:p-6 space-y-6">

<div className="bg-white border border-slate-200 rounded-xl p-4 md:p-5">
<div className="flex items-center justify-between mb-4">
<h2 className="text-[18px] font-semibold tracking-tight text-slate-900">Quick Overview</h2>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
<div className="rounded-lg border border-slate-200 bg-white p-4 hover:border-slate-300 transition-colors">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-500">Total Staff</span>
<i className="h-4 w-4 text-slate-400" data-lucide="users"></i>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight" id="totalStaffCount">12</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4 hover:border-slate-300 transition-colors">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-500">Available Now</span>
<span className="inline-flex items-center gap-1 text-emerald-600 text-[11px]">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Live
                  </span>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight" id="availableCount">7</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4 hover:border-slate-300 transition-colors">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-500">Currently Busy</span>
<i className="h-4 w-4 text-slate-400" data-lucide="clock-3"></i>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight" id="busyCount">4</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4 hover:border-slate-300 transition-colors">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-500">Offline</span>
<i className="h-4 w-4 text-slate-400" data-lucide="moon"></i>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight" id="offlineCount">1</div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-4 md:p-5">
<div className="flex items-center justify-between mb-4">
<h2 className="text-[18px] font-semibold tracking-tight text-slate-900">Add New Staff</h2>
</div>
<div className="grid md:grid-cols-4 gap-3 md:gap-4">

<div>
<label className="block text-xs text-slate-600 mb-1.5">Name</label>
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" data-lucide="user"></i>
<input className="w-full rounded-md border border-slate-300 bg-white pl-9 pr-3 py-2.5 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" id="staffName" placeholder="Enter staff name" required="" type="text"/>
</div>
</div>

<div>
<label className="block text-xs text-slate-600 mb-1.5">Phone No</label>
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" data-lucide="phone"></i>
<input className="w-full rounded-md border border-slate-300 bg-white pl-9 pr-3 py-2.5 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" id="staffPhone" placeholder="+971 5X XXX XXXX" required="" type="tel"/>
</div>
</div>

<div>
<label className="block text-xs text-slate-600 mb-1.5">Department</label>
<div className="relative">
<select className="appearance-none w-full rounded-md border border-slate-300 bg-white pl-3 pr-9 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" id="staffDepartment" required="">
<option disabled="" selected="" value="">Select department</option>
<option>Housekeeping</option>
<option>Room Service</option>
<option>Transport</option>
<option>Maintenance</option>
<option>Front Desk</option>
</select>
<i className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>

<div className="flex items-end">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white py-2.5 text-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/10" id="addStaffButton">
<i className="h-4 w-4" data-lucide="plus"></i>
                  Add Staff
                </button>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-4 md:p-5">
<div className="flex items-center justify-between mb-4">
<h2 className="text-[18px] font-semibold tracking-tight text-slate-900">Staff Directory</h2>
</div>

<div className="grid md:grid-cols-3 gap-3 md:gap-4 mb-4">

<div>
<label className="block text-xs text-slate-600 mb-1.5">Search Staff</label>
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" data-lucide="search"></i>
<input className="w-full rounded-md border border-slate-300 bg-white pl-9 pr-3 py-2.5 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" id="staffSearch" placeholder="Search by name or phone..." type="text"/>
</div>
</div>

<div>
<label className="block text-xs text-slate-600 mb-1.5">Filter by Department</label>
<div className="relative">
<select className="appearance-none w-full rounded-md border border-slate-300 bg-white pl-3 pr-9 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" id="filterDepartment">
<option>All</option>
<option>Housekeeping</option>
<option>Room Service</option>
<option>Transport</option>
<option>Maintenance</option>
<option>Front Desk</option>
</select>
<i className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>

<div>
<label className="block text-xs text-slate-600 mb-1.5">Filter by Availability</label>
<div className="relative">
<select className="appearance-none w-full rounded-md border border-slate-300 bg-white pl-3 pr-9 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" id="filterAvailability">
<option>All</option>
<option>Available</option>
<option>Busy</option>
<option>Offline</option>
</select>
<i className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="overflow-x-auto border border-slate-200 rounded-lg">
<table className="w-full text-sm" id="staffTable">
<thead className="bg-slate-50 text-slate-600">
<tr className="border-b border-slate-200">
<th className="text-left font-medium px-4 py-2.5">Name</th>
<th className="text-left font-medium px-4 py-2.5">Department</th>
<th className="text-left font-medium px-4 py-2.5">Phone No</th>
<th className="text-left font-medium px-4 py-2.5">Availability</th>
<th className="text-left font-medium px-4 py-2.5">Current Task</th>
<th className="text-left font-medium px-4 py-2.5">Today's Task Logs</th>
<th className="text-right font-medium px-4 py-2.5">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200" id="staffTableBody">

<tr data-availability="Available" data-department="Room Service" data-name="John Doe" data-phone="+971 501234567">
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<img alt="John Doe" className="h-8 w-8 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<div className="font-medium text-slate-900">John Doe</div>
</div>
</td>
<td className="px-4 py-3 text-slate-700">Room Service</td>
<td className="px-4 py-3 text-slate-700">+971 501234567</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 px-2 py-0.5 text-xs">Available</span>
</td>
<td className="px-4 py-3 text-slate-700">Deliver Order #234</td>
<td className="px-4 py-3">
<button className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-900 px-2 py-1 rounded-md hover:bg-slate-100" data-open-modal="taskLogModal">
<i className="h-4 w-4" data-lucide="list"></i>
<span>View Logs</span>
</button>
</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-2">
<button className="p-2 rounded-md hover:bg-slate-100" data-edit="" title="Edit Staff">
<i className="h-4 w-4" data-lucide="edit-3"></i>
</button>
<button className="p-2 rounded-md hover:bg-slate-100 text-rose-600 hover:text-rose-700" data-remove="" title="Remove Staff">
<i className="h-4 w-4" data-lucide="trash-2"></i>
</button>
</div>
</td>
</tr>

<tr data-availability="Busy" data-department="Housekeeping" data-name="Sara Ali" data-phone="+971 507654321">
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<img alt="Sara Ali" className="h-8 w-8 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<div className="font-medium text-slate-900">Sara Ali</div>
</div>
</td>
<td className="px-4 py-3 text-slate-700">Housekeeping</td>
<td className="px-4 py-3 text-slate-700">+971 507654321</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 text-xs">Busy</span>
</td>
<td className="px-4 py-3 text-slate-700">Room Cleanup #405</td>
<td className="px-4 py-3">
<button className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-900 px-2 py-1 rounded-md hover:bg-slate-100" data-open-modal="taskLogModal">
<i className="h-4 w-4" data-lucide="list"></i>
<span>View Logs</span>
</button>
</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-2">
<button className="p-2 rounded-md hover:bg-slate-100" data-edit="" title="Edit Staff">
<i className="h-4 w-4" data-lucide="edit-3"></i>
</button>
<button className="p-2 rounded-md hover:bg-slate-100 text-rose-600 hover:text-rose-700" data-remove="" title="Remove Staff">
<i className="h-4 w-4" data-lucide="trash-2"></i>
</button>
</div>
</td>
</tr>

<tr data-availability="Offline" data-department="Transport" data-name="Aamir Khan" data-phone="+971 504444444">
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<img alt="Aamir Khan" className="h-8 w-8 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<div className="font-medium text-slate-900">Aamir Khan</div>
</div>
</td>
<td className="px-4 py-3 text-slate-700">Transport</td>
<td className="px-4 py-3 text-slate-700">+971 504444444</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 text-xs">Offline</span>
</td>
<td className="px-4 py-3 text-slate-700">-</td>
<td className="px-4 py-3">
<button className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-900 px-2 py-1 rounded-md hover:bg-slate-100" data-open-modal="taskLogModal">
<i className="h-4 w-4" data-lucide="list"></i>
<span>View Logs</span>
</button>
</td>
<td className="px-4 py-3">
<div className="flex items-center justify-end gap-2">
<button className="p-2 rounded-md hover:bg-slate-100" data-edit="" title="Edit Staff">
<i className="h-4 w-4" data-lucide="edit-3"></i>
</button>
<button className="p-2 rounded-md hover:bg-slate-100 text-rose-600 hover:text-rose-700" data-remove="" title="Remove Staff">
<i className="h-4 w-4" data-lucide="trash-2"></i>
</button>
</div>
</td>
</tr>
</tbody>
</table>
<div className="hidden p-6 text-center text-sm text-slate-500" id="noResults">No staff found. Try adjusting your filters.</div>
</div>
</div>
</section>
</main>
</div>

<div className="fixed inset-0 z-50 hidden" id="taskLogModal">
<div className="absolute inset-0 bg-slate-900/40" data-close-modal=""></div>
<div className="absolute inset-0 flex items-end sm:items-center justify-center p-4">
<div className="w-full sm:w-[520px] bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
<h3 className="text-[18px] font-semibold tracking-tight">Today's Task Logs</h3>
<button aria-label="Close" className="p-2 rounded-md hover:bg-slate-100" data-close-modal="">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<div className="p-4">
<ul className="space-y-2 text-sm text-slate-700" id="taskLogs">
<li className="flex items-start gap-2">
<span className="h-1.5 w-1.5 mt-2 rounded-full bg-slate-400"></span>
                08:15 AM – Cleaned Room #402
              </li>
<li className="flex items-start gap-2">
<span className="h-1.5 w-1.5 mt-2 rounded-full bg-slate-400"></span>
                09:10 AM – Delivered breakfast to Room #408
              </li>
<li className="flex items-start gap-2">
<span className="h-1.5 w-1.5 mt-2 rounded-full bg-slate-400"></span>
                10:20 AM – Checked laundry status
              </li>
</ul>
<div className="text-xs text-slate-500 mt-3">Showing logs for today.</div>
</div>
<div className="px-4 py-3 border-t border-slate-200 flex justify-end">
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-slate-200 bg-white hover:bg-slate-50" data-close-modal="">
              Close
            </button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="editStaffModal">
<div className="absolute inset-0 bg-slate-900/40" data-close-modal=""></div>
<div className="absolute inset-0 flex items-end sm:items-center justify-center p-4">
<div className="w-full sm:w-[560px] bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
<h3 className="text-[18px] font-semibold tracking-tight">Edit Staff</h3>
<button aria-label="Close" className="p-2 rounded-md hover:bg-slate-100" data-close-modal="">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<div className="p-4 space-y-3">
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="block text-xs text-slate-600 mb-1.5">Name</label>
<input className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" id="editName" type="text"/>
</div>
<div>
<label className="block text-xs text-slate-600 mb-1.5">Phone No</label>
<input className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" id="editPhone" type="tel"/>
</div>
<div>
<label className="block text-xs text-slate-600 mb-1.5">Department</label>
<div className="relative">
<select className="appearance-none w-full rounded-md border border-slate-300 bg-white pl-3 pr-9 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" id="editDepartment">
<option>Housekeeping</option>
<option>Room Service</option>
<option>Transport</option>
<option>Maintenance</option>
<option>Front Desk</option>
</select>
<i className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="block text-xs text-slate-600 mb-1.5">Availability</label>
<div className="relative">
<select className="appearance-none w-full rounded-md border border-slate-300 bg-white pl-3 pr-9 py-25 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate400" id="editAvailability">
<option>Available</option>
<option>Busy</option>
<option>Offline</option>
</select>
<i className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div>
<label className="block text-xs text-slate-600 mb1.5">Current Task</label>
<input className="w-full rounded-md border border-slate-300 bg-white-3 py-2.5 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" id="editTask" placeholder="e.g., Deliver Order #234 or -" type="text"/>
</div>
</div>
<div className="px-4 py-3 border-t border-slate-200 flex justify-end gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-slate-200 bg-white hover:bg-slate-50" data-close-modal="">
              Cancel
            </button>
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md bg-slate-900 text-white hover:bg-slate-800" id="saveEditBtn">
<i className="h-4 w-4" data-lucide="save"></i>
              Save Changes
            </button>
</div>
</div>
</div>
</div>


    </>
  );
}
