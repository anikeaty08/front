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
      
    // Data
    const locations = [
      {
        id: 'san-marco',
        name: 'San Marco',
        address: '1210 Hendricks Ave, Jacksonville, FL',
        phone: '(904) 555-0101',
        hours: { mon:[9,23], tue:[9,23], wed:[9,23], thu:[9,24], fri:[9,24], sat:[10,24], sun:[10,22] }
      },
      {
        id: 'riverside',
        name: 'Riverside',
        address: '820 Park St, Jacksonville, FL',
        phone: '(904) 555-0102',
        hours: { mon:[8,22], tue:[8,22], wed:[8,23], thu:[8,23], fri:[8,24], sat:[10,24], sun:[10,22] }
      },
      {
        id: 'beaches',
        name: 'Beaches',
        address: '33 Ocean Blvd, Jacksonville Beach, FL',
        phone: '(904) 555-0103',
        hours: { mon:[9,22], tue:[9,22], wed:[9,22], thu:[9,23], fri:[9,24], sat:[9,24], sun:[10,22] }
      }
    ];

    const events = [
      { id:'openmic', title:'Open-Mic Poetry', dayOffset:1, time:'8–10', location:'San Marco', type:'Live Music' },
      { id:'gamenight', title:'Game Night Tournament', dayOffset:2, time:'7–10', location:'Riverside', type:'Tournament' },
      { id:'yoga', title:'Sunset Yoga', dayOffset:3, time:'6–7', location:'Beaches', type:'Yoga' },
      { id:'breath', title:'Breathwork Circle', dayOffset:4, time:'7–8', location:'San Marco', type:'Wellness' }
    ];

    const menuItems = [
      {
        id:'island-classic',
        name:'Island Classic',
        price:7,
        feels:{ calm:4, uplift:2, focus:1 },
        taste:['earthy','creamy'],
        dietary:['vegan','caffeine-free','gluten-free'],
        locations:['san-marco','riverside','beaches'],
        img:'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop',
        desc:'Traditional grind-and-strain noble kava with a silky finish.',
        coa:'https://www.orimi.com/pdf-test.pdf'
      },
      {
        id:'citrus-wake',
        name:'Citrus Wake',
        price:8.5,
        feels:{ calm:2, uplift:4, focus:2 },
        taste:['citrus'],
        dietary:['vegan','gluten-free'],
        locations:['riverside','beaches'],
        img:'https://images.unsplash.com/photo-1566843972141-6a7d2b9318f8?q=80&w=1200&auto=format&fit=crop',
        desc:'Bright citrus and ginger lift with a mellow base.',
        coa:'https://www.orimi.com/pdf-test.pdf'
      },
      {
        id:'spice-drift',
        name:'Spice Drift',
        price:9,
        feels:{ calm:3, uplift:2, focus:4 },
        taste:['spice','creamy'],
        dietary:['gluten-free'],
        locations:['san-marco'],
        img:'https://images.unsplash.com/photo-1562088287-bde9b2aa3f90?q=80&w=1200&auto=format&fit=crop',
        desc:'Cardamom and clove swirl with a focused finish.',
        coa:'https://www.orimi.com/pdf-test.pdf'
      },
      {
        id:'rooted-focus',
        name:'Rooted Focus',
        price:9.5,
        feels:{ calm:2, uplift:1, focus:5 },
        taste:['earthy'],
        dietary:['vegan','caffeine-free'],
        locations:['san-marco','riverside'],
        img:'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?q=80&w=1200&auto=format&fit=crop',
        desc:'Deep earthy brew tuned for clarity and presence.',
        coa:'https://www.orimi.com/pdf-test.pdf'
      },
      {
        id:'peach-cloud',
        name:'Peach Cloud',
        price:8,
        feels:{ calm:4, uplift:3, focus:1 },
        taste:['creamy','citrus'],
        dietary:['vegan'],
        locations:['beaches','san-marco'],
        img:'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop',
        desc:'Juicy peach and coconut cream with a soft landing.',
        coa:'https://www.orimi.com/pdf-test.pdf'
      }
    ];

    const shopItems = [
      { id:'bowl-ceramic', name:'Ceramic Kava Bowl', price:42, img:'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop' },
      { id:'strainer-bag', name:'Strainer Bag (2-pack)', price:12, img:'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop' },
      { id:'house-blend', name:'House Blend — 250g', price:29, img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop' }
    ];

    const coaBatches = [
      { id:'batch-23F', name:'Noble Kava — Batch 23F', date:'2025-04-12', url:'https://www.orimi.com/pdf-test.pdf' },
      { id:'batch-23G', name:'Citrus Wake — Batch 23G', date:'2025-05-05', url:'https://www.orimi.com/pdf-test.pdf' },
      { id:'batch-23H', name:'Peach Cloud — Batch 23H', date:'2025-06-18', url:'https://www.orimi.com/pdf-test.pdf' }
    ];

    // Helpers
    const $ = (s, r=document) => r.querySelector(s);
    const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
    const fmtPrice = n => `$${n.toFixed(2).replace(/\.00$/,'')}`;
    const dayKey = i => ['sun','mon','tue','wed','thu','fri','sat'][i];

    function nowLocalHours() {
      const d = new Date();
      return { dow:d.getDay(), hour:d.getHours(), min:d.getMinutes() };
    }

    function isOpen(hours) {
      const { dow, hour } = nowLocalHours();
      const key = dayKey(dow);
      const [open, close] = hours[key] || [10,22];
      // handle wrap to 24
      const h = hour;
      const end = close;
      return h >= open && h < end;
    }

    function todayHoursStr(hours) {
      const { dow } = nowLocalHours();
      const key = dayKey(dow);
      const [open, close] = hours[key] || [10,22];
      const fmt = h => {
        const ampm = h >= 12 ? 'PM' : 'AM';
        const hr = ((h + 11) % 12 + 1);
        return `${hr}${ampm}`;
      };
      return `${fmt(open)}–${fmt(close)}`;
    }

    function createChip(text) {
      const span = document.createElement('span');
      span.className = 'px-2 py-0.5 rounded-full bg-white/10 text-xs';
      span.textContent = text;
      return span;
    }

    function toast(msg='Saved') {
      const el = $('#toast');
      $('#toastMsg').textContent = msg;
      el.classList.remove('hidden');
      setTimeout(()=>el.classList.add('hidden'), 2200);
    }

    // Renderers
    function renderHeroLocations() {
      const sel = $('#heroLocation');
      sel.innerHTML = locations.map(l=>`<option value="${l.id}">${l.name}</option>`).join('');
      sel.addEventListener('change', () => updateHeroHours(sel.value));
      updateHeroHours(sel.value || locations[0].id);
    }

    function updateHeroHours(locId) {
      const loc = locations.find(l=>l.id===locId) || locations[0];
      const open = isOpen(loc.hours);
      const badge = $('#openBadge');
      badge.style.background = open ? 'rgba(34,214,140,0.12)' : 'rgba(255,45,154,0.12)';
      badge.style.color = open ? 'var(--green)' : 'var(--hotPink)';
      badge.innerHTML = `<span class="h-2 w-2 rounded-full" style="background:${open ? 'var(--green)':'var(--hotPink)'}"></span> ${open ? 'Open now':'Closed'}`;
      $('#heroHours').textContent = `Today ${todayHoursStr(loc.hours)}`;
    }

    function renderTonightTicker() {
      const marquee = $('#tonightTicker');
      const msg = events.map(e=>{
        const date = new Date(); date.setDate(date.getDate()+e.dayOffset);
        const weekday = date.toLocaleDateString(undefined, { weekday:'short' });
        return `${weekday}: ${e.title} • ${e.time} • ${e.location}`;
      }).join(' — ');
      marquee.textContent = msg || 'New events posting soon. Stay tuned.';
    }

    function renderHoursGrid() {
      const grid = $('#hoursGrid');
      grid.innerHTML = locations.map(l=>{
        return `
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="text-[18px]" style="font-family:'Fraunces', serif; font-weight:600;">${l.name}</h4>
                <p class="text-sm text-white/70">${l.address}</p>
              </div>
              <span class="text-xs px-2 py-1 rounded-full ${isOpen(l.hours) ? 'text-[var(--green)]' : 'text-[var(--hotPink)]'}" style="background: ${isOpen(l.hours) ? 'rgba(34,214,140,0.12)' : 'rgba(255,45,154,0.12)'}">${isOpen(l.hours)?'Open':'Closed'}</span>
            </div>
            <div class="mt-3 text-sm text-white/80">Today: ${todayHoursStr(l.hours)}</div>
            <div class="mt-2 flex items-center gap-2">
              <a class="text-xs underline" href="https://maps.google.com/?q=${encodeURIComponent(l.address)}" target="_blank" rel="noopener">Directions</a>
              <span class="text-xs text-white/40">•</span>
              <a class="text-xs underline" href="tel:${l.phone.replace(/[^0-9]/g,'')}" >${l.phone}</a>
            </div>
          </div>
        `;
      }).join('');
    }

    function renderFooterLocations() {
      const list = $('#footerLocations');
      list.innerHTML = locations.map(l=>`<li>${l.name} — <span class="text-white/60">${todayHoursStr(l.hours)}</span></li>`).join('');
    }

    function renderLocationsPage() {
      const grid = $('#locationsGrid');
      grid.innerHTML = locations.map(l => `
        <article class="rounded-3xl border border-white/10 bg-white/5 p-5">
          <div class="flex items-center justify-between">
            <h3 class="text-[20px]" style="font-family:'Fraunces', serif; font-weight:600;">${l.name}</h3>
            <span class="text-xs px-2 py-1 rounded-full ${isOpen(l.hours) ? 'text-[var(--green)]' : 'text-[var(--hotPink)]'}" style="background: ${isOpen(l.hours) ? 'rgba(34,214,140,0.12)' : 'rgba(255,45,154,0.12)'}">${isOpen(l.hours)?'Open':'Closed'}</span>
          </div>
          <p class="mt-1 text-sm text-white/70">${l.address}</p>
          <p class="mt-1 text-sm">Today: ${todayHoursStr(l.hours)}</p>
          <div class="mt-3 flex items-center gap-2">
            <a class="px-3 py-1.5 rounded-full text-xs border border-white/15 hover:bg-white/5" href="https://maps.google.com/?q=${encodeURIComponent(l.address)}" target="_blank" rel="noopener">Map</a>
            <button class="px-3 py-1.5 rounded-full text-xs border border-white/15 hover:bg-white/5" data-nav="menu">See menu</button>
          </div>
        </article>
      `).join('');
    }

    // Menu filters state
    const state = {
      menu: {
        location:'all',
        feels:{ calm:0, uplift:0, focus:0 },
        dietary:new Set(),
        search:'',
        sort:'popular'
      }
    };

    function renderMenuLocationChips() {
      const wrap = $('#menuLocationChips');
      wrap.innerHTML = locations.map(l=>`<button class="px-3 py-1.5 rounded-full text-sm bg-white/10 hover:bg-white/20" data-menu-location="${l.id}">${l.name}</button>`).join('');
      // default
      state.menu.location = 'all';
    }

    function menuMatches(item) {
      // location
      if (state.menu.location!=='all' && !item.locations.includes(state.menu.location)) return false;
      // feels minimums
      const { calm, uplift, focus } = state.menu.feels;
      if (calm && item.feels.calm < calm) return false;
      if (uplift && item.feels.uplift < uplift) return false;
      if (focus && item.feels.focus < focus) return false;
      // dietary
      for (const d of state.menu.dietary) {
        if (!item.dietary.includes(d)) return false;
      }
      // search
      if (state.menu.search) {
        const q = state.menu.search.toLowerCase();
        const hay = `${item.name} ${item.desc} ${item.taste.join(' ')} ${item.dietary.join(' ')}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    }

    function sortMenu(list) {
      const s = state.menu.sort;
      const copy = [...list];
      if (s==='price-asc') copy.sort((a,b)=>a.price-b.price);
      else if (s==='price-desc') copy.sort((a,b)=>b.price-a.price);
      else if (s==='calm-desc') copy.sort((a,b)=>b.feels.calm-a.feels.calm);
      else if (s==='uplift-desc') copy.sort((a,b)=>b.feels.uplift-a.feels.uplift);
      else if (s==='focus-desc') copy.sort((a,b)=>b.feels.focus-a.feels.focus);
      else copy.sort((a,b)=>a.name.localeCompare(b.name));
      return copy;
    }

    function renderMenu() {
      const grid = $('#menuGrid');
      const items = sortMenu(menuItems.filter(menuMatches));
      grid.innerHTML = items.map(item=>`
        <article class="group relative rounded-[28px] border border-white/10 bg-white/5 overflow-hidden">
          <button class="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-full text-xs bg-black/50 hover:bg-black/70 border border-white/10 backdrop-blur" data-quick="${item.id}">Quick view</button>
          <img src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" alt="${item.name}" class="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.02]">
          <div class="p-5">
            <div class="flex items-start justify-between gap-3">
              <div>
                <h3 class="text-[18px]" style="font-family:'Fraunces', serif; font-weight:600;">${item.name}</h3>
                <p class="mt-1 text-sm text-white/70 line-clamp-2">${item.desc}</p>
                <div class="mt-3 flex flex-wrap gap-2 text-xs text-white/80">
                  <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10"><i data-lucide="waves" class="h-3.5 w-3.5"></i>${item.feels.calm}/${item.feels.uplift}/${item.feels.focus}</span>
                  <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10"><i data-lucide="sparkle" class="h-3.5 w-3.5"></i>${item.taste.join(' • ')}</span>
                  <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10"><i data-lucide="leaf" class="h-3.5 w-3.5"></i>${item.dietary.join(', ')}</span>
                </div>
              </div>
              <div class="text-right">
                <div class="text-lg">${fmtPrice(item.price)}</div>
                <div class="mt-2">
                  <button class="px-3 py-1.5 rounded-full bg-[var(--hotPink)] text-black text-xs hover:opacity-90" data-quick="${item.id}" data-ripple="">Customize</button>
                </div>
              </div>
            </div>
            <div class="mt-4 flex items-center justify-between text-xs text-white/60">
              <div class="flex items-center gap-2">
                <i data-lucide="map-pin" class="h-3.5 w-3.5"></i>
                <span>${item.locations.length===locations.length ? 'All locations' : item.locations.map(id=>locations.find(l=>l.id===id)?.name).join(', ')}</span>
              </div>
              <button class="underline" data-coa="${item.id}">COA</button>
            </div>
          </div>
        </article>
      `).join('') || `<div class="p-6 rounded-2xl border border-white/10 bg-white/5 text-white/70">No drinks match your filters. Try lowering sliders or clearing dietary filters.</div>`;
      lucide.createIcons();
      bindQuickView();
      bindCOAButtons();
    }

    function bindQuickView() {
      $$('[data-quick]').forEach(btn => {
        btn.addEventListener('click', () => openQuickView(btn.getAttribute('data-quick')));
      });
    }

    function bindCOAButtons() {
      $$('[data-coa]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-coa');
          const item = menuItems.find(i=>i.id===id);
          openCOA(item?.name || 'Certificate', item?.coa);
        });
      });
    }

    function openQuickView(id) {
      const item = menuItems.find(i=>i.id===id);
      if (!item) return;
      $('#qvImg').src = item.img;
      $('#qvImg').alt = item.name;
      $('#qvTitle').textContent = item.name;
      $('#qvDesc').textContent = item.desc;
      $('#qvFeels span').textContent = `calm ${item.feels.calm} • uplift ${item.feels.uplift} • focus ${item.feels.focus}`;
      $('#qvTaste span').textContent = item.taste.join(' • ');
      $('#qvDiet span').textContent = item.dietary.join(', ');
      $('#qvPrice').textContent = fmtPrice(item.price);
      $('#qvCoaBtn').onclick = () => openCOA(item.name, item.coa);
      openModal('quickView');
    }

    function openCOA(title, url) {
      $('#coaTitle').textContent = `Certificate — ${title}`;
      $('#coaFrame').src = url || '';
      $('#coaDownload').href = url || '#';
      openModal('coaModal');
    }

    function openModal(id) {
      const el = document.getElementById(id);
      if (!el) return;
      el.classList.remove('hidden');
      const focusable = el.querySelector('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])');
      setTimeout(()=>focusable?.focus(), 10);
      function esc(e){ if(e.key==='Escape'){ closeModal(id); } }
      el._esc = esc; document.addEventListener('keydown', esc);
    }

    function closeModal(id) {
      const el = document.getElementById(id);
      if (!el) return;
      el.classList.add('hidden');
      if (el._esc) { document.removeEventListener('keydown', el._esc); delete el._esc; }
      if (id==='coaModal') { $('#coaFrame').src=''; }
    }

    function bindModalClose() {
      $$('[data-close]').forEach(btn=>{
        btn.addEventListener('click', ()=> closeModal(btn.getAttribute('data-close')));
      });
    }

    function renderEvents() {
      const list = $('#eventsList');
      const html = events.map(e=>{
        const date = new Date(); date.setDate(date.getDate()+e.dayOffset);
        const dateStr = date.toLocaleDateString(undefined, { month:'short', day:'numeric', weekday:'short' });
        return `
          <article class="rounded-3xl border border-white/10 bg-white/5 p-5 flex flex-col">
            <div class="flex items-center justify-between">
              <span class="px-2 py-0.5 rounded-full text-xs" style="background: rgba(255,138,77,0.15); color: var(--peach);">${e.type}</span>
              <label class="inline-flex items-center gap-2 text-xs">
                <input type="checkbox" class="accent-[var(--hotPink)]" data-remind="${e.id}"> Remind me
              </label>
            </div>
            <h3 class="mt-3 text-[20px]" style="font-family:'Fraunces', serif; font-weight:600;">${e.title}</h3>
            <p class="text-sm text-white/70">${dateStr} • ${e.time} • ${e.location}</p>
            <div class="mt-4 flex items-center gap-3 text-sm">
              <a class="underline" href="/api/ics/${e.id}">Add to calendar</a>
              <button class="px-3 py-1.5 rounded-full border border-white/15 hover:bg-white/5" data-nav="locations">Where</button>
            </div>
          </article>
        `;
      }).join('');
      list.innerHTML = html;
      // restore reminders
      $$('input[data-remind]').forEach(cb=>{
        const id = cb.getAttribute('data-remind');
        cb.checked = localStorage.getItem('remind:'+id)==='1';
        cb.addEventListener('change', ()=>{
          localStorage.setItem('remind:'+id, cb.checked?'1':'0');
          toast(cb.checked ? 'Reminder saved' : 'Reminder removed');
        });
      });
    }

    function renderCalendar(monthOffset=0) {
      const now = new Date();
      now.setDate(1);
      now.setMonth(now.getMonth()+monthOffset);
      $('#calendarGrid').innerHTML = '';
      const startDow = (new Date(now.getFullYear(), now.getMonth(), 1)).getDay();
      const daysInMonth = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
      const frag = document.createDocumentFragment();
      for (let i=0;i<startDow;i++) {
        const d = document.createElement('div');
        d.className='p-2 rounded-lg text-white/20';
        d.textContent=' ';
        frag.appendChild(d);
      }
      for (let day=1; day<=daysInMonth; day++) {
        const d = document.createElement('div');
        d.className = 'p-2 rounded-lg border border-white/10 bg-white/5';
        const thisDate = new Date(now.getFullYear(), now.getMonth(), day);
        const hasEvent = events.some(e=>{
          const ed = new Date(); ed.setDate(ed.getDate()+e.dayOffset);
          return ed.toDateString()===thisDate.toDateString();
        });
        d.innerHTML = `<div class="text-xs text-white/60">${day}</div>${hasEvent?'<div class="mt-1 h-1.5 rounded-full bg-[var(--hotPink)]"></div>':''}`;
        frag.appendChild(d);
      }
      $('#calendarGrid').appendChild(frag);
      // store offset on buttons
      $('#prevMonth').onclick = ()=> renderCalendar(monthOffset-1);
      $('#nextMonth').onclick = ()=> renderCalendar(monthOffset+1);
    }

    function renderShop() {
      const grid = $('#shopGrid');
      grid.innerHTML = shopItems.map(p=>`
        <article class="group rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" alt="${p.name}" class="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.02]">
          <div class="p-5 flex items-center justify-between">
            <div>
              <h3 class="text-[18px]" style="font-family:'Fraunces', serif; font-weight:600;">${p.name}</h3>
              <p class="text-sm text-white/70">${fmtPrice(p.price)}</p>
            </div>
            <button class="px-3 py-1.5 rounded-full bg-[var(--hotPink)] text-black text-xs" data-ripple="">Add</button>
          </div>
        </article>
      `).join('');
    }

    function renderCOAGrid() {
      const grid = $('#coaGrid');
      const term = ($('#coaSearch')?.value || '').toLowerCase();
      const list = coaBatches.filter(b => !term || b.name.toLowerCase().includes(term) || b.id.toLowerCase().includes(term));
      grid.innerHTML = list.map(b=>`
        <article class="rounded-3xl border border-white/10 bg-white/5 p-5">
          <div class="flex items-center justify-between">
            <h3 class="text-[18px]" style="font-family:'Fraunces', serif; font-weight:600;">${b.name}</h3>
            <span class="text-xs text-white/60">${new Date(b.date).toLocaleDateString()}</span>
          </div>
          <div class="mt-4 flex items-center gap-2">
            <button class="px-3 py-1.5 rounded-full border border-white/15 hover:bg-white/5 text-sm" data-open-coa="${b.url}" data-title="${b.name}">View</button>
            <a class="px-3 py-1.5 rounded-full border border-white/15 hover:bg-white/5 text-sm" href="${b.url}" target="_blank" rel="noopener">Download</a>
          </div>
        </article>
      `).join('') || `<div class="p-6 rounded-2xl border border-white/10 bg-white/5 text-white/70">No matching COAs.</div>`;
      $$('[data-open-coa]').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          openCOA(btn.getAttribute('data-title'), btn.getAttribute('data-open-coa'));
        });
      });
    }

    // Interactions
    function bindFilters() {
      // Location chips
      $$('[data-menu-location]').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          state.menu.location = btn.getAttribute('data-menu-location');
          $$('[data-menu-location]').forEach(b => b.classList.toggle('bg-white/20', b===btn));
          renderMenu();
        });
      });
      // Feels sliders
      $('#filterCalm').addEventListener('input', e => { state.menu.feels.calm = +e.target.value; renderMenu(); });
      $('#filterUplift').addEventListener('input', e => { state.menu.feels.uplift = +e.target.value; renderMenu(); });
      $('#filterFocus').addEventListener('input', e => { state.menu.feels.focus = +e.target.value; renderMenu(); });
      // Dietary chips
      $$('#dietaryChips button').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          const tag = btn.getAttribute('data-diet');
          if (state.menu.dietary.has(tag)) state.menu.dietary.delete(tag); else state.menu.dietary.add(tag);
          btn.classList.toggle('bg-white/20');
          btn.setAttribute('aria-pressed', btn.classList.contains('bg-white/20'));
          renderMenu();
        });
      });
      // Search & sort
      $('#menuSearch').addEventListener('input', e=>{ state.menu.search = e.target.value.trim(); renderMenu(); });
      $('#menuSort').addEventListener('change', e=>{ state.menu.sort = e.target.value; renderMenu(); });
    }

    // Simple router
    function showSection(id) {
      $$('section[data-section]').forEach(s => s.classList.add('hidden'));
      const el = document.getElementById(id);
      if (el) el.classList.remove('hidden');
      window.scrollTo({ top:0, behavior:'smooth' });
      // Close UI
      $('#mobileMenu')?.classList.add('hidden');
      $('#moreDrawer')?.classList.add('hidden');
      $('#moreSheet')?.classList.add('hidden');
    }

    function bindNav() {
      $$('[data-nav]').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          const id = btn.getAttribute('data-nav');
          if (!id) return;
          showSection(id);
        });
      });
      // Header More drawer (desktop)
      const moreBtn = $('#moreBtn');
      const drawer = $('#moreDrawer');
      moreBtn?.addEventListener('click', ()=>{
        const open = drawer.classList.contains('hidden');
        drawer.classList.toggle('hidden', !open);
        moreBtn.setAttribute('aria-expanded', String(open));
      });
      // Mobile More opens sheet
      $('#moreBtnMobile')?.addEventListener('click', ()=>{
        $('#moreSheet').classList.remove('hidden');
      });
      // Mobile menu toggle
      const mobileMenuBtn = $('#mobileMenuBtn');
      mobileMenuBtn?.addEventListener('click', ()=>{
        const menu = $('#mobileMenu');
        const open = menu.classList.contains('hidden');
        menu.classList.toggle('hidden', !open);
        mobileMenuBtn.setAttribute('aria-expanded', String(open));
      });
    }

    // Marquee polyfill (pause on hover already handled)
    // Ripple
    function bindRipple() {
      document.addEventListener('click', (e)=>{
        const el = e.target.closest('[data-ripple]');
        if (!el) return;
        const circle = document.createElement('span');
        const rect = el.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        circle.style.width = circle.style.height = size + 'px';
        circle.style.left = (e.clientX - rect.left - size/2) + 'px';
        circle.style.top = (e.clientY - rect.top - size/2) + 'px';
        circle.className = 'pointer-events-none absolute rounded-full bg-black/20 animate-[ripple_600ms_ease-out]';
        el.style.position = 'relative';
        el.style.overflow = 'hidden';
        el.appendChild(circle);
        setTimeout(()=>circle.remove(), 600);
      });
      const style = document.createElement('style');
      style.textContent = `
        @keyframes ripple { from { transform: scale(0); opacity: .6 } to { transform: scale(2.4); opacity: 0 } }
        [data-ripple] span { animation: ripple 600ms ease-out; }
      `;
      document.head.appendChild(style);
    }

    // Forms
    function bindForms() {
      $('#newsletterForm')?.addEventListener('submit', ()=> toast('Subscribed!'));
      $('#footerNewsletter')?.addEventListener('submit', ()=> toast('Subscribed!'));
      $('#caterForm')?.addEventListener('submit', ()=> toast('Thanks! We’ll reply within 24h.'));
      $('#contactForm')?.addEventListener('submit', ()=> toast('Message sent. We’ll be in touch.'));
    }

    function bindGlobals() {
      // Close handlers for modals/sheets
      bindModalClose();
      // Clicking backdrop close
      document.addEventListener('click', (e)=>{
        const closeTarget = e.target.getAttribute?.('data-close');
        if (!closeTarget && (e.target.id==='quickView' || e.target.id==='coaModal' || e.target.id==='moreSheet')) {
          closeModal(e.target.id);
        }
      });
      // Back to top
      $('#backToTop')?.addEventListener('click', ()=> window.scrollTo({ top:0, behavior:'smooth' }));
      // Footer year
      $('#year').textContent = new Date().getFullYear();
      // COA search
      $('#coaSearch')?.addEventListener('input', renderCOAGrid);
      // Open sheet links inside sheet
      $('#moreSheet')?.addEventListener('click', (e)=>{
        const btn = e.target.closest('[data-nav]');
        if (btn) { showSection(btn.getAttribute('data-nav')); }
      });
      // More drawer close on outside click
      document.addEventListener('click', (e)=>{
        if (!$('#moreDrawer')?.contains(e.target) && e.target !== $('#moreBtn')) {
          $('#moreDrawer')?.classList.add('hidden');
          $('#moreBtn')?.setAttribute('aria-expanded','false');
        }
      });
    }

    function initIcons() {
      lucide.createIcons();
    }

    // Initialize
    document.addEventListener('DOMContentLoaded', ()=>{
      initIcons();
      renderHeroLocations();
      renderTonightTicker();
      renderHoursGrid();
      renderFooterLocations();
      renderLocationsPage();
      renderMenuLocationChips();
      renderMenu();
      renderEvents();
      renderCalendar();
      renderShop();
      renderCOAGrid();
      bindFilters();
      bindNav();
      bindRipple();
      bindForms();
      bindGlobals();
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
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" style={{opacity: `0.07`, backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`, backgroundSize: `300px 300px`, backgroundRepeat: `repeat`}}></div>
<div className="relative z-10 min-h-screen flex flex-col">

