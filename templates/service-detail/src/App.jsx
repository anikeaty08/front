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



{
"@context": "https://schema.org",
"@type": "HVACBusiness",
"name": "AirWorks Solutions",
"image": "https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1200&q=80",
"url": "https://www.airworks.example",
"telephone": "(805) 555-0134",
"priceRange": "$$",
"address": {
"@type": "PostalAddress",
"addressLocality": "Camarillo",
"addressRegion": "CA",
"postalCode": "93010",
"addressCountry": "US"
},
"areaServed": [
{"@type":"City","name":"Ventura"},
{"@type":"City","name":"Camarillo"},
{"@type":"City","name":"Oxnard"},
{"@type":"City","name":"Thousand Oaks"},
{"@type":"City","name":"Sacramento"}
],
"openingHoursSpecification": [{
"@type":"OpeningHoursSpecification",
"dayOfWeek":[ "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ],
"opens":"07:00","closes":"18:00"
}],
"aggregateRating": {
"@type": "AggregateRating",
"ratingValue": "4.9",
"reviewCount": "152"
},
"sameAs": [
"https://www.facebook.com/airworks.example",
"https://www.instagram.com/airworks.example"
]
}



{
"@context":"https://schema.org",
"@type":"Service",
"serviceType":"HVAC Repair & Installation",
"provider":{"@type":"HVACBusiness","name":"AirWorks Solutions"},
"areaServed":[
{"@type":"City","name":"Ventura"},
{"@type":"City","name":"Sacramento"}
],
"brand":{"@type":"Brand","name":"Multiple leading brands"},
"offers":{"@type":"Offer","priceCurrency":"USD","price":"0","description":"Free estimate"},
"hasMerchantReturnPolicy":{"@type":"MerchantReturnPolicy","returnPolicyCategory":"https://schema.org/MerchantReturnFiniteReturnWindow"}
}



{
"@context":"https://schema.org",
"@type":"BreadcrumbList",
"itemListElement":[
{"@type":"ListItem","position":1,"name":"Home","item":"https://www.airworks.example"},
{"@type":"ListItem","position":2,"name":"HVAC Services","item":"https://www.airworks.example/hvac"},
{"@type":"ListItem","position":3,"name":"HVAC Repair & Installation — Ventura & Sacramento","item":"https://www.airworks.example/hvac-repair-installation/ventura-sacramento"}
]
}



{
"@context":"https://schema.org",
"@type":"FAQPage",
"mainEntity":[
{"@type":"Question","name":"How long does AC installation take?","acceptedAnswer":{"@type":"Answer","text":"Most standard replacements take a single day. Complex installs or ductwork modifications may take 1–2 days."}},
{"@type":"Question","name":"Do you handle permits and inspections?","acceptedAnswer":{"@type":"Answer","text":"Yes. We pull required city permits and coordinate inspections on your behalf."}},
{"@type":"Question","name":"What size AC do I need?","acceptedAnswer":{"@type":"Answer","text":"We perform Manual J load calculations and consider insulation, windows, and sun exposure to right-size your system."}},
{"@type":"Question","name":"What warranties are available?","acceptedAnswer":{"@type":"Answer","text":"Manufacturer parts warranties plus our workmanship coverage. We'll register the equipment for you."}},
{"@type":"Question","name":"What causes my AC to blow warm air?","acceptedAnswer":{"@type":"Answer","text":"Several issues can cause warm air, including low refrigerant, a dirty air filter, or a compressor problem. Our technicians can quickly diagnose and fix the problem."}},
{"@type":"Question","name":"How often should I service my HVAC system?","acceptedAnswer":{"@type":"Answer","text":"Service your HVAC system twice a year—spring for cooling and fall for heating. Regular maintenance helps prevent breakdowns and extends equipment life."}},
{"@type":"Question","name":"Will replacing an old system reduce my energy bill?","acceptedAnswer":{"@type":"Answer","text":"Yes. Modern HVAC systems are significantly more efficient than older models. Upgrading to a high‑efficiency system can lead to substantial energy savings."}}
]
}



{
"@context":"https://schema.org",
"@type":"HowTo",
"name":"Our HVAC Process",
"step":[
{"@type":"HowToStep","name":"Consultation & Inspection","text":"We start with a thorough inspection to diagnose the problem accurately."},
{"@type":"HowToStep","name":"Diagnosis, Report & Quote","text":"You receive a detailed report and transparent, upfront pricing."},
{"@type":"HowToStep","name":"Repair or Replacement","text":"Certified technicians complete the work efficiently using quality parts and equipment."},
{"@type":"HowToStep","name":"Testing & Calibration","text":"We test and calibrate your system to peak performance."},
{"@type":"HowToStep","name":"Customer Walkthrough & Maintenance Options","text":"We review the work completed and share maintenance plan options."}
]
}



{
"@context":"https://schema.org",
"@type":"WebSite",
"url":"https://www.airworks.example",
"potentialAction":{
"@type":"SearchAction",
"target":"https://www.airworks.example/search?q={search_term_string}",
"query-input":"required name=search_term_string"
}
}



  // Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden', isOpen ? true : false);
      mobileBtn.setAttribute('aria-expanded', (!isOpen).toString());
    });
  }

  // Quick request form
  const quickForm = document.getElementById('quickRequestForm');
  if (quickForm) {
    quickForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('qrName').value.trim();
      const phone = document.getElementById('qrPhone').value.trim();
      if (!name || !phone) {
        alert('Please enter your name and phone.');
        return;
      }
      alert('Thanks! We will call you shortly.');
      quickForm.reset();
    });
  }

  // Quote form
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('qName').value.trim();
      const phone = document.getElementById('qPhone').value.trim();
      if (!name || !phone) {
        alert('Please provide at least your name and phone.');
        return;
      }
      alert('Your request has been received. A specialist will contact you shortly.');
      quoteForm.reset();
    });
  }

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('cName').value.trim();
      const phone = document.getElementById('cPhone').value.trim();
      if (!name || !phone) {
        alert('Please provide your name and phone number.');
        return;
      }
      alert('Message sent! We will reach out shortly.');
      contactForm.reset();
    });
  }

  // AI Assistant minimal behavior (minimize/dismiss)
  const aiCard = document.getElementById('aiCard');
  const aiMinimizeBtn = document.getElementById('aiMinimize');
  const aiDismissBtn = document.getElementById('aiDismiss');
  const aiMinimized = document.getElementById('aiMinimized');

  if (aiMinimizeBtn && aiMinimized && aiCard) {
    aiMinimizeBtn.addEventListener('click', () => {
      aiCard.classList.add('hidden');
      aiMinimized.classList.remove('hidden');
      aiMinimized.classList.add('inline-flex');
    });
  }

  if (aiDismissBtn && aiCard) {
    aiDismissBtn.addEventListener('click', () => {
      aiCard.parentElement.classList.add('hidden');
    });
  }

  if (aiMinimized) {
    aiMinimized.addEventListener('click', () => {
      aiMinimized.classList.add('hidden');
      aiCard.classList.remove('hidden');
    });
  }

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
      

