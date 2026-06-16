import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      AOS.init({duration: 800, once: true, offset: 50});
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-slate-900 text-white flex items-center justify-center rounded text-xs font-bold">
            L
          </div>
          LONDON CITY SERVICES.
        </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">
            Services
          </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#process">
            Process
          </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#testimonials">
            Stories
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors" href="#">
            Login
          </a>
<a className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full bg-slate-900 px-6 font-medium text-white transition-all duration-300 hover:bg-slate-800 hover:ring-2 hover:ring-slate-900 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" href="#contact">
<span className="mr-2 text-xs">Start Now</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-40 pointer-events-none">
<div className="absolute top-20 left-[20%] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl animate-blob bg-indigo-300"></div>
<div className="absolute top-20 right-[20%] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 bg-blue-300"></div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-slate-600">
            Accepting new clients for Q4
          </span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]" data-aos="fade-up">
          Financial clarity for
          <br className="hidden sm:block"/>
          modern business.
        </h1>
<p className="text-lg sm:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed font-light" data-aos="fade-up" data-aos-delay="100">
          We handle the numbers so you can focus on the narrative. Accurate,
          timely, and insight-driven bookkeeping for startups and agencies.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 text-sm shadow-lg shadow-slate-200" href="#services">
            View Packages
            <iconify-icon icon="solar:sort-vertical-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-sm" href="#contact">
            Book Consultation
          </a>
</div>

<div className="mt-16 pt-8 border-t border-slate-100" data-aos="fade-in" data-aos-delay="400">
<p className="text-xs text-slate-400 mb-6 uppercase tracking-widest font-medium">
            Compatible with your stack
          </p>
<div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-1 font-semibold text-slate-800 text-lg tracking-tight">
<iconify-icon className="text-blue-500" icon="solar:card-reciept-linear"></iconify-icon>
              Xero
            </div>
<div className="flex items-center gap-1 font-semibold text-slate-800 text-lg tracking-tight">
<iconify-icon className="text-green-600" icon="solar:pie-chart-2-linear"></iconify-icon>
              QuickBooks
            </div>
<div className="flex items-center gap-1 font-semibold text-slate-800 text-lg tracking-tight">
<iconify-icon className="text-indigo-500" icon="solar:wallet-money-linear"></iconify-icon>
              Stripe
            </div>
<div className="flex items-center gap-1 font-semibold text-slate-800 text-lg tracking-tight">
<iconify-icon className="text-purple-500" icon="solar:shop-linear"></iconify-icon>
              Shopify
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="process">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12">

<div className="feature-card group hover:-translate-y-1 transition-transform duration-300" data-aos="fade-up">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all">
<iconify-icon className="text-slate-500 transition-colors" icon="solar:check-read-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">
              Audit-Proof Accuracy
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              We don't just categorize transactions; we reconcile every penny.
              Your books will stand up to any scrutiny, keeping you compliant
              and stress-free.
            </p>
</div>

<div className="feature-card group hover:-translate-y-1 transition-transform duration-300" data-aos="fade-up" data-aos-delay="100">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all">
<iconify-icon className="text-slate-500 transition-colors" icon="solar:graph-new-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">
              Real-Time Insights
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Wait for the 15th of next month? No. We maintain books weekly so
              you have a pulse on your cash flow when you need to make
              decisions.
            </p>
</div>

<div className="feature-card group hover:-translate-y-1 transition-transform duration-300" data-aos="fade-up" data-aos-delay="200">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all">
<iconify-icon className="text-slate-500 transition-colors" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">
              Dedicated Partner
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              You get a dedicated bookkeeper, not a support ticket. We learn the
              nuances of your business vendors, customers, and expenses.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-4">
            Bookkeeping tailored to your stage
          </h2>
<p className="text-slate-500">
            Transparent pricing. No hidden setup fees. Scale up or down as your
            transaction volume changes.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300" data-aos="fade-up">
<div className="mb-6">
<iconify-icon className="text-slate-400 mb-4" icon="solar:leaf-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-slate-900">Essentials</h3>
<p className="text-xs text-slate-400 mt-2">
                For solopreneurs &amp; early startups.
              </p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-3xl font-medium text-slate-900">$299</span>
<span className="text-sm text-slate-400">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Monthly Reconciliation
              </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Up to 2 Bank/CC Accounts
              </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Quarterly P&amp;L &amp; Balance Sheet
              </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Email Support
              </li>
</ul>
<a className="block w-full py-2.5 rounded-lg border border-slate-200 text-center text-sm font-medium text-slate-700 hover:border-slate-900 hover:bg-slate-50 transition-all" href="#contact">
              Select Essentials
            </a>
</div>

<div className="group relative bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-2xl shadow-slate-300/50 transform md:-translate-y-4 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
<div className="absolute top-0 right-0 p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Most Popular
              </span>
</div>
<div className="mb-6">
<iconify-icon className="text-indigo-400 mb-4" icon="solar:rocket-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white">Growth</h3>
<p className="text-xs text-slate-400 mt-2">
                For growing teams &amp; complexity.
              </p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-3xl font-medium text-white">$599</span>
<span className="text-sm text-slate-400">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                Weekly Reconciliation
              </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                Up to 5 Accounts
              </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                Monthly Financial Reports
              </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                A/P Management
              </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                Video Call Support
              </li>
</ul>
<a className="block w-full py-2.5 rounded-lg bg-indigo-600 text-center text-sm font-medium text-white hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-900/50" href="#contact">
              Select Growth
            </a>
</div>

