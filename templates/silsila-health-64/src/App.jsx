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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
50: '#f8fafc',
100: '#f1f5f9',
200: '#e2e8f0',
300: '#cbd5e1',
400: '#94a3b8',
500: '#64748b',
600: '#475569',
700: '#334155',
800: '#1e293b',
900: '#0f172a',
950: '#020617',
},
teal: {
50: '#f0fdfa',
100: '#ccfbf1',
500: '#14b8a6',
600: '#0d9488',
700: '#0f766e',
800: '#115e59',
900: '#134e4a',
950: '#042f2e',
}
}
}
}
}



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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-3">
<div className="flex flex-col">
<span className="text-lg font-semibold text-slate-900 tracking-tight leading-none uppercase">Silsila</span>
<span className="text-xs text-slate-500 font-medium tracking-wide mt-0.5">Ministry of Health</span>
</div>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Platform</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Solutions</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Compliance</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Data &amp; Analytics</a>
</div>

<div className="hidden md:flex items-center space-x-4">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Sign In</a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-sm" href="#">
                        Request Demo
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-slate-900 focus:outline-none">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTUsIDIzLCA0MiwgMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200/60 mb-6">
<div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div>
<span className="text-xs font-medium text-slate-700 tracking-wide uppercase">National Digital Initiative</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                        End-to-End Pharmaceutical <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-emerald-600">Visibility &amp; Control.</span>
</h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                        The centralized national intelligence platform for secure, compliant, and data-driven healthcare supply chains. Ensuring product integrity from manufacturer to patient.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-sm group" href="#">
                            Explore Platform
                            <iconify-icon className="ml-2 text-lg group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors shadow-sm" href="#">
                            View Documentation
                        </a>
</div>
</div>

<div className="relative lg:ml-auto w-full max-w-lg aspect-square">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden flex flex-col p-6">

<div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
<div className="flex items-center gap-2">
<iconify-icon className="text-teal-600 text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-900">National Node Active</span>
</div>
<span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded">Secure</span>
</div>

<div className="flex-1 relative">

<svg className="absolute inset-0 w-full h-full" style={{zIndex: '0'}}>
<path className="animate-[dash_20s_linear_infinite]" d="M 40 40 L 150 120 L 280 60" fill="none" stroke="#e2e8f0" stroke-dasharray="4 4" strokeWidth="2"></path>
<path d="M 40 180 L 150 120" fill="none" stroke="#e2e8f0" stroke-dasharray="4 4" strokeWidth="2"></path>
</svg>
<style>
                                @keyframes dash { to { stroke-dashoffset: -100; } }
                            </style>

<div className="absolute top-4 left-4 bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex items-center gap-3 z-10 w-40">
<div className="w-8 h-8 rounded-md bg-slate-50 border border-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-500" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Supplier</span>
<span className="text-[10px] text-slate-500">Verified</span>
</div>
</div>
<div className="absolute bottom-10 left-4 bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex items-center gap-3 z-10 w-40">
<div className="w-8 h-8 rounded-md bg-slate-50 border border-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-500" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Batch A-92</span>
<span className="text-[10px] text-teal-600">Serialized</span>
</div>
</div>
<div className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-4 rounded-lg border border-teal-500/20 shadow-md flex items-center gap-3 z-10 w-48 ring-1 ring-teal-500/10">
<div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center">
<iconify-icon className="text-teal-600 text-lg" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900 tracking-tight">In Transit</span>
<span className="text-xs text-slate-500 mt-0.5">Central Hub → Regional</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-white py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Integrated with National Infrastructure</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">

