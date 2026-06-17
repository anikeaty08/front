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



        // Helpers
        const $ = (sel, ctx = document) => ctx.querySelector(sel);
        const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

        let totalSeats = parseInt($('#total-seats').textContent, 10) || 25;
        const colorPool = [
            ['bg-emerald-100','text-emerald-600'],
            ['bg-indigo-100','text-indigo-600'],
            ['bg-rose-100','text-rose-600'],
            ['bg-sky-100','text-sky-600'],
            ['bg-amber-100','text-amber-600'],
            ['bg-lime-100','text-lime-600'],
            ['bg-purple-100','text-purple-600'],
            ['bg-fuchsia-100','text-fuchsia-600'],
            ['bg-teal-100','text-teal-600'],
            ['bg-cyan-100','text-cyan-600'],
            ['bg-stone-100','text-stone-600'],
            ['bg-pink-100','text-pink-600'],
            ['bg-blue-100','text-blue-600'],
            ['bg-violet-100','text-violet-600'],
            ['bg-slate-200','text-slate-700'],
            ['bg-orange-100','text-orange-600']
        ];

        function showToast(msg, icon = 'lucide:check-circle') {
            $('#toast-text').textContent = msg;
            $('#toast .iconify').setAttribute('data-icon', icon);
            const toast = $('#toast');
            toast.classList.remove('hidden');
            toast.classList.add('fade-in');
            setTimeout(() => {
                toast.classList.add('hidden');
                toast.classList.remove('fade-in');
            }, 1800);
        }

        // Menus
        function toggleMenu(id) {
            // Close other menus
            $$('.menu-open').forEach(m => { m.classList.add('hidden'); m.classList.remove('menu-open'); });
            const el = document.getElementById(id);
            if (!el) return;
            const isHidden = el.classList.contains('hidden');
            if (isHidden) {
                el.classList.remove('hidden');
                el.classList.add('menu-open');
            } else {
                el.classList.add('hidden');
                el.classList.remove('menu-open');
            }
        }

        document.addEventListener('click', (e) => {
            // Close row menus if clicked outside
            if (!e.target.closest('[id^="menu-"]') && !e.target.closest('button[onclick^="toggleMenu"]')) {
                $$('.menu-open').forEach(m => { m.classList.add('hidden'); m.classList.remove('menu-open'); });
            }
            // Close dropdowns
            if (!e.target.closest('#export-btn') && !e.target.closest('#export-menu')) {
                $('#export-menu')?.classList.add('hidden');
            }
            if (!e.target.closest('#bulk-actions-btn') && !e.target.closest('#bulk-actions-menu')) {
                $('#bulk-actions-menu')?.classList.add('hidden');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Close modals
                closeAddStudentModal();
                closeReassignModal();
                closePurchaseModal();
                // Close menus
                $$('.menu-open').forEach(m => { m.classList.add('hidden'); m.classList.remove('menu-open'); });
                $('#export-menu')?.classList.add('hidden');
                $('#bulk-actions-menu')?.classList.add('hidden');
            }
        });

        // Export menu
        $('#export-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            $('#export-menu').classList.toggle('hidden');
        });

        function buildCSV(rows) {
            const headers = ['Name','Email','Status','Seat'];
            const lines = [headers.join(',')];
            rows.forEach(row => {
                const name = $('.student-name', row)?.textContent?.trim() || '';
                const email = $('.student-email', row)?.textContent?.trim() || '';
                const status = row.querySelector('span.inline-flex')?.textContent?.trim().split(/\s+/)[0] || '';
                const seat = row.querySelector('.font-mono')?.textContent?.trim() || '';
                const safe = [name,email,status,seat].map(v => `"${String(v).replace(/"/g, '""')}"`);
                lines.push(safe.join(','));
            });
            return lines.join('\n');
        }

        function downloadFile(filename, content, mime = 'text/csv;charset=utf-8;') {
            const blob = new Blob([content], { type: mime });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        $('#export-all').addEventListener('click', () => {
            const csv = buildCSV($$('#student-list > div[id^="row-"]'));
            downloadFile('students_all.csv', csv);
            $('#export-menu').classList.add('hidden');
            showToast('Exported all students');
        });

        $('#export-selected').addEventListener('click', () => {
            const selected = $$('.row-checkbox:checked').map(cb => document.getElementById(cb.dataset.rowId));
            if (!selected.length) { showToast('No rows selected', 'lucide:info'); return; }
            const csv = buildCSV(selected);
            downloadFile('students_selected.csv', csv);
            $('#export-menu').classList.add('hidden');
            showToast('Exported selected');
        });

        // Select logic
        const selectAll = $('#select-all');
        const selectionSummary = $('#selection-summary');
        function updateSelectionState() {
            const boxes = $$('.row-checkbox');
            const checked = boxes.filter(b => b.checked);
            const allChecked = boxes.length && checked.length === boxes.length;
            selectAll.checked = allChecked;
            $('#bulk-actions-btn').disabled = checked.length === 0;
            $('#reset-password-btn').disabled = checked.length === 0;
            const revokeBtn = $('#bulk-revoke-btn');
            revokeBtn.disabled = checked.length === 0;
            const badge = $('#bulk-count-badge');
            if (checked.length) {
                badge.classList.remove('hidden');
                badge.textContent = checked.length;
                selectionSummary.classList.remove('hidden');
                selectionSummary.textContent = `${checked.length} selected`;
            } else {
                badge.classList.add('hidden');
                selectionSummary.classList.add('hidden');
            }
        }
        selectAll.addEventListener('change', () => {
            $$('.row-checkbox').forEach(cb => cb.checked = selectAll.checked);
            updateSelectionState();
        });
        function bindRowCheckboxes(ctx = document) {
            $$('.row-checkbox', ctx).forEach(cb => {
                cb.addEventListener('change', updateSelectionState);
            });
        }
        bindRowCheckboxes();

        // Bulk actions dropdown
        $('#bulk-actions-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            $('#bulk-actions-menu').classList.toggle('hidden');
        });

        // Bulk revoke
        $('#bulk-revoke-btn').addEventListener('click', () => {
            const toRemove = $$('.row-checkbox:checked').map(cb => cb.dataset.rowId);
            if (!toRemove.length) return;
            toRemove.forEach(id => deleteRow(id, false));
            updateSelectionState();
            showToast('Revoked access for selected');
        });
        $('#bulk-revoke-action').addEventListener('click', () => {
            $('#bulk-actions-menu').classList.add('hidden');
            $('#bulk-revoke-btn').click();
        });

        // Bulk reassign (simple: acts on first selected)
        $('#bulk-reassign-action').addEventListener('click', () => {
            $('#bulk-actions-menu').classList.add('hidden');
            const selected = $$('.row-checkbox:checked');
            if (!selected.length) { showToast('Select at least one row', 'lucide:info'); return; }
            const firstId = selected[0].dataset.rowId;
            const row = document.getElementById(firstId);
            const name = $('.student-name', row)?.textContent || 'Student';
            openReassignModal(name, firstId);
        });

        // Reset password toolbar
        $('#reset-password-btn').addEventListener('click', () => {
            const rows = $$('.row-checkbox:checked').map(cb => cb.dataset.rowId);
            rows.forEach(id => resetPassword(id, false));
            showToast('Password reset links sent');
        });

        // Stats
        function getOccupiedCount() {
            return $$('#student-list > div[id^="row-"]').reduce((acc, row) => {
                const statusEl = row.querySelector('span.inline-flex');
                const seatEl = row.querySelector('.font-mono');
                const isActive = statusEl && /Active/i.test(statusEl.textContent);
                const hasSeat = seatEl && /Seat\s+#\d+/.test(seatEl.textContent);
                return acc + (isActive && hasSeat ? 1 : 0);
            }, 0);
        }
        function updateStats() {
            const occupied = getOccupiedCount();
            const available = Math.max(totalSeats - occupied, 0);
            $('#occupied-count').textContent = occupied;
            $('#available-seats').textContent = available;
            const pct = Math.min(Math.max((occupied / Math.max(totalSeats, 1)) * 100, 0), 100);
            $('#occupied-progress').style.width = pct + '%';
            // License panel
            $('#license-total-seats').textContent = totalSeats;
            $('#license-used-seats').textContent = occupied;
            $('#license-remaining-seats').textContent = available;
            // Header cards
            $('#total-seats').textContent = totalSeats;
            // Row count
            $('#row-count').textContent = $$('#student-list > div[id^="row-"]').length;
        }
        updateStats();

        // Row actions
        function setStatus(row, isActive) {
            const badge = row.querySelector('span.inline-flex');
            if (!badge) return;
            if (isActive) {
                badge.className = "inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100";
                badge.innerHTML = '<span class="w-1 h-1 rounded-full bg-emerald-500"></span> Active';
            } else {
                badge.className = "inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200";
                badge.innerHTML = '<span class="w-1 h-1 rounded-full bg-slate-400"></span> Inactive';
            }
        }
        function setSeat(row, seatNumber) {
            const seatEl = row.querySelector('.font-mono');
            if (!seatEl) return;
            if (seatNumber && Number(seatNumber) > 0) {
                seatEl.textContent = `Seat #${String(seatNumber).padStart(3,'0')}`;
                setStatus(row, true);
            } else {
                seatEl.textContent = 'Unassigned';
                setStatus(row, false);
            }
        }

        function deleteRow(id, show = true) {
            const row = document.getElementById(id);
            if (!row) return;
            row.classList.add('fade-in');
            row.style.opacity = '0';
            setTimeout(() => {
                row.remove();
                updateStats();
            }, 180);
            if (show) showToast('Access revoked');
        }

        function resetPassword(id, show = true) {
            // In a real app, trigger an API call
            if (show) showToast('Password reset link sent');
        }

        // Add student
        function openAddStudentModal() {
            $('#add-student-modal').classList.remove('hidden');
            setTimeout(() => $('input[name="name"]').focus(), 0);
        }
        function closeAddStudentModal() {
            $('#add-student-modal').classList.add('hidden');
            $('#add-student-form').reset();
        }

        let nextRowIndex = (() => {
            const ids = $$('#student-list > div[id^="row-"]').map(d => parseInt(d.id.replace('row-',''),10));
            return Math.max(...ids, 0) + 1;
        })();

        $('#add-student-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const status = form.status.value === 'active';
            const seat = form.seat.value ? parseInt(form.seat.value, 10) : null;
            const initials = name.split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase() || 'ST';
            const [bg,text] = colorPool[Math.floor(Math.random()*colorPool.length)];
            const id = `row-${nextRowIndex++}`;

            const wrapper = document.createElement('div');
            wrapper.className = "group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative new-row-flash";
            wrapper.id = id;
            wrapper.innerHTML = `
                <div class="flex items-center gap-4">
                    <label class="inline-flex items-center cursor-pointer select-none">
                        <input type="checkbox" class="sr-only peer row-checkbox" data-row-id="${id}">
                        <span class="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
                    </label>
                    <div class="w-9 h-9 rounded-full ${bg} ${text} flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">${initials}</div>
                    <div>
                        <div class="text-sm font-medium text-slate-900 student-name">${name}</div>
                        <div class="text-xs text-slate-500 student-email">${email}</div>
                    </div>
                </div>
                <div class="flex items-center gap-6">
                    <span class="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium ${status ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-slate-100 text-slate-700 border border-slate-200'}">
                        <span class="w-1 h-1 rounded-full ${status ? 'bg-emerald-500' : 'bg-slate-400'}"></span> ${status ? 'Active' : 'Inactive'}
                    </span>
                    <div class="text-xs text-slate-400 font-mono">${status && seat ? `Seat #${String(seat).padStart(3,'0')}` : (status && !seat ? 'Seat Pending' : 'Unassigned')}</div>
                    <div class="relative">
                        <button onclick="toggleMenu('menu-${id}')" class="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md"><span class="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
                        <div id="menu-${id}" class="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden">
                            <div class="p-1">
                                <button onclick="openReassignModal('${name}', '${id}')" class="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2"><span class="iconify" data-icon="lucide:arrow-left-right" data-width="14"></span> ${status ? 'Reassign Seat' : 'Assign Seat'}</button>
                                <button onclick="resetPassword('${id}')" class="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2"><span class="iconify" data-icon="lucide:key-round" data-width="14"></span> Reset Password</button>
                                <button onclick="deleteRow('${id}')" class="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2"><span class="iconify" data-icon="lucide:trash-2" data-width="14"></span> ${status ? 'Revoke Access' : 'Remove'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            $('#student-list').appendChild(wrapper);
            bindRowCheckboxes(wrapper);
            updateStats();
            closeAddStudentModal();
            showToast('Student added');
        });

        // Reassign
        function openReassignModal(name, rowId) {
            $('#reassign-title').textContent = `Assign/Reassign Seat — ${name}`;
            $('#reassign-row-id').value = rowId;
            $('#reassign-clear').checked = false;
            $('#reassign-seat').value = '';
            $('#reassign-modal').classList.remove('hidden');
            setTimeout(() => $('#reassign-seat').focus(), 0);
        }
        function closeReassignModal() {
            $('#reassign-modal').classList.add('hidden');
        }
        $('#reassign-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const rowId = $('#reassign-row-id').value;
            const row = document.getElementById(rowId);
            if (!row) return;
            const clear = $('#reassign-clear').checked;
            if (clear) {
                setSeat(row, null);
                showToast('Seat cleared');
            } else {
                const seat = parseInt($('#reassign-seat').value, 10);
                if (!seat || seat < 1) { showToast('Enter a valid seat #', 'lucide:alert-circle'); return; }
                setSeat(row, seat);
                showToast('Seat assigned');
            }
            updateStats();
            closeReassignModal();
        });
        $('#reassign-clear').addEventListener('change', (e) => {
            $('#reassign-seat').disabled = e.currentTarget.checked;
        });

        // Purchase seats
        function openPurchaseModal() {
            $('#purchase-modal').classList.remove('hidden');
            setTimeout(() => $('#purchase-qty').focus(), 0);
        }
        function closePurchaseModal() {
            $('#purchase-modal').classList.add('hidden');
            $('#purchase-form').reset();
        }
        $('#purchase-seats-btn').addEventListener('click', openPurchaseModal);
        $('#purchase-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const qty = parseInt($('#purchase-qty').value, 10);
            if (!qty || qty < 1) { showToast('Enter a valid quantity', 'lucide:alert-circle'); return; }
            totalSeats += qty;
            updateStats();
            closePurchaseModal();
            showToast(`Purchased ${qty} seat${qty>1?'s':''}`);
        });

        // Toolbar search (client-side filter)
        const searchInput = $('input[placeholder="Search students..."]');
        searchInput.addEventListener('input', () => {
            const q = searchInput.value.trim().toLowerCase();
            let visible = 0;
            $$('#student-list > div[id^="row-"]').forEach(row => {
                const name = $('.student-name', row)?.textContent.toLowerCase() || '';
                const email = $('.student-email', row)?.textContent.toLowerCase() || '';
                const seat = row.querySelector('.font-mono')?.textContent.toLowerCase() || '';
                const match = !q || name.includes(q) || email.includes(q) || seat.includes(q);
                row.style.display = match ? '' : 'none';
                if (match) visible++;
            });
            $('#row-count').textContent = visible;
        });

        // Update initial counts once DOM is ready
        window.addEventListener('load', updateStats);
    
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
      

