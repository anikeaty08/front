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
      try { lucide.createIcons(); } catch(e) {}

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Mobile nav
      const navToggle = document.getElementById('nav-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
      if (navToggle) navToggle.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

      // Apply buttons -> scroll to application
      ['open-apply-from-header','open-apply-from-mobile','open-apply-from-card'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('click', () => document.getElementById('application').scrollIntoView({behavior:'smooth'}));
      });

      // Tax deadline countdown
      const countdownEl = document.getElementById('tax-countdown');
      function nextTaxDeadline() {
        const now = new Date();
        const year = now.getMonth() > 3 || (now.getMonth()===3 && now.getDate()>15) ? now.getFullYear() : now.getFullYear();
        // If past April 15 this year, target Oct 15; else April 15
        let target = new Date(now.getFullYear(), 3, 15, 23, 59, 59);
        if (now > target) target = new Date(now.getFullYear(), 9, 15, 23, 59, 59);
        return target;
      }
      function renderCountdown() {
        const t = nextTaxDeadline();
        const diff = Math.max(0, t - new Date());
        const d = Math.floor(diff/86400000);
        const h = Math.floor((diff%86400000)/3600000);
        const m = Math.floor((diff%3600000)/60000);
        if (countdownEl) countdownEl.textContent = d + ' days • ' + h + ' hrs • ' + m + ' mins';
      }
      renderCountdown();
      setInterval(renderCountdown, 60000);

      // Next available
      const nextEl = document.getElementById('next-available');
      function computeNextSlot() {
        const now = new Date();
        const next = new Date(now.getTime() + 1000*60*60*24*2); // in 2 days
        const options = { weekday:'short', month:'short', day:'numeric' };
        return next.toLocaleDateString(undefined, options) + ' at 10:00 AM';
        }
      if (nextEl) nextEl.textContent = computeNextSlot();

      // Back to top visibility
      const topBtn = document.getElementById('back-to-top');
      window.addEventListener('scroll', () => {
        if (!topBtn) return;
        if (window.scrollY > 800) topBtn.classList.remove('hidden'); else topBtn.classList.add('hidden');
      });
      if (topBtn) topBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

      // Consent gating submit
      const submitBtn = document.getElementById('submit-application');
      const checks = ['consent-ecs','consent-info','consent-croa'].map(id => document.getElementById(id));
      checks.forEach(ch => ch && ch.addEventListener('change', () => {
        const all = checks.every(el => el && el.checked);
        if (submitBtn) {
          submitBtn.disabled = !all;
          submitBtn.classList.toggle('bg-gray-900', all);
          submitBtn.classList.toggle('bg-gray-300', !all);
        }
      }));

      // Application submit
      const appForm = document.querySelector('#application form');
      if (appForm) appForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Submitted! We’ll be in touch shortly.');
      });

      // File upload
      const drop = document.getElementById('dropzone');
      const fileInput = document.getElementById('file-input');
      const fileName = document.getElementById('file-name');
      if (drop && fileInput) {
        drop.addEventListener('click', () => fileInput.click());
        drop.addEventListener('dragover', (e) => { e.preventDefault(); drop.classList.add('border-gray-400'); });
        drop.addEventListener('dragleave', () => drop.classList.remove('border-gray-400'));
        drop.addEventListener('drop', (e) => {
          e.preventDefault();
          drop.classList.remove('border-gray-400');
          const f = e.dataTransfer.files[0];
          if (f) { fileInput.files = e.dataTransfer.files; fileName.textContent = 'Attached: ' + f.name; }
        });
        fileInput.addEventListener('change', () => {
          const f = fileInput.files[0];
          if (f) fileName.textContent = 'Attached: ' + f.name;
        });
      }

      // Co-app toggle
      const toggle = document.getElementById('toggle-coapp');
      const panel = document.getElementById('coapp-panel');
      if (toggle && panel) {
        toggle.addEventListener('change', () => {
          panel.classList.toggle('hidden', !toggle.checked);
        });
      }

      // Chat controls
      const chatBtn = document.getElementById('chat-button');
      const chatContainer = document.getElementById('chat-container');
      const chatForm = document.getElementById('chat-form');
      const chatInput = document.getElementById('chat-input');
      const chatLog = document.getElementById('chat-log');
      if (chatBtn) chatBtn.addEventListener('click', () => toggleChat(true));
      if (chatForm) chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const text = (chatInput.value || '').trim();
        if (!text) return;
        appendChat('user', text);
        chatInput.value = '';
        appendChat('bot', 'Thinking…');
        // Stub for AI call — integrate your server/proxy here
        setTimeout(() => {
          const last = chatLog.querySelectorAll('.bot-msg');
          if (last.length) last[last.length-1].querySelector('div').textContent =
            'Thanks! A specialist can help with that. Would you like me to book a consultation or open the application?';
        }, 600);
      });
      window.toggleChat = (open) => {
        if (!chatContainer) return;
        chatContainer.classList.toggle('hidden', !open);
      };
      function appendChat(role, text) {
        const wrap = document.createElement('div');
        wrap.className = 'flex items-start gap-3 ' + (role==='user' ? 'justify-end' : '');
        if (role==='bot') {
          wrap.classList.add('bot-msg');
          wrap.innerHTML = `
            <div class="p-2 rounded-lg bg-gray-900 text-white"><svg data-lucide="bot" class="w-4 h-4"></svg></div>
            <div class="bg-gray-50 border border-gray-100 px-3 py-2 rounded-2xl">${text}</div>`;
        } else {
          wrap.innerHTML = `
            <div class="bg-blue-600 text-white px-3 py-2 rounded-2xl">${text}</div>`;
        }
        chatLog.appendChild(wrap);
        chatLog.scrollTop = chatLog.scrollHeight;
        try { lucide.createIcons(); } catch(e) {}
      }

      // Booking calendar init
      initCalendar();
    });

    // Booking modal public API
    function openBooking(service) {
      document.body.classList.add('modal-open');
      document.getElementById('booking-modal').classList.remove('hidden');
      document.getElementById('booking-title').textContent = service + ' — Select date & time';
      selected.service = service;
      renderTimes();
    }
    function closeModal(id) {
      document.getElementById(id)?.classList.add('hidden');
      if (id === 'booking-modal') document.body.classList.remove('modal-open');
    }
    function openModal(id) {
      document.getElementById(id)?.classList.remove('hidden');
    }
    function showToast(msg) {
      const t = document.getElementById('toast');
      if (!t) return;
      t.querySelector('div').textContent = msg;
      t.classList.remove('hidden');
      setTimeout(() => t.classList.add('hidden'), 3000);
    }

    // Calendar logic
    const state = { viewYear: null, viewMonth: null }; // month 0-11
    const selected = { date: null, time: null, service: null };

    function initCalendar() {
      const now = new Date();
      state.viewYear = now.getFullYear();
      state.viewMonth = now.getMonth();
      renderCalendar();
      renderTimes();
      const tz = document.getElementById('tz-select');
      if (tz) tz.addEventListener('change', renderTimes);
      const confirmBtn = document.getElementById('confirm-booking');
      if (confirmBtn) confirmBtn.addEventListener('click', () => {
        if (!selected.date || !selected.time) return;
        closeModal('booking-modal');
        showToast('Booked ' + selected.service + ' on ' + selected.date.toDateString() + ' at ' + selected.time);
      });
    }

    function renderCalendar() {
      const label = document.getElementById('cal-label');
      const grid = document.getElementById('calendar-grid');
      if (!grid || !label) return;
      grid.innerHTML = '';

      const firstOfMonth = new Date(state.viewYear, state.viewMonth, 1);
      const startDay = firstOfMonth.getDay();
      const daysInMonth = new Date(state.viewYear, state.viewMonth + 1, 0).getDate();
      label.textContent = firstOfMonth.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });

      // 12-month limit
      const now = new Date();
      const max = new Date(now.getFullYear(), now.getMonth() + 12, now.getDate());

      // Leading blanks
      for (let i=0; i<startDay; i++) {
        const cell = document.createElement('div');
        grid.appendChild(cell);
      }
      // Days
      for (let d=1; d<=daysInMonth; d++) {
        const date = new Date(state.viewYear, state.viewMonth, d);
        const disabled = date < new Date(now.getFullYear(), now.getMonth(), now.getDate()) || date > max || date.getDay() === 0; // no Sundays
        const btn = document.createElement('button');
        btn.className = 'w-full aspect-square rounded-xl text-sm ' + (disabled ? 'text-gray-300 cursor-not-allowed border border-gray-100' : 'border border-gray-200 hover:bg-gray-50');
        btn.textContent = d;
        btn.disabled = disabled;
        if (selected.date && sameDay(date, selected.date)) {
          btn.classList.add('bg-gray-900','text-white','border-gray-900');
        }
        btn.addEventListener('click', () => {
          selected.date = date;
          selected.time = null;
          renderCalendar();
          renderTimes();
        });
        grid.appendChild(btn);
      }
    }
    function sameDay(a,b){ return a && b && a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate(); }
    function prevMonth(){
      const now = new Date();
      const min = new Date(now.getFullYear(), now.getMonth(), 1);
      const prev = new Date(state.viewYear, state.viewMonth - 1, 1);
      if (prev < min) return;
      state.viewMonth -= 1;
      if (state.viewMonth < 0) { state.viewMonth = 11; state.viewYear -= 1; }
      renderCalendar(); renderTimes();
    }
    function nextMonth(){
      const now = new Date();
      const max = new Date(now.getFullYear(), now.getMonth() + 12, 1);
      const next = new Date(state.viewYear, state.viewMonth + 1, 1);
      if (next > max) return;
      state.viewMonth += 1;
      if (state.viewMonth > 11) { state.viewMonth = 0; state.viewYear += 1; }
      renderCalendar(); renderTimes();
    }
    function renderTimes(){
      const grid = document.getElementById('times-grid');
      const confirmBtn = document.getElementById('confirm-booking');
      if (!grid) return;
      grid.innerHTML = '';
      const times = ['9:00 AM','10:00 AM','11:00 AM','1:00 PM','2:00 PM','3:00 PM','4:00 PM'];
      times.forEach(t => {
        const b = document.createElement('button');
        b.textContent = t;
        const selectable = !!selected.date;
        b.className = 'px-3 py-2 rounded-xl border text-sm ' + (selectable ? 'border-gray-200 hover:bg-gray-50' : 'border-gray-100 text-gray-300 cursor-not-allowed');
        b.disabled = !selectable;
        if (selectable && selected.time === t) b.classList.add('bg-gray-900','text-white','border-gray-900');
        b.addEventListener('click', () => {
          selected.time = t;
          renderTimes();
          confirmBtn.disabled = !(selected.date && selected.time);
        });
        grid.appendChild(b);
      });
      if (confirmBtn) confirmBtn.disabled = !(selected.date && selected.time);
    }
  
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
      

