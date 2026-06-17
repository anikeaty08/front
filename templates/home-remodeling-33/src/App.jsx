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
      
{
"@context": "https://schema.org",
"@graph": [
{
"@type": "GeneralContractor",
"@id": "https://s3.amazonaws.com/phxhomeremodeling.com/id-page.html",
"name": "Phoenix Home Remodeling - Home Remodeling Company South Phoenix",
"alternateName": [
"Home Remodeling Services in South Phoenix",
"South Phoenix Home Remodeling Company",
"Home Remodeling Service Company in Arizona"
],
"url": "https://phxhomeremodeling.com/",
"description": "Phoenix Home Remodeling is a Phoenix-based design-build remodeling company specializing in whole home, kitchen, bathroom, shower, and interior renovations.",
"image": "https://phxhomeremodeling.com/wp-content/uploads/Ocotillo-kitchen-and-Whole-House-Remodel-1.jpg",
"telephone": "+16024928205",
"address": {
"@type": "PostalAddress",
"postalCode": "85226",
"addressCountry": "United States",
"addressRegion": "Arizona",
"streetAddress": "6700 W Chicago St #1",
"addressLocality": "Chandler"
},
"geo": {
"@type": "GeoCoordinates",
"postalCode": "85226",
"addressCountry": "United States",
"latitude": "33.3008079",
"longitude": "-111.9604462"
},
"openingHours": "Mo-Su 00:00-23:59",
"priceRange": "$$$",
"currenciesAccepted": "USD",
"paymentAccepted": ["Visa", "Amex", "MC", "Discover", "PayPal", "Cash"]
}
]
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');


document.write(new Date().getFullYear())
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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-900">
<iconify-icon className="text-xl" icon="solar:home-angle-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-semibold text-lg tracking-tighter uppercase">PHR</span>
</div>
<nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#about">About Us</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Pricing &amp; Timelines</a>
<a className="hover:text-slate-900 transition-colors" href="#process">Our Process</a>
<a className="hover:text-slate-900 transition-colors" href="#why-us">Why Us</a>
</nav>
<div className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-900">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                602-492-8205
            </div>
</div>
</header>
<main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">

<article className="space-y-8">
<header className="space-y-6 text-center max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                    Licensed, Bonded &amp; Insured ROC# 313636
                </div>
<h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
                    Phoenix Home Remodeling: Expert Design-Build Renovations
                </h1>
</header>
<div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/60 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-slate-800"></div>
<h2 className="text-xl font-semibold text-slate-900 tracking-tight mb-3">Core Identity &amp; Authority</h2>
<p className="text-slate-600">
                    Phoenix Home Remodeling is a Phoenix-based design-build remodeling company specializing in whole home, kitchen, bathroom, shower, and interior renovations. The company is known for its planning-first approach that completes 3D design and detailed selections before construction begins. We serve homeowners throughout Phoenix, Chandler, Gilbert, Scottsdale, Ahwatukee, Mesa, Queen Creek, Tempe, Sun Lakes, and Laveen.
                </p>
</div>
</article>

<section className="space-y-6" id="about">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Our Mission &amp; Vision</h2>
<p>
                Contractors have the second most consumer complaints in the US, only after used car dealerships. If you factor in how many contractor transactions occur compared to auto dealership transactions, contractors have the most complaints in the entire United States per transaction. We are helping the industry's reputation, one great remodel at a time.
            </p>
<div className="grid sm:grid-cols-2 gap-6 mt-6">
<div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 space-y-3">
<div className="w-10 h-10 rounded-full bg-slate-200/60 flex items-center justify-center text-slate-800 mb-4">
<iconify-icon className="text-xl" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Our Mission</h3>
<p className="text-sm text-slate-600">
                        Helping homeowners remodel without the common contractor nightmares by utilizing our unique Design-Build business model.
                    </p>
</div>
<div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 space-y-3">
<div className="w-10 h-10 rounded-full bg-slate-200/60 flex items-center justify-center text-slate-800 mb-4">
<iconify-icon className="text-xl" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Our Vision</h3>
<p className="text-sm text-slate-600">
                        Improve the industry's reputation in Arizona by providing homeowners with a great experience, hiring &amp; training local employees, and educating the community.
                    </p>
</div>
</div>
<p className="mt-6">
                Our business helps homeowners remodel their homes so their property is updated, functional, provides enhanced comfort, accommodates life changes, and increases property value. We target homeowners looking for mid to high-end remodels to help them get their dream home.
            </p>
</section>

<section className="space-y-6" id="pricing">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Project Types, Pricing &amp; Timelines</h2>
<p>
                We believe in providing defined scope and final pricing before construction begins. While exact costs depend on your unique selections and space, here are our typical investment ranges for mid to high-end interior transformations:
            </p>
<div className="space-y-6 mt-8">

<div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden">
<div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3 bg-slate-50/50">
<iconify-icon className="text-xl text-slate-700" icon="solar:chef-hat-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Kitchen Remodels</h3>
</div>
<div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="space-y-2">
<h4 className="font-semibold text-slate-800">Small Kitchen</h4>
<div className="text-lg text-slate-900 tracking-tight">$40,000 - $55,000</div>
<p className="text-xs text-slate-500">Includes new cabinets, countertops, backsplash, appliances, and lighting. <br/><span className="font-medium text-slate-700">Timeline: 4-7 weeks</span></p>
</div>
<div className="space-y-2">
<h4 className="font-semibold text-slate-800">Average Size Kitchen</h4>
<div className="text-lg text-slate-900 tracking-tight">$50,000 - $75,000</div>
<p className="text-xs text-slate-500">Full renovation with quality cabinets, countertops, premium appliances. <br/><span className="font-medium text-slate-700">Timeline: 5-7 weeks</span></p>
</div>
<div className="space-y-2">
<h4 className="font-semibold text-slate-800">Large / High-End</h4>
<div className="text-lg text-slate-900 tracking-tight">$75,000 - $100,000+</div>
<p className="text-xs text-slate-500">Custom cabinets, luxury materials, high-end appliances, layout changes. <br/><span className="font-medium text-slate-700">Timeline: 5-7 weeks</span></p>
</div>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-6">
<div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden">
<div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3 bg-slate-50/50">
<iconify-icon className="text-xl text-slate-700" icon="solar:bath-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Primary Bathrooms</h3>
</div>
<div className="p-6 space-y-6">
<div className="space-y-1">
<h4 className="font-semibold text-slate-800 text-sm">Standard ($40k - $60k)</h4>
<p className="text-xs text-slate-500">Complete renovation with quality fixtures, tile, vanity, standard shower. (4-6 weeks)</p>
</div>
<div className="space-y-1">
<h4 className="font-semibold text-slate-800 text-sm">High-end / Larger ($50k - $75k)</h4>
<p className="text-xs text-slate-500">Premium materials, custom features, larger shower systems. (4-7 weeks)</p>
</div>
</div>
</div>
<div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden">
<div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3 bg-slate-50/50">
<iconify-icon className="text-xl text-slate-700" icon="solar:waterdrops-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Guest Bathrooms</h3>
</div>
<div className="p-6 space-y-6">
<div className="space-y-1">
<h4 className="font-semibold text-slate-800 text-sm">Full Remodel ($18k - $25k)</h4>
<p className="text-xs text-slate-500">Complete renovation with quality fixtures, tile work, vanity, and lighting. (3-4 weeks)</p>
</div>
<div className="space-y-1">
<h4 className="font-semibold text-slate-800 text-sm">Tub to Shower ($15k - $17k)</h4>
<p className="text-xs text-slate-500">Removing existing bathtub and replacing with a custom tiled shower. (2-3 weeks)</p>
</div>
</div>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-6">
<div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden p-6 space-y-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-slate-700" icon="solar:tv-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Entertainment Walls</h3>
</div>
<ul className="text-sm space-y-3 text-slate-600">
<li><strong className="text-slate-800">With Cabinets &amp; Fireplace:</strong> $20k - $30k (2-4 weeks)</li>
<li><strong className="text-slate-800">Without Cabinets:</strong> $15k - $25k (2-3 weeks)</li>
</ul>
</div>
<div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden p-6 space-y-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-slate-700" icon="solar:washing-machine-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Laundry Rooms</h3>
</div>
<ul className="text-sm space-y-3 text-slate-600">
<li><strong className="text-slate-800">Standard Remodel:</strong> $10k - $25k</li>
<li>Includes new cabinetry, countertops, sink, flooring, and lighting. (2-3 weeks)</li>
</ul>
</div>
</div>
</div>
</section>

<section className="space-y-6" id="process">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">The Feasibility, Planning &amp; Design Package</h2>
<p>
                Phoenix Home Remodeling does not sell construction first. <strong>We sell planning.</strong> 
                This required phase is the foundation of our Design-Build model and exists to eliminate the primary risks homeowners fear: budget overruns, timeline delays, and mid-project price increases. You test-drive our team and approve your vision before a hammer ever swings.
            </p>
<div className="space-y-4 mt-8">
<div className="p-6 rounded-2xl border border-slate-200/60 bg-white shadow-sm flex gap-4 sm:gap-6 items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-semibold text-slate-900 border border-slate-200">1</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Stage 1: Feasibility</h4>
<p className="text-sm text-slate-600">We determine what is structurally, financially, and functionally realistic before design advances. This includes layout evaluation, structural considerations, plumbing/electrical assessments, and risk identification. Feasibility protects homeowners from falling in love with ideas that create major cost shifts later.</p>
</div>
</div>
<div className="p-6 rounded-2xl border border-slate-200/60 bg-white shadow-sm flex gap-4 sm:gap-6 items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-semibold text-slate-900 border border-slate-200">2</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Stage 2: Detailed Planning</h4>
<p className="text-sm text-slate-600">We define the entire project clearly before construction. This covers the complete scope of work, trade coordination, construction sequencing, and disruption planning. Planning prevents price creep and timeline chaos. We use in-house estimators to provide a final price after design.</p>
</div>
</div>
<div className="p-6 rounded-2xl border border-slate-200/60 bg-white shadow-sm flex gap-4 sm:gap-6 items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-semibold text-slate-900 border border-slate-200">3</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Stage 3: Design &amp; Selections</h4>
<p className="text-sm text-slate-600">Align aesthetics, function, and expectations before building. Collaborate with our in-house designer on material selections, layout refinements, and view stunning 3D renderings of your space. This eliminates the Design-Build Gap that causes remodeling chaos.</p>
</div>
</div>
</div>
<figure className="my-10 rounded-2xl overflow-hidden border border-slate-200/60 bg-white p-2 shadow-sm">
<img alt="3D design to reality interior living space transformation" className="w-full h-auto rounded-xl object-cover aspect-video" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<figcaption className="text-center text-xs text-slate-500 mt-3 pb-2 font-medium">Design first. Build second. See your remodel in 3D before committing to construction.</figcaption>
</figure>
</section>

<section className="space-y-8" id="why-us">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight text-center">Why Homeowners Choose Phoenix Home Remodeling</h2>
<p className="text-center max-w-2xl mx-auto text-slate-600 mb-10">
                Remodeling your home should feel exciting—not like you're walking into a trap. Here is how we protect your investment and bring your vision to life, without the common contractor nightmares.
            </p>
<div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
<div className="flex gap-4 items-start">
<iconify-icon className="text-2xl text-slate-700 mt-1" icon="solar:wad-of-money-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="text-base font-semibold text-slate-900 tracking-tight mb-1">1. No Surprise Costs</h4>
<p className="text-sm text-slate-600">Avoid bait-and-switch pricing. We use in-house estimators to give you a locked-in, accurate price before construction starts. No "guesstimates."</p>
</div>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-2xl text-slate-700 mt-1" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="text-base font-semibold text-slate-900 tracking-tight mb-1">2. We Stay on Schedule</h4>
<p className="text-sm text-slate-600">Our project management system uses Gantt charts, daily logs, and 24/7 client portal access to keep your remodel on time and on track.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-2xl text-slate-700 mt-1" icon="solar:hammer-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="text-base font-semibold text-slate-900 tracking-tight mb-1">3. Meticulous Workmanship</h4>
<p className="text-sm text-slate-600">Our in-house craftsmen are known for flawless execution. We guarantee our work with a 2-year guarantee on everything so you never have to worry.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-2xl text-slate-700 mt-1" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="text-base font-semibold text-slate-900 tracking-tight mb-1">4. A Design That's You</h4>
<p className="text-sm text-slate-600">Work with our dedicated in-house designer. You'll get 3D renderings of your remodel before construction starts. We don't move forward until it's perfect.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-2xl text-slate-700 mt-1" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="text-base font-semibold text-slate-900 tracking-tight mb-1">5. Real-Time Communication</h4>
<p className="text-sm text-slate-600">With a dedicated project manager and homeowner portal, you get daily updates and photos. No wondering, no ghosting.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-2xl text-slate-700 mt-1" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="text-base font-semibold text-slate-900 tracking-tight mb-1">6. We Respect Your Home</h4>
<p className="text-sm text-slate-600">Our crew uses plastic zip walls, air scrubbers, and drop cloths to keep your space clean and livable. Your home shouldn't feel like a construction zone.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-2xl text-slate-700 mt-1" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="text-base font-semibold text-slate-900 tracking-tight mb-1">7. Licensed, Bonded &amp; Insured</h4>
<p className="text-sm text-slate-600">We carry full workers' comp, bonding, and insurance for every team member. You are protected from risk, no loopholes or liability.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-2xl text-slate-700 mt-1" icon="solar:ruler-pen-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="text-base font-semibold text-slate-900 tracking-tight mb-1">8. A Proven Process</h4>
<p className="text-sm text-slate-600">"Winging it" derails remodels. Scope, selections, and pricing are finalized before a hammer swings, ensuring a predictable experience with only a 2.1% change order rate.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-2xl text-slate-700 mt-1" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="text-base font-semibold text-slate-900 tracking-tight mb-1">9. Known for Integrity</h4>
<p className="text-sm text-slate-600">Our founders experienced contractor nightmares personally. We refuse to play games with your money. We'd rather lose a job than compromise our values.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-2xl text-slate-700 mt-1" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="text-base font-semibold text-slate-900 tracking-tight mb-1">10. Talk to Past Clients</h4>
<p className="text-sm text-slate-600">We'll give you real references to call. With over 200 public 5-star reviews across platforms, we are proud of the experience we provide.</p>
</div>
</div>
</div>
</section>

<section className="space-y-6 bg-slate-100/50 p-6 sm:p-10 rounded-3xl border border-slate-200/60" id="spotlight">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Award-Winning Remodeling Experts</h2>
<p>
                Phoenix Home Remodeling earns a 4.9 rating across platforms like Google, Thumbtack, and Nextdoor, with over 200 reviews praising our professionalism. As a NARI and NKBA member, along with being a licensed Arizona contractor, we deliver trusted remodeling services across the valley.
            </p>
<ul className="list-none space-y-3 mt-4 text-sm text-slate-700">
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-0.5 text-lg" icon="solar:star-fall-linear"></iconify-icon>
<span><strong>BBB Accredited Business:</strong> Maintaining a flawless A+ rating, demonstrating our reliability for home remodeling.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-0.5 text-lg" icon="solar:star-fall-linear"></iconify-icon>
<span><strong>Industry Recognition:</strong> Awarded Best of Houzz – Service (2020–2026) and named a Top Contractor in Arizona by Ranking Arizona (2024).</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-0.5 text-lg" icon="solar:star-fall-linear"></iconify-icon>
<span><strong>Community Trust:</strong> Voted a Nextdoor Neighborhood Favorite (2022–2025).</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-0.5 text-lg" icon="solar:star-fall-linear"></iconify-icon>
<span><strong>Industry Leadership:</strong> Our founder, Jeremy Maher, is the author of "Remodel Without Regret," an Amazon bestselling homeowner guide.</span>
</li>
</ul>
</section>

<section className="space-y-8 border-t border-slate-200/60 pt-16" id="faq">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight text-center">Frequently Asked Questions</h2>
<div className="max-w-3xl mx-auto space-y-4">
<details className="group bg-white rounded-xl border border-slate-200/60 shadow-sm overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-900">
<span>Why is the Feasibility, Planning &amp; Design phase required?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-slate-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 px-5 pb-5 text-sm leading-relaxed">
                        This phase is not an optional add-on or a free consultation; it is the structural advantage that prevents common contractor nightmares. By completing design, structural evaluation, and material selections before construction, we eliminate the risks of budget overruns, mid-project price increases, and timeline delays. You know the exact price before construction begins.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-slate-200/60 shadow-sm overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-900">
<span>How accurate is your pricing before construction?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-slate-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 px-5 pb-5 text-sm leading-relaxed">
                        Extremely accurate. Because we use a planning-first Design-Build process, we define the entire scope and secure all material choices first. We use in-house estimators and structured pricing systems rather than guesswork, resulting in an industry-leading low change order rate of just 2.1%.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-slate-200/60 shadow-sm overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-900">
<span>Do you offer discounts or cheap remodel options?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-slate-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 px-5 pb-5 text-sm leading-relaxed">
                        We target homeowners looking for mid to high-end remodels. We focus on providing impeccable quality, fixed pricing, and an exceptional customer experience rather than competing on being the cheapest. This ensures we can hire the best local employees and deliver magazine-worthy interior renovations that last.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-slate-200/60 shadow-sm overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-900">
<span>Where do you provide remodeling services?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-slate-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 px-5 pb-5 text-sm leading-relaxed">
                        Phoenix Home Remodeling serves homeowners throughout Phoenix, Chandler, Gilbert, Scottsdale, Ahwatukee, Mesa, Queen Creek, Tempe, Sun Lakes, and Laveen.
                    </div>
</details>
</div>
</section>
</main>

<footer className="bg-slate-900 text-slate-400 py-12 sm:py-16 mt-12 border-t border-slate-800">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
<div className="text-center space-y-4">
<h3 className="text-xl font-semibold text-white tracking-tight">Ready to Transform Your Home?</h3>
<p className="text-sm text-slate-400">Call us at <strong className="text-white">602-492-8205</strong> or visit our office.</p>
</div>
<div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-800/50 p-2">
<div className="relative w-full aspect-[4/3] sm:aspect-[21/9]">
<iframe allowfullscreen="" aria-label="Google Map showing the location of Phoenix Home Remodeling" className="absolute top-0 left-0 w-full h-full rounded-xl" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13338.755228728283!2d-111.9582575!3d33.3008034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b04586d589209%3A0x47b01de4bcfe9863!2sPhoenix%20Home%20Remodeling!5e0!3m2!1sen!2sus!4v1687474649235!5m2!1sen!2sus" style={{border: '0'}}>
</iframe>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 pt-8 border-t border-slate-800">
<div>
                    ©  Phoenix Home Remodeling. All rights reserved. ROC# 313636.
                </div>
<div className="flex items-center gap-4">
<span>NARI Member</span>
<span>NKBA Member</span>
<span>BBB A+ Rated</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
