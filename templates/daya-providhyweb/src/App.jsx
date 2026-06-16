import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Spotlight Effect
      const spotlight = document.getElementById('spotlight');
      document.addEventListener('mousemove', (e) => {
          spotlight.style.setProperty('--x', `${e.clientX}px`);
          spotlight.style.setProperty('--y', `${e.clientY}px`);
      });

      // Intersection Observer for Scroll Animations
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
                  // Optional: stop observing once revealed
                  // observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      // Observe Fade Up elements
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

      // Observe Tilt Container
      document.querySelectorAll('.tilt-target').forEach(el => observer.observe(el));
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full min-h-screen overflow-hidden flex flex-col mb-12" id="hero-container">

<div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-0 -left-4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob">
</div>
<div className="absolute top-0 -right-4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000">
</div>
<div className="absolute -bottom-32 left-20 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000">
</div>
</div>

<div className="absolute inset-0 pointer-events-none fixed" id="spotlight"></div>


<div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center w-full pt-6 px-4 font-sans">

<nav className="relative w-full max-w-5xl bg-white/80 backdrop-blur-lg rounded-full shadow-2xl shadow-[#1D4F50]/5 border border-[#1D4F50]/10 px-3 py-2.5 flex items-center justify-between transition-all duration-300 z-50">

<a className="flex items-center pl-3 group" href="#">
<img alt="Providhy Logo" className="h-6 w-auto object-contain group-hover:scale-105 transition-transform" src="https://providhy.com/images/logo.svg"/>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-[#31BCBC] transition-colors relative group" href="#features">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#31BCBC] transition-all group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-slate-500 hover:text-[#31BCBC] transition-colors relative group" href="#pricing">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#31BCBC] transition-all group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-slate-500 hover:text-[#31BCBC] transition-colors relative group" href="#resources">
            Resources
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#31BCBC] transition-all group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-slate-500 hover:text-[#31BCBC] transition-colors relative group" href="#contact">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#31BCBC] transition-all group-hover:w-full"></span>
</a>
</div>

<div className="hidden md:flex items-center gap-5 pr-1">
<a className="text-sm font-semibold text-[#1D4F50] hover:text-[#31BCBC] transition-colors" href="#">
            Log in
          </a>

<a className="group relative inline-flex items-center justify-center p-[2px] overflow-hidden rounded-full shadow-md shadow-[#31BCBC]/20 hover:shadow-lg hover:shadow-[#31BCBC]/30 transition-all" href="#">
<span className="absolute inset-0 bg-gradient-to-r from-[#1D4F50] via-[#31BCBC] to-[#1D4F50] bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]"></span>
<span className="relative flex items-center gap-2 rounded-full bg-white px-6 py-2 transition-all duration-300 group-hover:bg-opacity-95">
<span className="text-sm font-bold text-[#1D4F50] group-hover:text-[#31BCBC] transition-colors">Get Started</span>
</span>
</a>
</div>

<div className="md:hidden pr-2">
<button className="p-2 text-[#1D4F50] hover:bg-[#31BCBC]/10 rounded-full transition-colors" id="mobile-menu-btn">
<span className="iconify w-6 h-6" data-icon="lucide:menu"></span>
</button>
</div>
</nav>

<div className="hidden absolute top-[calc(100%+10px)] w-[calc(100%-2rem)] max-w-5xl bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-[#1D4F50]/10 border border-[#1D4F50]/10 p-6 flex-col gap-6 transform origin-top transition-all duration-300 z-40" id="mobile-menu">

<div className="flex flex-col gap-4 text-center">
<a className="text-lg font-medium text-[#1D4F50] hover:text-[#31BCBC]" href="#features">Features</a>
<a className="text-lg font-medium text-[#1D4F50] hover:text-[#31BCBC]" href="#pricing">Pricing</a>
<a className="text-lg font-medium text-[#1D4F50] hover:text-[#31BCBC]" href="#resources">Resources</a>
<a className="text-lg font-medium text-[#1D4F50] hover:text-[#31BCBC]" href="#contact">Contact</a>
</div>
<hr className="border-[#1D4F50]/10"/>

<div className="flex flex-col gap-4">
<a className="w-full py-3 text-center text-sm font-semibold text-[#1D4F50] hover:text-[#31BCBC] border border-[#1D4F50]/20 rounded-xl" href="#">
            Log in
          </a>
<a className="w-full py-3 text-center text-sm font-bold text-white bg-gradient-to-r from-[#1D4F50] to-[#31BCBC] rounded-xl shadow-lg shadow-[#31BCBC]/20" href="#">
            Get Started
          </a>
</div>
</div>
</div>

<main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 pt-32 pb-12 text-center max-w-7xl mx-auto w-full">

<div className="reveal active inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#1D4F50]/20 shadow-sm text-xs font-medium text-[#1D4F50] mb-8 hover:border-[#31BCBC] transition-colors cursor-pointer group">
<span className="px-1.5 py-0.5 rounded bg-[#31BCBC]/10 text-[#1D4F50] text-[10px] font-bold tracking-wide uppercase group-hover:bg-[#31BCBC] group-hover:text-white transition-colors">
      New
    </span>
<span>Trusted by Nepali Businesses</span>
<span className="iconify text-[#31BCBC] group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="12"></span>
</div>

<h1 className="reveal active delay-100 text-5xl md:text-7xl font-bold tracking-tight text-[#1D4F50] mb-6 max-w-4xl leading-[1.1]">
        Run Your Business <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4F50] to-[#31BCBC]">
      Smarter, Not Harder.
    </span>
</h1>

<p className="reveal active delay-200 text-lg text-[#1D4F50]/70 max-w-2xl mb-10 leading-relaxed font-medium">
        Nepal's most intuitive cloud ERP. Manage inventory, billing, and accounting; all in one place.
      </p>

<div className="reveal active delay-300 flex flex-col sm:flex-row items-center gap-4">

<button className="px-8 py-3 rounded-full bg-[#1D4F50] text-white font-semibold text-sm hover:bg-[#31BCBC] transition-all duration-300 shadow-xl shadow-[#1D4F50]/20 hover:shadow-[#31BCBC]/30 flex items-center gap-2 transform hover:-translate-y-0.5">
      Start Free Trial
      <span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</button>

<button className="px-8 py-3 rounded-full bg-white border border-[#1D4F50]/20 text-[#1D4F50] font-semibold text-sm hover:bg-[#31BCBC]/5 hover:border-[#31BCBC]/50 transition-all flex items-center gap-2">
<span className="iconify text-[#31BCBC]" data-icon="lucide:play-circle" data-width="16"></span>
      Watch Demo
    </button>
</div>
</main>
</div>

<div className="relative z-10 px-6 mt-12 tilt-container">
<div className="tilt-target max-w-6xl mx-auto">
<div className="bg-slate-900 rounded-2xl md:rounded-3xl shadow-2xl shadow-slate-900/30 overflow-hidden border border-slate-200">

<div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-b from-gray-100 to-gray-200 border-b border-gray-300">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] shadow-sm"></div>
<div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] shadow-sm"></div>
<div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] shadow-sm"></div>
</div>
<div className="flex-1 flex justify-center">
<div className="flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-sm rounded-lg text-xs text-gray-600 border border-gray-200 shadow-sm">
<span className="iconify text-gray-400" data-icon="lucide:lock"></span>
              app.providhy.com
            </div>
</div>

<div className="flex items-center gap-1 opacity-0 pointer-events-none">
<div className="w-3 h-3"></div>
<div className="w-3 h-3"></div>
<div className="w-3 h-3"></div>
</div>
</div>

<div className="aspect-[16/9] bg-slate-900 overflow-hidden">
<img alt="Providhy Dashboard - AI-powered provider management interface" className="w-full h-full object-cover object-top" loading="lazy" src="https://iam.providhy.com/images/businessSummary.png"/>
</div>
</div>
</div>
</div>

<section className="py-12 border-y border-slate-100 bg-white/50 backdrop-blur-sm">
<div className="text-center mb-8 reveal">
<p className="text-sm font-medium text-slate-500 tracking-wide">
        Powering Nepal's Fast-Growing Businesses
      </p>
</div>
<div className="relative w-full overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
<div className="flex whitespace-nowrap animate-scroll">

<div className="flex items-center gap-16 mx-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight">
<span className="iconify text-red-600" data-icon="lucide:zap"></span>
          F1Soft
          </span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight">
<span className="iconify text-green-600" data-icon="lucide:tractor"></span>
          Agro Machinery
          </span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight">
<span className="iconify text-blue-600" data-icon="lucide:settings-2"></span>
          Sagarmatha Auto
          </span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight">
<span className="iconify text-amber-600" data-icon="lucide:star"></span>
          Goldstar
          </span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight">
<span className="iconify text-purple-600" data-icon="lucide:shopping-bag"></span>
          Bhatbhateni
          </span>
</div>

<div className="flex items-center gap-16 mx-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight">
<span className="iconify text-red-600" data-icon="lucide:zap"></span>
          F1Soft
          </span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight">
<span className="iconify text-green-600" data-icon="lucide:tractor"></span>
          Agro Machinery
          </span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight">
<span className="iconify text-blue-600" data-icon="lucide:settings-2"></span>
          Sagarmatha Auto
          </span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight">
<span className="iconify text-amber-600" data-icon="lucide:star"></span>
          Goldstar
          </span>
<span className="flex items-center gap-2 text-lg font-semibold tracking-tight">
<span className="iconify text-purple-600" data-icon="lucide:shopping-bag"></span>
          Bhatbhateni
          </span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="features">
<div className="max-w-7xl mx-auto">

<div className="mb-16 text-center reveal">
<span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 text-sm font-medium rounded-full mb-6">
<span className="iconify" data-icon="lucide:sparkles"></span>
        Features
        </span>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
          Everything you need to run your business.
        </h2>
<p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Powerful features, refreshingly simple.
        </p>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group reveal">
<div className="h-full bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-100 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="iconify text-amber-600 text-lg" data-icon="lucide:package"></span>
</div>
<div className="flex items-center gap-1 px-2 py-1 bg-white rounded-full border border-amber-200 text-[10px] font-medium text-amber-700">
<span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                Low: 3
              </div>
</div>
<div className="space-y-2 mb-4">
<div className="h-1.5 bg-amber-100 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 rounded-full" style={{width: '85%'}}></div>
</div>
<div className="h-1.5 bg-amber-100 rounded-full overflow-hidden">
<div className="h-full bg-red-400 rounded-full" style={{width: '15%'}}></div>
</div>
<div className="h-1.5 bg-amber-100 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 rounded-full" style={{width: '60%'}}></div>
</div>
</div>
<h3 className="font-bold text-slate-900 text-sm">Smart Inventory</h3>
<p className="text-xs text-slate-500 mt-1">Low stock alerts &amp; expiry tracking</p>
</div>
</div>

<div className="group reveal delay-100">
<div className="h-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="iconify text-blue-600 text-lg" data-icon="lucide:zap"></span>
</div>
<div className="text-[10px] font-mono text-blue-600 bg-white px-2 py-1 rounded border border-blue-200">
                &lt;2 sec
              </div>
</div>
<div className="relative h-10 mb-4 flex items-center">
<div className="absolute left-0 w-8 h-8 bg-white rounded-lg border border-blue-200 shadow-sm flex items-center justify-center billing-animation">
<span className="iconify text-blue-500 text-sm" data-icon="lucide:receipt"></span>
</div>
<div className="flex-1 mx-10 border-t-2 border-dashed border-blue-200"></div>
<div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
<span className="iconify text-white text-sm" data-icon="lucide:printer"></span>
</div>
</div>
<h3 className="font-bold text-slate-900 text-sm">Lightning Billing</h3>
<p className="text-xs text-slate-500 mt-1">Create invoices in seconds</p>
</div>
</div>

