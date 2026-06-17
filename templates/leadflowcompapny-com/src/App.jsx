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
      

<header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:pt-6 md:px-6 pointer-events-none">
<nav className="glass flex md:gap-10 shadow-black/50 transition-all duration-300 w-full max-w-5xl pointer-events-auto rounded-full pt-2 pr-2 pb-2 pl-5 shadow-2xl gap-x-4 gap-y-4 items-center justify-between">

<a className="group flex items-center gap-2 shrink-0" href="#">
<span className="md:text-2xl group-hover:text-rose-500 transition-colors text-xl font-medium italic text-white tracking-tight font-serif">
            Lead Flow Company
          </span>
</a>

<a className="md:px-5 md:py-2.5 transition-all duration-300 flex items-center gap-2 group hover:shadow-lg hover:shadow-rose-500/20 hover:bg-rose-600 hover:text-white shrink-0 text-xs font-medium text-black font-montserrat bg-white rounded-full pt-2 pr-4 pb-2 pl-4 shadow-md" href="#book-call">
          Get Started
          <iconify-icon className="transition-transform group-hover:translate-x-0.5 hidden sm:block text-lg" height="18" icon="solar:arrow-right-linear" style={{color: 'rgb(255, 255, 255)'}} width="18"></iconify-icon>
</a>
</nav>
</header>
<main className="md:pt-32 md:px-6 max-w-7xl mr-auto ml-auto pt-28 pr-4 pb-24 pl-4">

<section className="md:rounded-[2.5rem] md:p-12 lg:p-20 shadow-black/20 overflow-hidden md:mb-16 text-center bg-[#0A0A0A] border-white/5 border rounded-[2rem] mb-12 pt-12 pr-6 pb-12 pl-6 relative shadow-2xl">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-30"></div>
<div className="z-10 flex flex-col max-w-5xl mr-auto ml-auto relative items-center">

<div className="animate-fade-up text-[10px] uppercase md:mb-8 font-semibold text-rose-400 tracking-widest font-montserrat bg-rose-950/30 w-fit border-rose-900/50 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3">
            Attention B2B Businesses!
          </div>

<h1 className="animate-fade-up delay-100 sm:text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] md:leading-[0.95] md:mb-8 text-4xl font-medium text-white tracking-tighter font-serif mb-6">
            We'll Build &amp; Launch Your Cold Email Machine &amp; Deliver 20-30
            Qualified Leads Within 60 Days - All On A Performance Basis!
          </h1>

<p className="animate-fade-up delay-200 md:text-xl leading-relaxed md:mb-12 text-base font-light text-gray-400 max-w-2xl mb-8 pr-2 pl-2">
            We handle the entire cold email system—from list building to call
            booking. You only pay per qualified lead that shows up.
          </p>

<div className="animate-fade-up delay-300 relative w-full max-w-4xl aspect-video rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-2xl overflow-hidden mb-8 md:mb-12 bg-black border-white/10 shadow-black ring-1 ring-white/5">
<wistia-player aspect="1.7777777777777777" media-id="ieii2teuvz"></wistia-player>
</div>

<div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center w-full mb-6">
<a className="w-full sm:w-auto px-8 py-3.5 md:py-4 rounded-full text-sm hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-300 flex items-center justify-center gap-2 font-montserrat font-medium group bg-white text-black hover:bg-rose-600 hover:text-white" href="#book-call">
              Get Started
              <iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto border px-8 py-3.5 md:py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center justify-center gap-2 bg-transparent border-white/10 text-white hover:border-white/30 hover:bg-white/5" href="#enquiry">
              Learn More
            </a>
</div>

<p className="animate-fade-up delay-500 text-[10px] md:text-xs font-montserrat text-gray-500">
            Book a Free Strategy Session. No credit card required.
          </p>
</div>
</section>

<section className="md:py-20 max-w-6xl mr-auto ml-auto pt-12 pb-12">
<h2 className="md:text-5xl md:mb-16 text-3xl font-medium text-white tracking-tight font-serif text-center mb-10 pr-4 pl-4">
          Are You Currently Struggling With...
        </h2>
<div className="grid md:grid-cols-3 gap-6 md:gap-8">

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg shadow-black" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(244,63,94,0.3), rgba(244,63,94,0.05))', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-2xl md:text-3xl" icon="solar:graph-down-linear"></iconify-icon>
</div>
<h3 className="md:text-xl md:mb-3 text-lg font-semibold text-white font-montserrat mb-2">
              Lead Gen Methods That Don't Work
            </h3>
