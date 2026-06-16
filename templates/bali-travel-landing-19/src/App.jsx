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
bali: {
50: '#f2fcf5',
100: '#e1f8e8',
500: '#22c55e', // Emerald
900: '#14532d',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'scroll': 'scroll 40s linear infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



        // Simple Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });

        // Close menu on link click
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            });
        });

        // Navbar blur effect on scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-sm');
                navbar.classList.add('bg-white/80');
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.classList.remove('bg-white/80');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 glass transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white">
<span className="text-xs font-bold">B</span>
</div>
                BALI.
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-emerald-600 transition-colors" href="#destinations">Destinations</a>
<a className="text-sm font-medium text-zinc-500 hover:text-emerald-600 transition-colors" href="#experiences">Experiences</a>
<a className="text-sm font-medium text-zinc-500 hover:text-emerald-600 transition-colors" href="#packages">Packages</a>
<a className="text-sm font-medium text-zinc-500 hover:text-emerald-600 transition-colors" href="#gallery">Gallery</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900" href="#">Log in</a>
<button className="bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200">
                    Book Now
                </button>
</div>
<button className="md:hidden text-zinc-900" id="mobile-menu-btn">
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-zinc-100 hidden flex-col p-6 gap-4 shadow-xl" id="mobile-menu">
<a className="text-sm font-medium text-zinc-600" href="#destinations">Destinations</a>
<a className="text-sm font-medium text-zinc-600" href="#experiences">Experiences</a>
<a className="text-sm font-medium text-zinc-600" href="#packages">Packages</a>
<button className="bg-emerald-600 text-white text-sm font-medium px-4 py-3 rounded-lg w-full">Book a Trip</button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="flex-1 text-center lg:text-left animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        New Summer Packages Available
                    </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-900 leading-[1.1] mb-6">
                        Find clarity in the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">heart of the jungle.</span>
</h1>
<p className="text-lg text-zinc-500 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Experience the spiritual essence of Bali. Curated journeys combining luxury, adventure, and mindfulness in the world's most beautiful island.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<button className="w-full sm:w-auto bg-zinc-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-zinc-200/50">
                            Explore Packages
                            <iconify-icon height="18" icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto bg-white border border-zinc-200 text-zinc-700 px-8 py-3.5 rounded-full font-medium hover:bg-zinc-50 transition-all flex items-center justify-center gap-2">
<iconify-icon height="18" icon="lucide:play-circle" strokeWidth="1.5" width="18"></iconify-icon>
                            Watch Film
                        </button>
</div>
<div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-zinc-100 pt-8">
<div>
<p className="text-2xl font-semibold tracking-tight text-zinc-900">12k+</p>
<p className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Happy Travelers</p>
</div>
<div className="w-px h-10 bg-zinc-200"></div>
<div>
<p className="text-2xl font-semibold tracking-tight text-zinc-900">4.9</p>
<p className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Average Rating</p>
</div>
<div className="w-px h-10 bg-zinc-200"></div>
<div>
<p className="text-2xl font-semibold tracking-tight text-zinc-900">24/7</p>
<p className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Support</p>
</div>
</div>
</div>
<div className="flex-1 w-full relative">
<div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-square shadow-2xl shadow-zinc-200">
<img alt="Bali Temple" className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
<iconify-icon height="24" icon="lucide:map-pin" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-zinc-900">Uluwatu Temple</h3>
<p className="text-xs text-zinc-500">Bukit Peninsula, Bali</p>
</div>
<div className="ml-auto">
<span className="flex items-center gap-1 text-xs font-medium text-amber-500 bg-amber-50 px-2 py-1 rounded-md">
<iconify-icon height="12" icon="lucide:star" width="12"></iconify-icon>
                                        4.9
                                    </span>
</div>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-emerald-100/50 to-blue-100/50 rounded-full blur-3xl opacity-60"></div>
</div>
</div>
</div>
</header>

