import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const steps = document.querySelectorAll('.form-step');
            const progressSteps = document.querySelectorAll('.progress-step');
            const progressBar = document.getElementById('progress-bar');
            
            const btnNext = document.getElementById('btn-next');
            const btnBack = document.getElementById('btn-back');
            const btnSubmit = document.getElementById('btn-submit');
            
            let currentStep = 0;

            function updateUI() {
                // Update Step Visibility
                steps.forEach((step, index) => {
                    if (index === currentStep) {
                        step.classList.remove('hidden');
                        setTimeout(() => step.classList.remove('opacity-0'), 10);
                    } else {
                        step.classList.add('hidden', 'opacity-0');
                    }
                });

                // Update Progress Bar Line
                progressBar.style.width = `${(currentStep / (steps.length - 1)) * 100}%`;

                // Update Progress Step Indicators
                progressSteps.forEach((step, index) => {
                    const icon = step.querySelector('.step-icon');
                    const text = step.querySelector('.step-text');
                    
                    if (index < currentStep) {
                        // Completed
                        icon.className = 'step-icon w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold bg-amber-500 text-white shadow-sm transition-all duration-300';
                        text.className = 'step-text absolute -bottom-7 text-xs font-medium text-slate-900 whitespace-nowrap transition-all duration-300';
                        icon.innerHTML = '<iconify-icon icon="solar:check-read-linear" style="stroke-width: 1.5;"></iconify-icon>';
                    } else if (index === currentStep) {
                        // Current
                        icon.className = 'step-icon w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold bg-white border-2 border-amber-500 text-amber-600 shadow-sm transition-all duration-300';
                        text.className = 'step-text absolute -bottom-7 text-xs font-medium text-amber-600 whitespace-nowrap transition-all duration-300';
                        icon.innerHTML = index + 1;
                    } else {
                        // Upcoming
                        icon.className = 'step-icon w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold bg-white border-2 border-slate-200 text-slate-400 transition-all duration-300';
                        text.className = 'step-text absolute -bottom-7 text-xs font-medium text-slate-400 whitespace-nowrap transition-all duration-300';
                        icon.innerHTML = index + 1;
                    }
                });

                // Update Buttons
                if (currentStep === 0) {
                    btnBack.classList.add('opacity-0', 'pointer-events-none');
                } else {
                    btnBack.classList.remove('opacity-0', 'pointer-events-none');
                }

                if (currentStep === steps.length - 1) {
                    btnNext.classList.add('hidden');
                    btnSubmit.classList.remove('hidden');
                    btnSubmit.classList.add('inline-flex');
                    populateSummary();
                } else {
                    btnNext.classList.remove('hidden');
                    btnSubmit.classList.add('hidden');
                    btnSubmit.classList.remove('inline-flex');
                }
            }

            function populateSummary() {
                document.getElementById('sum-name').innerText = document.getElementById('fname').value || 'Not provided';
                document.getElementById('sum-email').innerText = document.getElementById('email').value || 'Not provided';
                document.getElementById('sum-dob').innerText = document.getElementById('dob').value || 'Not provided';
                document.getElementById('sum-pob').innerText = document.getElementById('pob').value || 'Not provided';
                
                const statusRadio = document.querySelector('input[name="biz-status"]:checked');
                document.getElementById('sum-status').innerText = statusRadio ? statusRadio.value : 'Not provided';
                
                const challengeSelect = document.getElementById('challenge');
                document.getElementById('sum-challenge').innerText = challengeSelect.value || 'Not provided';
            }

            btnNext.addEventListener('click', () => {
                // Extremely basic validation bypass for preview purposes
                // In production, you'd check form validity here
                if (currentStep < steps.length - 1) {
                    currentStep++;
                    updateUI();
                }
            });

            btnBack.addEventListener('click', () => {
                if (currentStep > 0) {
                    currentStep--;
                    updateUI();
                }
            });

            // Initial UI Setup
            updateUI();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[1000px] aspect-[2/1] rounded-full blur-[100px] md:blur-[150px] bg-purple-900/5"></div>
