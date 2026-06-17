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



    // Initialize icons
    document.addEventListener('DOMContentLoaded', function () {
      if (window.lucide) lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
    });

    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    if (mobileBtn) {
      mobileBtn.addEventListener('click', () => {
        const expanded = mobileBtn.getAttribute('aria-expanded') === 'true';
        mobileBtn.setAttribute('aria-expanded', String(!expanded));
        mobileNav.classList.toggle('hidden');
      });
    }

    // Lightweight "pages" router via ?page=...
    function getPage() {
      const params = new URLSearchParams(window.location.search);
      return params.get('page') || 'home';
    }
    const validPages = new Set(['home','about','services','appointments','testimonials','journal','faq','contact']);
    function route() {
      let page = getPage();
      if (!validPages.has(page)) page = 'home';

      // Toggle sections
      document.querySelectorAll('[data-page]').forEach(el => {
        const isActive = el.getAttribute('data-page') === page;
        el.classList.toggle('hidden', !isActive);
        el.setAttribute('aria-hidden', String(!isActive));
      });

      // Update title
      const titleMap = {
        home: 'Home',
        about: 'About',
        services: 'Services',
        appointments: 'Appointments',
        testimonials: 'Testimonials',
        journal: 'Medical Journal',
        faq: 'FAQ',
        contact: 'Contact'
      };
      document.title = `${titleMap[page] || 'Home'} | Dr. Sipho Mahlangu Family Clinic | Soshanguve`;

      // Active nav state
      document.querySelectorAll('a[data-nav]').forEach(link => {
        try {
          const url = new URL(link.href, window.location.origin);
          const lp = url.searchParams.get('page') || 'home';
          const isCurr = lp === page;
          link.setAttribute('aria-current', isCurr ? 'page' : 'false');
          link.classList.toggle('text-teal-800', isCurr);
          link.classList.toggle('bg-teal-50', isCurr);
          link.classList.toggle('font-medium', isCurr);
        } catch (e) {}
      });

      // Close mobile nav after navigation
      if (mobileNav && !mobileNav.classList.contains('hidden')) {
        mobileNav.classList.add('hidden');
        mobileBtn?.setAttribute('aria-expanded', 'false');
      }

      // Focus main
      document.getElementById('main')?.focus();
    }
    route();

    // Appointment form handler (demo: stores locally and shows toast)
    const form = document.getElementById('appointmentForm');
    const statusEl = document.getElementById('formStatus');
    const toast = document.getElementById('toast');

    function showToast() {
      toast.classList.remove('hidden');
      setTimeout(() => toast.classList.add('hidden'), 4000);
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());
        data.submittedAt = new Date().toISOString();
        try {
          const existing = JSON.parse(localStorage.getItem('appointments') || '[]');
          existing.push(data);
          localStorage.setItem('appointments', JSON.stringify(existing));
          statusEl.textContent = 'Appointment request submitted successfully.';
          form.reset();
          showToast();
        } catch (err) {
          statusEl.textContent = 'Unable to save your request locally. Please call us.';
          alert('Thank you. Please call +27 12620 3456 to book, or email reception@drmahlanguclinic.co.za');
          console.error(err);
        }
      });
    }

    // Client-side navigation for ?page=... links
    document.querySelectorAll('a[href*="?page="]').forEach(link => {
      link.addEventListener('click', (e) => {
        // Allow modified clicks (new tab, etc.)
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        const url = new URL(link.href, window.location.href);
        const page = url.searchParams.get('page') || 'home';
        history.pushState({ page }, '', `?page=${page}`);
        route();
      });
    });
    window.addEventListener('popstate', route);

    // Footer year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Min date for appointment
    const preferredDate = document.getElementById('preferredDate');
    if (preferredDate) {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      preferredDate.min = `${yyyy}-${mm}-${dd}`;
    }

    // Privacy modal controls
    const privacyModal = document.getElementById('privacyModal');
    const openPrivacy = document.getElementById('openPrivacy');
    const closePrivacy = document.getElementById('closePrivacy');
    const closePrivacy2 = document.getElementById('closePrivacy2');
    const overlay = privacyModal?.querySelector('.absolute.inset-0');

    function openModal() {
      privacyModal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      // Move focus into the dialog
      setTimeout(() => closePrivacy?.focus(), 0);
    }
    function closeModal() {
      privacyModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    openPrivacy?.addEventListener('click', openModal);
    closePrivacy?.addEventListener('click', closeModal);
    closePrivacy2?.addEventListener('click', closeModal);
    overlay?.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !privacyModal.classList.contains('hidden')) {
        closeModal();
      }
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
      
