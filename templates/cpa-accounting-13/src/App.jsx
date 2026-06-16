import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    (function() {
        const menuBtn = document.getElementById('mobileMenuBtn');
        const menu = document.getElementById('mobileMenu');
        const menuPanel = document.getElementById('mobileMenuPanel');
        const closeBtn = document.getElementById('mobileMenuClose');
        const overlay = document.getElementById('mobileMenuOverlay');
        const menuLinks = menu.querySelectorAll('nav a');
        
        function openMenu() {
          menu.classList.remove('hidden');
          document.body.style.overflow = 'hidden';
          // Trigger reflow for transition
          setTimeout(() => {
            menuPanel.classList.remove('translate-x-full');
            overlay.classList.remove('opacity-0');
          }, 10);
        }
        
        function closeMenu() {
          menuPanel.classList.add('translate-x-full');
          overlay.classList.add('opacity-0');
          
          // Wait for transition to finish
          setTimeout(() => {
            menu.classList.add('hidden');
            document.body.style.overflow = '';
          }, 300);
        }
        
        if(menuBtn) menuBtn.addEventListener('click', openMenu);
        if(closeBtn) closeBtn.addEventListener('click', closeMenu);
        if(overlay) overlay.addEventListener('click', closeMenu);
        
        menuLinks.forEach(link => {
          link.addEventListener('click', closeMenu);
        });
    })();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="gradient-blur">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>

<header className="fixed z-50 w-full max-w-[1600px] top-0 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md border-b border-neutral-200/50">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex pt-4 pb-4 items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="flex text-white bg-neutral-900 w-9 h-9 rounded-full items-center justify-center shadow-lg group-hover:bg-blue-600 transition-colors">
<iconify-icon height="18" icon="lucide:briefcase" width="18"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight font-geist text-neutral-900 leading-none">
          Mannucci<br/><span className="text-neutral-500 font-medium text-xs">&amp; Associates</span>
</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium font-geist text-neutral-500">
<a className="hover:text-blue-600 transition-colors" href="#services">Services</a>
<a className="hover:text-blue-600 transition-colors" href="#results">Results</a>
<a className="hover:text-blue-600 transition-colors" href="#testimonials">Reviews</a>
<a className="hover:text-blue-600 transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium font-geist text-neutral-600 hover:bg-neutral-100 transition-colors" href="tel:6263403194">
<iconify-icon height="16" icon="lucide:phone" width="16"></iconify-icon>
              (626) 340-3194
          </a>
<button className="hidden sm:inline-flex shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-full px-5 py-2.5 items-center gap-2">
<span className="relative flex items-center gap-2 font-geist z-10">
                Get Started
                <iconify-icon height="14" icon="lucide:calendar-days" width="14"></iconify-icon>
</span>
</button>

<button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-600 hover:bg-neutral-200 transition backdrop-blur-sm" id="mobileMenuBtn">
<iconify-icon height="20" icon="lucide:menu" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="mobileMenu">

<div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm transition-opacity duration-300 opacity-0" id="mobileMenuOverlay"></div>

<div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 translate-x-full flex flex-col" id="mobileMenuPanel">
<div className="flex items-center justify-between p-4 border-b border-neutral-100">
<span className="text-sm font-bold text-neutral-900 font-geist">Menu</span>
<button className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-500 hover:bg-neutral-200 transition" id="mobileMenuClose">
<iconify-icon height="20" icon="lucide:x" width="20"></iconify-icon>
</button>
</div>
<nav className="p-6 space-y-2 flex-grow font-geist">
<a className="block px-4 py-3 text-base font-medium text-neutral-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="#services">
            Services
        </a>
<a className="block px-4 py-3 text-base font-medium text-neutral-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="#results">
            Client Results
        </a>
<a className="block px-4 py-3 text-base font-medium text-neutral-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="#testimonials">
            Reviews
        </a>
<a className="block px-4 py-3 text-base font-medium text-neutral-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="#faq">
            FAQ
        </a>
<div className="pt-6 border-t border-neutral-100 mt-4 space-y-3">
<a className="flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-medium text-neutral-600 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition" href="tel:6263403194">
<iconify-icon height="18" icon="lucide:phone" width="18"></iconify-icon>
            (626) 340-3194
          </a>
<a className="flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition shadow-lg shadow-blue-500/20" href="#">
<iconify-icon height="18" icon="lucide:calendar-days" width="18"></iconify-icon>
            Schedule Consultation
          </a>
