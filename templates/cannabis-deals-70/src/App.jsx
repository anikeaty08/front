import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Scroll Progress & Sticky Bar Logic
        const stickyBar = document.getElementById('sticky-bar');
        let stickyShown = false;

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight;

            // Nav progress bar
            document.getElementById('scroll-progress').style.width = `${scrollPercent * 100}%`;

            // Show sticky prompt after scrolling a bit
            if (scrollPercent > 0.15 && !stickyShown) {
                stickyBar.classList.remove('translate-y-[200%]');
                stickyBar.classList.add('translate-y-0');
                stickyShown = true;
            }
        });

        function dismissSticky() {
            stickyBar.classList.remove('translate-y-0');
            stickyBar.classList.add('translate-y-[200%]');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-[#00FF66]/10 border border-[#00FF66]/20 flex items-center justify-center text-[#00FF66]">
<iconify-icon height="20" icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight text-white">
                    420Deals
                </span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Today's Deals</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Categories</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Dispensaries</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">How It Works</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-300 hover:border-neutral-700 transition-colors">
<iconify-icon className="text-[#00FF66]" height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
                    Set Location
                </button>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-800">
<div className="h-full bg-[#00FF66] w-0 transition-all duration-150 ease-out" id="scroll-progress" style={{width: '0%'}}></div>
</div>
</nav>
<main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-32 space-y-24">

<section className="animate-float-up">
<div className="relative w-full rounded-3xl overflow-hidden group border border-white/5 bg-neutral-900/50">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00FF66]/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[550px]">

<div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 relative z-20">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/20 text-[#00FF66] text-xs font-medium tracking-wide mb-8 w-fit">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF66] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF66]"></span>
</span>
                            Live Local Offers
                        </div>
<h1 className="text-4xl sm:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                            Daily Cannabis Deals, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] to-emerald-400">All Year Long.</span>
</h1>
<p className="text-base text-neutral-400 font-light max-w-md mb-10 leading-relaxed">
                            Find verified discounts on premium flower, edibles, and vapes from licensed dispensaries in your area.
                        </p>

<div className="glass-panel p-2 rounded-2xl w-full max-w-lg flex flex-col sm:flex-row gap-2 shadow-2xl shadow-black/50 border border-neutral-800">
<div className="relative flex-1 flex items-center bg-neutral-950 rounded-xl px-4 py-3 border border-neutral-800 group focus-within:border-neutral-600 transition-colors">
<iconify-icon className="text-neutral-500 mr-3" height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
<input className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-neutral-500 font-medium" placeholder="Enter Zip or City" type="text"/>
</div>
<button className="bg-[#00FF66] hover:bg-emerald-400 text-[#0a0a0a] px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 accent-glow active:scale-[0.98]">
                                Find Deals
                                <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="hidden lg:block relative h-full w-full p-12">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603908868661-831eebedc251?auto=format&amp;fit=crop&amp;q=80&amp;w=1200')] bg-cover bg-center opacity-40 mix-blend-luminosity mask-linear rounded-r-3xl"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 glass-panel rounded-2xl p-6 border border-white/10 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
<div className="flex justify-between items-start mb-4">
<div className="px-2 py-1 bg-red-500/10 text-red-400 text-[10px] font-semibold uppercase tracking-wider rounded border border-red-500/20">Ends Tonight</div>
<iconify-icon className="text-[#00FF66]" height="20" icon="solar:verified-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-1">Buy 1 Get 1 Free</h3>
<p className="text-sm text-neutral-400 mb-6">On all premium 1/8ths</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-semibold text-neutral-400">EL</div>
<span className="text-xs font-medium text-neutral-300">Elevation Dispensary</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="animate-float-up" style={{animationDelay: '150ms'}}>
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl font-semibold text-white tracking-tight">Browse Categories</h2>
<a className="text-sm text-neutral-400 hover:text-[#00FF66] flex items-center gap-1 transition-colors" href="#">
                    View All <iconify-icon height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<a className="group glass-panel rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-neutral-800/50 hover:border-[#00FF66]/30 transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#00FF66] mb-4 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white">Flower</h3>
<p className="text-xs text-neutral-500 mt-1">142 Deals</p>
</a>