<p className="leading-relaxed text-sm font-light text-gray-400">
              You’ve wasted thousands on Facebook ads that get ignored, spent
              hours on LinkedIn outreach that goes unanswered, and waited months
              for SEO that never delivers. It feels like you’re shouting into
              the void.
            </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(244, 63, 94, 0.3), rgba(244, 63, 94, 0.05))', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-2xl md:text-3xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="md:text-xl md:mb-3 text-lg font-semibold text-white font-montserrat mb-2">
              Unqualified Prospects
            </h3>
<p className="leading-relaxed text-sm font-light text-gray-400">
              The few leads you do get are complete garbage. They don’t have the
              budget, they aren’t the decision-maker, or they ghost you after
              the first call. Your calendar is full, but your pipeline is empty.
            </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg shadow-black" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(244,63,94,0.3), rgba(244,63,94,0.05))', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-2xl md:text-3xl" icon="solar:danger-circle-linear"></iconify-icon>
</div>
<h3 className="md:text-xl md:mb-3 text-lg font-semibold text-white font-montserrat mb-2">
              Zero Predictability in Your Sales Pipeline
            </h3>
<p className="leading-relaxed text-sm font-light text-gray-400">
              One month you’re swamped with clients, the next you’re wondering
              how you’ll make payroll. This feast-or-famine cycle makes it
              impossible to hire, scale, or plan for the future with any
              confidence.
            </p>
</div>
</div>
</section>

<section className="md:py-20 pt-12 pb-12">
<div className="md:mb-16 text-center mb-10 pr-4 pl-4">
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight font-serif mb-4">
            Why Choose Lead Flow Company
          </h2>
<p className="md:text-base text-sm font-light text-gray-400 max-w-2xl mr-auto ml-auto">
            We’re different from other agencies because we operate on a
            pay-per-performance model. Our success is directly tied to your
            success.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-white font-montserrat mb-3">
              Guaranteed Qualified Leads
            </h3>
<p className="leading-relaxed z-10 text-sm font-light text-gray-400 relative">
              We don’t just book appointments; we book qualified calls with
              prospects who have a genuine need for your service and the
              authority to make a buying decision.
            </p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<iconify-icon className="text-6xl md:text-8xl" icon="solar:target-linear"></iconify-icon>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-white font-montserrat mb-3">
              Eliminate Wasted Ad Spend
            </h3>
<p className="leading-relaxed z-10 text-sm font-light text-gray-400 relative">
              Stop gambling with your marketing budget. With our pay-per-call
              model, you completely eliminate the risk of wasted ad spend and
              only invest in what works.
            </p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<iconify-icon className="text-6xl md:text-8xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-white font-montserrat mb-3">
              A Predictable Sales Pipeline
            </h3>
<p className="leading-relaxed z-10 text-sm font-light text-gray-400 relative">
              Finally achieve the predictable pipeline you need to scale your
              business with confidence. Know exactly where your next clients are
              coming from, month after month.
            </p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<iconify-icon className="text-6xl md:text-8xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex justify-center">
<a className="w-full sm:w-auto justify-center px-8 py-3.5 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 bg-white text-black hover:bg-rose-600 hover:text-white" href="#book-call">
            Book a Call
            <iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
</a>
</div>
</section>

<section className="md:py-24 pt-16 pb-16" id="process">
<div className="text-center mb-12 md:mb-16">
<span className="text-[10px] md:text-xs uppercase block font-bold text-rose-500 tracking-widest font-montserrat mb-3">
            Our Process
          </span>
<h2 className="md:text-5xl text-3xl font-medium text-white font-serif">
            HOW THE PAY-PER-PERFORMANCE SYSTEM WORKS
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-10 md:gap-8 relative max-w-6xl mx-auto">

<div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent to-transparent -z-10 via-white/10"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
              1
            </div>
<h3 className="md:text-xl md:mb-3 text-lg font-bold text-white font-montserrat mb-2">
              We Build Your Custom Cold Email Machine
            </h3>
<p className="leading-relaxed md:px-0 text-sm font-light text-gray-400 max-w-xs pr-4 pl-4">
              We research your ideal customers, craft personalized email
              sequences, and set up the entire technical infrastructure.
            </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="md:w-24 md:h-24 flex md:text-2xl md:mb-6 group-hover:border-rose-500 group-hover:text-rose-500 transition-colors text-xl text-gray-600 font-serif bg-[#0a0a0a] w-20 h-20 border-white/10 border rounded-full mb-5 shadow-sm items-center justify-center">
              2
            </div>
