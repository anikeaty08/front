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



    document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-50 pointer-events-none select-none overflow-hidden bg-[#F5F5F7]">
<div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-[#E0F7FA] opacity-80 mix-blend-multiply blur-[100px] animate-blob"></div>
<div className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] rounded-full bg-white opacity-100 mix-blend-multiply blur-[100px] animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[80vw] rounded-full bg-[#F5F5F7] opacity-80 mix-blend-multiply blur-[100px] animate-blob animation-delay-4000"></div>
<div className="absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%221%22/%3E%3C/svg%3E\')'}}></div>
</div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-6">
<div className="h-[56px] flex items-center justify-between pl-4 pr-1.5 rounded-full bg-white/70 backdrop-blur-[60px] border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-white/60 transition-all hover:bg-white/80">
<a className="flex items-center gap-3 shrink-0 group" href="#">
<span className="font-medium tracking-tight text-sm text-[#1d1d1f]">
          Bartlett &amp; Schenk
        </span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-[#86868b] tracking-normal">
<a className="hover:text-[#1d1d1f] transition-colors duration-200" href="#approach">Approach</a>
<a className="hover:text-[#1d1d1f] transition-colors duration-200" href="#advisory">Advisory</a>
<a className="hover:text-[#1d1d1f] transition-colors duration-200" href="#about">About</a>
</div>
<div className="shrink-0">
<a className="flex items-center gap-1.5 bg-[#1d1d1f] text-white px-5 h-10 rounded-full text-xs font-medium tracking-wide hover:bg-black transition-all hover:scale-[1.02] shadow-md hover:shadow-lg" href="#access">
<span className="">Book Conversation</span>
</a>
</div>
</div>
</nav>

<header className="min-h-screen flex bg-zinc-950 w-full pt-36 pb-20 relative items-center justify-center">
<div className="vision-window md:p-12 overflow-visible reveal-window is-visible bg-blue-200 w-full max-w-6xl mx-auto px-8 py-8">
<div className="absolute top-5 left-5 flex gap-2 z-20 opacity-80 hover:opacity-100 transition-opacity">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/5 shadow-sm"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/5 shadow-sm"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] border border-black/5 shadow-sm"></div>
</div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-6 relative z-10 text-left min-h-[520px]">

<div className="flex flex-col items-start relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 border border-white/60 shadow-sm mb-8 backdrop-blur-sm">
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
<span className="text-xs font-medium text-[#86868b] tracking-wide uppercase">
              Executive Advisory
            </span>
</div>
<h1 className="text-5xl lg:text-6xl font-semibold text-[#1d1d1f] tracking-tight mb-8 leading-tight">
            Revenue Enablement Led by Tamara Schenk
          </h1>
<p className="text-lg lg:text-xl leading-relaxed font-normal text-[#86868b] tracking-tight max-w-lg mb-10">
            Strategic advisory for B2B organisations seeking stronger alignment between sales strategy, enablement, and measurable performance.
          </p>
<a className="group px-8 py-4 rounded-full bg-[#1d1d1f] text-white font-normal text-base transition-all hover:bg-black hover:scale-[1.02] shadow-md flex items-center gap-2" href="#access">
<span className="">Book an Executive Conversation</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>

<div className="relative w-full h-full min-h-[400px] perspective-[1000px] flex items-center justify-center lg:justify-end">
<div className="absolute top-1/2 left-1/2 lg:left-[60%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-400/10 rounded-full blur-[90px] pointer-events-none z-0"></div>
<div className="relative z-10 w-full max-w-md bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[30px] p-6 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.05)] animate-float-card transition-transform duration-700 ease-out hover:rotate-1">
<div className="flex items-center gap-3 mb-6 border-b border-white/30 pb-4">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-white/60 shadow-sm flex items-center justify-center">
<iconify-icon className="text-[#1d1d1f]" icon="solar:play-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-[#1d1d1f] tracking-tight">
                  Watch Tamara Explain Revenue Enablement
                </h3>
</div>
</div>
<p className="text-sm text-[#86868b] leading-relaxed mb-6 font-normal">
              In this short video, Tamara explains why sales enablement must move beyond activity and become a strategic driver of revenue performance.
            </p>
<div className="w-full aspect-video bg-gray-900/5 rounded-2xl border border-white/50 relative flex items-center justify-center group cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/5 transition-colors duration-300"></div>
<div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center text-[#1d1d1f] group-hover:scale-110 transition-transform duration-300 z-10">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="bg-gray-950 px-4 py-12" id="approach">
<div className="vision-window md:p-16 overflow-hidden reveal-window max-w-6xl mx-auto p-8 relative">
<div className="absolute top-5 left-5 flex gap-2 z-20">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] border border-black/5"></div>
</div>
<div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center mt-8">
<div className="order-2 md:order-1 flex flex-col items-start">
<h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] tracking-tight mb-6 leading-tight">
            Sales strategy is defined.<br/>
            Enablement is active.<br/>
            Results still fall short.
          </h2>
<p className="text-lg leading-relaxed font-normal text-[#86868b] tracking-tight max-w-md mb-8">
            In complex B2B environments, misalignment between strategy, enablement, and execution quietly limits performance. Tamara works with executive teams to close that gap.
          </p>
<a className="px-6 py-3 rounded-full bg-white border border-gray-200 text-[#1d1d1f] font-medium text-sm transition-all hover:bg-gray-50 shadow-sm flex items-center gap-2" href="#how-it-works">
            Explore the Approach
          </a>
</div>
<div className="order-1 md:order-2 flex flex-col items-center justify-center relative py-12">
<div className="interactive-card relative z-30 w-full max-w-sm bg-white/60 backdrop-blur-2xl border border-white/50 rounded-2xl p-5 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0 text-gray-500 border border-gray-100">
<iconify-icon icon="solar:branching-paths-down-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-[#1d1d1f] tracking-tight">
                Disconnected Strategy
              </h3>
<p className="text-sm text-[#86868b] font-normal mt-0.5">
                Lack of frontline alignment
              </p>
</div>
</div>
<div className="interactive-card relative z-20 w-full max-w-sm bg-white/60 backdrop-blur-2xl border border-white/50 rounded-2xl p-5 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] flex items-center gap-4 -mt-6 scale-[0.95]">
<div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0 text-gray-500 border border-gray-100">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-[#1d1d1f] tracking-tight">
                Activity vs Impact
              </h3>
<p className="text-sm text-[#86868b] font-normal mt-0.5">
                Metrics without revenue impact
              </p>
</div>
</div>
<div className="interactive-card relative z-10 w-full max-w-sm bg-white/60 backdrop-blur-2xl border border-white/50 rounded-2xl p-5 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] flex items-center gap-4 -mt-6 scale-[0.90]">
<div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0 text-gray-500 border border-gray-100">
<iconify-icon icon="solar:layers-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-[#1d1d1f] tracking-tight">
                Siloed Enablement
              </h3>
<p className="text-sm text-[#86868b] font-normal mt-0.5">
                Operating outside the revenue engine
              </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-950 px-4 py-12" id="advisory">
<div className="vision-window md:p-12 overflow-hidden reveal-window text-blue-200 bg-blue-200 max-w-6xl mx-auto px-8 py-8 relative">
<div className="absolute top-5 left-5 flex gap-2 z-20">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] border border-black/5"></div>
</div>
<div className="text-center mb-16 mt-8">
<h2 className="md:text-4xl text-3xl font-semibold text-[#1d1d1f] tracking-tight mb-4">
          What Tamara Delivers
        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[minmax(200px,auto)]">
