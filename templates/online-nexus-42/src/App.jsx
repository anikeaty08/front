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
      

<nav className="w-full h-20 px-6 md:px-12 flex justify-between items-center bg-white/80 backdrop-blur-xl fixed top-0 z-50 border-b border-neutral-100">

<a className="block z-20" href="#">
<img alt="Online Nexus Marketing" className="h-8 md:h-10 w-auto object-contain hover:opacity-80 transition-opacity" src="https://res.cloudinary.com/dhs9d8tou/image/upload/v1769829242/onmlogo_bhcbxa.png"/>
</a>

<div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<a className="text-sm font-medium text-neutral-500 hover:text-black transition-colors duration-200" href="#reality">The Reality</a>
<a className="text-sm font-medium text-neutral-500 hover:text-black transition-colors duration-200" href="#ownership">Ownership</a>
<a className="text-sm font-medium text-neutral-500 hover:text-black transition-colors duration-200" href="#scope">Scope</a>
<a className="text-sm font-medium text-neutral-500 hover:text-black transition-colors duration-200" href="#about">About</a>
<a className="text-sm font-medium text-neutral-500 hover:text-black transition-colors duration-200" href="#clients">Clients</a>
</div>

<a className="z-20 px-5 py-2 bg-black text-white text-xs md:text-sm font-medium rounded-full hover:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md" href="https://calendly.com/onlinenexusmarketing/strategy-meeting" target="_blank">
            Book a Call <span className="ml-1">→</span>
</a>
</nav>

<section className="w-full pt-36 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 bg-white border-b border-neutral-100">
<div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center relative">
<div className="md:col-span-7 lg:col-span-8">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-semibold text-green-700 tracking-wide uppercase">4 available spaces</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl text-black font-medium tracking-tighter leading-[1.05] mb-8">
                    You Get In.<br/>You Arrive.
                </h1>
<div className="max-w-2xl">

<p className="text-xl md:text-2xl text-neutral-600 font-body leading-relaxed font-light mb-6">
                        You don't manage the route. You don't coordinate the vehicle. You don't handle maintenance, fuel, or traffic. Someone else owns that.
                    </p>

<p className="text-lg text-black font-medium font-body mb-8 md:mb-0">
                        That's how your digital operations should work.
                    </p>
</div>
</div>

<div className="md:col-span-5 lg:col-span-4 relative">
<div className="relative w-full aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-neutral-100 bg-neutral-100">

<img alt="Oscar Galindo" className="absolute inset-0 w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700" src="https://res.cloudinary.com/dhs9d8tou/image/upload/v1768967465/DSC07006_mh1pnc.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50"></div>
</div>
</div>
</div>
</section>

<section className="w-full py-20 px-6 md:px-12 bg-neutral-50 scroll-mt-20" id="reality">
<div className="max-w-7xl mx-auto">
<span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3 block">The Problem</span>
<h2 className="text-3xl md:text-4xl font-medium text-black mb-12 tracking-tight">The Reality Right Now</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 flex flex-col justify-between h-full hover:border-neutral-300 transition-colors duration-300">
<div className="mb-6">
<iconify-icon className="text-black" icon="solar:link-broken-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium mb-3">You became the glue.</h3>
<p className="text-neutral-500 font-body leading-relaxed text-sm">You're the one holding together the website, the social posts, the vendors, the CRM, the email system, and the video workflows. That wasn't the plan.</p>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 flex flex-col justify-between h-full hover:border-neutral-300 transition-colors duration-300">
<div className="mb-6">
<iconify-icon className="text-black" icon="solar:danger-triangle-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium mb-3">Every handoff creates risk.</h3>
<p className="text-neutral-500 font-body leading-relaxed text-sm">Every tool requires a decision. Every vendor requires management. When systems aren't unified, things break in the gaps between them.</p>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 flex flex-col justify-between h-full hover:border-neutral-300 transition-colors duration-300">
<div className="mb-6">
<iconify-icon className="text-black" icon="solar:clock-circle-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium mb-3">You wanted speed. You got system admin.</h3>
<p className="text-neutral-500 font-body leading-relaxed text-sm">You spend your time managing infrastructure instead of vision. You need reliability and speed, but you're getting maintenance tickets.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-24 md:py-32 px-6 md:px-12 bg-black text-white scroll-mt-20" id="ownership">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
<div>
<span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4 block">The Shift</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-12">
                    I take full ownership of your digital operations.
                </h2>
