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



      // Global UI helpers
      function refreshIcons() {
        setTimeout(() => {
          if (window.lucide) {
            window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          }
        }, 0);
      }
      function toast(message, type = 'default') {
        const id = 't' + Math.random().toString(36).slice(2);
        const colors = {
          default: 'bg-zinc-900 ring-white/10 text-zinc-100',
          success: 'bg-emerald-900/40 ring-emerald-500/30 text-emerald-200',
          warn: 'bg-amber-900/40 ring-amber-500/30 text-amber-200',
          error: 'bg-rose-900/40 ring-rose-500/30 text-rose-200',
        };
        const icon = {
          default: 'info',
          success: 'check-circle-2',
          warn: 'alert-triangle',
          error: 'x-circle',
        }[type];
        const el = document.createElement('div');
        el.id = id;
        el.className = `flex items-center gap-2 px-3 py-2 rounded-md ring-1 ${colors[type]} shadow-lg`;
        el.innerHTML = `<i data-lucide="${icon}"></i><div class="text-sm">${message}</div>`;
        document.getElementById('toasts').appendChild(el);
        refreshIcons();
        setTimeout(() => el.remove(), 3500);
      }

      // Data
      const SPECIALTIES = [
        'Cardiology',
        'Dermatology',
        'Endocrinology',
        'Gastroenterology',
        'Neurology',
        'Orthopedics',
        'Ophthalmology',
        'Pulmonology',
        'Rheumatology',
        'Urology',
      ];
      const NETWORK_GROUPS = [
        'Preferred Network',
        'Employed Network',
        'Medicare Providers',
        'Affiliated Independent',
      ];
      const INSURANCES = ['Aetna', 'BCBS', 'Cigna', 'United', 'Medicare', 'Medicaid'];
      const VISIT_TYPES = ['New Patient', 'Follow-up', 'Annual', 'Virtual', 'Urgent'];
      const RUNTIME_FILTERS = [
        { key: 'accepting', label: 'Accepting new patients' },
        { key: 'spanish', label: 'Spanish' },
        { key: 'sameday', label: 'Same-day' },
        { key: 'telehealth', label: 'Telehealth' },
        { key: 'wheelchair', label: 'Wheelchair accessible' },
        { key: 'weekend', label: 'Weekends' },
        { key: 'open247', label: '24/7' },
      ];

      // Mock Providers
      function slotGen() {
        const days = 5;
        const arr = [];
        const now = new Date();
        for (let d = 0; d < days; d++) {
          const date = new Date(now);
          date.setDate(now.getDate() + d);
          const times = [];
          const base = [9, 11, 14, 16];
          base.forEach((h) => {
            if (Math.random() > 0.3) times.push(`${String(h).padStart(2, '0')}:00`);
          });
          arr.push({ date, times });
        }
        return arr;
      }
      const providers = [
        {
          id: 'p1',
          name: 'Dr. Amelia Carter',
          specialty: 'Cardiology',
          group: 'Preferred Network',
          phone: '(214) 555-0101',
          city: 'Dallas, TX',
          zip: '75201',
          distance: 4,
          insurances: ['Aetna', 'BCBS', 'Medicare'],
          visitTypes: ['New Patient', 'Follow-up', 'Virtual'],
          scheduleFlags: { weekend: false, open247: false },
          flags: { accepting: true, spanish: true, sameday: true, telehealth: true, wheelchair: true },
          photo: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1440&auto=format&fit=crop',
          availability: slotGen(),
        },
        {
          id: 'p2',
          name: 'Dr. Leo Nguyen',
          specialty: 'Dermatology',
          group: 'Employed Network',
          phone: '(214) 555-0112',
          city: 'Plano, TX',
          zip: '75093',
          distance: 18,
          insurances: ['BCBS', 'Cigna', 'United'],
          visitTypes: ['New Patient', 'Annual', 'Virtual'],
          scheduleFlags: { weekend: true, open247: false },
          flags: { accepting: true, spanish: false, sameday: false, telehealth: true, wheelchair: true },
          photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1440&auto=format&fit=crop',
          availability: slotGen(),
        },
        {
          id: 'p3',
          name: 'Dr. Priya Shah',
          specialty: 'Endocrinology',
          group: 'Preferred Network',
          phone: '(469) 555-0160',
          city: 'Frisco, TX',
          zip: '75034',
          distance: 22,
          insurances: ['Aetna', 'United', 'Medicare'],
          visitTypes: ['New Patient', 'Follow-up'],
          scheduleFlags: { weekend: false, open247: false },
          flags: { accepting: false, spanish: true, sameday: false, telehealth: false, wheelchair: true },
          photo: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1440&auto=format&fit=crop',
          availability: slotGen(),
        },
        {
          id: 'p4',
          name: 'Dr. Noah Bennett',
          specialty: 'Gastroenterology',
          group: 'Affiliated Independent',
          phone: '(972) 555-0199',
          city: 'Irving, TX',
          zip: '75039',
          distance: 12,
          insurances: ['Medicare', 'Medicaid', 'Aetna'],
          visitTypes: ['Follow-up', 'Urgent'],
          scheduleFlags: { weekend: true, open247: true },
          flags: { accepting: true, spanish: false, sameday: true, telehealth: false, wheelchair: true },
          photo: 'https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1440&auto=format&fit=crop',
          availability: slotGen(),
        },
        {
          id: 'p5',
          name: 'Dr. Sofia Martinez',
          specialty: 'Neurology',
          group: 'Medicare Providers',
          phone: '(469) 555-0144',
          city: 'Dallas, TX',
          zip: '75202',
          distance: 3,
          insurances: ['Medicare', 'BCBS', 'United'],
          visitTypes: ['New Patient', 'Virtual'],
          scheduleFlags: { weekend: false, open247: false },
          flags: { accepting: true, spanish: true, sameday: false, telehealth: true, wheelchair: true },
          photo: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1440&auto=format&fit=crop',
          availability: slotGen(),
        },
        {
          id: 'p6',
          name: 'Dr. Ethan Wright',
          specialty: 'Orthopedics',
          group: 'Preferred Network',
          phone: '(214) 555-0181',
          city: 'Dallas, TX',
          zip: '75219',
          distance: 9,
          insurances: ['BCBS', 'Cigna'],
          visitTypes: ['New Patient', 'Follow-up', 'Urgent'],
          scheduleFlags: { weekend: true, open247: false },
          flags: { accepting: true, spanish: false, sameday: true, telehealth: false, wheelchair: true },
          photo: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1440&auto=format&fit=crop',
          availability: slotGen(),
        },
        {
          id: 'p7',
          name: 'Dr. Maya Patel',
          specialty: 'Ophthalmology',
          group: 'Employed Network',
          phone: '(214) 555-0133',
          city: 'Garland, TX',
          zip: '75040',
          distance: 24,
          insurances: ['Aetna', 'United', 'Cigna'],
          visitTypes: ['New Patient', 'Annual'],
          scheduleFlags: { weekend: false, open247: false },
          flags: { accepting: false, spanish: true, sameday: false, telehealth: false, wheelchair: true },
          photo: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?q=80&w=1440&auto=format&fit=crop',
          availability: slotGen(),
        },
        {
          id: 'p8',
          name: 'Dr. Oliver Brooks',
          specialty: 'Pulmonology',
          group: 'Affiliated Independent',
          phone: '(214) 555-0190',
          city: 'Dallas, TX',
          zip: '75231',
          distance: 7,
          insurances: ['Medicaid', 'Aetna'],
          visitTypes: ['Follow-up', 'Virtual'],
          scheduleFlags: { weekend: true, open247: false },
          flags: { accepting: true, spanish: false, sameday: true, telehealth: true, wheelchair: true },
          photo: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1440&auto=format&fit=crop',
          availability: slotGen(),
        },
        {
          id: 'p9',
          name: 'Dr. Ava Kim',
          specialty: 'Rheumatology',
          group: 'Preferred Network',
          phone: '(972) 555-0123',
          city: 'Richardson, TX',
          zip: '75080',
          distance: 15,
          insurances: ['Cigna', 'United', 'Medicare'],
          visitTypes: ['New Patient', 'Follow-up'],
          scheduleFlags: { weekend: false, open247: false },
          flags: { accepting: true, spanish: false, sameday: false, telehealth: true, wheelchair: true },
          photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1440&auto=format&fit=crop',
          availability: slotGen(),
        },
        {
          id: 'p10',
          name: 'Dr. Lucas Romero',
          specialty: 'Urology',
          group: 'Employed Network',
          phone: '(469) 555-0192',
          city: 'Dallas, TX',
          zip: '75206',
          distance: 6,
          insurances: ['BCBS', 'United', 'Aetna'],
          visitTypes: ['New Patient', 'Urgent'],
          scheduleFlags: { weekend: true, open247: true },
          flags: { accepting: true, spanish: true, sameday: true, telehealth: false, wheelchair: true },
          photo: 'https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1440&auto=format&fit=crop',
          availability: slotGen(),
        },
        {
          id: 'p11',
          name: 'Dr. Emma Thompson',
          specialty: 'Dermatology',
          group: 'Preferred Network',
          phone: '(214) 555-0177',
          city: 'Dallas, TX',
          zip: '75204',
          distance: 5,
          insurances: ['BCBS', 'Medicare'],
          visitTypes: ['New Patient', 'Annual', 'Follow-up'],
          scheduleFlags: { weekend: false, open247: false },
          flags: { accepting: true, spanish: false, sameday: true, telehealth: true, wheelchair: true },
          photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1440&auto=format&fit=crop',
          availability: slotGen(),
        },
        {
          id: 'p12',
          name: 'Dr. Benjamin Lee',
          specialty: 'Cardiology',
          group: 'Medicare Providers',
          phone: '(972) 555-0149',
          city: 'Mesquite, TX',
          zip: '75149',
          distance: 28,
          insurances: ['Medicare', 'United'],
          visitTypes: ['Follow-up', 'Virtual'],
          scheduleFlags: { weekend: false, open247: false },
          flags: { accepting: false, spanish: false, sameday: false, telehealth: true, wheelchair: true },
          photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1440&auto=format&fit=crop',
          availability: slotGen(),
        },
      ];

      // HL7 ORM imported orders (mock)
      const ehrOrders = [
        {
          id: 'orm1234',
          created: '2025-10-03 09:12',
          specialty: 'Dermatology',
          reason: 'New lesion on forearm',
          priority: 'Routine',
          status: 'Pending',
        },
        {
          id: 'orm1235',
          created: '2025-10-03 11:04',
          specialty: 'Cardiology',
          reason: 'Abnormal ECG',
          priority: 'Urgent',
          status: 'Pending',
        },
      ];

      // State
      const state = {
        step: 1,
        workflowOpen: false,
        specialty: null,
        network: null,
        search: '',
        insurances: new Set(),
        visitTypes: new Set(),
        zip: '',
        maxDistance: 25,
        runtime: new Set(), // keys from RUNTIME_FILTERS
        selected: new Map(), // providerId -> provider
        booked: new Map(), // providerId -> { date, time }
        modality: 'any',
        delivery: null, // 'providers' | 'self' | 'book'
      };

      // DOM Elements
      const wf = document.getElementById('referralWorkflow');
      const step1 = document.getElementById('step1');
      const step2 = document.getElementById('step2');
      const step3 = document.getElementById('step3');
      const btnNewReferral = document.getElementById('btnNewReferral');
      const btnNewReferralTop = document.getElementById('btnNewReferralTop');

      function openWorkflow(pref = {}) {
        wf.classList.remove('hidden');
        state.workflowOpen = true;
        if (pref.specialty) state.specialty = pref.specialty;
        setStep(1);
        renderAll();
        toast('Referral workflow opened', 'success');
      }

      // Step management
      function setStep(n) {
        state.step = n;
        step1.classList.toggle('hidden', n !== 1);
        step2.classList.toggle('hidden', n !== 2);
        step3.classList.toggle('hidden', n !== 3);
        // Highlight stepper
        document.querySelectorAll('.step-btn').forEach((b) => {
          const s = Number(b.dataset.step);
          b.classList.toggle('bg-white/5', s === n);
          b.classList.toggle('ring-white/20', s === n);
        });
        // Mobile bar visibility for step 1
        document.getElementById('mobileNextBar').classList.toggle('hidden', !(n === 1 && state.workflowOpen));
      }

      // Render EHR Orders
      function renderOrders() {
               const container = document.getElementById('ehrOrders');
        container.innerHTML = ehrOrders
          .map(
            (o) => `
            <div class="p-3 rounded-lg ring-1 ring-white/10 bg-white/5 flex items-start gap-3">
              <div class="shrink-0 p-2 rounded-md bg-white/5 ring-1 ring-white/10">
                <i data-lucide="file-plus"></i>
              </div>
              <div class="flex-1">
                <div class="flex flex-wrap items-center gap-2">
                  <div class="text-sm font-medium">${o.reason}</div>
                  <span class="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-zinc-300 ring-1 ring-white/10">${o.specialty}</span>
                  <span class="ml-auto text-[10px] px-1.5 py-0.5 rounded ${
                    o.priority === 'Urgent'
                      ? 'bg-rose-500/15 text-rose-300 ring-1 ring-rose-400/20'
                      : 'bg-amber-500/15 text-amber-300 ring-1 ring-amber-400/20'
                  }">${o.priority}</span>
                </div>
                <div class="mt-1 text-xs text-zinc-400">Order ${o.id} • ${o.created} • Status: ${o.status}</div>
                <div class="mt-2">
                  <button data-order="${o.id}" data-specialty="${o.specialty}" class="btn-start-ref inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white text-zinc-900 hover:bg-zinc-100 ring-1 ring-white/20 hover:ring-white/30 transition text-xs">
                    <i data-lucide="play"></i>
                    Start referral
                  </button>
                </div>
              </div>
            </div>
          `
          )
          .join('');
        // Bind
        container.querySelectorAll('.btn-start-ref').forEach((btn) => {
          btn.addEventListener('click', () => {
            const spec = btn.getAttribute('data-specialty');
            openWorkflow({ specialty: spec });
            toast(`Started referral for ${spec}`, 'success');
          });
        });
        refreshIcons();
      }

      // Helpers
      function formatDateShort(d)        const date = new Date(d);
        return date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
      }
      function closeAllMenus() {
        document.getElementById('menuSpecialty').classList.add('hidden');
        document.getElementById('menuNetwork').classList.add('hidden');
        document.getElementById('menuInsurance').classList.add('hidden');
        document.getElementById('menuVisitType').classList.add('hidden');
      }

      // Rendering filters/menus
      function renderMenus() {
        // Specialty
        const menuSpec = document.getElementById('menuSpecialty');
        menuSpec.innerHTML = SPECIALTIES.map((s) => {
          const active = state.specialty === s;
          return `<button data-val="${s}" class="w-full text-left px-3 py-2 rounded-md text-sm ${active ? 'bg-white/10 ring-1 ring-white/10' : 'hover:bg-white/5'}">${s}</button>`;
        }).join('');
        menuSpec.querySelectorAll('button').forEach((b) => {
          b.addEventListener('click', () => {
            state.specialty = b.dataset.val;
            document.getElementById('specialtyLabel').textContent = state.specialty;
            document.getElementById('menuSpecialty').classList.add('hidden');
            renderAll();
          });
        });
        document.getElementById('specialtyLabel').textContent = state.specialty || 'Specialty';

        // Network
        const menuNet = document.getElementById('menuNetwork');
        menuNet.innerHTML = NETWORK_GROUPS.map((n) => {
          const active = state.network === n;
          return `<button data-val="${n}" class="w-full text-left px-3 py-2 rounded-md text-sm ${active ? 'bg-white/10 ring-1 ring-white/10' : 'hover:bg-white/5'}">${n}</button>`;
        }).join('');
        menuNet.querySelectorAll('button').forEach((b) => {
          b.addEventListener('click', () => {
            state.network = b.dataset.val;
            document.getElementById('networkLabel').textContent = state.network;
            document.getElementById('menuNetwork').classList.add('hidden');
            renderAll();
          });
        });
        document.getElementById('networkLabel').textContent = state.network || 'Network group';

        // Insurance chips
        const insWrap = document.getElementById('insuranceOptions');
        insWrap.innerHTML = INSURANCES.map((i) => {
          const active = state.insurances.has(i);
          return `<button data-val="${i}" class="px-2.5 py-1.5 rounded-md text-xs ring-1 ${active ? 'bg-white text-zinc-900 ring-white/20' : 'bg-white/5 hover:bg-white/10 ring-white/10'}">${i}</button>`;
        }).join('');
        insWrap.querySelectorAll('button').forEach((b) => {
          b.addEventListener('click', () => {
            const v = b.dataset.val;
            if (state.insurances.has(v)) state.insurances.delete(v);
            else state.insurances.add(v);
            renderAll();
          });
        });

        // Visit type chips
        const vtWrap = document.getElementById('visitTypeOptions');
        vtWrap.innerHTML = VISIT_TYPES.map((i) => {
          const active = state.visitTypes.has(i);
          return `<button data-val="${i}" class="px-2.5 py-1.5 rounded-md text-xs ring-1 ${active ? '-white text-zinc-900 ring-white/20' : 'bg-white/5 hover:bg-white/10 ring-white/10'}">${i}</button>`;
        }).join('');
        vtWrap.querySelectorAll('button').forEach((b) => {
          b.addEventListener('click', () => {
            const v = b.dataset.val;
            if (state.visitTypes.has(v)) state.visitTypes.delete(v);
            else state.visitTypes.add(v);
            renderAll();
          });
        });

        refreshIcons();
      }

      function renderCustomFilters() {
        const cf = document.getElementById('customFilters');
        cf.innerHTML = RUNTIME_FILTERS.map((f) => {
          const active = state.runtime.has(f.key);
          return `<button data-key="${f.key}" class="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs ring-1 transition ${active ? 'bg-white text-zinc-900 ring-white/20' : 'bg-white/5 hover:bg-white/10 ring-white/10'}">
            ${active ? '<i data-lucide="check"></i>' : '<i data-lucide="plus"></i>'}
            ${f.label}
          </button>`;
        }).join('');
        cf.querySelectorAll('button').forEach((b) => {
          b.addEventListener('click', () => {
            const k = b.dataset.key;
            if (state.runtime.has(k)) state.runtime.delete(k);
            else state.runtime.add(k);
            renderAll();
          });
        });
        refreshIcons();
      }

      function renderActiveFilters() {
        const act = document.getElementById('activeFilters');
        const chips = [];

        if (state.specialty) chips.push({ type: 'specialty', label: state.specialty });
        if (state.network) chips.push({ type: 'network', label: state.network });
        if (state.search) chips.push({ type: 'search', label: `Search: "${state.search}"` });
        if (state.zip) chips.push({ type: 'zip', label: `ZIP/City: ${state.zip}` });
        if (state.maxDistance) chips.push({ type: 'distance', label: `≤ ${state.maxDistance}mi` });
        state.insurances.forEach((i) => chips.push({ type: 'insurance', label: i }));
        state.visitTypes.forEach((v) => chips.push({ type: 'visitType', label: v }));
        state.runtime.forEach((k) => {
          const f = RUNTIME_FILTERS.find((x) => x.key === k);
          if (f) chips.push({ type: `runtime:${k}`, label: f.label });
        });

        if (!chips.length) {
          act.innerHTML = `<div class="text-xs text-zinc-500">No filters applied</div>`;
          return;
        }

        act.innerHTML = chips
          .map(
            (c) => `
          <span class="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-md bg-white/5 ring-1 ring-white/10">
            ${c.label}
            <button class="chip-x hover:text-white text-zinc-400" data-type="${c.type}">
              <i data-lucide="x"></i>
            </button>
          </span>`
          )
          .join('');

        act.querySelectorAll('.chip-x').forEach((btn) => {
          btn.addEventListener('click', () => {
            const t = btn.dataset.type;
            if (t === 'specialty') state.specialty = null;
            else if (t === 'network') state.network = null;
            else if (t === 'search') state.search = '';
            else if (t === 'zip') state.zip = '';
            else if (t === 'distance') state.maxDistance = 25;
            else if (t.startsWith('runtime:')) state.runtime.delete(t.split(':')[1]);
            else if (t === 'insurance' || t === 'visitType') {
              const label = btn.parentElement.textContent.trim();
              if (t === 'insurance') state.insurances.delete(label.replace('x', '').trim());
              if (t === 'visitType') state.visitTypes.delete(label.replace('x', '').trim());
            }
            document.getElementById('searchInput').value = state.search;
            document.getElementById('zipInput').value = state.zip;
            document.getElementById('distanceInput').value = state.maxDistance;
            document.getElementById('distanceLabel').textContent = `${state.maxDistance}mi`;
            renderAll();
          });
        });
        refreshIcons();
      }

      function providerMatches(p) {
        // Specialty
        if (state.specialty && p.specialty !== state.specialty) return false;
        // Network
        if (state.network && p.group !== state.network) return false;
        // Distance
        if (p.distance > state.maxDistance) return false;
        // Search
        if (state.search) {
          const q = state.search.toLowerCase();
          const target = `${p.name} ${p.city} ${p.zip}`.toLowerCase();
          if (!target.includes(q)) return false;
        }
        // Zip / City
        if (state.zip) {
          const z = state.zip.trim().toLowerCase();
          const isNum = /^\d+/.test(z);
          if (isNum) {
            if (!p.zip.startsWith(z)) return false;
          } else {
            if (!p.city.toLowerCase().includes(z)) return false;
          }
        }
        // Insurance
        if (state.insurances.size) {
          const ok = [...state.insurances].some((i) => p.insurances.includes(i));
          if (!ok) return false;
        }
        // Visit Types
        if (state.visitTypes.size) {
          const ok = [...state.visitTypes].some((i) => p.visitTypes.includes(i));
          if (!ok) return false;
        }
        // Runtime flags
        for (const k of state.runtime) {
          if (k === 'weekend' || k === 'open247') {
            if (!p.scheduleFlags[k]) return false;
          } else {
            if (!p.flags[k]) return false;
          }
        }
        return true;
      }

      function renderProviders() {
        const wrap = document.getElementById('providerResults');
        const list = providers.filter(providerMatches);
        document.getElementById('resultCount').textContent = `${list.length} result${list.length !== 1 ? 's' : ''}`;
        wrap.innerHTML = list
          .map((p) => {
            const selected = state.selected.has(p.id);
            return `
            <div class="p-3 rounded-lg ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition flex flex-col">
              <div class="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="${p.name}" class="h-12 w-12 rounded-md object-cover" />
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2">
                    <div class="text-sm font-medium truncate">${p.name}</div>
                    ${p.flags.accepting ? '<span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/20">Accepting</span>' : ''}
                  </div>
                  <div class="text-xs text-zinc-400 truncate">${p.specialty} • ${p.group}</div>
                </div>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-zinc-300 ring-1 ring-white/10">${p.distance}mi</span>
              </div>
              <div class="mt-2 flex flex-wrap gap-1.5">
                ${p.flags.telehealth ? '<span class="text-[10px] px-1.5 py-0.5 rounded bg-sky-500/15 text-sky-300 ring-1 ring-sky-400/20">Virtual</span>' : ''}
                ${p.flags.sameday ? '<span class="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300 ring-1 ring-amber-400/20">Same-day</span>' : ''}
                ${p.flags.spanish ? '<span class="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/15 text-indigo-300 ring-1 ring-indigo-400/20">Spanish</span>' : ''}
              </div>
              <div class="mt3 flex items-center justify-between">
                <div class="text-xs text-zinc-400">${p.phone} • ${p.city}</div>
                <button data-id="${p.id}" class="btn-toggle-select inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs ring-1 transition ${selected ? 'bg-white text-zinc-900 ring-white/20 hover:bg-zinc-100' : 'bg-white/5 hover:bg-white/10 ring-white/10'}">
                  <i data-lucide="${selected ? 'check' : 'plus'}"></i>
                  ${selected ? 'Selected' : 'Select'}
                </button>
              </div>
            </div>
          `;
          })
          .join('');

        // Bind select buttons
        wrap.querySelectorAll('.btn-toggle-select').forEach((b) => {
          b.addEventListener('click', () => {
            const id = b.dataset.id;
            const prov = providers.find((p) => p.id === id);
            if (!prov) return;
            if (state.selected.has(id)) {
              state.selected.delete(id);
              state.booked.delete(id);
            } else {
              state.selected.set(id, prov);
            }
            renderAll();
          });
        });

        refreshIcons();
      }

      function renderSelectedCart() {
        const list = document.getElementById('selectedList');
        const count = state.selected.size;
        document.getElementById('selectedCount').textContent = String(count);
        document.getElementById('mobileSelectedCount').textContent = String(count);
        document.getElementById('btnToStep2').disabled = count === 0;
        document.getElementById('btnToStep2Mobile').disabled = count === 0;

        if (count === 0) {
          list.innerHTML = `<div class="text-xs text-zinc-400">No providers selected yet.</div>`;
          return;
        }

        list.innerHTML = [...state.selected.values()]
          .map(
            (p) => `
          <div class="flex items-center gap-2 p-2 rounded-md ring-1 ring-white/10 bg-white/">
            <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" class="h-7 w-7 rounded object-cover" alt="${p.name}">
            <div class="min-w-0 flex-1">
              <div class="text-xs font-medium truncate">${p.name}</div>
              <div class="text-[10px] text-zinc-400 truncate">${p.specialty} • ${p.city}</div>
            </div>
            <button data-id="${p.id}" class="btn-remove-sel p-1 rounded hover:bg-white/10 text-zinc-400 hover:text-white">
              <i data-lucide="x"></i>
            </button>
          </div>
        `
          )
          .join('');

        list.querySelectorAll('.btn-remove-sel').forEach((b) => {
          b.addEventListener('click', () => {
            const id = b.dataset.id;
            state.selected.delete(id);
            state.booked.delete(id);
            renderAll();
          });
        });

        refreshIcons();
      }

      // Availability and booking
      function renderModalityButtons() {
        const inBtn = document.getElementById('btnModalityIn');
        const vBtn = document.getElementById('btnModalityVirtual');
        // Reset classes
        [inBtn, vBtn].forEach((el) => {
          el.classList.remove('bg-white', 'text-zinc-900', 'ring-white/20');
        });
        if (state.modality === 'in') {
          inBtn.classList.add('bg-white', 'text-zinc-900', 'ring-white/20');
        } else if (state.modality === 'virtual') {
          vBtn.classList.add('bg-white', 'text-zinc-900', 'ring-white/20');
        }
      }

      function renderAvailability() {
        const wrap = document.getElementById('availabilityGrids');
        const selected = [...state.selected.values()];
        if (!selected.length) {
          wrap.innerHTML = `<div class="p-4 rounded-lg ring-1 ring-white/10 bg-white/5 text-sm text-zinc-400">Select providers to view availability.</div>`;
          return;
        }
        // Summary
        document.getElementById('selectedSummary').textContent = `${selected.length} provider${selected.length > 1 ? 's' : ''}`;

        wrap.innerHTML = selected
          .map((p) => {
            const booked = state.booked.get(p.id);
            const canShow = (mode) => {
              if (state.modality === 'in') return true;
              if (state.modality === 'virtual') return p.flags.telehealth;
              return true;
            };
            const slotsHtml = p.availability
              .map((day) => {
                const dayLabel = formatDateShort(day.date);
                const times = day.times
                  .map((t) => {
                    const isBooked = booked && booked.date.toDateString() === day.date.toDateString() && booked.time === t;
                    return `<button data-id="${p.id}" data-date="${day.date.toISOString()}" data-time="${t}" class="slot-btn px-2.5 py-1.5 rounded-md text-xs ring-1 transition ${
                      isBooked ? 'bg-white text-zinc-900 ring-white/20' : 'bg-white/5 hover:bg-white/10 ring-white/10'
                    }">${t}</button>`;
                  })
                  .join('');
                return `
                  <div class="min-w-[180px]">
                    <div class="text-xs text-zinc-400 mb-1">${dayLabel}</div>
                    <div class="flex flex-wrap gap-1.5">${times || '<div class="text-xs text-zinc-500">No slots</div>'}</div>
                  </div>
                `;
              })
              .join('');
            return `
              <div class="p-3 sm:p-4 rounded-xl ring-1 ring-white/10 bg-white/5">
                <div class="flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" class="h-10 w-10 rounded object-cover" alt="${p.name}">
                  <div class="flex-1 min-w-0">
                    <div class="text-sm font-medium truncate">${p.name}</div>
                    <div class="text-xs text-zinc-400 truncate">${p.specialty} • ${p.city}</div>
                  </div>
                  ${p.flags.telehealth ? '<span class="text-[10px] px-1.5 py-0.5 rounded bg-sky-500/15 text-sky-300 ring-1 ring-sky-400/20">Virtual</span>' : ''}
                </div>
                ${canShow() ? `
                <div class="mt-3 overflow-x-auto no-scrollbar">
                  <div class="flex gap-4">${slotsHtml}</div>
                </div>` : `
                <div class="mt-3 text-xs text-zinc-400">No virtual appointments available for this provider.</div>`}
              </div>
            `;
          })
          .join('');

        // Bind slot buttons
        wrap.querySelectorAll('.slot-btn').forEach((b) => {
          b.addEventListener('click', () => {
            const id = b.dataset.id;
            const date = new Date(b.dataset.date);
            const time = b.dataset.time;
            state.booked.set(id, { date, time });
            renderAll();
            toast('Time reserved (pending confirmation)', 'success');
          });
        });

        refreshIcons();
      }

      function renderBookedList() {
        const list = document.getElementById('bookedList');
        if (state.booked.size === 0) {
          list.innerHTML = `<div class="text-zinc-400 text-sm">No slots booked yet. Click a time to book.</div>`;
          return;
        }
        list.innerHTML = [...state.booked.entries()]
          .map(([id, b]) => {
            const p = state.selected.get(id) || providers.find((x) => x.id === id);
            return `
            <div class="flex items-center gap-2 p-2 rounded-md ring-1 ring-white/10 bg-white/5">
              <div class="text-xs flex-1">
                <div class="font-medium">${p?.name || id}</div>
                <div class="text-zinc-400">${formatDateShort(b.date)} • ${b.time}</div>
              </div>
              <button data-id="${id}" class="btn-remove-book p-1 rounded hover:bg-white/10 text-zinc-400 hover:text-white">
                <i data-lucide="x"></i>
              </button>
            </div>
          `;
          })
          .join('');
        list.querySelectorAll('.btn-remove-book').forEach((b) => {
          b.addEventListener('click', () => {
            state.booked.delete(b.dataset.id);
            renderAll();
          });
        });
        refreshIcons();
      }

      // Step 3 summary
      function renderSendSummary() {
        const sp = document.getElementById('sendProviders');
        const sb = document.getElementById('sendBooked');
        sp.innerHTML = [...state.selected.values()]
          .map(
            (p) => `
          <div class="flex items-center gap-2">
            <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" class="h-7 w-7 rounded object-cover" alt="${p.name}">
            <div class="text-sm">${p.name} <span class="text-xs text-zinc-400">• ${p.specialty}</span></div>
          </div>
        `
          )
          .join('') || `<div class="text-xs text-zinc-400">No providers selected.</div>`;

        sb.innerHTML = [...state.booked.entries()]
          .map(([id, b]) => {
            const p = providers.find((x) => x.id === id);
            return `<div class="text-sm">${p?.name || id} — ${formatDateShort(b.date)} at ${b.time}</div>`;
          })
          .join('') || `<div class="text-xs text-zinc-400">No appointments booked.</div>`;

        // Delivery card highlighting
        document.querySelectorAll('.delivery-card').forEach((el) => {
          el.classList.remove('ring-emerald-400/30', 'bg-emerald-500/10');
        });
        if (state.delivery) {
          const id =
            state.delivery === 'providers'
              ? 'optSendProviders'
              : state.delivery === 'self'
              ? 'optSelfSchedule'
              : 'optBookNow';
          const el = document.getElementById(id);
          el.classList.add('ring-emerald-400/30', 'bg-emerald-500/10');
        }
      }

      // NPI Modal
      function openNpi() {
        document.getElementById('modalNpi').classList.remove('hidden');
      }
      function closeNpi() {
        document.getElementById('modalNpi').classList.add('hidden');
      }
      function searchNpi() {
        const num = document.getElementById('npiNumber').value.trim();
        const name = document.getElementById('npiName').value.trim().toLowerCase();
        const zip = document.getElementById('npiZip').value.trim().toLowerCase();
        let results = providers.slice(0);

        if (name) results = results.filter((p) => p.name.toLowerCase().includes(name));
        if (zip) results = results.filter((p) => p.zip.startsWith(zip) || p.city.toLowerCase().includes(zip));
        if (num) {
          // Simulate exact NPI hit by slicing last digits to pick a provider
          const idx = Math.abs(parseInt(num.slice(-2), 10) || 0) % providers.length;
          results = [providers[idx]];
        }
        results = results.slice(0, 6);

        const out = document.getElementById('npiResults');
        if (!results.length) {
          out.innerHTML = `<div class="text-xs text-zinc-400">No results from NPPES registry.</div>`;
          return;
        }
        out.innerHTML = results
          .map(
            (p) => `
          <div class="p-2 rounded-md ring-1 ring-white/10 bg-white/5 flex items-center gap-3">
            <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" class="h-8 w-8 rounded object-cover" alt="${p.name}">
            <div class="flex-1 min-w-0">
              <div class="text-sm font-medium truncate">${p.name}</div>
              <div class="text-xs text-zinc-400 truncate">${p.specialty} • ${p.city} • NPI ${Math.floor(1000000000 + Math.random() * 8999999999)}</div>
            </div>
            <button data-id="${p.id}" class="btn-npi-add px-2.5 py-1.5 rounded-md text-xs ring-1 bg-white text-zinc-900 ring-white/20 hover:bg-zinc-100">Add</button>
          </div>
        `
          )
          .join('');
        out.querySelectorAll('.btn-npi-add').forEach((b) => {
          b.addEventListener('click', () => {
            const id = b.dataset.id;
            const p = providers.find((x) => x.id === id);
            if (p) {
              state.selected.set(id, p);
              renderAll();
              toast(`${p.name} added to selection`, 'success');
            }
          });
        });
      }

      // SMS Modal
      function openSms() {
        document.getElementById('modalSms').classList.remove('hidden');
      }
      function closeSms() {
        document.getElementById('modalSms').classList.add('hidden');
      }

      // Render root
      function renderAll() {
        renderMenus();
        renderCustomFilters();
        renderActiveFilters();
        renderProviders();
        renderSelectedCart();

        // Step-specific
        if (state.step === 2) {
          renderModalityButtons();
          renderAvailability();
          renderBookedList();
        }
        if (state.step === 3) {
          renderSendSummary();
        }
      }

      // Event bindings
      function bindEvents() {
        // Open workflow
        btnNewReferral.addEventListener('click', () => openWorkflow());
        btnNewReferralTop.addEventListener('click', () => openWorkflow());

        // Dropdown toggles
        document.getElementById('btnSpecialty').addEventListener('click', (e) => {
          e.stopPropagation();
          closeAllMenus();
          document.getElementById('menuSpecialty').classList.toggle('hidden');
        });
        document.getElementById('btnNetwork').addEventListener('click', (e) => {
          e.stopPropagation();
          closeAllMenus();
          document.getElementById('menuNetwork').classList.toggle('hidden');
        });
        document.getElementById('btnInsurance').addEventListener('click', (e) => {
          e.stopPropagation();
          closeAllMenus();
          document.getElementById('menuInsurance').classList.toggle('hidden');
        });
        document.getElementById('btnVisitType').addEventListener('click', (e) => {
          e.stopPropagation();
          closeAllMenus();
          document.getElementById('menuVisitType').classList.toggle('hidden');
        });
        document.addEventListener('click', () => closeAllMenus());

        // Search
        const si = document.getElementById('searchInput');
        const cs = document.getElementById('btnClearSearch');
        si.addEventListener('input', () => {
          state.search = si.value;
          cs.classList.toggle('hidden', !si.value.length);
          renderAll();
        });
        cs.addEventListener('click', () => {
          si.value = '';
          state.search = '';
          cs.classList.add('hidden');
          renderAll();
        });

        // Zip and distance
        const zi = document.getElementById('zipInput');
        zi.addEventListener('input', () => {
          state.zip = zi.value;
          renderAll();
        });
        const di = document.getElementById('distanceInput');
        di.addEventListener('input', () => {
          state.maxDistance = Number(di.value);
          document.getElementById('distanceLabel').textContent = `${state.maxDistance}mi`;
          renderAll();
        });

        // Reset
        document.getElementById('btnResetFilters').addEventListener('click', () => {
          state.specialty = null;
          state.network = null;
          state.search = '';
          state.insurances.clear();
          state.visitTypes.clear();
          state.zip = '';
          state.maxDistance = 25;
          state.runtime.clear();
          document.getElementById('searchInput').value = '';
          document.getElementById('zipInput').value = '';
          document.getElementById('distanceInput').value = 25;
          document.getElementById('distanceLabel').textContent = '25mi';
          renderAll();
        });

        // Selected controls
        document.getElementById('btnClearSelected').addEventListener('click', () => {
          state.selected.clear();
          state.booked.clear();
          renderAll();
        });
        document.getElementById('btnToStep2').addEventListener('click', () => setStep(2));
        document.getElementById('btnToStep2Mobile').addEventListener('click', () => setStep(2));
        document.getElementById('btnBackTo1').addEventListener('click', () => setStep(1));
        document.getElementById('btnToStep3').addEventListener('click', () => setStep(3));
        document.getElementById('btnBackTo2').addEventListener('click', () => setStep(2));

        // Stepper direct nav
        document.querySelectorAll('.step-btn').forEach((b) => {
          b.addEventListener('click', () => {
            const target = Number(b.dataset.step);
            if (target === 2 && state.selected.size === 0) {
              toast('Select at least one provider to continue', 'warn');
              return;
            }
            if (target === 3 && state.selected.size === 0) {
              toast('Select providers first', 'warn');
              return;
            }
            setStep(target);
            renderAll();
          });
        });

        // Modality
        document.getElementById('btnModalityIn').addEventListener('click', () => {
          state.modality = state.modality === 'in' ? 'any' : 'in';
          renderAll();
        });
        document.getElementById('btnModalityVirtual').addEventListener('click', () => {
          state.modality = state.modality === 'virtual' ? 'any' : 'virtual';
          renderAll();
        });

        // Delivery options
        document.getElementById('optSendProviders').addEventListener('click', () => {
          state.delivery = 'providers';
          renderSendSummary();
        });
        document.getElementById('optSelfSchedule').addEventListener('click', () => {
          state.delivery = 'self';
          renderSendSummary();
        });
        document.getElementById('optBookNow').addEventListener('click', () => {
          state.delivery = 'book';
          renderSendSummary();
        });

        // Finalize
        document.getElementById('btnFinalize').addEventListener('click', () => {
          if (!state.delivery) {
            toast('Choose a delivery option', 'warn');
            return;
          }
          if (state.delivery === 'self') {
            openSms();
          } else if (state.delivery === 'providers') {
            toast('Referral packet sent to provider offices', 'success');
          } else if (state.delivery === 'book') {
            if (state.booked.size === 0) {
              toast('Book at least one appointment or choose another option', 'warn');
              return;
            }
            toast('Appointments confirmed and notifications sent', 'success');
          }
        });

        // NPI modal
        document.getElementById('btnNpiLookup').addEventListener('click', openNpi);
        document.getElementById('closeNpi').addEventListener('click', closeNpi);
        document.getElementById('btnSearchNpi').addEventListener('click', searchNpi);

        // SMS modal
        document.getElementById('closeSms').addEventListener('click', closeSms);
        document.getElementById('btnSendSms').addEventListener('click', () => {
          const phone = document.getElementById('smsPhone').value.trim();
          if (!phone) {
            toast('Enter a phone number', 'warn');
            return;
          }
          closeSms();
          toast(`SMS sent to ${phone}`, 'success');
        });
      }

      // Init
      renderOrders();
      bindEvents();
      renderAll();
      refreshIcons();
    
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
      

