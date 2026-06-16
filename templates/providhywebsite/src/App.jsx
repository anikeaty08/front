import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-lg border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-600/20">
<span className="iconify" data-icon="lucide:hexagon" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Providhy ERP</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Home</a>
<a className="hover:text-slate-900 transition-colors" href="#">Resources</a>
<a className="hover:text-slate-900 transition-colors" href="#products">Products</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Contact Us</a>
<a className="hover:text-slate-900 transition-colors" href="#">Agents</a>
</div>

<div className="hidden md:flex items-center gap-3">
<button className="text-sm font-medium text-slate-600 border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors">Log in</button>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow-md">
                    Get Started
                </button>
</div>

<button className="md:hidden text-slate-600" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>

<div className="hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl md:hidden" id="mobile-menu">
<a className="text-sm font-medium text-slate-600" href="#">Home</a>
<a className="text-sm font-medium text-slate-600" href="#products">Products</a>
<a className="text-sm font-medium text-slate-600" href="#contact">Contact Us</a>
<div className="h-px bg-slate-100 w-full my-2"></div>
<button className="text-sm font-medium text-slate-600 w-full text-left">Log in</button>
<button className="bg-indigo-600 text-white text-sm font-medium px-4 py-3 rounded-lg w-full">Get Started</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-indigo-50/80 rounded-full blur-3xl opacity-60 animate-pulse"></div>
<div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl opacity-60"></div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center reveal from-bottom">
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Focus on Business Growth, <br className="hidden md:block"/> Let Providhy Simplify the Rest!
            </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Running a business is hard enough—managing it shouldn't be. With Providhy ERP, every aspect of your operations is seamlessly integrated into one powerful dashboard. Backed by 365 days dedicated support.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20">
                    Get Started
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</section>

<section className="px-4 md:px-6 pb-24 reveal from-bottom delay-100">
<div className="max-w-6xl mx-auto rounded-3xl bg-slate-900 p-2 shadow-2xl ring-1 ring-slate-900/5">
<div className="rounded-2xl overflow-hidden bg-white aspect-[16/9] md:aspect-[2/1] relative group border border-slate-200">

<div className="absolute inset-0 bg-slate-50 flex">

<div className="w-16 md:w-64 border-r border-slate-200 bg-white p-4 hidden md:flex flex-col gap-6">
<div className="h-8 w-8 bg-indigo-600 rounded-md"></div>
<div className="space-y-3 pt-4">
<div className="h-8 w-full bg-indigo-50 text-indigo-600 rounded-md flex items-center px-3 text-xs font-medium gap-2"><span className="w-2 h-2 rounded-full bg-indigo-600"></span>Dashboard</div>
<div className="h-8 w-full hover:bg-slate-50 rounded-md flex items-center px-3 text-slate-500 text-xs font-medium">Sales</div>
<div className="h-8 w-full hover:bg-slate-50 rounded-md flex items-center px-3 text-slate-500 text-xs font-medium">Inventory</div>
<div className="h-8 w-full hover:bg-slate-50 rounded-md flex items-center px-3 text-slate-500 text-xs font-medium">Accounting</div>
</div>
</div>

<div className="flex-1 p-6 flex flex-col gap-6">
<div className="flex justify-between items-center">
<div className="h-6 w-32 bg-slate-200 rounded"></div>
<div className="h-8 w-24 bg-indigo-600 rounded-lg"></div>
</div>
<div className="grid grid-cols-4 gap-4">
<div className="h-24 bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between">
<div className="w-8 h-8 rounded-full bg-green-100"></div>
<div className="w-20 h-4 bg-slate-100 rounded"></div>
</div>
<div className="h-24 bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between">
<div className="w-8 h-8 rounded-full bg-blue-100"></div>
<div className="w-20 h-4 bg-slate-100 rounded"></div>
</div>
<div className="h-24 bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between">
<div className="w-8 h-8 rounded-full bg-purple-100"></div>
<div className="w-20 h-4 bg-slate-100 rounded"></div>
</div>
<div className="h-24 bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between">
<div className="w-8 h-8 rounded-full bg-orange-100"></div>
<div className="w-20 h-4 bg-slate-100 rounded"></div>
</div>
</div>
<div className="flex-1 bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-end justify-between px-8 pb-4 gap-4">

