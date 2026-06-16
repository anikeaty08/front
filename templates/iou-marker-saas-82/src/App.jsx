import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#030303',
surface: '#0A0A0A',
surfaceHighlight: '#121212',
border: '#1F1F1F',
primary: '#FFFFFF',
secondary: '#888888',
accent: '#3B82F6',
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-lg font-semibold tracking-tighter text-white flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center text-black text-xs font-bold">I</div>
                IOU MARKER
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary">
<a className="hover:text-white transition-colors" href="#problem">The Problem</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-secondary hover:text-white transition-colors" href="#">Log in</a>
<a className="group relative px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-all flex items-center gap-2" href="#">
<span>Create Agreement</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-secondary mb-8">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Accepting Early Access
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] mb-6">
                You did the work. <br/>Now stop <span className="text-gradient">chasing the payment.</span>
</h1>
<p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto font-light leading-relaxed mb-10">
                IOU automates your contracts, follow-ups, and payments — and gives every client a Trust Score they cannot afford to ignore.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto px-8 py-3.5 bg-white text-black rounded-full font-medium text-sm hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                    Create Your First Agreement Free
                    <iconify-icon icon="solar:bolt-linear" width="18"></iconify-icon>
</button>
<div className="text-xs text-secondary md:hidden mt-2">No credit card required. Live in under 5 minutes.</div>
</div>
<p className="hidden md:block mt-4 text-xs text-secondary/60">No credit card required. Live in under 5 minutes.</p>

<div className="mt-20 relative mx-auto max-w-4xl">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl opacity-50 rounded-xl"></div>
<div className="relative bg-surface border border-border rounded-xl overflow-hidden shadow-2xl glow-effect">

<div className="h-10 border-b border-border bg-surfaceHighlight flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="ml-auto flex gap-3 text-[10px] text-secondary font-mono">
<span>STATUS: ACTIVE</span>
<span>AUTO CHASE: ON</span>
</div>
</div>

<div className="p-8 grid md:grid-cols-2 gap-8 text-left">
<div className="space-y-6">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:document-add-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Service Agreement</p>
<p className="text-xs text-secondary">Created by IOU Assistant</p>
</div>
</div>

<div className="relative pl-4 border-l border-white/10 space-y-6">
<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-background"></div>
<p className="text-xs text-secondary mb-0.5">Today, 10:00 AM</p>
<p className="text-sm text-white">Agreement signed by Client</p>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-background"></div>
<p className="text-xs text-secondary mb-0.5">Just now</p>
<div className="flex items-center gap-2">
<p className="text-sm text-white">Deposit of <span className="text-emerald-400">$2,500.00</span> secured</p>
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>
<div className="relative opacity-50">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full border border-white/20 bg-background ring-4 ring-background"></div>
<p className="text-xs text-secondary mb-0.5">Upcoming</p>
<p className="text-sm text-white">Project Milestone 1 Reminder</p>
</div>
</div>
</div>

<div className="bg-surfaceHighlight rounded-lg p-6 border border-white/5 flex flex-col justify-between">
<div>
<p className="text-xs font-semibold tracking-widest text-secondary uppercase mb-4">Trust Score</p>
<div className="flex items-end gap-2 mb-2">
<span className="text-4xl font-medium tracking-tight text-white">98</span>
<span className="text-sm text-secondary mb-1">/100</span>
</div>
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 w-[98%]"></div>
</div>
<p className="text-xs text-secondary mt-3 leading-relaxed">
                                    Client has a history of on time payments. IOU recommends proceeding with standard terms.
                                </p>
</div>
<div className="mt-6 flex gap-2">
<button className="flex-1 py-2 bg-white text-black text-xs font-medium rounded hover:bg-gray-200">View History</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 max-w-4xl mx-auto px-6 border-t border-white/5" id="problem">
<div className="text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-6">The way service businesses handle agreements is <span className="text-white">broken by design.</span></h2>
<div className="space-y-6 text-lg text-secondary leading-relaxed font-light">
<p>
                    You finish the work. You send the invoice. You wait. You follow up. You wait again. You send a polite nudge. Then a firmer one. Then you write it off or damage the relationship trying to collect what you earned.
                </p>
<p>
                    This is not a client problem. It is a systems problem. You are running a service business on email threads, PDF contracts, and manual reminders. None of those tools talk to each other. None of them enforce anything.
                </p>
<p>
                    The result is predictable: late payments, unclear scopes, disputes, and hours of your time spent being the bad cop.
                </p>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 bg-surfaceHighlight/30">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6">IOU is not another contract tool.<br/><span className="text-secondary">It is an enforcement system.</span></h2>
