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
      
    // Icons
    lucide.createIcons();

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileBtn) {
      mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Hero chat sequence loop
    const steps = Array.from(document.querySelectorAll('#chatSequence .step'));
    let idx = 0;
    function showStep(i) {
      const el = steps[i];
      if (!el) return;
      requestAnimationFrame(() => {
        el.classList.remove('opacity-0', 'translate-y-2');
        el.classList.add('opacity-100', 'translate-y-0');
      });
    }
    function resetSteps() {
      steps.forEach(s => {
        s.classList.add('opacity-0', 'translate-y-2');
        s.classList.remove('opacity-100', 'translate-y-0');
      });
    }
    function runSequence() {
      resetSteps();
      idx = 0;
      const timings = [0, 800, 1400, 2600, 3600]; // staggered reveal
      timings.forEach((t, i) => setTimeout(() => showStep(i), t));
    }
    runSequence();
    setInterval(runSequence, 8000);

    // Timeline scroll animation
    const flowBar = document.getElementById('flowBar');
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          flowBar.classList.remove('w-0');
          flowBar.classList.add('w-full');
        }
      }),
      { threshold: 0.6 }
    );
    if (flowBar) observer.observe(flowBar.parentElement);

    // Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');
    function setActive(tab) {
      tabBtns.forEach(b => {
        const active = b.getAttribute('data-tab') === tab;
        b.classList.toggle('bg-white', active);
        b.classList.toggle('shadow-sm', active);
        b.classList.toggle('text-gray-800', active);
      });
      panels.forEach(p => {
        p.classList.toggle('hidden', p.getAttribute('data-panel') !== tab);
      });
    }
    tabBtns.forEach(b => b.addEventListener('click', () => setActive(b.getAttribute('data-tab'))));
    setActive('clinics');
  
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
      

<header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-100">
<div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 shadow-sm"></div>
<span className="text-xl font-medium tracking-tight text-gray-900">Cura</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-gray-600 hover:text-gray-900" href="#product">Product</a>
<a className="text-gray-600 hover:text-gray-900" href="#industries">Industries</a>
<a className="text-gray-600 hover:text-gray-900" href="#pricing">Pricing</a>
<a className="text-gray-600 hover:text-gray-900" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="inline-flex items-center rounded-xl px-4 py-2.5 bg-[var(--accent)] text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all" href="#demo">
          Book a Demo
        </a>
<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50" id="mobileMenuBtn">
<i className="h-5 w-5 text-gray-700" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-gray-100" id="mobileMenu">
<div className="max-w-6xl mx-auto px-6 md:px-10 py-3 grid gap-2 text-sm">
<a className="py-2 text-gray-700" href="#product">Product</a>
<a className="py-2 text-gray-700" href="#industries">Industries</a>
<a className="py-2 text-gray-700" href="#pricing">Pricing</a>
<a className="py-2 text-gray-700" href="#contact">Contact</a>
</div>
</div>
</header>

<section className="bg-soft">
<div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">

<div>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
          Never miss a lead. Never miss revenue.
        </h1>
<p className="mt-5 text-lg text-gray-600">
          Cura is your AI Receptionist that answers instantly on WhatsApp, LINE, Facebook, SMS, and calls—booking appointments and securing deposits 24/7.
        </p>
<div className="mt-8 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-[var(--accent)] text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all" href="#demo">
<i className="h-5 w-5" data-lucide="calendar"></i>
            Book a Demo
          </a>
<button className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-gray-200 text-gray-800 hover:bg-gray-50 transition-colors">
<i className="h-5 w-5" data-lucide="play"></i>
            Watch Demo Video
          </button>
</div>

<div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-blue-600" data-lucide="zap"></i>
<span>Instant replies</span>
</div>
<div className="hidden sm:flex items-center gap-2">
<i className="h-4 w-4 text-blue-600" data-lucide="shield-check"></i>
<span>Bookings + deposits</span>
</div>
<div className="hidden sm:flex items-center gap-2">
<i className="h-4 w-4 text-blue-600" data-lucide="inbox"></i>
<span>All channels unified</span>
</div>
</div>
</div>

<div className="relative">

