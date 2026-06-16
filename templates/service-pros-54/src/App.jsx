import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Poppins', 'sans-serif'],
},
colors: {
slate: {
850: '#1e293b',
900: '#0f172a',
950: '#020617',
}
}
}
}
}



        (function() {
            const visitorsIn = document.getElementById('sim-visitors');
            const valueIn = document.getElementById('sim-value');
            const rateIn = document.getElementById('sim-rate');
            const toggle = document.getElementById('sim-toggle');
            
            const vLabel = document.getElementById('sim-visitors-val');
            const valLabel = document.getElementById('sim-value-val');
            const rLabel = document.getElementById('sim-rate-val');
            
            const outLeads = document.getElementById('out-leads');
            const outSaved = document.getElementById('out-saved');
            const outRev = document.getElementById('out-revenue');
            const outBadge = document.getElementById('out-badge');

            let isOptimized = true;

            function update() {
                const v = parseInt(visitorsIn.value);
                const val = parseInt(valueIn.value);
                const r = parseFloat(rateIn.value);

                vLabel.textContent = v.toLocaleString();
                valLabel.textContent = '$' + val.toLocaleString();
                rLabel.textContent = r + '%';

                // Logic
                // Optimized site typically doubles conversion + saves missed opportunities (approx 20% more)
                let leads = Math.round(v * (r / 100));
                let missedCalls = 0;
                let revenue = 0;

                if (isOptimized) {
                    // Optimization Boost (Design + Speed)
                    const optimizedRate = r * 2.2; 
                    leads = Math.round(v * (optimizedRate / 100));
                    
                    // Missed Call Text Back Logic (Assume 10% of leads call and get missed, then saved)
                    missedCalls = Math.round(leads * 0.15);
                    leads += missedCalls;
                    
                    outBadge.classList.remove('hidden');
                    outSaved.textContent = missedCalls;
                    outSaved.classList.add('text-green-600');
                    outLeads.classList.add('text-slate-900');
                } else {
                    outBadge.classList.add('hidden');
                    outSaved.textContent = "0";
                    outSaved.classList.remove('text-green-600');
                    outLeads.classList.remove('text-green-600');
                }

                revenue = leads * val;

                // Animate text
                outLeads.textContent = leads;
                outRev.textContent = '$' + revenue.toLocaleString();
            }

            toggle.addEventListener('click', () => {
                isOptimized = !isOptimized;
                const thumb = toggle.querySelector('span');
                if(isOptimized) {
                    toggle.classList.add('bg-slate-900');
                    toggle.classList.remove('bg-slate-300');
                    thumb.classList.add('translate-x-6');
                    thumb.classList.remove('translate-x-1');
                } else {
                    toggle.classList.remove('bg-slate-900');
                    toggle.classList.add('bg-slate-300');
                    thumb.classList.remove('translate-x-6');
                    thumb.classList.add('translate-x-1');
                }
                update();
            });

            [visitorsIn, valueIn, rateIn].forEach(el => el.addEventListener('input', update));
            update();
        })();
        


        function nextStep(step) {
            // Hide all steps
            document.querySelectorAll('.quiz-step').forEach(el => el.classList.add('hidden'));
            
            // Show target step
            const target = document.querySelector(`.quiz-step[data-step="${step}"]`);
            if(target) {
                target.classList.remove('hidden');
                target.classList.add('fade-in-up'); // Re-trigger animation
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-display font-semibold text-lg tracking-tight text-slate-900 flex items-center gap-2" href="#">
<span className="bg-slate-900 text-white w-8 h-8 flex items-center justify-center rounded-lg text-sm">S</span>
                STANCEX
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#industries">Who We Help</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors focus:ring-4 focus:ring-slate-100" href="#contact">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden bg-white pt-20 pr-6 pl-6 relative items-center justify-center">

<div className="absolute inset-0 z-0 opacity-40" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px', maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'}}></div>
<div className="z-10 text-center max-w-5xl mr-auto ml-auto relative space-y-8 pt-10">

<div className="fade-in-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 mb-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Now accepting new local business partners
            </div>

<h1 className="fade-in-up delay-100 md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-semibold text-slate-900 tracking-tight font-display uppercase">
                High-Converting Websites <br className="hidden md:block"/> &amp; Automation for <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">Service Pros</span>
</h1>

