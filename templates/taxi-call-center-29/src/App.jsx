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
      

<header className="border-b border-zinc-800 px-6 py-4">
<div className="flex items-center justify-between max-w-screen-2xl mx-auto">
<div className="flex items-center gap-8">
<div className="text-xl font-semibold tracking-tight">swift<span className="text-amber-400">cabs</span></div>
<nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
<a className="text-white" href="#">Dashboard</a>
<a className="hover:text-white transition" href="#">Bookings</a>
<a className="hover:text-white transition" href="#">Drivers</a>
<a className="hover:text-white transition" href="#">Reports</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-medium">
<span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                    Online
                </div>
<div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-sm font-medium">JD</div>
</div>
</div>
</header>
<main className="max-w-screen-2xl mx-auto p-6">

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-zinc-500">Active Calls</span>
<span className="iconify w-4 h-4 text-amber-400" data-icon="lucide:phone-call" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="text-2xl font-semibold tracking-tight">12</div>
<div className="text-xs text-emerald-400 mt-1">+3 in queue</div>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-zinc-500">Today's Bookings</span>
<span className="iconify w-4 h-4 text-blue-400" data-icon="lucide:calendar" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="text-2xl font-semibold tracking-tight">847</div>
<div className="text-xs text-emerald-400 mt-1">↑ 12% from yesterday</div>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-zinc-500">Available Drivers</span>
<span className="iconify w-4 h-4 text-emerald-400" data-icon="lucide:car" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="text-2xl font-semibold tracking-tight">64</div>
<div className="text-xs text-zinc-500 mt-1">of 89 total</div>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-zinc-500">Avg Wait Time</span>
<span className="iconify w-4 h-4 text-purple-400" data-icon="lucide:clock" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="text-2xl font-semibold tracking-tight">4:32</div>
<div className="text-xs text-amber-400 mt-1">↑ 30s from avg</div>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl p-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-base font-medium">New Booking</h2>
<div className="flex items-center gap-2 text-xs text-zinc-500">
<span className="iconify w-4 h-4" data-icon="lucide:phone-incoming" style={{strokeWidth: '1.5'}}></span>
                        Incoming: +44 7911 123456
                    </div>
</div>
<div className="grid md:grid-cols-2 gap-4 mb-4">
<div>
<label className="block text-xs text-zinc-500 mb-2">Customer Name</label>
<input className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition" type="text" value="Sarah Mitchell"/>
</div>
<div>
<label className="block text-xs text-zinc-500 mb-2">Phone Number</label>
<input className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition" type="text" value="+44 7911 123456"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-4 mb-4">
<div>
<label className="block text-xs text-zinc-500 mb-2">Pickup Location</label>
<div className="relative">
<span className="iconify absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" data-icon="lucide:map-pin" style={{strokeWidth: '1.5'}}></span>
<input className="w-full bg-zinc-800 border border-zinc-700 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition" type="text" value="123 Oxford Street, London W1D"/>
</div>
</div>
<div>
<label className="block text-xs text-zinc-500 mb-2">Drop-off Location</label>
<div className="relative">
<span className="iconify absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-red-400" data-icon="lucide:map-pin" style={{strokeWidth: '1.5'}}></span>
<input className="w-full bg-zinc-800 border border-zinc-700 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition" type="text" value="Heathrow Airport Terminal 5"/>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-6">
<div>
<label className="block text-xs text-zinc-500 mb-2">Date</label>
<input className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition" type="date" value="2024-01-15"/>
</div>
<div>
<label className="block text-xs text-zinc-500 mb-2">Time</label>
<input className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition" type="time" value="14:30"/>
</div>
<div>
<label className="block text-xs text-zinc-500 mb-2">Passengers</label>
<select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition appearance-none">
<option>1</option>
<option selected="">2</option>
<option>3</option>
<option>4</option>
</select>
</div>
</div>