<div className="absolute -top-8 -left-8 right-6 h-40 rounded-2xl bg-white/80 backdrop-blur border border-gray-100 shadow-sm hidden md:block"></div>

<div className="relative rounded-2xl border border-gray-100 bg-white shadow-sm p-4 md:p-5">
<div className="flex items-center justify-between pb-3 border-b border-gray-100">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-full overflow-hidden">
<img alt="customer" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop" />
</div>
<div>
<p className="text-sm font-medium text-gray-900">Customer</p>
<p className="text-xs text-gray-500">WhatsApp</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-gray-500">
<i className="h-3.5 w-3.5" data-lucide="clock"></i> Live
              </span>
</div>
</div>

<div className="space-y-3 pt-4" id="chatSequence">

<div className="opacity-0 translate-y-2 transition-all duration-500 step">
<div className="max-w-[75%] rounded-2xl px-3.5 py-2.5 bg-gray-50 text-gray-800 border border-gray-100">
                Hi! Do you have availability this Friday?
              </div>
</div>

<div className="opacity-0 translate-y-2 transition-all duration-500 step">
<div className="flex items-center gap-1.5 text-gray-500 text-sm">
<span className="h-2 w-2 rounded-full bg-gray-300 animate-pulse"></span>
<span className="h-2 w-2 rounded-full bg-gray-300 animate-pulse"></span>
<span className="h-2 w-2 rounded-full bg-gray-300 animate-pulse"></span>
<span className="ml-2">Cura is typing…</span>
</div>
</div>

<div className="opacity-0 translate-y-2 transition-all duration-500 step">
<div className="ml-auto max-w-[78%] rounded-2xl px-3.5 py-2.5 bg-[var(--accent)] text-white shadow-sm">
                We’ve got two slots on Fri: 3:30 PM or 5:00 PM. Want me to book one?
              </div>
</div>

<div className="opacity-0 translate-y-2 transition-all duration-500 step">
<div className="max-w-[70%] rounded-2xl px-3.5 py-2.5 bg-gray-50 text-gray-800 border border-gray-100">
                5:00 PM works!
              </div>
</div>

<div className="opacity-0 translate-y-2 transition-all duration-500 step">
<div className="ml-auto w-full sm:w-[80%] rounded-2xl border border-blue-100 bg-blue-50 p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-blue-800">
<i className="h-5 w-5" data-lucide="calendar-check"></i>
<p className="font-medium">Appointment booked</p>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-white text-blue-700 border border-blue-200 px-2.5 py-1 text-xs">
<i className="h-3.5 w-3.5" data-lucide="credit-card"></i>
                    Deposit secured
                  </span>
</div>
<p className="mt-1 text-sm text-blue-800">Fri • 5:00–5:45 PM</p>
</div>
</div>
</div>
</div>

<div className="mt-4 rounded-2xl border border-gray-100 bg-white/70 backdrop-blur shadow-sm p-3">
<div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
<i className="h-4 w-4" data-lucide="inbox"></i> Unified inbox (WhatsApp, LINE, SMS, IG)
          </div>
<div className="grid grid-cols-4 gap-2">
<div className="h-8 bg-gray-50 rounded-md border border-gray-100"></div>
<div className="h-8 bg-gray-50 rounded-md border border-gray-100"></div>
<div className="h-8 bg-gray-50 rounded-md border border-gray-100"></div>
<div className="h-8 bg-gray-50 rounded-md border border-gray-100"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20" id="product">
<div className="max-w-6xl mx-auto px-6 md:px-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-8">
        The cost of missed conversations.
      </h2>
<div className="grid md:grid-cols-2 gap-6">

<div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
<h3 className="text-xl font-medium text-gray-900">Before Cura</h3>
<ul className="mt-4 space-y-3 text-gray-700">
<li className="flex items-start gap-3">
<i className="h-5 w-5 text-red-500 mt-0.5" data-lucide="x-circle"></i>
<span>40% of leads never get a response.</span>
</li>
<li className="flex items-start gap-3">
<i className="h-5 w-5 text-red-500 mt-0.5" data-lucide="x-circle"></i>
<span>80% of callers hang up at voicemail.</span>
</li>
<li className="flex items-start gap-3">
<i className="h-5 w-5 text-red-500 mt-0.5" data-lucide="x-circle"></i>
<span>Slow follow-ups = lost bookings.</span>
</li>
</ul>
<div className="mt-6 rounded-xl border border-gray-200 bg-white p-4">
<div className="text-xs text-gray-500 mb-3 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="smartphone"></i> Messy notifications
            </div>