<header className="sticky top-0 z-40 bg-black/80 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 md:px-6">
<div className="flex h-16 items-center justify-between">
<button aria-label="Go to Home" className="flex items-center gap-2 group" data-nav="home">
<div className="h-8 w-8 rounded-full bg-[var(--hotPink)] text-black grid place-items-center font-semibold tracking-tight" style={{letterSpacing: `-0.02em`}}>K</div>
<span className="font-semibold text-white/90 group-hover:text-white transition-colors" style={{fontFamily: `'Fraunces', serif`, letterSpacing: `-0.01em`}}>Kava & Company</span>
</button>

<nav className="hidden md:flex items-center gap-2">
<button className="px-4 py-2 rounded-full text-sm hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2" data-nav="menu" style={{outlineColor: `var(--hotPink)`}}>Menu</button>
<button className="px-4 py-2 rounded-full text-sm hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2" data-nav="events" style={{outlineColor: `var(--hotPink)`}}>Events</button>
<button className="px-4 py-2 rounded-full text-sm hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2" data-nav="locations" style={{outlineColor: `var(--hotPink)`}}>Locations & Hours</button>
<button className="px-4 py-2 rounded-full text-sm hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2" data-nav="shop" style={{outlineColor: `var(--hotPink)`}}>Shop</button>
<div className="h-6 w-px bg-white/10 mx-2"></div>
<button aria-controls="moreDrawer" aria-expanded="false" className="flex items-center gap-2 px-3 py-2 rounded-full text-sm hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2" id="moreBtn" style={{outlineColor: `var(--hotPink)`}}>
<i className="h-4 w-4" data-lucide="sparkles"></i>
              More
            </button>
