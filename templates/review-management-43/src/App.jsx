import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon className="text-lg" icon="solar:command-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900">REVIEW COMMANDER</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="hover:text-slate-900 transition-colors" href="#workflow">Workflow</a>
<a className="hover:text-slate-900 transition-colors" href="#use-cases">Use Cases</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Log in</a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-sm" href="#">
                    Book a Demo
                </a>
</div>
</div>
</nav>

<section className="relative pt-24 pb-32 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Not just AI replies. Review execution.
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-tight">
                Turn Google Reviews into an <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">Automated Workflow</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
                Review Commander helps teams import, classify, draft, approve, publish, and measure review responses — with AI assistance and human control.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center justify-center h-12 px-6 text-base font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-sm w-full sm:w-auto" href="#">
                    Book a Demo
                </a>
<a className="inline-flex items-center justify-center h-12 px-6 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all shadow-sm w-full sm:w-auto" href="#features">
<iconify-icon className="mr-2 text-lg" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                    See How It Works
                </a>
</div>

<div className="mt-20 relative max-w-5xl mx-auto">
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 top-1/2"></div>
<div className="rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden text-left relative z-0 ring-1 ring-slate-900/5">

<div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400 text-xl" icon="solar:inbox-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-900">Inbox</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 text-xs font-medium">12 Unresolved</span>
</div>
<div className="flex gap-2">
<div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center">
<iconify-icon className="text-slate-500" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 min-h-[400px]">

<div className="border-r border-slate-100 bg-white hidden md:block">
<div className="p-4 border-b border-slate-50 bg-blue-50/30">
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-medium text-slate-900">Grand Hotel Milano</span>
<span className="text-xs text-slate-500">2m ago</span>
</div>
<div className="flex text-yellow-400 text-xs mb-2">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-xs text-slate-600 line-clamp-2">Great location, but the breakfast could have more options...</p>
</div>
<div className="p-4 border-b border-slate-50 opacity-50">
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-medium text-slate-900">Bistro Alpine</span>
<span className="text-xs text-slate-500">1h ago</span>
</div>
<div className="flex text-yellow-400 text-xs mb-2">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="md:col-span-2 bg-slate-50/50 flex flex-col">

<div className="p-6 bg-white border-b border-slate-100">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-medium text-sm">MC</div>
<div>
<div className="text-sm font-medium text-slate-900">Marco C.</div>
<div className="text-xs text-slate-500 flex items-center gap-1">
                                                via Google Business Profile
                                            </div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-1 rounded bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">Italian</span>
<span className="px-2 py-1 rounded bg-green-50 text-green-700 text-xs font-medium border border-green-100">Positive Sentiment</span>
</div>
</div>
<div className="flex text-yellow-400 text-sm mb-3">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-slate-300" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-slate-700 mb-2">Posizione fantastica in centro, personale molto gentile. L'unica pecca è la colazione che potrebbe offrire una scelta più ampia, specialmente per il salato.</p>
<p className="text-xs text-slate-500 italic">Translated: Fantastic location in the center, very friendly staff. The only flaw is the breakfast which could offer a wider choice, especially for savory items.</p>
</div>

<div className="p-6 flex-1">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2 text-blue-600">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-semibold tracking-tight uppercase">AI Draft Ready</span>
</div>
<button className="text-xs text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1">
<iconify-icon icon="solar:refresh-linear" strokeWidth="1.5"></iconify-icon> Regenerate
                                    </button>
</div>
<div className="bg-white border border-blue-100 rounded-lg p-4 shadow-sm relative">
<div className="absolute -left-px top-4 bottom-4 w-0.5 bg-blue-500 rounded-r-full"></div>
<p className="text-sm text-slate-700">Gentile Marco, grazie per aver condiviso la sua esperienza. Siamo felici che abbia apprezzato la nostra posizione centrale e la cordialità del nostro staff. Prendiamo nota del suo suggerimento riguardo la colazione salata: il feedback dei nostri ospiti è fondamentale per migliorarci continuamente. Speriamo di poterla accogliere nuovamente al Grand Hotel Milano.</p>
</div>
</div>

<div className="p-4 bg-white border-t border-slate-100 flex justify-end gap-3">
<button className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors">
                                    Edit Draft
                                </button>
