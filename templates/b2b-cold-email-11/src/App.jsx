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



document.addEventListener('DOMContentLoaded', () => {
const observer = new IntersectionObserver((entries, obs) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('animate-visible');
obs.unobserve(entry.target);
}
});
}, { threshold: 0.15 });
document.querySelectorAll('.animate-hidden, .stagger-trigger').forEach(el => observer.observe(el));
});



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">

<a className="text-2xl font-medium text-blue-950 tracking-normal font-instrument-serif" href="#">
          Odyssey Collective
        </a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-500 hover:text-blue-800 transition-colors" href="#how-it-works">
            How It Works
          </a>
<a className="hover:text-blue-800 transition-colors text-sm font-medium text-gray-500" href="#whats-included">
            What's Included
          </a>
<a className="text-sm font-medium text-gray-500 hover:text-blue-800 transition-colors" href="#faq">
            FAQ
          </a>
</div>

<a className="bg-blue-800 hover:bg-blue-900 text-white text-sm font-medium py-3 px-6 rounded-lg transition-colors shadow-sm btn-hover" href="#book">
<span className="hidden md:inline">Book a Strategy Call</span>
<span className="md:hidden">Book a Call</span>
</a>
</div>
</nav>

<section className="md:pt-40 md:pb-24 bg-white pt-32 pr-6 pb-20 pl-6">
<div className="text-center max-w-5xl mr-auto ml-auto animate-hidden">
<h1 className="leading-[1.1] md:text-5xl text-4xl font-normal text-gray-900 tracking-tight font-playfair mb-6">
          20+ Qualified Sales Meetings Per Month.
          <br className="hidden md:block"/>
          Pay Only for
          <span className="text-blue-800">Meetings Booked</span>
          .
        </h1>
<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          We run cold email campaigns that book meetings with decision-makers
          who match your ICP. You pay for qualified meetings we deliver. No
          retainers. No long-term contracts.
        </p>

<div className="max-w-4xl mx-auto mb-10 bg-gray-100 aspect-video rounded-xl shadow-sm border border-gray-200 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
<div className="relative z-10 flex flex-col items-center gap-4">
<div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-blue-800 pl-1">
<iconify-icon className="" height="32" icon="solar:play-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-500">
              Video Placeholder
            </span>
</div>
</div>
<div className="flex flex-col items-center gap-3">
<a className="bg-blue-800 hover:bg-blue-900 text-white text-lg font-medium py-4 px-8 rounded-lg shadow-md transition-all hover:shadow-lg inline-flex items-center gap-2 btn-hover" href="#book">
            Book a Strategy Call
          </a>
<span className="text-sm text-gray-500">
            Free 30-minute call. No commitment.
          </span>
</div>
</div>
</section>

<section className="py-20 md:py-24 bg-gray-50 border-y border-gray-100">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 animate-hidden">
<h2 className="md:text-4xl text-3xl font-semibold text-gray-900 tracking-tight font-['Playfair_Display'] mb-4">
            Sound
            <span className="text-blue-800">Familiar</span>
            ?
          </h2>
<p className="text-lg text-gray-600">
            Most B2B companies we talk to are stuck in the same cycle.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-hidden delay-100">

<div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover-card">
<div className="w-12 h-12 bg-blue-50 text-blue-800 rounded-lg flex items-center justify-center mb-6">
<iconify-icon height="28" icon="solar:danger-triangle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-3 font-['Playfair_Display']">
              Burned by Agencies Before
            </h3>
<p className="leading-relaxed text-gray-600">
              You paid $5K–$15K/month for months. You got excuses, vanity
              metrics, and maybe a handful of unqualified leads. No predictable
              pipeline. No ROI.
            </p>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover-card">
<div className="w-12 h-12 bg-blue-50 text-blue-800 rounded-lg flex items-center justify-center mb-6">
<iconify-icon height="28" icon="solar:graph-down-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-3 font-['Playfair_Display']">
              Pipeline That Disappears
            </h3>
<p className="text-gray-600 leading-relaxed">
              Some months are strong. Others are empty. You can't forecast
              revenue when you don't know where next quarter's meetings are
              coming from.
            </p>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover-card">
<div className="w-12 h-12 bg-blue-50 text-blue-800 rounded-lg flex items-center justify-center mb-6">
<iconify-icon height="28" icon="solar:calculator-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-3 font-['Playfair_Display']">
              The SDR Math Doesn't Work
            </h3>
