import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize icons
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) lucide.createIcons();
      initNav();
      initSwitches();
      initCharts();
      initDragDrop();
    });

    // Navigation
    function initNav() {
      const links = document.querySelectorAll('.nav-link');
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const id = link.getAttribute('data-nav');
          navigate(id);
        });
      });
      // Default route
      navigate('dashboard');
    }

    function navigate(id) {
      // Map legacy/alias ids
      if (id === 'plan') id = 'careplan';
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach(s => s.classList.add('hidden'));
      const target = document.querySelector(`[data-section="${id}"]`);
      if (target) target.classList.remove('hidden');

      // Update nav active state
      const links = document.querySelectorAll('.nav-link');
      links.forEach(l => {
        const active = l.getAttribute('data-nav') === id;
        l.classList.toggle('bg-slate-900', active);
        l.classList.toggle('text-white', active);
        l.classList.toggle('text-slate-700', !active);
        const icon = l.querySelector('i');
        if (icon) {
          icon.classList.toggle('text-white', active);
          icon.classList.toggle('text-slate-600', !active);
        }
        l.setAttribute('aria-current', active ? 'page' : 'false');
      });
      // Close mobile drawer if open
      const drawer = document.getElementById('mobile-drawer');
      if (drawer && !drawer.classList.contains('hidden')) toggleMobileNav();
      // Re-render icons if any DOM changed
      if (window.lucide) lucide.createIcons();
      // Update document title
      document.title = `DermaPortal · ${id.charAt(0).toUpperCase() + id.slice(1)}`;
    }

    function toggleMobileNav() {
      const drawer = document.getElementById('mobile-drawer');
      drawer.classList.toggle('hidden');
    }

    // Toast helpers
    let toastTimer;
    function showToast(msg = 'Saved') {
      const t = document.getElementById('toast');
      document.getElementById('toast-msg').textContent = msg;
      t.classList.remove('hidden');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(hideToast, 2500);
    }
    function hideToast() {
      document.getElementById('toast').classList.add('hidden');
    }

    // Auth
    function handleLogin(e) {
      e.preventDefault();
      // Simulate auth success
      document.getElementById('auth-screen').classList.add('hidden');
      document.getElementById('app-shell').classList.remove('hidden');
      showToast('Welcome back, Alyssa!');
      navigate('dashboard');
    }
    function fakePasskey() {
      showToast('Passkey accepted');
      setTimeout(() => handleLogin(new Event('submit')), 500);
    }
    function demoNoLogin() {
      handleLogin(new Event('submit'));
      navigate('assistant');
    }
    function logout() {
      document.getElementById('app-shell').classList.add('hidden');
      document.getElementById('auth-screen').classList.remove('hidden');
      showToast('Signed out');
      document.title = 'Dermatology Patient Portal';
    }

    // Switches
    function initSwitches() {
      document.querySelectorAll('[data-switch]').forEach(sw => {
        sw.addEventListener('click', () => toggleSwitch(sw));
        // Initialize background based on state
        setSwitchVisual(sw);
      });
    }
    function toggleSwitch(sw) {
      const on = sw.getAttribute('aria-checked') === 'true';
      sw.setAttribute('aria-checked', (!on).toString());
      setSwitchVisual(sw);
      showToast(on ? 'Marked incomplete' : 'Marked done');
    }
    function setSwitchVisual(sw) {
      const on = sw.getAttribute('aria-checked') === 'true';
      const dot = sw.querySelector('span');
      if (!dot) return;
      sw.classList.toggle('bg-slate-900', on);
      sw.classList.toggle('bg-slate-200', !on);
      dot.classList.toggle('translate-x-6', on);
      dot.classList.toggle('translate-x-0', !on);
    }

    // Charts
    let flareChart, adherenceChart;
    function initCharts() {
      const flareCtx = document.getElementById('flareChart');
      if (flareCtx) {
        flareChart = new Chart(flareCtx, {
          type: 'line',
          data: {
            labels: ['Wk 1','Wk 2','Wk 3','Wk 4','Wk 5','Wk 6','Wk 7','Wk 8'],
            datasets: [{
              label: 'Flare-ups',
              data: [3, 4, 2, 5, 3, 2, 1, 2],
              borderColor: '#0f172a',
              backgroundColor: 'rgba(15,23,42,0.08)',
              tension: 0.35,
              fill: true,
              pointRadius: 2
            }]
          },
          options: {
            plugins: { legend: { display: false } },
            scales: {
              x: { grid: { display: false } },
              y: { beginAtZero: true, ticks: { stepSize: 1 }, grid: { color: '#e2e8f0' } }
            }
          }
        });
      }

      const adherCtx = document.getElementById('adherenceChart');
      if (adherCtx) {
        adherenceChart = new Chart(adherCtx, {
          type: 'bar',
          data: {
            labels: ['Wk 1','Wk 2','Wk 3','Wk 4','Wk 5','Wk 6','Wk 7','Wk 8'],
            datasets: [{
              label: 'Adherence',
              data: [72, 80, 64, 78, 85, 90, 88, 92],
              backgroundColor: '#0f172a',
              borderRadius: 6,
            }]
          },
          options: {
            plugins: { legend: { display: false } },
            scales: {
              x: { grid: { display: false } },
              y: { beginAtZero: true, max: 100, ticks: { callback: v => v + '%' }, grid: { color: '#e2e8f0' } }
            }
          }
        });
      }
    }

    // Modals
    function openBookModal() {
      document.getElementById('book-modal').classList.remove('hidden');
      if (window.lucide) lucide.createIcons();
    }
    function openCheckIn() {
      document.getElementById('checkin-modal').classList.remove('hidden');
      if (window.lucide) lucide.createIcons();
    }
 function openFlareLog() {
      document.getElementById('flare-modal').classList.remove('hidden');
      if (window.lucide) lucide.createIcons();
    }
    function openUploadModal() {
      document.getElementById('upload-modal').classList.remove('hidden');
      if (window.lucide) lucide.createIcons();
    }
    function closeModal(id) {
      document.getElementById(id).classList.add('hidden');
    }

    // Booking interactions
    let selectedSlot = '';
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('slot-btn')) {
        document.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('bg-slate-900','text-white'));
        e.target.classList.add('bg-slate-900','text-white');
        selectedSlot = e.target.textContent.trim();
        document.getElementById('chosen-slot').textContent = `Selected: ${selectedSlot}`;
        document.getElementById('confirm-book').disabled = false;
      }
    });
    function confirmBooking() {
      closeModal('book-modal');
      showToast(`Booked ${selectedSlot}`);
      navigate('appointments');
    }
    function reschedule() {
      openBookModal();
      showToast('Pick a new time');
    }

    // Check-in
    function completeCheckIn() {
      closeModal('checkin-modal');
      showToast('Check-in complete');
      navigate('appointments');
    }

    // Flare log
    const severityInput = document.getElementById('severity');
    const severityVal = document.getElementById('severity-val');
    if (severityInput && severityVal) {
      severityInput.addEventListener('input', () => {
        severityVal.textContent = severityInput.value;
      });
    }
    function toggleChip(btn) {
      btn.classList.toggle('bg-slate-900');
      btn.classList.toggle('text-white');
      btn.classList.toggle('border-slate-300');
      btn.classList.toggle('border-slate-900');
    }
    function saveFlare() {
      closeModal('flare-modal');
      showToast('Flare-up logged');
      // Optionally update trend chart
      navigate('conditions');
    }

    // Photos upload
    function initDragDrop() {
      const dz = document.getElementById('dropzone');
      if (!dz) return;
      dz.addEventListener('dragover', (e) => {
        e.preventDefault();
        dz.classList.add('border-slate-400');
      });
      dz.addEventListener('dragleave', () => dz.classList.remove('border-slate-400'));
      dz.addEventListener('drop', (e) => {
        e.preventDefault();
        dz.classList.remove('border-slate-400');
        const file = e.dataTransfer.files[0];
        if (file) showPreview(file);
      });
    }
    function previewPhoto(e) {
      const file = e.target.files[0];
      if (file) showPreview(file);
    }
    function showPreview(file) {
      const reader = new FileReader();
      reader.onload = () => {
        document.getElementById('preview-img').src = reader.result;
        document.getElementById('preview').classList.remove('hidden');
        document.getElementById('save-photo').disabled = false;
      };
      reader.readAsDataURL(file);
    }
    function savePhoto() {
      closeModal('upload-modal');
      showToast('Photo uploaded');
      navigate('photos');
    }

    // Prescriptions
    function requestRefill(name) {
      showToast(`Refill requested: ${name}`);
      navigate('prescriptions');
    }
    function setDefaultPharmacy(name) {
      showToast(`Default pharmacy set: ${name}`);
      navigate('pharmacy');
    }

    // Billing
    function openPayment() {
      showToast('Redirecting to payment');
      navigate('billing');
    }

    // Assistant
    function sendAssistant() {
      const input = document.getElementById('assistant-input');
      const text = input.value.trim();
      if (!text) return;
      const scrollArea = document.querySelector('[data-section="assistant"] .lg\\:col-span-2 .p-4.max-h-\\[55vh\\]');
      const container = document.querySelector('[data-section="assistant"] .lg\\:col-span-2 > .p-4');
      const userMsg = document.createElement('div');
      userMsg.className = 'flex items-start gap-3';
      userMsg.innerHTML = `
        <img src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=2069&auto=format&fit=crop" class="h-7 w-7 rounded-md object-cover" alt="">
        <div class="rounded-lg border border-slate-200 bg-white p-3">
          <p class="text-sm text-slate-800">${text}</p>
        </div>`;
      container.appendChild(userMsg);
      input.value = '';
      if (window.lucide) lucide.createIcons();
      container.parentElement.scrollTop = container.parentElement.scrollHeight;

      setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'flex items-start gap-3';
        botMsg.innerHTML = `
          <div class="rounded-lg bg-slate-900 text-white p-2"><i data-lucide="bot" style="width:16px;height:16px;"></i></div>
          <div class="rounded-lg border border-slate-200 bg-slate-50 p-3">
            <p class="text-sm text-slate-800">Got it — I can help with that. Try the buttons below or let me know more details.</p>
            <div class="mt-2 flex gap-2">
              <button class="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100" onclick="openBookModal()">
                <i data-lucide="calendar-plus" style="width:14px;height:14px;"></i> Book visit
              </button>
              <button class="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100" onclick="navigate('prescriptions')">
                <i data-lucide="pill" style="width:14px;height:14px;"></i> Refill
              </button>
            </div>
          </div>`;
        container.appendChild(botMsg);
        if (window.lucide) lucide.createIcons();
        container.parentElement.scrollTop = container.parentElement.scrollHeight;
      }, 700);
    }

    // Settings
    function saveSettings() {
      showToast('Settings saved');
    }

    // Chips styling helper
    (function applyChipStyles() {
      const style = document.createElement('style');
      style.textContent = `
        .chip { @apply inline-flex items-center gap-1.5 text-xs rounded-md border border-slate-300 bg-white px-2.5 py-1.5 hover:bg-slate-100; }
      `;
      document.head.appendChild(style);
    })();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-4 right-4 z-50 hidden" id="toast">
