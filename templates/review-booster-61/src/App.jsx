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



tailwind.config = {
theme: {
extend: {
colors: {
primary: '#1F5EFF',
dark: '#0B1F3B',
lightBlue: '#F4F8FF',
ctaGreen: '#22C55E',
muted: '#475569',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
spacing: {
'128': '32rem',
}
}
}
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
      

<header className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">

<div className="mb-12 flex justify-center">
<span className="text-xl font-semibold tracking-tight text-dark uppercase">Review Booster</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-dark mb-8 leading-[1.1]">
                Get More 5-Star Google Reviews — <span className="text-primary">On Autopilot</span>
</h1>
<p className="text-xl md:text-2xl text-muted font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
                Let your customers do the marketing for you.
            </p>
<p className="text-lg text-muted max-w-3xl mx-auto mb-12">
                The Review Booster System makes it effortless to generate consistent Google reviews — while we handle the reputation work in the background.
            </p>
<div className="flex flex-col items-center gap-6">
<a className="bg-ctaGreen hover:bg-green-600 text-white text-lg font-medium py-4 px-10 rounded-lg transition-all duration-200 w-full md:w-auto text-center shadow-lg shadow-green-500/20" href="#pricing">
                    Activate Review Booster
                </a>
<p className="text-sm text-muted">
                    One-time setup required • Monthly management available • Cancel anytime
                </p>

<div className="mt-8 inline-flex items-center gap-2 bg-lightBlue border border-primary/10 px-4 py-2 rounded-full">
<iconify-icon className="text-primary text-lg" icon="lucide:shield-check" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-primary">Designed to follow Google review guidelines</span>
</div>
</div>
</div>
</header>

<section className="py-24 bg-lightBlue px-6">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-dark mb-6 tracking-tight">
                More Reviews. More Visibility. More Trust. More Customers.
            </h2>
<p className="text-lg text-muted mb-12 leading-relaxed">
                Google reviews are one of the biggest factors in how customers decide where to go.
            </p>
<div className="grid md:grid-cols-3 gap-8 mb-16">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-primary">
<iconify-icon icon="lucide:shield" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Trust</h3>
<p className="text-sm text-muted">Build credibility instantly.</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-primary">
<iconify-icon icon="lucide:eye" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Visibility</h3>
<p className="text-sm text-muted">Rank higher on Google Maps.</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-primary">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">More Customers</h3>
<p className="text-sm text-muted">Drive foot traffic effortlessly.</p>
</div>
</div>
<div className="space-y-6 text-muted text-lg">
<p>
                    Even great venues often struggle with inconsistent reviews — not because customers aren’t happy, but because they aren’t prompted at the right moment.
                </p>
<p className="font-medium text-dark">
                    That’s exactly what the Review Booster System is designed to fix.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-slate-100">
<div className="max-w-6xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-primary font-medium tracking-wide text-sm uppercase mb-3 block">Step 1</span>
<h2 className="text-3xl md:text-5xl font-semibold text-dark mb-6 tracking-tight">
                    Gathering Reviews (The NFC Booster)
                </h2>
<p className="text-lg text-muted">
                    The Review Booster NFC Stands bridge the gap between a great customer experience and a 5-star Google review.
                </p>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">
<div className="bg-lightBlue rounded-3xl p-12 relative overflow-hidden h-96 flex items-center justify-center">

<div className="absolute inset-0 flex items-center justify-center opacity-10">
<iconify-icon icon="lucide:wifi" strokeWidth="1.5" width="200"></iconify-icon>
</div>
<div className="bg-white p-8 rounded-2xl shadow-xl w-64 text-center z-10 border border-slate-100">
<iconify-icon className="text-primary mb-4" icon="lucide:nfc" strokeWidth="1.5" width="48"></iconify-icon>
<h4 className="font-semibold text-dark text-lg mb-2">Tap to Review</h4>
<div className="h-1 w-12 bg-slate-100 mx-auto rounded-full"></div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 space-y-12">
<div>
<p className="text-xl text-dark font-medium mb-4">
                            They turn a moment of guest satisfaction into a rating with a simple tap — while the experience is still fresh.
                        </p>
</div>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 bg-blue-50 p-2 rounded-lg text-primary h-fit">
<iconify-icon icon="lucide:smartphone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-dark mb-2">Tap. Scan. Review.</h3>
<p className="text-muted">A smooth one-tap experience customers already trust. No apps required.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 bg-blue-50 p-2 rounded-lg text-primary h-fit">
<iconify-icon icon="lucide:git-branch" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-dark mb-2">The Smart Filter</h3>
<p className="text-muted mb-2">Happy guests are guided directly to Google.</p>
<p className="text-muted">Anyone less than 100% satisfied is redirected to a private feedback form so concerns can be handled internally.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 bg-blue-50 p-2 rounded-lg text-primary h-fit">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-dark mb-2">Real-Time Capture</h3>
<p className="text-muted">Capture positive experiences before the guest even leaves.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-lightBlue">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div>
<span className="text-primary font-medium tracking-wide text-sm uppercase mb-3 block">Step 2</span>
<h2 className="text-3xl md:text-5xl font-semibold text-dark mb-6 tracking-tight">
                            Management &amp; Protection (The Service)
                        </h2>
<p className="text-lg text-muted mb-6">
                            Getting the review is only half the system.
                        </p>
<p className="text-lg text-muted">
                            We handle the backend reputation work so your Google Business Profile stays active, protected, and professionally maintained — without adding workload to your team.
                        </p>
</div>
</div>
<div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
<h3 className="text-xl font-semibold text-dark mb-8">What’s Included</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<iconify-icon className="text-ctaGreen flex-shrink-0" icon="lucide:check-circle" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-muted font-medium">Active Review Monitoring</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-ctaGreen flex-shrink-0" icon="lucide:check-circle" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-muted font-medium">Professional Review Responses</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-ctaGreen flex-shrink-0" icon="lucide:check-circle" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-muted font-medium">Negative Review Handling</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-ctaGreen flex-shrink-0" icon="lucide:check-circle" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-muted font-medium">Spam / Fake Review Support</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-ctaGreen flex-shrink-0" icon="lucide:check-circle" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-muted font-medium">Monthly Reporting</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-ctaGreen flex-shrink-0" icon="lucide:check-circle" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-muted font-medium">Social Proof Syndication</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-slate-100">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-dark mb-6 tracking-tight">
                    A Simple 3-Step Flow
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="relative flex flex-col items-center text-center p-6">
<div className="w-16 h-16 bg-white border border-slate-200 rounded-xl flex items-center justify-center mb-6 shadow-sm text-primary z-10">
<span className="text-2xl font-semibold">1</span>
</div>
<p className="text-muted font-medium leading-relaxed">
                        We supply your Review Booster NFC Stands and configure the Smart Filter
                    </p>

<div className="hidden md:block absolute top-14 left-1/2 w-full h-[2px] bg-slate-100 -z-0"></div>
</div>

<div className="relative flex flex-col items-center text-center p-6">
<div className="w-16 h-16 bg-white border border-slate-200 rounded-xl flex items-center justify-center mb-6 shadow-sm text-primary z-10">
<span className="text-2xl font-semibold">2</span>
</div>
<p className="text-muted font-medium leading-relaxed">
                        Guests tap or scan to leave reviews effortlessly
                    </p>

<div className="hidden md:block absolute top-14 left-1/2 w-full h-[2px] bg-slate-100 -z-0"></div>
</div>

<div className="relative flex flex-col items-center text-center p-6">
<div className="w-16 h-16 bg-white border border-slate-200 rounded-xl flex items-center justify-center mb-6 shadow-sm text-primary z-10">
<span className="text-2xl font-semibold">3</span>
</div>
<p className="text-muted font-medium leading-relaxed">
                        We monitor and manage your Google reviews and Business Profile each month
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="pricing">
<div className="max-w-6xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-dark mb-6 tracking-tight">
                    Start Your Review Booster System
                </h2>
<p className="text-lg text-muted mb-4">
                    Choose how many tables or review points you want covered.
                </p>
<p className="text-muted text-sm">
                    This one-time setup includes the physical NFC stands and full system configuration.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start mb-24">

<div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
<div className="mb-4">
<h3 className="text-lg font-medium text-muted">Up to 10 Tables / Points</h3>
</div>
<div className="mb-8">
<span className="text-4xl font-semibold text-dark tracking-tight">£198</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-muted">
<li className="flex items-center gap-2">
<iconify-icon className="text-primary" icon="lucide:check"></iconify-icon> NFC Review Stands
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-primary" icon="lucide:check"></iconify-icon> Smart Filter configuration
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-primary" icon="lucide:check"></iconify-icon> Google review flow setup
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-primary" icon="lucide:check"></iconify-icon> Ready-to-use system
                        </li>
</ul>
<a className="block w-full bg-ctaGreen hover:bg-green-600 text-white text-center font-medium py-3 rounded-lg transition-colors" href="#">
                        Start with 10 Tables
                    </a>
</div>

<div className="relative p-8 rounded-2xl border border-primary bg-white shadow-lg scale-105 z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                        Most Popular
                    </div>
<div className="mb-4">
<h3 className="text-lg font-medium text-muted">Up to 15 Tables / Points</h3>
</div>
<div className="mb-8">
<span className="text-4xl font-semibold text-dark tracking-tight">£298</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-muted">
<li className="flex items-center gap-2">
<iconify-icon className="text-primary" icon="lucide:check"></iconify-icon> NFC Review Stands
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-primary" icon="lucide:check"></iconify-icon> Smart Filter configuration
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-primary" icon="lucide:check"></iconify-icon> Google review flow setup
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-primary" icon="lucide:check"></iconify-icon> Ready-to-use system
                        </li>
</ul>
<a className="block w-full bg-ctaGreen hover:bg-green-600 text-white text-center font-medium py-3 rounded-lg transition-colors shadow-md shadow-green-500/20" href="#">
                        Start with 15 Tables
                    </a>
</div>

<div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
<div className="mb-4">
<h3 className="text-lg font-medium text-muted">Up to 20 Tables / Points</h3>
</div>
<div className="mb-8">
<span className="text-4xl font-semibold text-dark tracking-tight">£398</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-muted">
<li className="flex items-center gap-2">
<iconify-icon className="text-primary" icon="lucide:check"></iconify-icon> NFC Review Stands
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-primary" icon="lucide:check"></iconify-icon> Smart Filter configuration
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-primary" icon="lucide:check"></iconify-icon> Google review flow setup
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-primary" icon="lucide:check"></iconify-icon> Ready-to-use system
                        </li>
</ul>
<a className="block w-full bg-ctaGreen hover:bg-green-600 text-white text-center font-medium py-3 rounded-lg transition-colors" href="#">
                        Start with 20 Tables
                    </a>
</div>
</div>

<div className="bg-lightBlue rounded-2xl border border-primary/20 p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-6 right-6 opacity-5">
<iconify-icon icon="lucide:shield-check" strokeWidth="1" width="120"></iconify-icon>
</div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
<div className="max-w-xl">
<span className="text-primary text-xs font-semibold uppercase tracking-wider mb-2 block">Optional Add-On</span>
<h3 className="text-2xl font-semibold text-dark mb-3">MONTHLY REPUTATION MANAGEMENT</h3>
<p className="text-muted mb-6">Keep your Google profile active, protected, and professionally managed.</p>
<div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted">
<div className="flex items-center gap-2">
<iconify-icon className="text-primary" icon="lucide:check-circle" width="16"></iconify-icon> Review monitoring
                            </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-primary" icon="lucide:check-circle" width="16"></iconify-icon> Professional responses
                            </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-primary" icon="lucide:check-circle" width="16"></iconify-icon> Negative review handling
                            </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-primary" icon="lucide:check-circle" width="16"></iconify-icon> Spam / fake review support
                            </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-primary" icon="lucide:check-circle" width="16"></iconify-icon> Monthly reporting
                            </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-primary" icon="lucide:check-circle" width="16"></iconify-icon> Social proof syndication
                            </div>
</div>
</div>
<div className="flex flex-col items-start md:items-end flex-shrink-0">
<div className="text-left md:text-right mb-4">
<span className="text-4xl font-semibold text-dark tracking-tight">£49</span>
<span className="text-muted"> / month</span>
<p className="text-sm text-ctaGreen font-medium mt-1">(Launch Price — limited availability)</p>
</div>
<a className="bg-ctaGreen hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-colors w-full md:w-auto text-center" href="#">
                            Add Monthly Management
                        </a>
<p className="text-xs text-muted mt-3">Choose your setup package above to continue</p>
<div className="flex gap-4 mt-2 text-xs text-muted">
<span>No contracts</span>
<span>•</span>
<span>Cancel anytime</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 text-center">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold text-dark mb-6 tracking-tight">
                Ready to Activate Your Review Booster?
            </h2>
<p className="text-lg text-muted mb-10">
                Choose your setup package and start turning everyday customer satisfaction into consistent 5-star Google reviews.
            </p>
<a className="inline-block bg-ctaGreen hover:bg-green-600 text-white text-lg font-medium py-4 px-12 rounded-lg transition-all duration-200 shadow-lg shadow-green-500/20 mb-8" href="#pricing">
                Activate Review Booster
            </a>
<p className="text-sm text-muted">
                By subscribing, you agree to our Terms &amp; Privacy Policy.
            </p>
</div>
</section>

<footer className="py-12 border-t border-slate-100 text-center">
<p className="text-muted text-sm font-medium">
            © 2026 Review Booster. All rights reserved.
        </p>
</footer>

    </>
  );
}