<div className="min-h-screen grid grid-cols-1 lg:grid-cols-[264px_1fr]">

<aside className="hidden lg:flex flex-col border-r border-white/10 bg-zinc-950/60 backdrop-blur-sm">
<div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-white text-zinc-900 grid place-content-center font-semibold tracking-tight">B</div>
<div className="text-zinc-100 text-lg font-semibold tracking-tight">Blockit</div>
</div>
<button className="p-2 rounded-md hover:bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition">
<i data-lucide="bell"></i>
</button>
</div>
<nav className="flex-1 p-3 space-y-1">
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" href="#">
<i data-lucide="grid"></i>
<span className="text-sm text-zinc-200 group-hover:text-white">Dashboard</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md bg-white/[0.04] ring-1 ring-white/10" href="#">
<i data-lucide="users"></i>
<span className="text-sm text-zinc-50">Patients</span>
<span className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-zinc-300">42</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" href="#">
<i data-lucide="send"></i>
<span className="text-sm text-zinc-200 group-hover:text-white">Referrals</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" href="#">
<i data-lucide="book-open"></i>
<span className="text-sm text-zinc-200 group-hover:text-white">Directory</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" href="#">
<i data-lucide="bar-chart-3"></i>
<span className="text-sm text-zinc-200 group-hover:text-white">Analytics</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" href="#">
<i data-lucide="settings"></i>
<span className="text-sm text-zinc-200 group-hover:text-white">Settings</span>
</a>
</nav>
<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-3 p-3 rounded-lg ring-1 ring-white/10 bg-white/5">
<img alt="User" className="h-9 w-9 rounded-md object-cover" src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?q=80&amp;w=1440&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="text-sm font-medium text-zinc-100">Avery Patel</div>
<div className="text-xs text-zinc-400">Referral Coordinator</div>
</div>
<button className="p-2 rounded-md hover:bg-white/5 ring-1 ring-white/10 hover:ring-white/20">
<i data-lucide="log-out"></i>
</button>
</div>
</div>
</aside>