<a className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-white text-slate-900 px-3 py-2 rounded-md shadow ring-2 ring-teal-600" href="#main">Skip to content</a>

<div className="w-full bg-slate-50 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2 text-sm">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-slate-700">
<i aria-hidden="true" className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>Soshanguve, City of Tshwane</span>
</div>
<div className="hidden sm:flex items-center gap-2 text-slate-700">
<i aria-hidden="true" className="w-4 h-4" data-lucide="clock" strokeWidth="1.5"></i>
<span>Mon–Fri 08:00–17:00 • Sat 09:00–13:00</span>
</div>
</div>
<div className="flex items-center gap-4">
<a className="flex items-center gap-2 text-teal-700 hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 rounded px-1" href="tel:+27126203456">
<i aria-hidden="true" className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i>
<span className="font-medium">+27 12 620 3456</span>
</a>
<a className="hidden sm:flex items-center gap-2 text-teal-700 hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 rounded px-1" href="mailto:reception@drmahlanguclinic.co.za">
<i aria-hidden="true" className="w-4 h-4" data-lucide="mail" strokeWidth="1.5"></i>
<span className="font-medium">reception@drmahlanguclinic.co.za</span>
</a>
</div>
</div>
</div>

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
<a aria-label="Dr. Sipho Mahlangu Family Clinic home" className="flex items-center gap-3" href="?page=home">
<div className="flex items-center justify-center w-9 h-9 rounded-md bg-teal-700 text-white shadow-sm">
<span className="tracking-tight font-semibold">SM</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-lg tracking-tight font-semibold text-slate-900">Dr. Sipho Mahlangu</span>
<span className="text-xs text-slate-600">Family Clinic</span>
</div>
</a>
<nav aria-label="Primary" className="hidden md:flex items-center gap-1">
<a className="px-3 py-2 rounded-md text-slate-700 hover:text-teal-800 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-600" data-nav="" href="?page=about">About</a>
<a className="px-3 py-2 rounded-md text-slate-700 hover:text-teal-800 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-600" data-nav="" href="?page=services">Services</a>
<a className="px-3 py-2 rounded-md text-slate-700 hover:text-teal-800 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-600" data-nav="" href="?page=appointments">Appointments</a>
<a className="px-3 py-2 rounded-md text-slate-700 hover:text-teal-800 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-600" data-nav="" href="?page=testimonials">Testimonials</a>
<a className="px-3 py-2 rounded-md text-slate-700 hover:text-teal-800 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-600" data-nav="" href="?page=journal">Medical Journal</a>
<a className="px-3 py-2 rounded-md text-slate-700 hover:text-teal-800 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-600" data-nav="" href="?page=faq">FAQ</a>
<a className="px-3 py-2 rounded-md text-slate-700 hover:text-teal-800 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-600" data-nav="" href="?page=contact">Contact</a>
</nav>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 bg-teal-700 text-white px-4 py-2 rounded-md shadow hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600" href="?page=appointments">
<i aria-hidden="true" className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i>
<span className="font-medium">Book</span>
</a>
<button aria-controls="mobileNav" aria-expanded="false" aria-label="Open menu" className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-600" id="mobileMenuBtn">
<i aria-hidden="true" className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-slate-200" id="mobileNav">
<nav aria-label="Mobile" className="px-4 py-3 flex flex-col gap-1">
<a className="px-3 py-2 rounded-md text-slate-800 hover:bg-teal-50" data-nav="" href="?page=about">About</a>
<a className="px-3 py-2 rounded-md text-slate-800 hover:bg-teal-50" data-nav="" href="?page=services">Services</a>
<a className="px-3 py-2 rounded-md text-slate-800 hover:bg-teal-50" data-nav="" href="?page=appointments">Appointments</a>
<a className="px-3 py-2 rounded-md text-slate-800 hover:bg-teal-50" data-nav="" href="?page=testimonials">Testimonials</a>
<a className="px-3 py-2 rounded-md text-slate-800 hover:bg-teal-50" data-nav="" href="?page=journal">Medical Journal</a>
<a className="px-3 py-2 rounded-md text-slate-800 hover:bg-teal-50" data-nav="" href="?page=faq">FAQ</a>
<a className="px-3 py-2 rounded-md text-slate-800 hover:bg-teal-50" data-nav="" href="?page=contact">Contact</a>
</nav>
</div>
</header>

