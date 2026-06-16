import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const inputJob = document.getElementById('input-job');
        const inputBudget = document.getElementById('input-budget');
        const inputClose = document.getElementById('input-close');

        const valJob = document.getElementById('val-job');
        const valBudget = document.getElementById('val-budget');
        const valClose = document.getElementById('val-close');

        const outJobs = document.getElementById('out-jobs');
        const outRevenue = document.getElementById('out-revenue');
        const outRoi = document.getElementById('out-roi');

        // Constants derived from prompt logic
        const CPL = 166; 

        function formatMoney(num) {
            return '$' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        function calculate() {
            // Get values
            const jobValue = parseInt(inputJob.value);
            const budget = parseInt(inputBudget.value);
            const closeRate = parseInt(inputClose.value) / 100;

            // Update UI Labels
            valJob.textContent = formatMoney(jobValue);
            valBudget.textContent = formatMoney(budget);
            valClose.textContent = (closeRate * 100).toFixed(0) + '%';

            // Math
            const leads = budget / CPL;
            const jobs = Math.floor(leads * closeRate);
            const revenue = jobs * jobValue;
            
            // Avoid division by zero
            let roi = 0;
            if (budget > 0) {
                roi = ((revenue - budget) / budget) * 100;
            }

            // Update Outputs
            outJobs.textContent = jobs;
            outRevenue.textContent = formatMoney(revenue);
            outRoi.textContent = roi.toFixed(0) + '%';
        }

        inputJob.addEventListener('input', calculate);
        inputBudget.addEventListener('input', calculate);
        inputClose.addEventListener('input', calculate);

        // Initial Run
        calculate();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/60 supports-[backdrop-filter]:bg-white/60">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-orange-600 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="2.5" width="16"></iconify-icon>
</div>
<div className="uppercase text-sm font-semibold text-zinc-900 tracking-tight">Outboundclient.com</div>
</div>
<a className="text-xs font-semibold uppercase tracking-wide bg-zinc-900 text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200/50 hover:shadow-zinc-300/50" href="#contact">
                Contact Us
            </a>
</div>
</nav>

<section className="pt-32 pb-20 px-6 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-orange-100/60 to-transparent rounded-[100%] blur-3xl -z-10 opacity-60 pointer-events-none"></div>
<div className="text-center max-w-5xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-xs font-semibold text-orange-700 uppercase tracking-wide">For Appointment-Based Home Services</span>
</div>

<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-4xl mx-auto mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 leading-[1.1] pb-1">
                We Guarantee You Get 15–20 Qualified Booked Jobs Every Month, or You Don’t Pay.
            </h1>

<div className="relative w-full bg-zinc-900 rounded-xl shadow-2xl shadow-orange-900/10 overflow-hidden mb-12 group border border-zinc-200/60 max-w-4xl mx-auto ring-1 ring-zinc-900/5">


<style>wistia-player[media-id='hpngmoq3h8']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/hpngmoq3h8/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }</style>
<wistia-player aspect="1.7777777777777777" media-id="hpngmoq3h8"></wistia-player>
</div>
<div className="flex flex-col items-center justify-center">
<a className="group inline-flex items-center gap-2 bg-orange-600 text-white text-base font-semibold px-8 py-3.5 rounded-lg hover:bg-orange-700 transition-all shadow-xl shadow-orange-200 hover:shadow-orange-300/50 hover:-translate-y-0.5 w-full md:w-auto" href="#contact">
                    Learn More
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<p className="mt-4 text-xs text-zinc-400 font-medium">No credit card required for demo call</p>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-zinc-200">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-center text-zinc-900 mb-10">This Is For You If:</h2>
<div className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100 shadow-sm backdrop-blur-sm">
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mt-0.5">
<iconify-icon icon="solar:check-read-linear" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<p className="text-base font-medium text-zinc-800">You run a home service business</p>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mt-0.5">
<iconify-icon icon="solar:check-read-linear" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<p className="text-base font-medium text-zinc-800">Your average job is $5,000+</p>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mt-0.5">
<iconify-icon icon="solar:check-read-linear" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<p className="text-base font-medium text-zinc-800">You already have a steady operation</p>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mt-0.5">
<iconify-icon icon="solar:check-read-linear" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<p className="text-base font-medium text-zinc-800">You want predictable jobs every month</p>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mt-0.5">
<iconify-icon icon="solar:check-read-linear" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<p className="text-base font-medium text-zinc-800">You’re tired of missed calls and slow follow-up</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white relative">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-zinc-900 mb-16 leading-tight">
                Most Service Businesses <span className="text-red-600">Leak Money</span><br/>in Two Places
            </h2>
