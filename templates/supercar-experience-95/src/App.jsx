import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
slate: {
850: '#151b2b',
900: '#0f172a',
950: '#020617',
},
red: {
600: '#DC2626', // Maranello Red (Subdued)
700: '#B91C1C',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 glass border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold">M</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight uppercase leading-none group-hover:text-red-500 transition-colors">Test Drive</span>
<span className="text-xs text-slate-400 tracking-widest uppercase leading-none">Maranello</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#cars">Supercars</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#imola">Imola Track</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#groups">Groups</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#local">Local Guide</a>
</nav>

<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-1 text-xs font-medium text-slate-400">
<iconify-icon className="text-yellow-400 text-base" icon="solar:star-circle-linear"></iconify-icon>
<span>Travelers' Choice '16-'23</span>
</div>
<button className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-2 px-4 rounded-full transition-all border border-white/10">
<iconify-icon icon="solar:cart-large-linear" width="16"></iconify-icon>
                    Cart (0)
                </button>
<a className="bg-green-600 hover:bg-green-500 text-white text-xs font-semibold py-2 px-4 rounded-full flex items-center gap-2 transition-all shadow-lg shadow-green-900/20" href="https://wa.me/123456789">
<iconify-icon icon="solar:chat-round-dots-linear" width="16"></iconify-icon>
<span className="hidden md:inline">WhatsApp</span>
</a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30"></div>
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950/50"></div>
<div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-medium tracking-wide uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                    Live in Maranello
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                    Drive the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Legend.</span>
</h1>
<p className="text-lg text-slate-400 max-w-md leading-relaxed">
                    Experience the roar of a Ferrari or Lamborghini on the streets where they were born. Guided test drives starting from the factory gates.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="flex items-center justify-center gap-2 bg-white text-slate-950 hover:bg-slate-200 py-3 px-6 rounded-lg text-sm font-semibold transition-all" href="#cars">
                        Choose your Car
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 px-6 rounded-lg text-sm font-semibold transition-all backdrop-blur-sm">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                        Watch Experience
                    </button>
</div>

<div className="pt-8 flex items-center gap-6 border-t border-white/5">
<div className="flex flex-col">
<div className="flex text-yellow-500 text-xs gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-slate-500 mt-1">5.0/5 on TripAdvisor</span>
</div>
<div className="h-8 w-px bg-white/10"></div>
<div className="text-xs text-slate-500">
<span className="block text-slate-300 font-medium">100% Refund</span>
                        if cancelled 24h prior
                    </div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-red-900/10 group">
<img alt="Ferrari Roma" className="w-full h-auto object-cover transform group-hover:scale-105 transition-duration-700 transition-transform duration-700" src="https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&amp;w=2532&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 to-transparent p-6">
<div className="flex justify-between items-end">
<div>
<p className="text-red-500 text-xs font-medium uppercase tracking-wider mb-1">Featured</p>
<h3 className="text-xl font-semibold text-white">Ferrari Roma Spider</h3>
</div>
<div className="text-right">
<p className="text-xs text-slate-400 mb-1">Starting from</p>
<p className="text-lg font-semibold text-white">€150</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="sticky top-16 z-40 bg-slate-950/90 backdrop-blur-xl border-y border-white/5 py-3">
<div className="max-w-7xl mx-auto px-6 flex flex-nowrap overflow-x-auto no-scrollbar gap-4 items-center justify-between">
<div className="flex gap-2">
<button className="px-4 py-1.5 rounded-full bg-white text-slate-950 text-xs font-medium border border-white">All Cars</button>
<button className="px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium border border-white/10 transition-colors">Ferrari</button>
<button className="px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium border border-white/10 transition-colors">Lamborghini</button>
<button className="px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium border border-white/10 transition-colors">McLaren</button>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
<span>Sort by:</span>
<button className="flex items-center gap-1 hover:text-white">Popularity <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></button>
</div>
</div>
</div>

<section className="py-16 px-6 max-w-7xl mx-auto" id="cars">
<div className="flex justify-between items-end mb-8">
<h2 className="text-2xl font-semibold tracking-tight">The Collection</h2>
<a className="text-xs text-red-500 hover:text-red-400 font-medium flex items-center gap-1" href="#">View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-slate-900 rounded-xl overflow-hidden border border-white/5 hover:border-red-500/30 transition-all hover:shadow-2xl hover:shadow-red-900/10">
<div className="aspect-[4/3] relative overflow-hidden">
<img alt="Ferrari Portofino" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur px-2 py-1 rounded text-xs font-medium border border-white/10">
<span className="text-white">2 Pass.</span>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-3">
<h3 className="text-lg font-semibold text-white">Ferrari Portofino M</h3>
<div className="text-right">
<span className="text-xs text-slate-500 block">from</span>
<span className="text-base font-semibold text-red-500">€130</span>
</div>
</div>
<div className="grid grid-cols-3 gap-2 py-3 border-t border-white/5 mb-4">
<div className="text-center">
<iconify-icon className="text-slate-500 mb-1" icon="solar:speedometer-linear"></iconify-icon>
<p className="text-xs text-slate-300">620 HP</p>
</div>
<div className="text-center border-l border-white/5">
<iconify-icon className="text-slate-500 mb-1" icon="solar:stopwatch-linear"></iconify-icon>
<p className="text-xs text-slate-300">3.4s</p>
</div>
<div className="text-center border-l border-white/5">
<iconify-icon className="text-slate-500 mb-1" icon="solar:wheel-angle-linear"></iconify-icon>
<p className="text-xs text-slate-300">Auto</p>
</div>
</div>
<button className="w-full py-2.5 bg-white text-slate-950 text-sm font-semibold rounded-lg hover:bg-slate-200 transition-colors">
                        Reserve Now
                    </button>
</div>
</div>

<div className="group relative bg-slate-850 rounded-xl overflow-hidden border border-red-500/50 shadow-xl shadow-red-900/10 ring-1 ring-red-500/20">
<div className="absolute top-0 left-0 w-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest text-center py-1">Popular Choice</div>
<div className="aspect-[4/3] relative overflow-hidden mt-4">
<img alt="McLaren 720s" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-3">
<h3 className="text-lg font-semibold text-white">McLaren 720s</h3>
<div className="text-right">
<span className="text-xs text-slate-500 block">from</span>
<span className="text-base font-semibold text-red-500">€180</span>
</div>
</div>
<div className="grid grid-cols-3 gap-2 py-3 border-t border-white/5 mb-4">
<div className="text-center">
<iconify-icon className="text-slate-500 mb-1" icon="solar:speedometer-linear"></iconify-icon>
<p className="text-xs text-slate-300">720 HP</p>
</div>
<div className="text-center border-l border-white/5">
<iconify-icon className="text-slate-500 mb-1" icon="solar:stopwatch-linear"></iconify-icon>
<p className="text-xs text-slate-300">2.9s</p>
</div>
<div className="text-center border-l border-white/5">
<iconify-icon className="text-slate-500 mb-1" icon="solar:wheel-angle-linear"></iconify-icon>
<p className="text-xs text-slate-300">Auto</p>
</div>
</div>
<a className="flex items-center justify-center w-full py-2.5 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors" href="#booking-demo">
                        Configure Drive
                    </a>
</div>
</div>

<div className="group relative bg-slate-900 rounded-xl overflow-hidden border border-white/5 hover:border-red-500/30 transition-all hover:shadow-2xl hover:shadow-red-900/10">
<div className="aspect-[4/3] relative overflow-hidden">
<img alt="Lamborghini" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur px-2 py-1 rounded text-xs font-medium border border-white/10">
<span className="text-white">Convertible</span>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-3">
<h3 className="text-lg font-semibold text-white">Huracan Performante</h3>
<div className="text-right">
<span className="text-xs text-slate-500 block">from</span>
<span className="text-base font-semibold text-red-500">€200</span>
</div>
</div>
<div className="grid grid-cols-3 gap-2 py-3 border-t border-white/5 mb-4">
<div className="text-center">
<iconify-icon className="text-slate-500 mb-1" icon="solar:speedometer-linear"></iconify-icon>
<p className="text-xs text-slate-300">640 HP</p>
</div>
<div className="text-center border-l border-white/5">
<iconify-icon className="text-slate-500 mb-1" icon="solar:stopwatch-linear"></iconify-icon>
<p className="text-xs text-slate-300">2.9s</p>
</div>
<div className="text-center border-l border-white/5">
<iconify-icon className="text-slate-500 mb-1" icon="solar:wheel-angle-linear"></iconify-icon>
<p className="text-xs text-slate-300">Auto</p>
</div>
</div>
<button className="w-full py-2.5 bg-white text-slate-950 text-sm font-semibold rounded-lg hover:bg-slate-200 transition-colors">
                        Reserve Now
                    </button>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-900 border-y border-white/5 scroll-mt-24" id="booking-demo">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-8">
<a className="text-xs text-slate-400 hover:text-white flex items-center gap-1 mb-2" href="#cars">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Collection
                </a>
<h2 className="text-3xl font-semibold tracking-tight text-white">Configure your McLaren 720s Experience</h2>
</div>
<div className="grid lg:grid-cols-3 gap-10">

<div className="lg:col-span-2 space-y-8">

<div className="rounded-2xl overflow-hidden aspect-video relative border border-white/10">
<img className="object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute bottom-4 right-4 bg-black/50 backdrop-blur text-white text-xs px-3 py-1.5 rounded flex items-center gap-2 hover:bg-black/70">
<iconify-icon icon="solar:gallery-wide-linear"></iconify-icon> View Gallery (12)
                        </button>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="bg-slate-950 p-4 rounded-xl border border-white/5">
<p className="text-xs text-slate-500 mb-1">Max Speed</p>
<p className="text-lg font-semibold text-white">341 km/h</p>
</div>
<div className="bg-slate-950 p-4 rounded-xl border border-white/5">
<p className="text-xs text-slate-500 mb-1">Acceleration</p>
<p className="text-lg font-semibold text-white">2.9s <span className="text-xs font-normal text-slate-600">(0-100)</span></p>
</div>
<div className="bg-slate-950 p-4 rounded-xl border border-white/5">
<p className="text-xs text-slate-500 mb-1">Engine</p>
<p className="text-lg font-semibold text-white">V8 Twin</p>
</div>
<div className="bg-slate-950 p-4 rounded-xl border border-white/5">
<p className="text-xs text-slate-500 mb-1">Passenger</p>
<p className="text-lg font-semibold text-green-500 flex items-center gap-1">Yes <iconify-icon icon="solar:check-circle-linear"></iconify-icon></p>
</div>
</div>

<div className="space-y-6 text-slate-400 text-sm leading-relaxed">
<div className="p-6 rounded-xl bg-slate-950/50 border border-white/5">
<h3 className="text-white font-medium mb-3 flex items-center gap-2">
<iconify-icon className="text-red-500" icon="solar:info-circle-linear"></iconify-icon> Driver Requirements
                            </h3>
<ul className="space-y-2 list-disc list-inside marker:text-slate-600">
<li>Minimum age: 21 years old</li>
<li>Valid driver's license held for at least 1 year</li>
<li>International Driving Permit required for non-EU licenses</li>
</ul>
</div>
<div className="p-6 rounded-xl bg-slate-950/50 border border-white/5">
<h3 className="text-white font-medium mb-3 flex items-center gap-2">
<iconify-icon className="text-red-500" icon="solar:map-point-linear"></iconify-icon> Route Highlights
                            </h3>
<p>This experience starts at our HQ near the Ferrari Factory. Depending on duration (20min+), the route includes the fast flowing roads towards the Apennine hills, offering a perfect mix of straights and technical curves.</p>
</div>
</div>
</div>

<div className="relative">
<div className="sticky top-24 bg-slate-950 border border-white/10 rounded-2xl shadow-2xl p-6">

<div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
<h3 className="font-semibold text-white">Book Your Drive</h3>
<span className="text-xs px-2 py-1 bg-green-500/10 text-green-500 rounded border border-green-500/20">Available Today</span>
</div>

<div className="mb-6">
<p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-3">1. Select Duration</p>
<div className="grid grid-cols-3 gap-2">
<label className="cursor-pointer">
<input checked="" className="custom-radio hidden" name="duration" type="radio"/>
<div className="border border-white/10 rounded-lg p-3 text-center hover:border-white/30 transition-all bg-slate-900">
<div className="text-sm font-medium text-white">10 min</div>
<div className="text-xs text-slate-500">€130</div>
</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio hidden" name="duration" type="radio"/>
<div className="border border-white/10 rounded-lg p-3 text-center hover:border-white/30 transition-all bg-slate-900">
<div className="text-sm font-medium text-white">20 min</div>
<div className="text-xs text-slate-500">€240</div>
<div className="text-[10px] text-green-500 mt-1">Best Value</div>
</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio hidden" name="duration" type="radio"/>
<div className="border border-white/10 rounded-lg p-3 text-center hover:border-white/30 transition-all bg-slate-900">
<div className="text-sm font-medium text-white">60 min</div>
<div className="text-xs text-slate-500">€650</div>
</div>
</label>
</div>
</div>

<div className="mb-6">
<p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-3">2. Date &amp; Start Time</p>
<div className="grid grid-cols-2 gap-3">
<div className="relative">
<input className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500" type="date" value="2023-10-25"/>
</div>
<div className="relative">
<select className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500 appearance-none">
<option>10:00 AM</option>
<option>11:30 AM</option>
<option>02:00 PM</option>
<option>04:30 PM</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-slate-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="mb-6 space-y-3">
<p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">3. Enhance Experience</p>
<label className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-slate-900/50 cursor-pointer hover:bg-slate-900 transition-colors">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded border border-white/20 flex items-center justify-center radio-indicator">
<input className="hidden peer" type="checkbox"/>
<iconify-icon className="text-transparent peer-checked:text-white" icon="solar:check-square-linear"></iconify-icon>
</div>
<div className="text-sm text-slate-300">Video Recording 4K</div>
</div>
<div className="text-xs text-slate-500 font-medium">+€30</div>
</label>
<label className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-slate-900/50 cursor-pointer hover:bg-slate-900 transition-colors">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded border border-white/20 flex items-center justify-center radio-indicator">
<input className="hidden peer" type="checkbox"/>
</div>
<div className="text-sm text-slate-300">Passenger</div>
</div>
<div className="text-xs text-slate-500 font-medium">+€20</div>
</label>
</div>

<div className="bg-slate-900 rounded-xl p-4 mb-4 border border-white/5">
<div className="flex justify-between text-sm text-slate-400 mb-2">
<span>Total Price</span>
<span>€130.00</span>
</div>
<div className="flex justify-between items-center pt-3 border-t border-white/10">
<div>
<span className="text-xs text-red-500 font-bold uppercase block">Pay Now (50%)</span>
<span className="text-xs text-slate-500">Remainder paid on day</span>
</div>
<span className="text-xl font-bold text-white">€65.00</span>
</div>
</div>

<button className="w-full bg-white text-slate-950 font-semibold py-3.5 rounded-lg mb-3 hover:bg-slate-200 transition-colors flex justify-center items-center gap-2">
                            Proceed to Checkout
                            <iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</button>
<div className="text-center">
<a className="text-xs text-slate-500 hover:text-white flex justify-center items-center gap-1" href="#">
<iconify-icon className="text-green-500" icon="solar:chat-round-dots-linear"></iconify-icon> Ask via WhatsApp
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 max-w-7xl mx-auto border-t border-white/5" id="imola">
<div className="grid md:grid-cols-2 gap-12">

<div className="bg-slate-900 rounded-2xl p-8 border border-white/5 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-32 bg-red-600/10 blur-[80px] rounded-full"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-4 text-red-500">
<iconify-icon icon="solar:flag-bold" width="20"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-widest">Ultimate Experience</span>
</div>
<h3 className="text-2xl font-semibold text-white mb-2">Imola Track Experience</h3>
<p className="text-slate-400 text-sm mb-6">Drive your supercar from Maranello to the legendary Imola circuit. 3 laps included.</p>

<div className="space-y-4 mb-8 pl-2 border-l border-white/10">
<div className="pl-4 relative">
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-700 border-2 border-slate-900"></div>
<p className="text-xs text-slate-300">Briefing &amp; Departure Maranello</p>
</div>
<div className="pl-4 relative">
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-red-600 border-2 border-slate-900"></div>
<p className="text-xs text-white font-medium">3 Laps on Imola Circuit</p>
</div>
<div className="pl-4 relative">
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-700 border-2 border-slate-900"></div>
<p className="text-xs text-slate-300">Return &amp; Certificate</p>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white/30 pb-1 hover:border-white transition-colors" href="#">
                        View Package Details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="bg-slate-900 rounded-2xl p-8 border border-white/5 relative overflow-hidden group">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-4 text-blue-500">
<iconify-icon icon="solar:users-group-rounded-bold" width="20"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-widest">Groups &amp; Agencies</span>
</div>
<h3 className="text-2xl font-semibold text-white mb-2">Tailored Group Tours</h3>
<p className="text-slate-400 text-sm mb-6">All-inclusive packages: Museum tickets, Lunch at Cavallino, and Test Drives. Minimum 5 people.</p>
<div className="grid grid-cols-2 gap-3 mb-8">
<div className="bg-slate-950 p-3 rounded-lg text-center border border-white/5">
<iconify-icon className="text-slate-500 mb-1" icon="solar:ticket-linear"></iconify-icon>
<div className="text-xs text-slate-300">Museum Tickets</div>
</div>
<div className="bg-slate-950 p-3 rounded-lg text-center border border-white/5">
<iconify-icon className="text-slate-500 mb-1" icon="solar:chef-hat-linear"></iconify-icon>
<div className="text-xs text-slate-300">Italian Lunch</div>
</div>
</div>
<a className="w-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium py-3 rounded-lg flex justify-center items-center gap-2 transition-colors" href="https://wa.me/123456789">
<iconify-icon icon="solar:chat-round-dots-linear"></iconify-icon> Request Quote
                    </a>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-950 relative" id="local">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
<div>
<h2 className="text-2xl font-semibold text-white">Maranello Guide</h2>
<p className="text-slate-400 text-sm mt-2">Curated by our local team.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 text-xs font-medium text-white bg-red-600 rounded-full">Eat &amp; Drink</button>
<button className="px-4 py-2 text-xs font-medium text-slate-300 bg-slate-900 border border-white/10 rounded-full hover:bg-slate-800">Hotels</button>
<button className="px-4 py-2 text-xs font-medium text-slate-300 bg-slate-900 border border-white/10 rounded-full hover:bg-slate-800">Parking</button>
</div>
</div>

<div className="relative bg-slate-900 rounded-2xl border border-white/5 h-80 w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Maranello_map.png/640px-Maranello_map.png')] bg-cover grayscale bg-center"></div>
<div className="relative z-10 text-center space-y-4">
<div className="inline-flex flex-col items-center">
<div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-900/50 animate-bounce">
<iconify-icon className="text-white text-xl" icon="solar:map-point-bold"></iconify-icon>
</div>
<div className="bg-slate-950 px-4 py-2 rounded-lg border border-white/10 mt-2 shadow-xl">
<p className="text-xs font-bold text-white">Start Point</p>
<p className="text-[10px] text-slate-400">Via Alfredo Dino Ferrari</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 max-w-3xl mx-auto px-6">
<h2 className="text-xl font-semibold text-white mb-6 text-center">Frequently Asked Questions</h2>
<div className="space-y-3">
<details className="group bg-slate-900 rounded-xl border border-white/5 open:bg-slate-850 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-sm text-slate-200">
<span>What happens if it rains?</span>
<iconify-icon className="group-open:rotate-180 transition-transform text-slate-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-slate-400 text-xs px-4 pb-4 leading-relaxed">
                    Test drives take place in all weather conditions. If conditions are dangerous (snow/ice), we will reschedule or refund 100% of your booking.
                </div>
</details>
<details className="group bg-slate-900 rounded-xl border border-white/5 open:bg-slate-850 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-sm text-slate-200">
<span>Do I need to pay the full amount now?</span>
<iconify-icon className="group-open:rotate-180 transition-transform text-slate-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-slate-400 text-xs px-4 pb-4 leading-relaxed">
                    No. You only pay a 50% deposit online to secure your slot. The remaining balance is paid at the desk on the day of your drive.
                </div>
</details>
</div>
</section>

<footer className="bg-slate-950 border-t border-white/5 pt-16 pb-32 md:pb-16 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="space-y-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center text-white font-bold text-xs">M</div>
<span className="text-sm font-semibold tracking-tight uppercase text-white">Test Drive Maranello</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                    Premier supercar experiences in the heart of Motor Valley since 2016.
                </p>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4">Experience</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li><a className="hover:text-red-500 transition-colors" href="#">Ferrari Test Drive</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Lamborghini Test Drive</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Imola Track Day</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Museum Combos</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4">Support</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li><a className="hover:text-red-500 transition-colors" href="#">Manage Booking</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Refund Policy</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-white text-sm font-semibold">Visit Us</h4>
<div className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<p className="text-xs text-slate-400">
                        Via Alfredo Dino Ferrari, 43<br/>
                        41053 Maranello MO, Italy<br/>
<span className="text-green-500 block mt-1">Open Today: 09:00 - 19:00</span>
</p>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center md:text-left text-[10px] text-slate-600">
            © 2023 Test Drive Maranello. Not affiliated with Ferrari S.p.A. All trademarks belong to their respective owners.
        </div>
</footer>

<div className="fixed bottom-0 left-0 w-full z-50 bg-slate-900 border-t border-white/5 p-4 flex gap-3 md:hidden">
<a className="flex-1 bg-white text-slate-950 font-semibold text-sm py-3 rounded-lg flex items-center justify-center gap-2" href="#cars">
            Book Now
        </a>
<a className="bg-green-600 text-white w-12 rounded-lg flex items-center justify-center" href="https://wa.me/123456789">
<iconify-icon icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
</a>
</div>

    </>
  );
}