<div className="group interactive-card rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden bg-white/40 backdrop-blur-md">
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur border border-white/50 flex items-center justify-center mb-4 shadow-sm">
<iconify-icon className="text-blue-600" icon="solar:target-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#1d1d1f] tracking-tight mb-2">
              Revenue Enablement Strategy
            </h3>
<p className="text-base text-[#86868b] font-normal leading-relaxed">
              Align enablement initiatives with measurable revenue outcomes.
            </p>
</div>
</div>
<div className="group interactive-card rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden bg-white/40 backdrop-blur-md">
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur border border-white/50 flex items-center justify-center mb-4 shadow-sm">
<iconify-icon className="text-blue-600" icon="solar:route-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#1d1d1f] tracking-tight mb-2">
              Sales Performance Alignment
            </h3>
<p className="text-base text-[#86868b] font-normal leading-relaxed">
              Connect go-to-market strategy to frontline execution.
            </p>
</div>
</div>
<div className="group interactive-card rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden bg-white/40 backdrop-blur-md">
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur border border-white/50 flex items-center justify-center mb-4 shadow-sm">
<iconify-icon className="text-blue-600" icon="solar:lightbulb-bolt-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#1d1d1f] tracking-tight mb-2">
              Enablement Advisory
            </h3>
<p className="text-base text-[#86868b] font-normal leading-relaxed">
              Move beyond training into strategic enablement leadership.
            </p>