<div className="border-y border-zinc-100 bg-zinc-50/50 py-10 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-6">
<p className="text-center text-xs font-medium text-zinc-400 uppercase tracking-widest">Featured In</p>
</div>
<div className="relative w-full flex overflow-hidden">
<div className="animate-scroll flex gap-16 min-w-full items-center justify-around opacity-40 grayscale">
<span className="text-xl font-semibold font-serif italic">Traveler</span>
<span className="text-xl font-bold tracking-tight">VOGUE</span>
<span className="text-xl font-bold tracking-tighter">EXPEDIA</span>
<span className="text-xl font-serif font-bold">NatGeo</span>
<span className="text-xl font-bold tracking-tight">Airbnb</span>
<span className="text-xl font-semibold font-serif italic">Traveler</span>
<span className="text-xl font-bold tracking-tight">VOGUE</span>
<span className="text-xl font-bold tracking-tighter">EXPEDIA</span>
<span className="text-xl font-serif font-bold">NatGeo</span>
<span className="text-xl font-bold tracking-tight">Airbnb</span>
</div>
</div>
</div>

<section className="py-24 bg-white" id="destinations">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Curated Destinations</h2>
<p className="text-zinc-500 max-w-md">Discover the hidden gems of the archipelago. From volcanic peaks to hidden beaches.</p>
</div>
<a className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1" href="#">
                    View all locations <iconify-icon height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 row-span-2 group relative rounded-2xl overflow-hidden cursor-pointer">
<img alt="Nusa Penida" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<p className="text-emerald-300 text-xs font-medium uppercase tracking-wider mb-2">Island Hopping</p>
<h3 className="text-3xl text-white font-medium tracking-tight mb-2">Nusa Penida</h3>
<p className="text-zinc-300 text-sm max-w-sm line-clamp-2">Famous for Kelingking Beach and crystal clear waters perfect for manta ray diving.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer bg-zinc-100">
<img alt="Ubud" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-xl text-white font-medium tracking-tight">Ubud Jungle</h3>
<p className="text-zinc-300 text-xs mt-1">Cultural Heart</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer bg-zinc-100">
<img alt="Canggu" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-xl text-white font-medium tracking-tight">Canggu Coast</h3>
<p className="text-zinc-300 text-xs mt-1">Surf &amp; Digital Nomads</p>
</div>
</div>

<div className="md:col-span-3 h-64 group relative rounded-2xl overflow-hidden cursor-pointer bg-zinc-100 mt-6 md:mt-0">
<img alt="Rice Terraces" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 flex items-end justify-between w-full">
<div>
<h3 className="text-2xl text-white font-medium tracking-tight">Tegalalang Rice Terrace</h3>
<p className="text-zinc-300 text-sm mt-1">UNESCO World Heritage Site</p>
</div>
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon height="20" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-200" id="experiences">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Why Travel With Us</h2>
<p className="text-zinc-500">We don't just book hotels. We curate experiences that connect you with the soul of the island.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-6">
<iconify-icon height="24" icon="lucide:leaf" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">Eco-Conscious Travel</h3>
<p className="text-sm text-zinc-500 leading-relaxed">We partner with sustainable resorts and local communities to ensure your footprint is green.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6">
<iconify-icon height="24" icon="lucide:compass" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">Local Guides</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Explore with guides who know every hidden waterfall, secret temple, and local warung.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-6">
<iconify-icon height="24" icon="lucide:camera" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">Curated Moments</h3>
<p className="text-sm text-zinc-500 leading-relaxed">From private cooking classes to sunrise yoga atop Mount Batur, we handle the details.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="packages">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-12 text-center">Upcoming Trips</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group flex flex-col border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-300 transition-all hover:shadow-lg">
<div className="h-48 overflow-hidden relative">
<img alt="Yoga" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-zinc-800">
                            7 Days
                        </div>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="mb-4">
<span className="text-emerald-600 text-xs font-semibold uppercase tracking-wider">Wellness</span>
<h3 className="text-xl font-semibold text-zinc-900 mt-1">Spiritual Awakening</h3>
</div>
<p className="text-sm text-zinc-500 mb-6">A retreat in Ubud focused on yoga, meditation, and traditional Balinese healing.</p>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> 5-Star Eco Lodge
                            </div>
<div className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> Daily Yoga Sessions
                            </div>
<div className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> All Meals Included
                            </div>
</div>
<div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between">
<div>
<span className="text-xs text-zinc-400 block">Starting from</span>
<span className="text-lg font-semibold text-zinc-900">$1,299</span>
</div>
<button className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors">
                                Details
                            </button>
</div>
</div>
</div>

