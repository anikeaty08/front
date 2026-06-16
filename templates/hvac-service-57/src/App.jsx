import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
document.addEventListener("DOMContentLoaded", () => {
function handleRoute() {
const hash = window.location.hash;
const allSections = document.querySelectorAll("main > section");
const maintenanceSection = document.getElementById("maintenance");
if (!maintenanceSection) return;
if (hash === "#maintenance") {
allSections.forEach(sec => sec.style.display = "none");
maintenanceSection.style.display = "block";
maintenanceSection.style.minHeight = "calc(100vh - 4rem)";
window.scrollTo(0, 0);
} else {
allSections.forEach(sec => sec.style.display = "");
maintenanceSection.style.display = "none";
if (hash && hash !== "#") {
const target = document.querySelector(hash);
if (target) setTimeout(() => {
window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
}, 10);
}
}
}
window.addEventListener("hashchange", handleRoute);
handleRoute();
});



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a aria-label="Home" className="flex items-center gap-2" href="#">
<span className="text-xl font-semibold tracking-tighter text-slate-900">
            AIRMECHANICS
          </span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-slate-900 transition-colors" href="#maintenance">
            Maintenance
          </a>
<a className="hover:text-slate-900 transition-colors" href="#commercial">
            Commercial
          </a>
<a className="hover:text-slate-900 transition-colors" href="#why-us">
            Why Us
          </a>
<a className="hover:text-slate-900 transition-colors" href="#reviews">
            Reviews
          </a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="tel:6138788381">
<iconify-icon icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
            613-878-8381
          </a>
<a className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm" href="https://clienthub.getjobber.com/hubs/bd7dc0fc-bd4f-4830-826b-5f2f7f44c802/public/requests/2763892/new" rel="noopener noreferrer" target="_blank">
            Book Now
          </a>
</div>
</div>
</header>
<main className="flex-grow pt-16">

<section className="bg-slate-900 text-white relative overflow-hidden py-24 sm:py-32">

<div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-slate-800/50 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-8 text-xs font-medium text-slate-300">
<div className="flex items-center text-yellow-400 gap-0.5">
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="w-px h-3 bg-slate-600 mx-1"></span>
            Trusted by 500+ Ottawa Homeowners
          </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white max-w-4xl mb-6 leading-tight">
            Fast, Reliable HVAC Service in Ottawa — Done Right the First Time
          </h1>
<p className="text-base sm:text-lg text-slate-400 max-w-2xl mb-10 font-normal leading-relaxed">
            24/7 emergency repairs, furnace &amp; AC installs, and expert
            service you can trust. Locally owned and operated in Ottawa.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-white text-slate-900 px-6 py-3 rounded-md text-sm font-medium flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors shadow-sm" href="https://clienthub.getjobber.com/hubs/bd7dc0fc-bd4f-4830-826b-5f2f7f44c802/public/requests/2763892/new" rel="noopener noreferrer" target="_blank">
              Book Service Now
              <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
              or
            </span>
<a className="w-full sm:w-auto bg-slate-800/80 text-white border border-slate-700 px-6 py-3 rounded-md text-sm font-medium flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors shadow-sm" href="tel:6138788381">
<iconify-icon icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Call Now
            </a>
</div>
<div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-slate-800 w-full max-w-3xl">
<div className="flex items-center justify-center gap-3 text-slate-300">
<iconify-icon className="text-xl text-slate-400" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium">Licensed &amp; Insured</span>
</div>
<div className="flex items-center justify-center gap-3 text-slate-300">
<iconify-icon className="text-xl text-slate-400" icon="solar:history-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium">15+ Years Experience</span>
</div>
<div className="flex items-center justify-center gap-3 text-slate-300">
<iconify-icon className="text-xl text-slate-400" icon="solar:medal-star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium">Workmanship Warranty</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-200/60" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
              Expert HVAC Ottawa Services
            </h2>
<p className="text-base text-slate-500 font-normal">
              Comprehensive heating, cooling, and ventilation solutions designed
              for Canadian weather.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group border border-slate-200 rounded-xl p-8 hover:border-slate-300 hover:shadow-sm transition-all bg-slate-50/50">
