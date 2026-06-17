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



        function navigateTo(viewId) {
            // Hide all views
            const views = document.querySelectorAll('.page-view');
            views.forEach(view => {
                view.classList.remove('block');
                view.classList.add('hidden');
            });
            
            // Show requested view
            const activeView = document.getElementById(viewId);
            if(activeView) {
                activeView.classList.remove('hidden');
                activeView.classList.add('block');
            }
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    
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
      

<header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-8">
<a className="flex items-center gap-1 text-slate-900" href="#" onclick="navigateTo('view-home')">
<span className="text-xl font-semibold tracking-tighter">BT</span>
<span className="text-sm font-medium tracking-widest text-slate-500 uppercase">Law</span>
</a>
<nav className="hidden md:block">
<ul className="flex items-center gap-6">

<li className="group relative">
<a className="flex items-center gap-1 py-4 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900" href="#" onclick="navigateTo('view-services')">
                                Services
                                <iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>

<div className="absolute left-0 top-full -mt-1 hidden w-screen max-w-2xl group-hover:block">
<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
<div className="grid grid-cols-2 gap-0">
<div className="bg-white p-6">
<h3 className="mb-3 text-xs font-semibold tracking-wider text-slate-500 uppercase">Corporate Focus</h3>
<ul className="space-y-3">
<li><a className="group flex items-start gap-3" href="#" onclick="navigateTo('view-service-detail')">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-600 group-hover:bg-slate-100 group-hover:text-slate-900">
<iconify-icon icon="solar:case-minimalistic-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Employment Visas</p>
<p className="text-xs text-slate-500">H-1B, L-1, O-1, TN applications.</p>
</div>
</a></li>
<li><a className="group flex items-start gap-3" href="#" onclick="navigateTo('view-service-detail')">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-600 group-hover:bg-slate-100 group-hover:text-slate-900">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Employer Compliance</p>
<p className="text-xs text-slate-500">I-9 audits, E-Verify, structuring.</p>
</div>
</a></li>
<li><a className="group flex items-start gap-3" href="#" onclick="navigateTo('view-service-detail')">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-600 group-hover:bg-slate-100 group-hover:text-slate-900">
<iconify-icon icon="solar:global-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Global Mobility</p>
<p className="text-xs text-slate-500">Planning international transfers.</p>
</div>
</a></li>
</ul>
</div>
<div className="bg-slate-50 p-6">
<h3 className="mb-3 text-xs font-semibold tracking-wider text-slate-500 uppercase">Individual &amp; Family</h3>
<ul className="space-y-3">
<li><a className="group flex items-start gap-3" href="#" onclick="navigateTo('view-service-detail')">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-slate-600 group-hover:text-slate-900 shadow-sm border border-slate-100">
<iconify-icon icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Family-Based Visas</p>
<p className="text-xs text-slate-500">Spousal, fiancé, and family.</p>
</div>
</a></li>
</ul>
<div className="mt-6 pt-6 border-t border-slate-200">
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 hover:text-slate-600" href="#" onclick="navigateTo('view-services')">
                                                    View all services <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</li>
<li><a className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900" href="#" onclick="navigateTo('view-home')">Team</a></li>
<li><a className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900" href="#" onclick="navigateTo('view-resources')">Resources</a></li>
</ul>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 sm:block" href="#contact">Client Portal</a>
<a className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800" href="#contact">
                    Consultation
                </a>
</div>
</div>
</header>

<div id="app-container">

<main className="page-view block" id="view-home">

<section className="relative overflow-hidden bg-white pt-24 pb-32">
<div className="absolute inset-0 z-0 opacity-40" style={{backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="absolute -right-64 -top-64 h-[500px] w-[500px] rounded-full bg-slate-50 blur-3xl"></div>
<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 mb-8 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-slate-600">Navigating complex immigration law globally</span>
</div>
<h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
                        Strategic Immigration Solutions for <span className="text-slate-500">Global Enterprises</span>
</h1>
<p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
                        We partner with corporate HR, legal teams, and executives to streamline talent acquisition, ensure strict compliance, and facilitate seamless global mobility.
                    </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-slate-800 sm:w-auto" href="#contact">
                            Schedule Corporate Consultation <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<a className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition-all hover:bg-slate-50 sm:w-auto" href="#" onclick="navigateTo('view-services')">
                            Explore Services
                        </a>
</div>
</div>
</section>

<section className="bg-slate-50 py-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-16 md:flex md:items-end md:justify-between">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Comprehensive Immigration Practice</h2>
<p className="mt-4 text-base text-slate-600">
                                We provide tailored strategies for businesses securing talent, and individuals navigating life-changing transitions.
                            </p>
</div>
<div className="mt-6 md:mt-0">
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-600" href="#" onclick="navigateTo('view-services')">
                                View All Services <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
<div className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-sm" onclick="navigateTo('view-service-detail')">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-900">
<iconify-icon icon="solar:buildings-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-medium tracking-tight text-slate-900">Corporate Immigration</h3>
<p className="text-sm text-slate-600 mb-6 line-clamp-3">
                                Strategic planning for workforce mobility. We manage the entire lifecycle of employment-based visas.
                            </p>
<span className="inline-flex items-center gap-1 text-sm font-medium text-slate-900">Learn more <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon></span>
</div>
<div className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-sm" onclick="navigateTo('view-service-detail')">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-900">
<iconify-icon icon="solar:clipboard-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-medium tracking-tight text-slate-900">Employer Compliance</h3>
<p className="text-sm text-slate-600 mb-6 line-clamp-3">
                                Proactive protection for your business. We conduct internal I-9 audits, provide E-Verify guidance, and represent companies.
                            </p>
<span className="inline-flex items-center gap-1 text-sm font-medium text-slate-900">Learn more <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon></span>
</div>
<div className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-sm" onclick="navigateTo('view-service-detail')">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-900">
<iconify-icon icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-medium tracking-tight text-slate-900">Family-Based Immigration</h3>
<p className="text-sm text-slate-600 mb-6 line-clamp-3">
                                Uniting families across borders. Comprehensive assistance with marriage-based green cards and sponsorship.
                            </p>
<span className="inline-flex items-center gap-1 text-sm font-medium text-slate-900">Learn more <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon></span>
</div>
</div>
</div>
</section>
</main>

<main className="page-view hidden" id="view-services">

<section className="border-b border-slate-200 bg-white pt-20 pb-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Our Legal Services</h1>
<p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
                        Focused entirely on U.S. Immigration and Nationality law, we deliver strategic, compliant, and efficient pathways for enterprises, investors, and families.
                    </p>
</div>
</section>

<section className="bg-slate-50 py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-sm" onclick="navigateTo('view-service-detail')">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-900">
<iconify-icon icon="solar:buildings-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-medium tracking-tight text-slate-900">Corporate Immigration</h3>
<p className="text-sm text-slate-600 mb-6">
                                Streamlined workforce mobility strategies. We handle H-1B, L-1, O-1, and TN applications for multinational corporations and startups.
                            </p>
<span className="inline-flex items-center gap-1 text-sm font-medium text-slate-900">View Details <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon></span>
</div>

<div className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-sm" onclick="navigateTo('view-service-detail')">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-900">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-medium tracking-tight text-slate-900">Employer Compliance</h3>
<p className="text-sm text-slate-600 mb-6">
                                Protect your operations. We conduct thorough internal I-9 audits, provide ongoing E-Verify guidance, and offer defense during worksite investigations.
                            </p>
<span className="inline-flex items-center gap-1 text-sm font-medium text-slate-900">View Details <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon></span>
</div>

<div className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-sm" onclick="navigateTo('view-service-detail')">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-900">
<iconify-icon icon="solar:document-add-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-medium tracking-tight text-slate-900">Permanent Residency</h3>
<p className="text-sm text-slate-600 mb-6">
                                Guidance through the complex PERM labor certification process, ensuring exact compliance with Department of Labor regulations for EB-2 and EB-3 visas.
                            </p>
<span className="inline-flex items-center gap-1 text-sm font-medium text-slate-900">View Details <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon></span>
</div>

<div className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-sm" onclick="navigateTo('view-service-detail')">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-900">
<iconify-icon icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-medium tracking-tight text-slate-900">Investor Visas</h3>
<p className="text-sm text-slate-600 mb-6">
                                Structuring E-2 Treaty Investor applications and EB-5 Immigrant Investor petitions to ensure compliance with financial and job-creation requirements.
                            </p>
<span className="inline-flex items-center gap-1 text-sm font-medium text-slate-900">View Details <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon></span>
</div>

<div className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-sm" onclick="navigateTo('view-service-detail')">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-900">
<iconify-icon icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-medium tracking-tight text-slate-900">Family-Based Immigration</h3>
<p className="text-sm text-slate-600 mb-6">
                                Uniting families. We manage marriage-based green cards, fiancé(e) visas, and sponsorship applications for immediate relatives seamlessly.
                            </p>
<span className="inline-flex items-center gap-1 text-sm font-medium text-slate-900">View Details <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon></span>
</div>

<div className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-sm" onclick="navigateTo('view-service-detail')">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-900">
<iconify-icon icon="solar:global-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-medium tracking-tight text-slate-900">Global Mobility Strategy</h3>
<p className="text-sm text-slate-600 mb-6">
                                Consulting for HR teams to build robust internal immigration policies, forecast costs, and manage a high-volume foreign national workforce.
                            </p>
<span className="inline-flex items-center gap-1 text-sm font-medium text-slate-900">View Details <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon></span>
</div>
</div>
</div>
</section>
</main>

<main className="page-view hidden" id="view-service-detail">

<div className="border-b border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
<nav className="flex text-xs font-medium text-slate-500">
<a className="hover:text-slate-900" href="#" onclick="navigateTo('view-home')">Home</a>
<span className="mx-2">/</span>
<a className="hover:text-slate-900" href="#" onclick="navigateTo('view-services')">Services</a>
<span className="mx-2">/</span>
<span className="text-slate-900">Corporate Immigration</span>
</nav>
</div>
</div>
<section className="bg-white py-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-16 lg:grid-cols-12">

<div className="lg:col-span-8">
<div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 border border-slate-100">
<iconify-icon icon="solar:buildings-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl mb-6">Corporate Immigration Solutions</h1>
<div className="prose prose-slate max-w-none text-slate-600 space-y-6">
<p className="text-base leading-relaxed">
                                    In today's global economy, access to top-tier international talent is critical for maintaining a competitive edge. However, navigating the complex web of U.S. immigration laws can be a significant bottleneck for corporate growth. Buhler Thomas Law partners with your organization to seamlessly manage employment-based visas.
                                </p>
<p className="text-base leading-relaxed">
                                    We act as an extension of your HR and legal departments, handling everything from initial candidate assessment and petition filing to strategic planning for long-term retention via permanent residency pathways.
                                </p>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mt-12 mb-4">Key Visa Categories We Manage</h3>
<div className="grid sm:grid-cols-2 gap-4 mt-6">
<div className="rounded-xl border border-slate-200 p-5">
<h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2 mb-2">
<iconify-icon className="text-slate-400" icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon> H-1B Specialty Occupation
                                        </h4>
<p className="text-xs text-slate-600">For professionals in specialty fields requiring a bachelor's degree or higher. We manage lottery registrations, LCA compliance, and complex RFEs.</p>
</div>
<div className="rounded-xl border border-slate-200 p-5">
<h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2 mb-2">
<iconify-icon className="text-slate-400" icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon> L-1 Intracompany Transferee
                                        </h4>
<p className="text-xs text-slate-600">Facilitating the transfer of executives, managers (L-1A), and specialized knowledge employees (L-1B) from foreign affiliates to the U.S.</p>
</div>
<div className="rounded-xl border border-slate-200 p-5">
<h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2 mb-2">
<iconify-icon className="text-slate-400" icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon> O-1 Extraordinary Ability
                                        </h4>
<p className="text-xs text-slate-600">For individuals with a record of extraordinary achievement in sciences, arts, education, business, or athletics. Ideal for startup founders and top-tier researchers.</p>
</div>
<div className="rounded-xl border border-slate-200 p-5">
<h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2 mb-2">
<iconify-icon className="text-slate-400" icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon> TN NAFTA Professionals
                                        </h4>
<p className="text-xs text-slate-600">Streamlined temporary work authorization for qualifying Canadian and Mexican citizens in specific professional categories under the USMCA.</p>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mt-12 mb-4">Our Corporate Advantage</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="mt-0.5 text-slate-400 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span><strong>Predictable Flat-Fee Pricing:</strong> Clear budgeting for your HR department with no hidden hourly charges for routine applications.</span>
</li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="mt-0.5 text-slate-400 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span><strong>Technology-Driven Workflow:</strong> Secure client portal for document uploads, real-time case status tracking, and automated expiration reminders.</span>
</li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="mt-0.5 text-slate-400 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span><strong>Strategic Forecasting:</strong> We don't just file paperwork; we build 3-to-5 year roadmaps for your key personnel to transition from temporary visas to permanent residency.</span>
</li>
</ul>
</div>
</div>

<div className="lg:col-span-4">
<div className="sticky top-24 space-y-6">

<div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
<h3 className="text-sm font-semibold text-slate-900 mb-2">Need guidance on this service?</h3>
<p className="text-xs text-slate-600 mb-6">Schedule a brief discovery call with our corporate immigration team to discuss your hiring needs.</p>
<a className="flex w-full items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-slate-800" href="#contact">
                                        Book Consultation
                                    </a>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6">
<h3 className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-4">Related Services</h3>
<div className="space-y-3">
<a className="group flex items-center justify-between text-sm font-medium text-slate-600 hover:text-slate-900" href="#">
                                            Employer Compliance (I-9)
                                            <iconify-icon className="opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
<div className="h-px w-full bg-slate-100"></div>
<a className="group flex items-center justify-between text-sm font-medium text-slate-600 hover:text-slate-900" href="#">
                                            Permanent Residency (PERM)
                                            <iconify-icon className="opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
<div className="h-px w-full bg-slate-100"></div>
<a className="group flex items-center justify-between text-sm font-medium text-slate-600 hover:text-slate-900" href="#">
                                            Global Mobility Strategy
                                            <iconify-icon className="opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page-view hidden" id="view-resources">

<section className="border-b border-slate-200 bg-white pt-20 pb-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Immigration Resources</h1>
<p className="mt-4 text-lg text-slate-600 max-w-2xl">
                        Stay informed with the latest policy updates, compliance guides, and strategic insights for navigating U.S. immigration.
                    </p>
</div>
</section>
<section className="bg-slate-50 py-12 min-h-screen">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

<div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex overflow-x-auto pb-2 sm:pb-0 no-scrollbar gap-2">
<button className="shrink-0 rounded-full bg-slate-900 px-4 py-1.5 text-sm font-medium text-white transition-colors">All Categories</button>
<button className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900">Updates</button>
<button className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900">Guides</button>
<button className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900">Webinars</button>
</div>
<div className="relative max-w-xs w-full">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<input className="w-full rounded-full border border-slate-200 bg-white py-1.5 pl-9 pr-4 text-sm text-slate-900 outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all" placeholder="Search resources..." type="text"/>
</div>
</div>

<a className="group mb-10 flex flex-col md:flex-row overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-slate-300 hover:shadow-sm" href="#">
<div className="md:w-2/5 bg-slate-100 relative aspect-video md:aspect-auto flex items-center justify-center text-slate-300">

<iconify-icon icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="64"></iconify-icon>
</div>
<div className="md:w-3/5 p-8 sm:p-10 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">Comprehensive Guide</span>
<span className="text-xs text-slate-400">Published Sep 12, 2023</span>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4 group-hover:underline decoration-slate-300 underline-offset-4">The Complete HR Manager's Guide to I-9 Compliance Audits</h2>
<p className="text-slate-600 mb-8 line-clamp-3">
                                A comprehensive, actionable checklist for HR teams to ensure structural compliance, prepare for potential ICE audits, properly handle remote verification procedures, and avoid costly corporate fines.
                            </p>
<div className="inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                                Read Full Guide <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</a>

<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
<a className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-sm" href="#">
<div>
<div className="flex items-center justify-between mb-4">
<span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">Policy Update</span>
<span className="text-xs text-slate-400">Oct 24, 2023</span>
</div>
<h3 className="mb-2 text-lg font-medium tracking-tight text-slate-900 group-hover:underline decoration-slate-300 underline-offset-4">Changes to USCIS Premium Processing Fees for 2024</h3>
<p className="text-sm text-slate-600 line-clamp-3">
                                    An overview of the recent DHS announcement regarding fee increases for form I-907 and how it impacts corporate budgeting for upcoming petitions.
                                </p>
</div>
<div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-900">
                                Read Article <iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</a>
<a className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-sm" href="#">
<div>
<div className="flex items-center justify-between mb-4">
<span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">Work Visas</span>
<span className="text-xs text-slate-400">Aug 05, 2023</span>
</div>
<h3 className="mb-2 text-lg font-medium tracking-tight text-slate-900 group-hover:underline decoration-slate-300 underline-offset-4">H-1B Cap Season Preparation: Strategies for Employers</h3>
<p className="text-sm text-slate-600 line-clamp-3">
                                    Learn how to proactively identify candidates, gather necessary documentation, and formulate backup strategies (like L-1 or O-1) ahead of the lottery.
                                </p>
</div>
<div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-900">
                                Read Article <iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</a>
<a className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-sm" href="#">
<div>
<div className="flex items-center justify-between mb-4">
<span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">Global Mobility</span>
<span className="text-xs text-slate-400">Jul 19, 2023</span>
</div>
<h3 className="mb-2 text-lg font-medium tracking-tight text-slate-900 group-hover:underline decoration-slate-300 underline-offset-4">L-1 vs. H-1B: Choosing the Right Pathway for Transfers</h3>
<p className="text-sm text-slate-600 line-clamp-3">
                                    A comparative analysis to help multinational executives decide which visa category best fits their international relocation timelines and company structure.
                                </p>
</div>
<div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-900">
                                Read Article <iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</a>
</div>
<div className="mt-10 text-center">
<button className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50">
                            Load More Resources
                        </button>
</div>
</div>
</section>
</main>
</div> 

<footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-12 lg:grid-cols-4">
<div className="lg:col-span-1">
<a className="flex items-center gap-1 text-white mb-6" href="#" onclick="navigateTo('view-home')">
<span className="text-xl font-semibold tracking-tighter">BT</span>
<span className="text-sm font-medium tracking-widest text-slate-400 uppercase">Law</span>
</a>
<p className="text-sm text-slate-400 mb-6">
                        Strategic, corporate-focused immigration law firm dedicated to providing clear solutions to complex global mobility challenges.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:target-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Practice Areas</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#" onclick="navigateTo('view-services')">Corporate Immigration</a></li>
<li><a className="hover:text-white transition-colors" href="#" onclick="navigateTo('view-services')">Employment Visas (H/L/O/TN)</a></li>
<li><a className="hover:text-white transition-colors" href="#" onclick="navigateTo('view-services')">Employer Compliance (I-9)</a></li>
<li><a className="hover:text-white transition-colors" href="#" onclick="navigateTo('view-services')">Permanent Residency (PERM)</a></li>
<li><a className="hover:text-white transition-colors" href="#" onclick="navigateTo('view-services')">Family Immigration</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Firm</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#" onclick="navigateTo('view-home')">Our Team</a></li>
<li><a className="hover:text-white transition-colors" href="#" onclick="navigateTo('view-resources')">Resources &amp; Insights</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Client Portal Login</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>123 Corporate Plaza, Suite 400<br/>Business District, State 12345</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>(555) 123-4567</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>info@buhlerthomaslaw.com</span>
</li>
</ul>
</div>
</div>
<div className="mt-16 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2023 Buhler Thomas Law. All rights reserved. Attorney Advertising.</p>
<div className="flex gap-4">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
<a className="hover:text-white" href="#">Disclaimer</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
