import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize icons
      lucide.createIcons();

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Role pill behavior
      const roleHidden = document.getElementById('roleHidden');
      const rolePills = Array.from(document.querySelectorAll('label[data-role]'));
      const refreshPillState = (activeRole) => {
        rolePills.forEach(lab => {
          const checked = lab.getAttribute('data-role') === activeRole;
          lab.setAttribute('data-checked', checked ? 'true' : 'false');
          // Update inner radio
          const input = lab.querySelector('input[type="radio"]');
          if (input) input.checked = checked;
        });
      };
      rolePills.forEach(lab => {
        lab.addEventListener('click', () => {
          const role = lab.getAttribute('data-role');
          roleHidden.value = role;
          refreshPillState(role);
        });
      });
      refreshPillState(roleHidden.value);

      // Contact form -> mailto
      const form = document.getElementById('contactForm');
      const note = document.getElementById('formNote');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(form);
        // Honeypot
        if ((fd.get('company') || '').trim() !== '') return;

        const name = (fd.get('name') || '').trim();
        const email = (fd.get('email') || '').trim();
        const role = (fd.get('role') || 'General').trim();
        const location = (fd.get('location') || '').trim();
        const timeline = (fd.get('timeline') || '').trim();
        const message = (fd.get('message') || '').trim();

        if (!name || !email || !message) {
          note.textContent = 'Please fill in your name, email, and message.';
          note.classList.remove('hidden');
          return;
        }

        const to = 'aliciacoughlin01@cardsmart.io';
        const subject = encodeURIComponent(`[WCB] Inquiry from ${name} (${role})`);
        const bodyLines = [
          `Name: ${name}`,
          `Email: ${email}`,
          `Role: ${role}`,
          location ? `Location: ${location}` : null,
          timeline ? `Timeline: ${timeline}` : null,
          '',
          'Message:',
          message,
          '',
          'Submitted via: https://windycitybillets.com'
        ].filter(Boolean);
        const body = encodeURIComponent(bodyLines.join('\n'));
        const mailto = `mailto:${to}?subject=${subject}&body=${body}`;

        note.textContent = 'Opening your email app… If it does not open, email us directly.';
        note.classList.remove('hidden');

        // Open mail client
        window.location.href = mailto;
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative isolate overflow-hidden">
<div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
<div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-cyan-500/30 blur-3xl"></div>
<div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl"></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="group inline-flex items-center gap-3" href="#home">
<img alt="Windy City Billets logo" className="h-9 w-auto hidden sm:block" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 ring-1 ring-white/20 sm:hidden">
<i className="h-4 w-4 text-white" data-lucide="shield"></i>
</span>
<span className="text-base font-semibold tracking-tight text-white">Windy City Billets</span>
</div>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
<a className="hover:text-white transition" href="#about">About</a>
<a className="hover:text-white transition" href="#audiences">Who We Help</a>
<a className="hover:text-white transition" href="#services">Services</a>
<a className="hover:text-white transition" href="#process">Process</a>
<a className="hover:text-white transition" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-slate-200 hover:text-white hover:border-white/25 transition" href="https://windycitybillets.com" rel="noreferrer" target="_blank">
<i className="h-4 w-4" data-lucide="globe"></i>
                Visit Site
              </a>
<a className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-white/20 hover:opacity-95 transition" href="#contact">
<i className="h-4 w-4" data-lucide="mail"></i>
                Contact
              </a>
</div>
</div>
</div>
</header>

<section className="relative" id="home">
<div className="absolute inset-0 -z-10">
<img alt="City of Chicago background" className="h-full w-full object-cover opacity-30" src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&amp;fit=crop&amp;w=1974&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
<div className="max-w-3xl">
<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500/10">

<svg className="h-3 w-3 fill-red-500" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,5 42,40 10,15 35,47 0,50 35,53 10,85 42,60 50,95 58,60 90,85 65,53 100,50 65,47 90,15 58,40"></polygon></svg>
</span>
              Serving Players, Parents, Hosts, Teams, and Agents
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Guiding hockey families through the billet journey
            </h1>
<p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-300">
              Windy City Billets helps players (14–20), parents, billet hosts, and teams navigate the billet process with clarity, care, and trusted connections—domestically and internationally.
            </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100 transition" href="#contact">
<i className="h-4 w-4" data-lucide="send"></i>
                Contact Alicia
              </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition" href="#about">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
                Learn more
              </a>
</div>
<div className="mt-10 flex items-center gap-6 text-xs text-slate-400">
<div className="inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="map-pin"></i>
                Chicago-based, serving North America &amp; abroad
              </div>
