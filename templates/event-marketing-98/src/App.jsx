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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
<div className="text-sm font-semibold tracking-tighter text-black uppercase">
            NEER × CIRCLE × ROOTED
        </div>
<button className="rounded-full bg-gradient-to-r from-orange-400 to-rose-400 text-white text-xs font-medium px-5 py-2 hover:opacity-90 transition-opacity shadow-sm flex items-center gap-2">
<span>Launch System</span>
<iconify-icon icon="solar:rocket-linear" width="16"></iconify-icon>
</button>
</nav>
<main className="max-w-7xl mx-auto px-6 py-20 space-y-32">

<header className="max-w-3xl space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-black">
<span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                System Live
            </div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-black leading-tight">
                Event Marketing Operating System — V2
            </h1>
<p className="text-base text-gray-500 leading-relaxed max-w-2xl">
                High-level strategic and operational documentation for the Neer event framework. Optimised for clarity, structural logic, and automated execution.
            </p>
</header>

<section className="space-y-10">
<div className="space-y-2">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black flex items-center gap-3">
<span className="text-gray-300">1.</span> High-Level Contractual Obligations
                </h2>
<p className="text-sm">From the Services Agreement, Rooted must deliver (Non-Negotiable):</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
<div className="flex items-center gap-3 text-black">
<iconify-icon className="text-gray-400" icon="solar:leaf-linear" width="24"></iconify-icon>
<h3 className="text-base font-semibold">Organic</h3>
</div>
<ul className="space-y-3 text-sm flex-1">
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> 4–5 posts per week</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> Boosted posts</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> Monthly content calendar (by Day 3)</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> Comment moderation</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> Brand tone consistency</li>
</ul>
</div>

<div className="border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
<div className="flex items-center gap-3 text-black">
<iconify-icon className="text-gray-400" icon="solar:wallet-money-linear" width="24"></iconify-icon>
<h3 className="text-base font-semibold">Paid Media</h3>
</div>
<ul className="space-y-3 text-sm flex-1">
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> Meta &amp; TikTok campaign execution</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> Conversion event setup</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> Weekly optimisation</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> UGC-led ads</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> CAC trending toward £35 (best efforts)</li>
</ul>
</div>

<div className="border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
<div className="flex items-center gap-3 text-black">
<iconify-icon className="text-gray-400" icon="solar:pie-chart-2-linear" width="24"></iconify-icon>
<h3 className="text-base font-semibold">Data &amp; Audience</h3>
</div>
<ul className="space-y-3 text-sm flex-1">
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> Audience research (Pulsar / Audiense / Soprism)</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> Persona development</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> Geo-cluster targeting</li>
</ul>
</div>

<div className="border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
<div className="flex items-center gap-3 text-black">
<iconify-icon className="text-gray-400" icon="solar:bolt-linear" width="24"></iconify-icon>
<h3 className="text-base font-semibold">Automation</h3>
</div>
<ul className="space-y-3 text-sm flex-1">
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> Email onboarding flows</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> WhatsApp messaging flows</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> Retention + win-back logic</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> Event-specific reminder journeys</li>
</ul>
</div>

<div className="border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
<div className="flex items-center gap-3 text-black">
<iconify-icon className="text-gray-400" icon="solar:camera-linear" width="24"></iconify-icon>
<h3 className="text-base font-semibold">UGC / Content</h3>
</div>
<ul className="space-y-3 text-sm flex-1">
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> Creator sourcing</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> Ongoing content bank (30–50 clips/month across account)</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> Event-driven repurposing</li>
</ul>
</div>

<div className="border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
<div className="flex items-center gap-3 text-black">
<iconify-icon className="text-gray-400" icon="solar:chart-square-linear" width="24"></iconify-icon>
<h3 className="text-base font-semibold">Reporting</h3>
</div>
<ul className="space-y-3 text-sm flex-1">
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> Live dashboard</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> Weekly check-in</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> End-of-month performance report</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gray-300 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear"></iconify-icon> Escalation within 24 hours of performance risk</li>
</ul>
</div>
</div>