<main className="flex flex-col">

<header className="sticky top-0 z-40 bg-zinc-950/70 backdrop-blur-md border-b border-white/10">
<div className="px-4 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<button className="lg:hidden p-2 rounded-md hover:bg-white/5 ring-1 ring-white/10 hover:ring-white/20">
<i data-lucide="menu"></i>
</button>
<div>
<h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">Patient Details</h1>
<p className="text-xs sm:text-sm text-zinc-400">Manage referrals, availability, and care coordination</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-md bg-white text-zinc-900 hover:bg-zinc-100 ring-1 ring-white/20 hover:ring-white/30 transition" id="btnNewReferralTop">
<i data-lucide="plus"></i>
<span className="text-sm font-medium">Create referral</span>
</button>
</div>
</div>
</header>

<div className="px-4 lg:px-8 py-6 space-y-8">

<section className="grid md:grid-cols-3 gap-5">
<div className="md:col-span-2 p-4 sm:p-5 rounded-xl ring-1 ring-white/10 bg-zinc-900/40">
<div className="flex items-start gap-4">
<img alt="Patient" className="h-14 w-14 rounded-lg object-cover" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&amp;w=1440&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-center gap-2">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight">Jordan Lee</h2>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/20">Active</span>
</div>
<div className="mt-2 grid sm:grid-cols-2 gap-2 text-sm text-zinc-300">
<div className="flex items-center gap-2">
<i data-lucide="calendar"></i>
                      DOB: 1982-08-14 (42)
                    </div>