<div className="h-10 bg-gray-50 rounded-md mb-2 border border-gray-100"></div>
<div className="h-10 bg-gray-50 rounded-md mb-2 border border-gray-100"></div>
<div className="h-10 bg-gray-50 rounded-md border border-gray-100"></div>
</div>
</div>

<div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
<h3 className="text-xl font-medium text-gray-900">After Cura</h3>
<ul className="mt-4 space-y-3 text-gray-700">
<li className="flex items-start gap-3">
<i className="h-5 w-5 text-green-600 mt-0.5" data-lucide="check-circle"></i>
<span>Instant replies across all channels.</span>
</li>
<li className="flex items-start gap-3">
<i className="h-5 w-5 text-green-600 mt-0.5" data-lucide="check-circle"></i>
<span>Bookings & deposits secured automatically.</span>
</li>
<li className="flex items-start gap-3">
<i className="h-5 w-5 text-green-600 mt-0.5" data-lucide="check-circle"></i>
<span>Every lead captured in one place.</span>
</li>
</ul>
<div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4">
<div className="text-xs text-blue-700 mb-3 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="messages-square"></i> Clean Cura thread
            </div>
<div className="h-10 bg-white rounded-md mb-2 border border-blue-100"></div>
<div className="h-10 bg-white rounded-md mb-2 border border-blue-100"></div>
<div className="h-10 bg-white rounded-md border border-blue-100"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 bg-white">
<div className="max-w-6xl mx-auto px-6 md:px-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center">
        Cura handles the busy work—so you don’t lose revenue.
      </h2>
<div className="mt-10 grid sm:grid-cols-2 gap-6">

<div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6 hover:shadow-md transition-shadow">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
<i className="h-5 w-5 text-blue-700" data-lucide="bot"></i>
</div>
<h3 className="text-lg font-medium">AI Receptionist</h3>
</div>
</div>
<p className="mt-3 text-gray-600">Answers chats & calls instantly, 24/7.</p>
</div>

<div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
<i className="h-5 w-5 text-blue-700" data-lucide="inbox"></i>
</div>
<h3 className="text-lg font-medium">Omnichannel Inbox</h3>
</div>
<p className="mt-3 text-gray-600">WhatsApp, LINE, SMS, IG, FB, webchat—all in one place.</p>
</div>

<div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
<i className="h-5 w-5 text-blue-700" data-lucide="calendar-cog"></i>
</div>
<h3 className="text-lg font-medium">Smart Booking</h3>
</div>
<p className="mt-3 text-gray-600">Appointments, deposits, reminders—done automatically.</p>
</div>

<div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
<i className="h-5 w-5 text-blue-700" data-lucide="id-card"></i>
</div>
<h3 className="text-lg font-medium">Lead Capture</h3>
</div>
<p className="mt-3 text-gray-600">Every inquiry saved with contact details and history.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20">
<div className="max-w-6xl mx-auto px-6 md:px-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center">
        From inquiry to booking—automatically.
      </h2>
<div className="mt-10 relative">
<div className="hidden sm:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-gray-100"></div>
<div className="hidden sm:block absolute left-16 right-16 top-1/2 -translate-y-1/2 h-0.5 bg-blue-200 overflow-hidden">
<div className="h-full w-0 bg-[var(--accent)] transition-all duration-[1500ms]" id="flowBar"></div>
</div>
<div className="grid sm:grid-cols-3 gap-6">
<div className="text-center">
<div className="mx-auto h-12 w-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
<i className="h-6 w-6 text-blue-700" data-lucide="message-circle"></i>
</div>
<h3 className="mt-3 font-medium">Customer messages or calls.</h3>
</div>
<div className="text-center">
<div className="mx-auto h-12 w-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
<i className="h-6 w-6 text-blue-700" data-lucide="bot"></i>
</div>
<h3 className="mt-3 font-medium">Cura responds instantly.</h3>
</div>
<div className="text-center">
<div className="mx-auto h-12 w-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
<i className="h-6 w-6 text-blue-700" data-lucide="calendar-check-2"></i>
</div>
<h3 className="mt-3 font-medium">Appointment booked + lead captured.</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 bg-gray-50" id="industries">
<div className="max-w-6xl mx-auto px-6 md:px-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center">
        Built for businesses that run on bookings.
      </h2>
