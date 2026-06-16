import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      const revealElements = document.querySelectorAll('.reveal');
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      });
      revealElements.forEach(el => revealObserver.observe(el));

      const mobileBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      mobileBtn.addEventListener('click', () => {
        if (mobileMenu.classList.contains('opacity-0')) {
          mobileMenu.classList.remove('opacity-0', 'invisible', 'scale-95');
          mobileMenu.classList.add('opacity-100', 'visible', 'scale-100');
        } else {
          mobileMenu.classList.add('opacity-0', 'invisible', 'scale-95');
          mobileMenu.classList.remove('opacity-100', 'visible', 'scale-100');
        }
      });
      mobileMenu.querySelectorAll('a').forEach(link => {
         link.addEventListener('click', () => {
            mobileMenu.classList.add('opacity-0', 'invisible', 'scale-95');
            mobileMenu.classList.remove('opacity-100', 'visible', 'scale-100');
         });
      });

      const chartBars = document.querySelectorAll('.chart-bar');
      const dynamicAge = document.getElementById('dynamic-age');
      const dynamicValue = document.getElementById('dynamic-value');
      
      chartBars.forEach(bar => {
        bar.addEventListener('click', () => {
          chartBars.forEach(b => {
            b.classList.remove('active-bar', 'bg-emerald-500', 'shadow-[0_0_20px_rgba(16,185,129,0.3)]', 'scale-[1.02]');
            b.classList.add('bg-slate-100', 'hover:bg-slate-200');
            
            const t = b.querySelector('.top-tooltip');
            if(t) { 
               t.classList.remove('bg-emerald-50', 'text-emerald-600', 'border-emerald-100', 'opacity-100'); 
               t.classList.add('opacity-0', 'text-slate-500', 'border-transparent'); 
            }
            const l = b.querySelector('.age-label');
            if(l) { 
               l.classList.remove('text-slate-900'); 
               l.classList.add('text-slate-400'); 
            }
          });

          bar.classList.add('active-bar', 'bg-emerald-500', 'shadow-[0_0_20px_rgba(16,185,129,0.3)]', 'scale-[1.02]');
          bar.classList.remove('bg-slate-100', 'hover:bg-slate-200');
          
          const tooltip = bar.querySelector('.top-tooltip');
          if(tooltip) { 
             tooltip.classList.add('bg-emerald-50', 'text-emerald-600', 'border-emerald-100', 'opacity-100'); 
             tooltip.classList.remove('opacity-0', 'text-slate-500', 'border-transparent'); 
          }
          
          const label = bar.querySelector('.age-label');
          if(label) { 
             label.classList.add('text-slate-900'); 
             label.classList.remove('text-slate-400'); 
          }

          dynamicValue.style.opacity = '0';
          setTimeout(() => {
            dynamicAge.textContent = bar.dataset.age;
            dynamicValue.textContent = bar.dataset.value;
            dynamicValue.style.opacity = '1';
          }, 250);
        });
      });

      const stackContainer = document.getElementById('card-stack');
      let cards = Array.from(document.querySelectorAll('.stack-card'));
      
      if(stackContainer && cards.length === 3) {
         stackContainer.addEventListener('click', () => {
            const topCard = cards.shift();
            cards.push(topCard);
            
            cards.forEach((card, index) => {
               card.style.transition = 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.6s ease';
               
               if (index === 0) {
                  card.style.transform = 'translate(0px, 0px) rotate(0deg) scale(1)';
                  card.style.zIndex = '30';
                  card.style.opacity = '1';
                  card.style.pointerEvents = 'auto';
               } else if (index === 1) {
                  card.style.transform = 'translate(20px, 50px) rotate(4deg) scale(0.95)';
                  card.style.zIndex = '20';
                  card.style.opacity = '0.9';
                  card.style.pointerEvents = 'none';
               } else if (index === 2) {
                  card.style.transform = 'translate(40px, 100px) rotate(8deg) scale(0.9)';
                  card.style.zIndex = '10';
                  card.style.opacity = '0.8';
                  card.style.pointerEvents = 'none';
               }
            });
         });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<nav className="fixed top-0 w-full flex justify-between items-center py-5 px-6 lg:px-12 z-[100] transition-all duration-300 border-b backdrop-blur-2xl bg-slate-950/70 border-white/10">
<a className="flex gap-1 group cursor-pointer items-center" href="/home">
<span className="text-lg font-medium text-white tracking-tighter uppercase">ROTH</span>
<span className="text-lg font-light text-slate-400 tracking-tight uppercase">GUIDE</span>
</a>
<div className="hidden lg:flex gap-8 text-sm text-slate-400 font-normal">
<a className="hover:text-white transition-colors" href="#what-is-roth">What is a Roth IRA?</a>
<a className="hover:text-white transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-white transition-colors" href="#how-to-start">How to Start</a>
<a className="hover:text-white transition-colors" href="#investments">Best Investments</a>
</div>
<div className="flex items-center gap-4">
<a className="flex items-center gap-2 text-sm font-normal bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10 transition-all text-white" href="#how-to-start">
          Start Learning
          <iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<button aria-label="Open menu" className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
<div className="absolute top-full right-6 mt-4 w-64 bg-slate-950/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform origin-top-right transition-all duration-300 scale-95 opacity-0 invisible flex flex-col gap-4 z-50" id="mobile-menu">
<a className="block text-sm font-normal text-slate-400 hover:text-white transition-colors" href="#what-is-roth">What is a Roth IRA?</a>
<a className="block text-sm font-normal text-slate-400 hover:text-white transition-colors" href="#benefits">Benefits</a>
<a className="block text-sm font-normal text-slate-400 hover:text-white transition-colors" href="#how-to-start">How to Start</a>
<a className="block text-sm font-normal text-slate-400 hover:text-white transition-colors" href="#investments">Best Investments</a>
</div>
</nav>
<header className="relative pt-40 pb-32 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
<div className="relative z-10 mb-16 reveal active max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-normal uppercase tracking-wider mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Financial Education
        </div>
<h1 className="text-5xl md:text-7xl font-normal leading-[1.1] tracking-tight text-white">
          The Benefits of Starting a
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
            Roth IRA Young.
          </span>
</h1>
</div>
<div className="grid lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-5 flex flex-col gap-10 reveal delay-200 active">
<p className="text-lg text-slate-400 font-light leading-relaxed">
            A simple guide to long‑term financial success. Learn how to leverage time, compound interest, and tax-free growth to secure your future.
          </p>
<div className="flex flex-col sm:flex-row sm:items-center gap-4 gap-x-4 gap-y-4 items-start">
<button className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto w-full transition-all duration-300 shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_-10px_rgba(16,185,129,0.6)] hover:-translate-y-1" onclick="document.getElementById('what-is-roth').scrollIntoView({behavior: 'smooth'})">
<span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#020617_0%,#10b981_50%,#020617_100%)] opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
<span className="relative flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-base font-normal text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-slate-900/90">
<span className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent shadow-[0_0_10px_rgba(52,211,153,0.5)]"></span>
<span className="flex items-center gap-2 tracking-wide">
                  Explore the Guide
                  <iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</span>
</span>
</button>
<div className="flex items-center gap-4 px-4">
<span className="text-sm text-slate-400 font-normal">
                Designed for beginners &amp; students.
              </span>
</div>
</div>
<div className="pt-6 border-t border-white/5">
<div className="grid grid-cols-3 gap-6">
<div className="">
<p className="text-3xl font-normal text-white tracking-tight">0%</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">
                  Taxes on Earnings
                </p>
