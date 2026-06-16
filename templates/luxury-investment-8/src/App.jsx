import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Data for Timeline
        const timelineData = {
            '2024': { v1: '$319M', v2: '18%', v3: 'Phase 2', l1: 'Asset Value', l2: 'Annual Yield', l3: 'Development Status' },
            '2031': { v1: '$1.2B', v2: '24%', v3: 'Phase 3', l1: 'Projected Value', l2: 'Stabilized Yield', l3: 'Full Operation' },
            '2045': { v1: '$4.5B', v2: '32%', v3: 'Mature', l1: 'Terminal Value', l2: 'Long-term Yield', l3: 'Exit / IPO' }
        };

        function switchTab(year) {
            // Reset Tabs
            ['2024', '2031', '2045'].forEach(y => {
                const btn = document.getElementById(`tab-${y}`);
                if (y === year) {
                    btn.classList.remove('text-slate-400', 'hover:text-white');
                    btn.classList.add('bg-gold', 'text-[#0B1120]', 'font-medium');
                } else {
                    btn.classList.add('text-slate-400', 'hover:text-white');
                    btn.classList.remove('bg-gold', 'text-[#0B1120]', 'font-medium');
                }
            });

            // Update Content with Fade Effect
            const area = document.getElementById('content-area');
            area.style.opacity = '0';
            
            setTimeout(() => {
                const data = timelineData[year];
                document.getElementById('val-1').innerText = data.v1;
                document.getElementById('val-2').innerText = data.v2;
                document.getElementById('val-3').innerText = data.v3;
                area.style.opacity = '1';
            }, 300);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
<div className="font-display text-xl tracking-wide text-white font-medium uppercase">
                Macau of the <span className="text-gold italic">Americas</span>
</div>
<div className="hidden md:flex items-center space-x-10 text-sm font-normal tracking-wide text-slate-300">
<a className="hover:text-white transition-colors" href="#">Vision</a>
<a className="hover:text-white transition-colors" href="#">Investment</a>
<a className="hover:text-white transition-colors" href="#">Location</a>
<a className="hover:text-white transition-colors" href="#">Team</a>
</div>
<button className="hidden md:flex items-center gap-2 border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#0B1120] transition-all duration-300">
<span>Request Deck</span>
</button>

<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Resort Night" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/80 via-[#0B1120]/40 to-[#0B1120]"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-16">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border-white/10">
<span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
<span className="text-xs uppercase tracking-widest text-slate-300">Phase 2 Investment Open</span>
</div>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight leading-[1.1] mb-8">
                The Macau of <br/>
<span className="italic text-gold">the Americas</span>
</h1>
<p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-12">
                A first-of-its-kind oceanfront gaming and lifestyle destination. <br className="hidden md:block"/>
                Institutional-grade infrastructure meeting cinematic serenity.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6">
<button className="w-full md:w-auto bg-gold text-[#0B1120] px-10 py-4 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
                    Request Investor Deck
                </button>
<button className="w-full md:w-auto flex items-center justify-center gap-3 text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest font-medium hover:text-gold transition-colors group">
<span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10">
<i className="w-3 h-3 fill-current ml-0.5" data-lucide="play"></i>
</span>
                    Watch Vision
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<i className="w-6 h-6 text-white" data-lucide="arrow-down"></i>
</div>
</header>

<section className="py-32 relative bg-[#0B1120]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<h2 className="font-display text-4xl md:text-5xl text-white font-medium tracking-tight mb-4">Investment at a Glance</h2>
<p className="text-slate-400 text-lg max-w-md font-light">Key performance indicators and asset allocation for the upcoming fiscal phase.</p>
</div>
<div className="hidden md:block text-right">
<p className="text-gold text-sm uppercase tracking-widest font-medium">Last Updated: Oct 2023</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl group hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5">
<div className="flex justify-between items-start mb-6">
<div className="p-3 rounded-full bg-white/5 text-gold group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="map-pin"></i>
</div>
<i className="w-5 h-5 text-slate-600 group-hover:text-gold transition-colors" data-lucide="arrow-up-right"></i>
</div>
<div className="font-display text-4xl text-white mb-2">700+</div>
<div className="text-slate-400 text-sm uppercase tracking-wider font-medium">Acres Secured</div>
<div className="mt-4 pt-4 border-t border-white/5 text-slate-500 text-sm font-light">
                        Prime oceanfront real estate
                    </div>
</div>

<div className="glass-card p-8 rounded-2xl group hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5">
<div className="flex justify-between items-start mb-6">
<div className="p-3 rounded-full bg-white/5 text-gold group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="dollar-sign"></i>
</div>
<span className="px-2 py-1 rounded text-[10px] bg-gold/10 text-gold uppercase tracking-wider border border-gold/20">Phase 2</span>
</div>
<div className="font-display text-4xl text-white mb-2">$1M</div>
<div className="text-slate-400 text-sm uppercase tracking-wider font-medium">Minimum Entry</div>
<div className="mt-4 pt-4 border-t border-white/5 text-slate-500 text-sm font-light">
                        Accredited investors only
                    </div>
</div>

<div className="glass-card p-8 rounded-2xl group hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5">
<div className="flex justify-between items-start mb-6">
<div className="p-3 rounded-full bg-white/5 text-gold group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="target"></i>
</div>
</div>
<div className="font-display text-4xl text-white mb-2">$500M</div>
<div className="text-slate-400 text-sm uppercase tracking-wider font-medium">Target Raise</div>
<div className="mt-4 pt-4 border-t border-white/5 text-slate-500 text-sm font-light">
                        Infrastructure &amp; development
                    </div>
</div>

<div className="glass-card p-8 rounded-2xl group hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5">
<div className="flex justify-between items-start mb-6">
<div className="p-3 rounded-full bg-white/5 text-gold group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="trending-up"></i>
</div>
</div>
<div className="font-display text-4xl text-white mb-2">4.0x</div>
<div className="text-slate-400 text-sm uppercase tracking-wider font-medium">Projected MOIC</div>
<div className="mt-4 pt-4 border-t border-white/5 text-slate-500 text-sm font-light">
                        Upon Phase 3 completion
                    </div>
</div>

<div className="glass-card p-8 rounded-2xl group hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5">
<div className="flex justify-between items-start mb-6">
<div className="p-3 rounded-full bg-white/5 text-gold group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="shield-check"></i>
</div>
</div>
<div className="font-display text-4xl text-white mb-2">2.5x</div>
<div className="text-slate-400 text-sm uppercase tracking-wider font-medium">Equity Coverage</div>
<div className="mt-4 pt-4 border-t border-white/5 text-slate-500 text-sm font-light">
                        Asset-backed security
                    </div>
</div>

<div className="glass-card p-8 rounded-2xl group hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5 flex flex-col justify-center items-center text-center cursor-pointer">
<div className="p-4 rounded-full bg-gold/10 text-gold mb-4 group-hover:bg-gold group-hover:text-[#0B1120] transition-colors duration-300">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="calculator"></i>
</div>
<h3 className="font-display text-2xl text-white mb-1">ROI Calculator</h3>
<p className="text-slate-400 text-sm font-light">Simulate your investment growth</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0F172A] border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-display text-4xl md:text-5xl text-white font-medium tracking-tight">Projected Trajectory</h2>
<p className="text-slate-400 text-lg mt-4 font-light">Financial milestones and valuation targets.</p>
</div>

