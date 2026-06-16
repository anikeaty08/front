import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


try{localStorage.setItem('theme','light');}catch(e){}


{
"@context": "https://schema.org",
"@type": "SportsOrganization",
"name": "[School Name] RC Car Club",
"url": "https://rcclub.school.edu",
"logo": "https://rcclub.school.edu/logo-monochrome.svg",
"sport": "Radio-controlled car racing",
"founder": "[School Name]",
"memberOf": "[School Name] Student Clubs",
"sameAs": [
"https://www.youtube.com/",
"https://www.instagram.com/",
"https://github.com/"
],
"event": [
{ "@type": "Event", "name": "Weekly Meeting", "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode" }
]
}



window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');



    // Icons init with 1.5 stroke
    function renderIcons() { if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); }
    document.addEventListener('DOMContentLoaded', renderIcons);

    // App State
    const state = {
      theme: localStorage.getItem('theme') || 'dark',
      route: (location.hash || '#home').replace('#',''),
      filters: { meeting: true, race: true, workshop: true },
      admin: JSON.parse(localStorage.getItem('admin') || 'null'),
      data: {
        // Sample Events (5)
        events: JSON.parse(localStorage.getItem('events') || 'null') || [
          { id: 'e1', title: 'Weekly Meeting', date: new Date().toISOString().slice(0,10), type: 'meeting', location: 'Engineering Lab B', description: 'Kickoff and project planning.' },
          { id: 'e2', title: 'Workshop: ESC Tuning', date: addDays(3), type: 'workshop', location: 'Lab C', description: 'Hands-on ESC programming.' },
          { id: 'e3', title: 'Internal Time Trial', date: addDays(7), type: 'race', location: 'North Track', description: 'Timed runs, 1/10 scale.' },
          { id: 'e4', title: '3D Printing Tips', date: addDays(11), type: 'workshop', location: 'Fab Lab', description: 'Materials, infill, and tolerances.' },
          { id: 'e5', title: 'Inter-school Race', date: addDays(21), type: 'race', location: 'City RC Park', description: 'Travel meet with local clubs.' }
        ],
        // Sample Gallery (10)
        gallery: JSON.parse(localStorage.getItem('gallery') || 'null') || [
          { id:'g1', title:'Track Start', url:'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1200&auto=format&fit=crop&grayscale', year:'2025', caption:'Start line intensity.' },
          { id:'g2', title:'Soldering ESC', url:'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop&grayscale', year:'2025', caption:'Electronics bench session.' },
          { id:'g3', title:'Chassis Detail', url:'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop&grayscale', year:'2024', caption:'Carbon fiber chassis.' },
          { id:'g4', title:'Pit Crew', url:'https://images.unsplash.com/photo-1542317853-66d4b0d01323?q=80&w=1200&auto=format&fit=crop&grayscale', year:'2024', caption:'Teamwork in pits.' },
          { id:'g5', title:'Battery Swap', url:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop&grayscale', year:'2025', caption:'Fast pit stops.' },
          { id:'g6', title:'CAD Session', url:'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop&grayscale', year:'2024', caption:'Designing parts.' },
          { id:'g7', title:'Track Aerial', url:'https://images.unsplash.com/photo-1530065928590-0b1479787913?q=80&w=1200&auto=format&fit=crop&grayscale', year:'2025', caption:'Course layout.' },
          { id:'g8', title:'Motor Close-up', url:'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop&grayscale', year:'2025', caption:'Brushless power.' },
          { id:'g9', title:'Sprint', url:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop&grayscale', year:'2024', caption:'Speed on straights.' },
          { id:'g10', title:'Workshop Night', url:'https://images.unsplash.com/photo-1553406830-3d47ddb1fb3d?q=80&w=1200&auto=format&fit=crop&grayscale', year:'2024', caption:'Late-night builds.' }
        ],
        // Sample Builds (3)
        builds: JSON.parse(localStorage.getItem('builds') || 'null') || [
          {
            id:'b1', name:'Vortex X1', owner:'Alex Chen',
            specs:{ scale:'1/10', motor:'3650 4300KV', esc:'60A', battery:'2S 5000mAh', weight:'1.45kg' },
            mods:['CF chassis', 'Alu hubs', 'Steel pinion', 'Sensored ESC'],
            photos:[
              'https://images.unsplash.com/photo-1542367597-8849eb07f311?q=80&w=1200&auto=format&fit=crop&grayscale',
              'https://images.unsplash.com/photo-1531123414780-f7424f7aece6?q=80&w=1200&auto=format&fit=crop&grayscale'
            ],
            votes: 12, comments:[{by:'Priya', text:'Clean wiring!'}], approved:true
          },
          {
            id:'b2', name:'BlackLine R', owner:'Priya Singh',
            specs:{ scale:'1/10', motor:'3650 4000KV', esc:'80A', battery:'3S 5200mAh', weight:'1.62kg' },
            mods:['CF towers', 'Titanium screws', 'Adjustable toe'],
            photos:[
              'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1200&auto=format&fit=crop&grayscale'
            ],
            votes: 21, comments:[{by:'Marcus', text:'Love the geo!'}], approved:true
          },
          {
            id:'b3', name:'MonoBlade', owner:'Marcus Lee',
            specs:{ scale:'1/12', motor:'2435 5200KV', esc:'35A', battery:'2S 3500mAh', weight:'0.89kg' },
            mods:['Low-drag shell', 'Ceramic bearings', 'Custom spoiler'],
            photos:[
              'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop&grayscale'
            ],
            votes: 8, comments:[{by:'Alex', text:'Aero is on point.'}], approved:false
          }
        ],
        members: JSON.parse(localStorage.getItem('members') || '[]')
      }
    };

    // Utilities
    function addDays(d) { const t = new Date(); t.setDate(t.getDate() + (typeof d==='number'?d:0)); return t.toISOString().slice(0,10); }
    function qs(sel, el=document){ return el.querySelector(sel); }
    function qsa(sel, el=document){ return Array.from(el.querySelectorAll(sel)); }
    function save(key) {
      localStorage.setItem(key, JSON.stringify(state.data[key]));
    }

    // Theme
    function applyTheme() {
      const isDark = state.theme === 'dark';
      document.body.classList.toggle('bg-black', isDark);
      document.body.classList.toggle('text-white', isDark);
      document.body.classList.toggle('bg-white', !isDark);
      document.body.classList.toggle('text-black', !isDark);
      qs('#themeToggle span')?.replaceChildren(document.createTextNode(isDark ? 'Dark' : 'Light'));
      qs('#themeToggle i')?.setAttribute('data-lucide', isDark ? 'moon' : 'sun');
      renderIcons();
    }
    qs('#themeToggle').addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', state.theme);
      applyTheme();
    });
    applyTheme();

    // Routing
    const routes = ['home','about','calendar','gallery','builds','resources','join','contact-admin'];
    function setRoute(hash) {
      state.route = (hash || '#home').replace('#','');
      qsa('.route-view').forEach(v => v.classList.add('hidden'));
      const active = qs(`#view-${state.route}`);
      if (active) active.classList.remove('hidden');
      // Active nav underline simulation
      const idx = routes.indexOf(state.route);
      const width = 100 / routes.length;
      qs('#activeRouteBar').style.width = width + '%';
      qs('#activeRouteBar').style.transform = `translateX(${idx * width}%)`;
      // render route-specific
      if (state.route === 'calendar') initCalendar();
      if (state.route === 'gallery') renderGallery();
      if (state.route === 'builds') { renderBuilds(); renderModQueue(); }
      renderIcons();
    }
    window.addEventListener('hashchange', () => setRoute(location.hash));
    setRoute(location.hash);

    // Mobile Menu
    function toggleMobileMenu() {
      const m = qs('#mobileMenu');
      const open = m.classList.contains('hidden');
      m.classList.toggle('hidden', !open);
    }
    qs('#mobileMenuBtn').addEventListener('click', toggleMobileMenu);

    // Carousel
    const slides = qsa('#heroCarousel img');
    let slideIdx = 0;
    setInterval(() => {
      slides.forEach((img, i) => img.style.opacity = (i === slideIdx ? '1' : '0'));
      slideIdx = (slideIdx + 1) % slides.length;
    }, 4200);

    // Calendar with FullCalendar
    let fc;
    function initCalendar() {
      const el = qs('#calendar');
      if (fc) { fc.destroy(); }
      fc = new FullCalendar.Calendar(el, {
        initialView: 'dayGridMonth',
        themeSystem: 'standard',
        contentHeight: 'auto',
        headerToolbar: { left: 'prev,next today', center: 'title', right: 'dayGridMonth,timeGridWeek,listWeek' },
        events: state.data.events.filter(ev => state.filters[ev.type]).map(toFcEvent),
        eventClick: info => openEventModal(info.event.extendedProps.raw),
        dayMaxEventRows: 3
      });
      fc.render();
      // Filter toggles
      qsa('.toggle').forEach(btn => {
        const type = btn.getAttribute('data-filter');
        renderToggle(btn, state.filters[type]);
        btn.onclick = () => {
          state.filters[type] = !state.filters[type];
          renderToggle(btn, state.filters[type]);
          initCalendar();
        };
      });
      qs('#exportICS').onclick = exportICS;
    }
    function toFcEvent(ev) {
      return {
        title: `[${ev.type}] ${ev.title}`,
        start: ev.date,
        display: 'auto',
        backgroundColor: '#000',
        borderColor: '#fff',
        textColor: '#fff',
        extendedProps: { raw: ev }
      };
    }
    function renderToggle(btn, on) {
      btn.className = 'toggle relative w-10 h-6 border rounded-[3px] transition ' + (on ? 'border-white bg-white/10' : 'border-[color:var(--border)] bg-transparent');
      btn.innerHTML = '';
      const dot = document.createElement('div');
      dot.className = 'absolute top-0.5 left-0.5 w-5 h-5 bg-white ' + (on ? 'translate-x-4' : '') + ' transition';
      btn.appendChild(dot);
    }
    function openEventModal(ev) {
      const body = `
        <div class="space-y-2 text-sm">
          <div class="flex items-center gap-2"><i data-lucide="calendar"></i> <span>${ev.date}</span></div>
          <div class="flex items-center gap-2 capitalize"><i data-lucide="tag"></i> <span>${ev.type}</span></div>
          <div class="flex items-center gap-2"><i data-lucide="map-pin"></i> <span>${ev.location}</span></div>
          <p class="mt-2 text-[color:var(--muted)]">${ev.description || ''}</p>
          <div class="flex items-center gap-2 pt-2">
            <button class="px-3 py-2 border border-white hover:bg-white hover:text-black rounded-[3px]" onclick="openRSVP('${ev.id}')">RSVP</button>
            <button class="px-3 py-2 border border-[color:var(--border)] hover:border-white rounded-[3px]" onclick="openMap('${encodeURIComponent(ev.location)}')">View Map</button>
          </div>
        </div>
      `;
      showModal('Event Details', body);
      renderIcons();
    }
    function exportICS() {
      const events = state.data.events.filter(ev => state.filters[ev.type]);
      const lines = [
        'BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//RC Club//Calendar//EN'
      ];
      events.forEach(ev => {
        lines.push('BEGIN:VEVENT');
        lines.push('UID:' + ev.id + '@rcclub');
        lines.push('DTSTAMP:' + new Date().toISOString().replace(/[-:]/g,'').split('.')[0] + 'Z');
        lines.push('DTSTART;VALUE=DATE:' + ev.date.replace(/-/g,''));
        lines.push('SUMMARY:' + `[${ev.type}] ${ev.title}`);
        lines.push('LOCATION:' + ev.location);
        lines.push('DESCRIPTION:' + (ev.description || ''));
        lines.push('END:VEVENT');
      });
      lines.push('END:VCALENDAR');
      const blob = new Blob([lines.join('\r\n')], {type:'text/calendar'});
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'rcclub-events.ics';
      a.click();
    }

    // Gallery
    function renderGallery() {
      const year = qs('#galleryFilter').value;
      const grid = qs('#galleryGrid');
      grid.innerHTML = '';
      const items = state.data.gallery.filter(g => year==='all' ? true : g.year === year);
      items.forEach(g => {
        const fig = document.createElement('figure');
        fig.className = 'mb-4 break-inside-avoid';
        fig.innerHTML = `
          <img src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" alt="${g.title} - ${g.caption}" class="w-full rounded-[3px] border border-[color:var(--border)] hover:opacity-90 cursor-zoom-in" />
          <figcaption class="mt-1 text-xs text-[color:var(--muted)]">${g.title} • ${g.year}</figcaption>
        `;
        fig.querySelector('img').onclick = () => toggleLightbox(true, g.url, `${g.title} — ${g.caption}`);
        grid.appendChild(fig);
      });
    }
    qs('#galleryFilter').addEventListener('change', renderGallery);
    qs('#galleryUploadForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const item = {
        id: 'g'+(Date.now()),
        title: fd.get('title'), url: fd.get('url'), year: fd.get('year'), caption: fd.get('caption') || ''
      };
      // Add to moderation queue
      pendingMedia.push(item);
      showModal('Submitted', '<p class="text-sm">Your media has been submitted for review.</p>');
    });
    function toggleLightbox(show, src, caption='') {
      const lb = qs('#lightbox');
      if (show) {
        qs('#lightboxImg').src = src;
        qs('#lightboxCaption').textContent = caption;
        lb.classList.remove('hidden');
      } else {
        lb.classList.add('hidden');
      }
    }

    // Builds
    let pendingMedia = JSON.parse(localStorage.getItem('pendingMedia') || '[]');
    let pendingBuilds = JSON.parse(localStorage.getItem('pendingBuilds') || '[]');

    function renderBuilds() {
      const grid = qs('#buildsGrid');
      grid.innerHTML = '';
      state.data.builds.filter(b => b.approved).forEach(b => {
        const card = document.createElement('div');
        card.className = 'border border-[color:var(--border)] rounded-[3px] overflow-hidden bg-[color:var(--card)]';
        const specs = b.specs;
        card.innerHTML = `
          <div class="h-40 w-full overflow-hidden border-b border-[color:var(--border)]">
            <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80''}" alt="${b.name} lead photo" class="w-full h-full object-cover" />
          </div>
          <div class="p-4">
            <div class="flex items-start justify-between">
              <div>
                <h4 class="text-lg font-semibold tracking-tight" style="font-family: Orbitron, Inter;">${b.name}</h4>
                <div class="text-xs text-[color:var(--muted)]">by ${b.owner}</div>
              </div>
              <button class="flex items-center gap-2 px-2 py-1 border border-[color:var(--border)] hover:border-white rounded-[3px]" aria-label="Upvote" data-id="${b.id}">
                <i data-lucide="thumbs-up"></i><span class="text-xs">${b.votes}</span>
              </button>
            </div>
            <div class="mt-3 grid grid-cols-2 gap-2 text-xs font-mono" style="font-family: 'Roboto Mono', ui-monospace, SFMono-Regular;">
              <div>Scale: ${specs.scale}</div>
              <div>Motor: ${specs.motor}</div>
              <div>ESC: ${specs.esc}</div>
              <div>Battery: ${specs.battery}</div>
              <div>Weight: ${specs.weight}</div>
            </div>
            <div class="mt-3">
              <div class="text-xs text-[color:var(--muted)]">Mods:</div>
              <ul class="mt-1 list-disc ml-4 text-sm">
                ${b.mods.map(m => `<li>${m}</li>`).join('')}
              </ul>
            </div>
            <div class="mt-3 grid grid-cols-3 gap-2">
              ${b.photos.slice(0,3).map(p => `<img src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" alt="${b.name} photo" class="w-full h-16 object-cover border border-[color:var(--border)] rounded-[3px] cursor-zoom-in" onclick="toggleLightbox(true,'${p}','${b.name}')"/>`).join('')}
            </div>
            <div class="mt-4">
              <div class="text-sm font-medium">Comments</div>
              <div class="mt-2 space-y-2" id="comments-${b.id}">
                ${b.comments.map(c => `<div class="text-sm"><span class="text-white">${c.by}:</span> <span class="text-[color:var(--muted)]">${c.text}</span></div>`).join('')}
              </div>
              <form class="mt-2 flex items-center gap-2 text-sm" onsubmit="addComment(event,'${b.id}')">
                <input name="by" required placeholder="Name" class="flex-1 bg-black text-white px-2 py-2 border border-[color:var(--border)] rounded-[3px]" />
                <input name="text" required placeholder="Comment" class="flex-[2] bg-black text-white px-2 py-2 border border-[color:var(--border)] rounded-[3px]" />
                <button class="px-3 py-2 border border-white hover:bg-white hover:text-black rounded-[3px]">Post</button>
              </form>
            </div>
          </div>
        `;
        // Hook upvote
        const up = card.querySelector('button[aria-label="Upvote"]');
        up.onclick = () => voteBuild(b.id, up);
        grid.appendChild(card);
      });
      renderIcons();
    }
    function voteBuild(id, btn) {
      const b = state.data.builds.find(x => x.id===id);
      if (!b) return;
      const votedKey = 'voted_'+id;
      if (localStorage.getItem(votedKey)) {
        showModal('Already voted', '<p class="text-sm">You have already voted for this build.</p>');
        return;
      }
      b.votes += 1;
      save('builds');
      localStorage.setItem(votedKey,'1');
      btn.querySelector('span').textContent = b.votes;
    }
    function addComment(e, id) {
      e.preventDefault();
      const fd = new FormData(e.target);
      const c = { by: fd.get('by'), text: fd.get('text') };
      const b = state.data.builds.find(x=>x.id===id);
      if (!b) return;
      b.comments.push(c);
      save('builds');
      const holder = qs('#comments-'+id);
      const row = document.createElement('div');
      row.className = 'text-sm';
      row.innerHTML = `<span class="text-white">${c.by}:</span> <span class="text-[color:var(--muted)]">${c.text}</span>`;
      holder.appendChild(row);
      e.target.reset();
    }
    function renderModQueue() {
      const body = qs('#modQueueBody');
      body.innerHTML = '';
      // Pending builds
      pendingBuilds.forEach(b => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td class="py-2"><input type="checkbox" class="accent-white" data-id="${b.id}" /></td>
          <td class="py-2">${b.name}</td>
          <td class="py-2">${b.owner}</td>
          <td class="py-2">
            <button class="px-2 py-1 border border-white rounded-[3px] text-xs" onclick="approveBuild('${b.id}')">Approve</button>
            <button class="ml-2 px-2 py-1 border border-[color:var(--border)] hover:border-white rounded-[3px] text-xs" onclick="rejectBuild('${b.id}')">Reject</button>
          </td>
        `;
        body.appendChild(tr);
      });
      localStorage.setItem('pendingBuilds', JSON.stringify(pendingBuilds));
    }
    function approveBuild(id) {
      const idx = pendingBuilds.findIndex(b=>b.id===id);
      if (idx>=0) {
        const b = pendingBuilds.splice(idx,1)[0];
        b.approved = true;
        state.data.builds.push(b);
        save('builds');
        renderBuilds(); renderModQueue();
      }
    }
    function rejectBuild(id) {
      const idx = pendingBuilds.findIndex(b=>b.id===id);
      if (idx>=0) {
        pendingBuilds.splice(idx,1);
        renderModQueue();
      }
    }

    // Modal helpers
    function showModal(title, html) {
      qs('#modal-title').textContent = title;
      qs('#modal-body').innerHTML = html;
      qs('#modal-overlay').classList.remove('hidden');
    }
    function closeModal() {
      qs('#modal-overlay').classList.add('hidden');
    }
    function openMap(q) {
      const src = `https://www.google.com/maps?q=${q}&output=embed`;
      showModal('Location', `<div class="aspect-video border border-[color:var(--border)] rounded-[3px] overflow-hidden"><iframe class="w-full h-full grayscale" src="${src}" loading="lazy"></iframe></div>`);
    }
    function openRSVP(eventId) {
      showModal('RSVP', `
        <form id="rsvpForm" class="space-y-2 text-sm">
          <input name="name" required placeholder="Your Name" class="w-full bg-black text-white px-3 py-2 border border-[color:var(--border)] rounded-[3px]" />
          <input name="email" type="email" required placeholder="Your Email" class="w-full bg-black text-white px-3 py-2 border border-[color:var(--border)] rounded-[3px]" />
          <button class="px-3 py-2 border border-white hover:bg-white hover:text-black rounded-[3px]">Confirm</button>
        </form>
      `);
      qs('#rsvpForm').addEventListener('submit', (e) => {
        e.preventDefault();
        closeModal();
        showModal('RSVP Confirmed', '<p class="text-sm">Thanks! Your RSVP has been recorded.</p>');
      });
    }

    // Contact
    qs('#contactForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      // Placeholder: integrate mail or API
      showModal('Message sent', '<p class="text-sm">We received your message and will reply shortly.</p>');
      e.target.reset();
    });

    // Join wizard
    let step = 1;
    function updateJoinStep() {
      qsa('.join-step').forEach(el => el.classList.toggle('hidden', parseInt(el.dataset.step) !== step));
      qs('#joinProgress').style.width = (step*33) + '%';
      qs('#joinPrev').disabled = step === 1;
      qs('#joinNext').textContent = step === 3 ? 'Submit' : 'Next';
    }
    qs('#joinPrev').addEventListener('click', () => { if (step>1) step--; updateJoinStep(); });
    qs('#joinNext').addEventListener('click', () => {
      if (step < 3) { step++; updateJoinStep(); }
      else {
        showModal('Application Submitted', '<p class="text-sm">Thanks for joining! Check your email for confirmation.</p>');
        // Store member stub
        const form = qs('#joinForm');
        const fd = new FormData(form);
        state.data.members.push({
          first: fd.get('firstName'), last: fd.get('lastName'), email: fd.get('email')
        });
        localStorage.setItem('members', JSON.stringify(state.data.members));
        form.reset(); step=1; updateJoinStep();
      }
    });
    updateJoinStep();

    // Admin Auth (local fallback)
    function updateAdminUI() {
      const isAuthed = !!state.admin;
      qs('#adminAuth').classList.toggle('hidden', isAuthed);
      qs('#adminPanel').classList.toggle('hidden', !isAuthed);
      if (isAuthed) qs('#adminName').textContent = state.admin.email;
    }
    qs('#adminLoginBtn').addEventListener('click', () => {
      const email = qs('#adminEmail').value.trim();
      const pass = qs('#adminPassword').value;
      // Local fallback credentials (replace with Supabase/Firebase in production)
      if ((email === 'admin@rcclub.school.edu' && pass === 'rcadmin123') || (email && pass && pass === 'rcadmin123')) {
        state.admin = { email };
        localStorage.setItem('admin', JSON.stringify(state.admin));
        updateAdminUI();
        showModal('Signed In', '<p class="text-sm">Welcome, officer.</p>');
      } else {
        showModal('Access Denied', '<p class="text-sm">Invalid credentials.</p>');
      }
    });
    qs('#adminLogoutBtn').addEventListener('click', () => {
      state.admin = null; localStorage.removeItem('admin'); updateAdminUI();
    });
    updateAdminUI();

    // Admin: Add Event
    qs('#eventForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const ev = {
        id: 'e'+Date.now(),
        title: fd.get('title'), date: fd.get('date'), type: fd.get('type'),
        location: fd.get('location') || 'TBD', description: ''
      };
      state.data.events.push(ev); save('events');
      showModal('Event Added', '<p class="text-sm">The event has been added to the calendar.</p>');
      if (state.route === 'calendar') initCalendar();
      e.target.reset();
    });

    // Admin: Export Members CSV
    qs('#exportMembers').addEventListener('click', () => {
      const rows = [['First','Last','Email']].concat(state.data.members.map(m => [m.first,m.last,m.email]));
      const csv = rows.map(r => r.map(v => `"${(v||'').replace(/"/g,'""')}"`).join(',')).join('\n');
      const blob = new Blob([csv], {type:'text/csv'});
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob); a.download = 'members.csv'; a.click();
    });

    // Admin: Announcements
    qs('#announceForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const subject = fd.get('subject') || 'Club Announcement';
      showModal('Announcement Queued', `<p class="text-sm">Subject: ${subject}</p><p class="text-xs text-[color:var(--muted)]">Connect to Mailchimp or SMTP to send blasts automatically.</p>`);
      e.target.reset();
    });

    // Save sample data to localStorage initially to persist across refresh
    ['events','gallery','builds'].forEach(k => localStorage.getItem(k) || save(k));

    // Lightbox close
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { toggleLightbox(false); closeModal(); }});

    // Accessibility tweaks
    qsa('a, button, input, select, textarea').forEach(el => {
      el.addEventListener('focus', () => el.classList.add('outline','outline-1','outline-white/60'));
      el.addEventListener('blur', () => el.classList.remove('outline','outline-1','outline-white/60'));
    });

    // Year
    qs('#year').textContent = new Date().getFullYear();

    // Map/RSVP functions exposed
    window.openMap = openMap;
    window.openRSVP = openRSVP;
    window.toggleLightbox = toggleLightbox;

    // Placeholder reCAPTCHA v3 (replace site key and token retrieval)
    setTimeout(()=>{ const tokEl = qs('#recaptchaToken'); if (tokEl) tokEl.value = 'recaptcha-token-placeholder'; }, 500);

    // Supabase/Firebase integration hook (stub)
    // Replace with real keys and implement auth/storage syncing as needed.
    // Example pseudo:
    // const supabase = createClient('https://xyz.supabase.co','public-anon-key');
    // Use supabase.auth for OAuth, supabase.from('events') for DB, etc.

  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<div aria-hidden="true" className="fixed inset-0 bg-black/70 backdrop-blur-sm hidden items-center justify-center z-50" id="modal-overlay">
