import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', () => {
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('in-view');
                      observer.unobserve(entry.target);
                  }
              });
          }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
          document.querySelectorAll('.framer-fade-up').forEach(el => observer.observe(el));
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50 hidden lg:flex">
<div className="w-1 h-1 rounded-full bg-white/40"></div>
<div className="w-1 h-1 rounded-full bg-white/20"></div>
<div className="w-1 h-1 rounded-full bg-white/20"></div>
<div className="w-1 h-1 rounded-full bg-white/20"></div>
<div className="w-1 h-1 rounded-full bg-white/20"></div>
<div className="w-1 h-1 rounded-full bg-white/20"></div>
<div className="w-1 h-1 rounded-full bg-white/20"></div>
<div className="w-1 h-1 rounded-full bg-white/20"></div>
</div>
<main className="max-w-5xl mx-auto px-6 py-12 space-y-32">

<section className="min-h-[80vh] flex flex-col justify-center items-center text-center relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] -z-10"></div>
<div className="mb-8 border border-white/10 bg-white/5 rounded-full px-4 py-1.5 inline-flex items-center gap-2 framer-fade-up">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-xs font-medium tracking-wide text-zinc-300 uppercase">
            Pitch Deck
          </span>
</div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tight text-white mb-6 framer-fade-up delay-100">
          CallSyncLabs
        </h1>
<p className="text-xl md:text-2xl text-zinc-300 font-light tracking-tight mb-2 framer-fade-up delay-200">
          The "AI Front Desk" For Dentists.
        </p>
<p className="text-lg text-zinc-500 font-light framer-fade-up delay-300">
          Building a High-Margin, Recurring Revenue Asset.
        </p>
</section>

<section className="flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 space-y-6 framer-fade-up">
<div className="flex items-center gap-2 text-indigo-400 mb-2">
<iconify-icon icon="solar:graph-new-up-linear" width="20"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">
              The Business Vision
            </span>
</div>
<h2 className="text-4xl text-white font-medium tracking-tight">
            The Power of
            <br/>
<span className="gradient-text">Recurring Revenue Stacking</span>
</h2>
<p className="text-lg font-light leading-relaxed">
            Unlike traditional businesses where sales reset to zero every month,
            our model creates an automated cash-flow machine. A client acquired
            in January continues to pay in February, March, and beyond.
          </p>
</div>

<div className="flex-1 w-full glass-card p-8 rounded-2xl glow framer-fade-up delay-200">
<div className="flex items-end justify-between h-48 gap-4">
<div className="w-full bg-zinc-800/50 rounded-t-lg relative group h-1/4">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-zinc-500">
                Jan
              </div>
</div>
<div className="w-full bg-zinc-700/50 rounded-t-lg relative group h-2/4">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-zinc-500">
                Feb
              </div>
</div>
<div className="w-full bg-zinc-600/50 rounded-t-lg relative group h-3/4">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-zinc-500">
                Mar
              </div>
</div>
<div className="w-full bg-indigo-500/80 rounded-t-lg relative group h-full shadow-[0_0_20px_rgba(99,102,241,0.3)]">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-white font-medium">
                Apr
              </div>
</div>
</div>
<div className="mt-6 text-center text-sm font-light text-zinc-400">
            Revenue compounds month over month with zero extra labor.
          </div>
</div>
</section>

<section className="space-y-12">
<div className="text-center max-w-2xl mx-auto space-y-4 framer-fade-up">
<div className="flex items-center justify-center gap-2 text-rose-400">
<iconify-icon icon="solar:danger-circle-linear" width="20"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">
              The Problem
            </span>
</div>
<h2 className="text-4xl text-white font-medium tracking-tight">
            US Dental Clinics are Bleeding Revenue
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl flex flex-col justify-between framer-fade-up delay-100">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-6 text-zinc-300">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-3xl text-white font-medium mb-2 tracking-tight">
                30%
              </div>
<p className="text-sm font-light text-zinc-400">
                Of incoming patient calls are missed completely by busy front
                desks.
              </p>
</div>
</div>

