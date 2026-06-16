import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



function navigate(pageId) {
// Hide all pages
document.querySelectorAll('.page-section').forEach(el => {
el.classList.add('hidden');
el.classList.remove('fade-in');
});
// Show selected page
const selected = document.getElementById(pageId);
selected.classList.remove('hidden');
selected.classList.add('fade-in');
// Update nav state
document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('text-white', 'text-neutral-400'));
document.querySelectorAll('.nav-link').forEach(el => el.classList.add('text-neutral-400'));
// Highlight active link if exists
const activeLink = document.querySelector(`[data-target="${pageId}"]`);
if (activeLink) {
activeLink.classList.remove('text-neutral-400');
activeLink.classList.add('text-white');
}
window.scrollTo(0,0);
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-[-1]">
<div className="grain-bg absolute inset-0 opacity-20"></div>
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[120px]"></div>
</div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer" onclick="navigate('home')">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-600 to-amber-800 flex items-center justify-center text-black text-[10px] font-bold tracking-tighter">V</div>
<span className="text-sm font-medium tracking-widest text-white">VELVET &amp; OAK</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<button className="nav-link text-xs font-medium text-neutral-400 hover:text-white transition-colors" data-target="collection" onclick="navigate('collection')">COLLECTION</button>
<button className="nav-link text-xs font-medium text-neutral-400 hover:text-white transition-colors" data-target="distillery" onclick="navigate('distillery')">DISTILLERY</button>
<button className="nav-link text-xs font-medium text-neutral-400 hover:text-white transition-colors" data-target="membership" onclick="navigate('membership')">MEMBERSHIP</button>
</nav>
<div className="flex items-center gap-4">
<button className="text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="md:hidden text-neutral-400">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="flex-grow pt-16">

<div className="page-section fade-in" id="home">

<section className="relative pt-20 pb-20 md:pt-32 md:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-900/30 bg-amber-900/10 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
<span className="text-xs font-medium text-amber-500 tracking-wide uppercase">Batch 042 Released</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1] mb-6">
                            The Spirit <br/>
<span className="text-neutral-500">of Patience.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-lg font-light leading-relaxed mb-10">
                            Aged 18 years in rare Scottish oak casks. A symphony of smoke, vanilla, and time. Experience the pinnacle of distilling craftsmanship.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full p-[1px] focus:outline-none" onclick="navigate('collection')">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d97706_0%,#000000_50%,#d97706_100%)]"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors hover:bg-neutral-900 hover:text-amber-500">
                                    Reserve Bottle
                                    <iconify-icon className="ml-2 transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</button>
<button className="group inline-flex h-12 items-center justify-center rounded-full border border-neutral-800 bg-transparent px-8 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/5 hover:text-white focus:outline-none" onclick="navigate('distillery')">
                                View Process
                            </button>
</div>
</div>
<div className="relative flex items-center justify-center h-[500px] lg:h-auto">
<div className="sonar-wrapper w-64 h-64 flex items-center justify-center">
<div className="sonar-wave"></div>
<div className="sonar-wave"></div>
<div className="sonar-wave"></div>
<div className="sonar-emitter relative w-48 h-full rounded-2xl bg-gradient-to-b from-amber-900/20 to-black border border-white/10 flex items-center justify-center backdrop-blur-sm overflow-hidden group hover:border-amber-700/50 transition-colors duration-500 amber-glow">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col items-center gap-4">
<div className="w-20 h-48 bg-gradient-to-b from-amber-400 to-amber-700 opacity-80 blur-[20px] rounded-full absolute top-10"></div>
<div className="relative z-20 text-center">
<div className="w-12 h-12 mx-auto rounded-full border border-amber-500/30 flex items-center justify-center bg-black/50 backdrop-blur-md mb-4">
<iconify-icon className="text-amber-500" icon="lucide:glass-water" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white tracking-widest uppercase">Reserve</h3>
<p className="text-xs text-amber-500 mt-1">Single Malt</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-neutral-950/30">
<div className="max-w-7xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900/50 to-black relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-20"></div>
<div className="grid md:grid-cols-2">
<div className="p-12 md:p-20 flex flex-col justify-center">
<span className="text-amber-500 text-xs font-semibold tracking-widest uppercase mb-4">The Flagship</span>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Obsidian Reserve</h2>
<p className="text-neutral-400 mb-8 leading-relaxed">
                                Notes of dark chocolate, dried figs, and a whisper of peat smoke. The Obsidian Reserve is our master distiller's crowning achievement.
                            </p>
