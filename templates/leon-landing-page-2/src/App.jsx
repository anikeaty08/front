import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
primary: '#022950',
secondary: '#0660ac',
accent: '#1b9df3',
metric: '#99f6db',
success: '#73e049'
}
}
}
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      (function() {
          // Sticky Header Effect
          const header = document.getElementById('navbar');
          window.addEventListener('scroll', () => {
              if (window.scrollY > 20) {
                  header.classList.add('header-scrolled');
              } else {
                  header.classList.remove('header-scrolled');
              }
          });

          // Stat Counters On Scroll
          const counters = document.querySelectorAll('.stat-counter, .counter-up');
          const observerOpts = { threshold: 0.5 };
          const statObserver = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      const counter = entry.target;
                      const target = parseFloat(counter.getAttribute('data-target'));
                      const duration = 2000;
                      let start = 0;
                      const increment = target / (duration / 16);
                      const isFloat = target % 1 !== 0;

                      const updateCounter = () => {
                          start += increment;
                          if (start < target) {
                              counter.innerText = isFloat ? start.toFixed(2) : Math.floor(start);
                              requestAnimationFrame(updateCounter);
                          } else {
                              counter.innerText = target;
                          }
                      };
                      updateCounter();
                      observer.unobserve(counter); // only animate once
                  }
              });
          }, observerOpts);

          counters.forEach(counter => statObserver.observe(counter));

          // General Reveal Animation
          const reveals = document.querySelectorAll('.reveal-item, .reveal-left, .reveal-right, .reveal-scale');
          const revealObs = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if(entry.isIntersecting) {
                      entry.target.classList.add('is-revealed');
                      observer.unobserve(entry.target);
                  }
              });
          }, { threshold: 0.1 });
          reveals.forEach(el => revealObs.observe(el));

      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 z-[-1] bg-[#022950] pointer-events-none"></div>

<header className="fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent bg-[#0660ac] h-20 flex items-center" id="navbar">
<div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between relative z-10">

<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded border border-[#1b9df3]/40 bg-[#1b9df3]/10 flex items-center justify-center shadow-[0_0_10px_rgba(27,157,243,0.2)]">
<div className="w-2 h-2 rounded-full bg-[#1b9df3] animate-pulse"></div>
</div>
<span className="text-sm font-medium tracking-widest text-white uppercase">
            Local Lead Automation
          </span>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="px-6 py-2.5 rounded bg-[#1b9df3] text-white text-xs font-medium hover:bg-[#1b9df3]/90 transition-all duration-300 shadow-[0_0_20px_rgba(27,157,243,0.3)] border border-[#1b9df3]/50 flex items-center gap-2" href="#">
<iconify-icon className="text-sm" icon="solar:calendar-mark-linear"></iconify-icon>
            Book a Free Strategy Call
          </a>
</div>
</div>
</header>
<main className="">

<section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#022950]" id="hero-section">
<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#1b9df3]/20 rounded-full blur-[120px] mix-blend-screen animate-[move-bg_20s_ease-in-out_infinite] opacity-60"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#99f6db]/10 rounded-full blur-[120px] mix-blend-screen animate-[move-bg-rev_25s_ease-in-out_infinite] opacity-60"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,157,243,0.05)_0%,transparent_60%)] blur-[80px]"></div>

<div className="absolute inset-0 opacity-20">
<div className="absolute left-[20%] w-32 h-[150%] bg-gradient-to-t from-transparent via-[#1b9df3]/10 to-transparent blur-[40px] animate-[energy-wave_8s_ease-in-out_infinite]"></div>
<div className="absolute left-[50%] w-48 h-[150%] bg-gradient-to-t from-transparent via-[#99f6db]/5 to-transparent blur-[50px] animate-[energy-wave_12s_ease-in-out_infinite_2s]"></div>
<div className="absolute right-[20%] w-24 h-[150%] bg-gradient-to-t from-transparent via-[#1b9df3]/10 to-transparent blur-[30px] animate-[energy-wave_10s_ease-in-out_infinite_4s]"></div>
</div>

<div className="absolute inset-0 opacity-50">
<div className="absolute left-[25%] w-[1px] h-8 bg-gradient-to-t from-transparent to-[#1b9df3] rounded-full blur-[1px] animate-[particle-rise_5s_linear_infinite]"></div>
<div className="absolute left-[45%] w-[1px] h-12 bg-gradient-to-t from-transparent to-[#99f6db] rounded-full blur-[2px] animate-[particle-rise_7s_linear_infinite_1s]"></div>
</div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '64px 64px'}}></div>
</div>
<div className="grid lg:grid-cols-12 lg:gap-6 w-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">
<div className="lg:col-span-6 flex flex-col justify-center relative z-20 pointer-events-none reveal-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-[#1b9df3]/30 bg-[#1b9df3]/10 backdrop-blur-md text-[#1b9df3] text-xs font-medium uppercase tracking-widest mb-8 w-max shadow-[0_0_15px_rgba(27,157,243,0.1)] pointer-events-auto">
<div className="w-1.5 h-1.5 rounded-full bg-[#1b9df3] animate-pulse shadow-[0_0_5px_#1b9df3]"></div>
              Pool Profit Accelerator
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white mb-6 leading-[1.05] brand-text-glow transition-all duration-500 pointer-events-auto">
              We Guarantee Pool Builders
              <span className="text-[#73e049]">125 Qualified</span>
              Sales Appointments in 90 Days
              <br/>
