import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Tab Switcher Logic
        function switchTab(tabName) {
            // Hide all contents
            document.getElementById('content-full').className = 'tab-hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-stretch';
            document.getElementById('content-interior').className = 'tab-hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-stretch';
            document.getElementById('content-exterior').className = 'tab-hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-stretch';

            // Reset buttons
            const inactiveClass = "px-6 py-2 rounded-full text-xs font-medium transition-all duration-300 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/10 tracking-wide";
            const activeClass = "px-6 py-2 rounded-full text-xs font-medium transition-all duration-300 bg-blue-600 text-white shadow-lg shadow-blue-500/25 ring-1 ring-blue-400 tracking-wide";
            
            document.getElementById('btn-full').className = inactiveClass;
            document.getElementById('btn-interior').className = inactiveClass;
            document.getElementById('btn-exterior').className = inactiveClass;

            // Show content
            if(tabName === 'full') {
                document.getElementById('content-full').className = 'tab-visible grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-stretch';
                document.getElementById('btn-full').className = activeClass;
            } else if(tabName === 'interior') {
                document.getElementById('content-interior').className = 'tab-visible grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-stretch';
                document.getElementById('btn-interior').className = activeClass;
            } else if(tabName === 'exterior') {
                document.getElementById('content-exterior').className = 'tab-visible grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-stretch';
                document.getElementById('btn-exterior').className = activeClass;
            }
        }

        // Mobile Menu Logic
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('menu-icon');
            
            if (menu.classList.contains('closed')) {
                menu.classList.remove('closed');
                menu.classList.add('open');
                icon.setAttribute('icon', 'solar:close-circle-linear');
            } else {
                menu.classList.remove('open');
                menu.classList.add('closed');
                icon.setAttribute('icon', 'solar:hamburger-menu-linear');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 w-full z-[999] bg-[#050507]/80 backdrop-blur-xl border-b border-white/5">
<div className="flex h-16 max-w-[1400px] mx-auto px-6 items-center justify-between relative">

<a className="text-sm font-semibold tracking-tight text-white flex items-center gap-2.5 z-50 hover:opacity-80 transition-opacity shrink-0" href="/home-page">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20 ring-1 ring-white/10">
<iconify-icon icon="solar:waterdrops-bold" width="18"></iconify-icon>
</div>
<span className="text-base">Mad Soaps</span>
</a>

<div className="hidden lg:flex items-center h-full">
<a className="h-full flex items-center px-5 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="/home-page">Home</a>
<a className="h-full flex items-center px-5 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="/boat-detailing-packages">Boats</a>
<a className="h-full flex items-center px-5 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="/car-detailing-packages">Cars</a>

<div className="relative group h-full flex items-center">
<a className="flex items-center gap-1.5 px-5 h-full text-sm font-medium text-zinc-400 hover:text-white transition-colors outline-none" href="/plans-page">
                    Plans
                    <iconify-icon className="group-hover:rotate-180 transition-transform duration-200 opacity-70" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</a>

<div className="absolute top-full right-0 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
<div className="bg-[#0A0A0B] border border-white/10 rounded-xl shadow-2xl shadow-black p-2 flex flex-col gap-1 backdrop-blur-xl ring-1 ring-white/5 overflow-hidden">
<a className="flex items-center gap-3.5 px-3 py-3 rounded-lg hover:bg-white/5 group/item transition-all" href="/plans-page#marine">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors duration-300">
<iconify-icon icon="solar:anchor-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-sm font-medium text-white group-hover/item:text-blue-100">Marine Plans</span>
<span className="text-[11px] text-zinc-500 group-hover/item:text-zinc-400">Wash &amp; Wax Packages</span>
</div>
</a>
<a className="flex items-center gap-3.5 px-3 py-3 rounded-lg hover:bg-white/5 group/item transition-all" href="/plans-page#auto">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors duration-300">
<iconify-icon icon="solar:wheel-angle-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-sm font-medium text-white group-hover/item:text-blue-100">Auto Plans</span>
<span className="text-[11px] text-zinc-500 group-hover/item:text-zinc-400">Interior &amp; Exterior</span>
</div>
</a>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-3 md:gap-5">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="tel:8336237627">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span className="hidden xl:inline">(833) 623-7627</span>
</a>
<a className="text-sm font-semibold bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/25 ring-1 ring-blue-500 ring-offset-2 ring-offset-[#050507] whitespace-nowrap" href="#booking">
                Get a Price
            </a>
<button className="lg:hidden text-zinc-400 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" id="menu-icon" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="mobile-menu closed absolute top-[65px] left-0 w-full bg-[#050507] border-b border-white/10 shadow-2xl z-[998]" id="mobile-menu">
<div className="p-4 flex flex-col gap-2">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 text-white text-sm font-medium transition-colors" href="/home-page">
<iconify-icon className="text-blue-400" icon="solar:home-linear" width="18"></iconify-icon> Home
              </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-zinc-400 hover:text-white text-sm font-medium transition-colors" href="/boat-detailing-packages">
<iconify-icon icon="solar:anchor-linear" width="18"></iconify-icon> Boats
              </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-zinc-400 hover:text-white text-sm font-medium transition-colors" href="/car-detailing-packages">
<iconify-icon icon="solar:wheel-angle-linear" width="18"></iconify-icon> Cars
              </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-zinc-400 hover:text-white text-sm font-medium transition-colors" href="/plans-page">
<iconify-icon icon="solar:clipboard-list-linear" width="18"></iconify-icon> Plans
              </a>
</div>
</div>
</nav>
<main className="flex-grow overflow-hidden relative z-0">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

<section className="pt-20 pr-6 pb-24 pl-6 relative">
<div className="max-w-4xl mx-auto text-center space-y-8">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-zinc-300 tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    SERVING ANNAPOLIS, EASTPORT &amp; SOUTH RIVER
                </div>

<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                    We Clean Boats and<br/>
<span className="text-blue-500">Cars in Annapolis</span>
</h1>

<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
                    We come to your house. We bring water and power. <br className="hidden md:block"/>
                    You don't have to do anything. Just relax.
                </p>

<div className="flex flex-col items-center gap-8 pt-4">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-blue-600 text-white text-base font-semibold hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 hover:scale-[1.02] active:scale-[0.98] w-full md:w-auto" href="#booking">
                        Get a Price Now
                    </a>

<div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-zinc-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500 text-base" icon="solar:shield-check-linear"></iconify-icon>
                            Safe &amp; Insured
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500 text-base" icon="solar:bus-linear"></iconify-icon>
                            We Come To You
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500 text-base" icon="solar:stars-minimalistic-linear"></iconify-icon>
                            Top Rated
                        </div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 border-t border-white/5 bg-white/[0.01]">
<div className="max-w-[1400px] mx-auto">
<div className="text-center mb-10">
<h2 className="text-2xl font-semibold text-white tracking-tight">See The Difference</h2>
<p className="text-zinc-400 mt-2 text-sm font-light">Real work we did for your neighbors.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">

<div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group border border-white/5">
<div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-semibold text-white z-10 border border-white/10 tracking-wide">BEFORE</div>
<img alt="Dirty Car" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 grayscale-[30%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group border border-blue-500/20 shadow-2xl shadow-blue-900/10">
<div className="absolute top-4 left-4 bg-blue-600 px-3 py-1 rounded-lg text-xs font-semibold text-white z-10 shadow-lg tracking-wide">AFTER</div>
<img alt="Clean Car" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative" id="marine">
<div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-[1400px] mr-auto ml-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 items-start">

<div className="glass-panel rounded-2xl p-8 flex flex-col h-full relative">
<div className="mb-6">
<h3 className="text-xl font-semibold text-white tracking-tight">Polymer Program</h3>
<p className="text-zinc-400 text-xs mt-3 font-light leading-relaxed">
                                We add a shield to protect your boat.
                                <br/><span className="text-red-400 font-medium">Does NOT include regular washing.</span>
</p>

<div className="mt-6 pt-6 border-t border-white/5">
<div className="flex flex-col gap-0.5">
<div className="flex items-baseline gap-2">
<span className="text-4xl font-semibold text-white tracking-tight">~$3,500</span>
<span className="text-sm font-medium text-zinc-400">/yr</span>
</div>
<p className="text-xs text-blue-400 font-medium mt-1">Estimated for a 30' boat</p>
<p className="text-[10px] text-zinc-500 leading-tight mt-3 italic font-light">
                                        Price varies per vessel depending on conditions, size, etc.
                                    </p>
</div>
</div>
</div>
<div className="flex-1 space-y-8 mb-10">
<div className="space-y-3">
<span className="text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-2">
<iconify-icon className="text-blue-500 text-sm" icon="solar:star-bold"></iconify-icon> 3 Times a Year
                                </span>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-zinc-300 font-medium">
<iconify-icon className="text-blue-500 text-base shrink-0" icon="solar:check-circle-bold"></iconify-icon> 
                                        3 Protection Coatings <span className="font-normal text-zinc-400 ml-1">per year</span>
</li>
</ul>
</div>

<div className="space-y-3">
<span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
<iconify-icon className="text-blue-500 text-sm" icon="solar:shield-star-bold"></iconify-icon> Also Protects:
                                </span>
<ul className="space-y-2.5 pl-0.5">
<li className="flex items-center gap-2.5 text-xs text-zinc-300 leading-tight">
<div className="w-1 h-1 rounded-full bg-blue-500 shrink-0"></div> Stainless Steel parts
                                    </li>
<li className="flex items-center gap-2.5 text-xs text-zinc-300 leading-tight">
<div className="w-1 h-1 rounded-full bg-blue-500 shrink-0"></div> Floor &amp; Walking areas
                                    </li>
<li className="flex items-center gap-2.5 text-xs text-zinc-300 leading-tight">
<div className="w-1 h-1 rounded-full bg-blue-500 shrink-0"></div> Canvas covers
                                    </li>
</ul>
</div>
</div>
<div className="mt-auto">
<a className="block w-full py-3.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white text-sm font-semibold transition-all text-center" href="#booking">
                                Get Polymer Quote
                            </a>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 flex flex-col h-full relative">
<div className="mb-6">
<h3 className="text-xl font-semibold text-white tracking-tight">Wash Program</h3>
<p className="text-zinc-400 text-xs mt-3 font-light leading-relaxed">
                                We wash off dirt and salt.
                                <br/><span className="text-red-400 font-medium">Does NOT include Polymer protection.</span>
</p>

<div className="mt-6 pt-6 border-t border-white/5">
<div className="flex flex-col gap-0.5">
<div className="flex items-baseline gap-2">
<span className="text-4xl font-semibold text-white tracking-tight">~$6,000</span>
<span className="text-sm font-medium text-zinc-400">/yr</span>
</div>
<p className="text-xs text-blue-400 font-medium mt-1">Estimated for a 30' boat</p>
<p className="text-[10px] text-zinc-500 leading-tight mt-3 italic font-light">
                                        Assuming bi-weekly washes (16 visits from March-Nov). Price varies per vessel size &amp; condition.
                                    </p>
</div>
</div>
</div>
<div className="flex-1 space-y-6 mb-10">
<div className="space-y-3">
<span className="text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-2">
<iconify-icon className="text-blue-500 text-sm" icon="solar:calendar-bold"></iconify-icon> March - November
                                </span>
<ul className="space-y-3.5 mt-4">
<li className="flex items-start gap-3 text-xs text-zinc-300 font-medium">
<iconify-icon className="text-blue-500 text-base shrink-0 mt-px" icon="solar:check-circle-bold"></iconify-icon>
<span><strong className="text-white">Surface Cleaning</strong> (Whole boat)</span>
</li>
<li className="flex items-start gap-3 text-xs text-zinc-300 font-medium">
<iconify-icon className="text-blue-500 text-base shrink-0 mt-px" icon="solar:check-circle-bold"></iconify-icon>
<span><strong className="text-white">Decontamination</strong> (Removes deep dirt)</span>
</li>
<li className="flex items-start gap-3 text-xs text-zinc-300 font-medium leading-relaxed">
<iconify-icon className="text-blue-500 text-base shrink-0 mt-px" icon="solar:check-circle-bold"></iconify-icon>
<span><strong className="text-white">Schedule:</strong> Weekly, Bi-weekly, Monthly or Bi-monthly</span>
</li>
</ul>
</div>
</div>
<div className="mt-auto">
<a className="block w-full py-3.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white text-sm font-semibold transition-all text-center" href="#booking">
                                Get Wash Quote
                            </a>
</div>
</div>

<div className="turnkey-panel flex flex-col h-full rounded-2xl p-8 relative">

<div className="absolute -top-3 left-8 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded shadow-lg uppercase tracking-wider">
                            Best Value
                        </div>
<div className="mb-6 mt-2">
<h3 className="text-xl font-semibold text-white tracking-tight">Turnkey Management Program</h3>
<p className="leading-relaxed text-xs font-light text-zinc-400 mt-3">
<strong className="text-white font-medium">The ultimate annual package.</strong> We handle everything from paint to winterizing.
                            </p>

<div className="mt-6 pt-6 border-t border-white/5">
<div className="flex flex-col gap-0.5">
<div className="flex items-baseline gap-2">
<span className="text-4xl font-semibold text-white tracking-tight">~$13,000</span>
<span className="text-sm font-medium text-zinc-400">/yr</span>
</div>
<p className="text-xs text-blue-400 font-medium mt-1">Estimated for a 30' boat</p>
<p className="text-[10px] text-zinc-500 leading-tight mt-3 italic font-light">
                                        Price varies per vessel depending on conditions, size, water systems, engines, etc.
                                    </p>
</div>
</div>
</div>
<div className="flex-1 space-y-6 mb-8">

<div className="bg-[#1e3a8a]/20 rounded-xl p-5 border border-blue-600/30">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-blue-400 text-sm" icon="solar:crown-star-bold"></iconify-icon>
<span className="text-[10px] font-bold text-blue-100 uppercase tracking-wider">Complete Care Benefits</span>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-xs text-white font-semibold">
<iconify-icon className="text-blue-400 text-sm shrink-0" icon="solar:clipboard-check-bold"></iconify-icon>
                                        Commissioning &amp; Decommissioning
                                    </li>
<li className="flex items-start gap-3 text-xs text-white font-semibold">
<iconify-icon className="text-blue-400 text-sm shrink-0" icon="solar:paint-roller-bold"></iconify-icon>
                                        Bottom Paint Included
                                    </li>
<li className="flex items-start gap-3 text-xs text-white font-semibold">
<iconify-icon className="text-blue-400 text-sm shrink-0" icon="solar:pin-bold"></iconify-icon>
                                        Priority Scheduling status
                                    </li>
</ul>
</div>

<div className="space-y-3">
<span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
<iconify-icon className="text-blue-500 text-sm" icon="solar:calendar-add-bold"></iconify-icon> Spring Prep
                                </span>
<ul className="space-y-2.5 pl-0.5">
<li className="flex items-center gap-2.5 text-xs text-zinc-300 leading-tight font-medium">
<div className="w-1 h-1 rounded-full bg-blue-500 shrink-0"></div> Commissioning
                                    </li>
<li className="flex items-center gap-2.5 text-xs text-zinc-300 leading-tight font-medium">
<div className="w-1 h-1 rounded-full bg-blue-500 shrink-0"></div> Shrink Wrap Removal
                                    </li>
<li className="flex items-center gap-2.5 text-xs text-zinc-300 leading-tight font-medium">
<div className="w-1 h-1 rounded-full bg-blue-500 shrink-0"></div> Bottom Paint Application
                                    </li>
</ul>
</div>

<div className="space-y-3 pt-2">
<span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
<iconify-icon className="text-blue-500 text-sm" icon="solar:sun-2-bold"></iconify-icon> Maintenance Season
                                </span>
<ul className="space-y-2.5 pl-0.5">
<li className="flex items-center gap-2.5 text-xs text-zinc-300 leading-tight font-medium">
<div className="w-1 h-1 rounded-full bg-blue-500 shrink-0"></div> 16 Washes / yr
                                    </li>
<li className="flex items-center gap-2.5 text-xs text-zinc-300 leading-tight font-medium">
<div className="w-1 h-1 rounded-full bg-blue-500 shrink-0"></div> Polymer Applications (3x / yr)
                                    </li>
<li className="flex items-center gap-2.5 text-xs text-zinc-300 leading-tight font-medium">
<div className="w-1 h-1 rounded-full bg-blue-500 shrink-0"></div> Monthly Interior Wipe Downs
                                    </li>
</ul>
</div>

<div className="space-y-3 pt-2">
<span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
<iconify-icon className="text-blue-500 text-sm" icon="solar:snowflake-bold"></iconify-icon> Winterizing
                                </span>
<ul className="space-y-2.5 pl-0.5">
<li className="flex items-center gap-2.5 text-xs text-zinc-300 leading-tight font-medium">
<div className="w-1 h-1 rounded-full bg-blue-500 shrink-0"></div> Full Decommissioning
                                    </li>
</ul>
</div>
</div>
<div className="mt-auto">
<a className="block w-full py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all text-center shadow-lg shadow-blue-600/20" href="#booking">
                                Get Best Value Quote
                            </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6" id="services">
<div className="max-w-[1400px] mx-auto">

<div className="scroll-mt-24" id="auto">
<div className="text-center mb-8">
<span className="text-blue-400 font-bold text-xs tracking-wider uppercase mb-2 block">Auto Services</span>
<h3 className="text-2xl font-semibold text-white tracking-tight">Car Cleaning Packages</h3>
</div>

<div className="flex flex-wrap justify-center gap-2 mb-12">
<button className="px-6 py-2 rounded-full text-xs font-medium transition-all duration-300 bg-blue-600 text-white shadow-lg shadow-blue-500/25 ring-1 ring-blue-400 tracking-wide" id="btn-full" onclick="switchTab('full')">
                            Full Packages
                        </button>
<button className="px-6 py-2 rounded-full text-xs font-medium transition-all duration-300 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/10 tracking-wide" id="btn-interior" onclick="switchTab('interior')">
                            Interior Only
                        </button>
<button className="px-6 py-2 rounded-full text-xs font-medium transition-all duration-300 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/10 tracking-wide" id="btn-exterior" onclick="switchTab('exterior')">
                            Exterior Only
                        </button>
</div>


<div className="tab-visible grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-stretch" id="content-full">

<div className="glass-panel rounded-2xl p-8 flex flex-col h-full hover:border-white/20 transition-all duration-300">
<div className="mb-4">
<h3 className="text-xl font-semibold text-white tracking-tight">Frontline</h3>
<p className="text-zinc-400 text-xs mt-1.5 font-light">Takes about 5 hours</p>
</div>
<div className="mb-6 pb-6 border-b border-white/5">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white tracking-tight">$65</span>
<span className="text-sm font-medium text-zinc-400">/hr</span>
</div>
</div>
<div className="flex-1 space-y-4 mb-8">
<ul className="space-y-3">
<li className="flex items-start gap-3 text-xs text-zinc-300"><iconify-icon className="text-blue-500 text-sm shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Vacuum &amp; Shine Inside</li>
<li className="flex items-start gap-3 text-xs text-zinc-300"><iconify-icon className="text-blue-500 text-sm shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Clean Glass</li>
<li className="flex items-start gap-3 text-xs text-zinc-300"><iconify-icon className="text-blue-500 text-sm shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Hand Wash &amp; Dry</li>
</ul>
</div>
<div className="mt-auto">
<a className="block w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium transition-all text-center" href="#booking">Select Frontline</a>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 flex flex-col h-full hover:border-white/20 transition-all duration-300">
<div className="mb-4">
<h3 className="text-xl font-semibold text-white tracking-tight">Silver</h3>
<p className="text-zinc-400 text-xs mt-1.5 font-light">Takes about 6-7 hours</p>
</div>
<div className="mb-6 pb-6 border-b border-white/5">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white tracking-tight">$65</span>
<span className="text-sm font-medium text-zinc-400">/hr</span>
</div>
</div>
<div className="flex-1 space-y-4 mb-8">
<ul className="space-y-3">
<li className="flex items-start gap-3 text-xs text-white font-medium"><iconify-icon className="text-blue-400 text-sm shrink-0 mt-0.5" icon="solar:star-linear"></iconify-icon> Includes Frontline stuff</li>
<li className="flex items-start gap-3 text-xs text-zinc-300"><iconify-icon className="text-blue-500 text-sm shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Shine Tires &amp; Trim</li>
<li className="flex items-start gap-3 text-xs text-zinc-300"><iconify-icon className="text-blue-500 text-sm shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Foam Wash &amp; Power Rinse</li>
</ul>
</div>
<div className="mt-auto">
<a className="block w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium transition-all text-center" href="#booking">Select Silver</a>
</div>
</div>

<div className="glass-panel-gold rounded-2xl p-8 flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full -z-10"></div>
<div className="mb-4">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px] font-semibold uppercase tracking-wider mb-3">Popular</div>
<h3 className="text-xl font-semibold text-white tracking-tight">Gold</h3>
<p className="text-zinc-400 text-xs mt-1.5 font-light">Takes about 8-9 hours</p>
</div>
<div className="mb-6 pb-6 border-b border-white/5">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white tracking-tight">$65</span>
<span className="text-sm font-medium text-zinc-400">/hr</span>
</div>
</div>
<div className="flex-1 space-y-4 mb-8">
<ul className="space-y-3">
<li className="flex items-start gap-3 text-xs text-white font-medium"><iconify-icon className="text-blue-400 text-sm shrink-0 mt-0.5" icon="solar:star-linear"></iconify-icon> Includes Silver stuff</li>
<li className="flex items-start gap-3 text-xs text-zinc-300"><iconify-icon className="text-blue-500 text-sm shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Deep clean seats</li>
<li className="flex items-start gap-3 text-xs text-zinc-300"><iconify-icon className="text-blue-500 text-sm shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Remove stains</li>
</ul>
</div>
<div className="mt-auto">
<a className="block w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-all text-center shadow-lg shadow-blue-900/20" href="#booking">Select Gold</a>
</div>
</div>
</div>

<div className="tab-hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center" id="content-interior">
<div className="glass-panel rounded-2xl p-8 flex flex-col h-full hover:border-white/20">
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Basic Interior</h3>
<p className="text-zinc-400 text-xs mb-6 font-light">Wipe down &amp; Vacuum</p>
<a className="mt-auto block w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-medium text-center border border-white/10" href="#booking">Book Basic</a>
</div>
<div className="glass-panel rounded-2xl p-8 flex flex-col h-full hover:border-white/20">
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Deep Clean</h3>
<p className="text-zinc-400 text-xs mb-6 font-light">Steam &amp; Shampoo</p>
<a className="mt-auto block w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-medium text-center border border-white/10" href="#booking">Book Deep Clean</a>
</div>
</div>

<div className="tab-hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center" id="content-exterior">
<div className="glass-panel rounded-2xl p-8 flex flex-col h-full hover:border-white/20">
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Basic Exterior</h3>
<p className="text-zinc-400 text-xs mb-6 font-light">Hand Wash &amp; Dry</p>
<a className="mt-auto block w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-medium text-center border border-white/10" href="#booking">Book Basic</a>
</div>
<div className="glass-panel rounded-2xl p-8 flex flex-col h-full hover:border-white/20">
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Wax &amp; Polish</h3>
<p className="text-zinc-400 text-xs mb-6 font-light">Shine &amp; Protect</p>
<a className="mt-auto block w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-medium text-center border border-white/10" href="#booking">Book Polish</a>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-4xl mx-auto mb-24 px-6 relative z-10" id="booking">

<div className="rounded-xl border border-blue-500/10 bg-blue-500/5 p-4 flex gap-4 items-start mb-6 backdrop-blur-sm">
<div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 shrink-0 shadow-lg shadow-blue-500/10">
<iconify-icon icon="solar:card-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-1">Payment Policy</h4>
<p className="text-xs text-zinc-400 leading-relaxed font-light">
                        All programs require a credit card on file. A  applies, but can be avoided by paying via <span className="text-zinc-200 font-medium">Cash, Check, Zelle, or Venmo</span>. Payment is due at the time of service completion.
                    </p>
</div>
</div>
<div className="glass-panel rounded-2xl p-6 md:p-10 border-white/10 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/5 blur-[80px] rounded-full pointer-events-none -z-10"></div>
<div className="text-center mb-10">
<h2 className="text-2xl font-semibold text-white tracking-tight">Want a Price?</h2>
<p className="text-zinc-400 mt-2 max-w-lg mx-auto text-sm font-light">Fill this out. It takes 1 minute. We will text you the price.</p>
</div>
<div className="w-full min-h-[500px]">
<fieldd-lead-form code="vwsXon"></fieldd-lead-form>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 py-12 bg-[#050507]">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
<div className="md:col-span-1 space-y-4">
<a className="text-lg font-semibold tracking-tight text-white flex items-center gap-2" href="#">
<div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:waterdrops-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
                        Mad Soaps
                    </a>
<p className="text-xs text-zinc-500 leading-relaxed font-light">
                        We clean boats and cars in Annapolis. We come to you.
                    </p>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-sm font-medium text-white">Services</h4>
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="/boat-detailing-packages">Boat Cleaning</a>
<a className="text-xs text-white transition-colors" href="/car-detailing-packages">Car Cleaning</a>
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="/plans-page">Plans</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-sm font-medium text-white">Areas</h4>
<span className="text-xs text-zinc-500">Annapolis</span>
<span className="text-xs text-zinc-500">Eastport</span>
<span className="text-xs text-zinc-500">South River</span>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-sm font-medium text-white">Contact</h4>
<a className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-2" href="tel:8336237627">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                        (833) 623-7627
                    </a>
<div className="flex gap-4 mt-2">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="18"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-zinc-500 text-xs font-light">© 2024 Mad Soaps. All rights reserved.</div>
<div className="flex gap-6 text-xs text-zinc-500 font-light">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