<aside className="w-16 flex flex-col items-center py-4 border-r border-gray-200 bg-white z-20 shrink-0">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-6 shadow-sm">
<span className="font-semibold tracking-tighter text-xs">Ed</span>
</div>
<nav className="flex flex-col gap-3 w-full px-2">
<a className="p-2 rounded-md text-slate-400 hover:text-slate-900 hover:bg-gray-50 transition-all flex justify-center group" href="#">
<span className="iconify group-hover:scale-105 transition-transform" data-icon="lucide:layout-grid" data-width="20" strokeWidth="1.5"></span>
</a>
<a className="p-2 rounded-md text-slate-900 bg-gray-100 transition-all flex justify-center relative shadow-sm ring-1 ring-gray-200/50" href="#">
<span className="iconify" data-icon="lucide:users" data-width="20" strokeWidth="1.5"></span>
<span className="absolute right-1.5 top-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full ring-2 ring-white"></span>
</a>
<a className="p-2 rounded-md text-slate-400 hover:text-slate-900 hover:bg-gray-50 transition-all flex justify-center group" href="#">
<span className="iconify" data-icon="lucide:settings-2" data-width="20" strokeWidth="1.5"></span>
</a>
</nav>
<div className="mt-auto mb-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-200 to-slate-300 ring-1 ring-slate-100 shadow-sm cursor-pointer hover:ring-slate-300 transition-all"></div>
</div>
</aside>