<div className="group flex flex-col border border-emerald-500/30 rounded-2xl overflow-hidden ring-4 ring-emerald-50/50 shadow-xl relative transform md:-translate-y-4 bg-white">
<div className="absolute top-0 w-full bg-emerald-500 text-white text-center text-xs font-medium py-1">Most Popular</div>
<div className="h-48 overflow-hidden relative mt-6">
<img alt="Adventure" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-zinc-800">
                            10 Days
                        </div>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="mb-4">
<span className="text-emerald-600 text-xs font-semibold uppercase tracking-wider">Adventure</span>
<h3 className="text-xl font-semibold text-zinc-900 mt-1">The Grand Explorer</h3>
</div>
<p className="text-sm text-zinc-500 mb-6">The ultimate Bali tour: Uluwatu cliffs, Ubud jungles, and Nusa Penida beaches.</p>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> Island Hopping
                            </div>
<div className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> Snorkeling with Mantas
                            </div>
<div className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> Private Villa Stay
                            </div>
</div>
<div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between">
<div>
<span className="text-xs text-zinc-400 block">Starting from</span>
<span className="text-lg font-semibold text-zinc-900">$1,899</span>
</div>
<button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors">
                                Book Now
                            </button>
</div>
</div>
</div>

<div className="group flex flex-col border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-300 transition-all hover:shadow-lg">
<div className="h-48 overflow-hidden relative">
<img alt="Work" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-zinc-800">
                            14 Days
                        </div>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="mb-4">
<span className="text-emerald-600 text-xs font-semibold uppercase tracking-wider">Digital Nomad</span>
<h3 className="text-xl font-semibold text-zinc-900 mt-1">Work &amp; Wander</h3>
</div>
<p className="text-sm text-zinc-500 mb-6">Designed for remote workers. Coworking access mixed with weekend adventures.</p>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> High-Speed WiFi
                            </div>
<div className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> Coworking Pass
                            </div>
<div className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> Community Events
                            </div>
</div>
<div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between">
<div>
<span className="text-xs text-zinc-400 block">Starting from</span>
<span className="text-lg font-semibold text-zinc-900">$1,450</span>
</div>
<button className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors">
                                Details
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 blur-[100px] rounded-full"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<iconify-icon className="text-emerald-500 mb-8" height="48" icon="lucide:quote" width="48"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-8">
                        "The most transformative trip of my life. Every detail was handled perfectly, allowing me to fully immerse in the culture."
                    </h2>
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full border-2 border-zinc-700" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=100&amp;h=100&amp;q=80"/>
<div>
<p className="text-lg font-medium">Sarah Jenkins</p>
<p className="text-zinc-400 text-sm">Traveled in June 2023</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<img className="rounded-xl opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img className="rounded-xl mt-8 opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 md:p-12 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Ready for your escape?</h2>
<p className="text-zinc-500 mb-8 max-w-lg mx-auto">Get our free travel guide and exclusive offers delivered to your inbox.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onsubmit="event.preventDefault();">
<input className="flex-1 bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-zinc-400" placeholder="Enter your email" type="email"/>
<button className="bg-zinc-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors shadow-lg shadow-zinc-200">
                        Subscribe
                    </button>
</form>
<div className="mt-8 flex items-center justify-center gap-6">
<div className="flex items-center gap-2">
<input className="appearance-none w-4 h-4 border border-zinc-300 rounded custom-checkbox cursor-pointer transition-all" id="terms" type="checkbox"/>
<label className="text-xs text-zinc-500 cursor-pointer select-none" htmlFor="terms">I agree to Terms</label>
</div>
</div>
<p className="text-xs text-zinc-400 mt-4">No spam. Unsubscribe anytime.</p>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-lg font-semibold tracking-tighter flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white">
<span className="text-xs font-bold">B</span>
</div>
                        BALI.
                    </a>
<p className="text-sm text-zinc-500 max-w-xs mb-6">
                        Crafting unforgettable journeys to the Island of Gods since 2015. We believe in sustainable, immersive travel.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon height="20" icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon height="20" icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon height="20" icon="lucide:facebook" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Press</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Partners</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4">Support</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4">Destinations</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Ubud</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Canggu</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Uluwatu</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Nusa Islands</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-400">© 2023 Bali Travel Co. All rights reserved.</p>
<div className="flex items-center gap-1 text-xs text-zinc-400">
<span>Designed with</span>
<iconify-icon className="text-red-400" height="12" icon="lucide:heart" width="12"></iconify-icon>
<span>for travelers</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