<h3 className="md:text-xl md:mb-3 text-lg font-bold text-white font-montserrat mb-2">
              We Launch and Optimize Your Campaigns
            </h3>
<p className="leading-relaxed md:px-0 text-sm font-light text-gray-400 max-w-xs pr-4 pl-4">
              Our team sends targeted emails to your perfect prospects, handles
              all responses, and qualifies every lead before it reaches you.
              Still no payment required.
            </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
              3
            </div>
<h3 className="md:text-xl md:mb-3 text-lg font-bold text-white font-montserrat mb-2">
              You Only Pay When Qualified Calls Are Booked
            </h3>
<p className="leading-relaxed md:px-0 text-sm font-light text-gray-400 max-w-xs pr-4 pl-4">
              We book qualified calls directly into your calendar. Only when a
              prospect shows up and meets your criteria do you pay our
              performance fee. No show? No pay.
            </p>
</div>
</div>
<div className="flex justify-center mt-12 md:mt-16">
<a className="w-full sm:w-auto justify-center px-10 py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 shadow-lg shadow-black/50 hover:shadow-rose-500/20 bg-white text-black hover:bg-rose-600 hover:text-white" href="#book-call">
            Book Your Transformation
            <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="md:py-20 -mx-4 md:-mx-6 md:px-6 md:rounded-[3rem] border-y bg-[#0a0a0a] border-white/5 rounded-[2.5rem] pt-16 pr-4 pb-16 pl-4">
<div className="max-w-7xl mx-auto">
<h2 className="md:text-5xl md:mb-16 text-3xl font-medium text-white tracking-tight font-serif text-center mb-10">
            What's Included
          </h2>
<div className="rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 border shadow-2xl shadow-black relative overflow-hidden bg-[#111] border-white/5">
<div className="absolute top-0 right-0 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-gradient-to-b to-transparent rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none from-rose-900/10"></div>
<div className="z-10 flex flex-col relative items-center">
<div className="md:mb-12 text-center max-w-3xl mb-8">
<span className="font-bold tracking-widest uppercase text-[10px] md:text-xs font-montserrat mb-4 block text-rose-500">
                  The Ecosystem
                </span>
<h3 className="text-2xl md:text-4xl font-serif mb-4 md:mb-6 text-white">
                  All-In-One Growth Infrastructure
                </h3>
<p className="md:text-lg text-base font-light text-gray-400">
                  We productize our service to deliver a seamless, hands-off
                  experience for you.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-y-4 gap-x-20 md:gap-y-6 w-full max-w-4xl mb-12 md:mb-16">
<ul className="space-y-4 md:space-y-6">
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-lg md:text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">
                      Complete Email Infrastructure Setup
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-lg md:text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">
                      A Custom-Built Prospect Database
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-lg md:text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">
                      Expertly Crafted Email Sequences
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-lg md:text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">
                      Ongoing Campaign Management
                    </span>
</li>
</ul>
<ul className="space-y-4 md:space-y-6">
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-lg md:text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">
                      Full-Time Lead Management
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-lg md:text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">
                      Direct Delivery of Qualified Leads
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-lg md:text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">
                      Real-Time Reporting Dashboard
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="text-lg md:text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-bold text-white font-montserrat border-rose-500/40 border-b-2">
                      20-30 Leads Within 60 Days Guaranteed Or You Don't Pay!
                    </span>
