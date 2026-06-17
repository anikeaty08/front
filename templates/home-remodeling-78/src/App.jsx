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
"headline": "Phoenix Home Remodeling on Telegraph: Telegraph short article on Phx Home Remodeling",
"image": [
"https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&w=1200&q=80"
],
"datePublished": "2023-10-25T08:00:00+08:00",
"dateModified": "2023-10-25T09:20:00+08:00",
"author": [{
"@type": "Person",
"name": "Expert Contributor",
"url": "https://phxhomeremodeling.com"
}]
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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
<div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
<div className="font-medium tracking-tighter text-xl text-zinc-900 uppercase">
                PHR
            </div>
<nav className="hidden md:flex space-x-8 text-sm font-normal">
<a className="hover:text-zinc-900 transition-colors" href="#approach">Our Approach</a>
<a className="hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a className="hover:text-zinc-900 transition-colors" href="#planning">Planning</a>
<a className="hover:text-zinc-900 transition-colors" href="#faq">FAQ</a>
</nav>
<a className="text-xs font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors" href="https://phxhomeremodeling.com">
                Visit Site
            </a>
</div>
</header>
<main className="max-w-3xl mx-auto px-6 py-20 sm:py-32">
<article className="space-y-16">

<section className="space-y-6">
<h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-zinc-900 leading-tight">
                    Phoenix Home Remodeling on Telegraph: Telegraph short article on Phx Home Remodeling
                </h1>
<div className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-sm">
<p className="text-base leading-relaxed text-zinc-700">
                        When researching a <strong className="font-medium text-zinc-900">Phoenix Home Remodeling on Telegraph</strong> project, homeowners often ask how to achieve a high-end interior transformation without the notorious contractor nightmares. The key lies in utilizing a rigorous design-build approach that emphasizes exhaustive pre-construction planning, meticulous spatial planning, and exact material selections before any demolition begins. By finalizing 3D designs, securing fixed pricing, and selecting premium countertop materials and energy-efficient appliances upfront, homeowners can entirely bypass budget overruns and timeline delays. This guide breaks down the true cost, timelines, and strategic advantages of prioritizing planning over immediate construction, ensuring a seamless journey toward your ideal living space while significantly increasing your property value.
                    </p>
</div>
</section>

<figure className="my-12">
<img alt="Phoenix Home Remodeling on Telegraph featuring modern quartz countertops and spatial planning" className="w-full rounded-2xl object-cover h-96 shadow-sm border border-zinc-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<figcaption className="text-xs text-zinc-500 mt-4 text-center font-normal">Expert spatial planning and high-end materials create functional, elegant kitchen environments.</figcaption>
</figure>

<section className="space-y-6" id="approach">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">The Design-Build Advantage in Arizona</h2>
<p className="text-base leading-relaxed">
                    Phoenix Home Remodeling is a Phoenix-based design-build remodeling company specializing in whole home, kitchen, bathroom, shower, and interior renovations. The company uses a planning-first process that completes feasibility, material selections, and 3D design before construction begins. Fixed construction pricing is provided only after full planning and design are finalized to reduce surprises and change orders.
                </p>
<p className="text-base leading-relaxed">
                    We serve homeowners throughout Phoenix, Chandler, Gilbert, Scottsdale, Ahwatukee, Mesa, Queen Creek, Tempe, Sun Lakes, and Laveen. PHR is known for helping homeowners avoid common contractor mistakes through detailed pre-construction planning. By integrating in-house design and construction under one coordinated team, we ensure structural integrity and flawless execution. Contractors have the second most consumer complaints in the US, only after used car dealerships. We are on a mission to improve the industry’s reputation in Arizona by providing homeowners with an exceptional experience, one great remodel at a time.
                </p>
</section>

<section className="space-y-6" id="services">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Comprehensive Kitchen Transformations</h2>
<p className="text-base leading-relaxed">
                    The kitchen is the heart of the home, and its renovation requires a delicate balance of luxury aesthetics and high-performance functionality. At Phoenix Home Remodeling, our approach encompasses everything from layout optimizations to selecting the finest countertop materials available on the market. Depending on the scope, homeowners can explore various tiers of investment. 
                </p>
