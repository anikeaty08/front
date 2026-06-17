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



    // Util
    const $ = (q, ctx=document) => ctx.querySelector(q);
    const $$ = (q, ctx=document) => Array.from(ctx.querySelectorAll(q));
    const show = (el) => el.classList.remove('hidden');
    const hide = (el) => el.classList.add('hidden');

    // Route handling
    const sections = {
      home: $('#section-home'),
      posts: $('#section-posts'),
      contests: $('#section-contests'),
      courses: $('#section-courses'),
      consultation: $('#section-consultation'),
      conversations: $('#section-conversations'),
      account: $('#section-account'),
    };
    const titles = {
      home: ['Home', 'Your personalized community space.'],
      posts: ['Posts', 'Latest updates by Misbah Salam.'],
      contests: ['Contests', 'Participate and showcase your work.'],
      courses: ['Courses', 'Attend lessons and complete modules.'],
      consultation: ['Consultation', 'Book a session and get personalized guidance.'],
      conversations: ['Conversations', 'Chat with our community managers.'],
      account: ['My Accounts', 'Manage profile and billing.']
    };
    function setRoute(route) {
      Object.values(sections).forEach(hide);
      show(sections[route]);
      $$('#sidebar .route-btn').forEach(a => a.classList.toggle('active', a.dataset.route===route));
      $$('#mobileDrawer .route-btn').forEach(a => a.classList.toggle('active', a.dataset.route===route));
      $('#pageTitle').textContent = titles[route][0];
      $('#pageSubtitle').textContent = titles[route][1];
      // Close mobile drawer
      hide($('#mobileDrawer'));
      lucide.createIcons();
    }
    $$('.route-btn').forEach(a => a.addEventListener('click', (e) => setRoute(a.dataset.route || 'home')));

    // Mobile drawer
    $('#mobileMenuBtn').addEventListener('click', () => show($('#mobileDrawer')));
    $$('#mobileDrawer [data-close]').forEach(b => b.addEventListener('click', () => hide($('#mobileDrawer'))));

    // CONSULTATION FLOW
    let booking = {
      serviceMinutes: null,
      price: null,
      dateISO: null,
      time: null,
      name: '',
      email: '',
      notes: '',
      zoom: false
    };

    // Step navigation
    function gotoStep(n) {
      [1,2,3,4].forEach(i => hide($('#step'+i)));
      show($('#step'+n));
      $('#stepBar').style.width = (n*25) + '%';
      lucide.createIcons();
    }

    // Step 1
    const serviceCards = $$('.service-card');
    let selectedServiceBtn = null;
    serviceCards.forEach(btn=>{
      btn.addEventListener('click', ()=>{
        if (selectedServiceBtn) selectedServiceBtn.classList.remove('ring-2','ring-blue-100','border-blue-600');
        selectedServiceBtn = btn;
        btn.classList.add('ring-2','ring-blue-100','border-blue-600');
        booking.serviceMinutes = btn.dataset.service;
        booking.price = +btn.dataset.price;
        $('#toStep2').disabled = false;
        $('#payLabel').textContent = `Pay ₹${booking.price.toLocaleString()}`;
      });
    });
    $('#toStep2').disabled = true;
    $('#toStep2').addEventListener('click', ()=> gotoStep(2));

    // Step 2: Calendar + timeslots
    const monthLabel = $('#monthLabel');
    const calGrid = $('#calendarGrid');
    const timeSlotsEl = $('#timeSlots');
    let cal = new Date();
    cal.setDate(1);

    const slots = ["09:00 AM","10:00 AM","11:30 AM","02:00 PM","03:30 PM","05:00 PM","07:00 PM"];
    function renderCalendar() {
      calGrid.innerHTML = '';
      const year = cal.getFullYear(), month = cal.getMonth();
      monthLabel.textContent = cal.toLocaleString('default', { month: 'long', year: 'numeric' });
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month+1, 0).getDate();

      // Padding
      for(let i=0;i<firstDay;i++){
        const pad = document.createElement('div');
        pad.className = 'h-10';
        calGrid.appendChild(pad);
      }
      for(let d=1; d<=daysInMonth; d++){
        const date = new Date(year, month, d);
        const btn = document.createElement('button');
        const isPast = date < new Date(new Date().toDateString());
        btn.textContent = d;
        btn.className = 'h-10 rounded-md text-sm hover:bg-neutral-100';
        if (isPast) {
          btn.disabled = true;
          btn.classList.add('text-neutral-300');
        } else {
          btn.addEventListener('click', ()=>{
            booking.dateISO = date.toISOString().slice(0,10);
            $$('#calendarGrid button').forEach(b => b.classList.remove('bg-blue-600','text-white'));
            btn.classList.add('bg-blue-600','text-white');
            renderSlots();
          });
        }
        calGrid.appendChild(btn);
      }
    }
    function renderSlots() {
      timeSlotsEl.innerHTML = '';
      slots.forEach(s=>{
        const b = document.createElement('button');
        b.textContent = s;
        b.className = 'slot-btn rounded-md border border-neutral-200 px-3 py-2 text-sm hover:border-blue-600';
        b.addEventListener('click', ()=>{
          $$('.slot-btn', timeSlotsEl).forEach(x=>x.classList.remove('border-blue-600','bg-blue-50'));
          b.classList.add('border-blue-600','bg-blue-50');
          booking.time = s;
          $('#toStep3').disabled = false;
        });
        timeSlotsEl.appendChild(b);
      });
    }
    renderCalendar(); renderSlots();
    $('#toStep3').disabled = true;
    $('#prevMonth').addEventListener('click', ()=>{ cal.setMonth(cal.getMonth()-1); renderCalendar(); });
    $('#nextMonth').addEventListener('click', ()=>{ cal.setMonth(cal.getMonth()+1); renderCalendar(); });
    $$('.back-btn').forEach(b => b.addEventListener('click', ()=> gotoStep(+b.dataset.back)));

    $('#toStep3').addEventListener('click', ()=> gotoStep(3));

    // Step 3: Details
    $('#toStep4').addEventListener('click', ()=>{
      booking.name = $('#fullName').value.trim();
      booking.email = $('#email').value.trim();
      booking.notes = $('#notes').value.trim();
      booking.zoom = $('#joinZoom').checked;
      if(!booking.name || !booking.email) {
        showToast('Please fill your name and email.');
        return;
      }
      $('#summaryChip').textContent = `${booking.serviceMinutes} mins • ₹${booking.price.toLocaleString()}`;
      const dateLabel = new Date(booking.dateISO + 'T00:00:00');
      $('#summaryDate').textContent = `${dateLabel.toLocaleDateString(undefined, { weekday:'short', month:'short', day:'numeric' })} • ${booking.time} • IST`;
      gotoStep(4);
    });

    // Step 4: Payment
    $('#payBtn').addEventListener('click', ()=>{
      const cardOk = ($('#card').value.replace(/\s/g,'').length >= 12) && $('#cardName').value.trim() && $('#exp').value.trim() && $('#cvc').value.trim();
      if(!cardOk){ showToast('Please enter valid card details.'); return; }
      // Simulate payment
      const btn = $('#payBtn');
      btn.disabled = true;
      const old = $('#payLabel').textContent;
      $('#payLabel').textContent = 'Processing…';
      setTimeout(()=>{
        btn.disabled = false;
        $('#payLabel').textContent = old;
        openConfirm();
        // Seed conversation with summary
        seedBookingMessage();
      }, 1200);
    });

    function openConfirm(){
      const dateLabel = new Date(booking.dateISO + 'T00:00:00');
      $('#confirmText').textContent = `${booking.serviceMinutes} mins on ${dateLabel.toLocaleDateString(undefined, { month:'short', day:'numeric' })} at ${booking.time} IST. A confirmation was sent to ${booking.email}.`;
      show($('#confirmModal'));
      lucide.createIcons();
    }
    $('#closeModal').addEventListener('click', ()=> hide($('#confirmModal')));
    $('#viewConversation').addEventListener('click', ()=>{
      hide($('#confirmModal'));
      setRoute('conversations');
    });

    function showToast(msg){
      const t = $('#toast');
      t.firstElementChild.textContent = msg;
      show(t);
      setTimeout(()=> hide(t), 1600);
    }

    // CONVERSATIONS
    const threads = [
      {
        id:'mgr-1',
        title:'Community Manager',
        avatar:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=160&auto=format&fit=crop',
        last:'Welcome! How can I help today?',
        messages:[
          {from:'mgr', text:'Welcome to Brand Masters! How can I help today?', time:'09:32'},
        ]
      },
      {
        id:'coord',
        title:'Program Coordinator',
        avatar:'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=160&auto=format&fit=crop',
        last:'Let me know your availability.',
        messages:[
          {from:'mgr', text:'Hi! If you need help with scheduling, share your preferred times.', time:'10:10'},
        ]
      },
      {
        id:'ann',
        title:'Announcements',
        avatar:'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=160&auto=format&fit=crop',
        last:'New workshop this week.',
        messages:[
          {from:'mgr', text:'Heads up: New workshop on positioning goes live Friday.', time:'08:00'},
        ]
      }
    ];
    let activeThread = threads[0];

    function renderThreads(){
      const wrap = $('#threadList');
      wrap.innerHTML = '';
      threads.forEach(t=>{
        const el = document.createElement('button');
        el.className = 'w-full text-left rounded-lg p-2 hover:bg-neutral-50 '+(t.id===activeThread.id?'bg-blue-50 border border-blue-200':'border border-transparent');
        el.innerHTML = `
          <div class="flex items-center gap-3">
            <img class="h-10 w-10 rounded-full object-cover" src="${t.avatar}" alt="avatar"/>
            <div class="min-w-0">
              <div class="flex items-center justify-between gap-2">
                <div class="font-medium text-sm truncate">${t.title}</div>
                <span class="text-[10px] text-neutral-500">now</span>
              </div>
              <div class="text-xs text-neutral-500 truncate">${t.last}</div>
            </div>
          </div>
        `;
        el.addEventListener('click', ()=>{
          activeThread = t; renderThreads(); renderChat();
        });
        wrap.appendChild(el);
      });
    }

    function renderChat(){
      $('#chatTitle').textContent = activeThread.title;
      $('#chatAvatar').src = activeThread.avatar;
      const body = $('#chatBody');
      body.innerHTML = '';
      activeThread.messages.forEach(m=>{
        const mine = m.from==='me';
        const row = document.createElement('div');
        row.className = 'flex '+(mine?'justify-end':'justify-start');
        row.innerHTML = `
          <div class="${mine?'bg-neutral-900 text-white':'bg-neutral-100 text-neutral-800'} max-w-[75%] rounded-2xl px-3 py-2 text-sm">
            <p>${m.text}</p>
            <div class="mt-1 text-[10px] ${mine?'text-white/70':'text-neutral-500'}">${m.time}</div>
          </div>
        `;
        body.appendChild(row);
      });
      body.scrollTop = body.scrollHeight;
      lucide.createIcons();
    }

    // Send message
    function nowHHMM(){
      const d=new Date(); return d.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
    }
    function sendMessage(text){
      if(!text.trim()) return;
      activeThread.messages.push({from:'me', text:text.trim(), time:nowHHMM()});
      activeThread.last = text.trim();
      $('#chatInput').value = '';
      renderThreads(); renderChat();
      simulateReply();
    }
    function simulateReply(){
      $('#typing').classList.remove('hidden');
      setTimeout(()=>{
        $('#typing').classList.add('hidden');
        const reply = 'Got it! I’ll get back with details shortly.';
        activeThread.messages.push({from:'mgr', text: reply, time: nowHHMM()});
        activeThread.last = reply;
        renderThreads(); renderChat();
      }, 1200);
    }

    $('#sendBtn').addEventListener('click', ()=> sendMessage($('#chatInput').value));
    $('#chatInput').addEventListener('keydown', (e)=> {
      if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); sendMessage($('#chatInput').value); }
    });
    $('#newThreadBtn').addEventListener('click', ()=>{
      const t = {
        id:'mgr-'+(Math.random()*10000|0),
        title:'New Conversation',
        avatar:'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=160&auto=format&fit=crop',
        last:'Started a new thread',
        messages:[{from:'mgr', text:'Thanks for reaching out! Share your question to get started.', time:nowHHMM()}]
      };
      threads.unshift(t);
      activeThread = t;
      renderThreads(); renderChat();
    });

    // Seed booking summary into chat after payment
    function seedBookingMessage(){
      const msg = `Booking confirmed: ${booking.serviceMinutes} mins on ${new Date(booking.dateISO + 'T00:00:00').toLocaleDateString(undefined,{month:'short',day:'numeric'})} at ${booking.time} IST. Join via ${booking.zoom?'Zoom':'Phone'}.`;
      threads[0].messages.push({from:'me', text: msg, time: nowHHMM()});
      threads[0].last = 'Booking confirmed ✅';
    }

    // Init route and render
    renderThreads(); renderChat();
    setRoute('consultation');

    // Hydrate icons
    document.addEventListener('DOMContentLoaded', ()=> lucide.createIcons());
  
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
      

