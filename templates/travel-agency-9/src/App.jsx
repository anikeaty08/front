import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function showPage(pageId) {
            document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
            document.getElementById(pageId).classList.add('active');
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if(link.innerText.toLowerCase() === pageId) {
                    link.classList.add('active');
                }
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-2xl font-semibold tracking-tighter text-indigo-600 cursor-pointer flex items-center" onclick="showPage('home')">
<span>R</span><span className="text-slate-300 font-light mx-px">/</span><span>N</span><span className="text-slate-300 font-light mx-px">/</span><span>S</span>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
<button className="nav-link py-5 transition-all hover:text-indigo-600" onclick="showPage('domestic')">Domestic</button>
<button className="nav-link py-5 transition-all hover:text-indigo-600" onclick="showPage('international')">International</button>
<button className="nav-link py-5 transition-all hover:text-indigo-600" onclick="showPage('ethos')">Our Ethos</button>
<button className="nav-link py-5 transition-all hover:text-indigo-600" onclick="showPage('reviews')">Reviews</button>
</div>
<div className="flex items-center space-x-4">
<button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-sm">
                    Plan My Trip
                </button>
</div>
</div>
</nav>

<main className="page-content active" id="home">

<header className="relative pt-16 pb-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium mb-6">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<span>No hidden fees, just pure adventure</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
                        Travel as <br/><span className="text-indigo-600">it should be.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed">
                        Experience domestic hidden gems and international wonders with radical transparency and human-led support.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-medium text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200" onclick="showPage('international')">
                            Explore Destinations
                        </button>
<button className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-medium text-sm hover:bg-slate-50 transition-all" onclick="showPage('ethos')">
                            How we work
                        </button>
</div>
</div>
<div className="relative">
<div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-10 left-10 text-white">
<p className="text-xs uppercase tracking-widest font-medium opacity-80 mb-2">Featured Expedition</p>
<p className="text-2xl font-semibold tracking-tight">The Atlas Mountains, Morocco</p>
</div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
<div className="flex items-center space-x-4">
<div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
<iconify-icon className="text-xl" icon="solar:globus-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 font-medium">Active Souls</p>
<p className="text-lg font-semibold tracking-tight">12,400+</p>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-12 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-8 flex justify-between items-end">
<div>
<h2 className="text-3xl font-semibold tracking-tight">Weekly Inspiration</h2>
<p className="text-slate-500 text-sm">Hand-picked snapshots from our recent community trips.</p>
</div>
<div className="flex space-x-2">
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-all">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto space-x-6 px-6 hide-scrollbar snap-x snap-mandatory">
<div className="flex-none w-[300px] md:w-[450px] snap-start">
<img className="w-full h-[500px] object-cover rounded-[2.5rem] mb-4" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">Alpine Retreats</p>
<p className="text-sm text-slate-500">The misty peaks of Switzerland's hidden valleys.</p>
</div>
<div className="flex-none w-[300px] md:w-[450px] snap-start">
<img className="w-full h-[500px] object-cover rounded-[2.5rem] mb-4" src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">Venetian Mornings</p>
<p className="text-sm text-slate-500">Watching the sunrise over the Grand Canal, solo.</p>
</div>
<div className="flex-none w-[300px] md:w-[450px] snap-start">
<img className="w-full h-[500px] object-cover rounded-[2.5rem] mb-4" src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">Parisian Solitude</p>
<p className="text-sm text-slate-500">Early hours in the 5th Arrondissement.</p>
</div>
<div className="flex-none w-[300px] md:w-[450px] snap-start">
<img className="w-full h-[500px] object-cover rounded-[2.5rem] mb-4" src="https://images.unsplash.com/photo-1512100356956-c1226c693919?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">Desert Dreams</p>
<p className="text-sm text-slate-500">Star-gazing in the heart of Wadi Rum.</p>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-3 gap-16">
<div className="lg:col-span-1">
<h2 className="text-4xl font-semibold tracking-tight mb-6">Our DNA is <br/>different.</h2>
<p className="text-slate-500 leading-relaxed mb-8">We believe travel shouldn't be a transaction. It's an exchange of energy, stories, and growth.</p>
<button className="flex items-center text-sm font-semibold text-indigo-600 group" onclick="showPage('ethos')">
                            Read our full manifesto 
                            <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="lg:col-span-2 grid md:grid-cols-2 gap-12">
<div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
<iconify-icon className="text-3xl text-indigo-600 mb-6" icon="solar:wallet-linear"></iconify-icon>
<h4 className="text-xl font-semibold tracking-tight mb-3">Transparent Costing</h4>
<p className="text-sm text-slate-500 leading-relaxed">We show you our exact profit margin. No hidden markups on hotels or transport, ever.</p>
</div>
<div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
<iconify-icon className="text-3xl text-indigo-600 mb-6" icon="solar:map-point-wave-linear"></iconify-icon>
<h4 className="text-xl font-semibold tracking-tight mb-3">Hyper-Local Intel</h4>
<p className="text-sm text-slate-500 leading-relaxed">Our itineraries are built by people who actually live there, not by algorithms.</p>
</div>
<div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
<iconify-icon className="text-3xl text-indigo-600 mb-6" icon="solar:chat-round-check-linear"></iconify-icon>
<h4 className="text-xl font-semibold tracking-tight mb-3">WhatsApp Support</h4>
<p className="text-sm text-slate-500 leading-relaxed">A real human on the other end of the line, 24/7. No bots, just buddies.</p>
</div>
<div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
<iconify-icon className="text-3xl text-indigo-600 mb-6" icon="solar:leaf-linear"></iconify-icon>
<h4 className="text-xl font-semibold tracking-tight mb-3">Slow Impact</h4>
<p className="text-sm text-slate-500 leading-relaxed">We focus on long-stay travel that benefits the local community directly.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4 block">The Nomad Aesthetic</span>
<h2 className="text-4xl font-semibold tracking-tight">Moments of Pure Presence</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
<div className="space-y-4 md:space-y-6">
<img className="w-full h-80 object-cover rounded-[2rem]" src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<img className="w-full h-48 object-cover rounded-[2rem]" src="https://images.unsplash.com/photo-1532339142463-fd0a89b28fd1?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="space-y-4 md:space-y-6 pt-12">
<img className="w-full h-48 object-cover rounded-[2rem]" src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<img className="w-full h-80 object-cover rounded-[2rem]" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="space-y-4 md:space-y-6">
<img className="w-full h-80 object-cover rounded-[2rem]" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<img className="w-full h-48 object-cover rounded-[2rem]" src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="space-y-4 md:space-y-6 pt-12">
<img className="w-full h-48 object-cover rounded-[2rem]" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<img className="w-full h-80 object-cover rounded-[2rem]" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-indigo-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">Ready to write your next chapter?</h2>
<p className="text-indigo-100 text-lg mb-12">Join 12,000+ travelers who have found their soul in the journey.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-semibold text-sm hover:bg-indigo-50 transition-all">Start Your Itinerary</button>
<button className="bg-indigo-700 text-white px-10 py-4 rounded-2xl font-semibold text-sm hover:bg-indigo-800 transition-all">Talk to a Guide</button>
</div>
</div>

<div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full opacity-50 blur-3xl"></div>
<div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-400 rounded-full opacity-30 blur-3xl"></div>
</div>
</div>
</section>
</main>

<main className="page-content" id="domestic">
<section className="py-20 max-w-7xl mx-auto px-6">
<div className="mb-16">
<h1 className="text-4xl font-semibold tracking-tight mb-4">Domestic Hidden Gems</h1>
<p className="text-slate-500 max-w-2xl">Discover the extraordinary in your own backyard. These are not your typical tourist traps—they are curated local experiences.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white rounded-[2.5rem] p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
<div className="aspect-video rounded-[2rem] overflow-hidden mb-6 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-semibold">Pacific Northwest</div>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-4">
<h3 className="text-xl font-semibold tracking-tight">The Lost Coast Trail</h3>
<span className="text-indigo-600 font-semibold">$1,200</span>
</div>
<p className="text-sm text-slate-500 mb-6 italic leading-relaxed">"A rugged 5-day backpacking journey through California's most secluded coastline."</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-50">
<div className="flex space-x-2">
<span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] font-medium">Hiking</span>
<span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] font-medium">Camping</span>
</div>
<button className="text-sm font-semibold text-indigo-600 flex items-center">View Details <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>
<div className="bg-white rounded-[2.5rem] p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
<div className="aspect-video rounded-[2rem] overflow-hidden mb-6 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-semibold">The South</div>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-4">
<h3 className="text-xl font-semibold tracking-tight">Blue Ridge Autumn</h3>
<span className="text-indigo-600 font-semibold">$850</span>
</div>
<p className="text-sm text-slate-500 mb-6 italic leading-relaxed">"A culinary and photography focused tour of the Appalachian backroads."</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-50">
<div className="flex space-x-2">
<span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] font-medium">Culinary</span>
<span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] font-medium">Photography</span>
</div>
<button className="text-sm font-semibold text-indigo-600 flex items-center">View Details <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page-content" id="international">
<section className="py-20 max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h1 className="text-4xl font-semibold tracking-tight mb-4">Global Expeditions</h1>
<p className="text-slate-500 max-w-xl">Curated long-haul journeys designed to connect you with the soul of a culture, not just its monuments.</p>
</div>
<div className="flex bg-white p-1 rounded-2xl border border-slate-200">
<button className="px-6 py-2 bg-slate-900 text-white rounded-xl text-xs font-medium">All</button>
<button className="px-6 py-2 text-slate-500 hover:text-slate-900 rounded-xl text-xs font-medium">Asia</button>
<button className="px-6 py-2 text-slate-500 hover:text-slate-900 rounded-xl text-xs font-medium">Europe</button>
<button className="px-6 py-2 text-slate-500 hover:text-slate-900 rounded-xl text-xs font-medium">Americas</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="group cursor-pointer">
<div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-6">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white">
<p className="text-xs font-medium mb-1 opacity-80 uppercase tracking-widest">Morocco</p>
<h3 className="text-2xl font-semibold tracking-tight">Sahara Solitude</h3>
</div>
</div>
</div>
<div className="group cursor-pointer">
<div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-6">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white">
<p className="text-xs font-medium mb-1 opacity-80 uppercase tracking-widest">England</p>
<h3 className="text-2xl font-semibold tracking-tight">London Fog Trails</h3>
</div>
</div>
</div>
<div className="group cursor-pointer">
<div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-6">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white">
<p className="text-xs font-medium mb-1 opacity-80 uppercase tracking-widest">Iceland</p>
<h3 className="text-2xl font-semibold tracking-tight">Glacier Echoes</h3>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page-content" id="ethos">
<section className="py-24 max-w-5xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4 block">Our DNA</span>
<h1 className="text-5xl font-semibold tracking-tight leading-tight">Travel should be honest. <br/>Travel should be human.</h1>
</div>
<div className="space-y-32">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-2xl font-semibold tracking-tight mb-6">The "No-Markup" Manifesto</h2>
<p className="text-slate-500 leading-relaxed text-sm mb-6">Traditional agencies hide their margins within "package prices." We don't. You see exactly what the hotel costs, what the guide earns, and the 12% flat fee we charge to keep our lights on.</p>
<ul className="space-y-3">
<li className="flex items-center text-sm text-slate-700 font-medium">
<iconify-icon className="text-indigo-500 mr-3" icon="solar:check-circle-linear"></iconify-icon> Real-time expense dashboard
                            </li>