<div className="w-full bg-gray-900 text-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-2 flex items-center justify-between text-sm">
<div className="flex items-center gap-4">
<span className="inline-flex items-center gap-2"><svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Jacksonville, FL HQ • Serving All 50 States</span>
<span className="hidden md:inline-flex items-center gap-2"><svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Bonded &amp; Insured • Surety Bond #SB271887</span>
</div>
<div className="flex items-center gap-4">
<a className="inline-flex items-center gap-2 hover:opacity-90" href="tel:+19045551234">866-960-9499<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg></a>
<a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition" href="#book"><svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Book Free Consultation</a>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-white/80 glass border-b border-gray-100">
<nav className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-3" href="#">
<div className="h-8 w-8 rounded-xl bg-gray-900 text-white flex items-center justify-center tracking-tight"><span className="text-sm font-semibold">EA</span></div>
<div className="leading-tight">
<span className="font-semibold text-lg tracking-tight">Elite Approvals</span>
<div className="text-xs text-gray-600 -mt-0.5">Credit &amp; Tax Services</div>
</div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition" href="#services">Services</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition" href="#application">Application</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition" href="#contact">Contact</a>
</div>
<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-gray-900 text-white hover:bg-gray-800 transition" href="#book"><svg className="lucide lucide-clock-8 w-4 h-4" data-lucide="clock-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l-4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> Book Now</a>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-gray-200 hover:bg-gray-50 transition" id="open-apply-from-header"><svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Apply</button>
</div>
<button aria-label="Toggle Menu" className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition" id="nav-toggle"><svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg></button>
</div>
<div className="hidden md:hidden pb-6" id="mobile-menu">
<div className="pt-4 border-t border-gray-100 grid gap-3">
<a className="text-sm font-medium text-gray-700 hover:text-gray-900" href="#services">Services</a>
<a className="text-sm font-medium text-gray-700 hover:text-gray-900" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-gray-700 hover:text-gray-900" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-gray-700 hover:text-gray-900" href="#application">Application</a>
<a className="text-sm font-medium text-gray-700 hover:text-gray-900" href="#contact">Contact</a>
<div className="flex gap-2 pt-2">
<a className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm bg-gray-900 text-white hover:bg-gray-800 transition" href="#book">Book Now</a>
<button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm border border-gray-200 hover:bg-gray-50 transition" id="open-apply-from-mobile">Apply</button>
</div>
</div>
</div>
</nav>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0">
<img alt="Finance and consulting" className="w-full h-full object-cover opacity-10" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&amp;fit=crop&amp;w=2400&amp;q=80"/>
</div>
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 animate-slide-up">
<h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight font-extralight leading-[0.95] mb-6">
            Credit Repair &amp; Tax Prep <span className="font-semibold text-gray-900">Done Right</span>