<div className="min-h-screen flex flex-col" id="app">

<header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/70 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<button className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-100 active:scale-95 transition" id="mobileMenuBtn">
<i className="w-5 h-5 text-neutral-700" data-lucide="menu"></i>
</button>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-neutral-900 grid place-items-center">
<span className="text-white text-sm">✦</span>
</div>
<div>
<div className="text-lg sm:text-xl font-semibold tracking-tight">BRAND MASTERS</div>
<div className="text-xs text-blue-600/80 -mt-0.5">Mastermind by MISBAH SALAM</div>
</div>
</div>
</div>
<div className="hidden md:flex items-center gap-2">
<div className="relative">
<i className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search"></i>
<input className="h-9 w-64 rounded-lg border border-neutral-200 bg-white pl-9 pr-3 text-sm placeholder-neutral-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="Search" type="text"/>
</div>
</div>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex h-9 items-center gap-2 rounded-full border border-neutral-200 px-3 text-sm hover:bg-neutral-50">
<span className="inline-flex h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-neutral-700">Joined</span>
</button>
<button className="h-9 w-9 grid place-items-center rounded-full hover:bg-neutral-100">
<i className="w-5 h-5 text-neutral-700" data-lucide="bell"></i>
</button>
<button className="ml-1 inline-flex items-center gap-2 rounded-full bg-blue-700 pl-1.5 pr-2.5 py-1 text-white">
<img alt="user" className="h-7 w-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<i className="w-4 h-4 opacity-80" data-lucide="chevron-down"></i>
</button>
</div>
</div>
</header>
<div className="flex-1">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-8 flex gap-6">

