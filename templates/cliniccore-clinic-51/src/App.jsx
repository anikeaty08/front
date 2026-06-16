import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      const mobileBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileBtn && mobileMenu) {
          mobileBtn.addEventListener('click', () => {
              mobileMenu.classList.toggle('hidden');
              const icon = mobileBtn.querySelector('iconify-icon');
              if (mobileMenu.classList.contains('hidden')) {
                  icon.setAttribute('icon', 'solar:hamburger-menu-linear');
              } else {
                  icon.setAttribute('icon', 'solar:close-circle-linear');
              }
          });
          mobileMenu.querySelectorAll('a').forEach(link => {
              link.addEventListener('click', () => {
                  mobileMenu.classList.add('hidden');
                  mobileBtn.querySelector('iconify-icon').setAttribute('icon', 'solar:hamburger-menu-linear');
              });
          });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 w-full p-4 md:p-6">
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border shadow-sm px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white/80 border-slate-200/60">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-slate-900 p-1.5 rounded-lg group-hover:bg-slate-800 transition-colors text-white flex items-center justify-center">
<iconify-icon height="20" icon="solar:health-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">
            Cliniccore
          </span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-slate-900" href="#features">
            Features
          </a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-slate-900" href="#workflow">
            Workflow
          </a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-slate-900" href="#security">
            Security
          </a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-slate-900" href="#faq">
            FAQ
          </a>
</div>

<a className="hidden md:inline-flex items-center gap-2 bg-slate-900 text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 hover:bg-slate-800 text-white" href="#demo">
          Request Demo
          <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>

<button className="md:hidden text-slate-900 flex items-center" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>
<div className="hidden absolute left-4 right-4 top-[calc(100%-1rem)] mt-4 flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-2xl backdrop-blur-xl transition-all md:hidden" id="mobile-menu">
<div className="flex flex-col space-y-1">
<a className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900" href="#features">
            Features
          </a>
<a className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900" href="#workflow">
            Workflow
          </a>
<a className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900" href="#security">
            Security
          </a>
<a className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900" href="#faq">
            FAQ
          </a>
</div>
<div className="border-t border-slate-100 p-2">
<a className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition-all hover:bg-slate-800" href="#demo">
            Request Demo
            <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold tracking-wide uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
              New MVP Release v1.0
            </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] text-slate-900">
              Your Clinic's
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-slate-800">
                Operating System.
              </span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-medium max-w-lg leading-relaxed">
              Say goodbye to manual records. Streamline patient registration,
              scheduling, and clinical notes in one secure, role-based
              workspace.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-slate-900 text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-slate-900/10 hover:shadow-slate-900/20 hover:-translate-y-1 hover:bg-slate-800 text-white" href="#demo">
                Start Free Trial
                <iconify-icon height="18" icon="solar:rocket-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-3.5 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300" href="#features">
                View Workflow
                <iconify-icon height="18" icon="solar:playback-speed-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>

<div className="flex items-center gap-4 pt-4 border-t border-slate-200/60 mt-4">
<div className="flex -space-x-3">
<img alt="" className="w-10 h-10 rounded-full border-2 object-cover border-white grayscale" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-10 h-10 rounded-full border-2 object-cover border-white grayscale" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-10 h-10 rounded-full border-2 object-cover border-white grayscale" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div>
<div className="flex gap-0.5 text-slate-900">
<span className="text-sm font-bold">Trusted by 50+ Clinics</span>
</div>
<p className="text-xs font-medium mt-0.5 text-slate-500">
                  HIPAA-ready &amp; Secure
                </p>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-200/50">

<div className="bg-slate-50 p-4 border-b border-slate-100 flex items-center justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
<div className="w-3 h-3 rounded-full bg-green-400/80"></div>
</div>
<div className="h-2 w-20 bg-slate-200 rounded-full"></div>
</div>
<div className="flex">

<div className="w-16 md:w-20 bg-white border-r border-slate-100 py-6 flex flex-col items-center gap-6">
<div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
<iconify-icon icon="solar:health-bold" width="18"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-lg text-slate-400 hover:bg-slate-50 flex items-center justify-center">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-lg text-slate-400 hover:bg-slate-50 flex items-center justify-center">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-lg text-slate-400 hover:bg-slate-50 flex items-center justify-center">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
</div>