</div>
<div>
<p className="text-3xl font-normal text-white tracking-tight">59½</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">
                  Tax-Free Age
                </p>
</div>
<div>
<p className="text-3xl font-normal text-white tracking-tight">
                  100%
                </p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">
                  Your Control
                </p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7 relative h-[500px] flex justify-center items-center reveal delay-300 w-full active" id="hero-stack-container" style={{perspective: '1000px'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative w-80 h-96" id="card-stack">
<div className="stack-card absolute inset-0 w-full h-full bg-slate-800 rounded-2xl border border-white/10 p-6 flex flex-col items-center justify-center z-10 text-center" data-index="2" style={{zIndex: '10', transform: 'translate(40px, 100px) rotate(8deg) scale(0.9)', opacity: '0.8', pointerEvents: 'none'}}>
<span className="text-xs font-normal text-slate-400 uppercase tracking-wider mb-4">
                Scan to Learn More
              </span>
<div className="bg-white p-2 rounded-xl">
<img alt="QR Code to IRS Roth IRA page" className="w-24 h-24 rounded-lg mix-blend-multiply" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&amp;data=https://www.irs.gov/retirement-plans/roth-iras"/>
</div>
<p className="text-xs text-slate-400 mt-4">Links to official IRS resources.</p>
</div>
<div className="stack-card absolute inset-0 w-full h-full bg-slate-900 rounded-2xl border border-white/10 p-6 flex flex-col justify-center text-center z-20" data-index="1" style={{zIndex: '20', transform: 'translate(20px, 50px) rotate(4deg) scale(0.95)', opacity: '0.9', pointerEvents: 'none'}}>
<div className="flex justify-center mb-4">
<iconify-icon height="32" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5', color: '#a1a1aa'}} width="32"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-normal text-white mb-2">The Power of Time</h3>
<p className="text-sm text-slate-400 leading-relaxed px-4">
                Starting at 20 vs 30 makes a monumental difference thanks to compound interest.
              </p>
</div>
<div className="stack-card absolute inset-0 w-full h-full bg-slate-800 rounded-2xl border border-white/10 p-8 flex flex-col z-30 cursor-grab active:cursor-grabbing" data-index="0" style={{zIndex: '30', transform: 'translate(0px, 0px) rotate(0deg) scale(1)', opacity: '1', pointerEvents: 'auto'}}>
<div className="flex justify-between items-start mb-8">
<div>
<span className="text-xs font-normal text-emerald-400 uppercase tracking-wider block mb-1">
                    Projected Growth at 60
                  </span>
<span className="text-3xl font-normal text-white tracking-tight">
                    $1,897,000+
                  </span>
</div>
<div className="bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded text-xs font-normal flex items-center gap-1">
                  Tax Free
                  <iconify-icon height="12" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</div>
</div>
<div className="flex-1 flex items-end justify-between gap-2 mb-6 pointer-events-none">
<div className="w-full bg-slate-700/50 rounded-t-sm h-[10%] relative group">
<div className="absolute bottom-0 w-full bg-emerald-600/30 h-full"></div>
</div>
<div className="w-full bg-slate-700/50 rounded-t-sm h-[20%] relative group">
<div className="absolute bottom-0 w-full bg-emerald-600/40 h-full"></div>
</div>
<div className="w-full bg-slate-700/50 rounded-t-sm h-[35%] relative group">
<div className="absolute bottom-0 w-full bg-emerald-600/50 h-full"></div>
</div>
<div className="w-full bg-slate-700/50 rounded-t-sm h-[55%] relative group">
<div className="absolute bottom-0 w-full bg-emerald-600/70 h-full"></div>
</div>
<div className="w-full bg-slate-700/50 rounded-t-sm h-[85%] relative group">
<div className="absolute bottom-0 w-full bg-emerald-500 h-full"></div>
</div>
</div>
<div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg border border-white/5 pointer-events-none">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon height="16" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<div>
<p className="text-xs font-normal text-white">
                    Compound Interest
                  </p>
<p className="text-xs text-slate-500">
                    Your money making money.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</header>
<section className="bg-slate-50 text-slate-900 py-24 px-6 lg:px-12 rounded-t-[3rem] relative z-20" id="what-is-roth">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
<div>
<p className="text-xs font-medium tracking-wider uppercase text-emerald-600 mb-4 flex items-center gap-2">
<span className="w-8 h-[1px] bg-gradient-to-r from-emerald-600 to-transparent"></span>
              The Basics
            </p>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight leading-[1.05]">
              What is a Roth IRA?
              <br/>
              And why do you need one?
            </h2>
</div>
<div className="flex flex-col justify-end gap-4">
<p className="text-lg text-slate-600 font-light leading-relaxed max-w-lg">
              A Roth IRA is a retirement account where your money grows tax‑free. You contribute after‑tax money today, and qualified withdrawals after age 59½ are completely tax‑free.
            </p>
<div className="bg-white border-l-4 border-emerald-500 p-4 rounded-r-lg shadow-sm">
<p className="text-sm font-medium italic text-slate-700">"Your investments can grow in two ways: companies can pay you a share of their profits (dividends), and the value of your investments can rise (capital gains). Both work together to build wealth while you stay invested."</p>
</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-slate-200" id="benefits">
<div className="border border-slate-200 rounded-2xl p-8 flex flex-col justify-between min-h-[320px] relative hover-card-rise reveal delay-100 group bg-gradient-to-b from-white to-slate-50 shadow-sm">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
<iconify-icon height="24" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<span className="text-xs font-medium uppercase tracking-wide bg-slate-100 text-slate-600 px-2 py-1 rounded">
                Tax-Free
              </span>
</div>
<div className="mb-2">
<h3 className="text-2xl font-normal text-slate-900 mb-2 tracking-tight">
                Tax-Free Growth &amp; Withdrawal
              </h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                Because you already paid taxes on the money you put in, all the growth, dividends, and capital gains are yours to keep, tax-free, when you retire.
              </p>
</div>
</div>
<div className="bg-slate-900 rounded-2xl p-8 flex flex-col justify-between min-h-[320px] text-white relative hover-card-rise reveal delay-200 shadow-xl overflow-hidden group">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-900/40 rounded-full blur-3xl group-hover:bg-emerald-800/40 transition-colors"></div>
<div className="flex justify-between items-start mb-6 relative z-10">
<div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon height="24" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<span className="text-xs font-medium uppercase tracking-wide bg-emerald-900/50 text-emerald-300 border border-emerald-500/20 px-2 py-1 rounded">
                Flexibility
              </span>
</div>
<div className="mb-2 relative z-10">
<h3 className="text-2xl font-normal text-white mb-2 tracking-tight">
                Withdraw Contributions
              </h3>
<p className="text-sm text-emerald-100 font-medium italic mb-2 border-l-2 border-emerald-500 pl-3">
                "You can withdraw all of your contributions, not your earnings, anytime tax‑free."
              </p>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                This makes it a remarkably flexible tool for young investors who might fear locking away their money forever.
              </p>
</div>
</div>
<div className="border border-slate-200 rounded-2xl p-8 flex flex-col justify-between min-h-[320px] relative hover-card-rise reveal delay-300 group bg-gradient-to-b from-white to-slate-50 shadow-sm">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
<iconify-icon height="24" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<span className="text-xs font-medium uppercase tracking-wide bg-slate-100 text-slate-600 px-2 py-1 rounded">
                Control
              </span>