<div aria-label="Dialog" aria-modal="true" className="bg-[#0B0B0B] text-white w-[92vw] max-w-2xl border border-[color:var(--border)] rounded-[3px] shadow-lg" id="modal" role="dialog" style={{boxShadow: 'var(--shadow)'}}>
<div className="flex items-center justify-between px-4 py-3 border-b border-[color:var(--border)]">
<h3 className="text-lg font-semibold tracking-tight" id="modal-title" style={{fontFamily: 'Orbitron, Inter'}}>Modal</h3>
<button aria-label="Close dialog" className="p-1.5 border border-transparent hover:border-white/30 rounded-[3px]" onclick="closeModal()">
<i data-lucide="x"></i>
</button>
</div>
<div className="p-4 text-sm leading-6" id="modal-body"></div>
<div className="px-4 py-3 border-t border-[color:var(--border)] flex justify-end gap-2">
<button className="px-3 py-2 border border-white/40 hover:border-white text-white hover:bg-white hover:text-black rounded-[3px] transition transform hover:scale-[1.01]" onclick="closeModal()">Close</button>
</div>
</div>
</div>

<header className="sticky top-0 z-40 backdrop-blur border-b border-[color:var(--border)] bg-white/90">
<div className="max-w-7xl mx-auto px-4">
<div className="h-14 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#home">

