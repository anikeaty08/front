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



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-[#ccf32f]"></div>
<span className="text-lg font-medium tracking-tight">StaffPay</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-black transition-colors" href="#">Product</a>
<a className="hover:text-black transition-colors" href="#">Solutions</a>
<a className="hover:text-black transition-colors" href="#">Pricing</a>
<a className="hover:text-black transition-colors" href="#">Enterprise</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium hover:text-neutral-600 transition-colors" href="#">Sign In</a>
<a className="bg-black text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors flex items-center gap-2" href="#">
<span>Get Started</span>
<i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>
<main className="w-full overflow-hidden">

<div className="max-w-7xl mx-auto px-4 sm:px-6 mt-4">
<div className="relative bg-[#ccf32f] rounded-[2.5rem] p-8 md:p-16 overflow-hidden min-h-[600px] md:min-h-[750px] flex flex-col md:block">

<div className="relative z-10 max-w-xl mt-8 md:mt-16 fade-enter">
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.05] mb-6">
                        Instant Payouts <br/>
                        for Your Team
                        <span className="inline-block relative top-[-10px] ml-2">
<svg className="text-black/80" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="40"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</span>
</h1>
<p className="text-xl md:text-2xl font-normal text-neutral-800 mb-10 max-w-md leading-relaxed tracking-tight">
                        Issue corporate cards, automate freelancer invoices, and manage global payroll in one unified platform.
                    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
<button className="bg-black text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-neutral-800 transition-transform hover:scale-105 flex items-center gap-2">
                            Open Business Account
                        </button>
<a className="text-sm font-medium flex items-center gap-2 group" href="#">
                            View Demo 
                            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="play-circle"></i>
</a>
</div>

<div className="absolute right-0 top-1/4 hidden md:block opacity-60">
<svg fill="none" height="80" stroke="black" strokeWidth="1" viewbox="0 0 150 80" width="150">
<path d="M0,40 Q75,-20 150,40" stroke-dasharray="4 4"></path>
<circle cx="150" cy="40" fill="black" r="3"></circle>
</svg>
</div>
</div>

<div className="relative md:absolute md:top-20 md:-right-20 mt-16 md:mt-0 flex justify-center md:block transform scale-90 md:scale-100 lg:scale-110 origin-top-right">

<div className="absolute top-12 -left-16 md:-left-40 w-[280px] h-[580px] bg-white rounded-[3rem] border-[8px] border-white shadow-xl rotate-[-8deg] overflow-hidden hidden lg:block opacity-95 z-0">

<div className="px-6 py-6 bg-neutral-50 border-b border-neutral-100">
<div className="flex justify-between items-center mb-4">
<span className="text-lg font-medium tracking-tight">Team Payouts</span>
<div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center">
<span className="text-xs font-semibold">HR</span>
</div>
</div>
<div className="flex gap-2">
<span className="text-xs font-medium bg-black text-white px-3 py-1.5 rounded-full">Pending</span>
<span className="text-xs font-medium bg-white border border-neutral-200 text-neutral-500 px-3 py-1.5 rounded-full">Completed</span>
</div>
</div>

<div className="p-4 space-y-3">
<div className="text-xs text-neutral-400 font-medium uppercase tracking-wider mb-2 ml-1">Today</div>

<div className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl border border-neutral-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-bold">JD</div>
<div>
<p className="text-sm font-medium">John Doe</p>
<p className="text-[10px] text-neutral-500">Design Contract</p>
</div>
</div>
<span className="text-sm font-medium">-$2,400</span>
</div>

<div className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl border border-neutral-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">AS</div>
<div>
<p className="text-sm font-medium">Alice Smith</p>
<p className="text-[10px] text-neutral-500">Frontend Dev</p>
</div>
</div>
<span className="text-sm font-medium">-$4,150</span>
</div>

<div className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl border border-neutral-100 opacity-60">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold">MK</div>
<div>
<p className="text-sm font-medium">Mike K.</p>
<p className="text-[10px] text-neutral-500">Marketing Ops</p>
</div>
</div>
<span className="text-sm font-medium">-$1,800</span>
</div>

