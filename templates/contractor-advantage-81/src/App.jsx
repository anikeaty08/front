import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Animate the hero CTA border glows if present
      document.querySelectorAll('a[href="#get-started"] > .absolute').forEach(el => el.classList.add('glow-anim'));

      // Tabs: demo dashboards
      const tabHomeowner = document.getElementById('tab-homeowner');
      const tabContractors = document.getElementById('tab-contractors');
      const homeownerDemo = document.getElementById('homeowner-demo');
      const contractorsDemo = document.getElementById('contractors-demo');

      function setActive(tab) {
        const activeClasses = ['bg-red-500','text-white','border-transparent'];
        const inactiveClasses = ['bg-white','text-stone-800','border','border-orange-200','hover:bg-stone-50'];

        if (tab === 'homeowner') {
          homeownerDemo.classList.remove('hidden');
          contractorsDemo.classList.add('hidden');
          tabHomeowner.classList.add('bg-red-500','text-white');
          tabHomeowner.classList.remove('border','border-orange-200','bg-white','text-stone-800');
          tabContractors.classList.remove('bg-red-500','text-white');
          tabContractors.classList.add('border','border-orange-200','bg-white','text-stone-800');
          document.getElementById('dashboard-heading').textContent = 'Homeowner dashboard';
        } else {
          contractorsDemo.classList.remove('hidden');
          homeownerDemo.classList.add('hidden');
          tabContractors.classList.add('bg-red-500','text-white');
          tabContractors.classList.remove('border','border-orange-200','bg-white','text-stone-800');
          tabHomeowner.classList.remove('bg-red-500','text-white');
          tabHomeowner.classList.add('border','border-orange-200','bg-white','text-stone-800');
          document.getElementById('dashboard-heading').textContent = 'Contractor portal';
        }
      }
      tabHomeowner?.addEventListener('click', () => setActive('homeowner'));
      tabContractors?.addEventListener('click', () => setActive('contractors'));

      // Lead form: lightweight UX
      const form = document.getElementById('lead-form');
      const toast = document.getElementById('toast');
      form?.addEventListener('submit', (e) => {
        e.preventDefault();
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 2200);
        form.reset();
        window.scrollTo({ top: form.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      });

      // Fill the empty contractors section (keeps original layout untouched)
      const contractorSection = document.getElementById('contractors');
      if (contractorSection && contractorSection.innerHTML.trim() === '') {
        contractorSection.innerHTML = `
          <div class="max-w-7xl mx-auto px-6">
            <div class="rounded-xl border border-orange-200 bg-white/70 dark:bg-neutral-900/70 dark:border-neutral-800 backdrop-blur-sm p-6 shadow-lg">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 class="text-[22px] md:text-[26px] tracking-tight font-semibold text-stone-900 dark:text-stone-50">Contractors: grow with qualified leads</h3>
                  <p class="mt-1 text-[14px] text-stone-600 dark:text-stone-400">Get matched to projects that fit your trade, location, and budget. No long‑term contracts.</p>
                  <ul class="mt-3 grid sm:grid-cols-3 gap-2 text-[13px] text-stone-700 dark:text-stone-300">
                    <li class="inline-flex items-center gap-1.5"><span class="h-5 w-5 rounded-full bg-emerald-500/10 text-emerald-600 inline-flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="m9 12 2 2 4-4"></path></svg></span>Vetted homeowners</li>
                    <li class="inline-flex items-center gap-1.5"><span class="h-5 w-5 rounded-full bg-emerald-500/10 text-emerald-600 inline-flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="m9 12 2 2 4-4"></path></svg></span>Clear scopes</li>
                    <li class="inline-flex items-center gap-1.5"><span class="h-5 w-5 rounded-full bg-emerald-500/10 text-emerald-600 inline-flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="m9 12 2 2 4-4"></path></svg></span>Flexible credits</li>
                  </ul>
                </div>
                <div class="shrink-0">
                  <a href="#lead-form" class="inline-flex items-center gap-2 rounded-md bg-red-500 px-4 py-2.5 text-[14px] font-medium text-white hover:bg-red-600 shadow-lg shadow-red-500/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
                    Apply to join
                  </a>
                </div>
              </div>
            </div>
          </div>
        `;
      }

      // Footer year
      const yearEl = document.getElementById('year');
      if (yearEl) yearEl.textContent = new Date().getFullYear();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="absolute top-0 w-full -z-10 h-[900px] bg-cover bg-center brightness-50" id="aura-image" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1654175789354-0ac285596363?w=3840&amp'}}></div>


<header className="w-full border-b border-orange-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm sticky top-0 z-40" style={{}}>
<div className="mx-auto max-w-7xl px-6">
<div className="flex h-16 items-center justify-between">

<a aria-label="Contractors Advantage" className="flex items-center gap-2 group" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-md border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm text-red-600" style={{}}>
<span className="text-[12px] font-semibold tracking-tight font-sans text-stone-900 dark:text-stone-100" style={{fontFamily: '\'Space Grotesk\', Inter, ui-sans-serif'}}>CA</span>
</div>
<span className="text-[15px] font-medium tracking-tight text-stone-900 dark:text-stone-100 font-sans" style={{fontFamily: '"Space Grotesk", Inter, ui-sans-serif'}}>Contractors Advantage</span>
</a>

<nav className="hidden md:flex items-center gap-7">
<a className="text-[15px] text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors font-sans" href="#problems" style={{}}>Problems</a>
<a className="text-[15px] text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors font-sans" href="#steps" style={{}}>Steps</a>
<a className="text-[15px] text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors font-sans" href="#testimonials" style={{}}>Testimonials</a>
<a className="text-[15px] text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors font-sans" href="#faq" style={{}}>FAQs</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center px-3.5 h-9 rounded-md text-[14px] border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-stone-50 dark:hover:bg-neutral-800 hover:border-orange-300 dark:hover:border-neutral-700 transition-colors font-sans" href="#login" style={{}}>Log in</a>
<a className="inline-flex items-center gap-2 px-4 h-9 rounded-md text-[14px] font-medium bg-red-500 text-white hover:bg-red-600 transition-colors shadow-lg shadow-red-500/10 font-sans" href="#get-started" style={{}}>
<svg className="lucide lucide-hammer w-4 h-4" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
              Get 3+ free bids
            </a>
</div>
</div>
</div>
</header>

<section className="relative" id="home">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid lg:grid-cols-2 gap-10 min-h-[calc(100vh-4rem)] pt-10 pb-10 gap-x-10 gap-y-10 items-center">

<div className="pt-4">

<div className="inline-flex items-center gap-2 rounded-full border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-1 text-[12px] text-stone-700 dark:text-stone-300 shadow-sm mb-6 font-sans" style={{animation: '600ms linear 0s 1 normal both running scaleIn'}}>
<svg className="lucide lucide-target w-3.5 h-3.5 text-red-500" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
              For homeowners and contractors in Southern California
            </div>

<h1 className="text-5xl md:text-6xl tracking-tight text-stone-900 dark:text-stone-50 font-bricolage font-semibold" style={{fontFamily: '"Space Grotesk", Inter, ui-sans-serif', animation: '650ms linear 50ms 1 normal both running scaleIn'}}>
              Homeowners hire fast. Contractors win more jobs.
            </h1>

<p className="mt-5 text-[18px] md:text-[18px] text-stone-700 dark:text-stone-300 font-sans" style={{animation: '650ms linear 120ms 1 normal both running scaleIn'}}>
              Homeowners: post once and receive multiple competitive bids from vetted Southern California pros near you. Contractors: get matched with qualified leads. Free for homeowners to post. No obligation.
            </p>

<div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3" style={{animation: 'scaleIn 650ms linear 220ms 1 both'}}>
<a className="inline-flex justify-center items-center gap-2 text-[15px] hover:bg-red-600 shadow-red-500/10 transition-colors group uppercase cursor-pointer font-medium text-white tracking-wider bg-red-500 border-transparent border-2 rounded-md pt-3 pr-5 pb-3 pl-5 relative shadow-lg" href="#get-started" style={{padding: '12px 20px', background: 'linear-gradient(0deg, rgb(0, 0, 0), rgb(39, 39, 39))', borderRadius: '10px', border: 'none', color: 'white', position: 'relative', cursor: 'pointer'}}>
<div className="absolute left-0 top-0 w-full h-full rounded-xl pointer-events-none glow-anim" style={{left: '-2px', top: '-2px', borderRadius: '10px', background: 'linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000)', backgroundSize: '400%', width: 'calc(100% + 4px)', height: 'calc(100% + 4px)', zIndex: '-1'}}></div>
<div className="absolute left-0 top-0 w-full h-full rounded-xl pointer-events-none glow-anim" style={{left: '-2px', top: '-2px', borderRadius: '10px', background: 'linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000)', backgroundSize: '400%', width: 'calc(100% + 4px)', height: 'calc(100% + 4px)', zIndex: '-1', filter: 'blur(50px)'}}></div>
<span className="relative z-30 font-medium font-sans">Get 3+ free bids</span>
<span className="relative flex h-5 w-5 items-center justify-center z-30">
<svg className="lucide lucide-plus-circle h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</span>
</a>
<a className="inline-flex justify-center items-center gap-2 rounded-md border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-5 py-3 text-[15px] text-stone-800 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-neutral-800 hover:border-orange-300 dark:hover:border-neutral-700 transition-colors font-sans" href="#steps" style={{}}>
<svg className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                See how it works (24–48h)
              </a>
</div>
<a className="mt-3 inline-block text-[13px] text-stone-600 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 underline-offset-2 hover:underline font-sans" href="#contractors" style={{}}>Are you a contractor? Join our network</a>
<p className="mt-3 text-[13px] text-stone-600 dark:text-stone-400 font-sans" style={{}}>You’ll post your project in under 2 minutes and start receiving comparable proposals from insured, reviewed pros.</p>
<p className="mt-1 text-[13px] text-stone-600 dark:text-stone-400 font-sans">Serving Orange County, Riverside/San Bernardino County, Los Angeles County, Ventura County, and Santa Barbara County.</p>

</div>

<div className="lg:justify-self-end w-full">
<div className="dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-7 bg-white/50 border-orange-200 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-lg backdrop-blur-sm" style={{animation: '700ms linear 120ms 1 normal both running scaleIn'}}>
<div className="flex items-start justify-between">
<div className="">
<h2 className="text-[28px] tracking-tight text-stone-900 dark:text-stone-50 font-bricolage font-semibold" style={{fontFamily: '"Space Grotesk", Inter, -sans-serif'}}>Get 3+ free bids</h2>
<p className="mt-1 text-[14px] text-stone-600 dark:text-stone-400 font-sans" style={{}}>Homeowners: tell us about your project. Contractors: apply below to join the network.</p>
</div>
<div className="hidden sm:flex items-center gap-1 rounded-full border border-orange-200 dark:border-neutral-800 px-2 py-1 text-[12px] text-stone-700 dark:text-stone-300 font-sans" style={{}}>
<svg className="lucide lucide-star w-3.5 h-3.5 text-red-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                  4.9/5 average
                </div>
</div>
<form className="mt-5 grid grid-cols-1 gap-4" id="lead-form">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="relative">
<label className="sr-only font-sans" htmlFor="project">Project type</label>
<div className="pointer-events-none absolute left-3 top-3 text-stone-400 dark:text-stone-500" style={{}}>
<svg className="lucide lucide-home w-4.5 h-4.5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<select className="appearance-none dark:border-neutral-800 dark:bg-neutral-900 text-[15px] dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-stone-900 bg-white w-full border-orange-200 border rounded-md pt-2.5 pr-10 pb-2.5 pl-9" id="project" name="project" required="">
<option className="font-sans" value="">Project type</option>
<option className="font-sans">Kitchen remodeling</option>
<option className="font-sans">Bathroom remodeling</option>
<option className="font-sans">Carpentry &amp; trim</option>
<option className="font-sans">Flooring</option>
<option className="font-sans">Painting &amp; drywall</option>
<option className="font-sans">Windows &amp; doors</option>
<option className="font-sans">Plumbing</option>
<option className="font-sans">Electrical</option>
<option className="font-sans">HVAC</option>
<option className="font-sans">Roofing</option>
<option className="font-sans">Masonry &amp; concrete</option>
<option className="font-sans">Landscaping</option>
<option className="font-sans">Fencing &amp; decks</option>
<option className="font-sans">Stucco &amp; siding</option>
<option className="font-sans">Solar</option>
<option className="font-sans">ADUs &amp; garage conversions</option>
<option className="font-sans">Other</option>
<option className="font-sans">Not Sure</option>
</select>
<div className="pointer-events-none absolute right-3 top-3 text-stone-400 dark:text-stone-500" style={{}}>
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="relative">
<label className="sr-only font-sans" htmlFor="zipcode">ZIP code</label>
<div className="pointer-events-none absolute left-3 top-3 text-stone-400 dark:text-stone-500" style={{}}>
<svg className="lucide lucide-map-pin w-4.5 h-4.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<input className="w-full rounded-md border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 pl-9 pr-3 py-2.5 text-[15px] text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500" id="zipcode" inputmode="numeric" name="zipcode" pattern="[0-9]{5}" placeholder="ZIP code" required="" style={{}}/>
</div>
</div>
<div className="relative">
<label className="sr-only font-sans" htmlFor="budget">Budget</label>
<div className="pointer-events-none absolute left-3 top-3 text-stone-400 dark:text-stone-500" style={{}}>
<svg className="lucide lucide-wallet w-4.5 h-4.5" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<select className="w-full appearance-none rounded-md border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 pl-9 pr-10 py-2.5 text-[15px] text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500" id="budget" name="budget" required="" style={{}}>
<option className="font-sans" value="">Estimated budget</option>
<option className="font-sans">Under $5,000</option>
<option className="font-sans">$5,000 – $15,000</option>
<option className="font-sans">$15,000 – $50,000</option>
<option className="font-sans">$50,000+</option>
</select>
<div className="pointer-events-none absolute right-3 top-3 text-stone-400 dark:text-stone-500" style={{}}>
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="relative">
<label className="sr-only font-sans" htmlFor="timeline">Timeline</label>
<div className="pointer-events-none absolute left-3 top-3 text-stone-400 dark:text-stone-500" style={{}}>
<svg className="lucide lucide-calendar-clock w-4.5 h-4.5" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><path d="M16 2v4"></path><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M3 10h5"></path><path d="M8 2v4"></path><circle cx="16" cy="16" r="6"></circle></svg>
</div>
<select className="w-full appearance-none rounded-md border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 pl-9 pr-10 py-2.5 text-[15px] text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500" id="timeline" name="timeline" required="" style={{}}>
<option className="font-sans" value="">Timeline</option>
<option className="font-sans">ASAP</option>
<option className="font-sans">2–4 weeks</option>
<option className="font-sans">1–3 months</option>
<option className="font-sans">3+ months</option>
</select>
<div className="pointer-events-none absolute right-3 top-3 text-stone-400 dark:text-stone-500" style={{}}>
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="relative">
<label className="sr-only font-sans" htmlFor="email">Email</label>
<div className="pointer-events-none absolute left-3 top-3 text-stone-400 dark:text-stone-500" style={{}}>
<svg className="lucide lucide-mail w-4.5 h-4.5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<input className="w-full rounded-md border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 pl-9 pr-3 py-2.5 text-[15px] text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500" id="email" name="email" placeholder="Email address" required="" style={{}} type="email"/>
</div>
<button className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-md bg-red-500 px-5 py-3 text-[15px] font-medium text-white hover:bg-red-600 transition-colors shadow-lg shadow-red-500/10 font-sans" style={{}} type="submit">
<svg className="lucide lucide-send w-5 h-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                  Post your project — get 3+ bids
                </button>
<a className="text-center text-[13px] text-stone-600 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 underline-offset-2 hover:underline font-sans" href="#contractors">Are you a contractor? Apply to join our network</a>
<div className="flex items-center justify-between text-[12px] text-stone-500 dark:text-stone-400" style={{}}>
<div className="flex items-center gap-1.5 font-sans">
<svg className="lucide lucide-lock w-3.5 h-3.5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    Your info is secure
                  </div>
<div className="flex items-center gap-1.5 font-sans">
<svg className="lucide lucide-badge-check w-3.5 h-3.5 text-red-500" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    No obligation
                  </div>
</div>
</form>
</div>
</div>
</div>
</div>
</section>


<section className="py-14 border-t border-orange-200 dark:border-neutral-800" id="steps">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="z-10 w-full mt-24 pt-6 pr-6 pb-6 pl-6 sm:p-8 relative shadow-2xl border rounded-3xl bg-black border-neutral-800/70">

<div className="flex gap-6 sm:px-0 pr-1 pl-1 items-center">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] font-bricolage font-semibold tracking-tight text-zinc-50" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif'}}>How it works.</h2>
<span aria-hidden="true" aria-orientation="vertical" className="w-px h-10 bg-neutral-800" role="separator"></span>
<p className="sm:text-base text-sm mt-1 font-sans tracking-tight text-zinc-400">Three simple steps to automate your content</p>
</div>
<div className="h-px mt-4 bg-neutral-800"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 z-10 sm:mt-8 mt-8 relative gap-x-8 gap-y-8 items-stretch">