<section aria-hidden="false" className="bg-slate-50 border-b border-slate-200" data-page="home">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
<div>
<h1 className="text-4xl md:text-5xl tracking-tight font-semibold text-slate-900">Compassionate Family Care in Soshanguve</h1>
<p className="mt-4 text-slate-700 text-lg">Primary care that puts community first. From preventive checkups to chronic disease management, we care for every generation with dignity and respect.</p>
<div className="mt-6 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 bg-teal-700 text-white px-5 py-3 rounded-md shadow hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600" href="?page=appointments">
<i aria-hidden="true" className="w-5 h-5" data-lucide="calendar-plus" strokeWidth="1.5"></i>
<span className="font-medium">Request an Appointment</span>
</a>
<a className="inline-flex items-center gap-2 bg-white text-teal-800 px-5 py-3 rounded-md border border-teal-200 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-600" href="?page=services">
<i aria-hidden="true" className="w-5 h-5" data-lucide="stethoscope" strokeWidth="1.5"></i>
<span className="font-medium">Our Services</span>
</a>
</div>
<div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
<div className="flex items-center gap-2">
<i aria-hidden="true" className="w-4 h-4 text-teal-700" data-lucide="shield-check" strokeWidth="1.5"></i>
<span>POPIA-aligned privacy</span>
</div>
<div className="flex items-center gap-2">
<i aria-hidden="true" className="w-4 h-4 text-teal-700" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>Accessible care</span>
</div>
</div>
</div>
<div className="relative">
<div aria-hidden="true" className="absolute -inset-2 rounded-xl bg-gradient-to-b from-teal-100 to-transparent opacity-60 pointer-events-none"></div>
<img alt="Warm, professional clinic team ready to assist" className="relative rounded-xl border border-slate-200 shadow-sm w-full object-cover h-[360px]" src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>
<main id="main" tabindex="-1">