<div className="bg-slate-50 border-slate-200 border-b">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm pt-2 pb-2 gap-3 gap-x-3 gap-y-3 py-1 sm:py-2 gap-2 sm:gap-3 gap-y-1 sm:gap-y-3">
<div className="flex items-center gap-2 sm:gap-3 text-slate-600 w-full sm:w-auto overflow-x-auto whitespace-nowrap" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>
<span className="inline-flex items-center gap-1.5 font-sans" style={{}}>
<svg className="lucide lucide-map-pin w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
      Ventura &amp; Sacramento, CA
    </span>
<span className="hidden sm:inline text-slate-300 font-sans" style={{}}>|</span>
<span className="inline-flex items-center gap-1.5 font-sans" style={{}}>
<svg className="lucide lucide-clock w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
      Mon–Sat: 7:00a–6:00p
    </span>
<span className="hidden sm:inline text-slate-300 font-sans" style={{}}>|</span>
<span className="hidden md:inline-flex items-center gap-1.5 font-sans" style={{}}>
<svg className="lucide lucide-badge-check w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
      Licensed • Bonded • Insured
    </span>
</div>
<div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
<a className="hidden sm:inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-900 transition-colors font-sans" href="#financing" style={{}}>
<svg className="lucide lucide-wallet w-4 h-4" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
      Financing available
    </a>
<a className="inline-flex items-center gap-1.5 text-slate-900 font-medium hover:opacity-80 whitespace-nowrap font-sans" href="tel:18055550134" style={{}}>
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
      (805) 555-0134
    </a>
</div>
</div>
</div>
</div>

<header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">
<a aria-label="AirWorks Solutions Home" className="flex items-center gap-3 group" href="#">
<div className="w-9 h-9 rounded-md bg-slate-900 text-white grid place-items-center tracking-tighter text-[13px] font-semibold group-hover:ring-2 group-hover:ring-slate-900/10 transition font-sans" style={{}}>
              AWS
            </div>
<div className="flex flex-col leading-tight">
<span className="text-[15px] font-semibold text-slate-900 tracking-tight">AirWorks Solutions</span>
<span className="text-[11px] text-slate-500 tracking-tight font-sans" style={{}}>Heating • Cooling • IAQ</span>
</div>
</a>
<nav className="hidden lg:flex items-center gap-7 text-[15px]">
<a className="text-slate-700 hover:text-slate-900 transition-colors font-sans" href="#" style={{}}>Heating</a>
<a className="hover:text-slate-900 transition-colors text-slate-700" href="/service-detail">Air Conditioning</a>
<a className="text-slate-700 hover:text-slate-900 transition-colors font-sans" href="#" style={{}}>Ductless</a>
<a className="text-slate-700 hover:text-slate-900 transition-colors font-sans" href="#" style={{}}>Indoor Air Quality</a>
<a className="text-slate-700 hover:text-slate-900 transition-colors font-sans" href="#financing" style={{}}>Financing</a>
<a className="text-slate-700 hover:text-slate-900 transition-colors font-sans" href="#reviews" style={{}}>Reviews</a>
<a className="text-slate-700 hover:text-slate-900 transition-colors font-sans" href="#faq" style={{}}>FAQ</a>
</nav>
<div className="hidden lg:flex items-center gap-3">
<a className="inline-flex items-center gap-2 h-10 px-4 rounded-md border border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10 font-sans" href="tel:18055550134" style={{}}>
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
              Call
            </a>
<a className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 font-sans" href="#quote" style={{}}>
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Get a Free Quote
            </a>
</div>
<button aria-controls="mobileMenu" aria-expanded="false" aria-label="Open menu" className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="lg:hidden hidden border-t border-slate-200 bg-white" id="mobileMenu">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid gap-2">
<a className="py-2 text-slate-700 hover:text-slate-900 font-sans" href="#" style={{}}>Heating</a>
<a className="py-2 text-slate-700 hover:text-slate-900 font-sans" href="#" style={{}}>Air Conditioning</a>
<a className="py-2 text-slate-700 hover:text-slate-900 font-sans" href="#" style={{}}>Ductless</a>
<a className="py-2 text-slate-700 hover:text-slate-900 font-sans" href="#" style={{}}>Indoor Air Quality</a>
<a className="py-2 text-slate-700 hover:text-slate-900 font-sans" href="#financing" style={{}}>Financing</a>
<a className="py-2 text-slate-700 hover:text-slate-900 font-sans" href="#reviews" style={{}}>Reviews</a>
<a className="py-2 text-slate-700 hover:text-slate-900 font-sans" href="#faq" style={{}}>FAQ</a>
<div className="pt-2 flex gap-2">
<a className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md border border-slate-300 text-slate-800 hover:bg-slate-50 font-sans" href="tel:18055550134" style={{}}>Call</a>
<a className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md bg-slate-900 text-white hover:bg-slate-800 font-sans" href="#quote" style={{}}>Free Quote</a>
</div>
</div>
</div>
</header>