</h1>
<p className="text-xl text-gray-600 max-w-2xl mb-8">
            Elite Approvals helps you repair credit, maximize tax refunds, and build financial freedom. Trusted, bonded, and insured. Fast appointments — in person or virtual.
          </p>
<div className="flex flex-col sm:flex-row gap-3 mb-10">
<a className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition" href="#book">
<svg className="lucide lucide-calendar-days w-5 h-5" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
              Book Free Consultation
            </a>
<a className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full border border-gray-200 hover:bg-gray-50 transition" href="#application">
<svg className="lucide lucide-file-text w-5 h-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
              Start Credit Application
            </a>
</div>
<div className="grid grid-cols-3 gap-6">
<div className="text-center">
<div className="text-3xl font-light text-gray-900">10+ yrs</div>
<div className="text-sm text-gray-600 font-medium">Experience</div>
</div>
<div className="text-center">
<div className="text-3xl font-light text-gray-900">4.9</div>
<div className="text-sm text-gray-600 font-medium">Average Rating</div>
</div>
<div className="text-center">
<div className="text-3xl font-light text-gray-900">50 States</div>
<div className="text-sm text-gray-600 font-medium">Nationwide</div>
</div>
</div>
</div>
<div className="lg:col-span-5 animate-fade-in animate-delay-150">

<div className="rounded-3xl border border-gray-100 shadow-xl bg-white p-6">
<div className="flex items-start justify-between mb-4">
<div className="">
<h3 className="text-2xl font-semibold tracking-tight">Quick Credit Application</h3>
<p className="text-sm text-gray-500">Secure. Bonded &amp; Insured.</p>
</div>
<button aria-label="Bookmark" className="p-2 rounded-full hover:bg-gray-100 transition" id="open-apply-from-card">
<svg className="lucide lucide-square-pen w-5 h-5 text-gray-400" data-lucide="square-pen" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path></svg>
</button>
</div>
<div className="rounded-2xl border border-gray-100 p-4 mb-4">
<div className="flex items-center gap-2 text-sm text-gray-700">
<svg className="lucide lucide-shield-check w-4 h-4 text-green-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                Encrypted | Surety Bond #SB271887 | Florida-Compliant
              </div>
</div>
<div className="grid grid-cols-2 gap-3 mb-4">
<input className="px-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="First Name" type="text"/>
<input className="px-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Last Name" type="text"/>
<input className="px-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-2" placeholder="Email" type="email"/>
</div>
<button className="w-full py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition" onclick="document.getElementById('application').scrollIntoView({behavior:'smooth'})">Continue Application</button>
<div className="mt-4 text-xs text-gray-500">By continuing, you acknowledge the Information Statement and CROA disclosures.</div>
</div>

<div className="mt-6 rounded-2xl border border-gray-100 p-5 bg-gradient-to-br from-gray-50 to-white">
<div className="flex items-center gap-2 text-sm font-medium text-gray-900 mb-2">
<svg className="lucide lucide-hourglass w-4 h-4 text-amber-600" data-lucide="hourglass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path></svg>
              Tax Deadline Countdown
            </div>
<div className="text-2xl font-semibold tracking-tight" id="tax-countdown">15 days • 13 hrs • 38 mins</div>
<p className="text-xs text-gray-500 mt-1">Book now to secure preferred dates.</p>
</div>
</div>
</div>

<div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-white">
<svg className="lucide lucide-badge-check w-5 h-5 text-blue-600" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div className="text-sm"><span className="font-semibold">Licensed</span><div className="text-gray-500">FL &amp; Nationwide</div></div>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-white">
<svg className="lucide lucide-shield w-5 h-5 text-green-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<div className="text-sm"><span className="font-semibold">Bonded &amp; Insured</span><div className="text-gray-500">Surety Bond #SB271887</div></div>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-white">
<svg className="lucide lucide-lock w-5 h-5 text-gray-800" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<div className="text-sm"><span className="font-semibold">SSL Secured</span><div className="text-gray-500">Bank‑level encryption</div></div>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-white">
<svg className="lucide lucide-stars w-5 h-5 text-yellow-500" data-lucide="stars" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<div className="text-sm"><span className="font-semibold">4.9/5</span><div className="text-gray-500">Client reviews</div></div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="rounded-3xl border border-gray-100 bg-white p-8 lg:p-10">
<div className="flex items-start gap-4">
<div className="p-3 rounded-xl bg-blue-100">
<svg className="lucide lucide-target w-6 h-6 text-blue-700" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<div className="">
<h2 className="text-3xl font-light tracking-tight mb-2">Our Mission</h2>
<p className="text-lg text-gray-700">“At Elite Approvals Credit and Tax Services, our mission is to empower individuals and businesses to achieve financial freedom and stability. We provide expert credit repair, tax preparation, and financial consulting services with integrity, professionalism, and a commitment to exceptional customer care.”</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs bg-gray-100 text-gray-700 mb-4">
<svg className="lucide lucide-app-window w-4 h-4" data-lucide="app-window" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="M10 4v4"></path><path d="M2 8h20"></path><path d="M6 4v4"></path></svg>
          Dual Credit + Tax Services
        </div>
<h2 className="text-5xl font-light tracking-tight mb-4">Services That Drive <span className="font-semibold">Results</span></h2>
<p className="text-xl text-gray-600">Transparent pricing, easy booking, and secure digital intake.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-3xl border border-gray-100 p-8 hover:shadow-lg transition">
<div className="flex items-center gap-3 mb-4">
<div className="p-3 rounded-xl bg-gray-900 text-white">
<svg className="lucide lucide-handshake w-6 h-6" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight">Consultation</h3>
</div>
<p className="text-gray-600 mb-6">Personalized strategy for taxes, credit, and debt — local expertise in Jacksonville with nationwide coverage.</p>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">From $0 (15-min intro)</span>
<button className="text-blue-600 hover:text-blue-700 font-medium text-sm" onclick="openBooking('Consultation')">Book</button>
</div>
</div>

<div className="group bg-white rounded-3xl border border-gray-100 p-8 hover:shadow-lg transition">
<div className="flex items-center gap-3 mb-4">
<div className="p-3 rounded-xl bg-blue-100 text-blue-700">
<svg className="lucide lucide-receipt w-6 h-6" data-lucide="receipt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight">Business &amp; Personal Tax Preparation</h3>
</div>
<p className="text-gray-600 mb-6">E-file, audit support, and refund optimization. Transparent fees.</p>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">Personal from $199 • Business from $349</span>
<button className="text-blue-600 hover:text-blue-700 font-medium text-sm" onclick="openBooking('Tax Preparation')">Book</button>
</div>
</div>