</nav>

<div className="hidden md:flex items-center gap-3">
<button className="relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium bg-[var(--hotPink)] text-black hover:opacity-90 active:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2" data-nav="events" data-ripple="" style={{outlineColor: `var(--green)`}}>
              See Tonight’s Vibes
            </button>
</div>

<button aria-controls="mobileMenu" aria-expanded="false" aria-label="Open menu" className="md:hidden p-2 rounded-full hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2" id="mobileMenuBtn" style={{outlineColor: `var(--hotPink)`}}>
<i className="h-6 w-6" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-white/10 bg-[var(--surfaceDark)]" id="mobileMenu">
<div className="px-4 py-3 flex flex-wrap gap-2">
<button className="px-4 py-2 rounded-full text-sm bg-white/5" data-nav="menu">Menu</button>
<button className="px-4 py-2 rounded-full text-sm bg-white/5" data-nav="events">Events</button>
<button className="px-4 py-2 rounded-full text-sm bg-white/5" data-nav="locations">Locations & Hours</button>
<button className="px-4 py-2 rounded-full text-sm bg-white/5" data-nav="shop">Shop</button>
<button aria-controls="moreDrawer" aria-expanded="false" className="px-4 py-2 rounded-full text-sm bg-white/5" id="moreBtnMobile">More</button>
</div>
</div>
</header>

