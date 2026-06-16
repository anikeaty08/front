import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

    /* -------- Utility to hide pricing -------- */
    function hidePricing() {
      document.getElementById('pricing').classList.add('hidden');
    }

    /* -------- Service cards -------- */
    const services = {
      australia: [
        { icon: 'credit-card', label: 'Bank Account', partner: 'NAB, CommBank' },
        { icon: 'heart',    label: 'Health Insurance', partner: 'nib, Bupa' },
        { icon: 'phone',    label: 'SIM Card',         partner: 'Lebara' },
        { icon: 'home',     label: 'Accommodation',    partner: 'UniAcco, Amber, Casita, University Living' }
      ],
      uk: [
        { icon: 'credit-card', label: 'Bank Account', partner: 'Yonder, LemFi, NewDay' },
        { icon: 'heart',    label: 'Health Insurance', partner: 'Marshmallow' },
        { icon: 'phone',    label: 'SIM Card',         partner: 'Lebara' },
        { icon: 'home',     label: 'Accommodation',    partner: 'UniAcco, Amber, Casita, University Living' }
      ],
      germany: [
        { icon: 'credit-card', label: 'Bank Account & Blocked Account', partner: 'Expatrio Bank Account, Expatrio Blocked Account' },
        { icon: 'heart',    label: 'Health Insurance', partner: 'Expatrio' },
        { icon: 'phone',    label: 'SIM Card',         partner: 'Lebara' },
        { icon: 'home',     label: 'Accommodation',    partner: 'UniAcco, Amber, Casita, University Living' }
      ]
    };

    /* -------- Pricing data -------- */
    const pricingData = {
      NAB: {
        heading: 'Apply online in less than five minutes!',
        bullets: [
          'Easy access to your money everyday',
          'No Monthly Account Fee & Zero ATM Fee',
          'Grow your savings faster with bonus interest for regular deposits'
        ],
        cta: 'Get Started'
      },
      CommBank: {
        heading: 'Join 8.5 million people in Australia using the CommBank!',
        bullets: [
          '$0 monthly account fee',
          'Shop now, pay later with StepPay',
          'Exclusive access to Travel Booking'
        ],
        cta: 'Open Now'
      },
      nib: {
        heading: 'Stay protected, Stay worry-free.',
        bullets: [
          'Overseas Student Health Cover',
          'Doctors Specialists and Emergency Ambulance',
          'Access to in-hospital cover'
        ],
        cta: 'Get a quote'
      },
      Bupa: {
        heading: 'Good health is contagious. Catch more of it with Bupa.',
        bullets: [
          'Low out-of-pocket treatments',
          'Easy claims online or in-person',
          'Extensive hospital and extras networks'
        ],
        cta: 'Get a quote'
      },
      Lebara: {
        heading: 'Roam Free in 36 Countries',
        bullets: [
          'No Credit Checks',
          'EU Roaming Included',
          'Change or Cancel your plan anytime'
        ],
        cta: 'Explore Plans'
      },
      UniAcco: {
        heading: 'Find the Accommodation of your dreams!',
        bullets: [
          '20M+ Users | 70K+ Bookings | 10K+ Properties | 700+ Cities',
          '24x7 Expert Assistance',
          'Price-Match Guarantee',
          'Exclusive Offers'
        ],
        cta: 'Find Your Perfect Home!'
      },
      Amber: {
        heading: 'Home away from home!',
        bullets: [
          '1Mn+ Beds | 800+ Universities | 250+ Global Cities',
          'Instant & Easy Bookings',
          '100% Verified Listings',
          'Lowest Price Guarantee'
        ],
        cta: 'book your room now with amber!'
      },
      Casita: {
        heading: 'Find your Student Home in 3 Steps!',
        bullets: [
          '1 Mn+ Rooms | 60+ Countries | 400+ Cities',
          'Student Friendly Accommodation',
          '100% Low Price Guarantee',
          '100% Complete Security'
        ],
        cta: 'View Rooms'
      },
      'University Living': {
        heading: 'Need help to find the right accommodation? We can do for you.',
        bullets: [
          '100% verified properties',
          'Price Match Guarantee',
          '360° view of property',
          'Live chat assistance'
        ],
        cta: 'Start Booking'
      },
      Yonder: {
        heading: 'Our Free Credit Card, at a glance!',
        bullets: [
          '1 point for every £1 spent',
          'No fees on spend abroad',
          'Up to £10,000 in credit'
        ],
        cta: 'Sign up for free'
      },
      LemFi: {
        heading: 'Free GBP account for you!',
        bullets: [
          'Open a free account',
          'Send to Over 20 Countries',
          'No hidden fees - Enjoy 100% transparency'
        ],
        cta: 'Get Started'
      },
      NewDay: {
        heading: 'Enabling access to Credit!',
        bullets: [
          'Flexible, scalable credit solutions',
          'Faster, and Responsible access to credit',
          'Empower your everyday financial freedom'
        ],
        cta: 'Get Started'
      },
      Expatrio: {
        heading: 'Public and Private Health Insurance',
        bullets: [
          'Free Travel Health Insurance worth up to €953',
          'Comprehensive coverage incl. live doctor chat',
          'Get instant confirmation and free benefits'
        ],
        cta: 'Get Health Insurance'
      },
      'Expatrio Bank Account': {
        heading: 'Study Hard, Bank Easy!',
        bullets: [
          'Free German Bank Account for your life in Germany.',
          'No German residence permit needed',
          'Free digital Mastercard with €100,000 protection'
        ],
        cta: 'Open Bank Account'
      },
      'Expatrio Blocked Account': {
        heading: 'Convenient, trustworthy, fully digital!',
        bullets: [
          'Get your German visa faster with Expatrio’s quick & trusted Blocked Account.',
          'Accepted by German authorities.',
          'Fully Online, Fast, Affordable.'
        ],
        cta: 'Open Blocked Account'
      }
    };

    /* -------- Country / services rendering -------- */
    function selectCountry(country) {
      hidePricing();
      const grid = document.getElementById('servicesGrid');
      grid.innerHTML = '';
      services[country].forEach(s => {
        const card = document.createElement('div');
        card.className = 'p-8 border border-slate-200 rounded-xl hover:shadow transition flex flex-col gap-4';
        card.innerHTML = `
          <div class="flex items-center justify-center h-12 w-12 bg-orange-100 rounded-full">
            <i data-lucide="${s.icon}" class="w-6 h-6 text-orange-500"></i>
          </div>
          <h3 class="text-lg font-semibold tracking-tight">${s.label}</h3>
          <p class="text-sm text-slate-600">Partner${s.partner.includes(',') ? 's' : ''}: ${s.partner}</p>
          <button onclick="renderPricing('${s.partner}')" class="mt-auto inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 text-sm font-medium">
            Learn more
            <i data-lucide="arrow-right" class="w-4 h-4 stroke-1.5"></i>
          </button>
        `;
        grid.appendChild(card);
      });
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      document.querySelectorAll('.country-btn').forEach(btn => btn.classList.remove('ring-2','ring-orange-500'));
      document.querySelector(`.country-btn:nth-child(${country === 'australia' ? 1 : country === 'uk' ? 2 : 3})`).classList.add('ring-2','ring-orange-500');
    }

    /* -------- Pricing rendering -------- */
    function renderPricing(partnerStr) {
      const pricingSection = document.getElementById('pricing');
      const plansEl = document.getElementById('pricingPlans');
      pricingSection.classList.remove('hidden');
      plansEl.innerHTML = '';

      const partners = partnerStr.split(/[,&]+/).map(p => p.trim()).filter(Boolean);

      partners.forEach(name => {
        const data = pricingData[name];
        if (!data) return;

        const card = document.createElement('div');
        card.className = 'border border-slate-200 rounded-2xl p-8 flex flex-col w-[320px]';
        card.innerHTML = `
          <h3 class="text-lg font-semibold tracking-tight mb-2">${name}</h3>
          <p class="text-base text-slate-700 mb-6">${data.heading}</p>
          <ul class="space-y-3 text-sm text-slate-600 flex-1">
            ${data.bullets.map(b => `
              <li class="flex items-start gap-2">
                <i data-lucide="check" class="w-4 h-4 text-orange-500 stroke-[3] mt-0.5"></i>
                <span>${b}</span>
              </li>
            `).join('')}
          </ul>
          <a href="#" class="mt-8 inline-flex justify-center items-center bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-md text-sm font-medium transition">${data.cta}</a>
        `;
        plansEl.appendChild(card);
      });

      if (!plansEl.children.length) {
        plansEl.innerHTML = '<p class="col-span-full text-center text-slate-600">Pricing unavailable for this partner.</p>';
      }

      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }

    /* -------- Initial load -------- */
    selectCountry('australia');
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-30 backdrop-blur bg-white/80">
<div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
<a className="text-2xl font-semibold tracking-tight text-orange-500" href="#">Zolve</a>
<nav className="hidden sm:flex space-x-6">
<a className="text-sm font-medium hover:text-orange-500" href="#destinations">Destinations</a>
<a className="text-sm font-medium hover:text-orange-500" href="#testimonials">Stories</a>
<a className="text-sm font-medium hover:text-orange-500" href="#pricing">Pricing</a>
</nav>
<button className="sm:hidden" onclick="document.getElementById('mobileNav').classList.toggle('hidden')">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
<div className="hidden sm:hidden px-4 pb-4" id="mobileNav">
<a className="block py-2 text-sm font-medium hover:text-orange-500" href="#destinations">Destinations</a>
<a className="block py-2 text-sm font-medium hover:text-orange-500" href="#testimonials">Stories</a>
<a className="block py-2 text-sm font-medium hover:text-orange-500" href="#pricing">Pricing</a>
</div>
</header>