<div className="group bg-white rounded-3xl border border-gray-100 p-8 hover:shadow-lg transition">
<div className="flex items-center gap-3 mb-4">
<div className="p-3 rounded-xl bg-green-100 text-green-700">
<svg className="lucide lucide-credit-card w-6 h-6" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight">Business &amp; Personal Credit Repair</h3>
</div>
<p className="text-gray-600 mb-6">Dispute inaccuracies, improve profiles, and track progress.</p>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">$99 setup (single) / $149 (couple) • $99/$149 monthly</span>
<div className="flex items-center gap-3">
<button className="text-blue-600 hover:text-blue-700 font-medium text-sm" onclick="openBooking('Credit Repair')">Book</button>
<a className="text-gray-900 hover:opacity-80 font-medium text-sm" href="#application">Apply</a>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl border border-gray-100 p-8 hover:shadow-lg transition">
<div className="flex items-center gap-3 mb-4">
<div className="p-3 rounded-xl bg-purple-100 text-purple-700">
<svg className="lucide lucide-trending-up w-6 h-6" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight">Financial Freedom</h3>
</div>
<p className="text-gray-600 mb-6">Debt strategies, budgeting, and capital planning for long-term stability.</p>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">Programs from $99/mo</span>
<button className="text-blue-600 hover:text-blue-700 font-medium text-sm" onclick="openBooking('Financial Freedom')">Book</button>
</div>
</div>

<div className="group bg-white rounded-3xl border border-gray-100 p-8 hover:shadow-lg transition">
<div className="flex items-center gap-3 mb-4">
<div className="p-3 rounded-xl bg-amber-100 text-amber-700">
<svg className="lucide lucide-layers w-6 h-6" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight">Tradeline</h3>
</div>
<p className="text-gray-600 mb-6">Responsible tradeline options. Qualification and compliance required.</p>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">By custom quote</span>
<button className="text-blue-600 hover:text-blue-700 font-medium text-sm" onclick="openBooking('Tradeline')">Book</button>
</div>
</div>

<div className="group bg-white rounded-3xl border border-gray-100 p-8 hover:shadow-lg transition">
<div className="flex items-center gap-3 mb-4">
<div className="p-3 rounded-xl bg-teal-100 text-teal-700">
<svg className="lucide lucide-briefcase w-6 h-6" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight">Financial Consulting</h3>
</div>
<p className="text-gray-600 mb-6">Entity setup, bookkeeping guidance, and compliance readiness.</p>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">From $149/session</span>
<button className="text-blue-600 hover:text-blue-700 font-medium text-sm" onclick="openBooking('Financial Consulting')">Book</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100" id="pricing">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs bg-green-100 text-green-700 mb-4">
<svg className="lucide lucide-wallet w-4 h-4" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
          Transparent Pricing
        </div>
<h2 className="text-5xl font-light tracking-tight mb-4">Clear Plans, <span className="font-semibold">No Surprises</span></h2>
<p className="text-xl text-gray-600">Simple monthly billing and upfront setup for couples or individuals.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="rounded-3xl border border-gray-200 bg-white p-8 hover:shadow-lg transition">
<h3 className="text-2xl font-semibold tracking-tight mb-2">Credit Repair</h3>
<p className="text-gray-600 mb-6">Dispute inaccurate, unverifiable, or obsolete items.</p>
<div className="mb-6">
<div className="text-3xl font-light">$99 <span className="text-sm text-gray-500">setup (single)</span></div>
<div className="text-3xl font-light mt-1">$149 <span className="text-sm text-gray-500">setup (couple)</span></div>
<div className="text-gray-600 mt-2 text-sm">$99/$149 monthly thereafter</div>
</div>
<button className="w-full py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition" onclick="openBooking('Credit Repair')">Book Credit Review</button>
</div>

<div className="rounded-3xl border border-gray-200 bg-white p-8 hover:shadow-lg transition">
<h3 className="text-2xl font-semibold tracking-tight mb-2">Tax Preparation</h3>
<p className="text-gray-600 mb-6">Personal and business returns with e-file and optimization.</p>
<div className="mb-6">
<div className="text-3xl font-light">from $199 <span className="text-sm text-gray-500">Personal</span></div>
<div className="text-3xl font-light mt-1">from $349 <span className="text-sm text-gray-500">Business</span></div>
</div>
<button className="w-full py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition" onclick="openBooking('Tax Preparation')">Book Tax Prep</button>
</div>

<div className="rounded-3xl border border-gray-200 bg-white p-8 hover:shadow-lg transition">
<h3 className="text-2xl font-semibold tracking-tight mb-2">Consulting &amp; Programs</h3>
<p className="text-gray-600 mb-6">Financial Freedom, Tradelines, and tailored advisory.</p>
<div className="mb-6">
<div className="text-3xl font-light">from $99 <span className="text-sm text-gray-500">per month</span></div>
<div className="text-gray-600 mt-2 text-sm">Tradelines by custom quote</div>
</div>
<button className="w-full py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition" onclick="openBooking('Financial Freedom')">Book Strategy Session</button>
</div>
</div>
<p className="text-xs text-gray-500 mt-6">Note: Certain fees are non-refundable per agreement; services are month-to-month and may be canceled at any time as permitted by law.</p>
</div>
</section>

<section className="py-24 bg-white" id="reviews">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-14">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs bg-yellow-100 text-yellow-800 mb-4">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
          Client Success
        </div>
<h2 className="text-5xl font-light tracking-tight mb-4">Trusted by <span className="font-semibold">Jacksonville &amp; Beyond</span></h2>
<p className="text-xl text-gray-600">Verified reviews and real outcomes.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8">
<div className="rounded-2xl border border-gray-100 p-6 bg-white">
<div className="flex items-center gap-3 mb-3">
<img alt="client" className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<div>
<div className="font-semibold">Sarah C.</div>
<div className="text-sm text-gray-500">Jacksonville, FL</div>
</div>
</div>
<div className="flex gap-1 text-yellow-400 mb-3">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-700">They handled my disputes, boosted my score, and filed my taxes on time. One team for both made it simple.</p>
</div>
<div className="rounded-2xl border border-gray-100 p-6 bg-white">
<div className="flex items-center gap-3 mb-3">
<img alt="client" className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/56.jpg"/>
<div>
<div className="font-semibold">Marcus D.</div>
<div className="text-sm text-gray-500">Atlanta, GA</div>
</div>
</div>
<div className="flex gap-1 text-yellow-400 mb-3">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-700">Professional, responsive, and transparent on fees. Booking was smooth and secure.</p>
</div>
<div className="rounded-2xl border border-gray-100 p-6 bg-white">
<div className="flex items-center gap-3 mb-3">
<img alt="client" className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<div>
<div className="font-semibold">Angela R.</div>
<div className="text-sm text-gray-500">Dallas, TX</div>
</div>
</div>
<div className="flex gap-1 text-yellow-400 mb-3">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-700">I appreciated the legal disclosures upfront and the secure portal for uploading my ID.</p>
</div>
</div>
<div className="text-center mt-10">
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 hover:bg-gray-50 transition font-medium" href="#contact">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> See More or Leave a Review
        </a>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-br from-white to-gray-50 border-t border-gray-100" id="book">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs bg-blue-100 text-blue-800 mb-4">
