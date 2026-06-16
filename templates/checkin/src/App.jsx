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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center transition-all">
<div className="text-xl font-semibold tracking-tighter text-[#001F3F] lowercase">shashi.ai</div>
<div className="hidden md:flex space-x-8 text-sm font-medium text-gray-500">
<a className="text-[#001F3F]" href="#">Arrival Suite</a>
<a className="hover:text-[#001F3F] transition-colors" href="#">Platform</a>
<a className="hover:text-[#001F3F] transition-colors" href="#">Hardware</a>
<a className="hover:text-[#001F3F] transition-colors" href="#">Pricing</a>
</div>
<button className="bg-[#001F3F] text-white text-xs md:text-sm font-medium px-5 py-2.5 rounded-full hover:bg-opacity-90 hover:shadow-md transition-all">
            Request Demo
        </button>
</nav>

<section className="relative pt-24 pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[40rem] bg-gradient-to-b from-[#F8F9FA] to-transparent -z-10 rounded-b-[100%] opacity-50 blur-3xl"></div>
<div className="lg:w-[55%] space-y-8 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[#001F3F] text-xs font-medium shadow-sm">
<iconify-icon height="16" icon="solar:stars-linear" width="16"></iconify-icon>
                shashi.ai Arrival Suite
            </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#001F3F] leading-[1.1]">
                Digital Check-In:<br/>The End of the<br/>Front Desk Queue.
            </h1>
<p className="text-base md:text-lg text-gray-500 leading-relaxed font-normal max-w-xl">
                A fully digital arrival experience available on mobile and kiosk—enabling guests to complete the entire arrival process before they even reach the property.
            </p>
<div className="pt-4">
<button className="bg-[#001F3F] text-white text-sm font-medium px-8 py-4 rounded-xl hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2">
                    Request a Technical Demo
                    <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="lg:w-[45%] relative w-full flex justify-center z-10 perspective-1000">
<div className="relative w-72 md:w-80 h-[38rem] bg-white rounded-[3rem] shadow-2xl border-[10px] border-gray-50 overflow-hidden shrink-0 flex flex-col transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700">

<div className="absolute top-0 inset-x-0 h-7 bg-gray-50 rounded-b-2xl w-36 mx-auto z-20"></div>

<div className="bg-[#F8F9FA] flex-1 p-6 flex flex-col pt-14 relative z-10 h-full">
<div className="w-12 h-12 bg-white text-[#001F3F] rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
<iconify-icon height="24" icon="solar:buildings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#001F3F] mb-1">Welcome back.</h3>
<p className="text-sm text-gray-500 mb-8">Your arrival flow is ready.</p>
<div className="space-y-4 flex-1">

<div className="bg-white rounded-2xl p-4 shadow-sm border border-[#001F3F]/10 flex items-center gap-4 relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-[#001F3F]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-full bg-[#001F3F] flex items-center justify-center text-white shrink-0">
<iconify-icon height="20" icon="solar:user-id-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-[#001F3F]">Verify Identity</div>
<div className="text-xs text-gray-500">Scan government ID</div>
</div>
<iconify-icon className="ml-auto text-[#001F3F]" height="20" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</div>

<div className="bg-white/50 rounded-2xl p-4 border border-white flex items-center gap-4 opacity-60">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 shrink-0">
<iconify-icon height="20" icon="solar:pen-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-600">Digital Signature</div>
<div className="text-xs text-gray-400">Sign registration card</div>
</div>
</div>

<div className="bg-white/50 rounded-2xl p-4 border border-white flex items-center gap-4 opacity-60">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 shrink-0">
<iconify-icon height="20" icon="solar:key-minimalistic-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-600">Room Assignment</div>
<div className="text-xs text-gray-400">Pending verification</div>
</div>
</div>
</div>

<div className="mt-6 pt-6 border-t border-gray-200/50">
<div className="w-1/3 h-1 bg-gray-300 rounded-full mx-auto"></div>
</div>
</div>
</div>

<div className="absolute -z-10 w-[120%] h-[120%] bg-gradient-to-tr from-[#001F3F]/10 to-transparent rounded-[4rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl mix-blend-multiply"></div>
</div>
</section>

<section className="bg-[#F8F9FA] py-24 px-6 md:px-12 border-y border-gray-100">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-3">Module Overview</h2>
<h3 className="text-3xl font-semibold tracking-tight text-[#001F3F]">Omnichannel Arrival Architecture</h3>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8">

