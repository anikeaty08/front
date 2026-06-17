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



        lucide.createIcons();
    
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
      

<div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200">

<div className="bg-white border-b border-neutral-100 px-4 py-3 flex items-center gap-2 sticky top-0 z-50">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="flex-1 text-center">
<div className="bg-gray-50 text-[#504C4D] text-xs py-1 px-3 rounded-md inline-flex items-center gap-2 font-medium tracking-tight mx-auto border border-gray-100">
<i className="w-3 h-3 text-[#AD5207]" data-lucide="lock"></i>
                    secure.luxuryb2b.com/compliance
                </div>
</div>
</div>

<div className="overflow-y-auto h-[85vh] bg-white relative">

<div className="px-6 py-16 sm:px-12 text-center max-w-4xl mx-auto">
<span className="text-[#AD5207] text-xs font-semibold uppercase tracking-widest mb-3 block">Global Standards</span>
<h1 className="text-[#211E1F] text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
                    Certification &amp; Compliance
                </h1>
<p className="text-[#504C4D] text-lg leading-relaxed max-w-2xl mx-auto">
                    Transparency is the new luxury. We ensure every piece meets stringent global standards for material safety, ethical sourcing, and environmental responsibility.
                </p>
</div>

<section className="px-6 sm:px-12 pb-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#EEEEE9] p-6 rounded-xl border border-transparent hover:border-[#E49A6B]/30 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-4 shadow-sm">
<i className="text-[#E49A6B] w-5 h-5" data-lucide="shield-check"></i>
</div>
<h3 className="text-[#211E1F] font-semibold tracking-tight text-lg mb-2">Material Safety</h3>
<p className="text-[#504C4D] text-sm leading-relaxed">
                            Full compliance with REACH and Prop 65. Nickel-free, Lead-free, and Cadmium-free alloys guaranteed.
                        </p>
</div>

<div className="bg-[#EEEEE9] p-6 rounded-xl border border-transparent hover:border-[#E49A6B]/30 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-4 shadow-sm">
<i className="text-[#E49A6B] w-5 h-5" data-lucide="gem"></i>
</div>
<h3 className="text-[#211E1F] font-semibold tracking-tight text-lg mb-2">Ethical Sourcing</h3>
<p className="text-[#504C4D] text-sm leading-relaxed">
                            Conflict-free minerals and RJC certified gold plating processes ensuring human rights protection.
                        </p>
</div>

<div className="bg-[#EEEEE9] p-6 rounded-xl border border-transparent hover:border-[#E49A6B]/30 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-4 shadow-sm">
<i className="text-[#E49A6B] w-5 h-5" data-lucide="recycle"></i>
</div>
<h3 className="text-[#211E1F] font-semibold tracking-tight text-lg mb-2">Eco-Conscious</h3>
<p className="text-[#504C4D] text-sm leading-relaxed">
                            Utilization of 100% recycled silver and biodegradable packaging materials for sustainable supply chains.
                        </p>
</div>

<div className="bg-[#EEEEE9] p-6 rounded-xl border border-transparent hover:border-[#E49A6B]/30 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-4 shadow-sm">
<i className="text-[#E49A6B] w-5 h-5" data-lucide="award"></i>
</div>
<h3 className="text-[#211E1F] font-semibold tracking-tight text-lg mb-2">Quality Control</h3>
<p className="text-[#504C4D] text-sm leading-relaxed">
                            ISO 9001 certified manufacturing facilities with a 3-step physical inspection process.
                        </p>
</div>
</div>
</section>

<section className="px-6 sm:px-12 pb-16">
<div className="mb-6 flex items-end justify-between">
<div>
<h2 className="text-[#211E1F] text-2xl font-semibold tracking-tight">Market Compliance Matrix</h2>
<p className="text-[#504C4D] text-sm mt-1">Regulatory adherence across key global markets.</p>
</div>
<button className="hidden sm:flex items-center gap-2 text-[#AD5207] text-sm font-medium hover:text-[#E49A6B] transition-colors">
<i className="w-4 h-4" data-lucide="download"></i> Download Full Matrix
                    </button>
</div>
<div className="bg-[#EEEEE9] rounded-xl overflow-hidden border border-neutral-100">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-neutral-200">
<th className="p-4 text-[#211E1F] text-xs font-semibold uppercase tracking-wider">Region</th>
<th className="p-4 text-[#211E1F] text-xs font-semibold uppercase tracking-wider">Regulation / Standard</th>
<th className="p-4 text-[#211E1F] text-xs font-semibold uppercase tracking-wider">Specific Requirement</th>
<th className="p-4 text-[#211E1F] text-xs font-semibold uppercase tracking-wider">Status</th>
<th className="p-4 text-[#211E1F] text-xs font-semibold uppercase tracking-wider text-right">Validity</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-neutral-200/50 hover:bg-white transition-colors">
<td className="p-4 font-medium text-[#211E1F]">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#E49A6B]" data-lucide="globe-2"></i> Europe (EU)
                                        </div>
