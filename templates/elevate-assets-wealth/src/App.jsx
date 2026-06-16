import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Modal Logic
        function openModal(interestType) {
            const modal = document.getElementById('leadModal');
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; 
            
            if (interestType) {
                const radio = document.getElementById(`interest-${interestType}`);
                if (radio) radio.checked = true;
            }
        }

        function closeModal() {
            const modal = document.getElementById('leadModal');
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });

        // Intersection Observer
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            const sections = document.querySelectorAll('.fade-in-section');
            sections.forEach(section => {
                observer.observe(section);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

<a className="flex items-center gap-1 group relative" href="#">
<div className="relative flex items-center">
<span className="text-2xl font-normal tracking-tight text-white font-sans">elevate</span>
<span className="absolute -top-1 -right-3 text-[#2DD4BF]">
<svg fill="none" height="10" viewbox="0 0 12 12" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2H10V10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</span>
</div>
</a>
<div className="flex items-center space-x-6">
<button className="text-xs font-medium text-black bg-white hover:bg-gray-200 px-5 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105" onclick="openModal('investing')">
                    Start Investing
                </button>
</div>
</div>
</nav>

<section className="relative pt-36 pb-24 lg:pt-52 lg:pb-36 overflow-hidden fade-in-section">
<div className="glow"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-300 mb-8 animate-pulse">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Wealth Management Suite v2.0
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 leading-[1.1]">
                Mastering wealth <br/>
<span className="text-gradient">through precision finance.</span>
</h1>
<p className="mb-10 text-lg md:text-xl font-light text-gray-500 max-w-3xl mx-auto leading-relaxed">
                Experience a paradigm shift in capital preservation and growth. Elevate combines comprehensive asset management with high-frequency execution to secure your legacy.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="group relative px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]" onclick="openModal('investing')">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
<span className="relative flex items-center gap-2">
                        Start Investing
                        <iconify-icon className="mt-0.5" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</span>
</button>
<button className="px-8 py-3.5 rounded-full border border-white/10 hover:bg-white/5 text-sm font-semibold transition-colors text-white flex items-center justify-center gap-2" onclick="openModal('learning')">
                    Our Philosophy
                    <iconify-icon height="18" icon="solar:book-bookmark-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 fade-in-section">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">A universe of opportunities.</h2>
<p className="text-gray-500 max-w-2xl mx-auto font-light">
                    We provide institutional access across the entire capital structure, managing exposure through automated balancing.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-new-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Global Equities</h3>
<p className="text-xs text-gray-500 leading-relaxed">Direct indexing strategies across developed and emerging markets for long-term compounding.</p>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bill-list-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Fixed Income</h3>
<p className="text-xs text-gray-500 leading-relaxed">Yield-generating government and corporate bonds optimized for your specific tax jurisdiction.</p>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bitcoin-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Digital Assets</h3>
<p className="text-xs text-gray-500 leading-relaxed">Regulated exposure to cryptocurrencies and tokenized real-world assets with cold storage.</p>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Alternative Investments</h3>
<p className="text-xs text-gray-500 leading-relaxed">Access to private equity, venture capital, and commodities for uncorrelated returns.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 fade-in-section">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Engineered for wealth preservation.</h2>
<p className="text-gray-500 text-lg max-w-2xl font-light">
                    We combine human expertise with algorithmic precision to ensure your portfolio stays ahead of market volatility. Our systems are designed to maximize Alpha while strictly managing Beta exposure.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-2xl p-8 md:col-span-2 group hover:bg-white/5 transition duration-500 fade-in-section relative overflow-hidden">
<div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon className="text-white" height="180" icon="solar:chart-2-linear" width="180"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon height="24" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-3">Real-time Asset Allocation</h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-md">
                                Monitor your liquidity and asset distribution with millisecond precision. Our dashboard aggregates data from 40+ global exchanges instantly, giving you a unified view of your net worth.
                            </p>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-8 group hover:bg-white/5 transition duration-500 fade-in-section">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon height="24" icon="solar:shield-keyhole-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Custodial Security</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Multi-layered encryption, cold storage protocols, and biometric authorization ensure your capital remains untouchable.
                    </p>
</div>

<div className="glass-card rounded-2xl p-8 group hover:bg-white/5 transition duration-500 fade-in-section">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon height="24" icon="solar:globe-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Global Diversification</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Access emerging markets in 120+ countries with automated currency hedging to mitigate forex risk.
                    </p>
</div>

<div className="glass-card rounded-2xl p-8 md:col-span-2 group hover:bg-white/5 transition duration-500 fade-in-section">
<div className="flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Private Wealth Advisory</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                                24/7 access to dedicated wealth managers who understand your specific financial goals, tax jurisdiction, and risk tolerance. We act as your fiduciary partner.
                            </p>
</div>

<div className="w-full md:w-1/2 bg-[#080808] border border-white/10 rounded-lg p-5 shadow-lg">
<div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-4">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-white">AB</div>
<div>
<div className="h-2 w-24 bg-zinc-800 rounded mb-1.5"></div>
<div className="h-1.5 w-16 bg-zinc-900 rounded"></div>
</div>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-white/5 rounded"></div>
<div className="h-2 w-5/6 bg-white/5 rounded"></div>
<div className="h-2 w-4/6 bg-white/5 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.01] border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 fade-in-section">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Private Wealth Architecture.</h2>
<p className="text-gray-500 font-light">
                        Beyond simple investing, we provide a holistic financial framework designed for high-net-worth individuals and family offices.
                    </p>
</div>
<button className="text-emerald-400 text-sm font-medium flex items-center gap-2 hover:text-emerald-300 transition-colors" onclick="openModal('investing')">
                    Explore Advisory Services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="space-y-4">
<div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-transparent mb-6"></div>
<h3 className="text-xl font-medium text-white">Estate &amp; Legacy Planning</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Structuring assets for seamless generational transfer. We coordinate with your legal teams to establish trusts and tax-efficient inheritance vehicles.
                    </p>
</div>
<div className="space-y-4">
<div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent mb-6"></div>
<h3 className="text-xl font-medium text-white">Securities-Backed Lending</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Unlock liquidity without triggering capital gains tax events. Borrow against your diversified portfolio at institutional rates for personal or business needs.
                    </p>
</div>
<div className="space-y-4">
<div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-transparent mb-6"></div>
<h3 className="text-xl font-medium text-white">Tax-Loss Harvesting</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Automated strategies to offset capital gains with losses, rebalancing your portfolio to maintain your target allocation while reducing tax liability.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 fade-in-section">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="space-y-2">
<h4 className="md:text-5xl text-4xl font-light text-white tracking-tight">$500M+</h4>
<p className="text-sm text-gray-500">Assets Under Management</p>
</div>
<div className="space-y-2">
<h4 className="text-4xl md:text-5xl font-light tracking-tight text-white">14.2%</h4>
<p className="text-sm text-gray-500">Avg. Annual Yield</p>
</div>
<div className="space-y-2">
<h4 className="text-4xl md:text-5xl font-light tracking-tight text-white">0.01s</h4>
<p className="text-sm text-gray-500">Execution Latency</p>
</div>
<div className="space-y-2">
<h4 className="text-4xl md:text-5xl font-light tracking-tight text-white">24/7</h4>
<p className="text-sm text-gray-500">Wealth Advisory</p>
</div>
</div>
</div>
</section>

<section className="py-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-20">
<div className="w-full lg:w-1/2 fade-in-section">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Financial intelligence at the speed of light.</h2>
<p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
                        Our proprietary AI algorithms analyze market sentiment, geopolitical events, and macroeconomic indicators to rebalance your portfolio automatically.
                    </p>
<ul className="space-y-5">
<li className="flex items-start gap-3 group">
<iconify-icon className="text-emerald-500 mt-1" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<span className="text-gray-500 text-sm">Dynamic rebalancing based on volatility indices.</span>
</div>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="text-emerald-500 mt-1" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<span className="text-gray-500 text-sm">Custom index creation for personalized sector exposure.</span>
</div>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="text-emerald-500 mt-1" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<span className="text-gray-500 text-sm">Factor-based investing to outperform traditional benchmarks.</span>
</div>
</li>
</ul>
</div>
<div className="w-full lg:w-1/2 fade-in-section delay-100">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 blur-3xl rounded-full opacity-30"></div>
<div className="relative glass-card rounded-2xl p-1 border border-white/10">
<div className="bg-[#050505] rounded-xl overflow-hidden p-6 md:p-10">

<div className="flex justify-between items-center mb-10">
<div className="">
<div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Total Portfolio Value</div>
<div className="text-3xl text-white font-medium mt-2">$2,840,500.00</div>
</div>
<div className="text-emerald-400 text-xs font-bold flex items-center gap-1 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                                        +12.4% <iconify-icon icon="solar:graph-new-up-linear" width="16"></iconify-icon>
</div>
</div>
<div className="flex items-end gap-2 h-48">
<div className="w-full bg-white/5 rounded-t-sm hover:bg-white/20 transition-all h-[40%]"></div>
<div className="w-full bg-white/5 rounded-t-sm hover:bg-white/20 transition-all h-[60%]"></div>
<div className="w-full bg-white/5 rounded-t-sm hover:bg-white/20 transition-all h-[50%]"></div>
<div className="w-full bg-white/5 rounded-t-sm hover:bg-white/20 transition-all h-[70%]"></div>
<div className="w-full bg-white/5 rounded-t-sm hover:bg-white/20 transition-all h-[55%]"></div>
<div className="w-full bg-white/5 rounded-t-sm hover:bg-white/20 transition-all h-[80%]"></div>
<div className="w-full bg-white rounded-t-sm shadow-[0_0_15px_rgba(255,255,255,0.3)] h-[95%]"></div>
</div>
<div className="flex justify-between mt-6 pt-6 border-t border-white/5 text-xs text-gray-600 font-mono">
<span>JAN</span>
<span>MAR</span>
<span>MAY</span>
<span>JUL</span>
<span>SEP</span>
<span>NOV</span>
<span>DEC</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gradient-to-b from-transparent to-white/[0.02]">
<div className="max-w-4xl mx-auto px-6 text-center fade-in-section">
<iconify-icon className="text-white/20 mb-8 mx-auto" height="40" icon="solar:quote-up-square-linear" width="40"></iconify-icon>
<h3 className="text-2xl md:text-4xl font-light text-white leading-tight mb-10 font-sans">
                "We built Elevate to democratize access to elite financial strategies. In a world of infinite data, clarity and precision are the ultimate assets for wealth generation."
            </h3>
<div className="flex flex-col items-center">
<div className="flex text-xl text-white font-sans bg-zinc-800 w-14 h-14 border-white/10 border rounded-full mb-4 items-center justify-center">
                    AB
                </div>
<div className="text-white font-medium text-lg">Anurag S Bhatia</div>
<div className="text-sm text-emerald-500 font-medium tracking-wide mt-1">FOUNDER &amp; CEO</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10 fade-in-section">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">Ready to elevate your wealth?</h2>
<p className="text-gray-500 text-lg mb-12 max-w-xl mx-auto">Join the platform powering the next generation of asset managers. Institutional tools, personal control.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-black rounded-full px-10 py-4 text-sm font-semibold hover:bg-gray-200 transition-colors shadow-lg hover:shadow-white/20" onclick="openModal('investing')">
                    Get Started
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#020202] py-12 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">

<div className="flex items-center gap-2">
<div className="relative flex items-center">
<span className="text-xl font-normal tracking-tight text-white font-sans">elevate</span>
<span className="absolute -top-1 -right-3 text-[#2DD4BF]">
<svg fill="none" height="8" viewbox="0 0 12 12" width="8" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2H10V10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</span>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-xs">
<p>© 2024 Elevate Management Inc. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-gray-400" href="#">Privacy Policy</a>
<a className="hover:text-gray-400" href="#">Terms of Service</a>
<div className="flex items-center gap-2 text-emerald-500/80">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span>Systems Operational</span>
</div>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden flex items-center justify-center p-4 sm:p-6" id="leadModal">

<div className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity" onclick="closeModal()"></div>

<div className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden transform transition-all scale-100">

<div className="flex items-center justify-between p-6 border-b border-white/5">
<h3 className="text-xl font-medium text-white">Begin your journey</h3>
<button className="text-gray-500 hover:text-white transition-colors" onclick="closeModal()">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<form className="p-6 space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-400 ml-1">First Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-400 ml-1">Last Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-400 ml-1">Email Address</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-400 ml-1">Contact No.</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-400 ml-1">I am interested in</label>
<div className="grid grid-cols-2 gap-3">
<label className="relative cursor-pointer">
<input checked="" className="peer sr-only" id="interest-investing" name="interest" type="radio" value="investing"/>
<div className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-center transition-all peer-checked:bg-white peer-checked:text-black peer-checked:border-white hover:bg-white/10">
<span className="text-sm font-medium">Investing</span>
</div>
</label>
<label className="relative cursor-pointer">
<input className="peer sr-only" id="interest-learning" name="interest" type="radio" value="learning"/>
<div className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-center transition-all peer-checked:bg-white peer-checked:text-black peer-checked:border-white hover:bg-white/10">
<span className="text-sm font-medium">Wealth Advisory</span>
</div>
</label>
</div>
</div>
<button className="w-full bg-white text-black font-semibold rounded-lg py-3.5 mt-4 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group" type="button">
                    Submit Request
                    <iconify-icon className="transition-transform group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<p className="text-[10px] text-gray-600 text-center">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>
</form>
</div>
</div>


    </>
  );
}