<section aria-hidden="true" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 hidden" data-page="about" id="about">
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div>
<h2 className="text-3xl tracking-tight font-semibold text-slate-900">About Dr. Mahlangu</h2>
<p className="mt-4 text-slate-700">Raised in Soshanguve and trained in family medicine, Dr. Sipho Mahlangu has served local families for over a decade. He believes that respectful, evidence-based care—delivered in the patient’s language and context—is the strongest tool for healthier communities.</p>
<p className="mt-4 text-slate-700">Our clinic’s commitment is simple: listen carefully, act promptly, and follow through. We collaborate with local specialists, public health programmes, and social services to ensure continuity of care for every patient.</p>
<ul className="mt-6 space-y-3">
<li className="flex gap-3">
<i aria-hidden="true" className="w-5 h-5 text-teal-700" data-lucide="graduation-cap" strokeWidth="1.5"></i>
<span className="text-slate-800"><span className="font-medium">Background:</span> MBChB, Postgraduate Diploma in Family Medicine; continuous professional development in chronic disease, women’s health, and child health.</span>
</li>
<li className="flex gap-3">
<i aria-hidden="true" className="w-5 h-5 text-teal-700" data-lucide="heart-pulse" strokeWidth="1.5"></i>
<span className="text-slate-800"><span className="font-medium">Commitment:</span> Compassionate, affordable, and accessible healthcare for Soshanguve families.</span>
</li>
<li className="flex gap-3">
<i aria-hidden="true" className="w-5 h-5 text-teal-700" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-slate-800"><span className="font-medium">Languages:</span> Setswana, isiZulu, Sepedi, English.</span>
</li>
</ul>
</div>
<div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
<div className="flex items-center gap-3">
<i aria-hidden="true" className="w-5 h-5 text-teal-700" data-lucide="leaf" strokeWidth="1.5"></i>
<h3 className="text-xl tracking-tight font-semibold text-slate-900">Clinic at a glance</h3>
</div>
<dl className="mt-4 grid sm:grid-cols-2 gap-4 text-slate-800">
<div className="p-4 rounded-lg bg-white border border-slate-200">
<dt className="text-sm text-slate-600">Founded</dt>
<dd className="mt-1 font-medium">2014</dd>
</div>
<div className="p-4 rounded-lg bg-white border border-slate-200">
<dt className="text-sm text-slate-600">Patients served</dt>
<dd className="mt-1 font-medium">10,000+</dd>
</div>
<div className="p-4 rounded-lg bg-white border border-slate-200">
<dt className="text-sm text-slate-600">Affiliations</dt>
<dd className="mt-1 font-medium">Local referral network</dd>
</div>
<div className="p-4 rounded-lg bg-white border border-slate-200">
<dt className="text-sm text-slate-600">Accessibility</dt>
<dd className="mt-1 font-medium">Wheelchair-friendly</dd>
</div>
</dl>
</div>
</div>
</section>

<section aria-hidden="true" className="bg-slate-50 border-y border-slate-200 hidden" data-page="services" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
<div className="flex items-center justify-between">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900">Services</h2>
<a className="hidden sm:inline-flex items-center gap-2 text-teal-800 hover:text-teal-900 px-3 py-2 rounded-md hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-600" href="?page=appointments">
<i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i>
<span className="font-medium">Book now</span>
</a>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-teal-200">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-teal-700" data-lucide="stethoscope" strokeWidth="1.5"></i>
<h3 className="text-lg tracking-tight font-semibold text-slate-900">General &amp; Preventive Care</h3>
</div>
<p className="mt-2 text-slate-700">Checkups, screenings, vaccinations, lifestyle counselling, medical certificates.</p>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-teal-200">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-teal-700" data-lucide="activity" strokeWidth="1.5"></i>
<h3 className="text-lg tracking-tight font-semibold text-slate-900">Chronic Disease Management</h3>
</div>
<p className="mt-2 text-slate-700">Hypertension, diabetes, asthma/COPD, HIV care in coordination with local programmes.</p>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-teal-200">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-teal-700" data-lucide="baby" strokeWidth="1.5"></i>
<h3 className="text-lg tracking-tight font-semibold text-slate-900">Women’s &amp; Child Health</h3>
</div>
<p className="mt-2 text-slate-700">Antenatal visits, family planning, cervical screening; child wellness and growth monitoring.</p>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-teal-200">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-teal-700" data-lucide="syringe" strokeWidth="1.5"></i>
<h3 className="text-lg tracking-tight font-semibold text-slate-900">Immunisations</h3>
</div>
<p className="mt-2 text-slate-700">Childhood EPI schedule, tetanus boosters, seasonal flu.</p>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-teal-200">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-teal-700" data-lucide="bandage" strokeWidth="1.5"></i>
<h3 className="text-lg tracking-tight font-semibold text-slate-900">Minor Procedures</h3>
</div>
<p className="mt-2 text-slate-700">Wound care, suturing, abscess drainage, joint injections.</p>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-teal-200">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-teal-700" data-lucide="file-text" strokeWidth="1.5"></i>
<h3 className="text-lg tracking-tight font-semibold text-slate-900">Work &amp; School Medicals</h3>
</div>
<p className="mt-2 text-slate-700">Fitness assessments, reports, referrals when needed.</p>
</div>
</div>
<div className="mt-8 p-4 rounded-lg bg-white border border-teal-200 flex items-start gap-3">
<i aria-hidden="true" className="w-5 h-5 text-teal-700 mt-0.5" data-lucide="info" strokeWidth="1.5"></i>
<p className="text-sm text-slate-700">If you have chest pain, severe shortness of breath, heavy bleeding, or signs of stroke, call 112 from a mobile or seek emergency services immediately.</p>
</div>
</div>
</section>