<div className="flex-1 flex flex-col h-full overflow-hidden" id="main-content">

<header className="h-14 border-b border-gray-200 bg-white flex items-center justify-between px-6 shrink-0 z-10">
<div className="flex items-center gap-2 text-sm font-medium">
<span className="text-slate-500 hover:text-slate-800 cursor-pointer transition-colors">Settings</span>
<span className="iconify text-slate-300" data-icon="lucide:chevron-right" data-width="14" strokeWidth="1.5"></span>
<span className="text-slate-900">Seat Management</span>
</div>
<div className="flex items-center gap-3">

<div className="relative">
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-gray-200 rounded-md hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm" id="export-btn">
<span className="iconify" data-icon="lucide:download" data-width="14" strokeWidth="1.5"></span>
                        Export CSV
                        <span className="iconify text-slate-400" data-icon="lucide:chevron-down" data-width="14" strokeWidth="1.5"></span>
</button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="export-menu">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 rounded-md flex items-center gap-2 transition-colors" id="export-all">
<span className="iconify" data-icon="lucide:file-down" data-width="14" strokeWidth="1.5"></span>
                                Export All (.csv)
                            </button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 rounded-md flex items-center gap-2 transition-colors" id="export-selected">
<span className="iconify" data-icon="lucide:list-checks" data-width="14" strokeWidth="1.5"></span>
                                Export Selected (.csv)
                            </button>
</div>
</div>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-all shadow-sm hover:shadow ring-offset-1 focus:ring-2 ring-slate-800" onclick="openAddStudentModal()">
<span className="iconify" data-icon="lucide:plus" data-width="14" strokeWidth="1.5"></span>
                    Add Student
                </button>
</div>
</header>

<main className="flex-1 overflow-auto bg-gray-50/50 p-6 md:p-8">
<div className="max-w-5xl mx-auto space-y-6">

<div className="grid grid-cols-3 gap-4">
<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
<div className="text-xs font-medium text-slate-500 mb-1">Total Seats</div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight"><span id="total-seats">25</span></div>
</div>
<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
<div className="text-xs font-medium text-slate-500 mb-1">Occupied</div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight flex items-center gap-2">
<span id="occupied-count">18</span>
<div className="h-1.5 flex-1 bg-gray-100 rounded-full max-w-[60px] overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full" id="occupied-progress" style={{width: '72%'}}></div>
</div>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
<div className="text-xs font-medium text-slate-500 mb-1">Available</div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight"><span id="available-seats">7</span></div>
</div>
</div>

