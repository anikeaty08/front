import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-zinc-900/40 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-semibold tracking-tighter text-xl flex items-center gap-2" href="#">
<span className="iconify-icon" icon="lucide:anchor" style={{fontSize: '20px'}}></span>
                MIA CHARTERS
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-200 hover:text-white transition-colors" href="#fleet">The Fleet</a>
<a className="text-sm font-medium text-zinc-200 hover:text-white transition-colors" href="#destinations">Destinations</a>
<a className="text-sm font-medium text-zinc-200 hover:text-white transition-colors" href="#experience">Experience</a>
<a className="text-sm font-medium text-zinc-200 hover:text-white transition-colors" href="#reviews">Reviews</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-zinc-900 bg-white rounded-full hover:bg-zinc-100 transition-all shadow-lg shadow-white/10" href="#book">
                    Book Charter
                </a>
<button className="md:hidden text-white">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Miami Yacht" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-zinc-900"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
<span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
<span className="text-xs font-medium text-white tracking-wide uppercase">Now accepting Summer bookings</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                Miami from <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-teal-200">a new perspective.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed mb-10">
                Experience the magic of Biscayne Bay with private luxury charters. 
                From sunset cruises to sandbar parties, redefine your Miami getaway.
            </p>

<div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-2">
<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-300" icon="lucide:calendar" width="18"></iconify-icon>
</div>
<input className="w-full h-14 bg-black/20 hover:bg-black/30 border border-transparent focus:border-white/20 rounded-2xl pl-12 pr-4 text-white placeholder-zinc-400 outline-none text-sm transition-all appearance-none cursor-pointer" placeholder="Select Date" type="date"/>
</div>
<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-300" icon="lucide:users" width="18"></iconify-icon>
</div>
<select className="w-full h-14 bg-black/20 hover:bg-black/30 border border-transparent focus:border-white/20 rounded-2xl pl-12 pr-10 text-white outline-none text-sm transition-all appearance-none cursor-pointer">
<option className="text-zinc-900" value="">Guests</option>
<option className="text-zinc-900" value="1-4">1-4 Guests</option>
<option className="text-zinc-900" value="5-8">5-8 Guests</option>
<option className="text-zinc-900" value="9-12">9-12 Guests</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-400" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-300" icon="lucide:clock" width="18"></iconify-icon>
</div>
<select className="w-full h-14 bg-black/20 hover:bg-black/30 border border-transparent focus:border-white/20 rounded-2xl pl-12 pr-10 text-white outline-none text-sm transition-all appearance-none cursor-pointer">
<option className="text-zinc-900" value="">Duration</option>
<option className="text-zinc-900" value="4h">4 Hours (Half Day)</option>
<option className="text-zinc-900" value="6h">6 Hours</option>
<option className="text-zinc-900" value="8h">8 Hours (Full Day)</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-400" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<button className="h-14 px-8 bg-white hover:bg-teal-50 text-zinc-900 font-medium rounded-2xl transition-all flex items-center justify-center gap-2 shadow-xl whitespace-nowrap">
                    Search 
                    <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="py-10 border-b border-zinc-100 bg-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-widest text-center md:text-left">Featured In</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-40 grayscale">

<div className="flex items-center gap-1 font-bold text-lg font-serif">VOGUE</div>
<div className="flex items-center gap-1 font-bold text-lg tracking-tighter">TRAVELER</div>
<div className="flex items-center gap-1 font-bold text-lg italic">MIAMI<span className="not-italic font-light">LIFE</span></div>
<div className="flex items-center gap-1 font-bold text-lg tracking-widest">OCEAN</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="fleet">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">Our Premium Fleet</h2>
<p className="text-zinc-500 max-w-lg">Meticulously maintained vessels equipped with premium sound systems, floating mats, and coolers.</p>
</div>
<a className="text-sm font-medium text-zinc-900 hover:text-teal-600 flex items-center gap-1 transition-colors" href="#">
                    View full inventory <iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-3xl p-3 border border-zinc-200 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-zinc-100">
<img alt="Sea Ray" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-zinc-900 border border-white/50">
                            Most Popular
                        </div>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-zinc-900">40' Sea Ray Sundancer</h3>
<span className="text-sm font-medium text-zinc-500">From $350/hr</span>
</div>
<div className="flex items-center gap-4 text-xs text-zinc-500 mb-6">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:users" width="14"></iconify-icon> 12 Guests</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:ruler" width="14"></iconify-icon> 40 ft</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:anchor" width="14"></iconify-icon> Captain incl.</span>
</div>
<button className="w-full py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm font-medium hover:bg-zinc-900 hover:text-white transition-all">
                            Check Availability
                        </button>
</div>
</div>

<div className="group bg-white rounded-3xl p-3 border border-zinc-200 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-zinc-100">
<img alt="Azimut" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-zinc-900">55' Azimut Flybridge</h3>
<span className="text-sm font-medium text-zinc-500">From $550/hr</span>
</div>
<div className="flex items-center gap-4 text-xs text-zinc-500 mb-6">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:users" width="14"></iconify-icon> 13 Guests</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:ruler" width="14"></iconify-icon> 55 ft</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:anchor" width="14"></iconify-icon> Captain + Stew</span>
</div>
<button className="w-full py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm font-medium hover:bg-zinc-900 hover:text-white transition-all">
                            Check Availability
                        </button>
</div>
</div>