<div className="flex items-center gap-6">
<button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors">Purchase $240.00</button>
</div>
</div>
<div className="relative bg-neutral-900/20 min-h-[400px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-black/50 to-black"></div>
<div className="relative z-10 w-48 h-80 rounded-t-[4rem] rounded-b-2xl border border-white/10 backdrop-blur-sm bg-gradient-to-br from-amber-950/30 to-black flex flex-col items-center justify-end pb-8 shadow-2xl">
<div className="absolute inset-0 rounded-t-[4rem] rounded-b-2xl border border-amber-500/10"></div>
<div className="w-full h-2/3 bg-gradient-to-t from-amber-600/10 to-transparent absolute bottom-0 rounded-b-2xl"></div>
<div className="text-center z-10">
<h4 className="text-amber-500 font-serif italic text-xl">Obsidian</h4>
<p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mt-1">Single Malt</p>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden" id="collection">
<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">The Archives</h1>
<p className="text-neutral-400 font-light text-lg">Rare releases and signature blends.</p>
</div>
<div className="flex items-center gap-2 bg-neutral-900 rounded-full p-1 border border-white/10">
<button className="px-4 py-1.5 rounded-full bg-neutral-800 text-white text-xs font-medium border border-white/10 shadow-sm">All Spirits</button>
<button className="px-4 py-1.5 rounded-full text-neutral-400 text-xs font-medium hover:text-white transition-colors">Limited</button>
<button className="px-4 py-1.5 rounded-full text-neutral-400 text-xs font-medium hover:text-white transition-colors">Cask Strength</button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative bg-neutral-900/20 rounded-2xl border border-white/5 p-6 hover:border-amber-900/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
<div className="aspect-[3/4] mb-6 rounded-xl bg-gradient-to-b from-neutral-800/30 to-black border border-white/5 flex items-center justify-center relative overflow-hidden">
<div className="w-24 h-48 bg-amber-900/20 blur-xl rounded-full absolute"></div>
<div className="relative z-10 w-20 h-40 border border-white/10 rounded-t-3xl rounded-b-lg bg-black/40 backdrop-blur-sm flex flex-col justify-end items-center pb-4">
<span className="text-[8px] tracking-widest uppercase text-amber-500">Gold</span>
</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-white">Highland 12 Year</h3>
<span className="text-white font-medium">$85</span>
</div>
<p className="text-sm text-neutral-500 mb-6 line-clamp-2">Honeyed heather and soft spice. A perfect introduction to our signature profile.</p>
<button className="w-full py-3 rounded-lg border border-white/10 bg-white/5 text-sm text-white hover:bg-white hover:text-black transition-colors font-medium">
                            Add to Cart
                        </button>
</div>

<div className="group relative bg-neutral-900/20 rounded-2xl border border-white/5 p-6 hover:border-amber-900/30 transition-all duration-300">
<div className="aspect-[3/4] mb-6 rounded-xl bg-gradient-to-b from-neutral-800/30 to-black border border-white/5 flex items-center justify-center relative overflow-hidden">
<div className="w-24 h-48 bg-amber-700/20 blur-xl rounded-full absolute"></div>
<div className="relative z-10 w-20 h-40 border border-white/10 rounded-t-3xl rounded-b-lg bg-black/40 backdrop-blur-sm flex flex-col justify-end items-center pb-4">
<span className="text-[8px] tracking-widest uppercase text-amber-500">Rare</span>
</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-white">Obsidian Reserve</h3>
<span className="text-white font-medium">$240</span>
</div>
<p className="text-sm text-neutral-500 mb-6 line-clamp-2">Our flagship 18-year single malt. Deep, complex, and unforgettably smoky.</p>
<button className="w-full py-3 rounded-lg border border-white/10 bg-white/5 text-sm text-white hover:bg-white hover:text-black transition-colors font-medium">
                            Add to Cart
                        </button>
</div>

