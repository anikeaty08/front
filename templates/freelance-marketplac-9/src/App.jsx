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
brand: {
50: '#ecfdf5',
100: '#d1fae5',
500: '#10b981', // Emerald 500
600: '#059669', // Emerald 600
700: '#047857', // Emerald 700
900: '#064e3b',
}
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'glow': '0 0 40px -10px rgba(16, 185, 129, 0.15)',
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-100 bg-white/80 backdrop-blur-md transition-all">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:layers" data-width="18"></span>
</div>
<span className="self-center text-xl font-semibold tracking-tight text-gray-900 group-hover:text-brand-600 transition-colors">WorkNest</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-4 items-center">
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 hidden sm:block" href="#">Log in</a>
<a className="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all" href="#">Sign Up</a>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none" data-collapse-toggle="navbar-sticky" type="button">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li><a aria-current="page" className="block py-2 px-3 text-gray-900 bg-brand-50 rounded md:bg-transparent md:text-brand-600 md:p-0" href="#">Find Talent</a></li>
<li><a className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:p-0 transition-colors" href="#">Find Work</a></li>
<li><a className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:p-0 transition-colors" href="#">Why WorkNest</a></li>
<li><a className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:p-0 transition-colors" href="#">Enterprise</a></li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">

<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-medium mb-6 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                    Trusted by 50,000+ businesses
                </div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                    Hire verified freelancers and get your work done — <span className="text-brand-600">securely &amp; on time.</span>
</h1>
<p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    WorkNest connects businesses with vetted global professionals through secure payments, transparent hiring, and reliable delivery.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<button className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-brand-600 rounded-xl hover:bg-brand-700 focus:ring-4 focus:ring-brand-100 transition-all shadow-lg shadow-brand-500/30">
                        Hire Top Talent
                        <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
<button className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 focus:ring-4 focus:ring-gray-100 transition-all">
                        Apply as a Freelancer
                    </button>
</div>
<div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-400">
<div className="flex items-center gap-1">
<span className="iconify text-brand-500" data-icon="lucide:check-circle-2" data-width="16"></span>
<span>No hiring fees</span>
</div>
<div className="flex items-center gap-1">
<span className="iconify text-brand-500" data-icon="lucide:shield-check" data-width="16"></span>
<span>Money-back guarantee</span>
</div>
</div>
</div>

<div className="relative lg:h-[500px] w-full flex items-center justify-center hidden lg:flex">
<div className="relative w-full max-w-lg h-[400px]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-200/40 rounded-full blur-3xl -z-10"></div>

<div className="absolute top-10 left-10 right-10 bg-white rounded-2xl shadow-soft border border-gray-100 p-6 z-10 transform transition-transform hover:-translate-y-1 duration-500">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
<span className="iconify" data-icon="lucide:user" data-width="24"></span>
</div>
<div>
<h3 className="font-semibold text-gray-900 text-sm">Elena Rodriguez</h3>
<p className="text-xs text-gray-500">Senior UX Designer</p>
</div>
</div>
<span className="bg-brand-50 text-brand-700 text-xs px-2 py-1 rounded-md font-medium flex items-center gap-1">
<span className="iconify" data-icon="lucide:badge-check" data-width="12"></span> Verified
                            </span>
</div>
<div className="flex gap-2 mb-4">
<span className="px-2 py-1 bg-gray-50 rounded text-xs text-gray-600 border border-gray-100">Figma</span>
<span className="px-2 py-1 bg-gray-50 rounded text-xs text-gray-600 border border-gray-100">Prototyping</span>
<span className="px-2 py-1 bg-gray-50 rounded text-xs text-gray-600 border border-gray-100">Mobile Apps</span>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-brand-500 w-[95%]"></div>
</div>
<div className="flex justify-between mt-2 text-xs text-gray-400">
<span>Job Success</span>
<span className="font-medium text-gray-900">98%</span>
</div>
</div>

<div className="absolute -bottom-4 -left-4 glass-card p-4 rounded-xl shadow-lg z-20 w-64 animate-[bounce_4s_infinite]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<div>
<p className="text-xs text-gray-500">Payment Status</p>
<p className="text-sm font-semibold text-gray-900">Funds Secured in Escrow</p>
</div>
</div>
</div>