<div className="w-8 h-8 flex items-center justify-center border rounded-[3px] tracking-tight border-black" style={{fontFamily: 'Orbitron, Inter', letterSpacing: '-0.02em'}}>
<span className="text-sm font-semibold text-black">RC</span>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-black" style={{fontFamily: 'Orbitron, Inter'}}>[School Name] RC Car Club</div>
<div className="text-xs text-[color:var(--muted)]">Build • Race • Innovate</div>
</div>
</a>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="nav-link hover:underline underline-offset-4" data-route="home" href="#home">Home</a>
<a className="nav-link hover:underline underline-offset-4" data-route="about" href="#about">About</a>
<a className="nav-link hover:underline underline-offset-4" data-route="calendar" href="#calendar">Calendar</a>
<a className="nav-link hover:underline underline-offset-4" data-route="gallery" href="#gallery">Gallery</a>
<a className="nav-link hover:underline underline-offset-4" data-route="builds" href="#builds">Builds</a>
<a className="nav-link hover:underline underline-offset-4" data-route="resources" href="#resources">Resources</a>
<a className="nav-link hover:underline underline-offset-4" data-route="join" href="#join">Join</a>
<a className="nav-link hover:underline underline-offset-4" data-route="contact-admin" href="#contact-admin">Contact/Admin</a>
</nav>
<div className="flex items-center gap-2">
<button aria-label="Toggle theme" className="px-2.5 py-1.5 border border-black/40 hover:border-black rounded-[3px] flex items-center gap-2 text-xs" id="themeToggle">
<i data-lucide="moon"></i><span className="hidden sm:inline">Dark</span>
</button>
<button aria-label="Open menu" className="md:hidden p-2 border border-white/30 hover:border-white rounded-[3px]" id="mobileMenuBtn">
<i data-lucide="menu"></i>
</button>
</div>
</div>
</div>