</td>
<td className="p-4 text-[#504C4D]">REACH Annex XVII</td>
<td className="p-4 text-[#504C4D]">Nickel Release &lt; 0.5 µg/cm²/week</td>
<td className="p-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#E49A6B]/10 text-[#AD5207]">
                                            Compliant
                                        </span>
</td>
<td className="p-4 text-[#504C4D] text-right font-mono text-xs">2024-2025</td>
</tr>
<tr className="border-b border-neutral-200/50 hover:bg-white transition-colors">
<td className="p-4 font-medium text-[#211E1F]">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#E49A6B]" data-lucide="globe-2"></i> United States
                                        </div>
</td>
<td className="p-4 text-[#504C4D]">California Prop 65</td>
<td className="p-4 text-[#504C4D]">Lead Content &lt; 0.05% (500ppm)</td>
<td className="p-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#E49A6B]/10 text-[#AD5207]">
                                            Compliant
                                        </span>
</td>
<td className="p-4 text-[#504C4D] text-right font-mono text-xs">2024-2025</td>
</tr>
<tr className="border-b border-neutral-200/50 hover:bg-white transition-colors">
<td className="p-4 font-medium text-[#211E1F]">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#E49A6B]" data-lucide="globe-2"></i> United States
                                        </div>
</td>
<td className="p-4 text-[#504C4D]">ASTM F2923-14</td>
<td className="p-4 text-[#504C4D]">Children's Jewelry Safety</td>
<td className="p-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#E49A6B]/10 text-[#AD5207]">
                                            Tested
                                        </span>
</td>
<td className="p-4 text-[#504C4D] text-right font-mono text-xs">Per Batch</td>
</tr>
<tr className="hover:bg-white transition-colors">
<td className="p-4 font-medium text-[#211E1F]">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#E49A6B]" data-lucide="globe-2"></i> Global
                                        </div>
</td>
<td className="p-4 text-[#504C4D]">ISO 9001:2015</td>
<td className="p-4 text-[#504C4D]">Quality Management Systems</td>
<td className="p-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#E49A6B]/10 text-[#AD5207]">
                                            Certified
                                        </span>
