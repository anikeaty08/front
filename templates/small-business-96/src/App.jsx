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
50: '#f0f4ff',
100: '#e0e7ff',
500: '#6366f1', // Indigo
600: '#4f46e5',
900: '#312e81',
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
      

<nav className="fixed top-0 z-50 w-full border-b border-gray-200 glass-panel">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:store" data-width="18"></span>
</div>
<span className="font-semibold text-lg tracking-tight text-slate-900">mainstreet.fm</span>
</div>

<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-gray-500 hover:text-slate-900 transition-colors" href="#resources">Resources</a>
<a className="text-sm font-medium text-gray-500 hover:text-slate-900 transition-colors" href="#deals">Deals</a>
<a className="text-sm font-medium text-gray-500 hover:text-slate-900 transition-colors" href="#directory">Directory</a>
<a className="text-sm font-medium text-gray-500 hover:text-slate-900 transition-colors" href="#tutorials">Tutorials</a>
</div>

<div className="flex items-center gap-3">
<button className="hidden md:block text-sm font-medium text-gray-500 hover:text-slate-900 transition-colors">Log in</button>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-medium py-2 px-4 rounded-full transition-all shadow-sm flex items-center gap-2">
<span>Join Hub</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</div>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 overflow-hidden relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
<div className="absolute top-20 left-20 w-64 h-64 bg-brand-100 rounded-full blur-3xl mix-blend-multiply filter"></div>
<div className="absolute top-40 right-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl mix-blend-multiply filter"></div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white shadow-sm mb-6 animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
<span className="text-xs font-medium text-gray-600">New Resources Added for 2024</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                The central operating system for <br className="hidden md:block"/>
<span className="text-gray-400">Main Street businesses.</span>
</h1>
<p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Access curated tools, exclusive software deals, and a connected business directory. Everything you need to grow your local footprint.
            </p>

<div className="max-w-lg mx-auto relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-brand-600 transition-colors">
<span className="iconify" data-icon="lucide:search" data-width="20"></span>
</div>
<input className="block w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all shadow-sm" placeholder="Search tools, tutorials, or businesses..." type="text"/>
<div className="absolute inset-y-0 right-2 flex items-center">
<kbd className="hidden sm:inline-flex items-center border border-gray-200 rounded px-2 text-xs font-sans font-medium text-gray-400">⌘K</kbd>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-gray-100" id="resources">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Resource Hub</h2>
<p className="text-sm text-gray-500 mt-2">Tools and templates curated for growth.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-900 transition-colors" href="#">
                    View all resources <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700 mb-4 shadow-sm group-hover:scale-105 transition-transform">
<span className="iconify" data-icon="lucide:file-text" data-width="20"></span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-1">Templates</h3>
<p className="text-xs text-gray-500 leading-relaxed mb-4">Contracts, invoices, and HR forms ready to download.</p>
<div className="flex items-center text-xs font-medium text-gray-900">
<span>45 Files</span>
</div>
</div>

<div className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700 mb-4 shadow-sm group-hover:scale-105 transition-transform">
<span className="iconify" data-icon="lucide:calculator" data-width="20"></span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-1">Finance Tools</h3>
<p className="text-xs text-gray-500 leading-relaxed mb-4">Calculators for payroll, margins, and taxes.</p>
<div className="flex items-center text-xs font-medium text-gray-900">
<span>12 Tools</span>
</div>
</div>

<div className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700 mb-4 shadow-sm group-hover:scale-105 transition-transform">
<span className="iconify" data-icon="lucide:megaphone" data-width="20"></span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-1">Marketing Kits</h3>
<p className="text-xs text-gray-500 leading-relaxed mb-4">Social media assets and email campaign structures.</p>
<div className="flex items-center text-xs font-medium text-gray-900">
<span>20+ Assets</span>
</div>
</div>

<div className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700 mb-4 shadow-sm group-hover:scale-105 transition-transform">
<span className="iconify" data-icon="lucide:video" data-width="20"></span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-1">Video Guides</h3>
<p className="text-xs text-gray-500 leading-relaxed mb-4">Step-by-step tutorials on using modern tools.</p>
<div className="flex items-center text-xs font-medium text-gray-900">
<span>New Uploads</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50" id="deals">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-10 text-center md:text-left">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Exclusive Deals</h2>
<p className="text-sm text-gray-500 mt-2">Software and service discounts for members.</p>
</div>

