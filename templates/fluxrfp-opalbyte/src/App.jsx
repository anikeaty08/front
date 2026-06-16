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



                    (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
                Cal("init", "30min", {origin:"https://app.cal.com"});
                
                  Cal.ns["30min"]("inline", {
                    elementOrSelector:"#my-cal-inline-30min",
                    config: {"layout":"month_view","theme":"dark"},
                    calLink: "opalbyte-8fdr28/30min",
                  });
                
                  Cal.ns["30min"]("ui", {"theme":"dark","hideEventTypeDetails":false,"layout":"month_view"});
                


        // Initialize Icons
        lucide.createIcons();

        // Simple Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 border-b bg-[#FDFCF8]/80 backdrop-blur-md border-gray-100/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 bg-black text-white">
<i className="w-4 h-4" data-lucide="layers"></i>
</div>
<span className="font-semibold text-lg tracking-tight">FluxRFP</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="transition-colors hover:text-black" href="#how-it-works">How it works</a>
<a className="transition-colors hover:text-black" href="#sourcing">Sourcing</a>
<a className="transition-colors hover:text-black" href="#reviews">Reviews</a>
<a className="transition-colors hover:text-black" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">

<a className="px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 bg-black text-white hover:bg-gray-800" href="#pricing">
                    Subscribe
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_50%_0%,rgba(255,237,213,0.4),transparent_50%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="flex-1 max-w-2xl reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border shadow-sm mb-8 animate-[fadeIn_1s_ease-out] bg-white border-gray-200">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium tracking-wide uppercase text-gray-600">New RFPs added today</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium leading-[1.1] tracking-tight mb-8 reveal delay-100 text-gray-900">
                        Stop searching. <br/>
<span className="italic font-serif text-gray-400">Start closing.</span>
</h1>
<p className="text-lg mb-10 leading-relaxed max-w-lg reveal delay-200 text-gray-600">
                        We curate high-fit RFPs from thousands of hidden sources and our private network. Get a vetted list of opportunities delivered to you daily.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 reveal delay-300">
<a className="px-8 py-4 rounded-full font-medium transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group bg-black text-white hover:bg-gray-800" href="#pricing">
                            View Plans
                            <i className="w-4 h-4 group-hover:translate-y-1 transition-transform" data-lucide="arrow-down"></i>
</a>

</div>
<div className="mt-12 flex items-center gap-4 text-sm text-gray-500 reveal delay-300">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold bg-blue-100 border-white">AG</div>
<div className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold bg-green-100 border-white">ST</div>
<div className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold bg-purple-100 border-white">MJ</div>
</div>
<p>Trusted by Agencies &amp; Consultants</p>
</div>
</div>
<div className="flex-1 relative w-full h-[550px] select-none reveal delay-200 perspective-[2000px]">
<div className="absolute top-10 left-10 right-0 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border overflow-hidden z-20 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out bg-white border-gray-100">
<div className="p-6 border-b flex justify-between items-center border-gray-50 bg-gray-50/50">
<div className="flex items-center gap-3">
<div className="w-10 h-10 border rounded-full flex items-center justify-center shadow-sm bg-white border-gray-200">
<i className="w-5 h-5 text-gray-700" data-lucide="building-2"></i>
</div>
<div>
<div className="text-sm font-bold text-gray-900">Department of Innovation</div>
<div className="text-xs text-gray-500">Posted 2 hours ago • Public Sector</div>
</div>
</div>
<div className="border px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 bg-green-50 text-green-700 border-green-100">
<i className="w-3 h-3" data-lucide="sparkles"></i> 98% Match
                            </div>
</div>
<div className="p-8">
<h3 className="text-xl font-serif font-medium mb-2">Digital Transformation &amp; UX Strategy</h3>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600">$150k - $250k Budget</span>
<span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600">Remote</span>
<span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600">Agency Preferred</span>
</div>
<div className="space-y-4 mb-6">
<div className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-gray-400" data-lucide="check-circle-2"></i>
<p className="text-sm text-gray-600">Requires React/Next.js expertise and design system implementation.</p>
</div>
<div className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-gray-400" data-lucide="check-circle-2"></i>
<p className="text-sm text-gray-600">Vendor must have prior experience with fintech or banking clients.</p>
</div>
</div>
<button className="w-full py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2 bg-black text-white hover:bg-gray-800">
                                Unlock Full Details
                                <i className="w-3 h-3 text-gray-400" data-lucide="lock"></i>
</button>
</div>
</div>
<div className="absolute top-20 left-16 right-[-24px] h-full rounded-2xl shadow-xl border z-10 opacity-60 scale-95 transform rotate-[2deg] bg-white border-gray-100"></div>
<div className="absolute top-28 left-20 right-[-48px] h-full rounded-2xl shadow-lg border z-0 opacity-30 scale-90 transform rotate-[4deg] bg-white border-gray-100"></div>
<div className="absolute top-0 right-10 glass-card p-4 rounded-xl shadow-lg border z-30 animate-[bounce_4s_infinite] border-white/40">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-orange-100">
<i className="w-4 h-4 text-orange-600" data-lucide="bell"></i>
</div>
<div>
<p className="text-xs font-bold text-gray-900">New Alert</p>
<p className="text-[10px] text-gray-500">3 Private RFPs found</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y backdrop-blur-sm border-gray-100 bg-white/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium mb-8 uppercase tracking-widest reveal text-gray-400">Sources we monitor daily</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 reveal delay-100">
<div className="text-lg font-bold font-serif flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-black"></div>GovWin</div>
<div className="text-lg font-bold font-serif flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-black"></div>SAM.gov</div>
<div className="text-lg font-bold font-serif flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-black"></div>Upwork Enterprise</div>
<div className="text-lg font-bold font-serif flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-black"></div>Tenders.net</div>
<div className="text-lg font-bold font-serif flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-black"></div>Private Network</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-4xl font-medium tracking-tight mb-4 text-gray-900">We filter the noise.</h2>
<p className="text-gray-500 text-lg">Most RFP portals are a mess of low-quality leads. We manually vet every opportunity so you only see what's worth your time.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl bg-[#FDFCF8] border transition-colors reveal delay-100 group border-gray-100 hover:border-gray-200">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-orange-50 border-orange-100">
<i className="w-6 h-6 text-orange-600" data-lucide="filter"></i>
</div>
<h3 className="text-xl font-medium mb-3">Strict Vetting Process</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        We reject 90% of RFPs. If the budget is unclear, the scope is vague, or the deadline is tomorrow, you won't see it.
                    </p>
</div>
<div className="p-8 rounded-2xl bg-[#FDFCF8] border transition-colors reveal delay-200 group border-gray-100 hover:border-gray-200">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-blue-50 border-blue-100">
<i className="w-6 h-6 text-blue-600" data-lucide="network"></i>
</div>
<h3 className="text-xl font-medium mb-3">Private Network</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        We don't just scrape. We partner with consultants and private firms to list RFPs that never hit public job boards.
                    </p>
</div>
<div className="p-8 rounded-2xl bg-[#FDFCF8] border transition-colors reveal delay-300 group border-gray-100 hover:border-gray-200">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-green-50 border-green-100">
<i className="w-6 h-6 text-green-600" data-lucide="mail-check"></i>
</div>
<h3 className="text-xl font-medium mb-3">Direct Delivery</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        No complex dashboards. Receive a clean, actionable digest of high-fit opportunities directly to your inbox every morning.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t overflow-hidden bg-gray-50 border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1 lg:pr-12 reveal">
<div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6 bg-blue-50 text-blue-700">
                        The Deliverable
                    </div>
<h2 className="text-4xl font-serif font-medium mb-6">Your morning briefing.</h2>
<p className="text-lg mb-8 text-gray-600">
                        Wake up to a single, beautifully formatted email containing the top 3-5 opportunities for your agency. No logging in, no searching.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-black text-white">1</div>
<div>
<h4 className="font-medium text-gray-900">Direct Contact Details</h4>
<p className="text-sm text-gray-500 mt-1">We dig up the email addresses of the decision makers so you can pitch directly.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-black text-white">2</div>
<div>
<h4 className="font-medium text-gray-900">Competitive Intelligence</h4>
<p className="text-sm text-gray-500 mt-1">We analyze the incumbent vendor and estimating pricing sensitivity.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-black text-white">3</div>
<div>
<h4 className="font-medium text-gray-900">One-Click Assets</h4>
<p className="text-sm text-gray-500 mt-1">Download all attached PDFs, requirements, and Q&amp;A docs instantly.</p>
</div>
</li>
</ul>
</div>
<div className="flex-1 w-full reveal delay-200">
<div className="relative mx-auto w-full max-w-md rounded-2xl shadow-2xl border overflow-hidden bg-white border-gray-200">

<div className="p-4 border-b flex items-center gap-3 bg-gray-50 border-gray-100">
<div className="w-8 h-8 rounded-full bg-gray-200"></div>
<div className="flex-1">
<div className="h-2 w-24 rounded mb-1.5 bg-gray-200"></div>
<div className="h-2 w-32 rounded bg-gray-100"></div>
</div>
<div className="text-xs text-gray-400">8:00 AM</div>
</div>

<div className="p-8 space-y-6">
<div className="h-4 w-3/4 rounded bg-gray-100"></div>
<div className="h-4 w-full rounded bg-gray-100"></div>
<div className="h-4 w-5/6 rounded bg-gray-100"></div>

<div className="border rounded-xl p-4 mt-6 border-blue-100 bg-blue-50/30">
<div className="flex justify-between items-start mb-2">
<div className="font-semibold text-sm">Fintech Mobile App Redesign</div>
<span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-green-100 text-green-700">$120k</span>
</div>
<p className="text-xs text-gray-500 mb-3">Seeking agency for React Native overhaul...</p>
<div className="h-8 w-full rounded-lg flex items-center justify-center text-xs font-medium cursor-pointer bg-black text-white">View Opportunity</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#1A1A1A] relative overflow-hidden text-white" id="sourcing">
<div className="absolute top-0 right-0 w-[600px] h-[600px] blur-[100px] rounded-full pointer-events-none bg-orange-900/20"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] blur-[100px] rounded-full pointer-events-none bg-blue-900/10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="reveal">
<div className="inline-block border px-3 py-1 rounded-full text-xs mb-6 backdrop-blur-sm border-white/20 text-white/70">
                        // Sourcing Intelligence
                    </div>