<div className="flex-1 p-6 md:p-8 bg-slate-50/50">
<div className="flex justify-between items-end mb-8">
<div>
<div className="h-2 w-16 bg-indigo-100 rounded mb-2"></div>
<div className="h-6 w-48 bg-slate-900 rounded-md"></div>
</div>
<div className="h-8 w-24 bg-indigo-600 rounded-full"></div>
</div>
<div className="space-y-4">
<div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100"></div>
<div>
<div className="h-3 w-32 bg-slate-800 rounded mb-1"></div>
<div className="h-2 w-20 bg-slate-400 rounded"></div>
</div>
</div>
<div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                        Checked-in
                      </div>
</div>
<div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-between opacity-80">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100"></div>
<div>
<div className="h-3 w-28 bg-slate-800 rounded mb-1"></div>
<div className="h-2 w-24 bg-slate-400 rounded"></div>
</div>
</div>
<div className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium">
                        Scheduled
                      </div>
</div>
<div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-between opacity-60">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100"></div>
<div>
<div className="h-3 w-32 bg-slate-800 rounded mb-1"></div>
<div className="h-2 w-16 bg-slate-400 rounded"></div>
</div>
</div>
<div className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                        10:30 AM
                      </div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-12 -left-6 flex flex-col gap-3">
<span className="inline-flex items-center gap-1.5 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold shadow-lg bg-white/90 text-slate-800 border border-white/50">
<iconify-icon className="text-green-500" icon="solar:shield-check-linear" width="16"></iconify-icon>
                Role-Based Access
              </span>
</div>
<div className="absolute bottom-12 -right-6 flex flex-col gap-3">
<span className="inline-flex items-center gap-1.5 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold shadow-lg bg-white/90 text-slate-800 border border-white/50">
<iconify-icon className="text-indigo-500" icon="solar:stopwatch-linear" width="16"></iconify-icon>
                &lt; 2 min Booking
              </span>
</div>

<div className="absolute -z-10 top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-indigo-300/20"></div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-20 border-y border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left">
<p className="text-4xl font-semibold tracking-tight text-slate-900 mb-1">
              2min
            </p>
<p className="text-sm font-medium text-slate-500">Patient Onboarding</p>
</div>
<div className="text-center md:text-left">
<p className="text-4xl font-semibold tracking-tight text-slate-900 mb-1">
              99.9%
            </p>
<p className="text-sm font-medium text-slate-500">System Uptime</p>
</div>
<div className="text-center md:text-left">
<p className="text-4xl font-semibold tracking-tight text-slate-900 mb-1">
              Zero
            </p>
<p className="text-sm font-medium text-slate-500">
              Infrastructure Cost
            </p>
</div>
<div className="text-center md:text-left">
<p className="text-4xl font-semibold tracking-tight text-slate-900 mb-1">
              AES-256
            </p>
<p className="text-sm font-medium text-slate-500">Data Encryption</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50" id="features">
<div className="sm:px-6 lg:px-8 max-w-7xl mx-auto px-4">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-slate-900">
            Core
            <span className="text-indigo-600">Capabilities</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
            Everything you need to run an outpatient department, and nothing you
            don't.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border bg-white border-slate-200 hover:border-indigo-100">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:user-plus-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-slate-900">
              Patient Registration
            </h3>
<p className="leading-relaxed text-sm text-slate-500">
              Capture essential data including demographics and emergency
              contacts in under 2 minutes with fuzzy search.
            </p>
</div>

<div className="group p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border bg-white border-slate-200 hover:border-indigo-100">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-slate-900">
              Conflict-Free Scheduling
            </h3>
<p className="leading-relaxed text-sm text-slate-500">
              Smart booking system with doctor-specific slots and automatic
              detection of overlapping appointments.
            </p>
</div>

<div className="group p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border bg-white border-slate-200 hover:border-indigo-100">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:stethoscope-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-slate-900">
              Clinical Documentation
            </h3>
<p className="text-slate-500 leading-relaxed text-sm">
              Structured visit notes including ICD-10 diagnosis, treatment
              plans, and prescriptions in a clean interface.
            </p>
</div>

<div className="group p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border bg-white border-slate-200 hover:border-indigo-100">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:history-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-slate-900">
              Patient History
            </h3>
<p className="text-slate-500 leading-relaxed text-sm">
              Instant access to a timeline view of past visits and treatments,
              strictly filtered by doctor permissions.
            </p>
</div>

<div className="group p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border bg-white border-slate-200 hover:border-indigo-100">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-slate-900">
              RBAC Security
            </h3>
<p className="text-slate-500 leading-relaxed text-sm">
              Strict Role-Based Access Control ensures receptionists handle
              logistics while doctors focus on clinical data.
            </p>
</div>

<div className="group p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border bg-white border-slate-200 hover:border-indigo-100">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-slate-900">
              Compliance &amp; Audits
            </h3>