<div className="flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:hospital-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-semibold tracking-tight text-slate-800 uppercase">Ministry of Health</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-semibold tracking-tight text-slate-800 uppercase">Drug Authority</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-semibold tracking-tight text-slate-800 uppercase">Customs &amp; Border</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:card-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-semibold tracking-tight text-slate-800 uppercase">Central Bank</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Comprehensive Supply Chain Governance</h2>
<p className="text-slate-600">A unified, modular architecture designed to manage the complexities of national pharmaceutical distribution, compliance, and procurement.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:bg-teal-50 group-hover:border-teal-100 transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-teal-600 text-xl" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Supplier Management</h3>
<p className="text-sm text-slate-500 leading-relaxed">Streamlined onboarding, compliance verification, and performance monitoring for local and global pharmaceutical suppliers.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:bg-teal-50 group-hover:border-teal-100 transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-teal-600 text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Product Governance</h3>
<p className="text-sm text-slate-500 leading-relaxed">Centralized registry for drug classifications, automated serialization checks, and regulatory compliance mapping.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:bg-teal-50 group-hover:border-teal-100 transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-teal-600 text-xl" icon="solar:cart-large-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Digital Procurement</h3>
<p className="text-sm text-slate-500 leading-relaxed">End-to-end tender management, automated purchase orders, and contract lifecycle administration for health facilities.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:bg-teal-50 group-hover:border-teal-100 transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-teal-600 text-xl" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Tracking &amp; Fulfillment</h3>
<p className="text-sm text-slate-500 leading-relaxed">Real-time visibility into inventory movement, batch-level track &amp; trace, and proof of delivery across the logistics network.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:bg-teal-50 group-hover:border-teal-100 transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-teal-600 text-xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">E-Invoicing &amp; Settlement</h3>
<p className="text-sm text-slate-500 leading-relaxed">Automated three-way matching, integration with national tax authorities, and secure financial settlement protocols.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:bg-teal-50 group-hover:border-teal-100 transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-teal-600 text-xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">AI &amp; Predictive Analytics</h3>
<p className="text-sm text-slate-500 leading-relaxed">Demand forecasting, anomaly detection for counterfeits, and strategic insights for national healthcare resource planning.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">The Silsila Lifecycle</h2>
<p className="text-slate-600 max-w-2xl mx-auto">A seamless, verifiable flow of goods and data from manufacturer to patient.</p>
</div>
<div className="relative">

<div aria-hidden="true" className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-slate-200"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8">

<div className="relative flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-4 z-10 relative">
<iconify-icon className="text-slate-600 text-2xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute -right-1 -top-1 w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-medium flex items-center justify-center border-2 border-white">1</div>
</div>
<h4 className="text-sm font-medium text-slate-900 mb-2">Onboarding</h4>
<p className="text-xs text-slate-500 px-2">Suppliers register and verify credentials.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-4 z-10 relative">
<iconify-icon className="text-slate-600 text-2xl" icon="solar:cart-large-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute -right-1 -top-1 w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-medium flex items-center justify-center border-2 border-white">2</div>
</div>
<h4 className="text-sm font-medium text-slate-900 mb-2">Procurement</h4>
<p className="text-xs text-slate-500 px-2">Hospitals issue digital purchase orders.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-white border-2 border-teal-500 flex items-center justify-center mb-4 z-10 relative shadow-[0_0_15px_-3px_rgba(20,184,166,0.4)]">
<iconify-icon className="text-teal-600 text-2xl" icon="solar:barcode-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute -right-1 -top-1 w-5 h-5 rounded-full bg-teal-600 text-white text-[10px] font-medium flex items-center justify-center border-2 border-white">3</div>
</div>
<h4 className="text-sm font-medium text-slate-900 mb-2">Serialization</h4>
<p className="text-xs text-slate-500 px-2">Unique national codes generated for tracking.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-4 z-10 relative">
<iconify-icon className="text-slate-600 text-2xl" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute -right-1 -top-1 w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-medium flex items-center justify-center border-2 border-white">4</div>
</div>
<h4 className="text-sm font-medium text-slate-900 mb-2">Distribution</h4>
<p className="text-xs text-slate-500 px-2">Movement tracked across supply nodes.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-4 z-10 relative">
<iconify-icon className="text-slate-600 text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute -right-1 -top-1 w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-medium flex items-center justify-center border-2 border-white">5</div>
</div>
<h4 className="text-sm font-medium text-slate-900 mb-2">Dispensation</h4>
<p className="text-xs text-slate-500 px-2">Verification upon delivery to patient/facility.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 text-slate-300 overflow-hidden relative">