<div className="w-full bg-indigo-100 rounded-t h-[30%]"></div>
<div className="w-full bg-indigo-200 rounded-t h-[50%]"></div>
<div className="w-full bg-indigo-300 rounded-t h-[70%]"></div>
<div className="w-full bg-indigo-500 rounded-t h-[45%]"></div>
<div className="w-full bg-indigo-600 rounded-t h-[90%]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-3xl mx-auto px-6 text-center reveal from-bottom">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Seamless, Reliable and Value Driven</h2>
<p className="text-lg text-slate-500 leading-relaxed">
                Providhy ERP adapts seamlessly to your business needs, eliminating limits on transactions, server maintenance, and data handling. No costly IT infrastructure needed.
            </p>
</div>
</section>

<section className="py-12 border-y border-slate-100 bg-slate-50 overflow-hidden">
<div className="text-center mb-8 reveal from-bottom">
<p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">We are Associated with</p>
</div>
<div className="relative w-full overflow-hidden mask-linear-fade">
<div className="flex w-[200%] animate-scroll hover:[animation-play-state:paused] items-center">

<div className="flex justify-around w-1/2 min-w-max gap-16 px-6 items-center">
<span className="text-xl font-bold text-slate-400 hover:text-indigo-600 transition-colors cursor-default">f1Soft</span>
<span className="text-xl font-bold text-slate-400 hover:text-slate-800 transition-colors cursor-default flex items-center gap-2"><div className="w-6 h-6 bg-current rounded-full opacity-50"></div> Partner 1</span>
<span className="text-xl font-bold text-slate-400 hover:text-slate-800 transition-colors cursor-default flex items-center gap-2"><div className="w-6 h-6 bg-current rounded opacity-50"></div> Partner 2</span>
<span className="text-xl font-bold text-slate-400 hover:text-slate-800 transition-colors cursor-default flex items-center gap-2"><div className="w-6 h-6 bg-current rotate-45 opacity-50"></div> Partner 3</span>
<span className="text-xl font-bold text-slate-400 hover:text-slate-800 transition-colors cursor-default flex items-center gap-2"><div className="w-6 h-6 bg-current rounded-full opacity-50"></div> Partner 4</span>
</div>

<div className="flex justify-around w-1/2 min-w-max gap-16 px-6 items-center">
<span className="text-xl font-bold text-slate-400 hover:text-indigo-600 transition-colors cursor-default">f1Soft</span>
<span className="text-xl font-bold text-slate-400 hover:text-slate-800 transition-colors cursor-default flex items-center gap-2"><div className="w-6 h-6 bg-current rounded-full opacity-50"></div> Partner 1</span>
<span className="text-xl font-bold text-slate-400 hover:text-slate-800 transition-colors cursor-default flex items-center gap-2"><div className="w-6 h-6 bg-current rounded opacity-50"></div> Partner 2</span>
<span className="text-xl font-bold text-slate-400 hover:text-slate-800 transition-colors cursor-default flex items-center gap-2"><div className="w-6 h-6 bg-current rotate-45 opacity-50"></div> Partner 3</span>
<span className="text-xl font-bold text-slate-400 hover:text-slate-800 transition-colors cursor-default flex items-center gap-2"><div className="w-6 h-6 bg-current rounded-full opacity-50"></div> Partner 4</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal from-bottom">
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-4">Powerful Modules</h2>
<p className="text-slate-500 max-w-xl mx-auto text-lg">Everything integrated in one place.</p>
</div>

