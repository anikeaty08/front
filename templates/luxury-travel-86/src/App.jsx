import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 inset-x-0 z-50 glass-panel border-b-0 border-zinc-800/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-zinc-100 font-medium tracking-widest text-sm uppercase" href="#">TripEver</a>
<div className="hidden md:flex items-center gap-6 text-sm font-light">
<a className="hover:text-zinc-100 transition-colors" href="#story">Our Story</a>
<a className="hover:text-zinc-100 transition-colors" href="#membership">Membership</a>
</div>
</div>
<div className="flex items-center gap-6 text-sm">
<a className="hidden md:block font-light hover:text-zinc-100 transition-colors" href="#login">Login</a>
<a className="bg-zinc-100 text-zinc-950 px-4 py-2 rounded-md font-medium hover:bg-white transition-colors flex items-center gap-2" href="#pricing">
                    Request Private Access
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-gold-glow opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<p className="text-xs font-medium tracking-widest uppercase text-amber-500 mb-6 flex items-center gap-2">
<iconify-icon icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Private Member Collective · Est. For the Discerning Few
            </p>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-zinc-50 leading-[1.1] max-w-4xl mb-8">
                The World's Most <br className="hidden md:block"/>
<span className="text-zinc-500">Exclusive Rates.</span><br/>
                For Members Only.
            </h1>
<p className="text-lg md:text-xl font-light max-w-2xl mb-10 text-zinc-400">
                A closed collective of elite travelers accessing proprietary hotel rates unavailable to the public - or any booking platform.
            </p>
<div className="flex flex-col items-center gap-3">
<a className="bg-amber-400 text-zinc-950 px-8 py-3 rounded-md font-medium text-base hover:bg-amber-300 transition-colors w-full sm:w-auto text-center" href="#pricing">
                    Request Private Access
                </a>
<p className="text-xs font-light text-zinc-500">Not a sign-up. A membership inquiry.</p>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900 bg-zinc-950/50 relative overflow-hidden">
<div className="absolute -right-64 top-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<p className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-3">The Gap They Don't Want You to See</p>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-50">Same Room. Not the Same Price.</h2>
</div>
<div className="max-w-4xl mx-auto relative mb-24">
<div className="glass-panel rounded-2xl p-1 md:p-2 border border-zinc-800 shadow-2xl relative overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800 rounded-xl overflow-hidden">
<div className="bg-zinc-900 p-8 flex flex-col justify-center relative grayscale opacity-70">
<div className="absolute top-4 left-4 flex gap-2">
<span className="text-xs font-medium bg-zinc-800 px-2 py-1 rounded text-zinc-400">Expedia</span>
<span className="text-xs font-medium bg-zinc-800 px-2 py-1 rounded text-zinc-400">Booking.com</span>
</div>
<p className="text-sm font-medium text-zinc-300 mb-1 mt-6">Burj Al Arab</p>
<p className="text-xs text-zinc-500 mb-6">Deluxe Suite</p>
<div className="flex items-end gap-2">
<span className="text-4xl font-medium text-zinc-500 line-through decoration-zinc-600/50">$1,800</span>
<span className="text-sm text-zinc-600 mb-1">/ night</span>
</div>
</div>
<div className="bg-zinc-900 p-8 flex flex-col justify-center relative">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.1),_transparent_60%)]"></div>
<div className="absolute top-4 right-4 text-amber-400 text-xs font-medium tracking-widest flex items-center gap-1">
<iconify-icon icon="solar:shield-keyhole-linear"></iconify-icon> Private Collective
                            </div>
<p className="text-sm font-medium text-zinc-100 mb-1 mt-6">Burj Al Arab</p>
<p className="text-xs text-zinc-400 mb-6">Deluxe Suite</p>
<div className="flex items-end gap-2">
<span className="text-4xl font-medium text-gold">$1,250</span>
<span className="text-sm text-zinc-400 mb-1">/ night</span>
<iconify-icon className="text-amber-400 mb-2 ml-1" icon="solar:stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto px-4 h-8 bg-zinc-100 rounded-full items-center justify-center shadow-lg border border-zinc-300 z-10 text-zinc-900 gap-2 text-[10px] font-medium tracking-widest uppercase">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon> Reveal Member Rate <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="mt-8 text-center flex flex-col items-center">
<p className="text-sm font-light text-zinc-300 mb-3">Bypassing public rate parity. Real savings for our private collective.</p>
<div className="inline-flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-1.5">
<span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
<p className="text-xs font-medium text-zinc-400">Our members save an average of <span className="text-zinc-100">32%</span> on 5-star properties worldwide.</p>
</div>
</div>
</div>