<div className="grid md:grid-cols-2 gap-8 mb-16">

<div className="group bg-white border border-zinc-200 p-8 rounded-2xl hover:border-red-200 hover:shadow-xl hover:shadow-red-50/50 transition-all duration-300">
<div className="flex items-center gap-4 mb-6">
<div className="p-3 bg-red-50 text-red-600 rounded-lg group-hover:bg-red-100 transition-colors">
<iconify-icon icon="solar:graph-down-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-zinc-900">Leak #1: Not Enough Demand</h3>
</div>
<ul className="space-y-3">
<li className="flex gap-3 items-center text-zinc-600 font-medium text-sm">
<span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Not showing up when buyers search
                        </li>
<li className="flex gap-3 items-center text-zinc-600 font-medium text-sm">
<span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Relying on referrals
                        </li>
<li className="flex gap-3 items-center text-zinc-600 font-medium text-sm">
<span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Inconsistent job flow
                        </li>
</ul>
</div>

<div className="group bg-white border border-zinc-200 p-8 rounded-2xl hover:border-red-200 hover:shadow-xl hover:shadow-red-50/50 transition-all duration-300">
<div className="flex items-center gap-4 mb-6">
<div className="p-3 bg-red-50 text-red-600 rounded-lg group-hover:bg-red-100 transition-colors">
<iconify-icon icon="solar:clock-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-zinc-900">Leak #2: Slow Follow-Up</h3>
</div>
<ul className="space-y-3">
<li className="flex gap-3 items-center text-zinc-600 font-medium text-sm">
<span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Missed calls
                        </li>
<li className="flex gap-3 items-center text-zinc-600 font-medium text-sm">
<span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> After-hours inquiries
                        </li>
<li className="flex gap-3 items-center text-zinc-600 font-medium text-sm">
<span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Leads going cold
                        </li>
</ul>
</div>
</div>

<div className="max-w-3xl mx-auto">
<div className="bg-gradient-to-br from-orange-50 to-white text-zinc-900 rounded-2xl p-8 border border-orange-100 shadow-lg shadow-orange-100/50 text-center">
<p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-4">The Reality</p>
<p className="text-lg font-medium mb-3">Responding within 5 minutes makes you <span className="bg-orange-100 text-orange-800 px-1 rounded">21x more likely</span> to close the job.</p>
<p className="text-base text-zinc-600">Not following up within the first 5 minutes makes you <span className="font-semibold text-red-600">95% more likely to LOSE the job</span>.</p>
</div>
<p className="text-xl font-bold text-center text-zinc-900 mt-10 tracking-tight">Local Leads Machine fixes both problems instantly.</p>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 text-zinc-200 px-6 overflow-hidden relative">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-900/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-800/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-6xl mx-auto relative z-10">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white text-center mb-16">
                Here’s What That Means in <span className="text-zinc-500">Real Numbers</span>
</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="border border-zinc-800 p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-8 pb-4 border-b border-zinc-800">
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
<h3 className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Average Returns</h3>
</div>
<div className="space-y-3 text-sm font-medium">
<div className="flex justify-between items-center text-zinc-500">
<span>Ad Spend</span>
<span className="text-zinc-300">$3,000</span>
</div>
<div className="flex justify-between items-center text-zinc-500">
<span>CPC</span>
<span className="text-zinc-300">$30</span>
</div>
<div className="flex justify-between items-center text-zinc-500">
<span>Clicks</span>
<span className="text-zinc-300">100</span>
</div>
<div className="flex justify-between items-center text-zinc-500">
<span>Conversion Rate</span>
<span className="text-zinc-300">4%</span>
</div>
<div className="flex justify-between items-center text-zinc-500">
<span>Leads</span>
<span className="text-zinc-300">4</span>
</div>
<div className="flex justify-between items-center text-zinc-500">
<span>Avg Ticket Size</span>
<span className="text-zinc-300">$5,000</span>
</div>
<div className="flex justify-between items-center text-zinc-500">
<span>Close Rate</span>
<span className="text-zinc-300">30%</span>
</div>
<div className="w-full h-px bg-zinc-800 my-2"></div>
<div className="flex justify-between items-center">
<span className="text-zinc-400">Revenue</span>
<span className="text-zinc-200 font-semibold">$5,000</span>
</div>
<div className="flex justify-between items-center py-2 px-3 bg-zinc-800/50 rounded-lg">
<span className="text-zinc-400">Net Profit</span>
<span className="text-white font-bold">$2,000</span>
</div>
<div className="flex justify-between items-center pt-2">
<span className="text-zinc-500">ROI</span>
<span className="text-zinc-400 font-mono">66.7%</span>
</div>
</div>
</div>