<div className="sticky-card bg-white rounded-3xl border border-slate-200 overflow-hidden mb-8 grid md:grid-cols-2 gap-8 items-center h-[500px] md:h-[550px] z-10 top-24 shadow-2xl reveal from-left">
<div className="h-full bg-blue-50/50 border-r border-slate-100 flex items-center justify-center p-8 order-2 md:order-1">

<div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-slate-200 p-6 space-y-4">
<div className="flex justify-between items-center mb-4">
<span className="text-sm font-semibold text-blue-600">Inventory Status</span>
<div className="h-2 w-12 bg-slate-200 rounded"></div>
</div>
<div className="space-y-3">
<div className="h-10 w-full bg-slate-50 rounded border border-slate-100 flex items-center px-3 justify-between">
<div className="w-8 h-8 bg-blue-100 rounded"></div>
<div className="w-24 h-2 bg-slate-200 rounded"></div>
</div>
<div className="h-10 w-full bg-slate-50 rounded border border-slate-100 flex items-center px-3 justify-between">
<div className="w-8 h-8 bg-orange-100 rounded"></div>
<div className="w-24 h-2 bg-slate-200 rounded"></div>
</div>
</div>
</div>
</div>
<div className="p-8 md:p-16 flex flex-col justify-center order-1 md:order-2">
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
<span className="iconify" data-icon="lucide:boxes" data-width="24"></span>
</div>
<h3 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">Inventory Management</h3>
<p className="text-slate-500 text-lg leading-relaxed">Make inventory chaos clear. Categorize products, customize variants, track units, and launch discount campaigns effortlessly.</p>
</div>
</div>

<div className="sticky-card bg-white rounded-3xl border border-slate-200 overflow-hidden mb-8 grid md:grid-cols-2 gap-8 items-center h-[500px] md:h-[550px] z-20 top-28 shadow-2xl reveal from-right">
<div className="h-full bg-emerald-50/50 border-r border-slate-100 flex items-center justify-center p-8 order-2 md:order-1">
<div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-slate-200 p-6 flex flex-col items-center text-center">
<div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
<span className="iconify" data-icon="lucide:truck" data-width="32"></span>
</div>
<div className="text-lg font-medium text-slate-800">PO #2024-001</div>
<div className="text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mt-2">Received</div>
</div>
</div>
<div className="p-8 md:p-16 flex flex-col justify-center order-1 md:order-2">
<div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-6">
<span className="iconify" data-icon="lucide:shopping-cart" data-width="24"></span>
</div>
<h3 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">Purchase</h3>
<p className="text-slate-500 text-lg leading-relaxed">Say goodbye to complex purchasing. Fully optimized procurement with complete visibility and control over every transaction.</p>
</div>
</div>

<div className="sticky-card bg-white rounded-3xl border border-slate-200 overflow-hidden mb-8 grid md:grid-cols-2 gap-8 items-center h-[500px] md:h-[550px] z-30 top-32 shadow-2xl reveal from-left">
<div className="h-full bg-indigo-50/50 border-r border-slate-100 flex items-center justify-center p-8 order-2 md:order-1">
<div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-slate-200 p-6 space-y-4">
<div className="flex justify-between border-b border-slate-100 pb-2">
<div className="h-4 w-16 bg-slate-200 rounded"></div>
<div className="h-4 w-16 bg-slate-200 rounded"></div>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-indigo-100 rounded"></div>
<div className="h-3 w-20 bg-slate-100 rounded"></div>
</div>
<div className="h-3 w-10 bg-slate-100 rounded"></div>
</div>
<div className="mt-4 pt-4 border-t border-slate-100 flex justify-between">
<span className="text-xs font-bold text-slate-900">TOTAL</span>
<span className="text-xs font-bold text-indigo-600">Rs 15,000</span>
</div>
</div>
</div>
<div className="p-8 md:p-16 flex flex-col justify-center order-1 md:order-2">
<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
<span className="iconify" data-icon="lucide:percent" data-width="24"></span>
</div>
<h3 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">Sales</h3>
<p className="text-slate-500 text-lg leading-relaxed">Streamline your entire sales process. From initial quotation to final invoicing, ensuring efficient, accurate integration.</p>
</div>
</div>