<p className="text-lg text-secondary">Most platforms stop at the signature. IOU starts there.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 group relative p-8 rounded-2xl bg-surface border border-border hover:border-white/20 transition-colors overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">AI Powered Creation</h3>
<p className="text-secondary text-sm leading-relaxed max-w-md">
                        When you create an agreement in IOU, the platform manages the entire lifecycle: AI-assisted drafting, digital signing, and adjustments in real time.
                    </p>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] border-l border-t border-b border-white/10 bg-surfaceHighlight rounded-l-xl p-4 hidden md:block group-hover:translate-x-[-10px] transition-transform duration-500">
<div className="space-y-3">
<div className="h-2 w-3/4 bg-white/10 rounded"></div>
<div className="h-2 w-full bg-white/10 rounded"></div>
<div className="h-2 w-5/6 bg-purple-500/20 rounded"></div>
<div className="h-2 w-2/3 bg-white/10 rounded"></div>
</div>
<div className="mt-4 px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-[10px] text-purple-300 inline-block">
                        Drafting...
                    </div>
</div>
</div>

<div className="md:col-span-1 group relative p-8 rounded-2xl bg-surface border border-border hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Milestone Payments</h3>
<p className="text-secondary text-sm leading-relaxed">
                    Link payments directly to milestones. Money is tracked automatically so you never have to ask if they sent it yet.
                </p>
</div>

<div className="md:col-span-1 group relative p-8 rounded-2xl bg-surface border border-border hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Trust Score</h3>
<p className="text-secondary text-sm leading-relaxed">
                    Clients build a public Trust Score based on payment behavior. Good behavior is rewarded and ghosting becomes a reputation risk.
                </p>
</div>

<div className="md:col-span-2 group relative p-8 rounded-2xl bg-surface border border-border hover:border-white/20 transition-colors overflow-hidden">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6">
<iconify-icon icon="solar:bell-bing-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Automated Reminder Sequences</h3>
<p className="text-secondary text-sm leading-relaxed">
                            IOU sends automated, professional reminders escalating in urgency. This preserves your relationship while getting you paid. The bad cop is us, not you.
                        </p>
</div>

<div className="bg-surfaceHighlight border border-white/5 rounded-lg p-4 space-y-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between text-[10px] text-secondary mb-1">
<span>Reminder 1</span>
<span>Sent 2 days ago</span>
</div>
<div className="h-2 w-full bg-white/5 rounded"></div>
</div>
</div>
<div className="flex items-center gap-3 opacity-50">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
<iconify-icon icon="solar:danger-circle-linear" width="14"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between text-[10px] text-secondary mb-1">
<span>Reminder 2 Urgent</span>
<span>Scheduled tomorrow</span>
</div>
<div className="h-2 w-full bg-white/5 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="bg-surfaceHighlight border border-white/5 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400 mb-6">
<iconify-icon icon="solar:star-circle-linear"></iconify-icon>
                    Social Accountability
                </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-6 text-white">Ghosting has consequences now.</h2>
<div className="space-y-4 text-secondary leading-relaxed">
<p>
                        Every client who transacts through IOU builds a public Trust Score based on their payment history. Clients who pay on time build a strong score. Clients who delay, dispute, or disappear do not.
                    </p>
<p>
                        Before you sign a new agreement, you can see who you are dealing with. So can everyone else.
                    </p>
<p>
                        This is not a credit check. It is a business reputation layer — the same mechanic that made online reviews change buyer behavior, applied to service transactions.
                    </p>
</div>
</div>
<div className="flex-1 w-full max-w-md">

<div className="bg-surface border border-border rounded-xl p-6 shadow-2xl relative">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-white/10"></div>
<div>
<div className="h-3 w-32 bg-white/10 rounded mb-2"></div>
<div className="h-2 w-20 bg-white/5 rounded"></div>
</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-end">
<span className="text-xs text-secondary uppercase tracking-widest">Trust Score</span>
<span className="text-3xl font-bold text-white">92<span className="text-sm text-secondary font-normal">/100</span></span>
</div>
<div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full w-[92%] bg-gradient-to-r from-blue-600 to-blue-400"></div>
</div>
<div className="flex gap-2 mt-2">
<span className="px-2 py-1 rounded bg-green-500/10 text-green-500 text-[10px] border border-green-500/20">98% On Time</span>
<span className="px-2 py-1 rounded bg-white/5 text-secondary text-[10px] border border-white/10">24 Transactions</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surfaceHighlight border-y border-white/5">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tighter mb-4">Every other tool solves half the problem.</h2>
<p className="text-secondary">DocuSign handles the signature. Your bank handles the transfer. Your inbox handles the follow-up. IOU replaces all three.</p>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/10">
<th className="py-4 pl-4 font-medium text-sm text-secondary w-1/3">Feature</th>
<th className="py-4 font-medium text-sm text-white w-1/4">Manual / Email</th>
<th className="py-4 font-medium text-sm text-white w-1/4">DocuSign</th>
<th className="py-4 font-medium text-sm text-blue-400 w-1/4">IOU Marker</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-white/5">
<td className="py-4 pl-4 text-white">Contract Creation</td>
<td className="py-4 text-secondary">Manual copy-paste</td>
<td className="py-4 text-secondary">Upload PDF only</td>
<td className="py-4 text-white font-medium flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:stars-linear"></iconify-icon> AI Generated
                            </td>