<section className="relative isolate overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row items-center gap-14">
<div className="max-w-xl">
<h1 className="text-4xl sm:text-5xl tracking-tight font-semibold mb-6">
          Settle abroad seamlessly.
        </h1>
<p className="text-base sm:text-lg leading-relaxed mb-8 text-slate-600">
          Zolve connects you with bank accounts, health insurance, SIM cards and student housing partners in Australia, the UK and Germany — before you even land.
        </p>
<div className="flex gap-3">
<a className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-md text-sm font-medium shadow transition-colors" href="#destinations">
            Explore Services
            <i className="w-4 h-4 stroke-1.5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 border border-orange-500 hover:border-orange-400 text-orange-500 px-6 py-3 rounded-md text-sm font-medium transition-colors" href="#pricing">
            See Pricing
          </a>
</div>
</div>
<div className="relative w-full max-w-md">
<img alt="Group of international students" className="w-full rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;w=1080&amp;q=80"/>
<div className="pointer-events-none absolute -inset-10 -z-10 bg-orange-500/30 opacity-30 blur-3xl rounded-full"></div>
</div>
</div>
</section>

<div className="border-t border-slate-200"></div>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="destinations">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-center mb-14">
      Choose your study destination
    </h2>
<div className="flex justify-center gap-4 mb-10">
<button className="country-btn bg-orange-100 border border-orange-200 text-orange-600 hover:bg-orange-200 px-5 py-2 rounded-md text-sm font-medium transition" onclick="selectCountry('australia')">Australia</button>
<button className="country-btn bg-orange-100 border border-orange-200 text-orange-600 hover:bg-orange-200 px-5 py-2 rounded-md text-sm font-medium transition" onclick="selectCountry('uk')">United Kingdom</button>
<button className="country-btn bg-orange-100 border border-orange-200 text-orange-600 hover:bg-orange-200 px-5 py-2 rounded-md text-sm font-medium transition" onclick="selectCountry('germany')">Germany</button>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" id="servicesGrid"></div>
</section>

