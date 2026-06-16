import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
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
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center gap-2 cursor-pointer">
<div className="text-blue-600">
<span className="iconify" data-height="24" data-icon="lucide:zap" data-width="24"></span>
</div>
<span className="text-xl font-semibold tracking-tight text-gray-900">ServiceCall</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors" href="#">Features</a>
<a className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors" href="#">Integrations</a>
<a className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors" href="#">Pricing</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm ring-1 ring-blue-600 ring-offset-2 ring-offset-white" href="#">
                        Start Free Trial
                    </a>
<button className="md:hidden p-2 text-gray-500 hover:text-gray-900">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

<div className="lg:col-span-7 flex flex-col items-start text-left">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-8 transition-transform hover:scale-105 cursor-default">
<span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">New</span>
<span className="text-xs font-medium text-blue-700">Solar Savings Calculator</span>
<span className="iconify text-blue-500" data-icon="lucide:arrow-right" data-width="12"></span>
</div>

<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.1] mb-6">
                        Close 30% More <br/>
                        Deals with <br/>
<span className="text-blue-600 decoration-blue-200 underline decoration-4 underline-offset-4 decoration-skip-ink-none">Enriched Leads</span>
</h1>

<p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
                        Auto-enrich your CRM leads with home equity, property data, energy savings calculations, and rebate eligibility—before you even pick up the phone.
                    </p>

<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg" href="#">
                            Start Free Trial
                            <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<button className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all">
<span className="iconify mr-2 text-gray-500" data-icon="lucide:play-circle" data-width="18"></span>
                            Watch Demo
                        </button>
</div>

<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&amp;w=100&amp;h=100"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&amp;w=100&amp;h=100"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&amp;w=100&amp;h=100"/>
</div>
</div>
<p className="text-sm font-medium text-gray-600">Trusted by 2,000+ contractors</p>
</div>
</div>

<div className="lg:col-span-5 relative perspective-1000">

<div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl blur-2xl opacity-50 -z-10"></div>
<div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-8 relative transform transition-transform hover:-translate-y-1 duration-500">

<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-xl font-bold text-gray-900 tracking-tight">Robert Williams</h3>
<p className="text-sm text-gray-500 mt-1">248 Pine Valley Dr, Austin TX</p>
</div>
<div className="flex items-center gap-1.5 px-3 py-1 bg-green-50 border border-green-100 rounded-full">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs font-semibold text-green-700">Lead Score: 92</span>
</div>
</div>
<div className="h-px bg-gray-100 my-6"></div>

<div className="mb-4 flex items-center gap-2">
<span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">Enriched Data</span>
<div className="h-px flex-1 bg-gray-100"></div>
</div>
<div className="space-y-4">

<div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:home" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-0.5">
<p className="text-sm font-semibold text-gray-900">Equity: Verified Owner</p>
<span className="text-[10px] font-medium px-2 py-0.5 rounded bg-green-50 text-green-700 border border-green-100">100% confidence</span>
</div>
<p className="text-xs text-gray-500">High financing probability</p>
</div>
</div>

<div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
<div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 shrink-0 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:sun" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-0.5">
<p className="text-sm font-semibold text-gray-900">Solar Potential: Excellent</p>
<span className="text-xs text-gray-500">1,450 sqft roof</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
<div className="bg-yellow-400 h-1.5 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
</div>

<div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:thermometer" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-0.5">
<p className="text-sm font-semibold text-gray-900">HVAC: 14 Years Old</p>
<span className="text-[10px] font-medium px-2 py-0.5 rounded bg-red-50 text-red-700 border border-red-100">Replace Soon</span>
</div>
<p className="text-xs text-gray-500">Installed 2010 • Carrier System</p>
</div>
</div>

