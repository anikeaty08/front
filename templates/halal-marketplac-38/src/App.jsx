import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



function showPage(pageId) {
document.querySelectorAll('.page-content').forEach(el => el.classList.remove('active'));
document.getElementById(pageId).classList.add('active');
window.scrollTo(0,0);
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-gray-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-white cursor-pointer" onclick="showPage('home')">
<div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:moon-stars-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-lg">UmmahCo</span>
</div>
<div className="hidden lg:flex items-center gap-6 text-sm font-medium">
<button className="hover:text-white transition-colors" onclick="showPage('explore')">Explore</button>
<button className="hover:text-white transition-colors" onclick="showPage('deals')">Deals</button>
<button className="hover:text-white transition-colors" onclick="showPage('community')">Community</button>
<button className="hover:text-white transition-colors" onclick="showPage('membership')">Membership</button>
<button className="hover:text-white transition-colors" onclick="showPage('merchant-portal')">Merchants</button>
</div>
<div className="flex items-center gap-3">
<button className="text-xs font-medium bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md text-white border border-white/10 flex items-center gap-1" onclick="showPage('merchant-dashboard')">
<iconify-icon icon="solar:shop-linear"></iconify-icon> Dashboard
                </button>
<button className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">Sign In</button>
</div>
</div>
</nav>

<main className="flex-grow pt-24 pb-20 px-6 relative min-h-screen">

<div className="page-content active" id="home">

<div className="max-w-4xl mx-auto text-center mb-24 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-8 border-emerald-500/20">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-emerald-200">The trusted Halal lifestyle marketplace</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                    Discover. Save. <br/> Connect with the Ummah.
                </h1>
<p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto font-light leading-relaxed">
                    Verified Muslim-owned businesses, exclusive curated deals, and a vibrant community platform all in one place.
                </p>

<div className="max-w-lg mx-auto mb-10 relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative flex items-center bg-gray-900 rounded-full border border-white/10 p-1.5">
<iconify-icon className="ml-3 text-slate-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-slate-500 text-sm px-3 outline-none" placeholder="Search businesses, deals, or services..." type="text"/>
<button className="bg-emerald-600 text-white rounded-full px-6 py-2 text-sm font-medium hover:bg-emerald-500 transition-colors" onclick="showPage('explore')">Search</button>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
<div className="glass-panel rounded-xl p-8">
<div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
<iconify-icon icon="solar:verified-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Verified Halal</h3>
<p className="text-sm text-slate-400 font-light">Every business is vetted for authenticity and halal compliance with our trust badge system.</p>
</div>
<div className="glass-panel rounded-xl p-8">
<div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
<iconify-icon icon="solar:tag-price-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Curated Deals</h3>
<p className="text-sm text-slate-400 font-light">Unlock exclusive savings and offers from your favorite Muslim-owned brands.</p>
</div>
<div className="glass-panel rounded-xl p-8">
<div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Community First</h3>
<p className="text-sm text-slate-400 font-light">Connect, hire services, and find local classifieds within the trusted community.</p>
</div>
</div>

<div className="max-w-6xl mx-auto mb-24">
<div className="flex justify-between items-end mb-8">
<h2 className="text-3xl font-semibold text-white tracking-tight">Trending Businesses</h2>
<button className="text-sm text-emerald-400 hover:text-emerald-300 flex items-center gap-1" onclick="showPage('explore')">View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="glass-panel rounded-xl overflow-hidden group cursor-pointer" onclick="showPage('business-card')">
<div className="h-32 bg-gray-800 relative">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-2 right-2 bg-black/50 backdrop-blur px-2 py-0.5 rounded text-[10px] text-white border border-white/10 flex items-center gap-1">
<iconify-icon className="text-emerald-400" icon="solar:verified-check-linear"></iconify-icon> Verified
                             </div>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-white font-medium">Saffron Kitchen</h3>
<div className="flex items-center gap-1 text-amber-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon> 4.8
                                </div>
</div>
<p className="text-xs text-slate-500 mb-3">Restaurant • Fine Dining</p>
<div className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Brooklyn, NY
                            </div>
</div>
</div>

<div className="glass-panel rounded-xl overflow-hidden group cursor-pointer" onclick="showPage('business-card')">
<div className="h-32 bg-gray-800 relative">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-2 right-2 bg-black/50 backdrop-blur px-2 py-0.5 rounded text-[10px] text-white border border-white/10 flex items-center gap-1">
<iconify-icon className="text-emerald-400" icon="solar:verified-check-linear"></iconify-icon> Verified
                             </div>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-white font-medium">Modest &amp; Co</h3>
<div className="flex items-center gap-1 text-amber-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon> 4.9
                                </div>
</div>
<p className="text-xs text-slate-500 mb-3">Retail • Clothing</p>
<div className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Online
                            </div>
</div>
</div>

<div className="glass-panel rounded-xl overflow-hidden group cursor-pointer" onclick="showPage('business-card')">
<div className="h-32 bg-gray-800 relative">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-white font-medium">Elite Consulting</h3>
<div className="flex items-center gap-1 text-amber-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon> 5.0
                                </div>
</div>
<p className="text-xs text-slate-500 mb-3">Services • Legal</p>
<div className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> London, UK
                            </div>
</div>
</div>

<div className="glass-panel rounded-xl overflow-hidden group cursor-pointer" onclick="showPage('business-card')">
<div className="h-32 bg-gray-800 relative">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-white font-medium">Urban Halal</h3>
<div className="flex items-center gap-1 text-slate-600 text-xs">
                                    New
                                </div>
</div>
<p className="text-xs text-slate-500 mb-3">Food • Fast Casual</p>
<div className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Toronto, CA
                            </div>
</div>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto glass-panel rounded-2xl p-12 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-transparent"></div>
<div className="relative z-10">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Join the Community</h2>
<p className="text-slate-400 mb-8 font-light">Sign up to save favorites, get exclusive deal alerts, and connect with trusted businesses.</p>
<div className="flex justify-center gap-4">
<button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200">Get Started</button>
<button className="glass-panel text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white/5" onclick="showPage('merchant-portal')">List Your Business</button>
</div>
</div>
</div>
</div>

<div className="page-content" id="explore">
<div className="max-w-7xl mx-auto">
<div className="mb-10">
<h1 className="text-3xl font-semibold text-white tracking-tight mb-4">Explore Directory</h1>
<div className="flex flex-col md:flex-row gap-4">
<div className="flex-grow relative">
<iconify-icon className="absolute left-3 top-3 text-slate-500" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full glass-panel rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-emerald-500/50" placeholder="Search for cafes, lawyers, mechanics..." type="text"/>
</div>
<div className="w-full md:w-48 relative">
<select className="w-full glass-panel rounded-lg py-2.5 px-4 text-sm text-slate-400 focus:outline-none appearance-none bg-transparent">
<option>All Categories</option>
<option>Food &amp; Dining</option>
<option>Professional Services</option>
<option>Retail</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="w-full md:w-48 relative">
<select className="w-full glass-panel rounded-lg py-2.5 px-4 text-sm text-slate-400 focus:outline-none appearance-none bg-transparent">
<option>Any Location</option>
<option>New York</option>
<option>London</option>
<option>Toronto</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-500 pointer-events-none" icon="solar:map-point-linear"></iconify-icon>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-8">

<div className="w-full lg:w-64 flex-shrink-0">
<div className="glass-panel p-5 rounded-xl mb-6">
<h3 className="text-white font-medium mb-4 text-sm">Filters</h3>
<div className="space-y-4">
<div>
<label className="text-xs text-slate-500 uppercase font-semibold mb-2 block">Features</label>
<label className="flex items-center gap-2 text-sm text-slate-300 mb-2">
<input className="rounded border-gray-700 bg-gray-900 text-emerald-500 focus:ring-0" type="checkbox"/> Verified Halal
                                    </label>
<label className="flex items-center gap-2 text-sm text-slate-300">
<input className="rounded border-gray-700 bg-gray-900 text-emerald-500 focus:ring-0" type="checkbox"/> Women-Owned
                                    </label>
</div>
<div className="pt-4 border-t border-white/5">
<label className="text-xs text-slate-500 uppercase font-semibold mb-2 block">Price Range</label>
<div className="flex gap-2 text-sm">
<button className="px-3 py-1 rounded bg-white/10 text-white hover:bg-emerald-600">$</button>
<button className="px-3 py-1 rounded glass-panel hover:bg-white/10">$$</button>
<button className="px-3 py-1 rounded glass-panel hover:bg-white/10">$$$</button>
</div>
</div>
</div>
</div>
</div>

<div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel rounded-xl overflow-hidden group hover:border-emerald-500/30 transition-colors cursor-pointer" onclick="showPage('business-card')">
<div className="h-40 bg-gray-800 relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-2 right-2 bg-black/60 backdrop-blur px-2 py-0.5 rounded text-[10px] text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
<iconify-icon icon="solar:verified-check-linear"></iconify-icon> Verified
                                </div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-1">
<h3 className="text-white font-semibold tracking-tight">Crescent Grille</h3>
<span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">OPEN</span>
</div>
<div className="flex items-center gap-1 mb-3">
<div className="flex text-amber-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<span className="text-xs text-slate-500">(124 reviews)</span>
</div>
<p className="text-sm text-slate-400 mb-4 line-clamp-2 font-light">Authentic halal steakhouse serving premium cuts and artisanal sides in a family atmosphere.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-xs text-slate-500">Food &amp; Dining</span>
<button className="text-xs text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full transition-colors">View Profile</button>
</div>
</div>
</div>


<div className="glass-panel rounded-xl overflow-hidden group hover:border-emerald-500/30 transition-colors cursor-pointer" onclick="showPage('business-card')">
<div className="h-40 bg-gray-800 relative">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-1">
<h3 className="text-white font-semibold tracking-tight">Hana Fashion</h3>
<span className="text-xs font-mono text-slate-500 bg-white/5 px-1.5 py-0.5 rounded">CLOSED</span>
</div>
<div className="flex items-center gap-1 mb-3">
<div className="flex text-amber-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-slate-500">(56 reviews)</span>
</div>
<p className="text-sm text-slate-400 mb-4 line-clamp-2 font-light">Modern modest clothing for the contemporary woman. High quality fabrics and designs.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-xs text-slate-500">Retail</span>
<button className="text-xs text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full transition-colors">View Profile</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-content" id="business-card">
<div className="max-w-5xl mx-auto">
<button className="text-sm text-slate-500 hover:text-white mb-6 flex items-center gap-1" onclick="showPage('explore')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Directory
                </button>

<div className="glass-panel rounded-2xl overflow-hidden mb-8">
<div className="h-48 md:h-64 w-full relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
</div>
<div className="px-8 pb-8 -mt-12 relative flex flex-col md:flex-row items-end md:items-center justify-between gap-6">
<div className="flex items-end gap-6">
<div className="h-24 w-24 rounded-xl border-4 border-gray-900 bg-gray-800 flex items-center justify-center overflow-hidden">
<span className="text-2xl font-bold text-white">CG</span>
</div>
<div className="mb-2">
<div className="flex items-center gap-2 mb-1">
<h1 className="text-3xl font-semibold text-white tracking-tight">Crescent Grille</h1>
<iconify-icon className="text-emerald-400" icon="solar:verified-check-bold" width="20"></iconify-icon>
</div>
<div className="flex items-center gap-4 text-sm text-slate-400">
<span>Steakhouse &amp; Grill</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Queens, NY</span>
<span className="text-amber-400 flex items-center gap-1"><iconify-icon icon="solar:star-bold"></iconify-icon> 4.8</span>
</div>
</div>
</div>
<div className="flex gap-3 w-full md:w-auto">
<button className="flex-1 md:flex-none bg-white text-black px-5 py-2 rounded-lg font-medium text-sm hover:bg-gray-200">Contact</button>
<button className="flex-1 md:flex-none glass-panel text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-white/5 flex items-center justify-center gap-2">
<iconify-icon icon="solar:heart-linear"></iconify-icon> Save
                            </button>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="md:col-span-2 space-y-8">
<section>
<h2 className="text-xl font-semibold text-white mb-4">About</h2>
<p className="text-slate-400 font-light leading-relaxed">
                                Welcome to Crescent Grille, where passion meets plate. We are a family-owned establishment dedicated to serving 100% Zabiha Halal steaks, burgers, and artisanal sides. Our ingredients are locally sourced, ensuring the freshest taste in every bite. Come join us for a fine dining experience that respects your values.
                            </p>
</section>
<section>
<h2 className="text-xl font-semibold text-white mb-4">Features</h2>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1 rounded-full glass-panel text-xs text-white border border-white/10">100% Zabiha Halal</span>
<span className="px-3 py-1 rounded-full glass-panel text-xs text-white border border-white/10">Alcohol-Free Environment</span>
<span className="px-3 py-1 rounded-full glass-panel text-xs text-white border border-white/10">Prayer Space Available</span>
<span className="px-3 py-1 rounded-full glass-panel text-xs text-white border border-white/10">Family Friendly</span>
</div>
</section>
<section>
<div className="flex justify-between items-center mb-4">
<h2 className="text-xl font-semibold text-white">Active Deals</h2>
<span className="text-xs text-emerald-400 cursor-pointer">View all</span>
</div>
<div className="glass-panel p-4 rounded-xl flex items-center gap-4 relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
<div className="bg-emerald-500/20 p-3 rounded-lg text-emerald-400">
<iconify-icon icon="solar:tag-price-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">15% Off Weekday Lunch</h4>
<p className="text-xs text-slate-400">Valid Mon-Thu, 11am - 3pm. Mention UmmahCo.</p>
</div>
<button className="ml-auto text-xs bg-emerald-600 text-white px-3 py-1.5 rounded hover:bg-emerald-500">Redeem</button>
</div>
</section>
</div>

<div className="space-y-6">
<div className="glass-panel p-6 rounded-xl">
<h3 className="text-white font-medium mb-4">Information</h3>
<div className="space-y-4 text-sm">
<div className="flex items-start gap-3">
<iconify-icon className="text-slate-500 mt-0.5" icon="solar:clock-circle-linear"></iconify-icon>
<div>
<p className="text-white">Open Today</p>
<p className="text-slate-500 text-xs">11:00 AM - 10:00 PM</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-slate-500 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<p className="text-slate-400">32-15 37th Ave, <br/>Long Island City, NY 11101</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-slate-500 mt-0.5" icon="solar:phone-linear"></iconify-icon>
<p className="text-slate-400">+1 (718) 555-0123</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-slate-500 mt-0.5" icon="solar:globe-linear"></iconify-icon>
<a className="text-emerald-400 hover:underline" href="#">crescentgrille.com</a>
</div>
</div>
<div className="mt-6 pt-6 border-t border-white/5">
<div className="w-full h-32 bg-gray-700 rounded-lg flex items-center justify-center text-slate-500 text-xs">
                                    [Map Placeholder]
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-content" id="deals">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h1 className="text-4xl font-semibold text-white tracking-tight mb-4">Exclusive Deals</h1>
<p className="text-slate-400">Curated savings for the community. Save on food, fashion, and services.</p>
</div>
<div className="flex gap-4 mb-8 overflow-x-auto pb-2">
<button className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap">All Deals</button>
<button className="glass-panel text-slate-300 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-white/5 whitespace-nowrap">Food</button>
<button className="glass-panel text-slate-300 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-white/5 whitespace-nowrap">Fashion</button>
<button className="glass-panel text-slate-300 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-white/5 whitespace-nowrap">Services</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel rounded-xl overflow-hidden group">
<div className="h-48 relative">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">-20% OFF</div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-gray-700"></div>
<span className="text-xs text-slate-400">Healthy Bites</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">20% Off All Salad Bowls</h3>
<div className="flex items-center justify-between mt-4">
<div className="text-xs text-slate-500">Exp: 2 days left</div>
<button className="text-xs bg-white text-black px-3 py-1.5 rounded font-medium hover:bg-gray-200">Get Code</button>
</div>
</div>
</div>

<div className="glass-panel rounded-xl overflow-hidden group">
<div className="h-48 relative">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">BOGO</div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-gray-700"></div>
<span className="text-xs text-slate-400">Urban Halal</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Buy One Burger, Get One Free</h3>
<div className="flex items-center justify-between mt-4">
<div className="text-xs text-slate-500">Exp: 5 days left</div>
<button className="text-xs bg-white text-black px-3 py-1.5 rounded font-medium hover:bg-gray-200">Get Code</button>
</div>
</div>
</div>

<div className="glass-panel rounded-xl overflow-hidden group">
<div className="h-48 relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">$50 OFF</div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-gray-700"></div>
<span className="text-xs text-slate-400">Elite Detailing</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">$50 Off Full Car Detail</h3>
<div className="flex items-center justify-between mt-4">
<div className="text-xs text-slate-500">Exp: 1 week left</div>
<button className="text-xs bg-white text-black px-3 py-1.5 rounded font-medium hover:bg-gray-200">Get Code</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-content" id="membership">
<div className="max-w-7xl mx-auto text-center">
<h1 className="text-4xl font-semibold text-white tracking-tight mb-4">Membership Plans</h1>
<p className="text-slate-400 mb-16 max-w-2xl mx-auto">Support the community and unlock premium benefits.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="glass-panel rounded-2xl p-8 flex flex-col items-center">
<h3 className="text-white font-medium mb-2">Community</h3>
<div className="text-3xl font-bold text-white mb-6">$0<span className="text-sm text-slate-500 font-normal">/mo</span></div>
<ul className="space-y-3 text-sm text-slate-400 mb-8 w-full text-left">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Browse Directory</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Access Community Classifieds</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Save Favorites</li>
</ul>
<button className="mt-auto w-full glass-panel text-white py-2.5 rounded-lg hover:bg-white/5">Sign Up Free</button>
</div>

<div className="glass-panel rounded-2xl p-8 flex flex-col items-center border border-emerald-500/30 relative">
<div className="absolute -top-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
<h3 className="text-white font-medium mb-2">Ummah+</h3>
<div className="text-3xl font-bold text-white mb-6">$9<span className="text-sm text-slate-500 font-normal">/mo</span></div>
<ul className="space-y-3 text-sm text-slate-400 mb-8 w-full text-left">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> All Free Features</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> Exclusive Deals &amp; Codes</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> Early Access to Events</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> Verified Member Badge</li>
</ul>
<button className="mt-auto w-full bg-white text-black py-2.5 rounded-lg font-medium hover:bg-gray-200">Join Ummah+</button>
</div>

<div className="glass-panel rounded-2xl p-8 flex flex-col items-center">
<h3 className="text-white font-medium mb-2">Business</h3>
<div className="text-3xl font-bold text-white mb-6">$49<span className="text-sm text-slate-500 font-normal">/mo</span></div>
<ul className="space-y-3 text-sm text-slate-400 mb-8 w-full text-left">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Verified Business Profile</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Post Unlimited Deals</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Analytics Dashboard</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Priority Support</li>
</ul>
<button className="mt-auto w-full glass-panel text-white py-2.5 rounded-lg hover:bg-white/5" onclick="showPage('merchant-portal')">Get Started</button>
</div>
</div>
</div>
</div>

<div className="page-content" id="community">
<div className="max-w-6xl mx-auto">
<div className="mb-10 flex justify-between items-end">
<div>
<h1 className="text-3xl font-semibold text-white tracking-tight mb-2">Community Services</h1>
<p className="text-slate-400 text-sm">Buy, sell, hire, and connect with trusted members.</p>
</div>
<button className="bg-emerald-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-emerald-500 flex items-center gap-2">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Post Ad
                    </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div>
<div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
<iconify-icon className="text-purple-400" icon="solar:shop-2-linear"></iconify-icon>
<h2 className="text-lg font-medium text-white">Marketplace</h2>
</div>
<div className="space-y-2">
<div className="glass-panel p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
<div className="flex justify-between text-xs text-slate-500 mb-1">
<span>Furniture</span>
<span>Yesterday</span>
</div>
<h4 className="text-slate-200 text-sm font-medium group-hover:text-emerald-400">Moving Sale: IKEA Sofa &amp; Table</h4>
<p className="text-xs text-slate-500 mt-1">$150 • Brooklyn</p>
</div>
<div className="glass-panel p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
<div className="flex justify-between text-xs text-slate-500 mb-1">
<span>Electronics</span>
<span>2 days ago</span>
</div>
<h4 className="text-slate-200 text-sm font-medium group-hover:text-emerald-400">MacBook Pro M1 2020</h4>
<p className="text-xs text-slate-500 mt-1">$800 • Jersey City</p>
</div>
<div className="glass-panel p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
<div className="flex justify-between text-xs text-slate-500 mb-1">
<span>Cars</span>
<span>3 days ago</span>
</div>
<h4 className="text-slate-200 text-sm font-medium group-hover:text-emerald-400">2018 Honda Civic EX - Low Miles</h4>
<p className="text-xs text-slate-500 mt-1">$14,500 • Queens</p>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
<iconify-icon className="text-blue-400" icon="solar:case-linear"></iconify-icon>
<h2 className="text-lg font-medium text-white">Gigs &amp; Work</h2>
</div>
<div className="space-y-2">
<div className="glass-panel p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
<div className="flex justify-between text-xs text-slate-500 mb-1">
<span>Labor</span>
<span className="text-emerald-500">$20/hr</span>
</div>
<h4 className="text-slate-200 text-sm font-medium group-hover:text-emerald-400">Need help moving 2 bedroom apt</h4>
</div>
<div className="glass-panel p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
<div className="flex justify-between text-xs text-slate-500 mb-1">
<span>Tech</span>
<span className="text-emerald-500">Fixed</span>
</div>
<h4 className="text-slate-200 text-sm font-medium group-hover:text-emerald-400">Fix WordPress Website bugs</h4>
</div>
<div className="glass-panel p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
<div className="flex justify-between text-xs text-slate-500 mb-1">
<span>Tutor</span>
<span className="text-emerald-500">Neg.</span>
</div>
<h4 className="text-slate-200 text-sm font-medium group-hover:text-emerald-400">Quran Tutor needed for 2 kids</h4>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
<iconify-icon className="text-emerald-400" icon="solar:user-hand-up-linear"></iconify-icon>
<h2 className="text-lg font-medium text-white">Professional Services</h2>
</div>
<div className="space-y-3">
<div className="flex items-start gap-3 glass-panel p-3 rounded-lg hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded bg-gray-700 flex-shrink-0"></div>
<div>
<h4 className="text-white text-sm font-medium">Ali's Plumbing</h4>
<p className="text-xs text-slate-500">Licensed &amp; Insured. 24/7 Service.</p>
<div className="flex items-center gap-1 mt-1 text-amber-400 text-[10px]">
<iconify-icon icon="solar:star-bold"></iconify-icon> 5.0 (22)
                                    </div>
</div>
</div>
<div className="flex items-start gap-3 glass-panel p-3 rounded-lg hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded bg-gray-700 flex-shrink-0"></div>
<div>
<h4 className="text-white text-sm font-medium">Sarah Design Studio</h4>
<p className="text-xs text-slate-500">Interior design and renovation consulting.</p>
<div className="flex items-center gap-1 mt-1 text-amber-400 text-[10px]">
<iconify-icon icon="solar:star-bold"></iconify-icon> 4.9 (15)
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-content" id="merchant-portal">
<div className="max-w-4xl mx-auto text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
                    For Business Owners
                </div>
<h1 className="text-5xl font-semibold text-white tracking-tight mb-6">Grow your halal business with UmmahCo</h1>
<p className="text-lg text-slate-400 mb-10">Reach thousands of customers looking for verified halal products and services. Manage listings, deals, and reputation in one place.</p>
<div className="flex justify-center gap-4">
<button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200" onclick="showPage('merchant-dashboard')">Go to Dashboard</button>
<button className="glass-panel text-white px-8 py-3 rounded-full font-medium hover:bg-white/5">Learn More</button>
</div>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
<iconify-icon icon="solar:shop-2-bold" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Manage Listings</h3>
<p className="text-slate-400 text-sm leading-relaxed">Keep your hours, contact info, and gallery up to date. Get the "Verified" badge to build trust.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
<iconify-icon icon="solar:ticket-sale-bold" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Create Deals</h3>
<p className="text-slate-400 text-sm leading-relaxed">Drive foot traffic during slow hours with time-limited offers and exclusive vouchers.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0">
<iconify-icon icon="solar:chart-2-bold" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Track Analytics</h3>
<p className="text-slate-400 text-sm leading-relaxed">See how many people are viewing your profile, clicking your website, and redeeming deals.</p>
</div>
</div>
</div>
<div className="glass-panel rounded-xl p-6 border border-white/10 relative">

<div className="flex justify-between items-center mb-6">
<div className="text-sm font-medium text-white">Weekly Performance</div>
<div className="text-xs text-slate-500">Last 7 Days</div>
</div>
<div className="flex gap-2 items-end h-48 w-full">
<div className="bg-emerald-500/20 w-full rounded-t h-[40%]"></div>
<div className="bg-emerald-500/20 w-full rounded-t h-[60%]"></div>
<div className="bg-emerald-500/20 w-full rounded-t h-[45%]"></div>
<div className="bg-emerald-500/20 w-full rounded-t h-[80%]"></div>
<div className="bg-emerald-500 w-full rounded-t h-[90%] relative shadow-[0_0_15px_rgba(16,185,129,0.3)]"></div>
<div className="bg-emerald-500/20 w-full rounded-t h-[65%]"></div>
<div className="bg-emerald-500/20 w-full rounded-t h-[50%]"></div>
</div>
<div className="mt-4 flex justify-between text-xs text-slate-500">
<span>Mon</span><span>Sun</span>
</div>
</div>
</div>
</div>

<div className="page-content" id="merchant-dashboard">
<div className="max-w-6xl mx-auto">
<div className="flex justify-between items-center mb-8">
<div>
<h1 className="text-2xl font-semibold text-white tracking-tight">Dashboard</h1>
<p className="text-slate-400 text-sm">Welcome back, Crescent Grille</p>
</div>
<button className="bg-emerald-600 text-white text-sm px-4 py-2 rounded-lg font-medium hover:bg-emerald-500 flex items-center gap-2">
<iconify-icon icon="solar:add-circle-bold"></iconify-icon> New Deal
                    </button>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<div className="glass-panel p-5 rounded-xl">
<div className="text-xs text-slate-500 mb-1">Total Views</div>
<div className="text-2xl font-semibold text-white">2,543</div>
<div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon> +12%
                        </div>
</div>
<div className="glass-panel p-5 rounded-xl">
<div className="text-xs text-slate-500 mb-1">Deal Clicks</div>
<div className="text-2xl font-semibold text-white">432</div>
<div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon> +5%
                        </div>
</div>
<div className="glass-panel p-5 rounded-xl">
<div className="text-xs text-slate-500 mb-1">Redemptions</div>
<div className="text-2xl font-semibold text-white">89</div>
<div className="text-[10px] text-slate-400 mt-1">
                           This week
                        </div>
</div>
<div className="glass-panel p-5 rounded-xl">
<div className="text-xs text-slate-500 mb-1">Rating</div>
<div className="text-2xl font-semibold text-white">4.8</div>
<div className="text-[10px] text-amber-400 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon> 2 new
                        </div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">

<div className="glass-panel rounded-xl overflow-hidden">
<div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
<h3 className="text-sm font-medium text-white">Active Deals</h3>
<button className="text-xs text-slate-500 hover:text-white">View All</button>
</div>
<div className="p-0">
<table className="w-full text-left text-sm text-slate-400">
<thead className="bg-white/5 text-xs text-slate-300 uppercase">
<tr>
<th className="px-6 py-3 font-medium">Deal Name</th>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 font-medium">Redeemed</th>
<th className="px-6 py-3 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr>
<td className="px-6 py-4 font-medium text-white">15% Off Weekday Lunch</td>
<td className="px-6 py-4"><span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded text-xs">Active</span></td>
<td className="px-6 py-4">42</td>
<td className="px-6 py-4 text-right"><iconify-icon className="cursor-pointer hover:text-white" icon="solar:menu-dots-bold"></iconify-icon></td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-white">Ramadan Special Family Bundle</td>
<td className="px-6 py-4"><span className="bg-gray-700/50 text-slate-400 px-2 py-0.5 rounded text-xs">Draft</span></td>
<td className="px-6 py-4">-</td>
<td className="px-6 py-4 text-right"><iconify-icon className="cursor-pointer hover:text-white" icon="solar:menu-dots-bold"></iconify-icon></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="space-y-6">
<div className="glass-panel p-6 rounded-xl">
<h3 className="text-sm font-medium text-white mb-4">Quick Actions</h3>
<div className="space-y-2">
<button className="w-full text-left px-4 py-2 rounded-lg hover:bg-white/5 text-sm text-slate-300 flex items-center gap-3 transition-colors">
<iconify-icon icon="solar:pen-linear"></iconify-icon> Edit Profile
                                </button>
<button className="w-full text-left px-4 py-2 rounded-lg hover:bg-white/5 text-sm text-slate-300 flex items-center gap-3 transition-colors">
<iconify-icon icon="solar:ticket-linear"></iconify-icon> View Vouchers
                                </button>
<button className="w-full text-left px-4 py-2 rounded-lg hover:bg-white/5 text-sm text-slate-300 flex items-center gap-3 transition-colors">
<iconify-icon icon="solar:case-linear"></iconify-icon> Post a Job
                                </button>
<button className="w-full text-left px-4 py-2 rounded-lg hover:bg-white/5 text-sm text-slate-300 flex items-center gap-3 transition-colors">
<iconify-icon icon="solar:settings-linear"></iconify-icon> Settings
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 py-12 bg-black/20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Discover</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#" onclick="showPage('explore')">Businesses</a></li>
<li><a className="hover:text-white transition-colors" href="#" onclick="showPage('deals')">Deals</a></li>
<li><a className="hover:text-white transition-colors" href="#" onclick="showPage('community')">Community</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Business</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#" onclick="showPage('merchant-portal')">Merchant Portal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Advertise</a></li>
<li><a className="hover:text-white transition-colors" href="#">Success Stories</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Newsletter</h4>
<p className="text-xs text-slate-500 mb-4">Join our newsletter to stay up to date on features and releases.</p>
<div className="flex gap-2">
<input className="bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm text-white w-full focus:outline-none focus:border-emerald-500" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black text-xs font-medium px-3 py-2 rounded-md hover:bg-gray-200">Subscribe</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
<div className="flex items-center gap-2 text-slate-500 text-sm">
<iconify-icon icon="solar:copyright-linear" strokeWidth="1.5"></iconify-icon>
<span>2024 UmmahCo Inc.</span>
</div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