<div className="group reveal delay-200">
<div className="h-full bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-5 border border-indigo-100 hover:shadow-lg hover:shadow-indigo-100/50 transition-all duration-300">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="iconify text-indigo-600 text-lg" data-icon="lucide:file-bar-chart"></span>
</div>
<div className="px-2 py-1 bg-indigo-500 rounded text-[10px] font-bold text-white">
                30+
              </div>
</div>
<div className="space-y-1.5 mb-4">
<div className="flex items-center gap-2 px-2 py-1.5 bg-white rounded-lg border border-indigo-100 group-hover:translate-x-1 transition-transform">
<span className="iconify text-indigo-400 text-xs" data-icon="lucide:trending-up"></span>
<span className="text-[10px] text-slate-600">Sales Report</span>
</div>
<div className="flex items-center gap-2 px-2 py-1.5 bg-white rounded-lg border border-indigo-100 group-hover:translate-x-1 transition-transform delay-75">
<span className="iconify text-indigo-400 text-xs" data-icon="lucide:receipt"></span>
<span className="text-[10px] text-slate-600">VAT / Annex 5</span>
</div>
<div className="flex items-center gap-2 px-2 py-1.5 bg-white rounded-lg border border-indigo-100 group-hover:translate-x-1 transition-transform delay-100">
<span className="iconify text-indigo-400 text-xs" data-icon="lucide:wallet"></span>
<span className="text-[10px] text-slate-600">Profit &amp; Loss</span>
</div>
</div>
<h3 className="font-bold text-slate-900 text-sm">30+ Reports</h3>
<p className="text-xs text-slate-500 mt-1">Sales, stock, VAT &amp; more</p>
</div>
</div>

<div className="group reveal delay-300">
<div className="h-full bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-5 border border-emerald-100 hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="iconify text-emerald-600 text-lg" data-icon="lucide:users"></span>
</div>
<div className="flex -space-x-2">
<div className="w-6 h-6 bg-emerald-200 rounded-full border-2 border-white"></div>
<div className="w-6 h-6 bg-teal-200 rounded-full border-2 border-white"></div>
<div className="w-6 h-6 bg-emerald-300 rounded-full border-2 border-white text-[8px] flex items-center justify-center font-bold text-emerald-700">
                  +</div>
</div>
</div>
<div className="space-y-1.5 mb-4">
<div className="flex items-center justify-between text-[10px] px-2 py-1.5 bg-white rounded border border-emerald-100">
<span className="text-slate-600">Ram Store</span>
<span className="text-emerald-600 font-medium">रू 12K</span>
</div>
<div className="flex items-center justify-between text-[10px] px-2 py-1.5 bg-white rounded border border-emerald-100">
<span className="text-slate-600">Shyam &amp; Co</span>
<span className="text-red-500 font-medium">-रू 5K</span>
</div>
</div>
<h3 className="font-bold text-slate-900 text-sm">Customer Ledger</h3>
<p className="text-xs text-slate-500 mt-1">Track credit &amp; payments</p>
</div>
</div>

<div className="col-span-2 group reveal delay-400">
<div className="h-full bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-5 border border-violet-100 hover:shadow-lg hover:shadow-violet-100/50 transition-all duration-300">
<div className="flex flex-col sm:flex-row sm:items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
<span className="iconify text-violet-600 text-lg" data-icon="lucide:shield"></span>
</div>
<div className="flex-1 min-w-0">
<h3 className="font-bold text-slate-900 text-sm mb-2">User Roles &amp; Permissions</h3>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 bg-white rounded-full border border-violet-200 text-xs font-medium text-violet-700 flex items-center gap-1.5 whitespace-nowrap">
<span className="w-1.5 h-1.5 bg-violet-500 rounded-full"></span>
                  Admin
                  </span>
<span className="px-2.5 py-1 bg-white rounded-full border border-violet-200 text-xs font-medium text-violet-700 flex items-center gap-1.5 whitespace-nowrap">
<span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Cashier
                  </span>
<span className="px-2.5 py-1 bg-white rounded-full border border-violet-200 text-xs font-medium text-violet-700 flex items-center gap-1.5 whitespace-nowrap">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Accountant
                  </span>
<span className="px-2.5 py-1 bg-white rounded-full border border-violet-200 text-xs font-medium text-violet-700 flex items-center gap-1.5 whitespace-nowrap">
<span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  Viewer
                  </span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-2 group reveal delay-500">
<div className="h-full bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-5 border border-rose-100 hover:shadow-lg hover:shadow-rose-100/50 transition-all duration-300">
<div className="flex flex-col sm:flex-row sm:items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
<span className="iconify text-rose-600 text-lg" data-icon="lucide:truck"></span>
</div>
<div className="flex-1 min-w-0">
<h3 className="font-bold text-slate-900 text-sm mb-2 sm:mb-0 sm:hidden">Purchase Orders</h3>
<div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
<div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-rose-200 flex-shrink-0">
<span className="iconify text-rose-500 text-sm" data-icon="lucide:file-text"></span>
<span className="text-xs font-medium text-slate-700">PO #142</span>
</div>
<span className="iconify text-rose-300 flex-shrink-0" data-icon="lucide:arrow-right"></span>
<div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-rose-200 flex-shrink-0">
<span className="iconify text-rose-500 text-sm" data-icon="lucide:package"></span>
<span className="text-xs font-medium text-slate-700">Received</span>
</div>
<span className="iconify text-rose-300 flex-shrink-0" data-icon="lucide:arrow-right"></span>
<div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-100 rounded-lg border border-emerald-200 flex-shrink-0">
<span className="iconify text-emerald-600 text-sm" data-icon="lucide:check-circle"></span>
<span className="text-xs font-medium text-emerald-700">Stocked</span>
</div>
</div>
</div>
<div className="hidden sm:block text-right flex-shrink-0">
<h3 className="font-bold text-slate-900 text-sm">Purchase Orders</h3>
<p className="text-xs text-slate-500">Vendor management made easy</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-gradient-to-b from-white to-slate-50">
<div className="max-w-7xl mx-auto">

<div className="mb-24 text-center reveal">
<span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 text-sm font-medium rounded-full mb-6">
<span className="iconify" data-icon="lucide:layers"></span>
        Core Modules
        </span>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
          Everything in one place.
        </h2>
<p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Four powerful modules that work together seamlessly to run your entire business.
        </p>
</div>

<div className="relative flex flex-col gap-8 md:gap-16">

<div className="sticky top-20 z-10 reveal">
<div className="w-full min-h-[480px] md:min-h-[520px] bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-500">

<div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">

<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center">
<span className="iconify text-amber-600 text-2xl" data-icon="lucide:package"></span>
</div>
<span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wide">
                                Inventory
                            </span>
</div>
<h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                Smart Inventory Management
              </h3>
<p className="text-slate-500 text-lg leading-relaxed mb-8">
                Track stock across multiple godowns in real-time. Manage expiry dates, batch numbers, and unit
                conversions — all designed for Nepali trading businesses.
              </p>

<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-full">
<span className="iconify text-amber-500" data-icon="lucide:warehouse"></span>
                Multi-Godown
                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-full">
<span className="iconify text-amber-500" data-icon="lucide:calendar-clock"></span>
                Expiry Tracking
                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-full">
<span className="iconify text-amber-500" data-icon="lucide:bell-ring"></span>
                Low Stock Alerts
                </span>
</div>
</div>

<div className="w-full lg:w-1/2 bg-gradient-to-br from-amber-50 to-orange-50 border-t lg:border-t-0 lg:border-l border-slate-100 flex items-center justify-center p-6 md:p-8 relative overflow-hidden">

<div className="absolute inset-0 opacity-30">
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, #f59e0b 0.5px, transparent 0)', backgroundSize: '24px 24px'}}>
</div>
</div>

<div className="relative z-10 w-full max-w-sm">

<div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">

<div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
<div className="flex items-center gap-2">
<span className="iconify text-slate-400" data-icon="lucide:package"></span>
<span className="font-semibold text-sm text-slate-700">Stock Overview</span>
</div>
<span className="flex items-center gap-1 text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full font-medium">
<span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                    3 Low Stock
                    </span>
</div>

<div className="p-5 space-y-3">

<div className="flex items-center justify-between p-3 bg-red-50 rounded-xl border border-red-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-red-200">
<span className="iconify text-red-500" data-icon="lucide:alert-triangle"></span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Basmati Rice</p>
<p className="text-xs text-slate-500">Godown A</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-bold text-red-600">12 Bags</p>
<p className="text-[10px] text-red-500">Below minimum</p>
</div>
</div>

<div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200">
<span className="iconify text-emerald-500" data-icon="lucide:check-circle"></span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Sunflower Oil</p>
<p className="text-xs text-slate-500">Godown B</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-bold text-slate-900">850 Ltr</p>
<p className="text-[10px] text-emerald-600">In stock</p>
</div>
</div>

<div className="flex items-center justify-between p-3 bg-amber-50 rounded-xl border border-amber-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-amber-200">
<span className="iconify text-amber-500" data-icon="lucide:clock"></span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Ghee 1kg</p>
<p className="text-xs text-slate-500">Batch #2081-12</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-bold text-amber-600">45 Days</p>
<p className="text-[10px] text-amber-500">Until expiry</p>
</div>
</div>
</div>
</div>

<div className="absolute -top-3 -right-3 bg-emerald-500 text-white px-3 py-1.5 rounded-full shadow-lg text-xs font-bold flex items-center gap-1" style={{animation: 'float 3s ease-in-out infinite'}}>
<span className="iconify" data-icon="lucide:refresh-cw"></span>
                  Live Sync
                </div>
</div>
</div>
</div>
</div>

<div className="sticky top-24 z-20 reveal">
<div className="w-full min-h-[480px] md:min-h-[520px] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-3xl border border-slate-700 overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-slate-900/30 hover:shadow-3xl transition-all duration-500">

<div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

<div className="flex items-center gap-3 mb-6 relative z-10">
<div className="w-12 h-12 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center border border-white/10">
<span className="iconify text-blue-400 text-2xl" data-icon="lucide:receipt"></span>
</div>
<span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full uppercase tracking-wide border border-blue-500/20">
                                Billing
                            </span>
</div>
<h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4 relative z-10">
                Lightning-Fast Billing
              </h3>
<p className="text-slate-400 text-lg leading-relaxed mb-8 relative z-10">
                Create tax invoices in under 2 seconds. Supports VAT, Abbreviated Tax Invoice, and credit sales. Print
                or send via SMS instantly.
              </p>

<div className="flex flex-wrap gap-2 relative z-10">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 text-slate-300 text-sm rounded-full border border-white/10">
<span className="iconify text-blue-400" data-icon="lucide:zap"></span>
                2-Second Billing
                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 text-slate-300 text-sm rounded-full border border-white/10">
<span className="iconify text-blue-400" data-icon="lucide:file-check"></span>
                VAT Invoice
                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 text-slate-300 text-sm rounded-full border border-white/10">
<span className="iconify text-blue-400" data-icon="lucide:printer"></span>
                Thermal Print
                </span>
</div>
</div>

<div className="w-full lg:w-1/2 bg-slate-950 border-t lg:border-t-0 lg:border-l border-slate-800 flex items-center justify-center p-6 md:p-8 relative overflow-hidden">

<div className="absolute inset-0 opacity-20">
<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)', backgroundSize: '32px 32px'}}>
</div>
</div>

<div className="relative z-10 w-full max-w-sm">

<div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">

<div className="px-5 py-4 border-b border-slate-800 bg-slate-800/50">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                          P
                        </div>
