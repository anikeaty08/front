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
      
      // Initialize icons helper
      function paintIcons(root = document) {
        lucide.createIcons({
          attrs: { 'stroke-width': 1.5 },
          icons: undefined,
          nameAttr: 'data-lucide',
          attrs: {},
          class: undefined,
          // Re-scan root
          node: root,
        });
      }

      // Animation in
      function reveal() {
        document.querySelectorAll('[data-animate]').forEach((el, i) => {
          requestAnimationFrame(() => {
            el.classList.remove('opacity-0', 'translate-y-2');
            el.classList.add('opacity-100', 'translate-y-0');
          });
        });
      }

      // State
      const state = {
        activeTab: 'prescriptions',
        editingId: null,
        editingType: null,
        items: {
          prescriptions: [
            {
              id: crypto.randomUUID(),
              doctorName: 'Dr. Meera Kapoor',
              description:
                'Take one tablet after meals, twice a day. Stay hydrated and avoid strenuous activity for 48 hours. Follow-up after 1 week or earlier if symptoms worsen.',
              date: '2025-08-02',
              image:
                'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop',
            },
            {
              id: crypto.randomUUID(),
              doctorName: 'Dr. Rohan Iyer',
              description:
                'Topical ointment to be applied sparingly, not more than 3 times daily. Keep out of direct sunlight. Do not mix with other creams.',
              date: '2025-07-21',
              image: '',
            },
          ],
          labs: [
            {
              id: crypto.randomUUID(),
              reportName: 'Complete Blood Count (CBC)',
              description:
                'All parameters within normal range. Mild variations noted in lymphocyte count; no immediate intervention recommended. Review in 6 months.',
              date: '2025-06-14',
              file:
                'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop',
              isImage: true,
            },
            {
              id: crypto.randomUUID(),
              reportName: 'Lipid Profile',
              description:
                'Slightly elevated LDL cholesterol. Recommend dietary changes and increased physical activity. Reassess in 3 months.',
              date: '2025-05-02',
              file: '',
              isImage: false,
            },
          ],
        },
      };

      // DOM refs
      const tabPrescriptions = document.getElementById('tabPrescriptions');
      const tabLabs = document.getElementById('tabLabs');
      const panelPrescriptions = document.getElementById('panelPrescriptions');
      const panelLabs = document.getElementById('panelLabs');

      const prescriptionList = document.getElementById('prescriptionList');
      const labList = document.getElementById('labList');
      const prescriptionTpl = document.getElementById('prescriptionCardTemplate');
      const labTpl = document.getElementById('labCardTemplate');

      const addPrescriptionBtn = document.getElementById('addPrescriptionBtn');
      const addLabBtn = document.getElementById('addLabBtn');

      // Modal refs
      const modalOverlay = document.getElementById('modalOverlay');
      const modalBackdrop = document.getElementById('modalBackdrop');
      const modalSheet = document.getElementById('modalSheet');
      const modalClose = document.getElementById('modalClose');
      const modalCancel = document.getElementById('modalCancel');
      const modalSave = document.getElementById('modalSave');
      const modalTitle = document.getElementById('modalTitle');
      const modalDescription = document.getElementById('modalDescription');
      const modalForm = document.getElementById('modalForm');

      // Self details refs
      const dobInput = document.getElementById('dobInput');
      const ageY = document.getElementById('ageY');
      const ageM = document.getElementById('ageM');
      const ageD = document.getElementById('ageD');
      const heightInput = document.getElementById('heightInput');
      const weightInput = document.getElementById('weightInput');
      const bmiOutput = document.getElementById('bmiOutput');
      const bmiNote = document.getElementById('bmiNote');

      // Helpers
      function fmtDate(dateStr) {
        try {
          const d = new Date(dateStr);
          return d.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          });
        } catch {
          return dateStr;
        }
      }

      function calcAgeParts(dob) {
        if (!(dob instanceof Date) || isNaN(dob)) return { y: '–', m: '–', d: '–' };
        const now = new Date();
        let y = now.getFullYear() - dob.getFullYear();
        let m = now.getMonth() - dob.getMonth();
        let d = now.getDate() - dob.getDate();
        if (d < 0) {
          m -= 1;
          const prevMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
          d += prevMonthDays;
        }
        if (m < 0) {
          y -= 1;
          m += 12;
        }
        return { y, m, d };
      }

      function updateAge() {
        const val = dobInput.value;
        if (!val) {
          ageY.textContent = '–'; ageM.textContent = '–'; ageD.textContent = '–';
          return;
        }
        const parts = calcAgeParts(new Date(val + 'T00:00:00'));
        ageY.textContent = parts.y;
        ageM.textContent = parts.m;
        ageD.textContent = parts.d;
      }

      function updateBMI() {
        const h = parseFloat(heightInput.value);
        const w = parseFloat(weightInput.value);
        if (!h || !w || h <= 0 || w <= 0) {
          bmiOutput.value = '';
          bmiNote.textContent = 'Auto-calculated';
          return;
        }
        const bmi = w / Math.pow(h / 100, 2);
        const rounded = Math.round(bmi * 10) / 10;
        bmiOutput.value = String(rounded);
        let note = 'Auto-calculated';
        if (rounded < 18.5) note = 'Underweight';
        else if (rounded < 25) note = 'Healthy';
        else if (rounded < 30) note = 'Overweight';
        else note = 'Obese';
        bmiNote.textContent = note;
      }

      // Rendering
      function renderPrescriptions() {
        prescriptionList.innerHTML = '';
        if (!state.items.prescriptions.length) {
          prescriptionList.innerHTML = `
            <div class="bg-white rounded-xl ring-1 ring-slate-200 p-4 text-center text-sm text-slate-500">No prescriptions yet.</div>
          `;
        }
        state.items.prescriptions.forEach((item) => {
          const card = prescriptionTpl.content.firstElementChild.cloneNode(true);
          card.dataset.id = item.id;
          card.querySelector('[data-field="doctorName"]').textContent = item.doctorName;
          card.querySelector('[data-field="date"]').textContent = fmtDate(item.date);
          const descEl = card.querySelector('[data-field="desc"]');
          descEl.textContent = item.description;
          const toggleBtn = card.querySelector('[data-action="toggleDesc"]');
          let expanded = false;
          toggleBtn.addEventListener('click', () => {
            expanded = !expanded;
            if (expanded) {
              descEl.style.webkitLineClamp = 'unset';
              descEl.style.overflow = 'visible';
              toggleBtn.textContent = 'Show less';
            } else {
              descEl.style.webkitLineClamp = '3';
              descEl.style.overflow = 'hidden';
              toggleBtn.textContent = 'Read more';
            }
          });

          if (item.image) {
            const wrap = card.querySelector('[data-field="thumbWrap"]');
            const img = card.querySelector('[data-field="thumb"]');
            img.src = item.image;
            img.alt = 'Prescription image';
            wrap.classList.remove('hidden');
          }

          card.querySelector('[data-action="update"]').addEventListener('click', () => openModal('prescription', item));
          card.querySelector('[data-action="delete"]').addEventListener('click', () => deleteItem('prescriptions', item.id));
          card.querySelector('[data-action="share"]').addEventListener('click', () => shareItem('Prescription', item.doctorName, item.date));

          prescriptionList.appendChild(card);
          paintIcons(card);
        });
      }

      function renderLabs() {
        labList.innerHTML = '';
        if (!state.items.labs.length) {
          labList.innerHTML = `
            <div class="bg-white rounded-xl ring-1 ring-slate-200 p-4 text-center text-sm text-slate-500">No lab reports yet.</div>
          `;
        }
        state.items.labs.forEach((item) => {
          const card = labTpl.content.firstElementChild.cloneNode(true);
          card.dataset.id = item.id;
          card.querySelector('[data-field="reportName"]').textContent = item.reportName;
          card.querySelector('[data-field="date"]').textContent = fmtDate(item.date);
          const descEl = card.querySelector('[data-field="desc"]');
          descEl.textContent = item.description;
          const toggleBtn = card.querySelector('[data-action="toggleDesc"]');
          let expanded = false;
          toggleBtn.addEventListener('click', () => {
            expanded = !expanded;
            if (expanded) {
              descEl.style.webkitLineClamp = 'unset';
              descEl.style.overflow = 'visible';
              toggleBtn.textContent = 'Show less';
            } else {
              descEl.style.webkitLineClamp = '3';
              descEl.style.overflow = 'hidden';
              toggleBtn.textContent = 'Read more';
            }
          });

          const thumbWrap = card.querySelector('[data-field="thumbWrap"]');
          const img = card.querySelector('[data-field="thumb"]');
          if (item.file && item.isImage) {
            img.src = item.file;
            img.classList.remove('hidden');
            const fileIcon = thumbWrap.querySelector('[data-lucide="file-text"]')?.parentElement;
            if (fileIcon) thumbWrap.removeChild(fileIcon);
          }

          card.querySelector('[data-action="update"]').addEventListener('click', () => openModal('lab', item));
          card.querySelector('[data-action="delete"]').addEventListener('click', () => deleteItem('labs', item.id));
          card.querySelector('[data-action="share"]').addEventListener('click', () => shareItem('Lab Report', item.reportName, item.date));

          labList.appendChild(card);
          paintIcons(card);
        });
      }

      function deleteItem(type, id) {
        const listKey = type === 'labs' ? 'labs' : 'prescriptions';
        state.items[listKey] = state.items[listKey].filter((x) => x.id !== id);
        if (listKey === 'prescriptions') renderPrescriptions();
        else renderLabs();
      }

      async function shareItem(kind, title, date) {
        const text = `${kind}: ${title} • ${fmtDate(date)}`;
        if (navigator.share) {
          try {
            await navigator.share({ title: kind, text });
          } catch (e) {}
        } else {
          await navigator.clipboard.writeText(text);
          alert('Link copied to clipboard.');
        }
      }

      // Tabs
      function setActiveTab(tab) {
        state.activeTab = tab;
        const isPres = tab === 'prescriptions';
        tabPrescriptions.setAttribute('aria-selected', String(isPres));
        tabLabs.setAttribute('aria-selected', String(!isPres));
        tabPrescriptions.className = isPres
          ? 'flex-1 h-10 rounded-xl text-sm font-medium tracking-tight px-3 transition outline-none focus-visible:ring-2 focus-visible:ring-slate-400 bg-slate-900 text-white'
          : 'flex-1 h-10 rounded-xl text-sm font-medium tracking-tight px-3 transition outline-none focus-visible:ring-2 focus-visible:ring-slate-400 text-slate-700 hover:bg-slate-50';
        tabLabs.className = !isPres
          ? 'flex-1 h-10 rounded-xl text-sm font-medium tracking-tight px-3 transition outline-none focus-visible:ring-2 focus-visible:ring-slate-400 bg-slate-900 text-white'
          : 'flex-1 h-10 rounded-xl text-sm font-medium tracking-tight px-3 transition outline-none focus-visible:ring-2 focus-visible:ring-slate-400 text-slate-700 hover:bg-slate-50';

        panelPrescriptions.classList.toggle('hidden', !isPres);
        panelLabs.classList.toggle('hidden', isPres);
      }

      // Modal
      function openModal(kind, data = null) {
        state.editingType = kind; // 'prescription' or 'lab'
        state.editingId = data?.id ?? null;

        // Build form
        modalForm.innerHTML = '';
        if (kind === 'prescription') {
          modalTitle.textContent = state.editingId ? 'Update Prescription' : 'Add Prescription';
          modalDescription.textContent = 'Doctor details, description, date, and optional image.';
          modalForm.appendChild(fieldText('doctorName', 'Doctor Name', data?.doctorName || '', 'text', { required: true }));
          modalForm.appendChild(fieldTextarea('description', 'Description', data?.description || '', { required: true }));
          modalForm.appendChild(fieldDate('date', 'Date', data?.date || '', { required: true }));
          modalForm.appendChild(fieldFile('image', 'Upload Image (jpg/png)', !!data?.image, data?.image || ''));
        } else {
          modalTitle.textContent = state.editingId ? 'Update Lab Report' : 'Add Lab Report';
          modalDescription.textContent = 'Report name, description, date, and file upload.';
          modalForm.appendChild(fieldText('reportName', 'Report Name', data?.reportName || '', 'text', { required: true }));
          modalForm.appendChild(fieldTextarea('description', 'Description', data?.description || '', { required: true }));
          modalForm.appendChild(fieldDate('date', 'Date', data?.date || '', { required: true }));
          modalForm.appendChild(fieldFile('file', 'Upload File (pdf/jpg)', !!data?.file, data?.file || ''));
        }

        // Show modal
        modalOverlay.classList.remove('hidden');
        requestAnimationFrame(() => {
          modalBackdrop.classList.remove('opacity-0');
          modalBackdrop.classList.add('opacity-100');
          modalSheet.classList.remove('translate-y-full');
          modalSheet.classList.add('translate-y-0');
        });
        paintIcons(modalOverlay);
      }

      function closeModal() {
        modalBackdrop.classList.remove('opacity-100');
        modalBackdrop.classList.add('opacity-0');
        modalSheet.classList.remove('translate-y-0');
        modalSheet.classList.add('translate-y-full');
        setTimeout(() => modalOverlay.classList.add('hidden'), 300);
        state.editingId = null;
        state.editingType = null;
      }

      // Field builders
      function wrap(label, inputEl, hint = '') {
        const wrap = document.createElement('div');
        wrap.className = 'space-y-2';
        const lab = document.createElement('label');
        lab.className = 'text-[13px] text-slate-600';
        lab.textContent = label;
        wrap.appendChild(lab);
        wrap.appendChild(inputEl);
        if (hint) {
          const p = document.createElement('p');
          p.className = 'text-xs text-slate-500';
          p.textContent = hint;
          wrap.appendChild(p);
        }
        return wrap;
      }

      function fieldText(name, label, value, type = 'text', opts = {}) {
        const input = document.createElement('input');
        input.type = type;
        input.name = name;
        input.value = value;
        input.placeholder = label;
        input.required = !!opts.required;
        input.className = 'w-full h-11 rounded-xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-900 bg-white px-3 text-sm text-slate-900 placeholder-slate-400 transition';
        return wrap(label, input);
      }

      function fieldTextarea(name, label, value, opts = {}) {
        const ta = document.createElement('textarea');
        ta.name = name;
        ta.value = value;
        ta.placeholder = 'Type here...';
        ta.required = !!opts.required;
        ta.rows = 4;
        ta.className = 'w-full rounded-xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-900 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 transition';
        return wrap(label, ta);
      }

      function fieldDate(name, label, value, opts = {}) {
        const input = document.createElement('input');
        input.type = 'date';
        input.name = name;
        input.value = value;
        input.required = !!opts.required;
        input.className = 'w-full h-11 rounded-xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-900 bg-white px-3 text-sm text-slate-900 placeholder-slate-400 transition';
        return wrap(label, input);
      }

      function fieldFile(name, label, hasExisting, existingUrl) {
        const div = document.createElement('div');
        const input = document.createElement('input');
        input.type = 'file';
        input.name = name;
        input.accept = name === 'file' ? '.pdf,image/*' : 'image/*';
        input.className = 'block w-full text-sm text-slate-700 file:mr-3 file:py-2 file:px-3 file:rounded-xl file:border-0 file:bg-slate-900 file:text-white file:text-sm hover:file:opacity-95 file:cursor-pointer cursor-pointer';
        const preview = document.createElement('div');
        preview.className = 'mt-2 flex items-center gap-2';
        if (hasExisting && existingUrl) {
          const thumb = document.createElement('img');
          thumb.src = existingUrl;
          thumb.alt = 'Preview';
          thumb.className = 'h-12 w-12 rounded-lg ring-1 ring-slate-200 object-cover';
          preview.appendChild(thumb);
        }
        input.addEventListener('change', (e) => {
          const f = e.target.files?.[0];
          if (!f) return;
          preview.innerHTML = '';
          if (f.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(f);
            img.className = 'h-12 w-12 rounded-lg ring-1 ring-slate-200 object-cover';
            preview.appendChild(img);
          } else {
            const pill = document.createElement('div');
            pill.className = 'h-8 px-3 rounded-full bg-slate-100 text-slate-700 text-xs flex items-center gap-2 ring-1 ring-slate-200';
            const icon = document.createElement('i');
            icon.setAttribute('data-lucide', 'file-text');
            icon.className = 'h-4 w-4';
            const span = document.createElement('span');
            span.textContent = f.name;
            pill.appendChild(icon);
            pill.appendChild(span);
            preview.appendChild(pill);
            paintIcons(pill);
          }
        });
        const container = wrap(label, input);
        container.appendChild(preview);
        return container;
      }

      // Modal save
      modalSave.addEventListener('click', (e) => {
        e.preventDefault();
        const form = new FormData(modalForm);
        const kind = state.editingType;
        if (!kind) return;

        if (kind === 'prescription') {
          const payload = {
            doctorName: String(form.get('doctorName') || '').trim(),
            description: String(form.get('description') || '').trim(),
            date: String(form.get('date') || ''),
            image: '',
          };
          const file = form.get('image');
          if (file && file instanceof File && file.size > 0 && file.type.startsWith('image/')) {
            payload.image = URL.createObjectURL(file);
          }
          if (!payload.doctorName || !payload.description || !payload.date) {
            alert('Please fill all required fields.');
            return;
          }
          if (state.editingId) {
            const idx = state.items.prescriptions.findIndex((x) => x.id === state.editingId);
            if (idx >= 0) state.items.prescriptions[idx] = { ...state.items.prescriptions[idx], ...payload };
          } else {
            state.items.prescriptions.unshift({ id: crypto.randomUUID(), ...payload });
          }
          renderPrescriptions();
        } else {
          const payload = {
            reportName: String(form.get('reportName') || '').trim(),
            description: String(form.get('description') || '').trim(),
            date: String(form.get('date') || ''),
            file: '',
            isImage: false,
          };
          const file = form.get('file');
          if (file && file instanceof File && file.size > 0) {
            payload.file = URL.createObjectURL(file);
            payload.isImage = file.type.startsWith('image/');
          }
          if (!payload.reportName || !payload.description || !payload.date) {
            alert('Please fill all required fields.');
            return;
          }
          if (state.editingId) {
            const idx = state.items.labs.findIndex((x) => x.id === state.editingId);
            if (idx >= 0) state.items.labs[idx] = { ...state.items.labs[idx], ...payload };
          } else {
            state.items.labs.unshift({ id: crypto.randomUUID(), ...payload });
          }
          renderLabs();
        }

        closeModal();
      });

      modalClose.addEventListener('click', closeModal);
      modalCancel.addEventListener('click', (e) => { e.preventDefault(); closeModal(); });
      modalBackdrop.addEventListener('click', closeModal);

      // Tab events
      tabPrescriptions.addEventListener('click', () => setActiveTab('prescriptions'));
      tabLabs.addEventListener('click', () => setActiveTab('labs'));

      // Add buttons
      addPrescriptionBtn.addEventListener('click', () => openModal('prescription'));
      addLabBtn.addEventListener('click', () => openModal('lab'));

      // Self details events
      dobInput.addEventListener('change', updateAge);
      heightInput.addEventListener('input', updateBMI);
      weightInput.addEventListener('input', updateBMI);

      // Init
      document.addEventListener('DOMContentLoaded', () => {
        paintIcons(document);
        reveal();
        renderPrescriptions();
        renderLabs();
        updateAge();
        updateBMI();
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
      
<div className="min-h-dvh flex items-start justify-center">
<main className="w-full max-w-md mx-auto px-4 pt-6 pb-28 sm:pt-10">

<header className="flex items-center justify-between bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 px-4 py-3 mb-5 opacity-0 translate-y-2 transition duration-700 ease-out" data-animate="">
<div className="flex items-center gap-2">
<div aria-label="App logo" className="h-8 w-8 rounded-xl bg-slate-900 text-white flex items-center justify-center text-sm tracking-tight">
              AB
            </div>
<div className="flex flex-col">
<span className="text-xs text-slate-500">Appointment</span>
<span className="text-sm font-medium tracking-tight">Medical Records</span>
</div>
</div>
<button className="h-9 w-9 flex items-center justify-center rounded-xl ring-1 ring-slate-200 hover:ring-slate-300 hover:bg-slate-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400" id="profileBtn" title="Profile">
<i className="h-5 w-5 text-slate-700" data-lucide="user"></i>
</button>
</header>

<section className="mb-4 opacity-0 translate-y-2 transition duration-700 ease-out delay-100" data-animate="">
<h1 className="text-[22px] leading-tight tracking-tight font-semibold text-slate-900">
            Good Evening, <span id="patientName">Aarav</span>
</h1>
<p className="text-sm text-slate-500 mt-1">
            Keep your details up to date for better care.
          </p>
</section>

<section aria-labelledby="self-details-title" className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-5 mb-6 opacity-0 translate-y-2 transition duration-700 ease-out delay-150" data-animate="">
<div className="flex items-center justify-between mb-3">
<h2 className="text-[20px] tracking-tight font-semibold text-slate-900" id="self-details-title">
              Self Details
            </h2>
<span className="text-xs text-slate-500">Private</span>
</div>
<div className="space-y-4">

<div className="space-y-2">
<label className="text-[13px] text-slate-600">Date of Birth</label>
<div className="flex items-center gap-3">
<input aria-describedby="ageParts" className="w-full h-11 rounded-xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-900 bg-white px-3 text-sm text-slate-900 placeholder-slate-400 transition" id="dobInput" placeholder="YYYY-MM-DD" type="date"/>
</div>
<div className="text-xs text-slate-500" id="ageParts">
                Age: <span id="ageY">–</span>y <span id="ageM">–</span>m <span id="ageD">–</span>d
              </div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="space-y-2">
<label className="text-[13px] text-slate-600">Height (cm)</label>
<div className="relative">
<input className="w-full h-11 rounded-xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-900 bg-white px-3 text-sm text-slate-900 placeholder-slate-400 transition" id="heightInput" inputmode="decimal" min="0" placeholder="e.g. 172" type="number"/>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">
                    cm
                  </div>
</div>
</div>
<div className="space-y-2">
<label className="text-[13px] text-slate-600">Weight (kg)</label>
<div className="relative">
<input className="w-full h-11 rounded-xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-900 bg-white px-3 text-sm text-slate-900 placeholder-slate-400 transition" id="weightInput" inputmode="decimal" min="0" placeholder="e.g. 68.5" type="number"/>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">
                    kg
                  </div>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-[13px] text-slate-600">BMI</label>
<div className="flex items-center gap-3">
<input className="w-36 h-11 rounded-xl border-0 ring-1 ring-slate-200 bg-slate-50 px-3 text-sm text-slate-900 placeholder-slate-400" id="bmiOutput" placeholder="—" readonly="" type="text"/>
<span className="text-xs text-slate-500" id="bmiNote">Auto-calculated</span>
</div>
</div>
</div>
</section>

<section className="mb-3 opacity-0 translate-y-2 transition duration-700 ease-out delay-200" data-animate="">
<div className="flex items-center justify-between">
<h2 className="text-[22px] tracking-tight font-semibold text-slate-900">
              Medical Records
            </h2>
<button className="h-9 px-3 rounded-xl ring-1 ring-slate-200 hover:ring-slate-300 hover:bg-white transition text-slate-700 text-xs font-medium" id="moreOptionsBtn" title="More options">
              Manage
            </button>
</div>
<p className="text-sm text-slate-500 mt-1">Prescriptions and lab reports</p>
</section>

<div aria-label="Medical Records Tabs" className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-2 mb-4 flex items-center justify-between gap-1 opacity-0 translate-y-2 transition duration-700 ease-out delay-200" data-animate="" role="tablist">
<button aria-selected="true" className="flex-1 h-10 rounded-xl text-sm font-medium tracking-tight px-3 transition outline-none focus-visible:ring-2 focus-visible:ring-slate-400 bg-slate-900 text-white" id="tabPrescriptions" role="tab">
            Prescriptions
          </button>
<button aria-selected="false" className="flex-1 h-10 rounded-xl text-sm font-medium tracking-tight px-3 transition outline-none focus-visible:ring-2 focus-visible:ring-slate-400 text-slate-700 hover:bg-slate-50" id="tabLabs" role="tab">
            Lab Reports
          </button>
</div>

<section aria-labelledby="tabPrescriptions" className="space-y-3 opacity-0 translate-y-2 transition duration-700 ease-out delay-300" data-animate="" id="panelPrescriptions" role="tabpanel">
<div className="flex items-center justify-between">
<span className="text-[13px] text-slate-500">Your prescriptions</span>
<button className="inline-flex items-center gap-2 h-10 px-3 rounded-xl bg-slate-900 text-white text-sm font-medium tracking-tight hover:opacity-95 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400" id="addPrescriptionBtn" title="Add Prescription">
<i className="h-4 w-4" data-lucide="plus"></i>
              Add Prescription
            </button>
</div>
<div className="space-y-3" id="prescriptionList">

</div>
</section>

<section aria-labelledby="tabLabs" className="space-y-3 hidden opacity-0 translate-y-2 transition duration-700 ease-out delay-300" data-animate="" id="panelLabs" role="tabpanel">
<div className="flex items-center justify-between">
<span className="text-[13px] text-slate-500">Your lab reports</span>
<button className="inline-flex items-center gap-2 h-10 px-3 rounded-xl bg-slate-900 text-white text-sm font-medium tracking-tight hover:opacity-95 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400" id="addLabBtn" title="Add Lab Report">
<i className="h-4 w-4" data-lucide="plus"></i>
              Add Lab Report
            </button>
</div>
<div className="space-y-3" id="labList">

</div>
</section>

<div className="h-8"></div>
</main>
</div>

<div aria-hidden="true" className="fixed inset-0 z-50 hidden" id="modalOverlay">
<div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[2px] opacity-0 transition-opacity duration-300" id="modalBackdrop"></div>
<div className="absolute left-0 right-0 bottom-0 translate-y-full transition-transform duration-300" id="modalSheet">
<div className="mx-auto w-full max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+12px)]">
<div className="bg-white rounded-2xl shadow-lg ring-1 ring-slate-200 p-4">
<div className="flex items-center justify-between mb-2">
<h3 className="text-[20px] tracking-tight font-semibold text-slate-900" id="modalTitle">
                Add Item
              </h3>
<button aria-label="Close" className="h-9 w-9 rounded-xl flex items-center justify-center ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 transition" id="modalClose">
<i className="h-5 w-5 text-slate-700" data-lucide="x"></i>
</button>
</div>
<p className="text-sm text-slate-500 mb-3" id="modalDescription">Fill the details below.</p>
<form className="space-y-3" id="modalForm" novalidate="">

</form>
<div className="pt-3 mt-2 border-t border-slate-200 flex items-center gap-2">
<button className="flex-1 h-11 rounded-xl bg-slate-900 text-white text-sm font-medium tracking-tight hover:opacity-95 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400" id="modalSave">
                Save
              </button>
<button className="h-11 px-4 rounded-xl ring-1 ring-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50" id="modalCancel">
                Cancel
              </button>
</div>
</div>
</div>
</div>
</div>

<template id="prescriptionCardTemplate">
<article className="bg-white rounded-xl shadow-sm ring-1 ring-slate-200 p-4">
<div className="flex items-start justify-between">
<div>
<h4 className="text-[16px] tracking-tight font-semibold text-slate-900">
<span data-field="doctorName">Doctor Name</span>
</h4>
<p className="text-xs text-slate-500 mt-0.5">
<i className="inline-block h-3.5 w-3.5 mr-1 -mt-0.5" data-lucide="calendar"></i>
<span data-field="date">—</span>
</p>
</div>
<div className="ml-3 shrink-0 hidden" data-field="thumbWrap">
<img alt="Prescription" className="h-12 w-12 rounded-lg object-cover ring-1 ring-slate-200" data-field="thumb" src=""/>
</div>
</div>
<div className="mt-3">
<p className="text-sm text-slate-700" data-field="desc" style={{display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden'}}></p>
<button className="mt-1 text-xs text-slate-600 hover:text-slate-900 underline underline-offset-2" data-action="toggleDesc">
            Read more
          </button>
</div>
<div className="mt-3 pt-3 border-t border-slate-200 flex items-center gap-2">
<button className="h-9 px-3 rounded-xl ring-1 ring-slate-200 hover:bg-slate-50 text-slate-700 text-sm flex items-center gap-2" data-action="update">
<i className="h-4 w-4" data-lucide="pencil"></i>
            Update
          </button>
<button className="h-9 px-3 rounded-xl ring-1 ring-slate-200 hover:bg-slate-50 text-slate-700 text-sm flex items-center gap-2" data-action="share">
<i className="h-4 w-4" data-lucide="share-2"></i>
            Share
          </button>
<button className="ml-auto h-9 px-3 rounded-xl ring-1 ring-red-200 text-red-600 hover:bg-red-50 text-sm flex items-center gap-2" data-action="delete">
<i className="h-4 w-4" data-lucide="trash-2"></i>
            Delete
          </button>
</div>
</article>
</template>
<template id="labCardTemplate">
<article className="bg-white rounded-xl shadow-sm ring-1 ring-slate-200 p-4">
<div className="flex items-start justify-between">
<div>
<h4 className="text-[16px] tracking-tight font-semibold text-slate-900">
<span data-field="reportName">Report Name</span>
</h4>
<p className="text-xs text-slate-500 mt-0.5">
<i className="inline-block h-3.5 w-3.5 mr-1 -mt-0.5" data-lucide="calendar"></i>
<span data-field="date">—</span>
</p>
</div>
<div className="ml-3 shrink-0">
<div className="h-12 w-12 rounded-lg ring-1 ring-slate-200 overflow-hidden bg-slate-100 flex items-center justify-center" data-field="thumbWrap">
<img alt="Report" className="h-full w-full object-cover hidden" data-field="thumb"/>
<i className="h-5 w-5 text-slate-500" data-lucide="file-text"></i>
</div>
</div>
</div>
<div className="mt-3">
<p className="text-sm text-slate-700" data-field="desc" style={{display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden'}}></p>
<button className="mt-1 text-xs text-slate-600 hover:text-slate-900 underline underline-offset-2" data-action="toggleDesc">
            Read more
          </button>
</div>
<div className="mt-3 pt-3 border-t border-slate-200 flex items-center gap-2">
<button className="h-9 px-3 rounded-xl ring-1 ring-slate-200 hover:bg-slate-50 text-slate-700 text-sm flex items-center gap-2" data-action="update">
<i className="h-4 w-4" data-lucide="pencil"></i>
            Update
          </button>
<button className="h-9 px-3 rounded-xl ring-1 ring-slate-200 hover:bg-slate-50 text-slate-700 text-sm flex items-center gap-2" data-action="share">
<i className="h-4 w-4" data-lucide="share-2"></i>
            Share
          </button>
<button className="ml-auto h-9 px-3 rounded-xl ring-1 ring-red-200 text-red-600 hover:bg-red-50 text-sm flex items-center gap-2" data-action="delete">
<i className="h-4 w-4" data-lucide="trash-2"></i>
            Delete
          </button>
</div>
</article>
</template>



    </>
  );
}