<div className="space-y-12">

<div className="flex gap-6">
<div className="shrink-0 mt-1">
<iconify-icon className="text-white" icon="solar:user-check-rounded-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">One Point of Accountability</h3>
<p className="text-neutral-400 font-body leading-relaxed text-base">
                                 One relationship. No coordination on your end. You keep vision and strategy; I handle everything between the idea and the result.
                            </p>
</div>
</div>

<div className="flex gap-6">
<div className="shrink-0 mt-1">
<iconify-icon className="text-white" icon="solar:settings-minimalistic-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Systems Run. Results Show Up.</h3>
<p className="text-neutral-400 font-body leading-relaxed text-base">
                                Things get done in the background. You don't see the how — you just see results showing up.
                            </p>
</div>
</div>
</div>
</div>

<div className="relative w-full flex flex-col items-center justify-center">

<div className="w-full max-w-sm bg-neutral-900 rounded-xl p-6 border border-neutral-800 text-center relative z-10">
<h4 className="text-lg font-medium text-white">Vision &amp; Strategy</h4>
<p className="text-neutral-500 text-sm mt-1">(You)</p>
</div>

<div className="h-12 w-px bg-neutral-700 my-2 relative">
<iconify-icon className="absolute -bottom-3 -left-2 text-neutral-500" icon="solar:arrow-down-linear" width="16"></iconify-icon>
</div>

<div className="w-full max-w-sm bg-white rounded-xl p-6 border border-white text-center relative z-20 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
<h4 className="text-lg font-medium text-black">Online Nexus Ownership</h4>
<div className="flex justify-center gap-1.5 mt-3 opacity-80">
<div className="w-2 h-2 bg-black rounded-sm"></div>
<div className="w-2 h-2 bg-black rounded-sm"></div>
<div className="w-2 h-2 bg-black rounded-sm"></div>
</div>
</div>

<div className="h-12 w-px bg-neutral-700 my-2 relative">
<iconify-icon className="absolute -bottom-3 -left-2 text-neutral-500" icon="solar:arrow-down-linear" width="16"></iconify-icon>
</div>

<div className="w-full max-w-sm bg-neutral-900 rounded-xl p-6 border border-neutral-800 text-center relative z-10">
<h4 className="text-lg font-medium text-white">Business Result</h4>
</div>
</div>
</div>
</section>

<section className="w-full py-24 px-6 md:px-12 bg-white" id="scope">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-black mb-12 tracking-tight">Off Your Plate</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 border border-neutral-200 rounded-xl hover:border-neutral-400 transition-all duration-300">
<iconify-icon className="text-black mb-5" icon="solar:server-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium mb-3">Infrastructure</h3>
<p className="text-neutral-600 font-body text-sm leading-relaxed">Website, hosting, DNS, and uptime. It just works without your involvement.</p>
</div>

<div className="p-8 border border-neutral-200 rounded-xl hover:border-neutral-400 transition-all duration-300">
<iconify-icon className="text-black mb-5" icon="solar:pen-new-square-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium mb-3">Content Operations</h3>
<p className="text-neutral-600 font-body text-sm leading-relaxed">Social, blogs, and publishing across platforms. Consistent cadence.</p>
</div>

<div className="p-8 border border-neutral-200 rounded-xl hover:border-neutral-400 transition-all duration-300">
<iconify-icon className="text-black mb-5" icon="solar:videocamera-record-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium mb-3">Video Production</h3>
<p className="text-neutral-600 font-body text-sm leading-relaxed">Full workflow: editing, formatting, and distribution across channels. Shipped.</p>
</div>