<div aria-modal="true" className="fixed inset-x-0 top-16 z-40 hidden md:block" id="moreDrawer" role="dialog">
<div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-[var(--surfaceDark)]/95 p-6">
<div className="flex flex-wrap items-center gap-2">
<button className="px-4 py-2 rounded-full text-sm bg-white/5 hover:bg-white/10" data-nav="firstTimers">First Timers</button>
<button className="hover:bg-white/10 text-sm bg-white/5 rounded-full pt-2 pr-4 pb-2 pl-4" data-nav="lab">Lab Tests / COAs</button>
<button className="px-4 py-2 rounded-full text-sm bg-white/5 hover:bg-white/10" data-nav="behind">Behind the Bar</button>
<button className="px-4 py-2 rounded-full text-sm bg-white/5 hover:bg-white/10" data-nav="cater">Cater with Us</button>
<button className="px-4 py-2 rounded-full text-sm bg-white/5 hover:bg-white/10" data-nav="contact">Contact</button>
</div>
</div>
</div>

<nav aria-label="Primary mobile" className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[var(--surfaceDark)]/95 border-t border-white/10">
<div className="grid grid-cols-5">
<button className="flex flex-col items-center justify-center gap-1 py-2 text-xs" data-nav="home"><i className="h-5 w-5" data-lucide="home"></i>Home</button>
<button className="flex flex-col items-center justify-center gap-1 py-2 text-xs" data-nav="menu"><i className="h-5 w-5" data-lucide="cup-soda"></i>Menu</button>
<button className="flex flex-col items-center justify-center gap-1 py-2 text-xs" data-nav="events"><i className="h-5 w-5" data-lucide="calendar-days"></i>Events</button>
<button className="flex flex-col items-center justify-center gap-1 py-2 text-xs" data-nav="shop"><i className="h-5 w-5" data-lucide="shopping-bag"></i>Shop</button>
<button className="flex flex-col items-center justify-center gap-1 py-2 text-xs" data-nav="locations"><i className="h-5 w-5" data-lucide="map-pin"></i>Locations</button>
</div>
</nav>

<main className="flex-1">

<section className="block" data-section="" id="home">

<div className="relative overflow-hidden" style={{background: `radial-gradient(1200px 400px at 20% 0%, rgba(255,45,154,0.12), transparent 60%)`}}>

<svg aria-hidden="true" className="absolute -top-24 left-0 w-full" viewBox="0 0 1440 320">
<path d="M0,128L120,106.7C240,85,480,43,720,42.7C960,43,1200,85,1320,106.7L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z" fill="url(#grad1)" fillOpacity="0.15"></path>
<defs>
<lineargradient id="grad1" x1="0" x2="1">
<stop offset="0%" stop-color="#FF2D9A"></stop>
<stop offset="100%" stop-color="#FF8A4D"></stop>
</lineargradient>
</defs>
</svg>
<div className="mx-auto max-w-7xl px-4 md:px-6">
<div className="grid md:grid-cols-2 gap-10 items-end pt-16 md:pt-24">
<div className="relative">

