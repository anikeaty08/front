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
      

<nav className="sticky top-0 z-50 w-full border-b border-neutral-200/60 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
<div className="flex items-center gap-2">
<a className="text-xl font-semibold tracking-tighter text-neutral-900" href="#">
            TAXI LONDON
          </a>
</div>
<div className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900" href="#services">
            Services
          </a>
<a className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900" href="#airport">
            Airport Transfers
          </a>
<a className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900" href="#guide">
            City Guide
          </a>
<a className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900" href="#corporate">
            Corporate
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden text-sm font-medium text-neutral-900 md:block" href="#">
            Log in
          </a>
<a className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-neutral-800 hover:shadow-md" href="#">
            Book Now
          </a>
</div>
</div>
</nav>

<section className="relative overflow-hidden pt-24 pb-32 lg:pt-32 lg:pb-40">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-200/50 via-[#fafafa] to-[#fafafa]"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
          Available for immediate booking
        </div>
<h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-neutral-900 sm:text-7xl">
          Seamless travel across the capital and beyond.
        </h1>
<p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-500 leading-relaxed">
          Experience reliable, premium private hire services. From rapid city
          commutes to seamless airport transfers, navigate the city with
          uncompromising standards.
        </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-neutral-800 sm:w-auto" href="#">
            Schedule a Ride
            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="flex w-full items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-700 shadow-sm transition-all hover:bg-neutral-50 sm:w-auto" href="#services">
            Explore Services
          </a>
</div>
</div>
</section>

<section className="border-y border-neutral-200 bg-white py-24 sm:py-32" id="services">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Comprehensive Mobility Solutions
          </h2>
<p className="mt-4 text-base text-neutral-500">
            Tailored transport services designed for punctuality, comfort, and
            peace of mind.
          </p>
</div>
<div className="mx-auto mt-16 max-w-7xl">
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

<div className="group relative rounded-2xl border border-neutral-200 bg-[#fafafa] p-8 transition-all hover:shadow-md hover:border-neutral-300">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-neutral-200 text-neutral-900 shadow-sm">
<iconify-icon height="24" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-semibold text-neutral-900">
                Point-to-Point
              </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                Direct, efficient routing across the city network. Book
                instantly or schedule in advance for predictable journeys.
              </p>
</div>

<div className="group relative rounded-2xl border border-neutral-200 bg-[#fafafa] p-8 transition-all hover:shadow-md hover:border-neutral-300">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-neutral-200 text-neutral-900 shadow-sm">
<iconify-icon height="24" icon="solar:plane-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-semibold text-neutral-900">
                Airport Transfers
              </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                Flight tracking and meet-and-greet services for seamless
                arrivals and departures at all major hubs.
              </p>
</div>

<div className="group relative rounded-2xl border border-neutral-200 bg-[#fafafa] p-8 transition-all hover:shadow-md hover:border-neutral-300">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-neutral-200 text-neutral-900 shadow-sm">
<iconify-icon height="24" icon="solar:buildings-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-semibold text-neutral-900">
                Corporate Accounts
              </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                Streamlined billing, priority booking, and executive class
                vehicles tailored for modern business professionals.
              </p>
</div>

<div className="group relative rounded-2xl border border-neutral-200 bg-[#fafafa] p-8 transition-all hover:shadow-md hover:border-neutral-300">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-neutral-200 text-neutral-900 shadow-sm">
<iconify-icon height="24" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-semibold text-neutral-900">
                Hourly Directives
              </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                Retain a vehicle and driver for flexible, multi-stop
                itineraries. Ideal for roadshows, shopping, or sightseeing.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32" id="guide">
<div className="mx-auto max-w-3xl px-6 lg:px-8">
<article className="prose prose-neutral prose-p:leading-relaxed prose-headings:tracking-tight max-w-none text-base text-neutral-600">
<h2 className="text-3xl font-semibold text-neutral-900 mb-6 mt-12 tracking-tight">
            Navigating the Capital: The Ultimate Guide to Private Hire and Cabs
          </h2>
<p className="mb-6">
            Moving through one of the world's most dynamic and sprawling
            metropolises requires strategic planning, especially when timing is
            critical. The landscape of urban mobility has shifted dramatically
            over the past decade. While public transport remains the backbone of
            the city's infrastructure, the demand for reliable, comfortable, and
            personalized travel has elevated the standards of private hire
            vehicles and minicabs. Whether you are a daily commuter, a business
            executive attending back-to-back meetings in the financial district,
            or a tourist exploring historic landmarks, understanding your
            transit options is paramount.
          </p>
<p className="mb-6">
            The modern traveler seeks more than just a ride from point A to
            point B; they expect a seamless digital experience, transparent
            pricing, and uncompromising vehicle standards. This shift in
            consumer expectation has led to a renaissance in the private hire
            sector. Gone are the days of standing on rainy street corners hoping
            to hail a passing vehicle. Today, intelligent dispatch systems,
            real-time GPS tracking, and automated communication ensure that your
            vehicle arrives precisely when requested.
          </p>
<h3 className="text-2xl font-semibold text-neutral-900 mb-4 mt-10 tracking-tight">
            Understanding Urban Transport Economics
          </h3>
<p className="mb-6">
            Budgeting for transportation in a major city can be complex due to
            fluctuating demand, traffic conditions, and the inherent differences
            between various service providers. Historically, the iconic
            purpose-built cabs have utilized a metered system, which, while
            regulated, can sometimes lead to unpredictability during peak
            congestion. For a detailed breakdown of how these traditional
            metered costs are calculated across different times and tariffs, you
            can review comprehensive guides on
            <a className="font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-600" href="https://www.minicabs.co.uk/blog/london-taxi-fares/">
              london black cab fares
            </a>
            .
          </p>
<p className="mb-6">
            In contrast, the private hire and minicab sector generally operates
            on a fixed-fare basis. This model provides unparalleled peace of
            mind. When you book a journey, the price quoted is the price you
            pay, regardless of unexpected detours or heavy traffic on the A40.
            This financial predictability is particularly advantageous for
            corporate accounts managing travel budgets or individuals planning
            longer journeys out of the city center.
          </p>
<div className="my-10 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
<h4 className="text-lg font-semibold text-neutral-900 mb-3">
              The Benefits of Fixed-Fare Booking
            </h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-neutral-900" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>
<strong>Total Transparency:</strong>
                  Exact costs are known before the vehicle is dispatched,
                  allowing for accurate budgeting.
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-neutral-900" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>
<strong>No Surge Surprises:</strong>
                  Fixed rates protect passengers from extreme price multipliers
                  during inclement weather or rail strikes.
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-neutral-900" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>
<strong>Traffic Immunity:</strong>
                  If a journey takes longer due to unforeseen congestion, the
                  passenger does not bear the financial penalty of a running
                  meter.
                </span>
</li>
</ul>
</div>
<h2 className="text-3xl font-semibold text-neutral-900 mb-6 mt-12 tracking-tight" id="airport">
            Mastering Airport Transfers
          </h2>
<p className="mb-6">
            Perhaps the most critical aspect of urban transportation is the
            airport transfer. The anxiety of catching a flight, coupled with
            navigating complex terminal layouts and managing luggage, makes
            reliability non-negotiable. The city is served by a constellation of
            major airports, each presenting unique logistical challenges and
            specific regulatory frameworks regarding passenger set-down and
            collection.
          </p>
<p className="mb-6">
            Professional transfer services utilize flight tracking technology to
            monitor your arrival in real-time. This means that if your inbound
            flight is delayed by headwinds or held in a holding pattern, your
            driver automatically adjusts their arrival time, ensuring you aren't
            left waiting at the arrivals hall or charged for excessive waiting
            time. Furthermore, the provision of a meet-and-greet service—where a
            driver waits in the terminal with a personalized name
            board—transforms the often-stressful airport exit into a smooth,
            welcoming experience.
          </p>
<h3 className="text-2xl font-semibold text-neutral-900 mb-4 mt-10 tracking-tight">
            Navigating Heathrow Operations
          </h3>
<p className="mb-6">
            As one of the world's busiest international hubs, Heathrow requires
            meticulous planning. The airport spans multiple active terminals,
            and navigating the perimeter roads requires local expertise.
            Recently, the airport authority implemented new infrastructure tolls
            designed to manage congestion and environmental impact at the
            terminal forecourts.
          </p>
<p className="mb-6">
            It is crucial for passengers to understand that setting down outside
            the departure doors now incurs specific fees. Reputable private hire
            firms will typically incorporate these tolls into their transparent
            upfront pricing, avoiding any awkward negotiations at the curbside.
            For travelers wanting to understand the exact mechanics and costs
            associated with terminal access, it is advisable to read up on the
            current
            <a className="font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-600" href="https://www.minicabs.co.uk/blog/heathrow-drop-off-charge/">
              heathrow drop off charge
            </a>
            policies before traveling.
          </p>
<h3 className="text-2xl font-semibold text-neutral-900 mb-4 mt-10 tracking-tight">
            Stansted Logistics and Planning
          </h3>
<p className="mb-6">
            Located significantly further northeast of the city center, Stansted
            is a major base for European short-haul and low-cost carriers. The
            journey up the M11 motorway requires factoring in potential commuter
            traffic, especially during early morning waves of departures.
          </p>
<p className="mb-6">
            Similar to other major hubs, the management of vehicle flow directly
            outside the terminal has become strictly monetized. The express
            set-down zones are heavily monitored by automatic number plate
            recognition (ANPR) cameras. Staying informed about the latest
            tariffs, time limits, and potential penalties is essential for a
            stress-free departure. You can find up-to-date information regarding
            the
            <a className="font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-600" href="https://www.minicabs.co.uk/blog/stansted-drop-off-charge/">
              stansted airport drop off
            </a>
            regulations to ensure your journey is planned efficiently without
            hidden costs.
          </p>
<h2 className="text-3xl font-semibold text-neutral-900 mb-6 mt-12 tracking-tight">
            Selecting the Right Private Hire Partner
          </h2>
<p className="mb-6">
            With a multitude of operators spanning from localized neighborhood
            dispatchers to global ride-hailing apps, making the right choice
            dictates the quality of your journey. When evaluating a service,
            consider their fleet diversity. A premium operator should offer a
            spectrum of vehicles—from eco-friendly hybrid saloons for solo
            commuters to spacious multi-purpose vehicles (MPVs) capable of
            accommodating large families and excessive luggage. Executive class
            vehicles, such as long-wheelbase Mercedes or BMWs, provide the
            necessary refinement for corporate roadshows or special occasions.
          </p>
<p className="mb-6">
            Furthermore, the vetting and training of drivers form the core of a
            safe and pleasant experience. Top-tier services ensure all
            chauffeurs undergo rigorous background checks, possess comprehensive
            topographical knowledge of the city's intricate road networks, and
            exhibit utmost professionalism. For those seeking a consistently
            high-quality
            <a className="font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-600" href="https://minicabs.co.uk/">
              taxi london
            </a>
            experience, prioritizing companies with established reputations,
            24/7 customer support, and stringent vehicle maintenance protocols
            is key.
          </p>
<h2 className="text-3xl font-semibold text-neutral-900 mb-6 mt-12 tracking-tight" id="corporate">
            Corporate Travel and Account Management
          </h2>
<p className="mb-6">
            For businesses, transportation is an extension of the brand.
            Arriving at a crucial pitch or transferring a VIP client requires
            flawless execution. Corporate accounts streamline this process
            entirely. Dedicated portals allow office managers to book, track,
            and modify journeys on behalf of executives. Consolidated monthly
            invoicing eliminates the administrative burden of processing
            individual expense receipts.
          </p>
<p className="mb-6">
            Moreover, corporate services often include service level agreements
            (SLAs) guaranteeing response times, priority dispatch during peak
            hours, and access to premium vehicle tiers. This logistical
            reliability ensures that personnel can focus on their objectives
            rather than fretting over transit logistics.
          </p>
<h2 className="text-3xl font-semibold text-neutral-900 mb-6 mt-12 tracking-tight">
            The Move Towards Sustainable Urban Transit
          </h2>
<p className="mb-6">
            The conversation around urban mobility is increasingly dominated by
            sustainability. With the expansion of Ultra Low Emission Zones
            (ULEZ) and zero-emission mandates, the private hire industry is
            undergoing a rapid green transition. Forward-thinking operators are
            aggressively electrifying their fleets, deploying plug-in hybrids
            and fully electric vehicles.
          </p>
<p className="mb-6">
            Choosing to ride with companies that prioritize environmentally
            friendly vehicles not only contributes to better air quality but
            also often results in a smoother, quieter, and more refined
            passenger experience. As the infrastructure for rapid charging
            expands across the boroughs, the viability of an all-electric
            private hire network is becoming a reality, representing the next
            evolution in city transport.
          </p>
<hr className="my-12 border-neutral-200"/>
<p className="text-sm text-neutral-500 italic">
            Navigating a sprawling metropolis doesn't have to be a source of
            stress. By understanding the nuances of fixed fares versus meters,
            staying informed on specific airport regulations, and partnering
            with reputable transport providers, you can ensure every journey is
            executed with precision. Whether you are catching a red-eye flight
            or attending a central business meeting, the right private hire
            service transforms transit from a chore into a seamless extension of
            your day.
          </p>
</article>
</div>
</section>

<section className="border-t border-neutral-200 bg-white py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-6">
              Extensive Coverage &amp; Services
            </h2>
<p className="text-base text-neutral-500 leading-relaxed mb-8">
              We provide comprehensive transport and relocation solutions across
              the region. From instant local rides to scheduled airport
              transfers and full-service removals, our network ensures reliable
              service whenever you need it.
            </p>
<div className="flex flex-wrap gap-2.5">
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                Taxi london
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                London taxi
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                Taxi services in london
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                Taxi near me
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                Taxi service near me
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                Taxi service near
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                cabs london
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                taxi near me london
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                taxi london near me
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                cab service london
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                Cabs near me
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                24/7 cab service london
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                24/7 taxi London
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                airport taxi near me
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                airport taxi
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                airport transfers
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                airport transfers near me
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                airport pick up service
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                airport transport near me
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                airport cab service
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                Airport taxi transfers
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                Minicabs near me
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                Minicabs London
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                heathrow airport transfers
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                Removal services london
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                Removal services
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                home removal services
              </span>
<span className="inline-flex items-center rounded-full bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 transition-colors hover:border-neutral-300">
                office removal services
              </span>
</div>
</div>
<div className="overflow-hidden rounded-3xl border border-neutral-200 shadow-sm bg-[#fafafa] p-2">
<iframe allowfullscreen="" className="w-full h-[350px] sm:h-[450px] rounded-2xl" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2595794.9958430524!2d-2.0832931!3d50.5535873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611a5e9429227%3A0xf4ce36fa05f9aaa9!2sMinicabs.co.uk!5e0!3m2!1sen!2suk!4v1748937602648!5m2!1sen!2suk" style={{border: '0'}}></iframe>
</div>
</div>
</div>
</section>
<footer className="border-t border-neutral-200 bg-white pt-16 pb-8">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
<div className="md:col-span-1">
<span className="text-lg font-semibold tracking-tighter text-neutral-900 block mb-4">
              TAXI LONDON
            </span>
<p className="text-sm text-neutral-500 max-w-xs">
              Premium private hire, airport transfers, and executive travel
              solutions operating 24/7 across the capital.
            </p>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900 mb-4">
              Services
            </h3>
<ul className="space-y-3 text-sm text-neutral-500">
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Airport Transfers
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Corporate Accounts
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  City to City
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Hourly As-Directed
                </a>
</li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900 mb-4">
              Airports
            </h3>
<ul className="space-y-3 text-sm text-neutral-500">
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Heathrow (LHR)
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Gatwick (LGW)
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Stansted (STN)
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  London City (LCY)
                </a>
</li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900 mb-4">Company</h3>
<ul className="space-y-3 text-sm text-neutral-500">
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Fleet Guide
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Contact
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Terms of Service
                </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between border-t border-neutral-200 pt-8">
<p className="text-xs text-neutral-400">
            © 2026 Taxi London Transport Services. All rights reserved.
          </p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<span className="sr-only">Twitter</span>
<iconify-icon height="20" icon="solar:twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<span className="sr-only">LinkedIn</span>
<iconify-icon height="20" icon="solar:buildings-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