<div className="sticky-card bg-white rounded-3xl border border-slate-200 overflow-hidden mb-8 grid md:grid-cols-2 gap-8 items-center h-[500px] md:h-[550px] z-40 top-36 shadow-2xl reveal from-right">
<div className="h-full bg-orange-50/50 border-r border-slate-100 flex items-center justify-center p-8 order-2 md:order-1">
<div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-slate-200 p-6">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:calculator"></span>
</div>
<div>
<div className="text-sm font-bold text-slate-900">Tax Report</div>
<div className="text-xs text-slate-500">VAT &amp; Annex 5</div>
</div>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-slate-900"></div>
</div>
<div className="flex justify-between text-xs text-slate-500">
<span>Computed</span>
<span>75%</span>
</div>
</div>
</div>
</div>
<div className="p-8 md:p-16 flex flex-col justify-center order-1 md:order-2">
<div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-6">
<span className="iconify" data-icon="lucide:banknote" data-width="24"></span>
</div>
<h3 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">Accounting</h3>
<p className="text-slate-500 text-lg leading-relaxed">Effortlessly manage finances and compliance. Comprehensive suite of accounting tools including tax reports.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-12 text-center reveal from-bottom">Deep Dive Insights</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[180px]">

<div className="md:col-span-2 md:row-span-2 rounded-2xl bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-indigo-300 transition-colors reveal from-left">
<div>
<div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
<span className="iconify" data-icon="lucide:infinity" data-width="24"></span>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2">Unlimited Transactions</h3>
<p className="text-slate-500">No caps on your growth. Process as many sales, purchases, and inventory movements as you need without extra cost.</p>
</div>
<div className="mt-8 flex gap-2 items-end h-24">
<div className="w-1/5 bg-slate-100 h-[40%] rounded-t"></div>
<div className="w-1/5 bg-slate-100 h-[60%] rounded-t"></div>
<div className="w-1/5 bg-slate-100 h-[50%] rounded-t"></div>
<div className="w-1/5 bg-slate-100 h-[80%] rounded-t"></div>
<div className="w-1/5 bg-indigo-600 h-[100%] rounded-t"></div>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 rounded-2xl bg-slate-900 text-white p-6 flex items-center gap-6 reveal from-right">
<div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
<span className="iconify" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<div>
<h4 className="text-lg font-medium mb-1">Data Security &amp; Recovery</h4>
<p className="text-slate-400 text-sm">Automated backups and bank-grade encryption.</p>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between reveal from-bottom delay-100">
<span className="iconify text-orange-500" data-icon="lucide:file-text" data-width="32"></span>
<div>
<h4 className="text-lg font-medium text-slate-900">30+ Reports</h4>
<p className="text-xs text-slate-500 mt-1">VAT, Annex 5 &amp; more</p>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 rounded-2xl bg-indigo-600 text-white p-6 flex flex-col justify-between reveal from-bottom delay-100">
<span className="iconify" data-icon="lucide:headphones" data-width="32"></span>
<div>
<h4 className="text-lg font-medium">24/7 Support</h4>
<p className="text-xs text-indigo-200 mt-1">Service anytime</p>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 rounded-2xl bg-white border border-slate-200 p-6 flex items-center justify-between reveal from-right delay-200">
<div>
<h4 className="text-lg font-medium text-slate-900">PWA Mobile Access</h4>
<p className="text-slate-500 text-sm">Access your ERP from any device, anywhere.</p>
</div>
<div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
<span className="iconify" data-icon="lucide:smartphone" data-width="24"></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white overflow-hidden relative">
<div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] mx-auto flex items-center justify-center reveal from-bottom">

<svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none" viewbox="0 0 600 600">
<line className="animate-dash" stroke="#CBD5E1" strokeWidth="2" x1="300" x2="300" y1="300" y2="100"></line>
<line className="animate-dash" stroke="#CBD5E1" strokeWidth="2" x1="300" x2="500" y1="300" y2="300"></line>
<line className="animate-dash" stroke="#CBD5E1" strokeWidth="2" x1="300" x2="300" y1="300" y2="500"></line>
<line className="animate-dash" stroke="#CBD5E1" strokeWidth="2" x1="300" x2="100" y1="300" y2="300"></line>
</svg>

<div className="absolute z-20 w-28 h-28 md:w-36 md:h-36 bg-white rounded-full shadow-2xl flex items-center justify-center border border-slate-100 flex-col">
<div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white mb-2 shadow-lg">
<span className="iconify" data-icon="lucide:hexagon" data-width="24"></span>
</div>
<span className="text-xs font-bold text-slate-800 tracking-tight">Providhy</span>
</div>

<div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center gap-1 w-24">
<span className="iconify text-emerald-500" data-icon="lucide:file-spreadsheet" data-width="24"></span>
<span className="text-xs font-semibold text-slate-700">Tax</span>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center gap-1 w-24">
<span className="iconify text-purple-500" data-icon="lucide:users" data-width="24"></span>
<span className="text-xs font-semibold text-slate-700">HR</span>
</div>
<div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center gap-1 w-24">
<span className="iconify text-blue-500" data-icon="lucide:contact-2" data-width="24"></span>
<span className="text-xs font-semibold text-slate-700">CRM</span>
</div>
<div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center gap-1 w-24">
<span className="iconify text-orange-500" data-icon="lucide:briefcase" data-width="24"></span>
<span className="text-xs font-semibold text-slate-700">Assets</span>
</div>
<div className="absolute inset-0 rounded-full border border-slate-200/50 scale-75 animate-pulse"></div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 mb-12 reveal from-left">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">What our partners say</h2>
</div>
<div className="flex gap-6 overflow-x-auto no-scrollbar px-6 pb-8 snap-x snap-mandatory reveal from-right delay-100">

<div className="min-w-[90%] md:min-w-[500px] bg-white rounded-2xl p-8 border border-slate-200 shadow-sm snap-center flex flex-col md:flex-row gap-6 items-start">
<div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
<img alt="Dipendra" className="w-full h-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/150?u=dipendra"/>
</div>
<div>
<p className="text-slate-600 leading-relaxed mb-4 text-lg">"Their step-by-step approach was impressive. We saw quick results... Highly recommended!"</p>
<div>
<div className="text-slate-900 font-medium">Dipendra Bazgain</div>
<div className="text-slate-400 text-sm">Agro Machinery Trade Link</div>
</div>
</div>
</div>

<div className="min-w-[90%] md:min-w-[500px] bg-white rounded-2xl p-8 border border-slate-200 shadow-sm snap-center flex flex-col md:flex-row gap-6 items-start">
<div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
<img alt="Bedant" className="w-full h-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/150?u=bedant"/>
</div>
<div>
<p className="text-slate-600 leading-relaxed mb-4 text-lg">"Providhy transformed the way I manage my business. I can approve invoices and track inventory on the go."</p>
<div>
<div className="text-slate-900 font-medium">Bedant Thakuri</div>
<div className="text-slate-400 text-sm">Sagarmatha Auto Parts</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal from-bottom">
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Smart Pricing, Maximum Value</h2>