</div>
</nav>
</div>
</div>

</header>

<main className="shadow-slate-200/50 overflow-hidden min-h-screen bg-white max-w-[1600px] z-10 mr-auto ml-auto relative shadow-2xl">

<section className="grid min-h-[740px] pt-32 lg:grid-cols-12 lg:pt-0 relative overflow-hidden" id="hero">

<div className="absolute inset-0 -z-10 overflow-hidden bg-white">
<div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-400/20 blur-[100px] animate-blob mix-blend-multiply"></div>
<div className="absolute top-[-10%] right-[-20%] w-[60%] h-[60%] rounded-full bg-indigo-400/20 blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
<div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-sky-300/30 blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply"></div>
<div className="absolute inset-0 opacity-[0.35] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz4KPC9zdmc+')] mix-blend-overlay"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f61a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f61a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>
</div>

<div className="lg:col-span-7 lg:px-12 flex flex-col z-10 pt-20 px-6 pb-16 justify-center relative">
<div className="flex lg:mt-24 w-fit mb-8 items-center animate-fade-in-up">
<div className="inline-flex gap-2 text-[11px] uppercase font-semibold text-blue-700 tracking-wider font-geist bg-white/80 backdrop-blur-md border-blue-200 border rounded-full py-1.5 px-4 items-center shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
</span>
                Accepting New Clients for 2024 Tax Season
            </div>
</div>
<h1 className="leading-[0.95] lg:text-[4.5rem] text-5xl text-neutral-900 tracking-tighter mb-6 font-geist font-semibold drop-shadow-sm">
          Expert CPA &amp; <br/>
<span className="text-neutral-500/90">Business Accounting</span><br/>
          in Pasadena, CA
        </h1>
<p className="text-lg text-neutral-600 max-w-lg leading-relaxed mb-10 font-normal font-geist">
          Maximize your tax savings and streamline your bookkeeping with Mannucci &amp; Associates. Serving small business owners in Pasadena and Old Town since 2010.
        </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16">
<button className="shiny-cta w-full sm:w-auto shadow-xl shadow-blue-900/10">
<span>
                Book Your Free Tax Review 
                <iconify-icon height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</span>
</button>
<button className="w-full sm:w-auto px-8 py-4 rounded-full border border-neutral-200/80 bg-white/60 backdrop-blur-sm text-neutral-600 font-medium hover:bg-white hover:text-neutral-900 transition-all font-geist h-[58px] shadow-sm">
            Learn More
          </button>
</div>