</li>
</ul>
</div>
<div className="flex flex-col items-center w-full">
<a className="w-full md:w-auto text-base md:text-lg px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 shadow-xl font-montserrat font-medium flex items-center justify-center gap-3 group bg-white text-black hover:bg-rose-600 hover:text-white shadow-black/50" href="#book-call">
                  Secure Your Growth Partner
                  <iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<p className="md:mt-6 md:text-sm text-xs text-gray-500 font-montserrat mt-4">
                  No monthly retainers! Only pay for results!
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 mb-16 md:mb-20 rounded-[2rem] md:rounded-[2.5rem] text-center px-4 md:px-6 relative overflow-hidden bg-[#0a0a0a] border border-white/5" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-950/40 via-transparent to-transparent"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="md:text-5xl md:mb-6 text-3xl font-medium text-white tracking-tight font-serif mb-4">
            Free Cold Email Lead Generation Audit
          </h2>
<p className="md:text-lg md:mb-10 text-base font-light text-gray-400 mb-8">
            We’ll analyse your business and show you how to generate 20–30
            qualified leads per month.
          </p>
<form action="https://formsubmit.co/yahya@leadflowcompany.com" className="flex flex-col gap-3 max-w-sm mx-auto" method="POST">
<input name="_subject" type="hidden" value="New Lead Generation Audit Request"/>
<input name="_captcha" type="hidden" value="false"/>
<input name="_template" type="hidden" value="box"/>
<input className="w-full border rounded-full px-6 py-3.5 md:py-4 placeholder-gray-600 focus:outline-none focus:border-rose-500 transition-colors backdrop-blur-sm bg-white/5 border-white/10 text-white" name="Email" placeholder="Enter your email" required="" type="email"/>
<input className="w-full border rounded-full px-6 py-3.5 md:py-4 placeholder-gray-600 focus:outline-none focus:border-rose-500 transition-colors backdrop-blur-sm bg-white/5 border-white/10 text-white" name="Website" placeholder="Your website URL" type="url"/>
<button className="w-full mt-2 md:py-4 hover:bg-rose-500 transition-colors shadow-lg shadow-black/30 font-bold text-black hover:text-white bg-white rounded-full pt-3.5 pr-8 pb-3.5 pl-8" type="submit">
              Get My Free Audit
            </button>
<p className="text-xs text-gray-500 mt-2 font-montserrat">
              Takes 30 seconds • Audit delivered in 24 hours
            </p>
</form>
</div>
</section>

<section className="md:py-10 md:mb-24 md:px-6 max-w-3xl mr-auto mb-16 ml-auto pt-8 pr-2 pb-8 pl-2">
<h2 className="text-2xl md:text-3xl text-center mb-10 md:mb-12 tracking-tight font-serif font-medium text-white">
          FAQs — Everything you need to know.
        </h2>
<div className="space-y-4">

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex md:p-6 cursor-pointer select-none md:text-base text-sm font-medium text-white font-montserrat pt-5 pr-5 pb-5 pl-5 items-center justify-between">
              How does the pay-per-lead model work?
              <iconify-icon className="text-lg text-gray-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              We operate on a performance basis, which means we only make money
              when we deliver you leads that meet your criteria. We don't charge
              any upfront retainers, you only pay for results.
            </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex md:p-6 cursor-pointer select-none md:text-base text-sm font-medium text-white font-montserrat pt-5 pr-5 pb-5 pl-5 items-center justify-between">
              How much work do I need to do on my end? Will this take up my
              time?
              <iconify-icon className="text-lg text-gray-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              Almost zero. After our initial strategy call where we define your
              ideal customer profile, the entire process is completely
              hands-off.
            </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
              What if my industry is too niche or competitive? Will this still
              work?
              <iconify-icon className="text-lg text-gray-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              Cold email works across virtually every B2B industry—from SaaS to
              consulting, from professional services to manufacturing. The key
              is precision targeting, which is exactly what we do. We don't try
              to reach everyone; we identify the specific decision-makers in
              your niche who are most likely to buy.
            </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
              What happens after I book a call? How quickly can we get started?
              <iconify-icon className="text-lg text-gray-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              On your strategy call, we'll discuss your business, your ideal
              customers, and your goals. Once you're ready to move forward it
              will take approximately 2 weeks to build your custom cold email
              machine. After that, we get your approval on the campaigns and
              launch. You can expect interested prospects coming in within 1-3
              weeks of launch.
            </div>
</details>
</div>
<p className="text-center text-sm mt-8 text-gray-500">
          Don't see what you're looking for?
          <a className="underline transition-all text-rose-400 decoration-rose-900 hover:decoration-rose-400" href="#enquiry">
            Get in touch
          </a>
          .
        </p>
</section>

<section className="md:py-24 md:px-6 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4" id="book-call">
<div className="text-center mb-10 md:mb-16">
<h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-6 tracking-tight">
            Book a Call
          </h2>
<p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto">
            Book a no-commitment discovery call to discuss how we can help you
            grow.
          </p>
</div>
<div className="w-full bg-[#0a0a0a] rounded-[2rem] border border-white/5 shadow-sm overflow-hidden">

<div className="calendly-inline-widget w-full" data-processed="true" data-url="https://calendly.com/yahya-leadflowcompany/30min?hide_gdpr_banner=1&amp;background_color=0a0a0a&amp;text_color=ffffff&amp;primary_color=e11d48" style={{position: 'relative', minWidth: '320px', height: '700px'}}>
<div className="calendly-spinner">
<div className="calendly-bounce1"></div>
<div className="calendly-bounce2"></div>
<div className="calendly-bounce3"></div>
</div>
<iframe className="" frameborder="0" height="100%" src="https://calendly.com/yahya-leadflowcompany/30min?embed_domain=&amp;embed_type=Inline&amp;hide_gdpr_banner=1&amp;background_color=0a0a0a&amp;text_color=ffffff&amp;primary_color=e11d48" title="Select a Date &amp; Time - Calendly" width="100%"></iframe>
</div>


</div>
</section>

<section className="md:py-24 md:px-6 max-w-3xl mx-auto pt-16 pr-4 pb-16 pl-4" id="enquiry">
<div className="text-center mb-10 md:mb-12">
<h2 className="text-3xl md:text-5xl font-serif font-medium text-white tracking-tight mb-4">
            Have a Question?
          </h2>
<p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto">
            Send us a message and we'll get back to you within 24 hours.
          </p>
</div>
<div className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-6 md:p-10 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-[20rem] h-[20rem] bg-gradient-to-b to-transparent rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none from-rose-900/10"></div>
<form action="https://formsubmit.co/yahya@leadflowcompany.com" className="flex flex-col gap-4 relative z-10" method="POST">
<input name="_captcha" type="hidden" value="false"/>
<input name="_template" type="hidden" value="box"/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full border rounded-xl px-4 py-3.5 md:py-4 placeholder-gray-600 focus:outline-none focus:border-rose-500 transition-colors bg-white/5 border-white/10 text-white text-sm font-montserrat" name="Name" placeholder="Name" required="" type="text"/>
<input className="w-full border rounded-xl px-4 py-3.5 md:py-4 placeholder-gray-600 focus:outline-none focus:border-rose-500 transition-colors bg-white/5 border-white/10 text-white text-sm font-montserrat" name="Email" placeholder="Email" required="" type="email"/>
</div>
<input className="w-full border rounded-xl px-4 py-3.5 md:py-4 placeholder-gray-600 focus:outline-none focus:border-rose-500 transition-colors bg-white/5 border-white/10 text-white text-sm font-montserrat" name="Website" placeholder="Website" type="url"/>
<textarea className="w-full border rounded-xl px-4 py-3.5 md:py-4 placeholder-gray-600 focus:outline-none focus:border-rose-500 transition-colors bg-white/5 border-white/10 text-white text-sm font-montserrat h-32 md:h-40 resize-none" name="Message" placeholder="Message" required=""></textarea>
<button className="w-full mt-4 py-4 hover:bg-rose-500 transition-colors shadow-lg shadow-black/30 font-bold text-black hover:text-white bg-white rounded-full font-montserrat text-sm" type="submit">
              Send Message
            </button>
</form>
</div>
</section>
</main>

<footer className="md:pt-16 md:pb-10 md:px-6 bg-[#050505] border-white/5 border-t pt-12 pr-4 pb-8 pl-4">
<div className="flex flex-col md:flex-row md:items-start md:gap-10 max-w-7xl mr-auto ml-auto gap-x-8 gap-y-8 items-center justify-between">

<div className="text-center md:text-left">
<a className="font-serif text-2xl tracking-tight italic font-medium text-white" href="#">
            Lead Flow Company.
          </a>
<p className="text-xs mt-3 max-w-xs font-light text-gray-500 mx-auto md:mx-0">
            Scaling revenue for ambitious brands through intelligent ecosystems.
          </p>
</div>

<div className="flex flex-col gap-3 text-center md:text-right">
<a className="transition-colors hover:text-rose-400 text-sm font-medium text-gray-400" href="#">
            Services
          </a>
<a className="text-sm transition-colors font-medium text-gray-400 hover:text-rose-400" href="#">
            About
          </a>
<a className="transition-colors hover:text-rose-400 text-sm font-medium text-gray-400" href="#enquiry">
            Contact
          </a>
<a className="transition-colors hover:text-rose-400 text-sm font-medium text-gray-400" href="https://linkedin.com/in/yahya-amiri-7210a1402" rel="noopener noreferrer" target="_blank">
            LinkedIn
          </a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 md:mt-16 pt-8 border-t text-center text-[10px] md:text-xs font-montserrat border-white/5 text-gray-600">
<p>© 2024 Lead Flow Company. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