<p className="leading-relaxed text-gray-600">
              $140K/year fully loaded. 3+ months to ramp. 30–40% annual
              turnover. And most still don't hit quota. Building in-house is
              expensive and unpredictable.
            </p>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover-card">
<div className="w-12 h-12 bg-blue-50 text-blue-800 rounded-lg flex items-center justify-center mb-6">
<iconify-icon height="28" icon="solar:clock-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-3 font-['Playfair_Display']">
              No Time to Fix It Yourself
            </h3>
<p className="text-gray-600 leading-relaxed">
              You know cold email could work. But between running the business
              and closing deals, there's no bandwidth to build the
              infrastructure, write the sequences, and manage the campaigns.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 animate-hidden">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-6 font-['Playfair_Display']">
            Built to Actually
            <span className="text-blue-800">Deliver</span>
</h2>
<p className="leading-relaxed text-lg text-gray-600 max-w-3xl mr-auto ml-auto">
            We built Odyssey to fix what's broken about this industry. No
            retainers that pay us whether you get results or not. No black box
            where you can't see what's happening. Just qualified meetings on
            your calendar and a model where we only win when you do.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-hidden delay-100">

<div className="p-6 rounded-xl border border-gray-100 hover:border-blue-100 transition-colors group hover-card">
<div className="mb-4 text-blue-800">
<iconify-icon height="32" icon="solar:dollar-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2 font-['Playfair_Display']">
              Pay Only for Meetings
            </h3>
<p className="leading-relaxed text-sm text-gray-600">
              No retainers. No monthly minimums. You pay for qualified booked
              meetings. That's it. If we don't deliver, you don't pay.
            </p>
</div>

<div className="p-6 rounded-xl border border-gray-100 hover:border-blue-100 transition-colors group hover-card">
<div className="mb-4 text-blue-800">
<iconify-icon height="32" icon="solar:shield-check-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2 font-['Playfair_Display']">
              You Approve Everything
            </h3>
<p className="text-gray-600 text-sm leading-relaxed">
              You see every prospect list before we reach out. You approve every
              email before it sends. Nothing goes to market without your
              sign-off.
            </p>
</div>

<div className="p-6 rounded-xl border border-gray-100 hover:border-blue-100 transition-colors group hover-card">
<div className="mb-4 text-blue-800">
<iconify-icon className="" height="32" icon="solar:rocket-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2 font-['Playfair_Display']">
              First Meetings in 3 Weeks
            </h3>
<p className="text-gray-600 text-sm leading-relaxed">
              No months of setup. No waiting on hires to ramp. From kickoff to
              qualified meetings on your calendar in roughly three weeks.
            </p>
</div>

<div className="p-6 rounded-xl border border-gray-100 hover:border-blue-100 transition-colors group hover-card">
<div className="mb-4 text-blue-800">
<iconify-icon height="32" icon="solar:target-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2 font-['Playfair_Display']">
              Quality Over Volume
            </h3>
<p className="text-gray-600 text-sm leading-relaxed">
              We don't spray and pray. We define your ICP together, build
              targeted lists, and only book meetings with decision-makers who
              actually fit.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-24 bg-gray-50 border-y border-gray-100" id="how-it-works">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16 animate-hidden">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight font-['Playfair_Display']">
            How We Get You
            <span className="text-blue-800">Meetings</span>
</h2>
</div>
<div className="relative animate-hidden delay-100">

<div className="absolute left-6 md:left-8 top-8 bottom-0 w-0.5 bg-gray-200"></div>
<div className="space-y-12">

<div className="relative flex gap-6 md:gap-10">
<div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 border-4 border-white text-blue-800 font-semibold text-xl flex items-center justify-center shadow-sm z-10 relative step-circle">
                1
              </div>
<div className="pt-2">
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-2 font-['Playfair_Display']">
                  Strategy &amp; ICP Definition
                </h3>
<p className="leading-relaxed text-gray-600">
                  We start with a deep-dive into your business, target market,
                  and what makes a qualified opportunity for your sales team. We
                  define your ICP criteria together before any outreach begins.
                </p>
</div>
</div>

<div className="relative flex gap-6 md:gap-10">
<div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 border-4 border-white text-blue-800 font-semibold text-xl flex items-center justify-center shadow-sm z-10 relative step-circle">
                2
              </div>