<div className="bg-gray-50/50 border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
<div className="flex items-center gap-3 text-black">
<iconify-icon className="text-gray-400" icon="solar:shield-warning-linear" width="20"></iconify-icon>
<h3 className="text-sm font-semibold">Strict Boundaries</h3>
</div>
<div className="flex flex-wrap gap-4 text-xs font-medium text-gray-600">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon> Marketing live min 3 weeks before event</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon> No direct comms with NEER (Circle is gateway)</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon> All approvals via Lexie</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon> Live dashboard maintained</span>
</div>
</div>
</section>
<hr className="border-gray-100"/>

<section className="space-y-10">
<div className="space-y-2">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black flex items-center gap-3">
<span className="text-gray-300">2.</span> Three-Week Event Model
                </h2>
<p className="text-sm">Locked structure. Flow reads from left to right as event approaches.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col gap-6 relative">
<div className="absolute -top-3 left-6 bg-white px-3 text-xs font-semibold text-gray-400 uppercase tracking-widest">Week 3</div>
<div className="border-b border-gray-100 pb-4">
<h3 className="text-lg font-semibold text-black">Validation + Hype</h3>
<p className="text-xs text-gray-400 mt-1">Organic-led phase</p>
</div>
<div className="space-y-6 flex-1">
<div className="space-y-2">
<h4 className="text-xs font-semibold text-black uppercase tracking-widest">Content Piece 1 (Flexible Promo)</h4>
<p className="text-xs leading-relaxed">NOT fixed format. Could be "Something is coming", Vibe teaser, Cultural angle, or Soft concept post. Purpose is to build intrigue.</p>
<div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono mt-2 overflow-x-auto pb-1 whitespace-nowrap">
<span>Create</span><iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
<span>Monday.com</span><iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
<span>Approve</span><iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
<span>Post (Organic)</span>
</div>
</div>
<div className="space-y-2">
<h4 className="text-xs font-semibold text-black uppercase tracking-widest">Email #1 (Ankit)</h4>
<div className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-xs space-y-1">
<p><span className="font-medium text-gray-700">Subject:</span> Something is coming…</p>
<p><span className="font-medium text-gray-700">CTA:</span> Register Interest</p>
<p><span className="font-medium text-gray-700">Tag:</span> Event_Name_Interest</p>
</div>
</div>
<div className="space-y-2">
<h4 className="text-xs font-semibold text-black uppercase tracking-widest">Interest Page</h4>
<p className="text-xs">Collects: Name, Email, Reason (optional). Triggers auto confirmation email.</p>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col gap-6 relative">
<div className="absolute -top-3 left-6 bg-white px-3 text-xs font-semibold text-gray-400 uppercase tracking-widest">Week 2</div>
<div className="border-b border-gray-100 pb-4">
<h3 className="text-lg font-semibold text-black">Hero Launch Phase</h3>
<p className="text-xs text-gray-400 mt-1">Once Google Sheet confirmed</p>
</div>
<div className="space-y-6 flex-1">
<div className="space-y-2">
<h4 className="text-xs font-semibold text-black uppercase tracking-widest">Hero Content (Main Asset)</h4>
<p className="text-xs">PRIMARY creative asset. Hero Poster OR Hero Video OR Carousel Announcement.</p>
<div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono mt-2 overflow-x-auto pb-1 whitespace-nowrap">
<span>Create</span><iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
<span>Monday.com</span><iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
<span>Approve</span>
</div>
</div>
<div className="space-y-2">
<h4 className="text-xs font-semibold text-black uppercase tracking-widest">Simultaneous Launch Sequence</h4>
<ul className="text-xs space-y-2 border-l-2 border-gray-200 pl-3 ml-1">
<li>Luma Page built</li>
<li>CMS Page built</li>
<li>Email #2 sent (Event Now Live)</li>
<li>Ads launched (using Hero asset)</li>
</ul>
</div>
<div className="bg-white border border-gray-200 shadow-sm rounded-lg p-3 text-xs font-medium text-black space-y-1">
<p className="flex items-center gap-2"><iconify-icon className="text-gray-400" icon="solar:close-circle-linear"></iconify-icon> No ads before Luma.</p>
<p className="flex items-center gap-2"><iconify-icon className="text-gray-400" icon="solar:close-circle-linear"></iconify-icon> No email before Luma.</p>
<p className="flex items-center gap-2"><iconify-icon className="text-gray-400" icon="solar:close-circle-linear"></iconify-icon> No CMS without Luma link.</p>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col gap-6 relative">
<div className="absolute -top-3 left-6 bg-white px-3 text-xs font-semibold text-gray-400 uppercase tracking-widest">Week 1</div>
<div className="border-b border-gray-100 pb-4">
<h3 className="text-lg font-semibold text-black">Conversion + Reminders</h3>
<p className="text-xs text-gray-400 mt-1">Guest management</p>
</div>
<div className="space-y-6 flex-1">
<div className="space-y-2">
<h4 className="text-xs font-semibold text-black uppercase tracking-widest">Circle Approval</h4>
<p className="text-xs">Approves guests directly via Luma.</p>
</div>
<div className="space-y-2">
<h4 className="text-xs font-semibold text-black uppercase tracking-widest">Automation Sequence</h4>
<ul className="text-xs space-y-3 relative before:absolute before:inset-y-1 before:left-1.5 before:w-px before:bg-gray-200">
<li className="relative pl-6">
<div className="absolute left-0.5 top-1 w-2 h-2 rounded-full bg-black border-2 border-white"></div>
<span className="font-medium text-gray-800">Upon approval:</span> Confirmation email
                                </li>