<div className="glass-card p-8 rounded-2xl border-rose-500/20 bg-rose-500/5 flex flex-col justify-between framer-fade-up delay-200">
<div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center mb-6 text-rose-400">
<iconify-icon icon="solar:wad-of-money-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-3xl text-rose-200 font-medium mb-2 tracking-tight">
                $1,000+
              </div>
<p className="text-sm font-light text-rose-200/60">
                Lost revenue per single missed call (Implants, Braces,
                Emergencies).
              </p>
</div>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col justify-between framer-fade-up delay-300">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-6 text-zinc-300">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-3xl text-white font-medium mb-2 tracking-tight">
                $3,000
              </div>
<p className="text-sm font-light text-zinc-400">
                Monthly cost of a human receptionist who sleeps and takes sick
                leave.
              </p>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 framer-fade-up">
<div className="flex items-center gap-2 text-teal-400">
<iconify-icon icon="solar:stars-minimalistic-linear" width="20"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">
              The Solution
            </span>
</div>
<h2 className="text-4xl text-white font-medium tracking-tight">
            The "AI Front Desk" Bundle
          </h2>
<ul className="space-y-6">
<li className="flex items-start gap-4 group">
<div className="mt-1 w-8 h-8 rounded bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 border border-teal-500/20 group-hover:border-teal-500/40 transition-colors">
<iconify-icon icon="solar:microphone-3-linear" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium text-lg">Voice AI</h3>
<p className="text-sm font-light text-zinc-500 mt-1">
                  Answers phones 24/7 with human-like conversation capabilities.
                </p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-1 w-8 h-8 rounded bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 border border-teal-500/20 group-hover:border-teal-500/40 transition-colors">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium text-lg">Web AI</h3>
<p className="text-sm font-light text-zinc-500 mt-1">
                  Instantly captures leads and schedules appointments directly
                  on the website.
                </p>
</div>
</li>
</ul>
<div className="pt-4">
<span className="inline-block px-4 py-2 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-300 text-sm font-medium">
              Offer: Waived Setup Fee (Fast Client Acquisition)
            </span>
</div>
</div>
<div className="glass-card p-10 rounded-3xl relative framer-fade-up delay-200">
<div className="absolute top-0 right-0 p-8 opacity-20">
<iconify-icon icon="solar:tag-price-bold" width="120"></iconify-icon>
</div>
<div className="space-y-2 mb-8">
<p className="text-zinc-400 font-light uppercase text-xs tracking-wider">
              Subscription Cost
            </p>
<div className="text-6xl font-medium text-white tracking-tighter">
              $297
              <span className="text-2xl text-zinc-500 font-normal">/mo</span>
</div>
</div>
<hr className="border-zinc-800 mb-8"/>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-400">Availability</span>
<span className="text-white font-medium">24/7/365</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-400">Missed Calls</span>
<span className="text-white font-medium">0%</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-400">Cost Savings</span>
<span className="text-teal-400 font-medium">90% vs Human</span>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto space-y-12">
<div className="text-center framer-fade-up">
<div className="flex items-center justify-center gap-2 text-indigo-400 mb-4">
<iconify-icon icon="solar:calculator-minimalistic-linear" width="20"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">
              Unit Economics
            </span>
</div>
<h2 className="text-4xl text-white font-medium tracking-tight mb-4">
            The Profit Math
          </h2>
<p className="text-zinc-500 font-light">
            Breakdown for a single client per month.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center framer-fade-up delay-100">

<div className="glass-card p-6 rounded-xl text-center">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
              Revenue
            </p>
<p className="text-3xl font-medium text-white tracking-tight">$297</p>
</div>
<div className="flex justify-center text-zinc-600">
<iconify-icon icon="solar:minus-circle-linear" width="32"></iconify-icon>
</div>

<div className="glass-card p-6 rounded-xl text-center border-rose-500/10 bg-rose-500/5">
<p className="text-xs font-medium text-rose-400/70 uppercase tracking-widest mb-2">
              AI Cost
            </p>
<p className="text-3xl font-medium text-rose-200 tracking-tight">
              ~$50
            </p>
</div>
</div>
<div className="flex justify-center text-zinc-600">
<iconify-icon className="rotate-90" icon="solar:pause-circle-linear" width="32"></iconify-icon>
</div>

