import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Tab Switcher Logic
        function showView(id) {
            // Hide all sections
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.add('hidden');
            });
            // Show selected section
            document.getElementById(id).classList.remove('hidden');

            // Update Sidebar State
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('bg-zinc-100', 'text-zinc-900', 'ring-zinc-200');
                btn.classList.add('text-zinc-600', 'ring-transparent');
                
                if(btn.dataset.target === id) {
                    btn.classList.remove('text-zinc-600', 'ring-transparent');
                    btn.classList.add('bg-zinc-100', 'text-zinc-900');
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-full md:w-64 bg-white border-r border-zinc-200 flex flex-col z-20 md:h-full shadow-[4px_0_24px_rgba(0,0,0,0.02)] shrink-0">
<div className="p-5 border-b border-zinc-100 flex items-center gap-2">
<div className="size-6 bg-zinc-900 rounded flex items-center justify-center text-white font-semibold text-xs tracking-tighter">TY</div>
<h1 className="text-sm font-medium tracking-tight text-zinc-900">Redirect UI Kit</h1>
</div>
<nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
<div className="px-3 py-2 text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mt-2">Specific Scenarios</div>
<button className="nav-btn w-full text-left px-3 py-2 text-xs font-medium text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 flex items-center gap-2 transition-colors ring-1 ring-transparent focus:ring-zinc-200 bg-zinc-100 text-zinc-900" data-target="ecommerce" onclick="showView('ecommerce')">
<i className="size-3.5" data-lucide="shopping-bag"></i> Order Confirmed
            </button>
<button className="nav-btn w-full text-left px-3 py-2 text-xs font-medium text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 flex items-center gap-2 transition-colors ring-1 ring-transparent focus:ring-zinc-200" data-target="newsletter" onclick="showView('newsletter')">
<i className="size-3.5" data-lucide="mail"></i> Newsletter Sub
            </button>
<button className="nav-btn w-full text-left px-3 py-2 text-xs font-medium text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 flex items-center gap-2 transition-colors ring-1 ring-transparent focus:ring-zinc-200" data-target="saas" onclick="showView('saas')">
<i className="size-3.5" data-lucide="rocket"></i> SaaS Onboarding
            </button>
<button className="nav-btn w-full text-left px-3 py-2 text-xs font-medium text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 flex items-center gap-2 transition-colors ring-1 ring-transparent focus:ring-zinc-200" data-target="download" onclick="showView('download')">
<i className="size-3.5" data-lucide="download"></i> Digital Asset
            </button>
<button className="nav-btn w-full text-left px-3 py-2 text-xs font-medium text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 flex items-center gap-2 transition-colors ring-1 ring-transparent focus:ring-zinc-200" data-target="waitlist" onclick="showView('waitlist')">
<i className="size-3.5" data-lucide="users"></i> Waitlist Position
            </button>
<button className="nav-btn w-full text-left px-3 py-2 text-xs font-medium text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 flex items-center gap-2 transition-colors ring-1 ring-transparent focus:ring-zinc-200" data-target="support" onclick="showView('support')">
<i className="size-3.5" data-lucide="life-buoy"></i> Support Ticket
            </button>
<button className="nav-btn w-full text-left px-3 py-2 text-xs font-medium text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 flex items-center gap-2 transition-colors ring-1 ring-transparent focus:ring-zinc-200" data-target="event" onclick="showView('event')">
<i className="size-3.5" data-lucide="calendar"></i> Event RSVP
            </button>
<button className="nav-btn w-full text-left px-3 py-2 text-xs font-medium text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 flex items-center gap-2 transition-colors ring-1 ring-transparent focus:ring-zinc-200" data-target="job" onclick="showView('job')">
<i className="size-3.5" data-lucide="briefcase"></i> Job Application
            </button>
<button className="nav-btn w-full text-left px-3 py-2 text-xs font-medium text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 flex items-center gap-2 transition-colors ring-1 ring-transparent focus:ring-zinc-200" data-target="feedback" onclick="showView('feedback')">
<i className="size-3.5" data-lucide="heart"></i> Feedback Survey
            </button>
<button className="nav-btn w-full text-left px-3 py-2 text-xs font-medium text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 flex items-center gap-2 transition-colors ring-1 ring-transparent focus:ring-zinc-200" data-target="meeting" onclick="showView('meeting')">
<i className="size-3.5" data-lucide="video"></i> Meeting Scheduled
            </button>
<div className="px-3 py-2 text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mt-4">Universal Forms</div>
<button className="nav-btn w-full text-left px-3 py-2 text-xs font-medium text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 flex items-center gap-2 transition-colors ring-1 ring-transparent focus:ring-zinc-200" data-target="generic-simple" onclick="showView('generic-simple')">
<i className="size-3.5" data-lucide="check-circle"></i> Simple Center
            </button>
<button className="nav-btn w-full text-left px-3 py-2 text-xs font-medium text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 flex items-center gap-2 transition-colors ring-1 ring-transparent focus:ring-zinc-200" data-target="generic-ref" onclick="showView('generic-ref')">
<i className="size-3.5" data-lucide="hash"></i> Reference ID
            </button>
<button className="nav-btn w-full text-left px-3 py-2 text-xs font-medium text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 flex items-center gap-2 transition-colors ring-1 ring-transparent focus:ring-zinc-200" data-target="generic-timeline" onclick="showView('generic-timeline')">
<i className="size-3.5" data-lucide="list-start"></i> Process Timeline
            </button>
<button className="nav-btn w-full text-left px-3 py-2 text-xs font-medium text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 flex items-center gap-2 transition-colors ring-1 ring-transparent focus:ring-zinc-200" data-target="generic-human" onclick="showView('generic-human')">
<i className="size-3.5" data-lucide="smile"></i> Personal Touch
            </button>
</nav>
<div className="p-4 border-t border-zinc-200">
<p className="text-[10px] text-zinc-400">Select a scenario to preview the redirect page.</p>
</div>
</aside>

<main className="flex-1 bg-zinc-50/50 relative overflow-hidden flex flex-col h-full">

<section className="view-section w-full h-full overflow-y-auto p-4 md:p-10 flex items-center justify-center" id="ecommerce">
<div className="w-full max-w-md bg-white rounded-xl border border-zinc-200 shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden">
<div className="h-1.5 bg-emerald-500 w-full"></div>
<div className="p-8 text-center">
<div className="mx-auto size-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4 ring-4 ring-emerald-50/50">
<i className="size-6" data-lucide="check"></i>
</div>
<h2 className="text-xl font-semibold tracking-tight text-zinc-900 mb-2">Order Confirmed</h2>
<p className="text-sm text-zinc-500 mb-8">Thank you for your purchase. We've sent a receipt to <span className="text-zinc-900 font-medium">alex@example.com</span>.</p>
<div className="bg-zinc-50 rounded-lg border border-zinc-100 p-4 mb-8 text-left">
<div className="flex justify-between items-start mb-4 pb-4 border-b border-zinc-200 border-dashed">
<div>
<p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Order Number</p>
<p className="text-sm font-medium font-mono text-zinc-700">#9384-23</p>
</div>
<div className="text-right">
<p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Total</p>
<p className="text-sm font-medium text-zinc-900">$129.00</p>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-3">
<div className="size-8 bg-white border border-zinc-200 rounded flex items-center justify-center text-zinc-400">
<i className="size-4" data-lucide="box"></i>
</div>
<div className="flex-1">
<p className="text-xs font-medium text-zinc-800">Pro Workspace License</p>
<p className="text-[10px] text-zinc-500">Annual Plan</p>
</div>
</div>
</div>
</div>
<a className="block w-full bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium py-2.5 rounded-md transition-colors shadow-sm" href="#">
                        Manage Order
                    </a>
<button className="mt-4 text-xs text-zinc-500 hover:text-zinc-900 font-medium flex items-center justify-center gap-1.5 mx-auto transition-colors">
<i className="size-3" data-lucide="arrow-left"></i> Return to store
                    </button>
</div>
</div>
</section>

<section className="view-section hidden w-full h-full overflow-y-auto p-4 md:p-10 flex items-center justify-center" id="newsletter">
<div className="w-full max-w-sm text-center">
<div className="mx-auto mb-6 size-14 bg-gradient-to-br from-zinc-100 to-zinc-50 border border-zinc-200 rounded-xl flex items-center justify-center shadow-sm rotate-3">
<i className="size-6 text-zinc-600" data-lucide="mail-open"></i>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2">You're on the list.</h2>
<p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-[280px] mx-auto">
                    We've sent a confirmation email. Please check your inbox to verify your subscription.
                </p>
<div className="flex items-center justify-center gap-3">
<button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-600 text-xs font-medium rounded-full hover:border-zinc-300 transition-all shadow-sm">
                        Open Gmail
                    </button>
<button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-600 text-xs font-medium rounded-full hover:border-zinc-300 transition-all shadow-sm">
                        Open Outlook
                    </button>
</div>
</div>
</section>

<section className="view-section hidden w-full h-full overflow-y-auto p-4 md:p-10 flex items-center justify-center bg-white" id="saas">
<div className="w-full max-w-2xl">
<div className="mb-10">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Account created successfully</h2>
<p className="text-sm text-zinc-500 mt-1">Complete these steps to activate your workspace.</p>
</div>
<div className="space-y-4">

<div className="flex gap-4 items-start opacity-50">
<div className="size-6 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0 mt-0.5">
<i className="size-3.5 text-zinc-500" data-lucide="check"></i>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900">Create Account</h3>
<p className="text-xs text-zinc-500 mt-0.5">Basic details and password set.</p>
</div>
</div>

<div className="flex gap-4 items-start relative">

<div className="absolute left-[11px] -top-6 h-8 w-px bg-zinc-200"></div>
<div className="size-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm ring-4 ring-blue-50">
<span className="text-[10px] font-bold text-white">2</span>
</div>
<div className="w-full">
<h3 className="text-sm font-medium text-zinc-900">Verify your email</h3>
<p className="text-xs text-zinc-500 mt-1 mb-3">We sent a magic link to <span className="font-mono text-zinc-700">user@company.com</span>.</p>
<div className="p-3 bg-blue-50/50 border border-blue-100 rounded-lg flex items-center gap-3">
<i className="size-4 text-blue-600" data-lucide="mail"></i>
<span className="text-xs text-blue-900 font-medium">Waiting for verification...</span>
<button className="ml-auto text-[10px] font-medium text-blue-600 hover:underline">Resend</button>
</div>
</div>
</div>

<div className="flex gap-4 items-start relative">

<div className="absolute left-[11px] -top-6 h-10 w-px bg-zinc-200"></div>
<div className="size-6 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 mt-0.5">
<span className="text-[10px] font-medium text-zinc-400">3</span>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-400">Connect your data</h3>
<p className="text-xs text-zinc-400 mt-0.5">Import your first project.</p>
</div>
</div>
</div>
</div>
</section>

<section className="view-section hidden w-full h-full overflow-y-auto p-4 md:p-10 flex items-center justify-center" id="download">
<div className="w-full max-w-lg bg-white border border-zinc-200 rounded-xl p-1 shadow-sm">
<div className="grid grid-cols-1 md:grid-cols-3 gap-1">

<div className="bg-zinc-100 rounded-lg flex items-center justify-center min-h-[160px] md:h-full relative overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
<div className="relative z-10 size-16 bg-white shadow-lg rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-105 duration-500">
<i className="size-8 text-zinc-300" data-lucide="file-text"></i>
</div>
</div>

<div className="md:col-span-2 p-6 flex flex-col justify-center">
<h2 className="text-lg font-semibold tracking-tight text-zinc-900">2024 Design Trends Report</h2>
<p className="text-xs text-zinc-500 mt-1 mb-6">PDF • 14.2 MB • Updated Yesterday</p>
<div className="space-y-3">
<button className="w-full flex items-center justify-center gap-2 bg-zinc-900 text-white text-xs font-medium py-2.5 rounded-md hover:bg-zinc-800 transition-colors">
<i className="size-3.5" data-lucide="download"></i> Download to Device
                            </button>
<button className="w-full flex items-center justify-center gap-2 bg-white border border-zinc-200 text-zinc-700 text-xs font-medium py-2.5 rounded-md hover:bg-zinc-50 transition-colors">
<i className="size-3.5" data-lucide="copy"></i> Copy Link
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="view-section hidden w-full h-full overflow-y-auto p-4 md:p-10 flex items-center justify-center" id="waitlist">
<div className="w-full max-w-md text-center">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-medium tracking-wide border border-indigo-100 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span> BETA ACCESS
                </span>
<h2 className="text-3xl font-semibold tracking-tighter text-zinc-900 mb-2">You're on the waitlist</h2>
<p className="text-sm text-zinc-500 mb-8">We are rolling out access gradually.</p>
<div className="bg-white border border-zinc-200 rounded-xl p-6 mb-8 shadow-sm">
<p className="text-xs text-zinc-500 uppercase tracking-widest font-medium mb-2">Current Position</p>
<div className="text-4xl font-bold text-zinc-900 tracking-tight font-mono">4,821</div>
<div className="mt-2 h-1 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-900 w-[15%] rounded-full"></div>
</div>
<p className="text-[10px] text-zinc-400 mt-2 text-right">1,204 people ahead of you</p>
</div>
<div className="text-left">
<label className="text-xs font-medium text-zinc-700 mb-2 block">Boost your position by sharing</label>
<div className="flex gap-2">
<div className="flex-1 relative">
<input className="w-full bg-white border border-zinc-200 rounded-md py-2 pl-3 pr-8 text-xs text-zinc-500 font-mono focus:outline-none focus:border-zinc-300 select-all" readonly="" type="text" value="app.com/r/alex-29"/>
<i className="absolute right-3 top-2.5 size-3 text-zinc-400" data-lucide="link"></i>
</div>
<button className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-md px-3 py-2 transition-colors">
<i className="size-3.5" data-lucide="twitter"></i>
</button>
</div>
</div>
</div>
</section>

<section className="view-section hidden w-full h-full overflow-y-auto p-4 md:p-10 flex items-center justify-center bg-zinc-100" id="support">
<div className="w-full max-w-lg bg-white rounded-lg border border-zinc-200 shadow-sm p-8">
<div className="flex justify-between items-start mb-6">
<div>
<h2 className="text-lg font-semibold tracking-tight text-zinc-900">Request Received</h2>
<p className="text-sm text-zinc-500 mt-1">Our team usually responds within 24 hours.</p>
</div>
<div className="bg-zinc-100 px-2 py-1 rounded text-xs font-mono text-zinc-600 border border-zinc-200">
                        #T-9302
                    </div>
</div>
<div className="bg-blue-50 border border-blue-100 rounded-md p-4 mb-6 flex gap-3 items-start">
<i className="size-4 text-blue-600 mt-0.5 shrink-0" data-lucide="info"></i>
<div className="space-y-1">
<p className="text-xs font-medium text-blue-900">High volume warning</p>
<p className="text-xs text-blue-700 leading-relaxed">Due to a recent update, response times may be slightly delayed. We prioritize login issues.</p>
</div>
</div>
<hr className="border-zinc-100 mb-6"/>
<h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">While you wait</h3>
<div className="space-y-2">
<a className="group flex items-center justify-between p-3 rounded-md hover:bg-zinc-50 border border-transparent hover:border-zinc-100 transition-all" href="#">
<div className="flex items-center gap-3">
<i className="size-4 text-zinc-400 group-hover:text-zinc-600" data-lucide="book"></i>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Read Documentation</span>
</div>
<i className="size-3.5 text-zinc-300 group-hover:text-zinc-500" data-lucide="chevron-right"></i>
</a>
<a className="group flex items-center justify-between p-3 rounded-md hover:bg-zinc-50 border border-transparent hover:border-zinc-100 transition-all" href="#">
<div className="flex items-center gap-3">
<i className="size-4 text-zinc-400 group-hover:text-zinc-600" data-lucide="users"></i>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Ask the Community</span>
</div>
<i className="size-3.5 text-zinc-300 group-hover:text-zinc-500" data-lucide="chevron-right"></i>
</a>
</div>
</div>
</section>

<section className="view-section hidden w-full h-full overflow-y-auto p-4 md:p-10 flex items-center justify-center" id="event">
<div className="w-full max-w-md bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
<div className="bg-zinc-900 p-6 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 -mt-4 -mr-4 size-24 rounded-full bg-white/5 blur-2xl"></div>
<div className="relative z-10">
<span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-white/20 border border-white/10 mb-3">CONFIRMED</span>
<h2 className="text-xl font-semibold tracking-tight">Product Launch 2024</h2>
<div className="flex items-center gap-4 mt-4 text-zinc-300 text-xs">
<div className="flex items-center gap-1.5">
<i className="size-3.5" data-lucide="calendar"></i>
<span>Oct 24, 2024</span>
</div>
<div className="flex items-center gap-1.5">
<i className="size-3.5" data-lucide="clock"></i>
<span>10:00 AM PST</span>
</div>
</div>
</div>
</div>
<div className="p-6">
<div className="flex gap-4 mb-6">
<div className="size-20 bg-zinc-100 rounded-lg flex items-center justify-center shrink-0 border border-zinc-200">
<i className="size-10 text-zinc-800 opacity-80" data-lucide="qr-code"></i>
</div>
<div className="flex flex-col justify-center">
<p className="text-xs font-medium text-zinc-500 mb-1">Your Ticket ID</p>
<p className="text-base font-mono font-semibold text-zinc-900">XJ-928-AA</p>
<p className="text-[10px] text-zinc-400 mt-1">Present this at the entrance</p>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 border border-zinc-200 rounded-lg py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">
<i className="size-3.5" data-lucide="calendar-plus"></i> Google Cal
                        </button>
<button className="flex items-center justify-center gap-2 border border-zinc-200 rounded-lg py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">
<i className="size-3.5" data-lucide="download"></i> Outlook
                        </button>
</div>
</div>
</div>
</section>

<section className="view-section hidden w-full h-full overflow-y-auto p-4 md:p-10 flex items-center justify-center" id="job">
<div className="w-full max-w-xl">
<div className="flex items-center gap-4 mb-8">
<div className="size-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center shadow-sm">
<span className="font-bold text-lg text-zinc-900">Ac</span>
</div>
<div>
<h2 className="text-lg font-semibold tracking-tight text-zinc-900">Application Sent</h2>
<p className="text-sm text-zinc-500">Position: Senior Frontend Engineer</p>
</div>
</div>
<div className="border-l border-zinc-200 pl-8 relative space-y-8">

<div className="relative">
<div className="absolute -left-[37px] top-1 size-4 rounded-full bg-zinc-900 border-4 border-zinc-50"></div>
<h3 className="text-sm font-medium text-zinc-900">Application Received</h3>
<p className="text-xs text-zinc-500 mt-1">We have your resume and cover letter safe and sound.</p>
</div>

<div className="relative">
<div className="absolute -left-[37px] top-1 size-4 rounded-full bg-white border-2 border-zinc-300"></div>
<h3 className="text-sm font-medium text-zinc-400">Review Process</h3>
<p className="text-xs text-zinc-400 mt-1">Our team reviews applications every Tuesday and Thursday.</p>
</div>

<div className="relative">
<div className="absolute -left-[37px] top-1 size-4 rounded-full bg-white border-2 border-zinc-200"></div>
<h3 className="text-sm font-medium text-zinc-400">Initial Interview</h3>
<p className="text-xs text-zinc-400 mt-1">If selected, you'll receive an email to book a slot.</p>
</div>
</div>
<div className="mt-12">
<a className="text-xs font-medium text-zinc-600 hover:text-zinc-900 flex items-center gap-1" href="#">
<i className="size-3" data-lucide="arrow-left"></i> Back to Careers
                    </a>
</div>
</div>
</section>

<section className="view-section hidden w-full h-full overflow-y-auto p-4 md:p-10 flex items-center justify-center" id="feedback">
<div className="w-full max-w-sm bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8 text-center border border-zinc-100">
<div className="inline-flex mb-4 animate-bounce">
<i className="size-8 text-rose-500 fill-rose-500" data-lucide="heart"></i>
</div>
<h2 className="text-xl font-semibold tracking-tight text-zinc-900 mb-2">Thanks for your feedback!</h2>
<p className="text-sm text-zinc-500 mb-6">We read every single response to make our product better for you.</p>
<div className="bg-zinc-50 rounded-lg p-4 text-left mb-6 border border-zinc-100">
<p className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold mb-2">Your Rating</p>
<div className="flex gap-1">
<i className="size-4 text-amber-400 fill-amber-400" data-lucide="star"></i>
<i className="size-4 text-amber-400 fill-amber-400" data-lucide="star"></i>
<i className="size-4 text-amber-400 fill-amber-400" data-lucide="star"></i>
<i className="size-4 text-amber-400 fill-amber-400" data-lucide="star"></i>
<i className="size-4 text-zinc-200 fill-zinc-200" data-lucide="star"></i>
</div>
</div>
<button className="w-full bg-zinc-100 text-zinc-900 text-xs font-medium py-2.5 rounded-md hover:bg-zinc-200 transition-colors">
                    Close Window
                </button>
</div>
</section>

<section className="view-section hidden w-full h-full overflow-y-auto p-4 md:p-10 flex items-center justify-center" id="meeting">
<div className="w-full max-w-md bg-white border border-zinc-200 rounded-lg shadow-sm flex flex-col overflow-hidden">
<div className="p-6 text-center border-b border-zinc-100">
<div className="mx-auto size-16 rounded-full bg-zinc-100 border-2 border-white shadow-sm mb-4 overflow-hidden">
<img alt="Avatar" className="size-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<h2 className="text-lg font-semibold tracking-tight text-zinc-900">Meeting Confirmed</h2>
<p className="text-sm text-zinc-500 mt-1">with Sarah Miller</p>
</div>
<div className="p-6 bg-zinc-50/50 space-y-4">
<div className="flex items-start gap-3">
<div className="size-8 rounded bg-white border border-zinc-200 flex items-center justify-center shrink-0 text-zinc-500">
<i className="size-4" data-lucide="calendar"></i>
</div>
<div>
<p className="text-sm font-semibold text-zinc-900">Friday, November 14</p>
<p className="text-xs text-zinc-500">10:00am - 10:30am (30 min)</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="size-8 rounded bg-white border border-zinc-200 flex items-center justify-center shrink-0 text-zinc-500">
<i className="size-4" data-lucide="video"></i>
</div>
<div>
<p className="text-sm font-semibold text-zinc-900">Google Meet</p>
<p className="text-xs text-zinc-500 underline cursor-pointer truncate max-w-[200px]">meet.google.com/abc-defg-hij</p>
</div>
</div>
</div>
<div className="p-4 bg-white border-t border-zinc-200 flex gap-3">
<button className="flex-1 border border-zinc-200 rounded py-2 text-xs font-medium text-zinc-600 hover:bg-zinc-50 transition-colors">Reschedule</button>
<button className="flex-1 border border-zinc-200 rounded py-2 text-xs font-medium text-zinc-600 hover:bg-zinc-50 transition-colors">Cancel</button>
</div>
</div>
</section>

<section className="view-section hidden w-full h-full overflow-y-auto p-4 md:p-10 flex items-center justify-center" id="generic-simple">
<div className="w-full max-w-md text-center">
<div className="mx-auto size-16 rounded-full bg-zinc-900 flex items-center justify-center mb-6 shadow-lg shadow-zinc-200">
<i className="size-6 text-white ml-0.5" data-lucide="send"></i>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3">Message Sent</h2>
<p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-xs mx-auto">
                    Thanks for reaching out! We've received your inquiry and will get back to you shortly.
                </p>
<div className="flex items-center justify-center gap-4">
<button className="text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Back to Home</button>
<span className="text-zinc-300">•</span>
<button className="text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors">View Articles</button>
</div>
</div>
</section>

<section className="view-section hidden w-full h-full overflow-y-auto p-4 md:p-10 flex items-center justify-center" id="generic-ref">
<div className="w-full max-w-[400px] bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
<div className="bg-zinc-50 border-b border-zinc-100 p-6 flex flex-col items-center">
<div className="size-10 bg-white border border-zinc-200 rounded-lg flex items-center justify-center mb-4 shadow-sm">
<i className="size-5 text-zinc-900" data-lucide="check"></i>
</div>
<h2 className="text-lg font-semibold tracking-tight text-zinc-900">Submission Received</h2>
</div>
<div className="p-6">
<div className="bg-zinc-50 border border-zinc-200 border-dashed rounded-lg p-4 mb-6 relative group cursor-pointer hover:bg-zinc-100 transition-colors">
<p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold mb-1">Reference ID</p>
<div className="flex items-center justify-between">
<code className="text-base font-mono font-medium text-zinc-900">REF-8392-XK</code>
<i className="size-3.5 text-zinc-400 group-hover:text-zinc-600" data-lucide="copy"></i>
</div>
</div>
<p className="text-xs text-zinc-500 text-center leading-relaxed">
                        Please keep this ID for your records. We've also sent a copy to your email address.
                    </p>
<button className="mt-6 w-full bg-white border border-zinc-200 text-zinc-900 text-xs font-medium py-2.5 rounded-md hover:bg-zinc-50 transition-colors">
                        Print Receipt
                    </button>
</div>
</div>
</section>

<section className="view-section hidden w-full h-full overflow-y-auto p-4 md:p-10 flex items-center justify-center" id="generic-timeline">
<div className="w-full max-w-2xl text-center">
<h2 className="text-xl font-semibold tracking-tight text-zinc-900 mb-2">We've got it.</h2>
<p className="text-sm text-zinc-500 mb-10">Your submission was successful. Here is what happens next:</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left relative">

<div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-zinc-200 -z-10"></div>

<div className="bg-white p-5 rounded-lg border border-zinc-200 shadow-sm relative">
<div className="size-12 bg-zinc-900 text-white rounded-full flex items-center justify-center border-4 border-white mb-4 shadow-sm">
<i className="size-5" data-lucide="inbox"></i>
</div>
<h3 className="text-sm font-semibold text-zinc-900">Received</h3>
<p className="text-xs text-zinc-500 mt-1">Your details have successfully reached our secure server.</p>
</div>

<div className="bg-white p-5 rounded-lg border border-zinc-200 shadow-sm opacity-60">
<div className="size-12 bg-white text-zinc-400 rounded-full flex items-center justify-center border-4 border-zinc-50 mb-4 shadow-sm ring-1 ring-zinc-200">
<i className="size-5" data-lucide="search"></i>
</div>
<h3 className="text-sm font-medium text-zinc-900">Review</h3>
<p className="text-xs text-zinc-500 mt-1">Our team will manually review your submission details.</p>
</div>

<div className="bg-white p-5 rounded-lg border border-zinc-200 shadow-sm opacity-60">
<div className="size-12 bg-white text-zinc-400 rounded-full flex items-center justify-center border-4 border-zinc-50 mb-4 shadow-sm ring-1 ring-zinc-200">
<i className="size-5" data-lucide="message-square"></i>
</div>
<h3 className="text-sm font-medium text-zinc-900">Response</h3>
<p className="text-xs text-zinc-500 mt-1">You'll receive a personalized response within 24 hours.</p>
</div>
</div>
</div>
</section>

<section className="view-section hidden w-full h-full overflow-y-auto p-4 md:p-10 flex items-center justify-center" id="generic-human">
<div className="w-full max-w-sm bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
<div className="flex -space-x-3 mb-6">
<img alt="" className="size-10 rounded-full border-2 border-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Annie" />
<img alt="" className="size-10 rounded-full border-2 border-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ben"/>
<div className="size-10 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center text-[10px] font-medium text-zinc-500">+3</div>
</img></div>
<h2 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Thanks a bunch!</h2>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">
                    Real humans are looking at this right now. We'll get back to you via email as soon as we can.
                </p>
<div className="w-full pt-6 border-t border-zinc-100">
<p className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider mb-3">While you wait</p>
<div className="flex gap-2 justify-center">
<a className="size-8 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center hover:bg-zinc-100 transition-colors text-zinc-600" href="#">
<i className="size-3.5" data-lucide="twitter"></i>
</a>
<a className="size-8 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center hover:bg-zinc-100 transition-colors text-zinc-600" href="#">
<i className="size-3.5" data-lucide="linkedin"></i>
</a>
<a className="size-8 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center hover:bg-zinc-100 transition-colors text-zinc-600" href="#">
<i className="size-3.5" data-lucide="instagram"></i>
</a>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