<li className="relative pl-6">
<div className="absolute left-0.5 top-1 w-2 h-2 rounded-full bg-gray-300 border-2 border-white"></div>
<span className="font-medium text-gray-800">7 days before:</span> WhatsApp message
                                </li>
<li className="relative pl-6">
<div className="absolute left-0.5 top-1 w-2 h-2 rounded-full bg-gray-300 border-2 border-white"></div>
<span className="font-medium text-gray-800">2 days before:</span> Reminder email
                                </li>
<li className="relative pl-6">
<div className="absolute left-0.5 top-1 w-2 h-2 rounded-full bg-gray-300 border-2 border-white"></div>
<span className="font-medium text-gray-800">Morning of:</span> Final reminder
                                </li>
</ul>
</div>
</div>
</div>
</div>
</section>
<hr className="border-gray-100"/>

<section className="space-y-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="space-y-2">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black flex items-center gap-3">
<span className="text-gray-300">3 &amp; 4.</span> Content Structure &amp; Schedule
                    </h2>
<p className="text-sm">Mandatory output metrics and example monthly rhythm for 3 events.</p>
</div>
<div className="flex gap-4">
<div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 flex flex-col">
<span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Min. Posts/Wk</span>
<span className="text-xl font-semibold text-black">4</span>
</div>
<div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 flex flex-col">
<span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Min. UGC/Mo</span>
<span className="text-xl font-semibold text-black">8+</span>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm border-collapse">
<thead>
<tr className="bg-gray-50/50 text-xs font-semibold text-gray-400 uppercase tracking-widest border-b border-gray-200">
<th className="px-6 py-4 w-32">Timing</th>
<th className="px-6 py-4 w-24">Day</th>
<th className="px-6 py-4">Content Type</th>
<th className="px-6 py-4">Notes</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="hover:bg-gray-50/30 transition-colors">
<td className="px-6 py-4 align-top font-medium text-black border-r border-gray-100" rowspan="4">
<div className="mb-1">Week 1</div>
<div className="text-[10px] font-normal text-gray-400 leading-tight">Event A<br/>3 weeks out</div>
</td>
<td className="px-6 py-3 text-gray-600">Mon</td>
<td className="px-6 py-3 font-medium text-gray-800">Content 1 (Teaser)</td>
<td className="px-6 py-3 text-gray-500">Organic only</td>
</tr>
<tr className="hover:bg-gray-50/30 transition-colors">
<td className="px-6 py-3 text-gray-600">Wed</td>
<td className="px-6 py-3 font-medium text-gray-800">UGC 1</td>
<td className="px-6 py-3 text-gray-500">Lifestyle / Community</td>
</tr>
<tr className="hover:bg-gray-50/30 transition-colors">
<td className="px-6 py-3 text-gray-600">Fri</td>
<td className="px-6 py-3 font-medium text-gray-800">UGC 2</td>
<td className="px-6 py-3 text-gray-500">“Why NEER?”</td>
</tr>
<tr className="hover:bg-gray-50/30 transition-colors border-b-2 border-gray-200">
<td className="px-6 py-3 text-gray-600">Sun</td>
<td className="px-6 py-3 font-medium text-gray-800">Story push</td>
<td className="px-6 py-3 text-gray-500">Interest CTA</td>
</tr>