<div className="group relative bg-neutral-900/20 rounded-2xl border border-white/5 p-6 hover:border-amber-900/30 transition-all duration-300">
<div className="absolute top-4 right-4 z-20 px-2 py-1 rounded bg-amber-900/20 border border-amber-900/50 text-[10px] text-amber-500 font-medium uppercase tracking-wider">Sold Out</div>
<div className="aspect-[3/4] mb-6 rounded-xl bg-gradient-to-b from-neutral-800/30 to-black border border-white/5 flex items-center justify-center relative overflow-hidden opacity-50">
<div className="w-24 h-48 bg-neutral-700/20 blur-xl rounded-full absolute"></div>
<div className="relative z-10 w-20 h-40 border border-white/10 rounded-t-3xl rounded-b-lg bg-black/40 backdrop-blur-sm flex flex-col justify-end items-center pb-4">
<span className="text-[8px] tracking-widest uppercase text-neutral-500">Ghost</span>
</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-neutral-400">The Ghost Cask</h3>
<span className="text-neutral-500 font-medium">$850</span>
</div>
<p className="text-sm text-neutral-600 mb-6 line-clamp-2">A single cask bottling from 1992. Only 48 bottles exist in the world.</p>
<button className="w-full py-3 rounded-lg border border-white/5 bg-transparent text-sm text-neutral-600 cursor-not-allowed font-medium" disabled="">
                            Unavailable
                        </button>
</div>
</div>
</section>
</div>

<div className="page-section hidden" id="distillery">
<section className="py-24 px-6 max-w-5xl mx-auto">
<div className="text-center mb-20">
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">Process &amp; Place</h1>
<p className="text-neutral-400 font-light text-lg max-w-2xl mx-auto">
                        Nestled in the shadows of the Cairngorms, our distillery operates on the same principles it did two centuries ago: patience, purity, and provenance.
                    </p>
</div>
<div className="relative border-l border-white/10 ml-4 md:ml-10 space-y-16">

<div className="relative pl-12">
<div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-amber-500 ring-4 ring-black"></div>
<div className="grid md:grid-cols-2 gap-10">
<div>
<h3 className="text-xl text-white font-medium mb-2">The Malting Floor</h3>
<p className="text-neutral-500 leading-relaxed text-sm">
                                    We are one of only six distilleries left in Scotland that still utilizes traditional floor malting. The barley is turned by hand every four hours to ensure even germination, releasing the enzymes required to convert starch into sugar.
                                </p>
</div>
<div className="h-48 rounded-xl bg-neutral-900 border border-white/5 overflow-hidden flex items-center justify-center">
<iconify-icon className="text-neutral-700 opacity-20" icon="lucide:wheat" width="80"></iconify-icon>
</div>
</div>
</div>

<div className="relative pl-12">
<div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-600 ring-4 ring-black"></div>
<div className="grid md:grid-cols-2 gap-10">
<div>
<h3 className="text-xl text-white font-medium mb-2">Copper Pot Stills</h3>
<p className="text-neutral-500 leading-relaxed text-sm">
                                    Our lantern-shaped copper stills have unusually tall necks. This increases the amount of copper contact with the spirit vapor, stripping away sulphury compounds and resulting in our signature light, fruity new-make spirit.
                                </p>
</div>
<div className="h-48 rounded-xl bg-neutral-900 border border-white/5 overflow-hidden flex items-center justify-center">
<iconify-icon className="text-neutral-700 opacity-20" icon="lucide:flask-conical" width="80"></iconify-icon>
</div>
</div>
</div>

<div className="relative pl-12">
<div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-600 ring-4 ring-black"></div>
<div className="grid md:grid-cols-2 gap-10">
<div>
<h3 className="text-xl text-white font-medium mb-2">The Warehouse</h3>
<p className="text-neutral-500 leading-relaxed text-sm">
                                    Earthen floors and stone walls maintain a constant cool temperature and high humidity. Here, the whisky sleeps in Oloroso Sherry butts and American Oak bourbon barrels, breathing in the Highland air for a minimum of 12 years.
                                </p>
