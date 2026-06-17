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
      

<header className="relative z-50 flex justify-center pt-4 px-4 md:pt-6 md:px-6 pointer-events-none">
<nav className="glass flex md:gap-10 transition-all duration-300 pointer-events-auto w-full max-w-5xl border-gray-200/60 border rounded-full pt-2 pr-2 pb-2 pl-5 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] gap-x-4 gap-y-4 items-center justify-between">

<a className="group flex items-center gap-2 shrink-0" href="#">
<span className="md:text-2xl group-hover:text-rose-600 transition-colors text-xl font-medium italic text-gray-900 tracking-tight font-serif">
            Outbound Client
          </span>
</a>

<a className="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg hover:shadow-rose-500/20 bg-gray-900 text-white hover:bg-rose-600 shrink-0" href="#contact">
          Get Started
          <iconify-icon className="w-3 h-3 transition-transform group-hover:translate-x-0.5 hidden sm:block" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</nav>
</header>
<main className="md:mt-4 md:px-6 max-w-7xl mt-4 mr-auto ml-auto pr-4 pb-24 pl-4">

<section className="md:rounded-[2.5rem] md:p-12 lg:p-20 overflow-hidden md:mb-16 text-center bg-white border-gray-200/60 border rounded-[2rem] mb-12 pt-12 pr-6 pb-12 pl-6 relative shadow-[0_1px_2px_rgba(0,0,0,0.02)]">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>
<div className="z-10 flex flex-col max-w-5xl mr-auto ml-auto relative items-center">

<div className="animate-fade-up text-[10px] uppercase md:mb-8 font-bold text-rose-600 tracking-widest font-montserrat bg-rose-50 w-fit border-rose-100 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3">
            Attention B2B Businesses
          </div>

<h1 className="animate-fade-up delay-100 sm:text-4xl md:text-5xl lg:text-6xl leading-tight md:mb-8 text-3xl font-medium text-gray-900 tracking-tighter font-serif mb-6">Get 15-20 Qualified Leads Per Month <br/> <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-rose-500 to-orange-400">
              You Only Pay For The Leads We Deliver
            </span></h1>

<p className="animate-fade-up delay-200 md:text-xl leading-relaxed md:mb-12 text-base font-light text-gray-500 max-w-2xl mb-8 pr-2 pl-2">Our proprietary AI-powered lead generation system adds 8-20 qualified B2B leads to your business without you lifting a finger.</p>

<div className="animate-fade-up delay-300 relative w-full max-w-4xl aspect-video rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-xl md:shadow-2xl overflow-hidden mb-8 md:mb-12 group ring-1 bg-gray-900 border-white/50 shadow-gray-200 ring-gray-900/5">


<style>wistia-player[media-id='zv1ql881do']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/zv1ql881do/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }</style>
<wistia-player aspect="1.7777777777777777" media-id="zv1ql881do"></wistia-player>
</div>

<div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center w-full mb-6">
<a className="sm:w-auto md:py-4 transition-all duration-300 flex items-center justify-center gap-2 hover:border-gray-400 text-sm font-medium text-slate-50 font-montserrat bg-blue-500 w-full border-gray-200 border ring-blue-500 rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="#process">
              Learn More
            </a>
</div>

<p className="animate-fade-up delay-500 text-[10px] md:text-xs font-montserrat text-gray-400">
            Book a Free Strategy Session. No credit card required.
          </p>
</div>
</section>

<section className="md:py-20 max-w-6xl mr-auto ml-auto pt-12 pb-12">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-gray-900 px-4">
          Are You Currently Struggling With...
        </h2>
<div className="grid md:grid-cols-3 gap-6 md:gap-8">

<div className="md:p-8 md:rounded-3xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-red-50 to-white rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="md:w-12 md:h-12 flex md:mb-6 text-rose-600 bg-rose-50 w-10 h-10 rounded-xl mb-6 items-center justify-center">
<iconify-icon className="md:w-6 md:h-6 w-5 h-5" icon="solar:graph-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="md:text-xl md:mb-3 text-lg font-semibold text-gray-900 font-montserrat mb-2">
              Unpredictable Growth
            </h3>
<p className="text-gray-500 font-light leading-relaxed text-sm">
              You never know where your next client is coming from, creating
              revenue rollercoasters that stall growth.
            </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-red-50 to-white rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-sm" style={{position: 'relative', '--border-gradient': 'linear-gradient(135deg, #fca5a5, #ef4444)', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-50 text-rose-600">