<div className="rounded-xl bg-white shadow-lg ring-1 ring-slate-200 px-4 py-3 flex items-center gap-3">
<svg className="lucide lucide-check-circle text-emerald-600" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-sm text-slate-800" id="toast-msg">Saved</p>
<button className="ml-2 text-slate-500 hover:text-slate-700 transition-colors" onclick="hideToast()">
<svg className="lucide lucide-x" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>

<section className="min-h-screen flex" id="auth-screen">
<div className="hidden lg:flex w-1/2 bg-slate-100 border-r border-slate-200 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&amp;w=2062&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20"></div>
<div className="relative z-10 w-full h-full flex flex-col justify-between p-12">
<div className="">
<div className="inline-flex items-center gap-2">
<div className="h-9 w-9 rounded-lg bg-slate-900 text-white flex items-center justify-center tracking-tight text-sm">DR</div>
<span className="text-slate-900 font-semibold tracking-tight">DermaPortal</span>
</div>
<h1 className="mt-10 text-3xl tracking-tight font-semibold text-slate-900">Your AI Receptionist for Skin Health</h1>
<p className="mt-3 text-slate-600 text-sm leading-6">Check in, book dermatology visits, manage prescriptions, upload skin photos for triage, and chat with our AI receptionist for instant help—anytime.</p>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="rounded-xl bg-white/70 backdrop-blur p-4 ring-1 ring-slate-200">
<div className="flex items-center gap-2 text-slate-800">
<svg className="lucide lucide-calendar" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="font-medium text-sm">Smart scheduling</span>
</div>
<p className="mt-2 text-xs text-slate-600">Book in-person or tele-derm visits and auto check-in.</p>
</div>
<div className="rounded-xl bg-white/70 backdrop-blur p-4 ring-1 ring-slate-200">
<div className="flex items-center gap-2 text-slate-800">
<svg className="lucide lucide-pill" data-lucide="pill" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path><path d="m8.5 8.5 7 7"></path></svg>
<span className="font-medium text-sm">Refills &amp; adherence</span>
</div>
<p className="mt-2 text-xs text-slate-600">Track treatments and request refills with 1 click.</p>
</div>
<div className="rounded-xl bg-white/70 backdrop-blur p-4 ring-1 ring-slate-200">
<div className="flex items-center gap-2 text-slate-800">
<svg className="lucide lucide-image" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
<span className="font-medium text-sm">Photo triage</span>
</div>
<p className="mt-2 text-xs text-slate-600">Upload skin photos to monitor changes over time.</p>
</div>
<div className="rounded-xl bg-white/70 backdrop-blur p-4 ring-1 ring-slate-200">
<div className="flex items-center gap-2 text-slate-800">
<svg className="lucide lucide-shield-check" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-medium text-sm">Secure &amp; private</span>
</div>
<p className="mt-2 text-xs text-slate-600">HIPAA-grade security for your records and messages.</p>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-slate-700">“The AI check-in saved me so much time and helped me book a tele-derm visit in minutes.”</p>
<span className="text-xs text-slate-500">Alyssa, patient</span>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12">
<div className="w-full max-w-md">
<div className="mb-8">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-lg bg-slate-900 text-white flex items-center justify-center tracking-tight text-sm lg:hidden">DR</div>
<div>
<h2 className="text-2xl tracking-tight font-semibold">Welcome back</h2>
<p className="text-sm text-slate-600 mt-1">Sign in to your patient portal to continue.</p>
</div>
</div>
</div>
<form className="space-y-4" id="login-form" onsubmit="handleLogin(event)">
<div>
<label className="text-sm text-slate-700">Email</label>
<div className="mt-1">
<input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900" placeholder="you@example.com" required="" type="email"/>
</div>
</div>
<div>
<div className="flex items-center justify-between">
<label className="text-sm text-slate-700">Password</label>
<button className="text-xs text-slate-600 hover:text-slate-800" type="button">Forgot?</button>
</div>
<div className="mt-1">
<input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900" placeholder="••••••••" required="" type="password"/>
</div>
</div>
<div>
<label className="text-sm text-slate-700">Two‑factor code (if prompted)</label>
<input className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900" inputmode="numeric" pattern="[0-9]*" placeholder="123 456" type="text"/>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-black transition-colors" type="submit">
<svg className="lucide lucide-log-in" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
            Sign in
          </button>
<button className="inline-flex hover:bg-slate-100 transition-colors text-sm text-slate-800 bg-white w-full border-slate-300 border rounded-lg pt-2.5 pr-4 pb-2.5 pl-4 gap-x-2 gap-y-2 items-center justify-center" onclick="fakePasskey()" type="button">
<svg className="lucide lucide-key-round" data-lucide="key-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
            Use passkey
          </button>
<div className="pt-2">
<p className="text-xs text-slate-600">By continuing you agree to our <a className="underline hover:no-underline" href="#">Terms</a> and <a className="underline hover:no-underline" href="#">Privacy</a>.</p>
</div>
</form>
<div className="mt-10 rounded-xl border border-slate-200 p-4 bg-white">
<div className="flex items-start gap-3">
<div className="rounded-lg bg-slate-900 text-white p-2">
<svg className="lucide lucide-bot" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="flex-1">
<p className="text-sm text-slate-800">AI Receptionist</p>
<p className="text-xs text-slate-600 mt-1">I can help you book appointments, request refills, and check in. Sign in to continue your conversation.</p>
<div className="mt-3 flex gap-2">
<button className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-800 border border-slate-300 px-3 py-2 text-xs hover:bg-slate-100" onclick="document.querySelector('#login-form button[type=submit]').focus()">
<svg className="lucide lucide-message-square" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                  Continue chat after sign-in
                </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-xs hover:bg-black" onclick="demoNoLogin()">
<svg className="lucide lucide-sparkles" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                  Try demo
                </button>
</div>
</div>
</div>
</div>
<p className="mt-6 text-xs text-slate-500">Need an account? <a className="text-slate-800 underline hover:no-underline" href="#">Create one</a></p>
</div>
</div>
</section>

<div className="hidden" id="app-shell">
<div className="min-h-screen">

<aside className="fixed inset-y-0 left-0 w-72 border-r border-slate-200 bg-white/90 backdrop-blur z-30 hidden lg:flex flex-col">
<div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-lg bg-slate-900 text-white flex items-center justify-center tracking-tight text-sm">DR</div>
<div>
<p className="font-semibold tracking-tight text-slate-900">DermaPortal</p>
<p className="text-xs text-slate-500">Patient</p>
</div>
</div>
<span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 rounded-md px-2 py-1 ring-1 ring-emerald-100">
<svg className="lucide lucide-shield-check" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Secure
          </span>