<h2 className="text-4xl md:text-5xl font-medium leading-tight mb-6 font-serif">
                        Opportunities you <br/>won't find on Google.
                    </h2>
<p className="text-lg mb-8 leading-relaxed text-white/60">
                    Beyond public portals, we leverage our global research team and a powerful in-house AI discovery engine to identify RFPs
                    from private networks, niche sectors, and early-stage opportunities. Our ecosystem taps into PE and VC portfolios,
                    global partners, and strategic industry relationships, giving you access to opportunities long before they surface
                    anywhere else.
                    </p>
<ul className="space-y-6">
<li className="flex items-center gap-4 group cursor-default">
<div className="w-10 h-10 rounded-full border flex items-center justify-center group-hover:bg-white/10 transition-colors border-white/10 bg-white/5">
<i className="w-5 h-5 text-gray-300" data-lucide="globe-2"></i>
</div>
<div>
<p className="font-medium">Global Aggregation</p>
<p className="text-xs text-white/40">Scanning 400+ distinct sources daily.</p>
</div>
</li>
<li className="flex items-center gap-4 group cursor-default">
<div className="w-10 h-10 rounded-full border flex items-center justify-center group-hover:bg-white/10 transition-colors border-white/10 bg-white/5">
<i className="w-5 h-5 text-gray-300" data-lucide="users-2"></i>
</div>
<div>
<p className="font-medium">Private Network</p>
<p className="text-xs text-white/40">Exclusive deals from our agency partners.</p>
</div>
</li>
</ul>
</div>
<div className="relative reveal delay-200">
<div className="bg-gradient-to-br to-transparent border rounded-2xl p-8 backdrop-blur-xl from-white/10 border-white/10">
<div className="flex items-center justify-between mb-8">
<h3 className="font-serif text-xl">The Flux Quality Standard</h3>
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 opacity-40 blur-[1px]">
<div className="w-8 h-8 rounded border border-red-500/30 flex items-center justify-center shrink-0 bg-red-900/30">
<i className="w-4 h-4 text-red-400" data-lucide="x"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate">Legacy System Maint...</p>
<p className="text-xs text-white/30">Budget unclear • 500+ applicants</p>
</div>
<span className="text-xs border border-red-500/30 px-2 py-0.5 rounded text-red-400">Rejected</span>
</div>
<div className="flex items-center gap-4 opacity-40 blur-[1px]">
<div className="w-8 h-8 rounded border border-red-500/30 flex items-center justify-center shrink-0 bg-red-900/30">
<i className="w-4 h-4 text-red-400" data-lucide="x"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate">Quick Mobile App Design</p>
<p className="text-xs text-white/30">Too small • Low budget</p>
</div>
<span className="text-xs border border-red-500/30 px-2 py-0.5 rounded text-red-400">Rejected</span>
</div>
<div className="h-px w-full my-2 bg-white/10"></div>
<div className="flex items-center gap-4 p-3 rounded-xl border shadow-lg transform scale-105 transition-transform bg-white/10 border-white/20">
<div className="w-8 h-8 rounded border border-green-500/30 flex items-center justify-center shrink-0 bg-green-900/30">
<i className="w-4 h-4 text-green-400" data-lucide="check"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white">SaaS Product Redesign</p>
<p className="text-xs text-green-300">$85k budget • Verified Client</p>
</div>
<button className="text-xs px-3 py-1.5 rounded font-medium bg-white text-black hover:bg-gray-200">
                                    View
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl font-serif font-medium mb-4">Trusted by modern agencies.</h2>
<p className="text-gray-500">FluxRFP has helped our partners close over $12M in new business this year.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#FDFCF8] p-8 rounded-2xl border reveal delay-100 border-gray-100">
<div className="flex items-center gap-1 mb-4 text-orange-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm leading-relaxed mb-6 text-gray-800">"I used to spend 10 hours a week sifting through garbage RFPs. With Flux, I just wake up, check my email, and send proposals. We closed a $50k branding project in our first month."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">