<div className="h-[1px] transition-all bg-black" id="activeRouteBar" style={{width: '0'}}></div>
</header>

<div className="md:hidden fixed inset-0 backdrop-blur z-40 hidden bg-white/95" id="mobileMenu">
<div className="max-w-7xl mx-auto px-4 py-4">
<div className="flex items-center justify-between pb-3 border-b border-[color:var(--border)]">
<div className="flex items-center gap-2">
<div className="w-8 h-8 flex items-center justify-center border rounded-[3px] border-black"><span className="text-sm font-semibold">RC</span></div>
<div className="text-sm font-semibold">Menu</div>
</div>
<button aria-label="Close menu" className="p-2 border border-white/30 hover:border-white rounded-[3px]" onclick="toggleMobileMenu()"><i data-lucide="x"></i></button>
</div>
<nav className="flex flex-col gap-2 mt-4 text-base">
<a className="py-2 border-b border-[color:var(--border)]" href="#home" onclick="toggleMobileMenu()">Home</a>
<a className="py-2 border-b border-[color:var(--border)]" href="#about" onclick="toggleMobileMenu()">About</a>
<a className="py-2 border-b border-[color:var(--border)]" href="#calendar" onclick="toggleMobileMenu()">Calendar</a>
<a className="py-2 border-b border-[color:var(--border)]" href="#gallery" onclick="toggleMobileMenu()">Gallery</a>
<a className="py-2 border-b border-[color:var(--border)]" href="#builds" onclick="toggleMobileMenu()">Builds</a>
<a className="py-2 border-b border-[color:var(--border)]" href="#resources" onclick="toggleMobileMenu()">Resources</a>
<a className="py-2 border-b border-[color:var(--border)]" href="#join" onclick="toggleMobileMenu()">Join</a>
<a className="py-2" href="#contact-admin" onclick="toggleMobileMenu()">Contact/Admin</a>
</nav>
</div>
</div>

