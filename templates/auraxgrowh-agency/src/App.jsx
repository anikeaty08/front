import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('lead-form');
            const formContainer = document.getElementById('form-container');
            const successMessage = document.getElementById('success-message');
            const submitBtn = document.getElementById('submit-btn');
            const btnText = document.getElementById('btn-text');
            const btnIcon = document.getElementById('btn-icon');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Anti-spam Honeypot Check
                if (form.elements['_honey'].value !== '') {
                    return; // If filled, secretly stop the submission
                }
                
                // Trigger button loading state
                const originalText = btnText.innerText;
                btnText.innerText = "Sending Request...";
                btnIcon.setAttribute('icon', 'solar:spinner-line-duotone');
                btnIcon.classList.add('animate-spin');
                submitBtn.disabled = true;
                
                const formData = new FormData(form);
                
                fetch('https://formsubmit.co/ajax/growthaurax@gmail.com', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if(data.success) {
                        // Fade out form and show success message
                        formContainer.style.opacity = '0';
                        setTimeout(() => {
                            formContainer.classList.add('hidden');
                            successMessage.classList.remove('hidden');
                        }, 300);
                    } else {
                        throw new Error('Form submission failed');
                    }
                })
                .catch(error => {
                    // Reset Button on Failure (Optional fallback)
                    btnText.innerText = originalText;
                    btnIcon.setAttribute('icon', 'solar:calendar-linear');
                    btnIcon.classList.remove('animate-spin');
                    submitBtn.disabled = false;
                    alert('There was a network error. Please try again.');
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2.5 group" href="#">
<div className="relative flex items-center justify-center">
<div className="absolute inset-0 bg-blue-500 blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
<iconify-icon className="text-blue-500 relative z-10" icon="solar:buildings-bold-duotone" width="28"></iconify-icon>
</div>
<span className="text-lg tracking-tight text-white font-medium">AuraxGrowth</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-normal text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-black bg-white rounded hover:bg-neutral-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#contact">
                    Get More Property Leads
                </a>

<button className="md:hidden text-white pt-1">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="lg:pt-52 lg:pb-24 overflow-hidden pt-40 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-10"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10"></div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-blue-400 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Accepting New Real Estate Partners
            </div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-5xl text-white tracking-tight max-w-5xl mr-auto mb-8 ml-auto">Generate Qualified Buyer &amp; Seller Leads  <br/> <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-500 font-semibold tracking-tighter pb-1 drop-shadow-[0_0_25px_rgba(99,102,241,0.4)]">Every Month.</span></h1>
<p className="text-lg md:text-xl leading-relaxed text-neutral-300/90 font-light tracking-wide max-w-3xl mx-auto mb-12">
                We help real estate agents attract serious buyers and motivated sellers using targeted Facebook &amp; Instagram advertising. We work exclusively with real estate professionals to deliver consistent, high-quality property inquiries.
            </p>
<div className="flex flex-col sm:flex-row gap-x-4 gap-y-4 items-center justify-center">
<a className="w-full sm:w-auto px-8 py-4 bg-blue-600 font-medium text-white rounded hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)]" href="#contact">
                    Get More Property Leads
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 border border-white/10 bg-white/5 font-medium backdrop-blur-sm rounded hover:bg-white/10 transition-all text-white" href="#services">
                    View Services
                </a>
</div>
</div>
</header>

<div className="border-y border-white/5 bg-neutral-950/30 py-6 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
<span className="text-xs text-neutral-500 uppercase tracking-widest font-medium">Who This Is For:</span>
<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-neutral-300">
<span className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon> Real Estate Agents</span>
<span className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon> Realtors</span>
<span className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon> Property Brokers</span>
<span className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon> Real Estate Teams</span>
<span className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon> Listing Specialists</span>
</div>
</div>
</div>

<section className="py-24 bg-neutral-950/50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl text-white tracking-tight mb-4 font-medium">Real Estate Lead Generation Services</h2>
<p className="text-neutral-400 max-w-md">Comprehensive digital strategies designed exclusively for the modern US real estate market.</p>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass p-8 rounded-xl glass-hover transition-all group relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-white mb-6 border border-white/5 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Buyer Lead Generation</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Attract pre-approved, serious buyers actively looking for their next dream home in your local market.
                    </p>
</div>

<div className="glass p-8 rounded-xl glass-hover transition-all group relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-white mb-6 border border-white/5 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:home-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Seller Lead Generation</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Connect with local homeowners ready to list their properties and capture high-value selling opportunities.
                    </p>
</div>

<div className="glass p-8 rounded-xl glass-hover transition-all group relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-white mb-6 border border-white/5 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:calendar-add-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Listing Appointment Funnels</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Automated qualification systems that nurture prospects and book listing appointments directly onto your calendar.
                    </p>
</div>

<div className="glass p-8 rounded-xl glass-hover transition-all group relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-white mb-6 border border-white/5 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Local Market Targeting</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Hyper-local Facebook &amp; Instagram ad management to dominate your specific zip codes and become the neighborhood expert.
                    </p>
</div>

<div className="glass p-8 rounded-xl glass-hover transition-all group relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-white mb-6 border border-white/5 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Facebook &amp; Instagram Ad Campaign Management</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        End-to-end management of your social media advertising, optimizing for the lowest cost-per-lead and highest conversion rates.
                    </p>
</div>

<div className="glass p-8 rounded-xl glass-hover transition-all group relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-white mb-6 border border-white/5 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:chat-round-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Lead Nurturing Automations</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Instant automated follow-ups via SMS and email to ensure zero leads slip through the cracks while you're out on showings.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 relative" id="benefits">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="text-blue-500 text-sm mb-4 tracking-wider uppercase font-medium">The AuraxGrowth Advantage</div>
<h2 className="text-3xl md:text-5xl text-white tracking-tight mb-8 font-medium">
                        Stop chasing leads.<br/>
                        Start closing deals.
                    </h2>
<p className="text-lg text-neutral-400 mb-6 leading-relaxed">
                        Say goodbye to cold calling, door knocking, and relying entirely on unpredictable referrals. We build scalable growth systems tailored specifically for the US real estate market.
                    </p>
<p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                        Our campaigns are designed to position you as the local authority, filtering out window-shoppers and delivering high-intent prospects directly to your pipeline.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold" width="20"></iconify-icon>
                            Consistent monthly leads
                        </li>
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold" width="20"></iconify-icon>
                            More listing opportunities
                        </li>
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold" width="20"></iconify-icon>
                            Higher quality inquiries
                        </li>
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold" width="20"></iconify-icon>
                            No cold calling required
                        </li>
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold" width="20"></iconify-icon>
                            Scalable growth system
                        </li>
</ul>
</div>

<div className="relative">
<div className="absolute inset-0 bg-blue-500/20 blur-[80px] -z-10 rounded-full"></div>
<div className="glass rounded-xl p-1 border border-white/10 shadow-2xl">
<div className="bg-[#050505] rounded-lg pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
<div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
</div>
<div className="text-xs text-neutral-500">campaign_performance.json</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-neutral-900/50 p-4 rounded border border-white/5">
<div className="text-xs text-neutral-500 mb-1">Cost Per Lead</div>
<div className="flex items-center gap-3 mt-0.5 group cursor-default">
<span className="text-3xl font-semibold text-white tracking-tight scale-105">$0.98</span>
<div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:bg-emerald-500/20 group-hover:scale-105 group-hover:border-emerald-500/30">
<svg className="lucide lucide-trending-down" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg>
<span className="text-xs font-medium leading-none">Avg</span>
</div>
</div>
</div>
<div className="bg-neutral-900/50 border-white/5 border rounded pt-4 pr-4 pb-4 pl-4">
<div className="text-xs text-neutral-500 mb-1">Qualified Leads</div>
<div className="flex text-2xl font-medium text-white gap-x-2 gap-y-2 items-end">99+</div>
</div>
</div>

<div className="h-40 flex items-end justify-between gap-2 px-2">
<div className="w-full bg-blue-900/30 rounded-t h-[40%] relative group"><div className="absolute bottom-0 w-full bg-blue-500 h-0 transition-all duration-1000 group-hover:h-full opacity-50"></div></div>
<div className="w-full bg-blue-900/30 rounded-t h-[55%]"></div>
<div className="w-full bg-blue-900/30 rounded-t h-[45%]"></div>
<div className="w-full bg-blue-900/30 rounded-t h-[70%]"></div>
<div className="w-full bg-blue-900/30 rounded-t h-[65%]"></div>
<div className="w-full bg-blue-500 rounded-t h-[90%] shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl text-white tracking-tight mb-4 font-medium">How It Works</h2>
<p className="text-neutral-400 max-w-xl mx-auto">A simple, proven 3-step process to transform your real estate business into a lead-generating machine.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start relative">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent -z-10"></div>

<div className="glass p-8 rounded-xl border-white/10 hover:border-blue-500/30 transition-all flex flex-col h-full relative group">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-blue-500/50 flex items-center justify-center text-blue-400 font-semibold mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)] mx-auto md:mx-0">
                        1
                    </div>