<section aria-hidden="true" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 hidden" data-page="appointments" id="appointments">
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div>
<h2 className="text-3xl tracking-tight font-semibold text-slate-900">Request an Appointment</h2>
<p className="mt-3 text-slate-700">We aim to confirm requests within one business day. Please avoid sharing highly sensitive information through this form.</p>
<form aria-describedby="privacyNote" className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-6" id="appointmentForm">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="fullName">Full name</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600" id="fullName" name="fullName" placeholder="e.g., Naledi Mokoena" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="phone">Phone</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600" id="phone" inputmode="tel" name="phone" placeholder="+27" required="" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="email">Email (optional)</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600" id="email" name="email" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="service">Service</label>
<select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600" id="service" name="service">
<option>General consultation</option>
<option>Chronic condition review</option>
<option>Women’s health</option>
<option>Child health</option>
<option>Immunisation</option>
<option>Minor procedure</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="preferredDate">Preferred date</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600" id="preferredDate" name="preferredDate" required="" type="date"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="preferredTime">Preferred time</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600" id="preferredTime" name="preferredTime" type="time"/>
</div>
</div>
<div className="mt-4">
<label className="block text-sm font-medium text-slate-700" htmlFor="notes">Reason / notes</label>
<textarea className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600" id="notes" name="notes" placeholder="Briefly describe your health concern" rows="4"></textarea>
</div>
<div className="mt-4 flex items-start gap-3">
<input className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-700 focus:ring-teal-600" id="consent" name="consent" required="" type="checkbox"/>
<label className="text-sm text-slate-700" htmlFor="consent">I consent to the clinic processing my details for scheduling and follow-up.</label>
</div>
<p className="mt-3 text-xs text-slate-600" id="privacyNote">Your data is handled per South Africa’s Protection of Personal Information Act (POPIA). See our Privacy Notice below for details.</p>
<div className="mt-6 flex items-center gap-3">
<button className="inline-flex items-center gap-2 bg-teal-700 text-white px-5 py-2.5 rounded-md shadow hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600" type="submit">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
<span className="font-medium">Submit request</span>
</button>
<button className="inline-flex items-center gap-2 bg-white text-slate-800 px-4 py-2.5 rounded-md border border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-600" type="reset">
<i className="w-4 h-4" data-lucide="rotate-ccw" strokeWidth="1.5"></i>
<span className="font-medium">Reset</span>
</button>
</div>
<div aria-live="polite" className="sr-only" id="formStatus"></div>
</form>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-teal-700" data-lucide="info" strokeWidth="1.5"></i>
<h3 className="text-xl tracking-tight font-semibold text-slate-900">What to bring</h3>
</div>
<ul className="mt-3 space-y-2 text-slate-700">
<li className="flex gap-2">
<i className="w-4 h-4 mt-1 text-slate-500" data-lucide="id-card" strokeWidth="1.5"></i>
<span>ID/passport and any referral letters</span>
</li>
<li className="flex gap-2">
<i className="w-4 h-4 mt-1 text-slate-500" data-lucide="pill" strokeWidth="1.5"></i>
<span>Current medications or clinic card</span>
</li>
<li className="flex gap-2">
<i className="w-4 h-4 mt-1 text-slate-500" data-lucide="file-check" strokeWidth="1.5"></i>
<span>Medical aid details, if applicable</span>
</li>
</ul>
<div className="mt-6 p-4 rounded-lg bg-slate-50 border border-slate-200">
<p className="text-sm text-slate-700">We strive to keep waiting times short. Walk-ins are welcome for urgent concerns, but bookings are encouraged.</p>
</div>
</div>
</div>
</section>

