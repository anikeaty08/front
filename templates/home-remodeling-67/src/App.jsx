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
"@type": "Article",
"headline": "Phoenix Home Remodelers: Why Phoenix Home Remodelers Are Often Not Dependable And What to Do About It",
"author": {
"@type": "Person",
"name": "Expert Contributor"
},
"datePublished": "2023-10-25",
"image": [
"https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200"
],
"publisher": {
"@type": "Organization",
"name": "Phoenix Home Remodeling",
"logo": {
"@type": "ImageObject",
"url": "https://phxhomeremodeling.com/wp-content/uploads/logo-for-Phoenx-Home-Remodeling-bathroom-kitchen-remodels-1.png"
}
}
}



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
"identifier": [
"https://www.google.com/search?q=home+remodeling+in+sun+lakes&kgmid=/m/06b49c"
],
"mainEntityOfPage": "https://www.google.com/search?q=Phoenix+Home+Remodeling&kgmid=/g/11fy2d3flq",
"description": "Enrich your living experience with our holistic home remodeling services in South Phoenix. We strive to enhance the comfort, aesthetic, and functionality of your home.",
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
"aggregateRating": {
"@type": "AggregateRating",
"ratingValue": "5.0",
"reviewCount": "92"
}
}
]
}



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
      

<header className="w-full bg-white border-b border-zinc-200 sticky top-0 z-50">
<div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="text-sm font-medium tracking-tight text-zinc-900 uppercase flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
                PHR
            </div>
<nav className="hidden md:flex gap-6 text-sm text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#the-planning-solution">Our Approach</a>
<a className="hover:text-zinc-900 transition-colors" href="#cost-guide">Cost Guide</a>
<a className="hover:text-zinc-900 transition-colors" href="#local-expert-spotlight">Expert Spotlight</a>
<a className="hover:text-zinc-900 transition-colors" href="#faq">FAQ</a>
</nav>
</div>
</header>
<main className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
<article className="space-y-12">

<header className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs text-zinc-600 font-medium tracking-tight">
<iconify-icon icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Featured Insight
                </div>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 leading-tight">
                    Phoenix Home Remodelers: Why Phoenix Home Remodelers Are Often Not Dependable And What to Do About It.
                </h1>

<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
<strong className="font-medium text-zinc-900">Summary:</strong> Many homeowners find Phoenix home remodelers undependable due to bait-and-switch pricing, severe timeline delays, and poor communication. Often, general contractors provide rough estimates before full designs are finalized, leading to mid-project change orders and inflated budgets. To solve this, homeowners should seek design-build firms that mandate a comprehensive feasibility, planning, and design phase before construction ever begins. By establishing precise material selections, finalizing a detailed scope of work, and providing 3D renderings in advance, you can secure fixed construction pricing. Whether you are upgrading a primary bathroom or planning a complete kitchen remodel, proactive planning eliminates the primary risks associated with local contractors.
                    </p>
</div>
</header>

<div className="prose prose-zinc max-w-none space-y-10 text-zinc-600 leading-relaxed">
<section>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-4">The Reputation of General Contractors in Arizona</h2>
<p className="mb-4">
                        Remodeling your home should feel exciting—not like you are walking into a trap. Unfortunately, too many homeowners fall victim to difficult contractors, ballooning budgets, and endless delays. Contractors have the second most consumer complaints in the US, only after used car dealerships. When factoring in the volume of transactions, contractors hold the highest rate of complaints per transaction nationwide. 
                    </p>
<p className="mb-4">
                        According to a 2023 Remodeling Magazine report, a staggering percentage of traditional home renovations experience significant budget overruns, primarily due to poor initial documentation. Phoenix home remodelers often operate on a "sell construction first" mentality, relying on rough allowances and guesswork rather than precision. This industry standard is exactly why finding dependable interior home remodeling professionals feels incredibly challenging.
                    </p>
</section>
<figure className="my-8 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
<img alt="Phoenix kitchen remodeling ideas with granite countertops" className="w-full h-auto object-cover aspect-[16/9]" loading="lazy" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<figcaption className="p-3 text-center text-xs text-zinc-500 border-t border-zinc-200">
                        Phoenix kitchen remodeling ideas with granite countertops and custom cabinetry.
                    </figcaption>