<div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-6 text-slate-900 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:fire-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">
                Furnace Repair &amp; Install
              </h3>
<p className="text-sm text-slate-500 mb-6 font-normal leading-relaxed">
                Stay warm with high-efficiency furnace installation Ottawa
                trusts, plus rapid diagnostics and repair for all makes.
              </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors" href="https://clienthub.getjobber.com/hubs/bd7dc0fc-bd4f-4830-826b-5f2f7f44c802/public/requests/2763892/new" rel="noopener noreferrer" target="_blank">
                Book Now
                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>

<div className="group border border-slate-200 rounded-xl p-8 hover:border-slate-300 hover:shadow-sm transition-all bg-slate-50/50">
<div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-6 text-slate-900 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:snowflake-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">
                AC Repair &amp; Install
              </h3>
<p className="text-sm text-slate-500 mb-6 font-normal leading-relaxed">
                Beat the summer heat. We provide full-service AC repair Ottawa
                residents rely on, along with premium central air upgrades.
              </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors" href="https://clienthub.getjobber.com/hubs/bd7dc0fc-bd4f-4830-826b-5f2f7f44c802/public/requests/2763892/new" rel="noopener noreferrer" target="_blank">
                Book Now
                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>

<div className="group border border-slate-200 rounded-xl p-8 hover:border-slate-300 hover:shadow-sm transition-all bg-slate-50/50">
<div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-6 text-slate-900 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">
                Maintenance Plans
              </h3>
<p className="text-sm text-slate-500 mb-6 font-normal leading-relaxed">
                Preventative care to extend equipment life, lower energy bills,
                and ensure peak performance year-round.
              </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors" href="#maintenance">
                View Plans
                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>

<div className="group border border-slate-200 rounded-xl p-8 hover:border-slate-300 hover:shadow-sm transition-all bg-slate-50/50 lg:col-span-3">
<div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
<div className="w-12 h-12 bg-red-50 border border-red-100 rounded-lg flex items-center justify-center text-red-600 shrink-0">
<iconify-icon className="text-2xl" icon="solar:alarm-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">
                    Emergency HVAC Service
                  </h3>
<p className="text-sm text-slate-500 mb-4 font-normal leading-relaxed">
                    No heat? AC failed? Our technicians are standing by 24/7 for
                    emergency HVAC Ottawa calls to restore your comfort
                    immediately.
                  </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors" href="tel:6138788381">
                    Call 613-878-8381 Now
                    <iconify-icon icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>

</div>
</div>
</section>
<section className="py-24 bg-slate-50 border-b border-slate-200/60" id="maintenance">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
              Maintenance Packages
            </h2>
<p className="text-base text-slate-500 font-normal">
              Keep your system running efficiently year-round with our homeowner
              maintenance plans.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<div className="border border-slate-200 rounded-xl p-8 bg-white hover:border-slate-300 hover:shadow-sm transition-all flex flex-col">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">
                Essential Care
              </h3>
<p className="text-sm text-slate-500 mb-6 font-normal">
                Perfect for seasonal tune-ups and basic reliability.
              </p>