<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="iconify text-slate-700" data-icon="lucide:badge-check" data-width="16" strokeWidth="1.5"></span>
<div className="text-sm font-semibold text-slate-900 tracking-tight">License</div>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-all shadow-sm" id="purchase-seats-btn">
<span className="iconify" data-icon="lucide:credit-card" data-width="14" strokeWidth="1.5"></span>
                                Purchase Seats
                            </button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="space-y-1">
<div className="text-xs text-slate-500">Current Plan</div>
<div className="text-sm font-medium text-slate-900" id="license-plan">Pro Annual</div>
</div>
<div className="space-y-1">
<div className="text-xs text-slate-500">Seats</div>
<div className="text-sm text-slate-900">
<span className="font-medium" id="license-total-seats">25</span> total • 
                                <span className="font-medium" id="license-used-seats">18</span> used • 
                                <span className="font-medium" id="license-remaining-seats">7</span> remaining
                            </div>
</div>
<div className="space-y-1">
<div className="text-xs text-slate-500">Add-ons</div>
<div className="text-sm text-slate-900" id="addons-list">SSO, Priority Support</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">

<div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between gap-4 bg-gray-50/50">
<div className="relative flex-1 max-w-sm group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
<span className="iconify" data-icon="lucide:search" data-width="14" strokeWidth="1.5"></span>
</span>
<input className="w-full pl-9 pr-3 py-1.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder:text-slate-400 shadow-sm text-slate-600" placeholder="Search students..." type="text"/>
</div>
<div className="flex items-center gap-2">

<label className="inline-flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
<input className="sr-only peer" id="select-all" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
<span className="hidden sm:inline">Select all</span>
</label>

<div className="relative">
<button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="bulk-actions-btn">
<span className="iconify" data-icon="lucide:chevrons-left-right" data-width="14" strokeWidth="1.5"></span>
                                    Bulk Actions
                                    <span className="iconify text-slate-400" data-icon="lucide:chevron-down" data-width="14" strokeWidth="1.5"></span>
</button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="bulk-actions-menu">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2 transition-colors" id="bulk-revoke-action">
<span className="iconify" data-icon="lucide:trash-2" data-width="14" strokeWidth="1.5"></span>
                                            Revoke Access
                                        </button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2 transition-colors" id="bulk-reassign-action">
<span className="iconify" data-icon="lucide:arrow-left-right" data-width="14" strokeWidth="1.5"></span>
                                            Reassign
                                        </button>
</div>
</div>
</div>

<button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="reset-password-btn">
<span className="iconify" data-icon="lucide:key-round" data-width="14" strokeWidth="1.5"></span>
                                Reset Password
                            </button>

<button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-red-600 rounded-md hover:bg-red-500 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed hidden" disabled="" id="bulk-revoke-btn">
<span className="iconify" data-icon="lucide:trash-2" data-width="14" strokeWidth="1.5"></span>
                                Revoke Selected
                                <span className="hidden ml-1 text-[10px] px-1.5 py-0.5 rounded-full bg-white/10" id="bulk-count-badge"></span>
</button>
<button className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-gray-100 rounded-md transition-colors">
<span className="iconify" data-icon="lucide:filter" data-width="14" strokeWidth="1.5"></span>
</button>
</div>
</div>

<div className="divide-y divide-gray-100" id="student-list">

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-1">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-1" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">
                                    JD
                                </div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Jane Doe</div>
<div className="text-xs text-slate-500 student-email">jane.doe@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                                    Active
                                </span>
<div className="text-xs text-slate-400 font-mono">Seat #042</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md transition-colors" onclick="toggleMenu('menu-1')">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16" strokeWidth="1.5"></span>
</button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden transform origin-top-right transition-all" id="menu-1">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2 transition-colors" onclick="openReassignModal('Jane Doe', 'row-1')">
<span className="iconify" data-icon="lucide:arrow-left-right" data-width="14" strokeWidth="1.5"></span>
                                                Reassign Seat
                                            </button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2 transition-colors" onclick="resetPassword('row-1')">
<span className="iconify" data-icon="lucide:key-round" data-width="14" strokeWidth="1.5"></span>
                                                Reset Password
                                            </button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2 transition-colors" onclick="deleteRow('row-1')">
<span className="iconify" data-icon="lucide:trash-2" data-width="14" strokeWidth="1.5"></span>
                                                Revoke Access
                                            </button>
</div>
</div>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-2">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-2" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">
                                    AS
                                </div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Alex Smith</div>
<div className="text-xs text-slate-500 student-email">alex.smith@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                                    Active
                                </span>
<div className="text-xs text-slate-400 font-mono">Seat #015</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md transition-colors" onclick="toggleMenu('menu-2')">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16" strokeWidth="1.5"></span>
</button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden transform origin-top-right transition-all" id="menu-2">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2 transition-colors" onclick="openReassignModal('Alex Smith', 'row-2')">
<span className="iconify" data-icon="lucide:arrow-left-right" data-width="14" strokeWidth="1.5"></span>
                                                Reassign Seat
                                            </button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2 transition-colors" onclick="resetPassword('row-2')">
<span className="iconify" data-icon="lucide:key-round" data-width="14" strokeWidth="1.5"></span>
                                                Reset Password
                                            </button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2 transition-colors" onclick="deleteRow('row-2')">
<span className="iconify" data-icon="lucide:trash-2" data-width="14" strokeWidth="1.5"></span>
                                                Revoke Access
                                            </button>
</div>
</div>
</div>
</div>
</div>


<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-3">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-3" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">KL</div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Kim Lee</div>
<div className="text-xs text-slate-500 student-email">kim.lee@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                                    Active
                                </span>
<div className="text-xs text-slate-400 font-mono">Seat #031</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md transition-colors" onclick="toggleMenu('menu-3')">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16" strokeWidth="1.5"></span>
</button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="menu-3">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2" onclick="openReassignModal('Kim Lee', 'row-3')">
<span className="iconify" data-icon="lucide:arrow-left-right" data-width="14" strokeWidth="1.5"></span> Reassign Seat
                                            </button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2" onclick="resetPassword('row-3')">