<div className="flex flex-wrap gap-2 mb-10">
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-slate-900 text-white border border-slate-900">All Deals</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-white text-gray-600 border border-gray-200 hover:border-gray-400 transition-colors">Marketing</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-white text-gray-600 border border-gray-200 hover:border-gray-400 transition-colors">Accounting</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-white text-gray-600 border border-gray-200 hover:border-gray-400 transition-colors">Legal</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-white text-gray-600 border border-gray-200 hover:border-gray-400 transition-colors">Productivity</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
<div className="h-32 bg-indigo-50 flex items-center justify-center border-b border-gray-100">

<span className="text-2xl font-bold tracking-tighter text-indigo-900">acme.crm</span>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded">30% OFF</span>
</div>
<h3 className="text-base font-semibold text-slate-900">Acme CRM Pro</h3>
<p className="text-xs text-gray-500 mt-2 mb-4 line-clamp-2">The best customer relationship management tool for small teams. Automate your sales pipeline.</p>
<div className="mt-auto">
<button className="w-full py-2 rounded-lg border border-gray-200 text-xs font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors">Claim Deal</button>
</div>
</div>
</div>

<div className="flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
<div className="h-32 bg-emerald-50 flex items-center justify-center border-b border-gray-100">
<span className="text-2xl font-bold tracking-tighter text-emerald-900">finstack</span>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">3 Months Free</span>
</div>
<h3 className="text-base font-semibold text-slate-900">Finstack Accounting</h3>
<p className="text-xs text-gray-500 mt-2 mb-4 line-clamp-2">Simplified bookkeeping for non-accountants. Connect your bank and track expenses effortlessly.</p>
<div className="mt-auto">
<button className="w-full py-2 rounded-lg border border-gray-200 text-xs font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors">Claim Deal</button>
</div>
</div>
</div>

<div className="flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
<div className="h-32 bg-blue-50 flex items-center justify-center border-b border-gray-100">
<span className="text-2xl font-bold tracking-tighter text-blue-900">mailflow</span>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Lifetime Deal</span>
</div>
<h3 className="text-base font-semibold text-slate-900">Mailflow Marketing</h3>
<p className="text-xs text-gray-500 mt-2 mb-4 line-clamp-2">Send beautiful newsletters. Drag-and-drop builder with powerful automation workflows.</p>
<div className="mt-auto">
<button className="w-full py-2 rounded-lg border border-gray-200 text-xs font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors">Claim Deal</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-gray-200" id="directory">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Business Directory</h2>
<p className="text-sm text-gray-500 mt-2">Find and connect with trusted local businesses.</p>
</div>

<div className="bg-gray-50 border border-gray-200 p-4 rounded-2xl max-w-4xl mx-auto mb-12 shadow-sm">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
<div className="md:col-span-5 relative">
<span className="absolute left-3 top-3 text-gray-400">
<span className="iconify" data-icon="lucide:search" data-width="16"></span>
</span>
<input className="w-full pl-9 pr-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500" placeholder="Service or Business Name" type="text"/>
</div>
<div className="md:col-span-4 relative">
<span className="absolute left-3 top-3 text-gray-400">
<span className="iconify" data-icon="lucide:map-pin" data-width="16"></span>
</span>
<select className="w-full pl-9 pr-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 appearance-none">
<option>All Locations</option>
<option>New York, NY</option>
<option>Austin, TX</option>
<option>San Francisco, CA</option>
</select>
</div>
<div className="md:col-span-3">
<button className="w-full h-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-lg transition-colors shadow-sm">
                            Search
                        </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors">
