import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
neutral: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
}
}
}
}
}



        function switchView(viewName) {
            // Hide all views
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.remove('active');
                setTimeout(() => {
                    if(!el.classList.contains('active')) el.style.display = 'none';
                }, 300); // Match transition
            });

            // Show selected view
            const selected = document.getElementById('view-' + viewName);
            if (selected) {
                selected.style.display = 'block';
                // Small delay to allow display:block to apply before opacity transition
                setTimeout(() => {
                    selected.classList.add('active');
                }, 10);
                window.scrollTo(0, 0);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-base font-semibold tracking-tight flex items-center gap-2" href="#" onclick="switchView('landing')">
<iconify-icon className="text-neutral-900" icon="solar:globus-linear" width="20"></iconify-icon>
                    JOURNEYLOG
                </a>
<div className="hidden md:flex gap-6">
<button className="text-neutral-500 hover:text-neutral-900 transition-colors font-medium" onclick="switchView('explore')">Explore</button>
<button className="text-neutral-500 hover:text-neutral-900 transition-colors font-medium">Destinations</button>
<button className="text-neutral-500 hover:text-neutral-900 transition-colors font-medium">Community</button>
</div>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-200 text-neutral-700 hover:border-neutral-400 transition-colors bg-white" onclick="switchView('create')">
<iconify-icon icon="solar:pen-new-square-linear" width="16"></iconify-icon>
<span className="font-medium">Write Journey</span>
</button>
<div className="h-8 w-[1px] bg-neutral-200 mx-1"></div>
<button className="text-neutral-500 hover:text-neutral-900">
<span className="hidden sm:inline font-medium">Log in</span>
</button>
<button className="bg-neutral-900 text-white px-3 py-1.5 rounded-md font-medium hover:bg-neutral-800 transition-colors">
                    Sign up
                </button>
</div>
</div>
</nav>

<main className="pt-16 min-h-screen">

<section className="view-section active" id="view-landing">

<div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-medium text-neutral-600 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                    Join 12,000+ travelers sharing stories
                </div>
<h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-neutral-900 max-w-4xl mb-6">
                    The unfiltered guide to <br className="hidden sm:block"/> <span className="text-neutral-400">everywhere you go.</span>
</h1>
<p className="text-lg text-neutral-500 max-w-xl mb-10 leading-relaxed">
                    Plan your next trip based on real itineraries, honest budgets, and hidden gems shared by a community of authentic travelers.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="px-6 py-3 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-neutral-200" onclick="switchView('explore')">
                        Explore Journeys
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="px-6 py-3 bg-white border border-neutral-200 text-neutral-900 rounded-lg font-medium hover:border-neutral-400 transition-all flex items-center justify-center gap-2" onclick="switchView('create')">
                        Start Sharing
                    </button>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 border-t border-neutral-100">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-2xl font-semibold tracking-tight">Curated this week</h2>
<p className="text-neutral-500 mt-1">Hand-picked itineraries from verified travelers.</p>
</div>
<a className="text-neutral-900 font-medium flex items-center gap-1 hover:gap-2 transition-all" href="#" onclick="switchView('explore')">
                        View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<article className="group cursor-pointer" onclick="switchView('detail')">
<div className="relative aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden mb-4 border border-neutral-200">
<img alt="Kyoto" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-medium border border-neutral-200 shadow-sm">
                                7 Days
                            </div>
</div>
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Japan</span>
<div className="flex items-center gap-1 text-xs text-neutral-500">
<iconify-icon icon="solar:wallet-linear" width="14"></iconify-icon> $$$
                            </div>
</div>
<h3 className="text-lg font-semibold tracking-tight group-hover:text-neutral-600 transition-colors mb-2">
                            A Quiet Week in Autumn Kyoto
                        </h3>
<div className="flex items-center gap-2">
<img alt="User" className="w-5 h-5 rounded-full border border-white shadow-sm" src="https://i.pravatar.cc/150?u=1"/>
<span className="text-xs text-neutral-500">Sarah Jenks</span>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden mb-4 border border-neutral-200">
<img alt="Cinque Terre" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-medium border border-neutral-200 shadow-sm">
                                4 Days
                            </div>
</div>
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Italy</span>
<div className="flex items-center gap-1 text-xs text-neutral-500">
<iconify-icon icon="solar:wallet-linear" width="14"></iconify-icon> $$
                            </div>
</div>
<h3 className="text-lg font-semibold tracking-tight group-hover:text-neutral-600 transition-colors mb-2">
                            Hiking the Cinque Terre: A Solo Guide
                        </h3>
<div className="flex items-center gap-2">
<img alt="User" className="w-5 h-5 rounded-full border border-white shadow-sm" src="https://i.pravatar.cc/150?u=2"/>
<span className="text-xs text-neutral-500">Matteo R.</span>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden mb-4 border border-neutral-200">
<img alt="Iceland" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-medium border border-neutral-200 shadow-sm">
                                10 Days
                            </div>
</div>
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Iceland</span>
<div className="flex items-center gap-1 text-xs text-neutral-500">
<iconify-icon icon="solar:wallet-linear" width="14"></iconify-icon> $$$$
                            </div>
</div>
<h3 className="text-lg font-semibold tracking-tight group-hover:text-neutral-600 transition-colors mb-2">
                            Ring Road Campervan Adventure
                        </h3>
<div className="flex items-center gap-2">
<img alt="User" className="w-5 h-5 rounded-full border border-white shadow-sm" src="https://i.pravatar.cc/150?u=3"/>
<span className="text-xs text-neutral-500">Alex &amp; Sam</span>
</div>
</article>
</div>
</div>

<div className="bg-neutral-50 py-20 border-y border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="text-center">
<div className="w-12 h-12 bg-white rounded-lg border border-neutral-200 flex items-center justify-center mx-auto mb-4 shadow-sm">
<iconify-icon className="text-neutral-900" icon="solar:notebook-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-neutral-900 mb-2">Document your trip</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Use our structured editor to log your daily activities, costs, and hidden spots.</p>
</div>
<div className="text-center">
<div className="w-12 h-12 bg-white rounded-lg border border-neutral-200 flex items-center justify-center mx-auto mb-4 shadow-sm">
<iconify-icon className="text-neutral-900" icon="solar:share-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-neutral-900 mb-2">Publish &amp; Share</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Inspire others by publishing your journey. Help travelers avoid tourist traps.</p>
</div>
<div className="text-center">
<div className="w-12 h-12 bg-white rounded-lg border border-neutral-200 flex items-center justify-center mx-auto mb-4 shadow-sm">
<iconify-icon className="text-neutral-900" icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-neutral-900 mb-2">Discover &amp; Plan</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Filter real itineraries by budget, season, and vibe to plan your perfect escape.</p>
</div>
</div>
</div>
</div>
</section>

<section className="view-section" id="view-explore">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-neutral-900">Explore Journeys</h1>
<p className="text-neutral-500 mt-1">Discover 3,402 trips from community travelers.</p>
</div>
<div className="relative w-full md:w-80">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all" placeholder="Search destination, style..." type="text"/>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-8 items-start">

<aside className="w-full lg:w-64 flex-shrink-0 space-y-8 sticky top-24">

<div>
<h3 className="font-medium text-neutral-900 mb-3 flex items-center gap-2">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Travel Type
                            </h3>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox h-4 w-4 border border-neutral-300 rounded transition-colors focus:ring-0 focus:ring-offset-0" type="checkbox"/>
<span className="text-neutral-600 group-hover:text-neutral-900">Solo Traveler</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox h-4 w-4 border border-neutral-300 rounded transition-colors focus:ring-0 focus:ring-offset-0" type="checkbox"/>
<span className="text-neutral-600 group-hover:text-neutral-900">Couple</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox h-4 w-4 border border-neutral-300 rounded transition-colors focus:ring-0 focus:ring-offset-0" type="checkbox"/>
<span className="text-neutral-600 group-hover:text-neutral-900">Friends Group</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox h-4 w-4 border border-neutral-300 rounded transition-colors focus:ring-0 focus:ring-offset-0" type="checkbox"/>
<span className="text-neutral-600 group-hover:text-neutral-900">Family</span>
</label>
</div>
</div>

<div>
<h3 className="font-medium text-neutral-900 mb-3 flex items-center gap-2">
<iconify-icon icon="solar:wallet-linear"></iconify-icon> Budget
                            </h3>
<input className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer" max="10000" min="0" type="range"/>
<div className="flex justify-between text-xs text-neutral-500 mt-2">
<span>$0</span>
<span>$10k+</span>
</div>
</div>

<div>
<h3 className="font-medium text-neutral-900 mb-3 flex items-center gap-2">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Duration
                            </h3>
<div className="flex gap-2">
<button className="px-3 py-1.5 rounded-md border border-neutral-200 text-xs font-medium hover:bg-neutral-50 hover:border-neutral-300">1-3 Days</button>
<button className="px-3 py-1.5 rounded-md border-neutral-900 bg-neutral-900 text-white text-xs font-medium">1 Week</button>
<button className="px-3 py-1.5 rounded-md border border-neutral-200 text-xs font-medium hover:bg-neutral-50 hover:border-neutral-300">2+ Weeks</button>
</div>
</div>
</aside>

<div className="flex-1">
<div className="flex items-center justify-between mb-4">
<span className="text-xs text-neutral-500">Showing 9 results</span>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-500">Sort by:</span>
<select className="text-xs font-medium bg-transparent border-none focus:ring-0 cursor-pointer">
<option>Most Popular</option>
<option>Newest</option>
<option>Lowest Budget</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


<article className="group cursor-pointer bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-lg hover:shadow-neutral-100 transition-all duration-300" onclick="switchView('detail')">
<div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<button className="absolute top-3 right-3 text-white hover:text-red-400 transition-colors">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex gap-2 mb-3">
<span className="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-medium text-neutral-600 uppercase">Cultural</span>
<span className="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-medium text-neutral-600 uppercase">Solo</span>
</div>
<h3 className="font-semibold text-base mb-1 group-hover:text-neutral-600 transition-colors">Autumn in Kyoto</h3>
<p className="text-xs text-neutral-500 mb-4 line-clamp-2">A deep dive into temples, tea ceremonies, and the best places to see the maple leaves change.</p>
<div className="flex items-center justify-between pt-3 border-t border-neutral-100">
<div className="flex items-center gap-2">
<img alt="avatar" className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/150?u=1"/>
<span className="text-xs text-neutral-600">Sarah J.</span>
</div>
<div className="text-xs font-medium text-neutral-900">$1,800</div>
</div>
</div>
</article>

<article className="group cursor-pointer bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-lg hover:shadow-neutral-100 transition-all duration-300">
<div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<button className="absolute top-3 right-3 text-white hover:text-red-400 transition-colors">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex gap-2 mb-3">
<span className="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-medium text-neutral-600 uppercase">Roadtrip</span>
<span className="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-medium text-neutral-600 uppercase">Couple</span>
</div>
<h3 className="font-semibold text-base mb-1 group-hover:text-neutral-600 transition-colors">Santorini Sunset Chase</h3>
<p className="text-xs text-neutral-500 mb-4 line-clamp-2">Exploring Oia and Fira with a rented ATV. Best spots for dinner without reservation.</p>
<div className="flex items-center justify-between pt-3 border-t border-neutral-100">
<div className="flex items-center gap-2">
<img alt="avatar" className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/150?u=5"/>
<span className="text-xs text-neutral-600">Mike D.</span>
</div>
<div className="text-xs font-medium text-neutral-900">$2,400</div>
</div>
</div>
</article>

<article className="group cursor-pointer bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-lg hover:shadow-neutral-100 transition-all duration-300">
<div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute top-3 right-3 text-white hover:text-red-400 transition-colors">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex gap-2 mb-3">
<span className="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-medium text-neutral-600 uppercase">Adventure</span>
<span className="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-medium text-neutral-600 uppercase">Friends</span>
</div>
<h3 className="font-semibold text-base mb-1 group-hover:text-neutral-600 transition-colors">Dubai Desert Safari</h3>
<p className="text-xs text-neutral-500 mb-4 line-clamp-2">Dune bashing, skydiving over the Palm, and luxury dining on a budget.</p>
<div className="flex items-center justify-between pt-3 border-t border-neutral-100">
<div className="flex items-center gap-2">
<img alt="avatar" className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/150?u=8"/>
<span className="text-xs text-neutral-600">Elena K.</span>
</div>
<div className="text-xs font-medium text-neutral-900">$3,100</div>
</div>
</div>
</article>
</div>
<div className="mt-12 flex justify-center">
<button className="px-4 py-2 border border-neutral-200 rounded-md text-sm font-medium hover:bg-neutral-50 text-neutral-600">Load More</button>
</div>
</div>
</div>
</div>
</section>

<section className="view-section" id="view-detail">
<article className="max-w-4xl mx-auto bg-white min-h-screen pb-24">

<div className="relative h-[60vh] w-full">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-6 sm:p-12 text-white">
<div className="flex items-center gap-3 mb-4">
<span className="px-2 py-1 rounded bg-white/20 backdrop-blur text-xs font-medium uppercase tracking-wide border border-white/30">Solo Trip</span>
<span className="px-2 py-1 rounded bg-white/20 backdrop-blur text-xs font-medium uppercase tracking-wide border border-white/30">7 Days</span>
</div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">A Quiet Week in Autumn Kyoto</h1>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Author" className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=1"/>
<div>
<p className="font-medium text-sm">Sarah Jenks</p>
<p className="text-xs text-white/80">Posted 2 days ago • Kyoto, Japan</p>
</div>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors">
<iconify-icon icon="solar:share-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="max-w-3xl mx-auto px-6 -mt-8 relative z-10">
<div className="bg-white rounded-xl shadow-xl shadow-neutral-200/50 border border-neutral-100 p-6 sm:p-8 mb-8">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
<div>
<p className="text-xs text-neutral-400 uppercase tracking-wide mb-1">Total Budget</p>
<p className="text-lg font-semibold text-neutral-900">$1,850</p>
</div>
<div>
<p className="text-xs text-neutral-400 uppercase tracking-wide mb-1">Best Time</p>
<p className="text-lg font-semibold text-neutral-900">November</p>
</div>
<div>
<p className="text-xs text-neutral-400 uppercase tracking-wide mb-1">Transport</p>
<p className="text-lg font-semibold text-neutral-900">Train/Walk</p>
</div>
<div>
<p className="text-xs text-neutral-400 uppercase tracking-wide mb-1">Rating</p>
<div className="flex items-center justify-center gap-1 text-yellow-500">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<span className="text-lg font-semibold text-neutral-900 ml-1">4.8</span>
</div>
</div>
</div>
</div>

<div className="prose prose-neutral prose-sm max-w-none mb-12">
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-4">Summary</h3>
<p className="text-neutral-600 leading-relaxed">
                            Kyoto in autumn is magical, but crowded. This itinerary focuses on early mornings and hidden temples to avoid the massive crowds at Fushimi Inari. I stayed in a small Ryokan near Gion which allowed me to walk everywhere. The food budget was moderate as I mixed convenience store (Konbini) breakfasts with nice dinners.
                        </p>
</div>

<div className="mb-12">
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-8 flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Daily Itinerary
                        </h3>
<div className="relative border-l border-neutral-200 ml-3 space-y-12">

<div className="relative pl-8">
<span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-neutral-900 ring-4 ring-white"></span>
<h4 className="text-lg font-medium text-neutral-900 mb-1">Day 1: Arrival &amp; Gion Walk</h4>
<p className="text-xs text-neutral-500 mb-4">Accomodation: Gion Yoshiima Ryokan</p>
<div className="bg-neutral-50 rounded-lg p-5 border border-neutral-100">
<p className="text-neutral-600 mb-3">Arrived at Kyoto Station via Shinkansen. Took a taxi to Gion. Spent the evening walking around Pontocho Alley looking for dinner.</p>
<div className="flex gap-2 mb-2">
<span className="px-2 py-1 bg-white border border-neutral-200 rounded text-xs text-neutral-600">📍 Yasaka Shrine</span>
<span className="px-2 py-1 bg-white border border-neutral-200 rounded text-xs text-neutral-600">☕ % Arabica Coffee</span>
</div>
<div className="text-xs text-amber-600 flex items-center gap-1 bg-amber-50 p-2 rounded mt-3">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon> Tip: Book dinner reservations in Pontocho 2 days in advance.
                                    </div>
</div>
</div>

<div className="relative pl-8">
<span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-neutral-300 ring-4 ring-white"></span>
<h4 className="text-lg font-medium text-neutral-900 mb-1">Day 2: Arashiyama Bamboo Grove</h4>
<p className="text-xs text-neutral-500 mb-4">Transport: JR San-in Line</p>
<div className="bg-neutral-50 rounded-lg p-5 border border-neutral-100">
<p className="text-neutral-600 mb-3">Woke up at 5:30 AM to get to the Bamboo grove before the crowds. Totally worth it. The light hitting the stalks was incredible.</p>
<div className="grid grid-cols-2 gap-2 mt-4">
<img className="rounded-lg h-32 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img className="rounded-lg h-32 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900 text-neutral-300 rounded-xl p-6 sm:p-8">
<h3 className="text-white font-semibold mb-4 flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon> Safety &amp; Local Tips
                        </h3>
<ul className="space-y-3 text-sm">
<li className="flex gap-3">
<iconify-icon className="text-green-400 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                Japan is incredibly safe for solo female travelers. Walking at night felt fine.
                            </li>
<li className="flex gap-3">
<iconify-icon className="text-green-400 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                Carry a coin purse. You end up with a lot of coins from vending machines.
                            </li>
<li className="flex gap-3">
<iconify-icon className="text-red-400 mt-0.5 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                                Don't eat while walking. It's considered rude.
                            </li>
</ul>
</div>
</div>
</article>
</section>

<section className="view-section" id="view-create">
<div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
<div className="flex items-center justify-between mb-8">
<h1 className="text-2xl font-semibold tracking-tight">Create New Journey</h1>
<div className="flex gap-3">
<button className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900">Save Draft</button>
<button className="px-4 py-2 bg-neutral-900 text-white rounded-md text-sm font-medium hover:bg-neutral-800 transition-all shadow-sm">Publish Journey</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-8">

<div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
<label className="block text-xs font-medium text-neutral-500 uppercase mb-2">Title</label>
<input className="w-full text-2xl font-semibold placeholder:text-neutral-300 border-none p-0 focus:ring-0 text-neutral-900 mb-6" placeholder="e.g., A Weekend in Paris" type="text"/>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1.5">Destination</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" icon="solar:map-point-linear"></iconify-icon>
<input className="w-full pl-9 pr-3 py-2 border border-neutral-200 rounded-lg text-sm focus:ring-2 focus:ring-neutral-900 focus:outline-none" placeholder="City, Country" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1.5">Travel Dates</label>
<input className="w-full px-3 py-2 border border-neutral-200 rounded-lg text-sm focus:ring-2 focus:ring-neutral-900 focus:outline-none text-neutral-500" type="date"/>
</div>
</div>
<div className="mt-6">
<label className="block text-sm font-medium text-neutral-700 mb-1.5">Overview</label>
<textarea className="w-full px-3 py-2 border border-neutral-200 rounded-lg text-sm focus:ring-2 focus:ring-neutral-900 focus:outline-none resize-none" placeholder="Write a brief summary of your experience..." rows="3"></textarea>
</div>
</div>

<div>
<h2 className="text-lg font-medium mb-4 flex items-center gap-2">
<iconify-icon icon="solar:list-check-linear"></iconify-icon> Itinerary Details
                            </h2>

<div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden mb-4">
<div className="bg-neutral-50 px-4 py-3 border-b border-neutral-200 flex items-center justify-between">
<span className="font-medium text-sm">Day 1</span>
<button className="text-neutral-400 hover:text-red-500"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</div>
<div className="p-4 space-y-4">
<input className="w-full border-b border-neutral-200 pb-2 text-sm font-medium focus:outline-none focus:border-neutral-900" placeholder="Day Title (e.g. Arrival)" type="text"/>
<textarea className="w-full text-sm text-neutral-600 focus:outline-none resize-none" placeholder="What did you do today?" rows="3"></textarea>
<div className="flex items-center gap-2">
<button className="text-xs flex items-center gap-1 px-2 py-1 border border-neutral-200 rounded hover:bg-neutral-50">
<iconify-icon icon="solar:camera-linear"></iconify-icon> Add Photo
                                        </button>
<button className="text-xs flex items-center gap-1 px-2 py-1 border border-neutral-200 rounded hover:bg-neutral-50">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Add Location
                                        </button>
</div>
</div>
</div>
<button className="w-full py-3 border-2 border-dashed border-neutral-200 rounded-xl text-neutral-500 font-medium text-sm hover:border-neutral-400 hover:text-neutral-700 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Add Day
                            </button>
</div>
</div>

<aside className="space-y-6">
<div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm space-y-5">
<div>
<label className="block text-xs font-semibold text-neutral-500 uppercase mb-2">Cover Image</label>
<div className="aspect-video bg-neutral-100 rounded-lg border-2 border-dashed border-neutral-200 flex flex-col items-center justify-center text-neutral-400 cursor-pointer hover:bg-neutral-50">
<iconify-icon icon="solar:upload-linear" width="24"></iconify-icon>
<span className="text-xs mt-1">Upload</span>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-neutral-500 uppercase mb-2">Trip Type</label>
<div className="flex flex-wrap gap-2">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="type" type="radio"/>
<span className="px-3 py-1.5 rounded-md border border-neutral-200 text-xs text-neutral-600 peer-checked:bg-neutral-900 peer-checked:text-white peer-checked:border-neutral-900 transition-all">Solo</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<span className="px-3 py-1.5 rounded-md border border-neutral-200 text-xs text-neutral-600 peer-checked:bg-neutral-900 peer-checked:text-white peer-checked:border-neutral-900 transition-all">Couple</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<span className="px-3 py-1.5 rounded-md border border-neutral-200 text-xs text-neutral-600 peer-checked:bg-neutral-900 peer-checked:text-white peer-checked:border-neutral-900 transition-all">Family</span>
</label>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-neutral-500 uppercase mb-2">Total Budget ($)</label>
<input className="w-full px-3 py-2 border border-neutral-200 rounded-lg text-sm focus:ring-2 focus:ring-neutral-900 focus:outline-none" placeholder="2000" type="number"/>
</div>
<div>
<label className="block text-xs font-semibold text-neutral-500 uppercase mb-2">Best Season</label>
<select className="w-full px-3 py-2 border border-neutral-200 rounded-lg text-sm focus:ring-2 focus:ring-neutral-900 focus:outline-none bg-white">
<option>Spring</option>
<option>Summer</option>
<option>Autumn</option>
<option>Winter</option>
</select>
</div>
</div>
</aside>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-neutral-200 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-base font-semibold tracking-tight flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-neutral-900" icon="solar:globus-linear" width="20"></iconify-icon>
                        JOURNEYLOG
                    </a>
<p className="text-neutral-500 text-sm leading-relaxed">
                        Building the most trustworthy community of travelers sharing real stories and itineraries.
                    </p>
</div>
<div>
<h4 className="font-medium text-neutral-900 mb-4">Platform</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900" href="#">Explore</a></li>
<li><a className="hover:text-neutral-900" href="#">Destinations</a></li>
<li><a className="hover:text-neutral-900" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-neutral-900 mb-4">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900" href="#">About</a></li>
<li><a className="hover:text-neutral-900" href="#">Careers</a></li>
<li><a className="hover:text-neutral-900" href="#">Privacy</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-neutral-900 mb-4">Subscribe</h4>
<div className="flex gap-2">
<input className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-md text-sm focus:outline-none focus:border-neutral-900" placeholder="Email" type="email"/>
<button className="bg-neutral-900 text-white px-3 py-2 rounded-md text-sm hover:bg-neutral-800">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-400">© 2024 Journeylog Inc. All rights reserved.</p>
<div className="flex gap-4 text-neutral-400">
<iconify-icon className="hover:text-neutral-900 cursor-pointer" icon="mdi:twitter" width="18"></iconify-icon>
<iconify-icon className="hover:text-neutral-900 cursor-pointer" icon="mdi:instagram" width="18"></iconify-icon>
</div>
</div>
</div>
</footer>



    </>
  );
}