<div className="p-8 border border-neutral-200 rounded-xl hover:border-neutral-400 transition-all duration-300">
<iconify-icon className="text-black mb-5" icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium mb-3">CRM &amp; Systems</h3>
<p className="text-neutral-600 font-body text-sm leading-relaxed">Leads followed up, pipelines moving, data clean. Running.</p>
</div>

<div className="p-8 border border-neutral-200 rounded-xl hover:border-neutral-400 transition-all duration-300">
<iconify-icon className="text-black mb-5" icon="solar:case-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium mb-3">Vendor Management</h3>
<p className="text-neutral-600 font-body text-sm leading-relaxed">Technical decisions handled. No more "translator" role for you.</p>
</div>

<div className="p-8 border border-neutral-200 rounded-xl hover:border-neutral-400 transition-all duration-300">
<iconify-icon className="text-black mb-5" icon="solar:shield-check-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium mb-3">Risk &amp; Continuity</h3>
<p className="text-neutral-600 font-body text-sm leading-relaxed">Monitoring and continuity built in. The machine never stops.</p>
</div>
</div>
</div>
</section>

<section className="w-full py-16 px-6 md:px-12 bg-neutral-50 border-y border-neutral-100" id="clients">
<div className="max-w-6xl mx-auto text-center">
<span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8 block">Organizations that made the switch</span>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
<span className="text-xl md:text-2xl font-medium text-neutral-400 grayscale hover:grayscale-0 hover:text-black transition-all">Century 21</span>
<span className="text-xl md:text-2xl font-medium text-neutral-400 grayscale hover:grayscale-0 hover:text-black transition-all">UVA Health</span>
<span className="text-xl md:text-2xl font-medium text-neutral-400 grayscale hover:grayscale-0 hover:text-black transition-all">UrWay Health</span>
<span className="text-xl md:text-2xl font-medium text-neutral-400 grayscale hover:grayscale-0 hover:text-black transition-all">The Hype NYC</span>
<span className="text-xl md:text-2xl font-medium text-neutral-400 grayscale hover:grayscale-0 hover:text-black transition-all">Carice Anderson</span>
</div>
</div>
</section>

<section className="w-full py-20 px-6 md:px-12 bg-white border-b border-neutral-100">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-medium text-black mb-12 tracking-tight">What Clients Say</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="flex flex-col gap-4 p-6 rounded-xl bg-neutral-50 border border-neutral-100">
<iconify-icon className="text-black/20" icon="solar:quote-up-square-linear" width="24"></iconify-icon>
<p className="text-lg text-neutral-800 font-medium font-body leading-relaxed">
                        "I stopped thinking about my website six months ago. It just works."
                    </p>
<div className="mt-auto pt-4 border-t border-neutral-200/50">
<p className="text-sm font-semibold text-black">[Name]</p>
<p className="text-sm text-neutral-500">[Organization]</p>
</div>
</div>

<div className="flex flex-col gap-4 p-6 rounded-xl bg-neutral-50 border border-neutral-100">
<iconify-icon className="text-black/20" icon="solar:quote-up-square-linear" width="24"></iconify-icon>
<p className="text-lg text-neutral-800 font-medium font-body leading-relaxed">
                        "I used to spend hours coordinating vendors. Now I spend zero."
                    </p>
<div className="mt-auto pt-4 border-t border-neutral-200/50">
<p className="text-sm font-semibold text-black">[Name]</p>
<p className="text-sm text-neutral-500">[Organization]</p>
</div>
</div>

<div className="flex flex-col gap-4 p-6 rounded-xl bg-neutral-50 border border-neutral-100">
<iconify-icon className="text-black/20" icon="solar:quote-up-square-linear" width="24"></iconify-icon>
<p className="text-lg text-neutral-800 font-medium font-body leading-relaxed">
                        "Oscar took over and I got my time back. That's the testimonial."
                    </p>
<div className="mt-auto pt-4 border-t border-neutral-200/50">
<p className="text-sm font-semibold text-black">[Name]</p>
<p className="text-sm text-neutral-500">[Organization]</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-24 px-6 md:px-12 bg-neutral-50">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