<div className="mb-4 text-center md:text-left">
<h3 className="text-xl font-medium text-white mb-2">Strategy &amp; Market Research</h3>
</div>
<p className="text-sm text-neutral-400 leading-relaxed text-center md:text-left">
                        We analyze your specific local market, target demographics, and design a custom ad blueprint to attract your ideal buyers and sellers in your chosen zip codes.
                    </p>
</div>

<div className="glass p-8 rounded-xl border-white/10 hover:border-blue-500/30 transition-all flex flex-col h-full relative group">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-blue-500/50 flex items-center justify-center text-blue-400 font-semibold mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)] mx-auto md:mx-0">
                        2
                    </div>
<div className="mb-4 text-center md:text-left">
<h3 className="text-xl font-medium text-white mb-2">Launch Targeted Ad Campaigns</h3>
</div>
<p className="text-sm text-neutral-400 leading-relaxed text-center md:text-left">
                        We deploy and manage high-converting Facebook and Instagram ad campaigns. Our creative and copy are engineered specifically to capture real estate intent.
                    </p>
</div>

<div className="glass p-8 rounded-xl border-white/10 hover:border-blue-500/30 transition-all flex flex-col h-full relative group">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-blue-500/50 flex items-center justify-center text-blue-400 font-semibold mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)] mx-auto md:mx-0">
                        3
                    </div>