<div className="absolute top-1/4 right-0 w-[40vw] max-w-[600px] aspect-square rounded-full blur-[120px] bg-amber-500/5"></div>
<div className="absolute bottom-0 left-0 w-[50vw] max-w-[800px] aspect-square rounded-full blur-[150px] bg-purple-900/5"></div>
</div>

<nav className="flex w-full max-w-6xl z-10 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">
<div className="font-serif font-semibold tracking-tighter text-xl text-purple-950">BDR.</div>
</nav>
<main className="flex-grow z-10 relative">

<section className="md:pt-32 md:pb-32 text-center max-w-4xl mr-auto ml-auto pt-20 pr-6 pb-24 pl-6">
<div className="inline-flex uppercase text-xs font-medium text-purple-800 tracking-wide bg-purple-50 border-purple-100 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 items-center gap-y-3 gap-x-3">
<iconify-icon className="" icon="solar:stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Before You Start or Scale Your Business…
            </div>
<h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-8 bg-gradient-to-br from-purple-950 via-slate-800 to-slate-600 text-transparent bg-clip-text">
                Check Your <br className="hidden md:block"/>
<span className="bg-gradient-to-r text-transparent bg-clip-text from-amber-500 via-yellow-500 to-amber-600">Business Destiny</span>
</h1>
<div className="space-y-4 max-w-2xl mx-auto text-base md:text-lg text-slate-600">
<p className="">Many entrepreneurs work hard but still struggle with wrong timing, financial pressure, or unexpected losses.</p>
<p className="">Your birth details may reveal hidden patterns that influence your business success.</p>
<p className="font-medium text-purple-900">Discover your Business Destiny Report and understand your business potential, timing, and opportunities.</p>
</div>
<div className="mt-12">
<a className="inline-flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_50px_-10px_rgba(245,158,11,0.6)] hover:to-amber-400 text-sm font-semibold text-purple-950 bg-gradient-to-b from-amber-300 to-amber-500 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_0_40px_-10px_rgba(245,158,11,0.4)]" href="#report-form">
                    👉 Get My Business Destiny Report
                </a>
</div>
</section>

<section className="w-full border-t bg-slate-50/50 border-slate-100">
<div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-serif text-2xl md:text-4xl font-semibold tracking-tight mb-6 text-slate-900">Are You Facing These Business Challenges?</h2>
</div>
<div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">

<div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-700">
<iconify-icon className="text-xl" icon="solar:graph-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-base pt-2 text-slate-700">Business growth feels slow despite hard work</p>
</div>
<div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-700">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-base pt-2 text-slate-700">Financial pressure or debt stress</p>
</div>
<div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-700">
<iconify-icon className="text-xl" icon="solar:signpost-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-base pt-2 text-slate-700">Confusion about the right time to start or expand</p>
</div>
<div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-700">
<iconify-icon className="text-xl" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-base pt-2 text-slate-700">Unexpected business losses</p>
</div>
</div>
<div className="mt-16 text-center max-w-2xl mx-auto space-y-4 text-base md:text-lg">
<p className="text-slate-600">Sometimes the issue is not effort — it's <span className="font-medium text-purple-900">timing and alignment</span>.</p>
<p>Your birth chart, numerology and energy cycles may reveal deeper insights.</p>
</div>
</div>
</section>