<div className="bg-white p-10 md:p-12 rounded-2xl border border-neutral-200 shadow-sm flex flex-col h-full">
<span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6 block">Exclusivity</span>
<h3 className="text-3xl font-medium mb-6">Limited Capacity</h3>
<p className="text-neutral-600 font-body text-lg leading-relaxed mb-8">
                    I work with 8 to 10 clients at a time. No more. This ensures direct involvement with every organization I serve.
                </p>
<div className="mt-auto space-y-3">
<div className="flex items-center gap-3 text-neutral-500 font-body">
<iconify-icon className="text-neutral-400" icon="solar:close-circle-linear"></iconify-icon> No account managers.
                     </div>
<div className="flex items-center gap-3 text-neutral-500 font-body">
<iconify-icon className="text-neutral-400" icon="solar:close-circle-linear"></iconify-icon> No team handoffs.
                     </div>
<div className="flex items-center gap-3 text-neutral-500 font-body">
<iconify-icon className="text-neutral-400" icon="solar:close-circle-linear"></iconify-icon> No vendor layers.
                     </div>
</div>
</div>

<div className="bg-black p-10 md:p-12 rounded-2xl border border-neutral-800 shadow-xl flex flex-col h-full text-white">
<span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-6 block">Next Step</span>
<h3 className="text-3xl font-medium mb-6">Ready to stop driving?</h3>
<p className="text-neutral-400 font-body text-lg leading-relaxed mb-10">
                    No pitch. No pressure. Let's have a conversation about whether this fits your situation.
                </p>
<div className="mt-auto">
<a className="inline-flex w-full items-center justify-center px-6 py-4 bg-white text-black text-base font-medium rounded-lg hover:bg-neutral-200 transition-colors duration-200 group" href="https://calendly.com/onlinenexusmarketing/strategy-meeting" target="_blank">
                        Book a Call <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
</div>
</div>
</section>

<section className="w-full py-24 px-6 md:px-12 bg-white border-t border-neutral-100">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-medium text-black mb-12 tracking-tight">Common Questions</h2>
<div className="space-y-2">

<details className="group bg-white rounded-lg border border-neutral-200 overflow-hidden cursor-pointer transition-all hover:border-neutral-300">
<summary className="flex justify-between items-center p-6 font-medium text-lg text-black select-none">
<span>How involved do I need to be?</span>
<span className="text-neutral-400 group-open:rotate-180 transition-transform duration-300 flex items-center">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-600 font-body leading-relaxed">
                        Minimal. You set the direction, I handle execution. Most clients check in once a week or less. Some go months without thinking about their digital ops — that's the point.
                    </div>
</details>

<details className="group bg-white rounded-lg border border-neutral-200 overflow-hidden cursor-pointer transition-all hover:border-neutral-300">
<summary className="flex justify-between items-center p-6 font-medium text-lg text-black select-none">
<span>What if something breaks?</span>
<span className="text-neutral-400 group-open:rotate-180 transition-transform duration-300 flex items-center">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-600 font-body leading-relaxed">
                        I catch it before you do. You'll get a "handled" message, not a fire drill. Monitoring and continuity are built in.
                    </div>
</details>

<details className="group bg-white rounded-lg border border-neutral-200 overflow-hidden cursor-pointer transition-all hover:border-neutral-300">
<summary className="flex justify-between items-center p-6 font-medium text-lg text-black select-none">
<span>What does this cost?</span>
<span className="text-neutral-400 group-open:rotate-180 transition-transform duration-300 flex items-center">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-600 font-body leading-relaxed">
                        Flat monthly fee based on scope. No hourly billing, no surprise invoices. We agree on what's covered before we start.
                    </div>
</details>

<details className="group bg-white rounded-lg border border-neutral-200 overflow-hidden cursor-pointer transition-all hover:border-neutral-300">
<summary className="flex justify-between items-center p-6 font-medium text-lg text-black select-none">
<span>What's the commitment?</span>
<span className="text-neutral-400 group-open:rotate-180 transition-transform duration-300 flex items-center">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-600 font-body leading-relaxed">
                        90 days to start, then month-to-month. You can walk anytime — but you won't want to.
                    </div>