<div className="pt-2">
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-2 font-['Playfair_Display']">
                  Targeted List Building
                </h3>
<p className="text-gray-600 leading-relaxed">
                  We build segmented prospect lists matching your ICP. You
                  review and approve every list before we reach out. No
                  surprises, no off-target contacts.
                </p>
</div>
</div>

<div className="relative flex gap-6 md:gap-10">
<div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 border-4 border-white text-blue-800 font-semibold text-xl flex items-center justify-center shadow-sm z-10 relative step-circle">
                3
              </div>
<div className="pt-2">
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-2 font-['Playfair_Display']">
                  Messaging Development
                </h3>
<p className="text-gray-600 leading-relaxed">
                  We write email sequences tailored to each segment and persona.
                  You approve all copy before it sends. Your voice, your
                  sign-off.
                </p>
</div>
</div>

<div className="relative flex gap-6 md:gap-10">
<div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 border-4 border-white text-blue-800 font-semibold text-xl flex items-center justify-center shadow-sm z-10 relative step-circle">
                4
              </div>
<div className="pt-2">
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-2 font-['Playfair_Display']">
                  Infrastructure &amp; Launch
                </h3>
<p className="leading-relaxed text-gray-600">
                  We set up dedicated sending domains (completely separate from
                  yours) with proper authentication and warmup. Your primary
                  domain stays protected. Then we launch.
                </p>
</div>
</div>

<div className="relative flex gap-6 md:gap-10">
<div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 border-4 border-white text-blue-800 font-semibold text-xl flex items-center justify-center shadow-sm z-10 relative step-circle">
                5
              </div>
<div className="pt-2">
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-2 font-['Playfair_Display']">
                  Optimization &amp; Booking
                </h3>
<p className="text-gray-600 leading-relaxed">
                  We manage all replies, qualify prospects against your
                  criteria, and book meetings directly to your calendar. Weekly
                  reporting shows exactly what's working. We iterate based on
                  data.
                </p>
</div>
</div>
</div>
<div className="mt-16 bg-blue-50 border border-blue-100 rounded-lg p-4 md:p-6 flex items-center gap-4 justify-center shadow-sm z-10 relative">
<iconify-icon className="text-blue-800 text-2xl shrink-0" icon="solar:calendar-mark-linear"></iconify-icon>
<span className="text-blue-900 font-medium">
              From kickoff to first meetings in approximately 3 weeks.
            </span>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-24 bg-white" id="whats-included">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16 animate-hidden">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4 font-['Playfair_Display']">
            Everything You
            <span className="text-blue-800">Get</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 stagger-trigger">
<div className="flex items-start gap-3 checklist-item" style={{transitionDelay: '0ms'}}>
<div className="mt-1 text-blue-600 shrink-0">
<iconify-icon height="20" icon="solar:check-circle-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="text-gray-700">
              ICP definition and targeting strategy
            </span>
</div>
<div className="flex items-start gap-3 checklist-item" style={{transitionDelay: '50ms'}}>
<div className="mt-1 text-blue-600 shrink-0">
<iconify-icon height="20" icon="solar:check-circle-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="text-gray-700">Market research and segmentation</span>
</div>
<div className="flex items-start gap-3 checklist-item" style={{transitionDelay: '100ms'}}>
<div className="mt-1 text-blue-600 shrink-0">
<iconify-icon height="20" icon="solar:check-circle-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="text-gray-700">
              Targeted prospect lists (client-approved)
            </span>
</div>
<div className="flex items-start gap-3 checklist-item" style={{transitionDelay: '150ms'}}>
<div className="mt-1 text-blue-600 shrink-0">
<iconify-icon height="20" icon="solar:check-circle-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="text-gray-700">
              Custom email sequences (client-approved)
            </span>
</div>
<div className="flex items-start gap-3 checklist-item" style={{transitionDelay: '200ms'}}>
<div className="mt-1 text-blue-600 shrink-0">
<iconify-icon height="20" icon="solar:check-circle-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="text-gray-700">
              Dedicated sending infrastructure (separate from your domain)
            </span>
</div>
<div className="flex items-start gap-3 checklist-item" style={{transitionDelay: '250ms'}}>
<div className="mt-1 text-blue-600 shrink-0">
<iconify-icon height="20" icon="solar:check-circle-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="text-gray-700">
              Email warmup and deliverability management
            </span>