<section className="md:py-32 max-w-6xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="font-medium text-xs tracking-wide uppercase mb-4 block text-amber-600">What You Will Discover</span>
<h2 className="font-serif text-2xl md:text-4xl font-semibold tracking-tight text-slate-900">Your Business Destiny Report Reveals</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:border-amber-300 hover:shadow-md transition-all group">
<div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-amber-600">
<iconify-icon className="text-2xl" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-serif text-lg font-semibold mb-2 tracking-tight text-slate-900">Business Destiny Score</h3>
<p className="text-sm leading-relaxed text-slate-600">Know your business potential on a 0-100 scale.</p>
</div>
<div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:border-amber-300 hover:shadow-md transition-all group">
<div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-amber-600">
<iconify-icon className="text-2xl" icon="solar:safe-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-serif text-lg font-semibold mb-2 tracking-tight text-slate-900">Wealth Potential Analysis</h3>
<p className="text-sm leading-relaxed text-slate-600">Understand your financial strengths and opportunities.</p>
</div>
<div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:border-amber-300 hover:shadow-md transition-all group">
<div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-amber-600">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-serif text-lg font-semibold mb-2 tracking-tight text-slate-900">Business Growth Periods</h3>
<p className="text-sm leading-relaxed text-slate-600">Identify powerful growth years and caution phases.</p>
</div>
<div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:border-amber-300 hover:shadow-md transition-all group">
<div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-amber-600">
<iconify-icon className="text-2xl" icon="solar:math-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-serif text-lg font-semibold mb-2 tracking-tight text-slate-900">Numerology Money Code</h3>
<p className="text-sm leading-relaxed text-slate-600">Discover numbers that influence your financial success.</p>
</div>
<div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:border-amber-300 hover:shadow-md transition-all group">
<div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-amber-600">
<iconify-icon className="text-2xl" icon="solar:home-angle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-serif text-lg font-semibold mb-2 tracking-tight text-slate-900">Vastu Insights</h3>
<p className="text-sm leading-relaxed text-slate-600">Simple office and business alignment suggestions.</p>
</div>
<div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:border-amber-300 hover:shadow-md transition-all group">
<div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-amber-600">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-serif text-lg font-semibold mb-2 tracking-tight text-slate-900">Remedies &amp; Guidance</h3>
<p className="text-sm leading-relaxed text-slate-600">Practical suggestions to strengthen your business energy.</p>
</div>
</div>
</section>

<section className="w-full border-y bg-slate-50/50 border-slate-100">
<div className="md:py-32 max-w-5xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="text-center mb-16">
<h2 className="font-serif text-2xl md:text-4xl font-semibold tracking-tight mb-4 text-slate-900">Simple 3-Step Process</h2>
<p className="text-base text-slate-600">How it works</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent to-transparent via-slate-200"></div>

<div className="relative text-center">
<div className="w-12 h-12 mx-auto bg-white border shadow-sm rounded-full flex items-center justify-center text-sm font-medium mb-6 relative z-10 border-slate-200 text-slate-700">1</div>
<h3 className="font-serif text-base font-semibold mb-2 text-slate-900">Step 1</h3>
<p className="text-sm max-w-[200px] mx-auto text-slate-600">Enter your birth and business details.</p>
</div>
<div className="relative text-center">
<div className="w-12 h-12 mx-auto bg-white border shadow-sm rounded-full flex items-center justify-center text-sm font-medium mb-6 relative z-10 border-slate-200 text-slate-700">2</div>
<h3 className="font-serif text-base font-semibold mb-2 text-slate-900">Step 2</h3>
<p className="text-sm max-w-[250px] mx-auto text-slate-600">Our analysis system studies your astrological and numerological patterns.</p>
</div>
<div className="relative text-center">
<div className="w-12 h-12 mx-auto bg-amber-50 border border-amber-300 rounded-full flex items-center justify-center text-sm font-medium mb-6 relative z-10 shadow-[0_0_20px_rgba(245,158,11,0.2)] text-amber-700">3</div>
<h3 className="font-serif text-base font-semibold mb-2 text-slate-900">Step 3</h3>
<p className="text-sm max-w-[250px] mx-auto text-slate-600">Receive your Business Destiny Report with insights and guidance.</p>
</div>
</div>
</div>
</section>

<section className="md:py-32 max-w-4xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="font-serif text-2xl md:text-4xl font-semibold tracking-tight mb-6 text-slate-900">Who This Report Is For</h2>
<p className="text-base mb-8 text-slate-600">This report is useful if you are:</p>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
<iconify-icon className="text-xl flex-shrink-0 text-amber-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-slate-700">Planning to start a new business</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
<iconify-icon className="text-xl flex-shrink-0 text-amber-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-slate-700">Running a small or medium business</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
<iconify-icon className="text-xl flex-shrink-0 text-amber-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-slate-700">Looking for better business timing</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
<iconify-icon className="text-xl flex-shrink-0 text-amber-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-slate-700">Facing financial or growth challenges</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
<iconify-icon className="text-xl flex-shrink-0 text-amber-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-slate-700">Wanting deeper insight into your business journey</span>
</div>
</div>
</div>
</section>