<main className="max-w-7xl mx-auto px-4" id="app">

<section className="route-view py-8 md:py-12" id="view-home">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
<div aria-label="RC action carousel" className="relative overflow-hidden border border-[color:var(--border)] rounded-[3px]">
<div className="h-[46vh] min-h-[320px] w-full relative" id="heroCarousel">

<img alt="RC car jumping ramp in grayscale" className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-700" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&amp;w=1400&amp;auto=format&amp;fit=crop&amp;grayscale"/>
<img alt="Close-up RC car build in grayscale" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Track race scene in grayscale" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700" src="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&amp;w=1400&amp;auto=format&amp;fit=crop&amp;grayscale"/>
</div>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-white/80"></div>
<div className="w-1.5 h-1.5 bg-white/30"></div>
<div className="w-1.5 h-1.5 bg-white/30"></div>
</div>
</div>
</div>
<div className="flex flex-col justify-between border border-[color:var(--border)] rounded-[3px] p-6 bg-[color:var(--card)]" style={{boxShadow: 'var(--shadow)'}}>
<div>
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{fontFamily: 'Orbitron, Inter'}}>[School Name] RC Car Club</h1>
<p className="text-sm text-[color:var(--muted)] mt-2">Build, Race, Innovate — a technical community for RC engineering, performance tuning, and competitive racing.</p>
<div className="mt-4 flex flex-wrap gap-3">
<a className="px-4 py-2 bg-white text-black border border-white hover:bg-transparent hover:text-white rounded-[3px] transition transform hover:scale-[1.02] hover:shadow-[0_0_0_1px_#fff]" href="#join">Join Now</a>
<a className="px-4 py-2 border border-white hover:bg-white hover:text-black rounded-[3px] transition transform hover:scale-[1.02]" href="#calendar">Upcoming Events</a>
<a className="px-4 py-2 border border-white/40 hover:border-white rounded-[3px] transition transform hover:scale-[1.02]" href="#builds">Explore Builds</a>
</div>
</div>
<div className="mt-6">
<div className="text-xs uppercase tracking-[0.08em] text-[color:var(--muted)] mb-2">Latest Race Video</div>
<div className="aspect-video border border-[color:var(--border)] rounded-[3px] overflow-hidden">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="w-full h-full" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;modestbranding=1" title="Recent race highlight"></iframe>
</div>
</div>
</div>
</div>