<div className="glass-card p-8 rounded-2xl bg-indigo-500/10 border-indigo-500/20 text-center relative overflow-hidden framer-fade-up delay-200">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
<div>
<p className="text-xs font-medium text-indigo-300 uppercase tracking-widest mb-2">
                Net Profit
              </p>
<p className="text-5xl font-medium text-white tracking-tight">$247</p>
<p className="text-xs text-zinc-400 mt-2">Per client / Month</p>
</div>
<div className="flex flex-col justify-center">
<p className="text-xs font-medium text-indigo-300 uppercase tracking-widest mb-2">
                Profit Margin
              </p>
<p className="text-5xl font-medium text-white tracking-tight">80%+</p>
<p className="text-xs text-zinc-400 mt-2">Sticky Revenue</p>
</div>
</div>
</div>
</section>

<section className="space-y-8">
<div className="flex items-center gap-2 text-white mb-2 framer-fade-up">
<iconify-icon icon="solar:map-arrow-right-linear" width="20"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">
            Financial Roadmap
          </span>
</div>
<h2 className="text-4xl text-white font-medium tracking-tight">
          4-Month Growth Projection
        </h2>
<div className="w-full overflow-hidden rounded-xl border border-white/10">
<table className="w-full text-left text-sm">
<thead className="bg-white/5 text-zinc-400 font-medium">
<tr>
<th className="px-6 py-4 font-normal">Timeline</th>
<th className="px-6 py-4 font-normal">Clients</th>
<th className="px-6 py-4 font-normal">Est. Revenue</th>
<th className="px-6 py-4 font-normal text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 bg-[#0A0A0A]">
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 text-zinc-300">Month 1</td>
<td className="px-6 py-4 text-white font-medium">5</td>
<td className="px-6 py-4 text-zinc-300">~$1,500</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
                    Break-Even
                  </span>
</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 text-zinc-300">Month 2</td>
<td className="px-6 py-4 text-white font-medium">13</td>
<td className="px-6 py-4 text-zinc-300">~$3,800</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    Profitable
                  </span>
</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 text-zinc-300">Month 3</td>
<td className="px-6 py-4 text-white font-medium">23</td>
<td className="px-6 py-4 text-zinc-300">~$6,800</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    Scaling
                  </span>
</td>
</tr>
<tr className="group bg-indigo-500/[0.03] border-l-2 border-indigo-500">
<td className="px-6 py-4 text-white font-medium">Month 4</td>
<td className="px-6 py-4 text-white font-medium">35</td>
<td className="px-6 py-4 text-white font-medium">~$10,000+</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500 text-white shadow-[0_0_10px_rgba(99,102,241,0.4)]">
                    Target Goal
                  </span>
</td>
</tr>
</tbody>
</table>
</div>
<p className="text-xs text-zinc-500 font-light text-right">
          *Target revenue equals approx ₹8.75 Lakhs/mo
        </p>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="space-y-6 framer-fade-up">
<div className="flex items-center gap-2 text-white">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">
              Expenses
            </span>
</div>
<h2 className="text-3xl text-white font-medium tracking-tight">
            Monthly Burn Rate
          </h2>
<div className="text-5xl text-white font-medium tracking-tight">
            ₹99,000
          </div>
<p className="text-zinc-500 font-light text-sm">
            Total monthly operational costs.
          </p>