<div className="border-t border-zinc-800/50 pt-20">
<div className="text-center mb-10">
<p className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-2">Right Now, Across the World</p>
<h3 className="text-2xl font-medium tracking-tight text-zinc-100">Members Are Saving. Everywhere.</h3>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
<div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 flex flex-col gap-1 hover:bg-zinc-900 transition-colors">
<div className="flex items-center gap-2 text-sm font-medium text-zinc-100"><iconify-icon className="text-zinc-500" icon="solar:map-point-linear"></iconify-icon> Dubai, UAE</div>
<p className="text-lg font-medium text-gold">Member saved $412</p>
<p className="text-xs text-zinc-500 font-light mt-2">4 min ago</p>
</div>
<div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 flex flex-col gap-1 hover:bg-zinc-900 transition-colors">
<div className="flex items-center gap-2 text-sm font-medium text-zinc-100"><iconify-icon className="text-zinc-500" icon="solar:map-point-linear"></iconify-icon> London, UK</div>
<p className="text-lg font-medium text-gold">Member saved $289</p>
<p className="text-xs text-zinc-500 font-light mt-2">11 min ago</p>
</div>
<div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 flex flex-col gap-1 hover:bg-zinc-900 transition-colors">
<div className="flex items-center gap-2 text-sm font-medium text-zinc-100"><iconify-icon className="text-zinc-500" icon="solar:map-point-linear"></iconify-icon> Singapore</div>
<p className="text-lg font-medium text-gold">Member saved $334</p>
<p className="text-xs text-zinc-500 font-light mt-2">22 min ago</p>
</div>
<div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 flex flex-col gap-1 hover:bg-zinc-900 transition-colors">
<div className="flex items-center gap-2 text-sm font-medium text-zinc-100"><iconify-icon className="text-zinc-500" icon="solar:map-point-linear"></iconify-icon> Maldives</div>
<p className="text-lg font-medium text-gold">Member saved $671</p>
<p className="text-xs text-zinc-500 font-light mt-2">1 hr ago</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900 bg-zinc-950 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="flex-1 text-center md:text-left">
<h3 className="text-6xl md:text-8xl font-medium tracking-tighter text-zinc-50 mb-4">1,200,000+</h3>
<p className="text-xl font-medium text-zinc-300 mb-4">Verified Luxury Properties.<br/>Mapped. Standardized. Exclusive.</p>
<p className="text-sm font-light text-zinc-500 max-w-md mx-auto md:mx-0">From Maldives overwater villas to Tokyo penthouses - every property verified, every rate proprietary.</p>
</div>
<div className="flex-1 bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 md:p-12 relative">
<p className="text-xs font-medium tracking-widest uppercase text-amber-500 mb-3">Proprietary Technology</p>
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 mb-6">We Don't Aggregate Rates.<br/>We Engineer Them.</h3>
<p className="text-sm font-light text-zinc-400 mb-8 leading-relaxed">TripEver's Mapping Engine connects to global wholesale distribution networks that the public cannot access. We identify the same room across five different suppliers, standardize it into a single Master Record, and surface only the lowest verified rate.</p>
<div className="space-y-4 relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-zinc-800">
<div className="flex gap-4 relative">
<div className="w-6 h-6 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-500 shrink-0 z-10">01</div>
<div>
<p className="text-sm font-medium text-zinc-200">Global Supplier Data</p>
<p className="text-xs font-light text-zinc-500">Expedia · Hotelbeds · WebBeds · 5 more</p>
</div>
</div>
<div className="flex gap-4 relative">
<div className="w-6 h-6 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-500 shrink-0 z-10">02</div>
<div>
<p className="text-sm font-medium text-zinc-200">Mapping Engine</p>
<p className="text-xs font-light text-zinc-500">De-Duplication + Verification</p>
</div>
</div>
<div className="flex gap-4 relative">
<div className="w-6 h-6 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-[10px] text-amber-400 shrink-0 z-10">03</div>
<div>
<p className="text-sm font-medium text-gold">One Clean Member Rate</p>
<p className="text-xs font-light text-zinc-500">Superior King Room · $1,250 / night ✦</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900 bg-zinc-950 relative" id="search">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<div className="flex items-center gap-6 text-sm mb-4 border-b border-zinc-800/50 pb-4 overflow-x-auto hide-scrollbar">
<button className="text-zinc-100 font-medium whitespace-nowrap">Hotels &amp; Villas</button>
<button className="text-zinc-500 hover:text-zinc-300 transition-colors font-light whitespace-nowrap">Flights</button>
<button className="text-zinc-500 hover:text-zinc-300 transition-colors font-light whitespace-nowrap">Experiences</button>
<button className="text-zinc-500 hover:text-zinc-300 transition-colors font-light whitespace-nowrap">Packages</button>
</div>
<div className="glass-panel border border-zinc-800 p-2 rounded-2xl flex flex-col md:flex-row gap-2">
<div className="flex-1 relative flex items-center px-4 py-3 md:py-0 border-b md:border-b-0 md:border-r border-zinc-800/50">
<iconify-icon className="text-zinc-500 mr-3 text-lg" icon="solar:map-point-linear"></iconify-icon>
<div className="w-full relative group">
<p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-0.5">Destination</p>
<input className="bg-transparent w-full text-zinc-100 font-medium text-sm focus:outline-none" placeholder="Where are you going?" type="text" value="Dubai, UAE"/>
<div className="absolute top-full left-0 mt-4 w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none z-20 shadow-xl hidden md:block">
<p className="text-xs text-zinc-400 font-medium flex items-center justify-between">Dubai, UAE <span className="text-amber-500/80 font-light text-[10px]">840 Exclusive Member Rates</span></p>
</div>
</div>
</div>
<div className="flex-1 relative flex items-center px-4 py-3 md:py-0 border-b md:border-b-0 md:border-r border-zinc-800/50">
<iconify-icon className="text-zinc-500 mr-3 text-lg" icon="solar:calendar-date-linear"></iconify-icon>
<div className="w-full">
<p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-0.5">Dates</p>
<div className="text-zinc-100 font-medium text-sm">Mar 14 - Mar 18</div>
</div>
</div>
<div className="flex-1 relative flex items-center px-4 py-3 md:py-0 border-b md:border-b-0 md:border-r border-zinc-800/50">
<iconify-icon className="text-zinc-500 mr-3 text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<div className="w-full">
<p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-0.5">Guests</p>
<div className="text-zinc-100 font-medium text-sm">1 Room · 2 Adults · 0 Children</div>
</div>
</div>
<button className="bg-zinc-100 text-zinc-950 px-8 py-4 rounded-xl font-medium text-sm hover:bg-white transition-colors flex items-center justify-center whitespace-nowrap">
                        Search Member Rates
                    </button>
</div>
<p className="text-xs text-zinc-500 mt-3 font-light flex items-center gap-1.5 ml-2">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
                    Or type naturally: 'Dubai for 2 adults in June'
                </p>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(255,255,255,0.03)_0%,_transparent_40%)]"></div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-zinc-100 flex items-center gap-2 mb-1">
<iconify-icon className="text-zinc-400" icon="solar:lock-keyhole-linear"></iconify-icon>
                        You're Seeing Public Rates.
                    </h3>
<p className="text-sm font-light text-zinc-400">Members access rates up to 32% lower. Your exclusive price is locked behind membership.</p>
</div>
<div className="flex flex-col items-end shrink-0 w-full md:w-auto relative z-10">
<a className="bg-amber-400/10 text-amber-400 border border-amber-400/20 px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-amber-400/20 transition-colors w-full md:w-auto text-center" href="#pricing">
                        Unlock Member Pricing - From $9
                    </a>