<nav aria-label="Breadcrumb" className="border-slate-200 border-b" data-ai-section="breadcrumb">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col md:flex-row md:items-center md:justify-between">
</div>
</div>
</nav>

<div className="text-white bg-gradient-to-r from-slate-900 to-slate-800 border-slate-700 border-b">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
<div className="flex items-start gap-3">
<div className="flex-shrink-0 mt-0.5">
<div className="w-8 h-8 rounded-md bg-white/10 grid place-items-center">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
</div>
<div className="flex-1 min-w-0">

<div className="flex items-center justify-between gap-2 mb-1">
<div className="min-w-0 flex items-center gap-2">
<span className="text-xs font-medium text-white/60 uppercase tracking-wide font-sans" style={{}}>AI Summary</span>
<span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-sans" style={{}}>
<svg className="lucide lucide-check-circle w-3.5 h-3.5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
              Verified
            </span>
<span className="hidden sm:inline text-white/50 font-sans" style={{}}>•</span>
<span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-white/70 font-sans" style={{}}>
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Ventura &amp; Sacramento
            </span>
</div>

<details className="md:hidden group select-none">
<summary className="list-none inline-flex items-center gap-1.5 text-xs text-white/70 cursor-pointer font-sans" style={{}}>
              Details
              <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>

<div className="mt-3 grid gap-3 text-[13px]">
<p className="leading-relaxed text-white/90 font-sans" style={{}}>
                provides professional HVAC repair and installation services across Ventura and Sacramento regions. Their NATE-certified technicians handle everything from emergency AC repairs to complete system replacements with transparent, upfront pricing. They offer same-day diagnostics, flexible financing options, and manage all permits and inspections. With a 4.9/5 rating from 152+ reviews, customers praise their professionalism, efficiency, and quality workmanship. Free estimates available.
              </p>
<div className="flex flex-wrap items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1.5 text-white/70 font-sans" style={{}}>
<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                  4.9/5 (152 reviews)
                </span>
<span className="inline-flex items-center gap-1.5 text-white/70 font-sans" style={{}}>
<svg className="lucide lucide-badge-check w-3.5 h-3.5" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
                  Licensed &amp; Insured
                </span>
<span className="inline-flex items-center gap-1.5 text-white/70 font-sans" style={{}}>
<svg className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  Same-day service
                </span>
</div>
<div className="flex items-center flex-wrap gap-2">
<span className="text-xs font-medium uppercase text-white/60 font-sans" style={{}}>I need</span>
<a className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20 transition font-sans" href="#services" style={{}}>Repair</a>
<a className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20 transition font-sans" href="#services" style={{}}>Installation</a>
<a className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20 transition font-sans" href="#services" style={{}}>Tune‑Up</a>
<a className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20 transition font-sans" href="tel:18055550134" style={{}}>Emergency</a>
</div>
</div>
</details>
</div>

<div className="md:hidden text-[13px] text-white/80">
<span className="inline-flex items-center gap-1.5 mr-3 font-sans" style={{}}>
<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
            4.9/5
          </span>
<span className="inline-flex items-center gap-1.5 mr-3 font-sans" style={{}}>
<svg className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
            Same‑day
          </span>
<span className="inline-flex items-center gap-1.5 font-sans" style={{}}>
<svg className="lucide lucide-badge-check w-3.5 h-3.5" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
            Free estimates
          </span>
</div>

<p className="hidden md:block text-sm leading-relaxed text-white/90 mt-1 font-sans" style={{}}>
          provides professional HVAC repair and installation services across Ventura and Sacramento regions. Their NATE-certified technicians handle everything from emergency AC repairs to complete system replacements with transparent, upfront pricing. They offer same-day diagnostics, flexible financing options, and manage all permits and inspections. With a 4.9/5 rating from 152+ reviews, customers praise their professionalism, efficiency, and quality workmanship. Free estimates available.
        </p>

<div className="hidden md:flex mt-3 flex-wrap items-center gap-3 text-xs">
<span className="inline-flex items-center gap-1.5 text-white/70 font-sans" style={{}}>
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            Ventura &amp; Sacramento
          </span>
<span className="inline-flex items-center gap-1.5 text-white/70 font-sans" style={{}}>
<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
            4.9/5 (152 reviews)
          </span>
<span className="inline-flex items-center gap-1.5 text-white/70 font-sans" style={{}}>
<svg className="lucide lucide-badge-check w-3.5 h-3.5" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
            Licensed &amp; Insured
          </span>
<span className="inline-flex items-center gap-1.5 text-white/70 font-sans" style={{}}>
<svg className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
            Same-day service
          </span>
</div>

<div className="mt-3 grid gap-3">

<div className="hidden md:flex items-center flex-wrap gap-2">
<span className="text-xs font-medium uppercase text-white/60 font-sans" style={{}}>I need</span>
<a className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20 transition font-sans" href="#services" style={{}}>Repair</a>
<a className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20 transition font-sans" href="#services" style={{}}>Installation</a>
<a className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20 transition font-sans" href="#services" style={{}}>Tune‑Up</a>
<a className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20 transition font-sans" href="tel:18055550134" style={{}}>Emergency</a>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-2">
<a className="inline-flex items-center justify-center gap-2 h-9 sm:h-10 px-3 sm:px-4 rounded-md bg-white text-slate-900 hover:bg-white/90 transition text-[13px] sm:text-sm font-medium font-sans" href="#quote" style={{}}>
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Get a Free Quote
            </a>