</div>
<div className="h-48 rounded-xl bg-neutral-900 border border-white/5 overflow-hidden flex items-center justify-center">
<iconify-icon className="text-neutral-700 opacity-20" icon="lucide:warehouse" width="80"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="mt-20 p-10 rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-white/10 text-center">
<h3 className="text-2xl text-white font-medium mb-4">Visit Us</h3>
<p className="text-neutral-400 text-sm mb-8">Tours available Monday — Saturday.</p>
<button className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-sm font-medium text-black hover:bg-neutral-200 transition-colors">
                        Book a Tour
                    </button>
</div>
</section>
</div>

<div className="page-section hidden" id="membership">
<section className="py-24 px-6 max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="text-amber-500 text-xs font-bold tracking-widest uppercase">The Cask Club</span>
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mt-4 mb-6">Join the Inner Circle</h1>
<p className="text-neutral-400 font-light max-w-xl mx-auto">
                        Unlock access to private cask bottlings, annual distillery events, and priority reservations on all limited releases.
                    </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="rounded-2xl border border-white/10 bg-neutral-900/20 p-8 flex flex-col">
<h3 className="text-xl font-medium text-white mb-2">Copper</h3>
<p className="text-sm text-neutral-500 mb-6">Entry level access.</p>
<div className="mb-8">
<span className="text-3xl font-light text-white">$150</span>
<span className="text-xs text-neutral-500">/year</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-amber-600" icon="lucide:check"></iconify-icon> Quarterly Newsletter
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-amber-600" icon="lucide:check"></iconify-icon> 5% Shop Discount
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-amber-600" icon="lucide:check"></iconify-icon> 1 Complimentary Tour
                            </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 bg-transparent text-sm text-white hover:bg-white hover:text-black transition-colors font-medium">Join Copper</button>
</div>

<div className="relative rounded-2xl border border-amber-500/30 bg-gradient-to-b from-neutral-900/80 to-black p-8 flex flex-col shadow-2xl shadow-amber-900/10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Most Popular</div>
<h3 className="text-xl font-medium text-white mb-2">Silver Oak</h3>
<p className="text-sm text-neutral-500 mb-6">For the serious enthusiast.</p>
<div className="mb-8">
<span className="text-3xl font-light text-white">$400</span>
<span className="text-xs text-neutral-500">/year</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-amber-500" icon="lucide:check"></iconify-icon> Early Access Releases
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-amber-500" icon="lucide:check"></iconify-icon> 10% Shop Discount
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-amber-500" icon="lucide:check"></iconify-icon> 4 Complimentary Tours
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-amber-500" icon="lucide:check"></iconify-icon> Exclusive Welcome Bottle
                            </li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-amber-600 text-sm text-white hover:bg-amber-500 transition-colors font-medium shadow-lg shadow-amber-900/20">Join Silver Oak</button>
</div>

<div className="rounded-2xl border border-white/10 bg-neutral-900/20 p-8 flex flex-col">
<h3 className="text-xl font-medium text-white mb-2">Obsidian</h3>
<p className="text-sm text-neutral-500 mb-6">The pinnacle experience.</p>
<div className="mb-8">
<span className="text-3xl font-light text-white">$1,200</span>
<span className="text-xs text-neutral-500">/year</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-amber-600" icon="lucide:check"></iconify-icon> Guaranteed Allocations
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-amber-600" icon="lucide:check"></iconify-icon> 15% Shop Discount
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-amber-600" icon="lucide:check"></iconify-icon> Unlimited Private Tours
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-amber-600" icon="lucide:check"></iconify-icon> Private Cask Sampling
                            </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 bg-transparent text-sm text-white hover:bg-white hover:text-black transition-colors font-medium">Apply for Obsidian</button>
</div>
</div>
</section>
</div>
</main>
<footer className="border-t border-white/5 bg-black pt-20 pb-10 mt-auto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center text-[8px] font-bold text-neutral-400">V</div>
<span className="text-sm font-medium tracking-widest text-white">VELVET &amp; OAK</span>
</div>
<p className="text-sm text-neutral-500 max-w-sm">
                        Crafting spirits that honor the past and inspire the future. Please drink responsibly.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Shop</h4>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#" onclick="navigate('collection')">All Whiskeys</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#" onclick="navigate('collection')">Limited Editions</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Merchandise</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#" onclick="navigate('distillery')">Our Story</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#" onclick="navigate('distillery')">Visit Distillery</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<p className="text-xs text-neutral-600">© 2023 Velvet &amp; Oak Distillery. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
