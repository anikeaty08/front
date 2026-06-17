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



        // Simple Router to simulate multi-page experience in one file
        function router(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-view').forEach(el => {
                el.classList.add('hidden-page');
                el.classList.remove('fade-enter-active');
            });
            
            // Show target page
            const target = document.getElementById('view-' + pageId);
            if(target) {
                target.classList.remove('hidden-page');
                // Trigger reflow
                void target.offsetWidth;
                target.classList.add('fade-enter-active');
            }
            
            // Update active state in nav
            document.querySelectorAll('.nav-link').forEach(btn => {
                if(btn.dataset.target === pageId) {
                    btn.classList.add('text-slate-900', 'font-semibold');
                    btn.classList.remove('text-slate-600');
                } else {
                    btn.classList.remove('text-slate-900', 'font-semibold');
                    btn.classList.add('text-slate-600');
                }
            });

            // Scroll to top
            window.scrollTo(0, 0);
        }

        function scrollToSection(id) {
            const el = document.getElementById(id);
            if(el) el.scrollIntoView({ behavior: 'smooth' });
        }

        function toggleAccordion(btn) {
            const content = btn.nextElementSibling;
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            
            btn.setAttribute('aria-expanded', !isExpanded);
            content.classList.toggle('open');
        }

        // Initialize Home
        document.addEventListener('DOMContentLoaded', () => {
            router('home');
        });
    
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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#" onclick="router('home')">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900">SimplyServices</span>
</a>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
<button className="hover:text-slate-900 transition-colors nav-link" data-target="home" onclick="router('home')">Services</button>
<button className="hover:text-slate-900 transition-colors nav-link" data-target="contractors" onclick="router('contractors')">For Contractors</button>
<button className="hover:text-slate-900 transition-colors nav-link" data-target="clients" onclick="router('clients')">For Clients</button>
<a className="hover:text-slate-900 transition-colors" href="/support">Support</a>
<a className="hover:text-slate-900 transition-colors" href="/free-guide">Free Guide</a>
<a className="hover:text-slate-900 transition-colors" href="/terms">T&amp;Cs</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-500 hover:text-slate-900" href="[OS_LOGIN_URL]">Login (OS)</a>
<a className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-600 text-sm font-semibold text-white hover:bg-orange-700 shadow-lg shadow-orange-600/20 transition-all" href="[OS_PUBLIC_ENTRY_URL]">
                    Get 3 Quotes
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</header>

<main className="flex-grow pt-20">



<div className="page-view fade-enter-active" id="view-home">

<section className="pt-20 pb-20 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-6">
<iconify-icon icon="solar:star-linear"></iconify-icon>
                            The smartest way to hire trades
                        </div>
<h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                            Get 3 Trusted Quotes. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">You Choose.</span> <br/>
                            We manage the rest.
                        </h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            One request connects you to verified local pros. We handle scheduling, quality checks, and payments.
                        </p>

<div className="flex flex-col sm:flex-row gap-4 mb-8">
<a className="flex justify-center items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors" href="[OS_PUBLIC_ENTRY_URL]">
                                Request Service
                            </a>
<button className="flex justify-center items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors" onclick="router('contractors')">
                                Contractor Signup
                            </button>
</div>

<div className="flex flex-wrap gap-4 text-xs font-medium text-slate-500">
<span className="flex items-center gap-1"><iconify-icon className="text-indigo-600" icon="solar:verified-check-linear"></iconify-icon> Verified Pros</span>
<span className="flex items-center gap-1"><iconify-icon className="text-indigo-600" icon="solar:shield-check-linear"></iconify-icon> Quality Guarantee</span>
</div>
</div>