<div className="flex items-center gap-2">
<i data-lucide="hash"></i>
                      MRN: 0092387
                    </div>
<div className="flex items-center gap-2">
<i data-lucide="phone"></i>
                      (469) 555-0127
                    </div>
<div className="flex items-center gap-2">
<i data-lucide="map-pin"></i>
                      75201 • Dallas, TX
                    </div>
</div>
</div>
<div className="hidden sm:flex flex-col gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white text-zinc-900 hover:bg-zinc-100 ring-1 ring-white/20 hover:ring-white/30 transition" id="btnNewReferral">
<i data-lucide="plus"></i>
<span className="text-sm font-medium">Create referral</span>
</button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition">
<i data-lucide="file-text"></i>
<span className="text-sm">View chart</span>
</button>
</div>
</div>
</div>
<div className="p-4 sm:p-5 rounded-xl ring-1 ring-white/10 bg-zinc-900/40">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">EHR Referral Orders</h3>
<span className="text-xs text-zinc-400">HL7 ORM</span>
</div>
<div className="mt-3 space-y-2" id="ehrOrders">

</div>
</div>
</section>

<section className="hidden" id="referralWorkflow">

<div className="p-3 sm:p-4 rounded-xl ring-1 ring-white/10 bg-zinc-900/40">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div className="flex items-center gap-3">
<button className="step-btn inline-flex items-center gap-2 px-3 py-2 rounded-md ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition" data-step="1">
<span className="h-6 w-6 grid place-content-center rounded-md bg-white text-zinc-900 text-xs font-medium">1</span>
<span className="text-sm font-medium">Select providers</span>
</button>
<i className="text-zinc-500" data-lucide="chevron-right"></i>
<button className="step-btn inline-flex items-center gap-2 px-3 py-2 rounded-md ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition" data-step="2">
<span className="h-6 w-6 grid place-content-center rounded-md bg-white/10 text-white text-xs font-medium">2</span>
<span className="text-sm font-medium">Availability</span>
</button>
<i className="text-zinc-500" data-lucide="chevron-right"></i>
<button className="step-btn inline-flex items-center gap-2 px-3 py-2 rounded-md ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition" data-step="3">
<span className="h-6 w-6 grid place-content-center rounded-md bg-white/10 text-white text-xs font-medium">3</span>
<span className="text-sm font-medium">Send</span>
</button>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-400">Patient: Jordan Lee</span>
<div className="h-6 w-px bg-white/10"></div>
<span className="text-xs text-zinc-400">MRN: 0092387</span>
</div>
</div>
</div>