</div>
</div>
<div className="group interactive-card rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden bg-white/40 backdrop-blur-md">
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur border border-white/50 flex items-center justify-center mb-4 shadow-sm">
<iconify-icon className="text-blue-600" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#1d1d1f] tracking-tight mb-2">
              Executive Guidance
            </h3>
<p className="text-base text-[#86868b] font-normal leading-relaxed">
              Partner with revenue leaders to strengthen impact and accountability.
            </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-950 px-4 py-12" id="how-it-works">
<div className="max-w-6xl mx-auto vision-window p-8 md:p-16 relative overflow-hidden reveal-window">
<div className="absolute top-5 left-5 flex gap-2 z-20">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] border border-black/5"></div>
</div>
<div className="text-center mb-16 mt-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
          How It Works
        </h2>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-6 mb-12">
<div className="interactive-card w-full md:w-64 h-auto min-h-[220px] rounded-3xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-sm flex flex-col items-center justify-center p-6 text-center">
<div className="w-12 h-12 rounded-xl bg-gray-100/80 flex items-center justify-center mb-4 text-[#86868b]">
<span className="text-sm font-semibold">1</span>
</div>
<span className="font-semibold text-[#1d1d1f] tracking-tight text-base mb-2">
            Assess Revenue Enablement Maturity
          </span>
<p className="text-sm text-[#86868b] font-normal">
            Identify misalignment between strategy and execution.
          </p>
</div>
<div className="text-[#86868b]/30 rotate-90 md:rotate-0 py-4 md:py-0">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
<div className="interactive-card w-full md:w-64 h-auto min-h-[220px] rounded-3xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-sm flex flex-col items-center justify-center p-6 text-center">
<div className="w-12 h-12 rounded-xl bg-gray-100/80 flex items-center justify-center mb-4 text-[#86868b]">
<span className="text-sm font-semibold">2</span>
</div>
<span className="font-semibold text-[#1d1d1f] tracking-tight text-base mb-2">
            Define Strategic Enablement Priorities
          </span>
<p className="text-sm text-[#86868b] font-normal">
            Clarify focus areas that directly influence revenue performance.
          </p>
</div>
<div className="text-[#86868b]/30 rotate-90 md:rotate-0 py-4 md:py-0">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
<div className="interactive-card w-full md:w-64 h-auto min-h-[220px] rounded-3xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-sm flex flex-col items-center justify-center p-6 text-center">
<div className="w-12 h-12 rounded-xl bg-gray-100/80 flex items-center justify-center mb-4 text-[#86868b]">
<span className="text-sm font-semibold">3</span>
</div>
<span className="font-semibold text-[#1d1d1f] tracking-tight text-base mb-2">
            Embed Accountability &amp; Measurement
          </span>