<div className="lg:col-span-4 sm:p-8 border rounded-[28px] pt-6 pr-6 pb-6 pl-6 relative h-full flex flex-col bg-black border-neutral-800">
<span className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border text-xs sm:text-sm font-sans tracking-tight border-neutral-800 bg-black text-neutral-200">STEP 1</span>

<div className="relative h-48 sm:h-56 rounded-2xl border overflow-hidden bg-neutral-900 border-neutral-800">
<div className="absolute inset-0 p-4 sm:p-6">

<div className="border rounded-xl p-4 w-full shadow-2xl bg-black/90 border-neutral-800">
<div className="flex items-center gap-2 mb-3">
<svg className="text-emerald-400 w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 10a2 2 0 0 1 .7-1.53l7-6a2 2 0 0 1 2.6 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</svg>
<div className="h-2 w-24 rounded bg-neutral-100"></div>
</div>
<div className="space-y-2">
<div className="h-7 rounded-md border border-neutral-800 bg-neutral-900 flex items-center gap-2 px-2">
<svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<div className="h-1.5 w-24 rounded bg-neutral-700"></div>
</div>
<div className="h-7 rounded-md border border-neutral-800 bg-neutral-900 flex items-center gap-2 px-2">
<svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div className="h-1.5 w-16 rounded bg-neutral-700"></div>
</div>
<div className="h-7 rounded-md border border-neutral-800 bg-neutral-900 flex items-center gap-2 px-2">
<svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
<div className="h-1.5 w-20 rounded bg-neutral-700"></div>
</div>
<div className="h-7 rounded-md border border-neutral-800 bg-neutral-900 flex items-center gap-2 px-2">
<svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><path d="M16 2v4"></path><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M3 10h5"></path><path d="M8 2v4"></path><circle cx="16" cy="16" r="6"></circle></svg>
<div className="h-1.5 w-16 rounded bg-neutral-700"></div>
</div>
</div>
<div className="flex gap-2 mt-3">
<div className="h-6 w-20 rounded-lg flex items-center justify-center bg-emerald-900">
<div className="h-1 w-10 rounded bg-emerald-400"></div>
</div>
<div className="h-6 w-24 rounded-lg bg-neutral-900"></div>
</div>
</div>
</div>
</div>