<div className="border border-orange-500/20 p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-orange-950/20 relative shadow-2xl shadow-orange-900/10 overflow-hidden ring-1 ring-orange-500/20">
<div className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-lg">The Fix</div>
<div className="flex items-center gap-3 mb-8 pb-4 border-b border-orange-500/20">
<div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
<h3 className="text-orange-500 text-xs font-bold uppercase tracking-widest">With Local Leads Machine</h3>
</div>
<div className="space-y-3 text-sm font-medium relative z-10">
<div className="flex justify-between items-center text-zinc-400">
<span>Ad Spend</span>
<span className="text-white">$3,000</span>
</div>
<div className="flex justify-between items-center text-zinc-400">
<span>CPC</span>
<span className="text-white">$20</span>
</div>
<div className="flex justify-between items-center text-zinc-400">
<span>Clicks</span>
<span className="text-white">150</span>
</div>
<div className="flex justify-between items-center text-zinc-400">
<span>Conversion Rate</span>
<span className="text-white">12%</span>
</div>
<div className="flex justify-between items-center text-zinc-400">
<span>Leads</span>
<span className="font-bold text-emerald-400">18</span>
</div>
<div className="flex justify-between items-center text-zinc-400">
<span>Avg Ticket Size</span>
<span className="text-white">$5,000</span>
</div>
<div className="flex justify-between items-center text-zinc-400">
<span>Close Rate</span>
<span className="text-white">30%</span>
</div>
<div className="w-full h-px bg-orange-500/20 my-2"></div>
<div className="flex justify-between items-center">
<span className="text-zinc-300">Revenue</span>
<span className="text-white font-bold">$25,000</span>
</div>
<div className="flex justify-between items-center py-2 px-3 bg-emerald-950/30 border border-emerald-900/50 rounded-lg">
<span className="text-emerald-400">Net Profit</span>
<span className="text-emerald-400 font-bold text-lg">$22,000</span>
</div>
<div className="flex justify-between items-center pt-2">
<span className="text-zinc-400">ROI</span>
<span className="text-2xl font-bold text-emerald-400 font-mono tracking-tight">733%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-6xl mx-auto">
<h2 className="text-4xl font-bold tracking-tight text-center text-zinc-900 mb-20">How Local Leads Machine Works</h2>
<div className="grid md:grid-cols-3 gap-10 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent z-0"></div>

<div className="relative z-10 bg-white group">
<div className="w-24 h-24 bg-white border border-zinc-100 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl shadow-zinc-100 relative group-hover:scale-110 transition-transform duration-300">
<div className="absolute inset-0 bg-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-orange-600 relative z-10" icon="solar:target-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-center mb-3 text-zinc-900">1. Targeted Ads</h3>
<p className="text-sm text-zinc-500 font-medium text-center leading-relaxed px-4">
                        We run Google Ads targeting people actively searching for your service right now.
                    </p>
</div>

<div className="relative z-10 bg-white group">
<div className="w-24 h-24 bg-white border border-zinc-100 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl shadow-zinc-100 relative group-hover:scale-110 transition-transform duration-300">
<div className="absolute inset-0 bg-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-orange-600 relative z-10" icon="solar:chat-round-call-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-center mb-3 text-zinc-900">2. AI Response</h3>
<p className="text-sm text-zinc-500 font-medium text-center leading-relaxed px-4">
                        Our 24/7 AI assistant answers immediately via text, call, or form to capture the lead.
                    </p>
</div>

<div className="relative z-10 bg-white group">
<div className="w-24 h-24 bg-white border border-zinc-100 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl shadow-zinc-100 relative group-hover:scale-110 transition-transform duration-300">
<div className="absolute inset-0 bg-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<iconify-icon className="text-orange-600" icon="solar:calendar-add-linear" strokeWidth="1.5" width="40"></iconify-icon>
<div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-0.5 border border-white">
<iconify-icon className="text-white" icon="solar:check-circle-bold" width="12"></iconify-icon>
</div>
</div>
</div>
<h3 className="text-xl font-semibold text-center mb-3 text-zinc-900">3. Auto-Booking</h3>
<p className="text-sm text-zinc-500 font-medium text-center leading-relaxed px-4">
                        The assistant qualifies the lead and books the job directly onto your calendar.
                    </p>
