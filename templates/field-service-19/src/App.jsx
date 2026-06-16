import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();

      // Original popup logic for dates
      function togglePopup(id) {
          const popup = document.getElementById(id);
          const allPopups = ['start-date-popup', 'end-date-popup'];
          allPopups.forEach(pId => {
              if (pId !== id) {
                  document.getElementById(pId).classList.add('hidden');
              }
          });
          if (popup.classList.contains('hidden')) {
              popup.classList.remove('hidden');
          } else {
              popup.classList.add('hidden');
          }
      }

      function handleRecurrenceChange(selectElement) {
        const updateLink = document.getElementById('update-recurrence-link');
        if (selectElement.value === 'yes') {
          updateLink.classList.remove('hidden');
          toggleRecurrencePanel(true);
        } else {
          updateLink.classList.add('hidden');
        }
      }

      function toggleRecurrencePanel(show) {
        const panel = document.getElementById('recurrence-panel');
        const backdrop = document.getElementById('recurrence-backdrop');
        const drawer = document.getElementById('recurrence-drawer');
        if (show) {
          panel.classList.remove('invisible');
          setTimeout(() => {
            backdrop.classList.remove('opacity-0');
            drawer.classList.remove('translate-x-full');
          }, 10);
        } else {
          backdrop.classList.add('opacity-0');
          drawer.classList.add('translate-x-full');
          setTimeout(() => {
            panel.classList.add('invisible');
          }, 300);
        }
      }

      // New Function for Assignment Drawer
      function toggleAssignmentPanel(show) {
        const panel = document.getElementById('assignment-panel');
        const backdrop = document.getElementById('assignment-backdrop');
        const drawer = document.getElementById('assignment-drawer');
        if (show) {
          panel.classList.remove('invisible');
          setTimeout(() => {
            backdrop.classList.remove('opacity-0');
            drawer.classList.remove('translate-x-full');
          }, 10);
        } else {
          backdrop.classList.add('opacity-0');
          drawer.classList.add('translate-x-full');
          setTimeout(() => {
            panel.classList.add('invisible');
          }, 300);
        }
      }

      document.addEventListener('click', function(event) {
          const startInput = document.getElementById('start-date-input');
          const startPopup = document.getElementById('start-date-popup');
          const endInput = document.getElementById('end-date-input');
          const endPopup = document.getElementById('end-date-popup');
          if (startInput && startPopup && !startInput.contains(event.target) && !startPopup.contains(event.target)) {
              startPopup.classList.add('hidden');
          }
          if (endInput && endPopup && !endInput.contains(event.target) && !endPopup.contains(event.target)) {
              endPopup.classList.add('hidden');
          }
      });
    


      const selectedUsers = new Map();

      function toggleGroup(header) {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.chevron-icon');
        if (content.classList.contains('hidden')) {
          content.classList.remove('hidden');
          icon.setAttribute('data-lucide', 'chevron-up');
        } else {
          content.classList.add('hidden');
          icon.setAttribute('data-lucide', 'chevron-down');
        }
        lucide.createIcons();
      }

      function toggleUser(element) {
        const id = element.dataset.id;
        const activeIndicator = element.querySelector('.active-indicator');
        const actionIcon = element.querySelector('.action-icon');
        const actionBtn = element.querySelector('.action-btn');

        if (selectedUsers.has(id)) {
          selectedUsers.delete(id);
          element.classList.remove('bg-blue-50/30');
          activeIndicator.classList.add('hidden');
          actionIcon.setAttribute('data-lucide', 'user-plus');
          actionBtn.classList.remove('text-rose-600', 'hover:bg-rose-50');
          actionBtn.classList.add('text-emerald-600', 'hover:bg-emerald-50');
        } else {
          const user = {
            name: element.dataset.name,
            role: element.dataset.role,
            initials: element.dataset.initials,
            color: element.dataset.color,
            icon: element.dataset.icon
          };
          selectedUsers.set(id, user);
          element.classList.add('bg-blue-50/30');
          activeIndicator.classList.remove('hidden');
          actionIcon.setAttribute('data-lucide', 'user-x');
          actionBtn.classList.remove('text-emerald-600', 'hover:bg-emerald-50');
          actionBtn.classList.add('text-rose-600', 'hover:bg-rose-50');
        }
        lucide.createIcons();
        renderSelection();
      }

      function renderSelection() {
        const container = document.getElementById('selected-container');
        const count = document.getElementById('selected-count');
        container.innerHTML = '';
        count.innerText = `Users to be assigned (${selectedUsers.size})`;
        if (selectedUsers.size === 0) {
          container.innerHTML = '<p class="text-center text-xs text-gray-400 mt-4">No users selected</p>';
          return;
        }
        selectedUsers.forEach((user, id) => {
          const div = document.createElement('div');
          div.className = 'flex items-start gap-3 bg-white p-3 border border-gray-200 rounded-lg shadow-sm hover:border-gray-300 transition-colors group mb-3';
          let avatarHtml = '';
          if (user.icon) {
            avatarHtml = `<div class="h-9 w-9 rounded ${user.color} flex items-center justify-center text-xs font-bold shadow-sm"><i data-lucide="${user.icon}" class="w-5 h-5"></i></div>`;
          } else {
            avatarHtml = `<div class="h-9 w-9 rounded ${user.color} flex items-center justify-center text-sm font-semibold shadow-sm">${user.initials}</div>`;
          }
          div.innerHTML = `<div class="flex-shrink-0">${avatarHtml}</div><div class="flex-1 min-w-0 flex justify-between items-start"><div><p class="text-xs font-semibold text-gray-900">${user.name}</p><p class="text-[10px] text-gray-500">${user.role}</p></div><button onclick="removeSelection('${id}')" class="text-gray-400 hover:text-rose-600 transition-colors"><i data-lucide="x" class="w-3.5 h-3.5"></i></button></div>`;
          container.appendChild(div);
        });
        lucide.createIcons();
      }

      function removeSelection(id) {
        const el = document.querySelector(`.user-row[data-id="${id}"]`);
        if (el) toggleUser(el);
      }

      function filterAssignmentUsers(val) {
        const term = val.toLowerCase();
        document.querySelectorAll('.user-row').forEach(row => {
          const text = row.innerText.toLowerCase();
          if (text.includes(term)) {
            row.style.display = 'flex';
          } else {
            row.style.display = 'none';
          }
        });
        document.querySelectorAll('.group-section').forEach(group => {
          const content = group.querySelector('.group-content');
          const hasVisible = Array.from(content.querySelectorAll('.user-row')).some(r => r.style.display !== 'none');
          if (hasVisible) {
            group.style.display = 'block';
            if(term.length > 0 && content.classList.contains('hidden')) {
              toggleGroup(group.querySelector('div:first-child'));
            }
          } else {
            group.style.display = 'none';
          }
        });
      }

      lucide.createIcons();
    


      const searchData = {
        customer: [
          { name: 'Acme Corp', sub: 'acme@corp.com' },
          { name: 'Global Industries', sub: 'contact@global.com' },
          { name: 'Tech Solutions', sub: 'support@techsol.com' }
        ],
        property: [
          { name: 'HQ Building', sub: '123 Main St, NY' },
          { name: 'Warehouse A', sub: '456 Industrial Blvd, NJ' },
          { name: 'Remote Site B', sub: '789 Country Rd, TX' }
        ],
        asset: [
          { name: 'HVAC Unit 1', sub: 'SN: 123456' },
          { name: 'Generator X', sub: 'SN: 987654' },
          { name: 'Pump Station', sub: 'SN: 456789' }
        ],
        contact: [
          { name: 'John Doe', sub: 'Manager' },
          { name: 'Jane Smith', sub: 'Supervisor' },
          { name: 'Bob Johnson', sub: 'Technician' }
        ]
      };

      function handleSearch(type) {
        const input = document.getElementById(`input-${type}`);
        const dropdown = document.getElementById(`dropdown-${type}`);
        const val = input.value.toLowerCase();

        dropdown.classList.remove('hidden');
        dropdown.innerHTML = '';

        const filtered = searchData[type].filter(item =>
          item.name.toLowerCase().includes(val) ||
          item.sub.toLowerCase().includes(val)
        );

        if (filtered.length > 0) {
          filtered.forEach(item => {
            const div = document.createElement('div');
            div.className = 'px-4 py-2.5 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0';
            div.onclick = () => selectItem(type, item.name);
            div.innerHTML = `
              <div class="text-sm font-medium text-gray-900">${item.name}</div>
              <div class="text-xs text-gray-500">${item.sub}</div>
            `;
            dropdown.appendChild(div);
          });
        } else {
          const div = document.createElement('div');
          div.className = 'p-2';
          div.innerHTML = `
            <button onmousedown="createNew('${type}')" class="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-md transition-colors font-medium">
              <i data-lucide="plus" class="w-3.5 h-3.5"></i>
              Create "${input.value}"
            </button>
          `;
          dropdown.appendChild(div);
          if(window.lucide) lucide.createIcons();
        }
      }

      function selectItem(type, name) {
        const input = document.getElementById(`input-${type}`);
        input.value = name;
        document.getElementById(`dropdown-${type}`).classList.add('hidden');
      }

      function createNew(type) {
        const input = document.getElementById(`input-${type}`);
        const dropdown = document.getElementById(`dropdown-${type}`);
        if (type === 'customer') {
          const form = document.getElementById('new-customer-form');
          const nameField = document.getElementById('new-customer-name');
          if (form) {
            form.classList.remove('hidden');
            nameField.value = input.value;
            dropdown.classList.add('hidden');
            if(window.lucide) lucide.createIcons();
            return;
          }
        }
        selectItem(type, input.value);
      }

      function cancelNewCustomer() {
        const form = document.getElementById('new-customer-form');
        if (form) form.classList.add('hidden');
      }

      document.addEventListener('click', (e) => {
        ['customer', 'property', 'asset', 'contact'].forEach(type => {
          const wrapper = document.getElementById(`${type}-wrapper`);
          if (wrapper && !wrapper.contains(e.target)) {
            const dd = document.getElementById(`dropdown-${type}`);
            if(dd) dd.classList.add('hidden');
          }
        });
      });

      if(window.lucide) lucide.createIcons();
    


      function formatTitlePreview() {
        const title = document.getElementById('job-title-input').value || 'New Job';
        const prop = document.getElementById('input-property').value || 'No Property';
        const preview = document.getElementById('title-preview');
        preview.innerHTML = `Preview: <span class="text-gray-600 font-semibold">${title}</span> – <span class="text-gray-500">${prop}</span>`;
        preview.classList.remove('opacity-0');
      }
      document.getElementById('job-title-input').addEventListener('input', formatTitlePreview);
      document.getElementById('input-property').addEventListener('input', formatTitlePreview);

      // Enhanced Dropdown Logic
      const originalToggle = togglePopup;
      togglePopup = function(id) {
        const el = document.getElementById(id);
        if(el.classList.contains('hidden')) {
          el.classList.remove('hidden');
          setTimeout(() => { el.classList.remove('opacity-0', 'scale-95'); }, 10);
        } else {
          el.classList.add('opacity-0', 'scale-95');
          setTimeout(() => { el.classList.add('hidden'); }, 200);
        }
      };

      // Update handleSearch to use animation classes
      const oldHandleSearch = handleSearch;
      handleSearch = function(type) {
        const dd = document.getElementById(`dropdown-${type}`);
        if(!dd.classList.contains('active')) {
          dd.classList.remove('hidden');
          requestAnimationFrame(() => dd.classList.add('active'));
        }
        oldHandleSearch(type);
      };

      // Click outside to close dropdowns with animation
      document.addEventListener('click', (e) => {
        ['customer', 'property', 'asset', 'contact'].forEach(type => {
          const wrapper = document.getElementById(`${type}-wrapper`);
          const dd = document.getElementById(`dropdown-${type}`);
          if (wrapper && !wrapper.contains(e.target) && dd && dd.classList.contains('active')) {
            dd.classList.remove('active');
            setTimeout(() => dd.classList.add('hidden'), 150);
          }
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="h-16 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] z-20 flex items-center justify-between px-6 shrink-0 relative">
<div className="flex items-center gap-4">
<button className="text-gray-400 hover:text-gray-700 transition-colors active:scale-[0.98] transition-transform duration-75">
<i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
<div className="flex flex-col">
<div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
<span>Jobs</span>
<i className="w-3 h-3" data-lucide="chevron-right" strokeWidth="1.5"></i>
<span>New Job</span>
</div>
<h1 className="text-lg font-semibold tracking-tight text-gray-900">
            Create Field Service Order
            <span className="ml-3 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              Draft
            </span>
</h1>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-gray-500 hidden md:block">
          Draft auto-saved 2m ago
        </span>
<button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-all shadow-sm">
          Save Draft
        </button>
<button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 border border-transparent rounded-lg hover:bg-black transition-all shadow-sm flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check" strokeWidth="1.5"></i>
          Create Job
        </button>
</div>
</header>

<div className="flex flex-1 overflow-hidden relative">

<main className="flex-1 overflow-y-auto p-6 md:p-8">
<div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 space-y-8">

<section className="bg-white rounded-xl relative z-10 shadow-soft ring-1 ring-black/5">
<div className="px-6 py-4 bg-white/50 rounded-t-xl relative">
<div className="absolute bottom-0 left-0 right-0 separator-gradient"></div>
<h2 className="text-sm font-semibold text-gray-900">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#004E43]" data-lucide="file-text"></i>
<span>Job Details</span>
</div>
</h2>
</div>
<div className="p-6 space-y-6">
<div className="space-y-6 pb-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1.5 relative tooltip-trigger" data-tooltip="Select the primary customer for this job">
<label className="block text-xs font-medium text-gray-500">
                        Customer
                        <div className="h-1.5 w-1.5 rounded-full bg-rose-500 shadow-[0_0_4px_1px_rgba(244,63,94,0.4)] animate-pulse ml-1.5 inline-block align-middle"></div>
</label>
<div className="relative group" id="customer-wrapper">
<input autocomplete="off" className="w-full text-sm text-gray-900 input-premium rounded-lg pl-3 pr-10 py-2.5" id="input-customer" onfocus="handleSearch('customer')" oninput="handleSearch('customer')" placeholder="Search Customer..." type="text"/>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors pointer-events-none" data-lucide="search"></i>
<div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl ring-1 ring-black/5 z-50 dropdown-anim max-h-60 overflow-y-auto" id="dropdown-customer"></div>
</div>
</div>
<div className="space-y-1.5 relative tooltip-trigger" data-tooltip="Location where service will be performed">
<label className="block text-xs font-medium text-gray-500">
                        Property
                        <div className="h-1.5 w-1.5 rounded-full bg-rose-500 shadow-[0_0_4px_1px_rgba(244,63,94,0.4)] animate-pulse ml-1.5 inline-block align-middle"></div>
</label>
<div className="relative group" id="property-wrapper">
<input autocomplete="off" className="w-full text-sm text-gray-900 input-premium rounded-lg pl-3 pr-10 py-2.5" id="input-property" onfocus="handleSearch('property')" oninput="handleSearch('property')" placeholder="Search Property..." type="text"/>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors pointer-events-none" data-lucide="building"></i>
<div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl ring-1 ring-black/5 z-50 dropdown-anim max-h-60 overflow-y-auto" id="dropdown-property"></div>
</div>
</div>
</div>
<div className="pt-2">
<button className="flex items-center gap-2 text-xs font-medium text-[#004E43] hover:text-[#00332C] transition-colors" onclick="document.getElementById('advanced-options').classList.toggle('hidden'); this.querySelector('.chevron').classList.toggle('rotate-180')" type="button">
<i className="w-3.5 h-3.5" data-lucide="sliders-horizontal"></i>
<span>Advanced Options</span>
<i className="w-3 h-3 chevron transition-transform duration-200" data-lucide="chevron-down"></i>
</button>
<div className="hidden mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t border-gray-50" id="advanced-options">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-500">
                          Asset
                        </label>
<div className="relative group" id="asset-wrapper">
<input autocomplete="off" className="w-full text-sm text-gray-900 input-premium rounded-lg pl-3 pr-10 py-2.5" id="input-asset" onfocus="handleSearch('asset')" oninput="handleSearch('asset')" placeholder="Search Asset..." type="text"/>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" data-lucide="box"></i>
<div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl ring-1 ring-black/5 z-50 dropdown-anim max-h-60 overflow-y-auto" id="dropdown-asset"></div>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-500">
                          Contact
                        </label>
<div className="relative group" id="contact-wrapper">
<input autocomplete="off" className="w-full text-sm text-gray-900 input-premium rounded-lg pl-3 pr-10 py-2.5" id="input-contact" onfocus="handleSearch('contact')" oninput="handleSearch('contact')" placeholder="Search Contact..." type="text"/>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" data-lucide="user"></i>
<div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl ring-1 ring-black/5 z-50 dropdown-anim max-h-60 overflow-y-auto" id="dropdown-contact"></div>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-500">
                          Project
                        </label>
<select className="w-full text-sm text-gray-900 input-premium rounded-lg px-3 py-2.5">
<option value="">No Project</option>
<option value="1">Q1 Maintenance</option>
</select>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-500">
                          Contracts / SLA
                        </label>
<select className="w-full text-sm text-gray-900 input-premium rounded-lg px-3 py-2.5">
<option value="">Standard SLA</option>
<option value="1">Premium Support</option>
</select>
</div>
</div>
</div>
<div className="separator-gradient my-0"></div>
</div>
<div className="hidden mt-6 bg-indigo-50/40 rounded-xl border border-indigo-100 p-5 relative" id="new-customer-form">
<button className="absolute top-3 right-3 text-indigo-400 hover:text-indigo-600 bg-white rounded-full p-1 shadow-sm transition-colors" onclick="cancelNewCustomer()" type="button">
<i className="w-3.5 h-3.5" data-lucide="x"></i>
</button>
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="user-plus"></i>
</div>
<h3 className="text-sm font-semibold text-gray-900">
                      New Customer Details
                    </h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-gray-500 mb-1.5">
                        Customer / Company Name
                        <div className="required-dot"></div>
</label>
<input className="w-full text-sm text-gray-900 input-premium rounded-lg px-3 py-2 outline-none" id="new-customer-name" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-500 mb-1.5">
                        Email Address
                      </label>
<input className="w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-sm" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-500 mb-1.5">
                        Phone Number
                      </label>
<input className="w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-sm" oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-500 mb-1.5">
                        Contact Person
                      </label>
<input className="w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-sm" type="text"/>
</div>
</div>
<div className="mt-4 flex justify-end">
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-700 bg-white px-3 py-2 rounded-lg border border-indigo-200 shadow-sm transition-colors active:scale-95 transition-transform hover:animate-pulse" onclick="cancelNewCustomer()" type="button">
                      Save &amp; Continue
                    </button>
</div>
</div>
<div className="grid grid-cols-12 gap-4">
<div className="col-span-4 md:col-span-3">
<label className="block text-xs font-medium text-gray-500 mb-1.5">
                      Prefix
                    </label>
<input className="w-full text-sm text-gray-900 input-premium rounded-lg px-3 py-2.5 placeholder:text-gray-400" placeholder="Enter Prefix" type="text"/>
</div>
<div className="col-span-8 md:col-span-9">
<label className="block text-xs font-medium text-gray-500 mb-1.5">
                      Job Title
                      <div className="h-1.5 w-1.5 rounded-full bg-rose-500 shadow-[0_0_4px_1px_rgba(244,63,94,0.4)] animate-pulse ml-1.5 inline-block align-middle"></div>
</label>
<input className="w-full text-sm text-gray-900 input-premium rounded-lg px-3 py-2.5 placeholder:text-gray-400" id="job-title-input" placeholder="Enter job title" type="text"/>
<div className="mt-1.5 text-[10px] text-gray-400 font-medium flex items-center gap-1 opacity-0 transition-opacity duration-300" id="title-preview">
                      Preview:
                      <span className="text-gray-600">New Job</span>
                      –
                      <span className="text-gray-500">No Property</span>
</div>
</div>
</div>
<div className="space-y-4 pt-2">
<div className="flex items-center justify-between">
<h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider flex items-center gap-2">
<i className="w-4 h-4 text-gray-400" data-lucide="calendar-clock"></i>
                      Job Schedule
                      <span className="normal-case font-normal text-amber-600 text-[10px] ml-2 px-2 py-0.5 rounded flex items-center gap-1 bg-amber-50/80 shadow-sm ring-1 ring-amber-100/50">
<i className="w-3 h-3" data-lucide="alert-circle"></i>
                        Required
                      </span>
</h3>
<button className="text-xs text-indigo-600 font-medium hover:text-indigo-700 hover:bg-indigo-50 px-2.5 py-1 rounded-md transition-all active:scale-95 active:ring-2 ring-indigo-100">
                      Check Availability
                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-gray-500 mb-1.5">
                        Due Date
                      </label>
<input className="w-full text-sm text-gray-900 input-premium rounded-lg px-3 py-2.5" type="date"/>
</div>

<div>
<label className="block text-xs font-medium text-gray-500 mb-1.5 flex items-center justify-between">
<span>Job Recurrence</span>
<button className="text-[10px] text-indigo-600 hover:text-indigo-700 hidden" id="update-recurrence-link" onclick="toggleRecurrencePanel(true)" type="button">
                          (Update Recurrence)
                        </button>
</label>
<select className="w-full text-sm text-gray-900 input-premium rounded-lg px-3 py-2.5" id="job-recurrence-select" onchange="handleRecurrenceChange(this)">
<option value="no">No Recurrence</option>
<option value="yes">Recurring Job</option>
</select>
</div>

<div className="relative group">
<label className="block text-xs font-medium text-gray-500 mb-1.5">
                        Job Start Date &amp; Time
                      </label>
<div className="relative">
<input className="w-full text-sm text-gray-900 input-premium rounded-lg px-3 py-2.5 cursor-pointer" id="start-date-input" onclick="togglePopup('start-date-popup')" readonly="" type="text" value="12/02/2025 02:00 AM"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
<i className="w-4 h-4" data-lucide="calendar"></i>
</div>
</div>

<div className="absolute top-full left-0 mt-2 z-50 w-[300px] bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] ring-1 ring-black/5 hidden p-4 select-none transform transition-all duration-200 ease-out origin-top-left" id="start-date-popup">
<div className="bg-white">
<div className="flex items-center justify-between mb-4 px-1">
<button className="p-1 hover:bg-gray-50 rounded-full transition-colors text-gray-500" type="button">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<span className="text-sm font-semibold text-gray-900">
                              December 2025
                            </span>
<button className="p-1 hover:bg-gray-50 rounded-full transition-colors text-gray-500" type="button">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
<div className="grid grid-cols-7 text-center mb-2">
<span className="text-[10px] font-medium text-gray-400">
                              Su
                            </span>
<span className="text-[10px] font-medium text-gray-400">
                              Mo
                            </span>
<span className="text-[10px] font-medium text-gray-400">
                              Tu
                            </span>
<span className="text-[10px] font-medium text-gray-400">
                              We
                            </span>
<span className="text-[10px] font-medium text-gray-400">
                              Th
                            </span>
<span className="text-[10px] font-medium text-gray-400">
                              Fr
                            </span>
<span className="text-[10px] font-medium text-gray-400">
                              Sa
                            </span>
</div>
<div className="grid grid-cols-7 gap-y-1 gap-x-1">
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-400 rounded-full hover:bg-gray-50" type="button">
                              28
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-400 rounded-full hover:bg-gray-50" type="button">
                              29
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-400 rounded-full hover:bg-gray-50" type="button">
                              30
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              1
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-white bg-indigo-600 rounded-full font-medium shadow-md" type="button">
                              2
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              3
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              4
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              5
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              6
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              7
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              8
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              9
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              10
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              11
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              12
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              13
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              14
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              15
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              16
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              17
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              18
                            </button>
</div>
</div>
<div className="flex justify-end pt-2">
<button className="bg-[#6366F1] hover:bg-indigo-700 text-white px-8 py-2 rounded-full text-sm font-medium shadow-md transition-all transform active:scale-95" onclick="togglePopup('start-date-popup')" type="button">
                            OK
                          </button>
</div>
</div>
</div>

<div className="relative group">
<label className="block text-xs font-medium text-gray-500 mb-1.5">
                        Job End Date &amp; Time
                      </label>
<div className="relative">
<input className="w-full text-sm text-gray-900 input-premium rounded-lg px-3 py-2.5 cursor-pointer" id="end-date-input" onclick="togglePopup('end-date-popup')" readonly="" type="text" value="12/02/2025 04:00 PM"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
<i className="w-4 h-4" data-lucide="calendar"></i>
</div>
</div>

<div className="absolute top-full right-0 md:left-0 mt-2 z-50 w-[300px] bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 hidden p-4 select-none" id="end-date-popup">
<div className="bg-white">
<div className="flex items-center justify-between mb-4 px-1">
<button className="p-1 hover:bg-gray-50 rounded-full transition-colors text-gray-500" type="button">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<span className="text-sm font-semibold text-gray-900">
                              December 2025
                            </span>
<button className="p-1 hover:bg-gray-50 rounded-full transition-colors text-gray-500" type="button">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
<div className="grid grid-cols-7 text-center mb-2">
<span className="text-[10px] font-medium text-gray-400">
                              Su
                            </span>
<span className="text-[10px] font-medium text-gray-400">
                              Mo
                            </span>
<span className="text-[10px] font-medium text-gray-400">
                              Tu
                            </span>
<span className="text-[10px] font-medium text-gray-400">
                              We
                            </span>
<span className="text-[10px] font-medium text-gray-400">
                              Th
                            </span>
<span className="text-[10px] font-medium text-gray-400">
                              Fr
                            </span>
<span className="text-[10px] font-medium text-gray-400">
                              Sa
                            </span>
</div>
<div className="grid grid-cols-7 gap-y-1 gap-x-1">
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-400 rounded-full hover:bg-gray-50" type="button">
                              28
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-400 rounded-full hover:bg-gray-50" type="button">
                              29
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-400 rounded-full hover:bg-gray-50" type="button">
                              30
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              1
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-white bg-indigo-600 rounded-full font-medium shadow-md" type="button">
                              2
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              3
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              4
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              5
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              6
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              7
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              8
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              9
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              10
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              11
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              12
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              13
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              14
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              15
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              16
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              17
                            </button>
<button className="h-8 w-8 flex items-center justify-center text-xs text-gray-900 rounded-full hover:bg-gray-100" type="button">
                              18
                            </button>
</div>
</div>
<div className="flex justify-end pt-2">
<button className="bg-[#6366F1] hover:bg-indigo-700 text-white px-8 py-2 rounded-full text-sm font-medium shadow-md transition-all transform active:scale-95" onclick="togglePopup('end-date-popup')" type="button">
                            OK
                          </button>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
<div className="tooltip-trigger" data-tooltip="Enter the precise physical location for the service execution.">
<label className="block text-xs font-medium text-gray-500 mb-1.5">
                      Service Address
                      <div className="required-dot"></div>
</label>
<textarea className="w-full text-sm text-gray-900 input-premium rounded-lg px-3 py-2.5 resize-none placeholder:text-gray-400" rows="3"></textarea>
</div>
<div>
<div className="flex items-center justify-between mb-1.5">
<label className="block text-xs font-medium text-gray-500">
                        Billing Address
                        <div className="required-dot"></div>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-3 w-3" type="checkbox"/>
<span className="text-[10px] text-gray-600 group-hover:text-gray-900 transition-colors">
                          Same As Service Address
                        </span>
</label>
</div>
<textarea className="w-full text-sm text-gray-900 input-premium rounded-lg px-3 py-2.5 resize-none placeholder:text-gray-400" rows="3"></textarea>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-xl overflow-hidden">
<div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
<h2 className="text-sm font-semibold text-gray-900">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-indigo-600" data-lucide="clipboard-list"></i>
<span>Scope of Work</span>
</div>
</h2>
</div>
<div className="p-6 space-y-6">
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
<div>
<label className="block text-xs font-medium text-gray-500 mb-1.5">
                      Job Category
                      <div className="required-dot"></div>
</label>
<select className="w-full text-sm text-gray-900 input-premium rounded-lg px-3 py-2.5">
<option>Choose a Job Category</option>
<option>HVAC</option>
<option>Plumbing</option>
</select>
<div className="mt-1 text-right">
<a className="text-[10px] text-indigo-600 hover:underline" href="#">
                        New Category
                      </a>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-500 mb-1.5">
                      Job Type
                    </label>
<select className="w-full text-sm text-gray-900 input-premium rounded-lg px-3 py-2.5">
<option>New Job</option>
<option>Warranty</option>
<option>Emergency</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-gray-500 mb-1.5">
                      Priority
                    </label>
<div className="relative">
<select className="w-full text-sm text-gray-900 input-premium rounded-lg px-3 py-2.5 appearance-none">
<option value="low">Low</option>
<option selected="" value="medium">Medium</option>
<option value="high">High</option>
<option value="critical">Critical</option>
</select>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-gray-100">
<label className="block text-xs font-medium text-gray-500 mb-1.5">
                    Description / Instructions
                  </label>
<div className="relative">
<textarea className="w-full text-sm text-gray-900 input-premium rounded-lg px-3 py-2.5 resize-none placeholder:text-gray-400" placeholder="Enter detailed job instructions, access codes, or safety warnings..." rows="4"></textarea>
<div className="absolute bottom-2 right-2 flex gap-1">
<button className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors" type="button">
<i className="w-4 h-4" data-lucide="paperclip"></i>
</button>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="lg:col-span-4 relative">
<div className="sticky top-6 space-y-6 h-fit">

<div className="bg-white rounded-xl overflow-hidden shadow-soft ring-1 ring-black/5">
<div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
<h3 className="text-sm font-semibold text-gray-900">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-indigo-600" data-lucide="truck"></i>
<span>Dispatch</span>
</div>
</h3>
<span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">
                    Pending
                  </span>
</div>
<div className="p-5 space-y-4">
<div className="text-center py-6 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50">
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<p className="text-xs text-gray-500">
                        No technicians assigned
                      </p>
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-md transition-colors mt-1" onclick="toggleAssignmentPanel(true)">
                        Assign Users
                      </button>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl overflow-hidden mt-6 shadow-soft ring-1 ring-black/5">
<div className="px-6 py-4 bg-white/50 rounded-t-xl relative">
<div className="absolute bottom-0 left-0 right-0 separator-gradient"></div>
<h2 className="text-sm font-semibold text-gray-900">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#004E43]" data-lucide="clipboard-list"></i>
<span>Scope of Work</span>
</div>
</h2>
</div>
<div className="p-5">
<div className="space-y-3">
<div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-gray-200 transition-all cursor-pointer group">
<div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
<i className="w-4 h-4" data-lucide="file-text"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-gray-900 truncate">
                          Site_Plan_v2.pdf
                        </p>
<div className="flex items-center gap-2 mt-0.5">
<span className="text-[10px] text-gray-500">2.4 MB</span>
<div className="h-1 w-12 bg-gray-200 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-full"></div>
</div>
</div>
</div>
<button className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-3.5 h-3.5" data-lucide="trash-2"></i>
</button>
</div>
<div className="border-2 border-dashed border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-gray-50 hover:border-[#004E43]/30 transition-all cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-gray-50 text-gray-400 group-hover:bg-[#004E43]/10 group-hover:text-[#004E43] flex items-center justify-center mb-2 transition-colors">
<i className="w-4 h-4" data-lucide="cloud-upload"></i>
</div>
<p className="text-xs font-medium text-gray-600 group-hover:text-[#004E43]">
                        Click to upload
                      </p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl overflow-hidden mt-6 shadow-soft ring-1 ring-black/5">
<div className="px-6 py-3 border-b border-gray-100 bg-gray-50/50">
<h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
<i className="w-4 h-4 text-indigo-600" data-lucide="lock"></i>
                    Internal Notes
                  </h3>
</div>
<div className="p-4 bg-gray-50">
<div className="relative">
<textarea className="w-full text-xs text-gray-900 input-premium rounded-lg p-3 resize-none placeholder:text-gray-400" placeholder="Add a private note..." rows="3"></textarea>
<button className="absolute bottom-2 right-2 p-1 text-indigo-600 hover:bg-indigo-50 rounded">
<i className="w-3.5 h-3.5" data-lucide="send"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="h-12"></div>
</main>

<div aria-modal="true" className="fixed inset-0 z-50 invisible" id="recurrence-panel" role="dialog">
<div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm opacity-0 drawer-backdrop" id="recurrence-backdrop" onclick="toggleRecurrencePanel(false)"></div>
<div className="fixed inset-y-0 right-0 flex max-w-full pl-0 sm:pl-16 pointer-events-none">
<div className="pointer-events-auto w-screen max-w-4xl transform translate-x-full drawer-panel bg-white shadow-2xl flex flex-col h-full" id="recurrence-drawer">
<div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between bg-white shrink-0">
<h2 className="text-base font-semibold text-gray-900">
                Choose Job Recurrence
              </h2>
<button className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none" onclick="toggleRecurrencePanel(false)" type="button">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto bg-white p-6">
<div className="max-w-xl mx-auto py-2">
<div className="space-y-8">

<div>
<h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
<i className="w-4 h-4 text-indigo-600" data-lucide="repeat"></i>
                      Frequency
                    </h3>
<div className="grid grid-cols-4 gap-3">
<button className="flex flex-col items-center justify-center p-3 rounded-xl border border-gray-200 bg-white hover:border-indigo-600 hover:bg-indigo-50/50 transition-all group" type="button">
<span className="text-xs font-medium text-gray-600 group-hover:text-indigo-700">
                          Daily
                        </span>
</button>
<button className="flex flex-col items-center justify-center p-3 rounded-xl border-2 border-indigo-600 bg-indigo-50 transition-all relative" type="button">
<span className="text-xs font-bold text-indigo-700">
                          Weekly
                        </span>
<div className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full p-0.5">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
</button>
<button className="flex flex-col items-center justify-center p-3 rounded-xl border border-gray-200 bg-white hover:border-indigo-600 hover:bg-indigo-50/50 transition-all group" type="button">
<span className="text-xs font-medium text-gray-600 group-hover:text-indigo-700">
                          Monthly
                        </span>
</button>
<button className="flex flex-col items-center justify-center p-3 rounded-xl border border-gray-200 bg-white hover:border-indigo-600 hover:bg-indigo-50/50 transition-all group" type="button">
<span className="text-xs font-medium text-gray-600 group-hover:text-indigo-700">
                          Yearly
                        </span>
</button>
</div>
</div>

<div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100 space-y-6">
<div className="flex items-center gap-4">
<label className="text-sm font-medium text-gray-700 whitespace-nowrap">
                        Repeat every
                      </label>
<div className="flex items-center">
<button className="w-8 h-9 flex items-center justify-center bg-white border border-gray-300 rounded-l-lg hover:bg-gray-50 text-gray-600">
<i className="w-3 h-3" data-lucide="minus"></i>
</button>
<input className="w-12 h-9 text-center border-y border-gray-300 text-sm font-medium text-gray-900 focus:outline-none focus:ring-0" type="text" value="1"/>
<button className="w-8 h-9 flex items-center justify-center bg-white border border-gray-300 rounded-r-lg hover:bg-gray-50 text-gray-600">
<i className="w-3 h-3" data-lucide="plus"></i>
</button>
</div>
<span className="text-sm text-gray-500 font-medium">
                        week(s)
                      </span>
</div>
<div>
<label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 block">
                        On these days
                      </label>
<div className="flex gap-2">
<button className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-400 text-xs font-medium hover:border-gray-300 transition-all" type="button">
                          S
                        </button>
<button className="w-9 h-9 rounded-full bg-indigo-600 border border-indigo-600 text-white text-xs font-bold shadow-sm ring-2 ring-indigo-100 transition-all" type="button">
                          M
                        </button>
<button className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-400 text-xs font-medium hover:border-gray-300 transition-all" type="button">
                          T
                        </button>
<button className="w-9 h-9 rounded-full bg-indigo-600 border border-indigo-600 text-white text-xs font-bold shadow-sm ring-2 ring-indigo-100 transition-all" type="button">
                          W
                        </button>
<button className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-400 text-xs font-medium hover:border-gray-300 transition-all" type="button">
                          T
                        </button>
<button className="w-9 h-9 rounded-full bg-indigo-600 border border-indigo-600 text-white text-xs font-bold shadow-sm ring-2 ring-indigo-100 transition-all" type="button">
                          F
                        </button>
<button className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-400 text-xs font-medium hover:border-gray-300 transition-all" type="button">
                          S
                        </button>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
<i className="w-4 h-4 text-rose-500" data-lucide="calendar-off"></i>
                      End Recurrence
                    </h3>
<div className="space-y-3">
<label className="flex items-center p-3 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors group">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" name="end-opt" type="radio"/>
<div className="ml-3">
<span className="block text-sm font-medium text-gray-900">
                            Never
                          </span>
<span className="block text-xs text-gray-500">
                            Indefinite recurrence
                          </span>
</div>
</label>
<label className="flex items-center p-3 border-2 border-indigo-600 bg-indigo-50/30 rounded-xl cursor-pointer transition-colors">
<input checked="" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" name="end-opt" type="radio"/>
<div className="ml-3 flex-1 flex items-center justify-between">
<div>
<span className="block text-sm font-medium text-gray-900">
                              On Specific Date
                            </span>
<span className="block text-xs text-gray-500">
                              Stops after this date
                            </span>
</div>
<input className="text-xs border-gray-300 rounded-lg px-2 py-1.5 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ml-4" type="date" value="2026-06-01"/>
</div>
</label>
<label className="flex items-center p-3 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors group">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" name="end-opt" type="radio"/>
<div className="ml-3 flex-1 flex items-center gap-3">
<span className="text-sm font-medium text-gray-900">
                            After
                          </span>
<div className="relative w-16">
<input className="block w-full rounded-md border-0 py-1 pl-2 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6" placeholder="10" type="number"/>
</div>
<span className="text-sm font-medium text-gray-900">
                            occurrences
                          </span>
</div>
</label>
</div>
</div>
</div>
</div>
</div>
<div className="border-t border-gray-200 px-6 py-4 flex justify-end gap-3 bg-white shrink-0 z-10">
<button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all" onclick="toggleRecurrencePanel(false)" type="button">
                Cancel
              </button>
<button className="rounded-lg bg-[#EA580C] px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#C2410C] transition-all" onclick="toggleRecurrencePanel(false)" type="button">
                Save
              </button>
</div>
</div>
</div>
</div>

<div aria-modal="true" className="fixed inset-0 z-[60] invisible" id="assignment-panel" role="dialog">

<div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm opacity-0 drawer-backdrop" id="assignment-backdrop" onclick="toggleAssignmentPanel(false)"></div>

<div className="fixed inset-y-0 right-0 flex max-w-full pl-0 sm:pl-16 pointer-events-none">
<div className="pointer-events-auto w-screen max-w-5xl transform translate-x-full drawer-panel bg-white shadow-2xl flex flex-col h-full" id="assignment-drawer">
<div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between bg-white shrink-0">
<h2 className="text-base font-semibold text-gray-900">
                Job Assignment
              </h2>
<button className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none" onclick="toggleAssignmentPanel(false)" type="button">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 flex overflow-hidden">
<div className="flex-1 flex flex-col min-w-0 border-r border-gray-200 bg-white">
<div className="px-6 border-b border-gray-200 flex gap-6 shrink-0">
<button className="py-3 text-sm font-medium text-gray-900 border-b-2 border-[#EA580C]">
                    Teams (14)
                  </button>
<button className="py-3 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700">
                    Users (30)
                  </button>
</div>
<div className="p-4 border-b border-gray-200 bg-white shrink-0">
<div className="flex rounded-md shadow-sm">
<div className="relative focus-within:z-10">
<select className="block w-36 rounded-l-md border-0 py-2 pl-3 pr-8 text-gray-500 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6 bg-white outline-none">
<option>Search By Team</option>
</select>
</div>
<div className="relative flex-grow focus-within:z-10">
<input className="block w-full rounded-r-md border-0 py-2 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6 outline-none" onkeyup="filterAssignmentUsers(this.value)" placeholder="Search" type="text"/>
</div>
</div>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar">
<div className="border-b border-gray-200 group-section">
<div className="flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50 cursor-pointer select-none group" onclick="toggleGroup(this)">
<div className="flex items-center gap-2">
<span className="text-xs font-semibold text-gray-900 group-title">
                          Dispatch (2)
                        </span>
</div>
<div className="flex items-center gap-3 text-gray-400">
<i className="w-3.5 h-3.5" data-lucide="filter"></i>
<i className="w-4 h-4 text-gray-500 transition-transform duration-200 chevron-icon" data-lucide="chevron-up"></i>
</div>
</div>
<div className="bg-white group-content">
<div className="user-row flex items-start gap-3 p-4 border-t border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer relative" data-color="bg-gray-900 text-white" data-icon="building-2" data-id="u1" data-initials="S" data-name="Signature Elevator" data-role="accounts@work-flow.ai" onclick="toggleUser(this)">
<div className="absolute -right-1 top-0 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white active-indicator hidden"></div>
<div className="flex-shrink-0">
<div className="h-9 w-9 rounded bg-gray-900 text-white flex items-center justify-center text-xs font-bold shadow-sm">
<i className="w-5 h-5" data-lucide="building-2"></i>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between">
<div>
<p className="text-sm font-semibold text-gray-900">
                                Signature Elevator
                              </p>
<p className="text-[11px] text-gray-500 truncate">
                                accounts@work-flow.ai
                              </p>
<p className="text-[11px] text-gray-500 mt-0.5">
                                08:00 AM - 05:00 PM
                              </p>
<p className="text-[11px] text-emerald-600 mt-0.5 font-medium">
                                Available : 540 min(s)
                              </p>
</div>
<div className="action-btn text-emerald-600 hover:bg-emerald-50 p-1.5 rounded-full transition-colors">
<i className="w-4 h-4 action-icon" data-lucide="user-plus"></i>
</div>
</div>
</div>
</div>
<div className="user-row flex items-start gap-3 p-4 border-t border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer relative" data-color="bg-gray-200 text-gray-600" data-id="u2" data-initials="M" data-name="Marielys Rivera" data-role="Dispatcher" onclick="toggleUser(this)">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-indigo-500 active-indicator hidden"></div>
<div className="flex-shrink-0">
<div className="h-9 w-9 rounded bg-gray-200 text-gray-600 flex items-center justify-center text-sm font-semibold shadow-sm">
                            M
                          </div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between">
<div>
<p className="text-sm font-semibold text-gray-900">
                                Marielys Rivera
                              </p>
<p className="text-[11px] text-gray-500 truncate">
                                Dispatcher@signatureem.com
                              </p>
<p className="text-[11px] text-gray-500 mt-0.5">
                                07:00 AM - 05:00 PM
                              </p>
<p className="text-[11px] text-emerald-600 mt-0.5 font-medium">
                                Available : 600 min(s)
                              </p>
</div>
<div className="action-btn text-emerald-600 hover:bg-emerald-50 p-1.5 rounded-full transition-colors">
<i className="w-4 h-4 action-icon" data-lucide="user-plus"></i>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="border-b border-gray-200 group-section">
<div className="flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50 cursor-pointer select-none group" onclick="toggleGroup(this)">
<span className="text-xs font-semibold text-gray-900 group-title">
                        Field Supervisor (1)
                      </span>
<div className="flex items-center gap-3 text-gray-400">
<i className="w-4 h-4 text-gray-500 transition-transform duration-200 chevron-icon" data-lucide="chevron-down"></i>
</div>
</div>
<div className="bg-white group-content hidden">
<div className="user-row flex items-start gap-3 p-4 border-t border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer relative" data-color="bg-indigo-100 text-indigo-600" data-id="u3" data-initials="J" data-name="John Supervisor" data-role="Field Supervisor" onclick="toggleUser(this)">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-indigo-500 active-indicator hidden"></div>
<div className="flex-shrink-0">
<div className="h-9 w-9 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-semibold shadow-sm">
                            J
                          </div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between">
<div>
<p className="text-sm font-semibold text-gray-900">
                                John Supervisor
                              </p>
<p className="text-[11px] text-gray-500 truncate">
                                sup@signatureem.com
                              </p>
<p className="text-[11px] text-gray-500 mt-0.5">
                                06:00 AM - 03:00 PM
                              </p>
<p className="text-[11px] text-rose-600 mt-0.5 font-medium">
                                Available : 0 min(s)
                              </p>
</div>
<div className="action-btn text-emerald-600 hover:bg-emerald-50 p-1.5 rounded-full transition-colors">
<i className="w-4 h-4 action-icon" data-lucide="user-plus"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-[340px] flex flex-col shrink-0 bg-white">
<div className="px-5 py-4 border-b border-gray-200 shrink-0">
<h3 className="text-xs font-semibold text-gray-700" id="selected-count">
                    Users to be assigned (0)
                  </h3>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar" id="selected-container">
<p className="text-center text-xs text-gray-400 mt-4">
                    No users selected
                  </p>
</div>
</div>
</div>
<div className="border-t border-gray-200 px-6 py-4 flex justify-end gap-3 bg-white shrink-0 z-10">
<button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all" onclick="toggleAssignmentPanel(false)" type="button">
                Close
              </button>
<button className="rounded-lg bg-[#EA580C] px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#C2410C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-all" onclick="toggleAssignmentPanel(false)" type="button">
                Save
              </button>
</div>
</div>
</div>
</div>

</div>





    </>
  );
}
