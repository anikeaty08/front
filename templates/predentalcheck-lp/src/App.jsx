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
canvas: '#FAFAFA',
surface: '#FFFFFF',
obsidian: '#111111',
subtle: '#737373',
border: '#E5E5E5',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const billContainer = document.getElementById('bill-container');
            const row2 = document.getElementById('row-2');
            const row3 = document.getElementById('row-3');
            const totalElement = document.getElementById('bill-total');
            const originalTotalElement = document.getElementById('original-total');
            const reviewBadge = document.getElementById('review-badge');
            
            let hasAnimated = false;

            // Simple number animator
            function animateValue(obj, start, end, duration) {
                let startTimestamp = null;
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    // ease out quad
                    const easeOut = progress * (2 - progress);
                    const current = Math.floor(easeOut * (end - start) + start);
                    
                    // Format as currency
                    obj.innerHTML = '$' + current.toLocaleString('en-US');
                    
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    } else {
                        obj.innerHTML = '$' + end.toLocaleString('en-US');
                        obj.classList.add('text-emerald-600');
                    }
                };
                window.requestAnimationFrame(step);
            }

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasAnimated) {
                        // Wait a moment after scroll into view to start
                        setTimeout(() => {
                            hasAnimated = true;
                            billContainer.classList.add('is-scanning');
                            reviewBadge.classList.remove('opacity-0');
                            
                            // Show all icons, hide dots
                            document.querySelectorAll('.status-dot').forEach(el => el.classList.add('hidden'));
                            document.querySelectorAll('.status-icon').forEach(el => {
                                el.classList.remove('hidden');
                                // slight delay for animation
                                setTimeout(() => el.classList.add('show'), 50);
                            });

                            // Apply styles to flagged rows
                            row2.classList.add('is-reviewed');
                            row3.classList.add('is-reviewed', 'is-flagged');

                            // Show original total with strikethrough
                            originalTotalElement.classList.remove('hidden');

                            // Animate total down (Original 4380 -> 2800)
                            animateValue(totalElement, 4380, 2800, 1500);

                        }, 500);
                    }
                });
            }, { threshold: 0.6 });

            if (billContainer) {
                observer.observe(billContainer);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-canvas/80 backdrop-blur-md border-b border-border transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-obsidian rounded-sm flex items-center justify-center text-surface">
<iconify-icon className="text-sm" icon="solar:health-linear"></iconify-icon>
</div>
<span className="font-semibold text-sm tracking-tight text-obsidian">PreDentalCheck</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#how-it-works">How it works</a>
<a className="text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#pricing">Pricing</a>
<a className="text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-4">
<button className="text-xs font-medium bg-obsidian text-surface px-5 py-2 rounded shadow-sm hover:bg-gray-800 transition-colors">
                    Upload Case
                </button>
</div>
</div>
</header>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 md:px-12 overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8 relative z-10">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-obsidian">
                    Got Quoted Thousands for Dental Work? <br/>
<span className="text-subtle">Get a Clarity Check Before You Pay.</span>
</h1>
<p className="text-base text-subtle leading-relaxed max-w-lg">
                    Upload your treatment plan, estimate, denial, or notes. We review what looks urgent, what may need a second look, and what questions to ask before you commit.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-obsidian text-surface text-sm font-medium px-8 py-3.5 rounded shadow-sm hover:bg-gray-800 transition-all flex justify-center items-center gap-2">
                        Get My Decision Memo — $149
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="bg-surface text-obsidian border border-border text-sm font-medium px-8 py-3.5 rounded hover:bg-gray-50 transition-all text-center">
                        See What’s Included
                    </button>
</div>
<div className="pt-6 border-t border-border/60 flex flex-wrap gap-x-6 gap-y-2">
<div className="flex items-center gap-2 text-xs text-subtle">
<iconify-icon className="text-obsidian" icon="solar:check-circle-linear"></iconify-icon>
                        Plain-English review
                    </div>
<div className="flex items-center gap-2 text-xs text-subtle">
<iconify-icon className="text-obsidian" icon="solar:clock-circle-linear"></iconify-icon>
                        24–48 hour turnaround
                    </div>
<div className="flex items-center gap-2 text-xs text-subtle">
<iconify-icon className="text-obsidian" icon="solar:target-linear"></iconify-icon>
                        Built for real treatment decisions
                    </div>
</div>
</div>

<div className="relative w-full max-w-md mx-auto lg:ml-auto">
<div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white blur-2xl -z-10 rounded-full"></div>
<div className="bg-surface border border-border rounded-xl shadow-lg overflow-hidden relative" id="bill-container">

<div className="p-6 border-b border-border bg-gray-50/50 flex justify-between items-center">
<div>
<div className="text-xs font-semibold text-obsidian uppercase tracking-widest mb-1">Treatment Estimate</div>
<div className="text-[10px] text-subtle font-mono">ID: TX-992-B</div>
</div>
<div className="opacity-0 transition-opacity duration-500 bg-obsidian text-surface text-[10px] px-2 py-1 rounded font-medium flex items-center gap-1" id="review-badge">
<iconify-icon icon="solar:minimalistic-magnifer-linear"></iconify-icon>
                            Reviewed
                        </div>
</div>

<div className="p-6 space-y-5">

<div className="bill-row flex justify-between items-start gap-4">
<div className="flex gap-3">
<div className="mt-0.5 w-4 h-4 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-border rounded-full status-dot"></div>
<iconify-icon className="status-icon text-emerald-600 hidden absolute" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-obsidian">Core Buildup &amp; Crown (Tooth 14)</div>
<div className="text-xs text-subtle mt-0.5">Structural compromise indicated.</div>
</div>
</div>
<div className="text-sm font-medium text-obsidian price-text shrink-0">$1,850</div>
</div>

<div className="bill-row flex justify-between items-start gap-4" id="row-2">
<div className="flex gap-3">
<div className="mt-0.5 w-4 h-4 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-border rounded-full status-dot"></div>
<iconify-icon className="status-icon text-amber-500 hidden absolute" icon="solar:question-circle-bold"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-obsidian item-title">Localized Antibiotic Delivery x4</div>
<div className="text-xs text-subtle mt-0.5">Often not covered. Verify pocket depths.</div>
</div>
</div>
<div className="text-sm font-medium text-obsidian price-text shrink-0">$380</div>
</div>

<div className="bill-row flex justify-between items-start gap-4" id="row-3">
<div className="flex gap-3">
<div className="mt-0.5 w-4 h-4 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-border rounded-full status-dot"></div>
<iconify-icon className="status-icon text-red-500 hidden absolute" icon="solar:close-circle-bold"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-obsidian item-title">Preventative Resin Restorations x6</div>
<div className="text-xs text-subtle mt-0.5">Watch/monitor may be appropriate.</div>
</div>
</div>
<div className="text-sm font-medium text-obsidian price-text shrink-0">$1,200</div>
</div>

<div className="bill-row flex justify-between items-start gap-4">
<div className="flex gap-3">
<div className="mt-0.5 w-4 h-4 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-border rounded-full status-dot"></div>
<iconify-icon className="status-icon text-emerald-600 hidden absolute" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-obsidian">Deep Cleaning (Scaling/Root Planing)</div>
<div className="text-xs text-subtle mt-0.5">Bone loss visible on X-rays.</div>
</div>
</div>
<div className="text-sm font-medium text-obsidian price-text shrink-0">$950</div>
</div>
</div>

<div className="bg-canvas border-t border-border p-6 flex justify-between items-center">
<div className="text-sm font-medium text-subtle">Total Estimate</div>
<div className="flex items-center gap-3">
<div className="text-sm text-subtle line-through hidden" id="original-total">$4,380</div>
<div className="text-2xl font-semibold tracking-tight text-obsidian" id="bill-total">$4,380</div>
</div>
</div>

<div className="scanning-bar"></div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-border bg-surface px-6 md:px-12">
<div className="max-w-4xl mx-auto text-center space-y-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-obsidian leading-snug max-w-2xl mx-auto">
                When dental treatment feels expensive, rushed, or unclear, most people have no framework.
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
<div className="flex items-start gap-4 p-4 rounded-lg bg-canvas border border-border">
<iconify-icon className="text-xl text-subtle shrink-0 mt-0.5" icon="solar:danger-triangle-linear"></iconify-icon>
<p className="text-sm text-obsidian leading-relaxed">You were told you need major work and do not know what is truly urgent vs. elective.</p>
</div>
<div className="flex items-start gap-4 p-4 rounded-lg bg-canvas border border-border">
<iconify-icon className="text-xl text-subtle shrink-0 mt-0.5" icon="solar:calculator-linear"></iconify-icon>
<p className="text-sm text-obsidian leading-relaxed">The estimate is large and you want clear validation before saying yes to the expense.</p>
</div>
<div className="flex items-start gap-4 p-4 rounded-lg bg-canvas border border-border">
<iconify-icon className="text-xl text-subtle shrink-0 mt-0.5" icon="solar:map-arrow-square-linear"></iconify-icon>
<p className="text-sm text-obsidian leading-relaxed">You are not sure what seems justified, what could be staged over time, or worth another look.</p>
</div>
<div className="flex items-start gap-4 p-4 rounded-lg bg-canvas border border-border">
<iconify-icon className="text-xl text-subtle shrink-0 mt-0.5" icon="solar:chat-round-call-linear"></iconify-icon>
<p className="text-sm text-obsidian leading-relaxed">You want to be armed with better questions before committing money or starting treatment.</p>
</div>
</div>
<div className="inline-block mt-8 px-6 py-3 border border-border rounded bg-white shadow-sm">
<p className="text-sm font-medium text-obsidian">PreDentalCheck gives you a structured second look so you can move forward with more confidence.</p>
</div>
</div>
</section>

<section className="py-24 bg-canvas border-t border-border px-6 md:px-12">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-obsidian mb-12 text-center">
                What’s inside your Decision Memo
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-surface p-8 rounded-xl border border-border shadow-sm">
<div className="w-10 h-10 rounded border border-border bg-canvas flex items-center justify-center mb-6">
<iconify-icon className="text-lg text-obsidian" icon="solar:siren-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-obsidian mb-2">Urgency rating</h3>
<p className="text-sm text-subtle leading-relaxed">A breakdown of what may need immediate attention versus what can be staged or monitored later.</p>
</div>

<div className="bg-surface p-8 rounded-xl border border-border shadow-sm">
<div className="w-10 h-10 rounded border border-border bg-canvas flex items-center justify-center mb-6">
<iconify-icon className="text-lg text-obsidian" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-obsidian mb-2">Treatment confidence</h3>
<p className="text-sm text-subtle leading-relaxed">An assessment of what parts of the plan seem straightforward versus areas that appear uncertain.</p>
</div>

<div className="bg-surface p-8 rounded-xl border border-border shadow-sm">
<div className="w-10 h-10 rounded border border-border bg-canvas flex items-center justify-center mb-6">
<iconify-icon className="text-lg text-obsidian" icon="solar:flag-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-obsidian mb-2">Clarity flags</h3>
<p className="text-sm text-subtle leading-relaxed">Identification of items that look incomplete, confusing, or are worth verifying with your provider.</p>
</div>

<div className="bg-surface p-8 rounded-xl border border-border shadow-sm">
<div className="w-10 h-10 rounded border border-border bg-canvas flex items-center justify-center mb-6">
<iconify-icon className="text-lg text-obsidian" icon="solar:umbrella-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-obsidian mb-2">Coverage angle</h3>
<p className="text-sm text-subtle leading-relaxed">Insights on where insurance limitations, predetermination needs, or appeal opportunities may exist.</p>
</div>

<div className="bg-surface p-8 rounded-xl border border-border shadow-sm">
<div className="w-10 h-10 rounded border border-border bg-canvas flex items-center justify-center mb-6">
<iconify-icon className="text-lg text-obsidian" icon="solar:clipboard-list-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-obsidian mb-2">Questions to ask</h3>
<p className="text-sm text-subtle leading-relaxed">A tailored list of exact, professional questions to ask your provider to get the clarity you need.</p>
</div>

<div className="bg-surface p-8 rounded-xl border border-border shadow-sm">
<div className="w-10 h-10 rounded border border-border bg-canvas flex items-center justify-center mb-6">
<iconify-icon className="text-lg text-obsidian" icon="solar:signpost-2-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-obsidian mb-2">Recommended path</h3>
<p className="text-sm text-subtle leading-relaxed">Actionable guidance on whether to proceed, verify details, stage treatment, appeal, or seek another opinion.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface border-t border-border px-6 md:px-12" id="how-it-works">
<div className="max-w-5xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-obsidian mb-16 text-center">
                How it works
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-px bg-border z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-sm font-mono text-obsidian mb-6 shadow-sm group-hover:border-obsidian transition-colors">
                        1
                    </div>
<h3 className="text-base font-semibold text-obsidian mb-2">Upload your case</h3>
<p className="text-sm text-subtle leading-relaxed max-w-xs">Securely upload your treatment plan, estimate, denial letter, notes, X-rays, or screenshots.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-sm font-mono text-obsidian mb-6 shadow-sm group-hover:border-obsidian transition-colors">
                        2
                    </div>
<h3 className="text-base font-semibold text-obsidian mb-2">We review it</h3>
<p className="text-sm text-subtle leading-relaxed max-w-xs">Our team analyzes the documents for urgency, logical progression, clarity, and next-step options.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-obsidian border border-obsidian flex items-center justify-center text-sm font-mono text-surface mb-6 shadow-md">
                        3
                    </div>
<h3 className="text-base font-semibold text-obsidian mb-2">Get your memo</h3>
<p className="text-sm text-subtle leading-relaxed max-w-xs">Receive a comprehensive, written decision memo outlining your framework in 24–48 hours.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-canvas border-t border-border px-6 md:px-12" id="pricing">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-obsidian mb-4">
                    Simple pricing
                </h2>
<p className="text-base text-subtle">Transparent flat rates for objective clarity.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

<div className="pricing-card relative bg-surface border border-obsidian/20 rounded-xl p-8 flex flex-col shadow-md md:-mt-4 md:mb-4 z-10 ring-1 ring-obsidian/5">
<div className="absolute top-0 inset-x-0 h-1 bg-obsidian rounded-t-xl"></div>
<div className="flex justify-between items-start mb-6">
<h3 className="text-lg font-semibold text-obsidian">Decision Memo</h3>
<span className="text-[10px] font-medium uppercase tracking-wider bg-canvas border border-border px-2 py-1 rounded text-obsidian">Most Popular</span>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-obsidian">$149</span>
</div>
<p className="text-sm text-subtle mb-8 flex-1">
                        One treatment case reviewed with a written, structured second-look memo.
                    </p>
<ul className="space-y-4 mb-8 text-sm text-subtle">
<li className="flex items-start gap-3"><iconify-icon className="text-obsidian mt-0.5" icon="solar:check-read-linear"></iconify-icon> Review up to 5 documents</li>
<li className="flex items-start gap-3"><iconify-icon className="text-obsidian mt-0.5" icon="solar:check-read-linear"></iconify-icon> 24-48 hour delivery</li>
<li className="flex items-start gap-3"><iconify-icon className="text-obsidian mt-0.5" icon="solar:check-read-linear"></iconify-icon> 6-point analysis framework</li>
</ul>
<button className="w-full py-3 rounded bg-obsidian text-surface text-sm font-medium hover:bg-gray-800 transition-colors">
                        Buy Now
                    </button>
</div>

<div className="pricing-card bg-surface border border-border rounded-xl p-8 flex flex-col">
<h3 className="text-lg font-semibold text-obsidian mb-6">Memo + Guided Call</h3>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-obsidian">$349</span>
</div>
<p className="text-sm text-subtle mb-8 flex-1">
                        The complete written memo plus a 30-minute guided review call for deeper questions.
                    </p>
<ul className="space-y-4 mb-8 text-sm text-subtle">
<li className="flex items-start gap-3"><iconify-icon className="text-obsidian mt-0.5" icon="solar:check-read-linear"></iconify-icon> Everything in Decision Memo</li>
<li className="flex items-start gap-3"><iconify-icon className="text-obsidian mt-0.5" icon="solar:check-read-linear"></iconify-icon> 1-on-1 expert walkthrough</li>
<li className="flex items-start gap-3"><iconify-icon className="text-obsidian mt-0.5" icon="solar:check-read-linear"></iconify-icon> Live Q&amp;A and scenario planning</li>
</ul>
<button className="w-full py-3 rounded bg-surface border border-border text-obsidian text-sm font-medium hover:bg-gray-50 hover:border-obsidian/30 transition-colors">
                        Upgrade
                    </button>
</div>

<div className="pricing-card bg-surface border border-border rounded-xl p-8 flex flex-col">
<h3 className="text-lg font-semibold text-obsidian mb-6">Complex Case</h3>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-obsidian">$995</span>
</div>
<p className="text-sm text-subtle mb-8 flex-1">
                        For multi-phase, multi-provider, denial-heavy, or implant-heavy full-mouth cases.
                    </p>
<ul className="space-y-4 mb-8 text-sm text-subtle">
<li className="flex items-start gap-3"><iconify-icon className="text-obsidian mt-0.5" icon="solar:check-read-linear"></iconify-icon> Extensive document review</li>
<li className="flex items-start gap-3"><iconify-icon className="text-obsidian mt-0.5" icon="solar:check-read-linear"></iconify-icon> Provider cross-referencing</li>
<li className="flex items-start gap-3"><iconify-icon className="text-obsidian mt-0.5" icon="solar:check-read-linear"></iconify-icon> Staging and sequencing analysis</li>
</ul>
<button className="w-full py-3 rounded bg-surface border border-border text-obsidian text-sm font-medium hover:bg-gray-50 hover:border-obsidian/30 transition-colors">
                        Contact Us
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-border bg-surface px-6 md:px-12">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-obsidian mb-10">
                Built for patients and families facing big treatment decisions
            </h2>
<div className="flex flex-wrap justify-center gap-3">
<span className="px-4 py-2 bg-canvas border border-border rounded-full text-sm text-obsidian font-medium">Implants</span>
<span className="px-4 py-2 bg-canvas border border-border rounded-full text-sm text-obsidian font-medium">Periodontal treatment</span>
<span className="px-4 py-2 bg-canvas border border-border rounded-full text-sm text-obsidian font-medium">Oral surgery</span>
<span className="px-4 py-2 bg-canvas border border-border rounded-full text-sm text-obsidian font-medium">Crowns &amp; larger restorative plans</span>
<span className="px-4 py-2 bg-canvas border border-border rounded-full text-sm text-obsidian font-medium">Denied or partially denied cases</span>
<span className="px-4 py-2 bg-canvas border border-border rounded-full text-sm text-obsidian font-medium">Confusing, expensive, or rushed plans</span>
</div>
</div>
</section>

<section className="py-24 bg-canvas border-t border-border px-6 md:px-12">
<div className="max-w-3xl mx-auto text-center space-y-8">
<h2 className="text-2xl font-semibold tracking-tight text-obsidian">
                This is not about fear. It’s about clarity.
            </h2>
<div className="w-12 h-px bg-border mx-auto"></div>
<p className="text-base text-subtle leading-relaxed">
                PreDentalCheck is designed to help you understand a treatment decision before you commit. It does not diagnose disease, replace an exam, or provide emergency care. It helps you ask better questions, understand the logic of a plan, and move forward more confidently.
            </p>
</div>
</section>

<section className="py-24 bg-surface border-t border-border px-6 md:px-12" id="faq">
<div className="max-w-3xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-4">
<h2 className="text-2xl font-semibold tracking-tight text-obsidian">Common questions</h2>
<a className="text-sm font-medium text-obsidian border-b border-obsidian pb-0.5 hover:text-subtle hover:border-subtle transition-colors" href="#">Read Full FAQ</a>
</div>
<div className="space-y-4">
<div className="p-5 bg-canvas border border-border rounded flex justify-between items-center cursor-pointer hover:border-obsidian/30 transition-colors">
<span className="text-sm font-medium text-obsidian">Is this a diagnosis?</span>
<iconify-icon className="text-subtle" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="p-5 bg-canvas border border-border rounded flex justify-between items-center cursor-pointer hover:border-obsidian/30 transition-colors">
<span className="text-sm font-medium text-obsidian">What do I need to upload?</span>
<iconify-icon className="text-subtle" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="p-5 bg-canvas border border-border rounded flex justify-between items-center cursor-pointer hover:border-obsidian/30 transition-colors">
<span className="text-sm font-medium text-obsidian">How fast will I get my memo?</span>
<iconify-icon className="text-subtle" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="p-5 bg-canvas border border-border rounded flex justify-between items-center cursor-pointer hover:border-obsidian/30 transition-colors">
<span className="text-sm font-medium text-obsidian">Can you review denied cases too?</span>
<iconify-icon className="text-subtle" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-32 bg-obsidian text-surface px-6 md:px-12 text-center">
<div className="max-w-2xl mx-auto space-y-8 relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Before you spend thousands, get a second look.
            </h2>
<div className="pt-4">
<button className="bg-surface text-obsidian text-sm font-semibold px-10 py-4 rounded shadow-lg hover:bg-gray-100 hover:scale-[1.02] transition-all active:scale-95">
                    Upload My Case
                </button>
</div>
<p className="text-sm text-white/50 pt-2 font-medium tracking-wide">
                Fast. Structured. Plain-English.
            </p>
</div>
</section>

<footer className="py-12 bg-surface border-t border-border px-6 md:px-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-border rounded-sm flex items-center justify-center text-obsidian">
<iconify-icon className="text-xs" icon="solar:health-linear"></iconify-icon>
</div>
<span className="font-semibold text-sm tracking-tight text-obsidian">PreDentalCheck</span>
</div>
<div className="text-xs text-subtle flex gap-6">
<a className="hover:text-obsidian" href="#">Terms</a>
<a className="hover:text-obsidian" href="#">Privacy</a>
<a className="hover:text-obsidian" href="#">Contact</a>
</div>
<div className="text-xs text-subtle">
                © 2024 PreDentalCheck. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