<p className="text-sm text-[#86868b] font-normal">
            Ensure enablement initiatives connect to tangible business outcomes.
          </p>
</div>
</div>
<div className="text-center">
<a className="inline-flex px-6 py-3 rounded-full bg-[#1d1d1f] text-white font-medium text-sm transition-all hover:bg-black shadow-sm" href="#access">
          Schedule an Executive Discussion
        </a>
</div>
</div>
</section>

<section className="bg-gray-950 px-4 py-12">
<div className="vision-window overflow-hidden reveal-window md:p-16 bg-blue-200 max-w-6xl mx-auto px-8 py-8 relative scale-section">
<div className="absolute top-5 left-5 flex gap-2 z-20">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] border border-black/5"></div>
</div>
<div className="max-w-2xl mx-auto mb-16 text-center mt-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1d1d1f] mb-6">
          Why Tamara
        </h2>
</div>
<div className="relative max-w-lg mx-auto h-[450px] flex items-center justify-center">
<div className="w-full relative z-10">
<div className="agent-card-init agent-card-1 bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white shadow-sm flex items-start gap-4 absolute left-0 right-0 z-0">
<iconify-icon className="text-blue-500 mt-1 shrink-0" icon="solar:star-linear" width="24"></iconify-icon>
<div>
<div className="text-base font-semibold text-[#1d1d1f] tracking-tight">Led by Tamara Schenk</div>
<div className="text-sm text-[#86868b] mt-1 font-normal">Recognised thought leader in sales and revenue enablement.</div>
</div>
</div>
<div className="agent-card-init agent-card-2 bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white shadow-sm flex items-start gap-4 absolute left-0 right-0 z-10">
<iconify-icon className="text-blue-500 mt-1 shrink-0" icon="solar:global-linear" width="24"></iconify-icon>
<div>
<div className="text-base font-semibold text-[#1d1d1f] tracking-tight">Strategic Perspective</div>
<div className="text-sm text-[#86868b] mt-1 font-normal">Focus on enterprise complexity and cross-functional alignment.</div>
</div>
</div>
<div className="agent-card-init agent-card-3 bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white shadow-md flex items-start gap-4 absolute left-0 right-0 z-20">
<iconify-icon className="text-blue-500 mt-1 shrink-0" icon="solar:graph-up-linear" width="24"></iconify-icon>
<div>
<div className="text-base font-semibold text-[#1d1d1f] tracking-tight">Performance-Centred</div>
<div className="text-sm text-[#86868b] mt-1 font-normal">Enablement tied to business impact, not activity metrics.</div>
</div>
</div>
<div className="agent-card-init agent-card-4 bg-white rounded-2xl p-6 border border-white shadow-lg flex items-start gap-4 absolute left-0 right-0 z-30">
<iconify-icon className="text-blue-500 mt-1 shrink-0" icon="solar:tie-linear" width="24"></iconify-icon>
<div>
<div className="text-base font-semibold text-[#1d1d1f] tracking-tight">Executive-Level Engagement</div>
<div className="text-sm text-[#86868b] mt-1 font-normal">Designed for senior revenue and enablement leaders.</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-950 px-4 py-12" id="about">
<div className="vision-window md:p-16 overflow-hidden reveal-window text-center bg-slate-500 max-w-4xl mx-auto px-8 py-8 relative">
<div className="absolute top-5 left-5 flex gap-2 z-20">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] border border-black/5"></div>
</div>
<div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mt-6 mb-8 overflow-hidden shadow-inner border border-white/50 flex items-center justify-center">
<iconify-icon className="text-gray-400" icon="solar:user-circle-linear" width="40"></iconify-icon>
</div>
<h2 className="md:text-3xl text-2xl font-semibold text-slate-50 tracking-tight mb-6">
        Hi, I'm Tamara Schenk.
      </h2>