<svg className="lucide lucide-calendar-check w-4 h-4" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
            Online Scheduling
          </div>
<h3 className="text-4xl font-light tracking-tight mb-4">Book Your Appointment</h3>
<p className="text-lg text-gray-700 mb-6">Pick your service and date up to a year in advance. Virtual and in-person options available in Jacksonville.</p>
<ul className="text-gray-700 space-y-2 mb-8">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 24/7 online booking</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Automatic reminders</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Secure info intake</li>
</ul>
<div className="flex gap-3">
<button className="px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition" onclick="openBooking('Consultation')">Book Consultation</button>
<button className="px-5 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition" onclick="openBooking('Tax Preparation')">Book Tax Prep</button>
</div>
</div>
<div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl">
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-gray-500">Next available</div>
<div className="text-xl font-semibold" id="next-available">Thu, Oct 2 at 10:00 AM</div>
</div>
<div className="p-3 rounded-xl bg-green-100 text-green-700">
<svg className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
</div>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
<button className="px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 text-sm" onclick="openBooking('Consultation')">Consultation</button>
<button className="px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 text-sm" onclick="openBooking('Tax Preparation')">Tax Prep</button>
<button className="px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 text-sm" onclick="openBooking('Credit Repair')">Credit Repair</button>
<button className="px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 text-sm" onclick="openBooking('Tradeline')">Tradeline</button>
</div>
<div className="mt-6 text-xs text-gray-500">Prefer a later date? You can select any date up to 12 months out in our calendar.</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100" id="application">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-14">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs bg-gray-100 text-gray-700 mb-4">
<svg className="lucide lucide-lock-keyhole w-4 h-4" data-lucide="lock-keyhole" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="16" r="1"></circle><rect height="12" rx="2" width="18" x="3" y="10"></rect><path d="M7 10V7a5 5 0 0 1 10 0v3"></path></svg>
          Secure Credit Application
        </div>
<h2 className="text-5xl font-light tracking-tight mb-4">Customer Credit <span className="font-semibold">Application</span></h2>
<p className="text-xl text-gray-600">Read disclosures via the question icons. Hover to view details; open full text for complete legal content.</p>
</div>

<div className="grid lg:grid-cols-3 gap-12">
<div className="lg:col-span-2 rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
<form className="space-y-8">

<div className="">
<div className="flex items-center gap-2 mb-3">
<h3 className="text-2xl font-semibold tracking-tight">Your Information</h3>
<div className="relative group">
<button aria-label="info" className="p-1.5 rounded-full border border-gray-200 hover:bg-gray-50" type="button">
<svg className="lucide lucide-help-circle w-4 h-4 text-gray-600" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</button>
<div className="absolute z-20 hidden group-hover:block top-full mt-2 right-0 w-80 bg-white border border-gray-200 rounded-xl p-4 shadow-xl tooltip-panel">
<p className="text-xs text-gray-600">We verify identity to protect your profile and comply with federal and Florida regulations.</p>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email"/>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-700 mb-2">Mobile Phone</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="(555) 555-5555" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" type="date"/>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-700 mb-2">SSN (Last 4)</label>
<input aria-describedby="ssn-help" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" inputmode="numeric" maxlength="4" placeholder="••••" type="password"/>
<p className="mt-1 text-xs text-gray-500" id="ssn-help">We never ask for full SSN online. Provide last four for verification only.</p>
</div>
</div>
</div>

<div className="">
<div className="flex items-center gap-2 mb-3">
<h3 className="text-2xl font-semibold tracking-tight">Address</h3>
<div className="relative group">
<button aria-label="Address info" className="p-1.5 rounded-full border border-gray-200 hover:bg-gray-50" type="button">
<svg className="lucide lucide-help-circle w-4 h-4 text-gray-600" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</button>
<div className="absolute z-20 hidden group-hover:block top-full mt-2 right-0 w-80 bg-white border border-gray-200 rounded-xl p-4 shadow-xl tooltip-panel">
<p className="text-xs text-gray-600">Use your current mailing address. If you moved within 2 years, list prior address in notes.</p>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="md:col-span-2">
<label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="123 Main St Apt 2" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">City</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text"/>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="col-span-2">
<label className="block text-sm font-medium text-gray-700 mb-2">State</label>
<select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
<option value="">Select state</option>
<option>AL</option><option>AK</option><option>AZ</option><option>AR</option><option>CA</option>
<option>CO</option><option>CT</option><option>DE</option><option>FL</option><option>GA</option>
<option>HI</option><option>ID</option><option>IL</option><option>IN</option><option>IA</option>
<option>KS</option><option>KY</option><option>LA</option><option>ME</option><option>MD</option>
<option>MA</option><option>MI</option><option>MN</option><option>MS</option><option>MO</option>
<option>MT</option><option>NE</option><option>NV</option><option>NH</option><option>NJ</option>
<option>NM</option><option>NY</option><option>NC</option><option>ND</option><option>OH</option>
<option>OK</option><option>OR</option><option>PA</option><option>RI</option><option>SC</option>
<option>SD</option><option>TN</option><option>TX</option><option>UT</option><option>VT</option>
<option>VA</option><option>WA</option><option>WV</option><option>WI</option><option>WY</option>
</select>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-700 mb-2">ZIP</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" inputmode="numeric" maxlength="10" placeholder="XXXXX" type="text"/>
</div>
</div>
</div>
</div>