<div className="relative lg:h-[500px] bg-slate-100 rounded-3xl border border-slate-200 p-8 flex flex-col justify-between shadow-inner">
<div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/80 pointer-events-none"></div>
<div className="space-y-4 relative z-10">
<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600"><iconify-icon icon="solar:user-hand-up-linear"></iconify-icon></div>
<div><div className="text-sm font-bold text-slate-900">Request Sent</div><div className="text-xs text-slate-500">Plumbing • Kitchen Sink</div></div>
</div>
<div className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Active</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 opacity-90 scale-95 translate-y-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600"><iconify-icon icon="solar:file-check-linear"></iconify-icon></div>
<div><div className="text-sm font-bold text-slate-900">3 Quotes Ready</div><div className="text-xs text-slate-500">Tap to review &amp; select</div></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">SimplyServices is your Project Manager.</h2>
<p className="text-slate-600">We aren't just a directory. We are the active layer between you and the job getting done right.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-sm mb-6"><iconify-icon icon="solar:file-check-linear" width="28"></iconify-icon></div>
<h3 className="text-xl font-bold text-slate-900 mb-3">3 Quote System™</h3>
<p className="text-slate-600 text-sm">Strictly vetted quotes in a standardized format so you can compare apples to apples.</p>
</div>
<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-600 shadow-sm mb-6"><iconify-icon icon="solar:user-speak-linear" width="28"></iconify-icon></div>
<h3 className="text-xl font-bold text-slate-900 mb-3">We Manage the Job</h3>
<p className="text-slate-600 text-sm">We handle the scheduling, updates, and communication. You have one dedicated coordinator.</p>
</div>
<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-teal-600 shadow-sm mb-6"><iconify-icon icon="solar:card-check-linear" width="28"></iconify-icon></div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Safer Payments</h3>
<p className="text-slate-600 text-sm">Funds are held securely. You approve completion before the contractor gets the final payout.</p>
</div>
</div>

<div className="mt-12 flex justify-center gap-6 border-t border-slate-100 pt-8">
<a className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1" href="[OS_PUBLIC_ENTRY_URL]">Request Service <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
<span className="text-slate-300">|</span>
<button className="text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1" onclick="router('contractors')">Contractor Signup <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-6">How it works</h2>
<ul className="space-y-6">
<li className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
<div><h4 className="font-bold text-slate-900">Request</h4><p className="text-sm text-slate-600">Tell us what you need in 2 minutes.</p></div>
</li>
<li className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
<div><h4 className="font-bold text-slate-900">Compare</h4><p className="text-sm text-slate-600">Get 3 verified quotes to your dashboard.</p></div>
</li>
<li className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
<div><h4 className="font-bold text-slate-900">Done</h4><p className="text-sm text-slate-600">We manage the pro until the job is done.</p></div>
</li>
</ul>
<div className="mt-8 flex gap-4">
<a className="px-5 py-2.5 bg-orange-600 text-white rounded-lg text-sm font-semibold hover:bg-orange-700" href="[OS_PUBLIC_ENTRY_URL]">Start Request</a>
<button className="px-5 py-2.5 border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-white" onclick="router('contractors')">Join as Pro</button>
</div>
</div>
<div className="relative bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">

<div className="space-y-3">
<div className="flex justify-between items-center border-b border-slate-100 pb-2">
<span className="text-xs font-bold text-slate-400 uppercase">Quote 1</span>
<span className="text-sm font-bold text-slate-900">$150</span>
</div>
<div className="flex justify-between items-center border-b border-slate-100 pb-2">
<span className="text-xs font-bold text-slate-400 uppercase">Quote 2</span>
<span className="text-sm font-bold text-slate-900">$185</span>
</div>
<div className="flex justify-between items-center bg-indigo-50 p-2 rounded-lg border border-indigo-100">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-xs font-bold text-indigo-900">Best Value</span>
</div>
<span className="text-sm font-bold text-indigo-700">$145</span>
</div>
</div>
</div>
</div>
</div>
</section>
</div>



<div className="page-view hidden-page" id="view-contractors">

<section className="pt-20 pb-20 px-6 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-6">
<iconify-icon icon="solar:case-minimalistic-linear"></iconify-icon>
                            For Professional Trades
                        </div>
<h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Get consistent work without wasting money on ads.
                        </h1>
<p className="text-lg text-slate-300 mb-8 leading-relaxed">
                            Join SimplyServices. Quote fast, win jobs, and focus on the work. We handle the client management.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex justify-center items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors" onclick="scrollToSection('contractor-signup')">
                                Apply to Join
                            </button>
<a className="flex justify-center items-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 rounded-lg font-semibold hover:bg-slate-800 transition-colors" href="[OS_LOGIN_URL]">
                                Contractor Login (OS)
                            </a>
</div>
</div>