<iconify-icon className="w-5 h-5 md:w-6 md:h-6" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="md:text-xl md:mb-3 text-lg font-semibold text-gray-900 font-montserrat mb-2">
              Bad Lead Sources
            </h3>
<p className="leading-relaxed text-sm font-light text-gray-500">
              You’re wasting time on garbage leads. People who will never buy.
              Low-intent prospects who don’t understand your service and aren’t
              ready to decide.
            </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-red-50 to-white rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-50 text-rose-600">
<iconify-icon className="md:w-6 md:h-6 w-5 h-5" icon="solar:dollar-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="md:text-xl md:mb-3 text-lg font-semibold text-gray-900 font-montserrat mb-2" style={{}}>
              Ever Increasing CAC
            </h3>
<p className="leading-relaxed text-sm font-light text-gray-500">
              Your cost to acquire customers keeps climbing. Ads get more
              expensive. Competition gets louder. The same spend brings fewer
              results. You’re paying more for worse leads and thinner margins.
            </p>
</div>
</div>
</section>

<section className="md:py-20 pt-12 pb-12">
<div className="text-center mb-10 md:mb-16 px-4">
<h2 className="md:text-5xl text-3xl font-medium text-gray-900 tracking-tight font-serif mb-4">
            Why Choose Outbound Client
          </h2>
<p className="md:text-base text-sm font-light text-gray-500 max-w-2xl mr-auto ml-auto">
            To be blunt it just works, but we'd rather prove it to you
          </p>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-colors hover:border-rose-200 bg-gradient-to-br from-white to-gray-50 h-64 border border-gray-200 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-gray-900 font-montserrat mb-3">
              Pinpoint Messaging
            </h3>
<p className="text-gray-500 font-light text-sm leading-relaxed z-10 relative">
              We don't guess. We use proprietary algorithms to identify your
              exact ICP and target them with surgical precision.
            </p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-rose-100">
<iconify-icon className="w-16 h-16 md:w-24 md:h-24 stroke-[1px]" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-colors hover:border-rose-200 bg-gradient-to-br from-white to-gray-50 h-64 border border-gray-200 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-gray-900 font-montserrat mb-3">
              Complete Transparency
            </h3>
<p className="leading-relaxed text-sm font-light text-gray-500 z-10 relative">
              Live dashboards. 24/7 access. You see every dollar spent and every
              lead generated in real-time.
            </p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-rose-100">
<iconify-icon className="w-16 h-16 md:w-24 md:h-24 stroke-[1px]" icon="solar:monitor-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-colors hover:border-rose-200 bg-gradient-to-br from-white to-gray-50 h-64 border border-gray-200 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-gray-900 font-montserrat mb-3">
              Personal Guarantee
            </h3>
<p className="text-gray-500 font-light text-sm leading-relaxed z-10 relative">
              We are so confident in our system that we put our own money on the
              line. If we don't hit KPIs, we work for free.
            </p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-rose-100">
<iconify-icon className="w-16 h-16 md:w-24 md:h-24 stroke-[1px]" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="flex justify-center">
<a className="w-full sm:w-auto justify-center px-8 py-3.5 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 bg-gray-900 text-white hover:bg-rose-600" href="#contact">
            Book a Call
            <iconify-icon className="w-4 h-4" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-6 rounded-[2rem] md:rounded-[2.5rem] border shadow-sm text-center bg-white border-gray-200/60">
<div className="max-w-3xl mx-auto">
<div className="inline-flex justify-center mb-6 md:mb-8 text-rose-500">
<iconify-icon className="w-8 h-8 md:w-12 md:h-12 opacity-20" icon="solar:quote-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="md:text-4xl lg:text-5xl leading-tight md:mb-10 text-2xl italic text-gray-900 font-serif mb-8 pr-2 pl-2">
            "We added an extra $30,000 in revenue within just 2 months of
            working with Outbound Client. Their systems are unlike anything
            we've seen before."
          </h3>
<div className="flex flex-col items-center">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-4 overflow-hidden border-2 shadow-md bg-gray-200 border-white">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="font-semibold text-gray-900 font-montserrat">
              Matt S.
            </div>
<div className="md:text-sm text-xs font-light text-gray-400">Owner</div>
</div>
</div>
</section>