</div>
<nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
<div>
<p className="px-3 text-[11px] uppercase tracking-wide text-slate-500">Overview</p>
<ul className="mt-2 space-y-1">
<li><a aria-current="page" className="nav-link group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 text-sm bg-slate-900 text-white" data-nav="dashboard" href="#"><svg className="lucide lucide-home text-slate-600 group-hover:text-slate-900" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>Dashboard</a></li>
<li><a aria-current="false" className="nav-link group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="appointments" href="#"><svg className="lucide lucide-calendar" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>Appointments</a></li>
<li><a aria-current="false" className="nav-link group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="messages" href="#"><svg className="lucide lucide-inbox" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>Messages</a></li>
<li><a aria-current="false" className="nav-link group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="assistant" href="#"><svg className="lucide lucide-bot" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>AI Assistant</a></li>
</ul>
</div>
<div>
<p className="px-3 text-[11px] uppercase tracking-wide text-slate-500">Care</p>
<ul className="mt-2 space-y-1">
<li><a aria-current="false" className="nav-link group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="conditions" href="#"><svg className="lucide lucide-heart-pulse" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>Conditions</a></li>
<li><a aria-current="false" className="nav-link group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="careplan" href="#"><svg className="lucide lucide-check-circle-2" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>Care Plan</a></li>
<li><a aria-current="false" className="nav-link group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="photos" href="#"><svg className="lucide lucide-images" data-lucide="images" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"></path><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"></path><circle cx="13" cy="7" fill="currentColor" r="1"></circle><rect height="14" rx="2" width="14" x="8" y="2"></rect></svg>Photos</a></li>
</ul>
</div>
<div>
<p className="px-3 text-[11px] uppercase tracking-wide text-slate-500">Medication &amp; Labs</p>
<ul className="mt-2 space-y-1">
<li><a aria-current="false" className="nav-link group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="prescriptions" href="#"><svg className="lucide lucide-pill" data-lucide="pill" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path><path d="m8.5 8.5 7 7"></path></svg>Prescriptions</a></li>
<li><a aria-current="false" className="nav-link group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="labs" href="#"><svg className="lucide lucide-flask-conical" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>Labs &amp; Biopsies</a></li>
<li><a aria-current="false" className="nav-link group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="pharmacy" href="#"><svg className="lucide lucide-building-2" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>Pharmacy</a></li>
</ul>
</div>
<div>
<p className="px-3 text-[11px] uppercase tracking-wide text-slate-500">Billing &amp; Records</p>
<ul className="mt-2 space-y-1">
<li><a aria-current="false" className="nav-link group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="billing" href="#"><svg className="lucide lucide-wallet" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>Billing &amp; Insurance</a></li>
<li><a aria-current="false" className="nav-link group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="documents" href="#"><svg className="lucide lucide-file-text" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>Documents &amp; Forms</a></li>
</ul>
</div>
<div>
<p className="px-3 text-[11px] uppercase tracking-wide text-slate-500">Profile</p>
<ul className="mt-2 space-y-1">
<li><a aria-current="false" className="nav-link group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="settings" href="#"><svg className="lucide lucide-user-cog" data-lucide="user-cog" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 15H6a4 4 0 0 0-4 4v2"></path><path d="m14.305 16.53.923-.382"></path><path d="m15.228 13.852-.923-.383"></path><path d="m16.852 12.228-.383-.923"></path><path d="m16.852 17.772-.383.924"></path><path d="m19.148 12.228.383-.923"></path><path d="m19.53 18.696-.382-.924"></path><path d="m20.772 13.852.924-.383"></path><path d="m20.772 16.148.924.383"></path><circle cx="18" cy="15" r="3"></circle><circle cx="9" cy="7" r="4"></circle></svg>Profile &amp; Settings</a></li>
<li><a aria-current="false" className="nav-link group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="help" href="#"><svg className="lucide lucide-life-buoy" data-lucide="life-buoy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>Help</a></li>
</ul>
</div>
</nav>
<div className="border-t border-slate-200 p-4">
<button className="w-full inline-flex items-center justify-center gap-2 text-sm text-slate-700 px-3 py-2 rounded-lg hover:bg-slate-100" onclick="logout()">
<svg className="lucide lucide-log-out" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
            Sign out
          </button>
</div>
</aside>

<header className="lg:pl-72 sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
<div className="px-4 sm:px-6 py-3 flex items-center gap-3">
<button className="lg:hidden inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white p-2 hover:bg-slate-100" onclick="toggleMobileNav()">
<svg className="lucide lucide-menu" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<div className="relative flex-1 max-w-2xl">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 bg-white text-sm outline-none focus:ring-2 focus:ring-slate-900" placeholder="Search results, messages, care plan..."/>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100" onclick="openBookModal()">
<svg className="lucide lucide-calendar-plus" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
              Book
            </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100" onclick="navigate('photos')">
<svg className="lucide lucide-upload" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
              Upload photo
            </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm hover:bg-black" onclick="navigate('assistant')">
<svg className="lucide lucide-bot" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
              Ask AI
            </button>
</div>
<button className="relative rounded-lg border border-slate-300 bg-white p-2 hover:bg-slate-100">
<svg className="lucide lucide-bell" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-1 -right-1 inline-flex items-center justify-center h-4 w-4 rounded-full bg-rose-600 text-white text-[10px]">2</span>
</button>
<div className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-2 py-1.5 hover:bg-slate-100">
<img alt="" className="h-7 w-7 rounded-md object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="hidden sm:block">
<p className="text-xs text-slate-900 leading-tight">Alyssa Chen</p>
<p className="text-[11px] text-slate-500 leading-tight">MRN 0023945</p>
</div>
</div>
</div>
</header>

<div className="fixed inset-0 z-40 hidden" id="mobile-drawer">
<div className="absolute inset-0 bg-black/30" onclick="toggleMobileNav()"></div>
<div className="absolute inset-y-0 left-0 w-80 bg-white border-r border-slate-200 p-4 overflow-y-auto">
<div className="flex items-center justify-between pb-3 border-b border-slate-200">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-lg bg-slate-900 text-white flex items-center justify-center tracking-tight text-sm">DR</div>
<p className="font-semibold tracking-tight">DermaPortal</p>
</div>
<button className="rounded-lg border border-slate-300 p-2 hover:bg-slate-100" onclick="toggleMobileNav()"><svg className="lucide lucide-x" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
</div>
<nav className="mt-4 space-y-2">
<a aria-current="page" className="nav-link block px-3 py-2 rounded-lg hover:bg-slate-100 text-sm bg-slate-900 text-white" data-nav="dashboard" href="#" onclick="toggleMobileNav()">Dashboard</a>
<a aria-current="false" className="nav-link block px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="appointments" href="#" onclick="toggleMobileNav()">Appointments</a>
<a aria-current="false" className="nav-link block px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="messages" href="#" onclick="toggleMobileNav()">Messages</a>
<a aria-current="false" className="nav-link block px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="assistant" href="#" onclick="toggleMobileNav()">AI Assistant</a>
<a aria-current="false" className="nav-link block px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="conditions" href="#" onclick="toggleMobileNav()">Conditions</a>
<a aria-current="false" className="nav-link block px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="careplan" href="#" onclick="toggleMobileNav()">Care Plan</a>
<a aria-current="false" className="nav-link block px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="photos" href="#" onclick="toggleMobileNav()">Photos</a>
<a aria-current="false" className="nav-link block px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="prescriptions" href="#" onclick="toggleMobileNav()">Prescriptions</a>
<a aria-current="false" className="nav-link block px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="labs" href="#" onclick="toggleMobileNav()">Labs &amp; Biopsies</a>
<a aria-current="false" className="nav-link block px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="pharmacy" href="#" onclick="toggleMobileNav()">Pharmacy</a>
<a aria-current="false" className="nav-link block px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="billing" href="#" onclick="toggleMobileNav()">Billing &amp; Insurance</a>
<a aria-current="false" className="nav-link block px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="documents" href="#" onclick="toggleMobileNav()">Documents &amp; Forms</a>
<a aria-current="false" className="nav-link block px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="settings" href="#" onclick="toggleMobileNav()">Profile &amp; Settings</a>
<a aria-current="false" className="nav-link block px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700" data-nav="help" href="#" onclick="toggleMobileNav()">Help</a>
</nav>
<div className="mt-6 border-t border-slate-200 pt-4">
<button className="w-full inline-flex items-center justify-center gap-2 text-sm text-slate-700 px-3 py-2 rounded-lg hover:bg-slate-100" onclick="logout()">
<svg className="lucide lucide-log-out" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
              Sign out
            </button>
</div>
</div>
</div>

<main className="lg:pl-72">
<div className="px-4 sm:px-6 py-6">

<section className="space-y-6" data-section="dashboard">
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div>
<h2 className="text-2xl tracking-tight font-semibold">Good afternoon, Alyssa</h2>
<p className="text-sm text-slate-600 mt-1">Here’s what’s next for your skin health.</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100" onclick="navigate('plan')">
<svg className="lucide lucide-check-circle-2" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                    View care plan
                  </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm hover:bg-black" onclick="openBookModal()">
<svg className="lucide lucide-calendar" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                    Book follow-up
                  </button>
</div>
</div>
<div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
<div className="flex items-center gap-2">
<svg className="lucide lucide-stethoscope text-slate-700" data-lucide="stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg>
<p className="text-sm text-slate-800">Next appointment</p>
</div>
<p className="mt-2 text-sm text-slate-600">Mon, Oct 21 · 10:15 AM with Dr. Patel</p>
<div className="mt-3 flex gap-2">
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100" onclick="navigate('appointments')">
<svg className="lucide lucide-calendar" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Manage
                    </button>
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100" onclick="openCheckIn()">
<svg className="lucide lucide-scan-line" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg> Check in
                    </button>