<h3 className="mt-6 text-3xl sm:text-4xl font-bricolage font-semibold tracking-tight text-neutral-100" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif'}}>Post your project</h3>
<p className="mt-2 text-sm sm:text-base max-w-[52ch] font-sans tracking-tight text-neutral-400">Answer a few quick questions—project type, ZIP code, budget, and timeline. It takes under 2 minutes.</p>
</div>

<div className="lg:col-span-4 sm:p-8 border rounded-[28px] pt-6 pr-6 pb-6 pl-6 relative h-full flex flex-col bg-black border-neutral-800">
<span className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border text-xs sm:text-sm font-sans tracking-tight border-neutral-800 bg-black text-neutral-200">STEP 2</span>

<div className="relative h-48 sm:h-56 rounded-2xl border overflow-hidden bg-gradient-to-br p-4 border-neutral-800 from-neutral-950 to-neutral-900">
<div className="grid grid-cols-2 gap-3 h-full">

<div className="border rounded-lg p-3 shadow-sm bg-black border-neutral-800">
<div className="flex items-center gap-2 mb-2">
<svg className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M7 11l2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle>
</svg>
<div className="h-1.5 w-14 rounded bg-neutral-200"></div>
</div>
<div className="space-y-1">
<div className="h-1 w-3/5 rounded bg-blue-400"></div>
<div className="h- w-4/5 rounded bg-neutral-800"></div>
<div className="h-1 w-2/3 rounded bg-neutral-800"></div>
</div>
</div>

<div className="border rounded-lg p-3 shadow-sm bg-black border-neutral-800">
<div className="flex items-center gap-2 mb-2">
<svg className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M7 11l2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle>
</svg>
<div className="h-1.5 w-12 rounded bg-neutral-200"></div>
</div>
<div className="space-y-1">
<div className="h-1 w-2/3 rounded bg-blue-400"></div>
<div className="h-1 w-5/6 rounded bg-neutral-800"></div>
<div className="h-1 w-3/4 rounded bg-neutral-800"></div>
</div>
</div>

<div className="border rounded-lg p-3 shadow-sm bg-black border-neutral-800">
<div className="flex items-center gap-2 mb-2">
<svg className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M7 11l2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle>
</svg>
<div className="h-1.5 w-16 rounded bg-neutral-200"></div>
</div>
<div className="space-y-1">
<div className="h-1 w-1/2 rounded bg-blue-400"></div>
<div className="h-1 w-4/5 rounded bg-neutral-800"></div>
<div className="h-1 w-3/5 rounded bg-neutral-800"></div>
</div>
</div>

<div className="border rounded-lg p-3 shadow-sm bg-black border-neutral-800">
<div className="flex items-center gap-2 mb-2">
<svg className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M7 11l2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle>
</svg>
<div className="h-1.5 w-10 rounded bg-neutral-200"></div>
</div>
<div className="space-y-1">
<div className="h-1 w-3/4 rounded bg-blue-400"></div>
<div className="h-1 w-3/4 rounded bg-neutral-800"></div>
<div className="h-1 w-4/5 rounded bg-neutral-800"></div>
</div>
</div>
</div>
</div>

<h3 className="mt-6 text-3xl sm:text-4xl font-bricolage font-semibold tracking-tight text-neutral-100" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif'}}>Compare bids from vetted pros</h3>
<p className="mt-2 text-sm sm:text-base max-w-[52ch] font-sans tracking-tight text-neutral-400">Get 2–4 introductions within 24–48 hours. Review profiles, pricing, and reviews side‑by‑side to find the best fit.</p>
</div>

<div className="lg:col-span-4 relative rounded-[28px] border p-6 sm:p-8 h-full flex flex-col border-neutral-800 bg-black">
<span className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border text-xs sm:text-sm font-sans tracking-tight border-neutral-800 bg-black text-neutral-200">STEP 3</span>

<div className="relative h-48 sm:h-56 rounded-2xl border overflow-hidden p-4 bg-neutral-900 border-neutral-800">
<div className="w-full h-full rounded-xl overflow-hidden border p-3 bg-black border-neutral-800">

<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-lg flex items-center justify-center bg-emerald-900">
<svg className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path><path d="M5 12h14"></path>
</svg>
</div>
<div className="h-2 w-20 rounded bg-neutral-100"></div>
</div>
<div className="w-4 h-4 rounded-full bg-green-600"></div>
</div>

<div className="grid grid-cols-3 gap-2 mb-3">
<div className="border rounded p-2 text-center bg-blue-950 border-blue-800">
<svg className="mx-auto mb-1 text-blue-400" fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4"></path><path d="M21 12a9 9 0 1 1-9-9"></path></svg>
<div className="h-1 w-10 rounded mx-auto bg-blue-400"></div>
</div>
<div className="border rounded p-2 text-center bg-emerald-950 border-emerald-800">
<svg className="mx-auto mb-1 text-emerald-400" fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><circle cx="16" cy="16" r="6"></circle><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"></path></svg>
<div className="h-1 w-8 rounded mx-auto bg-emerald-400"></div>
</div>
<div className="border rounded p-2 text-center bg-purple-950 border-purple-800">
<svg className="mx-auto mb-1 text-purple-400" fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18M3 12h18M7 18h10"></path></svg>
<div className="h-1 w-12 rounded mx-auto bg-purple-400"></div>
</div>
</div>
<div className="grid grid-cols-3 gap-2 mb-3">
<div className="border rounded p-2 text-center bg-blue-950 border-blue-800">
<svg className="mx-auto mb-1 text-blue-400" fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18"></path><path d="M3 12h18"></path><path d="M3 17h18"></path></svg>
<div className="h-1 w-10 rounded mx-auto bg-blue-400"></div>
</div>
<div className="text-center border rounded p-2 bg-emerald-950 border-emerald-800">
<svg className="mx-auto mb-1 text-emerald-400" fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div className="h-1 w-8 rounded mx-auto bg-emerald-400"></div>
</div>
<div className="border rounded p-2 text-center bg-purple-950 border-purple-800">
<svg className="mx-auto mb-1 text-purple-400" fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18 8h-6a2 2 0 0 0-2 2v10"></path><path d="M6 14h8"></path><path d="M6 18h8"></path></svg>
<div className="h-1 w-12 rounded mx-auto bg-purple-400"></div>
</div>
</div>
</div>
</div>

