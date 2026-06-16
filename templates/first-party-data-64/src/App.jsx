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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
<iconify-icon icon="solar:layers-linear" width="18"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-slate-900">
            1PD Ops
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-indigo-600 transition-colors" href="#agenda">
            Agenda
          </a>
<a className="hover:text-indigo-600 transition-colors" href="#speakers">
            Speakers
          </a>
<a className="hover:text-indigo-600 transition-colors" href="#pricing">
            Pricing
          </a>
</div>
<a className="hidden md:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg" href="#reserve">
          Reserve Seat
        </a>
</div>
</nav>

<header className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden mesh-gradient">

<div className="absolute inset-0 bg-grid-light pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-6 z-10">
<div className="flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900 border border-slate-800 shadow-xl shadow-rose-500/10 text-white text-xs font-bold uppercase tracking-wider mb-8 animate-fade-in-up">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
</span>
            We are back again !!!
          </div>

<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-bold text-slate-900 tracking-tight max-w-6xl mb-8">
            3rd Edition of
            <br/>
<span className="text-gradient">Performance Marketing Summit</span>
<span className="block md:text-5xl text-4xl font-semibold text-slate-400 mt-3">
              - 2026
            </span>
</h1>

<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Workshop by top 1% Marketers who have taken brands from zero to
            hundred.
          </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-700 hover:to-orange-600 text-white rounded-xl font-bold transition-all shadow-xl shadow-rose-500/25 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5" href="#pricing">
              Get early bird pass now
              <span className="bg-white/20 px-1.5 py-0.5 rounded text-sm ml-1">
                Rs.1999/-
              </span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-xl font-semibold transition-all shadow-sm flex items-center justify-center gap-2" href="#agenda">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
              See Agenda
            </a>
</div>

<div className="mt-20 relative w-full max-w-4xl mx-auto perspective-[2000px] group">

<div className="absolute -inset-10 bg-gradient-to-r from-rose-500 via-orange-500 to-yellow-500 opacity-20 blur-3xl rounded-full group-hover:opacity-30 transition-opacity duration-700"></div>

<div className="relative bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden transform rotate-x-12 group-hover:rotate-0 transition-transform duration-700 ease-out p-1">

<div className="h-10 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/50">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>
<div className="mx-auto w-32 h-4 rounded-full bg-slate-100"></div>
</div>

<div className="p-6 md:p-10 bg-white grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
<div className="text-slate-400 text-xs font-medium uppercase mb-2">
                    Event Match Quality
                  </div>
<div className="flex items-end gap-2">
<div className="text-3xl font-semibold text-slate-900">
                      9.2/10
                    </div>
<div className="text-lime-600 text-xs font-semibold mb-1 flex items-center">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                      +42%
                    </div>
</div>
<div className="w-full bg-slate-200 h-1.5 rounded-full mt-3 overflow-hidden">
<div className="bg-lime-500 w-[92%] h-full rounded-full"></div>
</div>
</div>

<div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
<div className="text-slate-400 text-xs font-medium uppercase mb-2">
                    Signal Loss
                  </div>
<div className="flex items-end gap-2">
<div className="text-3xl font-semibold text-slate-900">
                      0.8%
                    </div>
<div className="text-lime-600 text-xs font-semibold mb-1 flex items-center">
<iconify-icon icon="solar:arrow-right-down-linear"></iconify-icon>
                      -28%
                    </div>
</div>
<div className="w-full bg-slate-200 h-1.5 rounded-full mt-3 overflow-hidden">
<div className="bg-rose-500 w-[8%] h-full rounded-full"></div>
</div>
</div>

<div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
<div className="text-slate-400 text-xs font-medium uppercase mb-2">
                    Attributed Rev
                  </div>
<div className="flex items-end gap-2">
<div className="text-3xl font-semibold text-slate-900">
                      $142k
                    </div>
<div className="text-lime-600 text-xs font-semibold mb-1 flex items-center">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                      +15%
                    </div>
</div>
<div className="flex gap-1 mt-3">
<div className="h-6 w-1 bg-orange-200 rounded-sm"></div>
<div className="h-6 w-1 bg-orange-300 rounded-sm"></div>
<div className="h-6 w-1 bg-orange-400 rounded-sm"></div>
<div className="h-6 w-1 bg-orange-500 rounded-sm"></div>
<div className="h-6 w-1 bg-orange-600 rounded-sm"></div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 pt-8 border-t border-slate-200/60 w-full max-w-4xl">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Join Growth Leaders From
            </p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 font-bold text-lg text-slate-800 tracking-tight">
<iconify-icon className="text-indigo-600" icon="solar:box-bold-duotone"></iconify-icon>
                STACK
              </div>
<div className="flex items-center gap-2 font-bold text-lg text-slate-800 tracking-tight">
<iconify-icon className="text-indigo-600" icon="solar:layers-bold-duotone"></iconify-icon>
                LAYER
              </div>
