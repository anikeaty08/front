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
      
<div className="relative overflow-hidden">

<div className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-white/40 blur-3xl"></div>
<div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-sky-200 via-purple-300 to-pink-300 opacity-70 blur-3xl"></div>
<div className="absolute bottom-[-6rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-200 via-blue-300 to-purple-300 opacity-60 blur-3xl"></div>
</div>
<div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pt-10">

<header className="mb-10 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 via-sky-400 to-fuchsia-400 shadow-lg shadow-indigo-500/40">
<span className="text-xs font-semibold tracking-tight text-white">
                DN
              </span>
</div>
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight text-slate-900">
                DocNex
              </span>
<span className="text-xs font-normal text-slate-700/70">
                Curated doctors, better outcomes.
              </span>
</div>
</div>
<nav className="hidden items-center gap-8 text-sm font-medium text-slate-900/80 sm:flex">
<a className="transition-colors hover:text-slate-900" href="#how-it-works">
              How it works
            </a>
<a className="transition-colors hover:text-slate-900" href="#doctors">
              Our doctors
            </a>
<a className="transition-colors hover:text-slate-900" href="#why-docnex">
              Why DocNex
            </a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden rounded-full border border-white/70 bg-white/30 px-3.5 py-1.5 text-xs font-medium text-slate-900 shadow-sm shadow-sky-200/60 backdrop-blur-xl transition hover:bg-white/50 sm:inline-flex">
              For Clinics
            </button>
<button className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-medium text-white shadow-lg shadow-slate-900/40 transition hover:bg-slate-800">
              Get matched
            </button>
</div>
</header>

<main className="flex flex-1 flex-col gap-12 lg:flex-row lg:items-center">
<section className="max-w-xl space-y-7">
<div className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-[11px] font-medium text-slate-900 shadow-sm shadow-sky-200/70 backdrop-blur-md">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Trusted curated doctors across Indonesia</span>
</div>
<div>
<h1 className="text-4xl sm:text-5xl lg:text-[2.9rem] font-semibold tracking-tight text-slate-900">
                Meet the right doctor,
                <br className="hidden sm:block"/>
                not just the nearest one.
              </h1>
<p className="mt-4 text-sm leading-relaxed text-slate-900/80">
                DocNex screens every doctor for experience, bedside manner, and
                clinical outcomes—so you can book with confidence and focus on
                feeling better, faster.
              </p>
</div>
<div className="flex flex-wrap items-center gap-4">
<button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-medium text-white shadow-lg shadow-slate-900/40 transition hover:bg-slate-800">
<span>Start your health journey</span>
<span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/10">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
<button className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/25 px-4 py-2 text-xs font-medium text-slate-900 shadow-sm shadow-sky-200/80 backdrop-blur-xl transition hover:bg-white/45">
<svg className="h-4 w-4 text-slate-900/80" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M10 8l6 4-6 4V8z"></path>
</svg>
<span>See how DocNex works</span>
</button>
</div>
<div className="grid grid-cols-3 gap-4 pt-4 text-[11px] text-slate-900/80 sm:max-w-md">
<div className="rounded-2xl bg-white/40 p-3 shadow-sm shadow-sky-200/70 backdrop-blur-xl">
<p className="text-xs font-semibold tracking-tight text-slate-900">
                  Curated network
                </p>
<p className="mt-1 leading-snug text-slate-900/70">
                  Only 18% of doctors pass our selection across major cities in
                  Indonesia.
                </p>
</div>
<div className="rounded-2xl bg-white/40 p-3 shadow-sm shadow-sky-200/70 backdrop-blur-xl">
<p className="text-xs font-semibold tracking-tight text-slate-900">
                  Faster appointments
                </p>
<p className="mt-1 leading-snug text-slate-900/70">
                  Priority booking slots and organized follow-ups for your
                  treatment.
                </p>
</div>
<div className="rounded-2xl bg-white/40 p-3 shadow-sm shadow-sky-200/70 backdrop-blur-xl">
<p className="text-xs font-semibold tracking-tight text-slate-900">
                  Care team assist
                </p>
<p className="mt-1 leading-snug text-slate-900/70">
                  Our care guides help you prepare, ask better questions, and
                  stay on track.
                </p>