<label className="block text-xs text-zinc-500 mb-3">Vehicle Type</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
<div className="bg-zinc-800 border border-zinc-700 rounded-lg p-3 cursor-pointer hover:border-amber-400 transition text-center">
<span className="iconify w-6 h-6 mx-auto mb-2 text-zinc-400" data-icon="lucide:car" style={{strokeWidth: '1.5'}}></span>
<div className="text-xs font-medium">Saloon</div>
<div className="text-xs text-zinc-500">£45</div>
</div>
<div className="bg-amber-400/10 border border-amber-400 rounded-lg p-3 cursor-pointer transition text-center">
<span className="iconify w-6 h-6 mx-auto mb-2 text-amber-400" data-icon="lucide:car" style={{strokeWidth: '1.5'}}></span>
<div className="text-xs font-medium text-amber-400">Executive</div>
<div className="text-xs text-amber-400/70">£65</div>
</div>
<div className="bg-zinc-800 border border-zinc-700 rounded-lg p-3 cursor-pointer hover:border-amber-400 transition text-center">
<span className="iconify w-6 h-6 mx-auto mb-2 text-zinc-400" data-icon="lucide:truck" style={{strokeWidth: '1.5'}}></span>
<div className="text-xs font-medium">MPV</div>
<div className="text-xs text-zinc-500">£75</div>
</div>
<div className="bg-zinc-800 border border-zinc-700 rounded-lg p-3 cursor-pointer hover:border-amber-400 transition text-center">
<span className="iconify w-6 h-6 mx-auto mb-2 text-zinc-400" data-icon="lucide:bus" style={{strokeWidth: '1.5'}}></span>
<div className="text-xs font-medium">Minibus</div>
<div className="text-xs text-zinc-500">£95</div>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-zinc-800">
<div>
<div className="text-xs text-zinc-500">Estimated Fare</div>
<div className="text-xl font-semibold tracking-tight">£65.00</div>
</div>
<div className="flex gap-3">
<button className="px-4 py-2.5 text-sm text-zinc-400 hover:text-white transition">Cancel</button>
<button className="px-6 py-2.5 bg-amber-400 text-zinc-900 rounded-lg text-sm font-medium hover:bg-amber-300 transition flex items-center gap-2">
<span className="iconify w-4 h-4" data-icon="lucide:check" style={{strokeWidth: '1.5'}}></span>
                            Confirm Booking
                        </button>
</div>
</div>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
<h2 className="text-base font-medium mb-4">Call Queue</h2>
<div className="space-y-3">
<div className="bg-amber-400/10 border border-amber-400/30 rounded-lg p-3">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
<span className="text-sm font-medium">Active Call</span>
</div>
<span className="text-xs text-amber-400">02:34</span>
</div>
<div className="text-xs text-zinc-400">+44 7911 123456</div>
<div className="text-xs text-zinc-500">Sarah Mitchell</div>
</div>
<div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-3">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-zinc-500 rounded-full"></span>
<span className="text-sm font-medium text-zinc-400">Waiting</span>
</div>
<span className="text-xs text-zinc-500">01:12</span>
</div>
<div className="text-xs text-zinc-400">+44 7700 900123</div>
<div className="text-xs text-zinc-500">Unknown Caller</div>
</div>
<div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-3">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-zinc-500 rounded-full"></span>
<span className="text-sm font-medium text-zinc-400">Waiting</span>
</div>
<span className="text-xs text-zinc-500">00:45</span>
</div>
<div className="text-xs text-zinc-400">+44 7911 987654</div>
<div className="text-xs text-zinc-500">James Wilson</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-zinc-800">
<h3 className="text-sm font-medium mb-3">Quick Actions</h3>
<div className="grid grid-cols-2 gap-2">
<button className="flex items-center justify-center gap-2 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-xs transition">
<span className="iconify w-4 h-4 text-emerald-400" data-icon="lucide:phone" style={{strokeWidth: '1.5'}}></span>
                            Answer
                        </button>
