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
      

<nav className="absolute top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 flex justify-between items-center text-white">
<div className="font-heading font-medium text-lg tracking-tighter uppercase flex items-center gap-2">
<iconify-icon height="24" icon="solar:bicycling-linear" strokeWidth="1.5" width="24"></iconify-icon>
            YCF
        </div>
<div className="hidden md:flex gap-8 text-sm font-light">
<a className="hover:text-orange-400 transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-orange-400 transition-colors" href="#experiences">Routes</a>
<a className="hover:text-orange-400 transition-colors" href="#guides-support">Guides</a>
<a className="hover:text-orange-400 transition-colors" href="#about">About</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-heading font-medium hover:bg-white hover:text-emerald-900 transition-all duration-300" href="#start-planning">
            Let's Talk
        </a>
<button className="md:hidden text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>

<section className="relative w-full h-[95vh] min-h-[600px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Cycling in scenic mountains" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e171f737-872f-4d17-a398-d3cfe44608d1_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-900/60 to-emerald-950/80 mix-blend-multiply"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
<h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-tighter mb-6 leading-tight drop-shadow-sm">
                Your Cycling Friend
            </h1>
<p className="md:text-xl lg:text-2xl text-lg font-light text-gray-200 font-body max-w-2xl mr-auto mb-10 ml-auto">Cycling Rwanda like a local.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="inline-flex items-center justify-center hover:bg-orange-500 hover:-translate-y-0.5 transition-all duration-300 shadow-orange-500/20 sm:w-auto text-sm font-medium text-white font-heading bg-orange-400 w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg" href="#start-planning">
                    Start Planning
                </a>
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 font-heading font-medium text-sm hover:bg-white/20 transition-all duration-300 w-full sm:w-auto gap-2" href="#experiences">
                    Discover Routes
                    <iconify-icon height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white text-center max-w-4xl mx-auto" id="about">
<h2 className="font-heading text-3xl md:text-4xl text-emerald-900 font-medium tracking-tight mb-6">
            Everything you need for the perfect ride.
        </h2>
<p className="font-body text-base md:text-lg text-gray-500 font-light leading-relaxed mb-16">
            We aren't a traditional travel agency. Think of us as your local riding buddies who know the best dirt roads, the friendliest guesthouses, and where to find a good mechanic when you need one.
        </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
<div className="group">
<div className="w-12 h-12 rounded-2xl bg-amber-800/5 flex items-center justify-center mb-6 group-hover:bg-amber-800/10 transition-colors">
<iconify-icon className="text-amber-800" height="24" icon="solar:routing-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-heading text-xl text-emerald-900 font-medium tracking-tight mb-3">Curated Routes</h3>
<p className="font-body text-sm text-gray-500 font-light leading-relaxed">
                    Custom GPS tracks tailored to your skill level, from the rolling hills of Kigali to the epic Congo Nile Trail.
                </p>
</div>
<div className="group">
<div className="w-12 h-12 rounded-2xl bg-amber-800/5 flex items-center justify-center mb-6 group-hover:bg-amber-800/10 transition-colors">
<iconify-icon className="text-amber-800" height="24" icon="solar:bed-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-heading text-xl text-emerald-900 font-medium tracking-tight mb-3">Local Stays</h3>
<p className="font-body text-sm text-gray-500 font-light leading-relaxed">
                    Bike-friendly accommodation recommendations, ensuring your gear is safe and you get a good night's rest.
                </p>
</div>
<div className="group">
<div className="w-12 h-12 rounded-2xl bg-amber-800/5 flex items-center justify-center mb-6 group-hover:bg-amber-800/10 transition-colors">
<iconify-icon className="text-amber-800" height="24" icon="solar:settings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-heading text-xl text-emerald-900 font-medium tracking-tight mb-3">Support &amp; Gear</h3>
<p className="font-body text-sm text-gray-500 font-light leading-relaxed">
                    Access to reliable rentals, local mechanics, and on-call support if things don't go according to plan.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-gray-50" id="how-it-works">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row gap-16 items-start">
<div className="md:w-1/3 md:sticky md:top-32">
<h2 className="font-heading text-3xl md:text-4xl text-emerald-900 font-medium tracking-tight mb-4">
                        How it works
                    </h2>
