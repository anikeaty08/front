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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050507]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-10">
<a className="flex items-center gap-2 group" href="#">

<div className="w-6 h-6 bg-white rounded text-black flex items-center justify-center font-bold text-xs tracking-tighter">S</div>
<span className="text-sm font-medium tracking-tight text-white">Scout</span>
</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#">Platform</a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#">RCM</a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#">Dental Analytics</a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#">Sign in</a>
<a className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium px-4 py-2 rounded-md transition-all shadow-[0_0_15px_-3px_rgba(79,70,229,0.4)]" href="#">Book a Demo</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 border-b border-white/5 overflow-hidden">
<div className="absolute inset-0 hero-glow pointer-events-none z-0"></div>
<div className="absolute inset-0 grid-bg pointer-events-none z-0 opacity-50"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 hover:border-white/[0.15] transition-colors cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-xs text-gray-400">AI-Driven Insurance Verification is here</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-gradient mb-6 max-w-4xl mx-auto leading-[1.1]">
                The operating system for <br/>modern dental practices.
            </h1>
<p className="text-lg text-gray-400 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
                Automate your front desk, verify insurance in seconds, and recover lost revenue with Scout's intelligent RCM and analytics platform.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="bg-[#EEEEEE] hover:bg-white text-black px-6 py-3 rounded-full font-medium text-sm transition-all flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.2)]">
                    Request Demo
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="px-6 py-3 rounded-full font-medium text-sm text-gray-400 hover:text-white transition-colors bg-white/5 border border-white/5 hover:bg-white/10">
                    Calculate ROI
                </button>
</div>

<div className="relative max-w-5xl mx-auto perspective-[2000px]">
<div className="glass-panel-strong rounded-t-xl border-b-0 p-2 flex items-center gap-2">
<div className="flex gap-1.5 ml-2">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
<div className="mx-auto text-[10px] text-gray-500 font-medium flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-md border border-white/5">
<i className="w-3 h-3" data-lucide="lock"></i> scout.app/dashboard
                    </div>
</div>
<div className="glass-panel rounded-b-xl border-t-0 p-0 overflow-hidden shadow-2xl animate-float relative">

<div className="flex h-[600px] bg-[#090A0C]">

<div className="w-16 border-r border-white/5 flex flex-col items-center py-6 gap-6 bg-[#0B0C0E]">
<div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400"><i className="w-5 h-5" data-lucide="layout-dashboard"></i></div>
<div className="p-2 rounded-lg text-gray-500 hover:text-white transition-colors"><i className="w-5 h-5" data-lucide="users"></i></div>
<div className="p-2 rounded-lg text-gray-500 hover:text-white transition-colors"><i className="w-5 h-5" data-lucide="calendar-check"></i></div>
<div className="p-2 rounded-lg text-gray-500 hover:text-white transition-colors"><i className="w-5 h-5" data-lucide="shield-check"></i></div> 
<div className="p-2 rounded-lg text-gray-500 hover:text-white transition-colors"><i className="w-5 h-5" data-lucide="bar-chart-2"></i></div>
</div>

<div className="flex-1 p-8 overflow-hidden">

<div className="flex justify-between items-end mb-8">
<div>
<h3 className="text-xl font-medium text-white">Practice Overview</h3>
<p className="text-xs text-gray-500 mt-1">Today, Oct 24 • Dr. Sarah Miller DDS</p>
</div>
<div className="flex gap-3">
<button className="text-xs bg-white/5 hover:bg-white/10 text-white px-3 py-1.5 rounded border border-white/10 flex items-center gap-2">
<i className="w-3 h-3" data-lucide="refresh-cw"></i> Sync PMS
                                    </button>
</div>
</div>