<a className="inline-flex items-center justify-center gap-2 h-9 sm:h-10 px-3 sm:px-4 rounded-md border border-white/20 text-white hover:bg-white/10 transition text-[13px] sm:text-sm font-medium font-sans" href="tel:18055550134" style={{}}>
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
              Call Now
            </a>
<a className="hidden sm:inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md border border-white/20 text-white hover:bg-white/10 transition text-sm font-medium font-sans" href="#aiAssistant" style={{}}>
<svg className="lucide lucide-bot w-4 h-4" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0  24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
              Ask the Assistant
            </a>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 z-50 transition-all duration-300 ease-out" id="aiAssistant">

<div className="w-80 rounded-xl border border-slate-200 bg-white shadow-lg transition-all duration-300" id="aiCard">

<div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
<div className="flex items-center gap-2">
<div className="relative">
<svg className="lucide lucide-bot w-5 h-5 text-slate-900" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full animate-pulse" id="aiPulse"></span>
</div>
<span className="text-sm font-medium text-slate-900 font-sans" style={{}}>AI Assistant</span>
</div>
<div className="flex items-center gap-1">
<button aria-label="Minimize assistant" className="h-7 w-7 inline-flex items-center justify-center rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-50" id="aiMinimize">
<svg className="lucide lucide-minimize-2 w-4 h-4" data-lucide="minimize-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m14 10 7-7"></path><path d="M20 10h-6V4"></path><path d="m3 21 7-7"></path><path d="M4 14h6v6"></path></svg>
</button>
<button aria-label="Dismiss assistant" className="h-7 w-7 inline-flex items-center justify-center rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-50" id="aiDismiss">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>

<div className="px-4 py-3 max-h-64 overflow-y-auto" id="aiMessageArea">
<div className="text-sm text-slate-700 font-sans" id="aiMessage" style={{}}>Great! First—where are you located?</div>
</div>

<div className="px-4 py-3 border-t border-slate-200 flex flex-col gap-2" id="aiActions"><button className="w-full inline-flex items-center justify-between gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50" type="button"><span>Ventura / VC</span><svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button><button className="w-full inline-flex items-center justify-between gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50" type="button"><span>Sacramento Area</span><svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button></div>

<div className="px-4 py-2 border-t border-slate-200" id="aiProgress">
<div className="flex items-center gap-2 text-xs text-slate-600">
<div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-900 transition-all duration-500" id="aiProgressBar" style={{width: '0%'}}></div>
</div>
<span className="font-sans" id="aiProgressText" style={{}}>0%</span>
</div>
</div>
</div>

<button className="hidden w-14 h-14 rounded-full bg-slate-900 text-white shadow-lg hover:bg-slate-800 transition-all items-center justify-center group" id="aiMinimized">
<svg className="lucide lucide-bot w-6 h-6" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<span className="hidden absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-xs rounded-full items-center justify-center font-medium font-sans" id="aiNotificationBadge" style={{}}>1</span>
</button>
</div>

<section className="relative mt-40 mb-8">
<div className="sm:p-8 sm:mb-0 sm:mt--32 mt--4 mb-0 pt-6 pr-6 pb-6 pl-6 relative">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
<div className="">
<h1 className="sm:text-5xl lg:text-6xl text-4xl text-slate-900 tracking-tight font-instrument-serif" style={{}}>
        Your Comfort, Our Priority — Reliable Heating, Cooling &amp; Plumbing Solutions
      </h1>
<p className="mt-4 text-base sm:text-lg text-slate-700 font-sans" style={{}}>
        From emergency repairs to full system installations, we deliver fast, affordable, and professional service — backed by a satisfaction guarantee.
      </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium bg-slate-900 text-white hover:bg-slate-800" href="#contact" style={{}}>
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
          Request Service Now
        </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium border border-slate-300 text-slate-900 hover:bg-slate-50 bg-white" href="#quote" style={{}}>
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
          Get a Free Estimate
        </a>
</div>
<div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3 text-sm">
<div className="inline-flex items-center gap-1.5 text-slate-800">
<div className="inline-flex">
<svg className="lucide lucide-star w-4 h-4 text-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-slate-700" style={{}}>4.9 Rating on Google</span>
</div>
<span className="hidden sm:inline text-slate-300" style={{}}>•</span>
<div className="text-slate-700" style={{}}>Trusted by over 600 homeowners and businesses in your area.</div>
</div>

<div className="mt-6">
<div className="rounded-xl border border-slate-200 bg-white/80 backdrop-blur p-4 sm:p-5 shadow-sm">
<div className="flex items-center justify-between gap-2">
<div className="text-[15px] font-medium text-slate-900 tracking-tight font-sans" style={{}}>Get a callback in 15 minutes</div>
<div className="inline-flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded">
<svg className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
              Fast response
            </div>
</div>
<form className="mt-3 grid sm:grid-cols-[1fr_1fr_auto] gap-2" id="quickRequestForm" novalidate="">
<div className="relative">
<span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
<svg className="lucide lucide-user w-4 h-4" data-lucide="user" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</span>
<input className="h-11 w-full rounded-lg border border-slate-300 bg-white pl-10 pr-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:ring-slate-900" id="qrName" placeholder="Full name" type="text"/>
</div>
<div className="relative">
<span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</span>
<input className="h-11 w-full rounded-lg border border-slate-300 bg-white pl-10 pr-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:ring-slate-900" id="qrPhone" placeholder="Phone" type="tel"/>
</div>
<button className="h-11 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 px-4 whitespace-nowrap" type="submit">
<svg className="lucide lucide-phone-call w-4 h-4" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.05 5A5 5 0 0 1 19 8.95"></path><path d="M15.5 1A9 9 0 0 1 23 8.5"></path><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.72 2h3a2 2 0 0 1 2 1.72c.12.89.37 1.76.72 2.58a2 2 0 0 1-.45 2.11L9 9a16 16 0 0 0 6 6l.59-.49a2 2 0 0 1 2.11-.45c.83.35 1.7.6 2.59.72a2 2 0 0 1 1.71 2.14z"></path></svg>
              Call me back
            </button>