<li className="flex items-center text-sm text-slate-700 font-medium">
<iconify-icon className="text-indigo-500 mr-3" icon="solar:check-circle-linear"></iconify-icon> Direct-to-provider payments
                            </li>
</ul>
</div>
<div className="bg-indigo-50 rounded-[3rem] p-12 aspect-square flex flex-col justify-center">
<div className="text-4xl font-semibold tracking-tighter text-indigo-600 mb-2">12%</div>
<p className="text-sm font-medium text-indigo-900/60">Our only fee. Ever. Period.</p>
</div>
</div>
</div>
</section>
</main>

<main className="page-content" id="reviews">
<section className="py-20 max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h1 className="text-4xl font-semibold tracking-tight mb-4">Postcards from the Soul</h1>
<p className="text-slate-500">Real stories from our global community of wanderers.</p>
</div>
<div className="columns-1 md:columns-3 gap-8 space-y-8">
<div className="break-inside-avoid bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
<div className="flex space-x-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6">"I've traveled for 20 years, but I've never felt so connected to a place as I did in Kyoto. Having a 'travel buddy' on WhatsApp saved us twice."</p>
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-indigo-100"></div>
<div>
<p className="text-xs font-semibold">Sarah Jenkins</p>
<p className="text-[10px] text-slate-400">Kyoto Trails, 2023</p>
</div>
</div>
</div>
<div className="break-inside-avoid bg-indigo-600 p-8 rounded-3xl text-white">
<iconify-icon className="text-4xl text-indigo-300 mb-6" icon="solar:chat-square-quote-linear"></iconify-icon>
<p className="text-lg font-medium leading-relaxed mb-8 italic">"The transparency is what sold me. Seeing exactly where my money was going made me feel good about the trip."</p>
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-white/20"></div>
<div>
<p className="text-xs font-semibold">Marcus T.</p>
<p className="text-[10px] text-white/60">Iceland Expedition</p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white pt-20 pb-10 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div>
<div className="text-2xl font-semibold tracking-tighter text-indigo-600 mb-6">R/N/S</div>
<p className="text-slate-500 text-sm leading-relaxed">Redefining travel through honesty, support, and authentic local experiences.</p>
</div>
<div>
<h4 className="font-semibold text-sm mb-6">Destinations</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><button className="hover:text-indigo-600" onclick="showPage('international')">Southeast Asia</button></li>
<li><button className="hover:text-indigo-600" onclick="showPage('domestic')">Local Hideaways</button></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm mb-6">Company</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><button className="hover:text-indigo-600" onclick="showPage('ethos')">Our Story</button></li>
<li><button className="hover:text-indigo-600" onclick="showPage('ethos')">Pricing Policy</button></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm mb-6">Newsletter</h4>
<div className="relative">
<input className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-indigo-600" placeholder="Your email" type="email"/>
<button className="absolute right-2 top-2 bg-indigo-600 text-white p-1.5 rounded-lg">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Real Nomadic Soul.</p>
<div className="flex space-x-6">
<iconify-icon className="text-slate-400 hover:text-indigo-600 transition-colors text-xl" icon="solar:camera-linear"></iconify-icon>
<iconify-icon className="text-slate-400 hover:text-indigo-600 transition-colors text-xl" icon="solar:share-circle-linear"></iconify-icon>
</div>
</div>
</div>
</footer>


    </>
  );
}