<p className="font-body text-base text-gray-500 font-light leading-relaxed mb-8">
                        Skip the endless forum scrolling. We streamline your planning process so you can focus on the pedals.
                    </p>
<a className="inline-flex items-center gap-2 hover:text-orange-600 transition-colors text-sm font-medium text-orange-500 font-heading" href="#start-planning">
                        Get started now
                        <iconify-icon className="" height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
<div className="md:w-2/3 flex flex-col gap-12">
<div className="flex gap-6 relative">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-emerald-100 flex items-center justify-center text-emerald-900 font-heading font-medium z-10 shadow-sm">1</div>
<div className="absolute left-6 top-12 bottom-[-48px] w-px bg-emerald-100 hidden md:block"></div>
<div>
<h3 className="font-heading text-xl text-emerald-900 font-medium tracking-tight mb-2">Tell us your riding style</h3>
<p className="font-body text-sm text-gray-500 font-light leading-relaxed">Fill out our brief consultation form. Let us know if you prefer smooth tarmac, technical gravel, daily distances, and your desired comfort level for stays.</p>
</div>
</div>
<div className="flex gap-6 relative">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-emerald-100 flex items-center justify-center text-emerald-900 font-heading font-medium z-10 shadow-sm">2</div>
<div className="absolute left-6 top-12 bottom-[-48px] w-px bg-emerald-100 hidden md:block"></div>
<div className="">
<h3 className="font-heading text-xl text-emerald-900 font-medium tracking-tight mb-2">Receive a tailored itinerary</h3>
<p className="font-body text-sm text-gray-500 font-light leading-relaxed">We will craft a bespoke route complete with GPX files, daily elevation profiles, accommodation bookings, and essential local contacts.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-900 text-white flex items-center justify-center font-heading font-medium shadow-sm">3</div>
<div>
<h3 className="font-heading text-xl text-emerald-900 font-medium tracking-tight mb-2">Ride like a local</h3>
<p className="font-body text-sm text-gray-500 font-light leading-relaxed">Arrive in Rwanda with confidence. Your bike will be ready, your routes set, and you'll have our local support team just a message away.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white" id="experiences">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="font-heading text-3xl md:text-4xl text-emerald-900 font-medium tracking-tight mb-4">
                        Iconic Routes
                    </h2>
<p className="font-body text-base text-gray-500 font-light leading-relaxed">
                        From multi-day bikepacking adventures to challenging day rides, explore the landscapes of the Land of a Thousand Hills.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group rounded-3xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 flex flex-col">
<div className="h-56 overflow-hidden relative">
<img alt="Congo Nile Trail" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3335dff3-53d8-48a4-a09e-b3e1092a1ee6_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-heading font-medium text-emerald-900">
                            Multi-day
                        </div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-3">
<h3 className="font-heading text-lg text-emerald-900 font-medium tracking-tight">Congo Nile Trail</h3>
</div>
<p className="font-body text-sm text-gray-500 font-light leading-relaxed mb-6 flex-grow">
                            A stunning 227km dirt road hugging the shores of Lake Kivu. Expect challenging climbs, remote villages, and endless lake views.
                        </p>
<div className="flex items-center gap-4 text-xs font-body text-gray-400 border-t border-gray-100 pt-4 mt-auto">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:routing-linear" width="16"></iconify-icon> 227 km</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:graph-up-linear" width="16"></iconify-icon> 4,500m</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:stopwatch-linear" width="16"></iconify-icon> 4-6 Days</span>
</div>
</div>
</div>

<div className="group rounded-3xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 flex flex-col">
<div className="h-56 overflow-hidden relative">
<img alt="Twin Lakes Gravel" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a7af4cb-2da1-4923-bda7-b2d28309c199_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-heading font-medium text-emerald-900">
                            Day Ride
                        </div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-3">
<h3 className="font-heading text-lg text-emerald-900 font-medium tracking-tight">Twin Lakes Gravel</h3>
</div>
<p className="font-body text-sm text-gray-500 font-light leading-relaxed mb-6 flex-grow">
                            Navigate the steep volcanic slopes surrounding Lake Burera and Lake Ruhondo. Technical gravel, pure reward.
                        </p>
