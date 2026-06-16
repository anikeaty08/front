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



        // Set current year in footer
        document.getElementById('year').textContent = new Date().getFullYear();

        // Scroll Reveal Animation Logic
        document.addEventListener("DOMContentLoaded", () => {
            const reveals = document.querySelectorAll(".reveal");

            const revealOnScroll = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        // Optional: stop observing once revealed
                        // observer.unobserve(entry.target);
                    }
                });
            }, {
                root: null,
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            });

            reveals.forEach(reveal => {
                revealOnScroll.observe(reveal);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300 border-[#C0C0C0] bg-white/90 shadow-sm">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center py-2">
<a className="transition-opacity hover:opacity-80 flex items-center" href="#">
<img alt="Hectors Lawn &amp; Haul" className="w-auto h-14 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe849580-b442-4576-ae53-f467bd03215e_320w.jpg"/>
</a>
</div>
<div className="hidden md:block">
<div className="ml-10 flex items-center space-x-8 text-sm font-bold uppercase tracking-wider font-heading">
<a className="transition-colors text-gray-600 hover:text-[#32CD32]" href="#about">About</a>
<a className="transition-colors text-gray-600 hover:text-[#32CD32]" href="#services">Services</a>
<a className="transition-colors text-gray-600 hover:text-[#32CD32]" href="#areas">Areas</a>
</div>
</div>
<div className="flex items-center space-x-4">
<a className="hidden text-sm font-bold font-heading uppercase tracking-wider transition-colors md:flex items-center gap-1.5 text-gray-600 hover:text-[#32CD32]" href="tel:4692674485">
<iconify-icon height="18" icon="solar:phone-linear" width="18"></iconify-icon>
                        469-267-4485
                    </a>
<a className="inline-flex h-10 items-center justify-center rounded-md px-6 py-2 text-xs font-bold font-heading uppercase tracking-widest transition-colors bg-[#013220] text-white hover:bg-[#32CD32] hover:text-[#013220]" href="#contact">
                        Get Estimate
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 pb-16 bg-white">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white"></div>
<div className="opacity-40 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
<div className="mx-auto max-w-4xl reveal">
<span className="inline-flex items-center gap-1.5 uppercase text-xs font-bold text-[#013220] tracking-widest bg-white border-[#C0C0C0] border rounded-full mb-6 pt-1.5 pr-4 pb-1.5 pl-4 shadow-sm backdrop-blur-sm -rotate-y-20">
<iconify-icon className="text-[#32CD32]" icon="solar:star-fall-linear"></iconify-icon>
                    Now Serving Dallas &amp; Surrounding Areas
                </span>
<h1 className="mt-6 font-heading text-6xl font-extrabold uppercase tracking-tighter sm:text-7xl md:text-8xl text-[#013220] leading-none">
                    Reliable <br className="hidden sm:block"/>

<span className="inline-block transform text-white bg-[#32CD32] mt-2 mb-2 pt-1 pr-4 pb-1 pl-4 shadow-lg -skew-x-6 -rotate-y-30">Lawn Maintenance</span>
<br className="hidden sm:block"/>
                    &amp; Junk Removal
                </h1>
<p className="sm:text-lg md:text-xl text-base font-medium text-gray-580 max-w-xl mt-8 mr-auto ml-auto -rotate-y-20">
                    Residential &amp; Commercial Services • Free Estimates • Fast &amp; Professional. We handle the heavy lifting and the fine trimming.
                </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row font-heading">

<a className="inline-flex sm:w-auto items-center justify-center gap-2 uppercase transition-all hover:bg-[#013220] hover:text-white hover:shadow-[2px_2px_0px_#013220] hover:translate-y-[2px] hover:translate-x-[2px] text-base font-extrabold text-[#013220] tracking-widest bg-[#32CD32] w-full h-14 rounded-md pt-1 pr-10 pb-1 pl-10 shadow-[4px_4px_0px_#013220] -rotate-y-20" href="tel:4692674485">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                        Call 469-267-4485
                    </a>
<a className="inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-md border-2 bg-white px-10 py-1 text-base font-extrabold uppercase tracking-widest transition-all border-[#C0C0C0] text-[#013220] hover:border-[#013220] hover:bg-gray-50" href="#contact">
                        Request a Quote
                        <iconify-icon className="" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[#C0C0C0]">
</div>
</section>

<section className="sm:py-32 bg-white border-[#C0C0C0] border-t pt-24 pb-24 relative" id="about">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
<div className="reveal">
<h2 className="text-4xl font-extrabold font-heading uppercase tracking-tight sm:text-5xl text-[#013220]">Local. Reliable. Done Right.</h2>
<p className="mt-6 text-base font-medium leading-relaxed text-gray-600">
                        Hectors Lawn and Haul is a locally owned business built on hard work and dedication. Hector is a hands-on professional who takes personal pride in serving homes and businesses across the Dallas area.
                    </p>
<p className="mt-4 text-base font-medium leading-relaxed text-gray-600">
                        We believe in honest pricing, showing up on time, and getting the job done efficiently. Whether you need your property meticulously maintained or years of clutter hauled away, we treat your space with the respect it deserves.
                    </p>
<div className="mt-8 grid grid-cols-2 gap-6 border-t pt-8 border-[#C0C0C0]">
<div>
<div className="flex items-center gap-2 font-bold font-heading uppercase tracking-wider mb-1 text-[#013220]">
<iconify-icon className="text-[#32CD32]" icon="solar:verified-check-linear" width="20"></iconify-icon>
                                Honest Pricing
                            </div>
<span className="text-sm font-medium text-gray-500">No hidden fees, ever.</span>
</div>
<div className="">
<div className="flex items-center gap-2 font-bold font-heading uppercase tracking-wider mb-1 text-[#013220]">
<iconify-icon className="text-[#32CD32]" icon="solar:clock-circle-linear" width="20"></iconify-icon>
                                On-Time Service
                            </div>
<span className="text-sm font-medium text-gray-500">We respect your schedule.</span>
</div>
</div>
</div>

<div className="relative aspect-square rounded-xl p-2 reveal delay-200 bg-gray-50 border border-[#C0C0C0] shadow-sm">
<div className="flex flex-col overflow-hidden group bg-white w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f4440f7-31d9-4935-b6d2-100a2911fd4c_800w.jpg)] bg-cover bg-center border-[#C0C0C0] border rounded-lg relative items-center justify-center">

<div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#32CD32]/20 rounded-full blur-2xl group-hover:bg-[#32CD32]/30 transition-colors duration-700"></div>
<div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-lg rotate-12 blur-xl group-hover:bg-[#013220]/10 transition-colors duration-700 bg-[#C0C0C0]/20"></div>
<div className="relative z-10 flex gap-4">
<iconify-icon className="group-hover:-translate-y-2 group-hover:text-[#32CD32] transition-all duration-500 text-[#013220]" height="56" icon="solar:leaf-linear" width="56"></iconify-icon>
<iconify-icon className="group-hover:translate-y-2 group-hover:text-[#C0C0C0] transition-all duration-500 text-[#013220]" height="56" icon="solar:trash-bin-trash-linear" width="56"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 sm:py-32 border-t border-[#C0C0C0] bg-gray-50" id="services">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center reveal">
<h2 className="text-4xl font-extrabold font-heading uppercase tracking-tight sm:text-5xl text-[#013220]">Our Services</h2>
<p className="mt-4 text-base font-medium text-gray-600">Complete property care, from precise lawn maintenance to full-scale cleanouts.</p>
</div>
<div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">

<div className="group relative rounded-xl border-2 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#32CD32] hover:shadow-[0_8px_30px_rgb(50,205,50,0.15)] reveal delay-100 border-[#C0C0C0] bg-white">
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg transition-colors bg-[#013220] text-[#32CD32]">
<iconify-icon height="32" icon="solar:leaf-linear" width="32"></iconify-icon>
</div>
<h3 className="text-3xl font-extrabold font-heading uppercase tracking-tight text-[#013220]">Lawn Maintenance</h3>
<p className="mt-3 text-sm font-medium text-gray-600">Professional maintenance to keep your residential or commercial property looking its best year-round.</p>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-3 text-sm font-semibold text-gray-700">
<iconify-icon className="text-[#32CD32]" icon="solar:check-circle-linear" width="20"></iconify-icon> Lawn mowing &amp; edging
                        </li>
<li className="flex items-center gap-3 text-sm font-semibold text-gray-700">
<iconify-icon className="text-[#32CD32]" icon="solar:check-circle-linear" width="20"></iconify-icon> Weed &amp; bush trimming
                        </li>
<li className="flex items-center gap-3 text-sm font-semibold text-gray-700">
<iconify-icon className="text-[#32CD32]" icon="solar:check-circle-linear" width="20"></iconify-icon> Yard cleanups
                        </li>
<li className="flex items-center gap-3 text-sm font-semibold text-gray-700">
<iconify-icon className="text-[#32CD32]" icon="solar:check-circle-linear" width="20"></iconify-icon> Seasonal maintenance
                        </li>
<li className="flex items-center gap-3 text-sm font-semibold text-gray-700">
<iconify-icon className="text-[#32CD32]" icon="solar:check-circle-linear" width="20"></iconify-icon> Commercial contracts
                        </li>
</ul>
<a className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-4 text-xs font-extrabold font-heading uppercase tracking-widest transition-all bg-gray-100 text-[#013220] hover:bg-[#32CD32] hover:text-[#013220]" href="#contact">
                        Get a Free Estimate
                        <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>

<div className="group relative rounded-xl border-2 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#32CD32] hover:shadow-[0_8px_30px_rgb(50,205,50,0.15)] reveal delay-200 border-[#C0C0C0] bg-white">
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg transition-colors bg-[#013220] text-[#32CD32]">
<iconify-icon height="32" icon="solar:trash-bin-trash-linear" width="32"></iconify-icon>
</div>
<h3 className="text-3xl font-extrabold font-heading uppercase tracking-tight text-[#013220]">Junk Removal</h3>
<p className="mt-3 text-sm font-medium text-gray-600">Fast, efficient hauling and disposal services. We clear out the clutter so you don't have to.</p>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-3 text-sm font-semibold text-gray-700">
<iconify-icon className="text-[#32CD32]" icon="solar:check-circle-linear" width="20"></iconify-icon> Household junk &amp; furniture
                        </li>
<li className="flex items-center gap-3 text-sm font-semibold text-gray-700">
<iconify-icon className="text-[#32CD32]" icon="solar:check-circle-linear" width="20"></iconify-icon> Appliance removal
                        </li>
<li className="flex items-center gap-3 text-sm font-semibold text-gray-700">
<iconify-icon className="text-[#32CD32]" icon="solar:check-circle-linear" width="20"></iconify-icon> Garage &amp; yard cleanouts
                        </li>
<li className="flex items-center gap-3 text-sm font-semibold text-gray-700">
<iconify-icon className="text-[#32CD32]" icon="solar:check-circle-linear" width="20"></iconify-icon> Construction debris
                        </li>
<li className="flex items-center gap-3 text-sm font-semibold text-gray-700">
<iconify-icon className="text-[#32CD32]" icon="solar:check-circle-linear" width="20"></iconify-icon> Commercial hauling
                        </li>
</ul>
<a className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-4 text-xs font-extrabold font-heading uppercase tracking-widest transition-all bg-gray-100 text-[#013220] hover:bg-[#32CD32] hover:text-[#013220]" href="#contact">
                        Get a Free Estimate
                        <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-[#013220]">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-12 md:grid-cols-3">
<div className="reveal">
<div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg border border-white/20 bg-white/5">
<iconify-icon className="text-[#32CD32]" icon="solar:wad-of-money-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-extrabold font-heading uppercase tracking-wide text-white">Free, Honest Estimates</h3>
<p className="mt-3 text-sm font-medium text-gray-300">Transparent pricing before we start any job. No surprises, just fair rates for quality work.</p>
</div>
<div className="reveal delay-100">
<div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg border border-white/20 bg-white/5">
<iconify-icon className="text-[#32CD32]" icon="solar:buildings-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-extrabold font-heading uppercase tracking-wide text-white">Residential &amp; Commercial</h3>
<p className="mt-3 text-sm font-medium text-gray-300">Equipped to handle everything from small residential yards to large commercial property cleanouts.</p>
</div>
<div className="reveal delay-200">
<div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg border border-white/20 bg-white/5">
<iconify-icon className="text-[#32CD32]" icon="solar:stopwatch-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-extrabold font-heading uppercase tracking-wide text-white">Fast &amp; Reliable</h3>
<p className="mt-3 text-sm font-medium text-gray-300">We value your time. Same-day or next-day service is often available depending on the project scope.</p>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-white">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<h2 className="text-4xl font-extrabold font-heading uppercase tracking-tight text-center mb-16 reveal text-[#013220]">Trusted by locals</h2>
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">

<div className="rounded-xl border p-8 reveal border-[#C0C0C0] bg-gray-50 shadow-sm">
<div className="flex gap-1 text-[#32CD32] mb-5">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-sm font-medium leading-relaxed mb-8 text-gray-700">"Hector did an amazing job clearing out my garage and taking away old furniture. He was on time, super polite, and his price was better than the big corporate guys."</p>
<div className="flex items-center gap-4 border-t border-[#C0C0C0] pt-4">
<div className="h-10 w-10 rounded-md flex items-center justify-center text-sm font-bold font-heading bg-[#013220] text-[#32CD32]">JD</div>
<div>
<div className="text-sm font-bold font-heading uppercase tracking-wider text-[#013220]">James D.</div>
<div className="text-xs font-medium text-gray-500">Dallas, TX</div>
</div>
</div>
</div>

<div className="rounded-xl border p-8 reveal delay-100 border-[#C0C0C0] bg-gray-50 shadow-sm">
<div className="flex gap-1 text-[#32CD32] mb-5">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-sm font-medium leading-relaxed mb-8 text-gray-700">"Been using them for lawn maintenance for a few months now. Always reliable, yard looks crisp and clean every time. Highly recommend if you want zero hassle."</p>
<div className="flex items-center gap-4 border-t border-[#C0C0C0] pt-4">
<div className="h-10 w-10 rounded-md flex items-center justify-center text-sm font-bold font-heading bg-[#013220] text-[#32CD32]">SM</div>
<div>
<div className="text-sm font-bold font-heading uppercase tracking-wider text-[#013220]">Sarah M.</div>
<div className="text-xs font-medium text-gray-500">DeSoto, TX</div>
</div>
</div>
</div>

<div className="rounded-xl border p-8 reveal delay-200 border-[#C0C0C0] bg-gray-50 shadow-sm">
<div className="flex gap-1 text-[#32CD32] mb-5">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-sm font-medium leading-relaxed mb-8 text-gray-700">"Called for a yard cleanup after a storm. They hauled off all the debris quickly and even trimmed back some bushes. Very professional service."</p>
<div className="flex items-center gap-4 border-t border-[#C0C0C0] pt-4">
<div className="h-10 w-10 rounded-md flex items-center justify-center text-sm font-bold font-heading bg-[#013220] text-[#32CD32]">TR</div>
<div>
<div className="text-sm font-bold font-heading uppercase tracking-wider text-[#013220]">Tom R.</div>
<div className="text-xs font-medium text-gray-500">Waxahachie, TX</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-[#C0C0C0] py-16 bg-gray-50" id="areas">
<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center reveal">
<h2 className="text-xs font-extrabold font-heading text-gray-500 uppercase tracking-widest mb-6">Proudly Serving</h2>
<div className="flex flex-wrap justify-center gap-3">
<span className="inline-flex items-center uppercase text-sm font-bold text-[#013220] tracking-wider font-heading bg-white border-[#C0C0C0] border rounded-md pt-2 pr-5 pb-2 pl-5 shadow-sm">Dallas </span>
<span className="inline-flex items-center rounded-md border px-5 py-2 text-sm font-bold font-heading uppercase tracking-wider border-[#C0C0C0] bg-white text-[#013220] shadow-sm">DeSoto</span>
<span className="inline-flex items-center rounded-md border px-5 py-2 text-sm font-bold font-heading uppercase tracking-wider border-[#C0C0C0] bg-white text-[#013220] shadow-sm">Red Oak</span>
<span className="inline-flex items-center rounded-md border px-5 py-2 text-sm font-bold font-heading uppercase tracking-wider border-[#C0C0C0] bg-white text-[#013220] shadow-sm">Lancaster</span>
<span className="inline-flex items-center rounded-md border px-5 py-2 text-sm font-bold font-heading uppercase tracking-wider border-[#C0C0C0] bg-white text-[#013220] shadow-sm">Waxahachie</span>
<span className="inline-flex items-center rounded-md border px-5 py-2 text-sm font-bold font-heading uppercase tracking-wider border-[#C0C0C0] bg-white text-[#013220] shadow-sm">Ovilla</span>
</div>
</div>
</section>

<section className="relative border-t bg-white py-24 sm:py-32 overflow-hidden border-[#C0C0C0]" id="contact">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#32CD32]/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

<div className="reveal">
<h2 className="text-5xl font-extrabold font-heading uppercase tracking-tight sm:text-6xl text-[#013220] leading-none">Need <span className="text-[#32CD32]">Lawn</span> Care or <span className="text-[#C0C0C0]">Junk</span> Removal Today?</h2>
<p className="mt-6 text-base font-medium text-gray-600">Fill out the form to request your free estimate. We aim to respond within a few hours. For immediate assistance, give us a call.</p>
<div className="mt-10 flex flex-col gap-8">
<a className="inline-flex items-center gap-5 transition-all w-fit group text-[#013220] hover:translate-x-2" href="tel:4692674485">
<div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 transition-colors border-[#C0C0C0] bg-gray-50 group-hover:border-[#32CD32] group-hover:text-[#32CD32]">
<iconify-icon icon="solar:phone-linear" width="28"></iconify-icon>
</div>
<div>
<div className="text-xs text-gray-500 font-extrabold font-heading uppercase tracking-widest">Call Us Directly</div>
<div className="text-2xl font-extrabold font-heading tracking-tight mt-1">469-267-4485</div>
</div>
</a>
<div className="inline-flex items-center gap-5 w-fit text-[#013220]">
<div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-[#C0C0C0] bg-gray-50">
<iconify-icon icon="solar:clock-circle-linear" width="28"></iconify-icon>
</div>
<div>
<div className="text-xs text-gray-500 font-extrabold font-heading uppercase tracking-widest">Business Hours</div>
<div className="text-base font-bold font-heading tracking-wide mt-1">Mon - Sat: 8:00 AM - 6:00 PM</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border-2 p-8 shadow-xl bg-white reveal delay-100 border-[#C0C0C0]">
<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
<div>
<label className="block text-xs font-extrabold font-heading uppercase tracking-widest mb-2 text-[#013220]" htmlFor="name">Full Name</label>
<input className="block w-full rounded-md border-2 px-4 py-3 text-sm font-medium placeholder-gray-400 focus:border-[#32CD32] focus:outline-none focus:ring-1 focus:ring-[#32CD32] transition-colors border-[#C0C0C0] bg-white text-[#013220]" id="name" name="name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-extrabold font-heading uppercase tracking-widest mb-2 text-[#013220]" htmlFor="phone">Phone Number</label>
<input className="block w-full rounded-md border-2 px-4 py-3 text-sm font-medium placeholder-gray-400 focus:border-[#32CD32] focus:outline-none focus:ring-1 focus:ring-[#32CD32] transition-colors border-[#C0C0C0] bg-white text-[#013220]" id="phone" name="phone" placeholder="(469) 267-4485" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-extrabold font-heading uppercase tracking-widest mb-2 text-[#013220]" htmlFor="email">Email Address</label>
<input className="block w-full rounded-md border-2 px-4 py-3 text-sm font-medium placeholder-gray-400 focus:border-[#32CD32] focus:outline-none focus:ring-1 focus:ring-[#32CD32] transition-colors border-[#C0C0C0] bg-white text-[#013220]" id="email" name="email" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-extrabold font-heading uppercase tracking-widest mb-2 text-[#013220]" htmlFor="service">Service Needed</label>
<select className="block w-full rounded-md border-2 px-4 py-3 text-sm font-medium focus:border-[#32CD32] focus:outline-none focus:ring-1 focus:ring-[#32CD32] transition-colors cursor-pointer border-[#C0C0C0] bg-white text-[#013220]" id="service" name="service">
<option className="text-gray-400" disabled="" selected="" value="">Select a service</option>
<option value="lawn-care">Lawn Maintenance</option>
<option value="junk-removal">Junk Removal</option>
<option value="both">Both Services</option>
</select>
</div>
<div>
<label className="block text-xs font-extrabold font-heading uppercase tracking-widest mb-2 text-[#013220]" htmlFor="message">Project Details</label>
<textarea className="block w-full rounded-md border-2 px-4 py-3 text-sm font-medium placeholder-gray-400 focus:border-[#32CD32] focus:outline-none focus:ring-1 focus:ring-[#32CD32] transition-colors resize-none border-[#C0C0C0] bg-white text-[#013220]" id="message" name="message" placeholder="Tell us briefly what you need help with..." rows="4"></textarea>
</div>

<button className="inline-flex w-full items-center justify-center rounded-md px-8 py-4 text-base font-extrabold font-heading uppercase tracking-widest transition-all mt-4 bg-[#32CD32] text-[#013220] hover:bg-[#013220] hover:text-white shadow-[4px_4px_0px_#013220] hover:shadow-[2px_2px_0px_#013220] hover:translate-y-[2px] hover:translate-x-[2px]" type="submit">
                            Get My Free Estimate
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="pt-16 pb-8 bg-[#013220]">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-5">
<div className="lg:col-span-2">
<span className="text-3xl font-extrabold font-heading uppercase tracking-tighter text-white">HECTORS</span>
<p className="mt-4 text-sm font-medium max-w-xs leading-relaxed text-gray-300">
                        Professional, reliable, and affordable lawn care and junk hauling services in the greater Dallas area.
                    </p>
<div className="mt-6 flex items-center gap-2 text-sm font-bold font-heading uppercase tracking-wider text-[#32CD32]">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon> Free Estimates Available
                    </div>
</div>
<div>
<h3 className="text-sm font-extrabold font-heading uppercase tracking-widest text-white">Services</h3>
<ul className="mt-5 space-y-4 text-sm font-medium text-gray-300">
<li><a className="transition-colors hover:text-[#32CD32]" href="#services">Lawn Maintenance</a></li>
<li><a className="transition-colors hover:text-[#32CD32]" href="#services">Yard Cleanups</a></li>
<li><a className="transition-colors hover:text-[#32CD32]" href="#services">Junk Hauling</a></li>
<li><a className="transition-colors hover:text-[#32CD32]" href="#services">Furniture Removal</a></li>
<li><a className="transition-colors hover:text-[#32CD32]" href="#services">Commercial Services</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-extrabold font-heading uppercase tracking-widest text-white">Company</h3>
<ul className="mt-5 space-y-4 text-sm font-medium text-gray-300">
<li><a className="transition-colors hover:text-[#32CD32]" href="#about">About Hector</a></li>
<li><a className="transition-colors hover:text-[#32CD32]" href="#areas">Service Areas</a></li>
<li><a className="transition-colors hover:text-[#32CD32]" href="#contact">Contact Us</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-extrabold font-heading uppercase tracking-widest text-white">Contact</h3>
<ul className="mt-5 space-y-4 text-sm font-medium text-gray-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#32CD32]" icon="solar:phone-linear" width="18"></iconify-icon>
<a className="transition-colors hover:text-white" href="tel:4692674485">469-267-4485</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#32CD32]" icon="solar:map-point-linear" width="18"></iconify-icon>
                            Dallas, TX 75224
                        </li>
<li className="flex items-start gap-3 mt-4">
<iconify-icon className="text-[#32CD32] mt-0.5" icon="solar:clock-circle-linear" width="18"></iconify-icon>
<span>Mon - Sat<br/>8:00 AM - 6:00 PM</span>
</li>
</ul>
</div>
</div>
<div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:flex-row">
<p className="text-xs font-medium text-gray-400">
                    © <span id="year">2026</span> Hectors Lawn and Haul. All rights reserved.
                </p>
<div className="mt-4 flex space-x-6 sm:mt-0 text-gray-400">

<a className="transition-colors hover:text-[#32CD32]" href="#">
<span className="sr-only">Facebook</span>
<iconify-icon icon="solar:global-linear" width="22"></iconify-icon>
</a>
<a className="transition-colors hover:text-[#32CD32]" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon icon="solar:camera-linear" width="22"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
