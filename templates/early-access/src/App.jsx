import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\\s+/g, ' ').trim(),
};
}
});
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
});
}
]
};



        // Initialize Lucide Icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden flex items-center">

<div className="absolute inset-0 z-0">
<img alt="Background" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/30 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#F2F0E9] via-transparent to-transparent"></div>
</div>
<div className="max-w-6xl mx-auto px-6 relative z-10 w-full pt-10">
<div className="max-w-2xl">
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white mb-6 leading-[0.95]">
                    Smarter Sleep.<br/>
<span className="text-white/60">Before the rest.</span>
</h1>
<p className="text-lg md:text-xl text-white/90 font-light max-w-lg mb-10 leading-relaxed drop-shadow-sm">
                    Secure your Sleepal® AI Lamp before the public launch. Limited spots available for early adopters in Q4.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="group relative px-8 py-4 bg-[#F2F0E9] text-stone-900 rounded-full font-medium overflow-hidden shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 inline-flex items-center gap-2" href="#apply">
                        Get Early Access
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 relative z-10 bg-[#F2F0E9]">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-6">Early Access Program</h2>
<p className="text-lg text-stone-600 font-medium max-w-2xl mx-auto mb-4 leading-relaxed">
                    Skip the waitlist. Get priority access to the first production batch before our Kickstarter campaign goes live.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">

<div className="md:col-span-2 md:row-span-2 bg-white rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-500 border border-stone-200/60">
<div className="absolute top-8 right-8 p-3 bg-[#F2F0E9] rounded-full shadow-sm">
<i className="w-6 h-6 text-stone-900" data-lucide="sparkles"></i>
</div>
<div className="h-full flex flex-col justify-end relative z-10 pt-32">
<h3 className="text-3xl font-semibold tracking-tight mb-2">Priority Selection</h3>
<p className="text-stone-600 leading-relaxed">By joining the Early Access Program, you bypass general public availability. Your unit is reserved from the initial manufacturing run.</p>
</div>
<div className="absolute -top-20 -left-20 w-80 h-80 bg-stone-100 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
</div>

<div className="bg-white border border-stone-200/60 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
<div className="w-12 h-12 bg-[#F2F0E9] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-stone-800" data-lucide="tag"></i>
</div>
<div className="">
<h4 className="font-semibold text-lg mb-1 tracking-tight">Insider Price</h4>
<p className="text-sm text-stone-500">Locked-in lower rate than future retail pricing.</p>
</div>
</div>

<div className="bg-[#1c1917] text-stone-50 rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative shadow-xl">
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<i className="w-8 h-8 text-stone-200" data-lucide="package"></i>
<span className="text-[10px] font-mono border border-stone-700 rounded px-2 py-0.5 text-stone-400">FAST SHIP</span>
</div>
<h4 className="font-semibold text-lg mb-1 tracking-tight">Express Logistics</h4>
<p className="text-sm text-stone-400">Dispatched within 5 workdays of payment.</p>
</div>
<div className="absolute inset-0 bg-stone-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0C0A09] text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-stone-900/50 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-6">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">How it works</h2>
<p className="text-stone-400">Simple 4-step process to secure your device.</p>
</div>
<div className="hidden md:block pb-1">
<span className="text-xs font-mono text-stone-500 border border-stone-800 px-2 py-1 rounded">EST. TIME: 2 MINS</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-stone-800 via-stone-800 to-transparent -z-10"></div>

<div className="group">
<div className="w-24 h-24 bg-stone-900 border border-stone-800 rounded-2xl flex items-center justify-center mb-6 shadow-2xl relative z-10 group-hover:border-stone-600 transition-colors">
<span className="text-3xl font-semibold text-white">1</span>
</div>
<h3 className="text-xl font-medium mb-2 text-white">Apply</h3>
<p className="text-sm text-stone-400 leading-relaxed">Fill out the brief application form below to request access.</p>
</div>

<div className="group">
<div className="w-24 h-24 bg-stone-900 border border-stone-800 rounded-2xl flex items-center justify-center mb-6 shadow-2xl relative z-10 group-hover:border-stone-600 transition-colors">
<i className="w-8 h-8 text-stone-400 group-hover:text-white transition-colors" data-lucide="mail"></i>
</div>
<h3 className="text-xl font-medium mb-2 text-white">Invite</h3>
<p className="text-sm text-stone-400 leading-relaxed">Selected applicants receive an exclusive email invitation.</p>
</div>

<div className="group">
<div className="w-24 h-24 bg-stone-900 border border-stone-800 rounded-2xl flex items-center justify-center mb-6 shadow-2xl relative z-10 group-hover:border-stone-600 transition-colors">
<i className="w-8 h-8 text-stone-400 group-hover:text-white transition-colors" data-lucide="link"></i>
</div>
<h3 className="text-xl font-medium mb-2 text-white">Access</h3>
<p className="text-sm text-stone-400 leading-relaxed">Click your unique private link to access the hidden checkout.</p>
</div>

<div className="group">
<div className="w-24 h-24 bg-stone-900 border border-stone-800 rounded-2xl flex items-center justify-center mb-6 shadow-2xl relative z-10 group-hover:border-stone-600 transition-colors">
<i className="w-8 h-8 text-stone-400 group-hover:text-white transition-colors" data-lucide="credit-card"></i>
</div>
<h3 className="text-xl font-medium mb-2 text-white">Order</h3>
<p className="text-sm text-stone-400 leading-relaxed">Complete purchase. Shipping is free and duties are covered.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#F2F0E9]">
<div className="max-w-4xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<h2 className="text-4xl font-semibold tracking-tight mb-6 text-stone-900">Transparent Pricing.<br/>No Surprises.</h2>
<p className="text-stone-600 mb-8 text-lg leading-relaxed">We believe in complete transparency. The price you see is the final price. We absorb all logistics costs for our early supporters.</p>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 text-stone-700">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle"></i>
<span className="font-medium">Free Worldwide Shipping</span>
</div>
<div className="flex items-center gap-3 text-stone-700">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle"></i>
<span className="font-medium">Import Duties &amp; Taxes Included</span>
</div>
<div className="flex items-center gap-3 text-stone-700">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle"></i>
<span className="font-medium">30-Day Money Back Guarantee</span>
</div>
</div>
</div>

<div className="order-1 md:order-2 relative group perspective-1000">
<div className="absolute -inset-4 bg-gradient-to-tr from-stone-300/40 to-stone-200/40 rounded-3xl blur-2xl opacity-70"></div>
<div className="relative bg-white border border-stone-100 rounded-2xl p-8 shadow-2xl transform transition-transform hover:rotate-1 duration-500">

<div className="absolute top-0 left-0 w-full h-4 overflow-hidden -mt-2">
<div className="w-full h-full bg-[#F2F0E9] rounded-full" style={{maskImage: 'radial-gradient(circle, transparent 5px, black 6px)', maskSize: '16px 16px', maskRepeat: 'repeat-x', maskPosition: 'bottom'}}></div>
</div>
<div className="flex justify-between items-center mb-8 pb-4 border-b border-dashed border-stone-200">
<span className="text-xs font-bold uppercase tracking-widest text-stone-400">Order Summary</span>
<div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center border border-stone-100">
<i className="w-5 h-5 text-stone-400" data-lucide="shopping-bag"></i>
</div>
</div>
<div className="space-y-4 mb-8">
<div className="flex justify-between text-base">
<span className="text-stone-600">Sleepal® AI Lamp (Early)</span>
<span className="font-medium text-stone-900">$199.00</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-stone-500">Priority Shipping</span>
<span className="font-medium text-emerald-600">Free</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-stone-500">Import Duties &amp; Tax</span>
<span className="font-medium text-emerald-600">Covered</span>
</div>
</div>
<div className="flex justify-between items-end pt-6 border-t border-stone-100">
<span className="font-medium text-stone-900">Total</span>
<span className="text-3xl font-bold tracking-tight text-stone-900">$199.00</span>
</div>

<div className="absolute bottom-0 left-0 w-full h-4 overflow-hidden -mb-2 rotate-180">
<div className="w-full h-full bg-[#F2F0E9] rounded-full" style={{maskImage: 'radial-gradient(circle, transparent 5px, black 6px)', maskSize: '16px 16px', maskRepeat: 'repeat-x', maskPosition: 'bottom'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F9F8F6] border-stone-200 border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-2xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-12 text-stone-900">Frequently Asked Questions</h2>
<div className="space-y-3">

<details className="group p-5 bg-white border border-stone-200 rounded-2xl open:ring-2 open:ring-stone-900/5 open:shadow-lg transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer text-stone-900 select-none">
<span className="text-lg tracking-tight">How long does the review process take?</span>
<span className="text-stone-400 transition-transform duration-300 group-open:rotate-180 group-open:text-stone-900 flex items-center">
<iconify-icon className="" height="24" icon="solar:alt-arrow-down-linear" style={{color: 'rgb(168, 162, 158)'}} width="24"></iconify-icon>
</span>
</summary>
<div className="text-stone-600 mt-4 leading-relaxed pr-8 pl-1 border-t border-transparent group-open:border-stone-100 group-open:pt-3 transition-all">
                        Applications are reviewed on an ongoing basis. If selected, you will receive an email invitation with your unique purchase link.
                    </div>
</details>

<details className="group p-5 bg-white border border-stone-200 rounded-2xl open:ring-2 open:ring-stone-900/5 open:shadow-lg transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer text-stone-900 select-none">
<span className="text-lg tracking-tight">Do I need to pay anything to apply?</span>
<span className="text-stone-400 transition-transform duration-300 group-open:rotate-180 group-open:text-stone-900 flex items-center">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="text-stone-600 mt-4 leading-relaxed pr-8 pl-1 border-t border-transparent group-open:border-stone-100 group-open:pt-3 transition-all">
                        No. Applying is completely free and requires no payment.
                    </div>
</details>

<details className="group p-5 bg-white border border-stone-200 rounded-2xl open:ring-2 open:ring-stone-900/5 open:shadow-lg transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer text-stone-900 select-none">
<span className="text-lg tracking-tight">Are there any extra costs after checkout?</span>
<span className="text-stone-400 transition-transform duration-300 group-open:rotate-180 group-open:text-stone-900 flex items-center">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="text-stone-600 mt-4 leading-relaxed pr-8 pl-1 border-t border-transparent group-open:border-stone-100 group-open:pt-3 transition-all">
                        No. Early Access Program orders include free shipping and no taxes. The price shown in your checkout link is the total amount you pay.
                    </div>
</details>

<details className="group p-5 bg-white border border-stone-200 rounded-2xl open:ring-2 open:ring-stone-900/5 open:shadow-lg transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer text-stone-900 select-none">
<span className="text-lg tracking-tight">Is shipping really free worldwide?</span>
<span className="text-stone-400 transition-transform duration-300 group-open:rotate-180 group-open:text-stone-900 flex items-center">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="text-stone-600 mt-4 leading-relaxed pr-8 pl-1 border-t border-transparent group-open:border-stone-100 group-open:pt-3 transition-all">
                        Yes. All approved Early Access Program orders are shipped at no cost to the applicant.
                    </div>
</details>

<details className="group p-5 bg-white border border-stone-200 rounded-2xl open:ring-2 open:ring-stone-900/5 open:shadow-lg transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer text-stone-900 select-none">
<span className="text-lg tracking-tight">Will I need to pay customs or duties?</span>
<span className="text-stone-400 transition-transform duration-300 group-open:rotate-180 group-open:text-stone-900 flex items-center">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="text-stone-600 mt-4 leading-relaxed pr-8 pl-1 border-t border-transparent group-open:border-stone-100 group-open:pt-3 transition-all">
                        No. For this program, Sleepal® handles all logistics so participants receive their device with no additional charges.
                    </div>
</details>

<details className="group p-5 bg-white border border-stone-200 rounded-2xl open:ring-2 open:ring-stone-900/5 open:shadow-lg transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer text-stone-900 select-none">
<span className="text-lg tracking-tight">Can I share my purchase link with someone else?</span>
<span className="text-stone-400 transition-transform duration-300 group-open:rotate-180 group-open:text-stone-900 flex items-center">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="text-stone-600 mt-4 leading-relaxed pr-8 pl-1 border-t border-transparent group-open:border-stone-100 group-open:pt-3 transition-all">
                        No. Each purchase link is unique and tied to the selected applicant. Links cannot be transferred or reused.
                    </div>
</details>

<details className="group p-5 bg-white border border-stone-200 rounded-2xl open:ring-2 open:ring-stone-900/5 open:shadow-lg transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer text-stone-900 select-none">
<span className="text-lg tracking-tight">What if I’m not selected?</span>
<span className="text-stone-400 transition-transform duration-300 group-open:rotate-180 group-open:text-stone-900 flex items-center">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="text-stone-600 mt-4 leading-relaxed pr-8 pl-1 border-t border-transparent group-open:border-stone-100 group-open:pt-3 transition-all">
                        You can still join our general waitlist and be notified when the Kickstarter campaign and public sales begin.
                    </div>
</details>

<details className="group p-5 bg-white border border-stone-200 rounded-2xl open:ring-2 open:ring-stone-900/5 open:shadow-lg transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer text-stone-900 select-none">
<span className="text-lg tracking-tight">Is this the same as Kickstarter?</span>
<span className="text-stone-400 transition-transform duration-300 group-open:rotate-180 group-open:text-stone-900 flex items-center">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="text-stone-600 mt-4 leading-relaxed pr-8 pl-1 border-t border-transparent group-open:border-stone-100 group-open:pt-3 transition-all">
                        No. The Early Access Program is separate and takes place before the Kickstarter campaign and website launch.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#F2F0E9]" id="apply">
<div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12">

<div className="md:col-span-2 space-y-8">
<div className="">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-stone-900 mb-4">Ready to Apply?</h2>
<p className="text-stone-600 font-medium leading-relaxed">
                        Join the future of sleep technology. Be part of the first wave.
                    </p>
</div>
<div className="space-y-4">
<div className="flex gap-4 bg-amber-50/50 border border-amber-200/60 rounded-xl p-5">
<i className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" data-lucide="shield-alert"></i>
<div className="">
<h4 className="font-semibold text-amber-900 text-xs uppercase tracking-wide mb-1">Whitelist Us</h4>
<p className="text-amber-800/80 text-sm leading-relaxed">Add <span className="font-mono bg-amber-100 px-1 rounded mx-0.5">@sleepal.com</span> to your safe senders list to ensure you receive your invitation.</p>
</div>
</div>
<div className="flex gap-4 bg-white border border-stone-200 rounded-xl p-5">
<i className="w-5 h-5 text-stone-600 shrink-0 mt-0.5" data-lucide="users"></i>
<div className="">
<h4 className="font-semibold text-stone-900 text-xs uppercase tracking-wide mb-1">Selection Logic</h4>
<p className="text-stone-600 text-sm leading-relaxed">We prioritize applicants based on region to optimize our initial shipping routes.</p>
</div>
</div>
</div>
</div>

<div className="md:col-span-3">
<form className="space-y-5 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-200 relative z-10">
<div className="grid md:grid-cols-2 gap-5">

<div className="space-y-2">
<label className="text-xs font-semibold text-stone-700 ml-1 uppercase tracking-wide" htmlFor="name">Full Name</label>
<input className="w-full bg-[#F9F8F6] border border-stone-200 rounded-xl px-4 py-3.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 focus:bg-white transition-all" id="name" placeholder="Alexander Smith" type="text"/>
</div>

<div className="space-y-2">
<label className="text-xs font-semibold text-stone-700 ml-1 uppercase tracking-wide" htmlFor="email">Email Address</label>
<input className="w-full bg-[#F9F8F6] border border-stone-200 rounded-xl px-4 py-3.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 focus:bg-white transition-all" id="email" placeholder="alex@company.com" type="email"/>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-semibold text-stone-700 ml-1 uppercase tracking-wide" htmlFor="region">Shipping Region</label>
<div className="relative">
<select className="w-full bg-[#F9F8F6] border border-stone-200 rounded-xl px-4 py-3.5 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 focus:bg-white transition-all appearance-none cursor-pointer" id="region">
<option disabled="" selected="" value="">Select your region</option>
<option>North America (USA/Canada)</option>
<option>European Union &amp; UK</option>
<option>Asia Pacific (Japan, Korea, Australia)</option>
<option>Other International</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-semibold text-stone-700 ml-1 uppercase tracking-wide" htmlFor="intent">Primary Goal</label>
<div className="relative">
<select className="w-full bg-[#F9F8F6] border border-stone-200 rounded-xl px-4 py-3.5 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 focus:bg-white transition-all appearance-none cursor-pointer" id="intent">
<option>Improve Sleep Quality</option>
<option>Monitor Health Vitals</option>
<option>Tech Enthusiast / Early Adopter</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="flex items-start gap-3 pt-3">
<label className="relative flex items-center cursor-pointer mt-0.5">
<input className="sr-only custom-checkbox" type="checkbox"/>
<div className="w-5 h-5 border border-stone-300 rounded-md flex items-center justify-center transition-colors bg-white">
<i className="w-3 h-3 text-white hidden" data-lucide="check"></i>
</div>
</label>
<span className="text-xs text-stone-500 leading-relaxed">I understand that this is a limited early access release. Software features may be updated over time.</span>
</div>

<button className="group w-full bg-stone-900 text-white font-medium h-14 rounded-xl hover:bg-stone-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-stone-900/20 mt-4 text-base" type="submit">
                        Apply for Early Access
                        <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<div className="flex justify-center mt-6">
<div className="flex items-center gap-2 text-[10px] text-stone-400 bg-stone-50 px-3 py-1.5 rounded-full border border-stone-100">
<i className="w-3 h-3" data-lucide="lock"></i>
<span className="">Secure SSL Encryption. No spam allowed.</span>
</div>
</div>
</form>
<div className="mt-6 px-2 text-center md:px-6">
<p className="text-xs leading-relaxed text-stone-500">
<span className="font-semibold text-stone-900">Note:</span> Sleepal® will never request payment outside of the official Sleepal® checkout system. All purchases must be completed exclusively through your unique secure purchase link.
                    </p>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-stone-200 text-center text-stone-400 text-sm bg-[#F2F0E9]">
<p>© 2024 Sleepal Inc. All rights reserved.</p>
</footer>


    </>
  );
}