<div className="w-full h-full bg-gradient-to-tr from-gray-400 to-gray-200"></div>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Sarah Jenkins</p>
<p className="text-xs text-gray-500">Founder, Studio M</p>
</div>
</div>
</div>

<div className="bg-[#FDFCF8] p-8 rounded-2xl border reveal delay-200 border-gray-100">
<div className="flex items-center gap-1 mb-4 text-orange-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm leading-relaxed mb-6 text-gray-800">"The private network deals are real. We found a sub-contracting gig with a major defense contractor that wasn't listed anywhere else. That one deal paid for 10 years of subscription."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
<div className="w-full h-full bg-gradient-to-tr from-blue-400 to-blue-200"></div>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">David Chen</p>
<p className="text-xs text-gray-500">Director, DevFlow Systems</p>
</div>
</div>
</div>

<div className="bg-[#FDFCF8] p-8 rounded-2xl border reveal delay-300 border-gray-100">
<div className="flex items-center gap-1 mb-4 text-orange-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm leading-relaxed mb-6 text-gray-800">"Finally, a service that understands the difference between a real opportunity and a procurement formality. The quality of leads here is unmatched by GovWin or BidStats."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
<div className="w-full h-full bg-gradient-to-tr from-purple-400 to-purple-200"></div>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Elena Rodriguez</p>
<p className="text-xs text-gray-500">Partner, Civitas Consulting</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FDFCF8] relative" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl font-serif font-medium mb-4">Simple, transparent pricing.</h2>
<p className="text-gray-500">Stop paying thousands for enterprise tools you don't use.</p>
</div>
<div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">