<div className="mb-4 text-center md:text-left">
<h3 className="text-xl font-medium text-white mb-2">Deliver Qualified Leads To You</h3>
</div>
<p className="text-sm text-neutral-400 leading-relaxed text-center md:text-left">
                        Real-time, exclusive leads (names, emails, phone numbers, timelines) are sent directly to your CRM or phone, ready for you to follow up and close the deal.
                    </p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex px-8 py-4 bg-white text-black rounded hover:bg-neutral-200 transition-all items-center justify-center font-medium" href="#contact">
                    Start Your Campaign
                </a>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-950/50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl text-white font-medium tracking-tight mb-12 text-center">Real Results for Real Agents</h2>
<div className="grid md:grid-cols-2 gap-6">

<div className="glass p-8 rounded-xl border border-white/5">
<div className="flex gap-1 text-blue-500 mb-6">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-neutral-300 mb-8 leading-relaxed">"AuraxGrowth transformed my pipeline. I went from relying entirely on unpredictable word-of-mouth to getting 30+ consistent, pre-qualified buyer and seller leads every single month."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-gradient-to-br from-neutral-800 to-black border border-white/10 rounded-full flex items-center justify-center text-xs text-white">SJ</div>
<div>
<div className="text-sm font-medium text-white">Sarah Jenkins</div>
<div className="text-xs text-neutral-500">Realtor, Keller Williams</div>
</div>
</div>
</div>

<div className="glass p-8 rounded-xl border border-white/5">
<div className="flex gap-1 text-blue-500 mb-6">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-neutral-300 mb-8 leading-relaxed">"Finally, an agency that actually understands the real estate market. Their local Facebook ads generated 4 new exclusive listings for my team in just the first 45 days of working together."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-gradient-to-br from-neutral-800 to-black border border-white/10 rounded-full flex items-center justify-center text-xs text-white">MR</div>
<div>
<div className="text-sm font-medium text-white">Michael Ross</div>
<div className="text-xs text-neutral-500">Managing Broker</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950 border-white/5 border-t py-24 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
<div className="flex flex-col gap-6">
<span className="text-blue-500 font-medium tracking-wider text-xs uppercase">About AuraxGrowth</span>
<h2 className="text-4xl md:text-5xl text-white font-medium tracking-tight leading-[1.1]">
                    Specialized in Real Estate. 
                    <span className="text-neutral-500">Driven by data.</span>
