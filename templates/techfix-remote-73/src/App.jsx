import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#1e293b',
900: '#0f172a',
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2">
<span className="iconify text-blue-600" data-height="24" data-icon="lucide:zap" data-width="24"></span>
<span className="text-lg font-semibold tracking-tight text-slate-900">TechFix</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#features">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-900" href="#">Log in</a>
<a className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-all" href="#pricing">
                    Get Help Now
                </a>
</div>
</div>
</nav>

<section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 mb-8">
<span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
<span className="text-xs font-medium text-blue-700 uppercase tracking-wide">Live Experts Available</span>
</div>
<h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:leading-tight">
                Expert tech support, <br className="hidden md:block"/>
<span className="text-blue-600">instantly and remotely.</span>
</h1>
<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Stop struggling with computer issues. We connect you to certified US-based experts in seconds. 100% secure, remote fixes for any device.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto rounded-lg bg-blue-600 px-8 py-3.5 text-base font-medium text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all" href="#pricing">
                    Fix My Device
                </a>
<a className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-8 py-3.5 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-all" href="#how-it-works">
                    How It Works
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-height="18" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
</div>
<div className="mt-10 flex items-center justify-center gap-4 text-sm text-slate-500">
<div className="flex items-center gap-1">
<span className="iconify text-green-500" data-icon="lucide:shield-check" data-width="16"></span>
<span>Bank-grade Security</span>
</div>
<div className="h-4 w-px bg-slate-300"></div>
<div className="flex items-center gap-1">
<span className="iconify text-green-500" data-icon="lucide:check-circle-2" data-width="16"></span>
<span>Money-back Guarantee</span>
</div>
</div>
</div>

<div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-blue-50 blur-3xl opacity-60 pointer-events-none"></div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50 py-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<p className="text-center text-sm font-medium text-slate-500 mb-6">Trusted by over 12,000 homeowners and businesses</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-semibold text-xl text-slate-800 tracking-tight"><span className="iconify" data-icon="lucide:hexagon"></span>AcmeCorp</div>
<div className="flex items-center gap-2 font-semibold text-xl text-slate-800 tracking-tight"><span className="iconify" data-icon="lucide:layers"></span>LayerStack</div>
<div className="flex items-center gap-2 font-semibold text-xl text-slate-800 tracking-tight"><span className="iconify" data-icon="lucide:command"></span>Command</div>
<div className="flex items-center gap-2 font-semibold text-xl text-slate-800 tracking-tight"><span className="iconify" data-icon="lucide:box"></span>BoxTech</div>
<div className="flex items-center gap-2 font-semibold text-xl text-slate-800 tracking-tight"><span className="iconify" data-icon="lucide:activity"></span>Pulse</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28" id="how-it-works">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Tech help in three simple steps</h2>
<p className="mt-4 text-lg text-slate-600">No jargon. No confusing instructions. Just results.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent -z-10"></div>

<div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6 mx-auto md:mx-0">
<span className="iconify" data-icon="lucide:mouse-pointer-click" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 text-center md:text-left">1. Select your issue</h3>
<p className="text-slate-600 leading-relaxed text-center md:text-left">Tell us what's wrong via our simple form. We support Windows, Mac, iOS, and Android devices.</p>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6 mx-auto md:mx-0">
<span className="iconify" data-icon="lucide:users" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 text-center md:text-left">2. Connect Instantly</h3>
<p className="text-slate-600 leading-relaxed text-center md:text-left">Get matched with a certified expert immediately. Connect via secure remote software.</p>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6 mx-auto md:mx-0">
<span className="iconify" data-icon="lucide:coffee" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 text-center md:text-left">3. Relax while we fix it</h3>
<p className="text-slate-600 leading-relaxed text-center md:text-left">Watch your screen as we solve the problem. You only pay when the job is done perfectly.</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-20 lg:py-28 border-y border-slate-200" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">We fix anything with a power button</h2>
<p className="mt-4 text-lg text-slate-600">From slow computers to WiFi nightmares, our experts handle it all remotely.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-400 transition-colors">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600 mb-4">
<span className="iconify" data-icon="lucide:shield-alert" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900">Virus &amp; Malware Removal</h3>
<p className="mt-2 text-sm text-slate-600">We hunt down and destroy viruses, spyware, and ransomware keeping your data safe.</p>
</div>

