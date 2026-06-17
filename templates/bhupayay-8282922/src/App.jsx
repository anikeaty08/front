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
      

<nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
<a className="text-xl font-semibold tracking-tighter text-slate-900" href="#">BHUPAY</a>
<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Products</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Developers</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center space-x-5">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 hidden sm:block transition-colors" href="#">Sign In</a>
<a className="text-sm font-medium bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition-all shadow-sm hover:shadow-md" href="#">Start Now</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center">

<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-purple-400/20 rounded-full blur-[120px] pointer-events-none" style={{zIndex: '-1'}}></div>
<div className="absolute top-[10%] right-[-10%] w-[40%] h-[50%] bg-blue-400/20 rounded-full blur-[100px] pointer-events-none" style={{zIndex: '-1'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50/80 border border-indigo-100/50 text-indigo-600 text-xs font-medium mb-8 shadow-sm backdrop-blur-sm">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
                The Future of Seamless Payments
            </span>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900 mb-6 leading-[1.1] max-w-4xl mx-auto">
                Payments infrastructure <br className="hidden md:block"/> for the <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">internet.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                BHUPAY provides fast, secure, and developer-friendly payment solutions for businesses of all sizes.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-full shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2" href="#">
                    Start Now
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 bg-white/80 backdrop-blur-sm text-slate-700 text-sm font-medium rounded-full shadow-sm border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2" href="#">
                    View Documentation
                    <iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="mt-24 relative mx-auto w-full max-w-5xl">
<div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent z-10 bottom-0 h-32 mt-auto pointer-events-none"></div>
<div className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-700 hover:scale-[1.01]" style={{transform: 'perspective(1200px) rotateX(4deg) rotateY(-2deg) rotateZ(1deg)'}}>

<div className="h-12 border-b border-slate-200/50 flex items-center px-5 gap-2 bg-white/50">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>

<div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-90">
<div className="h-32 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/50 shadow-sm flex items-center px-6">
<div className="space-y-3 w-full">
<div className="h-2 w-12 bg-slate-200 rounded-full"></div>
<div className="h-6 w-24 bg-slate-300 rounded-md"></div>
</div>
</div>
<div className="h-32 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/50 shadow-sm flex items-center px-6">
<div className="space-y-3 w-full">
<div className="h-2 w-16 bg-slate-200 rounded-full"></div>
<div className="h-6 w-32 bg-slate-300 rounded-md"></div>
</div>
</div>
<div className="h-32 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/50 shadow-sm flex items-center px-6">
<div className="space-y-3 w-full">
<div className="h-2 w-14 bg-slate-200 rounded-full"></div>
<div className="h-6 w-20 bg-slate-300 rounded-md"></div>
</div>
</div>
<div className="h-64 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/50 shadow-sm md:col-span-2 p-6 flex items-end gap-2">

<div className="w-full h-[40%] bg-indigo-100 rounded-t-sm"></div>
<div className="w-full h-[70%] bg-indigo-200 rounded-t-sm"></div>
<div className="w-full h-[50%] bg-indigo-100 rounded-t-sm"></div>
<div className="w-full h-[90%] bg-indigo-400 rounded-t-sm"></div>
<div className="w-full h-[60%] bg-indigo-200 rounded-t-sm"></div>
<div className="w-full h-[80%] bg-indigo-300 rounded-t-sm"></div>
</div>
<div className="h-64 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/50 shadow-sm p-6 space-y-4">
<div className="h-8 w-full bg-slate-100 rounded-md"></div>
<div className="h-8 w-full bg-slate-100 rounded-md"></div>
<div className="h-8 w-full bg-slate-100 rounded-md"></div>
<div className="h-8 w-full bg-slate-100 rounded-md"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-indigo-100 hover:shadow-md transition-all duration-300 group">
<div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100/50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-100 transition-all">
<iconify-icon className="text-xl" icon="solar:plug-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-2">Easy Integration</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Plug &amp; Play APIs designed for rapid development. Deploy your payment flows in record time.</p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-blue-100 hover:shadow-md transition-all duration-300 group">
<div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100/50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-100 transition-all">
<iconify-icon className="text-xl" icon="solar:globe-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-2">Global Payments</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Accept payments from everywhere. 100+ currencies supported dynamically out of the box.</p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-emerald-100 hover:shadow-md transition-all duration-300 group">
<div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100/50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-100 transition-all">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-2">Advanced Security</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">PCI-DSS compliant infrastructure protected by military-grade 256-bit encryption standard.</p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-purple-100 hover:shadow-md transition-all duration-300 group">
<div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100/50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-100 transition-all">
<iconify-icon className="text-xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-2">Smart Dashboard</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Gain deep insights into your revenue with real-time analytics and fully customizable reports.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-indigo-900/30 to-transparent rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Designed for developers</h2>
<p className="text-base text-slate-400 font-light mb-8 leading-relaxed max-w-lg">
                        Build your integration faster with our predictable, resource-oriented APIs. We provide comprehensive tools and libraries for your preferred stack.
                    </p>
<div className="flex flex-wrap gap-3 mb-10">
<span className="px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-medium flex items-center gap-2 backdrop-blur-sm">
<iconify-icon className="text-indigo-400" icon="solar:code-linear"></iconify-icon> Node.js
                        </span>
<span className="px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-medium flex items-center gap-2 backdrop-blur-sm">
<iconify-icon className="text-blue-400" icon="solar:code-linear"></iconify-icon> Python
                        </span>
<span className="px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-medium flex items-center gap-2 backdrop-blur-sm">
<iconify-icon className="text-purple-400" icon="solar:code-linear"></iconify-icon> PHP
                        </span>
<span className="px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-medium flex items-center gap-2 backdrop-blur-sm">
<iconify-icon className="text-emerald-400" icon="solar:code-linear"></iconify-icon> React
                        </span>
</div>
<a className="inline-flex items-center gap-2 text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors group" href="#">
                        Read the documentation 
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="rounded-2xl bg-[#0d1117] border border-slate-800 shadow-2xl relative group overflow-hidden">

<div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800/60 bg-[#161b22]">
<div className="w-3 h-3 rounded-full bg-slate-600"></div>
<div className="w-3 h-3 rounded-full bg-slate-600"></div>
<div className="w-3 h-3 rounded-full bg-slate-600"></div>
<span className="ml-2 text-xs text-slate-500 font-mono">payment-intent.js</span>
</div>
<div className="p-6 text-sm font-mono text-slate-300 overflow-x-auto">
<pre className="leading-loose"><span className="text-purple-400">fetch</span>(<span className="text-emerald-400">"https://api.bhupay.com/create-payment"</span>, {
  <span className="text-blue-400">method</span>: <span className="text-emerald-400">"POST"</span>,
  <span className="text-blue-400">headers</span>: { <span className="text-emerald-400">"Content-Type"</span>: <span className="text-emerald-400">"application/json"</span> },
  <span className="text-blue-400">body</span>: <span className="text-amber-400">JSON</span>.<span className="text-purple-400">stringify</span>({
    <span className="text-slate-400">amount</span>: <span className="text-rose-400">1000</span>,
    <span className="text-slate-400">currency</span>: <span className="text-emerald-400">"USD"</span>
  })
});</pre>
</div>
<button className="absolute top-14 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon className="text-base" icon="solar:copy-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="flex-1 relative w-full max-w-lg mx-auto lg:max-w-none">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/50 to-teal-50/50 rounded-full blur-3xl"></div>
<div className="relative bg-white/60 backdrop-blur-xl border border-slate-200/60 p-8 rounded-3xl shadow-xl shadow-slate-200/30">
<div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-sm border border-emerald-100/50">
<iconify-icon className="text-3xl" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center border border-slate-100">
<iconify-icon icon="solar:server-square-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">PCI-DSS Compliant</span>
</div>
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center border border-slate-100">
<iconify-icon icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">AI Risk Analysis</span>
</div>
<span className="text-[10px] uppercase tracking-wider font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">Active</span>
</div>
</div>
</div>
</div>

<div className="flex-1">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Security built in. <br/> Risk engineered out.</h2>
<p className="text-base text-slate-500 font-light mb-10 leading-relaxed max-w-lg">
                        Protect your business and your customers with our advanced security infrastructure. We handle the complexity of compliance so you can focus on growth.
                    </p>
<ul className="space-y-8">
<li className="flex gap-4 items-start">
<div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-indigo-100/50">
<iconify-icon className="text-sm" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-1">Fraud Detection</h4>
<p className="text-sm text-slate-500 font-light leading-relaxed">Machine learning algorithms analyze millions of data points to block fraudulent transactions in real-time.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-indigo-100/50">
<iconify-icon className="text-sm" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-1">256-bit Encryption</h4>
<p className="text-sm text-slate-500 font-light leading-relaxed">All sensitive payment data is securely encrypted at rest and in transit, ensuring absolute data privacy.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-indigo-100/50">
<iconify-icon className="text-sm" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-1">AI Risk Analysis</h4>
<p className="text-sm text-slate-500 font-light leading-relaxed">Dynamic risk scoring adapts to new threats automatically, optimizing your acceptance rates while minimizing disputes.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Transparent pricing</h2>
<p className="text-base text-slate-500 font-light">Simple, volume-based pricing. No hidden fees or surprise charges.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Starter</h3>
<p className="text-sm text-slate-500 font-light mb-8 h-10">Perfect for new businesses getting off the ground.</p>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tighter text-slate-900">2%</span>
<span className="text-sm text-slate-500 font-light">/ txn</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-600 font-light">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> No setup fee
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600 font-light">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Instant settlement
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600 font-light">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Standard support
                        </li>
</ul>
<a className="block w-full py-3 px-4 bg-slate-50 border border-slate-200 text-slate-700 text-center text-sm font-medium rounded-xl hover:bg-slate-100 transition-colors" href="#">Get Started</a>
</div>

<div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl shadow-slate-900/20 flex flex-col relative transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] uppercase tracking-wider font-semibold rounded-full shadow-sm">Popular</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Growth</h3>
<p className="text-sm text-slate-400 font-light mb-8 h-10">Optimized for scaling companies with volume.</p>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tighter text-white">1.5%</span>
<span className="text-sm text-slate-400 font-light">/ txn</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300 font-light">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> No setup fee
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300 font-light">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Instant settlement
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300 font-light">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> 24/7 priority support
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300 font-light">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Advanced analytics
                        </li>
</ul>
<a className="block w-full py-3 px-4 bg-white text-slate-900 text-center text-sm font-medium rounded-xl hover:bg-slate-50 transition-colors shadow-sm" href="#">Scale Now</a>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Enterprise</h3>
<p className="text-sm text-slate-500 font-light mb-8 h-10">Custom tailored solutions for large organizations.</p>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tighter text-slate-900">Custom</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-600 font-light">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Volume discounts
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600 font-light">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Dedicated account manager
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600 font-light">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Custom SLAs
                        </li>
</ul>
<a className="block w-full py-3 px-4 bg-slate-50 border border-slate-200 text-slate-700 text-center text-sm font-medium rounded-xl hover:bg-slate-100 transition-colors" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col">
<div className="flex gap-1 text-slate-900 mb-6">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 text-base font-light leading-relaxed mb-8 flex-1">"Switching to BHUPAY was the best operational decision we made. The integration was incredibly seamless, and our global conversion rates increased immediately."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 font-medium text-xs">SJ</div>
<div>
<h5 className="text-sm font-medium text-slate-900">Sarah Jenkins</h5>
<p className="text-xs text-slate-500 font-light">CTO, TechFlow</p>
</div>
</div>
</div>

<div className="flex flex-col">
<div className="flex gap-1 text-slate-900 mb-6">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 text-base font-light leading-relaxed mb-8 flex-1">"As a global marketplace, handling complex routing and payouts was a nightmare. BHUPAY simplified our entire financial stack."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 font-medium text-xs">MR</div>
<div>
<h5 className="text-sm font-medium text-slate-900">Michael Ross</h5>
<p className="text-xs text-slate-500 font-light">Founder, MarketConnect</p>
</div>
</div>
</div>

<div className="flex flex-col">
<div className="flex gap-1 text-slate-900 mb-6">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 text-base font-light leading-relaxed mb-8 flex-1">"The smart dashboard provides a level of insight into our revenue that we didn't have before. It saves our finance team hours of manual reconciliation."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 font-medium text-xs">EL</div>
<div>
<h5 className="text-sm font-medium text-slate-900">Elena Lin</h5>
<p className="text-xs text-slate-500 font-light">VP Finance, ScaleUp</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-xl font-semibold tracking-tighter text-slate-900 mb-4 block" href="#">BHUPAY</a>
<p className="text-sm text-slate-500 font-light max-w-xs mb-6 leading-relaxed">
                        Building the modern economic infrastructure for the internet. Fast, secure, and infinitely scalable.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:twitter-linear"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:github-linear"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:linkedin-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Products</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 font-light hover:text-slate-900 transition-colors" href="#">Payments</a></li>
<li><a className="text-sm text-slate-500 font-light hover:text-slate-900 transition-colors" href="#">Billing</a></li>
<li><a className="text-sm text-slate-500 font-light hover:text-slate-900 transition-colors" href="#">Connect</a></li>
<li><a className="text-sm text-slate-500 font-light hover:text-slate-900 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Developers</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 font-light hover:text-slate-900 transition-colors" href="#">Documentation</a></li>
<li><a className="text-sm text-slate-500 font-light hover:text-slate-900 transition-colors" href="#">API Reference</a></li>
<li><a className="text-sm text-slate-500 font-light hover:text-slate-900 transition-colors" href="#">Status</a></li>
<li><a className="text-sm text-slate-500 font-light hover:text-slate-900 transition-colors" href="#">GitHub</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 font-light hover:text-slate-900 transition-colors" href="#">About</a></li>
<li><a className="text-sm text-slate-500 font-light hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-slate-500 font-light hover:text-slate-900 transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-slate-500 font-light hover:text-slate-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400 font-light">© 2026 BHUPAY. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-400 font-light hover:text-slate-600 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-slate-400 font-light hover:text-slate-600 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
