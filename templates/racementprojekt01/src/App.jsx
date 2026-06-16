import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tight text-lg flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs">R</div>
                RACEMENT
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#fleet">The Fleet</a>
<a className="hover:text-white transition-colors duration-200" href="#track">Track Specs</a>
<a className="hover:text-white transition-colors duration-200" href="#booking">Book Session</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-semibold hover:bg-zinc-200 transition-colors" href="#booking">
<span>Reserve Now</span>
<i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
<button className="md:hidden text-zinc-300">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Now open for weekend bookings
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                Precision RC <br/>
<span className="text-zinc-500">Racing Experience.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed">
                Master the track with professional-grade 1/10 scale touring cars. 
                Experience real physics, telemetry, and competition in Warsaw.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-2" href="#booking">
                    Book a Ride
                </a>
<a className="w-full sm:w-auto px-8 py-3 glass border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2" href="#fleet">
                    View Cars
                </a>
</div>
</div>
</header>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-950/50" id="fleet">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">Select Your Machine</h2>
<p className="text-zinc-400 text-sm">Three distinct classes. One track. Choose your weapon.</p>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
<span className="px-2 py-1 rounded bg-zinc-900 border border-white/5 text-zinc-300">4WD</span>
<span className="px-2 py-1 rounded bg-zinc-900 border border-white/5 text-zinc-300">Brushless</span>
<span className="px-2 py-1 rounded bg-zinc-900 border border-white/5 text-zinc-300">LiPo Power</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative rounded-xl border border-white/10 bg-zinc-900/40 overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="h-48 bg-zinc-900 relative overflow-hidden">
<img alt="Speedster" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-mono text-white border border-white/10">
                            CLASS A
                        </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-medium text-white mb-1">Phantom GT</h3>
<p className="text-xs text-zinc-500">High-Grip Touring</p>
</div>
<i className="w-5 h-5 text-yellow-500/80" data-lucide="zap"></i>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<p className="text-[10px] uppercase tracking-wider text-zinc-600 mb-1">Top Speed</p>
<p className="text-sm text-zinc-300 font-medium">65 km/h</p>
</div>
<div>
<p className="text-[10px] uppercase tracking-wider text-zinc-600 mb-1">Handling</p>
<p className="text-sm text-zinc-300 font-medium">Precise</p>
</div>
</div>
<button className="w-full py-2 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group-hover:bg-white group-hover:text-black">
                            Select Phantom
                        </button>
</div>
</div>

<div className="group relative rounded-xl border border-white/10 bg-zinc-900/40 overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="h-48 bg-zinc-900 relative overflow-hidden">
<img alt="Drift" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1552160753-117159d79631?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-mono text-white border border-white/10">
                            CLASS B
                        </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-medium text-white mb-1">Sidewinder X</h3>
<p className="text-xs text-zinc-500">Drift Spec</p>
</div>
<i className="w-5 h-5 text-indigo-400" data-lucide="wind"></i>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<p className="text-[10px] uppercase tracking-wider text-zinc-600 mb-1">Drive</p>
<p className="text-sm text-zinc-300 font-medium">RWD</p>
</div>
<div>
<p className="text-[10px] uppercase tracking-wider text-zinc-600 mb-1">Tires</p>
<p className="text-sm text-zinc-300 font-medium">Hard Compound</p>
</div>
</div>
<button className="w-full py-2 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group-hover:bg-white group-hover:text-black">
                            Select Sidewinder
                        </button>
</div>
</div>

<div className="group relative rounded-xl border border-white/10 bg-zinc-900/40 overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="h-48 bg-zinc-900 relative overflow-hidden">
<img alt="Buggy" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1532906619279-a79815049536?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-mono text-white border border-white/10">
                            CLASS C
                        </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-medium text-white mb-1">Terra Rover</h3>
