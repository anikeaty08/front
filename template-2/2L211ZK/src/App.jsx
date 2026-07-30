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
      
    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    const fadeElems=document.querySelectorAll('.fade-slide');
    fadeElems.forEach(el=>el.classList.add('opacity-0','translate-y-8','transition','duration-700','ease-out'));
    const io=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const el=entry.target;
          const delay=el.dataset.delay||0;
          el.style.transitionDelay=delay+'ms';
          el.classList.remove('opacity-0','translate-y-8');
          io.unobserve(el);
        }
      });
    },{threshold:0.15});
    fadeElems.forEach(el=>io.observe(el));
    function hidePricing(){document.getElementById('pricing').classList.add('hidden');}
    const services={australia:[{icon:'credit-card',label:'Bank Account',partner:'NAB, CommBank'},{icon:'heart',label:'Health Insurance',partner:'nib, Bupa'},{icon:'phone',label:'SIM Card',partner:'Lebara'},{icon:'home',label:'Accommodation',partner:'UniAcco, Amber, Casita, University Living'}],uk:[{icon:'credit-card',label:'Bank Account',partner:'Yonder, LemFi, NewDay'},{icon:'heart',label:'Health Insurance',partner:'Marshmallow'},{icon:'phone',label:'SIM Card',partner:'Lebara'},{icon:'home',label:'Accommodation',partner:'UniAcco, Amber, Casita, University Living'}],germany:[{icon:'credit-card',label:'Blocked Account',partner:'Expatrio Blocked Account'},{icon:'heart',label:'Health Insurance',partner:'Expatrio'},{icon:'phone',label:'SIM Card',partner:'Lebara'},{icon:'home',label:'Accommodation',partner:'UniAcco, Amber, Casita, University Living'}]};
    const pricingData={NAB:{heading:'Apply online in less than five minutes!',bullets:['Easy access to your money everyday','No monthly account fee and no minimum monthly deposits','No ATM withdrawal fee at over 4,000 ATMs across Australia','A NAB Visa Debit card for all your everyday spending','Grow your savings faster with bonus interest for regular deposits'],cta:'Get Started'},CommBank:{heading:'Open your CommBank account online up to 14 days before you arrive in Australia',bullets:['$0 monthly account fee for Students & Under-30s','Simple Activation - Show your Passport & Visa at any branch to get started','Receive International Money Transfers and get paid as soon as you arrive','Multilingual support in-branch and online','Cardless Cash, Apple Pay, and Google Pay support'],cta:'Open Now'},nib:{heading:'Stay protected, Stay worry-free.',bullets:['Overseas Student Health Cover','Doctors Specialists and Emergency Ambulance','Access to in-hospital cover'],cta:'Get a quote'},Bupa:{heading:'Good health is contagious. Catch more of it with Bupa.',bullets:['Low out-of-pocket treatments','Easy claims online or in-person','Extensive hospital and extras networks'],cta:'Get a quote'},Lebara:{heading:'Roam Free in 36 Countries',bullets:['No Credit Checks','EU Roaming Included','Change or Cancel your plan anytime'],cta:'Explore Plans'},UniAcco:{cta:'Book with UniAcco'},Amber:{cta:'Book with Amber'},Casita:{cta:'Book with Casita'},'University Living':{cta:'Book with University Living'},Yonder:{heading:'Our Free Credit Card, at a glance!',bullets:['1 point for every £1 spent','No fees on spend abroad','Up to £10,000 in credit'],cta:'Sign up for free'},LemFi:{heading:'Free GBP account for you!',bullets:['Open a free account','Send to Over 20 Countries','No hidden fees - Enjoy 100% transparency'],cta:'Get Started'},NewDay:{heading:'Enabling access to Credit!',bullets:['Flexible, scalable credit solutions','Faster, and Responsible access to credit','Empower your everyday financial freedom'],cta:'Get Started'},Expatrio:{heading:'Public and Private Health Insurance',bullets:['Free Travel Health Insurance worth up to €953','Comprehensive coverage incl. live doctor chat','Get instant confirmation and free benefits'],cta:'Get Health Insurance'},'Expatrio Blocked Account':{heading:'Convenient, trustworthy, fully digital!',bullets:['Accepted worldwide by German consulates as valid proof of funds.','Fully-digital application process with multilingual 24/7 support.','Bundled with free German Bank Account and immediate monthly allowance access.'],cta:'Open Blocked Account'}};
    const accommodationCommonBullets=['Wide range of verified properties across many countries and cities','24x7 expert assistance with live chat support','Price-match and lowest price guarantee','Student-friendly options for all needs','Instant and easy booking process'];
    function selectCountry(country){
      hidePricing();const grid=document.getElementById('servicesGrid');grid.innerHTML='';
      services[country].forEach(s=>{
        const card=document.createElement('div');card.className='p-8 border border-slate-200 rounded-xl hover:shadow transition flex flex-col gap-4 fade-slide';card.dataset.delay=50;
        const displayPartner=s.partner.replace('Blocked Account','').trim();
        card.innerHTML=`<div class="flex items-center justify-center h-12 w-12 bg-orange-100 rounded-full"><i data-lucide="${s.icon}" class="w-6 h-6 text-orange-500"></i></div><h3 class="text-lg font-semibold tracking-tight">${s.label}</h3><p class="text-sm text-slate-600">Partner${displayPartner.includes(',')?'s':''}: ${displayPartner}</p><button onclick="renderPricing('${s.partner}')" class="mt-auto inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 text-sm font-medium">Learn more<i data-lucide="arrow-right" class="w-4 h-4 stroke-1.5"></i></button>`;grid.appendChild(card);io.observe(card);
      });
      lucide.createIcons({attrs:{'stroke-width':1.5}});
      document.querySelectorAll('.country-btn').forEach(btn=>btn.classList.remove('ring-2','ring-orange-500'));
      document.querySelector(`.country-btn:nth-child(${country==='australia'?1:country==='uk'?2:3})`).classList.add('ring-2','ring-orange-500');
    }
    function renderPricing(partnerStr){
      const pricingSection=document.getElementById('pricing');const plansEl=document.getElementById('pricingPlans');pricingSection.classList.remove('hidden');plansEl.innerHTML='';
      const partners=partnerStr.split(/[,&]+/).map(p=>p.trim()).filter(Boolean);const isAccommodation=partners.some(n=>['UniAcco','Amber','Casita','University Living'].includes(n));
      if(isAccommodation){
        const card=document.createElement('div');card.className='border border-slate-200 rounded-2xl p-8 flex flex-col md:flex-row gap-10 w-full max-w-4xl fade-slide';card.dataset.delay=0;
        const buttonHTML=name=>{const data=pricingData[name]||{};return`<div class="flex flex-col items-center text-center"><p class="text-sm font-semibold tracking-tight mb-2">${name}</p><a href="#" class="inline-flex w-full h-10 items-center justify-center bg-orange-500 hover:bg-orange-400 text-white rounded-md text-xs font-medium transition">${data.cta||'Book Now'}</a></div>`};
        card.innerHTML=`
          <div class="flex flex-col items-start md:w-5/12">
            <img src="https://images.unsplash.com/photo-1560185127-6a8c48ffa2a6?auto=format&fit=crop&w=1080&q=80"
                 alt="Modern Student Accommodation" loading="lazy"
                 onerror="this.src='https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1080&q=80'"
                 class="w-full max-w-[320px] rounded-lg object-cover shadow-sm">
          </div>
          <div class="flex flex-col gap-6 md:w-7/12">
            <h3 class="text-lg font-semibold tracking-tight">Student Accommodation</h3>
            <ul class="space-y-3 text-sm text-slate-600 flex-1">
              ${accommodationCommonBullets.map(b=>`<li class="flex items-start gap-2"><i data-lucide="check" class="w-4 h-4 text-orange-500 stroke-[3] mt-0.5"></i><span>${b}</span></li>`).join('')}
            </ul>
            <div class="mt-6 grid grid-cols-2 gap-5">
              ${partners.map(name=>buttonHTML(name)).join('')}
            </div>
          </div>`;
        plansEl.appendChild(card);io.observe(card);
      }else{
        partners.forEach(name=>{
          const data=pricingData[name]||{};const title=name==='Expatrio Blocked Account'?'Expatrio':name;
          const card=document.createElement('div');card.className='border border-slate-200 rounded-2xl p-8 flex flex-col w-[320px] fade-slide';card.dataset.delay=0;
          card.innerHTML=`<h3 class="text-lg font-semibold tracking-tight mb-2">${title}</h3><p class="text-base text-slate-700 mb-6">${data.heading||''}</p><ul class="space-y-3 text-sm text-slate-600 flex-1">${(data.bullets||[]).map(b=>`<li class="flex items-start gap-2"><i data-lucide="check" class="w-4 h-4 text-orange-500 stroke-[3] mt-0.5"></i><span>${b}</span></li>`).join('')}</ul><a href="#" class="mt-8 inline-flex justify-center items-center bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-md text-sm font-medium transition">${data.cta||'Learn More'}</a>`;plansEl.appendChild(card);io.observe(card);
        });
      }
      lucide.createIcons({attrs:{'stroke-width':1.5}});pricingSection.scrollIntoView({behavior:'smooth'});
    }
    document.getElementById('exploreBtn').addEventListener('click',e=>{
      e.preventDefault();
      document.getElementById('destinations').scrollIntoView({behavior:'smooth'});
    });
    document.getElementById('seePricingBtn').addEventListener('click',e=>{
      e.preventDefault();
      document.getElementById('testimonials').scrollIntoView({behavior:'smooth'});
    });
    document.querySelectorAll('a.nav-link[href="#destinations"], a.nav-link[href="#testimonials"]').forEach(link=>{
      link.addEventListener('click',e=>{
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
        const mobileNav=document.getElementById('mobileNav');
        if(mobileNav && !mobileNav.classList.contains('hidden')) mobileNav.classList.add('hidden');
      });
    });
    selectCountry('australia');
  
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
      