<div className="mt-4 grid lg:grid-cols-[1fr_320px] gap-5" id="step1">
<div className="space-y-4">

<div className="p-3 sm:p-4 rounded-xl ring-1 ring-white/10 bg-zinc-900/40">
<div className="grid sm:grid-cols-3 gap-3">

<div className="relative">
<button className="w-full inline-flex items-center justify-between gap-2 px-3 py-2.5 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition" id="btnSpecialty">
<div className="flex items-center gap-2 truncate">
<i data-lucide="stethoscope"></i>
<span className="text-sm truncate" id="specialtyLabel">Specialty</span>
</div>
<i data-lucide="chevron-down"></i>
</button>
<div className="absolute z-30 hidden mt-2 w-full rounded-md ring-1 ring-white/10 bg-zinc-900/95 backdrop-blur-sm p-1" id="menuSpecialty">

</div>
</div>

<div className="relative">
<button className="w-full inline-flex items-center justify-between gap-2 px-3 py-2.5 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition" id="btnNetwork">
<div className="flex items-center gap-2 truncate">
<i data-lucide="layers"></i>
<span className="text-sm truncate" id="networkLabel">Network group</span>
</div>
<i data-lucide="chevron-down"></i>
</button>
<div className="absolute z-30 hidden mt-2 w-full rounded-md ring-1 ring-white/10 bg-zinc-900/95 backdrop-blur-sm p-1" id="menuNetwork">