<div className="flex items-center gap-4 text-xs font-body text-gray-400 border-t border-gray-100 pt-4 mt-auto">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:routing-linear" width="16"></iconify-icon> 65 km</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:graph-up-linear" width="16"></iconify-icon> 1,200m</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:stopwatch-linear" width="16"></iconify-icon> Half Day</span>
</div>
</div>
</div>

<div className="group rounded-3xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 flex flex-col">
<div className="h-56 overflow-hidden relative">
<img alt="Kigali City Loop" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/06e93e9c-4b7e-42d6-b903-5556842d7e87_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-heading font-medium text-emerald-900">
                            Tarmac
                        </div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-3">
<h3 className="font-heading text-lg text-emerald-900 font-medium tracking-tight">Kigali Cobbles &amp; Tarmac</h3>
</div>
<p className="font-body text-sm text-gray-500 font-light leading-relaxed mb-6 flex-grow">
                            Experience the famous "Wall of Kigali" and perfectly paved, car-free zones on Sunday mornings in the capital.
                        </p>
<div className="flex items-center gap-4 text-xs font-body text-gray-400 border-t border-gray-100 pt-4 mt-auto">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:routing-linear" width="16"></iconify-icon> 40 km</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:graph-up-linear" width="16"></iconify-icon> 800m</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:stopwatch-linear" width="16"></iconify-icon> 2-3 Hours</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white border-t border-gray-100" id="guides-support">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="font-heading text-3xl md:text-4xl text-emerald-900 font-medium tracking-tight mb-4">
                    Local Guides &amp; Mechanics
                </h2>
<p className="font-body text-base text-gray-500 font-light leading-relaxed">
                    Ride with confidence. Our trusted network of local experts ensures you never ride alone—unless you want to. From trail navigation to emergency repairs, we've got you covered.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group rounded-3xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 flex flex-col">
<div className="h-64 overflow-hidden relative">
<img alt="Local Cycling Guide" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-heading font-medium text-emerald-900 flex items-center gap-1.5">
<iconify-icon icon="solar:user-rounded-linear" width="14"></iconify-icon> Lead Guide
                        </div>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="font-heading text-xl text-emerald-900 font-medium tracking-tight mb-3">Jean-Baptiste</h3>
<p className="font-body text-sm text-gray-500 font-light leading-relaxed mb-8 flex-grow">
                            Born and raised in Musanze, Jean-Baptiste knows every hidden gravel track and singletrack in the Volcanoes region. Fluent in English, French, and Kinyarwanda.
                        </p>
<div className="flex flex-wrap gap-2 text-xs font-body font-medium text-emerald-800">
<span className="bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">Bikepacking</span>
<span className="bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">Gravel</span>
<span className="bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">First-Aid Certified</span>
</div>
</div>
</div>

<div className="group rounded-3xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 flex flex-col">
<div className="h-64 overflow-hidden relative">
<img alt="Bike Mechanic" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-heading font-medium text-emerald-900 flex items-center gap-1.5">
<iconify-icon icon="solar:wrench-linear" width="14"></iconify-icon> Master Mechanic
                        </div>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="font-heading text-xl text-emerald-900 font-medium tracking-tight mb-3">Emmanuel "Fix-it"</h3>
<p className="font-body text-sm text-gray-500 font-light leading-relaxed mb-8 flex-grow">
                            Based in Kigali but available for on-call rescues nationwide. Emmanuel's workshop is fully equipped for modern drivetrains, hydraulic bleeds, and custom wheel building.
                        </p>
<div className="flex flex-wrap gap-2 text-xs font-body font-medium text-emerald-800">
<span className="bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">Mobile Support</span>
<span className="bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">Tubeless Setup</span>
<span className="bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">Suspension</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-gray-50 border-t border-gray-100" id="start-planning">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h2 className="font-heading text-3xl md:text-4xl text-emerald-900 font-medium tracking-tight mb-4">
                    Let's build your perfect ride.
                </h2>
<p className="font-body text-base text-gray-500 font-light leading-relaxed max-w-xl mx-auto">
                    Fill out the details below. We'll review your preferences and get back to you with a custom proposal within 48 hours.
                </p>