</tr>
<tr className="border-b border-white/5">
<td className="py-4 pl-4 text-white">Payment Collection</td>
<td className="py-4 text-secondary">Separate bank transfer</td>
<td className="py-4 text-secondary">Separate integration</td>
<td className="py-4 text-white font-medium">Built-in Milestones</td>
</tr>
<tr className="border-b border-white/5">
<td className="py-4 pl-4 text-white">Follow-up Chasing</td>
<td className="py-4 text-secondary">Awkward emails</td>
<td className="py-4 text-secondary">None</td>
<td className="py-4 text-white font-medium">Automated Agent</td>
</tr>
<tr>
<td className="py-4 pl-4 text-white">Social Accountability</td>
<td className="py-4 text-secondary">Zero</td>
<td className="py-4 text-secondary">Zero</td>
<td className="py-4 text-white font-medium">Trust Score</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 relative" id="how-it-works">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-16 text-center">From agreement to <br/>cash in bank.</h2>
<div className="relative grid md:grid-cols-4 gap-8">

<div className="absolute top-8 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent hidden md:block"></div>

<div className="relative pt-8 md:text-center group">
<div className="w-4 h-4 rounded-full bg-surface border-2 border-white/20 absolute top-6 md:left-1/2 md:-translate-x-1/2 z-10 group-hover:border-blue-500 group-hover:bg-blue-500 transition-colors"></div>
<h4 className="text-lg font-medium text-white mb-2 mt-4">1. Define</h4>
<p className="text-sm text-secondary">Define the scope and price. IOU drafts the agreement.</p>
</div>

<div className="relative pt-8 md:text-center group">
<div className="w-4 h-4 rounded-full bg-surface border-2 border-white/20 absolute top-6 md:left-1/2 md:-translate-x-1/2 z-10 group-hover:border-blue-500 group-hover:bg-blue-500 transition-colors"></div>
<h4 className="text-lg font-medium text-white mb-2 mt-4">2. Sign</h4>
<p className="text-sm text-secondary">Client receives a secure link to review and digitally sign on any device.</p>
</div>

<div className="relative pt-8 md:text-center group">
<div className="w-4 h-4 rounded-full bg-surface border-2 border-white/20 absolute top-6 md:left-1/2 md:-translate-x-1/2 z-10 group-hover:border-blue-500 group-hover:bg-blue-500 transition-colors"></div>
<h4 className="text-lg font-medium text-white mb-2 mt-4">3. Track</h4>
<p className="text-sm text-secondary">Work begins. IOU tracks milestones and sends reminders automatically.</p>
</div>

<div className="relative pt-8 md:text-center group">
<div className="w-4 h-4 rounded-full bg-surface border-2 border-white/20 absolute top-6 md:left-1/2 md:-translate-x-1/2 z-10 group-hover:border-blue-500 group-hover:bg-blue-500 transition-colors"></div>
<h4 className="text-lg font-medium text-white mb-2 mt-4">4. Paid</h4>
<p className="text-sm text-secondary">Funds are released upon completion. Ratings update trust scores.</p>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-4">Simple, transparent pricing.</h2>
<p className="text-secondary">Free to start. Upgrade as you scale.</p>
</div>
<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

<div className="p-8 rounded-2xl bg-surface border border-border flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Starter</h3>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-3xl font-semibold text-white">Free</span>
</div>
<p className="text-sm text-secondary mt-2">Perfect for freelancers just starting out.</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-secondary">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> 1 Active Agreement
                    </li>
<li className="flex items-center gap-3 text-sm text-secondary">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Basic AI Drafting
                    </li>
<li className="flex items-center gap-3 text-sm text-secondary">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Digital Signatures
                    </li>