<p className="text-lg text-[#86868b] font-normal leading-relaxed max-w-2xl mx-auto mb-6">
        Through Bartlett &amp; Schenk, I work with senior revenue and enablement leaders to transform sales enablement into a strategic lever for performance.
      </p>
<p className="text-lg text-[#86868b] font-normal leading-relaxed max-w-2xl mx-auto">
        My focus is on alignment — connecting strategy, enablement, and execution to measurable business impact.
      </p>
</div>
</section>

<section className="bg-zinc-950 px-4 py-12">
<div className="vision-window md:p-16 overflow-hidden reveal-window bg-slate-500 max-w-4xl mx-auto px-8 py-8 relative">
<div className="absolute top-5 left-5 flex gap-2 z-20">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] border border-black/5"></div>
</div>
<div className="text-center mb-16 mt-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
          Before &amp; After
        </h2>
<p className="text-lg text-[#86868b] font-normal">
          Strategic alignment drives sustainable performance.
        </p>
</div>
<div className="space-y-10 bg-white/50 p-8 md:p-12 rounded-[32px] border border-white/60 shadow-inner mb-10">
<div className="">
<div className="flex flex-col mb-3">
<span className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Before
            </span>
<ul className="text-sm font-normal text-gray-600 space-y-2 list-disc list-inside">
<li>Enablement activity without clear performance linkage.</li>
<li>Disconnected strategy and execution.</li>
<li className="">Limited visibility into impact.</li>
</ul>
</div>
<div className="w-full h-2 bg-gray-200 rounded-full mt-4">
<div className="h-full w-[30%] bg-gray-400 rounded-full"></div>
</div>
</div>
<div className="">
<div className="flex flex-col mb-3">
<span className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wide mb-2 flex items-center gap-2">
              After (Strategic Alignment)
              <iconify-icon className="text-blue-600" icon="solar:check-circle-linear" width="16"></iconify-icon>
</span>
<ul className="text-sm font-normal text-[#1d1d1f] space-y-2 list-disc list-inside">
<li>Strategic alignment across revenue functions.</li>
<li className="">Clear enablement priorities.</li>
<li>Improved organisational performance focus.</li>
</ul>
</div>
<div className="w-full h-2 bg-gray-200 rounded-full mt-4">
<div className="h-full w-full bg-[#1d1d1f] rounded-full shadow-sm"></div>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex px-6 py-3 rounded-full bg-white border border-gray-200 text-[#1d1d1f] font-medium text-sm transition-all hover:bg-gray-50 shadow-sm" href="#access">
          Start the Conversation
        </a>
</div>
</div>
</section>

<section className="bg-gray-950 px-4 py-12">
<div className="vision-window md:p-16 overflow-hidden reveal-window text-red-200 bg-red-100 max-w-4xl mx-auto px-8 py-8 relative">
<div className="absolute top-5 left-5 flex gap-2 z-20">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] border border-black/5"></div>
</div>
<div className="mb-12 mt-8">
<h2 className="md:text-4xl text-3xl font-semibold text-[#1d1d1f] tracking-tight">
          Frequently Asked Questions
        </h2>