<span className="iconify" data-icon="lucide:key-round" data-width="14" strokeWidth="1.5"></span> Reset Password
                                            </button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2" onclick="deleteRow('row-3')">
<span className="iconify" data-icon="lucide:trash-2" data-width="14" strokeWidth="1.5"></span> Revoke Access
                                            </button>
</div>
</div>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-4">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-4" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">RP</div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Riley Patel</div>
<div className="text-xs text-slate-500 student-email">riley.patel@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
<span className="w-1 h-1 rounded-full bg-slate-400"></span>
                                    Inactive
                                </span>
<div className="text-xs text-slate-400 font-mono">Unassigned</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md transition-colors" onclick="toggleMenu('menu-4')">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16" strokeWidth="1.5"></span>
</button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="menu-4">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2" onclick="openReassignModal('Riley Patel', 'row-4')">
<span className="iconify" data-icon="lucide:arrow-left-right" data-width="14" strokeWidth="1.5"></span> Assign Seat
                                            </button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2" onclick="resetPassword('row-4')">
<span className="iconify" data-icon="lucide:key-round" data-width="14" strokeWidth="1.5"></span> Reset Password
                                            </button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2" onclick="deleteRow('row-4')">
<span className="iconify" data-icon="lucide:trash-2" data-width="14" strokeWidth="1.5"></span> Remove
                                            </button>
</div>
</div>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-5">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-5" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">GM</div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Grace Morgan</div>
<div className="text-xs text-slate-500 student-email">grace.morgan@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1 h-1 rounded-full bg-emerald-500"></span> Active
                                </span>
<div className="text-xs text-slate-400 font-mono">Seat #067</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md" onclick="toggleMenu('menu-5')"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16" strokeWidth="1.5"></span></button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="menu-5">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2" onclick="openReassignModal('Grace Morgan', 'row-5')"><span className="iconify" data-icon="lucide:arrow-left-right" data-width="14" strokeWidth="1.5"></span> Reassign Seat</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2" onclick="resetPassword('row-5')"><span className="iconify" data-icon="lucide:key-round" data-width="14" strokeWidth="1.5"></span> Reset Password</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2" onclick="deleteRow('row-5')"><span className="iconify" data-icon="lucide:trash-2" data-width="14" strokeWidth="1.5"></span> Revoke Access</button>
</div>
</div>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-6">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-6" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-lime-100 text-lime-600 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">HB</div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Harper Brown</div>
<div className="text-xs text-slate-500 student-email">harper.brown@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
<span className="w-1 h-1 rounded-full bg-slate-400"></span> Inactive
                                </span>
<div className="text-xs text-slate-400 font-mono">Unassigned</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md" onclick="toggleMenu('menu-6')"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16" strokeWidth="1.5"></span></button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="menu-6">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2" onclick="openReassignModal('Harper Brown', 'row-6')"><span className="iconify" data-icon="lucide:arrow-left-right" data-width="14" strokeWidth="1.5"></span> Assign Seat</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2" onclick="resetPassword('row-6')"><span className="iconify" data-icon="lucide:key-round" data-width="14" strokeWidth="1.5"></span> Reset Password</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2" onclick="deleteRow('row-6')"><span className="iconify" data-icon="lucide:trash-2" data-width="14" strokeWidth="1.5"></span> Remove</button>
</div>
</div>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-7">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-7" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">OM</div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Owen Martinez</div>
<div className="text-xs text-slate-500 student-email">owen.martinez@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"><span className="w-1 h-1 rounded-full bg-emerald-500"></span> Active</span>
<div className="text-xs text-slate-400 font-mono">Seat #089</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md" onclick="toggleMenu('menu-7')"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16" strokeWidth="1.5"></span></button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="menu-7">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2" onclick="openReassignModal('Owen Martinez', 'row-7')"><span className="iconify" data-icon="lucide:arrow-left-right" data-width="14"></span> Reassign Seat</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2" onclick="resetPassword('row-7')"><span className="iconify" data-icon="lucide:key-round" data-width="14"></span> Reset Password</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2" onclick="deleteRow('row-7')"><span className="iconify" data-icon="lucide:trash-2" data-width="14"></span> Revoke Access</button>
</div>
</div>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-8">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-8" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">EM</div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Evelyn Moore</div>
<div className="text-xs text-slate-500 student-email">evelyn.moore@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"><span className="w-1 h-1 rounded-full bg-slate-400"></span> Inactive</span>
<div className="text-xs text-slate-400 font-mono">Unassigned</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md" onclick="toggleMenu('menu-8')"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="menu-8">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2" onclick="openReassignModal('Evelyn Moore', 'row-8')"><span className="iconify" data-icon="lucide:arrow-left-right" data-width="14"></span> Assign Seat</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2" onclick="resetPassword('row-8')"><span className="iconify" data-icon="lucide:key-round" data-width="14"></span> Reset Password</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2" onclick="deleteRow('row-8')"><span className="iconify" data-icon="lucide:trash-2" data-width="14"></span> Remove</button>
</div>
</div>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-9">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-9" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">DL</div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Diego Lopez</div>
<div className="text-xs text-slate-500 student-email">diego.lopez@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"><span className="w-1 h-1 rounded-full bg-emerald-500"></span> Active</span>
<div className="text-xs text-slate-400 font-mono">Seat #103</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md" onclick="toggleMenu('menu-9')"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="menu-9">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2" onclick="openReassignModal('Diego Lopez', 'row-9')"><span className="iconify" data-icon="lucide:arrow-left-right" data-width="14"></span> Reassign Seat</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2" onclick="resetPassword('row-9')"><span className="iconify" data-icon="lucide:key-round" data-width="14"></span> Reset Password</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2" onclick="deleteRow('row-9')"><span className="iconify" data-icon="lucide:trash-2" data-width="14"></span> Revoke Access</button>
</div>
</div>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-10">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-10" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">NT</div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Noah Thompson</div>
<div className="text-xs text-slate-500 student-email">noah.thompson@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"><span className="w-1 h-1 rounded-full bg-slate-400"></span> Inactive</span>
<div className="text-xs text-slate-400 font-mono">Unassigned</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md" onclick="toggleMenu('menu-10')"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="menu-10">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2" onclick="openReassignModal('Noah Thompson', 'row-10')"><span className="iconify" data-icon="lucide:arrow-left-right" data-width="14"></span> Assign Seat</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2" onclick="resetPassword('row-10')"><span className="iconify" data-icon="lucide:key-round" data-width="14"></span> Reset Password</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2" onclick="deleteRow('row-10')"><span className="iconify" data-icon="lucide:trash-2" data-width="14"></span> Remove</button>
</div>
</div>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-11">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-11" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">PB</div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Parker Brooks</div>
<div className="text-xs text-slate-500 student-email">parker.brooks@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"><span className="w-1 h-1 rounded-full bg-emerald-500"></span> Active</span>
<div className="text-xs text-slate-400 font-mono">Seat #055</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md" onclick="toggleMenu('menu-11')"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="menu-11">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2" onclick="openReassignModal('Parker Brooks', 'row-11')"><span className="iconify" data-icon="lucide:arrow-left-right" data-width="14"></span> Reassign Seat</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2" onclick="resetPassword('row-11')"><span className="iconify" data-icon="lucide:key-round" data-width="14"></span> Reset Password</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2" onclick="deleteRow('row-11')"><span className="iconify" data-icon="lucide:trash-2" data-width="14"></span> Revoke Access</button>
</div>
</div>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-12">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-12" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">LC</div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Logan Carter</div>
<div className="text-xs text-slate-500 student-email">logan.carter@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"><span className="w-1 h-1 rounded-full bg-slate-400"></span> Inactive</span>
<div className="text-xs text-slate-400 font-mono">Unassigned</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md" onclick="toggleMenu('menu-12')"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="menu-12">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2" onclick="openReassignModal('Logan Carter', 'row-12')"><span className="iconify" data-icon="lucide:arrow-left-right" data-width="14"></span> Assign Seat</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2" onclick="resetPassword('row-12')"><span className="iconify" data-icon="lucide:key-round" data-width="14"></span> Reset Password</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2" onclick="deleteRow('row-12')"><span className="iconify" data-icon="lucide:trash-2" data-width="14"></span> Remove</button>
</div>
</div>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-13">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-13" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">MC</div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Maya Collins</div>
<div className="text-xs text-slate-500 student-email">maya.collins@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"><span className="w-1 h-1 rounded-full bg-emerald-500"></span> Active</span>
<div className="text-xs text-slate-400 font-mono">Seat #074</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md" onclick="toggleMenu('menu-13')"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="menu-13">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2" onclick="openReassignModal('Maya Collins', 'row-13')"><span className="iconify" data-icon="lucide:arrow-left-right" data-width="14"></span> Reassign Seat</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2" onclick="resetPassword('row-13')"><span className="iconify" data-icon="lucide:key-round" data-width="14span&gt; Reset Password&lt;/button&gt;
                                            &lt;button onclick=" deleterow('row-13')"=""><span className="iconify" data-icon="lucide:trash-2" data-width="14"></span> Revoke Access</span></button>