<h3 className="mt-6 text-3xl sm:text-4xl font-bricolage font-semibold tracking-tight text-neutral-100" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif'}}>Schedule and hire</h3>
<p className="mt-2 text-sm sm:text-base max-w-[52ch] font-sans tracking-tight text-neutral-400">Shortlist your favorites, schedule site visits, finalize scope and price, and hire with confidence—no obligation.</p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-14 pb-14" id="problems">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-6">
<h2 className="text-[28px] md:text-[32px] tracking-tight font-bricolage font-semibold text-stone-900 dark:text-stone-50">Trades we cover</h2>
<p className="mt-1 text-[14px] text-stone-600 dark:text-stone-400">From foundation to finishes—vetted pros across every phase of your home remodel.</p>
</div>
<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-x-4 gap-y-4">
<div className="rounded-lg border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors relative overflow-hidden group h-full">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-md bg-red-500/10 text-red-600 inline-flex items-center justify-center text-[12px] font-medium">KR</span>
<div>
<p className="text-[15px] font-medium text-stone-900 dark:text-stone-100">Kitchen remodeling</p>
<p className="mt-1 text-[13px] text-stone-600 dark:text-stone-400">Cabinetry, countertops, layout updates.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors relative overflow-hidden group h-full">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-md bg-red-500/10 text-red-600 inline-flex items-center justify-center text-[12px] font-medium">BR</span>
<div>
<p className="text-[15px] font-medium text-stone-900 dark:text-stone-100">Bathroom remodeling</p>
<p className="mt-1 text-[13px] text-stone-600 dark:text-stone-400">Tile, showers, vanities, waterproofing.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors relative overflow-hidden group h-full">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-md bg-red-500/10 text-red-600 inline-flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
</span>
<div>
<p className="text-[15px] font-medium text-stone-900 dark:text-stone-100">Carpentry &amp; trim</p>
<p className="mt-1 text-[13px] text-stone-600 dark:text-stone-400">Framing, doors, molding, built‑ins.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors relative overflow-hidden group h-full">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-md bg-red-500/10 text-red-600 inline-flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</span>
<div>
<p className="text-[15px] font-medium text-stone-900 dark:text-stone-100">Flooring</p>
<p className="mt-1 text-[13px] text-stone-600 dark:text-stone-400">Hardwood, LVP, tile, carpet, refinishing.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors relative overflow-hidden group h-full">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-md bg-red-500/10 text-red-600 inline-flex items-center justify-center text-[12px] font-medium">PT</span>
<div>
<p className="text-[15px] font-medium text-stone-900 dark:text-stone-100">Painting &amp; drywall</p>
<p className="mt-1 text-[13px] text-stone-600 dark:text-stone-400">Interior, exterior, patching, texture.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors relative overflow-hidden group h-full">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-md bg-red-500/10 text-red-600 inline-flex items-center justify-center text-[12px] font-medium">WR</span>
<div>
<p className="text-[15px] font-medium text-stone-900 dark:text-stone-100">Windows &amp; doors</p>
<p className="mt-1 text-[13px] text-stone-600 dark:text-stone-400">New installs, replacements, weatherproofing.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors relative overflow-hidden group h-full">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-md bg-red-500/10 text-red-600 inline-flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</span>
<div>
<p className="text-[15px] font-medium text-stone-900 dark:text-stone-100">Plumbing</p>
<p className="mt-1 text-[13px] text-stone-600 dark:text-stone-400">Re‑pipes, fixtures, tub/shower, drains.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors relative overflow-hidden group h-full">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-md bg-red-500/10 text-red-600 inline-flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</span>
<div>
<p className="text-[15px] font-medium text-stone-900 dark:text-stone-100">Electrical</p>
<p className="mt-1 text-[13px] text-stone-600 dark:text-stone-400">Panels, lighting, EV, smart home.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors relative overflow-hidden group h-full">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-md bg-red-500/10 text-red-600 inline-flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m3 12 18 0"></path><path d="M4 8c1.5 1 3 1 4.5 0M15.5 16c1.5-1 3-1 4.5 0"></path></svg>
</span>
<div>
<p className="text-[15px] font-medium text-stone-900 dark:text-stone-100">HVAC</p>
<p className="mt-1 text-[13px] text-stone-600 dark:text-stone-400">Heating, cooling, ventilation, ductwork.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors relative overflow-hidden group h-full">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-md bg-red-500/10 text-red-600 inline-flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m3 7 9-4 9 4-9 4-9-4Z"></path><path d="M21 10v6l-9 4-9-4v-6"></path></svg>
</span>
<div>
<p className="text-[15px] font-medium text-stone-900 dark:text-stone-100">Roofing</p>
<p className="mt-1 text-[13px] text-stone-600 dark:text-stone-400">Shingle, tile, flat roofs, tear‑offs, repairs.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors relative overflow-hidden group h-full">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-md bg-red-500/10 text-red-600 inline-flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="M4 8l16 8"></path><path d="M20 8L4 16"></path></svg>
</span>
<div>
<p className="text-[15px] font-medium text-stone-900 dark:text-stone-100">Masonry &amp; concrete</p>
<p className="mt-1 text-[13px] text-stone-600 dark:text-stone-400">Driveways, foundations, block walls, pavers.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors relative overflow-hidden group h-full">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-md bg-red-500/10 text-red-600 inline-flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M6 20c0-4 12-4 12 0"></path><path d="M8 13c0-2 8-2 8 0"></path><path d="M12 4q3 2 3 5a3 3 0 0 1-6 0q0-3 3-5Z"></path></svg>
</span>
<div>
<p className="text-[15px] font-medium text-stone-900 dark:text-stone-100">Landscaping</p>
<p className="mt-1 text-[13px] text-stone-600 dark:text-stone-400">Design, irrigation, hardscape, turf.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors relative overflow-hidden group h-full">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-md bg-red-500/10 text-red-600 inline-flex items-center justify-center text-[12px] font-medium">FD</span>
<div>
<p className="text-[15px] font-medium text-stone-900 dark:text-stone-100">Fencing &amp; decks</p>
<p className="mt-1 text-[13px] text-stone-600 dark:text-stone-400">Wood, composite, railings, pergolas.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors relative overflow-hidden group h-full">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-md bg-red-500/10 text-red-600 inline-flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="18" x="3" y="6"></rect><path d="M3 12h18"></path></svg>
</span>
<div>
<p className="text-[15px] font-medium text-stone-900 dark:text-stone-100">Stucco &amp; siding</p>
<p className="mt-1 text-[13px] text-stone-600 dark:text-stone-400">Re‑stucco, fiber cement, wood, trim.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors relative overflow-hidden group h-full">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-md bg-red-500/10 text-red-600 inline-flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"></path></svg>
</span>
<div>
<p className="text-[15px] font-medium text-stone-900 dark:text-stone-100">Solar</p>
<p className="mt-1 text-[13px] text-stone-600 dark:text-stone-400">PV systems, batteries, main panel upgrades.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors relative overflow-hidden group h-full">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-md bg-red-500/10 text-red-600 inline-flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 10a2 2 0 0 1 .7-1.53l7-6a2 2 0 0 1 2.6 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><path d="M8 21v-4h8v4"></path><path d="M10 13h4"></path></svg>
</span>
<div>
<p className="text-[15px] font-medium text-stone-900 dark:text-stone-100">ADUs &amp; garage conversions</p>
<p className="mt-1 text-[13px] text-stone-600 dark:text-stone-400">Design‑build, permitting, turn‑key.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="dark:border-neutral-800 border-orange-200 border-t pt-14 pb-14" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-6">
<h2 className="text-[28px] md:text-[32px] tracking-tight font-bricolage font-semibold text-stone-900 dark:text-stone-50">Top‑rated contractors near you</h2>
<p className="mt-1 text-[14px] text-stone-600 dark:text-stone-400">Vetted pros with outstanding homeowner reviews.</p>
<div className="mt-3 inline-flex items-center gap-2 rounded-full border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-1 text-[12px] text-stone-700 dark:text-stone-300">
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
            4.9/5 average • 1,200+ verified ratings
          </div>
</div>
<div className="">
<div className="relative mt-6 sm:mt-8 overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-900 bg-zinc-950">
<div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>
<div className="relative py-6 sm:py-8">
<div className="flex gap-4 sm:gap-5 will-change-transform animate-[marquee-ltr_45s_linear_infinite]">
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e0bbf4a4-5f58-4644-bea6-85d2fef73d4a_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Harbor Remodel Co.</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400 inline-flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                4.9 • 318 reviews
              </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">Kitchens, baths, and whole‑home remodels — Orange &amp; LA County.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/27a2c31e-38f3-479f-a831-858e91b9bd84_320w.jpg"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Redwood Roofing</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400 inline-flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                4.9 • 212 reviews
              </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">Shingle, tile, and flat roofs — inspections and replacements.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/86a541ae-1b5d-4597-8538-e55c0858f4ff_320w.jpg"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Coastal Plumbing</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400 inline-flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                4.8 • 164 reviews
              </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">Re‑pipes, water heaters, fixtures — 24/7 emergency.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Vista Electric</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400 inline-flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                4.9 • 197 reviews
              </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">Panel upgrades, lighting, EV chargers — permit‑ready.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Summit Painting</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400 inline-flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                4.9 • 180 reviews
              </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">Interior/exterior painting and drywall repair.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Sierra HVAC</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400 inline-flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                4.8 • 143 reviews
              </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">AC installs, heat pumps, ductwork — maintenance plans.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Pacific Masonry</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle ="10"="" cx="12" cy="12"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400 inline-flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                4.9 • 126 reviews
              </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">Concrete, pavers, block walls — clean finishes.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Solis Solar</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400 inline-flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                4.9 • 132 reviews
              </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">PV systems and batteries — main panel upgrades.</p>
