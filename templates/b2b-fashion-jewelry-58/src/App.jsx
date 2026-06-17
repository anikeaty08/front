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
brand: {
dark: '#211E1F',
gold: '#E49A6B',
gray: '#504C4D',
deep: '#AD5207',
bg: '#EEEEE9',
light: '#FAFAFA'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
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
      

<section className="relative h-screen max-h-[850px] w-full flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Jewelry Craftsmanship" className="w-full h-full object-cover object-center" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gray-100/40 backdrop-blur-[2px]"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-4 w-full h-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">

<div className="hidden lg:flex flex-col gap-6 border-brand-dark/10 h-fit border-l pl-8 gap-x-6 gap-y-6 items-start justify-center">
<div className="flex items-center gap-3 group">
<div className="bg-white/60 rounded-full pt-2 pr-2 pb-2 pl-2 shadow-sm">
<iconify-icon className="text-brand-dark" height="24" icon="lucide:pen-tool" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-brand-dark text-sm font-medium">Professional Design Team</span>
</div>
<div className="flex items-center gap-3 group">
<div className="p-2 bg-white/60 rounded-full shadow-sm">
<iconify-icon className="text-brand-dark" height="24" icon="lucide:search-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-brand-dark">Quality Traceability</span>
</div>
<div className="flex items-center gap-3 group">
<div className="p-2 bg-white/60 rounded-full shadow-sm">
<iconify-icon className="text-brand-dark" height="24" icon="lucide:package-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-brand-dark text-sm font-medium">Exclusive Packaging</span>
</div>
</div><div className="lg:col-span-3 text-center lg:text-center flex flex-col items-center justify-center py-20">
<h1 className="text-brand-dark text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
                    Professional Fashion Jewelry Customization 
                    <span className="text-brand-deep">Empowering Brand Differentiation</span>
</h1>
<p className="text-brand-dark text-base md:text-lg mb-10 max-w-2xl font-medium">
                    OEM/ODM Supported · Small Batch Customizable · 15-Day Rapid Prototyping · Global Shipping
                </p>
<div className="flex flex-col sm:flex-row gap-5">
<button className="hover:bg-brand-deep transition-colors duration-200 flex text-sm font-medium text-white w-[205px] h-10 rounded pr-8 pl-8 items-center justify-center">
                        View Custom Cases
                    </button>
<button className="border-brand-gold text-brand-gold hover:bg-gray-50 transition-colors duration-200 flex text-sm font-medium bg-white w-[205px] h-10 border rounded pr-8 pl-8 items-center justify-center">Get Free Custom</button>
</div>
</div>

</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group p-6 rounded-lg border border-transparent hover:bg-[#f5fafe] transition-all duration-300 hover:shadow-sm">
<div className="mb-4 text-brand-gold">
<iconify-icon icon="lucide:bar-chart-3" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-brand-dark text-base font-semibold mb-3">Flexible Customization Threshold</h3>
<p className="text-sm leading-relaxed">
                        Minimum customization quantity <span className="font-semibold">50 units/style</span>, supporting small-batch trial orders to reduce brand trial and error costs.
                    </p>
</div>

<div className="group p-6 rounded-lg border border-transparent hover:bg-[#f5fafe] transition-all duration-300 hover:shadow-sm">
<div className="mb-4 text-brand-gold">
<iconify-icon icon="lucide:link" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-brand-dark text-base font-semibold mb-3">Full-Link Professional Service</h3>
<p className="text-sm leading-relaxed">
                        One-stop customization service from demand communication, design drawing, prototyping to mass production, quality inspection and delivery.
                    </p>
</div>

<div className="group p-6 rounded-lg border border-transparent hover:bg-[#f5fafe] transition-all duration-300 hover:shadow-sm">
<div className="mb-4 text-brand-gold">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-brand-dark text-base font-semibold mb-3">Rapid Response Efficiency</h3>
<p className="text-sm leading-relaxed">
                        Design plan available in <span className="font-semibold">1-3 days</span>, prototyping completed in <span className="font-semibold">10-15 days</span>, mass production cycle <span className="font-semibold">15-30 days</span>.
                    </p>
</div>

<div className="group p-6 rounded-lg border border-transparent hover:bg-[#f5fafe] transition-all duration-300 hover:shadow-sm">
<div className="mb-4 text-brand-gold">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-brand-dark text-base font-semibold mb-3">Quality and Compliance</h3>
<p className="text-sm leading-relaxed">
                        Compliant with EU REACH and US CPSIA standards, material traceable, each batch attached with quality inspection report.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-bg">
<div className="max-w-7xl mx-auto px-6 space-y-16">

<div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-lg shadow-sm">
<div className="h-48 bg-gray-100 rounded mb-5 overflow-hidden">
<img alt="OEM" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-brand-dark text-base font-semibold mb-2">OEM Customization</h3>
<p className="text-sm leading-relaxed">Undertake processing with provided drawings/samples, support material and process replacement, customizable LOGO and packaging.</p>
</div>

<div className="bg-white p-6 rounded-lg shadow-sm">
<div className="h-48 bg-gray-100 rounded mb-5 overflow-hidden">
<img alt="ODM" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-brand-dark text-base font-semibold mb-2">ODM Customization</h3>
<p className="text-sm leading-relaxed">Provide original design schemes, support style and element adjustment, 3 sets of initial design drafts free of charge.</p>
</div>

<div className="bg-white p-6 rounded-lg shadow-sm">
<div className="h-48 bg-gray-100 rounded mb-5 overflow-hidden">
<img alt="Special" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-brand-dark text-base font-semibold mb-2">Special Customization</h3>
<p className="text-sm leading-relaxed">Corporate gift customization, holiday limited edition customization, co-branded customization, adapting to brand tone.</p>
</div>
</div>
</div>
<div className="border-b border-brand-gray/10"></div>

<div className="space-y-12 relative">

<a className="absolute top-0 right-0 flex items-center gap-1 text-sm text-brand-gold hover:text-brand-deep transition-colors" href="#">
                    View More <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>

<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="w-40 shrink-0 border-b-2 border-brand-gold pb-2">
<h3 className="text-brand-dark text-base font-semibold">Style Coverage</h3>
</div>
<div className="flex-1 flex flex-wrap gap-4">
<div className="flex flex-col items-center gap-2">
<img alt="Light Luxury" className="w-20 h-20 rounded object-cover" src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<span className="text-xs font-medium">Light Luxury</span>
</div>
<div className="flex flex-col items-center gap-2">
<img alt="Retro" className="w-20 h-20 rounded object-cover" src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<span className="text-xs font-medium">Retro Palace</span>
</div>
<div className="flex flex-col items-center gap-2">
<img alt="Ethnic" className="w-20 h-20 rounded object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<span className="text-xs font-medium">Ethnic Style</span>
</div>
<div className="flex flex-col items-center gap-2">
<img alt="Office" className="w-20 h-20 rounded object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<span className="text-xs font-medium">Office</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="w-40 shrink-0 border-b-2 border-brand-gold pb-2">
<h3 className="text-brand-dark text-base font-semibold">Material Selection</h3>
</div>
<div className="flex-1 flex flex-wrap gap-4">
<div className="px-4 py-2 bg-white rounded border border-brand-gray/10 text-sm">
<span className="font-medium text-brand-dark">925 Silver</span> · Hypoallergenic
                        </div>
<div className="px-4 py-2 bg-white rounded border border-brand-gray/10 text-sm">
<span className="font-medium text-brand-dark">Stainless Steel</span> · Durable
                        </div>
<div className="px-4 py-2 bg-white rounded border border-brand-gray/10 text-sm">
<span className="font-medium text-brand-dark">Brass Gold Plated</span> · Color Retention
                        </div>
<div className="px-4 py-2 bg-white rounded border border-brand-gray/10 text-sm">
<span className="font-medium text-brand-dark">Natural Pearl</span> · High Quality
                        </div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="w-40 shrink-0 border-b-2 border-brand-gold pb-2">
<h3 className="text-brand-dark text-base font-semibold">Process Support</h3>
</div>
<div className="flex-1 flex flex-wrap gap-4">
<div className="flex flex-col gap-1 w-24">
<img alt="Engraving" className="w-20 h-20 rounded object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<span className="text-xs font-medium mt-1">Laser Engraving</span>
</div>
<div className="flex flex-col gap-1 w-24">
<img alt="Setting" className="w-20 h-20 rounded object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<span className="text-xs font-medium mt-1">Gem Setting</span>
</div>
<div className="flex flex-col gap-1 w-24">
<img alt="Enamel" className="w-20 h-20 rounded object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="text-xs font-medium mt-1">Cold Enamel</span>
</div>
</div>
</div>
</div>
<div className="border-b border-brand-gray/10"></div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-4">
<h3 className="text-brand-dark text-base font-semibold border-b-[8px] border-brand-gold inline-block leading-[0.5]">Value-Added Packaging</h3>
<p className="text-sm leading-relaxed mt-4">
                        Support customization of gift boxes, storage bags and hangtags, printable with brand LOGO, patterns and texts, providing material options such as paper, leather and flannel, recommending schemes on demand.
                    </p>
</div>
<div className="flex gap-5 overflow-x-auto pb-2">
<img alt="Box" className="w-[100px] h-[100px] object-cover rounded shadow-sm shrink-0" src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Pouch" className="w-[100px] h-[100px] object-cover rounded shadow-sm shrink-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Set" className="w-[100px] h-[100px] object-cover rounded shadow-sm shrink-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img alt="Ribbon" className="w-[100px] h-[100px] object-cover rounded shadow-sm shrink-0" src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl text-brand-dark font-semibold text-center mb-12 tracking-tight">Customization Process</h2>
<div className="relative flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-0">

<div className="hidden lg:block absolute top-[16px] left-0 right-0 h-[1px] bg-gray-200 -z-10 w-[90%] mx-auto"></div>


<div className="w-full lg:w-[140px] flex flex-col items-center text-center bg-white lg:bg-transparent p-4 lg:p-0 rounded border lg:border-none border-gray-100">
<div className="w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center text-sm font-bold mb-4 z-10">1</div>
<iconify-icon className="text-brand-gold mb-3" icon="lucide:message-square" strokeWidth="1.5" width="36"></iconify-icon>
<h4 className="text-brand-dark text-sm font-semibold mb-2">Demand Comm.</h4>
<p className="text-xs text-brand-gray/80 leading-relaxed">Submit customization requirements (style, material, quantity, budget).</p>
<div className="lg:hidden mt-2 text-gray-300"><iconify-icon icon="lucide:arrow-down" width="20"></iconify-icon></div>
</div>

<div className="hidden lg:flex pt-16 text-gray-300"><iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon></div>

<div className="w-full lg:w-[140px] flex flex-col items-center text-center bg-white lg:bg-transparent p-4 lg:p-0 rounded border lg:border-none border-gray-100">
<div className="w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center text-sm font-bold mb-4 z-10">2</div>
<iconify-icon className="text-brand-gold mb-3" icon="lucide:pen-tool" strokeWidth="1.5" width="36"></iconify-icon>
<h4 className="text-brand-dark text-sm font-semibold mb-2">Design Plan</h4>
<p className="text-xs text-brand-gray/80 leading-relaxed">Designers create drawings, free modification until confirmation.</p>
<div className="lg:hidden mt-2 text-gray-300"><iconify-icon icon="lucide:arrow-down" width="20"></iconify-icon></div>
</div>

<div className="hidden lg:flex pt-16 text-gray-300"><iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon></div>

<div className="w-full lg:w-[140px] flex flex-col items-center text-center bg-white lg:bg-transparent p-4 lg:p-0 rounded border lg:border-none border-gray-100">
<div className="w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center text-sm font-bold mb-4 z-10">3</div>
<iconify-icon className="text-brand-gold mb-3" icon="lucide:gem" strokeWidth="1.5" width="36"></iconify-icon>
<h4 className="text-brand-dark text-sm font-semibold mb-2">Sample Prototyping</h4>
<p className="text-xs text-brand-gray/80 leading-relaxed">Complete sample production in <span className="font-bold">10-15 days</span>.</p>
<div className="lg:hidden mt-2 text-gray-300"><iconify-icon icon="lucide:arrow-down" width="20"></iconify-icon></div>
</div>

<div className="hidden lg:flex pt-16 text-gray-300"><iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon></div>

<div className="w-full lg:w-[140px] flex flex-col items-center text-center bg-white lg:bg-transparent p-4 lg:p-0 rounded border lg:border-none border-gray-100">
<div className="w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center text-sm font-bold mb-4 z-10">4</div>
<iconify-icon className="text-brand-gold mb-3" icon="lucide:file-signature" strokeWidth="1.5" width="36"></iconify-icon>
<h4 className="text-brand-dark text-sm font-semibold mb-2">Contract Signing</h4>
<p className="text-xs text-brand-gray/80 leading-relaxed">Clarifying price, cycle and quality requirements.</p>
<div className="lg:hidden mt-2 text-gray-300"><iconify-icon icon="lucide:arrow-down" width="20"></iconify-icon></div>
</div>

<div className="hidden lg:flex pt-16 text-gray-300"><iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon></div>

<div className="w-full lg:w-[140px] flex flex-col items-center text-center bg-white lg:bg-transparent p-4 lg:p-0 rounded border lg:border-none border-gray-100">
<div className="w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center text-sm font-bold mb-4 z-10">5</div>
<iconify-icon className="text-brand-gold mb-3" icon="lucide:factory" strokeWidth="1.5" width="36"></iconify-icon>
<h4 className="text-brand-dark text-sm font-semibold mb-2">Mass Production</h4>
<p className="text-xs text-brand-gray/80 leading-relaxed">Real-time synchronization of <span className="font-bold">production progress</span>.</p>
<div className="lg:hidden mt-2 text-gray-300"><iconify-icon icon="lucide:arrow-down" width="20"></iconify-icon></div>
</div>

<div className="hidden lg:flex pt-16 text-gray-300"><iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon></div>

<div className="w-full lg:w-[140px] flex flex-col items-center text-center bg-white lg:bg-transparent p-4 lg:p-0 rounded border lg:border-none border-gray-100">
<div className="w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center text-sm font-bold mb-4 z-10">6</div>
<iconify-icon className="text-brand-gold mb-3" icon="lucide:truck" strokeWidth="1.5" width="36"></iconify-icon>
<h4 className="text-brand-dark text-sm font-semibold mb-2">Delivery</h4>
<p className="text-xs text-brand-gray/80 leading-relaxed">Quality inspection passed, provide tracking number.</p>
</div>
</div>
<div className="flex justify-center mt-12">
<button className="bg-brand-gold hover:bg-[#cf8a5e] text-white text-sm font-medium px-8 h-10 rounded transition-colors duration-200 flex items-center justify-center w-[160px]">
                    Start Customization
                </button>
</div>
</div>
</section>

<section className="py-20 bg-brand-bg">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl text-brand-dark font-semibold text-center mb-10 tracking-tight">Success Stories</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

<div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300 group">
<div className="mb-3">
<span className="text-sm text-brand-dark font-medium blur-[2px]">A Light Luxury Jewelry Brand</span>
<div className="text-xs text-brand-gray mt-1">Co-branded design + exclusive packaging</div>
</div>
<div className="h-[160px] overflow-hidden rounded mb-3 bg-gray-100">
<img alt="Jewelry Case" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-xs text-brand-deep font-medium">Integrate brand elements, sales &gt; 10,000 units</p>
</div>

<div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300 group">
<div className="mb-3">
<span className="text-sm text-brand-dark font-medium blur-[2px]">An Internet Company</span>
<div className="text-xs text-brand-gray mt-1">Employee welfare gifts + LOGO</div>
</div>
<div className="h-[160px] overflow-hidden rounded mb-3 bg-gray-100">
<img alt="Corporate Gift" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1590548784585-643d2b9f2925?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-xs text-brand-deep font-medium">Workplace scenarios, high cost-performance</p>
</div>

<div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300 group">
<div className="mb-3">
<span className="text-sm text-brand-dark font-medium">North American Seller</span>
<div className="text-xs text-brand-gray mt-1">European/American styles + Compliance</div>
</div>
<div className="h-[160px] overflow-hidden rounded mb-3 bg-gray-100">
<img alt="Cross Border" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-xs text-brand-deep font-medium">Rapid prototyping, timely mass delivery</p>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center gap-1 text-sm text-brand-gold hover:text-brand-deep transition-colors" href="#">
                    View More Custom Cases <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6 space-y-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">

<div className="space-y-6">
<h3 className="text-brand-dark text-lg font-semibold mb-6 flex items-center gap-2">
<iconify-icon className="text-brand-gold" icon="lucide:shield-check"></iconify-icon> Quality Guarantee
                    </h3>
<div className="space-y-4">
<div>
<h4 className="text-sm font-semibold text-brand-dark">Prototyping Guarantee</h4>
<p className="text-sm text-brand-gray mt-1">Free modification up to 2 times, refund negotiation available.</p>
</div>
<div>
<h4 className="text-sm font-semibold text-brand-dark">Production Guarantee</h4>
<p className="text-sm text-brand-gray mt-1">Strict quality inspection, finished product qualification rate <span className="font-bold text-brand-gold">≥ 99.8%</span>.</p>
</div>
<div>
<h4 className="text-sm font-semibold text-brand-dark">Compliance Guarantee</h4>
<p className="text-sm text-brand-gray mt-1">Provide material inspection reports and compliance certification.</p>
</div>
</div>
</div>

<div className="space-y-6">
<h3 className="text-brand-dark text-lg font-semibold mb-6 flex items-center gap-2">
<iconify-icon className="text-brand-gold" icon="lucide:handshake"></iconify-icon> Cooperation Guarantee
                    </h3>
<div className="space-y-4">
<div>
<h4 className="text-sm font-semibold text-brand-dark">Price Guarantee</h4>
<p className="text-sm text-brand-gray mt-1">Transparent pricing, no hidden fees, tiered bulk pricing.</p>
</div>
<div>
<h4 className="text-sm font-semibold text-brand-dark">Delivery Guarantee</h4>
<p className="text-sm text-brand-gray mt-1">Compensation for delay: 1% of order amount per day.</p>
</div>
<div>
<h4 className="text-sm font-semibold text-brand-dark">After-Sales Guarantee</h4>
<p className="text-sm text-brand-gray mt-1">24h response, free return/replacement for quality issues.</p>
</div>
</div>
</div>
</div>

<div className="border-t border-brand-gray/10 pt-10">
<div className="flex flex-col md:flex-row items-center gap-8">
<h3 className="text-base font-semibold text-brand-dark whitespace-nowrap">Compliance Certifications</h3>
<div className="flex flex-wrap gap-5">
<div className="w-[100px] h-[60px] border border-gray-200 flex items-center justify-center text-xs text-gray-400 bg-white hover:scale-105 transition-transform cursor-pointer">ISO9001</div>
<div className="w-[100px] h-[60px] border border-gray-200 flex items-center justify-center text-xs text-gray-400 bg-white hover:scale-105 transition-transform cursor-pointer">SGS Report</div>
<div className="w-[100px] h-[60px] border border-gray-200 flex items-center justify-center text-xs text-gray-400 bg-white hover:scale-105 transition-transform cursor-pointer">CE/RoHS</div>
</div>
</div>
</div>

<div className="bg-brand-bg border-l-4 border-brand-gold p-4 text-center">
<p className="text-brand-dark font-semibold">Quality First, Full Customization Process Controllable, Unqualified Products Will Never Leave the Factory</p>
</div>
</div>
</section>

<section className="w-full bg-[#fafafa]">
<div className="grid grid-cols-1 lg:grid-cols-5 min-h-screen">

<div className="lg:col-span-2 p-10 lg:p-16 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">
<h2 className="text-3xl text-brand-dark font-semibold tracking-tight leading-tight">
                    Tell Us Your Customization Needs 
                    <span className="text-brand-gold">We Will Tailor-Make for You</span>
</h2>
<p className="text-sm text-brand-gray max-w-md">
                    Get Free Design Scheme + Accurate Quotation, One-on-One Exclusive Designer Docking, Full Process Transparent and Controllable.
                </p>
<div className="flex flex-wrap gap-8 pt-4">
<div className="flex flex-col">
<span className="text-xl font-bold text-brand-gold">1000+</span>
<span className="text-sm text-brand-dark">Brands Choice</span>
</div>
<div className="flex flex-col">
<span className="text-xl font-bold text-brand-gold">98%+</span>
<span className="text-sm text-brand-dark">Satisfaction</span>
</div>
</div>
</div>

<div className="lg:col-span-3 p-10 lg:p-16 flex flex-col justify-center">
<div className="bg-white rounded-lg shadow-sm p-8 max-w-xl mx-auto w-full border border-gray-100">
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Submission Successful, Customer Service Will Contact You Within 24 Hours');">
<div>
<label className="block text-xs font-medium text-brand-gray mb-1">Company Name *</label>
<input className="w-full h-9 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-gold transition-colors" required="" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-brand-gray mb-1">Contact Person *</label>
<input className="w-full h-9 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-gold transition-colors" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-brand-gray mb-1">Phone / WhatsApp *</label>
<input className="w-full h-9 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-gold transition-colors" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-brand-gray mb-1">Customization Type</label>
<select className="w-full h-9 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-gold bg-white text-gray-700">
<option>OEM</option>
<option>ODM</option>
<option>Special Gift</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-brand-gray mb-1">Style Preference</label>
<select className="w-full h-9 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-gold bg-white text-gray-700">
<option>Light Luxury</option>
<option>Minimalist</option>
<option>Retro</option>
<option>Ethnic</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-brand-gray mb-1">Estimated Quantity</label>
<input className="w-full h-9 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-gold transition-colors" type="number"/>
</div>
<div>
<label className="block text-xs font-medium text-brand-gray mb-1">Budget Range</label>
<input className="w-full h-9 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-gold transition-colors" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-brand-gray mb-1">Remarks</label>
<textarea className="w-full h-20 px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-gold transition-colors resize-none"></textarea>
</div>
<div className="pt-2 flex justify-center">
<button className="bg-brand-gold hover:bg-[#cf8a5e] text-white text-sm font-medium w-[200px] h-10 rounded transition-colors duration-200" type="submit">
                                Submit Customization
                            </button>
</div>
</form>

<div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-3">
<div className="flex items-center gap-2 text-sm text-brand-dark">
<iconify-icon className="text-brand-gold" icon="lucide:phone"></iconify-icon>
<span>+1 (800) 123-4567</span>
</div>
<div className="flex items-center gap-2 text-sm text-brand-dark">
<iconify-icon className="text-brand-gold" icon="lucide:mail"></iconify-icon>
<span>design@jewelryb2b.com</span>
</div>
<p className="text-xs text-brand-gray pl-6">For Sending Design Schemes/Quotations</p>
</div>
<div className="flex items-start gap-3">
<div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">QR Code</div>
<div className="flex flex-col justify-center h-20">
<span className="text-sm font-medium text-brand-dark">WhatsApp</span>
<span className="text-xs text-brand-gray">+1 (555) 000-0000</span>
</div>
</div>
</div>
<div className="mt-6 flex gap-4 justify-center">
<button className="bg-[#f0f0f0] hover:bg-gray-200 text-brand-dark text-xs font-medium px-4 h-9 rounded transition-colors">
                            Online Consultation
                        </button>
<button className="bg-[#f0f0f0] hover:bg-gray-200 text-brand-dark text-xs font-medium px-4 h-9 rounded transition-colors">
                            Book Designer
                        </button>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