</div>
</div>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-14">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-14" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">JW</div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Jordan White</div>
<div className="text-xs text-slate-500 student-email">jordan.white@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"><span className="w-1 h-1 rounded-full bg-slate-400"></span> Inactive</span>
<div className="text-xs text-slate-400 font-mono">Unassigned</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md" onclick="toggleMenu('menu-14')"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="menu-14">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2" onclick="openReassignModal('Jordan White', 'row-14')"><span className="iconify" data-icon="lucide:arrow-left-right" data-width="14"></span> Assign Seat</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2" onclick="resetPassword('row-14')"><span className="iconify" data-icon="lucide:key-round" data-width="14"></span> Reset Password</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2" onclick="deleteRow('row-14')"><span className="iconify" data-icon="lucide:trash-2" data-width="14"></span> Remove</button>
</div>
</div>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-15">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-15" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">ZT</div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Zoe Turner</div>
<div className="text-xs text-slate-500 student-email">zoe.turner@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"><span className="w-1 h-1 rounded-full bg-emerald-500"></span> Active</span>
<div className="text-xs text-slate-400 font-mono">Seat #008</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md" onclick="toggleMenu('menu-15')"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="menu-15">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2" onclick="openReassignModal('Zoe Turner', 'row-15')"><span className="iconify" data-icon="lucide:arrow-left-right" data-width="14"></span> Reassign Seat</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2" onclick="resetPassword('row-15')"><span className="iconify" data-icon="lucide:key-round" data-width="14"></span> Reset Password</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2" onclick="deleteRow('row-15')"><span className="iconify" data-icon="lucide:trash-2" data-width="14"></span> Revoke Access</button>
</div>
</div>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-16">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-16" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">SA</div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Sofia Alvarez</div>
<div className="text-xs text-slate-500 student-email">sofia.alvarez@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"><span className="w-1 h-1 rounded-full bg-slate-400"></span> Inactive</span>
<div className="text-xs text-slate-400 font-mono">Unassigned</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md" onclick="toggleMenu('menu-16')"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="menu-16">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2" onclick="openReassignModal('Sofia Alvarez', 'row-16')"><span className="iconify" data-icon="lucide:arrow-left-right" data-width="14"></span> Assign Seat</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2" onclick="resetPassword('row-16')"><span className="iconify" data-icon="lucide:key-round" data-width="14"></span> Reset Password</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2" onclick="deleteRow('row-16')"><span className="iconify" data-icon="lucide:trash-2" data-width="14"></span> Remove</button>
</div>
</div>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-17">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-17" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">RM</div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Ronan Murphy</div>
<div className="text-xs text-slate-500 student-email">ronan.murphy@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"><span className="w-1 h-1 rounded-full bg-emerald-500"></span> Active</span>
<div className="text-xs text-slate-400 font-mono">Seat #026</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md" onclick="toggleMenu('menu-17')"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="menu-17">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2" onclick="openReassignModal('Ronan Murphy', 'row-17')"><span className="iconify" data-icon="lucide:arrow-left-right" data-width="14"></span> Reassign Seat</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2" onclick="resetPassword('row-17')"><span className="iconify" data-icon="lucide:key-round" data-width="14"></span> Reset Password</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2" onclick="deleteRow('row-17')"><span className="iconify" data-icon="lucide:trash-2" data-width="14"></span> Revoke Access</button>
</div>
</div>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-18">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-18" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">AL</div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Avery Lin</div>
<div className="text-xs text-slate-500 student-email">avery.lin@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"><span className="w-1 h-1 rounded-full bg-slate-400"></span> Inactive</span>
<div className="text-xs text-slate-400 font-mono">Unassigned</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md" onclick="toggleMenu('menu-18')"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="menu-18">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2" onclick="openReassignModal('Avery Lin', 'row-18')"><span className="iconify" data-icon="lucide:arrow-left-right" data-width="14"></span> Assign Seat</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2" onclick="resetPassword('row-18')"><span className="iconify" data-icon="lucide:key-round" data-width="14"></span> Reset Password</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2" onclick="deleteRow('row-18')"><span className="iconify" data-icon="lucide:trash-2" data-width="14"></span> Remove</button>
</div>
</div>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-19">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-19" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">CH</div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Charlotte Hayes</div>
<div className="text-xs text-slate-500 student-email">charlotte.hayes@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"><span className="w-1 h-1 rounded-full bg-emerald-500"></span> Active</span>
<div className="text-xs text-slate-400 font-mono">Seat #047</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md" onclick="toggleMenu('menu-19')"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="menu-19">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2" onclick="openReassignModal('Charlotte Hayes', 'row-19')"><span className="iconify" data-icon="lucide:arrow-left-right" data-width="14"></span> Reassign Seat</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2" onclick="resetPassword('row-19')"><span className="iconify" data-icon="lucide:key-round" data-width="14"></span> Reset Password</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2" onclick="deleteRow('row-19')"><span className="iconify" data-icon="lucide:trash-2" data-width="14"></span> Revoke Access</button>
</div>
</div>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-20">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-20" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">TB</div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Theo Baker</div>
<div className="text-xs text-slate-500 student-email">theo.baker@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"><span className="w-1 h-1 rounded-full bg-slate-400"></span> Inactive</span>
<div className="text-xs text-slate-400 font-mono">Unassigned</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md" onclick="toggleMenu('menu-20')"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="menu-20">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2" onclick="openReassignModal('Theo Baker', 'row-20')"><span className="iconify" data-icon="lucide:arrow-left-right" data-width="14"></span> Assign Seat</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2" onclick="resetPassword('row-20')"><span className="iconify" data-icon="lucide:key-round" data-width="14"></span> Reset Password</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2" onclick="deleteRow('row-20')"><span className="iconify" data-icon="lucide:trash-2" data-width="14"></span> Remove</button>
</div>
</div>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-21">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-21" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">LS</div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Liam Scott</div>
<div className="text-xs text-slate-500 student-email">liam.scott@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1 h-1 rounded-full bg-emerald-500"></span> Active
                                </span>