</h2>
</div>
<div className="space-y-8">
<p className="text-lg text-neutral-400 leading-relaxed font-light">
                    AuraxGrowth is a specialized performance marketing agency dedicated solely to the US real estate sector. We understand that selling a home isn't like selling a t-shirt online. It requires building trust, demonstrating local authority, and capturing intent at the right moment.
                </p>
<p className="text-lg text-neutral-400 leading-relaxed font-light">
                    We don’t run generic vanity campaigns. We partner with ambitious agents and brokers to build sustainable lead engines. By combining compelling creative with hyper-local ad targeting, we ensure your calendar stays booked with listing appointments and property showings.
                </p>
<div className="pt-4 border-t border-white/5 flex items-center gap-3">
<svg className="text-blue-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
<span className="text-sm text-neutral-500 font-medium">Partnering with real estate professionals who demand results.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="glass rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl relative min-h-[500px] flex flex-col justify-center">

<div className="transition-all duration-500" id="form-container">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight mb-4">Ready for more listings?</h2>
<p className="text-neutral-400">Fill out the form below to discover how we can flood your pipeline with exclusive real estate leads.</p>
</div>
<form action="https://formsubmit.co/growthaurax@gmail.com" className="space-y-6 max-w-lg mx-auto" id="lead-form" method="POST">

<input autocomplete="off" name="_honey" style={{display: 'none'}} tabindex="-1" type="text"/>

<input name="_captcha" type="hidden" value="false"/>
<input name="_subject" type="hidden" value="New Real Estate Lead Submission | AuraxGrowth"/>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-neutral-500 font-medium uppercase tracking-wide">Name</label>
<input className="w-full bg-neutral-900/80 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-neutral-700 font-light" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 font-medium uppercase tracking-wide">Business Name</label>
<input className="w-full bg-neutral-900/80 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-neutral-700 font-light" name="business" placeholder="Keller Williams Realty" required="" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 font-medium uppercase tracking-wide">Email</label>
<input className="w-full bg-neutral-900/80 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-neutral-700 font-light" name="email" placeholder="agent@brokerage.com" required="" type="email"/>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-neutral-500 font-medium uppercase tracking-wide">Website <span className="normal-case tracking-normal text-neutral-600 ml-1">(Optional)</span></label>
<input className="w-full bg-neutral-900/80 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-neutral-700 font-light" name="website" placeholder="https://" type="url"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 font-medium uppercase tracking-wide">Monthly Ad Budget</label>
<select className="w-full bg-neutral-900/80 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-light appearance-none" name="ad_spend" required="">
<option className="text-neutral-500" value="">Select Budget</option>
<option className="" value="&lt;1k">Less than $1,000</option>
<option className="" value="1k-3k">$1,000 - $3,000</option>
<option className="" value="3k-5k">$3,000 - $5,000</option>
<option className="" value="5k+">$5,000+</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 font-medium uppercase tracking-wide">Message</label>
<textarea className="w-full bg-neutral-900/80 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-neutral-700 font-light" name="message" placeholder="Tell us about your target area and lead generation goals..." required="" rows="3"></textarea>
</div>
<button className="w-full bg-blue-600 font-medium text-white rounded-lg py-4 hover:bg-blue-500 transition-all flex items-center justify-center gap-2 mt-4 shadow-[0_0_20px_rgba(37,99,235,0.3)] disabled:opacity-70 disabled:cursor-not-allowed" id="submit-btn" type="submit">
<span id="btn-text">Get Your Free Strategy Call</span>
<iconify-icon icon="solar:calendar-linear" id="btn-icon" width="18"></iconify-icon>
</button>
</form>
</div>

<div className="hidden absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-20 glass rounded-2xl animate-fade-in bg-black/80" id="success-message">
<div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold" width="40"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">Thank You</h3>
<p className="text-neutral-400 leading-relaxed text-base max-w-sm mx-auto">
                        Thank you for contacting AuraxGrowth. Our team will reach out within 24 hours.
                    </p>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-black text-sm font-light">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:buildings-bold-duotone" width="20"></iconify-icon>
<span className="text-white font-medium">AuraxGrowth</span>
</div>
<div className="flex gap-8 text-neutral-500">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
</div>
<div className="text-neutral-600 text-xs">
                    © 2023 AuraxGrowth. Dedicated to Real Estate.
                </div>
</div>
</div>
</footer>



    </>
  );
}