<div className="hidden sm:inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="shield-check"></i>
                Player-first, host-supported
              </div>
</div>
</div>
</div>
</section>
</div>

<section className="relative border-t border-white/10" id="about">
<div className="absolute inset-0 -z-10">
<img alt="Chicago skyline" className="h-full w-full object-cover opacity-10 mix-blend-lighten" src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&amp;fit=crop&amp;w=1974&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="grid lg:grid-cols-12 gap-10 items-start">
<div className="lg:col-span-7">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">What we do</h2>
<p className="mt-4 text-base sm:text-lg text-slate-300">
              We connect hockey players with trusted billet families, support parents with clear expectations, and partner with teams and agents to ensure safe, supportive, and development-focused placements.
            </p>
<div className="mt-8 grid sm:grid-cols-3 gap-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 text-cyan-400">
<i className="h-5 w-5" data-lucide="compass"></i>
<span className="text-sm font-medium">Guidance</span>
</div>
<p className="mt-2 text-sm text-slate-300">Clear steps and expectations for every stage of the billet process.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 text-cyan-400">
<i className="h-5 w-5" data-lucide="home"></i>
<span className="text-sm font-medium">Matching</span>
</div>
<p className="mt-2 text-sm text-slate-300">Thoughtful host-family matching focused on fit, safety, and development.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 text-cyan-400">
<i className="h-5 w-5" data-lucide="globe"></i>
<span className="text-sm font-medium">International</span>
</div>
<p className="mt-2 text-sm text-slate-300">Support for domestic and international families: US, Canada, Russia, Slovakia, and more.</p>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 ring-1 ring-white/20">
<i className="h-5 w-5 text-white" data-lucide="mail"></i>
</span>
<div>
<div className="text-sm font-medium text-white">Primary contact</div>
<a className="text-sm text-slate-300 hover:text-white transition" href="mailto:aliciacoughlin01@cardsmart.io">aliciacoughlin01@cardsmart.io</a>
</div>
</div>
<div className="mt-5 space-y-3 text-sm text-slate-300">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-cyan-400" data-lucide="check-circle-2"></i>
                  Player-first approach
                </div>
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-cyan-400" data-lucide="check-circle-2"></i>
                  Hosts supported with clear guidelines
                </div>
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-cyan-400" data-lucide="check-circle-2"></i>
                  Teams and agents aligned
                </div>
</div>
<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 transition" href="#contact">
<i className="h-4 w-4" data-lucide="message-circle"></i>
                  Start a conversation
                </a>
</div>
</div>
</div>
</div>