<div className="mt-8 grid md:grid-cols-3 gap-4">
<div className="border border-[color:var(--border)] rounded-[3px] p-4 bg-[color:var(--card)]">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: 'Orbitron, Inter'}}>Engineering</h3>
<p className="text-sm text-[color:var(--muted)] mt-1">Hands-on builds: electronics, chassis, powertrains, and materials science.</p>
</div>
<div className="border border-[color:var(--border)] rounded-[3px] p-4 bg-[color:var(--card)]">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: 'Orbitron, Inter'}}>Competition</h3>
<p className="text-sm text-[color:var(--muted)] mt-1">Internal time trials and inter-school races with structured categories.</p>
</div>
<div className="border border-[color:var(--border)] rounded-[3px] p-4 bg-[color:var(--card)]">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: 'Orbitron, Inter'}}>Community</h3>
<p className="text-sm text-[color:var(--muted)] mt-1">Peer mentorship and open-source knowledge sharing.</p>
</div>
</div>
</section>

<section className="route-view hidden py-10" id="view-about">
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 border border-[color:var(--border)] rounded-[3px] p-6">
<h2 className="text-2xl font-semibold tracking-tight" style={{fontFamily: 'Orbitron, Inter'}}>About the Club</h2>
<p className="text-sm text-[color:var(--muted)] mt-2">Founded in 2014, our club focuses on precision engineering, competitive racing, and collaborative skill-building.</p>
<div className="mt-6 grid sm:grid-cols-3 gap-4">

<div className="border border-[color:var(--border)] rounded-[3px] p-4">
<img alt="Club President portrait in grayscale" className="w-full h-32 object-cover border border-[color:var(--border)] rounded-[3px]" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=600&amp;auto=format&amp;fit=crop&amp;grayscale"/>
<div className="mt-2 text-sm font-medium">Alex Chen</div>
<div className="text-xs text-[color:var(--muted)]">President • Mechanical Design</div>
</div>
<div className="border border-[color:var(--border)] rounded-[3px] p-4">
<img alt="Club Vice President portrait in grayscale" className="w-full h-32 object-cover border border-[color:var(--border)] rounded-[3px]" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="mt-2 text-sm font-medium">Priya Singh</div>
<div className="text-xs text-[color:var(--muted)]">Vice President • Electronics</div>
</div>
<div className="border border-[color:var(--border)] rounded-[3px] p-4">
<img alt="Club Treasurer portrait in grayscale" className="w-full h-32 object-cover border border-[color:var(--border)] rounded-[3px]" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=600&amp;auto=format&amp;fit=crop&amp;grayscale"/>
<div className="mt-2 text-sm font-medium">Marcus Lee</div>
<div className="text-xs text-[color:var(--muted)]">Treasurer • Logistics</div>
</div>
</div>
<div className="mt-6">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: 'Orbitron, Inter'}}>Membership Benefits</h3>
<ul className="mt-2 grid sm:grid-cols-2 gap-2 text-sm text-[color:var(--muted)]">
<li className="flex items-center gap-2"><i data-lucide="check-circle"></i> Workshop access and tools</li>
<li className="flex items-center gap-2"><i data-lucide="check-circle"></i> Discount parts partnerships</li>
<li className="flex items-center gap-2"><i data-lucide="check-circle"></i> Coaching and mentorship</li>
<li className="flex items-center gap-2"><i data-lucide="check-circle"></i> Competition subsidies</li>
</ul>
</div>
</div>
<div className="border border-[color:var(--border)] rounded-[3px] p-6">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: 'Orbitron, Inter'}}>Meetings</h3>
<p className="text-sm text-[color:var(--muted)]">Weekly on Wednesdays, 4:00–6:00 PM, Engineering Lab B.</p>
<div className="mt-4 border border-[color:var(--border)] rounded-[3px] overflow-hidden">
<iframe aria-label="Google Calendar" className="w-full h-64 grayscale" loading="lazy" src="https://calendar.google.com/calendar/embed?src=address%40gmail.com&amp;ctz=America%2FNew_York" title="Google Calendar"></iframe>
</div>
</div>
</div>
</section>

<section className="route-view hidden py-10" id="view-calendar">
<div className="grid lg:grid-cols-4 gap-6">
<aside className="lg:col-span-1 border border-[color:var(--border)] rounded-[3px] p-4 h-fit">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: 'Orbitron, Inter'}}>Filters</h3>
<div className="mt-3 space-y-2 text-sm">
<label className="flex items-center justify-between gap-3">
<span>Meetings</span>
<button aria-label="Toggle meetings" className="toggle" data-filter="meeting"></button>
</label>
<label className="flex items-center justify-between gap-3">
<span>Races</span>
<button aria-label="Toggle races" className="toggle" data-filter="race"></button>
</label>
<label className="flex items-center justify-between-3">
<span>Workshops</span>
<button aria-label=" workshops" className="toggle" data-filter="workshop"></button>
</label>
</div>
<div className="mt-4">
<button border="" border-white="" hover:bg-white="" hover:text-black="" id="exportICS className=" px-3="" py-2="" rounded-[3px]="" transition"="" w-full="">Export .</button>
</div>
</aside>
<div className="lg:col-span-3 border border-[color:varborder)] rounded-[3px] p-2">
<div className="bg-black text-white" id="calendar"></div>
</div>

</div></section>

<section hidden="" id="view-gallery className=" py-10"="" route-view="">
<div className="flex items-end justify-between gap-4">
<div>
         h2 className="text-2xl font-semibold tracking-tight" style={{fontFamily: 'Orbitron, Inter'}}&gt;Gallery
 <p className="text-sm text-[color:var(--muted)] mt-1">High-resolution photos and clips — all grayscale for.</p>
</div>
<div className="flex items-center gap-2">
<select className="bg-black text-white text-sm px-3 py-2 border border-[color:var(--border)] rounded-[3px]" id="galleryFilter">
<option value="all">All</option>
<option value="2025">2025</option>
<option value="2024">2024</option>
</select>
</div>
</div>
<div className="mt-6 columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]" id="galleryGrid"></div>
<div className="mt-8 border border-[color:var(--border)] rounded-[3px] p-4">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: 'Orbitron, Inter'}}>Submit Media</h3>
<form className="mt-3 grid md:grid-cols-3 gap-3" id="galleryUploadForm">
<input className="bg-black text-white px-3 py-2 border border-[color:var(--border)] rounded-[3px]" name="title" placeholder="Title" required="" type="text"/>
<input className="bg-black text-white px-3 py-2 border border-[color:var(--border)] rounded-[3px]" name="url" placeholder="Image/Video URL (grayscale preferred)" required="" type="url"/>
<select className="bg-black text-white px-3 py-2 border border-[color:var(--border)] rounded-[3px]" name="year">
<option>2025</option>
<option>2024</option>
</select>
<textarea className="md:col-span-2 bg-black text-white px-3 py-2 border border-[color:var(--border)] rounded-[3px]" name="caption" placeholder="Caption"></textarea>
<button className="px-4 py-2 border border-white hover:bg-white hover:text-black rounded-[3px]">Submit for Review</button>
</form>
<p className="text-xs text-[color:var(--muted)] mt-2">Submissions are moderated before appearing publicly.</p>
</div>
</section>