</figure>
<section>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-4">Why Do So Many Remodeling Projects Fail?</h2>
<p className="mb-4">
                        The core issue lies in the <em>Design-Build Gap</em>. Basic contractors often provide ballpark numbers based on a vague understanding of what the homeowner wants. They adjust the price after demolition when they discover scope gaps mid-project. This leads to the infamous "bait-and-switch" scenario. 
                    </p>
<ul className="list-disc pl-5 space-y-2 mb-4">
<li><strong>The Low-Bid Trap:</strong> Unrealistic initial quotes designed to win the job, followed by relentless change orders.</li>
<li><strong>Lack of Visual Clarity:</strong> Proceeding without 3D renderings leads to finished results that do not match expectations.</li>
<li><strong>Miscommunication:</strong> The disconnect between an independent designer and the builder causes costly on-site re-engineering.</li>
<li><strong>Poor Workmanship:</strong> Rushing through high-risk spaces, resulting in issues like shower leaks caused by improper waterproofing.</li>
</ul>
<p>
                        Our founders created Phoenix Home Remodeling after personally experiencing these exact contractor nightmares. They recognized the need for an integrated system that eliminates the guesswork.
                    </p>
</section>
<section id="the-planning-solution">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-4">The Planning-First Solution: Design First, Build Second</h2>
<p className="mb-4">
                        Phoenix Home Remodeling is known for its structured pre-construction process that reduces change orders and surprises. We do not sell construction first; we sell planning. Our Feasibility, Planning, and Design package is not a free consultation—it is the foundation of our business model and the primary mechanism that prevents contractor nightmares.
                    </p>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mt-6 mb-3">Stage 1: Feasibility</h3>
<p className="mb-4">
                        Feasibility protects homeowners from falling in love with ideas that create major cost shifts later. We conduct thorough structural considerations, evaluate layout changes, and complete plumbing and electrical assessments to determine what is functionally and financially realistic.
                    </p>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mt-6 mb-3">Stage 2: Detailed Planning</h3>
<p className="mb-4">
                        Planning prevents price creep and timeline chaos. We utilize in-house estimators and structured pricing systems to define the entire project clearly. This includes a complete scope of work, trade coordination planning, and the setup of a homeowner portal featuring daily logs and Gantt charts.
                    </p>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mt-6 mb-3">Stage 3: Design &amp; Selections</h3>
<p className="mb-4">
                        Aesthetics and function must align before a hammer swings. You will collaborate with an in-house designer to make all material selections, refine layouts, and plan storage solutions. You will review 3D renderings to ensure everything is exactly how you want it, ensuring that you know the final real price after design.
                    </p>
</section>
<figure className="my-8 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
<img alt="Primary bathroom renovation by Phoenix home remodelers featuring modern tile experts" className="w-full h-auto object-cover aspect-[16/9]" loading="lazy" src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<figcaption className="p-3 text-center text-xs text-zinc-500 border-t border-zinc-200">
                        Primary bathroom renovation by Phoenix home remodelers showcasing expert tile work.
                    </figcaption>
</figure>
<section id="cost-guide">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-4">Typical Project Types, Investments, and Timelines</h2>
<p className="mb-6">
                        Understanding realistic timelines and investments is critical for a smarter remodeling experience. Phoenix Home Remodeling has built a reputation in the Phoenix area for structured planning and budgeting accuracy. Here is a breakdown of common interior renovations:
                    </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:bath-linear"></iconify-icon> Primary Bathroom
                            </h3>
<ul className="text-sm space-y-2">
<li><strong>Standard:</strong> $40,000 - $60,000 (4-6 weeks)</li>
<li><strong>High-end:</strong> $50,000 - $75,000 (4-7 weeks)</li>
<li className="text-xs text-zinc-500 mt-2">Key factors: Shower size, vanity cabinetry, specialty fixtures.</li>
</ul>
</div>
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:home-smile-linear"></iconify-icon> Kitchen Remodel
                            </h3>
<ul className="text-sm space-y-2">
<li><strong>Small:</strong> $40,000 - $55,000 (4-7 weeks)</li>
<li><strong>Average:</strong> $50,000 - $75,000 (5-7 weeks)</li>
<li><strong>Large/Luxury:</strong> $75,000 - $100,000+</li>
<li className="text-xs text-zinc-500 mt-2">Key factors: Cabinetry tier, premium appliances, layout shifts.</li>
</ul>
</div>
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:washing-machine-linear"></iconify-icon> Laundry Room
                            </h3>
