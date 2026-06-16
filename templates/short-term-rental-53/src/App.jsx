import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function handleSubmit(e) {
            e.preventDefault();
            const form = document.getElementById('consultation-form');
            const successMsg = document.getElementById('success-message');
            
            // Simple animation to switch view
            form.style.opacity = '0';
            setTimeout(() => {
                form.style.display = 'none';
                successMsg.classList.remove('hidden');
                // Small fade in for success message
                successMsg.style.opacity = '0';
                successMsg.style.transition = 'opacity 0.3s ease';
                requestAnimationFrame(() => {
                    successMsg.style.opacity = '1';
                });
            }, 300);
        }

        // Helpers to pre-fill dropdown based on CTA click
        function preselectManager() {
            const select = document.getElementById('client-type');
            select.value = 'manager';
        }

        function preselectOwner() {
            const select = document.getElementById('client-type');
            select.value = 'owner';
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-zinc-900" data-height="24" data-icon="lucide:bar-chart-3" data-width="24"></span>
<span className="text-sm font-semibold tracking-tight text-zinc-900 uppercase">REVPAR</span>
</div>
<a className="text-xs font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors" href="#consultation">
                Book Consultation
            </a>
</div>
</nav>

<header className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 mesh-gradient relative overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white/50 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-zinc-600">Data-driven revenue optimization</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                Maximize Your Rental Revenue with <span className="text-zinc-400">Certified Managers</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Pricing and revenue strategies customized for your property and market. Stop guessing and start outperforming.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
<a className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-zinc-200/50" href="#services-managers">
<span className="iconify" data-icon="lucide:building-2" data-width="18"></span>
                    Property Managers
                    <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-zinc-200 text-zinc-900 text-sm font-medium rounded-lg hover:bg-zinc-50 hover:border-zinc-300 transition-all flex items-center justify-center gap-2 shadow-sm" href="#services-owners">
<span className="iconify" data-icon="lucide:home" data-width="18"></span>
                    Private Home Owners
                </a>
</div>
</div>
</header>

<section className="py-20 bg-white border-y border-zinc-100">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 mb-4">
                        Revenue management, reinvented.
                    </h2>
<p className="text-zinc-500 leading-relaxed">
                        We don't just set prices; we execute strategies. Our team consists of industry-first certified revenue managers who understand the nuances of demand, seasonality, and competitive sets.
                    </p>
</div>
<div className="flex items-center gap-2 text-zinc-400 text-sm">
<span className="w-12 h-[1px] bg-zinc-200"></span>
<span>Trusted by 500+ properties</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-6 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:border-zinc-200 hover:shadow-lg hover:shadow-zinc-100/50 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-4 shadow-sm">
<span className="iconify text-zinc-900" data-icon="lucide:badge-check" data-width="20"></span>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Certified Experts</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Work with dedicated professionals certified in STR revenue management, not just automated software support.
                    </p>
</div>

<div className="group p-6 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:border-zinc-200 hover:shadow-lg hover:shadow-zinc-100/50 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-4 shadow-sm">
<span className="iconify text-zinc-900" data-icon="lucide:line-chart" data-width="20"></span>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Market-Based Pricing</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Dynamic pricing that reacts to local events, supply shifts, and booking windows in real-time.
                    </p>
</div>

<div className="group p-6 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:border-zinc-200 hover:shadow-lg hover:shadow-zinc-100/50 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-4 shadow-sm">
<span className="iconify text-zinc-900" data-icon="lucide:refresh-cw" data-width="20"></span>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Continuous Optimization</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        We monitor performance daily, adjusting minimum stays and rates to maximize occupancy and yield.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">Tailored Solutions</h2>
<p className="text-zinc-500">Choose the path that fits your portfolio size and management style.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm flex flex-col" id="services-managers">
<div className="mb-6">
<span className="inline-block p-2 rounded-md bg-zinc-100 text-zinc-900 mb-4">
<span className="iconify" data-icon="lucide:building-2" data-width="24"></span>
</span>
<h3 className="text-xl font-medium text-zinc-900 tracking-tight">For Property Managers</h3>
<p className="text-zinc-500 mt-2 text-sm leading-relaxed">
                            Scalable revenue and pricing support designed for growing portfolios. We handle the data so you can focus on operations and owner relations.
                        </p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-600">
<span className="iconify text-emerald-600 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Portfolio-wide yield management strategies
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<span className="iconify text-emerald-600 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Automated pricing tool configuration
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<span className="iconify text-emerald-600 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Monthly performance reporting
                        </li>
</ul>
<a className="w-full py-3 border border-zinc-200 text-zinc-900 text-sm font-medium rounded-lg hover:border-zinc-900 hover:bg-zinc-50 transition-colors text-center" href="#consultation" onclick="preselectManager()">
                        Request Consultation
                    </a>
</div>

<div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 shadow-xl flex flex-col text-white" id="services-owners">
<div className="mb-6">
<span className="inline-block p-2 rounded-md bg-zinc-800 text-white mb-4">
<span className="iconify" data-icon="lucide:home" data-width="24"></span>
</span>
<h3 className="text-xl font-medium text-white tracking-tight">For Private Owners</h3>
<p className="text-zinc-400 mt-2 text-sm leading-relaxed">
                            Personalized daily pricing and visibility management. Ideal for owners managing properties independently who want professional-grade returns.
                        </p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<span className="iconify text-white mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Daily rate adjustments &amp; monitoring
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<span className="iconify text-white mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            OTA visibility optimization (Airbnb/Vrbo)
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<span className="iconify text-white mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Direct access to your revenue expert
                        </li>
</ul>
<a className="w-full py-3 bg-white text-zinc-900 text-sm font-medium rounded-lg hover:bg-zinc-100 transition-colors text-center" href="#consultation" onclick="preselectOwner()">
                        Request Consultation
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="consultation">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlN2U3ZTciLz48L3N2Zz4=')] opacity-20 mask-image-gradient"></div>
<div className="max-w-xl mx-auto px-6 relative z-10">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-2">Schedule Your Strategy Call</h2>
<p className="text-zinc-500 text-sm">Fill out the details below and we will contact you within 48 hours.</p>
</div>

<div className="hidden bg-emerald-50 border border-emerald-100 rounded-xl p-8 text-center" id="success-message">
<div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
<span className="iconify text-emerald-600" data-icon="lucide:check" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-emerald-900 mb-2">Request Received</h3>
<p className="text-sm text-emerald-700">Thank you. One of our revenue experts will be in touch shortly to schedule your consultation.</p>
</div>

<form className="space-y-5 bg-white p-8 rounded-2xl border border-zinc-200 shadow-xl shadow-zinc-200/40" id="consultation-form" onsubmit="handleSubmit(event)">

<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5 uppercase tracking-wide" htmlFor="client-type">I am a</label>
<div className="relative">
<select className="appearance-none w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-lg focus:ring-2 focus:ring-zinc-900 focus:ring-offset-1 focus:border-zinc-900 block p-3 pr-10 outline-none transition-shadow" id="client-type" name="client-type" required="">
<option disabled="" selected="" value="">Select an option</option>
<option value="owner">Home Owner</option>
<option value="manager">Property Manager</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-500">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-5">

<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5 uppercase tracking-wide" htmlFor="property-count">Properties</label>
<input className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-lg focus:ring-2 focus:ring-zinc-900 focus:ring-offset-1 outline-none block p-3 transition-shadow placeholder:text-zinc-400" id="property-count" min="1" name="property-count" placeholder="e.g. 1" required="" type="number"/>
</div>

<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5 uppercase tracking-wide" htmlFor="company">Company <span className="text-zinc-400 normal-case tracking-normal">(Optional)</span></label>
<input className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-lg focus:ring-2 focus:ring-zinc-900 focus:ring-offset-1 outline-none block p-3 transition-shadow placeholder:text-zinc-400" id="company" name="company" placeholder="Company Name" type="text"/>
</div>
</div>

<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5 uppercase tracking-wide" htmlFor="location">Property Location(s)</label>
<input className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-lg focus:ring-2 focus:ring-zinc-900 focus:ring-offset-1 outline-none block p-3 transition-shadow placeholder:text-zinc-400" id="location" name="location" placeholder="e.g. Austin, TX" required="" type="text"/>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5 uppercase tracking-wide" htmlFor="email">Email</label>
<input className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-lg focus:ring-2 focus:ring-zinc-900 focus:ring-offset-1 outline-none block p-3 transition-shadow placeholder:text-zinc-400" id="email" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5 uppercase tracking-wide" htmlFor="phone">Phone</label>
<input className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-lg focus:ring-2 focus:ring-zinc-900 focus:ring-offset-1 outline-none block p-3 transition-shadow placeholder:text-zinc-400" id="phone" name="phone" placeholder="+1 (555) 000-0000" required="" type="tel"/>
</div>
</div>

<div className="flex items-center gap-3 pt-2">
<div className="relative flex items-center">
<input className="custom-checkbox appearance-none w-5 h-5 border border-zinc-300 rounded focus:ring-2 focus:ring-zinc-900 focus:ring-offset-1 transition-all cursor-pointer" id="new-owner" name="new-owner" type="checkbox"/>
</div>
<label className="text-sm text-zinc-600 cursor-pointer select-none" htmlFor="new-owner">
                        I am a new home owner (Just getting started)
                    </label>
</div>

<button className="w-full mt-4 bg-zinc-900 text-white font-medium text-sm rounded-lg py-3.5 hover:bg-zinc-800 focus:ring-4 focus:ring-zinc-200 transition-all flex items-center justify-center gap-2" type="submit">
                    Request Consultation
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</form>
</div>
</section>

<footer className="bg-zinc-50 border-t border-zinc-200 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-zinc-900" data-icon="lucide:bar-chart-3" data-width="20"></span>
<span className="text-sm font-semibold tracking-tight text-zinc-900 uppercase">REVPAR</span>
</div>
<p className="text-xs text-zinc-500">
                Data-driven revenue management for the modern host.
            </p>
<div className="flex items-center gap-6">
<a className="text-sm text-zinc-500 hover:text-zinc-900 flex items-center gap-2 transition-colors" href="mailto:hello@revpar.com">
<span className="iconify" data-icon="lucide:mail" data-width="16"></span>
                    hello@revpar.com
                </a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 flex items-center gap-2 transition-colors" href="#">
<span className="iconify" data-icon="lucide:message-circle" data-width="16"></span>
                    WhatsApp
                </a>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-8 pt-8 border-t border-zinc-200 text-center md:text-left">
<p className="text-[10px] text-zinc-400 uppercase tracking-wider">© 2024 RevPar Inc. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