<div className="text-3xl font-semibold text-slate-900 mb-6">
                $149
                <span className="text-sm text-slate-500 font-normal">/yr</span>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 text-lg mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Annual heating or cooling inspection
                </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 text-lg mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Filter replacement (standard 1")
                </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 text-lg mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  System safety check
                </li>
</ul>
<a className="w-full bg-slate-100 text-slate-900 px-6 py-3 rounded-md text-sm font-medium text-center hover:bg-slate-200 transition-colors" href="#quote">
                Select Plan
              </a>
</div>
<div className="border-2 border-slate-900 rounded-xl p-8 bg-white shadow-md flex flex-col relative">
<div className="absolute top-0 right-8 -translate-y-1/2 bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Most Popular
              </div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">
                Complete Comfort
              </h3>
<p className="text-sm text-slate-500 mb-6 font-normal">
                Comprehensive coverage for total peace of mind.
              </p>
<div className="text-3xl font-semibold text-slate-900 mb-6">
                $299
                <span className="text-sm text-slate-500 font-normal">/yr</span>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 text-lg mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Biannual inspections (Heating &amp; Cooling)
                </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 text-lg mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Filter replacements included
                </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 text-lg mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Priority emergency scheduling
                </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 text-lg mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  15% discount on parts and repairs
                </li>
</ul>
<a className="w-full bg-slate-900 text-white px-6 py-3 rounded-md text-sm font-medium text-center hover:bg-slate-800 transition-colors shadow-sm" href="#quote">
                Select Plan
              </a>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white border-b border-slate-200/60 relative overflow-hidden" id="commercial">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
                Commercial HVAC Solutions
              </h2>
<p className="text-base text-slate-500 font-normal mb-8 leading-relaxed">
                We understand that downtime costs your business money. Our
                commercial HVAC services are designed for reliability,
                efficiency, and rapid response. From rooftops to multi-zone
                systems, we've got your commercial property covered.
              </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-xl text-slate-400" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Retail &amp; Office Spaces
                </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-xl text-slate-400" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Warehouses &amp; Industrial
                </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-xl text-slate-400" icon="solar:shop-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Restaurants &amp; Hospitality
                </li>
</ul>
</div>
<div className="lg:w-1/2 w-full bg-slate-50 border border-slate-200 rounded-2xl p-10 text-center shadow-sm">
<div className="w-16 h-16 bg-white border border-slate-200 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-900 shadow-sm">
<iconify-icon className="text-3xl" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">
                Get a Commercial Quote
              </h3>
<p className="text-sm text-slate-500 mb-8 max-w-sm mx-auto">
                Every business has unique requirements. Call us directly to
                discuss your commercial HVAC needs and get a custom quote.
              </p>
<a className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-md text-base font-medium hover:bg-slate-800 transition-colors shadow-sm w-full sm:w-auto justify-center" href="tel:6138788381">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Call 613-878-8381
              </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="why-us">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mx-auto">
<div className="w-full flex flex-col items-center text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">
                Why Choose AIRMECHANICS
              </h2>
<p className="text-base text-slate-500 font-normal mb-10 leading-relaxed">
                We know that HVAC issues disrupt your life. That's why we've
                built our company around speed, transparency, and doing the job
                right the very first time. No shortcuts, just solid mechanics.
              </p>
<div className="space-y-6 text-left w-full max-w-lg">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center text-slate-700 shrink-0 mt-1">
<iconify-icon className="text-xl" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-900 mb-1">
                      Fast Response Times
                    </h4>
<p className="text-sm text-slate-500 font-normal">
                      We prioritize urgency. When your heat goes out in January,
                      we're already on our way.
                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center text-slate-700 shrink-0 mt-1">
<iconify-icon className="text-xl" icon="solar:user-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-900 mb-1">
                      Experienced Technicians
                    </h4>
<p className="text-sm text-slate-500 font-normal">
                      Fully certified, highly trained experts who respect your
                      home and clean up after themselves.
                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center text-slate-700 shrink-0 mt-1">
<iconify-icon className="text-xl" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-900 mb-1">
                      Transparent Pricing
                    </h4>
<p className="text-sm text-slate-500 font-normal">
                      Upfront quotes before any work begins. No hidden fees, no
                      surprise bills.
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200/60" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
              Don't Just Take Our Word For It
            </h2>
<p className="text-base text-slate-500 font-normal">
              See why homeowners across Ottawa rate us 5 stars for reliability
              and speed.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 border border-slate-200 rounded-xl bg-slate-50/50 flex flex-col justify-between">
<div>
<div className="flex text-yellow-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 font-normal italic mb-6 leading-relaxed">
                  "Our furnace died on the coldest night in January.
                  AIRMECHANICS answered at 2 AM and had a tech out within the
                  hour. Absolute lifesavers. Professional, fast, and fair
                  pricing."
                </p>
</div>
<div className="flex items-center gap-3 mt-auto">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">
                  JD
                </div>
<div className="text-sm font-medium text-slate-900">
                  John D.
                  <span className="text-xs text-slate-400 font-normal ml-1">
                    Ottawa South
                  </span>
</div>
</div>
</div>
<div className="p-8 border border-slate-200 rounded-xl bg-slate-50/50 flex flex-col justify-between">
<div>
<div className="flex text-yellow-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 font-normal italic mb-6 leading-relaxed">
                  "Booked them for a new AC installation. The crew was
                  incredibly clean, respectful of our property, and explained
                  the new system perfectly. Top tier service."
                </p>
</div>
<div className="flex items-center gap-3 mt-auto">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">
                  SM
                </div>
<div className="text-sm font-medium text-slate-900">
                  Sarah M.
                  <span className="text-xs text-slate-400 font-normal ml-1">
                    Kanata
                  </span>
</div>
</div>
</div>
<div className="p-8 border border-slate-200 rounded-xl bg-slate-50/50 flex flex-col justify-between">
<div>
<div className="flex text-yellow-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 font-normal italic mb-6 leading-relaxed">
                  "Honest diagnostic. Another company told me I needed a whole
                  new furnace. AIRMECHANICS found a $50 part that needed
                  replacing. Earned a customer for life."
                </p>
</div>
<div className="flex items-center gap-3 mt-auto">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">
                  RT
                </div>
<div className="text-sm font-medium text-slate-900">
                  Robert T.
                  <span className="text-xs text-slate-400 font-normal ml-1">
                    Orléans
                  </span>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="py-24 bg-slate-50 relative" id="quote">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col lg:flex-row">

<div className="lg:w-5/12 bg-slate-900 text-white p-10 lg:p-14 flex flex-col justify-between">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">
                  Request Service
                </h2>
<p className="text-sm text-slate-400 font-normal mb-8 leading-relaxed">
                  Need reliable HVAC work? Connect with our team quickly to
                  schedule your appointment or receive a quote.
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-slate-400 mt-0.5" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">
                        Phone
                      </p>
<a className="text-base font-medium hover:text-slate-200 transition-colors" href="tel:6138788381">
                        613-878-8381
                      </a>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-slate-400 mt-0.5" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">
                        Email
                      </p>
<a className="text-base font-medium hover:text-slate-200 transition-colors" href="mailto:airmechanicsottawa@gmail.com">
                        airmechanicsottawa@gmail.com
                      </a>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-slate-400 mt-0.5" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">
                        Service Area
                      </p>
<p className="text-base font-medium">
                        Ottawa, Kanata, Nepean, Orléans, Barrhaven
                      </p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:w-7/12 p-10 lg:p-14 flex flex-col items-center justify-center text-center bg-white">
<div className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mb-6 text-slate-900 shadow-sm">
<iconify-icon className="text-3xl" icon="solar:calendar-add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">
                Book Your Service Online
              </h3>
<p className="text-base text-slate-500 mb-8 max-w-md mx-auto leading-relaxed">
                We use Jobber to manage our quotes and bookings securely. Click
                below to open our portal and request your service instantly.
              </p>
<a className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-md text-base font-medium hover:bg-slate-800 transition-colors shadow-sm flex items-center justify-center gap-2" href="https://clienthub.getjobber.com/hubs/bd7dc0fc-bd4f-4830-826b-5f2f7f44c802/public/requests/2763892/new" rel="noopener noreferrer" target="_blank">
                Request Service via Jobber
                <iconify-icon icon="solar:external-link-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tighter text-slate-900">
            AIRMECHANICS
          </span>
</div>
<p className="text-xs text-slate-400 font-normal text-center md:text-left">
          © 2023 AIRMECHANICS HVAC Ottawa. All rights reserved.
        </p>
<div className="flex items-center gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
</div>
</div>
</footer>

<a className="sm:hidden fixed bottom-6 right-6 w-14 h-14 bg-slate-900 text-white rounded-full shadow-lg flex items-center justify-center z-50 border border-slate-700" href="tel:6138788381">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>

    </>
  );
}