<section className="py-16 md:py-24" id="process">
<div className="text-center mb-12 md:mb-16">
<span className="text-[10px] md:text-xs font-montserrat font-bold tracking-widest uppercase mb-3 block text-rose-600">
            Transformation
          </span>
<h2 className="text-3xl md:text-5xl font-serif font-medium text-gray-900">
            Get Consistent Results
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-10 md:gap-8 relative max-w-6xl mx-auto">

<div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent to-transparent -z-10 via-gray-200"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-white border-gray-200 text-gray-400">
              1
            </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-gray-900">
              Book a Call
            </h3>
<p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs px-4 md:px-0">
              We analyze your current situation and determine if our system is a
              fit for your specific growth goals.
            </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-white border-gray-200 text-gray-400">
              2
            </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-gray-900">
              We Build The Engine
            </h3>
<p className="leading-relaxed md:px-0 text-sm font-light text-gray-500 max-w-xs pr-4 pl-4">
              Our team deploys the custom infrastructure, creative assets, and
              tracking systems in under 7 days.
            </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-white border-gray-200 text-gray-400">
              3
            </div>
<h3 className="md:text-xl md:mb-3 text-lg font-bold text-gray-900 font-montserrat mb-2">
              You Get Leads
            </h3>
<p className="leading-relaxed md:px-0 text-sm font-light text-gray-500 max-w-xs pr-4 pl-4">
              Leads start flowing automatically. You focus on closing deals and
              servicing clients while we handle growth.
            </p>
</div>
</div>
<div className="flex justify-center mt-12 md:mt-16">
<a className="w-full sm:w-auto justify-center px-10 py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 shadow-lg hover:shadow-xl hover:shadow-rose-500/20 bg-gray-900 text-white hover:bg-rose-600" href="#contact">
            Book Your Transformation
            <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<section className="mb-16 md:mb-24 px-0 md:px-6">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-5xl font-serif font-medium mb-12 md:mb-16 tracking-tight text-center text-gray-900">
            Our Signature Process
          </h2>
<div className="space-y-6 md:space-y-8 relative">

<div className="hidden md:block absolute left-[2.25rem] top-8 bottom-8 w-0.5 bg-gray-100 -z-10"></div>

<div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border bg-white border-gray-100 shadow-sm transition-all hover:border-rose-200 hover:shadow-md">
<div className="shrink-0 flex md:block justify-center">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center bg-rose-50 text-rose-600 border border-rose-100">
<iconify-icon className="w-6 h-6 md:w-8 md:h-8" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="">
<h3 className="text-lg md:text-xl font-bold font-montserrat text-gray-900 mb-2">
                  Step 1: Initial Configuration &amp; Technical Setup
                </h3>
<p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
                  We fully handle the setup of email systems, domains, and
                  licenses, prepping the groundwork for your campaigns
                </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border bg-white border-gray-100 shadow-sm transition-all hover:border-rose-200 hover:shadow-md">
<div className="shrink-0 flex md:block justify-center">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center bg-rose-50 text-rose-600 border border-rose-100">
<iconify-icon className="w-6 h-6 md:w-8 md:h-8" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="">
<h3 className="text-lg md:text-xl font-bold font-montserrat text-gray-900 mb-2">
                  Step 2: AI-Based Market Research
                </h3>
<p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
                  Leveraging AI, we analyze your ICP to develop informed and
                  strategic market research reports.
                </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border bg-white border-gray-100 shadow-sm transition-all hover:border-rose-200 hover:shadow-md">
<div className="shrink-0 flex md:block justify-center">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center bg-rose-50 text-rose-600 border border-rose-100">
<iconify-icon className="w-6 h-6 md:w-8 md:h-8" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="">
<h3 className="text-lg md:text-xl font-bold font-montserrat text-gray-900 mb-2">
                  Step 3: Data Scraping &amp; List Building
                </h3>
<p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
                  Our advanced AI tools create refined lists of decision-makers,
                  streamlining your target process.
                </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border bg-white border-gray-100 shadow-sm transition-all hover:border-rose-200 hover:shadow-md">
<div className="shrink-0 flex md:block justify-center">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center bg-rose-50 text-rose-600 border border-rose-100">
<iconify-icon className="w-6 h-6 md:w-8 md:h-8" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="">
<h3 className="text-lg md:text-xl font-bold font-montserrat text-gray-900 mb-2">
                  Step 4: Expert Copywriting
                </h3>