<div className="flex justify-center mb-16">
<div className="inline-flex glass-card p-1 rounded-full">
<button className="px-8 py-3 rounded-full text-sm uppercase tracking-widest transition-all duration-300 bg-gold text-[#0B1120] font-medium" id="tab-2024" onclick="switchTab('2024')">2024</button>
<button className="px-8 py-3 rounded-full text-sm uppercase tracking-widest text-slate-400 hover:text-white transition-all duration-300" id="tab-2031" onclick="switchTab('2031')">2031</button>
<button className="px-8 py-3 rounded-full text-sm uppercase tracking-widest text-slate-400 hover:text-white transition-all duration-300" id="tab-2045" onclick="switchTab('2045')">2045</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center transition-opacity duration-500" id="content-area">

<div className="group">
<div className="font-display text-6xl text-white mb-4 group-hover:text-gold transition-colors duration-300" id="val-1">$319M</div>
<p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Asset Value</p>
<p className="text-slate-400 text-lg font-light">Infrastructure &amp; Land Acquisition</p>
</div>

<div className="relative group">
<div className="hidden md:block absolute -left-6 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10"></div>
<div className="font-display text-6xl text-white mb-4 group-hover:text-gold transition-colors duration-300" id="val-2">18%</div>
<p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Annual Yield</p>
<p className="text-slate-400 text-lg font-light">Projected dividend distribution</p>
<div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10"></div>
</div>