<div className="text-xs text-slate-400 font-mono">Seat #012</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md" onclick="toggleMenu('menu-21')"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="menu-21">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2" onclick="openReassignModal('Liam Scott', 'row-21')"><span className="iconify" data-icon="lucide:arrow-left-right" data-width="14"></span> Reassign Seat</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2" onclick="resetPassword('row-21')"><span className="iconify" data-icon="lucide:key-round" data-width="14"></span> Reset Password</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2" onclick="deleteRow('row-21')"><span className="iconify" data-icon="lucide:trash-2" data-width="14"></span> Revoke Access</button>
</div>
</div>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-22">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-22" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">IN</div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Isla Nguyen</div>
<div className="text-xs text-slate-500 student-email">isla.nguyen@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"><span className="w-1 h-1 rounded-full bg-slate-400"></span> Inactive</span>
<div className="text-xs text-slate-400 font-mono">Unassigned</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md" onclick="toggleMenu('menu-22')"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="menu-22">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2" onclick="openReassignModal('Isla Nguyen', 'row-22')"><span className="iconify" data-icon="lucide:arrow-left-right" data-width="14"></span> Assign Seat</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2" onclick="resetPassword('row-22')"><span className="iconify" data-icon="lucide:key-round" data-width="14"></span> Reset Password</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2" onclick="deleteRow('row-22')"><span className="iconify" data-icon="lucide:trash-2" data-width="14"></span> Remove</button>
</div>
</div>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-23">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-23" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">CR</div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Caleb Reed</div>
<div className="text-xs text-slate-500 student-email">caleb.reed@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"><span className="w-1 h-1 rounded-full bg-emerald-500"></span> Active</span>
<div className="text-xs text-slate-400 font-mono">Seat #099</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md" onclick="toggleMenu('menu-23')"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="menu-23">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2" onclick="openReassignModal('Caleb Reed', 'row-23')"><span className="iconify" data-icon="lucide:arrow-left-right" data-width="14"></span> Reassign Seat</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2" onclick="resetPassword('row-23')"><span className="iconify" data-icon="lucide:key-round" data-width="14"></span> Reset Password</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2" onclick="deleteRow('row-23')"><span className="iconify" data-icon="lucide:trash-2" data-width="14"></span> Revoke Access</button>
</div>
</div>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-24">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-24" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">NK</div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Nora Kim</div>
<div className="text-xs text-slate-500 student-email">nora.kim@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"><span className="w-1 h-1 rounded-full bg-slate-400"></span> Inactive</span>
<div className="text-xs text-slate-400 font-mono">Unassigned</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md" onclick="toggleMenu('menu-24')"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
<div className="hidden absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="menu-24">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2" onclick="openReassignModal('Nora Kim', 'row-24')"><span className="iconify" data-icon="lucide:arrow-left-right" data-width="14"></span> Assign Seat</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2" onclick="resetPassword('row-24')"><span className="iconify" data-icon="lucide:key-round" data-width="14"></span> Reset Password</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2" onclick="deleteRow('row-24')"><span className="iconify" data-icon="lucide:trash-2" data-width="14"></span> Remove</button>
</div>
</div>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors relative" id="row-25">
<div className="flex items-center gap-4">
<label className="inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer row-checkbox" data-row-id="row-25" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors shadow-sm"></span>
</label>
<div className="w-9 h-9 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm">ER</div>
<div>
<div className="text-sm font-medium text-slate-900 student-name">Ethan Rivera</div>
<div className="text-xs text-slate-500 student-email">ethan.rivera@university.edu</div>
</div>
</div>
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"><span className="w-1 h-1 rounded-full bg-emerald-500"></span> Active</span>
<div className="text-xs text-slate-400 font-mono">Seat #021</div>
<div className="relative">
<button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-gray-100 rounded-md" onclick="toggleMenu('menu-25')"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
<div className="hidden absolute right-0-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 ring-1 ring-black/5 z-20 overflow-hidden" id="menu-25">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md flex items-center gap-2" onclick="openReassignModal('Ethan Rivera', 'row-25')"><span className="iconify" data-icon="lucide:arrow-left-right" data-width="14"></span> Reassign Seat</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-amber-600 rounded-md flex items-center gap-2" onclick="resetPassword('row-25')"><span className="iconify" data-icon="lucide:key-round" data-width="14"></span> Reset Password</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-gray-50 hover:text-red-600 rounded-md flex items-center gap-2" onclick="deleteRow('row-25')"><span className="iconify" data-icon="lucide:trash-2" data-width="14"></span> Revoke Access</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="px-4 py-3 bg-white">
<div className="flex items-center justify-between text-xs text-slate-500">
<div className="hidden sm:block" id="selection-summary">0 selected</div>
<div className="ml-auto">Showing <span id="row-count">25</span> students</div>
</div>
</div>
</div>
</div>
</main>
</div>