<div className="flex items-center gap-2 font-bold text-lg text-slate-800 tracking-tight">
<iconify-icon className="text-indigo-600" icon="solar:graph-up-bold-duotone"></iconify-icon>
                SCALE
              </div>
<div className="flex items-center gap-2 font-bold text-lg text-slate-800 tracking-tight">
<iconify-icon className="text-indigo-600" icon="solar:infinity-bold-duotone"></iconify-icon>
                LOOP
              </div>
<div className="flex items-center gap-2 font-bold text-lg text-slate-800 tracking-tight">
<iconify-icon className="text-indigo-600" icon="solar:bolt-bold-duotone"></iconify-icon>
                VOLT
              </div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-slate-50 relative border-y border-slate-200">
<div className="max-w-5xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
              Your Marketing Stack
              <br/>
<span className="text-rose-500">Is Broken.</span>
</h2>
<p className="text-slate-600 text-lg mb-8 leading-relaxed">
              The old playbook of relying on pixel data is dead. If you're
              seeing discrepancies between ad manager and your backend, you're
              flying blind.
            </p>
<div className="space-y-4">
<div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-colors">
<iconify-icon className="text-rose-500 mt-1 text-xl shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-slate-700">
                  Meta under-reporting conversions by 30%+
                </span>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-colors">
<iconify-icon className="text-rose-500 mt-1 text-xl shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-slate-700">
                  GA4 misalignment causing budget waste
                </span>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-colors">
<iconify-icon className="text-rose-500 mt-1 text-xl shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-slate-700">
                  CRM completely disconnected from ad platforms
                </span>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-rose-200 to-indigo-200 rounded-3xl opacity-50 blur-xl"></div>
<div className="relative bg-white border border-slate-200 rounded-2xl p-8 shadow-xl">
<div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
<span className="text-xs font-semibold text-slate-400 uppercase">
                  Current State
                </span>
<span className="text-xs font-semibold text-rose-500 bg-rose-50 px-2 py-1 rounded">
                  Critical Error
                </span>
</div>

<div className="flex items-end gap-3 h-32 mb-4 px-2">
<div className="w-1/5 bg-slate-100 h-[40%] rounded-t-lg"></div>
<div className="w-1/5 bg-slate-100 h-[60%] rounded-t-lg"></div>
<div className="w-1/5 bg-slate-100 h-[30%] rounded-t-lg"></div>
<div className="w-1/5 bg-slate-100 h-[50%] rounded-t-lg"></div>
<div className="w-1/5 bg-rose-100 border border-rose-200 h-[20%] rounded-t-lg relative group flex items-end justify-center pb-2">
<iconify-icon className="text-rose-500" icon="solar:danger-triangle-bold"></iconify-icon>
</div>
</div>
<p className="text-center text-xl font-medium text-slate-900 mt-8">
                "You don’t have a marketing problem.
                <br/>
                You have a
                <span className="text-indigo-600 border-b-2 border-indigo-200">
                  1PD Ops
                </span>
                problem."
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-white" id="agenda">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-50 opacity-50 blur-[100px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50 opacity-50 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
            Tactical Operations.
            <br/>
<span className="text-slate-400">No Fluff.</span>
</h2>
<p className="text-slate-500 text-lg">
            Four intensive modules designed to fix your data stack immediately.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="glass-panel p-8 rounded-2xl group transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">
              01. Fix Meta Signal Loss
            </h3>
<p className="text-slate-500 text-sm leading-relaxed">
              Implement advanced matching and server-side tracking to reclaim
              the 30% of data you're currently losing due to iOS privacy
              changes.
            </p>
</div>

<div className="glass-panel p-8 rounded-2xl group transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
<iconify-icon icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">
              02. CAPI Implementation
            </h3>
<p className="text-slate-500 text-sm leading-relaxed">
              Stop relying on third-party plugins. Learn the proper Conversions
              API architecture that de-duplicates events and increases event
              match quality.
            </p>
</div>

<div className="glass-panel p-8 rounded-2xl group transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
<iconify-icon icon="solar:link-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">
              03. CRM &amp; Ad Platform Bridge
            </h3>
<p className="text-slate-500 text-sm leading-relaxed">
              Feed offline conversions and qualified lead data back into Google
              and Meta to train the algorithms on revenue, not just clicks.
            </p>
</div>

<div className="glass-panel p-8 rounded-2xl group transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">
              04. Decision-Ready Dashboards
            </h3>
<p className="text-slate-500 text-sm leading-relaxed">
              Build a Looker Studio or Tableau view that actually aligns with
              finance. Calculate true MER and contribution margin in real-time.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-4xl mx-auto px-6">

<div className="bg-white border border-indigo-100 shadow-xl shadow-indigo-100 rounded-3xl p-8 mb-16 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="text-left">
<div className="text-indigo-600 font-bold tracking-wide uppercase text-xs mb-2">
                Previous Editions Sold Out
              </div>
<h4 className="text-2xl font-semibold text-slate-900">
                Seats are strictly limited.
              </h4>