</div>
</div>
<div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
<div className="flex items-center gap-2">
<svg className="lucide lucide-sun text-amber-600" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<p className="text-sm text-slate-800">UV index near you</p>
</div>
<p className="mt-2 text-sm text-slate-600">San Francisco · Moderate (5)</p>
<p className="mt-1 text-xs text-slate-500">Tip: SPF 30+, reapply every 2 hrs.</p>
</div>
<div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
<div className="flex items-center gap-2">
<svg className="lucide lucide-alert-triangle text-rose-600" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<p className="text-sm text-slate-800">Action needed</p>
</div>
<p className="mt-2 text-sm text-slate-600">Sign updated photo consent form</p>
<button className="mt-2 inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100" onclick="navigate('documents')">
<svg className="lucide lucide-file-signature" data-lucide="file-signature" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18.226 5.226-2.52-2.52A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.351"></path><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path><path d="M8 18h1"></path></svg> Review
                  </button>
</div>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
<div className="xl:col-span-2 space-y-6">
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg tracking-tight font-semibold">Skin health trends</h3>
<p className="text-sm text-slate-600 mt-1">Flare-ups and adherence over the last 8 weeks</p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs hover:bg-slate-100" onclick="navigate('conditions')">
<svg className="lucide lucide-line-chart" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
                      Details
                    </button>
</div>
<div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
<div>
<h4 className="text-sm text-slate-700">Weekly flare-ups</h4>
<p className="text-xs text-slate-500">Self-reported via check-ins</p>
<div className="mt-2 rounded-lg border border-slate-200 p-2">
<div>
<div className="relative">
<div className="rounded-md bg-slate-50 border border-slate-200 p-2">
<div>
<canvas height="0" id="flareChart" style={{display: 'block', boxSizing: 'border-box', height: '0px', width: '0px'}} width="0"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
<div>
<h4 className="text-sm text-slate-700">Treatment adherence</h4>
<p className="text-xs text-slate-500">Based on daily routine completion</p>
<div className="mt-2 rounded-lg border border-slate-200 p-2">
<div>
<div className="relative">
<div className="rounded-md bg-slate-50 border border-slate-200 p-2">
<div>
<canvas height="0" id="adherenceChart" style={{display: 'block', boxSizing: 'border-box', height: '0px', width: '0px'}} width="0"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg tracking-tight font-semibold">Recent messages</h3>
<p className="text-sm text-slate-600 mt-1">Responses from your care team</p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs hover:bg-slate-100" onclick="navigate('messages')">
<svg className="lucide lucide-inbox" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
                      Open inbox
                    </button>
</div>
<div className="mt-4 divide-y divide-slate-200">
<div className="py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<p className="text-sm text-slate-800">Dr. Patel</p>
<p className="text-xs text-slate-600">Please continue the topical retinoid nightly.</p>
</div>
</div>
<span className="text-[11px] text-slate-500">2h</span>
</div>
<div className="py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div>
<p className="text-sm text-slate-800">Nurse Lee</p>
<p className="text-xs text-slate-600">Your lab results are available for review.</p>
</div>
</div>
<span className="text-[11px] text-slate-500">1d</span>
</div>
</div>
</div>
</div>
<div className="space-y-6">
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<h3 className="text-lg tracking-tight font-semibold">Today's care tasks</h3>
<div className="mt-3 space-y-2">
<div className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
<div>
<p className="text-sm text-slate-800">AM: Gentle cleanser</p>
<p className="text-xs text-slate-500">Before 10 AM</p>
</div>
<button aria-checked="false" className="switch inline-flex items-center rounded-full px-1 py-1 w-11 bg-slate-200" data-switch="" role="switch">
<span className="h-4 w-4 rounded-full bg-white shadow translate-x-0 transition-transform"></span>
</button>
</div>
<div className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
<div>
<p className="text-sm text-slate-800">PM: Retinoid 0.025%</p>
<p className="text-xs text-slate-500">Nightly · Face only</p>
</div>
<button aria-checked="true" className="switch inline-flex items-center rounded-full px-1 py-1 w-11 bg-slate-900" data-switch="" role="switch">
<span className="h-4 w-4 rounded-full bg-white shadow translate-x-6 transition-transform"></span>
</button>
</div>
<div className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
<div>
<p className="text-sm text-slate-800">Sunscreen SPF 50</p>
<p className="text-xs text-slate-500">Reapply every 2 hours</p>
</div>
<button aria-checked="false" className="switch inline-flex items-center rounded-full px-1 py-1 w-11 bg-slate-200" data-switch="" role="switch">
<span className="h-4 w-4 rounded-full bg-white shadow translate-x-0 transition-transform"></span>
</button>
</div>
</div>
<div className="mt-3">
<button className="inline-flex items-center gap-2 text-xs rounded-lg border border-slate-300 bg-white px-3 py-2 hover:bg-slate-100" onclick="navigate('careplan')">
<svg className="lucide lucide-list-checks" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 5h8"></path><path d="M13 12h8"></path><path d="M13 19h8"></path><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path></svg>
                      View all
                    </button>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<h3 className="text-lg tracking-tight font-semibold">Prescriptions</h3>
<div className="mt-3 space-y-4">
<div className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
<div>
<p className="text-sm text-slate-800">Tretinoin 0.025% cream</p>
<p className="text-xs text-slate-500">Apply pea-sized nightly</p>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] text-slate-600">Refill in 10d</span>
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100" onclick="navigate('prescriptions')">
<svg className="lucide lucide-refresh-ccw" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg> Refill
                        </button>
</div>
</div>
<div className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
<div>
<p className="text-sm text-slate-800">Benzoyl peroxide 5% wash</p>
<p className="text-xs text-slate-500">Use once daily</p>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] text-slate-600">On track</span>
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100" onclick="navigate('prescriptions')">
<svg className="lucide lucide-file-badge-2" data-lucide="file-badge-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88"></path><circle cx="6" cy="14" r="3"></circle></svg> Details
                        </button>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<h3 className="text-lg tracking-tight font-semibold">Quick tips</h3>
<p className="mt-1 text-sm text-slate-600">Curated by your AI receptionist</p>
<ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1.5">
<li>Wait 20 minutes after washing before applying retinoid to reduce irritation.</li>
<li>Use non-comedogenic moisturizer to buffer retinoid if dryness occurs.</li>
<li>Daily sunscreen helps prevent post-inflammatory hyperpigmentation.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="space-y-6 hidden" data-section="appointments">
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl tracking-tight font-semibold">Appointments</h2>
<p className="text-sm text-slate-600 mt-1">Manage upcoming and past visits</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100" onclick="openBookModal()">
<svg className="lucide lucide-calendar-plus" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg> Book
                  </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100" onclick="openCheckIn()">
<svg className="lucide lucide-scan-line" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg> Check in
                  </button>
</div>
</div>
<div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
<div className="flex items-start justify-between">
<div>
<p className="text-sm text-slate-800">Mon, Oct 21 · 10:15 AM</p>
<p className="text-xs text-slate-500">Follow-up · Dr. Patel</p>
</div>
<span className="text-[11px] text-amber-700 bg-amber-50 ring-1 ring-amber-100 px-2 py-1 rounded-md">In-person</span>
</div>
<div className="mt-3 flex gap-2">
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-map-pin" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Directions
                    </button>
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-bell-ring" data-lucide="bell-ring" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M22 8c0-2.3-.8-4.3-2-6"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path><path d="M4 2C2.8 3.7 2 5.7 2 8"></path></svg> Remind me
                    </button>
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100" onclick="reschedule()">
<i data-lucide="calendar-pen" style={{width: '14px', height: '14px'}}></i> Reschedule
                    </button>
</div>
</div>
<div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
<div className="flex items-start justify-between">
<div>
<p className="text-sm text-slate-800">Thu, Nov 14 · 1:30 PM</p>
<p className="text-xs text-slate-500">Tele-derm · Nurse Practitioner</p>
</div>
<span className="text-[11px] text-sky-700 bg-sky-50 ring-1 ring-sky-100 px-2 py-1 rounded-md">Virtual</span>
</div>
<div className="mt-3 flex gap-2">
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-video" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg> Test video
                    </button>
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100" onclick="openCheckIn()">
<svg className="lucide lucide-badge-check" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg> Pre-visit
                    </button>