</form>
<div className="mt-2 text-xs text-slate-600">We’ll text to confirm before we call. No spam.</div>
</div>
</div>
</div>
<div className="relative">
<div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm">
<img alt="Technician servicing HVAC and plumbing systems" className="w-full h-80 sm:h-[28rem] object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
<div className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs backdrop-blur border bg-white/70 text-slate-800 border-white/30" style={{}}>
<svg className="lucide lucide-badge-check w-4 h-4" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
            Licensed • Bonded • Insured
          </div>
</div>
</div>
</div>
</div>
</div><section className="border-t border-slate-200 bg-white">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="max-w-3xl">
<h2 className="text-3xl tracking-tight text-slate-900 font-instrument-serif" style={{}}>What We Do</h2>
<p className="mt-3 text-slate-700 font-sans text-lg" style={{}}>
        We’re your one-stop solution for all things heating, air conditioning, plumbing, and indoor air quality. Whether it’s routine maintenance, urgent repairs, or a complete system replacement, our licensed experts have you covered.
      </p>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
<div className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-sm transition">
<div className="flex items-center gap-2">
<svg className="lucide lucide-wind w-5 h-5 text-slate-900" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
<h3 className="text-base font-sans font-medium text-slate-900 tracking-tight" style={{}}>Air Conditioning</h3>
</div>
<p className="mt-2 text-sm text-slate-600" style={{}}>Stay cool with expert AC installation, repair, and tune-ups.</p>
<div className="mt-3 flex items-center justify-between text-xs text-slate-600">
<span>Same‑day slots</span>
<a className="inline-flex items-center gap-1.5 text-slate-900 hover:text-slate-700" href="#quote">
            Book now
            <svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-sm transition">
<div className="flex items-center gap-2">
<svg <path="" d="M12 2c2.5 2.5 4 5 4 8a4 4 0 0 1-8 0c0-1.5.5-3 1.5-4.5-3 2-5.5 5.5-5.5 9.5a8 8 0 0 0 16 0c0-3.5-1.7-6.5-4-9z" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<h3 className="text-base font-sans font-medium text-slate-900 tracking-tight" style={{}}>Heating &amp; Furnaces</h3>
</div>
<p className="mt-2 text-sm text-slate-600" style={{}}>Furnace and heat pump repair, replacement, and tune-ups to keep you warm.</p>
<div className="mt-3 flex items-center justify-between text-xs text-slate-600">
<span>Certified technicians</span>
<a className="inline-flex items-center gap-1.5 text-slate-900 hover:text-slate-700" href="#quote">
            Book now
            <svg className="w-3.5 h-3.5" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-sm transition">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-slate-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"></path><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"></path><path d="M7 3v3"></path><path d="M17 3v3"></path></svg>
<h3 className="text-base font-sans font-medium text-slate-900 tracking-tight" style={{}}>Plumbing</h3>
</div>
<p className="mt-2 text-sm text-slate-600" style={{}}>Leak repairs, water heaters, drain cleaning, and fixture installs done right.</p>
<div className="mt-3 flex items-center justify-between text-xs text-slate-600">
<span>Upfront pricing</span>
<a className="inline-flex items-center gap-1.5 text-slate-900 hover:text-slate-700" href="#quote">
            Book now
            <svg className="w-3.5 h-3.5" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-sm transition">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-slate-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><rect height="12" rx="2" width="12" x="6" y="6"></rect><path d="M9 10h6"></path><path d="M9 14h4"></path></svg>
<h3 className="text-base font-sans font-medium text-slate-900 tracking-tight" style={{}}>Ductless Mini‑Splits</h3>
</div>
<p className="mt-2 text-sm text-slate-600" style={{}}>Efficient zone comfort with sleek, whisper‑quiet systems for any space.</p>
<div className="mt-3 flex items-center justify-between text-xs text-slate-600">
<span>Rebates available</span>
<a className="inline-flex items-center gap-1.5 text-slate-900 hover:text-slate-700" href="#quote">
            Book now
            <svg className="w-3.5 h-3.5" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-sm transition">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-slate-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h20"></path><path d="M5 8h14"></path><path d="M8 4h8"></path><path d="M6 16h12"></path><path d="M9 20h6"></path></svg>
<h3 className="text-base font-sans font-medium text-slate-900 tracking-tight" style={{}}>Indoor Air Quality</h3>
</div>
<p className="mt-2 text-sm text-slate-600" style={{}}>Air purifiers, UV lights, filters, and humidity control for healthier homes.</p>
<div className="mt-3 flex items-center justify-between text-xs text-slate-600">
<span>Allergy‑friendly</span>
<a className="inline-flex items-center gap-1.5 text-slate-900 hover:text-slate-700" href="#quote">
            Book now
            <svg className="w-3.5 h-3.5" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-sm transition">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-slate-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="18" x="3" y="4"></rect><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M7 12h5"></path><path d="M7 16h10"></path></svg>
<h3 className="text-base font-sans font-medium text-slate-900 tracking-tight" style={{}}>Maintenance Plans</h3>
</div>
<p className="mt-2 text-sm text-slate-600" style={{}}>Seasonal tune‑ups, priority scheduling, and member‑only discounts.</p>
<div className="mt-3 flex items-center justify-between text-xs text-slate-600">
<span>Save on repairs</span>
<a className="inline-flex items-center gap-1.5 text-slate-900 hover:text-slate-700" href="#quote">
            Book now
            <svg className="w-3.5 h-3.5" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="max-w-3xl">
