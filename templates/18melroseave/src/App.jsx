import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontSize: {
'xxs': '0.65rem',
}
}
}
}



        // Simple 3D Card Script
        const cards = document.querySelectorAll('.card-3d');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="grain"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
<span className="text-xs font-semibold tracking-tighter">M</span>
</div>
<span className="text-sm font-medium text-white/90 tracking-tight">18 Melrose Avenue</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-neutral-400">
<a className="hover:text-white transition-colors" href="#overview">Overview</a>
<a className="hover:text-white transition-colors" href="#details">Details</a>
<a className="hover:text-white transition-colors" href="#market">Market Data</a>
<a className="hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-white transition-colors" href="#location">Location</a>
</div>
<a className="text-xs bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-neutral-200 transition-colors" href="#inquire">
                Contact
            </a>
</div>
</nav>

<main className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center overflow-hidden" id="overview">

<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[128px] pointer-events-none"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[128px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center perspective-container">

<div className="space-y-8 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm reveal">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
<span className="uppercase text-xxs font-medium text-neutral-300 tracking-wide">Single Family Residence</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] reveal delay-100">
<span className="text-gradient">Investment Opportunity</span><br/>
                    in East Northport.
                </h1>
<p className="text-lg text-neutral-400 max-w-md leading-relaxed reveal delay-200">
                    A fantastic opportunity in the heart of East Northport (11731). This property offers incredible potential for investors, sitting significantly below the area's median home value.
                </p>
<div className="flex items-center gap-8 pt-4 reveal delay-300">
<div>
<p className="text-3xl font-medium text-white">$525,000</p>
<p className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Asking Price</p>
</div>
<div className="h-10 w-px bg-white/10"></div>
<div className="flex gap-6">
<div className="flex flex-col">
<span className="flex items-center gap-1 text-white font-medium">
<iconify-icon icon="solar:bed-linear" width="18"></iconify-icon> 3
                            </span>
<span className="text-xs text-neutral-500">Beds</span>
</div>
<div className="flex flex-col">
<span className="flex items-center gap-1 text-white font-medium">
<iconify-icon icon="solar:bath-linear" width="18"></iconify-icon> 1
                            </span>
<span className="text-xs text-neutral-500">Bath</span>
</div>
<div className="flex flex-col">
<span className="flex items-center gap-1 text-white font-medium">
<iconify-icon icon="solar:ruler-linear" width="18"></iconify-icon> 864
                            </span>
<span className="text-xs text-neutral-500">Sq Ft</span>
</div>
</div>
</div>
<div className="flex gap-4 pt-4 reveal delay-300">
<button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition-all flex items-center gap-2 text-sm" onclick="document.getElementById('inquire').scrollIntoView({behavior: 'smooth'})">
                        Schedule Tour
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="px-6 py-3 rounded-lg font-medium border border-white/10 hover:bg-white/5 transition-all text-white text-sm" onclick="document.getElementById('gallery').scrollIntoView({behavior: 'smooth'})">
                        View Photos
                    </button>
</div>
</div>

<div className="relative w-full aspect-[4/3] lg:aspect-[4/3] card-3d group reveal delay-200">
<div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
<img alt="18 Melrose Avenue Exterior" className="object-cover w-full h-full scale-105 group-hover:scale-110 transition-transform duration-700 opacity-90 hover:opacity-100" src="https://photos.zillowstatic.com/fp/7cda6fbd2b3db64e30cd6f261b492769-cc_ft_1536.jpg"/>
</div>

<div className="absolute -z-10 -top-10 -right-10 w-full h-full border border-white/5 rounded-2xl"></div>
</div>
</div>
</main>

<section className="py-24 px-6 border-t border-white/5" id="details">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4">Property Highlights</h2>
<p className="text-neutral-400 max-w-xl">
                    Ideally located near major roadways, shopping, parks, and highly rated schools. This home sits in a desirable neighborhood with strong resale demand.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6 perspective-container">

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all card-3d">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 text-3d">
<iconify-icon icon="solar:hammer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Expansion Potential</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Functional layout with possibilities for expansion or redesign. Perfect for those looking to build equity.
                    </p>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all card-3d">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 text-3d">
<iconify-icon icon="solar:maximize-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Generous Lot</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Sitting on a 5,227 square foot lot, this property offers ample outdoor space for landscaping and entertaining.
                    </p>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all card-3d">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 text-3d">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Prime Location</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Located in East Northport, a community known for its high demand and proximity to local amenities.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-neutral-900/30">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-2xl font-medium tracking-tight mb-8">Property Data</h2>
