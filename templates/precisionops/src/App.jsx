import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.getElementById('application-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const form = this;
            const btn = form.querySelector('button[type="submit"]');
            
            // 1. UI Loading State
            btn.disabled = true;
            btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin" width="20"></iconify-icon> Processing...';
            btn.classList.add('opacity-75', 'cursor-not-allowed');

            // Collect form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            // 2. Logic to send Admin Email (Console Log simulation)
            console.log("SENDING ADMIN EMAIL:", data);

            // 3. Simulate Network Delay & Show Success Overlay
            setTimeout(() => {
                const overlay = document.getElementById('success-overlay');
                overlay.classList.remove('hidden');
                overlay.classList.add('flex');
                
                // Reset form in background
                form.reset();
            }, 1000);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-900" icon="solar:tuning-square-2-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold tracking-tight text-slate-900">PrecisionOps™</span>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#how-it-works">Process</a>
<a className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded text-xs hover:bg-slate-800 transition-colors" href="#apply">Get Audit</a>
</div>
</div>
</nav>

<header className="pt-32 pb-20 px-6 border-b border-slate-100">
<div className="max-w-4xl mx-auto text-center">

<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Agency Operations Systems<br className="hidden md:block"/> Built in 7 Days
            </h1>

<p className="leading-relaxed text-lg font-light text-slate-600 max-w-2xl mr-auto mb-6 ml-auto">We help digital marketing agencies eliminate operational chaos by building clear onboarding, delivery, and internal workflows so your team runs without you micromanaging everything.</p>

<p className="text-sm font-medium text-slate-500 mb-10 bg-slate-50 inline-block px-3 py-1 rounded-full border border-slate-100">
                Designed for agencies doing $20K–$200K/month growing faster than their systems.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">

<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-200" href="#apply">
                    Get Your Operations Audit
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-600 border border-slate-200 px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-slate-50 hover:text-slate-900 transition-all" href="#">
                    Book a 15-Minute Fit Call
                </a>
</div>

<div className="text-xs text-slate-400 mb-12">
                (Qualification required · Flat-rate implementation)
            </div>

<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xs font-medium text-slate-500 tracking-wide">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-slate-900" icon="solar:check-read-linear" width="16"></iconify-icon>
<span>Done-for-you systems</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-slate-900" icon="solar:check-read-linear" width="16"></iconify-icon>
<span>No templates, no coaching</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-slate-900" icon="solar:check-read-linear" width="16"></iconify-icon>
<span>Built by operations specialist (Military exp.)</span>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-slate-50" id="how-it-works">
<div className="max-w-5xl mx-auto">
<div className="flex items-center gap-2 mb-12">
<span className="h-px w-8 bg-slate-300"></span>
<span className="text-xs font-semibold uppercase tracking-widest text-slate-500">How It Works</span>
</div>
<div className="grid md:grid-cols-3 gap-12">

<div>
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-900 font-semibold mb-6 shadow-sm">1</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Apply</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Complete the operational audit application below. We only accept agencies where we can guarantee results.
                    </p>
</div>

<div>
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-900 font-semibold mb-6 shadow-sm">2</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Implement</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        We tear down your broken workflows and rebuild your internal systems end-to-end. Documentation, automation, and ownership.
                    </p>
</div>

<div>
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-900 font-semibold mb-6 shadow-sm">3</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Operate Cleanly</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        You step back from daily fires. Your team runs the system. Deliverables go out on time, every time.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-slate-100">
<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">

<div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-6">Who This Is For</h2>
<ul className="space-y-4">
<li className="flex gap-3 items-start">
<iconify-icon className="text-slate-900 mt-0.5 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-slate-600 text-sm">Agencies &amp; service businesses with operational chaos.</span>
</li>
<li className="flex gap-3 items-start">
<iconify-icon className="text-slate-900 mt-0.5 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-slate-600 text-sm">Founders stuck in fulfillment instead of growth.</span>
</li>
<li className="flex gap-3 items-start">
<iconify-icon className="text-slate-900 mt-0.5 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-slate-600 text-sm">Teams that constantly ask "how do I do this?"</span>
</li>
</ul>
</div>

<div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
<h2 className="text-lg font-medium tracking-tight text-slate-500 mb-6">Not a Fit If...</h2>
<ul className="space-y-4">
<li className="flex gap-3 items-start">
<iconify-icon className="text-slate-400 mt-0.5 shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-slate-500 text-sm">You are just starting out (under $5k/mo).</span>
</li>
<li className="flex gap-3 items-start">
<iconify-icon className="text-slate-400 mt-0.5 shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-slate-500 text-sm">You want "coaching" instead of hard systems implementation.</span>
</li>
<li className="flex gap-3 items-start">
<iconify-icon className="text-slate-400 mt-0.5 shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-slate-500 text-sm">You aren't willing to change how you currently work.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 relative overflow-hidden" id="apply">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-2xl mx-auto relative z-10">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">
                    Start Your Reset
                </h2>
<p className="text-slate-400 text-sm md:text-base font-light max-w-lg mx-auto">
                    Fill out the application below. If you qualify, we'll build the systems that scale your agency.
                </p>
</div>
<div className="bg-white rounded-xl p-8 md:p-10 shadow-2xl shadow-black/50 border border-slate-800 relative">

<div className="hidden absolute inset-0 bg-white rounded-xl z-20 flex-col items-center justify-center text-center p-8" id="success-overlay">
<div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-slate-900">
<iconify-icon icon="solar:check-read-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-slate-900 mb-2">Application received.</h3>
<p className="text-slate-500 max-w-sm mx-auto">If it’s a fit, we’ll reach out within 24–48 hours.</p>
</div>
<form className="space-y-6" id="application-form">
<div className="border-b border-slate-100 pb-6 mb-6">
<h3 className="text-lg font-medium text-slate-900">Agency Ops Reset Application</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Agency Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400" name="agency_name" placeholder="e.g. Acme Studio" required="" type="text"/>
</div>

<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Your Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400" name="your_name" placeholder="John Doe" required="" type="text"/>
</div>
</div>

<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Work Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400" name="work_email" placeholder="name@company.com" required="" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Monthly Revenue</label>
<select className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm text-slate-900 cursor-pointer" name="monthly_revenue" required="">
<option disabled="" selected="" value="">Select range</option>
<option value="Under $10k">Under $10k</option>
<option value="$10k–$50k">$10k–$50k</option>
<option value="$50k–$100k">$50k–$100k</option>
<option value="$100k+">$100k+</option>
</select>
</div>

<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Team Size</label>
<select className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm text-slate-900 cursor-pointer" name="team_size" required="">
<option disabled="" selected="" value="">Select size</option>
<option value="Solo">Solo</option>
<option value="2–5">2–5</option>
<option value="6–15">6–15</option>
<option value="16+">16+</option>
</select>
</div>
</div>

<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Biggest Operational Pain Point</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400" name="pain_point" placeholder="What’s currently breaking, slowing down, or stressing your agency operations?" required="" rows="4"></textarea>
</div>

<div className="pt-4">
<button className="w-full bg-slate-900 text-white font-medium py-4 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-slate-200/50" type="submit">
                            Submit Application
                        </button>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12 px-6">
<div className="max-w-5xl mx-auto flex justify-between items-center">
<p className="text-xs text-slate-400">© 2025 PrecisionOps™</p>
<div className="flex gap-4">
<a className="text-xs text-slate-400 hover:text-slate-900" href="#">Privacy</a>
<a className="text-xs text-slate-400 hover:text-slate-900" href="#">Terms</a>
</div>
</div>
</footer>



    </>
  );
}