<div className="mt-4 bg-neutral-900 text-white rounded-xl p-4 flex justify-between items-center">
<span className="text-xs font-medium text-neutral-300">Total Run</span>
<span className="text-lg font-medium">$8,350.00</span>
</div>
</div>
</div>

<div className="relative w-[300px] h-[600px] bg-neutral-50 rounded-[3.5rem] border-[10px] border-white shadow-2xl z-10 overflow-hidden ring-1 ring-black/5">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>

<div className="w-full h-full bg-white flex flex-col relative">

<div className="pt-12 px-6 pb-4 flex justify-between items-center">
<i className="w-5 h-5 text-neutral-900" data-lucide="menu"></i>
<span className="text-sm font-medium">My Card</span>
<div className="w-8 h-8 rounded-full bg-neutral-100 border border-neutral-200 overflow-hidden">
<svg className="w-full h-full text-neutral-400" fill="currentColor" viewbox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
</div>
</div>

<div className="px-6 mb-8 relative perspective-[1000px]">
<div className="w-full aspect-[1.586] bg-black rounded-2xl p-5 text-white relative overflow-hidden shadow-lg transform transition-transform hover:rotate-y-6">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#ccf32f] rounded-full blur-[50px] opacity-20"></div>
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-1.5">
<div className="w-3 h-3 rounded-full bg-[#ccf32f]"></div>
<span className="text-sm font-medium tracking-tight">StaffPay</span>
</div>
<i className="w-5 h-5 opacity-60 rotate-90" data-lucide="wifi"></i>
</div>
<div className="mb-4">
<div className="flex gap-3 text-lg font-mono tracking-widest opacity-90">
<span>••••</span>
<span>••••</span>
<span>••••</span>
<span>4921</span>
</div>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-[10px] text-neutral-400 uppercase">Card Holder</p>
<p className="text-xs font-medium">ALEX MORGAN</p>
</div>
<div className="flex flex-col items-end">
<p className="text-[10px] text-neutral-400 uppercase">Exp</p>
<p className="text-xs font-medium">09/28</p>
</div>
</div>
</div>
</div>