<button className="flex items-center justify-center gap-2 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-xs transition">
<span className="iconify w-4 h-4 text-red-400" data-icon="lucide:phone-off" style={{strokeWidth: '1.5'}}></span>
                            End Call
                        </button>
<button className="flex items-center justify-center gap-2 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-xs transition">
<span className="iconify w-4 h-4 text-blue-400" data-icon="lucide:pause" style={{strokeWidth: '1.5'}}></span>
                            Hold
                        </button>
<button className="flex items-center justify-center gap-2 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-xs transition">
<span className="iconify w-4 h-4 text-purple-400" data-icon="lucide:forward" style={{strokeWidth: '1.5'}}></span>
                            Transfer
                        </button>
</div>
</div>
</div>
</div>

<div className="mt-6 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
<div className="flex items-center justify-between p-6 pb-4">
<h2 className="text-base font-medium">Recent Bookings</h2>
<div className="flex items-center gap-3">
<div className="relative">
<span className="iconify absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" data-icon="lucide:search" style={{strokeWidth: '1.5'}}></span>
<input className="bg-zinc-800 border border-zinc-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-amber-400 transition w-64" placeholder="Search bookings..." type="text"/>
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm">
<thead className="text-xs text-zinc-500 border-t border-zinc-800">
<tr>
<th className="text-left font-medium px-6 py-3">Booking ID</th>
<th className="text-left font-medium px-6 py-3">Customer</th>
<th className="text-left font-medium px-6 py-3">Route</th>
<th className="text-left font-medium px-6 py-3">Driver</th>
<th className="text-left font-medium px-6 py-3">Time</th>
<th className="text-left font-medium px-6 py-3">Status</th>
<th className="text-left font-medium px-6 py-3">Fare</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800">
<tr className="hover:bg-zinc-800/50 transition">
<td className="px-6 py-4 font-mono text-xs text-zinc-400">#SC-28491</td>
<td className="px-6 py-4">Emily Thompson</td>
<td className="px-6 py-4 text-zinc-400">Kings Cross → Canary Wharf</td>
<td className="px-6 py-4">Ahmed Khan</td>
<td className="px-6 py-4 text-zinc-400">14:15</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-emerald-400/10 text-emerald-400 text-xs rounded-full">In Progress</span></td>
<td className="px-6 py-4">£32.50</td>
</tr>
<tr className="hover:bg-zinc-800/50 transition">
<td className="px-6 py-4 font-mono text-xs text-zinc-400">#SC-28490</td>
<td className="px-6 py-4">Michael Brown</td>
<td className="px-6 py-4 text-zinc-400">Paddington → Gatwick Airport</td>
<td className="px-6 py-4">David Williams</td>
<td className="px-6 py-4 text-zinc-400">13:45</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-blue-400/10 text-blue-400 text-xs rounded-full">Dispatched</span></td>
<td className="px-6 py-4">£78.00</td>
</tr>
<tr className="hover:bg-zinc-800/50 transition">
<td className="px-6 py-4 font-mono text-xs text-zinc-400">#SC-28489</td>
<td className="px-6 py-4">Sophie Clarke</td>
<td className="px-6 py-4 text-zinc-400">Shoreditch → Westminster</td>
<td className="px-6 py-4">—</td>
<td className="px-6 py-4 text-zinc-400">13:30</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-amber-400/10 text-amber-400 text-xs rounded-full">Pending</span></td>
<td className="px-6 py-4">£24.00</td>
</tr>
<tr className="hover:bg-zinc-800/50 transition">
<td className="px-6 py-4 font-mono text-xs text-zinc-400">#SC-28488</td>
<td className="px-6 py-4">Robert Taylor</td>
<td className="px-6 py-4 text-zinc-400">Liverpool Street → O2 Arena</td>
<td className="px-6 py-4">James Murphy</td>
<td className="px-6 py-4 text-zinc-400">13:00</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-zinc-400/10 text-zinc-400 text-xs rounded-full">Completed</span></td>
<td className="px-6 py-4">£41.50</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>

    </>
  );
}