<p className="text-[10px] text-zinc-500 mt-2 font-light">Access Pass unlocks this trip instantly.</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
<p className="text-sm text-zinc-300">248 Properties in <span className="text-zinc-100 font-medium">Dubai, UAE</span> · Mar 14-18</p>
<div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto hide-scrollbar pb-2 md:pb-0">
<span className="text-xs text-zinc-500 mr-2">Sort by:</span>
<button className="text-xs font-medium text-zinc-100 bg-zinc-800 px-3 py-1.5 rounded-md whitespace-nowrap">Best Value</button>
<button className="text-xs font-light text-zinc-400 px-3 py-1.5 whitespace-nowrap">Member Savings</button>
<button className="text-xs font-light text-zinc-400 px-3 py-1.5 whitespace-nowrap">Star Rating</button>
<button className="text-xs font-light text-zinc-400 px-3 py-1.5 whitespace-nowrap">Distance</button>
</div>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col lg:flex-row hover:border-zinc-700 transition-colors group">
<div className="lg:w-2/5 relative aspect-video lg:aspect-auto bg-zinc-800 flex items-center justify-center">
<iconify-icon className="text-4xl opacity-20 text-zinc-500" icon="solar:gallery-bold"></iconify-icon>
<p className="absolute bottom-4 text-[10px] text-zinc-500 tracking-widest uppercase">4K High-Resolution Gallery</p>
<button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-950/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors tooltip-trigger relative">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="lg:w-3/5 p-6 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-xl font-medium text-zinc-50 tracking-tight">Atlantis, The Palm</h3>
<div className="flex items-center gap-3 mt-1 text-xs">
<span className="flex text-amber-400">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</span>
<span className="text-zinc-500 flex items-center gap-1 hover:text-zinc-300 cursor-pointer transition-colors"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Palm Jumeirah, Dubai</span>
</div>
</div>
<div className="text-right">
<div className="inline-flex items-center gap-1.5 bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800">
<span className="text-xs font-medium text-zinc-100">9.4 / 10</span>
<span className="text-[10px] text-zinc-500">Exceptional</span>
</div>
<p className="text-[10px] text-zinc-600 mt-1">1,204 Verified Reviews</p>
</div>
</div>
<p className="text-sm font-medium text-zinc-300 mt-4">Superior King Room · High Floor</p>
<div className="flex flex-wrap gap-2 mt-3">
<span className="text-[10px] text-zinc-400 bg-zinc-800/50 border border-zinc-800 px-2 py-1 rounded flex items-center gap-1"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Breakfast Included</span>
<span className="text-[10px] text-zinc-400 bg-zinc-800/50 border border-zinc-800 px-2 py-1 rounded flex items-center gap-1"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Free Cancellation</span>
<span className="text-[10px] text-zinc-400 bg-zinc-800/50 border border-zinc-800 px-2 py-1 rounded flex items-center gap-1"><iconify-icon icon="solar:swimming-linear"></iconify-icon> Pool</span>
<span className="text-[10px] text-zinc-400 bg-zinc-800/50 border border-zinc-800 px-2 py-1 rounded flex items-center gap-1"><iconify-icon icon="solar:spa-linear"></iconify-icon> Spa</span>
</div>
</div>
<div className="mt-6 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-end justify-between gap-4">
<div className="w-full sm:w-auto">
<div className="flex items-center gap-2 mb-1">
<p className="text-xs text-zinc-500">Public Rate:</p>
<p className="text-sm font-medium text-zinc-500 line-through">~~$517 / night~~</p>
</div>
<div className="flex items-center gap-3 mb-1">
<p className="text-xs text-zinc-300">Member Rate:</p>
<p className="text-2xl font-medium text-gold flex items-center gap-1">$370 <span className="text-sm font-light text-zinc-500">/ night</span> <iconify-icon className="text-sm" icon="solar:stars-linear"></iconify-icon></p>
</div>
<p className="text-[10px] text-zinc-500">Total incl. taxes &amp; fees: $1,480</p>
<div className="mt-3 flex items-center gap-3">
<div className="inline-flex items-center gap-1 bg-amber-400/10 text-amber-400 border border-amber-400/20 px-2 py-0.5 rounded text-[10px] font-medium">
<iconify-icon icon="solar:tag-price-linear"></iconify-icon> You Save $147
                                </div>
<p className="text-[10px] text-zinc-500 font-light flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Last booked 3 hours ago
                                </p>
</div>
</div>
<div className="flex flex-col gap-2 w-full sm:w-auto">
<button className="bg-zinc-100 text-zinc-950 px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-white transition-colors w-full">
                                Secure My Stay
                            </button>
<button className="text-xs text-zinc-400 font-medium py-1 hover:text-zinc-200 transition-colors">View Details</button>
</div>
</div>
</div>
</div>

<div className="hidden bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center mt-8">
<iconify-icon className="text-4xl text-zinc-600 mb-4" icon="solar:map-linear"></iconify-icon>
<h3 className="text-xl font-medium text-zinc-100 mb-2">No Properties Found for This Search.</h3>
<p className="text-sm font-light text-zinc-400 max-w-md mx-auto mb-6">Try adjusting your dates or destination. Our inventory spans 1,200,000+ verified luxury properties worldwide - your perfect stay is here.</p>
<button className="bg-zinc-800 text-zinc-100 px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-zinc-700 transition-colors">Refine My Search</button>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900 bg-zinc-950">
<div className="max-w-5xl mx-auto px-6">

<div className="text-[10px] text-zinc-500 tracking-widest uppercase mb-8 flex items-center gap-2">
                Home <span className="text-zinc-700">/</span> Hotels <span className="text-zinc-700">/</span> Dubai <span className="text-zinc-700">/</span> <span className="text-zinc-300">Atlantis, The Palm</span>
</div>
<div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
<div>
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-50 mb-2">Atlantis, The Palm</h1>
<div className="flex flex-wrap items-center gap-4 text-xs">
<span className="flex text-amber-400"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></span>
<span className="text-zinc-300 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">9.4 / 10 · Exceptional</span>
<span className="text-zinc-500 flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Palm Jumeirah, Dubai, UAE</span>
</div>
</div>
<div className="text-left md:text-right bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 shrink-0 min-w-[200px]">
<p className="text-[10px] text-zinc-500 tracking-widest uppercase mb-1">Member Rate From</p>
<div className="flex items-center md:justify-end gap-2 mb-1">
<span className="text-sm text-zinc-600 line-through">~~$517~~</span>
<iconify-icon className="text-zinc-600 text-xs" icon="solar:arrow-right-linear"></iconify-icon>
<span className="text-2xl font-medium text-gold">$370</span>
</div>
<p className="text-[10px] text-zinc-500">per night</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
<div className="md:col-span-2">
<h4 className="text-lg font-medium text-zinc-100 mb-3">About This Property</h4>
<p className="text-sm font-light text-zinc-400 leading-relaxed mb-8">Atlantis, The Palm is an iconic ultra-luxury resort set on the apex of the Palm Jumeirah. Featuring 1,500+ rooms and suites, 23 restaurants, a waterpark, and one of the world's largest private beaches - this is not a hotel. It is an experience. As a TripEver member, you access wholesale rates unavailable on any public booking platform.</p>
<h4 className="text-lg font-medium text-zinc-100 mb-4">What's Included</h4>
<div className="flex flex-wrap gap-2 text-xs font-light text-zinc-300">
<span className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md">Pool</span>
<span className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md">Private Beach</span>
<span className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md">Waterpark</span>
<span className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md">Spa</span>
<span className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md">Fitness Center</span>
<span className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md">23 Restaurants</span>
<span className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md">Aquarium</span>
<span className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md">24-Hour Butler</span>
</div>
</div>
<div>
<div className="bg-amber-400/5 border border-amber-400/20 rounded-xl p-6 relative overflow-hidden">
<iconify-icon className="absolute -right-4 -top-4 text-7xl text-amber-400/10" icon="solar:user-speak-rounded-linear"></iconify-icon>
<h4 className="text-sm font-medium text-amber-500 mb-2 relative z-10">Need Something Specific?</h4>
<p className="text-xs font-light text-zinc-400 mb-6 relative z-10 leading-relaxed">Our Digital Concierge handles room assignments, airport transfers, and special requests before you arrive.</p>
<button className="w-full bg-zinc-900 text-zinc-100 border border-zinc-700 py-2.5 rounded-lg font-medium text-xs hover:bg-zinc-800 transition-colors relative z-10">
                            Contact Concierge
                        </button>
</div>
</div>
</div>