<aside className="thin-scroll hidden lg:block w-64 shrink-0" id="sidebar">
<nav className="sticky top-[4.5rem]">
<ul className="space-y-1">
<li>
<a className="route-btn group flex items-center gap-3 rounded-lg px-3 py-2.5 text-neutral-700 hover:bg-neutral-100" data-route="home">
<div className="h-9 w-9 grid place-items-center rounded-md border border-neutral-200 bg-white group-[.active]:border-blue-600 group-[.active]:bg-blue-50">
<i className="w-5 h-5 text-neutral-700 group-[.active]:text-blue-700" data-lucide="home"></i>
</div>
<span className="text-sm font-medium">Home</span>
</a>
</li>
<li>
<a className="route-btn group flex items-center gap-3 rounded-lg px-3 py-2.5 text-neutral-700 hover:bg-neutral-100" data-route="posts">
<div className="h-9 w-9 grid place-items-center rounded-md border border-neutral-200 bg-white">
<i className="w-5 h-5 text-neutral-700" data-lucide="file-text"></i>
</div>
<span className="text-sm font-medium">Posts</span>
</a>
</li>
<li>
<a className="route-btn group flex items-center gap-3 rounded-lg px-3 py-2.5 text-neutral-700 hover:bg-neutral-100" data-route="contests">
<div className="h-9 w-9 grid place-items-center rounded-md border border-neutral-200 bg-white">
<i className="w-5 h-5 text-neutral-700" data-lucide="trophy"></i>
</div>
<span className="text-sm font-medium">Contests</span>
</a>
</li>
<li>
<a className="route-btn group flex items-center gap-3 rounded-lg px-3 py-2.5 text-neutral-700 hover:bg-neutral-100" data-route="courses">
<div className="h-9 w-9 grid place-items-center rounded-md border border-neutral-200 bg-white">
<i className="w-5 h-5 text-neutral-700" data-lucide="graduation-cap"></i>
</div>
<span className="text-sm font-medium">Courses</span>
</a>
</li>
<li>
<a className="route-btn group active flex items-center gap-3 rounded-lg px-3 py-2.5 text-neutral-700 hover:bg-neutral-100" data-route="consultation">
<div className="h-9 w-9 grid place-items-center rounded-md border border-blue-600 bg-blue-50">
<i className="w-5 h-5 text-blue-700" data-lucide="calendar"></i>
</div>
<span className="text-sm font-medium">Consultation</span>
</a>
</li>
<li>
<a className="route-btn group flex items-center gap-3 rounded-lg px-3 py-2.5 text-neutral-700 hover:bg-neutral-100" data-route="conversations">
<div className="h-9 w-9 grid place-items-center rounded-md border border-neutral-200 bg-white">
<i className="w-5 h-5 text-neutral-700" data-lucide="messages-square"></i>
</div>
<span className="text-sm font-medium">Conversations</span>
</a>
</li>
<li>
<a className="route-btn group flex items-center gap-3 rounded-lg px-3 py-2.5 text-neutral-700 hover:bg-neutral-100" data-route="account">
<div className="h-9 w-9 grid place-items-center rounded-md border border-neutral-200 bg-white">
<i className="w-5 h-5 text-neutral-700" data-lucide="user-2"></i>
</div>
<span className="text-sm font-medium">My Accounts</span>
</a>
</li>
</ul>
</nav>
</aside>