</div>
</div>
</div>
<div className="mt-6">
<h3 className="text-sm font-medium text-slate-700">Past visits</h3>
<div className="mt-2 overflow-hidden rounded-xl border border-slate-200">
<table className="w-full text-sm">
<thead className="bg-slate-50 text-slate-600">
<tr>
<th className="text-left px-4 py-2 border-b border-slate-200">Date</th>
<th className="text-left px-4 py-2 border-b border-slate-200">Type</th>
<th className="text-left px-4 py-2 border-b border-slate-200">Clinician</th>
<th className="text-left px-4 py-2 border-b border-slate-200">Notes</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr>
<td className="px-4 py-2">Aug 02</td>
<td className="px-4 py-2">Initial consult</td>
<td className="px-4 py-2">Dr. Patel</td>
<td className="px-4 py-2"><button className="text-slate-700 underline" onclick="navigate('documents')">Visit summary</button></td>
</tr>
<tr>
<td className="px-4 py-2">Sep 12</td>
<td className="px-4 py-2">Follow-up</td>
<td className="px-4 py-2">Dr. Patel</td>
<td className="px-4 py-2"><button className="text-slate-700 underline" onclick="navigate('labs')">Biopsy result</button></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="space-y-6 hidden" data-section="messages">
<div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-3">
<div className="border-r border-slate-200">
<div className="p-4 border-b border-slate-200">
<h2 className="text-lg tracking-tight font-semibold">Inbox</h2>
<div className="mt-3 relative">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full pl-8 pr-3 py-2 rounded-lg border border-slate-300 bg-white text-sm outline-none focus:ring-2 focus:ring-slate-900" placeholder="Search messages"/>
</div>
</div>
<div className="max-h-[60vh] overflow-y-auto">
<button className="w-full text-left px-4 py-3 hover:bg-slate-50 border-b border-slate-200">
<p className="text-sm text-slate-800">Dr. Patel</p>
<p className="text-xs text-slate-600 truncate">Please continue the topical retinoid nightly.</p>
</button>
<button className="w-full text-left px-4 py-3 hover:bg-slate-50 border-b border-slate-200">
<p className="text-sm text-slate-800">Front Desk</p>
<p className="text-xs text-slate-600 truncate">Reminder: update photo consent form.</p>
</button>
<button className="w-full text-left px-4 py-3 hover:bg-slate-50 border-b border-slate-200">
<p className="text-sm text-slate-800">Nurse Lee</p>
<p className="text-xs text-slate-600 truncate">Your lab results are available.</p>
</button>
</div>
</div>
<div className="lg:col-span-2">
<div className="p-4 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<p className="text-sm text-slate-800">Dr. Patel</p>
<p className="text-xs text-slate-500">Dermatology</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100" onclick="navigate('documents')">
<svg className="lucide lucide-paperclip" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg> Attach
                      </button>
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100" onclick="navigate('photos')">
<svg className="lucide lucide-image" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg> Add photos
                      </button>
</div>
</div>
<div className="p-4 space-y-4 max-h-[50vh] overflow-y-auto">
<div className="flex items-start gap-3">
<img alt="" className="h-7 w-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
<p className="text-sm text-slate-800">I’ve had more redness this week. Is that normal when starting tretinoin?</p>
<span className="text-[11px] text-slate-500">Mon 9:30 AM</span>
</div>
</div>
<div className="flex items-start gap-3 justify-end">
<div className="rounded-lg border border-slate-200 bg-white p-3">
<p className="text-sm text-slate-800">Mild irritation is common. Reduce frequency to every other night for 1–2 weeks.</p>
<span className="text-[11px] text-slate-500">Mon 10:12 AM · Dr. Patel</span>
</div>
<img alt="" className="h-7 w-7 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="p-3 border-t border-slate-200">
<div className="flex items-center gap-2">
<input className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900" placeholder="Write a message…"/>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm hover:bg-black">
<svg className="lucide lucide-send" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                        Send
                      </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-6 hidden" data-section="assistant">
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="rounded-lg bg-slate-900 text-white p-2">
<svg className="lucide lucide-bot" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div>
<h2 className="text-2xl tracking-tight font-semibold">AI Receptionist</h2>
<p className="text-sm text-slate-600">Ask about appointments, refills, forms, and skin photos.</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100" onclick="openBookModal()">
<svg className="lucide lucide-calendar" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Book visit
                  </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100" onclick="navigate('prescriptions')">
<svg className="lucide lucide-pill" data-lucide="pill" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path><path d="m8.5 8.5 7 7"></path></svg> Refill
                  </button>
</div>
</div>
<div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="lg:col-span-2 rounded-xl border border-slate-200">
<div className="p-4 max-h-[55vh] overflow-y-auto space-y-4">
<div className="flex items-start gap-3">
<div className="rounded-lg bg-slate-900 text-white p-2">
<svg className="lucide lucide-bot" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
<p className="text-sm text-slate-800">Hi Alyssa! I can help you check in, book visits, and review your care plan. What do you need today?</p>
<div className="mt-2 flex flex-wrap gap-2">
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100" onclick="openBookModal()">
<svg className="lucide lucide-calendar-plus" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg> Book visit
                          </button>
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100" onclick="navigate('photos')">
<svg className="lucide lucide-upload" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg> Upload skin photos
                          </button>
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100" onclick="navigate('documents')">
<svg className="lucide lucide-file-text" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Fill forms
                          </button>
</div>
</div>
</div>
<div className="flex items-start gap-3">
<img alt="" className="h-7 w-7 rounded-md object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="rounded-lg border border-slate-200 bg-white p-3">
<p className="text-sm text-slate-800">I need a refill for my tretinoin.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="rounded-lg bg-slate-900 text-white p-2">
<svg className="lucide lucide-bot" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
<p className="text-sm text-slate-800">I can request that now. Confirm your preferred pharmacy?</p>
<div className="mt-2 flex gap-2">
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100" onclick="navigate('pharmacy')">
<svg className="lucide lucide-building-2" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg> View pharmacies
                          </button>
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-slate-900 text-white px-2.5 py-1.5 hover:bg-black" onclick="navigate('prescriptions')">
<svg className="lucide lucide-send" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Send request
                          </button>
</div>
</div>
</div>
</div>
<div className="p-3 border-t border-slate-200">
<div className="flex items-center gap-2">
<input className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900" id="assistant-input" placeholder="Ask about appointments, refills, or forms…"/>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm hover:bg-black" onclick="sendAssistant()">
<svg className="lucide lucide-arrow-up" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
</div>
</div>
</div>
<div className="space-y-4">
<div className="rounded-xl border border-slate-200 bg-white p-4">
<p className="text-sm font-medium text-slate-800">Quick actions</p>
<div className="mt-3 grid grid-cols-2 gap-2">
<button className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs hover:bg-slate-100" onclick="openCheckIn()"><svg className="lucide lucide-badge-check" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>Check in</button>
<button className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs hover:bg-slate-100" onclick="navigate('billing')"><svg className="lucide lucide-wallet" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>Pay bill</button>
<button className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs hover:bg-slate-100" onclick="navigate('documents')"><svg className="lucide lucide-file-text" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>Forms</button>
<button className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs hover:bg-slate-100" onclick="navigate('photos')"><svg className="lucide lucide-camera" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>New photo</button>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4">
<p className="text-sm font-medium text-slate-800">What can I do?</p>
<ul className="mt-2 text-xs text-slate-600 space-y-1.5 list-disc pl-5">
<li>Schedule or reschedule visits</li>
<li>Request medication refills</li>
<li>Explain your care plan</li>
<li>Help upload and compare photos</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-6 hidden" data-section="conditions">
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl tracking-tight font-semibold">Conditions</h2>
<p className="text-sm text-slate-600 mt-1">Track severity and triggers</p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100" onclick="openFlareLog()">
<svg className="lucide lucide-plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> Log flare-up
                </button>
</div>
<div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
<div className="flex items-start justify-between">
<div>
<p className="text-sm text-slate-800">Acne vulgaris</p>
<p className="text-xs text-slate-500">Face, chest</p>
</div>
<span className="text-[11px] text-amber-700 bg-amber-50 ring-1 ring-amber-100 px-2 py-1 rounded-md">Moderate</span>
</div>
<div className="mt-3">
<div className="flex items-center gap-2">
<button className="px-2 py-1 rounded-md text-xs border border-slate-300 bg-white hover:bg-slate-100">Mild</button>
<button className="px-2 py-1 rounded-md text-xs border border-slate-300 bg-white hover:bg-slate-100">Moderate</button>
<button className="px-2 py-1 rounded-md text-xs border border-slate-300 bg-white hover:bg-slate-100">Severe</button>
</div>
</div>
<div className="mt-3">
<p className="text-xs text-slate-600">Recent trigger: stress</p>
<button className="mt-2 inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100" onclick="navigate('careplan')">
<svg className="lucide lucide-list-checks" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 5h8"></path><path d="M13 12h8"></path><path d="M13 19h8"></path><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path></svg> Care plan
                    </button>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
<div className="flex items-start justify-between">
<div>
<p className="text-sm text-slate-800">Atopic dermatitis</p>
<p className="text-xs text-slate-500">Elbows, behind knees</p>
</div>
<span className="text-[11px] text-rose-700 bg-rose-50 ring-1 ring-rose-100 px-2 py-1 rounded-md">Flare</span>
</div>
<div className="mt-3">
<p className="text-xs text-slate-600">Moisturize 2–3x/day · Avoid hot showers</p>
</div>
<div className="mt-3">
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100" onclick="navigate('photos')">
<svg className="lucide lucide-image" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg> Compare photos
                    </button>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
<div className="flex items-start justify-between">
<div>
<p className="text-sm text-slate-800">Suspicious mole</p>
<p className="text-xs text-slate-500">Left shoulder</p>
</div>
<span className="text-[11px] text-sky-700 bg-sky-50 ring-1 ring-sky-100 px-2 py-1 rounded-md">Monitoring</span>
</div>
<div className="mt-3">
<p className="text-xs text-slate-600">Self-check monthly</p>
<button className="mt-2 inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100" onclick="navigate('appointments')">
<svg className="lucide lucide-calendar" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Schedule check
                    </button>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-6 hidden" data-section="careplan">
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl tracking-tight font-semibold">Care Plan</h2>
<p className="text-sm text-slate-600 mt-1">Daily routine and instructions</p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100" onclick="navigate('assistant')">
<svg className="lucide lucide-message-square" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg> Ask a question
                </button>
