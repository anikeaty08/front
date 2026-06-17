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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="iconify text-[#32723B]" data-height="20" data-icon="lucide:leaf" data-width="20"></span>
<span className="text-slate-900 font-medium tracking-tighter text-lg">GREEN HABITAT</span>
</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
<a className="hover:text-[#32723B] transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-[#32723B] transition-colors" href="#sustainability">Sustainability</a>
<a className="hover:text-[#32723B] transition-colors" href="#how-it-works">Process</a>
<a className="hover:text-[#32723B] transition-colors" href="#faq">FAQ</a>
</div>
<a className="inline-flex items-center justify-center rounded-lg bg-[#32723B] px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-[#2A6232] transition-all focus:outline-none focus:ring-2 focus:ring-[#32723B] focus:ring-offset-2" href="#demo">
                Book Demo
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center rounded-full border border-[#709B73]/30 bg-[#709B73]/10 px-3 py-1 text-xs font-medium text-[#32723B] mb-8">
<span className="flex h-2 w-2 rounded-full bg-[#32723B] mr-2 animate-pulse"></span>
                The Future of Corporate Benefits
            </div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
                Empower Your Team with <br/>
<span className="text-[#32723B]">Sustainable Corporate Benefits</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Retain top talent, reward clients, and achieve your ESG goals with the Green Habitat 1-Year Advantage Pass. The smart choice for modern businesses.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#32723B] px-8 py-3.5 text-sm font-medium text-white shadow-sm hover:bg-[#2A6232] transition-all group" href="#demo">
                    Schedule a Live Demo
                    <span className="iconify ml-2 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-8 py-3.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-all hover:border-[#709B73]/50" href="#pass">
                    Get the 1-Year Advantage Pass
                </a>
</div>
<div className="mt-12 flex items-center justify-center gap-8 opacity-60 grayscale">

<div className="flex items-center gap-2 text-xs font-medium text-slate-400">
<span className="iconify" data-icon="lucide:shield-check" data-width="16"></span> Trusted by forward-thinking HR leaders
                </div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-4">
                Why Corporate Benefits Matter Today
            </h2>
<p className="text-slate-500 leading-relaxed">
                In a competitive talent market, salary alone isn't enough. Modern employees demand purpose, flexibility, and a commitment to sustainability. Aligning your corporate perks with environmental values isn't just a trend—it's a strategic necessity for growth and retention.
            </p>
</div>
</section>

<section className="py-24 bg-slate-50" id="benefits">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h3 className="text-sm font-medium text-[#32723B] uppercase tracking-wider mb-2">Strategic Value</h3>
<h2 className="text-3xl font-medium tracking-tight text-slate-900">The Impact of Premium Benefits</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="h-10 w-10 rounded-lg bg-[#32723B]/10 flex items-center justify-center text-[#32723B] mb-6">
<span className="iconify" data-icon="lucide:users" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Talent Retention</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Show your team they are valued. High-quality lifestyle benefits significantly reduce turnover rates and increase employee loyalty.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="h-10 w-10 rounded-lg bg-[#32723B]/10 flex items-center justify-center text-[#32723B] mb-6">
<span className="iconify" data-icon="lucide:magnet" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Top Talent Attraction</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Differentiate your offers. In a crowded hiring market, sustainable travel perks signal a modern, caring company culture.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="h-10 w-10 rounded-lg bg-[#32723B]/10 flex items-center justify-center text-[#32723B] mb-6">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Boost Productivity</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Well-rested employees perform better. Encouraging quality time off prevents burnout and recharges creative energy.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="h-10 w-10 rounded-lg bg-[#32723B]/10 flex items-center justify-center text-[#32723B] mb-6">
<span className="iconify" data-icon="lucide:heart-handshake" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Positive Culture</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Build a community rooted in shared values. Sustainability initiatives foster a sense of collective purpose.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow lg:col-span-2">
<div className="h-10 w-10 rounded-lg bg-[#32723B]/10 flex items-center justify-center text-[#32723B] mb-6">
<span className="iconify" data-icon="lucide:building-2" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Enhanced Brand Image</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Align your corporate brand with environmental responsibility. Clients and partners prefer doing business with companies that demonstrate a commitment to a greener future through tangible actions.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 mb-6">
                        The Solution
                    </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">
                        Green Habitat: <br/>The Smart Corporate Benefit
                    </h2>
<p className="text-slate-500 mb-6 leading-relaxed">
                        We provide a turnkey solution for companies looking to offer meaningful travel benefits without the administrative burden. Green Habitat connects your team with a curated network of eco-certified hotels and sustainable travel experiences.
                    </p>
<p className="text-slate-500 mb-8 leading-relaxed">
                        It is more than a discount program; it is a gateway to a lifestyle that balances luxury with responsibility.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="iconify text-[#32723B] mt-1" data-icon="lucide:check-circle-2" data-width="18"></span>
<span className="text-slate-700 text-sm">Seamless integration with HR rewards systems</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-[#32723B] mt-1" data-icon="lucide:check-circle-2" data-width="18"></span>
<span className="text-slate-700 text-sm">Verified sustainable properties worldwide</span>
</li>
</ul>
</div>
<div className="lg:w-1/2 relative">
<div className="absolute -inset-4 bg-gradient-to-r from-[#32723B]/20 to-[#709B73]/20 rounded-2xl blur-2xl opacity-50"></div>
<div className="relative rounded-2xl bg-slate-50 border border-slate-100 p-8 shadow-xl">

<div className="space-y-4">
<div className="flex items-center justify-between border-b border-slate-200 pb-4">
<div className="h-4 w-32 bg-slate-200 rounded"></div>
<div className="h-8 w-8 rounded-full bg-[#32723B] flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:user" data-width="14"></span>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="aspect-video bg-slate-200 rounded-lg"></div>
<div className="space-y-2">
<div className="h-4 w-3/4 bg-slate-200 rounded"></div>
<div className="h-3 w-1/2 bg-slate-100 rounded"></div>
<div className="flex items-center gap-1 pt-2">
<div className="h-5 w-5 bg-[#32723B]/20 rounded-full flex items-center justify-center">
<span className="iconify text-[#32723B]" data-icon="lucide:leaf" data-width="10"></span>
</div>
<div className="h-3 w-16 bg-[#32723B]/10 rounded"></div>
</div>
</div>
</div>
<div className="pt-2">
<div className="h-10 w-full bg-[#32723B] rounded-lg flex items-center justify-center text-white text-xs font-medium">Book with Advantage Pass</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Key Advantages for Your Organization</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="flex flex-col items-start">
<div className="mb-4 p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
<span className="iconify text-[#32723B]" data-icon="lucide:wallet" data-width="24"></span>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Significant Savings</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Access exclusive rates up to 40% off on premium sustainable accommodations globally.
                    </p>
</div>
<div className="flex flex-col items-start">
<div className="mb-4 p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
<span className="iconify text-[#32723B]" data-icon="lucide:scale" data-width="24"></span>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Work-Life Balance</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Tangible support for employee downtime, leading to happier, healthier teams.
                    </p>
</div>
<div className="flex flex-col items-start">
<div className="mb-4 p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
<span className="iconify text-[#32723B]" data-icon="lucide:gift" data-width="24"></span>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">High-Value Client Gifts</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Impress clients with a unique, ethical gift that stands out from standard corporate swag.
                    </p>
</div>
<div className="flex flex-col items-start">
<div className="mb-4 p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
<span className="iconify text-[#32723B]" data-icon="lucide:globe-2" data-width="24"></span>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Flexibility</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        No blackout dates on many properties and a wide range of destinations to suit every taste.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="pass">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-[#32723B] rounded-2xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">

<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
<div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="md:w-3/5">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">The 1-Year Advantage Pass</h2>
<p className="text-[#709B73] text-lg mb-8 font-light">
                            Unlock a full year of premium benefits for your employees or clients.
                        </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<span className="iconify text-[#709B73]" data-icon="lucide:check" data-width="20"></span>
<span className="text-sm md:text-base font-light">Unlimited bookings for 12 months</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-[#709B73]" data-icon="lucide:check" data-width="20"></span>
<span className="text-sm md:text-base font-light">Access to curated eco-luxury properties</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-[#709B73]" data-icon="lucide:check" data-width="20"></span>
<span className="text-sm md:text-base font-light">Exclusive member-only rates</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-[#709B73]" data-icon="lucide:check" data-width="20"></span>
<span className="text-sm md:text-base font-light">Priority support &amp; concierge</span>
</li>
</ul>
</div>
<div className="md:w-2/5 w-full">
<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
<div className="text-sm text-white/80 mb-2 uppercase tracking-widest">Corporate Rate</div>
<div className="text-3xl font-medium mb-6">Contact for Pricing</div>
<button className="w-full bg-white text-[#32723B] rounded-lg py-3 px-4 font-medium hover:bg-slate-50 transition-colors" onclick="window.location.href='#demo'">
                                Request a Quote
                            </button>
<p className="text-xs text-white/60 mt-4">Volume discounts available for teams of 50+</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="sustainability">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Transparent Sustainability</h2>
<p className="text-slate-500 max-w-2xl mx-auto">
                    We use a clear "Green Badge" system to categorize properties, ensuring your team knows exactly how their travel supports the planet.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-slate-50 transition-colors">
<div className="w-16 h-16 rounded-full bg-[#709B73]/20 flex items-center justify-center text-[#32723B] mb-6">
<span className="iconify" data-icon="lucide:leaf" data-width="32"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Eco-Friendly</h3>
<p className="text-sm text-slate-500">
                        Properties that have eliminated single-use plastics and implemented basic recycling and energy-saving measures.
                    </p>
</div>

<div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-slate-50 transition-colors">
<div className="w-16 h-16 rounded-full bg-[#32723B]/20 flex items-center justify-center text-[#32723B] mb-6">
<span className="iconify" data-icon="lucide:sprout" data-width="32"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Sustainable</h3>
<p className="text-sm text-slate-500">
                        Locations using renewable energy, locally sourced food, and water conservation systems. Low carbon footprint.
                    </p>
</div>

<div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-slate-50 transition-colors">
<div className="w-16 h-16 rounded-full bg-[#32723B] flex items-center justify-center text-white mb-6">
<span className="iconify" data-icon="lucide:award" data-width="32"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Certified</h3>
<p className="text-sm text-slate-500">
                        The highest standard. Properties holding internationally recognized certifications (LEED, B Corp, EarthCheck).
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">How It Works</h2>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="bg-slate-50 pt-4">
<div className="w-16 h-16 bg-white border-2 border-[#32723B] text-[#32723B] rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-6">1</div>
<h3 className="text-lg font-medium text-slate-900 text-center mb-3">Company Enrollment</h3>
<p className="text-sm text-slate-500 text-center">
                            Purchase the Advantage Pass package suited to your team size. We set up your corporate portal instantly.
                        </p>
</div>
<div className="bg-slate-50 pt-4">
<div className="w-16 h-16 bg-white border-2 border-[#32723B] text-[#32723B] rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-6">2</div>
<h3 className="text-lg font-medium text-slate-900 text-center mb-3">Team Access</h3>
<p className="text-sm text-slate-500 text-center">
                            Employees receive unique login credentials to access the Green Habitat booking platform.
                        </p>
</div>
<div className="bg-slate-50 pt-4">
<div className="w-16 h-16 bg-white border-2 border-[#32723B] text-[#32723B] rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-6">3</div>
<h3 className="text-lg font-medium text-slate-900 text-center mb-3">Book &amp; Enjoy</h3>
<p className="text-sm text-slate-500 text-center">
                            Your team books sustainable stays at exclusive rates. You get reports on savings and impact.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">Why Choose Green Habitat?</h2>
<p className="text-slate-500 mb-8">
                        We bridge the gap between corporate responsibility and employee satisfaction.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<span className="iconify text-[#32723B]" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<div>
<h4 className="text-base font-medium text-slate-900">Trust &amp; Vetting</h4>
<p className="text-sm text-slate-500 mt-1">Every property is manually vetted for quality and sustainability claims.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<span className="iconify text-[#32723B]" data-icon="lucide:layers" data-width="20"></span>
</div>
<div>
<h4 className="text-base font-medium text-slate-900">Versatility</h4>
<p className="text-sm text-slate-500 mt-1">Perfect for employee perks, client gifts, or executive travel.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<span className="iconify text-[#32723B]" data-icon="lucide:trending-up" data-width="20"></span>
</div>
<div>
<h4 className="text-base font-medium text-slate-900">Cost-Efficiency</h4>
<p className="text-sm text-slate-500 mt-1">The pass pays for itself often within a single booking.</p>
</div>
</div>
</div>
</div>
<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 h-full flex items-center justify-center">
<div className="text-center">
<div className="inline-block p-4 rounded-full bg-white shadow-sm mb-4">
<span className="iconify text-[#32723B]" data-icon="lucide:pie-chart" data-width="48"></span>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Data-Driven Impact</h3>
<p className="text-sm text-slate-500 max-w-xs mx-auto">
                            Receive annual reports detailing the carbon footprint reduction achieved by your company's travel choices.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-medium select-none hover:bg-slate-50 transition-colors">
                        Is there a minimum number of employees required?
                        <span className="iconify transform transition-transform group-open:rotate-180 text-slate-400" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-slate-500 leading-relaxed">
                        No, we work with companies of all sizes. However, we offer tiered pricing volume discounts for organizations enrolling more than 50 employees.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-medium select-none hover:bg-slate-50 transition-colors">
                        How do you verify the sustainability of the hotels?
                        <span className="iconify transform transition-transform group-open:rotate-180 text-slate-400" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-slate-500 leading-relaxed">
                        We use a rigorous proprietary auditing system combined with third-party certifications. Properties are categorized into Eco-Friendly, Sustainable, or Certified based on their operational impact.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-medium select-none hover:bg-slate-50 transition-colors">
                        Can the pass be used for personal travel?
                        <span className="iconify transform transition-transform group-open:rotate-180 text-slate-400" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-slate-500 leading-relaxed">
                        Absolutely. This is a key benefit. Once an employee has the pass, they can use it for business trips, personal vacations, or family holidays without restriction.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-medium select-none hover:bg-slate-50 transition-colors">
                        What is the integration process like?
                        <span className="iconify transform transition-transform group-open:rotate-180 text-slate-400" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-slate-500 leading-relaxed">
                        It's seamless. We provide a branded landing page for your company. You simply distribute the access codes or we can integrate via SSO (Single Sign-On) for enterprise clients.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-[#32723B]" id="demo">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                Ready to transform your corporate benefits?
            </h2>
<p className="text-[#709B73] text-lg mb-10 font-light max-w-2xl mx-auto text-white/80">
                Join hundreds of forward-thinking companies using Green Habitat to retain talent and support the planet.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-medium text-[#32723B] shadow-lg hover:bg-slate-100 transition-all">
                    Schedule a Live Demo
                </button>
<button className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-white/30 bg-[#32723B] px-8 py-4 text-sm font-medium text-white shadow-sm hover:bg-[#2A6232] transition-all">
                    Get Your 1-Year Advantage Pass
                </button>
</div>
<p className="mt-8 text-xs text-white/40">
                © 2024 Green Habitat. All rights reserved.
            </p>
</div>
</section>

    </>
  );
}