<section className="w-full bg-slate-50/50 border-t border-slate-100" id="report-form">
<div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
<div className="text-center mb-12">
<h2 className="font-serif text-2xl md:text-4xl font-semibold tracking-tight mb-4 text-slate-900">Start Your Analysis</h2>
<p className="text-sm text-slate-600">Enter your details accurately for the most precise business insights.</p>
</div>
<div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-10">

<div className="relative mb-16 mt-4 max-w-md mx-auto">
<div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -translate-y-1/2 rounded-full"></div>
<div className="absolute top-1/2 left-0 h-[2px] bg-amber-500 -translate-y-1/2 transition-all duration-500 rounded-full" id="progress-bar" style={{width: '0%'}}></div>
<div className="relative flex justify-between">

<div className="progress-step flex flex-col items-center">
<div className="step-icon w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold bg-white border-2 border-amber-500 text-amber-600 shadow-sm transition-all duration-300">1</div>
<span className="step-text absolute -bottom-7 text-xs font-medium text-amber-600 whitespace-nowrap transition-all duration-300">Basic</span>
</div>

<div className="progress-step flex flex-col items-center">
<div className="step-icon w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold bg-white border-2 border-slate-200 text-slate-400 transition-all duration-300">2</div>
<span className="step-text absolute -bottom-7 text-xs font-medium text-slate-400 whitespace-nowrap transition-all duration-300">Birth</span>
</div>

<div className="progress-step flex flex-col items-center">
<div className="step-icon w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold bg-white border-2 border-slate-200 text-slate-400 transition-all duration-300">3</div>
<span className="step-text absolute -bottom-7 text-xs font-medium text-slate-400 whitespace-nowrap transition-all duration-300">Business</span>
</div>

<div className="progress-step flex flex-col items-center">
<div className="step-icon w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold bg-white border-2 border-slate-200 text-slate-400 transition-all duration-300">4</div>
<span className="step-text absolute -bottom-7 text-xs font-medium text-slate-400 whitespace-nowrap transition-all duration-300">Done</span>
</div>
</div>
</div>

<form className="space-y-6" id="destiny-form" onsubmit="event.preventDefault();">

<div className="form-step transition-opacity duration-300" id="step-1">
<h3 className="font-serif text-xl font-semibold mb-6 text-slate-900 border-b border-slate-100 pb-4">Basic Details</h3>
<div className="grid md:grid-cols-2 gap-6">
<div className="md:col-span-2">
<label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-slate-900 placeholder:text-slate-400" id="fname" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-slate-900 placeholder:text-slate-400" id="email" placeholder="john@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Mobile Number *</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-slate-900 placeholder:text-slate-400" id="mobile" placeholder="+1 (555) 000-0000" required="" type="tel"/>
</div>
<div className="md:col-span-2">
<label className="block text-sm font-medium text-slate-700 mb-2">Gender (Optional)</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-slate-900 cursor-pointer" id="gender">
<option disabled="" selected="" value="">Select gender</option>
<option value="Male">Male</option>
<option value="Female">Female</option>
<option value="Other">Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>

<div className="form-step hidden transition-opacity duration-300 opacity-0" id="step-2">
<h3 className="font-serif text-xl font-semibold mb-6 text-slate-900 border-b border-slate-100 pb-4">Birth Details</h3>
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Date of Birth *</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-slate-900 text-slate-500" id="dob" required="" type="date"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Time of Birth *</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-slate-900 text-slate-500" id="tob" required="" type="time"/>
</div>
<div className="md:col-span-2">
<label className="block text-sm font-medium text-slate-700 mb-2">Place of Birth (City + Country) *</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-slate-900 placeholder:text-slate-400" id="pob" placeholder="e.g. New York, USA" required="" type="text"/>
</div>
</div>
</div>