<p className="text-slate-500 leading-relaxed text-sm">
              Comprehensive audit trails logging every view, edit, and login
              attempt to ensure total accountability.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24 relative" id="workflow">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider bg-slate-100 text-slate-600">
              Workflow
            </span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
              Built for
              <span className="text-indigo-600">Teams</span>
</h2>
<p className="text-lg text-slate-500 font-medium max-w-xl">
              Distinct dashboards for every role in your clinic.
            </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-all">
<div className="aspect-[16/10] w-full relative bg-slate-200 overflow-hidden">
<img alt="Receptionist" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-indigo-600" icon="solar:user-hand-up-linear"></iconify-icon>
<h4 className="text-lg font-semibold text-slate-900">
                  The Receptionist
                </h4>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                Registers patients, manages the daily schedule, and handles
                check-ins. Read-only access to clinical data preserves privacy.
              </p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-all">
<div className="aspect-[16/10] w-full relative bg-slate-200 overflow-hidden">
<img alt="Doctor" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-indigo-600" icon="solar:stethoscope-bold"></iconify-icon>
<h4 className="text-lg font-semibold text-slate-900">The Doctor</h4>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                Focuses on patient care. Views personal schedule, documents
                visits, and accesses history for assigned patients only.
              </p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-all">
<div className="aspect-[16/10] w-full relative bg-slate-200 overflow-hidden">
<img alt="Admin" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-indigo-600" icon="solar:settings-linear"></iconify-icon>
<h4 className="text-lg font-semibold text-slate-900">The Admin</h4>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                Total governance. Manages user accounts, configures system
                settings, and reviews security audit logs.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="faq">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
            Common
            <span className="text-indigo-600">Questions</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
            Understanding the ClinicCore MVP.
          </p>
</div>
<div className="space-y-4">
<details className="group rounded-2xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-indigo-500/20 bg-white">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-base font-semibold">
                Is ClinicCore suitable for large hospitals?
              </h2>
<div className="rounded-full p-1.5 text-indigo-500 transition duration-300 group-open:-rotate-180 bg-indigo-50">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed text-sm">
              ClinicCore is specifically designed as an MVP for small clinics
              and outpatient departments (1-5 doctors). It avoids the bloat of
              enterprise hospital software to ensure speed and simplicity.
            </p>
</details>
<details className="group rounded-2xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-indigo-500/20 bg-white">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-base font-semibold">Is patient data secure?</h2>
<div className="rounded-full p-1.5 text-indigo-500 transition duration-300 group-open:-rotate-180 bg-indigo-50">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed text-sm">
              Yes. We use AES-256 encryption for data at rest and HTTPS for
              transit. Our role-based access control (RBAC) ensures staff only
              see what they need to see.
            </p>
</details>
<details className="group rounded-2xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-indigo-500/20 bg-white">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-base font-semibold">
                Do I need to install software?
              </h2>
<div className="rounded-full p-1.5 text-indigo-500 transition duration-300 group-open:-rotate-180 bg-indigo-50">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed text-sm">
              No. ClinicCore is cloud-based. You can access it from any secure
              web browser on a computer or tablet.
            </p>
</details>
<details className="group rounded-2xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-indigo-500/20 bg-white">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-base font-semibold">
                Can I migrate my existing patient data?
              </h2>
<div className="rounded-full p-1.5 text-indigo-500 transition duration-300 group-open:-rotate-180 bg-indigo-50">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed text-sm">
              Admins have access to a bulk import tool to bring in doctors and
              initial user data. Patient data migration services are available
              for the setup phase.
            </p>
</details>
</div>
</div>
</section>

<section className="py-24 rounded-t-[3rem] lg:rounded-t-[4rem] overflow-hidden relative bg-slate-900 text-white" id="demo">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative hidden lg:block">
<div className="absolute top-0 right-0 w-2/3 h-2/3 bg-indigo-500/20 rounded-full blur-3xl"></div>
<div className="relative z-10 p-10 border border-slate-700 bg-slate-800/50 backdrop-blur-sm rounded-3xl">
<h3 className="text-2xl font-semibold mb-6">Why ClinicCore?</h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-white">Rapid Deployment</h4>
<p className="text-sm text-slate-400 mt-1">
                      Get your clinic running digitally in less than 48 hours.
                    </p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
<iconify-icon icon="solar:diploma-verified-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-white">Minimal Training</h4>
<p className="text-sm text-slate-400 mt-1">
                      Intuitive UI means your staff needs minutes, not days, to
                      learn.
                    </p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