<p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
                  We craft compelling, personable email copywriting that
                  resonates with your ideal customer profile, steering clear of
                  regular sales pitches.
                </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border bg-white border-gray-100 shadow-sm transition-all hover:border-rose-200 hover:shadow-md">
<div className="shrink-0 flex md:block justify-center">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center bg-rose-50 text-rose-600 border border-rose-100">
<iconify-icon className="w-6 h-6 md:w-8 md:h-8" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="">
<h3 className="text-lg md:text-xl font-bold font-montserrat text-gray-900 mb-2">
                  Step 5: Campaign Launch
                </h3>
<p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
                  In collaboration with you, we’ll fine-tune and deploy your
                  campaigns, priming your outreach for success.
                </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 transition-all hover:border-rose-200 hover:shadow-md bg-white border-gray-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm gap-x-6 gap-y-6">
<div className="shrink-0 flex md:block justify-center">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center bg-rose-50 text-rose-600 border border-rose-100">
<iconify-icon className="w-6 h-6 md:w-8 md:h-8" icon="solar:tuning-square-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="">
<h3 className="md:text-xl text-lg font-bold text-gray-900 font-montserrat mb-2">
                  Step 6: Continuous Optimization And Testing
                </h3>
<p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
                  We routinely refine campaign strategies through A/B testing
                  and data-driven insights for optimal lead generation results.
                </p>
</div>
</div>
<div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border bg-white border-gray-100 shadow-sm transition-all hover:border-rose-200 hover:shadow-md">
<div className="shrink-0 flex md:block justify-center">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center bg-rose-50 text-rose-600 border border-rose-100">
<iconify-icon className="w-6 h-6 md:w-8 md:h-8" icon="solar:forward-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="">
<h3 className="md:text-xl text-lg font-bold text-gray-900 font-montserrat mb-2">
                  Step 7: Lead Forwarding
                </h3>
<p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
                  Interested leads are promptly sent your way for direct
                  follow-up, facilitating smooth transitions into your sales
                  process.
                </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border bg-white border-gray-100 shadow-sm transition-all hover:border-rose-200 hover:shadow-md">
<div className="shrink-0 flex md:block justify-center">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center bg-rose-50 text-rose-600 border border-rose-100">
<iconify-icon className="w-6 h-6 md:w-8 md:h-8" icon="solar:chat-round-like-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="">
<h3 className="text-lg md:text-xl font-bold font-montserrat text-gray-900 mb-2">
                  Step 8: Lead Nurturing
                </h3>
<p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
                  For leads that don't immediately convert, we design follow-up
                  campaigns to re-engage and guide them back into your sales
                  funnel.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="mb-16 md:mb-24 px-0 md:px-6">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-5xl font-serif font-medium mb-10 md:mb-12 tracking-tight text-center text-gray-900">
            What will you have to manage
          </h2>
<div className="grid md:grid-cols-2 gap-6 md:gap-8">

<div className="flex flex-col">
<span className="text-xs font-montserrat font-bold tracking-widest uppercase mb-4 text-rose-600 pl-1">
                Onboarding
              </span>
<div className="flex-1 p-8 rounded-[2rem] border bg-white border-gray-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-rose-50 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<p className="leading-relaxed text-gray-600 z-10 relative">
                  Complete the onboarding form and introductory call, then
                  connect with us on Slack for seamless communication.
                </p>
</div>
</div>

<div className="flex flex-col">
<span className="text-xs font-montserrat font-bold tracking-widest uppercase mb-4 text-rose-600 pl-1">
                Manage Interested Leads
              </span>
<div className="flex-1 p-8 rounded-[2rem] border bg-white border-gray-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-rose-50 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<p className="text-gray-600 leading-relaxed relative z-10">
                  We schedule warm leads directly into your calendar. It’s your
                  turn to shine by integrating these prospects into your
                  existing sales process and sealing the deal, boosting your
                  top-line revenue.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 -mx-4 md:-mx-6 px-4 md:px-6 rounded-[2.5rem] md:rounded-[3rem] bg-gray-50">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-gray-900">
            What's Included
          </h2>