<div className="absolute top-20 -right-8 glass-card p-3 rounded-xl shadow-lg z-0">
<div className="flex items-center gap-2">
<div className="flex text-yellow-400">
<span className="iconify" data-icon="lucide:star" data-width="14" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="14" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="14" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="14" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="14" fill="currentColor"></span>
</div>
<span className="text-xs font-semibold text-gray-900">5.0</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-gray-100 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200/50">
<div className="text-center px-4">
<p className="text-2xl font-semibold text-gray-900 tracking-tight">4.8/5</p>
<p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Average Rating</p>
</div>
<div className="text-center px-4">
<p className="text-2xl font-semibold text-gray-900 tracking-tight">50k+</p>
<p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Verified Experts</p>
</div>
<div className="text-center px-4">
<p className="text-2xl font-semibold text-gray-900 tracking-tight">1k+</p>
<p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Businesses Served</p>
</div>
<div className="text-center px-4">
<div className="flex items-center justify-center gap-1 text-brand-600 mb-1">
<span className="iconify" data-icon="lucide:lock" data-width="18"></span>
<span className="text-2xl font-semibold text-gray-900 tracking-tight">100%</span>
</div>
<p className="text-xs text-gray-500 uppercase tracking-wide">Secured Payments</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-4">Everything you need to scale confidently</h2>
<p className="text-lg text-gray-500">We've built a platform that removes the friction from freelancing, so you can focus on the work.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-rows-2 gap-6 h-auto lg:h-[600px]">

<div className="md:col-span-3 lg:col-span-4 lg:row-span-2 group relative overflow-hidden bg-gray-50 rounded-3xl border border-gray-100 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
<div className="absolute top-0 right-0 w-64 h-64 bg-brand-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-50 transition-opacity"></div>
<div>
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-brand-600 mb-6">
<span className="iconify" data-icon="lucide:badge-check" data-width="24"></span>
</div>
<h3 className="text-2xl font-semibold text-gray-900 mb-2">Verified Freelancers</h3>
<p className="text-gray-500 max-w-sm">We manually vet professionals for skill, identity, and reliability. Only the top 3% make it through our rigorous screening process.</p>
</div>

<div className="mt-8 bg-white rounded-xl border border-gray-200 p-4 shadow-sm w-full max-w-md self-center relative translate-y-2 group-hover:translate-y-0 transition-transform">
<div className="flex items-center gap-3 border-b border-gray-100 pb-3 mb-3">
<div className="w-8 h-8 rounded-full bg-gray-200"></div>
<div className="h-2 w-24 bg-gray-100 rounded"></div>
<div className="ml-auto w-16 h-6 bg-green-50 text-green-700 text-[10px] flex items-center justify-center rounded font-medium">ID Verified</div>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-gray-50 rounded"></div>
<div className="h-2 w-2/3 bg-gray-50 rounded"></div>
</div>
</div>
</div>

<div className="md:col-span-3 lg:col-span-2 bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all">
<div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-900 mb-4">
<span className="iconify" data-icon="lucide:shield" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Escrow</h3>
<p className="text-sm text-gray-500">Funds are held securely and released only when you approve the work.</p>
</div>

<div className="md:col-span-3 lg:col-span-2 bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all">
<div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-900 mb-4">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Hiring</h3>
<p className="text-sm text-gray-500">Clear proposals and streamlined communication tools to get started in minutes.</p>
</div>

<div className="md:col-span-3 lg:col-span-2 bg-gray-900 rounded-3xl border border-gray-800 p-6 flex flex-col justify-center relative overflow-hidden">
<div className="absolute right-0 top-0 w-32 h-32 bg-brand-500 rounded-full blur-[60px] opacity-20"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-2 text-brand-400">
<span className="iconify" data-icon="lucide:globe-2" data-width="18"></span>
<span className="text-xs font-semibold uppercase tracking-wider">Global</span>
</div>
<h3 className="text-lg font-semibold text-white mb-1">Talent Pool</h3>
<p className="text-sm text-gray-400">Access professionals from 120+ countries.</p>
</div>
</div>