<div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
<div className="flex items-center justify-between mb-6 border-b border-slate-700/50 pb-4">
<span className="text-sm font-medium text-slate-300">New Leads (3)</span>
<span className="text-xs bg-indigo-500 text-white px-2 py-1 rounded">Live</span>
</div>
<div className="space-y-3">
<div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex justify-between items-center hover:border-indigo-500/50 transition-colors cursor-pointer">
<div>
<div className="text-sm font-bold text-white">Electrical Repair</div>
<div className="text-xs text-slate-400">Downtown • Urgent</div>
</div>
<iconify-icon className="text-slate-500" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex justify-between items-center hover:border-indigo-500/50 transition-colors cursor-pointer">
<div>
<div className="text-sm font-bold text-white">HVAC Install</div>
<div className="text-xs text-slate-400">Westside • Next Week</div>
</div>
<iconify-icon className="text-slate-500" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">
<div className="p-6 bg-red-50/50 rounded-2xl border border-red-100">
<div className="text-red-500 mb-2 font-bold flex items-center gap-2"><iconify-icon icon="solar:close-circle-linear"></iconify-icon> The Pain</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Stop chasing leads</h3>
<p className="text-sm text-slate-600 mb-4">Tired of paying for leads that never answer or have already hired someone else?</p>
<div className="flex items-center gap-2 text-indigo-600 text-sm font-semibold mt-auto pt-4 border-t border-red-100">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon> We deliver qualified requests
                            </div>
</div>
<div className="p-6 bg-red-50/50 rounded-2xl border border-red-100">
<div className="text-red-500 mb-2 font-bold flex items-center gap-2"><iconify-icon icon="solar:close-circle-linear"></iconify-icon> The Pain</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Stop doing admin</h3>
<p className="text-sm text-slate-600 mb-4">Drowning in paperwork, chasing invoices, and scheduling calls?</p>
<div className="flex items-center gap-2 text-indigo-600 text-sm font-semibold mt-auto pt-4 border-t border-red-100">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon> Simple quote + job updates
                            </div>
</div>
<div className="p-6 bg-red-50/50 rounded-2xl border border-red-100">
<div className="text-red-500 mb-2 font-bold flex items-center gap-2"><iconify-icon icon="solar:close-circle-linear"></iconify-icon> The Pain</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Hard to prove quality</h3>
<p className="text-sm text-slate-600 mb-4">Competing against "cowboys" who undercut on price and quality?</p>
<div className="flex items-center gap-2 text-indigo-600 text-sm font-semibold mt-auto pt-4 border-t border-red-100">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon> Verification + badges + reviews
                            </div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">The Contractor Offer</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="flex gap-4 p-4">
<iconify-icon className="text-indigo-600 text-3xl shrink-0" icon="solar:wallet-money-linear"></iconify-icon>
<div><h4 className="font-bold text-slate-900">Pay when you win</h4><p className="text-sm text-slate-600">No monthly fees. Small commission only on successful jobs.</p></div>
</div>
<div className="flex gap-4 p-4">
<iconify-icon className="text-indigo-600 text-3xl shrink-0" icon="solar:user-id-linear"></iconify-icon>
<div><h4 className="font-bold text-slate-900">Verified Profile</h4><p className="text-sm text-slate-600">Stand out with verified insurance and ID badges.</p></div>
</div>
<div className="flex gap-4 p-4">
<iconify-icon className="text-indigo-600 text-3xl shrink-0" icon="solar:inbox-linear"></iconify-icon>
<div><h4 className="font-bold text-slate-900">Lead Inbox</h4><p className="text-sm text-slate-600">Get notified instantly when a job matches your skills.</p></div>
</div>
<div className="flex gap-4 p-4">
<iconify-icon className="text-indigo-600 text-3xl shrink-0" icon="solar:document-add-linear"></iconify-icon>
<div><h4 className="font-bold text-slate-900">Quote Builder</h4><p className="text-sm text-slate-600">Create professional quotes in seconds on your phone.</p></div>
</div>
<div className="flex gap-4 p-4">
<iconify-icon className="text-indigo-600 text-3xl shrink-0" icon="solar:calendar-linear"></iconify-icon>
<div><h4 className="font-bold text-slate-900">Coordination</h4><p className="text-sm text-slate-600">We handle the scheduling ping-pong with the client.</p></div>
</div>
<div className="flex gap-4 p-4">
<iconify-icon className="text-indigo-600 text-3xl shrink-0" icon="solar:thunder-linear"></iconify-icon>
<div><h4 className="font-bold text-slate-900">Faster Approvals</h4><p className="text-sm text-slate-600">Digital sign-off means funds are released faster.</p></div>
</div>
</div>

