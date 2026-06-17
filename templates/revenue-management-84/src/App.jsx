import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-1.5 group" href="#">
<iconify-icon className="text-[#3E79A8] text-xl" icon="solar:card-send-linear"></iconify-icon>
<span className="text-lg tracking-tighter font-semibold text-slate-800 group-hover:text-[#3E79A8] transition-colors duration-200">
                        Colle<span className="text-[#E87543]">X</span>press
                    </span>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#insights">Updates</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#testimonials">Testimonials</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-[#3E79A8] hover:text-[#2d5c82] transition-colors" href="#portals">
<iconify-icon icon="solar:login-2-linear" strokeWidth="1.5"></iconify-icon>
                    Portal Access
                </a>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#3E79A8] rounded-md hover:bg-[#34668e] shadow-sm transition-all duration-200" href="#contact">
                    Request a Demo
                </a>
<button className="md:hidden text-slate-600 hover:text-slate-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="pt-16">

<section className="relative bg-white overflow-hidden border-b border-slate-100">
<div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 pt-20 pb-24 lg:pt-32 lg:pb-36 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-[#E87543]"></span>
                            Trusted by Healthcare &amp; Professional Organizations
                        </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-slate-900 leading-[1.1] mb-6">
                            Professional Revenue Management and Collections Support
                        </h1>
<p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed mb-8 max-w-xl">
                            ColleXpress helps professionals and organizations manage receivables, payment coordination, and account support with efficiency, professionalism, and care.
                        </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#3E79A8] rounded-md hover:bg-[#34668e] shadow-sm transition-all duration-200" href="#contact">
                                Request a Demo
                            </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-50 hover:border-slate-300 transition-all duration-200" href="#contact">
                                Contact Us
                            </a>
</div>
</div>
<div className="relative w-full aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-sm border border-slate-100/50">
<img alt="Professional medical consultation" className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200/60 bg-white">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-100">
<div className="flex flex-col items-center justify-center gap-2">
<iconify-icon className="text-xl text-[#3E79A8]" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Secure Workflows</span>
</div>
<div className="flex flex-col items-center justify-center gap-2">
<iconify-icon className="text-xl text-[#3E79A8]" icon="solar:user-hand-up-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Professional Support</span>
</div>
<div className="flex flex-col items-center justify-center gap-2">
<iconify-icon className="text-xl text-[#3E79A8]" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Responsive Coordination</span>
</div>
<div className="flex flex-col items-center justify-center gap-2">
<iconify-icon className="text-xl text-[#3E79A8]" icon="solar:tuning-square-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Customized Solutions</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="about">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-slate-900 mb-6">
                    Structured Support with Empathy and Trust
                </h2>
<p className="text-base text-slate-600 leading-relaxed font-normal">
                    At ColleXpress, we understand that revenue management in professional practices requires a delicate balance. We operate as an organized, client-focused extension of your business, ensuring that payment coordination and receivables are handled respectfully, securely, and efficiently. Our goal is to protect your professional relationships while maintaining financial structure.
                </p>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900 mb-4">Core Services</h2>
<p className="text-base text-slate-500 max-w-2xl">Comprehensive operational support tailored for healthcare providers, professional firms, and modern businesses.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors duration-200">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-xl text-[#3E79A8]" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Revenue Management Support</h3>
<p className="text-sm text-slate-500 leading-relaxed">Streamlined coordination of billing cycles and revenue tracking to ensure consistent operational cash flow.</p>
</div>

<div className="group p-8 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors duration-200">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-xl text-[#3E79A8]" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Receivables Coordination</h3>
<p className="text-sm text-slate-500 leading-relaxed">Structured administration of outstanding accounts with a focus on respectful follow-up and resolution.</p>
</div>

<div className="group p-8 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors duration-200">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-xl text-[#E87543]" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Account Communication</h3>
<p className="text-sm text-slate-500 leading-relaxed">Professional liaison services between your practice and payees, ensuring clarity and assisting with inquiries.</p>
</div>

<div className="group p-8 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors duration-200">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-xl text-[#3E79A8]" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Reporting &amp; Visibility</h3>
<p className="text-sm text-slate-500 leading-relaxed">Detailed administrative reporting providing transparency into account statuses and operational metrics.</p>
</div>

<div className="group p-8 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors duration-200">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-xl text-[#3E79A8]" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Business Practice Support</h3>
<p className="text-sm text-slate-500 leading-relaxed">Tailored operational frameworks designed specifically for clinics, engineering firms, and corporate offices.</p>
</div>

<div className="group p-8 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors duration-200">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-xl text-[#E87543]" icon="solar:hand-shake-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Payment Administration</h3>
<p className="text-sm text-slate-500 leading-relaxed">Secure and reliable processing coordination, helping to organize incoming payments seamlessly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 aspect-[4/3]">
<img alt="Professional handshake" className="absolute inset-0 w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900 mb-6">Designed for Professional Environments</h2>
<p className="text-base text-slate-600 mb-8">We recognize that your reputation is paramount. Our workflows are engineered to reflect the same level of dignity and structure that you provide to your clients and patients.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#3E79A8]/10 flex items-center justify-center text-[#3E79A8]">
<iconify-icon icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Premium Client-Facing Experience</h4>
<p className="text-sm text-slate-500">Every interaction is handled with utmost professionalism and courtesy, ensuring a positive reflection on your organization.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#3E79A8]/10 flex items-center justify-center text-[#3E79A8]">
<iconify-icon icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Secure and Dependable Workflows</h4>
<p className="text-sm text-slate-500">Data handling and communication protocols strictly adhere to modern privacy and security standards.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#3E79A8]/10 flex items-center justify-center text-[#3E79A8]">
<iconify-icon icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Tailored Industry Support</h4>
<p className="text-sm text-slate-500">Workflows explicitly customized for the nuances of healthcare billing, consulting fees, and professional service retainers.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1e293b] text-white" id="portals">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl tracking-tight font-semibold mb-4 text-white">Secure Portal Gateways</h2>
<p className="text-base text-slate-400 max-w-2xl mx-auto mb-16">Access the appropriate ColleXpress-connected portal for account management, payment actions, or administrative functions. These link to secure third-party systems.</p>
<div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">

<div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm flex flex-col items-center hover:bg-slate-800 transition-colors">
<div className="w-12 h-12 rounded-full bg-[#3E79A8]/20 flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-[#3E79A8]" icon="solar:stethoscope-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Doctor’s Portal</h3>
<p className="text-xs text-slate-400 mb-6 text-center">Manage practice accounts, view reports, and track payment statuses securely.</p>
<a className="mt-auto w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-700 rounded border border-slate-600 hover:bg-slate-600 transition-colors" href="#">
                            Access Portal
                        </a>
</div>

<div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm flex flex-col items-center hover:bg-slate-800 transition-colors">
<div className="w-12 h-12 rounded-full bg-[#E87543]/20 flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-[#E87543]" icon="solar:user-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Payees Portal</h3>
<p className="text-xs text-slate-400 mb-6 text-center">View account details, submit documents, and coordinate payment administration securely.</p>
<a className="mt-auto w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-700 rounded border border-slate-600 hover:bg-slate-600 transition-colors" href="#">
                            Access Portal
                        </a>
</div>

<div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm flex flex-col items-center hover:bg-slate-800 transition-colors">
<div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-slate-300" icon="solar:settings-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Management Portal</h3>
<p className="text-xs text-slate-400 mb-6 text-center">Administrative access for organizational oversight and operational configuration.</p>
<a className="mt-auto w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-700 rounded border border-slate-600 hover:bg-slate-600 transition-colors" href="#">
                            Access Portal
                        </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900 mb-12 text-center">Trusted by Professionals</h2>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-6 rounded-xl border border-slate-100 bg-slate-50 shadow-sm flex flex-col">
<div className="flex items-center gap-1 mb-4 text-[#3E79A8]">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 flex-grow">"ColleXpress has completely streamlined our clinic's receivables. Their team handles patient communication with incredible tact, preserving our relationship with our patients while ensuring operations remain funded."</p>
<div>
<h5 className="text-sm font-semibold text-slate-900">Dr. M. Santos</h5>
<p className="text-xs text-slate-500">Medical Director, Quezon City</p>
</div>
</div>
<div className="p-6 rounded-xl border border-slate-100 bg-slate-50 shadow-sm flex flex-col">
<div className="flex items-center gap-1 mb-4 text-[#3E79A8]">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 flex-grow">"As an engineering firm, chasing invoices was consuming too much administrative time. Handing this over to a professional, structured team like ColleXpress was the best operational decision we made this year."</p>
<div>
<h5 className="text-sm font-semibold text-slate-900">Engr. R. Villanueva</h5>
<p className="text-xs text-slate-500">Managing Partner</p>
</div>
</div>
<div className="p-6 rounded-xl border border-slate-100 bg-slate-50 shadow-sm flex flex-col">
<div className="flex items-center gap-1 mb-4 text-[#3E79A8]">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 flex-grow">"The visibility their reporting provides is exceptional. We always know the status of coordinated accounts. They are responsive, organized, and deeply professional."</p>
<div>
<h5 className="text-sm font-semibold text-slate-900">A. Reyes</h5>
<p className="text-xs text-slate-500">Clinic Administrator</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-b border-slate-100" id="insights">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl tracking-tight font-semibold text-slate-900 mb-2">Insights &amp; Policy Updates</h2>
<p className="text-base text-slate-500">Announcements and selected industry developments.</p>
</div>
<a className="text-sm font-medium text-[#3E79A8] hover:text-[#2d5c82] flex items-center gap-1" href="#">
                        View all articles <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6 mb-8">

<a className="group flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow" href="#">
<div className="h-48 bg-slate-100 relative overflow-hidden">
<img alt="Legal documents" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="text-xs font-semibold text-[#E87543] mb-2 uppercase tracking-wide">Regulatory Update</span>
<h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-[#3E79A8] transition-colors">Updates to Data Privacy Handling in Healthcare Receivables</h3>
<p className="text-sm text-slate-500 line-clamp-2 mt-auto">A brief overview of recent clarifications regarding patient data protection during payment coordination processes.</p>
</div>
</a>

<a className="group flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow" href="#">
<div className="h-48 bg-slate-100 relative overflow-hidden">
<img alt="Meeting" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="text-xs font-semibold text-[#3E79A8] mb-2 uppercase tracking-wide">Company News</span>
<h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-[#3E79A8] transition-colors">ColleXpress Expands Support Teams for Metro Manila Clinics</h3>
<p className="text-sm text-slate-500 line-clamp-2 mt-auto">To better serve our growing healthcare partners, we are adding dedicated regional coordination specialists.</p>
</div>
</a>

<a className="group flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow" href="#">
<div className="h-48 bg-slate-100 relative overflow-hidden">
<img alt="Financial charts" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Best Practices</span>
<h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-[#3E79A8] transition-colors">Structuring Payment Terms for Engineering Consultancies</h3>
<p className="text-sm text-slate-500 line-clamp-2 mt-auto">Insights on setting clear initial expectations to minimize delayed receivables in professional service firms.</p>
</div>
</a>
</div>
<p className="text-xs text-slate-400 text-center">Disclaimer: Content provided in this section is for general informational purposes only and should not be treated as formal legal or financial advice.</p>
</div>
</section>

<section className="py-24 bg-white relative" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-5 gap-16">
<div className="lg:col-span-2">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900 mb-4">Let's Discuss Your Needs</h2>
<p className="text-base text-slate-500 mb-8">Our team will get back to you promptly to understand your requirements and outline how ColleXpress can support your organization's structured growth.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-[#3E79A8] mt-1" icon="solar:letter-linear"></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-900">Email Us</p>
<a className="text-sm text-slate-500 hover:text-[#3E79A8]" href="mailto:info@collexpress.com">info@collexpress.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-[#3E79A8] mt-1" icon="solar:phone-linear"></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-900">Call Us</p>
<p className="text-sm text-slate-500">+63 (02) 8XXX XXXX</p>
<p className="text-xs text-slate-400 mt-0.5">Mon-Fri, 9:00 AM - 6:00 PM PHT</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-[#3E79A8] mt-1" icon="solar:map-point-linear"></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-900">Office</p>
<p className="text-sm text-slate-500">Business District, Metro Manila<br/>Philippines</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-3">
<form className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
<div className="grid sm:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Full Name</label>
<input className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E79A8]/20 focus:border-[#3E79A8] transition-colors" placeholder="Dr. Juan Dela Cruz" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Organization / Clinic</label>
<input className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E79A8]/20 focus:border-[#3E79A8] transition-colors" placeholder="General Hospital Dept" type="text"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Email Address</label>
<input className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E79A8]/20 focus:border-[#3E79A8] transition-colors" placeholder="email@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Mobile Number</label>
<input className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E79A8]/20 focus:border-[#3E79A8] transition-colors" placeholder="+63 9XX XXX XXXX" type="tel"/>
</div>
</div>
<div className="mb-6">
<label className="block text-xs font-medium text-slate-700 mb-2">Inquiry Type</label>
<select className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E79A8]/20 focus:border-[#3E79A8] transition-colors text-slate-600">
<option disabled="" selected="" value="">Select an option</option>
<option value="demo">Request a Demo</option>
<option value="services">General Services Inquiry</option>
<option value="portal">Portal Access Assistance</option>
<option value="partnership">Partnership</option>
<option value="other">Other</option>
</select>
</div>
<div className="mb-8">
<label className="block text-xs font-medium text-slate-700 mb-2">Message</label>
<textarea className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E79A8]/20 focus:border-[#3E79A8] transition-colors resize-none" placeholder="How can we help you?" rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#3E79A8] rounded-md hover:bg-[#34668e] shadow-sm transition-all duration-200" type="button">
                                Submit Request
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-1.5 group mb-4" href="#">
<iconify-icon className="text-slate-300 text-xl" icon="solar:card-send-linear"></iconify-icon>
<span className="text-lg tracking-tighter font-semibold text-slate-100 group-hover:text-white transition-colors duration-200">
                            Colle<span className="text-[#E87543]">X</span>press
                        </span>
</a>
<p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                        Professional revenue management, payment coordination, and operational support for modern practices and businesses.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-100 mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#testimonials">Testimonials</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-100 mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#insights">Policy Updates</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Industry News</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-100 mb-4">Portals</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-[#3E79A8] transition-colors flex items-center gap-1.5" href="#portals"><iconify-icon icon="solar:lock-password-linear"></iconify-icon> Doctor's Portal</a></li>
<li><a className="text-sm text-slate-400 hover:text-[#E87543] transition-colors flex items-center gap-1.5" href="#portals"><iconify-icon icon="solar:lock-password-linear"></iconify-icon> Payees Portal</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5" href="#portals"><iconify-icon icon="solar:lock-password-linear"></iconify-icon> Management</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500">
                    © 2024 ColleXpress Revenue Management, Inc. All rights reserved.
                </p>
<div className="flex gap-4">
<a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