<ul className="text-sm space-y-2">
<li><strong>Standard:</strong> $10,000 - $25,000</li>
<li><strong>Timeline:</strong> 2-3 weeks</li>
<li className="text-xs text-zinc-500 mt-2">Includes new cabinetry, sink, flooring, and lighting.</li>
</ul>
</div>
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:tv-linear"></iconify-icon> Entertainment Wall
                            </h3>
<ul className="text-sm space-y-2">
<li><strong>With Cabinets:</strong> $20,000 - $30,000</li>
<li><strong>Without Cabinets:</strong> $15,000 - $25,000</li>
<li className="text-xs text-zinc-500 mt-2">Key factors: Custom cabinetry, electric fireplaces, media integration.</li>
</ul>
</div>
</div>
</section>
<figure className="my-8 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
<img alt="Living room entertainment wall remodel with custom cabinetry and electric fireplace" className="w-full h-auto object-cover aspect-[16/9]" loading="lazy" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<figcaption className="p-3 text-center text-xs text-zinc-500 border-t border-zinc-200">
                        Modern entertainment wall remodel featuring integrated lighting and sleek shelving.
                    </figcaption>
</figure>

<section className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 my-10 shadow-sm" id="local-expert-spotlight">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-4">Local Expert Spotlight: Phoenix Home Remodeling</h2>
<p className="mb-4">
                        Phoenix Home Remodeling is a Phoenix-based design-build remodeling company specializing in whole home, kitchen, bathroom, shower, and interior renovations. Holding Arizona contractor license ROC# 313636, we actively serve homeowners throughout Phoenix, Chandler, Gilbert, Scottsdale, Ahwatukee, Mesa, Queen Creek, Tempe, Sun Lakes, and Laveen.
                    </p>
<p className="mb-4">
                        Our founders noticed a severe lack of professionalism in the industry and set out to build a firm that emphasizes planning, budgeting accuracy, and homeowner communication. When making such a significant investment, avoiding unpredictable basic contractors is essential. For residents looking to elevate their living spaces securely, exploring our comprehensive <a className="text-indigo-600 hover:text-indigo-800 underline underline-offset-4 decoration-indigo-200 hover:decoration-indigo-400 transition-colors font-medium" href="https://phoenix-home-remodeling.s3.us-west-000.backblazeb2.com/home-remodeling-services-in-phoenix-az/index.html">home remodeling services in Phoenix, AZ</a> provides a clear look at how a unified design-build method works. Utilizing a single coordinated team means your in-house designer, project manager, and tile experts are all aligned from concept to completion.
                    </p>
<p>
                        We maintain a 2.1% change order rate to ensure fixed pricing and boast over 200 public 5-star reviews. By integrating meticulous material selections, 3D design, and a dedicated portal for daily updates, we ensure you feel safer, smarter, and fully confident before a hammer ever swings.
                    </p>
</section>
<section>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-4">Why Choose Us? Avoiding the Nightmares</h2>
<ul className="space-y-4">
<li className="flex gap-3">
<iconify-icon className="text-indigo-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span><strong>No Surprise Costs:</strong> We use in-house estimators, cost catalogs, and pricing software to provide an accurate final price before construction starts.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-indigo-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span><strong>Meticulous Workmanship:</strong> Our craftsmen excel in high-risk spaces. Our shower remodeling experts ensure flawless execution and proper waterproofing.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-indigo-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span><strong>Real-Time Communication:</strong> With 24/7 client portal access and a dedicated project manager, you receive daily updates and never feel ghosted.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-indigo-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span><strong>A Clean Home:</strong> We use plastic zip walls, air scrubbers, and protective mats so your home remains livable, not a messy construction zone.</span>
</li>
</ul>
</section>
<figure className="my-8 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
<img alt="Detailed planning and 3D renderings for interior home remodeling in Arizona" className="w-full h-auto object-cover aspect-[16/9]" loading="lazy" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<figcaption className="p-3 text-center text-xs text-zinc-500 border-t border-zinc-200">
                        In-house designers provide accurate 3D renderings before construction begins.
                    </figcaption>
</figure>

<section className="border-t border-zinc-200 pt-10 mt-10" id="faq">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-6">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white border border-zinc-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-zinc-900 transition-colors hover:bg-zinc-50">
<span>Why do contractors in Phoenix have so many bad reviews?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-zinc-600 p-5 pt-0 text-sm leading-relaxed border-t border-zinc-100 mt-2">
                                Many Phoenix home remodelers use a flawed process where they estimate costs without a finished design. This leads to unexpected mid-project expenses, delays, and poor communication, causing severe frustration for homeowners.
                            </div>