<section className="route-view hidden py-10" id="view-builds">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight" style={{fontFamily: 'Orbitron, Inter'}}>Builds Showcase</h2>
<p className="text-sm text-[color:var(--muted)] mt-1">Member-submitted builds with specs, photos, and community feedback.</p>
</div>
<a className="px-4 py-2 border border-[color:var(--border)] hover:border-white rounded-[3px]" href="#contact-admin">Submit a Build</a>
</div>
<div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4" id="buildsGrid"></div>
<div className="mt-10 border border-[color:var(--border)] rounded-[3px] p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: 'Orbitron, Inter'}}>Moderation Queue</h3>
<div className="text-xs text-[color:var(--muted)]">Officers only</div>
</div>
<div className="mt-3 overflow-x-auto" id="modQueue">
<table className="w-full text-sm">
<thead className="text-left">
<tr className="border-b border-[color:var(--border)]">
<th className="py-2">Approve</th>
<th className="py-2">Name</th>
<th className="py-2">Owner</th>
<th className="py-2">Actions</th>
</tr>
</thead>
<tbody id="modQueueBody"></tbody>
</table>
</div>
</div>
</section>

<section className="route-view hidden py-10" id="view-resources">
<h2 className="text-2xl font-semibold tracking-tight" style={{fontFamily: 'Orbitron, Inter'}}>Resources</h2>
<div className="mt-4 grid md:grid-cols-2 gap-6">
<div className="border border-[color:var(--border)] rounded-[3px] p-4">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: 'Orbitron, Inter'}}>Downloads</h3>
<ul className="mt-3 space-y-2 text-sm">
<li className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2"><i data-lucide="file-down"></i> Beginner Guide (PDF)</div>
<a className="underline hover:no-underline" href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" rel="noopener" target="_blank">Download</a>
</li>
<li className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2"><i data-lucide="file-down"></i> Parts List (PDF)</div>
<a className="underline hover:no-underline" href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" rel="noopener" target="_blank">Download</a>
</li>
<li className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2"><i data-lucide="file-down"></i> Safety Protocols (PDF)</div>
<a className="underline hover:no-underline" href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" rel="noopener" target="_blank">Download</a>
</li>
<li className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2"><i data-lucide="file-down"></i> Track Blueprint (PDF)</div>
<a className="underline hover:no-underline" href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" rel="noopener" target="_blank">Download</a>
</li>
</ul>
</div>
<div className="border border-[color:var(--border)] rounded-[3px] p-4">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: 'Orbitron, Inter'}}>Curated Tutorials</h3>
<ul className="mt-3 list-disc ml-5 text-sm">
<li><a aria-label="ESC Tuning Guide" className="underline hover:no-underline" href="#">ESC tuning fundamentals</a></li>
<li><a aria-label="Brushless Motor Basics" className="underline hover:no-underline" href="#">Brushless motor basics</a></li>
<li><a aria-label="Chassis Setup" className="underline hover:no-underline" href="#">Chassis setup for different surfaces</a></li>
</ul>
</div>
</div>
<div className="mt-6 border border-[color:var(--border)] rounded-[3px] p-4">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: 'Orbitron, Inter'}}>Inventory Tracker</h3>
<div className="mt-3 border border-[color:var(--border)] rounded-[3px] overflow-hidden">
<iframe className="w-full h-72 grayscale" loading="lazy" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3pK2bWk/pubhtml?gid=0&amp;single=true" title="Inventory Tracker"></iframe>
</div>
</div>
</section>

<section className="route-view hidden py-10" id="view-join">
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 border border-[color:var(--border)] rounded-[3px] p-6">
<h2 className="text-2xl font-semibold tracking-tight" style={{fontFamily: 'Orbitron, Inter'}}>Membership Application</h2>

<div className="mt-4">
<div className="w-full h-1 bg-white/10 rounded-[3px]">
<div className="h-1 bg-white transition-all rounded-[3px]" id="joinProgress" style={{width: '33%'}}></div>
</div>
</div>
<form className="mt-6 space-y-4" id="joinForm" novalidate="">

<div className="join-step" data-step="1">
<div className="grid md:grid-cols-2 gap-3">
<input className="bg-black text-white px-3 py-2 border border-[color:var(--border)] rounded-[3px]" name="firstName" placeholder="First Name" required=""/>
<input className="bg-black text-white px-3 py-2 border border-[color:var(--border)] rounded-[3px]" name="lastName" placeholder="Last Name" required=""/>
<input className="md:col-span-2 bg-black text-white px-3 py-2 border border-[color:var(--border)] rounded-[3px]" name="email" placeholder="School Email" required="" type="email"/>
</div>
</div>

<div className="join-step hidden" data-step="2">
<div className="grid md:grid-cols-2 gap-3">
<input className="bg-black text-white px-3 py-2 border border-[color:var(--border)] rounded-[3px]" name="grade" placeholder="Grade" required=""/>
<input className="bg-black text-white px-3 py-2 border border-[color:var(--border)] rounded-[3px]" name="major" placeholder="Department/Major"/>
<textarea className="md:col-span-2 bg-black text-white px-3 py-2 border border-[color:var(--border)] rounded-[3px]" name="experience" placeholder="RC experience (optional)"></textarea>
</div>
</div>

<div className="join-step hidden" data-step="3">
<div className="grid md:grid-cols-2 gap-3">
<input className="bg-black text-white px-3 py-2 border border-[color:var(--border)] rounded-[3px]" name="tshirt" placeholder="T-Shirt Size (e.g., M)"/>
<input className="bg-black text-white px-3 py-2 border border-[color:var(--border)] rounded-[3px]" name="discord" placeholder="Discord ID (optional)"/>
<div className="md:col-span-2 flex items-center gap-2 text-sm">
<input className="w-4 h-4 accent-white bg-black border border-[color:var(--border)]" id="codeOfConduct" required="" type="checkbox"/>
<label htmlFor="codeOfConduct">I agree to the club code of conduct.</label>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-2">
<button className="px-4 py-2 border border-[color:var(--border)] hover:border-white rounded-[3px]" id="joinPrev" type="button">Back</button>
<div className="flex items-center gap-2">
<a className="px-4 py-2 border border-white hover:bg-white hover:text-black rounded-[3px]" href="https://forms.gle/" rel="noopener" target="_blank">Open Google Form</a>
<button className="px-4 py-2 bg-white text-black border border-white hover:bg-transparent hover:text-white rounded-[3px]" id="joinNext" type="button">Next</button>
</div>
</div>
</form>
</div>
<div className="border border-[color:var(--border)] rounded-[3px] p-6">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: 'Orbitron, Inter'}}>Dues &amp; Payment</h3>
<p className="text-sm text-[color:var(--muted)]">Semester dues: $25 — used for parts, track maintenance, and event fees.</p>
<div className="mt-4 grid grid-cols-2 gap-4">
<div className="border border-[color:var(--border)] rounded-[3px] p-3">
<div className="text-xs text-[color:var(--muted)]">PayPal</div>
<img alt="PayPal QR black-and-white" className="w-full h-40 object-contain" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="border border-[color:var(--border)] rounded-[3px] p-3">
<div className="text-xs text-[color:var(--muted)]">Venmo</div>
<img alt="Venmo QR black-and-white" className="w-full h-40 object-contain" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
</div>
<div className="mt-6 border border-[color:var(--border)] rounded-[3px] overflow-hidden">
<iframe className="w-full h-44 grayscale" loading="lazy" src="https://www.youtube.com/embed/5NV6Rdv1a3I?rel=0&amp;modestbranding=1" title="Club Build Session"></iframe>
</div>
</div>
</div>
</section>

