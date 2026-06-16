import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      const spendSlider = document.getElementById('spend-slider');
      const cplSlider = document.getElementById('cpl-slider');
      const wasteSlider = document.getElementById('waste-slider');
      const spendValue = document.getElementById('spend-value');
      const cplValue = document.getElementById('cpl-value');
      const wasteValue = document.getElementById('waste-value');
      const wasteAmount = document.getElementById('waste-amount');
      const oldCpql = document.getElementById('old-cpql');
      const newCpql = document.getElementById('new-cpql');
      const cpqlBadge = document.getElementById('cpql-badge');
      const oldLeads = document.getElementById('old-leads');
      const newLeads = document.getElementById('new-leads');
      const leadsBadge = document.getElementById('leads-badge');
      const paybackDays = document.getElementById('payback-days');
      const ctaMoreLeads = document.getElementById('cta-more-leads');
      const ctaBudget = document.getElementById('cta-budget');

      function updateSliderProgress(slider) {
        const min = parseFloat(slider.min);
        const max = parseFloat(slider.max);
        const val = parseFloat(slider.value);
        const pct = ((val - min) / (max - min)) * 100;
        slider.style.setProperty('--progress', pct + '%');
      }

      function formatCurrency(value) {
        if (value >= 1000) {
          return '$' + value.toLocaleString('en-US');
        }
        return '$' + value;
      }

      function formatCompact(value) {
        if (value >= 1000) {
          const k = value / 1000;
          return '$' + (k % 1 === 0 ? k.toFixed(0) : k.toFixed(1)) + 'k';
        }
        return '$' + value;
      }

      function calculate() {
        const spend = parseInt(spendSlider.value);
        const cpl = parseInt(cplSlider.value);
        const wastePct = parseInt(wasteSlider.value) / 100;

        spendValue.textContent = formatCurrency(spend);
        cplValue.textContent = '$' + cpl;
        wasteValue.textContent = wasteSlider.value + '%';

        updateSliderProgress(spendSlider);
        updateSliderProgress(cplSlider);
        updateSliderProgress(wasteSlider);

        const currentLeads = spend / cpl;
        const currentQualifiedLeads = currentLeads * (1 - wastePct);
        const currentCpql = Math.round(spend / currentQualifiedLeads);

        const wastedMoney = spend * wastePct;
        wasteAmount.textContent = formatCompact(Math.round(wastedMoney));

        // Assume 30% reduction in CPL and higher qualification rate (85%)
        const newCplVal = cpl * 0.7;
        const afterLeads = spend / newCplVal;
        const afterQualifiedLeads = afterLeads * 0.85;
        const afterCpql = Math.round(spend / afterQualifiedLeads);

        const reductionPct = Math.round(((currentCpql - afterCpql) / currentCpql) * 100);
        const moreLeads = Math.round(afterQualifiedLeads - currentQualifiedLeads);
        const monthlySavings = (currentCpql - afterCpql) * afterQualifiedLeads;

        let payback = Math.round((5000 / Math.max(monthlySavings, 1)) * 30);
        if (payback < 1) payback = 1;
        if (payback > 90) payback = 90;

        oldCpql.textContent = '$' + currentCpql;
        newCpql.textContent = '$' + afterCpql;
        cpqlBadge.textContent = reductionPct + '% reduction';

        oldLeads.textContent = Math.round(currentQualifiedLeads);
        newLeads.textContent = Math.round(afterQualifiedLeads);
        leadsBadge.textContent = '+' + Math.max(moreLeads, 0) + ' more leads';

        paybackDays.textContent = payback + ' days';

        ctaMoreLeads.textContent = Math.max(moreLeads, 0);
        ctaBudget.textContent = formatCompact(spend);
      }

      [spendSlider, cplSlider, wasteSlider].forEach(slider => {
        slider.addEventListener('input', calculate);
        updateSliderProgress(slider);
      });

      calculate();

      // Initialize Lucide icons
      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:pt-6 md:px-6 pointer-events-none">
<nav className="glass flex md:gap-10 transition-all duration-300 pointer-events-auto w-full max-w-5xl border-slate-100 border rounded-full pt-2 pr-2 pb-2 pl-6 shadow-sm gap-x-4 gap-y-4 items-center justify-between">
<a className="group flex items-center gap-2 shrink-0" href="#">
<span className="md:text-2xl text-xl font-medium text-[#1a1a1a] font-montserrat flex items-center">
<img alt="Epselon" className="h-6 md:h-8 w-auto object-contain" src="https://epselon.io/logo.png"/>
</span>
</a>
<a className="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition items-center gap-2 font-medium group bg-[#1a1a1a] hover:bg-[#333333] shrink-0 font-manrope text-white inline-flex" href="#book-call">
          Book Audit
          <iconify-icon className="transition-transform group-hover:translate-x-0.5 hidden sm:inline-block" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</nav>
</header>
<main className="md:pt-32 md:px-6 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4">