<div className="group relative rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-400 transition-colors">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600 mb-4">
<span className="iconify" data-icon="lucide:gauge" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900">Speed Optimization</h3>
<p className="mt-2 text-sm text-slate-600">Computer running slow? We clean up junk files and optimize settings for max speed.</p>
</div>

<div className="group relative rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-400 transition-colors">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-4">
<span className="iconify" data-icon="lucide:wifi" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900">WiFi &amp; Network Issues</h3>
<p className="mt-2 text-sm text-slate-600">Fix connection drops, router configuration, and slow internet speeds remotely.</p>
</div>

<div className="group relative rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-400 transition-colors">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600 mb-4">
<span className="iconify" data-icon="lucide:printer" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900">Printer &amp; Device Setup</h3>
<p className="mt-2 text-sm text-slate-600">Can't print? Scanner not working? We install drivers and configure peripherals.</p>
</div>

<div className="group relative rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-400 transition-colors">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600 mb-4">
<span className="iconify" data-icon="lucide:mail-question" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900">Email &amp; Software Fixes</h3>
<p className="mt-2 text-sm text-slate-600">Troubleshoot Outlook, recover passwords, and install Office or Adobe software.</p>
</div>

<div className="group relative rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-400 transition-colors">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 mb-4">
<span className="iconify" data-icon="lucide:hard-drive" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900">Data Backup &amp; Recovery</h3>
<p className="mt-2 text-sm text-slate-600">Set up automatic cloud backups or attempt to recover lost files from drives.</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
<p className="mt-4 text-lg text-slate-600">No hidden fees. Pay for what you need.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-semibold text-slate-900">One-Time Fix</h3>
<p className="text-sm text-slate-500 mt-1">Perfect for a single urgent issue.</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight text-slate-900">$79</span>
<span className="text-sm font-semibold text-slate-500">/ fix</span>
</div>
<ul className="mb-8 space-y-3 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="iconify text-blue-600 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>Fixes 1 specific issue</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="iconify text-blue-600 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>Expert diagnosis included</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="iconify text-blue-600 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>7-day warranty on the fix</span>
</li>
</ul>
<a className="block w-full rounded-lg bg-white border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-all" href="#">Get One-Time Help</a>
</div>

<div className="relative rounded-3xl border border-blue-200 bg-slate-900 p-8 shadow-xl flex flex-col">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white tracking-wide">
                        MOST POPULAR
                    </div>
<div className="mb-4">
<h3 className="text-lg font-semibold text-white">Annual Membership</h3>
<p className="text-sm text-slate-400 mt-1">Complete peace of mind all year.</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight text-white">$19</span>
<span className="text-sm font-semibold text-slate-400">/ month</span>
</div>
<ul className="mb-8 space-y-3 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-300">
<span className="iconify text-blue-400 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>Unlimited tech support</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<span className="iconify text-blue-400 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>24/7 Priority access</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<span className="iconify text-blue-400 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>Antivirus software included</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<span className="iconify text-blue-400 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>Cover up to 3 devices</span>
</li>
</ul>
<a className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all" href="#">Start Free Trial</a>
<p className="mt-4 text-center text-xs text-slate-500">Billed annually. Cancel anytime.</p>
</div>
</div>
<div className="mt-12 text-center">
<div className="inline-flex items-center gap-2 rounded-lg bg-green-50 px-4 py-2 border border-green-100">
<span className="iconify text-green-600" data-icon="lucide:badge-check" data-width="20"></span>
<span className="text-sm font-medium text-green-800">100% Money-back Guarantee if we can't fix it.</span>
</div>
</div>
</div>
</section>

<section className="bg-white py-20 lg:py-28 border-t border-slate-100" id="faq">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 text-center mb-12">Frequently asked questions</h2>
<div className="space-y-4">
<details className="group rounded-xl bg-slate-50 p-6 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-blue-100">
<summary className="flex cursor-pointer items-center justify-between gap-4 font-medium text-slate-900">
                        Is remote access safe?
                        <span className="iconify transition group-open:rotate-180" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="mt-4 text-sm leading-relaxed text-slate-600">
                        Absolutely. We use 256-bit encrypted connection tools (similar to banking standards). You can see everything we do on your screen in real-time, and you have the power to terminate the session instantly at any time.
                    </div>
