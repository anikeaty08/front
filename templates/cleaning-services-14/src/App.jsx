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



function showPage(pageId, event) {
if(event) event.preventDefault();
document.getElementById('home-page').classList.add('hidden');
document.getElementById('terms-page').classList.add('hidden');
document.getElementById(pageId).classList.remove('hidden');
window.scrollTo(0, 0);
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
      

<header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b bg-black/80 border-neutral-900">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter flex items-center gap-2 font-sans text-white" href="#" onclick="showPage('home-page', event)">
<div className="w-4 h-4 rounded-sm bg-white"></div>
                SYNCLEAN
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="transition-colors font-sans hover:text-white" href="#" onclick="showPage('home-page', event)">Solutions</a>
<a className="transition-colors font-sans hover:text-white" href="#" onclick="showPage('home-page', event)">Scale</a>
<a className="transition-colors font-sans hover:text-white" href="#" onclick="showPage('home-page', event)">The Model</a>
<a className="transition-colors font-sans hover:text-white" href="#" onclick="showPage('home-page', event)">Reviews</a>
</nav>
<div className="flex items-center gap-4">
<a className="text-sm font-medium hidden sm:block font-sans text-neutral-400 hover:text-white" href="#" onclick="showPage('home-page', event)">Request Service</a>
<a className="text-sm font-medium px-4 py-2 rounded-md transition-colors font-sans bg-white text-black hover:bg-neutral-200" href="#" onclick="showPage('home-page', event)">
                    Partner With Us
                </a>
</div>
</div>
</header>

<div className="" id="home-page">

<main className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 opacity-40 z-0" style={{backgroundImage: 'radial-gradient(#e4e4e7 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
<div className="bg-gradient-to-b from-black/10 via-black/80 to-black z-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-8 bg-neutral-900 border-neutral-800 text-neutral-400">
<iconify-icon className="text-sm" icon="solar:routing-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-sans">Intelligent Routing Engine Live</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-tight max-w-4xl font-newsreader font-light text-white">
                    The infrastructure for <br className="hidden md:block"/> premium spaces.
                </h1>
<p className="mt-6 text-lg text-neutral-500 max-w-2xl font-normal leading-relaxed font-sans">
                    We seamlessly pair elite cleaning contractors with high-demand locations—ranging from residential homes to sprawling corporate offices. From quick turns to multi-day overhauls, we handle the logistics.
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-6 py-3 text-sm font-medium rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm font-sans bg-white text-black hover:bg-neutral-200" href="#request">
                        Initiate a Request
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 border text-sm font-medium rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm font-sans bg-black text-white border-neutral-800 hover:bg-neutral-950" href="#model">
                        View Partner Model
                    </a>
</div>
</div>
</main>

<section className="py-24 border-y bg-neutral-950 border-neutral-900" id="scale">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl tracking-tight mb-4 font-newsreader font-light text-white">
                            Engineered for any scale.
                        </h2>
<p className="text-base text-neutral-500 font-normal font-sans">
                            Our platform categorizes locations by footprint and complexity. Whether it requires a rapid two-hour intervention or a synchronized team working over several days, we pair the right crew to the exact requirement.
                        </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-8 rounded-xl border shadow-sm flex flex-col bg-black border-neutral-800">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 bg-neutral-900 border-neutral-800 text-white">
<iconify-icon className="text-xl" icon="solar:home-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 font-sans text-white">Residential Estates</h3>
<p className="text-sm text-neutral-500 mb-6 flex-grow font-sans">
                            Deep cleaning and maintenance for private homes. Usually spanning 3 to 8 hours depending on square footage and client specifics.
                        </p>
<div className="flex items-center gap-2 text-xs font-medium border-t pt-4 font-sans text-neutral-600 border-neutral-900">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Hours duration
                        </div>
</div>
<div className="p-8 rounded-xl border shadow-sm flex flex-col bg-black border-neutral-800">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 bg-neutral-900 border-neutral-800 text-white">
<iconify-icon className="text-xl" icon="solar:buildings-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 font-sans text-white">Corporate Offices</h3>
<p className="text-sm text-neutral-500 mb-6 flex-grow font-sans">
                            Routine and specialized clearing for commercial spaces. Assignments often require night shifts or weekend alignments.
                        </p>
<div className="flex items-center gap-2 text-xs font-medium border-t pt-4 font-sans text-neutral-600 border-neutral-900">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
                            Overnight / Shift duration
                        </div>
</div>
<div className="p-8 rounded-xl border shadow-sm flex flex-col bg-black border-neutral-800">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 bg-neutral-900 border-neutral-800 text-white">
<iconify-icon className="text-xl" icon="solar:city-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 font-sans text-white">Industrial &amp; Post-Build</h3>
<p className="text-sm text-neutral-500 mb-6 flex-grow font-sans">
                            Massive scale cleanup operations for new constructions or industrial warehouses. These pair multi-unit crews over extended periods.
                        </p>
<div className="flex items-center gap-2 text-xs font-medium border-t pt-4 font-sans text-neutral-600 border-neutral-900">
<iconify-icon icon="solar:calendar-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                            Multi-day duration
                        </div>
</div>
</div>
</div>
</section>

<section className="border-b pt-24 pb-24 bg-black border-neutral-900" id="model">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-6 bg-neutral-900 border-neutral-800 text-neutral-400">
<iconify-icon className="text-sm" icon="solar:pie-chart-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-sans">Revenue Architecture</span>
</div>
<h2 className="text-3xl md:text-4xl tracking-tight mb-6 font-newsreader font-light text-white">
                            Focus on the work. <br/> We handle the enterprise.
                        </h2>
<p className="text-base text-neutral-500 mb-4 leading-relaxed font-sans">
                            Our platform retains 70% to completely cover client acquisition, multi-day contract negotiations, software infrastructure, billing, and dedicated customer support. This eliminates all administrative overhead for you.
                        </p>
<p className="text-base text-neutral-500 mb-4 leading-relaxed font-sans">
                            The remaining 30% is allocated directly to our contracting partners. This segment is meticulously calculated to comfortably cover all your operational costs—including labor, supplies, and transit—while guaranteeing a clean, predictable profit margin on every job.
                        </p>
<p className="text-base font-medium mb-8 leading-relaxed p-4 rounded-lg border font-sans text-neutral-100 bg-neutral-950 border-neutral-800">
                            For partners seeking maximum stability, we offer <span className="font-sans text-white">Guaranteed Contracts</span>. You can lock in recurring work and predictable volume, all while strictly following the exact same 70/30 distribution rule.
                        </p>
<ul className="space-y-4 text-sm text-neutral-400">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg mt-0.5 text-white" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-sans">No bidding wars or marketing spend.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg mt-0.5 text-white" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-sans">Operating costs fully factored into your 30% margin.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg mt-0.5 text-white" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-sans">Optional guaranteed volume contracts available.</span>
</li>
</ul>
</div>
<div className="rounded-2xl p-8 lg:p-12 border shadow-sm relative overflow-hidden bg-neutral-950 border-neutral-800">
<div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 bg-neutral-800"></div>
<h3 className="text-xl tracking-tight mb-8 relative z-10 font-newsreader font-light text-white">Revenue Distribution</h3>
<div className="space-y-6 relative z-10">
<div>
<div className="flex justify-between items-end mb-2">
<span className="text-sm font-medium font-sans text-neutral-100">Platform &amp; Overhead</span>
<span className="text-xl tracking-tight font-newsreader font-light text-white">70%</span>
</div>
<div className="w-full rounded-full h-3 overflow-hidden bg-neutral-800">
<div className="h-3 rounded-full bg-white" style={{width: '70%'}}></div>
</div>
<p className="text-xs text-neutral-500 mt-2 font-sans">Acquisition, software, support, billing, risk management.</p>
</div>
<div className="pt-4">
<div className="flex justify-between items-end mb-2">
<span className="text-sm font-medium font-sans text-neutral-100">Partner Take-Home</span>
<span className="text-xl tracking-tight font-newsreader font-light text-white">30%</span>
</div>
<div className="w-full rounded-full h-3 overflow-hidden flex justify-end bg-neutral-800">
<div className="h-3 rounded-full bg-neutral-600" style={{width: '30%'}}></div>
</div>
<p className="text-xs text-neutral-500 mt-2 text-right font-sans">Covers operational costs (labor, supplies) + direct profit.</p>
</div>
</div>
<div className="mt-10 p-4 rounded-lg border flex items-start gap-4 bg-black border-neutral-800">
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-neutral-900 text-white">
<iconify-icon icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-xs leading-relaxed font-sans text-neutral-400">
                                Example: A $5,000 multi-day commercial cleaning contract yields $1,500 directly to the contracted cleaning crew. This easily absorbs the $600 in labor/supplies, leaving $900 in pure, zero-admin profit.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b bg-neutral-950 border-neutral-900" id="request">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl tracking-tight mb-4 font-newsreader font-light text-white">Request Cleaning Infrastructure</h2>
<p className="text-sm text-neutral-500 font-sans">Detail your location requirements, schedule, and proposed contract size. Our routing engine will review and pair you with an elite local crew.</p>
</div>
<form className="border shadow-sm rounded-xl p-6 sm:p-8 space-y-6 bg-black border-neutral-800">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium font-sans text-neutral-100">Location Type</label>
<div className="relative">
<select className="w-full appearance-none border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 cursor-pointer bg-neutral-950 border-neutral-800 text-neutral-100">
<option className="font-sans">Residential Estate</option>
<option className="font-sans">Corporate Office</option>
<option className="font-sans">Industrial / Warehouse</option>
<option className="font-sans">Post-Construction</option>
</select>
<div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-neutral-600">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium font-sans text-neutral-100">Desired Timeline</label>
<input className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 placeholder:text-neutral-400 bg-neutral-950 border-neutral-800 text-neutral-100" placeholder="e.g. Next Week, Ongoing, ASAP" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium font-sans text-neutral-100">Scope of Work</label>
<textarea className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 placeholder:text-neutral-400 resize-none bg-neutral-950 border-neutral-800 text-neutral-100" placeholder="Describe the size of the space, current state, and specific cleaning requirements..." rows="4"></textarea>
</div>
<div className="space-y-2">
<label className="text-xs font-medium font-sans text-neutral-100">Proposed Budget / Contract Value</label>
<div className="relative">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-sm font-sans text-neutral-600">$</div>
<input className="w-full border rounded-md pl-7 pr-3 py-2 text-sm focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 placeholder:text-neutral-400 bg-neutral-950 border-neutral-800 text-neutral-100" placeholder="0.00" type="number"/>
</div>
<p className="text-xs text-neutral-500 mt-1 font-sans">Our team will evaluate the feasibility based on network standards.</p>
</div>
<div className="pt-4 border-t flex justify-end border-neutral-900">
<button className="px-6 py-2.5 text-sm font-medium rounded-md transition-colors shadow-sm font-sans bg-white text-black hover:bg-neutral-200" type="button">
                            Submit Service Request
                        </button>
</div>
</form>
</div>
</section>

<section className="py-24 border-b bg-neutral-950 border-neutral-800">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl tracking-tight mb-10 font-newsreader font-light text-white">Terms of Operation Summary</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
<div>
<div className="w-8 h-8 rounded-full border flex items-center justify-center mb-4 bg-black border-neutral-800 text-white">
<span className="text-xs font-medium font-sans">01</span>
</div>
<h4 className="text-sm font-medium mb-2 font-sans text-neutral-100">The 70/30 Mandate</h4>
<p className="text-xs text-neutral-500 leading-relaxed font-sans">All standard and guaranteed contracts strictly observe a 70% platform / 30% partner split. The 30% is calibrated to cover all partner operating costs while protecting profit.</p>
</div>
<div>
<div className="w-8 h-8 rounded-full border flex items-center justify-center mb-4 bg-black border-neutral-800 text-white">
<span className="text-xs font-medium font-sans">02</span>
</div>
<h4 className="text-sm font-medium mb-2 font-sans text-neutral-100">Guaranteed Volume</h4>
<p className="text-xs text-neutral-500 leading-relaxed font-sans">Partners opting into guaranteed contracts must maintain a 98% fulfillment rate and pass random quality assurance checks to retain their recurring assignments.</p>
</div>
<div>
<div className="w-8 h-8 rounded-full border flex items-center justify-center mb-4 bg-black border-neutral-800 text-white">
<span className="text-xs font-medium font-sans">03</span>
</div>
<h4 className="text-sm font-medium mb-2 font-sans text-neutral-100">Automated Payouts</h4>
<p className="text-xs text-neutral-500 leading-relaxed font-sans">Funds are secured in escrow upon client booking. Partner payouts are initiated automatically within 24 hours following successful completion and digital verification of the site.</p>
</div>
</div>
<div className="mt-12 pt-8 border-t border-neutral-800">
<a className="text-sm font-medium flex items-center gap-1 transition-colors font-sans text-neutral-100 hover:text-white" href="#" onclick="showPage('terms-page', event)">
                        Read Complete Terms &amp; Conditions
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>
</div>

<div className="hidden pt-32 pb-24 min-h-screen flex flex-col" id="terms-page">
<div className="max-w-3xl mx-auto px-6 w-full flex-grow relative">
<button className="text-xs font-medium text-neutral-500 mb-8 flex items-center gap-1 transition-colors font-sans hover:text-white" onclick="showPage('home-page', event)">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
                Back to Platform
            </button>
<h1 className="text-3xl tracking-tight mb-4 font-newsreader font-light text-white">Partner Agreement &amp; Terms</h1>
<p className="text-sm text-neutral-500 mb-12 font-sans">Last updated: October 2024</p>
<div className="prose prose-neutral prose-sm max-w-none space-y-6 text-neutral-400">
<h3 className="text-lg font-medium tracking-tight font-sans text-white">1. Introduction to Service Architecture</h3>
<p className="leading-relaxed font-sans">This Partner Agreement ("Agreement") governs the operational relationship between Synclean Network ("Platform") and independent cleaning contractors ("Partners"). By accessing our routing engine or accepting assignments, you implicitly agree to the standardized financial modeling and quality assurance mandates detailed herein.</p>
<h3 className="text-lg font-medium tracking-tight font-sans text-white">2. Financial Structures and Payouts</h3>
<p className="leading-relaxed font-sans">The Platform operates strictly on a 70/30 gross revenue distribution model across all residential, corporate, and industrial tier projects. The Platform retains 70% to cover client acquisition, marketing, digital infrastructure, payment processing, liability management, and dedicated support.</p>
<p className="leading-relaxed font-sans">Partners receive the remaining 30% of gross contract value. This percentage is algorithmically calibrated to ensure Partners can effectively cover all localized operational expenditures, including but not limited to: W-2 labor costs, transportation, specialized equipment depreciation, and raw material supplies.</p>

<div className="relative mt-8">

<div className="opacity-40 select-none blur-[2px]">
<h3 className="text-lg font-medium tracking-tight mb-4 font-sans text-white">3. Performance Thresholds &amp; Escalation</h3>
<p className="leading-relaxed mb-4 font-sans">Partners enrolled in Guaranteed Volume Contracts are required to maintain a rolling fulfillment rate of no less than 98.5%. Failure to arrive at a confirmed location within the designated arrival window will result in a formal dispatch strike. Three consecutive strikes within a fiscal quarter will automatically pause routing engine assignments.</p>
<p className="leading-relaxed mb-4 font-sans">Visual documentation is compulsory. Partners must submit a minimum of four (4) time-stamped photographs per structural zone before commencement and upon completion. These media files are property of the Platform and are strictly used for client dispute resolution and escrow release protocols.</p>
<h3 className="text-lg font-medium tracking-tight mb-4 font-sans text-white">4. Indemnification &amp; Liability</h3>
<p className="leading-relaxed font-sans">While the Platform maintains an overarching umbrella liability policy, Partners are legally required to carry their own active state-mandated workers' compensation and commercial general liability insurance. The Partner agrees to hold the Platform harmless against any direct physical damage caused by the Partner's crew while on the premises of the end client.</p>
</div>

<div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t to-transparent flex items-end justify-center pb-8 sm:pb-16 z-10 from-black via-black/95">
<div className="border p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-md w-full text-center relative overflow-hidden bg-black border-neutral-800">
<div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none bg-neutral-900"></div>
<div className="w-12 h-12 border rounded-xl flex items-center justify-center mx-auto mb-5 bg-neutral-950 border-neutral-900 text-white">
<iconify-icon className="text-xl" icon="solar:lock-keyhole-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 relative z-10 font-sans text-white">Access Full Agreement</h3>
<p className="text-sm text-neutral-500 mb-6 relative z-10 font-sans">Enter your email to authenticate and read the complete partner operational terms and indemnification policies.</p>
<form className="space-y-3 relative z-10" onsubmit="event.preventDefault(); alert('Authentication simulated. In production, this would verify the user and unlock the terms.');">
<input className="w-full border rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 placeholder:text-neutral-400 bg-neutral-950 border-neutral-800 text-neutral-100" placeholder="name@company.com" required="" type="email"/>
<button className="w-full px-4 py-2.5 text-sm font-medium rounded-md transition-colors shadow-sm flex items-center justify-center gap-2 font-sans bg-white text-black hover:bg-neutral-200" type="submit">
                                    Continue with Email
                                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
<div className="mt-4 pt-4 border-t border-neutral-900">
<p className="text-xs text-neutral-500 font-sans">Already a partner? <a className="font-medium hover:underline font-sans text-white" href="#">Log in</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<footer className="py-16 border-t bg-black border-neutral-900">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
<div>
<a className="text-lg font-medium tracking-tighter flex items-center gap-2 mb-4 font-sans text-white" href="#" onclick="showPage('home-page', event)">
<div className="w-4 h-4 rounded-sm bg-white"></div>
                        SYNCLEAN
                    </a>
<p className="text-sm text-neutral-500 max-w-xs font-sans">
                        The intelligent routing network connecting premium locations with elite cleaning professionals.
                    </p>
</div>
<div className="flex gap-12 sm:gap-24">
<div>
<h4 className="text-sm font-medium mb-4 tracking-tight font-sans text-white">Platform</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="transition-colors font-sans hover:text-white" href="#" onclick="showPage('home-page', event)">Request Service</a></li>
<li><a className="transition-colors font-sans hover:text-white" href="#" onclick="showPage('home-page', event)">For Contractors</a></li>
<li><a className="transition-colors font-sans hover:text-white" href="#" onclick="showPage('home-page', event)">Testimonials</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-4 tracking-tight font-sans text-white">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="transition-colors font-sans hover:text-white" href="#" onclick="showPage('terms-page', event)">Partner Terms</a></li>
<li><a className="transition-colors font-sans hover:text-white" href="#">Privacy Policy</a></li>
<li><a className="transition-colors font-sans hover:text-white" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 text-xs border-neutral-900 text-neutral-600">
<p className="font-sans">© 2024 Synclean Network. All rights reserved.</p>
<div className="flex gap-4 text-neutral-600">
<a className="transition-colors font-sans hover:text-white" href="#" onclick="showPage('terms-page', event)">Terms &amp; Conditions</a>
<a className="transition-colors font-sans hover:text-white" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
