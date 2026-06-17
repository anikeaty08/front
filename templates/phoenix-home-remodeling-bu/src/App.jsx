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



{
"@context": "https://schema.org",
"@type": "Article",
"headline": "Phoenix Home Remodeling business listing: PR Business profile for Phx Home Remodeling",
"image": [
"https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200"
],
"datePublished": "2023-10-27T08:00:00+08:00",
"dateModified": "2023-10-27T08:00:00+08:00",
"author": {
"@type": "Person",
"name": "Expert Contributor"
},
"publisher": {
"@type": "Organization",
"name": "Phoenix Home Remodeling",
"logo": {
"@type": "ImageObject",
"url": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=100"
}
},
"description": "An in-depth look at interior renovation trends and the official PR Business profile for Phoenix Home Remodeling."
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
      

<header className="bg-white/80 backdrop-blur-md border-b border-zinc-200 sticky top-0 z-50">
<div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-semibold tracking-tighter text-xl text-zinc-900">PHR</div>
<nav className="hidden sm:flex space-x-6 text-sm font-medium text-zinc-500">
<span className="hover:text-zinc-900 transition-colors cursor-pointer">Interior Services</span>
<span className="hover:text-zinc-900 transition-colors cursor-pointer">Portfolio</span>
<span className="hover:text-zinc-900 transition-colors cursor-pointer">About</span>
</nav>
</div>
</header>
<main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">

<header className="space-y-6 text-center max-w-3xl mx-auto">
<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
                Phoenix Home Remodeling business listing: PR Business profile for Phx Home Remodeling
            </h1>
<p className="text-lg text-zinc-500 font-medium">Elevating interior spaces with precision, verified credentials, and modern design principles.</p>
</header>

<section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-zinc-100 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-zinc-800"></div>
<h2 className="text-lg font-semibold tracking-tight text-zinc-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-xl text-zinc-400" icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
                What is the Phoenix Home Remodeling business listing?
            </h2>
<p className="text-base text-zinc-600">
                The <strong>Phoenix Home Remodeling business listing</strong> is an official, verified directory profile that showcases the credentials, client reviews, and interior design expertise of one of Arizona's premier local contractors. This specific PR Business profile provides homeowners with essential information regarding interior services such as kitchen updates, bathroom renovations, cabinetry installation, and flooring improvements. By reviewing this verified profile, residents in Chandler, Arizona, and the surrounding metropolitan area can confirm the company's active standing, read authentic client feedback, and understand their specialization in high-quality, functional interior transformations without structural changes. Utilizing established directories ensures transparency and helps homeowners make confident decisions when selecting a professional for their next indoor project.
            </p>
</section>

<article className="space-y-6">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">The Evolution of Interior Spaces in the Valley</h2>
<p className="text-base text-zinc-600">
                The approach to interior design and functionality within residential properties has shifted dramatically over the past decade. Homeowners are increasingly focused on maximizing the potential of their existing square footage. Rather than seeking out entirely new properties, many are choosing to optimize their current layouts through strategic, high-impact interior renovations. This trend is heavily influenced by the desire for spaces that seamlessly blend aesthetic appeal with everyday practicality. 
            </p>
<p className="text-base text-zinc-600">
                Modern interior transformations often prioritize open-concept living areas, where the barriers between culinary spaces and entertainment zones are removed. This approach not only improves natural light distribution but also fosters a more inclusive environment for families and guests. By focusing on vital areas such as primary suites, culinary centers, and functional living rooms, homeowners can significantly enhance their daily living experience. The key lies in selecting the right materials, understanding spatial dynamics, and partnering with experienced local contractors who specialize in meticulous interior craftsmanship.
            </p>
<figure className="mt-8 mb-8 rounded-2xl overflow-hidden shadow-sm border border-zinc-100 bg-white p-2">
<img alt="Phoenix kitchen remodeling ideas with granite countertops and modern interior design" className="w-full h-auto rounded-xl object-cover aspect-video" loading="lazy" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<figcaption className="text-xs text-zinc-500 text-center mt-3 font-medium">Modern kitchen interior featuring custom cabinetry and durable countertop materials.</figcaption>
</figure>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mt-8">The Role of Verified Online Directories</h3>
<p className="text-base text-zinc-600">
                In an era where digital presence is paramount, finding trustworthy professionals requires more than just a simple web search. Homeowners need reliable platforms that aggregate data, confirm licensing, and compile authentic customer experiences. Verified directories play a crucial role in this ecosystem. They act as a digital bridge between meticulous interior specialists and residents seeking high-quality upgrades. 
            </p>
<p className="text-base text-zinc-600">
                When researching top-tier interior contractors, diligent homeowners always look for validated credentials. For instance, reviewing a comprehensive directory can provide deep insights into a company's reputation, operational standards, and specific areas of interior expertise. You can explore the official <a className="text-zinc-900 font-medium underline decoration-zinc-300 hover:decoration-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 rounded-sm" href="https://pr.business/phoenix-home-remodeling-chandler-arizona">Phoenix Home Remodeling business listing</a> to see detailed service offerings, client feedback, and their commitment to elevating indoor living spaces in Chandler, Arizona. These profiles serve as a testament to a company's dedication to quality craftsmanship and client satisfaction.
            </p>
</article>

<article className="space-y-6">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Mastering Kitchen Dynamics: Form Meets Function</h2>
<p className="text-base text-zinc-600">
                The culinary center of the home is often the primary focus for any significant interior update. It is a high-traffic area that demands both resilience and aesthetic elegance. According to a 2023 Remodeling Magazine Cost vs. Value report, minor to midrange interior kitchen updates yield one of the highest returns on investment for homeowners, frequently recouping a substantial percentage of the initial costs upon resale.
            </p>
<p className="text-base text-zinc-600">
                A successful kitchen transformation involves careful consideration of several core components. Rather than completely gutting a space, many optimal designs focus on strategic upgrades that drastically alter the room's character.
            </p>
<ul className="space-y-4 my-6">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-zinc-800 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-zinc-600"><span className="font-medium text-zinc-900">Cabinet Refacing and Replacement:</span> Updating cabinetry is perhaps the most visually impactful change. Options range from painting existing solid wood doors to complete replacements with modern, soft-close hardware, custom drawer pull-outs, and integrated waste sorting systems.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-zinc-800 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-zinc-600"><span className="font-medium text-zinc-900">Advanced Countertop Materials:</span> The shift from standard laminates to durable, low-maintenance surfaces like engineered quartz, natural granite, or ultra-compact Dekton offers longevity and a premium feel.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-zinc-800 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-zinc-600"><span className="font-medium text-zinc-900">Energy-Efficient Appliances:</span> Integrating modern, energy-saving appliances not only reduces utility burdens but also provides a sleek, cohesive look, especially when utilizing built-in or panel-ready designs.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-zinc-800 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-zinc-600"><span className="font-medium text-zinc-900">Strategic Lighting Design:</span> Layered lighting—combining ambient recessed fixtures, task lighting under cabinets, and decorative pendants over islands—dramatically improves both the utility and mood of the space.</span>
</li>
</ul>
<p className="text-base text-zinc-600">
                Furthermore, layout optimization plays a critical role. The classic "work triangle" (the path between the sink, stove, and refrigerator) remains a fundamental principle of functional interior design. By refining this workflow, daily culinary tasks become more efficient and enjoyable.
            </p>
</article>

<article className="space-y-6">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Sanctuary Creation: The Modern Bathroom Renovation</h2>
<p className="text-base text-zinc-600">
                If the kitchen is the heart of the home, the primary bathroom is its private retreat. The demand for spa-like atmospheres within residential interiors has surged. Homeowners are looking to convert utilitarian washrooms into tranquil environments utilizing high-end plumbing fixtures, sophisticated tile work, and intelligent layout adjustments.
            </p>
<figure className="mt-8 mb-8 rounded-2xl overflow-hidden shadow-sm border border-zinc-100 bg-white p-2">
<img alt="Luxurious bathroom renovation featuring a modern vanity installation and glass shower enclosure" className="w-full h-auto rounded-xl object-cover aspect-video" loading="lazy" src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<figcaption className="text-xs text-zinc-500 text-center mt-3 font-medium">A meticulously updated bathroom interior highlighting premium tile work and layout optimization.</figcaption>
</figure>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mt-8">Essential Elements of a Bathroom Update</h3>
<p className="text-base text-zinc-600">
                Updating a bathroom requires precise attention to moisture control and material durability. Key trends include the removal of outdated built-in tubs in favor of expansive, curbless walk-in showers featuring frameless heavy glass enclosures. These showers often incorporate large-format porcelain tile flooring, which minimizes grout lines and creates a seamless visual flow, making the room feel considerably larger.
            </p>
<p className="text-base text-zinc-600">
                Vanity installation is another focal point. Floating vanities offer a contemporary aesthetic while making floor cleaning easier. Paired with dual undermount sinks, quartz countertops, and brushed nickel or matte black hardware, the vanity becomes a functional centerpiece. Behind the walls, proper drywall repair using moisture-resistant green board ensures the longevity of the cosmetic finishes.
            </p>
<p className="text-base text-zinc-600">
                Data from the National Kitchen &amp; Bath Association (NKBA) suggests that incorporating smart home technology into interior spaces, such as digital shower valves, heated flooring systems, and integrated mirror defoggers, has grown significantly. These technological integrations elevate the standard bathroom into a highly personalized comfort zone.
            </p>
</article>

<article className="space-y-6 bg-zinc-100/50 p-6 sm:p-8 rounded-2xl border border-zinc-100">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">The Importance of Licensing and Professional Integrity</h2>
<p className="text-base text-zinc-600">
                Executing complex interior upgrades—such as rewiring for new lighting, adjusting plumbing for a new vanity, or installing heavy cabinetry—requires a high level of technical proficiency. It is imperative that homeowners entrust their interior spaces to professionals who possess the requisite skills, insurance, and state-mandated licensing.
            </p>
<p className="text-base text-zinc-600">
                In Arizona, the Registrar of Contractors (ROC) governs the licensing of construction and renovation professionals. Ensuring your chosen partner holds an active and clean license protects you against substandard workmanship and liability issues. We operate proudly under <strong>ROC# 313636</strong>, a credential that underscores our commitment to regulatory compliance, ongoing education, and superior interior craftsmanship.
            </p>
<p className="text-base text-zinc-600">
                When reviewing profiles, such as a PR Business listing, the presence of verified license numbers and bonding information provides peace of mind. It signifies that the local contractors have met stringent criteria and are legally authorized to perform interior residential work. This professional foundation is what allows for smooth project management, accurate timelines, and the pristine execution of intricate design plans, from custom baseboards to flawless paint finishes.
            </p>
</article>

<article className="space-y-6">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Maximizing Value Through Cohesive Design</h2>
<p className="text-base text-zinc-600">
                To truly maximize the return on investment for any interior project, cohesion is vital. An isolated update in one room can sometimes make adjacent, older areas feel even more dated. Therefore, a holistic approach to interior design is recommended, even if the actual work is completed in phases.
            </p>
<figure className="mt-8 mb-8 rounded-2xl overflow-hidden shadow-sm border border-zinc-100 bg-white p-2">
<img alt="Seamless luxury vinyl plank flooring throughout an open concept living room and kitchen" className="w-full h-auto rounded-xl object-cover aspect-video" loading="lazy" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<figcaption className="text-xs text-zinc-500 text-center mt-3 font-medium">Consistent flooring materials, like luxury vinyl plank, create a cohesive flow across interior spaces.</figcaption>
</figure>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mt-8">Flooring as the Foundation of Style</h3>
<p className="text-base text-zinc-600">
                One of the most effective ways to unify a home's interior footprint is through consistent flooring. Replacing segmented, mixed materials (e.g., carpet in the living room meeting tile in the dining room) with a continuous surface dramatically alters the perception of space. Materials such as luxury vinyl plank (LVP) or engineered hardwood are incredibly popular due to their durability, water resistance, and wide array of aesthetic finishes. When run continuously through hallways, living areas, and kitchens, these floors create a sweeping, expansive feel.
            </p>
<p className="text-base text-zinc-600">
                As you consider these holistic improvements, taking the time to research capable professionals is step one. To view comprehensive service lists, read authentic client stories, and verify operational excellence, we encourage you to <a className="text-zinc-900 font-medium underline decoration-zinc-300 hover:decoration-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 rounded-sm" href="https://pr.business/phoenix-home-remodeling-chandler-arizona">check them out here</a> on our detailed PR Business profile. Gathering this information helps ensure that your vision for a cohesive, modern interior is executed flawlessly by a reputable team.
            </p>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mt-8">Pros and Cons: Full-Scale Interior vs. Phased Updates</h3>
<p className="text-base text-zinc-600">
                Homeowners often debate whether to tackle the entire interior at once or break the project into phases.
            </p>
<div className="grid md:grid-cols-2 gap-6 mt-6">
<div className="bg-white border border-zinc-200 p-6 rounded-xl shadow-sm">
<h4 className="font-semibold text-zinc-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-lg text-zinc-500" icon="solar:clock-circle-linear"></iconify-icon>
                        Phased Updates
                    </h4>
<p className="text-sm text-zinc-600 mb-2"><span className="font-medium text-zinc-800">Pros:</span> Easier to budget over time, less immediate disruption to daily life, allows for design adjustments between phases.</p>
<p className="text-sm text-zinc-600"><span className="font-medium text-zinc-800">Cons:</span> The overall timeline is extended, achieving a cohesive look requires very strict planning, potential for material lines to be discontinued.</p>
</div>
<div className="bg-white border border-zinc-200 p-6 rounded-xl shadow-sm">
<h4 className="font-semibold text-zinc-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-lg text-zinc-500" icon="solar:home-angle-linear"></iconify-icon>
                        Full-Scale Interior
                    </h4>
<p className="text-sm text-zinc-600 mb-2"><span className="font-medium text-zinc-800">Pros:</span> Maximum efficiency for contractors, guarantees material consistency, one single period of disruption, immediate total transformation.</p>
<p className="text-sm text-zinc-600"><span className="font-medium text-zinc-800">Cons:</span> Requires a larger upfront financial commitment, requires moving out or significant living adjustments during the process.</p>
</div>
</div>
</article>

<section className="space-y-8 border-t border-zinc-200 pt-12">
<div className="text-center space-y-2 mb-10">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Frequently Asked Questions</h2>
<p className="text-base text-zinc-500">Quick answers to common inquiries about interior projects and business listings.</p>
</div>
<div className="space-y-4 max-w-3xl mx-auto">

<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm hover:border-zinc-300 transition-colors">
<h3 className="text-base font-semibold text-zinc-900 mb-2">How do I find a reliable interior contractor in Chandler, Arizona?</h3>
<p className="text-sm text-zinc-600 leading-relaxed">
                        To find a reliable interior contractor in Chandler, Arizona, start by checking verified online directories like PR Business or the BBB. Look for companies with consistent positive reviews, transparent portfolios of their interior design work, and an active Arizona Registrar of Contractors (ROC) license.
                    </p>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm hover:border-zinc-300 transition-colors">
<h3 className="text-base font-semibold text-zinc-900 mb-2">What is included in a typical kitchen update?</h3>
<p className="text-sm text-zinc-600 leading-relaxed">
                        A typical interior kitchen update usually includes cabinet refacing or replacement, upgrading to durable countertop materials like quartz, installing modern plumbing fixtures, updating lighting layouts, and replacing old flooring. It focuses on improving both the aesthetic appeal and the functional layout of the cooking space.
                    </p>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm hover:border-zinc-300 transition-colors">
<h3 className="text-base font-semibold text-zinc-900 mb-2">How long does a standard bathroom renovation take?</h3>
<p className="text-sm text-zinc-600 leading-relaxed">
                        A standard interior bathroom renovation typically takes between three to six weeks to complete. The timeline depends heavily on the scope of work, such as whether it involves complex tile installation, moving plumbing lines for a new vanity, or custom glass shower enclosures.
                    </p>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm hover:border-zinc-300 transition-colors">
<h3 className="text-base font-semibold text-zinc-900 mb-2">Why should I check a contractor's ROC license number?</h3>
<p className="text-sm text-zinc-600 leading-relaxed">
                        You should always check a contractor's ROC license number (such as ROC# 313636) to ensure they are legally permitted to perform construction work in Arizona. It verifies that they have met state testing requirements, carry necessary insurance, and provides you with consumer protection in case of disputes.
                    </p>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm hover:border-zinc-300 transition-colors">
<h3 className="text-base font-semibold text-zinc-900 mb-2">Does upgrading countertops increase home value?</h3>
<p className="text-sm text-zinc-600 leading-relaxed">
                        Yes, upgrading to premium countertop materials like granite or quartz is one of the most effective ways to increase a home's interior value. High-quality surfaces appeal to buyers, offer superior durability, and instantly modernize the look of a kitchen or master suite.
                    </p>
</div>
</div>
</section>

<section className="bg-zinc-900 text-zinc-50 p-8 sm:p-12 rounded-3xl shadow-lg text-center space-y-6">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Conclusion: Elevating Your Living Space</h2>
<p className="text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                Transforming the interior of your home is a significant endeavor that requires meticulous planning, an eye for design, and the technical skill to execute complex updates flawlessly. Whether your goal is to modernize a dated kitchen with custom cabinetry and smart home technology, or to convert a primary bathroom into a luxurious, spa-like retreat, the quality of the professionals you hire will dictate the success of the project. By focusing on cohesive design elements, high-quality materials, and verified local expertise, you can ensure that your interior investments yield both daily enjoyment and long-term financial value. 
            </p>
<p className="text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed pb-4">
                We take immense pride in our transparent operations, our active ROC# 313636 credential, and our dedication to the residents of Chandler and the wider metropolitan area. When you are ready to begin planning your next interior transformation, we invite you to research our credentials and read our client reviews. <a className="text-white font-medium underline decoration-zinc-500 hover:decoration-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-sm" href="https://pr.business/phoenix-home-remodeling-chandler-arizona">Visit our PR Business listing here</a> to learn more about our commitment to excellence and how we can bring your vision to life.
            </p>
</section>

<section className="space-y-6 pt-8 border-t border-zinc-200">
<div className="text-center space-y-2">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Locate Our Service Area</h2>
<p className="text-sm text-zinc-500">Providing premier interior design and updating services across the Valley.</p>
</div>
<div className="w-full aspect-video rounded-2xl overflow-hidden shadow-sm border border-zinc-200 bg-zinc-100">
<iframe allowfullscreen="" aria-label="Google Map showing the location of Phoenix Home Remodeling" className="w-full h-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13338.755228728283!2d-111.9582575!3d33.3008034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b04586d589209%3A0x47b01de4bcfe9863!2sPhoenix%20Home%20Remodeling!5e0!3m2!1sen!2sus!4v1687474649235!5m2!1sen!2sus" style={{border: '0'}}>
</iframe>
</div>
</section>
</main>

<footer className="bg-white border-t border-zinc-200 mt-12 py-8">
<div className="max-w-4xl mx-auto px-6 text-center">
<p className="text-xs text-zinc-400 font-medium tracking-wide">
                © 2023 Phoenix Home Remodeling. ROC# 313636. All rights reserved. Interior specialists.
            </p>
</div>
</footer>

    </>
  );
}