<div className="border-t border-neutral-200/60 pt-8">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-6 font-geist">Trusted by 500+ Local Businesses</p>
<div className="flex flex-wrap gap-8 items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="text-[#2CA01C]" height="28" icon="simple-icons:quickbooks" width="28"></iconify-icon>
<iconify-icon className="text-[#13B5EA]" height="28" icon="simple-icons:xero" width="28"></iconify-icon>
<div className="flex items-center gap-1 font-bold text-xl tracking-tight text-[#FA544E]">
<span className="font-geist">gusto</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 px-6 pb-12 lg:pb-0 flex items-center justify-center lg:pr-12 relative z-20 pt-10 lg:pt-0">
<div className="glass-panel p-8 rounded-2xl w-full max-w-[440px] relative shadow-2xl shadow-blue-900/5">
<div className="mb-6">
<h3 className="text-xl font-semibold text-neutral-900 font-geist tracking-tight mb-2">Get Your Free Consultation</h3>
<p className="text-sm text-neutral-500 font-geist">Fill out the form below and our team will get back to you within 24 hours.</p>
</div>
<form action="#" className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-neutral-700 font-geist ml-1" htmlFor="first-name">First Name</label>
<input className="w-full px-3 py-2.5 rounded-lg border border-neutral-200/80 bg-white/50 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all input-transition font-geist backdrop-blur-sm" id="first-name" placeholder="John" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-neutral-700 font-geist ml-1" htmlFor="last-name">Last Name</label>
<input className="w-full px-3 py-2.5 rounded-lg border border-neutral-200/80 bg-white/50 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all input-transition font-geist backdrop-blur-sm" id="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-neutral-700 font-geist ml-1" htmlFor="email">Work Email</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3 text-neutral-400 pointer-events-none" height="14" icon="lucide:mail" width="14"></iconify-icon>
<input className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-neutral-200/80 bg-white/50 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all input-transition font-geist backdrop-blur-sm" id="email" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-neutral-700 font-geist ml-1" htmlFor="service">Service Interest</label>
<div className="relative">
<select className="w-full appearance-none pl-3 pr-8 py-2.5 rounded-lg border border-neutral-200/80 bg-white/50 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all input-transition font-geist cursor-pointer backdrop-blur-sm" id="service">
<option disabled="" selected="" value="">Select a service...</option>
<option value="tax">Tax Preparation</option>
<option value="bookkeeping">Bookkeeping</option>
<option value="payroll">Payroll Services</option>
<option value="consulting">Business Consulting</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-neutral-400 pointer-events-none" height="14" icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-neutral-700 font-geist ml-1" htmlFor="message">Message (Optional)</label>
<textarea className="w-full px-3 py-2.5 rounded-lg border border-neutral-200/80 bg-white/50 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all input-transition resize-none font-geist backdrop-blur-sm" id="message" placeholder="Tell us about your business needs..." rows="3"></textarea>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow-lg shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 group mt-2 font-geist" type="submit">
                    Get Started
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<section className="bg-white py-20 border-b border-neutral-100">
<div className="container mx-auto px-6 lg:px-12">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight mb-4 font-geist">
            Professional Accounting Services You Can Actually Understand
          </h2>
<p className="text-neutral-500 text-lg font-geist leading-relaxed">
            We simplify taxes and bookkeeping so you can focus on what you do best. No jargon, no runaround—just honest guidance and real results.
          </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
<div className="flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="lucide:briefcase" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-neutral-900 mb-2 font-geist">15+ Years Serving Local Businesses</h3>
<p className="text-sm text-neutral-500 font-geist leading-relaxed">Trusted by Pasadena's entrepreneurs and families</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="lucide:bar-chart-3" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-neutral-900 mb-2 font-geist">Clear, Upfront Pricing</h3>
<p className="text-sm text-neutral-500 font-geist leading-relaxed">No surprise fees or hidden charges</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="lucide:zap" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-neutral-900 mb-2 font-geist">Fast, Friendly Service</h3>
<p className="text-sm text-neutral-500 font-geist leading-relaxed">Same-day responses and flexible scheduling</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="lucide:target" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-neutral-900 mb-2 font-geist">Proactive Tax Strategies</h3>
<p className="text-sm text-neutral-500 font-geist leading-relaxed">We find savings before you even ask</p>
</div>
</div>
</div>
</section>

<section className="bg-[#0B1120] border-t border-slate-800 relative overflow-hidden py-24 scroll-mt-24" id="services">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="container mx-auto px-6 lg:px-12 relative z-10">
<div className="max-w-3xl mb-16">
<div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-blue-400 text-[11px] font-bold uppercase tracking-wider font-geist mb-6 shadow-sm">
                  ⚡ OUR SERVICES
              </div>
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4 font-geist">
                  Full-Service Tax Planning &amp; Bookkeeping
              </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
<div className="group bg-[#151e32] hover:border-blue-500/50 hover:shadow-[0_8px_30px_rgb(59,130,246,0.1)] transition-all duration-300 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon height="24" icon="lucide:user" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-4 font-geist">INDIVIDUAL TAX SERVICES</h3>
<p className="text-slate-400 mb-8 leading-relaxed text-sm font-geist">
                      We make personal tax filing simple and maximize your refund. From straightforward W-2s to complex investment portfolios, we handle it all with accuracy and care.
                  </p>
<ul className="space-y-3 mt-auto">
<li className="flex items-start gap-3 text-sm font-medium text-slate-300 font-geist">
<iconify-icon className="text-blue-400 mt-0.5 min-w-[16px]" height="16" icon="lucide:chevron-right" width="16"></iconify-icon>
                          Personal Tax Returns
                      </li>
<li className="flex items-start gap-3 text-sm font-medium text-slate-300 font-geist">
<iconify-icon className="text-blue-400 mt-0.5 min-w-[16px]" height="16" icon="lucide:chevron-right" width="16"></iconify-icon>
                          Itemized Deductions
                      </li>
</ul>
</div>
<div className="group bg-[#151e32] hover:border-emerald-500/50 hover:shadow-[0_8px_30px_rgb(16,185,129,0.1)] transition-all duration-300 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon height="24" icon="lucide:building-2" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-4 font-geist">BUSINESS BOOKKEEPING &amp; PAYROLL</h3>
<p className="text-slate-400 mb-8 leading-relaxed text-sm font-geist">
                      Keep your business finances organized and compliant year-round. We handle the numbers so you can focus on growing your business.
                  </p>
<ul className="space-y-3 mt-auto">
<li className="flex items-start gap-3 text-sm font-medium text-slate-300 font-geist">
<iconify-icon className="text-emerald-400 mt-0.5 min-w-[16px]" height="16" icon="lucide:chevron-right" width="16"></iconify-icon>
                          Monthly Bookkeeping
                      </li>
<li className="flex items-start gap-3 text-sm font-medium text-slate-300 font-geist">
<iconify-icon className="text-emerald-400 mt-0.5 min-w-[16px]" height="16" icon="lucide:chevron-right" width="16"></iconify-icon>
                          Payroll Processing
                      </li>
</ul>
</div>
<div className="group bg-[#151e32] hover:border-purple-500/50 hover:shadow-[0_8px_30px_rgb(168,85,247,0.1)] transition-all duration-300 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon height="24" icon="lucide:compass" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-4 font-geist">STRATEGIC TAX PLANNING</h3>
<p className="text-slate-400 mb-8 leading-relaxed text-sm font-geist">
                      Proactive planning to minimize your tax burden and protect your wealth. We develop customized strategies for major financial decisions.
                  </p>
<ul className="space-y-3 mt-auto">
<li className="flex items-start gap-3 text-sm font-medium text-slate-300 font-geist">
<iconify-icon className="text-purple-400 mt-0.5 min-w-[16px]" height="16" icon="lucide:chevron-right" width="16"></iconify-icon>
                          Business Structure Optimization
                      </li>
<li className="flex items-start gap-3 text-sm font-medium text-slate-300 font-geist">
<iconify-icon className="text-purple-400 mt-0.5 min-w-[16px]" height="16" icon="lucide:chevron-right" width="16"></iconify-icon>
                          Real Estate Investment Planning
                      </li>
</ul>
</div>
<div className="group bg-[#151e32] hover:border-orange-500/50 hover:shadow-[0_8px_30px_rgb(249,115,22,0.1)] transition-all duration-300 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 border border-orange-500/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon height="24" icon="lucide:sparkles" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-4 font-geist">SPECIALIZED SERVICES</h3>
<p className="text-slate-400 mb-8 leading-relaxed text-sm font-geist">
                      Expert support when you're facing complex tax challenges or unique situations. We navigate the complicated stuff so you don't have to.
                  </p>
<ul className="space-y-3 mt-auto">
<li className="flex items-start gap-3 text-sm font-medium text-slate-300 font-geist">
<iconify-icon className="text-orange-400 mt-0.5 min-w-[16px]" height="16" icon="lucide:chevron-right" width="16"></iconify-icon>
                          IRS Audit Representation
                      </li>
<li className="flex items-start gap-3 text-sm font-medium text-slate-300 font-geist">
<iconify-icon className="text-orange-400 mt-0.5 min-w-[16px]" height="16" icon="lucide:chevron-right" width="16"></iconify-icon>
                          Tax Resolution &amp; Back Taxes
                      </li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 border-b border-neutral-100 relative scroll-mt-24" id="results">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
<div className="container mx-auto px-6 lg:px-12 relative z-10">
<div className="max-w-3xl mx-auto text-center mb-16">
<div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-blue-700 text-xs font-semibold uppercase tracking-wider font-geist mb-6">
<iconify-icon height="12" icon="lucide:briefcase" width="12"></iconify-icon> Client Success Stories
                </div>
<h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight font-geist mb-4">
                    Real Results. Real Businesses. <span className="text-blue-600">Real Savings.</span>
</h2>
<p className="text-neutral-500 text-lg font-geist leading-relaxed">
                    See how we've helped local businesses and individuals achieve their financial goals.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
<div className="group relative bg-white rounded-2xl p-8 border border-neutral-200 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col h-full">
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
<iconify-icon height="24" icon="lucide:trending-down" width="24"></iconify-icon>
</div>
<span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold font-geist tracking-wide">SAVED $47K</span>
</div>
<h3 className="text-xl font-bold text-neutral-900 mb-6 font-geist tracking-tight">$47,000 in Tax Savings</h3>
<p className="text-neutral-600 text-sm font-geist">A local real estate investor saved $47k in year one through proper restructuring and cost segregation.</p>
</div>
<div className="group relative bg-white rounded-2xl p-8 border border-neutral-200 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 flex flex-col h-full">
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
<iconify-icon height="24" icon="lucide:hard-hat" width="24"></iconify-icon>
</div>
<span className="px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold font-geist tracking-wide">RECOVERED $23K</span>
</div>
<h3 className="text-xl font-bold text-neutral-900 mb-6 font-geist tracking-tight">Construction Turnaround</h3>
<p className="text-neutral-600 text-sm font-geist">Recovered $23,000 in overlooked deductions for a growing contractor with messy books.</p>
</div>
<div className="group relative bg-white rounded-2xl p-8 border border-neutral-200 hover:border-red-300 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 flex flex-col h-full">
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
<iconify-icon height="24" icon="lucide:shield-alert" width="24"></iconify-icon>
</div>
<span className="px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold font-geist tracking-wide">SAVED $70K</span>
</div>
<h3 className="text-xl font-bold text-neutral-900 mb-6 font-geist tracking-tight">IRS Audit Resolution</h3>
<p className="text-neutral-600 text-sm font-geist">Reduced an IRS liability from $80,000+ to just $8,500 through expert representation.</p>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 py-24 relative overflow-hidden scroll-mt-24" id="testimonials">
<div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none"></div>
<div className="container mx-auto px-6 lg:px-12 relative z-10">
<div className="flex flex-col items-center text-center mb-16">
<div className="inline-flex items-center gap-2 bg-white border border-neutral-200 rounded-full px-4 py-1.5 shadow-sm mb-6 animate-fade-in">
<iconify-icon height="16" icon="logos:google-icon" width="16"></iconify-icon>
<div className="flex gap-0.5 text-yellow-500">
<iconify-icon className="fill-current" height="12" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon className="fill-current" height="12" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon className="fill-current" height="12" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon className="fill-current" height="12" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon className="fill-current" height="12" icon="lucide:star" width="12"></iconify-icon>
</div>
<span className="text-xs font-semibold text-neutral-900 font-geist">5.0 Star Rating</span>
</div>
<h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight font-geist mb-4">
                    Trusted by Pasadena Businesses
                </h2>
<p className="text-neutral-500 max-w-xl text-lg font-geist leading-relaxed">
                    Don't just take our word for it. See what our clients have to say about their experience with Mannucci &amp; Associates.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex text-yellow-500 gap-0.5 mb-4">
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-neutral-700 text-sm leading-relaxed font-geist mb-6 relative">
                            "Mannucci &amp; Associates saved my business thousands in missed deductions. Their team is responsive, professional, and truly cares."
                        </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-neutral-100">
<div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs">JS</div>
<div>
<p className="text-xs font-bold text-neutral-900 font-geist">Jennifer Stevens</p>
<p className="text-[10px] uppercase tracking-wide text-neutral-500 font-geist">Owner, Pasadena Florals</p>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex text-yellow-500 gap-0.5 mb-4">
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-neutral-700 text-sm leading-relaxed font-geist mb-6">
                            "Finally an accountant that speaks plain English. They cleaned up our books from a previous mess and set us up on Xero perfectly."
                        </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-neutral-100">
<div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold text-xs">MD</div>
<div>
<p className="text-xs font-bold text-neutral-900 font-geist">Michael Davis</p>
<p className="text-[10px] uppercase tracking-wide text-neutral-500 font-geist">CEO, TechStart Inc.</p>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="flex text-yellow-500 gap-0.5 mb-4">
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-neutral-700 text-sm leading-relaxed font-geist mb-6">
                            "Robert has handled our personal and business taxes for 5 years. The peace of mind knowing everything is filed correctly is invaluable."
                        </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-neutral-100">
<div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xs">EL</div>
<div>
<p className="text-xs font-bold text-neutral-900 font-geist">Elena Lopez</p>
<p className="text-[10px] uppercase tracking-wide text-neutral-500 font-geist">Real Estate Agent</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 bg-blue-600 overflow-hidden scroll-mt-24" id="contact">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
<div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
<h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-geist tracking-tight">Ready to Secure Your Financial Future?</h2>
<p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto font-geist">
            Schedule a free 15-minute consultation to discuss your tax situation and business goals with a certified expert.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg shadow-xl hover:bg-neutral-100 transition-colors flex items-center gap-2 font-geist" href="tel:6263403194">
<iconify-icon height="18" icon="lucide:phone" width="18"></iconify-icon> Call (626) 340-3194
            </a>
<button className="bg-blue-700 text-white border border-blue-500 font-semibold py-4 px-8 rounded-lg hover:bg-blue-800 transition-colors font-geist">
                Book Consultation Online
            </button>
</div>
</div>
</section>

<section className="bg-white py-24 border-t border-neutral-100 scroll-mt-24" id="faq">
<div className="container mx-auto px-6 lg:px-12">
<div className="max-w-2xl mx-auto text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight font-geist mb-4">
                  Frequently Asked Questions
              </h2>
<p className="text-neutral-500 text-lg font-geist leading-relaxed">
                  Clear answers to common questions about our accounting, tax, and bookkeeping services.
              </p>
</div>
<div className="max-w-3xl mx-auto border-t border-neutral-100">
<details className="group border-b border-neutral-100">
<summary className="flex cursor-pointer items-center justify-between py-6 text-neutral-900 transition-colors hover:text-blue-600">
<span className="font-medium text-lg font-geist">What specific services do you offer?</span>
<span className="transition-transform duration-300 group-open:-rotate-180 text-neutral-400">
<iconify-icon height="20" icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="pb-6 text-neutral-500 font-geist leading-relaxed text-sm">
                      We provide a comprehensive range of services including individual and business tax preparation (LLCs, S-Corps, C-Corps), monthly bookkeeping, payroll processing, sales tax filing, and strategic financial consulting/CFO services.
                  </div>
</details>
<details className="group border-b border-neutral-100">
<summary className="flex cursor-pointer items-center justify-between py-6 text-neutral-900 transition-colors hover:text-blue-600">
<span className="font-medium text-lg font-geist">Do you work with clients outside of Pasadena?</span>
<span className="transition-transform duration-300 group-open:-rotate-180 text-neutral-400">
<iconify-icon height="20" icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="pb-6 text-neutral-500 font-geist leading-relaxed text-sm">
                      Yes! While our office is in Pasadena, we serve clients throughout California and the United States. We utilize secure client portals and video conferencing to work seamlessly with remote clients.
                  </div>
</details>
<details className="group border-b border-neutral-100">
<summary className="flex cursor-pointer items-center justify-between py-6 text-neutral-900 transition-colors hover:text-blue-600">
<span className="font-medium text-lg font-geist">How much do your services cost?</span>
<span className="transition-transform duration-300 group-open:-rotate-180 text-neutral-400">
<iconify-icon height="20" icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="pb-6 text-neutral-500 font-geist leading-relaxed text-sm">
                      Our pricing is tailored to the complexity of your needs. Simple tax returns start at competitive rates, while monthly bookkeeping packages are customized based on transaction volume. We offer transparent, flat-fee pricing for ongoing services.
                  </div>
</details>
</div>
</div>
</section>

<footer className="bg-neutral-950 text-neutral-400 py-16 border-t border-neutral-900">
<div className="container mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div className="space-y-4">
<div className="flex items-center gap-2 text-white mb-2">
<iconify-icon height="20" icon="lucide:briefcase" width="20"></iconify-icon>
<span className="font-bold text-lg font-geist">Mannucci &amp; Associates</span>
</div>
<p className="text-sm leading-relaxed font-geist">
                      Providing professional accounting, tax, and payroll services to Pasadena and surrounding areas since 2010.
                  </p>
</div>
<div className="space-y-4">
<h4 className="text-white font-semibold text-sm uppercase tracking-widest font-geist">Contact</h4>
<ul className="space-y-3 text-sm font-geist">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-neutral-600" icon="lucide:map-pin"></iconify-icon>
<span>123 Main Street, Suite 100Pasadena, CA 91105</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-600" icon="lucide:phone"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:6263403194">(626) 340-3194</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-600" icon="lucide:mail"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:info@mannucci.com">info@mannucci.com</a>
</li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-white font-semibold text-sm uppercase tracking-widest font-geist">Business Hours</h4>
<ul className="space-y-2 text-sm font-geist">
<li className="flex justify-between"><span>Monday - Friday</span> <span className="text-white">9:00 AM - 5:00 PM</span></li>
<li className="flex justify-between"><span>Saturday</span> <span>By Appointment</span></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-white font-semibold text-sm uppercase tracking-widest font-geist">Affiliations</h4>
<div className="flex flex-wrap gap-4 grayscale opacity-50">
<span className="border border-neutral-700 px-2 py-1 rounded text-xs">AICPA Member</span>
<span className="border border-neutral-700 px-2 py-1 rounded text-xs">CalCPA</span>
</div>
</div>
</div>
<div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-geist">
<p>© 2024 Mannucci &amp; Associates. All rights reserved.</p>
</div>
</div>
</footer>
</main>

    </>
  );
}