</div>
<div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="lg:col-span-2 space-y-3">
<div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
<p className="text-sm font-medium text-slate-800">Morning</p>
<ul className="mt-2 space-y-2">
<li className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2">
<div>
<p className="text-sm text-slate-800">Gentle cleanser</p>
<p className="text-xs text-slate-500">Lukewarm water, pat dry</p>
</div>
<button aria-checked="false" className="switch inline-flex items-center rounded-full px-1 py-1 w-11 bg-slate-200" data-switch="" role="switch">
<span className="h-4 w-4 rounded-full bg-white shadow translate-x-0 transition-transform"></span>
</button>
</li>
<li className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2">
<div>
<p className="text-sm text-slate-800">Moisturizer</p>
<p className="text-xs text-slate-500">Fragrance-free</p>
</div>
<button aria-checked="true" className="switch inline-flex items-center rounded-full px-1 py-1 w-11 bg-slate-900" data-switch="" role="switch">
<span className="h-4 w-4 rounded-full bg-white shadow translate-x-6 transition-transform"></span>
</button>
</li>
<li className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2">
<div>
<p className="text-sm text-slate-800">Sunscreen SPF 50</p>
<p className="text-xs text-slate-500">Broad-spectrum, reapply q2h</p>
</div>
<button aria-checked="false" className="switch inline-flex items-center rounded-full px-1 py-1 w-11 bg-slate-200" data-switch="" role="switch">
<span className="h-4 w-4 rounded-full bg-white shadow translate-x-0 transition-transform"></span>
</button>
</li>
</ul>
</div>
<div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
<p className="text-sm font-medium text-slate-800">Evening</p>
<ul className="mt-2 space-y-2">
<li className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2">
<div>
<p className="text-sm text-slate-800">Tretinoin 0.025% cream</p>
<p className="text-xs text-slate-500">Pea-sized, avoid eye/nasal folds</p>
</div>
<button aria-checked="true" className="switch inline-flex items-center rounded-full px-1 py-1 w-11 bg-slate-900" data-switch="" role="switch">
<span className="h-4 w-4 rounded-full bg-white shadow translate-x-6 transition-transform"></span>
</button>
</li>
<li className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2">
<div>
<p className="text-sm text-slate-800">Non-comedogenic moisturizer</p>
<p className="text-xs text-slate-500">Apply after tretinoin</p>
</div>
<button aria-checked="true" className="switch inline-flex items-center rounded-full px-1 py-1 w-11 bg-slate-900" data-switch="" role="switch">
<span className="h-4 w-4 rounded-full bg-white shadow translate-x-6 transition-transform"></span>
</button>
</li>
</ul>
</div>
</div>
<div className="space-y-3">
<div className="rounded-xl border border-slate-200 p-4">
<p className="text-sm font-medium text-slate-800">Reminders</p>
<div className="mt-2 space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-600">Daily at 9 PM</span>
<button aria-checked="true" className="switch inline-flex items-center rounded-full px-1 py-1 w-11 bg-slate-900" data-switch="" role="switch">
<span className="h-4 w-4 rounded-full bg-white shadow translate-x-6 transition-transform"></span>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-600">Refill alerts</span>
<button aria-checked="true" className="switch inline-flex items-center rounded-full px-1 py-1 w-11 bg-slate-900" data-switch="" role="switch">
<span className="h-4 w-4 rounded-full bg-white shadow translate-x-6 transition-transform"></span>
</button>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-200 p-4">
<p className="text-sm font-medium text-slate-800">Education</p>
<ul className="mt-2 text-xs text-slate-600 space-y-1.5 list-disc pl-5">
<li>Using retinoids safely</li>
<li>Gentle skincare routines</li>
<li>Sun protection basics</li>
</ul>
</div>
</div>
</div>
</div>
</section></div>

<section className="space-y-6 hidden" data-section="photos">
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl tracking-tight font-semibold">Photos</h2>
<p className="text-sm text-slate-600 mt-1">Upload, organize, and compare skin photos</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100" onclick="openUploadModal()">
<svg className="lucide lucide-upload" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg> Upload
                  </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm hover:bg-black">
<svg className="lucide lucide-sparkles" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> AI compare
                  </button>
</div>
</div>
<div className="mt-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
<p className="text-xs text-slate-600">Capture tips</p>
<ul className="mt-2 text-xs text-slate-600 space-y-1.5 list-disc pl-5">
<li>Use consistent lighting and distance</li>
<li>Include a reference coin/ruler</li>
<li>Photograph the same angles</li>
</ul>
<button className="mt-3 inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100" onclick="openUploadModal()">
<svg className="lucide lucide-camera" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg> New photo
                  </button>
</div>
<div className="lg:col-span-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-xs hover:bg-slate-100">
<svg className="lucide lucide-funnel" data-lucide="funnel" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg> Filter
                      </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-xs hover:bg-slate-100">
<svg className="lucide lucide-calendar" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> This month
                      </button>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-xs hover:bg-slate-100">
<svg className="lucide lucide-layout-grid" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg> Grid
                      </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-xs hover:bg-slate-100">
<svg className="lucide lucide-columns-3" data-lucide="columns-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path><path d="M15 3v18"></path></svg> Compare
                      </button>
</div>
</div>
<div className="mt-3 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
<div className="group relative overflow-hidden rounded-lg ring-1 ring-slate-200">
<img alt="" className="h-36 w-full object-cover transition-transform group-hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-2">
<p className="text-[11px] text-white">Left shoulder · Sep 12</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-lg ring-1 ring-slate-200">
<img alt="" className="h-36 w-full object-cover transition-transform group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-2">
<p className="text-[11px] text-white">Cheek · Sep 28</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-lg ring-1 ring-slate-200">
<img alt="" className="h-36 w-full object-cover transition-transform group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-2">
<p className="text-[11px] text-white">Forehead · Oct 03</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-lg ring-1 ring-slate-200">
<img alt="" className="h-36 w-full object-cover transition-transform group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-2">
<p className="text-[11px] text-white">Cheek · Oct 08</p>
</div>
</div>
</div>
<div className="mt-4">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs hover:bg-slate-100">
<svg className="lucide lucide-download" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Export all
                    </button>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-6 hidden" data-section="prescriptions">
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl tracking-tight font-semibold">Prescriptions</h2>
<p className="text-sm text-slate-600 mt-1">Medication list and refills</p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100" onclick="navigate('pharmacy')">
<svg className="lucide lucide-building-2" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg> Manage pharmacy
                </button>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
<div className="flex items-start justify-between">
<div>
<p className="text-sm text-slate-800">Tretinoin 0.025% cream</p>
<p className="text-xs text-slate-500">45g · Apply nightly</p>
</div>
<span className="text-[11px] text-amber-700 bg-amber-50 ring-1 ring-amber-100 px-2 py-1 rounded-md">Refill soon</span>
</div>
<div className="mt-3 flex items-center justify-between">
<p className="text-xs text-slate-600">0 refills remaining</p>
<div className="flex gap-2">
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100" onclick="requestRefill('Tretinoin')">
<svg className="lucide lucide-refresh-ccw" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg> Request refill
                      </button>
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-file-text" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Info
                      </button>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
<div className="flex items-start justify-between">
<div>
<p className="text-sm text-slate-800">Benzoyl peroxide 5% wash</p>
<p className="text-xs text-slate-500">Use once daily</p>
</div>
<span className="text-[11px] text-emerald-700 bg-emerald-50 ring-1 ring-emerald-100 px-2 py-1 rounded-md">Active</span>
</div>
<div className="mt-3 flex items-center justify-between">
<p className="text-xs text-slate-600">3 refills remaining</p>
<div className="flex gap-2">
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-file-badge-2" data-lucide="file-badge-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88"></path><circle cx="6" cy="14" r="3"></circle></svg> Details
                      </button>
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100" onclick="requestRefill('BPO Wash')">
<svg className="lucide lucide-send" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Refill
                      </button>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
<div className="flex items-start justify-between">
<div>
<p className="text-sm text-slate-800">Doxycycline 50mg</p>
<p className="text-xs text-slate-500">1 cap BID with food</p>
</div>
<span className="text-[11px] text-slate-700 bg-slate-100 ring-1 ring-slate-200 px-2 py-1 rounded-md">Completed</span>
</div>
<div className="mt-3 flex items-center justify-between">
<p className="text-xs text-slate-600">Ended Aug 30</p>
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-archive" data-lucide="archive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="20" x="2" y="3"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path><path d="M10 12h4"></path></svg> Archive
                    </button>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-6 hidden" data-section="labs">
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl tracking-tight font-semibold">Labs &amp; Biopsies</h2>
<p className="text-sm text-slate-600 mt-1">Results and pathology</p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100">
<svg className="lucide lucide-download" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Download all
                </button>