<div className="md:col-span-3 lg:col-span-2 bg-white rounded-3xl border border-gray-100 p-6 flex flex-col justify-center hover:border-brand-200 transition-colors">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
<span className="iconify" data-icon="lucide:headphones" data-width="16"></span>
</div>
<h3 className="text-lg font-semibold text-gray-900">24/7 Support</h3>
</div>
<p className="text-sm text-gray-500 pl-11">Fair dispute resolution and human help anytime.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[2px] bg-gray-100 -z-10"></div>

<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-soft mb-6 z-10">
<span className="iconify text-brand-600" data-icon="lucide:file-edit" data-width="32"></span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">1. Post a Job</h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs">Describe your project, budget, and timeline in minutes. It's free to post.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-soft mb-6 z-10">
<span className="iconify text-brand-600" data-icon="lucide:users" data-width="32"></span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">2. Hire Talent</h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs">Review proposals, check verified portfolios, and hire your favorite.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-soft mb-6 z-10">
<span className="iconify text-brand-600" data-icon="lucide:check-circle" data-width="32"></span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">3. Pay Securely</h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs">Release payment only when you are 100% satisfied with the work.</p>
</div>
</div>
<div className="mt-12 text-center">
<p className="inline-flex items-center gap-2 text-sm text-gray-400 bg-gray-50 px-4 py-2 rounded-full">
<span className="iconify text-brand-500" data-icon="lucide:lock" data-width="14"></span>
                    Reassurance: Only pay when you are fully satisfied.
                </p>
</div>
</div>
</section>

<section className="py-20 lg:py-28">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-gray-900">Explore by Category</h2>
<p className="text-gray-500 mt-2">Find experts in over 1,400+ verified skill categories.</p>
</div>
<a className="text-brand-600 font-medium text-sm hover:text-brand-700 flex items-center gap-1 group" href="#">
                    View all categories 
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<a className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-300 hover:shadow-soft transition-all duration-200" href="#">
<div className="w-10 h-10 rounded-lg bg-gray-50 text-gray-600 flex items-center justify-center mb-4 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
<span className="iconify" data-icon="lucide:code-2" data-width="20"></span>
</div>
<h3 className="font-medium text-gray-900 group-hover:text-brand-600 transition-colors">Development &amp; IT</h3>
</a>
<a className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-300 hover:shadow-soft transition-all duration-200" href="#">
<div className="w-10 h-10 rounded-lg bg-gray-50 text-gray-600 flex items-center justify-center mb-4 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
<span className="iconify" data-icon="lucide:pen-tool" data-width="20"></span>
</div>
<h3 className="font-medium text-gray-900 group-hover:text-brand-600 transition-colors">Design &amp; Creative</h3>
</a>
<a className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-300 hover:shadow-soft transition-all duration-200" href="#">
<div className="w-10 h-10 rounded-lg bg-gray-50 text-gray-600 flex items-center justify-center mb-4 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
<span className="iconify" data-icon="lucide:megaphone" data-width="20"></span>
</div>
<h3 className="font-medium text-gray-900 group-hover:text-brand-600 transition-colors">Digital Marketing</h3>
</a>
<a className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-300 hover:shadow-soft transition-all duration-200" href="#">
<div className="w-10 h-10 rounded-lg bg-gray-50 text-gray-600 flex items-center justify-center mb-4 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
<span className="iconify" data-icon="lucide:languages" data-width="20"></span>
</div>
<h3 className="font-medium text-gray-900 group-hover:text-brand-600 transition-colors">Writing &amp; Trans</h3>
</a>
<a className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-300 hover:shadow-soft transition-all duration-200" href="#">
<div className="w-10 h-10 rounded-lg bg-gray-50 text-gray-600 flex items-center justify-center mb-4 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
<span className="iconify" data-icon="lucide:video" data-width="20"></span>
</div>
<h3 className="font-medium text-gray-900 group-hover:text-brand-600 transition-colors">Video &amp; Animation</h3>
</a>
<a className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-300 hover:shadow-soft transition-all duration-200" href="#">
<div className="w-10 h-10 rounded-lg bg-gray-50 text-gray-600 flex items-center justify-center mb-4 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
<span className="iconify" data-icon="lucide:music" data-width="20"></span>
</div>
<h3 className="font-medium text-gray-900 group-hover:text-brand-600 transition-colors">Music &amp; Audio</h3>
</a>
<a className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-300 hover:shadow-soft transition-all duration-200" href="#">
<div className="w-10 h-10 rounded-lg bg-gray-50 text-gray-600 flex items-center justify-center mb-4 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
<span className="iconify" data-icon="lucide:landmark" data-width="20"></span>
</div>
<h3 className="font-medium text-gray-900 group-hover:text-brand-600 transition-colors">Finance</h3>
</a>
<a className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-300 hover:shadow-soft transition-all duration-200" href="#">
<div className="w-10 h-10 rounded-lg bg-gray-50 text-gray-600 flex items-center justify-center mb-4 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
<span className="iconify" data-icon="lucide:compass" data-width="20"></span>
</div>
<h3 className="font-medium text-gray-900 group-hover:text-brand-600 transition-colors">Architecture</h3>
</a>
</div>
</div>
</section>

