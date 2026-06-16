import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Data seeds
      const spa_wellness_bookings = [
        { id: "S-1001", guest_name: "Emily Carter", service: "Deep Tissue Massage", time: "2025-10-05T10:00:00", status: "Confirmed", contact: "+44 7700 900001" },
        { id: "S-1002", guest_name: "Daniel Lee", service: "Aromatherapy", time: "2025-10-05T13:00:00", status: "Pending", contact: "+44 7700 900002" },
        { id: "S-1003", guest_name: "Sophia Patel", service: "Facial Treatment", time: "2025-10-12T09:00:00", status: "In Progress", contact: "+44 7700 900003" },
        { id: "S-1004", guest_name: "James Wilson", service: "Hot Stone Therapy", time: "2025-10-18T15:30:00", status: "Confirmed", contact: "+44 7700 900004" },
        { id: "S-1005", guest_name: "Chloe Martin", service: "Sauna Session", time: "2025-10-18T16:00:00", status: "Cancelled", contact: "+44 7700 900005" },
        { id: "S-1006", guest_name: "Noah Kim", service: "Reflexology", time: "2025-10-22T11:00:00", status: "Confirmed", contact: "+44 7700 900006" },
        { id: "S-1007", guest_name: "Liam Nguyen", service: "Body Scrub", time: "2025-10-22T12:30:00", status: "Pending", contact: "+44 7700 900007" },
        { id: "S-1008", guest_name: "Ava Johnson", service: "Detox Wrap", time: "2025-10-27T14:00:00", status: "Confirmed", contact: "+44 7700 900008" }
      ];

      const taxi_transfer_bookings = [
        { id: "T-2001", guest_name: "Oliver Brown", pickup: "Airport T2", destination: "City Center Hotel", time: "2025-10-04T08:30:00", status: "Confirmed" },
        { id: "T-2002", guest_name: "Mia Davis", pickup: "Harbor", destination: "Conference Venue", time: "2025-10-05T18:00:00", status: "Pending" },
        { id: "T-2003", guest_name: "Lucas Garcia", pickup: "City Center", destination: "Airport T1", time: "2025-10-09T05:15:00", status: "Confirmed" },
        { id: "T-2004", guest_name: "Isabella Rossi", pickup: "Resort North", destination: "Old Town", time: "2025-10-18T12:00:00", status: "Cancelled" },
        { id: "T-2005", guest_name: "Ethan Clark", pickup: "Business Park", destination: "Airport T3", time: "2025-10-22T16:30:00", status: "In Progress" }
      ];

      const car_rental_bookings = [
        { id: "C-3001", guest_name: "Henry Adams", vehicle_type: "SUV", driver_option: true, start_date: "2025-10-03", end_date: "2025-10-06", status: "Confirmed" },
        { id: "C-3002", guest_name: "Zara Khan", vehicle_type: "Sedan", driver_option: false, start_date: "2025-10-10", end_date: "2025-10-12", status: "Pending" },
        { id: "C-3003", guest_name: "Mohamed Ali", vehicle_type: "Convertible", driver_option: false, start_date: "2025-10-18", end_date: "2025-10-21", status: "Confirmed" },
        { id: "C-3004", guest_name: "Emma Thompson", vehicle_type: "Van", driver_option: true, start_date: "2025-10-22", end_date: "2025-10-25", status: "Cancelled" }
      ];

      const tour_guide_bookings = [
        { id: "G-4001", guest_name: "Sebastian Müller", tour_name: "Historic Old Town", date: "2025-10-02", guide: "Marco", status: "Confirmed" },
        { id: "G-4002", guest_name: "Amélie Dubois", tour_name: "Museum Highlights", date: "2025-10-08", guide: "Laura", status: "Pending" },
        { id: "G-4003", guest_name: "Yuki Tanaka", tour_name: "Coastal Walk", date: "2025-10-18", guide: "Alex", status: "Confirmed" },
        { id: "G-4004", guest_name: "Carlos Silva", tour_name: "Wine Country", date: "2025-10-22", guide: "Nina", status: "In Progress" }
      ];

      const state = {
        activeTab: 'spa',         // spa | taxi | car | tour
        activeView: 'calendar',   // calendar | list
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
        statusFilter: '',
        serviceFilter: '',
        search: ''
      };

      const datasets = {
        spa: { data: spa_wellness_bookings },
        taxi: { data: taxi_transfer_bookings },
        car: { data: car_rental_bookings },
        tour: { data: tour_guide_bookings }
      };

      function applyIcons() {
        lucide.createIcons({
          attrs: { 'stroke-width': 1.5 }
        });
      }

      function formatDate(dt) {
        return dt.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
      }
      function formatTime(dt) {
        return dt.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
      }
      function pad(n) { return String(n).padStart(2, '0'); }

      function statusClasses(status) {
        switch (status) {
          case 'Confirmed': return ['text-emerald-700', 'bg-emerald-50', 'ring-emerald-200'];
          case 'Pending': return ['text-amber-700', 'bg-amber-50', 'ring-amber-200'];
          case 'In Progress': return ['text-indigo-700', 'bg-indigo-50', 'ring-indigo-200'];
          case 'Cancelled': return ['text-rose-700', 'bg-rose-50', 'ring-rose-200'];
          default: return ['text-slate-700', 'bg-slate-50', 'ring-slate-200'];
        }
      }

      function eventDateForTab(tab, item) {
        if (tab === 'spa' || tab === 'taxi') {
          return new Date(tab === 'spa' ? item.time : item.time);
        } else if (tab === 'tour') {
          return new Date(item.date + 'T09:00:00');
        } else if (tab === 'car') {
          return new Date(item.start_date + 'T09:00:00');
        }
        return new Date();
      }

      function withinMonth(date, month, year) {
        return date.getMonth() === month && date.getFullYear() === year;
      }

      function filterDataForTab(tab) {
        const base = datasets[tab].data.slice();
        const query = state.search.trim().toLowerCase();
        const byStatus = (x) => state.statusFilter ? (x.status === state.statusFilter) : true;
        const byServiceTab = (x) => {
          if (!state.serviceFilter) return true;
          // If service filter equals a tab, only include when matches the active tab or selected tab
          return state.serviceFilter === state.activeTab;
        };
        const byQuery = (x) => {
          const str = JSON.stringify(x).toLowerCase();
          return !query || str.includes(query);
        };
        return base.filter(x => byStatus(x) && byServiceTab(x) && byQuery(x));
      }

      function computeKPIs() {
        const all = ['spa','taxi','car','tour'].flatMap(t => filterDataForTab(t));
        const month = state.month, year = state.year;
        const inMonth = all.filter(item => withinMonth(eventDateForTab(guessTab(item), item), month, year));
        const total = inMonth.length;
        const confirmed = inMonth.filter(x => x.status === 'Confirmed').length;
        const pending = inMonth.filter(x => x.status === 'Pending').length;
        const cancelled = inMonth.filter(x => x.status === 'Cancelled').length;
        document.getElementById('kpiTotal').textContent = String(total);
        document.getElementById('kpiConfirmed').textContent = String(confirmed);
        document.getElementById('kpiPending').textContent = String(pending);
        document.getElementById('kpiCancelled').textContent = String(cancelled);
      }

      function guessTab(item) {
        if ('service' in item) return 'spa';
        if ('pickup' in item) return 'taxi';
        if ('vehicle_type' in item) return 'car';
        if ('tour_name' in item) return 'tour';
        return 'spa';
      }

      function renderMonthLabel() {
        const d = new Date(state.year, state.month, 1);
        const label = d.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
        document.getElementById('currentMonthLabel').textContent = label;
      }

      function render() {
        renderMonthLabel();
        computeKPIs();
        renderContent();
        highlightActiveControls();
        applyIcons();
      }

      function highlightActiveControls() {
        // Tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
          const active = btn.dataset.tab === state.activeTab;
          btn.classList.toggle('bg-white', active);
          btn.classList.toggle('ring-1', active);
          btn.classList.toggle('ring-slate-200', active);
          btn.setAttribute('aria-selected', active ? 'true' : 'false');
        });
        // View buttons
        document.querySelectorAll('.view-btn').forEach(btn => {
          const active = btn.dataset.view === state.activeView;
          btn.classList.toggle('bg-slate-900', active);
          btn.classList.toggle('text-white', active);
          btn.classList.toggle('border', active);
          btn.classList.toggle('border-slate-900/10', active);
          btn.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
      }

      function renderContent() {
        const container = document.getElementById('contentContainer');
        container.innerHTML = '';
        if (state.activeView === 'calendar') {
          container.appendChild(renderCalendar());
        } else {
          container.appendChild(renderTable());
        }
      }

      function renderCalendar() {
        const wrap = document.createElement('div');
        // Week header
        const weekHeader = document.createElement('div');
        weekHeader.className = 'grid grid-cols-7 gap-px bg-slate-200';
        const weekDays = [];
        for (let d = 1; d <= 7; d++) {
          const ref = new Date(2025, 0, d);
          weekDays.push(ref.toLocaleDateString(undefined, { weekday: 'short' }));
        }
        const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        week.forEach((w) => {
          const cell = document.createElement('div');
          cell.className = 'bg-white px-3 py-2 text-xs font-medium text-slate-500';
          cell.textContent = w;
          weekHeader.appendChild(cell);
        });

        // Days grid
        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-7 gap-px bg-slate-200';

        const firstDay = new Date(state.year, state.month, 1);
        const startDay = firstDay.getDay();
        const daysInMonth = new Date(state.year, state.month + 1, 0).getDate();
        const totalCells = Math.ceil((startDay + daysInMonth) / 7) * 7;

        const data = filterDataForTab(state.activeTab);

        for (let i = 0; i < totalCells; i++) {
          const dayNum = i - startDay + 1;
          const inMonth = dayNum >= 1 && dayNum <= daysInMonth;
          const cellDate = inMonth ? new Date(state.year, state.month, dayNum) : null;

          const cell = document.createElement('div');
          cell.className = 'bg-white min-h-[120px] sm:min-h-[140px] p-2';

          const header = document.createElement('div');
          header.className = 'flex items-center justify-between';
          const num = document.createElement('div');
          num.className = 'text-xs font-medium ' + (inMonth ? 'text-slate-900' : 'text-slate-300');
          num.textContent = inMonth ? String(dayNum) : '';
          header.appendChild(num);
          cell.appendChild(header);

          if (inMonth) {
            const dayEvents = data.filter(item => {
              const ev = eventDateForTab(state.activeTab, item);
              return ev.getFullYear() === cellDate.getFullYear() &&
                     ev.getMonth() === cellDate.getMonth() &&
                     ev.getDate() === cellDate.getDate();
            });

            const list = document.createElement('div');
            list.className = 'mt-2 space-y-1';

            dayEvents.slice(0, 3).forEach(item => {
              const [txt, bg, ring] = statusClasses(item.status);
              const chip = document.createElement('div');
              chip.className = `group rounded-md ${bg} ring-1 ${ring} px-2 py-1.5 cursor-pointer hover:ring-2 hover:shadow-sm`;
              chip.title = 'Click to view details';

              // Content per tab
              const title = document.createElement('div');
              title.className = 'flex items-center gap-2 text-[11px] ' + txt + ' font-medium';
              const icon = document.createElement('i');
              icon.setAttribute('data-lucide', state.activeTab === 'spa' ? 'heart' : state.activeTab === 'taxi' ? 'car' : state.activeTab === 'car' ? 'key' : 'map-pin');
              icon.className = 'h-3.5 w-3.5';
              title.appendChild(icon);

              const mainText = document.createElement('span');
              if (state.activeTab === 'spa') {
                mainText.textContent = `${item.guest_name} • ${item.service}`;
              } else if (state.activeTab === 'taxi') {
                mainText.textContent = `${item.guest_name} • ${item.pickup} → ${item.destination}`;
              } else if (state.activeTab === 'car') {
                mainText.textContent = `${item.guest_name} • ${item.vehicle_type}${item.driver_option ? ' (Driver)' : ''}`;
              } else if (state.activeTab === 'tour') {
                mainText.textContent = `${item.guest_name} • ${item.tour_name}`;
              }
              title.appendChild(mainText);

              const meta = document.createElement('div');
              meta.className = 'text-[10px] text-slate-600 mt-0.5 flex items-center gap-1.5';
              const timeIcon = document.createElement('i');
              timeIcon.setAttribute('data-lucide', 'clock');
              timeIcon.className = 'h-3.5 w-3.5';
              meta.appendChild(timeIcon);
              const metaText = document.createElement('span');
              if (state.activeTab === 'spa' || state.activeTab === 'taxi') {
                metaText.textContent = `${formatTime(new Date(item.time))} • ${item.status}`;
              } else if (state.activeTab === 'car') {
                metaText.textContent = `${item.start_date} → ${item.end_date} • ${item.status}`;
              } else if (state.activeTab === 'tour') {
                metaText.textContent = `${item.date} • Guide: ${item.guide} • ${item.status}`;
              }
              meta.appendChild(metaText);

              chip.appendChild(title);
              chip.appendChild(meta);
              chip.addEventListener('click', () => openQuickView(item));
              list.appendChild(chip);
            });

            if (dayEvents.length > 3) {
              const more = document.createElement('div');
              more.className = 'text-[11px] text-slate-500 mt-1';
              more.textContent = `+${dayEvents.length - 3} more`;
              list.appendChild(more);
            }

            cell.appendChild(list);
          }

          grid.appendChild(cell);
        }

        wrap.appendChild(weekHeader);
        wrap.appendChild(grid);
        return wrap;
      }

      function renderTable() {
        const wrap = document.createElement('div');
        wrap.className = 'overflow-x-auto';

        const tbl = document.createElement('table');
        tbl.className = 'min-w-full divide-y divide-slate-200';

        const thead = document.createElement('thead');
        thead.className = 'bg-slate-50';
        const trh = document.createElement('tr');

        const columnsByTab = {
          spa: [
            { label: 'Guest Name', field: 'guest_name' },
            { label: 'Service', field: 'service' },
            { label: 'Date & Time', field: 'time' },
            { label: 'Status', field: 'status' },
            { label: 'Contact', field: 'contact' }
          ],
          taxi: [
            { label: 'Guest Name', field: 'guest_name' },
            { label: 'Pickup', field: 'pickup' },
            { label: 'Destination', field: 'destination' },
            { label: 'Time', field: 'time' },
            { label: 'Status', field: 'status' }
          ],
          car: [
            { label: 'Guest Name', field: 'guest_name' },
            { label: 'Vehicle Type', field: 'vehicle_type' },
            { label: 'With Driver', field: 'driver_option' },
            { label: 'Start Date', field: 'start_date' },
            { label: 'End Date', field: 'end_date' },
            { label: 'Status', field: 'status' }
          ],
          tour: [
            { label: 'Guest Name', field: 'guest_name' },
            { label: 'Tour Name', field: 'tour_name' },
            { label: 'Date', field: 'date' },
            { label: 'Guide', field: 'guide' },
            { label: 'Status', field: 'status' }
          ]
        };

        const actions = ['view_details', 'edit', 'cancel'];

        columnsByTab[state.activeTab].concat([{ label: '', field: '__actions' }]).forEach(col => {
          const th = document.createElement('th');
          th.className = 'text-left text-xs font-medium text-slate-600 uppercase tracking-wide px-4 py-3';
          th.textContent = col.label;
          trh.appendChild(th);
        });
        thead.appendChild(trh);

        const tbody = document.createElement('tbody');
        tbody.className = 'divide-y divide-slate-200';

        const rows = filterDataForTab(state.activeTab)
          .filter(item => withinMonth(eventDateForTab(state.activeTab, item), state.month, state.year))
          .sort((a,b) => eventDateForTab(state.activeTab, a) - eventDateForTab(state.activeTab, b));

        rows.forEach(item => {
          const tr = document.createElement('tr');
          tr.className = 'hover:bg-slate-50/60';

          columnsByTab[state.activeTab].forEach(col => {
            const td = document.createElement('td');
            td.className = 'px-4 py-3 text-sm text-slate-700 align-top';

            let val = item[col.field];

            if (col.field === 'time') {
              const dt = new Date(item.time);
              val = `${formatDate(dt)} ${formatTime(dt)}`;
            }
            if (col.field === 'driver_option') {
              val = item.driver_option ? 'Yes' : 'No';
            }
            if (col.field === 'status') {
              const [txt, bg, ring] = statusClasses(item.status);
              const badge = document.createElement('span');
              badge.className = `inline-flex items-center gap-1 rounded px-2 py-1 text-xs ${bg} ${txt} ring-1 ${ring}`;
              const dot = document.createElement('span');
              dot.className = `h-1.5 w-1.5 rounded-full ${ring.replace('ring-','bg-')}`;
              badge.appendChild(dot);
              badge.appendChild(document.createTextNode(item.status));
              td.appendChild(badge);
              tr.appendChild(td);
              return;
            }

            td.textContent = val ?? '—';
            tr.appendChild(td);
          });

          // Actions
          const tda = document.createElement('td');
          tda.className = 'px-4 py-3 text-right whitespace-nowrap';
          const btnRow = document.createElement('div');
          btnRow.className = 'inline-flex items-center gap-1.5';

          const viewBtn = document.createElement('button');
          viewBtn.className = 'px-2.5 py-1.5 text-sm rounded-md ring-1 ring-slate-200 hover:bg-slate-50 flex items-center gap-1.5';
          viewBtn.innerHTML = `<i data-lucide="eye" class="h-4 w-4"></i><span>View</span>`;
          viewBtn.addEventListener('click', () => openQuickView(item));
          btnRow.appendChild(viewBtn);

          const editBtn = document.createElement('button');
          editBtn.className = 'px-2.5 py-1.5 text-sm rounded-md ring-1 ring-slate-200 hover:bg-slate-50 flex items-center gap-1.5';
          editBtn.innerHTML = `<i data-lucide="pencil" class="h-4 w-4"></i><span>Edit</span>`;
          editBtn.addEventListener('click', () => alert('Edit booking ' + (item.id || '')));
          btnRow.appendChild(editBtn);

          const cancelBtn = document.createElement('button');
          cancelBtn.className = 'px-2.5 py-1.5 text-sm rounded-md ring-1 ring-rose-200 text-rose-700 hover:bg-rose-50 flex items-center gap-1.5';
          cancelBtn.innerHTML = `<i data-lucide="x" class="h-4 w-4"></i><span>Cancel</span>`;
          cancelBtn.addEventListener('click', () => {
            if (confirm('Cancel this booking?')) {
              item.status = 'Cancelled';
              render();
            }
          });
          btnRow.appendChild(cancelBtn);

          tda.appendChild(btnRow);
          tr.appendChild(tda);

          tbody.appendChild(tr);
        });

        tbl.appendChild(thead);
        tbl.appendChild(tbody);
        wrap.appendChild(tbl);
        return wrap;
      }

      function openQuickView(item) {
        const overlay = document.createElement('div');
        overlay.className = 'fixed inset-0 bg-slate-900/30 backdrop-blur-[1px] z-50 flex justify-end';
        overlay.addEventListener('click', (e) => { if (e.target === overlay) document.body.removeChild(overlay); });

        const panel = document.createElement('div');
        panel.className = 'w-full max-w-md h-full bg-white shadow-xl ring-1 ring-slate-200 flex flex-col';
        panel.innerHTML = `
          <div class="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
            <div>
              <div class="text-sm font-semibold tracking-tight">Booking Details</div>
              <div class="text-xs text-slate-500">${item.id || ''}</div>
            </div>
            <button class="p-2 rounded-md ring-1 ring-slate-200 hover:bg-slate-50" aria-label="Close"><i data-lucide="x" class="h-4 w-4"></i></button>
          </div>
          <div class="p-5 space-y-3 overflow-auto">
            ${Object.entries(item).map(([k,v]) => `
              <div class="flex items-start gap-3">
                <div class="w-32 text-xs text-slate-500 capitalize">${k.replaceAll('_',' ')}</div>
                <div class="text-sm text-slate-800">${(typeof v === 'boolean') ? (v ? 'Yes' : 'No') : v}</div>
              </div>
            `).join('')}
          </div>
          <div class="mt-auto px-5 py-4 border-t border-slate-200 flex items-center justify-end gap-2">
            <button class="px-3 py-2 text-sm rounded-md ring-1 ring-slate-200 hover:bg-slate-50">Edit</button>
            <button class="px-3 py-2 text-sm rounded-md bg-slate-900 text-white hover:bg-slate-800">Done</button>
          </div>
        `;
        panel.querySelector('[aria-label="Close"]').addEventListener('click', () => document.body.removeChild(overlay));
        overlay.appendChild(panel);
        document.body.appendChild(overlay);
        applyIcons();
      }

      // Export CSV for current tab and filters
      function exportCSV() {
        const rows = filterDataForTab(state.activeTab)
          .filter(item => withinMonth(eventDateForTab(state.activeTab, item), state.month, state.year));
        if (!rows.length) { alert('No data to export.'); return; }
        const headers = Object.keys(rows[0]);
        const csv = [
          headers.join(','),
          ...rows.map(r => headers.map(h => {
            const val = r[h];
            const s = (val === undefined || val === null) ? '' : String(val);
            // Escape
            return `"${s.replaceAll('"','""')}"`;
          }).join(','))
        ].join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const label = `${state.activeTab}_bookings_${state.year}-${pad(state.month+1)}.csv`;
        a.href = url; a.download = label;
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }

      // Event wiring
      function setupEvents() {
        document.getElementById('exportBtn').addEventListener('click', exportCSV);
        document.getElementById('prevMonthBtn').addEventListener('click', () => {
          if (state.month === 0) { state.month = 11; state.year--; } else { state.month--; }
          render();
        });
        document.getElementById('nextMonthBtn').addEventListener('click', () => {
          if (state.month === 11) { state.month = 0; state.year++; } else { state.month++; }
          render();
        });
        document.getElementById('todayBtn').addEventListener('click', () => {
          const now = new Date();
          state.month = now.getMonth();
          state.year = now.getFullYear();
          render();
        });

        document.querySelectorAll('#categoryTabs .tab-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            state.activeTab = btn.dataset.tab;
            render();
          });
        });
        document.querySelectorAll('#viewToggle .view-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            state.activeView = btn.dataset.view;
            render();
          });
        });

        // Search
        document.getElementById('searchInput').addEventListener('input', (e) => {
          state.search = e.target.value;
          render();
        });

        // Filters popover positioning and actions
        const statusBtn = document.getElementById('statusFilterBtn');
        const serviceBtn = document.getElementById('serviceFilterBtn');
        const statusMenu = document.getElementById('statusMenu');
        const serviceMenu = document.getElementById('serviceMenu');

        function toggleMenu(btn, menu) {
          const rect = btn.getBoundingClientRect();
          menu.style.top = (rect.bottom + window.scrollY) + 'px';
          menu.style.left = (rect.left + window.scrollX) + 'px';
          const opened = !menu.classList.contains('hidden');
          document.querySelectorAll('#statusMenu,#serviceMenu').forEach(m => m.classList.add('hidden'));
          if (!opened) menu.classList.remove('hidden');
        }

        statusBtn.addEventListener('click', () => toggleMenu(statusBtn, statusMenu));
        serviceBtn.addEventListener('click', () => toggleMenu(serviceBtn, serviceMenu));

        document.addEventListener('click', (e) => {
          if (!statusMenu.contains(e.target) && e.target !== statusBtn) statusMenu.classList.add('hidden');
          if (!serviceMenu.contains(e.target) && e.target !== serviceBtn) serviceMenu.classList.add('hidden');
        });

        statusMenu.querySelectorAll('.filter-status').forEach(el => {
          el.addEventListener('click', () => {
            state.statusFilter = el.dataset.status;
            statusMenu.classList.add('hidden');
            render();
          });
        });
        serviceMenu.querySelectorAll('.filter-service').forEach(el => {
          el.addEventListener('click', () => {
            state.serviceFilter = el.dataset.service;
            if (state.serviceFilter) state.activeTab = state.serviceFilter;
            serviceMenu.classList.add('hidden');
            render();
          });
        });
      }

      // Initialize
      document.addEventListener('DOMContentLoaded', () => {
        setupEvents();
        render();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen w-full flex">

<aside className="hidden lg:flex lg:w-64 xl:w-72 border-r border-slate-200 bg-white/60 backdrop-blur">
<div className="flex flex-col w-full">
<div className="flex items-center gap-3 px-6 py-5 border-b border-slate-200">
<div className="h-9 w-9 rounded-md bg-slate-900 text-white flex items-center justify-center tracking-tighter text-sm font-semibold">AT</div>
<div>
<div className="text-sm font-semibold tracking-tight">AeroTag Assist</div>
<div className="text-xs text-slate-500">Admin Panel</div>
</div>
</div>
<nav className="flex-1 p-3">
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="layout-dashboard"></i>
<span>Dashboard</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm bg-slate-900/5 text-slate-900 ring-1 ring-slate-200" href="#">
<i className="h-4 w-4" data-lucide="calendar"></i>
<span className="font-medium">Bookings</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="briefcase"></i>
<span>Services</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="users"></i>
<span>Customers</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="id-card"></i>
<span>Staff</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="bar-chart-3"></i>
<span>Reports</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="settings"></i>
<span>Settings</span>
</a>
</li>
</ul>
</nav>
<div className="border-t border-slate-200 p-4">
<div className="flex items-center gap-3">
<img alt="User" className="h-9 w-9 rounded-full ring-1 ring-slate-200 object-cover" src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate">Alex Morgan</div>
<div className="text-xs text-slate-500 truncate">admin@aerotag.co</div>
</div>
<button aria-label="Logout" className="ml-auto p-2 rounded-md hover:bg-slate-50 ring-1 ring-slate-200">
<i className="h-4 w-4" data-lucide="log-out"></i>
</button>
</div>
</div>
</div>
</aside>

<main className="flex-1">

<div className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
<div className="flex items-center gap-3 px-4 sm:px-6 py-3">
<button aria-label="Open Menu" className="lg:hidden p-2 rounded-md ring-1 ring-slate-200 hover:bg-slate-50">
<i className="h-5 w-5" data-lucide="panel-left"></i>
</button>
<div className="flex-1 flex items-center gap-3">
<div className="relative flex-1 max-w-xl">
<i className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 py-2 rounded-md bg-white ring-1 ring-slate-200 focus:ring-slate-300 outline-none text-sm placeholder:text-slate-400" id="searchInput" placeholder="Search bookings, guests, services..."/>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="px-3 py-2 text-sm rounded-md ring-1 ring-slate-200 hover:bg-slate-50" id="todayBtn">Today</button>
<div className="flex items-center gap-2">
<button aria-label="Prev Month" className="p-2 rounded-md ring-1 ring-slate-200 hover:bg-slate-50" id="prevMonthBtn">
<i className="h-4 w-4" data-lucide="chevron-left"></i>
</button>
<div className="text-sm font-medium tracking-tight min-w-[9rem] text-center" id="currentMonthLabel">—</div>
<button aria-label="Next Month" className="p-2 rounded-md ring-1 ring-slate-200 hover:bg-slate-50" id="nextMonthBtn">
<i className="h-4 w-4" data-lucide="chevron-right"></i>
</button>
</div>
<button className="px-3 py-2 text-sm rounded-md bg-slate-900 text-white hover:bg-slate-800 border border-slate-900/10" id="exportBtn">Export CSV</button>
</div>
<div className="ml-auto flex items-center gap-2">
<button className="px-3 py-2 text-sm rounded-md ring-1 ring-slate-200 hover:bg-slate-50 flex items-center gap-2" id="statusFilterBtn">
<i className="h-4 w-4" data-lucide="filter"></i>
<span>Status</span>
<i className="h-4 w-4" data-lucide="chevrons-up-down"></i>
</button>
<button className="px-3 py-2 text-sm rounded-md ring-1 ring-slate-200 hover:bg-slate-50 flex items-center gap-2" id="serviceFilterBtn">
<i className="h-4 w-4" data-lucide="sparkles"></i>
<span>Service</span>
<i className="h-4 w-4" data-lucide="chevrons-up-down"></i>
</button>
<button aria-label="Notifications" className="p-2 rounded-md ring-1 ring-slate-200 hover:bg-slate-50">
<i className="h-5 w-5" data-lucide="bell"></i>
</button>
<img alt="Avatar" className="h-9 w-9 rounded-full ring-1 ring-slate-200 object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>

<section className="px-4 sm:px-6 py-6">

<div className="mb-6">
<h1 className="text-[22px] sm:text-2xl font-semibold tracking-tight">Bookings Management</h1>
<p className="text-sm text-slate-600">Manage and monitor all guest service bookings in one place</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
<div className="rounded-lg ring-1 ring-slate-200 bg-white p-4">
<div className="text-xs text-slate-500">Total Bookings (This Month)</div>
<div className="mt-1 flex items-baseline gap-2">
<div className="text-xl font-semibold tracking-tight" id="kpiTotal">—</div>
<span className="text-xs text-emerald-600 bg-emerald-50 ring-1 ring-emerald-200 rounded px-1.5 py-0.5">+12%</span>
</div>
</div>
<div className="rounded-lg ring-1 ring-slate-200 bg-white p-4">
<div className="text-xs text-slate-500">Confirmed</div>
<div className="mt-1 text-xl font-semibold tracking-tight" id="kpiConfirmed">—</div>
</div>
<div className="rounded-lg ring-1 ring-slate-200 bg-white p-4">
<div className="text-xs text-slate-500">Pending</div>
<div className="mt-1 text-xl font-semibold tracking-tight" id="kpiPending">—</div>
</div>
<div className="rounded-lg ring-1 ring-slate-200 bg-white p-4">
<div className="text-xs text-slate-500">Cancelled</div>
<div className="mt-1 text-xl font-semibold tracking-tight" id="kpiCancelled">—</div>
</div>
</div>

<div className="mb-4 overflow-x-auto">
<div className="inline-flex rounded-md ring-1 ring-slate-200 bg-slate-50 p-1" id="categoryTabs">
<button aria-selected="true" className="tab-btn inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-white" data-tab="spa">
<i className="h-4 w-4" data-lucide="heart"></i>
<span>Spa &amp; Wellness</span>
</button>
<button className="tab-btn inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-white" data-tab="taxi">
<i className="h-4 w-4" data-lucide="car"></i>
<span>Taxi &amp; Transfer</span>
</button>
<button className="tab-btn inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-white" data-tab="car">
<i className="h-4 w-4" data-lucide="key"></i>
<span>Car Rental</span>
</button>
<button className="tab-btn inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-white" data-tab="tour">
<i className="h-4 w-4" data-lucide="map-pin"></i>
<span>Tour Guide</span>
</button>
</div>
</div>

<div className="mb-4 flex items-center justify-between gap-3 flex-wrap">
<div className="inline-flex rounded-md ring-1 ring-slate-200 bg-white" id="viewToggle">
<button aria-pressed="true" className="view-btn inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-slate-50" data-view="calendar">
<i className="h-4 w-4" data-lucide="calendar"></i>
<span>Calendar View</span>
</button>
<button className="view-btn inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-slate-50" data-view="list">
<i className="h-4 w-4" data-lucide="list"></i>
<span>List View</span>
</button>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 text-sm rounded-md ring-1 ring-slate-200 hover:bg-slate-50 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="plus"></i>
<span>New Booking</span>
</button>
</div>
</div>

<div className="rounded-lg ring-1 ring-slate-200 bg-white overflow-hidden" id="contentContainer">

</div>
</section>
</main>
</div>

<div className="hidden absolute z-40 mt-1 w-48 bg-white rounded-md ring-1 ring-slate-200 shadow-sm p-1" id="statusMenu">
<button className="filter-status w-full text-left px-3 py-2 text-sm rounded hover:bg-slate-50" data-status="">All</button>
<button className="filter-status w-full text-left px-3 py-2 text-sm rounded hover:bg-slate-50" data-status="Confirmed">Confirmed</button>
<button className="filter-status w-full text-left px-3 py-2 text-sm rounded hover:bg-slate-50" data-status="Pending">Pending</button>
<button className="filter-status w-full text-left px-3 py-2 text-sm rounded hover:bg-slate-50" data-status="In Progress">In Progress</button>
<button className="filter-status w-full text-left px-3 py-2 text-sm rounded hover:bg-slate-50" data-status="Cancelled">Cancelled</button>
</div>

<div className="hidden absolute z-40 mt-1 w-56 bg-white rounded-md ring-1 ring-slate-200 shadow-sm p-1" id="serviceMenu">
<div className="px-3 py-1.5 text-xs text-slate-500">Category</div>
<button className="filter-service w-full text-left px-3 py-2 text-sm rounded hover:bg-slate-50" data-service="">All</button>
<div className="px-3 py-1.5 text-xs text-slate-500">Tabs</div>
<button className="filter-service w-full text-left px-3 py-2 text-sm rounded hover:bg-slate-50" data-service="spa">Spa &amp; Wellness</button>
<button className="filter-service w-full text-left px-3 py-2 text-sm rounded hover:bg-slate-50" data-service="taxi">Taxi &amp; Transfer</button>
<button className="filter-service w-full text-left px-3 py-2 text-sm rounded hover:bg-slate-50" data-service="car">Car Rental</button>
<button className="filter-service w-full text-left px-3 py-2 text-sm rounded hover:bg-slate-50" data-service="tour">Tour Guide</button>
</div>


    </>
  );
}