<div className="mt-8">

<div className="flex flex-wrap gap-2 justify-center">
<button className="tab-btn inline-flex items-center gap-2 rounded-xl px-4 py-2.5 bg-white border border-gray-200 text-gray-800 shadow-sm" data-tab="clinics">
<i className="h-5 w-5 text-blue-700" data-lucide="stethoscope"></i> Clinics
          </button>
<button className="tab-btn inline-flex items-center gap-2 rounded-xl px-4 py-2.5 border border-gray-200 text-gray-700 hover:bg-white" data-tab="wellness">
<i className="h-5 w-5 text-blue-700" data-lucide="sparkles"></i> Wellness
          </button>
<button className="tab-btn inline-flex items-center gap-2 rounded-xl px-4 py-2.5 border border-gray-200 text-gray-700 hover:bg-white" data-tab="services">
<i className="h-5 w-5 text-blue-700" data-lucide="wrench"></i> Services
          </button>
</div>

<div className="mt-8">
<div className="tab-panel rounded-2xl border border-gray-100 bg-white p-6 md:p-8 grid md:grid-cols-2 gap-6" data-panel="clinics">
<div>
<h3 className="text-xl font-medium text-gray-900">Clinics</h3>
<p className="mt-2 text-gray-600">Handle patient intake and reduce no-shows with automated confirmations and reminders.</p>
<ul className="mt-4 space-y-2 text-gray-700 text-sm">
<li className="flex items-center gap-2">
<i className="h-4 w-4 text-green-600" data-lucide="check"></i> HIPAA-friendly workflows
                </li>
<li className="flex items-center gap-2">
<i className="h-4 w-4 text-green-600" data-lucide="check"></i> Insurance & pre-visit instructions
                </li>
</ul>
</div>
<div className="rounded-xl overflow-hidden ring-1 ring-gray-100">
<img alt="Clinic visual" className="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop" />
<div className="p-4 bg-white border-t border-gray-100">
<div className="flex items-center gap-2 text-sm text-gray-700">
<i className="h-4 w-4 text-blue-700" data-lucide="calendar"></i> Next available slot auto-suggested
                </div>
</div>
</div>
</div>
<div className="tab-panel hidden rounded-2xl border border-gray-100 bg-white p-6 md:p-8 grid md:grid-cols-2 gap-6" data-panel="wellness">
<div>
<h3 className="text-xl font-medium text-gray-900">Wellness</h3>
<p className="mt-2 text-gray-600">Book clients, take deposits, and send reminders that keep your chairs and mats filled.</p>
<ul className="mt-4 space-y-2 text-gray-700 text-sm">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-green-600" data-lucide="check"></i> No-show reduction</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-green-600" data-lucide="check"></i> Upsell packages & memberships</li>
</ul>
</div>
<div className="rounded-xl overflow-hidden ring-1 ring-gray-100">
<img alt="Wellness visual" className="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop" />
<div className="p-4 bg-white border-t border-gray-100">
<div className="flex items-center gap-2 text-sm text-gray-700">
<i className="h-4 w-4 text-blue-700" data-lucide="bell"></i> Automated reminders
                </div>