<div className="mb-16">
<div className="mb-6 flex flex-col md:flex-row justify-between items-end gap-4 border-b border-zinc-800/50 pb-4">
<div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-50 mb-2">Select Your Room</h2>
<p className="text-xs font-light text-zinc-500 max-w-xl">All room names are standardized by our Proprietary Mapping Engine across 5+ global suppliers, ensuring what you see is exactly what you get.</p>
</div>
</div>
<div className="glass-panel border border-zinc-800 rounded-xl p-6 relative hover:border-zinc-700 transition-colors">
<div className="absolute top-0 right-0 bg-amber-400/10 text-amber-400 border-b border-l border-amber-400/20 px-3 py-1 rounded-bl-xl text-[10px] font-medium flex items-center gap-1">
<iconify-icon icon="solar:verified-check-linear"></iconify-icon> Standardized Master Record
                    </div>
<div className="flex flex-col md:flex-row justify-between gap-8">
<div className="md:w-2/3">
<h4 className="text-lg font-medium text-zinc-100 mb-1 mt-2">Superior King Room · High Floor</h4>
<p className="text-xs text-zinc-500 mb-4">62 sqm</p>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
<div className="flex items-center gap-2 text-xs text-zinc-400"><iconify-icon icon="solar:waterdrops-linear"></iconify-icon> Sea View</div>
<div className="flex items-center gap-2 text-xs text-zinc-400"><iconify-icon icon="solar:bed-linear"></iconify-icon> King Bed</div>
<div className="flex items-center gap-2 text-xs text-zinc-400"><iconify-icon icon="solar:bath-linear"></iconify-icon> Rain Shower</div>
<div className="flex items-center gap-2 text-xs text-zinc-400"><iconify-icon icon="solar:window-frame-linear"></iconify-icon> Balcony</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-zinc-300 bg-zinc-800 px-2 py-1 rounded flex items-center gap-1"><iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon> Breakfast Included</span>
<span className="text-xs text-zinc-300 bg-zinc-800 px-2 py-1 rounded flex items-center gap-1"><iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon> Free Cancellation</span>
</div>
</div>
<div className="md:w-1/3 bg-zinc-900/50 rounded-lg p-5 border border-zinc-800/50 flex flex-col justify-center relative overflow-hidden">
<div className="flex justify-between items-center mb-1">
<span className="text-xs text-zinc-500">Public Rate</span>
<span className="text-sm font-medium text-zinc-500 line-through">~~$517~~</span>
</div>
<div className="flex justify-between items-end mb-3">
<span className="text-sm text-zinc-300 font-medium">Member Rate</span>
<span className="text-2xl font-medium text-gold">$370 <span className="text-xs text-zinc-500 font-light">/nt</span></span>
</div>
<div className="mb-4 text-right">
<span className="text-[10px] text-zinc-500 block mb-1">Total (incl. taxes &amp; fees): $1,480</span>
<span className="text-[10px] font-medium text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">You Save $147</span>
</div>
<button className="bg-amber-400 text-zinc-950 w-full py-2.5 rounded-md font-medium text-sm hover:bg-amber-300 transition-colors mb-2">
                                Secure My Stay
                            </button>
<p className="text-[10px] text-zinc-500 text-center flex items-center justify-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Only 2 rooms left at this rate
                            </p>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-6">
<h4 className="text-lg font-medium text-zinc-100">Verified Member Reviews</h4>
<button className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors">Read All 1,204 Reviews</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-xs font-medium text-zinc-400">R</div>
<div>
<p className="text-xs font-medium text-zinc-200">[Name Redacted] <span className="text-[10px] text-amber-500 font-light bg-amber-500/10 px-1.5 py-0.5 rounded ml-1">Annual Elite</span></p>
<p className="text-[10px] text-zinc-500">Stayed March 2025</p>
</div>
<div className="ml-auto flex text-amber-400 text-[10px]"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
</div>
<p className="text-xs font-light text-zinc-400 leading-relaxed">"The rate difference here paid for my entire year's membership on the first night. The property is spectacular, but checking in knowing exactly what I bypassed the public to get makes the stay significantly better. Concierge handled the transfer flawlessly."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900 bg-zinc-950 relative" id="pricing">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<p className="text-xs font-medium tracking-widest uppercase text-amber-500 mb-3">Your Membership Investment</p>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-50 mb-4">Choose Your Level of Access.</h2>
<p className="text-sm md:text-base font-light text-zinc-400 max-w-2xl mx-auto">
                    TripEver is not a booking site. It is a private collective. The membership investment unlocks a pricing layer the public cannot see - and a single booking typically recovers it many times over.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start mb-24">

<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">Tier 01</p>
<h3 className="text-xl font-medium text-zinc-100 mb-1">Access Pass</h3>
<p className="text-sm text-zinc-500 mb-6">One Trip</p>
<div className="flex items-end gap-1 mb-8"><span className="text-4xl font-medium text-zinc-50">$9</span></div>
<p className="text-sm font-light text-zinc-400 mb-8 min-h-[60px]">Unlock secret rates for a single trip. The price of a cocktail.</p>
<ul className="space-y-4 mb-8 text-sm font-light text-zinc-300">
<li className="flex items-start gap-3"><iconify-icon className="text-zinc-500 mt-0.5 text-base" icon="solar:check-read-linear"></iconify-icon> Unlock secret rates for one trip</li>
<li className="flex items-start gap-3"><iconify-icon className="text-zinc-500 mt-0.5 text-base" icon="solar:check-read-linear"></iconify-icon> Full Command Center access</li>
<li className="flex items-start gap-3"><iconify-icon className="text-zinc-500 mt-0.5 text-base" icon="solar:check-read-linear"></iconify-icon> Side-by-side price comparison</li>
<li className="flex items-start gap-3"><iconify-icon className="text-zinc-500 mt-0.5 text-base" icon="solar:check-read-linear"></iconify-icon> Access to Digital Concierge</li>
</ul>
<button className="w-full bg-zinc-800 text-zinc-100 py-3 rounded-lg font-medium text-sm hover:bg-zinc-700 transition-colors">Request Access</button>
<p className="text-[10px] text-zinc-500 text-center mt-3 font-light">One-time, single trip.</p>
</div>

<div className="bg-zinc-900 border border-amber-400/50 rounded-2xl p-8 relative transform md:-translate-y-4 shadow-2xl shadow-amber-400/5">
<div className="absolute -top-3 inset-x-0 flex justify-center">
<span className="bg-amber-400 text-zinc-950 text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1 shadow-lg shadow-amber-400/20">
<iconify-icon icon="solar:star-fall-bold"></iconify-icon> Best Value
                        </span>
