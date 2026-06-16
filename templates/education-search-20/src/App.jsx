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
      

<div className="top-0 w-full h-screen bg-cover bg-center blur-sm fixed -z-10" data-alpha-mask="79" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/848eb9ea-a1cf-4e96-b49e-08a6b47678a3/3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 79%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 79%, transparent)'}}></div>

<header className="sticky z-50 w-full border-b top-0 backdrop-blur-md bg-white/80 border-orange-100">
<div className="flex lg:px-8 max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex items-center gap-12">
<a className="text-xl tracking-tighter text-orange-900 font-nunito font-semibold" href="#">UNIPATH</a>
<nav className="hidden md:flex gap-8">
<div className="relative group">
<button className="transition-colors hover:text-orange-900 text-sm font-medium text-orange-500 font-nunito flex items-center gap-1 py-2">
    Institutions 
    <svg className="lucide lucide-chevron-down transition-transform duration-200 group-hover:rotate-180" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[420px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
<div className="bg-white border border-orange-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 grid grid-cols-2 gap-x-8 gap-y-6 relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-orange-50/50 rounded-bl-full -z-10 pointer-events-none"></div>

<div className="flex flex-col">
<h4 className="text-xs font-semibold text-orange-900 mb-3 uppercase tracking-wider flex items-center gap-2 font-nunito">
<svg className="text-orange-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
          Engineering
        </h4>
<ul className="flex flex-col gap-3">
<li><a className="text-sm text-orange-600 hover:text-orange-900 transition-colors font-nunito font-medium" href="#">IIT Delhi</a></li>
<li><a className="text-sm text-orange-600 hover:text-orange-900 transition-colors font-nunito font-medium" href="#">VIT Vellore</a></li>
<li><a className="text-sm text-orange-600 hover:text-orange-900 transition-colors font-nunito font-medium" href="#">BITS Pilani</a></li>
</ul>
</div>

<div className="flex flex-col">
<h4 className="text-xs font-semibold text-orange-900 mb-3 uppercase tracking-wider flex items-center gap-2 font-nunito">
<svg className="text-orange-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
          Medical
        </h4>
<ul className="flex flex-col gap-3">
<li><a className="text-sm text-orange-600 hover:text-orange-900 transition-colors font-nunito font-medium" href="#">AIIMS Delhi</a></li>
<li><a className="text-sm text-orange-600 hover:text-orange-900 transition-colors font-nunito font-medium" href="#">AFMC Pune</a></li>
<li><a className="text-sm text-orange-600 hover:text-orange-900 transition-colors font-nunito font-medium" href="#">CMC Vellore</a></li>
</ul>
</div>

<div className="flex flex-col">
<h4 className="text-xs font-semibold text-orange-900 mb-3 uppercase tracking-wider flex items-center gap-2 font-nunito">
<svg className="text-orange-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
          Management
        </h4>
<ul className="flex flex-col gap-3">
<li><a className="text-sm text-orange-600 hover:text-orange-900 transition-colors font-nunito font-medium" href="#">IIM Ahmedabad</a></li>
<li><a className="text-sm text-orange-600 hover:text-orange-900 transition-colors font-nunito font-medium" href="#">ISB Hyderabad</a></li>
<li><a className="text-sm text-orange-600 hover:text-orange-900 transition-colors font-nunito font-medium" href="#">XLRI Jamshedpur</a></li>
</ul>
</div>

<div className="flex flex-col">
<h4 className="text-xs font-semibold text-orange-900 mb-3 uppercase tracking-wider flex items-center gap-2 font-nunito">
<svg className="text-orange-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
          Law
        </h4>
<ul className="flex flex-col gap-3">
<li><a className="text-sm text-orange-600 hover:text-orange-900 transition-colors font-nunito font-medium" href="#">NLSIU Bangalore</a></li>
<li><a className="text-sm text-orange-600 hover:text-orange-900 transition-colors font-nunito font-medium" href="#">NLU Delhi</a></li>
<li><a className="text-sm text-orange-600 hover:text-orange-900 transition-colors font-nunito font-medium" href="#">NALSAR Hyderabad</a></li>
</ul>
</div>

<div className="col-span-2 mt-2 pt-5 border-t border-orange-100/60">
<a className="flex items-center justify-between group/link w-full p-2 -mx-2 rounded-lg hover:bg-orange-50 transition-colors" href="#">
<span className="text-sm font-semibold text-orange-900 font-nunito">View all 500+ Institutions</span>
<svg className="text-orange-500 transition-transform group-hover/link:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
<a className="text-sm font-medium text-orange-500 transition-colors hover:text-orange-900 font-nunito" href="#">Programs</a>
<a className="text-sm font-medium text-orange-500 transition-colors hover:text-orange-900 font-nunito" href="#">Rankings</a>
<a className="text-sm font-medium text-orange-500 transition-colors hover:text-orange-900 font-nunito" href="#">Compare</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden text-sm font-medium text-orange-500 transition-colors sm:block hover:text-orange-900 font-nunito" href="#">Sign in</a>
<a className="inline-flex items-center justify-center transition-colors hover:bg-orange-800 text-sm font-medium text-white font-nunito bg-orange-900 h-9 rounded-full pr-3 pl-3" href="#">
                    Get started
                </a>
</div>
</div>
</header>

<main className="">
<section className="overflow-hidden sm:pt-32 sm:pb-40 pt-24 pb-32 relative">
<div className="absolute inset-0 z-0 bg-grid pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] blur-[100px] rounded-full z-0 pointer-events-none bg-orange-100/50"></div>
<div className="lg:px-8 flex flex-col z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center">
<div className="inline-flex text-xs font-medium border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 shadow-sm backdrop-blur-sm gap-x-2 gap-y-2 items-center text-orange-600 bg-white/50 border-orange-200 font-nunito">
<span className="flex h-2 w-2 rounded-full bg-amber-500"></span>
                    2024 Admissions Now Open
                </div>
<h1 className="sm:text-7xl text-5xl tracking-tighter max-w-4xl text-orange-900 font-nunito font-semibold">
                    Find the institution that <br className="hidden sm:block"/>
<span className="text-orange-400 font-nunito font-semibold">shapes your future.</span>
</h1>
<p className="mx-auto mt-6 max-w-2xl text-lg text-orange-500 font-nunito font-semibold">
                    Unbiased data, verified reviews, and comprehensive details on top private and government colleges to help you make the smartest choice.
                </p>

<div className="flex flex-col sm:flex-row transition-shadow focus-within:shadow-[0_8px_30px_rgb(0,0,0,0.08)] font-poppins bg-white max-w-7xl border-orange-200 border rounded-[2rem] mt-12 pt-2 pr-2 pb-2 pl-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] gap-x-2 gap-y-2 items-center">
<div className="flex flex-1 items-center gap-3 px-4 py-3 w-full sm:w-auto">
<iconify-icon className="text-xl text-orange-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-transparent text-sm outline-none placeholder:text-orange-400 font-medium text-orange-900" placeholder="Degree, course, or college name" type="text"/>
</div>
<div className="hidden sm:block h-8 w-px bg-orange-200"></div>
<div className="flex flex-1 items-center gap-3 px-4 py-3 w-full sm:w-auto border-t sm:border-none relative group cursor-pointer border-orange-100">
<iconify-icon className="text-xl text-orange-400" icon="solar:buildings-linear"></iconify-icon>
<select className="w-full appearance-none bg-transparent text-sm outline-none font-medium cursor-pointer relative z-10 text-orange-900">
<option className="text-orange-400 font-nunito" disabled="" selected="" value="">Institution Type</option>
<option className="font-nunito" value="all">All Types</option>
<option className="font-nunito" value="govt">Government</option>
<option className="font-nunito" value="private">Private</option>
</select>
<iconify-icon className="absolute right-4 z-0 text-orange-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<button className="w-full sm:w-auto h-12 rounded-full px-8 text-sm font-medium transition-colors flex items-center justify-center gap-2 bg-orange-900 text-white hover:bg-orange-800 font-nunito">
                        Search
                    </button>
</div>
<div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-orange-500">
<span className="font-medium font-nunito">Trending:</span>
<a className="transition-colors hover:text-orange-900 font-nunito" href="#">B.Tech in CS</a>
<a className="transition-colors hover:text-orange-900 font-nunito" href="#">Medical (MBBS)</a>
<a className="transition-colors hover:text-orange-900 font-nunito" href="#">Top Govt Engineering</a>
<a className="transition-colors hover:text-orange-900 font-nunito" href="#">MBA Finance</a>
</div>
</div>
</section>

<section className="bg-orange-50/50 border-orange-100 border-t pt-24 pb-24" style={{maskImage: 'linear-gradient(190deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(190deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col sm:flex-row sm:items-end mb-12 gap-x-4 gap-y-4 justify-between">
<div className="">
<h2 className="text-3xl tracking-tight text-orange-900 font-nunito font-semibold">Explore Programs</h2>
<p className="mt-2 text-sm text-orange-500 font-nunito">Browse institutions categorized by disciplines.</p>
</div>
<a className="text-sm font-medium flex items-center gap-1 transition-colors text-orange-900 hover:text-orange-600 font-nunito" href="#">
                        View all categories <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(25,28,33,0.04),0px_0px_0px_1px_rgba(25,28,33,0.16)] gap-x-4 gap-y-4">

<a className="group flex flex-col items-center justify-center transition-all hover:shadow-sm hover:border-orange-300 bg-white border-slate-50 border rounded-2xl pt-6 pr-6 pb-6 pl-6" href="#">
<div className="flex h-12 w-12 items-center justify-center rounded-full transition-colors group-hover:bg-orange-100 group-hover:text-orange-900 bg-orange-50 text-orange-600">
<iconify-icon className="text-2xl" icon="solar:laptop-minimalistic-linear"></iconify-icon>
</div>
<span className="mt-4 text-sm font-medium tracking-tight text-orange-900 font-nunito">Engineering</span>
</a>

<a className="group flex flex-col items-center justify-center transition-all hover:shadow-sm hover:border-orange-300 bg-white border-slate-50 border rounded-2xl pt-6 pr-6 pb-6 pl-6" href="#">
<div className="flex h-12 w-12 items-center justify-center rounded-full transition-colors group-hover:bg-orange-100 group-hover:text-orange-900 bg-orange-50 text-orange-600">
<iconify-icon className="text-2xl" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<span className="mt-4 text-sm font-medium tracking-tight text-orange-900 font-nunito">Medical</span>
</a>

<a className="group flex flex-col items-center justify-center transition-all hover:shadow-sm hover:border-orange-300 bg-white border-orange-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6" href="#">
<div className="flex h-12 w-12 items-center justify-center rounded-full transition-colors group-hover:bg-orange-100 group-hover:text-orange-900 bg-orange-50 text-orange-600">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<span className="mt-4 text-sm font-medium tracking-tight text-orange-900 font-nunito">Management</span>
</a>

<a className="group flex flex-col items-center justify-center rounded-2xl border p-6 transition-all hover:shadow-sm border-orange-200 bg-white hover:border-orange-300" href="#">
<div className="flex h-12 w-12 items-center justify-center rounded-full transition-colors group-hover:bg-orange-100 group-hover:text-orange-900 bg-orange-50 text-orange-600">
<iconify-icon className="text-2xl" icon="solar:scale-linear"></iconify-icon>
</div>
<span className="mt-4 text-sm font-medium tracking-tight text-orange-900 font-nunito">Law</span>
</a>

<a className="group flex flex-col items-center justify-center transition-all hover:shadow-sm hover:border-orange-300 bg-white border-orange-200 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-md" href="#">
<div className="flex h-12 w-12 items-center justify-center rounded-full transition-colors group-hover:bg-orange-100 group-hover:text-orange-900 bg-orange-50 text-orange-600">
<iconify-icon className="text-2xl" icon="solar:palette-linear"></iconify-icon>
</div>
<span className="mt-4 text-sm font-medium tracking-tight text-orange-900 font-nunito">Arts &amp; Design</span>
</a>

<a className="group flex flex-col items-center justify-center rounded-2xl border p-6 transition-all hover:shadow-sm border-orange-200 bg-white hover:border-orange-300" href="#">
<div className="flex h-12 w-12 items-center justify-center rounded-full transition-colors group-hover:bg-orange-100 group-hover:text-orange-900 bg-orange-50 text-orange-600">
<iconify-icon className="text-2xl" icon="solar:test-tube-linear"></iconify-icon>
</div>
<span className="mt-4 text-sm font-medium tracking-tight text-orange-900 font-nunito">Science</span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mb-12">
<h2 className="text-3xl font-semibold text-orange-900 tracking-tight font-nunito">Top Ranked Institutions</h2>
<p className="text-sm text-orange-500 font-nunito mt-2">Based on verified placement records and academic excellence.</p>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="group flex flex-col overflow-hidden rounded-[2rem] border transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] cursor-pointer border-orange-200 bg-white hover:border-orange-300">
<div className="h-48 w-full relative overflow-hidden flex items-center justify-center bg-orange-100">
<iconify-icon className="text-5xl text-orange-300" icon="solar:gallery-wide-linear"></iconify-icon>
<div className="z-10 bg-gradient-to-t to-transparent from-black/10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-4 left-4 z-20 flex gap-2">
<span className="rounded-full px-2.5 py-1 text-xs font-medium border shadow-sm bg-white text-orange-900 border-orange-200 font-nunito">Government</span>
<span className="rounded-full px-2.5 py-1 text-xs font-medium border shadow-sm flex items-center gap-1 bg-white text-orange-900 border-orange-200 font-nunito">
<iconify-icon className="text-orange-900" icon="solar:star-bold"></iconify-icon> 4.9
                                </span>
</div>
</div>
<div className="flex flex-1 flex-col p-6">
<div className="flex items-center justify-between mb-3 text-xs font-medium text-orange-500">
<span className="flex items-center gap-1 font-nunito"><iconify-icon icon="solar:map-point-linear"></iconify-icon> New Delhi</span>
<span className="font-playfair">NIRF Rank #1</span>
</div>
<h3 className="text-xl tracking-tight mb-2 text-orange-900 font-nunito font-semibold">Indian Institute of Technology (IIT)</h3>
<p className="text-sm text-orange-500 mb-6 line-clamp-2 font-nunito">Premier engineering and research institution offering undergraduate and postgraduate programs.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-orange-100">
<div className="flex flex-col">
<span className="text-xs text-orange-400 font-nunito">Est. Fee/Year</span>
<span className="text-sm font-medium text-orange-900 font-nunito">$2,500</span>
</div>
<span className="text-sm font-medium group-hover:text-orange-500 transition-colors flex items-center gap-1 text-orange-900 font-nunito">
                                    View profile <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="group flex flex-col overflow-hidden rounded-[2rem] border transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] cursor-pointer border-orange-200 bg-white hover:border-orange-300">
<div className="h-48 w-full relative overflow-hidden flex items-center justify-center bg-orange-100">
<iconify-icon className="text-5xl text-orange-300" icon="solar:gallery-wide-linear"></iconify-icon>
<div className="bg-gradient-to-t to-transparent from-black/10 z-10 absolute top-0 right-0 bottom-0 left-0 scale-100 perspective-dramatic"></div>
<div className="absolute top-4 left-4 z-20 flex gap-2">
<span className="rounded-full px-2.5 py-1 text-xs font-medium border shadow-sm bg-white text-orange-900 border-orange-200 font-nunito">Private</span>
<span className="rounded-full px-2.5 py-1 text-xs font-medium border shadow-sm flex items-center gap-1 bg-white text-orange-900 border-orange-200 font-nunito">
<iconify-icon className="text-orange-900" icon="solar:star-bold"></iconify-icon> 4.7
                                </span>
</div>
</div>
<div className="flex flex-1 flex-col p-6">
<div className="flex items-center justify-between mb-3 text-xs font-medium text-orange-500">
<span className="flex items-center gap-1 font-nunito"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Bangalore</span>
<span className="font-nunito">NAAC A++</span>
</div>
<h3 className="text-xl tracking-tight mb-2 text-orange-900 font-nunito font-semibold">Vellore Institute of Technology</h3>
<p className="text-sm text-orange-500 mb-6 line-clamp-2 font-nunito">Leading private university known for excellent placements and modern infrastructure.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-orange-100">
<div className="flex flex-col">
<span className="text-xs text-orange-400 font-nunito">Est. Fee/Year</span>
<span className="text-sm font-medium text-orange-900 font-nunito">$8,000</span>
</div>
<span className="text-sm font-medium group-hover:text-orange-500 transition-colors flex items-center gap-1 text-orange-900 font-nunito">
                                    View profile <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="group flex flex-col overflow-hidden rounded-[2rem] border transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] cursor-pointer border-orange-200 bg-white hover:border-orange-300">
<div className="h-48 w-full relative overflow-hidden flex items-center justify-center bg-orange-100">
<iconify-icon className="text-5xl text-orange-300" icon="solar:gallery-wide-linear"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-t to-transparent z-10 from-black/10"></div>
<div className="absolute top-4 left-4 z-20 flex gap-2">
<span className="rounded-full px-2.5 py-1 text-xs font-medium border shadow-sm bg-white text-orange-900 border-orange-200 font-nunito">Government</span>
<span className="rounded-full px-2.5 py-1 text-xs font-medium border shadow-sm flex items-center gap-1 bg-white text-orange-900 border-orange-200 font-nunito">
<iconify-icon className="text-orange-900" icon="solar:star-bold"></iconify-icon> 4.8
                                </span>
</div>
</div>
<div className="flex flex-1 flex-col p-6">
<div className="flex items-center justify-between mb-3 text-xs font-medium text-orange-500">
<span className="flex items-center gap-1 font-nunito"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Mumbai</span>
<span className="font-nunito">NIRF Rank #3</span>
</div>
<h3 className="text-xl tracking-tight mb-2 text-orange-900 font-nunito font-semibold">Armed Forces Medical College</h3>
<p className="text-sm text-orange-500 mb-6 line-clamp-2 font-nunito">Prestigious medical college providing top-tier healthcare education and training.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-orange-100">
<div className="flex flex-col">
<span className="text-xs text-orange-400 font-nunito">Est. Fee/Year</span>
<span className="text-sm font-medium text-orange-900 font-nunito">$1,200</span>
</div>
<span className="text-sm font-medium group-hover:text-orange-500 transition-colors flex items-center gap-1 text-orange-900 font-nunito">
                                    View profile <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-orange-100 bg-white">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-16">
<h2 className="text-3xl tracking-tight text-orange-900 font-nunito font-semibold">Why use UNIPATH?</h2>
<p className="mt-4 text-sm text-orange-500 font-nunito">We make the complex process of choosing a college transparent and data-driven.</p>
</div>
<div className="grid grid-cols-1 gap-12 md:grid-cols-3">
<div className="flex flex-col items-center text-center">
<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-sm border-orange-200 bg-orange-50">
<iconify-icon className="text-2xl text-orange-700" icon="solar:ruler-cross-pen-linear"></iconify-icon>
</div>
<h3 className="text-lg tracking-tight mb-2 text-orange-900 font-nunito font-semibold">Unbiased Comparisons</h3>
<p className="text-sm text-orange-500 font-nunito">Compare private vs government colleges side-by-side on metrics that actually matter like ROI and faculty ratio.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-sm border-orange-200 bg-orange-50">
<iconify-icon className="text-2xl text-orange-700" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg tracking-tight mb-2 text-orange-900 font-nunito font-semibold">Verified Data</h3>
<p className="text-sm text-orange-500 font-nunito">No paid promotions masking reality. All placement stats, fee structures, and reviews are strictly verified.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-sm border-orange-200 bg-orange-50">
<iconify-icon className="text-2xl text-orange-700" icon="solar:document-add-linear"></iconify-icon>
</div>
<h3 className="text-lg tracking-tight mb-2 text-orange-900 font-nunito font-semibold">Direct Applications</h3>
<p className="text-sm text-orange-500 font-nunito">Once you've found the right fit, use our common application portal to apply to multiple institutions seamlessly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-orange-900">
<div className="absolute inset-0 bg-grid opacity-10 pointer-events-none invert"></div>
<div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
<h2 className="text-3xl tracking-tight sm:text-5xl text-white font-nunito font-semibold">Ready to start your journey?</h2>
<p className="mx-auto mt-6 max-w-xl text-base text-orange-400 font-nunito font-semibold">Join thousands of students who found their ideal college through our platform. Create a free account to save your favorites and start comparing.</p>
<div className="mt-10 flex items-center justify-center gap-4">
<a className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors bg-white text-orange-900 hover:bg-orange-100 font-nunito" href="#">
                        Create free account
                    </a>
</div>
</div>
</section>
</main>

<footer className="border-t py-12 border-orange-100 bg-white">
<div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg tracking-tighter text-orange-900 font-nunito font-semibold">UNIPATH</span>
<span className="text-xs border-l pl-2 ml-2 text-orange-400 border-orange-200 font-nunito">© 2024 All rights reserved.</span>
</div>
<div className="flex gap-6">
<a className="text-xs font-medium text-orange-500 transition-colors hover:text-orange-900 font-nunito" href="#">Privacy Policy</a>
<a className="text-xs font-medium text-orange-500 transition-colors hover:text-orange-900 font-nunito" href="#">Terms of Service</a>
<a className="text-xs font-medium text-orange-500 transition-colors hover:text-orange-900 font-nunito" href="#">Contact Support</a>
</div>
</div>
</footer>

    </>
  );
}