<div className="rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 border shadow-sm relative overflow-hidden bg-white border-gray-200">
<div className="absolute top-0 right-0 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-gradient-to-b to-transparent rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none from-rose-50/50"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="text-center mb-8 md:mb-12 max-w-3xl">
<span className="font-bold tracking-widest uppercase text-[10px] md:text-xs font-montserrat mb-4 block text-rose-600">
                  The Ecosystem
                </span>
<h3 className="text-2xl md:text-4xl font-serif mb-4 md:mb-6 text-gray-900">
                  All-In-One Growth Infrastructure
                </h3>
<p className="text-gray-500 font-light text-base md:text-lg">
                  We've consolidated our entire suite of growth tools into one
                  powerful partnership designed for maximum impact.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-y-4 gap-x-20 md:gap-y-6 w-full max-w-4xl mb-12 md:mb-16">
<ul className="md:space-y-6 space-y-4">
<li className="flex gap-3 md:gap-4 gap-x-3 gap-y-3 items-center">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-50 text-rose-600">
<iconify-icon className="w-3.5 h-3.5 md:w-5 md:h-5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-700 font-montserrat">
                      Predictable Lead Flow
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-50 text-rose-600">
<iconify-icon className="w-3.5 h-3.5 md:w-5 md:h-5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-700 font-montserrat">
                      Systematized Client Acquisition
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-50 text-rose-600">
<iconify-icon className="w-3.5 h-3.5 md:w-5 md:h-5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-700 font-montserrat">
                      Done-For-You Prospecting
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-50 text-rose-600">
<iconify-icon className="w-3.5 h-3.5 md:w-5 md:h-5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-700 font-montserrat">
                      Automated Outreach Engine
                    </span>
</li>
</ul>
<ul className="md:space-y-6 space-y-4">
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-50 text-rose-600">
<iconify-icon className="w-3.5 h-3.5 md:w-5 md:h-5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-700 font-montserrat">
                      Built-In Lead Qualification
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-50 text-rose-600">
<iconify-icon className="w-3.5 h-3.5 md:w-5 md:h-5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-700 font-montserrat">
                      Conversion Focused Bookings
                    </span>
</li>
<li className="flex md:gap-4 gap-x-3 gap-y-3 items-center">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-50 text-rose-600">
<iconify-icon className="w-3.5 h-3.5 md:w-5 md:h-5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-700 font-montserrat">
                      Speed To Lead Response Times
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-50 text-rose-600">
<iconify-icon className="w-3.5 h-3.5 md:w-5 md:h-5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-bold text-gray-900 font-montserrat border-rose-200 border-b-2">
                      Only Pay For Qualified Bookings
                    </span>
</li>
</ul>
</div>
<div className="flex flex-col items-center w-full">
<a className="w-full md:w-auto text-base md:text-lg px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 shadow-xl font-montserrat font-medium flex items-center justify-center gap-3 group bg-gray-900 text-white hover:bg-rose-600 shadow-rose-900/10" href="#contact">
                  Secure Your Growth Partner
                  <iconify-icon className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<p className="mt-4 md:mt-6 text-xs md:text-sm font-montserrat text-gray-400">
                  No long-term contracts. Cancel anytime.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24">
<h2 className="md:text-5xl md:mb-16 text-3xl font-medium text-gray-900 tracking-tight font-serif text-center mb-10">
          What People Are Saying
        </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="bg-white border-gray-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<p className="text-gray-500 text-sm leading-relaxed italic mb-6">
              "Honestly, I was skeptical at first. But the numbers don't lie.
              Our calendar is completely full for the next 3 weeks."
            </p>
<div className="flex items-center gap-3">
<div className="">
<div className="text-sm font-bold text-gray-900">Jeremy</div>
<div className="text-xs text-gray-400">Founder</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border shadow-sm bg-white border-gray-100">
<p className="text-gray-500 text-sm leading-relaxed italic mb-6">
              "The best investment we made this year. The ROI tracking is
              phenomenal, we know exactly where every cent goes."
            </p>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="">
<div className="text-sm font-bold text-gray-900">Sarah</div>
<div className="text-xs text-gray-400">CMO</div>
</div>
</div>
</div>

<div className="bg-white border-gray-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<p className="leading-relaxed text-sm italic text-gray-500 mb-6">
              "The Outbound Client team are wizards. They completely revamped
              our acquisition channel and lowered CAC by 40%."
            </p>