</details>
<details className="group rounded-xl bg-slate-50 p-6 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-blue-100">
<summary className="flex cursor-pointer items-center justify-between gap-4 font-medium text-slate-900">
                        What if you can't fix my problem?
                        <span className="iconify transition group-open:rotate-180" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="mt-4 text-sm leading-relaxed text-slate-600">
                        If our experts cannot solve your specific issue, you don't pay. For one-time fixes, we offer a full refund. We believe in results-based service.
                    </div>
</details>
<details className="group rounded-xl bg-slate-50 p-6 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-blue-100">
<summary className="flex cursor-pointer items-center justify-between gap-4 font-medium text-slate-900">
                        How fast can I get help?
                        <span className="iconify transition group-open:rotate-180" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="mt-4 text-sm leading-relaxed text-slate-600">
                        Our average connection time is under 3 minutes. We have experts available 24/7 to ensure you aren't left waiting when technology fails.
                    </div>
</details>
<details className="group rounded-xl bg-slate-50 p-6 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-blue-100">
<summary className="flex cursor-pointer items-center justify-between gap-4 font-medium text-slate-900">
                        Do I need to be a tech whiz to use this?
                        <span className="iconify transition group-open:rotate-180" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="mt-4 text-sm leading-relaxed text-slate-600">
                        Not at all! Our service is designed for non-technical users. Our experts guide you through the simple connection process step-by-step over the phone or chat.
                    </div>
</details>
</div>
</div>
</section>

<section className="relative isolate overflow-hidden bg-slate-900 py-16 sm:py-24 lg:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
<div className="mx-auto max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ready to run fast and error-free?</h2>
<p className="mt-6 text-lg leading-8 text-slate-300">
                    Join thousands of happy customers who have their own personal IT department, just a click away.
                </p>
<div className="mt-10 flex items-center justify-center gap-x-6">
<a className="rounded-lg bg-blue-600 px-8 py-3.5 text-base font-medium text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all" href="#pricing">
                        Get Instant Help
                    </a>
</div>
</div>
</div>

<svg aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" viewbox="0 0 1024 1024">
<circle cx="512" cy="512" fill="url(#gradient)" fillOpacity="0.25" r="512"></circle>
<defs>
<radialgradient id="gradient">
<stop stop-color="#3B82F6"></stop>
<stop offset="1" stop-color="#1E293B"></stop>
</radialgradient>
</defs>
</svg>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<span className="iconify text-blue-600" data-icon="lucide:zap" data-width="20"></span>
<span className="font-semibold text-slate-900">TechFix</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                        Instant remote support for everyone. We make technology simple, secure, and frustration-free.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Service</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-600 hover:text-blue-600 transition-colors" href="#">Personal Support</a></li>
<li><a className="text-sm text-slate-600 hover:text-blue-600 transition-colors" href="#">Business Plans</a></li>
<li><a className="text-sm text-slate-600 hover:text-blue-600 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-600 hover:text-blue-600 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-slate-600 hover:text-blue-600 transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-slate-600 hover:text-blue-600 transition-colors" href="#">Legal</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Contact</h4>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm text-slate-600">
<span className="iconify" data-icon="lucide:phone" data-width="16"></span>
                            1-800-TECH-FIX
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<span className="iconify" data-icon="lucide:mail" data-width="16"></span>
                            help@techfix.com
                        </li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 TechFix Inc. All rights reserved.</p>
<div className="flex gap-4">
<span className="iconify text-slate-300 hover:text-slate-500 cursor-pointer" data-icon="lucide:twitter" data-width="20"></span>
<span className="iconify text-slate-300 hover:text-slate-500 cursor-pointer" data-icon="lucide:facebook" data-width="20"></span>
<span className="iconify text-slate-300 hover:text-slate-500 cursor-pointer" data-icon="lucide:linkedin" data-width="20"></span>
</div>
</div>
</div>
</footer>

    </>
  );
}
