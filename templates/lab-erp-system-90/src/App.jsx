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
      
<main className="flex-grow w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

<header className="mb-16 lg:mb-24 max-w-3xl">
<div className="tracking-tighter text-sm font-medium text-zinc-900 mb-8">LABERP</div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 mb-4">System overview</h1>
<p className="text-base sm:text-lg text-zinc-500 font-normal leading-relaxed">
                16 integrated modules · Multi-branch · Cloud + On-premise · HIPAA-grade security
            </p>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 mt-12 pt-12 border-t border-zinc-200/80">
<div className="flex flex-col gap-1">
<span className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-900">16</span>
<span className="text-xs font-medium text-zinc-500 tracking-wide uppercase">Modules</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-900">6</span>
<span className="text-xs font-medium text-zinc-500 tracking-wide uppercase">Tech layers</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-900">4</span>
<span className="text-xs font-medium text-zinc-500 tracking-wide uppercase">Deploy modes</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-900">AI</span>
<span className="text-xs font-medium text-zinc-500 tracking-wide uppercase">Powered features</span>
</div>
</div>
</header>

<section className="mb-16 lg:mb-24">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-900">
                    Core modules <span className="text-zinc-400 font-normal ml-2">— click to explore</span>
</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">

<div className="group bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-6 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] cursor-pointer flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="text-zinc-600 group-hover:text-zinc-900 transition-colors">
<iconify-icon height="24" icon="solar:user-rounded-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded-md border border-zinc-100">Core</span>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1.5">Patient management</h3>
<p className="text-xs text-zinc-500 leading-relaxed mt-auto">Full patient lifecycle from registration to portal access</p>
</div>

<div className="group bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-6 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] cursor-pointer flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="text-zinc-600 group-hover:text-zinc-900 transition-colors">
<iconify-icon height="24" icon="solar:test-tube-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded-md border border-zinc-100">Core</span>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1.5">Test &amp; sample management</h3>
<p className="text-xs text-zinc-500 leading-relaxed mt-auto">End-to-end sample tracking with barcode/QR labeling</p>
</div>

<div className="group bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-6 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] cursor-pointer flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="text-zinc-600 group-hover:text-zinc-900 transition-colors">
<iconify-icon height="24" icon="solar:flask-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded-md border border-zinc-100">Core</span>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1.5">Lab processing</h3>
<p className="text-xs text-zinc-500 leading-relaxed mt-auto">Technician tools, analyzer integration, and QC management</p>
</div>

<div className="group bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-6 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] cursor-pointer flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="text-zinc-600 group-hover:text-zinc-900 transition-colors">
<iconify-icon height="24" icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded-md border border-zinc-100">Core</span>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1.5">Report management</h3>
<p className="text-xs text-zinc-500 leading-relaxed mt-auto">Auto-generated reports with digital signatures and delivery</p>
</div>

<div className="group bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-6 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] cursor-pointer flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="text-zinc-600 group-hover:text-zinc-900 transition-colors">
<iconify-icon height="24" icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded-md border border-zinc-100">Revenue</span>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1.5">Billing &amp; finance</h3>
<p className="text-xs text-zinc-500 leading-relaxed mt-auto">Full billing cycle from pricing to refunds and analytics</p>
</div>

<div className="group bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-6 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] cursor-pointer flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="text-zinc-600 group-hover:text-zinc-900 transition-colors">
<iconify-icon height="24" icon="solar:user-speak-rounded-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded-md border border-zinc-100">Revenue</span>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1.5">Doctor &amp; referral mgmt</h3>
<p className="text-xs text-zinc-500 leading-relaxed mt-auto">Referring doctor database with commission tracking</p>
</div>

<div className="group bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-6 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] cursor-pointer flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="text-zinc-600 group-hover:text-zinc-900 transition-colors">
<iconify-icon height="24" icon="solar:box-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded-md border border-zinc-100">Ops</span>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1.5">Inventory &amp; consumables</h3>
<p className="text-xs text-zinc-500 leading-relaxed mt-auto">Reagent and kit tracking with automated low-stock alerts</p>
</div>

<div className="group bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-6 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] cursor-pointer flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="text-zinc-600 group-hover:text-zinc-900 transition-colors">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded-md border border-zinc-100">Ops</span>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1.5">HR &amp; staff management</h3>
<p className="text-xs text-zinc-500 leading-relaxed mt-auto">Staff profiles, shifts, attendance and payroll</p>
</div>

<div className="group bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-6 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] cursor-pointer flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="text-zinc-600 group-hover:text-zinc-900 transition-colors">
<iconify-icon height="24" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded-md border border-zinc-100">Insights</span>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1.5">Analytics &amp; dashboard</h3>
<p className="text-xs text-zinc-500 leading-relaxed mt-auto">Real-time dashboards across branches, revenue and equipment</p>
</div>

<div className="group bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-6 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] cursor-pointer flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="text-zinc-600 group-hover:text-zinc-900 transition-colors">
<iconify-icon height="24" icon="solar:bell-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded-md border border-zinc-100">Workflow</span>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1.5">Automation &amp; notifications</h3>
<p className="text-xs text-zinc-500 leading-relaxed mt-auto">Smart automated alerts across the full patient journey</p>
</div>

<div className="group bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-6 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] cursor-pointer flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="text-zinc-600 group-hover:text-zinc-900 transition-colors">
<iconify-icon height="24" icon="solar:monitor-smartphone-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded-md border border-zinc-100">Portal</span>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1.5">Patient &amp; doctor portals</h3>
<p className="text-xs text-zinc-500 leading-relaxed mt-auto">Self-service portals for patients and referring doctors</p>
</div>