<div className="mt-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-4 text-white shadow-lg shadow-blue-200 transform hover:scale-[1.02] transition-transform cursor-pointer">
<div className="flex justify-between items-start">
<div>
<p className="text-2xl font-bold tracking-tight mb-1">$4,500</p>
<p className="text-xs text-blue-100 font-medium opacity-90">IRA Credit Eligibility</p>
</div>
<div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="20"></span>
</div>
</div>
<div className="mt-4 flex items-center justify-between text-xs font-medium">
<span>Heat Pump Upgrade</span>
<span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">Apply now <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-50 border-y border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<p className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-8">Integrates seamlessly with your existing CRM</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-xl font-bold text-gray-700">
<span className="iconify" data-icon="lucide:settings" data-width="24"></span> ServiceTitan
                </div>
<div className="flex items-center gap-2 text-xl font-bold text-gray-700">
<span className="iconify" data-icon="lucide:briefcase" data-width="24"></span> Jobber
                </div>
<div className="flex items-center gap-2 text-xl font-bold text-gray-700">
<span className="iconify" data-icon="lucide:phone" data-width="24"></span> Housecall Pro
                </div>
<div className="flex items-center gap-2 text-xl font-bold text-gray-700">
<span className="iconify" data-icon="lucide:cloud" data-width="24"></span> Salesforce
                </div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-4">How ServiceCall Works</h2>
<p className="text-xl text-gray-600">Five critical data sets that help you close more deals by prioritizing high-value homeowners.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
<span className="iconify text-blue-600 group-hover:text-white transition-colors" data-icon="lucide:home" data-strokeWidth="1.5" data-width="28"></span>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Home Equity</h3>
<p className="text-gray-600 leading-relaxed text-sm">Know exactly how much financial capacity each homeowner has. "$250K equity = can afford major HVAC upgrade"</p>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
<span className="iconify text-blue-600 group-hover:text-white transition-colors" data-icon="lucide:trending-up" data-strokeWidth="1.5" data-width="28"></span>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Property Values</h3>
<p className="text-gray-600 leading-relaxed text-sm">Current value, recent sales, and trends help you price appropriately for the neighborhood and gauge investment capacity.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
<span className="iconify text-blue-600 group-hover:text-white transition-colors" data-icon="lucide:clipboard-list" data-strokeWidth="1.5" data-width="28"></span>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Permit History</h3>
<p className="text-gray-600 leading-relaxed text-sm">See the age of every major system. "14-year-old HVAC = urgent replacement need" helps you time your pitch perfectly.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group md:col-start-1 lg:col-start-auto">
<div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
<span className="iconify text-blue-600 group-hover:text-white transition-colors" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="28"></span>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Energy Savings</h3>
<p className="text-gray-600 leading-relaxed text-sm">Projected savings for every upgrade. "New HVAC saves $1,100/year" helps you sell ROI, not just price.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
<span className="iconify text-blue-600 group-hover:text-white transition-colors" data-icon="lucide:tag" data-strokeWidth="1.5" data-width="28"></span>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Rebates &amp; Incentives</h3>
<p className="text-gray-600 leading-relaxed text-sm">Federal, state, and local programs. "$2,000 tax credit + $500 rebate = $2,500 off" reduces price objections instantly.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-b from-blue-50 to-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 text-center mb-16">From Lead to Closed Deal in Seconds</h2>
<div className="relative">

<div className="hidden lg:block absolute top-6 left-0 w-full h-0.5 bg-gray-200 -z-0"></div>
<div className="flex flex-col lg:flex-row justify-between gap-8 relative z-10">

<div className="flex-1 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-lg ring-4 ring-blue-50 transition-transform group-hover:scale-110">1</div>
<h4 className="text-lg font-semibold text-gray-900 mb-2">Lead Enters CRM</h4>
<p className="text-sm text-gray-500">From website, call, or referral</p>
</div>

<div className="lg:hidden flex justify-center text-gray-300"><span className="iconify" data-icon="lucide:arrow-down" data-width="24"></span></div>