<div className="flex items-center gap-3">
<div className="">
<div className="text-sm font-bold text-gray-900">Dave</div>
<div className="text-xs text-gray-400">CEO</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-10 md:mb-24 md:px-6 max-w-3xl mr-auto mb-16 ml-auto pt-8 pr-2 pb-8 pl-2">
<h2 className="text-2xl md:text-3xl text-center mb-10 md:mb-12 tracking-tight font-serif font-medium text-gray-900">
          FAQs — Everything you need to know.
        </h2>
<div className="space-y-4">

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex md:p-6 cursor-pointer select-none md:text-base text-sm font-medium text-gray-900 font-montserrat pt-5 pr-5 pb-5 pl-5 items-center justify-between">
              How fast can we expect results?
              <iconify-icon className="md:w-5 md:h-5 transition-transform group-open:rotate-180 w-[16px] h-[16px] text-gray-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="md:px-6 leading-relaxed text-sm font-light text-gray-500 border-gray-100 border-t pt-4 pr-5 pb-6 pl-5">
              Most clients see initial lead flow within 14 days of launch. Full
              optimization usually occurs by month 2, scaling aggressively in
              month 3.
            </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex md:p-6 cursor-pointer select-none md:text-base text-sm font-medium text-gray-900 font-montserrat pt-5 pr-5 pb-5 pl-5 items-center justify-between">
              How does your service work?
              <iconify-icon className="md:w-5 md:h-5 transition-transform group-open:rotate-180 w-[16px] h-[16px] text-gray-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="md:px-6 leading-relaxed text-sm font-light text-gray-500 border-gray-100 border-t pt-4 pr-5 pb-6 pl-5">
              We build, manage, and operate a client acquisition system for you
              - 100% done for you. No need to spend countless hours sending
              e-mails prospecting on LinkedIn, cold-calling, scaling paid media
              spend, or hiring, training, and paying salaries to business
              development reps. We handle all the prospecting, lead nurturing,
              and appointment setting for you so that you simple show top to
              sales meetings and close deals.
            </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex md:p-6 cursor-pointer select-none md:text-base text-sm font-medium text-gray-900 font-montserrat pt-5 pr-5 pb-5 pl-5 items-center justify-between">
              How do you qualify your leads?
              <iconify-icon className="md:w-5 md:h-5 transition-transform group-open:rotate-180 w-[16px] h-[16px] text-gray-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="md:px-6 leading-relaxed text-sm font-light text-gray-500 border-gray-100 border-t pt-4 pr-5 pb-6 pl-5">Based on your ideal client profile that we define together during the onboarding process, we’ll leverage 50+ best-in-class data providers and AI tools to filter, scrape, and verify lead lists of prospects matching your ideal client profile. Common data points include employee headcount, funding, industry location, revenue, website traffic, and more.</div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex md:p-6 cursor-pointer select-none md:text-base text-sm font-medium text-gray-900 font-montserrat pt-5 pr-5 pb-5 pl-5 items-center justify-between">
              How transparent is your process?
              <iconify-icon className="md:w-5 md:h-5 transition-transform group-open:rotate-180 w-[16px] h-[16px] text-gray-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="md:px-6 leading-relaxed text-sm font-light text-gray-500 border-gray-100 border-t pt-4 pr-5 pb-6 pl-5">
              Extremely, you’ll have consistent open communication with me
              personally through a dedicated slack workspace and a project
              management interface. We share all correspondence with your
              prospects, where they’re at in the pipeline, and campaign data
              with you in real time. We also provide weekly KPI reports around
              key metrics to measure your campaigns’ success.
            </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex md:p-6 cursor-pointer select-none md:text-base text-sm font-medium text-gray-900 font-montserrat pt-5 pr-5 pb-5 pl-5 items-center justify-between">
              What happens if I don’t see results?
              <iconify-icon className="md:w-5 md:h-5 transition-transform group-open:rotate-180 w-[16px] h-[16px] text-gray-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="md:px-6 leading-relaxed text-sm font-light text-gray-500 border-gray-100 border-t pt-4 pr-5 pb-6 pl-5">Our guarantee is that if we don’t book you 5 qualified sales meetings within 30 days of campaign launch, you won’t get invoiced for that month. For subsequent months, if we don’t deliver the exact inputs per our service agreement, you won't get invoiced for that month.</div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex md:p-6 cursor-pointer select-none md:text-base text-sm font-medium text-gray-900 font-montserrat pt-5 pr-5 pb-5 pl-5 items-center justify-between">
              Do you work with any industry?
              <iconify-icon className="md:w-5 md:h-5 transition-transform group-open:rotate-180 w-[16px] h-[16px] text-gray-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="md:px-6 leading-relaxed text-sm font-light text-gray-500 border-gray-100 border-t pt-4 pr-5 pb-6 pl-5">
              We work with B2B businesses that meet the required criteria. This
              allows us to maintain our high success rate and revenue
              guarantees. These are discussed on the call.
            </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex md:p-6 cursor-pointer select-none md:text-base text-sm font-medium text-gray-900 font-montserrat pt-5 pr-5 pb-5 pl-5 items-center justify-between">
              What is the guarantee exactly?
              <iconify-icon className="md:w-5 md:h-5 transition-transform group-open:rotate-180 w-[16px] h-[16px] text-gray-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="md:px-6 leading-relaxed text-sm font-light text-gray-500 border-gray-100 border-t pt-4 pr-5 pb-6 pl-5">If we don't hit the target lead flow, we work for free until we do. It's written in the contract.</div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex md:p-6 cursor-pointer select-none md:text-base text-sm font-medium text-gray-900 font-montserrat pt-5 pr-5 pb-5 pl-5 items-center justify-between">
              How much of my time is required?
              <iconify-icon className="md:w-5 md:h-5 transition-transform group-open:rotate-180 w-[16px] h-[16px] text-gray-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="md:px-6 leading-relaxed text-sm font-light text-gray-500 border-gray-100 border-t pt-4 pr-5 pb-6 pl-5">
              Very little. We need about 30 minutes for onboarding. After that,
              we just need you to handle the leads we generate.
            </div>