<div className="group">
<div className="font-display text-6xl text-white mb-4 group-hover:text-gold transition-colors duration-300" id="val-3">Phase 2</div>
<p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Development Status</p>
<p className="text-slate-400 text-lg font-light">Mahogany Bay Expansion</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 bg-[#0B1120]">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-12">Trusted Partners &amp; Operators</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="font-serif text-3xl text-white tracking-tighter hover:text-gold cursor-default">Marriott</div>
<div className="font-sans text-2xl font-bold text-white tracking-widest hover:text-gold cursor-default">HILTON</div>
<div className="font-serif text-3xl italic text-white hover:text-gold cursor-default">Wyndham</div>
<div className="font-display text-2xl text-white tracking-wide border px-2 border-white hover:border-gold hover:text-gold cursor-default">RADISSON</div>
</div>
</div>
</section>

<section className="py-32 relative bg-[#0B1120] overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 mb-6">
<i className="w-4 h-4 text-gold" data-lucide="navigation"></i>
<span className="text-xs uppercase tracking-widest text-gold">Ambergris Caye, Belize</span>
</div>
<h2 className="font-display text-4xl md:text-5xl text-white font-medium tracking-tight mb-6">Strategic Caribbean Positioning</h2>
<p className="text-slate-300 text-lg font-light leading-relaxed mb-8">
                    Located on the largest island in Belize, Macau of the Americas sits at the intersection of luxury tourism and tax-advantaged investment zones. 
                </p>
<div className="space-y-4">
<div className="glass-card p-6 rounded-xl flex items-center gap-4 group cursor-pointer hover:bg-white/5 transition-colors">
<div className="p-3 bg-white/5 rounded-full text-slate-300 group-hover:text-gold group-hover:bg-gold/10 transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="plane"></i>
</div>
<div>
<h4 className="text-white font-medium">International Airport</h4>
<p className="text-sm text-slate-500">15 minutes via private transfer</p>
</div>
</div>
<div className="glass-card p-6 rounded-xl flex items-center gap-4 group cursor-pointer hover:bg-white/5 transition-colors">
<div className="p-3 bg-white/5 rounded-full text-slate-300 group-hover:text-gold group-hover:bg-gold/10 transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="anchor"></i>
</div>
<div>
<h4 className="text-white font-medium">Deep Water Marina</h4>
<p className="text-sm text-slate-500">Accommodation for 150ft+ yachts</p>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative h-[600px] w-full glass-card rounded-2xl overflow-hidden border-white/5 p-2">

<div className="w-full h-full rounded-xl bg-slate-800 relative overflow-hidden">
<img alt="Map Background" className="w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity scale-125" src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&amp;w=2050&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-[40%] left-[45%]">
<span className="relative flex h-6 w-6">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
<span className="relative inline-flex rounded-full h-6 w-6 bg-gold border-2 border-[#0B1120]"></span>
</span>

<div className="absolute left-10 top-0 glass-card px-4 py-2 rounded-lg whitespace-nowrap border-l-2 border-l-gold">
<span className="text-xs font-bold text-white uppercase tracking-wider">The Resort</span>
</div>
</div>
<div className="absolute bottom-[30%] left-[30%] opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
<div className="w-3 h-3 bg-slate-400 rounded-full"></div>
<div className="absolute left-6 top-[-4px] bg-black/60 px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap">
<span className="text-[10px] text-slate-300 uppercase">Marina</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#080C17] pt-24 pb-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<div className="font-display text-xl tracking-wide text-white font-medium uppercase mb-6">
                        Macau of the <span className="text-gold italic">Americas</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Defining the future of luxury hospitality and investment in the Western Hemisphere.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-gold transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-gold transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-slate-400 hover:text-gold transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
<div>
<h4 className="text-white text-sm uppercase tracking-widest font-medium mb-6">Investment</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-gold transition-colors" href="#">Why Belize?</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Financial Projections</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Phase 2 Terms</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Risk &amp; Mitigation</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm uppercase tracking-widest font-medium mb-6">Company</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-gold transition-colors" href="#">Vision</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Leadership</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Press</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm uppercase tracking-widest font-medium mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-gold transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Disclaimer</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Investor Login</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-12">
<p className="text-xs text-slate-600 text-justify leading-relaxed">
                    This website and the information contained herein are for informational purposes only and do not constitute an offer to sell or a solicitation of an offer to buy any securities. Any such offer or solicitation will be made only by means of a confidential offering memorandum and only in jurisdictions where permitted by law. Past performance is not indicative of future results. All investments involve risk, including the loss of principal. "Macau of the Americas" is a registered trademark.
                </p>
<div className="mt-8 text-center text-xs text-slate-600">
                    © 2024 Macau of the Americas, Inc. All rights reserved.
                </div>
</div>
</div>
</footer>



    </>
  );
}
