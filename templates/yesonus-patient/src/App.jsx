import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        function switchPage(pageId) {
            const home = document.getElementById('home-view');
            const access = document.getElementById('access-view');

            if (pageId === 'access') {
                home.classList.remove('section-active');
                home.classList.add('section-hidden');

                access.classList.remove('section-hidden');
                access.classList.add('section-active');
                window.scrollTo(0,0);
            } else {
                access.classList.remove('section-active');
                access.classList.add('section-hidden');

                home.classList.remove('section-hidden');
                home.classList.add('section-active');
                window.scrollTo(0,0);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md py-4 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
<a className="flex items-center gap-2 group cursor-pointer" href="javascript:void(0)" onclick="switchPage('home')">
<div className="relative w-8 h-8 text-teal-600">
<i className="w-full h-full" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<span className="text-lg tracking-tight font-medium text-slate-900">
                    YesOnus
                </span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<button className="px-5 py-2 rounded-lg bg-slate-900 text-white hover:bg-teal-600 transition-all duration-300 text-sm font-medium shadow-sm" onclick="switchPage('access')">
                    Upload My Plan
                </button>
</div>
</div>
</nav>

<main className="section-active" id="home-view">

<section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-3xl opacity-50 -translate-y-1/4 translate-x-1/4 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl opacity-50 translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100">
<span className="w-2 h-2 rounded-full bg-teal-500"></span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                            No reimbursement promises. Just clarity.
                        </span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-slate-900 font-medium">
                        Be a collaborator in your care — not a <span className="text-teal-600 font-serif italic">bystander</span>.
                    </h1>
<p className="text-lg md:text-xl text-slate-500 font-light max-w-lg leading-relaxed">
                        When treatment is surgical and the cost matters, we help you organize the paperwork and next steps so reimbursement has a fair shot.
                    </p>

<div className="bg-white border border-slate-200 p-6 rounded-2xl soft-shadow max-w-md">
<h3 className="text-sm font-medium text-slate-900 mb-4">Unlock your free Reimbursement Snapshot</h3>
<div className="space-y-4">
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-teal-500 transition-colors" placeholder="Enter your email address" type="email"/>
<label className="custom-checkbox flex items-start gap-3 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 border border-slate-300 rounded flex items-center justify-center bg-white transition-colors mt-0.5 group-hover:border-teal-500">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-xs text-slate-500 font-light leading-snug select-none">I have permission to share these documents.</span>
</label>
<button className="w-full py-3 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors flex items-center justify-center gap-2" onclick="switchPage('access')">
                                Continue
                                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="flex items-center gap-6 pt-2">
<button className="text-slate-500 text-sm font-medium hover:text-slate-900 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900 transition-all" onclick="switchPage('access')">
                            Or book a 10-Minute Intake Call
                        </button>
</div>
</div>

<div className="relative hidden lg:block">

<div className="relative bg-white border border-slate-100 rounded-3xl p-8 soft-shadow animate-float">

<div className="flex justify-between items-center mb-8 border-b border-slate-50 pb-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="file-heart"></i>
</div>
<div>
<h3 className="font-medium text-slate-900 text-sm">Treatment Plan #8291</h3>
<p className="text-xs text-slate-400 font-light">Uploaded just now</p>
</div>
</div>
<span className="px-3 py-1 rounded-full bg-slate-50 text-[10px] font-medium uppercase tracking-wider text-slate-500 border border-slate-100">
                                Reviewing
                            </span>
</div>

<div className="space-y-4">

<div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50/50">
<div className="w-4 h-4 mt-1 rounded-full border border-slate-200 flex items-center justify-center">
<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
</div>
<div className="space-y-2 flex-1">
<div className="h-2 w-24 bg-slate-200 rounded-full"></div>
<div className="h-1.5 w-full bg-slate-100 rounded-full"></div>
</div>
</div>

<div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50/50">
<div className="w-4 h-4 mt-1 rounded-full border border-slate-200 flex items-center justify-center">
<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
</div>
<div className="space-y-2 flex-1">
<div className="h-2 w-32 bg-slate-200 rounded-full"></div>
<div className="h-1.5 w-3/4 bg-slate-100 rounded-full"></div>
</div>
</div>
</div>

<div className="mt-8 flex justify-end">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-lg text-xs font-medium">
<i className="w-3 h-3" data-lucide="camera"></i>
                                Reimbursement Snapshot Ready
                            </div>
</div>
</div>

<div className="absolute -right-6 top-20 bg-white p-4 rounded-xl border border-slate-100 shadow-lg flex items-center gap-3 transform rotate-6">
<div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center">
<i className="w-4 h-4" data-lucide="shield-check"></i>
</div>
<div className="text-xs font-medium">
<div className="text-slate-900">Patient-Safe</div>
<div className="text-slate-400 font-light">Secure handling</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 border-y border-slate-100" id="how-it-works">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">
                        Clarity in three steps.
                    </h2>
<p className="text-lg text-slate-500 font-light">
                        We organize the chaos so you can make informed decisions.
                    </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-100 soft-shadow group hover:border-teal-100 transition-colors">
<div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-900 flex items-center justify-center mb-6 border border-slate-100">
<i className="w-6 h-6 stroke-1" data-lucide="upload-cloud"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">1. Upload your plan</h3>
<p className="text-slate-500 font-light leading-relaxed">
                            Submit your treatment plan securely. We accept PDFs or clear screenshots.
                        </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 soft-shadow group hover:border-teal-100 transition-colors">
<div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-900 flex items-center justify-center mb-6 border border-slate-100">
<i className="w-6 h-6 stroke-1" data-lucide="file-search"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">2. We create a Snapshot</h3>
<p className="text-slate-500 font-light leading-relaxed">
                            We analyze the codes and documentation to create a "Reimbursement Snapshot" of your readiness.
                        </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 soft-shadow group hover:border-teal-100 transition-colors">
<div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-900 flex items-center justify-center mb-6 border border-slate-100">
<i className="w-6 h-6 stroke-1" data-lucide="users"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">3. Optional Collaboration</h3>
<p className="text-slate-500 font-light leading-relaxed">
                            If items are missing, we can invite your dental office to fill in the gaps directly.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
<div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                                What you'll need.
                            </h2>
<p className="text-slate-300 font-light text-lg mb-8 max-w-md">
                                Gather these documents to ensure the most accurate snapshot of your case.
                            </p>
<div className="flex gap-4">
<button className="px-6 py-3 bg-white text-slate-900 rounded-lg text-sm font-medium hover:bg-teal-50 transition-colors" onclick="switchPage('access')">
                                    Start Upload
                                </button>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">

<div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
<div className="flex items-center gap-3 mb-2">
<i className="text-teal-400 w-5 h-5" data-lucide="file-text"></i>
<span className="font-medium text-sm">Treatment Plan</span>
</div>
<p className="text-xs text-slate-400">PDF or Screenshot required.</p>
</div>

<div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
<div className="flex items-center gap-3 mb-2">
<i className="text-teal-400 w-5 h-5" data-lucide="credit-card"></i>
<span className="font-medium text-sm">Insurance Card</span>
</div>
<p className="text-xs text-slate-400">Front and back photos.</p>
</div>

<div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
<div className="flex items-center gap-3 mb-2">
<i className="text-teal-400 w-5 h-5" data-lucide="image"></i>
<span className="font-medium text-sm">Imaging/Letters</span>
</div>
<p className="text-xs text-slate-400">Any referrals you have.</p>
</div>

<div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
<div className="flex items-center gap-3 mb-2">
<i className="text-teal-400 w-5 h-5" data-lucide="calendar"></i>
<span className="font-medium text-sm">Procedure Date</span>
</div>
<p className="text-xs text-slate-400">If already scheduled.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-white p-10 rounded-3xl soft-shadow text-center border border-slate-100 flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
<i className="w-8 h-8 stroke-1" data-lucide="upload"></i>
</div>
<h3 className="text-2xl font-medium text-slate-900 mb-2">Upload &amp; Start</h3>
<p className="text-slate-500 font-light mb-8">
                            Fastest path. Get your snapshot with next steps immediately.
                        </p>
<button className="w-full px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium" onclick="switchPage('access')">
                            Upload My Plan
                        </button>
</div>

<div className="bg-white p-10 rounded-3xl soft-shadow text-center border border-slate-100 flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center mb-6">
<i className="w-8 h-8 stroke-1" data-lucide="phone"></i>
</div>
<h3 className="text-2xl font-medium text-slate-900 mb-2">Talk to a Specialist</h3>
<p className="text-slate-500 font-light mb-8">
                            If you're unsure what to upload or how reimbursement works.
                        </p>
<button className="w-full px-6 py-3 bg-white border border-slate-200 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors font-medium" onclick="switchPage('access')">
                            Book a Call
                        </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-6">

<div className="mb-20 text-center">
<h3 className="text-2xl font-medium text-slate-900 mb-4">Bring your dental office into the loop (optional).</h3>
<p className="text-slate-500 font-light mb-2">
                        If your case needs additional documentation, we’ll generate a simple request list you can share with your office.
                    </p>
<p className="text-xs font-medium text-teal-600 uppercase tracking-wide">We only request what's necessary.</p>
</div>
<div className="border-t border-slate-100 pt-12">
<h2 className="text-2xl font-medium text-slate-900 mb-8">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-slate-50 rounded-xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900">
<span>Do you guarantee reimbursement?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-500 font-light px-6 pb-6">
                                No. We provide documentation clarity and readiness assessments to give your claim the best chance, but the insurance carrier makes the final decision.
                            </div>
</details>
<details className="group bg-slate-50 rounded-xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900">
<span>Are you my insurance company?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-500 font-light px-6 pb-6">
                                No. We are an independent service helping patients organize their paperwork for submission.
                            </div>
</details>
<details className="group bg-slate-50 rounded-xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900">
<span>What does "first case free" include?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-500 font-light px-6 pb-6">
                                It includes a Reimbursement Snapshot analysis of your documents and a list of next steps. It does not include the actual submission of the claim.
                            </div>
</details>
<details className="group bg-slate-50 rounded-xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900">
<span>Is this for cleanings and fillings?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-500 font-light px-6 pb-6">
                                No — we specialize in surgical dental cases only.
                            </div>
</details>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-8">
                    Start with your plan. Get clarity fast.
                </h2>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-4 bg-slate-900 text-white rounded-xl text-lg font-medium hover:bg-teal-600 transition-all shadow-lg hover:shadow-xl" onclick="switchPage('access')">
                        Upload My Treatment Plan
                    </button>
<button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl text-lg font-medium hover:bg-slate-50 transition-colors" onclick="switchPage('access')">
                        Book a 10-Minute Call
                    </button>
</div>
</div>
</section>
</main>

<main className="section-hidden min-h-screen pt-32 pb-24 bg-slate-50 relative" id="access-view">
<div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

<div className="mb-8">
<a className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium" href="javascript:void(0)" onclick="switchPage('home')">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
                    Back to Home
                </a>
</div>
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 space-y-8">
<div>
<h1 className="text-4xl font-medium tracking-tight text-slate-900 mb-4">
                            Let's build your <span className="text-teal-600 italic">snapshot</span>.
                        </h1>
<p className="text-lg text-slate-500 font-light">
                            Upload what you have. If something is missing, we'll let you know.
                        </p>
</div>
<div className="space-y-6 pt-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-teal-600">
<i className="w-5 h-5" data-lucide="check-circle"></i>
</div>
<div>
<div className="font-medium text-slate-900">Secure Upload</div>
<div className="text-sm text-slate-500 font-light mt-1">Your documents are encrypted and handled with HIPAA-compliant standards.</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-teal-600">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<div>
<div className="font-medium text-slate-900">Fast Turnaround</div>
<div className="text-sm text-slate-500 font-light mt-1">Receive your snapshot analysis within 24 business hours.</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="bg-white p-8 md:p-10 rounded-[2rem] soft-shadow border border-slate-100">
<h3 className="text-xl font-medium text-slate-900 mb-6">Patient Details</h3>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-400">First Name</label>
<input className="w-full border-b border-slate-200 py-2 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors bg-transparent" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Last Name</label>
<input className="w-full border-b border-slate-200 py-2 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors bg-transparent" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email</label>
<input className="w-full border-b border-slate-200 py-2 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors bg-transparent" type="email"/>
</div>
<div className="pt-6">
<label className="block w-full border-2 border-dashed border-slate-200 rounded-xl p-8 text-center cursor-pointer hover:border-teal-500 hover:bg-teal-50/30 transition-all group">
<div className="w-12 h-12 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center mx-auto mb-3 group-hover:bg-white group-hover:text-teal-500 transition-colors">
<i className="w-6 h-6" data-lucide="upload-cloud"></i>
</div>
<span className="block text-sm font-medium text-slate-700">Click to upload Treatment Plan</span>
<span className="block text-xs text-slate-400 mt-1">PDF, JPG, PNG up to 10MB</span>
<input className="hidden" type="file"/>
</label>
</div>
<div className="pt-4">
<button className="w-full py-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-teal-600 transition-colors shadow-lg flex items-center justify-center gap-2" type="button">
                                    Submit for Snapshot
                                </button>
<p className="text-center text-xs text-slate-400 mt-4">
                                    By submitting, you agree to our document handling policy.
                                </p>
</div>
</form>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-slate-900 text-slate-400 py-16">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid md:grid-cols-4 gap-12 mb-16 text-sm">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 text-white mb-6">
<i className="w-6 h-6 text-teal-500" data-lucide="activity"></i>
<span className="text-xl font-medium tracking-tight">YesOnus</span>
</div>
<p className="max-w-xs font-light text-slate-500">
                        Helping patients organize surgical dental paperwork for reimbursement readiness.
                    </p>
</div>
<div className="space-y-4">
<h5 className="font-bold text-white uppercase tracking-wider text-xs">Service</h5>
<a className="block hover:text-white transition-colors" href="#">Reimbursement Snapshot</a>
<a className="block hover:text-white transition-colors" href="#">Intake Call</a>
<a className="block hover:text-white transition-colors" href="#">Provider Collaboration</a>
</div>
<div className="space-y-4">
<h5 className="font-bold text-white uppercase tracking-wider text-xs">Legal</h5>
<a className="block hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="block hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-slate-600">
<p>© 2024 YesOnus. All rights reserved.</p>
<div className="flex gap-4 text-center md:text-right">
<span>Not legal, medical, or insurance advice.</span>
<span>No reimbursement guarantees.</span>
<span>Secure document handling.</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
