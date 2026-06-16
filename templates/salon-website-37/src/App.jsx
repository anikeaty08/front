import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Remove translation and opacity classes to trigger transition
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          // Unobserve once animated
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with the animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    // Mobile menu
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn?.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    mobileMenu?.querySelectorAll('a')?.forEach(a => {
      a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Staff quick select -> booking
    const staffSelect = document.getElementById('staffSelect');
    document.querySelectorAll('.staffBtn').forEach(btn => {
      btn.addEventListener('click', () => {
        const staff = btn.getAttribute('data-staff');
        if (staffSelect) staffSelect.value = staff;
        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // Set min date to today
    const dateInput = document.getElementById('dateInput');
    if (dateInput) {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      dateInput.min = `${yyyy}-${mm}-${dd}`;
      dateInput.value = `${yyyy}-${mm}-${dd}`;
    }

    // Booking form confirmation (demo)
    const bookingForm = document.getElementById('bookingForm');
    const confirmBox = document.getElementById('confirmBox');
    const confirmText = document.getElementById('confirmText');
    const serviceSelect = document.getElementById('serviceSelect');
    const timeSelect = document.getElementById('timeSelect');

    bookingForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(bookingForm);

      const name = (formData.get('name') || '').toString().trim();
      const service = (formData.get('service') || '').toString().trim();
      const staff = (formData.get('staff') || '').toString().trim();
      const date = (formData.get('date') || '').toString().trim();
      const time = (formData.get('time') || '').toString().trim();

      if (!name || !service || !date || !time) return;

      const prettyDate = (() => {
        try {
          const d = new Date(date + "T00:00:00");
          return d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
        } catch {
          return date;
        }
      })();

      confirmText.textContent = `${name} • ${service} • ${staff} • ${prettyDate} at ${time}`;
      confirmBox.classList.remove('hidden');

      // Soft reset for service/time only
      if (serviceSelect) serviceSelect.selectedIndex = 0;
      if (timeSelect) timeSelect.selectedIndex = 0;

      confirmBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    // Newsletter confirmation (demo)
    const newsletterForm = document.getElementById('newsletterForm');
    const newsConfirm = document.getElementById('newsConfirm');
    newsletterForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      newsConfirm.classList.remove('hidden');
      newsletterForm.reset();
    });
  


    // Ensure Iconify icons are linear style with 1.5 stroke where supported
    document.querySelectorAll('iconify-icon').forEach(ic => {
      ic.setAttribute('stroke-width', '1.5');
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-950"></div>
<div className="absolute -top-24 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-gradient-to-tr to-transparent blur-3xl from-zinc-800/25 via-zinc-700/10"></div>
<div className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr to-transparent blur-3xl from-zinc-800/15 via-zinc-700/10"></div>
</div>

<header className="sticky top-0 z-40 border-b backdrop-blur border-white/10 bg-zinc-950/70">
<div className="mx-auto max-w-6xl px-4 sm:px-6 animate-fade-in">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3" href="#top">
<div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5">
<span className="text-sm font-medium tracking-tight font-sans">WL</span>
</div>
<div className="leading-tight">
<div className="text-sm font-medium tracking-tight font-sans">WELL</div>
<div className="text-xs font-sans text-zinc-400">Salon &amp; Barber</div>
</div>
</a>
<nav className="hidden items-center gap-6 md:flex">
<a className="text-sm transition-colors font-sans text-zinc-300 hover:text-white" href="#services">Services</a>
<a className="text-sm transition-colors font-sans text-zinc-300 hover:text-white" href="#team">Team</a>
<a className="text-sm transition-colors font-sans text-zinc-300 hover:text-white" href="#work">Work</a>
<a className="text-sm transition-colors font-sans text-zinc-300 hover:text-white" href="#pricing">Pricing</a>
<a className="text-sm transition-colors font-sans text-zinc-300 hover:text-white" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-normal transition-colors font-sans border-white/10 bg-white/5 text-white hover:bg-white/10" href="#booking">
<iconify-icon className="text-zinc-200" icon="solar:calendar-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
            Book now
          </a>
<button aria-label="Open menu" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-colors border-white/10 bg-white/5 hover:bg-white/10" id="menuBtn">
<svg className="w-[19px] h-[19px]" data-icon-replaced="true" data-icon-set="solar" data-solar="alt-arrow-down-bold-duotone" height="19" strokeWidth="2" style={{width: '19px', height: '19px', color: 'rgb(244, 244, 245)'}} viewbox="0 0 24 24" width="19" xmlns="http://www.w3.org/2000/svg"><path className="" d="m8.303 12.404l3.327 3.431c.213.22.527.22.74 0l6.43-6.63C19.201 8.79 18.958 8 18.43 8h-5.723z" fill="#f4f4f5"></path><path d="M11.293 8H5.57c-.528 0-.771.79-.37 1.205l2.406 2.481z" fill="#f4f4f5" opacity=".5"></path></svg>
</button>
</div>
</div>

<div className="hidden pb-4 md:hidden" id="mobileMenu">
<div className="flex flex-col gap-2 rounded-2xl border p-3 border-white/10 bg-white/5">
<a className="rounded-xl px-3 py-2 text-sm transition-colors font-sans text-zinc-300 hover:bg-white/10 hover:text-white" href="#services">Services</a>
<a className="rounded-xl px-3 py-2 text-sm transition-colors font-sans text-zinc-300 hover:bg-white/10 hover:text-white" href="#team">Team</a>
<a className="rounded-xl px-3 py-2 text-sm transition-colors font-sans text-zinc-300 hover:bg-white/10 hover:text-white" href="#work">Work</a>
<a className="rounded-xl px-3 py-2 text-sm transition-colors font-sans text-zinc-300 hover:bg-white/10 hover:text-white" href="#pricing">Pricing</a>
<a className="rounded-xl px-3 py-2 text-sm transition-colors font-sans text-zinc-300 hover:bg-white/10 hover:text-white" href="#contact">Contact</a>
<a className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors font-sans bg-white text-zinc-950 hover:bg-zinc-100" href="#booking">
<iconify-icon className="text-zinc-950" icon="solar:calendar-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
            Book now
          </a>
</div>
</div>
</div>
</header>

<main className="mx-auto max-w-6xl px-4 sm:px-6" id="top">
<section className="sm:py-14 pt-10 pb-10">
<div className="grid lg:grid-cols-2 gap-x-10 gap-y-10 items-center">
<div className="animate-on-scroll transition-all duration-1000 ease-out opacity-100 translate-y-0">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-sans border-white/10 bg-white/5 text-zinc-300">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            Walk-ins welcome • Appointments recommended
          </div>
<h1 className="mt-5 text-4xl sm:text-5xl tracking-tight font-oswald font-normal text-white" style={{fontFamily: 'Fraunces, ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
            Precision cuts, clean fades, and modern color—done right.
          </h1>
<p className="sm:text-base leading-relaxed text-sm text-zinc-300 font-sans max-w-xl mt-4">
            WELL is a premium salon and barber studio focused on detail, comfort, and consistency. Book in seconds, show up, and leave feeling sharp.
          </p>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition-colors hover:scale-[1.02] active:scale-[0.98] duration-200 font-sans bg-white text-zinc-950 hover:bg-zinc-100" href="#booking">
<iconify-icon className="text-zinc-950" icon="solar:calendar-linear" strokeWidth="1.5" style={{fontSize: '1.05rem'}}></iconify-icon>
              Book an appointment
            </a>
<a className="inline-flex items-center justify-center gap-2 transition-colors hover:bg-white/10 text-sm font-normal text-white font-sans bg-white/5 border-white/10 border rounded-2xl pt-3 pr-5 pb-3 pl-5" href="#services">
<iconify-icon className="text-zinc-100" icon="solar:scissors-linear" strokeWidth="1.5" style={{fontSize: '1.05rem'}}></iconify-icon>
              Explore services
            </a>
</div>
<div className="mt-7 grid grid-cols-3 gap-3 max-w-xl">
<div className="rounded-2xl border p-4 border-white/10 bg-white/5">
<div className="text-sm font-medium text-white tracking-tight font-sans">4.9</div>
<div className="mt-1 text-xs font-sans text-zinc-400">Average rating</div>
</div>
<div className="rounded-2xl border p-4 border-white/10 bg-white/5">
<div className="text-sm font-medium tracking-tight font-sans text-white">30–60</div>
<div className="mt-1 text-xs font-sans text-zinc-400">Minute services</div>
</div>
<div className="rounded-2xl border p-4 border-white/10 bg-white/5">
<div className="text-sm font-medium tracking-tight font-sans text-white">7 days</div>
<div className="mt-1 text-xs font-sans text-zinc-400">Open weekly</div>
</div>
</div>
</div>
<div className="relative animate-on-scroll transition-all duration-1000 ease-out opacity-100 translate-y-0">
<div className="pointer-events-none absolute -bottom-6 -left-6 hidden sm:block animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<div className="rounded-3xl border p-4 backdrop-blur shadow-xl border-white/10 bg-zinc-900/90">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-500/15 border border-emerald-400/20">
<iconify-icon className="text-emerald-300" icon="solar:stars-linear" strokeWidth="1.5" style={{fontSize: '1.2rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight font-sans text-white">Signature finish</div>
<div className="text-xs font-sans text-zinc-400">Hot towel • Styling • Aftercare</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-14 pt-10 pb-10" id="services">
<div className="flex items-end justify-between gap-6 animate-on-scroll transition-all duration-1000 ease-out opacity-100 translate-y-0">
<div className="">
<div className="uppercase text-xs text-zinc-400 tracking-widest font-sans">Services</div>
<h2 className="sm:text-3xl text-2xl font-normal text-white tracking-tight font-oswald mt-2">Everything you need, in one studio</h2>
<p className="mt-2 text-sm max-w-2xl font-sans text-zinc-300">Salon and barber services built around precision and repeatable results. Add-ons available at checkout.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-normal transition-colors font-sans border-white/10 bg-white/5 text-white hover:bg-white/10" href="#pricing">
          View pricing
          <iconify-icon className="text-zinc-200" icon="solar:arrow-right-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
</a>
</div>
<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<div className="group transition-colors animate-on-scroll transition-all duration-1000 ease-out hover:bg-white/10 bg-white/5 opacity-100 border-white/10 border rounded-3xl pt-5 pr-5 pb-5 pl-5 translate-y-0">
<div className="flex items-center gap-3">
<div className="grid h-11 w-11 place-items-center rounded-2xl border group-hover:scale-110 transition-transform duration-500 border-white/10 bg-zinc-950/30">
<iconify-icon className="text-zinc-100" icon="solar:scissors-linear" strokeWidth="1.5" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight font-sans text-white">Haircuts &amp; fades</div>
<div className="text-xs font-sans text-zinc-400">Taper • Skin fade • Scissor cut</div>
</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-zinc-300">
<li className="flex items-center gap-2 font-sans"><span className="h-1.5 w-1.5 rounded-full bg-zinc-500"></span>Consultation and style match</li>
<li className="flex items-center gap-2 font-sans"><span className="h-1.5 w-1.5 rounded-full bg-zinc-500"></span>Clean linework and finishing</li>
<li className="flex items-center gap-2 font-sans"><span className="h-1.5 w-1.5 rounded-full bg-zinc-500"></span>Aftercare guidance</li>
</ul>
</div>
<div className="group rounded-3xl border p-5 transition-colors animate-on-scroll transition-all duration-1000 ease-out opacity-100 translate-y-0 border-white/10 bg-white/5 hover:bg-white/10">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="grid h-11 w-11 place-items-center rounded-2xl border group-hover:scale-110 transition-transform duration-500 border-white/10 bg-zinc-950/30">
<iconify-icon className="text-zinc-100" icon="solar:mirror-linear" strokeWidth="1.5" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight font-sans text-white">Salon styling</div>
<div className="text-xs font-sans text-zinc-400">Blowouts • Wash • Finish</div>
</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-zinc-300">
<li className="flex items-center gap-2 font-sans"><span className="h-1.5 w-1.5 rounded-full bg-zinc-500"></span>Heat protection and shine</li>
<li className="flex items-center gap-2 font-sans"><span className="h-1.5 w-1.5 rounded-full bg-zinc-500"></span>Texture and volume control</li>
<li className="flex items-center gap-2 font-sans"><span className="h-1.5 w-1.5 rounded-full bg-zinc-500"></span>Event-ready styling</li>
</ul>
</div>
<div className="group rounded-3xl border p-5 transition-colors animate-on-scroll transition-all duration-1000 ease-out opacity-100 translate-y-0 border-white/10 bg-white/5 hover:bg-white/10">
<div className="flex items-center gap-3">
<div className="grid h-11 w-11 place-items-center rounded-2xl border group-hover:scale-110 transition-transform duration-500 border-white/10 bg-zinc-950/30">
<iconify-icon className="text-zinc-100" icon="solar:palette-linear" strokeWidth="1.5" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight font-sans text-white">Color &amp; treatments</div>
<div className="text-xs font-sans text-zinc-400">Gloss • Toner • Repair</div>
</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-zinc-300">
<li className="flex items-center gap-2 font-sans"><span className="h-1.5 w-1.5 rounded-full bg-zinc-500"></span>Personalized color plan</li>
<li className="flex items-center gap-2 font-sans"><span className="h-1.5 w-1.5 rounded-full bg-zinc-500"></span>Healthy hair-first approach</li>
<li className="flex items-center gap-2 font-sans"><span className="h-1.5 w-1.5 rounded-full bg-zinc-500"></span>Maintenance scheduling</li>
</ul>
</div>
</div>
</section>


<section className="py-10 sm:py-14" id="work">
<div className="flex items-end justify-between gap-6 animate-on-scroll transition-all duration-1000 ease-out opacity-100 translate-y-0">
<div>
<div className="text-xs uppercase tracking-widest font-sans text-zinc-400">Work</div>
<h2 className="mt-2 text-2xl sm:text-3xl tracking-tight font-oswald font-normal text-white">A clean look is a repeatable process</h2>
<p className="mt-2 text-sm max-w-2xl font-sans text-zinc-300">A few examples of finishes and styles from our studio.</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs font-sans text-zinc-400">
<iconify-icon className="text-zinc-300" icon="solar:camera-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
          View Instagram
        </div>
</div>
<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<div className="group relative overflow-hidden rounded-3xl border animate-on-scroll transition-all duration-1000 ease-out opacity-100 translate-y-0 border-white/10 bg-zinc-900">
<img alt="Skin fade" className="aspect-[4/3] w-full object-cover opacity-70 mix-blend-luminosity transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-zinc-950/90 via-zinc-950/0 to-zinc-950/0 opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="group-hover:translate-y-0 transition-transform duration-500 pt-5 pr-5 pb-5 pl-5 absolute right-0 bottom-0 left-0 translate-y-2">
<div className="text-sm font-medium text-white tracking-tight font-sans">Skin fade</div>
<div className="mt-1 text-xs font-sans text-zinc-300">Clean blend • Matte finish</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-3xl border animate-on-scroll transition-all duration-1000 ease-out opacity-100 translate-y-0 border-white/10 bg-zinc-900">
<img alt="Blowout" className="aspect-[4/3] w-full object-cover opacity-70 mix-blend-luminosity transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t opacity-60 group-hover:opacity-100 transition-opacity duration-500 from-zinc-950/90 via-zinc-950/0 to-zinc-950/0"></div>
<div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="text-sm font-medium tracking-tight font-sans text-white">Blowout</div>
<div className="mt-1 text-xs font-sans text-zinc-300">Volume • Smooth shine</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-3xl border animate-on-scroll transition-all duration-1000 ease-out opacity-100 translate-y-0 border-white/10 bg-zinc-900">
<img alt="Color gloss" className="aspect-[4/3] w-full object-cover opacity-70 mix-blend-luminosity transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="group-hover:opacity-100 transition-opacity duration-500 opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="group-hover:translate-y-0 transition-transform duration-500 pt-5 pr-5 pb-5 pl-5 absolute right-0 bottom-0 left-0 translate-y-2">
<div className="text-sm font-medium tracking-tight font-sans text-white">Color gloss</div>
<div className="mt-1 text-xs font-sans text-zinc-300">Tone • Repair • Finish</div>
</div>
</div>
</div>
</section>

<section className="sm:py-14 pt-10 pb-10" id="pricing">
<div className="grid gap-8 lg:grid-cols-2 lg:items-end animate-on-scroll transition-all duration-1000 ease-out opacity-100 translate-y-0">
<div className="">
<div className="uppercase text-xs text-zinc-400 tracking-widest font-sans">Pricing</div>
<h2 className="mt-2 text-2xl sm:text-3xl tracking-tight font-oswald font-normal text-white">Straightforward pricing, premium service</h2>
<p className="mt-2 text-sm max-w-2xl font-sans text-zinc-300">Final price may vary by hair length, complexity, and add-ons. You’ll see a clear total before confirming.</p>
</div>
</div>
<div className="mt-6 grid gap-4 lg:grid-cols-3">
</div>
</section>

<section className="sm:py-14 pt-10 pb-10" id="booking">
<div className="sm:p-8 animate-on-scroll transition-all duration-1000 ease-out bg-gradient-to-b from-white/10 to-white/5 opacity-100 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 translate-y-0 skew-y-30">
<div className="grid gap-8 lg:grid-cols-2 lg:items-start">
<div className="">
<h2 className="sm:text-3xl text-2xl font-normal text-white tracking-tight font-oswald mt-2">Book your appointment</h2><div className="uppercase text-xs text-zinc-400 tracking-widest font-sans">Booking</div>
<p className="mt-2 text-sm max-w-xl font-sans text-zinc-300">
              Choose a service, pick a day/time, and confirm. This demo stores your selection and shows a confirmation message.
            </p>
<div className="mt-6 space-y-3">
<div className="flex items-center gap-3 rounded-2xl border p-4 transition-colors border-white/10 bg-white/5 hover:bg-white/10">
<div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-zinc-950/30">
<iconify-icon className="text-zinc-100" icon="solar:phone-linear" strokeWidth="1.5" style={{fontSize: '1.2rem'}}></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium tracking-tight font-sans text-white">Call</div>
<div className="text-xs text-zinc-400 font-sans">+1 (555) 012-3456</div>
</div>
<a className="transition-colors hover:bg-white/10 text-xs font-normal text-white font-sans bg-white/5 border-white/10 border rounded-xl pt-2 pr-3 pb-2 pl-3" href="tel:+15550123456">Dial</a>
</div>
<div className="flex items-center gap-3 rounded-2xl border p-4 transition-colors border-white/10 bg-white/5 hover:bg-white/10">
<div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-zinc-950/30">
<iconify-icon className="text-zinc-100" icon="solar:chat-round-linear" strokeWidth="1.5" style={{fontSize: '1.2rem'}}></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium tracking-tight font-sans text-white">Message</div>
<div className="text-xs font-sans text-zinc-400">We reply within business hours</div>
</div>
<a className="rounded-xl border px-3 py-2 text-xs font-normal transition-colors font-sans border-white/10 bg-white/5 text-white hover:bg-white/10" href="#contact">Send</a>
</div>
</div>
</div>
<div className="rounded-3xl border p-5 sm:p-6 border-white/10 bg-zinc-950/30">
<form className="space-y-4" id="bookingForm">
<div className="grid gap-3 sm:grid-cols-2">
<div className="">
<label className="text-xs font-sans text-zinc-400">Full name</label>
<input className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm placeholder:text-zinc-500 outline-none focus:border-white/20 focus:bg-white/10 transition-colors border-white/10 bg-white/5 text-white" name="name" placeholder="Your name" required="" type="text"/>
</div>
<div>
<label className="text-xs font-sans text-zinc-400">Phone</label>
<input className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm placeholder:text-zinc-500 outline-none focus:border-white/20 focus:bg-white/10 transition-colors border-white/10 bg-white/5 text-white" name="phone" placeholder="(555) 000-0000" required="" type="tel"/>
</div>
</div>
<div className="grid gap-3 sm:grid-cols-2">
<div>
<label className="text-xs font-sans text-zinc-400">Service</label>
<div className="mt-2 relative">
<select className="w-full appearance-none rounded-2xl border px-4 py-3 pr-10 text-sm outline-none focus:border-white/20 focus:bg-white/10 transition-colors border-white/10 bg-white/5 text-white" id="serviceSelect" name="service" required="">
<option className="font-sans" disabled="" selected="" value="">Select a service</option>
<option className="font-sans">Classic cut</option>
<option className="font-sans">Skin fade</option>
<option className="font-sans">Beard trim</option>
<option className="font-sans">Cut + beard</option>
<option className="font-sans">Wash + blowout</option>
<option className="font-sans">Trim + finish</option>
<option className="font-sans">Color gloss / toner</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
<iconify-icon className="text-zinc-300" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
</div>
</div>
</div>
<div>
<label className="text-xs font-sans text-zinc-400">Preferred staff</label>
<div className="mt-2 relative">
<select className="w-full appearance-none rounded-2xl border px-4 py-3 pr-10 text-sm outline-none focus:border-white/20 focus:bg-white/10 transition-colors border-white/10 bg-white/5 text-white" id="staffSelect" name="staff" required="">
<option className="font-sans">First available</option>
<option className="font-sans">Noah</option>
<option className="font-sans">Mia</option>
<option className="font-sans">Ava</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
<iconify-icon className="text-zinc-300" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
</div>
</div>
</div>
</div>
<div className="grid gap-3 sm:grid-cols-2">
<div className="">
<label className="text-xs font-sans text-zinc-400">Date</label>
<input className="placeholder:text-zinc-500 outline-none focus:border-white/20 focus:bg-white/10 transition-colors text-sm text-white bg-white/5 w-full border-white/10 border rounded-2xl mt-2 pt-3 pr-4 pb-3 pl-4" id="dateInput" min="2026-03-07" name="date" required="" type="date"/>
</div>
<div className="">
<label className="text-xs font-sans text-zinc-400">Time</label>
<div className="mt-2 relative">
<select className="appearance-none outline-none focus:border-white/20 focus:bg-white/10 transition-colors text-sm text-white bg-white/5 w-full border-white/10 border rounded-2xl pt-3 pr-10 pb-3 pl-4" id="timeSelect" name="time" required="">
<option className="font-sans" disabled="" selected="" value="">Select a time</option>
<option className="font-sans">10:10 AM</option>
<option className="font-sans">11:30 AM</option>
<option className="font-sans">1:00 PM</option>
<option className="font-sans">3:20 PM</option>
<option className="font-sans">4:10 PM</option>
<option className="font-sans">6:00 PM</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
<iconify-icon className="text-zinc-300" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
</div>
</div>
</div>
</div>
<div>
<label className="text-xs font-sans text-zinc-400">Notes (optional)</label>
<textarea className="mt-2 w-full resize-none rounded-2xl border px-4 py-3 text-sm placeholder:text-zinc-500 outline-none focus:border-white/20 focus:bg-white/10 transition-colors border-white/10 bg-white/5 text-white" name="notes" placeholder="Style reference, allergies, preferences…" rows="3"></textarea>
</div>
<button className="w-full rounded-2xl px-5 py-3 text-sm font-medium transition-colors inline-flex items-center justify-center gap-2 font-sans bg-white text-zinc-950 hover:bg-zinc-100" type="submit">
<iconify-icon className="text-zinc-950" icon="solar:calendar-linear" strokeWidth="1.5" style={{fontSize: '1.05rem'}}></iconify-icon>
                Confirm booking
              </button>
<div className="hidden rounded-2xl border bg-emerald-500/10 p-4 transition-all duration-300 border-emerald-400/20" id="confirmBox">
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl border bg-emerald-500/15 border-emerald-400/20">
<iconify-icon className="text-emerald-200" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium tracking-tight font-sans text-white">Booking requested</div>
<div className="mt-1 text-xs text-zinc-200" id="confirmText"></div>
<div className="mt-2 text-xs font-sans text-zinc-300">We’ll confirm by phone shortly.</div>
</div>
</div>
</div>
<p className="text-xs font-sans text-zinc-400">
                By booking, you agree to a <span className="font-sans text-zinc-200">24-hour reschedule policy</span>.
              </p>
</form>
</div>
</div>
</div>
</section>

<section className="py-10 sm:py-14" id="contact">
<div className="grid lg:grid-cols-3 animate-on-scroll transition-all duration-1000 ease-out opacity-100 translate-y-0 gap-x-6 gap-y-6">
<div className="lg:col-span-2 sm:p-8 bg-white/5 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-end justify-between gap-6">
<div className="">
<div className="text-xs uppercase tracking-widest font-sans text-zinc-400">Contact</div>
<h2 className="sm:text-3xl text-2xl font-normal text-white tracking-tight font-oswald mt-2">Visit WELL</h2>
<p className="mt-2 text-sm max-w-2xl font-sans text-zinc-300">A calm studio with premium tools, clean stations, and a consistent experience.</p>
</div>
</div>
<div className="mt-6 grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl border p-5 border-white/10 bg-white/5">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-zinc-950/30">
<iconify-icon className="text-zinc-100" icon="solar:pin-linear" strokeWidth="1.5" style={{fontSize: '1.2rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight font-sans text-white">Address</div>
<div className="text-xs font-sans text-zinc-400">120 Market St, Suite 12</div>
</div>
</div>
<a className="inline-flex items-center gap-2 transition-colors hover:bg-white/10 text-xs font-normal text-white font-sans bg-white/5 border-white/10 border rounded-xl mt-4 pt-2 pr-3 pb-2 pl-3" href="#">
<iconify-icon className="text-zinc-200" icon="solar:map-point-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
                Open in Maps
              </a>
</div>
<div className="rounded-2xl border p-5 border-white/10 bg-white/5">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-zinc-950/30">
<iconify-icon className="text-zinc-100" icon="solar:clock-circle-linear" strokeWidth="1.5" style={{fontSize: '1.2rem'}}></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium tracking-tight font-sans text-white">Hours</div>
<div className="text-xs text-zinc-400 font-sans">Mon–Sun • 10:00 AM – 8:00 PM</div>
</div>
</div>
<div className="text-xs text-zinc-400 font-sans mt-4">Peak: Fri–Sat evenings. Book ahead.</div>
</div>
</div>
</div>
</div>
</section>

<footer className="pb-10">
<div className="border-t pt-8 animate-on-scroll transition-all duration-1000 ease-out opacity-100 translate-y-0 border-white/10">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5">
<span className="text-sm font-medium tracking-tight font-sans">WL</span>
</div>
<div className="text-xs font-sans text-zinc-400">
<span className="font-sans text-zinc-200">WELL</span> • Salon &amp; Barber
            </div>
</div>
<div className="flex flex-wrap gap-4 text-xs text-zinc-400">
<a className="transition-colors font-sans hover:text-zinc-200" href="#services">Services</a>
<a className="transition-colors font-sans hover:text-zinc-200" href="#pricing">Pricing</a>
<a className="transition-colors font-sans hover:text-zinc-200" href="#booking">Booking</a>
<a className="transition-colors font-sans hover:text-zinc-200" href="#contact">Contact</a>
</div>
</div>
<div className="mt-5 text-xs text-zinc-500 font-sans">© <span className="font-sans" id="year">2026</span> WELL Studio. All rights reserved.</div>
</div>
</footer>
</main>



    </>
  );
}