<div className="mt-14 border-t border-white/10 pt-8">
<p className="text-xs uppercase tracking-wider text-slate-400">Connected across the hockey community</p>
<div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-300">
<span className="inline-flex items-center gap-2"><i className="h-4 w-4 text-slate-400" data-lucide="link"></i>Chicago Jets</span>
<span className="inline-flex items-center gap-2"><i className="h-4 w-4 text-slate-400" data-lucide="link"></i>Chicago Steel</span>
<span className="inline-flex items-center gap-2"><i className="h-4 w-4 text-slate-400" data-lucide="link"></i>Chicagoland Private Equity Hockey Charities</span>
<span className="inline-flex items-center gap-2"><i className="h-4 w-4 text-slate-400" data-lucide="link"></i>Suburban Hockey Foundation</span>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="audiences">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Who we help</h2>
<p className="mt-3 text-slate-300 max-w-2xl">From first-time billets to experienced programs, we bring a calm, organized process that meets each group where they are.</p>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
<i className="h-5 w-5 text-cyan-400" data-lucide="skate"></i>
</span>
<div className="text-lg font-semibold tracking-tight text-white">Players (14–20)</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex gap-2"><i className="h-4 w-4 text-cyan-400 mt-0.5" data-lucide="chevron-right"></i> Placement guidance and expectations</li>
<li className="flex gap-2"><i className="h-4 w-4 text-cyan-400 mt-0.5" data-lucide="chevron-right"></i> Fit-focused host matching</li>
<li className="flex gap-2"><i className="h-4 w-4 text-cyan-400 mt-0.5" data-lucide="chevron-right"></i> Ongoing support</li>
</ul>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
<i className="h-5 w-5 text-cyan-400" data-lucide="users"></i>
</span>
<div className="text-lg font-semibold tracking-tight text-white">Parents</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex gap-2"><i className="h-4 w-4 text-cyan-400 mt-0.5" data-lucide="chevron-right"></i> Transparent communication</li>
<li className="flex gap-2"><i className="h-4 w-4 text-cyan-400 mt-0.5" data-lucide="chevron-right"></i> Safety, expectations, and policies</li>
<li className="flex gap-2"><i className="h-4 w-4 text-cyan-400 mt-0.5" data-lucide="chevron-right"></i> Transition and check-in support</li>
</ul>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
<i className="h-5 w-5 text-cyan-400" data-lucide="home"></i>
</span>
<div className="text-lg font-semibold tracking-tight text-white">Billet Hosts</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex gap-2"><i className="h-4 w-4 text-cyan-400 mt-0.5" data-lucide="chevron-right"></i> Readiness and onboarding</li>
<li className="flex gap-2"><i className="h-4 w-4 text-cyan-400 mt-0.5" data-lucide="chevron-right"></i> Clear guidelines and resources</li>
<li className="flex gap-2"><i className="h-4 w-4 text-cyan-400 mt-0.5" data-lucide="chevron-right"></i> Continuous support</li>
</ul>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
<i className="h-5 w-5 text-cyan-400" data-lucide="building-2"></i>
</span>
<div className="text-lg font-semibold tracking-tight text-white">Teams</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex gap-2"><i className="h-4 w-4 text-cyan-400 mt-0.5" data-lucide="chevron-right"></i> Program alignment and guidelines</li>
<li className="flex gap-2"><i className="h-4 w-4 text-cyan-400 mt-0.5" data-lucide="chevron-right"></i> Intake and matching support</li>
<li className="flex gap-2"><i className="h-4 w-4 text-cyan-400 mt-0.5" data-lucide="chevron-right"></i> Placement success tracking</li>
</ul>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
<i className="h-5 w-5 text-cyan-400" data-lucide="globe-2"></i>
</span>
<div className="text-lg font-semibold tracking-tight text-white">Agents</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex gap-2"><i className="h-4 w-4 text-cyan-400 mt-0.5" data-lucide="chevron-right"></i> Domestic and international placement</li>
<li className="flex gap-2"><i className="h-4 w-4 text-cyan-400 mt-0.5" data-lucide="chevron-right"></i> Cultural onboarding and support</li>
<li className="flex gap-2"><i className="h-4 w-4 text-cyan-400 mt-0.5" data-lucide="chevron-right"></i> Clear reporting and updates</li>
</ul>
</div>
<div className="rounded-2xl border border-white/10 bg-white/0 p-6 relative overflow-hidden">
<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-white/0"></div>
<div className="relative">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
<i className="h-5 w-5 text-cyan-400" data-lucide="calendar"></i>
</span>
<div className="text-lg font-semibold tracking-tight text-white">Ready to connect?</div>
</div>
<p className="mt-3 text-sm text-slate-300">One simple contact form. We’ll follow up directly to coordinate next steps.</p>
<a className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 transition" href="#contact">
<i className="h-4 w-4" data-lucide="mail"></i>
                Contact form
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">How we support you</h2>
<p className="mt-3 text-slate-300 max-w-2xl">We combine structured process with real-world experience. Every family and program is unique—our approach is personal, pragmatic, and steady.</p>
<div className="mt-8 grid gap-4">
<div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
<i className="h-5 w-5 text-cyan-400" data-lucide="clipboard-check"></i>
</span>
<div>
<div className="font-medium text-white">Placement readiness</div>
<p className="text-sm text-slate-300">Intake, expectations, and checklist to prepare players, parents, and hosts.</p>
</div>
</div>
<div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
<i className="h-5 w-5 text-cyan-400" data-lucide="handshake"></i>
</span>
<div>
<div className="font-medium text-white">Thoughtful matching</div>
<p className="text-sm text-slate-300">Balanced placements that prioritize fit, safety, school, training, and commute.</p>
</div>
</div>
<div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
<i className="h-5 w-5 text-cyan-400" data-lucide="life-buoy"></i>
</span>
<div>
<div className="font-medium text-white">Ongoing support</div>
<p className="text-sm text-slate-300">Check-ins and issue resolution with clear, respectful communication.</p>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-6" id="process">
<h3 className="text-2xl font-semibold tracking-tight text-white">Our process</h3>
<ol className="mt-5 space-y-5">
<li className="flex gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 font-medium">1</div>
<div>
<div className="font-medium text-white">Discover</div>
<p className="text-sm text-slate-300">Brief intake to understand goals, timeline, and needs.</p>
</div>
</li>
<li className="flex gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 font-medium">2</div>
<div>
<div className="font-medium text-white">Match</div>
<p className="text-sm text-slate-300">Shortlist and introductions with best-fit host families or programs.</p>
</div>
</li>
<li className="flex gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 font-medium">3</div>
<div>
<div className="font-medium text-white">Prepare</div>
<p className="text-sm text-slate-300">Expectations, house rules, logistics, and school/training coordination.</p>
</div>
</li>
<li className="flex gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 font-medium">4</div>
<div>
<div className="font-medium text-white">Support</div>
<p className="text-sm text-slate-300">Check-ins and assistance throughout the season.</p>
</div>
</li>
</ol>
<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 transition" href="#contact">
<i className="h-4 w-4" data-lucide="mail-open"></i>
                Talk with us
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="grid lg:grid-cols-12 gap-10">
<div className="lg:col-span-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Let’s connect</h2>
<p className="mt-3 text-slate-300">Share a few details and we’ll reach out directly to continue the conversation.</p>
<div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 ring-1 ring-white/20">
<i className="h-5 w-5 text-white" data-lucide="inbox"></i>
</span>
<div>
<div className="font-medium text-white">Email</div>
<a className="text-sm text-slate-300 hover:text-white transition" href="mailto:aliciacoughlin01@cardsmart.io">aliciacoughlin01@cardsmart.io</a>
<div className="mt-2 text-xs text-slate-400">We typically reply within 1–2 business days.</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-6">
<form className="rounded-2xl border border-white/10 bg-white/5 p-6" id="contactForm">
<input autocomplete="off" className="hidden" name="company" tabindex="-1" type="text"/>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-200" htmlFor="name">Full name</label>
<input className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/60" id="name" name="name" placeholder="Your name" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-200" htmlFor="email">Email</label>
<input className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/60" id="email" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
</div>
<div className="mt-4">
<div className="flex items-center justify-between">
<label className="block text-sm font-medium text-slate-200">I am a</label>
<span className="text-xs text-slate-400">Choose one</span>
</div>
<input id="roleHidden" name="role" type="hidden" value="Player"/>
<div className="mt-2 grid grid-cols-2 sm:flex sm:flex-wrap gap-2">

