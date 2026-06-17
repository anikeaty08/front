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
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
<div className="flex-shrink-0 font-semibold text-lg tracking-tighter text-slate-900">
                AJP.
            </div>
<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">About</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Publications</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Guidelines</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Contact</a>
</div>
<div>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors shadow-sm" href="#">
                    Submit Paper
                </a>
</div>
</div>
</nav>

<section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-slate-50">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                Publish Your Research <br className="hidden sm:block"/> with Confidence
            </h1>
<p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
                A trusted platform for academic and scientific publications. Join a global community of researchers disseminating knowledge through rigorous peer review.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-sm" href="#">
                    Submit Paper
                    <iconify-icon className="ml-2 text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm" href="#">
                    Explore Articles
                </a>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 overflow-hidden">
<div className="w-[40rem] h-[40rem] bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] absolute -top-20 -left-20"></div>
<div className="w-[30rem] h-[30rem] bg-slate-200 rounded-full mix-blend-multiply filter blur-[80px] absolute top-40 right-0"></div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-4">Advancing Scientific Discovery</h2>
<p className="text-base text-slate-500 leading-relaxed">
                    We are an international standard, peer-reviewed journal committed to accelerating the pace of academic discovery. Our rigorous editorial process ensures the highest level of credibility, providing a trusted venue for researchers to share significant findings with a global audience.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Seamless Publication Process</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px border-t border-dashed border-slate-300"></div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center border border-slate-200 shadow-sm mb-6 relative z-10 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-2xl text-slate-700 group-hover:text-blue-600 transition-colors" icon="solar:document-add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">1. Submit Paper</h3>
<p className="text-sm text-slate-500 px-4">Easily upload your manuscript and supplementary data through our secure, intuitive portal.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center border border-slate-200 shadow-sm mb-6 relative z-10 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-2xl text-slate-700 group-hover:text-blue-600 transition-colors" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">2. Peer Review</h3>
<p className="text-sm text-slate-500 px-4">Your research undergoes double-blind evaluation by international domain experts.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center border border-slate-200 shadow-sm mb-6 relative z-10 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-2xl text-slate-700 group-hover:text-blue-600 transition-colors" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">3. Get Published</h3>
<p className="text-sm text-slate-500 px-4">Upon acceptance, your paper is formatted, assigned a DOI, and published globally.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16 max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-4">Why Publish With Us</h2>
<p className="text-base text-slate-500">We provide a premium, author-centric experience designed to maximize the reach and impact of your work.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-sm hover:border-slate-200 transition-all duration-300">
<iconify-icon className="text-2xl text-blue-600 mb-4" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Fast Review Process</h3>
<p className="text-sm text-slate-500">Optimized editorial workflows ensure rapid turnaround times without compromising quality.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-sm hover:border-slate-200 transition-all duration-300">
<iconify-icon className="text-2xl text-blue-600 mb-4" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Expert Editorial Board</h3>
<p className="text-sm text-slate-500">Your work is scrutinized and guided by leading academics from top institutions worldwide.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-sm hover:border-slate-200 transition-all duration-300">
<iconify-icon className="text-2xl text-blue-600 mb-4" icon="solar:earth-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Global Visibility</h3>
<p className="text-sm text-slate-500">Open access options and indexing in major academic databases increase your citations.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-sm hover:border-slate-200 transition-all duration-300">
<iconify-icon className="text-2xl text-blue-600 mb-4" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Secure Submission</h3>
<p className="text-sm text-slate-500">Enterprise-grade encryption protects your intellectual property throughout the review cycle.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-2">Latest Publications</h2>
<p className="text-base text-slate-500">Explore recently published research from leading scholars.</p>
</div>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors" href="#">
                    View all articles
                    <iconify-icon className="ml-1 text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col h-full hover:shadow-md transition-shadow duration-300">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center px-2 py-1 rounded border border-slate-100 bg-slate-50 text-xs font-medium text-slate-600">Computer Science</span>
<span className="text-xs text-slate-400">Oct 24, 2023</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3 leading-snug">Machine Learning Approaches in Climate Modeling Data Analysis</h3>
<p className="text-sm text-slate-500 mb-8 flex-grow">A comprehensive review of neural network architectures applied to predictive climate pattern recognition and anomaly detection.</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600 border border-slate-200">SJ</div>
<span className="text-sm font-medium text-slate-700">Dr. Sarah Jenkins</span>
</div>
<a className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm" href="#">
<iconify-icon className="text-sm" icon="solar:download-linear" strokeWidth="1.5"></iconify-icon>
                            PDF
                        </a>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col h-full hover:shadow-md transition-shadow duration-300">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center px-2 py-1 rounded border border-slate-100 bg-slate-50 text-xs font-medium text-slate-600">Biology</span>
<span className="text-xs text-slate-400">Oct 22, 2023</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3 leading-snug">Cellular Responses to Microplastic Exposure in Marine Ecosystems</h3>
<p className="text-sm text-slate-500 mb-8 flex-grow">Investigating the long-term biological impact of synthetic polymers on phytoplankton populations and marine food webs.</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600 border border-slate-200">AL</div>
<span className="text-sm font-medium text-slate-700">Prof. Albert Lin</span>
</div>
<a className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm" href="#">
<iconify-icon className="text-sm" icon="solar:download-linear" strokeWidth="1.5"></iconify-icon>
                            PDF
                        </a>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col h-full hover:shadow-md transition-shadow duration-300 md:col-span-2 lg:col-span-1">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center px-2 py-1 rounded border border-slate-100 bg-slate-50 text-xs font-medium text-slate-600">Economics</span>
<span className="text-xs text-slate-400">Oct 18, 2023</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3 leading-snug">The Impact of Digital Currencies on Traditional Banking Infrastructure</h3>
<p className="text-sm text-slate-500 mb-8 flex-grow">Analyzing the shift in monetary policy and financial stability in the era of decentralized finance and tokenization.</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600 border border-slate-200">MK</div>
<span className="text-sm font-medium text-slate-700">Maria Kuznetsova</span>
</div>
<a className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm" href="#">
<iconify-icon className="text-sm" icon="solar:download-linear" strokeWidth="1.5"></iconify-icon>
                            PDF
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="font-semibold text-xl tracking-tighter text-slate-900 mb-4">AJP.</div>
<p className="text-sm text-slate-500 max-w-sm mb-6 leading-relaxed">
                        Fostering academic excellence through rigorous peer review and global dissemination of scientific knowledge.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Quick Links</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">About the Journal</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Submit a Paper</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Editorial Board</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Author Guidelines</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Contact</h4>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors">
<iconify-icon className="text-base text-slate-400" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<a href="mailto:submissions@ajp.edu">submissions@ajp.edu</a>
</li>
<li className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors">
<iconify-icon className="text-base text-slate-400" icon="solar:question-circle-linear" strokeWidth="1.5"></iconify-icon>
<a href="mailto:support@ajp.edu">support@ajp.edu</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 Academic Journal Publication. All rights reserved.</p>
<div className="flex space-x-6 text-xs text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