<div className="space-y-4 mb-10">
<div className="flex justify-between items-center py-4 border-b border-white/5 group hover:bg-white/[0.02] px-4 rounded-lg transition-colors cursor-default">
<span className="text-neutral-400 text-sm flex items-center gap-2">
<iconify-icon className="text-neutral-600" icon="solar:home-linear"></iconify-icon> Home Type
                        </span>
<span className="text-white font-medium text-sm">Single Family Residence</span>
</div>
<div className="flex justify-between items-center py-4 border-b border-white/5 group hover:bg-white/[0.02] px-4 rounded-lg transition-colors cursor-default">
<span className="text-neutral-400 text-sm flex items-center gap-2">
<iconify-icon className="text-neutral-600" icon="solar:calendar-linear"></iconify-icon> Year Built
                        </span>
<span className="text-white font-medium text-sm">1977</span>
</div>
<div className="flex justify-between items-center py-4 border-b border-white/5 group hover:bg-white/[0.02] px-4 rounded-lg transition-colors cursor-default">
<span className="text-neutral-400 text-sm flex items-center gap-2">
<iconify-icon className="text-neutral-600" icon="solar:ruler-angular-linear"></iconify-icon> Lot Size
                        </span>
<span className="text-white font-medium text-sm">5,227 Sq Ft</span>
</div>
<div className="flex justify-between items-center py-4 border-b border-white/5 group hover:bg-white/[0.02] px-4 rounded-lg transition-colors cursor-default">
<span className="text-neutral-400 text-sm flex items-center gap-2">
<iconify-icon className="text-neutral-600" icon="solar:fire-linear"></iconify-icon> Heating
                        </span>
<span className="text-white font-medium text-sm">Hot Water</span>
</div>
<div className="flex justify-between items-center py-4 border-b border-white/5 group hover:bg-white/[0.02] px-4 rounded-lg transition-colors cursor-default">
<span className="text-neutral-400 text-sm flex items-center gap-2">
<iconify-icon className="text-neutral-600" icon="solar:car-linear"></iconify-icon> Parking
                        </span>
<span className="text-white font-medium text-sm">1 Garage Space</span>
</div>
<div className="flex justify-between items-center py-4 border-b border-white/5 group hover:bg-white/[0.02] px-4 rounded-lg transition-colors cursor-default">
<span className="text-neutral-400 text-sm flex items-center gap-2">
<iconify-icon className="text-neutral-600" icon="solar:dollar-linear"></iconify-icon> Tax Assessment
                        </span>
<span className="text-white font-medium text-sm">$1,850</span>
</div>
</div>
</div>

<div className="">
<h2 className="text-2xl font-medium tracking-tight mb-8">Tax History</h2>
<div className="space-y-4 mb-10">
<div className="flex items-start gap-4 p-5 border border-white/5 rounded-xl bg-white/[0.02]">
<div className="flex-1">
<div className="flex justify-between items-center">
<h4 className="text-neutral-400 text-sm">2024</h4>
<span className="text-white text-sm font-medium">$1,850</span>
</div>
</div>
</div>
<div className="flex items-start gap-4 p-5 border border-white/5 rounded-xl bg-white/[0.02]">
<div className="flex-1">
<div className="flex justify-between items-center">
<h4 className="text-neutral-400 text-sm">2023</h4>
<span className="text-white text-sm font-medium">$1,850</span>
</div>
</div>
</div>
<div className="flex items-start gap-4 p-5 border border-white/5 rounded-xl bg-white/[0.02]">
<div className="flex-1">
<div className="flex justify-between items-center">
<h4 className="text-neutral-400 text-sm">2022</h4>
<span className="text-white text-sm font-medium">$1,850</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="market">
<div className="max-w-7xl mx-auto">
<div className="mb-12">
<h2 className="text-3xl font-medium tracking-tight mb-2">Market Analysis</h2>
<p className="text-neutral-400">East Northport (11731) market trends and value comparison.</p>
</div>
<div className="grid lg:grid-cols-2 gap-8">

<div className="glass p-8 rounded-2xl border border-white/10">
<h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:chart-square-linear"></iconify-icon>
                        Price Comparison
                    </h3>

<div className="space-y-6">
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-white font-medium">18 Melrose Ave</span>
<span className="text-emerald-400 font-medium">$525,000</span>
</div>
<div className="h-2 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500/80 w-[63%] rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-neutral-400">Zip Code Median (11731)</span>
<span className="text-neutral-400">$825,000</span>
</div>
<div className="h-2 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-blue-500/50 w-full rounded-full"></div>
</div>
</div>
</div>
<div className="mt-8 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-xl mt-0.5" icon="solar:tag-price-linear"></iconify-icon>
<div>
<p className="text-sm font-medium text-white">Significant Equity Potential</p>
<p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                                Listed <span className="text-white">~36% below</span> the area median sales price. An exceptional entry point for the East Northport market.
                            </p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="glass p-6 rounded-2xl border border-white/10 flex flex-col justify-between group hover:bg-white/[0.04] transition-colors">
