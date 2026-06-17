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



      // Icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
      });

      // Data
      const excludeDepartments = ["Spa & Wellness", "Transport Services"];
      const allFloors = ["Ground","1","2","3","4","5","6","7","8","9","10"];

      const sampleAvatars = [
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=256&h=256&fit=crop&crop=faces&auto=format",
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&h=256&fit=crop&crop=faces&auto=format",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&h=256&fit=crop&crop=faces&auto=format",
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=256&h=256&fit=crop&crop=faces&auto=format",
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=256&h=256&fit=crop&crop=faces&auto=format",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&h=256&fit=crop&crop=faces&auto=format"
      ];

      let staff = [
        { id: crypto.randomUUID(), name: "Aarav Patel", department: "Housekeeping & Essentials", floors: ["3","4"], status: "Available", current_task: "Room 412 Turnover", avatar: sampleAvatars[0] },
        { id: crypto.randomUUID(), name: "Mia Chen", department: "Front Office", floors: ["Ground"], status: "Available", current_task: "Guest Check-in Support", avatar: sampleAvatars[1] },
        { id: crypto.randomUUID(), name: "Liam O'Connor", department: "Maintenance", floors: ["2","3"], status: "Busy", current_task: "HVAC Inspection (2F)", avatar: sampleAvatars[2] },
        { id: crypto.randomUUID(), name: "Sofia Rossi", department: "Laundry", floors: ["1"], status: "Available", current_task: "—", avatar: sampleAvatars[3] },
        { id: crypto.randomUUID(), name: "Noah Smith", department: "Room Service", floors: ["5","6"], status: "Busy", current_task: "Suite 602 Meal Delivery", avatar: sampleAvatars[4] }
      ];

      // Metrics (simple simulated)
      const metrics = {
        queue: 6,
        assignedToday: 28,
        avgTime: "2m 40s"
      };

      // Elements
      const deptBtn = document.getElementById('deptBtn');
      const deptBtnLabel = document.getElementById('deptBtnLabel');
      const deptList = document.getElementById('deptList');
      const floorsBtn = document.getElementById('floorsBtn');
      const floorsList = document.getElementById('floorsList');
      const floorsChips = document.getElementById('floorsChips');
      const floorsField = document.getElementById('floorsField');
      const floorHiddenNote = document.getElementById('floorHiddenNote');
      const availabilityToggle = document.getElementById('availabilityToggle');
      const availabilityLabel = document.getElementById('availabilityLabel');
      const addStaffBtn = document.getElementById('addStaffBtn');
      const resetFormBtn = document.getElementById('resetForm');
      const fullNameInput = document.getElementById('fullName');

      const staffTbody = document.getElementById('staffTbody');
      const staffCount = document.getElementById('staffCount');
      const staffSearch = document.getElementById('staffSearch');
      const filterAvailable = document.getElementById('filterAvailable');
      const filterBusy = document.getElementById('filterBusy');
      const floorTbody = document.getElementById('floorTbody');

      const metricActive = document.getElementById('metricActive');
      const metricQueue = document.getElementById('metricQueue');
      const metricAssignedToday = document.getElementById('metricAssignedToday');
      const metricPendingQueue = document.getElementById('metricPendingQueue');
      const metricAvgTime = document.getElementById('metricAvgTime');

      // Modal elements
      const profileModal = document.getElementById('profileModal');
      const closeProfile = document.getElementById('closeProfile');
      const closeProfile2 = document.getElementById('closeProfile2');
      const removeFromProfile = document.getElementById('removeFromProfile');
      const profileAvatar = document.getElementById('profileAvatar');
      const profileName = document.getElementById('profileName');
      const profileDept = document.getElementById('profileDept');
      const profileFloors = document.getElementById('profileFloors');
      const profileStatus = document.getElementById('profileStatus');
      const profileTask = document.getElementById('profileTask');

      // Tabs
      const tabButtons = document.querySelectorAll('.tab-btn');
      const tabPanels = {
        'all-staff': document.getElementById('tab-all-staff'),
        'floor-mapping': document.getElementById('tab-floor-mapping'),
        'task-system': document.getElementById('tab-task-system')
      };

      // State
      let selectedDept = null;
      let selectedFloors = [];
      let availability = true;
      let currentProfileId = null;
      let filterState = null; // 'Available' | 'Busy' | null

      // Initialize floor options
      (function renderFloorOptions() {
        const container = floorsList.querySelector('.grid');
        // Already has "Ground" added, now add 1..10
        allFloors.slice(1).forEach(f => {
          const btn = document.createElement('button');
          btn.className = "floor-option group flex items-center justify-between px-2 py-2 rounded-md hover:bg-neutral-50 text-[14px]";
          btn.setAttribute('data-floor', f);
          btn.innerHTML = `<span>${f}</span>
            <span class="checkbox h-4 w-4 rounded border border-neutral-300 bg-white group-[.selected]:bg-neutral-900 group-[.selected]:border-neutral-900 flex items-center justify-center transition-colors">
              <i data-lucide="check" stroke-width="1.5" class="h-3 w-3 text-white hidden"></i>
            </span>`;
          container.appendChild(btn);
        });
        lucide.createIcons();
      })();

      function updateFloorsChips() {
        floorsChips.innerHTML = '';
        if (!selectedFloors.length) {
          const span = document.createElement('span');
          span.className = 'text-neutral-500';
          span.textContent = 'Select floors';
          floorsChips.appendChild(span);
          return;
        }
        selectedFloors.sort((a,b) => (a === 'Ground' ? -1 : b === 'Ground' ? 1 : Number(a) - Number(b)));
        selectedFloors.forEach(f => {
          const chip = document.createElement('span');
          chip.className = 'inline-flex items-center gap-1 px-2 h-7 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200 text-[12px]';
          chip.innerHTML = `<span>${f}</span>`;
          floorsChips.appendChild(chip);
        });
      }

      function toggleDropdown(el) {
        el.classList.toggle('hidden');
      }

      // Department dropdown
      deptBtn.addEventListener('click', () => {
        toggleDropdown(deptList);
      });

      document.addEventListener('click', (e) => {
        if (!deptBtn.contains(e.target) && !deptList.contains(e.target)) {
          deptList.classList.add('hidden');
        }
        if (!floorsBtn.contains(e.target) && !floorsList.contains(e.target)) {
          floorsList.classList.add('hidden');
        }
      });

      deptList.querySelectorAll('button[data-dept]').forEach(btn => {
        btn.addEventListener('click', () => {
          selectedDept = btn.getAttribute('data-dept');
          deptBtnLabel.textContent = selectedDept;
          deptBtnLabel.classList.remove('text-neutral-500');
          deptList.classList.add('hidden');
          const isExcluded = excludeDepartments.includes(selectedDept);
          floorsField.classList.toggle('hidden', isExcluded);
          floorHiddenNote.classList.toggle('hidden', !isExcluded);
          if (isExcluded) {
            selectedFloors = [];
            floorsList.querySelectorAll('.floor-option').forEach(o => {
              o.classList.remove('selected');
              const icon = o.querySelector('i[data-lucide="check"]');
              if (icon) icon.classList.add('hidden');
              const box = o.querySelector('.checkbox');
              if (box) box.style.backgroundColor = 'white';
            });
            updateFloorsChips();
          }
        });
      });

      // Floors multiselect
      floorsBtn.addEventListener('click', () => {
        toggleDropdown(floorsList);
      });

      floorsList.addEventListener('click', (e) => {
        const btn = e.target.closest('.floor-option');
        if (!btn) return;
        const floor = btn.getAttribute('data-floor');
        const idx = selectedFloors.indexOf(floor);
        if (idx === -1) {
          selectedFloors.push(floor);
          btn.classList.add('selected');
          const icon = btn.querySelector('i[data-lucide="check"]');
          if (icon) icon.classList.remove('hidden');
        } else {
          selectedFloors.splice(idx, 1);
          btn.classList.remove('selected');
          const icon = btn.querySelector('i[data-lucide="check"]');
          if (icon) icon.classList.add('hidden');
        }
        updateFloorsChips();
      });

      // Availability toggle
      availabilityToggle.addEventListener('click', () => {
        availability = !availability;
        const track = availabilityToggle.querySelector('.track');
        const knob = availabilityToggle.querySelector('.knob');
        if (availability) {
          track.classList.remove('bg-neutral-200');
          track.classList.add('bg-emerald-500/90');
          knob.classList.add('translate-x-5');
          availabilityLabel.textContent = 'Available';
        } else {
          track.classList.remove('bg-emerald-500/90');
          track.classList.add('bg-neutral-200');
          knob.classList.remove('translate-x-5');
          availabilityLabel.textContent = 'Busy';
        }
      });

      // Reset form
      resetFormBtn.addEventListener('click', () => {
        fullNameInput.value = '';
        selectedDept = null;
        selectedFloors = [];
        deptBtnLabel.textContent = 'Select department';
        deptBtnLabel.classList.add('text-neutral-500');
        floorsField.classList.remove('hidden');
        floorHiddenNote.classList.add('hidden');
        floorsList.classList.add('hidden');
        deptList.classList.add('hidden');
        floorsList.querySelectorAll('.floor-option').forEach(o => {
          o.classList.remove('selected');
          const icon = o.querySelector('i[data-lucide="check"]');
          if (icon) icon.classList.add('hidden');
        });
        availability = true;
        const track = availabilityToggle.querySelector('.track');
        const knob = availabilityToggle.querySelector('.knob');
        track.classList.remove('bg-neutral-200');
        track.classList.add('bg-emerald-500/90');
        knob.classList.add('translate-x-5');
        availabilityLabel.textContent = 'Available';
        updateFloorsChips();
      });

      // Add staff
      addStaffBtn.addEventListener('click', () => {
        const name = fullNameInput.value.trim();
        if (!name) {
          alert('Please enter a full name.');
          return;
        }
        if (!selectedDept) {
          alert('Please select a department.');
          return;
        }
        if (!excludeDepartments.includes(selectedDept) && selectedFloors.length === 0) {
          alert('Please assign at least one floor.');
          return;
        }
        const newStaff = {
          id: crypto.randomUUID(),
          name,
          department: selectedDept,
          floors: excludeDepartments.includes(selectedDept) ? [] : [...selectedFloors],
          status: availability ? 'Available' : 'Busy',
          current_task: '—',
          avatar: sampleAvatars[Math.floor(Math.random()*sampleAvatars.length)]
        };
        staff.unshift(newStaff);
        resetFormBtn.click();
        renderAll();
      });

      // Renderers
      function renderStaffTable() {
        const query = staffSearch.value.trim().toLowerCase();
        const filtered = staff.filter(s => {
          const matchQuery = !query || s.name.toLowerCase().includes(query) || s.department.toLowerCase().includes(query);
          const matchFilter = !filterState || s.status === filterState;
          return matchQuery && matchFilter;
        });
        staffCount.textContent = filtered.length.toString();
        staffTbody.innerHTML = '';

        filtered.forEach(s => {
          const tr = document.createElement('tr');
          tr.className = 'hover:bg-neutral-50/60';

          const floorsText = s.floors.length ? s.floors.join(', ') : '—';
          const availabilityBadge = s.status === 'Available'
            ? `<span class="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 h-7 text-[12px] text-emerald-800"><span class="h-1.5 w-1.5 rounded-full bg-emerald-600"></span> Available</span>`
            : `<span class="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-2.5 h-7 text-[12px] text-rose-800"><span class="h-1.5 w-1.5 rounded-full bg-rose-600"></span> Busy</span>`;

          tr.innerHTML = `
            <td class="px-4 py-3">
              <div class="flex items-center gap-3">
                <img class="h-9 w-9 rounded-full ring-1 ring-neutral-200 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="">
                <div>
                  <div class="text-[14px] font-medium tracking-tight">${s.name}</div>
                  <div class="text-[12px] text-neutral-500">ID: ${s.id.slice(0,8)}</div>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-neutral-700">${s.department}</td>
            <td class="px-4 py-3 text-neutral-700">${floorsText}</td>
            <td class="px-4 py-3">${availabilityBadge}</td>
            <td class="px-4 py-3 text-neutral-700">${s.current_task}</td>
            <td class="px-4 py-3">
              <div class="flex items-center justify-end gap-1.5">
                <button data-action="view" data-id="${s.id}" class="h-8 w-8 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 flex items-center justify-center" title="View Profile">
                  <i data-lucide="eye" stroke-width="1.5" class="h-4 w-4"></i>
                </button>
                <button data-action="edit" data-id="${s.id}" class="h-8 w-8 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 flex items-center justify-center" title="Edit">
                  <i data-lucide="square-pen" stroke-width="1.5" class="h-4 w-4"></i>
                </button>
                <button data-action="remove" data-id="${s.id}" class="h-8 w-8 rounded-md border border-red-200 bg-white hover:bg-red-50 flex items-center justify-center" title="Remove">
                  <i data-lucide="trash-2" stroke-width="1.5" class="h-4 w-4 text-red-600"></i>
                </button>
              </div>
            </td>
          `;
          staffTbody.appendChild(tr);
        });
        lucide.createIcons();
      }

      function renderFloorMapping() {
        floorTbody.innerHTML = '';
        const map = new Map();
        staff.forEach(s => {
          s.floors.forEach(f => {
            if (!map.has(f)) map.set(f, []);
            map.get(f).push({ name: s.name, department: s.department });
          });
        });
        // Sort floors: Ground first then numeric
        const ordered = Array.from(map.keys()).sort((a,b) => (a === 'Ground' ? -1 : b === 'Ground' ? 1 : Number(a) - Number(b)));
        ordered.forEach(floor => {
          const people = map.get(floor);
          const names = people.map(p => p.name).join(', ');
          const departments = Array.from(new Set(people.map(p => p.department)));
          const deptText = departments.length > 1 ? 'Various' : departments[0];
          const tr = document.createElement('tr');
          tr.className = 'hover:bg-neutral-50/60';
          tr.innerHTML = `
            <td class="px-4 py-3 text-neutral-700">${floor}</td>
            <td class="px-4 py-3 text-neutral-700">${names}</td>
            <td class="px-4 py-3 text-neutral-700">${deptText}</td>
          `;
          floorTbody.appendChild(tr);
        });
      }

      function renderMetrics() {
        const activeCount = staff.filter(s => s.status === 'Available').length;
        metricActive.textContent = activeCount.toString();
        metricQueue.textContent = metrics.queue.toString();
        metricAssignedToday.textContent = metrics.assignedToday.toString();
        metricPendingQueue.textContent = metrics.queue.toString();
        metricAvgTime.textContent = metrics.avgTime;
      }

      function renderAll() {
        renderStaffTable();
        renderFloorMapping();
        renderMetrics();
      }

      // Listeners for table actions
      staffTbody.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-action]');
        if (!btn) return;
        const id = btn.getAttribute('data-id');
        const action = btn.getAttribute('data-action');
        if (action === 'remove') {
          const s = staff.find(x => x.id === id);
          if (!s) return;
          const ok = confirm(`Remove ${s.name}?`);
          if (ok) {
            staff = staff.filter(x => x.id !== id);
            renderAll();
            // If modal open for this staff, close it
            if (currentProfileId === id) hideProfile();
          }
        } else if (action === 'view') {
          openProfile(id);
        } else if (action === 'edit') {
          alert('Quick edit coming soon.');
        }
      });

      // Search & filter
      staffSearch.addEventListener('input', renderStaffTable);
      filterAvailable.addEventListener('click', () => {
        filterState = filterState === 'Available' ? null : 'Available';
        filterAvailable.classList.toggle('bg-neutral-900', filterState === 'Available');
        filterAvailable.classList.toggle('text-white', filterState === 'Available');
        filterAvailable.classList.toggle('border-neutral-900', filterState === 'Available');
        // Reset other
        filterBusy.classList.remove('bg-neutral-900','text-white','border-neutral-900');
        renderStaffTable();
      });
      filterBusy.addEventListener('click', () => {
        filterState = filterState === 'Busy' ? null : 'Busy';
        filterBusy.classList.toggle('bg-neutral-900', filterState === 'Busy');
        filterBusy.classList.toggle('text-white', filterState === 'Busy');
        filterBusy.classList.toggle('border-neutral-900', filterState === 'Busy');
        // Reset other
        filterAvailable.classList.remove('bg-neutral-900','text-white','border-neutral-900');
        renderStaffTable();
      });

      // Tabs
      tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const tab = btn.getAttribute('data-tab');
          tabButtons.forEach(b => b.setAttribute('data-active', String(b === btn)));
          Object.entries(tabPanels).forEach(([key, panel]) => {
            if (key === tab) panel.classList.remove('hidden'); else panel.classList.add('hidden');
          });
        });
      });

      // Profile Modal
      function openProfile(id) {
        const s = staff.find(x => x.id === id);
        if (!s) return;
        currentProfileId = id;
        profileAvatar.src = s.avatar;
        profileName.textContent = s.name;
        profileDept.textContent = s.department;
        profileFloors.textContent = s.floors.length ? s.floors.join(', ') : '—';
        profileStatus.textContent = s.status;
        profileTask.textContent = s.current_task || '—';
        profileModal.classList.remove('hidden');
      }
      function hideProfile() {
        currentProfileId = null;
        profileModal.classList.add('hidden');
      }
      closeProfile.addEventListener('click', hideProfile);
      closeProfile2.addEventListener('click', hideProfile);
      profileModal.addEventListener('click', (e) => {
        if (e.target === profileModal) hideProfile();
      });
      removeFromProfile.addEventListener('click', () => {
        if (!currentProfileId) return;
        const s = staff.find(x => x.id === currentProfileId);
        if (!s) return;
        const ok = confirm(`Remove ${s.name}?`);
        if (ok) {
          staff = staff.filter(x => x.id !== currentProfileId);
          hideProfile();
          renderAll();
        }
      });

      // Export (simple CSV)
      document.getElementById('exportStaff').addEventListener('click', () => {
        const header = ["Name","Department","Floors","Availability","Current Task"];
        const rows = staff.map(s => [
          `"${s.name}"`,
          `"${s.department}"`,
          `"${s.floors.join(';')}"`,
          `"${s.status}"`,
          `"${s.current_task}"`
        ].join(','));
        const csv = [header.join(','), ...rows].join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'aerotag-staff.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });

      // Initial render
      renderAll();
      updateFloorsChips();
    
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
      

<div className="min-h-screen">

<header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center h-9 w-9 rounded-md bg-neutral-900 text-white text-sm tracking-tight font-medium">AT</div>
<div className="flex flex-col">
<span className="text-[15px] tracking-tight font-semibold">AeroTag Assist</span>
<span className="text-[12px] text-neutral-500 leading-tight">Admin Panel</span>
</div>
</div>
<div className="hidden md:flex items-center gap-3">
<div className="relative w-80">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
<i className="h-4 w-4 text-neutral-400" data-lucide="search" strokeWidth="1.5"></i>
</div>
<input className="w-full h-10 rounded-md border border-neutral-200 bg-white pl-9 pr-3 text-[14px] placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-neutral-200/60 focus:border-neutral-300" placeholder="Search staff, departments, floors…" type="text"/>
</div>
<button className="h-10 px-3 rounded-md border border-neutral-200 bg-white text-[14px] hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-200/70 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="bell" strokeWidth="1.5"></i>
<span className="hidden lg:inline text-[13px] text-neutral-600">Notifications</span>
</button>
<div className="h-8 w-[1px] bg-neutral-200 rounded"></div>
<button className="flex items-center gap-3 group focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-200/70 rounded-md">
<img alt="Admin avatar" className="h-9 w-9 rounded-full ring-1 ring-neutral-200 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;h=256&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div className="text-left hidden sm:block">
<div className="text-[13px] font-medium leading-tight tracking-tight">Admin</div>
<div className="text-[12px] text-neutral-500 leading-tight">Operations</div>
</div>
<i className="h-4 w-4 text-neutral-400 group-hover:text-neutral-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-10">

<div className="mb-8">
<div className="flex items-center gap-2 text-[12px] text-neutral-500">
<span>Admin</span>
<i className="h-3.5 w-3.5 text-neutral-300" data-lucide="slash" strokeWidth="1.5"></i>
<span>Staffing</span>
</div>
<div className="mt-2 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div>
<h1 className="text-[28px] md:text-[30px] font-semibold tracking-tight">Staff Management &amp; Allocation</h1>
<p className="mt-1.5 text-[14px] text-neutral-600 max-w-2xl">Add staff, assign departments and floors, and enable automatic task distribution.</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 h-9 text-[13px] text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-200/70">
<i className="h-4 w-4 text-emerald-600" data-lucide="activity" strokeWidth="1.5"></i>
                System Health: <span className="font-medium text-emerald-700 ml-1">Nominal</span>
</span>
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 h-9 text-[13px] hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-200/70" id="exportStaff">
<i className="h-4 w-4" data-lucide="download" strokeWidth="1.5"></i>
                Export
              </button>
</div>
</div>
</div>

<section className="mb-8">
<div className="rounded-xl border border-neutral-200 bg-white shadow-sm">
<div className="p-5 sm:p-6 border-b border-neutral-200">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-[18px] font-semibold tracking-tight">Add New Staff</h2>
<p className="mt-1 text-[13px] text-neutral-600">Register new team members and configure their working roles and zones.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 h-9 text-[13px] text-neutral-700">
<i className="h-4 w-4 text-emerald-600" data-lucide="shield-check" strokeWidth="1.5"></i>
                    Access: <span className="ml-1 text-neutral-800">Moderators</span>
</span>
</div>
</div>
</div>
<div className="p-5 sm:p-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-7">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

<div className="sm:col-span-2">
<label className="block text-[13px] text-neutral-700 mb-1.5">Full Name</label>
<div className="relative">
<input className="w-full h-11 rounded-md border border-neutral-200 bg-white px-3.5 text-[14px] placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-neutral-200/70 focus:border-neutral-300" id="fullName" placeholder="Enter staff name" type="text"/>
<div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
<i className="h-4 w-4 text-neutral-300" data-lucide="user" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="sm:col-span-2">
<label className="block text-[13px] text-neutral-700 mb-1.5">Department</label>
<div className="relative">
<button className="w-full h-11 rounded-md border border-neutral-200 bg-white px-3.5 text-[14px] flex items-center justify-between hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-200/70" id="deptBtn" type="button">
<span classtext-neutral-500"="" id="deptBtnLabel">Select department</span>
<i className="h-4 w-4 text-neutral-400" data-lucide="chevron-down" strokeWidth="1."></i>
</button>
<div className="absolute z-20 mt-2 w-full rounded-md border border-neutral-200 bg-white shadow-lg hidden" id="deptList">
<ul className="py-1.5 max-h-60 overflow-auto">
<li><button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-dept="Housekeeping &amp; Essentials">Housekeeping &amp; Essentials</button></li>
<li><button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-dept="Room Service">Room Service</button></li>
<li><button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-dept="Laundry">Laundry</button></li>
<li><button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-dept="Maintenance">Maintenance</button></li>
<li><button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-dept="Front Office">Front Office</button></li>
<li><button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-dept="Spa &amp; Wellness">Spa &amp; Wellness</button></li>
<li><button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-dept="Transport Services">Transport Services</button></li>
</ul>
</div>
</div>
</div>

<div className="sm:col-span-2" id="floorsField">
<div className="flex items-center justify-between">
<label className="block text-[13px] text-neutral-700 mb-1.5">Assign Floors</label>
<span className="text-[12px] text-neutral-500" id="floorsHint">Select one or more</span>
</div>
<div className="relative">
<button className="w-full min-h-11 rounded-md border border-neutral-200 bg-white px-3.5 text-[14px] flex items-center justify-between gap-2 hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-200/70" id="floorsBtn" type="button">
<div className="flex flex-wrap items-center gap-2 py-1" id="floorsChips">
<span className="text-neutral-500">Select floors</span>
</div>
<i className="h-4 w-4 text-neutral-400 shrink-0" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="absolute z-20 mt-2 w-full rounded-md border border-neutral-200 bg-white shadow-lg hidden" id="floorsList">
<div className="p-2 max-h-64 overflow-auto">
<div className="grid grid-cols-2 sm:grid-cols-3 gap-1">

<button className="floor-option group flex items-center justify-between px-2 py-2 rounded-md hover:bg-neutral-50 text-[14px]" data-floor="Ground">
<span>Ground</span>
<span className="checkbox h-4 w-4 rounded border border-neutral-300 bg-white group-[.selected]:bg-neutral-900 group-[.selected]:border-neutral-900 flex items-center justify-center transition-colors">
<i className="h-3 w-3 text-white hidden" data-lucide="check" strokeWidth="1.5"></i>
</span>
</button>
<template id="floorRowTpl"></template>
</div>
</div>
</div>
</div>
</div>

<div className="sm:col-span-2">
<label className="block text-[13px] text-neutral-700 mb-1.5">Availability</label>
<div>
<button className="inline-flex items-center gap-3 rounded-md border border-neutral-200 bg-white px-3.5 h-11 hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-200/70" id="availabilityToggle" type="button">
<span className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors" data-state="on">
<span className="track absolute inset-0 rounded-full bg-emerald-500/90"></span>
<span className="knob relative left-0 inline-block h-5 w-5 translate-x-5 rounded-full bg-white shadow ring-1 ring-black/5 transition-transform"></span>
</span>
<span className="text-[14px]" id="availabilityLabel">Available</span>
</button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="rounded-lg border border-neutral-200 bg-neutral-50/60 p-4">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-500" data-lucide="info" strokeWidth="1.5"></i>
<p className="text-[13px] text-neutral-600">Departments like Spa &amp; Wellness or Transport Services are not floor-bound. Floor assignment will be hidden when selected.</p>
</div>
<div className="mt-3 hidden" id="floorHiddenNote">
<div className="flex items-start gap-2 rounded-md border border-amber-200 bg-amber-50 px-3 py-2">
<i className="h-4 w-4 text-amber-600 mt-0.5" data-lucide="alert-triangle" strokeWidth="1.5"></i>
<p className="text-[13px] text-amber-800">Floor assignment is disabled for this department.</p>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-md border border-neutral-200 bg-white p-3">
<div className="text-[12px] text-neutral-500">Active Staff</div>
<div className="mt-1.5 text-[20px] font-semibold tracking-tight" id="metricActive">—</div>
</div>
<div className="rounded-md border border-neutral-200 bg-white p-3">
<div className="text-[12px] text-neutral-500">Tasks In Queue</div>
<div className="mt-1.5 text-[20px] font-semibold tracking-tight" id="metricQueue">—</div>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-end gap-3">
<button className="h-10 px-4 rounded-md border border-neutral-200 bg-white text-[14px] hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-200/70" id="resetForm">
                      Reset
                    </button>
<button className="h-10 px-4 rounded-md bg-neutral-900 text-white text-[14px] hover:bg-neutral-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-200/70 inline-flex items-center gap-2" id="addStaffBtn">
<i className="h-4 w-4" data-lucide="plus" strokeWidth="1.5"></i>
                      Add Staff Member
                    </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section>
<div className="rounded-xl border border-neutral-200 bg-white shadow-sm">

<div className="px-4 sm:px-6 pt-4">
<div className="flex flex-wrap gap-2">
<button className="tab-btn inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3 h-9 text-[13px] text-neutral-800 hover:bg-neutral-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-200/70 data-[active=true]:bg-white data-[active=true]:border-neutral-300 data-[active=true]:shadow-sm" data-active="true" data-tab="all-staff">
<i className="h-4 w-4" data-lucide="users" strokeWidth="1.5"></i>
                  All Staff
                </button>
<button className="tab-btn inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3 h-9 text-[13px] text-neutral-800 hover:bg-neutral-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-200/70" data-tab="floor-mapping">
<i className="h-4 w-4" data-lucide="building-2" strokeWidth="1.5"></i>
                  Floor-Wise Staff Mapping
                </button>
<button className="tab-btn inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3 h-9 text-[13px] text-neutral-800 hover:bg-neutral-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-200/70" data-tab="task-system">
<i className="h-4 w-4" data-lucide="sparkles" strokeWidth="1.5"></i>
                  Task Assignment System
                </button>
</div>
</div>
<div className="mt-4 border-t border-neutral-200"></div>

<div className="p-4 sm:p-6">

<div className="tab-panel" id="tab-all-staff">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
<div className="flex items-center gap-2">
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" data-lucide="search" strokeWidth="1.5"></i>
<input className="h-10 pl-8 pr-3 w-72 rounded-md border border-neutral-200 bg-white text-[14px] placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-neutral-200/70 focus:border-neutral-300" id="staffSearch" placeholder="Search by name or department..." type="text"/>
</div>
<div className="hidden sm:flex items-center gap-2">
<span className="text-[13px] text-neutral-500">Filter:</span>
<button className="h-9 px-3 rounded-md border border-neutral-200 bg-white text-[13px] hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-200/70" id="filterAvailable">Available</button>
<button className="h-9 px-3 rounded-md border border-neutral-200 bg-white text-[13px] hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-200/70" id="filterBusy">Busy</button>
</div>
</div>
<div className="text-[13px] text-neutral-500">
<span id="staffCount">0</span> members
                  </div>
</div>
<div className="overflow-x-auto rounded-lg border border-neutral-200">
<table className="min-w-full bg-white text-[14px]">
<thead>
<tr className="text-left text-[12px] text-neutral-500">
<th className="px-4 py-3 border-b border-neutral-200 font-medium">Name</th>
<th className="px-4 py-3 border-b border-neutral-200 font-medium">Department</th>
<th className="px-4 py-3 border-b border-neutral-200 font-medium">Assigned Floors</th>
<th className="px-4 py-3 border-b border-neutral-200 font-medium">Availability</th>
<th className="px-4 py-3 border-b border-neutral-200 font-medium">Current Task</th>
<th className="px-4 py-3 border-b border-neutral-200 font-medium"></th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-200" id="staffTbody"></tbody>
</table>
</div>
</div>

<div className="tab-panel hidden" id="tab-floor-mapping">
<div className="overflow-x-auto rounded-lg border border-neutral-200">
<table className="min-w-full bg-white text-[14px]">
<thead>
<tr className="text-left text-[12px] text-neutral-500">
<th className="px-4 py-3 border-b border-neutral-200 font-medium">Floor</th>
<th className="px-4 py-3 border-b border-neutral-200 font-medium">Staff Assigned</th>
<th className="px-4 py-3 border-b border-neutral-200 font-medium">Department</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-200" id="floorTbody"></tbody>
</table>
</div>
</div>

<div className="tab-panel hidden" id="tab-task-system">
<div className="rounded-lg border border-neutral-200 bg-white">
<div className="p-5 sm:p-6">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-[18px] font-semibold tracking-tight">Smart Task Auto-Assignment</h3>
<p className="mt-1 text-[13px] text-neutral-600">Tasks are allocated automatically based on staff availability and floor-level service requests. If all staff are busy, tasks move to the queue and auto-assign once available.</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 h-8 text-[13px] text-emerald-800">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
                          Active
                        </span>
</div>
</div>
<div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-md border border-neutral-200 bg-neutral-50/60 p-4">
<div className="text-[12px] text-neutral-500">Auto-Assigned Today</div>
<div className="mt-1.5 text-[22px] font-semibold tracking-tight" id="metricAssignedToday">—</div>
</div>
<div className="rounded-md border border-neutral-200 bg-neutral-50/60 p-4">
<div className="text-[12px] text-neutral-500">Pending Queue</div>
<div className="mt-1.5 text-[22px] font-semibold tracking-tight" id="metricPendingQueue">—</div>
</div>
<div className="rounded-md border border-neutral-200 bg-neutral-50/60 p-4">
<div className="text-[12px] text-neutral-500">Avg. Assignment Time</div>
<div className="mt-1.5 text-[22px] font-semibold tracking-tight" id="metricAvgTime">—</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>

<div className="fixed inset-0 z- hidden" id="profileModal">
<div className="absolute inset-0 bg-black/30"></div>
<div className="absolute inset-0 flex items-end sm:items-center justify-center p-4">
<div className="w-full sm:max-w-md rounded-xl border border-neutral-200 bg-white shadow-2xl">
<div className="p-5 border-b border-neutral-200 flex items-center justify-between">
<h3 className="text-[18px] font-semibold tracking-tight">Staff Profile</h3>
<button className="h-8 w-8 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 flex items-center justify-center" id="closeProfile">
<i className="h-4 w-4" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-5">
<div className="flex items-start gap-4">
<img alt="Avatar" className="h-14 w-14 rounded-full ring-1 ring-neutral-200 object-cover" id="profileAvatar" src=""/>
<div>
<div className="text-[16px] font-semibold tracking-tight" id="profileName">—</div>
<div className="text-[13px] text-neutral-600" id="profileDept">—</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[12px] text-neutral-500">Floors</div>
<div className="mt-1 text-[14px]" id="profileFloors">—</div>
</div>
<div className="rounded-md border border-neutral-200 p-3">
<div className="text-[12px] text-neutral-500">Availability</div>
<div className="mt-1 text-[14px]" id="profileStatus">—</div>
</div>
</div>
<div className="mt-4 rounded-md border border-neutral-200 p-3">
<div className="text-[12px] text-neutral-500">Current Task</div>
<div className="mt-1 text-[14px]" id="profileTask">—</div>
</div>
</div>
<div className="p-5 border-t border-neutral-200 flex items-center justify-end gap-2">
<button className="h-10 px-3 rounded-md border border-red-200 text-red-700 bg-red-50 hover:bg-red-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-100 text-[14px]" id="removeFromProfile">
              Remove
            </button>
<button className="h-10 px-4 rounded-md bg-neutral-900 text-white text-[14px] hover:bg-neutral-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-200/70" id="closeProfile2">
              Close
            </button>
</div>
</div>
</div>
</div>


    </>
  );
}