</div>
<div className="mb-2">
<h3 className="text-2xl font-normal text-slate-900 mb-2 tracking-tight">
                No RMDs &amp; Long-Term Growth
              </h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                Unlike traditional IRAs, Roth IRAs have no Required Minimum Distributions (RMDs) during your lifetime. You control when, or if, you take the money out.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="bg-slate-900 text-white py-24 px-6 lg:px-12 rounded-t-[3rem] relative z-30 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.1)]" id="comparisons">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10 reveal">
<div>
<p className="text-xs font-medium tracking-wider uppercase text-slate-400 mb-4">
              Comparing Accounts
            </p>
<h2 className="text-4xl font-normal tracking-tight leading-[1.05] max-w-lg">
              How does a Roth IRA
              <br/>
              compare to others?
            </h2>
</div>
<p className="text-lg text-slate-400 max-w-md font-light">
            Understanding the difference between account types is crucial to maximizing your tax advantages.
          </p>
</div>
<div className="relative w-full flex flex-col gap-12 lg:block lg:h-[800px] mt-16" style={{perspective: '2500px'}}>
<div className="reveal lg:absolute lg:top-8 lg:left-[5%] lg:w-[320px] lg:h-[400px] z-30 transition-all duration-700 ease-out hover:z-50 hover:scale-105 group">
<div className="w-full h-full bg-slate-950 rounded-[2rem] border border-emerald-500/30 p-8 relative overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.1)] lg:-rotate-3 group-hover:rotate-0 transition-transform duration-700">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors"></div>
<h3 className="text-2xl font-normal text-emerald-400 mb-6 border-b border-white/10 pb-4 tracking-tight">Roth IRA</h3>
<ul className="space-y-4 text-sm font-light text-slate-300">
<li className="flex gap-3"><iconify-icon className="text-emerald-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Contributions are after-tax.</li>
<li className="flex gap-3"><iconify-icon className="text-emerald-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Withdrawals in retirement are 100% tax-free.</li>
<li className="flex gap-3"><iconify-icon className="text-emerald-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Withdraw contributions anytime tax-free.</li>
<li className="flex gap-3"><iconify-icon className="text-emerald-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> No Required Minimum Distributions (RMDs).</li>
<li className="flex gap-3"><iconify-icon className="text-emerald-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Best if you expect to be in a higher tax bracket later.</li>
</ul>
</div>
</div>
<div className="reveal from-right delay-100 lg:absolute lg:top-[120px] lg:left-[35%] lg:w-[320px] lg:h-[400px] z-20 transition-all duration-700 ease-out hover:z-50 hover:scale-105 group">
<div className="w-full h-full bg-slate-950 rounded-[2.5rem] border border-white/10 p-8 relative overflow-hidden shadow-2xl lg:rotate-2 group-hover:rotate-0 transition-transform duration-700">
<h3 className="text-2xl font-normal text-white mb-6 border-b border-white/10 pb-4 tracking-tight">Traditional IRA</h3>
<ul className="space-y-4 text-sm font-light text-slate-400">
<li className="flex gap-3"><iconify-icon className="text-slate-500 shrink-0" icon="solar:minus-circle-linear"></iconify-icon> Contributions are often tax-deductible now.</li>
<li className="flex gap-3"><iconify-icon className="text-slate-500 shrink-0" icon="solar:minus-circle-linear"></iconify-icon> Withdrawals in retirement are taxed as ordinary income.</li>
<li className="flex gap-3"><iconify-icon className="text-rose-400 shrink-0" icon="solar:close-circle-linear"></iconify-icon> Penalties for early withdrawal.</li>
<li className="flex gap-3"><iconify-icon className="text-rose-400 shrink-0" icon="solar:close-circle-linear"></iconify-icon> Subject to Required Minimum Distributions (RMDs) at age 73.</li>
</ul>
</div>
</div>
<div className="reveal from-left delay-200 lg:absolute lg:top-[240px] lg:right-[5%] lg:w-[320px] lg:h-[400px] z-10 transition-all duration-700 ease-out hover:z-50 hover:scale-105 group">
<div className="w-full h-full bg-slate-950 rounded-[2.5rem] border border-white/10 p-8 relative overflow-hidden shadow-2xl lg:-rotate-2 group-hover:rotate-0 transition-transform duration-700">
<h3 className="text-2xl font-normal text-white mb-6 border-b border-white/10 pb-4 tracking-tight">401(k) &amp; Savings</h3>
<div className="mb-6">
<span className="text-xs font-medium uppercase text-blue-400 tracking-wider">401(k)</span>
<p className="text-sm font-light text-slate-400 mt-2">Offered by employers, often with a match (free money!). Usually taxed like a Traditional IRA upon withdrawal.</p>
</div>
<div>
<span className="text-xs font-medium uppercase text-blue-400 tracking-wider">Savings Account</span>
<p className="text-sm font-light text-slate-400 mt-2">Extremely low interest. Growth doesn't beat inflation. Earnings are taxed yearly. Bad for long-term wealth building.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-slate-50 text-slate-900 py-24 px-6 lg:px-12 rounded-t-[3rem] relative z-40 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.1)]">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
<div className="lg:w-[55%] w-full flex items-center justify-center reveal">
<div className="w-full bg-white border border-slate-200 rounded-[2.5rem] shadow-xl p-8 lg:p-10 relative z-10 transition-all hover:shadow-2xl">
<div className="mb-10 border-b border-slate-100 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<span className="text-xs font-medium text-emerald-600 uppercase tracking-wide flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Interactive Projection
                </span>
<h3 className="text-4xl lg:text-5xl font-normal mt-3 text-slate-900 tracking-tight transition-opacity duration-300" id="dynamic-value">$1,897,000+</h3>
<p className="text-sm text-slate-500 mt-2 font-light leading-relaxed">
                  By starting at <span className="font-medium text-slate-900 bg-slate-100 px-2 py-0.5 rounded transition-all" id="dynamic-age">Age 20</span> with $300/mo, assuming a 10% annual return and stopping at age 60.
                </p>
</div>
<div className="text-xs font-medium text-slate-400 uppercase tracking-wider bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 text-center shrink-0">
                Click bars to explore
              </div>
</div>
<div className="h-[280px] flex items-end gap-3 sm:gap-6 relative mt-4">
<div className="absolute w-full h-full flex flex-col justify-between pointer-events-none opacity-20 z-0">
<div className="border-t border-dashed border-slate-400 w-full"></div>
<div className="border-t border-dashed border-slate-400 w-full"></div>
<div className="border-t border-dashed border-slate-400 w-full"></div>
<div className="border-t border-slate-400 w-full"></div>
</div>
<button className="chart-bar flex-1 h-[12%] bg-slate-100 hover:bg-slate-200 border border-slate-200 hover:border-slate-300 rounded-t-xl relative group transition-all duration-500 focus:outline-none z-10 flex flex-col justify-end pb-4 origin-bottom" data-age="Age 40" data-value="$227,000+">
<span className="top-tooltip absolute -top-10 left-1/2 -translate-x-1/2 w-auto px-2 py-1 rounded shadow-sm border border-transparent opacity-0 group-hover:opacity-100 transition-all text-slate-500 text-xs font-medium pointer-events-none whitespace-nowrap">$227k+</span>
<div className="absolute -bottom-8 w-full text-center text-sm font-medium text-slate-400 age-label transition-colors duration-300">Age 40</div>
</button>
<button className="chart-bar flex-1 h-[35%] bg-slate-100 hover:bg-slate-200 border border-slate-200 hover:border-slate-300 rounded-t-xl relative group transition-all duration-500 focus:outline-none z-10 flex flex-col justify-end pb-4 origin-bottom" data-age="Age 30" data-value="$678,000+">
<span className="top-tooltip absolute -top-10 left-1/2 -translate-x-1/2 w-auto px-2 py-1 rounded shadow-sm border border-transparent opacity-0 group-hover:opacity-100 transition-all text-slate-500 text-xs font-medium pointer-events-none whitespace-nowrap">$678k+</span>
<div className="absolute -bottom-8 w-full text-center text-sm font-medium text-slate-400 age-label transition-colors duration-300">Age 30</div>
</button>
<button className="chart-bar active-bar flex-1 h-[100%] bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:bg-emerald-600 border border-emerald-400 rounded-t-xl relative group transition-all duration-500 focus:outline-none z-10 flex flex-col justify-end pb-4 scale-[1.02] origin-bottom" data-age="Age 20" data-value="$1,897,000+">
<span className="top-tooltip absolute -top-10 left-1/2 -translate-x-1/2 w-auto px-2 py-1 rounded shadow-sm opacity-100 transition-all bg-emerald-50 text-emerald-600 border-emerald-100 text-sm font-medium pointer-events-none whitespace-nowrap">$1.89M+</span>
<div className="absolute -bottom-8 w-full text-center text-sm font-medium text-slate-900 age-label transition-colors duration-300">Age 20</div>
</button>
</div>
</div>
</div>
<div className="lg:w-[45%] reveal delay-200">
<p className="text-xs font-medium tracking-wider uppercase text-slate-500 mb-4">
            Time is Money
          </p>