<div className="">
<div className="flex items-center gap-2 mb-3">
<h3 className="text-2xl font-semibold tracking-tight">ID Verification</h3>
<div className="relative group">
<button aria-label="ID info" className="p-1.5 rounded-full border border-gray-200 hover:bg-gray-50" type="button">
<svg className="lucide lucide-help-circle w-4 h-4 text-gray-600" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</button>
<div className="absolute z-20 hidden group-hover:block top-full mt-2 right-0 w-80 bg-white border border-gray-200 rounded-xl p-4 shadow-xl tooltip-panel">
<p className="text-xs text-gray-600">Upload a clear photo of a government-issued ID. You may redact the ID number.</p>
</div>
</div>
</div>
<div className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border-2 border-dashed border-gray-200 hover:border-gray-300 transition cursor-pointer" id="dropzone">
<svg className="lucide lucide-upload-cloud w-6 h-6 text-gray-600" data-lucide="upload-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg>
<div className="text-sm text-gray-700">Drag &amp; drop or click to upload</div>
<div className="text-xs text-gray-500">JPG, PNG, or PDF up to 10MB</div>
<input accept=".jpg,.jpeg,.png,.pdf" className="hidden" id="file-input" type="file"/>
<div className="text-xs text-gray-600" id="file-name"></div>
</div>
</div>

<div className="">
<div className="flex items-center gap-2 mb-3">
<h3 className="text-2xl font-semibold tracking-tight">Credit Goals</h3>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">What’s your goal?</label>
<select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
<option value="">Select a goal</option>
<option>Home purchase</option>
<option>Auto approval</option>
<option>Business funding</option>
<option>Lower interest rates</option>
<option>Debt consolidation</option>
<option>Other</option>
</select>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact</label>
<select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
<option>Email</option>
<option>Phone</option>
<option>Text Message</option>
<option>Any</option>
</select>
</div>
<div className="md:col-span-2">
<label className="block text-sm font-medium text-gray-700 mb-2">Notes (optional)</label>
<textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your situation or prior disputes." rows="4"></textarea>
</div>
</div>
</div>

<div className="rounded-2xl border border-gray-100 p-4">
<div className="flex items-center justify-between">
<div className="font-medium text-gray-800">Add Spouse/Co-Applicant</div>
<label className="inline-flex items-center gap-2 cursor-pointer">
<input className="sr-only" id="toggle-coapp" type="checkbox"/>
<span className="w-10 h-6 bg-gray-200 rounded-full relative transition">
<span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition"></span>
</span>
</label>
</div>
<div className="mt-4 hidden" id="coapp-panel">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Co-Applicant First Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Co-Applicant Last Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">SSN (Last 4)</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" inputmode="numeric" maxlength="4" placeholder="••••" type="password"/>
</div>
</div>
</div>
</div>

<div className="">
<div className="flex items-center gap-2 mb-3">
<h3 className="text-2xl font-semibold tracking-tight">Disclosures &amp; Consent</h3>
<div className="relative group">
<button aria-label="Legal info" className="p-1.5 rounded-full border border-gray-200 hover:bg-gray-50" type="button">
<svg className="lucide lucide-help-circle w-4 h-4 text-gray-600" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</button>
<div className="absolute z-20 hidden group-hover:block top-full mt-2 right-0 w-96 bg-white border border-gray-200 rounded-xl p-4 shadow-xl tooltip-panel">
<p className="text-xs text-gray-600">These disclosures explain your rights under the Credit Repair Organizations Act (CROA) and our Florida information statement.</p>
</div>
</div>
</div>
<div className="space-y-3 text-sm text-gray-700">
<label className="flex items-start gap-3">
<input className="mt-1" id="consent-ecs" type="checkbox"/>
<span>I agree to electronic communications and e-signature for this application.</span>
</label>
<label className="flex items-start gap-3">
<input className="mt-1" id="consent-info" type="checkbox"/>
<span>I acknowledge the <button className="underline text-blue-600 hover:text-blue-700" onclick="openModal('info-modal')" type="button">Information Statement</button>.</span>
</label>
<label className="flex items-start gap-3">
<input className="mt-1" id="consent-croa" type="checkbox"/>
<span>I have read and understand the <button className="underline text-blue-600 hover:text-blue-700" onclick="openModal('croa-modal')" type="button">CROA Disclosure</button> and Notice of Cancellation.</span>
</label>
</div>
<div className="grid md:grid-cols-2 gap-6 mt-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Type Your Full Name (Signature)</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Full legal name" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-700 mb-2">Today's Date</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" type="date"/>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-300 text-white font-medium transition disabled:cursor-not-allowed" disabled="" id="submit-application" type="submit">
<svg className="lucide lucide-send w-5 h-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Submit Application
              </button>
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition" onclick="openBooking('Credit Repair')" type="button">
<svg className="lucide lucide-calendar-plus w-5 h-5" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg> Book Intro Call
              </button>
</div>
<p className="text-xs text-gray-500">Submitting does not affect your credit score. We will contact you to verify identity prior to any disputes.</p>
</form>
</div>

<aside className="space-y-6">
<div className="rounded-3xl border border-gray-100 bg-white p-6">
<div className="flex items-center gap-2 text-sm font-medium text-gray-900 mb-2">
<svg className="lucide lucide-shield-check w-4 h-4 text-green-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Security &amp; Compliance
            </div>
<ul className="text-sm text-gray-700 space-y-2">
<li className="flex items-center gap-2"><svg className="lucide lucide-lock w-4 h-4 text-gray-800" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> SSL encryption</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-file-check-2 w-4 h-4 text-gray-800" data-lucide="file-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m3 15 2 2 4-4"></path></svg> Bonded &amp; Insured (#SB271887)</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-gavel w-4 h-4 text-gray-800" data-lucide="gavel" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381"></path><path d="m16 16 6-6"></path><path d="m21.5 10.5-8-8"></path><path d="m8 8 6-6"></path><path d="m8.5 7.5 8 8"></path></svg> CROA &amp; Florida compliant</li>
</ul>
<div className="mt-4">
<button className="text-blue-600 hover:text-blue-700 text-sm underline" onclick="openModal('privacy-modal')">Privacy Policy</button>
</div>
</div>
<div className="rounded-3xl border border-gray-100 bg-white p-6">
<div className="flex items-center gap-2 text-sm font-medium text-gray-900 mb-2">
<svg className="lucide lucide-info w-4 h-4 text-blue-700" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg> Need Help?
            </div>
<p className="text-sm text-gray-700 mb-4">Questions about documents or eligibility? Chat with our assistant or book a quick call.</p>
<div className="grid grid-cols-2 gap-3">
<button className="px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 text-sm" onclick="toggleChat(true)">Open Chat</button>
<button className="px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800 text-sm" onclick="openBooking('Consultation')">Book Call</button>
</div>
</div>
</aside>
</div>
</div>
</section>

<section className="bg-gradient-to-br from-gray-50 to-white border-gray-100 border-t pt-24 pb-24" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs bg-gray-100 text-gray-700 mb-4">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Jacksonville HQ • Nationwide Remote
          </div>