<div className="hidden fixed inset-0 z-30" id="add-student">
<div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onclick="closeAddStudentModal()"></div>
<div className="relative max-w-lg w-[92%] mx-auto mt-20 bg-white rounded-xl shadow-2xl ring-1 ring-black/5 slide-up-fade">
<div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-slate-700" data-icon="lucide:user-plus" data-width="16"></span>
<h3 className="text-sm font-semibold text-slate-900">Add Student</h3>
</div>
<button className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md" onclick="closeAddStudentModal()"><span className="iconify" data-icon="lucide:x" data-width="16"></span></button>
</div>
<form className="p-5 space-y-4" id="add-student-form">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="text-xs font-medium text-slate-600">Full Name</label>
<input className="mt-1 w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" name="name" placeholder="e.g., Taylor Green" required="" type="text"/>
</div>
<div>
<label className="text-xs font-medium text-slate-600">Email</label>
<input className="mt-1 w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" name="email" placeholder="name@university.edu" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="sm:col-span-2">
<label className="text-xs font-medium text-slate-600">Status</label>
<div className="mt-1 flex gap-2">
<label className="inline-flex items-center gap-2 text-xs">
<input checked="" className="custom-radio sr-only" name="status" type="radio" value="active"/>
<div className="px-3 py-1.5 border border-gray-200 rounded-md flex items-center gap-1.5 text-slate-700 hover:bg-gray-50 transition">
<span className="iconify check-icon opacity-0 scale-75 transition" data-icon="lucide:check" data-width="14"></span>
                                    Active
                                </div>
</label>
<label className="inline-flex items-center gap-2 text-xs">
<input className="custom-radio sr-only" name="status" type="radio" value="inactive"/>
<div className="px-3 py-1.5 border border-gray-200 rounded-md flex items-center gap-1.5 text-slate-700 hover:bg-gray-50 transition">
<span className="iconify check-icon opacity-0 scale-75 transition" data-icon="lucide:check" data-width="14"></span>
                                    Inactive
                                </div>
</label>
</div>
</div>
<div>
<label className="text-xs font-medium text-slate-600">Seat # (optional)</label>
<input className="mt-1 w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" min="1" name="seat" placeholder="e.g., 110" step="1" type="number"/>
</div>
</div>
<div className="flex items-center justify-end gap-2 pt-2">
<button className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-gray-200 rounded-md hover:bg-gray-50" onclick="closeAddStudentModal()" type="button">Cancel</button>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800" type="submit">Add</button>
</div>
</form>
</div>
</div>

<div className="hidden fixed inset-0 z-30" id="reassign-modal">
<div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onclick="closeReassignModal()"></div>
<div className="relative max-w-md w-[92%] mx-auto mt-24 bg-white rounded-xl shadow-2xl ring-1 ring-black/5 slide-up-fade">
<div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-slate-700" data-icon="lucide:arrow-left-right" data-width="16"></span>
<h3 className="text-sm font-semibold text-slate-900"><span id="reassign-title">Reassign Seat</span></h3>
</div>
<button className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md" onclick="closeReassignModal()"><span className="iconify" data-icon="lucide:x" data-width="16"></span></button>
</div>
<form className="p-5 space-y-4" id="reassign-form">
<input id="reassign-row-id" type="hidden"/>
<div>
<label className="text-xs font-medium text-slate-600">Seat Number</label>
<input className="mt-1 w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" id="reassign-seat" min="1" placeholder="Enter seat # (e.g., 120)" required="" step="1" type="number"/>
<p className="text-[11px] text-slate-500 mt-1">Assigning a seat marks the student Active.</p>
</div>
<div className="flex items-center justify-between">
<label className="inline-flex items-center gap-2 text-xs">
<input className="sr-only" id="reassign-clear" type="checkbox"/>
<span className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white transition-colors shadow-sm inline-block align-middle"></span>
<span>Clear seat (set Inactive)</span>
</label>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-gray-200 rounded-md hover:bg-gray-50" onclick="closeReassignModal()" type="button">Cancel</button>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800" type="submit">Save</button>
</div>
</div>
</form>
</div>
</div>

<div className="hidden fixed inset-0 z-30" id="purchase-modal">
<div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onclick="closePurchaseModal()"></div>
<div className="relative max-w-md w-[92%] mx-auto mt-24 bg-white rounded-xl shadow-2xl ring-1 ring-black/5 slide-up-fade">
<div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-slate-700" data-icon="lucide:credit-card" data-width="16"></span>
<h3 className="text-sm font-semibold text-slate-900">Purchase Seats</h3>
</div>
<button className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md" onclick="closePurchaseModal()"><span className="iconify" data-icon="lucide:x" data-width="16"></span></button>
</div>
<form className="p-5 space-y-4" id="purchase-form">
<div>
<label className="text-xs font-medium text-slate-600">Additional Seats</label>
<input className="mt-1 w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" id="purchase-qty" min="1" step="1" type="number" value="5"/>
<p className="text-[11px] text-slate-500 mt-1">Seats will be added to your license immediately.</p>
</div>
<div className="flex items-center justify-end gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-gray-200 rounded-md hover:bg-gray-50" onclick="closePurchaseModal()" type="button">Cancel</button>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800" type="submit">Confirm Purchase</button>
</div>
</form>
</div>
</div>

<div className="pointer-events-none fixed bottom-4 left-1/2 -translate-x-1/2 z-40 hidden" id="toast">
<div className="px-3 py-2 bg-slate-900 text-white rounded-md shadow-lg text-xs font-medium flex items-center gap-2 ring-1 ring-black/5">
<span className="iconify" data-icon="lucide:check-circle" data-width="14"></span>
<span id="toast-text">Action completed</span>
</div>
</div>


    </>
  );
}