<a className="group glass-panel rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-neutral-800/50 hover:border-[#00FF66]/30 transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#00FF66] mb-4 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:cookie-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white">Edibles</h3>
<p className="text-xs text-neutral-500 mt-1">85 Deals</p>
</a>

<a className="group glass-panel rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-neutral-800/50 hover:border-[#00FF66]/30 transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#00FF66] mb-4 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:vaping-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white">Vapes</h3>
<p className="text-xs text-neutral-500 mt-1">110 Deals</p>
</a>

<a className="group glass-panel rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-neutral-800/50 hover:border-[#00FF66]/30 transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#00FF66] mb-4 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:fire-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white">Accessories</h3>
<p className="text-xs text-neutral-500 mt-1">45 Deals</p>
</a>
</div>
</section>

<section className="animate-float-up" style={{animationDelay: '300ms'}}>
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-2">Today's Top Deals</h2>
<p className="text-sm text-neutral-400 font-light">Verified offers from licensed partners near you.</p>
</div>

<div className="flex items-center gap-3">
<div className="relative">
<select className="appearance-none bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 pr-10 text-xs font-medium text-white focus:outline-none focus:border-neutral-600 transition-colors cursor-pointer">
<option>Highest Discount</option>
<option>Newest Offers</option>
<option>Ending Soon</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" height="14" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel border border-neutral-800 p-5 rounded-3xl flex flex-col group hover:border-neutral-600 transition-colors duration-300">

<div className="w-full h-48 rounded-2xl bg-neutral-900 border border-neutral-800 mb-5 relative overflow-hidden flex items-center justify-center">
<iconify-icon className="text-neutral-800" height="48" icon="solar:leaf-linear" width="48"></iconify-icon>
<div className="absolute top-3 left-3 bg-[#00FF66] text-[#0a0a0a] text-[10px] font-semibold px-2 py-1 rounded uppercase tracking-wider shadow-md">
                            30% OFF
                        </div>
</div>

<div className="flex items-start justify-between mb-2">
<h3 className="text-lg font-semibold text-white tracking-tight group-hover:text-[#00FF66] transition-colors line-clamp-1">Wana Sour Gummies 100mg</h3>
</div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-neutral-500" height="14" icon="solar:shop-linear" width="14"></iconify-icon>
<span className="text-xs text-neutral-400 font-medium">Green Leaf Dispensary</span>
</div>
<div className="flex items-end gap-2 mb-6">
<span className="text-xl font-semibold text-white">$17.50</span>
<span className="text-xs text-neutral-500 line-through mb-1">$25.00</span>
</div>

<a className="mt-auto w-full py-3 rounded-xl bg-neutral-100 text-[#0a0a0a] font-semibold text-sm hover:bg-white transition-colors flex items-center justify-center gap-2" href="#">
                        Get Deal <iconify-icon height="16" icon="solar:export-linear" width="16"></iconify-icon>
</a>
</div>

<div className="glass-panel border border-neutral-800 p-5 rounded-3xl flex flex-col group hover:border-neutral-600 transition-colors duration-300">
<div className="w-full h-48 rounded-2xl bg-neutral-900 border border-neutral-800 mb-5 relative overflow-hidden flex items-center justify-center">
<iconify-icon className="text-neutral-800" height="48" icon="solar:fire-linear" width="48"></iconify-icon>
<div className="absolute top-3 left-3 bg-[#00FF66] text-[#0a0a0a] text-[10px] font-semibold px-2 py-1 rounded uppercase tracking-wider shadow-md">
                            BOGO 50%
                        </div>
</div>
<div className="flex items-start justify-between mb-2">
<h3 className="text-lg font-semibold text-white tracking-tight group-hover:text-[#00FF66] transition-colors line-clamp-1">Premium Indoor 1/8ths</h3>
</div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-neutral-500" height="14" icon="solar:shop-linear" width="14"></iconify-icon>
<span className="text-xs text-neutral-400 font-medium">Elevation Wellness</span>
</div>
<div className="flex items-end gap-2 mb-6">
<span className="text-xl font-semibold text-white">Buy 1, Get 1 50% Off</span>
</div>
<a className="mt-auto w-full py-3 rounded-xl bg-neutral-100 text-[#0a0a0a] font-semibold text-sm hover:bg-white transition-colors flex items-center justify-center gap-2" href="#">
                        Get Deal <iconify-icon height="16" icon="solar:export-linear" width="16"></iconify-icon>