<h2 className="text-4xl font-normal tracking-tight leading-[1.05] mb-8">
            Why starting young matters.
          </h2>
<div className="space-y-8 mb-10">
<div className="flex gap-5 items-start">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
<iconify-icon height="20" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-normal text-slate-900 mb-2">
                  Start Early, Grow More
                </h4>
<p className="text-slate-600 leading-relaxed font-light italic border-l-2 border-emerald-500 pl-3">
                  "The sooner you begin investing, the more years you have to max out your annual Roth IRA limits. Each year you contribute adds another layer of growth — giving your money more time to build on itself."
                </p>
</div>
</div>
<div className="flex gap-5 items-start">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
<iconify-icon height="20" icon="solar:safe-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-normal text-slate-900 mb-2">
                  Long-Term Security
                </h4>
<p className="text-slate-600 leading-relaxed font-light italic border-l-2 border-emerald-500 pl-3">
                  "Starting young gives your investments decades to build stability. Small, consistent contributions now can create a strong financial safety net later."
                </p>
</div>
</div>
<div className="flex gap-5 items-start">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
<iconify-icon height="20" icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-normal text-slate-900 mb-2">
                  Exponential Returns
                </h4>
<p className="text-slate-600 leading-relaxed font-light">
                  "Your money earns interest, and that interest earns even more interest. Over many years, most of your total balance comes from growth, not what you put in."
                </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-white text-slate-900 py-24 px-6 lg:px-12 rounded-t-[3rem] relative z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.03)] pb-32" id="how-to-start">
<div className="max-w-7xl mx-auto">
<div className="text-center md:text-left mb-16 reveal">
<p className="text-xs font-medium tracking-wider uppercase text-slate-500 mb-4">
            Beginner Guide
          </p>
<h2 className="text-4xl font-normal tracking-tight leading-[1.05] max-w-md mx-auto md:mx-0">
            How to Start a
            <br/>
            Roth IRA today.
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-6 pt-6 reveal delay-100">
<div className="group p-8 border border-transparent rounded-3xl bg-slate-900 text-white hover:-translate-y-1 transition-all duration-300 relative overflow-hidden shadow-2xl">
<div className="absolute right-0 top-0 w-40 h-40 bg-emerald-500/20 rounded-bl-full blur-3xl group-hover:bg-emerald-500/30 transition-colors"></div>
<div className="flex items-center justify-between mb-8 relative z-10">
<span className="text-sm font-mono font-medium text-emerald-400/70">01</span>
<div className="w-12 h-12 bg-emerald-900/50 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-600 transition-colors">
<iconify-icon className="text-emerald-400 group-hover:text-white transition-colors" height="24" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl tracking-tight font-normal mb-3 text-white relative z-10">Check Eligibility &amp; Choose Broker</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed relative z-10">Ensure you meet income limits. Pick a trusted brokerage like Fidelity, Vanguard, or Schwab to hold your account.</p>
</div>
<div className="group p-8 border border-transparent rounded-3xl bg-slate-900 text-white hover:-translate-y-1 transition-all duration-300 relative overflow-hidden shadow-2xl">
<div className="absolute right-0 top-0 w-40 h-40 bg-emerald-500/20 rounded-bl-full blur-3xl group-hover:bg-emerald-500/30 transition-colors"></div>
<div className="flex items-center justify-between mb-8 relative z-10">
<span className="text-sm font-mono font-medium text-emerald-400/70">02</span>
<div className="w-12 h-12 bg-emerald-900/50 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-600 transition-colors">
<iconify-icon className="text-emerald-400 group-hover:text-white transition-colors" height="24" icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl tracking-tight font-normal mb-3 text-white relative z-10">Open Account &amp; Automate</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed relative z-10">Fill out the quick application online. Crucial: set up automatic monthly transfers from your checking account.</p>
</div>
<div className="group p-8 border border-transparent rounded-3xl bg-slate-900 text-white hover:-translate-y-1 transition-all duration-300 relative overflow-hidden shadow-2xl">
<div className="absolute right-0 top-0 w-40 h-40 bg-emerald-500/20 rounded-bl-full blur-3xl group-hover:bg-emerald-500/30 transition-colors"></div>
<div className="flex items-center justify-between mb-8 relative z-10">
<span className="text-sm font-mono font-medium text-emerald-400/70">03</span>
<div className="w-12 h-12 bg-emerald-900/50 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-600 transition-colors">
<iconify-icon className="text-emerald-400 group-hover:text-white animate-pulse" height="24" icon="solar:rocket-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl tracking-tight font-normal mb-3 text-white relative z-10">Invest &amp; Stay Consistent</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed relative z-10">Don't just fund it—invest the money! Choose long-term investments like index funds or ETFs. Let compound interest work.</p>
</div>
</div>
</div>
</section>
<section className="bg-slate-950 text-white py-24 px-6 lg:px-12 rounded-t-[3rem] relative z-[51] shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.1)] -mt-12 pb-32" id="brokerages">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col items-center justify-center text-center mb-16 gap-6 reveal max-w-2xl mx-auto">
<div>
<p className="text-xs font-medium tracking-wider uppercase text-slate-400 mb-4">
              Where to Open Your Account
            </p>
<h2 className="text-4xl font-normal tracking-tight leading-[1.05]">
              Top Brokerages for
              <br/>
              Roth IRAs.
            </h2>
</div>
<p className="text-lg text-slate-400 font-light">
            Choosing the right brokerage is key. These three are widely considered the best in the industry for their low fees, reliability, and investment options.
          </p>
</div>
<div className="flex flex-col gap-6 mt-16 w-full relative z-20">

<div className="reveal group w-full bg-slate-900 rounded-[2rem] border border-emerald-500/30 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-[0_0_40px_rgba(16,185,129,0.05)] hover:border-emerald-400/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] transition-all duration-300 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors"></div>
<div className="flex items-center gap-6 md:w-1/3 shrink-0 relative z-10">
<div className="w-12 h-12 shrink-0 bg-emerald-900/50 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-800/50 transition-colors">
<iconify-icon className="text-emerald-400" height="24" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-emerald-400 tracking-tight m-0">Vanguard</h3>
</div>
<div className="flex-grow relative z-10">
<p className="text-sm text-slate-300 font-light leading-relaxed">
                The pioneer of low-cost index investing. Vanguard is uniquely owned by its funds, meaning it is ultimately owned by its investors. It offers a massive selection of high-quality, low-cost mutual funds and ETFs.
              </p>