<h2 className="text-3xl tracking-tight text-slate-900 font-instrument-serif">How it works</h2>
<p className="mt-3 text-slate-700 font-sans text-lg">A simple, transparent process that gets your system running fast.</p>
</div>
<ol className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-5">
<li className="group relative rounded-xl bg-white border border-slate-200 p-5 hover:shadow-sm transition">
<div className="flex items-center justify-between">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-medium">1</span>
<span className="text-xs text-slate-500">Consultation</span>
</div>
<p className="mt-3 text-sm text-slate-700">Schedule a visit. We inspect and diagnose thoroughly.</p>
</li>
<li className="group relative rounded-xl bg-white border border-slate-200 p-5 hover:shadow-sm transition">
<div className="flex items-center justify-between">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-medium">2</span>
<span className="text-xs text-slate-500">Quote</span>
</div>
<p className="mt-3 text-sm text-slate-700">Get a clear report with upfront options and pricing.</p>
</li>
<li className="group relative rounded-xl bg-white border border-slate-200 p-5 hover:shadow-sm transition">
<div className="flex items-center justify-between">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-medium">3</span>
<span className="text-xs text-slate-500">Repair/Install</span>
</div>
<p className="mt-3 text-sm text-slate-700">Certified techs complete the work with quality parts.</p>
</li>
<li className="group relative rounded-xl bg-white border border-slate-200 p-5 hover:shadow-sm transition">
<div className="flex items-center justify-between">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-medium">4</span>
<span className="text-xs text-slate-500">Test</span>
</div>
<p className="mt-3 text-sm text-slate-700">We test, calibrate, and optimize performance.</p>
</li>
<li className="group relative rounded-xl bg-white border border-slate-200 p-5 hover:shadow-sm transition">
<div className="flex items-center justify-between">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-medium">5</span>
<span className="text-xs text-slate-500">Walkthrough</span>
</div>
<p className="mt-3 text-sm text-slate-700">Final walkthrough and maintenance plan options.</p>
</li>
</ol>
<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800" href="#quote">
        Start Your Request
        <svg className="w-3.5 h-3.5" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-white" id="financing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div>
<h2 className="text-3xl tracking-tight text-slate-900 font-instrument-serif">Flexible financing that fits your budget</h2>
<p className="mt-3 text-slate-700 text-lg">Upgrade now and pay over time. We offer multiple financing options with quick approvals.</p>
<ul className="mt-5 grid gap-2 text-slate-700">
<li className="inline-flex items-center gap-2"><span className="inline-grid place-items-center h-5 w-5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">✓</span> 0% APR promotional plans for qualified customers</li>
<li className="inline-flex items-center gap-2"><span className="inline-grid place-items-center h-5 w-5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">✓</span> Fast decisions, no home equity required</li>
<li className="inline-flex items-center gap-2"><span className="inline-grid place-items-center h-5 w-5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">✓</span> Low monthly payments and no prepayment penalties</li>
</ul>
<p className="mt-3 text-xs text-slate-500">Subject to credit approval. Terms and conditions apply.</p>
<div className="mt-5 flex gap-2">
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800" href="#quote">See payment options</a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm text-slate-900 hover:bg-slate-50" href="tel:18055550134">Ask a specialist</a>
</div>
</div>
<div>
<div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6">
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-slate-600">Estimate your monthly payment</div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight mt-1">$38–$96/mo</div>
<div className="text-xs text-slate-500 mt-1">Based on common system price ranges</div>
</div>
<div className="h-16 w-16 rounded-full bg-slate-900/90 text-white grid place-items-center">
              $0
              <span className="block text-[10px] -mt-1">Down</span>
