import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // ROI Calculator Logic
        const teamSlider = document.getElementById('team-slider');
        const salarySlider = document.getElementById('salary-slider');
        const teamDisplay = document.getElementById('team-display');
        const salaryDisplay = document.getElementById('salary-display');
        const ukCostDisplay = document.getElementById('uk-cost');
        const savingsDisplay = document.getElementById('savings-cost');

        function calculateROI() {
            const teamSize = parseInt(teamSlider.value);
            const ukSalary = parseInt(salarySlider.value);
            
            // Update Displays
            teamDisplay.textContent = teamSize;
            salaryDisplay.textContent = ukSalary.toLocaleString('en-GB');

            // Logic: Assume Ghana cost is approx 40% of UK cost (60% savings)
            // This includes overheads, making it a realistic comparison
            const totalUkCost = teamSize * ukSalary;
            const savingsPercentage = 0.60; 
            const totalSavings = totalUkCost * savingsPercentage;

            ukCostDisplay.textContent = totalUkCost.toLocaleString('en-GB');
            savingsDisplay.textContent = Math.round(totalSavings).toLocaleString('en-GB');
        }

        teamSlider.addEventListener('input', calculateROI);
        salarySlider.addEventListener('input', calculateROI);

        // Initial Calc
        calculateROI();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b bg-[#13151A]/80 backdrop-blur-md border-white/5">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-[#5476FF] flex items-center justify-center text-white">
<span className="font-bold tracking-tight text-lg">A</span>
</div>
<span className="font-semibold tracking-tight text-lg text-white">Akracore</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-400">
<a className="transition-colors hover:text-white" href="#services">Services</a>
<a className="transition-colors hover:text-white" href="#approach">Method</a>
<a className="transition-colors hover:text-white" href="#roi-calculator">Savings</a>
<a className="transition-colors hover:text-white" href="#why-ghana">Location</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center text-sm font-medium transition-colors text-stone-300 hover:text-white" href="#contact">
                    Contact
                </a>
<a className="inline-flex items-center justify-center h-10 px-5 text-sm font-medium bg-[#5476FF] rounded-full hover:bg-[#4a69e6] transition-all hover:scale-105 active:scale-95 text-white" href="https://meet.google.com/link-placeholder" target="_blank">
                    Book Discovery
                </a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#5476FF]/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium mb-8 bg-white/5 border-white/10 text-stone-300" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-pink-400" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" style={{}}></span>
</span>
                Accepting new pilot partners for Q4
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-8 text-white">
                Scale your operations <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r to-stone-500 from-white via-white">without the overhead.</span>
</h1>
<p className="text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto text-stone-400">
                Elite support and operations teams built in Ghana. UK standards, ISO certified security, and seamlessly integrated into your workflow.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 text-base font-medium bg-[#5476FF] rounded-full hover:bg-[#4a69e6] transition-all hover:shadow-[0_0_20px_rgba(84,118,255,0.3)] text-white" href="https://meet.google.com/link-placeholder" target="_blank">
                    Start a Pilot
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 text-base font-medium bg-theme-surface border rounded-full transition-all group text-white border-white/10 hover:bg-white/5" href="#roi-calculator">
                    Calculate Savings <svg className="lucide lucide-arrow-right w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="mt-16 pt-8 border-t flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-stone-500 border-white/5">
<span className="flex items-center gap-2"><svg className="lucide lucide-shield-check w-4 h-4 text-red-500" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> ISO 27001 Certified</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-clock w-4 h-4 text-[#5476FF]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> GMT Timezone</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-languages w-4 h-4 text-orange-500" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg> Native English</span>
</div>
</div>
</section>

<section className="pt-20 pb-20" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white">Capabilities</h2>
<p className="mt-2 text-stone-400">Specialized teams, not generalists.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 bg-theme-card border rounded-3xl p-8 md:p-10 relative overflow-hidden group transition-colors border-white/5 hover:border-white/10">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
<svg className="lucide lucide-headset w-32 h-32 text-[#5476FF]" data-lucide="headset" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></svg>
</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-[#5476FF]/10 rounded-2xl flex items-center justify-center mb-6">
<svg className="lucide lucide-message-square w-6 h-6 text-[#5476FF]" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-3 text-white">Customer Operations</h3>
<p className="max-w-md mb-6 text-stone-400">Full-cycle customer support covering voice, email, and live chat. We maintain high CSAT scores through rigorous QA and native English fluency.</p>
<ul className="grid sm:grid-cols-2 gap-3 text-sm text-stone-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-[#5476FF]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 24/7 Coverage</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-[#5476FF]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Intercom/Zendesk Experts</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-[#5476FF]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> &lt; 1m Response Time</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-[#5476FF]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Dedicated Managers</li>
</ul>
</div>
</div>

<div className="md:col-span-1 bg-theme-card border rounded-3xl p-8 relative overflow-hidden group transition-colors border-white/5 hover:border-white/10">
<div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6" style={{}}>
<svg className="lucide lucide-database w-6 h-6 text-red-500" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-white">Back Office</h3>
<p className="mb-6 text-sm text-stone-400">Data entry, content moderation, and administrative processing tasks handled with precision.</p>
<div className="w-full h-32 bg-theme-surface rounded-xl border flex flex-col p-4 gap-2 border-white/5">
<div className="w-3/4 h-2 rounded-full animate-pulse bg-stone-700"></div>
<div className="w-1/2 h-2 rounded-full bg-stone-700/50"></div>
<div className="mt-auto flex items-center gap-2 text-xs text-red-500" style={{}}>
<span className="w-2 h-2 rounded-full bg-red-500" style={{}}></span> 99.8% Accuracy
                        </div>
</div>
</div>

<div className="md:col-span-3 bg-theme-card border rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 group transition-colors border-white/5 hover:border-white/10">
<div className="flex-1">
<div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6" style={{}}>
<svg className="lucide lucide-users w-6 h-6 text-orange-500" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-2xl font-semibold mb-3 text-white">Bespoke Teams</h3>
<p className="max-w-xl text-stone-400">Need something specific? We recruit, vet, and train specialised roles for your unique workflow, from SDRs to FinOps analysts.</p>
</div>
<div className="flex-shrink-0">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border rounded-full transition-all text-white bg-white/5 border-white/10 hover:bg-white/10" href="#contact" style={{}}>
                            Discuss Requirements
                         </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#111217]" id="roi-calculator">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-x-16 gap-y-16 items-center">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5476FF]/10 text-[#5476FF] text-xs font-semibold uppercase tracking-wider mb-4">
                        Cost Efficiency
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
                        See how much you could save annually.
                    </h2>
<p className="text-lg mb-8 text-stone-400">
                        Our partners typically reduce operational costs by 60-70% while maintaining or improving output quality. Adjust the sliders to estimate your potential savings.
                    </p>
<div className="flex gap-4">
<div className="flex flex-col gap-1 pl-4 border-l-2 border-[#5476FF]">
<span className="text-2xl font-semibold text-white">No Hidden Fees</span>
<span className="text-sm text-stone-500">Flat monthly rate per seat</span>
</div>
<div className="flex flex-col gap-1 pl-4 border-l-2 border-stone-700">
<span className="text-2xl font-semibold text-white">All Inclusive</span>
<span className="text-sm text-stone-500">Equiment, Office, HR included</span>
</div>
</div>
</div>

<div className="bg-theme-card border rounded-3xl p-8 shadow-2xl relative overflow-hidden border-white/5">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#5476FF]/5 rounded-bl-full pointer-events-none"></div>
<div className="space-y-8 relative z-10">

<div className="">
<div className="flex justify-between mb-4">
<label className="text-sm font-medium text-white">Number of Team Members</label>
<span className="text-sm font-semibold text-[#5476FF]" id="team-display">5</span>
</div>
<input className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-stone-700" id="team-slider" max="50" min="1" type="range" value="5"/>
</div>

<div>
<div className="flex justify-between mb-4">
<label className="text-sm font-medium text-white">Average Annual Salary (UK)</label>
<span className="text-sm font-semibold text-[#5476FF]">£<span id="salary-display">28,000</span></span>
</div>
<input className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-stone-700" id="salary-slider" max="60000" min="20000" step="1000" type="range" value="28000"/>
</div>
<div className="h-px w-full my-6 bg-white/5" style={{}}></div>

<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-theme-surface border border-white/5">
<p className="text-xs text-stone-500 uppercase tracking-wide mb-1">Estimated UK Cost</p>
<p className="text-lg font-medium text-stone-300">£<span id="uk-cost">140,000</span></p>
</div>
<div className="p-4 rounded-xl bg-[#5476FF]/10 border border-[#5476FF]/20">
<p className="text-xs text-[#5476FF] uppercase tracking-wide mb-1">Estimated Savings</p>
<p className="text-2xl font-bold text-white">£<span id="savings-cost">84,000</span></p>
</div>
</div>
<p className="text-xs text-center mt-4 text-stone-600">*Estimates based on typical market rates. Actual savings may vary based on role complexity.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-theme-base border-t border-white/5" id="why-ghana">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-white">Why we built in Ghana</h2>
<p className="text-stone-400">The perfect intersection of talent quality, cultural alignment, and cost efficiency.</p>
</div>
<div className="grid md:grid-cols-4 gap-6">
<div className="bg-theme-card p-6 rounded-2xl border transition-all border-white/5 hover:border-white/10">
<div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center mb-4" style={{}}>
<svg className="lucide lucide-mic w-5 h-5 text-orange-500" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
<h3 className="font-medium mb-2 text-white">Neutral Accent</h3>
<p className="text-sm text-stone-400">Native English speakers with neutral accents, ensuring clarity for UK customers.</p>
</div>
<div className="bg-theme-card p-6 rounded-2xl border transition-all border-white/5 hover:border-white/10">
<div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center mb-4" style={{}}>
<svg className="lucide lucide-clock w-5 h-5 text-orange-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="font-medium mb-2 text-white">GMT Timezone</h3>
<p className="text-sm text-stone-400">Zero time difference with the UK. Real-time collaboration without the lag.</p>
</div>
<div className="bg-theme-card p-6 rounded-2xl border transition-all border-white/5 hover:border-white/10">
<div className="w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4" style={{}}>
<svg className="lucide lucide-graduation-cap w-5 h-5 text-yellow-500" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<h3 className="font-medium mb-2 text-white">Talent Pool</h3>
<p className="text-sm text-stone-400">Access to a massive pool of university graduates seeking career growth.</p>
</div>
<div className="bg-theme-card p-6 rounded-2xl border transition-all border-white/5 hover:border-white/10">
<div className="w-10 h-10 bg-pink-500/10 rounded-full flex items-center justify-center mb-4" style={{}}>
<svg className="lucide lucide-lock w-5 h-5 text-pink-500" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<h3 className="font-medium mb-2 text-white">Political Stability</h3>
<p className="text-sm text-stone-400">One of Africa's most stable democracies, ensuring business continuity.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#111217]" id="approach">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div className="sticky top-32">
<h2 className="text-3xl font-semibold tracking-tight mb-6 text-white">Our Approach</h2>
<p className="text-lg mb-8 text-stone-400">We don't believe in "throw it over the wall" outsourcing. Our model is built on partnership, transparency, and gradual scaling.</p>
<a className="inline-flex items-center text-[#5476FF] font-medium transition-colors group hover:text-white" href="https://meet.google.com/link-placeholder" target="_blank">
                        Book a Discovery Call <svg className="lucide lucide-arrow-right w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="space-y-12 relative">

<div className="absolute left-6 top-6 bottom-6 w-px bg-white/10"></div>

<div className="relative pl-16">
<div className="absolute left-3 top-0 w-6 h-6 bg-[#111217] border-2 border-[#5476FF] rounded-full z-10"></div>
<h3 className="text-xl font-medium mb-2 text-white">01. The Pilot</h3>
<p className="text-stone-400">We start with a small team (1-3 seats) to prove the concept. We define KPIs, set up comms channels, and learn your processes.</p>
</div>

<div className="relative pl-16">
<div className="absolute left-3 top-0 w-6 h-6 bg-[#111217] border-2 rounded-full z-10 border-stone-700"></div>
<h3 className="text-xl font-medium mb-2 text-white">02. Stabilisation</h3>
<p className="text-stone-400">We refine the playbook. Documentation is created, quality loops are established, and the team hits UK-standard metrics.</p>
</div>

<div className="relative pl-16">
<div className="absolute left-3 top-0 w-6 h-6 bg-[#111217] border-2 rounded-full z-10 border-stone-700"></div>
<h3 className="text-xl font-medium mb-2 text-white">03. Growth</h3>
<p className="text-stone-400">Once trust is earned, we scale. You maintain control of the output while we handle the HR, recruitment, and facilities.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-theme-base border-t border-white/5" id="contact">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-theme-card border rounded-3xl overflow-hidden shadow-2xl border-white/5">
<div className="grid md:grid-cols-2">
<div className="p-10 flex flex-col justify-between bg-gradient-to-br from-[#1A1D24] to-[#111217]">
<div>
<h2 className="text-2xl font-semibold tracking-tight mb-4 text-white">Get in touch</h2>
<p className="mb-8 text-stone-400">Fill out the form and our UK team will get back to you within 24 hours.</p>
<div className="space-y-4 text-sm text-stone-300">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5" style={{}}><svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg></div>
<span>hello@akracore.com</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5" style={{}}><svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
<span>London, UK &amp; Accra, Ghana</span>
</div>
</div>
</div>
<div className="mt-12">
<p className="text-xs text-stone-500 mb-2">Or book directly:</p>
<a className="inline-flex items-center justify-center w-full h-10 text-sm font-medium bg-[#5476FF] rounded-lg hover:bg-[#4a69e6] transition-colors text-white" href="https://meet.google.com/link-placeholder" target="_blank">
<svg className="lucide lucide-calendar w-4 h-4 mr-2" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Book Google Meet
                            </a>
</div>
</div>
<div className="p-10 bg-theme-surface">
<form __gchrome_uniqueid="1" className="space-y-4">
<div>
<label className="block text-xs font-medium mb-1.5 text-stone-400">Full Name</label>
<input __gchrome_uniqueid="2" className="w-full bg-theme-base border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#5476FF] transition-colors border-white/10 text-white" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium mb-1.5 text-stone-400">Work Email</label>
<input __gchrome_uniqueid="3" className="w-full bg-theme-base border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#5476FF] transition-colors border-white/10 text-white" placeholder="jane@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium mb-1.5 text-stone-400">Company</label>
<input __gchrome_uniqueid="4" className="w-full bg-theme-base border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#5476FF] transition-colors border-white/10 text-white" placeholder="Company Ltd" type="text"/>
</div>
<div>
<label className="block text-xs font-medium mb-1.5 text-stone-400">Message</label>
<textarea __gchrome_uniqueid="5" className="w-full bg-theme-base border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#5476FF] transition-colors border-white/10 text-white" placeholder="Tell us about your needs..." rows="3"></textarea>
</div>
<button className="w-full h-10 font-medium text-sm rounded-lg transition-colors bg-white text-black hover:bg-stone-200" type="button">
                                Send Message
                            </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-theme-base border-t py-12 text-sm border-white/5">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="font-bold tracking-tight text-lg text-white">Akracore</span>
</div>
<div className="text-stone-500">
                © 2024 Akracore Services Ltd. All rights reserved.
            </div>
<div className="flex gap-6 text-stone-500">
<a className="transition-colors hover:text-white" href="#">Privacy</a>
<a className="transition-colors hover:text-white" href="#">Terms</a>
</div>
</div>
</footer>


    </>
  );
}