</div>
<div className="md:w-48 shrink-0 flex md:justify-end border-t border-white/10 md:border-none pt-4 md:pt-0 w-full md:w-auto relative z-10 mt-auto md:mt-0">
<a className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors group/link" href="https://investor.vanguard.com/" target="_blank">
                Visit Vanguard
                <iconify-icon className="group-hover/link:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>

<div className="reveal delay-100 group w-full bg-slate-900 rounded-[2rem] border border-emerald-500/30 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-[0_0_40px_rgba(16,185,129,0.05)] hover:border-emerald-400/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] transition-all duration-300 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors"></div>
<div className="flex items-center gap-6 md:w-1/3 shrink-0 relative z-10">
<div className="w-12 h-12 shrink-0 bg-emerald-900/50 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-800/50 transition-colors">
<iconify-icon className="text-emerald-400" height="24" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-emerald-400 tracking-tight m-0">Fidelity</h3>
</div>
<div className="flex-grow relative z-10">
<p className="text-sm text-slate-300 font-light leading-relaxed">
                Known for its exceptional user interface and customer service. Fidelity is famous for offering zero-expense-ratio index funds (like FZROX) and allows you to buy fractional shares of stocks and ETFs.
              </p>
</div>
<div className="md:w-48 shrink-0 flex md:justify-end border-t border-white/10 md:border-none pt-4 md:pt-0 w-full md:w-auto relative z-10 mt-auto md:mt-0">
<a className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors group/link" href="https://www.fidelity.com/" target="_blank">
                Visit Fidelity
                <iconify-icon className="group-hover/link:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>

<div className="reveal delay-200 group w-full bg-slate-900 rounded-[2rem] border border-emerald-500/30 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-[0_0_40px_rgba(16,185,129,0.05)] hover:border-emerald-400/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] transition-all duration-300 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors"></div>
<div className="flex items-center gap-6 md:w-1/3 shrink-0 relative z-10">
<div className="w-12 h-12 shrink-0 bg-emerald-900/50 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-800/50 transition-colors">
<iconify-icon className="text-emerald-400" height="24" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-emerald-400 tracking-tight m-0">Charles Schwab</h3>
</div>
<div className="flex-grow relative z-10">
<p className="text-sm text-slate-300 font-light leading-relaxed">
                A powerhouse in the brokerage world, offering fantastic research tools, top-tier customer support, and its own lineup of highly competitive, ultra-low-cost index funds and ETFs.
              </p>
</div>
<div className="md:w-48 shrink-0 flex md:justify-end border-t border-white/10 md:border-none pt-4 md:pt-0 w-full md:w-auto relative z-10 mt-auto md:mt-0">
<a className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors group/link" href="https://www.schwab.com/" target="_blank">
                Visit Charles Schwab
                <iconify-icon className="group-hover/link:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>
<section className="bg-slate-900 text-white py-24 px-6 lg:px-12 rounded-t-[3rem] relative z-[55] shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.2)] -mt-12" id="investments">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<p className="text-xs font-medium tracking-wider uppercase text-emerald-400 mb-4">
            The Building Blocks of Wealth
          </p>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight leading-[1.05]">
            Best Long-Term Investments <br/>for a Roth IRA.
          </h2>
<p className="text-lg text-slate-400 font-light max-w-2xl mx-auto mt-6">
            Understanding what to buy is just as important as opening the account. Here is a simple guide to the four main ways to grow your money over decades.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal delay-100">
<div className="bg-slate-800 p-8 rounded-3xl border border-white/5 hover:bg-slate-800/80 transition-colors">
<iconify-icon className="text-emerald-400 mb-4" height="32" icon="solar:pie-chart-3-linear" width="32"></iconify-icon>
<h3 className="text-xl tracking-tight font-normal text-white mb-2">Index Funds</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
              Instead of guessing which one company will win, an index fund buys a tiny piece of <strong className="font-medium">every company</strong> in a market. It is low-cost, low-stress, and historically very safe over long periods.
            </p>
</div>
<div className="bg-slate-800 p-8 rounded-3xl border border-white/5 hover:bg-slate-800/80 transition-colors">
<iconify-icon className="text-blue-400 mb-4" height="32" icon="solar:transfer-horizontal-linear" width="32"></iconify-icon>
<h3 className="text-xl tracking-tight font-normal text-white mb-2">ETFs</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
              Exchange-Traded Funds are exactly like index funds, but you can <strong className="font-medium">trade them instantly</strong> throughout the day like regular stock. They are very flexible and perfect for beginners.
            </p>
</div>
<div className="bg-slate-800 p-8 rounded-3xl border border-white/5 hover:bg-slate-800/80 transition-colors">
<iconify-icon className="text-emerald-400 mb-4" height="32" icon="solar:hand-money-linear" width="32"></iconify-icon>
<h3 className="text-xl tracking-tight font-normal text-white mb-2">Dividend Stocks</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
              Certain companies are so profitable that they pay you cash <strong className="font-medium">just for owning their stock</strong>. This is called a dividend. You can automatically reinvest these to buy even more shares.
            </p>
</div>
<div className="bg-slate-800 p-8 rounded-3xl border border-white/5 hover:bg-slate-800/80 transition-colors">
<iconify-icon className="text-blue-400 mb-4" height="32" icon="solar:buildings-2-linear" width="32"></iconify-icon>
<h3 className="text-xl tracking-tight font-normal text-white mb-2">S&amp;P 500 Funds</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
              A single fund that tracks the <strong className="font-medium">500 biggest U.S. companies</strong> (like Apple, Microsoft, Amazon). It is widely considered the ultimate long-term wealth engine for any retirement account.
            </p>
</div>
</div>
</div>
</section>
<section className="bg-slate-950 text-white py-24 px-6 lg:px-12 relative z-[56] rounded-t-[3rem] -mt-12 border-t border-white/5" id="top-index-funds">
<div className="max-w-7xl mx-auto">
<div className="mb-16 reveal">
<p className="text-xs font-medium tracking-wider uppercase text-emerald-400 mb-4">
            Top 5 List
          </p>
<h2 className="text-4xl font-normal tracking-tight leading-[1.05]">
            Best Index Funds &amp; ETFs.
          </h2>
<p className="text-sm text-slate-400 mt-4 max-w-xl font-light">
            These funds allow you to own a huge chunk of the market with just one purchase. They are the easiest way to grow your money securely over time.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal delay-100">