</div>
</div>

<div className="relative">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
<i className="text-zinc-500 h-4 w-4" data-lucide="search"></i>
</div>
<input className="w-full pl-10 pr-10 py-2.5 rounded-md bg-white/5 ring-1 ring-white/10 placeholder:text-zinc-500 focus:outline-none focus:ring-white/20" id="searchInput" placeholder="Search provider name, clinic, city..." type="text"/>
<button className="absolute inset-y-0 right-0 pr-3 hidden text-zinc-400 hover:text-zinc-200" id="btnClearSearch">
<i data-lucide="x"></i>
</button>
</div>
</div>

<div className="mt-3 grid md:grid-cols-3 gap-3">
<div className="relative">
<button className="w-full inline-flex items-center justify-between px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20" id="btnInsurance">
<span className="text-sm flex items-center gap-2">
<i data-lucide="shield-plus"></i>
                          Insurance
                        </span>
<i data-lucide="chevron-down"></i>
</button>
<div className="absolute z-30 hidden mt-2 w-full rounded-md ring-1 ring-white/10 bg-zinc-900/95 p-2" id="menuInsurance">
<div className="flex flex-wrap gap-2" id="insuranceOptions">

</div>
</div>
</div>
<div className="relative">
<button className="w-full inline-flex items-center justify-between px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20" id="btnVisitType">
<span className="text-sm flex items-center gap-2">
<i data-lucide="monitor-smartphone"></i>
                          Visit type
                        </span>