<div className="absolute -inset-x-10 -top-10 -z-10 blur-3xl" style={{height: `240px`, background: `radial-gradient(300px 120px at 25% 30%, rgba(255,45,154,0.28), transparent 60%)`}}></div>
<h1 className="text-[44px] sm:text-[56px] md:text-[64px] leading-[0.95] tracking-tight" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`}}>
                  Sip calm. Stay social.
                </h1>
<p className="mt-4 text-white/80 text-[18px]" style={{fontFamily: `'Signika', sans-serif`}}>
                  The late-night lounge where your nervous system can exhale
                  and your people can laugh a little louder.
                </p>
<p className="mt-2 text-white/70 text-[18px]" style={{fontFamily: `'Signika', sans-serif`}}>
                  Ancient botanicals. Modern ritual. Zero pressure to be
                  anything but yourself.
                </p>
<div className="mt-6 flex flex-wrap gap-3">
<button className="relative overflow-hidden px-5 py-3 rounded-full bg-[var(--hotPink)] text-black text-sm font-medium hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2" data-nav="events" data-ripple="" style={{outlineColor: `var(--green)`}}>
                    See Tonight’s Vibes
                  </button>
<button className="relative overflow-hidden px-5 py-3 rounded-full border border-white/20 text-sm hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2" data-nav="firstTimers" data-ripple="" style={{outlineColor: `var(--hotPink)`}}>
                    First-Timer Guide
                  </button>
</div>

<div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 rounded-[24px] bg-white/5 border border-white/10">
<div className="flex items-center gap-2 rounded-full px-3 py-1 text-sm" id="openBadge" style={{background: `rgba(34,214,140,0.12)`, color: `var(--green)`}}>
<span className="h-2 w-2 rounded-full" style={{background: `var(--green)`}}></span>
                    Open now
                  </div>
<div className="flex items-center gap-3">
<label className="sr-only" htmlFor="heroLocation">Choose location</label>
<select className="bg-transparent text-sm rounded-full px-3 py-1 border border-white/10 hover:border-white/20 focus-visible:outline-2 focus-visible:outline-offset-2" id="heroLocation" style={{outlineColor: `var(--hotPink)`}}></select>
<p className="text-sm text-white/70" id="heroHours">Closes at —</p>
</div>
</div>
</div>

<div className="relative h-80 md:h-96">
<div className="absolute right-8 top-0 rotate-6 origin-bottom shadow-2xl" style={{borderRadius: `16px`, background: `#0F0F14`, padding: `10px 10px 50px 10px`, outline: `1px solid rgba(255,255,255,0.05)`}}>
<img alt="Warm kava bowl on the bar" className="h-52 w-40 object-cover rounded-[12px]" src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1200&auto=format&fit=crop" />
<div className="absolute left-3 -bottom-4 rotate-[-6deg] rounded-full px-3 py-1 text-xs" style={{background: `var(--peach)`, color: `var(--inkOnLight)`}}>mellow magic</div>
</div>
<div className="absolute left-6 bottom-2 -rotate-6 origin-bottom shadow-2xl" style={{borderRadius: `16px`, background: `#0F0F14`, padding: `10px 10px 50px 10px`, outline: `1px solid rgba(255,255,255,0.05)`}}>
<img alt="Friends laughing at a cozy lounge" className="h-64 w-48 object-cover rounded-[12px]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80&auto=format&fit=crop" />
<div className="absolute right-3 -bottom-4 rotate-[5deg] rounded-full px-3 py-1 text-xs" style={{background: `var(--hotPink)`, color: `black`}}>social calm</div>
</div>
<div className="absolute -right-2 bottom-10 rotate-3 origin-bottom shadow-2xl" style={{borderRadius: `16px`, background: `#0F0F14`, padding: `10px 10px 50px 10px`, outline: `1px solid rgba(255,255,255,0.05)`}}>
<img alt="Botanical ingredients on a wooden board" className="h-40 w-32 object-cover rounded-[12px]" src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop" />
<div className="absolute left-3 -bottom-4 rotate-[2deg] rounded-full px-3 py-1 text-xs" style={{background: `#fff`, color: `var(--inkOnLight)`}}>island apothecary</div>
</div>
<div aria-hidden="true" className="absolute -top-6 -left-2 text-5xl animate-bounce">🥥</div>
</div>
</div>
</div>

<svg aria-hidden="true" className="w-full translate-y-4" viewBox="0 0 1440 145">
<path className="text-black" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,145L1360,145C1280,145,1120,145,960,145C800,145,640,145,480,145C320,145,160,145,80,145L0,145Z" fill="currentColor"></path>
</svg>
</div>

<div aria-label="Tonight at Kava" className="border-y border-white/10 bg-[var(--surfaceDark)]">
<div className="mx-auto max-w-7xl px-0 md:px-0">
<marquee behavior="scroll" className="py-2 text-sm text-white/80" direction="left" id="tonightTicker" onMouseOut={(e) => { e.currentTarget.start(); }} onMouseOver={(e) => { e.currentTarget.stop(); }} scrollamount="4"></marquee>
</div>
</div>

<section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
<div className="grid md:grid-cols-3 gap-8 items-start">
<div className="md:col-span-2">
<h2 className="text-[28px] md:text-[44px] tracking-tight" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`, color: `var(--hotPink)`}}>
                What’s our thing?
              </h2>
<p className="mt-3 text-white/80 text-[18px]">It’s not a bar pretending to be a spa. It’s not a café pretending to be a club.</p>
<p className="text-white/80 text-[18px]">Kava & Company is the sweet spot in between. Warm cups, chilled shoulders, real connection. Come for the calm, stay for the conversation.</p>
</div>
<div className="relative">
<div className="rounded-[24px] p-5 border border-white/10 bg-white/5" style={{maskImage: `radial-gradient(120% 120% at 50% 0%, black 80%, transparent 100%)`}}>
<p className="text-white/90">“We built Kava & Company because we wanted a place where nights feel kind to your body and generous to your spirit.”</p>
<p className="mt-3 text-white/60 text-sm">— Daniel Cho</p>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 md:px-6">
<div className="rounded-[32px] border border-white/10 bg-[var(--surfaceDim)] p-6 md:p-10" style={{backgroundImage: `radial-gradient(600px 200px at 80% 0%, rgba(255,45,154,0.08), transparent 60%)`}}>
<div className="grid md:grid-cols-2 gap-10">
<div>
<h3 className="text-[24px] md:text-[28px] tracking-tight" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`, color: `var(--hotPink)`}}>Choose your mood</h3>
<p className="mt-3 text-white/80">Pick a bowl by how you want to feel.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full text-sm" style={{background: `rgba(255,255,255,0.06)`, border: `1px solid rgba(255,255,255,0.12)`}}>Calm</span>
<span className="px-3 py-1 rounded-full text-sm" style={{background: `rgba(255,255,255,0.06)`, border: `1px solid rgba(255,255,255,0.12)`}}>Uplift</span>
<span className="px-3 py-1 rounded-full text-sm" style={{background: `rgba(255,255,255,0.06)`, border: `1px solid rgba(255,255,255,0.12)`}}>Focus</span>
</div>
<p className="mt-3 text-white/70">Add a flavor twist if you like it creamy, citrusy, or a little wild. Your bartender will guide you like a friend who knows your order by heart.</p>
<div className="mt-6">
<button className="relative overflow-hidden px-5 py-3 rounded-full bg-[var(--hotPink)] text-black text-sm font-medium hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2" data-nav="menu" data-ripple="" style={{outlineColor: `var(--green)`}}>
                      Explore the Menu
                    </button>
</div>
</div>
<div className="grid grid-cols-2 gap-4 items-end">

<div className="p-4 rounded-[20px] border border-white/10 bg-white/5">
<div className="flex items-center gap-2 text-sm">
<i className="h-4 w-4" data-lucide="waves"></i>
                      Feels like
                    </div>
<div className="mt-3 space-y-3">
<div>
<label className="text-xs text-white/70">Calm</label>
<input aria-label="Calm slider" className="w-full" max="5" min="0" style={{accentColor: `#FF2D9A`}} type="range" value="3" />
</div>
<div>
<label className="text-xs text-white/70">Uplift</label>
<input aria-label="Uplift slider" className="w-full" max="5" min="0" style={{accentColor: `#FF2D9A`}} type="range" value="2" />
</div>
<div>
<label className="text-xs text-white/70">Focus</label>
<input aria-label="Focus slider" className="w-full" max="5" min="0" style={{accentColor: `#FF2D9A`}} type="range" value="4" />
</div>
</div>
</div>
<div className="p-4 rounded-[20px] border border-white/10 bg-white/5">
<div className="flex items-center gap-2 text-sm">
<i className="h-4 w-4" data-lucide="sparkle"></i>
                      Taste
                    </div>