<div className="bg-slate-900 border border-white/5 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-300">
<div className="flex items-center justify-between mb-4">
<span className="text-lg font-normal text-white">VTSAX / VTI</span>
<iconify-icon className="text-emerald-400" icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Total Stock Market</p>
<p className="text-sm text-slate-400 font-light mb-6">Buys almost <strong className="font-medium">every single stock</strong> in the U.S. market. It's the ultimate one-stop shop for diverse growth.</p>
<ul className="text-sm text-slate-300 space-y-2 mb-6 font-light">
<li className="flex gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Massive diversification</li>
<li className="flex gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Extremely low fees</li>
</ul>
<div className="space-y-2 border-t border-white/5 pt-4">
<p className="text-xs text-slate-500 uppercase tracking-wider flex items-center justify-between">
<span>Hypothetical Growth</span>
<span className="text-emerald-400 font-medium tracking-normal normal-case">+10% Avg Return</span>
</p>
<div className="flex items-center text-xs"><span className="w-12 text-slate-400">10 Yrs</span><div className="h-1.5 bg-emerald-500/40 w-[15%] rounded-full"></div></div>
<div className="flex items-center text-xs"><span className="w-12 text-slate-400">20 Yrs</span><div className="h-1.5 bg-emerald-500/70 w-[45%] rounded-full"></div></div>
<div className="flex items-center text-xs"><span className="w-12 text-slate-400">30 Yrs</span><div className="h-1.5 bg-emerald-400 w-[100%] rounded-full shadow-[0_0_10px_rgba(52,211,153,0.3)]"></div></div>
</div>
</div>
<div className="bg-slate-900 border border-white/5 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-300">
<div className="flex items-center justify-between mb-4">
<span className="text-lg font-normal text-white">SCHB</span>
<iconify-icon className="text-emerald-400" icon="solar:pie-chart-2-linear" width="24"></iconify-icon>
</div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Broad Market ETF</p>
<p className="text-sm text-slate-400 font-light mb-6">Schwab's answer to the total market. It is <strong className="font-medium">super low cost</strong> and an excellent core holding for any beginner.</p>
<ul className="text-sm text-slate-300 space-y-2 mb-6 font-light">
<li className="flex gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Highly liquid ETF</li>
<li className="flex gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Great for Schwab users</li>
</ul>
<div className="space-y-2 border-t border-white/5 pt-4">
<p className="text-xs text-slate-500 uppercase tracking-wider flex items-center justify-between">
<span>Hypothetical Growth</span>
<span className="text-emerald-400 font-medium tracking-normal normal-case">+10% Avg Return</span>
</p>
<div className="flex items-center text-xs"><span className="w-12 text-slate-400">10 Yrs</span><div className="h-1.5 bg-emerald-500/40 w-[15%] rounded-full"></div></div>
<div className="flex items-center text-xs"><span className="w-12 text-slate-400">20 Yrs</span><div className="h-1.5 bg-emerald-500/70 w-[45%] rounded-full"></div></div>
<div className="flex items-center text-xs"><span className="w-12 text-slate-400">30 Yrs</span><div className="h-1.5 bg-emerald-400 w-[98%] rounded-full shadow-[0_0_10px_rgba(52,211,153,0.3)]"></div></div>
</div>
</div>
<div className="bg-slate-900 border border-white/5 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-300">
<div className="flex items-center justify-between mb-4">
<span className="text-lg font-normal text-white">FZROX</span>
<iconify-icon className="text-emerald-400" icon="solar:scissors-linear" width="24"></iconify-icon>
</div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Zero Fee Market Index</p>
<p className="text-sm text-slate-400 font-light mb-6">A game-changer from Fidelity. It charges <strong className="font-medium">absolutely zero fees</strong>, meaning you keep 100% of your earnings.</p>
<ul className="text-sm text-slate-300 space-y-2 mb-6 font-light">
<li className="flex gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 0.00% Expense Ratio</li>
<li className="flex gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> No minimum investment</li>
</ul>
<div className="space-y-2 border-t border-white/5 pt-4">
<p className="text-xs text-slate-500 uppercase tracking-wider flex items-center justify-between">
<span>Hypothetical Growth</span>
<span className="text-emerald-400 font-medium tracking-normal normal-case">+10.2% Avg Return</span>
</p>
<div className="flex items-center text-xs"><span className="w-12 text-slate-400">10 Yrs</span><div className="h-1.5 bg-emerald-500/40 w-[16%] rounded-full"></div></div>
<div className="flex items-center text-xs"><span className="w-12 text-slate-400">20 Yrs</span><div className="h-1.5 bg-emerald-500/70 w-[48%] rounded-full"></div></div>
<div className="flex items-center text-xs"><span className="w-12 text-slate-400">30 Yrs</span><div className="h-1.5 bg-emerald-400 w-[100%] rounded-full shadow-[0_0_10px_rgba(52,211,153,0.3)]"></div></div>
</div>
</div>
<div className="bg-slate-900 border border-white/5 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-300">
<div className="flex items-center justify-between mb-4">
<span className="text-lg font-normal text-white">VTIAX</span>
<iconify-icon className="text-emerald-400" icon="solar:earth-linear" width="24"></iconify-icon>
</div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Total International</p>
<p className="text-sm text-slate-400 font-light mb-6">Invests in thousands of companies <strong className="font-medium">outside the U.S.</strong> It balances your portfolio if the U.S. market slows down.</p>
<ul className="text-sm text-slate-300 space-y-2 mb-6 font-light">
<li className="flex gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Global diversification</li>
<li className="flex gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Reduces localized risk</li>
</ul>
<div className="space-y-2 border-t border-white/5 pt-4">
<p className="text-xs text-slate-500 uppercase tracking-wider flex items-center justify-between">
<span>Hypothetical Growth</span>
<span className="text-blue-400 font-medium tracking-normal normal-case">+6.5% Avg Return</span>
</p>
<div className="flex items-center text-xs"><span className="w-12 text-slate-400">10 Yrs</span><div className="h-1.5 bg-blue-500/40 w-[10%] rounded-full"></div></div>
<div className="flex items-center text-xs"><span className="w-12 text-slate-400">20 Yrs</span><div className="h-1.5 bg-blue-500/70 w-[30%] rounded-full"></div></div>
<div className="flex items-center text-xs"><span className="w-12 text-slate-400">30 Yrs</span><div className="h-1.5 bg-blue-400 w-[60%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div></div>
</div>
</div>
<div className="bg-slate-900 border border-white/5 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-300 lg:col-span-2 xl:col-span-1">
<div className="flex items-center justify-between mb-4">
<span className="text-lg font-normal text-white">ITOT</span>
<iconify-icon className="text-emerald-400" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Core Total U.S. Market</p>
<p className="text-sm text-slate-400 font-light mb-6">A highly reliable alternative to VTI by iShares. Very popular, low cost, and perfect for long-term holding.</p>
<ul className="text-sm text-slate-300 space-y-2 mb-6 font-light">
<li className="flex gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Extremely stable core</li>
<li className="flex gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Trades like a stock</li>
</ul>
<div className="space-y-2 border-t border-white/5 pt-4">
<p className="text-xs text-slate-500 uppercase tracking-wider flex items-center justify-between">
<span>Hypothetical Growth</span>
<span className="text-emerald-400 font-medium tracking-normal normal-case">+10% Avg Return</span>
</p>
<div className="flex items-center text-xs"><span className="w-12 text-slate-400">10 Yrs</span><div className="h-1.5 bg-emerald-500/40 w-[15%] rounded-full"></div></div>
<div className="flex items-center text-xs"><span className="w-12 text-slate-400">20 Yrs</span><div className="h-1.5 bg-emerald-500/70 w-[46%] rounded-full"></div></div>
<div className="flex items-center text-xs"><span className="w-12 text-slate-400">30 Yrs</span><div className="h-1.5 bg-emerald-400 w-[99%] rounded-full shadow-[0_0_10px_rgba(52,211,153,0.3)]"></div></div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-slate-50 text-slate-900 py-24 px-6 lg:px-12 relative z-[57] rounded-t-[3rem] -mt-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.1)]" id="top-mutual-funds">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8 reveal">
<div className="max-w-xl">
<p className="text-xs font-medium tracking-wider uppercase text-emerald-600 mb-4">
              Long-Term Focus
            </p>
<h2 className="text-4xl font-normal tracking-tight leading-[1.05] mb-4">
              Top 5 Mutual Funds.
            </h2>