</details>
</div>
</section>

<div className="max-w-2xl mx-auto px-4 text-center mb-12 -mt-12">
<p className="text-lg md:text-xl font-medium text-rose-600 font-serif italic bg-rose-50 border border-rose-100 py-3 px-6 rounded-full inline-block">
          This is only available to the next 5 business owners because I
          personally service my clients from start to finish
        </p>
</div>

<section className="mx-auto py-16 md:py-24 px-4 md:px-6 max-w-7xl" id="contact">
<div className="text-center mb-10 md:mb-16">
<h2 className="text-3xl md:text-5xl font-serif font-medium text-gray-900 mb-6 tracking-tight">
            Book a Call
          </h2>
<p className="md:text-lg text-base font-light text-gray-500 max-w-2xl mr-auto ml-auto">
            Book a no-commitment discovery call to discuss how we can help you
            grow.
          </p>
</div>
<div className="w-full bg-white rounded-[2rem] border border-gray-200 shadow-sm overflow-hidden">

<div className="calendly-inline-widget" data-processed="true" data-url="https://calendly.com/adrian-shier/30min" style={{position: 'relative', minWidth: '320px', height: '700px'}}><div className="calendly-spinner"><div className="calendly-bounce1"></div><div className="calendly-bounce2"></div><div className="calendly-bounce3"></div></div><iframe className="" frameborder="0" height="100%" src="https://calendly.com/adrian-shier/30min?embed_domain=&amp;embed_type=Inline" title="Select a Date &amp; Time - Calendly" width="100%"></iframe></div>


</div>
</section>
</main>

<footer className="md:pt-16 md:pb-10 md:px-6 bg-white border-gray-200 border-t pt-12 pr-4 pb-8 pl-4">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-10">

<div className="text-center md:text-left">
<a className="text-2xl font-medium italic text-gray-900 tracking-tight font-serif" href="#">
            Outbound Client
          </a>
<p className="md:mx-0 text-xs font-light text-gray-400 max-w-xs mt-3 mr-auto ml-auto">
            Let's get you clients
          </p>
</div>

<div className="flex flex-col gap-3 text-center md:text-right">
<a className="text-sm transition-colors font-medium text-gray-600 hover:text-rose-600" href="#">
            Services
          </a>
<a className="text-sm transition-colors font-medium text-gray-600 hover:text-rose-600" href="#">
            About
          </a>
<a className="text-sm transition-colors font-medium text-gray-600 hover:text-rose-600" href="#">
            Contact
          </a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 md:mt-16 pt-8 border-t text-center text-[10px] md:text-xs font-montserrat border-gray-100 text-gray-400">
<p className="">© 2026 Outbound Client. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