<div className="mt-3 flex flex-wrap gap-2">
<button className="px-3 py-1 rounded-full text-sm bg-white/10 hover:bg-white/20">earthy</button>
<button className="px-3 py-1 rounded-full text-sm bg-white/10 hover:bg-white/20">creamy</button>
<button className="px-3 py-1 rounded-full text-sm bg-white/10 hover:bg-white/20">citrus</button>
<button className="px-3 py-1 rounded-full text-sm bg-white/10 hover:bg-white/20">spice</button>
</div>
<div className="mt-4">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs" style={{background: `rgba(255,138,77,0.18)`, color: `var(--peach)`}}>
<i className="h-4 w-4" data-lucide="leaf"></i>
                        vegan, caffeine-free
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
<div className="flex items-end justify-between">
<div>
<h3 className="text-[24px] md:text-[28px] tracking-tight" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`, color: `var(--hotPink)`}}>This week at K&C</h3>
<p className="text-white/70">From acoustic sets and breathwork to game tournaments and vendor markets, the vibe changes, the welcome doesn’t.</p>
</div>
<button className="hidden md:inline-flex px-4 py-2 rounded-full border border-white/15 text-sm hover:bg-white/5" data-nav="events">Open Calendar</button>
</div>

<div className="mt-6 grid md:grid-cols-3 gap-6">
<div className="relative p-5 rounded-[28px] border border-white/10 bg-white/5" style={{maskImage: `radial-gradient(130% 140% at 50% -20%, black 70%, transparent 100%)`}}>
<div className="flex items-center gap-2 text-xs text-white/70">
<span className="px-2 py-0.5 rounded-full" style={{background: `rgba(255,138,77,0.15)`, color: `var(--peach)`}}>Live Music</span>
<span className="px-2 py-0.5 rounded-full" style={{background: `rgba(255,45,154,0.15)`, color: `var(--hotPink)`}}>Save to Calendar</span>
</div>
<h4 className="mt-3 text-[20px] tracking-tight" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`}}>Open-Mic Poetry</h4>
<p className="text-sm text-white/70">8–10 • San Marco • Bring a piece or just your ears</p>
<div className="mt-4 flex items-center gap-3">
<a className="text-sm underline hover:no-underline" href="/api/ics/openmic">ICS</a>
<label className="inline-flex items-center gap-2 text-sm">
<input className="accent-[var(--hotPink)]" data-remind="openmic" type="checkbox" /> Remind Me
                </label>
</div>
</div>
<div className="relative p-5 rounded-[28px] border border-white/10 bg-white/5" style={{maskImage: `radial-gradient(130% 140% at 50% -20%, black 70%, transparent 100%)`}}>
<div className="flex items-center gap-2 text-xs text-white/70">
<span className="px-2 py-0.5 rounded-full" style={{background: `rgba(255,45,154,0.15)`, color: `var(--hotPink)`}}>Tournament</span>
</div>
<h4 className="mt-3 text-[20px] tracking-tight" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`}}>Game Night Tournament</h4>
<p className="text-sm text-white/70">Winner gets a free bowl + bragging rights</p>
<div className="mt-4 flex items-center gap-3">
<button className="px-4 py-2 rounded-full bg-[var(--hotPink)] text-black text-sm" data-nav="events">Sign Me Up</button>
<a className="text-sm underline" href="/api/ics/gamenight">ICS</a>
</div>
</div>
<div className="relative p-5 rounded-[28px] border border-white/10 bg-white/5" style={{maskImage: `radial-gradient(130% 140% at 50% -20%, black 70%, transparent 100%)`}}>
<div className="flex items-center gap-2 text-xs text-white/70">
<span className="px-2 py-0.5 rounded-full" style={{background: `rgba(34,214,140,0.18)`, color: `var(--green)`}}>Yoga</span>
</div>
<h4 className="mt-3 text-[20px] tracking-tight" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`}}>Sunset Yoga</h4>
<p className="text-sm text-white/70">Mat, water, open heart • All levels welcome</p>
<div className="mt-4 flex items-center gap-3">
<button className="px-4 py-2 rounded-full border border-white/15 text-sm hover:bg-white/5" data-nav="events">Reserve</button>
<a className="text-sm underline" href="/api/ics/yoga">ICS</a>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 relative">
<div className="rounded-[32px] border border-white/10 bg-white/5 p-6 md:p-10">
<div className="grid md:grid-cols-3 gap-8">
<div className="md:col-span-2">
<h3 className="text-[24px] md:text-[28px] tracking-tight" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`, color: `var(--hotPink)`}}>Hours & Locations</h3>
<p className="text-white/80">Open early for gentle starts. Open late for softer endings.</p>
<div className="mt-4 grid sm:grid-cols-2 gap-4" id="hoursGrid"></div>
</div>
<div>
<h4 className="text-[20px] tracking-tight" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`}}>Happy Hour</h4>
<ul className="mt-3 space-y-2 text-white/80" id="happyList">
<li>Morning reset 9–11</li>
<li>Afternoon mellow 2–4</li>
<li>Nightcap 10–12</li>
</ul>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 md:px-6 pb-28 md:pb-32">
<div className="rounded-[999px] border border-white/10 bg-[var(--surfaceDark)] p-3 md:p-4 flex flex-col md:flex-row md:items-center gap-3">
<div className="flex-1">
<p className="text-[18px] text-white/90" style={{fontFamily: `'Signika', sans-serif`}}>
                Be the friend who always knows what’s on.
                <span className="text-white/70">Events, drops, tiny perks. No spam. Pinky promise.</span>
</p>
</div>
<form className="flex gap-2 items-center" id="newsletterForm" onSubmit={(e) => { return false }}>
<input aria-label="Email address" className="bg-transparent placeholder:text-white/40 rounded-full px-4 py-3 border border-white/15 w-56 focus-visible:outline-2 focus-visible:outline-offset-2" placeholder="Your best email" required style={{outlineColor: `var(--hotPink)`}} type="email" />
<button className="relative overflow-hidden px-5 py-3 rounded-full bg-[var(--hotPink)] text-black text-sm font-medium hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2" data-ripple="" style={{outlineColor: `var(--green)`}}>
                Subscribe
              </button>
</form>
</div>
</section>
</section>

<section className="hidden" data-section="" id="menu">
<div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
<h2 className="text-[44px] tracking-tight" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`, color: `var(--hotPink)`}}>Your mood board, in a cup.</h2>
<p className="mt-3 text-white/80 text-[18px] max-w-2xl">
            We build drinks like little rituals. Clean ingredients. Honest doses. Tasting notes that make sense.
            Every item lists how it feels (calm, uplift, focus), how it tastes (earthy, creamy, citrus), and any dietary notes.
          </p>

<div className="mt-6 rounded-[24px] border border-white/10 bg-white/5 p-4">
<div className="grid md:grid-cols-5 gap-4">
<div className="md:col-span-2">
<label className="text-sm text-white/70">Location</label>
<div className="mt-1 flex gap-2">
<button className="px-3 py-1.5 rounded-full text-sm bg-white/10 hover:bg-white/20" data-menu-location="all">All</button>
<div className="flex gap-2" id="menuLocationChips"></div>
</div>
</div>
<div>
<label className="text-sm text-white/70">Feels like</label>
<div className="mt-1 space-y-2">
<div className="flex items-center gap-2"><span className="text-xs w-12">Calm</span><input aria-label="Filter Calm" className="w-full" id="filterCalm" max="5" min="0" style={{accentColor: `#FF2D9A`}} type="range" value="0" /></div>
<div className="flex items-center gap-2"><span className="text-xs w-12">Uplift</span><input aria-label="Filter Uplift" className="w-full" id="filterUplift" max="5" min="0" style={{accentColor: `#FF2D9A`}} type="range" value="0" /></div>
<div className="flex items-center gap-2"><span className="text-xs w-12">Focus</span><input aria-label="Filter Focus" className="w-full" id="filterFocus" max="5" min="0" style={{accentColor: `#FF2D9A`}} type="range" value="0" /></div>
</div>
</div>
<div>
<label className="text-sm text-white/70">Dietary</label>
<div className="mt-1 flex flex-wrap gap-2" id="                dietaryChips">
<button aria-pressed="false" className="px-3 py-1.5 rounded-full text-sm bg-white/10 hover:bg-white/20" data-diet="vegan">Vegan</button>
<button aria-pressed="false" className="px-3 py-1.5 rounded-full text-sm bg-white/10 hover:bg-white/20" data-diet="gluten-free">Gluten-free</button>
<button aria-pressed="false" className="px-3 py-1.5 rounded-full text-sm bg-white/10 hover:bg-white/20" data-diet="caffeine-free">Caffeine-free</button>
</div>
</div>
<div>
<label className="text-sm text-white/70" htmlFor="menuSearch">Search & Sort</label>
<div className="mt-1 flex gap-2">
<input aria-label="Search menu" className="bg-transparent placeholder:text-white/40 rounded-full px-3 py-1.5 border border-white/15 w-full focus-visible:outline-2 focus-visible:outline-offset-2" id="menuSearch" placeholder="Search drinks..." style={{outlineColor: `var(--hotPink)`}} type="search" />
<select aria-label="Sort menu" className="bg-transparent rounded-full px-3 py-1.5 border border-white/15 focus-visible:outline-2 focus-visible:outline-offset-2" id="menuSort" style={{outlineColor: `var(--hotPink)`}}>
<option value="popular">Popular</option>
<option value="price-asc">Price: Low</option>
<option value="price-desc">Price: High</option>
<option value="calm-desc">Most Calm</option>
<option value="uplift-desc">Most Uplift</option>
<option value="focus-desc">Most Focus</option>
</select>
</div>
</div>
</div>
</div>