</div>
</div>
</section>

<section className="relative mt-8 flex flex-1 justify-center lg:mt-0">
<div className="relative h-[360px] w-[260px] rounded-[2rem] bg-gradient-to-br from-indigo-600 via-violet-500 to-sky-400 p-[2px] shadow-2xl shadow-indigo-500/40">
<div className="relative flex h-full w-full flex-col justify-between rounded-[1.85rem] bg-white/70 px-5 py-4 backdrop-blur-xl">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-400 to-fuchsia-400 text-[10px] font-semibold tracking-tight text-white">
                      DN
                    </div>
<span className="text-xs font-medium tracking-tight text-slate-900">
                      DocNex Pass
                    </span>
</div>
<span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-600">
                    Active
                  </span>
</div>
<div className="space-y-3">
<p className="text-xs font-medium tracking-tight text-slate-900">
                    Your next visit
                  </p>
<div className="rounded-2xl bg-white/90 p-3 text-[11px] text-slate-900 shadow-lg shadow-sky-200/60">
<p className="font-medium tracking-tight">
                      Dr. Aulia Pratama, Sp.PD
                    </p>
<p className="mt-1 text-slate-200/80">
                      Internal Medicine • Jakarta
                    </p>
<div className="mt-3 flex items-center justify-between">
<div className="space-y-0.5">
<p className="text-[10px] text-slate-200/80">Appointment</p>
<p className="text-xs font-medium">Thu, 14:30</p>
</div>
<button className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium text-slate-50 transition hover:bg-white/20">
                        View details
                      </button>
</div>
</div>
</div>
<div className="flex items-center justify-between text-[10px] text-slate-900/80">
<div className="flex items-center gap-1.5">
<svg className="h-3.5 w-3.5 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="18" x="3" y="4"></rect>
<path d="M10 9h4"></path>
</svg>
<span>Medical records synced</span>
</div>
<span className="text-[10px] text-slate-900/60">
                    Encrypted by design
                  </span>
</div>
</div>

<div className="absolute -right-20 top-12 hidden w-48 rounded-2xl bg-white/75 p-3 shadow-xl shadow-sky-300/50 backdrop-blur-2xl sm:block">
<div className="flex items-center gap-3">
<div className="h-10 w-10 overflow-hidden rounded-xl border border-white/70 bg-slate-200">
<img alt="DocNex doctor" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="space-y-0.5">
<p className="text-xs font-medium tracking-tight text-slate-900">
                      Carefully screened
                    </p>
<p className="text-[10px] text-slate-900/70">
                      Licensing, experience, and patient-focus checks.
                    </p>
</div>
</div>
</div>
</div>
</section>
</main>
<section className="mt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" id="how-it-works">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            How it works
          </h2>
<p className="mt-2 text-sm text-slate-800">
            Tell us your symptoms and preferences, we curate the right doctor,
            and help you prepare for your visit and follow-ups.
          </p>
</section>

<section className="mt-14 space-y-4" id="doctors">
<div className="flex items-center justify-between gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Explore our curated doctors
              </h2>
<p className="mt-1 text-xs text-slate-900/75">
                Handpicked specialists across Indonesia—large, clear profiles so
                you can feel who you’re meeting.
              </p>
</div>
<div className="hidden items-center gap-2 text-[11px] text-slate-900/80 sm:flex">
<span className="rounded-full bg-white/60 px-2.5 py-1 shadow-sm shadow-sky-200/70 backdrop-blur-md">
                20 doctors
              </span>
</div>
</div>
<div className="relative">

<div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-100/95 to-transparent"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-100/95 to-transparent"></div>
<div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 pt-3 grid grid-rows-2 auto-cols-[14rem] grid-flow-col">



<article className="group relative flex w-56 shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/65 shadow-lg shadow-sky-200/90 backdrop-blur-2xl transition-transform hover:-translate-y-1">
<div className="relative h-56 w-full overflow-hidden">
<img alt="Curated DocNex doctor" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
<button className="absolute inset-x-3 bottom-3 hidden items-center justify-center rounded-full bg-slate-900/90 px-3 py-1.5 text-[11px] font-medium text-white shadow-md shadow-slate-900/60 transition group-hover:flex" onclick="window.location.href='#doctor-aulia'">
                    Learn more about this doctor
                  </button>