<section className="bg-slate-900 py-20 lg:py-24 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600 rounded-full blur-[120px] opacity-10"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="relative order-2 md:order-1">
<div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl relative">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
<span className="iconify text-brand-400" data-icon="lucide:wallet" data-width="24"></span>
</div>
<div>
<p className="text-slate-400 text-sm">Available Balance</p>
<p className="text-white text-2xl font-semibold">$2,450.00</p>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg border border-slate-700">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-600 flex items-center justify-center text-xs text-white">L</div>
<span className="text-slate-200 text-sm">Logo Design</span>
</div>
<span className="text-brand-400 text-sm font-medium">+$450.00</span>
</div>
<div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg border border-slate-700">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-600 flex items-center justify-center text-xs text-white">W</div>
<span className="text-slate-200 text-sm">Web Dev</span>
</div>
<span className="text-brand-400 text-sm font-medium">+$2,000.00</span>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-brand-400 text-xs font-medium mb-6">
                    For Talent
                </div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6">
                    Are you a freelancer? <br/>
<span className="text-slate-400">Get paid for what you do best.</span>
</h2>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<span className="iconify text-brand-500 mt-1" data-icon="lucide:check" data-width="18"></span>
<span className="text-slate-300">Work with respectful global clients</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-brand-500 mt-1" data-icon="lucide:check" data-width="18"></span>
<span className="text-slate-300">Secure, guaranteed on-time payments</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-brand-500 mt-1" data-icon="lucide:check" data-width="18"></span>
<span className="text-slate-300">Flexible projects, you control your rates</span>
</li>
</ul>
<button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-900 bg-white rounded-xl hover:bg-gray-100 transition-all">
                    Start Freelancing
                </button>
</div>
</div>
</section>

<section className="py-20 bg-gray-50 border-y border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
<div className="flex items-center gap-1 text-yellow-500 mb-6">
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
</div>
<blockquote className="text-lg text-gray-900 font-medium mb-6">
                        "WorkNest completely changed how we hire. The verification process meant I didn't have to sift through spam. We found our lead developer in 48 hours."
                    </blockquote>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-sm">JM</div>
<div>
<div className="font-semibold text-gray-900 text-sm">James Miller</div>
<div className="text-xs text-gray-500">CTO at TechFlow</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
<div className="flex items-center gap-1 text-yellow-500 mb-6">
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
</div>
<blockquote className="text-lg text-gray-900 font-medium mb-6">
                        "Finally, a marketplace that protects the freelancer. The escrow system ensures I get paid exactly when the job is done. No more chasing invoices."
                    </blockquote>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-sm">SK</div>