<div className="text-neutral-500 mb-2"><iconify-icon icon="solar:dollar-minimalistic-linear" width="24"></iconify-icon></div>
<div>
<p className="text-2xl font-medium text-white">$385</p>
<p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">Area Median Price / SqFt</p>
</div>
</div>

<div className="glass p-6 rounded-2xl border border-white/10 flex flex-col justify-between group hover:bg-white/[0.04] transition-colors">
<div className="text-neutral-500 mb-2"><iconify-icon icon="solar:hourglass-linear" width="24"></iconify-icon></div>
<div>
<p className="text-2xl font-medium text-white">22 Days</p>
<p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">Median Days on Mkt</p>
</div>
</div>

<div className="glass p-6 rounded-2xl border border-white/10 flex flex-col justify-between group hover:bg-white/[0.04] transition-colors">
<div className="text-neutral-500 mb-2"><iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon></div>
<div>
<p className="text-2xl font-medium text-white">103.2%</p>
<p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">Sale-to-List Ratio</p>
</div>
</div>

<div className="glass p-6 rounded-2xl border border-white/10 flex flex-col justify-between group hover:bg-white/[0.04] transition-colors">
<div className="text-neutral-500 mb-2"><iconify-icon icon="solar:home-angle-linear" width="24"></iconify-icon></div>
<div>
<p className="text-2xl font-medium text-white">73</p>
<p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">Homes Sold (30d)</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6" id="gallery">
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex justify-between items-end mb-12">
<div className="">
<h2 className="text-3xl font-medium tracking-tight mb-2">Gallery</h2>
<p className="text-neutral-400">Cinematic tour of the property.</p>
</div>
</div>

<div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 group">
<iframe allow="autoplay" className="w-full h-full object-cover" src="https://drive.google.com/file/d/1X0l1rMgTWUppP45WYbAafMdF_i1zUmfP/preview" style={{border: '0'}}>
</iframe>

<div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none"></div>
</div>
</div>
</section>

<section className="py-12 px-6" id="location">
<div className="max-w-7xl mx-auto h-[400px] rounded-2xl overflow-hidden relative border border-white/10 group transition-all duration-500">

<iframe allowfullscreen="" className="map-filter w-full h-full" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.398642144781!2d-73.32653492348574!3d40.88212007136856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e83ae4105073e5%3A0xe53f5c9428b49e8a!2s18%20Melrose%20Ave%2C%20East%20Northport%2C%20NY%2011731!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
<div className="absolute inset-0 pointer-events-none flex items-center justify-center">
<div className="glass px-6 py-3 rounded-full flex items-center gap-2 animate-float pointer-events-auto">
<iconify-icon className="text-white" icon="solar:map-point-bold"></iconify-icon>
<span className="text-sm font-medium">18 Melrose Avenue</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="inquire">
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4">Interested in this property?</h2>
<p className="text-neutral-400">Contact the listing professional for details.</p>
</div>
<div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">

<div className="glass p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon icon="solar:user-circle-linear" width="64"></iconify-icon>
</div>
<div className="relative z-10">
<span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white mb-4">Listing Agent</span>
<h3 className="text-xl font-semibold text-white mb-1">Gina M. Kritikos CBR</h3>
<p className="text-sm text-neutral-400 mb-6">Gold Coast Real Estate Group</p>
<div className="space-y-3">
<a className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors" href="tel:5162707471">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
</div>
                                (516) 270-7471
                            </a>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
<iconify-icon icon="solar:buildings-linear"></iconify-icon>
</div>
                                MLS #957707
                            </div>
</div>
</div>
</div>

<div className="flex flex-col justify-center space-y-4">
<input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/20 transition-colors" placeholder="Your Name" type="text"/>
<input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/20 transition-colors" placeholder="Email Address" type="email"/>
<input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/20 transition-colors" placeholder="Phone Number" type="tel"/>
<button className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-neutral-200 transition-colors text-sm">
                        Request Information
                    </button>
</div>
</div>
</div>
</section>
<footer className="py-8 text-center border-t border-white/5">
<p className="text-xs text-neutral-600">Source: OneKey® MLS. Market Data via Propwire. Information deemed reliable but not guaranteed.</p>
</footer>


    </>
  );
}