<span className="text-white/80 text-3xl md:text-5xl">
                — Or You Pay Nothing.
              </span>
</h1>
<p className="text-base md:text-lg text-white/70 mb-10 max-w-md font-light leading-relaxed pointer-events-auto">
              Google Ads + automated lead response in under 60 seconds. Books
              appointments 24/7. No hires required.
            </p>
<div className="flex flex-col sm:flex-row gap-4 items-start pointer-events-auto mb-10">
<button className="btn-scan px-8 py-3.5 rounded bg-[#1b9df3] text-white text-sm font-medium hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_25px_rgba(27,157,243,0.25)] flex items-center gap-2">
                Book Your Free Strategy Call
                <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="btn-ripple px-8 py-3.5 rounded border border-[#1b9df3]/30 bg-[#1b9df3]/5 backdrop-blur-md text-white text-sm font-normal hover:bg-[#1b9df3]/10 hover:border-[#1b9df3]/50 transition-all duration-300 flex items-center gap-2">
<iconify-icon className="text-sm text-[#1b9df3]" icon="solar:play-circle-linear"></iconify-icon>
                See How It Works
              </button>
</div>
<div className="text-xs text-white/50 font-normal uppercase tracking-widest pointer-events-auto flex items-center gap-2">
<iconify-icon className="text-[#73e049] text-base" icon="solar:shield-check-bold"></iconify-icon>
              Active clients across Premier Pools &amp; Spas and Pinnacle Pools
              &amp; Spas
            </div>
</div>

<div className="lg:col-span-6 h-[400px] md:h-[500px] parallax-container z-10 w-full relative pointer-events-auto reveal-right" id="hero-parallax">
<div className="parallax-panel absolute inset-0 rounded-[28px] border border-[#1b9df3]/20 bg-[#0660ac] shadow-[0_40px_80px_rgba(2,41,80,0.8)] overflow-hidden z-20 flex flex-col items-center justify-center group cursor-pointer transition-all duration-500 hover:border-[#1b9df3]/40">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,157,243,0.1)_0%,transparent_50%)] pointer-events-none group-hover:opacity-70 transition-opacity"></div>