<div className="form-step hidden transition-opacity duration-300 opacity-0" id="step-3">
<h3 className="font-serif text-xl font-semibold mb-6 text-slate-900 border-b border-slate-100 pb-4">Business Information</h3>
<div className="space-y-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-3">Business Status *</label>
<div className="grid md:grid-cols-2 gap-4">
<label className="relative flex cursor-pointer rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-all has-[:checked]:bg-amber-50/30 has-[:checked]:border-amber-500 hover:bg-slate-50">
<input checked="" className="sr-only" name="biz-status" type="radio" value="Planning to start"/>
<div className="flex items-center justify-between w-full">
<span className="text-sm font-medium text-slate-800">Planning to start</span>
<div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center peer-checked:bg-amber-500 peer-checked:border-amber-500">
<div className="w-2 h-2 rounded-full bg-amber-500 scale-0 transition-transform hidden"></div>
</div>
</div>
</label>
<label className="relative flex cursor-pointer rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-all has-[:checked]:bg-amber-50/30 has-[:checked]:border-amber-500 hover:bg-slate-50">
<input className="sr-only" name="biz-status" type="radio" value="Already running a business"/>
<div className="flex items-center justify-between w-full">
<span className="text-sm font-medium text-slate-800">Already running a business</span>
<div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center peer-checked:bg-amber-500 peer-checked:border-amber-500">
<div className="w-2 h-2 rounded-full bg-amber-500 scale-0 transition-transform hidden"></div>
</div>
</div>
</label>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Current Profession / Business Type</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-slate-900 placeholder:text-slate-400" id="profession" placeholder="e.g. E-commerce, Freelance Designer" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Current Monthly Revenue (Optional)</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-slate-900 cursor-pointer" id="revenue">
<option disabled="" selected="" value="">Select revenue range</option>
<option value="Pre-revenue">Pre-revenue</option>
<option value="Under $5k">Under $5k</option>
<option value="$5k - $20k">$5k - $20k</option>
<option value="$20k - $50k">$20k - $50k</option>
<option value="Over $50k">Over $50k</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Biggest Business Challenge *</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-slate-900 cursor-pointer" id="challenge" required="">
<option disabled="" selected="" value="">Select your main challenge</option>
<option value="Slow growth">Slow growth</option>
<option value="Financial pressure">Financial pressure</option>
<option value="Debt problems">Debt problems</option>
<option value="Business losses">Business losses</option>
<option value="Confusion about business direction">Confusion about business direction</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>

<div className="form-step hidden transition-opacity duration-300 opacity-0" id="step-4">
<div className="text-center mb-8">
<div className="w-16 h-16 rounded-full bg-amber-50 mx-auto flex items-center justify-center text-amber-500 mb-4">
<iconify-icon className="text-3xl" icon="solar:document-add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-serif text-2xl font-semibold mb-2 text-slate-900">Almost Done!</h3>
<p className="text-sm text-slate-600">Please review your details before proceeding.</p>
</div>
<div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-6 mb-8 text-sm">
<div className="grid grid-cols-2 gap-y-4 gap-x-6">
<div>
<p className="text-xs text-slate-400 mb-1 uppercase tracking-wide">Name</p>
<p className="font-medium text-slate-900" id="sum-name">-</p>
</div>
<div>
<p className="text-xs text-slate-400 mb-1 uppercase tracking-wide">Email</p>
<p className="font-medium text-slate-900 truncate" id="sum-email">-</p>
</div>
<div>
<p className="text-xs text-slate-400 mb-1 uppercase tracking-wide">Date of Birth</p>
<p className="font-medium text-slate-900" id="sum-dob">-</p>
</div>
<div>
<p className="text-xs text-slate-400 mb-1 uppercase tracking-wide">Place of Birth</p>
<p className="font-medium text-slate-900" id="sum-pob">-</p>
</div>
<div className="col-span-2 border-t border-slate-100 pt-4 mt-2">
<p className="text-xs text-slate-400 mb-1 uppercase tracking-wide">Business Status</p>
<p className="font-medium text-slate-900" id="sum-status">-</p>
</div>
<div className="col-span-2">
<p className="text-xs text-slate-400 mb-1 uppercase tracking-wide">Main Challenge</p>
<p className="font-medium text-slate-900" id="sum-challenge">-</p>
</div>
</div>
</div>
<div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100/50 text-center">
<p className="text-sm font-medium text-purple-900">Your Business Destiny Report will be generated based on the information provided.</p>
</div>
</div>

