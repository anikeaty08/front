import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
<div className="flex items-center gap-8">
<a className="text-lg font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
                    AC
                </a>
<nav className="hidden md:flex gap-6">
<a className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900" href="#approach">Approach</a>
<a className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900" href="#team">Team</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Patient Portal</a>
<a className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2" href="#">
                    Book Visit
                </a>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
<div className="mx-auto max-w-3xl">
<div className="mb-8 flex justify-center">
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
<iconify-icon icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon> Accepting new patients
                        </span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900">
                        Exceptional care.<br className="hidden sm:block"/> Beautiful results.
                    </h1>
<p className="mt-6 text-lg leading-relaxed text-slate-500 sm:text-xl">
                        A modern approach to dentistry focusing on your comfort, utilizing advanced technology to deliver precise and lasting treatments.
                    </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800" href="#">
                            Schedule Consultation
                        </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white border border-slate-200 px-8 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50" href="#services">
                            Explore Treatments <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-slate-50/50 border-y border-slate-200/50" id="services">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-16 sm:mb-24">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Comprehensive Solutions</h2>
<p className="mt-4 text-base text-slate-500">From routine maintenance to complete smile makeovers, our specialized team provides end-to-end care.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

<div className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:shadow-sm hover:border-slate-300">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Cosmetic Dentistry</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Veneers, professional whitening, and aesthetic bonding to perfect the look of your smile.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors" href="#">
                            Learn more <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:shadow-sm hover:border-slate-300">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-plus-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Restorative Care</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Implants, crowns, and bridges designed to flawlessly restore function and appearance.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors" href="#">
                            Learn more <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:shadow-sm hover:border-slate-300">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Preventative Health</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Comprehensive exams, cleanings, and digital diagnostics to maintain long-term oral health.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors" href="#">
                            Learn more <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32" id="approach">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                            Precision meets comfort.
                        </h2>
<p className="text-base text-slate-500 mb-8 leading-relaxed">
                            We've reimagined the dental experience. By integrating cutting-edge digital workflows, we eliminate guesswork and discomfort, ensuring a streamlined visit every time.
                        </p>
<ul className="space-y-6">
<li className="flex gap-4">
<div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
<iconify-icon icon="solar:scanner-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-900">3D Digital Scanning</h4>
<p className="text-sm text-slate-500 mt-1">Highly accurate impressions without the uncomfortable traditional putty.</p>
</div>
</li>
<li className="flex gap-4">
<div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
<iconify-icon icon="solar:chair-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-900">Anxiety-Free Environment</h4>
<p className="text-sm text-slate-500 mt-1">Noise-canceling headphones, sedation options, and a calming interior design.</p>
</div>
</li>
<li className="flex gap-4">
<div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-900">Same-Day Restorations</h4>
<p className="text-sm text-slate-500 mt-1">In-house milling for crowns and veneers, saving you multiple visits.</p>
</div>
</li>
</ul>
</div>

<div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2.5rem] bg-slate-50 border border-slate-200 overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-br from-white/50 to-slate-100/50 backdrop-blur-3xl"></div>

<div className="relative w-full max-w-sm px-8">
<div className="space-y-4">
<div className="h-2 w-1/3 rounded-full bg-slate-200"></div>
<div className="h-2 w-1/2 rounded-full bg-slate-200"></div>
<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm mt-8">
<div className="flex items-center gap-4 border-b border-slate-100 pb-4">
<div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:calendar-date-linear" width="20"></iconify-icon>
</div>
<div>
<div className="h-2 w-24 rounded-full bg-slate-200 mb-2"></div>
<div className="h-2 w-16 rounded-full bg-slate-100"></div>
</div>
</div>
<div className="pt-4 flex justify-between items-center">
<div className="h-2 w-12 rounded-full bg-slate-100"></div>
<div className="h-6 w-16 rounded-full bg-slate-900"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-white py-12">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<a className="text-xl font-semibold tracking-tighter text-slate-900 inline-block mb-2" href="#">
                        AC
                    </a>
<p className="text-sm text-slate-500 max-w-xs">Elevating the standard of modern dental care in a premium setting.</p>
</div>
<div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold uppercase tracking-wider text-slate-900">Clinic</span>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">About Us</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Our Team</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Careers</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold uppercase tracking-wider text-slate-900">Connect</span>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2" href="#">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon> (555) 123-4567
                        </a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2" href="#">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon> 100 Medical Plaza, NY
                        </a>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 A-Clinic Dental. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="sr-only">Twitter</span>
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