<ul className="list-none space-y-4 my-6">
<li className="flex items-start">
<iconify-icon className="text-zinc-400 mt-1 mr-3 text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base leading-relaxed"><strong>Small Kitchens ($40,000-$55,000):</strong> A targeted approach that typically includes new standard cabinets, modern quartz countertops, stylish backsplash installations, energy-efficient appliances, and upgraded lighting. The timeline for this scale is generally 4-7 weeks.</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-zinc-400 mt-1 mr-3 text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base leading-relaxed"><strong>Average Size Kitchens ($50,000-$75,000):</strong> This involves a full renovation with premium cabinetry options, intricate spatial planning to maximize workflow, high-end countertop materials, and premium appliance integrations. Expect a timeline of 5-7 weeks.</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-zinc-400 mt-1 mr-3 text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base leading-relaxed"><strong>Large or High-End Kitchens ($75,000-$100,000+):</strong> Tailored for the luxury market, this tier introduces custom cabinetry, sophisticated layout changes, professional-grade energy-efficient appliances, and advanced smart home integration. The timeline remains a highly efficient 5-7 weeks due to our rigorous pre-planning.</span>
</li>
</ul>
<p className="text-base leading-relaxed">
                    A significant factor in any kitchen project is the cabinetry. We refuse to compromise on quality, bypassing temporary fixes like basic cabinet refacing in favor of robust, lasting installations that dramatically increase property value. According to a 2023 Remodeling Magazine report, interior renovations focused on high-end kitchen upgrades and superior indoor air quality systems can yield substantial return on investment (ROI) when executed flawlessly.
                </p>
</section>

<figure className="my-12">
<img alt="Luxury Phoenix Home Remodeling on Telegraph featuring custom vanity cabinetry and high-end materials" className="w-full rounded-2xl object-cover h-96 shadow-sm border border-zinc-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<figcaption className="text-xs text-zinc-500 mt-4 text-center font-normal">A pristine primary bathroom transformation utilizing high-end materials and custom vanity cabinetry.</figcaption>
</figure>

<section className="space-y-6">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Luxury Bathroom and Shower Upgrades</h2>
<p className="text-base leading-relaxed">
                    Bathrooms demand strict attention to structural integrity, precise plumbing, and moisture management. We specialize in transforming outdated spaces into personal sanctuaries using high-end materials and water-saving fixtures that align with modern sustainability standards and local building guidelines. Our Arizona license, ROC# 313636, underscores our commitment to compliant, top-tier craftsmanship.
                </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-3">Primary Bathrooms</h3>
<p className="text-sm leading-relaxed text-zinc-600 mb-4">
                            Ranging from $40,000 to $75,000, these comprehensive renovations feature custom vanity cabinetry, expanded shower systems with frameless glass, premium tile work, and upgraded lighting. Timeline: 4-7 weeks.
                        </p>
</div>
<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-3">Guest Bathrooms</h3>
<p className="text-sm leading-relaxed text-zinc-600 mb-4">
                            Full remodels typically range from $18,000 to $25,000, ensuring your guests experience optimal comfort. Bathtub-to-shower conversions offer a rapid functional upgrade for $15,000 to $17,000. Timeline: 2-4 weeks.
                        </p>
</div>
</div>
<p className="text-base leading-relaxed">
                    Shower size, layout modifications, and specialty fixtures heavily influence the final investment. By utilizing our detailed 3D renderings, you visualize exactly how spatial planning and material choices interact before the first tile is ever removed.
                </p>
</section>

<section className="space-y-6 p-8 bg-zinc-100 rounded-3xl border border-zinc-200 my-12">
<h3 className="text-xl font-medium tracking-tight text-zinc-900">Expanding Your Renovation Knowledge</h3>
<p className="text-base leading-relaxed">
                    Homeowners embarking on a renovation journey often seek comprehensive resources to guide their decisions safely. Gathering insights from trusted industry publications can illuminate the path toward a successful, stress-free project. For a deeper dive into expert strategies and inspiring transformations, we recommend you <a className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 transition-colors" href="https://telegra.ph/Phoenix-Home-Remodeling-01-22">explore this Phoenix Home Remodeling on Telegraph</a> piece, which details advanced methods for achieving magazine-worthy results while avoiding common industry pitfalls. Engaging with detailed literature ensures you remain confident and informed throughout every stage of your home improvement journey.
                </p>
</section>

<section className="space-y-6">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Living Room and Specialty Upgrades</h2>
<p className="text-base leading-relaxed">
                    Modernizing interior spaces goes beyond kitchens and bathrooms. Entertainment walls and living room remodels redefine the aesthetic anchor of your home. A custom entertainment wall with bespoke cabinetry, media integration, and an electric fireplace generally requires an investment of $20,000 to $30,000, completing in 2-4 weeks. For a minimalist approach without cabinets, emphasizing sleek wall finishing and smart home integration, costs range from $15,000 to $25,000. 
                </p>
<p className="text-base leading-relaxed">
                    Similarly, upgrading a standard laundry room enhances daily utility. An investment of $10,000 to $25,000 yields new cabinetry, resilient countertops, advanced flooring, and optimal lighting—radically improving interior home performance in just 2-3 weeks.
                </p>
</section>

<section className="space-y-6" id="planning">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">The Feasibility, Planning, and Design Phase</h2>
<p className="text-base leading-relaxed">
                    At Phoenix Home Remodeling, we do not sell construction first; we sell precise planning. This structured phase exists to eliminate the primary risks homeowners fear most: budget overruns, timeline delays, poor workmanship, and misaligned expectations. By test-driving our services, you experience a process designed to make you feel safer, smarter, and confident.
                </p>