</article>
</div>
</div>
<div className="border-t border-zinc-900/80"></div>
<div className="relative py-6 sm:py-8">
<div className="flex gap-4 sm:gap-5 will-change-transform animate-[marquee-rtl_45s_linear_infinite]">
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-zinc-900/40 border-zinc-900 border rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/358aaa92-ba50-4778-b2a2-7c8f7310e44c_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">ADU Works</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400 inline-flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                4.9 • 101 reviews
              </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">ADUs &amp; garage conversions — design‑build permitting.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-zinc-900/40 border-zinc-900 border rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b6d79211-32f1-430e-96b3-9b4d857c1482_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Golden Gate Floors</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400 inline-flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                4.8 • 156 reviews
              </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">Hardwood, LVP, refinishing — dust‑managed sanding.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-zinc-900/40 border-zinc-900 border rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ec17a2e2-e4f4-4164-b631-fe640a0c1_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Coastal Cabinets</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400 inline-flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                4.9 • 96 reviews
              </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">Custom cabinetry, vanities, built‑ins — shop‑made.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c0aab170-b3d3-4816-9435-0ac1e1d853a3_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Westside Windows</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400 inline-flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                4.8 • 141 reviews
              </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">Windows &amp; doors — replacements and new installs.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/480fa0bd-ee9a-4aa1-8f7a-5307cc4541f5_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Citrus Landscape</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400 inline-flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                4.8 • 118 reviews
              </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">Design, irrigation, turf, hardscape — water‑wise.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e0bbf4a4-5f58-4644-bea6-85d2fef73d4a_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Seaside Stucco</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400 inline-flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                4.8 • 87 reviews
              </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">Re‑stucco, fiber cement siding, trim.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/27a2c31e-38f3-479f-a831-858e91b9bd84_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Santa Ana Carpentry</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400 inline-flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                4.9 • 73 reviews
              </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">Framing, doors, trim, built‑ins.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b6d79211-32f1-430e-96b3-9b4d857c1482_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Harbor Remodel Co.</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400 inline-flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                4.9 • 318 reviews
              </p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">Kitchens, baths, and whole‑home remodels.</p>