<div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-600 rounded-full blur-[120px]"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-600 rounded-full blur-[120px]"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Command Center Intelligence</h2>
<p className="text-slate-400 max-w-2xl mx-auto">Gain a macro and micro view of the entire national pharmaceutical network. Real-time dashboards built for decision makers.</p>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden flex flex-col ring-1 ring-white/10">

<div className="h-12 border-b border-slate-800 flex items-center px-4 justify-between bg-slate-900/50">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
</div>
<div className="text-xs font-medium text-slate-500">Silsila Network Monitor v2.4</div>
<div className="w-16"></div> 
</div>

<div className="flex h-[500px]">

<div className="w-16 md:w-56 border-r border-slate-800 p-4 flex flex-col gap-4 bg-slate-900/50">
<div className="hidden md:flex items-center gap-2 mb-4 px-2">
<div className="w-6 h-6 rounded bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
<iconify-icon className="text-teal-400 text-xs" icon="solar:global-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-300">National Overview</span>
</div>
<div className="w-full h-8 rounded bg-slate-800/50 hidden md:block"></div>
<div className="w-3/4 h-8 rounded bg-slate-800/30 hidden md:block"></div>
<div className="w-5/6 h-8 rounded bg-slate-800/30 hidden md:block"></div>
<div className="w-8 h-8 rounded bg-slate-800/50 md:hidden mx-auto"></div>
<div className="w-8 h-8 rounded bg-slate-800/30 md:hidden mx-auto"></div>
</div>

<div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">

<div className="col-span-1 md:col-span-3 grid grid-cols-3 gap-4 h-24">
<div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 flex flex-col justify-between">
<span className="text-[10px] text-slate-400 uppercase tracking-wider">Active Shipments</span>
<div className="flex items-end justify-between">
<span className="text-2xl font-semibold text-white tracking-tight">12,482</span>
<span className="text-xs text-teal-400">+4.2%</span>
</div>
</div>
<div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 flex flex-col justify-between">
<span className="text-[10px] text-slate-400 uppercase tracking-wider">Anomalies Detected</span>
<div className="flex items-end justify-between">
<span className="text-2xl font-semibold text-white tracking-tight">3</span>
<span className="text-xs text-emerald-400">Resolved</span>
</div>
</div>
<div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 flex flex-col justify-between">
<span className="text-[10px] text-slate-400 uppercase tracking-wider">System Health</span>
<div className="flex items-end justify-between">
<span className="text-2xl font-semibold text-white tracking-tight">99.9%</span>
<div className="w-2 h-2 rounded-full bg-teal-500 mb-1.5 shadow-[0_0_10px_rgba(20,184,166,0.8)]"></div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 relative overflow-hidden flex flex-col">
<div className="text-xs font-medium text-slate-300 mb-4">Live Tracking Map</div>
<div className="flex-1 relative border border-slate-700/30 rounded-lg bg-slate-900/50 flex items-center justify-center">

<svg className="opacity-40" height="100%" width="100%">
<circle cx="20%" cy="30%" fill="#14b8a6" r="3"></circle>
<circle cx="50%" cy="60%" fill="#14b8a6" r="4"></circle>
<circle cx="80%" cy="40%" fill="#14b8a6" r="3"></circle>
<circle cx="35%" cy="75%" fill="#94a3b8" r="2"></circle>
<path d="M 20% 30% L 50% 60% L 80% 40%" fill="none" stroke="#0d9488" stroke-dasharray="2 2" strokeWidth="1"></path>
<path d="M 50% 60% L 35% 75%" fill="none" stroke="#475569" strokeWidth="1"></path>
</svg>

<div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(20,184,166,0)_0%,rgba(20,184,166,0.1)_25%,rgba(20,184,166,0)_50%)] animate-[spin_4s_linear_infinite]"></div>
</div>
</div>