</div>
<p className="text-xs font-medium text-amber-500/80 uppercase tracking-widest mb-2 mt-2">Tier 02</p>
<h3 className="text-xl font-medium text-zinc-100 mb-1">Annual Elite</h3>
<p className="text-sm text-zinc-500 mb-6">12 Months</p>
<div className="flex items-end gap-1 mb-8">
<span className="text-4xl font-medium text-zinc-50">$69</span>
<span className="text-sm text-zinc-500 mb-1">/ year</span>
</div>
<p className="text-sm font-light text-zinc-400 mb-8 min-h-[60px]">Unrestricted access for 12 months. The most rational choice for frequent travelers.</p>
<ul className="space-y-4 mb-8 text-sm font-light text-zinc-300">
<li className="flex items-start gap-3"><iconify-icon className="text-amber-400 mt-0.5 text-base" icon="solar:check-read-linear"></iconify-icon> Unlimited searches &amp; bookings</li>
<li className="flex items-start gap-3"><iconify-icon className="text-amber-400 mt-0.5 text-base" icon="solar:check-read-linear"></iconify-icon> Full Hybrid Wallet (USD · USDC · USDT)</li>
<li className="flex items-start gap-3"><iconify-icon className="text-amber-400 mt-0.5 text-base" icon="solar:check-read-linear"></iconify-icon> Priority Concierge access</li>
<li className="flex items-start gap-3"><iconify-icon className="text-amber-400 mt-0.5 text-base" icon="solar:check-read-linear"></iconify-icon> Total Lifetime Savings tracker</li>
</ul>
<button className="w-full bg-amber-400 text-zinc-950 py-3 rounded-lg font-medium text-sm hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/10">Request Access</button>
<p className="text-[10px] text-zinc-500 text-center mt-3 font-light">Billed annually. Cancel anytime.</p>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">Tier 03</p>
<h3 className="text-xl font-medium text-zinc-100 mb-1">Founder's Lifetime</h3>
<p className="text-sm text-zinc-500 mb-6">Limited Status</p>
<div className="flex items-end gap-1 mb-8">
<span className="text-4xl font-medium text-zinc-50">$99</span>
<span className="text-sm text-zinc-500 mb-1">one-time</span>
</div>
<p className="text-sm font-light text-zinc-400 mb-8 min-h-[60px]">Permanent access. Reserved for elite clients and family offices. No renewals.</p>
<ul className="space-y-4 mb-8 text-sm font-light text-zinc-300">
<li className="flex items-start gap-3"><iconify-icon className="text-zinc-500 mt-0.5 text-base" icon="solar:check-read-linear"></iconify-icon> All Annual Elite benefits, permanently</li>
<li className="flex items-start gap-3"><iconify-icon className="text-zinc-500 mt-0.5 text-base" icon="solar:check-read-linear"></iconify-icon> Founder badge on profile</li>
<li className="flex items-start gap-3"><iconify-icon className="text-zinc-500 mt-0.5 text-base" icon="solar:check-read-linear"></iconify-icon> Priority placement with concierge</li>
<li className="flex items-start gap-3"><iconify-icon className="text-zinc-500 mt-0.5 text-base" icon="solar:check-read-linear"></iconify-icon> Crypto-native settlement from day one</li>
</ul>
<button className="w-full bg-zinc-100 text-zinc-950 py-3 rounded-lg font-medium text-sm hover:bg-white transition-colors">Claim Founder Status</button>
<p className="text-[10px] text-zinc-500 text-center mt-3 font-light">One-time. Lifetime. Non-refundable.</p>
</div>
</div>

<div className="max-w-4xl mx-auto glass-panel border border-zinc-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.05)_0%,_transparent_70%)]"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-12">
<div className="flex-1">
<h3 className="text-xl font-medium text-zinc-100 mb-2">Calculate Your Savings</h3>
<p className="text-sm font-light text-zinc-400 mb-8">See how quickly your membership pays for itself based on average CUG discounts.</p>
<div className="space-y-6">
<div>
<div className="flex justify-between text-xs text-zinc-400 mb-2">
<label>Luxury trips per year</label>
<span className="font-medium text-zinc-200">4 Trips</span>
</div>
<input className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer" max="20" min="1" type="range" value="4"/>
</div>
<div>
<div className="flex justify-between text-xs text-zinc-400 mb-2">
<label>Nightly budget</label>
<span className="font-medium text-zinc-200">$1,000</span>
</div>
<input className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer" max="3000" min="200" step="100" type="range" value="1000"/>
</div>
<div>
<div className="flex justify-between text-xs text-zinc-400 mb-2">
<label>Average nights per trip</label>
<span className="font-medium text-zinc-200">5 Nights</span>
</div>
<input className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer" max="14" min="1" type="range" value="5"/>
</div>
</div>
</div>
<div className="md:w-1/3 flex flex-col justify-center border-t md:border-t-0 md:border-l border-zinc-800 pt-8 md:pt-0 md:pl-12">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">Estimated Annual Savings</p>
<p className="text-5xl font-medium text-gold mb-4">$6,400</p>
<div className="bg-zinc-900 border border-zinc-800 rounded-md p-3 mb-6">
<p className="text-xs text-zinc-400">Membership pays for itself after:</p>
<p className="text-sm font-medium text-zinc-100 mt-1">0.2 Nights (First Trip)</p>
</div>
<button className="bg-zinc-100 text-zinc-950 px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-white transition-colors text-center w-full">
                            Unlock These Savings
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900 bg-zinc-950/50" id="login">
<div className="max-w-md mx-auto px-6 text-center">
<div className="mb-10">
<iconify-icon className="text-4xl text-zinc-600 mb-4" icon="solar:key-minimalistic-linear"></iconify-icon>
<h2 className="text-3xl font-medium tracking-tight text-zinc-100 mb-2">Welcome Back.</h2>
<p className="text-sm font-light text-zinc-400">Your private rates are waiting.</p>
</div>
<form className="text-left bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 shadow-2xl backdrop-blur-sm mb-6">
<div className="mb-5">
<label className="block text-xs font-medium text-zinc-500 mb-2">Member Email</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-400/50 transition-colors" placeholder="you@domain.com" type="email"/>
</div>
<div className="mb-6 relative">
<div className="flex justify-between mb-2">
<label className="block text-xs font-medium text-zinc-500">Password</label>
<a className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors" href="#">Reset Access →</a>
</div>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-400/50 transition-colors" placeholder="Your private access code" type="password"/>
</div>
<button className="w-full bg-zinc-100 text-zinc-950 py-3 rounded-lg font-medium text-sm hover:bg-white transition-colors mb-4" type="button">
                    Enter the Collective
                </button>
<button className="w-full bg-zinc-900 text-zinc-300 border border-zinc-800 py-3 rounded-lg font-medium text-sm hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2" type="button">
<iconify-icon className="text-lg" icon="solar:scanner-linear"></iconify-icon> Face ID / Touch ID
                </button>
<p className="text-[10px] text-zinc-600 text-center mt-3 font-light">Enabled for verified members on mobile devices.</p>
</form>
<div className="pt-6 border-t border-zinc-900">
<p className="text-xs text-zinc-400 mb-2">Not yet a member?</p>
<a className="inline-block text-sm font-medium text-zinc-200 hover:text-white transition-colors border-b border-zinc-700 pb-0.5" href="#pricing">Request Private Access</a>
<p className="text-[10px] text-zinc-500 mt-2 font-light">Membership from $9. A 2-step inquiry. No long forms.</p>
<p className="text-[10px] text-zinc-600 mt-8 font-light flex items-center justify-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> TripEver uses 256-bit encryption. Your data is yours.</p>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900 bg-zinc-950" id="contact">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<p className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-2">Contact</p>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-100 mb-4">We Are Listening.</h2>
<p className="text-sm font-light text-zinc-400 max-w-2xl mx-auto">Whether you have a booking question, a special request, or simply want to understand what you're accessing - our concierge team is here.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