</div>
</div>
<div className="mt-20 text-center">
<p className="text-2xl font-semibold text-zinc-900 tracking-tight mb-8">You show up and close.</p>
<a className="group inline-flex items-center gap-2 bg-orange-600 text-white text-base font-semibold px-8 py-3.5 rounded-lg hover:bg-orange-700 transition-all shadow-xl shadow-orange-200 hover:shadow-orange-300/50 hover:-translate-y-0.5 w-full md:w-auto" href="#contact">
                    Book a Call
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-200 px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-4">See It Work Right Now</h2>
<p className="text-lg text-zinc-500 font-medium mb-12">Call it. Text it. Watch it book a job.</p>
<div className="relative w-full aspect-video bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-zinc-200 group ring-4 ring-white">



<style>wistia-player[media-id='mf38p0kko1']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/mf38p0kko1/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }</style>
<wistia-player aspect="1.7777777777777777" media-id="mf38p0kko1"></wistia-player>
</div>
<p className="text-sm font-medium text-zinc-400 mt-8 mb-8">This is the same system that handles your entire follow-up process.</p>
<div className="flex justify-center">
<a className="group inline-flex items-center gap-2 bg-orange-600 text-white text-base font-semibold px-8 py-3.5 rounded-lg hover:bg-orange-700 transition-all shadow-xl shadow-orange-200 hover:shadow-orange-300/50 hover:-translate-y-0.5 w-full md:w-auto" href="#contact">
                    Book a Call
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-bold tracking-tight text-center text-zinc-900 mb-16">What We Install For You</h2>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-6">

<div className="flex items-center gap-4 py-4 border-b border-zinc-100 group">
<div className="text-orange-500 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="2" width="24"></iconify-icon>
</div>
<span className="text-zinc-700 text-lg font-medium group-hover:text-zinc-900 transition-colors">Google Ads setup &amp; management</span>
</div>

<div className="flex items-center gap-4 py-4 border-b border-zinc-100 group">
<div className="text-orange-500 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="2" width="24"></iconify-icon>
</div>
<span className="text-zinc-700 text-lg font-medium group-hover:text-zinc-900 transition-colors">24/7 AI Call Answering</span>
</div>

<div className="flex items-center gap-4 py-4 border-b border-zinc-100 group">
<div className="text-orange-500 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="2" width="24"></iconify-icon>
</div>
<span className="text-zinc-700 text-lg font-medium group-hover:text-zinc-900 transition-colors">Local targeting optimization</span>
</div>

<div className="flex items-center gap-4 py-4 border-b border-zinc-100 group">
<div className="text-orange-500 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="2" width="24"></iconify-icon>
</div>
<span className="text-zinc-700 text-lg font-medium group-hover:text-zinc-900 transition-colors">AI Text Follow-up</span>
</div>

<div className="flex items-center gap-4 py-4 border-b border-zinc-100 group">
<div className="text-orange-500 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="2" width="24"></iconify-icon>
</div>
<span className="text-zinc-700 text-lg font-medium group-hover:text-zinc-900 transition-colors">Conversion-focused landing page</span>
</div>

<div className="flex items-center gap-4 py-4 border-b border-zinc-100 group">
<div className="text-orange-500 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="2" width="24"></iconify-icon>
</div>
<span className="text-zinc-700 text-lg font-medium group-hover:text-zinc-900 transition-colors">Lead Qualification Filters</span>
</div>

<div className="flex items-center gap-4 py-4 border-b border-zinc-100 group">
<div className="text-orange-500 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="2" width="24"></iconify-icon>
</div>
<span className="text-zinc-700 text-lg font-medium group-hover:text-zinc-900 transition-colors">Call &amp; Lead Tracking</span>
</div>

<div className="flex items-center gap-4 py-4 border-b border-zinc-100 group">
<div className="text-orange-500 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="2" width="24"></iconify-icon>
</div>
<span className="text-zinc-700 text-lg font-medium group-hover:text-zinc-900 transition-colors">Automatic Calendar Booking</span>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-2xl font-bold text-zinc-900 tracking-tight">We build it. We run it. You focus on the jobs.</p>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-zinc-50 to-white border-y border-zinc-200 px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-bold tracking-tight text-center text-zinc-900 mb-12">Run The Numbers</h2>
<div className="bg-white p-10 rounded-3xl border border-zinc-200 shadow-xl shadow-zinc-200/50">