<p className="text-sm text-slate-600 font-light">
              Aligned with Morningstar’s methodology, these funds offer an incredible balance of stability and growth. 
              The chart below shows their typical risk levels and average long-term performance.
            </p>
</div>
</div>
<div className="space-y-4 reveal delay-100">
<div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg transition-all duration-300">
<div className="md:w-1/3">
<h3 className="text-lg tracking-tight font-normal text-slate-900">VFIAX</h3>
<p className="text-xs text-slate-500 font-medium mb-2">Vanguard 500 Index</p>
<p className="text-sm text-slate-600 font-light">Direct exposure to the S&amp;P 500. A cornerstone for any portfolio.</p>
</div>
<div className="md:w-1/4">
<p className="text-xs uppercase text-slate-400 mb-1 font-medium">Risk Level</p>
<div className="flex gap-1 items-center">
<div className="w-8 h-1.5 rounded-full bg-slate-200"></div>
<div className="w-8 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.5)]"></div>
<div className="w-8 h-1.5 rounded-full bg-slate-200"></div>
<span className="text-xs text-slate-500 ml-2">Medium</span>
</div>
</div>
<div className="md:w-1/3">
<p className="text-xs uppercase text-slate-400 mb-1 font-medium">10-Year Avg Return</p>
<div className="flex items-center gap-3">
<div className="flex-1 bg-slate-100 rounded-full h-2">
<div className="bg-emerald-500 h-2 rounded-full w-[80%]"></div>
</div>
<span className="text-sm font-medium text-slate-900">~12.5%</span>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg transition-all duration-300">
<div className="md:w-1/3">
<h3 className="text-lg tracking-tight font-normal text-slate-900">FXAIX</h3>
<p className="text-xs text-slate-500 font-medium mb-2">Fidelity 500 Index</p>
<p className="text-sm text-slate-600 font-light">Fidelity's extremely low-cost version of the S&amp;P 500. Highly efficient.</p>
</div>
<div className="md:w-1/4">
<p className="text-xs uppercase text-slate-400 mb-1 font-medium">Risk Level</p>
<div className="flex gap-1 items-center">
<div className="w-8 h-1.5 rounded-full bg-slate-200"></div>
<div className="w-8 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.5)]"></div>
<div className="w-8 h-1.5 rounded-full bg-slate-200"></div>
<span className="text-xs text-slate-500 ml-2">Medium</span>
</div>
</div>
<div className="md:w-1/3">
<p className="text-xs uppercase text-slate-400 mb-1 font-medium">10-Year Avg Return</p>
<div className="flex items-center gap-3">
<div className="flex-1 bg-slate-100 rounded-full h-2">
<div className="bg-emerald-500 h-2 rounded-full w-[81%]"></div>
</div>
<span className="text-sm font-medium text-slate-900">~12.6%</span>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg transition-all duration-300">
<div className="md:w-1/3">
<h3 className="text-lg tracking-tight font-normal text-slate-900">VBTLX</h3>
<p className="text-xs text-slate-500 font-medium mb-2">Vanguard Total Bond Market</p>
<p className="text-sm text-slate-600 font-light">Invests in steady bonds. Offers strong stability and income, preventing big losses.</p>
</div>
<div className="md:w-1/4">
<p className="text-xs uppercase text-slate-400 mb-1 font-medium">Risk Level</p>
<div className="flex gap-1 items-center">
<div className="w-8 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></div>
<div className="w-8 h-1.5 rounded-full bg-slate-200"></div>
<div className="w-8 h-1.5 rounded-full bg-slate-200"></div>
<span className="text-xs text-slate-500 ml-2">Low</span>
</div>
</div>
<div className="md:w-1/3">
<p className="text-xs uppercase text-slate-400 mb-1 font-medium">10-Year Avg Return</p>
<div className="flex items-center gap-3">
<div className="flex-1 bg-slate-100 rounded-full h-2">
<div className="bg-emerald-300 h-2 rounded-full w-[15%]"></div>
</div>
<span className="text-sm font-medium text-slate-900">~2.0%</span>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg transition-all duration-300">
<div className="md:w-1/3">
<h3 className="text-lg tracking-tight font-normal text-slate-900">TRBCX</h3>
<p className="text-xs text-slate-500 font-medium mb-2">T. Rowe Price Blue Chip</p>
<p className="text-sm text-slate-600 font-light">Focuses on major large-cap companies. Higher risk, but often beats average returns.</p>
</div>
<div className="md:w-1/4">
<p className="text-xs uppercase text-slate-400 mb-1 font-medium">Risk Level</p>
<div className="flex gap-1 items-center">
<div className="w-8 h-1.5 rounded-full bg-slate-200"></div>
<div className="w-8 h-1.5 rounded-full bg-slate-200"></div>
<div className="w-8 h-1.5 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.5)]"></div>
<span className="text-xs text-slate-500 ml-2">High</span>
</div>
</div>
<div className="md:w-1/3">
<p className="text-xs uppercase text-slate-400 mb-1 font-medium">10-Year Avg Return</p>
<div className="flex items-center gap-3">
<div className="flex-1 bg-slate-100 rounded-full h-2">
<div className="bg-emerald-500 h-2 rounded-full w-[90%]"></div>
</div>
<span className="text-sm font-medium text-slate-900">~14.2%</span>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg transition-all duration-300">
<div className="md:w-1/3">
<h3 className="text-lg tracking-tight font-normal text-slate-900">VIGAX</h3>
<p className="text-xs text-slate-500 font-medium mb-2">Vanguard Growth Index</p>
<p className="text-sm text-slate-600 font-light">A strategic long-term tilt towards the fastest-growing companies in the U.S.</p>
</div>
<div className="md:w-1/4">
<p className="text-xs uppercase text-slate-400 mb-1 font-medium">Risk Level</p>
<div className="flex gap-1 items-center">
<div className="w-8 h-1.5 rounded-full bg-slate-200"></div>
<div className="w-8 h-1.5 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.5)]"></div>
<div className="w-8 h-1.5 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.5)]"></div>
<span className="text-xs text-slate-500 ml-2">Med-High</span>
</div>
</div>
<div className="md:w-1/3">
<p className="text-xs uppercase text-slate-400 mb-1 font-medium">10-Year Avg Return</p>
<div className="flex items-center gap-3">
<div className="flex-1 bg-slate-100 rounded-full h-2">
<div className="bg-emerald-500 h-2 rounded-full w-[88%]"></div>
</div>
<span className="text-sm font-medium text-slate-900">~13.8%</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-slate-900 text-white py-24 px-6 lg:px-12 relative z-[58] rounded-t-[3rem] -mt-12" id="sp500-funds">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 mb-16 items-center reveal">
<div>
<p className="text-xs font-medium tracking-wider uppercase text-emerald-400 mb-4">
               The Core Strategy
             </p>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight leading-[1.05] mb-6">
               The S&amp;P 500: Your Wealth Engine.
             </h2>
<p className="text-sm text-slate-400 font-light leading-relaxed mb-4">
               The S&amp;P 500 is an index containing the <strong className="font-medium">500 most powerful companies in the U.S.</strong> When you buy an S&amp;P 500 fund, you are betting on the success of the entire American economy.
             </p>
<p className="text-sm text-slate-400 font-light leading-relaxed">
               Because these are the biggest companies, they are historically very stable. It is the #1 recommended investment for beginners opening a Roth IRA.
             </p>