</div>
</div>
</div>
<div className="tab-panel hidden rounded-2xl border border-gray-100 bg-white p-6 md:p-8 grid md:grid-cols-2 gap-6" data-panel="services">
<div>
<h3 className="text-xl font-medium text-gray-900">Services</h3>
<p className="mt-2 text-gray-600">Capture every lead and convert more jobs with instant follow-ups and deposit links.</p>
<ul className="mt-4 space-y-2 text-gray-700 text-sm">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-green-600" data-lucide="check"></i> Quote-to-booking automations</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-green-600" data-lucide="check"></i> CRM export</li>
</ul>
</div>
<div className="rounded-xl overflow-hidden ring-1 ring-gray-100">
<img alt="Services visual" className="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop" />
<div className="p-4 bg-white border-t border-gray-100">
<div className="flex items-center gap-2 text-sm text-gray-700">
<i className="h-4 w-4 text-blue-700" data-lucide="phone-forwarded"></i> Missed calls auto-resolved
                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20">
<div className="max-w-6xl mx-auto px-6 md:px-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center">
        Why choose Cura.
      </h2>
<div className="mt-10 grid md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
<i className="h-5 w-5 text-blue-700" data-lucide="clock"></i>
</div>
<h3 className="mt-3 font-medium">Always on</h3>
<p className="text-gray-600 mt-1">No missed calls or DMs—ever.</p>
</div>
<div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
<i className="h-5 w-5 text-blue-700" data-lucide="share-2"></i>
</div>
<h3 className="mt-3 font-medium">Where customers are</h3>
<p className="text-gray-600 mt-1">Works on the channels your customers already use.</p>
</div>
<div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
<i className="h-5 w-5 text-blue-700" data-lucide="rocket"></i>
</div>
<h3 className="mt-3 font-medium">Simple setup</h3>
<p className="text-gray-600 mt-1">Be ready in days, not months.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 bg-strip" id="pricing">
<div className="max-w-6xl mx-auto px-6 md:px-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center">
        Plans for every stage.
      </h2>
<div className="mt-10 grid md:grid-cols-3 gap-6">

<div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all">
<h3 className="text-lg font-medium">Starter</h3>
<p className="mt-1 text-gray-600">For solo providers. Core AI Receptionist.</p>
<div className="mt-4 flex items-center gap-2 text-sm text-gray-700">
<i className="h-4 w-4 text-green-600" data-lucide="check"></i> Chat + basic booking
          </div>
</div>

<div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all">
<h3 className="text-lg font-medium">Growth</h3>
<p className="mt-1 text-gray-600">For growing teams. Omnichannel + booking + deposits.</p>
<div className="mt-4 flex items-center gap-2 text-sm text-gray-700">
<i className="h-4 w-4 text-green-600" data-lucide="check"></i> Multi-channel inbox
          </div>
</div>

<div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all">
<h3 className="text-lg font-medium">Scale</h3>
<p className="mt-1 text-gray-600">For higher volume. Voice + advanced automations.</p>
<div className="mt-4 flex items-center gap-2 text-sm text-gray-700">
<i className="h-4 w-4 text-green-600" data-lucide="check"></i> Voice + rules engine
          </div>
</div>
</div>
<div className="mt-8 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-gray-200 text-gray-800 hover:bg-white shadow-sm" href="#demo">
          See Pricing
          <i className="h-5 w-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-16 md:py-20">
<div className="max-w-6xl mx-auto px-6 md:px-10">
<div className="rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 p-8 md:p-12 text-center text-white">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Stop losing leads. Start booking more revenue.</h2>
<p className="mt-2 text-blue-100">Cura captures every inquiry and turns conversations into confirmed bookings.</p>
<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-xl px-6 py-3 bg-white text-blue-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all" href="#contact" id="demo">
<i className="h-5 w-5" data-lucide="calendar"></i> Book a Demo
          </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-gray-100" id="contact">
<div className="max-w-6xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center md:items-start gap-6 justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400"></div>
<span className="text-lg font-medium tracking-tight text-gray-900">Cura</span>
</div>
<div className="text-sm text-gray-600">
<p className="mb-2">Questions? Reach us at hello@cura.app</p>
<div className="flex items-center gap-4">
<a className="hover:text-gray-900" href="#">Product</a>
<a className="hover:text-gray-900" href="#">Industries</a>
<a className="hover:text-gray-900" href="#">Pricing</a>
<a className="hover:text-gray-900" href="#">Docs</a>
</div>
</div>
<p className="text-xs text-gray-500">© <span id="year"></span> Cura, Inc. All rights reserved.</p>
</div>
</footer>




    </>
  );
}