<div className="grid grid-cols-4 gap-4 mb-8">
<div className="p-4 rounded-lg bg-white/[0.03] border border-white/[0.06]">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] uppercase tracking-wider text-gray-500">Gross Production</span>
<i className="w-3 h-3 text-emerald-500" data-lucide="trending-up"></i>
</div>
<div className="text-2xl font-medium text-white">$12,450</div>
<div className="text-[10px] text-emerald-500 mt-1">+12% vs yesterday</div>
</div>
<div className="p-4 rounded-lg bg-white/[0.03] border border-white/[0.06]">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] uppercase tracking-wider text-gray-500">Collections</span>
</div>
<div className="text-2xl font-medium text-white">$8,920</div>
<div className="text-[10px] text-gray-500 mt-1">72% Collection Rate</div>
</div>
<div className="p-4 rounded-lg bg-indigo-500/[0.05] border border-indigo-500/20 relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/10 blur-2xl"></div>
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] uppercase tracking-wider text-indigo-200/60">Insurance AR</span>
</div>
<div className="text-2xl font-medium text-indigo-300">$42,105</div>
<div className="text-[10px] text-indigo-400/60 mt-1">6 claims &gt; 90 days</div>
</div>
<div className="p-4 rounded-lg bg-white/[0.03] border border-white/[0.06]">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] uppercase tracking-wider text-gray-500">Hygiene Re-Appt</span>
</div>
<div className="text-2xl font-medium text-white">88%</div>
<div className="text-[10px] text-gray-500 mt-1">Target: 85%</div>
</div>
</div>

<div className="border border-white/10 rounded-lg bg-[#0B0C0E] overflow-hidden">
<div className="px-4 py-3 border-b border-white/5 flex justify-between items-center">
<span className="text-xs font-medium text-white">Morning Huddle • Insurance Status</span>
<span className="text-[10px] text-gray-500">Showing 4 of 28 patients</span>
</div>
<div className="divide-y divide-white/5">

<div className="px-4 py-3 flex items-center justify-between group hover:bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-[10px] font-bold">JD</div>
<div>
<div className="text-sm text-white font-medium">James Davis</div>
<div className="text-[10px] text-gray-500">08:00 AM • Cleaning &amp; Exam</div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right">
<div className="text-[10px] text-gray-400">Delta Dental PPO</div>
<div className="text-[10px] text-emerald-400 flex items-center justify-end gap-1">
<i className="w-3 h-3" data-lucide="check-circle-2"></i> Verified
                                                </div>
</div>
<div className="text-right w-24">
<div className="text-xs text-white">$1,200 rem.</div>
<div className="text-[10px] text-gray-500">Max Benefit</div>
</div>
</div>
</div>

<div className="px-4 py-3 flex items-center justify-between group hover:bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-[10px] font-bold">AS</div>
<div>
<div className="text-sm text-white font-medium">Amanda Smith</div>
<div className="text-[10px] text-gray-500">09:30 AM • Crown Prep (Start)</div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right">
<div className="text-[10px] text-gray-400">MetLife</div>
<div className="text-[10px] text-orange-400 flex items-center justify-end gap-1">
<i className="w-3 h-3" data-lucide="alert-circle"></i> Coverage Inactive
                                                </div>
</div>
<div className="text-right w-24">
<div className="text-xs text-white">$0.00</div>
<div className="text-[10px] text-gray-500">Est. Copay: $850</div>
</div>
</div>
</div>

<div className="px-4 py-3 flex items-center justify-between group hover:bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-[10px] font-bold">RW</div>
<div>
<div className="text-sm text-white font-medium">Robert Wilson</div>
<div className="text-[10px] text-gray-500">10:15 AM • Perio Maintenance</div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right">
<div className="text-[10px] text-gray-400">Aetna</div>
<div className="text-[10px] text-emerald-400 flex items-center justify-end gap-1">
<i className="w-3 h-3" data-lucide="check-circle-2"></i> Verified
                                                </div>