<tr className="hover:bg-gray-50/30 transition-colors bg-gray-50/20">
<td className="px-6 py-4 align-top font-medium text-black border-r border-gray-100" rowspan="4">
<div className="mb-1">Week 2</div>
<div className="text-[10px] font-normal text-gray-400 leading-tight">Event A<br/>2 weeks out</div>
<div className="mt-2 inline-block px-2 py-0.5 bg-gray-200 text-gray-800 text-[10px] rounded-full font-medium">Ads Live</div>
</td>
<td className="px-6 py-3 text-gray-600">Mon</td>
<td className="px-6 py-3 font-medium text-black flex items-center gap-2"><iconify-icon className="text-rose-400" icon="solar:star-linear"></iconify-icon> HERO Poster</td>
<td className="px-6 py-3 text-gray-500">Main announcement</td>
</tr>
<tr className="hover:bg-gray-50/30 transition-colors bg-gray-50/20">
<td className="px-6 py-3 text-gray-600">Wed</td>
<td className="px-6 py-3 font-medium text-gray-800">UGC 3</td>
<td className="px-6 py-3 text-gray-500">Event vibe</td>
</tr>
<tr className="hover:bg-gray-50/30 transition-colors bg-gray-50/20">
<td className="px-6 py-3 text-gray-600">Fri</td>
<td className="px-6 py-3 font-medium text-gray-800">Partner Collab</td>
<td className="px-6 py-3 text-gray-500">Cross-post</td>
</tr>
<tr className="hover:bg-gray-50/30 transition-colors bg-gray-50/20 border-b-2 border-gray-200">
<td className="px-6 py-3 text-gray-600">Sun</td>
<td className="px-6 py-3 font-medium text-gray-800">UGC 4</td>
<td className="px-6 py-3 text-gray-500">Social proof</td>
</tr>

<tr className="hover:bg-gray-50/30 transition-colors">
<td className="px-6 py-4 align-top font-medium text-black border-r border-gray-100" rowspan="4">
<div className="mb-1">Week 3</div>
<div className="text-[10px] font-normal text-gray-400 leading-tight">Event A<br/>1 week out</div>
</td>
<td className="px-6 py-3 text-gray-600">Mon</td>
<td className="px-6 py-3 font-medium text-gray-800">UGC 5</td>
<td className="px-6 py-3 text-gray-500">Countdown</td>
</tr>
<tr className="hover:bg-gray-50/30 transition-colors">
<td className="px-6 py-3 text-gray-600">Wed</td>
<td className="px-6 py-3 font-medium text-gray-800">Panelist Video</td>
<td className="px-6 py-3 text-gray-500">Collab</td>
</tr>
<tr className="hover:bg-gray-50/30 transition-colors">
<td className="px-6 py-3 text-gray-600">Fri</td>
<td className="px-6 py-3 font-medium text-gray-800">UGC 6</td>
<td className="px-6 py-3 text-gray-500">Testimonial</td>
</tr>
<tr className="hover:bg-gray-50/30 transition-colors border-b-2 border-gray-200">
<td className="px-6 py-3 text-gray-600">Sun</td>
<td className="px-6 py-3 font-medium text-gray-800">Reminder Stories</td>
<td className="px-6 py-3 text-gray-500">-</td>
</tr>