<i data-lucide="chevron-down"></i>
</button>
<div className="absolute z-30 hidden mt-2 w-full rounded-md ring-1 ring-white/10 bg-zinc-900/95 p-2" id="menuVisitType">
<div className="flex flex-wrap gap-2" id="visitTypeOptions">

</div>
</div>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="relative">
<input className="w-full px-3 py-2 rounded-md bg-white/5 ring-1 ring-white/10 placeholder:text-zinc-500 focus:outline-none focus:ring-white/20" id="zipInput" placeholder="Zip code" type="text"/>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-md ring-1 ring-white/10 bg-white/5">
<span className="text-xs text-zinc-400">Distance</span>
<input className="w-full accent-white" id="distanceInput" max="100" min="5" step="5" type="range" value="25"/>
<span className="text-sm" id="distanceLabel">25mi</span>
</div>
</div>
</div>

<div className="mt-3 flex flex-wrap gap-2" id="customFilters">

</div>
<div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-2 justify-between">
<div className="flex flex-wrap gap-2" id="activeFilters">

</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 ring-1 ring-white/10 hover:ring-white/20" id="btnNpiLookup">
<i data-lucide="database"></i>
<span className="text-sm">NPI directory lookup</span>
</button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 ring-1 ring-white/10 hover:ring-white/20" id="btnResetFilters">
<i data-lucide="rotate-ccw"></i>
<span className="text-sm">Reset</span>
</button>
</div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Providers</h3>
<span className="text-xs text-zinc-400" id="resultCount">0 results</span>
</div>
<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3" id="providerResults">

</div>
</div>
</div>

<aside className="lg:sticky lg:top-20 h-max">
<div className="p-4 rounded-xl ring-1 ring-white/10 bg-zinc-900/40">
<div className="flex items-center justify-between">
<h4 className="text-base font-semibold tracking-tight">Selected providers</h4>
<span className="text-xs text-zinc-400" id="selectedCount">0</span>
</div>
<div className="mt-3 space-y-2" id="selectedList">

</div>
<div className="mt-3 flex items-center justify-between">
<button className="text-xs text-zinc-400 hover:text-zinc-200 inline-flex items-center gap-1" id="btnClearSelected">
<i data-lucide="trash-2"></i> Clear
                    </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white text-zinc-900 hover:bg-zinc-100 disabled:opacity-40 ring-1 ring-white/20 hover:ring-white/30 transition disabled:hover:bg-white disabled:hover:ring-white/20" disabled="" id="btnToStep2">
<i data-lucide="arrow-right"></i>
<span className="text-sm font-medium">Next</span>
</button>
</div>
</div>
<div className="mt-3 p-3 rounded-lg ring-1 ring-white/10 bg-amber-500/10 text-amber-300 text-xs">
                  Tip: Select multiple providers to send options to the patient for self-scheduling.
                </div>
</aside>
</div>

<div className="hidden mt-4 grid lg:grid-cols-[1fr_320px] gap-5" id="step2">
<div className="space-y-4">
<div className="p-3 sm:p-4 rounded-xl ring-1 ring-white/10 bg-zinc-900/40 flex flex-wrap items-center gap-3 justify-between">
<div className="flex items-center gap-2">
<span className="text-sm text-zinc-300">Showing availability for</span>
<div className="text-sm font-medium" id="selectedSummary"></div>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-md ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 text-sm" id="btnModalityIn">In-person</button>
<button className="px-3 py-1.5 rounded-md ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 text-sm" id="btnModalityVirtual">Virtual</button>
</div>
</div>
<div className="space-y-4" id="availabilityGrids">

</div>
</div>
<aside className="lg:sticky lg:top-20 h-max">
<div className="p-4 rounded-xl ring-1 ring-white/10 bg-zinc-900/40">
<h4 className="text-base font-semibold tracking-tight">Appointments</h4>
<div className="mt-3 space-y-2 text-sm" id="bookedList">
<div className="text-zinc-400">No slots booked yet. Click a time to book.</div>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 ring-1 ring-white/10 hover:ring-white/20" id="btnBackTo1">
<i data-lucide="arrow-left"></i>
<span className="text-sm">Back</span>
</button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white text-zinc-900 hover:bg-zinc-100 ring-1 ring-white/20 hover:ring-white/30 transition" id="btnToStep3">
<i data-lucide="arrow-right"></i>
<span className="text-sm font-medium">Next</span>
</button>
</div>
</div>
</aside>
</div>

