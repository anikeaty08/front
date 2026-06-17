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



tailwind.config = {
theme: {
extend: {
colors: {
deep: '#211E1F',      // Primary Dark (Headings)
body: '#504C4D',      // Primary Text
accent: '#E49A6B',    // Soft Accent (Icons, Brand)
strong: '#AD5207',    // Strong Accent (Highlights, Buttons)
bone: '#EEEEE9',      // Module Background
white: '#FFFFFF',
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}

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
      

<header className="w-full relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-24">

<div className="absolute inset-0 decorative-grid opacity-40 pointer-events-none"></div>
<div className="absolute top-10 right-0 lg:right-20 opacity-5 pointer-events-none">
<iconify-icon className="text-deep rotate-12" icon="lucide:diamond" width="300"></iconify-icon>
</div>
<div className="w-full max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row lg:items-end gap-12">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-3 border border-deep/10 bg-bone px-4 py-1.5 rounded-full mb-8">
<iconify-icon className="text-accent" icon="lucide:gem" width="14"></iconify-icon>
<span className="text-xs font-semibold tracking-wide uppercase text-deep">Jewelry Supply Chain Compliance</span>
</div>
<h1 className="text-4xl lg:text-7xl font-semibold tracking-tighter text-deep leading-[1.05] mb-8">
                        Global Compliance <br/>
<span className="font-serif italic font-normal text-accent pr-4">Certification</span>
<span className="text-deep/80">Solutions</span>
</h1>
<p className="text-lg text-body font-light max-w-xl leading-relaxed mb-10 border-l-2 border-accent pl-6">
                        Traceable, authoritative compliance for brand OEMs, wholesalers, and cross-border sellers. 
                        <span className="text-strong font-medium">Mitigate risk</span> with verifiable endorsements.
                    </p>
<div className="flex flex-wrap gap-4 gap-x-4 gap-y-4">
<button className="hover:bg-strong transition-all duration-300 flex gap-2 shadow-deep/10 text-sm font-medium text-white rounded pt-3.5 pr-8 pb-3.5 pl-8 shadow-lg gap-x-2 gap-y-2 items-center">
                            Start Certification
                            <iconify-icon className="" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="border-deep/10 text-deep hover:bg-bone transition-colors text-sm font-medium bg-white border rounded pt-3.5 pr-8 pb-3.5 pl-8">
                            Download Brochure
                        </button>
</div>
</div>

<div className="flex-1 lg:pl-12 w-full">
<div className="grid grid-cols-2 gap-4">
<div className="bg-bone p-5 rounded-lg border border-transparent hover:border-accent/30 transition-colors">
<iconify-icon className="text-accent mb-3" icon="lucide:shield-check" strokeWidth="1.5" width="28"></iconify-icon>
<div className="text-2xl font-bold text-deep tracking-tight">100%</div>
<div className="text-xs text-body uppercase tracking-wider mt-1">Pass Rate Guarantee</div>
</div>
<div className="bg-bone p-5 rounded-lg border border-transparent hover:border-accent/30 transition-colors">
<iconify-icon className="text-accent mb-3" icon="lucide:globe-2" strokeWidth="1.5" width="28"></iconify-icon>
<div className="text-2xl font-bold text-deep tracking-tight">27+</div>
<div className="text-xs text-body uppercase tracking-wider mt-1">Markets Covered</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="w-full max-w-7xl mx-auto px-6 py-20">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-deep/5 pb-6">
<div>
<h2 className="text-3xl font-semibold tracking-tighter text-deep mb-3">Market Access Authority</h2>
<p className="text-body/80 font-light">Comprehensive testing scenarios for raw materials and finished jewelry.</p>
</div>
<div className="flex items-center gap-2 text-sm text-strong font-medium mt-4 md:mt-0">
<iconify-icon icon="lucide:check-circle-2" width="16"></iconify-icon>
<span>ISO 17025 Accredited Labs</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="bg-bone rounded-sm p-8 group hover:bg-deep transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-5 transition-opacity">
<iconify-icon className="text-deep group-hover:text-white" icon="lucide:euro" width="64"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-8">
<span className="w-8 h-px bg-strong"></span>
<h3 className="font-semibold text-deep group-hover:text-white tracking-tight text-lg">EU Standards</h3>
</div>
<div className="space-y-5">
<div className="flex flex-col border-l border-deep/10 group-hover:border-white/20 pl-4 py-1">
<span className="font-medium text-sm text-deep group-hover:text-white">CE &amp; REACH SVHC</span>
<span className="text-xs text-body group-hover:text-white/60 mt-1">Nickel Release (EN 1811:2019)</span>
</div>
<div className="flex flex-col border-l border-deep/10 group-hover:border-white/20 pl-4 py-1">
<span className="font-medium text-sm text-deep group-hover:text-white">RoHS Directive</span>
<span className="text-xs text-body group-hover:text-white/60 mt-1">Heavy metal restrictions (Pb, Cd, Hg)</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-deep/5 group-hover:border-white/10">
<span className="text-xs font-medium text-strong group-hover:text-accent">Essential for 27 EU Countries</span>
</div>
</div>
</div>

<div className="bg-bone rounded-sm p-8 group hover:bg-deep transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-5 transition-opacity">
<iconify-icon className="text-deep group-hover:text-white" icon="lucide:flag" width="64"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-8">
<span className="w-8 h-px bg-strong"></span>
<h3 className="font-semibold text-deep group-hover:text-white tracking-tight text-lg">US Standards</h3>
</div>
<div className="space-y-5">
<div className="flex flex-col border-l border-deep/10 group-hover:border-white/20 pl-4 py-1">
<span className="font-medium text-sm text-deep group-hover:text-white">CPSIA (Children's)</span>
<span className="text-xs text-body group-hover:text-white/60 mt-1">Strict Lead &amp; Phthalates limits</span>
</div>
<div className="flex flex-col border-l border-deep/10 group-hover:border-white/20 pl-4 py-1">
<span className="font-medium text-sm text-deep group-hover:text-white">FDA &amp; CA Prop 65</span>
<span className="text-xs text-body group-hover:text-white/60 mt-1">Skin contact material safety</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-deep/5 group-hover:border-white/10">
<span className="text-xs font-medium text-strong group-hover:text-accent">Compliant with Amazon Guidelines</span>
</div>
</div>
</div>

<div className="bg-bone rounded-sm p-8 group hover:bg-deep transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-5 transition-opacity">
<iconify-icon className="text-deep group-hover:text-white" icon="lucide:globe" width="64"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-8">
<span className="w-8 h-px bg-strong"></span>
<h3 className="font-semibold text-deep group-hover:text-white tracking-tight text-lg">Global &amp; Quality</h3>
</div>
<div className="space-y-5">
<div className="flex flex-col border-l border-deep/10 group-hover:border-white/20 pl-4 py-1">
<span className="font-medium text-sm text-deep group-hover:text-white">Physical Testing</span>
<span className="text-xs text-body group-hover:text-white/60 mt-1">Tensile strength, Colorfastness, Corrosion</span>
</div>
<div className="flex flex-col border-l border-deep/10 group-hover:border-white/20 pl-4 py-1">
<span className="font-medium text-sm text-deep group-hover:text-white">Eco-Friendly Audit</span>
<span className="text-xs text-body group-hover:text-white/60 mt-1">Recycled material verification</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-deep/5 group-hover:border-white/10 flex gap-3">
<span className="text-[10px] font-bold tracking-widest uppercase text-deep/40 group-hover:text-white/40">SGS</span>
<span className="text-[10px] font-bold tracking-widest uppercase text-deep/40 group-hover:text-white/40">Intertek</span>
<span className="text-[10px] font-bold tracking-widest uppercase text-deep/40 group-hover:text-white/40">BV</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-bone border-y border-deep/5 py-20">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-10 max-w-2xl">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tighter text-deep mb-3">Compliance Matrix</h2>
<p className="text-body font-light">Reduce cooperation risks with pre-verified one-stop solutions.</p>
</div>
<div className="overflow-hidden bg-white shadow-sm border border-deep/5 rounded-lg">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-deep text-white text-xs uppercase tracking-widest">
<th className="p-5 font-medium w-1/4">Target Market</th>
<th className="p-5 font-medium w-2/5">Mandatory Checks</th>
<th className="p-5 font-medium">B2B Support</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-bone">
<tr className="hover:bg-bone/30 transition-colors">
<td className="p-5 font-semibold text-deep">EU (including UK)</td>
<td className="p-5 text-body">
<span className="bg-bone px-2 py-1 rounded text-xs mr-2 text-deep">CE</span>
<span className="bg-bone px-2 py-1 rounded text-xs mr-2 text-deep">RoHS</span>
<span className="bg-bone px-2 py-1 rounded text-xs text-deep">Nickel Release</span>
</td>
<td className="p-5 text-body/80 italic">Customs-approved English reports.</td>
</tr>
<tr className="hover:bg-bone/30 transition-colors">
<td className="p-5 font-semibold text-deep">North America</td>
<td className="p-5 text-body">
<span className="bg-bone px-2 py-1 rounded text-xs mr-2 text-deep">CPSIA</span>
<span className="bg-bone px-2 py-1 rounded text-xs mr-2 text-deep">FDA</span>
<span className="bg-bone px-2 py-1 rounded text-xs text-deep">Lead Content</span>
</td>
<td className="p-5 text-body/80 italic"><span className="text-strong not-italic font-medium">Amazon Category Filing</span> assistance.</td>
</tr>
<tr className="hover:bg-bone/30 transition-colors">
<td className="p-5 font-semibold text-deep">Global E-commerce</td>
<td className="p-5 text-body">
<span className="bg-bone px-2 py-1 rounded text-xs mr-2 text-deep">Physical Tests</span>
<span className="bg-bone px-2 py-1 rounded text-xs text-deep">Composition</span>
</td>
<td className="p-5 text-body/80 italic">Free compliance pre-audit to avoid delisting.</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-24">
<div className="mb-16 text-center">
<span className="text-accent text-xs font-bold tracking-widest uppercase mb-2 block">Supply Chain Transparency</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-deep">From Material to Market</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px border-t border-dashed border-deep/20 -z-10"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-bone rounded-full border border-deep/5 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 relative">
<span className="absolute top-0 right-0 w-6 h-6 bg-deep text-white text-[10px] flex items-center justify-center rounded-full font-bold">01</span>
<iconify-icon className="text-accent" icon="lucide:layers" strokeWidth="1.2" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-deep uppercase tracking-wide mb-2">Raw Material</h3>
<p className="text-xs text-body leading-relaxed max-w-[200px]">
                    Spectrographic analysis of Copper, Steel, Zinc. Screening for prohibited Lead/Cadmium.
                </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-bone rounded-full border border-deep/5 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 relative">
<span className="absolute top-0 right-0 w-6 h-6 bg-deep text-white text-[10px] flex items-center justify-center rounded-full font-bold">02</span>
<iconify-icon className="text-accent" icon="lucide:hammer" strokeWidth="1.2" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-deep uppercase tracking-wide mb-2">Plating Check</h3>
<p className="text-xs text-body leading-relaxed max-w-[200px]">
                    Thickness (micron) and adhesion testing to prevent oxidation, fading, or peeling.
                </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-bone rounded-full border border-deep/5 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 relative">
<span className="absolute top-0 right-0 w-6 h-6 bg-deep text-white text-[10px] flex items-center justify-center rounded-full font-bold">03</span>
<iconify-icon className="text-accent" icon="lucide:test-tube-2" strokeWidth="1.2" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-deep uppercase tracking-wide mb-2">Finished Lab Test</h3>
<p className="text-xs text-body leading-relaxed max-w-[200px]">
                    Full hazardous substance screening per specific market regulations (REACH/CPSIA).
                </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-bone rounded-full border border-deep/5 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 relative">
<span className="absolute top-0 right-0 w-6 h-6 bg-deep text-white text-[10px] flex items-center justify-center rounded-full font-bold">04</span>
<iconify-icon className="text-accent" icon="lucide:qr-code" strokeWidth="1.2" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-deep uppercase tracking-wide mb-2">Digital Traceability</h3>
<p className="text-xs text-body leading-relaxed max-w-[200px]">
                    Unique batch ID generation. Verification reports linked to order manifest.
                </p>
</div>
</div>
</section>

<section className="w-full bg-bone py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tighter text-deep mb-2">B2B Customization</h2>
<p className="text-body font-light">Tailored solutions for high-volume jewelry commerce.</p>
</div>
<button className="text-strong text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all mt-4 md:mt-0">
                    View Service Catalog <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white p-8 rounded border border-deep/5 hover:border-accent/50 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-bone rounded text-deep">
<iconify-icon icon="lucide:file-edit" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2 py-1 rounded">Branding</span>
</div>
<h3 className="text-lg font-medium text-deep mb-2">White-Label Reports</h3>
<p className="text-sm text-body leading-relaxed">
                        Add specific tests (sweat/oxidation resistance) and mark buyer's brand name directly on the certification documents.
                    </p>
</div>

<div className="bg-white p-8 rounded border border-deep/5 hover:border-accent/50 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-bone rounded text-deep">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2 py-1 rounded">72H Speed</span>
</div>
<h3 className="text-lg font-medium text-deep mb-2">Expedited Testing</h3>
<p className="text-sm text-body leading-relaxed">
                        Priority laboratory channel for urgent supply chain needs. Basic composition reports generated within 72 hours.
                    </p>
</div>

<div className="bg-white p-8 rounded border border-deep/5 hover:border-accent/50 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-bone rounded text-deep">
<iconify-icon icon="lucide:book-open" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2 py-1 rounded">Consulting</span>
</div>
<h3 className="text-lg font-medium text-deep mb-2">Policy Interpretation</h3>
<p className="text-sm text-body leading-relaxed">
                        Free monthly updates on global regulations (Prop 65 updates, new REACH SVHCs) to preemptively adjust production.
                    </p>
</div>

<div className="bg-white p-8 rounded border border-deep/5 hover:border-accent/50 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-bone rounded text-deep">
<iconify-icon icon="lucide:layout-grid" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2 py-1 rounded">Traceability</span>
</div>
<h3 className="text-lg font-medium text-deep mb-2">Batch Management</h3>
<p className="text-sm text-body leading-relaxed">
                        One-click retrieval of historical reports matching specific SKU batches. Essential for handling consumer inquiries.
                    </p>
</div>
</div>
</div>
</section>

<section className="w-full max-w-3xl mx-auto px-6 py-20">
<h2 className="text-2xl font-semibold tracking-tighter text-deep mb-10 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-bone rounded border border-transparent hover:border-deep/10 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-5 font-medium text-deep">
                    Is the certification recognized by Amazon/eBay?
                    <iconify-icon className="text-strong group-open:rotate-45 transition-transform" icon="lucide:plus" width="20"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-body leading-relaxed">
<span className="text-strong font-semibold">Yes.</span> All reports are issued by ILAC-MRA signatories (ISO 17025 labs) and are fully accepted for Amazon Seller Central compliance filing.
                </div>
</details>
<details className="group bg-bone rounded border border-transparent hover:border-deep/10 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-5 font-medium text-deep">
                    Do I need separate reports for every color variation?
                    <iconify-icon className="text-strong group-open:rotate-45 transition-transform" icon="lucide:plus" width="20"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-body leading-relaxed">
                    Generally, if the base material and plating method are identical, we can group variations into a single composite test report to <span className="text-strong font-semibold">save costs</span>.
                </div>
</details>
<details className="group bg-bone rounded border border-transparent hover:border-deep/10 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-5 font-medium text-deep">
                    What is the validity period of a test report?
                    <iconify-icon className="text-strong group-open:rotate-45 transition-transform" icon="lucide:plus" width="20"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-body leading-relaxed">
                    Industry standard is 1 year. However, if raw materials change or regulations are updated (e.g., new REACH substances added), re-testing is recommended.
                </div>
</details>
</div>
</section>

<section className="w-full px-6 pb-20">
<div className="max-w-7xl mx-auto bg-deep rounded-xl p-10 md:p-20 text-center shadow-2xl relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
<div className="absolute -top-24 -right-24 w-96 h-96 bg-accent rounded-full blur-[100px]"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-strong rounded-full blur-[80px]"></div>
</div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-bone mb-6">
                    Secure Your Market Access
                </h2>
<p className="text-bone/60 max-w-2xl mx-auto mb-12 font-light text-lg">
                    Free pre-compliance review for new customers. Ensure your jewelry meets global standards before mass production.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-strong text-white hover:bg-[#c26210] transition-colors px-8 py-4 rounded text-sm font-medium flex items-center justify-center gap-2 w-full sm:w-auto min-w-[200px]">
<iconify-icon icon="lucide:message-circle" width="18"></iconify-icon>
                        Consult Expert
                    </button>
<button className="bg-transparent border border-bone/20 text-bone hover:bg-bone/10 transition-colors px-8 py-4 rounded text-sm font-medium flex items-center justify-center gap-2 w-full sm:w-auto min-w-[200px]">
<iconify-icon icon="lucide:file-text" width="18"></iconify-icon>
                        Sample Report
                    </button>
</div>
<div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 text-xs text-bone/40 uppercase tracking-widest">
<span>Email: compliance@service.com</span>
<span>•</span>
<span>Response Time: &lt; 2 Hours</span>
</div>
</div>
</div>
</section>

    </>
  );
}