<div className="mt-12 flex justify-center gap-6 border-t border-slate-200 pt-8">
<a className="text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1" href="[OS_PUBLIC_ENTRY_URL]">Looking for Service? <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
<span className="text-slate-300">|</span>
<a className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1" href="/contractors">Apply as Contractor <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">How to join</h2>
<div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">1</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
<div className="font-bold text-slate-900 mb-1">Apply Online</div>
<div className="text-sm text-slate-600">Fill out the basic profile form.</div>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">2</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
<div className="font-bold text-slate-900 mb-1">Verify Documents</div>
<div className="text-sm text-slate-600">Upload insurance and ID for the trust badge.</div>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">3</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
<div className="font-bold text-slate-900 mb-1">Get Matched</div>
<div className="text-sm text-slate-600">Receive job requests that fit your criteria.</div>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">4</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
<div className="font-bold text-slate-900 mb-1">Submit Quotes</div>
<div className="text-sm text-slate-600">Price the job. If the client accepts, you start.</div>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">5</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
<div className="font-bold text-slate-900 mb-1">Booked &amp; Paid</div>
<div className="text-sm text-slate-600">Complete the work, get approved, receive funds.</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
<button className="accordion-btn w-full px-6 py-4 text-left flex justify-between items-center text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors" onclick="toggleAccordion(this)">
                                What does it cost?
                                <iconify-icon className="accordion-icon text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="px-6 pb-4 text-sm text-slate-600">It's free to join and receive leads. We only charge a small success fee when you win a job and get paid.</div>
</div>
</div>

<div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
<button className="accordion-btn w-full px-6 py-4 text-left flex justify-between items-center text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors" onclick="toggleAccordion(this)">
                                What trades are accepted?
                                <iconify-icon className="accordion-icon text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="px-6 pb-4 text-sm text-slate-600">We accept Plumbers, Electricians, HVAC, Builders, Cleaners, Roofers, and Landscapers. All must be licensed where applicable.</div>
</div>
</div>

<div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
<button className="accordion-btn w-full px-6 py-4 text-left flex justify-between items-center text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors" onclick="toggleAccordion(this)">
                                How does payment work?
                                <iconify-icon className="accordion-icon text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="px-6 pb-4 text-sm text-slate-600">The client pays into our secure escrow system before work starts. Funds are released to your bank account upon job completion approval.</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-200 text-center px-6" id="contractor-signup">
<div className="max-w-2xl mx-auto">
<h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to fill your schedule?</h2>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors" href="/contractors">Apply Now</a>
<a className="px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors" href="[OS_LOGIN_URL]">Login</a>
</div>
</div>
</section>
</div>



<div className="page-view hidden-page" id="view-clients">

<section className="pt-20 pb-20 px-6 bg-orange-50/50">
<div className="max-w-7xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-orange-600 text-xs font-semibold mb-6 shadow-sm">
<iconify-icon icon="solar:home-smile-linear"></iconify-icon>
                        Homeowner Dashboard
                    </div>
<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                        One dashboard for your job <br/> from start to finish.
                    </h1>
<p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Quotes, messages, timeline, approvals — all in one place. Stop juggling texts, emails, and voicemail.
                    </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
<a className="px-8 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10" href="[OS_PUBLIC_ENTRY_URL]">Request Service</a>
<a className="px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors" href="[OS_LOGIN_URL]">Client Login (OS)</a>
</div>

<div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl shadow-slate-200 border border-slate-200 overflow-hidden text-left">
<div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex gap-2">
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
</div>
<div className="p-6 grid md:grid-cols-3 gap-6">

<div className="col-span-1 space-y-4 border-r border-slate-100 pr-6 hidden md:block">
<div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">My Jobs</div>
<div className="p-3 bg-orange-50 border border-orange-100 rounded-lg">
<div className="font-bold text-slate-900 text-sm">Bathroom Reno</div>
<div className="text-xs text-orange-600 font-medium">Active • 2 Quotes</div>
</div>
<div className="p-3 bg-white border border-slate-100 rounded-lg opacity-60">
<div className="font-bold text-slate-900 text-sm">Roof Repair</div>
<div className="text-xs text-slate-500">Completed</div>
</div>
</div>