<button className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-sm">
<iconify-icon icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
                                    Approve &amp; Publish to Google
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Manual review handling scales poorly.</h2>
<p className="text-base text-slate-600">Businesses receive more reviews than they can handle manually. Responses are inconsistent, negative reviews fall through the cracks, and teams waste time copy-pasting the same replies.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 mb-4">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Slow Response Times</h3>
<p className="text-sm text-slate-600">Reviews sit unread for days while staff prioritize on-site operations over digital reputation.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 mb-4">
<iconify-icon className="text-xl" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Missed Escalations</h3>
<p className="text-sm text-slate-600">Negative feedback gets lost in the noise, escalating into larger brand issues without management visibility.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 mb-4">
<iconify-icon className="text-xl" icon="solar:documents-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Manual Copy-Paste</h3>
<p className="text-sm text-slate-600">Teams rely on generic templates, copying and pasting across languages, losing brand consistency.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="workflow">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">From Review Replies to <br/>Review Execution.</h2>
<p className="text-base text-slate-600 max-w-2xl">Review Commander manages the full lifecycle of a review, not just the writing part. It builds a bridge between Google's API and your operational teams.</p>
</div>
<div className="relative border-l border-slate-200 ml-4 md:ml-0 md:border-none">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">

<div className="relative pl-8 md:pl-0">
<div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-blue-600 md:hidden ring-4 ring-white"></div>
<div className="hidden md:flex w-full h-px bg-slate-200 mb-6 relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-white"></div>
</div>
<div className="text-blue-600 text-sm font-semibold tracking-tight mb-2">01. Import &amp; Sync</div>
<h4 className="text-base font-medium text-slate-900 mb-2">Sync from Google</h4>
<p className="text-sm text-slate-600">Automatically pull in new reviews across all your connected business locations in near real-time.</p>
</div>

<div className="relative pl-8 md:pl-0">
<div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-slate-300 md:hidden ring-4 ring-white"></div>
<div className="hidden md:flex w-full h-px bg-slate-200 mb-6 relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-slate-300 ring-4 ring-white"></div>
</div>
<div className="text-slate-500 text-sm font-semibold tracking-tight mb-2">02. Intelligence</div>
<h4 className="text-base font-medium text-slate-900 mb-2">Classify &amp; Draft</h4>
<p className="text-sm text-slate-600">Detect language, gauge sentiment, flag risks, and generate a context-aware AI reply draft automatically.</p>
</div>

<div className="relative pl-8 md:pl-0">
<div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-slate-300 md:hidden ring-4 ring-white"></div>
<div className="hidden md:flex w-full h-px bg-slate-200 mb-6 relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-slate-300 ring-4 ring-white"></div>
</div>
<div className="text-slate-500 text-sm font-semibold tracking-tight mb-2">03. Control</div>
<h4 className="text-base font-medium text-slate-900 mb-2">Human Approval</h4>
<p className="text-sm text-slate-600">Managers review the draft in the dashboard. They can approve instantly, edit, or rewrite completely.</p>
</div>