<div className="w-20 h-20 rounded-full bg-[#022950]/50 border border-[#1b9df3]/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1b9df3]/20 transition-all duration-300 shadow-[0_0_30px_rgba(27,157,243,0.2)] z-10">
<iconify-icon className="text-4xl text-[#1b9df3] ml-1" icon="solar:play-bold"></iconify-icon>
</div>
<div className="absolute bottom-8 px-6 text-center w-full z-10">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#022950]/80 backdrop-blur border border-white/10 text-white/90 text-sm font-medium tracking-tight shadow-lg">
<span className="w-2 h-2 rounded-full bg-[#73e049] animate-pulse"></span>
                  How Pool Builders Book 100+ Appointments Per Month
                </div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
<span className="text-xs text-[#1b9df3] uppercase tracking-widest font-mono">
            Scroll
          </span>
<div className="w-px h-10 bg-gradient-to-b from-[#1b9df3]/30 to-transparent relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-4 bg-[#1b9df3] shadow-[0_0_8px_#1b9df3] animate-[scroll-probe_1.5s_ease-in-out_infinite]"></div>
</div>
</div>
</section>

<section className="py-16 bg-[#0660ac] border-y border-white/5 relative z-20">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
<div className="reveal-item">
<div className="text-4xl md:text-5xl font-light text-[#99f6db] tracking-tight mb-2 flex items-baseline justify-center gap-1 drop-shadow-[0_0_15px_rgba(153,246,219,0.2)]">
<span className="stat-counter" data-target="286">0</span>
</div>
<span className="text-xs text-white/60 uppercase tracking-widest font-mono">
              Appointments Booked
            </span>
</div>
<div className="reveal-item delay-100">
<div className="text-4xl md:text-5xl font-light text-[#99f6db] tracking-tight mb-2 flex items-baseline justify-center gap-1 drop-shadow-[0_0_15px_rgba(153,246,219,0.2)]">
<span className="text-[#99f6db]">$</span>
<span className="stat-counter" data-target="4">0</span>
<span className="text-[#99f6db]">M+</span>
</div>
<span className="text-xs text-white/60 uppercase tracking-widest font-mono">
              Revenue Added
            </span>
</div>
<div className="reveal-item delay-200">
<div className="text-4xl md:text-5xl font-light text-[#99f6db] tracking-tight mb-2 flex items-baseline justify-center gap-1 drop-shadow-[0_0_15px_rgba(153,246,219,0.2)]">
<span className="stat-counter" data-target="61">0</span>
<span className="text-[#99f6db]">%</span>
</div>
<span className="text-xs text-white/60 uppercase tracking-widest font-mono">
              Lead to Appointment
            </span>
</div>
<div className="reveal-item delay-300">
<div className="text-4xl md:text-5xl font-light text-[#99f6db] tracking-tight mb-2 flex items-baseline justify-center gap-1 drop-shadow-[0_0_15px_rgba(153,246,219,0.2)]">
<span className="stat-counter" data-target="60">0</span>
<span className="text-[#99f6db] text-2xl ml-1">sec</span>
</div>
<span className="text-xs text-white/60 uppercase tracking-widest font-mono">
              Response Time
            </span>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#022950] pt-24 pb-32 relative">
<div className="max-w-[1200px] mx-auto px-6 relative z-10">
<div className="mb-20 text-center">
<h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight mb-4 reveal-item">
              If You're Over $1M —
              <span className="text-[#1b9df3]">You're Losing Deals Every Week</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-[#0660ac] border border-white/10 rounded-[24px] p-10 flex flex-col justify-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-[0_20px_50px_rgba(2,41,80,0.5)] reveal-left">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(27,157,243,0.15),transparent_60%)] pointer-events-none"></div>
<div className="w-14 h-14 rounded-xl border border-white/10 bg-[#022950]/50 flex items-center justify-center mb-8">
<iconify-icon className="text-3xl text-white/60" icon="solar:chart-line-down-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-4">
                Not enough qualified leads
              </h3>
<p className="text-white/70 text-lg font-light leading-relaxed">
                You rely entirely on word-of-mouth referrals and inconsistent,
                outdated ad strategies that bring in tire-kickers instead of
                serious buyers.
              </p>