<div className="group bg-white rounded-3xl p-3 border border-zinc-200 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-zinc-100">
<img alt="Catamaran" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-zinc-900">45' Lagoon Catamaran</h3>
<span className="text-sm font-medium text-zinc-500">From $450/hr</span>
</div>
<div className="flex items-center gap-4 text-xs text-zinc-500 mb-6">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:users" width="14"></iconify-icon> 18 Guests</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:ruler" width="14"></iconify-icon> 45 ft</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:anchor" width="14"></iconify-icon> Captain incl.</span>
</div>
<button className="w-full py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm font-medium hover:bg-zinc-900 hover:text-white transition-all">
                            Check Availability
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="destinations">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="grid grid-cols-2 gap-4">
<img alt="Water" className="rounded-2xl object-cover h-64 w-full translate-y-8" src="https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<img alt="Wine" className="rounded-2xl object-cover h-64 w-full" src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-teal-50 to-zinc-50 rounded-full blur-3xl opacity-60"></div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-6">Curated Itineraries</h2>
<p className="text-zinc-500 mb-8 leading-relaxed">
                        Customize your route or let our experienced captains guide you to Miami's hidden gems. Every trip is tailored to your vibe.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-none w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900">Nixon Sandbar</h4>
<p className="text-sm text-zinc-500 mt-1">Anchor down and enjoy the shallow turquoise waters. Perfect for swimming and socializing.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-none w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
<iconify-icon icon="lucide:sunset" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900">Sunset Skyline</h4>
<p className="text-sm text-zinc-500 mt-1">Cruise past Downtown Miami and Brickell as the city lights come alive.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-none w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
<iconify-icon icon="lucide:star" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900">Star Island Tour</h4>
<p className="text-sm text-zinc-500 mt-1">See the multi-million dollar mansions of celebrities from the comfort of your yacht.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white relative overflow-hidden" id="experience">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">All-Inclusive Experience</h2>
<p className="text-zinc-400">We handle the details so you can focus on the memories. Everything you need for a perfect day on the water.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<iconify-icon className="text-teal-300 mb-4" icon="lucide:music" width="24"></iconify-icon>
<h3 className="text-base font-semibold mb-2">Bluetooth Audio</h3>
<p className="text-sm text-zinc-400">Premium sound systems on all boats. Be your own DJ.</p>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<iconify-icon className="text-teal-300 mb-4" icon="lucide:glass-water" width="24"></iconify-icon>
<h3 className="text-base font-semibold mb-2">Ice &amp; Coolers</h3>
<p className="text-sm text-zinc-400">Fully stocked with ice and water. BYOB friendly.</p>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<iconify-icon className="text-teal-300 mb-4" icon="lucide:life-buoy" width="24"></iconify-icon>
<h3 className="text-base font-semibold mb-2">Water Toys</h3>
<p className="text-sm text-zinc-400">Floating mats included. Jet skis available upon request.</p>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<iconify-icon className="text-teal-300 mb-4" icon="lucide:shield-check" width="24"></iconify-icon>
<h3 className="text-base font-semibold mb-2">Certified Captains</h3>
<p className="text-sm text-zinc-400">USCG licensed captains ensuring your safety.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="book">
<div className="max-w-3xl mx-auto px-6">
<div className="bg-zinc-50 border border-zinc-200 rounded-[2rem] p-8 md:p-12 text-center">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">Ready to set sail?</h2>
<p className="text-zinc-500 mb-8 max-w-md mx-auto">Book your charter online instantly. No hidden fees, instant confirmation.</p>
<form className="space-y-4 max-w-sm mx-auto text-left">
<div className="flex flex-col gap-1">
<label className="text-xs font-semibold text-zinc-700 ml-1">Full Name</label>
<input className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-xs font-semibold text-zinc-700 ml-1">Email Address</label>
<input className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 transition-all" placeholder="john@example.com" type="email"/>
</div>

<label className="flex items-start gap-3 cursor-pointer group mt-2">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 bg-white border-2 border-zinc-300 rounded peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-all"></div>
<iconify-icon className="absolute left-0.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" icon="lucide:check" width="16"></iconify-icon>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-700">I agree to the terms of service and cancellation policy.</span>
</label>
<button className="w-full py-4 mt-4 bg-zinc-900 hover:bg-zinc-800 text-white font-medium rounded-xl transition-all shadow-lg shadow-zinc-900/20">
                        Continue to Booking
                    </button>
<p className="text-[10px] text-center text-zinc-400 mt-4">
                        Secure payment powered by Stripe. You won't be charged yet.
                    </p>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-zinc-900 font-bold tracking-tighter text-lg flex items-center gap-2 mb-4" href="#">
<span className="iconify-icon" icon="lucide:anchor" style={{fontSize: '18px'}}></span>
                        MIA CHARTERS
                    </a>
<p className="text-xs text-zinc-500 mb-4">
                        Premier boat rental and yacht charter service in Miami, FL. Creating unforgettable water experiences since 2018.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="18"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-medium text-sm text-zinc-900 mb-4">Company</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm text-zinc-900 mb-4">Support</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm text-zinc-900 mb-4">Location</h4>
<address className="not-italic text-xs text-zinc-500 space-y-2">
<p>Miami Beach Marina</p>
<p>300 Alton Rd</p>
<p>Miami Beach, FL 33139</p>
<a className="block text-zinc-900 hover:underline mt-2" href="mailto:hello@miacharters.com">hello@miacharters.com</a>
</address>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-zinc-400">© 2024 MIA Charters LLC. All rights reserved.</p>
<div className="flex items-center gap-2 text-[10px] text-zinc-400">
<span className="w-2 h-2 rounded-full bg-teal-500"></span>
                    Operational Status: Normal
                </div>
</div>
</div>
</footer>

    </>
  );
}