<div className="rounded-3xl p-8 border shadow-sm hover:shadow-md transition-all reveal delay-100 flex flex-col bg-white border-gray-200">
<div className="mb-6">
<span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Monthly</span>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-4xl font-serif font-medium">$79</span>
<span className="text-gray-500">/mo</span>
</div>
<p className="text-sm text-gray-500 mt-2">Cancel anytime. No contracts.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-gray-700">
<i className="w-4 h-4 mt-0.5 text-black" data-lucide="check"></i>
                            Access to verified RFPs
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-700">
<i className="w-4 h-4 mt-0.5 text-black" data-lucide="check"></i>
                            Daily email digest
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-700">
<i className="w-4 h-4 mt-0.5 text-black" data-lucide="check"></i>
                            Basic filtering
                        </li>
</ul>
<a className="w-full block text-center border font-medium py-3 rounded-xl transition-colors bg-gray-50 border-gray-200 text-gray-900 hover:bg-gray-100" href="https://surveymars.com/q/NnhgVBifo">
                        Get Started Monthly
                    </a>
</div>

<div className="rounded-3xl p-8 border shadow-2xl relative reveal delay-200 flex flex-col transform md:-translate-y-4 bg-black text-white border-black">
<div className="absolute top-0 right-0 bg-orange-500 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl text-white">
                        SAVE 26%
                    </div>