</div>

<div className="bg-[#0660ac] border border-white/10 rounded-[24px] p-10 flex flex-col justify-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-[0_20px_50px_rgba(2,41,80,0.5)] reveal-right">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(27,157,243,0.15),transparent_60%)] pointer-events-none"></div>
<div className="w-14 h-14 rounded-xl border border-white/10 bg-[#022950]/50 flex items-center justify-center mb-8">
<iconify-icon className="text-3xl text-[#1b9df3]" icon="solar:hourglass-line-duotone"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-4">
                You lose 60–80% of your leads
              </h3>
<p className="text-white/70 text-lg font-light leading-relaxed mb-6">
                Leads come in → no fast response → deal lost to a competitor.
              </p>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded border border-[#1b9df3]/30 bg-[#022950]/40 text-[#1b9df3] text-sm font-medium">
<iconify-icon className="text-lg" icon="solar:danger-circle-linear"></iconify-icon>
                5 min vs 30 min response = 21x difference in closing
              </div>
</div>
</div>
</div>
</section>

<section className="py-16 border-y border-white/5 bg-[#0660ac] overflow-hidden relative flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(153,246,219,0.05),transparent_50%)] pointer-events-none"></div>
<div className="text-center px-6 relative z-10 w-full">
<h2 className="text-3xl md:text-5xl font-light text-white tracking-tight flex flex-wrap justify-center items-center gap-x-3 gap-y-2 reveal-scale">
            78% of buyers choose the
            <span className="text-[#99f6db] font-medium border-b-2 border-[#99f6db] drop-shadow-[0_0_15px_rgba(153,246,219,0.4)] px-1">
              first
            </span>
            company that responds
          </h2>
</div>
</section>

<section className="overflow-hidden bg-[#022950] pt-28 pb-32 relative border-b border-white/5">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,157,243,0.06),transparent_42%)]"></div>
<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '80px 80px'}}></div>
<div className="z-10 max-w-[1280px] mr-auto ml-auto pr-6 pl-6 relative">

<div className="text-center mb-20">
<h2 className="md:text-5xl text-3xl font-normal text-white tracking-tight mb-4 reveal-item">
              We Fix Lead Flow
              <span className="text-[#1b9df3]">AND</span>
              Follow-Up
            </h2>
</div>

<div className="relative grid md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">

<div className="group relative rounded-[28px] border border-white/10 bg-[#0660ac] px-8 py-10 shadow-[0_20px_60px_rgba(2,41,80,0.6)] transition-all duration-500 hover:-translate-y-2 hover:border-[#1b9df3]/30 reveal-left">
<div className="absolute inset-x-[20%] top-0 h-px bg-gradient-to-r from-transparent via-[#1b9df3]/70 to-transparent"></div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-8">
<div className="w-16 h-16 rounded-2xl bg-[#022950] border border-[#1b9df3]/20 flex items-center justify-center text-3xl font-medium text-[#1b9df3] shadow-[0_0_20px_rgba(27,157,243,0.15)]">
                    01
                  </div>
<h4 className="text-2xl font-normal tracking-tight text-white">
                    Google Ads System
                  </h4>
</div>
<ul className="space-y-4 text-white/80 font-light text-lg">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#1b9df3] text-xl" icon="solar:check-circle-bold"></iconify-icon>
                    High intent leads looking to build now
                  </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#1b9df3] text-xl" icon="solar:check-circle-bold"></iconify-icon>
                    20–30 exclusive leads per month
                  </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#1b9df3] text-xl" icon="solar:check-circle-bold"></iconify-icon>
                    Complete transparency: You pay Google directly
                  </li>
</ul>
</div>
</div>