</div>
<div className="space-y-4">
<details className="group border-b border-gray-200/60 pb-4">
<summary className="flex justify-between items-center font-medium text-base text-[#1d1d1f] cursor-pointer">
            What is revenue enablement?
            <iconify-icon className="transition-transform group-open:rotate-180 text-gray-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="text-base text-[#86868b] mt-3 font-normal leading-relaxed">
            A strategic approach that aligns sales enablement initiatives with measurable business outcomes.
          </div>
</details>
<details className="group border-b border-gray-200/60 pb-4">
<summary className="flex justify-between items-center font-medium text-base text-[#1d1d1f] cursor-pointer">
            Who is this designed for?
            <iconify-icon className="transition-transform group-open:rotate-180 text-gray-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="text-base text-[#86868b] mt-3 font-normal leading-relaxed">
            Senior revenue leaders and enablement executives in complex B2B organisations.
          </div>
</details>
<details className="group border-b border-gray-200/60 pb-4">
<summary className="flex justify-between items-center font-medium text-base text-[#1d1d1f] cursor-pointer">
            Is this sales training?
            <iconify-icon className="transition-transform group-open:rotate-180 text-gray-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="text-base text-[#86868b] mt-3 font-normal leading-relaxed">
            No. It focuses on strategic enablement and performance alignment.
          </div>
</details>
<details className="group border-b border-gray-200/60 pb-4">
<summary className="flex justify-between items-center font-medium text-base text-[#1d1d1f] cursor-pointer">
            How is this different from traditional enablement consulting?
            <iconify-icon className="transition-transform group-open:rotate-180 text-gray-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="text-base text-[#86868b] mt-3 font-normal leading-relaxed">
            The emphasis is on connecting enablement to revenue performance, not isolated programs.
          </div>
</details>
<details className="group pb-2">
<summary className="flex justify-between items-center font-medium text-base text-[#1d1d1f] cursor-pointer">
            How do we begin?
            <iconify-icon className="transition-transform group-open:rotate-180 text-gray-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="text-base text-[#86868b] mt-3 font-normal leading-relaxed">
            Book an executive conversation to explore fit and priorities.
          </div>
</details>
</div>
</div>
</section>

<section className="z-20 bg-gray-950 mb-20 px-4 py-12 relative" id="access">
<div className="md:p-16 overflow-hidden reveal-window text-center bg-slate-400/60 max-w-4xl border-white/60 border rounded-[30px] mx-auto px-8 py-8 relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
<div className="absolute top-6 left-6 flex gap-2 z-20 opacity-80">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-sm border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm border border-black/5"></div>
</div>
<div className="mb-10 mt-6 relative z-10">
<h2 className="md:text-5xl text-3xl font-semibold text-neutral-50 tracking-tight mb-4">
          Align Enablement with Revenue Performance
        </h2>
<p className="text-lg text-[#86868b] font-normal leading-relaxed max-w-xl mx-auto">
          Schedule a discussion with Tamara Schenk to explore how strategic revenue enablement can strengthen your organisation.
        </p>
</div>

<div className="max-w-lg mx-auto bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
<div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
<iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#1d1d1f] mb-6">Select a Date &amp; Time</h3>
<button className="w-full py-4 rounded-xl bg-[#1d1d1f] text-white font-medium text-base tracking-wide transition-all hover:bg-black flex items-center justify-center gap-2">
          Load Calendar
        </button>
</div>
<p className="text-sm text-[#86868b] font-medium tracking-tight">
        Strategic alignment drives sustainable performance.
      </p>
</div>
</section>

<footer className="w-full border-t border-gray-200 bg-white/60 backdrop-blur-xl pt-16 pb-24 px-6 md:px-12 relative z-10">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-2">
<span className="font-semibold tracking-tight text-base text-[#1d1d1f] block mb-4">
            Bartlett &amp; Schenk
          </span>
<p className="text-sm text-[#86868b] leading-relaxed max-w-xs font-normal">
            Strategic advisory for B2B organisations seeking stronger alignment between sales strategy, enablement, and measurable performance.
          </p>
</div>
<div>
<h4 className="font-medium text-[#1d1d1f] text-sm mb-4">Navigation</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors font-normal" href="#approach">Approach</a></li>
<li><a className="text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors font-normal" href="#advisory">Advisory</a></li>
<li><a className="text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors font-normal" href="#about">About Tamara</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-[#1d1d1f] text-sm mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors font-normal" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors font-normal" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-200/60 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-[#86868b] font-normal">
          © 2025 Bartlett &amp; Schenk. All rights reserved.
        </p>
<div className="flex items-center gap-4">
<a className="text-[#86868b] hover:text-[#1d1d1f] transition-colors" href="#">
<iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
