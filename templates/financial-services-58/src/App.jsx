import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Modal Functionality
        function toggleModal() {
            const modal = document.getElementById('leadModal');
            if (modal.classList.contains('hidden')) {
                // Open
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            } else {
                // Close
                modal.classList.add('hidden');
                document.body.style.overflow = ''; // Restore scrolling
            }
        }

        // Tab Functionality
        function switchTab(tabName) {
            // Reset all tabs styles
            document.querySelectorAll('.service-tab').forEach(tab => {
                tab.classList.remove('bg-[#0B1628]', 'text-[#C9A44E]', 'shadow-lg');
                tab.classList.add('bg-white', 'text-[#8B95A5]', 'hover:bg-gray-100');
            });

            // Activate current tab
            const activeTab = document.getElementById('tab-' + tabName);
            activeTab.classList.remove('bg-white', 'text-[#8B95A5]', 'hover:bg-gray-100');
            activeTab.classList.add('bg-[#0B1628]', 'text-[#C9A44E]', 'shadow-lg');

            // Hide all content grids
            document.querySelectorAll('.service-grid').forEach(grid => {
                grid.classList.add('hidden');
                grid.classList.remove('grid');
            });

            // Show current content grid
            const activeContent = document.getElementById('content-' + tabName);
            activeContent.classList.remove('hidden');
            activeContent.classList.add('grid');
            
            // Re-trigger animation
            activeContent.classList.remove('is-visible');
            setTimeout(() => activeContent.classList.add('is-visible'), 10);
        }

        // Intersection Observer for Fade-in Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-section').forEach(section => {
            observer.observe(section);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="modal hidden fixed inset-0 z-[100] flex items-center justify-center p-4" id="leadModal">

<div className="absolute inset-0 bg-[#0B1628]/80 backdrop-blur-sm" onclick="toggleModal()"></div>

<div className="modal-content relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