<section aria-hidden="true" className="bg-slate-50 border-y border-slate-200 hidden" data-page="testimonials" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900">What patients say</h2>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<figure className="bg-white border border-slate-200 rounded-xl p-6">
<blockquote className="text-slate-800">“Dr. Mahlangu is caring and thorough. He explains everything clearly and never rushes.”</blockquote>
<figcaption className="mt-4 text-sm text-slate-600">— Mrs. Khumalo</figcaption>
</figure>
<figure className="bg-white border border-slate-200 rounded-xl p-6">
<blockquote className="text-slate-800">“Friendly staff and clean clinic. Booking was quick and I felt listened to.”</blockquote>
<figcaption className="mt-4 text-sm text-slate-600">— Mr. Dlamini</figcaption>
</figure>
<figure className="bg-white border border-slate-200 rounded-xl p-6">
<blockquote className="text-slate-800">“Great with children. My daughter isn’t afraid of checkups anymore.”</blockquote>
<figcaption className="mt-4 text-sm text-slate-600">— Ms. Mokoena</figcaption>
</figure>
</div>
</div>
</section>

<section aria-hidden="true" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 hidden" data-page="journal" id="journal">
<div className="flex items-centered gap-3">
<i className="w-6 h-6 text-teal-700" data-lucide="library" strokeWidth="1.5"></i>
<h2 className="text-3xl tracking-tight font-semibold text-slate-900">Medical Journal Citings</h2>
</div>
<p className="mt-3 text-slate-700">Selected peer‑reviewed research informing our clinical practice in South Africa. These citations are provided for patient education and context.</p>
<ol className="mt-6 space-y-4 list-decimal list-inside text-slate-800">
<li>
          Berry KM, Parker W-A, McHiza ZJ, et al. Quantifying unmet need for hypertension care in South Africa through a cascade of care analysis. BMJ Global Health. 2017;2(3):e000348. Available at: https://gh.bmj.com/content/2/3/e000348
        </li>
<li>
          South African Medical Journal (SAMJ). Hypertension in South African adults – clinical perspectives and policy implications. 2022. See SAMJ search results: https://www.samj.org.za/ (search: “hypertension 2022”)
        </li>
<li>
          The Lancet. Health in South Africa Series – Progress and challenges in the health system. 2012. Overview: https://www.thelancet.com/series/health-in-south-africa
        </li>
<li>
          South African Journal of HIV Medicine. Progress towards HIV treatment and viral suppression targets in South Africa. 2019–2021. Journal site: https://sajhivmed.org.za/
        </li>
<li>
          Lancet Infectious Diseases. Implementation and impact of Xpert MTB/RIF for tuberculosis diagnosis in South Africa primary care. 2014. Journal site: https://www.thelancet.com/journals/laninf
        </li>
<li>
          BMC Public Health. Hypertension prevalence and associated factors in South African adults (SANHANES analyses). 2018–2019. Journal site: https://bmcpublichealth.biomedcentral.com/
        </li>
</ol>
<div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700">
        Note: Links go to journal publishers or search pages for the cited work. For specific article PDFs or DOIs, please consult the journal sites or your healthcare provider.
      </div>