<p className="text-xs text-zinc-500">Off-Road Buggy</p>
</div>
<i className="w-5 h-5 text-emerald-500/80" data-lucide="mountain"></i>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<p className="text-[10px] uppercase tracking-wider text-zinc-600 mb-1">Suspension</p>
<p className="text-sm text-zinc-300 font-medium">Long Travel</p>
</div>
<div>
<p className="text-[10px] uppercase tracking-wider text-zinc-600 mb-1">Terrain</p>
<p className="text-sm text-zinc-300 font-medium">All-Surface</p>
</div>
</div>
<button className="w-full py-2 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group-hover:bg-white group-hover:text-black">
                            Select Rover
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="booking">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 space-y-8">
<div>
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">Reserve Your Session</h2>
<p className="text-zinc-400 leading-relaxed text-sm">
                            Slots are available in 15-minute intervals. Price includes car rental, battery pack, and a brief tutorial session.
                        </p>
</div>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-zinc-300" data-lucide="clock"></i>
</div>
<div>
<h4 className="text-sm font-medium text-white">15 Min Sessions</h4>
<p className="text-xs text-zinc-500 mt-1">Perfect for quick races or time trials.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-zinc-300" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="text-sm font-medium text-white">Warsaw HQ</h4>
<p className="text-xs text-zinc-500 mt-1">Indoor carpet track with timing system.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-zinc-300" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="text-sm font-medium text-white">Insurance Included</h4>
<p className="text-xs text-zinc-500 mt-1">Drive without worry. Minor crashes covered.</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="glass-panel rounded-2xl p-6 md:p-8">
<form className="space-y-6" onsubmit="event.preventDefault();">

<div>
<label className="block text-xs font-medium text-zinc-400 mb-3 uppercase tracking-wider">Select Date</label>
<div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
<button className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-white text-black border border-transparent shadow-lg shrink-0">
<span className="text-[10px] font-medium opacity-60">Mon</span>
<span className="text-lg font-bold">14</span>
</button>
<button className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-zinc-900 border border-white/10 hover:border-white/30 transition-colors shrink-0">
<span className="text-[10px] text-zinc-500 font-medium">Tue</span>
<span className="text-lg text-white font-medium">15</span>
</button>
<button className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-zinc-900 border border-white/10 hover:border-white/30 transition-colors shrink-0">
<span className="text-[10px] text-zinc-500 font-medium">Wed</span>
<span className="text-lg text-white font-medium">16</span>
</button>
<button className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-zinc-900 border border-white/10 hover:border-white/30 transition-colors shrink-0">
<span className="text-[10px] text-zinc-500 font-medium">Thu</span>
<span className="text-lg text-white font-medium">17</span>
</button>
<button className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-zinc-900 border border-white/10 hover:border-white/30 transition-colors shrink-0">
<span className="text-[10px] text-zinc-500 font-medium">Fri</span>
<span className="text-lg text-white font-medium">18</span>
</button>
</div>
</div>

<div>
<label className="block text-xs font-medium text-zinc-400 mb-3 uppercase tracking-wider">Available Times</label>
<div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
<button className="py-2 text-sm rounded border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">16:00</button>
<button className="py-2 text-sm rounded border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">16:30</button>
<button className="py-2 text-sm rounded bg-white/10 border border-indigo-500/50 text-white shadow-[0_0_15px_rgba(99,102,241,0.2)]">17:00</button>
<button className="py-2 text-sm rounded border border-white/10 text-zinc-600 cursor-not-allowed opacity-50 relative overflow-hidden">
                                        17:30
                                        <div className="absolute inset-0 bg-white/5 skew-x-12"></div>
</button>
<button className="py-2 text-sm rounded border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">18:00</button>
<button className="py-2 text-sm rounded border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">18:30</button>
<button className="py-2 text-sm rounded border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">19:00</button>
<button className="py-2 text-sm rounded border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">19:30</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
<div className="space-y-1">
<label className="text-xs text-zinc-500">Name</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500">Email</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="john@example.com" type="email"/>
</div>
</div>
<button className="w-full py-3 bg-white text-black font-medium rounded hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 mt-2" type="submit">
                                Confirm Booking
                                <span className="text-zinc-500 text-xs font-normal ml-1">(Pay at venue)</span>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 py-12 mt-auto">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 font-bold text-[10px]">R</div>
<span className="text-sm text-zinc-400 font-medium">Racement.pl</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Safety</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-8 text-center md:text-left">
<p className="text-[10px] text-zinc-700">© 2023 Racement Sp. z o.o. Warsaw, Poland.</p>
</div>
</footer>


    </>
  );
}