</div>
<div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
<table className="w-full text-sm">
<thead className="bg-slate-50 text-slate-600">
<tr>
<th className="text-left px-4 py-2 border-b border-slate-200">Date</th>
<th className="text-left px-4 py-2 border-b border-slate-200">Type</th>
<th className="text-left px-4 py-2 border-b border-slate-200">Result</th>
<th className="text-left px-4 py-2 border-b border-slate-200">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr>
<td className="px-4 py-2">Sep 12</td>
<td className="px-4 py-2">Biopsy · Shoulder</td>
<td className="px-4 py-2"><span className="text-[11px] text-emerald-700 bg-emerald-50 ring-1 ring-emerald-100 px-2 py-0.5 rounded">Benign nevi</span></td>
<td className="px-4 py-2">
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100"><svg className="lucide lucide-file-text" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>View PDF</button>
</td>
</tr>
<tr>
<td className="px-4 py-2">Oct 02</td>
<td className="px-4 py-2">CBC</td>
<td className="px-4 py-2"><span className="text-[11px] text-sky-700 bg-sky-50 ring-1 ring-sky-100 px-2 py-0.5 rounded">Within range</span></td>
<td className="px-4 py-2">
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100"><svg className="lucide lucide-file-text" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>View</button>
</td>
</tr>
<tr>
<td className="px-4 py-2">Oct 06</td>
<td className="px-4 py-2">LFT</td>
<td className="px-4 py-2"><span className="text-[11px] text-amber-700 bg-amber-50 ring-1 ring-amber-100 px-2 py-0.5 rounded">Pending</span></td>
<td className="px-4 py-2">
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100"><svg className="lucide lucide-bell" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>Notify me</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="space-y-6 hidden" data-section="pharmacy">
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl tracking-tight font-semibold">Pharmacy</h2>
<p className="text-sm text-slate-600 mt-1">Preferred locations for prescriptions</p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100" onclick="openBookModal()">
<svg className="lucide lucide-calendar" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Book consult
                </button>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
<div className="flex items-start justify-between">
<div>
<p className="text-sm text-slate-800">CityCare Pharmacy</p>
<p className="text-xs text-slate-500">123 Main St, San Francisco</p>
<p className="text-xs text-slate-500">Ph: (415) 555-1212</p>
</div>
<span className="text-[11px] text-emerald-700 bg-emerald-50 ring-1 ring-emerald-100 px-2 py-1 rounded-md">Default</span>
</div>
<div className="mt-3 flex gap-2">
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-phone" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> Call
                    </button>
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-map" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg> Map
                    </button>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4">
<p className="text-sm text-slate-800">Walton Drugs</p>
<p className="text-xs text-slate-500">456 Market St</p>
<div className="mt-3">
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100" onclick="setDefaultPharmacy('Walton Drugs')">
<svg className="lucide lucide-check-circle" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Set as default
                    </button>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4">
<p className="text-sm text-slate-800">HealthPlus Rx</p>
<p className="text-xs text-slate-500">789 Pine Ave</p>
<div className="mt-3">
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100" onclick="setDefaultPharmacy('HealthPlus Rx')">
<svg className="lucide lucide-check-circle" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Set as default
                    </button>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-6 hidden" data-section="billing">
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl tracking-tight font-semibold">Billing &amp; Insurance</h2>
<p className="text-sm text-slate-600 mt-1">Current balance and coverage</p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100">
<svg className="lucide lucide-download" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Statements
                </button>
</div>
<div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="rounded-xl border border-slate-200 bg-slate-50 p-4 lg:col-span-2">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-slate-800">Outstanding balance</p>
<p className="text-2xl font-semibold tracking-tight mt-1">$78.40</p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm hover:bg-black" onclick="openPayment()">
<svg className="lucide lucide-wallet" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg> Pay now
                    </button>
</div>
<div className="mt-4 overflow-hidden rounded-lg border border-slate-200">
<table className="w-full text-sm">
<thead className="bg-white text-slate-600">
<tr>
<th className="text-left px-4 py-2 border-b border-slate-200">Date</th>
<th className="text-left px-4 py-2 border-b border-slate-200">Service</th>
<th className="text-left px-4 py-2 border-b border-slate-200">Amount</th>
<th className="text-left px-4 py-2 border-b border-slate-200">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr>
<td className="px-4 py-2">Sep 12</td>
<td className="px-4 py-2">Biopsy processing</td>
<td className="px-4 py-2">$120.00</td>
<td className="px-4 py-2"><span className="text-[11px] text-amber-700 bg-amber-50 ring-1 ring-amber-100 px-2 py-0.5 rounded">Pending insurance</span></td>
</tr>
<tr>
<td className="px-4 py-2">Oct 01</td>
<td className="px-4 py-2">Follow-up visit</td>
<td className="px-4 py-2">$78.40</td>
<td className="px-4 py-2"><span className="text-[11px] text-rose-700 bg-rose-50 ring-1 ring-rose-100 px-2 py-0.5 rounded">Due</span></td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4">
<p className="text-sm font-medium text-slate-800">Insurance</p>
<div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-3">
<p className="text-sm text-slate-800">BlueShield PPO</p>
<p className="text-xs text-slate-500">Member ID: BS-1189023</p>
<p className="text-xs text-slate-500">Copay: $20</p>
</div>
<button className="mt-3 inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-replace" data-lucide="replace" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4a1 1 0 0 1 1-1"></path><path d="M15 10a1 1 0 0 1-1-1"></path><path d="M21 4a1 1 0 0 0-1-1"></path><path d="M21 9a1 1 0 0 1-1 1"></path><path d="m3 7 3 3 3-3"></path><path d="M6 10V5a2 2 0 0 1 2-2h2"></path><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg> Update card
                  </button>
</div>
</div>
</div>
</section>

<section className="space-y-6 hidden" data-section="documents">
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl tracking-tight font-semibold">Documents &amp; Forms</h2>
<p className="text-sm text-slate-600 mt-1">Complete forms and view records</p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100" onclick="openUploadModal()">
<svg className="lucide lucide-upload" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg> Upload document
                </button>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-slate-800">Photo consent form</p>
<p className="text-xs text-slate-500">Updated Oct 05</p>
</div>
<span className="text-[11px] text-rose-700 bg-rose-50 ring-1 ring-rose-100 px-2 py-1 rounded-md">Required</span>
</div>
<div className="mt-3">
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-slate-900 text-white px-2.5 py-1.5 hover:bg-black">
<svg className="lucide lucide-file-signature" data-lucide="file-signature" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18.226 5.226-2.52-2.52A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.351"></path><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path><path d="M8 18h1"></path></svg> Sign now
                    </button>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-slate-800">Visit summary · Aug 02</p>
<p className="text-xs text-slate-500">Dr. Patel</p>
</div>
<button className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white border border-slate-300 px-2.5 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-download" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Download
                    </button>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-slate-800">HIPAA release</p>
<p className="text-xs text-slate-500">Expires Dec 31</p>
</div>
<span className="text-[11px] text-emerald-700 bg-emerald-50 ring-1 ring-emerald-100 px-2 py-1 rounded-md">Active</span>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-6 hidden" data-section="settings">
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl tracking-tight font-semibold">Profile &amp; Settings</h2>
<p className="text-sm text-slate-600 mt-1">Manage your account and preferences</p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm hover:bg-black" onclick="saveSettings()">
<svg className="lucide lucide-save" data-lucide="save" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg> Save
                </button>
</div>
<div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="lg:col-span-2 space-y-4">
<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
<p className="text-sm font-medium text-slate-800">Personal info</p>
<div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
<div>
<label className="text-xs text-slate-600">First name</label>
<input className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm" value="Alyssa"/>
</div>
<div>
<label className="text-xs text-slate-600">Last name</label>
<input className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm" value="Chen"/>
</div>
<div>
<label className="text-xs text-slate-600">Email</label>
<input className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm" value="alyssa@example.com"/>
</div>
<div>
<label className="text-xs text-slate-600">Phone</label>
<input className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm" value="(415) 555-0199"/>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
<p className="text-sm font-medium text-slate-800">Address</p>
<div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="md:col-span-2">
<label className="text-xs text-slate-600">Street</label>
<input className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm" value="100 Oak St"/>
</div>
<div>
<label className="text-xs text-slate-600">City</label>
<input className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm" value="San Francisco"/>
</div>
<div>
<label className="text-xs text-slate-600">State</label>
<input className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm" value="CA"/>
</div>
<div>
<label className="text-xs text-slate-600">ZIP</label>
<input className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm" value="94107"/>
</div>
</div>
</div>
</div>
<div className="space-y-4">
<div className="rounded-xl border border-slate-200 bg-white p-4">
<p className="text-sm font-medium text-slate-800">Security</p>
<div className="mt-2 flex items-center justify-between">
<span className="text-xs text-slate-600">Two-factor authentication</span>
<button aria-checked="true" className="switch inline-flex items-center rounded-full px-1 py-1 w-11 bg-slate-900" data-switch="" role="switch">
<span className="h-4 w-4 rounded-full bg-white shadow translate-x-6 transition-transform"></span>
</button>
</div>
<div className="mt-2 flex items-center justify-between">
<span className="text-xs text-slate-600">Login alerts</span>
<button aria-checked="false" className="switch inline-flex items-center rounded-full px-1 py-1 w-11 bg-slate-200" data-switch="" role="switch">
<span className="h-4 w-4 rounded-full bg-white shadow translate-x-0 transition-transform"></span>
</button>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4">
<p className="text-sm font-medium text-slate-800">Communication</p>
<div className="mt-2 space-y-2">
<label className="flex items-center gap-2 text-xs text-slate-700">
<input checked="" className="rounded border-slate-300" type="checkbox"/> Email updates
                      </label>