<div className="col-span-1 bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 flex flex-col">
<div className="text-xs font-medium text-slate-300 mb-4">Recent Activity</div>
<div className="flex-1 flex flex-col gap-3">
<div className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5"></div>
<div>
<div className="text-xs text-slate-300">Batch #992 Cleared</div>
<div className="text-[10px] text-slate-500">2 mins ago • Customs</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
<div>
<div className="text-xs text-slate-300">PO #441 Issued</div>
<div className="text-[10px] text-slate-500">14 mins ago • Central Hosp.</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5"></div>
<div>
<div className="text-xs text-slate-300">Stock Replenished</div>
<div className="text-[10px] text-slate-500">1 hr ago • Regional Hub North</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 mb-6">
<iconify-icon className="text-teal-600 text-2xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Predictive Analytics &amp; AI</h2>
<p className="text-slate-600 mb-6 leading-relaxed">
                        Silsila doesn't just track data; it interprets it. Utilizing machine learning models trained on national consumption patterns, the platform predicts shortages, identifies counterfeit risks, and optimizes procurement budgets automatically.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-500 mt-0.5 text-lg flex-shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-slate-900">Demand Forecasting</h4>
<p className="text-xs text-slate-500 mt-1">Anticipate critical medicine requirements before local shortages occur.</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-500 mt-0.5 text-lg flex-shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-slate-900">Anomaly Detection</h4>
<p className="text-xs text-slate-500 mt-1">AI-driven identification of irregular supply routes or suspected counterfeit serials.</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-500 mt-0.5 text-lg flex-shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-slate-900">Spend Optimization</h4>
<p className="text-xs text-slate-500 mt-1">Analyze national procurement data to consolidate orders and reduce costs.</p>
</div>
</li>
</ul>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="col-span-2 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between min-h-[200px]">
<div className="flex justify-between items-center mb-4">
<span className="text-sm font-medium text-slate-900">Predicted Shortage Risk</span>
<span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded">Next 30 Days</span>
</div>

<div className="flex items-end gap-2 h-24 mt-auto">
<div className="w-full bg-slate-200 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-slate-200 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-slate-200 rounded-t-sm h-[25%]"></div>
<div className="w-full bg-slate-200 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-teal-500 rounded-t-sm h-[85%] relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">Alert</div>
</div>
<div className="w-full bg-slate-200 rounded-t-sm h-[50%]"></div>
</div>
</div>
<div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
<iconify-icon className="text-slate-400 text-2xl mb-3" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-xs text-slate-500 mb-1">Contract Compliance</div>
<div className="text-xl font-semibold text-slate-900 tracking-tight">98.4%</div>
</div>
<div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
<iconify-icon className="text-slate-400 text-2xl mb-3" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-xs text-slate-500 mb-1">Counterfeit Blocked</div>
<div className="text-xl font-semibold text-slate-900 tracking-tight">1,204</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-50/50 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Transform National Healthcare Supply Chains</h2>
<p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                Join the network of compliant suppliers, distributors, and healthcare facilities operating on the unified Silsila platform.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-sm" href="#">
                    Request Integration Guide
                </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors shadow-sm" href="#">
                    Contact Implementation Team
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex flex-col mb-4">
<span className="text-lg font-semibold text-slate-900 tracking-tight leading-none uppercase">Silsila</span>
<span className="text-xs text-slate-500 font-medium tracking-wide mt-1">Ministry of Health Platform</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                        The national system for pharmaceutical track &amp; trace, ensuring quality, compliance, and efficiency across the healthcare supply chain.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Platform Modules</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">Supplier Portal</a></li>
<li><a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">Digital Procurement</a></li>
<li><a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">Track &amp; Trace</a></li>
<li><a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">E-Invoicing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">Documentation</a></li>
<li><a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">API Reference</a></li>
<li><a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">Compliance Guidelines</a></li>
<li><a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">System Status</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Support</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">Help Center</a></li>
<li><a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">Contact Technical Support</a></li>
<li><a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">Report an Issue</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">
                    © 2023 Ministry of Health - Silsila Digital Initiative. All rights reserved.
                </p>
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-slate-600 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-slate-400 hover:text-slate-600 transition-colors" href="#">Terms of Service</a>
<a className="text-xs text-slate-400 hover:text-slate-600 transition-colors" href="#">Security</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