<tr className="hover:bg-gray-50/30 transition-colors bg-gray-50/20">
<td className="px-6 py-4 align-top font-medium text-black border-r border-gray-100" rowspan="4">
<div className="mb-1">Week 4</div>
<div className="text-[10px] font-normal text-gray-400 leading-tight">Post Event A<br/>Event B Week 3</div>
</td>
<td className="px-6 py-3 text-gray-600">Mon</td>
<td className="px-6 py-3 font-medium text-black">Event Recap Reel</td>
<td className="px-6 py-3 text-gray-500">Must capture</td>
</tr>
<tr className="hover:bg-gray-50/30 transition-colors bg-gray-50/20">
<td className="px-6 py-3 text-gray-600">Wed</td>
<td className="px-6 py-3 font-medium text-gray-800">UGC 7</td>
<td className="px-6 py-3 text-gray-500">Post-event reaction</td>
</tr>
<tr className="hover:bg-gray-50/30 transition-colors bg-gray-50/20">
<td className="px-6 py-3 text-gray-600">Fri</td>
<td className="px-6 py-3 font-medium text-gray-800">Content 1</td>
<td className="px-6 py-3 text-gray-500">Event B teaser (Next cycle)</td>
</tr>
<tr className="hover:bg-gray-50/30 transition-colors bg-gray-50/20">
<td className="px-6 py-3 text-gray-600">Sun</td>
<td className="px-6 py-3 font-medium text-gray-800">UGC 8</td>
<td className="px-6 py-3 text-gray-500">Culture angle</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-gray-50 border-t border-gray-200 p-6 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
<div>
<span className="text-xs font-semibold text-black uppercase tracking-widest block mb-2">Approved UGC Categories</span>
<div className="flex flex-wrap gap-2 text-xs">
<span className="bg-white border border-gray-200 px-2 py-1 rounded">Social proof</span>
<span className="bg-white border border-gray-200 px-2 py-1 rounded">Dating / connection angle</span>
<span className="bg-white border border-gray-200 px-2 py-1 rounded">Business angle</span>
<span className="bg-white border border-gray-200 px-2 py-1 rounded">Friendship angle</span>
<span className="bg-white border border-gray-200 px-2 py-1 rounded">“Why I joined”</span>
<span className="bg-white border border-gray-200 px-2 py-1 rounded">POV videos</span>
<span className="bg-white border border-gray-200 px-2 py-1 rounded">Vox-pop interviews</span>
<span className="bg-white border border-gray-200 px-2 py-1 rounded">Event recap micro clips</span>
</div>
</div>
<div className="text-right shrink-0">
<div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Target</div>
<div className="text-lg font-semibold text-black">12/month if possible</div>
</div>
</div>
</div>
</section>
<hr className="border-gray-100"/>

<section className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="space-y-6">
<div className="space-y-2">
<h2 className="text-2xl font-semibold tracking-tight text-black flex items-center gap-3">
<span className="text-gray-300">5.</span> Automation Check
                    </h2>
<p className="text-sm">Critical pre-flight validation.</p>
</div>
<div className="border border-gray-200 rounded-2xl p-6 md:p-8 space-y-6">
<div className="space-y-3">
<p className="text-sm font-semibold text-black">Does Luma allow:</p>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center group-hover:border-gray-400 transition-colors bg-white"></div>
<span className="text-sm text-gray-600">Approval-based confirmation emails?</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center group-hover:border-gray-400 transition-colors bg-white"></div>
<span className="text-sm text-gray-600">Reminder automation?</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center group-hover:border-gray-400 transition-colors bg-white"></div>
<span className="text-sm text-gray-600">Segmented exports?</span>
</label>
</div>
</div>
<div className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-3">
<div className="flex items-start gap-3">
<iconify-icon className="text-black mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<div className="text-sm space-y-1">
<p className="font-medium text-black">If not: Replicate automation in GHL.</p>
<p className="text-gray-500">We do NOT rely blindly on Luma. Lexie approves guests inside Luma, but email journey must be pre-built.</p>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="space-y-2">
<h2 className="text-2xl font-semibold tracking-tight text-black flex items-center gap-3">
<span className="text-gray-300">6.</span> Post-Event System
                    </h2>
<p className="text-sm">Compounding loop: UGC from event feeds next event.</p>
</div>
<div className="border border-gray-200 rounded-2xl p-6 md:p-8 space-y-8">

<div className="relative pl-6 before:absolute before:inset-y-2 before:left-0 before:w-0.5 before:bg-black">
<h3 className="text-sm font-semibold text-black mb-3">At event (Capture)</h3>
<div className="grid grid-cols-2 gap-3 text-xs text-gray-600">
<span className="flex items-center gap-2"><iconify-icon className="text-gray-400" icon="solar:videocamera-record-linear"></iconify-icon> 10–15 short interviews</span>
<span className="flex items-center gap-2"><iconify-icon className="text-gray-400" icon="solar:videocamera-record-linear"></iconify-icon> Ambience clips</span>
<span className="flex items-center gap-2"><iconify-icon className="text-gray-400" icon="solar:videocamera-record-linear"></iconify-icon> Arrival footage</span>
<span className="flex items-center gap-2"><iconify-icon className="text-gray-400" icon="solar:videocamera-record-linear"></iconify-icon> Testimonial lines</span>
</div>
</div>