<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="menuGrid"></div>

<div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/70">
<span className="inline-flex items-center gap-2"><i className="h-4 w-4" data-lucide="waves"></i> feels: calm • uplift • focus</span>
<span aria-hidden="true">•</span>
<span className="inline-flex items-center gap-2"><i className="h-4 w-4" data-lucide="sparkle"></i> taste: earthy • creamy • citrus • spice</span>
<span aria-hidden="true">•</span>
<span className="inline-flex items-center gap-2"><i className="h-4 w-4" data-lucide="leaf"></i> dietary shown per item</span>
</div>
</div>
</section>

<section className="hidden" data-section="" id="events">
<div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
<div className="flex items-end justify-between">
<div>
<h2 className="text-[44px] tracking-tight" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`, color: `var(--hotPink)`}}>Upcoming vibes</h2>
<p className="mt-2 text-white/70">Workshops, live sets, mindful hangs. RSVP optional, enthusiasm welcome.</p>
</div>
<a className="hidden md:inline-flex px-4 py-2 rounded-full border border-white/15 text-sm hover:bg-white/5" href="#calendar">Jump to Calendar</a>
</div>

<div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="eventsList"></div>

<div className="mt-10 rounded-[24px] border border-white/10 bg-white/5 p-5" id="calendar">
<div className="flex items-center justify-between">
<h3 className="text-[20px] tracking-tight" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`}}>This Month</h3>
<div className="flex items-center gap-2">
<button aria-label="Previous month" className="p-2 rounded-full hover:bg-white/10" id="prevMonth"><i className="h-4 w-4" data-lucide="chevron-left"></i></button>
<button aria-label="Next month" className="p-2 rounded-full hover:bg-white/10" id="nextMonth"><i className="h-4 w-4" data-lucide="chevron-right"></i></button>
</div>
</div>
<div className="mt-4 grid grid-cols-7 gap-2 text-center text-sm" id="calendarGrid"></div>
</div>
</div>
</section>

<section className="hidden" data-section="" id="locations">
<div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
<h2 className="text-[44px] tracking-tight" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`, color: `var(--hotPink)`}}>Find your K&C</h2>
<p className="mt-3 text-white/80">Different corners, same welcome. Choose a lounge and we’ll show you what’s nearby and when we pour.</p>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="locationsGrid"></div>
</div>
</section>

<section className="hidden" data-section="" id="shop">
<div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
<h2 className="text-[44px] tracking-tight" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`, color: `var(--hotPink)`}}>Bring the ritual home</h2>
<p className="mt-3 text-white/80 max-w-2xl">House blends, beautiful bowls, and little tools that make your evening feel like a ceremony.</p>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="shopGrid"></div>
</div>
</section>

<section className="hidden" data-section="" id="firstTimers">
<div className="mx-auto max-w-3xl px-4 md:px-6 py-12 md:py-16">
<h2 className="text-[44px] tracking-tight" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`, color: `var(--hotPink)`}}>First time? Welcome.</h2>
<p className="mt-3 text-white/80">Here’s how to have a cozy, confident first visit.</p>
<div className="mt-6 space-y-4">
<details className="group rounded-2xl border border-white/10 bg-white/5 p-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium">1) Start gentle</span>
<i className="h-5 w-5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-2 text-white/70">Tell your bartender how you want to feel. We’ll guide you to a lighter bowl and you can add from there.</p>
</details>
<details className="group rounded-2xl border border-white/10 bg-white/5 p-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium">2) Sip slow</span>
<i className="h-5 w-5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-2 text-white/70">Give it 10–15 minutes. Kava builds a mellow. You’ll know when you’ve hit your sweet spot.</p>
</details>
<details className="group rounded-2xl border border-white/10 bg-white/5 p-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium">3) Pair with snacks</span>
<i className="h-5 w-5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-2 text-white/70">We’ve got light bites to keep things grounded. Ask about dairy-free or gluten-free options.</p>
</details>
<details className="group rounded-2xl border border-white/10 bg-white/5 p-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium">4) Safety & interactions</span>
<i className="h-5 w-5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-2 text-white/70">Kava is non-alcoholic. If you take medications or have liver concerns, chat with your clinician. Our team can share lab results.</p>
</details>
</div>
</div>
</section>

<section className="hidden" data-section="" id="lab">
<div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
<div className="flex items-end justify-between">
<div>
<h2 className="text-[44px] tracking-tight" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`, color: `var(--hotPink)`}}>Lab tests & COAs</h2>
<p className="mt-2 text-white/80">Every batch is third-party tested. Browse certificates and ingredient specs.</p>
</div>
<div className="flex gap-2">
<input aria-label="Search COAs" className="bg-transparent placeholder:text-white/40 rounded-full px-3 py-2 border border-white/15 focus-visible:outline-2 focus-visible:outline-offset-2" id="coaSearch" placeholder="Search batches..." style={{outlineColor: `var(--hotPink)`}} type="search" />
<button className="px-4 py-2 rounded-full border border-white/15 text-sm hover:bg-white/5" id="uploadCoaBtn">Upload</button>
</div>
</div>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="coaGrid"></div>
</div>
</section>

<section className="hidden" data-section="" id="behind">
<div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
<h2 className="text-[44px] tracking-tight" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`, color: `var(--hotPink)`}}>Behind the bar</h2>
<p className="mt-3 text-white/80 max-w-2xl">Meet the humans, farms, and craft behind every pour.</p>
<div className="mt-6 grid md:grid-cols-3 gap-6">
<article className="rounded-3xl border border-white/10 bg-white/5 p-5">
<img alt="Farmer holding kava roots" className="rounded-2xl h-40 w-full object-cover" src="https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?q=80&w=1200&auto=format&fit=crop" />
<h3 className="mt-4 text-[20px]" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`}}>Farm partners</h3>
<p className="text-sm text-white/70">Direct relationships in Vanuatu and Fiji ensure quality and fair pay.</p>
</article>
<article className="rounded-3xl border border-white/10 bg-white/5 p-5">
<img alt="Bartender preparing a drink" className="rounded-2xl h-40 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<h3 className="mt-4 text-[20px]" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`}}>Our craft</h3>
<p className="text-sm text-white/70">We grind, strain, and blend in-house with batch-tracked consistency.</p>
</article>
<article className="rounded-3xl border border-white/10 bg-white/5 p-5">
<img alt="Glassware and tools" className="rounded-2xl h-40 w-full object-cover" src="https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop" />
<h3 className="mt-4 text-[20px]" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`}}>Sourcing standards</h3>
<p className="text-sm text-white/70">Noble cultivars, solvent-free extractions, and transparent labels.</p>
</article>
</div>
</div>
</section>

<section className="hidden" data-section="" id="cater">
<div className="mx-auto max-w-4xl px-4 md:px-6 py-12 md:py-16">
<h2 className="text-[44px] tracking-tight" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`, color: `var(--hotPink)`}}>Cater with us</h2>
<p className="mt-3 text-white/80">We bring the mellow to weddings, offsites, and backyard hangs.</p>
<form className="mt-6 grid md:grid-cols-2 gap-4" id="caterForm" onSubmit={(e) => { return false; }}>
<div className="md:col-span-2">
<label className="text-sm text-white/70" htmlFor="eventType">Event type</label>
<input className="mt-1 bg-transparent rounded-full px-4 py-3 border border-white/15 w-full placeholder:text-white/40 focus-visible:outline-2 focus-visible:outline-offset-2" id="eventType" placeholder="Retreat, wedding, office social..." required style={{outlineColor: `var(--hotPink)`}} type="text" />
</div>
<div>
<label className="text-sm text-white/70" htmlFor="eventDate">Date</label>
<input className="mt-1 bg-transparent rounded-full px-4 py-3 border border-white/15 w-full focus-visible:outline-2 focus-visible:outline-offset-2" id="eventDate" required style={{outlineColor: `var(--hotPink)`}} type="date" />
</div>
<div>
<label className="text-sm text-white/70" htmlFor="guestCount">Guest count</label>
<input className="mt-1 bg-transparent rounded-full px-4 py-3 border border-white/15 w-full placeholder:text-white/40 focus-visible:outline-2 focus-visible:outline-offset-2" id="guestCount" max="500" min="5" placeholder="Approximate" required style={{outlineColor: `var(--hotPink)`}} type="number" />
</div>
<div className="md:col-span-2">
<label className="text-sm text-white/70" htmlFor="eventNotes">Notes</label>
<textarea className="mt-1 bg-transparent rounded-2xl px-4 py-3 border border-white/15 w-full placeholder:text-white/40 focus-visible:outline-2 focus-visible:outline-offset-2" id="eventNotes" placeholder="What vibe are you going for?" rows="4" style={{outlineColor: `var(--hotPink)`}}></textarea>
</div>
<div className="md:col-span-2">
<button className="relative overflow-hidden px-5 py-3 rounded-full bg-[var(--hotPink)] text-black text-sm font-medium hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2" data-ripple="" style={{outlineColor: `var(--green)`}}>
                Request a quote
              </button>