<div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-8 flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-2xl text-amber-400" icon="solar:laptop-minimalistic-linear"></iconify-icon>
<h3 className="text-lg font-medium text-zinc-100">Digital Concierge</h3>
<span className="ml-auto text-[10px] tracking-widest uppercase text-zinc-500 bg-zinc-900 px-2 py-1 rounded">24 / 7</span>
</div>
<p className="text-sm font-light text-zinc-400 mb-6 leading-relaxed">Start with our AI-assisted concierge for immediate responses on bookings, rates, and platform queries. For complex requests, you are escalated seamlessly to a human executive concierge.</p>
</div>
<button className="w-full bg-zinc-800 text-zinc-100 py-3 rounded-lg font-medium text-sm hover:bg-zinc-700 transition-colors">Open Concierge Chat</button>
</div>

<div className="bg-amber-400/5 border border-amber-400/20 rounded-xl p-8 flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.05)_0%,_transparent_60%)]"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-2xl text-amber-500" icon="solar:user-speak-linear"></iconify-icon>
<h3 className="text-lg font-medium text-zinc-100">Executive Concierge</h3>
<span className="ml-auto text-[10px] tracking-widest uppercase text-amber-500 bg-amber-400/10 px-2 py-1 rounded">Priority</span>
</div>
<p className="text-sm font-light text-zinc-400 mb-6 leading-relaxed">Annual Elite and Founder members receive direct access to our executive concierge team for bespoke travel arrangements, room-specific requests, and document handling.</p>
</div>
<button className="w-full bg-amber-400 text-zinc-950 py-3 rounded-lg font-medium text-sm hover:bg-amber-300 transition-colors relative z-10">Submit Concierge Request</button>
</div>
</div>

<div className="max-w-2xl mx-auto bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8">
<h3 className="text-lg font-medium text-zinc-100 mb-2">General Inquiry</h3>
<p className="text-xs text-zinc-500 mb-8 font-light">For partnership enquiries, press, and all other matters. We aim to respond within 24 hours.</p>
<form className="space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-2">Full Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-amber-400/50" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-2">Email Address</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-amber-400/50" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-2">Membership Status</label>
<select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-400 focus:outline-none focus:border-amber-400/50 appearance-none">
<option>Not yet a member</option>
<option>Yes - Access Pass</option>
<option>Yes - Annual Elite</option>
<option>Yes - Founder</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-2">Message</label>
<textarea className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-amber-400/50 resize-none" rows="4"></textarea>
</div>
<div className="pt-2">
<button className="bg-zinc-100 text-zinc-950 px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-white transition-colors" type="button">Submit Inquiry</button>
<p className="text-[10px] text-zinc-600 inline-block ml-4 font-light">This is a private inquiry, not a public form submission.</p>
</div>
</form>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900 bg-zinc-950/50" id="programs">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="absolute right-0 top-0 p-16 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]"></div>
<p className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-3 relative z-10">Elite Ambassador Program</p>
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 mb-4 relative z-10">Share the Access.<br/>Earn on Every Key.</h3>
<p className="text-sm font-light text-zinc-400 mb-8 max-w-sm relative z-10 leading-relaxed">When you introduce a traveler to TripEver, you are not sending a referral. You are extending a private invitation. We reward you in credits, in crypto, and in status.</p>
<div className="space-y-4 mb-8 relative z-10">
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400 mt-0.5">01</div>
<p className="text-xs text-zinc-300 font-light"><strong className="font-medium text-zinc-200 block mb-0.5">Join the Program</strong> Apply from your dashboard to receive your private invitation link.</p>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400 mt-0.5">02</div>
<p className="text-xs text-zinc-300 font-light"><strong className="font-medium text-zinc-200 block mb-0.5">Share Privately</strong> Invite frequent travelers and discerning individuals who value private access.</p>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400 mt-0.5">03</div>
<p className="text-xs text-zinc-300 font-light"><strong className="font-medium text-zinc-200 block mb-0.5">Earn on Confirmation</strong> Receive TripEver credits or USDC instantly when they confirm membership.</p>
</div>
</div>
<button className="bg-zinc-800 text-zinc-100 px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-zinc-700 transition-colors relative z-10">Become an Ambassador</button>
</div>

<div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="absolute right-0 top-0 p-16 bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.03)_0%,_transparent_70%)]"></div>
<p className="text-xs font-medium tracking-widest uppercase text-amber-500 mb-3 relative z-10">Property Partner Portal</p>
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 mb-4 relative z-10">Your Property.<br/>The Right Audience.</h3>
<p className="text-sm font-light text-zinc-400 mb-8 max-w-sm relative z-10 leading-relaxed">TripEver's private member collective represents the most commercially valuable segment of the travel market - high-net-worth individuals who book luxury confidently and frequently.</p>
<ul className="space-y-3 mb-8 relative z-10 text-xs text-zinc-400 font-light">
<li className="flex items-start gap-2"><iconify-icon className="text-zinc-500 mt-0.5" icon="solar:shield-check-linear"></iconify-icon> <span className="flex-1"><strong className="text-zinc-200 font-medium">No Public Rate Exposure:</strong> Closed User Group protects rate parity agreements.</span></li>
<li className="flex items-start gap-2"><iconify-icon className="text-zinc-500 mt-0.5" icon="solar:users-group-two-rounded-linear"></iconify-icon> <span className="flex-1"><strong className="text-zinc-200 font-medium">Qualified Buyers:</strong> Self-selected audience with demonstrably higher booking intent.</span></li>
<li className="flex items-start gap-2"><iconify-icon className="text-zinc-500 mt-0.5" icon="solar:data-transfer-linear"></iconify-icon> <span className="flex-1"><strong className="text-zinc-200 font-medium">Clean Integration:</strong> Standardized by our Mapping Engine. No fragmented listings.</span></li>
<li className="flex items-start gap-2"><iconify-icon className="text-zinc-500 mt-0.5" icon="solar:wallet-money-linear"></iconify-icon> <span className="flex-1"><strong className="text-zinc-200 font-medium">Settlement Flexibility:</strong> Support for fiat (USD) and crypto (USDC / USDT).</span></li>
</ul>
<button className="bg-amber-400/10 text-amber-400 border border-amber-400/20 px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-amber-400/20 transition-colors relative z-10">Submit Partnership Inquiry</button>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900 bg-zinc-950" id="library">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<iconify-icon className="text-3xl text-zinc-600 mb-4" icon="solar:book-bookmark-linear"></iconify-icon>
<h2 className="text-2xl font-medium tracking-tight text-zinc-100">The Collective Library</h2>
<p className="text-sm font-light text-zinc-500 mt-2">Manifesto, Architecture, Policies, and Help Center.</p>
</div>
<div className="space-y-4">

