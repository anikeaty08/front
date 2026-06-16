import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Data
    const dogs = [
      {
        id: 'd1',
        name: 'Luna',
        age: '2 años',
        size: 'Mediano',
        breed: 'Mestiza',
        energy: 3,
        city: 'CDMX',
        photos: [
          'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1200&auto=format&fit=crop'
        ],
        personality: ['Cariñosa', 'Juguetona', 'Sociable'],
        health: ['Vacunada', 'Esterilizada'],
        special: '',
        story: 'Rescatada de la calle, le encantan los paseos y dormir al sol.',
        shelter: { name: 'Huellitas CDMX', contact: 'contacto@huellitas.org' }
      },
      {
        id: 'd2',
        name: 'Rocky',
        age: '4 años',
        size: 'Grande',
        breed: 'Labrador',
        energy: 4,
        city: 'Guadalajara',
        photos: [
          'https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1200&auto=format&fit=crop'
        ],
        personality: ['Leal', 'Activo', 'Aprende rápido'],
        health: ['Vacunado', 'Desparasitado'],
        special: 'Alérgico a cierto alimento',
        story: 'Familia ya no podía cuidarlo, busca hogar con espacio.',
        shelter: { name: 'Refugio Sol', contact: 'hola@refugiosol.mx' }
      },
      {
        id: 'd3',
        name: 'Maya',
        age: '1 año',
        size: 'Pequeño',
        breed: 'Chihuahua',
        energy: 2,
        city: 'Monterrey',
        photos: [
          'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?q=80&w=1200&auto=format&fit=crop'
        ],
        personality: ['Tranquila', 'Cariñosa'],
        health: ['Vacunada'],
        special: '',
        story: 'Muy apegada, ideal para persona en casa.',
        shelter: { name: 'Patitas Norte', contact: 'contacto@patitas.mx' }
      },
      {
        id: 'd4',
        name: 'Toby',
        age: '3 años',
        size: 'Mediano',
        breed: 'Beagle',
        energy: 5,
        city: 'Puebla',
        photos: [
          'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1508948956644-00107e8a0cfc?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1200&auto=format&fit=crop'
        ],
        personality: ['Curioso', 'Energético', 'Amable'],
        health: ['Vacunado', 'Esterilizado'],
        special: '',
        story: 'Adora olfatear y salir a aventuras, necesita actividad diaria.',
        shelter: { name: 'Colitas Felices', contact: 'info@colitas.org' }
      }
    ];
    let favorites = new Set();
    let currentDogId = null;
    let deckIndex = 0;
    let deckOrder = [];
    let appliedDogId = null;
    let adminTab = 'posts';

    // Utilities
    const $ = (sel, root=document) => root.querySelector(sel);
    const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
    function refreshIcons() { try { lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); } catch(e) {} }
    function toast(msg='Hecho') {
      const t = $('#toast'); $('#toast-text').textContent = msg;
      t.classList.remove('hidden','opacity-0'); t.classList.add('opacity-100');
      setTimeout(()=>{ t.classList.add('opacity-0'); setTimeout(()=>t.classList.add('hidden'), 250); }, 1800);
      refreshIcons();
    }

    // Routing
    function showView(view) {
      ['home','swipe','detail','auth','publish','chat','favorites','apply','admin'].forEach(v=>{
        const el = $('#view-' + v);
        if (!el) return;
        if (v === view) el.classList.remove('hidden'); else el.classList.add('hidden');
      });
      if (view === 'home') renderGrid();
      if (view === 'swipe') initDeck();
      if (view === 'favorites') renderFavorites();
      if (view === 'chat') initChat();
      if (view === 'admin') loadAdminTab(adminTab);
      refreshIcons();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Home grid
    function renderGrid(list = dogs) {
      const grid = $('#cards-grid'); grid.innerHTML = '';
      list.forEach(d => grid.appendChild(cardDog(d)));
      refreshIcons();
    }
    function cardDog(d) {
      const wrap = document.createElement('div');
      wrap.className = 'group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-sm transition';
      wrap.innerHTML = `
        <div class="relative h-40 md:h-48 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="${d.name}" class="w-full h-full object-cover group-hover:scale-105 transition">
          <button aria-label="Favorito" data-id="${d.id}" class="fav-btn absolute top-2 right-2 p-2 rounded-full bg-white/90 border border-stone-200 hover:bg-white active:scale-95 transition">
            <i data-lucide="heart" class="h-4 w-4 ${favorites.has(d.id)?'text-orange-500':''}"></i>
          </button>
          <div class="absolute bottom-2 left-2 px-2 py-1 rounded-md bg-stone-900/70 text-white text-xs">${d.city}</div>
        </div>
        <div class="p-3">
          <div class="flex items-center justify-between">
            <div class="font-medium">${d.name}</div>
            <div class="text-xs text-stone-500">${d.age}</div>
          </div>
          <div class="mt-1 text-xs text-stone-600">${d.breed} · ${d.size} · Energía ${d.energy}/5</div>
          <div class="mt-3 flex items-center justify-between">
            <button data-id="${d.id}" class="btn-detail h-9 px-3 rounded-lg bg-white border border-stone-200 hover:bg-stone-50 text-sm">Ver ficha</button>
            <button data-id="${d.id}" class="btn-swipe h-9 px-3 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 text-sm">Swipe</button>
          </div>
        </div>
      `;
      // Events
      wrap.querySelector('.fav-btn').addEventListener('click', (e)=>toggleFavorite(e.currentTarget.dataset.id));
      wrap.querySelector('.btn-detail').addEventListener('click', (e)=>openDetail(e.currentTarget.dataset.id));
      wrap.querySelector('.btn-swipe').addEventListener('click', (e)=>{ openDeckAt(e.currentTarget.dataset.id); });
      return wrap;
    }

    function toggleChip(btn, key) {
      btn.classList.toggle('bg-emerald-700'); btn.classList.toggle('text-white');
      btn.classList.toggle('border-emerald-700'); toast('Filtro "'+key+'" activado');
    }
    function scrollToResults() { document.getElementById('results').scrollIntoView({behavior:'smooth'}); }
    function applySearch(mobile=false){
      const q = (mobile?$('#globalSearchMobile'):$('#globalSearch')).value.toLowerCase().trim();
      const filtered = dogs.filter(d => [d.name,d.breed,d.size,d.age,d.city].join(' ').toLowerCase().includes(q));
      renderGrid(filtered); toast('Resultados actualizados');
    }
    function quickLikeHero(){ toggleFavorite(dogs[0].id); }

    // Favorites
    function toggleFavorite(id) {
      if (favorites.has(id)) favorites.delete(id); else favorites.add(id);
      renderGrid(); renderFavorites(); updateFavBadge(); refreshIcons();
      toast(favorites.has(id)?'Agregado a favoritos':'Quitado de favoritos');
    }
    function updateFavBadge(){
      const c = favorites.size; const el = $('#favCount');
      if (c>0) { el.textContent = c; el.classList.remove('hidden'); } else el.classList.add('hidden');
    }
    function renderFavorites(){
      const grid = $('#fav-grid'); if(!grid) return;
      grid.innerHTML = '';
      const favs = dogs.filter(d=>favorites.has(d.id));
      if (favs.length===0) {
        grid.innerHTML = `<div class="col-span-full text-center text-stone-500 text-sm border border-dashed border-stone-300 rounded-xl p-6">Aún no tienes favoritos. Comienza en Swipe.</div>`;
        return;
      }
      favs.forEach(d=>grid.appendChild(cardDog(d)));
      refreshIcons();
    }

    // Detail
    function openDetail(id){ currentDogId = id; showView('detail'); renderDetail(id); }
    function renderDetail(id){
      const d = dogs.find(x=>x.id===id);
      const wrap = $('#detail-card');
      const dots = d.photos.map((_,i)=>`<button onclick="detailGo(${i})" class="h-2 w-2 rounded-full ${i===0?'bg-stone-900':'bg-stone-300'}"></button>`).join('');
      const energyBars = Array.from({length:5}).map((_,i)=>`<div class="h-2 flex-1 rounded ${i<d.energy?'bg-emerald-600':'bg-stone-200'}"></div>`).join('');
      wrap.innerHTML = `
        <div class="grid md:grid-cols-2 gap-0">
          <div class="relative">
            <div id="detail-carousel" class="h-72 md:h-full">
              <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" class="w-full h-72 md:h-full object-cover" alt="">
            </div>
            <div class="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">${dots}</div>
            <button onclick="detailPrev()" class="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 border border-stone-200 hover:bg-white"><i data-lucide="chevron-left" class="h-5 w-5"></i></button>
            <button onclick="detailNext()" class="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 border border-stone-200 hover:bg-white"><i data-lucide="chevron-right" class="h-5 w-5"></i></button>
            <button onclick="toggleFavorite('${d.id}')" class="absolute top-3 right-3 p-2 rounded-full bg-white/90 border border-stone-200 hover:bg-white">
              <i data-lucide="heart" class="h-5 w-5 ${favorites.has(d.id)?'text-orange-500':''}"></i>
            </button>
          </div>
          <div class="p-5">
            <div class="flex items-start justify-between gap-3">
              <div>
                <h3 class="text-2xl tracking-tight font-semibold">${d.name}</h3>
                <div class="text-sm text-stone-600">${d.breed} · ${d.size} · ${d.age} · ${d.city}</div>
              </div>
              <div class="text-xs text-stone-500">${d.shelter.name}</div>
            </div>

            <div class="mt-4">
              <div class="text-sm text-stone-700">${d.story}</div>
              <div class="mt-3">
                <div class="text-xs text-stone-500 mb-1">Personalidad</div>
                <div class="flex flex-wrap gap-2">
                  ${d.personality.map(p=>`<span class="px-2 h-7 inline-flex items-center rounded-md bg-stone-100 border border-stone-200 text-xs">${p}</span>`).join('')}
                </div>
              </div>
              <div class="mt-3">
                <div class="text-xs text-stone-500 mb-1">Nivel de energía</div>
                <div class="flex items-center gap-2">
                  ${energyBars}
                  <span class="text-xs text-stone-600">${d.energy}/5</span>
                </div>
              </div>
              <div class="mt-3 grid grid-cols-2 gap-2">
                <div class="p-3 rounded-lg bg-stone-50 border border-stone-200">
                  <div class="text-xs text-stone-500">Salud</div>
                  <div class="text-sm">${d.health.join(', ') || '—'}</div>
                </div>
                <div class="p-3 rounded-lg bg-stone-50 border border-stone-200">
                  <div class="text-xs text-stone-500">Necesidades especiales</div>
                  <div class="text-sm">${d.special || 'Ninguna'}</div>
                </div>
              </div>
            </div>

            <div class="mt-5 flex items-center gap-2">
              <button onclick="startApply('${d.id}')" class="h-11 px-4 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 active:scale-[0.99] transition">Adoptar</button>
              <button onclick="openChatFor('${d.id}')" class="h-11 px-4 rounded-lg bg-white border border-stone-200 hover:bg-stone-50 active:scale-[0.99] transition">Más información</button>
            </div>
          </div>
        </div>
      `;
      refreshIcons();
      // store carousel state
      wrap.dataset.idx = 0;
    }
    function detailGo(i){
      const d = dogs.find(x=>x.id===currentDogId);
      const img = $('#detail-carousel').querySelector('img');
      img.src = d.photos[i];
      const dots = $('#detail-card').querySelectorAll('button');
      dots.forEach((b,ix)=>{ if(b.onclick && b.textContent===''){} }); // noop to keep
    }
    function detailPrev(){ shiftDetail(-1); }
    function detailNext(){ shiftDetail(1); }
    function shiftDetail(delta){
      const d = dogs.find(x=>x.id===currentDogId);
      const wrap = $('#detail-card');
      let i = parseInt(wrap.dataset.idx||'0',10);
      i = (i + delta + d.photos.length) % d.photos.length;
      wrap.dataset.idx = i;
      $('#detail-carousel img').src = d.photos[i];
    }
    function backFromDetail(){ const prev = deckOrder.length ? 'swipe' : 'home'; showView(prev); }

    // Swipe deck
    function initDeck() {
      deckOrder = dogs.map(d=>d.id);
      deckIndex = 0;
      const deck = $('#deck'); deck.innerHTML = '';
      deckOrder.slice().reverse().forEach((id, idx) => {
        const d = dogs.find(x=>x.id===id);
        const card = document.createElement('div');
        card.className = 'absolute inset-0 rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-sm touch-none';
        card.style.transform = `translate(0px, ${idx*2}px)`;
        card.style.transition = 'transform 0.25s ease, opacity 0.25s ease';
        card.dataset.id = id;
        card.innerHTML = `
          <div class="relative h-full">
            <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" class="w-full h-full object-cover" alt="${d.name}">
            <div class="absolute inset-x-0 bottom-0 p-3">
              <div class="rounded-xl bg-white/90 backdrop-blur border border-stone-200 p-3">
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium">${d.name}</div>
                    <div class="text-xs text-stone-600">${d.breed} · ${d.age}</div>
                  </div>
                  <div class="flex items-center gap-2">
                    <button onclick="openDetail('${d.id}')" class="h-9 px-3 rounded-lg bg-white border border-stone-200 hover:bg-stone-50 text-sm">Ver ficha</button>
                    <button onclick="toggleFavorite('${d.id}')" class="h-9 w-9 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 grid place-items-center">
                      <i data-lucide="heart" class="h-4 w-4"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute top-3 left-3 px-2 py-1 rounded-md bg-stone-900/70 text-white text-xs">${d.city}</div>
          </div>
        `;
        addSwipeHandlers(card);
        deck.appendChild(card);
      });
      refreshIcons();
    }
    function openDeckAt(id){
      showView('swipe');
      // rotate order so that id is last (top of stack)
      const i = dogs.findIndex(d=>d.id===id);
      const ordered = dogs.slice(i).concat(dogs.slice(0,i));
      deckOrder = ordered.map(d=>d.id);
      initDeck();
    }
    function addSwipeHandlers(card){
      let startX=0, startY=0, currentX=0, currentY=0, dragging=false;
      function onPointerDown(e){
        dragging=true;
        startX = e.clientX || e.touches?.[0]?.clientX;
        startY = e.clientY || e.touches?.[0]?.clientY;
        card.setPointerCapture?.(e.pointerId || 1);
      }
      function onPointerMove(e){
        if(!dragging) return;
        currentX = (e.clientX || e.touches?.[0]?.clientX) - startX;
        currentY = (e.clientY || e.touches?.[0]?.clientY) - startY;
        card.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${currentX/20}deg)`;
        card.style.opacity = String(1 - Math.min(Math.abs(currentX)/300, 0.4));
      }
      function onPointerUp(){
        if(!dragging) return;
        dragging=false;
        const threshold = 120;
        if (currentX > threshold) swipeOut(card, 'right');
        else if (currentX < -threshold) swipeOut(card, 'left');
        else {
          card.style.transition = 'transform 0.25s ease, opacity 0.25s ease';
          card.style.transform = 'translate(0px, 0px)';
          card.style.opacity = '1';
          setTimeout(()=>card.style.transition='', 260);
        }
      }
      card.addEventListener('pointerdown', onPointerDown);
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
      card.addEventListener('touchstart', e=>onPointerDown(e.touches[0]));
      card.addEventListener('touchmove', e=>onPointerMove(e.touches[0]));
      card.addEventListener('touchend', onPointerUp);
    }
    function swipeOut(card, dir){
      card.style.transition = 'transform 0.25s ease, opacity 0.25s ease';
      const dx = dir==='right' ? 500 : -500;
      card.style.transform = `translate(${dx}px, 0px) rotate(${dx/20}deg)`;
      card.style.opacity = '0';
      const id = card.dataset.id;
      setTimeout(()=>{
        card.remove();
        if (dir==='right') {
          favorites.add(id); updateFavBadge();
          toast('Añadido a favoritos');
        }
        refreshIcons();
      }, 240);
    }
    function deckAction(action){
      const top = $('#deck').lastElementChild;
      if(!top) return;
      if (action==='like') swipeOut(top, 'right'); else swipeOut(top, 'left');
    }
    function openCurrentProfile(){
      const top = $('#deck').lastElementChild;
      if(!top) return; openDetail(top.dataset.id);
    }

    // Auth
    function toggleCustomCheck(btn){
      const inner = btn.querySelector('div');
      const pressed = btn.getAttribute('aria-pressed') === 'true';
      btn.setAttribute('aria-pressed', String(!pressed));
      inner.classList.toggle('opacity-0'); inner.classList.toggle('scale-75');
    }
    function fakeLogin(){
      toast('Sesión iniciada'); showView('home');
    }

    // Publish
    function togglePill(btn){
      btn.classList.toggle('bg-emerald-700'); btn.classList.toggle('text-white'); btn.classList.toggle('border-emerald-700');
    }
    function previewImages(e){
      const files = Array.from(e.target.files || []);
      const container = $('#pub-previews'); container.innerHTML='';
      files.slice(0,4).forEach(f=>{
        const url = URL.createObjectURL(f);
        const div = document.createElement('div');
        div.className = 'h-28 rounded-xl overflow-hidden border border-stone-200';
        div.innerHTML = `<img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" class="w-full h-full object-cover">`;
        container.appendChild(div);
      });
    }
    function publishDog(){
      const name = $('#pub-name').value || 'Nuevo amigo';
      const newDog = {
        id: 'd'+(dogs.length+1),
        name,
        age: $('#pub-age').value || '1 año',
        size: $('#pub-size').value || 'Mediano',
        breed: $('#pub-breed').value || 'Mestizo',
        energy: parseInt($('#pub-energy').value||'3',10),
        city: $('#pub-location').value || 'CDMX',
        photos: [
          'https://images.unsplash.com/photo-1525253013412-55c1a69a5738?q=80&w=1200&auto=format&fit=crop'
        ],
        personality: ['Cariñoso'],
        health: ['Vacunado'],
        special: '',
        story: $('#pub-desc').value || 'Listo para un hogar amoroso.',
        shelter: { name: 'Tu publicación', contact: $('#pub-contact').value || '—' }
      };
      dogs.unshift(newDog);
      toast('Publicación creada');
      showView('home');
    }

    // Chat
    const demoMsgs = [
      { from:'shelter', text:'¡Hola! Gracias por tu interés en Luna 🐶' },
      { from:'me', text:'Hola, ¿sigue disponible?' },
      { from:'shelter', text:'Sí, ¿te gustaría agendar una visita?' }
    ];
    function initChat(){
      const list = $('#chat-list'); list.innerHTML='';
      dogs.slice(0,3).forEach(d=>{
        const item = document.createElement('button');
        item.className = 'w-full p-2 rounded-lg hover:bg-stone-50 border border-stone-200 text-left flex items-center gap-3';
        item.innerHTML = `
          <div class="h-10 w-10 rounded-full overflow-hidden bg-stone-100"><img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" class="w-full h-full object-cover"></div>
          <div class="flex-1">
            <div class="text-sm font-medium">${d.name} · ${d.shelter.name}</div>
            <div class="text-xs text-stone-500">Toca para abrir</div>
          </div>
        `;
        item.onclick = ()=>openChatFor(d.id);
        list.appendChild(item);
      });
      openChatFor(dogs[0].id);
    }
    function openChatFor(id){
      const d = dogs.find(x=>x.id===id);
      showView('chat');
      $('#chat-dog-name').textContent = d.name + ' · ' + d.shelter.name;
      $('#chat-dog-avatar').src = d.photos[0];
      const panel = $('#chat-messages'); panel.innerHTML='';
      demoMsgs.forEach(m=>{
        const row = document.createElement('div');
        row.className = 'flex ' + (m.from==='me'?'justify-end':'justify-start');
        row.innerHTML = `
          <div class="${m.from==='me'?'bg-emerald-700 text-white':'bg-stone-100 text-stone-800'} max-w-[75%] px-3 py-2 rounded-xl ${m.from==='me'?'rounded-tr-sm':'rounded-tl-sm'} border ${m.from==='me'?'border-emerald-800/30':'border-stone-200'} text-sm">
            ${m.text}
          </div>
        `;
        panel.appendChild(row);
      });
      panel.scrollTop = panel.scrollHeight;
      refreshIcons();
    }
    function sendMessage(){
      const input = $('#chat-input'); const text = input.value.trim(); if(!text) return;
      const panel = $('#chat-messages');
      const row = document.createElement('div');
      row.className = 'flex justify-end';
      row.innerHTML = `<div class="bg-emerald-700 text-white max-w-[75%] px-3 py-2 rounded-xl rounded-tr-sm border border-emerald-800/30 text-sm">${text}</div>`;
      panel.appendChild(row); input.value=''; panel.scrollTop = panel.scrollHeight;
    }

    // Apply wizard
    let applyStep = 1;
    function startApply(id){
      appliedDogId = id; showView('apply'); applyStep = 1; updateApplyStep();
    }
    function updateApplyStep(){
      $$('.step').forEach(s => s.classList.add('hidden'));
      $(`.step[data-step="${applyStep}"]`).classList.remove('hidden');
      $('#apply-next').textContent = applyStep===3 ? 'Enviar solicitud' : 'Siguiente';
    }
    function applyPrev(){ if(applyStep>1){ applyStep--; updateApplyStep(); } }
    function applyNext(){
      if (applyStep<3) { applyStep++; updateApplyStep(); }
      else { toast('Solicitud enviada'); showView('chat'); }
    }
    function saveDraftApply(){ toast('Borrador guardado'); }
    function toggleSwitch(btn){
      const knob = btn.querySelector('span');
      const on = btn.classList.contains('bg-emerald-700');
      if (on){ btn.classList.remove('bg-emerald-700'); btn.classList.add('bg-stone-300'); knob.style.left='0.125rem'; }
      else { btn.classList.add('bg-emerald-700'); btn.classList.remove('bg-stone-300'); knob.style.left='1.375rem'; }
    }

    // Admin
    function loadAdminTab(tab){
      adminTab = tab;
      const c = $('#admin-content'); c.innerHTML = '';
      if (tab==='posts'){
        dogs.forEach(d=>{
          const card = document.createElement('div');
          card.className = 'bg-white rounded-xl border border-stone-200 overflow-hidden';
          card.innerHTML = `
            <div class="flex items-center gap-3 p-3 border-b border-stone-200">
              <div class="h-12 w-12 rounded-lg overflow-hidden"><img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" class="w-full h-full object-cover"></div>
              <div class="flex-1">
                <div class="text-sm font-medium">${d.name} · ${d.breed}</div>
                <div class="text-xs text-stone-500">${d.city}</div>
              </div>
              <button onclick="openDetail('${d.id}')" class="h-9 px-3 rounded-lg bg-white border border-stone-200 hover:bg-stone-50 text-sm">Ver</button>
            </div>
            <div class="p-3 flex items-center justify-between">
              <div class="text-xs text-stone-500">Estado: <span class="text-stone-700">Publicado</span></div>
              <div class="flex items-center gap-2">
                <button class="h-9 px-3 rounded-lg bg-white border border-stone-200 hover:bg-stone-50 text-sm">Editar</button>
                <button class="h-9 px-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 text-sm">Pausar</button>
              </div>
            </div>
          `;
          c.appendChild(card);
        });
      } else if (tab==='requests'){
        const items = [
          {user:'Ana López', dog:'Luna', status:'Pendiente'},
          {user:'Carlos Pérez', dog:'Toby', status:'Pendiente'}
        ];
        items.forEach(it=>{
          const card = document.createElement('div');
          card.className = 'bg-white rounded-xl border border-stone-200 p-3';
          card.innerHTML = `
            <div class="flex items-center justify-between">
              <div>
                <div class="text-sm font-medium">${it.user}</div>
                <div class="text-xs text-stone-500">Solicita a ${it.dog}</div>
              </div>
              <span class="text-xs px-2 py-1 rounded bg-stone-100 border border-stone-200">${it.status}</span>
            </div>
            <div class="mt-3 flex items-center justify-end gap-2">
              <button class="h-9 px-3 rounded-lg bg-white border border-stone-200 hover:bg-stone-50 text-sm">Ver detalle</button>
              <button class="h-9 px-3 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 text-sm" onclick="toast('Solicitud aprobada')">Aprobar</button>
              <button class="h-9 px-3 rounded-lg bg-white border border-stone-200 hover:bg-stone-50 text-sm" onclick="toast('Solicitud rechazada')">Rechazar</button>
            </div>
          `;
          c.appendChild(card);
        });
      } else {
        const notes = [
          {title:'Verificación de refugios', desc:'2 verificados hoy'},
          {title:'Publicaciones pausadas', desc:'1 pendiente de revisión'},
          {title:'Reportes', desc:'0 abiertos'}
        ];
        notes.forEach(n=>{
          const card = document.createElement('div');
          card.className = 'bg-white rounded-xl border border-stone-200 p-4';
          card.innerHTML = `
            <div class="text-sm font-medium">${n.title}</div>
            <div class="text-xs text-stone-500">${n.desc}</div>
            <div class="mt-3">
              <button class="h-9 px-3 rounded-lg bg-white border border-stone-200 hover:bg-stone-50 text-sm">Ver más</button>
            </div>
          `;
          c.appendChild(card);
        });
      }
      refreshIcons();
    }

    // Deck open detail
    function openCurrentDetail(){ const top=$('#deck').lastElementChild; if(top) openDetail(top.dataset.id); }

    // Set up
    document.addEventListener('DOMContentLoaded', () => {
      renderGrid(); initDeck(); updateFavBadge(); initChat(); refreshIcons();
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen flex flex-col" id="app">

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-stone-200">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="h-16 flex items-center justify-between gap-3">
<button className="inline-flex items-center gap-2 px-2 py-1 rounded-md hover:bg-stone-100/80 active:scale-[0.98] transition" onclick="showView('home')">
<div className="h-8 w-8 rounded-md bg-emerald-700 text-white grid place-items-center tracking-tight text-[11px] font-semibold" style={{letterSpacing: '-0.02em'}}>AM</div>
<span className="text-lg md:text-xl font-semibold tracking-tight">Amiko</span>
<span className="hidden md:inline text-xs text-stone-500">Adopta con confianza</span>
</button>
<div className="flex-1 max-w-xl hidden md:flex">
<div className="w-full relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500">
<i className="h-5 w-5" data-lucide="search"></i>
</span>
<input className="w-full pl-10 pr-28 h-11 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 placeholder:text-stone-400 text-[15px] transition" id="globalSearch" placeholder="Buscar por raza, tamaño, edad o ubicación..."/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 h-8 px-3 rounded-lg bg-emerald-700 text-white text-sm hover:bg-emerald-800 active:scale-[0.99] transition" onclick="applySearch()">Buscar</button>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg hover:bg-stone-100 relative" onclick="showView('favorites')">
<i className="h-5 w-5 text-stone-700" data-lucide="heart"></i>
<span className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1 rounded-full bg-orange-500 text-white text-[11px] leading-5 text-center hidden" id="favCount">0</span>
</button>
<button className="p-2 rounded-lg hover:bg-stone-100" onclick="showView('chat')">
<i className="h-5 w-5 text-stone-700" data-lucide="messages-square"></i>
</button>
<button className="p-2 rounded-lg hover:bg-stone-100" onclick="showView('auth')">
<i className="h-5 w-5 text-stone-700" data-lucide="user-round"></i>
</button>
<button className="hidden sm:inline-flex items-center gap-2 h-10 px-3 rounded-lg bg-emerald-700 text-white text-sm hover:bg-emerald-800 active:scale-[0.99] transition" onclick="showView('publish')">
<i className="h-4 w-4" data-lucide="plus"></i> Publicar
            </button>
</div>
</div>
</div>

<div className="md:hidden px-4 pb-3">
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500">
<i className="h-5 w-5" data-lucide="search"></i>
</span>
<input className="w-full pl-10 pr-24 h-11 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 placeholder:text-stone-400 text-[15px] transition" id="globalSearchMobile" placeholder="Raza, tamaño, edad o ubicación..."/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 h-8 px-3 rounded-lg bg-emerald-700 text-white text-sm hover:bg-emerald-800 active:scale-[0.99] transition" onclick="applySearch(true)">Buscar</button>
</div>
</div>
</header>

<main className="flex-1">

<section className="block" id="view-home">

<div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-10">
<div className="grid md:grid-cols-2 gap-6 items-center">
<div className="order-2 md:order-1">
<h1 className="text-3xl md:text-5xl tracking-tight font-semibold text-stone-900">Encuentra a tu mejor amigo</h1>
<p className="mt-3 text-stone-600 text-[15px] md:text-base">Explora perritos por raza, tamaño, edad o cercanía. Desliza como en una cita, guarda favoritos y conecta con refugios de forma segura.</p>
<div className="mt-5 flex flex-wrap items-center gap-2">
<button className="inline-flex items-center gap-2 h-11 px-4 rounded-xl bg-emerald-700 text-white text-[15px] hover:bg-emerald-800 active:scale-[0.99] transition" onclick="showView('swipe')">
<i className="h-5 w-5" data-lucide="sparkles"></i> Descubrir
                </button>
<button className="inline-flex items-center gap-2 h-11 px-4 rounded-xl bg-white text-stone-900 border border-stone-200 hover:border-stone-300 active:scale-[0.99] transition" onclick="scrollToResults()">
<i className="h-5 w-5" data-lucide="list-filter"></i> Filtrar
                </button>
</div>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2">
<button className="h-10 rounded-lg bg-white border border-stone-200 hover:border-stone-300 hover:bg-stone-50 active:scale-[0.99] transition text-sm" onclick="toggleChip(this,'raza')">Raza</button>
<button className="h-10 rounded-lg bg-white border border-stone-200 hover:border-stone-300 hover:bg-stone-50 active:scale-[0.99] transition text-sm" onclick="toggleChip(this,'tamaño')">Tamaño</button>
<button className="h-10 rounded-lg bg-white border border-stone-200 hover:border-stone-300 hover:bg-stone-50 active:scale-[0.99] transition text-sm" onclick="toggleChip(this,'edad')">Edad</button>
<button className="h-10 rounded-lg bg-white border border-stone-200 hover:border-stone-300 hover:bg-stone-50 active:scale-[0.99] transition text-sm" onclick="toggleChip(this,'ubicación')">Ubicación</button>
</div>
</div>
<div className="order-1 md:order-2">
<div className="grid grid-cols-3 grid-rows-2 gap-2 h-64 md:h-80">
<div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
<img alt="perrito" className="w-full h-full object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 border border-stone-200 hover:bg-white active:scale-95 transition" onclick="quickLikeHero()">
<i className="h-4 w-4 text-stone-700" data-lucide="heart"></i>
</button>
</div>
<div className="rounded-2xl overflow-hidden">
<img alt="dog2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-2xl overflow-hidden">
<img alt="dog3" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>

<div className="mt-8 md:mt-12" id="results">
<div className="flex items-center justify-between mb-3">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Perritos cerca de ti</h2>
<button className="text-sm text-emerald-800 hover:underline inline-flex items-center gap-1" onclick="showView('swipe')">
                Ver en modo swipe <i className="h-4 w-4" data-lucide="chevron-right"></i>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4" id="cards-grid">

</div>
</div>
</div>
</section>

<section className="hidden" id="view-swipe">
<div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 md:py-10">
<div className="flex items-center justify-between mb-4">
<h2 className="text-2xl tracking-tight font-semibold">Descubre y desliza</h2>
<div className="text-xs text-stone-500">Desliza: izquierda omitir · derecha favorito</div>
</div>
<div className="relative h-[68vh] max-h-[720px]">
<div className="absolute inset-0" id="deck">

</div>
</div>
<div className="mt-5 flex items-center justify-center gap-3">
<button className="h-14 w-14 rounded-full bg-white border border-stone-200 hover:bg-stone-50 active:scale-95 grid place-items-center transition" onclick="deckAction('nope')">
<i className="h-6 w-6 text-stone-700" data-lucide="x"></i>
</button>
<button className="h-12 rounded-full px-4 bg-white border border-stone-200 hover:bg-stone-50 active:scale-95 inline-flex items-center gap-2 transition" onclick="openCurrentProfile()">
<i className="h-5 w-5 text-stone-700" data-lucide="badge-info"></i> Ver ficha
            </button>
<button className="h-14 w-14 rounded-full bg-emerald-700 text-white hover:bg-emerald-800 active:scale-95 grid place-items-center transition" onclick="deckAction('like')">
<i className="h-6 w-6" data-lucide="heart"></i>
</button>
</div>
</div>
</section>

<section className="hidden" id="view-detail">
<div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 md:py-10">
<button className="mb-4 inline-flex items-center gap-1 text-sm text-stone-600 hover:text-stone-800" onclick="backFromDetail()">
<i className="h-4 w-4" data-lucide="arrow-left"></i> Volver
          </button>
<div className="bg-white rounded-2xl border border-stone-200 overflow-hidden" id="detail-card">

</div>
</div>
</section>

<section className="hidden" id="view-auth">
<div className="max-w-md mx-auto px-4 sm:px-6 py-8">
<div className="bg-white rounded-2xl border border-stone-200 p-6">
<h2 className="text-2xl tracking-tight font-semibold">Crea tu cuenta</h2>
<p className="text-sm text-stone-600 mt-1">Regístrate para guardar favoritos, chatear y enviar solicitudes.</p>
<div className="mt-4 grid grid-cols-2 gap-2">
<button className="h-11 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 active:scale-[0.99] transition inline-flex items-center justify-center gap-2 text-sm">
<i className="h-4 w-4" data-lucide="mail"></i> Email
              </button>
<button className="h-11 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 active:scale-[0.99] transition inline-flex items-center justify-center gap-2 text-sm">
<i className="h-4 w-4" data-lucide="smartphone"></i> Redes
              </button>
</div>
<div className="mt-4 space-y-3">
<div>
<label className="text-sm text-stone-700">Email</label>
<input className="mt-1 w-full h-11 rounded-lg bg-stone-50 border border-stone-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 px-3 text-[15px]" id="auth-email" placeholder="tucorreo@ejemplo.com" type="email"/>
</div>
<div>
<label className="text-sm text-stone-700">Contraseña</label>
<input className="mt-1 w-full h-11 rounded-lg bg-stone-50 border border-stone-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 px-3 text-[15px]" id="auth-pass" placeholder="••••••••" type="password"/>
</div>
<div className="flex items-center gap-2">
<button aria-pressed="false" className="h-5 w-5 rounded-md border border-stone-300 bg-white hover:bg-stone-50 grid place-items-center transition" onclick="toggleCustomCheck(this)">
<div className="h-3.5 w-3.5 rounded-[4px] bg-emerald-700 opacity-0 scale-75 transition"></div>
</button>
<span className="text-sm text-stone-600">Acepto términos y privacidad</span>
</div>
<button className="w-full h-11 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 active:scale-[0.99] transition" onclick="fakeLogin()">Entrar</button>
</div>
<div className="mt-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm">Verificación simple: te enviaremos un código al correo para confirmar tu cuenta.</div>
</div>
</div>
</section>

<section className="hidden" id="view-publish">
<div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
<div className="bg-white rounded-2xl border border-stone-200 p-6">
<div className="flex items-center justify-between">
<h2 className="text-2xl tracking-tight font-semibold">Nueva publicación</h2>
<span className="text-xs text-stone-500">Refugios o dueños</span>
</div>
<div className="mt-4 grid md:grid-cols-2 gap-4">
<div className="space-y-3">
<div>
<label className="text-sm text-stone-700">Nombre del perrito</label>
<input className="mt-1 w-full h-11 rounded-lg bg-stone-50 border border-stone-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 px-3 text-[15px]" id="pub-name" placeholder="Luna, Max, Toby..."/>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="text-sm text-stone-700">Edad</label>
<input className="mt-1 w-full h-11 rounded-lg bg-stone-50 border border-stone-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 px-3 text-[15px]" id="pub-age" placeholder="2 años"/>
</div>
<div>
<label className="text-sm text-stone-700">Tamaño</label>
<select className="mt-1 w-full h-11 rounded-lg bg-stone-50 border border-stone-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 px-3 text-[15px]" id="pub-size">
<option>Pequeño</option>
<option>Mediano</option>
<option>Grande</option>
</select>
</div>
</div>
<div>
<label className="text-sm text-stone-700">Raza (o mestizo)</label>
<input className="mt-1 w-full h-11 rounded-lg bg-stone-50 border border-stone-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 px-3 text-[15px]" id="pub-breed" placeholder="Mestizo"/>
</div>
<div>
<label className="text-sm text-stone-700">Ubicación</label>
<input className="mt-1 w-full h-11 rounded-lg bg-stone-50 border border-stone-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 px-3 text-[15px]" id="pub-location" placeholder="CDMX, Guadalajara..."/>
</div>
</div>
<div className="space-y-3">
<div>
<label className="text-sm text-stone-700">Descripción</label>
<textarea className="mt-1 w-full rounded-lg bg-stone-50 border border-stone-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 px-3 py-2 text-[15px]" id="pub-desc" placeholder="Personalidad, convivencia, gustos…" rows="4"></textarea>
</div>
<div>
<label className="text-sm text-stone-700">Nivel de energía</label>
<div className="mt-2 h-11 rounded-lg bg-stone-50 border border-stone-200 px-3 flex items-center justify-between">
<span className="text-sm text-stone-600">Bajo</span>
<input className="w-40 accent-emerald-700" id="pub-energy" max="5" min="1" type="range" value="3"/>
<span className="text-sm text-stone-600">Alto</span>
</div>
</div>
<div>
<label className="text-sm text-stone-700">Salud</label>
<div className="mt-2 grid grid-cols-2 gap-2">
<button className="h-10 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 active:scale-[0.99] transition text-sm inline-flex items-center justify-center gap-2" onclick="togglePill(this)">Vacunado</button>
<button className="h-10 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 active:scale-[0.99] transition text-sm inline-flex items-center justify-center gap-2" onclick="togglePill(this)">Esterilizado</button>
<button className="h-10 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 active:scale-[0.99] transition text-sm inline-flex items-center justify-center gap-2" onclick="togglePill(this)">Desparasitado</button>
<button className="h-10 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 active:scale-[0.99] transition text-sm inline-flex items-center justify-center gap-2" onclick="togglePill(this)">Especial</button>
</div>
</div>
</div>
</div>
<div className="mt-4">
<label className="text-sm text-stone-700">Fotos</label>
<div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-3">
<label className="h-28 rounded-xl border-2 border-dashed border-stone-300 bg-stone-50 hover:border-emerald-700 hover:bg-emerald-50/50 transition grid place-items-center cursor-pointer">
<input accept="image/*" className="hidden" multiple="" onchange="previewImages(event)" type="file"/>
<div className="text-stone-500 text-sm flex flex-col items-center">
<i className="h-5 w-5 mb-1" data-lucide="image-plus"></i>
                    Agregar
                  </div>
</label>
<div className="contents" id="pub-previews"></div>
</div>
</div>
<div className="mt-4 grid md:grid-cols-2 gap-3">
<div>
<label className="text-sm text-stone-700">Contacto</label>
<input className="mt-1 w-full h-11 rounded-lg bg-stone-50 border border-stone-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 px-3 text-[15px]" id="pub-contact" placeholder="correo@refugio.org"/>
</div>
<div className="flex items-end justify-end gap-2">
<button className="h-11 px-4 rounded-lg bg-white border border-stone-200 hover:bg-stone-50 active:scale-[0.99] transition">Guardar borrador</button>
<button className="h-11 px-4 rounded-lg bg-orange-500 text-white hover:bg-orange-600 active:scale-[0.99] transition" onclick="publishDog()">Publicar</button>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" id="view-chat">
<div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 md:py-10">
<div className="grid md:grid-cols-3 gap-4">
<div className="bg-white rounded-2xl border border-stone-200 p-4">
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg tracking-tight font-semibold">Conversaciones</h3>
<button className="p-2 rounded-lg hover:bg-stone-100">
<i className="h-4 w-4" data-lucide="plus"></i>
</button>
</div>
<div className="space-y-2" id="chat-list">

</div>
</div>
<div className="md:col-span-2 bg-white rounded-2xl border border-stone-200 flex flex-col">
<div className="px-4 py-3 border-b border-stone-200 flex items-center gap-3" id="chat-header">
<div className="h-9 w-9 rounded-full overflow-hidden bg-stone-100">
<img alt="" className="w-full h-full object-cover" id="chat-dog-avatar" src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-sm font-medium" id="chat-dog-name">Conversación</div>
<div className="text-xs text-stone-500">Refugio</div>
</div>
</div>
<div className="flex-1 p-4 space-y-3 overflow-y-auto" id="chat-messages">

</div>
<div className="p-3 border-t border-stone-200">
<div className="flex items-center gap-2">
<input className="flex-1 h-11 rounded-lg bg-stone-50 border border-stone-200 px-3 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 text-[15px]" id="chat-input" placeholder="Escribe un mensaje..."/>
<button className="h-11 px-4 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 active:scale-[0.99] transition" onclick="sendMessage()">
                    Enviar
                  </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" id="view-favorites">
<div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-10">
<div className="flex items-center justify-between">
<h2 className="text-2xl tracking-tight font-semibold">Tus favoritos</h2>
<button className="text-sm text-emerald-800 hover:underline inline-flex items-center gap-1" onclick="showView('swipe')">
              Seguir descubriendo <i className="h-4 w-4" data-lucide="chevron-right"></i>
</button>
</div>
<div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4" id="fav-grid">

</div>
</div>
</section>

<section className="hidden" id="view-apply">
<div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 md:py-10">
<div className="bg-white rounded-2xl border border-stone-200 p-6">
<div className="flex items-center justify-between">
<h2 className="text-2xl tracking-tight font-semibold">Solicitud de adopción</h2>
<div className="flex items-center gap-2 text-xs text-stone-500" id="apply-stepper">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="user"></i> Datos</span>
<span>•</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="heart"></i> Motivo</span>
<span>•</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="home"></i> Hogar</span>
</div>
</div>
<div className="mt-4 space-y-4" id="apply-steps">

<div className="step block" data-step="1">
<div className="grid md:grid-cols-2 gap-3">
<div>
<label className="text-sm text-stone-700">Nombre completo</label>
<input className="mt-1 w-full h-11 rounded-lg bg-stone-50 border border-stone-200 px-3 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 text-[15px]"/>
</div>
<div>
<label className="text-sm text-stone-700">Teléfono</label>
<input className="mt-1 w-full h-11 rounded-lg bg-stone-50 border border-stone-200 px-3 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 text-[15px]"/>
</div>
<div>
<label className="text-sm text-stone-700">Email</label>
<input className="mt-1 w-full h-11 rounded-lg bg-stone-50 border border-stone-200 px-3 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 text-[15px]"/>
</div>
<div>
<label className="text-sm text-stone-700">Ubicación</label>
<input className="mt-1 w-full h-11 rounded-lg bg-stone-50 border border-stone-200 px-3 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 text-[15px]"/>
</div>
</div>
</div>

<div className="step hidden" data-step="2">
<div className="space-y-3">
<div>
<label className="text-sm text-stone-700">¿Por qué quieres adoptar?</label>
<textarea className="mt-1 w-full rounded-lg bg-stone-50 border border-stone-200 px-3 py-2 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 text-[15px]" rows="4"></textarea>
</div>
<div>
<label className="text-sm text-stone-700">Experiencia con mascotas</label>
<div className="mt-2 grid grid-cols-2 gap-2">
<button className="h-10 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 text-sm" onclick="togglePill(this)">Primera vez</button>
<button className="h-10 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 text-sm" onclick="togglePill(this)">He tenido perros</button>
<button className="h-10 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 text-sm" onclick="togglePill(this)">Tengo otras mascotas</button>
<button className="h-10 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 text-sm" onclick="togglePill(this)">Voluntariado</button>
</div>
</div>
</div>
</div>

<div className="step hidden" data-step="3">
<div className="space-y-3">
<div>
<label className="text-sm text-stone-700">Tipo de vivienda</label>
<select className="mt-1 w-full h-11 rounded-lg bg-stone-50 border border-stone-200 px-3 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 text-[15px]">
<option>Departamento</option>
<option>Casa con patio</option>
<option>Casa sin patio</option>
</select>
</div>
<div className="flex items-center justify-between h-12 rounded-lg bg-stone-50 border border-stone-200 px-3">
<span className="text-sm text-stone-700">Áreas seguras para el perro</span>
<button className="h-6 w-10 rounded-full bg-stone-300 relative transition" onclick="toggleSwitch(this)">
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition"></span>
</button>
</div>
<div className="flex items-center justify-between h-12 rounded-lg bg-stone-50 border border-stone-200 px-3">
<span className="text-sm text-stone-700">Acepto seguimiento del refugio</span>
<button className="h-6 w-10 rounded-full bg-stone-300 relative transition" onclick="toggleSwitch(this)">
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition"></span>
</button>
</div>
</div>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<button className="h-11 px-4 rounded-lg bg-white border border-stone-200 hover:bg-stone-50 active:scale-[0.99] transition" onclick="applyPrev()"><i className="h-4 w-4" data-lucide="arrow-left"></i></button>
<div className="flex items-center gap-2">
<button className="h-11 px-4 rounded-lg bg-white border border-stone-200 hover:bg-stone-50 active:scale-[0.99] transition" onclick="saveDraftApply()">Guardar</button>
<button className="h-11 px-4 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 active:scale-[0.99] transition" id="apply-next" onclick="applyNext()">Siguiente</button>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" id="view-admin">
<div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-10">
<div className="flex items-center justify-between">
<h2 className="text-2xl tracking-tight font-semibold">Panel de administración</h2>
<div className="flex gap-2">
<button className="h-10 px-3 rounded-lg bg-white border border-stone-200 hover:bg-stone-50 text-sm" onclick="loadAdminTab('posts')">Publicaciones</button>
<button className="h-10 px-3 rounded-lg bg-white border border-stone-200 hover:bg-stone-50 text-sm" onclick="loadAdminTab('requests')">Solicitudes</button>
<button className="h-10 px-3 rounded-lg bg-white border border-stone-200 hover:bg-stone-50 text-sm" onclick="loadAdminTab('approvals')">Aprobaciones</button>
</div>
</div>
<div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-3" id="admin-content">

</div>
</div>
</section>
</main>

<nav className="sticky bottom-0 z-40 md:hidden border-t border-stone-200 bg-white/90 backdrop-blur">
<div className="max-w-6xl mx-auto px-6">
<div className="h-14 grid grid-cols-5">
<button className="flex flex-col items-center justify-center text-xs text-stone-700 hover:text-stone-900" onclick="showView('home')">
<i className="h-5 w-5" data-lucide="home"></i>
            Inicio
          </button>
<button className="flex flex-col items-center justify-center text-xs text-stone-700 hover:text-stone-900" onclick="showView('swipe')">
<i className="h-5 w-5" data-lucide="swipe"></i>
            Swipe
          </button>
<button className="flex flex-col items-center justify-center text-xs text-stone-700 hover:text-stone-900" onclick="showView('publish')">
<i className="h-5 w-5" data-lucide="plus-circle"></i>
            Publicar
          </button>
<button className="flex flex-col items-center justify-center text-xs text-stone-700 hover:text-stone-900" onclick="showView('favorites')">
<i className="h-5 w-5" data-lucide="heart"></i>
            Favoritos
          </button>
<button className="flex flex-col items-center justify-center text-xs text-stone-700 hover:text-stone-900" onclick="showView('chat')">
<i className="h-5 w-5" data-lucide="messages-square"></i>
            Chat
          </button>
</div>
</div>
</nav>
</div>

<div className="fixed left-1/2 -translate-x-1/2 bottom-20 md:bottom-6 z-[60] hidden" id="toast">
<div className="inline-flex items-center gap-2 px-4 h-11 rounded-xl bg-stone-900 text-white shadow-lg border border-stone-700/40">
<i className="h-5 w-5 text-emerald-400" data-lucide="check-circle-2"></i>
<span className="text-sm" id="toast-text">Hecho</span>
</div>
</div>


    </>
  );
}