<div className="fixed inset-0 z-50 hidden" id="mobileDrawer">
<div className="absolute inset-0 bg-black/40" data-close=""></div>
<div className="absolute left-0 top-0 bottom-0 w-72 bg-white border-r border-neutral-200 p-4 thin-scroll overflow-y-auto">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-neutral-900 grid place-items-center">
<span className="text-white text-sm">✦</span>
</div>
<span className="font-semibold tracking-tight">BRAND MASTERS</span>
</div>
<button className="h-8 w-8 grid place-items-center rounded-md hover:bg-neutral-100" data-close="">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<ul className="space-y-1">
<li><a className="route-btn flex items-center gap-3 rounded-md px-3 py-2 hover:bg-neutral-100" data-route="home"><i className="w-5 h-5" data-lucide="home"></i> Home</a></li>
<li><a className="route-btn flex items-center gap-3 rounded-md px-3 py-2 hover:bg-neutral-100" data-route="posts"><i className="w-5 h-5" data-lucide="file-text"></i> Posts</a></li>
<li><a className="route-btn flex items-center gap-3 rounded-md px-3 py-2 hover:bg-neutral-100" data-route="contests"><i className="w-5 h-5" data-lucide="trophy"></i> Contests</a></li>
<li><a className="route-btn flex items-center gap-3 rounded-md px-3 py-2 hover:bg-neutral-100" data-route="courses"><i className="w-5 h-5" data-lucide="graduation-cap"></i> Courses</a></li>
<li><a className="route-btn flex items-center gap-3 rounded-md px-3 py-2 hover:bg-neutral-100" data-route="consultation"><i className="w-5 h-5" data-lucide="calendar"></i> Consultation</a></li>
<li><a className="route-btn flex items-center gap-3 rounded-md px-3 py-2 hover:bg-neutral-100" data-route="conversations"><i className="w-5 h-5" data-lucide="messages-square"></i> Conversations</a></li>
<li><a className="route-btn flex items-center gap-3 rounded-md px-3 py-2 hover:bg-neutral-100" data-route="account"><i className="w-5 h-5" data-lucide="user-2"></i> My Accounts</a></li>
</ul>
</div>
</div>