<header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-slate-200 fade-slide" data-delay="0">
<div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
<a className="text-2xl font-semibold tracking-tight text-orange-500" href="#">Zolve</a>
<nav className="hidden sm:flex space-x-6">
<a className="nav-link text-sm font-medium hover:text-orange-500" href="#destinations">Destinations</a>
<a className="nav-link text-sm font-medium hover:text-orange-500" href="#testimonials">Stories</a>
<a className="text-sm font-medium hover:text-orange-500" href="#pricing">Pricing</a>
</nav>
<button className="sm:hidden" onClick={(e) => { document.getElementById('mobileNav').classList.toggle('hidden') }}>
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
<div className="hidden sm:hidden px-4 pb-4" id="mobileNav">
<a className="nav-link block py-2 text-sm font-medium hover:text-orange-500" href="#destinations">Destinations</a>
<a className="nav-link block py-2 text-sm font-medium hover:text-orange-500" href="#testimonials">Stories</a>
<a className="block py-2 text-sm font-medium hover:text-orange-500" href="#pricing">Pricing</a>
</div>
</header>

<section className="relative isolate overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row items-center gap-14">
<div className="max-w-xl fade-slide" data-delay="100">
<h1 className="text-4xl sm:text-5xl tracking-tight font-semibold mb-6">
          Settle abroad seamlessly.
        </h1>