<iconify-icon icon="solar:tag-price-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-white">Cost Effective</h4>
<p className="text-sm text-slate-400 mt-1">
                      Designed for small practices with budget-friendly scaling.
                    </p>
</div>
</li>
</ul>
</div>
</div>

<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
              Deploy Your Digital Clinic.
            </h2>
<p className="font-medium mb-10 text-lg text-slate-400">
              Schedule a personalized demo of the MVP. See how ClinicCore
              transforms your workflow.
            </p>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="sr-only">Full Name</label>
<input className="w-full border rounded-xl px-5 py-4 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all bg-slate-800/50 border-slate-700 text-white" placeholder="Full Name" type="text"/>
</div>
<div>
<label className="sr-only">Work Email</label>
<input className="w-full border rounded-xl px-5 py-4 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all bg-slate-800/50 border-slate-700 text-white" placeholder="Work Email" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="sr-only">Clinic Name</label>
<input className="w-full border rounded-xl px-5 py-4 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all bg-slate-800/50 border-slate-700 text-white" placeholder="Clinic Name" type="text"/>
</div>
<div className="relative">
<select className="w-full border rounded-xl px-5 py-4 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 appearance-none cursor-pointer bg-slate-800/50 border-slate-700 text-white">
<option className="text-slate-900">Number of Doctors</option>
<option className="text-slate-900">1 (Solo Practice)</option>
<option className="text-slate-900">2-5</option>
<option className="text-slate-900">5+</option>
</select>
<iconify-icon className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-indigo-600 font-semibold text-lg py-4 rounded-xl transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 flex items-center justify-center gap-2 mt-4 hover:bg-indigo-500 text-white" type="button">
                Request Access
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2" width="20"></iconify-icon>
</button>
<p className="text-xs text-center text-slate-500 mt-4">
                By clicking Request Access, you agree to our Terms &amp; Privacy
                Policy.
              </p>
</form>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t bg-white border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="bg-slate-900 p-1.5 rounded-lg text-white flex items-center justify-center">
<iconify-icon height="20" icon="solar:health-linear" width="20"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">
                Cliniccore
              </span>
</a>
<p className="text-slate-500 font-medium leading-relaxed text-sm">
              Simplicity, Security, and Speed for the modern independent clinic.
            </p>
<div className="flex gap-4">
<a className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-slate-900 hover:border-slate-900 transition-all bg-white border-slate-200 text-slate-500 hover:text-white" href="#">
<iconify-icon icon="ri:twitter-x-line" width="16"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-slate-900 hover:border-slate-900 transition-all bg-white border-slate-200 text-slate-500 hover:text-white" href="#">
<iconify-icon icon="ri:linkedin-fill" width="16"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-slate-900 hover:border-slate-900 transition-all bg-white border-slate-200 text-slate-500 hover:text-white" href="#">
<iconify-icon icon="ri:github-fill" width="16"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900 text-sm uppercase tracking-wider">
              Product
            </h4>
<ul className="space-y-3 text-slate-500 text-sm font-medium">
<li>
<a className="hover:text-indigo-600 transition-colors" href="#">
                  Features
                </a>
</li>
<li>
<a className="hover:text-indigo-600 transition-colors" href="#">
                  Security
                </a>
</li>
<li>
<a className="hover:text-indigo-600 transition-colors" href="#">
                  Pricing
                </a>
</li>
<li>
<a className="hover:text-indigo-600 transition-colors" href="#">
                  Roadmap
                </a>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900 text-sm uppercase tracking-wider">
              Company
            </h4>
<ul className="space-y-3 text-slate-500 text-sm font-medium">
<li>
<a className="hover:text-indigo-600 transition-colors" href="#">
                  About
                </a>
</li>
<li>
<a className="hover:text-indigo-600 transition-colors" href="#">
                  Contact
                </a>
</li>
<li>
<a className="hover:text-indigo-600 transition-colors" href="#">
                  Blog
                </a>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900 text-sm uppercase tracking-wider">
              Legal
            </h4>
<ul className="space-y-3 text-slate-500 text-sm font-medium">
<li>
<a className="hover:text-indigo-600 transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="hover:text-indigo-600 transition-colors" href="#">
                  Terms of Service
                </a>
</li>
<li>
<a className="hover:text-indigo-600 transition-colors" href="#">
                  BAA Agreement
                </a>
</li>
</ul>
</div>
</div>

<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-100">
<p className="text-slate-400 font-medium text-xs">
            © 2024 Cliniccore Inc. All Rights Reserved.
          </p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-slate-500">
              All Systems Operational
            </span>
</div>
</div>
</div>
</footer>


    </>
  );
}