</section>

<section aria-hidden="true" className="bg-slate-50 border-y border-slate-200 hidden" data-page="faq" id="faq">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-teal-700" data-lucide="help-circle" strokeWidth="1.5"></i>
<h2 className="text-3xl tracking-tight font-semibold text-slate-900">Frequently Asked Questions</h2>
</div>
<div className="mt-6 grid lg:grid-cols-2 gap-6">
<details className="group bg-white border border-slate-200 rounded-xl p-4 open:bg-white">
<summary className="flex cursor-pointer items-center justify-between">
<span className="font-medium text-slate-900">Do you accept walk-ins?</span>
<i aria-hidden="true" className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<p className="mt-2 text-slate-700">Yes. Walk-ins are welcome for urgent issues, but appointments reduce waiting time.</p>
</details>
<details className="group bg-white border border-slate-200 rounded-xl p-4">
<summary className="flex cursor-pointer items-center justify-between">
<span className="font-medium text-slate-900">Which medical aids do you work with?</span>
<i aria-hidden="true" className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<p className="mt-2 text-slate-700">We provide detailed invoices for most medical aids. Please call us to confirm your plan.</p>
</details>
<details className="group bg-white border border-slate-200 rounded-xl p-4">
<summary className="flex cursor-pointer items-center justify-between">
<span className="font-medium text-slate-900">Can I get repeat scripts?</span>
<i aria-hidden="true" className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<p className="mt-2 text-slate-700">Yes. For long‑term conditions, we align with guideline-based reviews to ensure safe, effective treatment.</p>
</details>
<details className="group bg-white border border-slate-200 rounded-xl p-4">
<summary className="flex cursor-pointer items-center justify-between">
<span className="font-medium text-slate-900">How do you protect my privacy?</span>
<i aria-hidden="true" className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<p className="mt-2 text-slate-700">We follow POPIA principles and only collect data needed for care. Records are stored securely and only shared with your consent or where legally required.</p>
</details>
</div>
</div>
</section>

<section aria-hidden="true" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 hidden" data-page="contact" id="contact">
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-teal-700" data-lucide="map" strokeWidth="1.5"></i>
<h2 className="text-3xl tracking-tight font-semibold text-slate-900">Contact &amp; Find Us</h2>
</div>
<p className="mt-3 text-slate-700">Dr. Sipho Mahlangu Family Clinic, Soshanguve Block L. Close to the community hall and taxi route.</p>
<dl className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
<dt className="text-sm text-slate-600">Phone</dt>
<dd className="mt-1"><a className="text-teal-800 hover:text-teal-900" href="tel:+27126203456">+27 12 620 3456</a></dd>
</div>
<div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
<dt className="text-sm text-slate-600">Email</dt>
<dd className="mt-1"><a className="text-teal-800 hover:text-teal-900" href="mailto:reception@drmahlanguclinic.co.za">reception@drmahlanguclinic.co.za</a></dd>
</div>
<div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
<dt className="text-sm text-slate-600">Hours</dt>
<dd className="mt-1 text-slate-800">Mon–Fri 08:00–17:00 • Sat 09:00–13:00</dd>
</div>
<div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
<dt className="text-sm text-slate-600">Address</dt>
<dd className="mt-1 text-slate-800">Soshanguve Block L, City of Tshwane</dd>
</div>
</dl>
<div className="mt-6 p-4 rounded-lg bg-white border border-slate-200">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-teal-700 mt-0.5" data-lucide="bus" strokeWidth="1.5"></i>
<p className="text-sm text-slate-700">Accessible via local taxis and bus routes. Limited on‑site parking available.</p>
</div>
</div>
</div>
<div>
<div className="rounded-xl overflow-hidden border border-slate-200">
<iframe className="w-full h-80" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Soshanguve%2C%20South%20Africa&amp;z=13&amp;output=embed" title="Map: Soshanguve"></iframe>
</div>
<p className="mt-3 text-xs text-slate-600">Map provided for orientation only. Please confirm directions before travelling.</p>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-9 h-9 rounded-md bg-teal-700 text-white shadow-sm">
<span className="tracking-tight font-semibold">SM</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-lg tracking-tight font-semibold text-slate-900">Dr. Sipho Mahlangu</span>
<span className="text-xs text-slate-600">Family Clinic</span>
</div>
</div>
<p className="mt-3 text-slate-700">Trusted community care in Soshanguve. We focus on prevention, continuity, and respect for every patient.</p>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Navigation</h3>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-slate-700 hover:text-teal-800" data-nav="" href="?page=about">About</a></li>
<li><a className="text-slate-700 hover:text-teal-800" data-nav="" href="?page=services">Services</a></li>
<li><a className="text-slate-700 hover:text-teal-800" data-nav="" href="?page=appointments">Appointments</a></li>
<li><a className="text-slate-700 hover:text-teal-800" data-nav="" href="?page=journal">Medical Journal</a></li>
<li><a className="text-slate-700 hover:text-teal-800" data-nav="" href="?page=faq">FAQ</a></li>
<li><a className="text-slate-700 hover:text-teal-800" data-nav="" href="?page=contact">Contact</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Privacy &amp; Legal</h3>
<ul className="mt-3 space-y-2 text-sm">
<li><button className="text-slate-700 hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 rounded" id="openPrivacy">Privacy Notice (POPIA)</button></li>
<li><span className="text-slate-600">© <span id="year"></span> Dr. Sipho Mahlangu Family Clinic</span></li>
</ul>
</div>
</div>
</footer>