<div className="flex-1 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-lg ring-4 ring-blue-50 transition-transform group-hover:scale-110">2</div>
<h4 className="text-lg font-semibold text-gray-900 mb-2">Activates Instantly</h4>
<p className="text-sm text-gray-500">ServiceCall pulls 5 data sets</p>
</div>

<div className="lg:hidden flex justify-center text-gray-300"><span className="iconify" data-icon="lucide:arrow-down" data-width="24"></span></div>

<div className="flex-1 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-lg ring-4 ring-blue-50 transition-transform group-hover:scale-110">3</div>
<h4 className="text-lg font-semibold text-gray-900 mb-2">Data in CRM</h4>
<p className="text-sm text-gray-500">Appears automatically in fields</p>
</div>

<div className="lg:hidden flex justify-center text-gray-300"><span className="iconify" data-icon="lucide:arrow-down" data-width="24"></span></div>

<div className="flex-1 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-lg ring-4 ring-blue-50 transition-transform group-hover:scale-110">4</div>
<h4 className="text-lg font-semibold text-gray-900 mb-2">Review &amp; Call</h4>
<p className="text-sm text-gray-500">See everything before dialing</p>
</div>

<div className="lg:hidden flex justify-center text-gray-300"><span className="iconify" data-icon="lucide:arrow-down" data-width="24"></span></div>

<div className="flex-1 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-lg ring-4 ring-green-100 transition-transform group-hover:scale-110">5</div>
<h4 className="text-lg font-semibold text-gray-900 mb-2">Close More Deals</h4>
<p className="text-sm text-gray-500">30% higher close rates</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Simple, Transparent Pricing</h2>
<p className="text-xl text-gray-600">30-day free trial. No credit card required.</p>
</div>
<div className="flex flex-col lg:flex-row gap-8 justify-center items-start">

<div className="w-full max-w-sm border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-colors">
<span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full mb-4">Try it Free</span>
<div className="flex items-baseline mb-2">
<span className="text-5xl font-semibold text-gray-900">Free</span>
</div>
<p className="text-gray-500 mb-8">30 Days</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-600">
<span className="iconify text-green-500" data-icon="lucide:check-circle" data-width="18"></span> 50 lead enrichments
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<span className="iconify text-green-500" data-icon="lucide:check-circle" data-width="18"></span> All 5 data sources
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<span className="iconify text-green-500" data-icon="lucide:check-circle" data-width="18"></span> 1 CRM integration
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<span className="iconify text-green-500" data-icon="lucide:check-circle" data-width="18"></span> Email support
                        </li>
</ul>
<button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">Start Free Trial</button>
</div>

<div className="w-full max-w-sm border border-blue-200 rounded-xl p-8 shadow-xl relative bg-white transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full uppercase tracking-wide shadow-sm">Most Popular</div>
<div className="flex items-baseline mb-2 mt-2">
<span className="text-5xl font-semibold text-gray-900 tracking-tight">$149</span>
<span className="ml-2 text-gray-500">/mo</span>
</div>
<p className="text-gray-500 mb-8">For growing teams</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-600">
<span className="iconify text-blue-600" data-icon="lucide:check-circle" data-width="18"></span> Up to 150 leads/month
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<span className="iconify text-blue-600" data-icon="lucide:check-circle" data-width="18"></span> All 5 data sources
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<span className="iconify text-blue-600" data-icon="lucide:check-circle" data-width="18"></span> Unlimited CRM integrations
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<span className="iconify text-blue-600" data-icon="lucide:check-circle" data-width="18"></span> AI support chatbot
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<span className="iconify text-blue-600" data-icon="lucide:check-circle" data-width="18"></span> Priority email support
                        </li>
</ul>
<button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md">Start Free Trial</button>
</div>