</div>
<div className="space-y-1.5 p-4">
<p className="text-sm font-medium tracking-tight text-slate-900">
                    Dr. Aulia Pratama
                  </p>
<p className="text-[11px] text-slate-900/70">
<span className="text-[11px] font-medium text-sky-600">
                      Internal Medicine
                    </span>
                    •
                    <span className="text-[11px] text-slate-900/70">
                      Jakarta, Indonesia
                    </span>
</p>
</div>
</article>


<article className="group relative flex w-56 shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-lg shadow-sky-200/90 backdrop-blur-xl transition-transform hover:-translate-y-1">
<div className="relative h-56 w-full overflow-hidden">
<img alt="Curated DocNex doctor" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
<button className="absolute inset-x-3 bottom-3 hidden items-center justify-center rounded-full bg-slate-900/90 px-3 py-1.5 text-[11px] font-medium text-white shadow-md shadow-slate-900/60 transition group-hover:flex" onclick="window.location.href='#doctor-bima'">
                    Learn more about this doctor
                  </button>
</div>
<div className="space-y-1.5 p-4">
<p className="text-sm font-medium tracking-tight text-slate-900">
                    Dr. Bima Santoso
                  </p>
<p className="text-[11px] text-slate-900/70">
<span className="text-[11px] font-medium text-emerald-600">
                      Cardiology
                    </span>
                    •
                    <span className="text-[11px] text-slate-900/70">
                      Bandung, Indonesia
                    </span>
</p>
</div>
</article>

<article className="group relative flex w-56 shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-lg shadow-sky-200/90 backdrop-blur-xl transition-transform hover:-translate-y-1">
<div className="relative h-56 w-full overflow-hidden">
<img alt="Curated DocNex doctor" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
<button className="absolute inset-x-3 bottom-3 hidden items-center justify-center rounded-full bg-slate-900/90 px-3 py-1.5 text-[11px] font-medium text-white shadow-md shadow-slate-900/60 transition group-hover:flex" onclick="window.location.href='#doctor-citra'">
                    Learn more about this doctor
                  </button>
</div>
<div className="space-y-1.5 p-4">
<p className="text-sm font-medium tracking-tight text-slate-900">
                    Dr. Citra Lestari
                  </p>
<p className="text-[11px] text-slate-900/70">
<span className="text-[11px] font-medium text-rose-600">
                      Pediatrics
                    </span>
                    •
                    <span className="text-[11px] text-slate-900/70">
                      Surabaya, Indonesia
                    </span>
</p>
</div>
</article>

<article className="group relative flex w-56 shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-lg shadow-sky-200/90 backdrop-blur-xl transition-transform hover:-translate-y-1">
<div className="relative h-56 w-full overflow-hidden">
<img alt="Curated DocNex doctor" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
<button className="absolute inset-x-3 bottom-3 hidden items-center justify-center rounded-full bg-slate-900/90 px-3 py-1.5 text-[11px] font-medium text-white shadow-md shadow-slate-900/60 transition group-hover:flex" onclick="window.location.href='#doctor-dini'">
                    Learn more about this doctor
                  </button>
</div>
<div className="space-y-1.5 p-4">
<p className="text-sm font-medium tracking-tight text-slate-900">
                    Dr. Dini Mahardika
                  </p>
<p className="text-[11px] text-slate-900/70">
<span className="text-[11px] font-medium text-fuchsia-600">
                      Dermatology
                    </span>
                    •
                    <span className="text-[11px] text-slate-900/70">
                      Denpasar, Indonesia
                    </span>
</p>
</div>
</article>

<article className="group relative flex w-56 shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-lg shadow-sky-200/90 backdrop-blur-xl transition-transform hover:-translate-y-1">
<div className="relative h-56 w-full overflow-hidden">
<img alt="Curated DocNex doctor" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
<button className="absolute inset-x-3 bottom-3 hidden items-center justify-center rounded-full bg-slate-900/90 px-3 py-1.5 text-[11px] font-medium text-white shadow-md shadow-slate-900/60 transition group-hover:flex" onclick="window.location.href='#doctor-eko'">
                    Learn more about this doctor
                  </button>