<h3 className="text-4xl font-light tracking-tight mb-4">Get in Touch</h3>
<p className="text-lg text-gray-700 mb-6">Call, email, or message us. Virtual appointments available across all 50 states.</p>
<ul className="space-y-3 text-gray-700">
<li className="flex gap-x-3 gap-y-3 items-center">866-960-9499<svg className="lucide lucide-phone w-5 h-5 text-gray-800" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg></li>
<li className="flex items-center gap-3"><svg className="lucide lucide-mail w-5 h-5 text-gray-800" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> support@eliteapprovals.com</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-clock w-5 h-5 text-gray-800" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> Mon–Sat 9am–7pm ET</li>
<li className="flex gap-x-3 gap-y-3 items-center">12620 Beach Boulevard, Jacksonville, Florida 32246, United States<svg className="lucide lucide-navigation w-5 h-5 text-gray-800" data-lucide="navigation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg></li>
</ul>
<div className="mt-6 flex gap-3">
<a className="px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition" href="#book">Book Now</a>
<button className="px-5 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition" onclick="toggleChat(true)">Chat</button>
</div>
</div>
<div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
<iframe className="w-full h-96" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.openstreetmap.org/export/embed.html?bbox=-81.675%2C30.31%2C-81.62%2C30.36&amp;layer=mapnik&amp;marker=30.332%2C-81.655" title="Jacksonville Map"></iframe>
</div>
</div>
</div>
</section>

<footer className="bg-gray-950 text-gray-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
<div className="">
<div className="flex items-center gap-3 mb-3">
<div className="h-9 w-9 rounded-xl bg-white text-gray-900 flex items-center justify-center"><span className="text-sm font-semibold">EA</span></div>
<span className="font-semibold">Elite Approvals</span>
</div>
<p className="text-sm">Credit repair and tax services based in Jacksonville, serving clients in all 50 states.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
<svg className="lucide lucide-shield w-4 h-4" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> Bonded &amp; Insured • Surety Bond #SB271887
          </div>
</div>
<div className="">
<div className="font-semibold text-white mb-3">Services</div>
<ul className="space-y-2 text-sm">
<li className=""><a className="hover:text-white" href="#services">Credit Repair</a></li>
<li className=""><a className="hover:text-white" href="#services">Tax Preparation</a></li>
<li className=""><a className="hover:text-white" href="#services">Financial Freedom</a></li>
<li><a className="hover:text-white" href="#services">Tradelines</a></li>
</ul>
</div>
<div className="">
<div className="font-semibold text-white mb-3">Company</div>
<ul className="space-y-2 text-sm">
<li className=""><a className="hover:text-white" href="#reviews">Reviews</a></li>
<li className=""><a className="hover:text-white" href="#pricing">Pricing</a></li>
<li className=""><button className="hover:text-white" onclick="openModal('privacy-modal')">Privacy</button></li>
<li className=""><button className="hover:text-white" onclick="openModal('croa-modal')">CROA Disclosure</button></li>
</ul>
</div>
<div className="">
<div className="font-semibold text-white mb-3">Contact</div>
<ul className="space-y-2 text-sm">
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">866-960-9499<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg></li>
<li className="flex items-center gap-2"><svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> support@eliteapprovals.com</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Jacksonville, FL</li>
</ul>
</div>
</div>
<div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs">
<div>© <span id="year">2025</span> Elite Approvals. All rights reserved.</div>
<div className="flex items-center gap-3">
<button className="underline hover:text-white" onclick="openModal('info-modal')">Information Statement</button>
<button className="underline hover:text-white" onclick="openModal('croa-modal')">CROA</button>
<button className="underline hover:text-white" onclick="openModal('privacy-modal')">Privacy</button>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[60] hidden" id="booking-modal">
<div aria-hidden="true" className="absolute inset-0 bg-black/50" onclick="closeModal('booking-modal')"></div>
<div aria-modal="true" className="relative mx-auto mt-16 w-[94%] max-w-3xl rounded-3xl bg-white shadow-2xl" role="dialog">
<div className="flex items-center justify-between p-5 border-b border-gray-100">
<div>
<div className="text-xs text-gray-500">Book up to 12 months ahead</div>
<div className="text-xl font-semibold" id="booking-title">Book Appointment</div>
</div>
<button aria-label="Close booking" className="p-2 rounded-lg hover:bg-gray-100" onclick="closeModal('booking-modal')">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="grid md:grid-cols-5 gap-0">
<div className="md:col-span-3 p-5">
<div className="flex items-center justify-between mb-3">
<button aria-label="Previous month" className="p-2 rounded-lg hover:bg-gray-100" onclick="prevMonth()">
<svg className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<div className="font-semibold" id="cal-label">September 2025</div>
<button aria-label="Next month" className="p-2 rounded-lg hover:bg-gray-100" onclick="nextMonth()">
<svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="grid grid-cols-7 gap-1 text-xs text-gray-500 mb-1">
<div className="text-center py-1">Sun</div><div className="text-center py-1">Mon</div><div className="text-center py-1">Tue</div>
<div className="text-center py-1">Wed</div><div className="text-center py-1">Thu</div><div className="text-center py-1">Fri</div><div className="text-center py-1">Sat</div>
</div>
<div className="grid grid-cols-7 gap-2" id="calendar-grid"><div></div><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">1</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">2</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">3</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">4</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">5</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">6</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">7</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">8</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">9</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">10</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">11</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">12</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">13</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">14</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">15</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">16</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">17</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">18</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">19</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">20</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">21</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">22</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">23</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">24</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">25</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">26</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">27</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">28</button><button className="w-full aspect-square rounded-xl text-sm text-gray-300 cursor-not-allowed border border-gray-100" disabled="">29</button><button className="w-full aspect-square rounded-xl text-sm border border-gray-200 hover:bg-gray-50">30</button></div>
</div>
<div className="md:col-span-2 p-5 border-t md:border-t-0 md:border-l border-gray-100">
<div className="text-sm font-medium text-gray-900 mb-2">Available Times</div>
<div className="grid grid-cols-2 gap-2 text-sm" id="times-grid"><button className="px-3 py-2 rounded-xl border text-sm border-gray-100 text-gray-300 cursor-not-allowed" disabled="">9:00 AM</button><button className="px-3 py-2 rounded-xl border text-sm border-gray-100 text-gray-300 cursor-not-allowed" disabled="">10:00 AM</button><button className="px-3 py-2 rounded-xl border text-sm border-gray-100 text-gray-300 cursor-not-allowed" disabled="">11:00 AM</button><button className="px-3 py-2 rounded-xl border text-sm border-gray-100 text-gray-300 cursor-not-allowed" disabled="">1:00 PM</button><button className="px-3 py-2 rounded-xl border text-sm border-gray-100 text-gray-300 cursor-not-allowed" disabled="">2:00 PM</button><button className="px-3 py-2 rounded-xl border text-sm border-gray-100 text-gray-300 cursor-not-allowed" disabled="">3:00 PM</button><button className="px-3 py-2 rounded-xl border text-sm border-gray-100 text-gray-300 cursor-not-allowed" disabled="">4:00 PM</button></div>
<div className="mt-4">
<label className="block text-xs text-gray-500 mb-1">Timezone</label>
<select className="w-full px-3 py-2 rounded-lg border border-gray-200" id="tz-select">
<option value="local">Local time</option>
<option value="ET">ET (US/Eastern)</option>
<option value="CT">CT (US/Central)</option>
<option value="MT">MT (US/Mountain)</option>
<option value="PT">PT (US/Pacific)</option>
</select>
</div>
<button className="mt-5 w-full py-2.5 rounded-xl bg-gray-900 text-white font-medium disabled:bg-gray-300 disabled:cursor-not-allowed" disabled="" id="confirm-booking">
            Confirm Appointment
          </button>