<div>
<div className="font-semibold text-gray-900 text-sm">Sarah Kim</div>
<div className="text-xs text-gray-500">Freelance Copywriter</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-gray-900 mb-12">Your safety comes first</h2>
<div className="grid sm:grid-cols-2 gap-8 text-left">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:lock" data-width="20"></span>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-1">Escrow Protection</h4>
<p className="text-sm text-gray-500">Your money is held safely until you approve the work. No surprises.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:user-check" data-width="20"></span>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-1">Identity Verified</h4>
<p className="text-sm text-gray-500">We verify IDs to ensure you are working with real people.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:scale" data-width="20"></span>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-1">Fair Dispute Resolution</h4>
<p className="text-sm text-gray-500">Our neutral team helps resolve issues quickly and fairly.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:life-buoy" data-width="20"></span>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-1">24/7 Support</h4>
<p className="text-sm text-gray-500">Real humans are available round the clock to assist you.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-50 border-t border-gray-100">
<div className="max-w-5xl mx-auto px-6">
<div className="flex justify-between items-center mb-8">
<h3 className="text-xl font-semibold text-gray-900">Latest opportunities for freelancers</h3>
<a className="text-brand-600 text-sm font-medium hover:underline" href="#">View all jobs</a>
</div>
<div className="flex flex-col gap-4">

<div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
<div className="flex justify-between items-start">
<div>
<h4 className="font-semibold text-gray-900 text-lg">Shopify Store Redesign &amp; Optimization</h4>
<div className="flex gap-3 mt-2 text-xs text-gray-500">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:map-pin" data-width="12"></span> Remote</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:clock" data-width="12"></span> Posted 2h ago</span>
</div>
</div>
<div className="text-right">
<span className="block font-semibold text-gray-900">$1.5k - $3k</span>
<span className="text-xs text-gray-400">Fixed Price</span>
</div>
</div>
<div className="mt-4 flex gap-2">
<span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Shopify</span>
<span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Liquid</span>
<span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">CSS</span>
</div>
<div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-2 text-xs text-green-600 font-medium">
<span className="iconify" data-icon="lucide:badge-check" data-width="14"></span> Payment Verified
                    </div>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
<div className="flex justify-between items-start">
<div>
<h4 className="font-semibold text-gray-900 text-lg">React Native Developer for Fintech App</h4>
<div className="flex gap-3 mt-2 text-xs text-gray-500">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:map-pin" data-width="12"></span> Remote</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:clock" data-width="12"></span> Posted 4h ago</span>
</div>
</div>
<div className="text-right">
<span className="block font-semibold text-gray-900">$45 - $60</span>
<span className="text-xs text-gray-400">Hourly</span>
</div>
</div>
<div className="mt-4 flex gap-2">
<span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">React Native</span>
<span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">iOS</span>
<span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Android</span>
</div>
<div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-2 text-xs text-green-600 font-medium">
<span className="iconify" data-icon="lucide:badge-check" data-width="14"></span> Payment Verified
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-6">Ready to work smarter?</h2>
<p className="text-lg text-gray-500 mb-10 max-w-lg mx-auto">Join the world's most trusted freelance marketplace today. No credit card required to sign up.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-brand-600 rounded-xl hover:bg-brand-700 focus:ring-4 focus:ring-brand-100 transition-all shadow-lg shadow-brand-500/30">
                    Hire Top Talent
                </button>
<button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 focus:ring-4 focus:ring-gray-100 transition-all">
                    Join as a Freelancer
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 bg-brand-600 rounded flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:layers" data-width="14"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-gray-900">WorkNest</span>
</a>
<p className="text-xs text-gray-500 mb-4">
                        The world's work marketplace. Efficient, secure, and reliable.
                    </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-gray-600" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="text-gray-400 hover:text-gray-600" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="18"></span></a>
<a className="text-gray-400 hover:text-gray-600" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
</div>
</div>
<div>
<h4 className="font-semibold text-gray-900 text-sm mb-4">For Clients</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">How to Hire</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Talent Marketplace</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Project Catalog</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Enterprise</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 text-sm mb-4">For Freelancers</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">How to Find Work</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Direct Contracts</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Find Freelance Jobs</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 text-sm mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">Help &amp; Support</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Success Stories</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Trust &amp; Safety</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 text-sm mb-4">Company</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
<p>© 2024 WorkNest Global Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-gray-600" href="#">Privacy</a>
<a className="hover:text-gray-600" href="#">Terms</a>
<a className="hover:text-gray-600" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