<main className="flex-1 space-y-6 lg:space-y-8" id="content">

<section className="flex items-end justify-between">
<div>
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight" id="pageTitle">Consultation</h1>
<p className="text-sm text-neutral-600 mt-1" id="pageSubtitle">Book a session and get personalized guidance.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-sm hover:bg-neutral-50">
<i className="w-4 h-4" data-lucide="download"></i>
<span>Resources</span>
</button>
<button className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white px-3 py-2 hover:opacity-90">
<i className="w-4 h-4" data-lucide="sparkles"></i>
<span className="text-sm">Pro Tips</span>
</button>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="section-consultation">

<div className="lg:col-span-2 space-y-6">
<div className="rounded-2xl border border-neutral-200 bg-white p-4 sm:p-6">

<div className="mb-5">
<div className="flex items-center justify-between text-xs text-neutral-500">
<span>Service</span><span>Date</span><span>Time</span><span>Pay</span>
</div>
<div className="mt-2 h-2 rounded-full bg-neutral-100">
<div className="h-2 w-1/4 rounded-full bg-blue-600 transition-all" id="stepBar"></div>
</div>
</div>

<div className="space-y-4" id="step1">
<h2 className="text-xl font-semibold tracking-tight">Choose a service</h2>
<div className="grid sm:grid-cols-2 gap-4">
<button className="service-card group rounded-xl border border-neutral-200 bg-white p-4 text-left hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100" data-price="4999" data-service="60">
<div className="flex items-start justify-between">
<div>
<div className="font-medium">1:1 Consultation — 60 mins</div>
<p className="text-sm text-neutral-600 mt-1">Clarity call, quick strategy, action plan.</p>
</div>
<div className="rounded-md bg-blue-50 px-2 py-1 text-xs text-blue-700">₹4,999</div>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-neutral-500">
<i className="w-4 h-4" data-lucide="video"></i>
<span>Live video</span>
</div>
</button>
<button className="service-card group rounded-xl border border-neutral-200 bg-white p-4 text-left hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100" data-price="7999" data-service="90">
<div className="flex items-start justify-between">
<div>
<div className="font-medium">Strategy Sprint — 90 mins</div>
<p className="text-sm text-neutral-600 mt-1">Deep-dive positioning, offer and roadmap.</p>
</div>
<div className="rounded-md bg-blue-50 px-2 py-1 text-xs text-blue-700">₹7,999</div>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-neutral-500">
<i className="w-4 h-4" data-lucide="rocket"></i>
<span>Deliverables</span>
</div>
</button>
</div>
<div className="flex justify-end">
<button className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white px-4 py-2.5 text-sm disabled:opacity-50" id="toStep2">
<span>Continue</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="hidden space-y-4" id="step2">
<h2 className="text-xl font-semibold tracking-tight">Pick a date</h2>
<div className="grid sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-neutral-200 p-4">
<div className="flex items-center justify-between mb-2">
<button className="h-8 w-8 grid place-items-center rounded-md hover:bg-neutral-100" id="prevMonth">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<div className="font-medium" id="monthLabel"></div>
<button className="h-8 w-8 grid place-items-center rounded-md hover:bg-neutral-100" id="nextMonth">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
<div className="grid grid-cols-7 text-center text-xs text-neutral-500">
<div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
</div>
<div className="mt-1 grid grid-cols-7 gap-1" id="calendarGrid"></div>
</div>
<div className="rounded-xl border border-neutral-200 p-4">
<div className="mb-3 flex items-center justify-between">
<div className="text-sm text-neutral-600">Timezone</div>
<div className="text-sm font-medium">Asia/Kolkata (IST)</div>
</div>
<div>
<div className="text-sm font-medium mb-2">Available slots</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-2" id="timeSlots"></div>
</div>
</div>
</div>
<div className="flex justify-between">
<button className="back-btn inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm hover:bg-neutral-50" data-back="1">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
<span>Back</span>
</button>
<button className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white px-4 py-2.5 text-sm disabled:opacity-50" id="toStep3">
<span>Continue</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="hidden space-y-4" id="step3">
<h2 className="text-xl font-semibold tracking-tight">Your details</h2>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-sm text-neutral-600">Full name</label>
<input className="mt-1 h-10 w-full rounded-lg border border-neutral-200 px-3 text-sm focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-100" id="fullName" placeholder="Enter your name"/>
</div>
<div>
<label className="text-sm text-neutral-600">Email</label>
<input className="mt-1 h-10 w-full rounded-lg border border-neutral-200 px-3 text-sm focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-100" id="email" placeholder="you@example.com" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="text-sm text-neutral-600">Notes for the session</label>
<textarea className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-100" id="notes" placeholder="Share context, goals or links (optional)" rows="3"></textarea>
</div>
<div className="sm:col-span-2">
<div className="flex items-center gap-3">
<div className="relative inline-flex items-center">
<input className="peer sr-only" id="joinZoom" type="checkbox"/>
<div className="h-5 w-9 rounded-full bg-neutral-200 peer-checked:bg-blue-600 transition-all"></div>
<div className="absolute left-0 top-0.5 h-4 w-4 translate-x-0 rounded-full bg-white shadow transition-all peer-checked:translate-x-5"></div>
</div>
<label className="text-sm text-neutral-700" htmlFor="joinZoom">Join via Zoom (otherwise phone)</label>
</div>
</div>
</div>
<div className="flex justify-between">
<button className="back-btn inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm hover:bg-neutral-50" data-back="2">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
<span>Back</span>
</button>
<button className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white px-4 py-2.5 text-sm" id="toStep4">
<span>Continue</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="hidden space-y-4" id="step4">
<h2 className="text-xl font-semibold tracking-tight">Payment</h2>
<div className="grid sm:grid-cols-2 gap-4">
<div className="sm:col-span-2 rounded-xl border border-neutral-200 p-4 bg-neutral-50">
<div className="flex items-center justify-between">
<div className="text-sm text-neutral-700">Selected</div>
<div className="rounded-md bg-white border border-neutral-200 px-2 py-1 text-xs" id="summaryChip"></div>
</div>
<div className="mt-2 text-xs text-neutral-500" id="summaryDate"></div>
</div>
<div>
<label className="text-sm text-neutral-600">Card number</label>
<div className="mt-1 flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3">
<i className="w-4 h-4 text-neutral-400" data-lucide="credit-card"></i>
<input className="h-10 w-full text-sm outline-none" id="card" inputmode="numeric" placeholder="1234 5678 9012 3456"/>
</div>
</div>
<div>
<label className="text-sm text-neutral-600">Name on card</label>
<input className="mt-1 h-10 w-full rounded-lg border border-neutral-200 px-3 text-sm focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-100" id="cardName" placeholder="Your name"/>
</div>
<div>
<label className="text-sm text-neutral-600">Expiry</label>
<input className="mt-1 h-10 w-full rounded-lg border border-neutral-200 px-3 text-sm" id="exp" placeholder="MM/YY"/>
</div>
<div>
<label className="text-sm text-neutral-600">CVC</label>
<input className="mt-1 h-10 w-full rounded-lg border border-neutral-200 px-3 text-sm" id="cvc" placeholder="123"/>
</div>
</div>
<div className="flex items-center justify-between">
<button className="back-btn inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm hover:bg-neutral-50" data-back="3">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
<span>Back</span>
</button>
<button className="inline-flex items-center gap-2 rounded-lg bg-blue-700 text-white px-5 py-2.5 text-sm" id="payBtn">
<i className="w-4 h-4" data-lucide="lock"></i>
<span id="payLabel">Pay</span>
</button>
</div>
</div>
</div>