<div className="group relative rounded-[28px] border border-white/10 bg-[#0660ac] px-8 py-10 shadow-[0_20px_60px_rgba(2,41,80,0.6)] transition-all duration-500 hover:-translate-y-2 hover:border-[#1b9df3]/30 reveal-right">
<div className="absolute inset-x-[20%] top-0 h-px bg-gradient-to-r from-transparent via-[#99f6db]/70 to-transparent"></div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-8">
<div className="w-16 h-16 rounded-2xl bg-[#022950] border border-[#99f6db]/20 flex items-center justify-center text-3xl font-medium text-[#99f6db] shadow-[0_0_20px_rgba(153,246,219,0.15)]">
                    02
                  </div>
<h4 className="text-2xl font-normal tracking-tight text-white">
                    Automated Follow-Up
                  </h4>
</div>
<div className="grid grid-cols-2 gap-y-4 gap-x-2 text-white/80 font-light text-lg">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#99f6db] text-lg" icon="solar:chat-line-bold"></iconify-icon>
                    SMS &amp; Email
                  </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#99f6db] text-lg" icon="solar:phone-calling-bold"></iconify-icon>
                    AI Voice calling
                  </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#99f6db] text-lg" icon="solar:stopwatch-bold"></iconify-icon>
                    Under 60 seconds
                  </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#99f6db] text-lg" icon="solar:calendar-date-bold"></iconify-icon>
                    Books calls 24/7
                  </div>
<div className="flex items-center gap-2 col-span-2">
<iconify-icon className="text-[#99f6db] text-lg" icon="solar:restart-bold"></iconify-icon>
                    Relentless 30-day follow-up sequence
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#0660ac] pt-28 pb-32 relative" id="testimonials">
<div className="max-w-[1400px] mx-auto px-6 relative z-10">

<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white mb-4 reveal-item">
              Real Results From Pool Builders
            </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#022950] rounded-[24px] border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(2,41,80,0.4)] flex flex-col group hover:-translate-y-2 transition-transform duration-500 reveal-item">