<div className="w-full sm:w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
<span className="iconify text-gray-400" data-icon="lucide:building-2" data-width="24"></span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-semibold text-slate-900">Strive Digital Agency</h4>
<p className="text-xs text-gray-500">Marketing • Austin, TX</p>
</div>
<div className="flex items-center gap-1 text-amber-400">
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="text-xs font-medium text-gray-700">4.9</span>
</div>
</div>
<p className="text-xs text-gray-500 mt-2 line-clamp-2">Full-service digital marketing agency specializing in local SEO and PPC for small businesses.</p>
<div className="mt-3 flex gap-2">
<button className="text-xs px-3 py-1.5 rounded-md bg-gray-50 text-gray-700 border border-gray-200 font-medium hover:bg-white hover:border-gray-400 transition-colors">View Profile</button>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors">
<div className="w-full sm:w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
<span className="iconify text-gray-400" data-icon="lucide:briefcase" data-width="24"></span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-semibold text-slate-900">Miller &amp; Associates</h4>
<p className="text-xs text-gray-500">Legal • New York, NY</p>
</div>
<div className="flex items-center gap-1 text-amber-400">
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="text-xs font-medium text-gray-700">5.0</span>
</div>
</div>
<p className="text-xs text-gray-500 mt-2 line-clamp-2">Corporate law firm assisting startups with incorporation, IP, and contracts.</p>
<div className="mt-3 flex gap-2">
<button className="text-xs px-3 py-1.5 rounded-md bg-gray-50 text-gray-700 border border-gray-200 font-medium hover:bg-white hover:border-gray-400 transition-colors">View Profile</button>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center">
<button className="text-sm font-medium text-gray-500 hover:text-slate-900 transition-colors">Load more businesses</button>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white" id="tutorials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800 mb-6">
<span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-xs font-medium text-gray-300">Featured Tutorial</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">Mastering Local SEO</h2>
<p className="text-gray-400 mb-8 leading-relaxed">
                        In this 15-minute breakdown, we explore exactly how to optimize your Google Business Profile to rank higher in local search results. Perfect for retail and service-based businesses.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 text-brand-500">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="18"></span>
</div>
<div>
<h4 className="text-sm font-medium text-white">Keyword Research</h4>
<p className="text-xs text-gray-400 mt-1">Finding what your customers are searching for.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 text-brand-500">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="18"></span>
</div>
<div>
<h4 className="text-sm font-medium text-white">Profile Optimization</h4>
<p className="text-xs text-gray-400 mt-1">Filling out every section of your GMB profile.</p>
</div>
</div>
</div>
<div className="mt-10">
<button className="bg-white text-slate-900 hover:bg-gray-100 py-3 px-6 rounded-lg text-sm font-medium transition-colors">
                            View All Tutorials
                        </button>
</div>
</div>

<div className="relative group cursor-pointer">
<div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative bg-slate-800 rounded-xl overflow-hidden aspect-video border border-slate-700 flex items-center justify-center">
<img alt="Video Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all z-10">
<span className="iconify text-white ml-1" data-icon="lucide:play" data-width="24" style={{fill: 'white'}}></span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-200 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:store" data-width="14"></span>
</div>
<span className="font-semibold text-sm tracking-tight text-slate-900">mainstreet.fm</span>
</div>
<p className="text-xs text-gray-500 mb-6 max-w-xs">
                        Empowering small businesses with the tools, knowledge, and connections they need to thrive in a digital world.
                    </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-slate-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="text-gray-400 hover:text-slate-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="18"></span></a>
<a className="text-gray-400 hover:text-slate-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
</div>
</div>
<div>
<h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Hub</h3>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-slate-900 transition-colors" href="#">Resources</a></li>
<li><a className="text-xs text-gray-500 hover:text-slate-900 transition-colors" href="#">Deals</a></li>
<li><a className="text-xs text-gray-500 hover:text-slate-900 transition-colors" href="#">Tutorials</a></li>
<li><a className="text-xs text-gray-500 hover:text-slate-900 transition-colors" href="#">Submit Tool</a></li>
</ul>
</div>
<div>
<h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Directory</h3>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-slate-900 transition-colors" href="#">Browse All</a></li>
<li><a className="text-xs text-gray-500 hover:text-slate-900 transition-colors" href="#">Add Business</a></li>
<li><a className="text-xs text-gray-500 hover:text-slate-900 transition-colors" href="#">Success Stories</a></li>
<li><a className="text-xs text-gray-500 hover:text-slate-900 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Company</h3>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-slate-900 transition-colors" href="#">About</a></li>
<li><a className="text-xs text-gray-500 hover:text-slate-900 transition-colors" href="#">Contact</a></li>
<li><a className="text-xs text-gray-500 hover:text-slate-900 transition-colors" href="#">Privacy</a></li>
<li><a className="text-xs text-gray-500 hover:text-slate-900 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">© 2024 Mainstreet.fm. All rights reserved.</p>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 border border-gray-200">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-gray-600">All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