</a>
</div>

<div className="glass-panel border border-neutral-800 p-5 rounded-3xl flex flex-col group hover:border-neutral-600 transition-colors duration-300">
<div className="w-full h-48 rounded-2xl bg-neutral-900 border border-neutral-800 mb-5 relative overflow-hidden flex items-center justify-center">
<iconify-icon className="text-neutral-800" height="48" icon="solar:vaping-linear" width="48"></iconify-icon>
<div className="absolute top-3 left-3 bg-white text-[#0a0a0a] text-[10px] font-semibold px-2 py-1 rounded uppercase tracking-wider shadow-md">
                            $15 FLAT
                        </div>
</div>
<div className="flex items-start justify-between mb-2">
<h3 className="text-lg font-semibold text-white tracking-tight group-hover:text-[#00FF66] transition-colors line-clamp-1">Select 510-Thread Carts (1g)</h3>
</div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-neutral-500" height="14" icon="solar:shop-linear" width="14"></iconify-icon>
<span className="text-xs text-neutral-400 font-medium">The Herbal Center</span>
</div>
<div className="flex items-end gap-2 mb-6">
<span className="text-xl font-semibold text-white">$15.00</span>
<span className="text-xs text-neutral-500 line-through mb-1">$35.00</span>
</div>
<a className="mt-auto w-full py-3 rounded-xl bg-neutral-100 text-[#0a0a0a] font-semibold text-sm hover:bg-white transition-colors flex items-center justify-center gap-2" href="#">
                        Get Deal <iconify-icon height="16" icon="solar:export-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="mt-10 flex justify-center">
<button className="px-6 py-3 rounded-full border border-neutral-800 text-sm font-medium text-neutral-300 hover:text-white hover:border-neutral-600 transition-colors">
                    Load More Deals
                </button>
</div>
</section>

<section className="py-12 border-t border-white/5">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

<div className="lg:col-span-5">
<h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6 tracking-tight leading-tight">
                        How <span className="text-[#00FF66]">420Deals</span> Works.
                    </h2>
<p className="text-neutral-400 text-base leading-relaxed mb-8 font-light">
                        We partner with licensed dispensaries and trusted brands to aggregate the best cannabis savings in one place. No fake codes, no shady retailers. Just verified local drops.
                    </p>
<div className="glass-panel p-6 rounded-2xl border border-neutral-800 inline-flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#00FF66]/10 flex items-center justify-center text-[#00FF66]">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">Our Guarantee</p>
<p className="text-sm text-white font-medium">100% Licensed Partners Only</p>
</div>
</div>
</div>

<div className="lg:col-span-7 pt-4">
<div className="relative pl-6 border-l border-neutral-800 ml-4 space-y-12">

<div className="relative group">
<div className="absolute -left-[31px] top-0 w-3 h-3 rounded-full bg-neutral-800 ring-4 ring-[#0a0a0a] group-hover:bg-[#00FF66] transition-colors"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 text-[10px] uppercase tracking-wider mb-3 font-medium">
                                Step 01
                            </div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Set Your Location</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed max-w-md">
                                Enter your zip code or city so we can find deals from dispensaries that are legally permitted to serve your area.
                            </p>
</div>

<div className="relative group">
<div className="absolute -left-[31px] top-0 w-3 h-3 rounded-full bg-neutral-800 ring-4 ring-[#0a0a0a] group-hover:bg-[#00FF66] transition-colors"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 text-[10px] uppercase tracking-wider mb-3 font-medium">
                                Step 02
                            </div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Browse Verified Offers</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed max-w-md">
                                Compare discounts on your favorite strains, edibles, and accessories. We update our database daily to ensure accuracy.
                            </p>
</div>