<div className="flex justify-between px-8 mb-8">
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-100 text-neutral-900">
<i className="w-5 h-5" data-lucide="snowflake"></i>
</div>
<span className="text-[10px] font-medium text-neutral-500">Freeze</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-100 text-neutral-900">
<i className="w-5 h-5" data-lucide="eye"></i>
</div>
<span className="text-[10px] font-medium text-neutral-500">Details</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-100 text-neutral-900">
<i className="w-5 h-5" data-lucide="settings-2"></i>
</div>
<span className="text-[10px] font-medium text-neutral-500">Limit</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-[#ccf32f]">
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
<span className="text-[10px] font-medium text-neutral-900">Top Up</span>
</div>
</div>

<div className="flex-1 bg-white rounded-t-[2rem] shadow-[0_-5px_20px_rgba(0,0,0,0.02)] border-t border-neutral-50 px-6 pt-6">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-semibold">Recent Activity</h3>
<a className="text-xs text-[#ccf32f] bg-black px-2 py-1 rounded" href="#">View All</a>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center"><i className="w-4 h-4 text-neutral-600" data-lucide="coffee"></i></div>
<div>
<p className="text-xs font-medium">Starbucks</p>
<p className="text-[10px] text-neutral-400">Food &amp; Drink</p>
</div>
</div>
<span className="text-xs font-medium">-$5.40</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center"><i className="w-4 h-4 text-blue-600" data-lucide="cloud"></i></div>
<div>
<p className="text-xs font-medium">AWS Invoice</p>
<p className="text-[10px] text-neutral-400">Software</p>
</div>
</div>
<span className="text-xs font-medium">-$124.00</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-[#ccf32f]/20 flex items-center justify-center"><i className="w-4 h-4 text-black" data-lucide="arrow-down-left"></i></div>
<div>
<p className="text-xs font-medium">Stripe Payout</p>
<p className="text-[10px] text-neutral-400">Income</p>
</div>
</div>
<span className="text-xs font-medium text-green-600">+$2,450.00</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 py-24">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-16 max-w-lg">Streamline Your <br/> Global Workforce</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-neutral-50 rounded-[2rem] p-10 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
<div className="relative z-10 max-w-sm">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
<i className="w-5 h-5 text-black" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Instant Card Issuance</h3>
<p className="text-lg text-neutral-500 mb-8 leading-relaxed">Create virtual cards for new hires in seconds. Set spending limits and freeze instantly.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all border-b border-black pb-0.5" href="#">
                            Learn about cards
                        </a>
</div>

<div className="absolute bottom-[-20px] right-[-20px] opacity-10 group-hover:opacity-20 transition-opacity">
<svg fill="currentColor" height="200" viewbox="0 0 24 24" width="200"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line stroke="white" strokeWidth="2" x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
</div>

<div className="bg-neutral-50 rounded-[2rem] p-10 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
<div className="relative z-10 max-w-sm">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
<i className="w-5 h-5 text-black" data-lucide="globe-2"></i>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Pay in 150+ Currencies</h3>
<p className="text-lg text-neutral-500 mb-8 leading-relaxed">Send payments to freelancers globally with real exchange rates and local bank transfers.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all border-b border-black pb-0.5" href="#">
                            Explore coverage
                        </a>
</div>

<div className="absolute bottom-6 right-6">
<div className="relative w-32 h-32">
<div className="absolute inset-0 border-[8px] border-neutral-200 rounded-full"></div>
<div className="absolute inset-0 border-[8px] border-[#ccf32f] rounded-full border-t-transparent border-l-transparent rotate-45"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold">150+</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Built for Operations</h2>
<p className="text-lg text-neutral-500 max-w-md mb-16 leading-relaxed">
                Empower your finance team with tools designed to reduce admin work and increase transparency.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">

<div className="flex gap-6 items-start group">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#ccf32f] flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-black" data-lucide="users"></i>
</div>
<div>
<h3 className="text-xl font-medium mb-2 tracking-tight">Seamless Onboarding</h3>
<p className="text-lg text-neutral-500 leading-relaxed mb-4">Invite staff via email. They complete KYC and get their cards in minutes without visiting a bank.</p>
</div>
</div>

<div className="flex gap-6 items-start group">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#ccf32f]/40 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-black" data-lucide="file-check"></i>
</div>
<div>
<h3 className="text-xl font-medium mb-2 tracking-tight">Auto-Reconciliation</h3>
<p className="text-lg text-neutral-500 leading-relaxed mb-4">Receipts are matched to transactions automatically. Syncs with Xero, QuickBooks, and Netsuite.</p>
</div>
</div>

<div className="flex gap-6 items-start group">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#ccf32f]/40 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-black" data-lucide="shield-check"></i>
</div>
<div>
<h3 className="text-xl font-medium mb-2 tracking-tight">Spend Controls</h3>
<p className="text-lg text-neutral-500 leading-relaxed mb-4">Set strict category and merchant limits. Prevent overspending before it happens.</p>
</div>
</div>

<div className="flex gap-6 items-start group">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#ccf32f]/40 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-black" data-lucide="arrow-right-left"></i>
</div>
<div>
<h3 className="text-xl font-medium mb-2 tracking-tight">Bulk Transfers</h3>
<p className="text-lg text-neutral-500 leading-relaxed mb-4">Upload a CSV or use our API to pay 1,000+ contractors simultaneously.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24 text-center">
<p className="text-neutral-500 mb-10 text-lg">Trusted by modern teams globally</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-semibold text-xl"><div className="w-6 h-6 bg-black rounded-full"></div> Acme Corp</div>
<div className="flex items-center gap-2 font-semibold text-xl"><div className="w-6 h-6 bg-black rounded-sm rotate-45"></div> Nexus</div>
<div className="flex items-center gap-2 font-semibold text-xl"><div className="w-6 h-6 border-2 border-black rounded-full"></div> Global</div>
<div className="flex items-center gap-2 font-semibold text-xl"><div className="w-6 h-6 bg-black rounded-tr-xl"></div> Swift</div>
<div className="flex items-center gap-2 font-semibold text-xl"><div className="w-6 h-6 border-black border-2 rounded-sm"></div> Tech</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mb-24">
<div className="bg-black rounded-[2.5rem] p-8 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[450px]">
<div className="relative z-10 w-full md:w-1/2">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-8 leading-tight">
                        Control Company <br/>
                        Spend in Real-Time
                    </h2>
<p className="text-neutral-400 mb-8 max-w-sm text-lg">Never wait for end-of-month reports again. See every transaction as it happens.</p>
<button className="bg-white text-black text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2">
                        Start Now
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="relative z-10 mt-12 md:mt-0 w-full max-w-xs transform md:translate-x-10">
<div className="bg-white rounded-3xl p-5 shadow-2xl relative">
<div className="flex justify-between items-center mb-6">
<div>
<span className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">Current Float</span>
<h3 className="text-2xl font-semibold tracking-tight">$42,988.00</h3>
</div>
<div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-[#ccf32f]">
<i className="w-4 h-4" data-lucide="wallet"></i>
</div>
</div>
<div className="bg-neutral-50 rounded-xl p-3 mb-2 border border-neutral-100">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium">Marketing Budget</span>
<span className="text-xs text-neutral-500">75% used</span>
</div>
<div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
<div className="bg-black h-full w-3/4 rounded-full"></div>
</div>
</div>
<div className="space-y-3 mt-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><i className="w-3.5 h-3.5" data-lucide="plane"></i></div>
<div>
<p className="text-xs font-medium">Flight to NY</p>
<p className="text-[10px] text-neutral-400">Travel</p>
</div>
</div>
<span className="text-xs font-medium">-$450.00</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-orange-600"><i className="w-3.5 h-3.5" data-lucide="server"></i></div>
<div>
<p className="text-xs font-medium">Server Costs</p>
<p className="text-[10px] text-neutral-400">Infrastructure</p>
</div>
</div>
<span className="text-xs font-medium">-$1,200.00</span>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-black to-neutral-900">
<div className="absolute right-[-100px] bottom-[-100px] w-[500px] h-[500px] bg-[#ccf32f] rounded-full blur-[120px] opacity-10"></div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32 flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2 relative">

<div className="absolute -top-4 -left-4 w-full h-full bg-[#ccf32f] rounded-[2rem] transform -rotate-1"></div>

<div className="relative bg-neutral-950 rounded-[2rem] p-8 text-white shadow-xl h-80 overflow-hidden flex flex-col">
<div className="flex justify-between items-start mb-6">
<div>
<span className="text-sm text-neutral-400">Burn Rate</span>
<h4 className="text-3xl font-medium mt-1">$12.4k <span className="text-sm text-neutral-500 font-normal">/ month</span></h4>
</div>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-[#ccf32f]"></span>
<span className="w-2 h-2 rounded-full bg-neutral-700"></span>
</div>
</div>

<div className="mt-auto flex items-end justify-between gap-2 h-32 px-2">
<div className="w-full bg-neutral-800 rounded-t-sm h-[30%] hover:bg-[#ccf32f] transition-colors"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[45%] hover:bg-[#ccf32f] transition-colors"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[35%] hover:bg-[#ccf32f] transition-colors"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[60%] hover:bg-[#ccf32f] transition-colors"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[50%] hover:bg-[#ccf32f] transition-colors"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[75%] hover:bg-[#ccf32f] transition-colors"></div>
<div className="w-full bg-white rounded-t-sm h-[65%] shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
</div>
<div className="flex justify-between text-[10px] text-neutral-500 mt-2 px-1 font-mono">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Track Expenses Live</h2>
<p className="text-lg text-neutral-500 leading-relaxed">
                    Monitor your burn rate and cash flow with precision. StaffPay updates your dashboard the moment a card is swiped or an invoice is paid.
                </p>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-[#ccf32f] flex items-center justify-center"><i className="w-3 h-3 text-black" data-lucide="check"></i></div>
<span className="text-neutral-800 font-medium">Categorized spending reports</span>
</li>
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-[#ccf32f] flex items-center justify-center"><i className="w-3 h-3 text-black" data-lucide="check"></i></div>
<span className="text-neutral-800 font-medium">Departmental budget tracking</span>
</li>
</ul>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32 flex flex-col-reverse md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Cards for Every Role</h2>
<p className="text-lg text-neutral-500 leading-relaxed mb-6">
                    Whether it's a subscription card for your DevOps team or a travel card for Sales, issue the right instrument for the job.
                </p>
<div className="flex flex-wrap gap-3">
<span className="bg-neutral-100 px-3 py-1.5 rounded-lg text-sm font-medium">Virtual Cards</span>
<span className="bg-neutral-100 px-3 py-1.5 rounded-lg text-sm font-medium">Physical Cards</span>
<span className="bg-neutral-100 px-3 py-1.5 rounded-lg text-sm font-medium">Single-Use Cards</span>
</div>
</div>
<div className="w-full md:w-1/2 relative h-[400px]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#ccf32f] rounded-full opacity-60 blur-3xl"></div>

<div className="absolute top-10 left-10 bg-white p-3 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex items-center gap-3 w-52 animate-[bounce_4s_infinite]">
<div className="w-9 h-9 rounded-full bg-black flex items-center justify-center"><span className="text-white text-xs font-bold">IT</span></div>
<div>
<p className="text-xs font-semibold">Dev Ops Team</p>
<p className="text-[10px] text-neutral-500">Subscription Card</p>
</div>
<div className="ml-auto text-xs font-semibold bg-green-100 text-green-700 px-1.5 py-0.5 rounded">Active</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-xl shadow-2xl flex items-center gap-3 w-60 z-10 border border-neutral-800">
<div className="w-9 h-9 rounded-full bg-[#ccf32f] flex items-center justify-center"><i className="w-4 h-4 text-black" data-lucide="crown"></i></div>
<div>
<p className="text-xs font-semibold">Executive Card</p>
<p className="text-[10px] text-neutral-400">Unlimited Travel</p>
</div>
<i className="w-4 h-4 ml-auto opacity-50 rotate-90" data-lucide="wifi"></i>
</div>
<div className="absolute bottom-20 right-10 bg-white p-3 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex items-center gap-3 w-52 animate-[bounce_5s_infinite]">
<div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center"><span className="text-blue-600 text-xs font-bold">MK</span></div>
<div>
<p className="text-xs font-semibold">Marketing Ad Spend</p>
<p className="text-[10px] text-neutral-500">Facebook/Google</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24 text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">Simplify Your Payroll <br/> Process Today</h2>
<div className="flex justify-center gap-4">
<button className="bg-black text-white text-base font-medium px-8 py-4 rounded-full hover:bg-neutral-800 transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-xl">
                    Get Started Free
                    <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<button className="bg-white text-black border border-neutral-200 text-base font-medium px-8 py-4 rounded-full hover:bg-neutral-50 transition-colors">
                    Contact Sales
                </button>
</div>
</section>
</main>

<footer className="bg-black text-white pt-20 pb-10 rounded-t-[3rem] mt-10">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-neutral-800 pb-16">

<div className="col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-4 h-4 rounded-full bg-[#ccf32f]"></div>
<span className="text-lg font-medium">StaffPay</span>
</div>
<p className="text-sm text-neutral-500 leading-relaxed">The all-in-one financial platform for modern companies and remote teams.</p>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-6">Product</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Corporate Cards</a></li>
<li><a className="hover:text-white transition-colors" href="#">Global Payroll</a></li>
<li><a className="hover:text-white transition-colors" href="#">Expense Management</a></li>
<li><a className="hover:text-white transition-colors" href="#">Accounting Integrations</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-6">Company</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Customers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Legal</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-6">Stay Updated</h4>
<div className="relative">
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-full py-3 pl-5 pr-12 text-sm text-white focus:outline-none focus:border-[#ccf32f] transition-colors placeholder:text-neutral-600" placeholder="Work email" type="email"/>
<button className="absolute right-2 top-1.5 w-9 h-9 bg-[#ccf32f] rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 text-neutral-500 text-sm gap-4">
<p>© 2024 StaffPay Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