<label className="peer inline-flex cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-white/10 data-[checked=true]:border-cyan-500/40 data-[checked=true]:bg-cyan-500/10 data-[checked=true]:text-white" data-role="Player">
<input checked="" className="sr-only" name="roleChoice" type="radio" value="Player"/>
<i className="mr-2 h-4 w-4" data-lucide="skate"></i> Player
                  </label>
<label className="peer inline-flex cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-white/10" data-role="Parent">
<input className="sr-only" name="roleChoice" type="radio" value="Parent"/>
<i className="mr-2 h-4 w-4" data-lucide="users"></i> Parent
                  </label>
<label className="peer inline-flex cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-white/10" data-role="Host">
<input className="sr-only" name="roleChoice" type="radio" value="Host"/>
<i className="mr-2 h-4 w-4" data-lucide="home"></i> Billet Host
                  </label>
<label className="peer inline-flex cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-white/10" data-role="Team">
<input className="sr-only" name="roleChoice" type="radio" value="Team"/>
<i className="mr-2 h-4 w-4" data-lucide="building-2"></i> Team
                  </label>
<label className="peer inline-flex cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-white/10" data-role="Agent">
<input className="sr-only" name="roleChoice" type="radio" value="Agent"/>
<i className="mr-2 h-4 w-4" data-lucide="globe-2"></i> Agent
                  </label>
</div>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-200" htmlFor="location">Location (optional)</label>
<input className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/60" id="location" name="location" placeholder="City, State / Country" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-200" htmlFor="timeline">Timeline (optional)</label>
<input className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/60" id="timeline" name="timeline" placeholder="e.g., Next season" type="text"/>
</div>
</div>
<div className="mt-4">
<label className="block text-sm font-medium text-slate-200" htmlFor="message">How can we help?</label>
<textarea className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/60" id="message" name="message" placeholder="Tell us a bit about your situation, goals, and any questions." required="" rows="5"></textarea>
</div>
<div className="mt-6 flex items-center justify-between">
<div className="text-xs text-slate-400">By submitting, you agree to be contacted about your inquiry.</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/20 hover:opacity-95 transition" type="submit">
<i className="h-4 w-4" data-lucide="send"></i>
                  Send
                </button>
</div>
<div className="mt-3 hidden text-xs text-slate-300" id="formNote"></div>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<img alt="Windy City Billets logo" className="h-8 w-auto hidden sm:block" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="font-semibold tracking-tight text-white">Windy City Billets</div>
<a className="text-sm text-slate-300 hover:text-white transition" href="https://windycitybillets.com" rel="noreferrer" target="_blank">windycitybillets.com</a>
</div>
</div>
<div className="text-sm text-slate-400">
            © <span id="year"></span> Windy City Billets. All rights reserved.
          </div>
</div>
</div>
</footer>




    </>
  );
}