</div>
<div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
<form action="#" className="space-y-8" method="POST">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-sm font-heading font-medium text-emerald-900">First Name</label>
<input className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl focus:ring-2 focus:ring-emerald-900/20 focus:border-emerald-900 outline-none block p-3 transition-all" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-heading font-medium text-emerald-900">Email Address</label>
<input className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl focus:ring-2 focus:ring-emerald-900/20 focus:border-emerald-900 outline-none block p-3 transition-all" placeholder="jane@example.com" type="email"/>
</div>
</div>

<div className="space-y-4">
<label className="block text-sm font-heading font-medium text-emerald-900">Preferred Riding Style</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<label className="relative cursor-pointer">
<input checked="" className="peer sr-only custom-radio" name="style" type="radio" value="gravel"/>
<div className="p-4 rounded-xl border border-gray-200 text-center transition-all hover:bg-gray-50">
<iconify-icon className="mb-2" icon="solar:route-linear" width="24"></iconify-icon>
<div className="font-heading font-medium text-sm">Gravel / Off-road</div>
</div>
</label>
<label className="relative cursor-pointer">
<input className="peer sr-only custom-radio" name="style" type="radio" value="road"/>
<div className="p-4 rounded-xl border border-gray-200 text-center transition-all hover:bg-gray-50">
<iconify-icon className="mb-2" icon="solar:street-linear" width="24"></iconify-icon>
<div className="font-heading font-medium text-sm">Smooth Tarmac</div>
</div>
</label>
<label className="relative cursor-pointer">
<input className="peer sr-only custom-radio" name="style" type="radio" value="mixed"/>
<div className="p-4 rounded-xl border border-gray-200 text-center transition-all hover:bg-gray-50">
<iconify-icon className="mb-2" icon="solar:map-linear" width="24"></iconify-icon>
<div className="font-heading font-medium text-sm">A Bit of Both</div>
</div>
</label>
</div>
</div>

<div className="space-y-4 pt-4 border-t border-gray-100">
<div className="flex items-center justify-between">
<div>
<label className="block text-sm font-heading font-medium text-emerald-900">Need Accommodation?</label>
<p className="text-xs text-gray-500 font-light mt-1">We can book bike-friendly stays along your route.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only custom-toggle" type="checkbox"/>
<div className="w-11 h-6 bg-gray-200 rounded-full transition-colors flex items-center px-0.5">
<span className="w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform duration-300"></span>
</div>
</label>
</div>
<div className="flex items-center justify-between">
<div>
<label className="block text-sm font-heading font-medium text-emerald-900">Bike Rental</label>
<p className="text-xs text-gray-500 font-light mt-1">Don't want to fly with your bike? Rent locally.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only custom-toggle" type="checkbox"/>
<div className="w-11 h-6 bg-gray-200 rounded-full transition-colors flex items-center px-0.5">
<span className="w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform duration-300"></span>
</div>
</label>
</div>
</div>

<div className="space-y-2 pt-4 border-t border-gray-100">
<label className="block text-sm font-heading font-medium text-emerald-900">Tell us more about your trip</label>
<textarea className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl focus:ring-2 focus:ring-emerald-900/20 focus:border-emerald-900 outline-none block p-4 transition-all resize-none" placeholder="Dates, group size, special requirements..." rows="4"></textarea>
</div>

<button className="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl bg-emerald-900 text-white font-heading font-medium text-sm hover:bg-emerald-950 transition-all duration-300 shadow-md" type="submit">
                        Request Itinerary
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-gray-50 border-t border-gray-200 py-12 px-6 md:px-12 mt-12">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="font-heading font-medium text-lg tracking-tighter text-emerald-900 flex items-center gap-2">
<iconify-icon height="24" icon="solar:bicycling-linear" strokeWidth="1.5" width="24"></iconify-icon>
                YCF
            </div>
<p className="text-xs font-body text-gray-400">
                © 2024 Your Cycling Friend. Based in Rwanda.
            </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-emerald-900 transition-colors" href="#">
<iconify-icon height="20" icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-emerald-900 transition-colors" href="#">
<iconify-icon height="20" icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