</div>
<div className="flex items-start gap-3 checklist-item" style={{transitionDelay: '300ms'}}>
<div className="mt-1 text-blue-600 shrink-0">
<iconify-icon height="20" icon="solar:check-circle-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="text-gray-700">
              Reply management and prospect qualification
            </span>
</div>
<div className="flex items-start gap-3 checklist-item" style={{transitionDelay: '350ms'}}>
<div className="mt-1 text-blue-600 shrink-0">
<iconify-icon height="20" icon="solar:check-circle-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="text-gray-700">
              Meeting booking directly to your calendar
            </span>
</div>
<div className="flex items-start gap-3 checklist-item" style={{transitionDelay: '400ms'}}>
<div className="mt-1 text-blue-600 shrink-0">
<iconify-icon height="20" icon="solar:check-circle-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="text-gray-700">Weekly performance reporting</span>
</div>
<div className="flex items-start gap-3 checklist-item" style={{transitionDelay: '450ms'}}>
<div className="mt-1 text-blue-600 shrink-0">
<iconify-icon height="20" icon="solar:check-circle-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="text-gray-700">
              Full data ownership—lists, sequences, and learnings are yours to
              keep
            </span>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-24 bg-gray-50 border-y border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 animate-hidden">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4 font-['Playfair_Display']">
            Zero Risk.
            <span className="text-blue-800">Full Control</span>
            .
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12 animate-hidden delay-100">

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center hover-card">
<iconify-icon className="text-blue-800 mb-4 text-3xl" icon="solar:dollar-minimalistic-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Playfair_Display']">
              Performance Pricing
            </h3>
<p className="text-sm text-gray-600">
              You pay only for qualified booked meetings. No retainers. No
              monthly minimums.
            </p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center hover-card">
<iconify-icon className="text-blue-800 mb-4 text-3xl" icon="solar:calendar-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Playfair_Display']">
              Month-to-Month
            </h3>
<p className="text-sm text-gray-600">
              No long-term contracts. No 6-month lock-ins. Stay because it's
              working, not because you're stuck.
            </p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center hover-card">
<iconify-icon className="text-blue-800 mb-4 text-3xl" icon="solar:clipboard-check-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Playfair_Display']">
              Client Approvals
            </h3>
<p className="text-sm text-gray-600">
              You approve all prospect lists and email copy before anything goes
              out.
            </p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center hover-card">
<iconify-icon className="text-blue-800 mb-4 text-3xl" icon="solar:shield-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Playfair_Display']">
              Domain Protection
            </h3>
<p className="text-sm text-gray-600">
              We never touch your primary domain. All outreach runs on dedicated
              infrastructure.
            </p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center hover-card">
<iconify-icon className="text-blue-800 mb-4 text-3xl" icon="solar:folder-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Playfair_Display']">
              Data Ownership
            </h3>
<p className="text-sm text-gray-600">
              All lists, sequences, and campaign learnings belong to you.
            </p>
</div>
</div>
<p className="text-center text-xl font-medium text-gray-800 animate-hidden delay-200">
          We don't ask you to trust us. We ask you to hold us accountable.
        </p>
</div>
</section>

<section className="py-20 md:py-24 bg-white">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 animate-hidden">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight font-['Playfair_Display']">
            Is This Right for
            <span className="text-blue-800">You</span>
            ?
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-hidden delay-100">

<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 relative overflow-hidden hover-card">
<div className="absolute top-0 left-0 right-0 h-1 bg-green-600"></div>
<h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2 font-['Playfair_Display']">
<span className="text-green-600">This is for you if...</span>
</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="text-green-600 mt-1">•</span>
<span className="text-gray-700">
                  You sell B2B products or services
                </span>
</li>
<li className="flex items-start gap-3">
<span className="text-green-600 mt-1">•</span>
<span className="text-gray-700">
                  Your average contract value is $5K or higher
                </span>
</li>
<li className="flex items-start gap-3">
<span className="text-green-600 mt-1">•</span>
<span className="text-gray-700">
                  You have an existing sales process and team to close deals
                </span>
</li>
<li className="flex items-start gap-3">
<span className="text-green-600 mt-1">•</span>
<span className="text-gray-700">
                  You have a large addressable market (not hyper-niche)
                </span>
</li>
<li className="flex items-start gap-3">
<span className="text-green-600 mt-1">•</span>
<span className="text-gray-700">
                  You want a predictable source of qualified sales meetings
                </span>
