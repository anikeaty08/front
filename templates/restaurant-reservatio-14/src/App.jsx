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
      

<header className="w-full px-6 py-5 flex items-center justify-between border-b border-zinc-200/60 bg-white/80 backdrop-blur-md sticky top-0 z-50">
<div className="text-lg tracking-tighter font-semibold uppercase text-zinc-900">
            TANDOORIRESTRO
        </div>
<nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Experience</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Menu</a>
<a className="text-zinc-900" href="#">Book Table</a>
</nav>
</header>

<main className="flex-grow flex items-center justify-center p-6 sm:p-12 md:p-20">
<div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

<div className="lg:col-span-5 space-y-10">
<div className="space-y-4">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-xs font-medium text-zinc-600">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        Accepting Reservations
                    </div>
<h1 className="text-4xl sm:text-5xl tracking-tight font-semibold text-zinc-900 leading-[1.1]">
                        Secure your <br className="hidden sm:block"/> dining experience.
                    </h1>
<p className="text-base text-zinc-500 leading-relaxed max-w-md">
                        Join us for an unforgettable journey through modern Indian cuisine. Please provide your details to secure a table.
                    </p>
</div>
<div className="space-y-5 pt-4 border-t border-zinc-200/60">
<h3 className="text-sm font-medium text-zinc-900">Service Hours</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-zinc-200/60 shadow-sm">
<div className="mt-0.5 text-zinc-400">
<iconify-icon icon="solar:sun-2-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Day Service</p>
<p className="text-xs text-zinc-500 mt-0.5">09:00 AM — 02:00 PM</p>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-zinc-200/60 shadow-sm">
<div className="mt-0.5 text-zinc-400">
<iconify-icon icon="solar:moon-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Night Service</p>
<p className="text-xs text-zinc-500 mt-0.5">06:00 PM — 12:00 AM</p>
</div>
</div>
</div>
</div>
</div>

<div className="hidden lg:block lg:col-span-1"></div>

<div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-zinc-200/80 relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-zinc-50 rounded-full blur-3xl -z-10 opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
<div className="mb-6">
<h2 className="text-xl tracking-tight font-semibold text-zinc-900">Guest Details</h2>
<p className="text-sm text-zinc-500 mt-1">Fill in the form below to confirm your booking.</p>
</div>
<form className="space-y-5">

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-600" htmlFor="email">Email Address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
</div>
<input className="w-full rounded-lg border border-zinc-200 bg-zinc-50/50 pl-9 pr-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-900 transition-colors" id="email" placeholder="you@example.com" required="" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-600" htmlFor="phone">Phone Number</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
</div>
<input className="w-full rounded-lg border border-zinc-200 bg-zinc-50/50 pl-9 pr-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-900 transition-colors" id="phone" placeholder="+1 (555) 000-0000" required="" type="tel"/>
</div>
</div>
</div>

<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-600" htmlFor="address">Address / Location</label>
<div className="relative">
<div className="absolute top-2.5 left-3 pointer-events-none text-zinc-400">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
</div>
<input className="w-full rounded-lg border border-zinc-200 bg-zinc-50/50 pl-9 pr-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-900 transition-colors" id="address" placeholder="123 Dining Street, Cityville" required="" type="text"/>
</div>
</div>
<div className="border-t border-zinc-100 my-2"></div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-600" htmlFor="date">Reservation Date</label>
<input className="w-full rounded-lg border border-zinc-200 bg-zinc-50/50 px-3 py-2 text-sm text-zinc-900 focus:border-zinc-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-900 transition-colors" id="date" required="" type="date"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-600" htmlFor="time">Preferred Time</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
</div>
<select className="w-full rounded-lg border border-zinc-200 bg-zinc-50/50 pl-9 pr-8 py-2 text-sm text-zinc-900 focus:border-zinc-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-900 transition-colors cursor-pointer" id="time" required="">
<option disabled="" selected="" value="">Select a slot</option>
<optgroup label="Day Service (9 AM - 2 PM)">
<option value="09:00">09:00 AM</option>
<option value="09:30">09:30 AM</option>
<option value="10:00">10:00 AM</option>
<option value="10:30">10:30 AM</option>
<option value="11:00">11:00 AM</option>
<option value="11:30">11:30 AM</option>
<option value="12:00">12:00 PM</option>
<option value="12:30">12:30 PM</option>
<option value="13:00">01:00 PM</option>
<option value="13:30">01:30 PM</option>
</optgroup>
<optgroup label="Night Service (6 PM - 12 AM)">
<option value="18:00">06:00 PM</option>
<option value="18:30">06:30 PM</option>
<option value="19:00">07:00 PM</option>
<option value="19:30">07:30 PM</option>
<option value="20:00">08:00 PM</option>
<option value="20:30">08:30 PM</option>
<option value="21:00">09:00 PM</option>
<option value="21:30">09:30 PM</option>
<option value="22:00">10:00 PM</option>
<option value="22:30">10:30 PM</option>
<option value="23:00">11:00 PM</option>
<option value="23:30">11:30 PM</option>
</optgroup>
</select>
</div>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-zinc-900 text-white rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-zinc-900 transition-all flex items-center justify-center gap-2 shadow-sm" type="submit">
                            Confirm Booking
                            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</main>

<footer className="w-full py-6 text-center border-t border-zinc-200/60 mt-auto bg-white">
<div className="text-xs text-zinc-400 font-medium">
            © 2023 Tandoori Restro. Design crafted with precision.
        </div>
</footer>

    </>
  );
}