<div className="relative pl-8 md:pl-0">
<div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-slate-300 md:hidden ring-4 ring-white"></div>
<div className="hidden md:flex w-full h-px bg-slate-200 mb-6 relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-slate-300 ring-4 ring-white"></div>
</div>
<div className="text-slate-500 text-sm font-semibold tracking-tight mb-2">04. Execution</div>
<h4 className="text-base font-medium text-slate-900 mb-2">Publish &amp; Track</h4>
<p className="text-sm text-slate-600">Push the final reply directly to Google Business Profile and log the interaction for ROI tracking.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Built for scale. Designed for control.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-2xl text-slate-700 mb-4" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-2">Google Integration</h3>
<p className="text-xs text-slate-600 leading-relaxed">Connect business locations securely and sync all Google reviews into a single, unified inbox.</p>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-2xl text-blue-600 mb-4" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-2">AI Reply Drafts</h3>
<p className="text-xs text-slate-600 leading-relaxed">Generate brand-safe, context-aware responses instantly, avoiding generic or hallucinated content.</p>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-2xl text-slate-700 mb-4" icon="solar:user-check-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-2">Human-in-the-Loop</h3>
<p className="text-xs text-slate-600 leading-relaxed">Keep absolute control. Approve, edit, regenerate, or hold replies before they go live.</p>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-2xl text-slate-700 mb-4" icon="solar:upload-track-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-2">Direct Publishing</h3>
<p className="text-xs text-slate-600 leading-relaxed">Publish approved replies directly to Google from inside the platform. No tab switching.</p>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-2xl text-slate-700 mb-4" icon="solar:radar-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-2">Risk Classification</h3>
<p className="text-xs text-slate-600 leading-relaxed">Automatically detect negative reviews, spam signals, and high-priority feedback requiring immediate escalation.</p>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-2xl text-slate-700 mb-4" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-2">Multilingual Logic</h3>
<p className="text-xs text-slate-600 leading-relaxed">Deep support for regional language nuances, perfect for complex markets like DACH, Italy, and South Tyrol.</p>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-2xl text-slate-700 mb-4" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-2">Multi-Tenant Setup</h3>
<p className="text-xs text-slate-600 leading-relaxed">Manage multiple organizations, brands, and granular user permissions from one centralized system.</p>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-2xl text-slate-700 mb-4" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-2">Analytics &amp; ROI</h3>
<p className="text-xs text-slate-600 leading-relaxed">Track no-touch rates, manual edit ratios, response speeds, and calculate actual operational hours saved.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Most tools write replies.<br/>Review Commander runs the workflow.</h2>
</div>
<div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="p-4 font-medium text-slate-900 w-1/3">Capability</th>
<th className="p-4 font-medium text-slate-500 w-1/3 border-l border-slate-200">Generic AI Generators</th>
<th className="p-4 font-semibold text-slate-900 w-1/3 border-l border-slate-200 bg-blue-50/30">Review Commander</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr>
<td className="p-4 text-slate-700">Generates text responses</td>
<td className="p-4 border-l border-slate-200"><iconify-icon className="text-slate-400 text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
<td className="p-4 border-l border-slate-200 bg-blue-50/10"><iconify-icon className="text-blue-600 text-lg" icon="solar:check-circle-bold"></iconify-icon></td>
</tr>
<tr>
<td className="p-4 text-slate-700">Automatic API Sync with Google</td>
<td className="p-4 border-l border-slate-200"><iconify-icon className="text-slate-300 text-lg" icon="solar:close-circle-linear"></iconify-icon></td>
<td className="p-4 border-l border-slate-200 bg-blue-50/10"><iconify-icon className="text-blue-600 text-lg" icon="solar:check-circle-bold"></iconify-icon></td>
</tr>
<tr>
<td className="p-4 text-slate-700">Sentiment &amp; Priority Classification</td>
<td className="p-4 border-l border-slate-200"><iconify-icon className="text-slate-300 text-lg" icon="solar:close-circle-linear"></iconify-icon></td>
<td className="p-4 border-l border-slate-200 bg-blue-50/10"><iconify-icon className="text-blue-600 text-lg" icon="solar:check-circle-bold"></iconify-icon></td>
</tr>
<tr>
<td className="p-4 text-slate-700">Human Approval Dashboard</td>
<td className="p-4 border-l border-slate-200"><iconify-icon className="text-slate-300 text-lg" icon="solar:close-circle-linear"></iconify-icon></td>
<td className="p-4 border-l border-slate-200 bg-blue-50/10"><iconify-icon className="text-blue-600 text-lg" icon="solar:check-circle-bold"></iconify-icon></td>
</tr>
<tr>
<td className="p-4 text-slate-700">Direct Publishing to Google API</td>
<td className="p-4 border-l border-slate-200"><iconify-icon className="text-slate-300 text-lg" icon="solar:close-circle-linear"></iconify-icon></td>
<td className="p-4 border-l border-slate-200 bg-blue-50/10"><iconify-icon className="text-blue-600 text-lg" icon="solar:check-circle-bold"></iconify-icon></td>
</tr>
<tr>
<td className="p-4 text-slate-700">Operational Automation Reporting</td>
<td className="p-4 border-l border-slate-200"><iconify-icon className="text-slate-300 text-lg" icon="solar:close-circle-linear"></iconify-icon></td>
<td className="p-4 border-l border-slate-200 bg-blue-50/10"><iconify-icon className="text-blue-600 text-lg" icon="solar:check-circle-bold"></iconify-icon></td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden" id="use-cases">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Built for European Review Complexity</h2>
<p className="text-slate-300 text-base mb-8 leading-relaxed">
                        European businesses deal with multilingual markets, regional tone differences, and strict data standards. Review Commander is architected for this reality.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-400 text-lg mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span><strong>Regional Intelligence:</strong> Tailored logic for DACH, Italy, and South Tyrol language mixes.</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-400 text-lg mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span><strong>GDPR-Conscious:</strong> Minimal data retention, European server infrastructure, and clean API limits.</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-400 text-lg mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span><strong>Multi-Location Operations:</strong> Perfect for hospitality and retail brands managing dozens of regional profiles.</span>