<div className="relative group">
<div className="absolute -left-[31px] top-0 w-3 h-3 rounded-full bg-[#00FF66] ring-4 ring-[#0a0a0a] shadow-[0_0_15px_rgba(0,255,102,0.5)]"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00FF66]/10 border border-[#00FF66]/20 text-[#00FF66] text-[10px] uppercase tracking-wider mb-3 font-medium">
                                Step 03
                            </div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Claim &amp; Save</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed max-w-md">
                                Click "Get Deal" to be securely redirected to our partner's official menu to reserve your order and secure your discount.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="mb-12">
<div className="relative w-full rounded-[2rem] overflow-hidden bg-neutral-900 border border-neutral-800 p-8 sm:p-16 text-center lg:text-left shadow-2xl">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00FF66]/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-neutral-400 text-xs font-medium mb-6">
<iconify-icon className="text-[#00FF66]" height="14" icon="solar:bell-bing-linear" width="14"></iconify-icon>
                            Exclusive Alerts
                        </div>
<h2 className="text-3xl sm:text-5xl font-semibold text-white mb-4 tracking-tight leading-[1.1]">
                            Never miss a <span className="text-[#00FF66]">420 deal.</span>
</h2>
<p className="text-neutral-400 text-base font-light mb-8">
                            Join 50,000+ others getting the best local cannabis discounts sent directly to their phone or inbox. No spam, just savings.
                        </p>
<form className="flex flex-col sm:flex-row gap-3">
<div className="flex-1 relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" height="20" icon="solar:letter-linear" width="20"></iconify-icon>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors" placeholder="Enter your email address" required="" type="email"/>
</div>
<button className="bg-white hover:bg-neutral-200 text-[#0a0a0a] px-8 py-3.5 rounded-xl font-semibold text-sm transition-colors whitespace-nowrap" type="submit">
                                Get Alerts
                            </button>
</form>
<p className="text-[10px] text-neutral-500 mt-4 text-left">By subscribing, you confirm you are 21+ and agree to our Terms &amp; Privacy Policy.</p>
</div>

<div className="hidden lg:flex w-64 h-64 relative items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-800 to-neutral-900 rounded-full border border-neutral-700/50 shadow-inner flex items-center justify-center">
<iconify-icon className="text-[#00FF66] opacity-80" height="80" icon="solar:smartphone-update-linear" width="80"></iconify-icon>
</div>

<div className="absolute -top-4 -right-4 glass-panel px-4 py-2 rounded-lg border border-[#00FF66]/20 shadow-lg animate-bounce" style={{animationDuration: '3s'}}>
<span className="text-xs font-semibold text-[#00FF66]">New Drop!</span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#0a0a0a] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#00FF66]" height="24" icon="solar:leaf-linear" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tight text-white">420Deals</span>
</div>
<div className="flex items-center gap-6">
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Dispensaries</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Brands</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Privacy</a>
</div>
</div>
<div className="text-center text-[10px] text-neutral-600 font-light border-t border-white/5 pt-8 max-w-3xl mx-auto">
<p>420Deals is an educational and informational resource. We do not sell cannabis products directly. All transactions and fulfillment are handled by licensed, third-party dispensaries and retailers. Must be 21+ to use this site. Disclaimer: Cannabis deals subject to change and local availability.</p>
</div>
</div>
</footer>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] translate-y-[200%] transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) w-[calc(100%-2rem)] sm:w-auto" id="sticky-bar">
<div className="glass-panel bg-neutral-900/95 border border-neutral-700 p-2 pr-2 sm:pr-2 rounded-2xl sm:rounded-full shadow-2xl flex flex-col sm:flex-row items-center gap-4 sm:gap-8 min-w-[320px] justify-between">
<div className="flex items-center gap-3 pl-2 pt-2 sm:pt-0">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-[#00FF66] shrink-0">
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col text-left">
<span className="text-sm font-semibold text-white leading-tight">Unlock Local Deals</span>
<span className="text-[11px] text-neutral-400 font-medium">Set your location to see precise availability.</span>
</div>
</div>
<div className="flex items-center gap-2 w-full sm:w-auto pb-2 sm:pb-0">
<button className="flex-1 sm:flex-none relative bg-white text-[#0a0a0a] px-6 py-2.5 rounded-xl sm:rounded-full font-semibold text-xs hover:bg-neutral-200 transition-colors whitespace-nowrap">
                    Set Location
                </button>
<button className="w-10 h-10 flex items-center justify-center rounded-xl sm:rounded-full text-neutral-500 hover:bg-neutral-800 hover:text-white transition-colors shrink-0" onclick="dismissSticky()">
<iconify-icon height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>


    </>
  );
}