</ul>
<a className="w-full py-3 border border-white/20 rounded-lg text-sm font-medium text-center hover:bg-white/5 transition-colors" href="#">Create Agreement</a>
</div>

<div className="p-8 rounded-2xl bg-surfaceHighlight border border-white/10 flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 px-3 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-wider">Founding Rate</div>
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Professional</h3>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-3xl font-semibold text-white">$9.99</span>
<span className="text-secondary">/seat/mo</span>
</div>
<p className="text-sm text-secondary mt-2">For growing service businesses.</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-blue-400" icon="solar:check-circle-bold"></iconify-icon> Full Automation
                    </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-blue-400" icon="solar:check-circle-bold"></iconify-icon> Automated Payment Chasing
                    </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-blue-400" icon="solar:check-circle-bold"></iconify-icon> Full Trust Score Profile
                    </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-blue-400" icon="solar:check-circle-bold"></iconify-icon> Unlimited Agreements
                    </li>
</ul>
<a className="w-full py-3 bg-white text-black rounded-lg text-sm font-medium text-center hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]" href="#">Get Early Access</a>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6 border-t border-white/5">
<h2 className="text-2xl font-medium mb-10 text-center">The questions worth answering.</h2>
<div className="space-y-8">
<div>
<h4 className="text-white font-medium mb-2 flex items-center gap-2">
<iconify-icon className="text-secondary" icon="solar:question-circle-linear"></iconify-icon>
                    I already use contracts. Why IOU?
                </h4>
<p className="text-sm text-secondary pl-6 leading-relaxed">
                    Contracts document the agreement. IOU manages everything after signing — payments, reminders, disputes, and reputation. Most contract tools end where IOU begins.
                </p>
</div>
<div>
<h4 className="text-white font-medium mb-2 flex items-center gap-2">
<iconify-icon className="text-secondary" icon="solar:question-circle-linear"></iconify-icon>
                    This sounds like it takes time to set up.
                </h4>
<p className="text-sm text-secondary pl-6 leading-relaxed">
                    Your first agreement takes under 5 minutes. There is no migration, no integration setup, and no onboarding call required.
                </p>
</div>
<div>
<h4 className="text-white font-medium mb-2 flex items-center gap-2">
<iconify-icon className="text-secondary" icon="solar:question-circle-linear"></iconify-icon>
                    Why not just use ChatGPT to write the contract?
                </h4>
<p className="text-sm text-secondary pl-6 leading-relaxed">
                    ChatGPT drafts text. It cannot send it, sign it, track milestones, collect payment, or build a Trust Score. IOU executes. It does not just write.
                </p>
</div>
<div>
<h4 className="text-white font-medium mb-2 flex items-center gap-2">
<iconify-icon className="text-secondary" icon="solar:question-circle-linear"></iconify-icon>
                    What if they still do not pay?
                </h4>
<p className="text-sm text-secondary pl-6 leading-relaxed">
                    IOU cannot force a bank transfer. But a documented trail of missed payments attached to a public Trust Score creates social and commercial consequences most clients will act to avoid before it gets there.
                </p>
</div>
<div>
<h4 className="text-white font-medium mb-2 flex items-center gap-2">
<iconify-icon className="text-secondary" icon="solar:question-circle-linear"></iconify-icon>
                    Is this legal advice?
                </h4>
<p className="text-sm text-secondary pl-6 leading-relaxed">
                    No. IOU is an agreement management platform. We provide AI-assisted templates and automation — not legal counsel. For complex agreements, consult a lawyer.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto bg-gradient-to-b from-surfaceHighlight to-surface border border-white/10 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6 text-white">Your next client should not be a collection problem.</h2>
<p className="text-lg text-secondary mb-10 max-w-2xl mx-auto">Create your first agreement in IOU today. Free to start. No credit card required. If you upgrade, founding pricing is locked at $9.99 per seat.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-4 bg-white text-black rounded-full font-medium text-sm hover:scale-105 transition-transform" href="#">Create My First Agreement</a>
</div>
<p className="mt-6 text-xs text-secondary opacity-60">Takes under 5 minutes. Cancel anytime. No lock-in.</p>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center text-black text-[8px] font-bold">I</div>
<span className="text-sm font-medium tracking-tight">IOU MARKER INC.</span>
</div>
<p className="text-xs text-secondary text-center md:text-right max-w-md">
                No lock-in contracts. Cancel anytime. Not a law firm. Not a debt collector. A system that gets you paid.
            </p>
<p className="text-xs text-zinc-700">© 2024 IOU Marker Inc. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