<details className="group bg-zinc-900/30 border border-zinc-800/50 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-zinc-900/50 transition-colors">
<h3 className="text-sm font-medium text-zinc-100">01. Our Story &amp; Manifesto</h3>
<iconify-icon className="text-zinc-500 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-6 pt-0 border-t border-zinc-800/50 mt-2 text-sm text-zinc-400 font-light leading-relaxed space-y-6">
<div className="pt-4">
<h4 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">Built for People Who Know the Rate Was Always Wrong.</h4>
<p className="mb-4">TripEver was not built to compete with Booking.com. It was built to replace the logic that created Booking.com.</p>
<p className="mb-4">The global hotel booking market operates on a fiction: that public platforms show you the best available rate. They do not. They show you the best rate they are contractually permitted to show you - the retail price, inflated by public rate parity agreements between brands and distribution channels.</p>
<p>Behind that fiction exists a wholesale layer - rates negotiated directly between accommodation providers and large distribution networks. These are the rates that corporate travel desks, luxury travel agents, and family office advisors have always accessed. Until now, they were inaccessible to individual travelers. TripEver is that wholesale layer. Made accessible. Made private. Made for you.</p>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight text-zinc-100 mb-2">Who We're For</h4>
<p className="mb-4">TripEver is not for everyone. It is for the traveler who understands that access is the real luxury. Who books at the Aman in Kyoto, the Rosewood in Phuket, and the Edition in London - and knows the public rate is an insult to their intelligence.</p>
<p>It is for the family office principal managing travel for a household. For the CEO whose assistant should never have to justify a hotel invoice. For the entrepreneur who settles in USDC and expects the same level of discretion from their travel platform as from their private banker. We built TripEver because no one else had the honesty to build it.</p>
</div>
<div className="border-l-2 border-amber-500/50 pl-4 py-1 italic">
<p className="text-zinc-300">Mission: To give private members permanent, unconditional access to the wholesale pricing layer - transparently, reliably, and with the editorial elegance the rates deserve.</p>
</div>
</div>
</details>

<details className="group bg-zinc-900/30 border border-zinc-800/50 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-zinc-900/50 transition-colors">
<h3 className="text-sm font-medium text-zinc-100">02. The TripEver Advantage (Perks)</h3>
<iconify-icon className="text-zinc-500 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-6 pt-0 border-t border-zinc-800/50 mt-2">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
<div>
<h5 className="text-xs font-medium text-amber-400 mb-1 flex items-center gap-1.5"><iconify-icon icon="solar:ghost-linear"></iconify-icon> Hidden Inventory</h5>
<p className="text-xs font-light text-zinc-400">Our Mapping Engine connects to wholesale networks inaccessible to the public. The inventory is hidden by design. So is the rate.</p>
</div>
<div>
<h5 className="text-xs font-medium text-amber-400 mb-1 flex items-center gap-1.5"><iconify-icon icon="solar:laptop-minimalistic-linear"></iconify-icon> The Command Center</h5>
<p className="text-xs font-light text-zinc-400">Proprietary search interface with NLP. Results are ranked by Member Savings, not by sponsored placement. No ads.</p>
</div>
<div>
<h5 className="text-xs font-medium text-amber-400 mb-1 flex items-center gap-1.5"><iconify-icon icon="solar:cup-star-linear"></iconify-icon> The Winning Price</h5>
<p className="text-xs font-light text-zinc-400">See the public market rate struck through beside your member rate in Gold. The delta is your guaranteed savings.</p>
</div>
<div>
<h5 className="text-xs font-medium text-amber-400 mb-1 flex items-center gap-1.5"><iconify-icon icon="solar:user-speak-rounded-linear"></iconify-icon> Digital Concierge</h5>
<p className="text-xs font-light text-zinc-400">Hybrid AI/human concierge available 24/7. Assign rooms, arrange transfers, or consult before you arrive.</p>
</div>
<div>
<h5 className="text-xs font-medium text-amber-400 mb-1 flex items-center gap-1.5"><iconify-icon icon="solar:wallet-money-linear"></iconify-icon> Hybrid Wallet</h5>
<p className="text-xs font-light text-zinc-400">Hold, transfer, and settle bookings in USD, USDC, and USDT in one unified interface. No currency friction.</p>
</div>
<div>
<h5 className="text-xs font-medium text-amber-400 mb-1 flex items-center gap-1.5"><iconify-icon icon="solar:chart-square-linear"></iconify-icon> Total Lifetime Savings</h5>
<p className="text-xs font-light text-zinc-400">Track the real-dollar delta between what you paid and public retail. The number grows; the fee becomes irrelevant.</p>
</div>
<div>
<h5 className="text-xs font-medium text-amber-400 mb-1 flex items-center gap-1.5"><iconify-icon icon="solar:document-text-linear"></iconify-icon> Document Vault</h5>
<p className="text-xs font-light text-zinc-400">All booking vouchers, visa documents, and invoices stored securely, formatted for business expense reporting.</p>
</div>
<div>
<h5 className="text-xs font-medium text-amber-400 mb-1 flex items-center gap-1.5"><iconify-icon icon="solar:bitcoin-linear"></iconify-icon> Crypto-Native Settlement</h5>
<p className="text-xs font-light text-zinc-400">Built for modern wealth. Pay for membership and settle bookings in stablecoin with complete discretion.</p>
</div>
</div>
</div>
</details>

<details className="group bg-zinc-900/30 border border-zinc-800/50 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-zinc-900/50 transition-colors">
<h3 className="text-sm font-medium text-zinc-100">03. Help Center (FAQ)</h3>
<iconify-icon className="text-zinc-500 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-6 pt-0 border-t border-zinc-800/50 mt-2 space-y-8">
<div className="pt-4">
<h4 className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4 border-b border-zinc-800 pb-2">Membership &amp; Access</h4>
<div className="space-y-4 text-xs font-light text-zinc-400">
<div><strong className="text-zinc-200 font-medium block mb-1">Is TripEver open to the public?</strong> No. Access requires a confirmed membership inquiry. Exclusivity protects the rates for our collective.</div>
<div><strong className="text-zinc-200 font-medium block mb-1">Why do I need to pay a fee?</strong> The rates you access bypass retail parity. The fee unlocks this layer; a single booking recovers it many times over.</div>
<div><strong className="text-zinc-200 font-medium block mb-1">How do I upgrade my tier?</strong> From your dashboard. Annual upgrade fees are applied proportionally.</div>
</div>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4 border-b border-zinc-800 pb-2">Rates &amp; Booking</h4>
<div className="space-y-4 text-xs font-light text-zinc-400">
<div><strong className="text-zinc-200 font-medium block mb-1">Are the prices guaranteed?</strong> Yes. The rate displayed when you click 'Secure My Stay' is guaranteed. Tax and fee breakdowns are shown before confirmation.</div>
<div><strong className="text-zinc-200 font-medium block mb-1">Can I cancel a booking?</strong> Cancellation terms are property-specific. Free Cancellation properties are tagged. TripEver does not add extra cancellation fees.</div>
</div>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4 border-b border-zinc-800 pb-2">Payments &amp; Hybrid Wallet</h4>
<div className="space-y-4 text-xs font-light text-zinc-400">
<div><strong className="text-zinc-200 font-medium block mb-1">What currencies does TripEver accept?</strong> USD (fiat via card), USDC, and USDT (crypto stablecoin). All can be held in your Hybrid Wallet.</div>
<div><strong className="text-zinc-200 font-medium block mb-1">Are crypto payments secure?</strong> Yes. TripEver does not hold private keys or custodial access. We record sending wallet addresses only.</div>
</div>
</div>
</div>
</details>