<div className="inline-flex bg-slate-100 rounded-full p-1 relative">
<div className="w-24 py-2 rounded-full text-sm font-medium text-slate-900 bg-white shadow-sm z-10 text-center">Monthly</div>
<div className="w-24 py-2 rounded-full text-sm font-medium text-slate-500 z-10 text-center cursor-not-allowed">Annually</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 transition-colors reveal from-left">
<h3 className="text-lg font-medium text-slate-900 mb-2">Trial Package</h3>
<div className="text-4xl font-semibold text-slate-900 mb-6">Rs 0</div>
<p className="text-slate-500 text-sm mb-6">Experience the power of Providhy risk-free.</p>
<ul className="space-y-4 mb-8 text-sm text-slate-600">
<li className="flex gap-3"><span className="iconify text-indigo-500" data-icon="lucide:check"></span> Free Demo Sessions</li>
<li className="flex gap-3"><span className="iconify text-indigo-500" data-icon="lucide:check"></span> Regular Updates</li>
<li className="flex gap-3"><span className="iconify text-indigo-500" data-icon="lucide:check"></span> 30 Reports included</li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-200 text-slate-900 font-medium hover:bg-slate-50 transition-colors">Start Free Trial</button>
</div>

<div className="bg-slate-900 rounded-3xl p-8 border border-slate-900 shadow-xl relative md:scale-105 z-10 reveal from-right">
<div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
<h3 className="text-lg font-medium text-white mb-2">Providhy De-Lite</h3>
<div className="text-4xl font-semibold text-white mb-6">Rs 499<span className="text-lg font-normal text-slate-400">/mo</span></div>
<p className="text-slate-300 text-sm mb-6">Perfect for growing businesses.</p>
<ul className="space-y-4 mb-8 text-sm text-slate-300">
<li className="flex gap-3"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> Access Master/Inventory/Sales</li>
<li className="flex gap-3"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> 24/7 Priority Support</li>
<li className="flex gap-3"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> Unlimited Uploads</li>
<li className="flex gap-3"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> Multi-user Access</li>
</ul>
<button className="w-full py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-slate-100 transition-colors">Get Started</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="mb-16 reveal from-bottom">
<h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Frequently Asked Questions</h3>
<div className="space-y-4">
<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden" open="">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-slate-900 select-none">
                            What types of businesses can benefit?
                            <span className="transform transition-transform group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed text-sm">
                            Trading, SMEs, service-based, and B2B companies find Providhy particularly effective due to our modular design and scalable infrastructure.
                        </div>
</details>
<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-slate-900 select-none">
                            Is support included?
                            <span className="transform transition-transform group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed text-sm">
                            Yes, all plans include our 365 days dedicated support to ensure your operations never stop.
                        </div>
</details>
</div>
</div>
<div className="bg-white rounded-3xl p-10 border border-slate-200 text-center shadow-lg reveal from-bottom">
<h2 className="text-2xl font-semibold text-slate-900 mb-4">Have questions?</h2>
<p className="text-slate-500 mb-8">Reach out to us via email or phone for a personalized consultation.</p>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-lg shadow-indigo-600/20">Contact Sales</button>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6 text-white">
<span className="iconify" data-icon="lucide:hexagon" data-width="24"></span>
<span className="text-lg font-semibold tracking-tight">Providhy ERP</span>
</div>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Product</h4>
<a className="text-sm hover:text-white transition-colors" href="#products">Features</a>
<a className="text-sm hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-sm hover:text-white transition-colors" href="#">Demo</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Company</h4>
<a className="text-sm hover:text-white transition-colors" href="#">About Us</a>
<a className="text-sm hover:text-white transition-colors" href="#">Careers</a>
<a className="text-sm hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Contact</h4>
<p className="text-sm text-slate-400">+977 9851221467</p>
<p className="text-sm text-slate-400">info@vidhypro.com</p>
<p className="text-sm text-slate-400">Pulchowk, Lalitpur</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
<div>© 2025 Providhy ERP | Powered by Vidhypro Crafts Pvt Ltd.</div>
<div className="flex gap-4">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</footer>


    </>
  );
}