<div className="hidden mt-4 grid lg:grid-cols-[1fr_320px] gap-5" id="step3">
<div className="space-y-4">
<div className="p-3 sm:p-4 rounded-xl ring-1 ring-white/10 bg-zinc-900/40">
<h4 className="text-base font-semibold tracking-tight">Summary</h4>
<div className="mt-3 grid md:grid-cols-2 gap-3">
<div className="p-3 rounded-lg ring-1 ring-white/10 bg-white/5">
<div className="text-xs uppercase text-zinc-400 mb-2">Providers selected</div>
<div className="space-y-2 text-sm" id="sendProviders">

</div>
</div>
<div className="p-3 rounded-lg ring-1 ring-white/10 bg-white/5">
<div className="text-xs uppercase text-zinc-400 mb-2">Booked appointments</div>
<div className="space-y-2 text-sm" id="sendBooked">

</div>
</div>
</div>
</div>
<div className="p-3 sm:p-4 rounded-xl ring-1 ring-white/10 bg-zinc-900/40 space-y-4">
<h4 className="text-base font-semibold tracking-tight">Delivery options</h4>
<div className="grid md:grid-cols-3 gap-3">
<button className="delivery-card group text-left p-4 rounded-lg ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition" id="optSendProviders">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i data-lucide="inbox"></i>
<div className="text-sm font-medium">Send to provider office</div>
</div>
<i className="opacity-0 group-hover:opacity-100 transition" data-lucide="chevron-right"></i>
</div>
<div className="mt-2 text-xs text-zinc-400">Fax/email referral details, reason, and documents.</div>
</button>
<button className="delivery-card group text-left p-4 rounded-lg ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition" id="optSelfSchedule">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i data-lucide="message-circle"></i>
<div className="text-sm font-medium">Send to patient (self-schedule)</div>
</div>
<i className="opacity-0 group-hover:opacity-100 transition" data-lucide="chevron-right"></i>
</div>
<div className="mt-2 text-xs text-zinc-400">SMS with a secure link to book from selected providers.</div>
</button>
<button className="delivery-card group text-left p-4 rounded-lg ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition" id="optBookNow">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i data-lucide="check-circle-2"></i>
<div className="text-sm font-medium">Book now</div>
</div>
<i className="opacity-0 group-hover:opacity-100 transition" data-lucide="chevron-right"></i>
</div>
<div className="mt-2 text-xs text-zinc-400">Confirm booked slots and notify parties.</div>
</button>
</div>

<div className="flex items-center justify-between">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 ring-1 ring-white/10 hover:ring-white/20" id="btnBackTo2">
<i data-lucide="arrow-left"></i>
<span className="text-sm">Back</span>
</button>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white text-zinc-900 hover:bg-zinc-100 ring-1 ring-white/20 hover:ring-white/30 transition" id="btnFinalize">
<i data-lucide="send"></i>
<span className="text-sm font-medium">Finalize</span>
</button>
</div>
</div>
</div>
</div>
<aside className="lg:sticky lg:top-20 h-max">
<div className="p-4 rounded-xl ring-1 ring-white/10 bg-zinc-900/40">
<h4 className="text-base font-semibold tracking-tight">Notes</h4>
<textarea className="mt-2 w-full px-3 py-2 rounded-md bg-white/5 ring-1 ring-white/10 placeholder:text-zinc-500 focus:outline-none focus:ring-white/20" id="sendNotes" placeholder="Referral reason, clinical notes..." rows="6"></textarea>
<div className="mt-3 space-y-2 text-xs text-zinc-400">
<div className="flex items-center gap-2"><i data-lucide="shield-check"></i> PHI secure delivery</div>
<div className="flex items-center gap-2"><i data-lucide="clock-3"></i> Audit trail enabled</div>
</div>
</div>
</aside>
</div>
</section>
</div>

<div className="hidden fixed bottom-0 inset-x-0 lg:hidden bg-zinc-900/90 backdrop-blur-md border-t border-white/10 p-3" id="mobileNextBar">
<div className="max-w-screen-sm mx-auto flex items-center justify-between gap-3">
<div className="text-sm text-zinc-300">
<span id="mobileSelectedCount">0</span> selected
            </div>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-zinc-900 hover:bg-zinc-100 disabled:opacity-40 ring-1 ring-white/20 hover:ring-white/30 transition" disabled="" id="btnToStep2Mobile">
<span className="text-sm font-medium">Next</span>
<i data-lucide="arrow-right"></i>
</button>
</div>
</div>
</main>
</div>

<div className="hidden fixed inset-0 z-50" id="modalNpi">
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative mx-auto mt-16 w-[92%] max-w-2xl rounded-xl ring-1 ring-white/10 bg-zinc-950">
<div className="p-4 border-b border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<i data-lucide="database"></i>
<h3 className="text-base font-semibold tracking-tight">NPI directory lookup</h3>
</div>
<button className="p-2 rounded-md hover:bg-white/5 ring-1 ring-white/10 hover:ring-white/20" id="closeNpi">
<i data-lucide="x"></i>
</button>
</div>
<div className="p-4 space-y-3">
<div className="grid sm:grid-cols-3 gap-2">
<input className="px-3 py-2 rounded-md bg-white/5 ring-1 ring-white/10 placeholder:text-zinc-500 focus:outline-none focus:ring-white/20" id="npiNumber" placeholder="NPI number" type="text"/>
<input className="px-3 py-2 rounded-md bg-white/5 ring-1 ring-white/10 placeholder:text-zinc-500 focus:outline-none focus:ring-white/20" id="npiName" placeholder="Provider name" type="text"/>
<input className="px-3 py-2 rounded-md bg-white/5 ring-1 ring-white/10 placeholder:text-zinc-500 focus:outline-none focus:ring-white/20" id="npiZip" placeholder="Zip or City" type="text"/>
</div>
<div className="flex items-center justify-between">
<div className="text-xs text-zinc-400">Powered by NPPES NPI Registry</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white text-zinc-900 hover:bg-zinc-100 ring-1 ring-white/20 hover:ring-white/30 transition" id="btnSearchNpi">
<i data-lucide="search"></i>
<span className="text-sm font-medium">Search</span>
</button>
</div>
<div className="mt-2 space-y-2" id="npiResults">

</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50" id="modalSms">
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative mx-auto mt-16 w-[92%] max-w-md rounded-xl ring-1 ring-white/10 bg-zinc-950">
<div className="p-4 border-b border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<i data-lucide="message-circle"></i>
<h3 className="text-base font-semibold tracking-tight">Send to patient</h3>
</div>
<button className="p-2 rounded-md hover:bg-white/5 ring-1 ring-white/10 hover:ring-white/20" id="closeSms">
<i data-lucide="x"></i>
</button>
</div>
<div className="p-4 space-y-3">
<div>
<label className="text-xs text-zinc-400">Phone number</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-white/5 ring-1 ring-white/10 placeholder:text-zinc-500 focus:outline-none focus:ring-white/20" id="smsPhone" type="text" value="(469) 555-0127"/>
</div>
<div>
<label className="text-xs text-zinc-400">Message preview</label>
<textarea className="mt-1 w-full px-3 py-2 rounded-md bg-white/5 ring-1 ring-white/10 focus:outline-none focus:ring-white/20" id="smsMessage" rows="4">Hi Jordan, your doctor sent provider options for your referral. Use this secure link to book: https://blk.it/abcd1234</textarea>
</div>
<div className="flex items-center justify-end">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white text-zinc-900 hover:bg-zinc-100 ring-1 ring-white/20 hover:ring-white/30 transition" id="btnSendSms">
<i data-lucide="send"></i>
<span className="text-sm font-medium">Send</span>
</button>
</div>
</div>
</div>
</div>

<div className="fixed top-4 right-4 z-50 space-y-2" id="toasts"></div>


    </>
  );
}
