import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    function setMenuIcon(open) {
      menuBtn.innerHTML = open
        ? '<i data-lucide="x" class="h-5 w-5"></i>'
        : '<i data-lucide="menu" class="h-5 w-5"></i>';
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }

    menuBtn?.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden', !isHidden);
      menuBtn.setAttribute('aria-label', isHidden ? 'Close menu' : 'Open menu');
      setMenuIcon(isHidden);
    });

    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (!href || href === '#') return;
        const el = document.querySelector(href);
        if (!el) return;

        e.preventDefault();
        mobileMenu?.classList.add('hidden');
        setMenuIcon(false);

        const header = document.querySelector('header');
        const headerH = header ? header.getBoundingClientRect().height : 0;
        const y = window.scrollY + el.getBoundingClientRect().top - headerH - 8;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        history.pushState(null, '', href);
      });
    });

    function wireForm(formId, noteId, subjectPrefix) {
      const form = document.getElementById(formId);
      const note = document.getElementById(noteId);
      if (!form || !note) return;

      form.addEventListener('submit', (e) =>
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="border-b border-slate-200/70 bg-white/80 backdrop-blur">
<div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
<div className="hidden items-center gap-2 text-xs text-slate-600 sm:flex">
<span className="inline-flex items-center gap-2">
<i className="h-4 w-4 text-emerald-700" data-lucide="map-pin"></i>
          Stockton-on-Tees
        </span>
<span className="text-slate-300">•</span>
<span className="inline-flex items-center gap-2">
<i className="h-4 w-4 text-emerald-700" data-lucide="clock"></i>
          Mon–Fri appointments
        </span>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 shadow-sm shadow-slate-900/5 transition hover:bg-slate-50" href="tel:01642676521">
<i className="h-4 w-4 text-emerald-600" data-lucide="phone"></i>
          01642 676521
        </a>
<a className="hidden rounded-full bg-emerald-700 px-3 py-1.5 text-xs font-medium text-white shadow-sm shadow-emerald-700/20 transition hover:bg-emerald-600 sm:inline-flex" href="#contact">
          Request an appointment
        </a>
</div>
</div>
</div>

<header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur">
<div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
<a className="group inline-flex items-center gap-3" href="#home">
<div className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-gradient-to-br from-white via-emerald-50 to-teal-50 shadow-sm shadow-slate-900/5">
<span className="text-sm font-semibold tracking-tight text-slate-900">BL</span>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold tracking-tight text-slate-900">Bishopton Lane</div>
<div className="text-xs text-slate-600">Dental Practice</div>
</div>
</a>
<nav className="hidden items-center gap-1 lg:flex">
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-slate-900" href="#home">Home</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-slate-900" href="#about">About us</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-slate-900" href="#nhs">NHS dentistry</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-slate-900" href="#private">Private dentistry</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-slate-900" href="#straighten">Straighten your teeth</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-slate-900" href="#aesthetics">Aesthetics</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-slate-900" href="#contact">Contact us</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-slate-900" href="#news">Latest news</a>
</nav>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-medium text-white shadow-sm shadow-emerald-700/25 transition hover:bg-emerald-600" href="#contact">
<i className="h-4 w-4" data-lucide="calendar"></i>
          Book
        </a>
<button aria-label="Open menu" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm shadow-slate-900/5 transition hover:bg-slate-50 lg:hidden" id="menuBtn">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="hidden border-t border-slate-200/70 bg-white" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
<div className="grid gap-1">
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-slate-900" href="#home">Home</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-slate-900" href="#about">About us</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-slate-900" href="#nhs">NHS dentistry</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-slate-900" href="#private">Private dentistry</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-slate-900" href="#straighten">Straighten your teeth</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-slate-900" href="#aesthetics">Aesthetics</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-slate-900" href="#contact">Contact us</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-slate-900" href="#news">Latest news</a>
<div className="mt-3 flex flex-col gap-2">
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-900 shadow-sm shadow-slate-900/5 transition hover:bg-slate-50" href="tel:01642676521">
<i className="h-4 w-4 text-emerald-600" data-lucide="phone"></i>
              Call 01642 676521
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-medium text-white shadow-sm shadow-emerald-700/25 transition hover:bg-emerald-600" href="#contact">
<i className="h-4 w-4" data-lucide="calendar"></i>
              Request an appointment
            </a>
</div>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden" id="home">
<div className="absolute inset-0">
<div className="absolute -top-24 left-1/2 h-96 w-[44rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-200/70 via-teal-200/60 to-lime-200/60 blur-3xl"></div>
<div className="absolute -bottom-28 left-10 h-80 w-[40rem] rounded-full bg-gradient-to-r from-emerald-200/60 via-green-200/60 to-lime-200/60 blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(60rem_30rem_at_20%_20%,rgba(16,185,129,0.12),transparent_60%),radial-gradient(55rem_30rem_at_80%_10%,rgba(20,184,166,0.10),transparent_55%),radial-gradient(50rem_26rem_at_80%_80%,rgba(132,204,22,0.10),transparent_55%)]"></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
<div className="grid items-center gap-10 lg:grid-cols-2">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm shadow-emerald-900/5 backdrop-blur">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-700 text-white shadow-sm shadow-emerald-700/20">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i>
</span>
            Your local, family, NHS practice
          </div>
<h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            WELCOME TO BISHOPTON LANE DENTAL PRACTICE
          </h1>
<p className="mt-4 max-w-xl text-lg leading-7 text-slate-600">
            Bishopton Lane Dental Practice your local, family, NHS practice.
          </p>
<div className="mt-5 max-w-2xl space-y-4 text-lg leading-7 text-slate-600">
<p>
              At Bishopton Lane dental practice we strive to offer a friendly, personalised and caring service. We always aim to see patients with dental pain or trauma quickly, offering same day emergency appointments when we can. We treat all patients with respect and dignity. We also strive to be constantly improving our services, and working environment for both staff and patients.
            </p>
<p className="text-slate-700">
              For any information talk to our friendly reception team on
              <a className="font-medium text-slate-900 hover:underline" href="tel:01642676521">01642676521</a>.
            </p>
</div>
<div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-medium text-white shadow-sm shadow-emerald-700/25 transition hover:bg-emerald-600" href="tel:01642676521">
<i className="h-4 w-4" data-lucide="phone-call"></i>
              Call us: 01642 676521
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-5 py-3 text-sm font-medium text-slate-900 shadow-sm shadow-slate-900/5 backdrop-blur transition hover:bg-white" href="#contact">
<i className="h-4 w-4 text-emerald-700" data-lucide="message-circle"></i>
              Send a message
            </a>
</div>
<div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-emerald-200/60 bg-white/80 p-4 shadow-sm shadow-slate-900/5 backdrop-blur">
<div className="flex items-center gap-2 text-sm font-medium text-slate-900">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
<i className="h-4 w-4" data-lucide="zap"></i>
</span>
                Same-day help
              </div>
<p className="mt-2 text-sm leading-6 text-slate-600">We aim to see pain or trauma quickly where possible.</p>
</div>
<div className="rounded-2xl border border-teal-200/60 bg-white/80 p-4 shadow-sm shadow-slate-900/5 backdrop-blur">
<div className="flex items-center gap-2 text-sm font-medium text-slate-900">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-100">
<i className="h-4 w-4" data-lucide="heart"></i>
</span>
                Caring team
              </div>
<p className="mt-2 text-sm leading-6 text-slate-600">Friendly, personalised care with respect and dignity.</p>
</div>
<div className="rounded-2xl border border-lime-200/60 bg-white/80 p-4 shadow-sm shadow-slate-900/5 backdrop-blur">
<div className="flex items-center gap-2 text-sm font-medium text-slate-900">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-lime-50 text-lime-800 ring-1 ring-lime-100">
<i className="h-4 w-4" data-lucide="badge-check"></i>
</span>
                Always improving
              </div>
<p className="mt-2 text-sm leading-6 text-slate-600">We keep enhancing services and our environment.</p>
</div>
</div>
</div>

<div className="relative">
<div className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 shadow-sm shadow-slate-900/5 backdrop-blur">
<div className="border-b border-slate-200/70 p-6 sm:p-8">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Inside the practice</div>
<div className="mt-1 text-sm text-slate-600">A clean, calm space designed for patient comfort.</div>
</div>
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-700 text-white shadow-sm shadow-emerald-700/20">
<i className="h-5 w-5" data-lucide="camera"></i>
</div>
</div>
</div>
<figure className="relative">
<img alt="Bishopton Lane Dental Practice treatment room" className="aspect-[16/11] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-slate-900/0 to-transparent"></div>
<figcaption className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
<div className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-white backdrop-blur">
<i className="h-4 w-4" data-lucide="shield-check"></i>
                  Modern facilities and high standards of care
                </div>
</figcaption>
</figure>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-2xl border border-emerald-200/60 bg-white/80 p-4 shadow-sm shadow-slate-900/5 backdrop-blur">
<div className="flex items-center gap-2 text-sm font-medium text-slate-900">
<i className="h-4 w-4 text-emerald-600" data-lucide="shield-check"></i>
                NHS focused
              </div>
<p className="mt-2 text-sm leading-6 text-slate-600">Local, family care with a calm approach.</p>
</div>
<div className="rounded-2xl border border-teal-200/60 bg-white/80 p-4 shadow-sm shadow-slate-900/5 backdrop-blur">
<div className="flex items-center gap-2 text-sm font-medium text-slate-900">
<i className="h-4 w-4 text-teal-700" data-lucide="smile"></i>
                Friendly reception
              </div>
<p className="mt-2 text-sm leading-6 text-slate-600">Quick info and support by phone.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200/70 bg-gradient-to-b from-white via-emerald-50/40 to-white" id="about">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
<div className="grid gap-10 lg:grid-cols-2 lg:items-start">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm shadow-emerald-900/5">
<i className="h-4 w-4 text-emerald-700" data-lucide="building-2"></i>
            About the practice
          </div>
<h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">About Bishopton Lane Dental Practice</h2>
<div className="mt-4 space-y-3 text-lg leading-7 text-slate-600">
<p><span className="font-medium text-slate-900">The practice</span></p>
<p>
              21 Bishopton Lane has a long history as a dental practice with some patients remembering many dentists over the last 60 years or so. Since Libby took over in 2010 it has seen significant refurbishments.
            </p>
<p>
              Staff have seen their facilities improved with a new office and staff room, creating places to have meetings, do essential training and occasionally relax! The front surgery has been refurbished, as well as the patient toilet and waiting room. Most recently the practice has built a downstairs surgery and brand new sterilisation facilities.
            </p>
<p>
              It has become a bustling hive of activity and we have lots of new members of the team to help us to care for all the additional patients we have been able to take on.
            </p>
</div>
<div className="mt-6 grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl border border-emerald-200/60 bg-white p-5 shadow-sm shadow-slate-900/5">
<div className="flex items-center gap-2 text-sm font-medium text-slate-900">
<i className="h-5 w-5 text-emerald-700" data-lucide="home"></i>
                Refurbished spaces
              </div>
<p className="mt-2 text-sm leading-6 text-slate-600">Waiting room, patient facilities, front surgery and more.</p>
</div>
<div className="rounded-2xl border border-teal-200/60 bg-white p-5 shadow-sm shadow-slate-900/5">
<div className="flex items-center gap-2 text-sm font-medium text-slate-900">
<i className="h-5 w-5 text-teal-700" data-lucide="sparkle"></i>
                Sterilisation facilities
              </div>
<p className="mt-2 text-sm leading-6 text-slate-600">Modern downstairs surgery and new sterilisation area.</p>
</div>
</div>
<div className="mt-6 rounded-2xl border border-amber-200/60 bg-gradient-to-r from-amber-50 to-emerald-50 p-5">
<div className="flex items-center gap-2 text-sm font-medium text-slate-900">
<i className="h-5 w-5 text-amber-700" data-lucide="users"></i>
              Patients
            </div>
<p className="mt-2 text-sm leading-7 text-slate-700">
              We have a large existing patient base, many of whom have been coming for over a decade, but we try to take on as many new patients a year as we can, though we have to consider the waiting time for appointments.
              We always try to see emergencies, whether registered with us or not.
            </p>
<p className="mt-3 text-sm leading-7 text-slate-700">
              Please note that we only make same-day emergency appointments. Ring at <span className="font-medium text-slate-900">9 a.m.</span> to see what appointments are available that day. If we are unable to see you we can provide other contact numbers.
              <span className="font-medium text-slate-900">We are not currently taking on NHS.</span>
</p>
</div>
</div>
<div className="rounded-3xl border border-emerald-200/60 bg-white shadow-sm shadow-emerald-900/5">
<div className="border-b border-slate-200/70 p-6 sm:p-8">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
<i className="h-4 w-4 text-emerald-700" data-lucide="user-heart"></i>
              Meet the Team
            </div>
<p className="mt-3 text-sm text-slate-600">A quick introduction to the people behind the practice.</p>
</div>
<div className="grid gap-0 divide-y divide-slate-200/70">
<div className="p-6 sm:p-8">
<div className="flex items-start gap-3">
<div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-emerald-200/60 bg-emerald-50">
<i className="h-5 w-5 text-emerald-700" data-lucide="user"></i>
</div>
<div>
<div className="flex flex-wrap items-center gap-x-2 gap-y-1">
<div className="text-sm font-medium text-slate-900">Libby Allen</div>
<span className="rounded-full border border-emerald-200/60 bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-800">GDC 85674</span>
<span className="rounded-full border border-teal-200/60 bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-800">Principal Dentist</span>
</div>
<div className="mt-2 text-sm leading-6 text-slate-600">
                    Libby is the principal dentist at the practice. She qualified as a Dentist with a bachelor of science in 2005, she took over Bishopton Lane in 2010, and has remained a constant at the practice ever since. Libby has a particular interest in cosmetic and restorative dentistry. Libby has two young children and loves keeping active in the gym!
                  </div>
</div>
</div>
</div>
<div className="p-6 sm:p-8">
<div className="flex items-start gap-3">
<div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-teal-200/60 bg-teal-50">
<i className="h-5 w-5 text-teal-700" data-lucide="user"></i>
</div>
<div>
<div className="flex flex-wrap items-center gap-x-2 gap-y-1">
<div className="text-sm font-medium text-slate-900">Zoe Tetlow</div>
<span className="rounded-full border border-teal-200/60 bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-800">GDC 264779</span>
<span className="rounded-full border border-emerald-200/60 bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-800">Invisalign provider</span>
</div>
<div className="mt-2 text-sm leading-6 text-slate-600">
                    Zoe is a dentist working alongside Libby at the practice. Zoe qualified from Newcastle University in 2016. Zoe is our invisalign provider. She has a baby boy who has recently turned 1!
                  </div>
</div>
</div>
</div>
<div className="p-6 sm:p-8">
<div className="flex items-start gap-3">
<div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-amber-200/60 bg-amber-50">
<i className="h-5 w-5 text-amber-700" data-lucide="user"></i>
</div>
<div>
<div className="flex flex-wrap items-center gap-x-2 gap-y-1">
<div className="text-sm font-medium text-slate-900">Francis Lattimer</div>
<span className="rounded-full border border-amber-200/60 bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-800">GDC 262216</span>
<span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs font-medium text-slate-700">Therapist</span>
</div>
<div className="mt-2 text-sm leading-6 text-slate-600">
                    Francis is one of our therapists she enjoys travelling and has recently got engaged.
                  </div>
</div>
</div>
</div>
<div className="p-6 sm:p-8">
<div className="flex items-start gap-3">
<div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-emerald-200/60 bg-emerald-50">
<i className="h-5 w-5 text-emerald-700" data-lucide="user"></i>
</div>
<div>
<div className="flex flex-wrap items-center gap-x-2 gap-y-1">
<div className="text-sm font-medium text-slate-900">Samar Mohammed Allam</div>
<span className="rounded-full border border-emerald-200/60 bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-800">GDC 316152</span>
<span className="rounded-full border border-teal-200/60 bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-800">Hygiene therapist</span>
</div>
<div className="mt-2 text-sm leading-6 text-slate-600">
                    Samar is our new hygiene therapist. Samar qualified as a dentist in Egypt in 2014. She enjoys spending time with her husband and two young daughters.
                  </div>
</div>
</div>
</div>
<div className="p-6 sm:p-8">
<div className="flex items-start gap-3">
<div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-lime-200/60 bg-lime-50">
<i className="h-5 w-5 text-lime-800" data-lucide="user"></i>
</div>
<div>
<div className="flex flex-wrap items-center gap-x-2 gap-y-1">
<div className="text-sm font-medium text-slate-900">Tracey George Kennedy</div>
<span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs font-medium text-slate-700">Practice manager</span>
</div>
<div className="mt-2 text-sm leading-6 text-slate-600">
                    Tracey is our Practice Manager she qualified as a dental nurse in 2001. Tracey has over 25 years of experience. Tracey is a keen animal lover and is often on walks with her dog Chester.
                  </div>
</div>
</div>
</div>
<div className="p-6 sm:p-8">
<div className="flex items-start gap-3">
<div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-emerald-200/60 bg-emerald-50">
<i className="h-5 w-5 text-emerald-700" data-lucide="user"></i>
</div>
<div>
<div className="flex flex-wrap items-center gap-x-2 gap-y-1">
<div className="text-sm font-medium text-slate-900">Charlotte Plumb</div>
<span className="rounded-full border border-emerald-200/60 bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-800">GDC 318134</span>
<span className="rounded-full border border-teal-200/60 bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-800">Hygienist</span>
</div>
<div className="mt-2 text-sm leading-6 text-slate-600">
                    Charlotte is our hygienist, she originally started out as a dental nurse but graduated as a hygienist in 2024. She enjoys travelling with her husband and going to the gym.
                  </div>
</div>
</div>
</div>
<div className="p-6 sm:p-8">
<div className="flex items-start gap-3">
<div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-teal-200/60 bg-teal-50">
<i className="h-5 w-5 text-teal-700" data-lucide="user"></i>
</div>
<div>
<div className="flex flex-wrap items-center gap-x-2 gap-y-1">
<div className="text-sm font-medium text-slate-900">Emma Booth</div>
<span className="rounded-full border border-teal-200/60 bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-800">GDC 257201</span>
<span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs font-medium text-slate-700">Receptionist</span>
</div>
<div className="mt-2 text-sm leading-6 text-slate-600">
                    Emma is our part time receptionist. She has a vast amount of previous dental experience, including senior roles and treatment coordinator. She has three young children who keep her busy in her spare time.
                  </div>
</div>
</div>
</div>
<div className="p-6 sm:p-8">
<div className="flex items-start gap-3">
<div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-emerald-200/60 bg-emerald-50">
<i className="h-5 w-5 text-emerald-700" data-lucide="user"></i>
</div>
<div>
<div className="flex flex-wrap items-center gap-x-2 gap-y-1">
<div className="text-sm font-medium text-slate-900">Hollie Jennings</div>
<span className="rounded-full border border-emerald-200/60 bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-800">GDC 321934</span>
<span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs font-medium text-slate-700">Senior dental nurse</span>
</div>
<div className="mt-2 text-sm leading-6 text-slate-600">
                    Hollie is our senior qualified dental nurse. She likes going to the gym and hanging out with her friends.
                  </div>
</div>
</div>
</div>
<div className="p-6 sm:p-8">
<div className="flex items-start gap-3">
<div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-lime-200/60 bg-lime-50">
<i className="h-5 w-5 text-lime-800" data-lucide="user"></i>
</div>
<div>
<div className="flex flex-wrap items-center gap-x-2 gap-y-1">
<div className="text-sm font-medium text-slate-900">Amelia Ingham</div>
<span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs font-medium text-slate-700">Apprentice dental nurse</span>
</div>
<div className="mt-2 text-sm leading-6 text-slate-600">
                    Amelia is currently working towards her level 3 apprenticeship. She enjoys going to the gym and spending time with her friends.
                  </div>
</div>
</div>
</div>
<div className="p-6 sm:p-8">
<div className="flex items-start gap-3">
<div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-amber-200/60 bg-amber-50">
<i className="h-5 w-5 text-amber-700" data-lucide="user"></i>
</div>
<div>
<div className="flex flex-wrap items-center gap-x-2 gap-y-1">
<div className="text-sm font-medium text-slate-900">Chloe Simpson</div>
<span className="rounded-full border border-amber-200/60 bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-800">GDC 332861</span>
<span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs font-medium text-slate-700">Dental nurse</span>
</div>
<div className="mt-2 text-sm leading-6 text-slate-600">
                    Chloe is our qualified dental nurse. She very enthusiastic about getting to know everything about dental nursing. She loves being with her friends. Chloe likes walks and occasionally goes to the gym. She lives for the weekends!
                  </div>
</div>
</div>
</div>
<div className="p-6 sm:p-8">
<div className="flex items-start gap-3">
<div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-emerald-200/60 bg-emerald-50">
<i className="h-5 w-5 text-emerald-700" data-lucide="user"></i>
</div>
<div>
<div className="flex flex-wrap items-center gap-x-2 gap-y-1">
<div className="text-sm font-medium text-slate-900">Maizie Tucker</div>
<span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs font-medium text-slate-700">Apprentice dental nurse</span>
</div>
<div className="mt-2 text-sm leading-6 text-slate-600">
                    Maizie is currently working towards her level 3 apprenticeship. She enjoys socializing and walking her dog.
                  </div>
</div>
</div>
</div>
<div className="p-6 sm:p-8">
<div className="flex items-start gap-3">
<div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-teal-200/60 bg-teal-50">
<i className="h-5 w-5 text-teal-700" data-lucide="user"></i>
</div>
<div>
<div className="flex flex-wrap items-center gap-x-2 gap-y-1">
<div className="text-sm font-medium text-slate-900">Karen Knights-Gibbons</div>
<span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs font-medium text-slate-700">Receptionist</span>
</div>
<div className="mt-2 text-sm leading-6 text-slate-600">
                    Karen is our part time receptionist. She is new to dentistry, however has taken to the role very quickly. She has a vast amount of experience in hairdressing and also teaching.
                  </div>
</div>
</div>
</div>
</div>
<div className="p-6 sm:p-8">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-medium text-white shadow-sm shadow-emerald-700/25 transition hover:bg-emerald-600" href="#contact">
<i className="h-4 w-4" data-lucide="calendar"></i>
              Talk to the team
            </a>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200/70 bg-gradient-to-b from-emerald-50/40 via-white to-white" id="nhs">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">NHS dentistry</h2>
<p className="mt-2 max-w-2xl text-lg leading-7 text-slate-600">
            NHS treatment focuses on maintaining oral health. If you have questions about availability, eligibility, or charges, please contact the practice directly.
          </p>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-900 shadow-sm shadow-slate-900/5 transition hover:bg-slate-50" href="tel:01642676521">
<i className="h-4 w-4 text-emerald-600" data-lucide="phone"></i>
          01642 676521
        </a>
</div>
<div className="mt-8 grid gap-4 lg:grid-cols-3">
<div className="rounded-3xl border border-emerald-200/60 bg-white p-6 shadow-sm shadow-slate-900/5">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-900">
<i className="h-5 w-5 text-emerald-700" data-lucide="file-plus-2"></i>
            What NHS care covers
          </div>
<ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300"></span>Examinations and diagnosis</li>
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300"></span>Preventative advice and planning</li>
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300"></span>Necessary restorative treatments</li>
</ul>
</div>
<div className="rounded-3xl border border-teal-200/60 bg-white p-6 shadow-sm shadow-slate-900/5">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-900">
<i className="h-5 w-5 text-teal-700" data-lucide="wallet"></i>
            Charges &amp; bands
          </div>
<p className="mt-4 text-sm leading-6 text-slate-600">
            NHS charges are typically organised into set bands. We can explain what applies to your treatment plan and provide an estimate before you proceed.
          </p>
<div className="mt-4 rounded-2xl border border-teal-200/50 bg-teal-50 p-4">
<div className="text-xs font-medium text-teal-900">Tip</div>
<div className="mt-1 text-sm leading-6 text-teal-800">Ask us what’s included and what alternatives are available privately.</div>
</div>
</div>
<div className="rounded-3xl border border-amber-200/60 bg-white p-6 shadow-sm shadow-slate-900/5">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-900">
<i className="h-5 w-5 text-amber-700" data-lucide="siren"></i>
            Emergency advice
          </div>
<p className="mt-4 text-sm leading-6 text-slate-600">
            If you have urgent pain, swelling, trauma, or a dental emergency, call the practice. If we’re closed, you can use NHS 111 for urgent guidance.
          </p>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-medium text-white shadow-sm shadow-emerald-700/25 transition hover:bg-emerald-600" href="#contact">
<i className="h-4 w-4" data-lucide="message-circle"></i>
            Send an enquiry
          </a>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200/70 bg-white" id="private">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
<div className="grid gap-10 lg:grid-cols-2 lg:items-start">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Private dentistry</h2>
<p className="mt-4 text-lg leading-7 text-slate-600">
            Private care can offer more flexibility in appointment times, treatment options, and cosmetic choices. We’ll explain recommendations, timelines, and fees clearly.
          </p>
<div className="mt-6 grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl border border-emerald-200/60 bg-white p-5 shadow-sm shadow-slate-900/5">
<div className="flex items-center gap-2 text-sm font-medium text-slate-900">
<i className="h-5 w-5 text-emerald-700" data-lucide="layers"></i>
                More options
              </div>
<p className="mt-2 text-sm leading-6 text-slate-600">Cosmetic materials and additional treatment pathways where suitable.</p>
</div>
<div className="rounded-2xl border border-teal-200/60 bg-white p-5 shadow-sm shadow-slate-900/5">
<div className="flex items-center gap-2 text-sm font-medium text-slate-900">
<i className="h-5 w-5 text-teal-700" data-lucide="calendar-search"></i>
                Flexible scheduling
              </div>
<p className="mt-2 text-sm leading-6 text-slate-600">Choose appointment times that better fit around work and family.</p>
</div>
</div>
<div className="mt-6 rounded-2xl border border-emerald-200/60 bg-gradient-to-r from-emerald-50 to-teal-50 p-5">
<div className="flex items-center gap-2 text-sm font-medium text-slate-900">
<i className="h-5 w-5 text-emerald-700" data-lucide="clipboard-check"></i>
              Typical private treatments
            </div>
<div className="mt-3 grid gap-2 text-sm leading-6 text-slate-700 sm:grid-cols-2">
<div className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>Hygiene and stain removal</div>
<div className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>White fillings</div>
<div className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>Crowns and bridges</div>
<div className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>Whitening &amp; cosmetic care</div>
</div>
</div>
</div>
<div className="rounded-3xl border border-emerald-200/60 bg-white shadow-sm shadow-emerald-900/5">
<div className="border-b border-slate-200/70 p-6 sm:p-8">
<div className="text-sm font-semibold tracking-tight text-slate-900">Private consultation pathway</div>
<p className="mt-1 text-sm text-slate-600">A clear process, designed around you.</p>
</div>
<div className="grid gap-0 divide-y divide-slate-200/70">
<div className="p-6 sm:p-8">
<div className="flex items-start gap-3">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-200/60 bg-emerald-50">
<span className="text-sm font-semibold tracking-tight text-emerald-800">1</span>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Discuss your goals</div>
<div className="mt-1 text-sm leading-6 text-slate-600">We listen, examine, and explore the outcomes you want.</div>
</div>
</div>
</div>
<div className="p-6 sm:p-8">
<div className="flex items-start gap-3">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-teal-200/60 bg-teal-50">
<span className="text-sm font-semibold tracking-tight text-teal-800">2</span>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Treatment plan</div>
<div className="mt-1 text-sm leading-6 text-slate-600">We outline options, timescales, and transparent costs.</div>
</div>
</div>
</div>
<div className="p-6 sm:p-8">
<div className="flex items-start gap-3">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-lime-200/60 bg-lime-50">
<span className="text-sm font-semibold tracking-tight text-lime-900">3</span>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Start treatment</div>
<div className="mt-1 text-sm leading-6 text-slate-600">A calm experience with clear follow-up and aftercare.</div>
</div>
</div>
</div>
</div>
<div className="p-6 sm:p-8">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-medium text-white shadow-sm shadow-emerald-700/25 transition hover:bg-emerald-600" href="#contact">
<i className="h-4 w-4" data-lucide="calendar"></i>
              Request a private consultation
            </a>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200/70 bg-gradient-to-b from-emerald-50/30 to-white" id="straighten">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
<div className="grid gap-10 lg:grid-cols-2 lg:items-start">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Straighten your teeth</h2>
<p className="mt-4 text-lg leading-7 text-slate-600">
            If you’re considering orthodontic options, we can discuss what’s suitable for your smile, your lifestyle, and your budget, then outline a clear plan.
          </p>
<div className="mt-6 grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl border border-emerald-200/60 bg-white p-5 shadow-sm shadow-slate-900/5">
<div className="flex items-center gap-2 text-sm font-medium text-slate-900">
<i className="h-5 w-5 text-emerald-700" data-lucide="eye"></i>
                Discreet options
              </div>
<p className="mt-2 text-sm leading-6 text-slate-600">Discuss subtle approaches that fit day-to-day life.</p>
</div>
<div className="rounded-2xl border border-teal-200/60 bg-white p-5 shadow-sm shadow-slate-900/5">
<div className="flex items-center gap-2 text-sm font-medium text-slate-900">
<i className="h-5 w-5 text-teal-700" data-lucide="trending-up"></i>
                Predictable plan
              </div>
<p className="mt-2 text-sm leading-6 text-slate-600">A staged treatment roadmap with reviews and aftercare.</p>
</div>
</div>
<div className="mt-6 rounded-2xl border border-emerald-200/60 bg-white p-6 shadow-sm shadow-slate-900/5">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-900">
<i className="h-5 w-5 text-emerald-700" data-lucide="help-circle"></i>
              Not sure where to start?
            </div>
<p className="mt-2 text-sm leading-6 text-slate-600">
              Send us a message with your goals (spacing, crowding, bite, or general improvement) and we’ll advise next steps.
            </p>
<a className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-medium text-white shadow-sm shadow-emerald-700/25 transition hover:bg-emerald-600" href="#contact">
<i className="h-4 w-4" data-lucide="message-circle"></i>
              Ask about straightening
            </a>
</div>
</div>
<div className="rounded-3xl border border-emerald-200/60 bg-white shadow-sm shadow-emerald-900/5">
<div className="border-b border-slate-200/70 p-6 sm:p-8">
<div className="text-sm font-semibold tracking-tight text-slate-900">A simple timeline</div>
<p className="mt-1 text-sm text-slate-600">What patients often experience.</p>
</div>
<div className="p-6 sm:p-8">
<ol className="space-y-4">
<li className="flex gap-3">
<div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-emerald-200/60 bg-emerald-50">
<i className="h-4 w-4 text-emerald-700" data-lucide="clipboard"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Consultation</div>
<div className="mt-1 text-sm leading-6 text-slate-600">Assessment, suitability, and expected outcomes discussed.</div>
</div>
</li>
<li className="flex gap-3">
<div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-teal-200/60 bg-teal-50">
<i className="h-4 w-4 text-teal-700" data-lucide="ruler"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Planning</div>
<div className="mt-1 text-sm leading-6 text-slate-600">Records and planning to tailor treatment and timeline.</div>
</div>
</li>
<li className="flex gap-3">
<div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-emerald-200/60 bg-emerald-50">
<i className="h-4 w-4 text-emerald-700" data-lucide="refresh-cw"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Progress reviews</div>
<div className="mt-1 text-sm leading-6 text-slate-600">Regular check-ins to keep everything moving smoothly.</div>
</div>
</li>
<li className="flex gap-3">
<div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-amber-200/60 bg-amber-50">
<i className="h-4 w-4 text-amber-700" data-lucide="shield-check"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Retention</div>
<div className="mt-1 text-sm leading-6 text-slate-600">Aftercare helps maintain your results long-term.</div>
</div>
</li>
</ol>
<div className="mt-6 rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-50 to-amber-50 p-5">
<div className="text-xs font-medium text-slate-900">Note</div>
<div className="mt-1 text-sm leading-6 text-slate-700">Exact suitability and timelines vary by patient. We’ll confirm at consultation.</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200/70 bg-white" id="aesthetics">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Aesthetics</h2>
<p className="mt-2 max-w-2xl text-lg leading-7 text-slate-600">
            Subtle enhancements can complement your smile. We’ll discuss your goals and recommend a safe, appropriate approach.
          </p>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-medium text-white shadow-sm shadow-emerald-700/25 transition hover:bg-emerald-600" href="#contact">
<i className="h-4 w-4" data-lucide="message-circle"></i>
          Ask a question
        </a>
</div>
<div className="mt-8 grid gap-4 lg:grid-cols-3">
<div className="rounded-3xl border border-emerald-200/60 bg-white p-6 shadow-sm shadow-slate-900/5">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-900">
<i className="h-5 w-5 text-emerald-700" data-lucide="sparkles"></i>
            Smile aesthetics
          </div>
<p className="mt-4 text-sm leading-6 text-slate-600">
            Whitening and cosmetic dentistry options to brighten and balance your smile.
          </p>
</div>
<div className="rounded-3xl border border-teal-200/60 bg-white p-6 shadow-sm shadow-slate-900/5">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-900">
<i className="h-5 w-5 text-teal-700" data-lucide="scan-face"></i>
            Facial aesthetics
          </div>
<p className="mt-4 text-sm leading-6 text-slate-600">
            Discuss subtle, natural-looking enhancements designed to support confidence.
          </p>
</div>
<div className="rounded-3xl border border-lime-200/60 bg-white p-6 shadow-sm shadow-slate-900/5">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-900">
<i className="h-5 w-5 text-lime-800" data-lucide="shield-check"></i>
            Safety first
          </div>
<p className="mt-4 text-sm leading-6 text-slate-600">
            Clear consultations, suitability checks, and aftercare guidance.
          </p>
</div>
</div>
<div className="mt-8 rounded-3xl border border-emerald-200/60 bg-gradient-to-r from-emerald-50 to-teal-50 p-6 shadow-sm shadow-emerald-900/5 sm:p-8">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Considering a combined plan?</div>
<div className="mt-1 text-sm text-slate-600">Many patients pair straightening with whitening or cosmetic finishing.</div>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-900 shadow-sm shadow-slate-900/5 transition hover:bg-slate-50" href="#straighten">
<i className="h-4 w-4 text-emerald-700" data-lucide="arrow-right"></i>
            Explore straightening
          </a>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200/70 bg-gradient-to-b from-white via-emerald-50/30 to-white" id="contact">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
<div className="grid gap-10 lg:grid-cols-2 lg:items-start">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Contact us</h2>
<p className="mt-4 text-lg leading-7 text-slate-600">
            Call us for appointments and advice, or send a message and we’ll respond as soon as we can.
          </p>
<div className="mt-6 grid gap-3 sm:grid-cols-2">
<a className="group rounded-2xl border border-emerald-200/60 bg-white p-5 shadow-sm shadow-slate-900/5 transition hover:bg-emerald-50/40" href="tel:01642676521">
<div className="flex items-center gap-2 text-sm font-medium text-slate-900">
<i className="h-5 w-5 text-emerald-600" data-lucide="phone"></i>
                Phone
              </div>
<div className="mt-2 text-lg font-semibold tracking-tight text-slate-900 group-hover:underline">01642 676521</div>
<div className="mt-1 text-sm text-slate-600">Tap to call on mobile</div>
</a>
<div className="rounded-2xl border border-teal-200/60 bg-white p-5 shadow-sm shadow-slate-900/5">
<div className="flex items-center gap-2 text-sm font-medium text-slate-900">
<i className="h-5 w-5 text-teal-700" data-lucide="map-pin"></i>
                Location
              </div>
<div className="mt-2 text-sm leading-6 text-slate-600">
                Stockton-on-Tees
                <div className="mt-1 text-sm text-slate-500">Exact address and directions can be added here.</div>
</div>
</div>
</div>
<div className="mt-6 rounded-2xl border border-amber-200/60 bg-amber-50 p-5">
<div className="flex items-center gap-2 text-sm font-medium text-slate-900">
<i className="h-5 w-5 text-amber-700" data-lucide="alert-triangle"></i>
              Out-of-hours
            </div>
<p className="mt-2 text-sm leading-6 text-amber-900/80">
              If we’re closed and you need urgent advice, use NHS 111. For life-threatening emergencies, call 999.
            </p>
</div>
<div className="mt-6 overflow-hidden rounded-3xl border border-emerald-200/60 bg-white shadow-sm shadow-emerald-900/5">
<div className="border-b border-slate-200/70 p-5">
<div className="text-sm font-semibold tracking-tight text-slate-900">Map</div>
<div className="mt-1 text-sm text-slate-600">Embed a map here for the practice location.</div>
</div>
<div className="aspect-[16/10] bg-gradient-to-br from-emerald-50 via-white to-teal-50">
<div className="flex h-full items-center justify-center">
<div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm shadow-slate-900/5">
                  Map placeholder
                </div>
</div>
</div>
</div>
</div>
<div className="rounded-3xl border border-emerald-200/60 bg-white shadow-sm shadow-emerald-900/5">
<div className="border-b border-slate-200/70 p-6 sm:p-8">
<div className="text-sm font-semibold tracking-tight text-slate-900">Send a message</div>
<p className="mt-1 text-sm text-slate-600">For appointments, include preferred days and times.</p>
</div>
<form className="grid gap-4 p-6 sm:p-8" id="contactForm">
<div className="grid gap-4 sm:grid-cols-2">
<label className="grid gap-1">
<span className="text-xs font-medium text-slate-700">First name</span>
<input className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 shadow-sm shadow-slate-900/5 outline-none placeholder:text-slate-400 focus:border-emerald-300" name="firstName" placeholder="First name" required=""/>
</label>
<label className="grid gap-1">
<span className="text-xs font-medium text-slate-700">Last name</span>
<input className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 shadow-sm shadow-slate-900/5 outline-none placeholder:text-slate-400 focus:border-emerald-300" name="lastName" placeholder="Last name" required=""/>
</label>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<label className="grid gap-1">
<span className="text-xs font-medium text-slate-700">Phone</span>
<input className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 shadow-sm shadow-slate-900/5 outline-none placeholder:text-slate-400 focus:border-emerald-300" name="phone" placeholder="e.g. 07..." required=""/>
</label>
<label className="grid gap-1">
<span className="text-xs font-medium text-slate-700">Email</span>
<input className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 shadow-sm shadow-slate-900/5 outline-none placeholder:text-slate-400 focus:border-emerald-300" name="email" placeholder="you@example.com" required="" type="email"/>
</label>
</div>
<label className="grid gap-1">
<span className="text-xs font-medium text-slate-700">Subject</span>
<input className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 shadow-sm shadow-slate-900/5 outline-none placeholder:text-slate-400 focus:border-emerald-300" name="subject" placeholder="Appointment request / NHS enquiry / Private treatment..."/>
</label>
<label className="grid gap-1">
<span className="text-xs font-medium text-slate-700">Message</span>
<textarea className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm shadow-slate-900/5 outline-none placeholder:text-slate-400 focus:border-emerald-300" name="message" placeholder="Please include any relevant details (preferred times, symptoms, treatments you’re interested in)." required="" rows="6"></textarea>
</label>
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="text-sm text-slate-600">
                For urgent issues, call <a className="font-medium text-slate-900 hover:underline" href="tel:01642676521">01642 676521</a>.
              </div>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-medium text-white shadow-sm shadow-emerald-700/25 transition hover:bg-emerald-600" type="submit">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
                Send message
              </button>
</div>
<div className="hidden rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900" id="contactFormNote"></div>
</form>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200/70 bg-gradient-to-b from-white via-emerald-50/20 to-white" id="news">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Latest news</h2>
<p className="mt-2 text-lg leading-7 text-slate-600">Practice updates, tips, and announcements.</p>
</div>
<button className="hidden items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-900 shadow-sm shadow-slate-900/5 transition hover:bg-slate-50 sm:inline-flex" id="addNewsBtn">
<i className="h-4 w-4 text-emerald-700" data-lucide="plus-square"></i>
          Add
        </button>
</div>
<div className="mt-8 grid gap-4 lg:grid-cols-3">
<article className="rounded-3xl border border-emerald-200/60 bg-white p-6 shadow-sm shadow-slate-900/5">
<div className="flex items-center justify-between gap-3">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-900">
<i className="h-4 w-4 text-emerald-700" data-lucide="bell"></i>
              Update
            </div>
<div className="text-xs text-slate-500">Posted: <span className="font-medium text-slate-700" data-date="2026-02-13">Today</span></div>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Welcome to our new website</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
            We’ve refreshed our website to make it easier to find information about NHS and private dentistry, straightening, aesthetics, and how to contact the team.
          </p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-800 hover:underline" href="#contact">
            Contact us
            <i className="h-4 w-4 text-emerald-700" data-lucide="arrow-right"></i>
</a>
</article>
<article className="rounded-3xl border border-teal-200/60 bg-white p-6 shadow-sm shadow-slate-900/5">
<div className="flex items-center justify-between gap-3">
<div className="inline-flex items-center gap-2 rounded-full border border-teal-200/60 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-900">
<i className="h-4 w-4 text-teal-700" data-lucide="tooth"></i>
              Advice
            </div>
<div className="text-xs text-slate-500">Tip</div>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Keeping gums healthy</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
            Brush twice daily, clean between teeth, and attend regular dental checks. If your gums bleed, it can be a sign you need extra support.
          </p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-teal-800 hover:underline" href="#private">
            Explore hygiene care
            <i className="h-4 w-4 text-teal-700" data-lucide="arrow-right"></i>
</a>
</article>
<article className="rounded-3xl border border-amber-200/60 bg-white p-6 shadow-sm shadow-slate-900/5">
<div className="flex items-center justify-between gap-3">
<div className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-900">
<i className="h-4 w-4 text-amber-700" data-lucide="smile"></i>
              Treatment
            </div>
<div className="text-xs text-slate-500">Info</div>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Thinking about straightening?</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
            A consultation is the best way to understand what’s possible and what timeline to expect. We’ll help you choose a suitable route.
          </p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-amber-800 hover:underline" href="#straighten">
            Straightening overview
            <i className="h-4 w-4 text-amber-700" data-lucide="arrow-right"></i>
</a>
</article>
</div>
<div className="mt-8 rounded-3xl border border-emerald-200/60 bg-gradient-to-r from-emerald-50 to-teal-50 p-6 shadow-sm shadow-emerald-900/5 sm:p-8">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Want updates?</div>
<div className="mt-1 text-sm text-slate-600">Call us for the latest on appointments and services.</div>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-medium text-white shadow-sm shadow-emerald-700/25 transition hover:bg-emerald-600" href="tel:01642676521">
<i className="h-4 w-4" data-lucide="phone"></i>
            01642 676521
          </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200/70 bg-white">
<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
<div className="grid gap-8 lg:grid-cols-3">
<div>
<div className="inline-flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-gradient-to-br from-white via-emerald-50 to-teal-50 shadow-sm shadow-slate-900/5">
<span className="text-sm font-semibold tracking-tight text-slate-900">BL</span>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold tracking-tight text-slate-900">Bishopton Lane</div>
<div className="text-xs text-slate-600">Dental Practice</div>
</div>
</div>
<p className="mt-3 text-sm leading-6 text-slate-600">
            NHS and private dentistry in Stockton-on-Tees, with appointments for routine care, restorative work, straightening, and aesthetics.
          </p>
</div>
<div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:col-span-2">
<div>
<div className="text-xs font-semibold tracking-tight text-slate-900">Sections</div>
<div className="mt-3 grid gap-2 text-sm text-slate-600">
<a className="hover:text-emerald-800 hover:underline" href="#about">About us</a>
<a className="hover:text-emerald-800 hover:underline" href="#nhs">NHS dentistry</a>
<a className="hover:text-emerald-800 hover:underline" href="#private">Private dentistry</a>
</div>
</div>
<div>
<div className="text-xs font-semibold tracking-tight text-slate-900">Services</div>
<div className="mt-3 grid gap-2 text-sm text-slate-600">
<a className="hover:text-emerald-800 hover:underline" href="#straighten">Straighten your teeth</a>
<a className="hover:text-emerald-800 hover:underline" href="#aesthetics">Aesthetics</a>
<a className="hover:text-emerald-800 hover:underline" href="#news">Latest news</a>
</div>
</div>
<div>
<div className="text-xs font-semibold tracking-tight text-slate-900">Contact</div>
<div className="mt-3 grid gap-2 text-sm text-slate-600">
<a className="inline-flex items-center gap-2 hover:text-emerald-800 hover:underline" href="tel:01642676521">
<i className="h-4 w-4 text-emerald-600" data-lucide="phone"></i>
                01642 676521
              </a>
<a className="inline-flex items-center gap-2 hover:text-emerald-800 hover:underline" href="#contact">
<i className="h-4 w-4 text-emerald-700" data-lucide="message-circle"></i>
                Message us
              </a>
</div>
</div>
</div>
</div>
<div className="mt-10 flex flex-col gap-3 border-t border-slate-200/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
<p className="text-sm text-slate-500">© <span id="year"></span> Bishopton Lane Dental Practice. All rights reserved.</p>
<p className="text-sm text-slate-500">For clinical advice in an emergency, use NHS 111 when we’re closed.</p>
</div>
</div>
</footer>

    </>
  );
}