</li>
</ul>
</div>

<div className="bg-gray-50 rounded-xl border border-gray-200 p-8 relative overflow-hidden hover-card">
<div className="absolute top-0 left-0 right-0 h-1 bg-gray-400"></div>
<h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2 font-['Playfair_Display']">
<span className="text-gray-500">This is NOT for you if...</span>
</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="text-gray-400 mt-1">•</span>
<span className="text-gray-600">You sell to consumers (B2C)</span>
</li>
<li className="flex items-start gap-3">
<span className="text-gray-400 mt-1">•</span>
<span className="text-gray-600">
                  You're pre-product-market fit or under $1M ARR
                </span>
</li>
<li className="flex items-start gap-3">
<span className="text-gray-400 mt-1">•</span>
<span className="text-gray-600">
                  You don't have a sales process in place
                </span>
</li>
<li className="flex items-start gap-3">
<span className="text-gray-400 mt-1">•</span>
<span className="text-gray-600">
                  Your total addressable market is very small (under 10,000
                  contacts)
                </span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-24 bg-[#111827] border-y border-gray-800">
<div className="max-w-4xl mx-auto px-6 animate-hidden">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight text-center mb-16 font-['Playfair_Display']">
          Who's Behind
          <span className="text-blue-400">Odyssey</span>
</h2>
<div className="flex flex-col md:flex-row gap-10 items-center md:items-start">

<div className="shrink-0">
<div className="md:w-40 md:h-40 overflow-hidden flex bg-gray-200 w-32 h-32 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a077dd0-91aa-469c-a629-b285bf132128_800w.jpg)] bg-cover bg-center border-gray-700 border-4 rounded-full shadow-md items-center justify-center"></div>
</div>

<div className="">
<h3 className="text-xl font-semibold text-white mb-4 font-['Playfair_Display']">
              Noah Gordon, Founder
            </h3>
<div className="space-y-4 text-gray-300 leading-relaxed">
<p className="">
                I started Odyssey because I kept seeing the same problem: B2B
                companies that need pipeline but can't get outbound to work. Not
                because cold email is dead, but because it's become a technical
                discipline most teams don't have bandwidth to master while also
                trying to scale. Too many tools, too much noise, and agencies
                that take your money whether they deliver or not.
              </p>
<p className="">
                I believe the fundamentals still win. Great offers. Relevant
                messaging. Relentless iteration. No fluff. That's what we do
                here.
              </p>
<p className="font-medium text-white border-l-2 border-blue-600 pl-4 py-1 mt-6">
                I'm not here to lock you into a contract and hope you forget to
                cancel. If we're not booking qualified meetings, you shouldn't
                pay. Simple as that.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16 animate-hidden">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight font-['Playfair_Display']">
            Common
            <span className="text-blue-800">Questions</span>
</h2>
</div>
<div className="space-y-2 animate-hidden delay-100">

<details className="group border-b border-gray-100 py-6 cursor-pointer hover-card" open="">
<summary className="flex justify-between items-center font-semibold text-lg text-gray-900">
              What if I've been burned by agencies before?
              <span className="text-gray-400 transition-transform duration-300 group-open:rotate-180">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-gray-600 leading-relaxed">
              Most of our conversations start here. The difference is our model:
              you only pay for qualified meetings we actually book. No
              retainers, no long-term contracts, no paying for promises. If we
              don't deliver, you don't pay. We built it this way specifically
              because the old model doesn't work.
            </div>
</details>

<details className="group border-b border-gray-100 py-6 cursor-pointer hover-card">
<summary className="flex justify-between items-center font-semibold text-lg text-gray-900">
              How do you define a "qualified" meeting?
              <span className="text-gray-400 transition-transform duration-300 group-open:rotate-180">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-gray-600 leading-relaxed">
              We define it together before launch. During our kickoff, we
              establish your ICP criteria—company size, industry, title,
              whatever matters for your sales team. A meeting only counts if the
              prospect matches those criteria and confirms time on your
              calendar. You're not paying for bad fits.
            </div>
</details>

<details className="group border-b border-gray-100 py-6 cursor-pointer hover-card">
<summary className="flex justify-between items-center font-semibold text-lg text-gray-900">
              What if cold email doesn't work in my industry?
              <span className="text-gray-400 transition-transform duration-300 group-open:rotate-180">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-gray-600 leading-relaxed">
              Bad cold email doesn't work in any industry. But targeted outreach
              to the right people with relevant messaging still works. We
              research your market, segment your audience, and write copy that
              speaks to specific pain points. If there's genuine doubt about
              fit, we'll tell you on the first call.
            </div>
</details>

<details className="group border-b border-gray-100 py-6 cursor-pointer hover-card">
<summary className="flex justify-between items-center font-semibold text-lg text-gray-900">
              Why shouldn't I just do this myself with Apollo or Clay?
              <span className="text-gray-400 transition-transform duration-300 group-open:rotate-180">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-gray-600 leading-relaxed">
              You could. The tools are cheap and accessible. But cold email has
              become a technical discipline—domain infrastructure, warmup
              protocols, deliverability monitoring, sequence optimization. Most
              teams that try it themselves burn their domain or lose momentum
              after a few weeks. We handle the system so you can focus on
              closing.
            </div>
</details>

<details className="group border-b border-gray-100 py-6 cursor-pointer hover-card">
<summary className="flex justify-between items-center font-semibold text-lg text-gray-900">
              How quickly can we start seeing meetings?
              <span className="text-gray-400 transition-transform duration-300 group-open:rotate-180">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-gray-600 leading-relaxed">
              Roughly three weeks from kickoff. The first two weeks cover ICP
              definition, list building, messaging development, and
              infrastructure warmup—all running in parallel. Campaigns launch
              around week two or three. First meetings typically land in weeks
              three to four.
            </div>
</details>

<details className="group border-b border-gray-100 py-6 cursor-pointer hover-card">
<summary className="flex justify-between items-center font-semibold text-lg text-gray-900">
              What happens if it's not working?
              <span className="text-gray-400 transition-transform duration-300 group-open:rotate-180">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-gray-600 leading-relaxed">
              We look at the data together. Weekly reporting shows exactly
              what's happening—send volume, reply rates, meeting quality. If
              something's off, we adjust targeting or messaging and test again.
              And because you're not locked into a contract, you can walk away
              anytime. We keep working because it's working, not because you're
              stuck.
            </div>
</details>
</div>
</div>
</section>

<section className="py-20 md:py-24 bg-blue-50 text-gray-900" id="book">
<div className="max-w-4xl mx-auto px-6 text-center animate-hidden">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 font-['Playfair_Display']">
          Ready for Qualified Meetings on
          <span className="text-blue-800">Your Calendar</span>
          ?
        </h2>
<p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Book a call to see if we're a fit. We'll walk through your ICP, talk
          through how the process works, and answer any questions. No pitch
          deck. No pressure.
        </p>

<div className="bg-white rounded-xl shadow-2xl w-full overflow-hidden border border-blue-100">

<div className="calendly-inline-widget" data-processed="true" data-url="https://calendly.com/noah-odysseycollective/intro" style={{position: 'relative', minWidth: '320px', height: '700px'}}>
<div className="calendly-spinner">
<div className="calendly-bounce1"></div>
<div className="calendly-bounce2"></div>
<div className="calendly-bounce3"></div>
</div>
<iframe frameborder="0" height="100%" src="https://calendly.com/noah-odysseycollective/intro?embed_domain=&amp;embed_type=Inline" title="Select a Date &amp; Time - Calendly" width="100%"></iframe>
</div>


</div>
<p className="mt-6 text-sm text-gray-500 opacity-80">
          Free 30-minute call. No commitment. No retainers.
        </p>
</div>
</section>

<footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<h4 className="text-lg font-semibold tracking-tight">
            Odyssey Collective
          </h4>
<p className="text-sm text-gray-400 mt-2">
            Qualified meetings on your calendar. Pay only for results.
          </p>
</div>
<div className="flex gap-8">
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#how-it-works">
            How It Works
          </a>
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#whats-included">
            What's Included
          </a>
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#faq">
            FAQ
          </a>
</div>
<div className="flex flex-col items-center md:items-end gap-4">
<a className="bg-blue-700 hover:bg-blue-600 text-white text-xs font-semibold py-2 px-4 rounded transition-colors" href="#book">
            Book a Strategy Call
          </a>
<div className="flex items-center gap-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<iconify-icon height="24" icon="solar:star-circle-linear" width="24"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center md:text-left text-xs text-gray-500">
        © 2026 Odyssey Collective. All rights reserved.
      </div>
</footer>

    </>
  );
}