<div className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
<div className="mb-6">
<iconify-icon className="text-slate-400 mb-4" icon="solar:buildings-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-slate-900">CFO Advisory</h3>
<p className="text-xs text-slate-400 mt-2">
                Strategic guidance &amp; forecasting.
              </p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-3xl font-medium text-slate-900">Custom</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Daily Reconciliation
              </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Unlimited Accounts
              </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Cash Flow Forecasting
              </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>
                Payroll Administration
              </li>
</ul>
<a className="block w-full py-2.5 rounded-lg border border-slate-200 text-center text-sm font-medium text-slate-700 hover:border-slate-900 hover:bg-slate-50 transition-all" href="#contact">
              Contact Sales
            </a>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-slate-100 bg-white overflow-hidden">
<div className="max-w-6xl mx-auto px-6 text-center mb-10">
<h4 className="text-sm font-medium text-slate-900">
          Trusted by founders moving fast
        </h4>
</div>
<div className="flex gap-6 overflow-x-auto pb-8 snap-x px-6 max-w-6xl mx-auto hide-scroll" data-aos="fade-left">

<div className="snap-center shrink-0 w-80 p-6 rounded-xl bg-slate-50 border border-slate-100">
<div className="flex gap-1 text-yellow-500 mb-3">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-4">
            "Finally, a bookkeeper that understands digital products. The
            monthly reports are actually readable and useful."
          </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
<div>
<div className="text-xs font-semibold text-slate-900">
                Sarah Jenkins
              </div>
<div className="text-[10px] text-slate-400">CEO, TechFlow</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-80 p-6 rounded-xl bg-slate-50 border border-slate-100">
<div className="flex gap-1 text-yellow-500 mb-3">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-4">
            "Ledger moved us from a mess of spreadsheets to a clean Xero setup
            in two weeks. Highly recommended."
          </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
<div>
<div className="text-xs font-semibold text-slate-900">Mark Davis</div>
<div className="text-[10px] text-slate-400">Founder, Studio A</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-80 p-6 rounded-xl bg-slate-50 border border-slate-100">
<div className="flex gap-1 text-yellow-500 mb-3">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-4">
            "The peace of mind knowing my taxes won't be a nightmare is worth
            every penny. Professional and fast."
          </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
<div>
<div className="text-xs font-semibold text-slate-900">Elena R.</div>
<div className="text-[10px] text-slate-400">
                Director, Creative Co.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-xl mx-auto px-6" data-aos="fade-up">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">
            Let's tidy up your finances
          </h2>
<p className="text-slate-500 text-sm">
            Fill out the form below. We usually respond within 2 hours.
          </p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="first-name">
                First name
              </label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all placeholder:text-slate-300" id="first-name" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="last-name">
                Last name
              </label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all placeholder:text-slate-300" id="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="email">
              Work Email
            </label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all placeholder:text-slate-300" id="email" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">
              Current Accounting Software
            </label>
<div className="grid grid-cols-3 gap-3 pt-1">
<label className="cursor-pointer">
<input className="peer sr-only" name="software" type="radio"/>
<div className="rounded-md border border-slate-200 px-3 py-2 text-xs text-center text-slate-600 hover:bg-slate-50 peer-checked:border-slate-900 peer-checked:bg-slate-900 peer-checked:text-white transition-all">
                  Xero
                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="software" type="radio"/>
<div className="rounded-md border border-slate-200 px-3 py-2 text-xs text-center text-slate-600 hover:bg-slate-50 peer-checked:border-slate-900 peer-checked:bg-slate-900 peer-checked:text-white transition-all">
                  QBO
                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="software" type="radio"/>
<div className="rounded-md border border-slate-200 px-3 py-2 text-xs text-center text-slate-600 hover:bg-slate-50 peer-checked:border-slate-900 peer-checked:bg-slate-900 peer-checked:text-white transition-all">
                  Other
                </div>
</label>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="message">
              How can we help?
            </label>
<textarea className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all placeholder:text-slate-300" id="message" placeholder="I need help with catching up on 6 months of bookkeeping..." rows="3"></textarea>
</div>
<button className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-all shadow-lg shadow-slate-200" type="submit">
            Get Free Proposal
          </button>
<p className="text-[10px] text-center text-slate-400 mt-4">
            By clicking submit, you agree to our Terms of Service. No spam,
            ever.
          </p>
</form>
</div>
</section>

<footer className="border-t border-slate-100 bg-white pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter text-slate-900 flex items-center gap-2 mb-4" href="#">
<div className="w-5 h-5 bg-slate-900 text-white flex items-center justify-center rounded text-[10px] font-bold">
                L
              </div>
              LONDON CITY SERVICES.
            </a>
<p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Modern bookkeeping for forward-thinking businesses. Accurate,
              timely, and digital-first.
            </p>
</div>
<div>
<h5 className="text-xs font-semibold text-slate-900 mb-4">Company</h5>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-slate-900" href="#">About</a></li>
<li><a className="hover:text-slate-900" href="#">Careers</a></li>
<li><a className="hover:text-slate-900" href="#">Privacy</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold text-slate-900 mb-4">Services</h5>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-slate-900" href="#">Bookkeeping</a></li>
<li>
<a className="hover:text-slate-900" href="#">Catch-up Work</a>
</li>
<li><a className="hover:text-slate-900" href="#">Payroll</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold text-slate-900 mb-4">Connect</h5>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-slate-900" href="#">Twitter / X</a></li>
<li><a className="hover:text-slate-900" href="#">LinkedIn</a></li>
<li><a className="hover:text-slate-900" href="#">Email Us</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-slate-400">
            © 2023 London City Services Ltd. All rights reserved.
          </p>
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] font-medium text-slate-600">
              All systems operational
            </span>
</div>
</div>
</div>
</footer>



    </>
  );
}