<div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-4 sm:p-6">
<div className="flex items-start gap-3">
<img alt="manager" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-medium">What to expect</div>
<p className="text-sm text-neutral-600 mt-1">You’ll receive a calendar invite and a private call link. For reschedules, use the link in your email — no extra fees.</p>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="rounded-2xl border border-neutral-200 bg-white p-4 sm:p-6">
<div className="flex items-center justify-between">
<h3 className="font-medium">Community managers</h3>
<span className="inline-flex items-center gap-1 text-xs text-green-600">
<span className="h-2 w-2 rounded-full bg-green-500"></span> Online
                  </span>
</div>
<ul className="mt-3 space-y-2">
<li className="flex items-center justify-between rounded-lg border border-neutral-200 p-2">
<div className="flex items-center gap-3">
<img alt="mgr" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Community Manager</div>
<div className="text-xs text-neutral-500">Helps with bookings</div>
</div>
</div>
<button className="route-btn inline-flex items-center gap-1 rounded-md bg-neutral-900 px-3 py-1.5 text-xs text-white" data-route="conversations">
<i className="w-3.5 h-3.5" data-lucide="message-circle"></i>
                      Chat
                    </button>
</li>
<li className="flex items-center justify-between rounded-lg border border-neutral-200 p-2">
<div className="flex items-center gap-3">
<img alt="mgr" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Program Coordinator</div>
<div className="text-xs text-neutral-500">Scheduling support</div>
</div>
</div>
<button className="route-btn inline-flex items-center gap-1 rounded-md bg-neutral-900 px-3 py-1.5 text-xs text-white" data-route="conversations">
<i className="w-3.5 h-3.5" data-lucide="message-circle"></i>
                      Chat
                    </button>