</article>
</div>
</div>
</div>
<style>
    @keyframes marquee-rtl {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes marquee-ltr {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    @media (prefers-reduced-motion: reduce) {
      .animate-\[marquee-rtl_45s_linear_infinite\],
      .animate-\[marquee-ltr_45s_linear_infinite\] {
        animation: none !important;
      }
    }
  </style>
</div>
</div>
</section><section className="pt-12 pb-12" id="demo-dashboard">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-6 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3 py-1 text-[12px] text-stone-700 shadow-sm">
<svg className="w-3.5 h-3.5 text-red-500" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18M3 12h18"></path></svg>
              Demo dashboard
            </span>
<h2 className="text-[28px] md:text-[32px] font-semibold text-stone-900 dark:text-stone-50 tracking-tight font-bricolage" style={{fontFamily: '"Space Grotesk", Inter, ui-sans-serif'}}><span className="" id="dashboard-heading">Homeowner dashboard</span> (read‑only preview)</h2>
</div>
<span className="hidden sm:inline-flex items-center rounded-full border border-orange-200 bg-white/70 px-2.5 py-1 text-[12px] text-stone-700">Not clickable</span>
</div>

<div className="flex gap-2 mb-4 gap-x-2 gap-y-2 items-center">
<button className="inline-flex items-center gap-2 rounded-md bg-red-500 px-3.5 py-2 text-[13px] font-medium text-white shadow-sm" id="tab-homeowner">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 10a2 2 0 0 1 .7-1.53l7-6a2 2 0 0 1 2.6 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            Homeowner
          </button>
<button className="inline-flex items-center gap-2 rounded-md border border-orange-200 bg-white px-3.5 py-2 text-[13px] text-stone-800 hover:bg-stone-50" id="tab-contractors">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 21v-4a4 4 0 1 1 10 0v4"></path><circle cx="12" cy="7" r="4"></circle></svg>
            Contractors
          </button>
</div>

<div className="rounded-xl border border-orange-200 bg-white shadow-xl overflow-hidden" id="homeowner-demo">

<div className="flex items-center gap-3 px-4 py-2 border-b border-orange-200 bg-stone-50/70">
<div className="flex items-center gap-1.5">
<span className="h-2.5 w-2.5 rounded-full bg-rose-500/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span>
</div>
<div className="mx-2 flex-1">
<div className="flex items-center gap-2 rounded-md border border-orange-200 bg-white px-3 py-1.5">
<svg className="w-3.5 h-3.5 text-stone-500" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 1 0-7 7a5 5 0 0 0 7-7"></path><path d="M21 21l-6-6"></path></svg>
<span className="text-[12px] text-stone-500 select-none">homeowner.contractorsadvantage.com/dashboard</span>
</div>
</div>
<div className="hidden md:flex items-center gap-2 text-stone-500">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18M8 12h13M3 17h18"></path></svg>
</div>
</div>

<div className="pointer-events-none select-none">
<div className="grid lg:grid-cols-[220px_1fr]">

<aside className="hidden lg:block border-r border-orange-200 bg-stone-50/60 p-4">
<div className="flex items-center gap-2 mb-3">
<div className="h-8 w-8 rounded-md border border-orange-200 bg-white inline-flex items-center justify-center text-red-600">
<span className="text-[12px] font-semibold tracking-tight font-sans">CA</span>
</div>
<span className="text-[14px] font-medium text-stone-900 tracking-tight">Dashboard</span>
</div>
<nav className="space-y-1">
<div className="flex items-center gap-2 rounded-md px-2.5 py-2 text-[14px] text-stone-900 bg-white border border-orange-200">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
                    Overview
                  </div>
<div className="flex items-center gap-2 rounded-md px-2.5 py-2 text-[14px] text-stone-700 hover:bg-stone-50/60 border border-transparent">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 6h13"></path><path d="M8 12h13"></path><path d="M8 18h13"></path><path d="M3 6h.01"></path><path d="M3 12h.01"></path><path d="M3 18h.01"></path></svg>
                    Projects
                  </div>
<div className="flex items-center gap-2 rounded-md px-2.5 py-2 text-[14px] text-stone-700 border border-transparent">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 10a7 7 0 1 1-14 0a7 7 0 0 1 14 0"></path><path d="m8 8 8 8"></path></svg>
                    Bids
                  </div>
<div className="flex items-center gap-2 rounded-md px-2.5 py-2 text-[14px] text-stone-700 border border-transparent">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h10"></path></svg>
                    Messages
                  </div>
<div className="flex items-center gap-2 rounded-md px-2.5 py-2 text-[14px] text-stone-700 border border-transparent">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M10 8h4"></path><path d="M8 12h8"></path><path d="M10 16h4"></path></svg>
                    Documents
                  </div>
<div className="flex items-center gap-2 rounded-md px-2.5 py-2 text-[14px] text-stone-700 border border-transparent">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 6V4"></path><path d="M6 12H4"></path><path d="M20 12h-2"></path><path d="M12 20v-2"></path><circle cx="12" cy="12" r="8"></circle></svg>
                    Settings
                  </div>
</nav>
</aside>

<main className="p-4 md:p-6">

<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<div>
<h3 className="text-[22px] md:text-[26px] tracking-tight font-semibold text-stone-900">Welcome back, Erin</h3>
<p className="text-[13px] text-stone-600">Here’s a snapshot of your projects and bids.</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-red-500 px-3.5 py-2.5 text-[14px] font-medium text-white shadow-sm">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
                      Post new project
                    </button>
<button className="inline-flex items-center gap-2 rounded-md border border-orange-200 bg-white px-3.5 py-2.5 text-[14px] text-stone-800">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
                      Invite contractor
                    </button>
</div>
</div>

<div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-lg border border-orange-200 bg-white p-4 shadow-sm">
<p className="text-[12px] text-stone-500">Active projects</p>
<p className="mt-1 text-[28px] font-semibold tracking-tight text-stone-900">2</p>
<p className="text-[12px] text-stone-500">Kitchen, Roofing</p>
</div>
<div className="rounded-lg border border-orange-200 bg-white p-4 shadow-sm">
<p className="text-[12px] text-stone-500">New bids</p>
<p className="mt-1 text-[28px] font-semibold tracking-tight text-stone-900">5</p>
<p className="text-[12px] text-stone-500">Past 48 hours</p>
</div>
<div className="rounded-lg border border-orange-200 bg-white p-4 shadow-sm">
<p className="text-[12px] text-stone-500">Messages</p>
<p className="mt-1 text-[28px] font-semibold tracking-tight text-stone-900">3</p>
<p className="text-[12px] text-stone-500">Awaiting reply</p>
</div>
</div>

<div className="mt-5 grid lg:grid-cols-3 gap-4">

<div className="lg:col-span-2 rounded-lg border border-orange-200 bg-white shadow-sm">
<div className="flex items-center justify-between px-4 py-3 border-b border-orange-200">
<p className="text-[14px] font-medium text-stone-900">Your projects</p>
<span className="text-[12px] text-stone-500">Updated just now</span>
</div>
<ul className="divide-y divide-orange-200">
<li className="px-4 py-3 flex items-center gap-4">
<div className="h-9 w-9 rounded-md bg-red-500/10 text-red-600 inline-flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 10a2 2 0 0 1 .7-1.53l7-6a2 2 0 0 1 2.6 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<div className="flex-1">
<p className="text-[14px] font-medium text-stone-900">Kitchen Remodel — Costa Mesa</p>
<p className="text-[12px] text-stone-500">3 bids • Shortlist 2 • Timeline: 4–6 weeks</p>
</div>
<span className="inline-flex items-center rounded-full bg-emerald-500/10 text-emerald-600 px-2 py-0.5 text-[12px]">In review</span>
</li>
<li className="px-4 py-3 flex items-center gap-4">
<div className="h-9 w-9 rounded-md bg-red-500/10 text-red-600 inline-flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m3 7 9-4 9 4-9 4-9-4Z"></path><path d="M21 10v6l-9 4-9-4v-6"></path></svg>
</div>
<div className="flex-1">
<p className="text-[14px] font-medium text-stone-900">Roof Replacement — Los Angeles</p>
<p className="text-[12px] text-stone-500">2 bids • Site visit scheduled • Timeline: ASAP</p>
</div>
<span className="inline-flex items-center rounded-full bg-amber-500/10 text-amber-600 px-2 py-0.5 text-[12px]">Scheduling</span>
</li>
</ul>
</div>

<div className="rounded-lg border border-orange-200 bg-white shadow-sm">
<div className="px-4 py-3 border-b border-orange-200">
<p className="text-[14px] font-medium text-stone-900">Recent bids</p>
</div>
<ul className="divide-y divide-orange-200">
<li className="px-4 py-3 flex items-start gap-3">
<span className="h-8 w-8 rounded-full bg-red-500/10 text-red-600 inline-flex items-center justify-center">HM</span>
<div className="flex-1">
<p className="text-[13px] text-stone-900"><span className="font-medium">Harbor Remodel Co.</span> — $42,800</p>
<p className="text-[12px] text-stone-500">Includes cabinetry, countertops, permits</p>
</div>
<span className="text-[12px] text-stone-500">1h ago</span>
</li>
<li className="px-4 py-3 flex items-start gap-3">
<span className="h-8 w-8 rounded-full bg-red-500/10 text-red-600 inline-flex items-center justify-center">RC</span>
<div className="flex-1">
<p className="text-[13px] text-stone-900"><span className="font-medium">Redwood Roofing</span> — $15,400</p>
<p className="text-[12px] text-stone-500">Tear-off, underlayment, 30yr shingles</p>
</div>
<span className="text-[12px] text-stone-500">Yesterday</span>
</li>
<li className="px-4 py-3 flex items-start gap-3">
<span className="h-8 w-8 rounded-full bg-red-500/10 text-red-600 inline-flex items-center justify-center">SB</span>
<div className="flex-1">
<p className="text-[13px] text-stone-900"><span className="font-medium">Santa Barbara Builds</span> — $48,900</p>
<p className="text-[12px] text-stone-500">Alt bid: Quartz upgrade +$3,200</p>
</div>
<span className="text-[12px] text-stone-500">2d ago</span>
</li>
</ul>
</div>
</div>

<div className="mt-5 grid md:grid-cols-2 gap-4">
<div className="rounded-lg border border-orange-200 bg-white shadow-sm">
<div className="px-4 py-3 border-b border-orange-200">
<p className="text-[14px] font-medium text-stone-900">Latest messages</p>
</div>
<ul className="divide-y divide-orange-200">
<li className="px-4 py-3 flex items-start gap-3">
<span className="h-8 w-8 rounded-full bg-stone-100 inline-flex items-center justify-center text-[12px] text-stone-700">ER</span>
<div className="flex-1">
<p className="text-[13px] text-stone-900"><span className="font-medium">Erin (You)</span> — Kitchen Remodel</p>
<p className="text-[12px] text-stone-600 line-clamp-1">Thanks for the updated line item breakdown!</p>
</div>
<span className="text-[12px] text-stone-500">3m</span>
</li>
<li className="px-4 py-3 flex items-start gap-3">
<span className="h-8 w-8 rounded-full bg-red-500/10 text-red-600 inline-flex items-center justify-center">HM</span>
<div className="flex-1">
<p className="text-[13px] text-stone-900"><span className="font-medium">Harbor Remodel Co.</span></p>
<p className="text-[12px] text-stone-600 line-clamp-1">We can start demo on the 12th if that works.</p>
</div>
<span className="text-[12px] text-stone-500">1h</span>
</li>
</ul>
</div>
<div className="rounded-lg border border-orange-200 bg-white shadow-sm">
<div className="px-4 py-3 border-b border-orange-200">
<p className="text-[14px] font-medium text-stone-900">Next steps</p>
</div>
<div className="p-4 space-y-3">
<div className="flex items-start gap-3">
<span className="mt-0.5 h-6 w-6 rounded-full bg-emerald-500/10 text-emerald-600 inline-flex items-center justify-center">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path></svg>
</span>
<div>
<p className="text-[14px] text-stone-900">Shortlist your top bids</p>
<p className="text-[12px] text-stone-600">Pick up to 3 to compare side-by-side.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="mt-0.5 h-6 w-6 rounded-full bg-amber-500/10 text-amber-600 inline-flex items-center justify-center">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><circle cx="16" cy="16" r="6"></circle></svg>
</span>
<div>
<p className="text-[14px] text-stone-900">Schedule a site visit</p>
<p className="text-[12px] text-stone-600">Confirm availability and timeline.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="mt-0.5 h-6 w-6 rounded-full bg-red-500/10 text-red-600 inline-flex items-center justify-center">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M8 21h8"></path><path d="M12 17V8"></path><path d="m7 8 5-5 5 5"></path></svg>
</span>
<div>
<p className="text-[14px] text-stone-900">Approve final scope</p>
<p className="text-[12px] text-stone-600">Lock price and scope before start.</p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 rounded-lg border border-orange-200 bg-stone-50/70 px-4 py-3 flex items-center justify-between">
<p className="text-[12px] text-stone-600">This is a demo preview. Actions are disabled.</p>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-md bg-white border border-orange-200 px-2.5 py-1 text-[12px] text-stone-700">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
                      Try it free
                                         </span>
<span className="inline-flex items-center gap-1 rounded-md bg-white border border-orange-200 px-2.5 py-1 text-[12px] text-stone-700">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h7v7H4z"></path><path d="m21 21-6-6"></path></svg>
                        Read‑only
                      </span>
</div>
</div>
</main>
</div>
</div>
</div>

<div className="hidden rounded-xl border border-orange-200 bg-white shadow-xl overflow-hidden" id="contractors-demo">

<div className="flex items-center gap-3 px-4 py-2 border-b border-orange-200 bg-stone-50/70">
<div className="flex items-center gap-1.5">
<span className="h-2.5 w-2.5 rounded-full bg-rose-500/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span>
</div>
<div className="mx-2 flex-1">
<div className="flex items-center gap-2 rounded-md border border-orange-200 bg-white px-3 py-1.5">
<svg className="w-3.5 h-3.5 text-stone-500" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8 21 4-9 4 9"></path><path d="M3 3h18"></path></svg>
<span className="text-[12px] text-stone-500 select-none">contractor.contractorsadvantage.com/portal</span>
</div>
</div>
<div className="hidden md:flex items-center gap-2 text-stone-500">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18M8 12h13M3 17h18"></path></svg>
</div>
</div>

<div className="pointer-events-none select-none">
<div className="grid lg:grid-cols-[220px_1fr]">

<aside className="hidden lg:block border-r border-orange-200 bg-stone-50/60 p-4">
<div className="flex items-center gap-2 mb-3">
<div className="h-8 w-8 rounded-md border border-orange-200 bg-white inline-flex items-center justify-center text-red-600">
<span className="text-[12px] font-semibold tracking-tight font-sans">CA</span>
</div>
<span className="text-[14px] font-medium text-stone-900 tracking-tight">Contractor</span>
</div>
<nav className="space-y-1">
<div className="flex items-center gap-2 rounded-md px-2.5 py-2 text-[14px] text-stone-900 bg-white border border-orange-200">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18"></path><path d="M3 12h18"></path><path d="M3 17h18"></path></svg>
                      Leads
                    </div>
<div className="flex items-center gap-2 rounded-md px-2.5 py-2 text-[14px] text-stone-700 border border-transparent">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h13"></path><path d="M3 12h13"></path><path d="M3 17h13"></path><path d="M18 7v10"></path></svg>
                      Bids sent
                    </div>
<div className="flex items-center gap-2 rounded-md px-2.5 py-2 text-[14px] text-stone-700 border border-transparent">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h10"></path></svg>
                      Messages
                    </div>
<div className="flex items-center gap-2 rounded-md px-2.5 py-2 text-[14px] text-stone-700 border border-transparent">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 6h13"></path><path d="M8 12h13"></path><path d="M8 18h13"></path><path d="M3 6h.01"></path><path d="M3 12h.01"></path><path d="M3 18h.01"></path></svg>
                      Projects
                    </div>
<div className="flex items-center gap-2 rounded-md px-2.5 py-2 text-[14px] text-stone-700 border border-transparent">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
                      Invoices
                    </div>
</nav>
</aside>

<main className="p-4 md:p-6">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<div>
<h3 className="text-[22px] md:text-[26px] tracking-tight font-semibold text-stone-900">Good morning, Harbor Remodel Co.</h3>
<p className="text-[13px] text-stone-600">Your leads and pipeline at a glance.</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-red-500 px-3.5 py-2.5 text-[14px] font-medium text-white shadow-sm">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
                        Buy credits
                      </button>
<button className="inline-flex items-center gap-2 rounded-md border border-orange-200 bg-white px-3.5 py-2.5 text-[14px] text-stone-800">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 21v-4a4 4 0 1 1 10 0v4"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        Profile
                      </button>
</div>
</div>

<div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-lg border border-orange-200 bg-white p-4 shadow-sm">
<p className="text-[12px] text-stone-500">New leads</p>
<p className="mt-1 text-[28px] font-semibold tracking-tight text-stone-900">7</p>
<p className="text-[12px] text-stone-500">Past 7 days</p>
</div>
<div className="rounded-lg border border-orange-200 bg-white p-4 shadow-sm">
<p className="text-[12px] text-stone-500">Bids sent</p>
<p className="mt-1 text-[28px] font-semibold tracking-tight text-stone-900">12</p>
<p className="text-[12px] text-stone-500">This month</p>
</div>
<div className="rounded-lg border border-orange-200 bg-white p-4 shadow-sm">
<p className="text-[12px] text-stone-500">Win rate</p>
<p className="mt-1 text-[28px] font-semibold tracking-tight text-stone-900">38%</p>
<p className="text-[12px] text-stone-500">Last 90 days</p>
</div>
</div>

<div className="mt-5 grid lg:grid-cols-3 gap-4">

<div className="lg:col-span-2 rounded-lg border border-orange-200 bg-white shadow-sm">
<div className="flex items-center justify-between px-4 py-3 border-b border-orange-200">
<p className="text-[14px] font-medium text-stone-900">Open leads</p>
<span className="text-[12px] text-stone-500">Auto‑matched</span>
</div>
<ul className="divide-y divide-orange-200">
<li className="px-4 py-3 flex items-center gap-4">
<div className="h-9 w-9 rounded-md bg-red-500/10 text-red-600 inline-flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 10a2 2 0 0 1 .7-1.53l7-6a2 2 0 0 1 2.6 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<div className="flex-1">
<p className="text-[14px] font-medium text-stone-900">Kitchen Remodel — Costa Mesa</p>
<p className="text-[12px] text-stone-500">Budget: $35–50k • Timeline: 1–3 months</p>
</div>
<span className="inline-flex items-center rounded-full bg-sky-500/10 text-sky-600 px-2 py-0.5 text-[12px]">New</span>
</li>
<li className="px-4 py-3 flex items-center gap-4">
<div className="h-9 w-9 rounded-md bg-red-500/10 text-red-600 inline-flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m3 7 9-4 9 4-9 4-9-4Z"></path><path d="M21 10v6l-9 4-9-4v-6"></path></svg>
</div>
<div className="flex-1">
<p className="text-[14px] font-medium text-stone-900">Roof Replacement — Los Angeles</p>
<p className="text-[12px] text-stone-500">Budget: $12–18k • Timeline: ASAP</p>
</div>
<span className="inline-flex items-center rounded-full bg-amber-500/10 text-amber-600 px-2 py-0.5 text-[12px]">Visit set</span>
</li>
</ul>
</div>

<div className="rounded-lg border border-orange-200 bg-white shadow-sm">
<div className="px-4 py-3 border-b border-orange-200">
<p className="text-[14px] font-medium text-stone-900">Upcoming visits</p>
</div>
<ul className="divide-y divide-orange-200">
<li className="px-4 py-3 flex items-start gap-3">
<span className="h-8 w-8 rounded-full bg-stone-100 inline-flex items-center justify-center text-[12px] text-stone-700">CM</span>
<div className="flex-1">
<p className="text-[13px] text-stone-900"><span className="font-medium">Costa Mesa</span> — Kitchen</p>
<p className="text-[12px] text-stone-500">Thu 2:30 PM • 45–60 min</p>
</div>
<span className="text-[12px] text-stone-500">Tomorrow</span>
</li>
<li className="px-4 py-3 flex items-start gap-3">
<span className="h-8 w-8 rounded-full bg-stone-100 inline-flex items-center justify-center text-[12px] text-stone-700">LA</span>
<div className="flex-1">
<p className="text-[13px] text-stone-900"><span className="font-medium">Los Angeles</span> — Roofing</p>
<p className="text-[12px] text-stone-500">Mon 10:00 AM • 30–45 min</p>
</div>
<span className="text-[12px] text-stone-500">Next week</span>
</li>
</ul>
</div>
</div>

<div className="mt-6 rounded-lg border border-orange-200 bg-stone-50/70 px-4 py-3 flex items-center justify-between">
<p className="text-[12px] text-stone-600">This is a demo preview. Actions are disabled.</p>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-md bg-white border border-orange-200 px-2.5 py-1 text-[12px] text-stone-700">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
                        Join the network
                      </span>
<span className="inline-flex items-center gap-1 rounded-md bg-white border border-orange-200 px-2.5 py-1 text-[12px] text-stone-700">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
                        Credits
                      </span>
</div>
</div>
</main>
</div>
</div>
</div>
</div>

<section className="mt-8" id="contractors">
<div className="max-w-7xl mx-auto px-6">
<div className="rounded-xl border border-orange-200 bg-white/70 dark:bg-neutral-900/70 dark:border-neutral-800 backdrop-blur-sm p-6 shadow-lg">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div className="">
<h3 className="text-[22px] md:text-[26px] tracking-tight font-semibold text-stone-900 dark:text-stone-50">Contractors: grow with qualified leads</h3>
<p className="mt-1 text-[14px] text-stone-600 dark:text-stone-400">Get matched to projects that fit your trade, location, and budget. No long‑term contracts.</p>
<ul className="mt-3 grid sm:grid-cols-3 gap-2 text-[13px] text-stone-700 dark:text-stone-300">
<li className="inline-flex items-center gap-1.5"><span className="h-5 w-5 rounded-full bg-emerald-500/10 text-emerald-600 inline-flex items-center justify-center"><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path></svg></span>Vetted homeowners</li>
<li className="inline-flex items-center gap-1.5"><span className="h-5 w-5 rounded-full bg-emerald-500/10 text-emerald-600 inline-flex items-center justify-center"><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path></svg></span>Clear scopes</li>
<li className="inline-flex items-center gap-1.5"><span className="h-5 w-5 rounded-full bg-emerald-500/10 text-emerald-600 inline-flex items-center justify-center"><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path></svg></span>Flexible credits</li>
</ul>
</div>
<div className="shrink-0">
<a className="inline-flex items-center gap-2 text-[14px] hover:bg-red-600 shadow-red-500/10 font-medium text-white bg-red-500 rounded-md pt-2.5 pr-4 pb-2.5 pl-4 shadow-lg justify-center transition-colors group uppercase cursor-pointer tracking-wider border-transparent border-2 relative" href="#lead-form" style={{padding: '12px 20px', background: 'linear-gradient(0deg, rgb(0, 0, 0), rgb(39, 39, 39))', borderRadius: '10px', border: 'none', color: 'white', position: 'relative', cursor: 'pointer'}}>
<div className="absolute left-0 top-0 w-full h-full rounded-xl pointer-events-none glow-anim" style={{left: '-2px', top: '-2px', borderRadius: '10px', background: 'linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000)', backgroundSize: '400%', width: 'calc(100% + 4px)', height: 'calc(100% + 4px)', zIndex: '-1'}}></div>
<div className="absolute left-0 top-0 w-full h-full rounded-xl pointer-events-none glow-anim" style={{left: '-2px', top: '-2px', borderRadius: '10px', background: 'linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000)', backgroundSize: '400%', width: 'calc(100% + 4px)', height: 'calc(100% + 4px)', zIndex: '-1', filter: 'blur(50px)'}}></div>
<span className="relative z-30 font-medium font-sans">Apply to join</span>
<span className="relative flex h-5 w-5 items-center justify-center z-30">
<svg className="lucide lucide-plus-circle h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</span>
</a>
</div>
</div>
</div>
</div>
</section>
</section><section className="dark:border-neutral-800 border-orange-200 border-t pt-14 pb-14" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-6">
<h2 className="text-[28px] md:text-[32px] dark:text-stone-50 font-semibold text-stone-900 tracking-tight font-bricolage">Homeowners ❤️ the results</h2>
<p className="mt-1 text-[14px] text-stone-600 dark:text-stone-400">Real feedback from recent projects across SoCal.</p>
</div>
<div className="">
<div className="relative mt-6 sm:mt-8 overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-900 bg-zinc-950">
<div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>
<div className="relative py-6 sm:py-8">
<div className="flex gap-4 sm:gap-5 will-change-transform animate-[marquee-ltr_45s_linear_infinite]">
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e0bbf4a4-5f58-4644-bea6-85d2fef73d4a_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Ava Thompson</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@ava_builds</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">Smart Connect took minutes to wire into our stack and saved days of setup. The DX is top‑tier.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/27a2c31e-38f3-479f-a831-858e91b9bd84_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Noah Patel</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@noah_ops</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">We shipped our analytics revamp 3× faster. The defaults are sensible and secure out of the box.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/86a541ae-1b5d-4597-8538-e55c0858f4ff_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Maya Kim</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@mayak</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">The platform feels invisible—just fast, reliable pipelines and clean reporting.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Ethan Garcia</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@egarcia</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">Observability baked in. We finally trust our metrics for decision‑making.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Ava Thompson</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@ava_builds</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">Smart Connect took minutes to wire into our stack and saved days of setup. The DX is top‑tier.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Noah Patel</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@noah_ops</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">We shipped our analytics revamp 3× faster. The defaults are sensible and secure out of the box.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Maya Kim</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@mayak</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">The platform feels invisible—just fast, reliable pipelines and clean reporting.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Ethan Garcia</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@egarcia</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">Observability baked in. We finally trust our metrics for decision‑making.</p>
</article>
</div>
</div>
<div className="border-t border-zinc-900/80"></div>
<div className="relative py-6 sm:py-8">
<div className="flex gap-4 sm:gap-5 will-change-transform animate-[marquee-rtl_45s_linear_infinite]">
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-zinc-900/40 border-zinc-900 border rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/358aaa92-ba50-4778-b2a2-7c8f7310e44c_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Priya Singh</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@priya_dev</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">The automation suite trimmed our runbooks by half. The UI stays out of the way and just works.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-zinc-900/40 border-zinc-900 border rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b6d79211-32f1-430e-96b3-9b4d857c1482_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Leo Martin</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@leom</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">Enterprise SSO, audit logs, and usage analytics—without extra integration work. Huge win.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-zinc-900/40 border-zinc-900 border rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ec17a2e2-e4f4-4164-b631-fe640a0c1_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Sofia Alvarez</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@sofialabs</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">From local dev to prod parity with one connection. Best onboarding we’ve had in years.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c0aab170-b3d3-4816-9435-0ac1e1d853a3_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Jackson Lee</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@jacksonlee</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">Clean API, helpful docs, and thoughtful error messages. It’s the small things.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/480fa0bd-ee9a-4aa1-8f7a-5307cc4541f5_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Priya Singh</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@priya_dev</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">The automation suite trimmed our runbooks by half. The UI stays out of the way and just works.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e0bbf4a4-5f58-4644-bea6-85d2fef73d4a_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Leo Martin</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@leom</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">Enterprise SSO, audit logs, and usage analytics—without extra integration work. Huge win.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/27a2c31e-38f3-479f-a831-858e91b9bd84_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Sofia Alvarez</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@sofialabs</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">From local dev to prod parity with one connection. Best onboarding we’ve had in years.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b6d79211-32f1-430e-96b3-9b4d857c1482_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Jackson Lee</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@jacksonlee</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">Clean API, helpful docs, and thoughtful error messages. It’s the small things.</p>
</article>
</div>
</div>
</div>
<style>
    @keyframes marquee-rtl {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes marquee-ltr {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    @media (prefers-reduced-motion: reduce) {
      .animate-\[marquee-rtl_45s_linear_infinite\],
      .animate-\[marquee-ltr_45s_linear_infinite\] {
        animation: none !important;
      }
    }
  </style>
</div>
</div>
</section>

<section className="py-14 border-t border-orange-200 dark:border-neutral-800" id="faq">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-6">
<h2 className="text-[28px] md:text-[32px] tracking-tight font-bricolage font-semibold text-stone-900 dark:text-stone-50">Frequently asked questions</h2>
<p className="mt-1 text-[14px] text-stone-600 dark:text-stone-400">Quick answers to common questions.</p>
</div>
<div className="grid md:grid-cols-2 gap-4">
<details className="group rounded-lg border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-[15px] font-medium text-stone-900 dark:text-stone-100">How much does it cost to post a project?</span>
<span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-md border border-orange-200 bg-white text-stone-700 group-open:rotate-45 transition">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
</span>
</summary>
<p className="mt-3 text-[14px] text-stone-700 dark:text-stone-300">It’s free for homeowners. There’s no obligation to hire.</p>
</details>
<details className="group rounded-lg border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-[15px] font-medium text-stone-900 dark:text-stone-100">How are contractors vetted?</span>
<span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-md border border-orange-200 bg-white text-stone-700 group-open:rotate-45 transition">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
</span>
</summary>
<p className="mt-3 text-[14px] text-stone-700 dark:text-stone-300">We check licensing, insurance, and recent references. Ongoing performance and reviews are monitored.</p>
</details>
<details className="group rounded-lg border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-[15px] font-medium text-stone-900 dark:text-stone-100">How quickly will I receive bids?</span>
<span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-md border border-orange-200 bg-white text-stone-700 group-open:rotate-45 transition">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
</span>
</summary>
<p className="mt-3 text-[14px] text-stone-700 dark:text-stone-300">Most projects receive 2–4 introductions within 24–48 hours depending on scope and location.</p>
</details>
<details className="group rounded-lg border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-[15px] font-medium text-stone-900 dark:text-stone-100">Do you serve my area?</span>
<span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-md border border-orange-200 bg-white text-stone-700 group-open:rotate-45 transition">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
</span>
</summary>
<p className="mt-3 text-[14px] text-stone-700 dark:text-stone-300">We currently serve Orange, Los Angeles, Riverside/San Bernardino, Ventura, and Santa Barbara counties.</p>
</details>
</div>
</div>
</section>

<footer className="border-t border-orange-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md border border-orange-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 inline-flex items-center justify-center text-red-600">
<span className="text-[12px] font-semibold tracking-tight">CA</span>
</div>
<span className="text-[15px] font-medium tracking-tight">Contractors Advantage</span>
</div>
<p className="mt-3 text-[13px] text-stone-600 dark:text-stone-400">Vetted local pros. Comparable bids. Hire with confidence.</p>
</div>
<div>
<p className="text-[13px] font-semibold text-stone-800 dark:text-stone-200">For homeowners</p>
<ul className="mt-2 space-y-1 text-[13px]">
<li><a className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100" href="#get-started">Post a project</a></li>
<li><a className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100" href="#steps">How it works</a></li>
<li><a className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100" href="#testimonials">Testimonials</a></li>
</ul>
</div>
<div>
<p className="text-[13px] font-semibold text-stone-800 dark:text-stone-200">For contractors</p>
<ul className="mt-2 space-y-1 text-[13px]">
<li><a className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100" href="#contractors">Join the network</a></li>
<li><a className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100" href="#demo-dashboard">Portal preview</a></li>
</ul>
</div>
<div>
<p className="text-[13px] font-semibold text-stone-800 dark:text-stone-200">Company</p>
<ul className="mt-2 space-y-1 text-[13px]">
<li><a className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100" href="#faq">FAQs</a></li>
<li><a className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100" href="#">Privacy</a></li>
<li><a className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-orange-200 dark:border-neutral-800 pt-4">
<p className="text-[12px] text-stone-500">© <span id="year">2025</span> Contractors Advantage. All rights reserved.</p>
<p className="text-[12px] text-stone-500">Disclaimer: Contractors Advantage introduces homeowners to independent contractors and is not the contractor of record. Always verify license and insurance; we do not guarantee pricing or workmanship.</p>
</div>
</div>
</footer>

<div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 hidden" id="toast">
<div className="rounded-md bg-stone-900 text-white text-[13px] px-4 py-2 shadow-lg shadow-black/20">
        Thanks! We’ll be in touch shortly.
      </div>
</div>

<style>
      @keyframes glowShift { 0% { background-position: 0% 50%; } 100% { background-position: 400% 50%; } }
      .glow-anim { animation: glowShift 6s linear infinite; }
    </style>


    </>
  );
}