<section className="md:rounded-[2.5rem] md:p-12 lg:p-20 overflow-hidden md:mb-16 text-center bg-white border border-slate-100 rounded-[2rem] mb-12 p-6 pt-12 pb-12 relative">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#f2f0ec_1px,transparent_1px),linear-gradient(to_bottom,#f2f0ec_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] pointer-events-none opacity-50"></div>
<div className="flex flex-col max-w-5xl mx-auto relative items-center">
<div className="animate-fade-up text-[10px] uppercase md:mb-8 font-medium text-[#c4491a] tracking-widest font-manrope bg-slate-50 w-fit rounded-full mb-6 py-1 px-3">
            Attention b2b advertisers
          </div>
<h1 className="animate-fade-up delay-100 sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] md:mb-8 text-3xl font-medium text-[#1a1a1a] tracking-tight font-montserrat max-w-4xl mb-6">We'll recover $5,000/month in wasted ad spend — <span className="font-medium text-[#c4491a] font-montserrat">or you don't pay.</span></h1>
<p className="animate-fade-up delay-200 md:text-lg leading-relaxed md:mb-12 text-base text-[#6b6560] font-manrope max-w-2xl mb-8 pr-2 pl-2">Same budget. Better targeting. Lower CPL. Results in 30 days. Designed for B2B companies spending $10k+/month on ads.</p>
<div className="animate-fade-up delay-300 relative w-full max-w-4xl aspect-video rounded-xl md:rounded-[2rem] border border-slate-100 overflow-hidden mb-8 md:mb-12 group cursor-pointer bg-slate-50">
<img alt="Process Video" className="w-full h-full object-cover opacity-90 group-hover:opacity-75 transition-all duration-700 mix-blend-multiply filter grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center z-10 w-full h-full bg-black/10">
<iframe allow="autoplay; fullscreen" allowfullscreen="" allowtransparency="true" className="w-full h-full border-none" frameborder="0" name="wistia_embed" scrolling="no" src="https://fast.wistia.net/embed/iframe/3fagri5ekl?seo=false&amp;videoFoam=true" title="VSL Video"></iframe>
</div>
<div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 backdrop-blur-sm text-[10px] md:text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full uppercase tracking-widest font-medium flex items-center gap-2 text-white font-manrope bg-black/90">
<div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#c4491a] animate-pulse"></div>
              Watch VSL Breakdown
            </div>