<div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-8">
<button className="px-6 py-2.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all opacity-0 pointer-events-none" id="btn-back" type="button">
                                Back
                            </button>
<button className="px-8 py-2.5 text-sm font-semibold bg-gradient-to-b from-amber-300 to-amber-500 rounded-xl transition-all shadow-md shadow-amber-500/20 text-purple-950 hover:to-amber-400" id="btn-next" type="button">
                                Next Step
                            </button>
<a className="hidden px-8 py-2.5 text-sm font-semibold bg-gradient-to-b from-amber-300 to-amber-500 rounded-xl transition-all shadow-md shadow-amber-500/20 text-purple-950 hover:to-amber-400" href="#pricing" id="btn-submit">
                                Generate My Business Destiny Report
                            </a>
</div>
</form>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-24 md:py-32 relative" id="pricing">
<div className="relative max-w-md mx-auto rounded-[2rem] p-[1px] bg-gradient-to-b from-amber-400/50 via-amber-400/10 to-transparent shadow-2xl shadow-purple-900/5">
<div className="absolute inset-0 bg-amber-400/10 blur-xl rounded-[2rem]"></div>
<div className="relative bg-white rounded-[calc(2rem-1px)] p-8 md:p-12 text-center overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
<h2 className="font-serif text-2xl font-semibold tracking-tight mb-2 text-slate-900">Get Your Business Destiny Report</h2>
<div className="mt-8 mb-8">
<div className="flex items-center justify-center gap-3 mb-2">
<span className="text-sm font-medium text-slate-500">Regular Price:</span>
<span className="text-base text-slate-400 line-through decoration-slate-300">₹999</span>
</div>
<div className="flex items-center justify-center gap-2">
<span className="text-sm font-medium tracking-wide uppercase text-amber-600">Launch Offer</span>
</div>
<div className="mt-2 text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
                            ₹499
                        </div>
</div>
<p className="text-sm mb-8 text-slate-600">Limited access during the early launch phase.</p>
<a className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold bg-gradient-to-b from-amber-300 to-amber-500 rounded-2xl transition-all shadow-[0_0_30px_-10px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)] text-purple-950 hover:to-amber-400" href="#report-form">
                        👉 Start Analysis Now
                    </a>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-12 md:py-20 text-center border-t border-slate-100">
<p className="text-sm mb-8 uppercase tracking-widest font-medium text-slate-400">This report is prepared using principles from</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-xl text-purple-900" icon="solar:moon-stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-slate-700">Astrology</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-xl text-purple-900" icon="solar:calculator-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-slate-700">Numerology</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-xl text-purple-900" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-slate-700">Vastu Insights</span>
</div>
</div>
<p className="text-sm text-slate-500 max-w-lg mx-auto">Combined with modern analytical methods. Many entrepreneurs explore destiny insights before making major business decisions.</p>
</section>

<section className="w-full bg-gradient-to-b from-transparent border-t to-purple-900/5 border-slate-100">
<div className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
<h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-slate-900">Discover Your Business Potential</h2>
<p className="text-base md:text-lg max-w-2xl mx-auto mb-10 text-slate-600">Before making your next big business move, understand the hidden timing of your success. Generate your Business Destiny Report today.</p>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold border rounded-full transition-all text-white bg-purple-900 border-purple-800 hover:bg-purple-800 shadow-lg shadow-purple-900/20" href="#report-form">
                    👉 Get My Report
                </a>
</div>
</section>
</main>

<footer className="relative z-10 w-full border-t bg-slate-50 border-slate-200">
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="font-serif font-semibold tracking-tighter text-lg opacity-80 text-purple-950">BDR.</div>
<p className="text-xs text-slate-500">© 2024 Business Destiny Report. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