<div className="glass-card rounded-2xl p-8 transition-all hover:bg-white border border-transparent hover:border-gray-200">
<div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#001F3F] mb-6 shadow-sm">
<iconify-icon height="24" icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight text-[#001F3F] mb-3">Mobile-First</h4>
<p className="text-sm text-gray-500 leading-relaxed font-normal">Check-in via guest smartphone (iOS &amp; Android) for a truly frictionless arrival process before stepping foot on property.</p>
</div>

<div className="glass-card rounded-2xl p-8 transition-all hover:bg-white border border-transparent hover:border-gray-200">
<div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#001F3F] mb-6 shadow-sm">
<iconify-icon height="24" icon="solar:monitor-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight text-[#001F3F] mb-3">Kiosk Support</h4>
<p className="text-sm text-gray-500 leading-relaxed font-normal">On-property self-service kiosks for guests who prefer a physical touchpoint without the wait of a traditional desk.</p>
</div>

<div className="glass-card rounded-2xl p-8 transition-all hover:bg-white border border-transparent hover:border-gray-200">
<div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#001F3F] mb-6 shadow-sm">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight text-[#001F3F] mb-3">Staff Reallocation</h4>
<p className="text-sm text-gray-500 leading-relaxed font-normal">Reduce front desk load by up to 40% and reallocate staff to higher-value, personalized guest service activities.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-4 sticky top-32">
<h2 className="text-3xl font-semibold tracking-tight text-[#001F3F] mb-4">Enterprise-Grade Workflows</h2>
<p className="text-sm text-gray-500 leading-relaxed">Built for complex hospitality environments, combining deep PMS integration with bank-level security for identity verification.</p>
</div>
<div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-16">

<div className="flex gap-5 group">
<div className="shrink-0 mt-1 w-10 h-10 rounded-lg bg-[#F8F9FA] border border-gray-100 flex items-center justify-center text-[#001F3F] group-hover:bg-[#001F3F] group-hover:text-white transition-colors">
<iconify-icon height="22" icon="solar:id-card-linear" width="22"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-[#001F3F] mb-2 tracking-tight">Government ID Verification</h4>
<p className="text-sm text-gray-500 leading-relaxed">Secure capture and verification of government-issued IDs within the digital flow, utilizing AI-driven optical character recognition.</p>
</div>
</div>

<div className="flex gap-5 group">
<div className="shrink-0 mt-1 w-10 h-10 rounded-lg bg-[#F8F9FA] border border-gray-100 flex items-center justify-center text-[#001F3F] group-hover:bg-[#001F3F] group-hover:text-white transition-colors">
<iconify-icon height="22" icon="solar:pen-new-square-linear" width="22"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-[#001F3F] mb-2 tracking-tight">Digital Signature Capture</h4>
<p className="text-sm text-gray-500 leading-relaxed">Legally binding digital signature capture for terms and conditions and registration cards, stored securely against the guest profile.</p>
</div>
</div>

<div className="flex gap-5 group">
<div className="shrink-0 mt-1 w-10 h-10 rounded-lg bg-[#F8F9FA] border border-gray-100 flex items-center justify-center text-[#001F3F] group-hover:bg-[#001F3F] group-hover:text-white transition-colors">
<iconify-icon height="22" icon="solar:bed-linear" width="22"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-[#001F3F] mb-2 tracking-tight">Real-Time Room Logic</h4>
<p className="text-sm text-gray-500 leading-relaxed">Automated, PMS-integrated room assignment based on real-time availability, housekeeping status, and complex guest preferences.</p>
</div>
</div>

<div className="flex gap-5 group">
<div className="shrink-0 mt-1 w-10 h-10 rounded-lg bg-[#F8F9FA] border border-gray-100 flex items-center justify-center text-[#001F3F] group-hover:bg-[#001F3F] group-hover:text-white transition-colors">
<iconify-icon height="22" icon="solar:bell-linear" width="22"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-[#001F3F] mb-2 tracking-tight">Room-Ready Notifications</h4>
<p className="text-sm text-gray-500 leading-relaxed">Automated pre-arrival messaging via SMS or email to alert guests exactly when their room is ready, bypassing the desk entirely.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 md:px-12 bg-white relative z-20">
<div className="max-w-6xl mx-auto">
<div className="metric-shadow rounded-3xl p-10 md:p-14 bg-white border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-12 text-center relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F8F9FA]/50 to-transparent pointer-events-none"></div>
<div className="space-y-3 relative z-10 flex-1">
<div className="text-5xl lg:text-6xl font-semibold tracking-tight text-[#001F3F]">↓40%</div>
<div className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Reduction in Front Desk Load</div>
</div>
<div className="w-full md:w-px h-px md:h-20 bg-gray-100 relative z-10 shrink-0"></div>
<div className="space-y-3 relative z-10 flex-1">
<div className="text-5xl lg:text-6xl font-semibold tracking-tight text-[#001F3F]">0<span className="text-2xl text-gray-300 font-medium ml-1">QUEUE</span></div>
<div className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Improved Arrival Experience</div>
</div>
<div className="w-full md:w-px h-px md:h-20 bg-gray-100 relative z-10 shrink-0"></div>
<div className="space-y-3 relative z-10 flex-1">
<div className="text-5xl lg:text-6xl font-semibold tracking-tight text-[#001F3F]">↑GSS</div>
<div className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Uplift in Satisfaction Scores</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F8F9FA] py-32 px-6 md:px-12">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-3xl font-semibold tracking-tight text-[#001F3F]">The Guest Journey</h2>
</div>
<div className="relative">

<div className="hidden md:block absolute top-[2.25rem] left-[10%] right-[10%] h-[1px] bg-gray-200 -z-10"></div>
<div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-6">

<div className="flex flex-row md:flex-col items-start md:items-center md:text-center gap-6 w-full md:w-1/4 group relative">
<div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#001F3F] shadow-sm group-hover:border-[#001F3F] group-hover:scale-105 transition-all z-10 shrink-0">
<iconify-icon height="26" icon="solar:letter-linear" width="26"></iconify-icon>
</div>
<div className="mt-2 md:mt-0">
<h4 className="text-sm font-semibold text-[#001F3F] mb-1.5 tracking-tight uppercase">1. Invite</h4>
<p className="text-xs text-gray-500 leading-relaxed font-normal">Automated pre-arrival message sent to guest via secure link.</p>
</div>

<div className="md:hidden absolute top-16 bottom-[-3rem] left-8 w-[1px] bg-gray-200 -z-10"></div>
</div>

<div className="flex flex-row md:flex-col items-start md:items-center md:text-center gap-6 w-full md:w-1/4 group relative">
<div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#001F3F] shadow-sm group-hover:border-[#001F3F] group-hover:scale-105 transition-all z-10 shrink-0">
<iconify-icon height="26" icon="solar:user-id-linear" width="26"></iconify-icon>
</div>
<div className="mt-2 md:mt-0">
<h4 className="text-sm font-semibold text-[#001F3F] mb-1.5 tracking-tight uppercase">2. Verify</h4>
<p className="text-xs text-gray-500 leading-relaxed font-normal">Guest uploads ID and signs digitally on their personal device.</p>
</div>

<div className="md:hidden absolute top-16 bottom-[-3rem] left-8 w-[1px] bg-gray-200 -z-10"></div>
</div>

<div className="flex flex-row md:flex-col items-start md:items-center md:text-center gap-6 w-full md:w-1/4 group relative">
<div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#001F3F] shadow-sm group-hover:border-[#001F3F] group-hover:scale-105 transition-all z-10 shrink-0">
<iconify-icon height="26" icon="solar:cpu-linear" width="26"></iconify-icon>
</div>
<div className="mt-2 md:mt-0">
<h4 className="text-sm font-semibold text-[#001F3F] mb-1.5 tracking-tight uppercase">3. Assign</h4>
<p className="text-xs text-gray-500 leading-relaxed font-normal">AI engine assigns the optimal room via deep PMS integration.</p>
</div>

<div className="md:hidden absolute top-16 bottom-[-3rem] left-8 w-[1px] bg-gray-200 -z-10"></div>
</div>

<div className="flex flex-row md:flex-col items-start md:items-center md:text-center gap-6 w-full md:w-1/4 group relative">
<div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#001F3F] shadow-sm group-hover:border-[#001F3F] group-hover:scale-105 transition-all z-10 shrink-0">
<iconify-icon height="26" icon="solar:bell-bing-linear" width="26"></iconify-icon>
</div>
<div className="mt-2 md:mt-0">
<h4 className="text-sm font-semibold text-[#001F3F] mb-1.5 tracking-tight uppercase">4. Notify</h4>
<p className="text-xs text-gray-500 leading-relaxed font-normal">Guest receives a "Room Ready" notification with room details.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white border-b border-gray-100">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="bg-[#001F3F] rounded-3xl p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden transform md:-rotate-1 hover:rotate-0 transition-transform duration-500">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10">
<div className="text-xs font-semibold text-white/60 mb-6 tracking-widest uppercase">Arrival Suite Access</div>
<div className="flex items-baseline gap-2 mb-4">
<span className="text-6xl font-semibold tracking-tight">$8</span>
<span className="text-sm text-white/70 font-medium">/ room / month</span>
</div>
<p className="text-sm text-white/80 leading-relaxed mb-10 font-normal">Flat-rate pricing. Unlimited digital and kiosk check-ins. No hidden implementation or integration fees.</p>
<ul className="space-y-4 mb-10 text-sm text-white/90">
<li className="flex items-center gap-3">
<iconify-icon className="text-white/60" icon="solar:check-circle-linear" width="18"></iconify-icon> Full Identity Verification
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white/60" icon="solar:check-circle-linear" width="18"></iconify-icon> Digital Signature Storage
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white/60" icon="solar:check-circle-linear" width="18"></iconify-icon> Automated Room Assignment
                        </li>
</ul>
<button className="w-full bg-white text-[#001F3F] text-sm font-semibold py-4 rounded-xl hover:bg-gray-50 hover:shadow-lg transition-all">
                        Request Pricing Details
                    </button>
</div>
</div>

<div>
<h3 className="text-3xl font-semibold tracking-tight text-[#001F3F] mb-6">Seamless Ecosystem Integration</h3>
<p className="text-sm text-gray-500 mb-10 leading-relaxed font-normal max-w-md">
                    Native integration with leading Property Management Systems ensures perfect, bi-directional data flow for profiles, availability, and digital keys.
                </p>
<div className="space-y-4">
<div className="p-4 rounded-xl border border-gray-100 bg-[#F8F9FA]/50 flex items-center gap-4 hover:border-gray-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-gray-50 flex items-center justify-center text-[#001F3F]">
<iconify-icon icon="solar:server-square-linear" width="20"></iconify-icon>
</div>
<div className="font-medium text-sm text-[#001F3F]">Cloudbeds Native API</div>
<div className="ml-auto text-xs text-green-600 font-medium bg-green-50 px-2.5 py-1 rounded-full border border-green-100">Active</div>
</div>
<div className="p-4 rounded-xl border border-gray-100 bg-[#F8F9FA]/50 flex items-center gap-4 hover:border-gray-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-gray-50 flex items-center justify-center text-[#001F3F]">
<iconify-icon icon="solar:database-linear" width="20"></iconify-icon>
</div>
<div className="font-medium text-sm text-[#001F3F]">StayNTouch Integration</div>
<div className="ml-auto text-xs text-green-600 font-medium bg-green-50 px-2.5 py-1 rounded-full border border-green-100">Active</div>
</div>
<div className="p-4 rounded-xl border border-gray-100 bg-[#F8F9FA]/50 flex items-center gap-4 hover:border-gray-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-gray-50 flex items-center justify-center text-[#001F3F]">
<iconify-icon icon="solar:cloud-storage-linear" width="20"></iconify-icon>
</div>
<div className="font-medium text-sm text-[#001F3F]">YCS Platform Sync</div>
<div className="ml-auto text-xs text-green-600 font-medium bg-green-50 px-2.5 py-1 rounded-full border border-green-100">Active</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-32 px-6 md:px-12 text-center relative overflow-hidden">

<div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{backgroundImage: 'radial-gradient(#001F3F 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-2xl mx-auto space-y-8 relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#001F3F]">Ready to Reclaim Your Lobby?</h2>
<p className="text-base text-gray-500 font-normal leading-relaxed">
                Measure the impact of digital check-in with a 60-day pilot. See firsthand how reducing queue times translates to higher satisfaction and operational efficiency.
            </p>
<div className="pt-4">
<button className="bg-[#001F3F] text-white text-sm font-medium px-10 py-4 rounded-xl hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    Start Your Pilot Today
                </button>
</div>
</div>
</section>

<footer className="bg-[#F8F9FA] py-12 px-6 border-t border-gray-100 text-center flex flex-col items-center justify-center gap-4">
<div className="text-lg font-semibold tracking-tighter text-[#001F3F] lowercase">shashi.ai</div>
<div className="text-xs text-gray-400 font-medium">© 2023 shashi.ai. Enterprise Hospitality Solutions.</div>
</footer>

    </>
  );
}