<section className="hidden scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" id="pricing">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-center mb-16">Transparent pricing</h2>
<div className="flex flex-wrap gap-8 justify-center" id="pricingPlans"></div>
</section>

<section className="bg-white py-24" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-center mb-16">What students say</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
<div className="border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col">
<p className="text-base leading-relaxed text-slate-700 mb-6">
            “Zolve made opening my Australian bank account effortless. I landed with everything sorted—highly recommend!”
          </p>
<div className="flex items-center gap-4 mt-auto">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<div>
<p className="text-sm font-semibold tracking-tight">Aisha R.</p>
<p className="text-xs text-slate-500">UNSW, Sydney</p>
</div>
</div>
</div>
<div className="border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col">
<p className="text-base leading-relaxed text-slate-700 mb-6">
            “From SIM cards to housing, everything was booked before I arrived in London. Zolve saved me a ton of time.”
          </p>
<div className="flex items-center gap-4 mt-auto">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div>
<p className="text-sm font-semibold tracking-tight">Marcus D.</p>
<p className="text-xs text-slate-500">King’s College, London</p>
</div>
</div>
</div>
<div className="border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col">
<p className="text-base leading-relaxed text-slate-700 mb-6">
            “I was nervous about healthcare in Germany, but Zolve connected me with an insurance partner in minutes.”
          </p>
<div className="flex items-center gap-4 mt-auto">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/45.jpg"/>
<div>
<p className="text-sm font-semibold tracking-tight">Lina K.</p>
<p className="text-xs text-slate-500">TU Berlin</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200 py-10 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
<p className="text-sm text-slate-500">© 2024 Zolve Inc.</p>
<div className="flex gap-5">
<a href="#"><i className="w-5 h-5 text-slate-600 hover:text-orange-500 transition" data-lucide="twitter"></i></a>
<a href="#"><i className="w-5 h-5 text-slate-600 hover:text-orange-500 transition" data-lucide="github"></i></a>
<a href="#"><i className="w-5 h-5 text-slate-600 hover:text-orange-500 transition" data-lucide="linkedin"></i></a>
</div>
</div>
</footer>


    </>
  );
}