<p className="text-slate-500 text-sm mt-1">
                Don't miss the next cohort.
              </p>
</div>
<div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
<div className="text-center">
<span className="block text-2xl font-bold text-slate-900 font-mono">
                  04
                </span>
<span className="text-[10px] text-slate-500 uppercase font-semibold">
                  Days
                </span>
</div>
<div className="text-slate-400">:</div>
<div className="text-center">
<span className="block text-2xl font-bold text-slate-900 font-mono">
                  12
                </span>
<span className="text-[10px] text-slate-500 uppercase font-semibold">
                  Hours
                </span>
</div>
<div className="text-slate-400">:</div>
<div className="text-center">
<span className="block text-2xl font-bold text-slate-900 font-mono">
                  45
                </span>
<span className="text-[10px] text-slate-500 uppercase font-semibold">
                  Mins
                </span>
</div>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-white p-6 rounded-2xl text-left border border-slate-200 shadow-sm">
<div className="flex text-amber-400 mb-3">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-700 text-sm mb-6 leading-relaxed">
              "Within 48 hours of implementing the CAPI structure from 1PD Ops,
              our match rates on Meta jumped from 4.5/10 to 8.2/10. CPA dropped
              20% immediately."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xs">
                SJ
              </div>
<div>
<div className="text-slate-900 text-xs font-bold">
                  Sarah Jenkins
                </div>
<div className="text-slate-500 text-[10px]">
                  CMO, FinTech Scaleup
                </div>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-2xl text-left border border-slate-200 shadow-sm">
<div className="flex text-amber-400 mb-3">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-700 text-sm mb-6 leading-relaxed">
              "No fluff, just pure tactical execution. We rebuilt our entire
              attribution model based on the Module 3 framework. Essential for
              any growth team."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 font-bold text-xs">
                MD
              </div>
<div>
<div className="text-slate-900 text-xs font-bold">Mark D.</div>
<div className="text-slate-500 text-[10px]">
                  Head of Growth, DTC Brand
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-white" id="pricing">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-center text-slate-900 mb-16 tracking-tight">
          Simple Pricing
        </h2>
<div className="grid md:grid-cols-2 gap-8 items-stretch">

<div className="p-8 rounded-3xl border border-slate-200 bg-white flex flex-col hover:border-slate-300 transition-colors">
<div className="mb-4">
<h3 className="text-lg font-semibold text-slate-900">Live Access</h3>
<p className="text-slate-500 text-sm mt-1">
                Attend the live workshop
              </p>
</div>
<div className="text-4xl font-semibold text-slate-900 mb-8">$299</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                Live Workshop Access
              </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                Q&amp;A Session
              </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                Digital Handouts
              </li>
</ul>
<a className="block w-full py-3.5 rounded-xl border border-slate-200 text-slate-900 text-center text-sm font-semibold hover:bg-slate-50 transition-colors" href="#">
              Get Ticket
            </a>
</div>

<div className="p-8 rounded-3xl border border-indigo-200 bg-indigo-50/30 flex flex-col relative ring-1 ring-indigo-500/20">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
              Most Popular
            </div>
<div className="mb-4">
<h3 className="text-lg font-semibold text-slate-900">
                Full Ops System
              </h3>
<p className="text-slate-500 text-sm mt-1">
                Live + Recordings + Templates
              </p>
</div>
<div className="flex items-baseline gap-2 mb-8">
<div className="text-4xl font-semibold text-slate-900">$499</div>
<div className="text-sm text-slate-400 line-through decoration-slate-400">
                $799
              </div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-800">
<iconify-icon className="text-indigo-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                Everything in Live Access
              </li>
<li className="flex items-center gap-3 text-sm text-slate-800">
<iconify-icon className="text-indigo-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                Lifetime Recording Access
              </li>
<li className="flex items-center gap-3 text-sm text-slate-800">
<iconify-icon className="text-indigo-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
</li>
</ul>
<a className="block w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-center text-sm font-semibold shadow-xl shadow-slate-900/10 transition-all" href="#">
              Secure VIP Seat
            </a>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-white">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-t from-indigo-50 to-transparent opacity-70 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-slate-900 mb-6">
          Fix Your Marketing Signals.
          <br/>
<span className="text-slate-400">Own Your Data.</span>
</h2>
<div className="flex flex-col items-center gap-6 mt-10">
<a className="px-10 py-5 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl text-lg font-semibold transition-all shadow-xl shadow-indigo-600/30 flex items-center gap-2 transform hover:-translate-y-1" href="#pricing">
            Secure My Seat
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<p className="text-sm text-slate-500">
            100% Money-back guarantee if you don't find value.
          </p>
</div>
</div>
</section>
<footer className="py-8 border-t border-slate-200 bg-white">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-slate-500 text-xs font-medium">
          © 2024 1PD Ops. All rights reserved.
        </div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-indigo-600 transition-colors" href="#">
<iconify-icon icon="solar:plain-2-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-indigo-600 transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