<div aria-labelledby="privacyTitle" aria-modal="true" className="hidden fixed inset-0 z-50" id="privacyModal" role="dialog">
<div className="absolute inset-0 bg-slate-900/50"></div>
<div className="relative max-w-2xl mx-auto mt-20 bg-white rounded-xl border border-slate-200 shadow-lg">
<div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
<h2 className="text-xl tracking-tight font-semibold text-slate-900" id="privacyTitle">Privacy Notice (POPIA)</h2>
<button aria-label="Close privacy notice" className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-600" id="closePrivacy">
<i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="px-5 py-4 text-slate-800 max-h-[70vh] overflow-y-auto">
<p className="mb-3">We collect personal information you provide (e.g., name, contact details, health concerns) to schedule and deliver care. We may contact you to confirm appointments and follow up on treatment.</p>
<ul className="list-disc pl-5 space-y-2">
<li>Lawful basis: patient care and legitimate interest in providing services.</li>
<li>Sharing: only with your consent or where required by law/referral.</li>
<li>Storage: protected systems with limited access; retained per clinical record requirements.</li>
<li>Your rights: access, correction, and to object to certain processing.</li>
</ul>
<p className="mt-3 text-sm text-slate-600">Contact: <a className="text-teal-800 hover:text-teal-900" href="mailto:privacy@drmahlanguclinic.co.za">privacy@drmahlanguclinic.co.za</a></p>
</div>
<div className="px-5 py-4 border-t border-slate-200 flex justify-end">
<button className="inline-flex items-center gap-2 bg-teal-700 text-white px-4 py-2 rounded-md shadow hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600" id="closePrivacy2">
<i className="w-4 h-4" data-lucide="check" strokeWidth="1.5"></i>
<span className="font-medium">Close</span>
</button>
</div>
</div>
</div>

<div className="fixed bottom-4 left-1/2 -translate-x-1/2 hidden" id="toast">
<div className="bg-white border border-teal-200 text-slate-900 rounded-lg shadow px-4 py-3 flex items-center gap-2">
<i className="w-5 h-5 text-teal-700" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-sm">Appointment request sent. We’ll contact you to confirm.</span>
</div>
</div>


    </>
  );
}