</div>
<div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-3 items-center justify-center w-full mb-6">
<a className="sm:w-auto md:py-4 transition-all duration-300 flex items-center justify-center gap-2 group hover:bg-[#333333] text-sm font-medium font-manrope bg-black w-full rounded-full py-3.5 px-8 text-white" href="#book-call">
              Schedule 15-Minute Audit
              <iconify-icon className="transition-transform group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="sm:w-auto md:py-4 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-black text-sm font-medium text-[#1a1a1a] hover:text-white font-manrope bg-transparent w-full border border-[#1a1a1a] rounded-full py-3.5 px-8" href="#roi-calculator">
              Calculate your ROI
            </a>
</div>
<div className="animate-fade-up delay-500 flex gap-6 text-[11px] md:text-xs text-[#6b6560] mt-4 justify-center">
<span className="font-manrope">Results in 30 days</span>
<span className="hidden sm:inline font-manrope">•</span>
<span className="font-manrope">
              50% reduction in waste or full refund
            </span>
</div>
</div>
</section>

<section className="md:py-20 max-w-6xl mx-auto py-12">
<div className="mb-10 md:mb-16 text-center px-4">
<span className="text-[11px] uppercase tracking-widest text-[#c4491a] font-medium mb-3 block font-manrope">
            The Diagnostics
          </span>
<h2 className="text-2xl md:text-4xl tracking-tight text-[#1a1a1a] font-montserrat font-medium">
            The Three Problems Killing Your Ad Performance
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-6 md:gap-8">
<div className="md:p-8 p-6 rounded-xl border border-slate-100 transition-all duration-300 bg-white hover:border-[#c4491a]">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-5 md:mb-6 text-[#c4491a] bg-slate-50">
<iconify-icon height="24" icon="solar:target-broken" width="24"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl mb-2 md:mb-3 text-[#1a1a1a] font-montserrat font-medium">
              Targeting Accounts That Will Never Buy
            </h3>
<p className="text-[#6b6560] leading-relaxed text-sm font-manrope">
              Your audiences are filled with companies that vaguely match
              filters but are completely wrong. Wrong sizes, wrong sub-sectors,
              wrong stages.
            </p>
</div>
<div className="md:p-8 p-6 rounded-xl border border-slate-100 transition-all duration-300 bg-white hover:border-[#c4491a]">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-5 md:mb-6 text-[#c4491a] bg-slate-50">
<iconify-icon height="24" icon="solar:chart-broken" width="24"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl mb-2 md:mb-3 text-[#1a1a1a] font-montserrat font-medium">
              Platform Targeting for Volume
            </h3>
<p className="text-[#6b6560] leading-relaxed text-sm font-manrope">
              Native tools maximize reach, not quality. You need 65-85% match
              rates to be profitable, but native filters only give you 30-40%.
            </p>
</div>
<div className="md:p-8 p-6 rounded-xl border border-slate-100 transition-all duration-300 bg-white hover:border-[#c4491a]">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-5 md:mb-6 text-[#c4491a] bg-slate-50">
<iconify-icon height="24" icon="solar:users-group-two-rounded-broken" width="24"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl mb-2 md:mb-3 text-[#1a1a1a] font-montserrat font-medium">
              Advertising to People Who Said No
            </h3>
<p className="text-[#6b6560] leading-relaxed text-sm font-manrope">
              Your audiences overlap with existing customers, closed-lost deals,
              and disqualified leads. You're paying to advertise to people who
              already rejected you.
            </p>
</div>
</div>
</section>

<section className="py-16 md:py-24" id="roi-calculator">
<div className="text-center mb-10 md:mb-14 px-4">
<span className="text-[11px] uppercase tracking-widest text-[#c4491a] font-medium mb-3 block font-manrope">
            Ad waste calculator
          </span>
<h2 className="text-3xl md:text-4xl tracking-tight text-[#1a1a1a] font-montserrat font-medium mb-4">
            How much are you wasting?
          </h2>
<p className="text-[#6b6560] max-w-2xl mx-auto text-sm md:text-base font-manrope">
            Adjust the sliders to match your current performance. We'll show you
            what changes with precision targeting.
          </p>
</div>

<div className="max-w-4xl mx-auto bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-10 mb-6 md:mb-8">
<div className="space-y-8 md:space-y-10">

<div className="">
<div className="flex items-baseline justify-between mb-2">
<label className="text-sm font-medium text-[#1a1a1a] font-manrope">
                  Monthly ad spend
                </label>
<span className="text-2xl md:text-3xl font-medium text-[#1a1a1a] font-montserrat tracking-tight" id="spend-value">$20,000</span>
</div>
<p className="text-xs text-[#6b6560] mb-4 font-manrope">
                Your total monthly budget across LinkedIn, Meta, and Google Ads
              </p>
<input className="" id="spend-slider" max="100000" min="5000" step="1000" style={{-Progress: '15.789473684210526%'}} type="range" value="20000"/>
</div>

<div className="">
<div className="flex items-baseline justify-between mb-2">
<label className="text-sm font-medium text-[#1a1a1a] font-manrope">
                  Current cost per lead
                </label>
<span className="text-2xl md:text-3xl font-medium text-[#1a1a1a] font-montserrat tracking-tight" id="cpl-value">$150</span>
</div>
<p className="text-xs text-[#6b6560] mb-4 font-manrope">
                Your blended CPL across all paid campaigns
              </p>
<input id="cpl-slider" max="500" min="50" step="10" style={{-Progress: '22.22222222222222%'}} type="range" value="150"/>
</div>

<div className="">
<div className="flex items-baseline justify-between mb-2">
<label className="text-sm font-medium text-[#1a1a1a] font-manrope">
                  Leads that are unqualified
                </label>
<span className="text-2xl md:text-3xl font-medium text-[#1a1a1a] font-montserrat tracking-tight" id="waste-value">50%</span>
</div>
<p className="text-xs text-[#6b6560] mb-4 font-manrope">
                The percentage of leads your sales team rejects or never
                converts
              </p>
<input className="" id="waste-slider" max="80" min="20" step="5" style={{-Progress: '50%'}} type="range" value="50"/>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto mb-6 md:mb-8">
<div className="flex items-center gap-3 md:gap-4 bg-[#fef3ed] border border-[#f5d5c0] rounded-xl px-5 py-4 md:px-6 md:py-5">
<div className="shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#c4491a]/10 flex items-center justify-center">
<iconify-icon className="text-[#c4491a]" height="20" icon="solar:danger-triangle-linear" width="20"></iconify-icon>
</div>
<p className="text-sm md:text-base text-[#1a1a1a] font-manrope">
              You're currently wasting roughly
              <strong className="font-semibold text-[#c4491a]" id="waste-amount">$10k</strong>
              per month on accounts that will never buy.
            </p>
</div>
</div>

<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-6 md:mb-8">

<div className="bg-[#1a1a1a] rounded-xl p-6 md:p-7 flex flex-col">
<span className="text-xs uppercase tracking-widest text-[#9a9590] font-manrope mb-4">
              Cost per qualified lead
            </span>
<div className="mt-auto">
<span className="text-sm text-[#6b6560] line-through font-manrope" id="old-cpql">$300</span>
<div className="flex items-end gap-3 mt-1 flex-wrap">
<span className="text-3xl md:text-4xl font-medium text-white font-montserrat tracking-tight" id="new-cpql">$124</span>
<span className="text-[10px] uppercase tracking-widest font-medium text-[#c4491a] bg-[#c4491a]/15 rounded-full px-2.5 py-1 mb-1 font-manrope whitespace-nowrap" id="cpql-badge">59% reduction</span>
</div>
</div>
</div>

<div className="bg-white border border-slate-100 rounded-xl p-6 md:p-7 flex flex-col">
<span className="text-xs uppercase tracking-widest text-[#6b6560] font-manrope mb-4">
              Qualified leads / month
            </span>
<div className="mt-auto">
<span className="text-sm text-[#6b6560] line-through font-manrope" id="old-leads">67</span>
<div className="flex items-end gap-3 mt-1 flex-wrap">
<span className="text-3xl md:text-4xl font-medium text-[#1a1a1a]" id="new-leads">162</span>
<span className="text-[10px] uppercase tracking-widest font-medium text-emerald-700 bg-emerald-50 rounded-full px-2.5 py-1 mb-1 font-manrope whitespace-nowrap" id="leads-badge">+95 more leads</span>
</div>
</div>
</div>

<div className="bg-white border border-slate-100 rounded-xl p-6 md:p-7 flex flex-col">
<span className="text-xs uppercase tracking-widest text-[#6b6560] font-manrope mb-4">
              Audit pays for itself in
            </span>
<div className="mt-auto">
<div className="flex items-end gap-3 mt-1 flex-wrap">
<span className="text-3xl md:text-4xl font-medium text-[#1a1a1a] font-montserrat tracking-tight" id="payback-days">5 days</span>
<span className="text-[10px] uppercase tracking-widest font-medium text-emerald-700 bg-emerald-50 rounded-full px-2.5 py-1 mb-1 font-manrope whitespace-nowrap">
                  Less than 1 month
                </span>
</div>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto bg-[#1a1a1a] rounded-2xl p-6 md:p-10 text-center">
<p className="text-base md:text-lg text-[#d9d5d0] mb-6 md:mb-8 font-manrope max-w-2xl mx-auto" id="cta-summary">
            With precision targeting, you'll generate
            <strong className="text-white font-medium" id="cta-more-leads">95</strong>
            more qualified leads every month, from the same
            <strong className="text-white font-medium" id="cta-budget">$20k</strong>
            budget.
          </p>
<a className="inline-flex px-8 py-4 rounded-full text-sm font-medium items-center justify-center gap-2 bg-white text-[#1a1a1a] hover:bg-[#f2f0ec] font-manrope transition-colors" href="#book-call">
            Book your 15-minute audit call
            <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<p className="text-xs text-[#9a9590] mt-4 font-manrope">
            30% waste reduction guaranteed or full refund. No commitment
            required.
          </p>
</div>
</section>

<section className="md:py-20 py-12">
<div className="text-center mb-10 md:mb-16 px-4">
<h2 className="md:text-4xl text-2xl text-[#1a1a1a] tracking-tight mb-4 font-montserrat font-medium">
            AI-Powered Precision Eliminates Waste
          </h2>
<p className="text-[#6b6560] max-w-2xl mx-auto text-sm md:text-base font-manrope">
            We rebuild your audiences from scratch using data enrichment and
            real-time verification.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
<div className="group md:p-8 overflow-hidden md:h-72 flex flex-col transition-colors hover:border-[#c4491a] bg-white border border-slate-100 rounded-xl p-6 relative">
<h3 className="md:text-xl text-lg font-medium text-[#1a1a1a] font-montserrat mb-3">
              50% Lower Cost Per Lead
            </h3>
<p className="text-[#6b6560] text-sm leading-relaxed z-10 relative font-manrope">
              By removing the 40-60% of accounts that will never buy, your
              budget is concentrated solely on high-intent ICP.
            </p>
<div className="mt-auto self-end text-[#f2f0ec] group-hover:text-[#f4e8e0] transition-colors duration-500 transform group-hover:scale-110">
<iconify-icon className="" height="80" icon="solar:wallet-broken" width="80"></iconify-icon>
</div>
</div>
<div className="group md:p-8 p-6 overflow-hidden md:h-72 flex flex-col transition-colors hover:border-[#c4491a] bg-white border border-slate-100 rounded-xl relative">
<h3 className="text-lg md:text-xl mb-3 md:mb-4 text-[#1a1a1a] font-montserrat font-medium">
              65-85% Audience Match Rates
            </h3>
<p className="text-[#6b6560] text-sm leading-relaxed z-10 relative font-manrope">
              We match LinkedIn profile data to hashed emails, bypassing
              platform filters to ensure your ads actually reach your target
              list.
            </p>
<div className="mt-auto self-end text-[#f2f0ec] group-hover:text-[#f4e8e0] transition-colors duration-500 transform group-hover:scale-110">
<iconify-icon className="" height="80" icon="solar:target-broken" width="80"></iconify-icon>
</div>
</div>
<div className="group md:p-8 p-6 overflow-hidden md:h-72 flex flex-col transition-colors hover:border-[#c4491a] bg-white border border-slate-100 rounded-xl relative">
<h3 className="text-lg md:text-xl mb-3 md:mb-4 text-[#1a1a1a] font-montserrat font-medium">
              Real-Time ICP Verification
            </h3>
<p className="text-[#6b6560] text-sm leading-relaxed z-10 relative font-manrope">
              Every contact is verified against company size, industry, and job
              title before being added. Includes automatic suppression of
              existing CRM contacts.
            </p>
<div className="mt-auto self-end text-[#f2f0ec] group-hover:text-[#f4e8e0] transition-colors duration-500 transform group-hover:scale-110">
<iconify-icon className="" height="80" icon="solar:shield-check-broken" width="80"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="md:py-24 pt-16 pb-16" id="process">
<div className="text-center mb-12 px-4">
<span className="text-[11px] font-medium tracking-widest uppercase mb-3 block text-[#c4491a] font-manrope">
            The Methodology
          </span>
<h2 className="md:text-4xl text-3xl font-medium text-[#1a1a1a] tracking-tight font-montserrat">
            How It Works
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-10 md:gap-8 relative max-w-6xl mx-auto">
<div className="hidden md:block absolute top-12 left-0 right-0 h-px -z-10 bg-slate-200"></div>
<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 md:w-20 md:h-20 border border-slate-100 rounded-full flex items-center justify-center text-xl mb-5 md:mb-6 group-hover:border-[#c4491a] group-hover:text-[#c4491a] transition-colors bg-white text-[#1a1a1a] font-montserrat font-medium">
              1
            </div>
<h3 className="text-base md:text-lg font-medium mb-2 text-[#1a1a1a] font-manrope">
              Audit Your Current Waste
            </h3>
<p className="text-sm text-[#6b6560] leading-relaxed max-w-xs px-4 md:px-0 font-manrope">
              We analyze your audiences and identify exactly how much waste
              exists. We validate your ICP and show you where budget is
              bleeding.
            </p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 md:w-20 md:h-20 border border-slate-100 rounded-full flex items-center justify-center text-xl mb-5 md:mb-6 group-hover:border-[#c4491a] group-hover:text-[#c4491a] transition-colors bg-white text-[#1a1a1a] font-montserrat font-medium">
              2
            </div>
<h3 className="text-base md:text-lg font-medium mb-2 text-[#1a1a1a] font-manrope">
              Rebuild Using AI Precision
            </h3>
<p className="text-sm text-[#6b6560] leading-relaxed max-w-xs px-4 md:px-0 font-manrope">
              We match LinkedIn data to hashed emails. 65-85% match rates. Every
              contact verified against ICP. Automatic suppression of unqualified
              lists.
            </p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 md:w-20 md:h-20 border border-slate-100 rounded-full flex items-center justify-center text-xl mb-5 md:mb-6 group-hover:border-[#c4491a] group-hover:text-[#c4491a] transition-colors bg-white text-[#1a1a1a] font-montserrat font-medium">
              3
            </div>
<h3 className="text-base md:text-lg font-medium mb-2 text-[#1a1a1a] font-manrope">
              Launch &amp; Track
            </h3>
<p className="text-sm text-[#6b6560] leading-relaxed max-w-xs px-4 md:px-0 font-manrope">
              Upload directly to Campaign Manager. Monitor for 30 days. Deliver
              a final Waste Reduction Report showing exact ROI.
            </p>
</div>
</div>
</section>

<section className="md:mb-24 mb-16 pt-16 pb-16">
<div className="max-w-6xl mx-auto px-4">

<div className="mb-20">
<div className="text-center mb-10 md:mb-16">
<span className="text-[11px] uppercase tracking-widest text-[#c4491a] font-medium mb-3 block font-manrope">
                Testimonials
              </span>
<h2 className="text-3xl md:text-4xl tracking-tight text-[#1a1a1a] font-montserrat font-medium">
                What our customers are saying
              </h2>
</div>
<div className="flex flex-col md:flex-row rounded-2xl border border-slate-100 bg-white mb-6 md:mb-8 overflow-hidden hover:border-[#c4491a] transition-colors duration-300">

<div className="p-8 md:p-10 flex-1 flex flex-col justify-center">
<div className="text-[#c4491a] mb-5 bg-slate-50 w-12 h-12 flex items-center justify-center rounded-lg">
<iconify-icon height="24" icon="solar:chat-square-like-broken" width="24"></iconify-icon>
</div>
<p className="font-manrope text-base md:text-lg text-[#6b6560] leading-relaxed mb-8">
                  "Over the past year, we've gained about five repeat business
                  customers, which I'm very happy with. Our return on investment
                  is
                  <span className="text-[#c4491a] font-medium">
                    8.2X against spend.
                  </span>
                  This isn't just one-off wins; it's compounding growth. If we
                  add another six clients next year, it just keeps scaling."
                </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-50 text-[#1a1a1a] flex items-center justify-center text-sm font-medium font-montserrat shrink-0 border border-slate-100">
                    SD
                  </div>
<div className="">
<div className="font-medium text-[#1a1a1a] text-base font-montserrat">
                      Shaun Deacon
                    </div>
<div className="text-sm text-[#6b6560] font-manrope">
                      Managing Director at White Bay
                    </div>
</div>
</div>
</div>

<div className="p-6 md:p-8 md:pl-0 flex items-center justify-center w-full md:w-auto">
<div className="bg-[#1a1a1a] w-full md:w-[280px] h-full rounded-xl flex flex-col items-center justify-center p-8">
<div className="text-6xl md:text-7xl font-medium text-white mb-3 font-montserrat tracking-tight">
                    8.2x
                  </div>
<div className="text-[11px] uppercase tracking-widest text-[#9a9590] text-center font-manrope leading-loose">
                    Return on
                    <br/>
                    investment
                  </div>
</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6 md:gap-8">

<div className="rounded-xl border border-slate-100 bg-white p-6 md:p-8 flex flex-col hover:border-[#c4491a] transition-all duration-300">
<div className="text-[#c4491a] mb-5 bg-slate-50 w-10 h-10 flex items-center justify-center rounded-lg">
<iconify-icon height="20" icon="solar:chat-round-line-broken" width="20"></iconify-icon>
</div>
<p className="font-manrope text-sm text-[#6b6560] leading-relaxed mb-8 flex-1">
                  "The operational improvements from Epselon's work have already
                  had a noticeable impact. Their team not only provided both
                  operational understanding and technical expertise, but also
                  took the time to understand our business. They possessed a
                  deep understanding of our needs and deliver efficient,
                  tailored solutions. I would highly recommend working with
                  Epselon."
                </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-slate-50 text-[#1a1a1a] flex items-center justify-center text-xs font-medium font-montserrat shrink-0 border border-slate-100">
                    JH
                  </div>
<div>
<div className="font-medium text-[#1a1a1a] text-sm font-montserrat">
                      Jasmine Hikuroa
                    </div>
<div className="text-xs text-[#6b6560] font-manrope">
                      Corporate Account Manager at H&amp;L
                    </div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-100 bg-white p-6 md:p-8 flex flex-col hover:border-[#c4491a] transition-all duration-300">
<div className="text-[#c4491a] mb-5 bg-slate-50 w-10 h-10 flex items-center justify-center rounded-lg">
<iconify-icon height="20" icon="solar:chat-round-line-broken" width="20"></iconify-icon>
</div>
<p className="font-manrope text-sm text-[#6b6560] leading-relaxed mb-8 flex-1">
                  "Working with Epselon has been transformative. Their
                  hyper-personalized strategy helped us reach qualified
                  prospects within our ideal customer profile. The
                  sophistication and precision were unparalleled, elevating our
                  prospecting efforts to new heights compared to previous
                  campaigns."
                </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-slate-50 text-[#1a1a1a] flex items-center justify-center text-xs font-medium font-montserrat shrink-0 border border-slate-100">
                    SC
                  </div>
<div>
<div className="font-medium text-[#1a1a1a] text-sm font-montserrat">
                      Simon Chin
                    </div>
<div className="text-xs text-[#6b6560] font-manrope">
                      CEO at Flowstate
                    </div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-100 bg-white p-6 md:p-8 flex flex-col hover:border-[#c4491a] transition-all duration-300">
<div className="text-[#c4491a] mb-5 bg-slate-50 w-10 h-10 flex items-center justify-center rounded-lg">
<iconify-icon height="20" icon="solar:chat-round-line-broken" width="20"></iconify-icon>
</div>
<p className="font-manrope text-sm text-[#6b6560] leading-relaxed mb-8 flex-1">
                  "If you're hesitant, give Epselon a try. They fine-tune
                  messaging for your audience, and deliver results. The
                  investment is small compared to the upside — consistent,
                  high-quality leads that fuel long-term business growth."
                </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-slate-50 text-[#1a1a1a] flex items-center justify-center text-xs font-medium font-montserrat shrink-0 border border-slate-100">
                    EW
                  </div>
<div>
<div className="font-medium text-[#1a1a1a] text-sm font-montserrat">
                      Ed Womersley
                    </div>
<div className="text-xs text-[#6b6560] font-manrope">
                      Director &amp; Founder at Hustle
                    </div>
</div>
</div>
</div>
</div>
</div>

<div className="pt-16 border-t border-slate-100">
<div className="text-center mb-12 md:mb-16">
<span className="text-[11px] uppercase tracking-widest text-[#c4491a] font-medium mb-3 block font-manrope">
                The Experts
              </span>
<h2 className="text-3xl md:text-4xl tracking-tight text-[#1a1a1a] font-montserrat font-medium">
                Meet the Team
              </h2>
</div>
<div className="flex flex-col md:flex-row md:gap-16 gap-x-8 gap-y-8 justify-center">
<div className="flex flex-col items-center text-center max-w-xs group mx-auto md:mx-0">
<div className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 overflow-hidden border-4 border-slate-50 shadow-sm transition-all duration-300 group-hover:border-[#f4e8e0]">
<img alt="Team Member 1" className="filter group-hover:grayscale-0 transition-all duration-500 cursor-pointer w-full h-full object-cover grayscale" onclick="window.location.href='https://epselon.io/team-lex.png'" role="button" src="https://epselon.io/team-lex.png"/>
</div>
<h3 className="text-xl font-medium text-[#1a1a1a] font-montserrat mb-1">
                  Lex Bennett
                </h3>
<p className="text-[11px] uppercase font-medium text-[#c4491a] tracking-widest font-manrope mb-4">
                  Lead GTM ENgineer
                </p>
</div>
<div className="flex flex-col items-center text-center max-w-xs group mx-auto md:mx-0">
<div className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 overflow-hidden border-4 border-slate-50 shadow-sm transition-all duration-300 group-hover:border-[#f4e8e0]">
<img alt="Team Member 2" className="filter group-hover:grayscale-0 transition-all duration-500 w-full h-full object-cover grayscale" src="https://epselon.io/team-tim.png"/>
</div>
<h3 className="text-xl font-medium text-[#1a1a1a] font-montserrat mb-1">
                  Tim Sloan
                </h3>
<p className="text-[11px] uppercase font-medium text-[#c4491a] tracking-widest font-manrope mb-4">
                  GTM ENGINEER
                </p>
</div>
<div className="flex flex-col items-center text-center max-w-xs group mx-auto md:mx-0">
<div className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 overflow-hidden border-4 border-slate-50 shadow-sm transition-all duration-300 group-hover:border-[#f4e8e0]">
<img alt="Tristan Sauls" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" src="https://epselon.io/team-tristan.png"/>
</div>
<h3 className="text-xl font-medium text-[#1a1a1a] font-montserrat mb-1">
                  Tristan Sauls
                </h3>
<p className="text-[11px] uppercase font-medium text-[#c4491a] tracking-widest font-manrope mb-4">
                  GTM ENGINEER
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-20 border-y bg-white border-slate-100 rounded-[2rem] mb-16 pt-16 pb-16">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<h2 className="text-3xl md:text-4xl text-center mb-10 md:mb-16 tracking-tight text-[#1a1a1a] font-montserrat font-medium">
            Deliverables
          </h2>
<div className="rounded-2xl p-6 md:p-12 border border-slate-100 relative overflow-hidden bg-slate-50">
<div className="relative z-10 flex flex-col items-center">
<div className="text-center mb-8 md:mb-12 max-w-2xl">
<span className="font-medium tracking-widest uppercase text-[11px] mb-4 block text-[#c4491a] font-manrope">
                  The Audit Kit
                </span>
<p className="text-[#6b6560] text-base md:text-lg font-manrope">
                  A standalone diagnostic and rebuild of your ad audiences.
                  Completed in under 30 days.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-4 md:gap-y-6 gap-x-20 w-full max-w-4xl mb-12">
<ul className="space-y-4 md:space-y-6">
<li className="flex items-start gap-3 md:gap-4">
<iconify-icon className="text-[#c4491a] shrink-0 mt-0.5" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-sm md:text-base text-[#1a1a1a] font-manrope">
                      Exact analysis of where your current budget is bleeding.
                    </span>
</li>
<li className="flex items-start gap-3 md:gap-4">
<iconify-icon className="text-[#c4491a] shrink-0 mt-0.5" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-sm md:text-base text-[#1a1a1a] font-manrope">
                      Custom audiences built using Clay AI matching (65-85%
                      match rates).
                    </span>
</li>
<li className="flex items-start gap-3 md:gap-4">
<iconify-icon className="text-[#c4491a] shrink-0 mt-0.5" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-sm md:text-base text-[#1a1a1a] font-manrope">
                      Verified by company size, industry, and tech stack.
                    </span>
</li>
</ul>
<ul className="space-y-4 md:space-y-6">
<li className="flex items-start gap-3 md:gap-4">
<iconify-icon className="text-[#c4491a] shrink-0 mt-0.5" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-sm md:text-base text-[#1a1a1a] font-manrope">
                      Auto-removal of customers and dead leads.
                    </span>
</li>
<li className="flex items-start gap-3 md:gap-4">
<iconify-icon className="text-[#c4491a] shrink-0 mt-0.5" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-sm md:text-base text-[#1a1a1a] font-manrope">
                      Monitor CPL and lead quality post-launch.
                    </span>
</li>
<li className="flex items-start gap-3 md:gap-4">
<iconify-icon className="text-[#c4491a] shrink-0 mt-0.5" height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
<span className="md:text-base text-sm font-medium text-[#1a1a1a] font-manrope">
                      50% waste reduction or full refund.
                    </span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 mb-16 md:mb-20 rounded-[2rem] text-center px-4 md:px-6 relative overflow-hidden bg-[#1a1a1a]">
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl mb-4 md:mb-6 tracking-tight font-montserrat font-medium text-white">
            Stop Wasting Money on the Wrong Accounts
          </h2>
<p className="text-base mb-8 md:mb-10 text-[#d9d5d0] font-light font-manrope">
            If you're spending $10k-50k/month on B2B ads right now, there's a
            40-60% chance you're targeting accounts that will never buy. We can
            fix that in 30 days.
          </p>
<div className="flex justify-center">
<a className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-medium flex items-center justify-center gap-2 bg-white text-[#1a1a1a] hover:bg-[#f2f0ec] transition-colors font-manrope" href="#book-call">
              Book Your 15-Minute Audit
              <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto py-8 md:py-10 mb-16 md:mb-24 px-4 md:px-6">
<h2 className="md:text-3xl md:mb-12 text-2xl font-medium text-[#1a1a1a] tracking-tight font-montserrat text-center mb-10">
          Common Questions
        </h2>
<div className="space-y-4">
<details className="group border border-slate-100 rounded-xl overflow-hidden transition-all duration-300 bg-white">
<summary className="flex p-5 md:p-6 cursor-pointer select-none text-sm md:text-base font-medium text-[#1a1a1a] font-manrope items-center justify-between gap-4">
              How is this different from improving native LinkedIn targeting?
              <iconify-icon className="transition-transform group-open:rotate-180 text-[#6b6560] shrink-0" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-[#6b6560] leading-relaxed border-t border-slate-100 pt-4 font-manrope">
              LinkedIn's native targeting uses broad filters. We use AI-powered
              data enrichment to match individual contacts at verified companies
              to hashed emails, achieving 65-85% match rates compared to the
              standard 30-40%.
            </div>
</details>
<details className="group border border-slate-100 rounded-xl overflow-hidden transition-all duration-300 bg-white">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium select-none text-[#1a1a1a] text-sm md:text-base font-manrope gap-4">
              We're not a tech company. Does this still work for us?
              <iconify-icon className="transition-transform group-open:rotate-180 text-[#6b6560] shrink-0" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-[#6b6560] leading-relaxed border-t border-slate-100 pt-4 font-manrope">
              Absolutely. Non-tech companies often see the biggest improvement
              because they've relied entirely on broad targeting without data
              ops. We work heavily with professional services, manufacturing,
              and finance.
            </div>
</details>
<details className="group border border-slate-100 rounded-xl overflow-hidden transition-all duration-300 bg-white">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium select-none text-[#1a1a1a] text-sm md:text-base font-manrope gap-4">
              How do you guarantee 30% waste reduction?
              <iconify-icon className="transition-transform group-open:rotate-180 text-[#6b6560] shrink-0" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-[#6b6560] leading-relaxed border-t border-slate-100 pt-4 font-manrope">
              Measured through CPL improvement and lead quality scores over the
              30-day tracking period. If we don't hit the 30% mark, you get a
              full refund. We take the risk.
            </div>
</details>
<details className="group border border-slate-100 rounded-xl overflow-hidden transition-all duration-300 bg-white">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium select-none text-[#1a1a1a] text-sm md:text-base font-manrope gap-4">
              What happens after the 30 days?
              <iconify-icon className="transition-transform group-open:rotate-180 text-[#6b6560] shrink-0" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-[#6b6560] leading-relaxed border-t border-slate-100 pt-4 font-manrope">
              You have options: keep the audiences and run them yourself, engage
              us for ongoing monthly audience optimization ($3.5k-$5k/mo), or
              expand into a full outbound pipeline build.
            </div>
</details>
</div>
</section>

<section className="md:py-24 md:px-6 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4" id="book-call">
<div className="text-center mb-10 md:mb-16">
<h2 className="text-3xl md:text-4xl text-[#1a1a1a] mb-6 tracking-tight font-montserrat font-medium">
            Book Your Audit
          </h2>
<p className="text-base md:text-lg text-[#6b6560] max-w-2xl mx-auto font-manrope">
            Book a 15-minute call directly with a partner to validate if this
            model fits your ad spend.
          </p>
</div>
<div className="w-full bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden" style={{minHeight: '700px'}}>
<div className="calendly-inline-widget" data-processed="true" data-url="https://calendly.com/epselon/ad-waste-audit?hide_gdpr_banner=1&amp;primary_color=1a1a1a" style={{position: 'relative', position: 'relative', minWidth: '320px', height: '700px', width: '100%'}}>
<div className="calendly-spinner">
<div className="calendly-bounce1"></div>
<div className="calendly-bounce2"></div>
<div className="calendly-bounce3"></div>
</div>
<iframe className="" frameborder="0" height="100%" src="https://calendly.com/epselon/ad-waste-audit?embed_domain=&amp;embed_type=Inline&amp;hide_gdpr_banner=1&amp;primary_color=1a1a1a" title="Select a Date &amp; Time - Calendly" width="100%"></iframe>
</div>

</div>
</section>
</main>

<footer className="border-t border-slate-100 pt-12 md:pt-16 pb-8 md:pb-10 px-4 md:px-6 bg-slate-50">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-10">
<div className="text-center md:text-left"></div>
</div>
<div className="max-w-7xl mx-auto mt-12 md:mt-16 pt-6 border-t border-slate-200 text-center text-[10px] md:text-xs text-[#6b6560]">
<p className="font-manrope">© 2026 Epselon. All rights reserved.</p>
</div>
</footer>




    </>
  );
}