</details>

<details className="group bg-white rounded-lg border border-neutral-200 overflow-hidden cursor-pointer transition-all hover:border-neutral-300">
<summary className="flex justify-between items-center p-6 font-medium text-lg text-black select-none">
<span>Do you only work with nonprofits?</span>
<span className="text-neutral-400 group-open:rotate-180 transition-transform duration-300 flex items-center">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-600 font-body leading-relaxed">
                        No. I work with business owners, executives, and organizations who need digital operations handled — not managed. Industry doesn't matter. The need does.
                    </div>
</details>
</div>
</div>
</section>

<section className="w-full py-24 px-6 md:px-12 bg-neutral-50 border-t border-neutral-200 scroll-mt-20" id="about">
<div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-7">
<span className="inline-block py-1 px-3 rounded-full bg-white border border-neutral-200 text-xs font-semibold uppercase tracking-wider mb-6">
                    The Operator
                </span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-2 text-black">
                    Oscar Galindo
                </h2>
<h3 className="text-xl text-neutral-500 mb-8 font-medium">Founder, Online Nexus Marketing</h3>
<div className="space-y-6 max-w-2xl">
<p className="text-lg text-neutral-800 font-body leading-relaxed font-medium">
                        Experience includes enterprise digital systems, agency operations, and institutional infrastructure across businesses, nonprofits, and professional organizations.
                    </p>
<p className="text-lg text-neutral-600 font-body leading-relaxed">
                        Ownership requires singular accountability. It cannot live in a committee. It transfers to a person.
                    </p>
<div className="flex items-center gap-3 pt-4 text-black font-medium">
<iconify-icon icon="solar:chat-square-check-linear" width="24"></iconify-icon>
<span>When you reach out, I respond.</span>
</div>
</div>
</div>
<div className="md:col-span-5 relative">
<div className="relative w-full aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-neutral-100 bg-white">
<img alt="Oscar Galindo" className="absolute inset-0 w-full h-full object-cover" src="https://res.cloudinary.com/dhs9d8tou/image/upload/v1768967465/DSC07006_mh1pnc.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-30"></div>
</div>
</div>
</div>
</section>

<section className="w-full py-20 px-6 md:px-12 bg-white">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-2xl font-medium mb-8">Not for everyone. And that's the point.</h2>
<div className="bg-neutral-50 rounded-xl p-8 border border-neutral-100 shadow-sm text-left">
<ul className="space-y-6">
<li className="flex items-center gap-4 text-neutral-600 font-body">
<iconify-icon className="text-neutral-400 shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
                        Need it yesterday with zero context? Not a fit.
                    </li>
<li className="flex items-center gap-4 text-neutral-600 font-body">
<iconify-icon className="text-neutral-400 shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
                        Want to approve every font and button? Not a fit.
                    </li>
<li className="flex items-center gap-4 text-neutral-600 font-body">
<iconify-icon className="text-neutral-400 shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
                        Shopping for the cheapest option? Not a fit.
                    </li>
</ul>
<div className="mt-8 pt-8 border-t border-neutral-200 text-center font-medium text-black">
                    I work with people who want digital ops off their plate, not on a shorter leash.
                </div>
</div>
</div>
</section>

<footer className="w-full py-24 px-6 md:px-12 bg-black text-white scroll-mt-20">
<div className="max-w-4xl mx-auto flex flex-col items-center text-center">
<img alt="Online Nexus Marketing" className="h-10 w-auto mb-8 invert opacity-90" src="https://res.cloudinary.com/dhs9d8tou/image/upload/v1769829242/onmlogo_bhcbxa.png"/>
<p className="text-2xl text-neutral-400 mb-12 max-w-2xl mx-auto font-body font-light tracking-wide">
                Get in. Arrive.
            </p>
<div className="w-full pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-center items-center text-sm text-neutral-500">
<div>© 2025 Online Nexus Marketing. All rights reserved.</div>
</div>
</div>
</footer>

    </>
  );
}