<p className="text-base sm:text-lg leading-relaxed mb-8 text-slate-600">
          Zolve connects you with bank accounts, health insurance, SIM cards and student housing partners in Australia, the UK and Germany — before you even land.
        </p>
<div className="flex gap-3">
<a className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-md text-sm font-medium shadow transition-colors" href="#destinations" id="exploreBtn">
            Explore Services
            <i className="w-4 h-4 stroke-1.5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 border border-orange-500 hover:border-orange-400 text-orange-500 px-6 py-3 rounded-md text-sm font-medium transition-colors" href="#testimonials" id="seePricingBtn">
            Reviews
          </a>
</div>
</div>
<div className="relative w-full max-w-md fade-slide" data-delay="200">
<img alt="Group of international students" className="w-full rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1080&q=80" />
<div className="pointer-events-none absolute -inset-10 -z-10 bg-orange-500/30 opacity-30 blur-3xl rounded-full"></div>
</div>
</div>
</section>
<div className="border-t border-slate-200"></div>

<section className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="destinations">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-center mb-14 fade-slide" data-delay="0">
      Choose your study destination
    </h2>
<div className="flex justify-center gap-4 mb-10 fade-slide" data-delay="75">
<button className="country-btn bg-orange-100 border border-orange-200 text-orange-600 hover:bg-orange-200 px-5 py-2 rounded-md text-sm font-medium transition" onClick={(e) => { selectCountry('australia') }}>Australia</button>
<button className="country-btn bg-orange-100 border border-orange-200 text-orange-600 hover:bg-orange-200 px-5 py-2 rounded-md text-sm font-medium transition" onClick={(e) => { selectCountry('uk') }}>United Kingdom</button>
<button className="country-btn bg-orange-100 border border-200 text-orange-600 hover:bg-orange-200 px-5 py-2 rounded-md text-sm font-medium" onClick={(e) => { selectCountry('germany') }}>Germany</button>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" id="servicesGrid"></div>
</section>

<section className="hidden scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" id="pricing">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-center mb-16">Transparent pricing</h2>
<div className="flex flex-nowrap gap-8 justify-center overflow-x-auto" id="pricingPlans"></div>
</section>

<section className="bg-white py-24" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-center mb-16 fade-slide" data-delay="0">
        What students say
      </h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
<div className="border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col fade-slide" data-delay="50">
<p className="text-base leading-relaxed text-slate-700 mb-6">
            “Zolve made opening my Australian bank account effortless. I landed with everything sorted—highly recommend!”
          </p>
<div className="flex items-center gap-4 mt-auto">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/68.jpg" />
<div>
<p className="text-sm font-semibold tracking-tight">Aisha R.</p>
<p className="text-xs text-slate-500">UNSW, Sydney</p>
</div>
</div>
</div>
<div className="border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col fade-slide" data-delay="100">
<p className="text-base leading-relaxed text-slate-700 mb-6">
            “From SIM cards to housing, everything booked before I arrived in London. Zolve saved me a ton of time.”
          </p>
<div className="flex items-center gap-4 mt-auto">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg" />
<div>
<p className="text-sm font-semibold tracking-tight">Marcus D.</p>
<p className="text-xs text-slate-500">King’s College, London</p>
</div>
</div>
</div>
<div className="border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col fade-slide" data-delay="150">
<p className="text-base leading-relaxed text-slate-700 mb-6">
            “I was nervous about healthcare in Germany, but Zolve connected me with an insurance partner in minutes.”
          </p>
<div className="flex items-center gap-4 mt-auto">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/45.jpg" />
<div>
<p className="text-sm font-semibold tracking-tight">Lina K.</p>
<p className="text-xs text-slate-500">TU Berlin</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200 py-10 bg-white fade-slide" data-delay="0">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row-center justify-between gap-6">
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