</li>
</ul>
<div className="pt-8 border-t border-slate-800">
<p className="text-xs font-semibold tracking-tight text-slate-500 uppercase mb-4">Trusted By Teams In</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-xs text-slate-300">Hotels &amp; Hospitality</span>
<span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-xs text-slate-300">Restaurants</span>
<span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-xs text-slate-300">Local Services</span>
<span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-xs text-slate-300">Tourism Boards</span>
<span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-xs text-slate-300">Reputation Agencies</span>
</div>
</div>
</div>

<div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 relative">
<div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
<h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Real Operations Example
                    </h3>
<div className="space-y-6 relative before:absolute before:inset-0 before:ml-3 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-slate-800 bg-slate-700 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
</div>
<div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] bg-slate-800/50 border border-slate-700 p-3 rounded-lg">
<p className="text-xs text-slate-300">Review Commander detects a new 5-star review in German for an Italian hotel.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-slate-800 bg-slate-700 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
</div>
<div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] bg-slate-800/50 border border-slate-700 p-3 rounded-lg">
<p className="text-xs text-slate-300">System drafts a polite German reply mentioning specific positive points.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-slate-800 bg-slate-700 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
</div>
<div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] bg-blue-900/20 border border-blue-800/50 p-3 rounded-lg">
<p className="text-xs text-white font-medium">Desk manager clicks "Approve" between guest check-ins.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-slate-800 bg-slate-700 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
</div>
<div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] bg-slate-800/50 border border-slate-700 p-3 rounded-lg">
<p className="text-xs text-slate-300">Reply published to Google instantly. Stats recorded.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Measure the work you no longer have to do.</h2>
<p className="text-base text-slate-600">Move away from vanity metrics. Track actual operational efficiency, response times, and the impact of AI on your daily workflow.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-6 bg-slate-50 border border-slate-100 rounded-xl text-center">
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">85%</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-tight">No-Touch AI Rate</div>
</div>
<div className="p-6 bg-slate-50 border border-slate-100 rounded-xl text-center">
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">&lt; 4h</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-tight">Avg Response Time</div>
</div>
<div className="p-6 bg-slate-50 border border-slate-100 rounded-xl text-center">
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">12%</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-tight">Human Edit Rate</div>
</div>
<div className="p-6 bg-slate-50 border border-slate-100 rounded-xl text-center">
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">32h</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-tight">Est. Monthly Saved</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50">
<div className="max-w-4xl mx-auto px-6 text-center">
<p className="text-sm text-slate-600">
<span className="font-medium text-slate-900">Future-proof architecture:</span> Starting with Google Business Profile execution, expanding into negative review escalation protocols, spam filter agents, and full EMAS support suite integration. No hype, just operational value.
            </p>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Ready to turn reviews into a managed workflow?</h2>
<p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">Respond faster, stay consistent, keep control, and measure the impact of AI-assisted review handling across all your locations.</p>
<a className="inline-flex items-center justify-center h-14 px-8 text-base font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-md" href="#">
                Book a Platform Demo
            </a>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-xl text-slate-900" icon="solar:command-linear" strokeWidth="1.5"></iconify-icon>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">REVIEW COMMANDER</div>
<div className="text-xs text-slate-500">AI-powered review execution for modern teams.</div>
</div>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-900 transition-colors" href="#">Contact</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-8 text-center md:text-left text-xs text-slate-400">
            © 2024 Review Commander. All rights reserved.
        </div>
</footer>

    </>
  );
}