<div className="space-y-10 mb-12">
<div>
<div className="flex justify-between mb-5 items-baseline">
<label className="text-xs font-bold uppercase text-zinc-500 tracking-widest">Average Job Value</label>
<span className="text-2xl font-bold text-zinc-900" id="val-job">$5,000</span>
</div>
<input className="w-full" id="input-job" max="15000" min="1000" step="500" type="range" value="5000"/>
</div>
<div>
<div className="flex justify-between mb-5 items-baseline">
<label className="text-xs font-bold uppercase text-zinc-500 tracking-widest">Monthly Ad Budget</label>
<span className="text-2xl font-bold text-zinc-900" id="val-budget">$3,000</span>
</div>
<input className="w-full" id="input-budget" max="10000" min="1000" step="500" type="range" value="3000"/>
</div>
<div>
<div className="flex justify-between mb-5 items-baseline">
<label className="text-xs font-bold uppercase text-zinc-500 tracking-widest">Close Rate</label>
<span className="text-2xl font-bold text-zinc-900" id="val-close">25%</span>
</div>
<input className="w-full" id="input-close" max="50" min="5" step="1" type="range" value="25"/>
</div>
</div>

<div className="grid grid-cols-2 gap-8 pt-8 border-t border-dashed border-zinc-200">
<div>
<p className="text-xs text-zinc-400 uppercase tracking-widest font-bold mb-2">Est. Booked Jobs</p>
<p className="text-5xl font-extrabold text-zinc-900 tracking-tight" id="out-jobs">4</p>
</div>
<div className="text-right">
<p className="text-xs text-zinc-400 uppercase tracking-widest font-bold mb-2">Est. Revenue</p>
<p className="text-5xl font-extrabold text-zinc-900 tracking-tight" id="out-revenue">$20,000</p>
</div>
<div className="col-span-2 mt-4 bg-zinc-900 text-white p-6 rounded-2xl text-center shadow-2xl flex items-center justify-between px-8 md:px-12 ring-4 ring-zinc-100">
<p className="text-sm text-zinc-400 uppercase tracking-widest font-bold">Estimated ROI</p>
<p className="text-4xl font-extrabold text-emerald-400 tracking-tight" id="out-roi">567%</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-3xl mx-auto text-center border border-orange-200 rounded-3xl p-12 bg-gradient-to-b from-orange-50/50 to-white shadow-xl shadow-orange-100/50">
<div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<h2 className="text-3xl font-bold tracking-tight mb-4 text-zinc-900">Our Guarantee</h2>
<p className="text-lg text-zinc-600 font-medium leading-relaxed">If we don't hit the target number of leads, we work with you for <span className="font-bold text-orange-600">free</span> until we do.</p>
</div>
</section>

<section className="bg-zinc-50 border-zinc-200 border-t pt-24 pr-6 pb-24 pl-6" id="contact">
<div className="max-w-5xl mx-auto text-center">
<h2 className="text-4xl font-bold tracking-tight mb-4 text-zinc-900">Book Your Strategy Call</h2>
<p className="text-lg text-zinc-500 font-medium mb-12 max-w-xl mx-auto">
                We’ll review your service area, job size, and capacity to see if this makes sense.
            </p>

<div className="w-full bg-white border border-zinc-200 rounded-2xl shadow-xl overflow-hidden ring-1 ring-zinc-900/5">

<div className="calendly-inline-widget" data-processed="true" data-url="https://calendly.com/adrian-shier/30min" style={{position: 'relative', minWidth: '320px', height: '700px'}}><div className="calendly-spinner"><div className="calendly-bounce1"></div><div className="calendly-bounce2"></div><div className="calendly-bounce3"></div></div><iframe className="" frameborder="0" height="100%" src="https://calendly.com/adrian-shier/30min?embed_domain=&amp;embed_type=Inline" title="Select a Date &amp; Time - Calendly" width="100%"></iframe></div>


</div>
</div>
</section>

<footer className="py-12 border-t border-zinc-200 bg-white px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-zinc-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:graph-up-linear" width="12"></iconify-icon>
</div>
<div className="uppercase text-sm font-bold text-zinc-900 tracking-tight">outboundclient.com</div>
</div>
<div className="flex gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#contact">Contact Us</a>
</div>
<div className="text-xs font-medium text-zinc-400">© 2026 outboundclient.com All rights reserved.</div>
</div>
</footer>



    </>
  );
}