<div className="group bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-6 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] cursor-pointer flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="text-zinc-600 group-hover:text-zinc-900 transition-colors">
<iconify-icon height="24" icon="solar:shield-keyhole-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded-md border border-zinc-100">HIPAA</span>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1.5">Security &amp; compliance</h3>
<p className="text-xs text-zinc-500 leading-relaxed mt-auto">HIPAA-grade security, audit trails, and access controls</p>
</div>

<div className="group bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-6 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] cursor-pointer flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="text-zinc-600 group-hover:text-zinc-900 transition-colors">
<iconify-icon height="24" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded-md border border-zinc-100">Advanced</span>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1.5">AI features</h3>
<p className="text-xs text-zinc-500 leading-relaxed mt-auto">Intelligent automation across results, inventory, and interaction</p>
</div>

<div className="group bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-6 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] cursor-pointer flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="text-zinc-600 group-hover:text-zinc-900 transition-colors">
<iconify-icon height="24" icon="solar:layers-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded-md border border-zinc-100">Foundation</span>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1.5">Core system</h3>
<p className="text-xs text-zinc-500 leading-relaxed mt-auto">Multi-tenant, multi-branch platform with enterprise reliability</p>
</div>

<div className="group bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-6 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] cursor-pointer flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="text-zinc-600 group-hover:text-zinc-900 transition-colors">
<iconify-icon height="24" icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded-md border border-zinc-100">Flexible</span>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1.5">Deployment modes</h3>
<p className="text-xs text-zinc-500 leading-relaxed mt-auto">Four deployment configurations to fit any business model</p>
</div>

<div className="group bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-6 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] cursor-pointer flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="text-zinc-600 group-hover:text-zinc-900 transition-colors">
<iconify-icon height="24" icon="solar:code-square-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded-md border border-zinc-100">Dev</span>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1.5">API &amp; integrations</h3>
<p className="text-xs text-zinc-500 leading-relaxed mt-auto">HL7/FHIR APIs, analyzer connections, and webhook support</p>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

<section className="lg:col-span-2 bg-zinc-900 rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col sm:flex-row gap-8 sm:gap-12 items-center sm:items-start justify-between border border-zinc-800 shadow-xl">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-zinc-800/30 blur-3xl rounded-full pointer-events-none"></div>
<div className="z-10 w-full sm:w-1/2">
<div className="inline-flex items-center gap-2 text-zinc-400 mb-6">
<iconify-icon height="20" icon="solar:user-speak-rounded-linear" width="20"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium">Deep Dive Module</span>
</div>
<h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-3">Doctor &amp; referral mgmt</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-8">Referring doctor database with comprehensive commission tracking, automated payouts, and powerful analytics.</p>
<a className="group inline-flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300 transition-colors" href="#">
                        Deep-dive this module
                        <iconify-icon className="transform group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="z-10 w-full sm:w-1/2">
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-zinc-300">Referring doctor database</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-zinc-300">Commission tracking &amp; calculation</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-zinc-300">Referral analytics</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-zinc-300">Doctor portal access</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-zinc-300">Online prescription upload</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-zinc-300">Automated payouts</span>
</li>
</ul>
</div>
</section>

<section className="bg-white rounded-3xl p-8 sm:p-10 border border-zinc-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between h-full">
<div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-6">Tech stack</h3>
<div className="flex flex-col gap-3">
<div className="flex items-baseline justify-between border-b border-zinc-100 pb-2">
<span className="text-sm font-medium text-zinc-800">React / Next.js</span>
<span className="text-xs text-zinc-400">Frontend</span>
</div>
<div className="flex items-baseline justify-between border-b border-zinc-100 pb-2">
<span className="text-sm font-medium text-zinc-800">Node.js / NestJS</span>
<span className="text-xs text-zinc-400">Backend</span>
</div>
<div className="flex items-baseline justify-between border-b border-zinc-100 pb-2">
<span className="text-sm font-medium text-zinc-800">PostgreSQL</span>
<span className="text-xs text-zinc-400">Database</span>
</div>
<div className="flex items-baseline justify-between border-b border-zinc-100 pb-2">
<span className="text-sm font-medium text-zinc-800">Redis</span>
<span className="text-xs text-zinc-400">Cache</span>
</div>
<div className="flex items-baseline justify-between border-b border-zinc-100 pb-2">
<span className="text-sm font-medium text-zinc-800">Flutter / React Native</span>
<span className="text-xs text-zinc-400">Mobile</span>
</div>
<div className="flex items-baseline justify-between border-b border-zinc-100 pb-2">
<span className="text-sm font-medium text-zinc-800">AWS / Azure</span>
<span className="text-xs text-zinc-400">Cloud</span>
</div>
<div className="flex items-baseline justify-between border-b border-zinc-100 pb-2">
<span className="text-sm font-medium text-zinc-800">Docker + Kubernetes</span>
<span className="text-xs text-zinc-400">Infra</span>
</div>
<div className="flex items-baseline justify-between">
<span className="text-sm font-medium text-zinc-800">HL7 / FHIR</span>
<span className="text-xs text-zinc-400">Integrations</span>
</div>
</div>
</div>
<a className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-900 mt-8 hover:text-zinc-600 transition-colors" href="#">
                    Explore architecture
                    <iconify-icon className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</section>
</div>
</main>

    </>
  );
}