</div>
</div>
<div className="mt-5 grid sm:grid-cols-3 gap-3">
<div className="rounded-lg border border-slate-200 bg-white p-3">
<div className="text-xs text-slate-500">Term</div>
<div className="font-medium text-slate-900">36–72 mo</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-3">
<div className="text-xs text-slate-500">APR</div>
<div className="font-medium text-slate-900">0%–9.99%</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-3">
<div className="text-xs text-slate-500">Decision</div>
<div className="font-medium text-slate-900">Minutes</div>
</div>
</div>
<a className="mt-6 inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800" href="#quote">Apply with your estimate</a>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-3xl tracking-tight text-slate-900 font-instrument-serif">Customers love our work</h2>
<p className="mt-3 text-slate-700 text-lg">4.9/5 average from 152+ verified reviews.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm text-slate-900 hover:bg-white" href="#quote">Get a free estimate</a>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-5">
<figure className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
<figcaption className="flex items-center justify-between">
<div className="font-medium text-slate-900">Marissa L.</div>
<div className="flex text-amber-500">
<span>★★★★★</span>
</div>
</figcaption>
<blockquote className="mt-3 text-sm text-slate-700">They replaced our AC in a day and left the place spotless. Upfront quote and great communication.</blockquote>
<div className="mt-3 text-xs text-slate-500">Ventura, CA</div>
</figure>
<figure className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
<figcaption className="flex items-center justify-between">
<div className="font-medium text-slate-900">David R.</div>
<div className="flex text-amber-500"><span>★★★★★</span></div>
</figcaption>
<blockquote className="mt-3 text-sm text-slate-700">Late‑night heater issue solved quickly. Tech was professional and explained everything.</blockquote>
<div className="mt-3 text-xs text-slate-500">Sacramento, CA</div>
</figure>
<figure className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
<figcaption className="flex items-center justify-between">
<div className="font-medium text-slate-900">The Park Co.</div>
<div className="flex text-amber-500"><span>★★★★★</span></div>
</figcaption>
<blockquote className="mt-3 text-sm text-slate-700">Signed up for maintenance across our rentals—smoother seasons and fewer emergencies.</blockquote>
<div className="mt-3 text-xs text-slate-500">Property Management</div>
</figure>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<h2 className="text-3xl tracking-tight text-slate-900 font-instrument-serif">Credentials you can trust</h2>
<p className="mt-3 text-slate-700 text-lg">Our team brings top certifications and a proven track record to every job.</p>
<ul className="mt-5 grid gap-2 text-slate-700">
<li className="inline-flex items-center gap-2"><span className="inline-grid place-items-center h-5 w-5 rounded-full bg-slate-100 text-slate-900 border border-slate-300">✓</span> NATE‑certified technicians</li>
<li className="inline-flex items-center gap-2"><span className="inline-grid place-items-center h-5 w-5 rounded-full bg-slate-100 text-slate-900 border border-slate-300">✓</span> EPA 608 certified</li>
<li className="inline-flex items-center gap-2"><span className="inline-grid place-items-center h-5 w-5 rounded-full bg-slate-100 text-slate-900 border border-slate-300">✓</span> Licensed • Bonded • Insured</li>
<li className="inline-flex items-center gap-2"><span className="inline-grid place-items-center h-5 w-5 rounded-full bg-slate-100 text-slate-900 border border-slate-300">✓</span> Background‑checked &amp; uniformed</li>
</ul>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="rounded-lg border border-slate-200 p-4 grid place-items-center text-slate-600">NATE</div>
<div className="rounded-lg border border-slate-200 p-4 grid place-items-center text-slate-600">EPA</div>
<div className="rounded-lg border border-slate-200 p-4 grid place-items-center text-slate-600">EnergyStar</div>
<div className="rounded-lg border border-slate-200 p-4 grid place-items-center text-slate-600">BBB A+</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="quote">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="max-w-3xl">
<h2 className="text-3xl tracking-tight text-slate-900 font-instrument-serif">Get your free estimate</h2>
<p className="mt-3 text-slate-700 text-lg">Tell us a bit about your project and we’ll follow up right away.</p>
</div>
<form className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm" id="quoteForm" novalidate="">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-800" htmlFor="qName">Full name</label>
<input autocomplete="name" className="mt-1 h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:ring-slate-900" id="qName" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-800" htmlFor="qPhone">Phone</label>
<input autocomplete="tel" className="mt-1 h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:ring-slate-900" id="qPhone" name="phone" placeholder="(805) 555‑0134" required="" type="tel"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-800" htmlFor="qEmail">Email</label>
<input autocomplete="email" className="mt-1 h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:ring-slate-900" id="qEmail" name="email" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-800" htmlFor="qCity">City</label>
<select className="mt-1 h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-slate-900 focus:border-slate-900 focus:ring-slate-900" id="qCity" name="city">
<option>Ventura</option>
<option>Camarillo</option>
<option>Oxnard</option>
<option>Thousand Oaks</option>
<option>Sacramento</option>
<option>Other</option>
</select>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-800" htmlFor="qService">Service needed</label>
<select className="mt-1 h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-slate-900 focus:border-slate-900 focus:ring-slate-900" id="qService" name="service">
<option>AC Repair</option>
<option>AC Installation</option>
<option>Heating Repair</option>
<option>Heating Installation</option>
<option>Ductless Mini‑Split</option>
<option>Plumbing</option>
<option>Maintenance/Tune‑Up</option>
<option>Indoor Air Quality</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-slate-800" htmlFor="qWhen">Preferred timing</label>
<select className="mt-1 h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-slate-900 focus:border-slate-900 focus:ring-slate-900" id="qWhen" name="timing">
<option>ASAP</option>
<option>This week</option>
<option>Within 2 weeks</option>
<option>Just getting estimates</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-800" htmlFor="qDetails">Project details</label>
<textarea className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:ring-slate-900" id="qDetails" name="details" placeholder="Describe the issue or project..." rows="4"></textarea>
</div>
<div className="sm:flex sm:items-center sm:justify-between">
<p className="text-xs text-slate-600">By submitting, you agree to our terms and consent to receive communications. We never sell your data.</p>
<div className="mt-3 sm:mt-0 flex gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800" type="submit">
            Get my free quote
          </button>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm text-slate-900 hover:bg-slate-50" href="tel:18055550134">Or call now</a>
</div>
</div>
</form>
</div>
</section>

<section className="border-t border-slate-200 bg-white" id="faq">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="max-w-3xl">
<h2 className="text-3xl tracking-tight text-slate-900 font-instrument-serif">Frequently asked questions</h2>
<p className="mt-3 text-slate-700 text-lg">Quick answers to common questions. Don’t see yours? Call us anytime.</p>
</div>
<div className="mt-8 grid lg:grid-cols-2 gap-5">
<details className="group rounded-xl border border-slate-200 p-5 open:bg-slate-50">
<summary className="flex cursor-pointer items-center justify-between gap-2 text-slate-900 font-medium">
          How long does AC installation take?
          <span className="ml-2 text-slate-500 group-open:rotate-180 transition-transform">⌄</span>
</summary>
<p className="mt-3 text-sm text-slate-700">Most standard replacements take a single day. Complex installs or ductwork modifications may take 1–2 days.</p>
</details>
<details className="group rounded-xl border border-slate-200 p-5 open:bg-slate-50">
<summary className="flex cursor-pointer items-center justify-between gap-2 text-slate-900 font-medium">
          Do you handle permits and inspections?
          <span className="ml-2 text-slate-500 group-open:rotate-180 transition-transform">⌄</span>
</summary>
<p className="mt-3 text-sm text-slate-700">Yes. We pull required city permits and coordinate inspections on your behalf.</p>
</details>
<details className="group rounded-xl border border-slate-200 p-5 open:bg-slate-50">
<summary className="flex cursor-pointer items-center justify-between gap-2 text-slate-900 font-medium">
          What size AC do I need?
          <span className="ml-2 text-slate-500 group-open:rotate-180 transition-transform">⌄</span>
</summary>
<p className="mt-3 text-sm text-slate-700">We perform Manual J load calculations and consider insulation, windows, and sun exposure to right-size your system.</p>
</details>
<details className="group rounded-xl border border-slate-200 p-5 open:bg-slate-50">
<summary className="flex cursor-pointer items-center justify-between gap-2 text-slate-900 font-medium">
          What warranties are available?
          <span className="ml-2 text-slate-500 group-open:rotate-180 transition-transform">⌄</span>