<div className="space-y-4 pt-4">
<div className="flex justify-between items-center p-3 rounded-lg border border-white/5 bg-white/[0.02]">
<span className="text-sm text-zinc-400">Ad Budget</span>
<span className="text-sm text-white font-medium">₹50,000</span>
</div>
<div className="flex justify-between items-center p-3 rounded-lg border border-white/5 bg-white/[0.02]">
<span className="text-sm text-zinc-400">Staff (2 Employees)</span>
<span className="text-sm text-white font-medium">₹24,000</span>
</div>
<div className="flex justify-between items-center p-3 rounded-lg border border-white/5 bg-white/[0.02]">
<span className="text-sm text-zinc-400">Office Rent</span>
<span className="text-sm text-white font-medium">₹15,000</span>
</div>
<div className="flex justify-between items-center p-3 rounded-lg border border-white/5 bg-white/[0.02]">
<span className="text-sm text-zinc-400">Tech Stack</span>
<span className="text-sm text-white font-medium">₹10,000</span>
</div>
</div>
</div>
<div className="glass-card p-8 rounded-2xl flex flex-col justify-center space-y-8 bg-gradient-to-br from-zinc-900 to-black framer-fade-up delay-200">
<div>
<h3 className="text-white text-lg font-medium mb-2">The Requirement</h3>
<p className="text-zinc-400 font-light text-sm leading-relaxed">
              Investment Capital to cover Month 1 operations. By Month 2, the
              business model is designed to be self-sustaining.
            </p>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs font-medium uppercase tracking-wider text-zinc-500">
<span>Break-Even Point</span>
<span className="text-white">5 Clients</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-2">
<div className="bg-indigo-500 h-2 rounded-full w-[15%] shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
</div>
<p className="text-xs text-zinc-600 font-light pt-1">
              Only 5 clients needed to cover all costs.
            </p>
</div>
</div>
</section>

<section className="min-h-[60vh] flex flex-col justify-center space-y-12 pb-24">
<div className="text-center space-y-4 framer-fade-up">
<div className="flex items-center justify-center gap-2 text-white">
<iconify-icon icon="solar:handshake-linear" width="20"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">
              Partnership
            </span>
</div>
<h2 className="text-4xl text-white font-medium tracking-tight">
            The Proposal
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-card p-8 rounded-2xl border-t-4 border-t-zinc-600 framer-fade-up delay-100">
<h3 className="text-xl text-white font-medium mb-4">Your Role</h3>
<div className="flex items-start gap-3 mb-4">
<iconify-icon className="text-zinc-400 mt-1" icon="solar:bill-check-linear" width="20"></iconify-icon>
<div>
<p className="text-white font-medium">Capital Injection</p>
<p className="text-sm text-zinc-500 font-light">
                  Cover the "Burn" (₹1 Lakh/mo) until break-even.
                </p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<p className="text-xs text-zinc-500 uppercase tracking-widest">
                Equity
              </p>
<p className="text-3xl text-white font-medium tracking-tight">50%</p>
</div>
</div>

<div className="glass-card p-8 rounded-2xl border-t-4 border-t-indigo-500 bg-indigo-500/[0.02] framer-fade-up delay-200">
<h3 className="text-xl text-white font-medium mb-4">My Role</h3>
<div className="flex items-start gap-3 mb-4">
<iconify-icon className="text-indigo-400 mt-1" icon="solar:code-circle-linear" width="20"></iconify-icon>
<div>
<p className="text-white font-medium">Execution</p>
<p className="text-sm text-zinc-500 font-light">
                  Technical Development, AI Setup, Sales &amp; Operations.
                </p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<p className="text-xs text-zinc-500 uppercase tracking-widest">
                Equity
              </p>
<p className="text-3xl text-white font-medium tracking-tight">50%</p>
</div>
</div>
</div>

<div className="border border-white/10 rounded-xl p-6 bg-white/[0.01] framer-fade-up delay-300">
<h3 className="text-sm font-medium text-zinc-400 mb-4 uppercase tracking-wider">
            Next Steps
          </h3>
<div className="flex flex-col md:flex-row justify-between gap-4 md:items-center text-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white border border-zinc-700">
                1
              </div>
<span className="text-zinc-300">
                Hire Team
                <span className="text-zinc-500 text-xs ml-1">(Day 1)</span>
</span>
</div>
<div className="hidden md:block w-full h-[1px] bg-zinc-800"></div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white border border-zinc-700">
                2
              </div>
<span className="text-zinc-300 whitespace-nowrap">
                Launch Ads
                <span className="text-zinc-500 text-xs ml-1">(Day 3)</span>
</span>
</div>
<div className="hidden md:block w-full h-[1px] bg-zinc-800"></div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                3
              </div>
<span className="text-white font-medium whitespace-nowrap">
                First Client
                <span className="text-indigo-300 text-xs ml-1">(Day 30)</span>
</span>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