<section className="route-view hidden py-10" id="view-contact-admin">
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 border border-[color:var(--border)] rounded-[3px] p-6">
<h2 className="text-2xl font-semibold tracking-tight" style={{fontFamily: 'Orbitron, Inter'}}>Contact</h2>
<form className="mt-4 grid md:grid-cols-2 gap-3" id="contactForm">
<input className="bg-black text-white px-3 py-2 border border-[color:var(--border)] rounded-[3px]" name="name" placeholder="Your Name" required=""/>
<input className="bg-black text-white px-3 py-2 border border-[color:var(--border)] rounded-[3px]" name="email" placeholder="Your Email" required="" type="email"/>
<input className="md:col-span-2 bg-black text-white px-3 py-2 border border-[color:var(--border)] rounded-[3px]" name="subject" placeholder="Subject" required=""/>
<textarea className="md:col-span-2 bg-black text-white px-3 py-2 border border-[color:var(--border)] rounded-[3px]" name="message" placeholder="Message" required="" rows="4"></textarea>
<input id="recaptchaToken" name="recaptcha_token" type="hidden"/>
<div className="md:col-span-2 flex items-center justify-between">
<div className="text-xs text-[color:var(--muted)]">Protected by reCAPTCHA v3</div>
<button className="px-4 py-2 border border-white hover:bg-white hover:text-black rounded-[3px]" type="submit">Send</button>
</div>
</form>
</div>
<div className="border border-[color:var(--border)] rounded-[3px] p-6">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: 'Orbitron, Inter'}}>Officer Dashboard</h3>
<div className="mt-3 space-y-2" id="adminAuth">
<input className="w-full bg-black text-white px-3 py-2 border border-[color:var(--border)] rounded-[3px]" id="adminEmail" placeholder="Officer Email"/>
<input className="w-full bg-black text-white px-3 py-2 border border-[color:var(--border)] rounded-[3px]" id="adminPassword" placeholder="Password" type="password"/>
<button className="w-full px-3 py-2 border border-white hover:bg-white hover:text-black rounded-[3px]" id="adminLoginBtn">Sign In</button>
<div className="text-xs text-[color:var(--muted)]">Use institutional SSO or provided credentials.</div>
</div>
<div className="hidden mt-4 space-y-4" id="adminPanel">
<div className="flex items-center justify-between">
<div className="text-sm">Signed in as <span className="font-medium" id="adminName">Officer</span></div>
<button className="px-3 py-1.5 border border-[color:var(--border)] hover:border-white rounded-[3px]" id="adminLogoutBtn">Sign Out</button>
</div>
<div className="border border-[color:var(--border)] rounded-[3px] p-3">
<div className="text-sm font-semibold">Approve Media/Builds</div>
<div className="text-xs text-[color:var(--muted)]">Use the tables in Gallery/Builds pages.</div>
</div>
<div className="border border-[color:var(--border)] rounded-[3px] p-3">
<div className="text-sm font-semibold">Manage Events</div>
<form className="mt-2 grid md:grid-cols-3 gap-2 text-sm" id="eventForm">
<input className="bg-black text-white px-2 py-2 border border-[color:var(--border)] rounded-[3px]" name="title" placeholder="Title"/>
<input className="bg-black text-white px-2 py-2 border border-[color:var(--border)] rounded-[3px]" name="date" type="date"/>
<select className="bg-black text-white px-2 py-2 border border-[color:var(--border)] rounded-[3px]" name="type">
<option value="meeting">Meeting</option>
<option value="race">Race</option>
<option value="workshop">Workshop</option>
</select>
<input className="md:col-span-2 bg-black text-white px-2 py-2 border border-[color:var(--border)] rounded-[3px]" name="location" placeholder="Location"/>
<button className="px-3 py-2 border border-white hover:bg-white hover:text-black rounded-[3px]">Add</button>
</form>
</div>
<div className="border border-[color:var(--border)] rounded-[3px] p-3">
<div className="text-sm font-semibold">Members Export</div>
<button className="mt-2 px-3 py-2 border border-[color:var(--border)] hover:border-white rounded-[3px]" id="exportMembers">Export CSV</button>
</div>
<div className="border border-[color:var(--border)] rounded-[3px] p-3">
<div className="text-sm font-semibold">Announcements</div>
<form className="mt-2 flex items-center gap-2" id="announceForm">
<input className="flex-1 bg-black text-white px-2 py-2 border border-[color:var(--border)] rounded-[3px]" name="subject" placeholder="Subject"/>
<button className="px-3 py-2 border border-white hover:bg-white hover:text-black rounded-[3px]" title="Send email blast">Send</button>
</form>
<div className="text-xs text-[color:var(--muted)] mt-2">Integrate with Mailchimp or SMTP on deployment.</div>
</div>
</div>
</div>
</div>

</section>
</main>

<footer className="mt-10 border-t border-[color:var(--border)]">
<div className="max-w-7xl mx-auto px-4 py-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
<div className="text-[color:var(--muted)]">© <span id="year"></span> [School Name] RC Car Club</div>
<div className="flex items-center gap-4">
<a className="underline hover:no-underline" href="#resources">Resources</a>
<a className="underline hover:no-underline" href="#join">Join</a>
<a className="underline hover:no-underline" href="#contact-admin">Contact</a>
</div>
</div>
</footer>

<div className="fixed inset-0 bg-black/90 hidden items-center justify-center z-50" id="lightbox">
<button aria-label="Close lightbox" className="absolute top-4 right-4 p-2 border border-white/30 hover:border-white rounded-[3px]" onclick="toggleLightbox(false)"><i data-lucide="x"></i></button>
<figure className="max-w-5xl w-[92vw]">
<img alt="" className="w-full h-auto object-contain border border-[color:var(--border)] rounded-[3px]" id="lightboxImg"/>
<figcaption className="mt-3 text-center text-sm text-[color:var(--muted)]" id="lightboxCaption"></figcaption>
</figure>
</div>



    </>
  );
}