</summary>
<p className="mt-3 text-sm text-slate-700">Manufacturer parts warranties plus our workmanship coverage. We'll register the equipment for you.</p>
</details>
<details className="group rounded-xl border border-slate-200 p-5 open:bg-slate-50">
<summary className="flex cursor-pointer items-center justify-between gap-2 text-slate-900 font-medium">
          What causes my AC to blow warm air?
          <span className="ml-2 text-slate-500 group-open:rotate-180 transition-transform">⌄</span>
</summary>
<p className="mt-3 text-sm text-slate-700">Several issues can cause warm air, including low refrigerant, a dirty air filter, or a compressor problem. Our technicians can quickly diagnose and fix the problem.</p>
</details>
<details className="group rounded-xl border border-slate-200 p-5 open:bg-slate-50">
<summary className="flex cursor-pointer items-center justify-between gap-2 text-slate-900 font-medium">
          How often should I service my HVAC system?
          <span className="ml-2 text-slate-500 group-open:rotate-180 transition-transform">⌄</span>
</summary>
<p className="mt-3 text-sm text-slate-700">Service your HVAC system twice a year—spring for cooling and fall for heating. Regular maintenance helps prevent breakdowns and extends equipment life.</p>
</details>
<details className="group rounded-xl border border-slate-200 p-5 open:bg-slate-50 lg:col-span-2">
<summary className="flex cursor-pointer items-center justify-between gap-2 text-slate-900 font-medium">
          Will replacing an old system reduce my energy bill?
          <span className="ml-2 text-slate-500 group-open:rotate-180 transition-transform">⌄</span>
</summary>
<p className="mt-3 text-sm text-slate-700">Yes. Modern HVAC systems are significantly more efficient than older models. Upgrading to a high‑efficiency system can lead to substantial energy savings.</p>
</details>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-1">
<h2 className="text-3xl tracking-tight text-slate-900 font-instrument-serif">Contact us</h2>
<p className="mt-3 text-slate-700 text-lg">Call, text, or send a request—our team is ready to help.</p>
<div className="mt-6 grid gap-3 text-sm text-slate-700">
<a className="inline-flex items-center gap-2 hover:text-slate-900" href="tel:18055550134">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
            (805) 555‑0134
          </a>
<span className="inline-flex items-center gap-2">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            Ventura &amp; Sacramento, CA
          </span>
<span className="inline-flex items-center gap-2">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
            Mon–Sat: 7:00a–6:00p
          </span>
</div>
<div className="mt-6 rounded-lg border border-slate-200 bg-white p-4">
<div className="text-sm font-medium text-slate-900">Prefer text?</div>
<p className="text-sm text-slate-600 mt-1">Text us at the same number and we’ll reply ASAP.</p>
</div>
</div>
<div className="lg:col-span-2">
<form className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm" id="contactForm" novalidate="">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-800" htmlFor="cName">Full name</label>
<input className="mt-1 h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:ring-slate-900" id="cName" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-800" htmlFor="cPhone">Phone</label>
<input className="mt-1 h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:ring-slate-900" id="cPhone" placeholder="(805) 555‑0134" required="" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-800" htmlFor="cMsg">How can we help?</label>
<textarea className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:ring-slate-900" id="cMsg" placeholder="Briefly describe your issue or project..." rows="4"></textarea>
</div>
<div className="sm:flex sm:items-center sm:justify-between">
<div className="text-xs text-slate-600">We’ll confirm your details and schedule the next steps.</div>
<button className="mt-3 sm:mt-0 inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800" type="submit">Send message</button>
</div>
</form>
</div>
</div>
</div>
</section>

<div aria-live="polite" className="fixed inset-x-0 bottom-0 z-40">
<div className="mx-auto max-w-7xl">
<div className="m-3 rounded-xl border border-slate-200 bg-white/95 backdrop-blur shadow-lg px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white grid place-items-center text-xs">AWS</div>
<div className="text-sm">
<div className="font-medium text-slate-900">Need help now?</div>
<div className="text-slate-600">Fast scheduling • Free estimates</div>
</div>
</div>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 hover:bg-slate-50" href="tel:18055550134">Call</a>
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-sm text-white hover:bg-slate-800" href="#quote">Get a Quote</a>
</div>
</div>
</div>
</div>

<footer className="border-t border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-md bg-slate-900 text-white grid place-items-center text-[13px] font-semibold">AWS</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900">AirWorks Solutions</span>
<span className="text-xs text-slate-500">Heating • Cooling • IAQ</span>
</div>
</div>
<p className="mt-3 text-sm text-slate-600">Serving Ventura County and Sacramento with reliable HVAC and plumbing services.</p>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Services</div>
<ul className="mt-3 grid gap-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900" href="#process">How it works</a></li>
<li><a className="hover:text-slate-900" href="#financing">Financing</a></li>
<li><a className="hover:text-slate-900" href="#reviews">Reviews</a></li>
<li><a className="hover:text-slate-900" href="#faq">FAQ</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Contact</div>
<ul className="mt-3 grid gap-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900" href="tel:18055550134">(805) 555‑0134</a></li>
<li>Mon–Sat: 7:00a–6:00p</li>
<li>Ventura &amp; Sacramento, CA</li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Get a quote</div>
<p className="mt-3 text-sm text-slate-600">Free, no‑obligation estimates for repairs and installs.</p>
<a className="mt-3 inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-sm text-white hover:bg-slate-800" href="#quote">Start now</a>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
<div>© <span id="year">2025</span> AirWorks Solutions. All rights reserved.</div>
<div className="flex items-center gap-3">
<a className="hover:text-slate-700" href="#">Privacy</a>
<span aria-hidden="true">•</span>
<a className="hover:text-slate-700" href="#">Terms</a>
</div>
</div>
</div>
</footer>


</section>
    </>
  );
}