</div>
<div className="space-y-1.5 p-4">
<p className="text-sm font-medium tracking-tight text-slate-900">
                    Dr. Eko Rahman
                  </p>
<p className="text-[11px] text-slate-900/70">
<span className="text-[11px] font-medium text-amber-600">
                      Orthopedics
                    </span>
                    •
                    <span className="text-[11px] text-slate-900/70">
                      Yogyakarta, Indonesia
                    </span>
</p>
</div>
</article>

<article className="group relative flex w-56 shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-lg shadow-sky-200/90 backdrop-blur-xl transition-transform hover:-translate-y-1">
<div className="relative h-56 w-full overflow-hidden">
<img alt="Curated DocNex doctor" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
<button className="absolute inset-x-3 bottom-3 hidden items-center justify-center rounded-full bg-slate-900/90 px-3 py-1.5 text-[11px] font-medium text-white shadow-md shadow-slate-900/60 transition group-hover:flex" onclick="window.location.href='#doctor-farah'">
                    Learn more about this doctor
                  </button>
</div>
<div className="space-y-1.5 p-4">
<p className="text-sm font-medium tracking-tight text-slate-900">
                    Dr. Farah Nabila
                  </p>
<p className="text-[11px] text-slate-900/70">
<span className="text-[11px] font-medium text-indigo-600">
                      Obstetrics &amp; Gynecology
                    </span>
                    •
                    <span className="text-[11px] text-slate-900/70">
                      Jakarta, Indonesia
                    </span>
</p>
</div>
</article>

<article className="group relative flex w-56 shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-lg shadow-sky-200/90 backdrop-blur-xl transition-transform hover:-translate-y-1">
<div className="relative h-56 w-full overflow-hidden">
<img alt="Curated DocNex doctor" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
</div>
</article>
</div>
</div>
</section>
</div>
</div>
<section className="mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" id="doctor-aulia">
<div className="rounded-3xl bg-white/75 backdrop-blur-2xl shadow-xl shadow-sky-200/80 p-6 sm:p-8 space-y-6">
<div className="flex flex-col gap-6 lg:flex-row lg:items-start">
<div className="flex-1 space-y-4">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Dr. Aulia Pratama, Sp.PD
            </h2>
<p className="text-sm text-slate-800">
              Board-certified Internal Medicine specialist focusing on chronic
              disease management, preventive care, and patient education.
              Trusted by DocNex patients for clear explanations and thoughtful
              follow-up.
            </p>
</div>
<div className="w-full max-w-xs lg:w-64">
<img alt="Dr. Aulia Pratama" className="h-64 w-full rounded-2xl object-cover shadow-md shadow-slate-300/80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="grid gap-4 sm:grid-cols-3">
<img alt="Doctor consulting patient" className="h-32 w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<img alt="Doctor reviewing medical records" className="h-32 w-full rounded-2xl object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Doctor at hospital" className="h-32 w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div className="grid gap-6 sm:grid-cols-2">
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
              History &amp; experience
            </h3>
<p className="mt-2 text-sm text-slate-800">
              Over 10 years of experience in Internal Medicine, with a focus on
              metabolic diseases, hypertension, and long-term condition
              management. Known for taking time to understand your lifestyle and
              tailoring treatment plans that fit your daily routine.
            </p>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
              Working hours
            </h3>
<ul className="mt-2 space-y-1 text-sm text-slate-800">
<li>Mon – Wed: 09.00 – 15.00</li>
<li>Thu – Fri: 13.00 – 19.00</li>
<li>Sat: 09.00 – 12.00</li>
</ul>
</div>
</div>
<div className="pt-2">
<a className="inline-flex w-full items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-300/70 transition hover:bg-indigo-600" href="https://wa.me/6281311484194?text=I'm%20from%20DocNex%20I%20Want%20to%20know%20more%20about%20the%20service">
            Contact this doctor
          </a>
</div>
</div>
</section>

    </>
  );
}