</div>
</form>
</div>
</section>

<section className="hidden" data-section="" id="contact">
<div className="mx-auto max-w-3xl px-4 md:px-6 py-12 md:py-16">
<h2 className="text-[44px] tracking-tight" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`, color: `var(--hotPink)`}}>Say hello</h2>
<p className="mt-3 text-white/80">Ask a question, propose an event, or just tell us your favorite bowl.</p>
<form className="mt-6 grid md:grid-cols-2 gap-4" id="contactForm" onSubmit={(e) => { return false; }}>
<div>
<label className="text-sm text-white/70" htmlFor="name">Name</label>
<input className="mt-1 bg-transparent rounded-full px-4 py-3 border border-white/15 w-full placeholder:text-white/40" id="name" placeholder="Your name" required type="text" />
</div>
<div>
<label className="text-sm text-white/70" htmlFor="email">Email</label>
<input className="mt-1 bg-transparent rounded-full px-4 py-3 border border-white/15 w-full placeholder:text-white/40" id="email" placeholder="you@example.com" required type="email" />
</div>
<div className="md:col-span-2">
<label className="text-sm text-white/70" htmlFor="message">Message</label>
<textarea className="mt-1 bg-transparent rounded-2xl px-4 py-3 border border-white/15 w-full placeholder:text-white/40" id="message" placeholder="What’s on your mind?" required rows="5"></textarea>
</div>
<div className="md:col-span-2">
<button className="relative overflow-hidden px-5 py-3 rounded-full bg-[var(--hotPink)] text-black text-sm font-medium hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2" data-ripple="" style={{outlineColor: `var(--green)`}}>
                Send message
              </button>
</div>
</form>
</div>
</section>
</main>

<footer className="mt-auto border-t border-white/10 bg-[var(--surfaceDark)]">
<div className="mx-auto max-w-7xl px-4 md:px-6 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-[var(--hotPink)] text-black grid place-items-center font-semibold">K</div>
<span className="font-semibold">Kava & Company</span>
</div>
<p className="mt-3 text-sm text-white/70">Ancient botanicals, modern ritual.</p>
<div className="mt-3 flex gap-3">
<a aria-label="Instagram" className="p-2 rounded-full hover:bg-white/10" href="#"><i className="h-5 w-5" data-lucide="instagram"></i></a>
<a aria-label="TikTok" className="p-2 rounded-full hover:bg-white/10" href="#"><i className="h-5 w-5" data-lucide="music"></i></a>
<a aria-label="Email" className="p-2 rounded-full hover:bg-white/10" href="#"><i className="h-5 w-5" data-lucide="mail"></i></a>
</div>
</div>
<div>
<h4 className="font-semibold mb-3">Visit</h4>
<ul className="space-y-2 text-sm text-white/80" id="footerLocations"></ul>
</div>
<div>
<h4 className="font-semibold mb-3">Explore</h4>
<ul className="space-y-2 text-sm">
<li><button className="hover:underline" data-nav="menu">Menu</button></li>
<li><button className="hover:underline" data-nav="events">Events</button></li>
<li><button className="hover:underline" data-nav="shop">Shop</button></li>
<li><button className="hover:underline" data-nav="lab">Lab tests</button></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-3">Subscribe</h4>
<form className="flex gap-2" id="footerNewsletter" onSubmit={(e) => { return false; }}>
<input className="bg-transparent placeholder:text-white/40 rounded-full px-3 py-2 border border-white/15 w-full focus-visible:outline-2 focus-visible:outline-offset-2" placeholder="Email address" required style={{outlineColor: `var(--hotPink)`}} type="email" />
<button className="px-4 py-2 rounded-full bg-[var(--hotPink)] text-black text-sm hover:opacity-90" data-ripple="">Join</button>
</form>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
<p>© <span id="year"></span> Kava & Company. All rights reserved.</p>
<div className="flex items-center gap-3">
<a className="hover:underline" href="#">Privacy</a>
<a className="hover:underline" href="#">Terms</a>
<button className="inline-flex items-center gap-1 hover:underline" id="backToTop"><i className="h-3.5 w-3.5" data-lucide="arrow-up"></i>Top</button>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="quickView">
<div className="absolute inset-0 bg-black/60" data-close="quickView"></div>
<div className="mx-auto max-w-2xl p-4 h-full flex items-center justify-center">
<div aria-labelledby="qvTitle" aria-modal="true" className="relative w-full rounded-3xl border border-white/10 bg-[var(--surfaceDark)] shadow-2xl" role="dialog">
<button aria-label="Close" className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/10" data-close="quickView">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
<div className="grid sm:grid-cols-2 gap-0">
<div className="p-4 sm:p-6">
<img alt="" className="rounded-2xl h-48 w-full object-cover" id="qvImg" src="" />
</div>
<div className="p-4 sm:p-6">
<h3 className="text-[22px]" id="qvTitle" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`}}></h3>
<p className="mt-2 text-white/80 text-sm" id="qvDesc"></p>
<div className="mt-3 flex flex-wrap gap-2 text-xs">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/10" id="qvFeels"><i className="h-3.5 w-3.5" data-lucide="waves"></i><span></span></span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/10" id="qvTaste"><i className="h-3.5 w-3.5" data-lucide="sparkle"></i><span></span></span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/10" id="qvDiet"><i className="h-3.5 w-3.5" data-lucide="leaf"></i><span></span></span>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="text-white/90"><span className="text-lg" id="qvPrice"></span></div>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-full border border-white/15 text-sm hover:bg-white/5" id="qvCoaBtn">View COA</button>
<button className="px-4 py-2 rounded-full bg-[var(--hotPink)] text-black text-sm" data-ripple="">Add to order</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="coaModal">
<div className="absolute inset-0 bg-black/70" data-close="coaModal"></div>
<div className="mx-auto max-w-4xl p-4 h-full flex items-center justify-center">
<div aria-labelledby="coaTitle" aria-modal="true" className="relative w-full rounded-3xl border border-white/10 bg-[var(--surfaceDark)] shadow-2xl" role="dialog">
<button aria-label="Close COA" className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/10" data-close="coaModal">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
<div className="p-4 sm:p-6">
<h3 className="text-[22px]" id="coaTitle" style={{fontFamily: `'Fraunces', serif`, fontWeight: `600`}}>Certificate of Analysis</h3>
<div className="mt-3 rounded-2xl overflow-hidden border border-white/10 bg-black">
<iframe className="w-full h-[60vh] bg-black" id="coaFrame" src="" title="COA document"></iframe>
</div>
<div className="mt-3 flex items-center justify-between text-sm">
<a className="underline" href="#" id="coaDownload" rel="noopener" target="_blank">Open in new tab</a>
<button className="px-4 py-2 rounded-full border border-white/15 hover:bg-white/5" data-close="coaModal">Close</button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="moreSheet">
<div aria-hidden="true" className="absolute inset-0 bg-black/60" data-close="moreSheet"></div>
<div className="absolute bottom-0 inset-x-0 bg-[var(--surfaceDark)] border-t border-white/10 rounded-t-3xl p-6">
<div className="mx-auto max-w-7xl">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold">Explore more</h3>
<button aria-label="Close more menu" className="p-2 rounded-full hover:bg-white/10" data-close="moreSheet"><i className="h-5 w-5" data-lucide="x"></i></button>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<button className="px-4 py-2 rounded-full text-sm bg-white/5 hover:bg-white/10" data-nav="firstTimers">First Timers</button>
<button className="px-4 py-2 rounded-full text-sm bg-white/5 hover:bg-white/10" data-nav="lab">Lab Tests / COAs</button>
<button className="px-4 py-2 rounded-full text-sm bg-white/5 hover:bg-white/10" data-nav="behind">Behind the Bar</button>
<button className="px-4 py-2 rounded-full text-sm bg-white/5 hover:bg-white/10" data-nav="cater">Cater with Us</button>
<button className="px-4 py-2 rounded-full text-sm bg-white/5 hover:bg-white/10" data-nav="contact">Contact</button>
</div>
</div>
</div>
</div>

<div className="fixed bottom-24 right-4 z-50 hidden" id="toast">
<div className="rounded-full bg-white text-[var(--inkOnLight)] px-4 py-2 shadow-lg flex items-center gap-2">
<i className="h-4 w-4" data-lucide="check"></i>
<span className="text-sm" id="toastMsg">Saved</span>
</div>
</div>
</div>


    </>
  );
}