<div className="relative pl-6 before:absolute before:inset-y-2 before:left-0 before:w-0.5 before:bg-gray-300">
<h3 className="text-sm font-semibold text-black mb-3">Within 72 hours</h3>
<div className="flex flex-wrap gap-2 text-xs">
<span className="px-2.5 py-1 bg-white border border-gray-200 rounded-full text-gray-700">1 recap reel</span>
<span className="px-2.5 py-1 bg-white border border-gray-200 rounded-full text-gray-700">2–3 micro clips</span>
<span className="px-2.5 py-1 bg-white border border-gray-200 rounded-full text-gray-700">Testimonial graphics</span>
</div>
</div>

<div className="relative pl-6 before:absolute before:inset-y-2 before:left-0 before:w-0.5 before:bg-gray-200">
<h3 className="text-sm font-semibold text-black mb-3">Post-event email</h3>
<div className="flex flex-wrap gap-2 text-xs text-gray-500 font-medium">
<span>Thank you</span>
<span className="text-gray-300">•</span>
<span>Next event CTA</span>
<span className="text-gray-300">•</span>
<span>Soft upsell</span>
</div>
</div>
</div>
</div>
</section>
<hr className="border-gray-100"/>

<section className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="space-y-6">
<div className="space-y-2">
<h2 className="text-2xl font-semibold tracking-tight text-black flex items-center gap-3">
<span className="text-gray-300">7.</span> Content Priority Allocation
                    </h2>
<p className="text-sm">Sophie’s time split. Promo posters are not majority workload.</p>
</div>
<div className="border border-gray-200 rounded-2xl p-6 md:p-8 space-y-6">

<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-black font-semibold">UGC creation &amp; coordination</span>
<span className="text-gray-500 font-mono">60%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2">
<div className="bg-black h-2 rounded-full" style={{width: '60%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-black font-medium">Post-production &amp; editing</span>
<span className="text-gray-500 font-mono">20%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2">
<div className="bg-gray-400 h-2 rounded-full" style={{width: '20%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-black font-medium">Partner collaboration coordination</span>
<span className="text-gray-500 font-mono">10%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2">
<div className="bg-gray-300 h-2 rounded-full" style={{width: '10%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-black font-medium">Story + reactive content</span>
<span className="text-gray-500 font-mono">10%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2">
<div className="bg-gray-200 h-2 rounded-full" style={{width: '10%'}}></div>
</div>
</div>
<p className="text-xs text-gray-500 pt-2 border-t border-gray-100">Note: UGC must be majority of Sophie’s time.</p>
</div>
</div>

<div className="space-y-6">
<div className="space-y-2">
<h2 className="text-2xl font-semibold tracking-tight text-black flex items-center gap-3">
<span className="text-gray-300">8.</span> Final Locked Rules
                    </h2>
<p className="text-sm">System constraints. No exceptions.</p>
</div>
<div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white">
<ul className="space-y-4 text-sm text-gray-700 font-medium">
<li className="flex items-start gap-3">
<iconify-icon className="text-black text-lg mt-0.5 shrink-0" icon="solar:check-square-linear"></iconify-icon>
                            Content 1 flexible, but mandatory.
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-black text-lg mt-0.5 shrink-0" icon="solar:check-square-linear"></iconify-icon>
                            Hero asset mandatory.
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-black text-lg mt-0.5 shrink-0" icon="solar:check-square-linear"></iconify-icon>
                            Luma + CMS live before ads.
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-black text-lg mt-0.5 shrink-0" icon="solar:check-square-linear"></iconify-icon>
                            Minimum 8 UGC per month.
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-black text-lg mt-0.5 shrink-0" icon="solar:check-square-linear"></iconify-icon>
                            Post-event recap mandatory.
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-black text-lg mt-0.5 shrink-0" icon="solar:check-square-linear"></iconify-icon>
                            Automation pre-built before launch.
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-black text-lg mt-0.5 shrink-0" icon="solar:check-square-linear"></iconify-icon>
                            All content uploaded to Monday.com before posting.
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-black text-lg mt-0.5 shrink-0" icon="solar:check-square-linear"></iconify-icon>
                            Marketing live 3 weeks before event.
                        </li>
</ul>
</div>
</div>
</section>

<div className="pt-12 pb-24 flex justify-center">
<button className="rounded-full bg-gradient-to-r from-orange-400 to-rose-400 text-white text-sm font-medium px-8 py-3.5 hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2">
                Acknowledge &amp; Access System
                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</main>

    </>
  );
}