<div className="mb-6">
<span className="text-sm font-medium uppercase tracking-wide text-gray-400">Yearly</span>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-4xl font-serif font-medium">$699</span>
<span className="text-gray-400">/year</span>
</div>
<p className="text-sm mt-2 text-gray-400">Billed annually.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-gray-200">
<div className="p-0.5 rounded-full bg-white/20"><i className="w-3 h-3 text-white" data-lucide="check"></i></div>
<span className="font-medium">Everything in Monthly</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-200">
<div className="p-0.5 rounded-full bg-white/20"><i className="w-3 h-3 text-white" data-lucide="check"></i></div>
<span className="font-medium">Priority Private Network Access</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-200">
<div className="p-0.5 rounded-full bg-white/20"><i className="w-3 h-3 text-white" data-lucide="check"></i></div>
<span className="font-medium">Direct Contact Info for Leads</span>
</li>
</ul>
<a className="w-full block text-center font-bold py-3 rounded-xl transition-colors bg-white text-black hover:bg-gray-100" href="https://surveymars.com/q/NnhgVBifo">
                        Join Yearly
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-white border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mx-auto text-center mb-12 reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6 bg-green-50 text-green-700">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Available Now
                </div>
<h2 className="text-4xl font-serif font-medium mb-4">Still not convinced?</h2>
<p className="text-gray-500 text-lg">Schedule a 15-minute strategy call. We'll show you the exact RFPs you're missing out on.</p>
</div>

<div className="max-w-5xl mx-auto rounded-2xl shadow-2xl border overflow-hidden h-[600px] reveal delay-100 relative bg-white border-gray-100">

<div className="absolute inset-0 flex items-center justify-center flex-col z-0 bg-gray-50">
<div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gray-200">
<i className="w-8 h-8 text-gray-400" data-lucide="calendar"></i>
</div>
<p className="text-gray-500 font-medium">Cal.com Scheduling Interface</p>
<p className="text-xs mt-2 text-gray-400">Integration ready</p>
<button className="mt-6 px-6 py-2 rounded-full text-sm bg-black text-white">Book Strategy Call</button>
</div>



<div id="my-cal-inline-30min" style={{width: '100%', height: '100%', overflow: 'scroll'}}></div>


</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t bg-white border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded flex items-center justify-center bg-black text-white">
<i className="w-3 h-3" data-lucide="layers"></i>
</div>
<span className="font-semibold text-lg tracking-tight">FluxRFP</span>
</div>
<p className="text-sm text-gray-500 max-w-xs">Premium RFP curation for serious agencies and consultants. Stop digging, start pitching.</p>
</div>
<div className="flex gap-4">
<a className="px-6 py-2.5 rounded-full text-sm font-medium transition-colors bg-black text-white hover:bg-gray-800" href="https://surveymars.com/q/NnhgVBifo">
                        Get access now
                    </a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t pt-10 border-gray-100">


<div>
<h4 className="font-semibold mb-4 text-xs uppercase tracking-wider text-gray-900">Contact us</h4>
<ul className="space-y-2 text-sm text-gray-500">

<li><a className="hover:text-black" href="mailto:contact@opalbyte.com.au">contact@opalbyte.com.au</a></li>

</ul>
</div>
<div className="flex items-end justify-end col-span-2 md:col-span-1">
<p className="text-xs text-gray-400">© 2025 FluxRFP by Opalbyte.</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