<div>
<p className="text-white font-semibold text-sm">Tax Invoice #1247</p>
<p className="text-slate-500 text-xs">Magh 15, 2081</p>
</div>
</div>
<span className="flex items-center gap-1 text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
<span className="iconify" data-icon="lucide:check"></span>
                      Paid
                      </span>
</div>
</div>

<div className="px-5 py-3 border-b border-slate-800">
<p className="text-slate-500 text-xs mb-1">Bill To</p>
<p className="text-white font-medium">Himalayan Traders Pvt. Ltd.</p>
<p className="text-slate-500 text-xs">PAN: 123456789</p>
</div>

<div className="px-5 py-4 space-y-2">
<div className="flex justify-between text-sm">
<span className="text-slate-400">Basmati Rice × 50</span>
<span className="text-white">रू 75,000</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-400">Cooking Oil × 20</span>
<span className="text-white">रू 32,000</span>
</div>
<div className="border-t border-dashed border-slate-700 my-3"></div>
<div className="flex justify-between text-sm">
<span className="text-slate-400">Subtotal</span>
<span className="text-white">रू 1,07,000</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-400">VAT (13%)</span>
<span className="text-white">रू 13,910</span>
</div>
<div className="flex justify-between pt-2 border-t border-slate-700">
<span className="text-white font-bold">Total</span>
<span className="text-xl font-bold text-emerald-400">रू 1,20,910</span>
</div>
</div>

<div className="px-5 py-4 bg-slate-800/50 flex gap-3">
<button className="flex-1 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-xl flex items-center justify-center gap-2 transition-colors">
<span className="iconify" data-icon="lucide:printer"></span>
                                        Print
                                    </button>
<button className="flex-1 py-2.5 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-xl flex items-center justify-center gap-2 transition-colors">
<span className="iconify" data-icon="lucide:send"></span>
                                        SMS
                                    </button>
</div>
</div>

<div className="absolute -bottom-2 -left-2 bg-blue-500 text-white px-3 py-1.5 rounded-full shadow-lg text-xs font-bold flex items-center gap-1" style={{animation: 'float 3s ease-in-out 0.5s infinite'}}>
<span className="iconify" data-icon="lucide:zap"></span>
                  1.8s
                </div>
</div>
</div>
</div>
</div>

<div className="sticky top-28 z-30 reveal">
<div className="w-full min-h-[480px] md:min-h-[520px] bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-500">

<div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">

<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center">
<span className="iconify text-emerald-600 text-2xl" data-icon="lucide:calculator"></span>
</div>
<span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wide">
                                Accounting
                            </span>
</div>
<h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                Tax-Ready Accounting
              </h3>
<p className="text-slate-500 text-lg leading-relaxed mb-8">
                Automatically generate VAT Returns, Annex 5, Annex 8, and Trial Balances. Stay audit-ready for IRD
                without the headache.
              </p>

<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-full">
<span className="iconify text-emerald-500" data-icon="lucide:file-spreadsheet"></span>
                Annex 5 &amp; 8
                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-full">
<span className="iconify text-emerald-500" data-icon="lucide:scale"></span>
                Trial Balance
                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-full">
<span className="iconify text-emerald-500" data-icon="lucide:badge-check"></span>
                IRD Compliant
                </span>
</div>
</div>

<div className="w-full lg:w-1/2 bg-gradient-to-br from-emerald-50 to-green-50 border-t lg:border-t-0 lg:border-l border-slate-100 flex items-center justify-center p-6 md:p-8 relative overflow-hidden">

<div className="absolute inset-0 opacity-30">
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, #10b981 0.5px, transparent 0)', backgroundSize: '24px 24px'}}>
</div>
</div>

<div className="relative z-10 w-full max-w-sm space-y-4">

<div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-5 transform hover:scale-[1.02] transition-transform duration-300">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
<span className="iconify text-emerald-600" data-icon="lucide:file-check"></span>
</div>
<div>
<p className="font-semibold text-sm text-slate-900">VAT Return - Annex 5</p>
<p className="text-xs text-slate-500">Magh 2081</p>
</div>
</div>
<span className="iconify text-emerald-500 text-xl" data-icon="lucide:check-circle-2"></span>
</div>
<div className="h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full" style={{width: '100%'}}></div>
</div>
<p className="text-xs text-emerald-600 mt-2 font-medium">✓ Ready for submission</p>
</div>
<div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-5 transform hover:scale-[1.02] transition-transform duration-300">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
<span className="iconify text-blue-600" data-icon="lucide:file-bar-chart"></span>
</div>
<div>
<p className="font-semibold text-sm text-slate-900">Trial Balance</p>
<p className="text-xs text-slate-500">FY 2081/82</p>
</div>
</div>
<span className="iconify text-blue-500 text-xl" data-icon="lucide:download"></span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-slate-50 rounded-lg p-2 text-center">
<p className="text-xs text-slate-500">Debit</p>
<p className="text-sm font-bold text-slate-900">रू 45.2L</p>
</div>
<div className="bg-slate-50 rounded-lg p-2 text-center">
<p className="text-xs text-slate-500">Credit</p>
<p className="text-sm font-bold text-slate-900">रू 45.2L</p>
</div>
</div>
</div>

<div className="absolute -top-2 -right-2 bg-emerald-500 text-white px-3 py-1.5 rounded-full shadow-lg text-xs font-bold flex items-center gap-1" style={{animation: 'float 3s ease-in-out 1s infinite'}}>
<span className="iconify" data-icon="lucide:shield-check"></span>
                  IRD Ready
                </div>
</div>
</div>
</div>
</div>

<div className="sticky top-32 z-40 reveal">
<div className="w-full min-h-[480px] md:min-h-[520px] bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-500">

<div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">

<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center">
<span className="iconify text-violet-600 text-2xl" data-icon="lucide:users"></span>
</div>
<span className="text-xs font-bold text-violet-600 bg-violet-50 px-3 py-1 rounded-full uppercase tracking-wide">
                                Parties
                            </span>
</div>
<h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                Customer &amp; Vendor Ledgers
              </h3>
<p className="text-slate-500 text-lg leading-relaxed mb-8">
                Complete party management with credit limits, payment tracking, and detailed ledger history. Know
                exactly who owes you and who you owe.
              </p>

<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-full">
<span className="iconify text-violet-500" data-icon="lucide:book-open"></span>
                Full Ledger
                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-full">
<span className="iconify text-violet-500" data-icon="lucide:credit-card"></span>
                Credit Limits
                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-full">
<span className="iconify text-violet-500" data-icon="lucide:history"></span>
                Payment History
                </span>
</div>
</div>

<div className="w-full lg:w-1/2 bg-gradient-to-br from-violet-50 to-purple-50 border-t lg:border-t-0 lg:border-l border-slate-100 flex items-center justify-center p-6 md:p-8 relative overflow-hidden">

<div className="absolute inset-0 opacity-30">
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, #8b5cf6 0.5px, transparent 0)', backgroundSize: '24px 24px'}}>
</div>
</div>

<div className="relative z-10 w-full max-w-sm">
<div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">

<div className="px-5 py-4 border-b border-slate-100 bg-slate-50">
<div className="flex items-center justify-between">
<span className="font-semibold text-sm text-slate-700">Party Ledger</span>
<div className="flex gap-2">
<span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">Receivable</span>
<span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">Payable</span>
</div>
</div>
</div>

<div className="divide-y divide-slate-100">

<div className="p-4 hover:bg-slate-50 transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            H
                          </div>
<div>
<p className="font-medium text-sm text-slate-900">Himalayan Traders</p>
<p className="text-xs text-slate-500">Customer • 24 invoices</p>
</div>
</div>
<div className="text-right">
<p className="font-bold text-emerald-600">रू 1,45,000</p>
<p className="text-[10px] text-slate-500">To receive</p>
</div>
</div>
</div>

<div className="p-4 hover:bg-slate-50 transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            N
                          </div>
<div>
<p className="font-medium text-sm text-slate-900">Nepal Distributors</p>
<p className="text-xs text-slate-500">Vendor • 12 bills</p>
</div>
</div>
<div className="text-right">
<p className="font-bold text-red-600">-रू 52,000</p>
<p className="text-[10px] text-slate-500">To pay</p>
</div>
</div>
</div>

<div className="p-4 hover:bg-slate-50 transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            S
                          </div>
<div>
<p className="font-medium text-sm text-slate-900">Sunrise Mart</p>
<p className="text-xs text-slate-500">Customer • 8 invoices</p>
</div>
</div>
<div className="text-right">
<p className="font-bold text-emerald-600">रू 28,500</p>
<p className="text-[10px] text-slate-500">To receive</p>
</div>
</div>
</div>
</div>

<div className="px-5 py-4 bg-slate-50 border-t border-slate-100">
<div className="flex justify-between text-sm">
<div>
<p className="text-slate-500 text-xs">Total Receivable</p>
<p className="font-bold text-emerald-600">रू 4,25,000</p>
</div>
<div className="text-right">
<p className="text-slate-500 text-xs">Total Payable</p>
<p className="font-bold text-red-600">रू 1,85,000</p>
</div>
</div>
</div>
</div>

<div className="absolute -top-2 -right-2 bg-violet-500 text-white px-3 py-1.5 rounded-full shadow-lg text-xs font-bold flex items-center gap-1" style={{animation: 'float 3s ease-in-out 1.5s infinite'}}>
<span className="iconify" data-icon="lucide:bell"></span>
                  3 Overdue
                </div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 text-center reveal">
<p className="text-slate-500 mb-6">And many more features...</p>
<a className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20" href="#features">
<span>Explore All Features</span>
<span className="iconify" data-icon="lucide:arrow-right"></span>
</a>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white">
<div className="max-w-7xl mx-auto">

<div className="mb-20 text-center reveal">
<span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 text-sm font-medium rounded-full mb-6">
<span className="iconify" data-icon="lucide:heart"></span>
        Why Users Love Us
        </span>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
          Built for the way you work.
        </h2>
<p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Every feature designed with real businesses in mind.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


<div className="lg:col-span-2 group reveal">
<div className="h-full bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-8 border border-slate-200/60 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 overflow-hidden relative">
<div className="flex flex-col md:flex-row gap-8 h-full">

<div className="flex-1 flex flex-col justify-center">
<div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
<span className="iconify text-emerald-600 text-2xl" data-icon="lucide:trending-up"></span>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                  Real-time Analytics
                </h3>
<p className="text-slate-500 text-lg leading-relaxed mb-6">
                  Watch your business grow with live dashboards. Track sales, inventory, and profits at a glance.
                </p>
<div className="flex items-center gap-4 text-sm">
<span className="flex items-center gap-2 text-slate-600">
<span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Live updates
                  </span>
<span className="flex items-center gap-2 text-slate-600">
<span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Export ready
                  </span>
</div>
</div>

<div className="flex-1 relative">
<div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg shadow-slate-200/30 transform group-hover:translate-y-[-4px] transition-transform duration-500">

<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-red-400 rounded-full"></div>
<div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
<div className="w-3 h-3 bg-green-400 rounded-full"></div>
</div>
<span className="text-xs text-slate-400 font-medium">Revenue Overview</span>
</div>