<div className="w-full aspect-video bg-[#0660ac] relative flex items-center justify-center border-b border-white/10 cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,157,243,0.2)_0%,transparent_60%)] group-hover:opacity-80 transition-opacity"></div>
<div className="w-16 h-16 rounded-full bg-[#022950]/80 border border-[#1b9df3]/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1b9df3]/20 transition-all duration-300 z-10 group-hover:rotate-12 group-hover:shadow-[0_0_20px_rgba(27,157,243,0.5)]">
<iconify-icon className="text-3xl text-[#1b9df3] ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="p-8 flex-grow flex flex-col justify-between">
<div>
<h4 className="text-xl font-medium text-white mb-2">Bryan</h4>
<div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1b9df3]/10 text-[#1b9df3] rounded text-sm font-medium mb-6">
                    $3.5M
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                    $7–10M
                  </div>
<p className="text-white/80 text-lg font-light leading-relaxed mb-6 italic">
                    "Sold $700K–$800K in January alone."
                  </p>
</div>
</div>
</div>

<div className="bg-[#022950] rounded-[24px] border border-[#1b9df3]/30 overflow-hidden shadow-[0_20px_50px_rgba(2,41,80,0.4)] flex flex-col group hover:-translate-y-2 transition-transform duration-500 relative reveal-item delay-200">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#1b9df3] to-transparent"></div>

<div className="w-full aspect-video bg-[#0660ac] relative flex items-center justify-center border-b border-white/10 cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,157,243,0.2)_0%,transparent_60%)] group-hover:opacity-80 transition-opacity"></div>
<div className="w-16 h-16 rounded-full bg-[#022950]/80 border border-[#1b9df3]/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1b9df3]/20 transition-all duration-300 z-10">
<iconify-icon className="text-3xl text-[#1b9df3] ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="p-8 flex-grow flex flex-col justify-between">
<div>
<h4 className="text-xl font-medium text-white mb-2">Cody</h4>
<div className="flex gap-2 flex-wrap mb-6">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1b9df3]/10 text-[#1b9df3] rounded text-sm font-medium">
                      $1.5M
                      <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                      $5.5M
                    </div>
<div className="inline-flex items-center px-3 py-1 bg-[#99f6db]/10 text-[#99f6db] rounded text-sm font-medium">
                      286 appointments
                    </div>
</div>
<p className="text-white/80 text-lg font-light leading-relaxed mb-6 italic">
                    "3x bookings automatically without lifting a finger."
                  </p>
</div>
</div>
</div>

<div className="bg-[#022950] rounded-[24px] border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(2,41,80,0.4)] flex flex-col group hover:-translate-y-2 transition-transform duration-500 reveal-item delay-400">

<div className="w-full aspect-video bg-[#0660ac] relative flex items-center justify-center border-b border-white/10 cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,157,243,0.2)_0%,transparent_60%)] group-hover:opacity-80 transition-opacity"></div>
<div className="w-16 h-16 rounded-full bg-[#022950]/80 border border-[#1b9df3]/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1b9df3]/20 transition-all duration-300 z-10">
<iconify-icon className="text-3xl text-[#1b9df3] ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="p-8 flex-grow flex flex-col justify-between">
<div>
<h4 className="text-xl font-medium text-white mb-2">John</h4>
<div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1b9df3]/10 text-[#1b9df3] rounded text-sm font-medium mb-6">
                    15% market share gain
                  </div>
<p className="text-white/80 text-lg font-light leading-relaxed mb-6 italic">
                    "It runs 24 hours a day. It's transformed how we capture
                    demand."
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-[#022950] border-y border-white/5">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(115,224,73,0.08),transparent_60%)] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal-scale">
<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#73e049]/10 border border-[#73e049]/30 mb-8 shadow-[0_0_30px_rgba(115,224,73,0.2)] animate-[pulse_3s_ease-in-out_infinite]">
<iconify-icon className="text-5xl text-[#73e049]" icon="solar:shield-check-bold-duotone"></iconify-icon>
</div>
<h2 className="text-4xl md:text-6xl font-normal tracking-tight text-white mb-6">
            125 Appointment Guarantee
          </h2>
<p className="text-xl md:text-2xl font-light text-white/80 mb-8 max-w-2xl mx-auto">
            If we don't deliver 125 qualified sales appointments in 90 days, you
            get a
            <strong className="text-[#73e049] font-medium">full refund</strong>
            .
          </p>
<p className="text-sm text-white/50 uppercase tracking-widest font-mono">
            (Ad spend excluded)
          </p>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-[#0660ac]">
<div className="max-w-[1000px] mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white mb-4 reveal-item">
              Transparent Pricing &amp; ROI
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-[#022950] border border-white/10 rounded-2xl p-10 flex flex-col shadow-[0_20px_50px_rgba(2,41,80,0.6)] reveal-left">
<h3 className="text-2xl font-normal text-white tracking-tight mb-8 border-b border-white/10 pb-4">
                Investment Required
              </h3>
<ul className="space-y-6 flex-grow">
<li className="flex items-center justify-between text-lg text-white/80 font-light">
<span className="flex items-center gap-3">
<iconify-icon className="text-[#1b9df3]" icon="solar:wallet-money-linear"></iconify-icon>
                    Setup Fee
                  </span>
<span className="text-white font-medium">$15K</span>
</li>
<li className="flex items-center justify-between text-lg text-white/80 font-light">
<span className="flex items-center gap-3">
<iconify-icon className="text-[#1b9df3]" icon="solar:calendar-linear"></iconify-icon>
                    Monthly Retainer
                  </span>
<span className="text-white font-medium">$5K / month</span>
</li>
<li className="flex items-center justify-between text-lg text-white/80 font-light border-t border-white/5 pt-6">
<span className="flex items-center gap-3">
<iconify-icon className="text-[#1b9df3]" icon="solar:graph-up-linear"></iconify-icon>
                    Ad Spend
                  </span>
<span className="text-white font-medium">$3–5K</span>
</li>
<li className="flex flex-col gap-2 pt-2 text-white/70 font-light text-sm">
<div className="flex justify-between">
<span>Per Booked Appt (Ads)</span>
<span>$50</span>
</div>
<div className="flex justify-between">
<span>Per Booked Appt (Other)</span>
<span>$30</span>
</div>
</li>
</ul>
</div>

<div className="flex flex-col bg-gradient-to-b from-[#022950] to-[#022950] border-[#73e049]/40 border-2 rounded-2xl p-10 relative shadow-[0_0_40px_rgba(115,224,73,0.15)] reveal-right">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#73e049] to-transparent"></div>
<h3 className="text-2xl font-normal text-white tracking-tight mb-8 border-b border-white/10 pb-4 flex items-center gap-3">
<iconify-icon className="text-[#73e049]" icon="solar:calculator-minimalistic-bold"></iconify-icon>
                Projected ROI Example
              </h3>
<ul className="space-y-5 mb-8 flex-grow">
<li className="flex items-center justify-between text-lg text-white/80 font-light">
<span>Target Appointments</span>
<span className="text-white">44 appts</span>
</li>
<li className="flex items-center justify-between text-lg text-white/80 font-light">
<span>Conservative Close Rate</span>
<span className="text-white">15% close</span>
</li>
<li className="flex items-center justify-between text-lg text-white/80 font-light border-b border-white/10 pb-5">
<span>Average Deal Size</span>
<span className="text-white">$75K deal</span>
</li>
<li className="flex items-center justify-between text-3xl font-normal pt-4">
<span className="text-white">Total Added</span>
<span className="text-[#73e049] font-medium">$495K</span>
</li>
</ul>
<div className="w-full py-4 rounded bg-[#73e049]/10 border border-[#73e049]/30 text-center">
<span className="text-[#73e049] text-xl font-medium tracking-wide">
                  47:1 Return on Investment
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-[#022950] border-t border-white/5">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,157,243,0.08),transparent_50%)] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
<h2 className="text-4xl md:text-6xl font-normal tracking-tight text-white mb-6 reveal-item">
            See If Your Market Qualifies
          </h2>
<p className="text-xl font-light text-white/70 mb-10 max-w-xl mx-auto reveal-item delay-200">
            Book a 30-minute founder call. We'll review your pipeline, market
            density, and show you exactly how the system maps to your current
            lead flow.
          </p>
<button className="px-8 py-4 mb-16 rounded bg-[#1b9df3] text-white text-base font-medium hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_25px_rgba(27,157,243,0.3)] w-max reveal-scale delay-300 hover:shadow-[0_0_40px_rgba(27,157,243,0.6)]">
            Book Your Free Call
          </button>

<div className="w-full max-w-3xl h-[600px] bg-[#0660ac] rounded-2xl border border-white/10 flex items-center justify-center flex-col shadow-2xl relative overflow-hidden reveal-item delay-400">
<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%,transparent)] bg-[length:20px_20px]"></div>
<iconify-icon className="text-6xl text-[#1b9df3] mb-4 relative z-10" icon="solar:calendar-add-bold-duotone"></iconify-icon>
<span className="text-white/60 font-medium tracking-widest uppercase text-sm relative z-10">
              &lt;!-- GHL CALENDAR EMBED --&gt;
            </span>
</div>
</div>
</section>
</main>

<footer className="bg-[#0660ac] py-12 border-t border-white/10 relative overflow-hidden">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded border border-[#1b9df3]/40 bg-[#1b9df3]/10 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-[#1b9df3]"></div>
</div>
<span className="text-sm font-medium tracking-widest text-white uppercase">
              Local Lead Automation
            </span>
</div>
<a className="text-white/70 hover:text-white transition-colors text-sm font-light" href="https://locallead.io" target="_blank">
            locallead.io
          </a>
<p className="text-white/50 text-xs tracking-widest uppercase font-mono">
            © 2026
          </p>
</div>
</div>
</footer>



    </>
  );
}