<div className="w-full max-w-sm border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-colors">
<div className="flex items-baseline mb-2">
<span className="text-5xl font-semibold text-gray-900 tracking-tight">$299</span>
<span className="ml-2 text-gray-500">/mo</span>
</div>
<p className="text-gray-500 mb-8">For high volume</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-600">
<span className="iconify text-gray-400" data-icon="lucide:check-circle" data-width="18"></span> Unlimited leads
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<span className="iconify text-gray-400" data-icon="lucide:check-circle" data-width="18"></span> Everything in Starter
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<span className="iconify text-gray-400" data-icon="lucide:check-circle" data-width="18"></span> Priority support
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<span className="iconify text-gray-400" data-icon="lucide:check-circle" data-width="18"></span> Dedicated success manager
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<span className="iconify text-gray-400" data-icon="lucide:check-circle" data-width="18"></span> Early access to features
                        </li>
</ul>
<button className="w-full py-3 px-4 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors">Start Free Trial</button>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 text-center mb-16">Trusted by Contractors Nationwide</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
<div className="flex gap-1 text-yellow-400 mb-6">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="18"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="18"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="18"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="18"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="18"></span>
</div>
<blockquote className="text-lg text-gray-700 italic mb-8 flex-grow">
                        "ServiceCall saved me 25 hours last month. The energy savings data alone helped me close 4 HVAC upgrades I would've lost on price."
                    </blockquote>
<div className="pt-6 border-t border-gray-100 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
<img alt="Mike Johnson" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?fit=crop&amp;w=100&amp;h=100"/>
</div>
<div>
<div className="font-semibold text-gray-900">Mike Johnson</div>
<div className="text-sm text-gray-500">Johnson HVAC, Austin TX</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
<div className="flex gap-1 text-yellow-400 mb-6">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="18"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="18"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="18"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="18"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="18"></span>
</div>
<blockquote className="text-lg text-gray-700 italic mb-8 flex-grow">
                        "Knowing the home equity before I call is a game-changer. I'm not wasting time on leads that can't afford the work."
                    </blockquote>
<div className="pt-6 border-t border-gray-100 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
<img alt="Sarah Martinez" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=crop&amp;w=100&amp;h=100"/>
</div>
<div>
<div className="font-semibold text-gray-900">Sarah Martinez</div>
<div className="text-sm text-gray-500">Elite Plumbing, Denver CO</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
<div className="flex gap-1 text-yellow-400 mb-6">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="18"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="18"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="18"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="18"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="18"></span>
</div>
<blockquote className="text-lg text-gray-700 italic mb-8 flex-grow">
                        "The rebate data is incredible. Telling homeowners about $5K in incentives before discussing price completely changes the conversation."
                    </blockquote>
<div className="pt-6 border-t border-gray-100 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
<img alt="David Chen" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&amp;w=100&amp;h=100"/>
</div>
<div>
<div className="font-semibold text-gray-900">David Chen</div>
<div className="text-sm text-gray-500">Chen Solar, Phoenix AZ</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-center">
<div className="max-w-4xl mx-auto px-4">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Ready to Close More Deals?</h2>
<p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Join 2,000+ contractors who qualify leads instantly with ServiceCall</p>
<button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Start Free Trial
                <span className="iconify ml-2 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="20"></span>
</button>
<p className="mt-6 text-sm text-blue-200 opacity-90">No credit card required • Cancel anytime • 30-day free trial</p>
</div>
</section>

<footer className="bg-gray-900 text-gray-300 py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="col-span-1">
<div className="flex items-center gap-2 mb-4">
<span className="iconify text-white" data-icon="lucide:zap" data-width="24"></span>
<span className="text-xl font-semibold text-white tracking-tight">ServiceCall</span>
</div>
<p className="text-sm text-gray-400">Lead enrichment for contractors. Close deals faster with data.</p>
</div>

<div>
<h5 className="text-white font-semibold mb-4">Product</h5>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Roadmap</a></li>
</ul>
</div>

<div>
<h5 className="text-white font-semibold mb-4">Resources</h5>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Docs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>

<div>
<h5 className="text-white font-semibold mb-4">Company</h5>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
<div>© 2026 ServiceCall. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