</div>
<div className="text-right w-24">
<div className="text-xs text-white">$850 rem.</div>
<div className="text-[10px] text-gray-500">Max Benefit</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 right-8 bg-[#15171B] border border-white/10 p-4 rounded-lg shadow-2xl max-w-[280px] z-20">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded bg-indigo-500/10 flex items-center justify-center text-indigo-400 flex-shrink-0">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
<div>
<div className="text-xs font-medium text-white mb-1">Opportunity Detected</div>
<p className="text-[10px] text-gray-400 leading-relaxed">
                                    Amanda Smith has $2,500 in unscheduled treatment. Coverage is inactive. Front desk alerted to collect prior to appointment.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-[10px] font-medium text-gray-600 mb-8 uppercase tracking-widest">Integrates seamlessly with</p>
<div className="flex flex-wrap justify-center gap-12 opacity-30 hover:opacity-50 transition-opacity">
<span className="text-sm font-bold font-serif text-white">OpenDental</span>
<span className="text-sm font-bold font-sans text-white tracking-tighter">EAGLESOFT</span>
<span className="text-sm font-bold font-sans text-white italic">Dentrix</span>
<span className="text-sm font-bold font-serif text-white">CURVE</span>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Revenue Cycle Management, <span className="text-gray-500">Autopilot Enabled.</span></h2>
<p className="text-gray-400 text-lg font-normal">Scout connects directly to your Practice Management Software to find hidden revenue and automate the tedious insurance verification process.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group card-hover transition-all">
<div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
<div className="w-64 h-64 bg-blue-500 rounded-full blur-[100px]"></div>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-400 border border-indigo-500/10">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Automated Insurance Verification</h3>
<p className="text-sm text-gray-400 leading-relaxed max-w-md">
                            Stop spending hours on the phone with payers. Scout's AI bots verify breakdown of benefits, history, and eligibility 2 days before the appointment.
                        </p>
</div>

<div className="mt-10 grid grid-cols-2 gap-4">
<div className="bg-[#0B0C0E] border border-white/5 rounded-lg p-4">
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="text-xs text-gray-500">Manual Process</div>
</div>
<div className="space-y-2">
<div className="h-1.5 bg-white/10 rounded-full w-full"></div>
<div className="h-1.5 bg-white/10 rounded-full w-3/4"></div>
<div className="h-1.5 bg-white/10 rounded-full w-1/2"></div>
</div>
<div className="mt-3 text-[10px] text-right text-gray-500">20 mins / patient</div>
</div>
<div className="bg-indigo-500/5 border border-indigo-500/20 rounded-lg p-4">
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
<div className="text-xs text-indigo-300">Scout AI</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<i className="w-3 h-3 text-indigo-400" data-lucide="check"></i>
<span className="text-[10px] text-indigo-200">Eligibility Verified</span>
</div>
<div className="flex items-center gap-2">
<i className="w-3 h-3 text-indigo-400" data-lucide="check"></i>
<span className="text-[10px] text-indigo-200">Benefits Breakdown</span>
</div>
</div>
<div className="mt-3 text-[10px] text-right text-indigo-400">Instant</div>
</div>
</div>
</div>

<div className="md:col-span-1 glass-panel rounded-2xl p-8 relative overflow-hidden group card-hover transition-all">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400 border border-emerald-500/10">
<i className="w-5 h-5" data-lucide="dollar-sign"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Patient Collections</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-8">
                        Automated text-to-pay reminders for outstanding balances. Reduce AR days by 40%.
                    </p>
<div className="space-y-3">
<div className="p-3 bg-[#0B0C0E] rounded-lg border border-white/5 flex gap-3">
<div className="mt-1 min-w-[24px] h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<i className="w-3 h-3" data-lucide="message-circle"></i>
</div>
<div>
<p className="text-[10px] text-gray-400 mb-1">Sent to Sarah M.</p>
<p className="text-xs text-white">"Hi Sarah, you have a balance of $124. Tap to pay securely."</p>
</div>
</div>
<div className="flex justify-center">
<div className="h-4 w-0.5 bg-white/10"></div>
</div>
<div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20 flex items-center justify-between">
<span className="text-xs text-emerald-200">Payment Received</span>
<span className="text-xs font-bold text-emerald-400">$124.00</span>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 card-hover transition-all">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400 border border-purple-500/10">
<i className="w-5 h-5" data-lucide="calendar-days"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Smart Scheduling</h3>
<p className="text-xs text-gray-400 leading-relaxed">
                        Identify patients due for hygiene or with unscheduled treatment and fill gaps automatically.
                    </p>
</div>

<div className="glass-panel rounded-2xl p-8 card-hover transition-all">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 text-orange-400 border border-orange-500/10">
<i className="w-5 h-5" data-lucide="pie-chart"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Case Acceptance</h3>
<p className="text-xs text-gray-400 leading-relaxed">
                        Visual treatment plans that show patients exactly what insurance covers vs out-of-pocket.
                    </p>
</div>

<div className="glass-panel rounded-2xl p-8 card-hover transition-all">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400 border border-blue-500/10">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Claims Intelligence</h3>
<p className="text-xs text-gray-400 leading-relaxed">
                        Track aging claims. AI flags denials and suggests corrections before you resubmit.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
<span className="text-[10px] font-medium text-indigo-400 uppercase tracking-wider">Sync Technology</span>
</div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-6">Your PMS is the source of truth.<br/>We make it actionable.</h2>
<p className="text-gray-400 mb-8 leading-relaxed">
                    Scout reads data directly from OpenDental, Eaglesoft, or Dentrix in real-time. No double entry. Just pure, actionable intelligence delivered to your dashboard.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<span className="text-sm text-gray-300">Real-time ledger syncing</span>
</li>
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<span className="text-sm text-gray-300">Write-back notes to patient file</span>
</li>
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<span className="text-sm text-gray-300">HIPAA Compliant &amp; Encrypted</span>
</li>
</ul>
</div>
<div className="relative">

<div className="relative rounded-xl bg-[#0B0C0E] border border-white/10 p-8 shadow-2xl">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl"></div>
<div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[300px] gap-8">

<div className="flex justify-between w-full px-8 opacity-50">
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded border border-white/10 bg-[#15171B] flex items-center justify-center"><i className="w-5 h-5 text-gray-500" data-lucide="server"></i></div>
<span className="text-[10px] text-gray-600">Server</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded border border-white/10 bg-[#15171B] flex items-center justify-center"><i className="w-5 h-5 text-gray-500" data-lucide="database"></i></div>
<span className="text-[10px] text-gray-600">Ledger</span>
</div>
</div>

<div className="w-20 h-20 rounded-2xl bg-[#15171B] border border-indigo-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.15)] relative">
<span className="font-bold text-white">Scout</span>

<div className="absolute w-full h-full border border-dashed border-white/10 rounded-full scale-150 animate-spin-slow"></div>
</div>

<div className="w-full">
<div className="bg-[#15171B] border border-white/10 rounded p-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs text-white">Sync Complete: 1,402 Records Updated</span>
</div>
<span className="text-[10px] text-gray-500 font-mono">14ms</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6">Uncover hidden revenue today.</h2>
<p className="text-gray-400 text-lg mb-10">Join 500+ high-growth dental practices using Scout to automate RCM and patient engagement.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    Book a Demo
                </button>
<button className="px-8 py-3.5 rounded-full font-medium text-sm text-gray-400 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all w-full sm:w-auto">
                    See Pricing
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-[#050507]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-6 gap-8">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-white rounded text-black flex items-center justify-center font-bold text-[10px]">S</div>
<span className="text-sm font-medium text-white">Scout</span>
</div>
<p className="text-xs text-gray-500 max-w-xs">
                    Intelligent RCM and Analytics for modern dental practices.
                </p>
<div className="mt-6 flex gap-4 text-gray-500">
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
<div className="col-span-1">
<h4 className="text-xs font-medium text-white mb-4">Product</h4>
<ul className="space-y-2 text-xs text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Insurance Verification</a></li>
<li><a className="hover:text-white transition-colors" href="#">Patient Collections</a></li>
<li><a className="hover:text-white transition-colors" href="#">Schedule Filling</a></li>
<li><a className="hover:text-white transition-colors" href="#">Analytics</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-xs font-medium text-white mb-4">Company</h4>
<ul className="space-y-2 text-xs text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-xs font-medium text-white mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">HIPAA</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
<p className="text-[10px] text-gray-600">© 2023 Scout Intelligence. All rights reserved.</p>
<div className="flex items-center gap-2 text-[10px] text-gray-600">
<span className="w-2 h-2 rounded-full bg-emerald-900 border border-emerald-700"></span>
                Systems Normal
             </div>
</div>
</footer>


    </>
  );
}