</td>
<td className="p-4 text-[#504C4D] text-right font-mono text-xs">Exp 2026</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="px-6 sm:px-12 pb-16">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-1 flex flex-col justify-center">
<div className="bg-[#E49A6B] w-12 h-1 mb-6 rounded-full"></div>
<h2 className="text-[#211E1F] text-2xl font-semibold tracking-tight mb-4">Traceability &amp; Reports</h2>
<p className="text-[#504C4D] text-sm leading-relaxed mb-6">
                            We believe in verifiable trust. Access our library of third-party testing reports from SGS, Intertek, and BV. Every production batch is traceable to its raw material source.
                        </p>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 text-sm text-[#211E1F]">
<i className="text-[#E49A6B] w-4 h-4" data-lucide="check-circle-2"></i>
<span>Batch-level material tracking</span>
</div>
<div className="flex items-center gap-3 text-sm text-[#211E1F]">
<i className="text-[#E49A6B] w-4 h-4" data-lucide="check-circle-2"></i>
<span>Quarterly random audits</span>
</div>
<div className="flex items-center gap-3 text-sm text-[#211E1F]">
<i className="text-[#E49A6B] w-4 h-4" data-lucide="check-circle-2"></i>
<span>Digital certificates available</span>
</div>
</div>
</div>

<div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="bg-[#EEEEE9] p-5 rounded-xl border border-transparent group hover:bg-[#E49A6B] transition-all duration-300">
<div className="flex items-start justify-between mb-8">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#211E1F] font-bold text-xs tracking-tighter">
                                    SGS
                                </div>
<i className="w-5 h-5 text-[#AD5207] group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<div>
<h4 className="text-[#211E1F] font-medium mb-1 group-hover:text-white">Heavy Metal Analysis</h4>
<p className="text-[#504C4D] text-xs group-hover:text-white/80">Report #SGS-2023-8892 • Oct 2023</p>
</div>
</div>

<div className="bg-[#EEEEE9] p-5 rounded-xl border border-transparent group hover:bg-[#E49A6B] transition-all duration-300">
<div className="flex items-start justify-between mb-8">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#211E1F] font-bold text-xs tracking-tighter">
                                    ITS
                                </div>
<i className="w-5 h-5 text-[#AD5207] group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<div>
<h4 className="text-[#211E1F] font-medium mb-1 group-hover:text-white">Physical Testing (Pull)</h4>
<p className="text-[#504C4D] text-xs group-hover:text-white/80">Report #ITS-8821-Q • Nov 2023</p>
</div>
</div>

<div className="bg-[#EEEEE9] p-5 rounded-xl border border-transparent group hover:bg-[#E49A6B] transition-all duration-300">
<div className="flex items-start justify-between mb-8">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#211E1F] font-bold text-xs tracking-tighter">
                                    BV
                                </div>
<i className="w-5 h-5 text-[#AD5207] group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<div>
<h4 className="text-[#211E1F] font-medium mb-1 group-hover:text-white">Plating Thickness</h4>
<p className="text-[#504C4D] text-xs group-hover:text-white/80">Report #BV-9902-A • Sep 2023</p>
</div>
</div>

<div className="bg-[#EEEEE9] p-5 rounded-xl border border-transparent group hover:bg-[#E49A6B] transition-all duration-300">
<div className="flex items-start justify-between mb-8">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#211E1F] font-bold text-xs tracking-tighter">
                                    RJC
                                </div>
<i className="w-5 h-5 text-[#AD5207] group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<div>
<h4 className="text-[#211E1F] font-medium mb-1 group-hover:text-white">CoC Certification</h4>
<p className="text-[#504C4D] text-xs group-hover:text-white/80">Chain of Custody • Valid 2025</p>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 sm:px-12 pb-16">
<div className="bg-[#211E1F] rounded-2xl p-8 sm:p-12 relative overflow-hidden">

<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#E49A6B] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="max-w-xl">
<h2 className="text-white text-2xl font-semibold tracking-tight mb-3">Custom Testing Protocols</h2>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Does your brand require specific testing parameters? We offer bespoke certification services, coordinating directly with labs to meet your unique market entry requirements.
                            </p>
<div className="flex gap-4">
<div className="flex items-center gap-2 text-[#E49A6B] text-xs font-medium uppercase tracking-wider">
<i className="w-4 h-4" data-lucide="microscope"></i> Lab Coordination
                                </div>
<div className="flex items-center gap-2 text-[#E49A6B] text-xs font-medium uppercase tracking-wider">
<i className="w-4 h-4" data-lucide="file-check-2"></i> Custom Reports
                                </div>
</div>
</div>
<div className="flex-shrink-0">
<button className="bg-[#E49A6B] text-[#211E1F] px-6 py-3 rounded-lg font-medium text-sm hover:bg-white transition-colors duration-300 flex items-center gap-2">
                                Request Custom Testing
                                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="px-6 sm:px-12 pb-24">
<h2 className="text-[#211E1F] text-2xl font-semibold tracking-tight mb-8 text-center">Common Questions</h2>
<div className="max-w-3xl mx-auto space-y-4">
<details className="group bg-[#EEEEE9] rounded-xl overflow-hidden transition-all duration-300">
<summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-[#211E1F]">
<span>How often are materials tested?</span>
<span className="text-[#AD5207] transition-transform duration-300 group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-5 pb-5 text-[#504C4D] text-sm leading-relaxed">
                            We perform internal testing on every raw material batch upon arrival. Third-party testing via SGS or Intertek is conducted quarterly and upon introduction of any new material supplier to ensure consistent compliance.
                        </div>
</details>
<details className="group bg-[#EEEEE9] rounded-xl overflow-hidden transition-all duration-300">
<summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-[#211E1F]">
<span>Can I use your reports for my retail compliance?</span>
<span className="text-[#AD5207] transition-transform duration-300 group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-5 pb-5 text-[#504C4D] text-sm leading-relaxed">
                            Yes. As a B2B partner, we provide unbranded or re-brandable PDF versions of our technical reports that you can submit to retailers or marketplaces (Amazon, Zalando, etc.) to prove product safety.
                        </div>
</details>
<details className="group bg-[#EEEEE9] rounded-xl overflow-hidden transition-all duration-300">
<summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-[#211E1F]">
<span>Is your gold plating verifiable?</span>
<span className="text-[#AD5207] transition-transform duration-300 group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-5 pb-5 text-[#504C4D] text-sm leading-relaxed">
                            Absolutely. We use X-Ray Fluorescence (XRF) technology to measure plating thickness. Reports detailing the micron thickness (e.g., 1.0 micron, 2.5 micron vermeil) are available for every order.
                        </div>
</details>
<details className="group bg-[#EEEEE9] rounded-xl overflow-hidden transition-all duration-300">
<summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-[#211E1F]">
<span>Do you support specific country regulations?</span>
<span className="text-[#AD5207] transition-transform duration-300 group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-5 pb-5 text-[#504C4D] text-sm leading-relaxed">
                            Our standard production meets EU and US standards. If you require compliance for markets with specific restrictions (e.g., Korea KC mark, Japan Food Sanitation Law for jewelry), please contact our support team for a custom production run.
                        </div>
</details>
</div>
</section>
</div>
</div>


    </>
  );
}