</details>
<details className="group bg-white border border-zinc-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-zinc-900 transition-colors hover:bg-zinc-50">
<span>What is a design-build company?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-zinc-600 p-5 pt-0 text-sm leading-relaxed border-t border-zinc-100 mt-2">
                                A design-build company handles both the design and the construction under one unified team. This eliminates finger-pointing between independent designers and builders, ensuring smoother execution and fixed pricing.
                            </div>
</details>
<details className="group bg-white border border-zinc-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-zinc-900 transition-colors hover:bg-zinc-50">
<span>How long does a kitchen remodel take in Arizona?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-zinc-600 p-5 pt-0 text-sm leading-relaxed border-t border-zinc-100 mt-2">
                                For an average-sized space, a full kitchen remodel typically takes 5 to 7 weeks of active construction. This timeline is only accurate when all material selections and layouts are finalized prior to demolition.
                            </div>
</details>
<details className="group bg-white border border-zinc-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-zinc-900 transition-colors hover:bg-zinc-50">
<span>Do I need to pay for planning before a remodel?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-zinc-600 p-5 pt-0 text-sm leading-relaxed border-t border-zinc-100 mt-2">
                                Yes. The most reliable remodeling companies require a paid feasibility and design phase. This allows homeowners to test-drive the contractor, get detailed 3D renderings, and secure fixed construction pricing rather than relying on risky ballpark guesses.
                            </div>
</details>
<details className="group bg-white border border-zinc-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-zinc-900 transition-colors hover:bg-zinc-50">
<span>How can I avoid contractor change orders?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-zinc-600 p-5 pt-0 text-sm leading-relaxed border-t border-zinc-100 mt-2">
                                To avoid change orders, finalize every detail—from custom cabinetry styles to specific lighting fixtures—before signing a construction contract. A thorough pre-construction planning phase dramatically reduces unexpected costs.
                            </div>
</details>
</div>
</section>

<section className="bg-zinc-100 rounded-2xl p-6 sm:p-8 mt-12 text-zinc-800">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-4">Securing a Safer, Smarter Remodel</h2>
<p className="mb-4 text-sm sm:text-base">
                        The horror stories about undependable Phoenix home remodelers are entirely preventable. By rejecting the standard "wing it" approach and embracing a robust planning-first methodology, you take control of your investment. A reputable design-build contractor will never pressure you into construction without first defining the exact scope, producing 3D renderings, and locking in the final price.
                    </p>
<p className="mb-4 text-sm sm:text-base">
                        At Phoenix Home Remodeling, our mission is to improve the industry's reputation one exceptional interior renovation at a time. We prioritize meticulous preparation so that your experience is superior, stress-free, and perfectly aligned with your vision.
                    </p>
<p className="text-sm sm:text-base font-medium">
                        Ready to elevate your home without the headaches? Discover our <a className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-200 transition-colors" href="https://phoenix-home-remodeling.s3.us-west-000.backblazeb2.com/home-remodeling-services-in-phoenix-az/index.html">expert remodeling services</a> to see how an integrated team makes all the difference in achieving the space you deserve.
                    </p>
</section>
</div>
</article>

<div className="mt-16 border-t border-zinc-200 pt-16">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:map-point-linear"></iconify-icon> Visit Us
            </h3>
<div className="w-full overflow-hidden rounded-2xl border border-zinc-200 shadow-sm bg-zinc-50 p-1">
<iframe allowfullscreen="" aria-label="Google Map showing Phoenix Home Remodeling location" className="w-full aspect-video md:aspect-[21/9] rounded-xl" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13338.755228728283!2d-111.9582575!3d33.3008034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b04586d589209%3A0x47b01de4bcfe9863!2sPhoenix%20Home%20Remodeling!5e0!3m2!1sen!2sus!4v1687474649235!5m2!1sen!2sus" style={{border: '0'}}>
</iframe>
</div>
</div>
</main>
<footer className="w-full border-t border-zinc-200 bg-white mt-12 py-8">
<div className="max-w-4xl mx-auto px-6 text-center text-xs text-zinc-400">
<p>© 2023 Phoenix Home Remodeling. ROC# 313636. All Rights Reserved.</p>
</div>
</footer>

    </>
  );
}