<div className="bg-[#0B1628] p-6 flex justify-between items-center shrink-0">
<div>
<h3 className="text-white font-heading text-xl font-medium tracking-wide">Free Consultation</h3>
<p className="text-[#8B95A5] text-xs mt-1">Let's build your financial roadmap.</p>
</div>
<button className="text-[#8B95A5] hover:text-white transition-colors" onclick="toggleModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="p-6 md:p-8 overflow-y-auto">
<form className="space-y-5">
<div className="grid md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase tracking-wider text-[#555]">First Name</label>
<input className="w-full bg-[#FAF6F0] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A44E] focus:bg-white transition-all placeholder:text-gray-400" placeholder="John" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase tracking-wider text-[#555]">Last Name</label>
<input className="w-full bg-[#FAF6F0] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A44E] focus:bg-white transition-all placeholder:text-gray-400" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase tracking-wider text-[#555]">Email Address</label>
<input className="w-full bg-[#FAF6F0] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A44E] focus:bg-white transition-all placeholder:text-gray-400" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase tracking-wider text-[#555]">Phone Number</label>
<input className="w-full bg-[#FAF6F0] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A44E] focus:bg-white transition-all placeholder:text-gray-400" placeholder="(555) 000-0000" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase tracking-wider text-[#555]">Interest</label>
<div className="relative">
<select className="w-full bg-[#FAF6F0] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A44E] focus:bg-white transition-all appearance-none text-[#1A1A2E]">
<option>General Financial Review</option>
<option>Life Insurance / Protection</option>
<option>Retirement Planning</option>
<option>Business Solutions</option>
<option>Join the Team</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="pt-2">
<button className="w-full gold-gradient-bg text-[#0B1628] font-semibold py-4 rounded-lg hover:shadow-lg hover:shadow-[#C9A44E]/20 transition-all duration-300 flex items-center justify-center gap-2 group" type="button">
                            Submit Request
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-center text-[10px] text-gray-400 mt-3">By submitting, you agree to our privacy policy and terms.</p>
</div>
</form>
</div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 rounded gold-gradient-bg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
<span className="font-heading font-semibold text-[#0B1628] text-xl tracking-tighter">PL</span>
</div>
<span className="text-white font-heading font-medium text-lg tracking-tight hidden sm:block">Promised Land</span>
</a>

<div className="hidden md:flex items-center gap-8 text-[#8B95A5] text-sm font-medium">
<a className="hover:text-white transition-colors duration-300" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-300" href="#about">About</a>
<a className="hover:text-white transition-colors duration-300" href="#team">Team</a>
<a className="hover:text-white transition-colors duration-300" href="#why-us">Why Us</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 border border-white/20 text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300" href="https://registration.wfglaunch.com/" target="_blank">
                    Join the Movement
                </a>

<button className="hidden md:flex items-center gap-2 gold-gradient-bg text-[#0B1628] px-5 py-2.5 rounded text-sm font-semibold hover:shadow-lg hover:shadow-[#C9A44E]/20 transition-all duration-300 transform hover:-translate-y-0.5" onclick="toggleModal()">
                    Free Consultation
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>

<button className="md:hidden text-white text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center bg-[#0B1628] text-white overflow-hidden pt-20">

<div className="absolute inset-0 hero-glow z-0"></div>
<div className="absolute inset-0 grid-overlay z-0"></div>
<div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-[#C9A44E] opacity-10 z-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center w-full">
<div className="lg:col-span-8 lg:col-start-2 fade-in-section">

<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-[#C9A44E]" icon="solar:star-linear"></iconify-icon>
<span className="text-[#C9A44E] text-xs font-semibold uppercase tracking-[0.2em]">Plano, Texas — Trusted Since Day One</span>
</div>

<h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight mb-6">
                    Your Financial Future <br/>
<span className="gold-gradient-text italic pr-2">Deserves More</span> Than a Template.
                </h1>

<p className="text-[#8B95A5] text-lg leading-relaxed max-w-2xl mb-10 font-light">
                    We partner with families and businesses across Texas to build lasting wealth through personalized insurance, retirement planning, and estate strategies — backed by the nation's top carriers.
                </p>

<div className="flex flex-col sm:flex-row gap-4 mb-16">

<button className="flex items-center justify-center gap-2 gold-gradient-bg text-[#0B1628] px-8 py-4 rounded text-base font-semibold hover:shadow-xl hover:shadow-[#C9A44E]/20 transition-all duration-300 transform hover:-translate-y-1" onclick="toggleModal()">
                        Free Consultation
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<a className="flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded text-base font-medium hover:bg-white/5 transition-all duration-300" href="#services">
                        Explore Services
                    </a>
</div>

<div className="border-t border-white/10 pt-8 flex flex-wrap gap-y-6 gap-x-12">
<div>
<div className="text-[#C9A44E] font-heading text-2xl font-medium">25+</div>
<div className="text-[#8B95A5] text-xs uppercase tracking-wider mt-1">Licensed Professionals</div>
</div>
<div>
<div className="text-[#C9A44E] font-heading text-2xl font-medium">15+</div>
<div className="text-[#8B95A5] text-xs uppercase tracking-wider mt-1">Financial Services</div>
</div>
<div>
<div className="text-[#C9A44E] font-heading text-2xl font-medium">10+</div>
<div className="text-[#8B95A5] text-xs uppercase tracking-wider mt-1">Top-Rated Carriers</div>
</div>
<div>
<div className="text-[#C9A44E] font-heading text-2xl font-medium">100%</div>
<div className="text-[#8B95A5] text-xs uppercase tracking-wider mt-1">Client-Focused Approach</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-12 bg-[#FFFDF8] border-b border-[#1A1A2E]/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-[#8B95A5] text-xs font-semibold uppercase tracking-[0.15em] mb-8">Backed by the Nation's Most Trusted Carriers</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-6 items-center opacity-100">
<span className="font-heading text-xl text-[#132744]/45 hover:text-[#132744]/90 transition-colors duration-300 cursor-default">Pacific Life</span>
<span className="font-heading text-xl text-[#132744]/45 hover:text-[#132744]/90 transition-colors duration-300 cursor-default">John Hancock</span>
<span className="font-heading text-xl text-[#132744]/45 hover:text-[#132744]/90 transition-colors duration-300 cursor-default">Prudential</span>
<span className="font-heading text-xl text-[#132744]/45 hover:text-[#132744]/90 transition-colors duration-300 cursor-default">Transamerica</span>
<span className="font-heading text-xl text-[#132744]/45 hover:text-[#132744]/90 transition-colors duration-300 cursor-default">Aegon</span>
<span className="font-heading text-xl text-[#132744]/45 hover:text-[#132744]/90 transition-colors duration-300 cursor-default">National Life Group</span>
<span className="font-heading text-xl text-[#132744]/45 hover:text-[#132744]/90 transition-colors duration-300 cursor-default">North American</span>
<span className="font-heading text-xl text-[#132744]/45 hover:text-[#132744]/90 transition-colors duration-300 cursor-default">Jackson National</span>
</div>
</div>
</section>

<section className="py-24 bg-[#FAF6F0]" id="services">
<div className="max-w-7xl mx-auto px-6">

<div className="max-w-3xl mb-16 fade-in-section">
<span className="text-[#C9A44E] text-xs font-semibold uppercase tracking-[0.15em] block mb-4">Our Services</span>
<h2 className="font-heading text-4xl md:text-5xl text-[#0B1628] font-medium leading-tight tracking-tight mb-6">Every Stage of Your Financial Life, Covered.</h2>
<p className="text-[#555] text-lg leading-relaxed font-light">From protecting your family today to building generational wealth tomorrow — we partner with you across 15+ financial services.</p>
</div>

<div className="flex flex-wrap gap-4 mb-12 fade-in-section" id="service-tabs">
<button className="service-tab active px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 bg-[#0B1628] text-[#C9A44E] shadow-lg" id="tab-protection" onclick="switchTab('protection')">🛡️ Protection</button>
<button className="service-tab px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 bg-white text-[#8B95A5] hover:bg-gray-100" id="tab-wealth" onclick="switchTab('wealth')">📈 Wealth</button>
<button className="service-tab px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 bg-white text-[#8B95A5] hover:bg-gray-100" id="tab-business" onclick="switchTab('business')">🏢 Business</button>
<button className="service-tab px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 bg-white text-[#8B95A5] hover:bg-gray-100" id="tab-coverage" onclick="switchTab('coverage')">🏠 Coverage</button>
</div>

<div className="min-h-[400px]" id="services-content">

<div className="service-grid grid md:grid-cols-2 gap-6 fade-in-section" id="content-protection">

<div className="bg-white p-8 rounded-2xl border border-transparent hover:border-[#C9A44E]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#FFFDF8] rounded-xl flex items-center justify-center mb-6 text-[#C9A44E] text-2xl group-hover:bg-[#C9A44E]/10 transition-colors">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="font-heading text-2xl text-[#0B1628] mb-3 group-hover:text-[#C9A44E] transition-colors">Term with Living Benefits</h3>
<p className="text-[#8B95A5] leading-relaxed mb-6 font-light">Coverage that protects your family AND gives you access to benefits during your lifetime — for critical illness, chronic conditions, and more.</p>
<a className="text-[#C9A44E] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="bg-white p-8 rounded-2xl border border-transparent hover:border-[#C9A44E]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#FFFDF8] rounded-xl flex items-center justify-center mb-6 text-[#C9A44E] text-2xl group-hover:bg-[#C9A44E]/10 transition-colors">
<iconify-icon icon="solar:refresh-circle-linear"></iconify-icon>
</div>
<h3 className="font-heading text-2xl text-[#0B1628] mb-3 group-hover:text-[#C9A44E] transition-colors">Return of Premium</h3>
<p className="text-[#8B95A5] leading-relaxed mb-6 font-light">The best of both worlds: full protection today, and every premium dollar returned if you never file a claim.</p>
<a className="text-[#C9A44E] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="bg-white p-8 rounded-2xl border border-transparent hover:border-[#C9A44E]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#FFFDF8] rounded-xl flex items-center justify-center mb-6 text-[#C9A44E] text-2xl group-hover:bg-[#C9A44E]/10 transition-colors">
<iconify-icon icon="solar:heart-angle-linear"></iconify-icon>
</div>
<h3 className="font-heading text-2xl text-[#0B1628] mb-3 group-hover:text-[#C9A44E] transition-colors">Final Expense</h3>
<p className="text-[#8B95A5] leading-relaxed mb-6 font-light">No-exam coverage that ensures your loved ones aren't burdened with end-of-life costs.</p>
<a className="text-[#C9A44E] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="bg-white p-8 rounded-2xl border border-transparent hover:border-[#C9A44E]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#FFFDF8] rounded-xl flex items-center justify-center mb-6 text-[#C9A44E] text-2xl group-hover:bg-[#C9A44E]/10 transition-colors">
<iconify-icon icon="solar:wheelchair-linear"></iconify-icon>
</div>
<h3 className="font-heading text-2xl text-[#0B1628] mb-3 group-hover:text-[#C9A44E] transition-colors">Long Term Care</h3>
<p className="text-[#8B95A5] leading-relaxed mb-6 font-light">Shield your assets from the #1 retirement risk — the average long-term care stay costs $100,000+ per year.</p>
<a className="text-[#C9A44E] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="service-grid hidden grid md:grid-cols-2 gap-6 fade-in-section" id="content-wealth">
<div className="bg-white p-8 rounded-2xl border border-transparent hover:border-[#C9A44E]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#FFFDF8] rounded-xl flex items-center justify-center mb-6 text-[#C9A44E] text-2xl group-hover:bg-[#C9A44E]/10 transition-colors"><iconify-icon icon="solar:graph-up-linear"></iconify-icon></div>
<h3 className="font-heading text-2xl text-[#0B1628] mb-3 group-hover:text-[#C9A44E]">Tax-Free Retirement</h3>
<p className="text-[#8B95A5] leading-relaxed mb-6 font-light">Build a retirement income stream that's completely tax-free — using strategies most financial advisors don't discuss.</p>
<a className="text-[#C9A44E] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="bg-white p-8 rounded-2xl border border-transparent hover:border-[#C9A44E]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#FFFDF8] rounded-xl flex items-center justify-center mb-6 text-[#C9A44E] text-2xl group-hover:bg-[#C9A44E]/10 transition-colors"><iconify-icon icon="solar:safe-circle-linear"></iconify-icon></div>
<h3 className="font-heading text-2xl text-[#0B1628] mb-3 group-hover:text-[#C9A44E]">Personal Pension Plan</h3>
<p className="text-[#8B95A5] leading-relaxed mb-6 font-light">Create your own guaranteed pension with predictable lifetime income — something fewer than 15% of private workers have today.</p>
<a className="text-[#C9A44E] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="bg-white p-8 rounded-2xl border border-transparent hover:border-[#C9A44E]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#FFFDF8] rounded-xl flex items-center justify-center mb-6 text-[#C9A44E] text-2xl group-hover:bg-[#C9A44E]/10 transition-colors"><iconify-icon icon="solar:mortarboard-linear"></iconify-icon></div>
<h3 className="font-heading text-2xl text-[#0B1628] mb-3 group-hover:text-[#C9A44E]">College Savings Fund</h3>
<p className="text-[#8B95A5] leading-relaxed mb-6 font-light">Start building your child's education fund now — with compound growth working in your favor, every year matters.</p>
<a className="text-[#C9A44E] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="bg-white p-8 rounded-2xl border border-transparent hover:border-[#C9A44E]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#FFFDF8] rounded-xl flex items-center justify-center mb-6 text-[#C9A44E] text-2xl group-hover:bg-[#C9A44E]/10 transition-colors"><iconify-icon icon="solar:document-text-linear"></iconify-icon></div>
<h3 className="font-heading text-2xl text-[#0B1628] mb-3 group-hover:text-[#C9A44E]">Estate Planning</h3>
<p className="text-[#8B95A5] leading-relaxed mb-6 font-light">Wills, trusts, and beneficiary strategies that ensure your wealth transfers exactly as you intend — without probate delays.</p>
<a className="text-[#C9A44E] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="service-grid hidden grid md:grid-cols-2 gap-6 fade-in-section" id="content-business">
<div className="bg-white p-8 rounded-2xl border border-transparent hover:border-[#C9A44E]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#FFFDF8] rounded-xl flex items-center justify-center mb-6 text-[#C9A44E] text-2xl group-hover:bg-[#C9A44E]/10 transition-colors"><iconify-icon icon="solar:case-minimalistic-linear"></iconify-icon></div>
<h3 className="font-heading text-2xl text-[#0B1628] mb-3 group-hover:text-[#C9A44E]">Keyman &amp; S.O.L.A.R. Plan</h3>
<p className="text-[#8B95A5] leading-relaxed mb-6 font-light">Protect your business from the loss of key employees and reward top talent with executive-level benefit packages.</p>
<a className="text-[#C9A44E] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="bg-white p-8 rounded-2xl border border-transparent hover:border-[#C9A44E]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#FFFDF8] rounded-xl flex items-center justify-center mb-6 text-[#C9A44E] text-2xl group-hover:bg-[#C9A44E]/10 transition-colors"><iconify-icon icon="solar:chart-square-linear"></iconify-icon></div>
<h3 className="font-heading text-2xl text-[#0B1628] mb-3 group-hover:text-[#C9A44E]">Agency CashFlow</h3>
<p className="text-[#8B95A5] leading-relaxed mb-6 font-light">Strategic financial structures to build a predictable, scalable revenue engine for your growing agency.</p>
<a className="text-[#C9A44E] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="bg-white p-8 rounded-2xl border border-transparent hover:border-[#C9A44E]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#FFFDF8] rounded-xl flex items-center justify-center mb-6 text-[#C9A44E] text-2xl group-hover:bg-[#C9A44E]/10 transition-colors"><iconify-icon icon="solar:hand-money-linear"></iconify-icon></div>
<h3 className="font-heading text-2xl text-[#0B1628] mb-3 group-hover:text-[#C9A44E]">Debt &amp; Tax Relief</h3>
<p className="text-[#8B95A5] leading-relaxed mb-6 font-light">Restructure existing debt and optimize your tax position — every dollar saved goes back into your business.</p>
<a className="text-[#C9A44E] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="bg-white p-8 rounded-2xl border border-transparent hover:border-[#C9A44E]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#FFFDF8] rounded-xl flex items-center justify-center mb-6 text-[#C9A44E] text-2xl group-hover:bg-[#C9A44E]/10 transition-colors"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon></div>
<h3 className="font-heading text-2xl text-[#0B1628] mb-3 group-hover:text-[#C9A44E]">Health Cost Sharing</h3>
<p className="text-[#8B95A5] leading-relaxed mb-6 font-light">A community-based alternative to traditional insurance that can reduce healthcare costs by 30-50% for your team.</p>
<a className="text-[#C9A44E] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="service-grid hidden grid md:grid-cols-2 gap-6 fade-in-section" id="content-coverage">
<div className="bg-white p-8 rounded-2xl border border-transparent hover:border-[#C9A44E]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#FFFDF8] rounded-xl flex items-center justify-center mb-6 text-[#C9A44E] text-2xl group-hover:bg-[#C9A44E]/10 transition-colors"><iconify-icon icon="solar:home-2-linear"></iconify-icon></div>
<h3 className="font-heading text-2xl text-[#0B1628] mb-3 group-hover:text-[#C9A44E]">Home Insurance</h3>
<p className="text-[#8B95A5] leading-relaxed mb-6 font-light">Protect your biggest asset with comprehensive homeowner's coverage tailored to Texas properties.</p>
<a className="text-[#C9A44E] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="bg-white p-8 rounded-2xl border border-transparent hover:border-[#C9A44E]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#FFFDF8] rounded-xl flex items-center justify-center mb-6 text-[#C9A44E] text-2xl group-hover:bg-[#C9A44E]/10 transition-colors"><iconify-icon icon="solar:bus-linear"></iconify-icon></div>
<h3 className="font-heading text-2xl text-[#0B1628] mb-3 group-hover:text-[#C9A44E]">Auto Insurance</h3>
<p className="text-[#8B95A5] leading-relaxed mb-6 font-light">Competitive rates and reliable coverage from top-rated carriers — no gaps, no surprises.</p>
<a className="text-[#C9A44E] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="bg-white p-8 rounded-2xl border border-transparent hover:border-[#C9A44E]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#FFFDF8] rounded-xl flex items-center justify-center mb-6 text-[#C9A44E] text-2xl group-hover:bg-[#C9A44E]/10 transition-colors"><iconify-icon icon="solar:paw-linear"></iconify-icon></div>
<h3 className="font-heading text-2xl text-[#0B1628] mb-3 group-hover:text-[#C9A44E]">Pet Insurance</h3>
<p className="text-[#8B95A5] leading-relaxed mb-6 font-light">Because your four-legged family members deserve protection too — coverage for accidents, illness, and wellness.</p>
<a className="text-[#C9A44E] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="bg-white p-8 rounded-2xl border border-transparent hover:border-[#C9A44E]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#FFFDF8] rounded-xl flex items-center justify-center mb-6 text-[#C9A44E] text-2xl group-hover:bg-[#C9A44E]/10 transition-colors"><iconify-icon icon="solar:umbrella-linear"></iconify-icon></div>
<h3 className="font-heading text-2xl text-[#0B1628] mb-3 group-hover:text-[#C9A44E]">Umbrella Coverage</h3>
<p className="text-[#8B95A5] leading-relaxed mb-6 font-light">An extra layer of liability protection that kicks in when your other policies max out — essential for high-net-worth families.</p>
<a className="text-[#C9A44E] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B1628] text-white" id="why-us">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16 fade-in-section">
<span className="text-[#C9A44E] text-xs font-semibold uppercase tracking-[0.15em] block mb-4">The Promised Land Difference</span>
<h2 className="font-heading text-4xl md:text-5xl font-medium leading-tight tracking-tight">Why 500+ Texas Families Trust Us With Their Financial Future.</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in-section">

<div className="bg-[#132744] p-8 rounded-2xl hover:bg-[#1A3152] transition-colors duration-300">
<div className="text-3xl mb-4">⚡</div>
<h3 className="font-heading text-xl font-medium mb-3">Independent, Not Captive</h3>
<p className="text-[#8B95A5] text-sm leading-relaxed">We're not tied to one carrier. We shop 10+ top-rated companies to find YOU the best fit — not the best commission.</p>
</div>

<div className="bg-[#132744] p-8 rounded-2xl hover:bg-[#1A3152] transition-colors duration-300">
<div className="text-3xl mb-4">🎯</div>
<h3 className="font-heading text-xl font-medium mb-3">Holistic Strategy</h3>
<p className="text-[#8B95A5] text-sm leading-relaxed">Insurance is just one piece. We look at your full financial picture — retirement, estate, tax, and protection — in one conversation.</p>
</div>

<div className="bg-[#132744] p-8 rounded-2xl hover:bg-[#1A3152] transition-colors duration-300">
<div className="text-3xl mb-4">🤝</div>
<h3 className="font-heading text-xl font-medium mb-3">25+ Licensed Pros</h3>
<p className="text-[#8B95A5] text-sm leading-relaxed">Our team brings diverse expertise across every financial discipline, so you always have the right specialist in your corner.</p>
</div>

<div className="bg-[#132744] p-8 rounded-2xl hover:bg-[#1A3152] transition-colors duration-300">
<div className="text-3xl mb-4">📊</div>
<h3 className="font-heading text-xl font-medium mb-3">Transparent &amp; Personal</h3>
<p className="text-[#8B95A5] text-sm leading-relaxed">No jargon, no pressure, no one-size-fits-all. We explain every option in plain English and build your plan around YOUR goals.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAF6F0]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-in-section">
<span className="text-[#C9A44E] text-xs font-semibold uppercase tracking-[0.15em] block mb-4">Client Stories</span>
<h2 className="font-heading text-4xl md:text-5xl text-[#0B1628] font-medium leading-tight tracking-tight">Real People. Real Protection. Real Results.</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 fade-in-section">

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
<div className="text-[#C9A44E] text-4xl font-heading mb-4">"</div>
<div className="flex gap-1 mb-4 text-[#C9A44E] text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-[#555] italic leading-relaxed mb-6 text-sm">"Promised Land helped me set up keyman insurance and a retirement plan that actually makes sense. For the first time, I feel like my business AND my family are protected."</p>
<div className="h-px w-full bg-gray-100 mb-4"></div>
<div className="text-[#0B1628] font-bold text-sm">Michael T.</div>
<div className="text-[#8B95A5] text-xs">Small Business Owner, Dallas</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
<div className="text-[#C9A44E] text-4xl font-heading mb-4">"</div>
<div className="flex gap-1 mb-4 text-[#C9A44E] text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-[#555] italic leading-relaxed mb-6 text-sm">"I had no idea what a living benefits policy was until Emmanuel explained it to me. Now I have coverage that works for me while I'm alive — not just after I'm gone."</p>
<div className="h-px w-full bg-gray-100 mb-4"></div>
<div className="text-[#0B1628] font-bold text-sm">Sandra O.</div>
<div className="text-[#8B95A5] text-xs">Mother of Three, Plano</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
<div className="text-[#C9A44E] text-4xl font-heading mb-4">"</div>
<div className="flex gap-1 mb-4 text-[#C9A44E] text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-[#555] italic leading-relaxed mb-6 text-sm">"We were overwhelmed trying to figure out insurance, estate planning, and savings all at once. The team simplified everything and gave us a clear roadmap."</p>
<div className="h-px w-full bg-gray-100 mb-4"></div>
<div className="text-[#0B1628] font-bold text-sm">David &amp; Grace A.</div>
<div className="text-[#8B95A5] text-xs">Newlyweds, Frisco</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FFFDF8]" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 fade-in-section">
<div>
<span className="text-[#C9A44E] text-xs font-semibold uppercase tracking-[0.15em] block mb-4">Leadership</span>
<h2 className="font-heading text-4xl md:text-5xl text-[#0B1628] font-medium leading-tight tracking-tight">Meet the People <br/>Behind Your Plan.</h2>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in-section">

<div className="bg-[#0B1628] p-6 rounded-[20px] group hover:-translate-y-2 transition-transform duration-300">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C9A44E] to-[#FFFDF8] p-0.5 mb-6">
<div className="w-full h-full bg-[#132744] rounded-full flex items-center justify-center">
<span className="text-[#C9A44E] font-heading font-medium text-xl">ET</span>
</div>
</div>
<h3 className="text-white font-heading text-xl mb-1">Emmanuel Tita</h3>
<p className="text-[#8B95A5] text-xs uppercase tracking-wide">Senior Exec Vice Chairman</p>
</div>

<div className="bg-[#0B1628] p-6 rounded-[20px] group hover:-translate-y-2 transition-transform duration-300">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C9A44E] to-[#FFFDF8] p-0.5 mb-6">
<div className="w-full h-full bg-[#132744] rounded-full flex items-center justify-center">
<span className="text-[#C9A44E] font-heading font-medium text-xl">MD</span>
</div>
</div>
<h3 className="text-white font-heading text-xl mb-1">Margaret Denton</h3>
<p className="text-[#8B95A5] text-xs uppercase tracking-wide">Chief Executive Officer</p>
</div>

<div className="bg-[#0B1628] p-6 rounded-[20px] group hover:-translate-y-2 transition-transform duration-300">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C9A44E] to-[#FFFDF8] p-0.5 mb-6">
<div className="w-full h-full bg-[#132744] rounded-full flex items-center justify-center">
<span className="text-[#C9A44E] font-heading font-medium text-xl">DL</span>
</div>
</div>
<h3 className="text-white font-heading text-xl mb-1">Dayebga Lionel</h3>
<p className="text-[#8B95A5] text-xs uppercase tracking-wide">Exec Marketing Director</p>
</div>

<div className="bg-[#0B1628] p-6 rounded-[20px] group hover:-translate-y-2 transition-transform duration-300">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C9A44E] to-[#FFFDF8] p-0.5 mb-6">
<div className="w-full h-full bg-[#132744] rounded-full flex items-center justify-center">
<span className="text-[#C9A44E] font-heading font-medium text-xl">EO</span>
</div>
</div>
<h3 className="text-white font-heading text-xl mb-1">Elizabeth Owomoyela</h3>
<p className="text-[#8B95A5] text-xs uppercase tracking-wide">Senior Marketing Director</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-r from-[#0B1628] to-[#132744]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center fade-in-section">
<div>
<div className="text-[#C9A44E] font-heading text-4xl md:text-5xl font-medium mb-2">500+</div>
<div className="text-[#8B95A5] font-body text-sm">Families Protected</div>
</div>
<div>
<div className="text-[#C9A44E] font-heading text-4xl md:text-5xl font-medium mb-2">$50M+</div>
<div className="text-[#8B95A5] font-body text-sm">Coverage Placed</div>
</div>
<div>
<div className="text-[#C9A44E] font-heading text-4xl md:text-5xl font-medium mb-2">98%</div>
<div className="text-[#8B95A5] font-body text-sm">Client Retention Rate</div>
</div>
<div>
<div className="text-[#C9A44E] font-heading text-4xl md:text-5xl font-medium mb-2">10+</div>
<div className="text-[#8B95A5] font-body text-sm">Carrier Partners</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FFFDF8]" id="contact">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-[#0B1628] rounded-[28px] p-12 md:p-16 text-center relative overflow-hidden fade-in-section shadow-2xl">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#C9A44E] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center">
<h2 className="font-heading text-4xl md:text-5xl text-white font-medium leading-tight tracking-tight mb-6">
                        Your Financial Future Starts <br/>With a <span className="text-[#C9A44E] italic">Conversation</span>.
                    </h2>
<p className="text-[#8B95A5] text-lg max-w-2xl mx-auto mb-10 font-light">
                        No pressure. No jargon. Just a 30-minute conversation about where you are and where you want to be. We'll show you what's possible.
                    </p>

<button className="inline-flex items-center justify-center gap-2 gold-gradient-bg text-[#0B1628] px-10 py-5 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-[#C9A44E]/20 transition-all duration-300 transform hover:-translate-y-1 mb-6" onclick="toggleModal()">
                        Free Consultation
                        <iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>

<a className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300 mb-10" href="https://registration.wfglaunch.com/" target="_blank">
                        Join the Movement
                        <iconify-icon icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
</a>
<div className="text-[#8B95A5] text-sm flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
<span className="flex items-center gap-2"><iconify-icon className="text-[#C9A44E]" icon="solar:phone-linear"></iconify-icon> (469) 970-3333</span>
<span className="hidden md:inline text-[#C9A44E]">•</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#C9A44E]" icon="solar:map-point-linear"></iconify-icon> 101 E Park Blvd, Plano TX · Floor 3, Suite 301</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#050B14] text-white pt-20 pb-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<a className="flex items-center gap-3 mb-6" href="#">
<div className="w-8 h-8 rounded gold-gradient-bg flex items-center justify-center">
<span className="font-heading font-semibold text-[#0B1628] text-sm">PL</span>
</div>
<span className="text-white font-heading font-medium text-lg">Promised Land</span>
</a>
<p className="text-[#8B95A5] text-sm leading-relaxed mb-6">Building lasting wealth for Texas families since day one.</p>
<div className="flex gap-4">
<a className="text-[#8B95A5] hover:text-[#C9A44E] transition-colors" href="#"><iconify-icon icon="brandico:linkedin-rect"></iconify-icon></a>
<a className="text-[#8B95A5] hover:text-[#C9A44E] transition-colors" href="#"><iconify-icon icon="brandico:facebook-rect"></iconify-icon></a>
<a className="text-[#8B95A5] hover:text-[#C9A44E] transition-colors" href="#"><iconify-icon icon="brandico:instagram"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-[#C9A44E] text-xs font-semibold uppercase tracking-wider mb-6">Services</h4>
<ul className="space-y-4 text-sm text-[#8B95A5]">
<li><a className="hover:text-white transition-colors" href="#">Life Insurance</a></li>
<li><a className="hover:text-white transition-colors" href="#">Retirement Planning</a></li>
<li><a className="hover:text-white transition-colors" href="#">Estate Planning</a></li>
<li><a className="hover:text-white transition-colors" href="#">Business Solutions</a></li>
</ul>
</div>

<div>
<h4 className="text-[#C9A44E] text-xs font-semibold uppercase tracking-wider mb-6">Company</h4>
<ul className="space-y-4 text-sm text-[#8B95A5]">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Meet the Team</a></li>
<li><a className="hover:text-white transition-colors" href="#">Why Choose Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Events</a></li>
</ul>
</div>

<div>
<h4 className="text-[#C9A44E] text-xs font-semibold uppercase tracking-wider mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-[#8B95A5]">
<li className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear"></iconify-icon> (469) 970-3333</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> info@promisedlandld.com</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-1" icon="solar:map-point-linear"></iconify-icon> 101 E Park Blvd, Plano TX 75024</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#555]">
<div>© 2026 Promised Land Leadership Development. All Rights Reserved.</div>
<div className="flex gap-6">
<a className="hover:text-[#8B95A5] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#8B95A5] transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