<div className="mt-3 text-xs text-gray-500">You'll receive a confirmation email and SMS reminder.</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-24 right-6 z-[55] hidden" id="chat-container">
<div className="w-[320px] sm:w-[380px] rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-semibold">EA</div>
<div>
<div className="text-sm font-semibold leading-tight">Elite Assistant</div>
<div className="text-[11px] text-gray-500 -mt-0.5">Credit &amp; Tax Questions</div>
</div>
</div>
<button aria-label="Close chat" className="p-2 rounded-lg hover:bg-gray-100" onclick="toggleChat(false)">
<svg className="lucide lucide-minus w-4 h-4" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
</div>
<div className="h-64 overflow-y-auto p-4 space-y-3 text-sm" id="chat-log">
<div className="flex items-start gap-3">
<div className="p-2 rounded-lg bg-gray-900 text-white">
<svg className="lucide lucide-bot w-4 h-4" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="bg-gray-50 border border-gray-100 px-3 py-2 rounded-2xl">
            Hi! Ask about credit repair, tax prep, or booking. No sensitive info needed.
          </div>
</div>
</div>
<form className="border-t border-gray-100 p-2 flex items-center gap-2" id="chat-form">
<input className="flex-1 px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" id="chat-input" placeholder="Type your question…" type="text"/>
<button aria-label="Send" className="px-3 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</form>
</div>
</div>
<button className="fixed bottom-6 right-6 z-[50] inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gray-900 text-white shadow-lg hover:bg-gray-800 transition" id="chat-button">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> Chat
  </button>

<button aria-label="Back to top" className="fixed bottom-6 left-6 z-[50] p-3 rounded-full bg-white border border-gray-200 shadow-lg hover:bg-gray-50" id="back-to-top">
<svg className="lucide lucide-arrow-up w-5 h-5" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>

<div className="fixed inset-0 z-[70] hidden" id="info-modal">
<div aria-hidden="true" className="absolute inset-0 bg-black/50" onclick="closeModal('info-modal')"></div>
<div aria-modal="true" className="relative mx-auto mt-16 w-[94%] max-w-2xl rounded-3xl bg-white shadow-2xl" role="dialog">
<div className="flex items-center justify-between p-5 border-b border-gray-100">
<div className="text-xl font-semibold">Information Statement (Florida)</div>
<button aria-label="Close" className="p-2 rounded-lg hover:bg-gray-100" onclick="closeModal('info-modal')">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="p-6 prose prose-sm max-w-none">
<p>This Information Statement explains your rights and our obligations under applicable state law. You may cancel services at any time as permitted by law. Certain setup fees may be non-refundable once work begins, as detailed in your agreement.</p>
<ul>
<li>You have the right to accurate and fair credit reporting.</li>
<li>We cannot guarantee a specific score increase or outcome.</li>
<li>We do not advise you to create a new credit identity.</li>
</ul>
<p>For full details, please review your engagement agreement provided after intake.</p>
</div>
<div className="p-5 border-t border-gray-100 flex justify-end">
<button className="px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800" onclick="closeModal('info-modal')">Close</button>
</div>
</div>
</div>
<div className="fixed inset-0 z-[70] hidden" id="croa-modal">
<div aria-hidden="true" className="absolute inset-0 bg-black/50" onclick="closeModal('croa-modal')"></div>
<div aria-modal="true" className="relative mx-auto mt-16 w-[94%] max-w-2xl rounded-3xl bg-white shadow-2xl" role="dialog">
<div className="flex items-center justify-between p-5 border-b border-gray-100">
<div className="text-xl font-semibold">CROA Disclosure &amp; Cancellation Notice</div>
<button aria-label="Close" className="p-2 rounded-lg hover:bg-gray-100" onclick="closeModal('croa-modal')">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="p-6 prose prose-sm max-w-none">
<p>Under the Credit Repair Organizations Act (CROA):</p>
<ul>
<li>We cannot accept payment until services are rendered as agreed.</li>
<li>You may cancel without penalty within three business days of signing.</li>
<li>We cannot guarantee removal of accurate, current information from your credit report.</li>
</ul>
<p>For your records, a cancellation form will be included with your engagement packet.</p>
</div>
<div className="p-5 border-t border-gray-100 flex justify-end">
<button className="px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800" onclick="closeModal('croa-modal')">Close</button>
</div>
</div>
</div>
<div className="fixed inset-0 z-[70] hidden" id="privacy-modal">
<div aria-hidden="true" className="absolute inset-0 bg-black/50" onclick="closeModal('privacy-modal')"></div>
<div aria-modal="true" className="relative mx-auto mt-16 w-[94%] max-w-2xl rounded-3xl bg-white shadow-2xl" role="dialog">
<div className="flex items-center justify-between p-5 border-b border-gray-100">
<div className="text-xl font-semibold">Privacy Policy</div>
<button aria-label="Close" className="p-2 rounded-lg hover:bg-gray-100" onclick="closeModal('privacy-modal')">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="p-6 prose prose-sm max-w-none">
<p>We collect only the information necessary to provide services you request. We do not sell your personal information. Data is encrypted in transit and stored securely. You may request deletion of your data subject to legal retention requirements.</p>
</div>
<div className="p-5 border-t border-gray-100 flex justify-end">
<button className="px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800" onclick="closeModal('privacy-modal')">Close</button>
</div>
</div>
</div>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[80] hidden" id="toast">
<div className="px-4 py-3 rounded-xl bg-gray-900 text-white shadow-lg text-sm">Submitted! We’ll be in touch shortly.</div>
</div>



    </>
  );
}