<div className="col-span-2 space-y-6">
<div className="flex justify-between items-center">
<h3 className="font-bold text-slate-900">Quotes Received</h3>
<span className="text-xs text-slate-500">Job ID: #9928</span>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:border-orange-500 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs">A</div>
<div>
<div className="font-bold text-sm text-slate-900">Ace Plumbing</div>
<div className="text-xs text-slate-500">4.8 Stars (12 jobs)</div>
</div>
</div>
<span className="font-bold text-slate-900">$450</span>
</div>
<div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:border-orange-500 transition-colors cursor-pointer ring-1 ring-orange-500 bg-orange-50/20">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs">T</div>
<div>
<div className="font-bold text-sm text-slate-900">Top Tier Services</div>
<div className="text-xs text-slate-500">4.9 Stars (82 jobs)</div>
</div>
</div>
<div className="text-right">
<span className="font-bold text-slate-900 block">$420</span>
<span className="text-xs text-green-600 font-bold">Best Match</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Control Center Features</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="flex flex-col gap-3">
<iconify-icon className="text-orange-500 text-4xl" icon="solar:graph-up-linear"></iconify-icon>
<h3 className="font-bold text-slate-900">Track Progress</h3>
<p className="text-sm text-slate-600">See exactly what stage your job is at, from requested to scheduled to completed.</p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-orange-500 text-4xl" icon="solar:chat-line-linear"></iconify-icon>
<h3 className="font-bold text-slate-900">Central Messaging</h3>
<p className="text-sm text-slate-600">Chat with contractors without giving out your personal phone number.</p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-orange-500 text-4xl" icon="solar:scale-linear"></iconify-icon>
<h3 className="font-bold text-slate-900">Review Quotes Fairly</h3>
<p className="text-sm text-slate-600">We standardize the quote format so you can compare line-by-line easily.</p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-orange-500 text-4xl" icon="solar:check-read-linear"></iconify-icon>
<h3 className="font-bold text-slate-900">Approve Completion</h3>
<p className="text-sm text-slate-600">Contractors don't get final payment until you click "Approve" on the finished work.</p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-orange-500 text-4xl" icon="solar:folder-with-files-linear"></iconify-icon>
<h3 className="font-bold text-slate-900">Digital Receipts</h3>
<p className="text-sm text-slate-600">Store all invoices, warranties, and photos in your permanent digital file.</p>
</div>
</div>

<div className="mt-12 flex justify-center gap-6 border-t border-slate-100 pt-8">
<a className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1" href="[OS_PUBLIC_ENTRY_URL]">Get My 3 Quotes <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
<span className="text-slate-300">|</span>
<a className="text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1" href="[OS_LOGIN_URL]">Log In <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</section>
</div>
</main>

<footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900">SimplyServices</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">The modern way to manage services and projects. Simple, safe, and efficient.</p>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="[OS_PUBLIC_ENTRY_URL]">Request Service</a></li>
<li><button className="hover:text-slate-900 text-left" onclick="router('home')">How it Works</button></li>
<li><a className="hover:text-slate-900" href="/free-guide">Free Guide</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><button className="hover:text-slate-900 text-left" onclick="router('contractors')">For Contractors</button></li>
<li><button className="hover:text-slate-900 text-left" onclick="router('clients')">For Clients</button></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4 text-sm">Support</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="/support">Help Center</a></li>
<li><a className="hover:text-slate-900" href="[OS_LOGIN_URL]">Login (OS)</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="/terms">Terms &amp; Conditions</a></li>
<li><a className="hover:text-slate-900" href="/privacy">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 SimplyServices. All rights reserved.</p>
<div className="flex gap-4 text-slate-400">
<iconify-icon className="hover:text-slate-900 cursor-pointer" icon="solar:brand-twitter-linear"></iconify-icon>
<iconify-icon className="hover:text-slate-900 cursor-pointer" icon="solar:brand-instagram-linear"></iconify-icon>
<iconify-icon className="hover:text-slate-900 cursor-pointer" icon="solar:brand-linkedin-linear"></iconify-icon>
</div>
</div>
</div>
</footer>



    </>
  );
}