<div className="space-y-8 mt-8">
<div className="flex flex-col sm:flex-row gap-4">
<div className="sm:w-1/4">
<h3 className="text-sm font-medium uppercase tracking-widest text-zinc-900 border-b border-zinc-200 pb-2">Stage 1</h3>
</div>
<div className="sm:w-3/4">
<h4 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Feasibility Evaluation</h4>
<p className="text-base leading-relaxed">
                                We determine what is structurally, financially, and functionally realistic. This includes thorough layout evaluation, plumbing and electrical assessments, and risk identification to ensure compliance with local building guidelines. This stage protects you from falling in love with conceptual ideas that could create major financial shifts later.
                            </p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<div className="sm:w-1/4">
<h3 className="text-sm font-medium uppercase tracking-widest text-zinc-900 border-b border-zinc-200 pb-2">Stage 2</h3>
</div>
<div className="sm:w-3/4">
<h4 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Detailed Pre-Construction Planning</h4>
<p className="text-base leading-relaxed">
                                We define the entire project explicitly. We map out a complete scope of work, coordinate trade sequences, and establish disruption mitigation protocols. A recent Houzz State of the Industry study highlights that 72% of homeowners prioritize finding a contractor who finalizes exact scope details over simply selecting the lowest bid. This meticulous organization prevents timeline chaos.
                            </p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<div className="sm:w-1/4">
<h3 className="text-sm font-medium uppercase tracking-widest text-zinc-900 border-b border-zinc-200 pb-2">Stage 3</h3>
</div>
<div className="sm:w-3/4">
<h4 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Design &amp; Final Selections</h4>
<p className="text-base leading-relaxed">
                                You collaborate directly with our in-house designer to align aesthetics and function. From high-end materials to spatial planning, you review detailed 3D renderings and approve the final real price after design—all before a single hammer swings. This eliminates the notorious design-build gap that causes industry-wide frustration.
                            </p>
</div>
</div>
</div>
</section>

<figure className="my-12">
<img alt="Detailed 3D spatial planning for a Phoenix Home Remodeling on Telegraph renovation" className="w-full rounded-2xl object-cover h-96 shadow-sm border border-zinc-200" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<figcaption className="text-xs text-zinc-500 mt-4 text-center font-normal">Our rigorous planning phase ensures your vision is perfectly translated into 3D design before construction begins.</figcaption>
</figure>

<section className="space-y-6">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Avoiding the Contractor Nightmares</h2>
<p className="text-base leading-relaxed">
                    Remodeling your home should feel exciting, not like walking into a financial trap. We have systematically dismantled the flaws of standard contracting to offer a superior, predictable experience.
                </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-6">
<div>
<h3 className="text-base font-medium text-zinc-900 mb-2 flex items-center">
<iconify-icon className="mr-2 text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                            Never Hit with Surprise Costs
                        </h3>
<p className="text-sm leading-relaxed text-zinc-600">
                            We utilize in-house estimators and advanced pricing software to lock in an accurate price before construction. No bait-and-switch tactics, just a final, planned price.
                        </p>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 mb-2 flex items-center">
<iconify-icon className="mr-2 text-xl" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
                            Staying On Schedule
                        </h3>
<p className="text-sm leading-relaxed text-zinc-600">
                            Our project management uses Gantt charts and daily logs. You have 24/7 client portal access so you always know the status of your remodel.
                        </p>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 mb-2 flex items-center">
<iconify-icon className="mr-2 text-xl" icon="solar:ruler-pen-linear" strokeWidth="1.5"></iconify-icon>
                            Meticulous Workmanship
                        </h3>
<p className="text-sm leading-relaxed text-zinc-600">
                            Our in-house craftsmen guarantee their work with a 2-year guarantee. We ensure structural integrity and flawless execution, particularly in high-risk areas like showers.
                        </p>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 mb-2 flex items-center">
<iconify-icon className="mr-2 text-xl" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
                            Respect for Your Home
                        </h3>
<p className="text-sm leading-relaxed text-zinc-600">
                            We deploy plastic zip walls, high-efficiency air scrubbers, and protective mats. Your environment remains clean, preserving indoor air quality throughout the project.
                        </p>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 mb-2 flex items-center">
<iconify-icon className="mr-2 text-xl" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
                            Licensed and Insured
                        </h3>
<p className="text-sm leading-relaxed text-zinc-600">
                            Operating under ROC# 313636, we carry full workers' comp, bonding, and liability insurance. You are completely protected from any onsite risk.
                        </p>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 mb-2 flex items-center">
<iconify-icon className="mr-2 text-xl" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
                            Real-Time Communication
                        </h3>