<div className="relative h-40">
<div className="absolute inset-0 flex flex-col justify-between">
<div className="border-b border-dashed border-slate-100"></div>
<div className="border-b border-dashed border-slate-100"></div>
<div className="border-b border-dashed border-slate-100"></div>
<div className="border-b border-dashed border-slate-100"></div>
</div>
<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 200 80">
<defs>
<lineargradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#10b981', stopOpacity: '0.3'}}></stop>
<stop offset="100%" style={{stopColor: '#10b981', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path d="M0 80 L0 60 Q30 55, 50 40 T100 45 T150 20 T200 10 L200 80 Z" fill="url(#chartGradient)">
</path>
<path d="M0 60 Q30 55, 50 40 T100 45 T150 20 T200 10" fill="none" stroke="#10b981" strokeLinecap="round" strokeWidth="3"></path>
<circle cx="200" cy="10" fill="#10b981" r="5"></circle>
<circle cx="200" cy="10" fill="#10b981" opacity="0.3" r="8">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="8;14;8"></animate>
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.3;0;0.3"></animate>
</circle>
</svg>
</div>

<div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
<div>
<p className="text-xs text-slate-400 mb-1">This month</p>
<p className="text-xl font-bold text-slate-900">रू 4,52,000</p>
</div>
<div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full text-sm font-medium">
<span className="iconify" data-icon="lucide:arrow-up-right"></span>
                      +23.5%
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group reveal delay-100">
<div className="h-full bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-8 border border-slate-200/60 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
<div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 h-48 flex items-center justify-center relative overflow-hidden group-hover:border-blue-200 transition-colors">
<div className="absolute inset-0 opacity-5">
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, #64748b 1px, transparent 0)', backgroundSize: '24px 24px'}}>
</div>
</div>
<div className="relative">
<div className="relative">
<div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
<span className="iconify text-4xl text-slate-400 group-hover:text-blue-500 transition-colors" data-icon="lucide:wifi-off"></span>
</div>
<div className="absolute -bottom-1 -right-1 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
<span className="iconify text-white text-sm" data-icon="lucide:check"></span>
</div>
</div>
<div className="absolute -top-4 -right-8 w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center border border-slate-100 transform group-hover:translate-y-[-4px] transition-transform" style={{animation: 'float 3s ease-in-out infinite'}}>
<span className="iconify text-blue-500" data-icon="lucide:refresh-cw"></span>
</div>
<div className="absolute -bottom-2 -left-10 w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center border border-slate-100 transform group-hover:translate-y-[-4px] transition-transform" style={{animation: 'float 3s ease-in-out 0.5s infinite'}}>
<span className="iconify text-emerald-500" data-icon="lucide:database"></span>
</div>
</div>
</div>
<div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
<span className="iconify text-blue-600 text-lg" data-icon="lucide:cloud-off"></span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
              Works Offline
            </h3>
<p className="text-slate-500">
              No internet? No problem. Everything syncs when you're back online.
            </p>
</div>
</div>


<div className="group reveal delay-200">
<div className="h-full bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-8 border border-slate-200/60 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
<div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 h-48 flex flex-col justify-end relative overflow-hidden group-hover:border-purple-200 transition-colors">
<div className="space-y-3">
<div className="flex justify-end">
<div className="bg-slate-900 text-white text-sm px-4 py-2.5 rounded-2xl rounded-br-md max-w-[80%]">
                    Help with invoice sync?
                  </div>
</div>
<div className="flex justify-start items-end gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
<span className="iconify text-white text-sm" data-icon="lucide:headphones"></span>
</div>
<div className="bg-slate-100 text-slate-700 text-sm px-4 py-2.5 rounded-2xl rounded-bl-md max-w-[70%]">
                    Sure! Fixed it now ✨
                  </div>
</div>
</div>
<div className="absolute top-4 right-4 flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1.5 rounded-full">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                Replied in 2 min
              </div>
</div>
<div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
<span className="iconify text-purple-600 text-lg" data-icon="lucide:message-circle"></span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
              Instant Support
            </h3>
<p className="text-slate-500">
              Real humans, real fast. Average response time under 5 minutes.
            </p>
</div>
</div>

<div className="group reveal delay-300">
<div className="h-full bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-8 border border-slate-200/60 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
<div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 h-48 flex items-center justify-center relative overflow-hidden group-hover:border-orange-200 transition-colors">
<div className="relative flex items-center justify-center">
<div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg z-10">
<span className="iconify text-white text-2xl" data-icon="lucide:store"></span>
</div>
<div className="absolute -top-8 -left-6 w-10 h-10 bg-white border-2 border-orange-200 rounded-xl flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform" style={{animation: 'float 4s ease-in-out infinite'}}>
<span className="iconify text-orange-500" data-icon="lucide:store"></span>
</div>
<div className="absolute -top-6 right-[-30px] w-10 h-10 bg-white border-2 border-orange-200 rounded-xl flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform" style={{animation: 'float 4s ease-in-out 0.3s infinite'}}>
<span className="iconify text-orange-500" data-icon="lucide:store"></span>
</div>
<div className="absolute top-8 -left-10 w-10 h-10 bg-white border-2 border-orange-200 rounded-xl flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform" style={{animation: 'float 4s ease-in-out 0.6s infinite'}}>
<span className="iconify text-orange-500" data-icon="lucide:store"></span>
</div>
<div className="absolute top-10 right-[-26px] w-10 h-10 bg-white border-2 border-orange-200 rounded-xl flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform" style={{animation: 'float 4s ease-in-out 0.9s infinite'}}>
<span className="iconify text-orange-500" data-icon="lucide:store"></span>
</div>
<svg className="absolute inset-0 w-full h-full pointer-events-none" style={{overflow: 'visible'}}>
<line stroke="#fdba74" stroke-dasharray="4 4" strokeWidth="2" x1="50%" x2="25%" y1="50%" y2="20%">
</line>
<line stroke="#fdba74" stroke-dasharray="4 4" strokeWidth="2" x1="50%" x2="78%" y1="50%" y2="25%">
</line>
<line stroke="#fdba74" stroke-dasharray="4 4" strokeWidth="2" x1="50%" x2="20%" y1="50%" y2="70%">
</line>
<line stroke="#fdba74" stroke-dasharray="4 4" strokeWidth="2" x1="50%" x2="80%" y1="50%" y2="75%">
</line>
</svg>
</div>
</div>
<div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
<span className="iconify text-orange-600 text-lg" data-icon="lucide:git-branch"></span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
              Multi-Branch Ready
            </h3>
<p className="text-slate-500">
              Manage unlimited branches from one dashboard. Real-time sync.
            </p>
</div>
</div>

<div className="group reveal delay-400">
<div className="h-full bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-8 border border-slate-200/60 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
<div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 h-48 flex items-center justify-center relative overflow-hidden group-hover:border-green-200 transition-colors">

<div className="relative">

<div className="w-28 h-36 bg-white border-2 border-slate-200 rounded-xl shadow-lg p-3 transform group-hover:rotate-[-2deg] transition-transform">

<div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
<div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
<span className="iconify text-green-600 text-xs" data-icon="lucide:file-text"></span>
</div>
<div className="flex-1">
<div className="h-1.5 bg-slate-200 rounded w-full"></div>
</div>
</div>

<div className="space-y-2">
<div className="h-1.5 bg-slate-100 rounded w-full"></div>
<div className="h-1.5 bg-slate-100 rounded w-3/4"></div>
<div className="h-1.5 bg-slate-100 rounded w-5/6"></div>
<div className="h-1.5 bg-slate-100 rounded w-2/3"></div>
</div>

<div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg transform rotate-12">
<span className="iconify text-white text-lg" data-icon="lucide:check"></span>
</div>
</div>

<div className="absolute -top-3 -left-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-md" style={{animation: 'float 3s ease-in-out infinite'}}>
                  IRD Ready
                </div>
</div>
</div>
<div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-4">
<span className="iconify text-green-600 text-lg" data-icon="lucide:badge-check"></span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
              Tax Compliant
            </h3>
<p className="text-slate-500">
              Generate IRD-ready reports and VAT invoices with one click.
            </p>
</div>
</div>


<div className="group reveal delay-500">
<div className="h-full bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-8 border border-slate-200/60 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
<div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 h-48 flex items-center justify-center relative overflow-hidden group-hover:border-indigo-200 transition-colors">

<div className="relative">

<div className="absolute top-2 left-2 w-24 h-32 bg-slate-100 rounded-lg border border-slate-200"></div>

<div className="absolute top-1 left-1 w-24 h-32 bg-slate-50 rounded-lg border border-slate-200"></div>

<div className="relative w-24 h-32 bg-white rounded-lg border-2 border-indigo-200 shadow-lg p-3 transform group-hover:translate-y-[-4px] transition-transform">
<div className="flex justify-between items-start mb-2">
<div className="w-8 h-8 bg-indigo-100 rounded flex items-center justify-center">
<span className="iconify text-indigo-600 text-sm" data-icon="lucide:receipt"></span>
</div>
<div className="text-[8px] text-slate-400">#INV-001</div>
</div>
<div className="space-y-1.5">
<div className="h-1 bg-slate-100 rounded w-full"></div>
<div className="h-1 bg-slate-100 rounded w-2/3"></div>
<div className="h-1 bg-slate-100 rounded w-3/4"></div>
</div>
<div className="absolute bottom-3 left-3 right-3">
<div className="h-5 bg-indigo-500 rounded flex items-center justify-center">
<span className="text-[8px] text-white font-medium">रू 12,500</span>
</div>
</div>
</div>

<div className="absolute -top-2 -right-4 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg" style={{animation: 'float 2s ease-in-out infinite'}}>
<span className="iconify text-white text-sm" data-icon="lucide:send"></span>
</div>
</div>
</div>
<div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
<span className="iconify text-indigo-600 text-lg" data-icon="lucide:file-plus"></span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
              Easy Invoicing
            </h3>
<p className="text-slate-500">
              Create professional invoices in seconds. Send via SMS or print.
            </p>
</div>
</div>

<div className="lg:col-span-2 group reveal delay-600">
<div className="h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-slate-700 hover:shadow-2xl hover:shadow-slate-900/30 transition-all duration-500 overflow-hidden relative">

<div className="absolute inset-0 opacity-10">
<div className="absolute inset-0" style={{backgroundImage: 'url(&quot', data: 'image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fillOpacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot'}}>
</div>
</div>
<div className="flex flex-col md:flex-row items-center gap-8 relative z-10">

<div className="flex-1">
<div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur">
<span className="iconify text-emerald-400 text-2xl" data-icon="lucide:shield-check"></span>
</div>
<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  Bank-Level Security
                </h3>
<p className="text-slate-400 text-lg leading-relaxed mb-6">
                  Your data is encrypted with 256-bit SSL and stored securely in Nepal. Role-based access keeps
                  everything protected.
                </p>
<div className="flex flex-wrap gap-3">
<span className="flex items-center gap-2 text-sm text-slate-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
<span className="iconify text-emerald-400" data-icon="lucide:lock"></span>
                  SSL Encrypted
                  </span>
<span className="flex items-center gap-2 text-sm text-slate-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
<span className="iconify text-emerald-400" data-icon="lucide:server"></span>
                  Nepal Data Center
                  </span>
<span className="flex items-center gap-2 text-sm text-slate-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
<span className="iconify text-emerald-400" data-icon="lucide:users"></span>
                  Role Access
                  </span>
</div>
</div>

<div className="flex-1 flex items-center justify-center">
<div className="relative">
<div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-emerald-500/30 transform group-hover:scale-105 transition-transform">
<span className="iconify text-white text-6xl" data-icon="lucide:shield-check"></span>
</div>
<div className="absolute -top-4 -right-4 w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center border border-white/20" style={{animation: 'float 3s ease-in-out infinite'}}>
<span className="iconify text-white" data-icon="lucide:key"></span>
</div>
<div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center border border-white/20" style={{animation: 'float 3s ease-in-out 0.5s infinite'}}>
<span className="iconify text-white" data-icon="lucide:fingerprint"></span>
</div>
<div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
<div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all">
<div className="text-3xl font-bold text-slate-900 mb-1">99.9%</div>
<div className="text-sm text-slate-500">Uptime SLA</div>
</div>
<div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all">
<div className="text-3xl font-bold text-slate-900 mb-1">&lt;5 min</div>
<div className="text-sm text-slate-500">Avg. Response</div>
</div>
<div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all">
<div className="text-3xl font-bold text-slate-900 mb-1">256-bit</div>
<div className="text-sm text-slate-500">SSL Encryption</div>
</div>
<div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all">
<div className="text-3xl font-bold text-slate-900 mb-1">24/7</div>
<div className="text-sm text-slate-500">Phone Support</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl -z-10">
</div>
<div className="max-w-6xl mx-auto">

<div className="text-center mb-16 reveal">
<span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-600 text-sm font-medium rounded-full mb-6 border border-slate-200 shadow-sm">
<span className="iconify" data-icon="lucide:sparkles"></span>
        Simple Pricing
        </span>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
          Choose your perfect plan.
        </h2>
<p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Start free, upgrade when you're ready. No hidden fees.
        </p>

<div className="flex items-center justify-center gap-4 mt-10">
<span className="text-sm font-medium text-slate-400 billing-toggle-label" data-period="monthly">Monthly</span>
<button aria-label="Toggle billing period" className="relative w-14 h-7 bg-slate-900 rounded-full p-1 transition-colors duration-300 billing-toggle">
<div className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full shadow-sm transition-all duration-300 toggle-dot"></div>
</button>
<span className="text-sm font-medium text-slate-900 billing-toggle-label" data-period="yearly">
                    Yearly 
                    <span className="inline-flex items-center gap-1 text-emerald-600 text-xs bg-emerald-50 px-2 py-0.5 rounded-full ml-1 border border-emerald-200">
<span className="iconify" data-icon="lucide:percent"></span>
          Save 20%
          </span>
</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="reveal">
<div className="h-full bg-white rounded-3xl border border-slate-200 p-8 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col">

<div className="mb-8">
<div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-4">
<span className="iconify text-slate-600 text-xl" data-icon="lucide:rocket"></span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Free Trial</h3>
<p className="text-sm text-slate-500">Perfect to explore all features</p>
</div>

<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight text-slate-900">रू 0</span>
</div>
<p className="text-sm text-slate-400 mt-1">14 days free access</p>
</div>

<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<span className="iconify text-emerald-500 text-lg mt-0.5 flex-shrink-0" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-slate-600">Full access to all features</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-emerald-500 text-lg mt-0.5 flex-shrink-0" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-slate-600">Inventory, Sales &amp; Accounts</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-emerald-500 text-lg mt-0.5 flex-shrink-0" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-slate-600">30+ detailed reports</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-emerald-500 text-lg mt-0.5 flex-shrink-0" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-slate-600">Free demo &amp; onboarding call</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-slate-300 text-lg mt-0.5 flex-shrink-0" data-icon="lucide:x-circle"></span>
<span className="text-sm text-slate-400">No credit card required</span>
</li>
</ul>

<button className="w-full py-3.5 rounded-xl border-2 border-slate-200 font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300">
                        Start Free Trial
                    </button>
</div>
</div>

<div className="reveal delay-100 md:-mt-4 md:mb-[-16px]">
<div className="h-full bg-gradient-to-b from-slate-900 to-slate-800 rounded-3xl p-8 relative overflow-hidden flex flex-col shadow-2xl shadow-slate-900/20">

<div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl rounded-tr-3xl">
              MOST POPULAR
            </div>

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>

<div className="mb-8 relative z-10">
<div className="w-12 h-12 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-4">
<span className="iconify text-white text-xl" data-icon="lucide:zap"></span>
</div>
<h3 className="text-xl font-bold text-white mb-2">Starter</h3>
<p className="text-sm text-slate-400">Everything you need to grow</p>
</div>

<div className="mb-8 relative z-10">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight text-white price-value">रू 499</span>
<span className="text-slate-400">/mo</span>
</div>
<p className="text-sm text-slate-400 mt-1">
<span className="line-through text-slate-500 mr-2 original-price">रू 625/mo</span>
                Billed annually
              </p>
</div>

<ul className="space-y-4 mb-8 flex-1 relative z-10">
<li className="flex items-start gap-3">
<span className="iconify text-emerald-400 text-lg mt-0.5 flex-shrink-0" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-slate-300">Unlimited transactions</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-emerald-400 text-lg mt-0.5 flex-shrink-0" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-slate-300">Unlimited product uploads</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-emerald-400 text-lg mt-0.5 flex-shrink-0" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-slate-300">VAT &amp; Tax Reports (Annex 5)</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-emerald-400 text-lg mt-0.5 flex-shrink-0" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-slate-300">Multi-user access</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-emerald-400 text-lg mt-0.5 flex-shrink-0" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-slate-300">Daily cloud backups</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-emerald-400 text-lg mt-0.5 flex-shrink-0" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-slate-300">Priority support (365 days)</span>
</li>
</ul>

<button className="w-full py-3.5 rounded-xl bg-white font-semibold text-slate-900 hover:bg-slate-100 transition-all duration-300 shadow-lg relative z-10">
                        Get Started Now
                    </button>
</div>
</div>

<div className="reveal delay-200">
<div className="h-full bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-200 p-8 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden">

<div className="absolute inset-0 opacity-5">
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, #64748b 1px, transparent 0)', backgroundSize: '20px 20px'}}>
</div>
</div>

<div className="mb-8 relative z-10">
<div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4">
<span className="iconify text-violet-600 text-xl" data-icon="lucide:building-2"></span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
<p className="text-sm text-slate-500">For large teams &amp; custom needs</p>
</div>

<div className="mb-8 relative z-10">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight text-slate-900">Custom</span>
</div>
<p className="text-sm text-slate-400 mt-1">Tailored to your business</p>
</div>

<ul className="space-y-4 mb-8 flex-1 relative z-10">
<li className="flex items-start gap-3">
<span className="iconify text-violet-500 text-lg mt-0.5 flex-shrink-0" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-slate-600">Everything in Starter</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-violet-500 text-lg mt-0.5 flex-shrink-0" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-slate-600">Multi-branch support</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-violet-500 text-lg mt-0.5 flex-shrink-0" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-slate-600">Custom integrations &amp; API</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-violet-500 text-lg mt-0.5 flex-shrink-0" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-slate-600">Dedicated account manager</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-violet-500 text-lg mt-0.5 flex-shrink-0" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-slate-600">On-site training &amp; setup</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-violet-500 text-lg mt-0.5 flex-shrink-0" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-slate-600">Custom SLA &amp; support</span>
</li>
</ul>

<button className="w-full py-3.5 rounded-xl border-2 border-violet-200 font-semibold text-violet-700 hover:bg-violet-50 hover:border-violet-300 transition-all duration-300 flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:message-circle"></span>
                        Contact Sales
                    </button>
</div>
</div>
</div>

<div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-slate-400 reveal">
<div className="flex items-center gap-2">
<span className="iconify text-emerald-500" data-icon="lucide:shield-check"></span>
<span>256-bit SSL</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-emerald-500" data-icon="lucide:credit-card"></span>
<span>Secure payments</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-emerald-500" data-icon="lucide:refresh-cw"></span>
<span>Cancel anytime</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-emerald-500" data-icon="lucide:headphones"></span>
<span>24/7 support</span>
</div>
</div>

<div className="mt-12 text-center reveal">
<div className="inline-flex items-center gap-3 px-6 py-4 bg-emerald-50 rounded-2xl border border-emerald-100">
<div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
<span className="iconify text-emerald-600 text-xl" data-icon="lucide:badge-check"></span>
</div>
<div className="text-left">
<p className="font-semibold text-emerald-900">30-Day Money Back Guarantee</p>
<p className="text-sm text-emerald-600">Not satisfied? Get a full refund, no questions asked.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden">

<div className="absolute inset-0">
<div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}>
</div>
</div>
<div className="relative z-10">

<div className="text-center mb-16 px-6 reveal">
<span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-slate-300 text-sm font-medium rounded-full mb-6 border border-white/10 backdrop-blur-sm">
<span className="iconify" data-icon="lucide:star"></span>
        Customer Stories
        </span>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Trusted by growing businesses.
        </h2>
<p className="text-xl text-slate-400 max-w-2xl mx-auto">
          See why businesses across Nepal choose Pasal.
        </p>
</div>

<div className="relative">

<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none">
</div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none">
</div>

<div className="flex gap-6 testimonial-scroll">

<div className="flex gap-6 animate-scroll-left">

<div className="flex-shrink-0 w-[500px] md:w-[600px]">
<div className="group bg-gradient-to-br from-slate-800/90 to-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600 transition-all duration-500 h-full">
<div className="flex flex-col md:flex-row h-full">

<div className="flex-1 p-6 md:p-8 flex flex-col justify-center">

<div className="mb-4">
<span className="iconify text-blue-400 text-xl" data-icon="lucide:quote"></span>
</div>
<blockquote className="text-lg md:text-xl text-white font-medium leading-relaxed mb-6">
                      "Their step-by-step approach to rolling out the ERP system was impressive. We saw quick results,
                      and their support is always hands-on."
                    </blockquote>

<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        D
                      </div>
<div>
<h4 className="font-bold text-white">Dipendra Bazgain</h4>
<p className="text-slate-400 text-sm">Agro Machinery Trade Link</p>
</div>
</div>

<div className="flex flex-wrap gap-2">
<span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-xs font-medium text-emerald-400">
<span className="iconify" data-icon="lucide:trending-up"></span>
                      100% Digital Shift
                      </span>
<span className="flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20 text-xs font-medium text-blue-400">
<span className="iconify" data-icon="lucide:clock"></span>
                      50% Time Saved
                      </span>
</div>
</div>

<div className="hidden md:flex w-48 bg-gradient-to-br from-slate-700 to-slate-800 items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
<div className="relative z-10">
<div className="w-24 h-16 bg-slate-900/80 backdrop-blur rounded-xl border border-slate-600 p-2 transform group-hover:scale-105 transition-all duration-500">
<div className="flex items-center gap-1 mb-2">
<div className="w-2 h-2 bg-red-400 rounded-full"></div>
<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
</div>
<div className="space-y-1">
<div className="h-1 bg-slate-700 rounded w-full"></div>
<div className="h-1 bg-emerald-500 rounded w-2/3"></div>
</div>
</div>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center" style={{animation: 'float 3s ease-in-out infinite'}}>
<span className="iconify text-white text-sm" data-icon="lucide:check"></span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex-shrink-0 w-[500px] md:w-[600px]">
<div className="group bg-gradient-to-br from-slate-800/90 to-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600 transition-all duration-500 h-full">
<div className="flex flex-col md:flex-row h-full">

<div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
<div className="mb-4">
<span className="iconify text-purple-400 text-xl" data-icon="lucide:quote"></span>
</div>
<blockquote className="text-lg md:text-xl text-white font-medium leading-relaxed mb-6">
                      "Pasal transformed how I manage my business. I can approve invoices and track inventory on the go
                      from my phone. It's a game changer."
                    </blockquote>
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        B
                      </div>
<div>
<h4 className="font-bold text-white">Bedant Thakuri</h4>
<p className="text-slate-400 text-sm">Sagarmatha Auto Parts</p>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 rounded-full border border-purple-500/20 text-xs font-medium text-purple-400">
<span className="iconify" data-icon="lucide:smartphone"></span>
                      Remote Management
                      </span>
<span className="flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20 text-xs font-medium text-amber-400">
<span className="iconify" data-icon="lucide:package"></span>
                      5000+ SKUs
                      </span>
</div>
</div>

<div className="hidden md:flex w-48 bg-gradient-to-br from-slate-800 to-slate-700 items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
<div className="relative z-10">
<div className="w-16 h-28 bg-slate-900 rounded-2xl border-2 border-slate-700 p-1 transform group-hover:scale-105 transition-all duration-500">
<div className="w-full h-full bg-slate-800 rounded-xl p-2">
<div className="h-3 bg-purple-500/30 rounded mb-1"></div>
<div className="grid grid-cols-2 gap-0.5">
<div className="h-4 bg-slate-700 rounded"></div>
<div className="h-4 bg-slate-700 rounded"></div>
</div>
</div>
</div>
<div className="absolute -top-1 -right-1 px-2 py-0.5 bg-purple-500 rounded-full text-[8px] font-bold text-white" style={{animation: 'float 3s ease-in-out 0.5s infinite'}}>
                        +12
                      </div>
</div>
</div>
</div>
</div>
</div>

<div className="flex-shrink-0 w-[500px] md:w-[600px]">
<div className="group bg-gradient-to-br from-slate-800/90 to-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600 transition-all duration-500 h-full">
<div className="flex flex-col md:flex-row h-full">
<div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
<div className="mb-4">
<span className="iconify text-emerald-400 text-xl" data-icon="lucide:quote"></span>
</div>
<blockquote className="text-lg md:text-xl text-white font-medium leading-relaxed mb-6">
                      "Finally, an ERP that understands Nepali business! VAT reports, Annex 5 — everything is ready with
                      one click. Our accountant loves it."
                    </blockquote>
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        R
                      </div>
<div>
<h4 className="font-bold text-white">Rajesh Shrestha</h4>
<p className="text-slate-400 text-sm">Shrestha Electronics</p>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-xs font-medium text-emerald-400">
<span className="iconify" data-icon="lucide:file-check"></span>
                      IRD Compliant
                      </span>
<span className="flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20 text-xs font-medium text-blue-400">
<span className="iconify" data-icon="lucide:calculator"></span>
                      Auto VAT Calc
                      </span>
</div>
</div>
<div className="hidden md:flex w-48 bg-gradient-to-br from-slate-700 to-slate-800 items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20"></div>
<div className="relative z-10">
<div className="w-20 h-24 bg-white rounded-lg p-2 transform group-hover:scale-105 transition-all duration-500 shadow-lg">
<div className="text-[6px] font-bold text-slate-900 mb-1">VAT INVOICE</div>
<div className="space-y-0.5">
<div className="h-1 bg-slate-200 rounded w-full"></div>
<div className="h-1 bg-slate-200 rounded w-3/4"></div>
<div className="h-1 bg-slate-200 rounded w-1/2"></div>
</div>
<div className="mt-2 h-3 bg-emerald-500 rounded flex items-center justify-center">
<span className="text-[5px] text-white font-bold">रू 45,000</span>
</div>
</div>
<div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center" style={{animation: 'float 3s ease-in-out 1s infinite'}}>
<span className="iconify text-white text-xs" data-icon="lucide:check"></span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex-shrink-0 w-[500px] md:w-[600px]">
<div className="group bg-gradient-to-br from-slate-800/90 to-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600 transition-all duration-500 h-full">
<div className="flex flex-col md:flex-row h-full">
<div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
<div className="mb-4">
<span className="iconify text-amber-400 text-xl" data-icon="lucide:quote"></span>
</div>
<blockquote className="text-lg md:text-xl text-white font-medium leading-relaxed mb-6">
                      "We manage 3 branches now with real-time sync. Stock transfers, consolidated reports — Pasal made
                      expansion so much easier."
                    </blockquote>
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        S
                      </div>
<div>
<h4 className="font-bold text-white">Sunil Maharjan</h4>
<p className="text-slate-400 text-sm">Maharjan Hardware Chain</p>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20 text-xs font-medium text-amber-400">
<span className="iconify" data-icon="lucide:git-branch"></span>
                      3 Branches
                      </span>
<span className="flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20 text-xs font-medium text-cyan-400">
<span className="iconify" data-icon="lucide:refresh-cw"></span>
                      Real-time Sync
                      </span>
</div>
</div>
<div className="hidden md:flex w-48 bg-gradient-to-br from-slate-800 to-slate-700 items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-orange-600/20"></div>
<div className="relative z-10 flex gap-2">
<div className="w-10 h-12 bg-slate-900/80 rounded-lg border border-amber-500/30 flex items-center justify-center transform group-hover:translate-y-[-4px] transition-all" style={{animation: 'float 3s ease-in-out infinite'}}>
<span className="iconify text-amber-400 text-sm" data-icon="lucide:store"></span>
</div>
<div className="w-10 h-12 bg-slate-900/80 rounded-lg border border-amber-500/30 flex items-center justify-center transform group-hover:translate-y-[-4px] transition-all" style={{animation: 'float 3s ease-in-out 0.2s infinite'}}>
<span className="iconify text-amber-400 text-sm" data-icon="lucide:store"></span>
</div>
<div className="w-10 h-12 bg-slate-900/80 rounded-lg border border-amber-500/30 flex items-center justify-center transform group-hover:translate-y-[-4px] transition-all" style={{animation: 'float 3s ease-in-out 0.4s infinite'}}>
<span className="iconify text-amber-400 text-sm" data-icon="lucide:store"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div aria-hidden="true" className="flex gap-6 animate-scroll-left">

<div className="flex-shrink-0 w-[500px] md:w-[600px]">
<div className="group bg-gradient-to-br from-slate-800/90 to-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600 transition-all duration-500 h-full">
<div className="flex flex-col md:flex-row h-full">
<div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
<div className="mb-4">
<span className="iconify text-blue-400 text-xl" data-icon="lucide:quote"></span>
</div>
<blockquote className="text-lg md:text-xl text-white font-medium leading-relaxed mb-6">
                      "Their step-by-step approach to rolling out the ERP system was impressive. We saw quick results,
                      and their support is always hands-on."
                    </blockquote>
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        D</div>
<div>
<h4 className="font-bold text-white">Dipendra Bazgain</h4>
<p className="text-slate-400 text-sm">Agro Machinery Trade Link</p>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-xs font-medium text-emerald-400">
<span className="iconify" data-icon="lucide:trending-up"></span>
                      100% Digital Shift
                      </span>
</div>
</div>
<div className="hidden md:flex w-48 bg-gradient-to-br from-slate-700 to-slate-800 items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
</div>
</div>
</div>
</div>

<div className="flex-shrink-0 w-[500px] md:w-[600px]">
<div className="group bg-gradient-to-br from-slate-800/90 to-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600 transition-all duration-500 h-full">
<div className="flex flex-col md:flex-row h-full">
<div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
<div className="mb-4">
<span className="iconify text-purple-400 text-xl" data-icon="lucide:quote"></span>
</div>
<blockquote className="text-lg md:text-xl text-white font-medium leading-relaxed mb-6">
                      "Pasal transformed how I manage my business. I can approve invoices and track inventory on the go
                      from my phone. It's a game changer."
                    </blockquote>
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        B</div>
<div>
<h4 className="font-bold text-white">Bedant Thakuri</h4>
<p className="text-slate-400 text-sm">Sagarmatha Auto Parts</p>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 rounded-full border border-purple-500/20 text-xs font-medium text-purple-400">
<span className="iconify" data-icon="lucide:smartphone"></span>
                      Remote Management
                      </span>
</div>
</div>
<div className="hidden md:flex w-48 bg-gradient-to-br from-slate-800 to-slate-700 items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
</div>
</div>
</div>
</div>

<div className="flex-shrink-0 w-[500px] md:w-[600px]">
<div className="group bg-gradient-to-br from-slate-800/90 to-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600 transition-all duration-500 h-full">
<div className="flex flex-col md:flex-row h-full">
<div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
<div className="mb-4">
<span className="iconify text-emerald-400 text-xl" data-icon="lucide:quote"></span>
</div>
<blockquote className="text-lg md:text-xl text-white font-medium leading-relaxed mb-6">
                      "Finally, an ERP that understands Nepali business! VAT reports, Annex 5 — everything is ready with
                      one click."
                    </blockquote>
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        R</div>
<div>
<h4 className="font-bold text-white">Rajesh Shrestha</h4>
<p className="text-slate-400 text-sm">Shrestha Electronics</p>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-xs font-medium text-emerald-400">
<span className="iconify" data-icon="lucide:file-check"></span>
                      IRD Compliant
                      </span>
</div>
</div>
<div className="hidden md:flex w-48 bg-gradient-to-br from-slate-700 to-slate-800 items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20"></div>
</div>
</div>
</div>
</div>

<div className="flex-shrink-0 w-[500px] md:w-[600px]">
<div className="group bg-gradient-to-br from-slate-800/90 to-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600 transition-all duration-500 h-full">
<div className="flex flex-col md:flex-row h-full">
<div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
<div className="mb-4">
<span className="iconify text-amber-400 text-xl" data-icon="lucide:quote"></span>
</div>
<blockquote className="text-lg md:text-xl text-white font-medium leading-relaxed mb-6">
                      "We manage 3 branches now with real-time sync. Stock transfers, consolidated reports — Pasal made
                      expansion so much easier."
                    </blockquote>
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        S</div>
<div>
<h4 className="font-bold text-white">Sunil Maharjan</h4>
<p className="text-slate-400 text-sm">Maharjan Hardware Chain</p>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20 text-xs font-medium text-amber-400">
<span className="iconify" data-icon="lucide:git-branch"></span>
                      3 Branches
                      </span>
</div>
</div>
<div className="hidden md:flex w-48 bg-gradient-to-br from-slate-800 to-slate-700 items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-orange-600/20"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 px-6 reveal">
<div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
<div className="text-sm text-slate-400">Businesses</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold text-white mb-1">1M+</div>
<div className="text-sm text-slate-400">Invoices Generated</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold text-white mb-1">50Cr+</div>
<div className="text-sm text-slate-400">Transactions</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold text-white mb-1">4.9★</div>
<div className="text-sm text-slate-400">User Rating</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 overflow-hidden relative bg-gradient-to-b from-white to-slate-50">
<div className="max-w-6xl mx-auto text-center relative z-10 px-6">

<div className="mb-8">
<span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-6">
<span className="iconify" data-icon="lucide:puzzle"></span>
        Integrations
        </span>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
          Bring it all together in<br className="hidden md:block"/> one simple dashboard.
        </h2>
<p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Connect with the tools and services your business already uses.
        </p>
</div>

<div className="relative h-[500px] md:h-[600px] flex items-center justify-center mt-12">

<svg className="absolute inset-0 w-full h-full pointer-events-none" style={{overflow: 'visible'}}>
<defs>
<lineargradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#e2e8f0', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#cbd5e1', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#e2e8f0', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>

<g className="ecosystem-lines" fill="none" stroke="url(#lineGradient)" stroke-dasharray="6 6" strokeWidth="1.5">

<line className="animate-dash-1" x1="50%" x2="50%" y1="50%" y2="8%">
<animate attributename="stroke-dashoffset" dur="3s" from="0" repeatcount="indefinite" to="24"></animate>
</line>

<line className="animate-dash-2" x1="50%" x2="78%" y1="50%" y2="18%">
<animate attributename="stroke-dashoffset" dur="2.5s" from="0" repeatcount="indefinite" to="24"></animate>
</line>

<line className="animate-dash-3" x1="50%" x2="92%" y1="50%" y2="50%">
<animate attributename="stroke-dashoffset" dur="2.8s" from="0" repeatcount="indefinite" to="24"></animate>
</line>

<line className="animate-dash-4" x1="50%" x2="78%" y1="50%" y2="82%">
<animate attributename="stroke-dashoffset" dur="3.2s" from="0" repeatcount="indefinite" to="24"></animate>
</line>

<line className="animate-dash-5" x1="50%" x2="50%" y1="50%" y2="92%">
<animate attributename="stroke-dashoffset" dur="2.6s" from="0" repeatcount="indefinite" to="24"></animate>
</line>

<line className="animate-dash-6" x1="50%" x2="22%" y1="50%" y2="82%">
<animate attributename="stroke-dashoffset" dur="2.9s" from="0" repeatcount="indefinite" to="24"></animate>
</line>

<line className="animate-dash-7" x1="50%" x2="8%" y1="50%" y2="50%">
<animate attributename="stroke-dashoffset" dur="3.1s" from="0" repeatcount="indefinite" to="24"></animate>
</line>

<line className="animate-dash-8" x1="50%" x2="22%" y1="50%" y2="18%">
<animate attributename="stroke-dashoffset" dur="2.7s" from="0" repeatcount="indefinite" to="24"></animate>
</line>
</g>

<circle cx="50%" cy="50%" fill="none" opacity="0.8" r="120" stroke="#f1f5f9" stroke-dasharray="4 8" strokeWidth="1">
<animatetransform attributename="transform" dur="60s" from="0 50% 50%" repeatcount="indefinite" to="360 50% 50%" type="rotate"></animatetransform>
</circle>
<circle cx="50%" cy="50%" fill="none" opacity="0.6" r="200" stroke="#f1f5f9" stroke-dasharray="4 12" strokeWidth="1">
<animatetransform attributename="transform" dur="90s" from="360 50% 50%" repeatcount="indefinite" to="0 50% 50%" type="rotate"></animatetransform>
</circle>
</svg>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
<div className="relative group">

<div className="absolute inset-0 w-32 h-32 -m-2 bg-blue-400/20 rounded-3xl blur-xl animate-pulse-slow"></div>
<div className="absolute inset-0 w-28 h-28 bg-slate-900/10 rounded-2xl blur-lg"></div>

<div className="relative w-28 h-28 bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-all duration-500">
<span className="text-4xl font-bold text-white tracking-tighter">P</span>

<div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent">
</div>
</div>
</div>
</div>


<div className="absolute left-1/2 top-[5%] -translate-x-1/2 z-20 ecosystem-icon" style={{animation: 'float 4s ease-in-out infinite'}}>
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-slate-200/50 border border-slate-100 group-hover:shadow-xl group-hover:scale-110 group-hover:border-green-200 transition-all duration-300">
<span className="iconify text-2xl text-green-600" data-icon="lucide:landmark"></span>
</div>
<span className="text-sm font-medium text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-1 rounded-full shadow-sm">ConnectIPS</span>
</div>
</div>

<div className="absolute right-[15%] md:right-[22%] top-[12%] md:top-[15%] z-20 ecosystem-icon" style={{animation: 'float 4.5s ease-in-out 0.5s infinite'}}>
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-slate-200/50 border border-slate-100 group-hover:shadow-xl group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300">
<span className="iconify text-xl text-blue-600" data-icon="lucide:building-2"></span>
</div>
<span className="text-sm font-medium text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-1 rounded-full shadow-sm">Tax Office</span>
</div>
</div>

<div className="absolute right-[2%] md:right-[5%] top-1/2 -translate-y-1/2 z-20 ecosystem-icon" style={{animation: 'float 5s ease-in-out 1s infinite'}}>
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-slate-200/50 border border-slate-100 group-hover:shadow-xl group-hover:scale-110 group-hover:border-pink-200 transition-all duration-300">
<span className="iconify text-2xl text-pink-600" data-icon="lucide:shopping-cart"></span>
</div>
<span className="text-sm font-medium text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-1 rounded-full shadow-sm">E-commerce</span>
</div>
</div>

<div className="absolute right-[15%] md:right-[22%] bottom-[12%] md:bottom-[15%] z-20 ecosystem-icon" style={{animation: 'float 4.2s ease-in-out 1.5s infinite'}}>
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-slate-200/50 border border-slate-100 group-hover:shadow-xl group-hover:scale-110 group-hover:border-purple-200 transition-all duration-300">
<span className="iconify text-xl text-purple-600" data-icon="lucide:users"></span>
</div>
<span className="text-sm font-medium text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-1 rounded-full shadow-sm">Customers</span>
</div>
</div>

<div className="absolute left-1/2 bottom-[2%] md:bottom-[5%] -translate-x-1/2 z-20 ecosystem-icon" style={{animation: 'float 4.8s ease-in-out 2s infinite'}}>
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-slate-200/50 border border-slate-100 group-hover:shadow-xl group-hover:scale-110 group-hover:border-emerald-200 transition-all duration-300">
<span className="iconify text-2xl text-emerald-600" data-icon="lucide:file-bar-chart"></span>
</div>
<span className="text-sm font-medium text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-1 rounded-full shadow-sm">Reports</span>
</div>
</div>

<div className="absolute left-[15%] md:left-[22%] bottom-[12%] md:bottom-[15%] z-20 ecosystem-icon" style={{animation: 'float 4.4s ease-in-out 2.5s infinite'}}>
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-slate-200/50 border border-slate-100 group-hover:shadow-xl group-hover:scale-110 group-hover:border-orange-200 transition-all duration-300">
<span className="iconify text-xl text-orange-600" data-icon="lucide:truck"></span>
</div>
<span className="text-sm font-medium text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-1 rounded-full shadow-sm">Vendors</span>
</div>
</div>

<div className="absolute left-[2%] md:left-[5%] top-1/2 -translate-y-1/2 z-20 ecosystem-icon" style={{animation: 'float 5.2s ease-in-out 3s infinite'}}>
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-slate-200/50 border border-slate-100 group-hover:shadow-xl group-hover:scale-110 group-hover:border-cyan-200 transition-all duration-300">
<span className="iconify text-2xl text-cyan-600" data-icon="lucide:message-square"></span>
</div>
<span className="text-sm font-medium text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-1 rounded-full shadow-sm">SMS</span>
</div>
</div>

<div className="absolute left-[15%] md:left-[22%] top-[12%] md:top-[15%] z-20 ecosystem-icon" style={{animation: 'float 4.6s ease-in-out 3.5s infinite'}}>
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-slate-200/50 border border-slate-100 group-hover:shadow-xl group-hover:scale-110 group-hover:border-indigo-200 transition-all duration-300">
<span className="iconify text-xl text-indigo-600" data-icon="lucide:credit-card"></span>
</div>
<span className="text-sm font-medium text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-1 rounded-full shadow-sm">Payments</span>
</div>
</div>


<div className="absolute left-[35%] top-[20%] z-10 hidden md:block" style={{animation: 'float 6s ease-in-out 1s infinite'}}>
<div className="w-10 h-10 bg-white/80 rounded-xl flex items-center justify-center shadow-md border border-slate-100/50 hover:scale-110 transition-transform">
<span className="iconify text-lg text-slate-400" data-icon="lucide:mail"></span>
</div>
</div>

<div className="absolute right-[35%] top-[25%] z-10 hidden md:block" style={{animation: 'float 5.5s ease-in-out 2s infinite'}}>
<div className="w-10 h-10 bg-white/80 rounded-xl flex items-center justify-center shadow-md border border-slate-100/50 hover:scale-110 transition-transform">
<span className="iconify text-lg text-slate-400" data-icon="lucide:cloud"></span>
</div>
</div>

<div className="absolute left-[32%] bottom-[25%] z-10 hidden md:block" style={{animation: 'float 5.8s ease-in-out 1.5s infinite'}}>
<div className="w-10 h-10 bg-white/80 rounded-xl flex items-center justify-center shadow-md border border-slate-100/50 hover:scale-110 transition-transform">
<span className="iconify text-lg text-slate-400" data-icon="lucide:database"></span>
</div>
</div>

<div className="absolute right-[32%] bottom-[20%] z-10 hidden md:block" style={{animation: 'float 6.2s ease-in-out 2.5s infinite'}}>
<div className="w-10 h-10 bg-white/80 rounded-xl flex items-center justify-center shadow-md border border-slate-100/50 hover:scale-110 transition-transform">
<span className="iconify text-lg text-slate-400" data-icon="lucide:globe"></span>
</div>
</div>

<div className="absolute left-[40%] top-[35%] w-2 h-2 bg-blue-300 rounded-full opacity-40" style={{animation: 'float 3s ease-in-out infinite'}}></div>
<div className="absolute right-[40%] top-[40%] w-2 h-2 bg-purple-300 rounded-full opacity-40" style={{animation: 'float 3.5s ease-in-out 0.5s infinite'}}></div>
<div className="absolute left-[45%] bottom-[35%] w-2 h-2 bg-green-300 rounded-full opacity-40" style={{animation: 'float 4s ease-in-out 1s infinite'}}></div>
<div className="absolute right-[42%] bottom-[40%] w-2 h-2 bg-orange-300 rounded-full opacity-40" style={{animation: 'float 3.2s ease-in-out 1.5s infinite'}}></div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white">
<div className="max-w-4xl mx-auto">

<div className="text-center mb-16 reveal">
<span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 text-sm font-medium rounded-full mb-6">
<span className="iconify" data-icon="lucide:help-circle"></span>
        FAQ
        </span>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
          Frequently asked questions.
        </h2>
<p className="text-lg text-slate-500">
          Everything you need to know about Pasal.
        </p>
</div>

<div className="space-y-4">

<details className="group reveal" open="">
<summary className="flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 rounded-2xl cursor-pointer transition-all duration-300 border border-slate-100 group-open:bg-slate-900 group-open:border-slate-900">
<span className="font-semibold text-slate-900 group-open:text-white pr-8">
                        Do I need to buy a server or any hardware?
                    </span>
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm group-open:bg-white/10">
<span className="iconify text-slate-400 group-open:text-white transform transition-transform duration-300 group-open:rotate-180" data-icon="lucide:chevron-down"></span>
</div>
</summary>
<div className="px-6 pb-6 pt-4 bg-slate-900 rounded-b-2xl -mt-4 border-x border-b border-slate-900">
<p className="text-slate-400 leading-relaxed">
              No, Pasal is 100% cloud-based. We handle all IT infrastructure, servers, security updates, and backups for
              you at no extra cost. All you need is a computer or smartphone with an internet connection to get started.
            </p>
</div>
</details>

<details className="group reveal delay-100">
<summary className="flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 rounded-2xl cursor-pointer transition-all duration-300 border border-slate-100 group-open:bg-slate-900 group-open:border-slate-900">
<span className="font-semibold text-slate-900 group-open:text-white pr-8">
                        Is Pasal compliant with Nepal Tax Laws?
                    </span>
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm group-open:bg-white/10">
<span className="iconify text-slate-400 group-open:text-white transform transition-transform duration-300 group-open:rotate-180" data-icon="lucide:chevron-down"></span>
</div>
</summary>
<div className="px-6 pb-6 pt-4 bg-slate-900 rounded-b-2xl -mt-4 border-x border-b border-slate-900">
<p className="text-slate-400 leading-relaxed">
              Yes, absolutely! Pasal is fully IRD compliant. It generates VAT Tax Invoices, Abbreviated Tax Invoices,
              Annex 5, Annex 8, and all other mandatory reports as per the Inland Revenue Department's regulations. Stay
              audit-ready at all times.
            </p>
</div>
</details>

<details className="group reveal delay-200">
<summary className="flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 rounded-2xl cursor-pointer transition-all duration-300 border border-slate-100 group-open:bg-slate-900 group-open:border-slate-900">
<span className="font-semibold text-slate-900 group-open:text-white pr-8">
                        What types of businesses can use Pasal?
                    </span>
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm group-open:bg-white/10">
<span className="iconify text-slate-400 group-open:text-white transform transition-transform duration-300 group-open:rotate-180" data-icon="lucide:chevron-down"></span>
</div>
</summary>
<div className="px-6 pb-6 pt-4 bg-slate-900 rounded-b-2xl -mt-4 border-x border-b border-slate-900">
<p className="text-slate-400 leading-relaxed">
              Pasal is ideal for trading businesses, retail shops, wholesalers, distributors, service-based companies,
              and B2B organizations. Whether you're a small kirana store or a multi-branch enterprise, Pasal scales with
              your needs.
            </p>
</div>
</details>

<details className="group reveal delay-300">
<summary className="flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 rounded-2xl cursor-pointer transition-all duration-300 border border-slate-100 group-open:bg-slate-900 group-open:border-slate-900">
<span className="font-semibold text-slate-900 group-open:text-white pr-8">
                        Can I access Pasal from my mobile phone?
                    </span>
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm group-open:bg-white/10">
<span className="iconify text-slate-400 group-open:text-white transform transition-transform duration-300 group-open:rotate-180" data-icon="lucide:chevron-down"></span>
</div>
</summary>
<div className="px-6 pb-6 pt-4 bg-slate-900 rounded-b-2xl -mt-4 border-x border-b border-slate-900">
<p className="text-slate-400 leading-relaxed">
              Yes! Pasal works beautifully on smartphones and tablets. You can check reports, approve invoices, and
              monitor your business from anywhere. It's a Progressive Web App (PWA), so you can even install it like a
              native app.
            </p>
</div>
</details>

<details className="group reveal delay-400">
<summary className="flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 rounded-2xl cursor-pointer transition-all duration-300 border border-slate-100 group-open:bg-slate-900 group-open:border-slate-900">
<span className="font-semibold text-slate-900 group-open:text-white pr-8">
                        What happens if my internet goes down?
                    </span>
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm group-open:bg-white/10">
<span className="iconify text-slate-400 group-open:text-white transform transition-transform duration-300 group-open:rotate-180" data-icon="lucide:chevron-down"></span>
</div>
</summary>
<div className="px-6 pb-6 pt-4 bg-slate-900 rounded-b-2xl -mt-4 border-x border-b border-slate-900">
<p className="text-slate-400 leading-relaxed">
              No worries! Pasal works offline too. You can continue billing and managing sales even without internet.
              All your data syncs automatically once the connection is restored — zero data loss guaranteed.
            </p>
</div>
</details>

<details className="group reveal delay-500">
<summary className="flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 rounded-2xl cursor-pointer transition-all duration-300 border border-slate-100 group-open:bg-slate-900 group-open:border-slate-900">
<span className="font-semibold text-slate-900 group-open:text-white pr-8">
                        How do I get support if I face any issues?
                    </span>
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm group-open:bg-white/10">
<span className="iconify text-slate-400 group-open:text-white transform transition-transform duration-300 group-open:rotate-180" data-icon="lucide:chevron-down"></span>
</div>
</summary>
<div className="px-6 pb-6 pt-4 bg-slate-900 rounded-b-2xl -mt-4 border-x border-b border-slate-900">
<p className="text-slate-400 leading-relaxed">
              We offer 365-day support via phone, WhatsApp, and email. Our local Nepali team responds in minutes, not
              days. Whether it's a quick question or detailed training, we're always here to help — even on holidays!
            </p>
</div>
</details>
</div>

<div className="mt-16 text-center reveal">
<div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
<div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
<span className="iconify text-slate-600 text-xl" data-icon="lucide:message-circle"></span>
</div>
<div className="text-center sm:text-left">
<p className="font-semibold text-slate-900">Still have questions?</p>
<p className="text-sm text-slate-500">Our team is just a message away.</p>
</div>
<a className="px-6 py-2.5 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors" href="#contact">
            Contact Us
          </a>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">

<div className="absolute inset-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl">
</div>
</div>

<div className="absolute top-1/4 left-[8%] hidden xl:block" style={{animation: 'float 4s ease-in-out infinite'}}>
<div className="bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 transform -rotate-6 hover:rotate-0 transition-transform">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
<span className="iconify text-emerald-600 text-xl" data-icon="lucide:check-circle-2"></span>
</div>
<div>
<p className="text-xs text-slate-500">Status</p>
<p className="text-sm font-semibold text-slate-900">Annex 5 Ready</p>
</div>
</div>
</div>
</div>
<div className="absolute top-1/3 right-[10%] hidden xl:block" style={{animation: 'float 4s ease-in-out 1s infinite'}}>
<div className="bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 transform rotate-6 hover:rotate-0 transition-transform">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
<span className="iconify text-blue-600 text-xl" data-icon="lucide:zap"></span>
</div>
<div>
<p className="text-xs text-slate-500">Billing Speed</p>
<p className="text-sm font-semibold text-slate-900">&lt; 2 Seconds</p>
</div>
</div>
</div>
</div>
<div className="absolute bottom-1/4 left-[12%] hidden xl:block" style={{animation: 'float 4s ease-in-out 0.5s infinite'}}>
<div className="bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 transform rotate-3 hover:rotate-0 transition-transform">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
<span className="iconify text-purple-600 text-xl" data-icon="lucide:cloud-off"></span>
</div>
<div>
<p className="text-xs text-slate-500">Mode</p>
<p className="text-sm font-semibold text-slate-900">Works Offline</p>
</div>
</div>
</div>
</div>
<div className="absolute bottom-1/3 right-[8%] hidden xl:block" style={{animation: 'float 4s ease-in-out 1.5s infinite'}}>
<div className="bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 transform -rotate-3 hover:rotate-0 transition-transform">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
<span className="iconify text-amber-600 text-xl" data-icon="lucide:headphones"></span>
</div>
<div>
<p className="text-xs text-slate-500">Support</p>
<p className="text-sm font-semibold text-slate-900">365 Days</p>
</div>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto text-center relative z-10 reveal">
<span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-full mb-8">
<span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
      Start your free trial today
      </span>
<h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
        Focus on Growth,<br/>
<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Simplify the Rest.</span>
</h2>
<p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
        Join 500+ Nepali businesses that have transformed their operations with Pasal.
      </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
<button className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 text-lg hover:scale-105 active:scale-95 flex items-center gap-2">
<span>Get Started Free</span>
<span className="iconify" data-icon="lucide:arrow-right"></span>
</button>
<button className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center gap-2">
<span className="iconify" data-icon="lucide:play-circle"></span>
<span>Watch Demo</span>
</button>
</div>

<div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
<a className="flex items-center gap-2 hover:text-slate-900 transition-colors" href="tel:9851221467">
<span className="iconify" data-icon="lucide:phone"></span>
<span>9851221467</span>
</a>
<span className="hidden sm:block text-slate-300">|</span>
<a className="flex items-center gap-2 hover:text-slate-900 transition-colors" href="mailto:info@vidhypro.com">
<span className="iconify" data-icon="lucide:mail"></span>
<span>info@vidhypro.com</span>
</a>
<span className="hidden sm:block text-slate-300">|</span>
<span className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:map-pin"></span>
<span>Pulchowk, Lalitpur</span>
</span>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 pt-20 pb-12">

<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 pb-12 border-b border-slate-800">

<div className="max-w-md">
<a className="flex items-center gap-3 mb-4 group" href="#">
<img alt="Providhy Logo" className="h-8 w-auto brightness-0 invert group-hover:scale-105 transition-transform" src="https://providhy.com/images/logo.svg"/>
</a>
<p className="text-slate-400 leading-relaxed">
            Nepal's most intuitive cloud ERP for trading businesses. Inventory, billing, and accounting — all in one
            place.
          </p>
</div>

<div className="w-full lg:w-auto">
<div className="flex flex-col sm:flex-row gap-3">
<input className="w-full sm:w-72 px-5 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-slate-600 focus:ring-2 focus:ring-slate-600/50 transition-all" placeholder="Enter your email" type="email"/>
<button className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
<span>Get Started</span>
<span className="iconify" data-icon="lucide:arrow-right"></span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">

<div>
<h4 className="text-white font-semibold mb-6">Product</h4>
<ul className="space-y-3">
<li><a className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2" href="#"><span className="iconify text-xs opacity-50" data-icon="lucide:package"></span>Inventory</a>
</li>
<li><a className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2" href="#"><span className="iconify text-xs opacity-50" data-icon="lucide:receipt"></span>Billing</a>
</li>
<li><a className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2" href="#"><span className="iconify text-xs opacity-50" data-icon="lucide:calculator"></span>Accounting</a>
</li>
<li><a className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2" href="#"><span className="iconify text-xs opacity-50" data-icon="lucide:file-bar-chart"></span>Reports</a>
</li>
<li><a className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2" href="#pricing"><span className="iconify text-xs opacity-50" data-icon="lucide:credit-card"></span>Pricing</a>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Company</h4>
<ul className="space-y-3">
<li><a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">About Us</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">Careers</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">Partners</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">Blog</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Resources</h4>
<ul className="space-y-3">
<li><a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">Documentation</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">Help Center</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">Video Tutorials</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">API Reference</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Legal</h4>
<ul className="space-y-3">
<li><a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">Privacy Policy</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">Terms of Service</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">Security</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">Cookie Policy</a></li>
</ul>
</div>

<div className="col-span-2 md:col-span-4 lg:col-span-1">
<h4 className="text-white font-semibold mb-6">Contact Us</h4>
<ul className="space-y-4">
<li>
<a className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group" href="tel:9851221467">
<div className="w-10 h-10 bg-slate-800 group-hover:bg-slate-700 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
<span className="iconify" data-icon="lucide:phone"></span>
</div>
<div>
<p className="text-white font-medium text-sm">+977 9851221467</p>
<p className="text-xs text-slate-500">Mon-Sat, 9am-6pm</p>
</div>
</a>
</li>
<li>
<a className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group" href="mailto:info@vidhypro.com">
<div className="w-10 h-10 bg-slate-800 group-hover:bg-slate-700 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
<span className="iconify" data-icon="lucide:mail"></span>
</div>
<div>
<p className="text-white font-medium text-sm">info@vidhypro.com</p>
<p className="text-xs text-slate-500">Email us anytime</p>
</div>
</a>
</li>
<li>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
<span className="iconify text-slate-400" data-icon="lucide:map-pin"></span>
</div>
<div>
<p className="text-white font-medium text-sm">Pulchowk, Lalitpur</p>
<p className="text-xs text-slate-500">Kathmandu, Nepal</p>
</div>
</div>
</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-800">

<div className="text-sm text-slate-500 text-center md:text-left">
          © 2025 Providhy ERP. Powered by <a className="text-white hover:underline" href="#">Vidhypro Crafts Pvt Ltd</a>
</div>

<div className="flex items-center gap-3">
<a aria-label="Facebook" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all" href="#">
<span className="iconify text-lg" data-icon="lucide:facebook"></span>
</a>
<a aria-label="Instagram" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all" href="#">
<span className="iconify text-lg" data-icon="lucide:instagram"></span>
</a>
<a aria-label="LinkedIn" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all" href="#">
<span className="iconify text-lg" data-icon="lucide:linkedin"></span>
</a>
<a aria-label="YouTube" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all" href="#">
<span className="iconify text-lg" data-icon="lucide:youtube"></span>
</a>
</div>
</div>
</div>

<div className="w-full border-t border-slate-800/50 overflow-hidden select-none pointer-events-none">
<h1 className="text-[14vw] md:text-[11vw] font-bold text-center leading-none tracking-tighter text-slate-800/80 translate-y-[25%]">
        PROVIDHY
      </h1>
</div>
</footer>



    </>
  );
}