<details className="group bg-zinc-900/30 border border-zinc-800/50 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-zinc-900/50 transition-colors">
<h3 className="text-sm font-medium text-zinc-100">04. Security Architecture</h3>
<iconify-icon className="text-zinc-500 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-6 pt-0 border-t border-zinc-800/50 mt-2 text-xs text-zinc-400 font-light leading-relaxed space-y-4">
<p className="pt-4">TripEver was designed for clients who expect privacy as a default. Here is every layer of protection built into the platform.</p>
<p><strong className="font-medium text-zinc-200">Data Encryption:</strong> All data is encrypted using TLS 1.3. Credentials are hashed using bcrypt. Payment card data is never stored on TripEver servers.</p>
<p><strong className="font-medium text-zinc-200">Hybrid Wallet Security:</strong> We do not hold custody of any crypto assets. For USDC/USDT transactions, we record only the sending address. Private keys remain exclusively yours.</p>
<p><strong className="font-medium text-zinc-200">Fiat Security:</strong> Card transactions are processed by PCI-DSS Level 1 compliant processors via tokenized references. 3D Secure authentication is enforced.</p>
<p><strong className="font-medium text-zinc-200">CUG Integrity:</strong> Members who publish exclusive rates publicly are in breach of T&amp;C and subject to immediate termination. This protects the collective.</p>
</div>
</details>

<details className="group bg-zinc-900/30 border border-zinc-800/50 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-zinc-900/50 transition-colors">
<h3 className="text-sm font-medium text-zinc-100">05. Terms &amp; Conditions</h3>
<iconify-icon className="text-zinc-500 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-6 pt-0 border-t border-zinc-800/50 mt-2 text-xs text-zinc-400 font-light leading-relaxed space-y-4">
<p className="pt-4"><strong className="font-medium text-zinc-200">Effective: January 1, 2025</strong></p>
<p>By requesting membership, you agree to the terms governing TripEver's private collective.</p>
<p><strong className="font-medium text-zinc-200">1. Nature of Membership:</strong> TripEver is a Closed User Group (CUG) providing access to wholesale rates. Membership is confirmed by inquiry.</p>
<p><strong className="font-medium text-zinc-200">2. Refunds:</strong> Access Pass and Annual Elite may be cancelled within 24 hours for a full refund if no bookings are made. Founder's Lifetime is non-refundable.</p>
<p><strong className="font-medium text-zinc-200">3. CUG Rates:</strong> Members agree not to publish, screenshot, or share TripEver rates publicly. Violation results in immediate termination.</p>
<p><strong className="font-medium text-zinc-200">4. Proprietary Data:</strong> Room standardization and mapping data is proprietary. Scraping or replicating this data is prohibited.</p>
</div>
</details>

<details className="group bg-zinc-900/30 border border-zinc-800/50 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-zinc-900/50 transition-colors">
<h3 className="text-sm font-medium text-zinc-100">06. Privacy Policy</h3>
<iconify-icon className="text-zinc-500 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-6 pt-0 border-t border-zinc-800/50 mt-2 text-xs text-zinc-400 font-light leading-relaxed space-y-4">
<p className="pt-4"><strong className="font-medium text-zinc-200">Effective: January 1, 2025</strong></p>
<p><strong className="font-medium text-zinc-200">Data We Do Not Collect:</strong> We do not sell your data. We do not use your booking history for advertising. We do not share member identity with hotels or third-party marketing platforms.</p>
<p><strong className="font-medium text-zinc-200">Crypto Data:</strong> For stablecoin settlement, TripEver records the wallet address only. Blockchain transactions are public by nature - members are advised to use dedicated travel wallets for privacy.</p>
<p><strong className="font-medium text-zinc-200">Retention:</strong> Active member data is retained for the duration of membership plus 24 months. Booking records are kept for 7 years for compliance.</p>
</div>
</details>

<details className="group bg-zinc-900/30 border border-zinc-800/50 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-zinc-900/50 transition-colors">
<h3 className="text-sm font-medium text-zinc-100">07. Cookie Policy</h3>
<iconify-icon className="text-zinc-500 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-6 pt-0 border-t border-zinc-800/50 mt-2 text-xs text-zinc-400 font-light leading-relaxed space-y-4">
<p className="pt-4">TripEver uses local storage to ensure performance. <strong className="text-zinc-200 font-medium">We do not use advertising cookies, serve ads, or use tracking pixels for retargeting.</strong></p>
<p><strong className="font-medium text-zinc-200">Essential:</strong> Session authentication, CSRF tokens, and load balancing. Cannot be disabled.</p>
<p><strong className="font-medium text-zinc-200">Preferences:</strong> Local storage for currency (USD/GBP/etc.), language, and recent searches for Command Center NLP.</p>
<p><strong className="font-medium text-zinc-200">Performance:</strong> Anonymous session data to improve platform speed and error logging.</p>
</div>
</details>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 border-t border-zinc-900 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.03)_0%,_transparent_50%)]"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-50 mb-6">The Rates Exist.<br/>The Question Is Whether You Have Access.</h2>
<p className="text-sm md:text-base font-light text-zinc-400 mb-10">
                Membership is by inquiry. Not every application is accepted.<br/>If you're here, you already know what you're looking for.
            </p>
<button className="w-full md:w-auto bg-amber-400 text-zinc-950 px-10 py-4 rounded-lg font-medium text-base hover:bg-amber-300 transition-colors shadow-xl shadow-amber-400/10">
                Request Private Access
            </button>
<p className="text-xs text-zinc-500 mt-4 font-light">A 2-step inquiry. No long forms. No commitment until you're ready.</p>
</div>
</section>

<footer className="bg-zinc-950 pt-16 pb-8 border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<p className="text-zinc-100 font-medium tracking-widest text-sm uppercase mb-4">TripEver</p>
<p className="text-xs font-light text-zinc-500 max-w-sm">For the discerning few who refuse to pay retail. A Private Member Collective engineered for modern wealth and global mobility.</p>
</div>
<div>
<h6 className="text-xs font-medium text-zinc-100 mb-4">Collective</h6>
<ul className="space-y-2 text-xs font-light text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#story">Our Story</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#pricing">Membership</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#programs">Elite Ambassador Program</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#programs">List Your Property</a></li>
</ul>
</div>
<div>
<h6 className="text-xs font-medium text-zinc-100 mb-4">Support &amp; Trust</h6>
<ul className="space-y-2 text-xs font-light text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#library">Help Center / FAQ</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#library">Security Architecture</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#library">Privacy Policy</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#library">Terms &amp; Conditions</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#library">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[10px] text-zinc-600">© 2025 TripEver. All rights reserved. · A Private Member Collective.</p>
<div className="flex items-center gap-4 text-zinc-600">
<iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-[10px] tracking-widest uppercase">256-Bit Encrypted</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