<p className="text-sm leading-relaxed text-zinc-600">
                            With a dedicated project manager, you receive daily photographic updates and instant clarity. We eliminate the anxiety of being left in the dark.
                        </p>
</div>
</div>
</section>

<section className="space-y-8 pt-12 border-t border-zinc-200" id="faq">
<div className="text-center max-w-2xl mx-auto mb-10">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">Frequently Asked Questions</h2>
<p className="text-base text-zinc-600">Direct answers to common voice search queries regarding high-end interior renovations.</p>
</div>
<div className="space-y-6">
<div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">How much does a full kitchen remodel cost in Phoenix?</h3>
<p className="text-sm leading-relaxed text-zinc-600">
                            A standard kitchen renovation ranges from $40,000 to $55,000, while average to high-end projects typically cost between $50,000 and $100,000+. Variables such as custom cabinetry, quartz countertops, and smart home integration significantly impact the final investment.
                        </p>
</div>
<div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">What is a design-build remodeling company?</h3>
<p className="text-sm leading-relaxed text-zinc-600">
                            A design-build firm integrates both the interior design and construction phases under one unified team. This eliminates miscommunication between independent designers and general contractors, ensuring that spatial planning and structural integrity are perfectly aligned before building begins.
                        </p>
</div>
<div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">How long does a typical bathroom remodel take?</h3>
<p className="text-sm leading-relaxed text-zinc-600">
                            A primary bathroom remodel generally takes 4 to 7 weeks to complete. Smaller projects, such as a guest bathroom update or a tub-to-shower conversion, can be finished efficiently in 2 to 4 weeks, depending on material availability and the complexity of plumbing modifications.
                        </p>
</div>
<div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Do you offer fixed pricing for interior renovations?</h3>
<p className="text-sm leading-relaxed text-zinc-600">
                            Yes. By completing an exhaustive Feasibility, Planning, and Design phase, we provide a final, fixed price before any construction begins. We do not use rough allowances or mid-project price adjustments, resulting in an exceptionally low 2.1% change order rate.
                        </p>
</div>
<div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">What is included in the feasibility and planning phase?</h3>
<p className="text-sm leading-relaxed text-zinc-600">
                            This required pre-construction phase involves evaluating layout structure, making all material selections, confirming budget alignment, and creating detailed 3D renderings. It acts as a crucial risk-reduction mechanism to protect your ROI and ensure your expectations are visually met beforehand.
                        </p>
</div>
</div>
</section>

<section className="space-y-6 pt-12 border-t border-zinc-200">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">A Strategic Path to Your Dream Home</h2>
<p className="text-base leading-relaxed">
                    Elevating your living space requires more than just skilled labor; it demands a strategic, design-first philosophy that protects your emotional and financial investments. By insisting on comprehensive planning, utilizing high-end materials, and prioritizing transparent, daily communication, we have engineered a system that reliably delivers breathtaking results. From the initial spatial planning of your luxury kitchen to the final installation of water-saving fixtures in your primary suite, every detail is orchestrated with precision. Data from the National Kitchen &amp; Bath Association (NKBA) consistently indicates that meticulous planning paired with premium finishes offers the highest long-term property value retention. 
                </p>
<p className="text-base leading-relaxed">
                    You deserve an environment that perfectly mirrors your lifestyle without enduring the stress historically associated with construction. To further empower your decision-making and discover the nuanced benefits of our proven methodologies, take a moment to <a className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 transition-colors" href="https://telegra.ph/Phoenix-Home-Remodeling-01-22">check out this comprehensive overview</a>. Embrace a smarter, safer way to renovate, and let’s begin crafting the beautiful, functional interior you have always envisioned.
                </p>
</section>
</article>
</main>

<footer className="bg-white border-t border-zinc-200 py-16">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-12 text-center">
<div className="font-medium tracking-tighter text-2xl text-zinc-900 mb-4">PHR</div>
<p className="text-sm text-zinc-500 max-w-md mx-auto">
                    Phoenix Home Remodeling is dedicated to improving the industry's reputation by providing a structured, risk-free design-build experience. ROC# 313636.
                </p>
</div>
<div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-50">
<iframe allowfullscreen="" aria-label="Interactive map showing Phoenix Home Remodeling location" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13338.755228728283!2d-111.9582575!3d33.3008034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b04586d589209%3A0x47b01de4bcfe9863!2sPhoenix%20Home%20Remodeling!5e0!3m2!1sen!2sus!4v1687474649235!5m2!1sen!2sus" style={{border: '0'}} title="Phoenix Home Remodeling Location Map" width="100%"></iframe>
</div>
<div className="mt-12 text-center text-xs text-zinc-400">
                © 2023 Phoenix Home Remodeling. All rights reserved. 
            </div>
</div>
</footer>

    </>
  );
}