</div>
<div className="bg-slate-800 rounded-[2.5rem] p-8 border border-white/5 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent"></div>
<p className="text-xs text-slate-400 uppercase tracking-wider mb-2 relative z-10">Historical Power</p>
<h3 className="text-2xl tracking-tight font-normal text-white mb-6 relative z-10">How $10,000 grows over 20 years.</h3>
<div className="flex items-end gap-2 h-32 mt-4 relative z-10">
<div className="w-1/5 bg-slate-700/50 rounded-t h-[20%] relative group-hover:bg-emerald-500/20 transition-colors"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-slate-500">$10k</span></div>
<div className="w-1/5 bg-slate-700/50 rounded-t h-[35%] relative group-hover:bg-emerald-500/40 transition-colors"></div>
<div className="w-1/5 bg-slate-700/50 rounded-t h-[55%] relative group-hover:bg-emerald-500/60 transition-colors"></div>
<div className="w-1/5 bg-slate-700/50 rounded-t h-[80%] relative group-hover:bg-emerald-500/80 transition-colors"></div>
<div className="w-1/5 bg-emerald-500 rounded-t h-[100%] shadow-[0_0_20px_rgba(16,185,129,0.3)] relative"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-medium text-emerald-400">$64k+</span></div>
</div>
</div>
</div>
<h3 className="text-2xl tracking-tight font-normal text-white mb-6 reveal delay-100 border-b border-white/10 pb-4">Top 5 S&amp;P 500 Funds</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 reveal delay-200">
<div className="bg-slate-950 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors">
<h4 className="text-xl tracking-tight font-normal text-white mb-1">VOO</h4>
<p className="text-xs text-slate-500 uppercase mb-4">Vanguard ETF</p>
<div className="space-y-3 border-t border-white/5 pt-4">
<div className="flex justify-between items-center text-xs">
<span className="text-slate-400 font-light">1-Year</span>
<span className="text-emerald-400 font-medium">+24.2%</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-slate-400 font-light">5-Year</span>
<span className="text-emerald-400 font-medium">+14.5%</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-slate-400 font-light">10-Year</span>
<span className="text-emerald-400 font-medium">+12.6%</span>
</div>
</div>
</div>
<div className="bg-slate-950 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors">
<h4 className="text-xl tracking-tight font-normal text-white mb-1">SPY</h4>
<p className="text-xs text-slate-500 uppercase mb-4">SPDR Trust ETF</p>
<div className="space-y-3 border-t border-white/5 pt-4">
<div className="flex justify-between items-center text-xs">
<span className="text-slate-400 font-light">1-Year</span>
<span className="text-emerald-400 font-medium">+24.1%</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-slate-400 font-light">5-Year</span>
<span className="text-emerald-400 font-medium">+14.4%</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-slate-400 font-light">10-Year</span>
<span className="text-emerald-400 font-medium">+12.5%</span>
</div>
</div>
</div>
<div className="bg-slate-950 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors">
<h4 className="text-xl tracking-tight font-normal text-white mb-1">IVV</h4>
<p className="text-xs text-slate-500 uppercase mb-4">iShares Core ETF</p>
<div className="space-y-3 border-t border-white/5 pt-4">
<div className="flex justify-between items-center text-xs">
<span className="text-slate-400 font-light">1-Year</span>
<span className="text-emerald-400 font-medium">+24.2%</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-slate-400 font-light">5-Year</span>
<span className="text-emerald-400 font-medium">+14.5%</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-slate-400 font-light">10-Year</span>
<span className="text-emerald-400 font-medium">+12.6%</span>
</div>
</div>
</div>
<div className="bg-slate-950 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors">
<h4 className="text-xl tracking-tight font-normal text-white mb-1">FXAIX</h4>
<p className="text-xs text-slate-500 uppercase mb-4">Fidelity Mutual</p>
<div className="space-y-3 border-t border-white/5 pt-4">
<div className="flex justify-between items-center text-xs">
<span className="text-slate-400 font-light">1-Year</span>
<span className="text-emerald-400 font-medium">+24.3%</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-slate-400 font-light">5-Year</span>
<span className="text-emerald-400 font-medium">+14.5%</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-slate-400 font-light">10-Year</span>
<span className="text-emerald-400 font-medium">+12.6%</span>
</div>
</div>
</div>
<div className="bg-slate-950 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors">
<h4 className="text-xl tracking-tight font-normal text-white mb-1">SWPPX</h4>
<p className="text-xs text-slate-500 uppercase mb-4">Schwab Mutual</p>
<div className="space-y-3 border-t border-white/5 pt-4">
<div className="flex justify-between items-center text-xs">
<span className="text-slate-400 font-light">1-Year</span>
<span className="text-emerald-400 font-medium">+24.2%</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-slate-400 font-light">5-Year</span>
<span className="text-emerald-400 font-medium">+14.4%</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-slate-400 font-light">10-Year</span>
<span className="text-emerald-400 font-medium">+12.5%</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-slate-950 text-white py-16 px-6 lg:px-12 relative z-[59] border-t border-white/10" id="expert-sources">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 reveal">
<div>
<h3 className="text-lg tracking-tight font-normal text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:library-linear"></iconify-icon> Recommended Reading
           </h3>
<ul className="space-y-3 text-sm font-light flex flex-col">
<a className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-3 group" href="https://www.irs.gov/retirement-plans/roth-iras" target="_blank">
                Official IRS Roth IRA Guidelines
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-3 group" href="https://www.investopedia.com/terms/r/rothira.asp" target="_blank">
                Investopedia: Comprehensive Guide
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-3 group" href="https://www.nerdwallet.com/article/investing/what-is-a-roth-ira" target="_blank">
                NerdWallet: Roth IRA Basics
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-3 group" href="https://investor.vanguard.com/accounts-plans/iras/roth-ira" target="_blank">
                Vanguard: Why Choose a Roth?
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</ul>
</div>
<div>
<h3 className="text-lg tracking-tight font-normal text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:info-circle-linear"></iconify-icon> Important Disclosure
           </h3>
<p className="text-sm text-slate-400 font-light leading-relaxed mb-4">
             The information provided in this guide is for educational purposes only and does not constitute financial, investment, legal, or tax advice. Past performance of financial markets is not indicative of future results.
           </p>
<p className="text-sm text-slate-400 font-light leading-relaxed mb-4">
             All projected returns (e.g., 10% average annual return) are hypothetical and used to demonstrate mathematical concepts like compound interest. Actual returns will fluctuate.
           </p>
<p className="text-sm text-slate-400 font-light leading-relaxed border-l-2 border-emerald-500/50 pl-3">
             Please consult a certified financial planner (CFP) or tax professional regarding your specific financial situation before making major investment decisions.
           </p>
</div>
</div>
</section>
<footer className="bg-slate-950 border-t border-white/5 py-12 px-6 lg:px-12 text-center relative z-[60]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-1 group cursor-pointer">
<span className="text-lg font-medium text-white tracking-tighter uppercase">ROTH</span>
<span className="text-lg font-light text-slate-400 tracking-tight uppercase">GUIDE</span>
</div>
<p className="text-sm text-slate-500 font-light tracking-wide flex flex-col md:block">
<span>© 2024 RothGuide Education. Empowering young investors.</span>
<span className="hidden md:inline mx-2 text-slate-600">|</span>
<span className="text-slate-400 font-medium">Created By: Hudson Turner</span>
</p>
<div className="flex items-center gap-4 text-slate-500">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500/20 hover:text-emerald-400 transition-all border border-white/5" href="#">
<iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500/20 hover:text-emerald-400 transition-all border border-white/5" href="#">
<iconify-icon icon="solar:share-circle-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>


    </>
  );
}