<p className="fade-in-up delay-200 md:text-xl leading-relaxed text-lg text-slate-500 max-w-2xl mr-auto ml-auto">
                From local consultants to home service pros—we build the online systems you need to capture leads, book appointments, and grow your reputation on autopilot.
            </p>
<div className="fade-in-up delay-300 pt-4">
<a className="group inline-flex items-center justify-center overflow-hidden transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] shadow-slate-900/10 text-base font-medium text-white bg-slate-900 rounded-xl pt-4 pr-8 pb-4 pl-8 relative shadow-xl" href="#contact">
<span className="">See Our Work</span>
<iconify-icon className="ml-2 transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</a>
<p className="mt-4 text-xs text-slate-400">No long-term contracts. Results driven.</p>
</div>

<div className="fade-in-up delay-300 mt-12 mb-6">
<div className="w-full max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden text-left" style={{background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'}}>

<div className="px-6 py-4 border-b border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-900" icon="lucide:calculator"></iconify-icon>
</div>
<div>
<h3 className="font-display font-semibold text-sm text-slate-900 tracking-tight">Website &amp; Automation ROI</h3>
<p className="text-xs text-slate-500">How much revenue are you missing?</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-slate-500">Old Site</span>
<button aria-checked="true" className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-900 transition-colors focus:outline-none" id="sim-toggle" role="switch">
<span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
</button>
<span className="text-xs font-medium text-slate-900">With StanceX</span>
</div>
</div>

<div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="space-y-6">

<div>
<div className="flex items-center justify-between mb-2">
<label className="text-sm font-medium text-slate-700">Monthly Website Visitors</label>
<span className="text-xs font-semibold bg-slate-100 px-2 py-1 rounded text-slate-900" id="sim-visitors-val">500</span>
</div>
<input className="accent-slate-900" id="sim-visitors" max="5000" min="100" step="100" type="range" value="500"/>
</div>

<div>
<div className="flex items-center justify-between mb-2">
<label className="text-sm font-medium text-slate-700">Avg. Customer Value</label>
<span className="text-xs font-semibold bg-slate-100 px-2 py-1 rounded text-slate-900" id="sim-value-val">$500</span>
</div>
<input className="accent-slate-900" id="sim-value" max="5000" min="100" step="100" type="range" value="500"/>
</div>

<div>
<div className="flex items-center justify-between mb-2">
<label className="text-sm font-medium text-slate-700">Current Conversion Rate</label>
<span className="text-xs font-semibold bg-slate-100 px-2 py-1 rounded text-slate-900" id="sim-rate-val">2%</span>
</div>
<input className="accent-slate-900" id="sim-rate" max="10" min="1" step="0.5" type="range" value="2"/>
<p className="text-xs text-slate-400 mt-2">Most basic sites convert at &lt; 2%</p>
</div>
</div>

<div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col justify-center space-y-6">

<div className="flex items-center justify-between border-b border-slate-200 pb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500">
<iconify-icon icon="lucide:users" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-600">Monthly Leads</span>
</div>
<span className="text-2xl font-semibold text-slate-900" id="out-leads">25</span>
</div>

<div className="flex items-center justify-between border-b border-slate-200 pb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500">
<iconify-icon icon="lucide:smartphone" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-600">Missed Calls Saved</span>
</div>
<span className="text-2xl font-semibold text-slate-900" id="out-saved">0</span>
</div>

<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Est. Monthly Revenue</p>
<div className="flex items-baseline gap-2">
<span className="text-4xl font-bold text-slate-900 tracking-tight" id="out-revenue">$12,500</span>
<span className="hidden px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium" id="out-badge">+150% Growth</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="py-24 px-6 bg-slate-50" id="industries">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-slate-900 mb-4">Industries We Transform</h2>
<p className="text-slate-500">We specialize in helping service-based businesses dominate their local market.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:briefcase" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl text-slate-900 mb-3">Professional Services</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Build trust instantly with a premium digital presence that positions you as the authority.
                    </p>
<ul className="space-y-2 text-sm text-slate-600 font-medium">
<li className="flex items-center gap-2">
<iconify-icon className="text-slate-300" icon="lucide:check-circle-2"></iconify-icon> Insurance Agents
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-slate-300" icon="lucide:check-circle-2"></iconify-icon> Accountants &amp; CPAs
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-slate-300" icon="lucide:check-circle-2"></iconify-icon> Consultants &amp; Lawyers
                        </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:hammer" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl text-slate-900 mb-3">Home &amp; Local Services</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Capture leads while you're on the job site. Never miss a customer inquiry again.
                    </p>
<ul className="space-y-2 text-sm text-slate-600 font-medium">
<li className="flex items-center gap-2">
<iconify-icon className="text-slate-300" icon="lucide:check-circle-2"></iconify-icon> General Contractors
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-slate-300" icon="lucide:check-circle-2"></iconify-icon> Landscapers
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-slate-300" icon="lucide:check-circle-2"></iconify-icon> HVAC &amp; Handymen
                        </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:heart-pulse" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl text-slate-900 mb-3">Health &amp; Lifestyle</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Fill your calendar with automated booking systems and review management.
                    </p>
<ul className="space-y-2 text-sm text-slate-600 font-medium">
<li className="flex items-center gap-2">
<iconify-icon className="text-slate-300" icon="lucide:check-circle-2"></iconify-icon> Gyms &amp; Personal Trainers
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-slate-300" icon="lucide:check-circle-2"></iconify-icon> Med Spas &amp; Salons
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-slate-300" icon="lucide:check-circle-2"></iconify-icon> Therapists
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="features">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-transparent rounded-3xl transform rotate-3"></div>
<div className="relative bg-slate-900 rounded-3xl p-8 shadow-2xl overflow-hidden">

<div className="flex flex-col items-center">
<div className="w-full bg-slate-800/50 rounded-xl p-4 mb-4 border border-slate-700/50 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
<iconify-icon icon="lucide:check" width="16"></iconify-icon>
</div>
<div>
<p className="text-white text-sm font-medium">New Appointment Booked</p>
<p className="text-slate-400 text-xs">Automated via SMS • Just now</p>
</div>
</div>
</div>
<div className="w-full bg-slate-800/50 rounded-xl p-4 mb-4 border border-slate-700/50 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center">
<iconify-icon icon="lucide:message-square" width="16"></iconify-icon>
</div>
<div>
<p className="text-white text-sm font-medium">Missed Call Text Sent</p>
<p className="text-slate-400 text-xs">"Sorry I missed you! How can I help?"</p>
</div>
</div>
</div>
<div className="w-full bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<div>
<p className="text-white text-sm font-medium">5-Star Review Received</p>
<p className="text-slate-400 text-xs">Google Business Profile • 2 mins ago</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-slate-900 mb-8">
                    More Than Just a Website. <br/> A Growth Engine.
                </h2>
<div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">

<div>
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
<iconify-icon className="text-slate-900" icon="lucide:mouse-pointer-click" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Get More Clients</h3>
<p className="text-sm text-slate-500 leading-relaxed">Turn traffic into paying customers with high-performance, conversion-focused design.</p>
</div>

<div>
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
<iconify-icon className="text-slate-900" icon="lucide:message-circle" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Convert More Sales</h3>
<p className="text-sm text-slate-500 leading-relaxed">AI systems that instantly text back missed calls and book appointments for you 24/7.</p>
</div>

<div>
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
<iconify-icon className="text-slate-900" icon="lucide:star" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">5-Star Reviews</h3>
<p className="text-sm text-slate-500 leading-relaxed">Automated reputation management to gather reviews and boost your Google rankings.</p>
</div>

<div>
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
<iconify-icon className="text-slate-900" icon="lucide:layout-template" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Stand Out</h3>
<p className="text-sm text-slate-500 leading-relaxed">Premium digital branding that makes you look like the market leader and beats the competition.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 border-t border-slate-100" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer transition-all hover:border-slate-300">
<summary className="flex items-center justify-between p-6 font-medium text-slate-900">
                        Do you work with my specific industry?
                        <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-500 leading-relaxed text-sm">
                        Most likely, yes. If you are a service-based business or local professional (Accountant, Contractor, Consultant, Medical, etc.) who needs to generate leads and appointments, our system is built exactly for you.
                    </div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer transition-all hover:border-slate-300">
<summary className="flex items-center justify-between p-6 font-medium text-slate-900">
                        How long does a website take?
                        <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-500 leading-relaxed text-sm">
                        We move fast. A typical high-converting landing page or website launch takes between 2-4 weeks from strategy to go-live, depending on the complexity of your requirements.
                    </div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer transition-all hover:border-slate-300">
<summary className="flex items-center justify-between p-6 font-medium text-slate-900">
                        Is it mobile-friendly?
                        <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-500 leading-relaxed text-sm">
                        Absolutely. Over 60% of local searches happen on mobile devices. We design "mobile-first," ensuring your site looks perfect and converts customers on phones, tablets, and desktops alike.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden" id="contact">

<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-6">Ready to Scale Your Service Business?</h2>
<p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Stop losing leads to your competition. Let’s build a system that brings you customers while you sleep.
            </p>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-white rounded-xl hover:bg-slate-100 transition-all hover:scale-[1.02] shadow-xl" href="#">
                See Our Work
                <iconify-icon className="ml-2 text-slate-600" icon="lucide:arrow-right" width="20"></iconify-icon>
</a>
<div className="my-16 flex items-center gap-4 text-slate-700">
<div className="h-px w-full bg-slate-800"></div>
<span className="text-xs uppercase tracking-wider whitespace-nowrap text-slate-500">Or check your readiness</span>
<div className="h-px w-full bg-slate-800"></div>
</div>

<div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-left transition-all duration-300" id="quiz-container">
<p className="text-sm text-slate-400 italic text-center mb-6">Take our 2-minute Website &amp; Automation Quiz</p>

<div className="quiz-step block" data-step="1">
<div className="flex justify-between items-center mb-4 text-xs font-medium uppercase tracking-wider text-slate-500">
<span>Question 1 of 3</span>
<span>0% Complete</span>
</div>
<h3 className="text-xl font-medium text-white mb-6">Do you currently have a way to text leads back automatically?</h3>
<div className="space-y-3">
<button className="w-full text-left p-4 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-700 transition-all flex items-center justify-between group" onclick="nextStep(2)">
<span>Yes, it's fully automated</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:chevron-right"></iconify-icon>
</button>
<button className="w-full text-left p-4 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-700 transition-all flex items-center justify-between group" onclick="nextStep(2)">
<span>No, I do it manually</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:chevron-right"></iconify-icon>
</button>
</div>
</div>

<div className="quiz-step hidden" data-step="2">
<div className="flex justify-between items-center mb-4 text-xs font-medium uppercase tracking-wider text-slate-500">
<span>Question 2 of 3</span>
<span>50% Complete</span>
</div>
<h3 className="text-xl font-medium text-white mb-6">How fast is your current website loading?</h3>
<div className="space-y-3">
<button className="w-full text-left p-4 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-700 transition-all flex items-center justify-between group" onclick="nextStep(3)">
<span>Instant / Very Fast</span>
</button>
<button className="w-full text-left p-4 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-700 transition-all flex items-center justify-between group" onclick="nextStep(3)">
<span>It's a bit slow</span>
</button>
<button className="w-full text-left p-4 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-700 transition-all flex items-center justify-between group" onclick="nextStep(3)">
<span>I don't have a website</span>
</button>
</div>
</div>

<div className="quiz-step hidden" data-step="3">
<div className="flex justify-between items-center mb-4 text-xs font-medium uppercase tracking-wider text-slate-500">
<span>Question 3 of 3</span>
<span>90% Complete</span>
</div>
<h3 className="text-xl font-medium text-white mb-6">What is your main goal right now?</h3>
<div className="space-y-3">
<button className="w-full text-left p-4 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-700 transition-all flex items-center justify-between group" onclick="nextStep('result')">
<span>More Leads</span>
</button>
<button className="w-full text-left p-4 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-700 transition-all flex items-center justify-between group" onclick="nextStep('result')">
<span>Better Reputation/Reviews</span>
</button>
<button className="w-full text-left p-4 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-700 transition-all flex items-center justify-between group" onclick="nextStep('result')">
<span>Saving Time on Admin</span>
</button>
</div>
</div>

<div className="quiz-step hidden text-center py-4" data-step="result">
<div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 text-green-500 rounded-full mb-4">
<iconify-icon icon="lucide:check" strokeWidth="2" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">You're a Perfect Fit.</h3>
<p className="text-slate-300 mb-8 max-w-lg mx-auto">
                        Your business could see a 20-30% revenue increase just by implementing our "Missed Call Text Back" automation and high-converting design.
                    </p>
<a className="inline-block px-6 py-3 text-sm font-medium text-slate-900 bg-white rounded-lg hover:bg-slate-200 transition-colors" href="#">
                        Book Your Free Strategy Call
                    </a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
<p>© 2025 StanceX. All rights reserved.</p>
<p>Designed for Service Professionals.</p>
</div>
</section>



    </>
  );
}
