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
      

<div className="w-full max-w-6xl bg-[#EEEEE9] rounded-xl shadow-2xl border border-[#D4D4D0] overflow-hidden flex flex-col relative">

<div className="bg-[#211E1F] h-11 flex items-center px-4 justify-between shrink-0 z-20">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
</div>
<div className="bg-[#3A3637] text-[#888] text-xs px-32 py-1 rounded-md hidden md:block select-none truncate max-w-lg tracking-wide">
                factory-case-study.com/project-butterfly
            </div>
<div className="w-10"></div> 
</div>

<div className="overflow-y-auto h-[85vh] w-full scroll-smooth">

<section className="relative">

<div className="w-full h-80 md:h-96 bg-[#D4D4D0] relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#211E1F]/50"></div>
<img alt="Butterfly Necklace Production" className="w-full h-full object-cover opacity-90 grayscale-[20%]" src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&amp;w=2535&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-6 md:p-10 w-full text-[#EEEEE9]">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-1 text-xs uppercase tracking-widest border border-[#E49A6B] text-[#E49A6B] rounded bg-[#211E1F]/80 backdrop-blur-sm">Case Study</span>
<span className="px-2 py-1 text-xs uppercase tracking-widest border border-white/20 text-white/80 rounded bg-[#211E1F]/80 backdrop-blur-sm">B2B Manufacturing</span>
</div>
<h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-2">Project Butterfly: Precision Casting</h1>
<p className="text-white/80 text-sm md:text-base max-w-2xl font-light">
                            Custom stainless steel jewelry production for an emerging designer brand.
                        </p>
</div>
</div>

<div className="bg-white border-b border-[#D4D4D0]">
<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#D4D4D0]">
<div className="p-6 text-center">
<p className="text-[#E49A6B] text-2xl md:text-3xl font-medium tracking-tight">7 Days</p>
<p className="text-[#504C4D] text-xs uppercase tracking-wider mt-1">Sampling Cycle</p>
</div>
<div className="p-6 text-center">
<p className="text-[#E49A6B] text-2xl md:text-3xl font-medium tracking-tight">15 Days</p>
<p className="text-[#504C4D] text-xs uppercase tracking-wider mt-1">Mass Delivery</p>
</div>
<div className="p-6 text-center">
<p className="text-[#E49A6B] text-2xl md:text-3xl font-medium tracking-tight">99.8%</p>
<p className="text-[#504C4D] text-xs uppercase tracking-wider mt-1">Qualification Rate</p>
</div>
<div className="p-6 text-center">
<p className="text-[#E49A6B] text-2xl md:text-3xl font-medium tracking-tight">100%</p>
<p className="text-[#504C4D] text-xs uppercase tracking-wider mt-1">Repurchase Rate</p>
</div>
</div>
</div>

<div className="bg-[#EEEEE9] px-6 py-6 border-b border-[#D4D4D0] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-[#504C4D]">
<div className="flex items-center gap-2">
<span className="iconify text-[#211E1F]" data-icon="lucide:gem" data-width="18"></span>
<span><strong className="font-semibold text-[#211E1F]">Core Material:</strong> 316L Stainless Steel (Medical Grade)</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-[#211E1F]" data-icon="lucide:shield-check" data-width="18"></span>
<span>Allergy-proof &amp; Corrosion-resistant</span>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
<div className="mb-10">
<h2 className="text-2xl font-medium tracking-tight text-[#211E1F]">The Challenge</h2>
<p className="text-[#AD5207] text-sm mt-2 font-medium">Overcoming previous supplier failures to meet global standards.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-8 rounded-lg shadow-sm border border-[#D4D4D0]/50">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded bg-[#E49A6B]/10 flex items-center justify-center text-[#E49A6B]">
<span className="iconify" data-icon="lucide:target" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-[#211E1F] tracking-tight">Core Requirements</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-[#504C4D]">
<span className="iconify text-[#211E1F] mt-0.5 shrink-0" data-icon="lucide:check" data-width="16"></span>
<span>Strict restoration of butterfly wing curvature and hollow ratio details.</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#504C4D]">
<span className="iconify text-[#211E1F] mt-0.5 shrink-0" data-icon="lucide:check" data-width="16"></span>
<span>Nickel-free, compliant with international environmental standards.</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#504C4D]">
<span className="iconify text-[#211E1F] mt-0.5 shrink-0" data-icon="lucide:check" data-width="16"></span>
<span>Batch consistency for 5,000 units (size &amp; craftsmanship).</span>
</li>
</ul>
</div>

<div className="bg-[#F8F5F2] p-8 rounded-lg border border-[#E49A6B]/20">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded bg-[#AD5207]/10 flex items-center justify-center text-[#AD5207]">
<span className="iconify" data-icon="lucide:alert-triangle" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-[#211E1F] tracking-tight">Previous Pain Points</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-[#504C4D]">
<span className="iconify text-[#AD5207] mt-0.5 shrink-0" data-icon="lucide:x" data-width="16"></span>
<span>Low restoration accuracy; detail deviation in previous samples.</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#504C4D]">
<span className="iconify text-[#AD5207] mt-0.5 shrink-0" data-icon="lucide:x" data-width="16"></span>
<span>Oxidation and connector breakage issues during mass production.</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#504C4D]">
<span className="iconify text-[#AD5207] mt-0.5 shrink-0" data-icon="lucide:x" data-width="16"></span>
<span>Delayed response to revision requests and low efficiency.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="bg-white py-16 px-6 md:px-12 border-y border-[#D4D4D0]">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
<div>
<h2 className="text-2xl font-medium tracking-tight text-[#211E1F]">Execution Process</h2>
<p className="text-[#AD5207] text-sm mt-2 font-medium">Transparent professionalism from file to finished product.</p>
</div>
</div>
<div className="relative">

<div className="absolute left-6 top-8 bottom-8 w-px bg-[#EEEEE9] md:left-8 hidden md:block z-0"></div>
<div className="space-y-12 relative z-10">

<div className="flex flex-col md:flex-row gap-6 md:gap-10 group">
<div className="shrink-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#EEEEE9] text-[#211E1F] rounded-full border border-[#D4D4D0] font-medium text-lg">01</div>
<div className="flex-1">
<h3 className="text-lg font-medium text-[#211E1F] mb-2 flex items-center gap-2">
                                        Handover &amp; Confirmation
                                        <span className="text-xs text-[#504C4D] bg-[#EEEEE9] px-2 py-0.5 rounded border border-[#D4D4D0]">1-2 Days</span>
</h3>
<p className="text-sm text-[#504C4D] mb-3 leading-relaxed">
                                        Received AI/CDR design. Held technical meeting to lock down the butterfly wing welding process, 40+5cm adjustable chain specs, and surface finishing (brushed/polished).
                                    </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 md:gap-10 group">
<div className="shrink-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#EEEEE9] text-[#211E1F] rounded-full border border-[#D4D4D0] font-medium text-lg">02</div>
<div className="flex-1">
<h3 className="text-lg font-medium text-[#211E1F] mb-2 flex items-center gap-2">
                                        Sample Optimization
                                        <span className="text-xs text-[#504C4D] bg-[#EEEEE9] px-2 py-0.5 rounded border border-[#D4D4D0]">3-7 Days</span>
</h3>
<p className="text-sm text-[#504C4D] mb-3 leading-relaxed">
                                        Addressed initial feedback on sharp wing edges and stiff clasps. 
                                        <span className="text-[#AD5207]">Turnaround in 48 hours</span>: Optimized edge chamfering and upgraded clasp spring. Finalized with 3 confirmation samples + material reports.
                                    </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 md:gap-10 group">
<div className="shrink-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#EEEEE9] text-[#211E1F] rounded-full border border-[#D4D4D0] font-medium text-lg">03</div>
<div className="flex-1">
<h3 className="text-lg font-medium text-[#211E1F] mb-2 flex items-center gap-2">
                                        Mass Production &amp; QC
                                        <span className="text-xs text-[#504C4D] bg-[#EEEEE9] px-2 py-0.5 rounded border border-[#D4D4D0]">10-15 Days</span>
</h3>
<div className="grid md:grid-cols-2 gap-4">
<div className="p-4 bg-[#F9F9F9] rounded border border-[#EEEEE9]">
<p className="text-xs font-semibold text-[#211E1F] uppercase tracking-wider mb-2">Process</p>
<p className="text-xs text-[#504C4D]">Mold → Stamping → Welding → Surface Treatment → Assembly.</p>
</div>
<div className="p-4 bg-[#F9F9F9] rounded border border-[#EEEEE9]">
<p className="text-xs font-semibold text-[#211E1F] uppercase tracking-wider mb-2">Three-Layer QC</p>
<p className="text-xs text-[#504C4D]">Raw material SGS check, semi-finished burr inspection, finished dimensional tolerance ±0.1mm.</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 md:gap-10 group">
<div className="shrink-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#EEEEE9] text-[#211E1F] rounded-full border border-[#D4D4D0] font-medium text-lg">04</div>
<div className="flex-1">
<h3 className="text-lg font-medium text-[#211E1F] mb-2 flex items-center gap-2">
                                        Delivery &amp; After-Sales
                                        <span className="text-xs text-[#504C4D] bg-[#EEEEE9] px-2 py-0.5 rounded border border-[#D4D4D0]">1-2 Days</span>
</h3>
<p className="text-sm text-[#504C4D] mb-3 leading-relaxed">
                                        B2B-ready packaging (OPP + Anti-oxidation + labeled cartons). Delivered 5,000 units with test reports and <span className="text-[#AD5207]">1% spare parts</span> for non-human damage replacement.
                                    </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-16 max-w-6xl mx-auto">
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-lg shadow-sm border border-[#D4D4D0] hover:border-[#E49A6B] transition-colors duration-300">
<div className="w-10 h-10 rounded-full bg-[#EEEEE9] flex items-center justify-center text-[#211E1F] mb-4">
<span className="iconify" data-icon="lucide:microscope" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h4 className="text-base font-medium text-[#211E1F] mb-2 tracking-tight">Detail Restoration</h4>
<p className="text-xs text-[#504C4D] leading-relaxed">
                            CNC precision carving with hollow ratio deviation ≤0.05mm. Supports complex "partial brushing + overall polishing" combinations.
                        </p>
</div>

<div className="bg-white p-6 rounded-lg shadow-sm border border-[#D4D4D0] hover:border-[#E49A6B] transition-colors duration-300">
<div className="w-10 h-10 rounded-full bg-[#EEEEE9] flex items-center justify-center text-[#211E1F] mb-4">
<span className="iconify" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h4 className="text-base font-medium text-[#211E1F] mb-2 tracking-tight">Material Guarantee</h4>
<p className="text-xs text-[#504C4D] leading-relaxed">
                            EU REACH &amp; US FDA certified 316L steel. Three strict checkpoints (First article, In-process, Final) eliminate batch risks.
                        </p>
</div>

<div className="bg-white p-6 rounded-lg shadow-sm border border-[#D4D4D0] hover:border-[#E49A6B] transition-colors duration-300">
<div className="w-10 h-10 rounded-full bg-[#EEEEE9] flex items-center justify-center text-[#211E1F] mb-4">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h4 className="text-base font-medium text-[#211E1F] mb-2 tracking-tight">Agile Communication</h4>
<p className="text-xs text-[#504C4D] leading-relaxed">
                            1-on-1 account manager with ≤24h revision response. Live visual production links for real-time node tracking.
                        </p>
</div>
</div>
</section>

<section className="bg-[#211E1F] px-6 md:px-12 py-20 text-[#EEEEE9]">
<div className="max-w-4xl mx-auto text-center">
<span className="iconify inline-block text-[#E49A6B] mb-6 opacity-50" data-icon="lucide:quote" data-strokeWidth="1" data-width="48"></span>
<blockquote className="text-xl md:text-2xl font-light italic leading-relaxed tracking-tight mb-8">
                        "From sampling to mass delivery, professionalism is reflected in every detail. The restoration accuracy exceeded expectations... stable quality control gives us no worries about subsequent replenishments."
                    </blockquote>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#504C4D] flex items-center justify-center text-xs font-semibold tracking-tighter">DIR</div>
<div className="text-left">
<p className="text-sm font-medium text-[#E49A6B]">Client Representative</p>
<p className="text-xs text-[#504C4D] text-[#EEEEE9]/60">Purchasing Director, Fashion Jewelry Brand</p>
</div>
</div>
</div>
</section>

<section className="bg-[#EEEEE9] px-6 py-16 text-center border-b border-[#D4D4D0]">
<h2 className="text-2xl font-medium tracking-tight text-[#211E1F] mb-6">Ready to realize your design?</h2>
<div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
<button className="bg-[#E49A6B] hover:bg-[#D08B5E] text-[#211E1F] px-6 py-3 rounded text-sm font-semibold transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:upload-cloud" data-width="18"></span>
                        Submit Design for Evaluation
                    </button>
<button className="bg-white border border-[#D4D4D0] hover:border-[#211E1F] text-[#211E1F] px-6 py-3 rounded text-sm font-medium transition-colors">
                        Get Custom Quotation
                    </button>
<button className="text-[#504C4D] hover:text-[#E49A6B] px-6 py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2">
                        Inquire About Sample Cycle
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
<div className="text-xs text-[#504C4D] space-y-1">
<p>Supports: Stainless steel/titanium jewelry (Necklaces, Bracelets, Earrings)</p>
<p>MOQ: 100 units (Negotiable for mass orders)</p>
<p className="text-[#AD5207]">Contact: Online Form / WeChat Work / Phone (9:00-18:00)</p>
</div>
</section>

<section className="bg-white px-6 md:px-12 py-16">
<h3 className="text-sm font-semibold text-[#504C4D] uppercase tracking-wider mb-8">More Customization Cases</h3>
<div className="grid md:grid-cols-3 gap-6">

<a className="group block" href="#">
<div className="h-40 bg-[#EEEEE9] rounded mb-3 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-[#D4D4D0]">
<span className="iconify group-hover:scale-110 transition-transform duration-500" data-icon="lucide:box" data-width="40"></span>
</div>
</div>
<h4 className="text-sm font-medium text-[#211E1F] group-hover:text-[#E49A6B] transition-colors">Geometric Bracelets</h4>
<p className="text-xs text-[#504C4D] mt-1">Cross-border Brand • 10,000 units</p>
</a>

<a className="group block" href="#">
<div className="h-40 bg-[#EEEEE9] rounded mb-3 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-[#D4D4D0]">
<span className="iconify group-hover:scale-110 transition-transform duration-500" data-icon="lucide:ear" data-width="40"></span>
</div>
</div>
<h4 className="text-sm font-medium text-[#211E1F] group-hover:text-[#E49A6B] transition-colors">Allergy-proof Earrings</h4>
<p className="text-xs text-[#504C4D] mt-1">Offline Chain Brand • Sampling + Production</p>
</a>

<a className="group block" href="#">
<div className="h-40 bg-[#EEEEE9] rounded mb-3 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-[#D4D4D0]">
<span className="iconify group-hover:scale-110 transition-transform duration-500" data-icon="lucide:stamp" data-width="40"></span>
</div>
</div>
<h4 className="text-sm font-medium text-[#211E1F] group-hover:text-[#E49A6B] transition-colors">Logo Custom Necklaces</h4>
<p className="text-xs text-[#504C4D] mt-1">Corporate Gift • Custom Branding</p>
</a>
</div>
</section>
</div>
</div>

    </>
  );
}