</li>
</ul>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-4 sm:p-6">
<h3 className="font-medium">FAQs</h3>
<div className="mt-3 space-y-3">
<details className="group rounded-lg border border-neutral-200 p-3">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                      Rescheduling policy
                      <i className="w-4 h-4 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-2 text-sm text-neutral-600">You can reschedule up to 12 hours before the slot from the confirmation email.</p>
</details>
<details className="group rounded-lg border border-neutral-200 p-3">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                      Refunds
                      <i className="w-4 h-4 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-2 text-sm text-neutral-600">Full refund for cancellations within 24 hours of booking if the session hasn’t started.</p>
</details>
</div>
</div>
</div>
</section>

<section className="hidden rounded-2xl" id="section-conversations">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="rounded-2xl border border-neutral-200 bg-white flex flex-col">
<div className="p-4 border-b border-neutral-200 flex items-center justify-between">
<div className="font-medium">Conversations</div>
<button className="inline-flex items-center gap-1 rounded-md border border-neutral-200 px-2.5 py-1.5 text-xs hover:bg-neutral-50" id="newThreadBtn">
<i className="w-3.5 h-3.5" data-lucide="plus"></i> New
                  </button>
</div>
<div className="thin-scroll p-2 overflow-y-auto" id="threadList" style={{maxHeight: '520px'}}>