<label className="flex items-center gap-2 text-xs text-slate-700">
<input className="rounded border-slate-300" type="checkbox"/> SMS reminders
                      </label>
<label className="flex items-center gap-2 text-xs text-slate-700">
<input checked="" className="rounded border-slate-300" type="checkbox"/> Product tips
                      </label>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-6 hidden" data-section="help">
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl tracking-tight font-semibold">Help &amp; Support</h2>
<p className="text-sm text-slate-600 mt-1">FAQs and ways to reach us</p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100" onclick="navigate('assistant')">
<svg className="lucide lucide-bot" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg> Ask AI
                </button>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="md:col-span-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
<p className="text-sm font-medium text-slate-800">Frequently asked</p>
<ul className="mt-2 space-y-3">
<li className="rounded-lg border border-slate-200 bg-white p-3">
<p className="text-sm text-slate-800">How do I reschedule an appointment?</p>
<p className="text-xs text-slate-600 mt-1">Go to Appointments and click Reschedule on your visit.</p>
</li>
<li className="rounded-lg border border-slate-200 bg-white p-3">
<p className="text-sm text-slate-800">What is photo consent?</p>
<p className="text-xs text-slate-600 mt-1">It allows our team to store and analyze your images over time.</p>
</li>
<li className="rounded-lg border border-slate-200 bg-white p-3">
<p className="text-sm text-slate-800">How do refills work?</p>
<p className="text-xs text-slate-600 mt-1">Request from Prescriptions; we send to your preferred pharmacy.</p>
</li>
</ul>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4">
<p className="text-sm font-medium text-slate-800">Contact</p>
<div className="mt-2 space-y-2 text-sm">
<p className="text-slate-700 inline-flex items-center gap-2"><svg className="lucide lucide-mail" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> support@dermaportal.com</p>
<p className="text-slate-700 inline-flex items-center gap-2"><svg className="lucide lucide-phone" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> (415) 555-1010</p>
<p className="text-slate-700 inline-flex items-center gap-2"><svg className="lucide lucide-clock" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> Mon–Fri 8a–6p PT</p>
</div>
<div className="mt-3">
<button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm hover:bg-black" onclick="navigate('messages')">
<svg className="lucide lucide-message-square" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg> Message us
                    </button>
</div>
</div>
</div>
</div>
</section>
</main></div>
</div>


<div className="fixed inset-0 z-50 hidden" id="book-modal">
<div className="absolute inset-0 bg-black/40" onclick="closeModal('book-modal')"></div>
<div className="absolute inset-x-0 top-10 mx-auto w-[92%] max-w-2xl">
<div className="rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden">
<div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-calendar-plus" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
<p className="font-medium">Book an appointment</p>
</div>
<button className="rounded-lg border border-slate-300 p-2 hover:bg-slate-100" onclick="closeModal('book-modal')"><svg className="lucide lucide-x" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
</div>
<div className="p-5 space-y-4">
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<div>
<label className="text-xs text-slate-600">Visit type</label>
<select className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm" id="book-type">
<option>Follow-up</option>
<option>New concern</option>
<option>Procedure</option>
<option>Tele-derm</option>
</select>
</div>
<div>
<label className="text-xs text-slate-600">Clinician</label>
<select className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm" id="book-clinician">
<option>Dr. Patel</option>
<option>Nurse Practitioner</option>
<option>First available</option>
</select>
</div>
<div>
<label className="text-xs text-slate-600">Location</label>
<select className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm" id="book-location">
<option>Clinic · San Francisco</option>
<option>Virtual</option>
</select>
</div>
</div>
<div>
<p className="text-sm text-slate-800 mb-2">Available times</p>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-2" id="slot-list">
<button className="slot-btn rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100">Mon 10:15 AM</button>
<button className="slot-btn rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100">Mon 11:45 AM</button>
<button className="slot-btn rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100">Tue 1:30 PM</button>
<button className="slot-btn rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100">Wed 9:00 AM</button>
<button className="slot-btn rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100">Thu 2:15 PM</button>
<button className="slot-btn rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100">Fri 3:45 PM</button>
</div>
</div>
<div className="flex items-center justify-between pt-2">
<p className="text-sm text-slate-600" id="chosen-slot">Select a time slot to continue.</p>
<button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm hover:bg-black disabled:opacity-50" disabled="" id="confirm-book" onclick="confirmBooking()">
<svg className="lucide lucide-check" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Confirm
            </button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="checkin-modal">
<div className="absolute inset-0 bg-black/40" onclick="closeModal('checkin-modal')"></div>
<div className="absolute inset-x-0 top-10 mx-auto w-[92%] max-w-2xl">
<div className="rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden">
<div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-scan-line" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
<p className="font-medium">Pre-visit check-in</p>
</div>
<button className="rounded-lg border border-slate-300 p-2 hover:bg-slate-100" onclick="closeModal('checkin-modal')"><svg className="lucide lucide-x" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
</div>
<div className="p-5 space-y-4">
<ol className="space-y-3 text-sm">
<li className="flex items-start gap-2">
<svg className="lucide lucide-badge-check text-emerald-600" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
              Confirm contact and insurance info
            </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-file-text text-sky-600" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
              Complete consent forms
            </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-image text-amber-600" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
              Optional: upload a current photo
            </li>
</ol>
<div className="flex items-center justify-between pt-2">
<p className="text-sm text-slate-600">Estimated time: 3–5 minutes</p>
<div className="flex gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100" onclick="navigate('documents')">
<svg className="lucide lucide-file-text" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Start forms
              </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm hover:bg-black" onclick="completeCheckIn()">
<svg className="lucide lucide-check" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Mark complete
              </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="flare-modal">
<div className="absolute inset-0 bg-black/40" onclick="closeModal('flare-modal')"></div>
<div className="absolute inset-x-0 top-14 mx-auto w-[92%] max-w-md">
<div className="rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden">
<div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<p className="font-medium">Log flare-up</p>
</div>
<button className="rounded-lg border border-slate-300 p-2 hover:bg-slate-100" onclick="closeModal('flare-modal')"><svg className="lucide lucide-x" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
</div>
<div className="p-5 space-y-4">
<div>
<label className="text-xs text-slate-600">Severity: <span className="font-medium text-slate-800" id="severity-val">3</span>/10</label>
<input className="w-full accent-slate-900 mt-2" id="severity" max="10" min="0" type="range" value="3"/>
</div>
<div>
<label className="text-xs text-slate-600">Possible triggers</label>
            &lt; className="mt-2 flex flex-wrap gap-2"&gt;
              <button className="chip" onclick="toggleChip(this)">Stress</button>
<button className="chip" onclick="toggleChip(this)">Diet</button>
<button className="chip" onclick="toggleChip(this)">Sun</button>
<button className="chip" onclick="toggleChip(this)">New product</button>
</div>
</div>
<div>
<label className="text-xs text-slate-600">Notes</label>
<textarea className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm" id="flare-notes" placeholder="Anything else to note?" rows="3"></textarea>
</div>
<div className="flex items-center justify-end">
<button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm hover:bg-black" onclick="saveFlare()">
<svg className="lucide lucide-save" data-lucide="save" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg> Save log
            </button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="upload-modal">
<div className="absolute inset-0 bg-black/40" onclick="closeModal('upload-modal')"></div>
<div className="absolute inset-x-0 top-12 mx-auto w-[92%] max-w-xl">
<div className="rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden">
<div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-upload" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
<p className="font-medium">Upload skin photo</p>
</div>
<button className="rounded-lg border border-slate-300 p-2 hover:bg-slate-100" onclick="closeModal('upload-modal')"><svg className="lucide lucide-x" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
</div>
<div className="p-5 space-y-4">
<div className="rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center hover:border-slate-400 transition-colors" id="dropzone">
<svg className="lucide lucide-image-up mx-auto text-slate-500" data-lucide="image-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '32px', height: '32px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"></path><path d="m14 19.5 3-3 3 3"></path><path d="M17 22v-5.5"></path><circle cx="9" cy="9" r="2"></circle></svg>
<p className="mt-2 text-sm text-slate-700">Drag &amp; drop image here, or</p>
<label className="mt-3 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100 cursor-pointer">
<svg className="lucide lucide-folder-open" data-lucide="folder-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path></svg> Browse
              <input accept="image/*" className="sr-only" id="photo-input" onchange="previewPhoto(event)" type="file"/>
</label>
</div>
<div className="hidden" id="preview">
<p className="text-sm text-slate-700">Preview</p>
<img alt="" className="mt-2 w-full max-h-64 object-contain rounded-lg border border-slate-200" id="preview-img"/>
</div>
<div className="flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100" onclick="closeModal('upload-modal')">Cancel</button>
<button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm hover:bg-black disabled:opacity-50" disabled="" id="save-photo" onclick="savePhoto()">
<svg className="lucide lucide-save" data-lucide="save" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg> Save photo
            </button>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