</div>
</div>

<div className="lg:col-span-2 rounded-2xl border border-neutral-200 bg-white flex flex-col">
<div className="p-4 border-b border-neutral-200 flex items-center justify-between" id="chatHeader">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-10 w-10 rounded-full object-cover" id="chatAvatar" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-medium" id="chatTitle">Community Manager</div>
<div className="text-xs text-neutral-500"><span className="inline-flex h-2 w-2 rounded-full bg-green-500"></span> Active now</div>
</div>
</div>
<div className="flex items-center gap-1">
<button className="h-8 w-8 grid place-items-center rounded-md hover:bg-neutral-100"><i className="w-4 h-4" data-lucide="search"></i></button>
<button className="h-8 w-8 grid place-items-center rounded-md hover:bg-neutral-100"><i className="w-4 h-4" data-lucide="phone"></i></button>
<button className="h-8 w-8 grid place-items-center rounded-md hover:bg-neutral-100"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</div>
</div>
<div className="thin-scroll flex-1 p-4 space-y-4 overflow-y-auto" id="chatBody" style={{maxHeight: '480px'}}>

</div>
<div className="p-3 border-t border-neutral-200">
<div className="rounded-xl border border-neutral-200 bg-white p-2">
<div className="flex items-end gap-2">
<button className="h-9 w-9 grid place-items-center rounded-md hover:bg-neutral-100"><i className="w-4 h-4" data-lucide="smile"></i></button>
<textarea className="flex-1 resize-none border-0 focus:outline-none text-sm max-h-32" id="chatInput" placeholder="Write a message..." rows="1"></textarea>
<button className="h-9 w-9 grid place-items-center rounded-md hover:bg-neutral-100" id="attachBtn"><i className="w-4 h-4" data-lucide="paperclip"></i></button>
<button className="inline-flex items-center justify-center rounded-lg bg-neutral-900 text-white h-9 px-3" id="sendBtn">
<i className="w-4 h-4" data-lucide="send"></i>
</button>
</div>
<div className="mt-1 hidden text-xs text-neutral-500" id="typing">Community Manager is typing…</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" id="section-home">
<div className="rounded-2xl border border-neutral-200 bg-white p-6">
<div className="font-medium">Home</div>
<p className="text-sm text-neutral-600 mt-1">Your personalized feed will appear here.</p>
</div>
</section>
<section className="hidden" id="section-posts">
<div className="rounded-2xl border border-neutral-200 bg-white p-6">
<div className="font-medium">Posts</div>
<p className="text-sm text-neutral-600 mt-1">Posts by Misbah Salam and team.</p>
</div>
</section>
<section className="hidden" id="section-contests">
<div className="rounded-2xl border border-neutral-200 bg-white p-6">
<div className="font-medium">Contests</div>
<p className="text-sm text-neutral-600 mt-1">Join challenges and win rewards.</p>
</div>
</section>
<section className="hidden" id="section-courses">
<div className="rounded-2xl border border-neutral-200 bg-white p-6">
<div className="font-medium">Courses</div>
<p className="text-sm text-neutral-600 mt-1">Attend lessons and track progress.</p>
</div>
</section>
<section className="hidden" id="section-account">
<div className="rounded-2xl border border-neutral-200 bg-white p-6">
<div className="font-medium">My Accounts</div>
<p className="text-sm text-neutral-600 mt-1">Billing, profile, preferences.</p>
</div>
</section>
</main>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="confirmModal">
<div className="absolute inset-0 bg-black/40"></div>
<div className="absolute inset-0 grid place-items-center px-4">
<div className="w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-5">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-full bg-blue-50 grid place-items-center">
<i className="w-5 h-5 text-blue-700" data-lucide="calendar-check-2"></i>
</div>
<div>
<div className="text-lg font-semibold tracking-tight">Booking confirmed</div>
<p className="text-sm text-neutral-600 mt-1" id="confirmText"></p>
</div>
</div>
<div className="mt-4 flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-sm hover:bg-neutral-50" id="viewConversation">
<i className="w-4 h-4" data-lucide="messages-square"></i>
            Open conversation
          </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white px-3 py-2 text-sm" id="closeModal">
            Done
          </button>
</div>
</div>
</div>
</div>

<div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 hidden" id="toast">
<div className="rounded-full bg-neutral-900 text-white px-4 py-2 text-sm shadow-lg">Saved</div>
</div>


    </>
  );
}
